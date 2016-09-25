// main.ts
//
// To start the webpack dev server hit: Cmd+Shift+B (I think Cmd -> Ctrl for Windows).
//
// This is the entry point for your app, no real reason other than
// we hook into jQuery's $() stuff here and launch app after the page load
// finishes.
//
// Also includes reference to a demo class ScreenFlasher to show how to refer to other
// source files.
//
// Good Luck ( ´ ▽ ` )b

import * as $ from "jquery";

import {ScreenFlasher} from "./src/utils.ts";

class Main {
    static startup() {
        console.log("starting application...");
        let button = $('<button>').text("Click Me").click(() => {
            ScreenFlasher.flashScreen();
        });
        
        $(document.body).append(button);
    }
}

$(function() {
    Main.startup();
});
