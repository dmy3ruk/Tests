
function mergeAndRemoveZ(arr) {
  return arr.join('').replace(/z/g, '').replace(/Z/g, '').replace(/ /g, '');
}
 const strings = ['Zade', 'Meadows', 'Zara'];
 
 console.log(mergeAndRemoveZ(strings));
 module.exports = mergeAndRemoveZ;
