function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var address = document.getElementById("address").value;
    
    var errorMessage = "";

    if (name === "") {
        errorMessage += "Nama harus diisi!\n";
    }

    if (email === "") {
        errorMessage += "Email harus diisi!\n";
    }

    if (address === "") {
        errorMessage += "Alamat Lengkap harus diisi!\n";
    }

    if (errorMessage !== "") {
        alert(errorMessage);  // Menampilkan alert jika ada data kosong
        return false;
    } else {
        alert("Form Berhasil Dikirim");
        return true;
    }
}
