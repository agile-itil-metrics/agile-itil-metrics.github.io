# Realisasi nilai dan hasil bisnis

**Menyampaikan perubahan tidak sama dengan organisasi mendapat manfaat darinya, jadi nyatakan manfaat yang diharapkan sebelum membangun, periksa setelah rilis bersama orang yang dimaksudkan untuk diuntungkan, dan jujurlah tentang seberapa banyak dari perbaikan apa pun yang dapat Anda atribusikan pada pekerjaan Anda.**

## Gambaran umum dan motivasi

Cara kerja agile mengutamakan perangkat lunak yang berfungsi dan menjaga pemangku kepentingan berkolaborasi sepanjang jalan, agar apa yang dikirim adalah apa yang dibutuhkan orang. Manajemen layanan TI (ITSM), sebagaimana dikodifikasi ITIL, membingkai kepedulian yang sama sebagai nilai: layanan bernilai ketika membantu pelanggan mencapai hasil yang mereka inginkan, dengan biaya dan risiko yang mereka terima. Kedua tradisi bertemu pada satu pertanyaan yang tidak nyaman. Setahun dari sekarang, apakah orang dan organisasi lebih baik karena apa yang dibangun dan dijalankan tim ini?

Menjawabnya lebih sulit daripada menghitung apa yang disampaikan. Fitur dikirim dan tak ada yang memakainya. Insiden turun karena sebab yang tak berkaitan dengan pekerjaan tim. Penghematan biaya muncul di slide, dan anggaran asalnya dibelanjakan di tempat lain. Topik ini tentang menutup jurang itu, dan terhubung langsung dengan fokus hasil yang diperkenalkan di awal buku (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur).

Empat gagasan mengorganisasi topik ini.

