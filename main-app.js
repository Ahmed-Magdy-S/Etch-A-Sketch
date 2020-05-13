//Create Div Container with class container
let containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);
containerDiv.classList.add('container')


//Create Grid Squares Divs
function createGridSquaresDivs (gridSquaresNum) {
    for (let i = 0; i < gridSquaresNum; i++) {
        containerDiv.appendChild(document.createElement('div'));
    }
}
createGridSquaresDivs(16*16);

//added Hover Effect
let gridDivs = document.querySelectorAll('.container div')
gridDivs.forEach(function(onegrid){
onegrid.addEventListener('mouseover', function(){
    onegrid.style.background = "red";
})
})