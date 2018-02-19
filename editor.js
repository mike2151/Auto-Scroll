function scrollaction() {
  document.getElementById('instructions').innerHTML = "Scroll to stop the automatic scrolling. To restart the scroll, click away and then click again on the extension.";
    
    chrome.tabs.executeScript({
        code: 'var speed = `'  + String(document.getElementById("speed").value) + '`; var stop=false'
    }, function(result) {
        chrome.tabs.executeScript({file: "jquery.min.js"}, function(result) {
            chrome.tabs.executeScript({file: "insert.js"}, function(result) {
            });
        });
    }); 
}



$( "#scroll_button" ).one('click', scrollaction);