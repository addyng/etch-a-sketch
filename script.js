const grid = document.getElementById('grid');

// Creates X by X grid
function createGrid(size) {

    for (let i = 0; i < (size*size); i++) {

        let singleDiv = document.createElement('div');
        // singleDiv.textContent = `${i}`
        singleDiv.style.cssText = `height: ${640/size}px; width: ${640/size}px`;

        singleDiv.addEventListener('mousedown', (e) => {
            singleDiv.style.backgroundColor = 'black';
            e.stopPropagation();
        }); 


        grid.appendChild(singleDiv);
    }

}

createGrid(16);