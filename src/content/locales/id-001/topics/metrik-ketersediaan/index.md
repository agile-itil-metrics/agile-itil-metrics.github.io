# Metrik ketersediaan

**Ketersediaan adalah porsi waktu, atau permintaan pengguna, tempat layanan melakukan apa yang dibutuhkan penggunanya, dan ia hanya berkata jujur bila Anda mendefinisikan apa arti “hidup” dari sisi pengguna, menghitung gangguan terencana dan tak terencana secara terpisah, dan membaca aritmetika sembilan sebelum menjanjikannya.**

## Gambaran umum dan motivasi

Ketersediaan adalah angka yang paling banyak dikutip dalam manajemen layanan dan salah satu yang paling tidak tepat didefinisikan. Pernyataan seperti “layanan 99,9 persen tersedia bulan lalu” terdengar tepat, namun menyembunyikan setidaknya empat keputusan: apa yang dihitung sebagai layanan, apa yang dihitung sebagai “tersedia”, jam mana yang dalam lingkup, dan gangguan mana yang dikecualikan. Dua tim dapat melaporkan layanan yang sama pada bulan yang sama dan menerbitkan angka yang berbeda satu orde besaran tanpa salah satunya membuat kesalahan aritmetika.

Topik ini membuat keputusan itu eksplisit. Ia mencakup perhitungan uptime dan downtime, ketersediaan berbobot pengguna, gangguan terencana versus tak terencana, dan aritmetika sembilan. Ia dibangun di atas indikator tingkat layanan (SLI), tujuan tingkat layanan (SLO), dan anggaran kesalahan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan) dan pada pandangan kontraktual tentang tingkat layanan (lihat topik 5.1, Metrik SLA, OLA, dan XLA). Topik-topik itu menyatakan cara memilih target. Yang ini menyatakan cara menghitung angka yang dibandingkan dengan target.

### Istilah yang dipakai dalam topik ini

