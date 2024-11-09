function calculateFLAMES() {
    const name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, '');
    const name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, '');
    const flamesList = ['F', 'L', 'A', 'M', 'E', 'S'];

    if (name1 === "" || name2 === "") {
        alert("Please enter both names!");
        return;
    }

    let combinedName = name1 + name2;
    for (let char of name1) {
        if (name2.includes(char)) {
            combinedName = combinedName.replace(char, '');
        }
    }

    const remainingCount = combinedName.length;
    let resultIndex = remainingCount % flamesList.length;
    if (resultIndex === 0) resultIndex = flamesList.length;

    let resultLetter;

    flamesList.forEach((letter, i) => {
        setTimeout(() => {
            if (i !== resultIndex - 1) {
                document.getElementById(letter.toLowerCase()).classList.add('cross-out');
            } else {
                resultLetter = letter;
            }
        }, i * 800);
    });

    setTimeout(() => displayResult(resultLetter), flamesList.length * 800);
}

function displayResult(finalLetter) {
    const overlay = document.getElementById('overlay');
    const finalResult = document.getElementById('finalResult');
    const sound = document.getElementById('resultSound');

    const fullForms = {
        F: "Friendship",
        L: "Love",
        A: "Affection",
        M: "Marriage",
        E: "Enemy",
        S: "Siblings"
    };

    finalResult.innerText = ` ${finalLetter} - ${fullForms[finalLetter]}`;
    overlay.style.display = 'flex';
    sound.play();

    setTimeout(() => {
        overlay.style.display = 'none';
        document.querySelectorAll('.flames p').forEach(letter => letter.classList.remove('cross-out'));
    }, 5000);
}
