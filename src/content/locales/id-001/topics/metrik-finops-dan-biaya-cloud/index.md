# Metrik FinOps dan biaya cloud

**Belanja cloud diputuskan oleh para insinyur setiap hari, jadi beri orang yang membangun dan menjalankan layanan data biaya, konteks, dan wewenang untuk bertindak atasnya, dan ukur pemborosan, alokasi, dan biaya unit dengan kecermatan yang sama seperti Anda memperlakukan keandalan.**

## Gambaran umum dan motivasi

Di pusat data, belanja diputuskan lewat pesanan pembelian dan tiba sebagai beberapa langkah besar. Di cloud, seorang pengembang dapat mengikat organisasi pada biaya berulang dengan beberapa baris konfigurasi, dan lingkungan uji yang terlupakan dapat berbiaya berbulan-bulan. [Komputasi awan](https://en.wikipedia.org/wiki/Cloud_computing) menawarkan akses sesuai permintaan ke sumber daya komputasi, dan model [bayar sesuai pemakaian](https://en.wikipedia.org/wiki/Pay_as_you_go) yang menyertainya berarti tagihan mengikuti pemakaian. Itu kuat dan berisiko. Fleksibilitas yang sama yang membuat tim dapat menskalakan dalam hitungan menit membuat biaya tumbuh lebih cepat daripada yang disadari siapa pun.

FinOps, kontraksi dari finance dan operations, adalah praktik dan budaya untuk mengelola biaya cloud. FinOps Foundation menggambarkannya sebagai kerangka operasional tempat tim rekayasa, keuangan, pengadaan, dan bisnis berkolaborasi dalam keputusan belanja berbasis data. Gagasan intinya adalah bahwa orang yang memakai sumber daya cloud sebaiknya melihat dan memiliki biayanya, sementara keuangan menyediakan struktur, perkiraan, dan komitmen. Ini cocok dengan tujuan agile tentang kolaborasi berkelanjutan di antara pemangku kepentingan dan tim yang memiliki layanannya, dan cocok dengan perhatian ITIL pada manajemen keuangan layanan. Topik ini mencakup ukuran yang membuat praktik itu konkret. Ia membangun di atas gagasan penghitungan biaya umum pada topik sebelumnya (lihat topik 7.5, Biaya layanan dan ekonomi per unit).

Biaya cloud punya ciri yang butuh ukurannya sendiri.

- **Elastisitas.** [Penskalaan otomatis](https://en.wikipedia.org/wiki/Autoscaling) menyesuaikan sumber daya dengan permintaan, yang membuat biaya variabel dan kadang mengejutkan. [Komputasi tanpa server](https://en.wikipedia.org/wiki/Serverless_computing) menagih per eksekusi, dan menggeser perhatian dari server ke permintaan.
- **Banyak keputusan kecil.** Setiap pilihan ukuran instans, tingkat penyimpanan, wilayah, dan arsitektur mengubah biaya. Belanja tersebar di ratusan keputusan yang dibuat banyak orang, dan sulit dilihat tanpa tag dan pelaporan yang baik.
- **Model harga.** Harga sesuai permintaan fleksibel dan tertinggi. Komitmen sebagai imbalan [diskon volume](https://en.wikipedia.org/wiki/Volume_discount), seperti kapasitas cadangan atau savings plan, menurunkan harga satuan dengan imbalan janji pemakaian. Kapasitas spot atau yang dapat disela murah dan dapat diambil kembali. Setiap model punya risiko, dan campuran yang tepat bergantung pada seberapa terprediksi beban kerja. Syarat pastinya berbeda antar-penyedia dan sering berubah, jadi periksa dokumentasi penyedia terkini sebelum mengandalkan detail apa pun.
- **Biaya bersama dan tanpa tag.** Sumber daya tanpa tag pemilik atau tujuan tak dapat diatribusikan. Platform bersama menyebarkan biaya ke tim yang mengonsumsinya secara berbeda.
- **Biaya lingkungan.** Beban kerja cloud mengonsumsi energi dan menyebabkan emisi, dan [jejak karbon](https://en.wikipedia.org/wiki/Carbon_footprint) sebuah beban kerja makin menjadi kewajiban pelaporan. Metode memperkirakannya masih berkembang, dan angka sebaiknya disertai metodenya.

Ukuran biaya di cloud mudah diraih lewat jalan pintas. Memotong belanja dengan mematikan pemantauan atau mengecilkan sumber daya sampai layanan tumbang menunjukkan tagihan lebih rendah dan layanan lebih buruk. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku: setiap ukuran biaya di sini duduk di samping ukuran keandalan atau mutu, dan tidak ada tim yang diperingkat menurut tagihannya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Biaya adalah metrik rekayasa.** Tim yang membangun dan menjalankan layanan melihat dan memiliki biayanya.
- **Alokasikan ke pemilik.** Setiap dolar sebaiknya terpetakan ke tim atau kolam bersama yang dinyatakan.
- **Pasangkan biaya dengan mutu dan keandalan.** Penghematan yang merusak layanan bukan penghematan.
- **Optimalkan terus-menerus, dalam langkah kecil.** Tinjau pemborosan secara teratur dan bertindak sebagai bagian pekerjaan normal.
- **Perkirakan dengan rentang.** Permintaan variabel membuat perkiraan satu angka rapuh.
- **Berkolaborasi lintas fungsi.** Rekayasa, keuangan, pengadaan, dan bisnis memutuskan bersama.
- **Jangan memeringkat tim menurut tagihan mereka.** Layanan berbeda, dan pertumbuhan bukan pemborosan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan alokasi | Porsi belanja cloud yang diatribusikan ke tim pemilik atau kolam bersama yang dinyatakan | belanja dengan tag pemilik dan layanan valid, atau dalam kolam bersama yang dinyatakan / total belanja cloud | persen | Ekspor tagihan cloud, kebijakan tag | Manajemen keuangan layanan; manajemen aset TI | Kepemilikan tim atas apa yang dijalankannya | Mingguan |
| Biaya unit cloud | Biaya sumber daya cloud per unit sesuatu yang dihargai pengguna | biaya cloud untuk layanan pada periode itu / unit yang disampaikan pada periode itu | mata uang per unit | Data tagihan digabung dengan volume layanan | Manajemen keuangan layanan; manajemen tingkat layanan | Biaya melayani per hasil | Bulanan |
| Tingkat pemborosan | Porsi belanja pada sumber daya yang menganggur atau jelas terlalu besar | belanja pada sumber daya menganggur atau terlalu besar, menurut aturan yang disepakati / total belanja pada sumber daya dalam lingkup | persen | Metrik pemanfaatan dan tagihan | Manajemen kapasitas dan kinerja; manajemen keuangan | Pengurangan pemborosan dalam rantai alat | Mingguan |
| Cakupan komitmen | Porsi pemakaian stabil yang memenuhi syarat yang tercakup komitmen berdiskon | pemakaian memenuhi syarat yang tercakup komitmen / pemakaian memenuhi syarat | persen | Tagihan dan laporan komitmen | Manajemen keuangan layanan; manajemen pemasok | Perencanaan untuk permintaan yang terprediksi | Bulanan |
| Pemanfaatan komitmen | Porsi komitmen yang dibeli yang terpakai | jam komitmen terpakai / jam komitmen dibeli | persen | Laporan komitmen | Manajemen keuangan layanan; manajemen pemasok | Nilai dari investasi terencana | Bulanan |
| Varians perkiraan | Selisih antara perkiraan dan belanja cloud aktual, per tim dan total | (aktual dikurangi perkiraan) / perkiraan | persen | Log perkiraan dan data tagihan | Manajemen keuangan layanan | Akurasi perkiraan | Bulanan |
| Waktu pengakuan anomali | Waktu dari peringatan anomali biaya sampai keputusan tercatat oleh pemilik | median dan persentil ke-85 jam dari peringatan sampai respons pemilik | jam | Peringatan anomali dan catatan tiket | Manajemen pemantauan dan peristiwa; manajemen insiden | Responsivitas terhadap sinyal produksi | Bulanan |

Definisikan lingkup sumber daya, aturan tag, dan apa yang dihitung menganggur atau terlalu besar, dan catat. Cakupan komitmen dihitung terhadap pemakaian dasar yang stabil saja, bukan puncak. Biaya unit memakai unit yang disepakati dengan pemilik layanan dan tetap untuk tren. Data biaya sebaiknya menyatakan apakah menyertakan kredit, diskon, pajak, dan biaya dukungan, serta mata uang dan kurs mana yang berlaku.

## Rekomendasi

### Jadikan biaya terlihat dan dimiliki

**1. Tegakkan himpunan tag kecil yang wajib.** Wajibkan setiap sumber daya membawa tag pemilik, layanan, dan lingkungan, ditegakkan lewat kebijakan saat pembuatan, bukan lewat pembersihan sesudahnya. Cakupan alokasi mengukur seberapa baik ini berjalan. Sumber daya yang gagal ditandai dapat diblokir, atau ditandai dalam sehari kepada pemilik akun. Jaga himpunan tag kecil agar orang patuh.

**2. Beri tim pandangan biaya mereka sendiri.** Sediakan bagi tiap tim pandangan harian atau mingguan atas belanja mereka menurut layanan dan lingkungan, dengan tren dan anomali. Orang merespons data yang dapat mereka lihat dan pahami. Laporan yang tiba bulanan dan hanya ke keuangan sedikit mengubah.

**3. Definisikan kolam biaya bersama dan pendorongnya.** Platform bersama, jaringan, dan biaya dukungan butuh aturan cara menyebarkannya (lihat topik 7.5, Biaya layanan dan ekonomi per unit). Terbitkan aturannya, tinjau bersama tim, dan jaga kolam tetap kecil. Aturan yang dapat diikuti orang mendapat lebih banyak kepercayaan daripada yang adil tetapi tak dipahami siapa pun.

**4. Adakan percakapan biaya singkat secara teratur.** Kumpulkan rekayasa, keuangan, dan pemilik produk dengan irama stabil, mingguan atau dua mingguan untuk pembelanja besar dan bulanan untuk lainnya, selama tiga puluh menit. Tinjau tren, anomali, dan backlog optimasi. Ini kolaborasi berkelanjutan dalam praktik, dan menjaga biaya dalam agenda tanpa proses berat.

### Ukur nilai, bukan hanya belanja

**5. Nyatakan biaya per unit.** Total belanja cloud naik seiring keberhasilan. Yang penting adalah biaya per pelanggan aktif, per transaksi, atau per build. Pilih unit yang bermakna bagi layanan, lacak dari waktu ke waktu, dan beri catatan pada perubahan. Biaya unit yang turun dengan total belanja naik adalah pola sehat, dan biaya unit naik dengan penggunaan datar adalah pemicu untuk menyelidiki.

**6. Tunjukkan keandalan dan mutu di samping biaya.** Tampilkan biaya bersama ketersediaan, latensi, dan tingkat galat untuk layanan yang sama (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan). Penghematan biaya yang menaikkan tingkat galat adalah pemindahan biaya ke pengguna. Pendekatan anggaran kesalahan dapat membuat pertukaran eksplisit: belanja lebih sedikit ketika layanan jauh lebih baik dari yang dibutuhkan, dan berinvestasi ketika tidak.

**7. Lacak pemborosan dengan aturan eksplisit.** Definisikan menganggur (misalnya, tanpa pemakaian bermakna selama periode) dan terlalu besar (misalnya, pemanfaatan konsisten jauh di bawah kapasitas yang disediakan), dan laporkan belanja pada masing-masing. Aturan butuh kehati-hatian: sistem siaga untuk ketahanan tampak menganggur menurut desain, dan sebaiknya dikecualikan dan diberi label. Tinjau ulang aturan ketika menghasilkan positif palsu.

### Bertindaklah atas temuan

**8. Sesuaikan ukuran dan bersihkan dalam pekerjaan normal.** Jadikan penghapusan pemborosan butir tetap di backlog tim, dikerjakan dalam langkah kecil sebagai bagian perbaikan berkelanjutan. Jadwalkan lingkungan nonproduksi berhenti di luar jam kerja, hapus penyimpanan yang tak terpasang, pilih tingkat penyimpanan yang sesuai, dan tinjau item baris terbesar lebih dulu. Perubahan kecil teratur mengungguli pembersihan heroik yang jarang, yang cenderung terlupakan ketika tekanan naik.

**9. Cocokkan model harga dengan beban kerja.** Pakai komitmen untuk pemakaian dasar yang stabil, sesuai permintaan untuk beban variabel, dan kapasitas yang dapat disela untuk pekerjaan yang menoleransi gangguan. Berkomitmenlah bertahap, dalam jumlah kecil, dan lacak cakupan sekaligus pemanfaatan. Komitmen berlebihan membuang uang dan komitmen kurang membayar premi. Libatkan keuangan dan pengadaan, dan periksa ulang syaratnya dengan penyedia karena berubah.

**10. Deteksi anomali dan tanggapi.** Pakai deteksi anomali pada belanja, yang menandai perubahan mendadak relatif terhadap garis dasar. Alat [deteksi anomali](https://en.wikipedia.org/wiki/Anomaly_detection) berkisar dari ambang sederhana sampai model statistik. Beri peringatan kepada tim pemilik, dan ukur berapa lama mengakui dan memutuskan. Pekerjaan yang salah konfigurasi dapat menumpuk tagihan besar dalam hitungan jam, jadi kecepatan penting (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan).

### Perkirakan dan rencanakan

**11. Perkirakan dengan rentang dan pendorong.** Bangun perkiraan dari pendorong permintaan, seperti perkiraan pengguna atau transaksi, bersama biaya unit. Pakai [analisis varians](https://en.wikipedia.org/wiki/Variance_analysis) untuk menjelaskan selisih antara perkiraan dan aktual, dan pisahkan yang disebabkan volume, harga, dan bauran. Berikan rentang dan nyatakan asumsinya. Varians perkiraan sebaiknya menyusut seiring model membaik.

**12. Sertakan keberlanjutan dalam gambaran.** Perkirakan emisi yang terkait beban kerja utama memakai metode terdokumentasi, seperti laporan penyedia atau metodologi terbitan, dan nyatakan batas perkiraan. Bandingkan pilihan wilayah, jenis instans, dan jadwal pada biaya sekaligus emisi. Perlakukan emisi per unit sebagai pendamping biaya per unit, dan jangan mengklaim presisi yang tak didukung metode.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan alokasi | Menandai semuanya ke pemilik serba-ada; menyatakan jumlah besar sebagai bersama | Porsi belanja yang dimiliki pemilik serba-ada; ukuran dan tinjauan kolam bersama; sampel konfirmasi pemilik |
| Biaya unit cloud | Memilih unit yang tumbuh murah; memotong keandalan untuk memotong biaya | Definisi unit tetap; pendamping keandalan dan mutu |
| Tingkat pemborosan | Mempersempit definisi menganggur; memindahkan pemborosan ke akun di luar lingkup | Aturan di register; pindai semua akun; ambil sampel sumber daya yang dikecualikan aturan |
| Cakupan komitmen | Berkomitmen pada garis dasar yang digelembungkan demi persentase tinggi | Pemanfaatan komitmen; periksa garis dasar terhadap riwayat pemakaian |
| Pemanfaatan komitmen | Menambah pemakaian memenuhi syarat yang tak dibutuhkan untuk mengisi komitmen | Bandingkan dengan pertumbuhan permintaan nyata; biaya unit |
| Varians perkiraan | Melebihkan perkiraan; merevisinya terlambat | Catat perkiraan di awal; lacak lebar rentang dan tingkat ketepatan |
| Waktu pengakuan anomali | Mengakui peringatan tanpa melihat; menutup peringatan otomatis | Catat keputusan dan hasil; ambil sampel peringatan untuk mutu respons |

Pembacaan yang sehat adalah hampir semua belanja dimiliki dan terlihat, biaya unit yang bergerak karena alasan yang dijelaskan, pemborosan yang menyusut tanpa gangguan, komitmen yang terpakai, dan perkiraan yang galatnya menyempit dari waktu ke waktu.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Tim cloud pusat mengendalikan belanja | Konsistensi dan daya tawar | Lambat; jauh dari keputusan rekayasa |
| Tim memiliki biaya cloud mereka | Keputusan cepat dan terinformasi | Butuh data, pelatihan, dan pagar pembatas |
| Hanya sesuai permintaan | Fleksibel | Harga satuan tertinggi |
| Komitmen besar | Harga satuan lebih rendah | Keterkuncian dan pemborosan jika permintaan turun |
| Batas anggaran ketat | Mencegah kelebihan | Dapat menyebabkan gangguan atau memblokir pekerjaan sah |
| Peringatan dan tinjauan | Menjaga kecepatan | Bergantung pada respons tepat waktu |
| Penyesuaian ukuran agresif | Menghemat uang | Risiko pada kinerja jika berlebihan |
| Penyesuaian ukuran terukur dengan SLO | Seimbang | Butuh data keandalan dan kehati-hatian |

Jawaban prosanya adalah memberi tim data dan kepemilikan, menetapkan pagar pembatas seperti peringatan dan anggaran alih-alih penghentian keras di mana layanan kritis, berkomitmen bertahap pada garis dasar yang stabil, dan selalu memasangkan biaya dengan keandalan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Seberapa banyak tagihan cloud kita yang dapat kita atribusikan ke pemilik hari ini, dan siapa yang tak dapat ditemukan?**
Lihat porsi belanja dengan tag valid dan item tak bertag terbesar. Tanyakan siapa yang akan memiliki masing-masing. Fasilitator sebaiknya mencatat berapa banyak item yang tak diklaim siapa pun. Sepakati satu langkah kebijakan tag untuk ditegakkan saat pembuatan.

**2. Apa yang dilakukan biaya per unit kita selama enam bulan terakhir, dan mengapa?**
Plot biaya unit dan beri catatan pada perubahan arsitektur, harga, dan volume. Tanyakan perubahan mana yang disengaja. Jika tren itu mengejutkan, bahas data apa yang hilang. Tambahkan ukuran mutu pada bagan.

**3. Sumber daya kita mana yang akan kita matikan besok jika berani?**
Daftar kandidat: lingkungan menganggur, basis data terlalu besar, penyimpanan terlupakan. Untuk tiap kandidat, tanyakan apa risikonya dan siapa yang memutuskan. Sepakati cara aman menguji penghapusan satu, seperti penjadwalan atau snapshot lebih dulu.

**4. Bagaimana kita tahu dalam sehari jika sebuah pekerjaan mulai berbiaya sepuluh kali lipat?**
Telusuri jalur peringatan dari tagihan ke pemilik. Uji dengan contoh masa lalu. Percakapan sebaiknya mengungkap keterlambatan dan celah kepemilikan. Sepakati waktu target untuk mengakui dan memutuskan, dan siapa yang berjaga.

**5. Seberapa banyak pemakaian dasar kita yang dapat dengan aman kita komitmenkan, dan apa yang akan membuat kita salah?**
Periksa riwayat pemakaian untuk dasar yang stabil dan risikonya: perubahan produk, migrasi, perubahan harga. Putuskan komitmen pertama yang sederhana dan tanggal tinjauan. Sertakan keuangan dalam diskusi.

**6. Pertukaran antara biaya dan keandalan apa yang kita buat secara tak sengaja?**
Tinjau penghematan dan insiden terbaru. Adakah yang terkait? Bahas cara membuat pertukaran eksplisit, misalnya dengan mengaitkan tinjauan biaya dengan anggaran kesalahan. Putuskan siapa yang dapat menyetujui pemotongan yang memengaruhi keandalan.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman membuat keputusan yang menggerakkan biaya dan berada di posisi terbaik untuk menguranginya. Mereka sebaiknya menandai saat pembuatan, memeriksa pandangan biaya mereka secara teratur, memasukkan biaya dalam diskusi desain, dan memperlakukan pengurangan pemborosan sebagai pekerjaan normal. Mereka sebaiknya dapat melihat efek perubahan pada biaya tak lama setelah membuatnya, yang mendukung pembelajaran cepat.

### Tim layanan dan operasi

Tim operasi dan platform menjalankan layanan bersama, menegakkan kebijakan, dan mengoperasikan peringatan anomali. Mereka sebaiknya menjaga kepatuhan tag sederhana, menyediakan laporan swalayan, dan menerbitkan aturan jelas untuk biaya bersama. Mereka sebaiknya mengawasi biaya dan keandalan platform yang mereka sediakan, dan membantu tim bertindak tanpa menjadi gerbang.

### Kepemimpinan dan tata kelola

Pemimpin dan keuangan menginginkan belanja terprediksi dan nilai baik. Mereka sebaiknya mendanai perkakas dan waktu untuk pekerjaan biaya, menerima rentang dalam perkiraan, menghindari tabel liga tim, dan meminta biaya unit di samping mutu. Tata kelola sebaiknya memeriksa bahwa komitmen dibuat dengan data, dan bahwa klaim keberlanjutan menyatakan metodenya.

### Pelanggan dan pengguna

Pengguna merasakan biaya cloud secara tak langsung, lewat harga, fitur, atau stabilitas layanan. Mereka diuntungkan ketika penghematan mendanai perbaikan dan menderita ketika pemotongan menurunkan mutu. Di mana pengguna ditagih atas konsumsi, mereka menginginkan tagihan jelas dan kemampuan memengaruhinya.

## Dalam praktik: contoh ITIL agile

Pengecer daring regional menjalankan tokonya dan platform pesanan di cloud publik, dengan enam tim rekayasa. Angka di bawah bersifat ilustratif.

Belanja cloud naik terus selama setahun, dan direktur keuangan meminta pemotongan. Pimpinan FinOps menarik data tagihan. Cakupan alokasi adalah 68 persen, dengan sepertiga belanja tak bertag berada di akun uji. Biaya per pesanan selesai adalah US$0,31, naik dari US$0,27 enam bulan sebelumnya, sementara volume pesanan tumbuh 15 persen. Tingkat pemborosan menurut aturan tim adalah 14 persen dari belanja dalam lingkup, kebanyakan lingkungan nonproduksi yang berjalan semalaman dan akhir pekan serta beberapa basis data terlalu besar. Cakupan komitmen adalah 20 persen dari dasar yang stabil, dengan pemanfaatan 97 persen atas yang dibeli. Varians perkiraan plus 18 persen pada kuartal terakhir menyusul kampanye pemasaran yang tidak diberitahukan kepada tim platform. Pekerjaan data yang lepas kendali di satu akun berjalan dua hari sebelum ada yang menyadari.

Pimpinan menyepakati empat perubahan dengan tim rekayasa. Kebijakan tag memblokir sumber daya baru tanpa tag pemilik dan layanan, dengan masa tenggang dua pekan. Tiap tim menerima pandangan biaya mingguan dan slot singkat dalam percakapan biaya dua mingguan. Lingkungan nonproduksi dijadwalkan berhenti di luar jam kerja, dan tiga basis data terlalu besar diubah ukurannya setelah memeriksa kinerjanya terhadap sasaran tingkat layanan. Komitmen pertama mencakup 60 persen dari dasar yang stabil, dengan tinjauan tiga bulan lagi. Peringatan anomali masuk ke tim pemilik dengan harapan keputusan tercatat dalam empat jam, dan kalender perencanaan kini memuat kampanye pemasaran.

Setelah satu kuartal, cakupan alokasi adalah 93 persen, tingkat pemborosan turun menjadi 6 persen, biaya per pesanan turun menjadi US$0,26 tanpa perubahan pada latensi checkout atau tingkat galat, dan varians perkiraan plus 5 persen. Cakupan komitmen adalah 55 persen dengan pemanfaatan 96 persen. Median waktu pengakuan anomali adalah 2 jam, dengan persentil ke-85 sebesar 6. Direktur keuangan meminta tabel liga yang menunjukkan biaya per tim. Pimpinan FinOps menolak, menjelaskan bahwa tim menjalankan layanan berbeda dengan pertumbuhan berbeda, dan menawarkan sebagai gantinya tren biaya unit tiap tim dengan ukuran keandalannya. Keputusan dicatat, dan tanggal tinjauan berikutnya ditetapkan.

## Sudut pandang sektor

**Startup.** Kredit dan tagihan rendah dapat menyembunyikan kebiasaan buruk yang menjadi mahal pada skala. Beri tag sejak hari pertama, jadwalkan sumber daya nonproduksi, dan lacak biaya per pelanggan sejak dini. Berkomitmenlah hanya ketika permintaan terprediksi.

**Bisnis kecil.** Satu akun dan beberapa layanan membuat penandaan dan tinjauan sederhana. Tinjau tagihan bulanan bersama orang yang membangun sistem, hapus sumber daya terlupakan, dan waspadai komitmen panjang. Peringatan anggaran adalah kendali tunggal paling berharga.

**Perusahaan besar.** Banyak akun, tim, dan penyedia memanggil fungsi FinOps pusat yang memberdayakan tim alih-alih mengendalikan mereka. Standarkan tag dan ekspor tagihan lintas penyedia, negosiasikan komitmen secara terpusat, dan beri tim data mereka. Rencanakan perbedaan pelaporan multi-cloud.

**Pemerintah dan sektor publik.** Kerangka pengadaan, residensi data, dan anggaran tahunan tetap membatasi pilihan. Dokumentasikan keputusan biaya dan wilayah, modelkan efek belanja variabel pada alokasi anggaran, dan simpan jejak audit. Komitmen publik tentang keberlanjutan mungkin mewajibkan emisi yang dilaporkan beserta metodenya (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya praktik FinOps adalah waktu beberapa orang untuk menjalankan pelaporan, kebijakan tag, dan percakapan reguler; perkakas, yang mungkin disediakan platform cloud atau dibeli; dan waktu rekayasa untuk bertindak atas temuan. Praktik kecil dapat dimulai dengan ekspor tagihan dan lembar kerja.

Imbal hasil datang dari pemborosan berkurang, harga lebih baik lewat komitmen, lebih sedikit kejutan, dan keputusan arsitektur lebih baik. Bangun kasus dari angka Anda sendiri: tingkat pemborosan dan biayanya pada tinjauan pertama, penghematan dari penjadwalan lingkungan nonproduksi, diskon komitmen pada porsi yang dikomitmenkan, dan biaya yang dihindari dari anomali yang tertangkap dini. Hindari mengutip persentase pemborosan atau angka penghematan seindustri tanpa sumber dan metode yang dapat ditelusuri. Sertakan biaya praktik itu dan risiko komitmen berlebihan. Kasus keuangan untuk perbaikan secara umum dibahas pada topik berikutnya (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Tim pusat yang berkata tidak.** Memperlambat pekerjaan dan tim menyiasatinya. Berdayakan tim dengan data dan pagar pembatas.
- **Memotong biaya tanpa mengawasi keandalan.** Penghematan kembali sebagai insiden. Pasangkan biaya dengan ukuran tingkat layanan.
- **Mengejar cakupan komitmen.** Persentase tinggi dengan pemanfaatan rendah adalah pemborosan. Lacak keduanya.
- **Laporan bulanan hanya ke keuangan.** Insinyur tak pernah melihatnya. Beri tim pandangan harian atau mingguan.
- **Penandaan sebagai proyek pembersihan.** Membusuk. Tegakkan tag saat pembuatan.
- **Memeringkat tim menurut belanja.** Pertumbuhan tampak seperti pemborosan. Tunjukkan tren biaya unit dengan konteks.
- **Memperkirakan satu angka.** Permintaan variabel merusaknya. Pakai rentang dan pendorong.
- **Mengklaim emisi presisi.** Metode estimasi tidak pasti. Nyatakan metode dan batasnya.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Visibilitas dan kepemilikan | Tagihan bulanan ditinjau keuangan | Tag dipakai beberapa tim | Tag wajib; tim melihat pandangan biaya mingguan | Cakupan alokasi dikelola; kolam bersama ditinjau | Data biaya mengalir ke keputusan produk hampir waktu nyata lintas penyedia |
| Optimasi | Pembersihan sesekali | Jadwal dan penyesuaian ukuran oleh beberapa tim | Aturan pemborosan dan backlog optimasi tetap | Pemborosan, komitmen, dan biaya unit dikelola dengan pendamping keandalan | Optimasi berkelanjutan dan otomatis dengan pengawasan manusia dan pembelajaran bersama |
| Perencanaan | Anggaran tahunan | Perkiraan kasar | Perkiraan berbasis pendorong dengan rentang | Varians dianalisis dan disuapkan kembali; komitmen dikelola bertahap | Perkiraan bersama dengan bisnis, pemasok, dan tujuan keberlanjutan |

## Daftar periksa

- [ ] Himpunan tag wajib kecil (pemilik, layanan, lingkungan) ditegakkan saat pembuatan sumber daya.
- [ ] Cakupan alokasi dilaporkan mingguan, dengan item tak bertag terbesar didaftar.
- [ ] Tiap tim punya pandangan biaya mingguan dengan tren dan anomali.
- [ ] Percakapan biaya rekayasa dan keuangan reguler ada di kalender.
- [ ] Biaya unit cloud dilacak di samping ketersediaan, latensi, dan tingkat galat.
- [ ] Aturan pemborosan tertulis dan diterapkan, dengan pengecualian diberi label.
- [ ] Komitmen dibuat bertahap terhadap pemakaian dasar yang stabil, dengan cakupan dan pemanfaatan dilacak.
- [ ] Perkiraan memakai pendorong dan rentang, dan varians dianalisis.
- [ ] Peringatan anomali sampai ke pemilik dengan waktu yang diharapkan untuk memutuskan.
- [ ] Perkiraan emisi, jika dilaporkan, menyatakan metode dan batasnya.

## Prompt AI

**Analisis tren biaya.**

```text
Berikut ringkasan biaya dan pemakaian cloud kami untuk [service] selama [period]:
[paste monthly cost, volume, and any known changes]. Uraikan perubahan biaya
menjadi efek volume, harga, dan bauran sejauh data mengizinkan, sarankan apa yang
diperiksa berikutnya, dan usulkan biaya unit dengan pendamping mutu. Jangan
mengarang harga atau diskon. Daftar asumsi Anda dan data yang akan Anda butuhkan
agar lebih yakin.
```

**Susun kebijakan tag.**

```text
Susun kebijakan tag untuk [type of organization] yang memakai [cloud provider(s)].
Sertakan himpunan minimal tag wajib, nilai yang diizinkan, cara menegakkannya
saat pembuatan, cara pelanggaran dilaporkan kepada pemilik, dan masa tenggang.
Jaga cukup pendek untuk diikuti insinyur. Daftar asumsi Anda dan apa pun yang
bergantung pada fitur penyedia yang sebaiknya saya periksa di dokumentasi terkini.
```

**Definisikan aturan pemborosan.**

```text
Usulkan aturan untuk mengklasifikasi sumber daya cloud sebagai menganggur atau
terlalu besar di [type of environment], termasuk metrik yang dipakai, jendela
waktu, pengecualian (misalnya siaga ketahanan), dan proses tinjauan untuk positif
palsu. Gambarkan cara menghindari merusak keandalan. Jangan menetapkan ambang
numerik tanpa mengatakan bagaimana kami sebaiknya mengkalibrasinya dari data kami
sendiri. Daftar asumsi Anda.
```

**Rencanakan komitmen pertama.**

```text
Pemakaian dasar stabil kami selama [period] adalah [summary] dan risiko permintaan
adalah [list]. Uraikan rencana hati-hati untuk komitmen pertama: cara memperkirakan
garis dasar, berapa yang dikomitmenkan, cara meninjau pemanfaatan, dan apa yang
akan membuat kami berhenti. Jangan mengasumsikan diskon atau syarat penyedia
tertentu. Daftar asumsi Anda dan pertanyaan untuk keuangan dan pengadaan.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik biaya cloud.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik biaya cloud membawa vektor manipulasi, pagar pembatas, dan pendamping keandalannya.

## Poin penting

- Jadikan biaya terlihat dan dimiliki: tegakkan tag saat pembuatan dan beri tiap tim pandangan mingguan mereka sendiri.
- Ukur biaya per unit di samping keandalan dan mutu, jangan pernah sendirian.
- Singkirkan pemborosan sebagai bagian pekerjaan normal, dipandu aturan tertulis.
- Berkomitmenlah bertahap pada dasar yang stabil dan lacak cakupan sekaligus pemanfaatan.
- Perkirakan dengan pendorong dan rentang, dan awasi anomali dengan respons cepat.
- Jangan memeringkat tim menurut belanja, dan nyatakan metode serta batas setiap perkiraan emisi.

## Referensi dan bacaan lanjutan

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
