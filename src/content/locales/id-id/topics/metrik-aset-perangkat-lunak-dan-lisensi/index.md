# Metrik aset perangkat lunak dan lisensi

**Perangkat lunak dibeli, dilanggan, dibangun, dan dipinjam, dan setiap jalur menciptakan kewajiban dan biaya, jadi ukur apa yang menjadi hak Anda, apa yang benar-benar Anda pakai, dan apa yang menjadi tumpuan Anda, dan buat mudah bagi tim memilih alat tanpa menciptakan kejutan kemudian.**

## Gambaran umum dan motivasi

Perangkat lunak adalah kelas aset yang berubah paling cepat dan paling sulit dilihat. Pengembang menambah pustaka dalam hitungan menit. Tim mendaftar alat perangkat lunak sebagai layanan dengan kartu perusahaan. Vendor mengubah model harga di antara pembaruan. Kontrak mengizinkan 500 pengguna dan 700 punya akun. [Manajemen aset perangkat lunak](https://en.wikipedia.org/wiki/Software_asset_management) (SAM) adalah praktik bisnis mengelola dan mengoptimalkan pembelian, deployment, perawatan, pemakaian, dan pembuangan perangkat lunak dalam organisasi. Ia berada di dalam praktik manajemen aset TI yang lebih luas (lihat topik 7.1, Metrik manajemen aset TI) dan berbagi disiplinnya tentang catatan, pemilik, dan siklus hidup.

Pengiriman berkelanjutan dan manajemen aset perangkat lunak tertarik ke arah berbeda soal kecepatan. Tim yang menyampaikan secara berkelanjutan perlu memilih dan mengadopsi alat dengan cepat, dan mereka membangun di atas komponen sumber terbuka dalam ratusan. Manajemen aset perangkat lunak ingin tahu apa yang dipakai, dengan syarat apa, berapa biayanya, dan dengan risiko apa. Keduanya benar. Jalan keluarnya adalah kolaborasi berkelanjutan antara tim, pengadaan, hukum, keamanan, dan keuangan: buat jalur yang disetujui cepat, buat katalog alat yang disetujui mudah ditemukan, dan buat pemeriksaan otomatis. Memperlambat tim dengan proses persetujuan panjang menghasilkan [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT), kebalikan dari visibilitas yang diinginkan semua orang.

Empat jenis perangkat lunak penting, dan metriknya berbeda di antaranya.

- **Perangkat lunak berlisensi** yang dipasang pada perangkat atau server, diatur oleh [lisensi perangkat lunak](https://en.wikipedia.org/wiki/Software_license) yang menyatakan siapa boleh memakainya, berapa banyak yang boleh memakainya, dan dengan syarat apa. Hak mungkin per pengguna, per perangkat, per core, atau per situs, dan satuan menentukan cara Anda menghitung.
- **Perangkat lunak sebagai layanan.** [Perangkat lunak sebagai layanan](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS) diakses lewat jaringan dan dibayar dengan langganan, sering menurut kursi atau pemakaian. Mudah diadopsi dan mudah dilupakan. Alat yang tumpang tindih dan kursi tak terpakai menumpuk.
- **Komponen sumber terbuka.** [Perangkat lunak sumber terbuka](https://en.wikipedia.org/wiki/Open-source_software) tersedia di bawah lisensi yang memberi hak luas dengan syarat. Sebagian lisensi, disebut lisensi [copyleft](https://en.wikipedia.org/wiki/Copyleft), mewajibkan karya turunan dibagikan dengan syarat yang sama. Kepatuhan bergantung pada bagaimana komponen dipakai dan didistribusikan, dan penafsiran lisensi adalah pertanyaan hukum.
- **Perangkat lunak yang Anda bangun.** Kode Anda sendiri adalah aset, dan bergantung pada banyak komponen. [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM) adalah daftar komponen dalam sepotong perangkat lunak. Ia membantu Anda menjawab layanan mana yang memakai pustaka tertentu ketika kerentanan atau masalah lisensi muncul.

Metrik aset perangkat lunak terpapar distorsi yang lazim. Posisi lisensi dapat tampak sehat karena inventaris tidak lengkap. Biaya shelfware dapat tampak rendah karena kontrak dipersingkat sebelum tinjauan. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku, jadi setiap ukuran di sini dipasangkan dengan pemeriksaan independen (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Satu peringatan soal hukum: syarat lisensi dan hak audit adalah urusan hukum. Topik ini menggambarkan praktik pengukuran. Ia tidak menafsirkan lisensi mana pun, dan tidak menggantikan nasihat penasihat hukum yang berkualifikasi untuk situasi dan yurisdiksi Anda.

## Prinsip utama

- **Ukur hak terhadap pemakaian.** Mengetahui apa yang boleh Anda pakai dan apa yang Anda pakai adalah perbandingan inti.
- **Hitung dengan satuan yang dipakai lisensi.** Pengguna, perangkat, core, dan langganan berbeda, dan mencampurnya menyembunyikan jawaban.
- **Jadikan jalur yang disetujui sebagai jalur cepat.** Katalog terlihat dan persetujuan cepat mengurangi adopsi bayangan.
- **Sertakan komponen selain produk.** Pustaka sumber terbuka dan lisensinya adalah bagian aset.
- **Tinjau sebelum pembaruan.** Waktu terbaik memangkas pemborosan adalah sebelum tanggal kontrak.
- **Jaga hukum dalam percakapan.** Penafsiran milik orang yang berkualifikasi memberikannya.
- **Bagikan gambaran dengan tim.** Tim yang melihat pemakaian dan biaya sendiri membuat pilihan lebih baik.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Posisi lisensi efektif | Perbandingan hak yang dipegang dengan pemakaian yang ditemukan, per produk, dalam satuan hitung lisensi sendiri | hak yang dipegang dikurangi deployment atau pengguna yang ditemukan, per produk | satuan (surplus positif, kekurangan negatif) | Catatan hak, alat penemuan, sistem identitas | Manajemen aset TI; manajemen pemasok | Katalog terlihat dan data pemakaian untuk tim | Bulanan untuk produk kunci; kuartalan untuk lainnya |
| Tingkat pemanfaatan lisensi | Porsi hak berbayar yang aktif dipakai | hak dengan aktivitas dalam 90 hari terakhir / hak yang dibayar | persen | Laporan pemakaian vendor, log identitas, catatan hak | Manajemen aset TI; manajemen keuangan | Retrospektif tentang nilai alat | Bulanan |
| Biaya shelfware | Biaya tahunan hak yang dibayar dan tak terpakai | jumlah (hak tak terpakai dikali biaya satuan) | mata uang per tahun | Catatan hak, data pemakaian, faktur | Manajemen aset TI; manajemen keuangan | Pengurangan pemborosan dalam rantai alat | Kuartalan |
| Hitungan aplikasi tak disahkan | Jumlah aplikasi perangkat lunak yang dipakai yang tidak ada dalam katalog yang disetujui | aplikasi yang terlihat dalam data pengeluaran, log single sign-on, atau data jaringan yang tidak ada dalam katalog | hitungan | Laporan pengeluaran, penyedia identitas, data jaringan dan endpoint | Manajemen aset TI; manajemen keamanan informasi | Tim memilih alat dengan dukungan terlihat | Bulanan |
| Kesiapan pembaruan | Porsi pembaruan yang punya tinjauan pemakaian sebelum tanggal pemberitahuan | pembaruan dengan tinjauan pemakaian selesai setidaknya 90 hari sebelum tanggal pemberitahuan / pembaruan jatuh tempo pada periode itu | persen | Register kontrak dan catatan tinjauan | Manajemen pemasok; manajemen keuangan | Merencanakan ke depan untuk perubahan | Kuartalan |
| Cakupan SBOM | Porsi layanan produksi yang punya software bill of materials terkini | layanan dengan SBOM yang dihasilkan pada siklus rilis terakhir / layanan produksi | persen | Keluaran pipeline build, katalog layanan | Manajemen aset TI; manajemen keamanan informasi | Definisi selesai mencakup visibilitas dependensi | Bulanan |
| Cakupan tinjauan sumber terbuka | Porsi komponen di produksi yang punya identifikasi lisensi dan keputusan kebijakan tercatat | komponen dengan lisensi dan keputusan tercatat / komponen yang ditemukan dalam SBOM | persen | Alat analisis komposisi perangkat lunak, register kebijakan | Manajemen aset TI; manajemen pemasok | Tinjauan dependensi di pipeline | Bulanan |

Nyatakan satuan hitung untuk tiap produk di register. Pemanfaatan mulai menghitung aktivitas dari peristiwa yang didefinisikan, seperti masuk, dan jendela yang dinyatakan. Kecualikan akun layanan dan akun uji dari hitungan pengguna hanya ketika syarat lisensi mengizinkan, dan catat aturannya. Biaya adalah harga satuan kontrak bersih dari diskon yang disepakati, dan tanggal harga dicatat.

## Rekomendasi

### Ketahui apa yang Anda pegang dan apa yang Anda pakai

**1. Simpan catatan hak untuk setiap produk yang berbiaya atau membawa kewajiban.** Catatan sebaiknya memuat vendor, produk, jenis lisensi, satuan hitung, jumlah, masa berlaku, harga, tanggal pembaruan dan pemberitahuan, pembatasan, dan pemilik. Simpan kontrak atau tautan ke kontrak. Metrik bergantung pada catatan ini, dan catatan sering tidak ada untuk langganan yang dibeli di luar pengadaan.

**2. Ukur pemakaian dengan satuan vendor.** Lisensi kursi menghitung pengguna bernama, dan lisensi prosesor menghitung core. Pemanfaatan terhadap satuan yang salah memberi kenyamanan palsu. Di mana syarat rumit, minta pengadaan dan hukum menggambarkan aturan hitung dalam bahasa lugas sekali, dan catat.

**3. Gabungkan tiga sumber data pemakaian.** Konsol admin vendor, log masuk penyedia identitas Anda, dan alat penemuan Anda masing-masing melihat sebagian. Di mana mereka tidak sepakat, cari tahu mengapa. Kursi yang ditetapkan tetapi tak pernah dipakai adalah kandidat untuk direbut kembali, dan pengguna yang muncul di satu log dan tidak di log lain mungkin masalah data.

**4. Rebut kembali kursi tak terpakai secara bawaan.** Tetapkan aturan, seperti menghapus akses setelah 90 hari tanpa pemakaian dan memulihkannya atas permintaan. Buat pemulihan mudah agar aturan tidak membuat orang frustrasi. Merebut kembali adalah praktik berkelanjutan, bukan proyek, dan bekerja paling baik bila diotomatisasi dan diumumkan.

### Jadikan jalur yang benar sebagai jalur mudah

**5. Terbitkan katalog alat yang disetujui.** Daftar apa yang dapat dipakai tim, berapa biayanya, siapa yang mendukung, dan bagaimana meminta akses. Tambahkan jalur cepat untuk mengusulkan alat baru, dengan tinjauan singkat untuk keamanan, privasi, dan biaya. Katalog yang membantu orang menemukan alat yang ada mencegah pembelian ganda (lihat topik 6.3, Metrik adopsi layanan dan katalog).

**6. Awasi sprawl tanpa menghukumnya.** Pakai data pengeluaran, log single sign-on, dan data jaringan untuk menemukan aplikasi yang tidak ada dalam katalog. Perlakukan masing-masing sebagai percakapan: apa yang dibutuhkan tim, dan dapatkah alat yang disetujui melayaninya? Hitung aplikasi tak disahkan dan lacak tren, dan bidik membawa yang berguna ke dalam pengelolaan, bukan memberantas.

**7. Beri tim visibilitas atas pemakaian dan biaya mereka sendiri.** Tampilan bulanan kursi, pemakaian, dan biaya menurut tim memungkinkan mereka merapikan langganan sendiri. Visibilitas bekerja lebih baik daripada pemolisian, dan menghormati preferensi agile untuk tim yang mengorganisasi diri dengan informasi yang mereka butuhkan.

### Rencanakan pembaruan dan kelola dependensi

**8. Tinjau pemakaian sebelum setiap pembaruan signifikan.** Tetapkan tinjauan 90 sampai 120 hari sebelum tanggal pemberitahuan, bersama pemilik, pengadaan, dan keuangan. Bawa pemanfaatan, biaya shelfware, alternatif, dan umpan balik tim. Kesiapan pembaruan adalah porsi pembaruan yang mencapai tinjauan ini tepat waktu. Tanggal pemberitahuan yang terlewat adalah biaya dengan sebab.

**9. Waspadai keterkuncian vendor.** [Keterkuncian vendor](https://en.wikipedia.org/wiki/Vendor_lock-in) membuat berpindah pemasok mahal. Catat jalur keluar untuk produk penting: format ekspor data, syarat kontrak saat pengakhiran, dan upaya menggantikan. Anda tak harus menghindari ketergantungan, tetapi sebaiknya tahu harganya.

**10. Hasilkan SBOM pada setiap rilis.** Perkakas build dapat menghasilkan SBOM secara otomatis sebagai bagian pipeline, sehingga informasi tetap terkini tanpa upaya berkelanjutan. Simpan bersama rilis, dan buat dapat dicari agar Anda dapat menjawab layanan mana yang memakai suatu komponen. Ini mendukung lisensi dan respons keamanan sekaligus.

**11. Tinjau lisensi sumber terbuka di pipeline.** Alat [analisis komposisi perangkat lunak](https://en.wikipedia.org/wiki/Software_composition_analysis) mengidentifikasi komponen dan lisensinya. Sepakati kebijakan singkat dengan hukum tentang lisensi mana yang disetujui, mana yang butuh tinjauan, dan mana yang tidak diizinkan untuk pemakaian Anda, dan minta pipeline menandai pengecualian. Simpan keputusan kebijakan dalam register. Alat mengidentifikasi lisensi, dan orang yang berkualifikasi menafsirkannya memutuskan kasus sulit.

### Siapkan audit dengan tenang

**12. Siapkan bukti, bukan berebut.** [Audit perangkat lunak](https://en.wikipedia.org/wiki/Software_audit) oleh vendor atau regulator meminta Anda menunjukkan bahwa pemakaian Anda cocok dengan hak Anda. Jika catatan hak dan data pemakaian sudah direkonsiliasi tiap bulan, audit adalah permintaan rutin. Libatkan hukum dan pengadaan sejak awal, tanggapi lewat satu saluran, dan jangan melaporkan sendiri kesimpulan yang belum Anda tinjau bersama mereka.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Posisi lisensi efektif | Menghitung dalam satuan yang menguntungkan; membiarkan deployment bayangan di luar penemuan | Hitung dalam satuan lisensi sendiri; bandingkan dengan data pengeluaran dan identitas; tinjauan hukum atas aturan hitung |
| Tingkat pemanfaatan lisensi | Memperpendek jendela aktivitas; menghitung login oleh bot atau akun layanan sebagai pemakaian | Jendela tetap di register; kecualikan akun nonmanusia; bandingkan dengan laporan pemakaian vendor |
| Biaya shelfware | Menegosiasi ulang atau membatalkan tepat sebelum tinjauan untuk mengurangi angka; mengabaikan langganan pada kartu | Sertakan semua sumber belanja; lacak biaya pada awal jendela pemberitahuan |
| Hitungan aplikasi tak disahkan | Menyetujui semuanya ke dalam katalog untuk mengurangi hitungan; menyembunyikan pemakaian dengan akun pribadi | Kriteria tinjauan katalog; lihat data belanja dan identitas; tanyakan tim apa yang mereka butuhkan |
| Kesiapan pembaruan | Mengadakan tinjauan sekadarnya; menetapkan tanggal pemberitahuan lebih lambat | Daftar periksa tinjauan dengan masukan wajib; tanggal kontrak dipegang pengadaan |
| Cakupan SBOM | Menghasilkan SBOM yang menghilangkan dependensi transitif; menghitung keluaran build yang tak dirilis | Definisikan kedalaman di register; periksa sampel SBOM terhadap artefak yang di-deploy |
| Cakupan tinjauan sumber terbuka | Menandai komponen ditinjau tanpa keputusan; menerima lisensi “tidak diketahui” | Hitung komponen dengan lisensi tidak diketahui; tinjau sampel keputusan |

Pembacaan yang sehat adalah posisi lisensi yang cocok dengan bukti independen, tingkat pemanfaatan yang naik karena kursi direbut kembali dan bukan karena definisi berubah, hitungan aplikasi tak disahkan yang turun seiring katalog membaik, dan pembaruan yang tiba bersama tinjauan.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Persetujuan pusat atas semua alat | Kendali kuat, satu pandangan | Lambat; mendorong shadow IT |
| Pilihan tim dalam pagar pembatas | Cepat; cocok dengan kebutuhan tim | Lebih banyak variasi; butuh visibilitas dan tinjauan |
| Perebutan kembali kursi yang agresif | Menghemat biaya | Dapat membuat pengguna frustrasi bila pemulihan lambat |
| Penyediaan kursi yang murah hati | Gesekan rendah | Pemborosan menumpuk |
| Perjanjian perusahaan | Biaya satuan lebih rendah, lebih sederhana | Keterkuncian; membayar cakupan yang tak dibutuhkan |
| Bayar sesuai pemakaian | Mencocokkan biaya dengan pemakaian | Tagihan tak terprediksi |
| Pemindaian lisensi otomatis | Konsisten dan cepat | Butuh pertimbangan manusia untuk kasus tepi |
| Tinjauan manual komponen | Cermat | Tidak berskala untuk pohon dependensi besar |

Jawaban prosanya adalah memberi tim pilihan dalam pagar pembatas yang jelas, mengotomatisasi pemeriksaan, dan membelanjakan perhatian manusia pada kontrak besar dan pertanyaan lisensi yang sulit. Simpan jalur cepat untuk alat baru dan jalur mudah untuk memulihkan akses yang direbut kembali.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Tiga produk mana yang paling mahal bagi kita, dan apakah kita tahu berapa orang yang memakainya?**
Daftar kontrak terbesar dan satuan hitung masing-masing. Bandingkan dengan data pemakaian. Fasilitator sebaiknya mencari produk tempat tak ada yang tahu satuannya atau data pemakaian tidak ada. Sepakati mengumpulkan data untuk satu produk sebelum pembaruan berikutnya.

**2. Bagaimana alat baru diadopsi di sini, dan berapa lama?**
Telusuri contoh terbaru dari permintaan sampai akses. Tanyakan berapa banyak tim yang melewati jalur, dan mengapa. Jawabannya menunjukkan apakah jalur yang disetujui cepat. Sepakati satu perbaikan pada jalur dan cara mengetahui apakah berhasil.

**3. Apa yang terjadi jika vendor meminta kita membuktikan posisi lisensi bulan depan?**
Telusuri siapa yang akan merespons, catatan apa yang ada, dan celah apa. Percakapan sebaiknya tidak bertujuan menemukan kesimpulan hukum, hanya mengidentifikasi catatan yang hilang. Namai orang di hukum dan pengadaan yang akan terlibat dan bagaimana tim menjangkau mereka.

**4. Di mana kita merebut kembali kursi tak terpakai, dan di mana tidak?**
Tinjau aturan perebutan kembali untuk produk teratas. Tanyakan apa yang terjadi jika aturan diterapkan pada sisanya. Bahas cara membuat pemulihan akses tanpa rasa sakit, karena itulah yang membuat aturan dapat diterima.

**5. Dapatkah kita mengatakan layanan kita mana yang memakai pustaka sumber terbuka tertentu?**
Pilih pustaka terkenal dan coba jawab. Jika memakan lebih dari beberapa menit, bahas mengapa. Sepakati langkah pipeline mana yang dapat menghasilkan SBOM dan di mana hasilnya dapat disimpan.

**6. Apa yang kita andalkan yang akan sulit ditinggalkan?**
Daftar produk yang datanya atau alur kerjanya terikat dalam pada satu vendor. Tanyakan berapa biaya meninggalkan dan bagaimana Anda akan memulai. Fasilitator dapat mencatat jawabannya sebagai masukan perencanaan pembaruan.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memilih alat dan pustaka setiap hari. Mereka sebaiknya memakai katalog yang disetujui di mana melayani mereka, mengusulkan tambahan dengan catatan singkat, dan membiarkan pipeline menghasilkan SBOM dan menandai masalah lisensi. Mereka butuh jawaban cepat: kebijakan jelas tentang lisensi umum dan jalur untuk bertanya tentang yang tak biasa. Tim yang melihat data kursi dan belanjanya sendiri akan merapikannya tanpa disuruh.

### Tim layanan dan operasi

Tim operasi menjalankan penemuan, mengelola akses, dan menangani pembaruan serta audit. Mereka sebaiknya merekonsiliasi data pemakaian dengan hak, merebut kembali kursi tak terpakai menurut jadwal, dan menjaga register kontrak tetap terkini. Mereka juga memikul beban dukungan atas alat tak terkelola, yang merupakan alasan baik untuk membawa yang berguna ke dalam pengelolaan.

### Kepemimpinan dan tata kelola

Pemimpin ingin menghindari biaya tak terencana dan paparan hukum tanpa memperlambat tim. Mereka sebaiknya mendanai otomatisasi, meminta bukti independen di balik klaim posisi lisensi, dan menjaga hukum dan pengadaan dalam lingkaran. Tata kelola sebaiknya mengharapkan pembaruan ditinjau tepat waktu dan kebijakan sumber terbuka diterapkan di pipeline.

### Pelanggan dan pengguna

Pengguna ingin alat yang mereka butuhkan berfungsi pertama kali, tanpa penantian panjang. Mereka memperhatikan ketika akses lenyap tanpa peringatan atau ketika dua alat melakukan pekerjaan yang sama. Mereka sebaiknya diberi tahu ketika kursi akan direbut kembali, diberi jalur mudah untuk meminta akses, dan dimintai pendapat ketika alat diganti.

## Dalam praktik: contoh ITIL agile

Kelompok teknologi sebuah organisasi berita regional mendukung 900 staf dan menjalankan platform penerbitan dengan sekitar 40 layanan. Angka di bawah bersifat ilustratif.

Direktur keuangan bertanya mengapa biaya perangkat lunak tumbuh lebih cepat daripada jumlah pegawai. Manajer aset perangkat lunak mengumpulkan data. Catatan hak mencakup 61 produk. Log masuk dan laporan vendor menunjukkan bahwa suite desain punya 220 kursi dan 140 pengguna aktif dalam 90 hari terakhir, tingkat pemanfaatan 64 persen, dengan kursi tak terpakai berbiaya sekitar sama dengan gaji seorang insinyur. Data pengeluaran menunjukkan 37 aplikasi yang tidak ada dalam katalog, sebagian besar alat kolaborasi dan analitik yang dibeli tim. Tiga dari pembaruan terbesar punya tanggal pemberitahuan yang lewat tanpa tinjauan pemakaian.

Tim membuat empat perubahan bersama tim produk. Aturan perebutan kembali kursi menghapus akses setelah 90 hari tanpa pemakaian, dengan permintaan satu klik untuk memulihkan. Halaman katalog mendaftar alat yang disetujui, biayanya, dan pemilik, dengan jalur dua hari untuk mengusulkan alat baru. Tinjauan pembaruan dimulai 100 hari sebelum tanggal pemberitahuan, dengan daftar periksa pemanfaatan, alternatif, dan umpan balik tim. Pipeline build platform penerbitan kini menghasilkan SBOM pada setiap rilis, dan pemindaian lisensi menandai komponen dengan lisensi tidak diketahui atau terbatas untuk ditinjau hukum.

Tiga bulan kemudian, pemanfaatan suite desain adalah 86 persen setelah merebut kembali 60 kursi, dan satu pembaruan dinegosiasi ulang ke jumlah kursi lebih rendah. Hitungan aplikasi tak disahkan turun dari 37 menjadi 24, ketika tim menambahkan empat alat berguna ke katalog dan memensiunkan duplikat. Cakupan SBOM adalah 70 persen layanan produksi. Pemindaian menemukan komponen dengan lisensi tidak diketahui di layanan yang jarang dipakai, yang ditinjau hukum dan diganti tim. Seorang vendor meminta verifikasi lisensi untuk produk lain, dan catatan yang dihasilkan untuk audit cocok, dengan satu koreksi. Direktur meminta janji pemanfaatan 100 persen, dan manajer menjelaskan bahwa angka sehat menyisakan sedikit ruang untuk karyawan baru dan perubahan, dan ia mengusulkan rentang sebagai pedoman, bukan target. Keputusan dicatat.

## Sudut pandang sektor

**Startup.** Alat dipilih cepat dan dibayar dengan kartu. Simpan daftar satu halaman langganan dengan pemilik dan tanggal pembaruan, tinjau tiap kuartal, dan pakai tingkat gratis dengan sengaja. Perhatikan lisensi sumber terbuka sebelum Anda mendistribusikan perangkat lunak atau menggalang investasi, karena investor mungkin bertanya.

**Bisnis kecil.** Segelintir produk membawa sebagian besar biaya. Lacak jumlah kursi dengan tangan, atur pengingat kalender untuk pembaruan, dan minta laporan pemakaian dari vendor. Waspadai langganan yang diperbarui otomatis dan lisensi yang terikat pada orang yang telah pergi.

**Perusahaan besar.** Kontrak kompleks, merger, dan banyak unit bisnis membuat catatan hak sulit. Investasikan pada model data yang memuat satuan hitung, otomatisasi penemuan dan umpan identitas, dan beri hukum dan pengadaan tempat di pipeline untuk kebijakan sumber terbuka. Harapkan audit vendor dan siapkan bukti di muka.

**Pemerintah dan sektor publik.** Aturan pengadaan, lisensi manfaat publik, dan persyaratan kedaulatan membentuk pilihan. Dokumentasikan alasan pembelian, simpan catatan kontrak selama periode yang diwajibkan, dan pertimbangkan standar terbuka dan jalur keluar sebagai persyaratan. Transparansi tentang belanja perangkat lunak mungkin kewajiban undang-undang (lihat topik 8.4, Metrik pemasok dan kontrak).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah waktu membangun catatan hak, perkakas untuk analisis pemakaian dan komposisi, dan upaya meninjau pembaruan. Sebagian alat sudah berlisensi sebagai bagian platform identitas atau endpoint. Biaya rutinnya beberapa jam per bulan untuk aset kecil dan lebih banyak untuk yang besar. Mengotomatisasi perebutan kembali dan pembuatan SBOM menurunkannya.

Imbal hasil datang dari belanja yang dihindari dan kejutan yang dihindari. Kursi tak terpakai adalah penghematan langsung saat pembaruan. Tinjauan pembaruan awal memungkinkan Anda menegosiasi dari pengetahuan. Mengetahui dependensi Anda memperpendek respons terhadap kerentanan dan pertanyaan lisensi. Hindari mengutip persentase penghematan industri yang tak dapat Anda telusuri. Ukur garis dasar Anda sendiri: kursi tak terpakai dikali biaya satuan, jumlah pembaruan yang ditinjau terlambat, waktu menjawab “layanan mana yang memakai komponen ini,” dan biaya temuan audit masa lalu. Sertakan biaya program itu sendiri, dan hitung paparan hukum yang dihindari hanya di mana Anda dapat menggambarkan risiko spesifik yang berkurang. Topik berikutnya tentang biaya membawa pandangan keuangan lebih jauh (lihat topik 7.5, Biaya layanan dan ekonomi per unit).

## Anti-pola dan jebakan

- **Menghitung dalam satuan yang salah.** Hitungan kursi untuk lisensi yang dijual per core menyesatkan. Catat satuannya.
- **Memperlakukan laporan vendor sebagai seluruh kebenaran.** Gabungkan dengan log Anda sendiri.
- **Memblokir alat secara bawaan.** Tim menyiasati blokir. Jadikan jalur yang disetujui cepat.
- **Merebut kembali tanpa jalan kembali.** Pengguna kehilangan kepercayaan. Buat pemulihan mudah dan cepat.
- **Meninjau pembaruan setelah tanggal pemberitahuan.** Pengaruh telah hilang. Mulai lebih awal.
- **Memindai lisensi dan mengabaikan hasilnya.** Pemindaian tanpa kebijakan dan pemilik keputusan adalah derau.
- **Menafsirkan lisensi di tim pengiriman.** Kasus sulit milik hukum.
- **Memperlakukan SBOM sebagai urusan kertas.** Jika tak ada yang menanyainya, ia membusuk. Pakai dalam latihan respons.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Hak dan pemakaian | Kontrak di email; tanpa data pemakaian | Catatan untuk produk utama; pemeriksaan pemakaian sesekali | Catatan hak dengan satuan hitung; pemakaian dari data identitas dan vendor | Posisi lisensi dan pemanfaatan ditinjau bulanan; kursi direbut kembali otomatis | Pemakaian dan belanja dibagikan dengan tim; data pembelian dan pemakaian mengalir antara pemasok dan organisasi |
| Jalur adopsi | Tim membeli apa yang mereka suka | Daftar alat yang disetujui | Jalur katalog cepat dengan pemilik dan kriteria tinjauan | Aplikasi tak disahkan dilacak dan diserap atau dipensiunkan | Pilihan alat dirancang bersama tim; layanan umum dipakai ulang di seluruh organisasi |
| Komponen dan dependensi | Tidak diketahui | Daftar komponen manual untuk beberapa layanan | SBOM dihasilkan saat rilis; kebijakan lisensi disepakati dengan hukum | Cakupan dilacak; pengecualian ditinjau; latihan respons dijalankan | SBOM dan kebijakan dibagikan dengan pemasok dan pelanggan; jalur keluar direncanakan |

## Daftar periksa

- [ ] Setiap produk berbayar atau berkewajiban punya catatan hak dengan satuan, jumlah, masa berlaku, dan pemilik.
- [ ] Pemakaian berasal dari setidaknya dua sumber, dibandingkan bulanan untuk produk kunci.
- [ ] Perebutan kembali kursi punya aturan, pemberitahuan, dan jalan kembali yang mudah.
- [ ] Katalog alat yang disetujui ada dengan jalur cepat untuk mengusulkan alat baru.
- [ ] Data pengeluaran dan identitas diperiksa untuk aplikasi tak disahkan.
- [ ] Tinjauan pembaruan dimulai setidaknya 90 hari sebelum tanggal pemberitahuan.
- [ ] SBOM dihasilkan dan disimpan untuk setiap rilis layanan produksi.
- [ ] Kebijakan lisensi yang disepakati dengan hukum menandai pengecualian di pipeline.
- [ ] Jalur keluar vendor dicatat untuk produk penting.
- [ ] Kontak hukum dan pengadaan untuk audit dinamai dan dikenal tim.

## Prompt AI

**Bangun templat catatan hak.**

```text
Susun templat untuk mencatat hak perangkat lunak untuk [type of organization],
mencakup jenis produk ini: [licensed, SaaS, open-source, built]. Kolom sebaiknya
mencakup satuan hitung, jumlah, masa berlaku, harga, tanggal pemberitahuan,
pembatasan, pemilik, sumber pemakaian, dan catatan keluar. Sarankan cara mengisi
tiap kolom dari sumber yang ada: [list]. Jangan menafsirkan syarat lisensi mana
pun. Daftar asumsi Anda dan kolom yang butuh masukan hukum atau pengadaan.
```

**Siapkan tinjauan pembaruan.**

```text
Kami punya pembaruan untuk [product] dengan tanggal pemberitahuan [date]. Fakta:
berhak [number] [units], pemakaian aktif [number] dalam 90 hari terakhir, biaya
tahunan [amount], dan umpan balik tim [summary]. Susun tinjauan pembaruan satu
halaman dengan pertanyaan untuk diajukan, opsi (perbarui apa adanya, kurangi,
ganti, negosiasi ulang), dan informasi yang masih kami butuhkan. Jangan
mengarang harga pasar. Daftar asumsi Anda.
```

**Rancang aturan perebutan kembali kursi.**

```text
Usulkan kebijakan perebutan kembali kursi untuk [product] yang dipakai [number]
orang di [type of organization]. Sertakan jendela ketidakaktifan, pemberitahuan
kepada pengguna, cara memulihkan akses, pengecualian (misalnya cuti atau
pemakaian musiman), dan cara mengukur apakah membantu tanpa menjengkelkan
pengguna. Konteks: [tools available]. Daftar asumsi Anda dan risiko.
```

**Triase hasil pemindaian lisensi.**

```text
Pemindaian kami atas [service] menemukan komponen dan lisensi ini: [paste list
with license identifiers]. Kebijakan kami: disetujui [list], butuh tinjauan
[list], tidak diizinkan [list]. Pilah komponen ke ketiga kelompok itu, tandai
kasus tidak diketahui atau ambigu, dan sarankan apa yang ditanyakan kepada hukum
untuk tiap item yang ditandai. Jangan memberi kesimpulan hukum. Daftar asumsi
Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik aset perangkat lunak atau lisensi.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik perangkat lunak menyatakan satuan hitung, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Bandingkan hak dengan pemakaian nyata, dihitung dalam satuan lisensi sendiri.
- Jadikan jalur yang disetujui sebagai jalur cepat, agar tim tak perlu menyembunyikan apa yang mereka pakai.
- Tinjau pemakaian sebelum tanggal pemberitahuan pembaruan, dan rebut kembali kursi tak terpakai dengan aturan yang terlihat.
- Hasilkan SBOM di pipeline dan tandai lisensi terhadap kebijakan yang disepakati dengan hukum.
- Jaga hukum dan pengadaan terlibat dalam penafsiran dan audit.
- Beri tim visibilitas atas pemakaian dan biaya mereka sendiri.

## Referensi dan bacaan lanjutan

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
