

const jokeText = document.querySelector('.Joke');
const generateBtn = document.querySelector('.btn');

// Define the function to fetch jokes from API
async function fetchJoke() {
  const response = await fetch('https://official-joke-api.appspot.com/random_joke');
  const jokeData = await response.json();
  const setup = jokeData.setup;
  const punchline = jokeData.punchline;
  const joke = `${setup} ${punchline}`;
  return joke;
}

// Define the function to generate a joke
async function generateJoke() {
  const joke = await fetchJoke();
  jokeText.textContent = joke;
  jokeText.classList.add('fade');
}

// Add event listener to the "Generate" button
generateBtn.addEventListener('click', generateJoke);

