# Metrik pekerjaan berulang dan siaga

**Layanan hanya seandal rotasi yang merawatnya, jadi ukur interupsi, beban malam hari, dan porsi waktu yang hilang untuk pekerjaan manual berulang bagi rotasi secara keseluruhan, dan pakai angka itu untuk mendanai pencegahan dan otomatisasi, tidak pernah untuk membandingkan orang.**

## Gambaran umum dan motivasi

Keandalan sering digambarkan dalam istilah sistem: ketersediaan, latensi, tingkat galat. Di balik setiap layanan yang punya pengguna di tengah malam ada sistem manusia yang merespons ketika sistem gagal. Sistem manusia itu punya batas. Rotasi yang terlalu sering dipanggil, membangunkan terlalu banyak orang, atau menghabiskan sebagian besar pekannya pada tugas manual berulang akan melambat, membuat lebih banyak kesalahan, dan akhirnya kehilangan orang. Metrik lain di Bagian 5 dapat tampak sehat tepat sampai titik ketika orang yang menahannya bersama pergi.

Dua gagasan mengorganisasi topik ini. Yang pertama adalah pekerjaan [siaga](https://en.wikipedia.org/wiki/On-call): rotasi orang yang dapat dijangkau dan siap merespons peringatan di luar pola kerja normal. **Panggilan (page)** adalah peringatan yang menginterupsi penanggap, biasanya lewat pager, panggilan telepon, atau notifikasi dorong. **Shift** adalah satu rentang tugas siaga, misalnya sehari, sepekan, atau semalam. **Rotasi** adalah kelompok orang yang bergiliran mengambil shift. Gagasan kedua adalah **toil**, istilah dari [rekayasa keandalan situs](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), disiplin menjalankan layanan dengan metode rekayasa perangkat lunak. Dalam buku Google *Site Reliability Engineering*, toil adalah pekerjaan operasional yang terkait menjalankan layanan produksi yang cenderung manual, berulang, dapat diotomatisasi, taktis, tanpa nilai bertahan, dan tumbuh seiring layanan. Ia tidak sama dengan overhead seperti rapat, dan bukan sekadar pekerjaan yang tak disukai seseorang.

ITIL 4 tidak punya praktik bernama “manajemen toil.” Materinya berada di beberapa praktik. [Manajemen insiden](https://en.wikipedia.org/wiki/Incident_management) dan manajemen pemantauan dan peristiwa menghasilkan panggilan. Manajemen masalah menyingkirkan sebab yang terus menghasilkannya. Manajemen permintaan layanan dan manajemen deployment menghasilkan banyak pekerjaan manual berulang. Manajemen tenaga kerja dan bakat, dan perbaikan berkelanjutan, memiliki sisi manusianya. Padanan agile-nya adalah kesepakatan kerja tim tentang pekerjaan tak terencana dan laju berkelanjutan, dan kebiasaan DevOps bahwa tim yang membangun layanan juga memikul sebagian pager untuknya.

Ukuran di sini tentang beban dan keberlanjutan. Penanganan insiden milik topik lain (lihat topik 3.3, Waktu respons dan penyelesaian insiden, dan topik 3.4, Metrik insiden besar), begitu juga mutu peringatan individual (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan). Topik ini bertanya apa biaya bagi orang dalam rotasi untuk menjaga layanan tetap berjalan, dan apakah biaya itu berkelanjutan.

### Mengapa ini milik keandalan

Kelelahan punya konsekuensi operasional. [Kurang tidur](https://en.wikipedia.org/wiki/Sleep_deprivation) menurunkan pertimbangan dan waktu reaksi, dan penanggap yang lelah di awal insiden butuh waktu lebih lama mendiagnosisnya dan lebih mungkin membuat kesalahan kedua saat memperbaiki yang pertama. [Kelelahan alarm](https://en.wikipedia.org/wiki/Alarm_fatigue) adalah efek terkait dari terlalu banyak peringatan: orang berhenti memperlakukan tiap peringatan sebagai mendesak. [Kelelahan kerja (burnout)](https://en.wikipedia.org/wiki/Occupational_burnout) adalah hasil jangka panjang dari kelebihan beban berkelanjutan, dan muncul sebagai pergantian staf, sakit, dan hilangnya keterlibatan, yang lambat, mahal, dan sulit dibalikkan. Tim yang mengukur keandalan layanan tanpa mengukur keberlanjutan rotasinya hanya mengawasi efek dan mengabaikan sebagian sebab.

Topik ini menggambarkan rotasi, shift, dan layanan, dan tidak pernah memeringkat individu. Pandangan ITIL dimulai dari insiden dan layanan, pandangan SRE dari biaya waktu-orang, dan pandangan agile dari kapasitas untuk pekerjaan terencana.

## Prinsip utama

- **Ukur rotasi, bukan orang.** Laporkan beban menurut layanan, shift, dan posisi rotasi. Hitungan panggilan seseorang bergantung pada shift yang diperolehnya, dan tabel liga mengajari orang menyembunyikan interupsi.
- **Hitung kapan interupsi terjadi selain berapa lama berlangsung.** Panggilan lima menit pada pukul 03.00 dapat memakan tidur semalam.
- **Definisikan toil secara sempit dan biarkan tim mengklasifikasikannya.** Toil adalah jenis pekerjaan tertentu, bukan sinonim pekerjaan yang tak disukai orang.
- **Perlakukan beban sebagai sinyal untuk investasi.** Volume panggilan atau porsi toil yang tinggi adalah bukti bahwa layanan, alat, atau tingkat staf butuh pekerjaan.
- **Pasangkan setiap ukuran beban dengan ukuran mutu.** Lebih sedikit panggilan adalah kabar baik hanya jika insiden masih terdeteksi.
- **Tampilkan distribusi dan bagikan data dengan rotasi lebih dulu.** Shift rata-rata menyembunyikan segelintir malam yang mengerikan, dan orang yang siaga adalah hakim terbaik apakah angka cocok dengan pengalaman mereka.

## Definisi metrik

Tabel memberi himpunan inti. Setiap ukuran waktu atau hitungan menyatakan di mana ia dimulai dan berhenti dan apa yang dikecualikan. “Di luar jam kerja” harus didefinisikan sekali per rotasi sebagai jendela tertulis dalam waktu lokal, termasuk akhir pekan dan hari libur nasional, karena orang dalam rotasi terdistribusi dapat punya jam lokal berbeda.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Panggilan per shift | Jumlah panggilan yang disampaikan ke rotasi selama satu shift | Hitungan panggilan yang disampaikan antara awal shift dan akhir shift, satu hitungan per shift, setelah menggabung panggilan duplikat untuk kelompok peringatan yang sama dalam 5 menit (jendela penggabungan adalah pengaturan tim). Panggilan uji dan panggilan yang dikirim karena salah dikecualikan. Laporkan median dan persentil ke-90 lintas shift, ditambah shift tersibuk | panggilan per shift | Alat paging; jadwal siaga | Manajemen insiden; manajemen pemantauan dan peristiwa | Kebijakan pekerjaan tak terencana; laju berkelanjutan | Tinjauan mingguan, tren bulanan |
| Porsi panggilan di luar jam kerja | Porsi panggilan yang tiba di luar jendela kerja tertulis | Panggilan yang disampaikan di luar jendela kerja / semua panggilan yang disampaikan, selama periode itu. Jendela ditetapkan per rotasi dalam waktu lokal; hari libur dihitung di luar jendela | persen | Alat paging; kalender rotasi | Manajemen insiden; manajemen pemantauan dan peristiwa | Kesepakatan kerja tentang ketersediaan | Bulanan |
| Tingkat interupsi malam | Seberapa sering shift mencakup setidaknya satu panggilan dalam jendela tidur terlindungi | Shift dengan setidaknya satu panggilan dalam jendela tidur terlindungi (misalnya 22.00 sampai 07.00 lokal, ditetapkan tim) / semua shift pada periode itu. Panggilan yang diakui otomatis tanpa respons manusia dikecualikan | persen shift | Alat paging; log pengakuan | Manajemen insiden; manajemen tenaga kerja dan bakat | Laju berkelanjutan; pemeriksaan kesehatan tim | Bulanan |
| Porsi toil dari waktu | Porsi waktu kerja rotasi yang dihabiskan untuk toil | Jam yang dicatat rotasi terhadap pekerjaan yang diklasifikasikan sebagai toil / total jam kerja yang dicatat rotasi, selama satu bulan. Rapat, pelatihan, dan cuti dikecualikan dari pembilang dan penyebut. Klasifikasi mengikuti enam ciri toil, diterapkan oleh tim | persen waktu | Pengambilan sampel waktu atau label tugas di pelacak kerja; tinjauan klasifikasi tim | Perbaikan berkelanjutan; manajemen deployment; manajemen permintaan layanan | Porsi pekerjaan tak terencana; alokasi kapasitas dalam pekerjaan terencana | Bulanan, dengan tinjauan klasifikasi kuartalan |
| Toil menurut sumber | Distribusi jam toil lintas sumber bernama seperti mulai ulang manual, permintaan akses, perpanjangan sertifikat, dan triase tiket | Jam toil untuk tiap sumber / total jam toil, mendaftar lima sumber teratas dan kelompok “lainnya.” Pengecualian sama dengan porsi toil dari waktu | persen jam toil menurut sumber | Pengambilan sampel waktu atau label tugas di pelacak kerja | Manajemen masalah; manajemen permintaan layanan | Backlog item perbaikan | Kuartalan |
| Tingkat panggilan berulang | Porsi panggilan yang disebabkan kondisi yang sudah pernah memanggil rotasi dalam jendela yang dinyatakan | Panggilan yang kelompok peringatan atau kode sebabnya cocok dengan panggilan sebelumnya dalam 30 hari / semua panggilan pada periode itu. Kode sebab ditetapkan penanggap saat penutupan; kode yang tak ditetapkan dilaporkan terpisah | persen | Alat paging; kode sebab catatan insiden | Manajemen masalah; manajemen insiden | Tindakan retrospektif; backlog utang teknis | Bulanan |
| Kedalaman rotasi | Berapa banyak penanggap berkualifikasi yang berbagi pager dibandingkan dengan jumlah peran yang harus diisi | Jumlah orang yang menyelesaikan kesiapan siaga dan tersedia untuk shift / jumlah posisi shift per siklus rotasi. Cuti dan penugasan sementara mengurangi ketersediaan. Laporkan sebagai rasio per rotasi, tidak pernah per orang | rasio | Jadwal rotasi; daftar periksa kesiapan | Manajemen tenaga kerja dan bakat | Tim lintas fungsi; matriks keterampilan | Kuartalan |
| Toil yang disingkirkan | Jam toil berulang yang diambil dari pekerjaan rotasi oleh otomatisasi atau perubahan desain | Perkiraan jam toil bulanan suatu sumber sebelum perubahan dikurangi yang sama sesudah perubahan, diukur selama setidaknya dua siklus setelah penyampaian. Jam yang dihemat oleh pembersihan sekali jalan dikecualikan | jam per bulan | Pengambilan sampel waktu sebelum dan sesudah; tiket perbaikan | Perbaikan berkelanjutan; manajemen masalah | Item perbaikan disampaikan | Kuartalan |

Hitungan panggilan adalah hitungan interupsi, bukan insiden: satu insiden dapat menghasilkan selusin panggilan. Porsi toil dari waktu bergantung pada pencatatan jujur, jadi perlakukan sebagai estimasi yang disepakati.

## Rekomendasi

### Definisikan istilah sebelum menghitung

**1. Tuliskan apa yang dihitung sebagai panggilan, shift, dan di luar jam kerja.** Tim menghitung hal berbeda di bawah kata yang sama. Panggilan bisa berupa notifikasi apa pun, hanya yang mencapai manusia, atau hanya yang butuh tindakan. Pilih satu definisi, nyatakan jendela penggabungan untuk duplikat, dan catat jendela kerja dalam waktu lokal. Tanpa ini, angka akan berubah ketika alat dikonfigurasi ulang, dan tren akan menyesatkan.

**2. Sepakati apa itu toil, dengan contoh dari layanan Anda sendiri.** Mulai dari enam ciri dalam buku SRE. Tulis daftar pendek contoh dan bukan-contoh, seperti memulai ulang pekerjaan yang macet (toil), merancang alat pemulihan baru (rekayasa), dan rapat perencanaan (overhead). Tinjau daftar ketika ketidaksepakatan muncul.

**3. Pilih cara mengukur porsi toil, dan terima batasnya.** Opsi murahnya adalah pengambilan sampel waktu, label tugas di pelacak kerja, dan estimasi singkat dua mingguan. Tak satu pun tepat, jadi pilih yang beban kerjanya paling sedikit, jalankan selama satu kuartal, dan nilai tren lebih daripada nilai absolut.

### Ukur beban pada rotasi

**4. Laporkan panggilan per shift sebagai distribusi.** Shift rata-rata menyembunyikan apa yang dirasakan rotasi. Tampilkan median, persentil ke-90, dan shift tersibuk, dan tambahkan catatan tentang apa yang terjadi pada shift itu. Median yang tenang dengan ekor yang mengerikan berarti beberapa malam buruk, yang masalah berbeda dari rotasi yang terus sibuk. Lihat topik 1.6, Literasi statistik untuk metrik layanan, untuk membaca persentil.

**5. Taruh waktu di samping volume.** Porsi panggilan di luar jam kerja dan tingkat interupsi malam menunjukkan kapan beban mendarat. Lima panggilan pada jam kantor adalah gangguan; lima antara tengah malam dan 05.00 adalah biaya berbeda. Tampilkan keduanya di halaman yang sama.

**6. Lihat sebaran lintas shift, bukan lintas orang.** Rotasi tempat satu shift berulang (misalnya akhir pekan atau serah terima Senin) mengumpulkan sebagian besar panggilan butuh perbaikan berbeda dari yang bebannya merata. Laporkan porsi panggilan menurut posisi shift dan hari. Ketika data dilaporkan menurut individu bernama, harapkan dibaca sebagai peringkat, jadi jangan menghasilkan tampilan itu.

**7. Hitung beban insiden besar terpisah.** Insiden besar dapat menghasilkan lebih banyak interupsi dalam satu malam daripada bulan normal. Laporkan sebagai barisnya sendiri agar satu peristiwa tidak mendistorsi tren (lihat topik 3.4, Metrik insiden besar).

### Hubungkan beban dengan sebab dan perbaikan

**8. Tautkan panggilan ke masalah, dan lacak pengulangan.** Tingkat panggilan berulang menunjukkan berapa banyak beban berasal dari sebab yang sudah diketahui. Tingkat pengulangan tinggi adalah argumen untuk manajemen masalah, bukan untuk respons lebih cepat. Suapkan sebab berulang teratas ke backlog masalah dan catat tautannya (lihat topik 4.1, Metrik manajemen masalah, dan topik 4.6, Utang teknis dan kesalahan yang diketahui).

**9. Peringkatkan sumber toil dan serang yang terbesar.** [Bagan Pareto](https://en.wikipedia.org/wiki/Pareto_chart) jam toil menurut sumber biasanya menunjukkan beberapa sumber bertanggung jawab atas sebagian besar waktu. Pilih yang terbesar, putuskan apakah dapat dirancang hilang, diotomatisasi, atau diserahkan kepada tim yang memiliki sebabnya, dan jadwalkan seperti pekerjaan fitur. Utamakan menyingkirkan kebutuhan daripada mengotomatisasi langkah, karena langkah otomatis masih harus dirawat.

**10. Ukur toil yang disingkirkan, bukan otomatisasi yang ditulis.** Otomatisasi yang tak dipakai siapa pun tidak menyingkirkan apa pun. Ukur jam toil sebelum dan sesudah, selama setidaknya dua siklus, dan catat upaya membangun dan merawat otomatisasi. Ini imbal hasil yang jujur, dan mencegah program “otomatisasi” yang menambah skrip tanpa menyingkirkan pekerjaan. Lihat topik 3.7, Metrik swalayan dan otomatisasi, untuk adopsi otomatisasi oleh pengguna.

### Jaga sistem tetap berkelanjutan

**11. Tetapkan batas rotasi dalam kesepakatan tim, lalu awasi kedalaman rotasi.** Sepakati seberapa sering seseorang boleh siaga, berapa malam berturut-turut dapat diterima, dan istirahat apa yang menyusul malam buruk. Kedalaman rotasi menunjukkan apakah rotasi punya cukup orang berkualifikasi untuk batas yang disepakati. Rotasi yang nominalnya delapan orang tetapi efektifnya tiga, karena yang lain belum siap atau sedang cuti, tidak memenuhi batas, apa pun kata daftar jaga.

**12. Pakai angka untuk meminta sesuatu yang spesifik.** Angka beban mendukung permintaan: perubahan staf, waktu yang dipotong dari pekerjaan fitur untuk melunasi toil, perubahan ambang peringatan, atau deprecation. Nyatakan permintaan di samping angka, kalau tidak orang akan berhenti mencatat (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Panggilan per shift | Menaikkan ambang peringatan atau membungkam peringatan agar hitungan turun; menggabung peringatan tak berkaitan menjadi satu panggilan; memindahkan panggilan ke antrean tiket yang tak diawasi siapa pun | Cakupan deteksi dan insiden yang dilaporkan pelanggan yang terlewat pemantauan (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan); waktu mendeteksi (lihat topik 3.3, Waktu respons dan penyelesaian insiden) |
| Porsi panggilan di luar jam kerja | Mendefinisikan ulang jendela kerja agar lebih lebar; menjadwal ulang pekerjaan dan deployment agar panggilan bergeser ke jam kantor tanpa berkurang; mengklasifikasi ulang panggilan sebagai “urgensi rendah” | Total volume panggilan di samping porsi; jendela kerja tertulis di bawah kendali perubahan; tinjauan apa yang berpindah |
| Tingkat interupsi malam | Menunda pengakuan sampai pagi; mengakui panggilan otomatis; menghitung hanya panggilan yang mencapai manusia | Waktu mengakui menurut jam (lihat topik 3.3, Waktu respons dan penyelesaian insiden); panggilan tanpa respons manusia dilaporkan terpisah; dampak pelanggan pada malam hari |
| Porsi toil dari waktu | Mengklasifikasi ulang toil sebagai “rekayasa” atau “pekerjaan proyek”; mencatat lebih sedikit dari yang dihabiskan; melabeli hanya yang mudah digambarkan | Audit berkala item terklasifikasi oleh seseorang di luar rotasi; pandangan tim sendiri tentang bagaimana pekan terasa; porsi waktu yang dihabiskan pada pekerjaan perbaikan terencana |
| Toil menurut sumber | Memecah sumber besar menjadi beberapa kecil agar tak ada yang menonjol; membiarkan sumber tak bernama dalam “lainnya” | Batas pada kelompok “lainnya” (misalnya di bawah seperlima jam toil, pengaturan tim); pengambilan sampel item “lainnya” tiap kuartal |
| Tingkat panggilan berulang | Menutup panggilan dengan kode sebab baru setiap kali agar kecocokan terlewat; memperlebar kode sebab sampai semuanya berbeda; memperpanjang atau memperpendek jendela | Audit kode sebab pada sampel; kekambuhan kelompok peringatan yang sama lintas insiden (lihat topik 4.1, Metrik manajemen masalah) |
| Kedalaman rotasi | Menghitung orang yang belum menyelesaikan kesiapan; menghitung orang yang jarang tersedia; menggelembungkan daftar jaga | Porsi shift yang sebenarnya tercakup oleh kolam nominal; hitungan shift sebenarnya menurut posisi, dilaporkan tanpa nama; penyelesaian daftar periksa kesiapan |
| Toil yang disingkirkan | Menghitung pembersihan sekali jalan sebagai penghematan berulang; mengabaikan upaya membangun dan merawat otomatisasi; mengklaim penghematan tanpa sebelum-dan-sesudah | Jam sebelum-dan-sesudah diukur selama dua siklus; upaya perawatan otomatisasi; porsi toil dari waktu selama kuartal berikutnya |

Pembacaan yang sehat adalah rotasi yang median shift-nya tenang dan shift terburuknya jarang, dengan sedikit panggilan di malam hari, porsi panggilan berulang yang menurun, dan porsi toil yang turun karena sumber telah disingkirkan, bukan karena diklasifikasi ulang. Ia juga menunjukkan upaya untuk sampai ke sana: pekerjaan perbaikan muncul dalam rencana, didanai, dan disampaikan. Jika hitungan panggilan turun sementara pelanggan melaporkan lebih banyak insiden yang tidak tertangkap pemantauan, angka membaik dengan berpaling.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Menghitung panggilan dari alat paging | Otomatis, murah, dan sulit dibantah | Menghitung interupsi, bukan biayanya; menyetel peringatan mengubah hitungan tanpa mengubah beban |
| Pengambilan sampel waktu untuk toil | Akurasi wajar dengan upaya sedang | Butuh disiplin; sampel kecil bising |
| Pelaporan tingkat rotasi | Cocok dengan cara pekerjaan diorganisasi; aman dibagikan luas | Dapat menyembunyikan orang yang kesulitan; butuh saluran percakapan yang suportif di sampingnya |
| Batas keras pada toil (misalnya tujuan buku SRE menjaga toil di bawah 50 persen waktu) | Sinyal jelas yang memicu respons | Angka dapat dipenuhi lewat klasifikasi ulang; batas butuh dukungan manajemen |

Ketegangan sentralnya adalah antara penerimaan dan investasi. Mudah memperlakukan beban tinggi sebagai harga normal layanan penting dan meminta orang menyerapnya, dan mudah menetapkan batas yang tak ada yang berkuasa menegakkannya. Jalan keluarnya adalah memasangkan setiap ukuran dengan keputusan: ambang tempat tim berhenti dan bertindak, pemilik bernama untuk tindakan, dan tanggal untuk melihat lagi. Angka tingkat rotasi aman dan kadang terlalu kasar. Ketika seseorang kesulitan, percakapan milik orang itu dan atasannya, memakai penuturan mereka sendiri tentang pekan itu.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Seperti apa rasanya shift tersibuk kita kuartal lalu, dan apa kata angka tentangnya?**
Mulai dengan cerita sebelum bagan. Minta orang yang siaga menggambarkan shift, lalu bandingkan dengan panggilan per shift dan angka interupsi malam. Jika angka meremehkan pengalaman, cari tahu apa yang hilang, seperti panggilan tak tercatat atau pekerjaan yang dilakukan setelah panggilan. Tangkap daftar itu sebagai perbaikan pengukuran berikutnya.

**2. Apa yang akan kita sebut toil di tim kita, dan apa yang bukan?**
Taruh lima atau enam tugas terbaru di papan dan minta setiap orang mengklasifikasikannya sebagai toil, rekayasa, atau overhead terhadap enam ciri. Harapkan ketidaksepakatan, dan perlakukan sebagai berguna: ketidaksepakatan menunjukkan di mana definisi samar. Sepakati definisi kerja untuk kuartal berikutnya dan tuliskan dua contoh masing-masing. Hindari memperdebatkan apakah pekerjaan itu menyenangkan, karena pertanyaannya adalah apakah manual, berulang, dan dapat diotomatisasi.

**3. Peringatan atau tugas mana yang akan kita hapus lebih dulu jika bisa?**
Minta peringatan atau tugas berulang yang ditakuti semua orang, lalu tanyakan apa yang menghalangi kita menyingkirkannya: biaya perbaikan, pemilik yang hilang, atau keyakinan bahwa itu diperlukan. Fasilitator sebaiknya mencari pekerjaan yang murah disingkirkan dan pemiliknya tak ada di ruangan. Akhiri dengan memilih satu item untuk putaran perencanaan berikutnya.

**4. Berapa banyak orang yang sebenarnya dapat mengambil shift hari ini, dan batas apa yang rela kita komitmenkan?**
Hitung kesiapan dengan jujur: siapa yang terlatih, siapa yang tersedia, dan siapa yang punya kendala. Bandingkan hasilnya dengan ukuran rotasi nominal. Tanyakan frekuensi siaga dan jumlah malam berturut-turut berapa yang dianggap kelompok dapat diterima, lalu periksa apakah praktik saat ini memenuhinya.

**5. Jika kita memangkas hitungan panggilan separuh pada kuartal depan, bagaimana kita tahu kita tidak sekadar berhenti mendengarkan?**
Pertanyaan ini tentang pagar pembatas. Minta kelompok mendaftar cara hitungan panggilan dapat turun tanpa layanan membaik, seperti menaikkan ambang, menggabung peringatan, atau mengabaikan sumber. Lalu tanyakan apa yang akan kita lihat dalam laporan pelanggan dan ukuran deteksi jika itu terjadi. Sepakati pagar pembatas dan taruh di halaman yang sama dengan volume.

**6. Siapa yang melihat angka ini, dan apa yang kita inginkan mereka lakukan dengannya?**
Telusuri jalur ukuran beban dari rotasi ke manajer dan pemimpin. Tanyakan apa yang kemungkinan disimpulkan tiap audiens, dan apakah tampilan mana pun dapat dibaca sebagai peringkat. Sepakati bentuk yang naik ke atas: tingkat rotasi, dengan konteks, dengan permintaan terlampir. Catat kekhawatiran apa pun tentang individu yang dapat dikenali.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman menghasilkan banyak beban siaga lewat perubahan yang mereka rilis. Tim yang menjalankan apa yang mereka bangun dapat melihat hubungan antara rilis dan panggilan yang menyusul. Mereka sebaiknya menyertakan toil dan pekerjaan siaga dalam perencanaan kapasitas, menjadwalkan penyingkiran toil sebagai pekerjaan backlog biasa, dan mengawasi mutu perubahan di samping kecepatan (lihat topik 2.8, Metrik DORA).

### Tim layanan dan operasi

Tim operasi paling sering memegang pager dan melihat biaya manusia lebih dulu. Mereka sebaiknya memiliki definisi, menjalankan pengambilan sampel waktu atau pelabelan, menerbitkan angka tingkat rotasi, dan membawa sumber toil teratas dan sebab berulang kepada tim pemilik dengan bukti. Risiko mereka adalah menyerap beban diam-diam atas nama profesionalisme. Catatan malam dan pekan yang tenang dan faktual adalah permintaan bantuan yang lebih efektif daripada keluhan, dan catatan itu sebaiknya tidak pernah diubah menjadi peringkat orang yang merespons.

### Kepemimpinan dan tata kelola

Pemimpin memutuskan staf, prioritas, dan apakah pekerjaan toil didanai. Pemimpin yang membaca porsi toil tinggi sebagai kinerja buruk mengajari tim menurunkannya dengan melabeli ulang. Pemimpin yang membacanya sebagai tagihan untuk pekerjaan yang dipilih organisasi untuk tidak didanai mendapat data jujur dan rencana. Tata kelola sebaiknya mengharapkan batas pada beban rotasi dan respons terlihat ketika terlampaui (lihat topik 9.2, Metrik kepuasan dan kesejahteraan).

### Pelanggan dan pengguna

Pengguna tidak melihat rotasi, tetapi merasakan efeknya: diagnosis lebih lambat dari penanggap yang lelah, insiden berulang dari sebab yang tak diperbaiki, dan kepergian orang yang mengenal layanan. Di mana pengguna tersebar di banyak zona waktu, kebutuhan mereka di luar jam kerja membentuk rotasi, dan biaya melayani mereka adalah topik wajar untuk percakapan tingkat layanan (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan platform pesanan, layanan akun pelanggan, dan integrasi gudang. Rotasi enam insinyur dari dua tim produk dan kelompok operasi kecil berbagi shift siaga mingguan. Semua angka dalam contoh ini bersifat ilustratif.

Tinjauan bulanan menunjukkan median 9 panggilan per shift dan persentil ke-90 sebesar 31. Shift tersibuk punya 58 panggilan. Sekitar separuh panggilan tiba di luar jam kerja, dan 6 dari 8 shift pada kuartal itu mencakup panggilan antara pukul 22.00 dan 07.00. Pengambilan sampel waktu menyarankan toil memakan 55 persen waktu kerja.

Shift tersibuk bertepatan dengan kedaluwarsa sertifikat pada integrasi gudang yang memanggil rotasi 22 kali dalam satu malam. Satu peringatan ruang disk pada server batch menyumbang hampir seperempat panggilan, dan kebanyakan ditutup dengan membersihkan direktori sementara secara manual. Tingkat panggilan berulang adalah 41 persen. Tampilan Pareto menunjukkan perpanjangan sertifikat manual, pembersihan disk, dan permintaan akses memakan sebagian besar jam toil.

Tim mengambil tiga item untuk empat pekan ke depan: otomatisasi perpanjangan sertifikat, perbaiki sebab direktori sementara yang penuh, dan pindahkan permintaan akses ke formulir swalayan yang dimiliki tim identitas. Kesepakatan kerja menetapkan batas satu shift dari empat per orang dan hari istirahat setelah malam dengan tiga atau lebih panggilan. Kedalaman rotasi adalah 6 orang untuk kebutuhan yang disepakati 8, jadi dua insinyur dari tim ketiga memulai pelatihan kesiapan.

Risiko manipulasi muncul pada tinjauan berikutnya. Panggilan per shift turun menjadi median 4, dan persentil ke-90 menjadi 12. Seorang manajer senang. Seorang anggota tim menunjukkan bahwa ambang peringatan disk dinaikkan 20 poin dan server batch penuh dua kali tanpa panggilan. Insiden yang dilaporkan pelanggan tentang pesanan batch yang tertunda naik. Pagar pembatas, insiden yang dilaporkan pelanggan yang terlewat pemantauan, menangkapnya. Perubahan ambang dibalikkan, pembersihan direktori dijadwalkan sebagai perbaikan, dan tim menambah aturan bahwa setiap perubahan ambang dicatat dengan alasannya dan ditinjau setelah sebulan. Porsi toil kuartal berikutnya adalah 38 persen (ilustratif) dan dilaporkan dengan metode pengambilan sampel di sampingnya.

## Sudut pandang sektor

**Startup.** Tim kecil sering tak punya rotasi formal, jadi semua orang siaga sepanjang waktu dan biayanya tak terlihat. Hitung panggilan dan pembangunan malam di lembar kerja dan tuliskan tiga tugas berulang terbesar. Pendiri yang memikul pager sendiri adalah risiko bisnis, bukan lencana komitmen.

**Bisnis kecil.** Satu atau dua orang mungkin menjalankan seluruh TI. Ukur yang tak butuh perkakas: panggilan di luar jam, tugas yang berulang, dan cuti yang tak dapat diambil. Penyedia layanan terkelola dapat mengambil sebagian rotasi jika kontrak menyatakan waktu respons dan jam. Kedalaman rotasi sering satu, yang merupakan risiko utama.

**Perusahaan besar.** Skala membawa rotasi follow-the-sun, platform bersama, dan beberapa pemasok. Definisikan ukuran sekali, tetapkan jendela kerja lokal per wilayah, dan hindari merata-ratakan lintas rotasi dengan layanan yang sangat berbeda. Aturan ketenagakerjaan di beberapa negara membatasi tugas siaga dan mewajibkan periode istirahat, dan ini milik batas rotasi.

**Pemerintah dan sektor publik.** Layanan mungkin butuh cakupan sepanjang waktu menurut undang-undang atau kontrak, dan staf terikat pengadaan dan penggolongan. Batas rotasi dan aturan istirahat sering diatur perjanjian ketenagakerjaan, jadi ukur terhadapnya dan laporkan ketika terlampaui. Akuntabilitas publik membuat pelaporan terus terang lebih berharga dan lebih sulit: bangun saluran aman untuk data beban, dan eksplisit bahwa itu menggambarkan sistem dan staf, bukan individu (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah melindungi mutu layanan dan mempertahankan orang terampil. Penanggap yang lelah mendiagnosis lebih lambat, dan ketika orang berpengalaman pergi, pengetahuan ikut pergi. Menggantikan seseorang berbiaya nyata dalam rekrutmen, orientasi, dan keluaran berkurang selama masa belajar, dan organisasi dapat memperkirakan biaya itu dari catatannya sendiri. Toil juga mengambil kapasitas dari perbaikan. Tim yang menghabiskan sebagian besar waktunya pada operasi manual tidak dapat mengurangi insiden yang menyebabkannya.

Biaya ukuran ini sedang. Alat paging sudah menghitung panggilan, dan pengambilan sampel waktu berbiaya beberapa menit per orang per dua pekan. Biaya lebih besar adalah bertindak atas temuan: waktu rekayasa untuk menyingkirkan toil, staf untuk rotasi berkelanjutan, dan waktu tinjauan. Hitung perawatan otomatisasi sebagai biaya, karena langkah otomatis yang tak dirawat menjadi insiden besok.

Imbal hasil muncul sebagai lebih sedikit panggilan dari sebab yang diketahui, lebih sedikit interupsi malam, jam toil dikembalikan ke pekerjaan perbaikan, pergantian staf yang lebih rendah dari rotasi, dan diagnosis lebih cepat. Tak ada angka universal yang berlaku, jadi perkirakan sendiri. Untuk sumber toil, kalikan jam bulanan dengan biaya per jam penuh yang disepakati dengan keuangan, bandingkan dengan upaya menyingkirkannya, dan tinjau setelah dua siklus. Untuk keberlanjutan rotasi, catat kepergian dan ketidakhadiran panjang dari rotasi dan bandingkan dengan ukuran beban dari waktu ke waktu, memperlakukan hubungan itu sebagai hipotesis untuk diuji, bukan sebab terbukti. Di mana angka dibutuhkan, nyatakan sebagai estimasi dan tunjukkan masukannya (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Memeringkat orang menurut panggilan.** Itu mengubah ukuran sistem menjadi skor kinerja dan mengajari penanggap menghindari shift dan menyembunyikan interupsi. Laporkan menurut rotasi, posisi shift, dan layanan.
- **Memangkas panggilan dengan membungkam peringatan.** Hitungan turun dan deteksi melemah. Pasangkan volume dengan deteksi dan insiden yang dilaporkan pelanggan, dan tinjau setiap perubahan ambang.
- **Menyebut semuanya toil.** Definisi begitu lebar sehingga mencakup rapat dan masalah sulit menghancurkan sinyal. Pakai enam ciri dan simpan daftar contoh.
- **Target toil tanpa kewenangan di baliknya.** Batas yang tak dapat memicu keputusan menjadi angka yang diperdebatkan orang. Sepakati di muka apa yang terjadi ketika terlampaui dan siapa yang memutuskan.
- **Mengotomatisasi sebelum memahami.** Otomatisasi dapat membakukan proses buruk dan menambah perawatan. Tanyakan dulu apakah kebutuhan dapat dirancang hilang, dan ukur toil yang disingkirkan sesudahnya.
- **Merata-ratakan lintas layanan yang tak sama.** Rata-rata lintas layanan stabil dan layanan rapuh tidak menggambarkan keduanya. Tampilkan tiap layanan dan rotasi terpisah.
- **Mengukur dan tidak bertindak.** Angka beban tanpa respons mengajari orang bahwa data tidak penting. Lampirkan keputusan, pemilik, dan tanggal tinjauan pada setiap temuan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan data | Panggilan dan toil digambarkan menurut perasaan; tak ada definisi bersama | Beberapa rotasi menghitung panggilan; toil dibahas tetapi tak diukur | Satu definisi tertulis panggilan, shift, di luar jam kerja, dan toil; data paging dikumpulkan oleh alat | Distribusi dan waktu diplot tren; toil disampel tiap bulan dan diaudit | Definisi ditinjau lintas tim dan pemasok; upaya pengambilan sampel disesuaikan dengan nilai jawabannya |
| Keberlanjutan rotasi | Informal; segelintir orang yang sama menyerap pager | Daftar jaga ada; batas dibahas tetapi tak tertulis | Batas tertulis untuk frekuensi dan istirahat; kedalaman rotasi diketahui | Batas dipantau dan pelanggaran ditinjau dengan tindakan | Rotasi dibagi antartim dan pemasok, dan beban diseimbangkan seiring layanan berubah |
| Pemakaian angka | Dipakai untuk menyalahkan atau diabaikan | Ditunjukkan kepada manajer | Ditunjukkan kepada rotasi lebih dulu, dengan keputusan yang didukungnya | Dipasangkan dengan pagar pembatas dan ditinjau pada irama yang berujung pada perubahan yang didanai | Dibagikan dengan pemimpin dan mitra untuk merencanakan staf dan lingkup layanan |

## Daftar periksa

- [ ] Panggilan, shift, jendela di luar jam kerja, dan jendela penggabungan didefinisikan secara tertulis.
- [ ] Toil punya definisi tertulis dengan contoh dan bukan-contoh dari layanan kami sendiri.
- [ ] Panggilan per shift dilaporkan sebagai median, persentil tinggi, dan shift tersibuk.
- [ ] Porsi panggilan di luar jam kerja dan tingkat interupsi malam dilaporkan di samping volume.
- [ ] Beban dilaporkan menurut rotasi, posisi shift, dan layanan, tidak pernah menurut orang bernama.
- [ ] Porsi toil dari waktu disampel menurut jadwal, dengan metode tertulis.
- [ ] Lima sumber toil teratas dan sebab panggilan berulang teratas ada di backlog perbaikan.
- [ ] Batas rotasi dan aturan istirahat ada dalam kesepakatan tim, dan kedalaman rotasi diperiksa tiap kuartal.
- [ ] Setiap ukuran beban punya pagar pembatas di halaman yang sama, termasuk deteksi dan insiden yang dilaporkan pelanggan.
- [ ] Setiap tinjauan berakhir dengan keputusan, pemilik, dan tanggal.
- [ ] Perubahan ambang dan peringatan dicatat dengan alasan dan ditinjau setelah sebulan.

## Prompt AI

**Tinjau beban rotasi dan cari pola.**

```text
Saya membantu menjalankan rotasi siaga untuk [service or group of services].
Rotasi punya [number] orang dan panjang shift [length]. Jendela kerja kami
[hours and time zone], dan jendela tidur terlindungi kami [hours]. Berikut data
paging teranonimkan untuk [period], dengan kolom [list columns]:

[paste data with names removed]

Gambarkan distribusi panggilan per shift, porsi panggilan di luar jam kerja, dan
porsi shift dengan interupsi malam. Tunjukkan shift tersibuk, kelompok peringatan
berulang, dan pola apa pun menurut hari atau posisi shift. Laporkan hanya di
tingkat rotasi dan layanan, tidak pernah menurut orang. Jangan mengarang nilai
acuan atau target. Daftar asumsi Anda dan apa yang tidak dapat Anda tentukan dari
data.
```

**Klasifikasikan tugas sebagai toil, rekayasa, atau overhead.**

```text
Tim kami menjalankan [service]. Kami mendefinisikan toil sebagai pekerjaan yang
manual, berulang, dapat diotomatisasi, taktis, tanpa nilai bertahan, dan tumbuh
seiring layanan. Berikut daftar tugas terbaru dengan perkiraan jam: [paste list].

Untuk setiap tugas, katakan apakah cocok toil, rekayasa, atau overhead, dan
namai mana dari enam ciri yang dipenuhi atau terlewat. Tandai tugas perbatasan
dan katakan informasi tambahan apa yang akan menyelesaikannya. Sarankan
bagaimana tiap sumber toil dapat disingkirkan lewat desain, diotomatisasi, atau
diserahkan kepada tim pemilik, tanpa mengarang penghematan. Daftar asumsi Anda
dan pertanyaan untuk tim.
```

**Susun vektor manipulasi dan pagar pembatas untuk metrik beban kita.**

```text
Kami melaporkan metrik siaga dan toil ini untuk [rotation name]: [list metrics
with definitions]. Ditunjukkan kepada [audience] untuk mendukung [decision].
Data kami berasal dari [paging tool, work tracker, survey].

Untuk setiap metrik, daftar cara realistis ia dapat membaik tanpa rotasi menjadi
lebih baik, dan usulkan metrik atau praktik pagar pembatas yang akan
mengungkapnya. Lalu katakan bagaimana pagar pembatas itu sendiri dapat
dimanipulasi. Jangan mengarang nilai acuan. Daftar asumsi Anda dan definisi apa
pun yang harus saya perketat.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik terkait dan pagar pembatas saat Anda menambahkan ukuran siaga atau toil ke dasbor.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penyuntingan topik ini menjaga setiap metrik dipasangkan dengan vektor manipulasi dan pagar pembatas.

## Poin penting

- Ukur beban pada rotasi, menurut shift, layanan, dan waktu hari, dan jangan pernah memeringkat orang di dalamnya.
- Hitung kapan interupsi terjadi selain berapa banyak, karena panggilan malam berbiaya lebih daripada panggilan jam kantor.
- Definisikan toil secara sempit memakai enam cirinya, perkirakan porsi waktunya dengan metode sederhana, dan nilai tren.
- Tautkan panggilan dan sumber toil ke pekerjaan masalah dan ke perubahan otomatisasi atau desain, dan ukur toil yang benar-benar disingkirkan.
- Pasangkan setiap ukuran beban dengan pagar pembatas seperti deteksi dan insiden yang dilaporkan pelanggan, agar angka lebih rendah tidak dapat dibeli dengan berpaling.
- Perlakukan beban berat sebagai permintaan investasi, dengan keputusan, pemilik, dan tanggal tinjauan.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
