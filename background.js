chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        // If the URL contains "youtube.com/shorts", block it
        if (details.url.includes("youtube.com")) {
            return { redirectUrl: chrome.runtime.getURL("block.html") };
        }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
);
