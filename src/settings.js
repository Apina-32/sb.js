
/* START OF SETTINGS */
// Warning: editing setting here will disable auto updates

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

// DO NOT EDIT BELOW THIS LINE

const settings = [
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

const params = () => {
    const out = {}
    settings.forEach(setting => {
        out[setting] = {
            type: 'checkbox',
            default: true
        }
    });
    return out;
}


const cfg = new MonkeyConfig({
  title: 'Settings',
  menuCommand: true,
  params: params()
});

const categories = [];
settings.forEach(setting => {
    if(cfg.get(setting)) categories.push(setting);
});

/* END OF SETTINGS */
