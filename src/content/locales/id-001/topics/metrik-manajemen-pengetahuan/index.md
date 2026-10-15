# Metrik manajemen pengetahuan

**Ukur pengetahuan dari apakah ia dipakai dan dipercaya pada saat dibutuhkan, bukan dari berapa banyak yang ada: awasi tingkat tautan, pemakaian ulang, kesegaran, dan kemudahan ditemukan bersama-sama, dan perlakukan setiap hitungan artikel sebagai pertanyaan tentang pekerjaan, bukan skor.**

## Gambaran umum dan motivasi

Tim layanan mengumpulkan pengetahuan setiap hari: cara memulihkan layanan, arti sebenarnya pesan kesalahan yang membingungkan, solusi sementara mana yang bertahan terakhir kali. [Manajemen pengetahuan](https://en.wikipedia.org/wiki/Knowledge_management) adalah disiplin membuat pengetahuan itu tersedia bagi orang berikutnya yang membutuhkannya. Dalam ITIL 4 (edisi 2019 kerangka yang diterbitkan AXELOS, dan fondasi yang didokumentasikan luas untuk buku ini), manajemen pengetahuan adalah praktik tersendiri, dan [ITIL](https://en.wikipedia.org/wiki/ITIL) juga mengharapkannya mendukung penanganan insiden, penanganan masalah, dan service desk. Topik ini membahas cara mengetahui apakah dukungan itu nyata.

Sebagian besar keluaran manajemen pengetahuan yang dapat dipakai berakhir di [basis pengetahuan](https://en.wikipedia.org/wiki/Knowledge_base): penyimpanan artikel, runbook, catatan kesalahan yang diketahui, dan jawaban cara-melakukan yang singkat. [Runbook](https://en.wikipedia.org/wiki/Runbook) adalah serangkaian langkah tertulis untuk operasi rutin atau pemulihan. Artikel adalah bagian eksplisit dari apa yang diketahui tim. [Pengetahuan tasit](https://en.wikipedia.org/wiki/Tacit_knowledge) orang berpengalaman, seperti perasaan bahwa suatu alarm hanyalah kebisingan, tidak dapat sepenuhnya dituliskan, dan tidak ada metrik dalam topik ini yang mengukurnya secara langsung.

Dalam pandangan ITIL, pengetahuan adalah aset terkelola dengan siklus hidup: dibuat, ditinjau, diterbitkan, dipakai, dan dipensiunkan. Dalam pandangan agile, dokumentasi harus layak mendapat tempatnya, percakapan dan pemasangan membawa banyak hal, dan pengetahuan tertulis adalah hasil sampingan dari menyelesaikan pekerjaan. Kedua pandangan sepakat pada ujiannya: apakah pengetahuan itu membantu seseorang menyelesaikan masalah nyata lebih cepat atau lebih baik daripada tanpanya?

Metode yang menghubungkan kedua pandangan paling langsung adalah [Knowledge-Centered Service (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), metodologi dari Consortium for Service Innovation. Dalam KCS, pengetahuan ditangkap dan diperbaiki sebagai bagian dari menyelesaikan masalah, bukan sesudahnya. Orang bekerja dalam dua lingkaran. Lingkaran selesaikan adalah saat penyelesaian: cari artikel yang ada, pakai ulang dan perbaiki bila ditemukan, buat bila tidak. Lingkaran berkembang adalah siklus lebih panjang yang mempelajari bagaimana pengetahuan berkinerja dan memperbaiki sistem di sekitarnya. KCS juga mengusulkan indikatornya sendiri, seperti laju kasus terselesaikan yang ditautkan ke artikel. Topik ini merangkum gagasan itu secara netral terhadap vendor; tim yang mengadopsi KCS secara formal sebaiknya membaca panduan praktik Consortium sendiri.

Jumlah artikel dalam basis pengetahuan adalah inventaris, bukan hasil, dan naik karena pengabaian semudah karena kepedulian. Metrik di bawah terikat pada saat pemakaian: kasus yang ditutup, pencarian yang dilakukan, reaksi pembaca. Bahkan itu pun dapat dibengkokkan (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Ukuran kontak dan penanganan hidup bersama [service desk](https://en.wikipedia.org/wiki/Service_desk) (lihat topik 3.1, Metrik service desk). Volume dan pola berulang berasal dari data insiden (lihat topik 3.2, Volume dan prioritas insiden). Keberhasilan swalayan, di mana pengguna mengonsumsi artikel tanpa agen, dibahas terpisah (lihat topik 3.7, Metrik swalayan dan otomatisasi). Topik ini tetap pada kesehatan pengetahuan itu sendiri dan pemakaiannya oleh orang yang menyelesaikan masalah.

## Prinsip utama

- **Ukur pemakaian di titik kerja.** Artikel yang ditautkan ke kasus terselesaikan atau ditemukan lewat pencarian adalah bukti nilai. Artikel yang sekadar ada bukan.
- **Tangkap dalam alur kerja.** Pengetahuan yang ditulis saat penyelesaian lebih segar dan lebih murah daripada pengetahuan yang ditulis dalam dorongan dokumentasi terpisah, jadi metrik sebaiknya menghargai penangkapan sebagai bagian menyelesaikan pekerjaan.
- **Baca kesegaran terhadap pemakaian.** Tua tidak sama dengan salah. Upaya tinjauan milik artikel yang sering dipakai, tidak disebar merata di katalog yang sebagian besar halamannya tak terbaca.
- **Ambil sampel untuk relevansi.** Tautan antara kasus dan artikel hanya membuktikan bahwa seseorang membuat tautan. Sampel kecil manusia tentang apakah artikel benar-benar cocok memberi tahu Anda apakah tautan itu bermakna.
- **Gambarkan tim dan area pengetahuan, tidak pernah individu.** Hitungan kontribusi per orang mengubah aset bersama menjadi kompetisi dan mengajari orang menulis sampah (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).
- **Pasangkan setiap metrik volume dengan sinyal mutu.** Tingkat tautan dengan relevansi, pembuatan artikel dengan duplikat, pemakaian ulang dengan umpan balik pembaca.

## Definisi metrik

Tabel mendaftar tujuh metrik. Jendela waktu (seperti periode tinjauan untuk kesegaran) adalah pilihan yang dibuat dan dituliskan tim; tidak ada nilai di sini yang merupakan acuan. Sepanjang topik, “kasus” berarti catatan insiden atau permintaan layanan dalam alat ITSM (manajemen layanan TI), dan insiden besar dilaporkan terpisah agar tidak mendistorsi rasio (lihat topik 3.4, Metrik insiden besar).

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat tautan pengetahuan | Porsi kasus terselesaikan yang memiliki setidaknya satu artikel pengetahuan terlampir pada saat penyelesaian | kasus yang diselesaikan pada periode itu dengan setidaknya satu artikel tertaut / kasus yang diselesaikan pada periode itu. Menghitung tanggal penyelesaian; mengecualikan insiden besar, kasus yang ditutup sebagai duplikat, dan kasus yang ditutup otomatis tanpa kerja manusia | persen | Alat ITSM: tabel tautan kasus dan artikel | Manajemen pengetahuan; manajemen insiden | Definisi selesai mencakup menangkap apa yang dipelajari | Mingguan untuk tim; bulanan untuk tinjauan |
| Rasio pemakaian ulang | Porsi tautan artikel yang menunjuk pada artikel yang sudah ada dan bukan yang dibuat selama kasus itu | tautan ke artikel yang ada sebelum kasus dibuka / semua tautan artikel yang dibuat pada kasus terselesaikan pada periode itu. Mengecualikan tautan yang ditambahkan setelah kasus ditutup | persen | Alat ITSM: tanggal pembuatan artikel terhadap tanggal kasus dibuka | Manajemen pengetahuan; perbaikan berkelanjutan | Pemakaian ulang daripada pengerjaan ulang; kepemilikan bersama atas basis kode dan dokumennya | Bulanan |
| Kesegaran artikel | Porsi artikel yang sedang dipakai yang telah ditinjau, atau dipakai dan dikonfirmasi benar, dalam jendela tinjauan yang dinyatakan | artikel dipakai dengan tanggal tinjauan atau pemakaian terkonfirmasi di dalam jendela / artikel dipakai. Artikel dipakai bila ditautkan ke kasus atau dilihat pembaca dalam 12 bulan terakhir (pilihan tim); draf dan artikel yang dipensiunkan dikecualikan | persen | Metadata basis pengetahuan dan log tampilan | Manajemen pengetahuan; service desk | Penyempurnaan backlog dokumentasi; tindakan retrospektif | Bulanan |
| Tingkat pencarian tanpa hasil | Porsi pencarian pengetahuan yang tidak mengembalikan artikel | pencarian dengan nol hasil / semua pencarian. Mengecualikan pencarian oleh bot dan pemeriksaan otomatis; menghitung tiap pencarian sekali meskipun diulang dalam semenit | persen | Log pencarian basis pengetahuan atau portal | Manajemen pengetahuan; service desk; manajemen permintaan layanan | Penemuan kebutuhan pengguna yang belum terpenuhi; masukan backlog | Mingguan |
| Tingkat kebermanfaatan | Porsi umpan balik pembaca yang menyatakan artikel membantu, ditampilkan dengan tingkat responsnya | suara bermanfaat / (suara bermanfaat + suara tidak bermanfaat) untuk artikel pada periode itu; tingkat respons = suara umpan balik / tampilan artikel | persen, dengan tingkat respons | Widget umpan balik basis pengetahuan dan log tampilan | Manajemen pengetahuan; pengalaman pelanggan | Umpan balik tinjauan pemangku kepentingan atas dokumentasi | Bulanan |
| Waktu menerbitkan | Waktu terlewat dari saat draf artikel dibuat sampai ditinjau dan terlihat oleh audiensnya | jam dimulai saat draf dibuat, berhenti saat penerbitan (atau keadaan terlihat pertama yang disetujui). Mengecualikan waktu dalam keadaan “ditahan, menunggu rilis produk”; dilaporkan sebagai median dan persentil ke-85 | hari (median dan persentil ke-85) | Riwayat alur kerja basis pengetahuan | Manajemen pengetahuan | Lead time item kerja dari mulai sampai selesai (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur) | Bulanan |
| Keluasan kontribusi | Sebaran pembuatan dan perbaikan artikel di seluruh tim, diukur tanpa menyebut nama orang | kontributor berbeda yang membuat atau memperbaiki artikel pada periode itu / anggota tim yang menyelesaikan kasus pada periode itu. Dilaporkan hanya untuk tim, tidak pernah sebagai daftar nama | persen | Riwayat suntingan basis pengetahuan digabung dengan keanggotaan tim | Manajemen pengetahuan; perbaikan berkelanjutan | Kepemilikan kolektif; pemasangan dan swarming | Kuartalan |

Tingkat tautan pengetahuan punya jam yang mudah terlewat. Tautan harus ada ketika kasus diselesaikan, bukan ketika seseorang merapikan seminggu kemudian, karena penautan terlambat mengukur pembersihan dan tidak memberi tahu apa pun tentang pemakaian selama penyelesaian. Rasio pemakaian ulang bergantung pada tanggal pembuatan artikel yang andal. Jika artikel dimigrasi atau diimpor massal, tanggal pembuatannya diatur ulang dan rasio akan menyesatkan sampai migrasi ditandai.

## Rekomendasi

### Putuskan untuk apa pengetahuan itu

**1. Kaitkan setiap metrik pengetahuan dengan kasus penggunaan.** Namai orang yang dilayani pengetahuan: analis service desk yang menyelesaikan kontak pertama, insinyur siaga yang menangani peringatan, atau pengguna yang membantu diri sendiri. Setiap audiens butuh ukuran berbeda. Runbook untuk insinyur siaga dinilai dari apakah langkahnya memulihkan layanan, sedangkan artikel setel ulang kata sandi dinilai dari apakah pengguna berhenti menghubungi meja. Catat di register Anda (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

**2. Mulai dengan tingkat tautan dan relevansi, bukan hitungan artikel.** Tingkat tautan menunjukkan apakah pengetahuan masuk ke saat penyelesaian sama sekali. Pasangkan sejak awal dengan sampel bulanan kecil tempat seseorang membaca 20 atau 30 kasus tertaut dan menilai apakah artikelnya cocok. Tingkat tautan 70 persen dengan separuh tautan tidak relevan lebih buruk daripada tingkat tautan 40 persen dengan tautan jujur, karena yang pertama menyembunyikan kesenjangan pengetahuan yang diungkap yang kedua.

**3. Pisahkan “tidak ada artikel” dari “artikel ada tetapi tidak ditemukan.”** Ketika kasus ditutup tanpa tautan, alasannya berbeda dan perbaikannya pun berbeda. Tambahkan pilihan penutupan pendek, seperti “tidak ada artikel” dan “artikel tidak ditemukan,” dan laporkan sebagai porsi kasus tak tertaut. Yang pertama menunjuk pada konten untuk ditulis; yang kedua menunjuk pada pencarian, penamaan, dan struktur. Jaga pilihan itu opsional bila akan memperlambat meja, dan ambil sampel sebagai gantinya.

### Tangkap pengetahuan saat pekerjaan selesai

**4. Jadikan penangkapan bagian definisi selesai.** Dalam tim agile, item kerja yang mengubah perilaku layanan belum selesai sampai runbook, catatan kesalahan yang diketahui, atau artikel bantuan diperbarui. Di service desk, kasus yang membutuhkan penemuan belum terselesaikan sampai penemuan itu ditangkap atau artikel yang ada diperbaiki. Ini gagasan KCS tentang bekerja dalam lingkaran selesaikan, dan menjaga biaya menulis tetap rendah karena orang yang menulis memiliki konteks yang masih segar.

**5. Izinkan keadaan draf yang ringan.** Banyak tim kehilangan pengetahuan karena setiap artikel harus melewati tinjauan berat sebelum ada yang melihatnya. Praktik gaya KCS membedakan artikel dalam proses, terlihat oleh tim, dari yang tervalidasi, terlihat oleh audiens lebih luas. Ukur waktu menerbitkan untuk kedua tahap secara terpisah, sebagai median dan persentil ke-85, agar tinjauan lambat muncul sebagai antrean dan bukan keluhan samar (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**6. Utamakan memperbaiki daripada membuat.** Tumpukan artikel hampir-duplikat yang tumbuh memperburuk pencarian dan mempersulit pemeliharaan kesegaran. Awasi rasio pemakaian ulang di samping hitungan pembuatan, dan ketika pembuatan naik sementara pemakaian ulang turun, cari duplikat. Buat penggabungan dan pemensiunan mudah dan terlihat, dan hitung penggabungan sebagai kontribusi positif.

### Jaga pengetahuan tetap mutakhir dan mudah ditemukan

**7. Tinjau artikel yang dipakai.** Pusatkan upaya tinjauan di mana pemakaian tinggi. Urutkan artikel yang dipakai menurut seberapa sering ditautkan atau dilihat, dan tetapkan jendela tinjauan untuk kelompok teratas yang lebih pendek daripada untuk ekor panjang. Artikel basi yang tak dibaca siapa pun murah biayanya; artikel basi yang muncul dalam sepertiga penyelesaian dapat menyesatkan ratusan kasus. Laporkan kesegaran untuk kelompok yang banyak dipakai sebagai barisnya sendiri agar rata-rata seluruh basis tidak menyembunyikannya.

**8. Perlakukan kegagalan pencarian sebagai item backlog.** Baca pencarian tanpa hasil yang paling sering tiap bulan dan putuskan untuk masing-masing apakah menulis artikel, menambah sinonim, mengganti nama artikel, atau menerima bahwa pertanyaan itu milik tempat lain. Ini mengubah metrik menjadi daftar pendek dan konkret yang dapat dikerjakan tim. Ia juga menunjukkan kosakata nyata, karena pengguna dan analis jarang memakai kata yang dipakai katalog layanan.

**9. Baca kata-kata di balik suara.** Tingkat kebermanfaatan murah dan bising. Tingkat respons biasanya rendah dan condong ke pendapat yang kuat. Tampilkan tingkat respons di samping tingkat kebermanfaatan, dan baca komentar tertulis pada artikel yang paling banyak dilihat dalam tinjauan tetap. Satu komentar seperti “langkah 4 tidak ada lagi di versi baru” lebih berharga daripada seribu suara tak berlabel.

**10. Hubungkan pengetahuan dengan masalah dan postmortem.** Insiden berulang yang diselesaikan berulang kali dengan artikel yang sama adalah sinyal bagi manajemen masalah, yang mencari sebab yang mendasari dan dapat menghilangkan kebutuhan akan artikel (lihat topik 4.1, Metrik manajemen masalah). Catatan kesalahan yang diketahui dan pelajaran postmortem adalah aset pengetahuan dengan siklus hidupnya sendiri (lihat topik 4.2, Metrik postmortem dan pembelajaran, dan topik 4.6, Utang teknis dan kesalahan yang diketahui). Lihat sepuluh artikel yang paling banyak ditautkan tiap kuartal dan tanyakan mana yang sebaiknya dipensiunkan dengan memperbaiki sebabnya.

### Atur tanpa memeringkat

**11. Laporkan kontribusi di tingkat tim.** Keluasan kontribusi memberi tahu apakah kerja pengetahuan dibagi atau terpusat pada dua orang. Itu risiko yang layak dilihat, karena pola yang sama dengan [bus factor](https://en.wikipedia.org/wiki/Bus_factor) dua. Ia tidak boleh berubah menjadi papan peringkat penulis, yang akan menghargai jumlah suntingan dan mengajari orang memecah artikel atau membuat perubahan remeh. Jika konsentrasi muncul, perlakukan sebagai percakapan tim tentang waktu, dukungan, dan izin menulis (lihat topik 9.4, Metrik keterampilan dan pembelajaran).

**12. Pensiunkan ukuran yang tak lagi membantu.** Jika tak ada yang bertindak atas tingkat tautan, pindahkan perhatian ke relevansi atau kesegaran kelompok yang banyak dipakai. Catat setiap perubahan definisi dengan alasannya, karena rumus yang berubah memutus garis tren (lihat topik 1.5, Sumber data dan instrumentasi).

## Vektor manipulasi dan pagar pembatas

Setiap metrik dalam tabel definisi muncul di sini. Metrik pengetahuan sangat terpapar karena tindakan menautkan atau meninjau hanyalah klik cepat, sedangkan nilai sesungguhnya ada di konten.

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat tautan pengetahuan | Melampirkan artikel apa pun, sering yang generik atau sangat populer, pada setiap kasus sebelum ditutup; menaut setelah kejadian secara massal | Sampel relevansi bulanan atas kasus tertaut; porsi tautan yang menuju beberapa artikel yang sama; stempel waktu tautan terhadap stempel waktu penyelesaian |
| Rasio pemakaian ulang | Membuat artikel baru untuk setiap kasus lalu segera menautkannya agar dihitung sebagai pemakaian ulang berikutnya; atau tak pernah membuat sama sekali agar rasio tampak sempurna | Tingkat artikel duplikat yang ditemukan lewat pencarian berkala; porsi kasus yang ditutup dengan alasan “tidak ada artikel” |
| Kesegaran artikel | Menandai artikel sebagai ditinjau tanpa memeriksanya; mengatur ulang tanggal tinjauan lewat suntingan remeh; menghitung hanya artikel yang mudah ditinjau | Sampel artikel yang baru ditinjau diuji terhadap layanan nyata; tingkat kebermanfaatan dan komentar tertulis pada artikel yang sama |
| Tingkat pencarian tanpa hasil | Menambahkan artikel samar atau serba ada yang cocok dengan kueri apa pun; menjejalkan kata kunci; mengecualikan istilah pencarian yang canggung dari log | Klik-tembus diikuti kontak tentang topik yang sama dalam jendela singkat; tingkat kebermanfaatan; pembacaan manual istilah pencarian teratas |
| Tingkat kebermanfaatan | Mendorong hanya pembaca puas untuk memilih; menyembunyikan opsi tidak bermanfaat; memilih dari dalam tim | Tingkat respons dan campuran responden ditampilkan bersama tingkat; komentar tertulis; tingkat kontak setelah membaca artikel |
| Waktu menerbitkan | Menerbitkan stub tipis untuk menghentikan jam; memecah artikel menjadi potongan; memindahkan draf ke keadaan yang dikecualikan jam | Relevansi dan kebermanfaatan artikel yang baru terbit; hitungan dan usia draf dalam keadaan yang dikecualikan |
| Keluasan kontribusi | Membuat suntingan remeh agar semua orang tampak sebagai kontributor; meminta orang menambah satu kalimat untuk memenuhi kuota | Ukuran dan substansi suntingan disampel; pemakaian ulang dan kebermanfaatan artikel yang dikontribusikan; tidak ada nama dalam laporan |

Pembacaan yang sehat menunjukkan artikel tertaut yang dikonfirmasi relevan oleh sampel manusia, rasio pemakaian ulang yang naik seiring basis matang, himpunan artikel yang banyak dipakai dengan tinjauan terverifikasi baru-baru ini, daftar pendek kegagalan pencarian yang sedang dikerjakan tim, dan kontribusi tersebar di seluruh tim. Beberapa kasus tanpa artikel, karena memang baru, adalah tanda basis yang jujur, bukan yang gagal.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Menargetkan tingkat tautan tinggi | Mendorong penangkapan dan pemakaian ulang ke rutinitas harian; sederhana dipahami | Mengundang tautan tak bermakna; menyembunyikan celah tempat tak ada artikel |
| Mengambil sampel relevansi dengan tangan | Mengungkap apakah tautan bermakna; membangun standar bersama | Memakan waktu analis; sampel kecil bising; bergantung pada pertimbangan pengambil sampel |
| Meninjau semuanya menurut jadwal tetap | Mudah direncanakan dan diaudit; diterapkan merata | Menghabiskan upaya pada artikel yang tak dibaca siapa pun; mengabaikan yang banyak dipakai |
| Meninjau menurut pemakaian | Mengarahkan upaya ke tempat pengetahuan salah paling menyakitkan | Butuh data tampilan dan tautan yang andal; artikel ekor panjang mungkin membusuk tanpa terlihat |
| Adopsi KCS formal | Memberi himpunan praktik dan indikator yang koheren dan teruji | Butuh investasi berkelanjutan, pembinaan, dan dukungan alat; berat untuk tim yang sangat kecil |
| Percakapan dan pemasangan alih-alih artikel | Memindahkan pertimbangan dan konteks; biaya rendah | Tidak berskala untuk shift, liburan, dan pergantian staf; pengetahuan pergi bersama orang |

Ukur secukupnya untuk melihat apakah pengetahuan dipakai dan dipercaya, dan belanjakan upaya yang dihemat untuk konten. Untuk tim kecil, tingkat tautan dengan sampel relevansi bulanan dan daftar pendek kegagalan pencarian adalah program lengkap. Untuk meja besar, himpunan penuh membayar dirinya hanya jika seseorang memiliki tinjauan dan bertindak atasnya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Ketika kita terakhir menyelesaikan kasus sulit, dari mana pengetahuan itu datang, dan ke mana perginya sesudahnya?**
Pilih kasus terbaru yang memakan upaya nyata dan telusuri jalur apa yang dipelajari. Apakah artikel ditemukan, rekan ditanya, atau jawaban dikerjakan dari nol? Tanyakan apakah orang berikutnya dengan masalah yang sama akan menemukan jawabannya dalam kurang dari lima menit. Fasilitator sebaiknya mencari jurang antara apa yang diketahui tim dan apa yang dipegang basis pengetahuan.

**2. Jika kita menaikkan tingkat tautan ke target yang dinyatakan bulan depan, bagaimana kita bisa melakukannya tanpa membantu siapa pun?**
Buat daftar manipulasi eksplisit dan perlakukan sebagai masukan desain, bukan tuduhan. Jawaban umum adalah menaut artikel generik, menaut massal saat penutupan, dan memilih artikel paling populer. Untuk setiap jawaban, tanyakan pagar pembatas mana dalam tabel yang akan menangkapnya dan seberapa cepat. Fasilitator sebaiknya pulang dengan setidaknya satu pemeriksaan baru, seperti sampel relevansi bulanan, dan pemiliknya.

**3. Lima artikel mana yang paling kita andalkan, dan kapan terakhir diverifikasi terhadap layanan nyata?**
Lihat artikel yang paling banyak ditautkan dan paling banyak dilihat dan bacakan dua di antaranya bersama-sama. Percakapan sering menunjukkan bahwa artikel dengan dampak terbanyak adalah yang paling sedikit dirawat, yang merupakan argumen untuk meninjau menurut pemakaian.

**4. Apa yang dicari orang yang tidak kita miliki?**
Bawa pencarian tanpa hasil teratas dan alasan kasus tak tertaut. Kelompokkan menjadi artikel untuk ditulis, kata untuk ditambahkan, dan pertanyaan yang milik tim lain. Fasilitator sebaiknya mencatat daftar pendek tiga item berikutnya dan merencanakan bagaimana akan ditulis selama kerja normal, bukan dalam proyek khusus.

**5. Siapa yang menulis pengetahuan kita, dan apa biayanya bagi mereka?**
Bahas penangkapan dengan jujur. Apakah menulis dilihat sebagai bagian pekerjaan, atau kerja tambahan setelah pekerjaan? Tanyakan apa yang memperlambat: templat berat, tinjauan lambat, takut salah, atau tidak ada waktu di akhir shift yang berat. Fasilitator sebaiknya mengarahkan menjauh dari mengejar individu dan menuju perubahan perkakas, waktu, dan izin.

**6. Artikel mana dari kita yang sebaiknya berhenti kita butuhkan?**
Ambil artikel yang paling sering dipakai ulang dan tanyakan sebab berulang apa yang mereka kitari. Prosedur setel ulang yang dipakai 200 kali sebulan bisa jadi gejala cacat produk, layar yang membingungkan, atau otomatisasi yang hilang. Putuskan item mana yang diserahkan ke manajemen masalah atau tim produk, dan mana yang diotomatisasi (lihat topik 3.7, Metrik swalayan dan otomatisasi). Fasilitator sebaiknya mencatat bahwa hasil terbaik kerja pengetahuan yang baik kadang adalah lebih sedikit artikel.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman menciptakan banyak pengetahuan yang akan dibutuhkan layanan: bagaimana fitur berperilaku, apa arti kesalahan baru, bagaimana melakukan rollback. Jika pengetahuan itu tidak ditangkap sebelum rilis, service desk dan tim siaga mempelajarinya dengan cara sulit. Sertakan runbook dan artikel bantuan dalam definisi selesai, dan awasi tingkat tautan dan kegagalan pencarian untuk layanan yang Anda miliki sebagai umpan balik. Ketika artikel yang sama ditautkan berkali-kali, perlakukan sebagai laporan cacat pada produk, bukan keberhasilan dokumentasi.

### Tim layanan dan operasi

Tim service desk dan operasi adalah produsen dan konsumen utama basis pengetahuan, jadi metriknya sebagian besar milik mereka untuk dipakai. Jalankan lingkaran selesaikan dengan jujur: cari dulu, pakai ulang dan perbaiki, buat bila tak ada yang cocok. Pakai tingkat tautan dengan sampel relevansi, dan baca pencarian tanpa hasil sebagai backlog. Hindari tabel liga penulis atau penyunting, karena basis pengetahuan adalah alat bersama dan hitungan pribadi merusaknya (lihat topik 3.1, Metrik service desk).

### Kepemimpinan dan tata kelola

Pemimpin memutuskan apakah kerja pengetahuan mendapat waktu, jadi mereka memutuskan mutu pengetahuan. Minta sampel relevansi dan kesegaran artikel yang banyak dipakai sebelum meminta hitungan artikel. Tolak target pada tingkat tautan atau pembuatan artikel tanpa pagar pembatas, dan harapkan mendengar ketika angka turun karena alasan baik, seperti gabungan duplikat. Danai tinjauan artikel berpemakaian tinggi dan perbaikan yang membuat artikel tidak diperlukan.

### Pelanggan dan pengguna

Pengguna bertemu pengetahuan lewat pencarian, portal, chatbot, atau jawaban yang diberikan analis. Yang mereka perhatikan adalah apakah jawaban pertama benar dan apakah mereka harus mengulang diri. Umpan balik mereka sendiri tentang artikel, pencarian mereka yang kosong, dan kontak ulang mereka adalah pagar pembatas terbaik untuk semua dalam topik ini. Jika pengguna diminta menilai artikel, katakan kepada mereka apa yang terjadi pada umpan balik itu, dan bertindaklah secara terlihat (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Sebuah perusahaan asuransi berukuran menengah menjalankan service desk TI internal dengan sekitar selusin analis, mendukung staf di beberapa kantor. Meja berbagi basis pengetahuan dengan dua tim produk yang memiliki aplikasi klaim dan portal dokumen. Semua angka dalam contoh ini bersifat ilustratif.

Pimpinan meminta penyelesaian kontak pertama yang lebih baik (lihat topik 3.1, Metrik service desk) dan menetapkan target tingkat tautan pengetahuan 60 persen, naik dari 38 persen ilustratif. Dalam enam pekan dasbor menunjukkan 64 persen. Kepala meja tidak yakin, karena analis masih mengeluh tidak dapat menemukan jawaban, dan seorang pemimpin tim produk menyebut bahwa tiga artikel yang dimilikinya muncul pada sebagian besar kasus tertutup.

Tim menjalankan tinjauan manipulasi dan sampel relevansi. Mereka membaca 30 kasus tertaut, dipilih acak dari bulan sebelumnya, dan menilai apakah artikel cocok dengan kasus. Dalam hitungan ilustratif, 11 dari 30 tautan menuju artikel generik “Cara membuat tiket” atau gambaran jaringan umum yang tidak menjawab masalah. Mereka juga mendapati tautan dibuat dalam beberapa detik sebelum menutup kasus, pola yang menyarankan kebiasaan dan bukan pemakaian. Kepala meja melihat rasio pemakaian ulang, yang naik, dan porsi kasus tak tertaut dengan alasan “tidak ada artikel,” yang turun hampir ke nol, karena analis kini memilih artikel terdekat. Kesenjangan dalam pengetahuan menjadi tak terlihat.

Tim membuat tiga keputusan. Pertama, target tingkat tautan ditarik dan diganti dengan tampilan yang disesuaikan relevansi: tingkat tautan dilaporkan di samping porsi tautan relevan yang disampel, dan alasan penutupan “tidak ada artikel” dibuat mudah dipilih dan tidak diperlakukan sebagai kegagalan. Kedua, pencarian tanpa hasil dibaca tiap bulan, dan lima teratas menjadi tugas menulis berikutnya, dibagi di seluruh meja. Ketiga, 20 artikel yang paling banyak ditautkan ditinjau kesegarannya dalam sebulan, dimiliki tim produk terkait, dan artikel apa pun yang ditautkan pada lebih dari seperempat kasus satu layanan diteruskan ke manajemen masalah sebagai kandidat perbaikan permanen (lihat topik 4.1, Metrik manajemen masalah).

Dua bulan kemudian tingkat tautan judul turun kembali ke 51 persen ilustratif, yang terasa seperti kabar buruk. Relevansi yang disampel naik dari 63 persen menjadi 85 persen dalam istilah ilustratif, tingkat pencarian tanpa hasil turun, dan masalah masuk berulang pada portal dokumen telah diperbaiki di sebabnya, yang memensiunkan tiga artikel. Kepala meja meminta pimpinan menilai program dari relevansi dan solusi sementara yang dipensiunkan, bukan dari tingkat tautan mentah.

## Sudut pandang sektor

**Startup.** Pengetahuan hidup di beberapa kepala dan riwayat obrolan. Tulis daftar pendek runbook untuk apa yang rusak di malam hari, dan catat perbaikan setelah setiap insiden. Pemeriksaan bulanan bahwa runbook teratas masih berfungsi sudah cukup sebagai pengukuran.

**Bisnis kecil.** Satu orang sering menjadi service desk, administrator, dan pemilik pengetahuan. Risikonya adalah bus factor, karena pengetahuan lenyap jika orang itu lenyap. Pakai repositori bersama sederhana, jaga artikel singkat, dan biarkan kontraktor atau rekan menguji prosedur kunci. Pembacaan rutin halaman yang paling banyak dipakai mengalahkan dasbor apa pun.

**Perusahaan besar.** Skala membawa artikel duplikat dan mutu tak merata. Pakai definisi bersama untuk tingkat tautan, kesegaran, dan pemakaian ulang, laporkan menurut layanan dan tim, dan tunjuk pemilik untuk artikel berpemakaian tinggi. Hindari membandingkan tim, karena campuran layanan dan usia basis berbeda.

**Pemerintah dan sektor publik.** Aturan catatan, persyaratan aksesibilitas, dan ekspektasi audit dapat mengatur bagaimana pengetahuan disimpan, ditinjau, dan dipensiunkan. Perlakukan ini sebagai masukan desain: simpan jejak persetujuan untuk artikel yang memengaruhi warga, dan terbitkan konten yang aksesibel. Umpan balik dan kegagalan pencarian dari warga sangat berharga (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya metrik pengetahuan sedang. Data alat biasanya sudah ada di platform ITSM dan basis pengetahuan. Biaya utamanya adalah waktu mendefinisikan ukuran, sampel bulanan kecil yang memeriksa relevansi, waktu tinjauan untuk artikel berpemakaian tinggi, dan disiplin menangkap pengetahuan sambil menyelesaikan masalah. Jika platform pengetahuan tidak punya data tautan atau pencarian yang dapat dipakai, biaya menginstrumentasinya harus dimasukkan (lihat topik 1.5, Sumber data dan instrumentasi).

Imbal hasilnya adalah pola, dan buku ini tidak mengutip angka untuknya. Ketika analis menemukan artikel yang benar dengan cepat, penyelesaian lebih cepat dan lebih konsisten, staf baru menjadi berguna lebih cepat, dan insinyur siaga kurang bergantung pada segelintir ahli. Ketika pengguna menemukan jawaban sendiri, meja menerima lebih sedikit kontak berulang untuk pertanyaan yang dikenal. Metrik membantu dengan menunjukkan di mana pengetahuan hilang, basi, atau tak terpakai, agar waktu menulis yang langka pergi ke artikel yang penting.

Total biaya kepemilikan mencakup perawatan. Artikel membusuk seiring layanan berubah, jadi waktu tinjauan adalah biaya berkelanjutan, dan program yang mengabaikannya akan melebih-lebihkan manfaat. Untuk memperkirakan imbal hasil tim Anda sendiri, bandingkan sampel kasus Anda sendiri sebelum dan sesudah, dan labeli asumsi Anda.

## Anti-pola dan jebakan

- **Menghitung artikel atau tampilan sebagai keberhasilan.** Volume naik bersama kekacauan dan tampilan dapat menandakan kebingungan. Ukur pemakaian dalam penyelesaian, relevansi, dan umpan balik.
- **Target tingkat tautan tanpa pemeriksaan relevansi.** Orang akan melampirkan artikel apa pun. Ambil sampel kasus tertaut tiap bulan dan laporkan porsi relevan di samping tingkat.
- **Memeringkat penulis atau penyunting.** Hitungan pribadi menghasilkan suntingan tipis dan pemecahan artikel. Laporkan keluasan kontribusi untuk tim dan bahas sebagai pertanyaan kapasitas.
- **Meninjau semua artikel menurut satu jadwal tetap.** Upaya pergi ke halaman yang tak dibaca siapa pun. Tinjau menurut pemakaian dan pensiunkan yang tak terpakai.
- **Menerbitkan stub untuk menghentikan jam.** Artikel cepat dan tipis mengalahkan waktu menerbitkan. Pasangkan dengan kebermanfaatan dan tingkat kontak lanjutan.
- **Mengabaikan pencarian yang gagal.** Pencarian gagal adalah sinyal paling jelas kebutuhan yang tak terpenuhi. Baca tiap bulan dan ubah item teratas menjadi pekerjaan.
- **Memisahkan pengetahuan dari pekerjaan.** Proyek dokumentasi di akhir kuartal menghasilkan halaman basi. Tangkap selama penyelesaian dan dalam definisi selesai.
- **Memperlakukan basis pengetahuan sebagai permanen.** Konten membusuk. Jadikan pemensiunan dan penggabungan rutin dan dihargai.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Penangkapan dan penautan | Pengetahuan hidup di kepala dan obrolan; tautan jarang | Beberapa tim menautkan artikel ke kasus, praktik bervariasi | Satu aturan tertulis untuk penautan dan penangkapan; alasan penutupan dicatat | Tingkat tautan dan sampel relevansi ditinjau bulanan dan dikaitkan dengan perbaikan | Penangkapan adalah bagian alur kerja di meja, operasi, dan tim produk; definisi direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Kesegaran dan kepemilikan | Tanpa pemilik; artikel menua tanpa terlihat | Pemilik dinamai untuk layanan kunci | Jendela tinjauan ditetapkan, lebih pendek untuk artikel yang banyak dipakai | Kesegaran artikel berpemakaian tinggi diplot tren dan didanai | Tanggung jawab tinjauan dibagi dengan pemasok dan tim produk; pemensiunan rutin |
| Kemudahan ditemukan dan umpan balik | Pencarian ad hoc; tak ada data pencarian | Log pencarian ada tetapi tak dibaca | Pencarian tanpa hasil dan umpan balik pembaca ditinjau pada periode tetap | Kegagalan pencarian menggerakkan backlog dan dipasangkan dengan data kontak | Pengguna, analis, dan chatbot menimba dari satu sumber pengetahuan; umpan balik mengubah konten secara terlihat |
| Pemakaian dalam perbaikan | Metrik, jika ada, adalah hitungan | Hitungan ditunjukkan kepada tim | Metrik dipasangkan dengan pagar pembatas dan ditunjukkan kepada tim lebih dulu | Artikel yang banyak ditautkan menyuapi keputusan manajemen masalah dan otomatisasi | Backlog pengetahuan, masalah, dan produk dikelola bersama antartim |

## Daftar periksa

- [ ] Setiap metrik pengetahuan menamai audiens yang dilayani dan keputusan yang diinformasikannya.
- [ ] Tingkat tautan punya definisi tertulis, termasuk jam, pengecualian, dan perlakuan insiden besar.
- [ ] Sampel bulanan memeriksa bahwa artikel tertaut relevan dengan kasusnya.
- [ ] Penutupan kasus mencatat “tidak ada artikel” dan “artikel tidak ditemukan” sebagai alasan berbeda.
- [ ] Waktu menerbitkan dilaporkan sebagai median dan persentil tinggi, dengan tahap draf dan terbit dipisahkan.
- [ ] Jendela tinjauan ditetapkan untuk artikel yang dipakai, lebih pendek untuk yang paling banyak dipakai.
- [ ] Pencarian tanpa hasil teratas dibaca tiap bulan dan diubah menjadi item backlog.
- [ ] Umpan balik pembaca ditampilkan dengan tingkat responsnya, dan komentar pada artikel teratas dibaca.
- [ ] Kontribusi dilaporkan hanya untuk tim, tanpa daftar bernama.
- [ ] Artikel yang paling banyak ditautkan ditinjau tiap kuartal sebagai kandidat perbaikan permanen.
- [ ] Perubahan definisi dicatat dengan alasan.

## Prompt AI

**Periksa apakah artikel tertaut cocok dengan kasusnya.**

```text
Saya menjalankan tinjauan pengetahuan untuk [team name], yang mendukung [type of
service]. Berikut [number] kasus terselesaikan, masing-masing dengan ringkasan,
catatan penyelesaian, dan judul serta teks artikel tertaut. Untuk setiap
pasangan, nilai apakah artikel cocok dengan kasus sebagai jawaban relevan,
jawaban parsial, atau tautan tak berkaitan, dan beri alasan satu baris. Laporkan
pola menurut artikel dan layanan. Jangan menyebut nama atau memeringkat analis
individu. Jangan mengarang fakta tentang layanan. Daftar asumsi Anda dan apa pun
yang tidak dapat Anda nilai dari teks.

[paste cases and articles with personal data removed]
```

**Ubah pencarian gagal menjadi backlog penulisan.**

```text
Berikut pencarian paling sering di [knowledge base or portal name] yang tidak
mengembalikan hasil pada [period]: [list of search terms with counts].
Kelompokkan menjadi tema. Untuk setiap tema, sarankan apakah butuh artikel baru,
sinonim atau penggantian nama artikel yang ada ([list of related article
titles]), tautan ke tim lain, atau tanpa tindakan. Jangan mengarang artikel atau
fakta tentang sistem kami. Daftar asumsi Anda dan pertanyaan yang harus saya
jawab sebelum menulis apa pun.
```

**Rancang himpunan ringan ukuran pengetahuan.**

```text
Rancang himpunan kecil ukuran manajemen pengetahuan untuk [team name], tim
beranggotakan [team size] yang memakai [ITSM tool] dan [knowledge tool]. Tujuan
utama kami [goal, such as faster first contact resolution or less dependence on
experts]. Untuk setiap ukuran berikan definisi, jam atau batas, sumber data,
vektor manipulasi yang mungkin, dan pagar pembatas. Jangan mengusulkan peringkat
individu, mengarang nilai acuan, atau mengutip sumber. Daftar asumsi Anda dan
kolom data yang Anda butuhkan yang tidak saya sebutkan.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik terkait dan pagar pembatas berpasangan saat Anda menambahkan metrik pengetahuan ke dasbor.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa metrik pengetahuan membawa vektor manipulasi, pagar pembatas, dan referensi silangnya dalam bentuk yang benar.

## Poin penting

- Ukur pengetahuan pada saat pemakaian: tertaut dalam penyelesaian, ditemukan lewat pencarian, dikonfirmasi pembaca.
- Pasangkan tingkat tautan dengan sampel relevansi manusia, karena tautan hanya membuktikan seseorang mengeklik.
- Tinjau kesegaran menurut pemakaian, tempatkan upaya di mana artikel salah akan menyesatkan paling banyak kasus.
- Perlakukan pencarian gagal dan artikel yang banyak ditautkan sebagai sinyal untuk konten baru, penamaan lebih baik, atau perbaikan permanen.
- Laporkan kontribusi untuk tim dan jangan pernah memeringkat penulis.
- Artikel yang lebih sedikit dan lebih baik sering menandakan basis yang lebih sehat daripada yang lebih besar.

## Referensi dan bacaan lanjutan

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
