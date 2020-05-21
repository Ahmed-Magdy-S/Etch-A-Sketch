//Generate Rabdom Color:
function getRandomColor() {
    return 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
}
let shadowObj = {
    'percent': 0,
    'shadowing': function () {
        return this.percent = this.percent - 0.1
    }
}
let randomColor = getRandomColor()
//Darken Color
const RGB_Linear_Shade = (p, c) => {
    var i = parseInt,
        r = Math.round,
        [a, b, c, d] = c.split(","),
        P = p < 0,
        t = P ? 0 : 255 * p,
        P = P ? 1 + p : 1 - p;

    return "rgb" + (d ? "a(" : "(") + r(i(a[3] == "a" ? a.slice(5) : a.slice(4)) * P + t) + "," + r(i(b) * P + t) + "," + r(i(c) * P + t) + (d ? "," + d : ")");
}


//Create Div Container with class container
let containerDiv = document.createElement('div');
document.body.appendChild(containerDiv);
containerDiv.classList.add('container')

//added width to container div
let containerWidth = 50;
containerDiv.style.width = containerWidth + 'rem';


//Create Grid Squares Divs
let gridNumbers = 16;

function createGridSquaresDivs(gridSquaresNum) {

    for (let i = 0; i < gridSquaresNum * gridSquaresNum; i++) {
        containerDiv.appendChild(document.createElement('div'));
    }
    //added Width & Height
    let gridDivs = document.querySelectorAll('.container div')
    gridDivs.forEach(function (oneGrid) {
        oneGrid.style.width = containerWidth / gridSquaresNum + 'rem';
        oneGrid.style.height = containerWidth / gridSquaresNum + 'rem';
        // Added Hover Effect
        function changeBgColor(e) {
            e.currentTarget.style.backgroundColor = RGB_Linear_Shade(percent, randomColor)
            
        }
        oneGrid.addEventListener('mouseenter', changeBgColor)

    })
}

createGridSquaresDivs(gridNumbers);



//New Game Button
document.querySelector('.new-game').addEventListener('click', function () {
    document.querySelectorAll('.container div').forEach(function (oneGrid) {
        oneGrid.style.background = 'none';
        percent = 0;

        randomColor = getRandomColor()
    })
    let numbers = prompt("how many squares per side to make the new grid");
    if (numbers !== null && numbers !== '' && typeof + numbers == 'number') {
        containerDiv.innerHTML = '';
        createGridSquaresDivs(+numbers);
    }
})