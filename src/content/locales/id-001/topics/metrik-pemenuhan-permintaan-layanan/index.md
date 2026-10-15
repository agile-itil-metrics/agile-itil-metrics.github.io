# Metrik pemenuhan permintaan layanan

**Ukur berapa lama permintaan rutin berlangsung dari sudut pandang pengguna, berapa banyak waktu itu adalah menunggu, item katalog mana yang menggerakkan permintaan, dan berapa banyak pekerjaan yang diotomatisasi, lalu pakai gambaran itu untuk merancang ulang permintaan umum alih-alih menekan orang yang menanganinya.**

## Gambaran umum dan motivasi

**Permintaan layanan** adalah permintaan rutin dari pengguna atas sesuatu yang dirancang untuk disediakan layanan: akun, akses ke folder, laptop, lisensi perangkat lunak, sepotong informasi. Ia berbeda dari **insiden**, yaitu gangguan tak terencana pada layanan (lihat topik 3.2, Volume dan prioritas insiden), dan dari **perubahan**, yang memodifikasi layanan dan butuh penilaian risiko baru (lihat topik 4.3, Metrik pemberdayaan perubahan). Dalam [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 pekerjaan ini dicakup praktik manajemen permintaan layanan, dan biasanya digambarkan sebagai **model permintaan** yang berulang: informasi yang dibutuhkan, persetujuan, langkah, dan waktu yang diharapkan. ITIL mengeja kata itu “fulfilment”; isi topik ini memakai “fulfillment” sesuai ejaan buku.

Permintaan penting bagi metrik karena merupakan permintaan yang dapat diprediksi. Insiden adalah kejutan; permintaan laptop untuk karyawan baru tiba setiap bulan dan mengikuti langkah yang sama. Keterprediksian itu menjadikan permintaan kandidat terbaik untuk perancangan, standardisasi, dan [otomatisasi proses](https://en.wikipedia.org/wiki/Process_automation). Itu juga berarti keterlambatan jarang disebabkan oleh kesulitan. Penyebabnya antrean, persetujuan, dan serah terima, jadi pertanyaan yang berguna adalah di mana permintaan menunggu, bukan seberapa cepat seseorang mengetik.

Satuan analisisnya adalah **item katalog**: satu hal bernama yang dapat diminta pengguna dalam [katalog layanan](https://en.wikipedia.org/wiki/Service_catalog) (istilah ITIL adalah “service catalogue”; sisa topik ini mengatakan “katalog layanan”). Ukuran per item jauh lebih berguna daripada satu angka campuran, karena permintaan setel ulang kata sandi dan permintaan pembangunan server punya jam, pemilik, dan target wajar yang berbeda. Rata-rata campuran menyembunyikan keduanya.

Pandangan agile dan ITIL bertemu di sini dengan sedikit gesekan. ITIL bertanya apakah layanan menyampaikan hasil yang disepakati dalam waktu yang disepakati. Praktik alur agile bertanya berapa lama pekerjaan mengalir dari permintaan ke selesai, berapa banyak yang duduk dalam antrean, dan berapa banyak pekerjaan dalam proses sekaligus. Permintaan adalah item kerja yang bergerak melalui alur kerja, jadi perkakas pengukuran alur, seperti cycle time dan usia item kerja, berlaku langsung (lihat topik 2.1, Ukuran alur). Kosakatanya berbeda. Aritmetikanya sama.

Tiga istilah berulang. **Waktu pemenuhan** adalah waktu terlewat dari saat pengguna mengajukan permintaan sampai saat pengguna mengonfirmasi, atau sistem mencatat, bahwa sesuatu itu telah diserahkan. **Waktu kerja langsung** adalah waktu seseorang aktif mengerjakan permintaan, dan **waktu tunggu** adalah semua sisanya, termasuk persetujuan dan menunggu pengguna. Selisih keduanya adalah yang sebaiknya dipersempit model permintaan. **Porsi otomatisasi** adalah bagian permintaan yang dipenuhi tanpa disentuh orang setelah pengajuan.

Ukuran waktu butuh kehati-hatian. Waktu pemenuhan miring: kebanyakan permintaan selesai cepat dan beberapa sangat lama. Rata-rata ditarik-tarik oleh yang sedikit itu, jadi laporkan median dan [persentil](https://en.wikipedia.org/wiki/Percentile) tinggi seperti ke-85 atau ke-95 (lihat topik 1.6, Literasi statistik untuk metrik layanan). Target yang disepakati dengan pelanggan, seperti yang ada dalam [perjanjian tingkat layanan (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), sebaiknya dinyatakan dengan cara sama: “85 persen permintaan laptop dipenuhi dalam 5 hari kerja” berkata lebih banyak daripada “rata-rata 3 hari.”

Terakhir, peringatan dari psikologi pengukuran. Ketika tim dinilai dari menutup permintaan dengan cepat, cara termurah memperbaiki angka adalah mengubah apa yang dihitung sebagai tertutup, atau menjeda jam. [Hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku penuh (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Setiap metrik di bawah karena itu dipasangkan dengan pagar pembatas, dan tidak satu pun menggambarkan agen individu.

## Prinsip utama

- **Ukur per item katalog.** Setiap item punya model permintaan, pemilik, dan target wajar sendiri, jadi angka campuran menyesatkan.
- **Mulai jam saat pengguna meminta dan hentikan saat pengguna memiliki barangnya.** Tonggak internal berguna sebagai diagnostik, tetapi bukan pengalaman pelanggan.
- **Pisahkan waktu tunggu dari waktu kerja langsung.** Selisih keduanya menunjukkan di mana perancangan ulang membayar, dan jarang ada di pekerjaan itu sendiri.
- **Laporkan distribusi, bukan rata-rata.** Median dan persentil ke-95 menggambarkan apa yang dijalani pengguna.
- **Perlakukan permintaan sebagai sinyal.** Volume menurut item menunjukkan apa yang dibutuhkan pengguna, apa yang membingungkan, dan apa yang pantas diotomatisasi atau dijadikan swalayan.
- **Otomatisasi yang stabil dan sering lebih dulu.** Porsi otomatisasi adalah hasil perancangan permintaan yang baik, bukan tujuan untuk dikejar demi dirinya sendiri.
- **Ukur tim dan layanan, tidak pernah orangnya.** Permintaan mengalir melalui sistem, dan variasi antaragen sebagian besar mencerminkan campuran pekerjaan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Waktu pemenuhan permintaan | Waktu terlewat untuk menyerahkan permintaan, ditampilkan sebagai median dan persentil ke-95 per item katalog | jam dimulai saat pengguna mengajukan permintaan, berhenti saat pengguna mengonfirmasi penyerahan atau penyerahan dicatat; permintaan yang dibatalkan pengguna dikecualikan; waktu menunggu pengguna dilaporkan terpisah, tidak dihapus | hari kerja atau jam | Riwayat permintaan alat ITSM | Manajemen permintaan layanan | Cycle time pada papan tim (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur) | Mingguan, tren bulanan |
| Pemenuhan dalam target | Porsi permintaan yang diserahkan dalam target yang disepakati untuk item katalognya | permintaan yang dipenuhi dalam target / permintaan yang dipenuhi pada periode itu; jam seperti di atas, item yang masih terbuka dikecualikan dan dihitung dalam usia backlog | persen | Riwayat permintaan alat ITSM; tabel target item katalog | Manajemen tingkat layanan | Ekspektasi tingkat layanan | Bulanan |
| Backlog dan usia permintaan | Jumlah permintaan terbuka dan seberapa tua yang tertua, menurut item katalog | permintaan terbuka pada akhir periode (hitungan); usia tiap permintaan terbuka = tanggal laporan dikurangi tanggal pengajuan; laporkan hitungan, median usia, dan usia tertua | hitungan dan hari | Antrean permintaan terbuka alat ITSM | Manajemen permintaan layanan | Pekerjaan dalam proses dan item kerja yang menua (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean) | Mingguan |
| Waktu tunggu persetujuan | Waktu permintaan menunggu persetujuan | jam dimulai saat persetujuan diminta, berhenti saat diberikan atau ditolak; permintaan tanpa langkah persetujuan dikecualikan | jam | Log persetujuan alat ITSM | Manajemen permintaan layanan; pemberdayaan perubahan | Waktu terhalang atau kolom “menunggu” pada papan | Bulanan |
| Volume permintaan menurut item katalog | Jumlah permintaan yang diajukan untuk tiap item, dengan porsinya dari semua permintaan | permintaan yang diajukan per item pada periode itu; permintaan yang diajukan ulang sebagai duplikat, bila teridentifikasi, dikecualikan; laporkan hitungan dan porsi dari total | hitungan dan persen | Catatan permintaan alat ITSM | Manajemen katalog layanan | Analisis permintaan untuk membentuk backlog | Bulanan |
| Porsi otomatisasi | Bagian permintaan yang dipenuhi tanpa langkah manual setelah pengajuan | permintaan yang dipenuhi dari ujung ke ujung oleh otomatisasi / permintaan yang dipenuhi pada periode itu; permintaan yang disentuh orang pada langkah pemenuhan apa pun dihitung manual; persetujuan oleh orang tidak dihitung sebagai langkah pemenuhan manual bila kebijakan mewajibkannya | persen | Catatan pemenuhan alat ITSM dan log platform otomatisasi | Manajemen permintaan layanan; otomatisasi dalam rantai nilai layanan | Otomatisasi dalam definisi selesai | Bulanan |
| Tingkat pembukaan ulang permintaan | Porsi permintaan terpenuhi yang dibuka kembali atau diajukan ulang pengguna karena hasilnya salah atau tak lengkap | permintaan yang dibuka kembali atau diajukan ulang untuk item sama oleh pengguna sama dalam 7 hari sejak pemenuhan / permintaan yang dipenuhi pada periode itu; jendela 7 hari adalah contoh yang dituliskan tim | persen | Riwayat permintaan alat ITSM | Manajemen permintaan layanan | Tingkat pengerjaan ulang; cacat yang lolos | Bulanan |

Waktu pemenuhan menghitung waktu kerja hanya jika tim telah menyepakati kalender dan mencatatnya; jika tidak, pakai jam terlewat dan katakan demikian. Metrik backlog membawa tiga angka dengan sengaja, karena hitungan saja tidak berkata apa-apa tentang menunggu. Definisi porsi otomatisasi tidak memasukkan persetujuan manusia dalam hitungan “manual” karena banyak persetujuan adalah keputusan kebijakan, bukan biaya pemenuhan; waktu tunggu persetujuan diukur terpisah agar keterlambatannya tetap terlihat.

## Rekomendasi

### Definisikan jam dan satuannya

**1. Ukur per item katalog, dan terbitkan daftar item.** Mulai dengan sepuluh item teratas menurut volume, yang biasanya mencakup porsi besar permintaan, dan tambah item seiring data memungkinkan. Beri setiap item pemilik, target yang dinyatakan, dan definisi satu baris tentang “diserahkan.” Daftar item adalah penyebut bagi semua hal lain, jadi simpan di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

**2. Tuliskan awal dan akhir jam untuk tiap item.** Untuk kebanyakan item jam dimulai saat pengajuan dan berhenti saat pengguna dapat memakai yang diminta, bukan saat tiket ditutup. Laptop diserahkan ketika berada di tangan pengguna, bukan ketika kurir dipesan.

**3. Putuskan sekali bagaimana menunggu pengguna diperlakukan.** Beberapa permintaan macet karena pengguna belum menjawab pertanyaan. Menjeda jam untuk itu wajar, tetapi juga tuas paling mudah disalahgunakan. Catat jeda sebagai keadaan terpisah dengan alasan, laporkan waktu jeda sebagai angkanya sendiri, dan tinjau tingkat jeda menurut item (lihat topik 1.5, Sumber data dan instrumentasi).

### Laporkan yang dialami pengguna

**4. Tampilkan median dan persentil ke-95, dengan hitungan.** Taruh keduanya pada satu bagan per item, dengan jumlah permintaan di balik tiap titik. Median dua hari dengan persentil ke-95 dua puluh hari memberi tahu Anda bahwa kebanyakan pengguna terlayani dengan baik dan bahwa ekor perlu diselidiki, yang disembunyikan rata-rata empat hari. Ketika hitungan kecil, katakan demikian dan tampilkan permintaan individual alih-alih persentil.

**5. Buat usia terlihat untuk permintaan terbuka.** Waktu pemenuhan baru diketahui setelah permintaan selesai, jadi tertinggal. Daftar permintaan terbuka tertua per item, diurutkan menurut usia, memberi tahu tim di mana harus melihat hari ini. Dalam istilah alur ini adalah usia item kerja terhadap cycle time biasa item itu, dan merupakan tampilan paling dapat ditindak yang bisa dimiliki antrean permintaan.

**6. Pecah waktu terlewat menjadi waktu kerja langsung, persetujuan, dan menunggu pengguna.** Ambil sampel permintaan terpenuhi untuk satu item dan pecah masing-masing menjadi waktu yang dihabiskan dalam tiap keadaan. Kebanyakan tim mendapati kerja aktif hanya porsi kecil dari waktu terlewat. Temuan itu menggeser percakapan perbaikan dari “bekerja lebih cepat” ke “singkirkan antrean di antara langkah,” yang merupakan gagasan inti dalam kajian antrean dan alur (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean).

### Pakai permintaan untuk membentuk layanan

**7. Baca volume menurut item sebagai pesan dari pengguna.** Volume yang naik untuk satu item dapat berarti kebutuhan tumbuh, produk membingungkan, atau kegagalan di tempat lain, seperti proses rusak yang mengirim orang kembali bertanya lagi. Item berpermintaan sangat rendah mungkin kandidat untuk dipensiunkan dari katalog. Bandingkan volume dengan data adopsi (lihat topik 6.3, Metrik adopsi layanan dan katalog).

**8. Peringkatkan kandidat otomatisasi menurut volume, stabilitas, dan waktu kerja langsung.** Kandidat pertama terbaik adalah yang bervolume tinggi, jarang bervariasi, dan membawa waktu kerja langsung yang terasa. Mulai dengan item yang langkahnya sudah identik setiap kali, seperti akses ke grup standar, dan otomatisasi langkah sebelum menyentuh pengecualian. Lacak porsi otomatisasi per item agar kemajuan terlihat, dan kirim pertanyaan swalayan dan deflection ke topiknya sendiri (lihat topik 3.7, Metrik swalayan dan otomatisasi).

**9. Rancang ulang persetujuan sebelum menambah orang.** Waktu tunggu persetujuan sering mendominasi waktu terlewat. Tanyakan untuk setiap persetujuan apakah diwajibkan kebijakan, apakah permintaan standar yang disetujui di muka cukup, dan apakah penyetuju dapat berupa peran dengan wakil dan bukan satu orang. Menyetujui di muka permintaan berisiko rendah yang dipahami baik mencerminkan gagasan perubahan standar dalam pemberdayaan perubahan, dan menyingkirkan antrean tanpa menyingkirkan kendali.

### Jaga angka tetap jujur

**10. Pasangkan kecepatan dengan mutu setiap kali.** Laporkan waktu pemenuhan di samping tingkat pembukaan ulang dan sinyal kepuasan pengguna untuk item yang sama (lihat topik 6.1, Metrik kepuasan pelanggan). Permintaan yang lebih cepat tetapi kembali dibuka ulang lebih lambat daripada tampaknya. Jika kecepatan membaik dan tingkat pembukaan ulang naik bersamanya, perlakukan peningkatan kecepatan sebagai belum terbukti.

**11. Jaga permintaan, insiden, dan perubahan terpisah dalam data.** Mencampurnya mendistorsi ketiganya. Setel ulang kata sandi yang sebenarnya gejala layanan masuk yang rusak adalah insiden, dan permintaan untuk mengubah cara layanan bekerja adalah perubahan. Klasifikasikan saat penerimaan dengan aturan pendek, ambil sampel salah klasifikasi tiap kuartal, dan bandingkan volume permintaan dan insiden berdampingan (lihat topik 3.1, Metrik service desk).

**12. Tinjau tabel item bersama tim yang mengerjakan.** Bertemu bulanan selama tiga puluh menit mengitari tabel per item: volume, median dan persentil ke-95, permintaan terbuka tertua, porsi otomatisasi, tingkat pembukaan ulang. Pilih satu item dan satu perubahan untuk dicoba, dan lihat tabel yang sama bulan depan untuk melihat apa yang terjadi.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Waktu pemenuhan permintaan | Menjeda jam untuk “menunggu pengguna” entah pengguna penyebabnya atau tidak; menutup permintaan sebelum penyerahan dan membukanya kembali sebagai yang baru; memecah satu permintaan menjadi beberapa yang kecil | Porsi waktu jeda menurut item, dengan audit sampel alasan jeda; tingkat pembukaan ulang; konfirmasi penyerahan oleh pengguna sebelum penutupan |
| Pemenuhan dalam target | Mendefinisikan ulang target agar lebih mudah; menghitung hanya permintaan yang selesai dan mengabaikan yang terbuka lama; memilih item cepat untuk himpunan target | Usia backlog untuk permintaan terbuka; perubahan target dicatat di register metrik dengan alasan; himpunan target mencakup semua item menurut volume |
| Backlog dan usia permintaan | Menutup permintaan lama sebagai “tidak ada respons” atau “basi”; memindahkan permintaan ke antrean atau kategori lain agar keluar dari antrean yang dihitung | Hitungan permintaan yang ditutup tanpa penyerahan, menurut alasan; perpindahan kategori dan antrean ditinjau dalam rapat bulanan |
| Waktu tunggu persetujuan | Penyetuju menyetujui tanpa membaca agar waktu mereka rendah; peminta mengejar penyetuju di luar sistem sehingga penantian yang tercatat pendek | Tinjauan sampel permintaan yang disetujui terhadap kebijakan; tingkat pembukaan ulang dan pengecualian keamanan untuk item yang disetujui; jumlah langkah persetujuan per item |
| Volume permintaan menurut item katalog | Mengurangi volume dengan membuat katalog lebih sulit ditemukan atau mengecilkan hati permintaan; mengklasifikasi ulang permintaan sebagai insiden atau “pertanyaan umum” | Kepuasan pengguna terhadap katalog; porsi kontak yang diklasifikasikan “lainnya”; data adopsi layanan (lihat topik 6.3, Metrik adopsi layanan dan katalog) |
| Porsi otomatisasi | Mengotomatisasi item remeh untuk menaikkan persentase; menghitung permintaan berskrip yang masih diperiksa orang dengan tangan sebagai otomatis; menyembunyikan langkah manual dalam tiket terpisah | Porsi berbobot menurut volume permintaan dan waktu kerja langsung yang dihilangkan; kegagalan otomatisasi dan tingkat kembali-ke-manual; sampel permintaan “otomatis” ditelusuri dari ujung ke ujung |
| Tingkat pembukaan ulang permintaan | Mengecilkan hati pembukaan ulang dengan mempersulitnya; menyuruh pengguna membuka permintaan baru, yang mengatur ulang penghitung | Permintaan berulang dari pengguna sama untuk item sama dalam jendela; kepuasan pengguna menurut item; pembukaan ulang diizinkan dari pemberitahuan |

Pembacaan yang sehat tampak seperti ini. Median dan persentil ke-95 turun bersama, atau persentil ke-95 turun sementara median bertahan. Permintaan terbuka tertua tidak jauh lebih tua dari persentil ke-95 yang terpenuhi. Tingkat pembukaan ulang dan kepuasan tetap datar atau membaik sementara kecepatan membaik. Porsi otomatisasi naik pada item yang penting menurut volume, dan volume sendiri berubah karena sebab yang dapat dijelaskan tim. Jika satu angka membaik tajam sementara pagar pembatasnya melenceng ke arah lain, pergilah dan lihat permintaan di baliknya.

## Kompromi: kelebihan dan kekurangan

| Pilihan | Keuntungan | Kerugian |
| --- | --- | --- |
| Pengukuran per item | Target cocok dengan pekerjaan; menunjukkan di mana perancangan ulang membayar | Lebih banyak data untuk dirawat; item kecil punya sedikit titik data |
| Median dan persentil ke-95, bukan rata-rata | Menggambarkan yang dijalani pengguna; tahan pencilan | Lebih sulit dijelaskan kepada eksekutif yang terbiasa satu angka; tidak stabil untuk item bervolume rendah |
| Menjeda jam saat menunggu pengguna | Adil bagi tim ketika pengguna penyebab keterlambatan | Mudah disalahgunakan; menyembunyikan efek formulir yang tidak jelas dan komunikasi yang buruk |
| Menghitung porsi otomatisasi | Membuat kemajuan otomatisasi terlihat dan mengaitkannya dengan biaya | Menghargai otomatisasi mudah; tidak berkata apa-apa tentang mutu kecuali dipasangkan dengan tingkat kegagalan |
| Mengukur dari pengajuan pengguna sampai konfirmasi pengguna | Cocok dengan pengalaman pelanggan | Bergantung pada konfirmasi pengguna, yang sering hilang; butuh aturan bawaan |
| Pemisahan ketat permintaan dari insiden | Data lebih bersih dan target lebih baik | Butuh disiplin penerimaan dan perdebatan tentang kasus tepi |

Kompromi utamanya adalah antara angka yang bersih dan yang adil. Jam ketat yang tak pernah menjeda sederhana dan sulit dimanipulasi, tetapi menghukum tim ketika pengguna lambat. Jam fleksibel lebih adil tetapi butuh audit. Kebanyakan tim berhasil dengan memulai ketat, menambah satu keadaan jeda eksplisit dengan alasan, dan melaporkan porsi jeda secara terbuka.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Tiga item katalog mana yang menyebabkan paling banyak penantian bagi pengguna kita, dan bagaimana kita tahu?**
Bawa tabel per item berisi volume, median, dan waktu pemenuhan persentil ke-95. Minta kelompok memilih item menurut total penantian (volume dikali penantian tipikal), bukan menurut betapa menjengkelkannya. Bandingkan jawaban dengan naluri pertama orang. Fasilitator sebaiknya mencatat di mana data dan naluri berbeda.

**2. Kapan jam kita mulai dan berhenti, dan apakah pengguna akan setuju?**
Pilih satu item umum dan telusuri perjalanannya sebagaimana dilihat pengguna, dari klik pertama sampai saat mereka dapat memakai hasilnya. Tandai di mana status tiket kita berkata “selesai” dan di mana pengguna akan berkata “selesai.” Jurang di antara keduanya adalah penantian yang tak terlihat. Sepakati satu perubahan pada peristiwa berhenti, dan tuliskan di register metrik.

**3. Berapa banyak waktu terlewat kita adalah orang bekerja, dan berapa banyak menunggu?**
Ambil sampel sepuluh permintaan terpenuhi untuk satu item dan pecah masing-masing menjadi waktu kerja langsung, persetujuan, dan menunggu pengguna. Tampilkan hasilnya sebagai batang bertumpuk. Tanyakan apa yang harus benar agar penantian berkurang separuh. Pertanyaan ini biasanya menggeser ruangan dari “kita butuh lebih banyak staf” ke “kita butuh lebih sedikit serah terima.”

**4. Persetujuan mana yang dapat diganti aturan yang disepakati di muka?**
Daftar persetujuan untuk item teratas dan alasan kebijakan masing-masing. Di mana tak seorang pun ingat penolakan terakhir, persetujuan itu mungkin ritual.

**5. Jika kita mengotomatisasi item katalog berikutnya, apakah angkanya akan naik karena alasan yang benar?**
Bahas bagaimana porsi otomatisasi dapat naik lewat item mudah atau bervolume rendah sementara pengguna tidak melihat perbedaan. Tanyakan apa yang akan diukur tim untuk memastikan otomatisasi membantu: waktu kerja langsung yang dihilangkan, tingkat kegagalan, tingkat pembukaan ulang, dan kepuasan. Putuskan item mana yang diotomatisasi berikutnya memakai volume dan waktu kerja langsung, bukan kemudahan saja.

**6. Apa yang akan kita lakukan jika angka di halaman ini memburuk, dan siapa yang akan disalahkan?**
Jalankan eksperimen pikiran secara terbuka. Tanyakan apa yang akan tergoda diubah tim dalam data sebelum mengubah layanan. Sepakati bahwa respons pertama atas angka yang memburuk adalah melihat permintaan di baliknya.

## Empat perspektif

### Tim produk dan pengiriman

Tim produk menghasilkan permintaan tentang layanan mereka sendiri: akses ke lingkungan, pipeline baru, data uji, kunci lisensi. Waktu pemenuhan yang panjang untuk ini muncul sebagai pekerjaan menganggur dalam alur tim sendiri, jadi ukurannya milik papan mereka sebagai keadaan terhalang. Tim yang memiliki layanan sebaiknya menerbitkan item permintaan dan target mereka sendiri, dan memperlakukan permintaan berulang sebagai kandidat backlog (lihat topik 2.6, Metrik backlog dan penyempurnaan). Di mana permintaan sebenarnya kemampuan platform yang hilang, permintaan berulang adalah alasan membangunnya.

### Tim layanan dan operasi

Bagi orang yang memenuhi permintaan, tabel per item adalah peta ke mana upaya pergi. Mereka tahu langkah mana yang manual, persetujuan mana yang macet, dan formulir mana yang menghasilkan masukan samar. Mereka sebaiknya memiliki model permintaan, backlog otomatisasi, dan tinjauan bulanan, dan menjadi audiens pertama data. Angka menggambarkan antrean dan proses, jadi buat eksplisit bahwa tak seorang pun diperingkat dan bahwa variasi antarorang sebagian besar mencerminkan campuran permintaan yang mereka ambil.

### Kepemimpinan dan tata kelola

Pemimpin butuh tampilan singkat: median dan persentil ke-95 untuk item utama, porsi yang dipenuhi dalam target, permintaan terbuka tertua, dan tren porsi otomatisasi dan biaya per permintaan (lihat topik 7.5, Biaya layanan dan ekonomi per unit). Tugas tata kelola adalah bertanya apa yang berubah, bukan siapa yang lambat. Pemimpin juga menyetujui sisi kebijakan persetujuan, sehingga memegang tuas yang paling mengurangi penantian.

### Pelanggan dan pengguna

Pengguna peduli tiga hal: berapa lama, seberapa terprediksi, dan berapa banyak upaya. Mereka jarang peduli keadaan internal. Tunjukkan target polos per item (“laptop dalam lima hari kerja”), beri tahu di mana permintaan mereka, dan minta mereka mengonfirmasi penyerahan. Kumpulkan sinyal kepuasan satu pertanyaan saat penutupan dan baca komentarnya.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah universitas regional (organisasi fiktif) menjalankan service desk dan tim platform kecil. Angka di bawah bersifat ilustratif, bukan dari organisasi nyata mana pun.

Pada tinjauan bulanan tim melihat tabel per item. Di semua permintaan, rata-rata waktu pemenuhan adalah 3,1 hari kerja, yang tampak dapat diterima dan nyaris tak bergerak selama setahun. Menurut item, gambarannya berbeda. “Akses drive bersama” punya median 0,4 hari dan persentil ke-95 sebesar 2 hari. “Lisensi perangkat lunak departemen” punya median 2 hari dan persentil ke-95 sebesar 11 hari. “Laptop karyawan baru” punya median 6 hari dan persentil ke-95 sebesar 15 hari. Tiga item teratas menurut volume adalah akses drive bersama, permintaan lisensi, dan laptop karyawan baru, dengan porsi ilustratif 32, 21, dan 9 persen dari semua permintaan.

Tim mengambil sampel sepuluh permintaan laptop dan memecah waktunya. Hasil ilustratif: sekitar 0,5 hari kerja langsung, 2,5 hari menunggu persetujuan atasan langsung, 1,5 hari menunggu konfirmasi stok, dan sisanya dalam antrean kurir. Waktu tunggu persetujuan adalah bagian terbesar.

Keputusan mengikuti dari data. Tim mengusulkan, bersama pemilik keuangan dan pemilik keamanan, bahwa laptop dalam katalog standar disetujui di muka ketika peran karyawan baru dikonfirmasi sumber daya manusia, dengan atasan diberi tahu alih-alih diminta. Mereka juga menghubungkan pemeriksaan stok ke sistem inventaris. Mereka menetapkan eksperimen selama satu kuartal dan menyepakati apa yang dihitung sebagai keberhasilan: persentil ke-95 untuk laptop turun, dan tingkat pembukaan ulang serta skor kepuasan tetap sama.

Risiko manipulasi muncul di bulan kedua. Median untuk lisensi turun tajam, dari 2 hari menjadi di bawah 1. Tinjauan memperhatikan bahwa porsi waktu jeda “menunggu pengguna” untuk item itu melonjak dari 5 persen ilustratif menjadi 40 persen, dan tingkat pembukaan ulang naik. Sampel menunjukkan agen menjeda permintaan dengan pesan generik begitu lisensi butuh pemeriksaan apa pun, yang menghentikan jam. Tim tidak menyalahkan agen. Mereka melihat bahwa target membuat penjedaan menarik dan bahwa kolom alasan jeda adalah teks bebas. Mereka mengubah alasan jeda menjadi daftar pendek, mewajibkan pertanyaan spesifik kepada pengguna, dan menambahkan porsi waktu jeda sebagai kolom tetap di samping median. Median lisensi kembali mendekati tingkat sebelumnya, tingkat pembukaan ulang turun, dan tim memakai waktu diskusi yang dihemat untuk merancang ulang formulir lisensi, yang menghasilkan permintaan tak jelas.

Setelah kuartal itu (ilustratif), persentil ke-95 laptop turun dari 15 menjadi 9 hari dan porsi otomatisasi untuk akses drive bersama mencapai 70 persen. Tim mencatat kedua perubahan dan memilih formulir lisensi sebagai eksperimen berikutnya.

## Sudut pandang sektor

**Startup.** Startup punya sedikit jenis permintaan dan tak ada katalog formal, dan orang yang sama menangani permintaan dan membangun produk. Ukur tiga atau empat permintaan yang menghalangi anggota baru, seperti akun dan peralatan, dan lacak permintaan terbuka tertua. Otomatisasi orientasi sejak awal, karena setiap perekrutan mengulanginya.

**Bisnis kecil.** Bisnis kecil sering bergantung pada satu orang TI atau penyedia eksternal. Pakai papan bersama sederhana dengan kolom untuk tiap keadaan dan lacak usia dan volume permintaan menurut jenis. Minta penyedia volume bulanan menurut item dan permintaan terbuka tertua.

**Perusahaan besar.** Perusahaan besar punya ratusan item katalog, banyak kelompok pemenuhan, dan persetujuan berlapis. Pusatkan perhatian pada item teratas menurut volume dan item dengan penantian terlama menurut total tunggu. Standarkan definisi jam di seluruh kelompok pemenuhan sebelum membandingkannya, dan laporkan serah terima lintas kelompok terpisah (lihat topik 9.3, Metrik kolaborasi dan serah terima). Waktu pemenuhan pemasok termasuk dalam tampilan yang sama, diukur dari permintaan pelanggan, bukan dari penerimaan pemasok.

**Pemerintah dan sektor publik.** Badan publik menambah persetujuan wajib, aturan pengadaan, dan kewajiban catatan, jadi sebagian waktu tunggu adalah kebijakan dan sebaiknya dilabeli demikian alih-alih dihitung sebagai keterlambatan untuk disingkirkan. Terbitkan target per item dalam bahasa polos di mana komitmen layanan bersifat publik. Laporkan dengan cara yang dapat direproduksi regulator atau badan pengawas, dengan definisi tertulis.

## Kasus bisnis: motivasi, ROI, dan TCO

Permintaan adalah porsi besar dan berulang dari pekerjaan yang sampai ke service desk, jadi perancangan ulang yang sederhana pun berefek luas. Motivasi utamanya adalah penantian yang lebih pendek dan lebih terprediksi bagi pengguna, upaya penanganan per permintaan yang lebih rendah, lebih sedikit kontak berulang, dan kapasitas yang dibebaskan untuk pekerjaan masalah dan perbaikan.

Sisi biayanya sebagian besar sekali jalan dan sedang. Mendefinisikan item katalog, menyepakati jam, dan memastikan alat mencatat keadaan yang dibutuhkan adalah beberapa hari kerja per kelompok, ditambah upaya berkelanjutan kecil untuk menjaga saluran data tetap benar (lihat topik 1.5, Sumber data dan instrumentasi). Otomatisasi punya biaya bangun dan rawat sendiri, yang mencakup memantau otomatisasi, menangani kegagalan, dan memperbaruinya ketika sistem sasaran berubah. Hitung itu dalam total biaya kepemilikan di luar lisensi atau waktu bangun.

Imbal hasil sebaiknya diperkirakan dari data Anda sendiri dan bukan dari acuan umum. Untuk satu item, kalikan volume bulanan dengan waktu kerja langsung yang dihemat dan dengan biaya penuh waktu itu, lalu kurangi biaya bangun dan jalankan perubahan. Tambahkan nilai waktu tunggu yang disingkirkan bagi pengguna, memakai metode yang dapat Anda pertahankan, dan tampilkan terpisah karena itu estimasi jenis berbeda. Tidak ada angka dalam topik ini yang merupakan acuan, dan angka contoh bersifat ilustratif. Kaitkan kasus bisnis dengan biaya unit per permintaan di mana data keuangan ada (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Satu rata-rata campuran untuk semua permintaan.** Itu menyembunyikan kemenangan cepat dan ekor panjang. Laporkan per item, dengan median dan persentil ke-95.
- **Menutup tiket dan menyebutnya diserahkan.** Pengguna mungkin masih belum punya apa-apa. Definisikan penyerahan dari sisi pengguna dan minta konfirmasi.
- **Keadaan jeda bentuk bebas.** Status “menunggu” tanpa alasan membiarkan jam dihentikan untuk sebab apa pun. Pakai daftar pendek alasan dan laporkan porsi jeda.
- **Menghitung otomatisasi menurut jumlah item.** Sepuluh item langka yang diotomatisasi dapat mengangkat persentase tanpa membantu siapa pun. Beri bobot menurut volume dan waktu kerja langsung.
- **Memeringkat agen menurut permintaan yang ditutup.** Itu menghargai memilih tiket mudah dan menghukum orang yang mengambil yang sulit. Laporkan hanya di tingkat tim dan item.
- **Menyembunyikan permintaan agar tampak efisien.** Membuat katalog sulit dipakai menurunkan volume dan menaikkan frustrasi. Pasangkan volume dengan data kepuasan dan adopsi.
- **Memperlakukan persetujuan sebagai tak tersentuh.** Persetujuan sering keterlambatan terbesar dan jarang ditinjau. Tanyakan apa yang dilindungi masing-masing dan apakah aturan dapat melakukan pekerjaan itu.
- **Mencampur permintaan dengan insiden.** Itu mendistorsi kedua himpunan angka. Klasifikasikan saat penerimaan dan ambil sampel klasifikasinya.

## Model kematangan

| Dimensi | Memulai | Berkembang | Terstandar | Terkelola | Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | Permintaan dihitung sebagai tiket; akhir jam adalah apa pun arti “tertutup” | Beberapa tim mendefinisikan awal dan akhir per item; definisi berbeda | Satu definisi jam tertulis per item katalog, dibagikan antartim | Definisi ditinjau secara berkala dan perubahan dicatat dengan alasan | Definisi mengikuti pandangan pelanggan lintas pemasok dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Data dan pelaporan | Hitungan ditarik dengan tangan dari alat | Laporan untuk beberapa item dari alat ITSM; waktu rata-rata | Median dan persentil ke-95 per item dari satu sumber data | Tren, usia backlog, dan porsi waktu jeda ditinjau bersama pagar pembatasnya | Data pemenuhan dari tim internal dan pemasok digabung dan dikaitkan dengan hasil pengguna |
| Permintaan dan otomatisasi | Permintaan ditangani satu per satu; tak ada pandangan permintaan berulang | Item teratas diidentifikasi secara informal; beberapa skrip | Model permintaan didokumentasikan untuk item teratas; backlog otomatisasi diperingkat menurut volume dan waktu kerja langsung | Porsi otomatisasi dan tingkat kegagalan dilacak; persetujuan dirancang ulang berdasarkan bukti | Permintaan, swalayan, dan otomatisasi direncanakan bersama di seluruh organisasi dan disesuaikan terus-menerus |
| Pemakaian dalam perbaikan | Angka dilaporkan ke atas, tidak dipakai | Perbaikan sesekali setelah keluhan | Tinjauan bulanan oleh tim yang mengerjakan | Perbaikan yang didanai terkait hasil per item | Gagasan perbaikan datang dari tim, pengguna, dan pemasok, dan hasil menyuapi kembali perancangan katalog |

## Daftar periksa

- [ ] Setiap item katalog dalam lingkup punya pemilik, definisi satu baris tentang “diserahkan,” dan target yang dinyatakan.
- [ ] Peristiwa awal dan akhir jam pemenuhan tertulis untuk tiap item.
- [ ] Menunggu pengguna adalah keadaan terpisah dengan daftar pendek alasan, dan waktu jeda dilaporkan.
- [ ] Laporan menunjukkan median dan persentil ke-95 per item, dengan jumlah permintaan di balik masing-masing.
- [ ] Permintaan terbuka tertua terlihat oleh tim setiap pekan.
- [ ] Waktu kerja langsung, persetujuan, dan menunggu telah disampel untuk item teratas.
- [ ] Volume menurut item ditinjau bulanan dan dibandingkan dengan data adopsi atau kepuasan.
- [ ] Porsi otomatisasi diberi bobot menurut volume dan dipasangkan dengan tingkat kegagalan dan kembali-ke-manual.
- [ ] Setiap metrik kecepatan dipasangkan dengan tingkat pembukaan ulang dan sinyal kepuasan pengguna.
- [ ] Permintaan, insiden, dan perubahan diklasifikasikan saat penerimaan, dan klasifikasinya disampel.
- [ ] Tak ada laporan yang memeringkat agen individu.

## Prompt AI

**Susun model permintaan dan definisi jam untuk satu item katalog.**

```text
Saya mendefinisikan pengukuran untuk item katalog ini: [catalog item name].
Langkah saat ini [list steps and who does each], persetujuannya [list
approvals], dan alat kami [ITSM tool]. Susun model permintaan dengan informasi
yang dibutuhkan, peristiwa awal dan akhir jam pemenuhan, keadaan tempat jam boleh
dijeda dan alasan yang diizinkan, dan daftar stempel waktu yang saya butuhkan
dicatat alat. Jangan mengarang nilai acuan atau fitur alat. Daftar asumsi Anda
dan pertanyaan yang harus saya jawab untuk menyelesaikan definisi.
```

**Pecah waktu terlewat menjadi waktu kerja langsung dan menunggu.**

```text
Berikut sampel [number] permintaan terpenuhi untuk [catalog item] dengan waktu
perubahan keadaan: [paste anonymized state history, no names]. Hitung, untuk
tiap permintaan dan untuk sampel, waktu kerja langsung, tunggu persetujuan, dan
waktu menunggu pengguna, dan tunjukkan median dan rentangnya. Tunjukkan keadaan
mana yang memegang waktu terbanyak dan pertanyaan apa yang harus saya ajukan
kepada tim tentangnya. Jangan menyimpulkan sebab tanpa bukti, dan jangan
membandingkan individu. Daftar asumsi Anda.
```

**Peringkatkan kandidat otomatisasi.**

```text
Berikut tabel item katalog dengan volume bulanan, median waktu kerja langsung,
variasi langkah, dan sistem yang disentuh tiap item: [paste table]. Sarankan cara
memeringkat kandidat otomatisasi memakai volume, stabilitas, dan waktu kerja
langsung, dan jelaskan peringkat untuk [number] item teratas. Tandai item yang
otomatisasinya dapat menciptakan risiko keamanan atau mutu, dan daftar apa yang
harus saya verifikasi dengan [control owner role] lebih dulu. Jangan mengarang
angka penghematan atau nilai acuan. Daftar asumsi Anda.
```

**Tinjau dasbor pemenuhan untuk risiko manipulasi.**

```text
Ini dasbor pemenuhan permintaan kami: [describe metrics, definitions, and
targets]. Untuk tiap metrik, daftar bagaimana ia dapat dimanipulasi atau salah
dibaca, tanda yang dapat diamati dalam data, dan metrik atau praktik pagar
pembatas berpasangan. Periksa bahwa tidak ada yang memeringkat individu, dan
sarankan perubahan kata-kata yang mengurangi tekanan pada tim. Jangan mengarang
ambang; tanyakan kepada saya untuk yang Anda butuhkan. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan definisi, vektor manipulasi, dan pagar pembatas bagi metrik permintaan, serta topik tetangga yang berpasangan dengannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penyuntingan topik ini menjaga templat, jam, dan pasangan pagar pembatas tetap utuh.

## Poin penting

- Ukur pemenuhan per item katalog, dari pengajuan pengguna sampai konfirmasi pengguna, dan laporkan median dan persentil tinggi.
- Sebagian besar waktu terlewat adalah menunggu, jadi pecah waktu kerja langsung, persetujuan, dan menunggu pengguna sebelum memutuskan apa yang diperbaiki.
- Baca volume menurut item sebagai pesan dari pengguna, dan otomatisasi item yang sering dan stabil lebih dulu.
- Pasangkan setiap angka kecepatan dengan tingkat pembukaan ulang dan sinyal kepuasan, dan laporkan waktu jeda secara terbuka.
- Gambarkan antrean dan proses, tidak pernah orangnya.

## Referensi dan bacaan lanjutan

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
