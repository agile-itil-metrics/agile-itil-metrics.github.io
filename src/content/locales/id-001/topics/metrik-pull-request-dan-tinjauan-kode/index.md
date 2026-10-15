# Metrik pull request dan tinjauan kode

**Tinjauan adalah tempat pekerjaan selesai paling sering menunggu, jadi ukur berapa lama sebuah perubahan duduk sebelum ada yang melihatnya, seberapa besar ia, dan seberapa sering ia kembali, dan pasangkan setiap angka kecepatan dengan sinyal kualitas agar lebih cepat tidak pernah berarti ceroboh.**

## Gambaran umum dan motivasi

[Pull request](https://en.wikipedia.org/wiki/Pull_request) adalah usulan untuk menggabungkan sekumpulan perubahan dari satu cabang repositori [kontrol versi](https://en.wikipedia.org/wiki/Version_control) ke cabang lain, bersama percakapan tentang apakah ia sebaiknya digabung. Di banyak tim ia adalah gerbang formal antara “penulis mengira ini berfungsi” dan “tim setuju ini boleh dikirim.” Percakapan itu adalah bentuk [tinjauan kode](https://en.wikipedia.org/wiki/Code_review): orang selain penulis membaca perubahan, mengajukan pertanyaan, dan menyetujuinya atau meminta revisi. Sebagian platform menyebut hal yang sama merge request; topik ini memakai “pull request” untuk keduanya.

Tinjauan layak diukur karena alasan sederhana. Dalam pandangan alur pengiriman, item kerja menghabiskan sebagian besar hidupnya menunggu, dan tinjauan adalah salah satu penantian yang sepenuhnya berada dalam kendali tim. Hambatan platform bersama atau ketergantungan eksternal membutuhkan orang lain berubah. Pull request yang menunggu dua hari untuk dilihat pertama kali hanya membutuhkan kebiasaan tim sendiri berubah. Ukuran alur dalam buku ini (lihat topik 2.1, Ukuran alur, dan topik 2.2, Lead time, cycle time, dan efisiensi alur) memberi kosakata umum. Topik ini memperbesar satu tahap dari siklus dan memberinya instrumennya sendiri.

Pandangan agile dan ITIL bertemu di sini dengan cara yang berguna. Dari perspektif agile, tinjauan adalah putaran umpan balik dan mekanisme pengajaran. Ia menyebarkan pengetahuan tentang basis kode, menangkap cacat lebih awal, dan menegakkan kesepakatan kerja serta Definition of Done tim. Dari perspektif ITIL, aktivitas yang sama mendukung beberapa praktik. Dalam ITIL 4, praktik pengembangan dan manajemen perangkat lunak mencakup bagaimana perangkat lunak dibangun dan diperiksa, pemberdayaan perubahan mencakup bagaimana perubahan dinilai dan diotorisasi, dan manajemen deployment mencakup bagaimana perubahan mencapai lingkungan langsung. Pull request yang ditinjau sejawat adalah, bagi banyak organisasi, bukti bahwa perubahan standar dinilai sebelum dirilis. Memperlakukan tinjauan sebagai aktivitas yang terukur dan dapat diperbaiki melayani kedua pandangan: tim agile menginginkan umpan balik lebih cepat, dan praktik ITIL menginginkan jaminan andal bahwa perubahan diperiksa.

Risiko yang harus dijaga sepanjang topik adalah bahwa kecepatan dan kualitas tinjauan mudah dipisahkan. Tim dapat memangkas separuh waktu ke tinjauan pertama dengan menyetujui segalanya sekilas, dan dasbor akan menunjukkan kemenangan sementara basis kode memburuk. [Hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku dengan kekuatan luar biasa pada keluarga metrik ini (lihat topik 1.2, Hukum Goodhart dan psikologi metrik), karena angkanya murah dikumpulkan, terlihat oleh semua orang, dan sangat mudah digeser tanpa mengubah hal yang hendak diwakilinya. Setiap rekomendasi di bawah ditulis dengan hal itu dalam pikiran.

**Penulis** membuka pull request dan **peninjau** menilainya. **Putaran tinjauan** adalah satu loop “penulis mendorong, peninjau menanggapi.” **Pengerjaan ulang** adalah perubahan yang dibuat setelah komentar tinjauan, atau setelah penggabungan, untuk memperbaiki sesuatu yang salah pada versi pertama. **Integrasi berkelanjutan (CI)** adalah praktik menggabungkan pekerjaan ke jalur bersama sesering mungkin dan memeriksa tiap penggabungan secara otomatis; lihat [integrasi berkelanjutan](https://en.wikipedia.org/wiki/Continuous_integration).

Semua metrik dalam topik ini menggambarkan tim dan repositori. Mereka tidak pernah memeringkat peninjau atau penulis. Hitungan tinjauan tingkat individu mudah diekstrak dan menggoda untuk dipakai, dan memakainya mengubah praktik kolaborasi menjadi kontes (lihat topik 9.1, Kesehatan tim dan pengalaman pengembang).

## Prinsip utama

- **Menunggu mendominasi meninjau.** Di kebanyakan tim bagian terbesar waktu tinjauan adalah pull request duduk tak terbaca, bukan diskusi setelah peninjau mulai. Ukur penantian sebelum mengukur percakapan.
- **Perubahan kecil ditinjau lebih cepat dan lebih baik.** Ukuran adalah salah satu dari sedikit tuas yang memperbaiki kecepatan dan ketelitian sekaligus, karena peninjau dapat menyimpan perubahan kecil di kepalanya.
- **Kecepatan tanpa pengamatan cermat bukan perbaikan.** Setiap metrik kecepatan dalam topik ini butuh padanan kualitas, dan pasangan itu dibaca bersama.
- **Tinjauan adalah kapasitas tim, bukan pribadi.** Bebannya sebaiknya tersebar di tim. Metrik yang menunjukkan konsentrasi menunjuk pada masalah desain dalam tim, tidak pernah pada orang untuk dipuji atau disalahkan.
- **Distribusi mengalahkan rata-rata.** Waktu tinjauan punya ekor panjang pull request yang macet, jadi laporkan median dan persentil tinggi (lihat topik 1.6, Literasi statistik untuk metrik layanan).
- **Definisikan jam, lalu biarkan.** Nyatakan kapan jam mulai dan berhenti, peristiwa mana yang menjedanya, dan aktivitas otomatis mana yang dikecualikan, lalu tuliskan di tempat data berada (lihat topik 1.5, Sumber data dan instrumentasi).
- **Metrik tinjauan melayani tim yang memiliki pekerjaan.** Itu masukan untuk retrospektif tim sendiri, bukan kartu skor bagi orang lain.

## Definisi metrik

Jam di bawah mengandaikan platform kontrol versi mencatat waktu peristiwa pembukaan, permintaan tinjauan, komentar, persetujuan, dorongan, dan penggabungan. Draf, pull request yang dibuka bot, dan pull request yang ditutup tanpa digabung dikecualikan kecuali sebuah baris menyatakan lain. “Jam kerja” berarti jam kerja yang dinyatakan tim, sehingga pull request yang dibuka Jumat malam tidak menanggung akhir pekan penantian.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Waktu ke tinjauan pertama | Penantian antara pull request menjadi siap ditinjau dan respons manusia substantif pertama | Jam dimulai saat pull request keluar dari status draf atau dibuka dalam keadaan siap, berhenti pada komentar tinjauan, permintaan perubahan, atau persetujuan pertama oleh orang selain penulis; komentar bot dan penulis serta perubahan label murni dikecualikan. Laporkan median dan persentil ke-85 dalam jam kerja | jam kerja | Riwayat peristiwa platform kontrol versi | Pengembangan dan manajemen perangkat lunak; pemberdayaan perubahan | Kesepakatan kerja tentang ketanggapan tinjauan; alur pekerjaan yang sedang berjalan | Mingguan |
| Cycle time tinjauan | Total waktu dari siap ditinjau sampai digabung | Jam dimulai saat pull request siap ditinjau, berhenti pada penggabungan; pull request yang ditutup tanpa digabung dikecualikan dan dihitung terpisah. Laporkan median dan persentil ke-85 dalam jam kerja | jam kerja | Riwayat peristiwa platform kontrol versi | Manajemen deployment; pemberdayaan perubahan | Cycle time tahap tinjauan pada papan tim | Mingguan |
| Ukuran pull request | Jumlah perubahan dalam sebuah pull request | Baris ditambah ditambah baris dihapus, tidak termasuk berkas yang dihasilkan, berkas kunci, kode vendor, dan penggantian nama murni, seperti didaftar dalam aturan abaikan repositori. Laporkan median dan persentil ke-85 per pull request yang digabung | baris berubah | Statistik diff platform kontrol versi | Pengembangan dan manajemen perangkat lunak | Ukuran batch kecil; pengirisan cerita | Mingguan |
| Putaran tinjauan | Jumlah loop dorongan penulis dan respons peninjau sebelum digabung | Hitungan siklus “perubahan diminta” atau komentar-lalu-dorong yang berbeda per pull request yang digabung; pengajuan pertama adalah putaran nol dan kegagalan pemeriksaan otomatis dikecualikan. Laporkan median dan persentil ke-85 | hitungan | Peristiwa tinjauan dan dorongan platform kontrol versi | Perbaikan berkelanjutan; pengembangan dan manajemen perangkat lunak | Sinyal pengerjaan ulang pada tahap tinjauan; Definition of Done | Mingguan |
| Konsentrasi beban tinjauan | Seberapa tak merata pekerjaan tinjauan tersebar di tim | Porsi tinjauan selesai tim yang ditangani dua peninjau tersibuk selama 4 pekan bergulir; tinjauan atas pull request sendiri dan tinjauan bot dikecualikan. Dilaporkan untuk tim, tidak pernah menurut nama | persen | Peristiwa tinjauan platform kontrol versi, diagregasi ke tim | Perbaikan berkelanjutan; manajemen pengetahuan | Kepemilikan kode bersama; kepemilikan kolektif | Bulanan |
| Hitungan pull request basi | Pull request terbuka lebih lama dari batas yang disepakati tim | Pull request yang masih terbuka dan bukan draf yang usianya sejak siap ditinjau melebihi batas tim, dihitung pada waktu potret; draf dikecualikan | hitungan | Daftar pull request terbuka platform kontrol versi | Pemberdayaan perubahan; perbaikan berkelanjutan | Usia item kerja; batas WIP | Mingguan |
| Tingkat perbaikan pasca-penggabungan | Porsi pull request yang digabung dan diikuti perubahan korektif segera sesudahnya | Pull request yang digabung dan diikuti dalam 14 hari oleh perbaikan, pembatalan, atau hotfix tertaut pada perubahan yang sama / pull request yang digabung pada periode itu; pekerjaan tindak lanjut terencana yang dilabeli demikian dikecualikan | persen | Riwayat kontrol versi, isu tertaut, dan catatan insiden atau perubahan | Pemberdayaan perubahan; manajemen insiden | Kualitas dibangun masuk; Definition of Done | Bulanan |

Waktu ke tinjauan pertama adalah tuas terbesar dan metrik yang sebaiknya dimulai kebanyakan tim. Cycle time tinjauan adalah ukuran hasilnya dan merupakan komponen lead time yang lebih panjang yang dibahas dalam topik 2.2. Jendela 14 hari dan batas basi adalah contoh; setiap tim memilih nilai yang sesuai ritme rilisnya dan menuliskannya. Bila angka masuk ke gambaran pengiriman yang lebih luas, keluarga DORA (lihat topik 2.8, Metrik DORA) dan ukuran kegagalan perubahan (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang) mengambil alih.

## Rekomendasi

### Ukur penantian sebelum pekerjaan

**1. Mulailah dengan waktu ke tinjauan pertama.** Ini biasanya penyumbang terbesar waktu tinjauan dan yang termurah diperbaiki. Instrumentasikan dari riwayat peristiwa platform agar tak seorang pun perlu memasukkan apa pun. Laporkan median dan persentil tinggi, karena median tiga jam dengan persentil ke-95 empat hari berarti beberapa perubahan terlupakan.

**2. Kecualikan bot dan draf dari jam, dan katakan demikian.** Pemeriksaan otomatis, bot pembaruan dependensi, dan alat pemformatan membuat komentar dalam hitungan detik, dan menghitungnya membuat penantian tampak sangat baik. Mulai jam ketika penulis menandai perubahan siap, bukan ketika cabang pertama kali didorong. Terbitkan aturan ini di samping bagan.

**3. Pakai jam kerja, dan tuliskan kalender tim.** Pull request yang dibuka larut hari Jumat tidak seharusnya menanggung akhir pekan penantian. Tim yang tersebar di zona waktu membutuhkan aturan jam siapa yang dihitung, dan sering jawaban jujurnya adalah biaya serah terima lintas zona itulah yang layak dilihat. Nyatakan pilihan dan jaga stabil.

### Bentuk pekerjaan agar dapat ditinjau

**4. Jaga pull request kecil, dan perlakukan ukuran sebagai kebiasaan tim.** Lacak median dan persentil ke-85 ukuran, dan lihat yang besar sebagai satu set, bukan sebagai kegagalan individual. Tim biasanya mendapati perubahan besar berasal dari beberapa sebab: pekerjaan yang tidak diiris cukup halus, mencampur refaktor dengan perilaku baru, atau menunggu terlalu lama untuk menggabung. Iris pekerjaan agar setiap pull request mengerjakan satu hal, yang juga sesuai dengan prinsip batch kecil di balik [pengembangan berbasis trunk](https://en.wikipedia.org/wiki/Trunk-based_development) dan deployment sering.

**5. Jangan menetapkan batas ukuran keras sebagai target.** Batas seperti “tidak lebih dari 400 baris” mengundang memecah perubahan menjadi potongan buatan yang masing-masing tak terbaca atau yang merusak build ketika digabung sendirian. Pakai ukuran sebagai pemantik percakapan dalam retrospektif, dan beri tim teknik pengirisan, seperti feature toggle, refaktor persiapan dalam pull request sendiri, dan menggabung di balik bendera.

**6. Buat permintaan tinjauan eksplisit.** Pull request yang tidak menyebut peninjau menunggu sukarelawan, dan sukarelawan langka. Sepakati siapa yang diminta, bagaimana tim diberi tahu, dan apa ekspektasi responsnya, dalam kesepakatan kerja. Rota tinjauan bersama, atau slot tinjauan harian, biasanya mengurangi penantian lebih banyak daripada pengaturan alat mana pun.

### Sebarkan beban dan pengetahuan

**7. Awasi konsentrasi beban sebagai risiko tingkat tim.** Jika dua orang menangani sebagian besar tinjauan, ketersediaan mereka membatasi alur tim, dan ketidakhadiran mereka menghentikannya. Tinjau ukuran konsentrasi setiap bulan, dan bertindaklah lewat desain tim: putar peninjau default, pasangkan anggota baru dengan yang berpengalaman, dan tuliskan area kode yang hanya dapat ditinjau satu orang. Jangan menerbitkan papan peringkat per orang.

**8. Pakai tinjauan untuk berbagi pengetahuan, dan lindungi tujuan itu.** Nilai jangka panjang tinjauan mencakup pembelajaran, kepemilikan bersama, dan gaya yang konsisten, selain deteksi cacat. [Pemrograman berpasangan](https://en.wikipedia.org/wiki/Pair_programming) dan mob programming memindahkan sebagian pertukaran itu lebih awal dalam proses; bila sepasang sudah mengerjakan perubahan, tinjauan lebih ringan masuk akal. Jadikan pilihan itu keputusan tim, ditulis dalam kesepakatan kerja, agar “berpasangan, jadi ditinjau ringan” adalah aturan terlihat dan bukan dalih.

### Kendalikan tinjauan itu sendiri

**9. Serahkan kepada otomatisasi apa yang dikerjakannya dengan baik.** Pemformatan, linting, dan pemeriksaan dasar milik jalur pengiriman, agar perhatian manusia tertuju pada desain, kebenaran, dan risiko. [Analisis program statis](https://en.wikipedia.org/wiki/Static_program_analysis) dan pengujian otomatis mengurangi jumlah putaran tinjauan remeh. Putaran yang tersisa lalu lebih banyak berbicara tentang percakapan desain dan lebih sedikit tentang perselisihan gaya.

**10. Baca putaran tinjauan sebagai sinyal tentang kejelasan, bukan hitungan kesalahan.** Banyak putaran dapat berarti persyaratan tidak jelas, penulis kekurangan konteks, peninjau meminta perubahan selera, atau perubahan besar. Nol putaran pada setiap pull request dapat berarti pekerjaan yang sangat baik atau dapat berarti tak ada yang melihat. Ambil sampel segelintir pull request dengan putaran luar biasa banyak atau luar biasa sedikit dan bacalah bersama sebagai tim.

### Pasangkan kecepatan dengan kualitas, dan jaga waktu tetap terlihat

**11. Selalu tampilkan padanan kualitas di samping kecepatan tinjauan.** Tingkat perbaikan pasca-penggabungan, insiden yang tertaut pada perubahan terbaru, dan porsi cacat yang ditemukan setelah rilis adalah pasangan alaminya (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang). Jika waktu tinjauan membaik sementara tingkat perbaikan memburuk, tim telah menukar jaminan dengan kecepatan, dan solusinya adalah percakapan, bukan target. Tampilkan keduanya pada bagan yang sama.

**12. Hubungkan tinjauan dengan gambaran alur dan pekerjaan tak terencana.** Tinjauan yang lebih cepat membantu hanya jika tahap berikutnya tidak sekadar mengantre pekerjaan (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean). Permintaan tinjauan mendesak yang menginterupsi pekerjaan terencana punya biayanya sendiri (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Waktu ke tinjauan pertama | Memposting cepat “tampak bagus” atau emoji sebagai respons pertama; menugaskan bot atau peninjau yang ramah; menandai pull request siap hanya setelah seseorang sepakat sebelumnya untuk melihat | Tingkat perbaikan pasca-penggabungan; sampel persetujuan tanpa komentar; wajibkan respons pertama bersifat substantif dalam kesepakatan kerja |
| Cycle time tinjauan | Menggabung tanpa menunggu tinjauan; memecah perubahan menjadi potongan kecil agar lolos lebih cepat; menutup dan membuka kembali pull request untuk mengatur ulang jam | Hitung pull request yang ditutup-dan-dibuka kembali; putaran tinjauan; tingkat perbaikan pasca-penggabungan; aturan cabang terlindungi yang mewajibkan persetujuan |
| Ukuran pull request | Mengecualikan berkas dari hitungan; memecah satu perubahan menjadi potongan yang tak dapat dipahami terpisah; menambah ukuran dengan kode yang dihasilkan | Tinjau aturan abaikan tiap kuartal; periksa bahwa potongan hasil pecahan membangun dan lulus pengujian sendiri; baca sampel yang terkecil dan terbesar |
| Putaran tinjauan | Menyetujui pada lintasan pertama agar hitungan rendah; memindahkan diskusi ke obrolan sehingga tak meninggalkan jejak; penulis mendorong banyak perbaikan dalam satu commit untuk menyembunyikan putaran | Tingkat perbaikan pasca-penggabungan; sampel pull request nol putaran; jaga diskusi di dalam pull request |
| Konsentrasi beban tinjauan | Memecah tinjauan menjadi banyak persetujuan kecil untuk menyebar hitungan; menugaskan tinjauan kepada yang punya waktu luang tetapi tanpa pengetahuan | Tinjau pengetahuan peninjau untuk area berisiko; awasi tingkat perbaikan pasca-penggabungan menurut area; jaga metrik di tingkat tim |
| Hitungan pull request basi | Menutup pull request basi tanpa menggabung; mengubahnya menjadi draf untuk menyembunyikan; menaikkan batas basi | Hitungan pull request yang ditutup tanpa digabung; hitungan draf berumur panjang; tinjau batas bersama tim tiap kuartal |
| Tingkat perbaikan pasca-penggabungan | Mencatat perbaikan di bawah item kerja baru tanpa tautan; melabeli pekerjaan korektif sebagai tindak lanjut terencana; menghindari metrik dengan menunda perbaikan melewati jendela | Bandingkan dengan data insiden dan kegagalan perubahan; sampel item tindak lanjut; audit label yang dipakai |

Pembacaan yang sehat adalah yang tenang. Waktu ke tinjauan pertama pendek dan ekornya pendek juga, sehingga tak ada pull request menunggu berhari-hari. Ukuran berada dalam rentang yang mudah dibaca tim, dengan beberapa perubahan besar yang dapat dijelaskan tim. Putaran tinjauan rendah tetapi tidak nol, konsentrasi beban sedang, hitungan basi kecil, dan tingkat perbaikan pasca-penggabungan stabil. Ketika satu angka membaik tajam, seseorang sebaiknya memeriksa bahwa pagar pembatas berpasangannya tidak bergerak ke arah yang salah.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Tinjauan cepat dengan ekspektasi respons ketat | Putaran umpan balik pendek; lebih sedikit konteks hilang bagi penulis; pekerjaan dalam proses lebih rendah | Tekanan untuk menyetujui cepat; mengganggu kerja terfokus |
| Tinjauan lambat dan teliti | Pembacaan cermat atas desain dan risiko; transfer pengetahuan lebih kuat | Cycle time lebih panjang; batch lebih besar menumpuk; penulis berpindah dan kehilangan konteks |
| Pull request kecil | Lebih mudah dibaca dan dibatalkan; alur lebih mulus | Lebih banyak overhead per perubahan; dapat memecah fitur menjadi langkah membingungkan |
| Pull request besar | Lebih sedikit serah terima; seluruh fitur terlihat sekaligus | Tinjauan menjadi dangkal; lebih sulit dibatalkan; penantian panjang |
| Persetujuan wajib dari pemilik bernama | Akuntabilitas jelas untuk area berisiko; mendukung otorisasi perubahan | Menciptakan hambatan dan titik kegagalan tunggal |
| Pemeriksaan otomatis sebelum tinjauan manusia | Membebaskan orang untuk desain dan risiko; konsisten | Dapat menciptakan keyakinan palsu; butuh perawatan |

Tak ada satu kebijakan yang menang. Tujuannya memperpendek penantian sambil menjaga ketelitian, dan jalur yang biasa adalah perubahan lebih kecil, ekspektasi tinjauan yang jelas, otomatisasi kuat untuk pemeriksaan rutin, dan kesepakatan tim tentang seperti apa tinjauan yang baik. Metrik tinjauan paling berguna sebagai pertanyaan untuk retrospektif dan paling tidak berguna sebagai target.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Di mana pull request menghabiskan sebagian besar hidupnya, menunggu atau ditinjau?**
Minta tim menebak sebelum melihat data, lalu tunjukkan pembagian antara waktu ke tinjauan pertama dan sisa waktu sampai digabung. Kebanyakan kelompok terkejut betapa banyak yang menunggu. Fasilitator sebaiknya mencatat tebakan mana yang keliru dan bertanya apa yang dikatakan setiap tebakan keliru tentang bagaimana tim mengalami tinjauan. Tutup dengan satu perubahan yang menyerang penantian terbesar.

**2. Seperti apa tinjauan yang baik di tim ini, dan bagaimana orang luar dapat mengetahuinya?**
Daftar perilaku yang dihargai tim, seperti menanyakan desain, memeriksa pengujian, dan menjelaskan alasan sebuah permintaan. Lalu tanyakan mana yang meninggalkan jejak terlihat di pull request. Bahas cara membedakan respons pertama yang substantif dari yang simbolis tanpa mengawasi individu. Sepakati deskripsi tertulis singkat untuk ditaruh dalam kesepakatan kerja.

**3. Seberapa besar yang terlalu besar bagi kita, dan apa yang kita lakukan ketika pekerjaan benar-benar besar?**
Lihat distribusi ukuran dan pilih beberapa pull request terbesar. Tanyakan mengapa masing-masing besar dan apakah bisa diiris. Bahas teknik seperti feature toggle, refaktor persiapan, dan menggabung di balik bendera. Fasilitator sebaiknya menahan menetapkan batas numerik dan sebagai gantinya menyepakati kebiasaan yang akan dicoba tim selama sebulan.

**4. Siapa yang meninjau kode paling berisiko kita, dan apa yang terjadi ketika mereka tidak ada?**
Petakan area kode ke orang yang dapat meninjaunya dengan baik. Lihat konsentrasi beban dan area dengan satu peninjau yang memenuhi syarat. Bahas cara menumbuhkan peninjau kedua di setiap area, lewat berpasangan atau memutar penugasan. Jaga percakapan tentang ketahanan tim, bukan tentang peringkat beban kerja siapa pun.

**5. Jika kecepatan tinjauan kita berlipat dua besok, apa yang kita inginkan benar tentang kualitas?**
Minta kelompok menyebut sinyal kualitas yang akan mereka awasi, seperti perbaikan pasca-penggabungan, insiden tertaut pada perubahan terbaru, atau jumlah pembatalan. Periksa apakah sinyal itu kini terlihat di samping bagan kecepatan. Bahas apa tanda awal bahwa kecepatan telah dibeli dengan mengorbankan ketelitian. Sepakati padanan mana yang ditampilkan pada dasbor.

**6. Angka tinjauan mana yang akan kita tergoda perbaiki dengan cara yang tidak membantu?**
Telusuri setiap metrik dan tanyakan bagaimana seseorang di bawah tekanan dapat membuatnya tampak lebih baik tanpa memperbaiki apa pun. Bandingkan jawabannya dengan tabel manipulasi di atas dan tambahkan gagasan tim sendiri. Tujuannya menamai risiko sebelum terjadi. Sepakati pagar pembatas mana yang akan ditinjau bersama setiap metrik.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki proses tinjauan dan sebaiknya memiliki metriknya. Mereka paling diuntungkan memperpendek penantian dengan kesepakatan sederhana: slot tinjauan harian, proses permintaan yang jelas, dan perubahan kecil. Mereka sebaiknya memakai angka dalam retrospektif, menjaga pekerjaan dalam proses tetap rendah, dan menahan godaan mengoptimalkan satu bagan. Tinjauan juga tempat anggota baru mempelajari basis kode, jadi lindungi tujuan itu.

### Tim layanan dan operasi

Tim operasi bertemu tinjauan ketika kode infrastruktur, konfigurasi, dan otomatisasi runbook diubah lewat pull request. Bagi mereka, tinjauan sering menjadi bagian dari bagaimana perubahan standar disetujui dan dibuktikan (lihat topik 4.3, Metrik pemberdayaan perubahan). Mereka sebaiknya menyepakati perubahan mana yang butuh tinjauan orang kedua, seberapa cepat perbaikan mendesak ditinjau, dan bagaimana perubahan darurat ditinjau sesudahnya, agar perbaikan tergesa-gesa tetap diperiksa. Tinjauan tipis pada perubahan berisiko tampak kemudian sebagai insiden.

### Kepemimpinan dan tata kelola

Pemimpin sebaiknya memperlakukan metrik tinjauan sebagai sinyal kesehatan tim dan alur, bukan skor produktivitas. Mereka sebaiknya meminta ukuran kualitas berpasangan setiap kali angka kecepatan dilaporkan, mendukung waktu yang dibutuhkan tinjauan cermat, dan menghindari membandingkan tim menurut waktu tinjauan mentah, karena repositori dan risiko berbeda. Badan tata kelola dapat memakai bukti tinjauan sebagai bagian jaminan perubahan, asalkan menerima bahwa proses tinjauan terdokumentasi dan bersampel lebih kuat daripada hitungan persetujuan.

### Pelanggan dan pengguna

Pelanggan tidak melihat pull request, namun mereka merasakan hasilnya: seberapa cepat perbaikan tiba dan seberapa sering rilis membawa cacat baru. Penantian tinjauan yang pendek membantu perbaikan mendesak sampai kepada mereka lebih cepat, dan tinjauan yang cermat membantu menjauhkan kesalahan dari mereka. Di mana layanan punya riwayat rilis atau cacat yang diterbitkan, pelanggan diuntungkan ketika tim menunjukkan lebih sedikit pembalikan dan perbaikan berulang dari waktu ke waktu.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional menjalankan layanan web janji temu pasien, dibangun satu tim produk beranggota tujuh dan dioperasikan oleh kelompok keandalan situs kecil. Semua angka dalam contoh ini bersifat ilustratif.

Dalam tinjauan kuartalan, tim mendapati cycle time tinjauannya memiliki median 26 jam kerja dan persentil ke-85 sebesar 71 jam kerja (ilustratif). Memecah siklus menunjukkan bahwa median waktu ke tinjauan pertama adalah 19 jam kerja, jadi sebagian besar keterlambatan adalah menunggu. Ukuran pull request memiliki median 180 baris dan persentil ke-85 sebesar 900 baris (ilustratif), dan dua peninjau tersibuk menangani 68 persen tinjauan (ilustratif). Tingkat perbaikan pasca-penggabungan berada di 9 persen (ilustratif).

Tim membuat tiga kesepakatan. Mereka menetapkan slot tinjauan harian 30 menit, menuliskan ekspektasi respons pertama dalam satu hari kerja dalam kesepakatan kerja mereka, dan memutar tugas “tinjau dulu” tiap pekan. Mereka juga mengadopsi kebiasaan pengirisan untuk pekerjaan besar, memakai feature toggle agar fitur parsial dapat digabung dengan aman. Mereka tidak menetapkan batas ukuran atau target untuk waktu ke tinjauan pertama.

Setelah dua bulan, median waktu ke tinjauan pertama turun menjadi 6 jam kerja dan persentil ke-85 cycle time tinjauan turun menjadi 34 jam kerja (ilustratif). Konsentrasi beban turun menjadi 52 persen (ilustratif), dan tingkat perbaikan pasca-penggabungan bertahan di 9 persen.

Tim lalu menangkap risiko manipulasi. Sampel persetujuan menunjukkan sekitar sepertiga respons pertama tiba dalam hitungan menit dan hanya berbunyi “LGTM” pada perubahan yang menyentuh logika pengingat janji temu. Peningkatan kecepatan sebagian nyata dan sebagian stempel karet. Tingkat perbaikan pasca-penggabungan belum bergerak karena kode yang terdampak berjalan dalam siklus bulanan. Tim mengubah kesepakatan kerja agar respons pertama harus mencakup pertanyaan, komentar tentang bagian spesifik perubahan, atau catatan eksplisit tentang apa yang diperiksa, dan menambahkan porsi bersampel persetujuan tanpa komentar ke bagan tinjauannya. Mereka juga sepakat bahwa perubahan pada logika pengingat yang dihadapkan kepada pasien butuh dua peninjau, salah satunya dari kelompok operasi. Keputusan, beserta alasannya, masuk ke log keputusan tim.

## Sudut pandang sektor

**Startup.** Tim kecil dapat meninjau dalam menit karena semua orang mengenal kodenya, dan risiko utama adalah melewatkan tinjauan ketika waktu sempit. Jaga metrik tetap sedikit: waktu ke tinjauan pertama dan ukuran sudah cukup. Bangun kebiasaan perubahan kecil sejak awal, karena jauh lebih sulit memperkenalkannya setelah basis kode dan tim tumbuh.

**Bisnis kecil.** Sering satu atau dua pengembang, atau pemasok luar, memelihara perangkat lunak. Tinjauan mungkin oleh satu rekan atau staf pemasok sendiri. Tanyakan kepada pemasok bagaimana mereka meninjau dan apakah data pull request dapat dibagikan, dan simpan catatan sederhana perubahan mana yang ditinjau siapa, karena tinjauan adalah pemeriksaan utama terhadap kesalahan dalam tim kecil.

**Perusahaan besar.** Banyak tim, repositori, dan aturan persetujuan menciptakan variasi lebar. Standarkan definisi jam dan pengecualian agar data platform sebanding, tetapi jangan memeringkat tim menurut waktu tinjauan mentah, karena risiko dan basis kode berbeda. Waspadai persyaratan tinjauan yang dikenakan untuk audit yang menambah penantian tanpa menambah ketelitian, dan cari peluang mengganti persetujuan manual dengan pemeriksaan otomatis dan tinjauan bersampel.

**Pemerintah dan sektor publik.** Pemisahan tugas, jejak audit, dan aturan pengadaan sering mensyaratkan persetujuan independen untuk perubahan. Perlakukan aturan itu sebagai masukan desain: catat siapa menyetujui apa dan kapan, dan ukur penantian yang diciptakannya. Di mana pemasok menulis kode, tetapkan bukti tinjauan dan akses data dalam kontrak (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah memperpendek bagian pengiriman yang lambat sekaligus terkendali, sambil mempertahankan manfaat tinjauan sejawat: lebih sedikit cacat, pengetahuan bersama, dan jejak audit. Pull request yang menunggu menahan pekerjaan selesai dari pengguna, menambah biaya pergantian konteks bagi penulis, dan membuat konflik penggabungan lebih mungkin seiring cabang menua. Mengurangi penantian karena itu membayar kembali lewat pengiriman lebih cepat, lebih sedikit pengerjaan ulang, dan lebih sedikit frustrasi.

Biaya mengumpulkan metrik ini rendah ketika platform kontrol versi menyediakan riwayat peristiwa dan API. Biaya utamanya adalah waktu mendefinisikan jam dan pengecualian, membangun atau mengonfigurasi laporan, dan meninjau angka secara teratur. Biaya yang lebih besar bersifat perilaku: waktu yang diberikan orang untuk meninjau segera, yang bersaing dengan pekerjaan lain. Waktu itu investasi sebenarnya, dan sebaiknya dianggarkan, bukan diperlakukan gratis.

Imbal hasil tampak sebagai cycle time tinjauan yang lebih pendek, lebih sedikit pull request basi, dan tingkat perbaikan pasca-penggabungan yang stabil atau menurun. Hindari mengklaim peningkatan persentase tertentu di muka, karena hasil bergantung pada titik awal dan tim. Kasus yang kredibel membandingkan distribusi sebelum dan sesudah tim sendiri, bersama padanan kualitasnya, alih-alih mengutip angka dari organisasi lain. Buku *Accelerate* tahun 2018 melaporkan penelitian yang mengaitkan praktik teknis dan budaya dengan kinerja pengiriman dan merupakan sumber yang masuk akal untuk argumen umum, tetapi angka untuk tim Anda berasal dari data Anda sendiri.

## Anti-pola dan jebakan

- **Memeringkat peninjau atau penulis.** Papan peringkat individu atas tinjauan selesai atau baris berubah merusak kolaborasi. Laporkan di tingkat tim dan pakai angka untuk menyesuaikan kebiasaan tim.
- **Menargetkan waktu ke tinjauan pertama tanpa padanan kualitas.** Hasilnya stempel karet. Tampilkan tingkat perbaikan pasca-penggabungan dan sampel persetujuan tanpa komentar di samping setiap bagan kecepatan.
- **Menetapkan batas ukuran keras.** Tim memecah pekerjaan secara buatan agar patuh. Pakai ukuran sebagai percakapan dan ajarkan teknik pengirisan.
- **Memperlakukan nol komentar sebagai keberhasilan.** Persetujuan yang tak diperiksa bisa mencerminkan kepercayaan atau kelalaian. Ambil sampel pull request semacam itu dan bacalah bersama.
- **Menghitung aktivitas bot sebagai tinjauan.** Komentar otomatis membuat penantian tampak pendek. Kecualikan bot dari jam dan dari ukuran beban.
- **Mengabaikan zona waktu dan kalender.** Waktu jam mentah membuat akhir pekan dan penantian lintas wilayah tampak seperti tinjauan lambat. Pakai jam kerja dan namai kalendernya.
- **Membiarkan daftar basi tumbuh.** Pull request lama mengumpulkan konflik penggabungan dan kehilangan konteks. Tinjau daftar mingguan dan gabung, kerjakan ulang, atau tutup setiap item dengan alasan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | Waktu tinjauan ditebak atau dilaporkan menurut perasaan | Beberapa tim mengekspor waktu dari platform dengan aturan sendiri | Satu definisi tertulis tiap jam, dengan pengecualian untuk bot, draf, dan kalender | Definisi ditinjau dengan ritme; perubahan dicatat dengan alasan | Definisi diselaraskan antartim dan pemasok dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Praktik tinjauan | Tinjauan terjadi ketika seseorang memperhatikan | Norma informal di beberapa tim | Kesepakatan kerja tertulis tentang permintaan, ekspektasi respons, dan apa yang dicakup tinjauan | Norma disesuaikan dari data; berbagi pengetahuan dan area berisiko dilacak | Praktik tinjauan dikoordinasikan antartim dan pemasok, dengan otomatisasi menangani pemeriksaan rutin |
| Padanan kualitas | Tak ada kaitan antara tinjauan dan cacat | Sesekali melihat perbaikan pasca-penggabungan | Tingkat perbaikan pasca-penggabungan ditampilkan di samping kecepatan tinjauan | Pagar pembatas ditinjau teratur; persetujuan bersampel dibaca | Bukti tinjauan terhubung dengan jaminan perubahan dan pembelajaran insiden lintas layanan |
| Pemakaian dalam perbaikan | Angka tak dipakai | Ditunjukkan pada beberapa retrospektif | Ditinjau tim pemilik dengan ritme tetap | Kesenjangan berujung pada pekerjaan perbaikan terencana dan didanai | Gagasan perbaikan mengalir dari tim ke praktik bersama dan kembali |

## Daftar periksa

- [ ] Jam untuk waktu ke tinjauan pertama dan cycle time tinjauan tertulis, dengan awal, akhir, dan pengecualian.
- [ ] Bot, draf, dan pull request yang ditutup tanpa digabung dikecualikan atau dihitung terpisah, dan aturannya terlihat.
- [ ] Waktu dilaporkan sebagai median dan persentil tinggi dalam jam kerja.
- [ ] Ukuran pull request diukur dengan daftar abaikan yang disepakati untuk berkas yang dihasilkan dan vendor.
- [ ] Tim punya kesepakatan tertulis tentang bagaimana tinjauan diminta dan seberapa cepat respons pertama diharapkan.
- [ ] Konsentrasi beban tinjauan dilaporkan hanya di tingkat tim.
- [ ] Tingkat perbaikan pasca-penggabungan atau padanan kualitas lain ditampilkan pada bagan yang sama dengan kecepatan tinjauan.
- [ ] Sampel persetujuan tanpa komentar dan yang sangat cepat dibaca setiap bulan.
- [ ] Daftar pull request basi ditinjau mingguan.
- [ ] Data tinjauan dipakai dalam retrospektif dan tidak dalam penilaian individu.
- [ ] Area kode dengan satu peninjau yang memenuhi syarat didaftar dan punya rencana.

## Prompt AI

**Susun definisi jam untuk metrik tinjauan.**

```text
Saya ingin mendefinisikan metrik tinjauan untuk [team or repository]. Platform
kami [version control platform] dan alur kerja kami [describe: draft pull
requests, required approvals, merge rules, bots in use]. Susun definisi tepat
untuk waktu ke tinjauan pertama dan cycle time tinjauan, menyatakan peristiwa
yang memulai dan menghentikan tiap jam, apa yang dikecualikan (bot, draf, ditutup
tanpa digabung), bagaimana jam kerja ditangani untuk [time zones and working
calendar], dan persentil mana yang dilaporkan. Jangan mengarang nilai acuan atau
fitur alat. Daftar asumsi Anda dan pertanyaan yang harus saya jawab untuk
menuntaskan definisi.
```

**Analisis ekspor data tinjauan.**

```text
Berikut ekspor anonim pull request yang digabung untuk [team] selama [period],
dengan kolom [list columns, for example ready time, first review time, merge
time, lines changed, review rounds, linked fix flag]: [paste data or summary].
Hitung median dan persentil ke-85 untuk tiap ukuran waktu dan untuk ukuran,
pecah siklus tinjauan menjadi menunggu dan meninjau, dan tunjukkan pola yang
layak dibicarakan. Jangan memeringkat individu, dan jangan membandingkan dengan
acuan luar. Daftar asumsi Anda dan masalah kualitas data apa pun yang Anda
perhatikan.
```

**Temukan risiko manipulasi pada metrik tinjauan kita.**

```text
Tim kami melaporkan metrik tinjauan ini: [list metrics and how each is
calculated]. Tekanan pada kami adalah [for example a release deadline, a
leadership target, a supplier contract]. Untuk setiap metrik, jelaskan cara yang
masuk akal ia dapat diperbaiki tanpa memperbaiki tinjauan, tanda awal masing-
masing, dan metrik atau praktik pagar pembatas berpasangan yang akan
menangkapnya. Jangan mengarang statistik. Daftar asumsi Anda dan katakan apa
yang perlu saya ketahui untuk memeringkat risiko.
```

**Siapkan retrospektif tentang alur tinjauan.**

```text
Siapkan agenda retrospektif 45 menit untuk [team] tentang alur tinjauan. Masukan:
waktu ke tinjauan pertama [value], cycle time tinjauan [value], median ukuran
[value], konsentrasi beban [value], dan tingkat perbaikan pasca-penggabungan
[value], semuanya diberi label definisinya. Sarankan pertanyaan yang mengungkap
sebab, satu eksperimen kecil yang dapat dijalankan tim selama [duration], dan
sinyal kualitas yang diawasi selama eksperimen. Jangan mengarang sebab atau
target. Daftar asumsi Anda dan data yang harus saya bawa.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan metrik alur atau kualitas terkait dan pagar pembatas yang harus berada di samping metrik tinjauan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penyuntingan topik ini menjaga templat, tabel manipulasi, dan referensi silang tetap konsisten.

## Poin penting

- Sebagian besar keterlambatan tinjauan adalah menunggu, jadi ukur waktu ke tinjauan pertama dan cycle time tinjauan sebagai distribusi dalam jam kerja.
- Pull request yang lebih kecil ditinjau lebih cepat dan lebih cermat; ajarkan pengirisan alih-alih memaksakan batas ukuran.
- Pasangkan setiap ukuran kecepatan dengan padanan kualitas, seperti tingkat perbaikan pasca-penggabungan, dan baca keduanya bersama.
- Perlakukan beban tinjauan sebagai kapasitas tim dan laporkan konsentrasi di tingkat tim, tidak pernah sebagai peringkat orang.
- Metrik tinjauan adalah pertanyaan untuk retrospektif, dan melayani tim yang memiliki pekerjaan.

## Referensi dan bacaan lanjutan

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
