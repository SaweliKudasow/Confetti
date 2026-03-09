const button = document.querySelector('button')
const jsConfetti = new JSConfetti()

button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        confettiNumber: 800,
        confettiColors: [
            '#ff99c8', '#fcf6bd', '#d0f4de', '#a9def9', '#e4c1f9',
        ],
    })
})