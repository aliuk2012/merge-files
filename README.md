# Merge Configuration file

This project is just a small demo to show how we might
want to help users update this prototype kit by merging
various files.

## Get started

- Pull down this repo

 ## NPM script

 - `npm start` - shorthand for `npm run kit`
 - `npm run kit` - NPM installs dependencies and then updates the kit
 - `npm run kit:update` - just updates the kit

 I've namespaced the scripts to show that we might want grainular
 control of the install/run process

 ## Test Scenarios
1. User has downloaded the kit but has changed some of the options
    - Run `npm run kit:update`
    - check `app/config.js` values should still be remembered

2. Design Team decide to add new attributes to `kit/config/config.js`
    - add new key/value paid to `kit/config/config.js`
    - Run `npm run kit:update`
    - check `app/config.js` previous values should still be set and new attributes/values should be added

  (OPTIONAL) - Add help text to to `kit/config/config-help-text.js`
    - Run `npm run kit:update`
    - check `app/config.js` previous values should still be set and new attributes/values should be added along with help text

 ## To do

- Merge other application assets
- warn if configuration options are being depreciated or deleted
- automatically fetch latest kit release




