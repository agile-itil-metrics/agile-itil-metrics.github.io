# Metrik kualitas konfigurasi dan CMDB

**Basis data konfigurasi hanya layak dipertahankan ketika orang cukup memercayainya untuk memakainya dalam perubahan atau insiden, jadi ukur mutunya dari seberapa baik ia menjawab pertanyaan nyata, dan biarkan tim yang memiliki layanan menjaga catatan mereka sendiri tetap terkini.**

## Gambaran umum dan motivasi

Ketika server basis data gagal pukul tiga pagi, seseorang bertanya layanan mana yang bergantung padanya. Ketika tim merencanakan perubahan, seseorang bertanya apa lagi yang dapat rusak. Jawabannya seharusnya datang dari catatan benda-benda yang menyusun layanan Anda dan bagaimana semuanya terhubung. Catatan itu adalah pokok bahasan manajemen konfigurasi, dan basis data di baliknya adalah basis data manajemen konfigurasi, biasanya disingkat CMDB.

[Item konfigurasi](https://en.wikipedia.org/wiki/Configuration_item) (CI) adalah komponen apa pun yang perlu dikelola untuk menyampaikan layanan TI: server, aplikasi, basis data, perangkat jaringan, akun cloud, kontrak. [Basis data manajemen konfigurasi](https://en.wikipedia.org/wiki/Configuration_management_database) menyimpan informasi tentang CI, atributnya, dan hubungan di antaranya. Di mana manajemen aset bertanya apa yang Anda miliki, siapa pemiliknya, dan berapa biayanya (lihat topik 7.1, Metrik manajemen aset TI), manajemen konfigurasi bertanya bagaimana bagian-bagian saling cocok dan apa bergantung pada apa.

CMDB punya reputasi campuran, dan reputasi itu pantas. Banyak yang dibangun sebagai peta komprehensif, diisi data yang membusuk lebih cepat daripada yang dapat diperbaiki siapa pun, lalu ditinggalkan. Tradisi agile dan DevOps menawarkan titik awal yang lebih baik. Tim yang menggambarkan infrastrukturnya sebagai kode punya definisi otoritatif dan berversi tentang apa yang mereka jalankan, dan dapat menerbitkannya ke catatan bersama secara otomatis. [Infrastruktur sebagai kode](https://en.wikipedia.org/wiki/Infrastructure_as_code) mengubah catatan menjadi hasil sampingan pengiriman. ITIL 4 menggambarkan praktik itu sebagai manajemen konfigurasi layanan dan menekankan informasi yang dibutuhkan untuk mendukung keputusan, bukan kelengkapan demi kelengkapan.

Mutu dalam catatan konfigurasi punya beberapa bagian, dan terpetakan pada gagasan lebih luas tentang [integritas data](https://en.wikipedia.org/wiki/Data_integrity):

- **Kelengkapan:** CI dan atribut yang penting hadir.
- **Akurasi:** apa yang dikatakan catatan cocok dengan kenyataan.
- **Ketepatan waktu:** perubahan muncul di catatan cukup cepat untuk berguna.
- **Konsistensi:** hal yang sama tidak dicatat dua kali dengan nama berbeda. Mencocokkan catatan yang merujuk hal yang sama adalah masalah [resolusi entitas](https://en.wikipedia.org/wiki/Entity_resolution).
- **Mutu hubungan:** dependensi antar-CI ada dan benar. Di sinilah sebagian besar nilai, dan sebagian besar pembusukan, hidup.

Ujian terdalam CMDB adalah pemakaian. Catatan yang dirujuk orang selama insiden dan perubahan, dan dikoreksi ketika salah, itu sehat. Catatan yang hanya diaudit tidak. Ukuran di bawah karena itu memasangkan ukuran mutu dengan ukuran pemakaian.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku dengan tikungan: kelengkapan mudah digelembungkan dengan nilai bawaan, dan akurasi mudah diklaim tanpa memeriksa. Berkeraslah pada bukti independen dan pada ukuran pemakaian (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Mulai dari pertanyaan.** Putuskan apa yang Anda butuhkan dijawab catatan, dan bangun hanya itu.
- **Utamakan catatan yang lebih kecil dan dipercaya daripada yang lebih besar dan diragukan.** Lingkup tumbuh ketika kepercayaan diperoleh.
- **Biarkan sumber kebenaran menyuapi catatan.** Pipeline, API cloud, dan penemuan sebaiknya menulis ke dalamnya, bukan orang dengan lembar kerja.
- **Biarkan tim layanan memiliki catatan layanan mereka.** Mereka tahu dependensinya, dan merasakan biaya galatnya.
- **Ukur menurut pemakaian selain mutu.** Catatan yang baik dirujuk.
- **Periksa terhadap kenyataan.** Uji catatan dengan bertanya apakah ia memprediksi apa yang terjadi.
- **Perbaiki di sumber.** Catatan yang salah adalah gejala. Temukan proses yang membiarkannya hanyut.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kelengkapan CI | Porsi CI dalam lingkup dengan semua atribut wajib terisi nilai valid | CI dalam lingkup dengan setiap atribut wajib valid / CI dalam lingkup | persen | CMDB, aturan atribut | Manajemen konfigurasi layanan; manajemen aset TI | Definisi selesai mencakup uraian layanan | Bulanan |
| Akurasi CI | Porsi CI bersampel yang catatannya cocok dengan bukti pada atribut wajib | CI bersampel yang cocok pada semua atribut wajib / CI yang disampel | persen | Sampel audit dibandingkan dengan sistem hidup | Manajemen konfigurasi layanan | Keadaan infrastruktur sebagai kode cocok dengan kenyataan | Kuartalan |
| Cakupan dependensi | Porsi layanan kritis yang dependensi hulu dan hilirnya dipetakan dan ditinjau | layanan kritis dengan peta dependensi yang ditinjau dalam 90 hari terakhir / layanan kritis | persen | Hubungan CMDB dan catatan tinjauan | Manajemen konfigurasi layanan; manajemen ketersediaan | Tinjauan arsitektur dan kepemilikan layanan | Kuartalan |
| Tingkat ketepatan prediksi dampak | Porsi insiden dan perubahan tempat layanan yang benar-benar terdampak ada dalam dampak yang diprediksi CMDB | insiden atau perubahan tempat semua layanan terdampak diprediksi / insiden atau perubahan yang ditinjau | persen | Tinjauan pasca-insiden dan catatan perubahan dibandingkan dengan kueri CMDB | Manajemen insiden; pemberdayaan perubahan | Temuan tinjauan tanpa menyalahkan tentang dependensi hilang | Kuartalan |
| Tingkat CI duplikat | Porsi CI yang menduplikasi CI lain | CI yang ditandai duplikat oleh aturan pencocokan dan dikonfirmasi dalam tinjauan / CI dalam lingkup | persen | Laporan pencocokan CMDB dan sampel tinjauan | Manajemen konfigurasi layanan | Satu sumber kebenaran | Bulanan |
| Latensi pembaruan | Jeda antara perubahan CI di dunia nyata dan pembaruannya di CMDB | median dan persentil ke-85 jam atau hari dari peristiwa perubahan sampai pembaruan CMDB | jam atau hari | Peristiwa perubahan dan pipeline dibandingkan dengan stempel waktu CMDB | Manajemen konfigurasi layanan; pemberdayaan perubahan | Pendaftaran otomatis di pipeline | Bulanan |
| Tingkat pemakaian CMDB | Porsi insiden dan perubahan yang merujuk CI, dan di antaranya, porsi tempat pengguna melaporkan catatan membantu | catatan yang merujuk CI valid / insiden dan perubahan pada periode itu; ditambah porsi catatan yang ditinjau tempat data CI membantu | persen | Alat ITSM, prompt umpan balik singkat | Manajemen insiden; pemberdayaan perubahan | Tim memakai catatan bersama dalam pekerjaan mereka | Bulanan |

Definisikan lingkup “CI dalam lingkup” menurut kelas dan kekritisan, dan catat. CI akurat hanya pada atribut yang Anda namai sebagai wajib. Latensi pembaruan dimulai pada peristiwa nyata, seperti deployment atau pembelian, dan berhenti ketika CMDB mencerminkannya. Tingkat ketepatan prediksi dampak membutuhkan langkah tinjauan yang mencatat layanan mana yang sebenarnya terdampak, dan hanya seandal tinjauan itu.

## Rekomendasi

### Putuskan untuk apa catatan itu

**1. Tulis pertanyaan yang harus dijawab CMDB.** Yang tipikal adalah: apa yang bergantung pada komponen ini, siapa pemilik layanan ini, apa yang berubah baru-baru ini, apa yang akan terdampak oleh kegagalan di sini, dan apa yang di luar dukungan. Untuk tiap pertanyaan, namai kelas CI, atribut, dan hubungan yang dibutuhkan. Apa pun yang tidak dibutuhkan untuk menjawab pertanyaan adalah kandidat untuk ditinggalkan.

**2. Mulai dengan layanan yang paling penting.** Pilih segelintir layanan kritis, petakan dari ujung ke ujung, dan benarkan sebelum menambah lebih banyak. Peta andal sepuluh layanan lebih membantu daripada peta meragukan seribu. Perluas seiring kepercayaan dan pemakaian tumbuh.

**3. Definisikan kelas, atribut, dan jenis hubungan dengan sederhana.** Daftar pendek kelas CI (layanan, aplikasi, basis data, host, jaringan, sumber daya cloud) dan jenis hubungan (bergantung pada, berjalan di, terhubung ke, dimiliki oleh) mencakup sebagian besar kebutuhan. Model yang mencoba menangkap segalanya sulit diisi dan lebih sulit dikueri. Simpan model tertulis dan ubah dengan sengaja.

### Suapi catatan dari sumber

**4. Terbitkan dari pipeline dan kode.** Di mana infrastruktur dan aplikasi didefinisikan sebagai kode, minta pipeline pengiriman membuat, memperbarui, dan memensiunkan CI pada setiap perubahan, termasuk informasi kepemilikan dan dependensi yang dideklarasikan di samping kode. Perlakukan deklarasi sebagai bagian definisi selesai untuk layanan. Ini membuat latensi pembaruan mendekati nol dan menjaga catatan selaras dengan yang berjalan.

**5. Pakai penemuan sebagai pendapat kedua.** [Penemuan layanan](https://en.wikipedia.org/wiki/Service_discovery) jaringan dan cloud menemukan apa yang sebenarnya berjalan dan bagaimana terhubung. Bandingkan dengan catatan yang dideklarasikan. Perbedaan adalah temuan: entah deklarasi kehilangan sesuatu atau ada sesuatu berjalan yang seharusnya tidak. Penemuan sendiri menghasilkan data bising tanpa kepemilikan, jadi pakai untuk memeriksa, bukan menulis.

**6. Pakai pengenal stabil dan aturan pencocokan.** Duplikat muncul ketika sumber berbeda menamai hal yang sama secara berbeda. Sepakati pengenal unik untuk tiap kelas CI, catat pengenal sumber, dan jalankan aturan pencocokan untuk menemukan dan menggabung duplikat. Tinjau kecocokan dengan tangan pada sampel, karena penggabungan otomatis dapat menyatukan hal-hal berbeda.

**7. Beri tiap tim layanan kepemilikan irisannya.** Tim yang membangun dan menjalankan layanan berada di posisi terbaik untuk mengetahui dependensinya dan memperhatikan galat. Permudah mereka: templat, tinjauan singkat saat perencanaan, dan umpan balik ketika data mereka dipakai. Tim pusat memiliki model, perkakas, dan pemeriksaan, bukan setiap catatan.

### Ukur mutu dan pemakaian

**8. Audit akurasi dengan pengambilan sampel.** Tiap kuartal, tarik sampel acak CI dan periksa terhadap sistem hidup, dan sampel kedua dari sistem hidup untuk memeriksa bahwa mereka muncul dalam catatan. Laporkan akurasi menurut kelas dan tunjukkan sumber utama galat. Jaga metode sampel tetap agar tren bermakna.

**9. Uji peta terhadap insiden.** Setelah insiden atau perubahan signifikan, bandingkan layanan yang benar-benar terdampak dengan yang diprediksi CMDB. Catat yang terlewat dan perbaiki dependensi yang hilang. Ini ujian akurasi paling bermakna, karena memeriksa catatan terhadap peristiwa, dan tingkat ketepatan membaik seiring peta dikoreksi. Pakai tinjauan tanpa menyalahkan agar orang melaporkan yang terlewat dengan mudah (lihat topik 4.2, Metrik postmortem dan pembelajaran).

**10. Lacak pemakaian dan tanyakan apakah membantu.** Hitung seberapa sering insiden dan perubahan merujuk CI, dan tanyakan penanggap dan penyetuju pertanyaan singkat apakah catatan membantu. Tingkat pemakaian yang naik dengan jawaban positif adalah tanda nilai paling jelas. Tingkat pemakaian rendah berarti orang tidak memercayai catatan atau tidak tahu ia ada, dan keduanya dapat diperbaiki.

**11. Tinjau peta dependensi secara teratur bersama pemilik.** Dependensi berubah seiring perangkat lunak berevolusi. Minta pemilik layanan kritis mengonfirmasi peta mereka tiap kuartal, idealnya sebagai bagian percakapan perencanaan atau arsitektur. Pakai tanggal konfirmasi sebagai atribut, dan tampilkan peta yang terlambat.

### Jaga tetap jujur dan proporsional

**12. Pensiunkan apa yang tak dipakai siapa pun.** Singkirkan kelas dan atribut CI yang tak dibutuhkan pertanyaan mana pun dan tak dirujuk siapa pun. Kolom yang lebih sedikit dan lebih baik menaikkan akurasi. Tinjau model tiap tahun dan catat apa yang dihapus dan mengapa. Catatan yang lebih kecil lebih sedikit untuk dijaga benar, dan membuat ukuran mutu lebih mudah dipenuhi dengan jujur.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Kelengkapan CI | Mengisi atribut wajib dengan nilai bawaan atau placeholder; mempersempit daftar wajib | Hitung nilai bawaan dan placeholder; daftar wajib tetap; sampel akurasi |
| Akurasi CI | Menyampel kelas mudah; mengaudit setelah pembersihan | Sampel acak ditarik independen dari kedua arah; metode tetap |
| Cakupan dependensi | Menandai peta ditinjau tanpa membacanya; memetakan hanya dependensi remeh | Tingkat ketepatan prediksi dampak; periksa sampel peta terhadap lalu lintas hidup |
| Tingkat ketepatan prediksi dampak | Memilih insiden yang berjalan baik; mencatat layanan terdampak secara sempit | Tinjau semua insiden signifikan; peninjau di luar tim pemilik |
| Tingkat CI duplikat | Menggabung CI berbeda untuk menurunkan tingkat; melonggarkan aturan pencocokan | Ambil sampel penggabungan untuk kebenaran; catat aturan penggabungan |
| Latensi pembaruan | Memundurkan tanggal peristiwa perubahan; menghitung hanya pembaruan otomatis | Bandingkan stempel waktu peristiwa dan pembaruan dari sistem sumber; jejak audit |
| Tingkat pemakaian CMDB | Menambah rujukan CI sebagai formalitas; menjadikan kolom wajib dengan nilai apa pun | Periksa bahwa CI yang dirujuk relevan; pertanyaan umpan balik tentang kebermanfaatan |

Pembacaan yang sehat adalah catatan yang lebih kecil dengan akurasi terukur tinggi, peta dependensi yang memprediksi insiden nyata, latensi pembaruan mendekati nol untuk kelas otomatis, dan orang yang mengatakan mereka memakai catatan karena membantu.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| CMDB komprehensif | Pandangan luas; mendukung banyak kasus penggunaan | Mahal dijaga benar; membusuk |
| CMDB minimal yang digerakkan pertanyaan | Dipercaya dan murah | Celah; butuh disiplin pertumbuhan |
| Pengisian digerakkan penemuan | Menemukan yang tak diketahui; upaya manual rendah | Bising; kurang kepemilikan dan tujuan |
| Pengisian digerakkan pipeline | Akurat; latensi rendah | Terbatas pada yang dibangun lewat pipeline |
| Kepemilikan pusat atas catatan | Konsistensi | Lambat; jauh dari pengetahuan |
| Kepemilikan tim atas catatan | Akurat dan cepat | Variasi; butuh templat dan pemeriksaan |
| Model bergaya graf | Alami untuk hubungan dan kueri dampak | Butuh keterampilan dan perkakas |
| Model tabel relasional | Akrab dan sederhana | Canggung untuk kueri dependensi dalam |

Jawaban prosanya adalah mulai kecil dan digerakkan pertanyaan, mengisi dari pipeline dengan penemuan sebagai pendapat kedua, dan menaruh tim layanan sebagai penanggung jawab catatan mereka. [Basis data graf](https://en.wikipedia.org/wiki/Graph_database) dapat membuat pertanyaan dependensi alami untuk diajukan, meski basis data konvensional berfungsi bila model dijaga sederhana.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Pertanyaan apa yang terakhir kita harapkan dapat dijawab CMDB, dan apakah ia bisa?**
Ingat insiden atau perubahan terbaru tempat seseorang mencari dependensi. Apa yang mereka temukan, dan apa yang mereka lakukan sebagai gantinya? Fasilitator sebaiknya mencatat pertanyaan dan apakah catatan dirujuk. Hasilnya adalah kandidat pertama untuk tujuan catatan.

**2. Jika layanan terpenting kita gagal sekarang, seberapa yakin kita pada dampak yang diprediksi?**
Minta dampak yang diprediksi dari CMDB dan bandingkan dengan yang diyakini orang yang mengenal layanan. Catat perbedaannya. Sepakati dependensi mana yang diverifikasi lebih dulu dan siapa yang memeriksanya.

**3. Siapa yang memiliki catatan untuk tiap layanan, dan apakah mereka tahu?**
Daftar layanan kritis dan pemilik entri CMDB-nya. Tanyakan apakah pemilik tahu dan telah meninjaunya belakangan. Di mana pemiliknya “tim CMDB”, bahas cara memindahkan kepemilikan ke tim layanan.

**4. Apa yang kita isi hanya untuk memenuhi kolom wajib?**
Cari nilai bawaan dan placeholder. Itu menunjukkan di mana model meminta lebih dari yang diketahui siapa pun. Putuskan apakah menghapus kolom, mengotomatisasi, atau menemukan sumber nyatanya.

**5. Di mana catatan kita tidak sepakat dengan yang berjalan?**
Bandingkan keluaran penemuan dengan catatan untuk satu layanan. Untuk tiap perbedaan, tanyakan apakah catatan atau kenyataan yang harus berubah. Percakapan cenderung menemukan data basi dan komponen tak berwenang.

**6. Apa yang akan berhenti kita catat?**
Daftar kelas, atribut, dan hubungan yang tak dipakai siapa pun selama enam bulan. Tanyakan apa yang terjadi jika masing-masing lenyap. Sepakati menghapus dua dan amati apakah ada yang memperhatikan.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memegang pengetahuan tentang apa yang menjadi tumpuan layanan mereka dan berada di posisi terbaik menjaga catatan tetap benar. Mereka sebaiknya mendeklarasikan kepemilikan dan dependensi di samping kode mereka, meninjaunya ketika desain berubah, dan memakai catatan saat merencanakan perubahan. Definisi selesai yang mencakup memperbarui uraian layanan menjaga catatan dekat dengan pekerjaan.

### Tim layanan dan operasi

Tim operasi merujuk catatan selama insiden dan perubahan, jadi merasakan galatnya lebih dulu. Mereka sebaiknya melaporkan yang terlewat dalam tinjauan, menjalankan pemeriksaan penemuan, merawat aturan pencocokan, dan memberi umpan balik kepada pemilik. Mereka juga mengoperasikan perkakas dan sampel audit.

### Kepemimpinan dan tata kelola

Pemimpin ingin dampak dan risiko terlihat, dan sering menyponsori program CMDB besar yang mengecewakan. Mereka sebaiknya meminta bukti pemakaian dan akurasi sebagai ganti hitungan catatan, mendanai integrasi pipeline, dan menerima lingkup lebih kecil yang dikerjakan dengan baik. Tata kelola sebaiknya mengharapkan melihat tingkat ketepatan prediksi dampak dan daftar celah.

### Pelanggan dan pengguna

Pengguna diuntungkan ketika insiden didiagnosis lebih cepat dan perubahan lebih kecil kemungkinan merusak layanan yang bergantung. Mereka jarang melihat CMDB, meski melihat efeknya dalam komunikasi yang menamai layanan terdampak dengan benar dan dalam lebih sedikit kejutan setelah perubahan. Umpan balik mereka setelah insiden menunjukkan apakah gambaran dampak benar.

## Dalam praktik: contoh ITIL agile

Kelompok teknologi sebuah maskapai penerbangan nasional menjalankan sekitar 300 aplikasi dan platform pemesanan pelanggan. Angka di bawah bersifat ilustratif.

CMDB memegang 180.000 CI dan diisi alat penemuan lima tahun lalu. Kepala manajemen layanan ingin tahu apakah layak dipertahankan. Ia meminta tim kecil mengujinya. Untuk mutu, mereka mengaudit 150 CI bersampel dan mendapati 71 persen akurat pada lima atribut wajib. Untuk peta, mereka meninjau 20 insiden signifikan terakhir dan membandingkan layanan yang benar-benar terdampak dengan yang diprediksi CMDB: ia memprediksi semua layanan terdampak pada 6 dari 20, tingkat ketepatan 30 persen. Untuk pemakaian, 12 persen insiden pada kuartal terakhir merujuk CI, dan dalam survei singkat penanggap, kebanyakan mengatakan mereka mengandalkan halaman wiki terpisah. CI duplikat adalah 9 persen dari total.

Tim membuat empat keputusan bersama pemilik layanan. Ia menyusutkan lingkup ke 40 layanan yang membawa pelanggan terbanyak, dengan lima kelas CI dan empat jenis hubungan. Ia meminta setiap tim layanan mendeklarasikan pemilik, dependensi, dan lokasi runtime dalam berkas pendek yang disimpan bersama kode mereka, yang diterbitkan pipeline ke CMDB pada setiap rilis. Ia menjalankan penemuan mingguan dan melaporkan perbedaan kepada pemilik. Ia menambah kolom pada tinjauan insiden, “apakah prediksi CMDB benar?” dan memperbaiki setiap yang terlewat dalam dua pekan.

Dua kuartal kemudian, CMDB yang dilingkupkan punya 14.000 CI, akurasi pada set bersampel adalah 92 persen, latensi pembaruan dari rilis ke catatan di bawah satu jam untuk layanan dalam pipeline, dan tingkat ketepatan pada 12 insiden terakhir adalah 75 persen. Pemakaian CMDB dalam insiden naik menjadi 58 persen, dan penanggap mengatakan halaman wiki tidak lagi dibutuhkan. Kepala operasi meminta rencana membawa 260 aplikasi lain masuk sekaligus. Kepala manajemen layanan mengusulkan menambah sepuluh layanan per kuartal, setelah masing-masing meraih tingkat ketepatan di atas tingkat yang disepakati pada insiden uji, dan menjelaskan bahwa catatan luas sebelumnya tak pernah dipercaya. Keputusan dicatat, dengan tinjauan tiap kuartal.

## Sudut pandang sektor

**Startup.** Tidak banyak kebutuhan CMDB selain katalog layanan dan kode infrastruktur. Simpan pemilik layanan dan dependensi di repositori, dan hasilkan peta darinya. Tambahkan basis data hanya ketika pertanyaan melampaui berkas.

**Bisnis kecil.** Diagram sederhana dan daftar sistem dengan pemilik dan vendor mungkin cukup. Perbarui setelah setiap perubahan signifikan. Tahan membeli platform untuk aset kecil, tetapi jaga diagram tetap terkini, karena sangat berharga saat gangguan.

**Perusahaan besar.** Skala butuh model, kepemilikan terfederasi, dan integrasi dengan beberapa sumber, termasuk akuisisi. Standarkan pengenal dan model inti, biarkan tim memperluasnya dalam aturan, dan ukur pemakaian dan akurasi menurut domain. Harapkan menjalankan fungsi pencocokan dan pembersihan yang berkelanjutan.

**Pemerintah dan sektor publik.** Layanan sering bertumpu pada sistem berumur panjang, kontraktor, dan infrastruktur bersama, dan dampak insiden dapat memengaruhi publik. Petakan dependensi pada pemasok dan platform bersama secara eksplisit, simpan catatan untuk audit, dan selaraskan dengan perencanaan kelangsungan (lihat topik 5.6, Metrik kelangsungan layanan).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah upaya pemodelan dan tata kelola, integrasi pipeline dan penemuan, sebagian perkakas, dan upaya audit dan perbaikan. Banyak organisasi sudah memiliki platformnya. Pengisian lewat pipeline murah begitu templat ada. Program besar untuk mengisi segalanya sekaligus mahal dan sering gagal.

Imbal hasilnya adalah insiden lebih singkat, perubahan lebih aman, dan lebih sedikit waktu mencari informasi. Bangun kasus dari bukti Anda sendiri: waktu yang dihabiskan penanggap mencari dependensi dalam insiden tipikal, porsi insiden tempat informasi dependensi yang hilang menunda diagnosis, dan perubahan yang menyebabkan dampak tak terduga. Tingkat ketepatan prediksi dampak adalah ukuran langsung apakah catatan akan membantu. Hindari klaim terbitan tentang persentase insiden yang disebabkan perubahan atau biaya gangguan kecuali Anda dapat menelusuri sumbernya. Hitung biaya menjaga catatan besar yang diragukan terhadap nilai catatan kecil yang dipercaya.

## Anti-pola dan jebakan

- **Mengisi segalanya lebih dulu.** Catatan raksasa yang basi menghancurkan kepercayaan. Mulai dengan layanan kritis.
- **Penemuan sebagai satu-satunya sumber.** Ia tak dapat memberi tahu mengapa sesuatu ada atau siapa pemiliknya. Gabungkan dengan deklarasi.
- **Mengaudit kelengkapan dan menyebutnya mutu.** Lengkap dan salah lebih buruk daripada tidak lengkap dan benar. Ambil sampel untuk akurasi.
- **Tim pusat memiliki semua data.** Mereka tidak mengenalnya. Beri tim layanan kepemilikan.
- **Kolom wajib dengan nilai bawaan.** Tampak lengkap dan tak membawa informasi. Hapus atau otomatisasi.
- **Mengukur menurut jumlah CI.** Lebih banyak bukan lebih baik. Ukur akurasi, tingkat ketepatan, dan pemakaian.
- **Mengabaikan hubungan.** Tanpa dependensi, CMDB adalah inventaris. Investasikan pada peta untuk layanan kritis.
- **Menyalahkan orang atas yang terlewat.** Mereka berhenti melaporkan. Perlakukan dependensi yang terlewat sebagai temuan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Lingkup dan model | Apa pun yang ditemukan penemuan | Model didefinisikan; lingkup luas | Model digerakkan pertanyaan; layanan kritis dipetakan | Lingkup tumbuh ketika tingkat ketepatan dan pemakaian membenarkan | Model terfederasi lintas tim dan pemasok; pengenal bersama |
| Pengisian dan mutu | Pemuatan manual atau sekali | Penemuan dan impor terjadwal | Pipeline menerbitkan dari kode; penemuan sebagai pemeriksaan; audit sampel | Akurasi, latensi, dan duplikat diukur dan diplot tren | Umpan waktu nyata dengan rekonsiliasi otomatis dan konfirmasi pemilik |
| Pemakaian | Jarang dirujuk | Dipakai beberapa tim | Dirujuk dalam insiden dan perubahan sebagai praktik standar | Prediksi dampak diuji terhadap insiden; pemakaian dan kebermanfaatan dilacak | Catatan menginformasikan keputusan otomatis dan peta pemasok bersama |

## Daftar periksa

- [ ] Pertanyaan yang harus dijawab CMDB tertulis.
- [ ] Lingkup dibatasi pada layanan kritis, dengan aturan pertumbuhan yang didefinisikan.
- [ ] Model punya himpunan kecil kelas, atribut, dan jenis hubungan.
- [ ] Setiap layanan kritis punya pemilik yang telah mengonfirmasi catatannya dalam kuartal terakhir.
- [ ] Pipeline menerbitkan perubahan CI untuk layanan yang dibangun sebagai kode.
- [ ] Hasil penemuan dibandingkan dengan catatan dan perbedaan ditinjau.
- [ ] Sampel akurasi acak diaudit tiap kuartal ke kedua arah.
- [ ] Tinjauan insiden mencatat apakah dampak yang diprediksi benar.
- [ ] Pemakaian CMDB dalam insiden dan perubahan dilacak, dengan pertanyaan kebermanfaatan.
- [ ] Kelas dan atribut tak terpakai dipensiunkan menurut jadwal.

## Prompt AI

**Definisikan pertanyaan dan lingkup.**

```text
Kami menjalankan [type of organization and services]. Situasi tipikal tempat kami
butuh informasi konfigurasi: [list incidents, changes, audits]. Susun daftar
pertanyaan yang harus dijawab CMDB kami, kelas CI, atribut, dan hubungan yang
dibutuhkan untuk masing-masing, dan lingkup awal minimal berupa layanan paling
kritis. Jangan mengarang perkakas. Daftar asumsi Anda dan apa yang dikonfirmasi
dengan pemilik layanan.
```

**Analisis prediksi dampak yang meleset.**

```text
Setelah insiden [description], CMDB memprediksi layanan terdampak ini: [list],
dan layanan yang benar-benar terdampak adalah: [list]. Jelaskan alasan yang mungkin
untuk tiap perbedaan (dependensi hilang, hubungan salah, data basi, dependensi
tidak langsung), sarankan cara memverifikasi masing-masing, dan usulkan perbaikan
di sumber. Jangan mengasumsikan sebab yang tidak dapat didukung informasi. Daftar
asumsi Anda.
```

**Rancang berkas deklarasi untuk tim layanan.**

```text
Usulkan deklarasi pendek yang dapat dibaca manusia yang disimpan tim layanan
bersama kodenya untuk menggambarkan layanan bagi CMDB: pemilik, kontak dukungan,
tingkat, dependensi, lokasi runtime, dan klasifikasi data. Sertakan aturan validasi
yang dapat diterapkan pipeline dan contoh minimal untuk [type of service]. Jaga
sebatas yang dibutuhkan pertanyaan dalam [paste questions]. Daftar asumsi Anda dan
kolom untuk ditinjau bersama keamanan.
```

**Rencanakan audit akurasi kuartalan.**

```text
CMDB kami memegang [number] CI dalam kelas ini: [list]. Rancang audit kuartalan
dengan sampel acak ditarik dari kedua arah (dari CMDB ke kenyataan, dan dari
kenyataan ke CMDB), katakan apa yang diperiksa untuk tiap kelas, bagaimana
melaporkan akurasi dan sumber galat dengan jujur, dan bagaimana menghindari menilai
pekerjaan rumah sendiri. Jangan melebih-lebihkan presisi statistik. Daftar asumsi
Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik kualitas konfigurasi.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik CMDB membawa vektor manipulasi, pagar pembatas, dan aturan bukti independennya.

## Poin penting

- Bangun CMDB untuk menjawab pertanyaan bernama tentang layanan yang paling penting, dan tumbuhkan seiring kepercayaan tumbuh.
- Isi dari pipeline dan kode, pakai penemuan sebagai pendapat kedua, dan biarkan tim layanan memiliki catatan mereka.
- Uji mutu terhadap peristiwa: bandingkan dampak yang diprediksi dengan yang benar-benar terjadi dalam insiden.
- Ukur pemakaian dan kebermanfaatan, bukan jumlah CI.
- Ambil sampel akurasi dari bukti independen ke kedua arah.
- Pensiunkan apa yang tak dipakai siapa pun, dan perbaiki galat di sumbernya.

## Referensi dan bacaan lanjutan

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
