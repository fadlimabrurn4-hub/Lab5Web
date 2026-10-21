# Praktikum 5: JavaScript Dasar dan Manipulasi HTML - Lab5Web

Praktikum mata kuliah **Pemrograman Web** memahami dasar JavaScript, meliputi variabel, tipe data, operator, percabangan, perulangan, function, output (console, alert, prompt), manipulasi DOM, form, dan validasi input.

## Identitas Mahasiswa
Nama : Fadli Mabrur Nahari  
NIM : 312510294  
Kelas : I251A  
Mata Kuliah : Pemrograman Web


## 1. Langkah-Langkah Praktikum & Implementasi

### Langkah 1: Menampilkan Output
Membuat `index.html` yang terhubung ke `script.js`, lalu mengubah isi elemen `#pesan` menjadi "Hello World" dengan `textContent` dan mencetaknya ke Console dengan `console.log()`.

<img src="Folder_Foto/kode_1.png">  
<img src="Folder_Foto/kode_1_l1.png">  
<img src="Folder_Foto/hasil_1.png">  

### Langkah 2: Alert dan Prompt
Meminta nama lewat `prompt()`, lalu menampilkan sapaan dengan `alert()` dan mengubah teks halaman. Jika input kosong atau Cancel, program menampilkan "Nama belum diisi."

<img src="Folder_Foto/kode_2.png">  
<img src="Folder_Foto/hasil_2.png">  
<img src="Folder_Foto/hasil_2_l1.png">  
<img src="Folder_Foto/hasil_2_l2.png">  

### Langkah 3: Function dan Operasi Aritmetika
Membuat function `operasiDasar(a, b)` yang mencetak hasil penjumlahan, pengurangan, perkalian, pembagian, dan modulus ke Console.

<img src="Folder_Foto/kode_3.png">  
<img src="Folder_Foto/hasil_3.png">  

### Langkah 4: Seleksi Kondisi if-else
Meminta nilai lewat `prompt()`, mengonversinya ke `Number`, lalu menentukan "Lulus" (nilai ≥ 60), "Belum lulus", atau "Input nilai tidak valid".

<img src="Folder_Foto/kode_4.png">  
<img src="Folder_Foto/hasil_4.png">  
<img src="Folder_Foto/hasil_4_l1.png">  
<img src="Folder_Foto/hasil_4_l2.png">  
<img src="Folder_Foto/hasil_4_l3.png">  

### Langkah 5: Seleksi Kondisi switch
Meminta angka 1-5 lalu menampilkan nama bilangannya dengan `switch`. Nilai di luar 1-5 ditangani oleh `default`.

<img src="Folder_Foto/kode_5.png">  
<img src="Folder_Foto/hasil_5.png">  
<img src="Folder_Foto/hasil_5_l1.png">  
<img src="Folder_Foto/hasil_5_l2.png">  

### Langkah 6: Form Bilangan Genap atau Ganjil
Menambahkan input angka dan tombol "Periksa". Function `cekBilangan()` membaca nilai input lalu menampilkan "Bilangan genap", "Bilangan ganjil", atau pesan error bila input tidak valid.

<img src="Folder_Foto/kode_6.png">  
<img src="Folder_Foto/kode_6_l1.png">  
<img src="Folder_Foto/hasil_6.png">  
<img src="Folder_Foto/hasil_6_l1.png">  

### Langkah 7: Mengubah Warna Halaman
Membuat tiga tombol (hijau, putih, kuning) yang memanggil satu function `ubahWarnaLatar(warna)` untuk mengubah `backgroundColor` pada `body`.

<img src="Folder_Foto/kode_7.png">  
<img src="Folder_Foto/kode_7_l1.png">  
<img src=Folder_Foto/hasil_7.png"">  
<img src="Folder_Foto/hasil_7_l1.png">  
<img src="Folder_Foto/hasil_7_l2.png">  

### Langkah 8: DOM dan Checkbox Menu Makanan
Membuat daftar menu dengan checkbox. Event listener `change` memanggil `hitungTotal()` sehingga total harga berubah otomatis saat pilihan dicentang atau dilepas.

<img src="Folder_Foto/kode_8.png">  
<img src="Folder_Foto/kode_8_l1.png">  
<img src="Folder_Foto/hasil_8.png">  
<img src="Folder_Foto/hasil_8_l1.png">  
<img src="Folder_Foto/hasil_8_l2.png">  
<img src="Folder_Foto/hasil_8_l3.png">  

## 2. Mini Project: Kalkulator Nilai Mahasiswa

