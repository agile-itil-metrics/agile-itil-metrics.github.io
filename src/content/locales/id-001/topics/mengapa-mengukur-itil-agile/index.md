# Mengapa mengukur ITIL agile

**Tim yang membangun dan menjalankan layanan membutuhkan sekumpulan kecil angka yang jujur untuk melihat apakah pekerjaan mereka membantu pengguna dan semakin baik, dan agile serta ITIL masing-masing memasok separuh gambaran yang berbeda.**

## Gambaran umum dan motivasi

Setiap tim yang membangun dan menjalankan layanan mengambil keputusan sepanjang hari: apa yang dikerjakan berikutnya, apakah sebuah rilis aman, apakah service desk perlu satu orang lagi, apakah sebuah gangguan hanya kejadian sekali atau sebuah pola. Tanpa pengukuran, keputusan itu bertumpu pada ingatan, anekdot, dan siapa yang bicara terakhir. Dengan pengukuran yang keliru, keadaannya bisa lebih buruk lagi, karena sebuah angka membawa otoritas yang tidak dimiliki sebuah pendapat. Topik ini menjelaskan mengapa mengukur layak dilakukan, apa yang disumbangkan masing-masing tradisi, dan berapa harga yang dibayar bila salah melakukannya.

Dua tradisi bertemu dalam buku ini. [Pengembangan perangkat lunak agile](https://en.wikipedia.org/wiki/Agile_software_development) adalah seperangkat nilai dan praktik, yang dinyatakan dalam Agile Manifesto tahun 2001, yang mengutamakan perangkat lunak yang berfungsi, kolaborasi erat dengan pelanggan, dan tanggap terhadap perubahan. Kebiasaan pengukurannya bersifat empiris dan lokal: sebuah tim memeriksa alurnya sendiri, melihat apa yang telah diserahkannya, lalu beradaptasi. [ITIL](https://en.wikipedia.org/wiki/ITIL), semula Information Technology Infrastructure Library, adalah kumpulan panduan untuk [manajemen layanan TI](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), praktik merancang, menyampaikan, dan memperbaiki layanan TI. Kebiasaan pengukurannya berorientasi layanan dan bersama: tingkat layanan yang disepakati, katalog layanan (ejaan ITIL sendiri adalah “service catalogue”), dan disiplin perbaikan berkelanjutan. Dalam ITIL 4, edisi kerangka kerja tahun 2019, pengukuran dan pelaporan adalah salah satu praktik manajemen umum, dan perbaikan berkelanjutan adalah praktik sekaligus prinsip panduan. Periksalah publikasi terbaru pemilik kerangka kerja sebelum mengandalkan rincian versi, karena kerangka kerja ini terus berkembang.

Kedua sudut pandang itu berbeda dengan cara yang berguna. Agile bertanya “apakah kita membangun hal yang tepat, dan semulus apa alur pekerjaan?” ITIL bertanya “apakah layanan memenuhi kebutuhan orang yang memakainya, dan apakah ia andal, dapat didukung, dan terjangkau?” Tim yang hanya mengukur alur bisa mengirim dengan cepat ke layanan yang dianggap pengguna tidak andal. Tim yang hanya mengukur tingkat layanan bisa memenuhi setiap target sambil menyampaikan perubahan begitu lambat sehingga layanan tidak lagi relevan. Gerakan [DevOps](https://en.wikipedia.org/wiki/DevOps) tumbuh dari pengamatan bahwa membangun dan menjalankan adalah satu sistem, sehingga angka yang menggambarkannya sebaiknya dibaca bersama. [Rekayasa keandalan situs](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), disiplin yang diuraikan Google dalam buku-buku terbitannya, menambahkan hubungan eksplisit antara target keandalan dan laju perubahan.

Tiga istilah berulang sepanjang buku. **Ukuran** menggambarkan sesuatu tentang pekerjaan atau layanan. **Metrik** adalah ukuran dengan rumus, satuan, dan sumber data yang ditetapkan, sehingga dua orang yang menghitungnya mendapat jawaban yang sama. **Pagar pembatas** adalah ukuran atau praktik kedua, dipilih sebelumnya, yang bergerak bila yang pertama dimanipulasi. Peringatan di balik pagar pembatas adalah [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): ketika sebuah ukuran menjadi target, orang mulai mengarahkan angkanya, bukan pekerjaannya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

### Untuk apa pengukuran

Pengukuran layak mendapat tempat bila ia menjalankan salah satu dari empat tugas.

- **Melihat.** Membuat pekerjaan yang tak terlihat menjadi terlihat: antrean yang tak dilihat siapa pun, pola insiden di tiga tim, perubahan yang menunggu sembilan hari untuk mendapat slot.
- **Memutuskan.** Menjadi masukan bagi pilihan antara dua opsi, misalnya apakah mengotomatisasi satu jenis permintaan atau memperbaiki cacat yang menyebabkannya.
- **Belajar.** Menguji sebuah keyakinan. Jika tim mengira praktik tinjauan baru akan mengurangi pengerjaan ulang, sebuah angka dapat menunjukkan apakah itu terjadi.
- **Mempertanggungjawabkan.** Memberi pengguna, pelanggan, dan pemimpin gambaran jujur tentang apa yang disampaikan layanan, sehingga kepercayaan bertumpu pada bukti.

Angka yang tidak menjalankan satu pun dari empat tugas ini hanyalah beban. Topik-topik berikutnya mengulang ujian ini untuk setiap keluarga metrik.

### Harga dari tidak mengukur apa pun

Tim yang tidak mengukur apa pun tidak bebas dari angka. Ia berjalan dengan angka tersirat: keluhan yang paling keras, gangguan terbaru, perasaan manajer tentang seberapa sibuk orang tampak. Dua biaya menyusul.

- **Umpan balik yang lambat.** Masalah yang akan terlihat lebih awal pada sebuah tren datang sebagai kejutan. Kenaikan diam-diam pada kontak berulang tampak seperti nasib buruk sampai menjadi krisis.
- **Tidak ada dasar untuk perbaikan.** Tim tidak bisa tahu apakah sebuah perubahan membantu, sehingga ia tidak bisa belajar perubahan mana yang diulangi.

### Harga dari mengukur hal yang keliru

Mengukur hal yang keliru sering lebih buruk daripada tidak mengukur sama sekali, karena ia mengarahkan upaya dengan keyakinan palsu. Jumlah tiket yang ditutup, baris kode, poin cerita yang selesai, dan jam yang dicatat mudah dikumpulkan dan mudah digambar, dan masing-masing adalah ukuran aktivitas, bukan nilai bagi pengguna. Penelitian di balik kerangka SPACE (Forsgren dan rekan, 2021) berpendapat bahwa produktivitas tidak dapat ditangkap oleh satu dimensi, dan bahwa hitungan aktivitas yang dipakai sendirian menyesatkan.

## Prinsip utama

- **Ukur untuk sebuah keputusan.** Setiap metrik menjawab pertanyaan tertulis dan menjadi masukan bagi pilihan yang disebutkan namanya. Jika tak seorang pun bisa menyebutnya, pensiunkan.
- **Gabungkan kedua sudut pandang.** Baca alur pengiriman dan kesehatan layanan di halaman yang sama, sehingga kecepatan tidak pernah dibeli dengan mengorbankan stabilitas atau sebaliknya.
- **Ukur hasil lebih dulu, aktivitas kemudian.** Pengguna yang menjadi lebih baik adalah ujiannya. Hitungan aktivitas mendukung ceritanya tetapi tidak menuturkannya (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur).
- **Gambarkan tim dan layanan, bukan individu.** Peringkat individu merusak data dan merugikan kolaborasi.
- **Mulai kecil dan tumbuh.** Segelintir metrik tepercaya mengalahkan dinding metrik yang tata kelolanya lemah.
- **Tunjukkan kepada tim lebih dulu.** Orang yang mengerjakan pekerjaan adalah audiens pertama, dan pemeriksa terbaik apakah data itu akurat.
- **Siap berubah.** Definisi, metrik, dan target direvisi ketika tidak lagi memberi masukan bagi keputusan.

## Definisi metrik

Metrik di bawah ini menggambarkan kesehatan praktik pengukuran itu sendiri, tempat “mengapa mengukur” menjadi dapat diuji. Tim yang bisa menunjukkan hal-hal ini mengukur dengan alasan. Setiap rumus berbasis waktu atau hitungan menyatakan batasannya.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Porsi metrik yang terkait keputusan | Porsi metrik yang dilaporkan dan memiliki pertanyaan tertulis serta keputusan bernama yang diinformasikannya | metrik dengan pertanyaan dan keputusan tercatat / metrik yang dilaporkan di dasbor pada akhir kuartal | persen | Register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik) | Pengukuran dan pelaporan; perbaikan berkelanjutan | Tindakan retrospektif; kesepakatan kerja | Kuartalan |
| Cakupan garis dasar | Porsi layanan dan tim dalam lingkup yang memiliki nilai awal tercatat untuk setiap ukuran inti yang disepakati | pasangan layanan-dan-ukuran dengan garis dasar tercatat dalam 12 bulan terakhir / semua pasangan layanan-dan-ukuran dalam lingkup; layanan di luar katalog dikecualikan | persen | Katalog layanan dan register metrik | Manajemen tingkat layanan; pengukuran dan pelaporan | Tinjauan pemangku kepentingan; dasbor tim | Kuartalan |
| Upaya pengukuran | Waktu staf yang dihabiskan mengumpulkan, membersihkan, dan melaporkan metrik secara manual | jam yang dicatat untuk pengumpulan dan pelaporan manual selama bulan itu, tidak termasuk waktu untuk menindaklanjuti temuan | jam per tim per bulan | Catatan waktu atau survei tim singkat | Pengukuran dan pelaporan | Anggaran waktu retrospektif | Kuartalan |
| Usia data saat tinjauan | Seberapa tua titik data terbaru ketika kelompok bertemu untuk membahasnya | stempel waktu rapat tinjauan dikurangi stempel waktu titik data terbaru di dasbor; dihitung per metrik, dilaporkan sebagai median dan persentil ke-85 | hari | Log penyegaran dasbor | Pengukuran dan pelaporan | Tinjauan pemangku kepentingan | Per tinjauan |
| Tindak lanjut perbaikan | Porsi tindakan perbaikan dari tinjauan metrik yang diselesaikan atau sengaja ditutup dalam jangka yang disepakati | tindakan selesai atau ditutup dengan alasan dalam 90 hari sejak diajukan / tindakan yang diajukan pada periode itu, dihitung dari tanggal tercatat di register perbaikan | persen | Register atau backlog perbaikan berkelanjutan | Perbaikan berkelanjutan | Butir tindakan retrospektif | Kuartalan |

Upaya pengukuran sengaja hanya menghitung pekerjaan manual. Waktu yang dipakai untuk membaca data dan memutuskan tindakan adalah inti dari latihan ini dan dikecualikan, sehingga otomatisasi pengumpulan tampak sebagai kemajuan.

## Rekomendasi

### Mulai dari tujuan

**1. Tulis alasannya sebelum metriknya.** Untuk setiap ukuran yang diusulkan, tulis satu kalimat: “Kami mengukur X untuk memutuskan Y.” Jika kalimat itu tidak bisa ditulis, ukuran itu belum siap. Kebiasaan tunggal ini menyingkirkan sebagian besar metrik pajangan sebelum masuk ke dasbor.

**2. Sebutkan audiens dan keputusannya.** Angka yang sama berarti hal berbeda bagi tim, pemilik layanan, dan eksekutif. Tuliskan siapa yang akan membacanya dan pilihan apa yang didukungnya. Tampilan kerja tim boleh memuat dua puluh ukuran. Yang sampai ke pimpinan sebaiknya sekumpulan kecil yang stabil (lihat topik 11.1, Merancang dasbor metrik layanan).

### Gunakan kedua tradisi

**3. Pasangkan ukuran alur dengan ukuran layanan.** Pilih setidaknya satu ukuran tentang bagaimana pekerjaan bergerak, seperti lead time atau usia item kerja (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur), dan setidaknya satu ukuran tentang bagaimana layanan berperilaku, seperti kekambuhan insiden atau indikator tingkat layanan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan). Menampilkannya bersama mencegah kegagalan umum ketika kecepatan dan stabilitas dikelola kelompok berbeda yang melihat bagan berbeda.

