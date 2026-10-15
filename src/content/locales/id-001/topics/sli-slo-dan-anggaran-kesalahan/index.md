# SLI, SLO, dan anggaran kesalahan

**Tujuan tingkat layanan mengubah “cukup andal” menjadi angka yang dapat dilihat pengguna, tim produk, dan tim operasi sekaligus, dan anggaran kesalahan yang ditinggalkannya mengubah angka itu menjadi keputusan bersama yang dapat dibelanjakan tentang risiko, alih-alih perdebatan tentang siapa yang bersalah.**

## Gambaran umum dan motivasi

Setiap layanan sudah punya tingkat keandalan, entah ada yang mengukurnya atau tidak. Jika tak ada yang menyatakannya, pengguna mengira satu tingkat, tim produk mengira tingkat lain, dan tim operasi membela yang ketiga. Perbedaannya ditemukan selama gangguan. Topik ini mencakup tiga gagasan terkait yang dipakai [rekayasa keandalan situs (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) untuk menutup jurang itu: indikator tingkat layanan, tujuan tingkat layanan, dan anggaran kesalahan.

[Indikator tingkat layanan (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) adalah pengukuran satu aspek layanan sebagaimana dialami pengguna. Aspek tipikal adalah apakah permintaan berhasil, berapa lama, apakah data yang dikembalikan segar, dan apakah benar. SLI yang baik dinyatakan sebagai rasio: jumlah peristiwa baik dibagi jumlah peristiwa valid, pada jendela yang didefinisikan. [Tujuan tingkat layanan (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) adalah target untuk rasio itu pada suatu periode, misalnya “99,9 persen permintaan checkout valid berhasil selama 28 hari bergulir.” **Anggaran kesalahan** adalah apa pun yang diizinkan tujuan untuk salah: 100 persen dikurangi SLO. Pada 99,9 persen, anggarannya adalah 0,1 persen peristiwa valid.

Anggaran kesalahan mengubah percakapan. Jika layanan telah menghabiskan sedikit anggarannya, tim punya ruang untuk merilis lebih cepat, mencoba perubahan berisiko, dan menjalankan eksperimen. Jika anggaran hampir habis, tim yang sama memperlambat pekerjaan fitur dan menghabiskan upaya pada keandalan sampai anggaran pulih. Keputusan datang dari angka yang disepakati di muka, jadi tidak bergantung pada siapa yang paling senior atau paling meyakinkan dalam rapat.

**Laju pembakaran** adalah seberapa cepat anggaran dibelanjakan, relatif terhadap laju yang akan menghabiskan tepat semuanya pada akhir jendela. Laju pembakaran 1 berarti anggaran akan habis tepat pada akhir jendela. Laju pembakaran 10 berarti akan habis dalam sepersepuluh jendela. Laju pembakaran adalah jembatan dari SLO ke peringatan, karena menyatakan seberapa mendesak masalah dalam istilah apa yang dibiayakannya pada tujuan.

Pandangan agile dan ITIL bertemu di sini, dan memakai kosakata berbeda untuk gagasan terkait. Dalam ITIL 4, manajemen tingkat layanan adalah praktik yang menetapkan, mengukur, dan melaporkan tingkat layanan, dan [perjanjian tingkat layanan (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) adalah perjanjian terdokumentasi antara penyedia dan pelanggan (lihat topik 5.1, Metrik SLA, OLA, dan XLA). SLO adalah target internal yang biasanya lebih ketat daripada SLA dan dimiliki tim yang menjalankan layanan. SLA membawa konsekuensi, seperti kredit atau penalti. SLO membawa aturan keputusan. Tim agile yang memiliki layanannya (“you build it, you run it”) memakai SLO untuk membuat biaya keandalan terlihat di backlog yang sama dengan fitur. Tim yang mengikuti praktik ITIL dapat memperlakukan SLI sebagai bentuk terukur dari apa yang dikatakan pelanggan mereka butuhkan, dan SLO sebagai target kerja yang menjaga SLA aman.

[Ketersediaan](https://en.wikipedia.org/wiki/Availability) adalah SLI yang paling dikenal dan dibahas rinci di tempat lain (lihat topik 5.3, Metrik ketersediaan). Latensi, kebenaran, kesegaran, dan throughput juga kandidat. Keterampilannya adalah memilih indikator dari apa yang dipedulikan pengguna, bukan dari apa yang mudah dikumpulkan. Pemakaian CPU pada server mudah dikumpulkan dan sedikit berkata tentang apakah pelanggan dapat membayar. Porsi permintaan pembayaran yang selesai dalam dua detik berkata banyak. Untuk latensi, laporkan [persentil](https://en.wikipedia.org/wiki/Percentile), bukan rata-rata, karena rata-rata menyembunyikan ekor lambat yang diperhatikan pengguna (lihat topik 1.6, Literasi statistik untuk metrik layanan, dan topik 5.4, Metrik kapasitas dan kinerja).

## Prinsip utama

- **Mulai dari pengguna, bukan server.** Pilih indikator yang menggambarkan pengalaman yang dikenali seseorang, seperti “pembayaran saya berhasil,” dan bekerja mundur ke apa yang diukur.
- **Target di bawah 100 persen adalah keputusan, bukan pengakuan.** Keandalan sempurna tak tercapai dan tak terjangkau, dan pengguna biasanya tak dapat membedakan di luar suatu titik. Anggaran membuat pertukaran itu eksplisit.
- **Tetapkan tujuan bersama orang yang bergantung padanya.** SLO adalah perjanjian negosiasi antara produk, operasi, dan pelanggan, bukan angka yang dipilih satu tim sendirian.
- **Sepakati konsekuensi sebelum anggaran habis.** Kebijakan anggaran kesalahan yang ditulis pada pekan tenang diikuti pada pekan penuh tekanan. Kebijakan yang dikarang selama gangguan diperdebatkan.
- **Beri peringatan berdasarkan pembakaran, bukan setiap kedipan.** Panggil orang hanya ketika anggaran dikonsumsi cukup cepat untuk mengancam tujuan, dan rutekan pembakaran lebih lambat ke tiket.
- **SLO menggambarkan layanan, tidak pernah orang.** Anggaran milik layanan dan timnya. Ia tidak pernah skor untuk insinyur.

## Definisi metrik

Metrik di bawah menggambarkan sistem SLO untuk suatu layanan. Empat yang pertama adalah inti praktik, dan dua terakhir menggambarkan seberapa sehat praktik itu sendiri. Setiap jam dan batas dinyatakan di kolom rumus. “Peristiwa valid” adalah peristiwa yang dihitung ke SLI setelah pengecualian yang disepakati dalam dokumen SLO, seperti permintaan dari uji beban tim sendiri, yang dikecualikan.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pencapaian SLI | Porsi peristiwa valid yang baik, untuk satu indikator dari satu layanan | peristiwa baik / peristiwa valid, untuk jendela dari awal sampai akhir periode pelaporan; peristiwa yang dikecualikan dokumen SLO (uji beban, pemeliharaan terencana yang diumumkan di muka, jika SLO menyatakannya) dikeluarkan dari pembilang dan penyebut | persen | Telemetri load balancer, aplikasi, atau probe sintetis; platform pemantauan atau observabilitas | Manajemen tingkat layanan; manajemen pemantauan dan peristiwa | Definisi selesai untuk operabilitas; tinjauan pemangku kepentingan atas kesehatan layanan | Berkelanjutan, dilaporkan harian dan per jendela |
| Kepatuhan SLO | Apakah SLI memenuhi tujuan selama jendela SLO, dan untuk berapa banyak jendela terbaru | jendela tempat pencapaian SLI berada pada atau di atas tujuan / jendela yang dievaluasi, selama 12 bulan terakhir; jendela yang masih terbuka dikecualikan | persen jendela | Riwayat pencapaian SLI | Manajemen tingkat layanan; perbaikan berkelanjutan | Tujuan tim atau kesepakatan kerja tentang keandalan | Bulanan, dengan tren kuartalan |
| Sisa anggaran kesalahan | Bagian anggaran yang belum dibelanjakan dalam jendela saat ini | 1 - (peristiwa buruk sejauh ini / peristiwa buruk yang diizinkan untuk seluruh jendela), dengan peristiwa buruk yang diizinkan = (1 - SLO) x perkiraan peristiwa valid untuk seluruh jendela; jam dimulai pada awal jendela dan berhenti pada akhir jendela | persen anggaran | Pencapaian SLI dan perkiraan volume | Manajemen tingkat layanan; manajemen risiko | Pemeriksaan kesiapan rilis; masukan pekerjaan terencana | Harian, ditinjau mingguan |
| Laju pembakaran | Kecepatan anggaran dibelanjakan relatif terhadap laju belanja merata | (peristiwa buruk / peristiwa valid pada periode tinjau-balik) / (1 - SLO); periode tinjau-balik dinyatakan, misalnya 1 jam atau 6 jam | rasio (1 berarti tepat sesuai anggaran) | Telemetri SLI pada resolusi waktu halus | Manajemen pemantauan dan peristiwa; manajemen insiden | Aturan peringatan siaga; pemicu swarming | Berkelanjutan, dievaluasi dalam aturan peringatan |
| Kepatuhan pada kebijakan anggaran | Seberapa sering konsekuensi yang disepakati diterapkan ketika pemicu dalam kebijakan anggaran kesalahan tercapai | pemicu pada periode itu tempat tindakan kebijakan diambil dalam waktu yang disepakati / pemicu tercapai pada periode itu; pemicu yang dikesampingkan secara resmi dengan alasan tercatat dihitung terpisah, tidak dikeluarkan | persen | Dokumen kebijakan, log keputusan, dan riwayat backlog | Manajemen tingkat layanan; pemberdayaan perubahan | Kesepakatan kerja; tindak lanjut retrospektif | Kuartalan |
| Cakupan SLO | Porsi perjalanan pengguna kritis, atau layanan dalam lingkup, yang punya SLO terkini dan SLI yang berfungsi | layanan atau perjalanan dalam lingkup dengan setidaknya satu SLO yang data SLI-nya tiba dalam 7 hari terakhir / layanan atau perjalanan dalam lingkup; “dalam lingkup” didaftar dalam katalog layanan (service catalogue dalam istilah ITIL) | persen | Katalog layanan, register SLO, dan konfigurasi pemantauan | Manajemen katalog layanan; manajemen tingkat layanan | Daftar kepemilikan layanan tim | Kuartalan |

Tinjau-balik laju pembakaran dan jendela SLO adalah pilihan. Jendela bergulir 28 hari mencakup pekan utuh. Nyatakan pilihan dalam dokumen SLO dan jaga tetap stabil, kalau tidak tren akan menyesatkan.

## Rekomendasi

### Pilih indikator dari apa yang dipedulikan pengguna

**1. Mulai dengan perjalanan pengguna kritis.** Daftar tiga sampai enam hal yang harus dapat dilakukan pengguna agar layanan layak dipakai, seperti masuk, mencari, membayar, dan mengunduh laporan. Tulis masing-masing sebagai kalimat dari sisi pengguna. Lalu pilih SLI yang menunjukkan apakah kalimat itu benar. Ini menjaga SLO tetap sedikit dan mencegah katalog pengukur teknis yang tak dibaca siapa pun.

**2. Nyatakan setiap SLI sebagai peristiwa baik atas peristiwa valid.** Rasio mudah dijelaskan, mudah diagregasi, dan mudah diubah menjadi anggaran. Definisikan “baik” dengan ambang yang akan diterima pengguna, dan definisikan “valid” agar lalu lintas yang tak dapat Anda layani secara wajar, seperti permintaan yang diblokir karena penyalahgunaan, dikecualikan dengan cara terdokumentasi. Tulis kedua definisi ke dalam dokumen SLO, karena penyebut adalah tempat sebagian besar ketidaksepakatan bersembunyi.

**3. Ukur sedekat mungkin dengan pengguna.** Tingkat keberhasilan sisi server dapat sempurna sementara masalah jaringan atau klien membuat layanan tak dapat dipakai. Ukur di load balancer atau tepi, dan tambahkan probe sintetis atau pengukuran sisi klien untuk perjalanan terpenting. Setiap titik pengukuran punya biaya dan titik butanya, jadi catat mana yang dipakai tiap SLI (lihat topik 1.5, Sumber data dan instrumentasi).

**4. Pakai persentil untuk latensi, dengan ambang.** “95 persen permintaan pencarian selesai di bawah 800 milidetik” adalah SLI. “Rata-rata latensi” bukan, karena beberapa permintaan cepat dapat mengimbangi banyak yang lambat. Di mana membantu, pakai dua ambang, seperti median dan persentil ke-99, karena ekor lambat membentuk bagaimana layanan terasa (lihat topik 5.4, Metrik kapasitas dan kinerja).

### Tetapkan tujuan yang dapat dibela orang

**5. Tetapkan SLO pertama dari kinerja saat ini dan kebutuhan pengguna, lalu perketat.** Ukur SLI selama beberapa pekan, tanyakan pengguna dan staf dukungan tingkat apa yang mereka perhatikan, dan tetapkan tujuan yang dapat dipenuhi layanan hari ini dengan sedikit ruang. Tujuan yang ditetapkan jauh di atas kinerja saat ini adalah pelanggaran permanen, dan orang berhenti melihatnya. Tujuan yang ditetapkan jauh di bawah yang didapat pengguna membiarkan mutu merosot tanpa terlihat. Tinjau kembali setelah satu kuartal.

**6. Jaga SLO lebih ketat daripada SLA, dan jaga terpisah.** Jika perjanjian pelanggan menjanjikan 99,5 persen, tujuan tim mungkin 99,9 persen, sehingga anggaran habis sebelum garis kontraktual terlampaui. Jangan menjadikan SLO dan SLA angka yang sama, dan jangan melaporkan satu sebagai yang lain. Perjanjian adalah dokumen komersial dan hukum, dan tujuan adalah aturan keputusan rekayasa (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

**7. Perhitungkan dependensi.** Layanan tidak dapat lebih andal daripada yang menjadi tumpuannya, kecuali ia menurun dengan anggun. Daftar dependensi kunci, termasuk pemasok, dan tanyakan apa yang disiratkan kinerja sebenarnya mereka bagi tujuan Anda.

### Jalankan anggaran sebagai alat keputusan

**8. Tulis kebijakan anggaran kesalahan sebelum Anda membutuhkannya.** Kebijakan menyatakan apa yang terjadi pada tingkat konsumsi yang didefinisikan. Versi sederhana punya tiga langkah: operasi normal selama anggaran tersisa, tinjauan tambahan atas perubahan berisiko dan prioritas untuk pekerjaan keandalan ketika porsi yang dinyatakan telah dibelanjakan, dan jeda rilis fitur tak esensial ketika habis sampai anggaran pulih. Namai siapa yang boleh memberi pengecualian dan bagaimana dicatat. Pemimpin produk dan operasi sebaiknya sama-sama menandatanganinya, agar kebijakan berlaku sama pada kedua sisi.

**9. Belanjakan anggaran dengan sengaja.** Anggaran yang tak pernah disentuh menyarankan tujuan terlalu ketat atau tim terlalu hati-hati. Pakai anggaran sisa untuk eksperimen, irama rilis lebih cepat, peluncuran canary, dan [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle) yang memungkinkan menguji di produksi dengan paparan terbatas, dan pakai [rilis canary](https://en.wikipedia.org/wiki/Canary_release) untuk menangkap masalah selagi hanya porsi kecil pengguna yang terdampak. Perlakukan anggaran yang konsisten tak tersentuh sebagai dorongan untuk bertanya apakah tujuan cocok dengan kebutuhan pengguna (lihat topik 4.5, Metrik rilis dan deployment).

**10. Beri peringatan pada beberapa laju pembakaran.** Pembakaran cepat, seperti laju yang cukup tinggi untuk membelanjakan porsi besar anggaran dalam satu jam, memanggil orang. Pembakaran lambat, seperti laju sedang yang masih akan menghabiskan anggaran dalam beberapa hari, membuat tiket untuk jam kerja. Memakai dua atau lebih jendela tinjau-balik menangkap kegagalan mendadak dan kebocoran lambat, dan mengurangi panggilan untuk kedipan singkat yang berbiaya sedikit anggaran. Bab Site Reliability Workbook tentang memberi peringatan pada SLO menjelaskan polanya, dan ambang sebaiknya disetel untuk layanan Anda dan bukan disalin (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan).

**11. Hubungkan insiden, masalah, dan pembelajaran dengan anggaran.** Setelah insiden, catat berapa banyak anggaran yang dikonsumsinya di samping durasi dan dampaknya. Pakai angka itu untuk memprioritaskan catatan masalah dan tindakan lanjutan (lihat topik 4.1, Metrik manajemen masalah, dan topik 4.2, Metrik postmortem dan pembelajaran). Biaya anggaran juga memberi tinjauan insiden besar satuan bersama untuk membandingkan kegagalan yang sangat berbeda (lihat topik 3.4, Metrik insiden besar).

### Jaga praktik tetap jujur dan hidup

**12. Tinjau SLO terhadap kenyataan tiap kuartal.** Bandingkan SLO dengan kontak dukungan, keluhan, dan hasil kepuasan. Jika pengguna tidak puas sementara SLO hijau, SLI salah atau targetnya terlalu longgar. Jika SLO merah dan tak ada yang mengeluh, target mungkin terlalu ketat. Catat setiap perubahan dan alasannya, dan tampilkan perubahan pada bagan tren (lihat topik 6.2, Perjanjian tingkat pengalaman).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Pencapaian SLI | Mempersempit peristiwa “valid” sampai kegagalan hilang, seperti mengecualikan permintaan yang dicoba ulang atau seluruh kelas galat; mengukur hanya komponen paling sehat; probing hanya dari lokasi yang menguntungkan | Terbitkan definisi SLI dan pengecualian dalam dokumen SLO dengan log perubahan; bandingkan SLI dengan kontak dukungan dan keluhan pengguna; tinjauan berkala peristiwa yang dikecualikan dan volumenya |
| Kepatuhan SLO | Menetapkan tujuan cukup rendah untuk selalu lulus; mengubah panjang jendela setelah periode buruk; mendefinisikan ulang pelanggaran sebagai periode pemeliharaan | Tujuan ditetapkan dengan masukan pengguna dan ditinjau menurut jadwal; jendela tetap dalam dokumen; hitungan pengecualian dan perubahan jendela tak terencana dilaporkan di samping kepatuhan |
| Sisa anggaran kesalahan | Mengklasifikasi ulang peristiwa buruk sebagai dikecualikan; menggelembungkan volume perkiraan agar hitungan buruk yang diizinkan tampak lebih besar; mengatur ulang jendela lebih awal | Peristiwa buruk yang diizinkan dihitung dari volume sebenarnya pada akhir jendela; volume peristiwa yang dikecualikan ditampilkan di samping anggaran; tanggal jendela tetap di muka |
| Laju pembakaran | Menyetel ambang peringatan agar pembakaran tak pernah memicu; memakai tinjau-balik begitu panjang sehingga pembakaran cepat tersamar rata-rata | Uji cakupan peringatan memakai insiden masa lalu (“apakah aturan ini akan memanggil?”); tingkat peringatan yang dapat ditindak dan hitungan deteksi terlewat (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan) |
| Kepatuhan pada kebijakan anggaran | Memberi pengecualian secara rutin; menulis kebijakan dengan pemicu yang tak pernah tercapai; menghitung tiket keandalan token sebagai tindakan kebijakan | Pengecualian dihitung dan ditinjau terpisah; porsi pengecualian pada periode itu; pekerjaan keandalan yang selesai (lihat topik 4.1, Metrik manajemen masalah) |
| Cakupan SLO | Menambah SLO remeh ke setiap layanan untuk menaikkan persentase; menghitung perjalanan sebagai tercakup padahal tak ada data mengalir | Pemeriksaan kesegaran data SLI (data tiba dalam 7 hari terakhir); tinjauan apakah SLO mencakup perjalanan kritis, bukan titik akhir sekunder |

Pembacaan yang sehat menunjukkan SLI yang melacak apa yang dilaporkan pengguna, tujuan yang kadang terlewat dan kadang terpenuhi dengan nyaman, dan anggaran yang dibelanjakan dengan sengaja. Kebijakan diterapkan ketika pemicunya tercapai, pengecualian jarang dan tercatat, dan setiap perubahan definisi terlihat pada bagan. Layanan yang selalu pada 100 persen sisa anggaran, atau yang selalu dilanggar, pantas mendapat percakapan tentang tujuan, bukan pujian atau penyalahan. Ingat bahwa angka tunggal apa pun adalah dorongan untuk bertanya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| SLI perjalanan pengguna | Cocok dengan yang dirasakan pengguna; sedikit jumlahnya; mudah dijelaskan kepada non-insinyur | Butuh upaya menginstrumentasi ujung ke ujung; mungkin melewatkan kerusakan internal yang belum mencapai pengguna |
| SLI komponen atau sumber daya (CPU, memori, kedalaman antrean) | Murah dikumpulkan; berguna untuk diagnosis dan kapasitas | Proksi buruk untuk pengalaman pengguna; menghasilkan banyak peringatan yang tak penting |
| Jendela bergulir | Mulus; tanpa tebing di akhir bulan; selalu terkini | Lebih sulit dijelaskan kepada eksekutif daripada bulan kalender; hari buruk bertahan sepanjang jendela |
| Peringatan laju pembakaran | Memanggil ketika tujuan benar-benar berisiko; lebih sedikit alarm palsu | Lebih rumit dikonfigurasi dan diuji; ambang perlu disetel per layanan |

Pilih sedikit SLI, tetapkan bersama pengguna, dan biarkan anggaran memutuskan laju perubahan. Ketatnya yang tepat adalah tujuan terlonggar yang masih menjaga pengguna puas, karena setiap sembilan tambahan lebih mahal daripada yang sebelumnya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa yang perlu dapat dilakukan pengguna layanan ini, dan bagaimana kita tahu jika mereka tidak bisa?**
Minta setiap orang menuliskan tiga hal terpenting yang dilakukan pengguna dengan layanan, tanpa melihat dasbor apa pun. Bandingkan daftar dan catat perbedaan antara produk, operasi, dan dukungan. Lalu tanyakan perjalanan mana yang saat ini punya SLI. Fasilitator sebaiknya mencari perjalanan penting tanpa pengukuran dan pengukuran yang menggambarkan tak ada perjalanan.

**2. Jika SLO kita 99,9 persen dan kita memenuhinya, apakah pengguna akan senang, dan bagaimana kita tahu?**
Taruh SLO saat ini di samping kuartal terakhir kontak dukungan, keluhan, dan hasil kepuasan. Tanyakan apakah keduanya sepakat. Jika SLO hijau dan pengguna tidak puas, SLI atau targetnya perlu dikerjakan. Jika pengguna puas dan SLO merah, target mungkin lebih ketat daripada yang dibutuhkan siapa pun. Sepakati satu tindakan untuk menyatukan tujuan dan pengalaman.

**3. Apa yang sebenarnya akan kita lakukan secara berbeda jika anggaran kesalahan habis?**
Bacakan kebijakan anggaran kesalahan saat ini dengan lantang, atau susun bersama jika belum ada. Tanyakan siapa yang akan menghentikan apa, dan siapa yang berwenang memberi pengecualian. Fasilitator sebaiknya mendesak tindakan konkret, seperti menjeda rilis tak esensial dan memindahkan orang bernama ke pekerjaan keandalan, bukan niat umum. Kebijakan yang tak dipercaya akan diikuti siapa pun lebih buruk daripada tanpa kebijakan.

**4. Kapan terakhir kita mengambil risiko karena punya anggaran sisa?**
Bahas apakah tim memakai anggarannya atau hanya menjaganya. Lihat kuartal terakhir: adakah periode ketika anggaran nyaris tak tersentuh sementara rilis lambat? Tanyakan apa yang akan dicoba tim jika tahu aman melakukannya. Pertanyaan ini memunculkan kehati-hatian berlebih, dan jawabannya sering menunjuk pada rilis canary, toggle, atau pipeline lebih cepat yang memungkinkan tim memakai anggarannya dengan baik.

**5. Peringatan kita mana yang akan menyala tepat waktu untuk insiden buruk terakhir kita, dan mana yang akan menyala tanpa guna?**
Ambil insiden signifikan terakhir dan putar ulang riwayat peringatan terhadapnya. Hitung panggilan yang tiba, berapa lama setelah dampak dimulai, dan berapa banyak panggilan tiba untuk peristiwa yang berbiaya hampir nol anggaran. Bahas apakah peringatan laju pembakaran akan lebih baik. Tujuannya daftar pendek perubahan peringatan, masing-masing dengan pemilik, bukan diskusi menyalahkan tentang siapa yang siaga.

**6. Siapa yang memiliki tiap SLO, dan kapan terakhir kita mengubahnya dengan sengaja?**
Daftar SLO dan tulis pemilik di samping masing-masing, sebagai tim atau peran. Tanyakan kapan masing-masing terakhir ditinjau dan apa yang berubah. SLO yang tak disentuh siapa pun selama setahun adalah tanda bahwa ia tak lagi menginformasikan keputusan. Sepakati tanggal tinjauan untuk masing-masing, dan sepakati siapa yang berhak memensiunkan SLO yang berhenti berguna.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman mendapat aturan jelas tentang seberapa cepat bergerak. Ketika anggaran tersisa, mereka dapat merilis lebih sering dan mencoba perubahan lebih berani. Ketika rendah, mereka menaruh pekerjaan keandalan di backlog tanpa negosiasi panjang. Mereka sebaiknya membantu memilih indikator karena tahu perjalanan mana yang penting, dan menginstrumentasi fitur baru dengan SLI dalam benak sejak awal (lihat topik 2.8, Metrik DORA). Anggaran adalah sumber daya tim untuk direncanakan, tidak pernah angka untuk disembunyikan.

### Tim layanan dan operasi

Tim operasi memakai SLO untuk memutuskan apa yang pantas memanggil dan apa yang dapat menunggu sampai pagi. Peringatan laju pembakaran mengurangi kebisingan dan mengikat pekerjaan siaga pada apa yang dirasakan pengguna (lihat topik 5.7, Metrik pekerjaan berulang dan siaga). Mereka menjaga definisi SLI tetap jujur, merawat telemetri di baliknya, dan mencatat biaya anggaran dalam catatan insiden dan masalah.

### Kepemimpinan dan tata kelola

Pemimpin sebaiknya mengajukan tiga pertanyaan: apa tujuannya, berapa banyak anggaran tersisa, dan apa yang akan kita lakukan jika habis? Mereka menandatangani kebijakan anggaran kesalahan dan mendukung tim ketika kebijakan menyatakan untuk memperlambat. Mereka menghindari mengubah kepatuhan SLO menjadi metrik bonus, yang mengundang penyempitan definisi dan penetapan target lunak.

### Pelanggan dan pengguna

Pelanggan diuntungkan ketika tujuan mencerminkan apa yang mereka butuhkan dan ketika mereka dapat melihat bagaimana layanan berkinerja terhadapnya. Mereka sebaiknya dimintai pendapat saat tujuan ditetapkan, karena toleransi mereka terhadap kelambatan atau downtime bervariasi menurut tugas dan waktu hari. Ukuran pengalaman, seperti kepuasan dan upaya, memeriksa apakah SLO menangkap apa yang mereka rasakan (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah punya tim checkout, tim platform, dan service desk. Layanan checkout kritis bagi bisnis. Semua angka dalam contoh ini bersifat ilustratif.

Tim mendefinisikan satu SLI untuk perjalanan “membayar pesanan”: porsi permintaan pembayaran valid yang mengembalikan sukses dalam 2 detik, diukur di load balancer. Permintaan valid mengecualikan uji beban tim sendiri dan permintaan yang ditolak layanan penipuan secara desain. SLO adalah 99,9 persen selama 28 hari bergulir. Jendela membawa perkiraan 12.000.000 permintaan valid, sehingga anggarannya adalah 12.000 permintaan buruk (0,1 persen). Kebijakan anggaran kesalahan, ditandatangani kepala produk dan kepala platform, punya tiga tingkat: pada 50 persen anggaran terbelanjakan, perubahan berisiko butuh peninjau kedua dan peluncuran canary; pada 75 persen, pekerjaan keandalan mendapat prioritas dalam percakapan perencanaan berikutnya; pada 100 persen, rilis fitur tak esensial dijeda sampai anggaran pulih.

Pada hari ke-10 jendela tim melihat 7.800 permintaan buruk dari sekitar 4.285.714 yang diperkirakan sejauh ini, yang memberi pencapaian SLI sekitar 99,82 persen, 65 persen anggaran terbelanjakan, dan jendela yang baru 36 persen berlalu. Laju pembakaran pada periode itu sekitar 1,8, jadi pada laju ini anggaran habis sekitar hari ke-15. Satu deployment buruk menyumbang 5.000 dari kegagalan. Catatan insiden menunjukkan kegagalan berlangsung 22 menit, tinjauan insiden besar mengidentifikasi pemeriksaan yang hilang dalam pipeline, dan biaya anggaran insiden dicatat dalam catatan masalah (lihat topik 4.1, Metrik manajemen masalah).

Tim mengikuti kebijakan. Tindakan tingkat kedua berlaku seketika, sehingga perubahan berisiko butuh peluncuran canary, dan rapat perencanaan memindahkan pemeriksaan pipeline ke puncak antrean kerja. Pemilik produk menerima jeda pada fitur promosi yang tak mendesak. Pada hari ke-28 anggaran 94 persen terbelanjakan, dan tim menyelesaikan jendela dalam tujuan.

Risiko manipulasi muncul dalam tinjauan. Tim lain, yang menjalankan layanan pencarian pengecer, melaporkan 99,95 persen untuk kuartal itu sementara service desk mencatat kenaikan kontak “pencarian tidak berfungsi.” Menyelidiki, tim platform mendapati bahwa tim pencarian telah mendefinisikan ulang “valid” untuk mengecualikan permintaan yang dicoba ulang dalam 5 detik, yang menghapus banyak kegagalan nyata. Tinjauan memulihkan definisi asli, menyatakan ulang kuartal itu, dan menambah dua pagar pembatas: setiap perubahan definisi dicatat dalam dokumen SLO dengan alasan, dan pencapaian SLI dibandingkan dengan kontak dukungan tiap bulan. Tak seorang pun berbohong, karena perubahan dibuat untuk mengurangi kebisingan, jadi perbaikannya definisi yang lebih jelas, bukan teguran.

## Sudut pandang sektor

**Startup.** Mulai dengan satu SLO untuk perjalanan terpenting, diukur di tepi, dengan kebijakan sederhana yang muat di satu halaman. Jangan membangun platform untuk lusinan SLO. Anggaran membantu tim kecil kurang berdebat tentang apakah mengirim pada hari Jumat.

**Bisnis kecil.** Bisnis kecil sering bergantung pada alat yang dihosting dan pemasok, jadi SLI dapat berasal dari data status pemasok atau probe eksternal sederhana. Baca tingkat layanan pemasok secara tertulis dan periksa terhadap kebutuhan Anda sendiri.

**Perusahaan besar.** Banyak layanan, tim, dan pemasok menaikkan taruhan untuk konsistensi. Sediakan templat bersama untuk dokumen SLO, register umum, dan cara standar menghitung pencapaian dan anggaran, agar pemimpin dapat membandingkan dan merekap tanpa berdebat tentang definisi. Biarkan SLO dimiliki tim layanan dan register dikurasi secara terpusat.

**Pemerintah dan sektor publik.** Layanan sering harus memenuhi target undang-undang atau terbitan, dan kegagalan dapat dilaporkan secara publik. Jaga komitmen kontraktual atau undang-undang terpisah dari tujuan internal, dan pastikan SLO internal lebih ketat. Dokumentasikan definisi SLI, pengecualian, dan garis keturunan data untuk audit, dan rencanakan aksesibilitas dan pengguna yang tak dapat memilih penyedia alternatif (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah lebih sedikit argumen dan keputusan lebih baik tentang keandalan. Tanpa tujuan, pekerjaan keandalan bersaing dengan fitur atas kekuatan siapa yang berargumen paling keras. Dengan tujuan dan anggaran, pertukaran terlihat dan disepakati di muka, dan pengguna mendapat layanan seandal yang mereka butuhkan, tanpa tim membayar keandalan melampaui titik itu.

Biayanya punya empat bagian. Yang pertama desain: lokakarya untuk memilih perjalanan, indikator, dan tujuan, dan menulis kebijakan. Yang kedua instrumentasi: telemetri di tempat yang tepat, probe, dan pipeline yang mengubah peristiwa menjadi pencapaian dan anggaran (lihat topik 1.5, Sumber data dan instrumentasi). Yang ketiga operasi: aturan peringatan, dasbor, tinjauan kuartalan, dan waktu menjaga definisi tetap terkini. Yang keempat biaya peluang ketika kebijakan menjeda pekerjaan fitur, yaitu biaya menghormati perjanjian dan alasan menyepakatinya sebelum tekanan tiba.

Imbal hasil muncul dalam pola yang dapat dilacak tim sendiri: lebih sedikit panggilan yang tak butuh tindakan, debat lebih singkat tentang apakah merilis, pekerjaan keandalan dijadwalkan sebelum anggaran habis dan bukan setelah insiden besar, dan lebih sedikit kejutan bagi pelanggan. Gambarkan manfaat dengan membandingkan angka tim sendiri sebelum dan sesudah, seperti panggilan per rotasi dan porsi anggaran yang dikonsumsi insiden terbesar.

## Anti-pola dan jebakan

- **Terlalu banyak SLO.** Lusinan tujuan mengencerkan perhatian, dan tak seorang pun dapat mengatakan mana yang penting. Mulai dengan perjalanan pengguna kritis dan pensiunkan sisanya.
- **SLO sama dengan SLA.** Melaporkan satu angka sebagai keduanya menyingkirkan margin keselamatan dan mencampur aturan rekayasa dengan janji komersial. Jaga tujuan lebih ketat daripada perjanjian.
- **Kebijakan yang tak pernah ditegakkan.** Jika anggaran habis dan tak ada yang berubah, praktik kehilangan kredibilitas. Minta pemimpin menandatangani kebijakan dan catat setiap pengecualian dengan alasannya.
- **Memakai anggaran sebagai kartu skor untuk orang.** Memeringkat insinyur atau staf siaga menurut anggaran yang dibelanjakan membuat orang menyembunyikan insiden dan mempersempit definisi. Atribusikan anggaran ke layanan dan bahas sebab di tingkat sistem (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).
- **Memberi peringatan pada setiap penurunan.** Memanggil pada gejala mentah menciptakan kelelahan peringatan dan melatih orang mengabaikan panggilan. Panggil pada laju pembakaran dan kirim pembakaran lambat ke tiket.
- **Menetapkan lalu melupakan.** SLO yang tak ditinjau siapa pun menjauh dari yang dibutuhkan pengguna. Jadwalkan tinjauan kuartalan dan catat apa yang berubah dan mengapa.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Indikator dan tujuan | Keandalan digambarkan dalam kata-kata; uptime server dilaporkan | Beberapa tim mendefinisikan SLI; target bervariasi dan jarang ditinjau | Perjalanan pengguna kritis punya SLI dan SLO terdokumentasi dalam templat bersama | SLO diplot tren, diperiksa terhadap umpan balik pengguna, dan diperketat atau dilonggarkan dengan bukti | SLO disepakati bersama pelanggan dan pemasok dan diselaraskan dengan layanan dan kontrak yang bergantung |
| Anggaran kesalahan dan kebijakan | Tanpa anggaran; keandalan versus fitur diputuskan dengan argumen | Anggaran dihitung untuk beberapa layanan; tak ada konsekuensi yang disepakati | Kebijakan tertulis, ditandatangani produk dan operasi, dengan pemicu terdefinisi | Kepatuhan kebijakan diukur, pengecualian ditinjau, anggaran menginformasikan perencanaan rilis | Keputusan anggaran dikoordinasikan antartim yang berbagi dependensi; kebijakan direvisi seiring kondisi berubah |
| Peringatan dan respons | Peringatan ambang pada sumber daya mentah; banyak panggilan | Beberapa peringatan laju pembakaran; ambang disalin dari contoh | Peringatan laju pembakaran multi-jendela untuk SLO kunci, dengan tiket untuk pembakaran lambat | Mutu peringatan diukur dan disetel memakai insiden masa lalu | Peringatan diselaraskan di rantai layanan, dan perbaikan digerakkan oleh tinjauan bersama |

## Daftar periksa

- [ ] Perjalanan pengguna kritis untuk layanan didaftar, masing-masing ditulis dari sisi pengguna.
- [ ] Setiap SLI didefinisikan sebagai peristiwa baik atas peristiwa valid, dengan pengecualian tertulis.
- [ ] SLI latensi memakai persentil dan ambang yang dinyatakan, bukan rata-rata.
- [ ] Setiap SLO menyatakan target, jendela, dan di mana SLI diukur.
- [ ] SLO lebih ketat daripada SLA apa pun, dan keduanya dilaporkan terpisah.
- [ ] Kebijakan anggaran kesalahan ada, ditandatangani pemimpin produk dan operasi, dan menamai siapa yang boleh memberi pengecualian.
- [ ] Peringatan laju pembakaran memakai setidaknya dua periode tinjau-balik, dan pembakaran lambat membuat tiket, bukan panggilan.
- [ ] Setiap catatan insiden menunjukkan anggaran yang dikonsumsinya.
- [ ] Pencapaian SLI dibandingkan dengan kontak dukungan dan hasil kepuasan tiap bulan.
- [ ] Setiap SLO punya pemilik (tim atau peran) dan tanggal tinjauan, dan perubahan dicatat dengan alasan.
- [ ] Tak ada hasil SLO yang dipakai untuk memeringkat atau menghargai individu.

## Prompt AI

**Susun SLI kandidat dari perjalanan pengguna.**

```text
Saya menjalankan [service name], yang dipakai [type of users] untuk melakukan
[list of critical user journeys]. Kami dapat mengukur di [list of measurement
points, for example load balancer, application logs, synthetic probe]. Untuk
setiap perjalanan, usulkan satu atau dua SLI kandidat yang ditulis sebagai
peristiwa baik atas peristiwa valid, dengan saran definisi “baik,” “valid,” dan
pengecualian. Catat kekuatan dan titik buta tiap titik pengukuran. Jangan
mengarang nilai target atau acuan; tanyakan kepada saya apa yang ditoleransi
pengguna. Daftar asumsi Anda.
```

**Susun kebijakan anggaran kesalahan.**

```text
Bantu saya menyusun kebijakan anggaran kesalahan untuk [service name] dengan SLO
[target] selama [window]. Pemangku kepentingan adalah [product role] dan
[operations role]. Usulkan tingkat pemicu, tindakan pada masing-masing, siapa yang
boleh memberi pengecualian dan bagaimana dicatat, dan bagaimana kebijakan
ditinjau. Jaga satu halaman dan tandai keputusan yang butuh sponsor manusia.
Jangan mengarang ambang dari organisasi lain; sajikan opsi dan pertukarannya.
Daftar asumsi Anda.
```

**Tinjau SLO untuk risiko manipulasi.**

```text
Berikut dokumen SLO kami untuk [service name]: [paste SLI definition, exclusions,
target, window, and change log]. Identifikasi cara SLI dapat dipersempit, jendela
atau target diubah, atau peristiwa dikecualikan sehingga hasil tampak lebih baik
daripada pengalaman pengguna. Untuk setiap risiko, sarankan metrik atau praktik
pagar pembatas. Jangan mengasumsikan niat. Daftar asumsi Anda dan pertanyaan yang
harus saya jawab.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik terkait, seperti ketersediaan, kualitas peringatan, dan insiden besar, dan pagar pembatas yang harus berada di samping setiap ukuran SLO.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penyuntingan topik ini menjaga setiap metrik dalam tabel manipulasi dan setiap referensi silang tetap berjudul.

## Poin penting

- Pilih sedikit SLI dari apa yang dilakukan pengguna, dan nyatakan masing-masing sebagai peristiwa baik atas peristiwa valid.
- SLO di bawah 100 persen adalah keputusan tentang risiko, dan anggaran kesalahan adalah ruang yang ditinggalkan keputusan itu untuk perubahan.
- Tulis kebijakan anggaran kesalahan di muka, tandatangani di tingkat pimpinan, dan catat setiap pengecualian.
- Beri peringatan pada laju pembakaran dengan lebih dari satu jendela tinjau-balik, agar panggilan mencerminkan risiko nyata bagi tujuan.
- Jaga definisi: catat setiap perubahan, dan bandingkan hasil SLI dengan apa yang dilaporkan pengguna.
- Atribusikan anggaran ke layanan dan tim, tidak pernah individu, dan tinjau tiap SLO setidaknya tiap kuartal.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
