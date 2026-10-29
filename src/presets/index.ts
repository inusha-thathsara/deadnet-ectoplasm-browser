import type { PresetSite } from "../types/index.ts";

export const GOLDEN_PRESETS: PresetSite[] = [
  {
    id: "dreamcast-shrine-1999",
    name: "The Spiral: Sega Dreamcast 9.9.99 Fanatics",
    year: "1999",
    category: "Indie Gaming Shrine",
    originalUrl: "http://www.geocities.com/Tokyo/Flats/9999/dreamcast_underground.html",
    tagline: "North American Launch Countdown, VMU Hacks, and Shenmue Secrets",
    description: "An authentic 1999 GeoCities personal gaming shrine built during the launch week of the Sega Dreamcast. Crippled by defunct Perl guestbook scripts and broken image links.",
    pathologySummary: {
      brokenImages: 3,
      deadLinks: 4,
      defunctCgi: 2
    },
    bundle: {
      targetUrl: "http://www.geocities.com/Tokyo/Flats/9999/dreamcast_underground.html",
      era: "Late 1999 GeoCities HTML 3.2",
      title: "The Spiral: Sega Dreamcast 9.9.99 Underground",
      manifest: {
        siteTitle: "The Spiral: Sega Dreamcast 9.9.99 Underground",
        estimatedEra: "Late 1999 GeoCities HTML 3.2",
        originalAuthorHandle: "~SonicMaster99~",
        survivingMainContent: "WELCOME TO THE ONLY UNCENSORED SEGA DREAMCAST UNDERGROUND PAGE ON GEOCITIES! 128-BIT POWER IS HERE! 9.9.99 NEVER FORGET!",
        brokenImages: [
          {
            src: "images/dc_swirl_animated_flame.gif",
            altText: "Official Orange Swirl Spinning on Fire",
            surroundingContext: "<td align='center'><img src='images/dc_swirl_animated_flame.gif'></td>"
          },
          {
            src: "screenshots/shenmue_leaked_beta_yokosuka.jpg",
            altText: "Yu Suzuki Leaked Shenmue Camera Angle",
            surroundingContext: "<p>Check out this exclusive leaked beta screenshot from Tokyo Game Show '99!</p>"
          },
          {
            src: "banners/best_viewed_netscape4_800x600.gif",
            altText: "Best viewed in Netscape Navigator 4.08",
            surroundingContext: "<div align='center'><img src='banners/best_viewed_netscape4_800x600.gif'></div>"
          }
        ],
        deadLinks: [
          {
            href: "vmu/save_editor_v12.zip",
            anchorText: "DOWNLOAD VMU SAVE EDITOR v1.2 (DIRECT MEMORY CARD HEX FIX)",
            expectedTopic: "Visual Memory Unit save editor download and hex offsets for Sonic Adventure rings"
          },
          {
            href: "http://geocities.com/Heartland/Meadow/3141/ringlink.html",
            anchorText: "Previous Site in the Sonic Fanatics Webring",
            expectedTopic: "1999 GeoCities Webring hop to neighboring Sonic community site"
          },
          {
            href: "reviews/soul_calibur_import.html",
            anchorText: "SOUL CALIBUR J-IMPORT REVIEW (10/10 PERFECT SCORE!)",
            expectedTopic: "Full launch review of Soul Calibur 60FPS running on Katana arcade board"
          }
        ],
        defunctScriptsAndForms: [
          {
            actionUrl: "/cgi-bin/guestbook.pl?user=SonicMaster99",
            formHtml: "<form action='/cgi-bin/guestbook.pl' method='POST'><input name='name'><input name='vmu_serial'><textarea name='comment'></textarea><input type='submit'></form>",
            intendedBehavior: "Appends visitor comment and VMU Serial number to a flat text file on GeoCities CGI server"
          },
          {
            actionUrl: "/cgi-bin/counter.cgi?df=sonicmaster.dat",
            formHtml: "<img src='/cgi-bin/counter.cgi?df=sonicmaster.dat'>",
            intendedBehavior: "Odometer-style numerical hit counter tracking unique pageviews"
          }
        ]
      },
      lore: [
        {
          sourceTitle: "Sega-16 Forum Archives: 'Looking for old 1999 Dreamcast VMU tools'",
          sourceUrl: "https://www.sega-16.com/forum/showthread.php?1999-vmu-save-tools",
          forumSnippet: "SonicMaster99's GeoCities site had that famous VMU save editor that let you unlock Super Sonic immediately without collecting all 130 emblems in Sonic Adventure.",
          year: 2004,
          relevanceConfidence: 0.94
        },
        {
          sourceTitle: "Reddit r/dreamcast: 'Whatever happened to the 9.9.99 Webring?'",
          sourceUrl: "https://reddit.com/r/dreamcast/comments/old_9999_webrings",
          forumSnippet: "The site was maintained by a high school kid in Ohio who had an import NTSC-J unit months before US launch. The guestbook had messages from Peter Moore's PR team.",
          year: 2021,
          relevanceConfidence: 0.91
        }
      ],
      restoredHtml1998: `<!DOCTYPE html>
<html>
<head>
  <title>The Spiral: Sega Dreamcast 9.9.99 Underground</title>
  <style>
    body { background-color: #000033; color: #00FFCC; font-family: 'Courier New', monospace; margin: 16px; }
    h1 { color: #FF9900; text-align: center; font-family: 'Impact', fantasy; letter-spacing: 2px; }
    h2 { color: #00FFFF; border-bottom: 2px dashed #FF9900; padding-bottom: 4px; }
    table { border: 3px ridge #FF9900; background-color: #000022; width: 100%; }
    th { background-color: #990000; color: #FFFFFF; padding: 6px; }
    td { padding: 8px; vertical-align: top; }
    a { color: #FFFF00; text-decoration: underline; font-weight: bold; }
    a:hover { background-color: #FF0000; color: #FFFFFF; }
    .marquee { background-color: #FF9900; color: #000000; font-weight: bold; padding: 4px; }
    .vmu-box { border: 2px inset #00FFCC; background-color: #001122; padding: 10px; margin: 10px 0; }
    .guestbook-entry { border-bottom: 1px dotted #FF9900; padding: 6px 0; font-size: 13px; }
    .badge { border: 1px solid #FF9900; padding: 2px 6px; font-size: 11px; color: #FF9900; display: inline-block; }
  </style>
</head>
<body>
  <div class="marquee">
    *** LATEST UPDATE: 9.9.99 HAS ARRIVED! OVER 300,000 PRE-ORDERS SHIPPED ACROSS USA! SHENMUE IS REAL! ***
  </div>

  <table align="center" cellpadding="4" cellspacing="2">
    <tr>
      <td colspan="2" align="center">
        <h1>THE SPIRAL: DREAMCAST 9.9.99 UNDERGROUND</h1>
        <p><i>The Web's #1 Unofficial Sega Katana Architecture & Hardware Resource</i></p>
        <p>[ <a href="#news">News</a> | <a href="#vmu">VMU Hex Vault</a> | <a href="#reviews">Soul Calibur</a> | <a href="#guestbook">Sign Guestbook</a> ]</p>
      </td>
    </tr>
    <tr>
      <td width="70%">
        <h2 id="news">⚡ 128-BIT POWER HAS ARRIVED</h2>
        <p>Brothers and sisters of the Blue Hedgehog, the waiting is finally over. Yesterday, September 9, 1999, the console war changed forever. While Sony scrambles with vague 'Emotion Engine' pre-rendered tech demos, the Dreamcast is on retailer shelves today for $199 USD!</p>
        
        <p>Equipped with a genuine Hitachi SH-4 200MHz CPU, PowerVR CLX2 GPU pushing 3 million polygons/sec, and a built-in Rockwell 56kbps dial-up modem! I dialed into SegaNet yesterday with zero dropped packets!</p>

        <h2 id="vmu">💾 VMU HEX EDITOR: SONIC ADVENTURE EMBL-EM LOCKOUT</h2>
        <div class="vmu-box">
          <p><b>EXHUMED TOOL ARCHIVE [Healed by DeadNet Engine]:</b></p>
          <p>The original binary <code>vmu_save_editor_v12.zip</code> vanished when GeoCities closed in 2009. DeadNet's open-weight AI reconstructed the exact hex offset documentation based on surviving 2004 Sega-16 forum records:</p>
          <pre style="background:#000; color:#33FF33; padding:8px; border:1px solid #33FF33;">
FILE: VMSAVE_SONIC_01.BIN (128 Blocks / 512 Bytes)
OFFSET 0x004A: Set [FF FF] -> All 130 Emblems Unlocked!
OFFSET 0x0062: Set [03 E7] -> 999 Rings in Chaos Garden!
OFFSET 0x008C: Set [01]    -> Super Sonic in Action Stages!
          </pre>
          <p><a href="javascript:showEctoNotice('Hex offsets saved to clipboard! Ready to flash to your VMU emulator.')">📥 [COPY VERIFIED VMU OFFSETS TO CLIPBOARD]</a></p>
        </div>

        <h2 id="reviews">⚔️ SOUL CALIBUR J-IMPORT LAUNCH REVIEW</h2>
        <p><b>RATING: 10/10 - MASTERPIECE OF HUMAN CIVILIZATION.</b> Namco did not just port the System 12 arcade game; they rebuilt it from scratch using Katana DirectX APIs. 60 frames per second without a single stutter in 640x480 VGA mode!</p>
      </td>

      <td width="30%">
        <div style="border: 2px solid #FF9900; padding: 8px; background: #000044; text-align: center;">
          <p><b>ODOMETER HIT COUNTER:</b></p>
          <div style="background:#000; color:#FF0000; font-family:'Courier New'; font-size:20px; font-weight:bold; letter-spacing:4px; padding:4px; display:inline-block; border:2px inset #999;">
            048,291
          </div>
          <p style="font-size:11px;">You are visitor 48,291 since June 1999!</p>
        </div>

        <br>
        <div style="border: 1px dashed #00FFCC; padding: 8px; font-size:12px;">
          <p><b>WEBMASTER SPECS:</b></p>
          <p>Handle: ~SonicMaster99~<br>
          ISP: MindSpring Dialup<br>
          Browser: Netscape 4.7<br>
          Monitor: 17" Trinitron CRT</p>
          <hr color="#00FFCC">
          <p><b>RING OF DREAMCAST WEBSITES:</b></p>
          <p>[ <a href="javascript:showEctoNotice('Navigating to Webring Neighbor: Sonic Chaos Central')">&lt;&lt; Prev</a> ] [ <a href="javascript:showEctoNotice('Random Dreamcast Webring Hop')">Random</a> ] [ <a href="javascript:showEctoNotice('Next Webring Site: VMU Paradise')">Next &gt;&gt;</a> ]</p>
        </div>
      </td>
    </tr>

    <tr>
      <td colspan="2">
        <h2 id="guestbook">📖 THE SPIRAL REANIMATED GUESTBOOK</h2>
        <p><i>The original GeoCities Perl CGI guestbook (<code>/cgi-bin/guestbook.pl</code>) died when Yahoo shut the servers down. DeadNet has reanimated the guestbook using a client-side localStorage shim!</i></p>

        <div id="guestbook-list" style="background:#000; border:1px solid #FF9900; padding:10px; max-height:180px; overflow-y:auto;">
          <div class="guestbook-entry">
            <b>Tails_Flight_99</b> (Sept 10, 1999 - 02:14 AM EST):<br>
            "Just picked up my DC from Babbages at midnight! Sonic running down the skyscraper made my jaw hit the carpet!"
          </div>
          <div class="guestbook-entry">
            <b>Shenmue_Seeker</b> (Sept 11, 1999 - 11:42 PM PST):<br>
            "Does anyone know if the forklift driving will actually be in the US version? Suzuki-san is a visionary."
          </div>
        </div>

        <br>
        <form id="resurrected-guestbook-form" onsubmit="return handleGuestbookSubmit(event)" style="background:#001122; border:1px solid #00FFCC; padding:10px;">
          <p><b>SIGN THE PERPETUAL GUESTBOOK:</b></p>
          Name / Handle: <input type="text" id="gb-name" required style="background:#000; color:#00FFCC; border:1px solid #FF9900;"> 
          VMU ID: <input type="text" id="gb-vmu" placeholder="e.g. HKT-7000" style="background:#000; color:#00FFCC; border:1px solid #FF9900;"><br><br>
          Message: <br>
          <textarea id="gb-message" rows="3" style="width:100%; background:#000; color:#00FFCC; border:1px solid #FF9900;" placeholder="Leave your message for 1999..." required></textarea><br><br>
          <input type="submit" value="SUBMIT TO GUESTBOOK.PL (CLIENT-JS SHIM)" style="background:#FF9900; color:#000; font-weight:bold; padding:6px 12px; cursor:pointer;">
        </form>
      </td>
    </tr>
  </table>

  <script>
    function showEctoNotice(msg) {
      var toast = document.getElementById('ecto-retro-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'ecto-retro-toast';
        toast.style = 'position:fixed; bottom:20px; right:20px; background:#002b11; color:#39FF14; border:2px solid #39FF14; padding:10px 16px; font-family:monospace; font-size:12px; font-weight:bold; box-shadow:0 0 15px rgba(57,255,20,0.5); z-index:99999; border-radius:4px;';
        document.body.appendChild(toast);
      }
      toast.innerHTML = '🔮 [ECTOPLASM SHIM]: ' + msg;
      toast.style.display = 'block';
      setTimeout(function() { toast.style.display = 'none'; }, 3500);
    }

    function handleGuestbookSubmit(e) {
      e.preventDefault();
      var name = document.getElementById('gb-name').value;
      var msg = document.getElementById('gb-message').value;
      var list = document.getElementById('guestbook-list');
      var entry = document.createElement('div');
      entry.className = 'guestbook-entry';
      entry.innerHTML = '<b>' + name + '</b> (Today - Just now via Client Shim):<br>"' + msg + '"';
      list.prepend(entry);
      document.getElementById('gb-name').value = '';
      showEctoNotice('Guestbook entry recorded into local Ectoplasm storage shim!');
      return false;
    }
  </script>
</body>
</html>`,
      xrayHtml1998: `<!DOCTYPE html>
<html>
<head>
  <title>[X-RAY PROVENANCE] The Spiral: Sega Dreamcast 9.9.99</title>
  <style>
    body { background-color: #030806; color: #39FF14; font-family: 'Courier New', monospace; margin: 16px; }
    h1 { color: #00FF88; text-align: center; font-family: 'Impact', fantasy; letter-spacing: 2px; }
    h2 { color: #39FF14; border-bottom: 2px solid #39FF14; padding-bottom: 4px; }
    table { border: 2px solid #39FF14; background-color: #051208; width: 100%; }
    th { background-color: #0d2813; color: #39FF14; padding: 6px; }
    td { padding: 8px; vertical-align: top; }
    a { color: #00FFFF; text-decoration: underline; font-weight: bold; }
    .marquee { background-color: #00FF88; color: #000000; font-weight: bold; padding: 4px; }
    
    /* ECTOPLASM X-RAY PROVENANCE HIGHLIGHTING */
    [data-ectoplasm="reconstructed"] {
      border: 2px dashed #39FF14 !important;
      background: rgba(57, 255, 20, 0.12) !important;
      position: relative;
      cursor: help;
      padding: 6px;
      margin: 4px 0;
      box-shadow: 0 0 12px rgba(57, 255, 20, 0.35);
    }
    [data-ectoplasm="reconstructed"]::before {
      content: "🔮 ECTOPLASM RECONSTRUCTION [Confidence: " attr(data-confidence) "] Provenance: " attr(data-evidence);
      display: block;
      background: #39FF14;
      color: #000;
      font-size: 10px;
      font-weight: bold;
      padding: 2px 6px;
      margin-bottom: 4px;
    }
  </style>
</head>
<body>
  <div class="marquee">
    *** X-RAY PROVENANCE VIEW: GREEN GLOW INDICATES AI-REANIMATED ARTIFACTS GROUNDED IN HISTORICAL CITATIONS ***
  </div>

  <table align="center" cellpadding="4" cellspacing="2">
    <tr>
      <td colspan="2" align="center">
        <h1>THE SPIRAL: DREAMCAST 9.9.99 UNDERGROUND</h1>
        <p><i>Digital Archaeology Diagnostics: 3 Broken Images Healed • 1 Lost Zip Synthesized • 1 CGI Script Shimmed</i></p>
      </td>
    </tr>
    <tr>
      <td width="70%">
        <h2>⚡ 128-BIT POWER HAS ARRIVED (SURVIVING ORIGINAL ARCHIVAL TEXT)</h2>
        <p>Brothers and sisters of the Blue Hedgehog, the waiting is finally over. Yesterday, September 9, 1999, the console war changed forever.</p>

        <div data-ectoplasm="reconstructed" data-confidence="0.94" data-evidence="Surviving 2004 Sega-16 forum thread #1999 citing SonicMaster99's hex table">
          <h2>💾 RECONSTRUCTED ARTIFACT: VMU HEX ENGINE OFFSETS</h2>
          <p>The original binary file <code>vmu_save_editor_v12.zip</code> was lost in 2009. Synthesized these exact byte offsets verified against historical forum mentions:</p>
          <pre style="background:#000; color:#39FF14; padding:6px;">
OFFSET 0x004A: Set [FF FF] -> All 130 Emblems Unlocked!
OFFSET 0x0062: Set [03 E7] -> 999 Rings in Chaos Garden!
          </pre>
        </div>

        <div data-ectoplasm="reconstructed" data-confidence="0.91" data-evidence="Reddit r/dreamcast 2021 historical recollection of Soul Calibur 640x480 VGA reviews">
          <h2>⚔️ RESTORED REVIEW: SOUL CALIBUR J-IMPORT (10/10)</h2>
          <p>Healed missing subpage content: "Namco rebuilt Soul Calibur for Katana DirectX APIs at 60 FPS without a single dropped frame in 640x480 VGA."</p>
        </div>
      </td>

      <td width="30%">
        <div data-ectoplasm="reconstructed" data-confidence="0.98" data-evidence="Wayback Machine CDX timestamp match for /cgi-bin/counter.cgi hit state">
          <p><b>ODOMETER HIT COUNTER (CGI SHIM):</b></p>
          <div style="background:#000; color:#39FF14; font-size:18px; font-weight:bold; padding:4px;">
            048,291
          </div>
          <p style="font-size:11px;">Restored from 1999 CDX archive baseline.</p>
        </div>
      </td>
    </tr>

    <tr>
      <td colspan="2">
        <div data-ectoplasm="reconstructed" data-confidence="0.95" data-evidence="CGI /cgi-bin/guestbook.pl reanimated via localStorage client-side transpiler">
          <h2>📖 PERPETUAL GUESTBOOK (CGI-TO-JS SHIM)</h2>
          <p>Original Perl script replaced with self-contained client-side state machine. Preserves original author handle: <code>~SonicMaster99~</code>.</p>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`,
      modernView: {
        brandName: "The Spiral 9.9.99",
        tagline: "Resurrected Sega Katana Architecture & Launch Archive",
        navItems: [
          { label: "Hardware Specs", href: "#specs" },
          { label: "VMU Hex Docs", href: "#vmu" },
          { label: "Launch Reviews", href: "#reviews" },
          { label: "Guestbook", href: "#guestbook" }
        ],
        heroHeadline: "128-Bit Power, Reincarnated for 2026",
        heroSubheadline: "Originally created on September 10, 1999 by ~SonicMaster99~. Exhumed from the GeoCities digital graveyard and reanimated into a clean modern interface.",
        entities: [
          {
            id: "spec-hitachi",
            type: "spec",
            title: "Katana Architecture Specification",
            date: "September 1999",
            author: "SonicMaster99",
            content: "Hitachi SH-4 200MHz RISC CPU, NEC/VideoLogic PowerVR CLX2 GPU capable of 3.4M polygons/sec, 16MB main SDRAM, and built-in 56kbps V.90 modem.",
            tags: ["Hardware", "Katana", "Sega"],
            confidence: 1.0,
            isAiReconstructed: false
          },
          {
            id: "vmu-hex-patch",
            type: "download",
            title: "VMU Sonic Adventure Hex Offset Table",
            date: "Reconstructed 2026",
            author: "DeadNet Necromancy Engine",
            content: "Offsets for VMSAVE_SONIC_01.BIN: 0x004A [FF FF] unlocks 130 emblems, 0x0062 [03 E7] grants 999 Chao garden rings.",
            tags: ["VMU", "Hacks", "Save Editing"],
            confidence: 0.94,
            isAiReconstructed: true,
            evidenceCitation: "Sega-16 Forum Archives #1999 (Historical Record)"
          },
          {
            id: "soul-calibur-review",
            type: "article",
            title: "Launch Review: Soul Calibur (10/10)",
            date: "September 1999",
            author: "SonicMaster99",
            content: "A benchmark in arcade-to-home conversion. Runs natively at 60 FPS with 480p VGA box output.",
            tags: ["Reviews", "Fighting Games"],
            confidence: 0.91,
            isAiReconstructed: true,
            evidenceCitation: "Reddit r/dreamcast historical consensus"
          }
        ],
        guestbookEntries: [
          { name: "Tails_Flight_99", date: "Sept 10, 1999", message: "Picked up my DC from Babbages at midnight! Sonic down the skyscraper blew my mind!", isAiSimulated: false },
          { name: "Shenmue_Seeker", date: "Sept 11, 1999", message: "Suzuki-san's vision for Yokosuka is the pinnacle of open worlds.", isAiSimulated: false },
          { name: "Ectoplasm_Observer", date: "Oct 27, 2026", message: "Resurrected 27 years later via DeadNet Engine. The spiral lives on.", isAiSimulated: true }
        ],
        footerStats: {
          originalHits: 48291,
          resurrectedLinksCount: 4,
          yearEstablished: "1999"
        }
      },
      telemetryLogs: [
        {
          id: "log-1",
          timestamp: "00:01.120",
          stage: "DISCOVERY",
          level: "info",
          message: "Wayback CDX API mapped snapshot at timestamp 19991012142010. Stripping Wayback banner with id_ modifier."
        },
        {
          id: "log-2",
          timestamp: "00:02.450",
          stage: "EXHUMATION",
          level: "warn",
          message: "Archival DOM scanner detected 3 broken image tags (naturalWidth === 0) and defunct /cgi-bin/guestbook.pl."
        },
        {
          id: "log-3",
          timestamp: "00:03.880",
          stage: "HISTORICAL_GROUNDING",
          level: "info",
          message: "Historical index located 2 surviving Sega-16 forum discussions detailing lost vmu_save_editor_v12.zip hex offsets."
        },
        {
          id: "log-4",
          timestamp: "00:05.310",
          stage: "NECROMANCY",
          level: "ectoplasm",
          message: "Digital Archaeology Engine executed Pass 1 (HTML 3.2 restoration) + Pass 2 (CGI-to-JS client shim). Provenance tags applied."
        },
        {
          id: "log-5",
          timestamp: "00:06.100",
          stage: "DURABILITY",
          level: "success",
          message: "Autonomous exhumation workflow completed state transition. All 3 viewport modes ready for Ectoplasm Slider scrubbing."
        }
      ],
      sentryTraceId: "sentry_trace_dc99_7f8a9b2c3d4e"
    }
  },
  {
    id: "aura3d-oss-2002",
    name: "Aura3D: Spatial Sound for Linux & BeOS",
    year: "2002",
    category: "Open-Source Library",
    originalUrl: "http://aura3d.sourceforge.net/docs/manual_v084.html",
    tagline: "Hardware-Accelerated 3D Positional Audio Daemon (v0.8.4b)",
    description: "An early 2000s pioneering open-source Linux sound library designed for Aureal Vortex 2 chips. Left abandoned after company lawsuits and SourceForge repository migration rot.",
    pathologySummary: {
      brokenImages: 2,
      deadLinks: 5,
      defunctCgi: 1
    },
    bundle: {
      targetUrl: "http://aura3d.sourceforge.net/docs/manual_v084.html",
      era: "Late 2002 SourceForge Documentation (HTML 4.01)",
      title: "Aura3D Spatial Sound Daemon (v0.8.4b)",
      manifest: {
        siteTitle: "Aura3D: Open-Source 3D Sound for Linux/BeOS",
        estimatedEra: "Late 2002 SourceForge Documentation (HTML 4.01)",
        originalAuthorHandle: "dr_sound_oss",
        survivingMainContent: "Aura3D is a free, LGPL-licensed daemon providing hardware positional audio under Linux OSS and BeOS R5 Media Kit. Supports HRTF 3D coordinates and Doppler shifts.",
        brokenImages: [
          {
            src: "images/hrtf_polar_coordinate_diagram.png",
            altText: "Head-Related Transfer Function 3D Polar Coordinate Graph",
            surroundingContext: "<p>Refer to the polar coordinate diagram below when binding listener orientation:</p>"
          },
          {
            src: "http://sourceforge.net/sflogo.php?group_id=4021&type=1",
            altText: "SourceForge Project Logo",
            surroundingContext: "<div align='center'><img src='http://sourceforge.net/sflogo.php'></div>"
          }
        ],
        deadLinks: [
          {
            href: "downloads/aura3d-0.8.4b.tar.gz",
            anchorText: "DOWNLOAD SOURCE TARBALL: aura3d-0.8.4b.tar.gz (GZIP, 412 KB)",
            expectedTopic: "C++ header files aura3d.h and libaura3d.so driver daemon"
          },
          {
            href: "api/aura_set_listener_position.html",
            anchorText: "API Reference: aura_set_listener_position_3f()",
            expectedTopic: "C function signature for setting 3D audio listener XYZ coordinates"
          }
        ],
        defunctScriptsAndForms: [
          {
            actionUrl: "/cgi-bin/bugzilla/post_bug.cgi",
            formHtml: "<form action='/cgi-bin/bugzilla/post_bug.cgi'><input name='component'><textarea name='trace'></textarea></form>",
            intendedBehavior: "Submits Bugzilla defect report to deprecated 2002 SourceForge Bugzilla installation"
          }
        ]
      },
      lore: [
        {
          sourceTitle: "Linux Audio Developers Mailing List (LAD 2003 Archive)",
          sourceUrl: "https://lists.linuxaudio.org/archive/2003/aura3d_vortex2",
          forumSnippet: "Aura3D 0.8.4b used direct ioctl calls to /dev/dsp and implemented custom HRTF filters before Creative purchased Aureal's assets and killed development.",
          year: 2003,
          relevanceConfidence: 0.96
        }
      ],
      restoredHtml1998: `<!DOCTYPE html>
<html>
<head>
  <title>Aura3D: Hardware-Accelerated 3D Sound for Linux (v0.8.4b)</title>
  <style>
    body { background-color: #EEEEEE; color: #111111; font-family: Verdana, sans-serif; margin: 20px; font-size: 13px; }
    h1 { color: #003366; border-bottom: 2px solid #003366; font-size: 20px; }
    h2 { color: #880000; font-size: 16px; margin-top: 18px; }
    pre { background-color: #222222; color: #00FF66; padding: 10px; font-family: monospace; border: 1px solid #999; }
    table { width: 100%; border-collapse: collapse; margin: 10px 0; }
    th { background-color: #003366; color: white; padding: 6px; text-align: left; }
    td { border: 1px solid #CCCCCC; padding: 6px; background: white; }
    .nav { background: #DDDDDD; padding: 6px; border: 1px solid #BBB; font-weight: bold; }
    .reconstructed-card { background: #FFFFEE; border: 1px solid #DD9900; padding: 8px; margin: 10px 0; }
  </style>
</head>
<body>
  <div class="nav">
    [ Project Home | Documentation | API Specs | Downloads | Bug Tracker ]
  </div>

  <h1>Aura3D: Hardware-Accelerated 3D Audio Daemon (v0.8.4b)</h1>
  <p><b>Author:</b> dr_sound_oss &lt;dr_sound@users.sourceforge.net&gt; | <b>License:</b> GNU LGPL v2</p>

  <p>Aura3D is a spatial sound library for Linux Open Sound System (OSS) and BeOS R5. It calculates true Head-Related Transfer Functions (HRTF), distance attenuation, and Doppler velocity shifts in real-time hardware buffers.</p>

  <h2>1. QUICK INSTALLATION & BUILD INSTRUCTIONS</h2>
  <pre>
$ tar -xzvf aura3d-0.8.4b.tar.gz
$ cd aura3d-0.8.4b
$ ./configure --enable-vortex2 --enable-oss
$ make
$ sudo make install
$ aura3dd --daemonize --channels=4
  </pre>

  <h2>2. CORE C++ API REFERENCE (RESTORED DOCUMENTATION)</h2>
  <p>The original HTML subpages for the API reference were lost when SourceForge upgraded its web servers. DeadNet's open-weight AI reconstructed the exact API signatures from surviving 2003 Linux Audio Developer mailing list archives:</p>

  <table>
    <tr><th>Function Signature</th><th>Description</th><th>Return Code</th></tr>
    <tr>
      <td><code>int aura_init(int sample_rate, int flags);</code></td>
      <td>Initializes DSP hardware buffer against <code>/dev/dsp</code>.</td>
      <td><code>0 = SUCCESS, -1 = NODEV</code></td>
    </tr>
    <tr>
      <td><code>void aura_set_listener_pos(float x, float y, float z);</code></td>
      <td>Sets listener center of mass in 3D Cartesian space.</td>
      <td><code>void</code></td>
    </tr>
    <tr>
      <td><code>int aura_play_spatial(aura_source_t* src);</code></td>
      <td>Computes HRTF convolution and commits audio frame to ring buffer.</td>
      <td><code>0 = OK</code></td>
    </tr>
  </table>

  <h2>3. HISTORICAL BUG TRACKER (CLIENT SHIM)</h2>
  <div class="reconstructed-card">
    <p><b>Report Bug / Feature Request (DeadNet Reanimated Client):</b></p>
    <form onsubmit="showEctoNotice('Bug report stored in local state! Historical open-source ticket archived.'); return false;">
      Component: <select><option>HRTF Convolution Engine</option><option>Vortex 2 ioctl driver</option><option>BeOS MediaKit</option></select><br><br>
      Stack Trace / Kernel Log:<br>
      <textarea style="width:100%; height:60px;" placeholder="kernel: aura3d: dsp buffer overrun at 0x00FF41..."></textarea><br><br>
      <input type="submit" value="Submit to Bugzilla v1.2">
    </form>
  </div>
  <script>
    function showEctoNotice(msg) {
      var toast = document.getElementById('ecto-retro-toast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'ecto-retro-toast';
        toast.style = 'position:fixed; bottom:20px; right:20px; background:#002b11; color:#39FF14; border:2px solid #39FF14; padding:10px 16px; font-family:monospace; font-size:12px; font-weight:bold; box-shadow:0 0 15px rgba(57,255,20,0.5); z-index:99999; border-radius:4px;';
        document.body.appendChild(toast);
      }
      toast.innerHTML = '🔮 [ECTOPLASM SHIM]: ' + msg;
      toast.style.display = 'block';
      setTimeout(function() { toast.style.display = 'none'; }, 3500);
    }
  </script>
</body>
</html>`,
      xrayHtml1998: `<!DOCTYPE html>
<html>
<head>
  <title>[X-RAY PROVENANCE] Aura3D Documentation (2002)</title>
  <style>
    body { background-color: #050d0a; color: #39FF14; font-family: monospace; margin: 20px; }
    h1 { color: #00FF88; border-bottom: 2px solid #39FF14; }
    h2 { color: #39FF14; }
    pre { background-color: #000; color: #39FF14; border: 1px solid #39FF14; padding: 10px; }
    table { width: 100%; border: 1px solid #39FF14; }
    th { background: #0b2413; color: #39FF14; padding: 6px; }
    td { border: 1px solid #1a4a25; padding: 6px; background: #030805; }
    [data-ectoplasm="reconstructed"] {
      border: 2px dashed #39FF14 !important;
      background: rgba(57, 255, 20, 0.12) !important;
      padding: 6px;
      margin: 6px 0;
      box-shadow: 0 0 10px rgba(57, 255, 20, 0.3);
    }
    [data-ectoplasm="reconstructed"]::before {
      content: "🔮 ECTOPLASM RECONSTRUCTION [Confidence: " attr(data-confidence) "] Provenance: " attr(data-evidence);
      display: block;
      background: #39FF14;
      color: #000;
      font-size: 10px;
      font-weight: bold;
      padding: 2px;
      margin-bottom: 4px;
    }
  </style>
</head>
<body>
  <h1>Aura3D: Spatial Sound for Linux (v0.8.4b)</h1>
  <p>Status: Reconstructed Open-Source Preservation Artifact</p>

  <div data-ectoplasm="reconstructed" data-confidence="0.96" data-evidence="2003 Linux Audio Developers (LAD) mailing list archives citing aura3d.h function prototypes">
    <h2>2. RECONSTRUCTED C++ API SPECIFICATION</h2>
    <p>Healed missing manual subpage: Synthesized 3 core functions (<code>aura_init</code>, <code>aura_set_listener_pos</code>, <code>aura_play_spatial</code>).</p>
  </div>

  <div data-ectoplasm="reconstructed" data-confidence="0.92" data-evidence="SourceForge Bugzilla 2002 schema transpiled to client-side JS handler">
    <h2>3. BUGZILLA FORM TRANSPILATION</h2>
    <p>Defunct CGI POST endpoint <code>/cgi-bin/bugzilla/post_bug.cgi</code> replaced with zero-latency browser state storage.</p>
  </div>
</body>
</html>`,
      modernView: {
        brandName: "Aura3D Docs",
        tagline: "Preserved Hardware 3D Audio Library for Linux & BeOS",
        navItems: [
          { label: "Overview", href: "#overview" },
          { label: "Install Guide", href: "#install" },
          { label: "C++ API Specs", href: "#api" },
          { label: "Bug Tracker", href: "#bugs" }
        ],
        heroHeadline: "Reviving Pioneering Open-Source Spatial Sound",
        heroSubheadline: "First published in 2002 by dr_sound_oss on SourceForge. Resurrected to preserve early Linux DSP audio architecture.",
        entities: [
          {
            id: "spec-api-init",
            type: "spec",
            title: "aura_init() Core Daemon Lifecycle",
            date: "2002 (Reconstructed)",
            author: "dr_sound_oss",
            content: "Initializes direct ioctl handles to /dev/dsp with selectable sample rates up to 48kHz and 4-channel surround routing.",
            tags: ["C++", "DSP", "Linux Audio"],
            confidence: 0.96,
            isAiReconstructed: true,
            evidenceCitation: "Linux Audio Developers Mailing List 2003"
          },
          {
            id: "spec-api-listener",
            type: "spec",
            title: "aura_set_listener_pos() 3D Vector Math",
            date: "2002",
            author: "dr_sound_oss",
            content: "Accepts 3 floating-point coordinates for listener orientation, applying Doppler shift coefficients according to relative velocity vectors.",
            tags: ["Math", "HRTF", "Spatial"],
            confidence: 0.95,
            isAiReconstructed: true
          }
        ],
        guestbookEntries: [],
        footerStats: {
          originalHits: 12490,
          resurrectedLinksCount: 5,
          yearEstablished: "2002"
        }
      },
      telemetryLogs: [
        {
          id: "log-a1",
          timestamp: "00:01.050",
          stage: "DISCOVERY",
          level: "info",
          message: "Located SourceForge archive capture from November 2002. Detected missing API manual subpages."
        },
        {
          id: "log-a2",
          timestamp: "00:02.300",
          stage: "EXHUMATION",
          level: "warn",
          message: "Archival DOM scanner detected 2 broken images and dead tarball download links."
        },
        {
          id: "log-a3",
          timestamp: "00:03.900",
          stage: "HISTORICAL_GROUNDING",
          level: "info",
          message: "Archival index queried Linux Audio Developer archives from 2003. Extracted verified C function signatures."
        },
        {
          id: "log-a4",
          timestamp: "00:05.100",
          stage: "NECROMANCY",
          level: "ectoplasm",
          message: "Digital Archaeology Engine re-authored API tables and shimmed SourceForge Bugzilla form with client-side event dispatch."
        }
      ],
      sentryTraceId: "sentry_trace_aura3d_89c2b4d1e"
    }
  },
  {
    id: "specternet-ufo-1998",
    name: "SpecterNet: New England Ghost Watch & UFO Log",
    year: "1998",
    category: "Paranormal Webring",
    originalUrl: "http://www.angelfire.com/ma/ghosttracker/index.html",
    tagline: "EMF Meters, Cemetery EVP Audio, and Salem Anomaly Reports",
    description: "An authentic 1998 Angelfire paranormal research group website. Features a broken EMF meter graph, dead Polaroid witness scans, and a defunct submission script.",
    pathologySummary: {
      brokenImages: 3,
      deadLinks: 3,
      defunctCgi: 2
    },
    bundle: {
      targetUrl: "http://www.angelfire.com/ma/ghosttracker/index.html",
      era: "Fall 1998 Angelfire Community (HTML 3.2)",
      title: "SpecterNet: New England Paranormal Research Group",
      manifest: {
        siteTitle: "SpecterNet: New England Paranormal Research Group",
        estimatedEra: "Fall 1998 Angelfire Community (HTML 3.2)",
        originalAuthorHandle: "SpookyBob98",
        survivingMainContent: "Welcome to SpecterNet! We are an amateur investigative society dedicated to documenting Electronic Voice Phenomena (EVP) and unexplained electromagnetic spikes in coastal Massachusetts.",
        brokenImages: [
          {
            src: "polaroids/salem_witch_burial_orb.jpg",
            altText: "White Energy Orb Hovering over 1692 Headstone",
            surroundingContext: "<p>Figure 1: Polaroids taken with 400 ISO film at Old Burying Point cemetery on October 24, 1998.</p>"
          },
          {
            src: "meters/tri_field_emf_spike_chart.gif",
            altText: "TriField Meter Needle Pegged at 5.0 milliGauss",
            surroundingContext: "<p>Figure 2: Needle fluctuation recorded at 3:14 AM.</p>"
          }
        ],
        deadLinks: [
          {
            href: "audio/evp_whisper_oct98.wav",
            anchorText: "LISTEN TO RAW EVP RECORDING: evp_whisper_oct98.wav (PCM Audio, 820 KB)",
            expectedTopic: "Microphone recording of alleged ghostly whisper near Salem Harbor"
          }
        ],
        defunctScriptsAndForms: [
          {
            actionUrl: "/cgi-bin/submit_sighting.pl",
            formHtml: "<form action='/cgi-bin/submit_sighting.pl'><input name='location'><textarea name='sighting'></textarea></form>",
            intendedBehavior: "Saves visitor paranormal sightings to webmaster email via Angelfire mailer script"
          }
        ]
      },
      lore: [
        {
          sourceTitle: "USENET alt.folklore.ghosts (October 1998 Archive)",
          sourceUrl: "https://groups.google.com/g/alt.folklore.ghosts/c/specternet_salem",
          forumSnippet: "SpookyBob from SpecterNet posted the audio transcript of the Oct 24 Old Burying Point EVP: the voice supposedly whispered 'Turn off the lights...'",
          year: 1998,
          relevanceConfidence: 0.95
        }
      ],
      restoredHtml1998: `<!DOCTYPE html>
<html>
<head>
  <title>SpecterNet: New England Ghost Watch (1998)</title>
  <style>
    body { background-color: #000000; color: #00FF00; font-family: 'Comic Sans MS', cursive, sans-serif; margin: 16px; }
    h1 { color: #FF00FF; text-align: center; text-shadow: 2px 2px #00FFFF; }
    h2 { color: #00FFFF; border-bottom: 2px dashed #FF00FF; }
    table { border: 4px groove #00FF00; background: #001100; width: 100%; }
    td { padding: 10px; }
    .warning { color: #FF0000; font-weight: bold; background: #FFFF00; padding: 4px; text-align: center; }
  </style>
</head>
<body>
  <div class="warning">
    ⚠️ CAUTION: THIS PAGE CONTAINS GENUINE UNEXPLAINED PARANORMAL EVIDENCE RECORDED IN SALEM, MA! ⚠️
  </div>

  <table align="center">
    <tr>
      <td colspan="2" align="center">
        <h1>👻 SPECTER-NET: NEW ENGLAND GHOST TRACKER 👻</h1>
        <p><i>Affiliated with the International Webring of the Paranormal (Ring #666)</i></p>
      </td>
    </tr>
    <tr>
      <td width="65%">
        <h2>OCTOBER 24, 1998 SALEM CEMETERY INVESTIGATION</h2>
        <p>At 02:45 AM, our team entered the Old Burying Point in Salem, Massachusetts equipped with TriField Natural EM meters and high-sensitivity analog cassette recorders.</p>

        <p><b>ELECTROMAGNETIC FIELD (EMF) TELEMETRY:</b><br>
        Ambient baseline was 0.2 milliGauss. Suddenly at 03:14 AM, the needle spiked past 5.0 milliGauss near the grave of Magistrate John Hathorne! No electrical power lines exist within 200 yards.</p>

        <h2>🎙️ AUDIO EVP RECORDING TRANSCRIPT (RESTORED EVIDENCE)</h2>
        <p>The original WAV file was lost when Angelfire free hosting expired. DeadNet restored the verified transcript from 1998 USENET alt.folklore.ghosts archives:</p>
        <blockquote style="background:#002200; border-left:4px solid #00FF00; padding:8px; color:#FFFF00;">
          [TAPE COUNTER 04:12 - BACKGROUND WIND NOISE]<br>
          INVESTIGATOR: "Is there any spirit present who wishes to speak?"<br>
          <i>[HEAVY STATIC BURST - RECONSTRUCTED SPECTRAL VOICE (180 Hz)]:</i><br>
          <b>"T U R N . . . O F F . . . T H E . . . L I G H T S . . ."</b>
        </blockquote>

        <h2>SUBMIT YOUR SIGHTING (CLIENT SHIM)</h2>
        <form onsubmit="showEctoNotice('Sighting transmitted to Ectoplasm local archive! SpookyBob salutes your bravery.'); return false;" style="background:#002200; padding:8px; border:1px solid #FF00FF;">
          Town / Cemetery: <input type="text" placeholder="e.g. Salem, MA" style="background:#000; color:#00FF00;"><br><br>
          Anomaly Description: <br>
          <textarea style="width:100%; background:#000; color:#00FF00;" placeholder="Did you see an orb? Did your EMF meter spike?"></textarea><br><br>
          <input type="submit" value="TRANSMIT REPORT TO SPOOKYBOB98" style="background:#FF00FF; color:#FFF; font-weight:bold; cursor:pointer;">
        </form>
        <script>
          function showEctoNotice(msg) {
            var toast = document.getElementById('ecto-retro-toast');
            if (!toast) {
              toast = document.createElement('div');
              toast.id = 'ecto-retro-toast';
              toast.style = 'position:fixed; bottom:20px; right:20px; background:#002b11; color:#39FF14; border:2px solid #39FF14; padding:10px 16px; font-family:monospace; font-size:12px; font-weight:bold; box-shadow:0 0 15px rgba(57,255,20,0.5); z-index:99999; border-radius:4px;';
              document.body.appendChild(toast);
            }
            toast.innerHTML = '🔮 [ECTOPLASM SHIM]: ' + msg;
            toast.style.display = 'block';
            setTimeout(function() { toast.style.display = 'none'; }, 3500);
          }
        </script>
      </td>
      <td width="35%" style="text-align:center; vertical-align:top;">
        <div style="border:2px solid #FF00FF; padding:8px;">
          <p><b>PARANORMAL WEBRING:</b></p>
          <p>[ &lt;&lt; Ghost Ring Prev ]<br>[ Next Haunted Site &gt;&gt; ]</p>
          <hr color="#FF00FF">
          <p><b>HIT COUNTER:</b><br>
          <span style="font-size:24px; color:#FF0000; font-family:monospace; background:#000; padding:4px;">013,666</span></p>
        </div>
      </td>
    </tr>
  </table>
</body>
</html>`,
      xrayHtml1998: `<!DOCTYPE html>
<html>
<head>
  <title>[X-RAY PROVENANCE] SpecterNet Paranormal Archive</title>
  <style>
    body { background-color: #040905; color: #39FF14; font-family: monospace; margin: 16px; }
    h1 { color: #00FF88; text-align: center; }
    table { border: 2px solid #39FF14; width: 100%; }
    td { padding: 8px; }
    [data-ectoplasm="reconstructed"] {
      border: 2px dashed #39FF14 !important;
      background: rgba(57, 255, 20, 0.12) !important;
      padding: 6px;
      margin: 6px 0;
      box-shadow: 0 0 10px rgba(57, 255, 20, 0.3);
    }
    [data-ectoplasm="reconstructed"]::before {
      content: "🔮 ECTOPLASM RECONSTRUCTION [Confidence: " attr(data-confidence) "] Provenance: " attr(data-evidence);
      display: block;
      background: #39FF14;
      color: #000;
      font-size: 10px;
      font-weight: bold;
      padding: 2px;
      margin-bottom: 4px;
    }
  </style>
</head>
<body>
  <h1>SPECTERNET: PARANORMAL ARTIFACT EXHUMATION</h1>

  <div data-ectoplasm="reconstructed" data-confidence="0.95" data-evidence="USENET alt.folklore.ghosts October 1998 archive citing SpookyBob98's EVP audio cassette transcript">
    <h2>RESTORED EVP AUDIO TRANSCRIPT</h2>
    <p>Healed missing <code>evp_whisper_oct98.wav</code>: Transcript restored as <em>'TURN OFF THE LIGHTS...'</em> with spectral frequency profiling.</p>
  </div>

  <div data-ectoplasm="reconstructed" data-confidence="0.90" data-evidence="Angelfire Perl mailer /cgi-bin/submit_sighting.pl shimmed with client state">
    <h2>REANIMATED SIGHTING SUBMISSION FORM</h2>
    <p>Transpiled dead server-side Perl script into local browser state storage.</p>
  </div>
</body>
</html>`,
      modernView: {
        brandName: "SpecterNet Archive",
        tagline: "Resurrected 1998 New England Anomaly & EVP Investigation",
        navItems: [
          { label: "Salem Investigation", href: "#salem" },
          { label: "EVP Audio Log", href: "#evp" },
          { label: "Submit Sighting", href: "#submit" }
        ],
        heroHeadline: "The Haunted Web of 1998, Documented for Posterity",
        heroSubheadline: "An authentic late-90s amateur research site created by SpookyBob98. Preserved to honor the grassroots folklore of the early web.",
        entities: [
          {
            id: "evp-salem-record",
            type: "log",
            title: "Old Burying Point EVP Recording Transcript",
            date: "October 24, 1998",
            author: "SpookyBob98",
            content: "Analog cassette transcription recorded at 3:14 AM near Magistrate Hathorne's monument. Contains low-frequency vocal anomaly 'Turn off the lights'.",
            tags: ["Salem", "EVP", "Audio"],
            confidence: 0.95,
            isAiReconstructed: true,
            evidenceCitation: "USENET alt.folklore.ghosts (1998)"
          }
        ],
        guestbookEntries: [],
        footerStats: {
          originalHits: 13666,
          resurrectedLinksCount: 3,
          yearEstablished: "1998"
        }
      },
      telemetryLogs: [
        {
          id: "log-s1",
          timestamp: "00:01.200",
          stage: "DISCOVERY",
          level: "info",
          message: "Located Angelfire 1998 snapshot. Mapped 3 dead image links and defunct Perl form."
        },
        {
          id: "log-s2",
          timestamp: "00:02.800",
          stage: "HISTORICAL_GROUNDING",
          level: "info",
          message: "Archival search indexed USENET Google Groups archives for 'SpecterNet Salem EVP'. Retrieved exact verified transcript."
        },
        {
          id: "log-s3",
          timestamp: "00:04.200",
          stage: "NECROMANCY",
          level: "ectoplasm",
          message: "Digital Archaeology Engine synthesized vintage HTML 3.2 view with Comic Sans typography and green scanlines."
        }
      ],
      sentryTraceId: "sentry_trace_specternet_99a1b2c3"
    }
  }
];
