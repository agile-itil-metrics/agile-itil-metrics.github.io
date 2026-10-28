# Metrik risiko dan kendali

**Pekerjaan risiko adalah percakapan berkelanjutan tentang apa yang bisa salah dan apa yang sedang kita lakukan tentangnya, jadi jaga register tetap pendek dan hidup, uji kendali yang penting, dan curigai angka apa pun yang membuat ketidakpastian tampak rapi.**

## Gambaran umum dan motivasi

Setiap perubahan pada layanan membawa risiko, begitu pula membiarkannya. [Manajemen risiko](https://en.wikipedia.org/wiki/Risk_management) adalah identifikasi, evaluasi, dan prioritisasi risiko, diikuti tindakan terkoordinasi untuk mengurangi, menerima, mengalihkan, atau menghindarinya. ITIL memperlakukan risiko sebagai benang yang melintasi setiap praktik: pemberdayaan perubahan memutuskan seberapa banyak pengamatan yang dibutuhkan suatu perubahan, kelangsungan layanan merencanakan gangguan, keamanan informasi melindungi dari ancaman. Cara kerja agile dan DevOps mengurangi risiko dengan cara berbeda. Perubahan kecil yang disampaikan terus-menerus, dengan umpan balik cepat dan kemampuan untuk membalik, membuat tiap perubahan kurang berbahaya dan membuat masalah terlihat lebih cepat.

Kedua pandangan bertemu dalam metrik. Tim yang menyampaikan secara berkelanjutan tetap perlu mengetahui risiko utamanya, siapa pemiliknya, dan apakah kendali yang diandalkannya berfungsi. Fungsi risiko yang berkeras pada persetujuan berat tetap butuh bukti bahwa kendalinya mengurangi kerugian dan tidak sekadar memperlambat orang. Topik ini memberi ukuran untuk keduanya, dan membangun di atas praktik yang diuraikan dalam topik tetangga tentang keamanan dan audit (lihat topik 8.1, Metrik insiden keamanan dan kerentanan, dan topik 8.3, Metrik kepatuhan dan audit).

Empat istilah berulang.

- **Risiko:** peristiwa atau kondisi tak pasti yang, jika terjadi, memengaruhi tujuan. Ia punya sebab, peristiwa, dan akibat, serta kemungkinan dan dampak yang biasanya diperkirakan, bukan diketahui.
- **Register risiko:** daftar risiko teridentifikasi dengan pemilik, peringkat, dan respons. [Register risiko](https://en.wikipedia.org/wiki/Risk_register) adalah perkakas kerja ketika terkini dan dibaca, dan artefak kepatuhan ketika tidak.
- **Kendali:** tindakan atau mekanisme yang mengurangi risiko, seperti tinjauan, pengujian otomatis, persetujuan, pemisahan tugas, atau peringatan pemantauan. Himpunan kendali yang diandalkan organisasi adalah sistem [pengendalian internal](https://en.wikipedia.org/wiki/Internal_control)-nya.
- **Indikator risiko utama (KRI):** ukuran yang memberi sinyal perubahan tingkat risiko sebelum kerugian terjadi. [Indikator risiko utama](https://en.wikipedia.org/wiki/Key_risk_indicator) berguna ketika mendahului suatu peristiwa dan ketika seseorang bertindak atasnya.

Kuantifikasi risiko punya kelemahan yang dikenal baik. [Matriks risiko](https://en.wikipedia.org/wiki/Risk_matrix), yang memetakan kemungkinan terhadap dampak pada kisi sel berwarna, dipakai luas dan dikritik luas: peringkat bersifat subjektif, risiko berbeda dapat mendarat di sel yang sama karena alasan berbeda, dan aritmetika mengalikan skor ordinal tak punya dasar kokoh. Peristiwa langka dan parah, kadang digambarkan lewat [teori angsa hitam](https://en.wikipedia.org/wiki/Black_swan_theory), sangat sulit diberi peringkat. Tanggapan yang jujur adalah memakai matriks sebagai alat bantu percakapan, menunjukkan rentang, dan mendukungnya dengan bukti tentang kendali dan insiden. Kerangka tiga lini pertahanan, yang memisahkan tim yang memiliki risiko, tim yang mengawasinya, dan penjaminan independen, menawarkan struktur untuk peran, dan bekerja paling baik ketika lini pertama, tim pengiriman dan operasi, sungguh-sungguh memiliki risikonya.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku pada pelaporan risiko dengan cara khusus. Ketika peringkat merah mendatangkan pengamatan, orang memberi peringkat risiko sebagai kuning. Ketika risiko yang ditutup adalah keberhasilan, orang menutup risiko tanpa menanganinya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Jaga register tetap pendek dan terkini.** Beberapa risiko yang dimiliki dengan baik dan ditinjau mengalahkan ratusan yang tidak.
- **Buat lini pertama memiliki risikonya.** Orang yang paling dekat dengan pekerjaan mengenalnya paling baik.
- **Uji kendali yang Anda andalkan.** Kendali yang tak pernah diuji adalah harapan.
- **Utamakan indikator pendahulu yang ditindaklanjuti seseorang.** Indikator tanpa rencana respons hanyalah hiasan.
- **Tunjukkan rentang dan bukti, bukan presisi palsu.** Peringkat adalah perkiraan.
- **Kurangi risiko dengan membuat perubahan kecil dan dapat dibalik.** Pengiriman berkelanjutan dengan rollback cepat adalah kendali.
- **Bicarakan risiko tanpa menyalahkan.** Pelaporan jujur adalah bahan baku seluruh praktik.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kemutakhiran tinjauan risiko | Porsi risiko terbuka yang ditinjau pemiliknya dalam interval yang disepakati | risiko yang ditinjau dalam interval / risiko terbuka | persen | Tanggal tinjauan register risiko | Manajemen risiko; perbaikan berkelanjutan | Risiko ditinjau dalam percakapan perencanaan dan tinjauan | Bulanan |
| Cakupan pemilik | Porsi risiko terbuka dengan pemilik bernama dan terkini yang menerima kepemilikan | risiko dengan pemilik terkini terkonfirmasi / risiko terbuka | persen | Register risiko digabung dengan direktori orang | Manajemen risiko | Risiko yang dimiliki tim di backlog | Bulanan |
| Cakupan pengujian kendali | Porsi kendali utama yang diuji pengoperasiannya dalam siklus yang diwajibkan | kendali utama yang diuji dalam siklus / kendali utama | persen | Register kendali dan catatan pengujian | Manajemen risiko; manajemen keamanan informasi | Pemeriksaan otomatis di pipeline | Kuartalan |
| Tingkat efektivitas kendali | Porsi kendali yang diuji yang ditemukan beroperasi sebagaimana dirancang | kendali yang ditemukan efektif / kendali yang diuji | persen | Hasil pengujian | Manajemen risiko; perbaikan berkelanjutan | Pengujian otomatis lulus karena alasan yang benar | Kuartalan |
| Waktu respons pelanggaran KRI | Waktu dari indikator risiko utama melewati ambangnya sampai keputusan tercatat | median dan persentil ke-85 jam atau hari dari pelanggaran sampai keputusan | jam atau hari | Pemantauan KRI dan log keputusan | Manajemen risiko; manajemen pemantauan dan peristiwa | Reaksi terhadap sinyal produksi | Bulanan |
| Ketepatan waktu rencana penanganan | Porsi penanganan risiko yang selesai pada tanggal yang dijanjikan | penanganan selesai pada tanggal / penanganan jatuh tempo pada periode itu | persen | Register risiko dan pelacak tindakan | Manajemen risiko; perbaikan berkelanjutan | Tindakan perbaikan disampaikan | Kuartalan |
| Porsi perubahan berbasis risiko | Porsi perubahan yang disetujui lewat jalur berbasis risiko dengan bukti kendali terlampir | perubahan disetujui lewat jalur berbasis risiko dengan bukti yang diwajibkan / perubahan pada periode itu | persen | Catatan perubahan | Pemberdayaan perubahan; manajemen risiko | Perubahan disampaikan berkelanjutan dengan pemeriksaan otomatis | Bulanan |

Definisikan interval tinjauan dan daftar kendali utama di register. Kendali “diuji” hanya ketika pengujian memeriksa bukti pengoperasian, bukan hanya rancangan. Jam KRI dimulai ketika indikator melewati ambangnya, sebagaimana dicatat sistem pemantauan, dan berhenti pada keputusan yang tertulis, yang bisa berupa bertindak, menerima, atau mengubah ambang. Kecualikan risiko yang sedang dipensiunkan dari penyebut hanya setelah keputusan penutupan tercatat.

## Rekomendasi

### Jaga percakapan risiko tetap hidup

**1. Jaga register tetap pendek dan tulis tiap risiko dalam bentuk standar.** Pakai kalimat berbentuk “Karena [sebab], [peristiwa] dapat terjadi, yang menyebabkan [akibat].” Batasi register pada risiko yang akan mengubah keputusan atau rencana. Gabung duplikat, pecah yang samar, dan pensiunkan risiko yang telah lewat. Daftar beberapa lusin risiko yang dibahas orang lebih berharga daripada seribu yang tak dibaca siapa pun.

**2. Tetapkan setiap risiko pada pemilik yang dapat bertindak.** Pemilik adalah orang dengan wewenang atas respons, biasanya di tim pengiriman atau operasi, bukan fungsi risiko. Konfirmasi kepemilikan dengan orangnya, dan tinjau ketika orang berganti peran. Cakupan pemilik mengukur ini, dan risiko tanpa pemilik adalah temuan.

**3. Tinjau risiko dalam percakapan yang sudah terjadi.** Angkat risiko teratas dalam perencanaan, tinjauan, dan tinjauan insiden, alih-alih membuat rapat terpisah. Kebiasaan agile merenung secara teratur tentang cara menjadi lebih efektif adalah rumah alami bagi pertanyaan “apa yang dapat melukai kita berikutnya?” Catat hasilnya di register.

**4. Pasangkan peringkat dengan bukti dan rentang.** Untuk setiap risiko penting, catat apa yang membuat Anda berpikir ia mungkin atau serius: insiden, nyaris celaka, hasil pengujian, riwayat pemasok. Berikan rentang untuk kemungkinan dan dampak bila bisa, dan katakan seberapa tidak yakin Anda. Jangan menggabungkan skor ordinal menjadi satu angka dan memperlakukannya sebagai pengukuran. Jika Anda memakai matriks, pakai untuk memulai diskusi (lihat topik 1.6, Literasi statistik untuk metrik layanan).

### Uji kendali

**5. Namai kendali utama dan untuk apa masing-masing.** Untuk tiap risiko besar, daftar beberapa kendali yang Anda andalkan, dan seperti apa kegagalan masing-masing. Register kendali yang mendaftar ratusan aktivitas kecil menyembunyikan yang penting. Sertakan kendali otomatis di pipeline, seperti pengujian, pemeriksaan kebijakan, dan gerbang persetujuan.

**6. Uji pengoperasian, bukan hanya rancangan.** Tinjauan rancangan bertanya apakah kendali akan berfungsi jika dioperasikan. Pengujian pengoperasian bertanya apakah ia dioperasikan dan berfungsi dalam periode itu, dengan memeriksa sampel bukti. Rencanakan pengujian pada siklus yang cocok dengan risiko, catat hasilnya, dan tindak lanjuti kegagalan. Bila mungkin, otomatisasi bukti, agar pengujian terjadi terus-menerus.

**7. Perlakukan kegagalan kendali sebagai informasi.** Pengujian yang gagal adalah sistem kendali yang bekerja. Catat kegagalan, tanyakan mengapa, dan perbaiki sebabnya. Tingkat efektivitas kendali sebaiknya dibaca bersama tindak lanjutnya: kegagalan yang ditemukan dan diperbaiki cepat lebih sehat daripada tingkat sempurna yang datang dari pengujian lemah.

**8. Pakai penjaminan independen di mana menambah nilai.** Audit internal atau peninjau independen dapat menguji kendali yang dimiliki lini pertama dan diawasi lini kedua. Independensi menjaga dari menilai pekerjaan sendiri. Koordinasikan agar tim tidak diuji oleh tiga kelompok untuk hal yang sama.

### Pakai indikator dan keputusan dengan baik

**9. Pilih beberapa indikator pendahulu per risiko besar.** Indikator risiko utama sebaiknya murah diukur, terkait dengan sebab, dan dipasangkan dengan ambang dan respons. Misalnya, usia kerentanan kritis tertua memberi sinyal risiko keamanan, dan porsi perubahan yang butuh penanganan darurat memberi sinyal risiko perubahan. Definisikan siapa yang melihat indikator dan apa yang akan mereka lakukan di ambang (lihat topik 8.1, Metrik insiden keamanan dan kerentanan).

**10. Catat keputusan pada setiap pelanggaran.** Ketika indikator melewati ambang, seseorang memutuskan: bertindak, menerima, atau menyesuaikan ambang. Tulis keputusan dan alasannya. Ini membangun riwayat yang menunjukkan apakah ambang ditetapkan dengan baik dan apakah responsnya tepat waktu.

**11. Jadikan persetujuan berbasis risiko sebagai bawaan untuk perubahan.** Dalam pengaturan pengiriman berkelanjutan, ganti dewan persetujuan menyeluruh dengan jalur berbasis risiko: pemeriksaan otomatis dan tinjauan sejawat untuk perubahan standar berisiko rendah, dan tinjauan lebih penuh untuk beberapa perubahan berisiko tinggi (lihat topik 4.3, Metrik pemberdayaan perubahan). Lampirkan bukti bahwa kendali berjalan. Ini mengurangi risiko dan penundaan sekaligus, karena perubahan kecil dengan bukti otomatis lebih aman daripada yang besar dengan tanda tangan.

**12. Belajar dari kerugian dan nyaris celaka.** Setelah insiden dan hampir kena, perbarui register: apakah risikonya ada, apakah diberi peringkat dengan baik, apakah kendalinya berfungsi? Pakai jawabannya untuk memperbaiki keduanya. Lingkaran antara peristiwa dan register adalah yang menjaga register tetap jujur (lihat topik 4.2, Metrik postmortem dan pembelajaran).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Kemutakhiran tinjauan risiko | Menandai risiko ditinjau tanpa diskusi; mengubah interval | Ambil sampel tinjauan untuk substansi; interval tetap di register |
| Cakupan pemilik | Menugaskan pemilik tanpa sepengetahuan mereka; menamai orang senior tanpa wewenang | Konfirmasi pemilik; periksa bahwa pemilik dapat bertindak atas respons |
| Cakupan pengujian kendali | Menguji kendali yang mudah; menghitung tinjauan rancangan sebagai pengujian pengoperasian | Daftar kendali utama ditetapkan pihak kedua; jenis pengujian dicatat |
| Tingkat efektivitas kendali | Menguji sampel kecil; memilih sampel yang lulus | Metode sampel independen dari pemilik; ukuran sampel dicatat |
| Waktu respons pelanggaran KRI | Mengubah ambang setelah pelanggaran; mencatat keputusan tanpa isi | Log perubahan ambang; sampel isi keputusan |
| Ketepatan waktu rencana penanganan | Menetapkan tanggal mudah; mendefinisikan ulang penyelesaian | Tanggal disepakati dengan pemilik saat persetujuan; periksa bahwa peringkat risiko bergerak |
| Porsi perubahan berbasis risiko | Mengklasifikasi perubahan sebagai berisiko rendah untuk menghindari tinjauan; melampirkan bukti yang tidak dihasilkan kendali | Ambil sampel klasifikasi terhadap aturan; bukti otomatis dari pipeline |

Pembacaan yang sehat adalah register pendek yang diperdebatkan orang, pemilik yang mengenal risiko mereka, kendali yang diuji dengan beberapa kegagalan ditemukan dan diperbaiki, indikator yang memimpin keputusan nyata, dan lebih sedikit persetujuan berat untuk perubahan kecil.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Matriks risiko | Cepat, visual, pemicu percakapan | Subjektif; presisi palsu; aritmetika ordinal |
| Rentang terkuantifikasi | Lebih jujur tentang ketidakpastian | Butuh data dan keterampilan; upaya |
| Dewan persetujuan berat | Kendali terlihat | Lambat; mendorong perubahan ditumpuk |
| Pemeriksaan otomatis berbasis risiko | Cepat dan konsisten | Butuh rekayasa; pemeriksaan otomatis dapat salah |
| Fungsi risiko pusat memiliki risiko | Konsistensi | Jauh dari pekerjaan; pemilik tak terlibat |
| Kepemilikan lini pertama | Pengetahuan dan akuntabilitas | Mutu bervariasi; butuh pengawasan |
| Pengujian kendali berkala | Efisien untuk kendali stabil | Melewatkan pergeseran di antara pengujian |
| Pemantauan kendali berkelanjutan | Bukti tepat waktu | Upaya perkakas; derau |

Jawaban prosanya adalah menaruh kepemilikan pada tim, menerapkan pengawasan pusat yang ringan dan pengujian independen, mengotomatisasi bukti bila mungkin, dan memakai peringkat sebagai pemicu percakapan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa tiga risiko yang paling mungkin melukai layanan ini tahun depan, dan siapa pemilik masing-masing?**
Minta tiap anggota menulis tiga risiko secara pribadi, lalu bandingkan. Tumpang tindih dan perbedaannya sama-sama informatif. Fasilitator sebaiknya mencatat siapa yang akan bertindak atas tiap risiko. Sepakati tiga teratas dan konfirmasi pemilik.

**2. Kendali mana yang paling kita andalkan, dan kapan terakhir kita memeriksa bahwa ia berfungsi?**
Pilih kendali, seperti aturan tinjauan kode, cadangan, atau langkah persetujuan. Telusuri kapan terakhir bukti pengoperasiannya diperiksa. Jika tak ada yang tahu, rencanakan pengujian. Percakapan menunjukkan perbedaan antara rancangan dan pengoperasian.

**3. Apa yang akan membuat kita mengubah peringkat dari kuning ke merah, dan siapa yang akan memperhatikan?**
Bahas indikator dan ambang. Tanyakan apakah tim pernah menurunkan peringkat untuk menghindari perhatian, dan tekanan apa penyebabnya. Sepakati bukti apa yang membenarkan perubahan, dan cara membuat merah menjadi hal yang aman untuk dikatakan.

**4. Persetujuan mana yang memperlambat perubahan kita tanpa mengurangi risiko?**
Daftar persetujuan yang dibutuhkan perubahan tipikal, dan untuk tiap persetujuan tanyakan risiko apa yang ditanganinya dan apakah pernah menghentikan perubahan. Usulkan mengganti satu dengan pemeriksaan otomatis. Sepakati bukti apa yang akan menunjukkan perubahan aman.

**5. Ketika kendali gagal, bagaimana kita mengetahuinya, dan apa yang kita lakukan?**
Ingat kegagalan terbaru. Apakah ditemukan oleh pengujian, insiden, atau auditor? Bahas seperti apa lingkaran yang lebih kuat. Sertakan bagaimana orang yang menemukannya diperlakukan.

**6. Risiko mana yang telah kita terima, dan kapan kita meninjau keputusan itu?**
Daftar risiko yang diterima dan tanggal tinjauannya. Periksa bahwa masing-masing punya pemilik dan alasan. Risiko yang diterima tanpa tanggal tinjauan adalah risiko yang tak diawasi siapa pun.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki sebagian besar risiko operasional. Mereka sebaiknya memelihara daftar pendek risiko mereka sendiri, membahasnya dalam perencanaan dan tinjauan, dan membangun kendali ke dalam pipeline agar bukti otomatis. Mereka diuntungkan oleh jalur perubahan berbasis risiko yang membiarkan perubahan berisiko rendah mengalir, dan sebaiknya jujur tentang apa yang bisa salah.

### Tim layanan dan operasi

Tim operasi menjalankan kendali: cadangan, pemantauan, tinjauan akses, dan pengujian pemulihan. Mereka sebaiknya menyimpan bukti pengoperasian, menguji kendali pada siklus reguler, dan mengangkat pelanggaran indikator lebih awal. Mereka menanggung biaya kendali berat dan sebaiknya mengatakan mana yang menambah sedikit.

### Kepemimpinan dan tata kelola

Pemimpin menetapkan selera risiko dan memutuskan seberapa besar gesekan yang dapat diterima. Mereka sebaiknya meminta daftar pendek risiko teratas dengan pemilik dan bukti, menyambut peringkat merah, mendanai pengujian kendali, dan mendukung penjaminan independen. Tata kelola sebaiknya memeriksa bahwa register mencerminkan insiden dan nyaris celaka, dan tidak menghargai laporan yang tampak rapi.

### Pelanggan dan pengguna

Pengguna menanggung akibat risiko yang terwujud, dan sering tahu tentangnya sebelum register. Mereka sebaiknya punya cara menandai kekhawatiran, dan diberi tahu tentang risiko yang memengaruhi mereka, dalam batas kerahasiaan. Pengalaman mereka tentang insiden dan perubahan adalah bukti untuk tinjauan risiko.

## Dalam praktik: contoh ITIL agile

Kelompok digital sebuah utilitas energi nasional menjalankan penagihan pelanggan, aplikasi seluler, dan integrasi dengan operasi jaringan listrik. Angka di bawah bersifat ilustratif.

Register risiko kelompok punya 340 entri, terakhir dibersihkan tiga tahun lalu. Kemutakhiran tinjauan risiko adalah 22 persen, dan 61 risiko punya pemilik yang telah pergi. Matriks menunjukkan 85 risiko merah, dan tak ada yang membaca laporannya. Kepala penjaminan layanan yang baru mengusulkan penyetelan ulang. Bersama tim pengiriman ia memangkas register menjadi risiko yang akan mengubah keputusan, berakhir dengan 38. Ia menetapkan tiap risiko pada pemilik bernama di tim yang dapat bertindak, dan mereka mengonfirmasi. Ia memilih 12 kendali utama dan menguji pengoperasian masing-masing, alih-alih meninjau rancangan. Lima gagal: dua pemulihan cadangan tak pernah diuji, satu tinjauan akses terlewat, dan dua persetujuan perubahan ditandatangani tanpa bukti pengujian.

Tim memperbaiki kegagalan dan mengganti dewan persetujuan perubahan untuk perubahan standar dengan jalur berbasis risiko. Pengujian otomatis dan tinjauan sejawat adalah kendalinya, dan pipeline melampirkan bukti ke catatan perubahan. Setiap risiko besar mendapat satu atau dua indikator pendahulu dengan ambang dan respons. Untuk risiko gangguan penagihan berkepanjangan, indikatornya adalah usia kerentanan kritis tertua dan jumlah pemulihan cadangan yang gagal pada kuartal itu. Kuartal pertama menunjukkan pemilik mengonfirmasi semua 38 risiko, kemutakhiran tinjauan 91 persen, tingkat efektivitas kendali 7 dari 12 pada pengujian pertama dan 12 dari 12 setelah perbaikan, dan median waktu respons pelanggaran KRI 2 hari. Porsi perubahan lewat jalur berbasis risiko adalah 64 persen.

Kepala risiko meminta jumlah risiko merah turun separuh dalam setahun. Kepala penjaminan layanan mengusulkan melacak ketepatan waktu rencana penanganan dan efektivitas kendali, dan menjelaskan bahwa hitungan risiko merah dapat turun dengan penilaian ulang, dan ia lebih memilih melihat peringkat merah yang jujur. Keputusan dicatat, dan laporan kuartal berikutnya menyertakan sampel keputusan di balik setiap penurunan peringkat.

## Sudut pandang sektor

**Startup.** Risiko kebanyakan tentang kehabisan uang, kehilangan orang kunci, dan gangguan besar. Simpan daftar satu halaman berisi lima teratas, tinjau bulanan, dan uji cadangan serta pemulihan. Bangun kendali ke dalam pipeline sejak awal, karena lebih murah daripada memasang belakangan.

**Bisnis kecil.** Segelintir risiko mendominasi: ketergantungan pada orang kunci, satu pemasok, ransomware, dan kehilangan data. Simpan daftar pendek dengan pemilik, uji pemulihan, dan jaga asuransi serta detail kontak tetap terkini. Tahan kerangka berat, dan pinjam darinya apa yang cocok.

**Perusahaan besar.** Skala memanggil taksonomi bersama, perkakas register yang ringan, dan tiga lini pertahanan dalam praktik. Buat lini pertama memiliki risikonya, jaga lini kedua kecil dan bersifat penasihat, dan buat pengujian independen efisien. Hindari pengujian ganda antara audit, risiko, dan kepatuhan.

**Pemerintah dan sektor publik.** Manajemen risiko sering merupakan kewajiban formal dengan kerangka standar, komite audit, dan pelaporan publik. Selaraskan dengan kerangka yang diwajibkan, dokumentasikan pernyataan selera risiko, dan simpan bukti. Akuntabilitas publik membuat peringkat merah yang jujur lebih berharga, dan juga lebih sulit (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah waktu pemilik untuk meninjau risiko, upaya mendefinisikan kendali utama dan mengujinya, perkakas untuk register dan pemantauan indikator bila belum ada, dan biaya penjaminan independen. Mengotomatisasi pengumpulan bukti butuh upaya rekayasa lalu mengurangi biaya berulang.

Imbal hasilnya adalah lebih sedikit kejutan, persetujuan perubahan yang lebih cepat dan ringan, dan penjaminan yang lebih kredibel. Register yang dipangkas dan jalur perubahan berbasis risiko menghemat waktu yang dihabiskan badan persetujuan besar. Pengujian kendali gagal yang ditemukan sebelum insiden mencegah kerugian yang sulit dihargai. Bangun kasus dari data Anda sendiri: waktu per persetujuan perubahan sebelum dan sesudah, jumlah kegagalan kendali yang ditemukan lewat pengujian dibanding yang ditemukan lewat insiden atau auditor, dan biaya insiden masa lalu yang akan dicegah kendali. Hindari mengutip statistik kerugian industri tanpa sumber dan metode yang dapat ditelusuri.

## Anti-pola dan jebakan

- **Register yang tumbuh selamanya.** Tak ada yang membacanya. Pangkas pada risiko yang penting.
- **Peringkat tanpa bukti.** Itu opini berwarna. Lampirkan bukti dan rentang.
- **Pemilik hanya nama.** Risiko berada pada seseorang yang tak dapat bertindak. Konfirmasi kepemilikan dengan orang yang tepat.
- **Menguji rancangan dan menyebutnya penjaminan.** Kendali yang bisa berfungsi mungkin tidak berfungsi. Uji pengoperasian.
- **Hanya melaporkan jumlah risiko merah.** Hitungan turun lewat penilaian ulang. Lihat penanganan dan hasil kendali.
- **Dewan persetujuan untuk setiap perubahan.** Memperlambat perubahan kecil dan mengajari penumpukan. Pakai jalur berbasis risiko.
- **Menghukum peringkat merah.** Risiko lalu disembunyikan. Hargai peringatan dini.
- **Budaya risiko dan pengiriman yang terpisah.** Pekerjaan risiko yang dilakukan kepada tim, bukan bersama mereka, menghasilkan sandiwara kepatuhan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Register dan kepemilikan | Daftar panjang dan basi | Register ada, sebagian dimiliki | Register pendek dengan pemilik lini pertama terkonfirmasi dan tanggal tinjauan | Tinjauan dalam percakapan tim; bukti dan rentang terlampir | Risiko dibagikan lintas tim dan pemasok dengan pemilik bersama |
| Kendali | Diasumsikan berfungsi | Rancangan didokumentasikan | Kendali utama dinamai; pengujian pengoperasian pada siklus | Kegagalan ditindaklanjuti; bukti diotomatisasi bila mungkin | Pemantauan kendali berkelanjutan dengan pengawasan manusia dan penjaminan independen |
| Keputusan dan perubahan | Persetujuan oleh komite | Beberapa perubahan standar disetujui lebih dulu | Jalur berbasis risiko dengan bukti terlampir | Indikator dengan ambang dan keputusan tercatat; jalur disetel dari hasil | Keputusan risiko tertanam di pipeline di seluruh organisasi dan rantai pasok |

## Daftar periksa

- [ ] Register pendek, dengan risiko ditulis dalam bentuk sebab, peristiwa, dan akibat.
- [ ] Setiap risiko punya pemilik lini pertama terkonfirmasi yang dapat bertindak.
- [ ] Risiko ditinjau dalam percakapan reguler tim.
- [ ] Kendali utama dinamai dan diuji pengoperasiannya pada siklus yang dinyatakan.
- [ ] Kegagalan kendali dicatat, dijelaskan, dan diperbaiki.
- [ ] Setiap risiko besar punya satu atau dua indikator pendahulu dengan ambang dan respons.
- [ ] Keputusan pada pelanggaran indikator dicatat.
- [ ] Jalur perubahan berbasis risiko ada, dengan bukti dilampirkan secara otomatis bila mungkin.
- [ ] Risiko yang diterima punya pemilik, alasan, dan tanggal tinjauan.
- [ ] Insiden dan nyaris celaka memperbarui register.

## Prompt AI

**Tulis ulang risiko dalam bentuk standar.**

```text
Berikut [number] entri dari register risiko kami: [paste, with sensitive details
removed]. Tulis ulang masing-masing dalam bentuk “Karena [cause], [event] dapat
terjadi, yang menyebabkan [consequence].” Tandai entri yang samar, duplikat, atau
sebenarnya masalah yang sudah terjadi. Sarankan mana yang dapat digabung atau
dipensiunkan. Jangan memberi peringkat. Daftar asumsi Anda dan apa yang
dikonfirmasi dengan pemilik.
```

**Rancang pengujian kendali.**

```text
Untuk kendali [describe, for example quarterly access review for the billing
system], rancang pengujian pengoperasian. Sertakan bukti apa yang diperiksa,
cara memilih sampel tanpa bias, apa yang dihitung lulus atau gagal, cara mencatat
hasil, dan cara mengotomatisasi pengumpulan bukti dari waktu ke waktu. Jangan
mengasumsikan perkakas tertentu. Daftar asumsi Anda dan risiko dalam rancangan
pengujian.
```

**Usulkan indikator pendahulu untuk sebuah risiko.**

```text
Risiko: [describe in cause, event, consequence form]. Usulkan hingga tiga
indikator pendahulu yang murah diukur dan terkait dengan sebab, dengan respons
yang disarankan untuk pelanggaran ambang dan cara tiap indikator dapat
menyesatkan. Jangan mengarang nilai ambang; gambarkan bagaimana kami sebaiknya
mengkalibrasinya dari data kami sendiri. Daftar asumsi Anda.
```

**Tinjau proses persetujuan perubahan.**

```text
Proses persetujuan perubahan kami untuk [type of change] adalah: [describe steps,
approvers, and typical delays]. Identifikasi langkah yang menambah penundaan tanpa
mengurangi risiko, usulkan alternatif berbasis risiko dengan pemeriksaan dan bukti
otomatis, dan katakan apa yang sebaiknya kami ukur untuk mengetahui apakah risiko
naik atau turun. Jangan mengklaim hasil penelitian. Daftar asumsi Anda dan
keputusan yang butuh masukan pimpinan.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik risiko atau kendali.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik risiko membawa vektor manipulasi, pagar pembatas, dan aturan buktinya.

## Poin penting

- Jaga register risiko tetap pendek, dimiliki tim yang dapat bertindak, dan ditinjau dalam percakapan yang sudah ada.
- Uji bahwa kendali utama beroperasi, perlakukan kegagalan sebagai informasi berguna, dan otomatisasi buktinya.
- Pakai beberapa indikator pendahulu dengan ambang, respons, dan keputusan tercatat.
- Ganti persetujuan menyeluruh dengan jalur perubahan berbasis risiko yang didukung bukti otomatis.
- Tunjukkan rentang dan bukti alih-alih presisi palsu, dan pakai matriks untuk memulai percakapan.
- Buat peringkat merah aman untuk diberikan, dan belajar dari kerugian dan nyaris celaka.

## Referensi dan bacaan lanjutan

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
