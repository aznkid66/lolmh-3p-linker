chrome.browserAction.onClicked.addListener(function(tab) {
  if (/http:\/\/matchhistory.*/.test(tab.url)) {
    var params = tab.url.split("/");
    var region = params[2].split(".")[1];
    var match_id = params[6];
    chrome.tabs.update(tab.id, {url: "http://www.leagueofgraphs.com/match/" + region + "/" + match_id});
  } else {
    alert("Cannot parse URL \n  " + tab.url + "\nThis extension is designed to redirect from links of the form \n  http://matchhistory.<region>.leagueoflegends.com/*");
  }  
});