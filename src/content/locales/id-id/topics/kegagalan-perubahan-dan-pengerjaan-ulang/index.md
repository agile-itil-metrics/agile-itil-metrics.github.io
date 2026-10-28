# Kegagalan perubahan dan pengerjaan ulang

**Definisikan “perubahan yang gagal” sekali, secara tertulis, tautkan setiap kegagalan kembali ke perubahan yang menyebabkannya, dan baca kegagalan dan pengerjaan ulang bersama kecepatan agar angka yang lebih rendah berarti perubahan yang lebih aman dan tidak pernah sekadar lebih sedikit laporan.**

## Gambaran umum dan motivasi

Setiap perubahan pada layanan yang hidup membawa sedikit peluang membuat keadaan lebih buruk. Pertanyaan praktisnya adalah seberapa sering itu terjadi, berapa banyak pekerjaan tak terencana yang ditimbulkannya, dan seberapa cepat tim pulih. Topik ini mencakup ukuran yang menjawabnya: porsi perubahan yang gagal, porsi yang butuh jalur darurat, tingkat rollback dan hotfix, dan pengerjaan ulang yang menyusul perubahan buruk. Ia juga mencakup bagian paling tidak mentereng dari pokok bahasan ini, yaitu menyepakati apa yang dihitung sebagai kegagalan sama sekali.

