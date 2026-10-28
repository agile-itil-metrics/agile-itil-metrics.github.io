# Penilaian mandiri kematangan

Penilaian diri terkonsolidasi untuk tim. Ia memakai skala lima tingkat bersama (Memulai, Berkembang, Terstandar, Terkelola, Terorkestrasi) dalam dua pandangan: enam dimensi program metrik, dan area metrik yang dicakup Bagian 2 sampai 10. Ia memakan sekitar satu jam. Ia adalah alat percakapan dan bukan sertifikasi, dan tidak sama dengan skala kematangan proses di ITIL, ISO/IEC 33000, atau Capability Maturity Model. Hasil tetap bersama tim (lihat topik 11.4, Model kematangan untuk program metrik).

## Cara menjalankannya

1. **Kumpulkan tim selama satu jam** dengan fasilitator yang bukan manajer tim. Tunjukkan skala di bawah.
2. **Tandai secara pribadi.** Tiap orang menandai tingkat yang mereka kira ditempati tim, untuk tiap baris, sendiri-sendiri.
3. **Bandingkan dan bahas.** Perbedaan mengungkap pengalaman berbeda atas praktik yang sama. Minta contoh untuk tiap tingkat yang diklaim (“Keputusan mana kuartal lalu?”).
4. **Sepakati pandangan tim** dan tuliskan bukti di baliknya.
5. **Pilih satu atau dua langkah kecil berikutnya,** masing-masing dapat diselesaikan dalam satu kuartal, dengan pemilik dan tanggal. Taruh di register perbaikan (lihat topik 9.5, Metrik perbaikan berkelanjutan).
6. **Jaga hasil bersama tim.** Bagikan hanya rentang dan tema teragregasi di luar tim. Jangan pernah merata-ratakan baris menjadi satu skor, dan jangan pernah memeringkat tim.

Nilai ulang sekitar dua kali setahun dan setelah reorganisasi, perubahan perkakas, atau pelanggaran piagam metrik. Harapkan sebagian baris mundur, dan perlakukan itu sebagai informasi.

## Skala

| Tingkat | Nama | Seperti apa wujudnya |
| --- | --- | --- |
| 1 | **Memulai** | Tim mengenali praktik tetapi tak punya cara konsisten melakukannya. Pekerjaan ad hoc, bergantung pada individu, dan kebanyakan tak terdokumentasi. |
| 2 | **Berkembang** | Sebagian tim punya praktik yang berfungsi, tetapi berbeda dari tim ke tim. Perkakas, templat, dan kebiasaan awal ada tetapi tidak dibagikan atau diharapkan. |
| 3 | **Terstandar** | Pendekatan bersama yang ringan ditulis dan dipakai lintas tim. Peran jelas. Pendekatan itu adalah titik awal yang boleh disesuaikan tim dengan alasan yang dinyatakan. |
| 4 | **Terkelola** | Hasil diukur dan ditinjau. Celah menuntun pada pekerjaan perbaikan yang direncanakan dan diberi sumber daya. |
| 5 | **Terorkestrasi** | Praktik dikoordinasikan lintas tim, pemasok, dan pelanggan, dan terus disesuaikan seiring kondisi berubah. Perbaikan bersifat rutin dan datang dari semua orang. |

Lebih tinggi tidak selalu lebih baik. Pilih tingkat yang cocok dengan ukuran, risiko, dan kebutuhan Anda, dan tuliskan mengapa.

## Pandangan 1: program metrik

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Pertanyaan dan tujuan | Ukuran dikumpulkan karena data ada | Sebagian tim menyatakan pertanyaan yang mereka ajukan | Audiens dan pertanyaan ditulis; ukuran dipetakan padanya | Cakupan pertanyaan ditinjau; pertanyaan tak terjawab menggerakkan ukuran baru | Audiens, termasuk pelanggan dan pemasok, membentuk ukuran |
| Definisi dan kepemilikan | Definisi bervariasi menurut orang | Sebagian tertulis; pemilik informal | Katalog dengan definisi, sumber, pemilik, dan batas | Kelengkapan definisi dan tantangan dikelola | Definisi dimiliki bersama lintas tim dan pemasok |
| Data dan perkakas | Manual dan rapuh | Sebagian umpan otomatis | Pipeline teruji, penyimpanan bersama, data portabel | Keandalan, rekonsiliasi, dan kesiapan keluar dikelola | Pipeline terfederasi dengan kontrak bersama |
| Pemakaian dalam keputusan | Angka ditampilkan, jarang dipakai | Dipakai dalam sebagian tinjauan | Tinjauan reguler yang mencatat keputusan | Bukti keputusan dilacak dan ditindaklanjuti | Keputusan dikaitkan lintas tim dengan hasil |
| Kepercayaan dan rasa aman | Takut atau acuh | Jaminan lisan | Piagam tertulis; tampilan individu mati; survei rasa aman | Pelanggaran ditinjau secara terbuka; sinyal keterusterangan dikelola | Kepercayaan bersifat rutin; program dibentuk staf dan mitra |
| Tinjauan dan evolusi | Tidak ada | Pembersihan sesekali | Tinjauan berkala bersama tim; aturan pensiun | Langkah penilaian didanai dan selesai | Program membaik terus-menerus dari semua orang |

