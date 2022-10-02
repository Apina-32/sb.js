/* START OF SETTINGS */

// https://wiki.sponsor.ajay.app/w/Types
let categories = [
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

const settings = {
  "categories": categories,
  "actionTypes": actionTypes,
  "skipThreshold": skipThreshold,
  "serverEndpoint": serverEndpoint,
  "skipTracking": skipTracking,
  "highlightKey": highlightKey
}

const GM_getJson = (key) => {
  try {
    return JSON.parse(GM_getValue(key))
  } catch (e) {
    return undefined
  }
}

const currentScriptVersion = GM_info.script.version;

if(GM_getValue("version") !== currentScriptVersion) {
  // Load settings from previous version
  const oldSettings = GM_getJson("settings");
  if(oldSettings) {
    categories = oldSettings.categories;
    actionTypes = oldSettings.actionTypes;
    skipThreshold = oldSettings.skipThreshold;
    serverEndpoint = oldSettings.serverEndpoint;
    skipTracking = oldSettings.skipTracking;
    highlightKey = oldSettings.highlightKey;
  }
  GM_setValue("version", currentScriptVersion);
} else {
  GM_setValue("settings", JSON.stringify(settings));
  GM_setValue("version", currentScriptVersion);
}
