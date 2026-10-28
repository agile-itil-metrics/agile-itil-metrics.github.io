# Biaya layanan dan ekonomi per unit

**Mengetahui berapa biaya sebuah layanan, dan berapa biayanya per unit sesuatu yang dihargai pengguna, memungkinkan tim membuat pilihan jujur tentang mutu, kecepatan, dan belanja, selama aturan alokasinya adil, terlihat, dan tidak pernah dipakai untuk menghukum orang yang menjalankan layanan.**

## Gambaran umum dan motivasi

Setiap layanan TI berbiaya uang: orang, cloud dan hosting, lisensi, perangkat keras, pemasok, dan bagian platform bersama yang dipakainya. Pemimpin bertanya berapa biaya sebuah layanan, apakah sepadan, dan apa yang berubah jika permintaan berlipat dua. Tim bertanya hal yang sama dari sisi lain: apa yang mampu kita lakukan, dan apa yang kita korbankan? Tanpa angka, percakapan ini berubah menjadi perdebatan tentang anggaran siapa milik siapa.

[Akuntansi biaya](https://en.wikipedia.org/wiki/Cost_accounting) adalah praktik mengukur, mencatat, dan menganalisis biaya. Bagi organisasi layanan, tugas intinya adalah mengatribusikan biaya ke layanan, menyatakan biaya per unit sesuatu yang bermakna, dan memperkirakan bagaimana biaya berubah dengan volume. Praktik manajemen keuangan layanan ITIL mencakup wilayah yang sama, dan praktik FinOps untuk belanja cloud membawanya lebih jauh (lihat topik 7.6, Metrik FinOps dan biaya cloud).

Pandangan agile dan ITIL tentang biaya berbeda, dan perbedaannya berguna.

- **Pandangan proyek** mendanai upaya sementara dengan anggaran dan tanggal pengiriman. Biaya adalah yang dibelanjakan proyek, dan keberhasilan adalah pengiriman tepat waktu dan sesuai anggaran. Proyek berakhir, tim bubar, dan layanan yang diciptakannya diserahkan kepada orang lain.
- **Pandangan produk atau layanan** mendanai tim yang bertahan untuk membangun dan menjalankan layanan sepanjang masa hidupnya. Biaya adalah biaya stabil tim dan platformnya, dan pertanyaannya adalah apakah nilai yang disampaikan membenarkan belanja itu. Ini cocok dengan tujuan agile tentang pengiriman berkelanjutan dan membangun di sekitar orang termotivasi yang mengenal layanan. Ini juga cocok dengan perhatian ITIL pada biaya layanan sepanjang siklus hidupnya.

Ukuran biaya bisa menyesatkan semudah menginformasikan. Tiga masalah berulang.

- **Alokasi adalah pilihan.** Biaya bersama, seperti jaringan, keamanan, dan platform, harus disebar ke layanan dengan suatu aturan, dan aturan berbeda memberi jawaban berbeda. [Alokasi biaya](https://en.wikipedia.org/wiki/Cost_allocation) sebaiknya mengikuti [pendorong biaya](https://en.wikipedia.org/wiki/Cost_driver), faktor yang menyebabkan biaya berubah, seperti pengguna, permintaan, atau penyimpanan. [Penghitungan biaya berbasis aktivitas](https://en.wikipedia.org/wiki/Activity-based_costing) memformalkan ini dengan menelusuri biaya ke aktivitas yang mengonsumsi sumber daya.
- **Biaya tetap dan variabel berperilaku berbeda.** [Biaya tetap](https://en.wikipedia.org/wiki/Fixed_cost) tetap sama ketika volume berubah dalam rentang tertentu, dan [biaya variabel](https://en.wikipedia.org/wiki/Variable_cost) naik bersama volume. [Biaya unit](https://en.wikipedia.org/wiki/Unit_cost) layanan turun ketika volume tumbuh bila biaya tetap mendominasi, pola yang terkait dengan [skala ekonomi](https://en.wikipedia.org/wiki/Economies_of_scale). Memandang biaya unit tanpa tahu mana yang tetap menuntun pada perkiraan yang salah.
- **Biaya bukan nilai.** Layanan termurah bukan yang terbaik. Biaya per tiket turun jika Anda menutup tiket tanpa menyelesaikan masalah. Ukuran biaya butuh pendamping mutu atau hasil, yang disediakan bagian-bagian awal buku ini (lihat topik 6.5, Realisasi nilai dan hasil bisnis).

Klasifikasi akuntansi juga penting. [Belanja modal](https://en.wikipedia.org/wiki/Capital_expenditure) membeli aset yang bertahan, dan beban operasi menutup penjalanan sehari-hari. Layanan cloud dan langganan memindahkan belanja dari jenis pertama ke kedua, yang mengubah tampilan anggaran tanpa mengubah biaya layanan. Rekan keuangan memiliki aturan ini, dan metrik di sini sebaiknya dibangun bersama mereka.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku kuat pada uang. Target biaya cenderung menghasilkan pemotongan biaya di tempat kerusakan paling mudah disembunyikan, seperti pemeliharaan, mutu, dan waktu belajar. Ukuran di bawah karena itu dipasangkan dengan indikator kesehatan layanan dan pernyataan aturan alokasi (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Buat aturan alokasi eksplisit dan terikat pada pendorong.** Orang menerima angka yang dapat mereka ikuti.
- **Pisahkan biaya tetap dari variabel.** Perkiraan bergantung pada mana yang mana.
- **Laporkan biaya unit bersama pendamping mutunya.** Lebih murah hanya lebih baik jika layanan masih baik.
- **Pakai rentang dan tren, bukan presisi palsu.** Alokasi melibatkan pertimbangan.
- **Danai tim yang bertahan di sekitar layanan bila memungkinkan.** Tim stabil belajar dan memperbaiki; tim sementara bubar.
- **Bagikan biaya dengan orang yang dapat mengubahnya.** Visibilitas tanpa pengaruh hanyalah menyalahkan.
- **Jangan pernah memeringkat orang atau tim menurut biaya.** Layanan berbeda, begitu pula kendalanya.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Biaya per layanan | Biaya tahunan terbebani penuh dari layanan bernama, memakai aturan alokasi terdokumentasi | biaya langsung + biaya bersama yang dialokasikan untuk layanan pada periode itu | mata uang per tahun | Buku besar, data pusat biaya, tagihan cloud dan lisensi, data waktu atau aktivitas | Manajemen keuangan layanan; manajemen katalog layanan | Biaya tim produk yang bertahan dan platformnya | Kuartalan |
| Biaya unit | Biaya per unit sesuatu yang dihargai pengguna, seperti per pengguna aktif, per transaksi, atau per permintaan terselesaikan | biaya per layanan pada periode itu / unit yang disampaikan pada periode itu | mata uang per unit | Biaya per layanan dan data volume | Manajemen keuangan layanan; manajemen tingkat layanan | Biaya melayani per hasil | Kuartalan |
| Cakupan alokasi | Porsi belanja TI yang diatribusikan ke layanan bernama atau dinyatakan sebagai overhead bersama | belanja yang diatribusikan ke layanan atau overhead yang dinyatakan / total belanja TI | persen | Buku besar dan model alokasi | Manajemen keuangan layanan | Biaya pekerjaan tiap tim yang terlihat | Kuartalan |
| Pembagian menjalankan, mengubah, dan memperbaiki | Porsi belanja atau kapasitas untuk menjalankan layanan, mengubahnya, dan memperbaikinya | belanja atau kapasitas di tiap kategori / total | persen | Tag buku besar, jenis pekerjaan pada pelacak kerja | Manajemen keuangan layanan; perbaikan berkelanjutan | Alokasi kapasitas menurut jenis pekerjaan | Kuartalan |
| Varians perkiraan | Selisih antara perkiraan dan biaya aktual, per layanan | (aktual dikurangi perkiraan) / perkiraan | persen | Log perkiraan dan buku besar | Manajemen keuangan layanan | Akurasi perkiraan | Bulanan |
| Tingkat sengketa showback | Porsi item baris showback atau chargeback yang ditantang pemilik layanan dan yang diubah | item baris diubah setelah ditantang / item baris yang diterbitkan | persen | Sistem showback dan log sengketa | Manajemen keuangan layanan | Retrospektif tentang biaya bersama | Kuartalan |
| Porsi pendanaan tim yang bertahan | Porsi belanja pengiriman dan operasi yang didanai sebagai kapasitas tim stabil untuk suatu layanan | belanja pada tim layanan yang bertahan / total belanja pengiriman dan operasi | persen | Buku besar dan bagan organisasi | Manajemen keuangan layanan; perubahan organisasi | Tim dibangun di sekitar layanan dan orang termotivasi | Tahunan |

Definisikan periode, mata uang, dan jenis biaya untuk setiap ukuran, dan catat aturan alokasi di register metrik: biaya mana yang langsung, mana yang bersama, dan pendorong mana yang menyebarkan tiap biaya bersama. Biaya unit butuh unit yang diterima pengguna dan tim, dan definisi unit tetap selama tren. Varians perkiraan membandingkan dengan perkiraan seperti pada awal periode, bukan yang telah direvisi.

## Rekomendasi

### Bangun gambaran biaya

**1. Mulai dengan buku besar dan daftar layanan.** Ambil total belanja TI dari buku besar, daftarkan layanan dari katalog, dan putuskan bagian tiap biaya milik layanan mana. Mulai dengan biaya langsung yang mudah: tim yang menjalankan layanan, lisensinya, hostingnya. Biaya bersama menyusul. Gambaran kasar pertama yang dibagikan kepada orang terkait lebih baik daripada gambaran presisi yang dibangun secara pribadi.

**2. Pilih pendorong biaya yang dapat diikuti orang.** Untuk tiap biaya bersama, pilih pendorong yang terikat pada apa yang benar-benar menyebabkannya: pengguna untuk platform kolaborasi, penyimpanan untuk platform data, permintaan untuk gateway, perangkat untuk manajemen endpoint. Jelaskan aturannya dalam satu kalimat. Pendorong yang tak dapat diperiksa siapa pun mengundang perdebatan, dan pendorong yang tak dapat dipengaruhi siapa pun membuat showback sia-sia.

**3. Pisahkan biaya tetap dan variabel.** Untuk tiap layanan, tandai biaya mana yang bergerak dengan volume dan mana yang tidak. Layanan yang sebagian besar biaya tetap punya biaya unit yang turun seiring pertumbuhan, dan yang sebagian besar variabel tidak. Pemisahan ini adalah dasar setiap perkiraan dan setiap percakapan tentang penskalaan.

**4. Tunjukkan rentang di mana alokasi melibatkan pertimbangan.** Jika dua aturan alokasi yang wajar memberi hasil berbeda 20 persen, tunjukkan keduanya atau tunjukkan rentangnya. Satu angka presisi dari aturan sembarang memulai pertengkaran yang tak dapat diselesaikan data.

### Ukur per unit, dengan mutu di sampingnya

**5. Pilih unit yang mencerminkan nilai.** Biaya per pengguna aktif, per transaksi selesai, per permintaan terselesaikan, atau per deployment semuanya dapat berguna. Pilih unit yang terhubung dengan tujuan layanan, sepakati dengan pemilik layanan, dan jaga stabil. Biaya per tiket adalah unit berisiko, karena turun ketika tiket ditutup lebih awal dan naik ketika Anda mencegah tiket dengan swalayan yang baik.

**6. Pasangkan setiap biaya unit dengan ukuran mutu.** Tunjukkan biaya unit di samping ketersediaan, kepuasan, atau tingkat buka kembali. Biaya unit yang turun ketika mutu turun adalah pemindahan biaya ke pengguna. Biaya unit yang tetap stabil ketika mutu naik adalah keuntungan. Sajikan bersama atau jangan sama sekali (lihat topik 6.1, Metrik kepuasan pelanggan).

**7. Lacak tren, bukan hanya tingkat.** Biaya unit dari waktu ke waktu, dengan catatan tentang apa yang berubah, bercerita lebih dari satu kuartal. Tandai perubahan aturan alokasi atau unit pada bagan agar tren tidak salah dibaca. Bandingkan layanan dengan riwayatnya sendiri sebelum membandingkannya dengan yang lain.

### Bagikan biaya dengan orang yang dapat mengubahnya

**8. Pakai showback sebelum chargeback.** Showback melaporkan biaya kepada pemilik layanan tanpa menagih mereka, dan chargeback memindahkan biaya ke anggaran mereka. Mulai dengan showback, yang membangun pemahaman dan kepercayaan, dan pindah ke chargeback hanya di mana mengubah keputusan dan aturan diterima. Keduanya bergantung pada aturan yang ikut dibentuk pemilik.

**9. Biarkan pemilik menantang angka.** Proses sengketa adalah tanda kesehatan, selama cepat dan hasilnya dicatat. Tinjau tingkat sengketa: tingkat tinggi menunjukkan aturan yang tak dipercaya siapa pun, dan nol mungkin menunjukkan tak ada yang membaca laporan. Perbaiki aturannya, bukan hanya item barisnya.

**10. Tinjau biaya bersama seluruh tim layanan.** Sertakan insinyur dan operator selain manajer dalam tinjauan biaya reguler. Orang yang menjalankan layanan sering tahu di mana pemborosan bersembunyi: lingkungan menganggur, sumber daya terlalu besar, perkakas ganda. Perlakukan temuan mereka sebagai perbaikan untuk dibagikan, bukan kritik.

### Danai untuk stabilitas dan pembelajaran

**11. Utamakan tim yang bertahan, didanai di sekitar layanan.** Bila mungkin, danai tim stabil untuk memiliki layanan dari waktu ke waktu, alih-alih merakit tim proyek lalu membubarkannya. Tim yang bertahan mengumpulkan pengetahuan, membangun hubungan lebih baik dengan pengguna, dan menanggung biaya keputusan buruk. Ini mencerminkan tujuan agile membangun di sekitar individu termotivasi dan perhatian ITIL pada siklus hidup layanan. Perubahan pendanaan adalah keputusan organisasi yang signifikan, jadi libatkan keuangan dan kepemimpinan sejak dini. Buku Mik Kersten *Project to Product* membahas pergeseran ini.

**12. Sisihkan kapasitas untuk perbaikan.** Biaya yang mengurangi biaya masa depan, seperti otomatisasi, perbaikan keandalan, dan menghapus perkakas ganda, butuh pendanaan terlindungi atau selalu kalah dari pekerjaan fitur. Lacak porsi perbaikan dalam pembagian menjalankan, mengubah, dan memperbaiki, dan lihat imbal hasil yang dihasilkannya (lihat topik 4.6, Utang teknis dan kesalahan yang diketahui).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Biaya per layanan | Memindahkan biaya ke layanan lain lewat aturan alokasi; membiarkan biaya tak menguntungkan tak teralokasi | Cakupan alokasi; aturan diterbitkan dan ditinjau pemilik; bandingkan total dengan buku besar |
| Biaya unit | Menaikkan penyebut dengan unit bernilai rendah; memotong mutu untuk memotong biaya; mengubah unit | Ukuran pendamping mutu; definisi unit tetap; pemeriksaan hasil |
| Cakupan alokasi | Menyatakan jumlah besar sebagai overhead bersama untuk menghindari atribusi | Porsi overhead dilaporkan; tinjauan apa yang dinyatakan overhead dan mengapa |
| Pembagian menjalankan, mengubah, dan memperbaiki | Melabeli ulang pekerjaan menjalankan sebagai perbaikan atau perubahan; menandai di akhir periode | Tandai saat masuk; ambil sampel item untuk jenis; bandingkan dengan data insiden dan permintaan |
| Varians perkiraan | Melebihkan perkiraan; merevisi perkiraan terlambat dalam periode | Perkiraan dicatat di awal; bandingkan rentang perkiraan dengan aktual dari waktu ke waktu |
| Tingkat sengketa showback | Mencegah sengketa; mengubah item baris tanpa perubahan aturan | Tinjau sengketa dan hasilnya; periksa apakah aturan berubah setelah sengketa berulang |
| Porsi pendanaan tim yang bertahan | Menamai ulang proyek sebagai tim yang bertahan tanpa mengubah pendanaan atau kepemilikan | Periksa stabilitas tim dan kepemilikan dari waktu ke waktu; ukuran kesehatan layanan |

Pembacaan yang sehat adalah gambaran biaya yang dikenali pemilik layanan, biaya unit yang bergerak dengan sebab yang dijelaskan sementara mutu bertahan, galat perkiraan yang menyusut, dan pekerjaan perbaikan yang muncul dalam angka.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Pendanaan proyek | Lingkup dan akhir jelas | Tim bubar; pengetahuan hilang; layanan diserahkan |
| Pendanaan tim yang bertahan | Pembelajaran, kepemilikan, biaya stabil | Butuh kepercayaan dan proses perencanaan matang; lingkup dapat melenceng |
| Showback | Membangun pemahaman dengan sedikit gesekan | Dapat diabaikan jika tak ada yang bertanggung jawab |
| Chargeback | Menciptakan akuntabilitas dan sinyal harga | Sengketa; insentif menghindari layanan bersama |
| Aturan alokasi sederhana | Mudah dijelaskan | Mungkin kasar |
| Alokasi berbasis aktivitas | Lebih akurat | Mahal dirawat; presisi palsu |
| Biaya per unit | Menghubungkan biaya dengan nilai | Sensitif pada pilihan unit dan volume |
| Hanya total biaya | Sederhana | Menyembunyikan tren dan efisiensi |

Jawaban prosanya adalah mulai dengan aturan sederhana dan showback, menambah presisi di mana keputusan bergantung padanya, dan bergerak ke pendanaan tim yang bertahan seiring kepercayaan dan kematangan perencanaan tumbuh. Jaga ukuran mutu di samping setiap ukuran biaya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Berapa biaya layanan utama kita per tahun, dan siapa yang akan setuju dengan angkanya?**
Minta keuangan dan pemilik layanan membuat perkiraan independen. Bandingkan. Fasilitator sebaiknya mencatat di mana mereka berbeda dan mengapa: aturan alokasi, lingkup, atau biaya yang hilang. Sepakati satu aturan terdokumentasi untuk kuartal berikutnya.

**2. Unit apa yang akan dikenali pengguna kita, dan berapa biayanya?**
Daftar unit yang mungkin untuk layanan dan pilih satu. Hitung biayanya dan bahas apa yang membuatnya naik atau turun. Tanyakan apa yang disembunyikan unit itu. Tambahkan ukuran mutu untuk duduk di sampingnya.

**3. Biaya bersama kita mana yang disebar dengan aturan yang tak bisa dijelaskan siapa pun?**
Daftar biaya bersama dan pendorongnya. Untuk tiap biaya, tanyakan apakah pendorong terkait dengan apa yang menyebabkan biaya. Ganti yang tidak. Bahas siapa yang dapat memengaruhi pendorong, karena data biaya tanpa pengaruh hanyalah menyalahkan.

**4. Berapa banyak kapasitas kita yang dipakai untuk menjalankan, mengubah, dan memperbaiki layanan?**
Tinjau satu kuartal pekerjaan selesai menurut jenis, seperti dalam topik perencanaan (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman). Bandingkan dengan yang dikira pemimpin. Putuskan berapa porsi perbaikan seharusnya, dan apa yang akan melindunginya.

**5. Apa yang berubah jika kita mendanai tim yang bertahan untuk layanan ini?**
Bayangkan pendanaan, kepemilikan, dan ukurannya. Tanyakan risiko dan manfaat apa yang akan dilihat keuangan, tim, dan pengguna. Identifikasi satu langkah menuju itu, seperti daftar tim yang stabil dan pandangan anggaran layanan bersama.

**6. Kapan angka biaya terakhir menyebabkan pertengkaran, dan apa yang kita pelajari?**
Ingat sengketa showback atau anggaran. Apakah tentang angkanya atau aturannya? Bahas bagaimana aturan yang lebih jelas atau proses sengketa yang lebih baik akan membantu.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman melihat biaya sebagai harga waktu, platform, dan perkakas mereka. Mereka sebaiknya tahu biaya dan biaya unit layanan mereka, melihat pemborosan lebih awal, dan memakai angka untuk memperjuangkan pekerjaan perbaikan dan pendanaan stabil. Mereka sebaiknya menghindari mengoptimalkan angka dengan memotong mutu, dan menantang aturan alokasi yang tak dapat mereka ikuti.

### Tim layanan dan operasi

Tim operasi memikul biaya menjalankan layanan dan sering memegang platform bersama. Mereka sebaiknya menerbitkan bagaimana biaya bersama digerakkan, menjawab pertanyaan showback, dan membagikan gagasan penghematan dari pengalaman. Mereka sebaiknya mengharapkan tekanan memotong biaya menjalankan, dan menunjukkan sisi mutu dan risiko dari setiap pemotongan.

### Kepemimpinan dan tata kelola

Pemimpin bertanya tentang biaya dan nilai serta menetapkan model pendanaan. Mereka sebaiknya meminta biaya unit dengan pendamping mutu, mendukung pendanaan tim yang bertahan di mana cocok, dan menghindari memeringkat tim menurut biaya. Tata kelola sebaiknya mengharapkan aturan alokasi didokumentasikan, ditinjau, dan diterapkan secara konsisten, dan melihat porsi perbaikan.

### Pelanggan dan pengguna

Pengguna yang membayar lewat chargeback ingin memahami tagihan dan memengaruhinya. Lainnya melihat biaya dalam mutu dan ragam layanan yang ditawarkan. Biaya unit yang jelas dan suara dalam pertukaran antara harga dan layanan membuat hubungan lebih sehat, dan umpan balik mereka adalah bagian pendamping mutu untuk setiap biaya unit.

## Dalam praktik: contoh ITIL agile

Departemen TI pusat sebuah universitas menengah menyediakan sekitar 25 layanan bagi 18.000 mahasiswa dan staf. Angka di bawah bersifat ilustratif.

Kantor keuangan ingin tahu mengapa anggaran TI tumbuh lebih cepat daripada pendaftaran. Mitra keuangan TI membangun gambaran biaya bersama pemilik layanan. Dari total belanja TI, 72 persen langsung ke layanan bernama, 18 persen adalah platform bersama (jaringan, identitas, perkakas keamanan) yang dialokasikan dengan pendorong, dan 10 persen adalah overhead yang dinyatakan. Cakupan alokasi karena itu 90 persen. Platform pembelajaran berbiaya setara US$41 per pengguna aktif per tahun, naik dari US$36, sementara kepuasan dan ketersediaan stabil. Service desk menunjukkan biaya per permintaan terselesaikan yang turun 12 persen selama dua tahun. Pemilik layanan menunjukkan bahwa penurunan bertepatan dengan kenaikan tiket yang dibuka kembali dari 4 menjadi 9 persen, dan pendamping mutu menunjukkan penghematan sebagian adalah pemindahan upaya ke pengguna.

Tim membuat empat perubahan. Ia menerbitkan aturan alokasi dalam satu halaman, dengan pendorong untuk tiap biaya bersama dan tanggal tinjauan terakhir. Ia mengganti biaya per permintaan dengan biaya per permintaan terselesaikan pada kontak pertama, ditunjukkan di samping tingkat buka kembali. Ia memindahkan platform pembelajaran dan layanan identitas ke pendanaan sebagai tim yang bertahan dengan daftar anggota stabil. Ia menyisihkan 15 persen kapasitas untuk pekerjaan perbaikan bagi dua layanan terbesar, dan melacak apa yang dihasilkan pekerjaan itu.

Setahun kemudian, biaya unit platform pembelajaran adalah US$38 seiring penggunaan tumbuh, tingkat buka kembali turun menjadi 5 persen, dan varians perkiraan untuk dua layanan tim yang bertahan berada dalam 4 persen, dibanding 11 persen untuk pekerjaan yang didanai proyek. Tingkat sengketa showback turun dari 22 persen menjadi 8 persen setelah dua aturan diubah. Kantor keuangan meminta target tahunan pengurangan biaya unit 5 persen untuk setiap layanan. Mitra keuangan TI mengusulkan target hanya di mana layanan punya tuas efisiensi yang jelas, ditunjukkan dengan pendamping mutu, dan menjelaskan bahwa target menyeluruh akan menghargai pemotongan pemeliharaan. Keputusan dicatat, dengan tinjauan aturan tiap tahun.

## Sudut pandang sektor

**Startup.** Biaya kebanyakan cloud, perkakas, dan gaji. Lacak belanja cloud dan perkakas utama per layanan sejak awal, beri tag pada sumber daya, dan hitung biaya per pelanggan aktif sejak dini. Tahan alokasi rumit, karena timnya kecil.

**Bisnis kecil.** Segelintir vendor dan satu atau dua orang membentuk sebagian besar biaya. Simpan gambaran tahunan sederhana, biaya per pengguna untuk perkakas utama, dan pandangan tentang apa yang dibayar dan tak terpakai. Minta pemasok memberi tagihan terperinci.

**Perusahaan besar.** Skala membawa platform bersama dan banyak unit bisnis. Pakai model alokasi terdokumentasi dengan pendorong, proses sengketa, dan mitra keuangan yang tertanam di TI. Waspadai chargeback yang mengecilkan hati pemakaian layanan bersama yang menguntungkan semua orang.

**Pemerintah dan sektor publik.** Anggaran bersifat tahunan dan dialokasikan, dengan aturan tentang belanja modal dan operasi, dan transparansi biaya mungkin diwajibkan. Selaraskan penghitungan biaya layanan dengan aturan keuangan publik, dokumentasikan metode alokasi untuk audit, dan pertimbangkan pendanaan multitahun untuk tim layanan yang bertahan di mana hukum mengizinkan. Laporkan biaya unit dengan ukuran hasil (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah upaya membangun model alokasi, waktu keuangan dan pemilik layanan untuk menyepakati aturan, dan pekerjaan rutin pelaporan bulanan dan penanganan sengketa. Kebanyakan organisasi sudah punya buku besar dan data tagihan cloud. Model kecil dalam lembar kerja dapat memulai pekerjaan, dan perkakas menyusul.

Imbal hasilnya adalah keputusan lebih baik dan lebih sedikit perdebatan. Tim yang melihat biayanya menemukan pemborosan: lingkungan menganggur, lisensi tak terpakai, dan perkakas ganda. Pemimpin dapat membandingkan opsi dengan mengetahui pendorong biaya, merencanakan pertumbuhan dengan biaya tetap dan variabel terpisah, dan mendanai perbaikan dengan bukti imbal hasilnya. Bangun kasus dari angka Anda sendiri: pemborosan yang ditemukan pada tinjauan pertama, waktu yang dihabiskan dalam sengketa anggaran, dan varians perkiraan sebelum dan sesudah. Hindari klaim eksternal tentang rata-rata belanja TI sebagai persentase pendapatan kecuali Anda dapat menelusuri sumber dan metodenya, karena definisinya sangat beragam. Topik terakhir bagian ini mengumpulkan kasus keuangan di satu tempat (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Menyebar biaya bersama secara merata.** Menghukum pengguna kecil dan menyembunyikan pendorong sebenarnya. Pakai pendorong yang mencerminkan konsumsi.
- **Biaya per tiket sebagai target.** Menghargai penutupan tiket lebih awal. Pakai biaya per permintaan terselesaikan dengan pendamping mutu.
- **Presisi tanpa kepercayaan.** Model indah yang tak dipercaya pemilik tak berharga. Bangun aturan bersama mereka.
- **Chargeback lebih dulu.** Memulai pertengkaran sebelum ada pemahaman. Mulai dengan showback.
- **Memotong yang sulit terlihat.** Pemeliharaan, pembelajaran, dan pekerjaan keandalan dipotong lebih dulu dan berbiaya lebih kemudian. Lindungi kapasitas perbaikan.
- **Membandingkan tim menurut biaya.** Layanan berbeda dalam kendala dan risiko. Bandingkan masing-masing dengan riwayatnya sendiri.
- **Mengubah aturan dan tren sekaligus.** Tandai perubahan aturan pada bagan dan nyatakan ulang riwayat bila mungkin.
- **Memperlakukan biaya sebagai milik keuangan.** Orang yang menjalankan layanan tahu dari mana biaya datang. Sertakan mereka.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Gambaran biaya | Anggaran hanya per departemen | Biaya per layanan untuk beberapa layanan, alokasi kasar | Aturan alokasi terdokumentasi dengan pendorong; cakupan dilacak | Biaya unit dengan pendamping mutu; pemisahan tetap dan variabel | Biaya dibagikan secara transparan dengan mitra bisnis; pendorong dipengaruhi bersama |
| Memakai biaya | Pemotongan biaya menurut persentase | Showback ke beberapa pemilik | Showback untuk semua layanan; proses sengketa | Varians perkiraan dan tren biaya unit menggerakkan keputusan | Biaya, mutu, dan nilai dipertukarkan secara terbuka di seluruh portofolio |
| Model pendanaan | Anggaran proyek tahunan | Beberapa tim stabil | Tim yang bertahan untuk layanan kunci | Pendanaan mengikuti hasil layanan dan pembelajaran | Pendanaan fleksibel lintas layanan dengan investasi platform bersama |

## Daftar periksa

- [ ] Total belanja TI diatribusikan ke layanan atau overhead yang dinyatakan, dengan cakupan dilacak.
- [ ] Aturan alokasi dan pendorong tertulis dan ditinjau bersama pemilik layanan.
- [ ] Biaya tetap dan variabel dipisahkan untuk tiap layanan utama.
- [ ] Biaya unit memakai unit yang disepakati dan stabil serta duduk di samping ukuran mutu.
- [ ] Perkiraan dicatat di awal periode dan dibandingkan dengan aktual.
- [ ] Showback tersedia bagi setiap pemilik layanan, dengan proses sengketa.
- [ ] Belanja atau kapasitas menjalankan, mengubah, dan memperbaiki dilaporkan.
- [ ] Sebagian kapasitas dilindungi untuk perbaikan.
- [ ] Perubahan aturan dan unit ditandai pada bagan tren.
- [ ] Tidak ada tim atau orang yang diperingkat menurut biaya.

## Prompt AI

**Usulkan pendorong biaya untuk layanan bersama.**

```text
Layanan bersama kami dan biaya tahunannya adalah: [list]. Layanan kami yang
memakainya adalah: [list], dengan data pemakaian tersedia untuk: [list of drivers
like users, requests, storage]. Usulkan pendorong biaya untuk tiap layanan
bersama, jelaskan cara memeriksa bahwa pendorong mencerminkan apa yang menyebabkan
biaya, dan uraikan keterbatasannya. Jangan mengarang biaya. Daftar asumsi Anda dan
apa yang perlu dikonfirmasi keuangan.
```

**Rancang biaya unit dan pendamping mutunya.**

```text
Untuk layanan [name] di [type of organization], sarankan tiga unit yang mungkin
untuk biaya unit (misalnya per pengguna aktif, per transaksi, per permintaan
terselesaikan) dan, untuk masing-masing, ukuran mutu untuk ditunjukkan di
sampingnya dan satu cara pasangan itu dapat dimanipulasi. Rekomendasikan satu
dengan alasannya. Jangan mengarang angka. Daftar asumsi Anda dan pertanyaan untuk
pemilik layanan.
```

**Siapkan tinjauan showback.**

```text
Susun agenda dan ringkasan satu halaman untuk tinjauan showback kuartalan dengan
pemilik [service]. Data: biaya kuartal ini [figures], kuartal sebelumnya
[figures], volume [figures], ukuran mutu [figures], dan sengketa [list]. Sertakan
pertanyaan yang membantu pemilik menemukan pemborosan dan menantang alokasi.
Pakai bahasa lugas. Daftar asumsi Anda dan tandai klaim yang perlu diperiksa.
```

**Rencanakan pindah ke pendanaan tim yang bertahan.**

```text
Saat ini kami mendanai pekerjaan sebagai proyek: [describe]. Kami
mempertimbangkan mendanai tim yang bertahan untuk [services]. Uraikan langkah,
informasi yang akan diinginkan keuangan dan kepemimpinan, risiko, dan ukuran
untuk melacak apakah perubahan membantu (misalnya varians perkiraan, stabilitas
tim, porsi perbaikan, dan kesehatan layanan). Jangan mengklaim hasil dari
organisasi lain. Daftar asumsi Anda dan keputusan yang butuh masukan pimpinan.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik biaya atau ekonomi per unit.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik biaya menyatakan aturan alokasi, vektor manipulasi, dan pendamping mutunya.

## Poin penting

- Atribusikan biaya ke layanan dengan pendorong yang dapat diikuti orang, dan tunjukkan aturannya.
- Pisahkan biaya tetap dari variabel, dan pasangkan setiap biaya unit dengan ukuran mutu.
- Mulai dengan showback dan proses sengketa, dan tambahkan chargeback hanya jika mengubah keputusan.
- Danai tim yang bertahan di sekitar layanan bila bisa, dan lindungi kapasitas perbaikan.
- Laporkan rentang dan tren, dan tandai perubahan aturan pada bagan.
- Jangan pernah memeringkat orang atau tim menurut biaya.

## Referensi dan bacaan lanjutan

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
