function clickaction() {
  document.getElementById('instructions').innerHTML = "Instructions Change";
        chrome.tabs.executeScript({file: "jquery.min.js"}, function(result) {
            chrome.tabs.executeScript({file: "insert.js"}, function(result) {
            })
        });
}

document.getElementById('scroll_button').addEventListener('click', clickaction);
