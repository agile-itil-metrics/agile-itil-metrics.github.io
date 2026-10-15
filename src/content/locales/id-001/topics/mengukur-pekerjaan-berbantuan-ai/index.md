# Mengukur pekerjaan berbantuan AI

**Nilai pekerjaan berbantuan AI dari apa yang bertahan dalam tinjauan, produksi, dan kontak berikutnya pengguna, bukan dari secepat apa ia muncul, dan terus awasi apakah orang yang mengerjakannya masih belajar.**

## Gambaran umum dan motivasi

Begitu tim memakai perkakas AI setiap hari, pertanyaan sentralnya berubah dari “haruskah kita?” menjadi “apa yang kita dapatkan?” Topik sebelumnya memaparkan fondasi: garis dasar, perbandingan, dan biaya penuh (lihat topik 10.1, AI dalam pengukuran manajemen layanan). Topik ini masuk ke pekerjaan itu sendiri. Bagaimana Anda mengetahui apakah kode, tiket, dokumen, dan keputusan berbantuan AI sama baik, lebih baik, atau lebih buruk daripada pekerjaan yang digantikannya, dan apa yang terjadi pada orang yang mengerjakannya?

Bantuan AI menyentuh banyak jenis pekerjaan. Dalam pengiriman perangkat lunak, perkakas menyarankan atau menghasilkan kode, pengujian, pesan commit, dan komentar tinjauan. Dalam operasi layanan mereka meringkas insiden, mengusulkan sebab, menyusun balasan, dan menulis artikel pengetahuan. Dalam analisis mereka menghasilkan laporan dan kueri. Ciri umumnya adalah menghasilkan versi pertama yang masuk akal menjadi murah. Biaya berpindah ke tempat lain: membaca dan menilai keluaran, memperbaiki yang salah, merawat apa yang dihasilkan, dan belajar cukup untuk mengetahui bedanya.

Beberapa efek membuat pengukuran rumit.

