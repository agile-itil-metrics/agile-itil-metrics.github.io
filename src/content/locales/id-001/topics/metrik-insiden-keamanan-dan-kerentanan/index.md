# Metrik insiden keamanan dan kerentanan

**Keamanan adalah bagian dari menyampaikan dan menjalankan layanan secara berkelanjutan, jadi ukur berapa lama orang tetap terpapar, secepat apa Anda menahan apa yang salah, dan seberapa bersedia rekan mengangkat tangan, dan jangan pernah mengubah kesalahan menjadi alasan untuk menyalahkan.**

## Gambaran umum dan motivasi

Setiap layanan membawa kelemahan, dan sebagian akan dipakai untuk menyerangnya. [Kerentanan](https://en.wikipedia.org/wiki/Vulnerability_(computing)) adalah kelemahan pada perangkat lunak, perangkat keras, konfigurasi, atau proses yang dapat dieksploitasi untuk merugikan kerahasiaan, integritas, atau ketersediaan suatu sistem. Insiden keamanan adalah peristiwa tempat kerugian itu terjadi atau diancamkan secara kredibel. Metrik di wilayah ini mencoba menjawab dua pertanyaan. Seberapa terpapar kita, dan seberapa cepat kita menemukan, memperbaiki, dan pulih dari masalah?

Tradisi agile dan DevOps memperlakukan keamanan sebagai properti pengiriman berkelanjutan, bukan gerbang di ujungnya. [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) memperluas gagasan DevOps dengan membangun pemeriksaan keamanan ke dalam pipeline dan berbagi tanggung jawab antara pengembangan, keamanan, dan operasi. ITIL, lewat praktik manajemen keamanan informasinya, menyumbang kebijakan, pemikiran berbasis risiko, dan hubungan dengan manajemen insiden, perubahan, dan aset. Keduanya bertemu dalam pekerjaan harian: pembaruan dependensi tiba sebagai perubahan biasa, temuan kerentanan menjadi item backlog dengan pemilik, dan insiden ditangani dengan tinjauan tanpa menyalahkan yang sama seperti lainnya (lihat topik 4.2, Metrik postmortem dan pembelajaran).

Metrik keamanan terpapar distorsi tertentu.

- **Menghitung temuan menghargai tidak melihat.** Tim yang memindai lebih sedikit menemukan lebih sedikit. Hitungan mentah kerentanan dapat turun karena pemindai kehilangan akses, bukan karena ada yang membaik.
- **Skor keparahan adalah masukan, bukan kebenaran.** [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) memberi skor keparahan bagi kerentanan secara abstrak, dan registri seperti [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) memberinya pengenal. Apakah kerentanan penting bagi Anda bergantung pada apakah ia dapat dijangkau di lingkungan Anda, apakah eksploit sedang dipakai, dan seberapa berharga aset yang terdampak. Skor keparahan mentah yang dipakai sendirian mengirim upaya ke tempat yang salah.
- **Menyalahkan menekan laporan.** Jika orang dihukum karena mengeklik tautan atau melaporkan insiden yang mereka sebabkan, laporan berhenti, dan paparan tumbuh tanpa terlihat. Rasa aman psikologis adalah kendali keamanan.
- **Ukuran waktu menyembunyikan ekor.** Median waktu menambal dapat tampak sehat sementara segelintir sistem kritis terpapar berbulan-bulan.

Topik ini memberi ukuran utama, dengan definisi, vektor manipulasi, dan pagar pembatasnya. Ia membangun di atas catatan aset dan konfigurasi dari bagian sebelumnya, karena Anda tak dapat menambal atau memindai apa yang tak dapat Anda temukan (lihat topik 7.1, Metrik manajemen aset TI, dan topik 7.4, Metrik kualitas konfigurasi dan CMDB). Satu peringatan: ini panduan pengukuran, bukan manual keamanan. Pilih kendali bersama profesional keamanan yang berkualifikasi, dan ikuti standar dan kewajiban hukum yang berlaku bagi Anda, seperti ISO/IEC 27001 dan panduan badan nasional.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku tajam pada keamanan. Ketika metrik menjadi target, orang mengklasifikasi ulang temuan, mengecualikan aset dari pemindaian, dan menutup tiket tanpa memperbaiki sebabnya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Ukur waktu paparan selain hitungan.** Berapa lama kelemahan tetap terbuka lebih penting daripada berapa banyak yang ditemukan.
- **Prioritaskan menurut konteks.** Gabungkan keparahan, kemampuan dieksploitasi, keterjangkauan, dan nilai aset.
- **Periksa cakupan lebih dulu.** Laporan bersih dari pemindaian yang melewatkan separuh aset adalah kenyamanan palsu.
- **Bangun keamanan ke dalam pipeline.** Jadikan pilihan aman sebagai bawaan yang mudah, dan beri umpan balik cepat.
- **Berkolaborasi lintas disiplin.** Keamanan, pengembangan, dan operasi memiliki hasil bersama.
- **Buat pelaporan aman.** Penanganan kesalahan tanpa menyalahkan menjaga sinyal tetap mengalir.
- **Agregasikan data perilaku manusia.** Laporkan pola kelompok dan jangan pernah menamai atau memeringkat individu.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Jendela paparan | Waktu kerentanan yang diketahui tetap terbuka pada aset dalam lingkup, menurut pita prioritas | median dan persentil ke-85 hari dari tanggal kerentanan diketahui berlaku pada aset sampai tanggal perbaikan atau mitigasi yang diterima diverifikasi | hari | Pemindai kerentanan, sistem tiket, catatan perubahan | Manajemen keamanan informasi; manajemen masalah | Waktu memperbaiki cacat di backlog | Mingguan |
| Kepatuhan penambalan | Porsi aset dalam lingkup yang memenuhi jendela kebijakan penambalan untuk kelasnya | aset ditambal dalam jendela kebijakan / aset dalam lingkup yang membutuhkan tambalan pada periode itu | persen | Alat manajemen endpoint dan server, register aset | Manajemen keamanan informasi; manajemen rilis dan deployment | Dependensi dijaga terkini di pipeline | Mingguan |
| Temuan kritis yang terlambat | Hitungan dan usia temuan berprioritas kritis yang melewati tenggat kebijakan | jumlah temuan kritis melewati tenggat; usia yang tertua | hitungan; hari | Sistem manajemen kerentanan | Manajemen keamanan informasi; manajemen risiko | Cacat keamanan melebihi batas yang disepakati | Mingguan |
| Cakupan pemindaian | Porsi aset dalam lingkup yang dinilai dalam interval yang diwajibkan | aset yang berhasil dipindai pada interval terakhir / aset dalam lingkup | persen | Laporan pemindai digabung dengan register aset | Manajemen keamanan informasi; manajemen aset TI | Pemeriksaan pipeline dijalankan pada setiap build | Mingguan |
| Waktu menahan | Waktu dari deteksi insiden keamanan terkonfirmasi sampai penahanan | median dan persentil ke-85 jam dari deteksi sampai penahanan | jam | Catatan insiden | Manajemen insiden; manajemen keamanan informasi | Waktu memulihkan layanan setelah kegagalan | Per insiden, ditinjau bulanan |
| Usia pengecualian risiko | Usia pengecualian risiko yang diterima, dan porsi yang melewati tanggal tinjauan | hari sejak persetujuan; pengecualian melewati tanggal tinjauan / pengecualian terbuka | hari; persen | Register pengecualian | Manajemen risiko; manajemen keamanan informasi | Tinjauan utang teknis | Bulanan |
| Tingkat laporan keamanan | Porsi peristiwa mencurigakan yang dilaporkan staf relatif terhadap peristiwa keamanan terkonfirmasi, sebagai indikator budaya pelaporan | laporan dari staf pada periode itu / peristiwa mencurigakan terkonfirmasi pada periode itu, dengan tren tingkat kelompok | rasio | Kotak surat keamanan, catatan insiden | Manajemen keamanan informasi; manajemen insiden | Mengangkat hambatan secara terbuka | Bulanan |

Nyatakan pita prioritas dan jendela kebijakan di register. Jendela paparan dimulai ketika kerentanan diketahui berlaku pada aset, yaitu yang lebih akhir antara pengungkapan dan saat aset diketahui menjalankan komponen terdampak, dan berhenti pada remediasi terverifikasi atau mitigasi terdokumentasi yang terbatas waktu. Waktu menahan dimulai pada deteksi, bukan pada peringatan pertama yang tak dibaca siapa pun. Kecualikan temuan uji dan positif palsu hanya setelah ditinjau. Tingkat laporan keamanan menggambarkan kelompok dan tren, tidak pernah individu.

## Rekomendasi

### Kenali aset Anda dan paparan Anda

**1. Mulai dari catatan aset dan dependensi.** Pemindaian, penambalan, dan kepemilikan semuanya bergantung pada mengetahui apa yang ada. Kaitkan setiap temuan dengan aset, pemilik, dan layanan, dan ukur cakupan pemindaian terhadap register. Di mana cakupan rendah, perbaiki itu sebelum membaca temuan. Aset yang tak dipindai adalah hal yang tak diketahui, yang lebih buruk daripada kelemahan yang diketahui.

**2. Kurangi [permukaan serangan](https://en.wikipedia.org/wiki/Attack_surface) lebih dulu.** Singkirkan apa yang tak dibutuhkan: layanan tak terpakai, port terbuka, akun lama, lingkungan terlupakan. Segala yang Anda pensiunkan adalah sesuatu yang tak perlu Anda tambal. Lacak hitungan layanan yang menghadap internet dan akun dorman sebagai indikator sederhana, dan tinjau bersama pemilik.

**3. Sertakan rantai pasok perangkat lunak Anda.** Layanan modern bergantung pada banyak komponen. [Rantai pasok perangkat lunak](https://en.wikipedia.org/wiki/Software_supply_chain) mencakup pustaka, perkakas build, citra kontainer, dan pemasok di baliknya. Pakai software bill of materials yang diuraikan sebelumnya untuk menemukan di mana komponen rentan dipakai (lihat topik 7.2, Metrik aset perangkat lunak dan lisensi), dan sertakan temuan dependensi dalam ukuran yang sama dengan temuan infrastruktur.

### Prioritaskan dan perbaiki

**4. Peringkat menurut konteks, bukan skor keparahan saja.** Gabungkan keparahan CVSS dengan apakah eksploit diketahui sedang dipakai, apakah komponen rentan dapat dijangkau, dan pentingnya aset. Daftar publik kerentanan yang diketahui dieksploitasi membantu untuk faktor pertama. Tulis aturan peringkat, tinjau, dan catat alasan ketika item berkeparahan tinggi diturunkan prioritasnya.

**5. Tetapkan jendela kebijakan menurut pita dan laporkan terhadapnya.** Untuk tiap pita prioritas, sepakati waktu target untuk meremediasi atau memitigasi. Laporkan porsi dalam jendela, median dan persentil ke-85 paparan, dan item terbuka tertua. Jendela adalah target untuk percakapan, dan item tertua layak mendapat perhatian karena menunjukkan di mana proses gagal (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**6. Perlakukan penambalan sebagai perubahan biasa yang sering.** Proses tambalan paling aman adalah yang berjalan sering dan membosankan. Pembaruan kecil yang sering lebih mudah diuji dan dibalik daripada yang besar dan jarang, dan pipeline otomatis dapat menerapkannya terus-menerus. Pakai pendekatan pemberdayaan perubahan untuk persetujuan berbasis risiko, dan simpan jalur darurat untuk perbaikan mendesak (lihat topik 4.3, Metrik pemberdayaan perubahan).

**7. Buat pengecualian terlihat dan berumur pendek.** Kadang perbaikan tidak mungkin. Catat pengecualian dengan alasan, kendali kompensasi, pemilik, dan tanggal tinjauan, dan laporkan usia pengecualian. Pengecualian tanpa tanggal tinjauan menjadi permanen, dan pengecualian permanen menjadi register risiko yang sebenarnya.

### Tanggapi dan belajar

**8. Latih respons insiden.** [Manajemen insiden keamanan komputer](https://en.wikipedia.org/wiki/Computer_security_incident_management) mencakup persiapan, deteksi, penahanan, pemberantasan, pemulihan, dan pelajaran. Berlatihlah dengan latihan, catat waktu menahan dari deteksi, dan tinjau setiap insiden signifikan tanpa menyalahkan. Struktur penanganan insiden keamanan mirip dengan penanganan insiden besar (lihat topik 3.4, Metrik insiden besar).

**9. Ukur penahanan, bukan hanya deteksi.** Alat deteksi menghasilkan peringatan, dan nilainya terletak pada apa yang terjadi berikutnya. Lacak berapa lama insiden terkonfirmasi ditahan dan dipulihkan, dan porsi mana yang ditemukan pemantauan Anda sendiri dibanding dilaporkan pihak luar. Porsi insiden yang terdeteksi secara internal yang naik adalah tanda visibilitas membaik.

**10. Belajar dari nyaris celaka.** Surel phishing yang dilaporkan dan diblokir, atau kerentanan yang ditemukan rekan sebelum penyerang, adalah pelajaran gratis. Catat dan tinjau seperti Anda meninjau insiden, dan ucapkan terima kasih kepada orang yang melaporkan. Tingkat laporan keamanan adalah indikator kesehatan budaya itu, dan sebaiknya naik seiring kepercayaan.

### Bangun budaya dan pipeline

**11. Taruh pemeriksaan di tempat pengembang bekerja.** Jalankan analisis dependensi dan statis dalam build, beri umpan balik dalam pull request, dan gagalkan build hanya pada isu yang disepakati tim sebagai penghalang. Umpan balik cepat dan relevan diperbaiki. Banjir temuan bernilai rendah diabaikan. Lacak waktu perbaikan untuk temuan pipeline, dan setel aturan bersama tim (lihat topik 2.7, Metrik pull request dan tinjauan kode).

**12. Latih dan uji tanpa mempermalukan.** Latihan kesadaran, seperti phishing simulasi, dapat membangun keterampilan, dan juga dapat merusak kepercayaan ketika hasilnya dipakai untuk menamai atau mendisiplinkan individu. Laporkan hanya hasil agregat, fokus pada berapa banyak yang melaporkan pesan mencurigakan, dan jelaskan tujuannya. Jika latihan membuat staf merasa dijebak, ubahlah.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Jendela paparan | Menutup temuan tanpa verifikasi; mengubah tanggal mulai; mengklasifikasi ulang keparahan | Langkah verifikasi oleh orang di luar tim perbaikan; aturan tanggal mulai di register; log perubahan keparahan |
| Kepatuhan penambalan | Mengecualikan aset sulit ditambal dari lingkup; menghitung tambalan sebagai diterapkan padahal sistem tidak dimulai ulang | Perubahan lingkup dicatat; verifikasi versi terpasang dari aset, bukan tiket |
| Temuan kritis yang terlambat | Memecah temuan atau menggabungkannya; menurunkan keparahan | Hitung menurut kerentanan unik dan aset; tinjau semua perubahan keparahan |
| Cakupan pemindaian | Memindai himpunan lebih sempit; menghitung pemindaian yang gagal autentikasi | Cakupan terhadap register aset; mutu pemindaian (terautentikasi, lengkap) |
| Waktu menahan | Memulai jam lebih lambat; menyatakan penahanan lebih awal | Jam dimulai pada sinyal deteksi pertama; verifikasi penahanan dengan bukti |
| Usia pengecualian risiko | Memperbarui pengecualian secara otomatis; memecah pengecualian untuk mengurangi usia | Tinjau pembaruan pengecualian dengan alasan; batasi pembaruan tanpa bukti baru |
| Tingkat laporan keamanan | Mendorong laporan bernilai rendah; mengecilkan hati laporan untuk memperbaiki angka lain | Mutu laporan; baca komentarnya; survei apakah orang merasa aman melapor |

Pembacaan yang sehat adalah cakupan pemindaian tinggi, ekor paparan yang pendek dan menyusut, pengecualian jujur dengan tanggal tinjauan, insiden ditahan cepat dan lebih sering ditemukan secara internal, dan staf yang memberi tahu Anda tentang peristiwa mencurigakan tanpa takut.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Prioritisasi hanya dengan skor keparahan | Sederhana, konsisten | Mengabaikan konteks; mengirim upaya ke tempat yang salah |
| Prioritisasi berbasis konteks | Berfokus pada risiko nyata | Butuh data dan pertimbangan |
| Jendela penambalan tetap | Harapan jelas | Dapat memaksa perubahan tergesa yang berisiko |
| Jendela berbasis risiko | Cocok dengan situasi | Lebih sulit diaudit |
| Penambalan otomatis yang sering | Perubahan kecil, paparan lebih sedikit | Butuh pengujian dan rollback yang baik |
| Siklus tambalan besar yang jarang | Akrab | Paparan lebih lama, risiko per perubahan lebih besar |
| Simulasi phishing | Membangun kesadaran | Dapat mengikis kepercayaan jika disalahgunakan |
| Fokus budaya pelaporan | Mengungkap masalah lebih awal | Sulit diukur langsung |

Jawaban prosanya adalah memeringkat menurut konteks, menambal sering dalam langkah kecil dengan rollback yang baik, mencatat pengecualian dengan tenggat, dan berinvestasi pada budaya pelaporan sebagai kendali.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Seberapa banyak aset kita yang benar-benar dilihat pemindaian kita?**
Bandingkan aset yang dipindai dengan register aset. Tanyakan apa yang hilang dan mengapa. Fasilitator sebaiknya mencari kategori yang secara sistematis tak dipindai, seperti kontainer, perangkat jarak jauh, atau sistem pihak ketiga. Sepakati satu celah untuk ditutup kuartal ini.

**2. Apa temuan kritis terbuka tertua kita, dan mengapa masih terbuka?**
Lihat ekornya, bukan rata-ratanya. Telusuri beberapa yang tertua: siapa pemiliknya, apa yang menghalangi, dan apa kendali kompensasinya. Fasilitator sebaiknya bertanya apakah pengecualiannya tercatat. Sepakati siapa yang akan membuka hambatan yang tertua.

**3. Kapan terakhir perbaikan keamanan menyebabkan gangguan, dan apa yang berubah sesudahnya?**
Ingat contoh. Apakah sebabnya perbaikan tergesa atau pengujian yang hilang? Bahas cara membuat penambalan rutin dan aman. Kaitkan jawabannya dengan praktik perubahan dan rilis.

**4. Jika rekan melaporkan surel mencurigakan hari ini, apa yang terjadi pada mereka?**
Gambarkan jalur nyata dari laporan ke respons, termasuk bagaimana pelapor diberi terima kasih. Tanyakan apakah ada yang pernah dipermalukan karena melapor atau mengeklik. Percakapan ini tentang kepercayaan. Sepakati perubahan kecil yang membuat pelaporan lebih mudah atau aman.

**5. Angka keamanan kita mana yang bisa naik sementara kita menjadi kurang aman?**
Daftar ukuran dan pikirkan bagaimana masing-masing dapat diperbaiki dengan mempersempit lingkup atau melabeli ulang. Tetapkan pagar pembatas untuk masing-masing. Latihan ini membangun entri register untuk tinjauan berikutnya.

**6. Secepat apa kita dapat menahan insiden terkonfirmasi, dan bagaimana kita tahu?**
Tinjau dua insiden terakhir dan telusuri dari deteksi ke penahanan. Catat keterlambatan. Tanyakan latihan apa yang telah kita jalankan. Sepakati menjalankan satu sebelum tinjauan berikutnya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman membuat sebagian besar perbaikan dan memperkenalkan banyak kelemahan. Mereka sebaiknya menjaga dependensi tetap terkini sebagai bagian alur normal, memperlakukan temuan keamanan sebagai item backlog dengan pemilik dan tanggal, dan memakai pemeriksaan pipeline yang memberi umpan balik cepat dan relevan. Mereka butuh prioritas jelas dan waktu untuk bertindak, dan sebaiknya dapat mengangkat kekhawatiran dengan bebas.

### Tim layanan dan operasi

Tim operasi menjalankan pemindai, menerapkan tambalan, dan menanggapi insiden. Mereka sebaiknya menjaga tautan aset tetap terkini, melaporkan cakupan dengan jujur, dan menangani pengecualian dengan tenggat. Mereka juga butuh waktu terlindungi untuk melatih respons insiden, dan budaya tanpa menyalahkan ketika kesalahan terjadi.

### Kepemimpinan dan tata kelola

Pemimpin menetapkan selera risiko dan memutuskan apakah keamanan didanai sebagai aktivitas berkelanjutan atau sebagai proyek. Mereka sebaiknya meminta jendela paparan dan item terbuka tertua alih-alih total, melindungi budaya pelaporan, dan menerima bahwa angka akan naik ketika visibilitas membaik. Tata kelola sebaiknya mewajibkan bukti untuk pengecualian dan untuk pembelajaran insiden.

### Pelanggan dan pengguna

Pengguna adalah penerima manfaat sekaligus garis pertahanan. Mereka menginginkan layanan yang melindungi data mereka, dan panduan yang jelas dan adil. Mereka sebaiknya diberi tahu segera ketika insiden memengaruhi mereka, diperlakukan dengan hormat ketika melaporkan masalah, dan diberi langkah keamanan yang tidak membuat pekerjaan mereka lebih sulit dari yang perlu (lihat topik 6.4, Pengalaman pengguna dan karyawan).

## Dalam praktik: contoh ITIL agile

Sebuah koperasi kredit regional menjalankan perbankan daring, aplikasi seluler, dan sistem cabang dengan tim rekayasa kecil dan layanan operasi keamanan yang dialihdayakan. Angka di bawah bersifat ilustratif.

Dewan meminta dasbor keamanan. Draf pertama dari analis keamanan menunjukkan 4.200 kerentanan terbuka dan menurun, dan kepatuhan penambalan 96 persen. Kepala rekayasa bertanya tentang cakupan pemindaian. Dengan menggabungkan keluaran pemindai ke register aset, analis mendapati bahwa 31 persen server dan hampir semua kontainer tidak dipindai dalam 30 hari terakhir, karena pemindai kehilangan kredensial setelah migrasi. Di antara aset yang dipindai, median jendela paparan untuk kerentanan kritis adalah 9 hari, dan persentil ke-85 adalah 41 hari. Temuan kritis tertua berusia 212 hari, pada sistem lama dengan pengecualian yang kedaluwarsa empat bulan sebelumnya. Kepatuhan penambalan 96 persen dihitung hanya pada aset yang dilaporkan alat tambalan.

Tim membuat empat perubahan bersama rekayasa dan operasi. Cakupan pemindaian menjadi baris pertama dasbor, dengan target mencapai cakupan penuh register, dan autentikasi pemindaian diperbaiki dan dipantau. Prioritisasi menambah status eksploitasi dan pentingnya aset pada skor keparahan, sehingga 4.200 temuan menyusut menjadi daftar pendek sekitar 60 yang penting sekarang. Pembaruan dependensi pindah ke pipeline sebagai perubahan kecil yang sering dengan pengujian otomatis. Pengecualian mendapat pemilik, kendali kompensasi, dan tanggal tinjauan, dan yang kedaluwarsa ditinjau komite risiko. Analis keamanan juga mengubah cara hasil phishing simulasi dilaporkan: hanya tingkat laporan kelompok yang ditampilkan, dan analis secara pribadi berterima kasih kepada rekan yang melapor.

Dua bulan kemudian cakupan pemindaian adalah 97 persen, jendela paparan persentil ke-85 untuk item kritis adalah 14 hari, dan temuan kritis tertua adalah pengecualian termitigasi dengan 60 hari menuju tinjauannya. Surel permintaan pembayaran mencurigakan dilaporkan oleh karyawan cabang dalam hitungan menit, dan insiden ditahan dalam kurang dari dua jam. Dewan meminta hitungan kerentanan terbuka dipangkas separuh pada akhir tahun. Kepala rekayasa menyarankan melaporkan jendela paparan dan temuan kritis terlambat sebagai gantinya, menjelaskan bahwa hitungan dapat turun dengan memindai lebih sedikit. Keputusan dicatat, dan dewan setuju meninjau ukuran baru pada rapat berikutnya.

## Sudut pandang sektor

**Startup.** Biasanya tak ada tim keamanan khusus, jadi bangun dasar-dasarnya ke dalam pipeline: pembaruan dependensi, pemindaian rahasia, autentikasi multifaktor, dan hak istimewa minimal. Lacak jendela paparan untuk daftar pendek sistem kritis dan punya rencana insiden sederhana. Tahan membeli perangkat besar sebelum Anda mengenal aset Anda.

**Bisnis kecil.** Layanan alih daya dan perkakas cloud membawa sebagian besar risiko. Simpan inventaris, aktifkan autentikasi multifaktor di mana-mana, jaga sistem diperbarui otomatis, dan tahu siapa yang dihubungi saat insiden. Ukur kepatuhan penambalan dan waktu memulihkan cadangan. Hindari mempermalukan staf yang melaporkan kesalahan.

**Perusahaan besar.** Skala butuh data konsisten di banyak tim dan perkakas. Definisikan pita prioritas dan jendela secara terpusat, biarkan tim memiliki temuan mereka, laporkan paparan menurut layanan bisnis, dan jalankan latihan reguler. Koordinasikan dengan tim keamanan pemasok dan uji serah terimanya.

**Pemerintah dan sektor publik.** Sektor sering menghadapi direktif wajib dengan tenggat untuk kerentanan tertentu, kewajiban pelaporan insiden formal, dan persyaratan audit. Perlakukan itu sebagai masukan desain: lacak kepatuhan terhadap tenggat direktif, simpan bukti, dan laporkan insiden sesuai kewajiban sambil melindungi privasi individu (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah perkakas pemindaian dan pemantauan, yang mungkin sudah dimiliki; waktu merawat tautan aset; waktu rekayasa untuk memperbaiki temuan dan memperbarui dependensi; persiapan dan latihan respons insiden; dan pelatihan. Pemeriksaan pipeline memakan waktu penyiapan dan sebagian waktu build. Pemantauan alih daya punya biaya layanan.

Imbal hasilnya adalah kemungkinan dan dampak insiden yang lebih rendah, paparan lebih singkat, dan lebih sedikit perubahan darurat yang tergesa. Manfaat ini nyata dan sulit dikuantifikasi, karena insiden yang tidak terjadi tidak meninggalkan catatan. Hindari mengutip biaya pelanggaran rata-rata industri atau frekuensi insiden kecuali Anda dapat menelusuri sumber dan relevansinya. Bangun kasus dari data Anda sendiri: tren jendela paparan, jumlah perubahan darurat akibat penambalan terlambat, waktu yang dihabiskan untuk pekerjaan tambalan manual yang dihapus otomatisasi, dan biaya insiden masa lalu Anda termasuk waktu staf dan dampak pelanggan. Gambarkan pengurangan risiko dalam skenario spesifik, seperti disarankan topik sebelumnya tentang kasus bisnis (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Melaporkan hitungan kerentanan.** Hitungan turun ketika pemindaian melewatkan sesuatu. Laporkan jendela paparan, item terlambat, dan cakupan.
- **Memprioritaskan hanya dengan skor keparahan.** Mengabaikan keterjangkauan dan eksploitasi. Tambahkan konteks.
- **Memperlakukan pemindaian sebagai kebenaran.** Periksa cakupan dan mutu pemindaian terhadap register aset.
- **Pengecualian permanen.** Menjadi risiko tersembunyi. Beri setiap pengecualian pemilik dan tanggal tinjauan.
- **Mempermalukan orang atas kesalahan.** Laporan berhenti. Pakai tinjauan tanpa menyalahkan dan hasil agregat.
- **Keamanan sebagai gerbang di ujung.** Memperlambat pengiriman dan mengundang jalan pintas. Bangun pemeriksaan ke dalam pipeline.
- **Siklus tambalan big-bang.** Berisiko dan lambat. Tambal sering dalam perubahan kecil.
- **Mengabaikan pemasok.** Kelemahan mereka adalah milik Anda. Lacak kewajiban keamanan dan insiden pemasok.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Visibilitas | Pemindaian sesekali pada beberapa sistem | Pemindaian reguler sistem utama | Cakupan pemindaian dilacak terhadap register aset; temuan dikaitkan dengan pemilik | Cakupan, jendela paparan, dan pengecualian dikelola dan diplot tren | Pandangan bersama lintas tim dan pemasok, termasuk dependensi |
| Prioritisasi dan perbaikan | Perbaiki menurut permintaan paling keras | Daftar berbasis keparahan | Peringkat berbasis konteks; jendela kebijakan menurut pita; tambalan kecil yang sering | Jendela dan ekor ditinjau; pemeriksaan pipeline disetel bersama tim | Remediasi otomatis berbasis risiko dengan pengawasan manusia |
| Respons dan budaya | Respons ad hoc; menyalahkan | Rencana dasar, jarang diuji | Rencana dilatih; tinjauan tanpa menyalahkan; pelaporan dihargai | Waktu penahanan dan tingkat deteksi internal dikelola; budaya pelaporan diukur | Latihan bersama dengan pemasok dan pelanggan; pembelajaran dibagikan luas |

## Daftar periksa

- [ ] Cakupan pemindaian diukur terhadap register aset.
- [ ] Temuan terkait dengan aset, pemilik, dan layanan.
- [ ] Pita prioritas menggabungkan keparahan, eksploitasi, keterjangkauan, dan pentingnya aset.
- [ ] Jendela kebijakan menurut pita disepakati, dan jendela paparan serta item terbuka tertua dilaporkan.
- [ ] Pemeriksaan dependensi dan pipeline dijalankan pada setiap build, dengan penghalang yang disepakati.
- [ ] Penambalan berjalan sebagai perubahan kecil, sering, dan teruji dengan jalur darurat.
- [ ] Pengecualian punya pemilik, kendali kompensasi, dan tanggal tinjauan.
- [ ] Respons insiden dilatih, dan waktu menahan diukur dari deteksi.
- [ ] Data perilaku manusia dilaporkan hanya secara agregat, dan pelaporan diberi terima kasih.
- [ ] Kewajiban keamanan dan insiden pemasok dilacak.

## Prompt AI

**Tinjau aturan prioritisasi kerentanan.**

```text
Aturan kami saat ini untuk memprioritaskan kerentanan adalah: [describe]. Bidang
data kami mencakup: [list, for example severity score, exploit status, asset
importance, internet exposure]. Tinjau aturan untuk titik buta dan cara
dimanipulasi, dan usulkan peringkat berbasis konteks dengan pita dan jendela
kebijakan yang jelas. Jangan menyatakan angka spesifik sebagai standar industri.
Daftar asumsi Anda dan apa yang perlu dikonfirmasi spesialis keamanan.
```

**Periksa cakupan pemindaian.**

```text
Berikut ringkasan register aset kami menurut kelas dan aset yang terlihat
pemindai kami pada [interval] terakhir: [paste counts or sanitized lists].
Identifikasi kelas dengan cakupan rendah, alasan celah yang mungkin, dan
pemeriksaan tercepat untuk mengonfirmasi tiap alasan. Sarankan cara melaporkan
cakupan agar pemindaian gagal atau parsial tidak tampak seperti keberhasilan.
Daftar asumsi Anda.
```

**Rencanakan latihan tabletop.**

```text
Rancang latihan tabletop 90 menit untuk [type of organization] pada skenario ini:
[describe, for example a compromised supplier credential]. Sertakan peran, lini
masa inject, keputusan untuk dipicu, apa yang dicatat (termasuk waktu mendeteksi
dan menahan), dan pertanyaan untuk debrief tanpa menyalahkan. Jangan menyertakan
nama atau sistem nyata. Daftar asumsi Anda dan apa yang disesuaikan dengan
konteks kami.
```

**Tulis pesan tanpa menyalahkan untuk kesalahan yang dilaporkan.**

```text
Seorang rekan melaporkan bahwa mereka [describe, for example clicked a link in a
phishing email]. Susun balasan singkat dan ramah dari tim keamanan yang berterima
kasih kepada mereka, menjelaskan apa yang akan kami lakukan, dan meminta rincian
yang kami butuhkan. Lalu susun catatan agregat untuk pembaruan mingguan yang
membagikan pelajarannya tanpa menamai siapa pun. Daftar asumsi Anda dan pilihan
nada yang perlu saya tinjau.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik keamanan atau kerentanan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik keamanan membawa vektor manipulasi, pagar pembatas, dan aturan privasinya.

## Poin penting

- Ukur waktu paparan, item terbuka tertua, dan cakupan pemindaian, bukan hitungan mentah temuan.
- Prioritaskan menurut konteks: keparahan, eksploitasi, keterjangkauan, dan pentingnya aset.
- Tambal sering dalam perubahan kecil yang teruji, dan beri setiap pengecualian pemilik dan tanggal tinjauan.
- Tahan insiden dengan cepat, belajar tanpa menyalahkan, dan lacak deteksi internal.
- Perlakukan budaya pelaporan sebagai kendali: beri terima kasih kepada yang melapor, dan jangan pernah memeringkat individu.
- Bangun pemeriksaan keamanan ke dalam pipeline agar pilihan aman menjadi yang mudah.

## Referensi dan bacaan lanjutan

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
