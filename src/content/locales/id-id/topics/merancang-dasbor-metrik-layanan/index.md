# Merancang dasbor metrik layanan

**Dasbor yang baik menjawab beberapa pertanyaan yang benar-benar diajukan audiens bernama, menunjukkan tiap angka dengan tren dan konteksnya, dan dibangun oleh orang yang akan memakainya.**

## Gambaran umum dan motivasi

[Dasbor](https://en.wikipedia.org/wiki/Dashboard_(business)) adalah tampilan visual dari informasi terpenting yang dibutuhkan untuk mencapai satu atau lebih tujuan, diatur agar dapat dipantau sekilas. Dalam praktik, sebagian besar dasbor di organisasi layanan gagal memenuhi definisi itu. Mereka mulai sebagai cara menjawab pertanyaan nyata, lalu tumbuh dengan penambahan sampai menunjukkan segala yang dapat digambar perkakas. Tak ada yang memilikinya, tak ada yang yakin apa arti angkanya, dan layar di dinding diabaikan.

Tujuan dasbor metrik layanan adalah membantu orang membuat keputusan dan memulai percakapan yang baik. Tim memakainya untuk memperhatikan bahwa pekerjaannya menunggu lebih lama daripada sebelumnya, dan bertanya mengapa. Pemilik layanan memakainya untuk melihat bahwa layanan hampir di tepi target keandalannya. Pemimpin memakainya untuk melihat apakah investasi di suatu area menghasilkan hasil yang diharapkan. Tampilan yang tak melakukan satu pun dari ini adalah hiasan, dan hiasan berbiaya uang untuk dibangun dan perhatian untuk diabaikan.

ITIL membingkai ini sebagai soal informasi dan komunikasi: informasi yang tepat, kepada orang yang tepat, dalam bentuk yang dapat mereka pakai, pada waktu yang tepat. Tujuan agile menunjuk pada prinsip desain yang sama. Keterlibatan pemangku kepentingan berkelanjutan berarti audiens membantu merancang tampilan, dan terus membantu seiring pertanyaan berubah. Perbaikan berkelanjutan berarti dasbor sendiri ditinjau dan dipangkas. Evolusi berkelanjutan berarti himpunan ukuran berubah ketika layanan dan tujuan berubah. Kecepatan berkelanjutan berarti dasbor tidak menciptakan dorongan harian untuk memeriksa angka yang hanya bergerak bulanan. Dan kepercayaan yang sama yang mendukung individu termotivasi berarti tim melihat data mereka sendiri lebih dulu dan memiliki cerita yang diceritakannya.

Tiga kegagalan desain lazim. Yang pertama adalah dinding angka, ketika seratus ubin bersaing dan tak satu pun menonjol. Yang kedua adalah tampilan hanya-target, ketika angka ditunjukkan terhadap sasaran dalam merah atau hijau tanpa tren dan konteks, yang mengundang pengelolaan menurut warna alih-alih pemahaman. Yang ketiga adalah tampilan tanpa pemilik, ketika definisi telah hanyut, data basi, dan tak ada yang tahu siapa untuk ditanya. Pekerjaan desain adalah menghindari ini.

Desain visual yang baik membantu. [Visualisasi data](https://en.wikipedia.org/wiki/Data_visualization) adalah praktik menunjukkan data secara grafis agar pola dapat dilihat dan dipahami. [Sparkline](https://en.wikipedia.org/wiki/Sparkline) adalah bagan garis kecil seukuran kata yang menunjukkan tren tanpa sumbu atau label, dan cocok untuk dasbor karena menaruh riwayat di samping nilai saat ini. [Run chart](https://en.wikipedia.org/wiki/Run_chart) memplot ukuran dari waktu ke waktu dengan garis median, dan [bagan kendali](https://en.wikipedia.org/wiki/Control_chart) menambah batas yang memisahkan variasi biasa dari sinyal yang layak diselidiki (lihat topik 1.6, Literasi statistik untuk metrik layanan). [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk) adalah hiasan yang tak menambah informasi, seperti garis kisi tebal, batang tiga dimensi, dan pengukur hias, dan layak dibuang.

[Metrik vanitas](https://en.wikipedia.org/wiki/Vanity_metric) adalah angka yang tampak baik dan tak membantu siapa pun memutuskan apa pun, seperti hitungan tiket ditangani atau login ke portal yang ditunjukkan tanpa hasil. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku pada seluruh tampilan: ketika angka di layar menjadi target, orang mengelola angkanya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Topik ini bersandar pada kerangka pengukuran (lihat topik 1.7, Kerangka pengukuran) dan pada topik data dan tata kelola di Bagian 1.

## Prinsip utama

- **Mulai dari pertanyaan, bukan data.** Tuliskan keputusan dan pertanyaan yang dimiliki audiens sebelum memilih satu bagan pun.
- **Tunjukkan sedikit ukuran, seimbang.** Himpunan kecil yang mencakup alur, mutu, keandalan, pengalaman, dan biaya lebih tahan manipulasi daripada satu ukuran saja.
- **Selalu tunjukkan tren dan konteks.** Nilai tanpa riwayat, garis dasar, dan catatan tentang apa yang berubah sulit ditafsirkan.
- **Hormati variasi.** Jangan bereaksi pada setiap goyangan. Pakai run chart atau bagan kendali untuk memisahkan sinyal dari derau.
- **Beri setiap audiens tampilannya sendiri.** Tim, pemilik layanan, dan pimpinan mengajukan pertanyaan berbeda dan butuh rincian berbeda.
- **Tim melihat data mereka lebih dulu.** Orang yang mengerjakan pekerjaan sebaiknya melihat angka mereka sebelum orang lain, dan memiliki penafsirannya.
- **Definisikan segalanya dan namai pemilik.** Setiap ukuran punya definisi tertulis, sumber data, dan orang untuk ditanya.
- **Jaga agar ringan dirawat.** Dasbor yang membutuhkan seminggu kerja manual tiap bulan akan mati.

## Definisi metrik

Ukuran di bawah tentang dasbor itu sendiri, bukan tentang layanan. Ukuran itu membantu tim program melihat apakah tampilannya sehat. Sebagian bersifat deskriptif dan ditandai demikian, karena memperlakukannya sebagai target akan mengundang distorsi yang diperingatkan topik ini.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan pertanyaan | Porsi pertanyaan audiens yang terdaftar yang dapat dijawab dasbor dengan ukuran yang didefinisikan | pertanyaan dengan ukuran dan definisi / pertanyaan yang didaftar audiens | persen | Daftar pertanyaan dari sesi pemangku kepentingan; kartu metrik | Perbaikan berkelanjutan; manajemen tingkat layanan | Keterlibatan pemangku kepentingan berkelanjutan | Kuartalan |
| Kelengkapan definisi | Porsi ukuran yang ditampilkan dengan definisi tertulis terkini, sumber data, pemilik, dan batas yang diketahui | ukuran dengan keempatnya / ukuran yang ditampilkan | persen | Kartu atau katalog metrik | Manajemen informasi dan teknologi; manajemen pengetahuan | Pemahaman bersama; pekerjaan terlihat | Kuartalan |
| Kesegaran data | Porsi ukuran yang ditampilkan yang diperbarui dalam interval yang diharapkan | ukuran diperbarui tepat waktu / ukuran yang ditampilkan | persen | Log pipeline; metadata dasbor | Manajemen pemantauan dan peristiwa | Umpan balik cepat | Mingguan |
| Keterkaitan keputusan | Porsi ukuran yang ditinjau tempat tinjauan terbaru menuntun pada keputusan, tindakan, atau pilihan sadar untuk tidak berbuat apa-apa yang tercatat | ukuran dengan keputusan terkait pada periode itu / ukuran yang ditinjau | persen | Catatan tinjauan; register perbaikan | Perbaikan berkelanjutan | Renungan teratur | Kuartalan |
| Ukuran tampilan | Jumlah ukuran pada tiap tampilan audiens | hitungan per tampilan | ukuran | Konfigurasi dasbor | Perbaikan berkelanjutan | Kesederhanaan | Kuartalan |
| Tingkat pensiun | Ukuran yang dihapus atau diganti pada periode itu karena berhenti menginformasikan keputusan | ukuran dipensiunkan / ukuran ditampilkan di awal | persen | Log perubahan dasbor | Perbaikan berkelanjutan | Evolusi berkelanjutan | Tahunan |
| Jangkauan audiens (deskriptif) | Porsi tim atau peran yang dituju yang membuka tampilan mereka pada periode itu | tim atau peran berbeda yang melihat / tim atau peran yang dituju | persen | Log akses dasbor, diagregasi ke tim atau peran | Manajemen informasi dan teknologi | Keterlibatan pemangku kepentingan berkelanjutan | Kuartalan |

Definisikan audiens tiap tampilan secara tertulis. Hitung ukuran per tampilan, bukan per perkakas, agar katalog besar dengan halaman depan kecil tidak disalahartikan sebagai sprawl. Log akses dikumpulkan dan dilaporkan pada tingkat tim atau peran dan tidak pernah untuk melacak kebiasaan membaca individu. Jangkauan audiens bersifat deskriptif dan dibaca bersama keterkaitan keputusan, karena tampilan yang banyak dilihat yang tak mengubah keputusan bernilai kecil. Keterkaitan keputusan menerima “kami melihat, dan memilih tidak berbuat apa-apa” sebagai keputusan tercatat, agar ukuran tidak mendorong orang mengarang tindakan.

## Rekomendasi

### Mulai dari audiens

**1. Daftar audiens dan pertanyaan mereka.** Audiens tipikal adalah tim pengiriman atau dukungan yang mengerjakan pekerjaan, pemilik layanan yang bertanggung jawab atas layanan, dan pemimpin yang mendanai dan mengarahkan. Duduklah bersama masing-masing selama satu jam dan tuliskan apa yang mereka tanyakan, keputusan apa yang mereka buat, dan apa yang mereka harap mereka ketahui. Pertanyaan yang baik terdengar seperti “Apakah pekerjaan kita menunggu lebih lama daripada dulu?” atau “Apakah kita hampir menghabiskan anggaran kesalahan kita?” Ia tidak terdengar seperti “Tunjukkan dasbor insiden.”

**2. Petakan tiap pertanyaan ke satu ukuran dan pendamping.** Untuk tiap pertanyaan, pilih satu ukuran terbaik dari bagian-bagian awal buku ini, dan pendamping yang menjaga dari distorsi yang jelas. Ukuran kecepatan dipasangkan dengan ukuran mutu. Ukuran volume dipasangkan dengan hasil. Ukuran pengalaman dipasangkan dengan ukuran perilaku. Ini logika pemasangan yang melintasi seluruh buku (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur).

**3. Sertakan audiens dalam desain.** Tunjukkan sketsa sebelum membangun apa pun. Tanyakan apa yang membingungkan, apa yang hilang, dan apa yang akan mereka lakukan dengan tiap angka. Jawaban mereka akan memangkas himpunan, dan mereka akan memercayai apa yang mereka bantu buat.

### Pilih himpunan kecil yang seimbang

**4. Jaga setiap tampilan pada segelintir ukuran.** Sekitar lima sampai sembilan ukuran per tampilan audiens adalah rentang yang bisa dikerjakan, meski angka yang tepat bergantung pada pertanyaan. Batas itu memaksa pilihan. Taruh rincian di balik klik, dalam tampilan pendukung, dan jaga halaman depan pada apa yang dibutuhkan untuk memutuskan apakah melihat lebih jauh.

**5. Seimbangkan himpunan lintas dimensi.** [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard) adalah perkakas manajemen strategis yang melihat organisasi dari beberapa perspektif alih-alih hasil keuangan saja. Gagasannya berpindah dengan baik: untuk layanan, seimbangkan alur dan kecepatan, mutu dan stabilitas, keandalan, pengalaman, dan biaya. Himpunan yang hanya mencakup kecepatan mendorong jalan pintas, dan himpunan yang hanya mencakup mutu mendorong keterlambatan. Gagasan terkait [indikator kinerja utama](https://en.wikipedia.org/wiki/Key_performance_indicator) berguna ketika indikator dipilih karena apa yang diungkapkannya tentang suatu tujuan dan bukan karena betapa mudah ditunjukkan.

**6. Bedakan indikator dari diagnostik.** Beberapa indikator utama memberi tahu apakah segalanya sehat. Ukuran diagnostik membantu mencari tahu mengapa ketika tidak. Simpan diagnostik satu langkah ke bawah, agar halaman depan tidak menjadi dinding.

### Tunjukkan konteks dan tren

**7. Tunjukkan riwayat bersama setiap nilai.** Taruh sparkline atau run chart kecil di samping tiap nilai saat ini. Tunjukkan riwayat yang cukup untuk melihat pola musiman, seperti puncak bulanan atau siklus kuartalan. Tandai peristiwa yang menjelaskan perubahan: rilis, perubahan kebijakan, gangguan, reorganisasi tim. Catatan di samping garis menghemat seratus pertanyaan.

**8. Pakai distribusi dan rentang untuk ukuran waktu.** Rata-rata menyembunyikan ekor panjang yang dirasakan pengguna. Tunjukkan median dan persentil tinggi seperti ke-85 atau ke-95, dan tunjukkan sebarannya. Nyatakan ukuran sampel bila kecil, dan tunjukkan seberapa tak pasti sampel kecil (lihat topik 1.6, Literasi statistik untuk metrik layanan, dan topik 2.2, Lead time, cycle time, dan efisiensi alur).

**9. Berhati-hatilah dengan target dan warna.** Pakai garis target ketika target punya dasar nyata, seperti sasaran tingkat layanan, dan tunjukkan sebagai acuan, bukan vonis. Hindari ubin merah, kuning, dan hijau yang berbalik pada satu titik data. Jika Anda memakai warna status, dasarkan pada aturan yang memperhitungkan variasi normal, dan jelaskan aturannya di halaman.

### Jadikan tepercaya dan dapat dirawat

**10. Lampirkan definisi dan catatan data pada setiap ukuran.** Satu klik dari tiap angka sebaiknya menuntun ke definisi, rumus, sumber data, pemilik, waktu penyegaran, dan celah yang diketahui. Catatan singkat “cara membaca ini” layak ruangnya. Pembaca yang melihat batas lebih kecil kemungkinannya menyalahgunakan angka, dan tim yang melihatnya dapat menantangnya (lihat topik 1.4, Tata kelola dan kepemilikan metrik, dan topik 1.5, Sumber data dan instrumentasi).

**11. Otomatisasi data dan miliki tampilan.** Tarik data dari sistem pencatatan sesuai jadwal, dan tunjukkan waktu pembaruan terakhir. Lembar kerja manual dapat memulai percakapan, tetapi rapuh. Namai pemilik untuk tiap dasbor yang bertanggung jawab atas definisi, kesegaran, dan pensiunnya. Tinjau dasbor pada irama tetap bersama audiensnya, dan pangkas.

**12. Rencanakan keluar sejak awal.** Setiap ukuran sebaiknya punya alasan yang dinyatakan untuk ada dan kondisi yang akan membuatnya dipensiunkan, seperti “ketika backlog kesalahan yang diketahui turun di bawah ambang selama tiga bulan” atau “ketika tim tak lagi memakainya dalam tinjauannya.” Memensiunkan ukuran menjaga himpunan tetap kecil dan memberi sinyal bahwa program melayani pekerjaan.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan pertanyaan | Menulis pertanyaan sempit yang sudah dijawab ukuran yang ada; meninggalkan pertanyaan sulit | Sertakan pemangku kepentingan dari luar tim program; tinjau pertanyaan tak terjawab secara eksplisit |
| Kelengkapan definisi | Mengisi bidang dengan boilerplate; definisi yang tak dibaca siapa pun | Ambil sampel definisi untuk kejelasan bersama orang di luar tim; periksa bahwa definisi cocok dengan perhitungan sebenarnya |
| Kesegaran data | Menyegarkan sumber basi dengan data tak berubah; menghitung penyegaran sebagai keberhasilan ketika umpan sumber gagal | Periksa stempel waktu sumber selain waktu penyegaran; bandingkan dengan jumlah catatan dan volume yang diharapkan |
| Keterkaitan keputusan | Mencatat keputusan setelah kejadian untuk mengisi bidang; mengarang tindakan agar tak kosong | Terima “memilih tidak berbuat apa-apa” sebagai keputusan tercatat; ambil sampel tautan untuk diskusi nyata sebelumnya |
| Ukuran tampilan | Menyembunyikan ukuran di tab sekunder; memecah satu tampilan menjadi banyak | Hitung ukuran per audiens di semua tab; tanyakan audiens berapa angka yang benar-benar mereka pakai |
| Tingkat pensiun | Memensiunkan ukuran tak nyaman yang menunjukkan hasil buruk | Tinjau daftar pensiun untuk ukuran dengan tren tak menguntungkan; wajibkan alasan yang dinyatakan |
| Jangkauan audiens (deskriptif) | Membuka halaman untuk menaikkan hitungan; tampilan wajib di rapat | Jaga tetap deskriptif; baca bersama keterkaitan keputusan; jangan laporkan tampilan individu |

Pembacaan yang sehat menunjukkan halaman depan pendek yang dapat dijelaskan audiens, definisi yang cocok dengan perhitungan, data yang tiba tepat waktu, tinjauan yang kadang menuntun pada tindakan dan kadang pada pilihan sadar untuk menunggu, dan daftar ukuran yang dipensiunkan yang mencakup sebagian yang dulu populer.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Satu dasbor perusahaan untuk semua orang | Satu sumber kebenaran; definisi konsisten | Terlalu umum bagi audiens mana pun; tumbuh menjadi dinding |
| Tampilan terpisah per audiens di atas data bersama | Cocok dengan tiap audiens; definisi konsisten | Butuh tata kelola definisi bersama |
| Dasbor buatan tim | Cocok dengan pertanyaan lokal; kepemilikan tinggi | Definisi hanyut; sulit dirangkum |
| Tim pusat membangun semua dasbor | Konsistensi; keterampilan desain | Lambat; mungkin tak cocok dengan pertanyaan tim |
| Tampilan langsung, waktu nyata | Sinyal cepat untuk operasi | Mendorong bereaksi pada derau; mahal |
| Paket tinjauan berkala | Tenang, dibahas dengan konteks | Penundaan; dapat dilewati |
| Target dan warna status | Pemindaian cepat | Mengundang pengelolaan menurut warna; menyembunyikan variasi |
| Hanya tren dan distribusi | Jujur tentang variasi | Lebih sulit dipindai pendatang baru |

Jawaban prosanya adalah berbagi definisi di seluruh organisasi, membiarkan tiap audiens punya tampilan kecilnya sendiri, memakai tampilan langsung hanya di mana respons operasional membutuhkannya, dan memakai tinjauan berkala yang tenang untuk keputusan perbaikan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Keputusan apa yang kita buat kuartal lalu yang diinformasikan angka di layar?**
Daftar. Untuk masing-masing, namai angka dan dari mana asalnya. Perhatikan angka mana di layar kita saat ini yang tak pernah muncul dalam daftar ini. Fasilitator sebaiknya bertanya apakah mereka pantas berada di sana.

**2. Jika kita hanya bisa menunjukkan lima angka kepada tim kita sendiri, apa saja angkanya?**
Minta tiap orang menulis daftar secara pribadi, lalu bandingkan. Bahas perbedaan dan apa yang akan dibantu tiap angka untuk diputuskan. Sepakati himpunan uji coba dan tanggal untuk meninjaunya.

**3. Angka mana di dasbor kita yang paling ingin kita hapus, dan mengapa?**
Dengarkan angka yang menyebabkan pertengkaran, menyesatkan, atau tak pernah dibaca. Periksa apakah masalahnya ukuran atau penyajiannya. Sepakati memensiunkan, mendefinisikan ulang, atau mempertahankan masing-masing.

**4. Bagaimana rekan baru akan membaca dasbor kita tanpa bantuan?**
Minta pendatang baru menjelaskan apa yang mereka lihat. Catat apa yang mereka salah baca dan mengapa. Tambahkan definisi, konteks, atau catatan di tempat mereka tersandung.

**5. Apa yang berubah dalam pekerjaan kita yang tidak ditunjukkan angka?**
Rilis, staf, kebijakan, atau perubahan pelanggan dapat menjelaskan tren. Sepakati cara peristiwa dicatat pada tampilan agar pembaca berikutnya memiliki ceritanya.

**6. Siapa yang melihat data kita selain kita, dan apa yang mereka lakukan dengannya?**
Telusuri jalur angka kita ke audiens lain. Periksa bahwa penafsiran yang mereka tempatkan padanya adalah yang kita setujui. Sepakati apa yang akan kita bagikan dan konteks apa yang menyertainya.

## Empat perspektif

### Tim produk dan pengiriman

Tim mengerjakan pekerjaan dan sebaiknya menjadi audiens pertama untuk data mereka sendiri. Mereka sebaiknya membantu memilih ukuran, memakai tampilan untuk memicu percakapan tinjauan mereka sendiri, dan memberinya catatan peristiwa. Tampilan tim sebaiknya menjawab “bagaimana kita sekarang dan apa yang sebaiknya kita coba?” dan bukan “bagaimana kita dibanding tim sebelah?”

### Tim layanan dan operasi

Pemilik layanan bertanggung jawab atas bagaimana layanan berkinerja dari waktu ke waktu. Tampilan mereka mengumpulkan keandalan, insiden, perubahan, biaya, dan pengalaman untuk satu layanan, dengan tren dan status tindakan perbaikan. Mereka sebaiknya memakainya untuk memutuskan di mana berinvestasi dan menyiapkan percakapan dengan pelanggan dan pemimpin.

### Kepemimpinan dan tata kelola

Pemimpin butuh tampilan singkat hasil dan risiko lintas layanan, dengan konteks cukup untuk menafsirkannya. Mereka sebaiknya meminta tren dan distribusi alih-alih peringkat, menolak meminta ukuran baru tanpa memensiunkan yang lain, dan memakai tampilan untuk mengarahkan pertanyaan pada sistem dan keputusan, bukan individu.

### Pelanggan dan pengguna

Pelanggan dan pengguna melihat informasi layanan lewat halaman status, laporan, dan ukuran pengalaman yang mencerminkan pandangan mereka (lihat topik 6.2, Perjanjian tingkat pengalaman). Pandangan mereka sebaiknya jujur, lugas, dan konsisten dengan apa yang dilihat tim. Mereka sebaiknya dapat memberi tahu organisasi apa yang gagal ditunjukkan angka.

## Dalam praktik: contoh ITIL agile

Sebuah perusahaan perangkat lunak dengan produk yang dihosting dan kelompok dukungan pelanggan telah mengumpulkan tiga dasbor: layar operasi dengan 62 ubin, laporan dukungan yang dikirim lewat surel tiap pekan, dan halaman pengiriman yang dirawat satu analis. Tim pimpinan meminta satu dasbor untuk “melihat segalanya.” Angka di bawah bersifat ilustratif.

Kepala manajemen layanan mengusulkan mulai dengan pertanyaan. Ia mengadakan sesi satu jam dengan masing-masing dari tiga audiens: tim dukungan, tim platform, dan kelompok pimpinan. Tim dukungan bertanya apakah pelanggan menunggu lebih lama daripada dulu untuk balasan pertama yang berguna dan apakah isu yang sama kembali. Tim platform bertanya apakah mereka hampir menghabiskan anggaran kesalahan dan apakah proses perubahan mereka memperlambat atau melindungi mereka. Pimpinan bertanya apakah pelanggan mendapat nilai dan apakah investasi pada portal swalayan baru membuahkan hasil. Bersama mereka mendaftar 14 pertanyaan. Dasbor yang ada dapat menjawab enam di antaranya dengan ukuran yang didefinisikan, jadi cakupan pertanyaan 43 persen.

Kelompok merancang tiga tampilan masing-masing tidak lebih dari tujuh ukuran, di atas definisi bersama. Tampilan dukungan menunjukkan median dan persentil ke-85 waktu ke balasan pertama yang berguna, porsi kontak yang kembali dalam tujuh hari, tren kepuasan dengan ukuran sampelnya, dan penyelesaian swalayan dipasangkan dengan kontak kembali. Tampilan platform menunjukkan ketersediaan terhadap sasaran dengan garis pembakaran anggaran kesalahan, lead time perubahan dengan change failure rate, dan porsi waktu untuk pekerjaan tak terencana. Tampilan pimpinan menunjukkan hasil tingkat layanan, pengalaman pelanggan, biaya per pelanggan aktif, dan status tiga tindakan perbaikan yang didanai. Setiap nilai punya sparkline, tautan ke kartu definisinya, dan bidang catatan untuk peristiwa. Warna muncul hanya pada anggaran kesalahan, berdasarkan aturan yang dijelaskan di halaman.

Tinjauan pertama membawa kejutan. Tim dukungan memperhatikan bahwa median waktu balasannya membaik sementara persentil ke-85 memburuk, karena kontak mudah dijawab cepat dan yang sulit dibiarkan menunggu. Mereka memutuskan melihat aturan triase mereka dan mencatat keputusan. Tim platform melihat bahwa kenaikan lead time perubahan baru-baru ini bertepatan dengan langkah persetujuan baru, dan membawa pertanyaan itu ke kelompok perubahan. Pimpinan memperhatikan pemakaian portal naik sementara kontak kembali datar, dan bertanya kepada tim dukungan apa yang gagal dijawab portal. Dua kuartal kemudian, cakupan pertanyaan 79 persen, semua ukuran yang ditampilkan punya definisi lengkap, dan layar 62 ubin yang lama dipensiunkan. Tiga ukuran dibuang karena tak ada yang memakainya, dan satu ditambahkan. Seorang direktur meminta baris ringkasan hijau-kuning-merah. Kepala manajemen layanan menunjukkan uji coba ketika satu pekan buruk membuat baris itu merah dan menyebabkan serbuan pertanyaan tanpa sebab. Mereka menyepakati catatan tertulis singkat tentang apa yang berubah tiap bulan sebagai gantinya, dan mencatat keputusan.

## Sudut pandang sektor

**Startup.** Jaga sangat kecil: satu halaman dengan mungkin lima angka yang dapat dibaca seluruh perusahaan, mencerminkan kecepatan pengiriman, stabilitas, pengalaman pelanggan, dan biaya. Pakai apa pun yang disediakan perkakas yang ada. Tinjau halaman setiap kali produk atau pelanggan berubah, dan tahan membangun platform data sebelum pertanyaan jelas.

**Bisnis kecil.** Dokumen bersama atau bagan lembar kerja sederhana yang diperbarui bulanan mungkin cukup. Pilih segelintir ukuran yang benar-benar dipakai pemilik dan staf, tuliskan arti masing-masing, dan bahas dalam rapat reguler. Risikonya bukan terlalu sedikit perkakas. Risikonya adalah ukuran yang tak dipercaya atau ditindaklanjuti siapa pun.

**Perusahaan besar.** Skala membutuhkan definisi bersama, katalog ukuran yang diatur, dan tampilan berlapis untuk tim, layanan, portofolio, dan eksekutif. Godaan merangkum segalanya menjadi satu angka kuat dan merugikan. Jaga tampilan tim dimiliki tim, terbitkan definisi umum, dan wajibkan tujuan yang dinyatakan untuk ukuran baru apa pun pada tampilan pimpinan (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

**Pemerintah dan sektor publik.** Kewajiban pelaporan dan akuntabilitas publik sering mendikte ukuran tertentu. Jaga ukuran yang diwajibkan tetap terlihat dan terpisah jelas dari yang dipakai tim untuk memperbaiki, dan jelaskan kepada publik dan badan pengawas apa yang dapat dan tidak dapat ditunjukkan angka. Bahasa lugas dan aksesibilitas penting untuk tampilan apa pun yang dibagikan di luar organisasi (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya program dasbor mencakup waktu mewawancarai audiens, merancang dan membangun, menghubungkan dan membersihkan data, menulis definisi, melatih dan mendukung pengguna, dan merawat tampilan dari waktu ke waktu. Biaya tersembunyi terbesar adalah waktu orang yang membaca angka yang tak membantu dan rapat yang dihabiskan memperdebatkan angka siapa yang benar. Pembangunan murah dan cepat lazim, dan biaya sebenarnya tiba kemudian dalam pemeliharaan dan ketidakpercayaan.

Imbal hasilnya mencakup pengenalan tren lebih cepat, lebih sedikit pertengkaran soal definisi, pekerjaan perbaikan yang lebih tepat sasaran, dan upaya pelaporan yang berkurang ketika satu sumber yang diatur menggantikan beberapa laporan manual. Bangun kasus dari data Anda sendiri: jam yang dihabiskan untuk laporan manual sebelum dan sesudah, jumlah versi saingan dari angka yang sama, dan keputusan yang diinformasikan oleh tampilan. Hindari mengutip angka terbitan tentang nilai analitik tanpa sumber yang dapat ditelusuri dan relevansinya dengan konteks Anda. Klaim yang kredibel itu sederhana: ukuran yang lebih sedikit dan lebih baik, dipercaya dan dipakai (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Dinding ubin.** Setiap angka bersaing merebut perhatian. Pangkas menjadi segelintir per audiens dan taruh rincian satu langkah ke bawah.
- **Pengelolaan menurut warna.** Warna status berbalik pada derau dan mendorong reaksi. Tunjukkan tren dan pakai aturan yang menghormati variasi.
- **Tanpa definisi.** Dua tim membaca label yang sama secara berbeda. Lampirkan definisi dan pemilik pada setiap ukuran.
- **Dasbor sebagai pengawasan.** Tampilan tingkat individu mengikis kepercayaan dan mendistorsi data. Tunjukkan tim, layanan, dan sistem.
- **Satu angka untuk merangkum segalanya.** Menyembunyikan pertukaran yang dimaksudkan untuk diungkapnya. Tunjukkan segelintir yang seimbang.
- **Bangun sekali, tak pernah ditinjau.** Tampilan menjadi basi. Tinjau bersama audiens pada irama dan pensiunkan ukuran.
- **Tampilan vanitas.** Hitungan besar aktivitas tanpa hasil. Pasangkan setiap volume dengan ukuran hasil.
- **Laporan yang tak diminta siapa pun.** Dibangun dari data yang tersedia alih-alih pertanyaan yang diajukan. Mulai dari pertanyaan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Audiens dan pertanyaan | Dibangun dari data yang tersedia | Sebagian tim menanyakan apa yang mereka butuhkan | Audiens dan pertanyaan ditulis; tampilan kecil per audiens | Cakupan pertanyaan dan keterkaitan keputusan ditinjau dan ditindaklanjuti | Audiens ikut merancang tampilan, termasuk pelanggan dan pemasok, dan pertanyaan berevolusi bersama layanan |
| Desain dan konteks | Banyak ubin tanpa riwayat | Sebagian tren dan definisi | Sedikit ukuran per tampilan dengan tren, distribusi, dan definisi pada setiap ukuran | Tampilan sadar variasi; ukuran pendamping untuk setiap ukuran utama | Tampilan beradaptasi dengan tujuan yang berubah; pola bersama dipakai ulang lintas tim |
| Data dan pemeliharaan | Manual, basi, tanpa pemilik | Sebagian otomatisasi; pemilik informal | Umpan otomatis, pemilik bernama, kesegaran ditunjukkan | Kesegaran dan kelengkapan definisi dikelola; pensiun rutin | Kepemilikan terfederasi dengan definisi bersama; pensiun dan perbaikan digerakkan pengguna |

## Daftar periksa

- [ ] Pertanyaan tiap audiens tertulis, dan tiap tampilan dipetakan padanya.
- [ ] Tiap tampilan tidak lebih dari sekitar sembilan ukuran, dengan rincian satu langkah ke bawah.
- [ ] Himpunan seimbang lintas alur, mutu, keandalan, pengalaman, dan biaya.
- [ ] Setiap nilai menunjukkan tren dan konteks, dan ukuran waktu menunjukkan persentil tinggi.
- [ ] Setiap ukuran punya definisi, sumber, pemilik, dan waktu penyegaran dalam satu klik.
- [ ] Target ditunjukkan sebagai acuan, dan warna status mengikuti aturan yang dinyatakan.
- [ ] Tim melihat data mereka sendiri lebih dulu dan memiliki penafsirannya.
- [ ] Tidak ada tampilan yang memeringkat atau melacak individu.
- [ ] Dasbor punya pemilik bernama, irama tinjauan, dan aturan memensiunkan ukuran.
- [ ] Data ditarik secara otomatis, dengan waktu pembaruan terakhir terlihat.

## Prompt AI

**Ubah pertanyaan menjadi tampilan.**

```text
Berikut pertanyaan yang diajukan oleh [audience]: [list]. Untuk masing-masing,
sarankan satu ukuran utama dan satu ukuran pendamping yang menjaga dari distorsi
yang paling mungkin. Kelompokkan menjadi tampilan tidak lebih dari tujuh ukuran,
dan untuk masing-masing nyatakan definisi, jenis bagan yang disarankan, dan
konteks yang dibutuhkan. Jangan mengarang data atau tolok ukur. Daftar asumsi Anda
dan pertanyaan yang tak dapat dijawab tampilan.
```

**Tinjau dasbor untuk kejelasan.**

```text
Berikut uraian dasbor kami, mendaftar tiap ubin, labelnya, dan definisinya:
[paste]. Bertindaklah sebagai rekan baru yang membacanya pertama kali. Daftar
label mana yang ambigu, angka mana yang kurang konteks atau tren, ubin mana yang
mungkin mengundang pengelolaan menurut warna, dan ubin mana yang dapat
dipensiunkan. Jangan menulis ulang datanya. Daftar asumsi Anda.
```

**Susun kartu metrik.**

```text
Susun kartu metrik untuk [measure]. Sertakan definisi lugas, rumus, satuan, sumber
data, pemilik, interval penyegaran, celah yang diketahui, cara yang paling mungkin
ia dimanipulasi, pagar pembatas berpasangan, dan keputusan yang sebaiknya
diinformasikannya. Jaga di bawah 200 kata. Jangan mengarang angka. Tandai apa pun
yang Anda ragukan.
```

**Rencanakan tinjauan dasbor.**

```text
Rencanakan tinjauan kuartalan 45 menit atas dasbor [team] kami bersama audiensnya.
Sertakan cara memeriksa bahwa ukuran dipakai untuk keputusan, cara memutuskan mana
yang dipensiunkan, cara mencatat peristiwa yang menjelaskan tren, dan cara
menghindari memeringkat orang. Daftar pertanyaan yang sebaiknya diajukan
fasilitator dan keluaran yang dicatat.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi tiap ukuran pada tampilan yang diusulkan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa spesifikasi dasbor punya definisi, pemilik, dan vektor manipulasi untuk setiap ukuran.

## Poin penting

- Mulai dari pertanyaan yang diajukan audiens, dan beri tiap audiens tampilan kecilnya sendiri.
- Seimbangkan himpunan, dan pasangkan tiap ukuran utama dengan pendamping yang menjaga dari distorsi.
- Tunjukkan tren, distribusi, dan konteks bersama setiap nilai, dan hormati variasi normal.
- Lampirkan definisi, sumber, pemilik, dan waktu penyegaran pada setiap ukuran.
- Biarkan tim melihat dan memiliki data mereka lebih dulu, dan jangan pernah menunjukkan individu.
- Tinjau dasbor bersama audiensnya, dan pensiunkan ukuran yang berhenti menginformasikan keputusan.

## Referensi dan bacaan lanjutan

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Data visualization](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
