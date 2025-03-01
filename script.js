function generateNickname() {
    const lengthInput = document.getElementById('lengthInput').value;
    const length = parseInt(lengthInput, 10);

    if (isNaN(length) || length < 6) {
        alert("Please enter a valid number with at least 6 characters.");
        return;
    }

    const vowels = "aeiou";
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let nickname = "";

    for (let i = 0; i < length; i++) {
        nickname += (i % 2 === 0) ? consonants.charAt(Math.floor(Math.random() * consonants.length)) : vowels.charAt(Math.floor(Math.random() * vowels.length));
    }

    nickname = nickname.charAt(0).toUpperCase() + nickname.slice(1);
    document.getElementById('nicknameDisplay').textContent = "Your new nickname: " + nickname;
}

function clearNickname() {
    document.getElementById('lengthInput').value = "";
    document.getElementById('nicknameDisplay').textContent = "";
}
