const container = document.querySelector('.container');
numsquares = 16;
for (let i = 0; i < numsquares*numsquares-1 ; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
}

const squares = document.querySelectorAll('.square');


///creating the new grid code
squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'lightblue'; // Change color on hover
    });
  
    square.addEventListener('mouseleave', () => {
      square.style.backgroundColor = ''; // Reset color on mouse leave
    });
  });




///new grid
function createNewGrid() {
  // Get the value entered by the user
  let squaresPerSide = parseInt(document.getElementById('numSquares').value);
  
  // Validate user input
  if (isNaN(squaresPerSide) || squaresPerSide <= 0 || squaresPerSide > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }
  
  // Remove existing grid
  const container = document.querySelector('.container');
  container.innerHTML = '';
  
  // Calculate width of each square
  //initially 960 is the total width of the grid
  const totalWidth = 336; // Total width of the grid
  const squareWidth = totalWidth / (squaresPerSide*squaresPerSide);
  const totalHeight = 336; // Total height of the grid  
  const squareHeight = totalHeight / (squaresPerSide*squaresPerSide);
  
  // Create new grid squares
  for (let i = 0; i < squaresPerSide * squaresPerSide ; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = squareWidth + 'px';
    square.style.height = squareHeight + 'px';
    container.appendChild(square);
  }


}

function resizeSquares(size) {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.style.width = size + 'px';
      square.style.height = size + 'px';
    });
  }