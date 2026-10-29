/**
 * Production Security & SSRF Protection Utilities
 * Blocks private IP ranges, cloud metadata endpoints, and malicious URL schemes.
 */

export interface UrlValidationResult {
  isValid: boolean;
  sanitizedUrl?: string;
  error?: string;
}

const BLOCKED_HOSTNAMES = new Set([
  "localhost",
  "127.0.0.1",
  "0.0.0.0",
  "::1",
  "169.254.169.254", // AWS/GCP/Azure link-local metadata
  "metadata.google.internal",
  "instance-data"
]);

const PRIVATE_IP_REGEX = /^(?:10\.|127\.|172\.(?:1[6-9]|2[0-9]|3[01])\.|192\.168\.)/;

export function validateTargetUrl(rawUrl: string): UrlValidationResult {
  if (!rawUrl || typeof rawUrl !== "string") {
    return { isValid: false, error: "URL is required." };
  }

  const trimmed = rawUrl.trim();

  // Enforce reasonable length
  if (trimmed.length > 2048) {
    return { isValid: false, error: "URL exceeds maximum allowable length (2048 characters)." };
  }

  let parsed: URL;
  try {
    // Add default protocol if omitted
    const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `http://${trimmed}`;
    parsed = new URL(withProtocol);
  } catch {
    return { isValid: false, error: "Malformed URL syntax." };
  }

  // Only allow HTTP/HTTPS
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return { isValid: false, error: "Only HTTP and HTTPS protocols are permitted." };
  }

  const hostname = parsed.hostname.toLowerCase();

  // Check blocked hostnames
  if (BLOCKED_HOSTNAMES.has(hostname) || hostname.endsWith(".local") || hostname.endsWith(".internal")) {
    return { isValid: false, error: "Target hostname is restricted for security (SSRF prevention)." };
  }

  // Check private IP ranges
  if (PRIVATE_IP_REGEX.test(hostname)) {
    return { isValid: false, error: "Access to private network address ranges is prohibited." };
  }

  return {
    isValid: true,
    sanitizedUrl: parsed.toString()
  };
}

export function sanitizeTextInput(input: string, maxLength: number = 500): string {
  if (!input || typeof input !== "string") return "";
  return input
    .slice(0, maxLength)
    .replace(/[<>]/g, "") // Strip raw tag openers
    .trim();
}