**4. Perlakukan pengiriman dan operasi sebagai satu sistem.** Penelitian yang diringkas dalam *Accelerate* (Forsgren, Humble, dan Kim, 2018) melaporkan bahwa kinerja pengiriman perangkat lunak dapat digambarkan dengan empat ukuran yang menyeimbangkan throughput dan stabilitas. Apa pun set yang dipakai tim, jaga angka terkait perubahan dan terkait insiden cukup dekat sehingga kenaikan pada satu mendorong pemeriksaan yang lain (lihat topik 2.8, Metrik DORA).

### Ukur dengan jujur

**5. Pilih sedikit ukuran yang saling menarik.** Angka tunggal mengundang optimasi berlebihan, jadi pilih pasangan seperti kecepatan dengan kualitas, volume dengan hasil, dan biaya dengan pengalaman. Pasangan itu tidak perlu berupa rumus. Ia perlu muncul di halaman yang sama.

**6. Catat garis dasar sebelum mengubah apa pun.** Tanpa nilai awal, klaim perbaikan hanyalah cerita. Kumpulkan data beberapa pekan lebih dulu, termasuk sebaran nilai selain rata-ratanya (lihat topik 1.6, Literasi statistik untuk metrik layanan). Garis dasar juga melindungi tim: ia menunjukkan bahwa kuartal yang buruk mengikuti perubahan cara pekerjaan dihitung, bukan penurunan kinerja.

