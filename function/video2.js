//Replace char1 by char2 in str
function replaceChars(str, char1, char2) {
    let outStr = '';
    let len = str.length;
    for (let i = 0; i < len; i++) {
      if (str[i] === char1) {
        outStr = outStr + char2;
      } else {
        outStr = outStr + str[i];
      }
    }
    return outStr;
  }
  
  console.log(replaceChars('Hello', 'o', 'u'));
  