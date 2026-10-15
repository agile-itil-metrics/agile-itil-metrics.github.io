# Metrik kolaborasi dan serah terima

**Pekerjaan melambat dan mutu menurun di mana pun ia berpindah tangan, jadi ukur serah terima, penantian di antaranya, dan ketergantungan pada orang tunggal, dan pakai angka untuk mempertemukan orang yang tepat alih-alih menghitung siapa berbicara dengan siapa.**

## Gambaran umum dan motivasi

Prinsip Manifesto Agile mengatakan bahwa orang bisnis dan pengembang harus bekerja sama setiap hari sepanjang proyek. Pengamatan di baliknya sudah tua dan kokoh: sebagian besar keterlambatan dalam organisasi layanan tidak datang dari orang yang bekerja lambat. Ia datang dari pekerjaan yang menunggu di antara orang. Permintaan berpindah dari service desk ke tim lini kedua ke tim aplikasi ke administrator basis data, dan di setiap langkah ia bergabung dengan antrean, kehilangan konteks, dan berisiko dikembalikan. Orang-orang yang terlibat mungkin masing-masing cepat. Sistemnya lambat.

Manajemen layanan TI (ITSM), sebagaimana dikodifikasi ITIL, sejak lama mengorganisasi dukungan ke dalam tingkat dan tim, dengan eskalasi sebagai mekanisme memindahkan masalah kepada seseorang yang dapat menyelesaikannya. Struktur itu punya manfaat: spesialisasi, kepemilikan jelas, dan akses terkendali. Ia juga menciptakan serah terima, dan serah terima berbiaya. Praktik agile dan DevOps menanggapi dengan membangun tim lintas fungsi yang memikul lebih banyak pekerjaan dari ujung ke ujung, dan mendorong kolaborasi waktu nyata. Kedua tradisi sampai pada kesimpulan serupa: lebih sedikit serah terima, penantian lebih singkat di antaranya, dan orang yang dapat menyelesaikan masalah mengerjakannya bersama.

Beberapa gagasan membantu pengukuran.