Membuat form input Nilai Tugas, UTS, dan UAS. Nilai akhir dihitung dengan bobot **30% tugas + 30% UTS + 40% UAS**, lalu predikat (A-E) dan status kelulusan (Lulus jika ≥ 60) ditentukan. Perhitungan dipisahkan dalam function `hitungNilaiAkhir()` dan `tentukanPredikat()`, sedangkan `hitungNilai()` mengurus validasi dan tampilan.

**Tahap 1:** form, validasi rentang 0-100, dan hasil di Console.

<img src="Folder_Foto/kode_9.png">  
<img src="Folder_Foto/kode_9_l1.png">  
<img src="Folder_Foto/hasil_9.png">  
<img src="Folder_Foto/hasil_9_l1.png">  
<img src="Folder_Foto/hasil_9_l2.png">  
<img src="Folder_Foto/hasil_9_l3.png">  

Pengujian di Console: nilai 89/85/88 menghasilkan 87.40 (A, Lulus) dan nilai 30/40/25 menghasilkan 31.00 (E, Belum lulus).

<img src="Folder_Foto/hasil_9_l4.png">  
<img src="Folder_Foto/hasil_9_l5.png">  

**Tahap 2:** validasi ditambah pengecekan input kosong, dan hasil (nilai akhir, predikat, status) ditampilkan pada halaman HTML.

<img src="Folder_Foto/kode_10.png">  
<img src="Folder_Foto/kode_10_l1.png">  

Skenario pengujian:

| Tugas | UTS | UAS | Nilai Akhir | Predikat | Status |
|-------|-----|-----|-------------|----------|--------|
| 89 | 87 | 99 | 92.40 | A | Lulus |
| 76 | 88 | 46 | 67.60 | C | Lulus |
| 40 | 77 | 50 | 55.10 | D | Belum lulus |

<img src="Folder_Foto/hasil_10.png">  
<img src="Folder_Foto/hasil_10_l1.png">  
<img src="Folder_Foto/hasil_10_l2.png">  

## 3. Eksperimen Mandiri

### Eksperimen 1: Latihan 3 dengan Input Prompt
Mengubah `operasiDasar()` agar menerima dua angka dari `prompt()` dan mengonversinya ke `Number`. Contoh input 30 dan 29 menghasilkan penjumlahan 59, pengurangan 1, perkalian 870, dan modulus 1.

<img src="Folder_Foto/kode_11.png">  
<img src="Folder_Foto/hasil_11.png">  
<img src="Folder_Foto/hasil_11_l1.png">  
<img src="Folder_Foto/hasil_11_l2.png">  

### Eksperimen 2: Tabel Perkalian 7
Menggunakan perulangan `for` dari 1 sampai 10 untuk mencetak hasil perkalian angka 7 ke Console.

<img src="Folder_Foto/kode_12.png">  
<img src="Folder_Foto/hasil_12.png">  

### Eksperimen 3: Function `cekGenap(angka)`
Membuat function `cekGenap(angka)` yang memeriksa genap atau tidaknya sebuah angka dan menampilkan hasil `True` atau `False`. Diuji dengan angka 3 (False) dan 6 (True).

<img src="Folder_Foto/kode_13.png">  
<img src="Folder_Foto/hasil_13.png">  
<img src="Folder_Foto/kode_14.png">  
<img src="Folder_Foto/hasil_14.png">  

### Eksperimen 4: Validasi Form Tidak Boleh Kosong
Menambahkan input angka dan tombol Submit yang memanggil `cek()`. Jika kolom kosong, muncul alert "Masukkan bilangan!". Jika terisi, `cekGenap()` dijalankan.

<img src="">  
<img src="">  
<img src="">  
<img src="">  
<img src="">  

### Eksperimen 5: Menambah Pilihan Menu dan Harga
Menambahkan tiga menu baru pada Latihan 8: Mie Rebus (Rp3.000), Ayam Geprek (Rp5.700), dan Spageti (Rp8.150). Total semua menu Rp24.850.

<img src="Folder_Foto/kode_16.png">  
<img src="Folder_Foto/kode_16_l1.png">  
<img src="Folder_Foto/hasil_16.png">  
<img src="Folder_Foto/hasil_16_l1.png">  
<img src="Folder_Foto/hasil_16_l2.png">  
<img src="Folder_Foto/hasil_16_l3.png">  
<img src="Folder_Foto/hasil_16_l4.png">  
<img src="Folder_Foto/hasil_16_l5.png">  
<img src="Folder_Foto/hasil_16_l6.png">  

### Eksperimen 6: Tombol Sembunyikan/Tampilkan Elemen
Membuat tombol yang memanggil `toggle()` untuk mengubah `style.display` pada kotak `#kotak` antara `block` dan `none`.

