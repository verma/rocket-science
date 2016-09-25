// utils.ts
// Utility classes and functions

import * as $ from 'jquery';

export class ScreenFlasher {
    static flashScreen() {
        let body = document.body;
        let div = $('<div>');
        div.css({
            position: "fixed",
            left: "0", top: "0",
            bottom: "0", right: "0",
            opacity: 0,
            backgroundColor: "green"
        });
        $(body).append(div);

        const DELAY = 200;

        $(div)
            .animate({ opacity: 1 }, DELAY)
            .animate({ opacity: 0 }, DELAY)
            .animate({ opacity: 1 }, DELAY)
            .animate({ opacity: 0 }, DELAY)
            .animate({ opacity: 1 }, DELAY)
            .animate({ opacity: 0 }, DELAY)
            .animate({ opacity: 1 }, DELAY)
            .animate({ opacity: 0 }, DELAY, () => {
                console.log("Done!!")
                $(div).remove();
            });
    }
}