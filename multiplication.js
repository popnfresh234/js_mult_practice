const readLine = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

const genRandom = max => Math.floor(Math.random() * (max - 1 + 1)) + 1;


const multQuestion = (maxMultiplier) => {
  const opLeft = genRandom(maxMultiplier);
  const opRight = genRandom(maxMultiplier);
  const correctAnswer = opLeft * opRight;
  console.log(`${opLeft} * ${opRight}`);
  readLine.question('Answer? ', (multAnswer) => {
    if (parseInt(multAnswer, 10) === correctAnswer) {
      console.log('Correct!');
      console.log('\n');
    } else {
      console.log('\n');
      console.log('Incorrect!');
      console.log(`Correct answer is ${correctAnswer}`);
      console.log('\n');
    }
    multQuestion(maxMultiplier);
  });
};

const question = () => {
  readLine.question('Maximum multiplier? ', (answer) => {
    const intAnswer = parseInt(answer, 10);
    if (intAnswer) {
      console.log('\n');
      multQuestion(intAnswer);
    } else if (answer === 'done') {
      readLine.close();
    } else {
      console.log('Bad input, try again');
      question();
    }
  });
};

question();
