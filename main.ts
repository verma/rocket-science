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