<img src="Folder_Foto/kode_17.png">  
<img src="Folder_Foto/hasil_17.png">  
<img src="Folder_Foto/kode_17_l1.png">  
<img src="Folder_Foto/hasil_17_l1.png">  

## 4. Pertanyaan dan Tugas

1. **Jelaskan perbedaan `console.log()`, `alert()`, `prompt()`, dan `textContent`/`innerHTML`.**
   * *Jawaban:*
     * `console.log()` mencetak pesan ke Console browser. Biasanya dipakai untuk debugging dan tidak terlihat oleh pengguna biasa.
     * `alert()` menampilkan kotak dialog berisi pesan dan menghentikan eksekusi sampai tombol OK ditekan.
     * `prompt()` menampilkan kotak dialog dengan kolom input. Hasilnya berupa string, atau `null` jika Cancel ditekan.
     * `textContent` mengubah isi elemen sebagai teks biasa, sedangkan `innerHTML` mengubah isi elemen dan menafsirkan teks yang berisi tag HTML sebagai elemen.

2. **Apa perbedaan `let` dan `const`? Berikan contoh.**
   * *Jawaban:* `let` untuk variabel yang nilainya boleh diubah, sedangkan `const` untuk variabel yang tidak boleh ditetapkan ulang setelah diberi nilai.
     ```js
     let umur = 20;
     umur = 21;            // boleh

     const nama = "Rani";
     nama = "Dina";        // error: Assignment to constant variable
     ```

3. **Apa perbedaan operator `==` dan `===`?**
   * *Jawaban:* `==` membandingkan nilai dengan konversi tipe otomatis, sedangkan `===` membandingkan nilai **dan** tipe data tanpa konversi. Karena itu `===` lebih aman dan lebih direkomendasikan.
     ```js
     console.log(5 == "5");   // true  (string dikonversi ke number)
     console.log(5 === "5");  // false (tipe berbeda)
     ```

4. **Jelaskan fungsi `if-else` dan `switch`. Kapan masing-masing dapat digunakan?**
   * *Jawaban:* Keduanya adalah percabangan untuk memilih blok kode yang dijalankan berdasarkan kondisi.
     * `if-else` menguji kondisi logis, termasuk rentang nilai dan kondisi gabungan (`&&`, `||`). Cocok untuk contoh seperti `nilai >= 60`.
     * `switch` membandingkan satu nilai dengan beberapa kemungkinan nilai tetap lewat `case`. Cocok untuk pilihan diskret seperti menu angka 1-5. `break` mencegah eksekusi berlanjut ke case berikutnya.

5. **Apa fungsi parameter dan `return` dalam function?**
   * *Jawaban:* Parameter menerima data masukan ke dalam function agar function bisa dipakai dengan nilai berbeda. `return` mengembalikan hasil proses ke pemanggilnya dan mengakhiri eksekusi function.
     ```js
     function hitungLuas(panjang, lebar) {   // panjang & lebar = parameter
       return panjang * lebar;               // mengembalikan hasil
     }
     console.log(hitungLuas(8, 4));          // 32
     ```

6. **Bagaimana JavaScript memilih elemen HTML menggunakan `document.getElementById()`?**
   * *Jawaban:* Method ini mencari elemen di dokumen yang atribut `id`-nya sama dengan string yang diberikan, lalu mengembalikan elemen tersebut (atau `null` jika tidak ada). Karena `id` bersifat unik, hanya satu elemen yang dikembalikan, dan elemen itu bisa diubah kontennya, nilainya, atau gayanya.
     ```js
     const elemen = document.getElementById("pesan");
     elemen.textContent = "Halo, JavaScript!";
     ```

7. **Buat script untuk memvalidasi form agar nama tidak kosong dan nilai berada pada rentang 0-100.**
   * *Jawaban:* Dibuat pada file `tugas7.html`. Function `validasiForm()` memeriksa nama kosong (`trim()`), nilai kosong atau bukan angka, dan nilai di luar 0-100, lalu hasilnya ditampilkan pada halaman.  

    <img src="Folder_Foto/kode_18.png">   
    <img src="Folder_Foto/kode_18_l1.png">    
    <img src="Folder_Foto/hasil_18.png">   
    <img src="Folder_Foto/hasil_18_l1.png">      
    <img src="Folder_Foto/hasil_18_l2.png">      
    <img src="Folder_Foto/hasil_18_l3.png">      
    <img src="Folder_Foto/hasil_18_l4.png">      
    <img src="Folder_Foto/hasil_18_l5.png">      
    <img src="Folder_Foto/hasil_18_l6.png">      
    <img src="Folder_Foto/hasil_18_l7.png">      
    <img src="Folder_Foto/hasil_18_l8.png">   
    <img src="Folder_Foto/hasil_18_l9.png">   
    
    