### Bangun kebiasaan

**7. Tinjau dengan ritme yang sesuai dengan keputusan.** Ukuran alur cocok untuk percakapan mingguan, atau yang diadakan pada setiap langkah pengiriman perangkat lunak berkelanjutan. Ukuran tingkat layanan dan biaya cocok untuk percakapan bulanan atau kuartalan. Metrik yang ditinjau dengan ritme yang salah menimbulkan kebisingan atau melewatkan saat ketika tindakan akan membantu.

**8. Tutup lingkaran dengan pekerjaan perbaikan.** Tinjauan yang berakhir dengan “menarik” telah menyia-nyiakan datanya. Akhiri setiap tinjauan dengan satu atau dua tindakan bernama, pemilik, dan tanggal, lalu lacak penyelesaiannya. Praktik perbaikan berkelanjutan ITIL dan retrospektif agile adalah dua nama untuk disiplin yang sama (lihat topik 9.5, Metrik perbaikan berkelanjutan).

**9. Katakan untuk apa angka tidak akan dipakai.** Nyatakan dengan jelas bahwa metrik tim tidak akan dipakai untuk memeringkat atau memberi ganjaran individu, dan bahwa definisi akan diubah secara terbuka. Orang bekerja sama dengan pengukuran ketika mereka memercayai cara pemakaiannya (lihat topik 11.3, Meluncurkan metrik tanpa menumbuhkan ketakutan).

