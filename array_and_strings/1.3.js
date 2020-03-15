const URLLify = (url) => {
  if(!url || url.length ===0) {return url}

  let spaceCount = 0;
  for (let i = 0; i < url.length; i++) {
    if(url[i] === ' ') ++spaceCount;    
  }

  let newLength = url.length - 1 + 2 * spaceCount;
  for (let i = url.length - 1, j = newLength; i >= 0 && j > i; --i, --j) {
    if (url[i] === ' ') {
      url[j] = '0';
      url[--j] = '2';
      url[--j] = '%';
    }
    else {
      url[j] = url[i];
    }
  }
  return url
}


console.log(URLLify('Mr Joh Smith    '))