## Pandangan 2: area metrik

Untuk tiap area, tandai tingkat yang paling menggambarkan bagaimana tim Anda mengukur dan memakainya hari ini. Lewati area yang tidak berlaku. Pemicunya adalah contoh apa yang dapat dikatakan tim Tingkat 3.

| Area | Bagian asal | Tim Tingkat 3 dapat mengatakan |
| --- | --- | --- |
| Alur dan pengiriman berkelanjutan | Bagian 2 | Kami mengetahui lead time dan cycle time kami sebagai distribusi, kami membatasi pekerjaan dalam proses, dan kami membaca kecepatan pengiriman di samping stabilitas (lihat topik 2.8, Metrik DORA). |
| Service desk, insiden, dan permintaan | Bagian 3 | Kami mengukur waktu ke penyelesaian yang berguna bersama kontak kembali, dan insiden besar kami punya tinjauan standar (lihat topik 3.4, Metrik insiden besar). |
| Masalah, perubahan, dan rilis | Bagian 4 | Perubahan kami membawa jalur proporsional dengan risiko, dan kami melacak pengerjaan ulang dan biaya kesalahan yang diketahui (lihat topik 4.3, Metrik pemberdayaan perubahan). |
| Tingkat layanan, ketersediaan, dan keandalan | Bagian 5 | Tingkat layanan kami didefinisikan dari hasil pengguna, dengan anggaran kesalahan dipakai dalam keputusan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan). |
| Pelanggan dan pengalaman | Bagian 6 | Kami menanyakan pengguna tentang pengalaman mereka dengan cara yang tidak melelahkan mereka, dan kami bertindak atas jawabannya (lihat topik 6.2, Perjanjian tingkat pengalaman). |
| Aset, konfigurasi, dan keuangan | Bagian 7 | Kami tahu apa yang kami miliki dan jalankan, dan biaya per unit pemakaian layanan kami (lihat topik 7.5, Biaya layanan dan ekonomi per unit). |
| Keamanan, risiko, kepatuhan, dan pemasok | Bagian 8 | Bukti risiko dan kendali kami nyata, pemasok kami diukur menurut hasil, dan tak satu pun dimanipulasi untuk audit (lihat topik 8.2, Metrik risiko dan kendali). |
| Manusia, tim, dan perbaikan | Bagian 9 | Kami mendengar dari orang kami tentang kecepatan dan kesejahteraan, dan kami melacak pekerjaan perbaikan sampai hasil (lihat topik 9.1, Kesehatan tim dan pengalaman pengembang). |
| Metrik di era AI | Bagian 10 | Kami membandingkan pekerjaan berbantuan AI dengan garis dasar, mengambil sampel keluaran untuk kebermanfaatan, dan mendaftarkan pemakaian AI kami (lihat topik 10.1, AI dalam pengukuran manajemen layanan). |

## Mencatat hasilnya

```text
Tim: [name]   Tanggal: [date]   Fasilitator: [name]
Peserta: [roles]

Pandangan 1
| Dimensi | Pandangan tim | Bukti | Langkah berikutnya (pemilik, tanggal) |
| [row] | [1-5] | [example] | [step] |

Pandangan 2
| Area | Pandangan tim | Bukti | Langkah berikutnya |
| [row] | [1-5 or n/a] | [example] | [step] |

Perbedaan yang mengejutkan kami: [notes]
Untuk apa kami tidak akan pernah memakai ini: [ranking, funding, performance reviews]
Penilaian berikutnya: [date]
```

## Membaca profil

- **Cari baris yang membatasi.** Kepercayaan dan definisi sering membatasi yang lain. Perbaikan kecil di sana dapat membuka sisanya.
- **Bandingkan baris, bukan tim.** Pertanyaan yang berguna adalah di mana tim Anda lebih kuat atau lebih lemah, bukan bagaimana ia dibanding tim lain.
- **Tanyakan apa yang berubah.** Kenaikan setelah satu kuartal sebaiknya didukung keputusan, kebiasaan, atau hasil yang dapat Anda namai. Kenaikan tanpa bukti menyarankan penandaan terlalu optimistis.
- **Berhentilah pada cukup baik.** Tim boleh tetap pada Tingkat 3 di sebagian baris selama bertahun-tahun.
