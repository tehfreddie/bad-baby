/*jshint esversion: 6 */


var elementsInsideBody = [...document.body.getElementsByTagName('*')];
// This makes an array of everything inside the body tag


//a function that loops through every single item
function findAndReplace(){
  elementsInsideBody.forEach(element =>{
    element.childNodes.forEach(child =>{
      if(child.nodeType === 3){
        replaceText(child);
      }
    });

  });
}

function replaceText (node) {
  let value = node.nodeValue;
  value = value.replace(/enfant terrible/gi, 'bad baby');
  value = value.replace(/enfant terrible/gi, 'bad baby');
  node.nodeValue = value;
}

window.onload = findAndReplace();
