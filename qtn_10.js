function computeSum(p1, p2) {
    const sum = p1 + p2;
  
    if (p1 === p2) {
      console.info(`Both numbers are the same: ${p1}. Triple sum is: ${3 * sum}`);
      return 3 * sum;
    } else {
      console.info(`For different: ${p1} and ${p2}. Sum is: ${sum}`);
      return sum;
    }
  }
  
  // given numbers 4 and 6
  const parameter1 = 4;
  const parameter2 = 6;
  
  const result = computeSum(parameter1, parameter2);
  console.log(`The result is: ${result}`);