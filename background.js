chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "cm1",
        title: "Open in archive.ph",
        contexts: ["page"]
    });
});

chrome.contextMenus.onClicked.addListener(function(clickData) {
    let archive = "https://archive.ph/" + clickData.pageUrl;
    chrome.tabs.create({ url: archive});
});
