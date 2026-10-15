# Metrik tata kelola dan risiko AI

**Pemakaian AI butuh disiplin yang sama seperti perubahan apa pun pada layanan yang hidup: ketahui di mana ia berada, siapa pemiliknya, seberapa berisiko, bagaimana diuji dan diubah, dan apa yang terjadi ketika ia salah, dengan pengawasan yang benar-benar dapat dijalankan orang.**

## Gambaran umum dan motivasi

AI tiba di organisasi lewat banyak pintu. Sebuah tim mengadopsi asisten pemrograman. Vendor menambahkan fitur generatif ke produk yang sudah dipakai. Seorang staf menempelkan dokumen ke perkakas publik. Sebuah departemen membangun model untuk menilai permintaan. Masing-masing adalah pemakaian AI dengan manfaat dan risikonya sendiri, dan sedikit yang terlihat di satu tempat. Tata kelola adalah himpunan struktur, kebijakan, dan praktik yang membuat pemakaian itu diketahui, dapat dipertanggungjawabkan, dan cukup aman. Metrik risiko memberi tahu Anda apakah tata kelola berfungsi.

ITIL punya balok bangunannya: tata kelola sistem nilai layanan, manajemen risiko, pemberdayaan perubahan, manajemen keamanan informasi, manajemen pemasok, dan perbaikan berkelanjutan. Cara kerja agile dan DevOps menyumbang kebiasaan perubahan kecil, terkendali, dan dapat dibalik, serta pemeriksaan otomatis di pipeline. Tata kelola AI tidak butuh semesta terpisah. Ia butuh praktik-praktik ini diterapkan pada hal-hal yang berperilaku berbeda dari perangkat lunak konvensional.

Apa yang berbeda tentang AI?

