// Stack overflow for mousedown: https://stackoverflow.com/questions/71377320/css-js-mousedown-getting-stuck-during-drag-event

const grid = document.getElementById('grid');

// Creates X by X grid
function createGrid(size) {

    for (let i = 0; i < (size*size); i++) {
        let singleDiv = document.createElement('div');
        // singleDiv.textContent = `${i}`
        singleDiv.style.cssText = `height: ${640/size}px; width: ${640/size}px`;

        // singleDiv.addEventListener('mousedown', (e) => {
        //     singleDiv.style.backgroundColor = 'black';
        // }); 
        grid.appendChild(singleDiv);
    }
}

grid.addEventListener('mouseover', colorGrid);
let mousedown = false;

grid.addEventListener('mousedown', function(event) {
    mousedown = true;
    colorGrid(event);
});
  
document.body.addEventListener('mouseup', function() {
    mousedown = false;
});

function colorGrid(event) {
    if (mousedown && (event.target.parentElement === grid)) {
        event.target.style.backgroundColor = 'black';
    }
}

createGrid(16);