- **Manfaat.** Manfaat adalah perbaikan terukur yang dihargai pemangku kepentingan, seperti lebih sedikit waktu pada suatu tugas, lebih sedikit kesalahan, lebih banyak pelanggan terlayani, atau risiko lebih rendah. Fitur bukan manfaat. Ia sarana. [Manajemen realisasi manfaat](https://en.wikipedia.org/wiki/Benefits_realisation_management) adalah disiplin mengidentifikasi manfaat, menetapkan pemilik, dan memeriksa bahwa manfaat tiba.
- **Hipotesis nilai.** Sebelum membangun, tim menuliskan apa yang diharapkan berubah, bagi siapa, seberapa banyak, dan bagaimana ia akan tahu. Ini klaim yang dapat diuji, dan bisa salah. [Teori perubahan](https://en.wikipedia.org/wiki/Theory_of_change) atau [model logika](https://en.wikipedia.org/wiki/Logic_model) memaparkan rantai dari kegiatan ke keluaran ke hasil, yang membantu membuat hipotesis eksplisit.
- **Indikator pendahulu dan tertinggal.** [Indikator pendahulu](https://en.wikipedia.org/wiki/Leading_indicator) bergerak awal dan memprediksi hasil, seperti adopsi proses baru. [Indikator tertinggal](https://en.wikipedia.org/wiki/Lagging_indicator) mengonfirmasi hasil setelah kejadian, seperti biaya per transaksi yang berkurang. Pakai keduanya: indikator pendahulu memungkinkan Anda mengoreksi arah, dan indikator tertinggal memberi tahu apakah berhasil.
- **Atribusi.** Banyak hal berubah sekaligus. Untuk mengatakan bahwa pekerjaan Anda menyebabkan perbaikan, Anda butuh pembanding: garis dasar, kelompok pembanding, atau desain sebelum-dan-sesudah yang memperhitungkan perubahan lain. Tanpanya, klaim nilai adalah cerita. Posisi jujur sering “berasosiasi dengan” dan bukan “disebabkan oleh.”

Kerangka tujuan seperti [tujuan dan hasil kunci](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKR) dapat menghubungkan pekerjaan tim dengan hasil bisnis, dan topik awal tentang kerangka pengukuran membahasnya secara rinci (lihat topik 1.7, Kerangka pengukuran). Risiko setiap kerangka adalah yang dinamai [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): begitu angka manfaat menjadi target, orang menemukan cara menghasilkan angka tanpa manfaat (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Topik ini juga menjembatani ke uang. Topik bagian berikutnya tentang pengembalian investasi dan kasus bisnis mengambil pandangan keuangan secara mendalam (lihat topik 7.7, Pengembalian investasi dan kasus bisnis). Di sini fokusnya pada bukti hasil, yang menyuapi kasus itu.

## Prinsip utama

- **Tuliskan manfaat yang diharapkan sebelum Anda membangun.** Klaim yang tak dapat diperiksa kemudian tak dapat dipelajari.
- **Namai pemilik untuk setiap manfaat.** Pemilik adalah pemangku kepentingan yang akan melihat perubahan, bukan tim pengiriman.
- **Ukur pada pengguna, setelah rilis.** Pengiriman adalah awal pemeriksaan, bukan akhir.
- **Pakai indikator pendahulu untuk mengarahkan dan indikator tertinggal untuk mengonfirmasi.**
- **Jujurlah tentang atribusi.** Katakan apa lagi yang berubah, dan hindari klaim yang tak dapat didukung bukti.
- **Hitung manfaat yang tidak tiba.** Belajar dari hipotesis yang gagal adalah manfaat bekerja dengan cara ini.
- **Terus berkolaborasi.** Pemangku kepentingan dan tim meninjau bukti bersama, secara teratur.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat realisasi manfaat | Porsi manfaat yang diharapkan yang teramati pada tanggal tinjauan yang disepakati | manfaat dengan hasil terukur pada atau di atas ambang yang disepakati / manfaat yang diharapkan dengan tanggal tinjauan pada periode itu | persen | Register manfaat dengan pemilik, garis dasar, dan tanggal tinjauan | Perbaikan berkelanjutan; tata kelola sistem nilai layanan | Tinjauan hasil bersama pemangku kepentingan | Kuartalan |
| Waktu menuju nilai pertama | Waktu dari awal pekerjaan sampai manfaat terukur pertama bagi pengguna | hari dari pekerjaan pertama dimulai sampai tanggal pertama indikator manfaat bergerak sesuai harapan | hari | Pelacak kerja dan indikator manfaat | Desain layanan; manajemen rilis dan deployment | Pengiriman nilai berkelanjutan | Per inisiatif |
| Tingkat pemeriksaan hipotesis | Porsi perubahan yang dirilis yang hipotesis nilainya yang dinyatakan diperiksa setelah rilis | perubahan dengan pemeriksaan pasca-rilis tercatat / perubahan yang dirilis yang membawa hipotesis | persen | Log hipotesis yang tertaut ke catatan rilis | Perbaikan berkelanjutan; pemberdayaan perubahan | Belajar dari pekerjaan yang dirilis | Bulanan |
| Porsi mutu bukti | Porsi manfaat yang diklaim yang punya garis dasar dan metode pembandingan yang dinyatakan | klaim manfaat dengan garis dasar dan metode / klaim manfaat yang dilaporkan | persen | Tinjauan register manfaat | Pengukuran dan pelaporan | Pelaporan hasil yang jujur | Kuartalan |
| Pergerakan indikator hasil | Perubahan indikator hasil yang dipilih dibandingkan dengan garis dasarnya dan dengan pembanding bila tersedia | (indikator sesudah dikurangi sebelum) dengan perubahan kelompok pembanding dilaporkan di sampingnya | satuan indikator | Analitik produk, data layanan, keuangan | Manajemen tingkat layanan; perbaikan berkelanjutan | Kemajuan hasil kunci | Bulanan |
| Jam dampak bisnis | Jam ketika proses bisnis terdegradasi atau berhenti karena masalah layanan | jam proses terdegradasi atau berhenti yang diatribusikan pemilik proses pada sebab layanan TI | jam | Catatan insiden digabung dengan konfirmasi pemilik proses | Manajemen insiden; manajemen ketersediaan | Tinjauan dampak bisnis | Bulanan |
| Porsi kapasitas terkait hasil | Porsi kapasitas tim yang dihabiskan pada pekerjaan yang terkait hasil yang dinyatakan | kapasitas pada item yang terkait hasil tercatat / total kapasitas | persen | Pelacak kerja dengan kolom hasil | Sistem nilai layanan; tata kelola portofolio | Pekerjaan selaras dengan tujuan produk | Kuartalan |

Definisikan tanggal tinjauan dan ambang untuk setiap manfaat saat dicatat, bukan sesudahnya. Waktu menuju nilai pertama dimulai ketika pekerjaan dimulai dan berhenti ketika indikator pertama kali bergerak ke arah yang diharapkan sebanyak jumlah yang dinyatakan, yang mungkin jauh setelah rilis. Atribusi jam dampak bisnis disepakati dengan pemilik proses, dan perselisihan dicatat.

## Rekomendasi

### Sebelum membangun: buat klaim dapat diperiksa

**1. Tulis hipotesis nilai untuk setiap perubahan signifikan.** Pakai bentuk polos: “Kami yakin bahwa [perubahan] akan membantu [siapa] untuk [melakukan apa] sehingga [perbaikan terukur]. Kami akan tahu dari [indikator] bergerak dari [garis dasar] ke [harapan], ditinjau pada [tanggal].” Jaga cukup singkat untuk muat pada kartu di papan. Tim yang tak dapat mengisi kekosongan sering belum memahami masalahnya.

**2. Catat garis dasar.** Tanpa sebelum, tak ada sesudah. Tangkap nilai indikator saat ini, bagaimana diukur, dan seberapa banyak bervariasi. Jika indikator bising, satu angka menyesatkan, jadi catat rentang selama beberapa pekan (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**3. Pilih indikator pendahulu dan tertinggal.** Untuk permintaan swalayan baru, indikator pendahulu adalah berapa banyak pengguna yang memenuhi syarat menyelesaikannya, dan indikator tertinggal adalah penurunan jam penanganan manual (lihat topik 6.3, Metrik adopsi layanan dan katalog). Sepakati indikator mana diperiksa kapan. Indikator pendahulu memungkinkan koreksi di tengah jalan tanpa menunggu kuartal berakhir.

**4. Namai pemilik manfaat di luar tim pengiriman.** Pemilik adalah pemangku kepentingan yang akan melihat perbaikan di areanya dan yang dapat menilainya. Tim pengiriman mendukung pengukuran tetapi tidak menilai pekerjaan rumahnya sendiri. Ini kolaborasi berkelanjutan dalam praktik: orang yang menginginkan hasil tetap terlibat sampai dikonfirmasi.

### Setelah rilis: periksa, dengan jujur

**5. Tinjau hipotesis pada tanggal yang disepakati.** Adakan tinjauan singkat bersama pemilik dan tim. Lihat indikator, garis dasar, dan pembanding. Catat hasil di register: terpenuhi, sebagian terpenuhi, tidak terpenuhi, atau tidak dapat dikatakan. “Tidak dapat dikatakan” adalah hasil yang sah dan dorongan untuk memperbaiki pengukuran.

**6. Pakai pembanding di mana Anda bisa.** Pembanding terkuat adalah eksperimen terkendali. [Uji A/B](https://en.wikipedia.org/wiki/A/B_testing) membandingkan dua versi dengan pengguna yang ditetapkan acak, dan bekerja baik untuk layanan digital dengan cukup lalu lintas. Di mana pengacakan tidak mungkin, peluncuran bertahap memungkinkan Anda membandingkan kelompok yang telah dan belum menerima perubahan. Pendekatan [selisih-dalam-selisih](https://en.wikipedia.org/wiki/Difference_in_differences) membandingkan perubahan pada kelompok yang diberi perlakuan dengan perubahan pada kelompok yang tidak selama periode yang sama, yang menyingkirkan tren bersama. Pakai desain paling sederhana yang cocok.

**7. Cari pengacau.** Faktor [pengacau (confounding)](https://en.wikipedia.org/wiki/Confounding) adalah sesuatu yang lain yang berubah dan dapat menjelaskan hasil: pola musiman, kebijakan baru, campuran permintaan berbeda. Daftar yang masuk akal sebelum Anda mengklaim efek. Jika Anda tak dapat menyingkirkannya, katakan apa yang didukung bukti dan tidak lebih.

**8. Laporkan hasil negatif dan nol.** Ketika perubahan tidak membantu, katakan dan catat apa yang dipelajari. [Bias penyintas](https://en.wikipedia.org/wiki/Survivorship_bias), kebiasaan melihat hanya keberhasilan, membuat program tampak lebih baik dari sebenarnya. Register yang hanya berisi kemenangan tidak dijaga dengan jujur.

### Jaga program tetap jujur

**9. Pisahkan mutu bukti dari manfaat.** Lacak porsi klaim yang punya garis dasar dan metode yang dinyatakan. Klaim besar dengan bukti lemah sebaiknya terbaca demikian. Register yang sehat menunjukkan klaim sederhana dengan bukti kuat, dan beberapa entri “tidak dapat dikatakan” yang jujur.

**10. Kaitkan kapasitas dengan hasil, secara longgar.** Tanyakan berapa porsi pekerjaan tim yang terikat hasil yang dinyatakan, dan lihat sisanya. Sebagian pekerjaan, seperti perbaikan keamanan atau menjaga lampu tetap menyala, tak punya manfaat baru, dan tidak apa-apa jika dinamai. Tujuannya memperhatikan hanyutan, bukan memaksa setiap tugas ke dalam cerita manfaat.

**11. Hubungkan dengan kerangka tujuan yang Anda pakai.** Jika Anda memakai OKR, jadikan hasil kunci sebagai indikator hasil dan tinjau bersama pemangku kepentingan. Jaga hasil kunci tentang hasil, bukan tugas, dan sisakan ruang untuk tujuan aspirasional yang mungkin tak sepenuhnya terpenuhi. Jangan menjadikan hasil kunci target individu (lihat topik 1.7, Kerangka pengukuran).

**12. Tinjau portofolio selain proyek.** Sekali per kuartal, lihat lintas inisiatif mana manfaat yang tiba, mana yang tidak, dan apa kata polanya tentang cara tim memperkirakan dan memilih pekerjaan. Pakai untuk memperbaiki cara hipotesis ditulis, bukan untuk memeringkat tim.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat realisasi manfaat | Menetapkan ambang rendah; menggeser tanggal tinjauan; mendefinisikan ulang manfaat setelah kejadian | Ambang dan tanggal tetap saat persetujuan; porsi mutu bukti; pemilik di luar tim pengiriman |
| Waktu menuju nilai pertama | Memilih indikator awal yang bergerak karena alasan yang salah; memulai jam terlambat | Indikator dan jam didefinisikan di register; konfirmasi dengan pemilik manfaat |
| Tingkat pemeriksaan hipotesis | Menulis hipotesis samar yang selalu lulus; memeriksa hanya perubahan yang berhasil | Ambil sampel hipotesis untuk kemampuan diuji; sertakan hasil nol dan gagal dalam tinjauan |
| Porsi mutu bukti | Mengisi garis dasar belakangan; menggambarkan pembandingan apa pun sebagai metode | Garis dasar bertanggal sebelum perubahan; tinjauan oleh seseorang di luar tim |
| Pergerakan indikator hasil | Memilih periode atau kelompok yang menguntungkan; mengabaikan pengacau | Periode dan kelompok didaftar di muka; daftar pengacau yang dipertimbangkan |
| Jam dampak bisnis | Pemilik proses menggelembungkan atau mengempiskan atribusi; insiden diklasifikasi ulang untuk menghindari atribusi | Aturan atribusi ditulis dan dicatat; bandingkan dengan catatan insiden dan ketersediaan |
| Porsi kapasitas terkait hasil | Memberi tag semua pekerjaan dengan hasil generik; mengarang hasil untuk pekerjaan rutin | Daftar hasil ditinjau bersama pemangku kepentingan; ambil sampel item untuk mutu tautan |

Pembacaan yang sehat adalah register tempat sebagian manfaat terpenuhi, sebagian tidak, beberapa tidak jelas, dan setiap entri punya garis dasar, pemilik, dan metode yang dinyatakan. Register keberhasilan seragam sebaiknya disikapi dengan kecurigaan.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Register manfaat formal | Akuntabilitas, pembelajaran lintas inisiatif | Birokrasi bila diterapkan pada setiap perubahan kecil |
| Hipotesis ringan pada tiap kartu | Murah, membangun kebiasaan | Mudah ditulis samar |
| Eksperimen terkendali | Bukti kuat tentang sebab | Butuh lalu lintas, waktu, dan desain yang cocok dengan layanan |
| Hanya sebelum-dan-sesudah | Sederhana, cepat | Dikacaukan oleh perubahan lain |
| Pertimbangan pemangku kepentingan | Menangkap nilai yang terlewat metrik | Rentan terhadap optimisme dan politik |
| Indikator pendahulu | Koreksi arah awal | Mungkin tidak memprediksi hasil sebenarnya |
| Indikator tertinggal | Mengonfirmasi hasil nyata | Tiba terlambat; banyak sebab |

Jawaban prosanya adalah mencocokkan bobot bukti dengan ukuran dan risiko perubahan. Pakai hipotesis ringan dan sebelum-dan-sesudah sederhana untuk perubahan kecil, dan eksperimen atau peluncuran bertahap untuk yang besar. Selalu catat apa yang Anda harapkan, apa yang terjadi, dan seberapa yakin Anda.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa yang kita kirim kuartal terakhir, dan apa yang berubah bagi orang yang dimaksudkan untuk dibantunya?**
Daftar perubahan utama dan, untuk masing-masing, namai orang yang akan memperhatikan perbedaan. Tanyakan apa yang akan mereka katakan. Fasilitator sebaiknya mencatat perubahan yang tak seorang pun dapat menjawab, karena itu kandidat untuk pemeriksaan pasca-rilis. Sepakati satu perubahan untuk ditinjau bersama pemiliknya dalam sebulan.

**2. Untuk perubahan signifikan berikutnya, apa hipotesis nilainya dan bagaimana kita akan tahu?**
Isi bentuk hipotesis bersama. Tantang kata samar dan garis dasar yang hilang. Tanyakan hasil apa yang akan membuat tim mengubah rencananya. Jika kelompok tak dapat menyepakati ukuran, itu tugas penemuan sebelum membangun.

**3. Siapa yang memiliki manfaat, dan apakah mereka ada di ruangan?**
Periksa bahwa setiap manfaat punya pemilik di luar tim pengiriman. Tanyakan seberapa sering pemilik melihat bukti. Di mana pemiliknya adalah tim sendiri, bahas siapa lagi yang sebaiknya berbagi pertimbangan. Percakapan mendukung kolaborasi berkelanjutan antarpemangku kepentingan.

**4. Apa lagi yang berubah ketika angka membaik?**
Ambil perbaikan terklaim terbaru dan daftar perubahan lain pada periode yang sama: kebijakan, musiman, staf, rilis tim lain. Tanyakan mana yang dapat menjelaskan hasil. Putuskan apakah menggambarkan perbaikan sebagai disebabkan perubahan, berasosiasi dengannya, atau tidak jelas.

**5. Hipotesis kita yang lalu mana yang ternyata salah, dan apa yang kita lakukan tentangnya?**
Minta cerita tentang harapan yang gagal. Jika tak ada yang cepat muncul, tim mungkin tidak memeriksa, atau tidak membicarakannya. Bahas cara membuat pelaporan hasil nol aman dan berguna.

**6. Berapa porsi kapasitas kita yang terikat hasil, dan apakah itu terasa tepat?**
Tinjau sebulan pekerjaan selesai dan beri tag tiap item dengan hasil atau “menjaga layanan tetap berjalan.” Tanyakan apakah pembagiannya cocok dengan yang dikira pimpinan. Bahas pekerjaan tanpa hasil dan apakah sebaiknya berlanjut.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki hipotesis dan rencana pengukuran, dan sebaiknya menyampaikan perubahan dalam langkah kecil agar bukti tiba awal. Mereka sebaiknya membangun indikator ke dalam perubahan, misalnya dengan mencatat peristiwa yang dibutuhkan, dan meminta pemilik manfaat mengonfirmasi apa yang mereka lihat. Tim sebaiknya menyambut hipotesis yang gagal sebagai informasi, karena belajar awal menghemat biaya membangun lebih banyak hal yang salah.

### Tim layanan dan operasi

Tim operasi melihat efek nyata perubahan pada insiden, permintaan, dan kapasitas. Mereka memegang banyak data untuk indikator tertinggal, seperti jam penanganan manual dan kontak ulang, dan sebaiknya membantu memeriksa hipotesis selain menyerap perubahan. Mereka sebaiknya bersuara ketika manfaat yang diklaim di atas kertas tidak cocok dengan apa yang dilihat service desk.

### Kepemimpinan dan tata kelola

Pemimpin memilih apakah manfaat adalah alat pembelajaran atau ajang penjualan. Mereka sebaiknya meminta garis dasar dan metode, menyambut hasil “tidak terpenuhi” yang jujur, dan menghindari menahan tim pada angka manfaat yang ditetapkan sebelum faktanya diketahui. Tata kelola sebaiknya meninjau register sebagai portofolio, mendanai pengukuran, dan bersedia menghentikan pekerjaan yang hipotesisnya gagal.

### Pelanggan dan pengguna

Pengguna tahu apakah perubahan membantu, dan mereka hakim terbaik bagi sebagian besar manfaat. Mereka sebaiknya ditanya, ditunjukkan hasilnya, dan diberi tahu ketika perubahan tidak menyampaikan apa yang diharapkan. Komentar mereka adalah bukti tersendiri. Manfaat yang ditunjukkan angka dan tidak dirasakan pengguna pantas dilihat lebih dekat.

## Dalam praktik: contoh ITIL agile

Kelompok TI sebuah perusahaan asuransi kesehatan regional membangun dan menjalankan portal klaim untuk penyedia layanan. Angka di bawah bersifat ilustratif.

Kelompok berencana menambah pemeriksaan kelayakan otomatis pada pengajuan klaim. Hipotesis, ditulis bersama manajer operasi klaim, adalah: “Kami yakin pemeriksaan kelayakan otomatis akan membantu staf penagihan penyedia mengajukan klaim yang benar pada percobaan pertama, sehingga klaim yang dikembalikan untuk koreksi turun dari 18 persen menjadi 12 persen dalam tiga bulan. Kami akan tahu dari tingkat klaim dikembalikan, ditinjau pada 1 Maret.” Garis dasarnya adalah rata-rata 12 pekan terakhir, 18 persen dengan rentang mingguan 15 sampai 21 persen. Indikator pendahulunya adalah pemakaian pemeriksaan pada bulan pertama. Manajer operasi klaim adalah pemilik manfaat.

Tim merilis dalam langkah kecil, dengan pemeriksaan tersedia pertama kali untuk satu wilayah. Setelah tiga pekan, pemakaian pemeriksaan adalah 64 persen di wilayah itu. Pada tanggal tinjauan, klaim dikembalikan turun menjadi 13 persen di wilayah dengan pemeriksaan dan menjadi 17 persen di wilayah tanpanya. Manajer klaim menunjukkan bahwa perubahan kebijakan pada satu kode penagihan juga berlaku pada periode itu. Tim mendaftarnya sebagai pengacau dan menyingkirkan klaim dengan kode itu dari kedua kelompok, yang menyisakan 14 persen terhadap 17,5. Realisasi manfaat dicatat sebagai “sebagian terpenuhi”: lebih baik daripada garis dasar dengan selisih jelas, kurang dari target 12 persen. Tim menulis dengan jujur di register bahwa bukti berasal dari peluncuran bertahap selama satu kuartal, dan bahwa efeknya mungkin berbeda untuk penyedia lain.

Mereka lalu meluncurkan pemeriksaan ke semua wilayah, dengan rencana memeriksa lagi dalam tiga bulan, dan menambah tugas untuk memperbaiki pesan galat, karena komentar dari penyedia mengatakan pesannya tidak jelas. Direktur keuangan meminta satu angka untuk dewan. Kepala TI menawarkan rentang dan metode, dan menolak menyatakan angka dengan presisi lebih dari yang diizinkan bukti. Keputusan dicatat, bersama tanggal tinjauan berikutnya.

## Sudut pandang sektor

**Startup.** Manfaat dekat dengan pendapatan dan retensi, dan kecepatan belajar penting. Tulis hipotesis satu baris pada kartu, periksa dengan cepat, dan hindari register berat. Pakai pembandingan sederhana, dan terima bahwa sampel kecil membatasi apa yang dapat Anda klaim.

**Bisnis kecil.** Pemilik adalah pemilik manfaat, dan efeknya terlihat. Simpan daftar pendek perubahan dengan efek yang diharapkan dan tinjau tiap kuartal. Hindari menggelembungkan keuntungan kecil menjadi angka besar, dan bandingkan dengan biaya perubahan.

**Perusahaan besar.** Portofolio, siklus pendanaan, dan banyak pemangku kepentingan membuat register manfaat berguna. Jaga ringan untuk perubahan kecil dan ketat untuk yang besar, taruh pemilik di unit bisnis, dan tinjau lintas portofolio. Waspadai angka yang direkap dengan definisi berbeda.

**Pemerintah dan sektor publik.** Hasil sering barang publik, seperti akses, keadilan, dan keselamatan, yang tidak dapat direduksi menjadi pendapatan. Definisikan hasil bersama orang yang dilayani, pakai bukti campuran, dan laporkan metode secara terbuka. Kasus bisnis formal dan tinjauan manfaat mungkin diwajibkan, dan hasil nol yang jujur penting untuk akuntabilitas publik (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya terutama perhatian. Menulis hipotesis memakan menit, garis dasar memakan satu jam atau beberapa, dan tinjauan memakan rapat singkat. Eksperimen dan peluncuran bertahap butuh upaya desain dan sedikit perkakas. Register manfaat dapat berupa lembar kerja atau kolom di pelacak kerja.

Imbal hasilnya adalah keputusan investasi yang lebih baik. Tim yang memeriksa hipotesisnya berhenti membangun hal yang tidak membantu, menskalakan yang membantu, dan belajar seberapa baik ia memprediksi. Itu menghemat biaya fitur tak terpakai dan program gagal. Bangun kasus dari data Anda sendiri: porsi perubahan yang membawa hipotesis, porsi yang diperiksa, dan biaya pekerjaan yang kemudian ditinggalkan atau dibalikkan. Hindari angka terbitan tentang tingkat kegagalan proyek TI kecuali Anda dapat menelusuri sumber dan metodenya, karena sangat bervariasi dan sering dikutip tanpa konteks. Perlakuan keuangan ada di bagian berikutnya (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Menghitung pengiriman sebagai nilai.** Fitur yang dikirim adalah sarana. Periksa efeknya pada orang.
- **Hipotesis yang tak dapat gagal.** Buat spesifik, dengan angka dan tanggal.
- **Menilai pekerjaan rumah sendiri.** Minta pemilik manfaat di luar tim menilai hasil.
- **Mengklaim sebab dari sebelum-dan-sesudah.** Daftar pengacau dan pakai pembanding bila mungkin.
- **Melaporkan hanya kemenangan.** Catat hasil nol dan negatif. Register yang hanya berisi keberhasilan tidak jujur.
- **Menetapkan target manfaat untuk individu.** Target yang terikat pada orang mengundang klaim yang digelembungkan. Jaga manfaat di tingkat tim dan inisiatif.
- **Presisi berlebihan.** Laporkan rentang dan metode, bukan satu angka desimal.
- **Mengabaikan pekerjaan yang tak punya manfaat baru.** Namai, dan jangan mengarang cerita manfaat untuknya.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Menyatakan nilai | Manfaat diklaim hanya dalam kasus bisnis | Hipotesis ditulis untuk beberapa perubahan | Hipotesis singkat, garis dasar, dan pemilik untuk setiap perubahan signifikan | Hipotesis dan ambang tetap saat persetujuan; indikator pendahulu dan tertinggal didefinisikan | Hipotesis dibagikan antartim dan pemasok; hasil didefinisikan bersama pengguna |
| Memeriksa nilai | Tanpa pemeriksaan pasca-rilis | Pemeriksaan sesekali oleh tim pengiriman | Tinjauan terjadwal dengan pemilik independen | Pembandingan dan pengacau terdokumentasi; mutu bukti dilacak | Bukti tingkat portofolio memandu pendanaan; eksperimen bersama antartim |
| Pembelajaran | Kemenangan dirayakan, kegagalan dilupakan | Beberapa pelajaran dicatat | Hasil nol dicatat dan ditinjau | Pola hipotesis yang terlewat memperbaiki pemilihan dan pengukuran ukuran | Pembelajaran menyuapi perencanaan di seluruh organisasi dan dengan mitra |

## Daftar periksa

- [ ] Setiap perubahan signifikan punya hipotesis nilai tertulis dengan garis dasar, indikator, dan tanggal tinjauan.
- [ ] Setiap manfaat punya pemilik di luar tim pengiriman.
- [ ] Indikator pendahulu dan tertinggal didefinisikan dan dilacak.
- [ ] Tinjauan berlangsung pada tanggal yang disepakati bersama pemilik.
- [ ] Pembandingan atau peluncuran bertahap dipakai di mana layak.
- [ ] Pengacau didaftar untuk setiap hasil yang diklaim.
- [ ] Hasil nol dan negatif dicatat dan dibagikan.
- [ ] Mutu bukti dilacak di samping klaim manfaat.
- [ ] Tak ada individu yang punya target manfaat pribadi.
- [ ] Tinjauan portofolio kuartalan melihat pola dalam hipotesis yang terpenuhi dan terlewat.

## Prompt AI

**Tulis hipotesis nilai.**

```text
Kami berencana [describe change] untuk [users or stakeholders] di [type of
organization]. Masalah hari ini: [describe]. Susun hipotesis nilai dalam bentuk
"Kami yakin bahwa [change] akan membantu [who] untuk [do what] sehingga
[measurable improvement]. Kami akan tahu dari [indicator]..." Sarankan satu
indikator pendahulu dan satu indikator tertinggal, garis dasar apa yang kami
butuhkan, dan logika tanggal tinjauan. Jangan mengarang nilai target; biarkan
sebagai placeholder untuk kami. Daftar asumsi Anda dan apa yang perlu kami cari
tahu.
```

**Daftar pengacau untuk hasil yang diklaim.**

```text
Kami mengklaim bahwa [change] memperbaiki [indicator] dari [before] menjadi
[after] antara [dates]. Hal lain yang terjadi pada periode itu: [list]. Daftar
faktor pengacau yang masuk akal, bagaimana masing-masing dapat menjelaskan hasil,
dan data atau pembanding apa yang akan membantu menyingkirkannya. Sarankan
kata-kata yang menyatakan apa yang didukung bukti. Jangan mengasumsikan sebab
yang tidak dapat didukung data. Daftar asumsi Anda.
```

**Rancang pembandingan peluncuran bertahap.**

```text
Kami dapat merilis [change] ke [number] kelompok pada waktu berbeda: [describe
groups and constraints]. Usulkan peluncuran bertahap yang memungkinkan kami
membandingkan kelompok dengan dan tanpa perubahan, katakan indikator dan periode
apa yang dipakai, apa yang dapat membiaskan pembandingan, dan apa yang akan kami
simpulkan dari hasil berbeda. Jangan mengarang ukuran efek. Daftar asumsi Anda
dan risiko.
```

**Tinjau entri register manfaat.**

```text
Tinjau entri register manfaat ini untuk [initiative]: [paste entry including
claim, baseline, method, owner, and review date]. Tunjukkan informasi yang hilang,
kata-kata samar, klaim yang tidak didukung bukti, dan cara hasil dapat
dimanipulasi. Sarankan kata-kata lebih kuat yang cocok dengan apa yang benar-benar
kami ukur. Daftar asumsi Anda dan pertanyaan untuk pemilik.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik nilai atau hasil sebelum Anda melaporkannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik manfaat membawa vektor manipulasi, pagar pembatas, dan standar buktinya.

## Poin penting

- Tulis hipotesis nilai yang dapat diperiksa sebelum membangun, dengan garis dasar, pemilik di luar tim, dan tanggal tinjauan.
- Pakai indikator pendahulu untuk mengarahkan dan indikator tertinggal untuk mengonfirmasi.
- Bandingkan di mana bisa, daftar pengacau, dan klaim hanya apa yang didukung bukti.
- Catat hasil nol dan negatif; register keberhasilan seragam tidak jujur.
- Lacak mutu bukti di samping ukuran klaim.
- Jaga pemangku kepentingan dan pengguna berkolaborasi sampai hasil dikonfirmasi.

## Referensi dan bacaan lanjutan

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
