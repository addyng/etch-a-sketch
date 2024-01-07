// Stack overflow for mousedown: https://stackoverflow.com/questions/71377320/css-js-mousedown-getting-stuck-during-drag-event
// made new solution based off above

const grid = document.getElementById('grid');
const gridSizeBtn = document.getElementById('gridSize');
const randColorBtn = document.getElementById('randomColor');

let mouseDown = false;
let colorSelector = 'black';
let desiredGridSize = 16;
let randomColorToggle = false;

createGrid(desiredGridSize);

// Creates X by X grid
function createGrid(size) {

    for (let i = 0; i < (size*size); i++) {
        let singleDiv = document.createElement('div');
        singleDiv.style.cssText = `height: ${640/size}px; width: ${640/size}px`;

        // Note: mousedown only fires once, but mouseover fires repeatedly
        singleDiv.addEventListener('mouseover', (event) => {
            colorGrid(event)
        });

        singleDiv.addEventListener('mousedown', (event) => {
            mouseDown = true;
            // singleDiv.style.backgroundColor = `${colorSelector}`;
            colorGrid(event);
        }); 

        grid.appendChild(singleDiv);
    }
}

document.body.addEventListener('mouseup', () => {
    mouseDown = false;
});

function colorGrid(event) {
    if (mouseDown === true) {
        if (randomColorToggle === true) {
            let randColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
            event.target.style.backgroundColor = randColor;
            event.target.style.boxShadow = `inset 0 0 0 1px ${randColor}`;
        }
        else {
            event.target.style.backgroundColor = 'black';
            event.target.style.boxShadow = `inset 0 0 0 1px black`;
        }
    }
}

// Change grid size
gridSizeBtn.addEventListener('click', () => {
    userInput = prompt("What grid size would you like? Enter a single number.", '');
    desiredGridSize = userInput;
    grid.innerHTML = '';
    createGrid(desiredGridSize);
});

// Random color button
randColorBtn.addEventListener('click', () => {
    if (randomColorToggle === false) {
        randomColorToggle = true;
        let randColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        randColorBtn.style.backgroundColor = randColor;
    }
    else {
        randomColorToggle = false;
        randColorBtn.style.backgroundColor = '';
    }
});








// Stack overflow solution

// grid.addEventListener('mouseover', colorGrid);
// grid.addEventListener('mouseover', colorGrid);
// let mousedown = false;

// grid.addEventListener('mousedown', function(event) {
//     mousedown = true;
//     colorGrid(event);
// });
  
// document.body.addEventListener('mouseup', function() {
//     mousedown = false;
// });

// function colorGrid(event) {
//     if (mousedown && (event.target.parentElement === grid)) {
//         event.target.style.backgroundColor = 'black';
//     }
// }