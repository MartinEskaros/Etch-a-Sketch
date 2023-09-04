for(let i=0; i<32;i++){
    for(let j=0; j<32;j++){
        const square = document.createElement('div');
        square.classList.add('grid-item');
        document.getElementById('container').appendChild(square);
    }

}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.classList.add('grid-item-passed');
    });
});

//clear board

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function(){
    const gridItems = document.querySelectorAll('.grid-item-passed');
    gridItems.forEach(item => {
        item.classList.remove('grid-item-passed');
    });
});
