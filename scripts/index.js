import { makeSVG } from "./svgReplace.js";

let title = document.querySelectorAll('[role="banner"] h1')[0];
title.id = "title";

let titleSVG = makeSVG(title);
title.append(titleSVG);


let headings = document.querySelectorAll("h3");

headings.forEach((i, index) => {
   i.id = `h3-${index + 1}`;
   let newH3 = makeSVG(i);
   i.append(newH3);
})

let navItems = document.querySelectorAll(".wrapper > div");