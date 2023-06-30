//Given a string as input, print ABFOUNDif in the array there is an 'a' immediately followed by 'b' otherwise print AB NOT FOUND.
function checkAB(string) {
    for (let i = 0; i < string.length - 1; i++) {
      if (string[i] === 'a' && string[i + 1] === 'b') {
        console.log("ABFOUND");
        return;
      }
    }
  
    console.log("AB NOT FOUND");
  }
  
  // Test cases
  let testCases = [
    'javascript',
    'abcdef',
    'acbcadbd',
    'bat+ball',
    'nicebaby'
  ];
  
  for (let i = 0; i < testCases.length; i++) {
    let testCase = testCases[i];
    checkAB(testCase);
  }
  