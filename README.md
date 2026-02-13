# WAP proxy resources

[https://wapproxy.w3l.se/](https://wapproxy.w3l.se/) is a publicly available WAP proxy that supports wml, wmlscript, wbmp.

There is also support for different formats that is not natively supported on computers and phones today but was common in the WAP-era like .jad, .gcd and so on.

This reposiorty contains some components that I hope other can have use for and that can be improved with outside contribution.

[bookmarks.json](#bookmarksjson)

[localsrc.js](#localsrcjs)

## Bookmarks.json

This list strive to include as many wap-sites as possible with a few exceptions.

### Included

- ✅ Notable sites *(even if they just contain a closed message)*
- ✅ Functional sites *(at least partly functional)*

### Not included

- ❌ Spam
- ❌ Extreme/controversial
- ❌ Testpages/example pages
- ❌ Completely broken sites

### Example item in array
```
{
	"title": "Localize Friends",
	"url": "http://wap.localize-friends.de/",
	"description": "Free friends chat for computer and mobile phone",
	"category": "personal"
	"language": [
	    "en",
	    "de"
	],
  "flags": [
      "invalid_wml"
  ]
},
```
### Data explained

| Name | | Type | Description
| - | - | - | - |
| title | mandatory | string | Title, usually the card title |
| url | mandatory | string |  |
| description | *optional* | string | Description in English |
| category | *optional* | string | personal / weather |
| language | mandatory | string or array | ISO 639-1 if available (otherwise ISO 639-2, ISO 639-3 or other suitable code) |
| flags | *optional* | array | broken_content / some_broken_content / news_site_no_longer_updated / invalid_wml / closed / browser_sniffing |


### Flags explained

`broken_content` - most content / links / functionality broken

`some_broken_content` - some content / links / functionality broken

`news_site_no_longer_updated` - time sensetive information no longer updated (news, stocks, weather)

`invalid_wml` - some / all clients might not be able to render the page because of invalid wml

`closed` - page closed and show a message explaining the closure, only for notable pages (for example the bbc or gmail)

`browser_sniffing` - this page uses browser sniffing and only render wml with a suitable user agent (all pages is tested with the proxy using `Nokia7110/1.0 (01.01)`) 

## localsrc.js

This function serves as a modern translation layer for the legacy WML `localsrc` attribute, mapping ancient WAP pictogram codes to standard UTF-8 emojis. In the WML 1.x era, devices like the Nokia 3310 or Openwave-based phones used `localsrc` to display built-in ROM icons (e.g., `pict:///core/phone` or `icon_279`) to save bandwidth. Since modern browsers do not possess these binary resources, this script intercepts those URIs and renders a semantic emoji equivalent (e.g., 📞).

The lookup table consolidates multiple specifications, including the official WAP Forum Standard (WAP-213), Openwave's specific numeric IDs (used heavily in the US), and vendor-specific extensions from Ericsson and Nokia. This ensures that historical WML decks remain readable and visually consistent without requiring a library of external image assets.