## Vektor manipulasi dan pagar pembatas

Bahkan metrik tentang pengukuran pun bisa dimanipulasi. Setiap baris di bawah memasangkan metrik dengan cara yang biasa membengkokkannya dan pemeriksaan yang akan mengungkapnya.

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Porsi metrik yang terkait keputusan | Menulis pertanyaan dan keputusan yang masuk akal untuk setiap metrik setelah kejadian demi menaikkan persentase | Ambil sampel log keputusan: tanyakan apa yang berubah karena metrik itu, dan bandingkan tanggal entri ditulis dengan tanggal metrik pertama kali muncul |
| Cakupan garis dasar | Mencatat garis dasar sekali lalu tidak pernah menyegarkannya, atau memilih periode tenang yang nyaman | Wajibkan rentang tanggal dan ukuran sampel pada setiap garis dasar; tinjau garis dasar setelah perubahan besar pada layanan |
| Upaya pengukuran | Memindahkan pekerjaan pengumpulan keluar dari pembukuan dengan mengerjakannya tanpa dicatat, atau menggesernya ke pemasok | Bandingkan dengan survei singkat tentang berapa lama orang mengatakan pelaporan memakan waktu; masukkan upaya pemasok dalam tinjauan |
| Usia data saat tinjauan | Menyegarkan dasbor tepat sebelum rapat sementara catatan di baliknya masih basi | Laporkan usia catatan terbaru di sistem sumber selain waktu penyegaran |
| Tindak lanjut perbaikan | Menutup tindakan dengan alasan “tidak lagi relevan” untuk mencapai persentase, atau memecah tindakan menjadi potongan remeh | Tinjau alasan yang diberikan untuk tindakan yang ditutup setiap kuartal, dan lacak apakah ukuran yang disasar tindakan itu bergerak |

Pembacaan yang sehat adalah praktik yang terlihat hidup. Metrik masuk dan keluar dari register dengan alasan tertulis, garis dasar segar, tindakan dari tinjauan diselesaikan atau dibatalkan dengan jujur, dan tim menghabiskan lebih banyak waktu menindaklanjuti data daripada mengumpulkannya. Skor sempurna di setiap baris adalah dorongan untuk mengambil sampel catatan di baliknya, bukan alasan untuk bersuka cita.

## Kompromi: kelebihan dan kekurangan

| Pilihan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Mengukur sedikit | Biaya rendah; risiko manipulasi rendah; kepercayaan tinggi | Titik buta; keputusan bertumpu pada anekdot |
| Mengukur banyak | Cakupan luas; peringatan dini di banyak lini | Perhatian terpecah; tata kelola tipis; biaya pengumpulan membengkak |
| Tampilan gabungan | Menyeimbangkan kecepatan dan stabilitas; mendukung kepemilikan bersama | Butuh definisi yang disepakati antartim dan tempat bersama untuk melihat |
| Target pada metrik | Memberi arah dan urgensi | Mengundang manipulasi; butuh pagar pembatas berpasangan |
| Metrik tanpa target | Mendorong diskusi jujur | Bisa menjadi laporan yang tak ditindaklanjuti siapa pun |

