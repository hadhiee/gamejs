// Level 1 script file
// Kode spesifik untuk Level 1 bisa diletakkan di sini jika diperlukan
// Berikan nilai yang tepat pada variabel berikut
var userName; // Harus berisi nama pengguna
var age; // Harus berisi usia pengguna dalam angka
var isLoggedIn; // Harus berupa boolean yang menunjukkan apakah pengguna sedang login

// Solusi yang mungkin:
var userName = "Alice";
var age = 25;
var isLoggedIn = true;
function runCode() {
    var code = document.getElementById("code-editor").value;
    try {
        eval(code); // Menjalankan kode dari editor
        document.getElementById("output").innerText = "Code executed successfully!";
    } catch (error) {
        document.getElementById("output").innerText = "Error: " + error.message;
    }
}
