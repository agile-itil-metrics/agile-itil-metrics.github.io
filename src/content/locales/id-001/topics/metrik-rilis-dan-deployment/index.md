# Metrik rilis dan deployment

**Men-deploy kode dan merilisnya kepada pengguna adalah peristiwa berbeda dengan risiko berbeda, jadi ukur keduanya secara terpisah, hitung masing-masing menurut aturan tertulis, dan baca frekuensi, lead time, ukuran batch, dan kebersihan flag bersama alih-alih merayakan satu hitungan.**

## Gambaran umum dan motivasi

Banyak tim memakai kata “deployment” dan “rilis” seolah artinya sama. Tidak, dan perbedaannya adalah gagasan paling berguna dalam topik ini. **Deployment** adalah tindakan menaruh versi perangkat lunak ke dalam lingkungan, biasanya produksi, sebagaimana dijelaskan dalam artikel tentang [deployment perangkat lunak](https://en.wikipedia.org/wiki/Software_deployment). **Rilis** adalah saat perubahan menjadi tersedia bagi pengguna yang dituju, keputusan yang diatur oleh [manajemen rilis](https://en.wikipedia.org/wiki/Release_management). Ketika keduanya terjadi bersamaan, deployment adalah rilis dan satu angka menggambarkan keduanya. Ketika dipisahkan, tim dapat men-deploy sering dan diam-diam, dan merilis dengan sengaja.

Pemisahan itu penting karena kedua peristiwa membawa risiko berbeda. Deployment membawa risiko teknis: build baru mungkin gagal dimulai, mungkin merusak dependensi, atau mungkin butuh rollback. Rilis membawa risiko bisnis dan pengguna: perubahan mungkin membingungkan pelanggan, atau mungkin harus mendarat pada tanggal yang disepakati. Tim yang menggabungkan kedua peristiwa menerima kedua risiko sekaligus, yang mendorong mereka ke batch perubahan besar yang jarang dirilis. Tim yang memisahkannya mengambil risiko teknis dalam langkah kecil dan risiko pengguna dalam langkah terkendali.

Alat utama untuk pemisahan adalah [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle), juga disebut feature flag: sakelar dalam konfigurasi yang menyalakan atau mematikan perilaku tanpa deployment baru. Teknik terkait mencakup [rilis canary](https://en.wikipedia.org/wiki/Canary_release), yang memaparkan perubahan ke porsi kecil lalu lintas lebih dulu, dan [deployment blue-green](https://en.wikipedia.org/wiki/Blue-green_deployment), yang menjaga dua lingkungan produksi dan menukar lalu lintas di antaranya. Semuanya memungkinkan Anda menjawab dua pertanyaan terpisah: apakah versi baru berjalan dengan aman, dan siapa yang sebaiknya melihat perilaku baru dan kapan.

Istilah di bawah berulang dalam topik ini.

- **Rilis** adalah versi atau kumpulan perubahan yang dibuat tersedia bagi pengguna.
- **Deployment** adalah perpindahan versi ke lingkungan. ITIL 4 menamai praktik untuk ini, manajemen deployment.
- **Peluncuran gelap** adalah deployment yang perilaku barunya dimatikan bagi pengguna.
- **Peluncuran progresif** adalah rilis yang memperluas paparan bertahap, misalnya 1 persen, 10 persen, lalu semua orang.
- **Batch** adalah kumpulan perubahan yang dikirim bersama dalam satu deployment atau rilis. Ukuran batch adalah jumlah perubahan, atau jumlah perubahan, di dalamnya.
- **Lead time rilis** adalah waktu terlewat dari titik awal yang dinyatakan sampai perubahan tersedia bagi penggunanya. Tim Anda menuliskan titik awal, karena beberapa dipakai secara umum.
- **Persentil** adalah nilai di bawahnya jatuh porsi pengamatan yang dinyatakan. Persentil ke-85 lead time rilis adalah angka yang dikalahkan 85 persen rilis.

Pandangan agile dan ITIL bertemu di sini. Tim agile yang mengikuti [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery) ingin setiap perubahan dapat dirilis kapan saja, dan memperlakukan rilis sebagai keputusan bisnis yang dibuat terpisah dari tindakan teknis. Praktisi ITIL melihat manajemen rilis, manajemen deployment, dan pemberdayaan perubahan sebagai praktik yang merencanakan, menjadwalkan, dan mengendalikan perpindahan perubahan ke pemakaian hidup. Kedua pandangan bertentangan ketika manajemen rilis dipahami sebagai kalender peristiwa besar. Keduanya cocok ketika praktik dipahami sebagai kemampuan merilis dengan aman sesuai permintaan, dengan kendali yang dibangun ke dalam pipeline dan flag.

Topik ini tidak mengulang definisi lima ukuran kinerja pengiriman dari program riset DORA (lihat topik 2.8, Metrik DORA), juga bukan ukuran kegagalan dan pengerjaan ulang setelah rilis (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang), maupun volume dan persetujuan perubahan (lihat topik 4.3, Metrik pemberdayaan perubahan). Ia menambah apa yang dibiarkan terbuka topik-topik itu: bagaimana menghitung rilis sebagai berbeda dari deployment, berapa lama perubahan selesai menunggu sebelum pengguna menerimanya, seberapa besar batch, dan apakah flag yang memungkinkan pemisahan dijaga rapi.

Terakhir, hitungan rilis dan deployment adalah angka yang menggoda untuk dasbor pimpinan, dan [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku seketika (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Hitungan deployment naik ketika perubahan dipecah menjadi potongan remeh. Hitungan rilis naik ketika label diubah. Setiap metrik di bawah karena itu datang dengan cara ia membengkok dan pagar pembatas yang menangkap pembengkokan itu.

## Prinsip utama

- **Deployment dan rilis adalah dua peristiwa.** Ukur terpisah di mana pun arsitektur mengizinkan, dan katakan dengan jelas di mana keduanya masih satu peristiwa.
- **Hitung menurut aturan tertulis.** Deployment dihitung ketika lingkungan bernama menerima versi bernama dengan hasil sukses. Rilis dihitung ketika pengguna yang dituju dapat menjangkau perubahan. Tulis aturan sekali dan terapkan dengan cara sama setiap kali.
- **Gambarkan layanan, bukan orang.** Hitungan milik layanan dan timnya, tidak pernah individu.
- **Ukur penantian, bukan hanya pekerjaan.** Lead time rilis sering berisi berhari-hari menunggu jendela, persetujuan, atau keputusan. Penantian adalah tempat perbaikan biasanya hidup.
- **Batch kecil adalah tuasnya.** Frekuensi dan ukuran adalah dua pandangan atas satu hal. Pasangkan setiap hitungan dengan ukuran berapa banyak perubahan yang dibawa tiap rilis.
- **Flag adalah inventaris dengan biaya penyimpanan.** Flag yang hidup terlalu lama menjadi kode mati dan sumber kegagalan, jadi lacak usia flag secermat cakupan flag.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Frekuensi deployment | Seberapa sering layanan menerima deployment sukses ke produksi | Hitungan deployment produksi sukses layanan pada periode itu / hari dalam periode; deployment ke lingkungan uji atau staging, deployment gagal atau di-rollback, dan deployment ulang build yang tak berubah dikecualikan; deployment hanya-konfigurasi dihitung dalam deret terpisah | Deployment per hari atau per pekan | Log peristiwa pipeline deployment | Manajemen deployment | Continuous delivery; mengirim inkremen yang berfungsi | Mingguan |
| Frekuensi rilis | Seberapa sering pengguna menerima perubahan yang dapat mereka jangkau | Hitungan peristiwa rilis pada periode itu / hari dalam periode; peristiwa rilis adalah saat perubahan, atau sekelompok perubahan, menjadi dapat dijangkau pengguna yang dituju (flag dinyalakan untuk semua pengguna, tahap akhir peluncuran progresif, atau deployment perubahan tanpa flag); peluncuran gelap, peluncuran yang berhenti di tahap parsial, dan perubahan flag yang hanya memengaruhi pengguna internal dikecualikan | Rilis per pekan atau per bulan | Log audit layanan flag digabung dengan log pipeline dan kalender rilis | Manajemen rilis | Merilis di akhir tiap inkremen; inkremen yang berpotensi dapat dikirim dibuat tersedia | Mingguan, ditinjau bulanan |
| Lead time rilis | Berapa lama perubahan selesai menunggu sebelum pengguna dapat menjangkaunya | Jam dimulai saat perubahan digabung ke jalur utama dan telah lulus pemeriksaan otomatisnya (atau, jika tim Anda menuliskannya begitu, pada commit pertama) dan berhenti saat perubahan dirilis sebagaimana didefinisikan di atas; laporkan median dan persentil ke-85 perubahan yang dirilis pada periode itu; perubahan yang belum dirilis dikecualikan dan dilaporkan sebagai usia pekerjaan yang menunggu | Jam atau hari | Kendali versi digabung dengan pipeline dan log audit flag | Manajemen rilis; manajemen deployment | Lead time dari selesai ke terkirim; lead time ke pelanggan | Mingguan, ditinjau bulanan |
| Jeda deployment-ke-rilis | Berapa lama kode yang di-deploy tetap gelap sebelum pengguna dapat menjangkaunya | Jam dimulai saat perubahan di-deploy ke produksi dan berhenti saat dirilis; laporkan median dan persentil ke-85; perubahan yang dirilis pada saat deployment punya jeda nol dan disertakan; perubahan yang di-deploy lalu dihapus tanpa rilis dikecualikan dan dihitung terpisah | Jam atau hari | Log pipeline digabung dengan log audit flag | Manajemen rilis; manajemen deployment | Peluncuran gelap; memisahkan deployment dari rilis | Bulanan |
| Ukuran batch rilis | Berapa banyak perubahan yang dikirim bersama dalam satu rilis | Median dan persentil ke-85 jumlah perubahan yang digabung (pull request atau item kerja) per rilis pada periode itu; satuan perubahan dituliskan; setiap perubahan dihitung sekali, dalam rilis yang membuatnya dapat dijangkau | Perubahan per rilis | Kendali versi dan pelacak isu digabung dengan peristiwa rilis | Manajemen rilis; pemberdayaan perubahan | Batch kecil; irisan vertikal pekerjaan | Per rilis, ditinjau bulanan |
| Cakupan feature flag | Porsi perubahan yang terlihat pengguna yang dirilis di balik flag | Perubahan terlihat pengguna yang dirilis pada periode itu dan punya flag saat rilis / semua perubahan terlihat pengguna yang dirilis pada periode itu; perubahan infrastruktur dan perbaikan cacat yang tak dapat diberi flag dikecualikan, dan aturan untuk “terlihat pengguna” dituliskan | Persen | Layanan flag digabung dengan pelacak isu dan log rilis | Manajemen rilis; pemberdayaan perubahan | Pengiriman progresif; pengembangan berbasis eksperimen | Bulanan |
| Hitungan flag basi | Berapa banyak flag yang telah melewati tujuannya | Jumlah flag rilis yang masih ada dalam kode atau konfigurasi lebih dari sejumlah hari yang dinyatakan setelah perubahan yang dijaganya mencapai semua pengguna; flag operasional permanen (kill switch, flag hak akses) ditandai dan dikecualikan; batas usia dituliskan per jenis flag | Flag, dan median usia flag rilis dalam hari | Inventaris layanan flag digabung dengan pencarian kode | Manajemen rilis; manajemen pengetahuan | Pembersihan utang teknis; kriteria selesai berupa menghapus flag | Bulanan |

## Rekomendasi

### Tuliskan apa yang dihitung sebagai deployment dan sebagai rilis

**Definisikan kedua peristiwa sebelum menghitung salah satunya.** Deployment dihitung ketika versi bernama mencapai lingkungan bernama dan pipeline melaporkan sukses. Rilis dihitung ketika pengguna yang dituju dapat menjangkau perubahan, yang untuk perubahan berflag adalah saat flag dinyalakan bagi mereka dan bukan saat kode tiba. Nyatakan pengecualian dalam kalimat yang sama: lingkungan uji, rollback, deployment ulang build yang tak berubah, dan paparan hanya-internal.

### Laporkan kedua deret berdampingan

**Tampilkan frekuensi deployment dan frekuensi rilis pada satu bagan.** Di mana garis berimpit, layanan masih menggabungkan kedua peristiwa. Di mana deployment berjalan jauh di depan rilis, tim telah mulai memisahkannya, dan jarak antara garis adalah tanda kemampuan. Satu angka gabungan menyembunyikan ini, dan memungkinkan tim mengklaim frekuensi tinggi yang tak pernah dilihat pengguna.

### Ukur lead time rilis dari awal yang dinyatakan sampai ke pengguna

**Pilih awal jam sekali dan pertahankan.** Mulai pada commit pertama menunjukkan perjalanan penuh, dan mulai pada penggabungan ke jalur utama mengisolasi pipeline rilis dan persetujuannya. Keduanya dapat diterima jika dinyatakan pada bagan dan tidak pernah diubah diam-diam. Akhiri jam pada rilis, bukan deployment, kalau tidak metrik berhenti mengukur apa yang ditunggu pengguna.

### Lacak ukuran batch di samping frekuensi

**Pasangkan setiap frekuensi dengan ukuran.** Tim dapat menaikkan hitungan deployment dengan memotong satu perubahan menjadi irisan yang tidak berguna sendiri, dan hitungan naik sementara alur nyata tetap sama. Median dan persentil ke-85 ukuran batch menunjukkan apakah irisan itu nyata. Batch kecil lebih mudah ditinjau, diuji, dan dibalikkan, dan itulah manfaat yang diwakili frekuensi.

### Perlakukan tahap peluncuran progresif sebagai peristiwa

**Catat setiap tahap peluncuran dengan stempel waktu.** Peluncuran yang berjalan dari 1 persen ke 10 persen ke semua orang memberi tiga stempel waktu, dan masing-masing adalah kesempatan untuk berhenti. Tangkap tahap, porsi paparan, dan hasil pemeriksaan kesehatan yang mengizinkan tahap berikutnya. Ini memungkinkan Anda memisahkan peluncuran yang dijeda karena sinyal nyata dari yang macet.

### Simpan inventaris flag dengan pemilik dan tanggal kedaluwarsa

**Beri setiap flag rilis pemilik, tujuan, dan tanggal penghapusan terencana saat dibuat.** Layanan flag atau register polos dapat menyimpannya. Tinjau register bulanan dan hitung hitungan flag basi. Flag yang dibiarkan menyala setelah peluncuran penuh adalah kode mati yang masih bercabang. Perlakukan penghapusan sebagai bagian selesai untuk perubahan.

### Beri tag flag menurut jenis

**Pisahkan flag rilis sementara dari flag operasional permanen.** Kill switch dan flag hak akses permanen secara desain, sedangkan flag rilis sebaiknya dihapus setelah peluncuran penuh. Mencampur jenis membuat hitungan basi bising dan mengundang tim menghapus sakelar yang dibutuhkan seseorang selama insiden. Wajibkan jenis saat flag dibuat.

### Tautkan rilis ke catatan insiden dan perubahan

**Catat pengenal rilis pada insiden dan perubahan.** Peristiwa rilis harus dapat ditelusuri dari alat insiden, agar sebab insiden dapat ditautkan ke perubahan yang dirilis, entah di-deploy pekan lalu atau dinyalakan pagi ini. Tanpa tautan, ukuran ketidakstabilan mengatribusikan kegagalan ke tanggal deployment dan melewatkan kegagalan yang disebabkan perubahan flag. Perubahan flag di produksi adalah perubahan dalam arti ITIL dan sebaiknya terlihat oleh pemberdayaan perubahan, bahkan ketika diotorisasi di muka sebagai perubahan standar (lihat topik 4.3, Metrik pemberdayaan perubahan).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Frekuensi deployment | Memecah satu perubahan menjadi deployment remeh; men-deploy ulang build tak berubah; menghitung deployment ke staging; menghitung deployment hanya-konfigurasi bersama deret utama | Ukuran batch rilis dan porsi deployment dengan perubahan terlihat pengguna; deret konfigurasi terpisah; tingkat kegagalan perubahan di sampingnya |
| Frekuensi rilis | Melabeli ulang deployment sebagai rilis; menghitung flag yang dinyalakan untuk staf internal sebagai rilis; merilis perubahan kosong atau kosmetik untuk memenuhi target; menghitung tiap tahap peluncuran sebagai rilis terpisah | Definisi tertulis rilis; sampel rilis tiap kuartal diperiksa terhadap perubahan terlihat pengguna; ukuran batch dan hitungan perubahan yang menghadap pelanggan |
| Lead time rilis | Memulai jam lebih lambat, misalnya pada persetujuan alih-alih penggabungan; mengecualikan perubahan yang menunggu lama sebagai “terhalang”; merilis perubahan remeh lebih dulu untuk menarik turun median; mengakhiri jam pada deployment | Persentil ke-85 dan usia perubahan menunggu tertua; awal tetap tertulis; tinjauan kuartalan 10 persen perubahan terlambat |
| Jeda deployment-ke-rilis | Menyalakan flag untuk pengguna token agar mencatat rilis lebih awal; mengeluarkan kode gelap lama dari sampel dengan menyebutnya “bukan rilis”; menghapus kode gelap untuk menghindari jeda panjang | Porsi paparan saat rilis (ambang untuk apa yang dihitung dirilis); hitungan perubahan yang di-deploy dan dihapus tanpa rilis; hitungan flag basi |
| Ukuran batch rilis | Memecah pekerjaan menjadi pull request buatan; menggabung perubahan tak berkaitan menjadi satu untuk menurunkan jumlah rilis; menghitung hanya perubahan besar dalam bundel | Median ukuran perubahan dalam baris atau berkas sebagai ukuran konteks; tinjauan sampel rilis untuk pembundelan tak berkaitan; frekuensi di samping ukuran |
| Cakupan feature flag | Menambah flag pada perubahan remeh untuk menaikkan tingkat; hanya memberi flag pada perubahan aman dan mengirim yang berisiko tanpa flag; membuat flag tanpa cara mematikannya dalam praktik | Hasil uji flag-mati untuk sampel flag; hitungan flag basi; sebab insiden yang tak punya flag |
| Hitungan flag basi | Melabeli ulang flag rilis sebagai permanen untuk keluar dari hitungan basi; menghapus catatan flag sambil membiarkannya dalam kode; memperpanjang tanggal kedaluwarsa tanpa tinjauan | Pencarian kode berkala terhadap register; tinjauan setiap perubahan jenis flag; usia flag rilis tertua |

Pembacaan yang sehat menunjukkan deployment berjalan di depan rilis untuk layanan yang memakai flag, dengan jeda sedang, ukuran batch kecil dan mantap, dan persentil ke-85 lead time tidak jauh di atas median. Cakupan flag tinggi untuk perubahan berisiko, dan hitungan flag basi rendah atau menurun. Pembacaan yang tampak terlalu baik, seperti frekuensi tinggi bersama ukuran batch yang tumbuh atau hitungan basi nol dengan hitungan flag permanen yang membengkak, pantas mendapat audit sampel sebelum perayaan apa pun.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Deploy terus-menerus dan rilis lewat flag | Risiko teknis kecil per deployment; waktu rilis menjadi pilihan bisnis; pematian cepat | Butuh disiplin dan perkakas flag; menambah jalur kode yang harus diuji dan dihapus |
| Menggabungkan deployment dan rilis | Sederhana dijelaskan; satu peristiwa untuk dihitung; tanpa utang flag | Setiap rilis membawa risiko teknis dan pengguna, yang mendorong batch besar yang jarang dirilis |
| Kereta rilis terjadwal | Terprediksi bagi dukungan dan regulator | Perubahan menunggu kereta berikutnya; hitungan mencerminkan kalender, bukan kemampuan |
| Peluncuran progresif menurut persentase | Membatasi efek rilis buruk; menghasilkan bukti di tiap tahap | Butuh telemetri dan pemeriksaan kesehatan yang baik; versi campuran dapat berjalan berdampingan untuk sementara |
| Menghitung deployment dan rilis | Menunjukkan pemisahan dan penantian | Membutuhkan log audit flag atau catatan rilis yang digabung dengan pipeline |

Layanan yang belum dapat memisahkan deployment dari rilis, misalnya aplikasi seluler yang didistribusikan lewat tinjauan app store, sebaiknya mengukur apa yang bisa: frekuensi rilis, lead time rilis, dan ukuran batch, dengan waktu tinjauan toko dilaporkan sebagai penantian terpisah.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apakah kita memakai kata “deployment” dan “rilis” untuk peristiwa yang sama, dan apakah itu cocok dengan yang terjadi?**
Minta tiga orang menggambarkan perubahan terakhir yang tayang dan catat kapan kode tiba dan kapan pengguna pertama dapat memakainya. Fasilitator sebaiknya membantu kelompok menyepakati satu kalimat untuk tiap istilah dan memutuskan mana dari kedua peristiwa yang diukur setiap angka dasbor yang ada.

**2. Berapa waktu terlama perubahan selesai menunggu rilis, dan mengapa?**
Tarik perubahan tergabung tertua yang masih tak dapat dijangkau pengguna. Telusuri jalurnya dari penggabungan sampai sekarang, dan tuliskan setiap penantian di sepanjang jalan.

**3. Jika hitungan deployment kita berlipat dua, apa yang akan kita periksa sebelum menyebutnya kabar baik?**
Undang kelompok menyebut cara hitungan dapat naik tanpa lebih banyak nilai mencapai pengguna. Lihat ukuran batch, porsi deployment dengan perubahan terlihat pengguna, dan angka kegagalan serta pengerjaan ulang. Fasilitator sebaiknya mencatat mana dari pemeriksaan ini yang sudah ada di dasbor dan mana yang perlu ditambahkan sebelum ada yang menetapkan target.

**4. Flag mana yang akan kita takut hapus, dan apa yang dikatakannya kepada kita?**
Telusuri register flag dan pilih tiga tertua. Tanyakan siapa pemilik masing-masing, apa yang dijaganya, dan apa yang terjadi jika dihapus. Takut menghapus biasanya berarti uji yang hilang, pemilik yang hilang, atau catatan tujuan yang hilang. Sepakati tanggal penghapusan untuk setidaknya satu dan pemeriksaan yang akan membuat penghapusan aman.

**5. Siapa yang memutuskan kapan perubahan dirilis, dan apakah mereka punya informasi yang dibutuhkan?**
Di mana rilis adalah pilihan bisnis, orang yang membuatnya perlu melihat keadaan peluncuran, sinyal kesehatan, dan kesiapan dukungan. Tanyakan di mana fakta itu hidup hari ini dan seberapa cepat pembuat keputusan dapat membalikkan rilis.

**6. Rilis mana dalam kuartal terakhir yang paling buruk, dan ukuran mana yang akan memperingatkan kita?**
Pilih satu rilis yang menimbulkan masalah dan baca lini masanya bersama. Tanyakan apakah batch besar, jeda panjang, peluncuran punya tahap, dan apakah flag dapat membatasi kerusakan. Pilih satu ukuran untuk ditambahkan atau satu ambang untuk diperketat sebagai hasilnya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memakai ukuran ini untuk melihat apakah pipeline dan flag mereka benar-benar memberi kendali atas paparan. Tampilan paling berguna adalah jeda, ukuran batch, dan usia perubahan menunggu tertua, karena masing-masing menunjuk pada sesuatu yang dapat diubah tim.

### Tim layanan dan operasi

Tim operasi dan dukungan peduli apa yang berubah di produksi dan kapan. Peristiwa rilis dan perubahan flag perlu terlihat oleh mereka, idealnya dengan pengenal rilis pada setiap insiden. Peluncuran bertahap dan pematian cepat mengurangi jumlah insiden yang butuh pemulihan penuh, dan ukuran membantu tim operasi meminta kendali yang membuat kerja mereka lebih tenang.

### Kepemimpinan dan tata kelola

Pemimpin sebaiknya meminta tren dan sebaran untuk tiap layanan, dan jawaban atas pertanyaan sederhana: berapa lama perubahan selesai sampai ke pengguna, dan seberapa aman. Target untuk frekuensi deployment di seluruh tim mengundang pemecahan dan pelabelan ulang, jadi utamakan target untuk hasil seperti distribusi lead time dan penyingkiran penantian yang diketahui. Tata kelola dapat mengurangi beban persetujuan rilis dengan mengotorisasi di muka perubahan berflag berisiko rendah, selama jejak audit flag lengkap (lihat topik 4.3, Metrik pemberdayaan perubahan).

### Pelanggan dan pengguna

Pelanggan melihat rilis, bukan deployment. Mereka peduli perbaikan tiba segera, perilaku baru tidak mengejutkan mereka, dan perubahan buruk dapat dibalikkan cepat. Tim yang memisahkan kedua peristiwa dapat memberi pelanggan akses awal ke fitur, dapat mengumumkan tanggal yang dapat dijaganya, dan dapat me-rollback satu fitur tanpa kehilangan sisanya. Pasangkan ukuran ini dengan yang menghadap pelanggan (lihat topik 5.3, Metrik ketersediaan, dan topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring regional menjalankan layanan pencarian produk yang dimiliki satu tim produk, didukung tim platform dan service desk. Layanan di-deploy ke produksi lewat pipeline dan punya layanan flag yang diperkenalkan enam bulan lalu. Semua angka di bawah bersifat ilustratif.

Pada kuartal terakhir tim membuat 52 deployment produksi, sekitar empat per pekan. Frekuensi rilis, dihitung sebagai saat perubahan menjadi dapat dijangkau semua pengguna yang dituju, adalah 11 untuk kuartal yang sama, sekitar satu per pekan. Median lead time rilis, dari penggabungan ke rilis, adalah 9 hari, dengan persentil ke-85 sebesar 21 hari. Median jeda deployment-ke-rilis adalah 6 hari. Median ukuran batch rilis adalah 3 perubahan dan persentil ke-85 adalah 14. Cakupan flag untuk perubahan terlihat pengguna adalah 58 persen, dan 17 flag rilis lebih dari 30 hari melewati peluncuran penuh.

Risiko manipulasi sudah terlihat. Beberapa deployment hanya-konfigurasi, dan pipeline menghitung masing-masing sebagai deployment, sehingga dasbor kini menunjukkan deret konfigurasi terpisah dan tinjauan bulanan mengambil sampel 10 deployment untuk perubahan terlihat pengguna. Seorang manajer regional melihat hitungan deployment dan meminta tim menaikkannya agar cocok dengan angka tim lain. Pemimpin tim menolak target itu dan membawa himpunan penuh angka ke tinjauan bulanan sebagai gantinya. Tinjauan menemukan bahwa jeda panjang karena rilis menunggu pengarahan pemasaran dan dukungan mingguan, bahwa empat dari 17 flag basi menjaga jalur kode yang tak diuji siapa pun, dan bahwa persentil ke-85 ukuran batch berasal dari beberapa rilis yang membundel perubahan tak berkaitan sebelum pembekuan liburan.

Keputusan, dicatat dalam log keputusan, punya empat bagian. Dukungan dan pemasaran akan ikut serta dalam pengarahan dua kali seminggu yang lebih singkat, agar keputusan rilis tidak lagi menunggu slot mingguan. Setiap flag rilis mendapat pemilik dan tanggal penghapusan, dan empat flag basi yang tak diuji dihapus dalam dua pekan ke depan. Rilis yang membundel perubahan tak berkaitan butuh alasan yang dinyatakan dalam catatan rilis. Dan tim menolak target deployment umum, menawarkan tampilan bersama distribusi lead time rilis tiap layanan dan kebersihan flag sebagai gantinya. Manajer perubahan setuju memperlakukan perubahan berflag yang lulus pemeriksaan pipeline sebagai perubahan standar, dengan tinjauan kuartal depan. Pada kuartal berikutnya (ilustratif), median lead time rilis turun menjadi 5 hari, hitungan flag basi turun menjadi 6, dan tingkat kegagalan perubahan tetap mantap, sehingga eksperimen berlanjut.

## Sudut pandang sektor

**Startup.** Startup sering punya satu layanan dan pustaka flag dalam kode, sehingga deployment dan rilis dapat dipisahkan dengan murah. Simpan register sederhana flag dengan tanggal kedaluwarsa, dan tunggu volume cukup sebelum memercayai persentil.

**Bisnis kecil.** Bisnis kecil mungkin menjalankan perangkat lunak paket atau yang dibeli tempat pemasok mengendalikan rilis. Ukuran berguna adalah waktu antara rilis pemasok dan adopsi bisnis, dan batch perubahan yang tiba bersama dalam versi mayor. Catat tanggal rilis pemasok dan tanggal deployment Anda sendiri agar penantian di antaranya terlihat.

**Perusahaan besar.** Perusahaan besar menghadapi banyak layanan dengan gaya rilis berbeda, proses perubahan pusat, dan lingkungan bersama. Pekerjaan utamanya adalah menyepakati definisi deployment dan rilis lintas tim dan pemasok, dan menjaga rekap yang menghormati perbedaan. Pakai sebaran dan tren untuk tata kelola dan perlakukan platform flag sebagai layanan bersama dengan pemilik.

**Pemerintah dan sektor publik.** Rilis sering terikat pada tanggal tetap, undang-undang, siklus pengadaan, atau gerbang jaminan, jadi frekuensi rilis mungkin rendah karena alasan yang baik. Frekuensi deployment dan jeda deployment-ke-rilis masih dapat menunjukkan berapa banyak risiko yang diambil lebih awal dan berapa banyak menunggu tanggal. Laporkan penantian gerbang eksternal terpisah dari waktu pipeline tim sendiri.

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasi untuk ukuran ini adalah mengurangi risiko dan keterlambatan antara menyelesaikan perubahan dan menyampaikan nilainya. Batch besar yang jarang dirilis membawa lebih banyak perubahan per peristiwa, sehingga kegagalan lebih sulit didiagnosis dan lebih sulit dibalikkan. Memisahkan deployment dari rilis memberi tim cara mengambil risiko teknis lebih awal dan dalam jumlah kecil, dan mengambil risiko pengguna dengan sengaja. Ukuran menunjukkan apakah pemisahan itu nyata, dan di mana perubahan menunggu.

Biayanya sedang. Mengumpulkan peristiwa deployment dan rilis membutuhkan log pipeline dan log audit flag yang digabung dengan kendali versi dan pelacak isu, yang merupakan integrasi sekali jalan diikuti perawatan sesekali (lihat topik 1.5, Sumber data dan instrumentasi). Praktik flag sendiri punya biaya berjalan: platform atau pustaka, register, menguji kedua jalur perubahan berflag, dan pembersihan flag kedaluwarsa. Biaya tersembunyi utama adalah utang flag, yang dijaga tetap terlihat oleh hitungan flag basi.

Imbal hasil mengikuti pola yang dapat diamati kebanyakan tim dalam data mereka sendiri. Lead time rilis lebih pendek berarti putaran umpan balik lebih cepat tentang apakah perubahan membantu pengguna. Batch lebih kecil berarti diagnosis lebih mudah dan pembalikan lebih mudah. Jeda deployment-ke-rilis lebih pendek berarti lebih sedikit waktu pekerjaan selesai duduk tanpa terwujud. Jangan mengarang angka untuk nilainya. Pakai contoh tim sendiri tentang perubahan yang duduk gelap berpekan-pekan dan tren ukuran sendiri.

## Anti-pola dan jebakan

- **Menetapkan target frekuensi deployment untuk setiap tim.** Itu mengundang pemecahan dan pelabelan ulang. Tetapkan target hasil, seperti distribusi lead time yang lebih sempit, dan biarkan frekuensi mengikuti.
- **Memperlakukan kereta rilis sebagai bukti kemampuan.** Kalender tetap memberi hitungan mantap dan menyembunyikan usia pekerjaan yang menunggu. Lacak usia perubahan tergabung tertua yang tak dapat dijangkau pengguna.
- **Menghitung perubahan konfigurasi sebagai deployment dalam deret utama.** Itu menggelembungkan angka. Simpan deret terpisah dan tampilkan di samping yang utama.
- **Tidak pernah menghapus flag.** Kode menumpuk cabang mati dan kombinasi tak teruji. Beri setiap flag rilis pemilik dan tanggal penghapusan, dan perlakukan penghapusan sebagai bagian selesai.
- **Mengubah flag di produksi tanpa catatan.** Perubahan flag adalah perubahan perilaku produksi. Kirim ke log audit dan buat terlihat oleh pemberdayaan perubahan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | “Deployment” dan “rilis” dipakai bergantian; tiap orang menghitung berbeda | Beberapa tim menuliskan definisi sendiri | Satu definisi tertulis deployment dan rilis, dengan jam dan pengecualian, di register metrik | Perubahan definisi dicatat dan ditandai pada bagan; sampel diperiksa tiap kuartal | Definisi direvisi bersama pemasok dan tata kelola ketika tidak lagi memberi masukan bagi keputusan |
| Pemisahan deployment dan rilis | Setiap deployment adalah rilis | Beberapa tim memakai flag atau peluncuran bertahap untuk perubahan berisiko | Flag dan peluncuran bertahap adalah opsi standar, dengan peristiwa rilis dicatat | Jeda, ukuran batch, dan tahap peluncuran diplot tren dan ditinjau | Waktu rilis dikoordinasikan antartim dan pemasok untuk layanan terkait |
| Penangkapan data | Hitungan dirakit dengan tangan dari tiket dan obrolan | Data pipeline untuk beberapa layanan; rilis dicatat dengan tangan | Deployment, rilis, dan perubahan flag ditangkap otomatis untuk kebanyakan layanan | Mutu data (tingkat tautan, audit sampel) diukur dan diplot tren | Peristiwa dibagikan antartim dan pemasok lewat antarmuka yang disepakati |
| Kebersihan flag | Tanpa inventaris | Daftar informal di beberapa tim | Register dengan pemilik, jenis, dan tanggal kedaluwarsa untuk setiap flag rilis | Hitungan flag basi diplot tren; penghapusan adalah bagian selesai dan diperiksa | Platform flag dikelola sebagai layanan bersama dengan pengingat kedaluwarsa otomatis |
| Pemakaian angka | Dilaporkan ke atas sebagai satu hitungan | Tim melihat bagan mereka sendiri sesekali | Ditinjau bulanan oleh tim pemilik di samping angka kegagalan dan pengerjaan ulang | Tren menyuapi perbaikan yang didanai dengan pagar pembatas | Sebaran dan tren menginformasikan investasi platform dan kebijakan perubahan di seluruh organisasi |

## Daftar periksa

- [ ] “Deployment” dan “rilis” didefinisikan secara tertulis, dengan peristiwa jam dan pengecualian untuk masing-masing.
- [ ] Deployment ke produksi ditangkap otomatis dari pipeline, dengan lingkungan uji dikecualikan.
- [ ] Peristiwa rilis ditangkap dari log audit flag, tahap peluncuran, atau catatan rilis.
- [ ] Lead time rilis memakai awal jam yang dinyatakan dan melaporkan median dan persentil ke-85.
- [ ] Jeda deployment-ke-rilis dan ukuran batch rilis dilaporkan di samping frekuensi.
- [ ] Deployment hanya-konfigurasi muncul dalam deret terpisah.
- [ ] Setiap flag rilis punya pemilik, jenis, dan tanggal kedaluwarsa dalam register.
- [ ] Flag basi ditinjau bulanan dan penghapusannya adalah bagian selesai.
- [ ] Pengenal rilis muncul pada catatan insiden dan perubahan.
- [ ] Sampel deployment dan rilis diaudit tiap kuartal terhadap definisi.
- [ ] Satu eksperimen perbaikan, terkait penantian terlama, berjalan dengan tanggal tinjauan.

## Prompt AI

**Susun definisi deployment dan rilis untuk suatu layanan.**

```text
Saya mendefinisikan metrik rilis dan deployment untuk [service name]. Alat kami
[version control host, CI/CD system, flag service, issue tracker, ITSM tool].
Gaya rilis kami [continuous, weekly train, monthly, store-reviewed, or other].
Untuk frekuensi deployment, frekuensi rilis, lead time rilis, jeda
deployment-ke-rilis, ukuran batch rilis, cakupan feature flag, dan hitungan flag
basi, susun definisi yang menyatakan di mana jam mulai dan berhenti, apa yang
dihitung dan dikecualikan, sumber data, dan satu ambiguitas untuk diselesaikan.
Jangan mengarang nilai acuan atau mengklaim praktik kami cocok dengan pita
kinerja terbitan mana pun. Daftar asumsi Anda dan pertanyaan yang harus saya
jawab untuk menyelesaikan definisi.
```

**Periksa himpunan metrik rilis untuk risiko manipulasi.**

```text
Berikut cara kami menghitung dan melaporkan metrik rilis dan deployment kami:
[description of each metric, its data source, and how it is reported]. Audiensnya
[team, leadership, or governance body] dan target, jika ada, adalah [targets or
none]. Untuk setiap metrik, daftar cara yang masuk akal angka dapat digelembungkan,
disembunyikan, atau didistorsi tanpa perbaikan nyata, dan sarankan metrik atau
praktik pagar pembatas berpasangan yang akan menangkapnya. Jangan mengarang
statistik. Daftar asumsi Anda dan informasi apa pun yang Anda butuhkan agar lebih
tepat.
```

**Analisis ekspor deployment, rilis, dan flag.**

```text
Saya akan menempelkan ekspor kecil dengan kolom ini: [list fields, for example
deployment id, deployment time, result, change ids, flag name, flag on time,
exposure share, release time]. Mencakup [number] deployment dan [number] flag
untuk [service name] antara [start date] dan [end date]. Hitung median dan
persentil ke-85 lead time rilis dan jeda deployment-ke-rilis, distribusi ukuran
batch, dan daftar flag yang melewati [age limit] hari sejak peluncuran penuh,
dengan menunjukkan hitungan di balik masing-masing. Tandai catatan dengan tautan
hilang atau stempel waktu mencurigakan. Jangan mengekstrapolasi di luar data atau
membandingkan hasil dengan acuan luar. Daftar asumsi Anda dan masalah kualitas
data yang membatasi kesimpulan.
```

**Rencanakan eksperimen pembersihan flag dan penantian rilis.**

```text
Penantian rilis terlama kami adalah [description of the wait, with date range and
counts], dan register flag kami berisi [number] flag rilis, dengan [number] di
antaranya melewati tanggal kedaluwarsa. Kendalanya [constraints, for example
regulated releases, store review, shared test environment]. Usulkan tiga
eksperimen kecil empat sampai enam pekan, masing-masing dengan hipotesis, cara
mengamati efek, metrik pagar pembatas, dan risiko. Jangan mengarang angka
perbaikan yang diharapkan. Daftar asumsi Anda dan apa yang harus kami periksa
sebelum memulai.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik perubahan, rilis, dan insiden terkait dan pagar pembatas yang harus berada di samping setiap metrik rilis.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa versi topik ini yang direvisi menjaga jam, vektor manipulasi, dan referensi silangnya tetap konsisten.

## Poin penting

- Deployment menaruh versi ke dalam lingkungan dan rilis membuat perubahan dapat dijangkau pengguna. Ukur keduanya terpisah di mana pun Anda bisa.
- Lead time rilis sebaiknya berakhir pada rilis, dengan awal yang dinyatakan, dan dilaporkan sebagai median dan persentil ke-85.
- Jeda deployment-ke-rilis dan ukuran batch menunjukkan apakah pemisahan nyata, dan menjaga frekuensi dari pemecahan dan pelabelan ulang.
- Feature flag memungkinkan pemisahan dan membawa biaya, jadi lacak cakupan dan flag basi dengan pemilik dan tanggal kedaluwarsa.
- Hitung menurut aturan tertulis, tautkan rilis ke insiden dan perubahan, dan bandingkan layanan dengan riwayatnya sendiri alih-alih dengan tim lain.

## Referensi dan bacaan lanjutan

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
