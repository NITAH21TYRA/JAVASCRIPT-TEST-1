function toUpperCase(str) {
    if (typeof str !== 'string') {
      return 'Input must be a string';
    }
  
    return str.toUpperCase();
  }
  
  
  const lowercaseString = "hello";
  const uppercaseString = toUpperCase(lowercaseString);
  console.log(uppercaseString); 