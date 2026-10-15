# Kerangka pengukuran

**Kerangka pengukuran adalah cara memutuskan angka mana yang layak mendapat tempat di halaman, dan yang terbaik semuanya dimulai dari tujuan dan pertanyaan, jadi pilih kerangka teringan yang menjaga setiap metrik tetap terikat pada sebuah keputusan.**

## Gambaran umum dan motivasi

Tim yang ingin mengukur pekerjaannya bertemu masalah awal: ada ribuan angka yang mungkin, dan tak ada aturan untuk memilih di antaranya. Kerangka pengukuran memberi aturan itu. Ia menamai titik awal (tujuan, strategi, segelintir kondisi kritis), dan menjelaskan cara beralih dari titik awal itu ke sekumpulan kecil ukuran yang akan dibaca dan ditindak orang. Kerangka berbeda dalam kosakata, tetapi berbagi satu maksud: menjaga setiap angka terhubung dengan alasan untuk memilikinya.

Topik ini membahas lima gagasan yang muncul di hampir setiap organisasi yang menjalankan layanan. Yang pertama adalah pendekatan Goal-Question-Metric (GQM), yang dikembangkan peneliti rekayasa perangkat lunak [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) dan rekan-rekannya. Ia dimulai dari tujuan, mengajukan pertanyaan yang akan menunjukkan apakah tujuan itu tercapai, dan baru kemudian memilih metrik. Yang kedua adalah [tujuan dan hasil kunci](https://en.wikipedia.org/wiki/OKR) (OKR), metode penetapan tujuan yang dipopulerkan di Intel oleh Andrew Grove dan kemudian di Google lewat John Doerr. Sebuah tujuan menyatakan ke mana tim ingin pergi, dan segelintir hasil kunci menyatakan bagaimana ia akan tahu telah tiba. Yang ketiga adalah [balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard), diperkenalkan Robert Kaplan dan David Norton pada 1992, yang meminta organisasi melihat hasil keuangan, pelanggan, proses internal, serta pembelajaran dan pertumbuhan bersama-sama, sehingga tak ada satu pandangan pun mendominasi.

Gagasan keempat dan kelima lebih tua dan lebih polos. [Faktor keberhasilan kritis](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) adalah kondisi yang harus benar agar tujuan tercapai, dan [indikator kinerja utama](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) adalah ukuran seberapa baik kondisi itu bertahan. ITIL, kerangka manajemen layanan TI (ITSM) yang diterbitkan Axelos lalu PeopleCert, memakai persis pasangan ini. Dalam ITIL 4 (versi yang dipakai luas per Oktober 2026), panduan tentang pengukuran dan pelaporan serta perbaikan berkelanjutan meminta praktisi mendefinisikan CSF untuk sebuah layanan atau praktik, lalu memilih KPI yang menunjukkan kemajuan terhadapnya. Pendekatan [ITIL](https://en.wikipedia.org/wiki/ITIL) yang lebih luas diringkas di sini, tidak direproduksi.

Pandangan agile dan ITIL bertemu secara berguna di area ini. Praktik agile menyukai siklus belajar yang pendek: tim menyatakan hipotesis, mencoba sesuatu, memeriksa hasilnya, dan menyesuaikan. Praktik ITIL menyukai layanan yang terdefinisi, tingkat layanan yang disepakati, dan proses perbaikan yang terkelola. Kerangka seperti GQM cocok dengan kebiasaan agile menanyakan apa yang ingin dipelajari tim. Balanced scorecard cocok dengan kebutuhan ITIL menunjukkan kepada pemimpin gambaran utuh kesehatan layanan. OKR berada di antara keduanya, karena ditinjau dalam siklus pendek namun ditulis dalam bahasa hasil yang dipahami badan tata kelola.

Tiga istilah berulang dalam topik ini. **Tujuan** adalah pernyataan hasil yang dimaksudkan bagi audiens bernama. **Pertanyaan** adalah sesuatu yang perlu Anda ketahui untuk menyatakan apakah tujuan tercapai. **Metrik** adalah cara terdefinisi menghitung atau mengukur waktu sesuatu yang membantu menjawab pertanyaan. Kerangka berbeda dalam cara memperlakukan istilah ketiga, tetapi semuanya berkeras bahwa ia datang terakhir, setelah tujuan dan pertanyaan. Urutan ini adalah perlindungan terkuat terhadap kegagalan yang diuraikan hukum Goodhart (lihat topik 1.2, Hukum Goodhart dan psikologi metrik), ketika angka menggantikan tujuan yang semestinya dilayaninya.

Tidak ada kerangka yang memperbaiki pilihan tujuan yang buruk, dan tidak ada yang menghilangkan kebutuhan akan pagar pembatas. Perlakukan kerangka sebagai perancah bagi percakapan, dan harapkan mengubahnya seiring pekerjaan berubah. KPI khususnya dapat menjadi [metrik pajangan](https://en.wikipedia.org/wiki/Vanity_metric), hitungan yang hanya naik dan tak pernah memberi masukan bagi keputusan, seperti total tiket ditangani. Alasan yang lebih luas untuk mengukur dibahas di tempat lain (lihat topik 1.1, Mengapa mengukur ITIL agile).

### Bagaimana kerangka-kerangka itu berbeda

Kerangka-kerangka itu menjawab pertanyaan yang sedikit berbeda, dan mencampurnya lazim. Pakai tabel di bawah sebagai peta.

| Kerangka | Titik awal | Keluaran khas | Paling cocok untuk | Cakrawala khas |
| --- | --- | --- | --- | --- |
| Goal-Question-Metric | Tujuan spesifik untuk produk, proses, atau layanan | Pohon tujuan, pertanyaan, dan metrik | Merancang program pengukuran untuk satu tim atau layanan | Pekan sampai bulan |
| OKR | Tujuan ambisius untuk periode berikutnya | Beberapa tujuan, masing-masing dengan hasil kunci terukur | Menyelaraskan tim pada hasil dan memusatkan upaya | Kuartal |
| Balanced scorecard | Strategi organisasi | Tujuan dan ukuran dalam empat perspektif | Menunjukkan kepada pemimpin pandangan utuh dan menghubungkan strategi dengan operasi | Tahun |
| CSF dan KPI | Layanan, praktik, atau tujuan | Beberapa kondisi yang harus berlaku, masing-masing dengan indikator | Mengoperasikan praktik ITIL yang terdefinisi dan melaporkan kesehatannya | Berkelanjutan, ditinjau berkala |

## Prinsip utama

- **Mulai dari tujuan, lalu pertanyaan, lalu metrik.** Metrik yang dipilih lebih dulu tidak punya cara untuk dinilai berguna.
- **Buat audiens dan keputusan eksplisit.** Setiap tujuan menyebut siapa yang diuntungkan, dan setiap metrik menyebut siapa yang akan menindaknya.
- **Jaga set tetap kecil.** Beberapa ukuran yang dibaca dan dipercaya mengalahkan daftar panjang yang hanya dilirik.
- **Seimbangkan pandangan.** Pasangkan kecepatan dengan kualitas, biaya dengan pengalaman, dan keluaran jangka pendek dengan pembelajaran jangka panjang, agar tak ada kerangka yang menghargai satu dengan mengorbankan yang lain.
- **Perlakukan target sebagai hipotesis.** Tujuan dan angkanya adalah taruhan yang bisa salah, jadi tinjau sesuai jadwal dan ubah dengan alasan tercatat.
- **Pakai kerangka untuk menggambarkan tim dan layanan, jangan memeringkat orang.** Kartu skor, hasil kunci, dan KPI milik tim atau layanan.
- **Gabungkan kerangka dengan sengaja.** Katakan kerangka mana memiliki keputusan mana, agar angka yang sama tidak didefinisikan tiga cara.

## Definisi metrik

Metrik di bawah mengukur kesehatan kerangka yang sedang dipakai, bukan kesehatan sebuah layanan. Metrik ini menunjukkan apakah tujuan dan metrik masih terhubung, dan berlaku kerangka apa pun yang dipilih tim. Hitungan menurut tim atau layanan, tidak pernah menurut orang.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Keterlacakan tujuan | Porsi metrik yang dilaporkan dan dapat ditelusuri ke tujuan dan pertanyaan tertulis | metrik dengan tujuan dan pertanyaan tercatat / metrik yang dilaporkan | persen | Register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik) | Pengukuran dan pelaporan; perbaikan berkelanjutan | Tujuan pengiriman; tujuan produk | Kuartalan |
| Distribusi skor hasil kunci | Sebaran skor akhir periode untuk hasil kunci, ditampilkan sebagai porsi pada setiap pita | hasil kunci di setiap pita skor (misalnya 0,0 sampai 0,3, 0,4 sampai 0,6, 0,7 sampai 1,0) / hasil kunci yang diberi skor pada periode itu; tidak termasuk hasil kunci yang dibatalkan dengan alasan tercatat | persen per pita | Alat pelacak OKR atau dokumen tim | Perbaikan berkelanjutan; manajemen tingkat layanan | Perencanaan kuartalan; tinjauan | Kuartalan |
| Cakupan perspektif | Porsi dari empat perspektif balanced scorecard yang memiliki setidaknya satu ukuran dengan nilai terkini | perspektif dengan ukuran yang dilaporkan pada periode terakhir / empat | persen | Kartu skor atau dasbor | Pengukuran dan pelaporan; tata kelola sistem nilai layanan | Tinjauan pemangku kepentingan (pandangan pelanggan dan pembelajaran) | Kuartalan |
| Usia tinjauan indikator | Waktu sejak definisi dan target setiap KPI terakhir ditinjau | tanggal tinjauan dikurangi tanggal tinjauan terakhir; jam dimulai pada tinjauan tercatat terakhir dan berhenti pada tanggal pelaporan; laporkan median dan yang tertua | hari | Log perubahan register metrik | Perbaikan berkelanjutan; pengukuran dan pelaporan | Tindakan retrospektif | Kuartalan |
| Cakupan CSF-ke-KPI | Porsi faktor keberhasilan kritis yang memiliki setidaknya satu KPI yang saat ini dilaporkan | CSF dengan KPI terkini / CSF yang didefinisikan untuk layanan atau praktik | persen | Dokumentasi praktik atau layanan; register metrik | Pendekatan CSF dan KPI dalam panduan praktik ITIL | Definisi selesai; kesepakatan kerja | Kuartalan |

Keterlacakan tujuan menghitung metrik sebagai terlacak hanya jika tujuan dan pertanyaan tertulis dan audiens disebut; tujuan saja tidak cukup. Distribusi skor hasil kunci sebaiknya dibaca sebagai sebaran, bukan rata-rata, karena rata-rata menyembunyikan tim yang menyunat semuanya dan tim yang gagal di semuanya. Usia tinjauan indikator tidak termasuk metrik yang dipensiunkan pada periode itu.

## Rekomendasi

### Pilih dan gabungkan kerangka

**1. Pilih kerangka terkecil yang menyelesaikan pekerjaan.** Satu tim layanan dengan satu masalah perbaikan jarang membutuhkan balanced scorecard penuh. GQM sering cukup, karena punya titik berhenti yang jelas: pohon satu tujuan, beberapa pertanyaan, dan beberapa metrik. Tambahkan struktur hanya ketika sebuah keputusan membutuhkannya.

**2. Tulis tujuan dalam tiga bagian: maksud, subjek, dan sudut pandang.** Tujuan GQM secara tradisional dirumuskan sebagai memperbaiki mutu tertentu dari subjek tertentu dari sudut pandang tertentu, misalnya memperbaiki kejelasan pembaruan insiden bagi orang yang bergantung pada service desk. Struktur itu memaksa Anda menyatakan siapa yang diuntungkan. Jika tujuan tak punya sudut pandang, kemungkinan itu slogan.

**3. Ajukan pertanyaan yang dapat dijawab seseorang dengan cerita singkat.** “Seberapa cepat pengguna mendapat kabar setelah melaporkan masalah?” adalah pertanyaan yang baik, karena Anda bisa membayangkan jawaban dan bukti di baliknya. “Bagaimana kinerja kita?” bukan. Bidik tiga sampai lima pertanyaan per tujuan, dan harapkan sebagian dijawab lewat wawancara atau sampel, bukan angka.

**4. Pilih metrik terakhir, dan pilih lebih dari satu.** Untuk setiap pertanyaan, sebut metrik kandidat, sumber data, dan vektor manipulasinya (lihat topik 1.5, Sumber data dan instrumentasi). Sertakan setidaknya satu metrik yang bertegangan dengan yang lain, seperti waktu respons di samping tingkat pembukaan ulang. Jika sebuah pertanyaan tak punya metrik yang layak, katakan demikian dan rencanakan pemeriksaan kualitatif.

**5. Putuskan kerangka mana memiliki keputusan mana.** Susunan yang umum adalah balanced scorecard atau padanannya memegang beberapa ukuran yang ditinjau pemimpin, OKR memegang perbaikan yang dipilih tim kuartal ini, dan CSF serta KPI menggambarkan kesehatan berjalan sebuah praktik. Tuliskan susunan ini di register metrik agar setiap angka punya satu definisi dan satu pemilik.

### Pakai OKR dengan baik

**6. Tulis tujuan sebagai hasil, dan hasil kunci sebagai bukti.** Tujuan seperti “Pengguna mendapat masalahnya terselesaikan tanpa harus mengejar kami” adalah hasil. Hasil kunci seperti “median waktu ke pembaruan pertama yang berguna turun dari [current value] ke [target value]” adalah bukti. Hasil kunci yang terbaca sebagai tugas (“luncurkan portal baru”) adalah aktivitas, bukan hasil. Jika Anda tak bisa menyatakan apa yang akan berubah bagi pengguna, hasil kunci itu belum selesai.

**7. Jaga OKR di tingkat tim dan layanan.** Menetapkannya bagi individu cenderung mengubahnya menjadi daftar tugas dan masukan penilaian kinerja, dan mengundang manipulasi yang diramalkan hukum Goodhart. Biarkan tim menulis hasil kuncinya sendiri secara terbuka, dan biarkan tim saling melihat. Hindari kaskade ketika setiap tingkat harus menyatakan ulang tingkat di atasnya.

**8. Perlakukan skor sebagai percakapan, bukan nilai.** Tim yang memperlakukan skor sempurna sebagai tujuan menulis hasil kunci yang penakut. Distribusi skor yang bergerombol di puncak menandakan penyunatan, dan yang bergerombol di dasar menandakan target yang fantasi. Tinjau sebarannya tiap kuartal, dan tanyakan apa yang dipelajari tim dari setiap kegagalan.

### Pakai kartu skor, CSF, dan KPI dengan baik

**9. Definisikan CSF sebelum KPI.** Faktor keberhasilan kritis adalah pernyataan tentang apa yang harus benar, seperti “pengguna dapat menemukan dan memakai artikel swalayan yang tepat”. KPI kemudian menunjukkan apakah itu benar. Memulai dengan KPI mengundang Anda menghitung apa yang mudah dihitung. Tanyakan untuk setiap CSF, “jika ini berhenti benar, secepat apa kita akan menyadarinya, dan dari apa?” Jawabannya adalah KPI.

**10. Pakai perspektif kartu skor untuk mencegah pandangan sepihak.** Empat perspektif klasiknya adalah keuangan, pelanggan, proses internal, serta pembelajaran dan pertumbuhan. Organisasi layanan sering menamainya ulang, misalnya biaya, pengalaman pengguna, kesehatan operasional, dan kapabilitas. Yang penting adalah setiap perspektif punya setidaknya satu ukuran dengan nilai terkini, dan penurunan pada satu dibaca bersama yang lain (lihat topik 6.5, Realisasi nilai dan hasil bisnis).

**11. Hubungkan strategi dengan ukuran lewat peta sederhana.** [Peta strategi](https://en.wikipedia.org/wiki/Strategy_map) menggambar panah dari kapabilitas ke proses ke pelanggan ke hasil keuangan. Ia berguna untuk percakapan dan buruk sebagai kalkulator. Gambar, perdebatkan panahnya, lalu pilih beberapa ukuran. Jangan mencoba membuat diagram itu tepat secara kuantitatif.

**12. Tinjau kerangka pada kalender.** Tetapkan tinjauan kuartalan tempat tim menanyakan pada setiap tujuan, hasil kunci, dan KPI apakah masih penting dan apakah masih menggerakkan orang ke tindakan yang tepat. Pensiunkan yang tak lagi melayani, dan catat alasannya. Metrik yang hidup lebih lama dari tujuannya menjadi metrik pajangan.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Keterlacakan tujuan | Menulis tujuan dan pertanyaan setelah metrik sudah ada, agar catatan tampak lengkap; tujuan kabur yang membenarkan metrik apa pun | Ambil sampel lima entri tiap kuartal dan tanyakan apakah pertanyaan itu bisa mengarah ke metrik lain; periksa bahwa audiens dan keputusan disebut |
| Distribusi skor hasil kunci | Menulis hasil kunci mudah sehingga skor bergerombol dekat 1,0; menilai ulang dengan murah hati; membatalkan hasil kunci yang berjalan buruk tanpa mencatat alasannya | Hitungan hasil kunci yang dibatalkan beserta alasannya; bandingkan hasil kunci dengan hasil periode sebelumnya; tinjau median ambisi bersama pimpinan |
| Cakupan perspektif | Menambahkan ukuran simbolis ke sebuah perspektif agar dihitung tercakup; memilih ukuran yang tak bisa bergerak | Periksa bahwa setiap ukuran perspektif berubah nilainya dalam setahun terakhir dan memiliki keputusan tertulis yang terlampir |
| Usia tinjauan indikator | Mencatat tinjauan tanpa membaca indikator; hanya mengubah tanggal | Wajibkan hasil tertulis (dipertahankan, diubah, dipensiunkan) pada setiap tinjauan, dan ambil sampel lognya |
| Cakupan CSF-ke-KPI | Menetapkan KPI yang tak berkaitan dengan CSF untuk mencapai cakupan penuh; memilih KPI yang tak dapat mengungkap kegagalan | Tanyakan untuk setiap pasangan pembacaan apa yang menunjukkan CSF gagal; cari KPI yang tak pernah merah |

Pembacaan yang sehat adalah ketika tujuan berubah saat dunia berubah, beberapa hasil kunci meleset karena alasan yang dinyatakan, dan jumlah metrik yang dilaporkan menurun atau stabil, bukan tumbuh. Jika semuanya hijau, skor bergerombol di puncak, dan tak seorang pun bisa menyebut metrik yang dipensiunkan tahun ini, kerangka itu telah menjadi hiasan.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Goal-Question-Metric | Mengikat setiap metrik pada alasan; mudah dijelaskan; bekerja pada skala tim | Butuh sesi yang difasilitasi; bisa menjadi latihan di atas kertas; sedikit bicara tentang prioritas antartujuan |
| OKR | Memusatkan kuartal pada beberapa hasil; terlihat lintas tim; cocok dengan siklus perencanaan pendek | Mudah menulis hasil kunci sebagai tugas; skor bisa dimanipulasi; OKR individu mengaburkan penilaian kinerja |
| Balanced scorecard | Memberi pemimpin pandangan utuh; menghubungkan strategi dengan operasi | Berat dirawat; perspektif bisa menjadi kotak yang harus diisi; lambat mencerminkan perubahan |
| CSF dan KPI | Akrab dalam praktik ITIL; cocok untuk melaporkan layanan yang berjalan | Mudah menyimpang ke KPI pajangan; indikator basi tanpa tinjauan |
| Tanpa kerangka | Ringan dan cepat untuk tim yang sangat kecil | Metrik menumpuk tanpa alasan; perdebatan tentang apa yang diukur berulang |
| Beberapa kerangka bersama | Setiap keputusan mendapat alat yang cocok | Definisi ganda; kebingungan tentang angka mana yang otoritatif |

Pilih bobot kerangka sesuai taruhannya. Layanan internal kecil membutuhkan tujuan, tiga pertanyaan, dan beberapa metrik yang dipegang dalam satu halaman. Layanan yang disampaikan berdasarkan kontrak mungkin membutuhkan KPI yang didefinisikan sampai tingkat perjanjian tingkat layanan (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

## Pertanyaan untuk dibahas bersama tim Anda

**1. Tujuan apa yang dilayani tiap metrik yang kita laporkan, dan siapa yang akan menyadari jika kita berhenti melaporkannya?**
Daftar metrik di papan dan tulis tujuannya di sampingnya. Bila tujuan hilang, tanyakan siapa yang meminta metrik itu dan mengapa. Beberapa akan ternyata warisan dari proyek terdahulu dan dapat dipensiunkan. Fasilitator sebaiknya memperlakukan metrik tanpa tujuan sebagai penemuan normal, bukan kegagalan.

**2. Jika kita hanya boleh menjawab tiga pertanyaan tentang layanan kita, apa saja?**
Ini memaksa pemeringkatan pertanyaan sebelum metrik. Minta tiap orang menulis tiga, lalu kelompokkan. Bandingkan kelompok itu dengan dasbor yang kini dimiliki tim. Kesenjangan di antara keduanya biasanya keluaran paling berguna dari sesi.

**3. Hasil kunci kita yang mana menggambarkan hasil bagi pengguna, dan mana yang menggambarkan pekerjaan yang kita rencanakan?**
Bacakan setiap hasil kunci dan tanyakan apakah pengguna akan menyadari jika tercapai. Jika tidak, tulis ulang sebagai hasil atau pindahkan ke rencana. Fasilitator dapat menyebut bahwa tugas tidak apa-apa, tetapi tempatnya di backlog. Tutup dengan menyepakati satu hasil kunci untuk ditulis ulang kuartal ini.

**4. Di mana empat perspektif kartu skor kita tidak sepakat, dan apa artinya bagi kita?**
Minta kelompok mencari periode belakangan ketika satu perspektif membaik sementara yang lain memburuk, seperti biaya turun sementara pengalaman merosot. Bahas penyebabnya dan apakah ada yang melihatnya datang. Ini membangun kebiasaan membaca ukuran bersama. Catat perspektif mana pun yang tak punya ukuran, dan putuskan menambahkan satu atau menyatakan terus terang bahwa ia di luar lingkup.

**5. Untuk setiap faktor keberhasilan kritis, pembacaan apa yang akan memberi tahu kita bahwa ia gagal?**
Pilih dua CSF dan sebut KPI-nya, lalu tanyakan nilai apa yang akan memicu percakapan. Jika tim tak bisa menjawab, KPI itu tidak melakukan tugasnya. Cari KPI yang tak pernah berubah warna, yang biasanya menandakan ambang yang ditetapkan terlalu longgar. Fasilitator sebaiknya bertanya apa vektor manipulasi KPI itu.

**6. Kerangka mana sebaiknya memiliki keputusan mana, dan di mana kita kini mendefinisikan angka yang sama dua kali?**
Telusuri satu metrik, seperti waktu penyelesaian insiden, melalui setiap laporan tempat ia muncul. Bandingkan definisinya. Perbedaan jam atau pengecualian lazim dan sering menjelaskan perdebatan antartim. Sepakati satu pemilik dan satu definisi, dan catat di register.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman bertemu kerangka terutama sebagai OKR dan, bila beruntung, GQM. Tim mendapat nilai terbesar ketika menulis tujuan dan hasil kuncinya sendiri, terkait dengan apa yang dibutuhkan penggunanya, dan ketika menjaga ukuran kerja terpisah dari yang dilihat pemimpin. Tim sebaiknya waspada terhadap hasil kunci yang menghargai keluaran, seperti poin cerita atau rilis, karena mengundang perilaku yang justru hendak dicegah kerangka (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur).

### Tim layanan dan operasi

Tim operasi bertemu kerangka terutama sebagai CSF dan KPI dalam praktik ITIL, ditambah target tingkat layanan yang disepakati dengan pelanggan. Mereka diuntungkan dengan mendefinisikan CSF dalam bahasa sederhana sebelum memilih KPI, dengan melaporkan persentil untuk ukuran waktu, dan dengan menjaga ukuran keandalan seperti indikator dan sasaran tingkat layanan di samping pengalaman pengguna (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan). Mereka juga sebaiknya menahan godaan mempertahankan KPI yang ditetapkan bertahun-tahun lalu dan tak lagi terkait cara layanan dipakai.

### Kepemimpinan dan tata kelola

Pemimpin memilih kerangka, biasanya dengan meminta kartu skor atau OKR, dan apa yang mereka lakukan dengan angka menentukan bagaimana kerangka berperilaku. Pemimpin yang menghukum hasil kunci yang meleset mengajari tim menulis yang mudah. Pemimpin yang bertanya apa yang dipelajari tim mengajari mereka menulis yang jujur. Badan tata kelola sebaiknya mengharapkan register metrik, sejumlah kecil ukuran yang dilaporkan, dan tinjauan berkala apakah kerangka itu sendiri berjalan (lihat topik 11.4, Model kematangan untuk program metrik).

### Pelanggan dan pengguna

Pelanggan dan pengguna jarang melihat kerangka, hanya efeknya. Kerangka yang dirancang baik tampak sebagai layanan yang membaik dengan cara yang mereka minta dan pelaporan jujur tentang apa yang belum membaik. Yang buruk tampak sebagai laporan hijau yang tak cocok dengan pengalaman. Sertakan sudut pandang pengguna dalam setiap tujuan, dan biarkan umpan balik pengguna berada di perspektif pelanggan kartu skor bersama angka operasional (lihat topik 6.2, Perjanjian tingkat pengalaman).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan platform dukungan pelanggan dan portal swalayan dengan beberapa tim produk dan kelompok operasi layanan kecil. Semua angka bersifat ilustratif.

Pimpinan meminta balanced scorecard dan, secara terpisah, OKR kuartalan. Dalam satu kuartal tim memiliki 31 ukuran yang dilaporkan, dan tak seorang pun bisa menyatakan mengapa separuhnya ada. Pemilik layanan menjalankan sesi setengah hari memakai GQM pada satu tujuan: “Perbaiki kejelasan bantuan bagi pelanggan yang tidak dapat menyelesaikan pembayaran, dari sudut pandang pelanggan.”

Sesi menghasilkan empat pertanyaan. Apakah pelanggan menemukan artikel bantuan yang tepat? Apakah mereka perlu menghubungi dukungan setelah membacanya? Berapa lama masalah pembayaran diselesaikan ketika mereka menghubungi dukungan? Apakah mereka merasa jawabannya jelas? Dari 31 ukuran, sembilan terpetakan ke pertanyaan ini. Tiga yang baru dibutuhkan: keberhasilan pencarian artikel, tingkat kontak setelah melihat artikel, dan survei satu pertanyaan setelah penyelesaian. Sisa 22 ditandai untuk dipensiunkan, dengan persetujuan pemilik.

OKR kuartal itu ditulis sebagai hasil. Tujuannya adalah “Pelanggan menyelesaikan masalah pembayaran tanpa harus mengejar kami.” Tiga hasil kuncinya adalah median dan persentil ke-90 waktu penyelesaian, tingkat kontak setelah melihat artikel, dan hasil survei tentang kejelasan. Kartu skor mengarahkan perspektif pelanggan ke ukuran yang sama, sehingga ada satu definisi, bukan dua.

Di tengah kuartal, risiko manipulasi muncul. Tingkat kontak setelah melihat artikel turun tajam, yang tampak seperti keberhasilan. Seorang peninjau mengambil sampel 20 sesi dan mendapati desain ulang memindahkan tautan “hubungi kami” tiga layar lebih dalam. Lebih sedikit orang mencapai dukungan, dan survei menunjukkan skor kejelasan lebih rendah. Tim menambahkan pembatalan pencarian dan komentar survei sebagai pagar pembatas dan mengembalikan tautan itu.

Pada akhir kuartal skor hasil kunci adalah 0,6, 0,8, dan 0,5, yang disajikan tim apa adanya. Pimpinan bertanya apa yang dipelajari tim, bukan mengapa skornya tidak lebih tinggi. Keputusan yang dicatat dalam log keputusan adalah mempertahankan tujuan itu untuk kuartal kedua, mengganti tingkat kontak dengan porsi pelanggan yang menyelesaikan masalah pada kunjungan pertama, dan memensiunkan enam ukuran kartu skor lagi.

## Sudut pandang sektor

**Startup.** Startup biasanya membutuhkan satu tujuan, tiga pertanyaan, dan segelintir metrik, dipegang dalam satu halaman. OKR lazim dan bekerja baik ketika ditulis oleh tim yang akan mengerjakannya. Tahan menambah kartu skor sampai investor atau pelanggan mensyaratkannya.

**Bisnis kecil.** Sumber daya tipis, jadi pilih satu kerangka dan pakai dengan ringan. CSF dan KPI yang ditulis untuk dua atau tiga hal yang tak boleh keliru dalam bisnis sering sudah cukup. Utamakan umpan balik langsung dari pelanggan daripada penilaian yang rumit.

**Perusahaan besar.** Beberapa kerangka biasanya hidup berdampingan, yang menjadikan kepemilikan definisi tantangan utama. Simpan register, tetapkan kerangka mana memegang angka mana, dan jalankan tinjauan tahunan atas seluruh susunan. Waspadai kaskade yang memaksa setiap tim menyatakan ulang tujuan korporat dengan kata mereka sendiri.

**Pemerintah dan sektor publik.** Pelaporan yang diwajibkan dan tingkat layanan kontrak bertindak sebagai KPI tetap. Perlakukan sebagai yang diberikan, dan pakai GQM atau OKR untuk pekerjaan perbaikan di sekitarnya. Akuntabilitas publik menaikkan taruhan angka yang menyesatkan, jadi terbitkan definisi dan terbukalah tentang perubahan (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya sebuah kerangka sebagian besar waktu: sesi terfasilitasi untuk merancang ukuran, tinjauan kuartalan singkat, dan perawatan register. Perangkat lunak untuk OKR atau kartu skor tersedia, tetapi dokumen atau spreadsheet sering cukup pada skala kecil. Biaya yang lebih besar adalah perhatian pimpinan, karena kerangka yang tak dipakai pemimpin menjadi pelaporan demi pelaporan.

Imbal hasilnya datang dari ukuran yang lebih sedikit dan lebih baik. Tim yang dapat menyatakan mengapa setiap angka ada menghabiskan lebih sedikit waktu membuat laporan yang tak dibaca siapa pun, berdebat lebih sedikit soal definisi, dan lebih cepat menyadari ketika sebuah ukuran berhenti memberi masukan bagi keputusan. Alih-alih mengutip angka, ukur garis dasar Anda sendiri: jumlah metrik yang dilaporkan, porsi yang memiliki tujuan tercatat, dan waktu yang dihabiskan menyiapkan laporan berulang, sebelum dan sesudah mengadopsi kerangka. Bahasan lebih lengkap tentang pengembalian investasi ada di tempat lain (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Metrik sebelum tujuan.** Mulai dari data yang Anda punya menghasilkan dasbor tentang apa yang mudah dihitung. Tulis tujuan dan pertanyaan dulu, lalu lihat data mana yang cocok.
- **OKR sebagai daftar tugas.** Hasil kunci yang menyebut aktivitas membuat setiap kuartal tampak sibuk dan tak mengatakan apa-apa tentang hasil. Tulis ulang masing-masing sebagai bukti yang akan disadari pengguna.
- **OKR dan kartu skor sebagai target individu.** Mengundang manipulasi dan mengecilkan hati untuk saling membantu. Jaga di tingkat tim dan layanan.
- **Kartu skor dengan perspektif kosong atau simbolis.** Mengisi setiap kotak dengan sesuatu tidak sama dengan melihat keseluruhan. Wajibkan nilai terkini dan keputusan untuk masing-masing.
- **KPI yang tak pernah berubah.** Jika indikator hijau bertahun-tahun, ambangnya kemungkinan salah atau mengukur sesuatu yang tak bisa gagal. Tanyakan pembacaan apa yang akan menunjukkan masalah, lalu setel ulang.
- **Kerangka bertumpuk tanpa kepemilikan.** Tiga kerangka yang mendefinisikan ukuran yang sama dengan tiga cara menimbulkan perdebatan. Sebut pemilik dan definisi tunggal.
- **Menghargai skor.** Jika skor OKR sempurna mendapat pujian atau bayaran, tim akan menulis hasil kunci mudah. Hargai pembelajaran jujur dan pertanyaan yang baik.
- **Kerangka sebagai upacara.** Sehari lokakarya yang menghasilkan poster berlaminasi tidak mengubah apa-apa. Simpan keluarannya di register dan tinjau pada kalender.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Tujuan dan pertanyaan | Metrik dipilih karena datanya ada | Beberapa tim menulis tujuan sebelum metrik | Format tujuan dan pertanyaan bersama; setiap metrik yang dilaporkan dapat ditelusuri ke satu | Keterlacakan ditinjau dan kesenjangan berujung pada pekerjaan yang didanai | Tujuan ditulis bersama pelanggan dan pemasok dan direvisi saat kondisi berubah |
| Pemakaian kerangka | Ad hoc; tanpa kerangka yang dinyatakan | Tim mengadopsi kerangka berbeda dengan kosakata berbeda | Susunan tertulis menyatakan kerangka mana memiliki keputusan mana | Hasil kerangka ditinjau, dan bagian tak terpakai dibuang | Kerangka diselaraskan antartim dan pemasok dengan satu set definisi |
| Indikator dan penilaian | KPI ditetapkan sekali dan tak pernah ditinjau | Beberapa KPI punya pemilik dan ambang | KPI dan hasil kunci punya pemilik, definisi, dan pagar pembatas | Skor dan indikator diplot tren dan ditinjau untuk manipulasi tiap kuartal | Indikator dipensiunkan dan diganti secara rutin, dengan perubahan dikaitkan dengan hasil |
| Pemakaian dalam keputusan | Laporan dibuat dan diabaikan | Pemimpin meminta angka ketika ada yang salah | Tinjauan mencatat keputusan yang dipengaruhi angka | Pertanyaan belajar adalah standar; target yang meleset dibahas tanpa menyalahkan | Perencanaan perbaikan lintas tim memakai tujuan dan ukuran bersama yang sama |

## Daftar periksa

- [ ] Setiap metrik yang dilaporkan dapat ditelusuri ke tujuan tertulis, pertanyaan, dan audiens bernama.
- [ ] Register metrik mencatat kerangka mana memiliki setiap metrik dan definisi tunggalnya.
- [ ] Tujuan ditulis dengan maksud, subjek, dan sudut pandang.
- [ ] Setiap hasil kunci menggambarkan hasil yang akan disadari seseorang, bukan tugas.
- [ ] OKR, ukuran kartu skor, dan KPI milik tim atau layanan, bukan individu.
- [ ] Setiap faktor keberhasilan kritis memiliki setidaknya satu KPI terkini dan pembacaan yang dinyatakan yang akan menunjukkan kegagalan.
- [ ] Setiap perspektif kartu skor memiliki ukuran dengan nilai terkini.
- [ ] Setiap metrik memiliki vektor manipulasi dan pagar pembatas bernama.
- [ ] Tinjauan kuartalan menanyakan apakah setiap tujuan, hasil kunci, dan KPI masih penting.
- [ ] Setidaknya satu metrik atau indikator telah dipensiunkan atau dirancang ulang dalam setahun terakhir, dengan alasan tercatat.

## Prompt AI

**Ubah tujuan menjadi pertanyaan dan kandidat metrik.**

```text
Tim kami adalah [team name], yang menjalankan [type of service or delivery work]
untuk [audience]. Tujuan kami: [goal stated as purpose, subject, and viewpoint].
Dengan pendekatan Goal-Question-Metric, usulkan tiga sampai lima pertanyaan yang
akan menunjukkan apakah kami memenuhi tujuan ini. Untuk setiap pertanyaan,
sarankan kandidat metrik yang dapat kami definisikan, jenis sumber data yang
kami butuhkan, vektor manipulasi yang mungkin, dan pagar pembatas. Jangan
mengarang nilai acuan atau statistik. Daftar asumsi Anda dan apa pun yang tidak
dapat Anda tentukan dari yang saya berikan.
```

**Tinjau draf OKR.**

```text
Berikut draf tujuan dan hasil kunci kami untuk [period]: [paste OKRs]. Tim kami
adalah [team name] dan pengguna kami [audience]. Tinjau setiap hasil kunci dan
katakan apakah ia menggambarkan hasil atau aktivitas, apakah dapat dipenuhi
tanpa membantu pengguna, dan pagar pembatas apa yang akan menunjukkannya.
Sarankan penulisan ulang bila perlu, memakai [placeholders] untuk angka apa pun
yang harus kami sediakan sendiri. Jangan mengarang target atau nilai acuan.
Daftar asumsi Anda dan pertanyaan yang harus saya jawab.
```

**Petakan faktor keberhasilan kritis ke KPI.**

```text
Untuk praktik ITIL [practice name] di organisasi kami, yang melayani [audience],
berikut faktor keberhasilan kritis yang telah kami susun: [list CSFs]. Usulkan
KPI untuk masing-masing yang dapat dikumpulkan dari [data sources]. Untuk setiap
KPI, nyatakan di mana jam mulai dan berhenti bila itu ukuran waktu, pembacaan
apa yang akan menunjukkan faktor itu gagal, dan bagaimana ia bisa dimanipulasi.
Jangan menyatakan nilai acuan atau klaim kepatuhan. Daftar asumsi Anda.
```

**Audit kartu skor untuk keseimbangan.**

```text
Kartu skor kami memiliki ukuran ini, dikelompokkan menurut perspektif: [paste
measures by perspective]. Kami adalah [type of organization]. Identifikasi
perspektif yang tipis, ukuran yang tampak saling menduplikasi, dan ukuran yang
dapat bergerak dengan cara yang menyembunyikan masalah di perspektif lain.
Sarankan pagar pembatas dan ukuran untuk dipensiunkan. Jangan mengarang angka
atau sumber. Daftar asumsi Anda dan apa yang tidak dapat Anda nilai dari data
yang saya berikan.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik mana yang memiliki sebuah metrik dan pagar pembatas berpasangannya sebelum Anda menempatkannya dalam kerangka.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik berbasis kerangka memuat definisi, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Kerangka memutuskan metrik mana yang layak mendapat tempat, dan aturan umumnya adalah mulai dari tujuan dan pertanyaan, lalu memilih metrik.
- Goal-Question-Metric cocok untuk merancang ukuran bagi satu tim, OKR cocok untuk memusatkan sebuah kuartal, kartu skor cocok untuk pandangan utuh pimpinan, dan CSF dengan KPI cocok untuk mengoperasikan praktik ITIL.
- Pakai kerangka teringan yang berfungsi, dan katakan mana yang memiliki angka mana.
- Setiap kerangka bisa dimanipulasi, jadi pasangkan setiap metrik dengan pagar pembatas dan tinjau set pada kalender.
- Jaga kerangka di tingkat tim dan layanan, tidak pernah sebagai target individu.
- Pensiunkan tujuan, hasil kunci, dan indikator yang tidak lagi memberi masukan bagi keputusan.

## Referensi dan bacaan lanjutan

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
