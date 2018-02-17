function scrollaction() {
  document.getElementById('instructions').innerHTML = "Scroll to stop the automatic scrolling";
    
    chrome.tabs.executeScript({
        code: 'var speed = `'  + String(document.getElementById("speed").value) + '`; var stop=false'
    }, function(result) {
        chrome.tabs.executeScript({file: "jquery.min.js"}, function(result) {
            chrome.tabs.executeScript({file: "insert.js"}, function(result) {
            });
        });
    }); 
}



document.getElementById('scroll_button').addEventListener('click', scrollaction);