- **Hitungan keluaran menyesatkan.** [Baris kode](https://en.wikipedia.org/wiki/Lines_of_code) selalu ukuran produktivitas yang buruk, dan kode yang dihasilkan memperburuknya. Lebih banyak kode berarti lebih banyak untuk dibaca, diuji, dan dirawat. Hitungan baris yang dihasilkan, saran yang diterima, atau draf sedikit bicara tentang nilai.
- **Tinjauan menjadi bottleneck.** [Tinjauan kode](https://en.wikipedia.org/wiki/Code_review) dan tinjauan pekerjaan hasil generasi lainnya memakan waktu, dan aliran perubahan yang lebih besar dan lebih sering dapat membebani peninjau. [Pull request](https://en.wikipedia.org/wiki/Pull_request) besar lebih sulit ditinjau dengan baik, dan peninjau yang kelebihan beban lebih mungkin menyetujui apa yang tak mereka pahami. Ukuran tinjauan dan alur dari sebelumnya tetap esensial (lihat topik 2.7, Metrik pull request dan tinjauan kode).
- **Masalah mutu datang terlambat.** Kode yang dihasilkan mungkin lulus pengujian hari ini dan membawa [kode duplikat](https://en.wikipedia.org/wiki/Duplicate_code), struktur tak jelas, atau cacat tersembunyi yang muncul sebagai biaya pemeliharaan, bentuk dari [utang teknis](https://en.wikipedia.org/wiki/Technical_debt). Ukuran yang diambil saat penciptaan melewatkannya. Lihat apa yang terjadi pada pekerjaan sesudahnya.
- **Keterampilan mungkin berubah.** Mengandalkan perkakas untuk tugas yang dulu dikerjakan sendiri adalah bentuk [pelepasan beban kognitif](https://en.wikipedia.org/wiki/Cognitive_offloading), yang dapat membebaskan perhatian untuk masalah lebih sulit atau dapat menuju [hilangnya keterampilan](https://en.wikipedia.org/wiki/Deskilling) jika pemahaman dasar memudar. Keduanya mungkin, dan hasilnya bergantung pada cara perkakas dipakai. Ini penting bagi orang yang terlibat dan bagi kemampuan tim menangani situasi yang tak dapat ditangani perkakas.

Bukti tentang efek bantuan AI pada produktivitas masih berkembang, dan bervariasi menurut tugas, pengalaman pengguna, perkakas, dan pengaturan. Beberapa studi terkendali atas tugas pemrograman menemukan penyelesaian lebih cepat pada tugas yang terdefinisi baik, dan studi serta laporan lain menemukan keuntungan lebih kecil atau nol, atau biaya tambahan, bagi orang berpengalaman yang mengerjakan sistem kompleks yang mereka kenal. Buku ini tidak menawarkan angka. Posisi yang bertanggung jawab bagi tim adalah mengukur pekerjaannya sendiri, dengan garis dasar dan pembanding, dan memperlakukan angka terbitan mana pun sebagai satu studi dalam konteks tertentu.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) sangat penting di sini, karena tekanan menunjukkan keuntungan kuat dan angka yang mudah adalah yang menyesatkan. Ukuran di bawah mengikuti apa yang bertahan, bukan apa yang dihasilkan (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Ukur apa yang bertahan.** Retensi, pengerjaan ulang, dan cacat yang lolos bicara lebih banyak daripada keluaran.
- **Awasi tinjauan.** Aliran pekerjaan berbantuan AI dibatasi seberapa baik orang dapat membacanya.
- **Bandingkan yang sebanding.** Pekerjaan berbantuan dan tidak berbantuan harus serupa dalam jenis dan kesulitan.
- **Lihat nanti selain sekarang.** Masalah mutu dan biaya pemeliharaan muncul berpekan-pekan atau berbulan-bulan setelah penciptaan.
- **Jaga pemahaman dalam lingkaran.** Orang yang mengirimkan pekerjaan harus mampu menjelaskannya.
- **Lindungi keterampilan dan pembelajaran.** Perhatikan apa yang masih dapat dilakukan orang tanpa perkakas.
- **Agregasikan; jangan memantau individu.** Data tentang siapa memakai AI dan bagaimana adalah untuk memperbaiki proses, bukan memeringkat orang.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat retensi | Porsi perubahan berbantuan AI yang tetap hampir tak berubah setelah periode yang dinyatakan | perubahan berbantuan AI dengan kurang dari porsi tertentu dimodifikasi atau dibalik setelah 30 hari / perubahan berbantuan AI yang digabung 30 hari lalu | persen | Riwayat kendali versi digabung dengan tag bantuan, pada tingkat tim | Manajemen rilis dan deployment; pemberdayaan perubahan | Pekerjaan yang melekat; pengerjaan ulang rendah | Bulanan |
| Pengerjaan ulang pasca-penggabungan | Porsi perubahan yang butuh perbaikan lanjutan dalam periode singkat, untuk perubahan berbantuan dan pembanding | perubahan dengan perbaikan lanjutan terkait dalam 14 hari / perubahan yang digabung, per kelompok | persen | Kendali versi, pelacak isu, catatan perubahan | Pemberdayaan perubahan; manajemen masalah | Cacat yang lolos; pengerjaan ulang | Bulanan |
| Beban tinjauan | Upaya peninjau per perubahan, untuk perubahan berbantuan dan pembanding | median dan persentil ke-85 waktu tinjauan dan putaran tinjauan per perubahan, per kelompok | jam; putaran | Stempel waktu alat tinjauan, diagregasi menurut tim | Manajemen rilis dan deployment | Tinjauan sebagai umpan balik dan pembelajaran | Bulanan |
| Tingkat cacat yang lolos | Cacat yang ditemukan di produksi per perubahan, untuk perubahan berbantuan dan pembanding | cacat ditemukan setelah rilis yang diatribusikan ke suatu perubahan / perubahan yang dirilis, per kelompok | cacat per perubahan | Pelacak cacat dikaitkan dengan perubahan | Manajemen insiden; manajemen masalah | Mutu apa yang dirilis | Kuartalan |
| Tingkat lulus pemeriksaan penjelasan | Porsi perubahan berbantuan AI bersampel yang penulisnya dapat menjelaskan pendekatan dan pertukarannya dalam tinjauan | perubahan bersampel yang penulisnya menjelaskan hingga memuaskan peninjau / perubahan bersampel | persen | Catatan tinjauan bersampel | Manajemen pengetahuan; pemberdayaan perubahan | Pemahaman bersama atas kode | Kuartalan |
| Mutu dukungan berbantuan | Tingkat buka kembali dan kepuasan pengguna untuk respons dukungan berbantuan AI dibandingkan yang tanpa bantuan | tiket berbantuan yang dibuka kembali / tiket berbantuan, dan peringkat favorable / peringkat, per kelompok | persen | Alat ITSM, survei | Service desk; manajemen insiden | Mutu hasil layanan | Bulanan |
| Peringkat keyakinan tanpa bantuan | Peringkat tim atas keyakinan mengerjakan tugas utama tanpa perkakas | rata-rata peringkat dan sebaran pada skala yang disepakati, per tim | poin skala | Denyut tim anonim | Manajemen tenaga kerja dan talenta; manajemen pengetahuan | Kemampuan dan pembelajaran tim | Kuartalan |

Beri tag bantuan AI secara andal pada tingkat tim, lewat log perkakas atau konvensi ringan, dan nyatakan bagaimana perubahan pembanding dipilih: serupa dalam ukuran, area, dan risiko. Retensi mengukur perubahan substansial, dengan ambang yang ditetapkan di register. Pengerjaan ulang pasca-penggabungan mengaitkan perbaikan lanjutan dengan perubahan asli lewat aturan yang dinyatakan. Beban tinjauan adalah upaya peninjau, bukan penulis, dan hanya mencakup waktu tinjauan aktif bila terukur. Data tingkat individu tidak pernah dilaporkan. Sampel untuk pemeriksaan penjelasan dipilih secara acak, dan pemeriksaannya adalah percakapan untuk mendukung pembelajaran, bukan ujian atas seseorang.

## Rekomendasi

### Ikuti pekerjaan setelah diciptakan

**1. Lacak apa yang terjadi pada pekerjaan berbantuan dari waktu ke waktu.** Untuk kode, ikuti perubahan berpekan-pekan setelah digabung: apakah bertahan, diperbaiki, atau dibalik? Untuk dukungan, ikuti tiket setelah balasan: apakah dibuka kembali atau disusul kontak berulang? Untuk dokumen, periksa apakah dipakai, dikoreksi, atau diabaikan. Retensi dan pengerjaan ulang adalah sinyal mutu yang sederhana dan sulit dipalsukan.

**2. Bandingkan dengan pekerjaan serupa tanpa bantuan.** Pilih pekerjaan pembanding dengan ukuran, risiko, dan area serupa, dari periode yang sama. Kesulitan penting: orang mungkin memakai AI untuk tugas mudah, yang akan menyanjung perkakas, atau untuk yang sulit, yang akan menghukumnya. Nyatakan bagaimana tugas menjadi berbantuan, dan sesuaikan atau beri catatan. Perbandingan kecil yang jujur mengalahkan yang besar dan tercampur (lihat topik 6.5, Realisasi nilai dan hasil bisnis).

**3. Sertakan ukuran hilir dalam himpunan standar.** Pasangkan ukuran kecepatan apa pun dengan change fail rate, cacat yang lolos, dan ukuran stabilitas yang sudah dipakai (lihat topik 2.8, Metrik DORA). Peningkatan kecepatan dengan stabilitas yang turun adalah pemindahan biaya ke operasi dan pengguna. Laporkan pasangannya bersama.

### Jaga tinjauan tetap bermakna

**4. Awasi beban dan ukuran tinjauan.** Ukur waktu tinjauan, putaran tinjauan, dan ukuran perubahan untuk pekerjaan berbantuan dan tidak. Jika perubahan berbantuan lebih besar atau lebih banyak, peninjau mungkin kelebihan beban. Tetapkan norma ukuran perubahan, dan batasi jumlah materi hasil generasi yang dapat masuk satu tinjauan. Kapasitas tinjauan adalah bagian kapasitas sistem (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean).

**5. Minta penulis menjelaskan.** Jadikan kebiasaan bahwa penulis perubahan dapat menjelaskan apa yang dilakukannya, mengapa pendekatan ini, dan apa pertukarannya. Percakapan singkat yang mendukung dalam tinjauan sudah cukup. Ambil sampel pemeriksaan penjelasan tiap kuartal untuk melihat apakah pemahaman mengikuti keluaran. Di mana penulis tak dapat menjelaskan, perlakukan sebagai sinyal untuk melambat dan belajar, bukan sebagai kegagalan orangnya.

**6. Jaga dari bias otomatisasi.** Dorong peninjau membaca pekerjaan berbantuan sekritis pekerjaan lain. Rotasi peninjau, sesekali tanam isu yang dikenal dalam perubahan uji untuk memeriksa deteksi, dan teruskan pengambilan sampel keluaran oleh peninjau independen. Tingkat penerimaan sangat tinggi dengan pengerjaan ulang yang naik adalah peringatan (lihat topik 10.1, AI dalam pengukuran manajemen layanan).

### Jaga mutu dan pemeliharaan

**7. Pantau struktur kode dan sistem.** Lacak duplikasi, kompleksitas, cakupan pengujian, dan laju perubahan di area tempat bantuan berat. Pakai ukuran yang sudah Anda punya untuk [pengujian perangkat lunak](https://en.wikipedia.org/wiki/Software_testing) dan kesehatan kode, dan lihat tren. Duplikasi yang naik atau efektivitas pengujian yang turun dapat menandakan bahwa kode yang dihasilkan diterima tanpa diintegrasikan ke desain. Cakupan [pengujian regresi](https://en.wikipedia.org/wiki/Regression_testing) adalah jaring pengaman, dan kekuatannya lebih penting ketika volume perubahan naik.

**8. Perlakukan pengujian hasil generasi dengan hati-hati.** AI dapat menulis banyak pengujian dengan cepat, dan pengujian dapat lulus tanpa memeriksa sesuatu yang bermakna. Ambil sampel pengujian hasil generasi untuk nilai, dan ukur efektivitas pengujian dengan metode seperti apakah pengujian gagal ketika perilaku sengaja dirusak. Jangan menghitung pengujian yang ditulis sebagai ukuran mutu.

**9. Awasi mutu dukungan berbantuan.** Untuk service desk dan operasi, ukur tingkat buka kembali, kontak berulang, kepuasan, dan akurasi balasan bersampel untuk respons berbantuan versus tanpa bantuan. Balasan yang lebih cepat yang mengirim pengguna kembali lebih lambat secara keseluruhan. Baca komentar pengguna tentang balasan berbantuan, dan lihat apakah pengguna tahu mereka berurusan dengan AI di mana itu penting (lihat topik 6.1, Metrik kepuasan pelanggan).

### Lindungi orang dan keterampilan

**10. Perhatikan apa yang masih dapat dilakukan orang.** Tanyakan kepada tim seberapa yakin mereka mengerjakan tugas utama tanpa perkakas dan lacak trennya. Pakai latihan tanpa bantuan sesekali, pairing, dan tinjauan desain dasar untuk menjaga keterampilan tetap hidup. Lindungi khususnya pembelajaran anggota tim yang lebih baru, yang mungkin memakai perkakas sebelum membangun model mental yang diandalkan rekan berpengalaman untuk menilainya (lihat topik 9.4, Metrik keterampilan dan pembelajaran).

**11. Jauhkan data tentang orang dari evaluasi.** Agregasikan ke tingkat tim. Jangan melaporkan individu mana yang paling banyak memakai AI, dan jangan memakai pemakaian, tingkat penerimaan, atau volume hasil generasi dalam tinjauan kinerja. Umumkan aturannya. Kepercayaan dibutuhkan untuk laporan jujur tentang apa yang berhasil dan tidak.

**12. Tinjau kembali secara teratur.** Perkakas, model, dan praktik berubah dalam hitungan bulan. Jalankan ulang perbandingan ketika perkakas atau cara kerja berubah. Bagikan temuan, termasuk bahwa perkakas tidak membantu di sini, dan pensiunkan pemakaian yang tak lagi pantas.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat retensi | Menghindari perubahan yang dibutuhkan agar angka tetap naik; hanya menandai perubahan berhasil sebagai berbantuan | Beri tag lewat log perkakas, bukan pilihan penulis; pasangkan dengan cacat yang lolos dan pengerjaan ulang |
| Pengerjaan ulang pasca-penggabungan | Memperbaiki di tiket lain atau perubahan baru yang tak terkait; menunda perbaikan melewati jendela | Aturan keterkaitan di register; lihat jendela lebih panjang; cacat produksi |
| Beban tinjauan | Tinjauan tergesa yang menurunkan waktu terukur; persetujuan tanpa komentar | Sampel kedalaman tinjauan; cacat yang lolos; survei peninjau |
| Tingkat cacat yang lolos | Tidak mengatribusikan cacat ke perubahan; mengklasifikasi ulang cacat sebagai peningkatan | Aturan atribusi; sampel independen klasifikasi cacat |
| Tingkat lulus pemeriksaan penjelasan | Penulis berlatih untuk pemeriksaan; peninjau yang longgar | Sampel acak tanpa pemberitahuan; rotasi peninjau; fokus pada alasan desain |
| Mutu dukungan berbantuan | Membantu hanya tiket mudah; melatih pengguna memberi peringkat tinggi | Cocokkan tiket menurut jenis dan kesulitan; tingkat respons dan bauran; baca komentar |
| Peringkat keyakinan tanpa bantuan | Peringkat digelembungkan untuk menghindari pengamatan; peringkat rendah untuk membela lebih banyak perkakas | Anonimitas; bandingkan dengan praktik teramati dalam latihan; baca komentar |

Pembacaan yang sehat adalah pekerjaan berbantuan yang tetap di tempat sesering pekerjaan tanpa bantuan, pengerjaan ulang dan cacat yang lolos yang menyamai atau mengalahkan pembanding, tinjauan yang tetap dalam, penulis yang mampu menjelaskan apa yang mereka kirim, dukungan berbantuan yang tidak kembali, dan tim yang tetap yakin pada keterampilan mereka sendiri.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Ukur volume keluaran | Mudah | Menghargai volume; tak bicara tentang nilai |
| Ukur retensi dan pengerjaan ulang | Mencerminkan mutu dari waktu ke waktu | Tertunda; butuh pengaitan catatan |
| Perbandingan terkendali | Kredibel | Butuh upaya; mungkin tak praktis |
| Perbandingan observasional | Murah | Dikacaukan pemilihan tugas |
| Pemeriksaan penjelasan wajib | Menjaga pemahaman | Dapat terasa seperti ujian; menambah upaya |
| Pemeriksaan bersampel ringan | Beban rendah | Mungkin melewatkan pola |
| Pembatasan berat pemakaian AI | Kendali risiko | Manfaat hilang; pemakaian bayangan |
| Pemakaian terbuka dengan pengukuran | Pembelajaran dan manfaat | Butuh kepercayaan dan disiplin |

Jawaban prosanya adalah mengizinkan pemakaian dalam aturan jelas, mengukur apa yang bertahan, mengambil sampel untuk pemahaman, melindungi kapasitas tinjauan dan keterampilan, dan menjauhkan data tentang orang dari evaluasi.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Seberapa banyak yang dibantu AI kita hasilkan kuartal lalu yang masih di tempat, tak berubah, dan bagaimana kita tahu?**
Lihat retensi dan pengerjaan ulang untuk perubahan berbantuan terhadap himpunan sebanding. Fasilitator sebaiknya mencatat seberapa sulit menjawabnya. Sepakati cara memberi tag dan mengaitkan catatan agar jawabannya mudah kuartal depan.

**2. Apakah tinjauan mengikuti, dan apa yang terjadi ketika tidak?**
Lihat waktu, putaran, dan ukuran tinjauan. Tanyakan peninjau bagaimana perasaan mereka tentang perubahan berbantuan. Bahas batas ukuran dan cara berbagi beban. Sepakati satu norma untuk dicoba.

**3. Dapatkah masing-masing dari kita menjelaskan perubahan terakhir yang kita kirim dengan bantuan AI, dan pertukarannya?**
Cobalah berpasangan. Perhatikan di mana penjelasan mudah dan di mana sulit. Bahas apa yang itu katakan tentang pemakaian perkakas kita, dan cara menjaga pemahaman tetap tinggi.

**4. Apa yang masih dapat kita lakukan dengan baik tanpa perkakas, dan apa yang mulai hilang kemahirannya?**
Daftar tugas utama, nilai keyakinan dengan jujur, dan rencanakan latihan tanpa bantuan atau pairing. Percakapan ini juga mengungkap apa yang dihargai orang dalam pekerjaan mereka dan ingin dipertahankan.

**5. Di mana AI paling dan paling tidak membantu kita, dan apa kesamaan tempat-tempat itu?**
Bandingkan contoh. Cari ciri seperti tugas terdefinisi baik, pengujian bagus, atau ranah yang akrab. Pakai temuan untuk memandu di mana memakai perkakas.

**6. Apa yang akan kita ukur jika kita tidak memercayai kesan pertama kita?**
Minta kelompok menamai bukti yang akan mengubah pikiran mereka tentang perkakas ke arah mana pun. Pakai jawabannya untuk mendefinisikan perbandingan berikutnya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memegang pengalaman sehari-hari dan hasil mutu. Mereka sebaiknya memberi tag pada pekerjaan berbantuan, mengawasi retensi dan pengerjaan ulang, menjaga tinjauan tetap bermakna, dan memelihara pemahaman mereka sendiri. Mereka sebaiknya bersuara ketika volume perubahan hasil generasi melampaui kemampuan mereka meninjau.

### Tim layanan dan operasi

Tim operasi memakai AI untuk ringkasan, diagnosis, dan balasan, dan mewarisi masalah mutu yang lolos. Mereka sebaiknya mengambil sampel keluaran, membandingkan tingkat buka kembali dan kontak berulang, dan menjaga tanggung jawab manusia yang jelas atas tindakan di produksi. Mereka sebaiknya membantu mendefinisikan di mana AI tidak boleh bertindak tanpa seseorang.

### Kepemimpinan dan tata kelola

Pemimpin menghadapi tekanan menunjukkan keuntungan dan mungkin tergoda oleh metrik pemakaian dan keluaran. Mereka sebaiknya berkeras pada ukuran retensi, pengerjaan ulang, dan stabilitas di samping kecepatan, mendanai kapasitas tinjauan, melindungi pengembangan keterampilan, dan menolak memeringkat orang. Tata kelola sebaiknya mengharapkan perbandingan dan catatan dalam laporan manfaat AI.

### Pelanggan dan pengguna

Pengguna menerima hasilnya: kode yang menjalankan layanan mereka, balasan atas permintaan mereka, dokumen yang mereka andalkan. Mereka diuntungkan ketika mutu bertahan dan menderita ketika tidak. Mereka sebaiknya dapat menjangkau seseorang, dan umpan balik mereka atas interaksi berbantuan adalah bukti kunci mutu.

## Dalam praktik: contoh ITIL agile

Kelompok digital sebuah maskapai penerbangan Eropa punya enam tim produk yang membangun dan menjalankan perangkat lunak pemesanan dan operasi. Tim mulai memakai asisten pemrograman AI setahun lalu, dan dasbor kelompok melaporkan bahwa 38 persen baris yang digabung dihasilkan AI. Angka di bawah bersifat ilustratif.

Kepala keunggulan rekayasa gelisah tentang dasbor itu. Ia meminta tiga tim memberi tag pada perubahan berbantuan lewat log perkakas, hanya pada tingkat tim, dan memilih perubahan pembanding dengan ukuran dan area serupa. Selama satu kuartal, median waktu dari commit pertama sampai penggabungan lebih pendek untuk perubahan berbantuan, 1,4 hari dibanding 2,0. Tingkat retensi perubahan berbantuan setelah 30 hari adalah 81 persen dibanding 90 persen untuk perubahan pembanding, dan 12 persen perubahan berbantuan butuh perbaikan lanjutan dalam 14 hari dibanding 7 persen. Beban tinjauan bercerita sama: median waktu tinjauan per perubahan 35 persen lebih tinggi untuk perubahan berbantuan, dan persentil ke-85 ukuran perubahan telah tumbuh. Cacat yang lolos per 100 perubahan sedikit lebih tinggi untuk perubahan berbantuan, meski sampelnya kecil dan selisihnya dalam variasi normal. Sampel 40 perubahan berbantuan menunjukkan bahwa pada 31 penulis dapat menjelaskan pendekatan dan pertukarannya dengan baik, pada 6 sebagian, dan pada 3 sama sekali tidak, kebanyakan di area kode yang baru bagi penulis. Di service desk, balasan berbantuan punya tingkat buka kembali 7 persen dibanding 6 untuk yang tanpa bantuan, dengan kepuasan serupa. Dalam denyut tim, insinyur yang lebih baru menilai keyakinan mereka mengimplementasikan fitur inti tanpa perkakas pada 2,6 dari 5, dibanding 4,1 untuk insinyur dengan lebih dari tiga tahun di kelompok.

Kepala keunggulan rekayasa membawa hasil ke tim dan tidak memeringkat mereka. Tim menyepakati empat perubahan. Batas ukuran perubahan dan jadwal bergilir tinjauan melindungi peninjau. Penulis menjelaskan secara singkat perubahan berbantuan dalam tinjauan. Insinyur yang lebih baru berpasangan dengan yang berpengalaman untuk fitur inti, dan latihan tanpa bantuan bulanan menjaga keterampilan tetap terlatih. Dasbor membuang porsi baris hasil generasi dan menunjukkan retensi, pengerjaan ulang, beban tinjauan, dan cacat yang lolos, berbantuan terhadap pembanding. Tiga bulan kemudian, kesenjangan retensi menyempit menjadi 4 poin, perbaikan lanjutan turun menjadi 8 persen, dan pemeriksaan penjelasan membaik. Seorang wakil presiden meminta porsi baris hasil generasi menjadi target bagi setiap tim. Kepala keunggulan rekayasa menjelaskan temuannya dan mengusulkan terus melacak hasil, menambahkan bahwa keuntungan nyata dalam sebagian tugas dan tidak dalam yang lain, dan bahwa tim akan memutuskan di mana memakai perkakas. Keputusan dicatat.

## Sudut pandang sektor

**Startup.** Tim kecil mungkin mendapat banyak dari bantuan dan juga mengumpulkan utang tersembunyi dengan cepat. Lacak retensi dan pengerjaan ulang sejak dini, jaga pengujian tetap bermakna, dan pastikan orang yang akan merawat sistem memahaminya. Waspadai mengirim kode yang tak bisa dijelaskan siapa pun.

**Bisnis kecil.** Bantuan dapat meregangkan tim yang sangat kecil. Ukur pada sampel kecil: seberapa sering pekerjaan berbantuan butuh perbaikan kemudian. Simpan cadangan, pengujian, dan tinjauan manusia atas apa pun yang menghadap pelanggan, dan lindungi pemahaman pemilik atas sistem yang diandalkannya.

**Perusahaan besar.** Skala memperkuat keuntungan dan masalah. Sediakan panduan bersama tentang pemberian tag, batas tinjauan, dan ukuran, bandingkan antar-tim dengan hati-hati tanpa memeringkat, dan investasikan pada kapasitas tinjauan dan pengujian. Sertakan tinjauan keamanan dan lisensi kode hasil generasi di pipeline (lihat topik 7.2, Metrik aset perangkat lunak dan lisensi).

**Pemerintah dan sektor publik.** Sistem publik berumur panjang, akuntabilitas ketat, dan konsekuensi galat tinggi. Wajibkan tanggung jawab manusia yang dapat ditelusuri, pengujian cermat, dan dokumentasi bagaimana AI dipakai. Catat pekerjaan berbantuan dalam catatan perubahan, dan nilai risiko terhadap keadilan dan keamanan (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah perkakas dan biaya pemakaian, upaya memberi tag dan mengaitkan catatan, waktu meninjau dan memperbaiki, pengujian tambahan, dan pelatihan. Studi perbandingan memakan waktu, tetapi murah relatif terhadap keputusan keliru untuk menskalakan atau melarang.

Imbal hasilnya nyata di mana bantuan mengurangi upaya tanpa mengurangi mutu, dan hilang di mana ia memindahkan upaya ke tinjauan, pengerjaan ulang, dan pemeliharaan. Bangun kasus dari ukuran Anda sendiri: waktu ke perubahan yang digabung dan bertahan, pengerjaan ulang dan cacat yang lolos terhadap pembanding, beban tinjauan, dan kepuasan pengguna dan staf. Hindari memakai angka produktivitas terbitan sebagai estimasi Anda. Ingat biaya tersembunyi: pemahaman yang berkurang, hilangnya keterampilan, dan utang teknis. Jujurlah tentang ketidakpastian (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Menghitung baris yang dihasilkan atau saran yang diterima.** Menghargai volume. Ukur apa yang bertahan.
- **Membandingkan pekerjaan berbantuan pada tugas mudah dengan pekerjaan tanpa bantuan pada tugas sulit.** Hasilnya menyanjung atau menghukum perkakas. Cocokkan tugas.
- **Membiarkan kapasitas tinjauan tertinggal.** Mutu turun diam-diam. Batasi ukuran perubahan dan lindungi peninjau.
- **Melewatkan ukuran hilir.** Biaya muncul kemudian. Lacak pengerjaan ulang, cacat, dan stabilitas.
- **Memperlakukan pengujian hasil generasi sebagai mutu.** Dapat lulus tanpa memeriksa apa pun. Uji pengujiannya.
- **Mengabaikan keterampilan.** Pemahaman memudar tanpa terasa. Lacak keyakinan tanpa bantuan dan latihan.
- **Memantau individu.** Menumbuhkan ketakutan dan menyembunyikan masalah. Jaga data pada tingkat tim.
- **Menyatakan kemenangan atas studi singkat dan kecil.** Jalankan ulang seiring perkakas dan praktik berubah.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Mengukur apa yang bertahan | Hitungan keluaran | Kesan informal tentang mutu | Pekerjaan berbantuan diberi tag; retensi dan pengerjaan ulang dilacak terhadap pembanding | Cacat hilir, stabilitas, dan beban tinjauan dikelola bersama | Bukti lintas tim memandu di mana bantuan dipakai; hasil dibagikan luas |
| Tinjauan dan pemahaman | Tinjauan seperti sebelumnya | Kekhawatiran tentang kelebihan beban | Norma ukuran perubahan; pemeriksaan penjelasan bersampel | Kapasitas tinjauan direncanakan; bias otomatisasi dilawan | Tinjauan dan pemahaman terbangun dalam cara semua tim bekerja dengan AI |
| Orang dan keterampilan | Tidak dipertimbangkan | Anekdot | Keyakinan tanpa bantuan didenyut; sedikit latihan | Pengembangan keterampilan direncanakan; tren dikelola | Pembelajaran dan keahlian dilindungi di seluruh organisasi; pemakaian AI dirancang bersama staf |

## Daftar periksa

- [ ] Pekerjaan berbantuan AI diberi tag pada tingkat tim lewat log perkakas atau konvensi ringan.
- [ ] Pekerjaan pembanding dengan ukuran, area, dan risiko serupa didefinisikan.
- [ ] Retensi dan pengerjaan ulang pasca-penggabungan dilacak untuk pekerjaan berbantuan dan pembanding.
- [ ] Cacat yang lolos dan change fail rate dilaporkan di samping ukuran kecepatan apa pun.
- [ ] Waktu, putaran, dan ukuran perubahan tinjauan dipantau, dengan norma ukuran.
- [ ] Penulis dapat menjelaskan perubahan berbantuan, dan sampel diperiksa tiap kuartal.
- [ ] Pengujian hasil generasi disampel untuk nilai.
- [ ] Dukungan berbantuan dibandingkan untuk tingkat buka kembali, kontak berulang, dan kepuasan.
- [ ] Keyakinan tanpa bantuan didenyut, dan latihan tanpa bantuan direncanakan.
- [ ] Data pemakaian dan penerimaan individu tidak dipakai dalam evaluasi.

## Prompt AI

**Rencanakan perbandingan perubahan berbantuan dan tanpa bantuan.**

```text
Kami ingin membandingkan perubahan berbantuan AI dan tanpa bantuan untuk [team and
system]. Data kami mencakup: [list fields]. Usulkan cara memberi tag perubahan
berbantuan tanpa bergantung pada ingatan penulis, cara memilih perubahan
pembanding dengan ukuran dan risiko serupa, ukuran mana yang dibandingkan
(retensi, pengerjaan ulang, beban tinjauan, cacat), periodenya, dan cara memberi
catatan temuan. Jangan menyatakan hasil yang diharapkan. Daftar asumsi Anda dan
ancaman terhadap validitas.
```

**Rancang pemeriksaan penjelasan.**

```text
Rancang pemeriksaan penjelasan yang singkat dan mendukung untuk perubahan
berbantuan AI bersampel dalam [language and domain]. Sertakan cara mengambil
sampel, pertanyaan yang diajukan peninjau, apa yang dicakup penjelasan yang baik,
cara mencatat hasil pada tingkat tim, dan cara memakai temuan untuk pembelajaran
tanpa menilai orang. Daftar asumsi Anda dan risiko pemeriksaan.
```

**Tinjau ukuran hilir.**

```text
Berikut ukuran kami untuk [period]: kecepatan [values], retensi [values],
pengerjaan ulang [values], beban tinjauan [values], cacat yang lolos [values],
untuk pekerjaan berbantuan dan pembanding. Gambarkan apa yang disarankan polanya
dan apa yang tidak, selisih mana yang dalam variasi normal, dan apa yang
diperiksa berikutnya. Jangan mengklaim sebab-akibat. Daftar asumsi Anda dan data
yang sebaiknya saya tambahkan.
```

**Rencanakan latihan tanpa bantuan.**

```text
Usulkan program ringan untuk menjaga keterampilan inti tetap hidup bagi tim yang
memakai perkakas AI setiap hari: latihan tanpa bantuan bulanan, pairing antara
anggota baru dan berpengalaman, dan diskusi desain. Sarankan cara memasukkannya ke
pekan kerja tanpa menambah tekanan dan cara melacak efeknya dengan denyut
keyakinan tanpa bantuan. Daftar asumsi Anda dan pertukaran.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi ukuran pekerjaan berbantuan AI.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa metrik pekerjaan berbantuan AI mengukur apa yang bertahan dan membawa vektor manipulasi serta pagar pembatasnya.

## Poin penting

- Ukur apa yang bertahan: retensi, pengerjaan ulang, cacat yang lolos, dan stabilitas, terhadap pekerjaan tanpa bantuan yang sebanding.
- Lindungi kapasitas tinjauan dan jaga tinjauan tetap dalam, karena ia membatasi seberapa cepat pekerjaan berbantuan dapat mengalir dengan aman.
- Periksa bahwa penulis dapat menjelaskan apa yang mereka kirim, dan perhatikan apakah keterampilan tumbuh atau memudar.
- Ambil sampel pengujian dan keluaran hasil generasi untuk nilai nyata.
- Baca klaim produktivitas terbitan sebagai studi tunggal, dan ukur pekerjaan Anda sendiri.
- Jauhkan data pemakaian individu dari evaluasi.

## Referensi dan bacaan lanjutan

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
