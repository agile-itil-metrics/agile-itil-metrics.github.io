# Metrik DORA

**Metrik DORA menggambarkan seberapa cepat dan seberapa aman perubahan perangkat lunak tim mencapai produksi, jadi baca ukuran kecepatan dan ukuran stabilitas bersama, hitung dari peristiwa jalur pengiriman dan insiden, dan pakai untuk memulai percakapan tentang sistem pengiriman, tidak pernah untuk memeringkat tim atau orang.**

## Gambaran umum dan motivasi

Metrik DORA berasal dari program penelitian [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), studi panjang tentang bagaimana praktik pengiriman perangkat lunak berhubungan dengan hasil tim dan organisasi. Nicole Forsgren, Jez Humble, dan Gene Kim memaparkan temuan awalnya dalam buku [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) pada 2018, dan program ini berlanjut di bawah Google Cloud dengan laporan tahunan. Penelitian itu bertanya aspek pengiriman terukur mana yang memprediksi hasil yang baik, dan menetapkan sekumpulan kecil ukuran kinerja pengiriman perangkat lunak yang dapat dihitung dari jalur pengiriman dan catatan insiden.

Per Oktober 2026, situs DORA menjelaskan lima metrik kinerja pengiriman perangkat lunak, terbagi dalam dua kelompok. Tiga menggambarkan **throughput**, yaitu seberapa cepat perubahan bergerak: lead time perubahan, frekuensi deployment, dan waktu pemulihan deployment gagal. Dua menggambarkan **ketidakstabilan**, yaitu seberapa sering rilis menimbulkan masalah: tingkat kegagalan perubahan dan tingkat pengerjaan ulang deployment. Publikasi sebelumnya menjelaskan empat metrik, dengan “waktu memulihkan layanan” sebagai ganti waktu pemulihan deployment gagal dan tanpa tingkat pengerjaan ulang. Definisi telah disempurnakan selama bertahun-tahun, jadi selalu nyatakan edisi panduan mana yang Anda ikuti dan tanggal terakhir Anda memeriksanya.

