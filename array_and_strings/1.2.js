const string1 = '    dog'
const string2 = 'dog'

const permutation = (string1, string2)=> {
  console.log('string1', string1)
  console.log('string2', string2)
  if(string1.length !== string2.length) {
    return false
  }

  const str1 =  Array.from(string1).sort((a,b) => a-b).toString();
  const str2 =  Array.from(string2).sort((a,b) => a-b).toString();
  return str1 === str2;
}

console.log('Permutation: ', permutation(string1, string2))