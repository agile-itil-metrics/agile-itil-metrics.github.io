# Pengalaman pengguna dan karyawan

**Orang bekerja paling baik ketika alat, perangkat, dan dukungan di sekitar mereka sekadar berfungsi, jadi ukur gesekan yang ditemui rekan Anda, perlakukan jawabannya sebagai alasan untuk menyingkirkan hambatan, dan jangan pernah mengubah data itu menjadi pengawasan atau peringkat orang.**

## Gambaran umum dan motivasi

Prinsip kelima di balik Agile Manifesto berkata untuk membangun proyek di sekitar individu yang termotivasi, memberi mereka lingkungan dan dukungan yang mereka butuhkan, dan memercayai mereka menyelesaikan pekerjaan. Bagi orang yang memakai TI internal, lingkungan itu adalah laptop, masuk, alat kolaborasi, proses akses, dan service desk. Ketika itu semua lambat atau membingungkan, orang yang termotivasi kehilangan waktu dan niat baik, dan mereka menciptakan solusi sementara. Mengukur lingkungan itu karena itu adalah cara mendukung orang. Bukan cara mengawasi mereka.

[Pengalaman karyawan](https://en.wikipedia.org/wiki/Employee_experience_management) adalah jumlah interaksi karyawan dengan tempat kerjanya sepanjang masanya di organisasi. Bagian yang dibentuk TI kadang disebut pengalaman karyawan digital, dan [tempat kerja digital](https://en.wikipedia.org/wiki/Digital_workplace) adalah himpunan teknologi yang dipakai orang untuk bekerja. Topik-topik sebelumnya dalam bagian ini mencakup survei kepuasan (lihat topik 6.1, Metrik kepuasan pelanggan) dan perjanjian tingkat pengalaman (lihat topik 6.2, Perjanjian tingkat pengalaman). Topik ini mengarahkan perhatian yang sama ke dalam, kepada rekan yang memakai layanan TI setiap hari, termasuk insinyur dan operator yang membangun dan menjalankannya.

Pengguna internal berbeda dari pelanggan eksternal dalam empat hal yang penting bagi pengukuran.

- **Mereka tidak dapat pergi.** Karyawan tak punya pesaing untuk dituju, jadi keheningan bukan kepuasan. Itu mungkin berarti pengunduran diri, atau solusi sementara.
- **Mereka dapat diidentifikasi.** Di perusahaan beberapa ratus orang, kelompok kecil jawaban survei dapat menunjuk seseorang. Desain privasi didahulukan.
- **Mereka juga rekan kerja.** Data pengalaman buruk merugikan hubungan dan semangat, dan data baik dapat dibagikan terbuka dan ditindaklanjuti bersama.
- **Mereka mencakup tim pengiriman dan operasi.** Perkakas yang dipakai pengembang dan staf service desk adalah bagian pengalaman, dan gesekannya sampai ke pengguna lewat perbaikan yang lebih lambat.

Dua tema berjalan sepanjang topik ini. Yang pertama adalah **gesekan**: upaya, keterlambatan, dan interupsi yang dapat dihindari yang berdiri di antara seseorang dan pekerjaannya. Interupsi dan beban mental berbiaya lebih daripada yang disarankan waktu jamnya. Gagasan [beban kognitif](https://en.wikipedia.org/wiki/Cognitive_load), beban pada memori kerja, menjelaskan mengapa formulir membingungkan atau mulai ulang paksa yang tak terduga berbiaya lebih daripada menit yang dibutuhkannya, dan gagasan [aliran (flow)](https://en.wikipedia.org/wiki/Flow_(psychology)), keadaan fokus yang terserap, menjelaskan mengapa melindungi waktu tanpa gangguan penting bagi kerja pengetahuan. Tema kedua adalah **etika**: bagaimana belajar tentang pengalaman tanpa menginvasi privasi. Teknologi [pemantauan karyawan](https://en.wikipedia.org/wiki/Employee_monitoring) dapat mengukur banyak hal, dan garis antara mendukung dan mengawasi mudah dilewati. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku dalam bentuk manusiawi di sini: skor yang dipakai untuk menghakimi orang mengajari mereka menyembunyikan masalah mereka (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Ukur lingkungan, bukan orang.** Satuan analisis adalah layanan, jenis perangkat, atau kelompok, tidak pernah individu.
- **Perlakukan gesekan sebagai musuh.** Waktu hilang, interupsi, dan kebingungan adalah biaya untuk disingkirkan.
- **Tanya, amati, dan ukur.** Gabungkan apa yang dikatakan orang dengan apa yang dicatat sistem dan apa yang Anda lihat ketika menyaksikan pekerjaan dilakukan.
- **Jadikan privasi persyaratan desain.** Kumpulkan data paling sedikit yang menjawab pertanyaan, agregasikan lebih awal, dan tekan kelompok kecil.
- **Sertakan semua orang.** Kebutuhan aksesibilitas, pekerja jarak jauh dan shift, dan karyawan baru sering bertemu pengalaman terburuk.
- **Lindungi fokus.** Rencanakan perubahan, pembaruan, dan notifikasi di sekitar pekerjaan orang.
- **Katakan apa yang Anda kumpulkan dan mengapa.** Transparansi membangun kepercayaan yang menjadi tumpuan jawaban jujur.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat kesiapan hari pertama | Porsi karyawan baru yang perangkat, akun, dan aksesnya lengkap dan berfungsi pada waktu mulai mereka | karyawan baru dengan semua item yang disepakati berfungsi pada awal / karyawan baru pada periode itu | persen | Permintaan orientasi, sistem identitas, konfirmasi karyawan baru | Manajemen permintaan layanan; manajemen katalog layanan | Kesepakatan kerja tim untuk orientasi | Bulanan |
| Waktu menuju produktif | Waktu terlewat dari tanggal mulai sampai titik tempat karyawan baru punya semua yang dibutuhkan untuk tugas nyata pertamanya | median dan persentil ke-85 hari dari tanggal mulai sampai konfirmasi dari karyawan baru dan atasannya | hari | Pelacak orientasi; pertanyaan konfirmasi singkat | Manajemen permintaan layanan; perbaikan berkelanjutan | Waktu bagi anggota tim baru membuat perubahan pertama | Bulanan |
| Prevalensi solusi sementara | Porsi staf yang disurvei yang memakai alat tak disetujui atau langkah manual untuk menyiasati layanan resmi | responden melaporkan solusi sementara untuk layanan / responden valid | persen | Survei denyut; laporan penemuan alat yang tidak disahkan | Manajemen tingkat layanan; perbaikan berkelanjutan | Hambatan yang diangkat dalam pemeriksaan tim harian | Kuartalan |
| Menit gangguan paksa | Waktu orang diinterupsi oleh tindakan TI terencana seperti mulai ulang paksa, pembaruan, dan prompt masuk | total menit gangguan yang disebabkan tindakan terencana / pengguna aktif dalam kelompok | menit per orang per bulan | Log manajemen endpoint, diagregasi menurut kelompok | Pemberdayaan perubahan; manajemen rilis dan deployment | Waktu kerja tanpa interupsi | Bulanan |
| Waktu penyelesaian permintaan aksesibilitas | Waktu menyelesaikan permintaan terkait kebutuhan aksesibilitas | median dan persentil ke-85 jam dari permintaan sampai solusi berfungsi terkonfirmasi | jam | Sistem permintaan dengan tag aksesibilitas | Manajemen permintaan layanan; manajemen insiden | Definisi selesai yang inklusif | Bulanan |
| Skor denyut alat | Penilaian satu alat atau layanan bernama pada pertanyaan singkat yang disepakati | rata-rata penilaian atau porsi menguntungkan di seluruh respons valid, per alat | poin skala atau persen | Survei denyut, memutar alat | Manajemen tingkat layanan; perbaikan berkelanjutan | Umpan balik dari anggota tim tentang alat mereka | Kuartalan |
| Kepatuhan pengaman privasi | Porsi laporan pengalaman yang memenuhi aturan penekanan dan agregasi | laporan memenuhi aturan / laporan diterbitkan | persen | Tinjauan laporan terbitan terhadap aturan privasi | Manajemen keamanan informasi; pengukuran dan pelaporan | Kesepakatan kerja tentang pemakaian data | Kuartalan |

Definisikan kelompok dan periode untuk setiap ukuran. Kesiapan hari pertama menghitung karyawan baru siap hanya ketika setiap item pada daftar yang disepakati berfungsi, dan daftar dicatat di register metrik. Menit gangguan paksa dihitung dari total kelompok, dan tingkat terendah yang ditampilkan adalah kelompok setidaknya sepuluh orang. Kepatuhan pengaman privasi berlaku pada program pengalaman itu sendiri, yang menjadikannya pagar pembatas atas enam lainnya.

## Rekomendasi

### Mulai dari orang dan pekerjaan mereka

**1. Jalani sehari bersama rekan.** Duduk bersama beberapa orang dari peran, lokasi, dan shift berbeda dan saksikan mereka bekerja. Catat setiap penantian, setiap solusi sementara, dan setiap saat kebingungan. Tanyakan apa yang akan mereka perbaiki lebih dulu. Pengamatan menemukan masalah yang terlewat survei, karena orang berhenti memperhatikan gesekan yang telah mereka pelajari untuk dijalani. Sepakati sebelumnya apa yang akan Anda catat dan bagaimana akan dipakai.

**2. Petakan saat-saat yang penting.** Bagi staf, saat berdampak tinggi biasanya hari pertama, kegagalan laptop, perpindahan antartim, permintaan akses, dan meninggalkan organisasi. Tulis langkah di masing-masing dan siapa yang memilikinya. Peta menunjukkan serah terima antartim tempat keterlambatan bersembunyi, yang terkait dengan ukuran kolaborasi di bagian selanjutnya (lihat topik 9.3, Metrik kolaborasi dan serah terima).

**3. Sertakan orang di tepi.** Staf dengan kebutuhan aksesibilitas, pekerja shift, staf jarak jauh dan lapangan, dan kontraktor sering tak terlihat dalam rata-rata. Segmentasikan hasil di mana aman, dan tinjau kelompok yang paling kurang terlayani tersendiri. Perlakukan aksesibilitas sebagai persyaratan kelas satu. Standar [aksesibilitas web](https://en.wikipedia.org/wiki/Web_accessibility) seperti Web Content Accessibility Guidelines memberi daftar periksa konkret untuk alat internal, dan masalah aksesibilitas adalah urusan hukum dan etika di banyak yurisdiksi.

### Ukur dengan hati-hati

**4. Gabungkan tiga jenis bukti.** Pakai pertanyaan denyut singkat tentang alat dan saat bernama, ukuran sistem seperti menit gangguan paksa dan penyelesaian orientasi, dan percakapan. Ketika dua jenis tidak sepakat, selidiki. Alat dengan uptime sangat baik dan skor denyut buruk memberi tahu Anda sesuatu yang tak dapat diberitahukan uptime (lihat topik 5.3, Metrik ketersediaan).

**5. Tanyakan tentang alat, bukan tentang TI.** “Seberapa mudah menemukan dokumen di sistem berkas?” mendapat jawaban lebih baik daripada “Bagaimana TI?” Putar alat melalui denyut agar tak ada yang ditanya lebih dari sekali atau dua kali per kuartal, dan jaga kata-kata tetap agar tren bermakna.

**6. Hitung menit yang hilang dari orang.** Waktu hilang lebih mudah dipahami daripada skor. Perkirakan dari sistem di mana bisa, misalnya prompt mulai ulang dan kegagalan masuk, dan minta angka kasar dari orang di mana tidak bisa. Sajikan per orang per bulan untuk kelompok, dengan metode, dan hindari mengalikan dengan gaji untuk membuat angka dramatis kecuali Anda juga menyatakan asumsinya.

**7. Minimalkan dan agregasikan.** Ikuti prinsip [minimalisasi data](https://en.wikipedia.org/wiki/Data_minimization): kumpulkan hanya yang Anda butuhkan, simpan hanya selama Anda butuhkan, dan agregasikan sedini mungkin. Di mana data dapat mengidentifikasi seseorang, [pseudonimisasi](https://en.wikipedia.org/wiki/Pseudonymization) mengurangi risiko. Aturan seperti [k-anonimitas](https://en.wikipedia.org/wiki/K-anonymity), yang mensyaratkan bahwa setiap kelompok yang dilaporkan berisi setidaknya k orang, memberi cara sederhana menekan sel kecil. Nyatakan k Anda di register.

**8. Tarik garis jelas terhadap pengawasan.** Jangan pakai data pengalaman, telemetri endpoint, atau sentimen untuk mengevaluasi individu, mendeteksi siapa yang “kurang terlibat,” atau menyuapi tinjauan kinerja. Katakan demikian secara tertulis, dan biarkan perwakilan staf atau dewan karyawan meninjau rencana data di mana ada. Periksa hukum setempat dan spesialis privasi sebelum mengumpulkan data perilaku apa pun. Kepercayaan, begitu hilang, membuat setiap survei berikutnya kurang jujur.

### Bertindak atas apa yang Anda pelajari

**9. Perbaiki gesekan terbesar lebih dulu dan katakan demikian.** Peringkatkan masalah menurut waktu hilang, jumlah orang, dan keparahan bagi orang yang terdampak, dan danai yang teratas. Beri tahu orang apa yang Anda perbaiki dan apa yang Anda pilih untuk tidak diperbaiki, dengan alasan. Perbaikan yang terlihat adalah dorongan terkuat untuk terus melaporkan masalah.

**10. Rencanakan gangguan di sekitar pekerjaan.** Banyak interupsi paksa dapat dihindari. Jadwalkan pembaruan di luar waktu fokus, tawarkan penundaan dalam batas, dan gabungkan mulai ulang. Tinjau menit gangguan paksa di samping tujuan keamanan agar pertukarannya eksplisit, karena sebagian pembaruan harus terjadi cepat (lihat topik 4.3, Metrik pemberdayaan perubahan).

**11. Perlakukan solusi sementara sebagai umpan balik desain.** Ketika orang memakai alat tak disetujui, tanyakan apa yang dilakukannya lebih baik. Jawabannya adalah persyaratan yang terlewat alat resmi. [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT) membawa risiko nyata bagi keamanan dan biaya, dan respons menghukum mendorongnya ke bawah tanah. Utamakan mengadopsi gagasan baik, atau menjelaskan risiko dan menawarkan alternatif aman.

**12. Bagikan program dengan orang yang dilayaninya.** Tunjukkan hasil kepada staf, adakan tinjauan singkat bersama perwakilan, dan tanyakan apa yang diubah pada kuartal berikutnya. Program adalah bentuk kolaborasi berkelanjutan antara TI dan penggunanya, dan perbaikan berkelanjutan lingkungan adalah hasilnya. Kaitkan dengan ukuran orang di bagian selanjutnya (lihat topik 9.2, Metrik kepuasan dan kesejahteraan).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat kesiapan hari pertama | Memperpendek daftar yang disepakati; menandai item siap sebelum berfungsi; menunda tanggal mulai resmi | Daftar tertulis di register; konfirmasi karyawan baru; waktu menuju produktif |
| Waktu menuju produktif | Menandai awal jam lebih lambat; menutup catatan orientasi lebih awal | Definisi jam di register; atasan dan karyawan baru sama-sama mengonfirmasi |
| Prevalensi solusi sementara | Mengecilkan hati jawaban jujur dengan mengisyaratkan konsekuensi; bertanya hanya kepada kelompok puas | Pernyataan anonimitas; tingkat respons dan campuran responden; kepatuhan pengaman privasi |
| Menit gangguan paksa | Menghitung hanya beberapa jenis interupsi; memindahkan gangguan ke kelompok yang tidak diukur | Definisikan semua jenis interupsi terencana; laporkan menurut kelompok termasuk staf jarak jauh dan shift |
| Waktu penyelesaian permintaan aksesibilitas | Menutup permintaan dengan perbaikan parsial; menandai permintaan sebagai hal lain untuk menghindari jam | Konfirmasi dari peminta bahwa solusi berfungsi; tinjauan permintaan tak bertag |
| Skor denyut alat | Mensurvei hanya pengguna bahagia; mengubah pertanyaan; melatih staf menjawab dengan baik | Log kata-kata stabil; tingkat respons dan campuran; baca komentar |
| Kepatuhan pengaman privasi | Melaporkan kepatuhan tanpa tinjauan independen; melebarkan kelompok untuk menyembunyikan masalah | Tinjauan berkala oleh seseorang di luar tim; terbitkan aturan (nilai k dan penekanan) |

Pembacaan yang sehat adalah karyawan baru yang dapat bekerja pada hari pertama, hitungan interupsi paksa yang menurun, solusi sementara yang mengarah pada alat resmi yang lebih baik, dan staf yang mengatakan mereka memercayai program karena telah melihat apa yang dilakukannya dengan jawaban mereka.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Survei denyut | Suara langsung, murah, mudah diulang | Kelelahan survei; bias respons |
| Telemetri sistem | Objektif, berkelanjutan, tanpa beban survei | Risiko privasi; menunjukkan peristiwa tetapi bukan perasaan |
| Pengamatan dan wawancara | Menemukan gesekan tersembunyi; membangun hubungan | Memakan waktu; sampel kecil |
| Data halus | Diagnosis tepat | Mengidentifikasi orang; mengikis kepercayaan |
| Data teragregasi dengan penekanan | Aman dibagikan dan ditindaklanjuti | Kurang rinci; menyembunyikan kelompok kecil yang mungkin kesulitan |
| Kendali ketat pada perangkat | Keamanan dan kepatuhan | Lebih banyak gangguan paksa; lebih banyak solusi sementara |

Jawaban prosanya adalah memakai ketiga jenis bukti di tingkat kelompok, menyimpan rincian hanya selama diagnosis membutuhkannya, dan memperlakukan keamanan dan pengalaman sebagai pertukaran untuk dibahas terbuka. Tujuannya tempat kerja tempat orang yang termotivasi mendapat yang mereka butuhkan dengan upaya kecil.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Seperti apa hari pertama bagi rekan baru, dan bagaimana kita tahu?**
Minta tim menelusuri jalur dari tawaran sampai tugas nyata pertama. Siapa melakukan apa, dan di mana menunggu? Minta karyawan baru terbaru bergabung dalam percakapan. Fasilitator sebaiknya berfokus pada saat yang membuat orang menunggu atau malu, dan menyepakati satu perubahan yang akan memperbaiki hari karyawan baru berikutnya.

**2. Solusi sementara apa yang dipakai orang yang lebih kita harap tidak mereka pakai, dan apa yang dikatakannya kepada kita?**
Daftar alat tak resmi dan langkah manual yang pernah dilihat tim. Untuk masing-masing, tanyakan kebutuhan apa yang dipenuhinya. Percakapan sering menemukan persyaratan yang terlewat layanan resmi. Putuskan solusi sementara mana yang diadopsi, mana yang diganti dengan opsi resmi lebih baik, dan mana yang dilarang dengan penjelasan.

**3. Berapa menit tindakan kita sendiri mengambil dari rekan tiap bulan?**
Perkirakan mulai ulang paksa, pembaruan, dan prompt untuk orang tipikal. Bandingkan dengan apa yang akan dikatakan pengguna. Fasilitator dapat bertanya apa yang berubah jika angkanya diterbitkan. Sepakati satu gangguan untuk dikurangi atau dijadwal ulang kuartal ini.

**4. Data apa tentang rekan yang dapat kita kumpulkan, dan apa yang harus kita janjikan tidak akan pernah dilakukan dengannya?**
Buat dua daftar: apa yang secara teknis mungkin dan apa yang akan benar-benar dikumpulkan tim. Susun pernyataan singkat tentang tujuan dan batas. Minta perwakilan staf bereaksi. Diskusi menunjukkan di mana garis terhadap pengawasan berada, dan bagaimana menjelaskannya.

**5. Siapa yang paling kesulitan dengan alat kita, dan apakah mereka ada dalam data kita?**
Pikirkan kebutuhan aksesibilitas, pekerja shift, staf jarak jauh, dan orang baru. Periksa apakah survei dan log menjangkau mereka dan apakah aturan kelompok kecil menyembunyikan mereka. Sepakati satu cara mendengarkan kelompok yang paling kurang terlayani secara langsung.

**6. Apa yang kita perbaiki kuartal lalu karena apa yang dikatakan rekan kepada kita, dan apakah mereka mendengar tentangnya?**
Daftar perbaikan dan bagaimana diumumkan. Jika daftarnya pendek, bahas apa yang menghalangi tindakan: kepemilikan, pendanaan, atau ketakutan. Sepakati satu perbaikan terlihat untuk disampaikan sebelum survei berikutnya dan pesan untuk menjelaskannya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman adalah pengguna sekaligus pembangun alat internal. Gesekan mereka sendiri, seperti build lambat, lingkungan tak stabil, dan keterlambatan akses, memperlambat semua yang mereka sampaikan, dan ukuran dalam topik ini berlaku bagi mereka juga. Mereka sebaiknya menjadikan alat internal bagian backlog produk dengan pemilik dan pengguna, dan ikut serta dalam denyut dan tinjauan sebagai rekan (lihat topik 9.1, Kesehatan tim dan pengalaman pengembang).

### Tim layanan dan operasi

Operasi dan service desk membentuk banyak pengalaman, dan mereka staf dengan alat dan beban kerja sendiri. Mereka sebaiknya mengirim perubahan dengan memperhatikan fokus pengguna, menjaga saluran aksesibilitas tetap responsif, dan memakai solusi sementara sebagai umpan balik. Mereka juga sebaiknya melindungi rekan sendiri dari diperingkat oleh data pengalaman. Staf dukungan juga individu yang termotivasi.

### Kepemimpinan dan tata kelola

Pemimpin menetapkan budaya pengukuran. Mereka sebaiknya meminta gesekan disingkirkan, bukan skor dinaikkan, dan mendanai perbaikan. Mereka sebaiknya melindungi komitmen privasi secara tertulis, menolak permintaan memakai data pada individu, dan menerima bahwa kendali keamanan punya biaya pengalaman untuk ditimbang. Tata kelola sebaiknya mengharapkan aturan privasi dan tinjauannya sebagai bagian pelaporan pengalaman apa pun.

### Pelanggan dan pengguna

Orang yang memakai TI internal adalah penulis pengalaman. Mereka pantas mendapat hari pertama yang berfungsi, alat yang menghormati fokus mereka, penjelasan jujur tentang apa yang dikumpulkan tentang mereka, cara untuk menolak bila mungkin, dan bukti bahwa bersuara membawa perubahan. Rekan dengan kebutuhan aksesibilitas sebaiknya ditanya bagaimana membuat layanan berfungsi bagi mereka, dan tidak diperlakukan sebagai kasus khusus.

## Dalam praktik: contoh ITIL agile

TI pusat sebuah universitas mendukung 6.000 staf dan menjalankan service desk, tim platform, dan beberapa tim produk. Angka di bawah bersifat ilustratif.

Kepala TI baru ingin tahu mengapa keluhan staf tentang orientasi bertahan ketika waktu penyelesaian service desk berada dalam target. Ia meminta manajer layanan menjalankan percontohan program pengalaman untuk karyawan baru dan alat kolaborasi utama, dibangun bersama dewan staf. Syarat dewan adalah janji tertulis bahwa tak ada data tentang individu yang akan dipakai, dan dewan setuju meninjau rencana.

Tim mengukur kesiapan hari pertama dan waktu menuju produktif untuk 140 karyawan baru kuartal terakhir, memakai pelacak orientasi dan konfirmasi satu pertanyaan dari karyawan baru dan atasannya. Hanya 46 persen karyawan baru yang punya setiap item yang disepakati berfungsi pada hari pertama, dan median waktu menuju produktif adalah 4 hari, dengan persentil ke-85 sebesar 9 hari. Alasannya, dari wawancara, adalah tiga permintaan terpisah yang masing-masing menunggu tim berbeda, dan langkah pembuatan citra laptop yang selesai terlambat pada hari Jumat. Denyut singkat alat kolaborasi, dikirim ke sepersepuluh staf yang berputar dengan ukuran kelompok minimum 10, menunjukkan penilaian lebih rendah di antara staf yang bekerja malam dan akhir pekan. Log endpoint, diagregasi menurut gedung dan shift, menunjukkan rata-rata 38 menit sebulan prompt mulai ulang dan pembaruan paksa, dengan ekor panjang untuk staf di shift malam, yang mengalami mulai ulang selama jam kerja karena perangkat mereka diperbarui ketika orang lain tidur.

Tim membuat tiga perubahan. Satu permintaan orientasi menggantikan ketiganya, dengan pemilik bernama. Langkah pembuatan citra pindah ke jendela hari kerja. Penjadwalan pembaruan mendapat jendela penundaan yang terikat pada jam kerja pengguna. Mereka menerbitkan aturan privasi di register metrik: ukuran kelompok minimum 10, tak ada data individu dalam laporan mana pun, dan batas retensi enam bulan untuk log mentah. Tiga bulan kemudian, kesiapan hari pertama naik menjadi 81 persen, waktu menuju produktif persentil ke-85 turun menjadi 5 hari, dan menit gangguan paksa untuk staf shift malam turun sekitar separuh. Kepala TI diminta seorang manajer melaporkan departemen mana yang paling banyak mengeluh, untuk menamai tim sebagai tindak lanjut. Ia menolak memeringkat departemen, dan menawarkan membagikan pola tingkat kelompok dan memperbaiki sebabnya. Keputusan dicatat dalam log keputusan, dan dewan meminta memperluas program ke alat kedua.

## Sudut pandang sektor

**Startup.** Semua orang berbicara dengan semua orang, jadi pengamatan dan percakapan akan menemukan sebagian besar gesekan. Jadikan pengalaman hari pertama sangat baik, karena menetapkan nada, dan jaga telemetri minimal. Tulis janji privasi sejak awal, meski tim kecil.

**Bisnis kecil.** Satu administrator mungkin menangani orientasi dan dukungan. Pakai daftar periksa sederhana dan tanyakan setiap karyawan baru apa yang kurang. Berhati-hatilah dengan data kelompok kecil: dengan selusin staf, hampir pemecahan apa pun mengidentifikasi seseorang, jadi andalkan percakapan.

**Perusahaan besar.** Aset besar dan beragam membuat segmentasi berguna dan berisiko. Segmentasikan menurut keluarga peran, jenis lokasi, dan kelas perangkat alih-alih menurut tim, terapkan ukuran kelompok minimum, dan libatkan perwakilan staf. Selaraskan program dengan fungsi keamanan, hukum, dan privasi sejak awal.

**Pemerintah dan sektor publik.** Kewajiban tentang aksesibilitas, kesetaraan, dan privasi sering bersifat undang-undang, dan dewan karyawan atau serikat mungkin punya peran formal. Perlakukan pengujian aksesibilitas dan konsultasi sebagai bagian wajib program, terbitkan aturan privasi, dan hindari mengumpulkan data yang tidak jelas dibutuhkan. Di mana data staf tunduk pada regulasi, libatkan petugas perlindungan data (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya sedang. Survei denyut dan pengamatan butuh waktu orang dan alat survei. Data endpoint biasanya datang dari perkakas yang sudah di-deploy, meski analisis dan tinjauan privasi memakan upaya. Biaya terbesar adalah kemauan memperbaiki apa yang ditemukan, yang mungkin berarti mengubah proses orientasi, kebijakan perangkat, dan praktik pembaruan lintas tim.

Imbal hasil datang dalam waktu yang dipulihkan, ramp-up karyawan baru lebih cepat, lebih sedikit kontak dukungan yang disebabkan gesekan yang dapat dihindari, dan lebih sedikit shadow IT. Anda dapat membangun kasus dari angka Anda sendiri: menit gangguan paksa per orang, hari menuju produktif untuk karyawan baru, dan kontak dukungan tentang masalah yang disingkirkan perbaikan. Berhati-hatilah dengan satu angka produktivitas yang diturunkan dari gaji dan menit, karena bertumpu pada asumsi tentang berapa nilai satu menit yang dipulihkan. Ada juga biaya risiko di sisi lain buku besar: mengumpulkan terlalu banyak data tentang staf dapat menciptakan paparan hukum dan merusak kepercayaan. Sertakan itu dalam total biaya kepemilikan.

## Anti-pola dan jebakan

- **Memakai data pengalaman untuk menghakimi individu.** Itu mengubah program dukungan menjadi pengawasan dan mengakhiri umpan balik jujur. Agregasikan, tekan kelompok kecil, dan katakan demikian.
- **Mengukur hanya rata-rata.** Orang dengan pengalaman terburuk tersembunyi. Lihat ekor dan kelompok yang paling kurang terlayani.
- **Mengumpulkan segalanya karena mungkin.** Lebih banyak data membawa lebih banyak risiko. Kumpulkan apa yang menjawab pertanyaan.
- **Mensurvei tanpa henti.** Orang berhenti menjawab. Putar alat dan jaga singkat.
- **Menghukum solusi sementara.** Orang menyembunyikannya dan kebutuhan yang mendasarinya tak terpenuhi. Belajarlah darinya.
- **Menaruh keamanan dan pengalaman di ruangan terpisah.** Sebagian kendali sepadan biayanya, dan banyak yang tidak. Bahas pertukaran dengan angka.
- **Menganggap hari pertama sebagai masalah orang lain.** Orientasi melintasi SDM, TI, dan atasan. Beri satu pemilik.
- **Mengabaikan aksesibilitas sampai ada keluhan.** Bangun dan uji bersama orang yang terdampak sejak awal.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Memahami gesekan | Hanya keluhan | Wawancara atau survei sesekali | Pengamatan rutin dan denyut untuk alat dan saat kunci | Bukti survei, sistem, dan percakapan gabungan, disegmentasi dengan aman | Pandangan bersama dengan SDM, fasilitas, dan pemasok; staf ikut memiliki prioritas |
| Privasi dan etika | Tanpa aturan yang dinyatakan | Kehati-hatian informal | Aturan tertulis tentang tujuan, minimalisasi, dan ukuran kelompok | Aturan ditinjau independen; kepatuhan diukur | Aturan dirancang bersama perwakilan staf dan diaudit lintas pemasok |
| Tindakan | Perbaikan menurut keluhan | Perbaikan ad hoc | Gesekan teratas di backlog dengan pemilik | Perbaikan didanai, dilacak, dan diumumkan; gangguan direncanakan di sekitar pekerjaan | Perbaikan pengalaman dibangun ke dalam perencanaan lintas tim dan pemasok |

## Daftar periksa

- [ ] Saat-saat kunci (hari pertama, kegagalan perangkat, permintaan akses, perpindahan, keluar) dipetakan dengan pemilik.
- [ ] Kesiapan hari pertama dan waktu menuju produktif diukur dengan daftar dan jam tertulis.
- [ ] Denyut singkat mencakup alat bernama secara bergilir.
- [ ] Menit gangguan paksa diukur menurut kelompok dan ditinjau bersama keamanan.
- [ ] Permintaan aksesibilitas diberi tag, dilacak, dan dikonfirmasi oleh peminta.
- [ ] Laporan memakai ukuran kelompok minimum dan tidak pernah menampilkan individu.
- [ ] Pernyataan tujuan-dan-batas tertulis untuk data pengalaman ada dan dibagikan.
- [ ] Perwakilan staf telah meninjau rencana data di mana badan semacam itu ada.
- [ ] Solusi sementara dikumpulkan dan ditinjau sebagai umpan balik.
- [ ] Hasil dan perbaikan dibagikan kepada staf tiap kuartal.

## Prompt AI

**Petakan saat yang penting.**

```text
Kami ingin memperbaiki [moment, for example the first day for a new starter] di
[type of organization]. Langkah hari ini: [list steps and who owns each]. Gambar
peta teks yang menunjukkan serah terima dan penantian, sarankan di mana gesekan
kemungkinan ada, dan usulkan satu ukuran dari apa yang dikatakan orang, satu dari
apa yang dicatat sistem, dan satu dari pengamatan untuk setiap langkah utama.
Jangan mengarang angka. Daftar asumsi Anda dan pertanyaan yang harus saya ajukan
kepada staf.
```

**Susun pernyataan privasi untuk program pengalaman.**

```text
Susun pernyataan satu halaman berbahasa lugas untuk staf tentang program
pengalaman di [organization type] di [jurisdiction]. Kami mengumpulkan: [list
data]. Tujuan kami [purpose]. Sertakan apa yang tidak akan kami lakukan (misalnya
memakai data pada individu), ukuran kelompok minimum [number], retensi [period],
siapa yang dapat melihat data mentah, dan bagaimana staf dapat mengajukan
kekhawatiran. Tandai apa pun yang harus saya tinjau bersama spesialis privasi atau
perwakilan staf. Jangan memberi kesimpulan hukum. Daftar asumsi Anda.
```

**Analisis komentar denyut tentang suatu alat.**

```text
Berikut [number] komentar teranonimkan tentang [tool] dari [period]: [paste
comments with personal data removed]. Kelompokkan menjadi tema gesekan, hitung
tiap tema, beri dua kutipan representatif untuk masing-masing, dan sarankan tema
mana yang mungkin menunjuk sebab yang dapat diperbaiki versus kebutuhan pelatihan.
Jangan mengidentifikasi individu atau menyimpulkan motif. Daftar asumsi Anda dan
apa yang harus diperiksa orang sebelum bertindak.
```

**Rencanakan pengurangan gangguan.**

```text
Endpoint kami menerima rata-rata [number] interupsi terencana per orang per bulan:
[list types and frequencies]. Persyaratan keamanan: [list]. Usulkan skema yang
mengurangi gangguan pada waktu fokus (misalnya jendela penundaan, penggabungan,
penjadwalan menurut jam kerja) sambil memenuhi persyaratan, dan jelaskan cara
mengukur apakah berhasil tanpa melacak individu. Daftar asumsi Anda dan
pertukaran yang harus saya bahas dengan keamanan.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik pengalaman atau gesekan sebelum Anda menerbitkannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik pengalaman yang direvisi menjaga vektor manipulasi, pagar pembatas, dan aturan privasinya.

## Poin penting

- Tujuannya memberi orang yang termotivasi lingkungan dan dukungan yang mereka butuhkan, jadi ukur gesekan dan singkirkan.
- Gabungkan pertanyaan denyut, ukuran sistem, dan pengamatan, dan lihat kelompok di tepi.
- Hitung menit yang hilang dan interupsi yang disebabkan tindakan TI sendiri, dan rencanakan di sekitar fokus orang.
- Jadikan privasi aturan desain: minimalkan, agregasikan, tekan kelompok kecil, dan jangan pernah menghakimi individu.
- Perlakukan solusi sementara sebagai umpan balik, dan beri tahu staf apa yang Anda perbaiki.
- Sertakan aksesibilitas sejak awal, dan tinjau program bersama orang yang dilayaninya.

## Referensi dan bacaan lanjutan

1. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
3. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
4. Csikszentmihalyi, M., *Flow: The Psychology of Optimal Experience*, Harper & Row, 1990.
5. Sweller, J., "Cognitive load during problem solving: Effects on learning," *Cognitive Science*, 12(2), 1988.
6. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
7. Sweeney, L., "k-anonymity: a model for protecting privacy," *International Journal of Uncertainty, Fuzziness and Knowledge-Based Systems*, 10(5), 2002.
8. Wikipedia, [Employee experience management](https://en.wikipedia.org/wiki/Employee_experience_management).
9. Wikipedia, [Digital workplace](https://en.wikipedia.org/wiki/Digital_workplace).
10. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
11. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
12. Wikipedia, [Employee monitoring](https://en.wikipedia.org/wiki/Employee_monitoring).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [Web accessibility](https://en.wikipedia.org/wiki/Web_accessibility).
15. Wikipedia, [Data minimization](https://en.wikipedia.org/wiki/Data_minimization).
16. Wikipedia, [Pseudonymization](https://en.wikipedia.org/wiki/Pseudonymization).
17. Wikipedia, [K-anonymity](https://en.wikipedia.org/wiki/K-anonymity).
18. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
