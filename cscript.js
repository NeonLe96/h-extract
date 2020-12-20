document.body.style.border = "10px solid green";
var img_info = document.getElementById("image").src;
browser.runtime.sendMessage(img_info);
;0
