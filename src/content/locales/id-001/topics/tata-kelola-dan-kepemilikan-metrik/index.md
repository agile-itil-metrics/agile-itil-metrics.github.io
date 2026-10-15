# Tata kelola dan kepemilikan metrik

**Metrik yang tidak dimiliki, didefinisikan, ditinjau, atau dipensiunkan siapa pun akan hanyut menjauh dari pekerjaan yang digambarkannya, jadi beri setiap metrik yang dilaporkan seorang pemilik bernama, definisi tertulis, tanggal tinjauan, dan jalan keluar.**

## Gambaran umum dan motivasi

Tata kelola metrik adalah sekumpulan keputusan ringan tentang siapa yang memiliki sebuah ukuran, apa artinya, siapa yang boleh melihatnya, seberapa sering ditinjau, dan kapan ia dihapus. Ia kerabat dekat [tata kelola data](https://en.wikipedia.org/wiki/Data_governance), yang mencakup pengelolaan data yang lebih luas dalam hal ketersediaan, kualitas, dan keamanan di sebuah organisasi. Tata kelola metrik menerapkan disiplin yang sama pada set kecil angka yang sangat terlihat yang dipakai tim dan pemimpin untuk mengarahkan pekerjaan layanan dan pengiriman.

Kebutuhannya tampak sebagai gesekan kecil yang berulang. Dua tim menghitung “waktu penyelesaian” secara berbeda dan menghabiskan satu rapat untuk mencocokkan angkanya. Sebuah ubin dasbor basi selama berbulan-bulan karena orang yang membuatnya pindah pekerjaan. Ukuran yang dirancang untuk membantu satu tim mendiagnosis alurnya diadopsi oleh komite pengarah sebagai target kinerja, yaitu keadaan yang diperingatkan topik sebelumnya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Tidak satu pun ini masalah statistik. Masing-masing masalah kepemilikan, dan masing-masing murah dicegah.

Pandangan agile dan ITIL berbeda dalam penekanan, dan perbedaan itu berguna. Dalam pandangan agile, tim memiliki ukuran kerjanya dan menegosiasikannya dalam retrospektif, kesepakatan kerja, dan tinjauan. Pandangan ITIL, sebagaimana didokumentasikan dalam ITIL 4 (edisi 2019 dari AXELOS, kini diterbitkan PeopleCert), memperlakukan pengukuran dan pelaporan sebagai praktik manajemen umum dan perbaikan berkelanjutan sebagai praktik dengan peran, catatan, dan tinjauannya sendiri. ITIL juga mengharapkan pemilik layanan dan pemilik praktik bertanggung jawab atas hasil. Kedua pandangan itu berpadu: tim memiliki tampilan kerja, pemilik layanan atau praktik bernama memiliki tampilan yang dilaporkan, dan register kecil menghubungkan keduanya.

Beberapa istilah yang dipakai di sini. **Pemilik metrik** adalah satu orang yang bertanggung jawab atas definisi, kualitas data, dan pemakaian sebuah metrik. **Register metrik** adalah katalog singkat metrik yang sedang dipakai, dengan pemilik, definisi, sumber data, pagar pembatas, dan tanggal tinjauan masing-masing. **Piagam metrik** adalah pernyataan satu halaman tentang tujuan, ruang lingkup, peran, dan ritme tinjauan untuk sekumpulan metrik. **[Sumber kebenaran tunggal](https://en.wikipedia.org/wiki/Single_source_of_truth)** adalah satu sistem atau set data otoritatif tempat sebuah angka dihitung. **[Pengurus data](https://en.wikipedia.org/wiki/Data_steward)** menjaga kualitas dan definisi sebuah domain data, dan di organisasi kecil pemilik metrik sering memainkan peran ini. **[Matriks RACI](https://en.wikipedia.org/wiki/RACI_matrix)** mencatat siapa yang bertanggung jawab, akuntabel, dikonsultasi, dan diberi tahu untuk setiap aktivitas. **[Kamus data](https://en.wikipedia.org/wiki/Data_dictionary)** adalah katalog elemen data dan maknanya, yang menjadi kolom definisi register pada skala yang lebih besar. **[Prinsip hak istimewa terkecil](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** menyatakan bahwa orang dan sistem mendapat akses yang mereka butuhkan untuk tugasnya dan tidak lebih. **[Perbaikan berkelanjutan](https://en.wikipedia.org/wiki/Continual_improvement_process)** adalah upaya terus-menerus memperbaiki layanan, praktik, dan cara kerja, dan ia praktik ITIL sekaligus kebiasaan agile. SLA berarti perjanjian tingkat layanan, dan ITSM berarti manajemen layanan TI.

## Prinsip utama

- **Setiap metrik yang dilaporkan punya satu pemilik bernama.** Sebuah peran atau seseorang, tidak pernah “tim.” Kepemilikan bersama membiarkan definisi tak terawat.
- **Satu definisi, satu sumber kebenaran.** Tulis definisi sekali, termasuk di mana jam mulai dan berhenti, dan hitung angkanya di satu tempat.
- **Kelola sebanding dengan akibatnya.** Metrik yang dipakai tim untuk men-debug papannya sendiri cukup satu kalimat. Metrik dalam kontrak, laporan publik, atau paket dewan membutuhkan entri piagam, tinjauan, dan jejak audit.
- **Akses mengikuti tujuan.** Putuskan siapa melihat tampilan apa dan mengapa. Audiens default tampilan kerja sebuah tim adalah tim itu.
- **Tinjau dengan ritme dan pensiunkan berdasarkan bukti.** Metrik memiliki siklus hidup. Adopsi, tinjau, revisi, dan pensiunkan dengan sengaja.
- **Tuliskan dan jaga tetap kecil.** Register yang muat di satu halaman dibaca. Buku pedoman kebijakan tidak.
- **Tata kelola melayani orang yang diukur.** Pemilik sebuah metrik mencakup orang yang pekerjaannya digambarkan metrik itu.

## Definisi metrik

Ini adalah ukuran kesehatan sebuah praktik metrik, bukan sebuah layanan. Jumlahnya sengaja sedikit dan murah dikumpulkan dari register itu sendiri. Setiap periode adalah satu kuartal kalender kecuali dinyatakan lain.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan kepemilikan | Porsi metrik yang dilaporkan dan memiliki pemilik bernama yang masih berlaku | metrik yang dilaporkan dengan pemilik yang masih memegang peran pada akhir periode / metrik yang dilaporkan pada akhir periode; tidak termasuk metrik yang hanya dipakai dalam papan pribadi satu tim | persen | Register metrik | Pengukuran dan pelaporan | Kesepakatan kerja | Kuartalan |
| Kemutakhiran definisi | Porsi metrik yang dilaporkan dan definisinya ditinjau dalam selang yang disepakati | metrik dengan tanggal tinjauan dalam 6 bulan terakhir / metrik yang dilaporkan; jam dimulai pada tinjauan tercatat terakhir dan berhenti pada akhir periode | persen | Log perubahan register metrik | Pengukuran dan pelaporan; perbaikan berkelanjutan | Tindakan retrospektif | Kuartalan |
| Kesesuaian sumber | Porsi metrik yang dilaporkan dan dihitung dari tepat satu sumber bernama | metrik dengan satu sumber otoritatif dan tanpa perhitungan paralel yang diketahui / metrik yang dilaporkan; perhitungan paralel ditemukan dengan mengambil sampel dasbor dan laporan | persen | Register ditambah sampel dasbor dan laporan | Pengukuran dan pelaporan; manajemen tingkat layanan | Definisi selesai untuk sebuah metrik | Kuartalan |
| Tingkat pemensiunan | Jumlah metrik yang dipensiunkan atau digabung dalam satu periode relatif terhadap yang dilaporkan | metrik dipensiunkan atau digabung pada periode itu / metrik yang dilaporkan pada awal periode; metrik yang dipindah ke tampilan tim pribadi dihitung sebagai dipensiunkan dari set yang dilaporkan | persen | Log perubahan register metrik | Perbaikan berkelanjutan | Tindakan retrospektif | Kuartalan |
| Kemutakhiran tinjauan akses | Porsi tampilan metrik terbatas yang daftar audiensnya ditinjau dalam selang itu | tampilan terbatas dengan tinjauan audiens dalam 6 bulan terakhir / tampilan terbatas; tampilan yang terbuka bagi seluruh organisasi dikecualikan | persen | Daftar akses atau ekspor izin alat BI | Manajemen keamanan informasi; pengukuran dan pelaporan | Kesepakatan kerja | Setengah tahunan |
| Keterkaitan keputusan | Porsi metrik yang dilaporkan dan tertaut di register ke keputusan yang diinformasikannya | metrik dengan keputusan atau pertanyaan tercatat / metrik yang dilaporkan; tautan hanya dihitung bila keputusan diambil dalam 12 bulan terakhir | persen | Register metrik dan log keputusan | Perbaikan berkelanjutan | Tinjauan pemangku kepentingan dan hasil perbaikan | Kuartalan |

Tidak satu pun ini target. Register bisa menunjukkan cakupan kepemilikan penuh dan tetap menggambarkan metrik yang tak berguna, jadi baca tabel ini bersama tabel manipulasi di bawah.

## Rekomendasi

### Tetapkan kepemilikan dan register

**1. Simpan register metrik satu halaman.** Daftar setiap metrik yang dilaporkan dengan pertanyaannya, pemilik, definisi, rumus dan jam, satuan, sumber data, audiens, pagar pembatas, tanggal tinjauan terakhir, dan tanggal tinjauan berikutnya. Spreadsheet atau berkas Markdown dalam kontrol versi sudah cukup. Register adalah artefak paling berguna dalam topik ini, dan topik sebelumnya sudah mengandaikan ia ada (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

**2. Sebut satu pemilik per metrik, dan catat perannya.** Pemilik bertanggung jawab atas definisi, kualitas data, dan penjelasan hasil yang janggal. Pilih seseorang yang dekat dengan data dan keputusan, sering pemilik layanan, pemilik praktik, atau ketua tim. Catat perannya selain orangnya, sehingga entri bertahan saat orang berganti pekerjaan dan lowongan tampak pada angka cakupan.

**3. Pisahkan memiliki metrik dari memiliki pekerjaan yang diukurnya.** Pemilik metrik menjelaskan dan merawatnya, tetapi tim yang mengerjakan pekerjaan tetap bertanggung jawab atas hasilnya. Ini menghindari dua jebakan: pemilik yang disalahkan atas angka yang tak dapat dipengaruhinya, dan tim yang menyangkal angka karena orang lain yang merawatnya. Tabel RACI singkat dalam piagam menjadikan ini eksplisit.

**4. Tulis definisi beserta jamnya, sekali saja.** Register memegang definisi otoritatif: apa yang dihitung, di mana jam mulai dan berhenti, status mana yang menjedanya, dan apa yang dikecualikan. Tautkan dari setiap dasbor yang menampilkan metrik itu. Ketika definisi perlu berubah, ubah di register lebih dulu dan tandai perubahan pada bagan (lihat topik 1.6, Literasi statistik untuk metrik layanan, untuk cara menunjukkan patahan pada tren).

**5. Hitung setiap metrik di satu tempat.** Pilih sumber otoritatif, seperti alat ITSM, pelacak isu, atau sistem pemantauan, dan nyatakan di register. Spreadsheet paralel yang mereproduksi angka itu sebaiknya dipensiunkan atau diganti namanya agar tak seorang pun mengira itu angka resmi. Silsilah data dan perangkat menjadi bahasan topik berikutnya (lihat topik 1.5, Sumber data dan instrumentasi).

### Tetapkan ritme dan kendali perubahan

**6. Tinjau definisi dengan jadwal yang sebanding dengan akibatnya.** Untuk metrik dalam kontrak, laporan teregulasi, atau paket eksekutif, tinjau dua kali setahun dan pada setiap perubahan alur kerja yang mendasarinya. Untuk ukuran kerja tingkat tim, retrospektif adalah tinjauannya. Setiap tinjauan mengajukan tiga pertanyaan: apakah definisi masih akurat, apakah data masih sehat, dan apakah ada yang memakai angka itu untuk memutuskan sesuatu?

**7. Perlakukan perubahan definisi seperti perubahan pada layanan.** Catat siapa yang meminta perubahan, mengapa, siapa yang dikonsultasi, dan tanggal berlakunya. Perubahan kecil pada alur status dapat diam-diam menggeser ukuran waktu dalam jumlah besar. Kendali perubahan ringan untuk definisi meminjam gagasan dari pemberdayaan perubahan tanpa seremoninya (lihat topik 4.3, Metrik pemberdayaan perubahan, untuk padanan perubahan layanan).

**8. Kaitkan tinjauan dengan perbaikan berkelanjutan.** Tinjauan metrik sebaiknya menghasilkan pekerjaan perbaikan, atau keputusan eksplisit untuk tidak bertindak. ITIL memperlakukan perbaikan berkelanjutan sebagai praktik dengan register peluang perbaikan, dan tim agile mendapat efek yang sama lewat tindakan retrospektif. Jika tinjauan berakhir tanpa tindakan dan tanpa pemensiunan, tanyakan apakah metrik itu melakukan pekerjaan (lihat topik 9.5, Metrik perbaikan berkelanjutan).

**9. Pensiunkan metrik dengan sengaja.** Tetapkan ujian pemensiunan, misalnya “tidak dikutip dalam keputusan selama dua siklus tinjauan,” dan terapkan. Arsipkan definisi dan nilai akhirnya, katakan apa yang menggantikan metrik itu bila ada, dan beri tahu audiens. Log pemensiunan adalah bukti bagi auditor dan kelegaan bagi orang yang merawat data secara manual.

### Kendalikan tampilan dan akses

**10. Putuskan audiens setiap tampilan.** Kebanyakan metrik punya tampilan kerja untuk tim, tampilan yang dilaporkan untuk pemilik layanan atau program, dan kadang tampilan eksternal untuk pelanggan, regulator, atau pemasok. Catat audiens mana mendapat tampilan mana dan mengapa. Dengan prinsip hak istimewa terkecil sebagai panduan, batasi tampilan yang memuat data pribadi, rincian keamanan, atau angka pemasok yang sensitif secara komersial, dan biarkan sisanya terbuka agar transparansi menjadi default.

**11. Jauhkan data tingkat individu dari pelaporan.** Aturan keras buku ini adalah bahwa metrik menggambarkan tim, layanan, dan sistem, bukan orang. Tata kelola menopangnya dengan menetapkan butiran yang dilaporkan, misalnya tim dan layanan, dan dengan membatasi ekstrak tingkat orang hanya untuk pengurus data. Jika permintaan rincian per orang datang, catat, tanyakan keputusan apa yang dilayaninya, dan tawarkan alternatif tingkat tim atau sistem (lihat topik 11.3, Meluncurkan metrik tanpa menumbuhkan ketakutan).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan kepemilikan | Menamai manajer atau milis sebagai pemilik untuk mencapai 100 persen, tanpa seorang pun yang dapat menjelaskan atau mengubah metrik | Minta setiap pemilik menjelaskan satu pergerakan terbaru pada angka itu; lacak pertanyaan yang tak terjawab lebih dari seminggu |
| Kemutakhiran definisi | Menyentuh tanggal tinjauan tanpa membaca definisi | Ambil sampel tiga entri setiap kuartal dan bandingkan definisi tertulis dengan konfigurasi sebenarnya di alat |
| Kesesuaian sumber | Menyatakan sebuah sumber otoritatif sementara spreadsheet masih beredar dan berselisih | Hitung angka berbeda untuk metrik yang sama dalam sampel laporan; rekonsiliasi perbedaan dalam tinjauan |
| Tingkat pemensiunan | Memensiunkan metrik remeh atau tak terpakai agar tampak disiplin, atau mengganti nama metrik sehingga dihitung baru | Tinjau log pemensiunan untuk apa yang dihapus; lacak total jumlah yang dilaporkan dan angka keterkaitan keputusan bersamanya |
| Kemutakhiran tinjauan akses | Menyetujui daftar audiens yang ada tanpa membacanya | Bandingkan daftar dengan keanggotaan dan peran tim saat ini; laporkan jumlah penghapusan yang ditemukan |
| Keterkaitan keputusan | Menulis keputusan yang kabur seperti “tingkatkan layanan” untuk memenuhi bidang | Wajibkan keputusan atau pertanyaan bertanggal, dan ambil sampel log keputusan untuk melihat apakah metrik itu benar-benar dirujuk |

Pembacaan yang sehat adalah register yang berubah. Entri memiliki pemilik yang menjawab pertanyaan, tanggal tinjauan yang jatuh dalam enam bulan terakhir, log pemensiunan beserta alasan, dan daftar pendek metrik yang masih diinginkan karena orang dapat menyebut keputusan yang diinformasikannya. Register dengan setiap bidang terisi dan tak pernah berubah adalah tanda peringatan.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Kantor metrik pusat | Definisi konsisten dan perangkat bersama; audit lebih mudah | Lambat, jauh dari pekerjaan, dan tergoda menstandarkan ukuran yang seharusnya berbeda antartim |
| Kepemilikan terfederasi dengan register bersama | Pemilik dekat dengan data; register menjaga minimum bersama | Butuh dorongan terus-menerus agar mutu tidak menyimpang antartim |
| Hanya ukuran milik tim | Cepat dan sesuai pekerjaan | Definisi menyimpang; rekapitulasi menjadi tak andal; pengetahuan pergi bersama orang |
| Akses terbuka secara default | Membangun kepercayaan dan pemahaman bersama | Berisiko membuka rincian sensitif atau tingkat orang |
| Akses terbatas | Melindungi data sensitif | Menyembunyikan konteks dari orang yang bisa membantu, dan mengundang kecurigaan |

Keseimbangannya adalah memusatkan lapisan tipis yang harus sepakat, yaitu register, definisi bersama, dan aturan akses, dan memfederasikan segala yang lain.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Siapa yang akan menjawab jika angka yang paling sering dikutip di dasbor kita tampak salah besok?**
Minta kelompok menyebut seseorang, bukan kelompok. Jika beberapa nama muncul, atau tidak ada, metrik itu tak punya pemilik dalam praktik. Fasilitator sebaiknya mencatat metriknya, kandidat pemilik, dan apa yang dibutuhkan pemilik untuk melakukan tugasnya, seperti akses baca ke data atau waktu dalam tinjauan. Tutup dengan menyepakati siapa yang akan mengonfirmasi pemilik dan mencatat peran di register.

**2. Di mana dua versi angka yang sama ada saat ini?**
Cari laporan yang menampilkan metrik yang sama dengan nilai berbeda: slide mingguan dibanding dasbor langsung, atau laporan pemasok dibanding yang internal. Untuk masing-masing, tanyakan dari mana perbedaannya muncul, seperti cakupan, jam, atau pengecualian. Putuskan sumber mana yang otoritatif dan apa yang terjadi pada versi lainnya. Harapkan percakapan ini mengungkap definisi kerja berbeda dari kata-kata yang dikira semua orang sama.

**3. Metrik mana yang akan kita pensiunkan kuartal ini jika harus memensiunkan satu?**
Mulailah dengan metrik yang belum dikutip siapa pun dalam keputusan belakangan ini. Tanyakan apa yang terjadi jika ia lenyap, dan siapa yang akan menyadarinya. Jika jawabannya “tidak seorang pun,” pindahkan keluar dari set yang dilaporkan untuk masa uji. Fasilitator sebaiknya memperlakukan pemensiunan sebagai hal normal dan sehat, dan mencatat hasilnya di log pemensiunan.

**4. Siapa melihat metrik kita yang mana, dan apakah itu disengaja?**
Gambar kisi sederhana metrik terhadap audiens: tim, pemilik layanan, pimpinan, pelanggan, pemasok, regulator. Tandai di mana akses merupakan keputusan dan di mana ia terjadi begitu saja. Cari tampilan mana pun yang dapat dipakai membandingkan individu. Sepakati perubahan pada setidaknya satu daftar audiens, dan siapa yang meninjau berikutnya.

**5. Bagaimana kita mengubah definisi tanpa merusak tren?**
Telusuri perubahan terbaru pada alur status atau skala prioritas. Tanyakan siapa yang diberi tahu, apakah bagan diberi catatan, dan apakah ada yang membandingkan nilai lama dan baru. Susun entri perubahan ringan yang benar-benar akan diisi tim. Sepakati siapa yang menyetujui perubahan metrik yang muncul dalam kontrak atau laporan eksternal.

**6. Apa yang akan kita hentikan jika tata kelola menjadi beban?**
Tata kelola bisa berubah menjadi ritual. Tanyakan bagian pendekatan saat ini mana yang akan dilewati orang jika tak ada yang memeriksa, dan mengapa. Perlakukan jawabannya sebagai umpan balik desain, bukan perlawanan. Fasilitator sebaiknya mencari langkah yang saling menduplikasi, bidang yang tak dibaca siapa pun, dan tinjauan yang tak pernah menghasilkan keputusan.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki ukuran kerja seperti usia item kerja dan cycle time, dan sebaiknya menyepakati definisinya dalam kesepakatan kerja. Ketika metrik naik ke laporan portofolio, tim sebaiknya mengetahui pemilik, definisi, dan audiensnya. Tim mendapat nilai terbesar dari entri register singkat untuk setiap ukuran yang dilaporkan, dan dari hak menantang definisi yang tidak lagi sesuai dengan cara pekerjaan mengalir (lihat topik 2.1, Ukuran alur).

### Tim layanan dan operasi

Tim layanan dan operasi memegang metrik yang muncul dalam SLA dan tinjauan operasional, sehingga definisi, jam, dan pengecualian punya bobot kontrak. Pemilik di sini biasanya pemilik layanan dan pemilik praktik. Mereka sebaiknya menyimpan jejak bukti untuk perubahan definisi, merekonsiliasi angka yang dilaporkan terhadap alat ITSM secara berkala, dan menjadi yang pertama memensiunkan ukuran yang berhenti memberi masukan bagi keputusan operasional (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

### Kepemimpinan dan tata kelola

Pemimpin menetapkan kondisi: siapa memiliki metrik, tampilan mana yang sampai ke paket eksekutif, dan bagaimana angka dipakai. Mereka sebaiknya meminta register dan log pemensiunan, membaca definisi di balik angka utama, dan menolak permintaan tabel liga tingkat orang. Badan tata kelola membutuhkan agenda tetap yang kecil untuk meninjau register dan mencatat keputusan, selaras dengan harapan ISO/IEC 20000-1 untuk sistem manajemen layanan (per edisi 2018) tanpa menjadikan tinjauan itu latihan kepatuhan (lihat topik 8.3, Metrik kepatuhan dan audit).

### Pelanggan dan pengguna

Pelanggan dan pengguna jarang melihat register, tetapi mereka merasakan ketiadaannya ketika angka dalam tinjauan layanan berbeda dari pengalaman mereka. Di mana metrik muncul dalam laporan yang dihadapkan kepada pelanggan atau SLA, definisi sebaiknya tersedia dalam bahasa sederhana, termasuk apa yang dikecualikan. Pelanggan sebaiknya punya jalur mempertanyakan sebuah angka, dan pemilik sebaiknya menjawabnya (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan service desk, tiga tim produk, dan satu kelompok operasi. Semua angka di bawah bersifat ilustratif.

Tinjauan layanan bulanan menunjukkan waktu penyelesaian insiden median 5,1 jam. Dasbor milik tim produk sendiri, dibangun dari alat ITSM yang sama, menunjukkan 6,4 jam. Kedua angka itu telah beredar selama setahun. Pemilik layanan baru bertanya siapa pemilik metrik itu dan menerima tiga jawaban berbeda.

Pemilik itu, bersama ketua tim dan pengurus data, menghabiskan dua sesi untuk register pertama berisi 14 metrik yang dilaporkan. Dari jumlah itu, 5 tidak punya pemilik dan 4 punya dua sumber. Waktu penyelesaian termasuk metrik bersumber ganda. Perbedaannya ditelusuri ke satu status jeda: tinjauan layanan mengecualikan waktu dalam “menunggu pelanggan,” sedangkan dasbor tim tidak. Kelompok menyepakati satu definisi, menunjuk pemilik layanan sebagai pemilik metrik, dan menerbitkan kedua nilai di halaman yang sama selama satu kuartal, diberi label menurut definisi, agar tak seorang pun kehilangan riwayat. Mereka memberi catatan pada bagan di titik definisi berubah.

Pada tinjauan kuartalan pertama, kelompok menerapkan ujian pemensiunan dan menyingkirkan 3 dari 14 metrik, termasuk bagan jumlah tiket bulanan yang tak dikutip keputusan terbaru mana pun. Mereka juga membatasi tampilan yang merinci waktu penyelesaian per analis, hanya menyisakan pengurus data sebagai pemegang, dan menawarkan rincian tingkat tim sebagai gantinya.

Risiko manipulasi muncul pada tinjauan kedua. Cakupan kepemilikan mencapai 100 persen, tetapi sampel menunjukkan dua pemilik adalah milis dan seorang kepala departemen yang tak pernah membuka datanya. Kelompok menggantinya dengan pemilik layanan bernama dan menambahkan pertanyaan pagar pembatas ke tinjauan: “Bisakah pemilik menjelaskan pergerakan terakhir angka ini?” Cakupan turun menjadi 86 persen selama satu kuartal, yang dicatat kelompok sebagai hasil yang jujur. Keputusan yang dicatat adalah menahan target cakupan sampai pagar pembatas berjalan dua siklus.

## Sudut pandang sektor

**Startup.** Pendiri atau insinyur utama sering memiliki setiap metrik secara default. Risikonya definisi hidup di satu kepala. Simpan register lima sampai delapan metrik dalam dokumen bersama, sebut pemilik untuk masing-masing, dan tulis definisinya pada hari sebuah metrik pertama kali muncul dalam pembaruan untuk investor atau pelanggan.

**Bisnis kecil.** Orang yang menjalankan TI biasanya sekaligus pemilik, pengurus, dan pembaca laporan. Jaga tata kelola dalam satu halaman, tinjau dua kali setahun, dan beri perhatian ekstra ketika laporan dari vendor mendefinisikan metrik secara berbeda dari milik Anda. Sebutkan siapa dalam bisnis yang memiliki setiap angka yang dihadapkan kepada pelanggan.

**Perusahaan besar.** Skala membuat lapisan bersama menjadi esensial. Pakai register dengan alur kerja, dewan ringan yang bertemu kuartalan, dan peran pengurus data untuk setiap domain besar. Pertahankan otonomi tim untuk ukuran kerja dan jaga agar tidak menstandarkan metrik yang seharusnya berbeda antarjenis layanan. Menyelaraskan dengan tata kelola data yang sudah ada di organisasi menghemat upaya.

**Pemerintah dan sektor publik.** Pelaporan undang-undang, audit, dan pengadaan menjadikan definisi tertulis dan catatan perubahan sebagai kewajiban. Perlakukan register sebagai artefak audit, dan jaga garis jelas dari setiap angka yang diterbitkan ke pemilik dan sumbernya. Keputusan akses sering melibatkan tinjauan hukum dan privasi, jadi catat dasar untuk setiap tampilan terbatas (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya sederhana dan sebagian besar waktu. Perkirakan beberapa jam untuk membangun register pertama, satu atau dua jam per kuartal untuk tinjauan, dan sebagian upaya pengurus data untuk menyelesaikan sumber yang bertentangan. Biaya perangkat rendah karena spreadsheet atau berkas dalam kontrol versi cukup untuk memulai.

Imbal hasilnya sebagian besar pemborosan yang terhindari. Rapat untuk mencocokkan angka menghilang, audit menemukan jejak yang jelas, dan memasukkan pemilik layanan baru lebih cepat karena definisi sudah tertulis. Keputusan lebih baik karena bertumpu pada angka yang bermakna sama setiap bulan. Jangan mengutip persentase untuk manfaat ini tanpa data Anda sendiri. Jika Anda butuh angka untuk kasus bisnis, hitung jam yang dihabiskan kuartal lalu untuk merekonsiliasi angka yang bertentangan dan jumlah metrik tanpa pemilik tercatat, lalu hitung lagi setelah dua siklus tinjauan.

## Anti-pola dan jebakan

- **Kepemilikan oleh panitia.** Sebuah kelompok memiliki metrik dan tak seorang pun menjawab pertanyaan. Sebut satu peran yang akuntabel dan satu wakil.
- **Register sebagai kuburan.** Dibangun sekali dan tak pernah disentuh. Taruh tanggal tinjauan di kalender dan tampilkan tanggal di setiap dasbor.
- **Menstandarkan segalanya.** Satu definisi yang dipaksakan pada tim dengan pekerjaan berbeda menghasilkan angka yang tak bermakna di mana pun. Bagikan hanya lapisan yang harus sepakat.
- **Perubahan definisi diam-diam.** Tren patah dan kepercayaan menyusul. Catat setiap perubahan beserta alasannya dan beri catatan pada bagan.
- **Tata kelola tanpa pemensiunan.** Set hanya bertambah dan perhatian menipis. Terapkan ujian pemensiunan di setiap tinjauan.
- **Kerahasiaan secara default.** Menyembunyikan tampilan kerja dari orang yang diukur menumbuhkan kecurigaan. Batasi hanya yang membawa risiko nyata dan jelaskan alasannya.
- **Akses terbuka ke data tingkat orang.** Satu ekstrak bisa menjadi tabel liga dalam hitungan hari. Tetapkan butiran yang dilaporkan pada tim dan layanan, dan simpan data tingkat orang di bawah pengurus.
- **Teater kepatuhan.** Bidang diisi untuk memuaskan daftar periksa. Ambil sampel entri untuk kebenarannya, dan minta pemilik menjelaskan pergerakan terbaru.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Kepemilikan dan register | Pemilik tidak jelas; metrik hidup di spreadsheet pribadi | Beberapa tim menyimpan daftar dengan pemilik | Satu register untuk semua metrik yang dilaporkan, masing-masing dengan pemilik dan peran bernama | Cakupan dan kemutakhiran diplot tren; kesenjangan berujung pada perbaikan yang didanai | Register dibagikan dengan pemasok dan pelanggan di mana angka melintasi batas |
| Definisi dan kendali perubahan | Definisi berbeda menurut orang | Tertulis untuk sebagian metrik kontrak | Definisi tertulis dengan jam dan log perubahan untuk setiap metrik yang dilaporkan | Perubahan ditinjau dampaknya pada tren sebelum dirilis | Definisi direvisi bersama antartim dan pemasok ketika tidak lagi memberi masukan bagi keputusan |
| Tinjauan dan pemensiunan | Metrik ditambah, tak pernah dihapus | Pembersihan sesekali | Ritme tinjauan dan ujian pemensiunan tertulis | Hasil tinjauan dilacak sebagai pekerjaan perbaikan | Pemensiunan dan pembaruan rutin, digerakkan bukti dari pengguna dan tim |
| Akses dan audiens | Akses terjadi begitu saja | Tampilan terbatas untuk data sensitif | Audiens didaftar per metrik, dengan alasan | Akses ditinjau dengan ritme; data tingkat orang dipegang pengurus | Audiens dirancang bersama orang yang diukur dan pelanggan |

## Daftar periksa

- [ ] Register metrik ada dan mendaftar setiap metrik yang dilaporkan.
- [ ] Setiap metrik yang dilaporkan memiliki pemilik bernama dan peran tercatat.
- [ ] Setiap metrik yang dilaporkan memiliki definisi tertulis dengan aturan mulai, berhenti, dan pengecualian.
- [ ] Setiap metrik memiliki satu sumber otoritatif yang disebut di register.
- [ ] Tanggal tinjauan dan selang dicatat untuk setiap metrik.
- [ ] Perubahan definisi dicatat dengan alasan dan ditandai pada bagan.
- [ ] Ujian pemensiunan tertulis dan diterapkan pada setiap tinjauan.
- [ ] Audiens setiap tampilan dicatat, dengan alasan untuk setiap pembatasan.
- [ ] Tidak ada tampilan yang dilaporkan memeringkat individu, dan data tingkat orang berada pada pengurus data.
- [ ] Register telah diambil sampelnya untuk kebenaran pada kuartal terakhir.

## Prompt AI

**Susun piagam metrik untuk sebuah set metrik.**

```text
Susun piagam metrik satu halaman untuk [team or service name], yang menyediakan
[type of service or delivery work]. Set metriknya: [list of metrics]. Audiensnya
[audiences]. Sertakan tujuan, bukan-tujuan yang eksplisit, tabel RACI untuk
pemilik, pengurus data, dan peninjau dengan peran berikut: [roles], ritme tinjauan,
dan ujian pemensiunan. Dasarkan draf hanya pada yang saya tulis. Jangan mengarang
metrik, target, atau nilai acuan. Daftar asumsi Anda dan pertanyaan yang harus
saya jawab untuk melengkapi piagam.
```

**Temukan konflik antara dua versi sebuah metrik.**

```text
Berikut dua deskripsi dari apa yang semestinya metrik yang sama, [metric name].
Versi A, dari [source A]: [description and formula]. Versi B, dari [source B]:
[description and formula]. Bandingkan keduanya dalam hal apa yang dihitung, di
mana jam mulai dan berhenti, status mana yang menjedanya, dan apa yang
dikecualikan. Jelaskan perbedaan mana yang dapat menerangkan selisih antara
[value A] dan [value B], dan sarankan pertanyaan untuk pemilik. Jangan menebak
nilai yang tidak saya berikan. Daftar asumsi Anda dan apa yang tidak dapat Anda
tentukan.
```

**Tinjau register metrik untuk mencari kesenjangan.**

```text
Berikut ekstrak register metrik kami dengan bidang [list fields]. Tinjau untuk
pemilik yang hilang, entri tanpa tanggal tinjauan atau yang lebih tua dari
[interval], metrik dengan lebih dari satu sumber, metrik tanpa keputusan tertaut,
dan tampilan yang dapat membuka data tingkat orang. Laporkan pola per metrik,
bukan per individu. Jangan mengarang fakta tentang metrik kami. Katakan temuan
mana yang pasti dari teks dan mana yang tebakan, dan daftar asumsi Anda.

[paste register extract, with personal data removed]
```

**Rencanakan tinjauan pemensiunan.**

```text
Kami meninjau metrik setiap [interval]. Ujian pemensiunan kami: [test]. Untuk
setiap metrik di bawah, dengan catatan yang saya berikan, usulkan pensiunkan,
pertahankan, gabung, atau rancang ulang, dengan alasan satu baris dan pertanyaan
untuk pemilik: [metrics with last-cited date and owner role]. Sarankan juga cara
mengumumkan setiap pemensiunan kepada [audience]. Jangan mengarang data
pemakaian. Daftar asumsi Anda dan informasi apa pun yang akan mengubah
rekomendasi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik dan pagar pembatas berpasangan bagi sebuah metrik sebelum menambahkannya ke register.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik memuat pemilik, vektor manipulasi, dan pagar pembatas.

## Poin penting

- Tata kelola menjaga angka bermakna sama dari waktu ke waktu, dan register satu halaman adalah intinya.
- Sebut satu pemilik akuntabel untuk setiap metrik yang dilaporkan, dan catat perannya selain orangnya.
- Tulis satu definisi beserta jamnya, hitung di satu tempat, dan catat setiap perubahan.
- Cocokkan bobot tata kelola dengan akibat dari metrik itu.
- Putuskan dengan sengaja siapa melihat tampilan apa, jauhkan data tingkat orang dari pelaporan, dan pensiunkan metrik berdasarkan bukti.

## Referensi dan bacaan lanjutan

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
