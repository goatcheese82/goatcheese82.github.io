const url = "http://www.w3.org/2000/svg";
let w = 30;
let r = w;
let cx = w * 1.7;
let cy = w * 1.7;
let p = `M ${cx - r}, ${cy}
a ${r},${r} 0 1,1 ${r * 2},0
a ${r},${r} 0 1,1 -${r * 2},0`

const createPath = (defs, node) => {
   let newPath = document.createElementNS(url, "path");
   newPath.id = `${node.id}-curve`;
   newPath.setAttribute("d", p);
   newPath.id = `${node.id}-path`;
   return newPath;
}

const createTextPath = (myPath, txt) => {
   let newText = document.createElementNS(url, "text");
   newText.classList.add("svg-text")
   let newTextPath = document.createElementNS(url, "textPath");
   newTextPath.setAttribute("href", `#${myPath.id}`);
   newTextPath.innerHTML = txt;
   newText.appendChild(newTextPath);
   return newText;
}

export const makeSVG = (node, nodeType) => {
   let newSvg = document.createElementNS(url, "svg");
   newSvg.classList.add("spheres");
   newSvg.setAttribute("width", "auto");
   newSvg.setAttribute("height", "auto");
   let newDefs = document.createElementNS(url, "defs");
   let myPath = createPath(newDefs, node);
   newDefs.appendChild(myPath);
   newSvg.setAttribute("viewBox", "0 0 100 100");
   let newTextPath = createTextPath(myPath, node.innerHTML);
   node.innerHTML = "";
   newSvg.append(newDefs);
   newSvg.append(newTextPath);
   return newSvg;

}
