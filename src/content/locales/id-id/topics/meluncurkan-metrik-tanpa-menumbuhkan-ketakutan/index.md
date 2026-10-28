# Meluncurkan metrik tanpa menumbuhkan ketakutan

**Pengukuran berhasil ketika orang percaya angka menggambarkan pekerjaan mereka untuk membantu mereka, jadi luncurkan dengan transparansi, kepemilikan tim, janji tertulis tentang pemakaian, dan tanpa tabel liga individu.**

## Gambaran umum dan motivasi

Program metrik berhasil atau gagal karena kepercayaan. Himpunan ukuran yang sama dapat menjadi cermin berguna di satu organisasi dan sumber kengerian di organisasi lain. Perbedaannya jarang pada ukurannya. Perbedaannya adalah apa yang dipercaya orang akan terjadi pada mereka karena angka. Jika mereka percaya angka akan dipakai untuk memeringkat, menyalahkan, atau mengurangi mereka, tanggapan yang masuk akal adalah melindungi diri: memilih pekerjaan yang berskor baik, menunda melaporkan masalah, memperdebatkan definisi, dan diam-diam menyesuaikan apa yang dicatat. Data lalu berhenti menggambarkan pekerjaan, dan program kehilangan hal yang justru dibangun untuk disediakannya.

