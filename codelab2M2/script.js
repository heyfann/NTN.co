function calculateSum() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    if (!isNaN(num1) && !isNaN(num2)) {
        var sum = num1 + num2;
        document.getElementById("result").textContent = "Hasil: " + sum;
    } else {
        alert("Harap masukkan kedua angka dengan benar");
    }
}

function resetForm() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").textContent = "";
}