- **Serah terima dan antrean.** Setiap kali pekerjaan berpindah dari satu tim ke tim lain, ia biasanya menunggu dalam antrean. Waktu menunggu sering jauh lebih besar daripada waktu bekerja. Inilah mengapa efisiensi alur, yang diperkenalkan sebelumnya, biasanya rendah (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur). [Bottleneck](https://en.wikipedia.org/wiki/Bottleneck_(production)) adalah titik berkapasitas terbatas dalam suatu proses, dan menentukan throughput keseluruhan.
- **Struktur membentuk komunikasi.** [Hukum Conway](https://en.wikipedia.org/wiki/Conway%27s_law) menyatakan bahwa organisasi merancang sistem yang mencerminkan struktur komunikasinya sendiri. Kebalikannya juga praktis: jika Anda menginginkan sistem dengan dependensi lebih sedikit, atur tim untuk mengurangi dependensi di antara mereka. Batas tim menciptakan serah terima, dan serah terima membentuk arsitektur.
- **Dependensi.** [Dependensi](https://en.wikipedia.org/wiki/Dependency_(project_management)) adalah hubungan tempat satu pekerjaan tak dapat berlanjut sampai yang lain selesai. Dependensi antar-tim adalah sumber utama keterlambatan, dan dapat dipetakan, dihitung, dan dikurangi.
- **Biaya koordinasi tumbuh bersama orang.** [Hukum Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law), dari esai Frederick Brooks tentang proyek perangkat lunak, mengamati bahwa menambah orang pada proyek yang terlambat dapat membuatnya lebih terlambat, sebagian karena beban komunikasi tambahan. Lebih banyak orang dalam percakapan tidak otomatis lebih baik.
- **Ketergantungan pada individu.** [Faktor bus](https://en.wikipedia.org/wiki/Bus_factor) adalah jumlah orang yang harus tak tersedia untuk menghentikan proyek, biasanya dipakai untuk menunjuk risiko ketika pengetahuan berada di satu kepala. Itu adalah properti distribusi pengetahuan, bukan peringkat atas orang mana pun.

Ukuran kolaborasi punya sisi gelap. Menghitung pesan, rapat, atau tautan jaringan sebagai ukuran kolaborasi mudah dan menggoda, dan cepat tergelincir menjadi pemantauan komunikasi orang. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku pada kelompok dan pada privasi: ketika “kolaborasi” menjadi target, orang menghasilkan aktivitas yang terlihat, dan ketika menjadi pengawasan, mereka berhenti berbicara terbuka (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Ukuran di sini karena itu melihat butir pekerjaan, serah terima, dan dependensi, serta pola tingkat tim. Ukuran itu tidak membaca pesan atau memeringkat individu.

Topik ini terhubung ke ukuran alur Bagian 2, ukuran insiden dan permintaan Bagian 3, dan serah terima pemasok pada bagian sebelumnya (lihat topik 8.4, Metrik pemasok dan kontrak).

## Prinsip utama

- **Ukur pekerjaan, bukan percakapan.** Serah terima, penantian, dan dependensi adalah properti butir pekerjaan dan tim.
- **Lebih sedikit serah terima mengalahkan serah terima lebih cepat.** Serah terima terbaik adalah yang tidak terjadi.
- **Pertemukan orangnya.** Kolaborasi waktu nyata sering menghapus seluruh rantai penantian.
- **Jadikan dependensi terlihat, dan kurangi.** Petakan, hitung, dan ubah batas tim atau arsitektur di tempat paling menyakitkan.
- **Sebarkan pengetahuan dengan sengaja.** Titik pengetahuan tunggal adalah risiko, dan berbagi adalah aktivitas desain.
- **Lindungi fokus.** Kolaborasi yang mengisi setiap jam dengan rapat menghancurkan waktu untuk mengerjakan pekerjaan.
- **Libatkan pemangku kepentingan secara berkelanjutan.** Pertanyaan yang dijawab dalam hitungan jam lebih melayani daripada jawaban yang dikumpulkan dalam rapat mingguan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hitungan serah terima | Berapa kali butir pekerjaan berganti tim pemilik sebelum selesai | median dan persentil ke-85 pemindahan tim-ke-tim per butir selesai, menurut jenis butir | pemindahan per butir | Riwayat penugasan ITSM atau pelacak, diagregasi menurut tim | Manajemen insiden; manajemen permintaan layanan; pemberdayaan perubahan | Tim lintas fungsi memikul pekerjaan dari ujung ke ujung | Bulanan |
| Porsi penantian serah terima | Porsi waktu berlalu sebuah butir yang dihabiskan menunggu setelah serah terima sebelum pekerjaan dilanjutkan | waktu antara serah terima dan tindakan pertama oleh tim penerima / total waktu berlalu, median lintas butir | persen | Stempel waktu penugasan dan aktivitas | Manajemen insiden; manajemen permintaan layanan | Efisiensi alur; waktu antrean | Bulanan |
| Tingkat penugasan ulang | Porsi butir yang dioper antar-tim lebih dari dua kali atau dikembalikan ke tim sebelumnya | butir ditugaskan ulang lebih dari dua kali atau dikembalikan / butir selesai | persen | Riwayat penugasan | Manajemen insiden; manajemen masalah | Pengerjaan ulang dan pekerjaan yang memantul | Bulanan |
| Keterlambatan dependensi | Waktu butir terblokir menunggu tim lain | median dan persentil ke-85 hari dalam keadaan terblokir-tim-lain, dengan dependensi dinamai | hari | Keadaan terblokir pelacak dan bidang dependensi | Pemberdayaan perubahan; manajemen rilis dan deployment | Usia butir pekerjaan terblokir | Bulanan |
| Tingkat penyelesaian kolaboratif | Porsi insiden yang diselesaikan orang dari beberapa tim yang bekerja bersama secara waktu nyata tanpa eskalasi berurutan | insiden dengan kolaborasi waktu nyata tercatat (misalnya kanal atau panggilan bersama) yang selesai tanpa serah terima lanjutan / insiden berprioritas memenuhi syarat | persen | Catatan insiden dengan tag kolaborasi | Manajemen insiden; manajemen insiden besar | Swarming pada masalah | Bulanan |
| Cakupan pengetahuan | Porsi komponen kritis dengan setidaknya sejumlah anggota tim yang dinyatakan mampu mengoperasikan dan mengubahnya | komponen kritis dengan setidaknya jumlah target orang yang mampu mengoperasikan dan mengubah / komponen kritis | persen | Peta keterampilan dan kepemilikan yang dipelihara tim | Manajemen pengetahuan; manajemen kelangsungan layanan | Kepemilikan bersama dan kepemilikan kode kolektif | Kuartalan |
| Waktu respons pemangku kepentingan | Waktu dari pertanyaan tim kepada pemangku kepentingan sampai jawaban yang dapat dipakai | median dan persentil ke-85 jam dari pertanyaan dicatat sampai jawaban dicatat | jam | Log pertanyaan atau bidang pelacak untuk pertanyaan terbuka | Manajemen tingkat layanan; manajemen hubungan bisnis | Keterlibatan pemangku kepentingan berkelanjutan | Bulanan |

Agregasikan pada tingkat tim, antrean, atau layanan, dan jangan pernah melaporkan menurut individu. Hitungan serah terima mengecualikan penugasan otomatis yang tidak mengubah tim pemilik. Porsi penantian dimulai ketika butir ditugaskan ke tim penerima dan berakhir pada tindakan tercatat pertama mereka. Cakupan pengetahuan memakai penilaian tim sendiri tentang siapa yang dapat mengoperasikan komponen, ditinjau bersama tim, dan tidak pernah memeringkat individu. Data kolaborasi berasal dari tag dan catatan butir, bukan dari membaca pesan.

## Rekomendasi

### Petakan serah terima

**1. Gambar jalur butir yang tipikal.** Pilih jenis permintaan atau insiden yang umum dan telusuri jalurnya dari kontak pertama sampai penyelesaian: setiap tim, setiap antrean, setiap penantian. Pakai riwayat pelacak untuk contoh nyata, bukan diagram proses resmi. Peta menunjukkan di mana pekerjaan menunggu dan di mana ia memantul. Bagikan dengan tim yang terlibat, dan minta mereka mengidentifikasi pemborosan yang mereka lihat.

**2. Ukur serah terima dan penantian dari riwayat butir pekerjaan.** Pakai stempel waktu penugasan dan aktivitas untuk menghitung hitungan serah terima, porsi penantian, dan tingkat penugasan ulang untuk tiap jenis butir. Lihat distribusinya: sebagian besar butir mungkin berpindah sekali, sementara ekor panjang memantul berkali-kali. Ekor adalah tempat keterlambatan terbesar dan frustrasi terbanyak berada.

**3. Baca data bersama orang yang mengerjakan pekerjaan.** Tingkat penugasan ulang tinggi dapat mencerminkan kepemilikan yang tak jelas, informasi hilang, atau triase yang sah. Tanyakan kepada tim sebelum menyimpulkan. Mereka tahu mengapa butir memantul, dan apa yang akan menghentikannya.

### Kurangi serah terima dan penantian

**4. Pindahkan kemampuan ke pekerjaan.** Di mana banyak butir pergi ke tim kedua untuk tindakan sederhana, tanyakan apakah tim pertama dapat diberi pengetahuan, akses, atau otomatisasi untuk melakukannya. Swalayan dan runbook dapat menghapus seluruh serah terima (lihat topik 3.7, Metrik swalayan dan otomatisasi). Berhati-hatilah agar memindahkan pekerjaan tidak sekadar membebani tim pertama.

**5. Pakai kolaborasi sebagai ganti eskalasi berurutan.** Untuk insiden kompleks atau mendesak, pertemukan orang yang relevan secara waktu nyata, dengan satu orang mengoordinasikan, alih-alih mengoper tiket melalui tingkat. Praktik ini, sering disebut swarming, menghapus penantian dan hilangnya konteks yang diciptakan eskalasi bertingkat. Lacak tingkat penyelesaian kolaboratif, dan lihat apakah hasil dan kepuasan membaik (lihat topik 3.4, Metrik insiden besar).

**6. Perjelas kepemilikan di batas.** Untuk tiap layanan dan komponen, nyatakan siapa pemiliknya, cara menjangkau mereka, dan apa yang mereka butuhkan dalam serah terima. Templat singkat informasi wajib, disepakati dengan tim penerima, mengurangi pengembalian karena detail hilang. Tinjau kasus penugasan ulang untuk menemukan celah kepemilikan.

**7. Kurangi dependensi di tempat paling menyakitkan.** Petakan dependensi antar-tim, hitung seberapa sering masing-masing menyebabkan keterlambatan, dan tangani yang terburuk. Opsinya mencakup mengubah arsitektur, memberi tim kemampuan yang terus ditunggunya, atau menata ulang tim di sekitar layanan. [Tim lintas fungsi](https://en.wikipedia.org/wiki/Cross-functional_team) yang memuat keterampilan yang dibutuhkan untuk menyampaikan layanan dari awal sampai akhir meminimalkan dependensi, dan membawa kolaborasi berkelanjutan ke dalam struktur. Hukum Conway menyarankan bahwa struktur dan desain sebaiknya diubah bersama.

### Sebarkan pengetahuan dan keterlibatan

**8. Jadikan cakupan pengetahuan terlihat dan perbaiki.** Simpan peta sederhana komponen kritis dan orang yang mampu mengoperasikan dan mengubah masing-masing. Cari komponen yang dikenal satu orang, dan rencanakan pairing, dokumentasi, dan rotasi untuk menyebarkannya. Perlakukan hasilnya sebagai risiko bagi sistem. Tujuannya adalah ketahanan dan kecepatan berkelanjutan bagi orang yang paling banyak tahu, karena orang yang menjadi satu-satunya ahli tak dapat mengambil cuti.

**9. Jaga pemangku kepentingan dalam lingkaran secara berkelanjutan.** Sepakati bagaimana pemangku kepentingan dijangkau dengan pertanyaan dan secepat apa jawaban harus datang. Tim yang menunggu sepekan untuk keputusan atas detail sedang menunggu pemangku kepentingan, dan biayanya nyata. Catat pertanyaan dan jawaban, ukur waktu respons, dan pakai dalam percakapan dengan pemangku kepentingan tentang keterlibatan mereka.

**10. Lindungi waktu untuk kerja terfokus.** Kolaborasi sebaiknya bertujuan. Tinjau rapat yang memenuhi kalender, dan tanyakan untuk masing-masing keputusan apa yang didukungnya. Kurangi jumlah orang dalam percakapan yang tidak membutuhkannya, sejalan dengan hukum Brooks. Pasangkan ini dengan ukuran fokus pada topik awal tentang kesehatan tim (lihat topik 9.1, Kesehatan tim dan pengalaman pengembang).

### Jaga tetap jujur

**11. Jangan mengukur volume komunikasi.** Menghitung pesan, rapat, atau tautan jaringan sedikit memberi tahu apakah orang bekerja baik bersama, dan mengundang pemantauan individu. Jika tim Anda memilih memakai analisis jaringan sosial untuk memahami bagaimana informasi mengalir, lakukan dengan persetujuan, pada tingkat kelompok, dan untuk pembelajaran tim sendiri, dan jangan pernah untuk menilai individu.

**12. Tinjau ukuran serah terima bersama tim dan pemasok.** Bagikan pola lintas tim dan pemasok yang terlibat, dan sepakati satu atau dua perbaikan bersama. Lacak apakah hitungan serah terima dan penantian turun. Untuk batas pemasok, sertakan ukuran dalam tinjauan bersama (lihat topik 8.4, Metrik pemasok dan kontrak).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Hitungan serah terima | Menjaga butir ditugaskan ke satu tim sementara yang lain mengerjakan; menugaskan ulang ke antrean bersama untuk menghindari penghitungan | Periksa aktivitas nyata menurut tim; hitung serah terima menurut aktivitas, bukan hanya penugasan |
| Porsi penantian serah terima | Mencatat tindakan pertama yang hanya pengakuan; menugaskan ke tim yang tepat terlambat | Definisikan “tindakan pertama” sebagai langkah substantif; bandingkan dengan kepuasan dan waktu penyelesaian |
| Tingkat penugasan ulang | Menolak menugaskan ulang meski salah; menutup dan membuka kembali butir di bawah tim lain | Mutu penyelesaian dan tingkat buka kembali; ambil sampel butir yang memantul |
| Keterlambatan dependensi | Tidak mencatat keadaan terblokir; menamai dependensi yang salah | Bandingkan dengan cycle time dan usia butir; tinjau bidang dependensi bersama tim |
| Tingkat penyelesaian kolaboratif | Menandai setiap insiden sebagai kolaboratif; membuat kanal bersama tanpa pekerjaan nyata | Periksa bahwa panggilan atau kanal menyertakan orang yang menyelesaikan; waktu penyelesaian dan hasil |
| Cakupan pengetahuan | Mendaftar orang yang secara teori bisa mengerjakan; menggelembungkan peta | Bukti pairing atau latihan; tanyakan siapa yang benar-benar melakukan perubahan terakhir |
| Waktu respons pemangku kepentingan | Mencatat pertanyaan terlambat; menandai jawaban diterima padahal tak dapat dipakai | Pemangku kepentingan mengonfirmasi jawaban dapat dipakai; ambil sampel pertanyaan |

Pembacaan yang sehat adalah lebih sedikit serah terima untuk butir umum, penantian lebih singkat pada batas yang tersisa, lebih sedikit butir yang memantul, dependensi yang menyusut, lebih banyak insiden diselesaikan orang yang bekerja bersama, komponen kritis dikenal beberapa orang, dan pemangku kepentingan yang menjawab dalam hitungan jam.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Dukungan bertingkat dengan eskalasi | Spesialisasi, kendali akses | Serah terima, penantian, hilangnya konteks |
| Tim lintas fungsi | Lebih sedikit serah terima, kepemilikan bersama | Butuh keterampilan luas; mungkin menduplikasi spesialis |
| Penyelesaian kolaboratif | Lebih cepat, pembelajaran lebih baik | Menarik beberapa orang sekaligus; butuh koordinasi |
| Eskalasi berurutan | Pemakaian spesialis yang efisien | Lebih lambat untuk masalah kompleks |
| Tim spesialis terpusat | Kedalaman keahlian, standar konsisten | Bottleneck, antrean |
| Spesialis tertanam | Akses cepat | Isolasi; standar tak merata |
| Budaya rapat berat | Kesadaran bersama | Memakan fokus; memperlambat pekerjaan |
| Komunikasi tertulis asinkron | Menjaga fokus; mencatat keputusan | Lebih lambat untuk hal mendesak atau ambigu |

Jawaban prosanya adalah menjaga spesialis di tempat kedalaman penting, mempertemukan orang secara waktu nyata untuk masalah kompleks atau mendesak, mengurangi serah terima lewat kemampuan dan kepemilikan jelas, dan menyeimbangkan rapat dengan fokus terlindungi.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Telusuri insiden atau permintaan terakhir yang memantul antar-tim. Di mana ia menunggu, dan mengapa?**
Pakai riwayat butir. Tandai setiap serah terima dan penantian. Fasilitator sebaiknya mencari informasi yang hilang, kepemilikan tak jelas, dan antrean yang tak diawasi siapa pun. Sepakati satu perubahan yang akan menghentikan pantulan.

**2. Tim mana yang paling sering kita tunggu, dan apa yang mereka butuhkan dari kita agar lebih cepat?**
Daftar dependensi dan keterlambatan yang disebabkannya. Undang tim lain ke percakapan, atau siapkan pertanyaan untuk mereka. Sepakati perubahan pada templat serah terima atau kesepakatan kerja.

**3. Apa yang hanya satu atau dua dari kita tahu cara melakukannya, dan apa yang terjadi saat mereka pergi?**
Namai komponen atau tugasnya. Tanyakan rencana apa yang akan menyebarkan pengetahuan: pairing, dokumentasi, rotasi. Fasilitator sebaiknya berhati-hati memperlakukan ini sebagai risiko bagi sistem dan soal beban kerja bagi para ahli.

**4. Kapan menyelesaikan masalah bersama secara waktu nyata berhasil lebih baik daripada mengopernya?**
Ingat contoh. Apa yang membuatnya berhasil: orang yang tepat, koordinator, pandangan bersama? Bahas kapan memakai pendekatan ini dan cara mengaktifkannya, seperti kanal tetap dan aturan siapa yang bergabung.

**5. Berapa lama kita menunggu jawaban dari pemangku kepentingan kita, dan berapa biayanya?**
Lihat pertanyaan terbuka dan usianya. Bahas apa yang memperlambat jawaban: ketersediaan, pertanyaan tak jelas, atau wewenang tak jelas. Sepakati harapan dengan pemangku kepentingan dan cara melacaknya.

**6. Rapat kita mana yang dapat diganti dengan catatan tertulis atau keputusan?**
Daftar rapat reguler dan untuk masing-masing tanyakan keputusan apa yang didukung dan siapa yang perlu hadir. Batalkan atau persingkat satu. Sepakati melindungi satu blok waktu tanpa rapat.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memegang banyak dependensi dan merasakan penantian. Mereka sebaiknya memetakan dependensi mereka, meminta kemampuan yang terus mereka tunggu, membagikan pengetahuan untuk menghindari titik tunggal, dan menjaga pemangku kepentingan dekat. Komposisi lintas fungsi sering menghapus keterlambatan terbesar.

### Tim layanan dan operasi

Tim operasi dan dukungan berada di pusat serah terima: mereka menerima, merutekan, dan menyelesaikan. Mereka sebaiknya memelihara informasi kepemilikan yang jelas, memakai kolaborasi waktu nyata untuk masalah sulit, dan mencatat serah terima secara akurat. Mereka tahu batas mana yang paling menyakitkan dan dapat mengatakan informasi apa yang akan mencegah pengembalian.

### Kepemimpinan dan tata kelola

Pemimpin membentuk struktur yang menciptakan serah terima. Mereka sebaiknya melihat data serah terima dan dependensi saat merancang tim dan pendanaan, mendukung tim lintas fungsi di mana membantu, dan menghindari ukuran volume komunikasi. Tata kelola sebaiknya memperlakukan keterlambatan berulang pada satu batas sebagai isu struktural untuk diperbaiki.

### Pelanggan dan pengguna

Pengguna merasakan serah terima sebagai dioper-oper, mengulang diri, dan menunggu. Mereka sebaiknya diberi tahu siapa pemilik masalah mereka dan terus diberi informasi. Pengalaman mereka dipantulkan adalah ukuran langsung seberapa baik kolaborasi berfungsi, dan umpan balik mereka sebaiknya dibaca bersama angka (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Kelompok TI sebuah pengecer nasional menjalankan service desk, tim infrastruktur, tim platform aplikasi, dan beberapa tim produk. Pengguna melaporkan bahwa permintaan tentang sistem kasir memakan waktu terlalu lama. Angka di bawah bersifat ilustratif.

Manajer layanan menelusuri 60 permintaan terbaru. Permintaan median melewati 3 tim dan persentil ke-85 melewati 6. Pada kasus median, 71 persen waktu berlalu dihabiskan menunggu setelah serah terima sebelum tim penerima bertindak. 22 persen permintaan ditugaskan ulang lebih dari dua kali, sering antara tim infrastruktur dan platform, yang masing-masing percaya pihak lain memiliki isunya. Waktu terblokir menunggu tim lain punya median 3 hari untuk permintaan yang melibatkan sertifikat, dan 8 hari pada persentil ke-85. Pengetahuan pembaruan sertifikat platform berada pada satu insinyur, dan dua komponen kritis lain masing-masing hanya dikenal satu orang. Pemangku kepentingan di operasi toko memakan median 26 jam untuk menjawab pertanyaan dari tim pengiriman.

Kelompok menyepakati empat perubahan dengan tim. Tabel kepemilikan singkat menyatakan tim mana yang memiliki tiap komponen layanan kasir dan informasi apa yang harus dimuat serah terima. Service desk mendapat akses runbook dan otomatisasi untuk pembaruan sertifikat, yang menghapus serah terima yang umum. Untuk insiden prioritas, kelompok menyiapkan kanal tetap dan aturan bahwa koordinator insiden membawa orang yang relevan seketika, alih-alih mengeskalasi menurut tingkat. Tim platform memasangkan orang kedua dan ketiga pada proses sertifikat, dan merencanakan pairing serupa untuk dua komponen lain, dengan waktu terlindungi dalam rencana. Tim pengiriman dan operasi toko menyepakati jawaban di hari yang sama untuk pertanyaan yang memblokir, dilacak dalam log pertanyaan.

Tiga bulan kemudian, permintaan median melewati 2 tim, porsi penantian turun menjadi 38 persen, dan tingkat penugasan ulang menjadi 9 persen. Permintaan terkait sertifikat punya median waktu terblokir di bawah sehari. Cakupan pengetahuan pada komponen kritis naik dari 52 persen menjadi 81 persen. Median waktu respons operasi toko turun menjadi 7 jam. Kepala TI diminta ukuran seberapa banyak tim berkomunikasi. Manajer layanan menjelaskan bahwa volume pesan sedikit memberi tahu apakah pekerjaan mengalir, dan bahwa melacaknya dapat merusak kepercayaan, dan menawarkan ukuran serah terima dan penantian sebagai gantinya. Keputusan dicatat, dan tabel kepemilikan ditambahkan ke uraian layanan.

## Sudut pandang sektor

**Startup.** Tim kecil berkolaborasi secara alami, dan serah terima muncul ketika spesialis muncul. Jaga tim lintas fungsi selama mungkin, dokumentasikan kepemilikan secara ringan, dan awasi pengetahuan yang dipegang satu orang. Jangan mengimpor dukungan bertingkat terlalu dini.

**Bisnis kecil.** Satu atau dua orang mungkin menutup segalanya, dan risiko terbesar adalah ketergantungan pada mereka. Bagikan pengetahuan lewat runbook sederhana dan pengganti saat absen. Serah terima ke pemasok adalah batas utama, jadi simpan kontak dan jalur eskalasi yang jelas.

**Perusahaan besar.** Skala menciptakan banyak tim, lapisan, dan pemasok, dan serah terima berlipat ganda. Petakan jalur butir paling umum, rancang batas tim di sekitar layanan, dan pakai peran koordinasi untuk insiden lintas tim. Bagikan data serah terima lintas tim agar batas mendapat perhatian bersama.

**Pemerintah dan sektor publik.** Tanggung jawab sering terbagi lintas lembaga, kontraktor, dan batas hukum, dan serah terima melibatkan pengadaan dan persetujuan formal. Jadikan tabel kepemilikan eksplisit, pakai tinjauan bersama dengan kontraktor, dan pakai kanal bersama untuk insiden yang melintasi batas (lihat topik 8.4, Metrik pemasok dan kontrak).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah upaya mengekstrak dan menganalisis riwayat penugasan, waktu tim menelusuri jalur dan menyepakati kepemilikan, biaya pelatihan silang, dan perkakas apa pun untuk kolaborasi waktu nyata. Menata ulang tim adalah keputusan lebih besar dengan biayanya sendiri.

Imbal hasilnya adalah waktu penyelesaian dan penyampaian lebih singkat, lebih sedikit pengerjaan ulang dari butir yang memantul, risiko lebih rendah dari titik pengetahuan tunggal, dan lingkungan kerja yang lebih tenang. Bangun kasus dari data Anda sendiri: porsi waktu berlalu yang dihabiskan menunggu, jumlah butir yang memantul, biaya keterlambatan pada batas terburuk, dan efek absennya orang kunci pada insiden masa lalu. Hindari mengutip angka terbitan tentang biaya serah terima kecuali Anda dapat menelusuri sumber dan konteksnya. Hitung biaya perubahan, dan bandingkan dengan keterlambatan yang dihapus (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Menghitung pesan atau rapat.** Menghargai kebisingan dan mengundang pengawasan. Ukur alur pekerjaan.
- **Mengoptimalkan kecepatan tiap serah terima.** Tujuannya lebih sedikit serah terima. Hapus di mana bisa.
- **Menyalahkan tim penerima atas penantian.** Sebabnya sering antrean dan struktur. Lihat sistemnya.
- **Mengeskalasi secara bawaan.** Tingkat berurutan menambah penantian. Pertemukan orang untuk masalah kompleks.
- **Kepemilikan tak jelas.** Butir memantul. Terbitkan tabel kepemilikan dan jaga tetap terkini.
- **Ahli pahlawan.** Titik pengetahuan tunggal adalah risiko dan beban. Sebarkan pengetahuan dengan sengaja.
- **Rapat sebagai kolaborasi.** Dapat menggeser pekerjaan. Tinjau terhadap keputusan.
- **Memperlakukan cakupan pengetahuan sebagai peringkat individu.** Menjadi peringkat. Jaga sebagai ukuran sistem.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Visibilitas serah terima | Anekdot | Jalur digambar untuk beberapa layanan | Hitungan serah terima, porsi penantian, dan penugasan ulang diukur dari riwayat | Ukuran ditinjau bersama tim dan dikaitkan dengan hasil | Pandangan bersama lintas tim dan pemasok; batas didesain ulang dari data |
| Mengurangi serah terima | Eskalasi secara bawaan | Beberapa runbook dan templat | Tabel kepemilikan; kemampuan dipindah ke tim pertama; kolaborasi untuk masalah sulit | Dependensi dipetakan dan dikurangi; penyelesaian kolaboratif dilacak | Tim diorganisasi di sekitar layanan dengan dependensi minimal di seluruh organisasi |
| Pengetahuan dan pemangku kepentingan | Ahli memikul segalanya | Berbagi informal | Cakupan pengetahuan dipetakan; pertanyaan pemangku kepentingan dicatat | Cakupan dan waktu respons dikelola; pairing direncanakan | Pengetahuan dan keputusan mengalir bebas lintas tim, pemasok, dan pemangku kepentingan |

## Daftar periksa

- [ ] Jalur butir tipikal telah ditelusuri dari riwayat pelacak nyata.
- [ ] Hitungan serah terima, porsi penantian, dan tingkat penugasan ulang diukur per jenis butir.
- [ ] Kepemilikan tiap layanan dan komponen diterbitkan dan terkini.
- [ ] Templat serah terima menyatakan informasi yang dibutuhkan tim penerima.
- [ ] Insiden kompleks atau mendesak memakai kolaborasi waktu nyata dengan koordinator.
- [ ] Dependensi lintas tim dipetakan, dan yang terburuk sedang dikurangi.
- [ ] Cakupan pengetahuan komponen kritis dipetakan, dengan rencana menyebarkannya.
- [ ] Pertanyaan pemangku kepentingan dicatat dan waktu respons ditinjau.
- [ ] Tidak ada ukuran yang menghitung pesan, rapat, atau komunikasi individu.
- [ ] Hasil dibagikan kepada tim dan pemasok yang terlibat.

## Prompt AI

**Analisis jalur butir pekerjaan.**

```text
Berikut riwayat penugasan teranonimkan untuk [number] [type of item]: butir,
urutan tim, stempel waktu penugasan dan tindakan pertama: [paste]. Hitung atau
gambarkan hitungan serah terima dan penantian, identifikasi jalur umum dan ekor
panjang, dan sarankan alasan yang mungkin untuk penantian dan pantulan, dengan
pertanyaan untuk diajukan kepada tim. Jangan menyimpulkan apa pun tentang
individu. Daftar asumsi Anda.
```

**Susun tabel kepemilikan.**

```text
Susun tabel kepemilikan untuk layanan [name] dengan komponen dan tim ini: [list].
Untuk tiap komponen sertakan tim pemilik, cara menjangkau mereka, apa yang harus
dimuat serah terima, dan jalur eskalasi. Tandai komponen yang kepemilikannya
tampak tak jelas atau bersama. Jaga dalam satu halaman. Daftar asumsi Anda dan
pertanyaan untuk tim.
```

**Rencanakan penyebaran pengetahuan.**

```text
Komponen kritis kami dan jumlah orang yang mampu mengoperasikan masing-masing
adalah: [paste]. Usulkan rencana menyebarkan pengetahuan untuk komponen yang
dikenal kurang dari [number] orang: pairing, dokumentasi, latihan, dan rotasi.
Sarankan cara melindungi beban kerja para ahli selama rencana dan cara melacak
kemajuan tanpa memeringkat individu. Daftar asumsi Anda dan risiko.
```

**Rancang pendekatan insiden kolaboratif.**

```text
Rancang pendekatan ringan untuk penyelesaian kolaboratif waktu nyata atas insiden
prioritas di [type of organization] dengan [teams]. Sertakan cara membuka ruang
bersama, siapa yang mengoordinasikan, siapa yang diundang, apa yang dicatat, dan
cara menghindari menarik terlalu banyak orang. Sertakan ukuran untuk mengetahui
apakah membantu. Daftar asumsi Anda dan kewaspadaan.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik serah terima atau kolaborasi.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik kolaborasi mengukur pekerjaan dan bukan individu, dengan vektor manipulasi dan pagar pembatasnya.

## Poin penting

- Sebagian besar keterlambatan berada pada penantian di antara serah terima, jadi ukur hitungan serah terima, porsi penantian, dan penugasan ulang dari riwayat butir pekerjaan.
- Kurangi serah terima dengan memindahkan kemampuan ke pekerjaan, memperjelas kepemilikan, dan memetakan serta memangkas dependensi.
- Pertemukan orang yang tepat secara waktu nyata untuk masalah kompleks atau mendesak.
- Sebarkan pengetahuan komponen kritis, dan perlakukan titik pengetahuan tunggal sebagai risiko sistem.
- Jaga pemangku kepentingan terlibat berkelanjutan, dengan jawaban cepat untuk pertanyaan yang memblokir.
- Jangan pernah mengukur volume komunikasi atau menilai individu atas kolaborasi.

## Referensi dan bacaan lanjutan

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
