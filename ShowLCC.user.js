// ==UserScript==
// @name        Show LCC on WorldCat
// @description When available, display Library of Congress Classification on WorldCat titles in the details section.
// @grant       none
// @include     http*://www.worldcat.org/title/*
// @license     MIT
// @version     1.0
// ==/UserScript==

function getthisQueryString() {
  let myDiv = document.getElementById('getthis');
  if (myDiv === null) {
    console.log("Error: Could not find 'getthis' div.");
    return null;
  }
  let mychildren = myDiv.children;
  let theTitle = null;
  for (var i=0; i < mychildren.length; i++) {
    var theChild = mychildren[i];
    if (theChild.nodeName === 'DIV') {
      grandchildren = theChild.children;
      for (var j=0; j < grandchildren.length; j++) {
        var grandchild = grandchildren[j];
        if (grandchild.nodeName === 'SPAN') {
          let queryString = grandchild.title;
          return queryString;
        }
      }
    }
  }
  console.log("Error: Could not find 'getthis' child span with query string.")
  return null;
}
function getLCC() {
  var queryString = getthisQueryString();
  if (queryString === null) {
    return null;
  }
  let params = new URLSearchParams(queryString);
  if (params.has("rft.identifier")) {
    let LCCString = params.get("rft.identifier");
    return LCCString;
  }
  else {
    console.log("Warning: no rft.identifier found.");
    return null;
  }
}
function addToTable(LCCString) {
  let mytr = document.getElementById("details-doctype");
  if (mytr === null) {
    console.log("Error: could not find 'details-doctype' table row.");
    return null;
  }
  let mytb = mytr.parentElement;
  let newtr = mytr.cloneNode(true);
  newtr.id = "details-lcc";
  newtr.cells[0].textContent = "Library of Congress Classification:";
  if (LCCString === null) {
    newtr.cells[1].textContent = "Not available.";
  } else {
    newtr.cells[1].textContent = LCCString;
  }
  mytb.appendChild(newtr);
  return
}
let theLCC = getLCC();
addToTable(theLCC);
