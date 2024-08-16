function startGame() {
    document.querySelector('.main-menu').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    loadLevel(1);
}

function continueGame() {
    // Implementasikan logika untuk melanjutkan game berdasarkan penyimpanan data
}

function viewLeaderboard() {
    // Tampilkan papan peringkat (leaderboard)
}

function loadLevel(level) {
    const levelTitle = document.getElementById('level-title');
    const editor = document.getElementById('code-editor');
    
    switch (level) {
        case 1:
            levelTitle.textContent = "Level 1: Variabel dan Tipe Data";
            editor.value = "// Deklarasikan variabel dengan nilai yang tepat\nvar userName;\nvar age;\nvar isLoggedIn;";
            break;
        // Implementasikan level-level lainnya
    }
}

function runCode() {
    const code = document.getElementById('code-editor').value;
    const output = document.getElementById('output');
    try {
        eval(code);  // Eksekusi kode dari editor
        output.textContent = "Code executed successfully!";
    } catch (error) {
        output.textContent = "Error: " + error.message;
    }
}
