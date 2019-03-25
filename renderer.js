// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const TabGroup = require("electron-tabs");

let tabGroup = new TabGroup();
let tab = tabGroup.addTab({
    title: "My App",
    src: "http://electron.atom.io",
    visible: true
});
let tab2 = tabGroup.addTab({
    title: "Home",
    src: "http://www.google.com",
    visible: true
});

// create a function that just makes a new tab pointed at google
const addNewGoogleTab = function () {
    let thisTab = tabGroup.addTab({
        title: "Home",
        src: "http://www.google.com",
        visible: true
    });
};

//bind this function to the window so it can be called globally
window.addTab = addNewGoogleTab;