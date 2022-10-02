// ==UserScript==
// @name         sb.js userscript loader
// @description  SponsorBlock userscript loader
// @namespace    mchang.name
// @homepage     https://github.com/mchangrh/sb.js
// @icon         https://mchangrh.github.io/sb.js/icon.png
// @version      1.2.3
// @license      LGPL-3.0-or-later
// @match        https://www.youtube.com/watch*
// @connect      sponsor.ajay.app
// @require      https://mchangrh.github.io/sb.js/sb-nosettings.min.js
// @grant        none
// ==/UserScript==

/* Uses SponsorBlock data licensed used under CC BY-NC-SA 4.0 from https://sponsor.ajay.app/ */
/* LICENCED UNDER LGPL-3.0-or-later *//* START OF SETTINGS */

// https://wiki.sponsor.ajay.app/w/Types
let actionTypes = [
  "skip",
  "mute",
  "full",
  "poi"
]
let skipThreshold = [0.2, 1] // skip from between time-[0] and time+[1]
let serverEndpoint = "https://sponsor.ajay.app"
let skipTracking = true
let highlightKey = "Enter"
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values

/* END OF SETTINGS */

const cfg = new MonkeyConfig({
  title: 'Settings',
  menuCommand: true,
  params: {
    "sponsor": {
      type: 'checkbox',
      default: true
    },
    selfpromo: {
      type: 'checkbox',
      default: true
    },
    interaction: {
      type: 'checkbox',
      default: true
    },
    intro: {
        type: 'checkbox',
        default: true
    },
    outro: {
        type: 'checkbox',
        default: true
    },
    preview: {
        type: 'checkbox',
        default: true
    },
    music_offtopic: {
        type: 'checkbox',
        default: true
    },
    exclusive_access: {
        type: 'checkbox',
        default: true
    },
    poi_highlight: {
        type: 'checkbox',
        default: true
    }
  }
});

const categories = [];
if(cfg.get("sponsor")) categories.push("sponsor");
if(cfg.get("selfpromo")) categories.push("selfpromo");
if(cfg.get("interaction")) categories.push("interaction");
if(cfg.get("intro")) categories.push("intro");
if(cfg.get("outro")) categories.push("outro");
if(cfg.get("preview")) categories.push("preview");
if(cfg.get("music_offtopic")) categories.push("music_offtopic");
if(cfg.get("exclusive_access")) categories.push("exclusive_access");
if(cfg.get("poi_highlight")) categories.push("poi_highlight");

