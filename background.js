// Add additional ad sites if necessary
const defaultFilters = [
	"*://*.doubleclick.net/*",
	"*://partner.googleadservices.com/*",
	"*://*.googlesyndication.com/*",
	"*://*.google-analytics.com/*",
	"*://*.googletagmanager.com/*",
	"*://creative.ak.fbcdn.net/*",
	"*://*.adbrite.com/*",
	"*://*.exponential.com/*",
	"*://*.quantserve.com/*",
	"*://*.scorecardresearch.com/*",
	"*://*.zedo.com/*",
	"*://*.bebi.com/*",
	"*://*.moat.com/*",
	"*://*.bunny.net/*",
	"*://*.bidgear.com/*",
	"*://*.thebestgame2020.com/*",
	"*://*.chaturbate.com/*",
	"*://hooligart.itch.io/town-of-sins/*",
	"*://niceanimegames.com/*",
	"*://*.facebook.com/*",
	"*://*.flirt4fuck.com/*",
	"*://*.setonna.com/*",
	"*://*.theconservativerepublic.co/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return { cancel: true }},
    { urls: defaultFilters },
    ["blocking"]
)