Jawaban praktisnya adalah set gabungan yang kecil, dengan target dipakai seperlunya untuk kondisi yang dipahami dengan baik dan diminta pengguna, seperti sasaran tingkat layanan. Semua yang lain adalah pertanyaan untuk dibahas. Tujuannya bukan menyingkirkan pertimbangan dari keputusan, melainkan memberinya bukti yang lebih baik.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Keputusan apa yang kita ambil kuartal lalu yang benar-benar diubah oleh sebuah angka?**
Minta kelompok mengingat keputusan tertentu lalu cari tahu mana, jika ada, yang bergantung pada data. Jika daftarnya pendek, itu informasi yang berguna: artinya banyak pelaporan saat ini tidak layak dipertahankan. Fasilitator sebaiknya mencatat metrik yang memang mengubah keputusan, karena merekalah kandidat untuk dilindungi. Lalu tanyakan keputusan mana yang diambil berdasarkan naluri dan apakah sebuah angka bisa membantu.

**2. Dari angka kita saat ini, mana yang menggambarkan aktivitas, dan mana yang menggambarkan nilai bagi pengguna?**
Tampilkan dasbor saat ini di layar dan tandai setiap metrik sebagai aktivitas (tiket ditutup, build dijalankan, poin selesai) atau hasil (pengguna bisa bekerja, masalah tidak berulang). Jangan berdebat lama tentang kasus perbatasan. Intinya melihat keseimbangannya. Bila hanya ada aktivitas, tanyakan hasil apa yang seharusnya dihasilkan aktivitas itu dan bagaimana tim akan tahu.

**3. Di mana angka pengiriman dan operasi berada sekarang, dan apakah orang yang sama melihat keduanya?**
Telusuri di mana setiap keluarga ukuran disimpan dan siapa yang meninjaunya. Tim sering terkejut mendapati bahwa data perubahan ditinjau satu kelompok dan data insiden oleh kelompok lain, tanpa rapat bersama. Tanyakan pola apa yang mungkin terlewat karena keduanya tidak pernah terlihat bersama. Sepakati satu tempat atau satu rapat tempat keduanya bertemu.

**4. Apa yang tidak kita ukur yang akan kita sesali bila tidak diketahui?**
Undang kekhawatiran, bukan metrik: “Saya takut kita tidak akan menyadari jika...” Bekerjalah dari jawabannya menuju ukuran kandidat, lalu menuju data termurah yang akan menunjukkannya. Jaga daftarnya tetap pendek.

**5. Apa yang perlu kita yakini tentang angka kita sebelum menunjukkannya kepada pimpinan?**
Bahas apa yang membuat data tepercaya: definisi yang stabil, pemeriksaan akurasi dengan sampel, dan kesepakatan tentang pengecualian. Daftar keraguan tim, sekecil apa pun, seperti status yang dipakai tidak konsisten. Putuskan keraguan mana yang harus diperbaiki sebelum dibagikan lebih luas dan mana yang bisa diungkapkan bersama angkanya.

**6. Jika hanya boleh menyimpan tiga metrik untuk kuartal depan, apa saja dan mengapa?**
Batasan itu memaksa prioritas. Minta setiap orang menulis tiga, lalu bandingkan. Cari kesepakatan tentang hasil dan ketidaksepakatan tentang ukuran aktivitas. Tanyakan pagar pembatas apa yang dibutuhkan ketiganya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman paling diuntungkan oleh umpan balik yang cepat dan lokal: berapa lama pekerjaan menunggu, di mana ia mengantre, seberapa sering perubahan menimbulkan masalah. Mereka sebaiknya menyimpan tampilan kerja yang kaya untuk diri sendiri dan menerbitkan satu set kecil ke luar. Tim harus menolak dorongan mengukur volume keluaran sebagai pengganti nilai, dan memasangkan ukuran kecepatan dengan ukuran kualitas sejak awal (lihat topik 2.1, Ukuran alur).

### Tim layanan dan operasi

Tim operasi sudah hidup bersama angka: volume, waktu respons dan penyelesaian, ketersediaan. Peluangnya adalah beralih dari melaporkan apa yang terjadi ke menjelaskan mengapa, lewat kekambuhan, akar penyebab, dan porsi pekerjaan yang tak terencana (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana). Mereka juga sebaiknya membawa data ke percakapan perencanaan dengan tim pengiriman, sehingga pekerjaan keandalan diperjuangkan dengan bukti, bukan dengan keluhan.

### Kepemimpinan dan tata kelola

