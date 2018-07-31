Firefox extension available at: https://addons.mozilla.org/en-US/firefox/addon/thejournalie-commenter-tagger/

### Build
- `npm run build`
- Navigate to `about:debugging` on Firefox
- Click on "Load Temporary Add-on..."
- Select `build/manifest.json`
- Navigate to comment section of [theJournal.ie](http://www.thejournal.ie), [the42.ie](http://www.the42.ie) or [The DailyEdge.ie](http://www.dailyedge.ie)
___________________________________________
#### TODO
Chrome extension port
- create alt webpack build
- `:%s/browser/chrome/g`
- sendMessage uses callback not promise on chrome
- manifest.json:
   - remove application key
   - [`web_accessible_resources`](https://developer.chrome.com/extensions/manifest/web_accessible_resources) needed for label.svg
