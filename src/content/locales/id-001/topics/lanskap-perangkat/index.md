# Lanskap perkakas

**Pilih perkakas untuk pertanyaan yang perlu Anda jawab dan data yang dapat Anda percaya, jaga data tetap portabel, dan belanjakan lebih sedikit untuk platform daripada untuk kebiasaan yang membuat angka layak dibaca.**

## Gambaran umum dan motivasi

Perkakas adalah tempat program metrik paling sering salah, ke dua arah yang berlawanan. Sebagian organisasi membeli platform analitik besar lebih dulu dan belakangan mendapati mereka tak punya definisi yang disepakati, data bersih, dan audiens. Yang lain membangun tumpukan skrip dan lembar kerja yang dipahami satu orang, dan program berakhir ketika orang itu pindah. Keduanya mulai dari perkakas dan mengabaikan pertanyaan yang dimaksudkan untuk dijawabnya.

Lanskapnya ramai dan berubah cepat, jadi topik ini sengaja netral vendor. Ia menggambarkan jenis perkakas, aliran data di antaranya, pertukaran antara membangun dan membeli, dan kriteria pemilihan. Ia tidak menyebut produk, karena nama produk cepat usang dan buku adalah pemandu yang buruk untuk fitur dan harga terkini. Prinsip pengukuran tidak berubah dengan vendor: ketahui apa yang Anda ukur, dari mana data datang, siapa pemiliknya, dan bagaimana akan dibaca.