Pemimpin menetapkan insentif, sering tanpa sengaja, lewat pertanyaan yang mereka ajukan. Pemimpin yang bertanya “mengapa ini merah?” mengajari tim menyembunyikan yang merah. Pemimpin yang bertanya “apa yang kalian pelajari, dan apa yang kalian butuhkan?” mengajari tim melapor dengan jujur. Badan tata kelola sebaiknya meminta register, pagar pembatas, dan tindakan perbaikan bersama angkanya, dan mendanai pekerjaan yang diungkap oleh angka yang buruk (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

### Pelanggan dan pengguna

Pengguna menilai layanan dari apakah ia berfungsi dan apakah masalah diperbaiki, bukan dari ukuran internal. Kata-kata mereka sendiri, dalam survei, keluhan, dan komentar, layak ditempatkan di samping angka operasional sebagai pemeriksa apakah tim mengukur hal yang penting (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan service desk, tim operasi, dan tiga tim produk yang membangun layanan etalase, pembayaran, dan pemenuhan pesanan. Angka di bawah ini bersifat ilustratif.

Pimpinan bertanya mengapa pelanggan mengeluh checkout lambat padahal tim pengiriman melaporkan mengirim setiap hari dan tim operasi melaporkan ketersediaan 99,9 persen. Setiap kelompok benar menurut ukurannya sendiri, dan tak seorang pun melihatnya bersama. Kepala manajemen layanan mengusulkan tampilan gabungan satu halaman untuk layanan checkout, dibangun dari data yang sudah dikumpulkan tim.

Tampilan itu menunjukkan empat hal untuk dua belas pekan terakhir. Lead time perubahan memiliki median 2 hari dan persentil ke-85 sebesar 9 hari. Tingkat kegagalan perubahan adalah 8 persen. Insiden pada checkout berjumlah 14, di antaranya 6 berbagi satu penyebab, kueri basis data yang lambat yang diperkenalkan oleh sebuah rilis baru. Median waktu pemulihan adalah 40 menit, tetapi waktu muat halaman pada persentil ke-95 merayap naik selama enam pekan, pola yang tidak ditunjukkan angka ketersediaan karena layanan secara teknis tetap hidup.

Kelompok itu melihat apa yang tersembunyi. Ketersediaan diukur sebagai “checkout merespons”, sedangkan pengguna mengalami “checkout merespons dengan cukup cepat”. Tim produk dan tim operasi sepakat menambahkan indikator latensi untuk checkout dengan sasaran yang ditetapkan pemilik produk setelah membaca komentar pelanggan, memperlakukan penyebab insiden berulang sebagai catatan masalah dengan pemilik, dan meninjau tampilan gabungan itu dua pekan sekali. Mereka mencatat satu keputusan: menghentikan fitur checkout baru selama satu rentang pengiriman perangkat lunak berkelanjutan untuk memperbaiki kueri dan menambahkan pemeriksaan kinerja ke jalur rilis.

Risiko manipulasi muncul dalam sebulan. Tim operasi menyadari bahwa dua dari 14 insiden dibuka sebagai “permintaan layanan” karena kategori permintaan tidak memiliki target penyelesaian. Tim menyadari bahwa target pada insiden telah mendorong orang menggolongkan kasus perbatasan sebagai permintaan. Mereka menambahkan porsi yang dikategorikan ulang ke tampilan itu dan mengambil sampel sepuluh tiket setiap bulan. Setelah perubahan, waktu muat halaman persentil ke-95 turun, insiden berulang berkurang, dan tim mempertahankan tampilan itu karena telah mengubah sebuah keputusan.

## Sudut pandang sektor

**Startup.** Tim kecil memiliki sedikit proses dan kepercayaan yang kuat, yang membantu. Risikonya adalah mengimpor dasbor perusahaan besar sebelum ada kebutuhan. Mulailah dengan dua atau tiga ukuran yang akan dibaca para pendiri setiap pekan, seperti lead time untuk perubahan, indikator keandalan sederhana, dan umpan balik langsung pengguna, dan tuliskan definisinya.

**Bisnis kecil.** Orang yang menjalankan TI sering melapor kepada pemilik, dan satu keluhan pelanggan bisa lebih berbobot daripada bagan mana pun. Jaga set tetap kecil, pakai data yang sudah dihasilkan alat Anda, dan utamakan percakapan dengan pengguna. Perlakukan laporan dari vendor dengan hati-hati, karena vendor punya insentifnya sendiri.

**Perusahaan besar.** Skala melipatgandakan tuntutan akan angka yang dapat dibandingkan dan tekanan untuk memanipulasinya. Pakai set standar kecil dengan definisi tertulis, pisahkan tampilan kerja tim dari rekapitulasi, dan hindari membandingkan tim yang menjalankan jenis layanan yang sangat berbeda. Register metrik, definisi bersama, dan ritme tinjauan menjadi esensial.

**Pemerintah dan sektor publik.** Tingkat layanan dalam kontrak, persyaratan audit, dan kewajiban pelaporan publik dapat membuat sebagian ukuran tidak bisa ditawar. Perlakukan sebagai masukan desain: penuhi, tampilkan pagar pembatas di sampingnya, dan nyatakan definisi yang dipakai. Akuntabilitas publik menaikkan harga menyembunyikan kabar buruk, jadi bangun saluran internal yang aman untuk pelaporan terus terang (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasi untuk mengukur adalah keputusan yang lebih baik dengan biaya lebih rendah. Pengukuran mendukung penentuan prioritas, menunjukkan di mana pemborosan berada, memberi peringatan dini atas kemunduran layanan, dan menyediakan bukti untuk permintaan investasi.

Biayanya terdiri dari beberapa bagian. Ada perangkat, yang sering sudah dimiliki: sistem tiket, pelacak isu, kontrol versi, dan pemantauan. Ada waktu staf untuk mendefinisikan metrik, membangun tampilan, dan merawat register. Ada biaya berulang rapat tinjauan, yang terbesar dan paling berharga. Total biaya kepemilikan (TCO) sebuah praktik pengukuran juga mencakup biaya menindaklanjuti temuan, karena wawasan tanpa anggaran perbaikan hanya memberi sedikit imbal hasil.

Imbal hasilnya sulit dinyatakan dengan satu angka universal, dan buku ini tidak mengarangnya. Cara berguna untuk membangun kasusnya adalah mengukur garis dasar Anda sendiri sebelum dan sesudah perubahan: waktu yang dihabiskan untuk pelaporan manual, kontak berulang, keputusan yang dibalik karena datanya salah, dan kejutan yang ditemukan terlambat. Pola yang diharapkan adalah lebih sedikit kejutan, perdebatan lebih singkat, dan kesesuaian lebih baik antara angka operasional dan pengalaman pengguna. Perbandingan sederhana [pengembalian investasi](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) antara upaya yang dikeluarkan dan upaya yang dihemat adalah titik awal yang wajar, dan topik 7.7, Pengembalian investasi dan kasus bisnis, membahas metodenya.

## Anti-pola dan jebakan

- **Dasbor segalanya.** Puluhan bagan, tanpa pemilik, tanpa keputusan. Pilih beberapa, sebutkan keputusan yang diinformasikan masing-masing, dan pensiunkan sisanya.
- **Pengukuran sepihak.** Kecepatan tanpa stabilitas, atau stabilitas tanpa relevansi. Pasangkan ukuran alur dengan ukuran layanan.
- **Mengukur orang.** Peringkat individu merusak data dan mengecilkan hati untuk saling membantu. Laporkan pada tingkat tim dan layanan.
- **Target sebelum garis dasar.** Target tanpa nilai awal hanyalah tebakan. Catat garis dasar lebih dulu, dan tetapkan target setelah setidaknya satu siklus tinjauan.
- **Laporan tanpa tindakan.** Tinjauan yang tidak menghasilkan perubahan mengajari orang mengabaikannya. Akhiri setiap tinjauan dengan tindakan bernama, pemilik, dan tanggal.
- **Perubahan definisi diam-diam.** Garis tren menjadi tak bermakna. Catat setiap perubahan beserta alasannya dan tandai pada bagan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Tujuan dan pemilihan | Metrik dipilih karena alat menawarkannya | Beberapa metrik memiliki tujuan yang dinyatakan | Setiap metrik yang dilaporkan memiliki pertanyaan dan keputusan tertulis | Set metrik ditinjau terhadap keputusan dan dipensiunkan bila tak dipakai | Metrik dirancang bersama pengguna dan pemasok seputar hasil bersama |
| Tampilan gabungan agile dan ITIL | Data pengiriman dan layanan dipisah | Beberapa tim melihat keduanya bersama | Tampilan umum alur dan kesehatan layanan per layanan | Tampilan gabungan diplot tren dan dikaitkan dengan pekerjaan perbaikan | Tampilan lintas tim dan pemasok terkait dengan hasil pengguna |
| Garis dasar dan upaya | Tanpa garis dasar; pengumpulan manual | Garis dasar untuk sebagian layanan; pengumpulan campuran | Garis dasar tercatat untuk ukuran inti; pengumpulan sebagian besar otomatis | Garis dasar disegarkan setelah perubahan; upaya dilacak dan dikurangi | Garis dasar dan definisi disesuaikan terus-menerus seiring perubahan layanan |
| Pemakaian dalam perbaikan | Angka dicatat lalu dilupakan | Tindakan sesekali setelah pekan yang buruk | Setiap tinjauan berakhir dengan tindakan bernama | Tindak lanjut tindakan diukur dan didanai | Perbaikan mengalir dari semua orang dan terlihat lintas tim |

## Daftar periksa

- [ ] Setiap metrik yang dilaporkan memiliki pertanyaan tertulis dan keputusan bernama yang diinformasikannya.
- [ ] Audiens setiap tampilan disebutkan, dan tampilan tim dipisah dari tampilan pimpinan.
- [ ] Setidaknya satu ukuran alur dan satu ukuran layanan muncul di halaman yang sama.
- [ ] Garis dasar dengan rentang tanggal dan ukuran sampel ada untuk setiap ukuran inti.
- [ ] Setiap ukuran waktu menyatakan di mana jam mulai dan berhenti.
- [ ] Setiap metrik memiliki pagar pembatas yang ditampilkan di sampingnya.
- [ ] Upaya pengumpulan manual diketahui, dan tugas manual terbesar telah ditinjau untuk otomatisasi.
- [ ] Tim melihat data mereka sendiri sebelum pimpinan.
- [ ] Tidak ada peringkat, gaji, atau disiplin individu yang dikaitkan dengan metrik.
- [ ] Setiap tinjauan berakhir dengan setidaknya satu tindakan perbaikan bernama, pemilik, dan tanggal.
- [ ] Setidaknya satu metrik telah dipensiunkan atau didefinisikan ulang dalam setahun terakhir.

## Prompt AI

**Susun pernyataan tujuan untuk setiap metrik.**

```text
Kami adalah [team name], bertanggung jawab atas [service or product]. Dasbor kami
saat ini menampilkan metrik berikut: [list of metrics with their definitions].
Untuk masing-masing, susun pernyataan satu kalimat dalam bentuk "Kami mengukur X
untuk memutuskan Y", dan tandai setiap metrik yang keputusannya tidak dapat Anda
simpulkan dari yang saya berikan. Sarankan pertanyaan yang harus saya jawab untuk
melengkapi setiap pernyataan. Jangan mengarang nilai acuan atau target. Daftar
asumsi Anda.
```

**Gabungkan tampilan pengiriman dan layanan.**

```text
Ukuran pengiriman kami adalah [list, with definitions and data sources] dan ukuran
layanan kami adalah [list, with definitions and data sources] untuk [service
name]. Usulkan tata letak satu halaman yang menampilkan keduanya bersama,
memasangkan setiap ukuran kecepatan dengan ukuran stabilitas atau kualitas, dan
mencatat data yang dibutuhkan masing-masing. Identifikasi definisi yang
bertentangan di antara kedua set. Jangan mengarang nilai atau ambang. Daftar
asumsi Anda dan hal-hal yang tidak dapat Anda tentukan.
```

**Rencanakan garis dasar.**

```text
Kami ingin mencatat garis dasar untuk [metric name] bagi [service or team]
sebelum mengubah [practice or tool]. Datanya berasal dari [source]. Usulkan berapa
lama mengumpulkan data, statistik ringkasan apa yang dicatat (termasuk persentil),
apa yang dikecualikan dan mengapa, dan bagaimana mencatat perubahan cara pekerjaan
dihitung selama periode itu. Jangan berasumsi tentang nilai. Daftar asumsi Anda
dan risiko kualitas data yang Anda lihat.
```

**Siapkan tinjauan yang mengarah pada tindakan.**

```text
Kami mengadakan tinjauan [weekly, monthly, or quarterly] atas [metric set] bersama
[audience]. Susun agenda dan sekumpulan pertanyaan fasilitasi singkat yang
bergerak dari membaca angka ke memilih satu atau dua tindakan perbaikan, masing-
masing dengan pemilik dan tanggal. Sertakan dorongan untuk memeriksa manipulasi
terhadap pagar pembatas setiap metrik. Jangan mengarang data. Daftar asumsi Anda
tentang kelompok dan budayanya.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang membahas metrik yang sedang Anda pertimbangkan beserta pagar pembatas berpasangannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa topik metrik baru atau yang direvisi mempertahankan pernyataan tujuan, vektor manipulasi, dan pagar pembatas.

## Poin penting

- Ukur untuk melihat, memutuskan, belajar, dan mempertanggungjawabkan; angka yang tidak melakukan satu pun dari itu hanyalah beban.
- Agile memasok umpan balik cepat dan lokal tentang alur; ITIL memasok tampilan tingkat layanan bersama tentang keandalan dan nilai. Bacalah bersama.
- Tidak mengukur apa pun menyerahkan keputusan pada anekdot, dan mengukur hal yang keliru mengarahkan upaya dengan keyakinan palsu.
- Mulai dengan beberapa metrik, masing-masing dengan tujuan tertulis, garis dasar, dan pagar pembatas.
- Gambarkan tim dan layanan, bukan individu, dan biarkan tim melihat datanya lebih dulu.
- Tutup lingkaran: tinjauan yang tidak menghasilkan tindakan menyia-nyiakan datanya.

## Referensi dan bacaan lanjutan

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
