# Metrik kualitas pemantauan dan peringatan

**Peringatan adalah permintaan atas perhatian seseorang, jadi ukur pemantauan dari seberapa sering permintaan itu layak dibuat, seberapa banyak masalah nyata yang ditangkapnya, dan berapa banyak tidur dan kepercayaan yang dibiayakannya.**

## Gambaran umum dan motivasi

Pemantauan adalah pengumpulan, pemrosesan, dan penampilan data waktu nyata tentang suatu sistem. [Pemantauan sistem](https://en.wikipedia.org/wiki/System_monitoring) menjawab pertanyaan “apakah layanan berfungsi seperti yang dibutuhkan pengguna?” Peringatan adalah titik tempat data itu meminta manusia melakukan sesuatu. Kebanyakan tim mengukur kegiatan pertama dengan buruk atau tidak sama sekali, dan mengukur kegiatan kedua hanya lewat keluhan. Topik ini memberi Anda himpunan kecil ukuran untuk keduanya: apakah pemantauan melihat kegagalan yang penting, dan apakah peringatan yang dimunculkannya layak mendapat perhatian yang dituntutnya.

Beberapa istilah dulu. Dalam kosakata ITIL 4, peristiwa adalah perubahan keadaan yang bermakna bagi pengelolaan layanan, dan manajemen peristiwa adalah praktik mendeteksi peristiwa, memutuskan mana yang penting, dan memilih respons. Peringatan adalah pemberitahuan kepada manusia, disampaikan sebagai panggilan, pesan, atau tiket. Panggilan (page) adalah peringatan yang menginterupsi seseorang seketika. Positif palsu adalah peringatan yang menyala ketika tak ada yang butuh perhatian, dan negatif palsu adalah kegagalan yang tak dilaporkan peringatan mana pun; kedua istilah berasal dari bahasa [positif palsu dan negatif palsu](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Peringatan yang dapat ditindak adalah peringatan tempat seseorang punya tindakan berguna untuk diambil, dan mengambilnya atau dengan sengaja memilih tidak karena alasan tercatat.

Kedua sisi pemantauan saling tarik. Menambah peringatan setelah setiap insiden membangun dinding kebisingan; memangkasnya untuk menenangkan berisiko membuat hening selama kegagalan yang penting. Bahasa [presisi dan recall](https://en.wikipedia.org/wiki/Precision_and_recall) cocok dengan baik. Presisi bertanya porsi peringatan yang dimunculkan yang layak dimunculkan. Recall bertanya porsi masalah nyata yang ditangkap peringatan. Mutu peringatan adalah keseimbangan keduanya, dan metrik yang hanya mengawasi satu mengundang tim mengorbankan yang lain. [Rasio sinyal terhadap derau](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) menangkap ketegangan yang sama.

Biaya manusia adalah alasan topik ini ada dalam buku metrik layanan. [Kelelahan alarm](https://en.wikipedia.org/wiki/Alarm_fatigue) adalah kecenderungan yang terdokumentasi baik pada orang yang terpapar banyak alarm, sebagian besar tak penting, untuk menjadi tak peka dan lambat merespons yang penting. Ini pertama dipelajari dalam setelan klinis dan berlaku bagi rotasi [siaga](https://en.wikipedia.org/wiki/On-call) mana pun yang terlalu sering dipanggil oleh peringatan yang tak berujung ke mana-mana. Penanggap yang lelah melewatkan insiden nyata dan akhirnya meninggalkan rotasi.

Pandangannya berbeda di antara dua tradisi yang digabungkan buku ini. ITIL 4 menempatkan pekerjaan ini dalam praktik manajemen pemantauan dan peristiwa, dengan tautan ke manajemen insiden dan manajemen tingkat layanan. Perhatiannya adalah peristiwa dideteksi, diklasifikasi, dan dirutekan agar insiden ditemukan awal dan ditangani secara konsisten. [Rekayasa keandalan situs (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) mendekatinya dari ujung lain: buku Google *Site Reliability Engineering* berpendapat bahwa panggilan harus mendesak, penting, dapat ditindak, dan nyata, dan bahwa semua yang lain milik tiket atau dasbor. Tim agile bertemu dengannya sebagai kesepakatan kerja: siapa yang dibangunkan, karena apa, dan siapa yang memperbaiki peringatan yang salah. Metrik di bawah meminjam dari ketiganya dan menjaga satu aturan: metrik menggambarkan rotasi, layanan, atau aturan peringatan, tidak pernah individu.

Topik ini tidak mengulang tetangganya. Waktu insiden milik topik 3.3, Waktu respons dan penyelesaian insiden, insiden besar milik topik 3.4, Metrik insiden besar, tujuan dan anggaran kesalahan milik topik 5.2, SLI, SLO, dan anggaran kesalahan, dan beban manusia milik topik 5.7, Metrik pekerjaan berulang dan siaga. Di sini pokok bahasannya adalah mutu sinyal yang memulai semua itu. Instrumentasi dibahas dalam topik 1.5, Sumber data dan instrumentasi.

## Prinsip utama

- **Panggil untuk gejala yang dirasakan pengguna; tiket atau dasbor untuk sisanya.** Peringatan atas apa yang dialami pengguna (galat, kelambatan, ketidaktersediaan) tetap berguna saat sistem berubah. Peringatan atas sebab (disk penuh, CPU sibuk) hanya berguna bila memprediksi gejala dan seseorang dapat bertindak sebelum tiba.
- **Setiap peringatan harus berujung pada tindakan.** Jika respons yang tepat atas peringatan adalah tidak berbuat apa-apa, peringatan sebaiknya diubah, diturunkan menjadi tiket, atau dihapus. Ukur porsi yang berujung pada tindakan, dan perlakukan sisanya sebagai cacat dalam pemantauan.
- **Ukur presisi dan recall.** Menghitung hanya derau menghargai keheningan, dan menghitung hanya cakupan menghargai volume. Keduanya bersama menggambarkan mutu, dan masing-masing bertindak sebagai pagar pembatas bagi yang lain.
- **Perlakukan setiap aturan peringatan sebagai produk dengan pemilik.** Aturan punya tujuan, ambang, runbook, dan tanggal tinjauan. Aturan tanpa pemilik menumpuk, dan derau yang dihasilkannya milik tak seorang pun.
- **Laporkan rotasi dan layanan, tidak pernah orang.** Beban peringatan adalah sifat bagaimana sistem dan rotasi dirancang. Menyebut individu mengubah masalah desain menjadi masalah menyalahkan dan menyembunyikan perbaikan sebenarnya.
## Definisi metrik

Metrik di bawah dipilih sebagai satu himpunan. Volume saja tak bermakna, kemampuan ditindak memberi tahu apakah volume adalah masalah, dan cakupan serta waktu deteksi memberi tahu apa yang disembunyikan keheningan. Semuanya dihitung per layanan atau per rotasi, dan semuanya memakai catatan peringatan dari alat pemantauan dan paging yang digabung dengan catatan insiden dan tiket.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume peringatan | Jumlah peringatan yang memberi tahu manusia, dibagi panggilan dan tiket | Hitungan pemberitahuan berbeda yang disampaikan ke rotasi atau antrean pada periode itu; pengulangan peringatan terbuka yang sama dikelompokkan menjadi satu; peringatan yang ditangani sepenuhnya oleh otomatisasi tanpa pemberitahuan manusia dikecualikan; laporkan per rotasi per pekan, dan porsi di luar jam kerja terpisah | peringatan per rotasi-pekan | Alat paging dan perutean peringatan | Manajemen pemantauan dan peristiwa | Kesepakatan kerja tim tentang siaga | Mingguan |
| Tingkat peringatan yang dapat ditindak | Porsi peringatan yang diikuti tindakan berguna oleh seseorang | Peringatan dengan tindakan tercatat (perbaikan, mitigasi, eskalasi, atau perubahan pada aturan peringatan) / peringatan yang ditinjau pada periode itu; peringatan yang selesai otomatis sebelum pengakuan apa pun dihitung tidak dapat ditindak; peringatan yang belum ditinjau dilaporkan sebagai hitungan terpisah, tidak dibuang | persen | Catatan peringatan digabung dengan label tinjauan, tiket, atau insiden | Manajemen pemantauan dan peristiwa; manajemen insiden | Tindakan perbaikan tim atas operasi | Tinjauan mingguan, tren bulanan |
| Tingkat positif palsu | Porsi peringatan yang menyala ketika tak ada masalah | Peringatan berlabel positif palsu dalam tinjauan / peringatan yang ditinjau pada periode itu; “positif palsu” berarti kondisi bukan kerusakan dan tak ada yang ingin diberi tahu; masalah nyata yang terlalu kecil untuk ditindak bukan positif palsu | persen | Label tinjauan peringatan | Manajemen pemantauan dan peristiwa | Tinjauan derau retrospektif | Bulanan |
| Cakupan deteksi | Porsi layanan dalam lingkup yang punya setidaknya satu peringatan teruji pada gejala yang menghadap pengguna | Layanan dengan peringatan gejala yang dijalankan oleh uji atau peristiwa nyata dalam 12 bulan terakhir / layanan dalam lingkup katalog layanan; daftar layanan dalam lingkup ditetapkan pada awal periode | persen | Katalog layanan, inventaris aturan peringatan, catatan uji | Manajemen konfigurasi layanan; manajemen pemantauan dan peristiwa | Definisi selesai untuk layanan baru | Kuartalan |
| Porsi deteksi terpantau | Porsi insiden yang terdeteksi pemantauan sebelum dilaporkan pengguna atau rekan | Insiden yang sinyal pertamanya adalah peringatan / insiden pada periode itu; jam adalah waktu insiden dibuka, dan insiden tanpa sinyal pertama tercatat dilaporkan sebagai tidak diketahui, bukan sebagai terdeteksi | persen | Catatan insiden dengan kolom sinyal pertama, lini masa peringatan | Manajemen insiden | Tinjauan insiden (pembelajaran pasca-insiden) | Bulanan |
| Waktu mendeteksi (TTD) | Waktu terlewat antara awal dampak pengguna dan peringatan pertama yang memberi tahu manusia | Waktu peringatan pertama yang memberi tahu manusia dikurangi waktu awal dampak, dengan awal dampak adalah waktu paling awal indikator tingkat layanan dilanggar, sebagaimana ditetapkan dalam tinjauan insiden; laporkan median dan persentil ke-95; insiden tanpa peringatan dikecualikan dan dihitung terpisah | menit | Tinjauan insiden, lini masa peringatan, riwayat indikator tingkat layanan | Manajemen insiden; manajemen pemantauan dan peristiwa | Tinjauan pasca-insiden | Bulanan, per insiden |
| Konsentrasi peringatan | Porsi volume peringatan yang dihasilkan segelintir aturan paling bising | Peringatan dari lima aturan dengan peringatan terbanyak / semua peringatan pada periode itu; peringatan yang sama dikelompokkan sekali; hitungan lima aturan adalah konvensi yang boleh diubah tim bila menyatakan alasannya | persen | Inventaris aturan peringatan dan catatan paging | Perbaikan berkelanjutan; manajemen pemantauan dan peristiwa | Backlog perbaikan retrospektif | Bulanan |
| Kemutakhiran aturan peringatan | Porsi aturan paging yang punya pemilik, tautan runbook, dan tinjauan dalam interval yang disepakati | Aturan paging yang memenuhi ketiga syarat / semua aturan paging; aturan yang dinonaktifkan pada periode itu dikecualikan | persen | Inventaris aturan peringatan | Manajemen pengetahuan; manajemen pemantauan dan peristiwa | Kesepakatan kerja tentang kesiapan operasional | Kuartalan |

Volume peringatan butuh konteks, jadi baca di samping tingkat peringatan yang dapat ditindak. Waktu mendeteksi memakai awal dampak pengguna, bukan tiket, karena jam tiket dimulai setelah deteksi; awal dampak adalah estimasi dari tinjauan insiden dan sebaiknya dilabeli demikian. Tingkat positif palsu dan tingkat peringatan yang dapat ditindak bukan komplemen, karena peringatan dapat benar dan tetap tidak layak waktu seseorang.

## Rekomendasi

### Putuskan apa yang pantas mendapat panggilan

**1. Tulis kebijakan paging dan jaga tetap pendek.** Nyatakan dalam satu paragraf apa yang layak mendapat panggilan (gejala yang dirasakan pengguna sekarang atau akan segera, yang dapat ditindak seseorang) dan apa yang tidak. Semua yang lain pergi ke antrean tiket atau dasbor. Bab buku Google SRE tentang memantau sistem terdistribusi adalah titik awal yang baik (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan).

**2. Beri peringatan pada gejala, dan simpan sebab untuk diagnosis.** Panggilan untuk “tingkat galat di atas ambang yang disepakati” adalah panggilan tentang pengguna. Panggilan untuk “CPU tinggi” adalah panggilan tentang tebakan. Simpan sinyal tingkat sebab di dasbor tempat penanggap akan melihat setelah peringatan gejala menyala, dan naikkan satu menjadi panggilan hanya bila ia andal memprediksi gejala dengan peringatan cukup untuk bertindak.

**3. Kaitkan ambang paging dengan tujuan tingkat layanan.** Di mana layanan punya [tujuan tingkat layanan (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), beri peringatan pada laju anggaran kesalahan dikonsumsi alih-alih pada ambang mentah. Bab SRE Workbook tentang memberi peringatan pada SLO menjelaskan peringatan laju pembakaran dan pertukaran antara presisi, recall, waktu deteksi, dan waktu reset. Pendekatan ini memanggil atas apa yang mengancam tujuan dan tetap diam tentang kedipan singkat yang tidak.

### Tinjau setiap peringatan menurut irama

**4. Beri label setiap peringatan dalam tinjauan singkat yang rutin.** Sisihkan lima belas menit tiap pekan untuk setiap rotasi melihat apa yang menyala. Untuk tiap peringatan, catat satu label: dapat ditindak, positif palsu, nyata tetapi tak layak panggilan, atau duplikat. Label adalah data untuk tingkat peringatan yang dapat ditindak dan tingkat positif palsu, dan tinjauan adalah tempat aturan bising diperbaiki keesokan harinya alih-alih kuartal berikutnya.

**5. Buat tinjauan menghasilkan perubahan.** Tiap pekan, pilih setidaknya satu aturan untuk disetel, diturunkan, digabung, atau dihapus, dan catat perubahan di backlog tim sebagai pekerjaan biasa.

**6. Hapus tanpa takut.** Tim mempertahankan peringatan karena menghapus terasa berisiko dan tak ada yang ingat mengapa ia ada. Wajibkan setiap aturan paging membawa tujuan dan pemilik, dan sepakati bahwa aturan yang tak pernah berujung pada tindakan dalam periode yang dinyatakan dihapus atau diturunkan, dengan perubahan dicatat agar dapat dibalikkan. Metrik kemutakhiran aturan membuat disiplin itu terlihat.

### Ukur apa yang terlewat pemantauan

**7. Lacak porsi insiden yang ditemukan pengguna lebih dulu.** Setelah tiap insiden, catat bagaimana pertama kali diketahui: peringatan, rekan, pelanggan, tiket dukungan, atau pemeriksaan rutin. Porsi yang ditemukan pemantauan adalah ukuran praktis terdekat untuk recall. Ia tidak lengkap, karena insiden yang tak diketahui siapa pun tidak masuk sampel, jadi pasangkan dengan uji berkala atas peringatan itu sendiri.

**8. Perkirakan waktu mendeteksi dengan jujur.** Tetapkan awal dampak pengguna dalam tinjauan pasca-insiden dari riwayat indikator tingkat layanan, bukan dari kapan seseorang mengetik tiket. Laporkan median dan persentil tinggi, dan tampilkan insiden yang tak punya peringatan sama sekali sebagai hitungan terpisah. Satu rata-rata menyembunyikan kasus tipikal dan ekor yang buruk (lihat topik 1.6, Literasi statistik untuk metrik layanan, dan topik 3.3, Waktu respons dan penyelesaian insiden).

**9. Uji peringatan yang Anda andalkan.** Cakupan deteksi hanya kredibel bila peringatan terlihat berfungsi. Sertakan pemeriksaan dalam game day atau latihan rilis yang dengan sengaja menyebabkan gejala dan mengonfirmasi bahwa peringatan yang tepat menyala, mencapai rotasi yang tepat, dan menaut ke runbook yang dapat dipakai. Peringatan yang tak pernah dijalankan adalah harapan, bukan kendali (lihat topik 5.6, Metrik kelangsungan layanan).

### Jaga jalur sinyal tetap sehat

**10. Pantau pemantauan.** Kegagalan senyap sistem pemantauan tampak persis seperti layanan sehat. Tambahkan pemeriksaan heartbeat yang memanggil bila saluran peringatan berhenti menyampaikan, dan catat seberapa sering saluran itu sendiri gagal.

**11. Kelompokkan, hilangkan duplikat, dan tautkan sebelum Anda menghitung.** Kelompokkan peringatan terkait menjadi satu, tekan pengulangan peringatan yang sudah terbuka, dan rutekan masing-masing ke rotasi pemilik. Tautkan setiap peringatan ke runbook dan ke insiden atau tiket yang dibuatnya, karena penggabungan itu memungkinkan Anda menghitung tingkat peringatan yang dapat ditindak dan porsi deteksi terpantau tanpa penghitungan manual (lihat topik 1.5, Sumber data dan instrumentasi).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Volume peringatan | Menaikkan ambang, menambah jeda panjang, atau memindahkan peringatan dari panggilan ke antrean senyap agar hitungan turun sementara masalah tak terlihat; memecah atau menggabung peringatan untuk mengubah hitungan | Porsi deteksi terpantau dan waktu mendeteksi; aturan bahwa setiap penurunan dicatat dengan alasannya dan ditinjau setelah satu kuartal |
| Tingkat peringatan yang dapat ditindak | Melabeli peringatan dapat ditindak setelah kejadian, atau mengambil tindakan remeh (komentar, pengakuan) untuk memenuhi syarat; membiarkan peringatan bising tak ditinjau agar tak pernah masuk penyebut | Hitungan peringatan yang belum ditinjau ditampilkan di samping tingkat; pemeriksaan sampel oleh seseorang di luar rotasi; definisi “tindakan berguna” tertulis |
| Tingkat positif palsu | Mendefinisikan positif palsu secara sempit sehingga peringatan “nyata tetapi tak berguna” dihitung benar; menutup peringatan bising tanpa label | Tingkat peringatan yang dapat ditindak dan label “nyata tetapi tak layak panggilan” dilacak terpisah; pengambilan sampel berkala peringatan tertutup |
| Cakupan deteksi | Menambah peringatan remeh (ping) ke setiap layanan untuk mengklaim cakupan; menghitung peringatan yang belum pernah diuji | Syarat bahwa peringatan mengawasi gejala yang menghadap pengguna dan telah dijalankan dalam 12 bulan terakhir; porsi deteksi terpantau |
| Porsi deteksi terpantau | Mencatat setiap insiden sebagai “terdeteksi pemantauan” meski pengguna melapor lebih dulu; membuat peringatan setelah kejadian lalu mengutipnya; membiarkan kolom sinyal pertama kosong untuk menghindari angka buruk | Hitungan tidak diketahui ditampilkan di samping porsi; bukti sinyal pertama diambil dari lini masa peringatan, bukan ingatan; insiden yang dilaporkan pelanggan ditautkan dari catatan dukungan |
| Waktu mendeteksi (TTD) | Menyatakan awal dampak lebih lambat dari yang sebenarnya; mengecualikan insiden tanpa peringatan; melaporkan rata-rata untuk menyembunyikan ekor | Awal dampak diambil dari riwayat indikator tingkat layanan; insiden tanpa peringatan dihitung dan ditampilkan; median dan persentil ke-95 dilaporkan bersama |
| Konsentrasi peringatan | Memecah satu aturan bising menjadi beberapa agar tak ada yang masuk lima teratas; mengganti nama aturan | Laporkan konsentrasi menurut kerusakan atau layanan yang mendasari selain menurut aturan; lacak total volume dan tingkat peringatan yang dapat ditindak di sampingnya |
| Kemutakhiran aturan peringatan | Menambah pemilik placeholder, tautan runbook kosong, atau tinjauan stempel karet untuk memenuhi syarat | Pemeriksaan sampel bahwa tautan runbook terselesaikan dan dipakai dalam respons nyata; praktik menguji runbook dalam game day |

Pembacaan yang sehat menunjukkan beberapa hal bersama. Volume peringatan per rotasi stabil atau menurun dan berada dalam tingkat yang dipilih tim sebagai berkelanjutan. Tingkat peringatan yang dapat ditindak naik selama beberapa bulan seiring aturan paling bising disetel. Porsi deteksi terpantau tinggi dan waktu mendeteksi pendek dan tidak memanjang saat volume turun, yang membuktikan bahwa ketenangan diperoleh dan bukan dibeli. Cakupan deteksi tumbuh karena layanan diuji, bukan karena peringatan remeh ditambahkan. Jika volume turun sementara porsi deteksi atau waktu mendeteksi memburuk, tim telah menukar recall dengan ketenangan, dan pagar pembatas yang mengungkapkannya.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Sedikit panggilan berbasis gejala | Malam tenang, kepercayaan tinggi pada tiap panggilan, mudah dijaga tetap terkini | Risiko deteksi terlambat untuk masalah yang tumbuh lambat; butuh kebiasaan tiket dan dasbor yang baik untuk sisanya |
| Banyak peringatan sensitif | Peringatan dini masalah tingkat sebab; lebih sedikit insiden terlewat | Kelelahan alarm, pengakuan lebih lambat, dan pergantian staf dari rotasi siaga |
| Peringatan laju pembakaran SLO | Panggilan terikat pada apa yang mengancam tujuan; lebih sedikit kedipan | Butuh indikator baik dan tujuan yang disepakati; butuh penyetelan untuk menyeimbangkan waktu deteksi dan presisi |
| Tinjauan peringatan mingguan | Umpan balik cepat; aturan bising diperbaiki cepat | Memakan waktu tiap pekan; menjadi teater bila tak ada perubahan menyusul |
| Pelabelan oleh manusia | Menangkap pertimbangan yang tak dimiliki alat mana pun | Subjektif; label hanyut antarpeninjau dan rotasi kecuali definisi tertulis |
| Penekanan dan pengelompokan otomatis | Memangkas derau pada skala; mengurangi panggilan berulang | Dapat menyembunyikan sinyal nyata bila aturan salah; butuh pemantauan dan tinjauannya sendiri |

Setiap pilihan menukar presisi dengan recall, dan pertukaran itu sebaiknya dibuat dengan sengaja dan dituliskan per layanan, karena konteks itulah yang memungkinkan siapa pun membaca angka dengan adil. Layanan dengan konsekuensi parah dari kegagalan yang terlewat dapat menerima tingkat dapat-ditindak yang lebih rendah demi peringatan lebih awal, dengan lapisan triase yang mengirim peringatan tambahan ke antrean tiket pada malam hari.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Untuk apa kita mau dibangunkan, dan mana dari panggilan bulan lalu yang memenuhi standar itu?** Tulis kebijakan paging dalam satu atau dua kalimat, lalu ambil panggilan bulan lalu dan uji masing-masing terhadapnya. Latihan ini lebih berharga daripada persentase yang dihasilkannya, karena ketidaksepakatan mengungkap di mana ekspektasi tim berbeda. Catat yang tak perlu sebagai kandidat untuk diturunkan.

**2. Jika aturan peringatan paling bising lenyap besok, apa yang akan hilang dari kita?** Ajukan pertanyaan untuk setiap dari lima aturan teratas menurut volume. Sering tak ada yang dapat menyebut kegagalan spesifik yang pernah ditangkap aturan itu, dan itu tanda ia dapat disetel atau dihapus. Di mana seseorang bisa, tanyakan apakah kegagalan itu juga akan memicu peringatan gejala.

**3. Bagaimana kita mengetahui apa yang terlewat pemantauan?** Lihat beberapa insiden terakhir dan tanyakan siapa yang menyadari lebih dulu dan berapa lama dampak berlangsung sebelum itu. Jawabannya memberi porsi deteksi terpantau dan waktu mendeteksi kasar tanpa perkakas baru. Bahas sinyal apa yang akan menangkap masing-masing lebih awal.

**4. Apakah beban siaga kita berkelanjutan, dan bagaimana kita tahu?** Sepakati apa arti berkelanjutan untuk rotasi, seperti batas panggilan di luar jam kerja per pekan, dan tinjau tren menurut rotasi, bukan menurut orang. Jika beban di atas tingkat yang disepakati, perlakukan sebagai cacat layanan dan rencanakan pekerjaan untuk menguranginya. Jaga ukuran konsisten dengan topik 5.7, Metrik pekerjaan berulang dan siaga.

**5. Peringatan kita mana yang belum pernah diuji, dan bagaimana kita dapat mengujinya dengan aman?** Daftar layanan yang bergantung pada satu peringatan gejala dan tanyakan apakah ada yang pernah melihatnya menyala dalam keadaan nyata atau latihan. Rencanakan satu uji dan periksa jalur penuh: deteksi, perutean, pemberitahuan, runbook. Pertimbangkan apakah saluran peringatan yang gagal akan terlihat sama sekali.

**6. Bagaimana angka ini dapat dimanipulasi di sini, dan apa yang akan kita perhatikan?** Minta tim menggambarkan, dengan jujur, bagaimana mereka bisa membuat setiap angka tampak lebih baik tanpa memperbaiki apa pun. Lalu sepakati pagar pembatas mana yang akan menunjukkannya dan siapa yang melihatnya. Menamai trik di muka membuatnya kurang menggoda (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Empat perspektif

### Tim produk dan pengiriman

Tim yang membangun dan menjalankan layanan memutuskan apa yang dilaporkannya tentang dirinya sendiri, jadi mutu peringatan dimulai dalam definisi selesai. Fitur baru yang dikirim bersama indikator dan peringatan teruji miliknya sendiri menghindari pemantauan yang ditempelkan setelah insiden pertama. Perlakukan penyetelan peringatan sebagai pekerjaan backlog biasa.

### Tim layanan dan operasi

Tim operasi memegang pager dan merasakan biayanya lebih dulu, jadi mereka memiliki irama tinjauan, pelabelan, dan heartbeat saluran. Ketika peringatan salah, perbaikannya milik pemilik aturan, bukan siapa pun yang menerima panggilan.

### Kepemimpinan dan tata kelola

Pemimpin dapat meminta angka deteksi dan kemampuan ditindak menurut layanan, mendanai waktu penyetelan, dan menolak target pada volume peringatan yang menghargai keheningan. Volume yang menurun adalah kabar baik hanya jika porsi deteksi dan waktu mendeteksi tetap stabil. Batas siaga berkelanjutan adalah keputusan penstafan dan desain, bukan motivasi.

### Pelanggan dan pengguna

Pelanggan tidak pernah melihat peringatan; mereka melihat apakah layanan gagal dan berapa lama diperbaiki. Pemantauan yang baik muncul sebagai insiden yang diperbaiki sebelum mereka menyadari, dan lebih sedikit kasus tempat pelanggan melapor lebih dulu. Di mana organisasi memakai ukuran pengalaman (lihat topik 5.1, Metrik SLA, OLA, dan XLA), porsi insiden yang pertama dilaporkan pengguna adalah indikator langsung jurang pengalaman.

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan platform pemesanan dengan empat tim produk dan satu tim platform yang mendukung rotasi siaga. Semua angka dalam contoh ini bersifat ilustratif. Selama empat pekan (ilustratif) rotasi menerima 240 panggilan, 70 di antaranya antara pukul 22.00 dan 07.00. Tim meninjau setiap panggilan memakai empat label: dapat ditindak, positif palsu, nyata tetapi tak layak panggilan, dan duplikat.

Tinjauan menunjukkan tingkat peringatan yang dapat ditindak 31 persen (ilustratif) dan tingkat positif palsu 22 persen (ilustratif). Lima aturan menghasilkan 58 persen panggilan (ilustratif), dan yang terbesar adalah ambang disk pada server batch yang selalu pulih sendiri. Porsi deteksi terpantau kuartal sebelumnya 62 persen (ilustratif), dan median waktu mendeteksi 14 menit (ilustratif) dengan persentil ke-95 sebesar 51 menit (ilustratif).

Tim menurunkan tiga aturan bising ke antrean tiket, menggabung duplikat agar satu kerusakan menghasilkan satu panggilan, mengganti peringatan hitungan galat mentah pada checkout dengan peringatan laju pembakaran anggaran kesalahan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan), dan menambah peringatan gejala untuk email konfirmasi pesanan, celah di balik dua insiden yang dilaporkan pelanggan. Setiap perubahan adalah item backlog dengan pemilik. Empat pekan kemudian panggilan turun menjadi 96 (ilustratif) dan tingkat dapat-ditindak naik menjadi 64 persen (ilustratif), sementara porsi deteksi naik menjadi 71 persen (ilustratif) dan median waktu mendeteksi bertahan pada 14 menit. Ketenangannya tampak diperoleh.

Risiko manipulasi muncul di bulan ketiga. Seorang manajer baru menetapkan tujuan informal kurang dari 60 panggilan per empat pekan, dan satu rotasi mencapainya dengan memperpanjang jeda pada peringatan galat checkout. Porsi deteksinya turun menjadi 55 persen (ilustratif) dan waktu mendeteksi persentil ke-95 naik menjadi 80 menit (ilustratif). Karena pagar pembatas duduk di samping volume, tinjauan menangkapnya. Tim menarik target volume, memulihkan peringatan, dan mencatat kasus di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

## Sudut pandang sektor

**Startup.** Dengan segelintir insinyur semuanya siaga, prioritasnya kebijakan paging pendek dan beberapa peringatan gejala pada jalur yang menghasilkan uang. Tinjauan sepuluh menit hari Senin atas apa yang membangunkan orang sudah cukup. Risiko utamanya tanpa peringatan sama sekali, sehingga pelanggan adalah pemantauannya; hitung seberapa sering pelanggan memberi tahu Anda lebih dulu.

**Bisnis kecil.** Organisasi kecil sering mengandalkan pemantauan pemasok. Ukuran berguna adalah cakupan deteksi untuk beberapa sistem yang menghentikan bisnis dan porsi insiden yang ditemukan pengguna. Minta pemasok data peringatan yang menjadi hak Anda menurut kontrak.

**Perusahaan besar.** Organisasi besar punya banyak alat dan rotasi, dan tiap tim mungkin mendefinisikan “dapat ditindak” secara berbeda. Standarkan definisi dan label, tinjau di tingkat tim, dan agregasikan menurut layanan alih-alih menurut alat. Platform korelasi peristiwa mengurangi volume pada skala tetapi butuh pemeriksaan recall sendiri.

**Pemerintah dan sektor publik.** Sebagian layanan berjalan pada jam kantor dan yang lain, seperti sistem darurat atau tunjangan, berjalan terus-menerus. Cakupan deteksi dan peringatan teruji paling penting di mana kegagalan membawa konsekuensi hukum atau keselamatan, dan catatan uji dapat mendukung audit. Laporkan cakupan dan deteksi kepada badan pengawas, bukan hitungan peringatan mentah, yang mudah disalahbaca (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Alasan untuk berinvestasi bersifat praktis. Deteksi lebih baik memperpendek waktu pengguna terdampak. Lebih sedikit panggilan sia-sia melindungi tidur, mengurangi pergantian staf dari rotasi, dan menjaga perhatian untuk peringatan yang penting. Biaya mutu peringatan yang buruk sulit terlihat karena tersebar di tidur terganggu, respons lambat, dan kepergian insinyur berpengalaman.

Biaya mengumpulkan metrik ini kecil bila alat peringatan, paging, dan insiden dapat digabung, dan sedang bila label ditambahkan dengan tangan. Biaya utamanya adalah waktu tinjauan mingguan, pekerjaan penyetelan dan penghapusan, dan uji deteksi sesekali. Memangkas aturan tak terpakai juga memangkas biaya lisensi dan penyimpanan pemantauan, dan total biaya kepemilikan sebaiknya mencakup waktu orang.

Imbal hasil muncul dalam beberapa bulan sebagai rotasi lebih tenang, porsi deteksi terpantau yang naik, dan waktu mendeteksi yang tidak memburuk. Untuk mengubahnya menjadi uang, bandingkan biaya jam insiden dan pergantian rotasi dengan biaya tinjauan, memakai angka Anda sendiri. Jangan memakai rata-rata industri kecuali Anda dapat mengutip sumber terverifikasi.

## Anti-pola dan jebakan

- **Menargetkan volume peringatan.** Target pada hitungan menghargai keheningan dan mengundang menyembunyikan peringatan. Tetapkan target pada tingkat peringatan yang dapat ditindak dan porsi deteksi, dan pakai volume sebagai angka konteks dengan batas keberlanjutan yang dipilih tim.
- **Memberi peringatan pada setiap sebab.** Lusinan panggilan tingkat sebab menghasilkan derau dan tetap melewatkan gejala yang tak terpikir siapa pun. Beri peringatan pada gejala yang menghadap pengguna sebagai gantinya.
- **Menambah peringatan setelah setiap insiden dan tak pernah menghapus satu pun.** Pasangkan setiap peringatan baru dengan tinjauan atas peringatan yang dibuatnya mubazir.
- **Menghitung peringatan tanpa melabelinya.** Hitungan tanpa penilaian kegunaan tak dapat membedakan rotasi bising dari rotasi sibuk. Labeli sampel tiap pekan, meski hanya ada beberapa menit.
- **Memperlakukan cakupan sebagai hitungan peringatan.** Layanan dengan lima puluh peringatan sebab dan tanpa peringatan gejala tercakup buruk. Definisikan cakupan sebagai deteksi gejala yang teruji.
- **Memeringkat orang menurut panggilan yang ditangani atau diakui.** Itu menghukum anggota rotasi yang mengambil shift sulit dan mendorong menghindari pager. Laporkan menurut rotasi dan layanan, dan cari perbaikan desain.
- **Tidak pernah menguji jalur peringatan.** Peringatan yang belum terlihat berfungsi adalah asumsi. Sertakan uji peringatan dalam game day, dan pantau saluran itu sendiri.

## Model kematangan

| Dimensi | Memulai | Berkembang | Terstandar | Terkelola | Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Kebijakan paging dan kepemilikan aturan | Peringatan ditambah ad hoc; tak ada yang tahu mengapa banyak yang ada | Beberapa tim punya kebijakan dan pemilik untuk aturan mereka | Satu kebijakan paging pendek; setiap aturan paging punya pemilik dan runbook | Kemutakhiran aturan dilacak dan ditinjau; aturan tak terpakai dihapus menurut jadwal | Kebijakan dan kepemilikan disesuaikan antartim dan pemasok seiring layanan berubah |
| Pengukuran mutu peringatan | Keluhan tentang derau; tak ada hitungan | Volume dihitung beberapa tim; tanpa pelabelan | Tinjauan mingguan dengan label bersama; tingkat dapat-ditindak dan positif palsu dilaporkan menurut layanan | Tingkat diplot tren dan dipasangkan dengan ukuran deteksi; pekerjaan perbaikan didanai | Mutu dikaitkan lintas layanan dan pemasok; definisi direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Deteksi dan cakupan | Pelanggan dan rekan melaporkan sebagian besar masalah | Peringatan gejala pada beberapa layanan kunci | Cakupan deteksi dilacak dengan peringatan teruji; sinyal pertama dicatat untuk setiap insiden | Waktu mendeteksi dan porsi deteksi terpantau ditinjau dengan pagar pembatas; celah menjadi pekerjaan terencana | Deteksi diuji rutin lintas dependensi dan pemasok, termasuk saluran peringatan |
| Pemakaian dalam perbaikan | Perbaikan peringatan mengikuti malam terburuk | Perbaikan mengikuti insiden | Setiap tinjauan menghasilkan setidaknya satu perubahan | Perubahan dilacak hingga efeknya pada volume, kemampuan ditindak, dan deteksi | Beban rotasi, deteksi, dan anggaran kesalahan ditinjau bersama untuk mengarahkan investasi |

## Daftar periksa

- [ ] Kami punya kebijakan paging tertulis beberapa kalimat yang menyatakan apa yang layak mendapat panggilan.
- [ ] Setiap aturan paging punya pemilik, tujuan, dan tautan runbook.
- [ ] Setiap rotasi meninjau apa yang menyala setidaknya mingguan dan melabeli tiap peringatan.
- [ ] Setiap tinjauan menghasilkan setidaknya satu perubahan tercatat pada aturan.
- [ ] Kami melaporkan volume peringatan, tingkat dapat-ditindak, dan tingkat positif palsu menurut rotasi dan layanan, tidak pernah menurut orang.
- [ ] Setiap insiden mencatat bagaimana pertama kali terdeteksi, dengan opsi tidak diketahui.
- [ ] Kami memperkirakan awal dampak dari riwayat indikator tingkat layanan dan melaporkan median serta persentil ke-95 waktu mendeteksi.
- [ ] Setiap layanan dalam lingkup punya peringatan gejala yang telah diuji dalam 12 bulan terakhir.
- [ ] Pemeriksaan heartbeat memanggil kami bila saluran peringatan berhenti.
- [ ] Kami telah menyepakati beban di luar jam kerja yang berkelanjutan untuk setiap rotasi dan meninjaunya.
- [ ] Tak ada target yang ditetapkan pada volume peringatan saja.

## Prompt AI

**Tujuan: Susun kebijakan paging untuk suatu layanan dari indikator dan konsekuensinya.**

```text
Bantu saya menyusun kebijakan paging untuk layanan [service name].
Konteks: pengguna adalah [user group]; gejala yang menghadap pengguna yang kami
pedulikan adalah [symptoms, for example errors, latency, unavailability];
konsekuensi kegagalan yang terlewat adalah [consequences]; rotasi siaga adalah
[rotation description, for example hours and team size].
Tulis kebijakan pendek (di bawah 200 kata) yang menyatakan apa yang layak
mendapat panggilan, apa yang pergi ke antrean tiket, dan apa yang tetap di dasbor.
Jangan mengarang ambang atau nilai acuan; sisakan placeholder [threshold] agar
kami tetapkan dari data kami sendiri.
Daftar pertanyaan yang akan Anda ajukan kepada kami sebelum menuntaskannya, dan
daftar asumsi Anda.
```

**Tujuan: Analisis ekspor tinjauan peringatan untuk pola derau.**

```text
Saya akan menempelkan tabel peringatan dari [period] untuk rotasi [rotation name]
dengan kolom: [column names, for example rule, time, label, action taken,
service].
Hitung tingkat peringatan yang dapat ditindak, tingkat positif palsu, porsi di
luar jam kerja, dan porsi peringatan dari lima aturan paling bising, hanya memakai
data yang saya tempel.
Sarankan aturan mana yang disetel, digabung, diturunkan, atau dihapus, dengan
alasan untuk masing-masing, dan tandai setiap saran sebagai hipotesis untuk
diperiksa.
Laporkan menurut aturan, layanan, dan rotasi, tidak pernah menurut orang. Jangan
mengarang nilai acuan.
Daftar asumsi Anda dan baris apa pun yang Anda kecualikan.
```

**Tujuan: Periksa himpunan metrik peringatan untuk risiko manipulasi sebelum menerbitkan.**

```text
Berikut metrik mutu peringatan yang kami rencanakan untuk diterbitkan: [list of
metrics with definitions and formulas].
Untuk setiap metrik, gambarkan dua cara ia dapat dimanipulasi atau salah dibaca
dalam konteks kami [organization type and service], dan sarankan pagar pembatas
berpasangan dari daftar yang sama atau praktik yang dapat kami adopsi.
Tunjuk metrik apa pun yang ditampilkan tanpa pagar pembatasnya.
Jangan mengarang sumber atau nilai acuan.
Daftar asumsi Anda tentang bagaimana alat kami mencatat peringatan dan insiden.
```

**Tujuan: Rencanakan uji deteksi untuk layanan dengan cakupan lemah.**

```text
Layanan kami adalah [list of services], dan peringatan gejala yang kami yakini ada
adalah [list of alerts].
Usulkan rencana uji yang aman untuk [game day or rehearsal] berikutnya yang
memeriksa, untuk tiap layanan, bahwa gejala yang disengaja memicu peringatan,
mencapai [rotation], dan menaut ke runbook.
Katakan siapa yang diberi tahu sebelumnya dan bagaimana mencatat hasil untuk
cakupan deteksi.
Jangan mengarang fitur alat; tanyakan kepada saya bagaimana [monitoring tool]
bekerja.
Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan ukuran terkait dan pagar pembatas yang harus berada di samping metrik mutu peringatan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penyuntingan topik ini menjaga templat, tabel manipulasi, dan referensi silang tetap konsisten.

## Poin penting

- Nilai peringatan dari apakah berujung pada tindakan, dan nilai pemantauan dari seberapa banyak masalah nyata yang ditangkapnya; presisi dan recall saling menjaga.
- Panggil untuk gejala yang dirasakan pengguna, kaitkan ambang dengan tujuan tingkat layanan di mana ada, dan simpan sebab untuk diagnosis.
- Tinjau apa yang menyala tiap pekan, labeli, dan buat setidaknya satu perubahan setiap kali.
- Jangan pernah menetapkan target pada volume peringatan saja; baca di samping tingkat dapat-ditindak, porsi deteksi terpantau, dan waktu mendeteksi.
- Uji peringatan dan saluran peringatan, karena peringatan yang tak teruji adalah asumsi.
- Laporkan menurut rotasi dan layanan, tidak pernah orang, dan perlakukan beban siaga yang berkelanjutan sebagai tujuan desain.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
