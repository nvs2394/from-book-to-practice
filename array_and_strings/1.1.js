const isUniqueChars = (string) => {
  if(string.length > 128) return false;

  let charSet = []

  for (let i = 0; i < string.length; i++) {
    let val = string.charAt(i)
    console.log('charSet', charSet)
    console.log('val', val)
    console.log('charSet[val]', charSet[val])
    if (charSet[val]) return false
    charSet[val] = true
  }

  return true
}

const isUniqueCharsSolution2 = (string) => {
  let checker = 0;
  for (let i = 0; i < string.length; i++) {
    let val = string.charAt(i) -'a';
    if((checker && (1<<val)) >0) return false
    checker |= (1<<val)
  }
  return true;
}

// console.log(isUniqueChars("son"))
console.log(isUniqueCharsSolution2("sonn"))