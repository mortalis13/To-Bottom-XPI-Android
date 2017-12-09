
browser.browserAction.onClicked.addListener(tab => toBottom(tab));

function toBottom(tab) {
  var toBottomScript = "window.scrollTo(0, window.scrollMaxY)";
  browser.tabs.executeScript(tab.id, {code: toBottomScript});
}
