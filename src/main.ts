import './style.css'

// Simple interaction
const btn = document.getElementById('mlem-btn') as HTMLButtonElement;
const imageContainer = document.querySelector('.image-container') as HTMLDivElement;
const text = document.querySelector('p') as HTMLParagraphElement;

const sounds = [
    'Mlem.',
    'Mlem!',
    'Mleeeem.',
    '*slurp*'
];

btn.addEventListener('click', () => {
    // Visual Mlem
    imageContainer.classList.remove('mlem');
    void imageContainer.offsetWidth; // Trigger reflow to restart animation
    imageContainer.classList.add('mlem');

    // Text Mlem
    const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
    const originalText = text.innerText;
    
    text.innerText = randomSound;
    text.style.color = '#4ade80';
    
    setTimeout(() => {
        imageContainer.classList.remove('mlem');
        text.innerText = originalText;
        text.style.color = 'inherit';
    }, 1000);
});

console.log('Mlemeleon is hiding...');