Pola ini lama dan dikenal baik. [Efek Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) menggambarkan cara orang mengubah perilaku ketika tahu mereka diamati. [Hukum Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) mengatakan bahwa semakin banyak indikator kuantitatif dipakai untuk pengambilan keputusan, semakin ia tunduk pada tekanan korupsi dan semakin ia mendistorsi proses yang dimaksudkan untuk dipantaunya. [Hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) menyampaikan hal serupa tentang target (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Tak satu pun alasan untuk menghindari pengukuran. Semuanya alasan untuk merancang peluncuran agar insentif mendistorsi rendah dan alasan mengatakan yang sebenarnya tinggi.

[Rasa aman psikologis](https://en.wikipedia.org/wiki/Psychological_safety) adalah keyakinan bersama bahwa tim aman untuk mengambil risiko antarpribadi, seperti mengakui kesalahan, mengajukan pertanyaan, atau melaporkan kabar buruk. Program metrik bergantung padanya dan dapat mengikisnya. Ukuran kegagalan, pengerjaan ulang, dan keterlambatan hanya jujur ketika orang merasa aman melaporkannya (lihat topik 9.2, Metrik kepuasan dan kesejahteraan, dan topik 4.2, Metrik postmortem dan pembelajaran). [Kepercayaan](https://en.wikipedia.org/wiki/Trust_(social_science)) antara orang yang diukur dan orang yang memakai ukuran adalah aset yang mendasarinya, dan dibangun lambat serta dihabiskan cepat.

[Manajemen perubahan](https://en.wikipedia.org/wiki/Change_management) adalah disiplin mempersiapkan dan mendukung orang melewati perubahan. Memperkenalkan metrik adalah perubahan organisasi, dan layak mendapat kehati-hatian yang sama seperti proses atau perkakas baru (lihat topik 9.6, Metrik perubahan organisasi dan adopsi). [Siklus hidup adopsi teknologi](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle) menggambarkan bagaimana inovasi menyebar dari penggemar ke mayoritas, yang mengingatkan bahwa uji coba yang dihormati dengan tim yang bersedia berbuat lebih banyak daripada mandat. [Proyek percontohan](https://en.wikipedia.org/wiki/Pilot_project) adalah uji skala kecil yang menguji pendekatan sebelum komitmen lebih luas. [Radiator informasi](https://en.wikipedia.org/wiki/Information_radiator) adalah tampilan informasi terlihat yang dapat dibaca orang sekilas tanpa bertanya, yang cocok dengan transparansi ketika menunjukkan data tim kepada tim yang memilikinya.

Tujuan agile memberi peluncuran bentuknya. Keterlibatan pemangku kepentingan berkelanjutan berarti orang yang diukur membantu memilih ukuran dan aturan pemakaiannya. Perbaikan berkelanjutan berarti program sendiri diubah sebagai tanggapan atas apa yang dikatakan orang. Evolusi berkelanjutan berarti ukuran diharapkan berubah, yang menurunkan taruhan tiap satunya. Kecepatan berkelanjutan berarti program tidak menambah pelaporan yang mendesak pekerjaan. Membangun di sekitar individu termotivasi berarti memperlakukan orang sebagai orang dewasa cakap yang dapat memakai data untuk memperbaiki pekerjaan mereka sendiri, dan bukan sebagai sumber daya untuk dipantau. Sikap praktisnya sederhana: ukur sistem, bagikan data kepada orang di dalamnya, dan biarkan mereka memimpin perbaikan.

Topik ini bekerja bersama panduan dasbor (lihat topik 11.1, Merancang dasbor metrik layanan) dan tata kelola ukuran (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

## Prinsip utama

- **Katakan untuk apa data itu, dan untuk apa bukan.** Tuliskan keduanya, dan patuhi.
- **Tim memiliki ukuran mereka.** Orang yang mengerjakan pekerjaan membantu mendefinisikan, melihat, dan menafsirkan angka tentangnya.
- **Ukur sistem, bukan individu.** Tanpa tabel liga, tanpa skor per orang, tanpa memakai data dalam tinjauan kinerja individu.
- **Bersikaplah transparan.** Bagikan definisi, sumber data, dan siapa yang dapat melihat apa. Kejutan menumbuhkan kecurigaan.
- **Mulai dengan sukarelawan.** Uji coba yang bersedia menghasilkan cerita dan perbaikan sebelum peluncuran lebih luas.
- **Tunjukkan pemakaiannya.** Tunjukkan bahwa angka menuntun pada bantuan, seperti menyingkirkan hambatan, dan bukan pada kesalahan.
- **Izinkan tantangan.** Orang dapat mempertanyakan angka, dan koreksi dibuat cepat dan terlihat.
- **Berjalan dalam kecepatan berkelanjutan.** Beberapa ukuran sekaligus, dengan waktu untuk belajar.

## Definisi metrik

Ukuran di bawah memberi tahu tim program apakah peluncuran sedang membangun atau menghabiskan kepercayaan. Ukuran itu menggambarkan tim dan program, bukan individu. Beberapa bersandar pada survei dan pengamatan perilaku, dan paling baik dibaca sebagai sinyal untuk dibicarakan.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan piagam pemakaian | Porsi tim peserta yang telah menyepakati pernyataan tertulis tentang untuk apa ukuran mereka dipakai dan tidak pernah dipakai | tim dengan piagam yang disepakati / tim peserta | persen | Piagam yang dipegang program | Tata kelola; manajemen perubahan organisasi | Kesepakatan kerja | Kuartalan |
| Porsi kepemilikan tim | Porsi ukuran yang ditampilkan kepada tim yang definisinya ikut ditulis atau telah disetujui tim | ukuran dengan persetujuan tim / ukuran ditampilkan kepada tim | persen | Katalog metrik; catatan persetujuan | Perbaikan berkelanjutan | Tim yang mengorganisasi diri | Kuartalan |
| Sinyal keterusterangan | Apakah pelaporan masalah dan nyaris celaka bertahan atau naik setelah ukuran diperkenalkan | laporan nyaris celaka atau masalah per tim per kuartal, sebelum dan sesudah; tren | laporan | Catatan insiden, nyaris celaka, dan postmortem | Manajemen insiden; perbaikan berkelanjutan | Renungan tanpa menyalahkan | Kuartalan |
| Waktu penyelesaian tantangan | Waktu dari seseorang atau tim menantang angka sampai penyelesaian yang terlihat bagi mereka | median dan persentil ke-85 hari dari tantangan sampai penyelesaian | hari | Log tantangan | Perbaikan berkelanjutan; manajemen pengetahuan | Menanggapi umpan balik | Kuartalan |
| Rasa aman pengukuran yang dirasakan (survei) | Kesepakatan survei tingkat tim dengan pernyataan seperti “data tentang pekerjaan kami dipakai untuk membantu kami” | persen yang setuju pada survei tim; tingkat respons ditunjukkan | persen | Survei tim anonim, diagregasi | Manajemen perubahan organisasi | Kepercayaan dan individu termotivasi | Dua kali setahun |
| Insiden pemakaian individu | Kejadian ketika data ditampilkan atau dipakai untuk memeringkat atau mengevaluasi individu, melanggar piagam | hitungan kejadian yang dilaporkan per kuartal, dengan hasilnya | hitungan | Laporan kepada program; tinjauan dasbor dan tinjauan kinerja | Tata kelola | Menghormati orang | Kuartalan |
| Adopsi sukarela | Porsi tim yang memenuhi syarat yang memilih mengikuti program dalam periode itu, sebelum mandat apa pun | tim yang memilih ikut / tim memenuhi syarat yang diundang | persen | Catatan program | Manajemen perubahan organisasi | Uji coba dan pembelajaran | Kuartalan |

Survei rasa aman yang dirasakan butuh ukuran kelompok minimum untuk pelaporan agar tak ada individu yang dapat diidentifikasi, dan sebaiknya anonim. Sinyal keterusterangan harus dibaca dengan hati-hati: kenaikan laporan dapat berarti lebih banyak masalah atau lebih banyak kesediaan melapor, dan yang kedua biasanya yang dihasilkan program sehat pada awalnya. Insiden pemakaian individu bukan hitungan untuk disembunyikan. Tujuannya adalah setiap kejadian dilaporkan, ditangani, dan dikoreksi, dan jumlah kecil kejadian yang dilaporkan adalah tanda jalur pelaporan yang berfungsi, bukan kegagalan program. Adopsi sukarela dihitung hanya untuk periode sebelum mandat apa pun.

## Rekomendasi

### Tetapkan aturan dasar lebih dulu

**1. Tulis janji dan terbitkan.** Sebelum angka pertama ditunjukkan, tulis piagam singkat. Piagam yang baik mengatakan bahwa ukuran menggambarkan tim, layanan, dan sistem dan tidak pernah dipakai untuk memeringkat individu atau dalam tinjauan kinerja individu. Ia mengatakan siapa yang dapat melihat apa, berapa lama data disimpan, bagaimana orang dapat menantang angka, dan apa yang terjadi jika aturan dilanggar. Pemimpin senior menandatanganinya. Piagam adalah komitmen yang memungkinkan orang menurunkan kewaspadaan, dan sebaiknya mudah ditemukan dan dibaca.

**2. Pisahkan pengukuran untuk perbaikan dari pengukuran untuk penilaian.** Tim memakai ukuran mereka untuk memperbaiki pekerjaan mereka sendiri. Pemimpin memakai tampilan teragregasi untuk mengarahkan dukungan dan investasi. Tak satu pun pemakaian tentang menilai seseorang. Jika organisasi harus menilai individu, ia sebaiknya melakukannya lewat percakapan, bukti, dan konteks, dan tidak pernah dengan membaca dari dasbor (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

**3. Bersikaplah terbuka tentang pertukarannya.** Beri tahu orang bahwa setiap ukuran dapat dimanipulasi, bahwa Anda tahu caranya, dan bahwa masing-masing datang dengan pagar pembatas. Tunjukkan vektor manipulasi dan pagar pembatas dalam gaya buku ini. Menamai risiko secara terbuka menunjukkan itikad baik, dan mengundang orang menunjuk cara yang Anda lewatkan.

### Jadikan tim pemilik

**4. Biarkan tim memilih dan mendefinisikan.** Tawarkan menu ukuran dan biarkan tiap tim memilih beberapa untuk memulai, menyesuaikan definisi dengan alasan yang dinyatakan, dan menambah milik mereka sendiri. Tim yang memilih ukurannya lebih mungkin memakainya dengan jujur. Simpan inti bersama yang kecil agar layanan dapat dibandingkan pada tingkat tempat perbandingan sah (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

**5. Tunjukkan tim data mereka lebih dulu.** Beri tiap tim angkanya sebelum orang lain melihat, dengan waktu untuk memeriksa, mengoreksi, dan menambah konteks. Tim memiliki ceritanya. Ketika data kemudian ditunjukkan kepada pemimpin, tim mempresentasikan atau memberi catatan. Ini menghindari kejutan dan memastikan penafsiran datang dari orang yang paling dekat dengan pekerjaan.

**6. Jaga tampilan pada tingkat yang tepat.** Tunjukkan tampilan tingkat tim dan tingkat layanan. Jangan menunjukkan rincian per orang, dan matikan fitur perkakas yang melakukannya. Di mana tampilan rinci diperlukan untuk penyelidikan, seperti riwayat satu insiden, batasi akses, jelaskan mengapa, dan jaga di luar percakapan tinjauan (lihat topik 11.2, Lanskap perkakas).

### Luncurkan untuk memperoleh kepercayaan

**7. Uji coba dengan sukarelawan.** Undang dua atau tiga tim yang ingin tahu dan dihormati. Bekerjalah bersama mereka pada ukuran dan aturan. Biarkan mereka menceritakan kisah mereka sendiri kepada rekan sejawat. Perbaikan dan keberatan mereka akan memperbaiki program, dan dukungan mereka lebih berbobot daripada pengumuman apa pun. Tanyakan apa yang akan mereka ubah sebelum peluncuran lebih luas, dan ubahlah.

**8. Sampaikan nilai lebih awal dan terlihat.** Dalam beberapa pekan pertama, pakai data untuk menyingkirkan sesuatu yang mengganggu tim: antrean yang selalu menunggu, langkah persetujuan tanpa tujuan, laporan yang tak dibaca siapa pun. Ketika orang melihat bahwa angka menuntun pada bantuan, mereka menawarkan data lebih jujur. Ketika mereka melihat bahwa angka menuntun pada pertanyaan tentang mereka, mereka menawarkan lebih sedikit.

**9. Tanggapi tantangan dengan cepat.** Ketika seseorang mengatakan angka salah, anggap serius. Periksa, perbaiki definisi atau datanya, dan katakan secara publik apa yang dilakukan. Koreksi cepat dan hormat membangun kepercayaan, dan jawaban defensif menghabiskannya. Simpan log tantangan, dan perlakukan tantangan berulang sebagai sinyal bahwa ukuran perlu diperbaiki.

### Lindungi kepercayaan dari waktu ke waktu

**10. Awasi tanda-tanda ketakutan.** Tandanya mencakup tim memperdebatkan definisi untuk menghindari hasil, perbaikan mendadak yang tak cocok dengan sinyal lain, lebih sedikit masalah dilaporkan, pekerjaan dipilih agar tampak baik, dan orang bertanya siapa yang dapat melihat data. Perlakukan ini sebagai informasi tentang program dan bukan sebagai kenakalan. Tanyakan tim, dengarkan, dan sesuaikan.

**11. Pegang pemimpin pada piagam.** Pemimpin berada di bawah tekanan membandingkan, memeringkat, dan menjelaskan. Berikan apa yang sah dapat mereka pakai: tren, distribusi, dan ukuran hasil pada tingkat tim dan layanan. Permudah melaporkan pelanggaran piagam, tanggapi tiap laporan, dan terbitkan hasilnya, tanpa menamai individu yang mengangkatnya. Satu pelanggaran terlihat dapat membatalkan berbulan-bulan kerja, dan koreksi terlihat dapat membangunnya kembali.

**12. Tinjau program bersama orang di dalamnya.** Tiap kuartal, tanyakan tim apa yang dibantu ukuran, apa yang didistorsinya, dan apa yang akan mereka buang. Pensiunkan ukuran yang gagal ujian. Bagikan hasil tinjauan. Komitmen berkelanjutan dan terlihat untuk memperbaiki program adalah sinyal terkuat bahwa ia ada untuk melayani tim (lihat topik 9.5, Metrik perbaikan berkelanjutan).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan piagam pemakaian | Menandatangani piagam sebagai formalitas; pemimpin mengabaikannya | Periksa pemakaian piagam dalam praktik; laporkan insiden pemakaian individu; tinjau piagam bersama tim |
| Porsi kepemilikan tim | Tim menyetujui definisi yang tak mereka baca; program menyajikan definisi jadi untuk ditandatangani | Ambil sampel bagaimana definisi dikembangkan; lacak perubahan yang diminta dan dibuat tim |
| Sinyal keterusterangan | Menekan tim untuk melaporkan lebih banyak atau lebih sedikit masalah; menamai ulang kategori | Baca bersama keparahan dan isi postmortem; bandingkan dengan isu yang dilaporkan pelanggan |
| Waktu penyelesaian tantangan | Menutup tantangan tanpa penyelesaian terlihat; mengecilkan hati tantangan | Wajibkan respons terlihat; survei penantang; lacak tantangan berulang |
| Rasa aman pengukuran yang dirasakan (survei) | Melatih responden; tingkat respons rendah menyembunyikan tim yang tak puas | Anonimitas dan ukuran kelompok minimum; tunjukkan tingkat respons; bicara langsung dengan tim |
| Insiden pemakaian individu | Tidak melaporkan; mengklasifikasi ulang insiden sebagai hal lain; menyalahkan mereka yang melapor | Pelaporan anonim yang mudah; perlindungan bagi pelapor; tinjauan atas tinjauan dan dasbor untuk data individu |
| Adopsi sukarela | Tekanan dibingkai sebagai undangan; menghitung tim yang bergabung untuk menghindari pengamatan | Tanyakan tim mengapa mereka bergabung; periksa pemakaian dalam praktik; jaga periode bebas mandat |

Pembacaan yang sehat menunjukkan piagam yang benar-benar dirujuk tim, ukuran yang ikut dibentuk tim, laporan masalah yang stabil atau naik, tantangan yang dijawab cepat, survei yang menunjukkan orang percaya data membantu mereka, beberapa pelanggaran yang dilaporkan dan ditangani secara terbuka, dan tim yang bergabung karena mereka menginginkannya.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Peluncuran wajib untuk semua tim sekaligus | Cepat dan konsisten | Kepatuhan tanpa keyakinan; manipulasi dan kebencian |
| Uji coba sukarela, lalu menyebar | Membangun cerita dan kepercayaan | Lebih lambat; cakupan tak merata |
| Tim memilih semua ukuran mereka | Kepemilikan tinggi | Sulit dibandingkan; celah cakupan |
| Inti bersama plus pilihan tim | Keseimbangan perbandingan dan kepemilikan | Butuh tata kelola |
| Dasbor terbuka lintas tim | Transparansi; pembelajaran bersama | Risiko perbandingan dan peringkat |
| Tampilan hanya-tim, dengan agregat dibagikan | Ruang aman untuk renungan jujur | Pemimpin mungkin merasa buta |
| Piagam tertulis | Janji jelas; dasar untuk menantang | Tak berharga jika diabaikan |
| Jaminan informal | Cepat | Terlupakan; tanpa jalan banding |

Jawaban prosanya adalah mulai dengan tim yang bersedia, memberi mereka kepemilikan, membagikan agregat ke atas dengan persetujuan dan konteks tim, dan menopang janji dengan piagam yang dipegang pemimpin.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa yang kita percaya akan terjadi dengan angka-angka ini, dan apa yang telah kita lihat terjadi di masa lalu?**
Undang cerita jujur tentang ukuran yang dipakai dengan baik dan buruk. Fasilitator sebaiknya mencatat ketakutan tanpa berdebat. Sepakati janji apa yang akan paling berbeda.

**2. Apa yang akan kita tulis dalam piagam yang mengatakan untuk apa data kita tidak akan pernah dipakai?**
Susun bersama dalam kata-kata lugas. Sertakan tinjauan kinerja individu, peringkat, dan pemutusan hubungan kerja, jika itu kekhawatirannya. Bawa kepada pemimpin yang harus menandatangani.

**3. Ukuran yang diusulkan mana yang akan kita pilih, dan mana yang akan kita buang?**
Biarkan tiap orang memilih secara pribadi dan bandingkan. Bahas mengapa sebagian tampak mengancam. Sepakati himpunan pendek untuk dicoba selama satu kuartal.

**4. Bagaimana kita tahu jika orang mulai menyembunyikan masalah?**
Daftar tandanya: lebih sedikit laporan, bahasa dilunakkan, pekerjaan dihindari. Sepakati siapa yang mengawasi dan bagaimana kita mengangkatnya tanpa menyalahkan.

**5. Siapa yang sebaiknya melihat angka tim kita, dalam bentuk apa, dan kapan?**
Bahas hanya-tim, agregat pimpinan, dan perbandingan lintas tim. Putuskan apa yang dibagikan, dan siapa yang mempresentasikan. Tuliskan aturannya.

**6. Jika angka tentang kita salah, bagaimana kita memperbaikinya?**
Telusuri jalur dari memperhatikan sampai koreksi. Identifikasi keterlambatan dan siapa yang memutuskan. Sepakati jalur tantangan sederhana dan harapan waktu.

## Empat perspektif

### Tim produk dan pengiriman

Tim memikul risiko diukur, dan memegang pengetahuan tentang apa arti angka. Mereka sebaiknya ikut memilih dan mendefinisikan ukuran, memakai data dalam tinjauan mereka sendiri, dan bersuara ketika angka menyesatkan. Mereka diuntungkan ketika mereka melihat data lebih dulu dan ketika pengukuran membantu menyingkirkan hambatan.

### Tim layanan dan operasi

Tim operasi sering memegang data terkaya dan beban siaga dan insiden terberat. Mereka sebaiknya waspada terhadap ukuran yang menghargai kebisuan atau menghukum eskalasi, melindungi pelaporan insiden dan nyaris celaka, dan mengawasi agar data siaga tidak dipakai untuk memeringkat orang (lihat topik 5.7, Metrik pekerjaan berulang dan siaga).

### Kepemimpinan dan tata kelola

Pemimpin menetapkan budaya pemakaian. Mereka sebaiknya menandatangani dan mengikuti piagam, meminta tampilan tim dan layanan, menanggapi pelanggaran secara terbuka, dan menghindari meminta peringkat. Mereka sebaiknya menilai program dari perbaikan yang dimungkinkannya dan dari keterusterangan yang dijaganya, bukan dari jumlah dasbor.

### Pelanggan dan pengguna

Pelanggan dan pengguna diuntungkan ketika tim melaporkan masalah dengan jujur dan memperbaiki sebab. Mereka juga mungkin menjadi subjek pengumpulan data. Mereka berhak atas kejelasan tentang apa yang dikumpulkan tentang mereka dan bagaimana dipakai, dan mereka dapat menjadi mitra dalam memutuskan ukuran mana yang menunjukkan nilai bagi mereka (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Divisi teknologi sebuah penyedia layanan kesehatan memperkenalkan metrik di 15 tim pengiriman dan dukungannya. Upaya sebelumnya, tiga tahun lalu, menerbitkan peringkat tim menurut tiket yang ditutup dan berakhir dengan lonjakan penutupan tiket bernilai rendah dan penurunan insiden yang dilaporkan. Angka di bawah bersifat ilustratif.

Kepala manajemen layanan yang baru mulai dengan bertanya kepada enam pemimpin tim apa yang mereka ingat. Mereka menggambarkan peringkat dan akibatnya. Ia menyusun piagam bersama mereka: ukuran menggambarkan tim dan layanan, tidak pernah individu; tampilan individu dimatikan dalam perkakas; data tidak pernah dipakai dalam tinjauan individu; tim melihat data mereka lebih dulu; siapa pun dapat menantang angka, dengan respons dalam sepuluh hari kerja; dan pelanggaran tak terkait akan dilaporkan kepada program dan ditinjau secara terbuka. Kepala teknologi menandatanganinya, dan dipasang di halaman program.

Tiga tim menjadi sukarelawan untuk uji coba. Masing-masing memilih empat ukuran dari menu dan menulis ulang dua definisi. Satu tim berkeras bahwa “waktu penyelesaian” mengecualikan waktu menunggu pelanggan, dan yang lain bahwa kegagalan perubahan didefinisikan menurut dampak pengguna dan bukan hanya rollback. Uji coba menunjukkan manfaat pertamanya pada pekan ketiga, ketika satu tim melihat pekerjaannya menunggu di antrean persetujuan dan menghapus langkah yang tak bisa dibenarkan siapa pun. Tim itu mempresentasikan ceritanya di rapat divisi. Tujuh tim lagi meminta bergabung. Adopsi sukarela mencapai 10 dari 15 tim dalam dua kuartal, dan lima terakhir bergabung kemudian tanpa mandat.

Program mengawasi ketakutan. Laporan nyaris celaka per tim naik pada kuartal pertama, yang dibaca kepala sebagai lebih banyak kesediaan melapor, dan ia memastikannya dengan membaca sampel. Survei tim dengan ukuran kelompok minimum menunjukkan 58 persen responden setuju bahwa “data tentang pekerjaan kami dipakai untuk membantu kami” pada awal kuartal kedua dan 76 persen pada awal kuartal keempat. Waktu penyelesaian tantangan punya median empat hari kerja. Lalu seorang direktur, menyiapkan kasus anggaran, meminta tabel yang memeringkat tim menurut jumlah deployment. Pemimpin program memberitahunya bahwa itu di luar piagam, menawarkan tampilan tren menurut layanan dengan komentar tim, dan mencatat permintaan sebagai nyaris-insiden pemakaian individu yang dilaporkan beserta hasilnya. Direktur menerima. Dua kuartal kemudian, insiden pemakaian individu berjumlah satu, dilaporkan, ditangani, dan diterbitkan tanpa nama.

## Sudut pandang sektor

**Startup.** Tim kecil dan kepercayaan bersifat pribadi. Katakan dengan lantang untuk apa angka itu, biarkan seluruh tim memilih beberapa ukuran yang dilacak, dan jaga di luar percakapan individu mana pun. Risikonya adalah komentar sambil lalu pendiri tentang suatu angka membentuk ulang perilaku dalam semalam. Tulis janji itu, bahkan dalam beberapa baris.

**Bisnis kecil.** Staf mungkin curiga bahwa angka tentang memangkas pekerjaan. Bicaralah terbuka tentang mengapa Anda mengukur, apa yang akan Anda lihat, dan apa yang tidak. Libatkan orang dalam memilih ukuran, bagikan temuan Anda, dan tunjukkan perbaikan yang membantu mereka lebih awal.

**Perusahaan besar.** Skala mempersulit kepercayaan, karena sebagian besar pemimpin jauh dari tim. Pakai piagam yang ditandatangani di tingkat senior, ukuran milik tim dengan inti bersama kecil, konfigurasi perkakas yang mencegah tampilan individu, dan jalur independen untuk melaporkan pelanggaran. Uji coba, belajar, dan sebarkan lewat rekan sejawat, dan hindari satu tanggal peluncuran global.

**Pemerintah dan sektor publik.** Aturan ketenagakerjaan, serikat, dan pengawasan publik menambah kendala dan harapan. Konsultasikan perwakilan staf sejak dini, sepakati piagam bersama mereka, dan jelaskan garis antara data perbaikan dan proses kinerja formal apa pun. Kewajiban pelaporan publik sebaiknya dijaga terpisah dari ukuran perbaikan internal (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya kebanyakan waktu orang: menyusun piagam, menjalankan uji coba, lokakarya dengan tim, menangani tantangan, menjalankan survei, dan waktu pemimpin yang dihabiskan memegang aturan. Ada juga biaya peluang, karena peluncuran yang cermat lebih lambat daripada mandat. Biaya itu kecil dibanding biaya peluncuran yang gagal, ketika data terdistorsi, kepercayaan terpakai, dan program ditinggalkan.

Imbal hasilnya adalah data yang mencerminkan kenyataan, pelaporan jujur atas masalah, dan tim yang memakai ukuran untuk memperbaiki. Ini tampak sebagai deteksi masalah lebih awal, lebih sedikit sengketa soal angka, dan adopsi lebih tinggi tanpa paksaan. Bangun kasus dari riwayat Anda sendiri: apa yang terjadi ketika ukuran dipaksakan sebelumnya, berapa banyak tim yang mengadopsi secara sukarela kali ini, dan bagaimana pelaporan masalah berubah. Hindari mengutip angka terbitan tentang keterlibatan atau kepercayaan tanpa sumber yang dapat ditelusuri dan relevansinya dengan pengaturan Anda (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Tabel liga kejutan.** Peringkat muncul di slide pimpinan. Kepercayaan berakhir. Jaga peringkat di luar program.
- **Ukuran dalam tinjauan kinerja.** Bahkan penyebutan mengubah perilaku di mana-mana. Jaga di luar, secara tertulis.
- **Wajibkan dulu, jelaskan kemudian.** Kepatuhan tanpa keyakinan. Uji coba dengan sukarelawan dan jelaskan alasannya.
- **Piagam yang tak ditegakkan siapa pun.** Kata tanpa tindakan lebih buruk daripada tidak ada. Pegang pemimpin padanya dan terbitkan hasilnya.
- **Pengawasan secara bawaan.** Perkakas memaparkan aktivitas individu karena bisa. Matikan fitur itu.
- **Jawaban defensif atas tantangan.** Orang berhenti menunjuk galat. Tanggapi dengan cepat dan hormat.
- **Tergesa ke banyak ukuran.** Kelebihan beban dan kebingungan. Mulai dengan sedikit dan tumbuh.
- **Membaca kesunyian sebagai keberhasilan.** Laporan lebih sedikit dapat berarti ketakutan. Awasi sinyal keterusterangan dan bicara dengan orang.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Janji dan pemakaian | Tak tertulis; pemakaian bervariasi menurut manajer | Jaminan lisan; beberapa kesepakatan tim | Piagam tertulis ditandatangani pemimpin; tampilan individu dimatikan | Pelanggaran dilaporkan dan ditinjau; pemakaian piagam diperiksa | Piagam dimiliki bersama staf dan mitra; direvisi dari pengalaman |
| Kepemilikan dan transparansi | Ukuran dipaksakan | Sebagian tim dikonsultasi | Tim memilih dan mendefinisikan ukuran dan melihat data lebih dulu | Porsi kepemilikan dan waktu penyelesaian tantangan dikelola | Tim, pemasok, dan pelanggan berbagi tampilan dengan kesepakatan; kepemilikan bersifat rutin |
| Kepercayaan dan keterusterangan | Takut atau acuh | Uji coba dengan sukarelawan | Survei rasa aman dan tren nyaris celaka ditinjau bersama tim | Sinyal memicu tindakan terencana; adopsi sukarela dilacak | Keterusterangan bersifat rutin; perbaikan program datang dari semua orang |

## Daftar periksa

- [ ] Piagam tertulis menyatakan untuk apa data itu dan tidak pernah untuk apa, dan pemimpin telah menandatanganinya.
- [ ] Tampilan tingkat individu dan peringkat dimatikan dalam perkakas atau dibatasi oleh kebijakan.
- [ ] Tim memilih atau menyetujui ukuran mereka dan melihat data mereka sebelum yang lain.
- [ ] Uji coba dengan tim sukarelawan mendahului peluncuran lebih luas.
- [ ] Pemakaian pertama data menyampaikan bantuan terlihat bagi tim.
- [ ] Jalur tantangan ada, dengan waktu respons yang dinyatakan dan log.
- [ ] Jalur pelaporan ada untuk pelanggaran piagam, dan hasil diterbitkan tanpa nama.
- [ ] Sinyal rasa aman dan keterusterangan tingkat tim diawasi dan dibahas bersama tim.
- [ ] Vektor manipulasi dan pagar pembatas dibagikan terbuka kepada tim.
- [ ] Program ditinjau bersama tim tiap kuartal, dan ukuran dipensiunkan ketika berhenti membantu.

## Prompt AI

**Susun piagam metrik.**

```text
Susun piagam satu halaman untuk program metrik [organization type]. Piagam harus
menyatakan untuk apa data itu, untuk apa data tidak akan pernah dipakai (termasuk
peringkat individu dan tinjauan kinerja), siapa yang dapat melihat apa, berapa
lama data disimpan, bagaimana seseorang dapat menantang angka, bagaimana
pelanggaran dilaporkan, dan siapa yang menandatanganinya. Pakai kata-kata lugas.
Jangan memberi nasihat hukum. Daftar asumsi Anda dan butir untuk dikonfirmasi
bersama spesialis sumber daya manusia dan hukum.
```

**Rencanakan uji coba.**

```text
Rencanakan uji coba enam pekan program metrik dengan dua sampai tiga tim
sukarelawan dalam [context]. Sertakan cara mengundang tim, ukuran mana yang
ditawarkan, cara menetapkan aturan, bantuan awal apa yang sebaiknya diberikan
data, apa yang ditanyakan kepada tim di akhir, dan cara memutuskan peluncuran
lebih luas. Jangan mengasumsikan hasilnya. Daftar asumsi Anda dan risiko.
```

**Tinjau ukuran untuk ketakutan.**

```text
Berikut ukuran yang diusulkan dan cara ia akan dipakai: [paste]. Bertindaklah
sebagai anggota tim yang skeptis. Gambarkan bagaimana ia dapat dianggap ancaman,
bagaimana orang dapat mengubah perilaku agar tampak baik, dan pelaporan jujur apa
yang mungkin dikecilkan hatinya. Sarankan perubahan pada definisi, tampilan, atau
aturan pemakaian yang akan menurunkan risiko. Daftar asumsi Anda.
```

**Tanggapi tantangan.**

```text
Sebuah tim telah menantang angka ini: [describe, without personal data]. Susun
tanggapan hormat yang mengakui kekhawatiran, menjelaskan bagaimana angka
dihitung, mengusulkan cara memeriksanya, menetapkan tanggal untuk jawaban, dan
mengatakan apa yang akan berubah jika angka salah. Jangan defensif. Daftar apa
yang belum Anda ketahui.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan vektor manipulasi dan pagar pembatas yang dibagikan terbuka kepada tim untuk ukuran yang diusulkan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa rencana peluncuran menjaga ukuran pada tingkat tim dan layanan dan tidak pernah memeringkat individu.

## Poin penting

- Kepercayaan adalah asetnya. Tulis untuk apa data itu dan tidak pernah untuk apa, dan patuhi janji.
- Ukur tim, layanan, dan sistem, dan matikan tampilan yang memaparkan individu.
- Biarkan tim memilih, mendefinisikan, dan melihat data mereka lebih dulu, dan memiliki cerita yang diceritakannya.
- Uji coba dengan sukarelawan, sampaikan bantuan terlihat lebih awal, dan sebarkan lewat rekan sejawat.
- Jawab tantangan dengan cepat, dan perlakukan tanda ketakutan sebagai informasi tentang program.
- Pegang pemimpin pada piagam, dan tinjau program bersama orang di dalamnya.

## Referensi dan bacaan lanjutan

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Trust (social science)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Technology adoption life cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
