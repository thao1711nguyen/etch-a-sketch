document.body.onload=createElement(16*16);
function createElement (n){
    for(let i=0; i<n; i++){
        let childSquare = document.createElement('div');
        const container = document.querySelector('.container');
        container.appendChild(childSquare);
        childSquare.classList.add('child');
        
        
    }
}
const children = document.querySelectorAll('.child');
children.forEach((child) => {
    child.addEventListener('mouseover',(e) => {
        e.target.classList.add('change');
        
    });
    child.addEventListener('mouseout',(e) =>{
        e.target.classList.remove('change');
        
    });
});



