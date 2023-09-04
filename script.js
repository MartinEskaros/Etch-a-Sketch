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
        item.style.backgroundColor = 'rgb(0, 0, 0)';
    });
});
