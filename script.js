document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// const namaPengguna = prompt("Masukkan nama Anda:", "");
// if (namaPengguna && namaPengguna.trim() !== "") {
//   alert("Halo, " + namaPengguna + "!");
//   document.getElementById("pesan").textContent =
//     "Selamat datang, " + namaPengguna + ".";
// } else {
//   alert("Nama belum diisi.");
// }

// let angkaPertama = Number(prompt("Masukkan angka pertama"));
// let angkaKedua = Number(prompt("Masukkan angka kedua"));
// function operasiDasar(a, b) {
//   console.log("Penjumlahan:", a + b);
//   console.log("Pengurangan:", a - b);
//   console.log("Perkalian:", a * b);
//   console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
//   console.log("Modulus:", a % b);
// }
// operasiDasar(angkaPertama, angkaKedua);

// const inputNilai = prompt("Masukkan nilai (0–100):");
// const nilaiMahasiswa = Number(inputNilai);
// if (
//   inputNilai === null ||
//   inputNilai.trim() === "" ||
//   Number.isNaN(nilaiMahasiswa) ||
//   nilaiMahasiswa < 0 ||
//   nilaiMahasiswa > 100
// ) {
//   alert("Input nilai tidak valid.");
// } else if (nilaiMahasiswa >= 60) {
//   alert("Lulus");
// } else {
//   alert("Belum lulus");
// }

// const inputPilihan = prompt("Masukkan angka 1–5:");
// switch (inputPilihan) {
//   case "1":
//     alert("Bilangan satu");
//     break;
//   case "2":
//     alert("Bilangan dua");
//     break;
//   case "3":
//     alert("Bilangan tiga");
//     break;
//   case "4":
//     alert("Bilangan empat");
//     break;
//   case "5":
//     alert("Bilangan lima");
//     break;
//   default:
//     alert("Pilihan tidak tersedia");
// }

// function cekBilangan() {
//   const input = document.getElementById("bilangan").value;
//   const angka = Number(input);
//   const hasil = document.getElementById("hasilBilangan");
//   if (input.trim() === "" || !Number.isInteger(angka)) {
//     hasil.textContent = "Masukkan bilangan bulat yang valid.";
//   } else if (angka % 2 === 0) {
//     hasil.textContent = "Bilangan genap";
//   } else {
//     hasil.textContent = "Bilangan ganjil";
//   }
// }

// function ubahWarnaLatar(warna) {
//   document.body.style.backgroundColor = warna;
// }

// const daftarMenu = document.querySelectorAll(".menu");
// daftarMenu.forEach((item) => {
//   item.addEventListener("change", hitungTotal);
// });
// function hitungTotal() {
//   let total = 0;
//   daftarMenu.forEach((item) => {
//     if (item.checked) total += Number(item.value);
//   });
//   document.getElementById("total").textContent = total.toLocaleString("id-ID");
// }

// function hitungNilai() {
//   let nilaiTugas = document.getElementById("tugas").value;
//   let nilaiUTS = document.getElementById("uts").value;
//   let nilaiUAS = document.getElementById("uas").value;
//   if (nilaiTugas < 0 || nilaiTugas > 100 || nilaiTugas == "") {
//     alert("Hanya menerima nilai tugas dalam rentang 0 - 100");
//     return
//   } else if (nilaiUTS < 0 || nilaiUTS > 100 || nilaiUTS == "") {
//     alert("Hanya menerima nilai UTS dalam rentang 0 - 100");
//     return
//   } else if (nilaiUAS < 0 || nilaiUAS > 100 || nilaiUAS == "") {
//     alert("Hanya menerima nilai UAS dalam rentang 0 - 100");
//     return
//   }
//   function hitungNilaiAkhir(tugas, uts, uas) {
//     return tugas * 0.3 + uts * 0.3 + uas * 0.4;
//   }
//   function tentukanPredikat(nilai) {
//     if (nilai >= 85) return "A";
//     if (nilai >= 75) return "B";
//     if (nilai >= 60) return "C";
//     if (nilai >= 50) return "D";
//     return "E";
//   }
//   const akhir = hitungNilaiAkhir(nilaiTugas, nilaiUTS, nilaiUAS);
//   console.log("Nilai akhir:", akhir.toFixed(2));
//   console.log("Predikat:", tentukanPredikat(akhir));
//   console.log("Status:", akhir >= 60 ? "Lulus" : "Belum lulus");
//   document.getElementById("nilaiAkhir").innerText = akhir.toFixed(2);
//   document.getElementById("predikat").innerText = tentukanPredikat(akhir);
//   document.getElementById("status").innerText = akhir >= 60 ? "Lulus" : "Belum lulus";
// }

// Perulangan perkalian 7 dari 1 sampai 10
// let perkalian = 7;
// for (let i=1; i<=10;i++){
//     console.log(`Perkalian 1 x ${i} : ${(perkalian * i)}`);}


// cek angka genap
// function cek(){
//     let angka = Number(document.getElementById("angka").value);

//     function cekGenap(angka){
//         if (angka % 2 == 0){
//             alert("Bilangan Genap : True");
//         }else{
//             alert("Bilangan Genap : False")
//         }
//     }

//     if (angka == ""){
//         alert("Masukkan bilangan!")
//         return
//     }else {
//         cekGenap(angka);
//     }
// }

function cek(){
    const nama = document.getElementById("nama").value;
    const angka = Number(document.getElementById("angka").value);
    if (nama === ""){
        alert("Nama tidak boleh kosong")
        return;
    } else {
        if (angka < 0 || angka > 100){
            alert("Hanya bisa menerima angka dalam range 0 - 100");
            return;
        } else if (angka == "") {
            alert("Angka tidak boleh kosong")
        } else {
            alert("Nama : "+ nama + ", angka yang dipilih : " + angka);
        }
    }
}