// Fungsi untuk memvalidasi form
function validateForm(event) {
    event.preventDefault(); // Mencegah halaman reload (refresh) saat submit

    let valid = true;

    // Mendapatkan nilai input dari form
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validasi Nama
    if (name.length <= 3) {
        document.getElementById("nameError").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    // Validasi Email menggunakan regex
    const emailPattern = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Validasi Password
    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // Jika validasi berhasil, tampilkan pesan sukses dengan delay
    if (valid) {
        setTimeout(function() {
            document.getElementById("successMessage").style.display = "inline";
        }, 500); // Menampilkan pesan setelah 500ms
    }

    // Mengembalikan nilai validasi
    return valid;
}
