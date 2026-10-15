# Lead time, cycle time, dan efisiensi alur

**Lead time, cycle time, dan efisiensi alur hanya bermakna bila masing-masing punya awal dan akhir tertulis, distribusi alih-alih rata-rata, dan pandangan tentang penantian yang mengisi sebagian besar waktu terlewat.**

## Gambaran umum dan motivasi

Hampir setiap tim ingin tahu berapa lama pekerjaan memakan waktu. Pertanyaan itu terdengar sederhana dan menimbulkan perdebatan, karena “berapa lama” bergantung pada siapa yang bertanya dan di mana mereka memulai stopwatch. Pelanggan menghitung sejak saat mereka meminta. Pengembang menghitung sejak saat mereka mengambil pekerjaan. Manajer operasi menghitung sejak tiket ditugaskan ke sebuah antrean. Ketiganya benar tentang jam masing-masing, dan ketiganya memberi angka berbeda untuk pekerjaan yang sama.

[Lead time](https://en.wikipedia.org/wiki/Lead_time) adalah waktu terlewat antara sebuah permintaan tiba dan permintaan itu terpenuhi, dilihat dari sisi orang yang meminta. [Cycle time](https://en.wikipedia.org/wiki/Cycle_time) adalah waktu terlewat antara saat tim berkomitmen pada sebuah pekerjaan dan saat pekerjaan itu selesai, dilihat dari sisi tim yang mengerjakannya. Selisih antara keduanya adalah waktu permintaan menunggu sebelum tim mulai. Efisiensi alur adalah porsi waktu terlewat saat seseorang benar-benar mengerjakan item, berlawanan dengan item menunggu. Jika sebuah item memakan 10 hari dari awal sampai akhir dan dikerjakan selama 1 hari, efisiensi alurnya 10 persen. Waktu sentuh adalah bagian yang dikerjakan. Waktu tunggu adalah segalanya yang lain.

[Pengembangan perangkat lunak lean](https://en.wikipedia.org/wiki/Lean_software_development) dan Kanban Guide membawa gagasan ini dari manufaktur ke pekerjaan pengetahuan. Praktik ITIL berbicara tentang waktu penyelesaian, waktu pemenuhan, dan target tingkat layanan, dan tim agile berbicara tentang cycle time dan item kerja. Topik ini memberi satu set definisi yang bertahan ketika insiden, permintaan, perubahan, dan cerita berbagi satu rapat.

Waktu terlewat memiliki sifat yang mengejutkan orang pada pertama kali mengukurnya. Dalam kebanyakan pekerjaan pengetahuan dan pekerjaan layanan, item menghabiskan sebagian besar hidupnya menunggu: sebuah keputusan, peninjau, lingkungan, pemasok, jendela pemeliharaan, atau sekadar orang yang sibuk dengan hal lain. Membuat penantian itu terlihat adalah hal paling berguna yang dilakukan metrik ini. Tim yang tak dapat melihat waktu tunggunya cenderung mencoba memperbaiki dengan bekerja lebih cepat, yang berefek kecil pada sistem ketika 90 persen waktu terlewat dihabiskan dalam antrean. Perilaku antrean dibahas mendalam dalam topik 2.3, Pekerjaan dalam proses (WIP) dan antrean, dan pandangan aliran nilai lengkap ada dalam topik 2.4, Metrik aliran nilai.

Ukuran waktu dilaporkan sebagai persentil, seperti median dan [persentil](https://en.wikipedia.org/wiki/Percentile) ke-85 atau ke-95, untuk alasan dalam topik 1.6, Literasi statistik untuk metrik layanan. Stempel waktu mentahnya berasal dari sumber dalam topik 1.5, Sumber data dan instrumentasi. Ukuran alur berupa pekerjaan yang sedang berjalan, throughput, dan usia item kerja ada dalam topik 2.1, Ukuran alur, dan ukuran DORA untuk lead time perubahan ada dalam topik 2.8, Metrik DORA. Topik ini membahas ukuran waktu itu sendiri: cara mendefinisikannya agar dapat dibandingkan, di mana jamnya mulai dan berhenti, dan cara mengungkap penantian di dalamnya.

## Prinsip utama

- **Sebut jamnya sebelum membaca angkanya.** Setiap ukuran waktu punya peristiwa awal, peristiwa akhir, dan daftar pengecualian. Angka tanpa itu adalah pendapat.
- **Lead time milik pelanggan, cycle time milik tim.** Simpan keduanya, dan selalu beri label mana yang ditampilkan bagan, karena jurang di antaranya sinyal tersendiri.
- **Laporkan distribusi, jangan hanya rata-rata.** Median menggambarkan item tipikal. Persentil tinggi menggambarkan risiko yang sebenarnya ditanggung pelanggan.
- **Penantian adalah temuan utama.** Efisiensi alur biasanya rendah, dan tanggapannya adalah menyingkirkan antrean dan serah terima, bukan meminta orang bergegas.
- **Status jeda adalah keputusan desain.** Jika jam dapat dihentikan dengan memindahkan item ke status “menunggu,” status itu akan dipakai, jadi hitung seberapa sering dan oleh siapa.
- **Bandingkan item dengan jenisnya sendiri.** Insiden, permintaan standar, perubahan, dan fitur punya bentuk berbeda. Segmentasikan menurut jenis pekerjaan sebelum membandingkan apa pun.
- **Ukur sistem, bukan orang.** Ukuran waktu menggambarkan bagaimana pekerjaan mengalir melalui tim atau layanan. Tidak pernah peringkat individu.

## Definisi metrik

Tabel di bawah memakai satu kosakata untuk item kerja agile dan catatan ITIL. “Item kerja” berarti catatan apa pun yang bergerak melalui alur kerja: cerita, tugas, insiden, permintaan layanan, perubahan, atau catatan masalah. Semua durasi adalah waktu kalender terlewat kecuali dinyatakan lain, dan masing-masing dilaporkan sebagai median dan persentil tinggi.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead time | Waktu terlewat dari kedatangan permintaan sampai penyampaiannya kepada peminta | stempel waktu penyampaian dikurangi stempel waktu kedatangan permintaan, per item kerja; jam dimulai saat permintaan dicatat, berhenti saat peminta dapat memakai hasilnya; item yang masih terbuka dan item yang dibatalkan sebelum penyampaian dikecualikan dan dihitung terpisah | hari atau jam | Riwayat alat ITSM atau pelacak isu | Manajemen permintaan layanan; manajemen insiden; pemberdayaan perubahan | Lead time pada papan tim; waktu permintaan-ke-rilis | Mingguan, ditinjau bulanan |
| Cycle time | Waktu terlewat dari saat tim memulai pekerjaan sampai saat selesai | stempel waktu selesai dikurangi stempel waktu mulai, per item kerja; jam dimulai pada perpindahan pertama ke keadaan kerja aktif, berhenti pada perpindahan pertama ke keadaan selesai; waktu sebelum mulai dan sesudah keadaan selesai dikecualikan | hari atau jam | Riwayat status pelacak atau papan | Manajemen insiden; manajemen permintaan layanan; pemberdayaan perubahan | Cycle time (lihat topik 2.1, Ukuran alur) | Mingguan |
| Waktu sentuh | Waktu ketika seseorang atau otomatisasi aktif mengerjakan item | jumlah selang yang dihabiskan item dalam keadaan yang digolongkan kerja aktif; keadaan menunggu, terhalang, dan antrean dikecualikan | jam | Riwayat status pelacak, dengan tiap keadaan digolongkan aktif atau menunggu | Manajemen insiden; manajemen permintaan layanan | Waktu proses dalam peta aliran nilai | Sampel bulanan |
| Waktu tunggu | Waktu ketika item berada dalam antrean, terhalang, atau dijeda | cycle time dikurangi waktu sentuh, per item kerja; n/a untuk item tanpa awal tercatat | hari atau jam | Riwayat status pelacak | Manajemen insiden; manajemen tingkat layanan | Waktu tunggu atau waktu terhalang pada papan | Bulanan |
| Efisiensi alur | Porsi cycle time yang dihabiskan dalam kerja aktif | jumlah waktu sentuh / jumlah cycle time, untuk item yang selesai pada periode itu; item dengan riwayat status hilang dikecualikan dan dihitung terpisah | persen | Riwayat status pelacak | Perbaikan berkelanjutan; manajemen permintaan layanan | Efisiensi alur dari praktik lean | Bulanan |
| Porsi jeda jam | Porsi cycle time ketika jam layanan formal dijeda | jumlah durasi jeda / jumlah cycle time, untuk item yang selesai pada periode itu; jeda adalah status yang didefinisikan dalam aturan jam tertulis | persen | Riwayat status alat ITSM | Manajemen tingkat layanan; manajemen insiden | Waktu kolom terhalang atau ditahan | Bulanan |

Awal jam cycle time adalah keputusan tim yang harus ditulis. Jam formal dalam perjanjian tingkat layanan (SLA) sering dijeda ketika item menunggu pelanggan, jadi topik ini melaporkan porsi jeda alih-alih membuang waktu itu. Waktu sentuh disimpulkan dari keadaan, sehingga akurasinya bergantung pada seberapa baik keadaan menggambarkan pekerjaan.

## Rekomendasi

### Definisikan jam

**1. Tulis awal dan akhir setiap jam.** Untuk lead time, awalnya adalah kedatangan permintaan, sebagaimana dicatat oleh sistem pertama yang disentuh peminta, dan akhirnya adalah saat peminta dapat memakai hasilnya. Untuk cycle time, awalnya adalah perpindahan pertama ke keadaan aktif dan akhirnya adalah perpindahan pertama ke keadaan selesai. Taruh keduanya di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik) dan tampilkan definisi di bawah setiap bagan.

**2. Sepakati arti “selesai” untuk setiap jenis pekerjaan.** Perubahan selesai ketika berjalan di produksi dan terverifikasi, bukan ketika kode digabung. Insiden selesai ketika layanan dipulihkan bagi pengguna, bukan ketika tiket ditutup oleh pekerjaan massal pada hari Jumat. Permintaan selesai ketika peminta memiliki barangnya. Jika “selesai” berbeda menurut tim, cycle time tidak dapat dibandingkan di antara mereka.

**3. Simpan lead time dan cycle time, dan awasi jurangnya.** Selisih antara keduanya adalah penantian komitmen: waktu permintaan duduk sebelum tim mulai. Cycle time pendek di samping lead time panjang menyatakan tim bekerja efisien pada apa yang dimulainya dan penerimaan adalah hambatannya. Cycle time panjang di samping lead time pendek menyatakan permintaan diterima cepat lalu macet di dalam tim.

### Laporkan waktu dengan jujur

**4. Pakai persentil dan katakan yang mana.** Laporkan median dan persentil ke-85 atau ke-95, misalnya “separuh item selesai dalam 4 hari dan 85 persen dalam 11 hari.” Pernyataan itu juga perkiraan: item baru punya peluang sekitar 85 persen selesai dalam 11 hari jika sistem tetap sama. Rata-rata tidak bisa memberi kalimat itu, dan ia bergerak jauh ketika satu pencilan muncul (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**5. Plot setiap item, bukan hanya ringkasannya.** Diagram sebar cycle time terhadap tanggal selesai menunjukkan bentuk sistem sekilas: gugusan, hanyutan naik yang pelan, anak tangga mendadak setelah perubahan proses. Angka ringkasan sebaiknya berada di samping plot. Alat yang hanya menawarkan garis rata-rata menghilangkan informasi yang paling dibutuhkan tim.

**6. Segmentasikan menurut jenis pekerjaan dan kelas layanan.** Insiden mendesak, permintaan standar, perubahan terencana, dan cerita riset punya waktu yang diharapkan berbeda. Pecah data menurut jenis, dan menurut prioritas bila prioritas mengubah cara pekerjaan ditangani, sebelum mencari pola. Populasi campuran menghasilkan distribusi lebar yang menggambarkan pengalaman siapa pun.

### Ungkap penantian

**7. Golongkan setiap status sebagai aktif, menunggu, atau selesai.** Ini pekerjaan yang memungkinkan efisiensi alur. “Dalam pengembangan” dan “dalam tinjauan dengan peninjau yang bekerja” adalah aktif. “Menunggu tinjauan,” “menunggu persetujuan,” “terhalang,” dan “menunggu pelanggan” adalah menunggu. Tinjau penggolongan dengan tim, karena label dalam alur kerja jarang menceritakan seluruh kebenaran, dan keadaan bernama “sedang berjalan” sering menyembunyikan item yang tak disentuh siapa pun selama sepekan.

**8. Hitung efisiensi alur sebagai diagnostik, bukan target.** Hitung pada sampel atau pada semua item yang selesai, dan pakai untuk menemukan di mana penantian berada: keadaan mana menahan item paling lama, dan serah terima mana mendahuluinya. Harapkan angka rendah, dan jangan menetapkan sasaran seperti “capai 40 persen.” Menaikkan angka dengan melabeli ulang keadaan menunggu sebagai aktif itu mudah dan sia-sia, dan keuntungan nyata datang dari menyingkirkan antreannya sendiri (lihat topik 2.4, Metrik aliran nilai).

**9. Hitung waktu terhalang dan terjeda secara terpisah.** Lacak seberapa sering item memasuki keadaan terhalang atau terjeda, berapa lama tinggal, dan apa alasannya. Daftar pendek alasan penghalang yang berulang, seperti menunggu persetujuan, lingkungan, atau pemasok, memberi tahu apa yang harus diperbaiki dan siapa yang diajak bicara. Laporkan porsi jeda di samping hasil tingkat layanan mana pun yang mengecualikan waktu terjeda (lihat topik 3.3, Waktu respons dan penyelesaian insiden).

### Pakai angka dengan baik

**10. Kendalikan antrean untuk mengendalikan waktu.** Waktu melalui sistem naik ketika pekerjaan dalam proses naik, hubungan yang dijelaskan [hukum Little](https://en.wikipedia.org/wiki/Little%27s_law), yang menghubungkan jumlah rata-rata item dalam sistem, laju kedatangan atau penyelesaian, dan waktu rata-rata tiap item berada di sana. Membatasi pekerjaan yang sedang berjalan karena itu tuas paling langsung pada cycle time (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean). Mengubah target metrik tanpa mengubah antrean hanya mengubah insentif untuk melaporkan secara keliru.

**11. Pakai distribusi cycle time untuk perkiraan dan untuk target tingkat layanan.** Jika cycle time persentil ke-85 untuk permintaan standar adalah 6 hari, komitmen 5 hari akan sering meleset, dan komitmen 8 hari akan terpenuhi dengan ruang lebih. Dasarkan target internal pada apa yang telah dilakukan sistem, lalu kerjakan sistem untuk menggeser distribusi (lihat topik 3.5, Metrik pemenuhan permintaan layanan, dan topik 4.3, Metrik pemberdayaan perubahan).

**12. Perlakukan definisi yang berubah sebagai peristiwa.** Jika awal atau akhir sebuah jam berubah, tandai pada setiap bagan dan sajikan ulang riwayat dari peristiwa mentah bila mungkin. Tanpa disiplin itu garis tren menunjukkan efek perubahan definisi seolah perbaikan atau kemunduran (lihat topik 1.5, Sumber data dan instrumentasi).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Lead time | Menunda pembuatan catatan permintaan agar jam mulai terlambat; menutup dan membuka kembali item untuk memulai ulang jam; memecah satu permintaan menjadi banyak yang kecil | Bandingkan catatan permintaan dengan kontak pertama di email atau obrolan pada sampel; lacak tingkat pembukaan ulang; lacak ukuran dan jumlah item per permintaan |
| Cycle time | Memulai jam terlambat dengan memindahkan item ke “dikerjakan” hanya di akhir; membiarkan item di luar papan sampai hampir selesai; mengiris pekerjaan menjadi potongan yang tak menyampaikan nilai sendiri | Usia item kerja untuk item terbuka (lihat topik 2.1, Ukuran alur); periksa bahwa item selesai dapat dipakai peminta; bandingkan lead time dengan cycle time |
| Waktu sentuh | Menggolongkan keadaan menunggu sebagai aktif, atau mencatat aktivitas agar tampak sibuk | Tinjau penggolongan keadaan dengan tim tiap kuartal; ambil sampel item dan bandingkan aktivitas tercatat dengan commit, komentar, dan kalender |
| Waktu tunggu | Membuat status baru sehingga waktu tunggu jatuh ke celah yang tak terukur; memindahkan item menunggu ke status di luar alur kerja | Hitung status dan transisi tak terdokumentasi (lihat topik 1.5, Sumber data dan instrumentasi); konfirmasi bahwa cycle time sama dengan waktu sentuh ditambah waktu tunggu pada sampel |
| Efisiensi alur | Melabeli ulang menunggu sebagai aktif; memilih hanya item cepat untuk sampel; menyelesaikan item mudah lebih dulu untuk mengangkat rasio | Penggolongan keadaan tetap dengan log perubahan; hitung pada semua item yang selesai; laporkan bersama cycle time persentil ke-85 dan usia item terbuka |
| Porsi jeda jam | Menjeda jam layanan formal karena alasan yang tak bergantung pada pelanggan, seperti serah terima internal, untuk memenuhi SLA | Audit alasan jeda pada sampel; laporkan waktu terlewat dan waktu SLA berdampingan; tinjau pandangan pelanggan sendiri tentang waktu penyelesaian (lihat topik 5.1, Metrik SLA, OLA, dan XLA) |

Pembacaan yang sehat menunjukkan lead time dan cycle time yang bergerak bersama, jurang di antaranya yang dapat dijelaskan tim, persentil ke-85 yang merupakan kelipatan stabil dari median, dan efisiensi alur yang rendah tetapi naik seiring antrean tertentu disingkirkan. Tanda peringatan adalah median yang membaik sementara persentil tinggi memburuk, porsi jeda yang tumbuh di akhir setiap bulan, dan efisiensi alur yang melonjak tanpa perubahan cara kerja. Ketika sebuah angka membaik, seseorang harus bisa menunjuk perubahan dalam pekerjaan yang menjelaskannya. Perbaikan akibat manipulasi biasanya gagal dalam ujian itu. Psikologi yang lebih luas dibahas dalam topik 1.2, Hukum Goodhart dan psikologi metrik.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Lead time dari sudut pandang peminta | Sesuai dengan yang dirasakan pelanggan; sulit diperbaiki dengan mengubah label internal | Peristiwa awal di luar kendali tim dan mungkin dicatat buruk |
| Cycle time dari komitmen tim | Dalam kendali tim; mudah dihitung dari riwayat papan | Mengabaikan keterlambatan penerimaan; tim bisa tampak cepat sementara permintaan menunggu |
| Waktu terlewat (jam kalender) | Sederhana, sebanding, dan cocok dengan pengalaman pelanggan | Mencakup malam dan akhir pekan, yang bisa menyesatkan bagi tim dengan jam berbeda |
| Jam jam kerja | Cocok dengan tingkat layanan yang dijaga staf dan pola siaga | Butuh kalender per tim; menyembunyikan penantian nyata yang dialami pelanggan |
| Efisiensi alur sebagai rasio | Menunjukkan berapa banyak waktu yang menunggu dalam satu angka intuitif | Bergantung pada penggolongan keadaan; mudah digelembungkan; bisa disalahbaca sebagai target |
| Pelaporan persentil | Menunjukkan risiko dan mendukung perkiraan | Butuh cukup item per periode; lebih sulit dibaca sebagian audiens daripada rata-rata |

Saran praktisnya adalah mulai dengan waktu terlewat, tambahkan pandangan jam kerja hanya di tempat tingkat layanan menuntutnya, dan laporkan lead time dan cycle time pada persentil tinggi. Pakai efisiensi alur sebagai pemantik percakapan dalam tinjauan, dengan penggolongan keadaan di atas meja, dan hindari menaruhnya di kartu skor.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Di mana jam lead time kita mulai, dan di mana pelanggan mengira ia mulai?**
Ambil tiga permintaan terbaru dan telusuri dari kontak pertama sampai penyampaian. Tandai saat permintaan dicatat di sistem pencatat. Bandingkan jurang antara kontak pertama dan pembuatan catatan. Fasilitator sebaiknya mencari antrean tersembunyi di email, obrolan, atau kotak masuk bersama yang tak pernah muncul dalam metrik.

**2. Apa arti “selesai” untuk setiap jenis pekerjaan yang kita tangani?**
Daftar jenis pekerjaan, seperti insiden, permintaan, perubahan, dan cerita, dan tanyakan peristiwa akhir masing-masing. Tanyakan apakah peminta akan setuju bahwa pekerjaan selesai pada saat itu. Perbedaan pendapat menunjuk jam yang berhenti terlalu dini. Sepakati satu peristiwa akhir per jenis dan tuliskan.

**3. Status kita yang mana adalah menunggu, dan berapa lama item duduk di dalamnya?**
Pasang alur kerja di dinding dan tandai setiap keadaan sebagai aktif atau menunggu. Minta waktu tipikal di setiap keadaan menunggu dari data sebulan terakhir. Keadaan menunggu terbesar biasanya mengejutkan seseorang. Pilih satu antrean untuk diperiksa lebih dekat bulan depan.

**4. Persentil mana yang kita janjikan, dan apa yang sebenarnya telah dilakukan sistem?**
Tampilkan distribusi cycle time kuartal terakhir dengan median, persentil ke-85, dan persentil ke-95. Tanyakan komitmen apa yang kini dibuat tim kepada pelanggan dan di mana ia jatuh pada distribusi. Bahas harga menjanjikan waktu lebih cepat daripada yang disampaikan sistem. Putuskan komitmen yang dapat dipenuhi tim karena alasannya sendiri.

**5. Siapa yang boleh menjeda jam, dan mengapa?**
Daftar status jeda dan ditahan, orang yang dapat memakainya, dan alasan yang dinyatakan. Baca sampel item terjeda dan tanyakan apakah pelanggan benar-benar penyebabnya. Bahas apa yang terjadi jika porsi jeda ditampilkan pada bagan yang sama dengan hasil SLA. Fasilitator sebaiknya menjaga nada ingin tahu, karena status jeda sering ada karena alasan sah yang tak pernah ditulis.

**6. Jika efisiensi alur berlipat dua kuartal depan, apa yang akan kita ubah dalam cara pekerjaan bergerak?**
Minta kelompok menyebut antrean, serah terima, persetujuan, atau ukuran batch tertentu yang harus berubah. Jika jawabannya umum, seperti “bekerja lebih keras” atau “berkomunikasi lebih baik,” angka itu belum terhubung dengan tindakan apa pun. Pilih satu perubahan konkret, prediksikan efeknya pada waktu tunggu keadaan bernama, dan sepakati kapan memeriksanya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki jam cycle time dan melihat rinciannya pada papan. Mereka paling diuntungkan dengan menggolongkan keadaan secara jujur, membatasi pekerjaan yang sedang berjalan, dan membaca diagram sebar dalam retrospektif mereka sendiri. Mereka sebaiknya menolak tekanan memecah pekerjaan menjadi potongan kecil buatan yang selesai cepat dan tidak menyampaikan apa pun, dan menampilkan usia item terbuka di samping cycle time yang selesai (lihat topik 2.1, Ukuran alur).

### Tim layanan dan operasi

Tim layanan bekerja dengan catatan yang membawa jam tingkat layanan formal, dan status jeda mereka adalah tempat waktu terlewat dan waktu SLA berpisah. Mereka sebaiknya melaporkan kedua jam, mengsegmentasi menurut jenis dan prioritas, dan mencatat alasan setiap jeda. Tim operasi juga pemilik alami antrean persetujuan, jendela pemeliharaan, dan respons pemasok, yang sering mendominasi waktu tunggu yang dilihat tim produk (lihat topik 3.5, Metrik pemenuhan permintaan layanan).

### Kepemimpinan dan tata kelola

Pemimpin meminta lead time karena itu angka terdekat dengan yang dialami pelanggan. Mereka sebaiknya mengharapkan definisi, distribusi, dan segmentasi pada setiap angka, dan bertanya di mana penantiannya sebelum bertanya mengapa orang lambat. Target untuk ukuran ini bekerja paling baik bila berlaku untuk layanan atau aliran nilai dengan pemilik bernama, dan bila ditetapkan dari apa yang telah disampaikan sistem. Target pada rata-rata mengundang pelabelan ulang dan permainan jam.

### Pelanggan dan pengguna

Pelanggan mengalami lead time, termasuk semua penantian sebelum pekerjaan dimulai dan semua penantian setelah tim mengira telah selesai. Mereka membutuhkan perkiraan jujur yang dinyatakan sebagai rentang, seperti “kebanyakan permintaan seperti ini selesai dalam seminggu, dan hampir semuanya dalam dua minggu,” dan mereka perlu tahu bila jeda diterapkan karena tim menunggu mereka. Laporan kepada pelanggan sebaiknya menyatakan jam mana yang dipakai (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional menjalankan service desk, tim infrastruktur, dan tim aplikasi yang mendukung staf klinis. Semua angka dalam contoh ini bersifat ilustratif.

Service desk melaporkan bahwa permintaan akses standar memenuhi target 5 hari kerja sebesar 94 persen, namun manajer bangsal terus mengeluh akses memakan “sekitar dua pekan.” Kepala operasi layanan meminta tim mengukur lead time dan cycle time untuk permintaan ini selama satu kuartal, memakai hari kalender terlewat dari riwayat status mentah alih-alih pengatur waktu SLA.

Hasil untuk 400 permintaan (ilustratif) adalah median cycle time 3 hari dan persentil ke-85 sebesar 9 hari. Lead time, diukur dari saat manajer pertama kali mengirim email ke kotak surat bersama, memiliki median 8 hari dan persentil ke-85 sebesar 16 hari. Dua temuan menjelaskan jurang itu. Pertama, permintaan menunggu rata-rata 3 hari di kotak surat sebelum ada yang membuat tiket, yang tak terlihat bagi SLA. Kedua, status “menunggu persetujuan” menyumbang sebagian besar cycle time: dari persentil ke-85 sebesar 9 hari, sekitar 6 hari dihabiskan menunggu kepala departemen menyetujui. Waktu sentuh pada sampel 30 permintaan sekitar setengah hari, sehingga efisiensi alur kira-kira 8 persen (ilustratif). Hasil SLA tinggi karena pengatur waktu berhenti selama “menunggu persetujuan” dan “menunggu pelanggan,” jadi porsi jeda jam adalah 52 persen dari cycle time.

Tim membuat tiga keputusan. Ia menambahkan formulir web yang membuat tiket pada kontak pertama, agar jam lead time dimulai di tempat jam pelanggan dimulai. Ia menyepakati dengan kepala departemen bahwa persetujuan untuk daftar peran standar tertentu telah diotorisasi sebelumnya, dengan audit kuartalan alih-alih persetujuan per permintaan. Dan ia menambahkan porsi jeda dan lead time ke tinjauan layanan bulanan di samping hasil SLA. Setelah satu kuartal, median lead time turun menjadi 4 hari dan persentil ke-85 menjadi 8 hari (ilustratif), sementara hasil SLA nyaris tak bergerak.

Selama tinjauan tim menangkap risiko manipulasi. Seorang teknisi mulai memindahkan tiket ke “menunggu pelanggan” segera setelah email persetujuan dikirim, yang bukan untuk itu status tersebut dibuat. Porsi jeda untuk kelompok itu naik, audit sampel tiket terjeda menunjukkan polanya, dan tim menulis ulang aturan jam sehingga hanya permintaan informasi dari peminta yang dapat menjeda jam. Pagar pembatas yang menangkap masalah itu adalah melaporkan porsi jeda di samping hasil SLA, pasangan yang direkomendasikan dalam topik ini.

## Sudut pandang sektor

**Startup.** Dengan tim kecil dan sedikit serah terima, cycle time mudah diukur dari papan dan lead time dekat dengan cycle time. Lacak keduanya sejak hari pertama dengan penggolongan keadaan sederhana, dan lihat diagram sebar setiap pekan. Efisiensi alur biasanya sudah tinggi untuk tugas kecil, jadi bahaya utamanya adalah penerimaan informal yang menyembunyikan permintaan dalam obrolan.

**Bisnis kecil.** Satu orang mungkin berperan sebagai peminta, penyetuju, dan pelaksana, dan service desk yang dihosting mungkin hanya menawarkan pengatur waktu SLA. Ekspor riwayat status mentah, hitung waktu terlewat sendiri, dan simpan satu definisi untuk setiap jam. Temuan paling berguna biasanya berapa lama permintaan menunggu respons pemasok atau vendor.

**Perusahaan besar.** Banyak serah terima antara tim, pemasok, dan dewan persetujuan membuat waktu tunggu besar dan tersebar di berbagai organisasi. Sepakati kosakata bersama untuk mulai, berhenti, dan jeda, golongkan keadaan secara konsisten di alat ITSM dan rekayasa, dan segmentasikan menurut jenis pekerjaan dan kelas layanan. Perbandingan lintas tim bermakna hanya setelah definisi selaras, dan rekapitulasi sebaiknya dibangun dari distribusi, bukan dengan merata-ratakan rata-rata tim.

**Pemerintah dan sektor publik.** Waktu respons undang-undang, aturan pengadaan, dan rantai persetujuan menciptakan penantian yang tak dapat disingkirkan tim sendirian. Catat jam yang dikenakan dari luar terpisah dari yang internal, agar bagian keterlambatan yang dikendalikan organisasi dapat dilihat dan diperbaiki. Pelaporan publik atas lead time, dengan definisi sederhana, membangun kepercayaan dan mengungkap antrean yang diciptakan kebijakan (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasi utamanya adalah ukuran waktu mengubah keluhan samar (“memakan waktu selamanya”) menjadi masalah yang terletak (“permintaan menunggu enam hari untuk persetujuan”). Data yang sama memberi tim perkiraan yang jujur, sehingga komitmen kepada pelanggan didasarkan pada distribusi pekerjaan masa lalu, bukan harapan. Ia juga mengungkap di mana investasi pada otomatisasi, persetujuan, atau staf akan memperpendek waktu terlewat, yang sering berbeda dari tempat yang diharapkan orang.

Biayanya sederhana bila perangkat sudah mencatat perubahan status. Penyiapan melibatkan menyepakati definisi, menggolongkan keadaan, dan membangun tampilan distribusi dan diagram sebar. Biaya berjalan adalah waktu untuk merawat penggolongan keadaan, mengaudit alasan jeda pada sampel, dan mengadakan tinjauan bulanan. Bila riwayat status hilang atau tak andal, investasi pertama adalah pada instrumentasi yang dijelaskan dalam topik 1.5, Sumber data dan instrumentasi.

Imbal hasil tampak pada pola yang dapat diukur tim sendiri: cycle time persentil tinggi yang lebih pendek untuk suatu jenis pekerjaan, lebih sedikit eskalasi tentang item terlambat, lebih sedikit sengketa tentang jam siapa yang benar, dan jurang yang lebih kecil antara lead time dan cycle time. Jangan mengharapkan keuntungan tertentu dari tolok ukur. Penulis lean dan alur menggambarkan efisiensi alur rendah sebagai hal lazim, tetapi tidak ada angka terbitan yang sebaiknya diadopsi sebagai target untuk pekerjaan Anda sendiri tanpa data Anda. Total biaya kepemilikan didominasi waktu orang, jadi hitung jam pemilik metrik dan para peninjau.

## Anti-pola dan jebakan

- **Melaporkan rata-rata.** Satu pencilan panjang menyeret rata-rata dan item tipikal digambarkan keliru. Laporkan median dan persentil tinggi, dan plot item-itemnya.
- **Satu angka untuk semua pekerjaan.** Mencampur insiden, permintaan, dan fitur menghasilkan distribusi yang tidak menggambarkan apa-apa. Segmentasikan menurut jenis pekerjaan dan kelas layanan lebih dulu.
- **Hanya mengukur jam SLA.** Pengatur waktu yang berhenti selama keadaan menunggu melaporkan hasil yang tak pernah dialami pelanggan. Laporkan lead time terlewat dan porsi jeda di sampingnya.
- **Menetapkan target efisiensi alur.** Orang menaikkan rasio dengan melabeli ulang keadaan. Pakai sebagai diagnostik dan nilai keberhasilan dari waktu tunggu antrean bernama.
- **Memulai jam di tempat yang salah.** Jam yang dimulai saat penugasan atau pekerjaan pertama menyembunyikan antrean penerimaan. Mulai lead time pada permintaan dan cycle time pada komitmen, dan terbitkan keduanya.
- **Membandingkan tim dengan cycle time.** Pekerjaan berbeda, keadaan berbeda, dan definisi berbeda membuat peringkat tak bermakna dan mengundang manipulasi. Bandingkan tim dengan riwayatnya sendiri, dan bandingkan layanan hanya setelah definisi selaras.
- **Mengabaikan item terbuka.** Cycle time hanya menghitung pekerjaan yang selesai, jadi item macet tak terlihat sampai berakhir. Lacak usia item yang masih berjalan (lihat topik 2.1, Ukuran alur).
- **Mengubah definisi diam-diam.** Tren lalu merekam perubahan pada instrumen. Catat setiap perubahan dan tandai pada bagan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | Orang mengutip durasi dari ingatan; tiap orang memulai jam secara berbeda | Beberapa tim mendefinisikan cycle time pada papannya; tim ITSM mengutip waktu SLA | Satu definisi tertulis tentang lead time, cycle time, dan jeda yang dipakai semua tim | Perubahan definisi dicatat dan riwayat disajikan ulang dari peristiwa mentah | Definisi diselaraskan dengan pemasok dan pelanggan dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Pelaporan dan analisis | Rata-rata di slide, dirakit dengan tangan | Beberapa tim menunjukkan median atau bagan dari alat | Median dan persentil tinggi, dengan diagram sebar, disegmentasi menurut jenis pekerjaan | Distribusi diplot tren dan ditinjau dengan ritme; perkiraan ditarik darinya | Data alur antartim dan pemasok digabung untuk memperkirakan komitmen ujung ke ujung |
| Penantian dan efisiensi alur | Menunggu tidak dibedakan dari bekerja | Kolom terhalang ada di beberapa papan | Setiap status digolongkan aktif atau menunggu; efisiensi alur dihitung pada semua item selesai | Antrean terbesar diperiksa dan didanai untuk perbaikan; alasan jeda diaudit | Antrean, persetujuan, dan serah terima dirancang ulang bersama tim dan pemasok yang menciptakannya |
| Pemakaian dalam keputusan | Angka ditunjukkan pada tinjauan kuartalan dan tak ditindak | Tim membahas cycle time dalam retrospektif | Target layanan ditetapkan dari distribusi yang teramati | Target dipasangkan dengan pagar pembatas dan ditinjau untuk manipulasi | Pelanggan melihat rentang jujur, dan gagasan perbaikan datang dari semua orang yang menyentuh pekerjaan |

## Daftar periksa

- [ ] Setiap ukuran waktu memiliki peristiwa awal, peristiwa akhir, dan daftar pengecualian tertulis di register metrik.
- [ ] Lead time dan cycle time keduanya dilaporkan, dan setiap bagan diberi label yang ditampilkannya.
- [ ] “Selesai” didefinisikan untuk setiap jenis pekerjaan dan disepakati dengan peminta.
- [ ] Hasil dilaporkan sebagai median dan persentil tinggi, dan item-itemnya diplot.
- [ ] Data disegmentasi menurut jenis pekerjaan dan, bila relevan, kelas layanan.
- [ ] Setiap status digolongkan aktif, menunggu, atau selesai, dan penggolongan ditinjau tiap kuartal.
- [ ] Status jeda, siapa yang boleh memakainya, dan alasannya tertulis dan diaudit pada sampel.
- [ ] Waktu terlewat dan waktu SLA ditampilkan berdampingan, dengan porsi jeda.
- [ ] Efisiensi alur dipakai sebagai diagnostik dan tidak ada di kartu skor.
- [ ] Perubahan definisi dicatat dan ditandai pada bagan.
- [ ] Usia item terbuka ditinjau bersama cycle time yang selesai.

## Prompt AI

**Susun aturan jam untuk jenis pekerjaan.**

```text
Kami menangani [work type, for example standard access requests] di [tool or
tools]. Status alur kerjanya adalah [list of statuses]. Susun aturan jam tertulis
untuk lead time dan cycle time: peristiwa yang memulai setiap jam, peristiwa yang
menghentikannya, status mana yang menjeda atau mengecualikan waktu, dan apa yang
terjadi pada item yang dibatalkan dan dibuka kembali. Tunjukkan status yang
maknanya ambigu dan pertanyaan yang harus saya jawab sebelum aturan final. Jangan
mengarang fitur alat kami atau nilai acuan. Daftar asumsi Anda.
```

**Golongkan status sebagai aktif atau menunggu.**

```text
Berikut alur kerja untuk [team or service]: [statuses with a one-line meaning for
each]. Untuk setiap status, usulkan apakah ia kerja aktif, menunggu, atau selesai,
dan jelaskan alasannya. Tandai status yang mencampur bekerja dan menunggu, dan
sarankan cara memecahnya dengan perubahan terkecil pada alur kerja. Katakan
bagaimana penggolongan itu akan mengubah perhitungan efisiensi alur. Jangan
berasumsi berapa lama item tinggal di tiap status. Daftar asumsi Anda.
```

**Analisis sekumpulan cycle time.**

```text
Di bawah ini cycle time dalam [unit] untuk [number] item selesai berjenis [work
type], dengan tanggal selesai: [data]. Gambarkan distribusinya memakai median dan
persentil [percentile, for example 85th], identifikasi gugusan atau hanyutan dari
waktu ke waktu, dan sarankan pertanyaan untuk diajukan kepada tim tentang item
yang lambat. Rekomendasikan berapa banyak item yang saya butuhkan agar persentil
tepercaya, dan jelaskan penalarannya. Jangan mengarang nilai acuan atau
membandingkan dengan organisasi lain. Daftar asumsi Anda.
```

**Tinjau sebuah metrik untuk manipulasi.**

```text
Kami melaporkan [metric, for example flow efficiency] untuk [team or service],
didefinisikan sebagai [definition and clocks]. Orang dapat memengaruhinya dengan
[known behaviors, if any]. Daftar cara yang masuk akal angka itu dapat
dimanipulasi atau disalahbaca, pagar pembatas metrik atau praktik berpasangan
untuk masing-masing, dan sampel catatan yang harus saya baca dengan tangan untuk
memeriksa. Jangan mengarang statistik tentang seberapa sering manipulasi terjadi.
Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan ukuran waktu dan pagar pembatas yang harus berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa ukuran waktu yang disunting menyatakan jam, pengecualian, dan vektor manipulasinya.

## Poin penting

- Lead time adalah penantian pelanggan dan cycle time adalah penantian tim, jadi simpan keduanya dan periksa jurang di antaranya.
- Tulis aturan mulai, berhenti, dan jeda untuk setiap jam, dan perlakukan perubahan definisi sebagai peristiwa.
- Laporkan median dan persentil tinggi, plot item-itemnya, dan segmentasikan menurut jenis pekerjaan sebelum membandingkan apa pun.
- Efisiensi alur biasanya rendah karena sebagian besar waktu terlewat adalah menunggu, jadi pakai untuk menemukan antrean dan hindari menjadikannya target.
- Tampilkan porsi jeda di samping hasil tingkat layanan mana pun yang mengecualikan waktu terjeda.
- Kurangi pekerjaan dalam proses dan singkirkan serah terima untuk mempersingkat waktu, karena menyuruh orang bergegas tidak mengubah antrean.

## Referensi dan bacaan lanjutan

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
