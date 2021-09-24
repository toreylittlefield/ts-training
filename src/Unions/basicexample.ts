// before
function printNumsAndStrings(statement) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStrings('hello!');

// after string or number type union
function printNumsAndStringsTS(statement: string | number) {
  console.log(`ℹ️ LOG:: ${statement}`);
}

printNumsAndStringsTS('hello!');
