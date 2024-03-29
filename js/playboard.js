window.onload = () => start(); //Initialize game

//Get DOM Elements
const colours = document.querySelector('.colours'); //Get buttons div for addEventListener
const [...buttonsArr] = document.querySelectorAll('button'); //Get buttons to switch on or off
//Get individual buttons for later styling
const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const green = document.querySelector('.green');
const orange = document.querySelector('.orange');
const white = document.querySelector('.white');

//Information panel insert
const info = document.querySelector('.info p');

//Get all four guesses for each row and place into an array
const [...one] = document.querySelectorAll('#one, #two, #three, #four');
const [...two] = document.querySelectorAll('#five, #six, #seven, #eight');
const [...three] = document.querySelectorAll('#nine, #ten, #eleven, #twelve');
const [...four] = document.querySelectorAll(
  '#thirteen, #fourteen, #fifteen, #sixteen'
);
const [...five] = document.querySelectorAll(
  '#seventeen, #eighteen, #nineteen, #twenty'
);
const [...six] = document.querySelectorAll(
  '#twentyone, #twentytwo, #twentythree, #twentyfour'
);
const [...seven] = document.querySelectorAll(
  '#twentyfive, #twentysix, #twentyseven, #twentyeight'
);
const [...eight] = document.querySelectorAll(
  '#twentynine, #thirty, #thirtyone, #thirtytwo'
);
const [...nine] = document.querySelectorAll(
  '#thirtythree, #thirtyfour, #thirtyfive, #thirtysix'
);
const [...ten] = document.querySelectorAll(
  '#thirtyseven, #thirtyeight, #thirtynine, #forty'
);

//Results
const [...resultOne] = document.querySelectorAll('.resultOne .miniCircle');
const [...resultTwo] = document.querySelectorAll('.resultTwo .miniCircle');
const [...resultThree] = document.querySelectorAll('.resultThree .miniCircle');
const [...resultFour] = document.querySelectorAll('.resultFour .miniCircle');
const [...resultFive] = document.querySelectorAll('.resultFive .miniCircle');
const [...resultSix] = document.querySelectorAll('.resultSix .miniCircle');
const [...resultSeven] = document.querySelectorAll('.resultSeven .miniCircle');
const [...resultEight] = document.querySelectorAll('.resultEight .miniCircle');
const [...resultNine] = document.querySelectorAll('.resultNine .miniCircle');
const [...resultTen] = document.querySelectorAll('.resultTen .miniCircle');


//Play again button and hidden code to show after win
const playAgain = document.querySelector('.playAgain');
const playArea = document.querySelector('.playArea');
const hidden = document.querySelector('.hidden');
const [...hidden2] = document.querySelectorAll('.hidden .circle2');

//Globals
let number = 0;
let result = 0;
let mysteryColours = [];
let colourSetArr = [];
let setCounter = 0;
let posCounter = 0;
let saveColour;
let winArr = [];
let colourSet;

//colours array
const coloursArray = [
  '',
  'radial-gradient(circle at 10px 10px, blue, rgb(1, 1, 44))',
  'radial-gradient(circle at 10px 10px, red, rgb(1, 1, 44))',
  'radial-gradient(circle at 10px 10px, yellow, rgb(1, 1, 44))',
  'radial-gradient(circle at 10px 10px, green, rgb(1, 1, 44))',
  'radial-gradient(circle at 10px 10px, orange, rgb(1, 1, 44))',
  'radial-gradient(circle at 10px 10px, white, rgb(1, 1, 44))'
];

//Guess positions array
const boardPositions = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten
];

//Result positions array
const resultPositions = [
  resultOne,
  resultTwo,
  resultThree,
  resultFour,
  resultFive,
  resultSix,
  resultSeven,
  resultEight,
  resultNine,
  resultTen
];

//Button background colours
blue.style =
  'background-color: blue; background: radial-gradient(circle at 10px 10px, blue, #01012c);';
red.style =
  'background-color: red; background: radial-gradient(circle at 10px 10px, red, #01012c);';
yellow.style =
  'background-color: yellow; background: radial-gradient(circle at 10px 10px, yellow, #01012c);';
green.style =
  'background-color: green; background: radial-gradient(circle at 10px 10px, green, #01012c);';
orange.style =
  'background-color: orange; background: radial-gradient(circle at 10px 10px, orange, #01012c);';
white.style =
  'background-color: white; background: radial-gradient(circle at 10px 10px, white, #01012c);';

//Functions

