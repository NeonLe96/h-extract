function openPage() {
  // browser.tabs.create({
  //   url: "https://developer.mozilla.org"
  // });
  // //*** This download based on image URL
  // // browser.downloads.download(
  // //   {
  // //     url : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1280px-Image_created_with_a_mobile_phone.png",
  // //     filename : "cat.png",
  // //     conflictAction : 'uniquify'
  // //   }
  // // );
  //
  // console.log("cat");
  // let querying = browser.tabs.query({});
  // querying.then((objects) => {
  //   console.log("done");
  //   for (const object of objects){
  //     console.log(object.id);
  //   }
  // });
  //
  // const gay = 'document.body.style.border = "5px solid green"';
  // console.log("dog");
  // console.log(gay);
  //
  //
  // var mama = browser.tabs.executeScript(1,{
  //   code: gay
  // });
  function onExecuted(result) {
    console.log(`We made it green`);
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  const makeItGreen = 'document.body.style.border = "5px solid green"';

  console.log("cat");
  const executing = browser.tabs.executeScript(1,{
    file: "cscript.js",
    allFrames: true
  });

  executing.then(onExecuted, onError);

}


function handler(mess){
  console.log(mess);
}

browser.browserAction.onClicked.addListener(openPage);
browser.runtime.onMessage.addListener(handler);
