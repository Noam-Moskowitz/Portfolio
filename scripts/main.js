import { htmlP1, htmlP2, htmlP3, htmlP4, htmlP5, htmlP6, htmlP7, htmlP8, htmlP9 } from "./projectObj.js";
import { displayPreview } from "./projectPreview.js";
const projectLinks = document.querySelectorAll(`.btnEvent`);


projectLinks.forEach((link) => {
    link.addEventListener('click', (evnt) => {
        if (evnt.target.title == `htmlP1`) {
            displayPreview(htmlP1);
        }
    });
});

