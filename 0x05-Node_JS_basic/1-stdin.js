const readline = require('readline');

const isInteractive = process.stdin.isTTY;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});

rl.on('close', () => {
  if (isInteractive === false) {
    console.log('This important software is now closing');
  }
});
