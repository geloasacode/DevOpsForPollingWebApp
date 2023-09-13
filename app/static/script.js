// script.js
const choiceBoxes = document.querySelectorAll('.choice-box');
const resultContainer = document.querySelector('.result-container');
const resultText = document.getElementById('result');

choiceBoxes.forEach((choiceBox) => {
    choiceBox.addEventListener('click', (event) => {
        const choice = choiceBox.dataset.choice;
        
        // Prevent selecting a choice multiple times
        if (choiceBox.classList.contains('selected')) {
            return;
        }

        // Mark the choice as selected
        choiceBox.classList.add('selected');
        
        // Display and animate the result
        resultText.textContent = 'Loading...';
        resultText.style.display = 'block';
        animateResult(resultText, () => {
            // Update percentages after loading
            choiceBoxes.forEach((box) => {
                const boxChoice = box.dataset.choice;
                const percentageText = (boxChoice === choice) ? '100%' : '0%';
                box.querySelector('.choice-percentage').textContent = percentageText;
            });

            // Update result text
            resultText.textContent = '';
        });
    });
});

function animateResult(element, callback) {
    let count = 0;
    const interval = setInterval(() => {
        if (count % 2 === 0) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
        count++;
        if (count > 5) {
            clearInterval(interval);
            element.style.display = 'block';
            if (typeof callback === 'function') {
                callback();
            }
        }
    }, 300);
}
