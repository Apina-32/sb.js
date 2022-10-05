// ==UserScript==
// @name         sb.js userscript loader
// @description  SponsorBlock userscript loader
// @namespace    mchang.name
// @homepage     https://github.com/mchangrh/sb.js
// @icon         https://mchangrh.github.io/sb.js/icon.png
// @version      1.2.4
// @license      LGPL-3.0-or-later
// @match        https://www.youtube.com/watch*
// @connect      sponsor.ajay.app
// @require      https://mchangrh.github.io/sb.js/sb-nosettings.min.js
// @grant        none
// ==/UserScript==

/* Uses SponsorBlock data licensed used under CC BY-NC-SA 4.0 from https://sponsor.ajay.app/ */
/* LICENCED UNDER LGPL-3.0-or-later */
/* START OF SETTINGS */
// Warning: editing setting here will disable auto updates
// To edit settings, use the settings menu by clicking the tampermonkey icon on the top right of your browser

// https://wiki.sponsor.ajay.app/w/Types

let skipThreshold = [0.2, 1] // skip from between time-[0] and time+[1]
let serverEndpoint = "https://sponsor.ajay.app"
let skipTracking = true
let highlightKey = "Enter"
// https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values


const defaultCategories = [
    "sponsor",
    "selfpromo",
    "interaction",
    "intro",
    "outro",
    "preview",
    "music_offtopic",
    "exclusive_access",
    "poi_highlight"
]

let defaultActionTypes = [
    "skip",
    "mute",
    "full",
    "poi"
]

const createCheckboxes = (list) => {
    const out = {}
    list.forEach(item => {
        out[item] = {
            type: 'checkbox',
            default: true
        }
    });
    return out;
}

const categoriesConfig = new MonkeyConfig({
  title: 'Adjust SponsorBlock categories',
  menuCommand: true,
  params: createCheckboxes(defaultCategories)
});

const actionsConfig = new MonkeyConfig({
    title: 'Adjust SponsorBlock actions',
    menuCommand: true,
    params: createCheckboxes(defaultActionTypes)
});

const miscConfig = new MonkeyConfig({
    title: 'Miscellaneous settings',
    menuCommand: true,
    params: {
        skipThreshold: {
            type: 'text',
            default: skipThreshold.join(", ")
        },
        serverEndpoint: {
            type: 'text',
            default: serverEndpoint
        },
        skipTracking: {
            type: 'checkbox',
            default: skipTracking
        },
        highlightKey: {
            type: 'text',
            default: highlightKey
        }
    }
});

const categories = [];
defaultCategories.forEach(setting => {
    if(categoriesConfig.get(setting)) categories.push(setting);
});

const actionTypes = [];
defaultActionTypes.forEach(setting => {
    if(actionsConfig.get(setting)) actionTypes.push(setting);
});

skipThreshold = miscConfig.get("skipThreshold").split(",").map(x => parseFloat(x));
serverEndpoint = miscConfig.get("serverEndpoint");
skipTracking = miscConfig.get("skipTracking");
highlightKey = miscConfig.get("highlightKey");

/* END OF SETTINGS */
