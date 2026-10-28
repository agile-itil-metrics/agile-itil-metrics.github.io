# Metrik manajemen masalah

**Metrik manajemen masalah menunjukkan apakah tim sedang menyingkirkan sebab insidennya atau hanya memperbaiki gejalanya, jadi ukur berapa banyak sebab ditemukan, seberapa cepat diperbaiki untuk selamanya, dan apakah insiden yang sama kembali.**

## Gambaran umum dan motivasi

Tim yang memulihkan layanan dengan cepat masih bisa terjebak di treadmill. Kerusakan yang sama kembali tiap beberapa pekan, orang yang sama dipanggil, dan angka insiden tampak sehat karena setiap perbaikan cepat. Manajemen masalah adalah praktik yang melangkah turun dari treadmill. Ia melihat lintas insiden, menemukan sebab yang mendasari, dan membuat sebab itu disingkirkan atau dibatasi. Topik ini mencakup angka yang memberi tahu Anda apakah pekerjaan itu terjadi dan apakah berhasil.

Empat istilah membawa topik ini. **Insiden** adalah gangguan tak terencana pada layanan atau penurunan mutunya, sebagaimana kerangka [ITIL](https://en.wikipedia.org/wiki/ITIL) memakai kata itu (lihat topik 3.3, Waktu respons dan penyelesaian insiden). **Masalah** adalah sebab yang mendasari, atau dugaan sebab, satu insiden atau lebih. **Kesalahan yang diketahui** adalah masalah yang sebabnya dipahami dan solusi sementaranya dicatat, disimpan dalam [basis data kesalahan yang diketahui](https://en.wikipedia.org/wiki/Known_error_database) agar orang berikutnya yang bertemu gejala itu dapat menemukannya. [Solusi sementara](https://en.wikipedia.org/wiki/Workaround) mengurangi atau menghindari dampak insiden atau masalah tanpa menyingkirkan sebabnya. Perbaikan permanen adalah perubahan yang menyingkirkan sebab.

Menemukan sebab adalah tugas [analisis akar masalah](https://en.wikipedia.org/wiki/Root_cause_analysis). Teknik umum mencakup [lima mengapa](https://en.wikipedia.org/wiki/Five_whys), [diagram Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram), dan [bagan Pareto](https://en.wikipedia.org/wiki/Pareto_chart), yang memeringkat sebab menurut seberapa sering terjadi atau seberapa banyak kerugian yang ditimbulkan. Sistem kompleks sering punya beberapa sebab penyumbang dan tak ada satu tersangka, jadi catatan masalah yang baik menamai faktor yang, begitu disingkirkan, menghentikan kekambuhan, dan menyatakan seberapa yakin tim.

Metrik penting karena manajemen masalah punya jebakan pelaporan bawaan. Membuka catatan masalah mudah dan terasa produktif. Menutupnya pun mudah, karena catatan dapat ditutup dengan sebuah catatan. Tidak satu pun peristiwa menunjukkan bahwa sesuatu membaik bagi pengguna. Ukuran yang layak diawasi berada lebih hilir: apakah insiden yang tertaut pada masalah berhenti kambuh, apakah kesalahan yang diketahui benar-benar dipakai oleh orang yang siaga, dan berapa lama sebab yang telah didiagnosis menunggu perbaikannya.

Pandangan ITIL dan agile bertemu di sini tanpa banyak gesekan. Dalam ITIL 4, manajemen masalah adalah praktik di dalam sistem nilai layanan, dekat dengan manajemen insiden, pemberdayaan perubahan, dan manajemen pengetahuan. Padanan agile-nya adalah aliran perbaikan kecil berbasis bukti yang mengalir melalui [backlog](https://en.wikipedia.org/wiki/Backlog) tim, retrospektif yang menemukan pola, dan kebiasaan memperlakukan pekerjaan keandalan sebagai pekerjaan produk biasa. Di mana pandangan ITIL menekankan catatan, kepemilikan, dan kesalahan yang diketahui, pandangan agile menekankan batch kecil dan umpan balik cepat. Keduanya menginginkan lebih sedikit insiden berulang, dan hasil itu adalah ukuran untuk dijaga di depan semua orang.

Topik ini tidak mengulang jam insiden (lihat topik 3.3, Waktu respons dan penyelesaian insiden) atau ukuran insiden besar (lihat topik 3.4, Metrik insiden besar), dan memperlakukan tindak lanjut tinjauan hanya di mana menyuapi masalah (lihat topik 4.2, Metrik postmortem dan pembelajaran). Backlog kesalahan yang diketahui dan gagasan lebih luas tentang [utang teknis](https://en.wikipedia.org/wiki/Technical_debt) dibahas dalam topik 4.6, Utang teknis dan kesalahan yang diketahui. Di sini fokusnya adalah catatan masalah dan hasil yang dihasilkannya. Ukuran pemulihan dan kegagalan berbasis deployment ada di topik 2.8, Metrik DORA.

## Prinsip utama

- **Ukur kekambuhan, bukan urusan kertas.** Ujian manajemen masalah adalah bahwa insiden tertaut berhenti kembali. Hitungan catatan yang dibuka dan ditutup menggambarkan aktivitas dan sedikit berkata tentang hasil.
- **Pisahkan tiga saat.** Mendeteksi bahwa pola ada, mengidentifikasi sebabnya, dan menyingkirkan sebab adalah peristiwa berbeda dengan jam dan pemilik berbeda. Menggabungkannya menyembunyikan di mana keterlambatan berada.
- **Solusi sementara adalah tahap, bukan akhir.** Catat, pakai, dan lacak berapa lama ia tetap menjadi satu-satunya perlindungan. Solusi sementara yang hidup bertahun-tahun adalah utang dengan pemilik yang tak dapat dinamai siapa pun.
- **Taruh perbaikan di tempat pekerjaan berada.** Perbaikan permanen biasanya mendarat sebagai perubahan atau item backlog milik tim produk. Ukur dalam alur tim sendiri, dan tunjukkan kepada tim yang memiliki layanan.
- **Tautkan insiden ke masalah di sumbernya.** Setiap ukuran di sini bergantung pada tautan antara insiden dan masalah. Jika tautannya lemah, angkanya lemah.
- **Utamakan distribusi dan kohort daripada rata-rata.** Durasi masalah panjang dan miring, dan beberapa catatan lama mendominasi rata-rata mana pun (lihat topik 1.6, Literasi statistik untuk metrik layanan).
- **Gambarkan tim dan layanan, tidak pernah orang.** Masalah adalah sifat sistem. Tabel masalah yang ditutup per analis mengubah penyelidikan menjadi kuota.

## Definisi metrik

Semua jam memakai stempel waktu catatan masalah, catatan insiden tertaut, dan perubahan atau item backlog tertaut. Kecuali baris menyatakan lain, masalah dihitung menurut layanan dan tim pemilik, dan catatan yang digabung atau duplikat dikecualikan. Persentil diutamakan daripada rata-rata untuk setiap durasi. Angka dalam contoh topik ini bersifat ilustratif.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Masalah dibuka dan ditutup | Aliran catatan masalah masuk dan keluar dari keadaan terbuka, menurut layanan | Hitungan dibuka pada periode itu dan hitungan ditutup pada periode itu, masing-masing menurut kode penutupan (diperbaiki, risiko diterima, duplikat, tidak dapat direproduksi); duplikat ditampilkan tetapi dikecualikan dari hitungan “diperbaiki” | hitungan per periode | Catatan masalah ITSM | Manajemen masalah | Masukan dan throughput backlog | Bulanan |
| Usia backlog masalah | Berapa lama masalah terbuka telah menunggu | Untuk tiap masalah terbuka, tanggal snapshot dikurangi tanggal pembuatan catatan; laporkan median dan persentil ke-85 masalah terbuka dan yang tertua, menurut prioritas | hari | Catatan masalah ITSM | Manajemen masalah | Usia item kerja pada papan | Bulanan |
| Tingkat tautan insiden-ke-masalah | Porsi insiden yang menunjuk pada masalah atau kesalahan yang diketahui di mana diharapkan ada | Insiden pada periode itu dengan masalah atau kesalahan yang diketahui tertaut / insiden pada periode itu dengan prioritas tinggi atau lebih, atau dibuka ulang, atau dalam kategori berulang; insiden yang ditutup sebagai kesalahan pengguna atau duplikat dikecualikan | persen | Catatan insiden dan masalah ITSM | Manajemen insiden; manajemen masalah | Pengenalan pola dalam retrospektif | Bulanan |
| Waktu menuju akar masalah | Berapa lama masalah yang didiagnosis mencapai sebab tercatat | Jam dimulai saat catatan masalah dibuat dan berhenti saat sebab dicatat dan orang kedua telah meninjaunya; masalah yang ditutup tanpa sebab dikecualikan dan dihitung terpisah; laporkan median dan persentil ke-85 | hari | Catatan masalah ITSM dan jejak auditnya | Manajemen masalah | Spike atau kotak waktu penyelidikan | Bulanan |
| Tingkat pemakaian ulang kesalahan yang diketahui | Seberapa sering kesalahan yang diketahui dipakai ketika insiden tiba | Insiden yang diselesaikan dengan kesalahan yang diketahui atau solusi sementaranya tertaut / insiden pada periode itu yang gejalanya cocok dengan kesalahan yang diketahui yang ada pada saat itu; insiden tanpa kesalahan yang diketahui yang cocok dikecualikan | persen | Tautan insiden ITSM; pemakaian artikel pengetahuan | Manajemen pengetahuan; manajemen masalah | Pemakaian runbook atau playbook tim | Bulanan |
| Waktu menuju perbaikan permanen | Berapa lama masalah terpapar dari diagnosis sampai perbaikan berjalan di produksi | Jam dimulai saat sebab dicatat dan berhenti saat perubahan perbaikan tertaut diimplementasikan dan dikonfirmasi; masalah yang ditutup sebagai risiko diterima dikecualikan dan dihitung terpisah; laporkan median dan persentil ke-85 | hari | Catatan masalah; catatan perubahan atau peristiwa deployment pipeline | Manajemen masalah; pemberdayaan perubahan | Cycle time item perbaikan | Bulanan |
| Tingkat kekambuhan pasca-perbaikan | Porsi masalah yang diperbaiki yang gejala tertautnya kembali | Masalah yang ditutup sebagai diperbaiki dalam kuartal kohort dengan insiden cocok baru dalam 90 hari setelah perbaikan tayang / masalah yang ditutup sebagai diperbaiki pada kuartal itu; jendela 90 hari adalah contoh dan dinyatakan pada bagan | persen | Catatan insiden dan masalah ITSM; peristiwa deployment | Manajemen masalah; perbaikan berkelanjutan | Tingkat cacat yang lolos atau regresi | Kuartalan |
| Porsi hanya-solusi-sementara | Porsi masalah yang diketahui yang dilindungi hanya oleh solusi sementara | Masalah terbuka dalam keadaan kesalahan yang diketahui tanpa perbaikan terjadwal / masalah terbuka dalam keadaan kesalahan yang diketahui; masalah risiko diterima dengan pemilik bernama dan tanggal tinjauan ditampilkan sebagai kelompok terpisah | persen | Catatan masalah ITSM | Manajemen masalah; manajemen risiko | Register utang teknis | Bulanan |

Jendela 90 hari, aturan pencocokan gejala, dan definisi “diharapkan” dalam tingkat tautan adalah contoh. Tim memilih nilai yang cocok dengan layanannya dan menuliskannya di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik). Menghitung masalah yang ditutup sebagai “diperbaiki” terpisah dari kode penutupan lain menjaga pasangan dibuka-dan-ditutup tetap jujur.

## Rekomendasi

### Putuskan apa yang dihitung sebagai masalah

**1. Buka masalah berdasarkan bukti, dan katakan apa buktinya.** Pemicu yang baik adalah insiden berulang dengan gejala sama, insiden besar dengan sebab tak diketahui, tren yang ditemukan dalam tinjauan, atau risiko yang terlihat sebelum insiden apa pun. Tulis pemicu pada catatan, misalnya “lima insiden dalam enam pekan tertaut pada layanan yang sama.” Jika setiap insiden tak biasa menjadi catatan masalah, backlog terisi kebisingan dan tak seorang pun membacanya.

**2. Pakai himpunan kecil kode penutupan bersama.** Diperbaiki, risiko diterima, duplikat, tidak dapat direproduksi, dan digabung cukup bagi kebanyakan tim. Setiap kode punya makna satu kalimat dan pemilik yang boleh memakainya. Campuran kode penutupan lebih informatif daripada hitungan tertutup, karena menunjukkan berapa banyak pekerjaan menyingkirkan sebab dan berapa banyak berakhir tanpa perubahan.

### Tautkan insiden dan masalah di sumbernya

**3. Jadikan tautan langkah dalam penutupan insiden.** Minta penyelesai menautkan insiden ke masalah, kesalahan yang diketahui, atau “tidak ditemukan” sebelum menutupnya. Tawarkan saran yang cocok dari alat bila bisa, dan biarkan orang memutuskan. Tautan yang dibuat berpekan-pekan kemudian dalam latihan massal tidak andal (lihat topik 1.5, Sumber data dan instrumentasi).

**4. Sepakati cara gejala dicocokkan.** Kekambuhan bergantung pada memutuskan kapan dua insiden “sama.” Taksonomi sebab dan gejala pendek, dengan definisi dan contoh, lebih baik daripada teks bebas. Tinjau sampel kecocokan tiap kuartal, karena ketidakcocokan ke kedua arah membiaskan tingkat kekambuhan.

**5. Biarkan tinjauan pola menyuapi daftar masalah.** Tinjauan bulanan atas kategori insiden, menurut layanan dan lewat [bagan Pareto](https://en.wikipedia.org/wiki/Pareto_chart), menunjukkan beberapa sebab yang menghasilkan sebagian besar rasa sakit. Pakai tinjauan itu untuk membuka masalah dan memprioritaskannya, dan kirim sebab berulang dari tinjauan insiden besar ke daftar yang sama (lihat topik 3.2, Volume dan prioritas insiden).

### Ukur tiga keterlambatan

**6. Waktukan tahap secara terpisah.** Ukur dari pembuatan catatan sampai sebab tercatat, dan dari sebab tercatat sampai perbaikan berjalan di produksi. Keterlambatan pertama menunjuk pada kapasitas penyelidikan, akses ke data, dan keterampilan. Yang kedua menunjuk pada prioritisasi, proses perubahan, dan pekerjaan fitur yang bersaing. Satu “waktu menutup masalah” mencampurnya dan tidak memberi siapa pun tindakan yang jelas.

**7. Laporkan yang lama.** Tampilkan median dan persentil ke-85 usia masalah terbuka, dan daftar yang tertua menurut layanan. Beberapa catatan yang berusia bertahun-tahun akan menggeser rata-rata dan sedikit memberi tahu Anda, sedangkan daftar tertua mengundang keputusan: perbaiki, terima risiko dengan pemilik bernama dan tanggal tinjauan, atau tutup dengan alasan.

### Taruh perbaikan dalam alur normal

**8. Perlakukan perbaikan permanen sebagai item backlog dengan pemilik dan tanggal.** Tautkan masalah ke perubahan atau item kerja yang membawa perbaikan, dan tampilkan perbaikan di papan yang sama dengan pekerjaan fitur. Prioritaskan dengan aturan yang disepakati, seperti menimbang biaya insiden berulang terhadap upaya memperbaiki. Di mana perbaikan butuh perubahan, jalur perubahan standar sebaiknya cepat untuk koreksi berisiko rendah (lihat topik 4.3, Metrik pemberdayaan perubahan).

**9. Minta solusi sementara dan tanggal keluarnya bersama-sama.** Solusi sementara membeli waktu. Catat sebagai kesalahan yang diketahui, uji bahwa tim siaga dapat menemukan dan menjalankannya, dan tetapkan tanggal tinjauan untuk perbaikan. Porsi hanya-solusi-sementara lalu menjadi daftar keputusan, bukan tumpukan utang yang diam (lihat topik 4.6, Utang teknis dan kesalahan yang diketahui).

### Periksa bahwa perbaikan berhasil

**10. Ikuti setiap perbaikan dengan jendela kekambuhan.** Setelah perbaikan tayang, awasi insiden yang cocok selama jendela yang dinyatakan, dan laporkan porsi perbaikan yang bertahan menurut kohort kuartalan. Kekambuhan adalah hal terdekat dengan ukuran hasil yang dimiliki praktik ini. Jika tinggi, tanyakan apakah sebab ditemukan atau hanya penyumbang, dan buka kembali analisis.

**11. Ukur pemakaian ulang kesalahan yang diketahui di tempat penanggap bekerja.** Hitung seberapa sering kesalahan yang diketahui atau solusi sementaranya dipakai ketika insiden yang cocok tiba. Tingkat pemakaian ulang rendah dengan banyak kesalahan yang diketahui biasanya berarti entri sulit ditemukan, usang, atau ditulis untuk analis dan bukan penanggap. Perbaiki artikel dan penempatannya sebelum menambah lebih banyak (lihat topik 3.6, Metrik manajemen pengetahuan).

### Jaga angka tetap jujur

**12. Tampilkan kohort dan catatan di samping setiap bagan.** Catat definisi, campuran kode penutupan, dan perubahan aturan pada bagan itu sendiri. Kohort kuartalan masalah yang diperbaiki menunjukkan kekambuhan tanpa mencampur pekerjaan lama dan baru. Pasangkan setiap hitungan dengan ukuran hasil agar tak ada angka berdiri sendiri (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Masalah dibuka dan ditutup | Membuka banyak catatan remeh; memecah satu masalah menjadi beberapa; menutup catatan sebagai duplikat atau “tidak dapat direproduksi” untuk membersihkan daftar | Campuran kode penutupan; tingkat kekambuhan pasca-perbaikan; sampel catatan tertutup dibaca tiap kuartal |
| Usia backlog masalah | Menutup catatan tertua tanpa perbaikan; membuka kembali sebagai catatan baru untuk mengatur ulang jam; mengklasifikasi ulang masalah sebagai permintaan | Tautkan catatan baru ke aslinya dan laporkan usia dari catatan pertama; daftar penutupan menurut alasan; tinjauan risiko yang diterima |
| Tingkat tautan insiden-ke-masalah | Menautkan setiap insiden ke masalah serba ada yang samar untuk menaikkan tingkat | Porsi tautan yang menunjuk lima masalah terbesar; sampel tautan diperiksa untuk kecocokan nyata; kekambuhan gejala tertaut |
| Waktu menuju akar masalah | Mencatat sebab cepat dan dangkal untuk menghentikan jam; menamai “kesalahan manusia”; melewati peninjau kedua | Tingkat kekambuhan pasca-perbaikan; taksonomi sebab dengan “kesalahan manusia” tidak diterima sendirian; tinjauan sampel sebab terhadap bukti |
| Tingkat pemakaian ulang kesalahan yang diketahui | Menghitung tautan yang ditambahkan setelah insiden ditutup; menambah kesalahan yang diketahui ke setiap insiden suatu layanan | Waktu antara penutupan insiden dan tautan; umpan balik penanggap apakah entri membantu; tinjauan entri yang tak dipakai dalam 90 hari |
| Waktu menuju perbaikan permanen | Menandai perubahan terimplementasi sebelum perbaikan diverifikasi; menutup sebagai risiko diterima untuk menghindari pekerjaan | Tingkat kekambuhan pasca-perbaikan; daftar risiko diterima dengan pemilik dan tanggal tinjauan; langkah verifikasi sebelum jam berhenti |
| Tingkat kekambuhan pasca-perbaikan | Mendefinisikan gejala sempit agar kekambuhan tidak cocok; melebarkan jendela penutupan agar perbaikan jatuh di kohort lebih awal; menunda penautan | Taksonomi sebab ditinjau seseorang di luar tim pemilik; tingkat tautan insiden; jendela tetap dinyatakan di muka |
| Porsi hanya-solusi-sementara | Menjadwalkan perbaikan placeholder tanpa tanggal nyata; memindahkan masalah ke risiko diterima; menurunkan prioritas masalah | Usia perbaikan terjadwal yang telah tergelincir; daftar risiko diterima ditinjau dengan pemilik eksekutif bernama; biaya insiden berulang menurut masalah |

Pembacaan yang sehat tampak tenang dan sedikit membosankan. Hitungan dibuka dan ditutup kira-kira seirama, masalah terbuka tertua masing-masing punya keputusan tercatat, porsi perbaikan yang bertahan tinggi dan garis kohort stabil, dan kesalahan yang diketahui dipakai oleh orang yang bertemu gejalanya. Pola peringatan adalah hitungan tertutup yang panjang dan rapi di samping insiden yang terus kembali. Ketika angka aktivitas tampak sempurna dan pengguna masih terkena kerusakan yang sama, percayai pengguna.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Catatan masalah formal untuk insiden berulang dan besar | Pemilik, riwayat, dan tautan ke perbaikan yang jelas; mendukung audit | Beban proses; catatan dapat basi |
| Memperbaiki sebab di backlog tim tanpa catatan masalah | Cepat, ringan, dekat dengan pekerjaan | Pola lintas tim tak terlihat; tak ada kesalahan yang diketahui bersama |
| Kode penutupan ketat dan kohort kuartalan | Pandangan hasil yang jujur; menahan hitungan yang rapi | Lebih lambat dibaca; butuh disiplin dalam entri data |
| Menghitung masalah ditutup sebagai target | Mudah dijelaskan dan diplot | Mengundang penutupan demi hitungan; menghargai masalah kecil |
| Pelacakan kekambuhan untuk masalah yang diperbaiki | Ukuran terdekat apakah berhasil | Butuh pencocokan gejala yang baik dan jendela cukup panjang |
| Pelacakan pemakaian ulang kesalahan yang diketahui | Menunjukkan apakah pengetahuan membantu penanggap | Bergantung pada penanggap menautkan entri; dapat dimanipulasi |

Tim yang memperbaiki sebab dengan cepat di backlog sendiri tetap sebaiknya mencatat sebab di tempat organisasi yang lebih luas dapat melihat, agar tim lain yang bertemu gejala sama diuntungkan. Investasikan lebih dulu pada tautan antara insiden dan masalah dan pada jendela kekambuhan. Kedua bagian itu membuat setiap ukuran lain dapat ditafsirkan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Tiga insiden mana yang paling sering kita perbaiki kuartal lalu, dan apa yang menghalangi kita memperbaiki sebabnya?**
Daftar insiden berulang dari service desk atau alat insiden dan urutkan menurut jumlah kejadian. Untuk masing-masing, tanyakan apa hambatannya: tak ada waktu penyelidikan, tak ada sebab yang disepakati, perbaikan bersaing dengan fitur, atau perbaikan yang butuh tim lain. Fasilitator sebaiknya mencari hambatan yang berulang di ketiganya, karena menunjuk pada perbaikan sistem dan bukan teknis.

**2. Ketika kita menautkan insiden ke masalah, siapa yang melakukannya, kapan, dan bagaimana kita tahu itu masalah yang benar?**
Telusuri satu insiden terbaru dari penutupan sampai tautan. Catat apakah tautan dibuat selama insiden, saat penutupan, atau dalam pembersihan kemudian. Tinjau sampel kecil tautan bersama untuk kecocokan sejati. Sepakati satu perubahan yang membuat tautan lebih mudah atau lebih andal.

**3. Berapa lama sebab yang didiagnosis menunggu perbaikannya, dan siapa yang memutuskan urutan?**
Ambil masalah dengan sebab tercatat dan lihat waktu sejak diagnosis. Tanyakan siapa yang memprioritaskannya dan aturan apa yang dipakai. Diskusi sering menunjukkan bahwa keterlambatan adalah antrean di depan backlog produk dan bukan kesulitan teknis. Sepakati bagaimana perbaikan masalah dibandingkan dengan pekerjaan fitur.

**4. Apa solusi sementara tertua kita, dan apa yang akan hilang jika kita mempertahankannya setahun lagi?**
Namai tiga solusi sementara paling lama bertahan dan apa biayanya dalam upaya manual, risiko, dan pengetahuan orang yang masih mengingatnya. Tanyakan apa yang terjadi jika orang yang tahu solusi itu tak ada. Putuskan untuk masing-masing apakah memperbaiki, menerima risiko dengan pemilik dan tanggal tinjauan, atau memensiunkan layanan.

**5. Jika masalah yang diperbaiki kembali, apakah kita mengetahuinya, dan seberapa cepat?**
Tanyakan bagaimana gejala yang kembali akan diketahui dan siapa yang akan membuka kembali analisis. Bahas apakah jendela kekambuhan cukup panjang untuk jenis kegagalan yang terlibat. Fasilitator sebaiknya membantu kelompok menyepakati jendela dan aturan pencocokan, dan memutuskan tim mana yang meninjau kecocokan agar tim pemilik tidak menilai pekerjaannya sendiri.

**6. Apakah orang yang siaga memakai kesalahan yang diketahui kita, dan apa yang akan membuat mereka meraihnya?**
Tanyakan penanggap kapan terakhir mereka mencari kesalahan yang diketahui dan apa yang mereka temukan. Lihat di mana entri berada, bagaimana dijuduli, dan apakah menyatakan apa yang dilakukan lebih dulu. Pilih satu entri untuk ditulis ulang bersama penanggap dan ujilah pada pekan siaga berikutnya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki sebagian besar perbaikan permanen, dan merasakan tarikan pekerjaan fitur. Mereka diuntungkan dengan melihat biaya insiden kerusakan berulang di samping upaya memperbaikinya, dan memiliki tempat yang jelas untuk item perbaikan di backlog. Mereka sebaiknya menolak memperlakukan pekerjaan masalah sebagai interupsi dan sebagai gantinya mencadangkan porsi kapasitas yang terlihat untuknya. Retrospektif adalah tempat alami untuk menemukan pola dan membuka masalah (lihat topik 2.1, Ukuran alur).

### Tim layanan dan operasi

Tim operasi melihat gejala berulang lebih dulu dan menanggung biayanya dalam panggilan dan kerja manual. Mereka menyimpan catatan masalah dan kesalahan yang diketahui, menjalankan tinjauan pola, dan memeriksa bahwa tautan dibuat. Risikonya adalah menghabiskan upaya pada catatan alih-alih menyingkirkan sebab. Mereka sebaiknya menjaga kode penutupan tetap kecil, menjadikan kesalahan yang diketahui hal pertama yang dilihat penanggap, dan menyerahkan perbaikan kepada tim pemilik dengan bukti terlampir.

### Kepemimpinan dan tata kelola

Pemimpin memutuskan apakah pekerjaan keandalan menang melawan fitur, dan menetapkan insentif untuk apa yang dicatat. Mereka sebaiknya meminta kekambuhan menurut kohort dan masalah terbuka tertua sebelum meminta hitungan, dan memperlakukan risiko diterima sebagai keputusan yang butuh pemilik bernama dan tanggal tinjauan. Melaporkan backlog yang turun tanpa kekambuhan menghargai penutupan. Tata kelola sebaiknya melihat tren dan keputusan, bukan tabel liga tim (lihat topik 4.6, Utang teknis dan kesalahan yang diketahui).

### Pelanggan dan pengguna

Pengguna menilai manajemen masalah dari satu hal: apakah hal yang sama terus salah. Mereka tidak melihat catatan masalah, dan tidak peduli berapa banyak yang ditutup. Di mana perjanjian mengizinkan, beri tahu pelanggan tentang masalah yang diketahui, solusi sementara, dan tanggal perbaikan diharapkan, lalu laporkan kembali saat mendarat. Perbaikan yang diumumkan dan dikirim membangun lebih banyak kepercayaan daripada yang diam-diam.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional mendukung aplikasi penjadwalan klinis yang dipakai bangsal dan klinik rawat jalan. Tim produk membangun dan menjalankan aplikasi, tim infrastruktur menjalankan platform, dan service desk menerima panggilan. Semua angka dalam contoh ini bersifat ilustratif.

Dalam tinjauan kuartalan kepala departemen memperhatikan bahwa dasbor masalah tampak sangat baik: 46 masalah ditutup terhadap 31 dibuka, dan masalah terbuka tertua berusia 140 hari. Manajer bangsal masih mengeluh bahwa layar penjadwalan membeku saat pergantian shift. Pemilik layanan meminta tingkat tautan insiden-ke-masalah dan tingkat kekambuhan pasca-perbaikan, yang belum ada di dasbor.

Data menceritakan kisah berbeda. Campuran kode penutupan menunjukkan bahwa 22 dari 46 penutupan adalah “tidak dapat direproduksi” atau “duplikat.” Tingkat tautan untuk insiden prioritas tinggi adalah 38 persen. Insiden pembekuan dicatat dalam empat kategori, sehingga tak ada pola yang terlihat. Setelah sampel 30 insiden ditautkan ulang dengan tangan, 17 di antaranya menunjuk satu sebab: kunci basis data yang dipegang pekerjaan malam yang meluber ke shift pagi. Kekambuhan untuk masalah yang diperbaiki pada kuartal sebelumnya adalah 27 persen, lebih tinggi dari yang diduga siapa pun.

Tim membuat tiga keputusan. Pertama, taksonomi sebab dan gejala mendapat entri “pembekuan penjadwalan,” dan menautkan masalah atau “tidak ditemukan” menjadi langkah wajib pada penutupan insiden. Kedua, masalah pekerjaan malam pindah dari backlog infrastruktur ke papan tim produk dengan pemilik dan tanggal target, dan solusi sementara (memulai ulang terjadwal setelah pekerjaan) dicatat sebagai kesalahan yang diketahui dan diuji bersama service desk. Ketiga, dasbor mengganti hitungan tertutup dengan tiga angka: porsi perbaikan yang bertahan setelah 90 hari, median dan persentil ke-85 waktu dari sebab tercatat ke perbaikan, dan masalah terbuka tertua beserta keputusannya.

Delapan pekan kemudian kunci disingkirkan lewat perubahan pada pekerjaan itu. Insiden dalam kategori pembekuan turun dari sekitar sembilan per bulan menjadi dua, dan pemakaian ulang kesalahan yang diketahui naik menjadi 71 persen untuk gejala yang tersisa, sebagian besar karena service desk kini menemukan entri memulai ulang. Risiko manipulasi yang ditangkap tim ada pada kebiasaan mereka sebelumnya sendiri: menutup catatan sebagai “tidak dapat direproduksi” ketika insiden jatuh di luar jam kerja. Campuran kode penutupan, sampel catatan tertutup yang dibaca tiap kuartal, dan kohort kekambuhan kini bertindak sebagai pagar pembatas. Tak ada yang diperingkat, dan tinjauan mendaftar layanan dan keputusan, bukan analis.

## Sudut pandang sektor

**Startup.** Jarang ada proses masalah terpisah. Tim memperbaiki sebab secara langsung, dan risikonya adalah tak seorang pun ingat mengapa. Simpan daftar satu halaman insiden berulang dan sebabnya, tautkan perbaikan ke pelacak isu, dan tinjau daftar tiap bulan. Ukur kekambuhan dan usia item tertua; lewati kode penutupan formal sampai tim tumbuh.

**Bisnis kecil.** Satu orang TI atau penyedia layanan terkelola mungkin menjalankan semuanya. Minta penyedia catatan masalahnya dan kategori insiden di baliknya, dan definisi tertulis “terselesaikan.” Daftar pendek lima isu berulang teratas, dengan pemilik bernama dan tanggal masing-masing, mengungguli alat yang berat. Ekspor catatan secara berkala untuk menghindari keterkuncian.

**Perusahaan besar.** Banyak layanan dan pemasok menciptakan kebutuhan terbesar akan definisi bersama. Sepakati taksonomi sebab, kode penutupan, dan jendela kekambuhan lintas tim, namai pemilik masalah menurut layanan, dan laporkan menurut layanan dan kohort. Di mana pemasok memegang perbaikan, lacak respons pemasok terhadap perjanjian (lihat topik 8.4, Metrik pemasok dan kontrak) dan eskalasikan lewat jalur terdokumentasi.

**Pemerintah dan sektor publik.** Audit, kendali perubahan, dan pengadaan dapat memperpanjang jalur dari sebab ke perbaikan, jadi jam waktu-ke-perbaikan sebaiknya menunjukkan di mana keterlambatan berada: penyelidikan, persetujuan, pengadaan, atau penjadwalan. Risiko diterima butuh pemilik tercatat dan tanggal tinjauan yang bertahan terhadap audit. Aturan retensi dan privasi berlaku pada catatan insiden dan masalah, terutama di mana data klinis atau warga muncul di dalamnya.

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya terdiri dari tiga bagian. Yang pertama adalah waktu penyelidikan: orang dengan keterampilan dan akses untuk menganalisis insiden, yang bersaing dengan pekerjaan lain mereka. Yang kedua adalah perbaikan itu sendiri, disampaikan lewat backlog dan proses perubahan. Yang ketiga adalah biaya mencatat dan melaporkan: menautkan insiden, menjaga taksonomi, menjalankan tinjauan pola, dan merawat basis data kesalahan yang diketahui. Biaya ini sebagian besar waktu orang, jadi hitung jam.

Imbal hasil muncul sebagai insiden yang berhenti kambuh, lebih sedikit panggilan dan upaya solusi sementara manual, penanganan insiden yang lebih singkat karena penanggap menemukan kesalahan yang diketahui, dan lebih sedikit eskalasi ke insinyur. Tak ada angka universal yang berlaku, jadi perkirakan sendiri. Untuk insiden berulang, kalikan kejadian per tahun dengan upaya penanganan rata-rata dan estimasi dampak bisnis per kejadian, lalu bandingkan dengan upaya memperbaikinya. Tinjau estimasi bersama pemilik layanan, nyatakan sebagai estimasi, dan tinjau kembali setelah jendela kekambuhan menunjukkan apa yang terjadi. Manajemen masalah membayar kembali paling baik pada beberapa sebab yang menghasilkan sebagian besar beban insiden, yang ditemukan cepat oleh tampilan Pareto.

## Anti-pola dan jebakan

- **Menutup sebagai target.** Tujuan untuk masalah yang ditutup menghargai catatan remeh dan penutupan dini. Laporkan ukuran hasil lebih dulu dan tampilkan campuran kode penutupan.
- **Catatan masalah sebagai kuburan.** Catatan terbuka tanpa pemilik, tanggal, atau keputusan. Tinjau daftar tertua secara berkala dan wajibkan keputusan untuk tiap item.
- **Berhenti pada “kesalahan manusia.”** Itu menamai siapa yang menyentuh sistem dan bukan mengapa sistem mengizinkan kegagalan. Terima sebab hanya bila menamai kondisi yang dapat diubah.
- **Tidak memperbaiki apa pun sampai akar masalah pasti.** Kegagalan kompleks mungkin tak punya sebab tunggal. Terapkan solusi sementara dan perbaikan yang paling didukung bukti, lalu awasi kekambuhan.
- **Solusi sementara tanpa jalan keluar.** Solusi sementara tanpa tanggal tinjauan menjadi permanen. Catat pemilik dan tanggal saat kesalahan yang diketahui dibuat.
- **Tautan insiden yang lemah.** Tautan yang hilang atau sembarangan membuat kekambuhan tak terlihat. Jadikan penautan bagian penutupan insiden dan ambil sampel tautan.
- **Pekerjaan masalah di luar backlog.** Perbaikan yang hidup di antrean terpisah menunggu selamanya. Taruh item perbaikan di papan tim pemilik dan prioritaskan terhadap fitur.
- **Membandingkan analis atau tim menurut catatan yang ditutup.** Itu menghargai layanan mudah dan mengundang manipulasi. Bandingkan layanan dari waktu ke waktu terhadap riwayatnya sendiri, dan baca kohort.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Identifikasi dan penautan masalah | Masalah dibuka hanya setelah gangguan besar; tak ada tautan insiden | Beberapa tim menautkan insiden; kategori berbeda antartim | Taksonomi dan kode penutupan bersama; tautan dibuat saat penutupan insiden | Tingkat tautan dan mutu kecocokan disampel dan ditinjau | Pola terdeteksi lintas tim dan pemasok, dengan kesalahan yang diketahui bersama |
| Akar masalah dan kesalahan yang diketahui | Sebab dicatat dalam teks bebas, jika ada | Kesalahan yang diketahui disimpan beberapa tim di tempat berbeda | Satu basis data kesalahan yang diketahui; tinjauan sebab oleh orang kedua | Waktu menuju akar masalah dan pemakaian ulang kesalahan yang diketahui diplot tren dan ditindaklanjuti | Penanggap, pemasok, dan pelanggan berkontribusi dan memakai entri bersama |
| Pengiriman perbaikan | Perbaikan terjadi ketika seseorang punya waktu | Perbaikan dilacak dalam daftar tim sendiri | Perbaikan ditautkan ke item backlog atau perubahan dengan pemilik dan tanggal | Waktu menuju perbaikan permanen ditinjau, dengan kapasitas dicadangkan untuknya | Prioritas perbaikan ditetapkan bersama dengan peta jalan produk dan pemasok |
| Hasil dan pembelajaran | Hitungan catatan dilaporkan | Usia backlog dilaporkan di beberapa tinjauan | Kekambuhan pasca-perbaikan dan porsi hanya-solusi-sementara dilaporkan dengan definisi | Kohort dipasangkan dengan pagar pembatas dan dipakai dalam keputusan pendanaan | Definisi direvisi ketika tidak lagi memberi masukan bagi keputusan; perbaikan rutin |

## Daftar periksa

- [ ] Register metrik mendefinisikan masalah, kesalahan yang diketahui, dan setiap kode penutupan.
- [ ] Penutupan insiden mencakup tautan ke masalah, kesalahan yang diketahui, atau “tidak ditemukan.”
- [ ] Taksonomi sebab dan gejala ada, dengan definisi dan contoh.
- [ ] Setiap masalah punya pemilik, pemicu, dan tanggal keputusan.
- [ ] Waktu menuju akar masalah dan waktu menuju perbaikan permanen diukur terpisah, dengan persentil.
- [ ] Setiap perbaikan permanen ditautkan ke item backlog atau perubahan dengan pemilik.
- [ ] Setiap solusi sementara punya pemilik dan tanggal tinjauan.
- [ ] Kekambuhan pasca-perbaikan dilacak menurut kohort kuartalan dengan jendela yang dinyatakan.
- [ ] Pemakaian ulang kesalahan yang diketahui diukur di tempat penanggap bekerja.
- [ ] Masalah terbuka tertua ditinjau secara berkala, dan setiap keputusan dicatat.
- [ ] Sampel catatan tertutup dibaca tiap kuartal untuk memeriksa kode penutupan dan sebab.
- [ ] Laporan menggambarkan layanan dan tim, dan tak ada tabel yang memeringkat individu.

## Prompt AI

**Temukan kandidat masalah dalam sekumpulan insiden.**

```text
Berikut ekspor insiden untuk [service or team] dari [start date] sampai [end
date]: [paste incident fields such as id, opened time, category, short
description, resolution note]. Kelompokkan insiden yang mungkin berbagi sebab
yang mendasari, jelaskan bukti untuk tiap kelompok, dan peringkatkan kelompok
menurut hitungan kejadian dan menurut [impact measure, for example hours of user
impact]. Tandai kelompok yang buktinya lemah. Jangan mengarang sebab, hitungan,
atau nilai acuan. Daftar asumsi Anda dan data tambahan yang akan menaikkan
keyakinan Anda.
```

**Tinjau kode penutupan dan catatan masalah.**

```text
Berikut [number] catatan masalah tertutup untuk [service or team]: [paste id,
closing code, recorded cause, fix reference, closing date]. Periksa setiap
catatan untuk kode penutupan yang tidak cocok dengan teksnya, sebab yang menamai
orang dan bukan kondisi, dan perbaikan tanpa tautan. Ringkas pola dan sarankan
tiga pertanyaan untuk peninjau. Jangan memeringkat orang atau mengarang fakta
tentang catatan. Daftar asumsi Anda.
```

**Rancang ukuran kekambuhan.**

```text
Kami ingin mengukur apakah masalah yang diperbaiki tetap diperbaiki untuk
[service or team]. Alat kami [ITSM tool, deployment tool], kategori insiden kami
[list], dan kode penutupan kami [list]. Usulkan definisi, rumus, awal dan akhir
jam, aturan pencocokan gejala, jendela kekambuhan, dan pengecualian, dengan tata
letak bagan yang menunjukkan kohort kuartalan. Sarankan bagaimana ia dapat
dimanipulasi dan pagar pembatas untuk tiap kasus. Tanyakan kepada saya ambang
yang Anda butuhkan alih-alih mengarangnya. Daftar asumsi Anda.
```

**Siapkan tinjauan keputusan atas masalah yang menua.**

```text
Berikut masalah terbuka yang lebih tua dari [number] hari untuk [service or
team]: [paste id, age, priority, owner, last update, workaround status]. Susun
agenda untuk tinjauan [length] menit tempat setiap item menerima salah satu dari
tiga keputusan: perbaiki dengan tanggal, terima risiko dengan pemilik bernama dan
tanggal tinjauan, atau tutup dengan alasan. Sarankan bukti yang dibawa untuk tiap
keputusan. Jangan mengarang biaya atau hasil. Daftar asumsi Anda dan pertanyaan
yang harus saya jawab lebih dulu.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan ukuran insiden, perubahan, dan pengetahuan yang menjadi tumpuan metrik masalah, serta pagar pembatas untuk dipasangkan dengan masing-masing.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa metrik masalah yang baru atau disunting menyatakan jam, pengecualian, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Ukuran manajemen masalah adalah kekambuhan: apakah insiden yang tertaut pada masalah berhenti kembali.
- Waktukan tahap secara terpisah, dari catatan ke sebab tercatat dan dari sebab ke perbaikan yang berjalan di produksi.
- Tautkan insiden ke masalah saat penutupan, sepakati cara gejala dicocokkan, dan ambil sampel tautan.
- Solusi sementara adalah tahap dengan pemilik dan tanggal tinjauan, dan porsi hanya-solusi-sementara menunjukkan berapa banyak risiko yang dipikul.
- Taruh perbaikan permanen di backlog tim pemilik, dan laporkan ukuran hasil sebelum hitungan catatan.
- Gambarkan layanan, kohort, dan keputusan. Jangan pernah memeringkat analis atau tim menurut masalah yang ditutup.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
