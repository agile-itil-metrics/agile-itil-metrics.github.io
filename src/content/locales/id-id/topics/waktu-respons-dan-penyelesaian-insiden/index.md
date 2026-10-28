# Waktu respons dan penyelesaian insiden

**Ukuran waktu untuk insiden menggambarkan berapa lama pengguna menunggu pada tiap tahap, jadi laporkan sebagai distribusi dengan jam yang dituliskan, tidak pernah sebagai satu rata-rata, dan pasangkan setiap angka kecepatan dengan ukuran apakah perbaikannya bertahan.**

## Gambaran umum dan motivasi

Insiden, dalam manajemen layanan TI (ITSM), adalah gangguan tak terencana pada layanan atau penurunan mutunya. [Manajemen insiden](https://en.wikipedia.org/wiki/Incident_management) adalah praktik yang memulihkan layanan normal secepat yang aman. Dalam ITIL 4, praktik itu disebut manajemen insiden dan berada di antara praktik manajemen layanan kerangka [ITIL](https://en.wikipedia.org/wiki/ITIL). Padanan agile-nya adalah kebiasaan tim memperlakukan pekerjaan tak terencana sebagai aliran pekerjaan kelas satu, dan praktik siaga serta tinjauan tanpa menyalahkan yang berasal dari [rekayasa keandalan situs](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), disiplin menjalankan layanan dengan metode rekayasa perangkat lunak.

Waktu adalah cara paling alami menggambarkan insiden, dan paling sering disalahgunakan. Satu insiden melewati beberapa tahap. Sesuatu rusak, monitor atau pengguna menyadarinya, seseorang mengakui peringatan, seseorang mulai bekerja, layanan dipulihkan bagi pengguna, dan tiket ditutup setelah sebab ditangani atau ditunda. Setiap jeda antara dua peristiwa ini adalah ukuran terpisah dengan pemilik terpisah, sebab keterlambatan terpisah, dan obat terpisah. Menyebut semuanya “waktu penyelesaian” menyembunyikan di mana keterlambatan berada.

Topik ini mencakup ukuran waktu terlewat yang mengikuti insiden dari awal sampai akhir: **waktu mendeteksi**, **waktu mengakui**, **waktu respons pertama**, **waktu memulihkan**, dan **waktu menyelesaikan**. Ia juga mencakup usia insiden terbuka, berapa kali insiden berpindah tangan, dan masalah statistik ringkasan yang paling terkenal, rata-rata waktu memulihkan atau menyelesaikan (MTTR). Hitungan, kategori, dan prioritas dibahas di tempat lain (lihat topik 3.2, Volume dan prioritas insiden). Insiden besar dan tak biasa punya ukurannya sendiri (lihat topik 3.4, Metrik insiden besar).

### Istilah yang dipakai dalam topik ini

- **Waktu mendeteksi (TTD).** Waktu terlewat dari saat kerusakan mulai memengaruhi pengguna sampai organisasi mengetahuinya, lewat pemantauan atau laporan pengguna.
- **Waktu mengakui (TTA).** Waktu terlewat dari peringatan atau tiket diangkat sampai orang atau tim bernama menerima kepemilikan.
- **Waktu respons pertama.** Waktu terlewat dari insiden dicatat sampai tindakan atau pesan bermakna pertama kepada pengguna terdampak. Balasan otomatis tidak dihitung.
- **Waktu memulihkan.** Waktu terlewat dari awal dampak pengguna sampai pengguna dapat memakai layanan lagi, meskipun sebab hanya dikitari dengan solusi sementara.
- **Waktu menyelesaikan.** Waktu terlewat dari insiden dicatat sampai insiden ditutup karena layanan dipulihkan dan pengguna telah mengonfirmasi atau diberi kesempatan wajar untuk mengonfirmasi.
- **Rata-rata waktu memulihkan atau menyelesaikan (MTTR).** Rata-rata aritmetika salah satu durasi itu atas sekumpulan insiden. Huruf R dibaca perbaikan, pemulihan, pemulihan, penyelesaian, atau respons tergantung siapa yang berbicara, yang merupakan masalah pertama singkatan itu. [Artikel Wikipedia tentang mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair) mendaftar variannya.
- **Perjanjian tingkat layanan (SLA).** [Perjanjian tingkat layanan](https://en.wikipedia.org/wiki/Service-level_agreement) adalah komitmen antara penyedia dan pelanggan tentang tingkat layanan, sering mencakup target waktu respons dan penyelesaian menurut prioritas.

### Mengapa rata-rata adalah ringkasan yang buruk

Durasi insiden tidak simetris. Kebanyakan insiden pendek, beberapa sangat panjang, dan yang panjang mendominasi rata-rata mana pun. Durasi semacam ini sering digambarkan dengan baik oleh bentuk miring kanan seperti [distribusi log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution). Pada data miring, rata-rata dapat duduk jauh di atas tampilan insiden tipikal, dan satu gangguan panjang dapat menggesernya lebih daripada perbaikan sebulan.

Tim SRE Google telah menerbitkan analisis tentang masalah ini. Ia berpendapat bahwa, untuk set data insiden yang dipelajarinya, sebaran durasi insiden cukup lebar sehingga MTTR dapat menyembunyikan perbaikan nyata atau menunjukkan perubahan yang kebisingan, dan merekomendasikan melihat distribusi sebagai gantinya (Davidovič, 2021, tercantum dalam referensi). Penalarannya bertumpu pada statistik yang dikenal baik, jadi Anda dapat memeriksanya pada data Anda sendiri tanpa memercayai kesimpulan siapa pun: plot durasi insiden Anda, hitung rata-rata dan [median](https://en.wikipedia.org/wiki/Median), dan lihat seberapa jauh keduanya (lihat topik 1.6, Literasi statistik untuk metrik layanan).

Alternatifnya adalah [persentil](https://en.wikipedia.org/wiki/Percentile). Median menyatakan berapa lama pengguna tipikal menunggu. Persentil ke-85 atau ke-95 menyatakan berapa lama yang kurang beruntung menunggu. Pelanggan mengingat penantian panjang, bukan rata-rata, jadi komitmen persentil seperti “sembilan dari sepuluh insiden prioritas ini dipulihkan dalam waktu yang dinyatakan” jauh lebih cocok dengan pengalaman mereka daripada rata-rata.

### Bagaimana pandangan ITIL dan agile berbeda

Pandangan ITIL cenderung dimulai dari prioritas dan target. Dampak dan urgensi menetapkan prioritas, prioritas menetapkan target waktu respons dan penyelesaian, dan perjanjian tingkat layanan dapat melampirkan konsekuensi untuk melewatkannya. Ini tertib dan mudah diaudit, dan rentan terhadap manipulasi yang diundang target (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Pandangan agile dan SRE dimulai dari dampak pengguna dan dari alur. Ia bertanya seberapa cepat tim membatasi kerugian, berapa banyak waktu terlewat insiden yang merupakan kerja aktif dan berapa yang menunggu, dan apa yang dipelajari tim. Ia mengutamakan ukuran dampak (pengguna terdampak, menit layanan menurun) daripada ukuran status tiket, dan memperlakukan jam tiket sebagai proksi yang praktis tetapi tak sempurna. Kedua pandangan itu kompatibel. Pakai struktur prioritas ITIL untuk memutuskan apa yang diukur dan untuk siapa, dan pakai pemikiran alur dan dampak untuk memutuskan apakah angka itu bermakna.

## Prinsip utama

- **Sebut tahapnya, bukan “penyelesaian.”** Mendeteksi, mengakui, merespons, memulihkan, dan menyelesaikan adalah pertanyaan berbeda dengan pemilik berbeda. Laporkan masing-masing dengan namanya sendiri.
- **Tulis kedua jam.** Setiap ukuran waktu menyatakan peristiwa mana yang memulainya, mana yang menghentikannya, dan keadaan mana yang menjedanya. Sebagian besar manipulasi hidup di batas-batas ini.
- **Laporkan distribusi.** Tampilkan median, persentil tinggi, dan usia insiden terbuka tertua. Hindari rata-rata tunggal, yang membuat data miring tidak andal.
- **Ukur pemulihan terpisah dari penutupan.** Pengguna peduli kapan layanan kembali. Tiket bisa ditutup kemudian, setelah sebab ditangani.
- **Pasangkan kecepatan dengan ketahanan.** Pemulihan cepat yang dibatalkan insiden yang sama keesokan harinya bukan perbaikan. Tampilkan tingkat kekambuhan dan pembukaan ulang di samping setiap ukuran waktu.
- **Gambarkan tim, layanan, dan sistem.** Jangan pernah memeringkat agen atau insinyur individu menurut waktu respons atau penyelesaian.
- **Segmentasikan sebelum membandingkan.** Bandingkan yang sejenis, menurut prioritas dan layanan, karena angka campuran mencampur setel ulang kata sandi dengan kegagalan basis data.

## Definisi metrik

Setiap baris menyatakan jamnya. Waktu kalender dan waktu kerja berbeda: katakan mana yang Anda pakai. Di mana ukuran memakai persentil, tabel memberi ke-50 dan ke-95, dan tim boleh menambah ke-85.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Waktu mendeteksi | Berapa lama kerusakan memengaruhi pengguna sebelum organisasi tahu | Jam dimulai pada saat pertama dampak pengguna (diambil dari data pemantauan atau awal dampak terkonfirmasi yang dicatat dalam tinjauan); berhenti pada peringatan atau laporan pengguna pertama. Dilaporkan sebagai median dan persentil ke-95 per layanan. Insiden tanpa awal yang diketahui dihitung dan dilaporkan terpisah, tidak dibuang | menit | Platform pemantauan dan peringatan; catatan insiden dengan kolom awal dampak | Manajemen insiden; manajemen pemantauan dan peristiwa | Pekerjaan observabilitas dan kualitas peringatan (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan) | Bulanan |
| Waktu mengakui | Berapa lama peringatan atau tiket yang diangkat menunggu sebelum ada orang yang memilikinya | Jam dimulai saat peringatan menyala atau tiket dicatat; berhenti saat orang atau tim bernama menerimanya. Penugasan otomatis tidak menghentikan jam. Dilaporkan sebagai median dan persentil ke-95 menurut prioritas | menit | Alat paging; riwayat penugasan alat ITSM | Manajemen insiden; service desk | Respons siaga dalam rotasi SRE | Bulanan |
| Waktu respons pertama | Berapa lama pengguna menunggu balasan manusia pertama yang berguna | Jam dimulai saat insiden dicatat; berhenti pada pesan atau tindakan manusia pertama yang menangani laporan. Pengakuan otomatis dan tanda terima bertemplat dikecualikan. Jam kerja dinyatakan | menit atau jam kerja | Log komunikasi alat ITSM | Service desk; manajemen insiden | Umpan balik tepat waktu kepada pengguna, seperti dalam kesepakatan kerja | Mingguan |
| Waktu memulihkan | Berapa lama pengguna tanpa layanan yang berfungsi | Jam dimulai pada awal dampak pengguna; berhenti saat pengguna dapat memakai layanan lagi, termasuk lewat solusi sementara atau rollback. Sebab yang diperbaiki kemudian tidak memperpanjangnya. Dilaporkan sebagai median dan persentil ke-95 menurut prioritas dan layanan | menit atau jam | Catatan insiden dengan stempel waktu awal dampak dan pemulihan; pemantauan | Manajemen insiden | Rata-rata waktu memulihkan dalam istilah DORA, dibaca sebagai distribusi (lihat topik 2.8, Metrik DORA) | Bulanan |
| Waktu menyelesaikan | Berapa lama catatan insiden terbuka sampai ditutup | Jam dimulai saat insiden dicatat; berhenti saat ditutup setelah pemulihan dan konfirmasi pengguna atau penantian yang wajar. Waktu dalam “menunggu pelanggan” ditampilkan sebagai porsi tersendiri yang dilaporkan dan tidak dikurangkan dari judul. Dilaporkan sebagai median dan persentil ke-95 menurut prioritas | jam atau jam kerja | Riwayat status alat ITSM | Manajemen insiden | Cycle time untuk pekerjaan tak terencana (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur) | Bulanan |
| Usia insiden terbuka tertua | Berapa lama insiden terbuka yang paling lama telah terbuka | Sekarang dikurangi waktu dicatat, untuk tiap insiden terbuka, mendaftar beberapa yang tertua menurut prioritas. Status jeda tidak dikurangkan | hari | Daftar insiden terbuka alat ITSM | Manajemen insiden | Usia item kerja pada papan tim (lihat topik 2.1, Ukuran alur) | Mingguan |
| Porsi waktu aktif | Proporsi waktu terlewat insiden yang dihabiskan dalam kerja aktif dan bukan menunggu | Jumlah waktu dalam keadaan aktif / total waktu dari dicatat sampai ditutup, untuk insiden yang ditutup pada periode itu. Keadaan aktif adalah yang di dalamnya seseorang mengerjakan insiden; keadaan menunggu didaftar dalam definisi | persen | Riwayat status alat ITSM | Manajemen insiden | Efisiensi alur (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur) | Kuartalan |
| Jumlah penugasan ulang | Berapa kali insiden berpindah tim pemilik sebelum pemulihan | Hitungan perubahan kelompok penugasan dari dicatat sampai dipulihkan, diringkas sebagai median dan porsi insiden dengan tiga atau lebih. Dihitung per layanan dan prioritas, tidak pernah per agen | hitungan | Riwayat penugasan alat ITSM | Manajemen insiden; service desk | Jumlah serah terima (lihat topik 9.3, Metrik kolaborasi dan serah terima) | Bulanan |

Dua catatan tentang data. Pertama, waktu pemulihan hanya sebaik waktu awalnya. Banyak catatan insiden menangkap kapan seseorang mengetik tiket, yang dapat tertinggal berjam-jam dari awal dampak sebenarnya. Jika alat Anda tidak punya kolom awal dampak, tambahkan, dan perlakukan awal yang diperkirakan sebagai estimasi (lihat topik 1.5, Sumber data dan instrumentasi). Kedua, ketika Anda membandingkan periode, jaga definisi prioritas tetap sama, atau garis tren akan mencerminkan klasifikasi ulang.

## Rekomendasi

### Definisikan jam

**1. Tulis lembar jam untuk setiap ukuran waktu.** Untuk setiap tahap, daftar peristiwa awal, peristiwa akhir, keadaan yang menjeda jam, basis waktu (kalender atau jam kerja), dan pengecualian. Simpan di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

**2. Pisahkan pemulihan dari penutupan.** Catat kapan layanan kembali bagi pengguna sebagai stempel waktunya sendiri, terpisah dari kapan tiket ditutup. Pemulihan adalah apa yang dirasakan pengguna, dan penutupan mencakup verifikasi, dokumentasi, dan penanganan sebab. Tim yang memakai satu stempel waktu untuk keduanya dihargai karena menutup tiket terlalu dini atau dihukum karena tindak lanjut yang cermat.

**3. Catat awal dampak, bukan hanya waktu dicatat.** Minta penanggap mengisi kapan pengguna pertama merasakan efeknya, memakai data pemantauan bila mungkin. Tandai kolom sebagai estimasi bila demikian. Waktu mendeteksi tidak bermakna tanpanya, dan waktu pemulihan terdistorsi oleh ketiadaannya.

**4. Batasi status jeda dan laporkan pemakaiannya.** Menunggu pelanggan atau pemasok kadang sah. Izinkan daftar pendek status jeda bernama, wajibkan alasan, dan tampilkan porsi waktu insiden di masing-masing. Porsi waktu jeda yang naik adalah tanda hanyutan, bukan kecepatan.

### Laporkan dengan jujur

**5. Ganti rata-rata dengan median dan persentil tinggi.** Tampilkan persentil ke-50 dan ke-95 untuk setiap tahap, menurut prioritas, sebagai deret waktu. Tampilkan hitungan insiden di balik setiap titik, karena persentil dari sepuluh insiden adalah angka yang lemah. Di mana hitungan kecil, plot insiden individual sebagai titik dan lewati garis ringkasan.

**6. Tampilkan usia insiden terbuka tertua.** Bagan durasi insiden tertutup buta terhadap insiden yang masih terbuka, yang justru yang terburuk. Daftar insiden terbuka tertua menurut prioritas setiap pekan. Ini sulit diperbaiki tanpa menyelesaikan pekerjaan, sehingga menjadi pendamping berguna bagi bagan waktu penyelesaian mana pun.

**7. Segmentasikan menurut prioritas dan layanan.** Waktu penyelesaian campuran naik ketika campuran bergeser ke insiden kompleks, meskipun setiap jenis insiden ditangani lebih cepat. Bandingkan dalam satu prioritas dan satu layanan, dan tampilkan campuran di samping waktu (lihat topik 3.2, Volume dan prioritas insiden). Jangan menarik kesimpulan dari bulan ketika campuran berubah.

**8. Pakai batas kendali untuk memisahkan sinyal dari kebisingan.** Durasi insiden sangat bervariasi dari pekan ke pekan tanpa ada yang berubah. Bagan kendali, dengan batas yang dihitung dari periode stabil, menunjukkan kapan pergeseran cukup besar untuk layak dijelaskan (lihat topik 1.6, Literasi statistik untuk metrik layanan).

### Pasangkan kecepatan dengan ketahanan

**9. Tampilkan tingkat pembukaan ulang dan kekambuhan di samping setiap ukuran waktu.** Tingkat pembukaan ulang adalah porsi insiden yang dibuka kembali dalam jendela yang dinyatakan. Kekambuhan adalah layanan dan gejala yang sama muncul kembali dalam jendela. Jika waktu pemulihan turun sementara kekambuhan naik, tim sedang menerapkan tambalan cepat. Kirim insiden berulang ke manajemen masalah (lihat topik 4.1, Metrik manajemen masalah).

**10. Ukur menunggu dan serah terima, karena di situlah waktu pergi.** Untuk kebanyakan layanan, banyak waktu terlewat insiden adalah menunggu orang, keputusan, atau pemasok, bukan bekerja. Porsi waktu aktif dan jumlah penugasan ulang menunjukkan di mana melihat. Perbaikan untuk waktu penyelesaian panjang sering aturan perutean yang lebih jelas atau siaga bersama, bukan mengetik lebih cepat.

**11. Pakai target pada persentil, dengan manusia dalam lingkaran.** Jika Anda butuh target, nyatakan sebagai komitmen persentil untuk suatu prioritas, seperti “sembilan dari sepuluh insiden prioritas 2 dipulihkan dalam waktu yang dinyatakan,” dan sepakati dengan orang yang akan memenuhinya. Tinjau pelanggaran sebagai pertanyaan tentang sistem, bukan kesalahan orang yang siaga (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

**12. Tanyakan kepada pengguna tentang pengalamannya.** Survei singkat atas sampel insiden tertutup, dan pembacaan komentar, akan menyatakan apakah angka cocok dengan terasanya penantian. Pengguna sering lebih peduli komunikasi tepat waktu daripada menit pasti pemulihan (lihat topik 6.1, Metrik kepuasan pelanggan).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Waktu mendeteksi | Menetapkan awal dampak lebih lambat dari yang sebenarnya; melebarkan ambang peringatan sehingga lebih sedikit kerusakan dihitung sebagai insiden; menghitung hanya insiden yang ditangkap monitor | Porsi insiden yang pertama dilaporkan pengguna dan bukan pemantauan; tinjauan berkala estimasi awal dampak terhadap data pemantauan |
| Waktu mengakui | Menugaskan atau mengakui otomatis untuk menghentikan jam; mengakui peringatan lalu tidak berbuat apa-apa | Waktu respons pertama dan waktu memulihkan untuk insiden yang sama; sampel peringatan yang diakui tanpa aktivitas sesudahnya |
| Waktu respons pertama | Mengirim balasan bertemplat atau satu kata untuk menghentikan jam | Tinjau sampel balasan pertama untuk substansi; kontak ulang dan komentar survei |
| Waktu memulihkan | Menyatakan layanan pulih sebelum pengguna dapat memakainya; memulihkan dengan menekan gejala; mencatat gangguan sebagai pemeliharaan terencana | Kekambuhan dalam jendela; dampak yang dilaporkan pengguna setelah waktu pemulihan; porsi insiden yang dilabeli ulang setelah kejadian |
| Waktu menyelesaikan | Memindahkan tiket ke “menunggu pelanggan” atau “ditahan”; menutup setelah satu percobaan kontak; memecah insiden menjadi anak untuk menutup induk lebih awal | Porsi waktu dalam status jeda; tingkat pembukaan ulang; usia insiden terbuka tertua; baca sampel catatan penutupan |
| Usia insiden terbuka tertua | Menutup dan mengangkat kembali tiket tertua; mengklasifikasi ulang sebagai masalah atau permintaan untuk mengeluarkannya dari daftar | Tautkan duplikat ke aslinya dan laporkan usia tertaut; hitungan insiden yang diubah menjadi masalah atau permintaan tiap periode |
| Porsi waktu aktif | Mencatat pekerjaan singkat yang tak bermakna untuk menandai waktu sebagai aktif; berpindah ke keadaan aktif tanpa upaya | Bandingkan waktu aktif dengan hasil seperti waktu pemulihan; sampel catatan kerja |
| Jumlah penugasan ulang | Membuka kembali di bawah tim yang sama alih-alih meneruskan; meneruskan pekerjaan lewat saluran samping sehingga alat tidak menunjukkan serah terima | Waktu memulihkan dan kepuasan pengguna; pengamatan berkala bagaimana pekerjaan bergerak antartim |

Pembacaan yang sehat menunjukkan median dan persentil ekor yang bergerak bersama, porsi waktu jeda yang kecil dan stabil, sedikit insiden yang pertama dilaporkan pengguna, kekambuhan yang menurun, dan komentar survei yang cocok dengan data tiket. Perlakukan perbaikan judul yang datang sendirian sebagai dorongan untuk tinjauan manipulasi.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Rata-rata waktu memulihkan | Akrab; satu angka; mudah diplot tren | Didominasi beberapa insiden panjang; menyembunyikan perubahan nyata; buruk untuk sampel kecil |
| Median plus persentil tinggi | Menggambarkan pengalaman tipikal dan yang kurang beruntung; tahan pencilan | Butuh cukup insiden; dua angka untuk dijelaskan |
| Memplot setiap insiden | Menunjukkan bentuk penuh dan pencilan; jujur pada volume rendah | Lebih sulit dibaca pada volume tinggi; butuh fasilitator |
| Target menurut prioritas | Ekspektasi jelas; mendukung kontrak dan eskalasi | Mengundang klasifikasi ulang dan penjedaan jam; dapat mendorong upaya ke batas target |
| Ukuran jam tiket | Murah, ada di setiap alat ITSM | Mengukur tiket, bukan pengalaman pengguna; sensitif terhadap alur status |
| Ukuran berbasis dampak | Dekat dengan yang dirasakan pengguna; tahan trik tiket | Butuh data pemantauan dan kolom awal dampak; lebih sulit diaudit |

Jawaban pragmatisnya adalah mempertahankan jam tiket karena setiap alat memilikinya, menambahkan stempel waktu pemulihan berbasis dampak di mana pemantauan memungkinkan, dan memakai distribusi untuk keduanya. Rata-rata dapat diterima sebagai deskripsi kasar atas satu set insiden sejenis yang stabil dan besar, dan sebaiknya tidak pernah menjadi satu-satunya angka di halaman.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Tahap insiden mana yang paling lama bagi kita, dan bagaimana kita tahu?**
Gambar lini masa insiden di papan dengan tahap dari awal dampak sampai penutupan. Ambil sepuluh insiden terakhir dan tandai berapa lama tiap tahap memakan waktu, memakai data alat dan ingatan penanggap. Fasilitator sebaiknya mencari tahap tempat waktu bergerombol, yang sering menunggu serah terima atau keputusan, bukan pekerjaan teknis. Sepakati tahap mana yang layak mendapat perhatian lebih dulu.

**2. Di mana jam kita mulai dan berhenti, dan siapa yang memutuskan?**
Minta setiap orang menyatakan kapan mereka yakin insiden “dimulai” dan kapan “berakhir.” Jawabannya akan berbeda, dan perbedaannya adalah temuan. Bandingkan dengan kolom dalam alat dan alur status. Catat definisi yang disepakati di register metrik dan perhatikan di mana alat belum dapat mendukungnya.

**3. Apa yang akan ditunjukkan median dan persentil ke-95 kita yang disembunyikan rata-rata?**
Sebelum rapat, hitung rata-rata, median, dan persentil ke-95 untuk insiden kuartal lalu menurut prioritas. Tampilkan berdampingan dan plot durasinya. Tanyakan apa yang akan disimpulkan tim dari masing-masing. Fasilitator sebaiknya memperhatikan apakah satu atau dua insiden menggeser rata-rata dan membahas apakah tim percaya median mewakili penantian pengguna tipikal.

**4. Berapa waktu yang kita habiskan menunggu dan bukan bekerja, dan mengapa?**
Pilih tiga insiden panjang dan telusuri riwayat statusnya. Hitung jam dalam keadaan aktif dan jam dalam keadaan menunggu, dan catat siapa atau apa yang ditunggu. Tanyakan penantian mana yang bisa diperpendek oleh keputusan, jalur eskalasi yang lebih jelas, atau siaga bersama.

**5. Jika kita diminta memangkas waktu penyelesaian seperempat, bagaimana kita melakukannya tanpa membantu pengguna?**
Ini tinjauan manipulasi dalam miniatur. Daftar setiap langkah yang akan memperbaiki angka tanpa memperbaiki layanan, seperti menjeda jam, menutup lebih awal, atau melabeli ulang prioritas. Untuk setiap langkah, tanyakan apakah pagar pembatas akan menangkapnya. Daftar itu awal kolom vektor manipulasi Anda dan menunjukkan di mana definisi perlu diperketat.

**6. Bagaimana kita tahu pemulihan yang lebih cepat itu nyata?**
Minta buktinya: kekambuhan, pembukaan ulang, komentar pengguna, dan insiden berikutnya dengan gejala yang sama. Lihat satu perbaikan terbaru dan tanyakan apakah ia bertahan sebulan kemudian. Fasilitator sebaiknya mengarahkan kelompok ke perbaikan yang tahan lama. Akhiri dengan memutuskan ukuran ketahanan mana yang bergabung ke dasbor.

## Empat perspektif

### Tim produk dan pengiriman

Tim produk yang menjalankan layanannya sendiri melihat waktu insiden sebagai biaya pekerjaan tak terencana yang menggeser pekerjaan terencana. Lacak berapa banyak setiap periode alur diambil oleh insiden, dan perlakukan insiden berulang sebagai item backlog bagi tim pemilik. Praktik rilis yang membuat rollback cepat memperpendek pemulihan, jadi waktu insiden sebagian adalah ukuran pengiriman (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).

### Tim layanan dan operasi

Tim operasi memiliki jam dan merasakan tekanan target. Mereka sebaiknya menerbitkan lembar jam, mengaudit pemakaian status jeda, melaporkan median dan persentil ekor menurut prioritas, dan menyimpan daftar mingguan insiden terbuka tertua. Beban siaga dan kualitas peringatan membentuk waktu mengakui dan mendeteksi, jadi lihat bersama (lihat topik 5.7, Metrik pekerjaan berulang dan siaga).

### Kepemimpinan dan tata kelola

Pemimpin sebaiknya bertanya tahap mana yang paling lambat dan apa yang dilakukan tentangnya, bukan mengapa angka merah. Mereka sebaiknya mengharapkan pelaporan persentil, ukuran ketahanan di samping ukuran kecepatan mana pun, dan penjelasan ketika definisi berubah. Pendanaan untuk pemantauan, runbook, dan pekerjaan masalah sering membayar kembali lebih banyak daripada tekanan pada penanggap, karena ia mengurangi keterlambatan yang tak dapat dikendalikan penanggap.

### Pelanggan dan pengguna

Pengguna mengalami penantian, mutu komunikasi, dan apakah masalah kembali. Mereka jarang melihat nama tahap. Beri mereka respons pertama yang jujur, katakan apa yang diharapkan, dan perbarui menurut jadwal. Komentar survei dan kontak ulang mereka adalah pemeriksa terbaik apakah jam tiket berkata jujur.

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan platform pesanan, layanan akun pelanggan, dan sistem gudang internal. Tim produk memiliki layanannya dan berbagi rotasi siaga dengan kelompok operasi kecil. Semua angka dalam contoh ini bersifat ilustratif.

Pimpinan menetapkan tujuan “rata-rata waktu penyelesaian di bawah empat jam” untuk insiden prioritas 2. Pada kuartal pertama, dasbor menunjukkan rata-rata 3,8 jam, dan tujuan tampak terpenuhi. Staf gudang mengatakan sebagian gangguan tampak berlangsung seharian. Kepala operasi memplot 41 insiden prioritas 2 (ilustratif) untuk kuartal itu dan mendapati median 1,5 jam dan persentil ke-95 sebesar 11 jam. Tiga insiden menyumbang sebagian besar ekor panjang.

Ia menelusuri ketiga insiden panjang. Masing-masing menghabiskan sebagian besar waktunya dalam “menunggu pemasok” atau “menunggu pelanggan.” Pada dua, tiket telah ditutup dan diangkat kembali sebagai insiden baru ketika yang asli “melanggar,” yang mengatur ulang jam. Yang ketiga melibatkan empat penugasan ulang antartim selama dua hari. Sampel catatan penutupan menunjukkan bahwa 6 dari 30 tiket yang ditinjau (ilustratif) ditutup setelah satu kali upaya menghubungi pengguna.

Tim membuat empat perubahan. Mereka menambahkan kolom awal dampak dan stempel waktu pemulihan ke formulir insiden. Mereka melaporkan median, persentil ke-85 dan ke-95 menurut prioritas, dan insiden terbuka tertua setiap pekan. Mereka menampilkan porsi waktu dalam status jeda dan tingkat kekambuhan di halaman yang sama. Dan mereka menautkan tiket yang diangkat kembali ke aslinya agar usia terbawa.

Pada tinjauan berikutnya, rata-rata judul telah naik menjadi 4,6 jam karena tiket yang diangkat kembali kini dihitung penuh. Tim menjelaskan kenaikan itu kepada pimpinan sebagai koreksi. Persentil ke-95 dan tiket terbuka tertua kini angka yang mereka kerjakan, dan jumlah penugasan ulang menunjuk pada celah perutean antara layanan pesanan dan sistem gudang. Mereka sepakat menambahkan alias siaga bersama dan meninjau efeknya selama kuartal berikutnya alih-alih segera menetapkan target baru.

## Sudut pandang sektor

**Startup.** Volume rendah, jadi persentil bising dan plot setiap insiden lebih baik daripada ringkasan. Satu orang sering mendeteksi, merespons, dan memulihkan, jadi pemisahan tahap kurang penting daripada lini masa tertulis tiap insiden. Tambahkan catatan awal dampak pada setiap tulisan pasca-insiden dan hitung median sederhana begitu ada cukup insiden.

**Bisnis kecil.** Penyedia layanan terkelola atau satu generalis TI mungkin menangani insiden, dan kontrak penyedia mungkin mendefinisikan target respons dan penyelesaian. Baca jam kontrak dengan cermat, karena sering berbeda dari pengalaman pengguna Anda. Simpan log singkat awal dampak dan pemulihan untuk insiden yang penting, dan minta penyedia catatan dasarnya, karena angka ringkasan menyembunyikan jam.

**Perusahaan besar.** Banyak tim, pemasok, dan skema prioritas membuat perbandingan menggoda dan menyesatkan. Standarkan definisi jam dan makna prioritas di seluruh organisasi, terbitkan distribusi alih-alih rata-rata, dan segmentasikan menurut layanan. Waspadai hanyutan status jeda dan klasifikasi ulang, yang tumbuh seiring jumlah lapisan pelaporan.

**Pemerintah dan sektor publik.** Kontrak, pelaporan undang-undang, dan audit dapat menetapkan jam dan definisi prioritas. Penuhi kewajiban itu sebagaimana tertulis, dan simpan pandangan kedua yang berorientasi pengguna di sampingnya, agar kepatuhan tidak menyembunyikan pengalaman yang buruk. Terbukalah tentang definisi dan koreksi ketika aturan jam berubah (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya topik ini sebagian besar desain dan disiplin. Dibutuhkan beberapa jam untuk menulis lembar jam, sedikit konfigurasi untuk menambah kolom awal dampak dan stempel waktu pemulihan, dan upaya sedang untuk membangun laporan persentil. Di mana alat ITSM atau platform pemantauan sudah menyimpan stempel waktu, ekstraksi adalah tugas sekali saja. Biaya berulangnya adalah tinjauan bulanan dan sampel kuartalan insiden tertutup.

Imbal hasil datang dari keputusan lebih baik dan lebih sedikit pengerjaan ulang. Pelaporan distribusi menunjukkan apakah perbaikan berhasil, dan pelaporan tahap mengarahkan upaya ke keterlambatan nyata, seperti serah terima, celah deteksi, atau penantian pemasok. Ukuran ketahanan mencegah penghematan palsu dari tambalan cepat yang kembali sebagai insiden berulang. Ukur garis dasar Anda sendiri selama satu kuartal, buat satu perubahan, dan bandingkan distribusi.

## Anti-pola dan jebakan

- **Satu MTTR di dasbor eksekutif.** Rata-rata data miring menyesatkan. Tampilkan median, persentil tinggi, dan insiden terbuka tertua, dan katakan berapa banyak insiden di balik tiap titik.
- **Mencampur prioritas dan layanan.** Pergeseran campuran tampak seperti perubahan kinerja. Segmentasikan menurut prioritas dan layanan, dan tampilkan campuran.
- **Menghentikan jam dengan status jeda.** Waktu lenyap ke “menunggu” dan “ditahan.” Daftar status yang diizinkan, wajibkan alasan, dan laporkan porsi waktu di masing-masing.
- **Menutup dan mengangkat kembali tiket.** Itu mengatur ulang usia dan menyembunyikan insiden panjang. Tautkan tiket yang diangkat kembali ke aslinya dan laporkan usia tertaut.
- **Memakai satu stempel waktu untuk pemulihan dan penutupan.** Tim lalu dihargai karena menutup terlalu dini atau dihukum karena tindak lanjut yang cermat. Catat keduanya dan laporkan keduanya.
- **Memeringkat agen atau insinyur menurut waktu penyelesaian.** Itu menghargai tiket mudah dan memilih-milih, dan mengecilkan hati untuk membantu dan mengeskalasi. Laporkan hanya menurut tim dan layanan.
- **Target tanpa ukuran ketahanan.** Tambalan cepat yang gagal besok tampak seperti keberhasilan. Tampilkan kekambuhan dan tingkat pembukaan ulang di samping setiap target.
- **Memperlakukan sampel kecil sebagai tren.** Persentil ke-95 dari segelintir insiden adalah tebakan. Plot insiden individual dan tunggu lebih banyak data sebelum menarik garis.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | Tiap orang mengukur berbeda; satu “waktu penyelesaian” | Jam ditulis untuk beberapa tim; tahap sebagian dipisahkan | Satu lembar jam untuk semua tahap, dengan status jeda didaftar | Definisi ditinjau dan perubahan dicatat dengan alasan | Definisi diselaraskan dengan pemasok dan pelanggan, direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Kualitas data | Catatan manual; awal dampak tak diketahui | Stempel waktu alat untuk tiket dicatat dan ditutup | Awal dampak dan pemulihan dicatat untuk insiden prioritas | Data diaudit dengan sampel; estimasi ditandai | Data pemantauan dan ITSM digabung otomatis dan dipercaya antartim |
| Praktik statistik | Hanya rata-rata | Rata-rata dan median ditampilkan | Median dan persentil tinggi menurut prioritas dan layanan | Batas kendali dipakai; ukuran ketahanan dipasangkan | Distribusi dikaitkan dengan pengalaman pengguna dan dipakai untuk memutuskan di mana berinvestasi |
| Pemakaian dalam perbaikan | Angka dipakai untuk mengejar individu | Tim melihat angkanya sendiri | Tim meninjau waktu tahap dan menunggu bulanan | Tahap lambat berujung pada pekerjaan perbaikan yang didanai | Perbaikan dibagikan antartim dan pemasok dan ukuran berevolusi |

## Daftar periksa

- [ ] Setiap tahap (mendeteksi, mengakui, merespons, memulihkan, menyelesaikan) punya aturan mulai, berhenti, dan jeda tertulis.
- [ ] Awal dampak dan waktu pemulihan dicatat sebagai kolom terpisah untuk insiden prioritas.
- [ ] Laporan menunjukkan median dan persentil tinggi, menurut prioritas dan layanan.
- [ ] Hitungan insiden di balik tiap titik yang dilaporkan ditampilkan.
- [ ] Insiden terbuka tertua didaftar mingguan.
- [ ] Status jeda adalah daftar pendek bernama dan porsi waktunya dilaporkan.
- [ ] Tingkat pembukaan ulang dan kekambuhan ditampilkan di samping setiap ukuran waktu.
- [ ] Tiket yang diangkat kembali ditautkan ke aslinya agar usia terbawa.
- [ ] Tak ada ukuran waktu yang dipakai untuk memeringkat agen atau insinyur individu.
- [ ] Sampel insiden tertutup dibaca tiap kuartal untuk kejujuran.
- [ ] Komentar survei pelanggan dibaca di samping data tiket.

## Prompt AI

**Bandingkan rata-rata dan persentil durasi insiden kita.**

```text
Saya akan menempelkan catatan insiden untuk [service or team] yang mencakup
[period]. Kolom: [list fields such as logged time, impact start, restore time,
closed time, priority, status history]. Hitung median, persentil ke-85, persentil
ke-95, dan rata-rata [stage name, for example time to restore] menurut
[priority], dan tunjukkan berapa banyak insiden di balik tiap angka. Jelaskan
seberapa jauh rata-rata berbeda dari median dan insiden mana yang mendorong
perbedaan itu. Jangan mengarang data atau nilai acuan. Daftar asumsi Anda, baris
yang Anda kecualikan, dan apa pun yang tidak dapat dikatakan data.

[paste incident data with personal data removed]
```

**Susun lembar jam untuk ukuran waktu insiden kita.**

```text
Susun lembar jam untuk [team name] yang mencakup waktu mendeteksi, waktu
mengakui, waktu respons pertama, waktu memulihkan, dan waktu menyelesaikan. Alat
ITSM kami [tool name], pemantauan kami [monitoring tool], dan alur status kami
[list of statuses]. Untuk setiap tahap, berikan peristiwa awal, peristiwa akhir,
status jeda, basis waktu ([calendar or business hours]), pengecualian, dan
vektor manipulasi dengan pagar pembatas. Tandai setiap butir yang harus Anda
asumsikan dan daftar pertanyaan yang harus saya jawab untuk melengkapi lembar.
Jangan mengarang target.
```

**Temukan ke mana waktu terlewat pergi dalam beberapa insiden panjang.**

```text
Berikut riwayat status untuk [number] insiden panjang dari [service]. Untuk
setiap insiden, daftar waktu yang dihabiskan di tiap status, tandai keadaan aktif
dan menunggu memakai aturan ini: [which statuses count as active], dan catat
setiap penugasan ulang antara [teams or groups]. Laporkan pola lintas insiden,
bukan individu, dan sarankan tahap mana yang layak mendapat perhatian lebih dulu.
Jangan menebak sebab yang tidak ditunjukkan data. Daftar asumsi Anda dan kolom
tambahan apa yang akan membantu.

[paste status histories with personal data removed]
```

**Jalankan tinjauan manipulasi atas target waktu insiden kita.**

```text
Kami melaporkan [metric name] untuk [priority or service], didefinisikan sebagai
[definition with start and stop events]. Target-nya [target] dan audiensnya
[audience]. Daftar cara realistis angka itu dapat membaik tanpa membantu
pengguna, seperti penjedaan jam, penutupan dini, pelabelan ulang, atau pengangkatan
kembali tiket. Untuk setiap cara, usulkan ukuran atau praktik pagar pembatas yang
akan mengungkapnya, dan nyatakan bagaimana pagar pembatas itu sendiri dapat
dimanipulasi. Jangan mengarang acuan atau statistik. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik terkait dan pagar pembatas berpasangan bagi ukuran waktu insiden yang akan Anda laporkan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa perubahan pada topik ini menjaga templat, tabel manipulasi, dan referensi silang tetap konsisten.

## Poin penting

- Insiden punya tahap, dan setiap tahap punya jam, pemilik, dan obatnya sendiri. Sebut tahap yang sedang Anda ukur.
- Durasi insiden miring, jadi rata-rata menyesatkan. Laporkan median, persentil tinggi, dan usia insiden terbuka tertua.
- Tulis di mana tiap jam mulai dan berhenti, catat awal dampak dan pemulihan terpisah dari penutupan tiket, dan batasi status jeda.
- Pasangkan setiap ukuran kecepatan dengan ukuran ketahanan seperti kekambuhan dan tingkat pembukaan ulang.
- Gambarkan tim dan layanan, bukan agen individu, dan baca sampel insiden tertutup untuk memeriksa angka jujur.

## Referensi dan bacaan lanjutan

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
