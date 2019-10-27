'use strict';

function findCommonValues(treeOne, treeTwo) {
 if(!treeOne || !treeTwo) return null;
 if(!treeOne.value || !treeTwo.value) return 'no value'
 let obj = {};
 let result = [];
 let _walk = (node) => {
 
  if(!obj[node.value]) {
    obj[node.value] = 1;
 
  } else {
    obj[node.value]++;
  }
 
  if(node.left) _walk(node.left);
  if(node.right) _walk(node.right);
 
}
 _walk(treeOne);
 _walk(treeTwo);

 for(let i = 0; i < Object.keys(obj).length; i++) {
   if(Object.values(obj)[i] > 1) {
     result.push(Object.keys(obj)[i]);
   }
 }

 return result;

}

module.exports = findCommonValues;
