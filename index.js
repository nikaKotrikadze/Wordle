// Import stylesheets
import './style.css';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'bf4291de88msh1ba37180e2e8a18p13e411jsn34e228ba6a84',
    'X-RapidAPI-Host': 'wordle-answers-solutions.p.rapidapi.com',
  },
};

const link = 'https://wordle-answers-solutions.p.rapidapi.com/today';

/*Fetching the api and passing the data to the function 'display'*/

fetch(link, options)
  .then((resp) => resp.json())
  .then((data) => display(data));

const inputs = document.getElementById('inputs');
const checkBtn = document.getElementById('checkBtn');

/* Creating function display with the fetched data from the API. */

function display(data) {
  console.log(data.today);
  const word = data.today;

  /* looping through the given data from the API and displaying inputs of the length of the word. */

  for (let i = 0; i < word.length; i++) {
    inputs.innerHTML += `
    <input maxlength="1" type="text" id="inputType" />
    `;
  }

  // function Jump(field, autoMove) {
  //   if (field.value.length >= field.maxLength) {
  //     document.getElementById(autoMove).focus();
  //   }
  // }

  let wordArr = [];
  const pTag = document.getElementById('winOrLose');
  let allInputs = document.querySelectorAll('#inputType');

  /* making the placeholders of the first and the last inputs equal to the words' first and the last symbols */

  allInputs[0].placeholder = word[0];
  allInputs[word.length - 1].placeholder = word[word.length - 1];

  /* after clicking the "CHECK!" button, it will loop through the options and will push the values of inputs to the array 'wordArr' */
  const hint = document.getElementById('hint');
  checkBtn.addEventListener('click', () => {
    hint.style.display = 'none';
    for (let i = 0; i < allInputs.length; i++) {
      const value = allInputs[i].value;
      wordArr.push(value);
    }

    console.log(wordArr);
    //set the array's length to 0

    /* if the given word from the API is equal to the word taken from the input, it'll display 'YOU WON!!!', if NOT it'll display 'WTF MAN.. WRONG.'*/
    // wordArr = [];
    // wordArr.length = 0;
    if (word === wordArr.join('').toUpperCase()) {
      pTag.innerHTML = 'YOU WON!!!';
      wordArr = [];
    } else {
      pTag.innerHTML = 'No WRONG.';
      wordArr = [];
    }
  });
  console.log(wordArr.join(''));
}
