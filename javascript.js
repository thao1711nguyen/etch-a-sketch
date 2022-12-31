//document.body.onload=createGrid(7);
function createGrid (n){
    for(let i=0; i<n*n; i++){
        let childSquare = document.createElement('div');
        const container = document.querySelector('.container');
        container.appendChild(childSquare);
        childSquare.classList.add('child');   
    }
}
function removeGrid() {
        let oldChildren = document.querySelectorAll('.child');
        const container = document.querySelector('.container');
        for(const child of oldChildren) {
            container.removeChild(child);
        }
}  
const children = document.querySelectorAll('.child');
children.forEach((child) => {
    child.addEventListener('mouseover',(e) => {
        e.target.classList.add('change');
        //e.target.style.backgroundColor = "yellow";
        
    });
    child.addEventListener('mouseout',(e) =>{
        e.target.classList.remove('change');
        //e.target.style.backgroundColor ='rgb(186, 209, 15)';
        
    });
});
const button = document.querySelector('.btn');
button.addEventListener('click', (e) => {
    let number=prompt('Please enter a number that less than 100: ');
    removeGrid();
    createGrid(number);
});




