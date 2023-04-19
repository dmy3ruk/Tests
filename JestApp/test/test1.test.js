const mergeAndRemoveZ = require('../src/removeZ')
describe('mergeAndRemoveZ', ()=>{

    test('mergeAndRemoveZ',()=>{ 
       const arr=['Switzerland', 'zodiac academy', 'dizzy'];
       const removeZ=mergeAndRemoveZ(arr)
        expect(removeZ).toBe('Switerlandodiacacademydiy')
    });
    test('Delete Z from array and merge them into one string', ()=>{
        const strings=['Zade','Meadows'];
        const mergedAndRemoveZ= mergeAndRemoveZ(strings);
        expect(mergedAndRemoveZ).toBe('adeMeadows');   
     });
     test('should return the same string when given an array with no "z" or "Z"', ()=>{
         const strings = ['hello', 'world'];
         const mergedStringWithoutZ = mergeAndRemoveZ(strings);
        expect(mergedStringWithoutZ).toBe('helloworld')
     });
});