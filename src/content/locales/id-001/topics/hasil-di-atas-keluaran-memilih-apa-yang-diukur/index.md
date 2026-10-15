# Hasil di atas keluaran: memilih apa yang diukur

**Metrik layanan atau pengiriman yang baik menggambarkan perubahan dalam hidup pelanggan atau kesehatan sebuah layanan, jadi pilih ukuran dengan bertanya apa yang berubah bagi seseorang, dan perlakukan hitungan aktivitas dan keluaran paling jauh sebagai bukti pendukung.**

## Gambaran umum dan motivasi

Kebanyakan dasbor dimulai dari apa yang mudah dihitung: tiket ditutup, perubahan dideploy, cerita selesai, panggilan dijawab. Semuanya sudah berstempel waktu di sebuah alat dan berada dalam kendali tim. Tidak satu pun menyatakan apakah ada orang yang menjadi lebih baik.

Empat kata menjaga hal ini tetap lurus. **Aktivitas** adalah upaya yang dikeluarkan: jam kerja, rapat yang diadakan, panggilan yang dilakukan. **Keluaran** adalah apa yang dihasilkan pekerjaan: sebuah rilis, tiket yang diselesaikan, artikel yang diterbitkan. **Hasil** adalah perubahan yang dimungkinkan keluaran itu bagi seseorang: pelanggan menyelesaikan tugas dalam setengah waktu, sebuah klinik buka sesuai jadwal, masalah berulang berhenti kambuh. **Dampak** adalah efek jangka lebih panjang terhadap tujuan organisasi, seperti pelanggan yang bertahan atau biaya layanan yang lebih rendah. Dalam ITIL 4 (edisi 2019 dari kerangka kerja yang diterbitkan AXELOS, kini dimiliki PeopleCert), keluaran adalah hasil serah berwujud atau tak berwujud dari sebuah aktivitas, dan hasil adalah akibat bagi pemangku kepentingan yang dimungkinkan oleh satu atau lebih keluaran.

