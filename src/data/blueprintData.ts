import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas VI) Mata Pelajaran Matematika
 * Lingkup Materi: Pecahan dan Desimal (Perkalian Pecahan, Pembagian Pecahan, Bilangan Desimal)
 * serta Rasio (Konsep Rasio, Kesamaan Rasio, Penerapan Rasio)
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal (25 PG, 2 PGK, 3 PGK Kategori)
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan perkalian pecahan biasa dengan bilangan asli menggunakan konteks objek nyata.',
    indikatorSoal:
      'Disajikan gambar potongan pizza (3/8 bagian per piring), peserta didik dapat menghitung total bagian pizza utuh untuk 4 piring.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan hasil operasi perkalian pecahan biasa dengan bilangan asli.',
    indikatorSoal:
      'Disajikan operasi perkalian pecahan 3/4 × 20, peserta didik dapat menentukan hasil hitungnya dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah kontekstual yang melibatkan perkalian dua pecahan biasa.',
    indikatorSoal:
      'Disajikan cerita mengenai bagian kebun yang ditanami pohon jeruk dalam bentuk pecahan, peserta didik dapat menghitung luas lahan jeruk tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menghitung hasil perkalian pecahan campuran dengan pecahan biasa dalam kehidupan sehari-hari.',
    indikatorSoal:
      'Disajikan data persediaan tepung terigu dalam pecahan campuran dan bagian yang dipakai untuk kue, peserta didik dapat menghitung berat tepung yang terpakai.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis soal cerita bertahap yang melibatkan operasi perkalian pecahan pada kapasitas volume.',
    indikatorSoal:
      'Disajikan kapasitas bak air, bagian keterisian awal, dan bagian air yang digunakan, peserta didik dapat menentukan sisa volume air di dalam bak.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan masalah pembagian pecahan dengan bilangan asli menggunakan stimulus visual objek nyata.',
    indikatorSoal:
      'Disajikan gambar gelas ukur berisi 1/2 liter sirup dan 4 botol kecil, peserta didik dapat menentukan volume sirup tiap botol.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan hasil operasi pembagian bilangan asli oleh pecahan biasa.',
    indikatorSoal:
      'Disajikan operasi pembagian bilangan asli dengan pecahan 6 ÷ 3/4, peserta didik dapat menghitung hasilnya secara tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan pembagian dua pecahan biasa dalam memecahkan masalah panjang potongan benda.',
    indikatorSoal:
      'Disajikan panjang pita awal dan ukuran tiap potongan dalam bentuk pecahan, peserta didik dapat menentukan banyak potongan pita yang dihasilkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis permasalahan pembagian pecahan campuran dengan pecahan biasa dan mengaitkannya dengan nilai jual.',
    indikatorSoal:
      'Disajikan berat gula pasir dalam pecahan campuran, ukuran kemasan kantong, dan harga per kantong, peserta didik dapat menghitung total pendapatan penjualan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengubah bentuk pecahan biasa menjadi bilangan desimal.',
    indikatorSoal:
      'Disajikan pecahan biasa 3/8, peserta didik dapat menentukan bentuk bilangan desimalnya yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat membandingkan dan mengurutkan beberapa bilangan desimal dengan banyak angka di belakang koma berbeda.',
    indikatorSoal:
      'Disajikan empat pilihan urutan bilangan desimal, peserta didik dapat memilih urutan yang benar dari terkecil hingga terbesar.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat melakukan penjumlahan bilangan desimal dalam konteks belanja kebutuhan sehari-hari.',
    indikatorSoal:
      'Disajikan gambar dan data berat tiga bahan belanjaan dalam bentuk bilangan desimal, peserta didik dapat menghitung berat total belanjaan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan pembagian bilangan desimal dengan bilangan asli dalam konteks panjang benda.',
    indikatorSoal:
      'Disajikan panjang tali pramuka dalam bilangan desimal yang dipotong menjadi 6 bagian sama panjang, peserta didik dapat menentukan panjang tiap potongan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan dan menyederhanakan konsep rasio dua kelompok objek nyata.',
    indikatorSoal:
      'Disajikan gambar susunan 4 buah jeruk dan 6 buah apel, peserta didik dapat menentukan rasio paling sederhana jeruk terhadap apel.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menyatakan rasio bagian terhadap keseluruhan dalam bentuk paling sederhana.',
    indikatorSoal:
      'Disajikan jumlah siswa laki-laki dan perempuan di suatu kelas, peserta didik dapat menentukan rasio siswa perempuan terhadap seluruh siswa.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menyederhanakan rasio dua besaran menggunakan Faktor Persekutuan Terbesar (FPB).',
    indikatorSoal:
      'Disajikan jumlah buku cerita dan buku pelajaran di rak perpustakaan, peserta didik dapat menentukan bentuk rasio paling sederhana.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan rasio paling sederhana berdasarkan urutan perbandingan yang diminta.',
    indikatorSoal:
      'Disajikan usia Kakak dan Adik, peserta didik dapat menyederhanakan rasio umur Adik terhadap umur Kakak secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menggunakan konsep kesamaan rasio untuk menentukan besaran yang belum diketahui melalui gambar objek.',
    indikatorSoal:
      'Disajikan gambar campuran 2 kaleng cat biru dan 3 kaleng cat putih, peserta didik dapat menentukan banyak cat putih jika cat biru diperbanyak menjadi 8 kaleng.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi pasangan rasio yang memiliki kesamaan rasio (ekuivalen).',
    indikatorSoal:
      'Disajikan sebuah rasio acuan 3 : 5, peserta didik dapat memilih pasangan rasio yang senilai dari pilihan jawaban yang tersedia.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menyelesaikan permasalahan kesamaan rasio pada takaran resep minuman.',
    indikatorSoal:
      'Disajikan rasio sirup gula dan air serta volume air yang digunakan, peserta didik dapat menghitung volume sirup gula yang dibutuhkan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan kesamaan rasio laju kerja untuk memprediksi hasil pada rentang waktu lebih lama.',
    indikatorSoal:
      'Disajikan rasio jumlah lembar cetakan mesin fotokopi dan waktu tempuhnya, peserta didik dapat menentukan banyak cetakan dalam 10 menit.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menentukan rasio harga satuan dan menerapkannya untuk menghitung harga pembelian baru.',
    indikatorSoal:
      'Disajikan harga 4 buah buku tulis, peserta didik dapat menghitung harga yang harus dibayar untuk 7 buah buku tulis yang sama.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan konsep rasio bagian terhadap jumlah total untuk menentukan nilai salah satu komponen.',
    indikatorSoal:
      'Disajikan rasio kelereng dua anak dan jumlah total kelereng mereka, peserta didik dapat menghitung banyak kelereng salah satu anak.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menerapkan rasio jarak terhadap konsumsi bahan bakar dalam permasalahan transportasi.',
    indikatorSoal:
      'Disajikan jarak tempuh dan kebutuhan bensin sepeda motor, peserta didik dapat menghitung liter bensin untuk jarak tempuh baru.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis permasalahan rasio yang diketahui selisihnya untuk menentukan jumlah keseluruhan.',
    indikatorSoal:
      'Disajikan rasio uang tabungan dua orang beserta selisih tabungannya, peserta didik dapat menghitung jumlah total tabungan mereka berdua.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi beberapa pernyataan operasi perkalian, pembagian pecahan, dan konversi desimal dari stimulus gambar.',
    indikatorSoal:
      'Disajikan gambar potongan pizza dan 3 pernyataan terkait perkalian pecahan, konversi desimal, serta pembagian pecahan, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dan memilih pernyataan yang benar mengenai kesamaan dan penerapan rasio berdasarkan objek visual.',
    indikatorSoal:
      'Disajikan gambar 4 jeruk dan 6 apel serta 3 pernyataan proporsi parsel buah, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bilangan',
    tujuanPembelajaran:
      'Peserta didik dapat menilai kebenaran konversi pecahan ke desimal, perkalian desimal, dan pembagian desimal dalam konteks belanja.',
    indikatorSoal:
      'Disajikan gambar bahan belanjaan dapur dan 3 pernyataan terkait konversi desimal, total harga, serta pembagian volume desimal, peserta didik dapat menentukan Benar/Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi kebenaran pernyataan terkait rasio bagian terhadap total, volume campuran desimal, dan penskalaan rasio.',
    indikatorSoal:
      'Disajikan gambar campuran 2 kaleng cat biru dan 3 kaleng cat putih serta 3 pernyataan, peserta didik dapat menentukan Benar/Salah tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Rasio & Proporsi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penerapan rasio harga satuan untuk mengevaluasi kebenaran harga barang dan total belanja.',
    indikatorSoal:
      'Disajikan harga 1 lusin pensil dan rasio harga pensil terhadap penghapus beserta 3 pernyataan, peserta didik dapat menentukan Benar/Salah tiap pernyataan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu menerapkan konsep materi ${q.topic} dalam menyelesaikan permasalahan matematika.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('rasio') || t.includes('perbandingan')) {
    return 'Rasio & Proporsi';
  }
  if (t.includes('pecahan') || t.includes('desimal') || t.includes('bilangan')) {
    return 'Bilangan';
  }
  return 'Bilangan';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