Temuan penelitian yang membuat metrik ini terkenal adalah bahwa kecepatan dan stabilitas cenderung bergerak bersama di antara tim. Tim yang sering men-deploy dan memiliki lead time pendek tidak, rata-rata, membayarnya dengan lebih banyak kegagalan. Ini membalik asumsi lama bahwa lebih cepat berarti lebih banyak merusak. Itu adalah pola dalam data survei dan jalur pengiriman, bukan hukum, dan berlaku bagi tim yang telah berinvestasi pada praktik seperti [pengiriman berkelanjutan](https://en.wikipedia.org/wiki/Continuous_delivery), batch kecil, pengujian otomatis, dan umpan balik cepat. Metrik adalah sinyal dari kapabilitas mendasar itu. Metrik bukan kapabilitas itu sendiri.

Istilah di bawah berulang dalam topik ini.

- **Deployment** adalah tindakan menempatkan sebuah versi perangkat lunak ke lingkungan tertentu. Topik ini maksudnya produksi kecuali dinyatakan lain.
- **Perubahan** adalah sekumpulan modifikasi pada perangkat lunak, lazimnya satu atau lebih commit yang dikirim bersama. Dalam ITIL 4 kata itu bermakna lebih luas, mencakup setiap penambahan, modifikasi, atau penghapusan yang dapat memengaruhi layanan, dan praktik [ITIL](https://en.wikipedia.org/wiki/ITIL) yang mengaturnya adalah pemberdayaan perubahan.
- **Deployment gagal** adalah deployment yang menyebabkan layanan menurun atau gangguan di produksi dan membutuhkan perbaikan, seperti hotfix, rollback, atau patch. Tim Anda menuliskan aturan tepatnya, karena penelitian menyerahkannya pada definisi lokal.
- **Rollback** adalah tindakan mengembalikan produksi ke versi baik yang diketahui sebelumnya.
- **Persentil** adalah nilai yang di bawahnya jatuh porsi pengamatan yang dinyatakan. Persentil ke-85 lead time adalah angka yang dikalahkan 85 persen perubahan.

Pandangan agile dan ITIL bertemu di tanah ini. Tim agile melihat angka-angka ini sebagai umpan balik atas praktik rekayasa dan kesepakatan kerjanya. Praktisi ITIL melihatnya sebagai bukti hasil untuk pemberdayaan perubahan, manajemen rilis, manajemen deployment, dan manajemen insiden. Ketegangannya biasanya soal kendali. Dewan persetujuan perubahan tradisional mencoba mengurangi kegagalan dengan memeriksa setiap perubahan sebelum dikirim. Penelitian DORA mendapati persetujuan eksternal yang berat tidak terkait dengan stabilitas yang lebih baik, sedangkan tinjauan sejawat, pengujian otomatis, dan perubahan kecil terkait. Dalam ITIL 4, pemberdayaan perubahan mengizinkan ini dengan memisahkan perubahan standar, normal, dan darurat dan dengan membiarkan perubahan berisiko rendah diotorisasi sebelumnya (lihat topik 4.3, Metrik pemberdayaan perubahan).

Metrik juga punya batas yang dinyatakan penelitian itu sendiri, dan saran praktis dalam topik ini dibangun di atasnya. Metrik menggambarkan sistem pengiriman untuk satu aplikasi atau layanan, dimaksudkan untuk percakapan perbaikan, dan tidak mengatakan apa pun tentang apakah pekerjaan yang dikirim berharga. Tim dapat mencatat angka yang sangat baik sambil mengirim hal yang keliru. Karena itu topik ini berada di samping, bukan di atas, ukuran alur (lihat topik 2.1, Ukuran alur), ukuran keandalan layanan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan), dan ukuran hasil (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur).

Akhirnya, metrik mengundang [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) begitu muncul di dasbor pimpinan. Frekuensi deployment paling mudah digelembungkan dan hitungan deployment gagal paling mudah disembunyikan. Setiap rekomendasi di bawah karena itu memasangkan ukuran dengan pemeriksaan cara ia bisa dibengkokkan (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Hitung dari peristiwa, bukan dari ingatan.** Deployment berasal dari jalur pengiriman, kegagalan dan pemulihan dari catatan insiden, dan lead time dari kontrol versi yang digabung dengan jalur pengiriman (lihat topik 1.5, Sumber data dan instrumentasi).
- **Baca kecepatan dan stabilitas sebagai satu gambaran.** Tim cepat dengan kegagalan yang naik, atau tim stabil yang mengirim kuartalan, sedang mengatakan sesuatu yang tak ditunjukkan salah satu bagian sendirian.
- **Ukur layanan atau aplikasi, bukan orang.** Satuan analisisnya adalah sistem pengiriman. Individu tidak men-deploy sendirian, dan memeringkat mereka merusak data.
- **Bandingkan tim dengan masa lalunya sendiri, bukan dengan tim lain.** Konteks berbeda tajam antara layanan pembayaran, platform data, dan aplikasi seluler, dan penelitian itu sendiri memperingatkan agar metrik tidak dipakai sebagai tabel liga.
- **Pakai distribusi untuk waktu.** Lead time dan waktu pemulihan berekor panjang, jadi laporkan median dan persentil tinggi (lihat topik 1.6, Literasi statistik untuk metrik layanan).
- **Perlakukan metrik sebagai gejala.** Ketika angka bergerak, cari penyebabnya dalam kapabilitas di bawahnya, seperti ukuran batch, otomatisasi pengujian, praktik tinjauan, dan arsitektur, lalu jalankan eksperimen.
- **Tuliskan definisinya.** Kegagalan, deployment, dan “awal pekerjaan” adalah pertimbangan. Catat pilihannya dan jaga stabil agar tren bermakna.

## Definisi metrik

Lima metrik di bawah mengikuti panduan DORA per Oktober 2026. Rumus menyatakan jam dan pengecualian yang sebaiknya dituliskan tim Anda. Di mana penelitian membiarkan batas terbuka, tabel menunjukkan default yang masuk akal dan rekomendasi menjelaskan pilihannya.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead time perubahan | Waktu bagi perubahan yang di-commit untuk mencapai produksi | Jam dimulai pada commit pertama perubahan (atau penggabungannya ke cabang utama, bila dinyatakan dalam definisi) dan berhenti ketika deployment ke produksi selesai dengan sukses; laporkan median dan persentil ke-85 perubahan yang di-deploy pada periode itu; perubahan yang tak pernah di-deploy dikecualikan dan dilaporkan terpisah sebagai pekerjaan dalam proses | Jam atau hari | Kontrol versi digabung dengan jalur pengiriman deployment | Manajemen deployment; manajemen rilis; pemberdayaan perubahan | Cycle time; lead time ke produksi | Mingguan atau per rilis, ditinjau bulanan |
| Frekuensi deployment | Seberapa sering tim men-deploy ke produksi | Hitungan deployment produksi sukses dari aplikasi pada periode itu / hari dalam periode; deployment gagal atau yang di-rollback dikecualikan dari hitungan sukses; deployment ke lingkungan pengujian dikecualikan | Deployment per hari atau per pekan | Log peristiwa jalur pengiriman deployment | Manajemen deployment; manajemen rilis | Pengiriman berkelanjutan; rilis di akhir setiap inkremen | Mingguan |
| Waktu pemulihan deployment gagal | Berapa lama waktu untuk pulih ketika deployment menyebabkan kegagalan produksi | Jam dimulai ketika kegagalan terdeteksi atau dilaporkan (aturan yang sama setiap kali) dan berhenti ketika layanan dipulihkan bagi pengguna; laporkan median dan persentil ke-85 untuk deployment gagal pada periode itu; insiden yang tak disebabkan deployment dikecualikan | Menit atau jam | Catatan insiden digabung dengan peristiwa deployment dan peringatan pemantauan | Manajemen insiden; manajemen kelangsungan layanan | Waktu untuk pulih; pekerjaan pemulihan | Per kegagalan, ditinjau bulanan |
| Tingkat kegagalan perubahan | Porsi deployment produksi yang menyebabkan kegagalan yang butuh perbaikan | Deployment yang membutuhkan hotfix, rollback, patch, atau respons insiden / semua deployment produksi pada periode itu; aturan yang mengaitkan kegagalan dengan deploymentnya ditulis dan diterapkan dengan cara sama setiap kali | Persen | Peristiwa deployment digabung dengan insiden, rollback, dan deployment hotfix | Pemberdayaan perubahan; manajemen insiden | Definisi selesai; cacat yang lolos | Bulanan |
| Tingkat pengerjaan ulang deployment | Porsi deployment produksi yang tak terencana dan dibuat untuk memperbaiki masalah yang dihadapi pengguna | Deployment tak terencana yang dibuat sebagai respons atas masalah produksi / semua deployment produksi pada periode itu; deployment terencana yang kebetulan memuat perbaikan dikecualikan; aturan “tak terencana” ditulis | Persen | Log jalur pengiriman yang diberi tag menurut alasan deployment, terkait catatan insiden atau cacat | Pemberdayaan perubahan; manajemen masalah | Pekerjaan tak terencana; perbaikan bug yang dirilis di luar rencana | Bulanan |

Dua catatan atas tabel. Pertama, tingkat kegagalan perubahan dan tingkat pengerjaan ulang deployment tumpang tindih dan tidak sama: kegagalan yang diperhatikan tim dan di-rollback tanpa deployment baru dihitung dalam tingkat kegagalan perubahan tetapi tidak dalam tingkat pengerjaan ulang, sedangkan perbaikan terencana yang dijadwalkan tim tidak dihitung dalam keduanya. Kedua, penelitian memperlakukan **deployment** sebagai satuan dan menghitung per aplikasi, jadi platform dengan lima puluh layanan punya lima puluh set angka, bukan satu.

## Rekomendasi

### Mulai dengan definisi dan jam

**1. Tulis definisi satu halaman untuk setiap metrik sebelum membuat bagannya.** Nyatakan apa yang dihitung sebagai deployment, lingkungan mana produksi, di mana jam mulai untuk lead time, dan bagaimana kegagalan dikaitkan dengan deployment. Taruh halaman itu di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik). Definisi yang hidup hanya di kepala seseorang akan hanyut pada pertama kali alat atau tim berubah.

**2. Pilih awal lead time dan bertahan dengannya.** Pilihan paling umum adalah commit pertama pada perubahan, penggabungan ke cabang utama, dan pembuatan tiket. Commit pertama mengukur sistem pengiriman dan mengabaikan waktu pekerjaan duduk di backlog. Awal tiket mengukur lebih banyak penantian pelanggan tetapi mencampur pemrioritasan (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur). Pakai satu secara konsisten dan katakan mana pada setiap bagan.

**3. Atribusikan kegagalan dengan aturan yang dinyatakan.** Kegagalan menjadi milik deployment ketika, misalnya, insiden dibuka dalam jendela yang dinyatakan setelah deployment dan analisis sebabnya menunjuk perubahan itu, atau ketika rollback atau hotfix diberi tag padanya. Pilih aturan yang dapat diterapkan orang tanpa perdebatan, tinjau sampel kasus setiap kuartal, dan jaga aturan tetap sama cukup lama untuk melihat tren.

### Instrumentasi dari jalur pengiriman

**4. Ambil peristiwa deployment dari jalur pengiriman, bukan dari spreadsheet.** Sistem [CI/CD](https://en.wikipedia.org/wiki/CI/CD) yang mencatat setiap deployment produksi dengan stempel waktu, versi, dan hasil memberi Anda frekuensi deployment dan akhir jam lead time tanpa entri manusia. Hitungan yang dimasukkan dengan tangan terlambat dan tidak konsisten, dan mengundang masalah pencatatan mundur yang dijelaskan dalam topik 1.5, Sumber data dan instrumentasi. Proyek sumber terbuka Four Keys dari tim DORA adalah satu contoh kerja pengumpulan peristiwa ini, meskipun jalur setara milik Anda sendiri pun cukup.

**5. Gabungkan catatan insiden dengan deployment.** Ukuran kegagalan dan pemulihan membutuhkan dua sumber: log deployment dan alat insiden. Tambahkan kolom pada catatan insiden untuk “disebabkan deployment” dan pengenal deployment, diisi saat penyelesaian dan diperiksa dalam tinjauan pasca-insiden (lihat topik 4.2, Metrik postmortem dan pembelajaran). Tanpa penggabungan, tingkat kegagalan perubahan menjadi tebakan.

**6. Beri tag alasan setiap deployment.** Tingkat pengerjaan ulang butuh memisahkan deployment terencana dari perbaikan tak terencana. Label sederhana pada eksekusi jalur, seperti “perubahan terencana” atau “perbaikan masalah produksi,” sudah cukup. Jaga daftar label tetap pendek, agar orang tidak perlu berpikir di bawah tekanan.

### Laporkan angka dengan jujur

**7. Laporkan distribusi dan hitungan, bukan satu rata-rata.** Tampilkan median dan persentil ke-85 untuk lead time dan waktu pemulihan, beserta jumlah pengamatan di balik masing-masing. Pekan dengan dua deployment dan satu kegagalan punya tingkat kegagalan perubahan 50 persen yang sedikit artinya, jadi tampilkan hitungan di samping persentase dan utamakan jendela lebih panjang untuk tingkat (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**8. Tampilkan kelompok throughput dan ketidakstabilan berdampingan.** Taruh tiga metrik throughput dan dua metrik ketidakstabilan pada satu tampilan, per layanan, dengan tren selama setidaknya satu kuartal. Jangan pernah menerbitkan frekuensi deployment tanpa ukuran kegagalan di sampingnya. Jika pemimpin meminta satu angka, jelaskan bahwa tidak ada skor DORA tunggal, dan tawarkan tampilan dua kelompok sebagai gantinya.

**9. Jaga perbandingan dalam riwayat tim sendiri.** Tim yang menggeser median lead time dari sembilan hari menjadi lima telah belajar sesuatu. Memeringkatnya terhadap tim lain dengan arsitektur, beban regulasi, atau kereta rilis berbeda membuktikan sedikit, dan mengajari kedua tim melindungi angkanya. Ketika harus merekap untuk tata kelola, tunjukkan sebaran di seluruh layanan dan tren perbaikan, bukan tabel liga (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

### Perbaiki sistem yang digambarkan angka

**10. Kurangi ukuran batch lebih dulu.** Perubahan kecil memperpendek lead time, mempermudah mendiagnosis kegagalan, dan menurunkan biaya rollback. Tekniknya mencakup [feature toggle](https://en.wikipedia.org/wiki/Feature_toggle), bekerja berbasis trunk, dan memecah pekerjaan agar setiap inkremen bisa dikirim sendiri (lihat topik 2.7, Metrik pull request dan tinjauan kode). Lacak median ukuran perubahan di samping lead time agar Anda dapat melihat apakah batch benar-benar menyusut.

**11. Investasikan pada deteksi cepat dan pembalikan cepat.** Waktu pemulihan turun ketika tim dapat melihat kegagalan dalam menit, dan ketika dapat [melakukan rollback](https://en.wikipedia.org/wiki/Rollback_(data_management)) atau mematikan perubahan tanpa build baru. [Canary release](https://en.wikipedia.org/wiki/Canary_release), feature toggle, dan rollback otomatis masing-masing memperpendek selang antara kegagalan dan pemulihan. Ukur waktu dari deployment sampai deteksi secara terpisah, karena deteksi lambat bersembunyi di dalam angka waktu pemulihan (lihat topik 3.3, Waktu respons dan penyelesaian insiden).

**12. Pakai angka untuk memilih kapabilitas yang diperbaiki.** Pilih satu metrik lemah, tanyakan mengapa lemah, dan pilih praktik dari daftar kapabilitas penelitian yang menangani penyebabnya, seperti otomatisasi pengujian, arsitektur berkopling longgar, atau persetujuan perubahan ringan. Jalankan perubahan selama satu kuartal dan lihat tren. Pasangkan eksperimen dengan topik retrospektif agar tim memiliki perbaikan itu (lihat topik 9.5, Metrik perbaikan berkelanjutan).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Lead time perubahan | Menggeser awal jam lebih lambat, seperti mulai pada penggabungan alih-alih commit pertama; menggabung lebih awal ke cabang berumur panjang; mengecualikan perubahan sulit sebagai “bukan kode”; mengirim perubahan remeh lewat jalur untuk menarik median turun | Persentil dan usia pekerjaan dalam proses; awal jam tertulis yang tetap; sampel 10 persen perubahan paling lambat tiap kuartal; distribusi ukuran perubahan |
| Frekuensi deployment | Memecah satu perubahan menjadi banyak deployment remeh; men-deploy ulang build yang tak berubah; menghitung deployment ke staging atau perubahan konfigurasi kosong | Ukuran perubahan per deployment; porsi deployment yang memuat perubahan terlihat pengguna; tingkat kegagalan perubahan dan tingkat pengerjaan ulang di sampingnya |
| Waktu pemulihan deployment gagal | Memulai jam terlambat atau menutup insiden lebih awal; mengklasifikasi ulang kegagalan sebagai insiden baru setelah perbaikan parsial; menaikkan ambang tingkat keparahan untuk “kegagalan” | Kekambuhan insiden yang sama dalam jendela yang dinyatakan; awal jam diambil dari peringatan pemantauan; durasi dampak yang dilaporkan pelanggan |
| Tingkat kegagalan perubahan | Tidak mengaitkan insiden dengan deployment; menghitung hanya kegagalan yang menyebabkan gangguan penuh; melebarkan jendela sehingga kegagalan jatuh di luarnya; memperbaiki ke depan dan menyebutnya perubahan baru | Tinjau sampel insiden terhadap log deployment tiap kuartal; lacak proporsi insiden dengan tautan deployment tercatat; tingkat pengerjaan ulang deployment |
| Tingkat pengerjaan ulang deployment | Melabeli perbaikan sebagai pekerjaan terencana; menggabungkan perbaikan ke rilis terjadwal; menghindari deployment perbaikan dengan menunda perbaikan | Hitungan cacat dan cacat lolos dari pelacak; usia cacat produksi terbuka; audit tag pada sampel deployment |

Pembacaan yang sehat menunjukkan lead time dan waktu pemulihan yang menyusut atau stabil pada tingkat rendah, frekuensi deployment stabil atau naik dengan perubahan kecil, dan tingkat kegagalan dan pengerjaan ulang datar atau turun, dengan hitungan cukup besar untuk dipercaya. Pembacaan mencurigakan mencakup lonjakan mendadak frekuensi deployment tanpa perubahan pada pekerjaan, tingkat kegagalan yang jatuh ke nol dalam sebulan, dan waktu pemulihan yang turun sementara keluhan pelanggan tetap sama. Masing-masing menuntut pemeriksaan instrumen sebelum bersuka cita.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Pakai kelima metrik DORA per layanan | Berbasis penelitian, menyeimbangkan kecepatan dengan stabilitas, dihitung dari peristiwa objektif | Butuh jalur pengiriman dan catatan insiden yang bergabung dengan bersih; diam tentang apakah pekerjaan itu berharga |
| Laporkan hanya frekuensi deployment dan lead time | Mudah dikumpulkan dari jalur pengiriman | Menghargai kecepatan saja dan mengundang manipulasi persis yang ditangkap ukuran stabilitas |
| Pakai definisi lokal per tim | Cocok dengan arsitektur dan gaya rilis tim | Tim tak dapat dibandingkan, dan rekapitulasi tak andal |
| Pakai satu definisi seluruh organisasi | Pelaporan konsisten; tata kelola sederhana | Kurang cocok bagi sebagian sistem, seperti mainframe dengan jendela batch atau rilis teregulasi |
| Bandingkan tim terhadap pita kinerja terbitan | Memberi pemimpin gambaran cepat tentang posisi | Mengabaikan konteks, dan penelitian memperingatkan bahwa pita bukan target bagi tiap tim |
| Pakai metrik untuk perbaikan diri tim | Membangun kepemilikan; mendukung data jujur | Kurang menenangkan bagi pemimpin yang menginginkan skor tunggal |

Ketegangan pusatnya adalah antara keterbandingan dan kejujuran. Makin banyak angka dipakai untuk menilai tim, makin data membengkok, dan makin sedikit membantu tim yang memilikinya. Pakai metrik untuk mendukung perbaikan lebih dulu, terima keterbandingan yang tidak sempurna, dan jaga tampilan tingkat pemimpin pada tren dan sebaran. Di mana pelaporan teregulasi membutuhkan definisi standar, dokumentasikan dan jaga tampilan perbaikan tingkat tim terpisah.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Dari lima angka DORA kita, mana yang berasal dari peristiwa, dan mana dari ingatan seseorang?**
Telusuri setiap metrik kembali ke sumbernya. Catat di mana seseorang mengetik tanggal atau memutuskan apakah sesuatu dihitung sebagai kegagalan. Fasilitator sebaiknya membantu kelompok memeringkat langkah manual menurut seberapa banyak mereka dapat mendistorsi angka, dan menyepakati mana yang diotomatisasi lebih dulu.

**2. Di mana tepatnya jam lead time kita mulai dan berhenti, dan apakah semua orang sepakat?**
Minta tiga orang menjelaskan awal dan akhir jam untuk perubahan terakhir yang dikirim. Bandingkan jawabannya. Perbedaan biasanya muncul sekitar commit pertama, penggabungan, tiket, dan langkah persetujuan. Sepakati satu definisi dan tuliskan, dan bahas waktu tunggu apa yang disembunyikan definisi terpilih.

**3. Apa yang dihitung sebagai deployment gagal bagi kita, dan siapa yang memutuskan?**
Telusuri lima insiden produksi terakhir dan tanyakan apakah masing-masing milik sebuah deployment. Ketidaksepakatan menunjukkan di mana aturan tidak jelas. Bahas apa yang terjadi pada kegagalan yang diperbaiki dengan perubahan konfigurasi, rollback, atau patch cepat, dan putuskan bagaimana masing-masing dicatat.

**4. Jika frekuensi deployment berlipat dua kuartal depan, apa yang akan kita periksa sebelum menyebutnya kabar baik?**
Undang kelompok menyebut cara angka itu bisa naik tanpa menyampaikan lebih banyak nilai. Lihat ukuran perubahan, porsi deployment dengan perubahan terlihat pengguna, dan tingkat kegagalan dan pengerjaan ulang. Fasilitator sebaiknya mencatat pemeriksaan mana sudah ada di dasbor dan mana perlu ditambahkan.

**5. Bagaimana angka-angka ini dipakai oleh orang di luar tim?**
Tanyakan siapa yang melihatnya, dalam bentuk apa, dan apa yang mereka lakukan dengannya. Dengarkan perbandingan dengan tim lain, target yang ditetapkan dari luar, dan pemakaian dalam penilaian individu. Bahas apa yang perlu tim lihat berubah dalam pemakaian itu sebelum dapat memercayai datanya sendiri, dan siapa yang berwenang mengubahnya.

**6. Kapabilitas mana yang paling akan memperbaiki angka terlemah kita, dan apa eksperimen kecil untuk dicoba?**
Pilih metrik terlemah dan bicarakan kemungkinan sebabnya, seperti batch besar, tinjauan lambat, pengujian rapuh, atau langkah rilis manual. Pilih satu sebab dan rancang eksperimen empat sampai enam pekan dengan cara melihat efeknya. Sepakati tanggal meninjau hasil dan siapa yang membawa datanya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki kapabilitas yang menggerakkan angka-angka ini: perubahan kecil, pengujian otomatis, jalur pengiriman cepat, dan kebiasaan saling meninjau pekerjaan. Mereka sebaiknya memakai metrik sebagai cermin atas praktik rekayasa mereka sendiri, menetapkan tujuan perbaikan sendiri, dan menahan tekanan melaporkan satu angka ke atas. Mereka juga memutuskan definisi, jadi mereka memikul kewajiban menjaganya tetap jujur (lihat topik 2.7, Metrik pull request dan tinjauan kode).

### Tim layanan dan operasi

Tim operasi memegang catatan insiden yang menjadi tumpuan ukuran kegagalan dan pemulihan. Mereka membantu tim pengiriman dengan memberi tag insiden dengan deployment yang menyebabkannya, dengan menyediakan pemantauan yang mendeteksi kegagalan dengan cepat, dan dengan bergabung dalam tinjauan setiap deployment gagal. Mereka sebaiknya mengawasi agar kecepatan pengiriman tidak membeli ketidakstabilan yang mereka serap sebagai beban siaga (lihat topik 5.7, Metrik pekerjaan berulang dan siaga), dan meminta investasi rollback dan deteksi yang memperpendek waktu pemulihan.

### Kepemimpinan dan tata kelola

Pemimpin sebaiknya meminta tren dan sebaran di seluruh layanan, kedua kelompok metrik bersama, dan eksperimen perbaikan di baliknya. Mereka sebaiknya menghindari target yang mengunci sebuah angka, seperti “deploy harian,” dan menghindari memakai metrik dalam penilaian individu. Badan tata kelola dapat memakai angka sebagai bukti bahwa jalur persetujuan perubahan yang lebih ringan aman, atau sebagai alasan mempertimbangkannya kembali, dengan menunjukkan apakah stabilitas tetap seiring proses berubah (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang).

### Pelanggan dan pengguna

Pelanggan jarang peduli hitungan deployment. Mereka peduli seberapa cepat perbaikan atau fitur sampai kepada mereka, seberapa jarang rilis merusak sesuatu yang mereka andalkan, dan seberapa cepat layanan kembali ketika itu terjadi. Pakai metrik DORA sebagai bukti internal bahwa hasil ini kemungkinan, dan lengkapi dengan ukuran yang dihadapkan kepada pelanggan seperti ketersediaan dan kepuasan (lihat topik 5.3, Metrik ketersediaan, dan topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan layanan checkout yang dimiliki satu tim produk, didukung tim platform dan service desk. Semua angka di bawah bersifat ilustratif.

Tim telah men-deploy ke produksi sekitar dua kali seminggu, dengan lead time (commit pertama sampai produksi) median 11 hari dan persentil ke-85 sebesar 26 hari. Selama kuartal sebelumnya, 6 dari 24 deployment (25 persen, ilustratif) diikuti rollback atau insiden. Median waktu pemulihan untuk kegagalan itu 3 jam. Dewan persetujuan perubahan bertemu mingguan dan meninjau setiap perubahan pada layanan checkout.

Tim mengusulkan rencana. Ia akan memecah perubahan besar, menambahkan pemeriksaan otomatis di jalur pengiriman, menaruh perilaku baru di balik feature toggle, dan meminta dewan mengotorisasi sebelumnya perubahan berisiko rendah yang lolos pemeriksaan sebagai perubahan standar. Manajer perubahan waspada, jadi tim sepakat melaporkan kelima metrik bulanan dan menghentikan eksperimen jika tingkat kegagalan naik dua bulan berturut-turut.

Setelah satu kuartal, angkanya (ilustratif) adalah 19 deployment per bulan, median lead time 3 hari dengan persentil ke-85 sebesar 8 hari, tingkat kegagalan perubahan 8 persen, median waktu pemulihan 40 menit, dan tingkat pengerjaan ulang 5 persen. Tim senang, dan seorang manajer regional meminta membandingkan frekuensi deployment tim checkout dengan tim produk lain dan menetapkan target bersama.

Ketua tim membawa rincian pengerjaan ulang dan kegagalan ke tinjauan dan memperhatikan risiko manipulasi. Frekuensi deployment terbantu oleh sejumlah deployment konfigurasi kecil yang dihitung jalur pengiriman, dan median ukuran perubahan menyusut lebih cepat daripada pekerjaan sebenarnya. Lebih buruk lagi, dua insiden bulan lalu diperbaiki dengan perubahan konfigurasi yang dicatat jalur pengiriman sebagai deployment normal dengan tag “terencana,” sehingga tingkat pengerjaan ulang diremehkan. Tingkat kegagalan perubahan tampak baik sebagian karena kedua insiden itu belum dikaitkan dengan deployment aslinya.

Keputusan, dicatat dalam log keputusan, punya empat bagian. Deployment khusus konfigurasi dihitung terpisah dan ditampilkan di samping angka utama. Tag alasan deployment diaudit bulanan pada sampel 10 deployment. Alat insiden kini mewajibkan pengenal deployment ketika sebabnya adalah perubahan. Dan tim menolak target frekuensi deployment bersama, menawarkan sebagai gantinya tampilan bersama yang menunjukkan tren dan tingkat kegagalan tiap layanan. Manajer perubahan sepakat mempertahankan otorisasi sebelumnya untuk perubahan standar, dengan tinjauan pada akhir kuartal berikutnya.

## Sudut pandang sektor

**Startup.** Tim kecil sering men-deploy berkali-kali sehari dan punya catatan insiden tipis, jadi frekuensi deployment dan lead time mudah tetapi data kegagalan tambal-sulam. Mulailah dengan memberi tag setiap rollback dan hotfix di jalur pengiriman, dan menyimpan log insiden sederhana dengan pengenal deployment. Jangan biarkan frekuensi tinggi meyakinkan Anda bahwa stabilitas baik tanpa memeriksa tingkat kegagalan.

**Bisnis kecil.** Platform yang dihosting atau pengembang alihdaya mungkin hanya men-deploy bulanan, dengan sedikit perangkat. Hitung apa yang bisa dengan tangan selama beberapa bulan, minta pemasok tanggal deployment dan insiden secara tertulis, dan fokus pada lead time dan tingkat kegagalan. Pakai angka untuk memutuskan apakah perubahan lebih kecil yang disampaikan terus-menerus akan mengurangi risiko, bukan untuk mengejar pita.

**Perusahaan besar.** Banyak tim, beberapa gaya rilis, dan campuran sistem modern dan warisan membuat definisi konsisten sulit. Sepakati definisi minimum bersama untuk tiap metrik, terbitkan, dan izinkan tim menambah yang lebih ketat secara lokal dengan alasan yang dinyatakan. Rekap dengan menunjukkan sebaran dan tren per layanan alih-alih rata-rata, dan jaga rincian tingkat tim terlihat hanya oleh tim pemilik dan kelompok pendukungnya.

**Pemerintah dan sektor publik.** Jendela rilis, aturan audit, dan kontrak pengadaan membentuk apa yang mungkin, dan sebagian sistem dijalankan pemasok. Sertakan hak data pengiriman dan insiden dalam kontrak agar metrik dapat dihitung. Pakai angka sebagai bukti bahwa program modernisasi memperpendek lead time tanpa menaikkan tingkat kegagalan, dan laporkan semua metrik bersama agar hasilnya tidak dipilih-pilih (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah memperpendek waktu antara gagasan dan pemakaiannya sambil menjaga produksi stabil. Biaya program terdiri dari tiga bagian: instrumentasi (peristiwa jalur pengiriman, tag deployment, dan penggabungan insiden), rutinitas tinjauan (pandangan bulanan atas tren dan sampel kuartalan kasus kegagalan dan pengerjaan ulang), dan pekerjaan perbaikan yang ditunjuk angka, seperti otomatisasi pengujian atau jalur pengiriman lebih cepat. Dua yang pertama sederhana. Yang ketiga adalah tempat pengeluaran sebenarnya, dan ia dibelanjakan pada kapabilitas rekayasa, bukan pada pengukuran.

Imbal hasil datang dari keputusan yang dipermudah angka. Tim dapat menunjukkan kepada dewan perubahan bahwa perubahan kecil aman, dan karena itu menghapus satu langkah persetujuan. Kelompok platform dapat melihat layanan mana yang punya jalur lambat atau rollback buruk dan menempatkan investasinya sesuai. Tim operasi dapat berargumen dengan data untuk alat deteksi yang lebih baik. Gambarkan imbal hasil lewat pola yang dapat Anda amati sendiri, seperti waktu dari commit ke produksi, porsi rilis yang butuh perbaikan, dan beban siaga per rilis, sebelum dan sesudah perubahan. Hindari mengutip angka acuan dari organisasi lain sebagai imbal hasil yang diharapkan, karena konteks Anda akan berbeda. Total biaya kepemilikan didominasi waktu orang, jadi jaga set metrik tetap kecil dan otomatiskan pengumpulannya (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Memperlakukan metrik sebagai kartu skor kinerja individu.** Itu merusak dasar penelitian dan merusak data. Laporkan hanya di tingkat layanan dan tim.
- **Menetapkan target seperti “deploy harian” atau “lead time di bawah satu hari.”** Target menggantikan tujuan. Tetapkan arah perbaikan dan eksperimen, dan jaga angka sebagai sinyal.
- **Memeringkat tim satu sama lain atau terhadap pita terbitan.** Konteks berbeda dan manipulasi menyusul. Bandingkan tim dengan trennya sendiri, dan pakai pita hanya sebagai orientasi longgar.
- **Melaporkan kecepatan tanpa stabilitas.** Pasangan itu intinya. Selalu tampilkan kelompok throughput dan ketidakstabilan bersama.
- **Membiarkan definisi hanyut.** Kegagalan, deployment, dan awal lead time berubah diam-diam bersama alat. Catat setiap perubahan definisi dengan alasannya, dan tandai pada bagan.
- **Menghitung deployment apa pun.** Dorongan konfigurasi, rilis lingkungan pengujian, dan deploy ulang build yang sama menggelembungkan hitungan. Definisikan deployment produksi, dan tampilkan jenis lain terpisah.
- **Mengabaikan apa yang dikirim.** Angka kuat bisa menyembunyikan pekerjaan yang tak penting. Baca bersama ukuran alur dan hasil (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).
- **Mengejar metrik alih-alih kapabilitas.** Lead time turun paling andal ketika batch menyusut dan pengujian makin cepat. Perbaiki praktik dan biarkan angka mengikuti.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | Tiap orang mendefinisikan deployment dan kegagalan berbeda | Beberapa tim mendokumentasikan definisinya | Satu definisi tertulis per metrik, dengan jam dan pengecualian, di register metrik | Perubahan definisi dicatat dan ditandai pada bagan; sampel diperiksa tiap kuartal | Definisi direvisi bersama pemasok dan tata kelola ketika tidak lagi memberi masukan bagi keputusan |
| Penangkapan data | Hitungan dirakit dengan tangan dari tiket | Data jalur pengiriman untuk beberapa layanan; insiden dikaitkan dengan tangan | Deployment, alasan, dan tautan insiden ditangkap otomatis untuk kebanyakan layanan | Kualitas data (tingkat tautan, audit tag) diukur dan diplot tren | Peristiwa dibagikan antartim dan pemasok lewat antarmuka yang disepakati |
| Pemakaian angka | Dilaporkan ke atas sebagai skor tunggal | Tim sesekali melihat bagannya sendiri | Kelompok throughput dan ketidakstabilan ditinjau bersama bulanan oleh tim pemilik | Tren menyuapi eksperimen perbaikan yang didanai dengan pagar pembatas | Sebaran dan tren memberi masukan bagi investasi platform dan kebijakan perubahan di seluruh organisasi |
| Pagar pembatas terhadap manipulasi | Tidak ada | Kesadaran informal | Pagar pembatas berpasangan didaftar untuk tiap metrik | Pagar pembatas dan sampel ditinjau, dengan kasus manipulasi dicatat | Pagar pembatas disetel terus-menerus seiring tim dan alat berubah |

## Daftar periksa

- [ ] Kelima metrik didefinisikan secara tertulis, dengan jam, pengecualian, dan tanggal serta edisi panduan DORA yang diikuti.
- [ ] Deployment produksi dicatat jalur pengiriman dengan stempel waktu, versi, dan hasil.
- [ ] Awal lead time (commit pertama, penggabungan, atau lainnya) dinyatakan dan diterapkan konsisten.
- [ ] Insiden membawa kolom untuk deployment yang menyebabkannya, diisi saat penyelesaian.
- [ ] Setiap deployment membawa tag alasan, dan sampel diaudit bulanan.
- [ ] Waktu dilaporkan sebagai median dan persentil tinggi, dengan hitungan.
- [ ] Metrik throughput dan ketidakstabilan ditampilkan bersama untuk tiap layanan.
- [ ] Ukuran perubahan dilacak di samping frekuensi deployment dan lead time.
- [ ] Angka tidak dipakai dalam penilaian individu atau untuk memeringkat tim.
- [ ] Seorang pemilik bernama meninjau metrik bulanan dan mencatat perubahan definisi apa pun.
- [ ] Satu eksperimen perbaikan, terkait metrik terlemah, sedang berjalan dengan tanggal tinjauan.

## Prompt AI

**Tulis set definisi satu halaman untuk kelima metrik.**

```text
Saya mendefinisikan metrik pengiriman perangkat lunak DORA untuk [service or
application name]. Alat kami [version control host, CI/CD system, incident tool,
ITSM tool]. Gaya rilis kami [continuous, weekly, monthly, or other]. Untuk lead
time perubahan, frekuensi deployment, waktu pemulihan deployment gagal, tingkat
kegagalan perubahan, dan tingkat pengerjaan ulang deployment, susun definisi
dengan di mana jam mulai dan berhenti, apa yang dihitung dan dikecualikan,
sumber data, dan satu risiko ambiguitas. Jangan mengarang nilai acuan atau
mengklaim praktik kami cocok dengan pita kinerja terbitan mana pun. Daftar
asumsi Anda dan pertanyaan yang harus saya jawab untuk menuntaskan definisi.
```

**Periksa set metrik untuk risiko manipulasi.**

```text
Berikut cara kami saat ini menghitung metrik pengiriman kami: [description of
each metric, its data source, and how it is reported]. Audiensnya [team,
leadership, or governance body]. Untuk setiap metrik, daftar cara yang masuk
akal angka itu dapat digelembungkan, disembunyikan, atau didistorsi tanpa
perbaikan nyata, dan sarankan metrik atau praktik pagar pembatas berpasangan yang
akan menangkapnya. Jangan mengarang statistik. Daftar asumsi Anda dan informasi
apa pun yang Anda butuhkan agar lebih tepat.
```

**Analisis ekspor data deployment dan insiden.**

```text
Saya akan menempelkan ekspor kecil [number] deployment produksi dan [number]
insiden dengan kolom ini: [list fields, for example deployment id, timestamp,
result, reason tag, incident id, opened time, resolved time, deployment link].
Hitung median dan persentil ke-85 waktu pemulihan, tingkat kegagalan perubahan,
dan tingkat pengerjaan ulang, dengan menunjukkan hitungan di balik masing-masing.
Tandai catatan dengan tautan yang hilang atau stempel waktu yang mencurigakan.
Jangan mengekstrapolasi melampaui data atau membandingkan hasil dengan acuan
luar. Daftar asumsi Anda dan masalah kualitas data yang membatasi kesimpulan.
```

**Rencanakan eksperimen perbaikan.**

```text
Metrik pengiriman terlemah kami adalah [metric name], saat ini [value as
reported, with date range and counts]. Kemungkinan sebab yang telah dibahas tim
adalah [list]. Kendala kami adalah [constraints, for example regulated releases,
shared test environment]. Usulkan tiga eksperimen kecil empat sampai enam pekan,
masing-masing dengan hipotesis, cara mengamati efeknya, metrik pagar pembatas,
dan risiko. Jangan mengarang angka perbaikan yang diharapkan. Daftar asumsi Anda
dan apa yang sebaiknya kami periksa sebelum memulai.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik perubahan, rilis, dan insiden terkait dan pagar pembatas yang harus berada di samping tiap metrik DORA.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa versi topik ini yang direvisi menjaga jam, vektor manipulasi, dan referensi silangnya tetap konsisten.

## Poin penting

- Metrik DORA adalah lima ukuran pengiriman perangkat lunak, tiga throughput dan dua ketidakstabilan, dan paling berguna dibaca bersama untuk satu layanan.
- Hitung dari peristiwa jalur pengiriman dan insiden dengan definisi tertulis, karena kegagalan dan awal lead time adalah pertimbangan.
- Pakai untuk belajar tentang sistem pengiriman dan membandingkan tim dengan riwayatnya sendiri, tidak pernah untuk memeringkat orang atau tim.
- Laporkan median, persentil tinggi, dan hitungan, dan pasangkan setiap metrik dengan pagar pembatas yang menangkap manipulasinya.
- Perbaiki kapabilitas mendasar, seperti batch kecil, deteksi cepat, dan rollback mudah, dan biarkan angka mengikuti.
- Nyatakan edisi dan tanggal panduan yang Anda ikuti, karena definisi telah disempurnakan dari waktu ke waktu.

## Referensi dan bacaan lanjutan

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