[ITIL](https://en.wikipedia.org/wiki/ITIL) menambahkan gagasan kedua yang berfungsi sebagai ujian bagi metrik apa pun: nilai [diciptakan bersama](https://en.wikipedia.org/wiki/Co-creation) oleh penyedia layanan dan konsumen layanan, bukan disampaikan satu pihak kepada pihak lain. Ini mengikuti pemikiran di balik [logika dominan layanan](https://en.wikipedia.org/wiki/Service-dominant_logic), pandangan pemasaran bahwa nilai muncul dalam pemakaian, ketika pelanggan menerapkan kemampuan penyedia pada tujuannya sendiri. Metrik yang diukur sepenuhnya di sisi penyedia tidak dapat membuktikan nilai. Sebuah tim bisa menutup setiap tiket dan mengirim setiap rilis tepat waktu sementara pengguna merasa pekerjaan mereka tidak jadi lebih mudah.

Pandangan agile sampai ke tempat yang sama lewat jalan lain. Prinsip di balik Manifesto [pengembangan perangkat lunak agile](https://en.wikipedia.org/wiki/Agile_software_development) menyatakan bahwa perangkat lunak yang berfungsi adalah ukuran utama kemajuan, dan bahwa kesederhanaan, seni memaksimalkan jumlah pekerjaan yang tidak dikerjakan, itu esensial. Tidak satu pun menghargai tumpukan keluaran yang lebih besar. Keduanya menunjuk ke menyampaikan sesuatu yang berguna bagi penggunanya dan tidak membangun apa yang tidak dibutuhkan siapa pun.

Metrik keluaran dan aktivitas tidak salah. Metrik itu mengelola alur, kapasitas, dan biaya, dan topik-topik berikutnya memakainya secara intensif (lihat topik 2.1, Ukuran alur). Kesalahannya adalah membiarkannya menggantikan nilai. [Metrik pajangan](https://en.wikipedia.org/wiki/Vanity_metric) adalah angka yang mudah dilaporkan dan hampir selalu naik: total pengguna terdaftar, tiket tertangani kumulatif, fitur yang dikirim sampai kini. Ia membuat tim tampak sibuk dan tidak memberi tahu siapa pun apa yang harus dilakukan berikutnya. Ujiannya: bisakah angka ini naik sementara keadaan pelanggan menjadi lebih buruk?

Metrik hasil lebih sulit. Metrik itu bergerak lambat, bergantung pada faktor di luar kendali tim, dan berisik. Perubahan pada alur setel ulang kata sandi mungkin butuh berminggu-minggu untuk tampak pada volume kontak, yang juga dipengaruhi kampanye pemasaran. Jawabannya adalah memilih hasil dengan cermat, memasangkannya dengan ukuran keluaran yang dipakai tim sehari-hari untuk mengemudi, dan jujur tentang berapa banyak pergerakan yang boleh diklaim tim.

**Indikator pendahulu** adalah ukuran yang bergerak sebelum hasil yang Anda pedulikan dan dapat dipengaruhi lebih awal, seperti porsi layanan baru dengan runbook dukungan yang telah diuji. **Indikator tertinggal** melaporkan hasil setelah kejadian, seperti jumlah insiden besar atau perginya pelanggan. Para ekonom memakai pasangan yang sama, menggolongkan [indikator ekonomi](https://en.wikipedia.org/wiki/Economic_indicator) sebagai pendahulu, searah, atau tertinggal. Tim membutuhkan keduanya: indikator tertinggal menyatakan apakah Anda benar, dan indikator pendahulu memberi Anda sesuatu untuk ditindaklanjuti selagi masih ada waktu. Indikator pendahulu hanyalah hipotesis sampai Anda memeriksa, selama beberapa periode, bahwa ia benar-benar bergerak sebelum hasil.

Ukuran hasil adalah obat sebagian bagi manipulasi (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Ukuran yang dekat dengan apa yang dialami pelanggan lebih sulit diperbaiki tanpa membantu mereka, dan jarak dari hasil adalah tempat manipulasi hidup. Kerangka kerja yang membantu pemilihan dibahas tersendiri (lihat topik 1.7, Kerangka pengukuran).

## Prinsip utama

- **Mulai dari hasil dan bekerja mundur.** Sebutkan perubahan yang Anda inginkan bagi pelanggan, layanan, atau organisasi, lalu tanyakan bukti apa yang akan menunjukkannya, lalu tanyakan tanda pendahulu apa yang akan muncul lebih cepat.
- **Nilai diciptakan bersama, jadi sertakan sisi konsumen.** Setidaknya satu ukuran dalam setiap set sebaiknya berasal dari orang yang memakai layanan: keberhasilan, upaya, atau pengalaman mereka, bukan catatan penyedia semata.
- **Jaga rantai tetap terlihat.** Tampilkan aktivitas, keluaran, hasil, dan dampak sebagai rantai. Tim mengemudi berdasarkan keluaran dan indikator pendahulu, dan menilai diri berdasarkan hasil.
- **Pasangkan, jangan pernah menggantikan.** Ukuran hasil menjelaskan mengapa ukuran keluaran penting, dan ukuran keluaran menjelaskan apa yang dilakukan terhadap ukuran hasil. Tidak ada yang bekerja sendirian.
- **Utamakan ukuran yang bisa turun sekaligus naik.** Angka yang hanya tumbuh adalah hitungan, bukan sinyal.
- **Perlakukan indikator pendahulu sebagai hipotesis.** Periksa bahwa ia memprediksi hasil, dan lepaskan ketika tidak.
- **Jujur tentang atribusi.** Hasil punya banyak penyebab. Katakan apa yang dipengaruhi tim dan apa yang hanya diamatinya.

## Definisi metrik

Lima metrik di bawah dipilih untuk menggerakkan sebuah set pengukuran menuju hasil. Ini adalah contoh bentuk yang dipakai, dan topik-topik berikutnya mendefinisikan ukuran layanan dan pengiriman yang mengisinya. Ambang ilustratif dalam topik ini bukan tolok ukur.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan hasil | Porsi metrik yang dilaporkan dan tertaut di register metrik ke hasil tertulis bagi pelanggan atau layanan bernama | metrik dengan tautan hasil tertulis / metrik yang dilaporkan pada periode itu. Hanya menghitung metrik yang ditampilkan pada laporan reguler; tidak termasuk ukuran tampilan kerja yang disimpan satu tim | persen | Register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik) | Pengukuran dan pelaporan; perbaikan berkelanjutan | Tujuan produk dan tujuan pengiriman | Kuartalan |
| Tingkat adopsi fitur | Porsi pengguna yang memenuhi syarat dan memakai kapabilitas baru atau yang diubah dalam jangka waktu tertentu setelah rilis | pengguna berbeda yang memenuhi syarat dan memakai kapabilitas itu dalam 30 hari sejak rilis / pengguna berbeda yang memenuhi syarat pada periode itu. Jam dimulai pada ketersediaan umum; tidak termasuk akun uji internal dan pengguna yang tidak dapat menjangkau kapabilitas itu | persen | Analitik produk, log pemakaian katalog layanan | Desain layanan; manajemen rilis | Umpan balik tinjauan pemangku kepentingan; ukuran hasil produk | Bulanan selama 3 bulan setelah rilis, lalu kuartalan |
| Tingkat kontak berulang | Porsi kontak dari seorang pengguna tentang layanan yang sama dalam jangka waktu tertentu setelah kontak sebelumnya ditutup | kontak baru dari pengguna yang sama tentang layanan yang sama dalam 14 hari sejak kontak yang ditutup / kontak yang ditutup pada periode itu. Jam dimulai saat penutupan; tidak termasuk kontak yang dibuka sebagai tindak lanjut terencana | persen | Riwayat kontak dan tiket alat ITSM | Service desk; manajemen insiden | Cacat yang lolos; definisi selesai | Bulanan |
| Tingkat validasi indikator pendahulu | Porsi indikator pendahulu yang dipakai dan pergerakannya mendahului pergerakan indikator tertinggal yang tertaut pada periode tinjauan | indikator pendahulu dengan keunggulan terkonfirmasi atas indikator tertinggalnya / indikator pendahulu yang dipakai. Dinilai tim dalam tinjauan terdokumentasi, atas setidaknya empat periode data; tidak termasuk indikator dengan kurang dari empat periode | persen | Register metrik dan riwayat tren | Perbaikan berkelanjutan | Tindakan retrospektif pada eksperimen | Dua kali setahun |
| Tingkat penyelesaian tinjauan manfaat | Porsi perubahan atau perbaikan yang didanai dan hasil yang dimaksudkannya ditinjau terhadap ukurannya setelah tenggang yang disepakati | perubahan dengan tinjauan hasil selesai dalam 90 hari sejak tanggal tinjauan yang direncanakan / perubahan yang tanggal tinjauannya jatuh pada periode itu. Tidak termasuk perubahan yang ditarik sebelum rilis | persen | Catatan perubahan, register perbaikan, catatan tinjauan | Perbaikan berkelanjutan; pemberdayaan perubahan | Tinjauan pemangku kepentingan; tinjauan inkremen produk | Kuartalan |

Cakupan hasil dan tingkat penyelesaian tinjauan manfaat mengukur praktik pengukuran dan mudah dipenuhi dengan dokumen. Tingkat adopsi fitur dan tingkat kontak berulang berada lebih dekat ke pelanggan dan paling mungkin mengubah sebuah keputusan.

## Rekomendasi

### Mulai dari hasil

**1. Tulis hasil sebagai kalimat tentang seseorang atau sebuah layanan.** “Staf dapat menyetel ulang kata sandi sendiri tanpa menelepon service desk” adalah hasil. “Deploy portal identitas baru” adalah keluaran. Taruh kalimat itu di bagian atas entri metrik dalam register, lalu pilih ukurannya. Jika Anda tidak dapat menulis kalimatnya, Anda belum siap memilih angka.

**2. Gambar rantai dari aktivitas ke dampak.** Untuk setiap tujuan, buat sketsa empat kotak: apa yang dilakukan tim, apa yang dihasilkannya, apa yang berubah bagi pengguna, dan apa yang diubah hal itu bagi organisasi. Tempatkan setiap kandidat metrik dalam sebuah kotak. Set yang penuh di kiri dan kosong di kanan adalah sinyal untuk mencari bukti hasil.

**3. Pakai ujian penciptaan nilai bersama pada setiap metrik.** Tanyakan: pandangan siapa tentang nilai yang ditunjukkan ini, dan apakah pandangan konsumen muncul di mana pun dalam set? Dalam istilah ITIL, hubungan layanan memiliki penyedia dan konsumen, dan nilai terwujud dalam pemakaian konsumen. Ukuran waktu respons dari jam penyedia membutuhkan pendamping dari sisi konsumen, seperti apakah pengguna dapat melanjutkan pekerjaannya (lihat topik 6.2, Perjanjian tingkat pengalaman).

**4. Minta keputusan, bukan laporan.** Untuk setiap kandidat metrik, tulis keputusan yang akan diambil seseorang jika ia bergerak. Pensiunkan ukuran apa pun tanpa keputusan terlampir. Ini penyaring tercepat terhadap metrik pajangan dan mencegah dasbor membengkak secara default.

### Pasangkan keluaran dengan hasil

**5. Pilih satu ukuran hasil per ukuran keluaran utama.** Jika Anda melaporkan deployment, pasangkan dengan ukuran apa yang diubah deployment itu bagi layanan, seperti kegagalan perubahan atau insiden yang dirasakan pengguna (lihat topik 2.8, Metrik DORA). Jika Anda melaporkan tiket terselesaikan, pasangkan dengan kontak berulang. Pasangan itu sebaiknya di halaman yang sama. Tim yang hanya melihat keluaran akan mengoptimalkan keluaran.

**6. Pilih ukuran hasil yang bisa dipengaruhi tim, dan sebutkan yang hanya diamatinya.** Tim bisa memengaruhi kontak berulang layanannya sendiri dan adopsi fitur miliknya sendiri. Ia hanya bisa mengamati pendapatan perusahaan. Keduanya termasuk dalam gambaran, tetapi target dan pekerjaan perbaikan melekat pada ukuran yang dipengaruhi. Menyebutkan perbedaan itu mencegah tim disalahkan atas pergerakan yang tidak mungkin ia sebabkan.

**7. Pakai proksi secara terbuka.** Banyak hasil tidak dapat diukur langsung. Pilih proksi, katakan bahwa itu proksi, dan katakan apa yang dilewatkannya. Tingkat kontak berulang adalah proksi untuk “masalahnya benar-benar terselesaikan,” dan survei singkat atau pembacaan komentar terbuka dapat memeriksa bahwa ia masih berkata jujur (lihat topik 6.1, Metrik kepuasan pelanggan).

### Bangun pasangan pendahulu dan tertinggal

**8. Pasangkan setiap indikator tertinggal dengan setidaknya satu indikator pendahulu yang dapat Anda tindak.** Insiden besar adalah indikator tertinggal, dan porsi layanan dengan runbook pemulihan yang telah diuji mungkin mendahuluinya. Indikator pendahulu memberi tim sesuatu untuk dikerjakan bulan ini. Pilih indikator pendahulu yang Anda yakini dengan alasan yang bisa Anda tulis, lalu uji keyakinan itu.

**9. Validasi indikator pendahulu dengan menengok ke belakang.** Dua kali setahun, plot setiap indikator pendahulu terhadap pasangan tertinggalnya selama setidaknya empat periode dan tanyakan apakah pergerakannya datang lebih dulu. Jika hubungannya lemah, ubah atau lepaskan indikator pendahulu itu.

**10. Pakai sasaran tingkat layanan bila hasilnya memiliki ukuran yang jelas bagi pengguna.** Indikator tingkat layanan (SLI) yang dipilih dengan baik adalah sinyal pendahulu bagi kebahagiaan pengguna, dan sasaran tingkat layanan (SLO) menyatakan seberapa baik ia harus (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan). Keduanya paling baik bekerja bila indikator dipilih dari sudut pandang pengguna, bukan dari sudut pandang mesin.

### Jaga pilihan tetap jujur

**11. Tutup lingkaran dengan tinjauan hasil.** Ketika sebuah perubahan atau perbaikan didanai, catat hasil yang dimaksudkan, ukurannya, dan tanggal ketika seseorang akan melihatnya. Adakan tinjauan meskipun jawabannya canggung. Tanpa tinjauan, bahasa hasil hanyalah hiasan (lihat topik 6.5, Realisasi nilai dan hasil bisnis).

**12. Simpan ukuran keluaran di tampilan kerja, dan katakan untuk apa.** Ukuran alur, kapasitas, dan biaya adalah instrumen tim, bukan kartu skornya. Cycle time memberi tahu di mana pekerjaan menunggu (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur). Dilaporkan ke atas tanpa hasil di sampingnya, ukuran itu mengundang manipulasi.

## Vektor manipulasi dan pagar pembatas

Bergerak menuju hasil tidak menghilangkan manipulasi. Ia mengubah bentuknya: hasil bisa didefinisikan ulang, proksi bisa diarahkan, dan tinjauan bisa dilewati.

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan hasil | Menulis kalimat hasil yang kabur (“tingkatkan layanan”) untuk setiap metrik agar tautan ada di atas kertas | Ambil sampel register: kalimat harus menyebut seseorang atau layanan dan sebuah perubahan; periksa bahwa sebuah keputusan diambil karena ukuran itu |
| Tingkat adopsi fitur | Menghitung penggunaan pertama yang dipaksakan atau otomatis sebagai adopsi; menyusutkan kelompok pengguna yang memenuhi syarat; menjadikan kapabilitas sebagai default sehingga “dipakai” tanpa dipilih | Penyelesaian tugas atau kepuasan di antara pengguna kapabilitas itu; retensi pemakaian setelah 30 dan 90 hari; baca komentar terbuka |
| Tingkat kontak berulang | Meminta pengguna membuat permintaan baru lewat saluran lain; menutup kontak sebagai duplikat dari yang tidak berkaitan; memperpanjang penutupan agar kontak ulang jatuh di luar jangka | Kontak per saluran untuk layanan yang sama; tinjauan bersampel atas catatan penutupan; tingkat “masalah terselesaikan” yang dilaporkan pengguna |
| Tingkat validasi indikator pendahulu | Menyatakan indikator pendahulu valid setelah pandangan informal; memilih indikator yang secara sepele bergerak bersama hasil | Catatan tinjauan tertulis dengan data yang diplot; undang orang di luar tim untuk menantang satu hasil per siklus |
| Tingkat penyelesaian tinjauan manfaat | Mengadakan tinjauan sebatas nama, atau menetapkan hasil yang dimaksudkan setelah kejadian sehingga selalu terpenuhi | Bandingkan hasil dalam tinjauan dengan pernyataan saat perubahan didanai; lacak porsi tinjauan yang berujung pada perubahan rencana |

Pembacaan yang sehat menunjukkan ukuran hasil yang kadang mengecewakan, tinjauan yang kadang mengakhiri sebuah perubahan, dan indikator pendahulu yang kadang dilepaskan. Set yang setiap hasilnya terpenuhi dan setiap indikator pendahulunya terkonfirmasi kemungkinan telah disetel agar demikian.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Ukuran keluaran dan aktivitas | Cepat, murah, dan dalam kendali tim; baik untuk keputusan alur dan kapasitas | Mudah digelembungkan; tak mengatakan apa pun tentang apakah ada yang diuntungkan |
| Ukuran hasil | Tetap dekat dengan apa yang dihargai pelanggan dan organisasi; lebih sulit diperbaiki tanpa membantu | Lambat, berisik, dan dipengaruhi faktor di luar kendali tim |
| Indikator pendahulu | Memberi peringatan dini dan sesuatu untuk ditindaklanjuti | Bisa menyesatkan bila kaitannya dengan hasil diasumsikan, bukan diuji |
| Indikator tertinggal | Melaporkan apa yang benar-benar terjadi | Datang terlalu terlambat untuk mengubah hasil periode ini |
| Proksi untuk hasil | Membuat hasil yang sulit diukur menjadi terlihat | Bisa menyimpang dari apa yang diwakilinya, dan mengundang surogasi |
| Set kecil yang dipimpin hasil | Mudah diingat dan dibahas; memusatkan upaya | Bisa melewatkan masalah di luar hasil yang dipilih |
| Set seimbang yang luas | Mencakup lebih banyak layanan | Mengencerkan perhatian; setiap ukuran mendapat sorotan lebih sedikit |

Simpan sejumlah kecil ukuran hasil yang dapat dilafalkan seluruh kelompok, dukung masing-masing dengan ukuran keluaran dan pendahulu yang menjelaskannya, dan tinjau ulang set itu ketika strategi berubah. Pendekatan seimbang yang dikaitkan dengan [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) dan dengan [tujuan dan hasil kunci](https://en.wikipedia.org/wiki/Objectives_and_key_results) sama-sama berusaha menghubungkan pekerjaan harian dengan hasil yang penting. Keduanya gagal dengan cara yang sama ketika hasil kunci menjadi daftar keluaran dengan persentase di sampingnya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Dari lima metrik kita yang paling menonjol, mana yang bisa naik sementara pelanggan kita menjadi lebih buruk?**
Tulis kelima metrik di papan dan ajukan pertanyaan itu untuk masing-masing. Hitungan tiket ditutup, misalnya, bisa naik sementara kontak berulang juga naik. Fasilitator sebaiknya mencatat kasus ketika jawabannya ya, karena itulah metrik pajangan. Akhiri dengan bertanya ukuran hasil apa yang akan berada di sebelah masing-masing.

**2. Seperti apa pekan yang baik bagi pelanggan layanan ini, dalam kata-kata mereka?**
Tanyai orang yang berbicara dengan pelanggan, dan hindari kosakata tim sendiri. Jawabannya menjadi kalimat hasil, dan sering mengungkap hal yang tidak diukur siapa pun, seperti tidak perlu menjelaskan masalah dua kali. Kumpulkan tiga kalimat dan tanyakan mana yang bisa diukur, meski lewat proksi.

**3. Indikator pendahulu kita yang mana pernah kita periksa terhadap hasil yang semestinya diprediksinya?**
Pilih satu indikator dan plot terhadap pasangan tertinggalnya untuk beberapa periode terakhir. Tanyakan apa yang Anda lihat dan seberapa yakin Anda. Jika hubungannya lemah, bahas penggantinya. Perlakukan indikator yang dilepas sebagai hasil normal dari belajar, bukan kegagalan.

**4. Di mana tim kita mengklaim kredit atas hasil yang hanya diamatinya?**
Lihat metrik dalam laporan ke pimpinan. Mana yang bergantung pada faktor di luar kendali tim, seperti musiman, kampanye, atau pemasok? Sepakati cara sederhana menyatakan apa yang dipengaruhi tim dan apa yang diamatinya. Ini menyiapkan tim untuk hari ketika sebuah hasil bergerak karena sebab yang bukan ulahnya.

**5. Apa yang kita kirim atau ubah dalam dua kuartal terakhir, dan apakah ada yang meninjau apakah itu berhasil?**
Daftar perubahan di papan dan tandai yang memiliki catatan tinjauan. Untuk yang lain, tanyakan hasil apa yang diharapkan dan bagaimana kita bisa mengetahuinya sekarang. Tahan dorongan mencari kambing hitam. Tujuannya memulai kebiasaan, meski tinjauan pertama terlambat.

**6. Ukuran keluaran mana yang sebaiknya kembali ke tampilan kerja kita?**
Beberapa ukuran berguna bagi tim dan menyesatkan dalam laporan. Tanyakan mana yang mana, dan apa yang dibutuhkan masing-masing di sampingnya agar tetap berada dalam laporan pimpinan. Sepakati satu ukuran untuk dipindahkan kuartal ini. Memindahkan ukuran adalah tanda kematangan, bukan mundur dari transparansi.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman tergoda oleh keluaran karena alat mereka melaporkannya secara default. Obatnya adalah menjadikan adopsi dan bukti hasil bagian dari definisi selesai dan tinjauan pemangku kepentingan. Fitur yang tidak dipakai siapa pun adalah pelajaran, dan mengetahuinya lebih awal adalah manfaat praktik agile. Tim menyimpan ukuran alur di tampilan kerja mereka dan memasangkannya dengan ukuran adopsi dan kegagalan (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman).

### Tim layanan dan operasi

Tim layanan diukur dari penanganan: panggilan dijawab, tiket ditutup, waktu penyelesaian. Ini penting untuk perencanaan dan biaya, dan sedikit menyatakan apakah masalah pengguna benar-benar hilang. Tim operasi sebaiknya menambahkan kontak berulang, kekambuhan penyebab yang sama, dan penyelesaian yang dilaporkan pengguna di samping ukuran kecepatan, dan memandang curiga kenaikan hitungan tiket mudah (lihat topik 3.1, Metrik service desk). Indikator pendahulu seperti pemakaian artikel pengetahuan dan runbook teruji memberi tim sesuatu untuk dikerjakan di antara insiden.

### Kepemimpinan dan tata kelola

Apa yang diminta pimpinan untuk dilihat mengajari organisasi apa yang penting. Mintalah hasil, terimalah bahwa hasil lebih lambat dan berisik, dan danai tinjauan yang memeriksanya. Badan tata kelola sebaiknya mencari set pendek yang stabil dari ukuran hasil, masing-masing dengan pemilik yang disebutkan dan catatan keputusan yang diinformasikannya (lihat topik 1.4, Tata kelola dan kepemilikan metrik). Pemimpin yang bertanya “apa yang kita pelajari?” mendapat data lebih baik daripada yang bertanya “mengapa ini merah?”

### Pelanggan dan pengguna

Pelanggan mengalami hasil secara langsung dan jarang melihat hitungan keluaran. Mereka ujian akhir bagi set itu: apakah layanan memungkinkan mereka melanjutkan apa yang mereka datangi? Survei singkat, komentar terbuka, dan pengamatan tugas nyata adalah bukti yang lebih baik daripada ukuran sisi penyedia mana pun. Pelanggan juga punya peran dalam menciptakan nilai bersama, artinya seberapa baik mereka diberi informasi, dimampukan, dan didengar memengaruhi hasilnya (lihat topik 6.3, Metrik adopsi layanan dan katalog).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan tim platform internal yang menawarkan layanan penyediaan lingkungan swalayan kepada sekitar 40 tim produk, didukung service desk kecil. Semua angka dalam contoh ini bersifat ilustratif.

Laporan bulanan menunjukkan 310 permintaan terpenuhi (naik dari 240), median waktu pemenuhan 6 jam, dan 12 fitur dikirim dalam kuartal itu. Pimpinan senang. Kepala platform memperhatikan bahwa kontak ke service desk tentang penyediaan juga naik, dan meminta tim memplot keluaran terhadap hasil yang mereka harapkan: tim produk mendapat lingkungan tanpa menunggu atau meminta bantuan.

Latihan rantai menunjukkan tim telah mengukur aktivitas dan keluaran, tanpa hasil. Mereka menambah tiga. Yang pertama tingkat kontak berulang: 22 persen kontak penyediaan diikuti kontak lain tentang layanan yang sama dalam 14 hari. Yang kedua tingkat adopsi fitur untuk tiga fitur terbaru, yang berada pada 9 persen, 14 persen, dan 61 persen tim yang memenuhi syarat setelah 30 hari. Yang ketiga, indikator pendahulu, adalah porsi permintaan yang selesai tanpa langkah manusia, saat ini 48 persen. Mereka berhipotesis bahwa ini seharusnya mendahului turunnya tingkat kontak berulang.

Mereka memutuskan menunda dua fitur terencana yang mirip dengan dua fitur ber-adopsi rendah dan menghabiskan kuartal itu pada penyebab paling umum kontak berulang, pesan kesalahan yang tidak jelas saat kuota terlampaui. Mereka mencatat hasil yang dimaksudkan, tingkat kontak berulang di bawah 15 persen, dan menetapkan tanggal tinjauan dalam 90 hari.

Risiko manipulasi muncul pada bulan kedua. Tingkat kontak berulang turun menjadi 11 persen, yang tampak luar biasa. Sampel 25 kontak tertutup menunjukkan bahwa service desk mulai meminta pengguna memakai saluran obrolan untuk pertanyaan lanjutan, dan saluran obrolan tidak dihitung dalam alat ITSM. Tim menambahkan kontak per saluran ke laporan, membawa transkrip obrolan ke dalam sampel, dan mendapati tingkat gabungan 17 persen. Itu perbaikan nyata, lebih kecil daripada pembacaan pertama. Dalam tinjauan kepala melaporkan 17 persen, mencatat bahwa indikator pendahulu naik dari 48 menjadi 57 persen secara seirama, dan mencatat bahwa hipotesis bertahan selama dua dari empat periode yang dibutuhkan untuk menyebutnya tervalidasi.

## Sudut pandang sektor

**Startup.** Hasil berada dekat: para pendiri dapat berbicara dengan pelanggan dan melihat apakah mereka bertahan. Risikonya hanya mengukur pertumbuhan pengguna dan fitur, yang merupakan metrik pajangan sampai retensi dan keberhasilan tugas terlihat. Pilih satu ukuran hasil yang akan dikenali pelanggan dan periksa setiap pekan.

**Bisnis kecil.** Angka terlalu kecil untuk statistik, jadi utamakan percakapan langsung, segelintir kasus yang dilacak, dan daftar pendek proksi. Waspadai dasbor vendor yang melaporkan aktivitasnya sendiri seolah itu hasil Anda.

**Perusahaan besar.** Skala mengundang pelaporan keluaran, karena keluaran dapat dibandingkan di banyak tim dan hasil tidak. Tahan memaksakan satu definisi hasil pada layanan yang berbeda. Sepakati set kecil kalimat hasil bersama, biarkan tiap layanan memilih ukurannya, dan jaga register tetap mutakhir.

**Pemerintah dan sektor publik.** Kewajiban undang-undang, aturan pendanaan, dan tingkat layanan menetapkan sebagian ukuran di muka, sering berupa keluaran seperti kasus diproses. Penuhi, dan tambahkan ukuran hasil bagi warga dan staf di sampingnya, seperti apakah seseorang mendapat bantuan yang ia cari. Pelaporan publik membuat data hasil yang jujur lebih bernilai dan lebih sensitif, jadi sepakati di muka bagaimana angka yang dikoreksi akan dijelaskan (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya beralih ke hasil sebagian besar adalah upaya dan kesabaran: menulis kalimat hasil, menambah beberapa ukuran seperti survei singkat atau peristiwa adopsi, dan mengadakan tinjauan hasil. Biaya perangkat sederhana, karena kebanyakan proksi dapat dibangun dari data yang sudah dikumpulkan. Biaya yang lebih besar adalah keterlambatan, karena data hasil datang lambat dan pemimpin harus menunggunya.

Imbal hasil datang dari pilihan yang lebih baik tentang di mana membelanjakan. Pekerjaan yang tidak dipakai siapa pun itu mahal, begitu pula memperbaiki ukuran penanganan sementara penyebab mendasar kontak berulang tetap ada. Pola yang diharapkan adalah lebih sedikit fitur yang dibangun lalu tak terpakai, lebih banyak perhatian pada penyebab berulang, dan cerita yang lebih kuat untuk pendanaan. Jangan menjanjikan persentase. Ukur garis dasar Anda sendiri, seperti adopsi rilis terbaru dan kontak berulang, dan bandingkan setelah beberapa kuartal (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Menghitung yang mudah.** Hitungan tiket dan deployment ada di setiap alat, yang menjadikannya default. Tambahkan setidaknya satu ukuran hasil untuk setiap layanan sebelum menambah hitungan keluaran lain.
- **Teater hasil.** Menulis kalimat hasil untuk setiap metrik tanpa pernah memeriksanya. Tinjau sampel register dan tanyakan keputusan apa yang diinformasikan tiap ukuran.
- **Indikator pendahulu yang tak diuji.** Memperlakukan sinyal yang masuk akal sebagai bukti. Plot terhadap hasil tertinggal setidaknya dua kali setahun dan lepaskan yang tidak mendahului.
- **Hasil sebagai target pribadi.** Menugaskan ukuran hasil kepada satu orang mengundang perilaku yang diuraikan dalam topik 1.2. Lekatkan hasil pada tim dan layanan.
- **Hanya mengukur sisi penyedia.** Set yang terdiri atas jam dan hitungan internal akan melewatkan apa yang dirasakan pelanggan. Sertakan ukuran sisi konsumen untuk setiap layanan.
- **Tak pernah meninjau.** Mendanai perubahan berdasarkan manfaat yang dijanjikan dan tak pernah memeriksanya. Pasang tanggal tinjauan pada catatan perubahan saat disetujui.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Memilih ukuran | Hitungan yang tersedia di alat | Beberapa tim menulis kalimat hasil | Setiap metrik yang dilaporkan memiliki hasil tertulis dan keputusan yang diinformasikannya | Set hasil dan keluaran ditinjau bersama setiap kuartal | Kalimat hasil diselaraskan antartim, pemasok, dan pelanggan, dan direvisi ketika strategi berubah |
| Indikator pendahulu dan tertinggal | Hanya hasil tertinggal, dilaporkan terlambat | Beberapa indikator pendahulu dipilih berdasarkan intuisi | Indikator pendahulu dan tertinggal dipasangkan dan dicatat di register | Indikator pendahulu divalidasi terhadap hasil dua kali setahun | Indikator dibagikan dengan pemasok dan pelanggan; set berkembang bersama bukti |
| Tinjauan hasil | Tidak ada tinjauan apakah perubahan berhasil | Tinjauan sesekali setelah perubahan besar | Tanggal tinjauan dicatat untuk setiap perubahan yang didanai | Tinjauan diselesaikan, hasilnya masuk ke rencana berikutnya | Tinjauan rutin, lintas tim, dan menyertakan masukan pelanggan |
| Bukti sisi konsumen | Anekdot | Survei untuk sebagian layanan | Ukuran sisi konsumen untuk setiap layanan | Bukti konsumen diplot tren dan dibaca bersama data operasional | Pelanggan membantu mendefinisikan dan menafsirkan ukuran hasil |

## Daftar periksa

- [ ] Setiap layanan memiliki setidaknya satu kalimat hasil yang menyebut seseorang atau layanan dan sebuah perubahan.
- [ ] Setiap metrik yang dilaporkan ditempatkan pada rantai dari aktivitas ke dampak.
- [ ] Setiap metrik memiliki keputusan bernama yang diinformasikannya; yang tanpa itu dipensiunkan.
- [ ] Setiap ukuran keluaran pada laporan memiliki ukuran hasil di sampingnya.
- [ ] Setiap layanan memiliki setidaknya satu ukuran sisi konsumen.
- [ ] Setiap indikator tertinggal memiliki indikator pendahulu, dengan alasan tertulis untuk kaitannya.
- [ ] Indikator pendahulu diperiksa terhadap hasil setidaknya dua kali setahun.
- [ ] Proksi diberi label sebagai proksi, beserta apa yang dilewatkannya.
- [ ] Setiap perubahan yang didanai memiliki hasil yang dimaksudkan, ukuran, dan tanggal tinjauan.
- [ ] Ukuran hasil melekat pada tim dan layanan, tidak pernah pada individu.

## Prompt AI

**Ubah metrik keluaran menjadi set yang dipimpin hasil.**

```text
Tim kami adalah [team name], yang menyediakan [service or product] kepada
[customers or users]. Saat ini kami melaporkan [list of output or activity
metrics]. Kami ingin bergerak menuju hasil. Untuk setiap metrik, sarankan kalimat
hasil tentang pelanggan atau layanan yang mungkin didukungnya, dan usulkan satu
ukuran hasil serta satu indikator pendahulu yang dapat kami pertimbangkan. Untuk
setiap saran, katakan apa yang akan dilewatkan ukuran itu dan bagaimana ia dapat
dimanipulasi. Jangan mengarang nilai acuan atau sumber. Daftar asumsi Anda dan
fakta yang Anda butuhkan dari saya.
```

**Uji apakah indikator pendahulu kredibel.**

```text
Kami memakai [leading indicator] sebagai indikator pendahulu bagi [lagging outcome
measure]. Berikut [number] periode data untuk keduanya, ditempel di bawah,
dengan catatan tentang apa pun yang berubah selama waktu itu: [data and notes].
Jelaskan apakah indikator pendahulu tampak bergerak sebelum yang tertinggal, dan
penjelasan lain apa yang konsisten dengan data. Jangan mengklaim sebab-akibat.
Daftar asumsi Anda, batas dari data sebanyak ini, dan data tambahan apa yang akan
membantu.
```

**Susun tinjauan hasil untuk perubahan terbaru.**

```text
Kami membuat perubahan ini: [description], disetujui pada [date], dengan hasil
yang dimaksudkan [outcome sentence] dan ukuran [measure]. Data saat ini: [data].
Susun agenda tinjauan hasil dan struktur ringkasan singkat yang membandingkan
hasil yang dimaksudkan dengan apa yang kita lihat, memisahkan apa yang
dipengaruhi tim dari apa yang hanya diamatinya, dan mendaftar pertanyaan untuk
pengguna. Jangan menilai keberhasilan melampaui yang didukung data. Daftar
asumsi Anda dan kesenjangan data.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik dan ukuran hasil pendamping bagi metrik keluaran yang akan Anda laporkan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa topik metrik baru memasangkan ukuran keluarannya dengan hasil dan pagar pembatas.

## Poin penting

- Aktivitas, keluaran, hasil, dan dampak adalah hal yang berbeda, dan dasbor yang hanya berisi dua yang pertama tidak dapat menunjukkan nilai.
- Dalam ITIL, nilai diciptakan bersama konsumen, jadi setiap set membutuhkan ukuran dari sisi konsumen.
- Pasangkan keluaran dengan hasil, dan indikator tertinggal dengan indikator pendahulu yang telah Anda uji.
- Jelas tentang apa yang dipengaruhi tim dan apa yang hanya diamatinya.
- Tinjau perubahan yang didanai terhadap hasil yang dimaksudkan, dan biarkan hasilnya mengubah rencana.
- Ukuran hasil mengurangi manipulasi tanpa mengakhirinya, jadi setiap ukuran tetap membutuhkan pagar pembatas.

## Referensi dan bacaan lanjutan

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Co-creation](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Economic indicator](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
