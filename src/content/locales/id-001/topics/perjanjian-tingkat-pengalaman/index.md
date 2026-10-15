# Perjanjian tingkat pengalaman

**Perjanjian tingkat pengalaman menambahkan pertanyaan “bagaimana rasanya memakainya?” pada pertanyaan “apakah layanan memenuhi targetnya?”, dan ia hanya berfungsi bila ukuran pengalaman dipilih bersama pengguna dan disimpan di samping ukuran operasional.**

## Gambaran umum dan motivasi

[Perjanjian tingkat layanan](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) mencatat apa yang dikomitmenkan penyedia untuk disampaikan, biasanya dalam istilah yang dapat dihitung penyedia: ketersediaan, waktu respons, waktu penyelesaian. Ukuran itu berguna dan juga tidak lengkap. Tim dapat memenuhi setiap target di dasbor sementara pengguna menghabiskan pekannya menyiasati masuk yang lambat, mengulang diri kepada service desk, dan menunggu persetujuan. Jurang antara pelaporan hijau dan pengguna yang tidak puas ini kadang disebut efek semangka: hijau di luar, merah di dalam (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

**Perjanjian tingkat pengalaman (XLA)** adalah perjanjian, antara penyedia dan orang yang memakai layanan, tentang pengalaman yang seharusnya diberikan layanan. Ia menyatakan hasil dan perasaan yang diinginkan, seperti “Saya dapat mulai bekerja dalam beberapa menit sejak tiba” atau “Saya percaya permintaan saya akan ditangani,” dan menamai ukuran yang akan menunjukkan apakah terpenuhi. Istilah itu dipakai di seluruh komunitas manajemen layanan TI (ITSM), dan definisi pastinya bervariasi antarpenulis dan vendor. Periksa publikasi terkini pemilik kerangka sebelum menggambarkan XLA sebagai bagian ITIL, dan nyatakan pemakaian mana yang Anda ikuti. Topik ini memperlakukan XLA sebagai gagasan praktis: perjanjian yang menaruh ukuran pengalaman di samping ukuran operasional.

Gagasan ini punya akar di luar TI. [Pengalaman pengguna](https://en.wikipedia.org/wiki/User_experience) adalah pengalaman keseluruhan seseorang yang memakai produk, sistem, atau layanan, dan [pengalaman pelanggan](https://en.wikipedia.org/wiki/Customer_experience) adalah jumlah interaksi pelanggan dengan organisasi dari waktu ke waktu. [Kegunaan (usability)](https://en.wikipedia.org/wiki/Usability) menyangkut seberapa efektif, efisien, dan memuaskan orang dapat mencapai tujuan mereka. Tim agile mengenal wilayah ini dari design thinking dan riset pengguna, dan dari tinjauan pemangku kepentingan tempat pengguna bereaksi terhadap perangkat lunak yang berfungsi. XLA membawa perhatian yang sama pada layanan masa jalan.

Pengalaman sulit diukur dan mudah didistorsi. Survei yang hanya menjangkau pengguna bahagia, skor sentimen yang disetel agar naik, atau satu “indeks pengalaman” yang tak dapat dijelaskan siapa pun akan menyesatkan sama pastinya dengan waktu tiket yang dimanipulasi. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku penuh: ukuran pengalaman adalah pemantik percakapan, bukan kuota (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Topik ini dibangun di atas ukuran survei pada topik sebelumnya (lihat topik 6.1, Metrik kepuasan pelanggan) dan menambah ukuran perilaku dan berbasis perjalanan yang tidak bergantung pada bertanya.

## Prinsip utama

- **Mulai dari hasil yang dipedulikan orang.** Tanyakan pengguna seperti apa hari yang baik, dan tulis perjanjian dalam kata-kata mereka.
- **Pasangkan pengalaman dengan operasi.** XLA duduk di samping SLA, bukan sebagai gantinya.
- **Pakai sedikit ukuran dari sudut berbeda.** Gabungkan apa yang dikatakan orang, apa yang mereka lakukan, dan apa yang dicatat sistem.
- **Ukur perjalanan selain titik sentuh.** Pengalaman adalah seluruh jalur dari kebutuhan ke hasil.
- **Jujurlah tentang ketidakpastian.** Data pengalaman bising, dan kelompok kecil butuh perlindungan.
- **Sepakati target dengan pengguna, dan revisi.** XLA adalah perjanjian hidup, ditinjau bersama orang yang digambarkannya.
- **Jangan pernah memakai data pengalaman untuk memeringkat individu.**

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Skor pengalaman | Rata-rata penilaian atas pernyataan pengalaman yang disepakati, untuk layanan dan audiens | rata-rata penilaian dari respons valid terhadap satu pernyataan pada skala tetap | poin skala | Survei denyut singkat, dikirim menurut jadwal | Manajemen tingkat layanan; perbaikan berkelanjutan | Umpan balik tinjauan pemangku kepentingan; tinjauan hasil produk | Bulanan |
| Tren sentimen | Arah nada dalam komentar teks bebas untuk suatu layanan | porsi komentar dikodekan positif dikurangi porsi dikodekan negatif, per periode | poin persentase | Komentar survei dan komentar tiket yang dikodekan | Perbaikan berkelanjutan | Tema retrospektif | Bulanan |
| Peristiwa gesekan per pengguna | Hitungan sinyal bahwa pengguna menemui masalah, dinormalkan menurut pengguna aktif | (kontak ulang + item dibuka ulang + masuk gagal melebihi jumlah tertentu + permintaan ditinggalkan) / pengguna aktif | peristiwa per pengguna | Sistem tiket, log identitas, portal permintaan | Service desk; manajemen insiden | Cacat yang ditemukan dalam pemakaian | Bulanan |
| Waktu yang hilang karena masalah TI | Perkiraan waktu yang hilang pengguna karena masalah layanan dalam satu periode | menit hilang yang dilaporkan sendiri per pengguna, atau waktu terukur dalam keadaan terdegradasi dibobot menurut pengguna terdampak | menit per pengguna | Survei denyut; pemantauan digabung dengan hitungan pengguna | Manajemen ketersediaan; manajemen insiden | Cycle time yang hilang karena hambatan | Kuartalan |
| Tingkat penyelesaian perjalanan | Porsi pengguna yang menyelesaikan perjalanan yang didefinisikan tanpa meninggalkan atau mencari bantuan | pengguna menyelesaikan perjalanan tanpa kontak bantuan / pengguna memulai perjalanan | persen | Analitik portal; tautan tiket | Manajemen permintaan layanan; manajemen katalog layanan | Keberhasilan tugas dalam uji kegunaan | Bulanan |
| Pencapaian XLA | Porsi target pengalaman yang disepakati yang terpenuhi pada periode itu | target terpenuhi / target disepakati | persen | Register XLA | Manajemen tingkat layanan | Pencapaian tujuan pengiriman | Kuartalan |
| Jurang pengalaman | Selisih antara pencapaian SLA dan skor pengalaman untuk layanan yang sama | peringkat pencapaian SLA dikurangi peringkat skor pengalaman lintas layanan, atau perbandingan tertulis | selisih peringkat atau catatan | Laporan SLA dan survei denyut | Manajemen tingkat layanan | Definisi selesai versus umpan balik pengguna | Kuartalan |

Definisikan audiens dan periode untuk setiap ukuran. Nyatakan bagaimana kelompok kecil dilindungi: misalnya, tak ada hasil ditampilkan untuk kelompok kurang dari sepuluh orang. Peristiwa gesekan menghitung sinyal, bukan menyalahkan, jadi peristiwa dilekatkan pada layanan dan kelompok pengguna, tidak pernah pada tinjauan kinerja orang bernama.

## Rekomendasi

### Rancang perjanjian bersama pengguna

**1. Wawancara sebelum mengukur.** Habiskan waktu bersama sampel pengguna dari tiap kelompok penting dan tanyakan: Seperti apa hari yang baik dengan layanan ini? Di mana ia membuang waktu Anda? Apa yang akan Anda hentikan jika ia berfungsi? Pakai kebiasaan [desain berpusat pada manusia](https://en.wikipedia.org/wiki/Human-centered_design): amati pekerjaan nyata, dan tulis apa yang Anda dengar dalam kata-kata pengguna. Pernyataan yang dihasilkan menjadi tujuan pengalaman perjanjian.

**2. Tulis pernyataan pengalaman sebagai hasil.** “Saya dapat membuat karyawan baru produktif pada pagi pertamanya” berkata lebih banyak daripada “permintaan akses karyawan baru diselesaikan dalam dua hari.” Jaga tiap pernyataan singkat, dalam orang pertama, dan terikat pada satu layanan. Bidik tiga sampai lima pernyataan per layanan agar orang dapat mengingatnya.

**3. Pilih ukuran dari tiga sudut.** Untuk tiap pernyataan, pilih satu ukuran dari apa yang dikatakan orang (pertanyaan denyut atau tema komentar), satu dari apa yang dilakukan orang (penyelesaian perjalanan, kontak ulang, permintaan ditinggalkan), dan bila mungkin satu dari apa yang dicatat sistem (latensi untuk langkah dalam perjalanan). Ketika ketiganya tidak sepakat, Anda telah menemukan sesuatu untuk diselidiki.

**4. Sepakati target dengan ringan.** Di awal, tetapkan arah (“kurangi waktu yang hilang”) dan tanggal tinjauan alih-alih angka keras. Target keras untuk ukuran pengalaman baru mengundang manipulasi sebelum ukurannya dipahami. Ketika target muncul, jadikan rentang, dan katakan siapa yang menyepakatinya.

### Kumpulkan dan baca data

**5. Pakai pertanyaan denyut yang singkat dan teratur.** Satu pertanyaan tentang satu pernyataan, diajukan pada interval teratur, lebih mudah dijawab daripada survei tahunan panjang. Putar pernyataan, jaga kata-kata stabil, dan hindari menanyai orang yang sama lebih dari sekali dalam periode tertentu. Kaitkan desain denyut dengan prinsip survei pada topik sebelumnya (lihat topik 6.1, Metrik kepuasan pelanggan).

**6. Baca komentar dengan metode.** Alat [analisis sentimen](https://en.wikipedia.org/wiki/Sentiment_analysis) dapat memilah teks dalam volume besar, dan salah membaca sarkasme, jargon, dan konteks. Perlakukan keluaran alat sebagai lintasan pertama, minta seseorang memeriksa sampel tiap bulan, dan simpan daftar pendek tema yang Anda kodekan dengan tangan. Tujuan analisis adalah menemukan topik untuk dibicarakan dengan pengguna, bukan menghasilkan skor.

**7. Tambahkan sinyal perilaku dari perjalanan.** Instrumentasikan perjalanan yang dipedulikan pengguna, dengan sepengetahuan mereka: di mana mereka mulai, di mana mereka keluar, dan di mana mereka meminta bantuan? [Pemantauan pengguna nyata](https://en.wikipedia.org/wiki/Real_user_monitoring) atas waktu muat halaman, galat, dan langkah memberi pandangan yang tak dapat diberikan survei. Beri tahu pengguna apa yang Anda kumpulkan, jaga sebatas yang dibutuhkan, dan agregasikan sebelum membagikan.

**8. Lindungi kelompok kecil dan individu.** Data pengalaman dapat mengungkap siapa yang kesulitan. Agregasikan hasil, tekan kelompok di bawah ukuran yang disepakati, dan jangan pernah memakai data dalam tinjauan kinerja. Putuskan siapa yang boleh melihat komentar mentah, dan simpan sesuai. Dalam setelan teregulasi, konsultasikan dengan spesialis privasi sebelum mengumpulkan data perilaku.

### Pakai perjanjian

**9. Tampilkan SLA dan XLA berdampingan.** Pada halaman yang sama, tampilkan pencapaian operasional dan ukuran pengalaman untuk tiap layanan. Pasangan itu intinya: SLA hijau dengan skor pengalaman yang turun adalah dorongan untuk percakapan, dan skor pengalaman hijau dengan SLA yang gagal pantas dilihat apa yang tidak diberitahukan kepada pengguna.

**10. Adakan tinjauan pengalaman rutin bersama pengguna.** Bertemu tiap kuartal dengan perwakilan kelompok pengguna, tunjukkan data, tanyakan apa artinya, dan sepakati satu atau dua perbaikan untuk dicoba. Sertakan service desk dan tim produk, karena sebab pengalaman buruk sering berada di produk, bukan di dukungan.

**11. Danai perbaikan.** Perjanjian yang mengidentifikasi gesekan lalu membiarkannya di tempat mengajari pengguna bahwa ukurannya hanya sandiwara. Taruh dua atau tiga masalah pengalaman teratas di backlog dengan pemilik dan tanggal, dan laporkan pada tinjauan berikutnya. Lihat metrik perbaikan berkelanjutan di bagian selanjutnya buku ini (lihat topik 9.5, Metrik perbaikan berkelanjutan).

**12. Revisi perjanjian seiring layanan dan pengguna berubah.** Pensiunkan pernyataan yang tak lagi penting dan tambahkan yang baru. Catat perubahan dan tandai pada bagan tren, sebagaimana untuk definisi metrik mana pun.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Skor pengalaman | Mensurvei hanya pengguna puas; mewaktukan survei setelah peristiwa baik; menulis ulang pernyataan agar lebih mudah disetujui | Tingkat respons dan campuran responden; log kata-kata stabil; baca komentar |
| Tren sentimen | Menyetel alat atau daftar tema sampai tren naik; mengecualikan saluran negatif | Pemeriksaan manusia atas sampel bulanan; simpan panduan pengodean tetap dan catat perubahan |
| Peristiwa gesekan per pengguna | Mendefinisikan ulang peristiwa agar lebih sedikit yang dihitung; mengecilkan hati kontak ulang dengan mempersulit menjangkau meja | Volume kontak menurut saluran; tingkat pembatalan di service desk (lihat topik 3.1, Metrik service desk) |
| Waktu yang hilang karena masalah TI | Bertanya dengan cara yang menjangkarkan estimasi rendah; menghitung hanya insiden besar | Bandingkan waktu yang dilaporkan sendiri dengan waktu terdegradasi terukur; tinjauan kata-kata survei |
| Tingkat penyelesaian perjalanan | Mendefinisikan perjalanan begitu sempit sehingga kegagalan di luar lingkup; mengarahkan kasus sulit ke saluran lain | Definisi perjalanan di register; tingkat kontak bantuan dan eskalasi |
| Pencapaian XLA | Menetapkan target yang sudah terpenuhi; mendefinisikan himpunan target yang sangat kecil | Tinjau penetapan target bersama pengguna; tampilkan pencapaian dengan tren dan riwayat target |
| Jurang pengalaman | Memilih layanan atau periode yang tampak terbaik; mengubah SLA mana yang dibandingkan | Himpunan pembanding tetap disepakati di muka; tampilkan semua layanan |

Pembacaan yang sehat adalah gambaran pengalaman yang cocok dengan komentar dan percakapan tinjauan pengguna, himpunan kecil ukuran yang berubah perlahan dan karena sebab yang dapat dijelaskan tim, dan backlog perbaikan pengalaman yang makin pendek.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Hanya SLA | Jelas, dapat dihitung, kontraktual | Melewatkan yang dirasakan pengguna; dapat hijau sementara pengguna tidak puas |
| Hanya XLA | Dekat dengan yang dihargai pengguna | Lebih sulit diukur dan dibandingkan; lemah sebagai dasar kontrak dengan pemasok |
| SLA dengan XLA | Memberi kedua pandangan dan mengungkap jurang | Lebih banyak pekerjaan; butuh kepercayaan dan pertimbangan dalam membaca ketidaksepakatan |
| Ukuran pengalaman berbasis survei | Suara langsung pengguna | Bias respons; beban pada responden |
| Ukuran perilaku | Tanpa beban survei; objektif | Butuh instrumentasi dan kehati-hatian privasi; menunjukkan apa yang terjadi, bukan mengapa |
| Satu indeks pengalaman | Judul mudah | Menyembunyikan rincian; mudah dimanipulasi dan sulit dijelaskan |

Jawaban prosanya adalah memakai XLA sebagai tambahan, diperkenalkan untuk beberapa layanan tempat jurang antara operasi dan pengalaman sudah terlihat. Jangan mengganti SLA kontraktual dengan ukuran pengalaman yang tak dapat dikendalikan pemasok. Simpan komitmen hukum dan komersial di SLA, dan pakai XLA untuk menggerakkan perbaikan dan percakapan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Untuk layanan terpenting kita, seperti apa hari yang baik bagi pengguna, dalam kata-kata mereka?**
Kumpulkan dua atau tiga pengguna, atau pakai ulang wawancara terbaru, dan tulis pernyataan mereka. Fasilitator sebaiknya menolak menulis ulangnya dalam istilah operasional. Bandingkan pernyataan dengan SLA saat ini dan tanyakan pernyataan mana yang dicakupnya, dan mana yang diabaikannya. Jurangnya adalah kandidat untuk ukuran pengalaman.

**2. Di mana dasbor hijau kita dan cerita pengguna kita tidak sepakat?**
Minta tim memberi kasus terbaru tempat layanan memenuhi targetnya dan pengguna mengeluh. Telusuri kasus lewat data: apa yang kita ukur, dan apa yang kita lewatkan? Percakapan sering memunculkan langkah yang hilang, serah terima, atau jam yang berhenti terlalu dini. Catat kasus sebagai contoh untuk tinjauan berikutnya bersama pengguna.

**3. Tiga ukuran mana yang akan kita pakai untuk mengetahui apakah pernyataan pengalaman ini benar?**
Pilih satu pernyataan dan pilih satu ukuran dari apa yang dikatakan orang, satu dari apa yang mereka lakukan, dan satu dari apa yang dicatat sistem. Tanyakan apa yang dapat dilewatkan masing-masing, dan bagaimana masing-masing dapat dimanipulasi. Sepakati himpunan terkecil yang akan meyakinkan pengguna yang skeptis.

**4. Apa yang kita kumpulkan tentang pengguna yang mungkin tidak mereka harapkan, dan apakah mereka akan nyaman dengannya?**
Daftar sumber data perilaku dan tujuan masing-masing. Minta perwakilan pengguna bereaksi. Fasilitator sebaiknya memperlakukan ketidaknyamanan sebagai informasi tentang desain, bukan hambatan. Putuskan apa yang dihentikan pengumpulannya, apa yang diagregasi, dan siapa yang boleh melihat data mentah.

**5. Apa yang akan kita lakukan jika skor pengalaman turun sementara setiap SLA tetap hijau?**
Latih responsnya. Siapa yang melihat lebih dulu, apa yang mereka periksa, dan dengan siapa mereka berbicara? Putuskan apakah tim akan memercayai skor pengalaman atau mencari cara menepisnya. Jawabannya menunjukkan seberapa serius tim menanggapi perjanjian.

**6. Perbaikan pengalaman mana yang telah kita janjikan, dan apa yang terjadi padanya?**
Tinjau dua rapat tinjauan terakhir dengan pengguna. Untuk setiap komitmen, tunjukkan tanggal, pemilik, dan hasilnya. Jika daftarnya kosong atau basi, bahas mengapa. Sepakati satu perbaikan untuk disampaikan sebelum tinjauan berikutnya dan cara memberi tahu pengguna bahwa itu terjadi.

## Empat perspektif

### Tim produk dan pengiriman

Tim produk memegang banyak sebab pengalaman buruk: layar membingungkan, langkah lambat, galat tak jelas. Ukuran pengalaman memberi mereka bukti dari pemakaian langsung, dan menyuapi penyempurnaan secara langsung. Tim sebaiknya membaca tema komentar sebelum setiap sesi perencanaan, dan menghubungkan ukuran perjalanan ke backlog. Mereka sebaiknya tidak memperlakukan skor pengalaman sebagai target tim. Itu informasi tentang layanan yang mereka bagi dengan operasi.

### Tim layanan dan operasi

Tim operasi melihat gesekan lebih dulu: kontak ulang, solusi sementara, dan penelepon yang marah. Ukuran pengalaman memberi mereka cara menunjukkan apa yang disembunyikan SLA, dan alasan memperbaiki sebab alih-alih menutup tiket lebih cepat. Mereka sebaiknya menjaga definisi dan pengambilan sampel, menghindari mengarahkan pengguna ke saluran yang tampak lebih baik, dan membaca komentar tidak puas secara penuh (lihat topik 3.1, Metrik service desk).

### Kepemimpinan dan tata kelola

Pemimpin memilih apakah XLA adalah percakapan atau papan skor. Mereka sebaiknya bertanya apa yang dikatakan data pengalaman tentang di mana berinvestasi, menghindari mengaitkan gaji dengan indeks pengalaman, dan melindungi privasi data staf. Tata kelola sebaiknya meminta definisi, pengambilan sampel, dan riwayat perubahan, dan memperlakukan lonjakan tak terjelaskan pada ukuran pengalaman sebagai alasan memeriksa metodenya.

### Pelanggan dan pengguna

Pengguna adalah penulis perjanjian. Mereka sebaiknya diundang menggambarkan seperti apa yang baik, ditunjukkan hasilnya, dan diberi tahu apa yang berubah. Mereka sebaiknya tahu apa yang dikumpulkan tentang mereka dan mengapa, dan punya cara untuk berkata tidak. Pengguna yang sering ditanya dan tak melihat perbaikan akan berhenti menjawab, dan keheningan akan membuat data tampak lebih baik daripada kenyataan.

## Dalam praktik: contoh ITIL agile

Sebuah firma jasa profesional berukuran menengah menjalankan layanan TI internal untuk 1.800 staf. Angka di bawah bersifat ilustratif.

Laporan SLA bulanan menunjukkan ketersediaan 99,8 persen untuk platform kolaborasi dan 96 persen insiden diselesaikan dalam target. Direktur TI puas, namun konsultan di lokasi klien terus mengeluh tentang masuk yang lambat. Manajer layanan mengusulkan percontohan XLA untuk platform kolaborasi.

Dalam wawancara dengan 12 konsultan, muncul tiga pernyataan: “Saya dapat bergabung dengan panggilan klien dalam dua menit sejak memutuskan,” “Saya tidak harus menelepon TI untuk kembali ke akun saya,” dan “ketika sesuatu rusak, saya tahu apa yang terjadi.” Tim memilih ukuran untuk masing-masing. Untuk yang pertama, mereka mengambil penilaian denyut atas pernyataan itu dan waktu terukur dari mulai masuk sampai bergabung panggilan dari pemantauan pengguna nyata di sisi klien, diagregasi menurut wilayah. Untuk yang kedua, mereka menghitung kontak setel ulang kata sandi per pengguna aktif per bulan. Untuk yang ketiga, mereka melacak porsi insiden tempat pesan status diperbarui dalam 30 menit, dan menanyakan pertanyaan denyut tentangnya.

Data dua bulan pertama menunjukkan bahwa median waktu masuk-sampai-bergabung baik di wilayah kantor pusat tetapi panjang di dua lainnya, dan bahwa kontak setel ulang kata sandi per pengguna tiga kali lebih tinggi untuk staf pada laptop terkelola dibanding yang lain. Skor pengalaman untuk pernyataan pertama adalah 3,1 dari 5 terhadap 4,2 untuk staf berbasis kantor. SLA hijau pada keduanya. Manajer layanan membawa temuan ke tinjauan pengguna. Tim menyepakati dua perbaikan: menyetel konfigurasi single sign-on untuk wilayah jarak jauh, dan mengubah pengaturan penyegaran token pada laptop terkelola. Tiga bulan kemudian, median waktu turun, kontak setel ulang per pengguna turun, dan skor pengalaman naik menjadi 3,8. Direktur setuju mempertahankan XLA untuk layanan ini, menambahkannya ke satu lagi, dan tidak menetapkan target numerik sampai tinjauan berikutnya.

## Sudut pandang sektor

**Startup.** Kontak dekat dengan pengguna membuat wawancara mudah. Tahan membangun kerangka: tulis tiga pernyataan pengalaman untuk layanan inti, tanyakan pengguna tentangnya tiap bulan, dan tambahkan satu ukuran perilaku. Perjanjian formal menyusul kemudian.

**Bisnis kecil.** Staf sedikit dan sering berbagi manajer dengan TI. Pakai percakapan dan denyut bulanan yang sangat singkat. Berhati-hatilah dengan data perilaku, karena kelompok kecil mudah dikenali.

**Perusahaan besar.** Skala membawa banyak kelompok pengguna dan pemasok. Definisikan pernyataan pengalaman per layanan dan persona, simpan dasbor per layanan, dan hindari satu indeks pengalaman seluruh perusahaan. Selaraskan XLA dengan kontrak pemasok agar pemasok menyumbang data tanpa dimintai pertanggungjawaban atas ukuran yang tak dapat mereka pengaruhi.

**Pemerintah dan sektor publik.** Layanan sering menghadapi publik selain staf, dengan kewajiban seputar aksesibilitas, bahasa lugas, dan akses setara. Sertakan aksesibilitas dalam pernyataan pengalaman dan ukuran, uji dengan pengguna yang bergantung pada teknologi bantu, dan lindungi data pribadi sesuai hukum. Di mana pelaporan publik diwajibkan, laporkan metode bersama hasil (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya sedang. Wawancara pengguna memakan beberapa hari per layanan. Survei denyut bulanan butuh alat survei, yang sudah dimiliki banyak organisasi. Ukuran perilaku butuh sedikit instrumentasi, yang mungkin datang dari pemantauan dan analitik portal yang ada. Tinjauan bersama pengguna memakan beberapa jam tiap kuartal. Mengodekan komentar memakan satu atau dua jam tiap bulan.

Imbal hasil terletak pada menemukan masalah yang tidak ditunjukkan SLA, seperti perjalanan lambat di wilayah atau perangkat tertentu, dan mengarahkan uang perbaikan pada apa yang dihargai pengguna. Waktu yang hilang karena masalah TI dapat diubah menjadi biaya dengan tarif staf Anda sendiri bila diukur dengan cermat. Hindari klaim generik tentang peningkatan produktivitas. Bangun kasus dari garis dasar Anda sendiri: waktu hilang per pengguna, peristiwa gesekan per pengguna, dan kontak ulang, sebelum dan sesudah perbaikan. Hitung juga biaya solusi sementara yang dihindari, seperti alat bayangan yang diadopsi karena layanan resmi canggung.

## Anti-pola dan jebakan

- **Mengganti SLA dengan XLA.** Kontrak butuh komitmen yang dapat dihitung. Simpan keduanya dan tampilkan bersama.
- **Satu indeks pengalaman komposit.** Ia menyembunyikan sebab dan mengundang manipulasi. Tampilkan beberapa ukuran terpisah.
- **Mendefinisikan pengalaman tanpa pengguna.** Pernyataan yang ditulis di ruang rapat menggambarkan pandangan penyedia. Wawancara dan uji bersama pengguna.
- **Mensurvei sampai orang berhenti menjawab.** Jaga denyut singkat dan putar topik.
- **Mengumpulkan data perilaku tanpa memberi tahu siapa pun.** Itu merusak kepercayaan dan mungkin melanggar hukum. Terbukalah tentang apa yang dikumpulkan dan mengapa.
- **Memakai data pengalaman dalam tinjauan kinerja.** Itu mengubah alat pembelajaran menjadi pengawasan dan menghancurkan pelaporan jujur.
- **Memperbaiki ukuran, bukan sebab.** Jangan mengalihkan pengguna ke saluran yang lebih ramah untuk memperbaiki angka. Perbaiki perjalanannya.
- **Membiarkan temuan di slide.** Danai dan lacak perbaikan pengalaman.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Tujuan pengalaman | Implisit atau tidak ada | Ditulis penyedia untuk beberapa layanan | Pernyataan ditulis bersama pengguna untuk layanan kunci | Pernyataan ditinjau dan direvisi tiap kuartal bersama kelompok pengguna | Dibagikan lintas layanan dan pemasok, dimiliki bersama pengguna |
| Pengukuran | Survei sesekali | Survei denyut untuk satu layanan | Ukuran tiga sudut (katakan, lakukan, sistem) untuk tiap pernyataan | Ukuran diplot tren, dilindungi untuk kelompok kecil, dan dibandingkan dengan SLA | Data digabung lintas penyedia, dengan pilihan privasi yang dikendalikan pengguna |
| Tindakan | Keluhan ditangani satu per satu | Perbaikan dibuat ad hoc | Masalah pengalaman teratas di backlog dengan pemilik | Perbaikan didanai, dilacak, dan dilaporkan kembali kepada pengguna | Perbaikan dikoordinasikan antartim, pemasok, dan pengguna, dengan pembelajaran dibagikan |

## Daftar periksa

- [ ] Setiap layanan XLA punya tiga sampai lima pernyataan pengalaman yang ditulis bersama pengguna.
- [ ] Setiap pernyataan punya ukuran dari setidaknya dua sudut (katakan, lakukan, sistem).
- [ ] Ukuran SLA dan pengalaman muncul di halaman yang sama untuk tiap layanan.
- [ ] Survei denyut singkat, teratur, dan stabil dalam kata-kata.
- [ ] Komentar dikodekan oleh panduan yang stabil dan seseorang memeriksa sampel bulanan.
- [ ] Kelompok di bawah ukuran yang disepakati ditekan dalam laporan.
- [ ] Data perilaku yang dikumpulkan diungkapkan kepada pengguna dan dibatasi sebatas kebutuhan.
- [ ] Tak ada ukuran pengalaman yang dipakai dalam tinjauan kinerja individu.
- [ ] Tinjauan kuartalan dengan perwakilan pengguna ada di kalender.
- [ ] Masalah pengalaman teratas punya pemilik dan tanggal di backlog.

## Prompt AI

**Susun pernyataan pengalaman dari catatan wawancara.**

```text
Berikut catatan teranonimkan dari [number] wawancara dengan pengguna [service]
di [type of organization]: [paste notes]. Usulkan tiga sampai lima pernyataan
pengalaman dalam orang pertama, masing-masing terikat pada satu hasil yang
dipedulikan pengguna, memakai kata-kata mereka bila mungkin. Untuk masing-masing,
sarankan satu ukuran dari apa yang dikatakan orang, satu dari apa yang mereka
lakukan, dan satu dari apa yang dicatat sistem. Jangan mengarang angka. Daftar
asumsi Anda dan apa pun yang tidak dapat Anda ketahui dari catatan.
```

**Temukan jurang antara SLA dan pengalaman.**

```text
Untuk [service] pada [period], hasil SLA kami adalah: [paste results]. Data
pengalaman kami (skor denyut, tema komentar, hitungan gesekan) adalah: [paste
data]. Gambarkan di mana keduanya tidak sepakat, tawarkan tiga penjelasan yang
mungkin untuk tiap ketidaksepakatan, dan sarankan apa yang diperiksa berikutnya.
Jangan mengasumsikan sebab yang tidak dapat didukung data. Daftar asumsi Anda dan
data tambahan apa yang akan membantu.
```

**Tinjau pendekatan privasi untuk ukuran perilaku.**

```text
Kami berencana mengumpulkan sinyal perilaku ini untuk pengukuran pengalaman:
[list]. Pengguna adalah [staff, public, or both] di [jurisdiction or sector].
Tinjau rencana untuk risiko terhadap privasi, kepercayaan, dan keadilan, dan
sarankan praktik agregasi, retensi, dan pengungkapan minimum. Tandai apa pun yang
harus saya bawa kepada spesialis privasi. Jangan memberi kesimpulan hukum. Daftar
asumsi Anda.
```

**Siapkan tinjauan pengalaman kuartalan bersama pengguna.**

```text
Susun agenda dan ringkasan satu halaman untuk tinjauan pengalaman kuartalan
[service] dengan perwakilan [user groups]. Sertakan hasil SLA dan pengalaman
berdampingan, tema komentar teratas, komitmen kuartal lalu dan statusnya, dan dua
pertanyaan untuk pengguna. Datanya: [paste data]. Jaga nada polos dan hindari
jargon. Daftar asumsi Anda dan tandai klaim apa pun yang perlu diperiksa.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas bagi ukuran pengalaman sebelum Anda menambahkannya ke dasbor.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik XLA membawa vektor manipulasi dan pagar pembatasnya.

## Poin penting

- XLA menambahkan tujuan dan ukuran pengalaman pada target operasional, dan melengkapi SLA.
- Tulis pernyataan pengalaman bersama pengguna, dalam kata-kata mereka, dan ikat masing-masing pada ukuran dari apa yang dikatakan, dilakukan orang, dan dicatat sistem.
- Tampilkan hasil SLA dan pengalaman bersama, dan perlakukan ketidaksepakatan sebagai dorongan untuk menyelidiki.
- Lindungi pengguna: ungkapkan apa yang Anda kumpulkan, agregasikan, tekan kelompok kecil, dan jauhkan dari tinjauan kinerja.
- Hindari satu indeks pengalaman dan hindari target keras sebelum ukuran dipahami.
- Danai perbaikan yang diungkap data, dan beri tahu pengguna apa yang berubah.

## Referensi dan bacaan lanjutan

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
