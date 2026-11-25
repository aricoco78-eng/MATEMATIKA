import { Question } from '../types';
import pizzaPecahanImg from '../assets/images/pizza_pecahan_1795402000893.jpg';
import gelasUkurSirupImg from '../assets/images/gelas_ukur_sirup_1795402001522.jpg';
import jerukApelRasioImg from '../assets/images/jeruk_apel_rasio_1795402002207.jpg';
import belanjaDesimalImg from '../assets/images/belanja_desimal_1795402002547.jpg';
import kalengCatRasioImg from '../assets/images/kaleng_cat_rasio_1795402002756.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN 1: PILIHAN GANDA (25 SOAL: ID 1 - 25)
  // =========================================================================

  // --- PECAHAN & DESIMAL: PERKALIAN PECAHAN (SOAL 1 - 5) ---
  {
    id: 1,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    imageUrl: pizzaPecahanImg,
    imageCaption: 'Pizza utuh dipotong menjadi 8 bagian sama besar (3 potong berada di piring putih).',
    text: 'Perhatikan gambar pizza di atas! Sebuah pizza utuh dipotong menjadi 8 bagian sama besar, dan di atas piring putih disajikan 3 potong (3/8 bagian). Jika Ibu menyajikan 4 piring dengan porsi yang sama seperti pada piring putih tersebut, berapa bagian pizza utuh seluruhnya yang disajikan Ibu?',
    options: [
      { id: 'A', text: '1 1/4 bagian' },
      { id: 'B', text: '1 1/2 bagian' },
      { id: 'C', text: '1 3/4 bagian' },
      { id: 'D', text: '2 1/8 bagian' },
    ],
    correctAnswer: 'B',
    explanation:
      'Setiap piring berisi 3/8 bagian pizza.\nUntuk 4 piring = 4 × 3/8 = 12/8 = 1 4/8 = 1 1/2 bagian pizza utuh.',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Mudah',
    text: 'Hasil dari operasi perkalian pecahan 3/4 × 20 adalah...',
    options: [
      { id: 'A', text: '12' },
      { id: 'B', text: '14' },
      { id: 'C', text: '15' },
      { id: 'D', text: '16' },
    ],
    correctAnswer: 'C',
    explanation:
      '3/4 × 20 = (3 × 20) ÷ 4 = 60 ÷ 4 = 15.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sedang',
    text: 'Pak Made memiliki kebun seluas 4/5 hektare. Sebanyak 3/4 bagian dari kebun tersebut ditanami pohon jeruk. Berapa hektare luas kebun yang ditanami pohon jeruk?',
    options: [
      { id: 'A', text: '2/5 hektare' },
      { id: 'B', text: '3/5 hektare' },
      { id: 'C', text: '7/9 hektare' },
      { id: 'D', text: '4/9 hektare' },
    ],
    correctAnswer: 'B',
    explanation:
      'Luas kebun jeruk = 3/4 × 4/5 hektare = (3 × 4) / (4 × 5) = 12/20 = 3/5 hektare.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sedang',
    text: 'Ibu membeli 2 1/2 kg tepung terigu. Sebanyak 2/5 bagian dari tepung terigu tersebut digunakan untuk membuat kue tradisional Bali. Berapa kilogram tepung terigu yang digunakan Ibu untuk membuat kue?',
    options: [
      { id: 'A', text: '1/2 kg' },
      { id: 'B', text: '3/4 kg' },
      { id: 'C', text: '1 kg' },
      { id: 'D', text: '1 1/4 kg' },
    ],
    correctAnswer: 'C',
    explanation:
      'Ubah pecahan campuran 2 1/2 menjadi pecahan biasa: 5/2.\nTepung yang digunakan = 2/5 × 5/2 = 10/10 = 1 kg.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Perkalian Pecahan',
    difficulty: 'Sukar',
    text: 'Sebuah bak penampungan berkapasitas penuh 120 liter. Mula-mula bak tersebut terisi 5/6 bagian. Kemudian, 3/5 bagian dari air yang ada di dalam bak digunakan untuk menyiram tanaman. Berapa liter sisa air di dalam bak sekarang?',
    options: [
      { id: 'A', text: '30 liter' },
      { id: 'B', text: '40 liter' },
      { id: 'C', text: '50 liter' },
      { id: 'D', text: '60 liter' },
    ],
    correctAnswer: 'B',
    explanation:
      'Air mula-mula = 5/6 × 120 liter = 100 liter.\nAir yang digunakan = 3/5 × 100 liter = 60 liter.\nSisa air dalam bak = 100 - 60 = 40 liter.',
  },

  // --- PECAHAN & DESIMAL: PEMBAGIAN PECAHAN (SOAL 6 - 9) ---
  {
    id: 6,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    imageUrl: gelasUkurSirupImg,
    imageCaption: 'Gelas ukur berisi tepat 500 ml (1/2 liter) sirup stroberi dan 4 botol kaca kecil yang sama besar.',
    text: 'Perhatikan gambar gelas ukur berisi sirup stroberi dan 4 botol kecil di sampingnya! Gelas ukur berisi tepat 1/2 liter (500 ml) sirup. Jika sirup tersebut dituang sama rata ke dalam 4 botol kaca kecil tersebut, berapa liter isi sirup pada setiap botol?',
    options: [
      { id: 'A', text: '1/4 liter' },
      { id: 'B', text: '1/6 liter' },
      { id: 'C', text: '1/8 liter' },
      { id: 'D', text: '1/10 liter' },
    ],
    correctAnswer: 'C',
    explanation:
      'Isi tiap botol = 1/2 liter ÷ 4 = 1/2 × 1/4 = 1/8 liter (setara 125 ml).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Mudah',
    text: 'Hasil dari operasi pembagian pecahan 6 ÷ 3/4 adalah...',
    options: [
      { id: 'A', text: '4 1/2' },
      { id: 'B', text: '6' },
      { id: 'C', text: '8' },
      { id: 'D', text: '9' },
    ],
    correctAnswer: 'C',
    explanation:
      '6 ÷ 3/4 = 6 × 4/3 = 24/3 = 8.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sedang',
    text: 'Dayu memiliki pita sepanjang 9/10 meter. Pita tersebut akan dipotong-potong sama panjang menjadi beberapa bagian dengan panjang masing-masing 3/20 meter. Berapa banyak potongan pita yang dihasilkan Dayu?',
    options: [
      { id: 'A', text: '4 potong' },
      { id: 'B', text: '5 potong' },
      { id: 'C', text: '6 potong' },
      { id: 'D', text: '8 potong' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak potongan = 9/10 ÷ 3/20 = 9/10 × 20/3 = (9 ÷ 3) × (20 ÷ 10) = 3 × 2 = 6 potong.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Pembagian Pecahan',
    difficulty: 'Sukar',
    text: 'Seorang pedagang memiliki 7 1/2 kg gula pasir yang akan dikemas ulang ke dalam kantong plastik kecil berukuran 3/4 kg per kantong. Jika setiap kantong dijual seharga Rp12.000,00, berapa total uang yang diperoleh pedagang jika semua kantong habis terjual?',
    options: [
      { id: 'A', text: 'Rp90.000,00' },
      { id: 'B', text: 'Rp108.000,00' },
      { id: 'C', text: 'Rp120.000,00' },
      { id: 'D', text: 'Rp144.000,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Banyak kantong = 7 1/2 ÷ 3/4 = 15/2 × 4/3 = 5 × 2 = 10 kantong.\nTotal uang = 10 × Rp12.000,00 = Rp120.000,00.',
  },

  // --- PECAHAN & DESIMAL: BILANGAN DESIMAL (SOAL 10 - 13) ---
  {
    id: 10,
    type: 'pg',
    topic: 'Bilangan Desimal',
    difficulty: 'Mudah',
    text: 'Bentuk bilangan desimal dari pecahan 3/8 adalah...',
    options: [
      { id: 'A', text: '0,25' },
      { id: 'B', text: '0,35' },
      { id: 'C', text: '0,375' },
      { id: 'D', text: '0,385' },
    ],
    correctAnswer: 'C',
    explanation:
      '3/8 = 3 ÷ 8 = 0,375 (atau kalikan pembilang dan penyebut dengan 125 sehingga 375/1000 = 0,375).',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Bilangan Desimal',
    difficulty: 'Mudah',
    text: 'Manakah urutan bilangan desimal dari yang TERKECIL hingga TERBESAR yang paling tepat?',
    options: [
      { id: 'A', text: '0,6 ; 0,5 ; 0,45 ; 0,375' },
      { id: 'B', text: '0,375 ; 0,45 ; 0,5 ; 0,6' },
      { id: 'C', text: '0,45 ; 0,5 ; 0,6 ; 0,375' },
      { id: 'D', text: '0,375 ; 0,5 ; 0,45 ; 0,6' },
    ],
    correctAnswer: 'B',
    explanation:
      'Samakan menjadi tiga angka di belakang koma:\n0,375 ; 0,450 ; 0,500 ; 0,600.\nUrutan dari terkecil: 0,375 ; 0,45 ; 0,5 ; 0,6.',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Bilangan Desimal',
    difficulty: 'Sedang',
    imageUrl: belanjaDesimalImg,
    imageCaption: 'Bahan belanjaan Ibu di atas meja: satu sisir pisang, stoples gula pasir, dan botol minyak goreng.',
    text: 'Perhatikan gambar bahan belanjaan Ibu di atas meja! Ibu membeli satu sisir pisang seberat 1,75 kg, stoples gula pasir seberat 0,85 kg, dan sebotol minyak goreng seberat 0,9 kg. Berapakah berat total seluruh belanjaan Ibu tersebut?',
    options: [
      { id: 'A', text: '3,35 kg' },
      { id: 'B', text: '3,45 kg' },
      { id: 'C', text: '3,5 kg' },
      { id: 'D', text: '3,6 kg' },
    ],
    correctAnswer: 'C',
    explanation:
      'Total berat = 1,75 + 0,85 + 0,90\n1,75 + 0,85 = 2,60 kg.\n2,60 + 0,90 = 3,50 kg = 3,5 kg.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Bilangan Desimal',
    difficulty: 'Sedang',
    text: 'Panjang seutas tali pramuka adalah 4,8 meter. Tali tersebut dipotong menjadi 6 bagian yang sama panjang untuk latihan membuat simpul. Berapa meter panjang setiap potongan tali?',
    options: [
      { id: 'A', text: '0,6 meter' },
      { id: 'B', text: '0,7 meter' },
      { id: 'C', text: '0,8 meter' },
      { id: 'D', text: '0,9 meter' },
    ],
    correctAnswer: 'C',
    explanation:
      'Panjang tiap potongan = 4,8 meter ÷ 6 = 0,8 meter.',
  },

  // --- RASIO: KONSEP RASIO (SOAL 14 - 17) ---
  {
    id: 14,
    type: 'pg',
    topic: 'Konsep Rasio',
    difficulty: 'Mudah',
    imageUrl: jerukApelRasioImg,
    imageCaption: 'Susunan buah segar di atas meja kayu: 4 buah jeruk di kiri dan 6 buah apel merah di kanan.',
    text: 'Perhatikan gambar susunan buah di atas meja kayu! Terdapat 4 buah jeruk di sebelah kiri dan 6 buah apel di sebelah kanan. Berapakah rasio paling sederhana dari banyak buah jeruk terhadap banyak buah apel?',
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '2 : 5' },
      { id: 'D', text: '4 : 5' },
    ],
    correctAnswer: 'A',
    explanation:
      'Banyak jeruk = 4, banyak apel = 6.\nRasio jeruk : apel = 4 : 6.\nSederhanakan dengan membagi kedua bilangan dengan 2: (4 ÷ 2) : (6 ÷ 2) = 2 : 3.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Konsep Rasio',
    difficulty: 'Mudah',
    text: 'Di dalam kelas VI terdapat 14 siswa laki-laki dan 16 siswa perempuan. Berapakah rasio banyak siswa perempuan terhadap jumlah SELURUH siswa di kelas tersebut dalam bentuk paling sederhana?',
    options: [
      { id: 'A', text: '7 : 15' },
      { id: 'B', text: '8 : 15' },
      { id: 'C', text: '8 : 7' },
      { id: 'D', text: '7 : 8' },
    ],
    correctAnswer: 'B',
    explanation:
      'Jumlah seluruh siswa = 14 + 16 = 30 siswa.\nRasio siswa perempuan : seluruh siswa = 16 : 30.\nBagi kedua bilangan dengan 2 sehingga diperoleh 8 : 15.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Konsep Rasio',
    difficulty: 'Sedang',
    text: 'Sebuah rak perpustakaan sekolah memuat 24 buku cerita dan 36 buku pelajaran. Jika ditulis dalam bentuk rasio paling sederhana, perbandingan banyak buku cerita terhadap banyak buku pelajaran adalah...',
    options: [
      { id: 'A', text: '1 : 2' },
      { id: 'B', text: '2 : 3' },
      { id: 'C', text: '3 : 4' },
      { id: 'D', text: '4 : 6' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rasio buku cerita : buku pelajaran = 24 : 36.\nFPB dari 24 dan 36 adalah 12.\n(24 ÷ 12) : (36 ÷ 12) = 2 : 3.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Konsep Rasio',
    difficulty: 'Sedang',
    text: 'Umur Kakak saat ini 15 tahun, sedangkan umur Adik adalah 9 tahun. Rasio paling sederhana antara umur Adik terhadap umur Kakak adalah...',
    options: [
      { id: 'A', text: '5 : 3' },
      { id: 'B', text: '3 : 5' },
      { id: 'C', text: '3 : 8' },
      { id: 'D', text: '2 : 5' },
    ],
    correctAnswer: 'B',
    explanation:
      'Perhatikan urutan: umur Adik terhadap umur Kakak = 9 : 15.\nSederhanakan dengan dibagi 3: (9 ÷ 3) : (15 ÷ 3) = 3 : 5.',
  },

  // --- RASIO: KESAMAAN RASIO (SOAL 18 - 21) ---
  {
    id: 18,
    type: 'pg',
    topic: 'Kesamaan Rasio',
    difficulty: 'Mudah',
    imageUrl: kalengCatRasioImg,
    imageCaption: 'Campuran cat dinding: 2 kaleng cat biru muda dan 3 kaleng cat putih (rasio 2 : 3).',
    text: 'Perhatikan gambar kaleng cat di atas! Untuk menghasilkan warna biru langit, Pak Putu mencampur 2 kaleng cat biru dan 3 kaleng cat putih (rasio 2 : 3). Jika Pak Putu menggunakan 8 kaleng cat biru untuk dinding yang lebih luas, berapa kaleng cat putih yang dibutuhkan agar warnanya tetap sama?',
    options: [
      { id: 'A', text: '9 kaleng' },
      { id: 'B', text: '10 kaleng' },
      { id: 'C', text: '12 kaleng' },
      { id: 'D', text: '15 kaleng' },
    ],
    correctAnswer: 'C',
    explanation:
      'Rasio cat biru : cat putih = 2 : 3.\nJika cat biru menjadi 8 kaleng (2 × 4 = 8), maka cat putih juga dikalikan 4: 3 × 4 = 12 kaleng.',
  },
  {
    id: 19,
    type: 'pg',
    topic: 'Kesamaan Rasio',
    difficulty: 'Sedang',
    text: 'Pasangan rasio di bawah ini yang memiliki kesamaan rasio (senilai) dengan 3 : 5 adalah...',
    options: [
      { id: 'A', text: '6 : 15' },
      { id: 'B', text: '9 : 15' },
      { id: 'C', text: '12 : 25' },
      { id: 'D', text: '15 : 20' },
    ],
    correctAnswer: 'B',
    explanation:
      'Kesamaan rasio diperoleh dengan mengalikan kedua suku dengan bilangan yang sama.\n3 : 5 dikalikan 3 menjadi (3 × 3) : (5 × 3) = 9 : 15.',
  },
  {
    id: 20,
    type: 'pg',
    topic: 'Kesamaan Rasio',
    difficulty: 'Sedang',
    text: 'Untuk membuat minuman cincau yang pas manisnya, rasio volume sirup gula terhadap air adalah 2 : 7. Jika air yang digunakan sebanyak 350 ml, berapa mililiter sirup gula yang harus dicampurkan agar rasanya tetap sama?',
    options: [
      { id: 'A', text: '70 ml' },
      { id: 'B', text: '100 ml' },
      { id: 'C', text: '120 ml' },
      { id: 'D', text: '140 ml' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rasio sirup : air = 2 : 7.\nAir = 350 ml (7 × 50 = 350).\nMaka sirup = 2 × 50 = 100 ml.',
  },
  {
    id: 21,
    type: 'pg',
    topic: 'Kesamaan Rasio',
    difficulty: 'Sukar',
    text: 'Sebuah mesin fotokopi mampu mencetak 45 lembar kertas dalam waktu 3 menit. Dengan kecepatan yang sama, berapa lembar kertas yang dapat dicetak oleh mesin tersebut selama 10 menit?',
    options: [
      { id: 'A', text: '120 lembar' },
      { id: 'B', text: '135 lembar' },
      { id: 'C', text: '150 lembar' },
      { id: 'D', text: '180 lembar' },
    ],
    correctAnswer: 'C',
    explanation:
      'Rasio lembar : menit = 45 : 3 = 15 : 1 (15 lembar per 1 menit).\nUntuk 10 menit = 15 × 10 = 150 lembar.',
  },

  // --- RASIO: PENERAPAN RASIO (SOAL 22 - 25) ---
  {
    id: 22,
    type: 'pg',
    topic: 'Penerapan Rasio',
    difficulty: 'Mudah',
    text: 'Harga 4 buah buku tulis di koperasi sekolah adalah Rp18.000,00. Berdasarkan rasio harga satuan, berapa rupiah yang harus dibayar Komang jika ia membeli 7 buah buku tulis yang sama?',
    options: [
      { id: 'A', text: 'Rp28.000,00' },
      { id: 'B', text: 'Rp30.500,00' },
      { id: 'C', text: 'Rp31.500,00' },
      { id: 'D', text: 'Rp36.000,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Harga satuan 1 buku = Rp18.000,00 ÷ 4 = Rp4.500,00.\nHarga 7 buku = 7 × Rp4.500,00 = Rp31.500,00.',
  },
  {
    id: 23,
    type: 'pg',
    topic: 'Penerapan Rasio',
    difficulty: 'Sedang',
    text: 'Rasio banyak kelereng milik Andi dan Budi adalah 3 : 5. Jika jumlah kelereng mereka berdua seluruhnya adalah 48 butir, berapakah banyak kelereng milik Budi?',
    options: [
      { id: 'A', text: '18 butir' },
      { id: 'B', text: '24 butir' },
      { id: 'C', text: '30 butir' },
      { id: 'D', text: '36 butir' },
    ],
    correctAnswer: 'C',
    explanation:
      'Jumlah bagian rasio = 3 + 5 = 8 bagian.\nNilai 1 bagian = 48 ÷ 8 = 6 butir.\nKelereng Budi = 5 × 6 = 30 butir.',
  },
  {
    id: 24,
    type: 'pg',
    topic: 'Penerapan Rasio',
    difficulty: 'Sedang',
    text: 'Untuk menempuh jarak 120 km, sebuah sepeda motor menghabiskan 3 liter bensin. Berapa liter bensin yang dibutuhkan sepeda motor tersebut untuk menempuh jarak 200 km dengan kondisi jalan yang sama?',
    options: [
      { id: 'A', text: '4 liter' },
      { id: 'B', text: '5 liter' },
      { id: 'C', text: '6 liter' },
      { id: 'D', text: '7 liter' },
    ],
    correctAnswer: 'B',
    explanation:
      'Rasio jarak terhadap bensin = 120 km : 3 liter = 40 km : 1 liter.\nUntuk menempuh 200 km dibutuhkan = 200 ÷ 40 = 5 liter bensin.',
  },
  {
    id: 25,
    type: 'pg',
    topic: 'Penerapan Rasio',
    difficulty: 'Sukar',
    text: 'Rasio uang tabungan Sari dan Dewi adalah 4 : 7. Jika selisih uang tabungan mereka berdua adalah Rp45.000,00, berapakah jumlah uang tabungan Sari dan Dewi seluruhnya?',
    options: [
      { id: 'A', text: 'Rp120.000,00' },
      { id: 'B', text: 'Rp150.000,00' },
      { id: 'C', text: 'Rp165.000,00' },
      { id: 'D', text: 'Rp180.000,00' },
    ],
    correctAnswer: 'C',
    explanation:
      'Selisih rasio = 7 - 4 = 3 bagian.\nNilai 1 bagian = Rp45.000,00 ÷ 3 = Rp15.000,00.\nJumlah bagian = 4 + 7 = 11 bagian.\nTotal uang tabungan = 11 × Rp15.000,00 = Rp165.000,00.',
  },

  // =========================================================================
  // BAGIAN 2: PILIHAN GANDA KOMPLEKS / PGK (2 SOAL: ID 26 - 27)
  // Setiap soal memiliki tepat 3 pilihan jawaban (A, B, C), >1 jawaban benar
  // =========================================================================
  {
    id: 26,
    type: 'pgk',
    topic: 'Perkalian, Pembagian Pecahan & Desimal',
    difficulty: 'Sedang',
    imageUrl: pizzaPecahanImg,
    imageCaption: 'Pizza dipotong 8 bagian sama besar: 5 potong di talenan kayu (5/8) dan 3 potong di piring putih (3/8).',
    text: 'Perhatikan gambar pizza yang dipotong menjadi 8 bagian sama besar di atas (5 potong di talenan kayu = 5/8 bagian, dan 3 potong di piring putih = 3/8 bagian). Manakah pernyataan-pernyataan berikut yang BERNILAI BENAR? (Pilih lebih dari satu jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Jika pizza di talenan kayu (5/8 bagian) dikalikan 2 untuk acara keluarga, jumlahnya setara dengan 1 1/4 pizza utuh.',
      },
      {
        id: 'B',
        text: 'Bentuk bilangan desimal dari bagian pizza di piring putih (3/8 bagian) adalah 0,375.',
      },
      {
        id: 'C',
        text: 'Jika pizza di talenan kayu (5/8 bagian) dibagi rata kepada 5 anak, setiap anak memperoleh 1/4 bagian pizza utuh.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '• Pernyataan A BENAR: 5/8 × 2 = 10/8 = 1 2/8 = 1 1/4 pizza utuh.\n• Pernyataan B BENAR: 3/8 = 3 ÷ 8 = 0,375.\n• Pernyataan C SALAH: 5/8 ÷ 5 = 5/8 × 1/5 = 1/8 bagian pizza utuh, bukan 1/4.',
  },
  {
    id: 27,
    type: 'pgk',
    topic: 'Kesamaan & Penerapan Rasio',
    difficulty: 'Sukar',
    imageUrl: jerukApelRasioImg,
    imageCaption: 'Susunan buah untuk parsel: 4 jeruk di sebelah kiri dan 6 apel di sebelah kanan.',
    text: 'Perhatikan gambar 4 jeruk dan 6 apel di atas meja! Ibu ingin membuat beberapa parsel buah dengan rasio banyak jeruk terhadap apel yang selalu sama seperti pada gambar. Manakah pernyataan berikut yang BENAR mengenai kesamaan dan penerapan rasio parsel tersebut? (Pilih lebih dari satu jawaban yang benar)',
    options: [
      {
        id: 'A',
        text: 'Rasio banyak jeruk terhadap apel pada gambar senilai dengan 6 : 9.',
      },
      {
        id: 'B',
        text: 'Jika dalam satu parsel besar terdapat 12 buah jeruk, maka jumlah buah apel yang harus dimasukkan adalah 18 buah.',
      },
      {
        id: 'C',
        text: 'Jika tersedia 15 buah apel, maka dibutuhkan 12 buah jeruk agar rasionya tetap sama.',
      },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Rasio dasar jeruk : apel = 4 : 6 = 2 : 3.\n• Pernyataan A BENAR: 2 : 3 dikalikan 3 menjadi 6 : 9.\n• Pernyataan B BENAR: 2 : 3 dikalikan 6 menjadi 12 : 18.\n• Pernyataan C SALAH: Untuk 15 apel (3 × 5 = 15), dibutuhkan 2 × 5 = 10 jeruk, bukan 12 jeruk.',
  },

  // =========================================================================
  // BAGIAN 3: PILIHAN GANDA KOMPLEKS KATEGORI (3 SOAL: ID 28 - 30)
  // Setiap soal memiliki 3 deskripsi pernyataan Benar / Salah
  // =========================================================================
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Bilangan Desimal & Pecahan',
    difficulty: 'Sedang',
    imageUrl: belanjaDesimalImg,
    imageCaption: 'Bahan belanjaan Ibu: pisang (2,4 kg), gula pasir (3/4 kg), dan minyak goreng (0,5 liter).',
    text: 'Perhatikan gambar bahan belanjaan Ibu di atas! Ibu membeli 2,4 kg pisang seharga Rp15.000,00 per kg, 3/4 kg gula pasir, dan 0,5 liter minyak goreng. Tentukan nilai kebenaran (Benar atau Salah) untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Berat gula pasir 3/4 kg sama nilainya dengan bilangan desimal 0,75 kg.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Total uang yang harus dibayar Ibu untuk membeli 2,4 kg pisang adalah Rp36.000,00.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika 0,5 liter minyak goreng dituangkan sama banyak ke dalam 2 botol kecil, tiap botol berisi 0,3 liter.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. 3/4 = 3 ÷ 4 = 0,75 kg (BENAR).\n2. Harga 2,4 kg pisang = 2,4 × Rp15.000,00 = Rp36.000,00 (BENAR).\n3. 0,5 liter ÷ 2 = 0,25 liter per botol, bukan 0,3 liter (SALAH).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Kesamaan & Penerapan Rasio',
    difficulty: 'Sukar',
    imageUrl: kalengCatRasioImg,
    imageCaption: '2 kaleng cat biru dan 3 kaleng cat putih (masing-masing kaleng berisi 0,5 liter).',
    text: 'Perhatikan gambar campuran cat milik Pak Made! Pada gambar terlihat 2 kaleng cat biru dan 3 kaleng cat putih, dengan isi setiap kaleng tepat 0,5 liter cat. Tentukan Benar atau Salah untuk setiap pernyataan berikut!',
    statements: [
      {
        id: 's1',
        text: 'Rasio volume cat biru terhadap volume seluruh cat campuran pada gambar adalah 2 : 5.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Total volume seluruh cat campuran pada gambar adalah 2,5 liter.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Jika Pak Made membuat 10 liter cat campuran dengan rasio yang sama, maka dibutuhkan 6 liter cat biru dan 4 liter cat putih.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Cat biru = 2 kaleng (1 liter), Total = 5 kaleng (2,5 liter). Rasio cat biru : total = 2 : 5 (BENAR).\n2. Total volume = 5 kaleng × 0,5 liter = 2,5 liter (BENAR).\n3. Untuk 10 liter cat campuran: cat biru = 2/5 × 10 = 4 liter dan cat putih = 3/5 × 10 = 6 liter. Pernyataan terbalik sehingga bernilai (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Penerapan Rasio',
    difficulty: 'Sukar',
    text: 'Toko Alat Tulis "Cerdas" menjual paket pensil dan penghapus. Harga 1 lusin (12 buah) pensil adalah Rp30.000,00, sedangkan rasio harga 1 buah pensil terhadap 1 buah penghapus adalah 5 : 3. Tentukan Benar atau Salah untuk setiap pernyataan di bawah ini!',
    statements: [
      {
        id: 's1',
        text: 'Harga satuan 1 buah pensil adalah Rp2.500,00.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Harga satuan 1 buah penghapus adalah Rp1.800,00.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Jika Andi membeli 4 pensil dan 2 penghapus, total uang yang harus dibayar adalah Rp13.000,00.',
        correctAnswer: true,
      },
    ],
    explanation:
      '1. Harga 1 pensil = Rp30.000,00 ÷ 12 = Rp2.500,00 (BENAR).\n2. Harga 1 penghapus = 3/5 × Rp2.500,00 = Rp1.500,00, bukan Rp1.800,00 (SALAH).\n3. Total 4 pensil + 2 penghapus = (4 × Rp2.500,00) + (2 × Rp1.500,00) = Rp10.000,00 + Rp3.000,00 = Rp13.000,00 (BENAR).',
  },
];
