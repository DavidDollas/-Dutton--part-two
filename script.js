// Prompt the user for their name
const name = prompt("Welcome to GC mini golf! What is your name?");

// Prompt the user to choose 3 or 6 holes
const holes = parseInt(
  prompt(`Hi, ${name}! Would you like to play 3 or 6 holes today?`)
);

// Validate the number of holes
if (holes !== 3 && holes !== 6) {
  console.log("Please enter either 3 or 6 for the number of holes.");
} else {
  // Initialize total putts
  let totalPutts = 0;

  // Prompt the user for the number of putts for each hole
  for (let i = 1; i <= holes; i++) {
    const putts = parseInt(prompt(`How many putts for hole ${i}? (par is 3)`));
    totalPutts += putts;
  }

  // Calculate total par
  const par = 3 * holes;
  const totalPar = totalPutts - par;

  // Log the result to the console
  if (totalPar > 0) {
    console.log(`Nice try, ${name}... Your total par was: +${totalPar}.`);
  } else if (totalPar < 0) {
    console.log(`Great job, ${name}! Your total par was: ${totalPar}.`);
  } else {
    console.log(`Good game, ${name}. Your total par was: 0.`);
  }
}
