const permutation = (string1, string2)=> {
  console.log('string1', string1)
  console.log('string2', string2)
  if(string1.length !== string2.length) {
    return false
  }

  let stringsMap = new Map()

  for (let i = 0; i < string1.length; i++) {
    stringsMap.set(string1[i], stringsMap.get(string1[i]) + 1 || 1);
    console.log('stringsMap', stringsMap)
  }

  for (let i = 0; i < string2.length; i++) {
    let count = stringsMap.get(string2[i]);

    if(!count) { return false}

    if (count === 1) {
      stringsMap.delete(string2[i]);
    }
    else {
      stringsMap.set(str2[i], count - 1);
    }
  }

  return stringsMap.size === 0
}

console.log('Permutation: ', permutation('string1', 'string1'))
// console.log('Permutation: ', permutation('string1', 'string1'))