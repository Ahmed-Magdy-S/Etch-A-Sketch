//Create Div Container with class container
let containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);
containerDiv.classList.add('container')



function createGridSquaresDivs (gridSquaresNum) {
    for (let i = 0; i < gridSquaresNum; i++) {
        containerDiv.appendChild(document.createElement('div'));
    }
}
createGridSquaresDivs(16*16);
