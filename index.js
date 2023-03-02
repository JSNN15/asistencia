const text = document.querySelector('.text');

text.addEventListener('mouseover', () => {
    text.style.color = '#000000';
    text.style.backgroundColor = '#ffffff';
    text.style.fontSize = '24px';
});

text.addEventListener('mouseout', () => {
    text.style.color = '#ffffff';
    text.style.backgroundColor = 'transparent';
    text.style.fontSize =
    '20px';
});
