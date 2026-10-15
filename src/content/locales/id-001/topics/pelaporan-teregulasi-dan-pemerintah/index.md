# Pelaporan teregulasi dan pemerintah

**Pelaporan wajib adalah persyaratan tetap untuk dirancang di sekitarnya, jadi bangun dari catatan yang sama yang Anda pakai untuk menjalankan layanan, jaga pandangan pelaporan terpisah dari pandangan pembelajaran, dan lindungi orang yang mengerjakan pekerjaan dari target yang mendistorsinya.**

## Gambaran umum dan motivasi

Banyak organisasi harus melaporkan layanan mereka entah mereka memilihnya atau tidak. Regulator meminta pemberitahuan insiden, angka ketersediaan, dan bukti kendali. Pemerintah mewajibkan lembaga menerbitkan data kinerja, belanja, dan pernyataan aksesibilitas. Pendana dan badan pengawas meminta hasil terhadap komitmen. Kontrak mewajibkan laporan layanan. Dalam pengaturan ini, pelaporan bukan pilihan manajemen internal. Ia adalah kewajiban dengan tenggat, definisi, dan kadang penalti.

[Sektor publik](https://en.wikipedia.org/wiki/Public_sector) punya ciri khusus. [Akuntabilitas](https://en.wikipedia.org/wiki/Accountability) kepada warga dan badan terpilih adalah kewajiban inti, dan dijalankan lewat audit, legislasi, [undang-undang keterbukaan informasi](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country), dan hasil yang diterbitkan. Praktik [pemerintahan terbuka](https://en.wikipedia.org/wiki/Open_government) dan [data terbuka](https://en.wikipedia.org/wiki/Open_data) membuat informasi tersedia untuk diperiksa dan dipakai ulang. Aturan [pengadaan publik](https://en.wikipedia.org/wiki/Public_procurement) membentuk apa yang dapat dibeli dan bagaimana, dan kewajiban [manajemen arsip](https://en.wikipedia.org/wiki/Records_management) mengatur berapa lama informasi disimpan. [Nilai uang](https://en.wikipedia.org/wiki/Value_for_money) adalah ujian umum belanja publik, dan badan independen melakukan [audit kinerja](https://en.wikipedia.org/wiki/Performance_audit) untuk memeriksanya. Detailnya berbeda menurut negara, tingkat pemerintahan, dan sektor, dan topik ini menggambarkan praktik pengukuran, bukan persyaratan hukum. Bekerjalah dengan rekan hukum, kepatuhan, dan arsip Anda.

Organisasi swasta teregulasi, seperti di bidang keuangan, kesehatan, energi, dan telekomunikasi, berbagi banyak ciri ini. Mereka menghadapi kewajiban pemberitahuan insiden, pelaporan ketahanan, dan tinjauan pengawasan. Benang merahnya adalah bahwa seseorang di luar tim pengiriman menentukan apa yang harus dilaporkan dan kapan.

Pengiriman berkelanjutan dan praktik ITIL sama-sama punya sesuatu untuk ditawarkan. Tujuan agile tentang kolaborasi berkelanjutan dengan pemangku kepentingan meluas ke badan pengawas, yang merupakan pemangku kepentingan dengan kebutuhan sah, dan percakapan awal tentang apa yang mereka butuhkan dapat mencegah pengerjaan ulang. Kebiasaan agile menyampaikan inkremen kecil yang berfungsi secara berkelanjutan cocok untuk pelaporan: laporan yang dihasilkan otomatis dari sistem pencatatan lebih akurat dan lebih murah daripada yang disusun dengan tangan tiap kuartal. Praktik pengukuran dan pelaporan ITIL, dan manajemen tingkat layanannya, memberi kosakata untuk mendefinisikan apa yang diukur dan dibagikan.

Kewajiban pelaporan menciptakan tiga bahaya yang dikenal.

- **Distorsi oleh target.** Ketika angka yang dilaporkan membawa konsekuensi, pekerjaan membengkok ke arah angka. Literatur sektor publik tentang target, termasuk tulisan John Seddon tentang pemikiran sistem di sektor publik dan analisis Jerry Muller tentang fiksasi metrik, menggambarkan banyak kasus tempat mencapai target dan melayani publik menyimpang. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku dengan kekuatan penuh (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).
- **Dua set angka.** Definisi statutori sebuah angka sering berbeda dari yang dipakai tim secara internal. Jika tim mengelola dengan satu dan melaporkan yang lain, tak ada yang memercayai keduanya. Jaga keduanya terlihat, rekonsiliasikan, dan jelaskan perbedaannya.
- **Pelaporan sebagai beban.** Permintaan manual, berulang, dan tidak konsisten menghabiskan orang terampil. Semakin pelaporan bergantung pada kerja lembar kerja yang heroik, semakin banyak galat dan keterlambatan menyelinap masuk.

Topik ini membangun di atas ukuran kepatuhan, risiko, dan pemasok bagian ini (lihat topik 8.2, Metrik risiko dan kendali, topik 8.3, Metrik kepatuhan dan audit, dan topik 8.4, Metrik pemasok dan kontrak) dan di atas fondasi data dari bagian pertama (lihat topik 1.5, Sumber data dan instrumentasi).

## Prinsip utama

- **Perlakukan kewajiban sebagai masukan desain.** Daftar sejak dini, dengan definisi, tenggat, dan pemilik, dan rancang pengumpulan data di sekitarnya.
- **Hasilkan laporan dari sistem pencatatan.** Otomatisasi ekstraksi dan jaga garis keturunan terlihat.
- **Pisahkan pandangan pelaporan dari pandangan pembelajaran.** Tim butuh ukuran kerja yang terus terang yang tak dibatasi oleh apa yang dilaporkan.
- **Rekonsiliasikan definisi.** Tunjukkan bagaimana angka statutori berhubungan dengan ukuran tim sendiri.
- **Laporkan dengan jujur, termasuk kabar buruk.** Koreksi dan konteks membangun kepercayaan.
- **Lindungi orang dari target yang menyimpang.** Pakai target statutori dengan ukuran pendamping dan jelaskan batasnya.
- **Buat data yang diterbitkan dapat dipakai.** Aksesibilitas, kejelasan, dan format penting bagi publik.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan kewajiban pelaporan | Porsi kewajiban pelaporan dengan pemilik bernama, definisi yang dinyatakan, sumber data, dan entri kalender | kewajiban dengan keempatnya / kewajiban pelaporan dalam lingkup | persen | Register kewajiban | Pengukuran dan pelaporan; tata kelola | Kesepakatan kerja dengan pemangku kepentingan tentang kebutuhan informasi | Kuartalan |
| Ketepatan waktu laporan | Porsi laporan wajib yang diserahkan sebelum tenggatnya | laporan diserahkan pada atau sebelum tenggat / laporan jatuh tempo pada periode itu | persen | Kalender pelaporan dan catatan penyerahan | Pengukuran dan pelaporan | Komitmen kepada pemangku kepentingan terpenuhi | Bulanan |
| Tingkat restatement | Porsi laporan atau angka yang diserahkan yang kemudian dikoreksi | laporan atau angka dikoreksi setelah penyerahan / laporan atau angka yang diserahkan | persen | Log penyerahan dan log koreksi | Pengukuran dan pelaporan; perbaikan berkelanjutan | Cacat yang lolos | Kuartalan |
| Cakupan keterlacakan | Porsi angka yang dilaporkan yang dapat ditelusuri ke sistem pencatatan lewat langkah terdokumentasi | angka dengan garis keturunan terdokumentasi ke sistem pencatatan / angka yang dilaporkan | persen | Dokumentasi garis keturunan, spesifikasi laporan | Pengukuran dan pelaporan; manajemen pengetahuan | Build yang dapat direproduksi | Kuartalan |
| Keselarasan definisi | Porsi ukuran yang dilaporkan yang definisi statutori dan definisi internalnya terdokumentasi dan direkonsiliasi | ukuran dengan rekonsiliasi terdokumentasi / ukuran yang dilaporkan dengan definisi statutori | persen | Register metrik | Pengukuran dan pelaporan; manajemen tingkat layanan | Definisi selesai bersama | Kuartalan |
| Upaya pelaporan | Jam-orang yang dihabiskan untuk menghasilkan laporan berulang | jam tercatat per siklus laporan, dengan porsi yang berupa ekstraksi dan perakitan manual | jam | Estimasi waktu, log upaya | Pengukuran dan pelaporan; perbaikan berkelanjutan | Biaya pekerjaan non-pengiriman | Per siklus laporan |
| Kesesuaian aksesibilitas yang diterbitkan | Porsi laporan dan set data yang diterbitkan yang memenuhi standar aksesibilitas yang diwajibkan | item diterbitkan yang lulus pemeriksaan aksesibilitas / item yang diterbitkan | persen | Hasil pengujian aksesibilitas | Pengukuran dan pelaporan; manajemen pengetahuan | Definisi selesai yang inklusif | Kuartalan |

Tuliskan definisi statutori, sumber, dan tenggat di samping setiap ukuran yang dilaporkan. Laporan “tepat waktu” ketika diterima oleh badan penerima, bukan ketika dikirim, jika penerimaan dicatat. Restatement menghitung setiap koreksi pada angka yang sudah diserahkan, sukarela maupun diwajibkan. Upaya pelaporan adalah ukuran tren bagi organisasi dan tidak pernah ukuran individu. Kesesuaian aksesibilitas diperiksa terhadap standar yang berlaku bagi Anda, seperti Web Content Accessibility Guidelines.

## Rekomendasi

### Perlakukan kewajiban sebagai masukan desain

**1. Simpan register kewajiban pelaporan.** Untuk tiap kewajiban, catat persyaratan, sumber hukum atau kontraktual, apa yang dilaporkan, definisi, tenggat, badan penerima, pemilik internal, dan sumber data. Tinjau ketika undang-undang, kontrak, atau regulator berubah. Kewajiban yang diketahui dini dapat dirancang masuk, dan yang ditemukan terlambat harus dirakit dengan tangan.

**2. Libatkan badan pengawas sejak dini.** Tanyakan kepada regulator, auditor, dan pendana apa yang akan mereka lakukan dengan data dan apa yang mereka butuhkan. Sebagian akan membantu membentuk definisi atau menerima data dalam bentuk yang sudah Anda hasilkan. Praktik agile menghargai kolaborasi dengan pemangku kepentingan, dan badan pengawas adalah pemangku kepentingan. Simpan catatan percakapan ini, dan jaga independensi di mana penting.

**3. Rancang pengumpulan data untuk pelaporan sejak awal.** Saat membangun layanan, sertakan peristiwa dan bidang yang dibutuhkan laporan wajib: stempel waktu insiden, dampak, kategori, jumlah pengguna. Menambahkannya kemudian mahal. Definisikan sekali, dan bagikan definisi lintas tim, dengan satu pemilik untuk definisi itu (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

### Hasilkan laporan dari sistem pencatatan

**4. Otomatisasi pipeline dari catatan ke laporan.** Ekstrak dari sistem insiden, perubahan, dan layanan dengan kueri berskrip, terapkan transformasi terdokumentasi, dan hasilkan laporan dengan templat yang ditinjau. Laporan otomatis dapat diulang, lebih cepat, dan lebih mudah diaudit daripada yang manual. Beri versi pada kueri dan templat agar laporan masa lalu dapat direproduksi.

**5. Dokumentasikan garis keturunan.** Untuk tiap angka yang dilaporkan, catat dari mana asalnya, bagaimana dihitung, dan siapa yang memeriksanya. Cakupan keterlacakan mengukur seberapa baik ini dilakukan. Auditor atau jurnalis yang bertanya “dari mana angka ini berasal?” sebaiknya mendapat jawaban jelas dalam hitungan menit.

**6. Tinjau sebelum penyerahan, dengan pembaca independen.** Minta seseorang di luar tim yang menghasilkan laporan memeriksa definisi, aritmetika, dan narasi. Tinjauan menangkap galat dan klaim tak berdasar. Catat tinjauan. Persetujuan singkat dari orang yang bertanggung jawab membuat kepemilikan jelas.

**7. Koreksi secara terbuka.** Ketika galat ditemukan setelah penyerahan, koreksi segera, jelaskan apa yang berubah, dan catat sebabnya. Tingkat restatement mendekati nol mencurigakan jika datanya kompleks. Koreksi yang terlihat dan cepat membangun lebih banyak kepercayaan daripada angka yang dibiarkan.

### Jaga pelaporan dan pembelajaran tetap terpisah

**8. Pelihara pandangan kerja untuk tim.** Tim butuh ukuran yang membantu mereka memperbaiki, seperti persentil, usia item tertua, dan pendamping mutu. Ini jarang sama dengan angka statutori. Jangan membatasi pandangan kerja pada apa yang dilaporkan, dan jangan mengelola semata-mata dengan angka yang dilaporkan.

**9. Rekonsiliasikan definisi statutori dan internal.** Di mana ukuran yang diwajibkan berbeda dari milik tim, dokumentasikan perbedaannya dan tunjukkan keduanya. Misalnya, angka ketersediaan regulator dapat mengecualikan pemeliharaan terencana, sementara pengguna mengalaminya sebagai waktu henti. Tunjukkan rekonsiliasi di register metrik dan di catatan laporan. Ini menjaga dari masalah “dua set angka”.

**10. Pasangkan target statutori dengan pendamping.** Jika target dipaksakan, tambahkan ukuran yang akan mengungkap distorsi: mutu, pengalaman pengguna, dan pekerjaan yang ditinggalkan. Misalnya, pasangkan target untuk waktu respons pertama dengan ukuran penyelesaian dan kontak berulang (lihat topik 3.1, Metrik service desk). Jelaskan dalam laporan bagaimana angka sebaiknya dibaca.

### Terbitkan untuk publik

**11. Buat informasi yang diterbitkan dapat dipakai.** Terbitkan dalam format terbuka yang terbaca mesin di mana hukum dan privasi mengizinkan, dengan deskripsi, definisi, dan tanggal yang jelas. Penuhi standar aksesibilitas untuk dokumen dan halaman web. Menerbitkan data dengan cara yang tak dapat dibaca atau dipakai ulang orang memenuhi huruf dan menggagalkan tujuan. Uji dengan pengguna nyata, termasuk yang memakai teknologi bantu (lihat topik 6.4, Pengalaman pengguna dan karyawan).

**12. Lindungi privasi dan keamanan dalam apa yang Anda terbitkan.** Agregasikan dan tekan angka kecil yang dapat mengidentifikasi orang, hindari menerbitkan detail yang membantu penyerang, dan periksa aturan pengungkapan bersama spesialis. Terapkan kehati-hatian yang sama pada tanggapan berdasarkan undang-undang keterbukaan informasi. Catat keputusan tentang penyuntingan dan alasannya.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan kewajiban pelaporan | Memperlakukan kewajiban secara sempit; mendaftar pemilik tanpa kesepakatan | Tinjauan register oleh kepatuhan atau audit internal; konfirmasi dari pemilik |
| Ketepatan waktu laporan | Menyerahkan laporan tak lengkap untuk memenuhi tanggal; menghitung draf sebagai penyerahan | Pemeriksaan kelengkapan saat penyerahan; hitung hanya laporan yang diterima; tingkat restatement |
| Tingkat restatement | Menekan koreksi; membuat koreksi secara diam-diam | Log koreksi ditinjau pembaca independen; tingkat rendah dibaca bersama keterlacakan |
| Cakupan keterlacakan | Mendokumentasikan garis keturunan secara dangkal; hanya menyertakan angka sederhana | Ambil sampel garis keturunan dengan menghitung ulang dari sumber |
| Keselarasan definisi | Menyatakan definisi selaras tanpa rekonsiliasi; mengadopsi definisi statutori hanya dalam laporan | Dokumen rekonsiliasi ditinjau; tunjukkan kedua angka berdampingan |
| Upaya pelaporan | Tidak mencatat jam; memindahkan pekerjaan ke tim lain | Bandingkan dengan umpan balik tim; sertakan semua kontributor dalam estimasi |
| Kesesuaian aksesibilitas yang diterbitkan | Menjalankan pemeriksa yang hanya menemukan sebagian isu; menerbitkan versi aksesibel terpisah yang tertinggal | Pengujian manual dengan teknologi bantu; periksa paritas antar-versi |

Pembacaan yang sehat adalah setiap kewajiban dimiliki, laporan tepat waktu dan akurat dengan koreksi yang terlihat, angka dapat ditelusuri ke sistem pencatatan, definisi statutori dan internal direkonsiliasi, upaya pelaporan yang turun, dan informasi terbitan yang dapat dipakai publik.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Perakitan laporan manual | Fleksibel; bekerja dengan data apa pun | Lambat, rawan galat, bergantung pada individu |
| Pelaporan otomatis | Dapat diulang, dapat diaudit, murah dijalankan | Upaya penyiapan; dapat mengukuhkan definisi yang buruk |
| Satu set ukuran untuk semuanya | Sederhana | Mendistorsi pekerjaan; angka statutori jarang cocok dengan kebutuhan tim |
| Pandangan pelaporan dan pembelajaran terpisah | Pembelajaran terus terang; pelaporan jujur | Butuh rekonsiliasi dan disiplin |
| Target statutori keras | Akuntabilitas jelas | Efek menyimpang; manipulasi |
| Target dengan pendamping dan konteks | Mengungkap distorsi | Lebih banyak untuk dijelaskan |
| Keterlibatan awal dengan regulator | Lebih sedikit kejutan | Waktu; batas untuk dijaga |
| Hanya hubungan berjarak | Independensi jelas | Umpan balik terlambat; pengerjaan ulang |

Jawaban prosanya adalah mengotomatisasi laporan dari sistem pencatatan, menjaga pandangan kerja tim terpisah dari pandangan pelaporan, merekonsiliasi definisi secara terbuka, dan melibatkan badan pengawas sejak dini sambil menjaga independensi mereka.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Laporan apa yang kita utang, kepada siapa, dan kapan, dan siapa pemilik masing-masing?**
Susun daftar di ruangan dan bandingkan dengan register. Celah sering muncul: laporan yang terutang di bawah kontrak, kepada pendana, atau di bawah aturan yang diketahui sedikit orang. Fasilitator sebaiknya mencatat butir baru dan menugaskan pemilik.

**2. Angka yang dilaporkan mana yang akan kita kelola secara berbeda jika tidak dilaporkan?**
Pilih ukuran statutori atau kontraktual dan tanyakan apa yang akan dilakukan tim jika tak ada yang mengukurnya. Jawabannya mengungkap di mana angka dan tujuan menyimpang. Bahas ukuran pendamping apa yang akan menunjukkan perbedaannya.

**3. Dapatkah kita mereproduksi laporan kuartal lalu dari sumber hari ini?**
Cobalah dengan satu laporan. Catat apa yang manual, tak terdokumentasi, atau hilang. Sepakati langkah pertama untuk mengotomatisasi atau mendokumentasikan, dan siapa yang akan melakukannya.

**4. Bagaimana kita menangani galat yang ditemukan setelah penyerahan?**
Tinjau prosesnya dan contoh terakhir. Apakah koreksinya cepat dan terbuka? Adakah yang takut mengangkatnya? Sepakati apa yang membuat koreksi normal.

**5. Apa yang akan dialami orang yang memakai teknologi bantu saat membaca laporan terbitan kita?**
Uji satu item terbitan bersama, atau tinjau pemeriksaan aksesibilitas terbaru. Tanyakan siapa yang memiliki aksesibilitas untuk dokumen terbitan. Sepakati satu perbaikan dan proses untuk mencegah terulang.

**6. Apa yang sebenarnya dilakukan regulator atau badan pengawas dengan data kita?**
Banyak tim tidak tahu. Rencanakan percakapan untuk mencari tahu dan menanyakan apakah bentuk berbeda akan melayani mereka sama baiknya. Fasilitator sebaiknya mencatat batas independensi.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman membangun peristiwa dan bidang yang menjadi sandaran laporan, dan merasakan tekanan target statutori. Mereka sebaiknya memasukkan kebutuhan pelaporan dalam definisi selesai, menjaga pandangan kerja yang terus terang, dan menandai ketika target mendistorsi pekerjaan. Percakapan awal dengan orang yang melaporkan membantu mencegah pengerjaan ulang.

### Tim layanan dan operasi

Tim operasi menghasilkan sebagian besar data yang mendasari dan sering menyiapkan laporan. Mereka sebaiknya mendokumentasikan garis keturunan, mengotomatisasi ekstraksi, dan menyimpan log koreksi. Mereka berada di posisi baik untuk menjelaskan bagaimana angka sebaiknya dibaca, dan memperingatkan ketika menyesatkan.

### Kepemimpinan dan tata kelola

Pemimpin bertanggung jawab atas akurasi dan kejujuran apa yang dilaporkan. Mereka sebaiknya meminta keterlacakan dan rekonsiliasi, menolak mengubah angka statutori menjadi target individu, melindungi orang yang mengangkat galat, dan mendukung keterlibatan dengan badan pengawas. Tata kelola sebaiknya meninjau register kewajiban dan riwayat restatement.

### Pelanggan dan pengguna

Publik dan pelanggan mengandalkan informasi terbitan untuk meminta pertanggungjawaban layanan. Mereka butuh data yang dapat ditemukan, dibaca, dan dipakai ulang, dalam format aksesibel, dengan penjelasan jelas tentang maknanya. Mereka juga berhak atas pemberitahuan segera ketika insiden memengaruhi mereka, sebagaimana aturan dapat mewajibkan.

## Dalam praktik: contoh ITIL agile

Sebuah lembaga nasional menyediakan layanan perizinan daring yang dipakai beberapa juta orang per tahun. Ia harus melapor tiap bulan kepada kementerian, menerbitkan data kinerja tahunan, dan memberi tahu regulatornya tentang insiden layanan besar dalam waktu tetap. Angka di bawah bersifat ilustratif.

Tinjauan internal menemukan bahwa lembaga itu berutang 31 laporan dari berbagai jenis, dan hanya 22 yang ada di register kewajiban dengan pemilik bernama dan definisi, cakupan 71 persen. Angka bulanan dirakit dengan tangan selama sekitar 60 jam, kebanyakan menarik dari tiga sistem ke lembar kerja. Keterlacakan buruk: untuk angka utama, ketersediaan, tak ada yang dapat mereproduksi angka tahun lalu. Definisi ketersediaan kementerian mengecualikan pemeliharaan terencana, dan pandangan kerja lembaga sendiri menghitungnya, yang menjelaskan mengapa pengguna dan kementerian melihat gambaran berbeda. Lembaga memenuhi target waktu respons pertama tiap bulan, dan service desk mulai mengakui permintaan secara otomatis untuk mencapainya, sementara waktu penyelesaian naik. Dua laporan terbitan gagal uji aksesibilitas ketika diperiksa dengan pembaca layar.

Kepala kinerja layanan lembaga menyepakati perubahan dengan kementerian dan tim pengiriman serta operasi. Register kewajiban menjadi lengkap, dengan pemilik, definisi, dan tanggal. Angka bulanan berasal dari kueri berskrip atas sistem insiden dan pemantauan, dengan transformasi terdokumentasi dan templat yang ditinjau, yang memangkas upaya menjadi sekitar 8 jam. Catatan rekonsiliasi menguraikan definisi ketersediaan statutori dan internal dengan kedua angka ditunjukkan dalam laporan. Target respons pertama dipasangkan dengan waktu penyelesaian dan kontak berulang di pandangan kerja, dan kementerian setuju melihat ukuran pendamping. Lembaga juga mengoreksi angka ketersediaan dari kuartal sebelumnya, menjelaskan sebabnya, dan menerbitkan koreksinya. Laporan terbitan dibuat dalam templat aksesibel, dan uji pembaca layar ditambahkan ke daftar periksa rilis.

Setahun kemudian, cakupan kewajiban 100 persen, laporan tepat waktu, tingkat restatement rendah dengan setiap koreksi dijelaskan, keterlacakan mencakup semua angka utama, dan upaya pelaporan turun sekitar 85 persen. Kantor menteri meminta target baru ketersediaan 99,95 persen, dengan pimpinan lembaga bertanggung jawab. Kepala kinerja layanan menjelaskan perbedaan antara angka statutori dan yang dialami pengguna dan mengusulkan target dengan ukuran pendamping dan tanggal tinjauan. Keputusan dicatat, dan kementerian setuju meninjau bersama definisi sebelum tahun pelaporan berikutnya.

## Sudut pandang sektor

**Startup.** Kewajiban pelaporan dapat tiba bersama pelanggan perusahaan pertama atau regulator. Mulai dengan daftar pendek kewajiban, hasilkan laporan dari sistem Anda sendiri, dan hindari membangun proses pelaporan terpisah. Berhati-hatilah saat menjanjikan tingkat layanan dalam kontrak.

**Bisnis kecil.** Kewajiban sering bersifat kontraktual atau terkait satu regulator. Simpan kalender, pakai templat, dan dokumentasikan cara angka dibuat. Laporan kecil yang akurat mengalahkan laporan besar yang tergesa.

**Perusahaan besar.** Banyak kewajiban lintas wilayah dan rezim memanggil register pusat, definisi bersama, dan perkakas ekstraksi bersama. Waspadai permintaan ganda kepada tim yang sama. Pakai satu sumber kebenaran untuk data insiden dan layanan, dengan pandangan untuk tiap rezim.

**Pemerintah dan sektor publik.** Ini rumah bagi topik ini. Rencanakan untuk legislasi, permintaan menteri, audit, permintaan keterbukaan informasi, dan pengamatan publik. Terbitkan data secara terbuka di mana hukum mengizinkan, penuhi kewajiban aksesibilitas, simpan arsip selama periode yang diwajibkan, dan dokumentasikan keputusan. Tolak mengubah angka statutori menjadi target kinerja individu, dan pertimbangkan efek target pada warga dan staf.

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah upaya membangun dan merawat register kewajiban, rekayasa ekstraksi otomatis dan templat, waktu tinjauan, dan pengujian aksesibilitas. Dibandingkan dengan perakitan manual, otomatisasi menggeser upaya dari pekerjaan berulang ke pembangunan sekali dan pemeliharaan ringan.

Imbal hasilnya adalah lebih sedikit galat dan koreksi, lebih sedikit waktu staf untuk perakitan, respons lebih cepat terhadap permintaan pengawasan, dan kepercayaan lebih besar dari regulator dan publik. Bangun kasus dari data Anda sendiri: jam per laporan sebelum dan sesudah, jumlah dan efek restatement, waktu menjawab pertanyaan pengawasan, dan biaya penalti atau temuan audit kritis yang dihindari. Hindari mengutip estimasi beban kepatuhan kecuali Anda dapat menelusuri sumber dan metodenya. Sertakan biaya keterlibatan berkelanjutan dengan badan pengawas, dan bandingkan dengan biaya kejutan (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Mengelola hanya dengan angka statutori.** Mendistorsi pekerjaan. Jaga pandangan kerja dengan ukuran pendamping.
- **Dua set angka yang tak direkonsiliasi.** Kepercayaan runtuh. Dokumentasikan dan tunjukkan perbedaannya.
- **Lembar kerja buatan tangan sebagai sistem.** Rusak dan bergantung pada individu. Otomatisasi dari sistem pencatatan.
- **Menyerahkan laporan tak lengkap untuk memenuhi tanggal.** Menukar satu kegagalan dengan yang lain. Sepakati perpanjangan atau serahkan dengan catatan yang jelas.
- **Koreksi diam-diam.** Merusak kepercayaan. Koreksi secara terbuka dan jelaskan.
- **Target individu dari angka statutori.** Menghargai manipulasi dan menghukum staf jujur. Jaga angka pada tingkat layanan.
- **Terbitan yang tak terbaca.** Kepatuhan dalam bentuk menggagalkan tujuan. Terbitkan data yang dapat dipakai dan aksesibel.
- **Mengabaikan privasi dalam penerbitan.** Angka kecil dapat mengidentifikasi orang. Agregasikan dan tinjau pengungkapan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Kewajiban dan definisi | Diketahui beberapa orang | Daftar parsial | Register dengan pemilik, definisi, dan tanggal; definisi statutori dan internal direkonsiliasi | Register ditinjau terhadap perubahan hukum; rekonsiliasi dipelihara | Definisi dikembangkan bersama badan pengawas; dibagikan antar-lembaga |
| Produksi dan mutu | Perakitan manual | Templat, beberapa skrip | Otomatis dari sistem pencatatan dengan garis keturunan dan tinjauan independen | Restatement dianalisis; upaya dan ketepatan waktu dikelola | Laporan dihasilkan terus-menerus; badan pengawas mengakses data langsung |
| Pemakaian dan penerbitan | Lapor untuk memenuhi permintaan | Diterbitkan atas permintaan | Pandangan kerja terpisah dari pandangan pelaporan; penerbitan aksesibel dan dapat dipakai ulang | Ukuran pendamping dengan target; pengujian pengguna atas terbitan | Data terbuka dan terhubung dengan partisipasi publik dalam desain |

## Daftar periksa

- [ ] Register mendaftar setiap kewajiban pelaporan dengan pemilik, definisi, sumber, tenggat, dan badan penerima.
- [ ] Bidang dan peristiwa yang dibutuhkan dibangun ke dalam layanan sejak awal.
- [ ] Laporan dihasilkan dari sistem pencatatan oleh kueri dan templat berversi.
- [ ] Setiap angka yang dilaporkan punya garis keturunan terdokumentasi dan pemeriksa bernama.
- [ ] Pembaca independen meninjau laporan sebelum penyerahan.
- [ ] Definisi statutori dan internal direkonsiliasi dan keduanya ditunjukkan.
- [ ] Koreksi dicatat, dijelaskan, dan diterbitkan segera.
- [ ] Target statutori punya ukuran pendamping dan konteks dalam laporan.
- [ ] Laporan dan set data terbitan memenuhi standar aksesibilitas yang berlaku dan tinjauan privasi.
- [ ] Percakapan dengan tiap badan pengawas utama tentang kebutuhannya ada di kalender.

## Prompt AI

**Bangun register kewajiban.**

```text
Berikut daftar laporan, pemberitahuan, dan terbitan yang kami yakini terutang:
[paste with sources, in plain language]. Susun menjadi register dengan bidang
untuk persyaratan, sumber, definisi, sumber data, tenggat, badan penerima, dan
peran pemilik. Tandai informasi yang hilang dan kewajiban yang tampak ganda lintas
tim. Jangan memberi kesimpulan hukum. Daftar asumsi Anda dan pertanyaan untuk
hukum dan kepatuhan.
```

**Rekonsiliasikan dua definisi.**

```text
Definisi statutori [measure] adalah: [text]. Definisi internal kami adalah:
[text]. Bidang data kami adalah: [list]. Jelaskan perbedaannya, uraikan bagaimana
masing-masing memengaruhi angka, sarankan cara menunjukkan keduanya dalam laporan,
dan usulkan catatan singkat yang menjelaskan perbedaan kepada pembaca. Jangan
mengasumsikan fakta yang tidak diberikan. Daftar asumsi Anda.
```

**Rencanakan otomatisasi laporan.**

```text
Kami menghasilkan [report] tiap bulan memakai langkah manual dan sumber ini: [list
with hours]. Usulkan rencana untuk mengotomatisasinya dari sistem pencatatan,
termasuk kueri terdokumentasi, langkah transformasi, catatan garis keturunan,
tinjauan, dan reproduksibilitas laporan masa lalu. Sarankan apa yang tetap manual
dan mengapa. Jangan mengasumsikan perkakas tertentu. Daftar asumsi Anda dan
risiko.
```

**Tinjau laporan terbitan untuk keterpakaian.**

```text
Berikut struktur teks laporan yang kami rencanakan terbitkan: [paste headings and
sample tables, with no sensitive content]. Tinjau untuk bahasa lugas, definisi,
konteks untuk angka, aksesibilitas tabel dan bagan, dan risiko privasi dari angka
kecil. Sarankan perbaikan. Ingatkan saya untuk menguji dengan teknologi bantu dan
memeriksa aturan pengungkapan bersama spesialis. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik pelaporan statutori atau teregulasi.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik pelaporan menunjukkan definisi, rekonsiliasi, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Perlakukan kewajiban pelaporan sebagai masukan desain, didaftar dengan pemilik, definisi, dan tenggat.
- Hasilkan laporan dari sistem pencatatan dengan garis keturunan dan tinjauan independen.
- Jaga pandangan kerja yang terus terang terpisah dari pandangan pelaporan, dan rekonsiliasikan definisi secara terbuka.
- Pasangkan target statutori dengan ukuran pendamping, dan jangan pernah menjadikannya target individu.
- Koreksi galat secara terbuka dan cepat.
- Terbitkan informasi yang dapat ditemukan, dibaca, dan dipakai ulang publik, dengan privasi terlindungi.

## Referensi dan bacaan lanjutan

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
