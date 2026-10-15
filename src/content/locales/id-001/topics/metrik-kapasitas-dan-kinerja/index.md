# Metrik kapasitas dan kinerja

**Ukur seberapa penuh suatu layanan, seberapa lambat permintaan terlambatnya, dan berapa banyak ruang tersisa sebelum pengguna memperhatikan, lalu perkirakan permintaan dengan rentang agar kapasitas tiba sebelum kebutuhan, bukan sesudah keluhan.**

## Gambaran umum dan motivasi

Ketersediaan memberi tahu Anda apakah layanan menjawab. Kapasitas dan kinerja memberi tahu seberapa baik ia menjawab, dan berapa lama ia akan terus melakukannya seiring permintaan tumbuh. Halaman checkout yang merespons dalam delapan detik “hidup” menurut kebanyakan definisi ketersediaan dan “rusak” menurut definisi setiap pelanggan. Basis data pada 95 persen penyimpanannya sehat hari ini dan gangguan bulan depan. Topik ini mencakup ukuran yang menutup jurang itu.

[Perencanaan kapasitas](https://en.wikipedia.org/wiki/Capacity_planning) adalah praktik menentukan sumber daya yang dibutuhkan layanan untuk memenuhi permintaan yang berubah. Dalam ITIL 4 ini berada dalam praktik manajemen kapasitas dan kinerja, yang bertujuan memastikan layanan mencapai kinerja yang disepakati dan diharapkan serta memenuhi permintaan saat ini dan mendatang secara hemat biaya. Praktik itu menggambarkannya pada tiga tingkat: bisnis (apa yang akan diminta organisasi dari layanannya), layanan (bagaimana layanan berperilaku di bawah beban), dan komponen (bagaimana tiap server, basis data, tautan jaringan, atau antrean berperilaku). Ukuran dalam topik ini sebagian besar bekerja pada tingkat layanan dan komponen, dan mereka butuh masukan dari tingkat bisnis untuk memperkirakan apa pun.

[Rekayasa keandalan situs (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) memperlakukan latensi, lalu lintas, galat, dan saturasi sebagai empat sinyal yang layak diawasi pada sistem yang menghadap pengguna mana pun, dan mengikat target kinerja ke tujuan tingkat layanan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan). Tim agile bertemu kapasitas sebagai pertanyaan pengiriman: dapatkah rilis berikutnya memikul beban yang diharapkan, dan siapa yang memiliki jawabannya? Memperlakukan kinerja sebagai kriteria penerimaan, diperiksa di pipeline, memindahkan percakapan lebih awal.

Beberapa istilah berulang dalam topik ini. **Utilisasi** adalah porsi kapasitas sumber daya yang dipakai selama suatu interval, misalnya porsi waktu prosesor yang sibuk. **Saturasi** adalah jumlah pekerjaan yang menunggu karena sumber daya terpakai penuh, misalnya panjang antrean jalan atau backlog permintaan. Utilisasi menyatakan seberapa sibuk sumber daya. Saturasi menyatakan apakah pekerjaan mengantre untuknya, dan antrean adalah yang dirasakan pengguna. **[Latensi](https://en.wikipedia.org/wiki/Latency_(engineering))** adalah waktu antara permintaan dan responsnya. **[Throughput](https://en.wikipedia.org/wiki/Throughput)** adalah laju layanan menyelesaikan pekerjaan, misalnya permintaan per detik. **Ruang kosong (headroom)** adalah jarak antara beban puncak saat ini dan beban tempat layanan berhenti memenuhi tujuannya. **Permintaan** adalah pekerjaan yang diminta pengguna dan bisnis dari layanan, yang tidak sama dengan pekerjaan yang diselesaikannya: layanan yang kelebihan beban menyelesaikan lebih sedikit daripada yang diminta.

Satu sifat antrean menjelaskan mengapa ukuran ini berperilaku seperti itu. [Teori antrean](https://en.wikipedia.org/wiki/Queueing_theory) menunjukkan bahwa, untuk layanan dengan kedatangan acak, waktu tunggu tumbuh pelan selama utilisasi sedang lalu naik tajam saat utilisasi mendekati pemakaian penuh. [Hukum Little](https://en.wikipedia.org/wiki/Little%27s_law) mengaitkan rata-rata jumlah permintaan dalam sistem dengan laju kedatangan dan rata-rata waktu yang dihabiskan masing-masing di sana. Sumber daya pada utilisasi rata-rata tinggi dekat dengan tebing. Bentuk persis kurva bergantung pada layanan, jadi temukan dengan menguji sistem Anda sendiri lewat [uji beban](https://en.wikipedia.org/wiki/Load_testing) alih-alih meminjam ambang dari artikel umum.

Latensi butuh kehati-hatian khusus karena rata-rata menyembunyikan pengalaman yang penting. [Persentil](https://en.wikipedia.org/wiki/Percentile) menyatakan nilai di bawahnya jatuh porsi pengamatan tertentu: persentil ke-95 (p95) adalah latensi yang dikalahkan 95 persen permintaan. [Latensi ekor](https://en.wikipedia.org/wiki/Tail_latency) cenderung mendominasi dalam sistem tempat satu tindakan pengguna bercabang menjadi banyak panggilan internal. Laporkan persentil alih-alih rata-rata saja (lihat topik 1.6, Literasi statistik untuk metrik layanan, dan topik 3.3, Waktu respons dan penyelesaian insiden, yang mengajukan argumen sama untuk waktu penyelesaian).

Akhirnya, kapasitas bergantung pada [memperkirakan](https://en.wikipedia.org/wiki/Forecasting) permintaan, dan permintaan punya pola: siklus harian, siklus mingguan, dan [musiman](https://en.wikipedia.org/wiki/Seasonality) yang terkait dengan kalender, kampanye, dan peluncuran produk. [Penskalaan otomatis](https://en.wikipedia.org/wiki/Autoscaling) mengubah bagaimana ini terasa, karena platform cloud dapat menambah sumber daya dalam hitungan menit, tetapi tidak menghilangkan topik. Penskalaan otomatis punya batas, jeda, biaya, dan dependensi yang tidak berskala, seperti basis data atau antarmuka pihak ketiga. Sisi biaya milik FinOps (lihat topik 7.6, Metrik FinOps dan biaya cloud).

Topik tetangga mencakup aritmetika ketersediaan (lihat topik 5.3, Metrik ketersediaan), desain peringatan (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan), dan beban rotasi (lihat topik 5.7, Metrik pekerjaan berulang dan siaga). Di sini pokok bahasannya adalah sumber daya layanan sendiri dan waktu responsnya.

## Prinsip utama

- **Ukur saturasi selain utilisasi.** Utilisasi menunjukkan seberapa sibuk sumber daya, dan saturasi menunjukkan apakah pekerjaan menunggu. Pengguna mengalami penantian.
- **Laporkan latensi sebagai distribusi.** Pakai persentil per operasi yang menghadap pengguna, dan jaga ekor lambat terlihat. Rata-rata distribusi miring menggambarkan hampir tak seorang pun.
- **Kaitkan target dengan pengalaman pengguna.** Ambang bermakna ketika dapat ditelusuri ke sesuatu yang dipedulikan pengguna atau bisnis, bukan ke apa yang kebetulan digambarkan alat.
- **Rencanakan dengan rentang dan tinjau.** Perkiraan adalah rentang dengan asumsi yang dinyatakan. Bandingkan dengan yang terjadi dan belajar dari galatnya.
- **Ketahui batas Anda dengan menguji.** Kapasitas adalah hipotesis sampai uji beban realistis mengonfirmasi. Ulangi uji setelah perubahan yang penting.
- **Gambarkan sistem, tidak pernah orang.** Ukuran ini milik layanan, komponen, dan tim. Mereka tidak pernah kartu skor untuk individu.
- **Timbang biaya terhadap risiko.** Kapasitas cadangan berbiaya uang, dan kapasitas yang hilang berbiaya pelanggan. Buat pertukaran terlihat agar dipilih, bukan hanyut ke dalamnya.

## Definisi metrik

Tabel mendaftar tujuh ukuran. Jam dan batas dinyatakan dalam tiap rumus. Ukuran berbasis persentil memakai jendela tetap, dinyatakan di register, dan dihitung dari pengamatan mentah atau histogram, tidak pernah sebagai rata-rata dari rata-rata.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Utilisasi sumber daya | Porsi kapasitas sumber daya yang dipakai selama suatu interval, dilaporkan sebagai persentil tinggi deret interval | kapasitas sibuk / total kapasitas, per interval 1 sampai 5 menit; laporkan median dan persentil ke-95 selama jendela tinjauan; jendela pemeliharaan dengan sumber daya dikosongkan dikecualikan | persen | Pemantauan infrastruktur dan metrik platform cloud | Manajemen kapasitas dan kinerja; manajemen pemantauan dan peristiwa | Kriteria penerimaan operasional dalam definisi selesai; sinyal sumber daya SRE | Mingguan |
| Saturasi | Jumlah pekerjaan yang menunggu sumber daya yang terpakai penuh | panjang antrean, antrean jalan, permintaan tertunda, atau permintaan yang dibatasi, per interval; laporkan persentil ke-95 dan porsi interval dengan penantian apa pun; interval tanpa permintaan dikecualikan | hitungan, atau persen interval | Telemetri aplikasi dan infrastruktur | Manajemen kapasitas dan kinerja; manajemen pemantauan dan peristiwa | Sinyal saturasi SRE; batas pekerjaan dalam proses pada antrean layanan | Mingguan |
| Persentil latensi | Waktu yang dibutuhkan untuk menjawab permintaan satu operasi yang menghadap pengguna, dilaporkan pada median, p95, dan p99 | waktu respons dari permintaan diterima di tepi sampai byte terakhir dikirim, per permintaan sukses; permintaan gagal dilaporkan sebagai galat, bukan sebagai respons cepat; ukur pada jendela bergulir | milidetik | Log load balancer atau gateway, penelusuran, pemantauan pengguna nyata | Manajemen tingkat layanan; manajemen kapasitas dan kinerja | Indikator latensi dan tujuan tingkat layanan SRE | Berkelanjutan, ditinjau mingguan |
| Ruang kosong | Beban tersisa yang dapat dipikul layanan sebelum melanggar tujuannya | (beban pemecah yang diuji atau dimodelkan - beban puncak saat ini) / beban puncak saat ini; puncak adalah jam tersibuk dalam jendela; beban pemecah adalah beban tempat tujuan latensi pertama kali dilanggar dalam uji, bukan maksimum perangkat keras | persen, atau hari pada pertumbuhan saat ini | Hasil uji beban dan telemetri lalu lintas | Manajemen kapasitas dan kinerja; manajemen tingkat layanan | Persyaratan nonfungsional dan uji kinerja di pipeline | Bulanan, dan sebelum peluncuran besar |
| Galat perkiraan | Selisih antara permintaan yang diperkirakan dan permintaan sebenarnya untuk suatu periode | absolut (puncak perkiraan - puncak sebenarnya) / puncak sebenarnya, untuk cakrawala yang dinyatakan; perkiraan dibekukan pada awal cakrawala dan tidak direvisi sesudahnya; peristiwa sekali jalan yang tak diperkirakan didaftar, tidak dihapus | persen | Register perkiraan dan telemetri lalu lintas | Manajemen kapasitas dan kinerja; perencanaan terkait permintaan dalam manajemen keuangan layanan | Perkiraan rilis dan peta jalan; perkiraan permintaan SRE | Kuartalan |
| Lead time kapasitas | Waktu yang dibutuhkan untuk membawa kapasitas baru ke layanan setelah kebutuhan diterima | jam dimulai saat permintaan kapasitas disetujui, dan berhenti saat kapasitas memikul lalu lintas produksi; laporkan median dan persentil ke-85; permintaan yang dibatalkan dikecualikan | hari | Catatan permintaan di alat ITSM, catatan perubahan, log provisioning | Manajemen kapasitas dan kinerja; manajemen permintaan layanan; pemberdayaan perubahan | Lead time untuk item backlog platform (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur) | Kuartalan |
| Cakupan uji kinerja | Porsi layanan kritis dengan uji beban terbaru dan realistis | layanan kritis dengan uji beban lulus yang lebih muda dari usia yang dinyatakan, pada lingkungan dan beban kerja yang representatif / layanan kritis dalam register; batas usia dituliskan | persen | Penyimpanan hasil uji dan register layanan | Manajemen kapasitas dan kinerja; manajemen rilis | Uji nonfungsional dalam pipeline continuous delivery | Kuartalan |

Bersama-sama ini menjawab empat pertanyaan: seberapa penuh, seberapa lambat, berapa banyak ruang tersisa, dan seberapa cepat kita dapat merespons ketika jawabannya berubah.

## Rekomendasi

### Mulai dari pengguna, lalu sumber daya

**1. Pilih sedikit operasi yang dipedulikan pengguna, dan ukur itu.** Layanan punya ratusan titik akhir dan segelintir perjalanan yang penting, seperti masuk, mencari, membayar, dan mengunduh laporan. Sepakati ini dengan pemilik produk dan pelanggan, dan tetapkan ekspektasi latensi untuk masing-masing. Ini terkait secara alami dengan indikator tingkat layanan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan).

**2. Pasangkan setiap bagan sumber daya dengan bagan saturasi.** Menampilkan pemakaian prosesor saja mengundang kenyamanan palsu “hanya mencapai 70 persen.” Tambahkan antrean, permintaan menunggu, atau hitungan pembatasan di sampingnya. Ketika saturasi muncul sebelum utilisasi tampak mengkhawatirkan, Anda telah menemukan kendala sebenarnya, dan kendala itu sering bukan sumber daya yang Anda awasi, seperti kolam koneksi, batas thread, atau batas laju pada antarmuka mitra.

**3. Utamakan ekor sibuk daripada rata-rata sepi.** Rata-rata sehari mencampur tengah malam sunyi dengan puncak makan siang. Lihat periode tersibuk dan catat tanggal serta sebab interval terburuk. Pertanyaan perencanaannya adalah bagaimana layanan berperilaku pada jam terburuk yang diharapkan.

### Laporkan latensi dengan jujur

**4. Terbitkan persentil per operasi, dan namai jendela.** Nyatakan median, p95, dan p99 untuk setiap operasi penting pada jendela bergulir, dan katakan permintaan mana yang disertakan. Jangan pernah merata-ratakan persentil lintas server atau lintas operasi, karena hasilnya tidak sesuai dengan pengalaman pengguna nyata mana pun; gabungkan histogram atau pengamatan mentah sebagai gantinya. Jika sampel kecil, katakan demikian, karena p99 dari beberapa ratus permintaan adalah angka yang bising (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**5. Ukur di tempat pengguna berada, selain di tempat server berada.** Pewaktuan sisi server meninggalkan jaringan, browser, dan perangkat. Tambahkan pemantauan pengguna nyata atau pemeriksaan sintetis agar Anda dapat membedakan back end lambat dari mil terakhir yang lambat.

**6. Hitung galat dan timeout bersama latensi, bukan sebagai gantinya.** Layanan yang gagal cepat tampak cepat pada bagan latensi, dan layanan yang timeout tampak lambat karena alasan yang salah. Laporkan tingkat galat bersama persentil latensi agar kegagalan cepat tidak dapat menyanjung hasil.

### Temukan batas, lalu sisakan ruang

**7. Uji titik pemecah dengan sengaja.** Jalankan uji beban yang memutar ulang campuran operasi yang realistis, naikkan beban secara bertahap, dan catat di mana tujuan latensi pertama kali dilanggar dan sumber daya mana yang jenuh lebih dulu. Uji pada lingkungan yang menyerupai produksi dalam hal yang penting, dan tuliskan hal yang tidak. Uji gagal di tempat aman adalah insiden termurah yang akan Anda miliki (lihat topik 4.5, Metrik rilis dan deployment, untuk menaruh pemeriksaan di pipeline).

**8. Tetapkan ruang kosong sebagai kebijakan dan tinjau sebagai pertukaran.** Putuskan berapa margin yang dijaga layanan di atas puncak yang diharapkan, dan mengapa. Layanan kritis yang menghadap pelanggan membenarkan lebih banyak, layanan batch internal lebih sedikit. Angka itu pilihan bisnis tentang biaya dan risiko, jadi catat penalarannya dan tinjau kembali ketika biaya gangguan atau harga kapasitas berubah. Jangan menyalin angka dari organisasi lain.

### Perkirakan permintaan bersama orang yang mengetahuinya

**9. Tanyakan bisnis apa yang akan datang, dan tuliskan perkiraannya.** Kampanye pemasaran, pelanggan baru, tenggat regulasi, dan peristiwa musiman mengubah permintaan jauh sebelum lalu lintas menunjukkannya. Simpan register perkiraan pendek dengan tanggal, asumsi, rentang, pemilik, dan sumber tiap masukan. Perkiraan yang diberikan sebagai rentang, seperti kasus rendah, diharapkan, dan tinggi, lebih jujur daripada satu angka dan lebih berguna untuk memutuskan berapa banyak yang dibeli.

**10. Nilai perkiraan dan pakai galatnya untuk memperbaikinya.** Setelah tiap periode, bandingkan perkiraan yang dibekukan dengan yang terjadi, memakai galat perkiraan, dan daftar sebab kesalahan besar. Sebab umum adalah kampanye yang tak diumumkan, perubahan perilaku pengguna, dan dependensi yang bergeser. Tujuannya bukan galat nol, yang tak tercapai, tetapi mengetahui masukan mana yang andal, dan melebarkan rentang di mana tidak.

### Buat kapasitas mudah ditambah

**11. Persingkat lead time kapasitas sebelum mengejar akurasi.** Jika kapasitas baru butuh berpekan-pekan untuk tiba, Anda harus memperkirakan jauh ke depan dan membawa lebih banyak cadangan. Jika butuh beberapa menit, Anda dapat berjalan lebih dekat dengan kebutuhan. Lihat langkah antara “disetujui” dan “memikul lalu lintas,” seperti pengadaan, persetujuan, provisioning, konfigurasi, dan pengujian, dan singkirkan penantian terpanjang lebih dulu (lihat topik 4.3, Metrik pemberdayaan perubahan). Dalam istilah ITIL ini adalah pilihan strategi kapasitas, mendahului permintaan, mencocokkannya, atau tertinggal darinya; pilih dengan sadar, per layanan.

**12. Perlakukan penskalaan otomatis sebagai sistem untuk diukur.** Catat seberapa sering penskalaan terpicu, berapa lama kapasitas baru menjadi berguna, seberapa sering mencapai maksimum yang dikonfigurasi, dan berapa biayanya. Penskala otomatis yang tertahan pada batasnya adalah rencana kapasitas yang sudah gagal. Tinjau ini bersama tampilan biaya agar kinerja dan belanja dibahas bersama (lihat topik 7.5, Biaya layanan dan ekonomi per unit).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Utilisasi sumber daya | Merata-ratakan pada interval panjang untuk menyembunyikan puncak; menghitung kapasitas cadangan menganggur sebagai “terpakai”; melaporkan hanya sumber daya paling sepi | Persentil ke-95 jam puncak di samping rata-rata; ukuran saturasi; daftar sumber daya dalam lingkup ditinjau terhadap peta layanan |
| Saturasi | Menaikkan batas antrean agar tak ada yang dilaporkan ditolak atau dibatasi; memindahkan penantian ke antrean lain yang tak diukur | Persentil latensi dan tingkat galat untuk operasi yang sama; waktu antrean ujung ke ujung, bukan satu tahap; tinjauan semua antrean di jalur |
| Persentil latensi | Melaporkan hanya rata-rata atau median; membuang permintaan lambat atau gagal dari sampel; mengukur dari lokasi internal yang cepat; mengecualikan “pencilan” | p95 dan p99 selalu ditampilkan; tingkat galat dan timeout ditampilkan di samping latensi; pemantauan pengguna nyata dibandingkan dengan pewaktuan sisi server; ukuran sampel mentah ditampilkan |
| Ruang kosong | Memilih beban kerja uji yang lembut; menguji lingkungan yang lebih besar dari produksi; mendefinisikan titik pemecah sebagai maksimum perangkat keras | Beban kerja uji ditinjau terhadap bentuk lalu lintas produksi; daftar tertulis perbedaan antara uji dan produksi; ruang kosong diuji ulang setelah perubahan relevan |
| Galat perkiraan | Merevisi perkiraan setelah kejadian; menetapkan rentang sangat lebar sehingga setiap hasil “dalam rentang”; membuang bulan dengan kejutan sebagai “peristiwa tak diperkirakan” | Perkiraan dibekukan dan bertanggal di register; lebar rentang dilaporkan bersama galat; setiap peristiwa yang dikecualikan didaftar dan ditinjau |
| Lead time kapasitas | Memulai jam lebih lambat dengan menunda catatan persetujuan; menutup permintaan ketika pesanan dibuat alih-alih ketika kapasitas memikul lalu lintas; memecah permintaan | Jam didefinisikan dari persetujuan sampai memikul lalu lintas; sampel permintaan tertutup dibandingkan dengan log provisioning; hitungan permintaan yang dibuka ulang |
| Cakupan uji kinerja | Menjalankan uji remeh untuk mengklaim cakupan; menyusutkan daftar layanan kritis; mempertahankan uji lulus lama dalam pembukuan | Usia uji dan realisme beban kerja dicatat; daftar layanan kritis ditinjau terhadap katalog layanan dan riwayat insiden; uji gagal dilaporkan selain yang lulus |

Pembacaan yang sehat menunjukkan utilisasi dengan siklus harian yang terlihat dan ruang kosong, saturasi yang jarang muncul dan singkat, persentil latensi yang stabil atau membaik pada jam tersibuk, dan galat perkiraan yang diketahui dan perlahan menyusut. Tanda sehatnya adalah kejutan dibahas bersama sebabnya. Angka sempurna sebaiknya menimbulkan kecurigaan, karena biasanya berarti pengukurannya lembut.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Berjalan dengan ruang kosong yang murah hati | Menyerap kejutan; melindungi latensi dan ketersediaan | Biaya lebih tinggi; menyembunyikan ketidakefisienan dan perkiraan yang lemah |
| Berjalan ramping dengan penskalaan otomatis cepat | Biaya lebih rendah; kapasitas mengikuti permintaan | Bergantung pada kecepatan dan batas penskalaan; dependensi mungkin tidak berskala; lebih sulit dinalar dalam insiden |
| Target latensi persentil | Mencerminkan rasanya permintaan lambat; tahan trik perata-rataan | Butuh lebih banyak data dan sampel lebih besar; bising pada persentil tinggi untuk layanan berlalu lintas rendah |
| Hanya rata-rata atau median latensi | Sederhana dan stabil | Menyembunyikan ekor yang menggerakkan keluhan dan pelanggan pergi |
| Uji beban sintetis | Terkendali, dapat diulang, aman | Hanya serealistis model beban kerja dan lingkungan |
| Telemetri produksi sebagai dasar | Mencerminkan perilaku nyata dan campuran nyata | Mengungkap batas hanya setelah tercapai; tak dapat memeriksa di luar permintaan saat ini |
| Model perkiraan terperinci | Menangkap musiman dan pertumbuhan | Butuh data dan keterampilan; rasa presisi palsu bila masukan lemah |
| Rentang sederhana yang disepakati dengan bisnis | Mudah dijelaskan dan diperbarui; berfokus pada asumsi | Lebih kasar; bergantung pada masukan jujur dari bisnis |

Pilih metode teringan yang mendukung keputusan. Untuk kebanyakan layanan, tinjauan mingguan utilisasi jam puncak, saturasi, dan persentil latensi, uji beban sebelum perubahan besar, dan tinjauan perkiraan kuartalan sudah cukup. Tambahkan pemodelan di mana biaya salah besar.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Tiga perjalanan pengguna mana yang paling penting, dan berapa waktu respons yang diharapkan pengguna untuk masing-masing?**
Minta kelompok menamai perjalanan, lalu bandingkan dengan apa yang digambarkan dasbor. Fasilitator sebaiknya mendesak ekspektasi yang dapat ditelusuri ke pengguna atau pelanggan, bukan preferensi rekayasa.

**2. Di mana layanan kita dekat dengan tebing, dan bagaimana kita tahu?**
Cari sumber daya seperti kolam koneksi, batas thread, atau batas laju mitra. Tanyakan kapan masing-masing terakhir diuji sampai titik pemecahnya. Jika tak ada yang tahu, itu pekerjaan pertama.

**3. Bagaimana kita melaporkan latensi hari ini, dan apa yang akan dikatakan satu persen pengguna terlambat?**
Tampilkan rata-rata, median, p95, dan p99 untuk satu operasi berdampingan dan bahas jurangnya. Tanyakan permintaan mana yang dikecualikan dan mengapa, dan apakah permintaan gagal dihitung.

**4. Berapa banyak ruang kosong yang kita jaga, siapa yang memilihnya, dan kapan terakhir kita meninjau pilihan itu?**
Bahas biaya margin dan biaya gangguan pada hari tersibuk. Sepakati tanggal tinjauan dan bukti yang akan mengubah margin.

**5. Seberapa baik tiga perkiraan permintaan terakhir kita, dan apa yang kita pelajari?**
Bandingkan perkiraan bertanggal dengan yang sebenarnya dan sebab kesalahan besar. Tanyakan apa yang diketahui bisnis yang tidak diterima operasi. Putuskan satu masukan untuk ditambahkan ke register perkiraan, seperti kalender pemasaran atau jadwal peluncuran.

**6. Jika kita butuh kapasitas dua kali lipat bulan depan, apa yang akan menghalangi kita?**
Daftar setiap langkah dari permintaan sampai lalu lintas produksi dan tandai di mana menunggu. Sertakan pengadaan, persetujuan, lisensi, dan dependensi yang tidak berskala. Fasilitator sebaiknya mencari penantian terpanjang yang bukan teknis, karena sering persetujuan atau kontrak. Sepakati satu langkah untuk dipersingkat dan ukur efeknya lewat lead time kapasitas.

## Empat perspektif

### Tim produk dan pengiriman

Sertakan ekspektasi kinerja dalam kriteria penerimaan fitur yang menyentuh jalur sibuk, jalankan uji beban di pipeline di mana praktis, dan beri tahu operasi tentang peluncuran lebih awal. Waspadai kebiasaan memperlakukan kinerja sebagai tugas “penguatan” belakangan, yang berubah menjadi pekerjaan tak terencana (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).

### Tim layanan dan operasi

Tim operasi memiliki telemetri, rencana kapasitas, dan respons ketika batas tercapai. Mereka butuh saturasi dan latensi ekor pada dasbor yang benar-benar mereka pakai, register perkiraan yang dibagikan dengan bisnis, dan hasil uji yang dipercaya. Mereka sebaiknya mencatat setiap insiden terkait kapasitas beserta sebabnya (lihat topik 4.1, Metrik manajemen masalah, dan topik 3.4, Metrik insiden besar).

### Kepemimpinan dan tata kelola

Pemimpin memutuskan berapa banyak risiko dan biaya yang diterima organisasi, dan kebijakan ruang kosong adalah tempat keputusan itu muncul. Minta persentil latensi dan ruang kosong per layanan kritis, dengan galat perkiraan di sampingnya, dan perlakukan permintaan kapasitas sebagai keputusan investasi yang membawa bukti. Badan tata kelola sebaiknya menolak satu target utilisasi di seluruh organisasi, yang mendorong setiap layanan ke titik yang sama di tebing.

### Pelanggan dan pengguna

Pelanggan merasakan kelambatan sebagai ketidakandalan, jauh sebelum angka ketersediaan apa pun berubah. Nyatakan kinerja dalam istilah persentil pada beban yang dinyatakan, dan bagikan bagaimana layanan menangani periode puncak (lihat topik 5.1, Metrik SLA, OLA, dan XLA, dan topik 6.2, Perjanjian tingkat pengalaman).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan etalase, layanan pembayaran, dan layanan pesanan, masing-masing dimiliki tim produk, dengan tim platform menyediakan infrastruktur bersama. Semua angka dalam contoh ini bersifat ilustratif.

Tinjauan mingguan tim platform menunjukkan pencarian etalase dengan median latensi 180 milidetik dan p95 420 milidetik, keduanya dalam tujuan, dan pemakaian prosesor pada persentil ke-95 jam puncak sebesar 58 persen. Tiga pekan sebelum obral terencana, seorang pemimpin dukungan melaporkan bahwa pelanggan mengatakan situs “merayap” selama kampanye malam. Dasbor hijau.

Tim melihat p99 untuk pencarian pada jam tersibuk obral sebelumnya dan mendapati 3,1 detik, terhadap tujuan p99 1,5 detik. Saturasi menceritakan sisanya: kolam koneksi ke basis data produk menunjukkan permintaan menunggu pada 14 persen interval satu menit selama puncak, sementara pemakaian prosesor tak pernah melebihi 60 persen. Kendalanya tak pernah prosesor. Itu adalah batas kolam yang ditetapkan ketika lalu lintas sepertiga dari hari ini.

Pemilik produk dan pemimpin platform menjalankan uji beban pada 1,5 kali puncak tahun lalu, memakai campuran operasi produksi. Uji menunjukkan tujuan p99 dilanggar pada 1,15 kali puncak tahun lalu, sehingga ruang kosong 15 persen terhadap kebijakan 40 persen untuk layanan yang menghadap pelanggan. Kalender pemasaran menyarankan permintaan 1,6 kali puncak tahun lalu pada hari pembukaan. Perkiraan lama, yang dibekukan di register, menaruh rentang pada 1,2 sampai 1,4, dan galat terhadap obral tahun lalu adalah 22 persen, sebagian besar dari kampanye email yang tak diumumkan.

Keputusan, dicatat dalam log keputusan, punya empat bagian. Pertama, naikkan batas kolam dan tambahkan replika baca, lalu uji ulang. Kedua, tambahkan daftar periksa kesiapan obral ke proses rilis agar kampanye mencapai register perkiraan setidaknya enam pekan sebelumnya. Ketiga, tambahkan p99 dan saturasi kolam ke tinjauan mingguan. Keempat, sepakati dengan keuangan biaya kapasitas tambahan untuk jendela obral, memakai penskalaan terjadwal alih-alih cadangan sepanjang tahun.

Setelah perubahan, uji kedua menunjukkan tujuan p99 bertahan sampai 1,8 kali puncak tahun lalu. Risiko manipulasi muncul selama tinjauan. Seorang kontraktor mengusulkan “kemenangan cepat” berupa mengecualikan permintaan yang lebih lambat dari 5 detik dari laporan latensi, dengan alasan itu pencilan. Tim menolak: permintaan yang dikecualikan persis adalah pelanggan yang mengeluh. Pagar pembatasnya adalah menjaga tingkat galat dan timeout di samping setiap persentil latensi dan mencatat ukuran sampel. Selama obral p99 memuncak pada 1,2 detik, saturasi kolam tetap di bawah 1 persen interval, dan galat perkiraan adalah 9 persen, dicatat di register dengan alasan sisa kesalahan.

## Sudut pandang sektor

**Startup.** Lalu lintas kecil dan pertumbuhan tak pasti, jadi ukuran murah mengalahkan yang rumit. Lacak persentil latensi untuk dua atau tiga perjalanan yang menghasilkan uang, awasi saturasi pada basis data, dan jalankan uji beban sederhana sebelum peluncuran. Pasang peringatan belanja agar bug atau lonjakan lalu lintas tidak menjadi tagihan.

**Bisnis kecil.** Layanan sering dihosting atau dibeli, jadi kapasitas adalah urusan pemasok. Minta laporan kinerja dan kapasitas tertulis kepada pemasok, pelajari apa kata kontrak tentang periode puncak, dan awasi pandangan pelanggan dengan beberapa pemeriksaan sintetis. Lacak ruang kosong pada satu sistem yang tak dapat ditinggalkan bisnis.

**Perusahaan besar.** Banyak layanan berbagi infrastruktur, jadi masalah kapasitas muncul di tempat yang salah. Investasikan pada peta layanan yang menautkan layanan ke komponen yang dipakainya, proses perkiraan bersama dengan unit bisnis, dan definisi umum persentil latensi antartim. Tetapkan kebijakan ruang kosong menurut kekritisan layanan.

**Pemerintah dan sektor publik.** Permintaan dibentuk oleh tenggat yang ditetapkan undang-undang, seperti tanggal pelaporan pajak, klaim tunjangan, dan pemilu, dan kegagalan pada tanggal itu bersifat publik. Perkiraan sebaiknya memakai kalender undang-undang, dan kapasitas untuk puncak mungkin perlu dikontrak berbulan-bulan sebelumnya. Lead time pengadaan memperpanjang lead time kapasitas, jadi ukur dan rencanakan di sekitarnya. Laporan publik tentang kinerja layanan sebaiknya menyatakan persentil dan kondisi beban (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya punya empat bagian. Yang pertama instrumentasi: telemetri dan penyimpanannya. Yang kedua pengujian: lingkungan representatif dan model beban kerja yang perlu dirawat. Yang ketiga rutinitas perencanaan: menjaga register perkiraan dan meninjau galat tiap kuartal. Yang keempat kapasitas cadangan itu sendiri, yang sering biaya terbesar dan yang paling layak dibuat eksplisit.

Imbal hasil datang dari lebih sedikit insiden terkait kapasitas, keputusan lebih baik tentang kapan membeli dan kapan tidak, dan belanja yang dihindari pada kapasitas yang ditunjukkan data tak perlu. Jangan menjanjikan persentase penghematan di muka. Sebagai gantinya, ukur pola Anda sendiri: jumlah insiden dengan sebab kapasitas per kuartal, porsi puncak yang membutuhkan tindakan darurat, belanja pada kapasitas menganggur relatif terhadap kebijakan ruang kosong yang disepakati, dan tren galat perkiraan. Buku Google SRE memperlakukan keandalan sebagai keputusan ekonomi.

Total biaya kepemilikan didominasi orang dan lingkungan uji. Tim kecil dapat memulai dengan pemantauan yang ada, tinjauan mingguan, dan satu uji beban untuk perjalanan terpenting.

## Anti-pola dan jebakan

- **Melaporkan rata-rata utilisasi sebagai kisah kapasitas.** Rata-rata menyembunyikan puncak dan tebing. Laporkan persentil tinggi jam puncak dan ukuran saturasi.
- **Rata-rata latensi pada dasbor eksekutif.** Ekor menggerakkan keluhan. Tampilkan p95 dan p99, dengan tingkat galat dan ukuran sampel.
- **Mengecualikan “pencilan” dari latensi.** Permintaan paling lambat adalah pengguna nyata. Pertahankan, dan selidiki sebabnya alih-alih memangkas data.
- **Merata-ratakan persentil lintas server.** Hasilnya menggambarkan tak seorang pun. Gabungkan histogram atau pengamatan mentah sebelum menghitung persentil.
- **Rencana kapasitas yang dibangun hanya dari lalu lintas tahun lalu.** Permintaan bergantung pada peristiwa bisnis. Sertakan kalender bisnis dan tinjau galat perkiraan.
- **Menguji di lingkungan yang tak seperti produksi.** Hasil lulus memberi keyakinan palsu. Catat perbedaannya dan koreksi, atau uji di produksi dengan aman.
- **Memakai metrik kapasitas untuk memeringkat insinyur atau tim.** Utilisasi dan latensi menggambarkan sistem. Tinjau dalam istilah desain layanan dan permintaan, dan jauhkan individu dari gambar.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Pengukuran utilisasi, saturasi, dan latensi | Rata-rata dari beberapa server; peringatan pada pemakaian prosesor tinggi | Beberapa tim menggambarkan persentil latensi dan antrean | Definisi bersama: persentil per operasi kunci, saturasi di samping utilisasi, jendela tertulis | Diplot tren terhadap tujuan, dipasangkan dengan tingkat galat, ditinjau mingguan | Definisi direvisi bersama pemasok dan pelanggan; pandangan sisi pengguna dan sisi server direkonsiliasi |
| Batas dan ruang kosong | Batas tak diketahui sampai kegagalan | Uji beban sesekali sebelum peluncuran besar | Uji beban pada layanan kritis terhadap kebijakan ruang kosong tertulis | Ruang kosong dilacak per layanan dan diuji ulang setelah perubahan relevan | Kebijakan ruang kosong disesuaikan dari data biaya, risiko, dan insiden antartim dan pemasok |
| Perkiraan | Tebakan ad hoc pada saat permintaan | Tim individual menyimpan perkiraan di kepala atau lembar kerja | Register perkiraan bersama dengan rentang dan pemilik, disuapi kalender bisnis | Galat perkiraan dinilai dan ditinjau, dengan sebab kesalahan | Perkiraan dibangun bersama bisnis dan pemasok; masukan diperbaiki secara rutin |
| Pengiriman kapasitas | Kapasitas ditambah setelah insiden | Permintaan standar untuk kasus umum | Jalur terdokumentasi dari persetujuan ke lalu lintas produksi, dengan lead time kapasitas diukur | Penantian terpanjang dibidik dengan perbaikan yang didanai | Kapasitas ditambah otomatis dalam kebijakan; perilaku penskalaan dan biaya ditinjau bersama |

## Daftar periksa

- [ ] Perjalanan pengguna kritis dinamai, masing-masing dengan ekspektasi latensi yang disepakati dengan pemiliknya.
- [ ] Latensi dilaporkan sebagai median, p95, dan p99 per operasi, dengan jendela dan ukuran sampel dinyatakan.
- [ ] Persentil dihitung dari histogram atau pengamatan mentah, tidak pernah dirata-ratakan lintas server.
- [ ] Setiap bagan utilisasi punya bagan saturasi di sampingnya.
- [ ] Tingkat galat dan timeout ditampilkan di samping setiap persentil latensi.
- [ ] Setiap layanan kritis punya uji beban, dengan perbedaan beban kerja dan lingkungan tertulis.
- [ ] Kebijakan ruang kosong ada per kekritisan layanan, dengan penalaran dicatat.
- [ ] Register perkiraan bertanggal berisi rentang, asumsi, dan pemilik, dan disuapi kalender bisnis.
- [ ] Galat perkiraan ditinjau tiap kuartal, dengan sebab kesalahan besar dicatat.
- [ ] Lead time kapasitas diukur dari persetujuan sampai memikul lalu lintas.
- [ ] Batas, jeda, dan biaya penskalaan otomatis ditinjau bersama pemilik layanan.
- [ ] Tak ada ukuran kapasitas atau kinerja yang dilaporkan menurut individu.

## Prompt AI

**Tinjau laporan latensi untuk distorsi tersembunyi.**

```text
Berikut cara kami melaporkan latensi untuk [operation or service]: [description
of the measurement point, the window, the statistics shown, and which requests
are included or excluded]. Pengguna kami peduli pada [user journey or
expectation]. Identifikasi cara laporan ini dapat meremehkan pengalaman pengguna
paling lambat, seperti perata-rataan, aturan pengecualian, pengambilan sampel,
atau lokasi pengukuran. Sarankan apa yang ditampilkan sebagai gantinya dan data
tambahan apa yang saya butuhkan. Jangan mengarang nilai acuan atau ambang;
tanyakan kepada saya yang Anda butuhkan. Daftar asumsi Anda.
```

**Susun rencana uji beban untuk suatu layanan.**

```text
Saya butuh rencana uji beban untuk [service name]. Perjalanan pengguna utamanya
[journeys], dependensinya [dependencies], dan campuran lalu lintas produksinya
kira-kira [description of mix]. Lingkungan uji berbeda dari produksi dalam hal
ini: [differences]. Usulkan model beban kerja, pola kenaikan, ukuran yang dicatat
(persentil latensi, tingkat galat, utilisasi, saturasi), kondisi berhenti, dan
pertanyaan yang harus dijawab hasilnya. Jangan mengasumsikan fitur alat atau
mengarang nilai target. Daftar asumsi Anda dan risiko uji.
```

**Susun perkiraan permintaan bersama bisnis.**

```text
Saya menyiapkan perkiraan kapasitas untuk [service] yang mencakup [horizon].
Masukan yang diketahui: [historical traffic description], [business events and
dates], dan [planned changes]. Susun tata letak register perkiraan dengan kasus
rendah, diharapkan, dan tinggi, asumsi di balik masing-masing, pemilik tiap
masukan, dan rutinitas tinjauan yang menilai galat perkiraan. Sarankan
pertanyaan untuk diajukan kepada [business stakeholders]. Jangan mengarang laju
pertumbuhan atau faktor musiman. Daftar asumsi Anda.
```

**Temukan kendala sebenarnya dari gejala.**

```text
Layanan menunjukkan gejala ini selama beban puncak: [symptoms, for example slow
p99, queue growth, error types]. Data utilisasi: [summary of resource
utilization]. Data saturasi: [summary of queues, pools, throttling]. Catatan
arsitektur: [short description]. Daftar sumber daya dan batas yang dapat menjadi
kendala, bukti yang akan membedakan di antaranya, dan uji berikutnya yang paling
murah untuk masing-masing. Jangan mengklaim sebab yang tidak didukung data. Daftar
asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan ukuran kapasitas atau kinerja, jamnya, dan pagar pembatas yang berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa topik kapasitas atau kinerja yang disunting menjaga setiap metrik dipasangkan dengan vektor manipulasi dan pagar pembatas.

## Poin penting

- Ukur saturasi bersama utilisasi, karena pengguna merasakan antrean, bukan persentase.
- Laporkan latensi sebagai persentil per operasi, dengan tingkat galat dan ukuran sampel, dan jangan pernah merata-ratakan persentil.
- Temukan batas dengan menguji dan tetapkan ruang kosong sebagai kebijakan tercatat yang menimbang biaya terhadap risiko.
- Perkirakan permintaan sebagai rentang bersama bisnis, bekukan perkiraan, dan belajar dari galatnya.
- Persingkat lead time kapasitas dan ukur penskalaan otomatis, agar kapasitas mengikuti kebutuhan.
- Gambarkan layanan dan sistem, tidak pernah orang, dan perlakukan angka yang tampak sempurna sebagai dorongan untuk memeriksa pengukurannya.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