- **Perilaku bersifat statistik dan dapat berubah tanpa perubahan kode.** Model mungkin berperilaku berbeda setelah pembaruan vendor, perubahan masukannya, atau perubahan prompt. Data yang dilihatnya di produksi dapat bergeser dari data tempat ia diuji, fenomena yang dikenal dalam pembelajaran mesin sebagai drift. Sistem dapat menurun secara diam-diam.
- **Keluaran tidak sepenuhnya terprediksi.** Pengujian tak dapat mencakup setiap masukan, jadi evaluasi dilakukan dengan pengambilan sampel dan pengujian terarah, bukan pembuktian. Sistem dapat gagal dengan cara yang tak diperkirakan pembangunnya.
- **Kerugian dapat tersebar dan tak setara.** [Bias algoritmik](https://en.wikipedia.org/wiki/Algorithmic_bias) adalah galat sistematis yang menuntun pada hasil tidak adil bagi sebagian kelompok. Ia dapat muncul dari data, desain, atau pemakaian, dan mungkin tak tampak dalam angka akurasi keseluruhan.
- **Permukaan serangan baru muncul.** [Injeksi prompt](https://en.wikipedia.org/wiki/Prompt_injection) adalah serangan tempat instruksi yang tersembunyi dalam data masukan memanipulasi model bahasa menuju perilaku yang tak dimaksudkan. Model dapat dibujuk membocorkan data atau mengambil tindakan yang tak dimaksudkan pemiliknya.
- **Ketergantungan pada pemasok dalam.** Banyak kemampuan AI datang dari penyedia eksternal, dengan visibilitas terbatas pada cara dibangun atau diubah. Ukuran pemasok makin penting (lihat topik 8.4, Metrik pemasok dan kontrak).
- **Aturan sedang muncul dan berbeda menurut tempat.** Hukum, standar, dan panduan tentang AI berkembang cepat. [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) Uni Eropa memakai pendekatan berbasis risiko dengan kewajiban yang berlaku bertahap, dan yurisdiksi lain mengambil jalur berbeda. Standar seperti ISO/IEC 42001 tentang sistem manajemen AI dan NIST AI Risk Management Framework menawarkan struktur. Pernyataan tentang aturan tertentu dalam topik ini bertanggal per Oktober 2026 dan sebaiknya diperiksa kembali, dan nasihat hukum sebaiknya memandu kewajiban Anda. Bidang yang lebih luas digambarkan dengan berbagai nama sebagai [AI yang bertanggung jawab](https://en.wikipedia.org/wiki/Responsible_AI) atau AI tepercaya, dan pertanyaan bagaimana hukum sebaiknya memperlakukan AI adalah pokok [regulasi kecerdasan buatan](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

Tata kelola dapat gagal dengan dua cara berlawanan. Ia dapat begitu berat sehingga tim menghindarinya, dan pemakaian AI masuk ke bawah tanah sebagai [shadow IT](https://en.wikipedia.org/wiki/Shadow_IT). Atau ia dapat menjadi latihan di atas kertas, dengan kebijakan dan register yang tak mencerminkan praktik. Tujuan agile menyarankan jalan tengah: keterlibatan pemangku kepentingan berkelanjutan dalam menetapkan aturan, persetujuan kecil dan cepat untuk pemakaian berisiko rendah, pengamatan lebih dalam di mana kerugian mungkin, dan perbaikan berkelanjutan atas kendali seiring pengalaman tumbuh. Orang yang termotivasi dengan batas jelas, dipercaya memakai pertimbangan di dalamnya, akan melaporkan masalah. Orang yang takut dihukum tidak.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku pada ukuran tata kelola: ketika “persentase pemakaian AI yang terdaftar” menjadi target, register terisi entri yang tak dibaca siapa pun, dan pemakaian sebenarnya tetap tak terlihat (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Topik ini membangun di atas topik tentang risiko, kepatuhan, dan keamanan di Bagian 8, dan topik-topik awal dalam bagian ini.

## Prinsip utama

- **Ketahui di mana AI dipakai.** Register pemakaian, termasuk yang tertanam dalam produk dan yang diadopsi staf sendiri, adalah fondasinya.
- **Cocokkan pengamatan dengan risiko.** Ringan untuk pemakaian berisiko rendah, lebih dalam untuk yang berkonsekuensi.
- **Perlakukan perubahan model dan prompt sebagai perubahan.** Mereka butuh pengujian, persetujuan proporsional dengan risiko, dan kemampuan membalik.
- **Evaluasi sebelum dan selama pemakaian.** Uji pada kasus realistis, dan teruskan menguji di produksi.
- **Jaga pengawasan manusia yang bermakna.** Seseorang harus mampu memahami, mempertanyakan, dan menimpa, dan punya waktu serta wewenang untuk melakukannya.
- **Belajar dari insiden tanpa menyalahkan.** Kegagalan AI baru, dan pelaporan adalah cara organisasi belajar.
- **Buat persetujuan cepat untuk kasus aman.** Tata kelola lambat mendorong pemakaian keluar dari pandangan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan register pemakaian AI | Porsi pemakaian AI yang ditemukan lewat cara independen yang ada di register dengan pemilik dan kelas risiko | pemakaian di register dengan pemilik dan kelas risiko / pemakaian yang ditemukan lewat penemuan independen (pengadaan, pengeluaran, identitas, jaringan, dan laporan staf) | persen | Register, data pengadaan dan pengeluaran, log identitas, survei | Tata kelola; manajemen aset TI; manajemen risiko | Pekerjaan terlihat dan kepemilikan jelas | Kuartalan |
| Kemutakhiran penilaian risiko | Porsi pemakaian berisiko menengah dan tinggi dengan penilaian risiko dalam siklus yang diwajibkan | pemakaian yang dinilai dalam siklus / pemakaian berisiko menengah dan tinggi | persen | Penilaian risiko | Manajemen risiko; manajemen keamanan informasi | Renungan teratur tentang risiko | Kuartalan |
| Cakupan kendali perubahan | Porsi perubahan pada model, prompt, perkakas, dan sumber data di produksi yang melewati kendali perubahan dengan pengujian yang diwajibkan | perubahan dengan catatan perubahan, pengujian, dan persetujuan proporsional dengan risiko / perubahan yang terdeteksi | persen | Catatan perubahan dibandingkan dengan riwayat versi dan catatan rilis vendor | Pemberdayaan perubahan; manajemen rilis dan deployment | Perubahan kecil, terkendali, dapat dibalik | Bulanan |
| Kemutakhiran evaluasi | Porsi pemakaian produksi dengan evaluasi terkini (akurasi, keselamatan, dan keadilan bila relevan) dan hasil dalam toleransi | pemakaian dengan evaluasi dalam siklus dan hasil dapat diterima / pemakaian produksi dalam lingkup | persen | Catatan evaluasi | Penjaminan mutu; manajemen risiko | Definisi selesai untuk perilaku | Kuartalan |
| Tingkat bukti pengawasan manusia | Porsi keluaran atau keputusan konsekuensial bersampel dengan tinjauan manusia substantif yang tercatat | butir bersampel dengan tinjauan terdokumentasi yang bisa mengubah hasil / butir yang disampel | persen | Catatan keputusan bersampel | Manajemen risiko; tata kelola | Tinjauan sebelum rilis | Bulanan |
| Tingkat insiden AI dan waktu menahan | Insiden yang melibatkan AI (keluaran merugikan, paparan data, tindakan tak aman) per pemakaian dan waktu menahannya | insiden per pemakaian produksi per kuartal; median dan persentil ke-85 jam dari deteksi sampai penahanan | insiden; jam | Catatan insiden bertag AI | Manajemen insiden; manajemen keamanan informasi | Respons dan pembelajaran tanpa menyalahkan | Kuartalan |
| Kemutakhiran uji tuntas AI pemasok | Porsi pemasok yang menyediakan fitur AI dalam layanan kritis yang penilaian khusus AI-nya terkini | pemasok dengan penilaian AI terkini / pemasok kritis dengan fitur AI | persen | Penilaian pemasok | Manajemen pemasok; manajemen risiko | Tinjauan dependensi secara teratur | Kuartalan |

Definisikan “pemakaian AI” secara luas dalam register: model yang Anda bangun, layanan yang Anda beli, fitur di dalam produk, dan perkakas yang dipakai staf. Kelas risiko dan siklus ditetapkan dalam kebijakan. Cakupan register diukur terhadap penemuan independen, bukan terhadap register itu sendiri. Cakupan kendali perubahan membutuhkan cara mendeteksi perubahan: kendali versi, pemberitahuan vendor, pemantauan konfigurasi. Bukti pengawasan manusia membutuhkan bahwa tinjauan itu bisa mengubah hasil, bukan bahwa tombol diklik. Tingkat insiden menggambarkan pemakaian dan sistem dan tidak dipakai untuk menilai orang.

## Rekomendasi

### Kenali dan klasifikasikan

**1. Bangun register dengan menemukan selain bertanya.** Mulailah dengan survei dan kebijakan, lalu periksa terhadap catatan pengadaan dan pengeluaran, log identitas dan akses, data jaringan dan tagihan cloud, dan pembaruan produk vendor. Sertakan fitur AI yang tertanam dalam perkakas yang sudah Anda miliki. Harapkan kejutan: orang memakai perkakas yang tak Anda setujui, sering karena alasan baik. Perlakukan itu sebagai informasi (lihat topik 7.2, Metrik aset perangkat lunak dan lisensi).

**2. Tetapkan pemilik dan kelas risiko untuk tiap pemakaian.** Pemilik adalah orang yang bertanggung jawab atas pemakaian dan hasilnya. Kelas risiko mencerminkan kerugian jika sistem gagal: siapa yang terdampak, apakah keputusan tentang orang terlibat, apakah ia bertindak sendiri, data apa yang disentuhnya, dan seberapa dapat dibalik efeknya. Pakai sedikit kelas dengan aturan jelas. Ambil dari kerangka yang diakui, seperti NIST AI Risk Management Framework, ISO/IEC 42001, dan hukum yang berlaku, dan sesuaikan dengan konteks Anda.

**3. Jadikan persetujuan proporsional.** Untuk pemakaian berisiko rendah, pendaftaran swalayan cepat dengan beberapa pertanyaan sudah cukup. Untuk pemakaian berkonsekuensi, wajibkan penilaian risiko, hasil evaluasi, rancangan pengawasan manusia yang didefinisikan, dan persetujuan. Jalur cepat bagi mayoritas aman menjaga orang di dalam sistem, dan jalur lebih lambat bagi segelintir berbahaya memberi mereka pengamatan semestinya.

### Uji dan kendalikan perubahan

**4. Evaluasi pada kasus realistis, sebelum dan selama pemakaian.** Bangun himpunan kasus uji yang mencerminkan masukan nyata, termasuk yang sulit dan adversarial, dan beri skor keluaran terhadap kriteria tertulis. Sertakan pemeriksaan keselamatan dan keadilan di mana orang dapat terdampak. Jalankan ulang evaluasi sesuai jadwal dan setiap kali model, prompt, atau data berubah. Red team, kelompok yang sengaja menyerang sistem untuk menemukan kelemahan, adalah praktik berguna untuk pemakaian berisiko lebih tinggi. Lihat praktik pengambilan sampel untuk pekerjaan berbantuan (lihat topik 10.2, Mengukur pekerjaan berbantuan AI).

**5. Taruh model, prompt, dan perkakas di bawah kendali perubahan.** Beri versi pada prompt dan konfigurasi seperti kode. Wajibkan pengujian dan persetujuan proporsional dengan risiko untuk perubahan, catat, dan pertahankan kemampuan membalik. Lacak pembaruan model yang digerakkan vendor, yang dapat mengubah perilaku tanpa pemberitahuan, dan sepakati dengan pemasok bagaimana Anda akan diberi tahu. Perlakukan peningkatan model sebagai perubahan yang butuh kendali (lihat topik 4.3, Metrik pemberdayaan perubahan).

**6. Pantau di produksi.** Awasi drift pada masukan dan keluaran, tingkat galat dan penimpaan yang naik, dan pola tak biasa. Tetapkan ambang yang memicu tinjauan. Untuk sistem yang mengambil tindakan, pantau log tindakan. Pemantauan adalah cara menemukan masalah yang terlewat pengujian.

### Jaga pengawasan manusia tetap nyata

**7. Rancang pengawasan yang dapat berfungsi.** Orang yang meninjau setiap keluaran sistem cepat tak dapat mengikuti, dan orang yang diminta menyetujui apa yang tak dapat dipahaminya tidak memberi pengawasan. Definisikan apa yang dilakukan manusia, informasi apa yang dimilikinya, berapa banyak waktu, dan wewenang apa untuk menimpa. Ambil sampel tinjauan untuk memeriksa bahwa substantif. Waspadai bias otomatisasi, kecenderungan menerima keluaran mesin (lihat topik 10.1, AI dalam pengukuran manajemen layanan).

**8. Simpan jejak audit.** Catat masukan, keluaran, versi, keputusan, dan tindakan dengan cara yang mendukung penyelidikan, tunduk pada aturan privasi dan batas retensi. [Jejak audit](https://en.wikipedia.org/wiki/Audit_trail) memungkinkan Anda menjawab apa yang terjadi dan mengapa. Untuk keputusan konsekuensial tentang orang, pertimbangkan penjelasan apa yang dapat Anda berikan dan jalur banding apa yang ada (lihat topik 8.3, Metrik kepatuhan dan audit).

**9. Lindungi data dan lawan manipulasi.** Kendalikan data apa yang dapat dilihat dan dikirim keluar sistem AI. Uji injeksi prompt dan kebocoran data, terutama untuk sistem yang membaca konten eksternal atau yang punya akses ke perkakas. Terapkan prinsip hak istimewa minimal yang dipakai untuk agen yang bertindak (lihat topik 10.3, Metrik agen AI dan chatbot, dan topik 8.1, Metrik insiden keamanan dan kerentanan). Pertimbangkan privasi saat desain, dan libatkan spesialis perlindungan data.

### Tanggapi dan belajar

**10. Perlakukan insiden AI sebagai insiden.** Definisikan apa yang dihitung: keluaran merugikan atau bias, paparan data, tindakan tak aman, galat signifikan yang sampai ke pengguna. Pakai proses insiden normal Anda dengan tag AI, tinjau tanpa menyalahkan, dan suapkan pelajaran ke evaluasi dan kendali. Permudah pelaporan bagi staf dan pengguna. Waktu menahan sama pentingnya seperti pada insiden apa pun (lihat topik 3.4, Metrik insiden besar).

**11. Kelola AI pemasok.** Tanyakan kepada pemasok fitur AI apa yang mereka pakai, bagaimana diuji dan diubah, bagaimana data ditangani, dan bagaimana insiden dilaporkan. Tambahkan syarat khusus AI ke kontrak di mana penting, termasuk pemberitahuan perubahan model yang material. Nilai ulang pemasok kritis pada siklus (lihat topik 8.4, Metrik pemasok dan kontrak).

**12. Tinjau tata kelola itu sendiri.** Tiap kuartal, periksa apa yang ditunjukkan ukuran: di mana pemakaian tak terdaftar, persetujuan mana yang terlalu lambat, kendali mana yang tak menangkap masalah. Sesuaikan kebijakan dan jalurnya. Libatkan staf dan pengguna dalam tinjauan. Jaga aturan singkat, jelas, dan terkini, dan pensiunkan kendali yang tak sepadan biayanya.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan register pemakaian AI | Mendaftarkan pemakaian remeh untuk menaikkan persentase; penyebut dibatasi pada yang terdaftar | Penemuan independen untuk penyebut; ambil sampel entri register untuk mutu; amnesti untuk pemakaian tak terdaftar |
| Kemutakhiran penilaian risiko | Penilaian ringan yang selalu lulus; menilai pemakaian berisiko rendah | Tinjau kedalaman penilaian; periksa bahwa kelas risiko cocok dengan kriteria |
| Cakupan kendali perubahan | Tidak mendeteksi perubahan vendor; mencatat perubahan setelah kejadian | Deteksi lewat riwayat versi dan pemberitahuan vendor; catatan perubahan bercap waktu sebelum rilis |
| Kemutakhiran evaluasi | Evaluasi pada kasus mudah; memilih toleransi setelah melihat hasil | Himpunan uji ditinjau pihak independen; ambang ditetapkan sebelumnya |
| Tingkat bukti pengawasan manusia | Mengklik setuju tanpa membaca; mendokumentasikan tinjauan yang tak bisa mengubah hasil | Ambil sampel tinjauan untuk substansi; galat tertanam yang diketahui; beban peninjau |
| Tingkat insiden AI dan waktu menahan | Tidak melaporkan insiden; mempersempit definisi | Pelaporan mudah tanpa menyalahkan; bandingkan dengan keluhan pengguna dan temuan audit |
| Kemutakhiran uji tuntas AI pemasok | Kuesioner dijawab pemasaran; penilaian tanpa bukti | Persyaratan bukti untuk pemasok kritis; verifikasi independen |

Pembacaan yang sehat adalah register yang dikonfirmasi penemuan independen, penilaian yang cocok dengan risiko, perubahan yang melewati kendali, evaluasi yang terjaga terkini, pengawasan yang menemukan galat nyata, insiden yang dilaporkan dengan mudah dan ditahan cepat, dan pemasok yang membagikan apa yang mereka ubah.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Persetujuan pusat untuk setiap pemakaian AI | Kendali, konsistensi | Lambat; mendorong pemakaian ke bawah tanah |
| Pendaftaran swalayan dengan tingkat risiko | Cepat bagi mayoritas aman | Butuh kriteria baik dan pemeriksaan sampel |
| Larangan perkakas publik | Mengurangi paparan data | Pemakaian bayangan; manfaat hilang |
| Perkakas yang disetujui dengan panduan | Pemakaian terlihat dan dapat dikelola | Butuh penyediaan dan dukungan |
| Dokumentasi berat | Bukti untuk audit | Beban; mungkin tak mencerminkan praktik |
| Evaluasi otomatis di pipeline | Berkelanjutan, konsisten | Butuh himpunan uji baik; mungkin melewatkan kegagalan baru |
| Tinjauan manusia atas segalanya | Keselamatan | Tak dapat diskalakan; kelelahan |
| Pengambilan sampel berbasis risiko | Praktis | Sebagian kegagalan lolos |

Jawaban prosanya adalah menyediakan perkakas yang disetujui dan jalur cepat untuk pemakaian berisiko rendah, memusatkan pengamatan pada yang berkonsekuensi, mengotomatisasi evaluasi dan pemantauan, dan menjaga pengawasan manusia di tempat ia benar-benar dapat berfungsi.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Di mana kita memakai AI hari ini yang tidak ada di daftar mana pun?**
Tanyakan tim dengan jujur, dan tawarkan amnesti. Lihat perkakas yang dipakai untuk menyusun, meringkas, memprogram, dan menganalisis, termasuk yang di dalam produk. Fasilitator sebaiknya mencatat pemakaian tanpa menghakimi. Sepakati siapa yang akan mendaftarkannya dan mana yang perlu dilihat lebih dekat.

**2. Jika pemakaian AI kita yang paling konsekuensial membuat kesalahan merugikan, bagaimana kita mengetahuinya dan apa yang akan kita lakukan?**
Telusuri deteksi, penahanan, komunikasi, dan pembelajaran. Catat celah dalam pemantauan, kepemilikan, dan wewenang mematikannya. Sepakati satu perbaikan.

**3. Apa yang dapat berubah di bawah kita tanpa ada yang menyetujuinya?**
Daftar model, prompt, sumber data, dan pembaruan vendor. Untuk masing-masing, tanyakan bagaimana kita akan tahu ia berubah dan bagaimana kita akan mengujinya. Sepakati di mana menambah deteksi atau pengujian.

**4. Dapatkah orang yang meninjau keluaran AI dalam proses kita secara realistis menangkap galat serius?**
Lihat volume, informasi, waktu, dan wewenang. Uji dengan galat tertanam. Jika tinjauan tak dapat berfungsi, desain ulang prosesnya sebelum menambah AI.

**5. Aturan kita mana yang akan mudah diikuti rekan yang sibuk, dan mana yang akan mereka siasati?**
Daftar aturan saat ini dan uji terhadap alur kerja nyata. Bahas mengapa aturan dilanggar. Sepakati perubahan yang menjadikan jalur aman sebagai jalur mudah.

**6. Apa yang telah dikatakan pemasok kita tentang AI mereka, dan apa yang belum kita tanyakan?**
Periksa kuesioner dan kontrak terbaru. Identifikasi pemasok kritis dengan fitur AI dan celah informasinya. Sepakati pertanyaan untuk tinjauan berikutnya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman membangun dan mengadopsi fitur AI, dan merasakan tata kelola sebagai gesekan atau bantuan. Mereka sebaiknya mendaftarkan pemakaian sejak dini, menguji pada kasus realistis, menaruh prompt dan model di bawah kendali versi, dan merancang pengawasan yang berfungsi. Mereka diuntungkan oleh persetujuan cepat untuk pemakaian berisiko rendah.

### Tim layanan dan operasi

Tim operasi menjalankan AI di produksi dan menanggapi insidennya. Mereka sebaiknya memantau drift, menyimpan log tindakan, menandai insiden AI, dan punya wewenang serta sarana mematikan sistem. Mereka juga memakai AI sendiri dan sebaiknya mengikuti aturan yang sama.

### Kepemimpinan dan tata kelola

Pemimpin menetapkan selera risiko dan bertanggung jawab atas hasil. Mereka sebaiknya mendanai register, evaluasi, dan pemantauan, menerima bahwa sebagian pemakaian AI tidak akan lulus, meminta penemuan independen atas pemakaian, dan melacak insiden dan waktu menahan. Badan tata kelola sebaiknya menjaga aturan singkat, meninjaunya secara teratur, dan memastikan staf dan pengguna punya suara.

### Pelanggan dan pengguna

Pengguna terpengaruh oleh keputusan dan keluaran AI, sering tanpa mengetahuinya. Mereka berhak tahu ketika AI terlibat dalam hal yang memengaruhi mereka, menjangkau seseorang, dan menantang keputusan. Keluhan dan banding adalah bukti penting tentang bagaimana tata kelola berfungsi dalam praktik.

## Dalam praktik: contoh ITIL agile

Divisi teknologi dan operasi sebuah bank regional mengadopsi kebijakan AI setelah seorang staf menempelkan rincian pelanggan ke perkakas publik. Tim kepatuhan menerbitkan register dan mengharapkan setiap pemakaian didaftar. Angka di bawah bersifat ilustratif.

Tiga bulan kemudian register mendaftar 38 pemakaian AI. Kepala risiko teknologi memeriksa lewat cara independen: data pengadaan dan pengeluaran, log identitas yang menunjukkan masuk ke layanan AI, data jaringan, dan survei staf anonim. Penemuan mendapati 94 pemakaian, jadi cakupan register 40 persen. Tujuh belas adalah fitur di dalam perkakas yang sudah dilisensikan bank, dan dua belas adalah perkakas publik yang dipakai staf. Dari 38 pemakaian terdaftar, hanya 14 yang punya kelas risiko, dan tiga yang berisiko tertinggi, model yang menilai peringatan penipuan, chatbot untuk pelanggan, dan perkakas yang meringkas keluhan, tak punya evaluasi dalam setahun terakhir. Perubahan pada konfigurasi model penipuan dan prompt chatbot dibuat tim langsung, dan catatan perubahan kuartal terakhir mencakup 21 persen perubahan yang ditemukan dalam riwayat versi. Sampel 60 peringatan penipuan yang ditolak model menunjukkan tinjauan manusia tercatat untuk 52 di antaranya, tetapi himpunan tertanam lima kelolosan yang diketahui hanya tertangkap satu peninjau, karena masing-masing peninjau menangani beberapa ratus peringatan sehari. Satu insiden, ketika chatbot memberi pelanggan jumlah biaya yang usang, ditemukan lewat keluhan, dan butuh enam hari untuk ditahan karena tak ada yang berwenang mematikannya.

Kepala risiko teknologi mendesain ulang tata kelola bersama tim. Pendaftaran swalayan singkat dengan lima pertanyaan menaruh pemakaian berisiko rendah dalam register dalam hitungan menit, dan masa amnesti mendorong staf mendaftar perkakas yang mereka pakai. Kelas risiko didasarkan pada kerugian, data, dan otonomi. Pemakaian berisiko lebih tinggi butuh penilaian, evaluasi terhadap kasus realistis dan adversarial, dan rancangan pengawasan yang didefinisikan. Model, prompt, dan perkakas masuk kendali perubahan dengan pengujian proporsional dengan risiko, dan prompt chatbot diberi versi dengan kemampuan rollback. Proses peringatan penipuan didesain ulang agar peninjau menangani peringatan yang lebih sedikit dan lebih baik diprioritaskan, dan galat tertanam menguji deteksi mereka. Pemilik bernama untuk tiap pemakaian berisiko tinggi punya wewenang mematikannya, dan respons insiden mencakup AI. Pemasok cloud dan AI bank ditanya fitur AI apa yang mereka pakai dan bagaimana perubahan diberitahukan.

Dua kuartal kemudian, cakupan register menurut penemuan independen adalah 88 persen, semua pemakaian berisiko tinggi dinilai dan dievaluasi dalam siklus, cakupan kendali perubahan 84 persen, deteksi galat tertanam oleh peninjau naik menjadi 4 dari 5, dan median waktu menahan insiden AI 3 jam. Staf memakai perkakas yang disetujui untuk sebagian besar tugas. Seorang eksekutif senior meminta sasaran cakupan register 100 persen. Kepala risiko teknologi mengusulkan melacak cakupan terhadap penemuan independen, kemutakhiran penilaian, dan penanganan insiden, dan menjelaskan bahwa register tanpa penemuan dapat mencapai 100 persen dan tetap melewatkan risikonya. Keputusan dicatat.

## Sudut pandang sektor

**Startup.** Kecepatan penting dan risikonya kebanyakan paparan data dan keluaran tak andal. Simpan daftar pendek perkakas dan pemakaian dengan pemilik, tetapkan beberapa aturan jelas tentang data apa yang boleh dipakai di mana, dan beri versi pada prompt. Tinjau kembali seiring tuntutan pelanggan akan jaminan tumbuh.

**Bisnis kecil.** Staf akan memakai perkakas publik. Sediakan opsi yang disetujui, tulis aturan satu halaman tentang data, dan tinjau cara perkakas dipakai. Tanyakan pemasok tentang fitur AI mereka, dan simpan catatan di mana AI membuat keputusan tentang pelanggan atau staf.

**Perusahaan besar.** Skala butuh model operasi: register, tingkat risiko, standar evaluasi, kendali perubahan, dan proses insiden, terintegrasi dengan fungsi risiko dan keamanan yang ada. Pakai penemuan independen, otomatisasi evaluasi di pipeline, dan selaraskan dengan standar. Beri tim jalur cepat.

**Pemerintah dan sektor publik.** Keputusan yang memengaruhi warga membawa kewajiban transparansi, keadilan, dan banding, dan kerangka pengadaan serta hukum membentuk apa yang diizinkan. Pelihara catatan publik pemakaian berdampak tinggi di mana diwajibkan, nilai dampak pada hak, jaga manusia secara bermakna dalam lingkaran, dan periksa hukum serta panduan terkini (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya mencakup upaya membangun dan merawat register, perkakas atau analisis penemuan, penilaian risiko, himpunan dan putaran evaluasi, kendali perubahan untuk prompt dan model, pemantauan, pelatihan, dan kapasitas respons insiden. Tata kelola juga menambah sebagian penundaan untuk pemakaian berisiko lebih tinggi. Biaya ini berskala dengan jumlah dan risiko pemakaian, yang menjadi alasan menjaga persetujuan berisiko rendah tetap ringan.

Imbal hasilnya mencakup kerugian dan paparan yang dihindari, lebih sedikit kejutan dalam audit dan tinjauan regulasi, adopsi aman yang lebih cepat lewat aturan jelas, dan kepercayaan dari pelanggan dan staf. Bangun kasus dari data Anda sendiri: jumlah pemakaian yang ditemukan di luar register dan data yang mereka sentuh, insiden dan biayanya, waktu yang dihabiskan dalam persetujuan ad hoc sebelum dan sesudah, dan temuan dalam audit. Hindari mengutip statistik terbitan tentang insiden AI atau denda tanpa sumber yang dapat ditelusuri dan relevansinya dengan konteks Anda. Sertakan biaya tidak mengatur, yang mencakup kemungkinan kerugian hukum dan reputasi yang signifikan (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Register yang tak diperiksa siapa pun.** Cakupan tampak tinggi dan melewatkan pemakaian nyata. Pakai penemuan independen.
- **Larangan menyeluruh.** Mendorong pemakaian ke bawah tanah. Sediakan perkakas yang disetujui dan jalur cepat.
- **Memperlakukan prompt dan model sebagai konfigurasi yang tak dimiliki siapa pun.** Perilaku berubah tanpa terlihat. Taruh di bawah kendali perubahan.
- **Mengevaluasi sekali.** Sistem hanyut dan berubah. Jalankan ulang sesuai jadwal dan saat berubah.
- **Pengawasan hanya nama.** Peninjau tak dapat menangkap apa yang tak mereka lihat. Uji dengan galat tertanam dan perbaiki bebannya.
- **Tanpa wewenang mematikan.** Penahanan memakan berhari-hari. Namai pemilik dengan kuasa menghentikan sistem.
- **Mengabaikan AI pemasok.** Risiko Anda mencakup risiko mereka. Tanya, kontrakkan, dan nilai ulang.
- **Aturan yang tak bisa diikuti siapa pun.** Disiasati. Jaga singkat dan permudah jalur aman.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Mengenali dan mengklasifikasi | Tanpa pandangan atas pemakaian AI | Kebijakan dan daftar parsial | Register dengan pemilik dan kelas risiko; penemuan independen dipakai untuk cakupan | Cakupan, kemutakhiran penilaian, dan waktu persetujuan dikelola | Pandangan register bersama lintas unit bisnis dan pemasok; kelas ditinjau bersama regulator dan pengguna |
| Pengujian dan perubahan | Ad hoc | Sebagian evaluasi untuk sebagian pemakaian | Evaluasi pada kasus realistis; prompt dan model di bawah kendali perubahan | Evaluasi berkelanjutan dan pemantauan drift; cakupan dikelola | Evaluasi dan perubahan berbasis risiko otomatis di pipeline, diaudit secara independen |
| Pengawasan dan pembelajaran | Mengandalkan kepercayaan | Tinjauan ada pada prinsipnya | Pengawasan dirancang dan disampel; insiden AI ditandai dan ditinjau tanpa menyalahkan | Pengujian galat tertanam, waktu menahan, dan penilaian pemasok dikelola | Pengawasan, pembelajaran insiden, dan kebijakan dikembangkan bersama staf, pengguna, dan mitra |

## Daftar periksa

- [ ] Register mendaftar pemakaian AI dengan pemilik dan kelas risiko, diperiksa terhadap penemuan independen.
- [ ] Jalur cepat ada untuk pemakaian berisiko rendah, dan jalur lebih dalam untuk yang berkonsekuensi.
- [ ] Pemakaian berisiko lebih tinggi punya penilaian risiko terkini dan rancangan pengawasan yang didefinisikan.
- [ ] Evaluasi pada kasus realistis dan adversarial terkini dan dijalankan ulang saat berubah.
- [ ] Prompt, model, perkakas, dan sumber data diberi versi dan di bawah kendali perubahan.
- [ ] Pemantauan produksi mengawasi drift, galat, penimpaan, dan tindakan tak biasa.
- [ ] Pengawasan diuji dengan galat tertanam, dan beban peninjau realistis.
- [ ] Jejak audit mendukung penyelidikan dalam aturan privasi dan retensi.
- [ ] Insiden AI ditandai, ditinjau tanpa menyalahkan, dan pemilik dapat mematikan sistem.
- [ ] Pemasok dengan fitur AI dinilai dan terikat memberi tahu perubahan material.

## Prompt AI

**Susun klasifikasi risiko untuk pemakaian AI.**

```text
Usulkan klasifikasi risiko sederhana (tiga atau empat tingkat) untuk pemakaian AI
di [type of organization] berdasarkan kerugian jika salah, siapa yang terdampak,
keterlibatan keputusan tentang orang, otonomi tindakan, sensitivitas data, dan
keterbalikan. Untuk tiap tingkat, nyatakan contoh pemakaian, persetujuan dan
bukti yang diwajibkan, dan siklus tinjauan. Jangan menyatakan kesimpulan hukum.
Daftar asumsi Anda dan butir untuk dikonfirmasi bersama spesialis hukum, risiko,
dan keamanan.
```

**Rancang formulir pendaftaran.**

```text
Rancang formulir pendaftaran swalayan singkat untuk pemakaian AI baru, dengan
tidak lebih dari delapan pertanyaan, yang menetapkan kelas risiko awal secara
otomatis dan mengarahkan pemakaian berisiko lebih tinggi ke tinjauan. Cakup
tujuan, data, pengguna yang terdampak, otonomi, vendor, dan pemilik. Jelaskan
cara menjaganya cepat untuk kasus berisiko rendah. Daftar asumsi Anda dan risiko
salah klasifikasi.
```

**Rencanakan himpunan evaluasi.**

```text
Kami memakai AI untuk [task] dalam [process]. Bantu merancang himpunan evaluasi:
jenis kasus realistis, kasus sulit dan adversarial, kriteria tertulis untuk
keluaran yang benar dan aman, pemeriksaan keadilan di mana orang terdampak,
seberapa besar himpunan yang praktis, seberapa sering dijalankan ulang, dan
perubahan apa yang memicu pengulangan. Jangan mengklaim himpunan itu cukup.
Daftar asumsi Anda dan batasnya.
```

**Tinjau insiden AI.**

```text
Berikut uraian insiden terkait AI: [paste, without personal data]. Susun tinjauan
tanpa menyalahkan: lini masa, bagaimana terdeteksi, faktor yang berkontribusi
(data, prompt, model, pengawasan, pemasok, proses), dampak, apa yang menahannya,
dan tindakan dengan pemilik. Sarankan perubahan pada evaluasi, pemantauan, dan
kendali perubahan. Jangan menimpakan kesalahan pada individu. Daftar asumsi Anda
dan pertanyaan terbuka.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik tata kelola atau risiko AI.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik tata kelola AI memakai bukti independen dan membawa vektor manipulasi serta pagar pembatasnya.

## Poin penting

- Bangun register AI lewat penemuan independen, dan cocokkan pengamatan dengan risiko dengan jalur cepat untuk pemakaian aman.
- Perlakukan model, prompt, perkakas, dan sumber data sebagai perubahan yang butuh pengujian, persetujuan, dan rollback.
- Evaluasi sebelum pemakaian dan selama pemakaian, pada kasus realistis dan adversarial.
- Rancang pengawasan manusia yang dapat berfungsi, dan uji dengan galat tertanam.
- Perlakukan insiden AI seperti insiden lain, dengan tinjauan tanpa menyalahkan, dan beri pemilik kuasa mematikan sistem.
- Tanyakan pemasok tentang AI mereka, dan jaga aturan tetap singkat dan jalur aman tetap mudah.

## Referensi dan bacaan lanjutan

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