//This function will initialize the game
const start = () => {
  buttonsArr.map(button => (button.disabled = false));
  playAgain.disabled = true;
  playAgain.style = 'opacity: 0';
  hidden.style = 'opacity: 0';
  playArea.style = 'opacity: 1';
  info.innerHTML = 'Please choose a colour';
  assignColours();
};

//Create hidden four mystery colours.
//As the random number generator can return an already used number
//we need to remove duplicate colours from the mystery colours array.
//We do this by placing our array into a set. Sets can only have unique entries.
//Therefore by checking if the size of the set is less than four we can try again
//until our mystery array only has four unique colours.
const assignColours = () => {
  for (let i = 0; i < 4; i++) {
    result = getRandomIntInclusive(1, 6);
    mysteryColours.push(coloursArray[result]);
  }
  colourSet = new Set(mysteryColours);
  if (colourSet.size < 4) {
    mysteryColours.length = 0;
    colourSet.clear();
    start();
  }
};

//Random number generator
const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  number = Math.floor(Math.random() * (max - min + 1)) + min;
  return number;
};

//Colour clicked. Put on available circle. This achieved by two variables. The posCounter which tells us
//at which position within the row we are dealing with and the setCounter which tells us which row.
const putOnBoard = e => {
  if (e.target.tagName === 'BUTTON' && setCounter <= 9) {
    boardPositions[setCounter][posCounter].style.background =
      e.target.style.background;
    posCounter++;
    if (posCounter === 4) {
      checkSequence();
      checkColours();
      checkResults();
      posCounter = 0;
      setCounter++;
    }
  }
};

//Check for correct colour and position. Loop around the selected row and compare colours to the
//correct index.
const checkSequence = () => {
  boardPositions[setCounter].map((pos1, index) => {
    if (pos1.style.background === mysteryColours[index]) {
      resultPositions[setCounter][index].style =
        'background-color: green; background: radial-gradient(circle at 10px 10px, green, #01012c);';
    }
  });
};

//Check for correct colours in wrong position. This needs to loop around the correct row
//of the results array and check for empty slots. No point checking if the sequence checker
//has already established correct sequence and colour. Now we need to check the guesses but for
//only those colours that didn't match on sequence. If found we place  a white colour in the
//appropriate cell.
const checkColours = () => {
  resultPositions[setCounter].map((pos1, index1) => {
    if (pos1.style.background === '') {
      boardPositions[setCounter].map((pos2, index2) => {
        if (index1 === index2) {
          mysteryColours.map(colour => {
            if (pos2.style.background === colour) {
              pos1.style =
                'background-color: white; background: radial-gradient(circle at 10px 10px, white, #01012c);';
            }
          });
        }
      });
    }
  });
};

//Check result to continue or declare winner. We need all results for selected row to be green
const checkResults = () => {
  winArr.length = 0;
  resultPositions[setCounter].map(pos => {
    if (
      pos.style.background !==
      'radial-gradient(circle at 10px 10px, green, rgb(1, 1, 44))'
    ) {
      winArr.push(false);
    } else {
      winArr.push(true);
    }
  });

  //Use reduce on our results array to determine the reults
  let win = winArr.reduce((total, x) => (x === true ? total + x : null));

  //If 4 greens we have a winner
  if (win === 4) {

    info.innerHTML = 'You are a winner';
    playAgain.disabled = false;
    buttonsArr.map(button => (button.disabled = true));
    playAgain.style = 'opacity: 1;cursor: pointer';
    mysteryColours.map((colour, index) => {
      hidden2[index].style.background = colour;
    });
    hidden.style = 'opacity: 1';
    playArea.style = 'opacity: 0.3';

    sessionStorage.setItem("result", "winner");
    setTimeout(() => {
      window.location.href = "./gameover.html";
  }, 1500);

  } else {
    if (setCounter === 9) {
      return info.innerHTML = 'Game Over';
    }

    info.innerHTML = 'Please continue';
  }
};

//Play again button pressed. Reset all
const clearDown = () => {
  resultPositions.map(pos => {
    pos.map(colour => (colour.style.background = ''));
  });
  boardPositions.map(pos => {
    pos.map(colour => (colour.style.background = ''));
  });
  setCounter = 0;
  mysteryColours.length = 0;
  colourSet.clear();
  start();
};

//Listeners
colours.addEventListener('click', e => putOnBoard(e));
playAgain.addEventListener('click', () => clearDown());
//Show results to test the app
console.log(mysteryColours)