Sebagian besar data yang dibutuhkan program metrik layanan sudah ada di sistem pencatatan. Perkakas [manajemen layanan TI](https://en.wikipedia.org/wiki/IT_service_management) menyimpan insiden, permintaan, masalah, perubahan, dan catatan konfigurasi. Sistem kendali sumber, build, pengujian, dan deployment menyimpan riwayat pekerjaan rekayasa. Sistem pemantauan dan [observabilitas](https://en.wikipedia.org/wiki/Observability_(software)) menyimpan data ketersediaan, latensi, dan galat. Perkakas survei, sistem keuangan, sistem sumber daya manusia, dan repositori kontrak menyimpan sisanya. Program metrik menggabungkan sumber-sumber ini tanpa mengganggu pekerjaan yang dilakukan di dalamnya (lihat topik 1.5, Sumber data dan instrumentasi).

Perpindahan data dari sumber ke tempat ia dapat dianalisis adalah [pipeline data](https://en.wikipedia.org/wiki/Data_pipeline), dan pola klasiknya adalah [extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load): baca dari sumber, bentuk ulang dan bersihkan, dan tulis ke penyimpanan. Penyimpanan itu dapat berupa [gudang data](https://en.wikipedia.org/wiki/Data_warehouse), repositori terintegrasi data dari beberapa sistem yang diatur untuk analisis. Program menjangkau sistem ini lewat [antarmuka pemrograman aplikasi](https://en.wikipedia.org/wiki/Application_programming_interface), yaitu cara satu perangkat lunak meminta data dari yang lain dengan cara terdefinisi. Mutu apa yang mengalir menentukan mutu setiap bagan. [Mutu data](https://en.wikipedia.org/wiki/Data_quality) mencakup akurasi, kelengkapan, konsistensi, dan ketepatan waktu, dan disiplin yang menopangnya adalah [tata kelola data](https://en.wikipedia.org/wiki/Data_governance).

Sisi keuangan layak diperhatikan. [Total biaya kepemilikan](https://en.wikipedia.org/wiki/Total_cost_of_ownership) sebuah perkakas mencakup lisensi, infrastruktur, integrasi, pelatihan, administrasi, dan biaya meninggalkannya. [Keterkuncian vendor](https://en.wikipedia.org/wiki/Vendor_lock-in) adalah keadaan ketika berganti pemasok begitu mahal sehingga pelanggan praktis terikat. Program metrik sangat terpapar, karena definisi, riwayat, dan dasbor menumpuk di dalam perkakas, dan mengekstraknya kemudian sulit.

Tujuan agile membentuk pendekatan. Pengiriman berkelanjutan berlaku bagi program: dirikan jalur kerja tertipis dari satu sumber ke satu tampilan untuk satu tim, belajar dari pemakaiannya, dan perluas. Keterlibatan pemangku kepentingan berkelanjutan berarti orang yang akan memakai angka ikut dalam pilihan perkakas. Perbaikan berkelanjutan dan evolusi berkelanjutan berarti perkakas diharapkan berubah, jadi portabilitas lebih penting daripada kesempurnaan. Kecepatan berkelanjutan berarti program tidak menjadi proyek rekayasa data yang melaparkan pekerjaan yang diukurnya. Dan individu termotivasi bekerja lebih baik dengan perkakas yang mereka bantu pilih dan pahami daripada dengan perkakas yang dipaksakan dari atas, terutama perkakas yang terasa seperti pengawasan (lihat topik 11.3, Meluncurkan metrik tanpa menumbuhkan ketakutan).

Topik ini bersandar pada panduan desain dasbor (lihat topik 11.1, Merancang dasbor metrik layanan) dan topik tata kelola di Bagian 1.

## Prinsip utama

- **Pertanyaan sebelum perkakas.** Tulis pertanyaan dan ukuran lebih dulu, lalu lihat perkakas apa yang dibutuhkannya.
- **Pakai sistem pencatatan.** Ambil data dari tempat pekerjaan terjadi, dan hindari meminta orang memasukkannya dua kali.
- **Simpan definisi di luar perkakas.** Pelihara definisi metrik dalam bentuk lugas dan portabel yang bertahan dari pergantian platform.
- **Utamakan data portabel.** Simpan data dalam format terbuka, dengan antarmuka terdokumentasi, dan jaga jalan keluar.
- **Mulai tipis dan tumbuh.** Satu sumber, satu tampilan, satu tim, lalu perluas.
- **Hitung biaya penuh.** Lisensi hanyalah sebagian dari biaya integrasi, pembersihan data, dan pemeliharaan.
- **Lindungi orang.** Perkakas sebaiknya mengagregasi ke tim dan layanan, menegakkan aturan akses, dan mempersulit pengawasan.
- **Perlakukan pipeline sebagai layanan.** Ia butuh pemilik, pemantauan, pengujian, dan cara menangani kegagalan.

## Definisi metrik

Ukuran di bawah menggambarkan kesehatan perkakas metrik dan pasokan datanya. Ukuran itu untuk tim program, untuk menjaga infrastruktur tetap jujur, dan tidak untuk menilai orang.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan sumber | Porsi sistem pencatatan yang dibutuhkan untuk ukuran yang disepakati yang menyuapi penyimpanan metrik secara otomatis | sumber terhubung dan teruji / sumber yang dibutuhkan untuk ukuran yang disepakati | persen | Inventaris sumber; konfigurasi pipeline | Manajemen informasi dan teknologi; manajemen konfigurasi layanan | Pengiriman berkelanjutan pipeline | Kuartalan |
| Keandalan pipeline | Porsi pemuatan data terjadwal yang selesai tepat waktu dengan pemeriksaan lulus | pemuatan tepat waktu dengan pemeriksaan lulus / pemuatan terjadwal | persen | Log pipeline dan hasil pengujian | Manajemen pemantauan dan peristiwa | Pengujian otomatis dan umpan balik cepat | Mingguan |
| Waktu ke ukuran baru | Waktu berlalu dari permintaan ukuran baru yang disetujui sampai ketersediaannya dengan kartu definisi | hari dari persetujuan sampai terbit, median dan persentil ke-85 | hari | Catatan permintaan dan rilis | Manajemen permintaan layanan; pemberdayaan perubahan | Inkremen kecil nilai | Kuartalan |
| Tingkat rekonsiliasi | Porsi angka kunci yang cocok antara penyimpanan metrik dan sistem sumber pada pemeriksaan bersampel | angka cocok dalam toleransi / angka diperiksa | persen | Pemeriksaan rekonsiliasi | Manajemen informasi dan teknologi | Umpan balik tepercaya | Bulanan |
| Porsi upaya manual | Porsi upaya pada laporan berulang yang dihabiskan untuk pengumpulan dan pembersihan manual | jam pada langkah manual / total jam pada laporan berulang | persen | Estimasi waktu; survei tim | Perbaikan berkelanjutan | Menghapus toil | Kuartalan |
| Kesiapan keluar | Apakah definisi, riwayat, dan dasbor dapat diekspor dalam bentuk terdokumentasi dan dapat dipakai | ekspor teruji dan lengkap / pengujian ekspor yang direncanakan | persen | Catatan pengujian ekspor | Manajemen pemasok; manajemen kelangsungan layanan | Pilihan yang berkelanjutan | Tahunan |
| Biaya perkakas per tim yang didukung | Biaya tahunan penuh perkakas program dibagi tim yang dilayaninya | (lisensi + infrastruktur + upaya pemeliharaan) / tim dilayani | mata uang per tim | Catatan keuangan dan upaya | Manajemen keuangan layanan | Kecepatan berkelanjutan | Tahunan |

Hitung sumber menurut apa yang dibutuhkan ukuran yang disepakati dan bukan menurut apa yang ada, agar cakupan tidak dinaikkan dengan menghubungkan sistem yang tak relevan. Rekonsiliasi membutuhkan pemilihan sampel dan toleransi sebelumnya. Biaya perkakas per tim yang didukung adalah angka deskriptif yang dipakai untuk membandingkan opsi, bukan target untuk ditekan turun. Ia mencakup upaya orang yang merawat pipeline.

## Rekomendasi

### Putuskan apa yang Anda butuhkan

**1. Tulis persyaratan sebagai pertanyaan dan ukuran.** Daftar ukuran yang telah disepakati program untuk diterbitkan (lihat topik 11.1, Merancang dasbor metrik layanan), sumber yang dibutuhkan masing-masing, seberapa segar masing-masing harus, siapa yang boleh melihatnya, dan berapa lama riwayat harus disimpan. Bedakan yang wajib dari preferensi. Dokumen pendek dua halaman lebih baik daripada permintaan proposal yang panjang.

**2. Inventarisasi apa yang sudah Anda miliki.** Banyak organisasi punya fitur analitik dalam perkakas manajemen layanan, rekayasa, dan pemantauan mereka yang tak terpakai. Banyak yang punya lembar kerja, skrip, dan laporan yang sudah menjawab sebagian kebutuhan. Mulailah dengan melihat apa yang dapat dilakukan semua ini. Perkakas termurah adalah yang sudah dibayar dan sudah dipahami.

**3. Periksa data sebelum perkakas.** Untuk tiap sumber, periksa apakah datanya lengkap, dimasukkan secara konsisten, dan dapat diakses lewat antarmuka. Perkakas tak dapat memperbaiki kategori insiden yang tak dipakai siapa pun, catatan perubahan yang dibuat setelah kejadian, atau stempel waktu yang ditimpa. Sebagian pekerjaan awal yang paling berharga adalah memperbaiki penangkapan data di sumber (lihat topik 7.4, Metrik kualitas konfigurasi dan CMDB).

### Bangun, beli, atau gabungkan

**4. Bandingkan membangun dan membeli menurut biaya penuh dan kecocokan.** Membeli platform analitik atau produk analitik rekayasa kemasan membawa konektor siap pakai, bagan, dan dukungan, dengan harga lisensi, model dunia yang tetap, dan ketergantungan. Membangun pipeline dan tampilan membawa kecocokan dan kendali, dengan harga waktu rekayasa dan pemeliharaan. Kebanyakan organisasi berakhir dengan menggabungkan: pakai pelaporan bawaan di mana cukup baik, pakai perkakas analisis umum untuk tampilan, dan bangun konektor tipis di mana tak ada yang cocok.

**5. Uji prototipe dengan data nyata.** Sebelum berkomitmen, jalankan uji coba terbatas waktu dengan dua atau tiga ukuran Anda sendiri, memakai data nyata dan pengguna nyata. Periksa berapa lama koneksi memakan waktu, seberapa baik perkakas menangani definisi Anda, apakah ia dapat menunjukkan distribusi dan persentil, dan bagaimana ia mengendalikan akses. Demonstrasi pemasaran memakai data bersih, dan data Anda tidak.

**6. Rencanakan keluar sebelum masuk.** Tanyakan bagaimana definisi, riwayat, dan dasbor dapat diekspor, dan ujilah. Utamakan perkakas dengan antarmuka terbuka dan format standar, dan simpan salinan definisi metrik dan data bersih Anda sendiri. Biaya pergi adalah bagian biaya tinggal, dan jalan keluar yang kredibel memperbaiki posisi tawar Anda (lihat topik 8.4, Metrik pemasok dan kontrak).

### Pilih dengan kriteria jelas

**7. Pakai kriteria pemilihan netral vendor.** Kriteria berguna mencakup yang berikut. Apakah sumber data yang Anda butuhkan punya konektor terawat? Dapatkah definisi ditulis, diberi versi, dan ditinjau? Dapatkah perkakas menunjukkan distribusi, persentil, dan tren selain rata-rata dan hitungan? Apakah ia mengagregasi ke tim dan layanan dan memungkinkan Anda membatasi tampilan tingkat individu? Apakah ia mendukung akses berbasis peran dan audit? Apakah data dapat diekspor dalam format terbuka? Bagaimana vendor menangani perubahan, gangguan, dan insiden keamanan? Berapa biayanya pada skala yang Anda harapkan dalam tiga tahun?

**8. Waspadai penilaian bawaan.** Sebagian perkakas menawarkan skor gabungan, peringkat orang, atau indeks “produktivitas” langsung dari kotaknya. Itu mudah diadopsi dan sulit dibela (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Periksa apakah fitur semacam itu dapat dimatikan, dan tetapkan kebijakan sebelum menyalakan apa pun.

**9. Libatkan orang yang akan memakainya.** Minta tim mencoba opsi daftar pendek dengan data mereka. Pertanyaan mereka akan mengungkap batas yang tak ditemukan dokumen persyaratan. Sertakan keamanan, privasi, keuangan, dan pengadaan sejak dini (lihat topik 8.1, Metrik insiden keamanan dan kerentanan).

### Jalankan pipeline sebagai layanan

**10. Otomatisasi, uji, dan pantau pipeline.** Perlakukan pemuatan data seperti layanan produksi lain. Jalankan pemeriksaan otomatis atas hitungan, rentang, duplikat, dan kesegaran. Beri peringatan saat gagal, dan tunjukkan status mutu data pada dasbor. Beri versi pada logika transformasi dan tinjau perubahannya seperti kode (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan).

**11. Simpan katalog definisi.** Pelihara katalog bersama dengan definisi, rumus, sumber, pemilik, dan batas tiap ukuran. Ia dapat berupa repositori berkas teks lugas, perkakas katalog data, atau wiki. Yang penting adalah bahwa ia sumber kebenaran untuk makna, dan bahwa dasbor membaca darinya atau menautkannya (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

**12. Tinjau perkakas tiap tahun.** Tiap tahun, periksa berapa biaya perkakas, bagian mana yang dipakai program, di mana upaya manual tetap ada, dan opsi baru apa yang ada. Pensiunkan apa yang tak dipakai siapa pun. Pertimbangkan kembali keseimbangan bangun atau beli seiring program matang. Rencanakan perubahan sebagai bagian normal pekerjaan.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan sumber | Menghubungkan sumber mudah atau tak relevan; menghitung koneksi yang tak membawa data yang dapat dipakai | Hitung menurut ukuran yang disepakati; periksa kelengkapan data per sumber |
| Keandalan pipeline | Melonggarkan pemeriksaan agar pemuatan selalu lulus; menjadwalkan lebih sedikit pemuatan | Tinjau kekuatan pemeriksaan; lacak rekonsiliasi dan jumlah baris sumber |
| Waktu ke ukuran baru | Menerbitkan tanpa definisi atau pengujian; mempersempit apa yang dihitung sebagai ukuran baru | Wajibkan kartu definisi dan pemeriksaan rekonsiliasi untuk penyelesaian |
| Tingkat rekonsiliasi | Memilih angka mudah untuk diperiksa; melebarkan toleransi setelah meleset | Pilih sampel sebelum pemeriksaan; tetapkan toleransi sebelumnya; sertakan angka sulit |
| Porsi upaya manual | Meremehkan pekerjaan manual; menyembunyikan upaya di anggaran lain | Tanyakan orang yang mengerjakan pekerjaan; bandingkan dengan waktu yang dihabiskan menjelang akhir tiap siklus pelaporan |
| Kesiapan keluar | Menguji ekspor parsial; menghitung rencana terdokumentasi sebagai kesiapan | Jalankan pemulihan penuh ke perkakas berbeda pada sampel; verifikasi definisi dan riwayat |
| Biaya perkakas per tim yang didukung | Mengecualikan upaya pemeliharaan; menambah tim di atas kertas | Sertakan waktu staf; hitung tim yang aktif memakai tampilan mereka |

Pembacaan yang sehat menunjukkan data yang tiba tepat waktu dan cocok dengan sumber, ukuran baru yang diterbitkan dengan definisi, upaya manual yang turun, dan jalan keluar yang telah diuji setidaknya sekali.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Pelaporan bawaan tiap perkakas | Murah; sudah ada; dipahami | Silo; definisi tidak konsisten lintas perkakas |
| Satu suite dari satu vendor | Terintegrasi; satu kontrak | Keterkuncian; cocok dengan model vendor, bukan model Anda |
| Produk analitik rekayasa kemasan | Awal cepat; konektor siap | Model tetap; risiko penilaian tingkat individu; biaya pada skala |
| Perkakas analisis dan visualisasi umum | Fleksibel; keterampilan luas tersedia | Butuh pasokan data dan keterampilan desain |
| Gudang dengan lapisan transformasi | Kendali kuat; penggabungan lintas sumber | Upaya rekayasa; butuh kepemilikan |
| Lembar kerja dan skrip | Cepat dimulai; tanpa lisensi | Rapuh; bergantung pada individu; sulit diaudit |
| Tumpukan sumber terbuka | Kendali; tanpa biaya lisensi | Upaya pemeliharaan; dukungan bergantung pada Anda |
| Metrik yang dikumpulkan dengan tangan | Bekerja tanpa perkakas | Lambat; rawan galat; sulit dipertahankan |

Jawaban prosanya adalah mulai dengan apa yang sudah Anda miliki, menambah koneksi tertipis yang menjawab pertanyaan nyata, menjaga definisi dan data tetap portabel, dan pindah ke perkakas lebih berat hanya ketika yang lebih ringan terbukti membatasi keputusan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Angka mana yang kita hasilkan dengan tangan tiap bulan, dan apa yang dibutuhkan untuk berhenti?**
Daftar laporan manual dan jam yang dimakannya. Temukan sumber masing-masing dan apakah punya antarmuka. Fasilitator sebaiknya bertanya laporan mana yang bisa dibuang saja. Sepakati satu untuk diotomatisasi dan satu untuk dipensiunkan.

**2. Jika perkakas pelaporan kita saat ini lenyap besok, apa yang akan kita hilangkan?**
Namai definisi, riwayat, dan dasbor yang hanya ada di dalamnya. Periksa mana yang dapat diekspor. Sepakati di mana menyimpan salinan.

**3. Data mana di sistem kita yang paling tidak kita percaya, dan mengapa?**
Lihat kebiasaan entri, bawaan, dan bidang yang ditimpa. Estimasi seberapa jauh tiap distorsi memengaruhi ukuran yang kita terbitkan. Sepakati perbaikan sumber mana yang akan menambah kepercayaan paling banyak dengan upaya paling sedikit.

**4. Apa yang dibiarkan perkakas dilihat orang yang tidak kita inginkan?**
Periksa tampilan tingkat individu, log aktivitas, dan peringkat. Putuskan apa yang dibatasi atau dimatikan, dan tuliskan aturannya sebelum ada yang memakai fitur itu.

**5. Berapa lama kita menambah ukuran baru, dan apa yang memperlambat?**
Telusuri permintaan terbaru dari persetujuan sampai ketersediaan. Tandai penantiannya. Sepakati apa yang dihapus, seperti persetujuan, definisi yang hilang, atau pembersihan manual.

**6. Berapa biaya penuh perkakas ini untuk satu tim selama satu tahun?**
Tambahkan lisensi, infrastruktur, integrasi, pelatihan, dan waktu orang yang merawatnya. Bandingkan dengan keputusan yang diperbaikinya. Bahas apa yang akan kita hentikan pembayarannya.

## Empat perspektif

### Tim produk dan pengiriman

Tim menginginkan data yang datang dari pekerjaan tanpa entri tambahan, dan tampilan yang menjawab pertanyaan mereka. Mereka sebaiknya membantu memilih dan menguji perkakas, memiliki definisi ukuran mereka sendiri, dan menolak fitur yang memeringkat individu. Waktu mereka adalah masukan paling langka, dan perkakas yang meminta mereka mencatat pekerjaan dua kali akan ditolak.

### Tim layanan dan operasi

Tim operasi menjalankan sumber dan sering pipeline. Mereka sebaiknya memperlakukan pipeline sebagai layanan dengan pemantauan dan pengujian, menjaga bidang data sumber andal, dan menandai perubahan pada sistem pencatatan yang akan merusak konektor. Merekalah yang pertama melihat ketika angka salah.

### Kepemimpinan dan tata kelola

Pemimpin mendanai program dan menetapkan harapan. Mereka sebaiknya meminta biaya total, bukan harga lisensi, mewajibkan portabilitas dan jalan keluar, menolak membeli platform untuk memecahkan masalah definisi, dan berkeras pada aturan privasi dan akses. Mereka sebaiknya menerima awal yang sederhana dan menilainya dari keputusan yang diperbaikinya.

### Pelanggan dan pengguna

Pelanggan dan pengguna jarang melihat perkakas, dan mereka hidup dengan akibatnya: data tentang mereka disimpan, digabung, dan dianalisis. Mereka berhak atas aturan jelas tentang apa yang dikumpulkan, berapa lama disimpan, siapa yang melihat, dan bagaimana dilindungi. Di mana ukuran bersandar pada umpan balik mereka, perkakas sebaiknya menghormati persetujuan dan anonimitas.

## Dalam praktik: contoh ITIL agile

Sebuah perusahaan logistik regional punya perkakas manajemen layanan, sistem kendali sumber dan deployment, platform pemantauan, dan perkakas survei, dan masing-masing menghasilkan laporannya sendiri. Kepala manajemen layanan menginginkan satu pandangan kesehatan layanan untuk 12 tim. Sebuah vendor menawarkan platform analitik serba-ada dengan kontrak tiga tahun. Angka di bawah bersifat ilustratif.

Kepala manajemen layanan pertama-tama menulis pertanyaan dan 14 ukuran yang disepakati tim dan pemimpin dalam sesi dasbor. Ia menginventarisasi apa yang ada: perkakas manajemen layanan dapat mengekspor data insiden dan perubahan lewat antarmukanya, sistem deployment menyediakan stempel waktu deployment, dan platform pemantauan melaporkan ketersediaan terhadap sasaran. Ia meminta kelompok kecil perwakilan tim menguji dua opsi pada tiga ukuran dengan data nyata: platform vendor dan kombinasi perkakas visualisasi umum dengan penyimpanan data kecil dan konektor tipis.

Uji coba menemukan perbedaan. Platform terhubung ke semua sumber dalam dua hari, tetapi menghitung lead time sebagai rata-rata dan tak dapat menunjukkan persentil tinggi, punya “skor produktivitas tim” bawaan yang tak dapat dimatikan, dan mengekspor definisi dasbor menghasilkan berkas yang tak dapat dibaca perkakas lain. Kombinasi memakan 11 hari untuk terhubung, tetapi menunjukkan median dan persentil, menyimpan definisi sebagai teks lugas di repositori, dan membatasi bidang tingkat individu di penyimpanan data. Kelompok juga mendapati bahwa 30 persen catatan perubahan dibuat setelah deployment, sehingga lead time salah apa pun perkakas yang membacanya. Memperbaiki kebiasaan entri di sumber menjadi pekerjaan pertama.

Perusahaan memilih kombinasi. Cakupan sumber naik dari 3 dari 8 sumber yang dibutuhkan menjadi 7 dari 8 selama dua kuartal. Keandalan pipeline mulai pada 71 persen pemuatan tepat waktu dengan pemeriksaan lulus, dan mencapai 96 persen setelah tim menambah pengujian dan peringatan kegagalan. Waktu ke ukuran baru turun dari median 31 hari menjadi 9. Upaya manual untuk laporan bulanan turun dari sekitar 40 jam menjadi 6. Seorang direktur bertanya apakah skor produktivitas platform vendor dapat ditambahkan untuk memberi peringkat tunggal bagi tim. Kepala manajemen layanan menjelaskan analisis dalam topik 1.2, menunjukkan apa yang terjadi ketika skor serupa dipakai di tempat lain dalam perusahaan, dan mengusulkan pandangan seimbang yang ada. Keputusan dicatat, dan fitur skor dimatikan pada perkakas apa pun yang memilikinya.

## Sudut pandang sektor

**Startup.** Pakai apa yang sudah disediakan produk dan perkakas yang ada. Lembar kerja dan laporan bawaan perkakas yang Anda pakai dapat menjawab sebagian besar pertanyaan awal. Tahan platform data sampai pertanyaan stabil dan upaya manual terasa menyakitkan. Simpan definisi metrik tertulis agar perpindahan kemudian mudah.

**Bisnis kecil.** Sedikit ukuran dan sedikit sistem berarti perkakas sederhana. Laporan bawaan dan lembar kerja sering cukup. Risiko utamanya adalah data yang hanya ada di kepala satu orang dan di perkakas tanpa ekspor. Pilih produk yang dapat Anda tinggalkan, dan tuliskan definisinya.

**Perusahaan besar.** Banyak sistem, banyak tim, dan banyak definisi berargumen untuk penyimpanan data yang diatur, katalog definisi, dan tampilan berlapis. Kepemilikan terfederasi bekerja lebih baik daripada tim pusat yang membangun setiap laporan. Perhatikan keterkuncian, kendali akses, privasi, dan penilaian pemasok, dan pertimbangkan tim platform kecil yang menyediakan pipeline sebagai layanan.

**Pemerintah dan sektor publik.** Aturan pengadaan, kedaulatan data, dan aksesibilitas memengaruhi pilihan perkakas. Standar terbuka dan portabilitas berharga karena kontrak panjang dan pemerintahan berganti. Rencanakan untuk penilaian keamanan, retensi arsip, dan aturan pengungkapan publik, dan periksa panduan terkini tentang hosting dan pengadaan (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya mencakup lisensi atau langganan, infrastruktur, pekerjaan integrasi dan konektor, pembersihan data, pekerjaan definisi dan katalog, pelatihan, dukungan, dan upaya berulang menjaga pipeline sehat. Opsi bangun membawa biaya rekayasa yang mudah diremehkan, dan opsi beli membawa biaya yang tumbuh dengan skala dan biaya meninggalkannya.

Imbal hasilnya datang dari upaya pelaporan yang dihemat, jawaban lebih cepat, lebih sedikit sengketa soal angka, dan keputusan lebih baik dari data tepercaya. Bangun kasus dari data Anda sendiri: jam yang dihabiskan untuk laporan manual sekarang, jumlah versi saingan dari satu angka, penundaan antara pertanyaan dan jawaban, dan biaya perkakas yang tumpang tindih. Hindari mengutip angka analis tentang imbal hasil analitik tanpa sumber yang dapat ditelusuri dan relevansinya dengan konteks Anda. Perbandingan yang adil menghitung biaya penuh tiap opsi selama tiga tahun, termasuk keluar (lihat topik 7.5, Biaya layanan dan ekonomi per unit, dan topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Perkakas dulu, pertanyaan kemudian.** Platform tiba, dan tak ada yang tahu apa yang ditanyakan padanya. Tulis ukuran lebih dulu.
- **Membeli untuk memperbaiki masalah definisi.** Perselisihan tentang makna tetap ada di perkakas mana pun. Selesaikan definisinya.
- **Skor individu bawaan.** Menggoda dan mendistorsi. Matikan dan tetapkan kebijakan lebih dulu.
- **Tanpa jalan keluar.** Riwayat dan definisi terperangkap. Uji ekspor dan simpan salinan.
- **Pipeline satu orang.** Berhenti ketika orang itu pergi. Dokumentasikan, uji, dan bagi kepemilikan.
- **Entri ganda.** Orang mencatat pekerjaan yang sama dua kali, dan mutu keduanya turun. Ambil data dari sistem pencatatan.
- **Rekayasa berlebihan sejak awal.** Platform data tiba sebelum satu tampilan pun membuktikan nilainya. Mulai tipis.
- **Mengabaikan mutu data.** Bagan bersih pada data kotor menyesatkan lebih meyakinkan. Perbaiki penangkapan di sumber.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Pasokan data | Pengumpulan manual; lembar kerja | Beberapa umpan otomatis; skrip individu | Sumber yang disepakati menyuapi penyimpanan bersama lewat pipeline teruji | Keandalan, rekonsiliasi, dan kesegaran dikelola dan terlihat | Pipeline terfederasi dengan kontrak bersama lintas tim dan pemasok; sumber diperbaiki dari umpan balik |
| Definisi dan katalog | Di kepala orang | Sebagian terdokumentasi | Satu katalog definisi dengan pemilik, berversi dan ditinjau | Katalog menggerakkan dasbor; perubahan ditinjau bersama pengguna | Definisi dimiliki bersama lintas tim dan pemasok; dipensiunkan ketika berhenti menginformasikan keputusan |
| Pilihan dan biaya | Pembelian ad hoc | Perkakas tumpang tindih | Kriteria tertulis; keluar diuji; biaya penuh dihitung | Biaya per tim yang didukung dan upaya manual dikelola | Pilihan perkakas ditinjau secara teratur bersama pengguna dan disesuaikan seiring kebutuhan berubah |

## Daftar periksa

- [ ] Ukuran yang disepakati dan pertanyaannya tertulis sebelum perkakas dibandingkan.
- [ ] Perkakas dan laporan yang ada telah diinventarisasi dan diuji lebih dulu.
- [ ] Mutu data di sumber utama telah diperiksa dan celah terburuk diperbaiki.
- [ ] Kriteria pemilihan tertulis dan mencakup distribusi, kendali akses, dan ekspor.
- [ ] Uji coba terbatas waktu dengan data nyata dan pengguna nyata dilakukan sebelum komitmen apa pun.
- [ ] Fitur penilaian dan peringkat tingkat individu dimatikan atau dibatasi oleh kebijakan.
- [ ] Definisi disimpan dalam katalog portabel di luar perkakas tunggal mana pun.
- [ ] Pipeline punya pemilik, pemeriksaan otomatis, pemantauan, dan peringatan kegagalan.
- [ ] Ekspor definisi dan riwayat telah diuji.
- [ ] Biaya penuh selama tiga tahun, termasuk keluar, telah dihitung.

## Prompt AI

**Tulis persyaratan dari pertanyaan.**

```text
Berikut pertanyaan yang diajukan audiens kami dan ukuran yang kami rencanakan
untuk diterbitkan: [paste]. Susun dokumen persyaratan dua halaman untuk perkakas
atau pipeline metrik. Cakup sumber data, kesegaran, kendali akses, retensi,
distribusi dan persentil, ekspor dan portabilitas, dan daftar yang wajib versus
preferensi. Jangan menyebut produk. Daftar asumsi Anda dan butir untuk
dikonfirmasi dengan tim.
```

**Rencanakan uji coba perkakas.**

```text
Kami membandingkan [options] untuk program metrik kami. Rancang uji coba dua pekan
memakai tiga ukuran kami dan data nyata. Nyatakan apa yang diuji, cara memberi
skor opsi terhadap kriteria tertulis, siapa yang ikut, cara memeriksa kendali
akses dan ekspor, dan bukti apa yang akan kami catat. Jangan mengklaim hasil
tentang produk tertentu. Daftar asumsi Anda dan risiko.
```

**Tinjau pipeline data.**

```text
Berikut uraian bagaimana data mengalir dari [sources] ke dasbor kami: [paste].
Identifikasi titik tempat data bisa terlambat, terduplikasi, tertimpa, atau
hilang, dan sarankan pemeriksaan otomatis untuk masing-masing. Usulkan cara
merekonsiliasi angka kunci dengan sumber. Jangan mengarang perilaku sistem. Daftar
asumsi Anda dan apa yang tak dapat Anda ketahui dari uraian itu.
```

**Bandingkan biaya penuh.**

```text
Bantu saya membandingkan biaya penuh tiga tahun dari membangun, membeli, dan
menggabungkan perkakas untuk program metrik kami. Daftar kategori biaya untuk
tiap opsi, termasuk lisensi, infrastruktur, integrasi, pembersihan data,
pelatihan, pemeliharaan, dan keluar. Sediakan tabel dengan kolom kosong untuk
angka kami sendiri. Jangan memberi harga. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan sumber data dan pagar pembatas bagi tiap ukuran saat menulis persyaratan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa catatan keputusan perkakas membawa definisi, sumber data, dan pagar pembatas.

## Poin penting

- Tulis pertanyaan dan ukuran lebih dulu, dan pilih perkakas untuk melayaninya.
- Pakai sistem pencatatan, perbaiki penangkapan data di sumber, dan uji rekonsiliasi.
- Jaga definisi dan data portabel, dan uji keluar sebelum Anda berkomitmen.
- Matikan penilaian dan peringkat tingkat individu, dan tetapkan kebijakan sebelum menyalakan fitur apa pun.
- Jalankan pipeline sebagai layanan dengan pemilik, pengujian, dan pemantauan.
- Hitung biaya penuh selama beberapa tahun, dan mulai dengan jalur tertipis yang menjawab pertanyaan nyata.

## Referensi dan bacaan lanjutan

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
