// create a ref to the div in html
const container = document.querySelector('.container');

// loop 256 times to make a grid
for (let i = 0; i < 256; i++) {
    // creates a new div and referencing it to 'content'
    const content = document.createElement('div');

    content.classList.add('content');
    container.appendChild(content);
}

const squares = document.querySelectorAll(".content");
squares.forEach((button => {
    button.addEventListener("mouseover", () =>{
        console.log('Mouse entered');
        button.style.backgroundColor = 'lightblue';

    })
}))

function getRandomColour(){
    const letters = '0123456789ABCDEF';
    let randomColour = "#";
    for (let i =0; i<6;i++){
        randomVal = Math.floor((Math.random()*16));

    }

}