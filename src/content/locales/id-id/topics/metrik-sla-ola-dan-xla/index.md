# Metrik SLA, OLA, dan XLA

**Perjanjian tingkat layanan memberi tahu pelanggan apa yang dijanjikan, perjanjian tingkat operasional memberi tahu tim internal apa yang mereka utang satu sama lain, dan perjanjian tingkat pengalaman memberi tahu Anda apakah orang yang memakai layanan benar-benar lebih baik, jadi Anda butuh ketiganya dan perlu melaporkannya dengan jujur alih-alih sebagai dinding hijau.**

## Gambaran umum dan motivasi

[Perjanjian tingkat layanan (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) adalah komitmen terdokumentasi antara penyedia layanan dan pelanggan tentang apa yang akan disampaikan layanan: jamnya, ketersediaannya, seberapa cepat penyedia merespons dan menyelesaikan insiden, dan seberapa cepat memenuhi permintaan. Dalam ITIL 4 (edisi 2019 kerangka yang diterbitkan pemiliknya, kini AXELOS di bawah PeopleCert), praktik [manajemen tingkat layanan](https://en.wikipedia.org/wiki/ITIL) mendefinisikan target ini, memantaunya, dan melaporkannya. [Perjanjian tingkat operasional (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) adalah padanan internalnya: perjanjian antartim dalam organisasi yang sama, misalnya antara service desk dan tim jaringan, tentang apa yang akan dilakukan masing-masing dan seberapa cepat agar SLA yang menghadap pelanggan dapat dipenuhi. Kontrak penopang memainkan peran yang sama untuk pemasok eksternal (lihat topik 8.4, Metrik pemasok dan kontrak).

Perjanjian tingkat pengalaman (XLA) adalah yang terbaru dari ketiganya. Ia mencatat hasil yang disepakati dalam istilah bagaimana orang mengalami layanan, seperti seberapa mudah mereka menyelesaikan pekerjaan, bagaimana perasaan mereka tentang interaksi itu, dan apakah layanan membantu mereka mencapai tujuan. Gagasan ini tumbuh dalam praktik manajemen layanan karena SLA dapat terpenuhi sementara pengguna tidak puas. Topik ini memiliki ketiga perjanjian dan pelaporannya. Kedalaman tentang cara mengukur pengalaman milik topik 6.2, Perjanjian tingkat pengalaman, dan padanan rekayasa target milik topik 5.2, SLI, SLO, dan anggaran kesalahan.

Tiga konsep agile dan keandalan duduk di samping perjanjian ini. [Indikator tingkat layanan (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) adalah sifat layanan yang terukur, seperti porsi permintaan yang dilayani dengan sukses. [Tujuan tingkat layanan (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) adalah target internal untuk SLI, biasanya lebih ketat daripada apa pun yang dijanjikan kepada pelanggan. Praktik [rekayasa keandalan situs (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) memperlakukan SLO, dan anggaran kesalahan yang menyusulnya, sebagai alat keputusan bersama bagi produk dan operasi. SLA adalah kontraknya; SLO adalah bidikan rekayasanya; SLI adalah pengukurannya. Menjaga ketiganya terpisah menghindari kekacauan umum ketika klausul penalti kontrak dipakai untuk mengarahkan keputusan rekayasa harian.

Keluarga ini punya kegagalan terkenal yang disebut pelaporan semangka: laporan yang hijau di luar dan merah di dalam. Setiap baris SLA tampak terpenuhi, namun pelanggan frustrasi, karena ukuran dipilih untuk apa yang dapat dicapai penyedia secara andal dan bukan untuk apa yang dipedulikan pelanggan, atau karena rata-rata menyembunyikan ekor yang buruk, atau karena jam dijeda sepanjang penantian terburuk. Obatnya sebagian teknis (persentil, jam jujur, indikator berpusat pada pengguna) dan sebagian sosial (perjanjian dinegosiasikan sebagai percakapan, ditinjau secara berkala, dan dibaca sebagai pertanyaan tentang layanan, bukan vonis atas tim). Peringatan lebih luas tentang ukuran yang berubah menjadi target ada di topik 1.2, Hukum Goodhart dan psikologi metrik.

Tim agile berpikir dalam tujuan dan anggaran; manajer tingkat layanan ITIL berpikir dalam perjanjian dan tinjauan. Pandangan itu cocok: perjanjian menyatakan hasil, tujuan dan indikator adalah cara tim menepati janji, dan ukuran pengalaman mengonfirmasi bahwa itu penting.

Satu istilah terakhir: [persentil](https://en.wikipedia.org/wiki/Percentile) adalah nilai di bawahnya jatuh porsi pengamatan yang dinyatakan. Persentil ke-85 waktu penyelesaian adalah waktu dalam mana 85 persen tiket diselesaikan. Kebanyakan target SLA ditulis sebagai persentil atau porsi, jadi cara persentil dihitung dan apa yang disertakan di dalamnya adalah inti topik (lihat topik 1.6, Literasi statistik untuk metrik layanan).

## Prinsip utama

- **Sepakati hasil dengan pelanggan, lalu ukur.** Perjanjian adalah pernyataan negosiasi tentang apa yang dibutuhkan pelanggan dan dapat dipertahankan penyedia, ditulis dalam kata-kata pelanggan dan ditinjau bersama.
- **Laporkan distribusi dan porsi, tidak pernah satu rata-rata.** Rata-rata waktu penyelesaian yang memenuhi target dapat duduk di atas ekor panjang pekerjaan yang sangat terlambat. Nyatakan persentil, populasi, dan hitungan.
- **Buat jam jujur.** Setiap target punya peristiwa awal, peristiwa akhir, dan daftar kondisi jeda. Terbitkan aturan jam, dan laporkan seberapa sering setiap jeda dipakai.
- **Susun perjanjian berlapis.** SLA dibangun di atas OLA dan kontrak pemasok, dan tujuan yang ditetapkan dalam tim sebaiknya lebih ketat daripada janji yang dibuat di luarnya. Celah pada lapisan mana pun muncul sebagai pelanggaran di puncak.
- **Pasangkan setiap ukuran operasional dengan ukuran pengalaman.** Target terpenuhi dan pengalaman buruk, atau sebaliknya, adalah sinyal paling berguna dalam laporan.
- **Hitung nyaris luput.** Pekerjaan yang selesai tepat di dalam batas memberi tahu lebih banyak tentang risiko daripada pekerjaan yang selesai jauh di dalamnya.
- **Laporkan tentang tim dan layanan, tidak pernah tentang orang.** Perjanjian menggambarkan apa yang dikomitmenkan suatu layanan atau tim. Mereka bukan cara memeringkat individu.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat pencapaian SLA | Porsi item terukur (insiden, permintaan, atau jendela waktu) yang memenuhi target SLA yang dinyatakan pada periode itu | Item yang memenuhi target dibagi item yang diukur. Jam dimulai pada waktu tercatat yang didefinisikan dalam perjanjian (misalnya pembuatan tiket) dan berhenti pada peristiwa akhir yang didefinisikan (misalnya pemulihan dikonfirmasi). Dikecualikan: item yang dibatalkan sebagai duplikat dan waktu di dalam pengecualian yang disepakati seperti pemeliharaan terjadwal. Laporkan hitungan di samping porsi | Persen, dengan n | Stempel waktu alat ITSM; data pemantauan untuk target berbasis waktu | Manajemen tingkat layanan; manajemen insiden; manajemen permintaan layanan | Pencapaian tujuan tingkat layanan pada jendela bergulir (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan) | Bulanan, dengan tampilan internal mingguan |
| Porsi nyaris luput | Porsi item yang memenuhi target tetapi selesai di dalam sepersepuluh terakhir waktu yang diizinkan | Item yang selesai pada 90 persen atau lebih dari waktu target dan masih di dalamnya, dibagi item yang memenuhi target. Jam sama dengan SLA. Tidak berlaku untuk jendela waktu (hanya berlaku untuk ukuran waktu-ke-target) | Persen | Stempel waktu alat ITSM | Manajemen tingkat layanan | Proporsi pekerjaan dekat ekspektasi tingkat layanan pada bagan alur (lihat topik 2.1, Ukuran alur) | Bulanan |
| Porsi jeda jam | Porsi total waktu tiket terlewat yang dihabiskan dalam keadaan yang menjeda jam SLA | Total waktu jeda dibagi total waktu terlewat dari awal ke akhir, untuk item dalam lingkup. Mengecualikan item tanpa keadaan jeda yang dipakai. Laporkan menurut keadaan jeda | Persen | Riwayat status alat ITSM | Manajemen tingkat layanan; manajemen insiden | Waktu terhalang dan waktu tunggu dalam tampilan alur (lihat topik 2.4, Metrik aliran nilai) | Bulanan |
| Tingkat pencapaian OLA | Porsi serah terima internal yang memenuhi target OLA antara dua tim | Serah terima selesai dalam target OLA dibagi serah terima yang diterima. Jam dimulai saat tim penerima ditugaskan dan berhenti saat mengembalikan atau menutup item. Dikecualikan: item yang ditugaskan ulang karena salah, dihitung terpisah | Persen, dengan n | Riwayat penugasan alat ITSM | Manajemen tingkat layanan; manajemen insiden | Waktu tunggu serah terima dan pekerjaan terhalang antartim (lihat topik 9.3, Metrik kolaborasi dan serah terima) | Bulanan |
| Waktu tunggu serah terima (persentil ke-85) | Waktu item menunggu dalam antrean tim penerima sebelum pekerjaan dimulai | Persentil ke-85 waktu antara penugasan ke tim penerima dan tindakan pertama tercatat oleh tim itu. Dikecualikan: item yang menunggu pelanggan | Jam atau menit | Riwayat penugasan dan aktivitas alat ITSM | Manajemen tingkat layanan; manajemen insiden | Waktu antrean dalam tampilan alur (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean) | Mingguan |
| Skor pengalaman menurut perjalanan | Penilaian pelanggan atau pengguna tentang seberapa baik layanan mendukung perjalanan yang didefinisikan, seperti mendapat laptop baru atau pulih dari gangguan | Rata-rata dan distribusi penilaian survei pada skala tetap untuk perjalanan selesai pada periode itu. Laporkan tingkat respons dan campuran responden. Dikecualikan: survei parsial. Bukan satu rata-rata, jadi tampilkan distribusinya | Skala penilaian, dengan tingkat respons | Survei singkat pasca-interaksi; peristiwa perjalanan dari alat ITSM | Manajemen tingkat layanan; praktik kepuasan pelanggan (lihat topik 6.1, Metrik kepuasan pelanggan) | Umpan balik pelanggan dan ukuran hasil | Bulanan, dengan tiap gelombang ditampilkan |
| Jurang semangka | Porsi periode pelaporan atau layanan tempat SLA terbaca terpenuhi sementara ukuran pengalaman atau dampak pengguna terbaca buruk | Layanan (atau periode) dengan pencapaian SLA pada atau di atas target dan pengalaman di bawah tingkat yang disepakati, dibagi layanan (atau periode) dengan pencapaian SLA pada atau di atas target. Tingkat pengalaman harus disepakati sebelum periode dinilai | Persen layanan hijau | Pencapaian SLA dan skor pengalaman bersama | Manajemen tingkat layanan; perbaikan berkelanjutan | Retrospektif hasil terhadap luaran | Kuartalan |
| Cakupan dan kemutakhiran perjanjian | Porsi layanan hidup yang SLA, OLA, dan kontrak pemasoknya ada dan ditinjau dalam interval yang disepakati | Layanan dengan ketiga lapisan terdokumentasi dan ditinjau dalam interval, dibagi layanan hidup dalam katalog layanan. Interval ditetapkan organisasi. Dikecualikan: layanan dalam pemensiunan | Persen | Katalog layanan (service catalogue dalam ejaan ITIL sendiri) dan register perjanjian | Manajemen tingkat layanan; manajemen katalog layanan; manajemen pemasok | Kesepakatan kerja dan piagam tim yang ditinjau pada irama rutin | Kuartalan |

## Rekomendasi

### Siapkan perjanjian

**1. Tulis setiap SLA dalam bahasa pelanggan dan kaitkan dengan satu hasil.** Mulai dari apa yang dibutuhkan pelanggan, seperti “karyawan yang terkunci cepat bekerja lagi,” lalu pilih ukuran. Perjanjian singkat dengan segelintir target bermakna mengalahkan yang panjang yang tak dibaca siapa pun. Tuliskan jam untuk setiap target: peristiwa awal, peristiwa akhir, dan kondisi jeda (lihat topik 3.3, Waktu respons dan penyelesaian insiden).

**2. Nyatakan target sebagai persentil atau porsi, dengan populasi yang dinyatakan.** “90 persen insiden prioritas 2 dipulihkan dalam empat jam” berkata lebih banyak daripada “rata-rata pemulihan di bawah dua jam.” Sepakati apa yang dihitung: prioritas mana, jam mana, jenis permintaan mana. Tampilkan hitungan dengan setiap persentase agar bulan dengan delapan insiden tidak dibaca seperti bulan dengan delapan ratus.

**3. Turunkan OLA dari SLA, dan beri tiap OLA tim pemilik bernama.** Bekerja mundur dari target pelanggan: jika pelanggan dijanjikan pemulihan dalam empat jam, OLA harus menyisakan ruang untuk deteksi, triase, serah terima, dan perbaikan. Tulis setiap OLA sebagai perjanjian timbal balik singkat dengan tim penerima, waktu respons yang diharapkan, dan jalur untuk perselisihan. OLA ada untuk membantu tim merencanakan, jadi jaga seringan yang diizinkan hubungan.

**4. Jaga tujuan lebih ketat daripada janji.** Tetapkan SLO internal pada tingkat lebih ketat daripada SLA agar pekan buruk diperhatikan dan dikoreksi sebelum pelanggaran yang terlihat pelanggan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan). Perlakukan SLA sebagai lantai yang dipedulikan keuangan dan hukum dan SLO sebagai angka yang dipakai insinyur untuk mengarahkan. Pakai anggaran kesalahan sebagai cara produk dan operasi memutuskan antara pekerjaan fitur dan pekerjaan keandalan.

### Ukur dengan jujur

**5. Terbitkan aturan jam dan laporkan jeda.** Jalan paling umum menuju laporan hijau adalah keadaan jeda yang longgar, seperti “menunggu pelanggan” yang dipakai ketika penyedialah yang menunggu. Laporkan porsi jeda jam menurut keadaan jeda, ambil sampel tiket yang dijeda tiap bulan, dan tanyakan apakah pelanggan akan setuju jam seharusnya berhenti. Jaga daftar alasan jeda yang diizinkan pendek dan tertulis dalam perjanjian.

**6. Tampilkan seluruh distribusi di samping target.** Taruh median, persentil ke-85 atau ke-95, dan desil terburuk di samping tingkat pencapaian. Pencapaian datar 95 persen dapat menyembunyikan ekor pekerjaan yang memakan berhari-hari (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**7. Lacak nyaris luput dan sebab pelanggaran.** Porsi nyaris luput memberi tahu berapa banyak keberuntungan dalam angka hijau. Ketika pelanggaran terjadi, catat kategori sebab dan apakah itu masalah kapasitas, serah terima, pemasok, atau definisi. Tautkan kategori terbesar ke manajemen masalah (lihat topik 4.1, Metrik manajemen masalah).

**8. Ukur antrean OLA, bukan hanya pencapaian.** Waktu tunggu serah terima pada persentil ke-85 menunjukkan di mana pekerjaan macet, jauh sebelum pelanggaran SLA muncul. Bagikan dengan tim pengirim dan penerima, dan gambarkan sebagai sifat alur di antara mereka. Percakapan tentang antrean, tidak pernah tentang orang di dalamnya (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean).

### Tambahkan pengalaman dan tutup jurang

**9. Pasangkan setiap SLA dengan ukuran pengalaman untuk perjalanan yang sama.** Tanyakan pengguna pertanyaan singkat setelah interaksi tentang apakah berhasil dan seberapa sulit, dan laporkan tingkat respons dan campuran responden. Sepakati di muka tingkat apa yang cukup baik, agar XLA adalah hasil yang dinegosiasikan dan bukan angka yang dikarang setelah kejadian (lihat topik 6.2, Perjanjian tingkat pengalaman, dan topik 6.1, Metrik kepuasan pelanggan).

**10. Laporkan jurang semangka dan perlakukan sebagai temuan.** Lacak seberapa sering SLA terpenuhi sementara pengalaman buruk. Jurang yang naik memberi tahu bahwa ukuran SLA menjauh dari apa yang dipedulikan pengguna, dan respons yang tepat adalah merevisi ukuran, bukan menjelaskan ketidakcocokannya. Tinjau tiap kuartal dengan perwakilan pelanggan hadir.

**11. Tinjau perjanjian menurut jadwal dan pensiunkan yang tak dipakai siapa pun.** Periksa setiap perjanjian terhadap katalog layanan, kontrak pemasok, dan pekerjaan sebenarnya. Himpunan perjanjian hidup yang lebih kecil lebih mudah dilaporkan dan lebih sulit dimanipulasi.

**12. Laporkan setiap layanan dalam satu tampilan yang menggabungkan ketiga lapisan.** Tampilkan pencapaian SLA, distribusi, waktu tunggu serah terima OLA, skor pengalaman, dan pekerjaan perbaikan terbuka untuk tiap layanan dalam satu halaman. Turunkan status dari data, bukan dari warna yang dipilih pemilik layanan. Buat halaman terbuka bagi pelanggan dan tim (lihat topik 11.1, Merancang dasbor metrik layanan).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat pencapaian SLA | Memilih target agar mudah; menutup tiket lebih awal dan membukanya kembali kemudian; mengklasifikasi ulang prioritas ke bawah; mengecualikan kasus sulit sebagai “di luar lingkup” | Tingkat pembukaan ulang dan klasifikasi ulang prioritas; sampel tiket tertutup dibaca bersama pelanggan; tinjauan daftar pengecualian tiap kuartal |
| Porsi nyaris luput | Menghentikan jam semenit sebelum batas, lalu melanjutkan pekerjaan di luar catatan; memecah tiket menjadi dua yang lebih pendek | Waktu dari kontak pelanggan terakhir ke pemulihan terkonfirmasi; hitungan tiket tertaut atau anak per insiden |
| Porsi jeda jam | Memakai keadaan jeda pada tiket yang tidak menunggu pelanggan; memindahkan pekerjaan ke keadaan yang tidak dihitung | Alasan jeda diaudit pada sampel; porsi jeda yang dibalikkan pelanggan; skor pengalaman untuk tiket yang dijeda |
| Tingkat pencapaian OLA | Menolak serah terima kembali ke pengirim untuk memulai ulang jam; menandai item diterima tanpa memulai pekerjaan | Hitungan pantulan per item dan total waktu pemulihan lintas tim; hasil SLA ujung ke ujung |
| Waktu tunggu serah terima (persentil ke-85) | Menugaskan ke orang dan bukan antrean tim untuk menyembunyikan penantian; mencatat tindakan pertama token | Mutu tindakan pertama disampel; waktu dari penugasan ke pembaruan pertama yang terlihat pelanggan |
| Skor pengalaman menurut perjalanan | Mengirim survei hanya ke pengguna puas; mengajukan pertanyaan menggiring; membina penanggap untuk memberi penilaian tinggi | Campuran responden terhadap populasi; tingkat respons ditampilkan di samping skor; komentar terbuka dibaca dalam tinjauan |
| Jurang semangka | Menetapkan tingkat pengalaman rendah agar jurang tetap kecil; mengubah ukuran pengalaman ketika turun | Tingkat pengalaman disepakati di muka dan perubahan dicatat dengan alasan; tren seluruh distribusi |
| Cakupan dan kemutakhiran perjanjian | Menandai perjanjian ditinjau tanpa tinjauan nyata; menghitung dokumen stub sebagai SLA | Bukti tinjauan (hadirin, perubahan, keputusan); sampel perjanjian dibaca untuk isi sebenarnya dan persetujuan pelanggan |

Pembacaan yang sehat menunjukkan pencapaian yang bergerak karena sebab yang dapat dipahami, nyaris luput yang sedikit dan dijelaskan, jeda yang tetap dalam daftar yang disepakati, waktu tunggu serah terima yang dibahas oleh tim yang memilikinya, dan ukuran pengalaman yang sebagian besar sepakat dengan SLA. Di mana keduanya tidak sepakat, tim sudah punya catatan sebab dan item perbaikan.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| SLA kontraktual dengan penalti | Jelas, dapat ditegakkan, diakui hukum | Mengundang permainan jam dan pelaporan defensif; penalti dapat memasamkan hubungan |
| SLA tanpa penalti, dengan tinjauan rutin | Membangun kepercayaan dan data jujur; berfokus pada pembelajaran | Pengaruh lebih sedikit ketika pemasok terus-menerus melewatkan target |
| OLA terperinci antara semua tim | Ekspektasi jelas dan lebih sedikit perselisihan | Birokrasi; tim mengoptimalkan jam sendiri alih-alih jam pelanggan |
| OLA ringan dengan target ujung ke ujung bersama | Mendorong kerja sama; lebih sedikit dokumen | Butuh kepercayaan dan visibilitas antrean yang baik untuk menyelesaikan perselisihan |
| Menambah XLA pada SLA | Menunjukkan apakah layanan membantu orang | Data survei lebih bising dan lambat; atribusi lebih sulit |

Jaga perjanjian tetap kecil, laporkan distribusi, dan pakai data pengalaman untuk memeriksa data operasional. Belanjakan upaya pada aturan jam dan serah terima, tempat sebagian besar ketidaksepakatan tentang angka muncul.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Jika laporan SLA kita hijau semua, apa yang kita harapkan dikatakan pengguna tentang layanan?**
Minta kelompok menamai layanan yang hijau selama beberapa bulan lalu kumpulkan apa yang sebenarnya dikatakan pengguna dalam komentar dan keluhan. Bandingkan keduanya. Fasilitator sebaiknya mencari jurang antara ukuran dan pengalaman nyata, dan mencatat ukuran mana yang dipilih karena mudah dicapai.

**2. Di mana jam kita berhenti, dan siapa yang memutuskan itu?**
Telusuri aturan awal, akhir, dan jeda untuk satu target penting dan tanyakan siapa yang menulis masing-masing. Lihat porsi tiket dalam keadaan jeda, dan tanyakan apakah pelanggan akan setuju. Sepakati satu aturan untuk diperketat atau diperjelas.

**3. OLA kita mana yang membantu tim merencanakan, dan mana yang hanya menunjuk kesalahan?**
Daftar perjanjian internal dan tanyakan siapa yang membaca masing-masing dan kapan. Bahas apa yang terjadi setelah OLA terlewat: percakapan tentang antrean, atau pencarian pihak bersalah. Tujuannya menggeser diskusi menuju alur kerja antartim. Pilih satu OLA untuk disederhanakan atau dipensiunkan.

**4. Berapa banyak dari hijau kita adalah keberuntungan?**
Tunjukkan porsi nyaris luput untuk target terpenting. Bahas apa yang akan terjadi jika bulan berikutnya punya beberapa kasus sulit lebih banyak atau beberapa orang tersedia lebih sedikit. Tanyakan apakah tim punya ruang longgar, dan di mana letaknya.

**5. Apa yang akan pelanggan inginkan kita janjikan yang tidak kita ukur hari ini?**
Undang perwakilan pelanggan atau pengguna menggambarkan apa yang penting bagi mereka dalam kata-kata sendiri, seperti dapat menjangkau seseorang atau mendapat laptop sebelum hari pertama. Tangkap dua atau tiga hasil. Putuskan mana yang bisa menjadi pertanyaan survei singkat atau peristiwa yang sudah ada dalam data, dan bagaimana kelompok akan menyepakati tingkat yang baik.

**6. Bagaimana kita tahu jika ukuran SLA kita telah menjauh dari apa yang dipedulikan pengguna?**
Bahas jurang semangka sebagai sinyal dan tanyakan siapa yang melihatnya. Pertimbangkan seberapa sering perjanjian ditinjau dan apakah pelanggan hadir. Sepakati tanggal tinjauan dan bukti yang dibawa, termasuk sampel tiket dan hasil pengalaman terbaru.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman yang juga menjalankan layanannya memenuhi SLA lewat tujuan dan anggaran kesalahan mereka sendiri, dan merasakan biayanya ketika penalti SLA atau eskalasi pelanggan menginterupsi pekerjaan terencana. Mereka sebaiknya menjaga SLO lebih ketat daripada SLA dan memperlakukan SLA sebagai lantai keselamatan, bukan target harian (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan).

### Tim layanan dan operasi

Tim operasi memegang jam. Mereka butuh aturan jelas untuk kondisi awal, akhir, dan jeda, OLA bersama yang menamai antrean penerima, dan visibilitas waktu tunggu serah terima. Mereka sebaiknya melaporkan sebab pelanggaran dengan terus terang dan memakainya sebagai masukan bagi pekerjaan masalah dan kapasitas (lihat topik 4.1, Metrik manajemen masalah). Mereka sebaiknya menolak tekanan untuk menjelaskan hasil lewat jam alih-alih memperbaiki sebabnya.

### Kepemimpinan dan tata kelola

Pemimpin memakai laporan SLA untuk melihat apakah komitmen terpenuhi dan di mana berinvestasi. Mereka sebaiknya meminta distribusi, porsi jeda jam, porsi nyaris luput, dan jurang semangka, dan memperlakukan rentetan hijau tak terputus dengan rasa ingin tahu. Mendanai pekerjaan perbaikan yang menyusul analisis pelanggaran, dan melindungi pelaporan jujur dari penyalahan, lebih penting daripada target itu sendiri (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

### Pelanggan dan pengguna

Pelanggan ingin perjanjian menggambarkan apa yang mereka rasakan: seberapa cepat masalah diperbaiki, seberapa sering kambuh, dan apakah mereka dapat menjangkau seseorang yang membantu. Mereka sebaiknya menjadi bagian tinjauan perjanjian dan punya cara mengatakan ketika laporan hijau tidak cocok dengan pengalaman mereka. Ringkasan satu halaman yang mudah dibaca, dengan alasan pelanggaran apa pun dan perbaikan terencana, membangun lebih banyak kepercayaan daripada tabel pencapaian yang panjang.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional mendukung sistem penjadwalan klinis yang dipakai staf bangsal. Pemilik layanan, service desk, tim aplikasi, dan tim infrastruktur bertemu bulanan. Semua angka di bawah bersifat ilustratif.

SLA menjanjikan bahwa 90 persen insiden prioritas 2 (kehilangan fungsi parsial yang memengaruhi satu bangsal) dipulihkan dalam empat jam, diukur dari pembuatan tiket, dalam layanan 24 jam tujuh hari. Laporan bulanan menunjukkan pencapaian 94 persen pada 36 insiden (ilustratif), hijau dengan nyaman. Survei pengalaman, dikirim setelah tiap penutupan prioritas 2, punya tingkat respons 41 persen (ilustratif) dan median penilaian 3 pada skala lima poin, jauh di bawah tingkat 4 yang disepakati pemilik layanan dan manajer bangsal sebagai XLA. Jurang semangka terlihat untuk bulan ketiga berturut-turut.

Tim melihat distribusinya. Median pemulihan adalah 1 jam 40 menit (ilustratif), tetapi persentil ke-95 adalah 3 jam 50 menit (ilustratif), dan porsi nyaris luput adalah 31 persen (ilustratif): hampir sepertiga insiden “terpenuhi” selesai di sepersepuluh terakhir waktu yang diizinkan. Mereka melihat porsi jeda jam dan mendapati 22 persen (ilustratif) waktu terlewat dihabiskan dalam keadaan “menunggu pelanggan.” Sampel sepuluh tiket yang dijeda menunjukkan empat tempat bangsal telah membalas dan tiket tetap dijeda sampai shift berikutnya, dan di tiga lainnya tim aplikasi menunggu tim infrastruktur. Waktu tunggu serah terima pada persentil ke-85 untuk antrean infrastruktur adalah 2 jam 10 menit (ilustratif) terhadap OLA 30 menit (ilustratif), dan tingkat pencapaian OLA untuk serah terima itu adalah 58 persen (ilustratif).

Keputusannya praktis. Mereka mengubah aturan jam agar “menunggu pelanggan” hanya boleh dipakai setelah permintaan terdokumentasi kepada pelanggan, dan jam berlanjut pada balasan berikutnya. Mereka menambah jalur siaga untuk antrean infrastruktur selama jam bangsal dan menyepakati OLA yang lebih kecil, dengan tinjauan sebulan kemudian. Mereka menambahkan ukuran pengalaman dan jurang semangka ke laporan satu halaman bulanan dan mengundang manajer bangsal ke tinjauan. Mereka juga menurunkan SLO internal ke pemulihan empat jam yang lebih ketat untuk 95 persen insiden, agar tim memperhatikan masalah sebelum SLA berisiko.

Risiko manipulasi muncul di bulan kedua. Setelah aturan jeda berubah, pencapaian turun menjadi 89 persen (ilustratif), dan seorang manajer meminta service desk “memeriksa ulang prioritas.” Tim melihat lonjakan penurunan dari prioritas 2 ke prioritas 3, memasangkan pencapaian dengan tingkat klasifikasi ulang dan pembukaan ulang, dan mewajibkan alasan dalam catatan untuk setiap perubahan prioritas. Di bulan ketiga, pencapaian 91 persen (ilustratif), persentil ke-95 lebih rendah, porsi nyaris luput turun, dan median penilaian pengalaman naik menjadi 3,8 (ilustratif). Jurang menyempit karena pekerjaan membaik, dan angka dapat dipercaya.

## Sudut pandang sektor

**Startup.** Perusahaan kecil sering tak punya SLA formal sama sekali, hanya janji informal kepada beberapa pelanggan awal. Tulis satu halaman yang menamai jam layanan, target respons, dan target pemulihan yang dinyatakan sebagai persentil, dan simpan SLO di dalam tim. Percakapan pelanggan menggantikan XLA, jadi tuliskan apa yang dikatakan tiga pelanggan terpenting tiap bulan.

**Bisnis kecil.** Tim TI kecil biasanya sangat bergantung pada pemasok eksternal, jadi kontrak penopang lebih penting daripada OLA internal. Periksa bahwa komitmen tiap pemasok setidaknya seketat SLA yang Anda berikan kepada pengguna sendiri, dan lacak kinerja sebenarnya pemasok (lihat topik 8.4, Metrik pemasok dan kontrak). Halaman bulanan sederhana, dengan pencapaian, nyaris luput, dan survei pengguna singkat, sudah cukup.

**Perusahaan besar.** Organisasi besar butuh register perjanjian dan metrik cakupan. Standarkan aturan jam dan definisi lintas layanan agar rekap bermakna (lihat topik 1.4, Tata kelola dan kepemilikan metrik). Waspadai efek semangka dalam rekap manajemen, tempat ratusan baris hijau menyembunyikan beberapa layanan dengan rasa sakit pengguna yang serius.

**Pemerintah dan sektor publik.** Badan publik sering punya standar layanan undang-undang, aturan pengadaan yang menetapkan SLA dalam kontrak, dan kewajiban menerbitkan hasil. Jaga ukuran yang diterbitkan tetap jelas dan dapat diverifikasi, simpan aturan jam dan bukti untuk audit, dan perlakukan warga sebagai pelanggan dengan suara dalam tinjauan (lihat topik 8.5, Pelaporan teregulasi dan pemerintah). Di mana kontrak kaku, tambahkan ukuran pengalaman di sampingnya tanpa mengubah kata-kata kontrak.

## Kasus bisnis: motivasi, ROI, dan TCO

Kasus untuk metrik perjanjian yang lebih baik adalah kasus untuk kepercayaan dan menghindari upaya yang sia-sia. Laporan yang cocok dengan perasaan pengguna mengurangi eskalasi dan perselisihan, mempersingkat debat bulanan tentang angka siapa yang benar, dan memungkinkan pemimpin mendanai pekerjaan yang penting. OLA yang jelas mengurangi keterlambatan serah terima, yang termasuk penyumbang terbesar pemulihan panjang. Jurang semangka, bila tertangkap awal, menghindari biaya lebih besar dari hubungan pelanggan atau pembaruan kontrak yang salah.

Biayanya sedang: waktu menulis dan meninjau perjanjian, data jam dan serah terima yang andal (lihat topik 1.5, Sumber data dan instrumentasi), survei singkat, dan tinjauan bulanan. Total biaya tumbuh dengan jumlah perjanjian, jadi yang lebih sedikit dan lebih sederhana lebih murah dimiliki.

Imbal hasil muncul sebagai lebih sedikit pelanggaran mengejutkan, lebih sedikit waktu menjelaskan laporan, dan pilihan investasi yang lebih terinformasi. Perlakukan ini sebagai pola untuk diamati dan dibandingkan dari waktu ke waktu, bukan perhitungan. Bandingkan upaya tinjauan bulanan dengan biaya satu perselisihan yang tereskalasi atau satu pembaruan yang hilang di organisasi Anda sendiri, memakai data Anda sendiri (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Melaporkan hanya rata-rata.** Rata-rata menyembunyikan ekor panjang pekerjaan terlambat. Laporkan persentil, porsi nyaris luput, dan hitungan.
- **Menulis SLA di sekitar apa yang mudah dicapai.** Target yang dipilih demi kenyamanan memberi laporan yang selalu hijau. Mulai dari apa yang dibutuhkan pelanggan dan tunjukkan jurang secara terbuka.
- **Menjeda jam untuk memperbaiki angka.** Keadaan jeda yang longgar mengubah SLA menjadi fiksi. Terbitkan aturan jeda, audit sampel, dan laporkan porsi jeda.
- **OLA sebagai senjata.** OLA yang dipakai untuk menyalahkan tim berikutnya mengajari tim memantulkan pekerjaan. Perlakukan ketidakterpenuhan sebagai informasi tentang antrean dan perbaiki alurnya.
- **Pelaporan yang digerakkan penalti.** Penalti berat mendorong klasifikasi defensif dan perselisihan tentang jam. Pakai penalti secukupnya dan pasangkan dengan tingkat pembukaan ulang dan klasifikasi ulang.
- **Data pengalaman tanpa tingkat respons.** Skor tinggi dari sampel kecil yang memilih sendiri menyesatkan. Tampilkan tingkat respons dan campuran responden di samping setiap hasil.
- **Perjanjian yang tak ditinjau siapa pun.** Perjanjian basi menggambarkan layanan yang tak ada lagi. Jadwalkan tinjauan dan pensiunkan yang tak dipakai.
- **Target individu dari perjanjian tim.** Memecah SLA tim menjadi kuota pribadi mengarah pada penutupan tergesa-gesa dan peringkat. Jaga perjanjian di tingkat layanan dan tim.

## Model kematangan

| Dimensi | Memulai | Berkembang | Terstandar | Terkelola | Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Desain perjanjian | Janji lisan atau templat yang disalin; target dipilih karena kebiasaan | Beberapa SLA tertulis; OLA jarang; jam berbeda antartim | Templat pendek dengan target berbasis hasil, persentil, dan aturan jam tertulis | Perjanjian ditinjau secara berkala, bersama pelanggan dan terkait dengan SLO | Lapisan SLA, OLA, kontrak pemasok, dan SLO disesuaikan bersama seiring kondisi berubah |
| Mutu pengukuran | Hitungan manual; rata-rata; jeda tak terdokumentasi | Pencapaian berbasis alat untuk beberapa layanan; pemakaian jeda tak ditinjau | Satu definisi dan sumber data; distribusi dan porsi jeda ditampilkan | Nyaris luput, sebab pelanggaran, dan waktu tunggu serah terima diplot tren dan disampel | Data lintas tim dan pemasok direkonsiliasi; definisi direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Keterkaitan pengalaman | Tak ada umpan balik pengguna yang terkait SLA | Survei ad hoc untuk beberapa layanan | Survei singkat untuk perjalanan kunci, dengan tingkat respons ditampilkan | Target pengalaman disepakati dengan pelanggan dan jurang semangka dilaporkan | Ukuran pengalaman dan operasional menggerakkan pekerjaan perbaikan bersama pelanggan |
| Pemakaian dalam perbaikan | Dilaporkan setelah keluhan | Pelanggaran dibahas dalam rapat tim | Tinjauan bulanan dengan pemilik dan tindakan | Sebab pelanggaran menyuapi pekerjaan perbaikan dan masalah yang didanai | Pelanggan, pemasok, dan tim merencanakan perbaikan bersama dari tampilan yang sama |

## Daftar periksa

- [ ] Setiap SLA menyatakan hasilnya, targetnya sebagai persentil atau porsi, dan populasinya.
- [ ] Peristiwa awal, peristiwa akhir, dan kondisi jeda yang diizinkan tertulis untuk setiap target.
- [ ] Setiap SLA yang menghadap pelanggan punya OLA atau kontrak pemasok yang cocok di dalamnya, masing-masing dengan tim pemilik bernama.
- [ ] Tujuan internal lebih ketat daripada target SLA yang dijanjikan.
- [ ] Laporan menunjukkan distribusi, hitungan, porsi nyaris luput, dan porsi jeda jam.
- [ ] Sampel tiket yang dijeda dan ditutup dibaca tiap bulan.
- [ ] Setiap layanan kunci punya ukuran pengalaman dengan tingkat yang disepakati, dan tingkat respons ditampilkan.
- [ ] Jurang semangka dilacak dan ditinjau dengan perwakilan pelanggan.
- [ ] Perjanjian ditinjau menurut jadwal dan dipensiunkan bila tak dipakai.
- [ ] Tak ada metrik perjanjian yang dipakai untuk memeringkat individu.

## Prompt AI

**Tinjau SLA untuk masalah jam dan kata-kata.**

```text
Berikut teks SLA kami untuk [service]: [paste agreement text]. Targetnya
[list of targets], diukur dalam [tool]. Identifikasi ambiguitas pada peristiwa
awal, peristiwa akhir, dan kondisi jeda, tempat rata-rata dapat menyembunyikan
ekor panjang, dan kata-kata yang dapat dibaca pelanggan secara berbeda dari kami.
Sarankan kata-kata yang lebih jelas dan pertanyaan yang harus saya ajukan kepada
pelanggan. Jangan mengarang nilai acuan atau kesimpulan hukum. Daftar asumsi
Anda.
```

**Susun OLA antara dua tim.**

```text
Saya butuh perjanjian tingkat operasional singkat antara [sending team] dan
[receiving team] untuk mendukung SLA kami sebesar [SLA target] untuk [service].
Serah terima tipikal adalah [description], dan antreannya [queue name or tool].
Susun OLA satu halaman dengan tujuan, respons yang diharapkan, aturan jam, cara
menyelesaikan perselisihan, dan tanggal tinjauan. Jaga nada kooperatif dan jangan
menyarankan penalti kecuali saya minta. Jangan mengarang nilai target; tanyakan
kepada saya. Daftar asumsi Anda.
```

**Cari jurang semangka dalam data kita.**

```text
Berikut ringkasan pencapaian SLA dan ukuran pengalaman untuk [list of services]
selama [period]: [paste the table]. Identifikasi layanan tempat SLA terbaca
terpenuhi dan pengalaman terbaca buruk, dan sarankan penjelasan yang mungkin
diselidiki, seperti jeda jam, klasifikasi ulang prioritas, atau ukuran yang
dipilih dengan buruk. Usulkan pertanyaan dan sampel kecil tiket untuk dibaca bagi
masing-masing. Jangan mengasumsikan sebab atau mengarang ambang. Daftar asumsi
Anda.
```

**Rancang survei pengalaman singkat untuk XLA.**

```text
Kami ingin menambah ukuran pengalaman untuk [journey, for example getting a new
laptop] bagi [audience]. Susun [number] pertanyaan netral, rencana kapan dan
bagaimana mengirimnya, dan cara melaporkan tingkat respons dan campuran
responden. Tandai kata-kata yang dapat membiaskan jawaban dan sarankan cara
menyepakati tingkat target dengan [customer representative role]. Jangan
mengarang skor acuan. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik mana yang mendefinisikan metrik di balik baris SLA dan pagar pembatas yang harus berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penyuntingan topik ini menjaga templat, aturan jam, dan tabel manipulasi tetap selaras.

## Poin penting

- SLA adalah janji kepada pelanggan, OLA adalah janji antartim, dan XLA adalah hasil pengalaman yang disepakati; masing-masing butuh ukuran dan pemilik sendiri.
- Laporkan persentil, hitungan, nyaris luput, dan porsi jeda jam, karena rata-rata dan jeda diam menghasilkan laporan hijau di atas layanan yang buruk.
- Turunkan OLA dari SLA dan jaga tujuan internal lebih ketat daripada janji.
- Pasangkan setiap SLA dengan ukuran pengalaman untuk perjalanan yang sama, dan laporkan jurang semangka sebagai temuan untuk ditindaklanjuti.
- Tinjau perjanjian menurut jadwal dengan pelanggan di ruangan, dan pensiunkan yang tak dipakai siapa pun.
- Jaga setiap metrik perjanjian di tingkat layanan dan tim, tidak pernah individu.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
