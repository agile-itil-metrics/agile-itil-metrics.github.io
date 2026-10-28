# Inflasi metrik dan pengenceran kualitas

**Ketika AI membuat volume dan kecepatan murah, setiap metrik yang menghitung volume dan kecepatan menggelembung, jadi pasangkan masing-masing dengan ukuran kebermanfaatan yang telah diperiksa seseorang, dan awasi apakah sinyal dalam data Anda sedang tenggelam.**

## Gambaran umum dan motivasi

Metrik bekerja karena mencerminkan sesuatu yang sulit dihasilkan. Tiket terselesaikan mencerminkan upaya. Dokumen tertulis mencerminkan pengetahuan. Pengujian yang ditambahkan mencerminkan kehati-hatian. Ketika perkakas membuat keluaran yang terlihat hampir gratis, hubungan antara keluaran dan upaya putus. Angka terus naik dan maknanya terkuras. Inilah inflasi metrik, dan pendampingnya adalah pengenceran kualitas: porsi yang dihasilkan yang berguna turun, dan bagian yang berguna menjadi lebih sulit ditemukan.

Ini bukan masalah baru. [Hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) dan kerabatnya [hukum Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) menggambarkan bagaimana ukuran yang dipakai untuk kendali dirusak. [Metrik vanitas](https://en.wikipedia.org/wiki/Vanity_metric) tampak mengesankan dan tidak mengatakan apa-apa tentang kesehatan pekerjaan. Yang diubah AI adalah kecepatan dan skala keluaran dapat dihasilkan, dan bersamanya kecepatan dan skala kegagalan lama ini dapat terjadi. Tim yang dulu menggelembungkan hitungan dengan tangan kini dapat melakukannya dalam hitungan menit, sering tanpa bermaksud.

Beberapa pola berulang dalam pekerjaan layanan dan pengiriman.

- **Inflasi volume.** AI menyusun lebih banyak tiket, balasan, komentar, kasus uji, dokumen, dan kode. Hitungannya naik. Beban kerja bagi mereka yang harus membaca, meninjau, dan merawatnya juga naik.
- **Inflasi kecepatan.** Waktu ke draf pertama turun tajam, dan waktu ke hasil yang selesai dan diperiksa turun kurang, atau tidak sama sekali. Dasbor yang melaporkan yang pertama menceritakan kisah yang menyanjung.
- **Derau.** Lebih banyak konten bersaing untuk perhatian. [Kelebihan informasi](https://en.wikipedia.org/wiki/Information_overload) adalah keadaan ketika seseorang tak dapat memproses volume informasi yang disajikan, dan [rasio sinyal-ke-derau](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) basis pengetahuan, antrean tiket, atau aliran peringatan turun. [Kelelahan peringatan](https://en.wikipedia.org/wiki/Alert_fatigue) adalah bentuk operasionalnya (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan).
- **Konten hasil generasi berkualitas rendah.** Konten yang dihasilkan massal dengan sedikit tinjauan, kadang disebut [AI slop](https://en.wikipedia.org/wiki/AI_slop), masuk akal dan tipis. Basis pengetahuan yang diisi artikel semacam itu menjadi kurang tepercaya, dan pengguna belajar tak memercayainya.
- **Biaya verifikasi.** Upaya memeriksa klaim sering jauh lebih besar daripada upaya membuatnya, pola yang kadang disebut [hukum Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law). Ketika generasi murah, verifikasi menjadi bottleneck.
- **Efisiensi yang menaikkan konsumsi.** [Paradoks Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) menggambarkan kasus ketika peningkatan efisiensi menyebabkan lebih banyak pemakaian sumber daya, bukan lebih sedikit. Jika menyusun laporan menjadi murah, lebih banyak laporan diminta. Waktu yang dihemat perkakas dapat dikonsumsi oleh lebih banyak pekerjaan bernilai lebih rendah.
- **Lingkaran umpan balik.** Jika konten hasil generasi menyuapi putaran generasi berikutnya, galat bertumpuk. Literatur riset menggambarkan [keruntuhan model](https://en.wikipedia.org/wiki/Model_collapse) pada model yang dilatih dengan keluarannya sendiri. Lingkaran serupa dapat terjadi di dalam organisasi ketika asisten meringkas tiket yang ditulis asisten dari artikel yang diringkas asisten.
- **Garis dasar yang hanyut.** Jika distribusi data berubah karena AI, tren dan ambang tak lagi bermakna seperti sebelumnya. Ini mirip [pergeseran konsep](https://en.wikipedia.org/wiki/Concept_drift) dalam pembelajaran mesin, ketika hubungan antara masukan dan hasil berubah dari waktu ke waktu. Kenaikan volume tiket mungkin mencerminkan pembuatan tiket yang lebih mudah, bukan lebih banyak masalah.

Tujuan agile penting di sini. Pengiriman berkelanjutan, perbaikan berkelanjutan, dan kecepatan berkelanjutan semuanya bergantung pada sinyal yang jelas. Orang yang termotivasi sebaiknya tidak diminta menyusuri derau buatan mesin atau memverifikasi tumpukan keluaran dengan kecepatan yang tak berkelanjutan. Pemangku kepentingan yang terlibat berkelanjutan juga pertahanan terbaik: mereka akan memberi tahu Anda ketika laporan tak lagi membantu.

Topik ini memberi ukuran untuk memperhatikan inflasi dan pengenceran, dan pasangan yang mengungkapnya. Ia membangun di atas fondasi dan ukuran pekerjaan berbantuan (lihat topik 10.1, AI dalam pengukuran manajemen layanan, dan topik 10.2, Mengukur pekerjaan berbantuan AI).

## Prinsip utama

- **Pasangkan setiap metrik volume atau kecepatan dengan pemeriksaan kebermanfaatan.** Seseorang menilai apakah keluaran berguna.
- **Ukur sampai hasil yang selesai dan terverifikasi.** Kecepatan draf pertama adalah jebakan.
- **Awasi beban verifikasi.** Ia tumbuh diam-diam dan menghabiskan waktu yang dihemat.
- **Lindungi sinyal.** Jaga basis pengetahuan, antrean, dan peringatan cukup bersih untuk dipercaya.
- **Putuskan lingkaran umpan balik.** Jangan biarkan konten hasil generasi menyuapi generasi tanpa tinjauan.
- **Tetapkan garis dasar baru ketika data bergeser.** Tren lintas pergeseran teknologi butuh kehati-hatian.
- **Utamakan keluaran yang lebih sedikit dan lebih baik.** Lebih sedikit bisa lebih banyak ketika perhatian adalah sumber daya pembatas.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rasio keluaran-ke-hasil | Volume keluaran relatif terhadap hasil yang dimaksudkan untuk dihasilkannya | hitungan keluaran (tiket, artikel, perubahan) / ukuran hasil (masalah terselesaikan, artikel terpakai, perubahan bertahan), pada periode yang sama, dilacak sebagai tren | rasio | Pelacak kerja, basis pengetahuan, ukuran hasil | Perbaikan berkelanjutan; pengukuran dan pelaporan | Perangkat lunak berfungsi di atas volume dokumentasi | Bulanan |
| Porsi butir berguna | Porsi butir bersampel yang dinilai berguna oleh peninjau berkualifikasi | butir bersampel dinilai berguna (benar, relevan, tidak duplikat) / butir yang disampel | persen | Tinjauan sampel acak | Manajemen pengetahuan; penjaminan mutu | Definisi selesai untuk konten | Bulanan |
| Beban verifikasi | Waktu manusia yang dihabiskan memeriksa dan mengoreksi pekerjaan hasil generasi per unit keluaran | jam tinjauan dan koreksi / unit keluaran, dilacak sebagai tren | jam per unit | Estimasi waktu, data alat tinjauan | Manajemen keuangan layanan; perbaikan berkelanjutan | Kapasitas tinjauan sebagai kendala | Bulanan |
| Tingkat redundansi konten | Porsi butir pengetahuan yang menduplikasi atau banyak tumpang tindih dengan yang lain | butir ditandai duplikat atau tumpang tindih dalam tinjauan atau oleh pencocokan / butir dalam basis pengetahuan | persen | Tinjauan basis pengetahuan, laporan pencocokan | Manajemen pengetahuan | Satu sumber kebenaran | Kuartalan |
| Porsi pengetahuan hasil generasi yang ditinjau | Porsi butir pengetahuan hasil generasi AI yang telah ditinjau dan disetujui orang berkualifikasi sebelum diterbitkan | butir hasil generasi diterbitkan dengan tinjauan disetujui / butir hasil generasi diterbitkan | persen | Metadata basis pengetahuan | Manajemen pengetahuan; pemberdayaan perubahan | Tinjauan sebelum rilis | Bulanan |
| Aliran masuk backlog terhadap penyelesaian | Pertumbuhan pekerjaan yang datang relatif terhadap pertumbuhan pekerjaan terselesaikan, untuk antrean yang dipengaruhi AI | (perubahan butir dibuat) / (perubahan butir diselesaikan), dibandingkan dengan garis dasar pra-AI | rasio | Riwayat tiket dan pelacak | Manajemen insiden; manajemen permintaan layanan | Keseimbangan alur | Bulanan |
| Bendera pergeseran metrik | Jumlah metrik yang definisi atau distribusinya bergeser nyata setelah AI diperkenalkan, ditinjau dan diberi catatan | metrik ditandai dalam tinjauan / metrik dalam register | hitungan; persen | Tinjauan register metrik, pemeriksaan distribusi | Pengukuran dan pelaporan | Retrospektif tentang pengukuran | Kuartalan |

Definisikan “berguna” dalam rubrik tertulis: benar, relevan dengan kebutuhan nyata, tidak duplikat, dan terkini. Beban verifikasi menghitung waktu yang dihabiskan orang, termasuk waktu memberi prompt lagi, dan mengecualikan waktu yang hanya menunggu. Porsi yang ditinjau adalah kendali: pengetahuan hasil generasi yang tak ditinjau dilacak terpisah dan dijaga berlabel terlihat. Bendera pergeseran metrik adalah diskusi, bukan hukuman: bendera berarti seseorang telah memutuskan apakah menyesuaikan definisi, memberi catatan pada tren, atau menetapkan garis dasar baru. Semua ukuran menggambarkan proses dan konten, bukan individu.

## Rekomendasi

### Pasangkan volume dengan kebermanfaatan

**1. Bangun pemeriksaan kebermanfaatan ke dalam setiap metrik volume.** Untuk setiap ukuran volume atau kecepatan di dasbor Anda, namai ukuran kebermanfaatan yang telah dinilai seseorang. Tiket dibuat dipasangkan dengan mutu penyelesaian, artikel ditulis dengan pemakaian dan akurasi artikel, perubahan digabung dengan retensi dan pengerjaan ulang (lihat topik 10.2, Mengukur pekerjaan berbantuan AI). Tunjukkan bersama, dan bahas ketika keduanya menyimpang.

**2. Ambil sampel dan nilai, secara teratur.** Tiap bulan, tarik sampel acak butir dari aliran yang disentuh AI dan minta orang berkualifikasi menilainya terhadap rubrik tertulis. Catat porsi yang berguna dan alasan butir gagal. Rotasi peninjau dan jaga independen dari penghasil. Pengambilan sampel adalah pertahanan utama terhadap pengenceran yang lambat.

**3. Laporkan hasil sebelum keluaran.** Dalam laporan pimpinan, mulailah dengan hasil: masalah terselesaikan, pengguna puas, cacat dihindari. Taruh hitungan keluaran sesudahnya, sebagai konteks. Jika laporan masih berharga dengan hitungan keluaran dihapus, ia berorientasi baik.

### Kendalikan verifikasi dan derau

**4. Ukur beban verifikasi.** Estimasi waktu yang dihabiskan memeriksa dan mengoreksi pekerjaan hasil generasi, dan lacak sebagai tren per unit keluaran. Jika naik seiring keluaran naik, keuntungan bersih lebih kecil daripada yang disarankan angka generasi, dan peninjau mungkin sedang menuju kelebihan beban. Sertakan beban itu dalam biaya per tugas (lihat topik 10.1, AI dalam pengukuran manajemen layanan).

**5. Batasi apa yang masuk ke sistem.** Putuskan konten hasil generasi apa yang boleh dibuat dan diterbitkan otomatis, dan apa yang butuh tinjauan. Tetapkan batas ukuran dan jumlah perubahan hasil generasi dalam satu tinjauan. Permudah mengatakan tidak pada volume. Antrean yang lebih kecil dengan butir yang lebih jelas melayani pengguna lebih baik.

**6. Kelola basis pengetahuan sebagai produk.** Beri label konten hasil generasi, wajibkan tinjauan sebelum penerbitan, pensiunkan duplikat dan butir basi, dan lacak redundansi dan pemakaian. Basis pengetahuan berguna sebanding dengan seberapa besar pengguna memercayainya. Hapus artikel yang tak dipakai siapa pun dan tak dapat dijamin siapa pun (lihat topik 3.6, Metrik manajemen pengetahuan).

**7. Jaga aliran peringatan dan tiket tetap bersih.** Jika AI membuat tiket dari peringatan atau ringkasan, ukur porsi berguna dan duplikatnya. Setel secara agresif. Perlakukan rasio sinyal-ke-derau yang turun sebagai insiden tersendiri, karena merugikan respons ketika masalah nyata datang.

### Putuskan lingkaran dan awasi garis dasar

**8. Hentikan konten hasil generasi menyuapi dirinya sendiri tanpa diperiksa.** Di mana asisten bersandar pada basis pengetahuan, riwayat tiket, atau laporan masa lalu, pastikan materi hasil generasi dalam sumber itu telah ditinjau, atau diberi label dan dibobot sesuai. Ambil sampel rantainya: pilih satu jawaban dan telusuri kembali lewat sumbernya untuk melihat dari mana asalnya. Lingkaran tak terperiksa memperkuat galat.

**9. Tetapkan garis dasar baru ketika data bergeser.** Setelah memperkenalkan AI, beri catatan pada bagan tren dan, di mana sifat data berubah, mulai garis dasar baru. Periksa distribusi, bukan hanya total: panjang tiket, bauran kategori, dan waktu membuat semuanya mungkin bergeser. Bendera pergeseran metrik memicu percakapan ini (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**10. Cari pantulan.** Ketika tugas menjadi lebih murah, tanyakan apakah permintaan untuknya akan tumbuh. Putuskan sebelumnya cara memakai waktu yang dihemat, agar tidak terserap oleh lebih banyak keluaran bernilai rendah. Tim yang menghasilkan dua kali lebih banyak laporan dengan upaya yang sama mungkin mengerjakan pekerjaan yang kurang berguna.

### Jaga perhatian manusia dalam lingkaran

**11. Lindungi perhatian peninjau dan pengguna.** Kapasitas tinjauan dan perhatian langka. Kurangi volume materi yang harus dibaca orang, beri peninjau beban yang realistis, dan tanyakan apa yang menjadi lebih sulit. Kecepatan berkelanjutan mencakup kecepatan membaca dan menilai (lihat topik 9.2, Metrik kepuasan dan kesejahteraan).

**12. Tanyakan pengguna dan pemangku kepentingan apakah sinyal jelas.** Keterlibatan berkelanjutan orang yang memakai keluaran adalah ujian terbaik. Tanyakan apakah basis pengetahuan lebih mudah atau lebih sulit dipakai, apakah laporan memberi tahu mereka apa yang dibutuhkan, apakah antrean terasa lebih jelas. Jawaban dan komentar mereka sebaiknya dibaca di samping angka.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Rasio keluaran-ke-hasil | Memilih ukuran hasil yang naik bersama volume; mengubah periode | Hasil ditetapkan di register; bandingkan dengan kepuasan dan tingkat buka kembali |
| Porsi butir berguna | Menyampel butir mudah; rubrik longgar; peninjau dipengaruhi penghasil | Sampel acak; rubrik tertulis; peninjau independen dan bergilir |
| Beban verifikasi | Tidak mencatat waktu tinjauan; memindahkan pemeriksaan ke tim hilir | Sertakan pengerjaan ulang hilir; tanyakan peninjau soal beban |
| Tingkat redundansi konten | Aturan pencocokan sempit yang melewatkan duplikat; menggabung butir berbeda | Ambil sampel duplikat dengan tangan; catat aturan penggabungan |
| Porsi pengetahuan hasil generasi yang ditinjau | Menandai tinjauan selesai tanpa membaca; meninjau secara massal | Ambil sampel tinjauan untuk substansi; waktu per tinjauan; tingkat galat dalam butir terbitan |
| Aliran masuk backlog terhadap penyelesaian | Menutup butir otomatis; memecah butir | Periksa mutu penyelesaian; tingkat buka kembali; ambil sampel butir tertutup |
| Bendera pergeseran metrik | Tidak menandai untuk menghindari pekerjaan; menandai segalanya | Tinjau semua metrik tiap kuartal; wajibkan keputusan untuk tiap bendera |

Pembacaan yang sehat adalah porsi butir berguna yang stabil atau naik seiring volume tumbuh, beban verifikasi yang diketahui dan terjangkau, basis pengetahuan dengan redundansi rendah dan konten hasil generasi yang ditinjau, antrean dengan sinyal jelas, dan pandangan pimpinan yang dimulai dengan hasil.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Hitung keluaran | Mudah, akrab | Menggelembung; menghargai volume |
| Ukur hasil | Mencerminkan nilai | Lebih lambat; lebih sulit diatribusikan |
| Ambil sampel dan nilai | Mendeteksi pengenceran | Butuh peninjau terampil; upaya |
| Penilaian mutu otomatis | Dapat diskalakan | Opini model lain; dapat berbagi titik buta yang sama |
| Tinjau semua yang dihasilkan | Aman | Menghapus manfaat; peninjau kelebihan beban |
| Tinjau sampel | Praktis | Sebagian butir buruk lolos |
| Izinkan generasi terbuka | Cepat, luas | Derau; kepercayaan terkikis |
| Batasi generasi pada pemakaian yang disetujui | Sinyal lebih bersih | Adopsi lebih lambat; manfaat terlewat |

Jawaban prosanya adalah mengukur hasil, mengambil sampel dan menilai kebermanfaatan bersama orang, membatasi apa yang masuk ke penyimpanan bersama tanpa tinjauan, dan meninjau kembali garis dasar. Pakai penilaian otomatis sebagai bantuan dan bukan sebagai hakim.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Angka kita mana yang naik sejak kita mulai memakai AI, dan apa yang dilakukannya bagi orang yang kita layani?**
Daftar angkanya. Untuk masing-masing, lihat hasil yang dimaksudkan untuk dicerminkannya. Fasilitator sebaiknya mencatat di mana hasil tidak bergerak. Pasangkan angka itu dengan pemeriksaan kebermanfaatan.

**2. Seberapa banyak yang kita terbitkan atau buat bulan lalu yang akan senang kita bela baris demi baris?**
Ambil sampel acak dan bacalah bersama. Tandai apa yang berguna, tipis, salah, atau duplikat. Bahas tingkat dan sebabnya. Sepakati standar untuk apa yang masuk penyimpanan bersama.

**3. Di mana pemeriksaan menjadi bottleneck kita?**
Tanyakan peninjau. Lihat antrean tinjauan, kedalaman tinjauan, dan upaya yang kini mereka pikul. Sepakati batas ukuran atau jumlah butir hasil generasi per tinjauan, dan cara mengukur bebannya.

**4. Konten hasil generasi apa yang menyuapi konten hasil generasi lain di sini?**
Telusuri jawaban tipikal kembali ke sumbernya. Di mana rantai dimulai? Bahas di mana seseorang sebaiknya memeriksa rantai, atau memberi label konten.

**5. Apa yang akan dikatakan pengguna tentang basis pengetahuan kita sekarang, dibanding setahun lalu?**
Baca komentar terbaru dan lihat data pemakaian. Tanyakan apakah lebih mudah atau lebih sulit menemukan jawaban tepercaya. Sepakati satu pembersihan dan satu aturan untuk konten baru.

**6. Tren kita mana yang sebaiknya dimulai ulang dengan garis dasar baru?**
Daftar metrik yang bergantung pada volume atau cara butir dibuat. Cari perubahan bentuk sejak AI tiba. Beri catatan pada tren, dan putuskan mana yang butuh garis dasar baru.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman menghasilkan banyak volume dan memikul pemeliharaan. Mereka sebaiknya mengutamakan perubahan yang lebih kecil dan jelas, menjaga materi hasil generasi tertinjau dan berlabel, dan mengawasi retensi dan pengerjaan ulang. Mereka sebaiknya menolak metrik berbasis volume hasil generasi, dan meminta ukuran hasil.

### Tim layanan dan operasi

Tim operasi hidup dalam antrean, peringatan, dan basis pengetahuan yang dirusak pengenceran. Mereka sebaiknya menyetel tiket dan peringatan buatan AI untuk menjaga sinyal kuat, meninjau pengetahuan hasil generasi sebelum diterbitkan, dan melaporkan ketika aliran menjadi derau. Mereka berada di posisi terbaik menilai kebermanfaatan.

### Kepemimpinan dan tata kelola

Pemimpin menerima dasbor yang didistorsi inflasi. Mereka sebaiknya meminta hasil lebih dulu, mewajibkan pemeriksaan kebermanfaatan di samping volume, mendanai kapasitas tinjauan, dan menerima bahwa sebagian ukuran perlu garis dasar baru. Tata kelola sebaiknya memeriksa bahwa konten hasil generasi di penyimpanan bersama ditinjau dan diberi label.

### Pelanggan dan pengguna

Pengguna menanggung biaya pengenceran ketika jawaban salah, artikel saling bertentangan, dan balasan panjang dan kosong. Mereka menginginkan bantuan yang singkat, benar, dan relevan. Reaksi mereka terhadap mutu apa yang mereka terima adalah ujian langsung apakah sinyal bertahan.

## Dalam praktik: contoh ITIL agile

Kelompok TI sebuah perusahaan farmasi global mengaktifkan asisten AI untuk menyusun artikel pengetahuan, meringkas tiket, dan menyiapkan laporan status mingguan. Dalam satu kuartal, dasbor tampak luar biasa. Angka di bawah bersifat ilustratif.

Artikel pengetahuan yang dibuat naik dari 140 menjadi 610 per bulan. Tiket membawa ringkasan terperinci tulisan AI. Laporan mingguan mencapai dua belas halaman. Manajer mutu layanan memperhatikan bahwa kepuasan terhadap swalayan turun dan service desk melaporkan lebih banyak kontak “artikel tidak membantu.” Ia menyampel 100 artikel baru bersama dua agen berpengalaman. Hanya 54 yang dinilai berguna: 23 menduplikasi artikel yang ada, 15 berisi langkah usang atau keliru, dan 8 terlalu samar untuk ditindaklanjuti. Dari artikel baru, 71 persen diterbitkan tanpa tinjauan manusia. Basis pengetahuan kini memegang sekitar 3.200 artikel, dengan tingkat redundansi konten yang ia taksir 28 persen dibanding 9 persen setahun lalu. Agen melaporkan bahwa menemukan jawaban tepercaya memakan waktu lebih lama. Beban verifikasi bagi penyunting artikel service desk tumbuh menjadi sekitar 40 jam seminggu, naik dari 12. Ringkasan tiket tulisan AI membuat balasan hasil generasi AI berikutnya bersandar pada teks yang tak ditulis siapa pun, dan dalam penelusuran lima balasan kembali melalui sumbernya, dua bersandar pada ringkasan yang salah menyatakan masalah. Laporan status mingguan, ketika dibaca, sedikit mengatakan hal yang tak ada dalam yang sebelumnya, dan pemangku kepentingan berhenti membaca melampaui halaman dua.

Ia mengusulkan empat perubahan, yang diadopsi tim pimpinan layanan dan pemilik pengetahuan. Artikel hasil generasi butuh tinjauan penyunting bernama sebelum penerbitan, dan diberi label sampai disetujui. Batas satu artikel hasil generasi per kluster topik mencegah duplikat, dan penyisiran menggabung atau memensiunkan butir redundan. Templat laporan dipangkas menjadi dua halaman yang dimulai dengan hasil, dan AI dipakai hanya untuk menyusun bagian yang lalu disunting seseorang. Ringkasan tiket ditandai sebagai hasil generasi, dan sampel diperiksa tiap bulan. Dasbor melaporkan porsi butir berguna, tingkat redundansi, porsi yang ditinjau, dan beban verifikasi di samping hitungan artikel.

Setelah dua kuartal, artikel dibuat per bulan turun menjadi 190, porsi butir berguna naik menjadi 91 persen, tingkat redundansi turun menjadi 11 persen, porsi yang ditinjau 100 persen, dan beban verifikasi stabil di sekitar 16 jam seminggu. Kepuasan swalayan pulih dan kontak “artikel tidak membantu” turun. Pemangku kepentingan membaca laporan dua halaman. Seorang direktur meminta sasaran 1.000 artikel sebulan untuk menunjukkan nilai program AI. Manajer mutu layanan menjelaskan bahwa hitungan itulah masalahnya, dan mengusulkan melacak kebermanfaatan dan pemakaian. Keputusan dicatat.

## Sudut pandang sektor

**Startup.** Generasi murah dan waktu tinjauan langka. Jaga dokumentasi dan tiket singkat, tinjau apa yang akan dibaca pelanggan, dan hapus dengan bebas. Himpunan artikel yang kecil dan benar mengalahkan himpunan besar yang diragukan.

**Bisnis kecil.** Kapasitas untuk meninjau sedikit, jadi batasi apa yang dihasilkan perkakas. Utamakan segelintir panduan dan templat terverifikasi. Waspadai menerbitkan materi hasil generasi di halaman publik tanpa memeriksanya.

**Perusahaan besar.** Skala memperkuat derau. Tetapkan tata kelola konten dengan pemilik, label, dan aturan tinjauan, ukur kebermanfaatan di seluruh basis pengetahuan, dan jalankan pembersihan berkala. Bagikan rubrik antar-tim dan bandingkan tren, bukan tim.

**Pemerintah dan sektor publik.** Konten publik harus akurat dan aksesibel, dan galat dapat merugikan. Wajibkan tinjauan atas informasi publik hasil generasi, simpan catatan bagaimana dihasilkan, dan terapkan standar bahasa lugas dan aksesibilitas. Aturan retensi dan arsip mungkin berlaku pada materi hasil generasi (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya menjaga dari inflasi sederhana: waktu tinjauan untuk pengambilan sampel, upaya editorial untuk konten hasil generasi, perkakas untuk deteksi duplikat, dan upaya menetapkan garis dasar baru pada tren. Biaya tidak melakukannya lebih besar tetapi tersebar: pengguna yang berhenti memercayai swalayan, peninjau yang kehabisan tenaga, keputusan yang dibuat atas angka yang digelembungkan, dan proyek pembersihan.

Bangun kasus dari data Anda sendiri: porsi butir berguna dan beban verifikasi dari waktu ke waktu, volume kontak yang disebabkan konten tak membantu, dan biaya pembersihan basis pengetahuan. Hindari memakai angka terbitan tentang mutu konten hasil generasi, yang sangat bervariasi menurut perkakas, tugas, dan metode. Sertakan biaya yang dihindari dari kerusakan reputasi karena menerbitkan informasi yang salah (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Merayakan volume.** Menghargai derau. Rayakan hasil dan kebermanfaatan.
- **Kecepatan draf pertama sebagai kisah produktivitas.** Penghematan bisa lenyap dalam pemeriksaan. Ukur waktu ke hasil terverifikasi.
- **Menerbitkan konten hasil generasi tanpa tinjauan.** Kepercayaan terkikis diam-diam. Tinjau dan beri label.
- **Membiarkan konten hasil generasi menyuapi generasi.** Galat bertumpuk. Periksa rantainya.
- **Garis dasar yang tak berubah.** Tren menyesatkan setelah pergeseran teknologi. Beri catatan dan tetapkan garis dasar baru.
- **Membebani peninjau.** Tinjauan menjadi stempel karet. Batasi volume dan ukur bebannya.
- **Memakai hakim AI untuk segalanya.** Ia mungkin berbagi titik buta penghasil. Jaga manusia dalam lingkaran.
- **Mengabaikan pantulan.** Pekerjaan yang lebih murah menarik lebih banyak pekerjaan. Putuskan untuk apa waktu yang dihemat.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Pemasangan dan pengambilan sampel | Volume dilaporkan sendirian | Kesan informal tentang mutu | Setiap metrik volume dipasangkan dengan pemeriksaan kebermanfaatan bersampel | Kebermanfaatan, beban, dan redundansi dikelola dengan target untuk tinjauan bukan volume | Pandangan seluruh organisasi tentang mutu sinyal; rubrik dibagikan dengan mitra |
| Konten dan lingkaran | Konten hasil generasi bercampur | Sedikit pemberian label | Konten hasil generasi diberi label dan ditinjau sebelum penerbitan; rantai disampel | Lingkaran dipantau; penyimpanan dikurasi; duplikat dipensiunkan sesuai jadwal | Asal-usul dilacak ujung ke ujung lintas perkakas dan pemasok |
| Garis dasar dan perhatian | Tren dibaca melintasi pergeseran | Catatan pada beberapa bagan | Garis dasar diatur ulang di mana data berubah; pantulan dipertimbangkan | Bendera pergeseran ditinjau kuartalan; beban peninjau dikelola | Desain metrik beradaptasi terus-menerus pada perubahan teknologi bersama pemangku kepentingan |

## Daftar periksa

- [ ] Setiap metrik volume atau kecepatan punya pendamping kebermanfaatan yang dinilai seseorang.
- [ ] Sampel acak butir yang disentuh AI ditinjau bulanan terhadap rubrik tertulis.
- [ ] Beban verifikasi diestimasi dan dilacak sebagai tren.
- [ ] Pengetahuan hasil generasi diberi label dan ditinjau sebelum penerbitan.
- [ ] Redundansi dalam basis pengetahuan diukur dan dikurangi.
- [ ] Aliran peringatan dan tiket dipantau untuk porsi berguna dan duplikat.
- [ ] Rantai dari keluaran hasil generasi kembali ke sumbernya disampel.
- [ ] Tren melintasi pengenalan AI diberi catatan atau ditetapkan garis dasar baru.
- [ ] Laporan pimpinan dimulai dengan hasil.
- [ ] Pengguna dan pemangku kepentingan ditanya apakah sinyal lebih jelas atau lebih bising.

## Prompt AI

**Buat rubrik kebermanfaatan.**

```text
Susun rubrik singkat (tidak lebih dari enam kriteria) untuk menilai apakah
[knowledge article, ticket summary, status report] berguna di [type of
organization]. Sertakan kebenaran, relevansi dengan kebutuhan nyata, duplikasi,
kekinian, dan kejelasan, dengan peringkat tiga tingkat dan contoh tiap tingkat.
Jangan mengarang statistik. Daftar asumsi Anda dan cara menjaga peninjau tetap
konsisten.
```

**Analisis penurunan sinyal.**

```text
Sejak memperkenalkan AI untuk [task], angka ini berubah: [paste volumes,
resolution, satisfaction, reopen rate, reviewer hours]. Gambarkan apa yang
disarankan polanya tentang inflasi atau pengenceran, perubahan mana yang mungkin
karena pembuatan yang lebih mudah, apa yang disampel berikutnya, dan metrik mana
yang mungkin butuh garis dasar baru. Jangan mengasumsikan sebab yang tak dapat
didukung data. Daftar asumsi Anda.
```

**Rencanakan pembersihan basis pengetahuan.**

```text
Basis pengetahuan kami punya [number] artikel, di antaranya [number] dihasilkan
dalam [period] terakhir. Usulkan rencana pembersihan: cara mendeteksi duplikat dan
butir basi, cara memprioritaskan menurut pemakaian, cara meninjau artikel hasil
generasi, aturan untuk mencegah terulang, dan ukuran untuk dilacak. Jangan
mengasumsikan perkakas tertentu. Daftar asumsi Anda dan risiko.
```

**Telusuri rantai konten hasil generasi.**

```text
Berikut jawaban hasil generasi AI dan sumber yang dipakainya: [paste]. Telusuri
tiap klaim ke sumbernya dan tandai apakah sumber ditulis manusia, konten hasil
generasi yang ditinjau, atau konten hasil generasi yang tak ditinjau. Identifikasi
di mana galat dapat masuk dan sarankan pemeriksaan. Jangan mengasumsikan fakta di
luar teks. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pendamping kebermanfaatan bagi metrik volume atau kecepatan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa metrik yang dipengaruhi AI memasangkan volume dengan kebermanfaatan bersampel dan membawa vektor manipulasi serta pagar pembatasnya.

## Poin penting

- Ketika AI membuat keluaran murah, metrik volume dan kecepatan menggelembung dan porsi yang berguna dapat turun.
- Pasangkan setiap ukuran volume atau kecepatan dengan pemeriksaan kebermanfaatan bersampel yang dinilai orang.
- Ukur waktu ke hasil terverifikasi dan beban verifikasi, karena pemeriksaan menjadi bottleneck.
- Beri label dan tinjau konten hasil generasi sebelum masuk penyimpanan bersama, dan cegah lingkaran menyuapi dirinya sendiri tanpa diperiksa.
- Tetapkan garis dasar baru pada tren setelah pergeseran teknologi, dan mulai laporan dengan hasil.
- Putuskan sebelumnya untuk apa waktu yang dihemat, dan lindungi perhatian peninjau dan pengguna.

## Referensi dan bacaan lanjutan

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
