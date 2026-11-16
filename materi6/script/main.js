function hitung() {
    var angka1 = document.getElementById("angka1").value;
    var angka2 = document.getElementById("angka2").value;
    var operasi = document.getElementById("operasi").value;
    var hasil = document.getElementById("hasil");
    hasil.className = "";

    if (angka1 === "" || angka2 === "") {
        hasil.className = "error";
        hasil.innerHTML = "Isi kedua angka terlebih dahulu.";
        return;
    }

    var a = parseFloat(angka1);
    var b = parseFloat(angka2);
    var nilai;
    var simbol;

    if (operasi === "jumlah") {
        nilai = a + b;
        simbol = "+";
    } else if (operasi === "kurang") {
        nilai = a - b;
        simbol = "-";
    } else if (operasi === "kali") {
        nilai = a * b;
        simbol = "x";
    } else if (operasi === "bagi") {
        if (b === 0) {
            hasil.className = "error";
            hasil.innerHTML = "Pembagian dengan nol tidak bisa dilakukan.";
            return;
        }
        nilai = a / b;
        simbol = "÷";
    }

    hasil.innerHTML = a + " " + simbol + " " + b + " = <b>" + nilai + "</b>";
}