Beberapa istilah dulu. Dalam [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, praktik yang disebut pemberdayaan perubahan mencakup penambahan, modifikasi, atau penghapusan apa pun yang dapat memengaruhi layanan. **Perubahan** karena itu lebih luas daripada deployment kode: ia mencakup suntingan konfigurasi, perpanjangan sertifikat, aturan firewall, atau migrasi basis data. **Perubahan standar** diotorisasi di muka dan berisiko rendah, **perubahan normal** melewati penilaian, dan **perubahan darurat** dibuat segera, biasanya untuk memulihkan layanan atau menutup kerentanan serius. **Deployment** adalah tindakan menaruh versi perangkat lunak ke dalam lingkungan, sedangkan **rilis** membuat kemampuan tersedia bagi pengguna. Tim yang memakai [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle) dapat men-deploy kode tanpa merilisnya (lihat topik 4.5, Metrik rilis dan deployment).

**Kegagalan perubahan** adalah perubahan yang menyebabkan layanan menurun atau butuh perbaikan. Perbaikan mengambil beberapa bentuk. [Rollback](https://en.wikipedia.org/wiki/Rollback_(data_management)) mengembalikan sistem ke keadaan sebelumnya. [Hotfix](https://en.wikipedia.org/wiki/Hotfix) adalah tambalan mendesak yang diterapkan di luar irama rilis normal. Perbaikan roll-forward mengirim perubahan baru di atas yang rusak. [Pengerjaan ulang](https://en.wikipedia.org/wiki/Rework) adalah upaya tak terencana yang dihabiskan untuk mengulang atau memperbaiki sesuatu yang seharusnya sudah selesai. Dalam setelan [continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery), tempat perubahan kecil sering mengalir ke produksi, ukuran ini adalah bukti utama apakah kecepatan mengorbankan stabilitas.

Kedua tradisi melihat peristiwa yang sama secara berbeda. Pandangan ITIL diorganisasi di sekitar catatan perubahan: apakah perubahan diotorisasi, apakah berhasil, dan apakah hasilnya dicatat? Perubahan yang berhasil di atas kertas masih dapat menyebabkan insiden sejam kemudian. Pandangan agile diorganisasi di sekitar item kerja dan deployment: apakah definisi selesai tim bertahan, dan apakah perubahan menyebabkan pekerjaan tak terencana segera sesudahnya? Tak satu pun pandangan lengkap sendirian. Riset di balik program DORA memperlakukan tingkat kegagalan perubahan dan tingkat pengerjaan ulang deployment sebagai dua ukuran “ketidakstabilan” di samping ukuran throughput (lihat topik 2.8, Metrik DORA, yang mendefinisikannya di tingkat program). Topik ini masuk lebih dalam pada mekaniknya: bagaimana mendefinisikan kegagalan, bagaimana menautkan insiden ke perubahan, bagaimana pekerjaan darurat dihitung, dan bagaimana angka dimanipulasi.

Peringatan berlaku sejak awal. Ukuran ini menggambarkan tim, layanan, atau pipeline. Mereka tidak pernah menggambarkan orang. Tingkat kegagalan perubahan yang dilekatkan pada insinyur individu mengajari orang menghindari pekerjaan berisiko dan berharga, memecah perubahan sampai hitungan tampak baik, dan berhenti melaporkan masalah (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). [Hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) menggigit keras di sini, karena “lebih sedikit kegagalan” mudah dicapai dengan mencatat lebih sedikit kegagalan.

Waktu insiden milik topik 3.3, Waktu respons dan penyelesaian insiden, insiden terburuk milik topik 3.4, Metrik insiden besar, alur persetujuan dan porsi perubahan standar milik topik 4.3, Metrik pemberdayaan perubahan, akar masalah milik topik 4.1, Metrik manajemen masalah, dan tinjauan tertulis milik topik 4.2, Metrik postmortem dan pembelajaran.

## Prinsip utama

- **Kegagalan butuh satu definisi tertulis.** Tim yang memutuskan kasus per kasus menghasilkan angka yang tak dapat diplot tren atau dibandingkan, dan perdebatan tentang definisi menggantikan perdebatan tentang pekerjaan.
- **Kegagalan harus dapat ditelusuri ke perubahannya.** Tanpa tautan tercatat antara insiden, rollback, atau hotfix dan perubahan yang menyebabkannya, tingkat kegagalan adalah tebakan.
- **Hitung setiap jalur perbaikan.** Rollback, hotfix, roll-forward, dan solusi sementara manual adalah empat rute ke peristiwa yang sama. Metrik yang menghitung satu di antaranya menghargai tim karena memilih yang lain.
- **Baca kegagalan di samping kecepatan dan pemulihan.** Tingkat kegagalan perubahan secara terpisah dapat diperbaiki dengan mengubah lebih jarang, yang jarang menjadi tujuan. Pasangkan dengan lead time, frekuensi deployment, dan waktu pemulihan.
- **Sampel kecil butuh hitungan, bukan hanya persentase.** Tim dengan delapan perubahan dalam sebulan dan satu kegagalan punya tingkat kegagalan 12,5 persen yang hampir tak berkata apa-apa, jadi tampilkan hitungan dan pakai jendela lebih panjang (lihat topik 1.6, Literasi statistik untuk metrik layanan).
- **Darurat adalah sinyal, bukan dosa.** Porsi perubahan darurat yang mantap dan dijelaskan itu normal. Porsi yang naik biasanya menunjuk pada masalah mutu hulu, perencanaan, atau deteksi.

## Definisi metrik

Ukuran kegagalan dan pengerjaan ulang bergantung pada menggabungkan catatan perubahan, log deployment, dan alat insiden. Setiap definisi di bawah menyatakan apa yang dihitung, apa yang dikecualikan, dan di mana jam mulai dan berhenti. Tim sebaiknya menyalin definisi ke register metrik mereka dan menyesuaikannya dengan alasan yang dinyatakan.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat kegagalan perubahan | Porsi perubahan ke produksi yang menyebabkan layanan menurun atau butuh perbaikan | perubahan yang membutuhkan rollback, hotfix, perbaikan roll-forward, atau insiden tertaut dalam jendela kegagalan / semua perubahan ke produksi yang selesai pada periode itu; jendela dimulai pada penyelesaian perubahan dan berhenti setelah jumlah hari tetap (misalnya 7), ditulis di register metrik; perubahan yang masih di dalam jendela dilaporkan terpisah dan dikecualikan dari tingkat sampai jendela menutup | persen | Catatan perubahan atau log deployment digabung dengan alat insiden dan daftar hotfix | Pemberdayaan perubahan; manajemen insiden | Definisi selesai; cacat yang lolos | Bulanan, pada jendela bergulir 90 hari |
| Porsi perubahan darurat | Porsi perubahan yang dibuat lewat jalur darurat | perubahan tercatat sebagai darurat / semua perubahan yang selesai pada periode itu; darurat berarti penilaian normal dilewati atau dipersingkat karena urgensi, dan perubahan standar yang diotorisasi di muka dikecualikan dari kedua hitungan | persen | Kolom jenis catatan perubahan | Pemberdayaan perubahan | Pekerjaan tak terencana dan kelas layanan ekspedit | Bulanan |
| Tingkat rollback | Porsi perubahan yang dibalikkan ke versi sebelumnya | perubahan yang dibalikkan setelah mencapai produksi / semua perubahan ke produksi pada periode itu; rollback yang dibuat sebelum perubahan mencapai pengguna mana pun (misalnya canary yang dihentikan pada langkah pertamanya) dihitung terpisah | persen | Log deployment dan alat rilis | Manajemen rilis; manajemen deployment | Praktik pipeline dan rilis | Bulanan |
| Tingkat hotfix | Porsi perubahan yang merupakan tambalan mendesak yang diterapkan di luar alur rilis normal | perubahan yang ditandai atau dicabangkan sebagai hotfix / semua perubahan ke produksi pada periode itu; penyebut mencakup hotfix itu sendiri | persen | Cabang atau tag kendali versi dan log deployment | Pemberdayaan perubahan; manajemen insiden | Pekerjaan tak terencana; ekspedit | Bulanan |
| Tingkat pengerjaan ulang deployment | Porsi deployment yang merupakan perbaikan tak terencana untuk masalah pada deployment sebelumnya | deployment ke produksi yang memperbaiki cacat atau kegagalan pada deployment sebelumnya yang baru, dalam jendela kegagalan yang sama / semua deployment produksi pada periode itu; pekerjaan tindak lanjut terencana dari peta jalan dikecualikan | persen | Log deployment dengan tautan atau tag “memperbaiki,” dan pelacak kerja | Pemberdayaan perubahan; perbaikan berkelanjutan | Pengerjaan ulang; cacat yang lolos; permintaan karena kegagalan | Bulanan |
| Tingkat tautan perubahan-ke-insiden | Porsi insiden terselesaikan yang mencatat apakah perubahan menyebabkannya, dan yang mana | insiden dengan kolom “disebabkan oleh perubahan” yang terisi (ya atau tidak, ditambah pengenal perubahan bila ya) / insiden yang diselesaikan pada periode itu; jam berhenti saat insiden ditutup | persen | Alat insiden dan catatan perubahan | Manajemen insiden; pemberdayaan perubahan | Tinjauan pasca-insiden; definisi selesai | Bulanan |
| Kesepakatan definisi kegagalan | Kesepakatan antara dua peninjau tentang apakah sampel perubahan gagal | perubahan bersampel tempat dua peninjau independen mencapai putusan kegagalan yang sama memakai definisi tertulis / perubahan bersampel; sampel setidaknya 20 perubahan ditarik acak tiap kuartal | persen | Lembar tinjauan sampel yang disimpan bersama register metrik | Perbaikan berkelanjutan; pengukuran dan pelaporan | Retrospektif | Kuartalan |

Dua catatan pada tabel. Tingkat kegagalan dan tingkat pengerjaan ulang tumpang tindih tetapi berbeda: kegagalan yang dibalikkan tanpa deployment baru dihitung dalam tingkat kegagalan dan tidak dalam tingkat pengerjaan ulang. Dan satuannya adalah perubahan atau deployment, bukan insiden, karena satu perubahan dapat menyebabkan tiga insiden dan satu insiden dapat berasal dari tiga perubahan.

## Rekomendasi

### Tulis definisi kegagalan sebelum mengumpulkan data apa pun

**Sepakati apa arti “gagal” dan taruh di register metrik.** Definisi yang berfungsi adalah bahwa perubahan gagal jika, dalam jendela yang dinyatakan setelah selesai, ia dibalikkan, butuh hotfix atau perbaikan roll-forward, atau tertaut pada insiden dengan tingkat keparahan yang dinyatakan atau lebih tinggi. Nyatakan jendela (7 hari lazim, dan nilai yang tepat bergantung pada seberapa cepat layanan Anda menunjukkan masalah), ambang keparahan insiden, dan siapa yang memutuskan dalam kasus yang diperselisihkan. Tulis setidaknya lima contoh kerja, termasuk yang canggung seperti perubahan yang menurunkan kinerja tanpa gangguan apa pun. Tinjau definisi tiap tahun dan catat perubahan dengan alasannya, agar garis tren dapat dinyatakan ulang jika aturan bergeser.

### Tautkan kegagalan ke perubahan dalam catatan insiden

**Tambahkan kolom wajib pada catatan insiden: disebabkan oleh perubahan, ya atau tidak, dan pengenal perubahan bila ya.** Kolom sebaiknya diisi selama penyelesaian dan diperiksa dalam tinjauan pasca-insiden (lihat topik 4.2, Metrik postmortem dan pembelajaran). Lacak tingkat tautan sebagai metriknya sendiri. Jika hanya separuh insiden membawa kolom itu, tingkat kegagalan meremehkan kebenaran dengan jumlah yang tak diketahui, dan Anda sebaiknya mengatakannya di samping angka. Otomatisasi tebakan pertama bila bisa, misalnya dengan mendaftar perubahan yang selesai pada layanan terdampak dalam jam sebelum insiden dimulai, dan biarkan manusia mengonfirmasi.

### Hitung semua jalur perbaikan, bukan hanya satu

**Definisikan satu kegagalan dari beberapa sinyal.** Tarik rollback dari alat deployment, hotfix dari kendali versi atau log rilis, perbaikan roll-forward dari tautan “memperbaiki,” dan insiden dari alat insiden, lalu hilangkan duplikat menurut perubahan. Tim yang hanya menghitung rollback akan melihat kegagalan lenyap pada hari ia beralih ke perbaikan maju. Simpan setiap rute sebagai rincian terpisah juga, karena campurannya bercerita: banyak hotfix dan sedikit rollback menyarankan rollback sulit dilakukan, yang layak diperbaiki dengan sendirinya.

### Perlakukan porsi perubahan darurat sebagai pertanyaan, bukan skor

**Tinjau perubahan darurat sebagai kelompok, bukan sebagai target.** Tiap kuartal, baca semuanya dan urutkan alasannya: memulihkan layanan, menutup kerentanan, permintaan bisnis yang terlambat, langkah perencanaan yang terlewat, atau jalur persetujuan yang terlalu lambat untuk pekerjaan biasa. Dua yang terakhir adalah masalah sistem yang sebaiknya diperbaiki dengan memperbaiki jalur standar, agar orang tidak perlu melewatinya (lihat topik 4.3, Metrik pemberdayaan perubahan). Porsi nol mencurigakan, karena keadaan darurat sejati terjadi. Porsi yang naik terus layak mendapat catatan masalah (lihat topik 4.1, Metrik manajemen masalah).

### Ukur pengerjaan ulang sebagai permintaan karena kegagalan

**Lacak pengerjaan ulang sebagai pekerjaan yang diciptakan oleh kegagalan sebelumnya.** Gagasan permintaan karena kegagalan berasal dari desain layanan: permintaan yang ada karena sesuatu tidak dilakukan dengan benar pertama kali. Dalam istilah pengiriman, hitung deployment dan item kerja yang satu-satunya tujuannya memperbaiki perubahan terbaru. Ini terhubung langsung dengan pemisahan terencana dan tak terencana (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana). Pakai porsi kapasitas yang dihabiskan untuk pengerjaan ulang sebagai pembuka percakapan dengan pemilik produk, karena mengubah tingkat yang abstrak menjadi pertukaran tentang apa yang dikerjakan berikutnya.

### Laporkan tingkat dengan hitungan, distribusi, dan jendela

**Tampilkan hitungan di samping persentase, dan pakai jendela bergulir.** Tingkat kegagalan bulanan untuk tim yang men-deploy sepuluh kali bising. Pakai jendela bergulir 90 hari, tampilkan jumlah perubahan dan kegagalan di balik tingkat, dan beri indikasi kasar ketidakpastian (lihat topik 1.6, Literasi statistik untuk metrik layanan). Untuk pemulihan, tampilkan median dan persentil ke-85 waktu dari kegagalan ke pemulihan, bukan rata-rata. Ketika layanan punya sangat sedikit perubahan, ceritakan dengan daftar kegagalan sebenarnya alih-alih tingkat.

### Pasangkan kegagalan dengan kecepatan agar perbaikan tak dapat bersembunyi di keduanya

**Selalu tampilkan tingkat kegagalan perubahan di samping lead time dan frekuensi deployment.** Jika tingkat kegagalan turun sementara frekuensi deployment juga turun tajam dan lead time tumbuh, tim mungkin sedang membatch perubahan, yang menaikkan risiko masing-masing. Jika kecepatan naik dan tingkat kegagalan bertahan, sistem menjadi lebih baik dalam perubahan. Pasangan itu adalah pertahanan utama terhadap manipulasi dan terhadap keyakinan nyaman bahwa lebih sedikit deployment berarti lebih aman (lihat topik 2.8, Metrik DORA).

### Pakai angka untuk memperbaiki perubahan itu sendiri

**Ubah data kegagalan menjadi eksperimen rekayasa.** Lihat ciri umum perubahan yang gagal: ukuran, waktu hari, jenis, jumlah orang yang terlibat, apakah menyentuh komponen bersama, dan apakah cakupan uji tipis. Lalu coba satu eksperimen kecil yang dapat dibalikkan seperti batch lebih kecil, [pengujian regresi](https://en.wikipedia.org/wiki/Regression_testing) otomatis untuk area berisiko, [rilis canary](https://en.wikipedia.org/wiki/Canary_release) untuk perubahan berisiko berikutnya, atau feature toggle yang memisahkan deployment dari rilis. Ukur ulang setelah satu jendela penuh. Tujuannya perubahan yang lebih baik, dan metrik yang membaik hanyalah bukti.

### Tinjau metrik bersama dalam forum tanpa menyalahkan

**Adakan tinjauan bulanan perubahan yang gagal bersama orang yang membuatnya.** Agendanya tiga butir: hitungan dan tren, dua atau tiga perubahan gagal yang dipilih untuk dipelajari, dan satu tindakan perbaikan dengan pemilik. Pakai praktik tinjauan tanpa menyalahkan, agar orang menggambarkan apa yang mereka ketahui saat itu. Terbitkan catatan tinjauan bersama metrik. Jika orang ragu melaporkan kegagalan karena cara angka dipakai, perbaiki itu sebelum mengubah apa pun yang lain (lihat topik 11.3, Meluncurkan metrik tanpa menumbuhkan ketakutan).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat kegagalan perubahan | Mempersempit jendela kegagalan; tidak menautkan insiden ke perubahan; mengklasifikasi perubahan buruk sebagai “permintaan layanan” atau “pemeliharaan”; memperbaiki maju dan menyebutnya perubahan baru; menggabung banyak suntingan menjadi satu perubahan agar satu kegagalan menutupi semuanya | Tingkat tautan perubahan-ke-insiden; audit sampel kuartalan terhadap daftar insiden; kesepakatan definisi kegagalan; lead time dan frekuensi deployment di sampingnya |
| Porsi perubahan darurat | Merutekan pekerjaan mendesak lewat jalur standar dengan peringkat risiko palsu; merutekan pekerjaan biasa sebagai darurat untuk menghindari persetujuan; memecah satu keadaan darurat menjadi beberapa perubahan normal | Pembacaan kuartalan semua perubahan darurat; alasan diurutkan dan ditinjau; porsi perubahan standar dan lead time persetujuan (lihat topik 4.3, Metrik pemberdayaan perubahan) |
| Tingkat rollback | Memperbaiki maju untuk menghindari mencatat rollback; mempertahankan versi rusak tetap hidup; menahan perubahan dari produksi agar tak ada yang dibalikkan | Tingkat hotfix dan pengerjaan ulang di sampingnya; distribusi waktu pemulihan; sampel insiden terhadap log deployment |
| Tingkat hotfix | Tidak menandai hotfix; mendorongnya lewat cabang normal; menyebut hotfix “perbaikan kecil” | Tingkat pengerjaan ulang deployment; audit cabang dan tag; porsi pekerjaan tak terencana (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana) |
| Tingkat pengerjaan ulang deployment | Tidak menautkan perbaikan ke deployment asal; melabeli perbaikan sebagai “terencana”; membundel perbaikan dengan fitur baru | Tautan “memperbaiki” wajib pada deployment korektif; tinjauan sampel deployment berlabel terencana; tingkat kegagalan perubahan di sampingnya |
| Tingkat tautan perubahan-ke-insiden | Mengisi kolom dengan “tidak” tanpa memeriksa; membiarkan kolom bawaan “tidak”; menutup insiden secara massal untuk menaikkan persentase | Pemeriksaan sampel jawaban “tidak” dalam tinjauan pasca-insiden; tanpa nilai bawaan; komentar peninjau pada sampel |
| Kesepakatan definisi kegagalan | Memilih contoh mudah untuk sampel; peninjau adalah orang yang diukur; melonggarkan definisi agar semua sepakat | Sampel acak ditarik seseorang di luar tim; sertakan kasus perbatasan dengan sengaja; terbitkan ketidaksepakatan dan perbaiki definisi |

Pembacaan yang sehat tampak seperti ini: tingkat kegagalan berada dalam rentang yang dipahami dan dijelaskan tim, tingkat tautan cukup tinggi sehingga tingkat kegagalan dapat dipercaya, perubahan darurat sedikit dan dijelaskan, dan rollback serta hotfix singkat dan dilatih. Kegagalan dilaporkan cepat dan dibahas tanpa menyalahkan. Tingkat kegagalan yang secara tak wajar rendah dengan tingkat tautan rendah, frekuensi deployment menurun, dan ukuran batch tumbuh adalah peringatan, bukan keberhasilan. Perlakukan perbaikan mendadak apa pun sebagai dorongan untuk memeriksa instrumennya dulu (lihat topik 1.5, Sumber data dan instrumentasi).

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Definisi kegagalan yang ketat dan otomatis | Konsisten, murah diulang, mudah diplot tren | Melewatkan penurunan halus; mungkin menghitung rollback jinak sebagai kegagalan |
| Tinjauan berbasis pertimbangan atas tiap perubahan | Menangkap konteks dan keparahan | Lambat, subjektif, terbuka terhadap tekanan dan hanyutan |
| Jendela kegagalan panjang (pekan) | Menangkap kegagalan yang tertunda | Mengaburkan sebab dan akibat; perubahan terbaru belum dapat dilaporkan |
| Menghitung semua jalur perbaikan | Sulit dimanipulasi dengan berganti rute | Butuh beberapa sumber data yang digabung dengan hati-hati |

Pakai definisi otomatis sebagai dasar, tambahkan tinjauan manusia bersampel, dan perbaiki penggabungan antara perubahan dan insiden sebelum membangun apa pun yang lain.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa tepatnya yang dihitung sebagai perubahan gagal di sini, dan bisakah dua dari kita tidak sepakat tentang perubahan yang sama?**
Ambil lima perubahan terbaru dan minta setiap orang memberi suara apakah gagal. Bandingkan suara dan alasannya. Ketidaksepakatan menunjukkan di mana definisi tertulis tipis. Sepakati aturan untuk kasus canggung, seperti penurunan kinerja tanpa gangguan, dan tuliskan dengan contoh.

**2. Bagaimana kita tahu insiden mana yang disebabkan perubahan?**
Tanyakan bagaimana tautan dicatat hari ini, dan siapa yang mengisinya. Tinjau sepuluh insiden terbaru dan lihat berapa banyak yang punya perubahan terlampir, dan berapa banyak yang seharusnya. Bahas apakah kolom opsional, apakah bawaannya “tidak,” dan siapa yang memeriksanya. Fasilitator sebaiknya mengarah pada perbaikan konkret pada catatan, seperti kolom wajib tanpa nilai bawaan.

**3. Rute perbaikan mana yang kita pakai, dan apakah semuanya dihitung?**
Daftar rollback, hotfix, perbaikan roll-forward, solusi sementara manual, dan feature toggle dimatikan. Untuk masing-masing, tanyakan di mana peristiwa dicatat dan apakah menyuapi tingkat kegagalan. Perhatikan rute yang tidak meninggalkan jejak. Diskusi sering mengungkap bahwa rute yang disukai tim adalah yang tak dapat dilihat metrik.

**4. Kapan perubahan darurat terakhir kita, dan bisakah dihindari?**
Telusuri tiga atau empat yang terakhir. Tanyakan apa yang membuat masing-masing mendesak, apa yang diketahui lebih awal, dan seperti apa jalur standar yang lebih baik. Pisahkan keadaan darurat nyata dari penemuan terlambat dan persetujuan lambat. Sepakati satu perbaikan pada jalur biasa yang akan menghilangkan alasan berulang untuk darurat.

**5. Berapa banyak dari pekan kita yang dipakai memperbaiki perubahan terbaru?**
Perkirakan porsi kapasitas yang dihabiskan untuk pengerjaan ulang dalam empat pekan terakhir, memakai pelacak dan bukan ingatan. Bandingkan perkiraan dengan pelacak. Bicarakan berapa biaya angka itu dalam pekerjaan terencana dan bagaimana pemilik produk akan memakainya. Pilih satu pola kegagalan dan satu eksperimen untuk menguranginya.

**6. Jika tingkat kegagalan kita turun separuh kuartal depan, apakah kita akan memercayainya?**
Bayangkan judulnya dan tanyakan apa lagi yang harus benar: tingkat tautan stabil, frekuensi deployment mantap, pemulihan cepat, dan tak ada kategori baru “pemeliharaan.” Bahas mana dari pemeriksaan ini yang sudah dilakukan tim dan mana yang hilang. Sepakati bagaimana perbaikan mendadak akan diselidiki sebelum dirayakan.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki perubahan, jadi memiliki definisi kegagalan dan perbaikannya. Mulai dari pekerjaan: lihat perubahan gagal dalam tinjauan, temukan ciri umum, dan coba batch lebih kecil, uji lebih baik, atau toggle. Lacak pengerjaan ulang sebagai bagian papan, agar perbaikan tak terencana terlihat di samping pekerjaan terencana. Simpan angka untuk pembelajaran tim sendiri, dan tolak membagikan data tingkat individu. Jika metrik ditunjukkan kepada pemimpin, tim sebaiknya dapat menjelaskan setiap perubahan di dalamnya.

### Tim layanan dan operasi

Tim operasi melihat akibat perubahan di antrean insiden dan berada di posisi terbaik untuk menjaga tautan antara insiden dan perubahan. Mereka dapat menambah kolom wajib, memeriksanya dalam langkah penyelesaian, dan mengumpanbalikkan hasil kepada tim pengiriman tanpa menyalahkan. Operasi juga memiliki jalur darurat dan sebaiknya meninjau pemakaiannya. Bagikan informasi tentang rute pemulihan dan latih rollback bersama tim pengiriman, karena cara terbaik memangkas biaya kegagalan adalah kebiasaan bersama membuat perubahan dapat dibalikkan (lihat topik 3.3, Waktu respons dan penyelesaian insiden).

### Kepemimpinan dan tata kelola

Pemimpin sebaiknya meminta tren menurut layanan, kedua jenis ukuran ketidakstabilan bersama kecepatan, dan eksperimen perbaikan di baliknya. Hindari target tetap seperti “tingkat kegagalan di bawah 5 persen,” yang mengundang pendefinisian ulang, dan hindari memakai angka dalam tinjauan individu. Badan tata kelola dapat memakai data sebagai bukti apakah jalur persetujuan yang lebih ringan aman, dengan memeriksa bahwa kegagalan dan pemulihan tetap mantap saat kendali dilonggarkan. Tren perubahan darurat yang naik adalah sinyal untuk melihat desain perencanaan dan persetujuan, bukan menyalahkan insinyur siaga.

### Pelanggan dan pengguna

Pelanggan tidak peduli tingkat kegagalan. Mereka peduli apakah layanan rusak setelah pembaruan dan seberapa cepat kembali. Data kegagalan mendukung komunikasi jujur: pemberitahuan awal perubahan berisiko, pesan status jelas ketika perubahan menimbulkan masalah, dan komitmen terlihat untuk belajar. Di mana pengguna bergantung pada layanan untuk tugas kritis, sepakati jendela pemeliharaan dan ekspektasi rollback dengan mereka di muka (lihat topik 3.4, Metrik insiden besar).

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah penyedia layanan kesehatan regional menjalankan layanan penjadwalan pasien. Tim produk beranggotakan tujuh orang merilis perubahan beberapa kali seminggu, dan tim operasi beranggotakan lima orang menangani insiden dan proses perubahan. Semua angka dalam contoh ini bersifat ilustratif.

Sepanjang satu kuartal, laporan bulanan menunjukkan tingkat kegagalan perubahan 4 persen, turun dari 11 persen kuartal sebelumnya. Kepala informasi senang. Pemimpin platform tidak yakin, karena tim siaga mengatakan malam mereka belum membaik. Ia meminta tim menjalankan audit sampel dari register metrik.

Audit mengambil 30 perubahan secara acak dan dua peninjau menerapkan definisi tertulis. Mereka sepakat pada 24 dari 30 putusan, sehingga kesepakatan definisi kegagalan adalah 80 persen (ilustratif). Mereka lalu membandingkan sampel dengan daftar insiden. Dari 22 insiden yang diselesaikan pada kuartal itu, hanya 9 yang membawa kolom “disebabkan oleh perubahan,” tingkat tautan 41 persen. Membaca 13 lainnya dengan tangan, peninjau menemukan 5 yang dimulai dalam sehari sejak perubahan. Hitungan yang dikoreksi menaikkan tingkat kegagalan menjadi sekitar 9 persen, dan audit menemukan mengapa angka itu tampak baik: kebiasaan baru men-deploy perbaikan dengan label “pemeliharaan,” yang dikecualikan laporan dari penyebut dan pembilang sekaligus.

Risiko manipulasinya adalah labelnya, dan tak seorang pun merencanakannya. Tim telah diberi tahu bahwa kegagalan menjadi perhatian, dan “pemeliharaan” menghindari percakapan. Tim membuat tiga keputusan. Kolom “disebabkan oleh perubahan” menjadi wajib tanpa nilai bawaan, dan tinjauan pasca-insiden memeriksanya. Label “pemeliharaan” dipensiunkan, dan deployment korektif harus membawa tautan ke perubahan yang diperbaikinya, yang menyuapi tingkat pengerjaan ulang. Definisi kegagalan ditulis ulang dengan enam contoh kerja, termasuk regresi kueri lambat yang tidak pernah menyebabkan gangguan.

Kuartal berikutnya menunjukkan tingkat kegagalan yang dinyatakan ulang sebesar 8 persen dan tingkat tautan 90 persen (ilustratif). Laporan pimpinan kini menunjukkan hitungan, tingkat tautan, dan tingkat pengerjaan ulang di samping lead time, dan kepala informasi berhenti mengutip satu persentase.

## Sudut pandang sektor

**Startup.** Perubahan kecil dan sering, dan tim sering hafal setiap kegagalan. Jaga definisi satu paragraf, tandai rollback dan hotfix di alat deployment, dan tinjau kegagalan pada retrospektif mingguan. Tingkat kegagalan pada 20 perubahan bising, jadi pakai daftar kegagalan sebagai bukti utama. Risikonya informalitas: tanpa definisi tertulis, tingkat bergeser menurut siapa yang menghitung.

**Bisnis kecil.** Orang yang sama men-deploy, mengoperasikan, dan mendukung, sehingga pengerjaan ulang bersaing langsung dengan pekerjaan terencana. Catat kegagalan di alat apa pun yang sudah Anda pakai, tambahkan kolom wajib pada catatan insiden, dan tinjau perubahan darurat tiap kuartal. Hindari persetujuan berat hanya untuk memperbaiki angka. Daftar periksa rollback bersama lebih berharga daripada dewan perubahan.

**Perusahaan besar.** Banyak tim, pemasok, dan alat berarti banyak definisi. Standarkan definisi kegagalan dan kolom tautan lintas tim, terbitkan dalam katalog metrik, dan hitung tingkat per layanan sebelum merekap. Pakai audit bersampel untuk menemukan divergensi, dan perlakukan catatan perubahan tiap pemasok sebagai sumber lain dengan mutunya sendiri (lihat topik 1.5, Sumber data dan instrumentasi). Berhati-hatilah agar rekap tidak pernah berubah menjadi tabel liga tim.

**Pemerintah dan sektor publik.** Catatan perubahan melayani audit dan akuntabilitas, dan rollback dapat dibatasi oleh undang-undang, pengadaan, atau platform bersama. Pertahankan catatan formal dan tambahkan tautan kegagalan sebagai bagiannya. Jelaskan angka dengan hati-hati kepada badan pengawas, dengan hitungan dan konteks, karena satu kegagalan pada layanan kritis dapat menarik perhatian tak proporsional. Pakai data untuk membenarkan jalur lebih ringan bagi perubahan berisiko rendah, dengan bukti bahwa kegagalan dan pemulihan tetap mantap.

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah biaya perubahan yang gagal: pekerjaan insiden, pengerjaan ulang, item peta jalan yang tertunda, dan hilangnya kepercayaan pengguna. Banyak organisasi tak dapat mengatakan berapa banyak upayanya pergi ke memperbaiki perubahan terbaru, dan ukuran pengerjaan ulang memberi jawaban jujur pertama. Ada juga manfaat tidak langsung. Tim yang dapat menunjukkan bahwa perubahan aman dapat membela persetujuan yang lebih ringan, yang memperpendek lead time. Riset DORA melaporkan asosiasi antara persetujuan eksternal yang berat dan kinerja pengiriman yang lebih lemah (lihat topik 4.3, Metrik pemberdayaan perubahan), dan data kegagalan adalah cara tim menguji klaim itu terhadap riwayatnya sendiri.

Biaya mengumpulkan sedang jika landasan ada: kolom wajib pada catatan insiden, deployment korektif bertag, penggabungan tiga sumber data, dan tinjauan bulanan. Biaya lebih besar adalah perhatian, karena seseorang harus memiliki definisi, menjalankan audit, dan bertindak atas temuan. Hindari membeli alat sebelum definisi dan tautan bekerja dengan tangan.

Imbal hasil muncul sebagai lebih sedikit kegagalan berulang, pemulihan lebih pendek, lebih sedikit pekerjaan tak terencana, dan percakapan lebih baik dengan tata kelola. Jangan menjanjikan persentase. Sebagai gantinya, perkirakan garis dasar Anda sendiri: hitung jam yang dihabiskan untuk pengerjaan ulang dan respons insiden terkait perubahan selama satu kuartal, hargai dengan tarif internal normal Anda, dan bandingkan setelah perbaikan. Nyatakan asumsi, dan laporkan hasil sebagai rentang bukan satu angka. Bandingkan dengan biaya program dan biaya satu kegagalan serius pada layanan kritis.

## Anti-pola dan jebakan

- **Menetapkan target untuk tingkat kegagalan.** Itu mengundang pendefinisian ulang dan kegagalan tersembunyi. Tetapkan target untuk pembelajaran sebagai gantinya, seperti menyelesaikan setiap tinjauan dan menutup setiap tindakan korektif, dan awasi tingkat untuk tren.
- **Memeringkat tim atau orang menurut kegagalan.** Itu menghancurkan pelaporan dan menghukum tim yang mengambil pekerjaan berisiko dan berharga. Bandingkan tim dengan masa lalunya sendiri dan bahas konteks.
- **Menghitung hanya insiden sebagai kegagalan.** Kegagalan yang tertangkap awal dan dibalikkan lenyap. Sertakan setiap rute perbaikan, dan pakai insiden sebagai satu sinyal di antara beberapa.
- **Memperlakukan perubahan darurat sebagai buruk.** Tekanan menyebabkan keadaan darurat yang disamarkan. Tinjau alasannya dan perbaiki jalur biasa.
- **Membiarkan tautan insiden bawaan “tidak.”** Nilai bawaan menghasilkan angka yang menyanjung dan salah. Jadikan kolom wajib dan periksa sampel.
- **Melaporkan tingkat tanpa hitungan.** Sampel kecil berayun liar. Tampilkan hitungan dan jendela bergulir.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi kegagalan | Diputuskan kasus per kasus oleh siapa pun yang ditanya | Beberapa tim menulis definisi; tim berbeda | Satu definisi tertulis dengan contoh kerja dan jendela yang dinyatakan | Definisi diuji lewat audit bersampel dan kesepakatan diukur | Definisi direvisi bersama pemasok dan pelanggan ketika tidak lagi memberi masukan bagi keputusan |
| Menautkan perubahan dan insiden | Tautan diingat orang jika ada | Kolom opsional dipakai beberapa tim | Kolom wajib tanpa nilai bawaan, diperiksa dalam tinjauan pasca-insiden | Tingkat tautan diplot tren dan ditinjau, dengan celah ditindaklanjuti | Tautan dibagikan antartim dan pemasok lewat antarmuka yang disepakati |
| Perbaikan dan penanganan darurat | Rollback dan hotfix ditangani ad hoc dan tak tercatat | Rollback dan hotfix ditandai beberapa tim | Semua rute perbaikan tercatat; uji darurat ditulis | Perubahan darurat ditinjau tiap kuartal; rollback dilatih | Jalur pemulihan dirancang ke dalam layanan dan diuji bersama antartim |
| Pemakaian dalam perbaikan | Angka dikutip dalam laporan tanpa tindak lanjut | Kegagalan dibahas setelah insiden besar | Tinjauan bulanan tanpa menyalahkan atas perubahan gagal dengan tindakan | Kegagalan dan pengerjaan ulang dipasangkan dengan kecepatan; eksperimen direncanakan dan didanai | Perbaikan rutin dan dibagikan antartim, dengan pembelajaran diterbitkan |

## Daftar periksa

- [ ] Definisi tertulis kegagalan perubahan ada, dengan jendela yang dinyatakan dan setidaknya lima contoh kerja.
- [ ] Satuan penghitungan (perubahan, deployment, atau rilis) dinamai di register metrik.
- [ ] Catatan insiden punya kolom wajib “disebabkan oleh perubahan” tanpa nilai bawaan.
- [ ] Rollback, hotfix, dan perbaikan roll-forward ditandai di alat deployment atau kendali versi.
- [ ] Deployment korektif membawa tautan ke perubahan yang diperbaikinya.
- [ ] Perubahan darurat punya uji tertulis singkat, dan setiap perubahan darurat ditinjau dalam jumlah hari yang ditetapkan.
- [ ] Tingkat ditampilkan dengan hitungan dan jendela bergulir, tidak pernah sebagai persentase polos.
- [ ] Tingkat kegagalan perubahan selalu ditampilkan di samping lead time, frekuensi deployment, dan waktu pemulihan.
- [ ] Audit sampel kuartalan memeriksa putusan kegagalan dan tautan insiden.
- [ ] Tinjauan bulanan tanpa menyalahkan atas perubahan gagal berjalan, dengan pemilik untuk setiap tindakan.
- [ ] Tak ada metrik dalam topik ini yang dipakai untuk memeringkat atau meninjau individu.

## Prompt AI

**Susun definisi tertulis kegagalan perubahan.**

```text
Kami mengoperasikan [service or product type] dengan [team size] orang dan
merilis [frequency, for example several times a week]. Alat kami [change tool,
deployment tool, incident tool]. Susun definisi satu halaman tentang “perubahan
gagal” yang menyatakan satuan (perubahan, deployment, atau rilis), jendela
kegagalan, rute perbaikan yang dihitung (rollback, hotfix, perbaikan
roll-forward, insiden tertaut), dan pengecualian. Sertakan [number] contoh kerja,
termasuk kasus perbatasan. Jangan mengarang nilai acuan atau ambang; tanyakan
kepada saya untuk yang Anda butuhkan. Daftar asumsi Anda.
```

**Rancang tautan perubahan-ke-insiden.**

```text
Berikut templat catatan insiden kami: [fields]. Berikut templat catatan perubahan
kami: [fields]. Sarankan cara mencatat perubahan mana yang menyebabkan insiden
mana, termasuk kolom wajib, nilai yang diizinkan, siapa yang mengisi, dan
bagaimana tinjauan memeriksanya. Usulkan cara menyarankan perubahan kandidat
secara otomatis dari [available data, for example deploy times and service
names]. Jangan menebak bagaimana alat kami dikonfigurasi. Daftar asumsi Anda dan
pertanyaan yang harus saya jawab.
```

**Analisis daftar perubahan gagal untuk pola.**

```text
Berikut [number] perubahan gagal dari [period], dengan kolom ini: [list fields,
for example size, type, day and time, service, remediation route, time to
restore]. Temukan pola dan faktor penyumbang yang mungkin, dan sarankan hingga
[number] eksperimen kecil yang dapat dibalikkan untuk mengurangi kegagalan. Jaga
analisis di tingkat tim dan layanan, dan jangan memeringkat individu. Jangan
mengarang statistik atau nilai acuan. Nyatakan seberapa yakin tiap pola mengingat
ukuran sampel, dan daftar asumsi Anda.
```

**Periksa dasbor kegagalan untuk risiko manipulasi.**

```text
Dasbor kami menunjukkan [list of metrics, for example change fail rate, emergency
share, rollback rate, hotfix rate, rework rate] dengan definisi ini:
[definitions]. Untuk setiap metrik, daftar cara yang masuk akal angka dapat
membaik tanpa layanan membaik, dan pagar pembatas untuk masing-masing. Sarankan
dua pemeriksaan audit yang dapat dijalankan tim beranggotakan [team size] tiap
kuartal. Jangan mengarang nilai acuan atau klaim kepatuhan. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik mana yang mendefinisikan metrik terkait, seperti lead time atau durasi insiden, dan pagar pembatas yang ditaruh di samping tingkat kegagalan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa metrik kegagalan yang baru atau disunting menyatakan jam, sumber, dan vektor manipulasinya.

## Poin penting

- Tingkat kegagalan perubahan hanya sebaik definisinya, jadi tulis satu dengan jendela, contoh kerja, dan satuan bernama.
- Tautkan setiap kegagalan ke perubahannya lewat kolom wajib pada catatan insiden, dan ukur tingkat tautan.
- Hitung rollback, hotfix, perbaikan roll-forward, dan insiden tertaut bersama, agar tim tak dapat menghindari metrik dengan berganti rute.
- Baca porsi perubahan darurat dan pengerjaan ulang sebagai sinyal tentang perencanaan dan jalur biasa, bukan skor.
- Selalu tampilkan kegagalan di samping kecepatan dan pemulihan, dengan hitungan dan jendela bergulir, dan jangan pernah memeringkat orang.

## Referensi dan bacaan lanjutan

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
