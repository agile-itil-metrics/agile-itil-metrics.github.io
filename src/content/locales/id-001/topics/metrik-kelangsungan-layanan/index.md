# Metrik kelangsungan layanan

**Rencana pemulihan adalah hipotesis sampai latihan mengujinya, jadi metrik kelangsungan sebaiknya menghitung apa yang benar-benar dipulihkan, seberapa cepat, dan berapa banyak data yang kembali, dan tidak pernah jumlah rencana di rak.**

## Gambaran umum dan motivasi

Kebanyakan ukuran insiden menggambarkan hari buruk biasa: deployment gagal, basis data jenuh, tetangga bising. Kelangsungan layanan menggambarkan hari yang jarang dan parah, ketika sebuah wilayah gagal, penyimpanan data rusak, pemasok lenyap, atau ransomware mengenkripsi seluruh aset. [Perencanaan kelangsungan bisnis](https://en.wikipedia.org/wiki/Business_continuity_planning) adalah disiplin mempersiapkan organisasi untuk terus menyampaikan pada tingkat yang dapat diterima melalui peristiwa semacam itu. Dalam ITIL 4, praktik itu disebut manajemen kelangsungan layanan, dan merupakan pandangan layanan TI atas tujuan yang lebih besar itu (lihat topik padanannya dalam *Agile ITIL Guide* pendamping).

Dua istilah membawa sebagian besar bobotnya. [Sasaran waktu pemulihan](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) adalah waktu yang dapat diterima untuk memulihkan layanan setelah gangguan. [Sasaran titik pemulihan](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) adalah jumlah kehilangan data yang dapat diterima, dinyatakan sebagai rentang waktu: RPO satu jam berarti kehilangan penulisan satu jam terakhir dapat ditoleransi dan kehilangan lebih dari itu tidak. Keduanya berasal dari [analisis dampak bisnis](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), metode mengidentifikasi kegiatan mana yang paling penting, apa bergantung pada apa, dan berapa biaya gangguan. Sasaran adalah keputusan bisnis dengan harga, karena sasaran yang lebih ketat butuh lebih banyak redundansi, otomatisasi, dan waktu latihan.

Kesulitannya adalah sasaran adalah janji tentang peristiwa masa depan yang belum terjadi. Bukti yang jujur adalah uji. Apakah tim memulihkan layanan dalam RTO pada latihan terakhir? Apakah data yang dipulihkan memenuhi RPO? Apakah langkah dalam rencana adalah langkah yang benar-benar diambil tim? Metrik kelangsungan karena itu sebagian besar adalah pengukuran latihan, dan mutu pengukuran bergantung pada seberapa realistis latihan itu.

Tim agile dan rekayasa keandalan situs (SRE) membawa kebiasaan berguna untuk ini. Sistem mereka berubah mingguan, jadi rencana yang ditulis sekali dan diarsipkan menjadi basi dalam hitungan bulan. Respons agile adalah menyimpan pemulihan sebagai kode (misalnya dengan [infrastruktur sebagai kode](https://en.wikipedia.org/wiki/Infrastructure_as_code)), melatihnya sering, dan memperlakukan setiap latihan sebagai sumber item backlog. [Rekayasa chaos](https://en.wikipedia.org/wiki/Chaos_engineering) dan game day menerapkan gagasan yang sama dalam skala lebih kecil: timbulkan kegagalan dengan sengaja, secara terkendali, dan amati apa yang terjadi. Pandangan SRE dijelaskan dalam buku Google *Site Reliability Engineering*, dan bidang yang lebih luas diringkas dalam artikel [rekayasa keandalan situs](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### Bagaimana pandangan berbeda

- **Pandangan ITIL.** Manajemen kelangsungan layanan adalah praktik yang menetapkan sasaran pemulihan dari BIA, merancang rencana, dan membuktikannya dengan uji. Keluarannya adalah rencana, laporan latihan, dan temuan tercatat. Standar [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) menjelaskan sistem manajemen kelangsungan bisnis. Per Oktober 2026, periksa edisi terkini secara langsung bila pelanggan atau regulator mewajibkan kesesuaian.
- **Pandangan agile.** Kemampuan pemulihan adalah sifat produk dalam definisi selesai. Cerita yang menambah penyimpanan data belum selesai sampai jalur pemulihannya dicoba.
- **Pandangan SRE.** Pekerjaan keandalan dianggarkan dan diukur. Failover, latihan pemulihan, dan game day adalah pekerjaan terjadwal dengan pemilik dan temuan yang masuk ke backlog.

Topik ini mencakup tujuh ukuran: pemulihan terhadap sasaran waktu dan data dalam uji, cakupan dan kebaruan latihan, pemulihan cadangan, penutupan temuan, dan kemutakhiran rencana. Gangguan nyata ada dalam metrik insiden besar (lihat topik 3.4, Metrik insiden besar) dan metrik ketersediaan (lihat topik 5.3, Metrik ketersediaan). Sasaran yang dinyatakan sebagai target yang menghadap pengguna ada dalam topik tentang indikator dan anggaran (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan). “Waktu pemulihan deployment gagal” dari program riset DORA adalah jam yang jauh lebih kecil (lihat topik 2.8, Metrik DORA). Akar masalah yang diungkap uji milik topik masalah dan pembelajaran (lihat topik 4.1, Metrik manajemen masalah, dan topik 4.2, Metrik postmortem dan pembelajaran).

**Tingkat (tier)** adalah kelas layanan yang dikelompokkan menurut seberapa cepat harus kembali. **Latihan meja (tabletop)** adalah latihan berbasis diskusi tanpa perubahan sistem. **Game day** adalah latihan langsung tempat tim menimbulkan atau mensimulasikan kegagalan dan mengamati responsnya. **Temuan** adalah celah tercatat antara rencana dan apa yang terjadi. **Kemutakhiran rencana** adalah seberapa baik rencana mencerminkan layanan sebagaimana adanya hari ini.

## Prinsip utama

- **Uji, lalu klaim.** RTO atau RPO hanya tervalidasi oleh pemulihan yang benar-benar dilakukan dan diwaktukan. Laporkan sasaran dan hasil terakhir yang didemonstrasikan berdampingan.
- **Ukur realisme, bukan hanya keberhasilan.** Pemulihan basis data uji kosong yang lulus dalam hitungan menit sedikit berkata tentang pemulihan berukuran produksi. Catat lingkup dan kondisi tiap latihan di samping hasil.
- **Bagi aset menjadi tingkat dan belanjakan upaya menurut tingkat.** Layanan kritis mendapat uji yang sering dan realistis. Layanan tingkat rendah mendapat pemeriksaan lebih ringan. Satu target frekuensi untuk semuanya membuang upaya atau melewatkan risiko.
- **Perlakukan temuan sebagai produk latihan.** Keluaran berharga dari game day adalah daftar celah yang ditutup. Uji tanpa temuan sama ada sangat baik atau terlalu lembut, dan Anda sebaiknya mencari tahu yang mana.
- **Gambarkan layanan dan rotasi, tidak pernah individu.** Hasil latihan menggambarkan sistem dan rencana. Tak seorang pun diperingkat menurut seberapa cepat memulihkan latihan.
- **Tampilkan setiap latihan sebagai barisnya sendiri.** Ada sedikit uji per layanan per tahun, jadi rata-rata menyesatkan (lihat topik 1.6, Literasi statistik untuk metrik layanan).

## Definisi metrik

Setiap metrik mendaftar jam atau hitungan, apa yang dikecualikan, dan sumber data. Setiap baris butuh aturan tertulis sebelum dipercaya. “Layanan tingkat-1” di bawah berarti layanan pada tingkat pemulihan tertinggi yang didefinisikan BIA Anda sendiri.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat RTO terpenuhi | Porsi latihan pemulihan tempat layanan dipulihkan dalam RTO yang dinyatakan | latihan dengan waktu pemulihan <= RTO / latihan yang dijalankan. Jam dimulai pada awal kegagalan latihan yang dideklarasikan (waktu injeksi atau deklarasi skenario) dan berhenti ketika layanan lulus pemeriksaan kesehatan yang disepakati untuk pengguna nyata atau sintetis. Latihan meja dan latihan tanpa pemulihan berwaktu dikecualikan dan dihitung terpisah | persen, dengan jumlah latihan ditampilkan | Laporan latihan, lini masa dari pemantauan, register layanan dengan RTO | Manajemen kelangsungan layanan; manajemen ketersediaan | Hasil game day; waktu pemulihan dalam metrik pengiriman | Per latihan; direkap kuartalan |
| Tingkat RPO terpenuhi | Porsi latihan pemulihan tempat kehilangan data tetap dalam RPO yang dinyatakan | latihan dengan rentang kehilangan data terukur <= RPO / latihan yang memulihkan data. Rentang kehilangan data adalah waktu antara penulisan terakhir yang ada setelah pemulihan dan saat kegagalan. Latihan yang tidak memulihkan keadaan dikecualikan | persen, dengan jumlah latihan ditampilkan | Laporan latihan, perbandingan data yang dipulihkan dengan sumber atau log tulis | Manajemen kelangsungan layanan; manajemen keamanan informasi | Latihan pemulihan sebagai bagian definisi selesai | Per latihan; direkap kuartalan |
| Cakupan pemulihan teruji | Porsi layanan tingkat-1 dan tingkat-2 yang menjalani uji pemulihan langsung dalam interval uji yang disepakati | layanan dengan uji memenuhi syarat di dalam interval / layanan dalam lingkup. Uji memenuhi syarat adalah langsung (bukan hanya latihan meja) dan memulihkan layanan di lingkungan uji atau produksi. Interval ditetapkan per tingkat | persen, menurut tingkat | Register layanan, kalender dan laporan latihan | Manajemen kelangsungan layanan; manajemen katalog layanan | Jadwal game day | Bulanan |
| Hari sejak uji pemulihan sukses terakhir | Usia uji pemulihan lulus terbaru untuk setiap layanan kritis | tanggal laporan dikurangi tanggal uji terbaru yang memenuhi RTO dan RPO. Uji gagal tidak mengatur ulang jam. Layanan yang tak pernah diuji ditampilkan sebagai “tak pernah” dan bukan nol | hari, per layanan, dengan yang tertua disorot | Laporan latihan, register layanan | Manajemen kelangsungan layanan | Jadwal game day; usia item kerja | Bulanan |
| Tingkat keberhasilan pemulihan cadangan | Porsi pemulihan dari cadangan yang dicoba yang selesai dengan data terverifikasi dan dapat dipakai | pemulihan yang selesai dan lulus pemeriksaan verifikasi data / pemulihan yang dicoba, atas uji pemulihan otomatis dan manual. Keberhasilan pekerjaan cadangan saja dikecualikan, karena pekerjaan yang berjalan bukan pemulihan yang berfungsi | persen, menurut tingkat data | Log sistem cadangan, hasil verifikasi pemulihan otomatis | Manajemen kelangsungan layanan; manajemen infrastruktur dan platform | Latihan pemulihan; kriteria operabilitas dalam definisi selesai | Mingguan untuk uji otomatis; bulanan dalam tinjauan |
| Tingkat penutupan temuan latihan | Porsi temuan dari latihan pemulihan yang ditutup dalam waktu yang disepakati, dibagi menurut keparahan | temuan ditutup dalam target / temuan yang jatuh tempo pada periode itu. Jam dimulai saat temuan dicatat dalam laporan latihan dan berhenti pada perbaikan terverifikasi, yang berarti uji ulang atau tinjauan yang mengonfirmasinya. Temuan yang diterima sebagai risiko oleh pemilik bernama dihitung terpisah | persen, dengan hitungan temuan terlambat | Laporan latihan, pelacak isu | Manajemen kelangsungan layanan; perbaikan berkelanjutan | Item tindakan retrospektif; usia item backlog | Bulanan |
| Kemutakhiran rencana | Porsi rencana dan runbook kelangsungan yang ditinjau setelah perubahan material terakhir pada layanannya, atau dalam interval tinjauannya | rencana dengan tanggal tinjauan setelah perubahan material terakhir dan di dalam interval / rencana dalam lingkup. Perubahan material berarti catatan perubahan yang ditandai mengubah arsitektur, penyimpanan data, dependensi, atau pemasok | persen, dengan usia rencana tak ditinjau tertua | Repositori rencana (kendali versi), catatan perubahan, register layanan | Manajemen kelangsungan layanan; pemberdayaan perubahan | Definisi selesai mencakup pembaruan runbook | Kuartalan |

Jam RTO dalam latihan berbeda dari jam dalam gangguan nyata, yang dimulai pada dampak (lihat topik 3.4, Metrik insiden besar), jadi bandingkan latihan dengan latihan. Latihan yang diskenariokan ketat mengukur kecepatan latihan, jadi catat berapa banyak kejutan yang dikandungnya.

## Rekomendasi

### Tetapkan sasaran yang dapat diuji

**1. Turunkan RTO dan RPO dari analisis dampak bisnis, dan tulis di samping layanan.** BIA bertanya kepada bisnis berapa biaya satu jam, satu hari, dan satu pekan gangguan dan berapa banyak data yang mampu hilang. Catat jawabannya di register layanan agar setiap uji dapat dibandingkan dengan sasaran yang dinyatakan. Sasaran yang dipilih insinyur sendirian cenderung tidak terjangkau atau tak berkaitan dengan apa yang dibutuhkan pelanggan.

**2. Bagi layanan menjadi tingkat dan tetapkan interval uji menurut tingkat.** Sedikit tingkat, mungkin tiga atau empat, lebih mudah dijalankan daripada aturan berbeda untuk setiap layanan. Beri tingkat teratas uji paling sering dan paling realistis, dan beri tingkat terendah pemeriksaan ringan seperti pemulihan berkala atas sampel. Tuliskan interval dan tinjau ketika BIA berubah.

**3. Periksa bahwa sasaran cocok dengan arsitektur.** RPO lima menit dengan cadangan malam adalah kontradiksi yang akan diungkap uji pada saat terburuk. Bandingkan setiap sasaran dengan desain cadangan, replikasi, dan failover sebelum latihan pertama, dan catat celah apa pun sebagai temuan.

### Uji dengan cara yang mengungkap sesuatu

**4. Campur latihan meja, latihan pemulihan, dan game day.** Latihan meja murah dan menemukan celah dalam peran, kontak, dan keputusan. Latihan pemulihan langsung menemukan celah dalam prosedur, izin, dan data. Game day, yang menimbulkan kegagalan dan mengamati respons, menemukan celah dalam pemantauan, runbook, dan koordinasi. Laporkan tiap jenis terpisah agar rentetan latihan meja yang mudah tidak tampak sebagai bukti pemulihan.

**5. Waktukan pemulihan pada data berukuran produksi.** Pemulihan yang berfungsi pada salinan kecil dapat gagal pada volume nyata karena batas throughput atau penyimpanan. Di mana uji skala penuh terlalu mahal dijalankan sering, jalankan satu secara berkala dan nyatakan ekstrapolasi apa pun. Catat ukuran data bersama hasil.

**6. Verifikasi bahwa data yang dipulihkan dapat dipakai.** Tambahkan pemeriksaan otomatis setelah pemulihan, seperti hitungan baris, checksum, atau transaksi sintetis. Hitung pemulihan sebagai berhasil hanya ketika pemeriksaan itu lulus.

**7. Tambahkan kejutan secara bertahap.** Latihan awal boleh diumumkan dan diskenariokan. Yang kemudian sebaiknya menahan rincian kegagalan dan menyertakan dependensi seperti kredensial kedaluwarsa atau pemasok yang tak terjangkau. Catat tingkat kejutan agar hasil dapat dibaca dalam konteks.

### Ubah temuan menjadi perubahan

**8. Catat setiap temuan dengan pemilik, keparahan, dan tenggat.** Game day menghasilkan daftar: izin yang hilang, langkah runbook yang tak lagi cocok dengan alat, monitor yang tak pernah menyala. Taruh masing-masing ke backlog tim dengan visibilitas sama seperti pekerjaan fitur. Lacak usia temuan terbuka dan porsi yang ditutup tepat waktu, dan konfirmasi penutupan lewat uji ulang di mana praktis.

**9. Tautkan temuan ke manajemen masalah dan pembelajaran.** Temuan yang berulang lintas latihan adalah masalah dalam arti ITIL (lihat topik 4.1, Metrik manajemen masalah). Tinjau setiap latihan tanpa menyalahkan, seperti postmortem, dan lacak tindakan sampai penutupan (lihat topik 4.2, Metrik postmortem dan pembelajaran).

### Jaga rencana tetap hidup

**10. Simpan rencana dan runbook dalam kendali versi, dan tautkan ke perubahan.** Ketika catatan perubahan mengubah arsitektur, penyimpanan data, atau pemasok, wajibkan rencana pemiliknya ditinjau dalam pekerjaan yang sama (lihat topik 4.3, Metrik pemberdayaan perubahan). Ukur kemutakhiran rencana terhadap perubahan material terakhir dan bukan hanya terhadap kalender. Rencana yang ditinjau tiap kuartal yang mengabaikan migrasi bulan lalu hanya terkini namanya.

**11. Jaga peta dependensi tetap jujur.** Urutan pemulihan bergantung pada layanan bersama seperti identitas, resolusi nama, dan penyimpanan rahasia. Rekonsiliasi peta terhadap catatan konfigurasi dan perbaiki celah yang diungkap latihan (lihat topik 7.4, Metrik kualitas konfigurasi dan CMDB).

**12. Sertakan pemasok, dan putar tugas latihan.** Minta setiap pemasok kritis bukti ujinya sendiri dan sepakati cara melatih langkah bersama (lihat topik 8.4, Metrik pemasok dan kontrak). Latihan memakan waktu, jadi bagi tugas lintas rotasi dan hitung sebagai beban operasional (lihat topik 5.7, Metrik pekerjaan berulang dan siaga).

## Vektor manipulasi dan pagar pembatas

Angka kelangsungan mudah disanjung karena sedikit orang melihat latihan dengan cermat, dan uji sesungguhnya jarang terjadi. Tabel memasangkan tiap metrik dengan cara ia dimanipulasi dan pemeriksaan yang menangkapnya. Pasangan mengikuti bentuk yang ditetapkan dalam topik 1.2 (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat RTO terpenuhi | Memilih set data uji kecil, skenario mudah, atau skrip yang dilatih; memulai jam terlambat, setelah tim mulai; melonggarkan pemeriksaan kesehatan agar “dipulihkan” tiba lebih cepat; menetapkan RTO murah hati agar setiap uji lulus | Catat ukuran data, kejutan skenario, dan definisi pemeriksaan kesehatan bersama setiap hasil; bandingkan RTO dengan BIA; tampilkan tiap latihan sebagai barisnya sendiri, termasuk yang gagal |
| Tingkat RPO terpenuhi | Mengukur kehilangan hanya untuk tabel utama dan bukan semua keadaan; menguji replika yang sinkron karena tak ada beban berjalan; mendefinisikan ulang RPO setelah hasil terlewat | Verifikasi kehilangan data terhadap log tulis di semua penyimpanan data dalam lingkup; uji di bawah beban tulis realistis; simpan log perubahan sasaran dengan alasan |
| Cakupan pemulihan teruji | Menghitung diskusi latihan meja sebagai uji; menguji layanan sangat kecil untuk menaikkan persentase; menyusutkan daftar dalam lingkup dengan mengklasifikasi ulang layanan ke tingkat lebih rendah | Wajibkan uji langsung untuk hitungan tingkat-1; laporkan cakupan berbobot menurut kekritisan layanan; audit perubahan tingkat terhadap BIA |
| Hari sejak uji pemulihan sukses terakhir | Menjalankan ulang uji mudah untuk mengatur ulang usia; melabeli uji parsial sebagai lulus; mengatur ulang tanggal setelah tinjauan di atas kertas | Tampilkan lingkup uji lulus terakhir; tampilkan usia tertua dan layanan yang tak pernah diuji; wajibkan RTO dan RPO sama-sama terpenuhi |
| Tingkat keberhasilan pemulihan cadangan | Melaporkan keberhasilan pekerjaan cadangan sebagai keberhasilan pemulihan; menguji hanya cadangan yang diketahui baik; memverifikasi dengan pemeriksaan yang tak mungkin gagal | Lacak pemulihan cadangan yang disampel acak; wajibkan hasil verifikasi data; tinjau pemeriksaan itu sendiri pada setiap audit |
| Tingkat penutupan temuan latihan | Menutup temuan tanpa perbaikan; menurunkan keparahan untuk melonggarkan tenggat; memecah satu temuan menjadi banyak yang mudah; mencatat sedikit temuan sejak awal | Verifikasi penutupan lewat uji ulang; laporkan temuan per latihan di samping tingkat penutupan, karena hitungan turun dapat berarti latihan lebih lembut; tinjau perubahan keparahan |
| Kemutakhiran rencana | Memperbarui tanggal tinjauan tanpa membaca rencana; menandai perubahan sebagai tidak material; menjejalkan rencana dengan teks generik yang tak pernah basi | Ambil sampel rencana dan telusuri bersama orang yang tidak menulisnya; bandingkan tingkat bendera perubahan-material dengan riwayat perubahan arsitektur; kaitkan kemutakhiran dengan hasil uji |

Pembacaan yang sehat menunjukkan segelintir uji per kuartal dengan variasi jujur: sebagian lulus pada percobaan pertama, sebagian gagal dan diulang, dan temuan dari masing-masing muncul di backlog dan ditutup dalam waktu yang dinyatakan. Skor sempurna tahun demi tahun adalah alasan untuk bertanya seberapa sulit latihannya.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Uji pemulihan otomatis kecil yang sering | Bukti berkelanjutan yang murah; menangkap kegagalan cadangan senyap lebih awal | Tidak menguji koordinasi, orang, atau pemulihan skala penuh |
| Latihan failover skala penuh tahunan | Realistis; melatih orang, pemasok, dan dependensi bersama | Mahal dan jarang; sulit diulang setelah perbaikan; berisiko bila dijalankan di produksi |
| Latihan meja | Biaya rendah; menemukan celah dalam peran dan keputusan; baik untuk pelatihan | Tidak membuktikan teknologi berfungsi; mudah dijalankan tanpa belajar apa pun |
| Game day produksi dengan kegagalan yang ditimbulkan | Realisme tertinggi; menguji pemantauan dan runbook sebagaimana adanya | Butuh pengaman matang dan dukungan pimpinan; dapat merugikan pelanggan bila dijalankan sembarangan |
| Sasaran bertingkat | Membelanjakan upaya di tempat risiko berada | Penetapan tingkat dapat hanyut dan butuh pemilik |

Jawaban praktisnya adalah program berlapis: pemeriksaan pemulihan otomatis murah sepanjang waktu, latihan langsung untuk setiap layanan tingkat-1 pada interval tetap, latihan lebih besar pada siklus lebih panjang, dan latihan meja untuk keputusan dan komunikasi. Nyatakan interval agar pembaca dapat menilai seberapa baru buktinya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Kapan terakhir kita memulihkan layanan terpenting kita, dan apa tepatnya yang kita buktikan?**
Minta tanggal, ukuran data, skenario, dan hasil, dan tulis di papan. Fasilitator sebaiknya menahan diri dari menghakimi dan berfokus pada jurang antara klaim dan bukti. Akhiri dengan menyepakati satu uji yang akan menutup jurang terbesar.

**2. Siapa yang memilih RTO dan RPO kita, dan apakah bisnis masih akan memilihnya hari ini?**
Telusuri setiap sasaran kembali ke analisis dampak bisnis atau keputusan. Tanyakan apakah arsitektur dapat memenuhi sasaran di atas kertas, dan apakah biaya memenuhinya pernah dinyatakan. Sepakati siapa yang akan mengonfirmasi sasaran layanan teratas dengan bisnis dan kapan.

**3. Berapa biaya reputasi jika latihan gagal, dan apakah itu membentuk seberapa sulit latihan kita?**
Pertanyaan ini memunculkan tekanan yang membuat latihan lembut. Tanyakan apakah uji gagal diperlakukan sebagai kegagalan tim atau keberhasilan latihan.

**4. Temuan mana dari latihan terakhir kita yang masih terbuka, dan mengapa?**
Bacakan daftar dengan lantang beserta usia dan pemiliknya. Untuk setiap item terlambat, tanyakan apa yang menghalanginya: pekerjaan bersaing, kepemilikan tak jelas, biaya, atau keyakinan bahwa risiko dapat diterima. Tujuannya tak ada temuan yang duduk dalam keadaan tanpa pemilik.

**5. Apa yang diasumsikan rencana kita yang tidak lagi benar?**
Pilih satu rencana dan bacalah bersama orang yang tidak menulisnya. Cari alat yang dipensiunkan, akun yang diganti nama, dan pemasok yang pergi. Tanyakan bagaimana rencana akan diperbarui ketika layanan berubah, dan siapa yang memperhatikan bila tidak. Kaitkan jawabannya dengan proses perubahan.

**6. Dependensi mana yang akan menghentikan segalanya, dan pernahkah kita menguji tanpanya?**
Layanan bersama seperti identitas, resolusi nama, rahasia, dan sistem paging itu sendiri adalah titik kegagalan tunggal yang umum. Minta tim menamai mereka dan menggambarkan kapan terakhir masing-masing sengaja dibuat tak tersedia.

## Empat perspektif

### Tim produk dan pengiriman

Tim produk memiliki desain yang memungkinkan pemulihan, jadi mereka bertemu kelangsungan sebagai bagian definisi selesai untuk layanan kritis: jalur cadangan, prosedur pemulihan, dan runbook yang berfungsi. Mereka sebaiknya menjalankan latihan pemulihan sebagai bagian irama mereka sendiri, menyimpan kode pemulihan bersama layanan, dan memperlakukan latihan gagal sebagai item backlog.

### Tim layanan dan operasi

Tim operasi menjalankan sebagian besar latihan dan memikul beban menyiapkannya. Mereka sebaiknya menjaga kalender latihan, mencatat lini masa saat latihan berjalan, dan menulis temuan pada hari yang sama. Hasil menggambarkan layanan dan rencana, dan tak seorang pun diperingkat menurut seberapa cepat individu memulihkan latihan.

### Kepemimpinan dan tata kelola

Pemimpin menetapkan sasaran bersama bisnis dan memutuskan berapa banyak pemulihan yang layak dibeli. Mereka sebaiknya meminta melihat hasil terakhir yang didemonstrasikan di samping tiap sasaran, usia bukti, dan temuan terbuka, dan menghindari menghargai lembar bersih. Badan tata kelola sebaiknya mengharapkan himpunan kecil dan stabil ukuran kelangsungan, terkait dengan register risiko dan pelaporan teregulasi di mana berlaku (lihat topik 8.2, Metrik risiko dan kendali, dan topik 8.5, Pelaporan teregulasi dan pemerintah).

### Pelanggan dan pengguna

Pelanggan jarang melihat kelangsungan sampai itu penting, dan saat itu mereka menilainya sepenuhnya dari hasil: berapa lama mereka tanpa layanan dan apakah data mereka selamat. Mereka diuntungkan oleh pernyataan jelas tentang apa yang dijanjikan, dalam istilah yang dapat mereka pahami, dan oleh komunikasi jujur ketika insiden memanggil rencana. Di mana kontrak mencakup komitmen pemulihan, bagikan bukti latihan atas permintaan (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional menjalankan sistem penjadwalan pasien, arsip pencitraan medis, dan layanan pesan staf. Tim produk beranggotakan delapan orang merawat penjadwalan, dan tim operasi menjalankan platform. Semua angka dalam contoh ini bersifat ilustratif.

Register departemen mendaftar penjadwalan sebagai tingkat 1 dengan RTO 2 jam dan RPO 15 menit. Laporan kuartalannya menunjukkan “tingkat RTO terpenuhi: 100 persen dari 4 latihan” dan “cakupan pemulihan teruji: 100 persen.” Kepala operasi baru membaca laporan latihan di balik angka itu. Tiga dari empat latihan adalah latihan meja, dan satu-satunya pemulihan langsung memakai salinan basis data yang memuat sekitar sepersepuluh data produksi. Tak ada yang memulihkan cadangan ke lingkungan bersih selama 14 bulan.

Tim memutuskan mengubah apa yang diukur dan diuji. Ia mendefinisikan ulang cakupan pemulihan teruji untuk menghitung hanya uji langsung, yang menurunkan angka menjadi 33 persen di ketiga layanan tingkat-1. Ia menjadwalkan pemulihan berukuran produksi untuk penjadwalan, dengan verifikasi otomatis hitungan baris dan transaksi pemesanan sintetis. Pelaksanaannya memakan 3 jam 40 menit terhadap RTO 2 jam, dan data yang dipulihkan tertinggal 40 menit dari titik kegagalan terhadap RPO 15 menit, karena pengiriman log dijeda selama migrasi dan tak pernah dilanjutkan. Game day menghasilkan 9 temuan: 2 tinggi, 5 sedang, dan 2 rendah.

Keputusan yang dicatat dalam log adalah memperlakukan ketidakterpenuhan itu sebagai hasil paling berharga tahun ini. Tim membuka pekerjaan untuk melanjutkan pengiriman log dengan peringatan atas lag-nya, memparalelkan pemulihan, dan memindahkan satu volume data ke penyimpanan lebih cepat. RTO tetap 2 jam, dan tim menambah cadangan manual terdokumentasi untuk penjadwalan. Tingkat penutupan temuan untuk 60 hari pertama adalah 7 dari 9 tepat waktu, dengan dua lainnya diterima sebagai risiko oleh pemilik bernama.

Risiko manipulasi yang ditangkap di sini halus. Tak seorang pun memalsukan angka: hitungan latihan meja yang murah hati dan set data uji kecil membuat laporan hijau. Pagar pembatas yang berhasil adalah mencatat ukuran data dan jenis latihan bersama setiap hasil, dan praktik membaca laporan latihan yang mendasarinya. Pada laporan berikutnya, tim menampilkan tiap latihan sebagai barisnya sendiri, dengan percobaan gagal disertakan.

## Sudut pandang sektor

**Startup.** Biasanya ada satu lingkungan produksi, tim kecil, dan penyedia cloud terkelola. Ukuran paling berharga adalah yang paling sederhana: pulihkan basis data produksi dari cadangan ke lingkungan bersih tiap bulan, waktukan, dan verifikasi hasilnya. Tulis RTO dan RPO dalam satu halaman.

**Bisnis kecil.** TI sering dialihdayakan atau dijalankan satu atau dua orang pada layanan yang dihosting. Tanyakan pemasok secara tertulis pemulihan apa yang dikomitmenkannya dan bukti apa yang dapat ditunjukkannya, dan uji satu pemulihan data Anda sendiri tiap kuartal. Simpan rencana satu halaman di tempat yang dapat dibaca ketika sistem utama mati.

**Perusahaan besar.** Banyak layanan, banyak pemasok, dan platform bersama menjadikan pembagian tingkat dan peta dependensi esensial. Investasikan pada register layanan pusat dengan sasaran, kalender latihan, verifikasi pemulihan otomatis, dan pelaporan konsisten agar hasil dapat dibandingkan antartim.

**Pemerintah dan sektor publik.** Kewajiban kelangsungan dapat timbul dari undang-undang, audit, atau kebijakan, dan layanan publik mungkin harus terus bekerja selama keadaan darurat. Bukti pengujian sering ditinjau secara eksternal, jadi simpan laporan latihan, temuan, dan catatan penutupan dalam bentuk yang dapat dibaca auditor. Pengadaan dapat mengunci pengaturan pemulihan, jadi sertakan hak latihan dan bukti dalam kontrak (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Alasan untuk berinvestasi adalah biaya gangguan parah yang berlangsung lebih lama dari yang dapat ditanggung bisnis, hilangnya data yang tak dapat diciptakan kembali, dan kewajiban kepada pelanggan, regulator, dan penjamin yang meminta bukti kesiapan. Pekerjaan kelangsungan adalah asuransi, jadi imbal hasilnya adalah kerugian yang dihindari dan keyakinan pembuat keputusan, dan sulit dinyatakan sebagai angka tanpa mengarang satu. Gambarkan lewat pola yang dapat Anda amati: jurang antara waktu pemulihan yang dinyatakan dan yang didemonstrasikan, jumlah temuan keparahan tinggi yang ditemukan dalam latihan dan bukan dalam peristiwa nyata, dan waktu menjawab permintaan bukti dari pelanggan atau auditor.

Biaya datang dalam tiga kelompok: redundansi dan perkakas yang dituntut sasaran, waktu orang untuk merencanakan, menjalankan, dan meninjau latihan, dan upaya menjaga rencana dan peta dependensi tetap terkini.

Total biaya kepemilikan didominasi orang dan tingkat yang lebih ketat. Berpindah dari RTO 24 jam ke 2 jam mengubah desain dan tagihan, jadi buat pertukaran itu eksplisit bersama bisnis. Uji otomatis kecil yang sering cenderung berbiaya lebih rendah daripada satu acara besar tahunan karena cacat muncul selagi murah diperbaiki.

## Anti-pola dan jebakan

- **Rencana di rak.** Dokumen dihitung sebagai persiapan, dan tak ada yang mencobanya. Sebagai gantinya, laporkan tanggal dan hasil uji langsung terakhir di samping setiap sasaran.
- **Keberhasilan cadangan sebagai keberhasilan pemulihan.** Pekerjaan melaporkan hijau sementara data tak dapat dipulihkan. Sebagai gantinya, uji pemulihan secara teratur dan verifikasi data sebelum menghitung keberhasilan.
- **Teater yang dilatih.** Latihan diskenariokan dan dijalankan oleh penulis rencana. Sebagai gantinya, tambahkan kejutan secara bertahap.
- **Satu target untuk semuanya.** Setiap layanan punya RTO empat jam karena templat berkata demikian. Sebagai gantinya, bagi layanan menjadi tingkat dari analisis dampak bisnis dan tetapkan sasaran yang cocok.
- **Temuan yang tak pernah ditutup.** Laporan latihan mendaftar celah dan backlog tak pernah melihatnya. Sebagai gantinya, beri setiap temuan pemilik dan tenggat, dan verifikasi penutupan lewat uji ulang.
- **Menghukum uji yang gagal.** Tim yang disalahkan atas RTO yang terlewat akan berhenti menjalankan uji sulit. Sebagai gantinya, sepakati di muka bahwa latihan gagal dengan temuan baik adalah hasil baik, dan tinjau tanpa menyalahkan.
- **Rencana basi setelah perubahan cepat.** Kalender menggerakkan tinjauan, dan perubahan arsitektur terlewat. Sebagai gantinya, kaitkan tinjauan rencana dengan catatan perubahan material dan ukur kemutakhiran rencana terhadapnya.

## Model kematangan

| Dimensi | Memulai | Berkembang | Terstandar | Terkelola | Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Sasaran dan tingkat | RTO dan RPO tak tertulis atau disalin dari templat | Sasaran ditulis untuk beberapa layanan kunci | Tingkat dan sasaran berasal dari analisis dampak bisnis dan berada di register layanan | Sasaran ditinjau terhadap hasil yang didemonstrasikan dan arsitektur | Sasaran disepakati bersama bisnis dan pemasok, dan disesuaikan seiring layanan berubah |
| Pengujian dan bukti | Pemulihan tak pernah diuji, atau diuji sekali setelah insiden | Uji pemulihan ad hoc oleh beberapa tim; hasil disimpan dalam catatan pribadi | Interval uji bertingkat dengan lingkup, lini masa, dan hasil tercatat | Hasil diplot tren, dengan latihan meja, latihan pemulihan, dan game day dilaporkan terpisah | Latihan lintas tim dan pemasok dengan kejutan, dijadwalkan dari risiko |
| Temuan dan pembelajaran | Celah diperhatikan secara informal | Temuan didaftar setelah beberapa latihan | Setiap temuan punya pemilik, keparahan, dan tenggat | Tingkat penutupan dan usia ditinjau, dengan uji ulang mengonfirmasi penutupan | Temuan menyuapi platform bersama, kontrak pemasok, dan standar desain |
| Kemutakhiran rencana | Rencana ditulis sekali | Rencana diperbarui setelah insiden | Rencana dalam kendali versi dengan interval tinjauan | Tinjauan dikaitkan dengan perubahan material dan diukur | Rencana dan runbook diuji sebagai kode dan dihasilkan dari definisi layanan bila mungkin |

## Daftar periksa

- [ ] Setiap layanan tingkat-1 punya RTO dan RPO tertulis yang berasal dari analisis dampak bisnis.
- [ ] Register layanan menunjukkan tingkat, sasaran, dan interval uji tiap layanan.
- [ ] Jam RTO dan RPO, pemeriksaan kesehatan, dan pengecualian tertulis (lihat topik 1.5, Sumber data dan instrumentasi).
- [ ] Uji pemulihan langsung, latihan meja, dan game day dilaporkan sebagai jenis terpisah.
- [ ] Setiap uji pemulihan mencatat ukuran data, skenario, tingkat kejutan, dan waktu pemulihan serta kehilangan data yang terukur.
- [ ] Pemulihan dari cadangan diuji otomatis, dan pemeriksaan verifikasi data menentukan keberhasilan.
- [ ] Setiap temuan latihan punya pemilik, keparahan, tenggat, dan tempat di backlog.
- [ ] Tinjauan rencana dikaitkan dengan catatan perubahan material, dan rencana tak ditinjau tertua terlihat.
- [ ] Peta dependensi mencakup layanan bersama, dan setidaknya satu skenario menyingkirkan salah satunya.
- [ ] Setiap metrik dalam topik ini punya pagar pembatas bernama dan pemilik di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik).
- [ ] Tugas latihan berputar, dan waktu yang dibutuhkannya dihitung sebagai beban operasional.

## Prompt AI

**Rancang uji pemulihan dan ukuran yang menyertainya.**

```text
Saya ingin menguji pemulihan [service name], layanan [tier] dengan RTO yang
dinyatakan [RTO] dan RPO [RPO]. Komponen utamanya [list: data stores, queues,
compute, shared services] dan pemasoknya [list]. Susun rencana uji dengan
skenario realistis, peristiwa yang memulai jam, pemeriksaan kesehatan yang
menghentikannya, cara mengukur kehilangan data terhadap RPO, ukuran data yang
dipakai, apa yang dicatat, dan pengaman untuk mencegah kerugian pada produksi.
Jangan mengarang waktu acuan atau mengklaim sasaran apa pun dapat dicapai.
Daftar asumsi Anda dan pertanyaan yang harus saya jawab untuk menuntaskan rencana.
```

**Tinjau laporan latihan untuk bukti yang menyanjung.**

```text
Berikut ringkasan [number] latihan pemulihan terakhir kami: [paste for each:
type, date, scope, data size, restore time, data loss, findings count]. Sasaran
kami [RTO and RPO per tier]. Identifikasi di mana hasil yang dilaporkan dapat
melebih-lebihkan kemampuan pemulihan nyata, seperti set data kecil, skenario
yang diskenariokan, cakupan hanya latihan meja, atau pemeriksaan kesehatan yang
longgar. Sarankan informasi tambahan apa yang dicatat dan metrik pagar pembatas
mana yang dipasangkan dengan tiap hasil. Jangan mengarang nilai acuan atau
mengasumsikan fakta yang belum saya berikan. Daftar asumsi Anda.
```

**Ubah catatan game day menjadi temuan dan item backlog.**

```text
Berikut catatan mentah dari game day pada [service]: [paste notes and timeline].
Ekstrak setiap celah antara rencana dan apa yang terjadi sebagai temuan terpisah
dengan judul singkat, uraian, saran keparahan memakai skala ini [severity scale],
peran pemilik kandidat (bukan orang bernama), dan bagaimana kami dapat
memverifikasi perbaikan. Kelompokkan temuan yang mungkin berbagi akar masalah.
Jangan mengarang peristiwa yang tidak ada dalam catatan. Daftar asumsi Anda dan
apa pun yang perlu diperjelas.
```

**Periksa kemutakhiran rencana terhadap perubahan terbaru.**

```text
Berikut rencana kelangsungan untuk [service] yang terakhir ditinjau pada [date]:
[paste plan or outline]. Berikut perubahan material sejak itu: [list changes to
architecture, data stores, dependencies, suppliers, and tooling]. Identifikasi
langkah, kontak, alat, dan dependensi dalam rencana yang mungkin dibuat salah
oleh perubahan, dan daftar pertanyaan yang harus diajukan peninjau. Jangan
mengarang rincian tentang sistem kami. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan metrik kelangsungan, pemulihan, atau latihan, dan pagar pembatas untuk dipasangkan dengannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa metrik kelangsungan yang disunting menyatakan jam, pengecualian, dan vektor manipulasinya.

## Poin penting

- Sasaran pemulihan adalah janji, dan hanya latihan berwaktu yang realistis yang menunjukkan apakah dapat ditepati.
- Laporkan hasil terakhir yang didemonstrasikan dan usianya di samping setiap RTO dan RPO, dan tampilkan setiap latihan sebagai barisnya sendiri.
- Uji pemulihan, bukan cadangan: pemulihan dihitung hanya ketika data telah diverifikasi dapat dipakai.
- Produk latihan adalah daftar temuan yang ditutup, jadi lacak usianya dan konfirmasi penutupan lewat uji ulang.
- Simpan rencana dalam kendali versi dan kaitkan tinjauannya dengan perubahan material, bukan hanya kalender.
- Ukur layanan dan rencana, tidak pernah orang, dan jadikan latihan gagal dengan temuan baik sebagai hasil yang aman dan dihormati.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
