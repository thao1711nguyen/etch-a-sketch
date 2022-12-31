
window.addEventListener('load', (e) => { //make a default 16x16 grid when page is loaded
    createGrid();
    addEvent();
});
function createGrid (n=16){
    for(let i=0; i<n*n; i++){
        let childSquare = document.createElement('div');
        const container = document.querySelector('.container');
        container.appendChild(childSquare);
        childSquare.classList.add('child');
        let width = container.scrollWidth/n;
        childSquare.style.width = `${width}px`;
        childSquare.style.height = `${width}px`;
    }
}
function removeGrid() {
        let oldChildren = document.querySelectorAll('.child');
        const container = document.querySelector('.container');
        for(const child of oldChildren) {
            container.removeChild(child);
        }
}
function random(){
        return Math.random()*256;
}
function addEvent(){  
const children = document.querySelectorAll('.child');
children.forEach((child) => {
    child.addEventListener('mouseover',(e) => {
        //e.target.classList.add('change');
        let red = random();
        let green = random();
        let blue = random();
        e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
        
    });
    child.addEventListener('mouseout',(e) =>{
        //e.target.classList.remove('change');
        e.target.style.backgroundColor = 'white';
        
    });
});
}
const button = document.querySelector('.btn');
button.addEventListener('click', (e) => {
    let number=prompt('Please enter a number that less than 100: ');
    removeGrid();
    createGrid(number);
    addEvent();
});




