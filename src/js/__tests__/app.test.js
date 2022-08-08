import reandomSquare from '../app'

test('delete goblin class', () => {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.classList.remove('goblin');
        expected(square.className).toBe('square')
    })
});