- **Ketersediaan** adalah kemampuan layanan melakukan apa yang dibutuhkan pengguna ketika mereka membutuhkannya, biasanya dinyatakan sebagai persentase selama suatu periode. Konsep umumnya dijelaskan dalam artikel tentang [ketersediaan tinggi](https://en.wikipedia.org/wiki/High_availability).
- **[Downtime](https://en.wikipedia.org/wiki/Downtime)** adalah periode ketika layanan tidak tersedia. Topik ini memakai **gangguan** untuk satu episode downtime berkelanjutan dan **degradasi** untuk periode ketika layanan berfungsi tetapi di bawah mutu yang disepakati.
- **Uptime** adalah komplemen downtime dalam jendela pengukuran. Ketersediaan berbasis waktu adalah uptime dibagi total waktu dalam lingkup.
- **Ketersediaan berbasis permintaan** adalah porsi permintaan valid yang berhasil, sehingga kegagalan yang memengaruhi 5 persen permintaan selama satu jam dihitung sebagai 5 persen lalu lintas satu jam, bukan sebagai satu jam penuh downtime.
- **Ketersediaan berbobot pengguna** memperluas pandangan berbasis permintaan dengan membobot kegagalan menurut jumlah atau kepentingan pengguna yang terdampak, misalnya dengan menghitung sesi gagal atau perjalanan gagal alih-alih permintaan mentah.
- **Perjanjian tingkat layanan (SLA)** adalah komitmen kepada pelanggan, dan **tujuan tingkat layanan (SLO)** adalah target internal untuk suatu indikator. Artikel [perjanjian tingkat layanan](https://en.wikipedia.org/wiki/Service-level_agreement) dan [tujuan tingkat layanan](https://en.wikipedia.org/wiki/Service-level_objective) memberi definisi umum.
- **Downtime terencana** adalah gangguan yang diumumkan di muka dan disetujui lewat pemberdayaan perubahan. **Downtime tak terencana** adalah semua yang lain. Batas antara keduanya adalah salah satu garis paling diperebutkan dalam pelaporan ketersediaan.
- **[Rata-rata waktu antarkegagalan](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF)** adalah rata-rata waktu operasi antargangguan, dan **[rata-rata waktu perbaikan](https://en.wikipedia.org/wiki/Mean_time_to_repair)** adalah rata-rata waktu memulihkan. Keduanya rata-rata, jadi buku ini membacanya sebagai distribusi (lihat topik 1.6, Literasi statistik untuk metrik layanan).
- **[Pemantauan sintetis](https://en.wikipedia.org/wiki/Synthetic_monitoring)** memakai probe berskrip yang berperilaku seperti pengguna dan melaporkan sukses atau gagal. **[Pemantauan pengguna nyata](https://en.wikipedia.org/wiki/Real_user_monitoring)** mencatat pengalaman pengguna sebenarnya saat mereka memakai layanan.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** adalah kerangka manajemen layanan TI yang paling dikenal. Dalam ITIL 4 praktik manajemen ketersediaan berkaitan dengan memastikan layanan menyampaikan tingkat ketersediaan yang disepakati, dan bekerja erat dengan manajemen pemantauan dan peristiwa, manajemen insiden, dan manajemen kelangsungan layanan.

### Mengapa satu angka tidak pernah cukup

Sepuluh gangguan empat menit dan satu gangguan empat puluh menit menghasilkan total downtime yang sama, namun terasa berbeda bagi pengguna dan menuntut respons berbeda. Pola pertama menunjuk pada layanan rapuh. Pola kedua menunjuk pada deteksi atau pemulihan lambat. Karena itu metrik di sini datang sebagai himpunan kecil, masing-masing dengan pagar pembatas, agar tim dapat membahas ketersediaan dengan jujur tanpa berlomba mendapat sembilan terbanyak.

### Bagaimana pandangan ITIL dan agile berbeda

Dalam ITIL, ketersediaan adalah atribut layanan yang dikelola, disepakati dengan pelanggan dan dilaporkan oleh manajemen tingkat layanan terhadap target yang dinyatakan, dengan jam layanan yang jelas dan pengecualian seperti pemeliharaan terencana.

Dalam praktik agile dan rekayasa keandalan situs (SRE), ketersediaan adalah satu SLI di antara beberapa, dibandingkan dengan SLO. Buku Google *Site Reliability Engineering* menyatakan bahwa ketersediaan berbasis waktu cocok untuk satu sistem, sedangkan tingkat keberhasilan permintaan cocok untuk layanan terdistribusi yang sebagian hidup setiap saat. Ia juga menyatakan 100 persen hampir tidak pernah target yang tepat, karena biaya tiap sembilan tambahan naik tajam.

Pakai disiplin ITIL tentang lingkup, jam, dan pengecualian yang disepakati untuk mendefinisikan penyebut. Pakai disiplin SRE tentang indikator berpusat pada pengguna dan anggaran kesalahan untuk mendefinisikan pembilang dan memutuskan apa yang dilakukan dengan hasilnya.

## Prinsip utama

- **Definisikan “tersedia” dari sisi pengguna.** Layanan yang menjawab pemeriksaan kesehatan sementara pengguna tidak dapat masuk adalah mati bagi orang yang penting.
- **Tuliskan penyebut.** Nyatakan batas layanan, jam dalam lingkup, zona waktu, dan jendela pengukuran sebelum menghitung apa pun.
- **Hitung gangguan terencana dan tak terencana terpisah.** Laporkan keduanya, bersama-sama, dan jangan pernah biarkan satu bersembunyi di dalam yang lain.
- **Utamakan ukuran berbasis permintaan dan berbobot pengguna untuk layanan terdistribusi.** Kegagalan parsial bukan uptime penuh maupun downtime penuh.
- **Ubah sembilan menjadi menit.** Target hanya dipahami ketika orang dapat mengatakan berapa menit kegagalan per bulan yang diizinkannya.
- **Pilih jumlah sembilan yang dibutuhkan pengguna.** Di luar titik itu, setiap sembilan tambahan berbiaya lebih daripada imbal hasilnya.
- **Gambarkan layanan, tidak pernah orang.** Ketersediaan milik layanan dan tim yang menjalankannya, dan tidak pernah skor individu.

## Definisi metrik

Setiap baris menyatakan jam dan batasnya. Waktu kalender dipakai kecuali baris menyatakan lain. Di mana ukuran memakai distribusi, laporkan median dan persentil ke-95, dan namai jendela.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ketersediaan berbasis waktu | Porsi waktu dalam lingkup tempat layanan memenuhi definisi tertulis “hidup” | (menit dalam lingkup pada jendela dikurangi menit downtime tak terencana) / menit dalam lingkup pada jendela. Jam dimulai pada probe gagal pertama yang kemudian dikonfirmasi sebagai dampak pengguna, atau pada awal dampak terkonfirmasi yang dicatat dalam tinjauan insiden; berhenti ketika layanan kembali memenuhi definisi. Downtime terencana dalam jam layanan yang disepakati ditampilkan terpisah, dan waktu di luar jam layanan yang disepakati dikecualikan dari penyebut | persen | Hasil pemantauan sintetis; catatan insiden dengan stempel waktu awal dampak dan pemulihan | Manajemen ketersediaan; manajemen tingkat layanan | SLI berbasis waktu untuk satu sistem (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan) | Bulanan |
| Ketersediaan berbasis permintaan | Porsi permintaan valid yang berhasil | permintaan valid yang berhasil / total permintaan valid pada jendela. Permintaan valid mengecualikan permintaan cacat dan galat klien yang disebabkan pemanggil; kegagalan yang disebabkan layanan, termasuk timeout, dihitung sebagai kegagalan. Dilaporkan per layanan dan per perjalanan pengguna | persen | Load balancer, gateway, atau log dan metrik aplikasi | Manajemen ketersediaan; manajemen pemantauan dan peristiwa | SLI tingkat keberhasilan dengan SLO dan anggaran kesalahan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan) | Tren harian, laporan bulanan |
| Ketersediaan berbobot pengguna | Ketersediaan yang dibobot menurut pengguna atau perjalanan yang terdampak, sehingga gangguan pada puncak dihitung lebih daripada satu semalam | 1 dikurangi (sesi pengguna gagal atau perjalanan gagal / total sesi pengguna atau perjalanan) pada jendela. Sesi dihitung gagal jika langkah kritis yang didefinisikan gagal; keberhasilan parsial dilaporkan sebagai porsi degradasi terpisah, tidak dilipat masuk | persen | Pemantauan pengguna nyata; log sesi aplikasi; peristiwa analitik | Manajemen ketersediaan; manajemen tingkat layanan | SLI berbasis perjalanan dan ukuran pengalaman dalam topik 6.2 (lihat topik 6.2, Perjanjian tingkat pengalaman) | Bulanan |
| Downtime tak terencana | Menit ketika layanan tidak tersedia tanpa pemberitahuan terlebih dahulu yang disetujui | Jumlah durasi gangguan pada jendela, dari awal dampak terkonfirmasi sampai pemulihan terkonfirmasi, untuk gangguan yang tidak diumumkan dan disetujui lewat pemberdayaan perubahan sebelum dimulai. Gangguan tumpang tindih pada layanan yang sama digabung, tidak dijumlahkan. Dilaporkan sebagai total menit, hitungan gangguan, dan median serta persentil ke-95 durasi gangguan | menit | Catatan insiden dengan stempel waktu awal dampak dan pemulihan | Manajemen insiden; manajemen ketersediaan | Waktu memulihkan dibaca sebagai distribusi (lihat topik 3.3, Waktu respons dan penyelesaian insiden) | Bulanan |
| Porsi downtime terencana | Proporsi semua downtime yang diumumkan dan disetujui di muka | menit downtime terencana / (menit downtime terencana ditambah tak terencana) pada jendela. Gangguan dihitung terencana hanya jika disetujui lewat catatan perubahan sebelum dimulai dan waktu awal serta akhirnya dikomunikasikan kepada pengguna; kelebihan di luar jendela yang disetujui diklasifikasi ulang sebagai tak terencana sejak jendela berakhir | persen | Catatan perubahan dengan jendela disetujui; catatan insiden; riwayat halaman status | Pemberdayaan perubahan; manajemen ketersediaan | Praktik rilis dan pemeliharaan yang mengutamakan deployment tanpa downtime (lihat topik 4.3, Metrik pemberdayaan perubahan) | Bulanan |
| Frekuensi dan jarak gangguan | Seberapa sering gangguan dimulai dan berapa lama layanan berjalan di antaranya | Hitungan gangguan yang dimulai pada jendela; dan untuk tiap pasang gangguan berurutan, menit uptime antara pemulihan yang pertama dan awal yang kedua, diringkas sebagai median dan persentil ke-5. Tidak dilaporkan sebagai satu rata-rata bila ada kurang dari sepuluh interval | hitungan; menit | Catatan insiden; riwayat pemantauan | Manajemen insiden; manajemen masalah | Sinyal stabilitas di samping tingkat kegagalan perubahan (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang) | Bulanan |
| Porsi degradasi | Waktu ketika layanan berfungsi tetapi di bawah mutu yang disepakati | Menit ketika indikator latensi, galat, atau kebenaran melanggar ambangnya, tidak termasuk menit yang sudah dihitung sebagai downtime / menit dalam lingkup. Ambang dinyatakan per layanan, misalnya dalam SLO | persen | Pemantauan dan pengukuran SLI | Manajemen ketersediaan; manajemen kapasitas dan kinerja | SLI latensi (lihat topik 5.4, Metrik kapasitas dan kinerja) | Bulanan |
| Cakupan pengukuran | Berapa banyak perilaku layanan yang menghadap pengguna benar-benar diamati pengukuran ketersediaan | Perjalanan pengguna kritis dengan probe aktif atau pengukuran pengguna nyata / perjalanan pengguna kritis yang didaftar dalam definisi layanan | persen | Definisi layanan; konfigurasi pemantauan | Manajemen pemantauan dan peristiwa; manajemen ketersediaan | Cakupan observabilitas dan mutu peringatan (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan) | Kuartalan |

Dua catatan tentang data. Probe yang memeriksa tiap lima menit tak dapat menyelesaikan gangguan dua menit, jadi catat interval probe di samping angka, dan pakai kolom awal dampak dalam catatan insiden (lihat topik 1.5, Sumber data dan instrumentasi). Setiap kali definisi “hidup” berubah, tandai pada bagan tren.

## Rekomendasi

### Definisikan pengukuran

**1. Tulis definisi layanan sebelum persentase.** Daftar batas layanan, perjalanan pengguna kritis, jam dalam lingkup, zona waktu, dan jendela (bulan kalender lazim). Nyatakan dependensi mana yang dihitung: jika penyedia pembayaran gagal dan pengguna tidak dapat membayar, apakah itu gangguan Anda? Catat jawabannya di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik). Sebagian besar perselisihan tentang ketersediaan adalah perselisihan tentang halaman ini, dan menyelesaikannya di muka jauh lebih murah daripada setelah gangguan.

**2. Definisikan “hidup” sebagai hasil pengguna, bukan keadaan server.** Pemeriksaan kesehatan yang mengembalikan sukses sementara masuk rusak mengukur hal yang salah. Pilih sedikit perjalanan kritis, seperti “cari dan lihat item”, “masuk”, atau “ajukan klaim”, dan definisikan sukses untuk masing-masing dalam istilah yang dikenali pengguna. Probe perjalanan dari ujung ke ujung, dan perlakukan respons lambat di luar ambang yang disepakati sebagai terdegradasi, bukan hidup.

**3. Pakai ukuran berbasis permintaan untuk layanan terdistribusi dan ukuran berbasis waktu di mana layanan benar-benar hidup atau mati.** Layanan global jarang mati seluruhnya, jadi menghitung menit kegagalan total mengabaikan sebagian besar kegagalan nyata. Laporkan keduanya bila bisa, dan katakan mana yang judul dan mengapa.

**4. Tambahkan pembobotan pengguna di mana beban tidak merata.** Gangguan sepuluh menit pukul 4 pagi dan satu di awal hari perdagangan punya durasi sama dan biaya sangat berbeda. Bobot menurut sesi atau transaksi pada menit kegagalan, atau laporkan menit gangguan jam puncak sebagai angka terpisah.

**5. Ukur dari luar domain kegagalan.** Probe di dalam jaringan atau wilayah yang sama dengan layanan gagal bersamanya, atau terus melaporkan sukses sementara jalur yang dipakai pengguna rusak. Jalankan probe sintetis dari setidaknya dua lokasi independen dan periksa silang terhadap data pengguna nyata.

### Perlakukan gangguan terencana dan tak terencana dengan jujur

**6. Laporkan downtime terencana dan tak terencana berdampingan.** Banyak perjanjian mengecualikan pemeliharaan terencana, yang wajar. Pengguna tetap mengalaminya sebagai downtime, jadi tampilkan menit yang dikecualikan dan porsi terencana di samping judul (lihat topik 4.3, Metrik pemberdayaan perubahan).

**7. Buat label terencana sulit diperoleh.** Definisikan terencana sebagai disetujui lewat catatan perubahan sebelum gangguan dimulai, dengan waktu awal dan akhir dikomunikasikan kepada pengguna di muka. Gangguan yang diumumkan setelah dimulai adalah tak terencana. Kelebihan melewati jendela yang disetujui adalah tak terencana sejak jendela berakhir. Ketiga aturan ini mencegah label menjadi cara melabeli ulang kegagalan.

**8. Bekerja untuk menyusutkan downtime terencana.** Deployment bergulir, feature flag, migrasi skema tanpa kunci, dan rilis blue-green memungkinkan tim mengubah layanan tanpa mematikannya. Lacak menit downtime terencana sebagai tren dan tanyakan apa yang dibutuhkan untuk membawanya mendekati nol.

### Baca angka dengan baik

**9. Ubah sembilan menjadi menit dan tampilkan.** Tabel di bawah memberi aritmetika untuk bulan 30 hari (43.200 menit) dan tahun 365 hari (525.600 menit). Taruh menit yang diizinkan di dasbor di samping target, dan tampilkan menit yang terpakai sejauh ini dalam jendela. Orang membuat keputusan lebih baik tentang “43 menit sebulan” daripada tentang “tiga sembilan”.

| Target ketersediaan | Downtime yang diizinkan dalam bulan 30 hari | Downtime yang diizinkan dalam tahun 365 hari |
| --- | --- | --- |
| 99 persen | 432 menit (7,2 jam) | 5.256 menit (87,6 jam) |
| 99,5 persen | 216 menit (3,6 jam) | 2.628 menit (43,8 jam) |
| 99,9 persen | 43,2 menit | 525,6 menit (8,76 jam) |
| 99,95 persen | 21,6 menit | 262,8 menit (4,38 jam) |
| 99,99 persen | 4,32 menit | 52,56 menit |
| 99,999 persen | sekitar 26 detik | sekitar 5,26 menit |

Nilai mengasumsikan jam berjalan sepanjang jendela. Jika Anda mengukur hanya jam layanan yang disepakati, menit yang diizinkan menyusut secara proporsional, dan Anda sebaiknya mengatakannya.

**10. Hormati biaya tiap sembilan tambahan dan batas dependensi Anda.** Buku SRE mencatat bahwa biaya keandalan naik tajam dengan setiap sembilan tambahan, dan bahwa target sebaiknya mencerminkan apa yang dibutuhkan pengguna dan apa yang akan dibayar bisnis. Layanan jarang dapat lebih tersedia daripada dependensi yang dibutuhkannya secara seri. Jika tiga komponen esensial masing-masing mencapai 99,9 persen dan permintaan butuh ketiganya, ketersediaan harapan terbaik untuk kombinasi itu sekitar 99,7 persen, karena peluang kegagalan bertambah ketika komponen independen. Lakukan perkalian sebelum menjanjikan angka.

**11. Lihat jarak dan bentuk, bukan hanya total.** Gangguan pendek yang sering butuh respons berbeda dari satu gangguan panjang yang jarang. Kaitkan gangguan panjang dengan deteksi dan pemulihan (lihat topik 3.3, Waktu respons dan penyelesaian insiden) dan dengan pandangan insiden besar (lihat topik 3.4, Metrik insiden besar).

**12. Tutup lingkaran dengan anggaran kesalahan dan catatan masalah.** Target ketersediaan berguna ketika mengubah apa yang dilakukan tim. Ketika anggaran bulanan downtime yang diizinkan hampir habis, perlambat perubahan berisiko dan pindahkan upaya ke pekerjaan keandalan, sebagaimana dijelaskan dalam kebijakan anggaran kesalahan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan). Ketika sebab yang sama kambuh, buka catatan masalah dan lacak sampai perbaikan (lihat topik 4.1, Metrik manajemen masalah).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Ketersediaan berbasis waktu | Memprobe halaman remeh yang tetap hidup sementara perjalanan nyata gagal; memperpanjang interval probe agar gangguan pendek jatuh di antara pemeriksaan; menyusutkan jam dalam lingkup; menghitung gangguan sebagai degradasi | Ketersediaan berbobot pengguna dan pemantauan pengguna nyata; interval probe dinyatakan di samping angka; sampel insiden terhadap catatan pemantauan |
| Ketersediaan berbasis permintaan | Menghitung permintaan mudah (pemeriksaan kesehatan, aset cache) dalam penyebut untuk mengencerkan kegagalan; mengklasifikasi galat server sebagai galat klien; mengecualikan percobaan ulang yang dialami pengguna sebagai kegagalan | Tingkat keberhasilan per perjalanan kritis, bukan per permintaan; tinjau daftar pengecualian; bandingkan dengan insiden yang dilaporkan pengguna |
| Ketersediaan berbobot pengguna | Memilih pembobotan agar kegagalan puncak sedikit berarti; mendefinisikan sesi “berhasil” begitu longgar sehingga langkah rusak tetap lolos | Terbitkan aturan pembobotan dan daftar perjalanan; bandingkan dengan volume keluhan dan kontak dukungan selama gangguan |
| Downtime tak terencana | Mengklasifikasi ulang gangguan sebagai terencana setelah kejadian; menunda awal dampak terkonfirmasi; memecah satu gangguan menjadi dua agar tampak lebih pendek | Porsi downtime terencana, dengan aturan bahwa gangguan yang diumumkan setelah dimulai adalah tak terencana; bandingkan awal dampak dengan data pemantauan |
| Porsi downtime terencana | Memesan perubahan sebagai jendela disetujui agar kelebihan dan kegagalan dihitung terencana; menggelembungkan porsi terencana dengan menjadwalkan pemeliharaan yang tak perlu | Menit kelebihan diklasifikasi ulang sebagai tak terencana; tingkat kegagalan perubahan dan porsi perubahan darurat (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang) |
| Frekuensi dan jarak gangguan | Menggabung insiden, atau membuka insiden baru hanya setelah jeda panjang, agar hitungan rendah; menekan peringatan agar gangguan pendek tak tercatat | Pengambilan sampel peringatan dan insiden terhadap peristiwa pemantauan mentah; cakupan pemantauan dan mutu peringatan (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan) |
| Porsi degradasi | Menetapkan ambang begitu longgar sehingga layanan lambat tak pernah melanggarnya; menyatakan waktu terdegradasi sebagai hidup | Persentil latensi dan kelambatan yang dilaporkan pengguna ditinjau di samping angka (lihat topik 5.4, Metrik kapasitas dan kinerja) |
| Cakupan pengukuran | Mendaftar hanya perjalanan yang mudah diprobe, sehingga cakupan terbaca 100 persen; menghitung perjalanan sebagai tercakup oleh probe yang tak pernah berjalan | Daftar perjalanan disepakati dengan pemilik layanan dan pengguna; riwayat jalannya probe disampel tiap kuartal |

Pembacaan yang sehat menunjukkan angka yang bergerak karena sebab yang dapat dijelaskan tim, dengan downtime terencana dan tak terencana keduanya terlihat dan angka berbobot pengguna dekat dengan judul. Curigai bulan sempurna yang disertai keluhan. Penurunan jujur sesekali menunjukkan sistem pencatatan bekerja.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Ketersediaan berbasis waktu | Sederhana, dipahami luas, mudah dibandingkan dengan kontrak | Memperlakukan kegagalan parsial sebagai semua atau tidak sama sekali; mengabaikan kapan dan siapa |
| Ketersediaan berbasis permintaan | Mencerminkan kegagalan parsial; berskala untuk layanan terdistribusi | Bergantung pada definisi permintaan valid yang baik; dapat diencerkan lalu lintas mudah |
| Ketersediaan berbobot pengguna | Dekat dengan yang dialami pengguna; menunjukkan biaya kegagalan jam puncak | Butuh data sesi atau perjalanan; lebih banyak upaya menjelaskannya |
| Mengecualikan downtime terencana | Cocok dengan banyak perjanjian; menghargai pemberitahuan di muka | Dapat menyembunyikan dampak nyata; mengundang pelabelan ulang |
| Target moderat dengan anggaran kesalahan | Menyeimbangkan keandalan dan kecepatan pengiriman | Butuh disiplin untuk bertindak ketika anggaran habis |

Jawaban prosanya adalah memilih ukuran paling sederhana yang cocok dengan layanan, menambahkan pembobotan pengguna di mana beban tidak merata, dan eksplisit tentang setiap pengecualian. Ukuran yang sedikit kurang elegan yang dipahami semua orang berbuat lebih banyak kebaikan daripada yang canggih yang tak dipercaya siapa pun.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa arti “tersedia” untuk layanan terpenting kita, dan apakah pengguna akan setuju?**
Minta setiap orang menggambarkan, dalam satu kalimat, apa yang harus dapat dilakukan pengguna agar layanan dihitung hidup. Bandingkan jawaban dengan definisi tertulis dan dengan probe yang menyuapi dasbor. Fasilitator sebaiknya mendengarkan celah seperti masuk, pencarian, atau pembayaran yang berfungsi di probe tetapi gagal dalam praktik. Akhiri dengan menyepakati perjalanan pengguna mana yang harus dinamai definisi.

**2. Gangguan mana dari kuartal terakhir yang akan dikecualikan perhitungan kita, dan apakah itu adil?**
Daftar gangguan dan tandai masing-masing sebagai terencana, tak terencana, atau dikecualikan. Tanyakan siapa yang membuat tiap penilaian dan kapan. Fasilitator sebaiknya mencatat kasus tempat pengguna akan tidak setuju dengan label, dan memakainya untuk memperketat aturan.

**3. Berapa menit downtime yang diizinkan target kita, dan berapa yang sudah kita pakai pada jendela ini?**
Ubah target menjadi menit untuk bulan dan tahun di papan tulis. Bandingkan dengan menit yang terpakai sejauh ini. Tanyakan apa yang akan dilakukan tim secara berbeda jika hanya 20 persen anggaran tersisa. Ini membuat target abstrak menjadi konkret dan menghubungkan angka dengan kebijakan anggaran kesalahan.

**4. Di mana pengukuran kita dapat melewatkan kegagalan yang akan dirasakan pengguna?**
Telusuri lokasi probe, interval, perjalanan yang tercakup, dan dependensi. Tanyakan kegagalan apa yang akan lolos dari setiap probe dan tetap merusak layanan bagi pengguna. Sepakati satu probe baru atau satu ukuran pengguna nyata untuk ditambahkan.

**5. Apakah kita merencanakan gangguan yang bisa kita hindari?**
Lihat downtime terencana selama enam bulan dan tanyakan apa yang memaksa tiap gangguan. Sebagian tak terhindarkan, seperti persyaratan vendor. Yang lain berasal dari pendekatan rilis atau migrasi yang bisa berubah. Tanyakan apa yang dibutuhkan untuk menyingkirkan sumber terbesar, dan siapa yang memiliki pekerjaan itu.

**6. Jika angka judul tampak sempurna, apa yang akan membuat kita ragu?**
Namai sinyal yang akan bertentangan dengan dasbor: volume keluhan, kontak dukungan, atau ingatan tim siaga. Periksa apakah ada saat ini. Sepakati satu perbandingan untuk ditaruh di dasbor.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memengaruhi ketersediaan setiap kali mereka mengubah layanan. Mereka dapat merancang untuk deployment tanpa downtime, memakai feature flag untuk membatasi radius dampak, dan memperlakukan anggaran kesalahan sebagai masukan bagi keputusan rilis, membaca ketersediaan di samping ukuran deployment (lihat topik 2.8, Metrik DORA).

### Tim layanan dan operasi

Tim operasi memiliki probe, catatan insiden, dan rotasi yang menghasilkan data. Mereka sebaiknya menjaga definisi dan daftar pengecualian tetap terkini, mencatat awal dampak dengan jujur, dan meninjau pemantauan terhadap insiden nyata. Ketersediaan milik layanan dan rotasinya, tidak pernah satu insinyur yang siaga (lihat topik 5.7, Metrik pekerjaan berulang dan siaga).

### Kepemimpinan dan tata kelola

Pemimpin menetapkan insentif yang menentukan apakah data ketersediaan terus terang. Tinjauan yang bertanya “mengapa Anda kehilangan satu sembilan?” mengajari tim menyembunyikan gangguan dalam pengecualian. Tanyakan apa yang dipelajari tim dan investasi apa yang akan mengurangi gangguan, dan jangan meminta lebih banyak sembilan daripada yang akan diperhatikan pengguna (lihat topik 8.4, Metrik pemasok dan kontrak, untuk komitmen pemasok).

### Pelanggan dan pengguna

Pengguna menilai ketersediaan dari apakah mereka dapat melakukan apa yang mereka datangi. Mereka jauh lebih menoleransi jendela pemeliharaan yang ditandai daripada kejutan. Beri mereka halaman status dengan waktu awal dan akhir yang jujur, dan baca umpan balik mereka di samping angka (lihat topik 6.2, Perjanjian tingkat pengalaman).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan etalase, layanan checkout, dan layanan pelacakan pesanan. Angka dalam contoh ini bersifat ilustratif.

Tim checkout melaporkan ketersediaan berbasis waktu 99,95 persen untuk bulan itu, yang mengizinkan 21,6 menit downtime tak terencana, dan dasbor menunjukkan 99,96 persen. Kepala dukungan pelanggan gelisah, karena kontak dukungan tentang pembayaran gagal naik pada bulan yang sama. Ia meminta tim meninjau pengukuran.

Tim menemukan tiga masalah. Probe memeriksa halaman “checkout dapat dijangkau” tiap lima menit, bukan perjalanan pembayaran penuh. Data berbasis permintaan menunjukkan bahwa selama dua malam timeout penyedia pembayaran menyebabkan sekitar 4 persen percobaan pembayaran gagal selama sekitar 50 menit tiap malam, dan probe tidak pernah menyadarinya karena halaman itu sendiri termuat. Dan migrasi basis data yang melewati jendela yang disetujui sebanyak 18 menit telah dicatat seluruhnya sebagai pemeliharaan terencana.

Tim membuat empat perubahan. Ia menambah probe sintetis untuk perjalanan pembayaran penuh dari dua lokasi pada interval satu menit. Ia menambah angka berbasis permintaan dan berbobot pengguna, memakai sesi yang mencapai langkah pembayaran. Ia mengklasifikasi ulang menit kelebihan sebagai tak terencana. Dan ia menambah porsi downtime terencana dan cakupan pengukuran ke laporan.

Pada dasar yang dikoreksi, bulan itu menunjukkan ketersediaan berbasis waktu 99,93 persen, ketersediaan berbasis permintaan 99,90 persen, dan ketersediaan berbobot pengguna 99,84 persen, karena kegagalan jatuh pada puncak malam. Ketiganya melewatkan target 99,95 persen, yang tidak nyaman. Tim dan kepala dukungan sepakat bahwa angka sebelumnya terlalu murah hati. Mereka menulis definisi yang dikoreksi ke register metrik dan memberlakukan kebijakan anggaran kesalahan: untuk bulan berikutnya, perubahan berisiko pada checkout menunggu sampai anggaran pulih, dan tim membuka catatan masalah untuk timeout penyedia pembayaran (lihat topik 4.1, Metrik manajemen masalah).

Risiko manipulasi yang mereka tangkap adalah pelabelan ulang. Seorang manajer menyarankan menyebut kelebihan itu “pemeliharaan diperpanjang” untuk melindungi target. Porsi downtime terencana, dengan aturannya bahwa kelebihan menjadi tak terencana, membuat pengklasifikasian ulang itu terlihat, dan tim mempertahankan angka yang jujur.

## Sudut pandang sektor

**Startup.** Tim kecil sering punya satu layanan dan sedikit pemantauan. Mulai dengan satu probe pada perjalanan terpenting dan definisi satu paragraf tentang “hidup”. Pilih target sederhana, ubah menjadi menit, dan hindari menjanjikan sembilan yang belum dapat diukur tim.

**Bisnis kecil.** Layanan sering berupa alat yang dihosting ditambah beberapa sistem kustom, dan ketersediaan bergantung pada pemasok. Catat gangguan pemasok sebagaimana memengaruhi pengguna Anda, bandingkan dengan apa yang dilaporkan pemasok, dan jaga himpunan pada dua atau tiga angka.

**Perusahaan besar.** Banyak layanan, banyak tim, dan banyak pemasok melipatgandakan definisi yang dipakai. Terbitkan satu definisi standar ketersediaan dengan daftar pendek variasi yang diizinkan, jaga register metrik tetap terkini, dan pastikan aturan terencana dan tak terencana sama di seluruh tim sebelum membandingkannya. Utamakan pelaporan tingkat layanan daripada tabel liga tim, karena layanan berbeda dalam beban dan kekritisan.

**Pemerintah dan sektor publik.** Layanan publik sering punya jam layanan undang-undang, komitmen terbitan, dan kontrak dengan kredit formal. Laporkan terhadapnya sebagaimana tertulis, tampilkan pandangan berbobot pengguna di sampingnya, dan terbukalah tentang pengecualian (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya utamanya adalah waktu menulis definisi layanan dan register, pemantauan yang memprobe perjalanan kritis dari luar domain kegagalan, dan upaya menggabungkan data insiden, perubahan, dan pemantauan agar downtime terencana dan tak terencana dapat dipisahkan. Pemantauan pengguna nyata menambah biaya perkakas dan penyimpanan. Kebanyakan organisasi sudah memiliki sebagian data, jadi investasi pertama biasanya pada definisi.

Imbal hasil datang dari keputusan lebih baik dan lebih sedikit perselisihan. Tim yang mengukur dari sisi pengguna menemukan kegagalan yang terlewat pemeriksaan kesehatan, perjanjian lebih mudah dikelola dengan satu definisi, dan biaya satu sembilan tambahan dapat dibandingkan dengan nilainya bagi pengguna. Gambarkan manfaat sebagai pola, seperti lebih sedikit kejutan pada tinjauan perjanjian, dan ukur garis dasar Anda sendiri, seperti jurang antara angka judul dan angka berbobot pengguna. Jangan meminjam angka dari organisasi lain.

## Anti-pola dan jebakan

- **Mengutip sembilan tanpa menit.** Target yang tak dapat diterjemahkan siapa pun menjadi downtime yang diizinkan tak dapat memandu keputusan. Tampilkan menit yang diizinkan dan terpakai di samping setiap target.
- **Mengukur server alih-alih perjalanan.** Pemeriksaan kesehatan hijau dapat duduk di samping masuk yang rusak. Probe perjalanan kritis dari ujung ke ujung dan bandingkan dengan data pengguna nyata.
- **Membiarkan label terencana menyerap kegagalan.** Kategori terencana yang mudah diklaim mengosongkan angka tak terencana. Wajibkan persetujuan sebelum gangguan, komunikasikan, dan klasifikasi ulang kelebihan.
- **Merata-ratakan lintas layanan dan jam.** Angka campuran menyembunyikan layanan kritis dan jam sibuk. Laporkan per layanan, dan tambahkan pandangan berbobot pengguna.
- **Menjanjikan lebih banyak sembilan daripada yang diizinkan dependensi.** Komponen seri tidak dapat melebihi ketersediaan gabungannya. Kalikan sebelum menjanjikan, dan minta pemasok angka terukur mereka.
- **Memperlakukan 100 persen sebagai tujuan.** Biaya menanjak tajam dan perubahan melambat. Pilih target dari kebutuhan pengguna dan pakai anggaran kesalahan.
- **Memeringkat tim atau orang menurut sembilannya.** Layanan berbeda dalam beban dan kekritisan, dan tabel liga mengajari tim menyembunyikan gangguan. Tunjukkan setiap layanan tren sendiri dan bandingkan dengan targetnya sendiri.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | “Hidup” berarti apa pun yang ditunjukkan alat pemantauan; waktu gangguan diperkirakan sesudahnya | Tertulis untuk beberapa layanan; waktu probe dan insiden tidak sepakat | Satu definisi tertulis per layanan dengan perjalanan, jam, pengecualian, dan aturan jam | Definisi ditinjau secara berkala; perubahan dicatat dan ditandai pada bagan | Definisi diselaraskan dengan pemasok dan pelanggan dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Mutu pengukuran | Laporan manual atau satu pemeriksaan kesehatan | Probe untuk beberapa layanan; data permintaan dalam beberapa log | Probe dari luar ke dalam pada perjalanan kritis ditambah angka berbasis permintaan dari sumber standar | Angka berbobot pengguna dari data pengguna nyata; cakupan dilacak dan disampel | Pengukuran dibagikan antartim dan pemasok dan direkonsiliasi otomatis |
| Penanganan terencana dan tak terencana | Tanpa pembedaan; pemeliharaan dihitung ad hoc | Label terencana dipakai beberapa tim, aturan berbeda | Satu aturan: disetujui sebelum gangguan dan dikomunikasikan, kelebihan diklasifikasi ulang | Porsi terencana diplot tren dengan tujuan menguranginya | Perubahan tanpa downtime adalah bawaan, dan downtime terencana jarang dan dinegosiasikan |
| Pemakaian dalam keputusan | Dilaporkan setelah keluhan | Ditinjau bulanan oleh operasi | Target ditampilkan dalam menit | Kebijakan anggaran kesalahan mengubah pekerjaan, dengan pendanaan | Ketersediaan, biaya, dan pengalaman dipertukarkan bersama |

## Daftar periksa

- [ ] Setiap layanan punya definisi tertulis “tersedia” yang menamai perjalanan pengguna kritisnya.
- [ ] Jendela pengukuran, jam dalam lingkup, dan zona waktu dinyatakan untuk setiap angka.
- [ ] Daftar pengecualian tertulis, ditinjau, dan ditampilkan di samping judul.
- [ ] Downtime terencana membutuhkan perubahan yang disetujui dan pemberitahuan di muka; kelebihan dihitung tak terencana.
- [ ] Probe berjalan dari luar domain kegagalan, pada interval yang dinyatakan, pada perjalanan kritis.
- [ ] Angka berbasis permintaan atau berbobot pengguna berada di samping angka berbasis waktu.
- [ ] Setiap target ditampilkan sebagai menit yang diizinkan dan menit yang terpakai pada jendela saat ini.
- [ ] Hitungan gangguan dan persentil durasi dilaporkan, bukan hanya total.
- [ ] Ketersediaan dependensi dikalikan sebelum target dijanjikan.
- [ ] Perubahan definisi dicatat dan ditandai pada bagan tren.
- [ ] Ketersediaan dilaporkan per layanan dan tidak pernah per orang.

## Prompt AI

**Susun definisi ketersediaan layanan.**

```text
Saya menulis definisi ketersediaan untuk [service name], [type of service] yang
dipakai [user groups]. Perjalanan pengguna kritisnya [list journeys]. Jam layanan
yang disepakati [hours and time zone]. Dependensi yang diketahui [list]. Pemantauan
kami terdiri dari [probes, logs, real user data].

Susun definisi satu halaman yang mencakup: apa yang dihitung hidup untuk tiap
perjalanan, jendela pengukuran, jam dalam lingkup, pengecualian, aturan downtime
terencana versus tak terencana, awal dan akhir jam untuk gangguan, dan metrik yang
dilaporkan. Jangan mengarang target atau nilai acuan. Daftar asumsi Anda dan
pertanyaan yang harus saya jawab untuk menyelesaikan definisi.
```

**Ubah target menjadi downtime yang diizinkan dan ujilah.**

```text
Target kami untuk [service name] adalah [availability percentage] selama [window,
for example a 30-day month]. Waktu dalam lingkup adalah [hours]. Dependensi
esensial kami dan ketersediaan yang dinyatakan atau terukur adalah [list, or
"unknown"].

Hitung downtime yang diizinkan target ini dalam menit untuk jendela dan untuk
setahun, memakai jam dalam lingkup. Lalu perkirakan ketersediaan gabungan terbaik
jika dependensi dibutuhkan secara seri dan gagal secara independen, dan jelaskan
rumus yang Anda pakai. Tandai di mana masukan saya terlalu tidak pasti untuk
menyimpulkan apa pun. Jangan menyediakan angka ketersediaan untuk dependensi mana
pun yang tidak saya berikan. Daftar asumsi Anda.
```

**Tinjau sebulan gangguan untuk masalah klasifikasi.**

```text
Berikut catatan gangguan untuk [service name] untuk [month]: [paste records with
impact start, restore time, planned or unplanned label, approval time, and
notes, with personal data removed].

Untuk setiap gangguan, periksa apakah label terencana atau tak terencana mengikuti
aturan ini: [paste your rule]. Identifikasi catatan tempat awal dampak tampak
terlambat, tempat satu gangguan tampak dipecah atau digabung, dan tempat kelebihan
seharusnya diklasifikasi ulang. Ringkas pola menurut layanan dan sebab, tidak
pernah menurut orang. Katakan apa yang tidak dapat Anda nilai dari data. Daftar
asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik terkait dan pagar pembatas berpasangan bagi ukuran ketersediaan yang akan Anda laporkan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa revisi topik ini menjaga setiap metrik dipasangkan dengan vektor manipulasi dan pagar pembatas.

## Poin penting

- Ketersediaan hanya bermakna setelah “hidup”, batas layanan, jam, dan pengecualian dituliskan dari sisi pengguna.
- Ukuran berbasis permintaan dan berbobot pengguna menggambarkan layanan terdistribusi dan beban tak merata lebih baik daripada menit kegagalan total.
- Laporkan downtime terencana dan tak terencana bersama, dan buat label terencana sulit diperoleh.
- Ubah setiap target menjadi menit, dan kalikan dependensi seri sebelum menjanjikan jumlah sembilan.
- Setiap sembilan tambahan berbiaya lebih daripada yang sebelumnya, jadi pilih target dari apa yang dibutuhkan pengguna dan pakai anggaran kesalahan untuk bertindak atasnya.
- Gambarkan layanan dan rotasi, tidak pernah orang, dan uji setiap angka judul terhadap pengalaman pengguna.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
