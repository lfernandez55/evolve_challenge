

function addClicks() {
// TODO Complete code so that this function makes each cell in the grid clickable
// When the cell is clicked the background between aqua and white.

}

// This named function is called inside addClicks() by an anonmymous function which is itself
// referenced by an addEventListener method.
// Study the learning module for the precise way to do this.  
function select(elem) {
    if (elem.style.backgroundColor == 'aqua') {
        elem.style.backgroundColor = '';
    } else {
        elem.style.backgroundColor = 'aqua';
    }
}

// This function is called by the Evolve Auto button in the GUI
function evolveAuto() {
    setInterval(evolve, 500);
}

// This function is called by the Evolve button in the GUI
function evolve() {
// TODO: Complete code so this function evolves the GUI grid one generation.
// This function uses the same algorithmic techniques you employed to complete the 
// evolve function in the CGOL with 2D Arrays assignment.  Only now you have to iterate
// through a table instead of a 2D array.
}

// This function counts the number of live cells adjacent to a cell whose coordinates
// are passed into this function
function countSurroundingLiveCells(y, x) {
// TODO: Write code so this function returns the number of live cells that are adjacent to
// the cell whose coordinates are passed in by function's y and x parameters.
// This function uses similar algorithmic techniques that you employed to complete the
// countSurroundingLiveCells in the CGOL with 2D Arrays assignment
}

// This function is called by the blinkers and crawlers button
function blinkersAndCrawlers() {
    let rows = document.getElementById("grid").rows;
    //crawler
    rows[0].cells[0].style.backgroundColor = 'aqua';
    rows[0].cells[2].style.backgroundColor = 'aqua';
    rows[1].cells[1].style.backgroundColor = 'aqua';
    rows[1].cells[2].style.backgroundColor = 'aqua';
    rows[2].cells[1].style.backgroundColor = 'aqua';

    //blinker (bottom left)
    // TODO: Add appropriate code to add the bottom left blinker

    //blinker (bottom right)
    // TODO: Add appropriate code to add the bottom right blinker

}

// This function is called by the apocalpyse button.  It kills all cells.
function apocalypse() {
    location.reload();
}