function openPage() {
  browser.tabs.create({
    url: "https://developer.mozilla.org"
  });
  // browser.downloads.download(
  //   {
  //     url : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
  //     filename : "cat.png",
  //     conflictAction : 'uniquify'
  //   }
  // );
  console.log("cat");
}

browser.browserAction.onClicked.addListener(openPage);
