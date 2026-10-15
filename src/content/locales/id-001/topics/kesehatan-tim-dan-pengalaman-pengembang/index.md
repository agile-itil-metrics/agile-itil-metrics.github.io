# Kesehatan tim dan pengalaman pengembang

**Tim melakukan pekerjaan terbaiknya ketika umpan balik cepat, beban pada pikiran mereka dapat dikelola, dan mereka dapat menemukan rentang fokus yang panjang, jadi ukur kondisi itu bersama tim, singkirkan hambatan yang terungkap, dan jangan pernah memakai angka untuk memeringkat orangnya.**

## Gambaran umum dan motivasi

Prinsip Manifesto Agile meminta kita membangun proyek di sekitar individu yang termotivasi, memberi mereka lingkungan dan dukungan yang mereka butuhkan, dan memercayai mereka menyelesaikan pekerjaan. Prinsip itu juga meminta agar sponsor, pengembang, dan pengguna mampu mempertahankan kecepatan konstan tanpa batas, dan agar tim merenung secara teratur tentang cara menjadi lebih efektif. Ukuran kesehatan tim dan pengalaman pengembang adalah cara prinsip-prinsip itu menjadi dapat diperiksa. Ukuran itu bertanya seperti apa rasanya mengerjakan pekerjaan di sini, dan apa yang menghalangi.

[Pengalaman pengembang](https://en.wikipedia.org/wiki/Developer_experience) adalah jumlah interaksi yang dimiliki pengembang dengan perkakas, proses, dan orang yang bekerja bersama mereka. Gagasan ini lebih luas daripada rekayasa perangkat lunak. Operator, staf service desk, analis, dan siapa pun yang membangun atau menjalankan layanan punya pengalaman atas lingkungannya. Topik ini memakai “pengalaman pengembang” untuk para insinyur dan “kesehatan tim” untuk kelompok yang lebih luas, dan ukuran yang sama berlaku untuk keduanya.

Dua kerangka riset banyak dikutip. Kerangka SPACE, diterbitkan Nicole Forsgren dan rekan pada 2021, berargumen bahwa [produktivitas](https://en.wikipedia.org/wiki/Productivity) pengembang tak dapat direduksi menjadi satu angka, dan mengusulkan lima dimensi: kepuasan dan kesejahteraan, kinerja, aktivitas, komunikasi dan kolaborasi, serta efisiensi dan alur. Tindak lanjut 2023 oleh Abi Noda, Margaret-Anne Storey, Nicole Forsgren, dan Michaela Greiler, berjudul “DevEx: What Actually Drives Productivity,” berfokus pada tiga dimensi yang dapat dirasakan pengembang dan dapat diubah organisasi: lingkaran umpan balik, beban kognitif, dan keadaan alur. Kedua makalah menyarankan menggabungkan data survei tentang persepsi dengan data dari sistem tentang alur kerja, dan keduanya memperingatkan agar tidak memakai satu ukuran saja, terutama hitungan aktivitas, sebagai wakil produktivitas.

Tiga dimensi DevEx adalah titik awal yang praktis.

- **Lingkaran umpan balik.** Secepat apa seseorang mengetahui hasil dari apa yang dilakukannya? Build lambat, pengujian lambat, tinjauan lambat, dan persetujuan lambat masing-masing menambah penantian, dan penantian memutus konsentrasi. Umpan balik cepat juga merupakan penopang inti pengiriman berkelanjutan.
- **[Beban kognitif](https://en.wikipedia.org/wiki/Cognitive_load).** Seberapa banyak yang harus dipegang seseorang dalam pikiran untuk menyelesaikan sesuatu? Sistem rumit, dokumentasi buruk, kepemilikan yang tak jelas, dan banyak perkakas menaikkan beban. Menguranginya membebaskan kapasitas untuk pekerjaan yang penting.
- **[Keadaan alur](https://en.wikipedia.org/wiki/Flow_(psychology)).** Dapatkah seseorang menemukan rentang tanpa gangguan untuk berkonsentrasi? Rapat, notifikasi, permintaan tak terencana, dan perpindahan konteks semuanya mengikisnya.

Ukuran di wilayah ini luar biasa mudah disalahgunakan. Hitungan commit, pull request, tiket yang ditutup, atau jam daring adalah ukuran aktivitas. Mudah dikumpulkan dan memberi tahu sedikit tentang apakah orang dapat melakukan pekerjaan baik, dan mengundang manipulasi. Ukuran persepsi bersifat subjektif dan berharga, dan dapat terdistorsi jika orang takut akan konsekuensi jawaban jujur. Setiap ukuran tentang manusia dapat tergelincir menjadi pengawasan. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku dengan sisi etis: ketika ukuran tentang manusia menjadi target, orang berhenti mengatakan yang sebenarnya tentang pekerjaan mereka (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Topik ini membangun di atas pengalaman pengguna internal yang diuraikan sebelumnya (lihat topik 6.4, Pengalaman pengguna dan karyawan) dan berlanjut dalam topik berikutnya tentang kesejahteraan, kolaborasi, keterampilan, dan perbaikan.

## Prinsip utama

- **Ukur kondisinya, bukan orangnya.** Tanyakan tentang lingkungan dan hambatannya, dan laporkan pada tingkat tim.
- **Gabungkan persepsi dengan data alur kerja.** Apa yang dirasakan orang dan apa yang dicatat sistem masing-masing melewatkan sebagian gambaran.
- **Biarkan tim memiliki pemeriksaan kesehatannya.** Orang yang paling dekat dengan pekerjaan memilih pertanyaan dan membaca hasilnya lebih dulu.
- **Jangan pernah memakai ukuran ini untuk memeringkat atau mengevaluasi individu.** Itu akan mengakhiri jawaban jujur.
- **Hindari hitungan aktivitas sebagai produktivitas.** Hitungan commit, tiket, atau jam bukan hasil.
- **Bertindaklah secara terlihat atas apa yang Anda dengar.** Perbaiki hambatannya, atau katakan mengapa tidak.
- **Lindungi kecepatan yang berkelanjutan.** Tim yang berjalan panas tanpa batas sedang meminjam dari masa depannya.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Waktu lingkaran umpan balik | Waktu bagi seseorang untuk mendapat hasil dari tindakan umum, menurut jenis lingkaran | median dan persentil ke-85 menit atau jam untuk build, jalannya pengujian, penantian tinjauan kode, dan deployment, per tim | menit atau jam | Stempel waktu alat pipeline dan tinjauan, diagregasi menurut tim | Manajemen rilis dan deployment; perbaikan berkelanjutan | Umpan balik cepat dalam pengiriman berkelanjutan | Mingguan |
| Porsi waktu fokus | Porsi waktu kerja dalam blok tanpa gangguan dengan panjang minimum yang disepakati, seperti dilaporkan tim | jam yang dilaporkan tim dalam blok fokus / jam kerja, dikumpulkan dalam denyut singkat | persen | Denyut tim; data kalender hanya jika tim memilih ikut dan diagregasi | Perbaikan berkelanjutan; manajemen pengetahuan | Waktu terlindungi untuk kerja mendalam | Bulanan |
| Peringkat beban kognitif | Peringkat tim atas seberapa sulit memahami dan mengubah sistem atau proses bernama | rata-rata peringkat dan sebaran pada skala singkat yang disepakati, per sistem | poin skala | Denyut singkat yang dikaitkan dengan sistem atau proses | Desain layanan; manajemen pengetahuan | Pemahaman bersama atas pekerjaan | Kuartalan |
| Waktu penyelesaian hambatan | Waktu dari hambatan diangkat tim sampai disingkirkan atau keputusan tercatat untuk tidak menyingkirkannya | median dan persentil ke-85 hari dari diangkat sampai diselesaikan atau diputuskan | hari | Daftar atau pelacak hambatan | Perbaikan berkelanjutan; manajemen masalah | Hambatan disingkirkan | Bulanan |
| Tren pemeriksaan kesehatan tim | Peringkat tim sendiri pada dimensi yang dipilihnya, dilacak dari waktu ke waktu | perubahan peringkat dimensi pilihan tim antar-pemeriksaan | poin skala | Pemeriksaan kesehatan tim, dimiliki tim | Perbaikan berkelanjutan | Renungan tim tentang cara menjadi lebih efektif | Bulanan atau kuartalan |
| Kepuasan perkakas dan proses | Peringkat tim atas kepuasan terhadap perkakas dan proses yang mereka pakai setiap hari | rata-rata peringkat atau porsi favorable untuk tiap perkakas atau proses bernama | poin skala atau persen | Denyut singkat | Manajemen tingkat layanan; perbaikan berkelanjutan | Kecocokan lingkungan dengan pekerjaan | Kuartalan |
| Cakupan dimensi | Jumlah dimensi SPACE yang dicakup ukuran yang benar-benar dipakai tim | hitungan dari lima dimensi dengan setidaknya satu ukuran yang dipakai | hitungan (0 sampai 5) | Register metrik | Pengukuran dan pelaporan; tata kelola | Ukuran yang seimbang | Tahunan |

Agregasikan segalanya pada tingkat tim dan tetapkan ukuran kelompok minimum, misalnya tidak ada hasil untuk kelompok yang lebih kecil dari lima orang. Waktu fokus adalah uraian tim sendiri, dan angka turunan kalender apa pun bersifat opsional, diagregasi, dan disepakati tim. Waktu lingkaran umpan balik berasal dari sistem dan menggambarkan pipeline, bukan orang. Cakupan dimensi adalah pemeriksaan atas program pengukuran, dimaksudkan untuk mencegah ketergantungan pada satu jenis ukuran.

## Rekomendasi

### Mulai dengan kondisi tempat orang bekerja

**1. Tanyakan kepada tim apa yang memperlambat mereka.** Mulailah dengan percakapan, bukan survei: apa yang membuang waktu Anda, apa yang sulit dipahami, dan apa yang paling sering menyela Anda? Tuliskan jawabannya dengan kata-kata tim. Percakapan menemukan masalah yang tak akan ditemukan dasbor mana pun, dan membangun kepercayaan yang dibutuhkan survei kemudian. Sepakati dua atau tiga yang diukur.

**2. Pakai tiga dimensi DevEx sebagai lensa.** Untuk tiap lingkaran umpan balik, beban kognitif, dan keadaan alur, pilih satu pertanyaan persepsi dan, bila mungkin, satu ukuran sistem. Untuk lingkaran umpan balik, pasangkan “seberapa puas Anda dengan lamanya build?” dengan durasi build. Untuk beban kognitif, tanyakan seberapa sulit memahami dan mengubah sistem bernama. Untuk alur, tanyakan seberapa sering orang dapat bekerja tanpa gangguan. Pasangkan apa yang dikatakan orang dengan apa yang dicatat sistem, dan lihat ketidaksepakatannya.

**3. Cakup beberapa dimensi SPACE.** Pilih ukuran dari setidaknya tiga dari lima dimensi agar tak ada satu jenis data yang mendominasi. Kepuasan dan kesejahteraan, kolaborasi, serta efisiensi dan alur sering paling penting bagi tim yang menjalankan layanan. Perlakukan ukuran aktivitas dengan sangat hati-hati, dan pakai hanya sebagai konteks. Ukuran cakupan dimensi menjaga ini tetap jujur.

### Ukur dengan hati-hati

**4. Biarkan tim memiliki dan membaca pemeriksaan kesehatannya lebih dulu.** Pemeriksaan kesehatan tim adalah penilaian diri singkat pada dimensi yang dipilih tim, seperti kesenangan, dukungan, kecepatan, pembelajaran, dan kemudahan rilis. Tim membaca dan membahas hasilnya sendiri sebelum ada yang melihat ringkasan. Pihak lain melihat tren dan hambatan yang diminta tim untuk dibantu, bukan skor untuk dibandingkan. Ini menjaga alat tetap sebagai bantuan belajar, dan bergantung pada [rasa aman psikologis](https://en.wikipedia.org/wiki/Psychological_safety), keyakinan bersama bahwa orang tidak akan dihukum karena bersuara.

**5. Catat waktu lingkaran umpan balik yang penting.** Ukur durasi lingkaran yang dikeluhkan orang: build lokal, rangkaian pengujian, penantian tinjauan kode, deployment ke lingkungan uji. Laporkan median dan persentil ke-85, karena ekor yang lambat lebih menyakitkan daripada yang disarankan rata-rata. Bagikan angka kepada tim pemilik pipeline, dan jadikan perbaikan sebagai pekerjaan reguler (lihat topik 2.7, Metrik pull request dan tinjauan kode).

**6. Lindungi fokus, dan ukur dengan lembut.** Tanyakan tentang fokus dalam denyut, dan lihat apa yang menyebabkan gangguan: beban rapat, notifikasi, permintaan tak terencana. Jika tim ingin melihat pola kalender, lakukan dengan persetujuan mereka dan agregasikan hasilnya. Jangan pernah melacak aktivitas atau kehadiran individu. Tujuannya menemukan gangguan struktural untuk disingkirkan, seperti rapat yang bisa menjadi dokumen.

**7. Lacak hambatan sampai selesai.** Simpan daftar terlihat hambatan yang diangkat tim, dan ukur berapa lama diselesaikan atau dengan sadar disisihkan. Daftar panjang yang tak pernah menyusut mengajari orang bahwa mengangkat masalah sia-sia. Keputusan untuk tidak menyingkirkan hambatan, dengan alasan, dihitung sebagai penyelesaian.

### Pakai hasilnya untuk memperbaiki

**8. Bertindaklah pada satu atau dua hal sekaligus.** Pilih hambatan bernilai tertinggi, perbaiki, dan beri tahu tim. Tindakan terlihat berbuat lebih banyak bagi kepercayaan daripada laporan panjang. Tahan godaan meluncurkan banyak inisiatif sekaligus.

**9. Pasangkan ukuran manusia dengan ukuran hasil.** Lihat bagaimana lingkaran umpan balik dan beban kognitif berhubungan dengan hasil pengiriman dan stabilitas (lihat topik 2.8, Metrik DORA). Jangan mengklaim sebab-akibat dari korelasi dalam data Anda sendiri. Pakai pemasangan untuk menemukan pertanyaan yang dijelajahi, seperti apakah tim dengan tinjauan lebih lambat juga punya cycle time lebih panjang.

**10. Jauhkan hitungan aktivitas dari percakapan.** Jangan melaporkan commit, baris kode, atau tiket yang ditutup per orang. Hitungan keluaran tim dapat berguna untuk alur, tetapi sedikit bicara tentang kesehatan. Jika seseorang meminta metrik aktivitas individu, jelaskan risetnya dan tawarkan ukuran kondisi sebagai gantinya.

### Lindungi orang

**11. Tetapkan aturan privasi sebelum Anda mengumpulkan.** Tulis apa yang dikumpulkan, mengapa, siapa yang melihat, berapa lama disimpan, dan apa yang tidak akan pernah dilakukan dengannya. Agregasikan ke tingkat tim, tekan kelompok kecil, dan biarkan perwakilan orang yang terlibat meninjau aturan. Jangan memakai data ini dalam tinjauan kinerja, promosi, atau disiplin.

**12. Jadikan kecepatan berkelanjutan sebagai bawaan.** Waspadai tanda tim berjalan panas: rentetan panjang insiden di luar jam kerja, keadaan mendesak permanen, daftar hambatan yang naik, kepuasan yang turun. Perlakukan ini sebagai masalah sistem untuk diperbaiki dengan lingkup, staf, atau prioritas. Kecepatan konstan yang dapat dipertahankan orang adalah tujuan desain, dan mendukung mutu, pembelajaran, dan retensi (lihat topik 9.2, Metrik kepuasan dan kesejahteraan).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Waktu lingkaran umpan balik | Mengecualikan kasus lambat; mengukur jalur cepat yang tidak dilalui sebagian besar pekerjaan | Laporkan persentil ke-85; definisikan awal dan akhir tiap lingkaran di register |
| Porsi waktu fokus | Memblokir waktu kalender tanpa fokus; melaporkan fokus yang digelembungkan untuk menyenangkan manajer | Denyut milik tim; bandingkan dengan penyebab gangguan; tanpa pelaporan individu |
| Peringkat beban kognitif | Memberi peringkat rendah pada sistem untuk menghindari pengamatan; memilih sistem mudah untuk dinilai | Nilai daftar sistem tetap; bandingkan dengan waktu orientasi dan pola insiden |
| Waktu penyelesaian hambatan | Menutup hambatan tanpa memperbaikinya; menolak mencatat hambatan | Tim mengonfirmasi penyelesaian; tingkat hambatan yang dibuka kembali |
| Tren pemeriksaan kesehatan tim | Manajer menekan skor baik; tim menyesuaikan skor untuk menghindari perhatian | Tim memiliki hasil; tren dibagikan hanya dengan persetujuan tim |
| Kepuasan perkakas dan proses | Menyurvei pengguna yang senang; melatih staf menjawab dengan baik | Tingkat respons dan bauran; baca komentar; kaitkan dengan ukuran sistem |
| Cakupan dimensi | Menghitung dimensi dengan ukuran simbolis | Periksa bahwa tiap ukuran yang dihitung dipakai dalam keputusan |

Pembacaan yang sehat adalah lingkaran umpan balik yang lebih pendek dan lebih mantap, beban kognitif yang turun pada sistem kunci, tim yang melaporkan fokus nyata, hambatan yang diangkat dan diselesaikan, pemeriksaan kesehatan yang dipercaya tim, dan tidak ada pemakaian data pada individu.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Survei persepsi | Menangkap apa yang tak bisa sistem; biaya rendah | Subjektif; rentan terhadap ketakutan dan kelelahan |
| Ukuran alur kerja | Objektif; berkelanjutan | Melewatkan perasaan dan sebab; risiko pengawasan |
| Pemeriksaan kesehatan milik tim | Jujur dan berguna bagi tim | Sulit dibandingkan; sulit diskalakan |
| Survei standar seluruh perusahaan | Dapat dibandingkan antar-tim | Kurang relevan; dipakai untuk memeringkat |
| Hitungan aktivitas | Mudah dikumpulkan | Wakil yang buruk; mudah dimanipulasi |
| Ukuran berfokus kondisi | Menunjuk pada sebab yang dapat diperbaiki | Butuh upaya tindak lanjut |
| Denyut yang sering | Tepat waktu | Kelelahan survei |
| Survei tahunan | Beban rendah | Lambat; basi |

Jawaban prosanya adalah menggabungkan pemeriksaan kesehatan milik tim dan denyut singkat dengan ukuran alur kerja atas lingkaran yang dikeluhkan orang, menghindari hitungan aktivitas, dan menjaga privasi. Pakai perbandingan seluruh perusahaan dengan hemat, dan jangan pernah untuk memeringkat tim.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa lingkaran umpan balik paling lambat dalam hari kerja kita, dan sebenarnya berapa lama?**
Pilih lingkaran yang paling dikeluhkan orang. Ukur waktunya dari sistem dan bandingkan dengan yang dikatakan orang. Fasilitator sebaiknya mencatat kejutan, ke arah mana pun. Sepakati satu perubahan yang akan memperpendeknya, dan siapa pemiliknya.

**2. Sistem mana yang kita segani untuk diubah, dan apa yang membuatnya sulit?**
Namai sistemnya. Apakah kesulitannya di kode, dokumentasi, perkakas, atau pengetahuan di beberapa kepala? Tanyakan satu perbaikan apa yang akan paling menurunkan beban. Rencanakan cara mengetahui apakah berhasil.

**3. Kapan terakhir masing-masing dari kita punya blok panjang waktu tanpa gangguan, dan apa yang menyela yang gagal?**
Bagikan dengan jujur dan tanpa menyalahkan. Daftar gangguan dan pilah menjadi struktural (rapat, notifikasi, permintaan tak terencana) dan insidental. Pilih satu gangguan struktural untuk dikurangi.

**4. Hambatan mana yang telah kita angkat lebih dari sekali tanpa hasil?**
Lihat daftar hambatan. Untuk tiap butir yang sudah lama, tanyakan siapa yang bisa menyelesaikannya dan apa yang menghalangi mereka. Jika tim telah berhenti mengangkat hambatan, bahas mengapa. Sepakati satu untuk dieskalasi dengan bukti.

**5. Apa yang akan membuat kita ragu memberi jawaban jujur pada pemeriksaan kesehatan?**
Bahas ketakutan tentang bagaimana hasil dapat dipakai. Fasilitator sebaiknya mencatat kekhawatiran dan menyepakati aturan: siapa yang melihat data, apa yang tidak akan pernah dilakukan dengannya. Jika aturan tak dipercaya, katakan, dan putuskan apa yang akan memperoleh kepercayaan.

**6. Ukuran kita mana yang bisa naik sementara pekerjaan memburuk?**
Daftar ukuran dan pikirkan cara tiap ukuran dapat diperbaiki tanpa membantu siapa pun. Tetapkan pagar pembatas untuk masing-masing. Hapus ukuran apa pun yang tak punya guna dalam keputusan.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman paling tahu apa yang memperlambat mereka dan adalah pemilik pemeriksaan kesehatan mereka sendiri. Mereka sebaiknya menamai hambatan, mencatat waktu lingkaran yang mereka kendalikan, dan memutuskan bersama tim apa yang diperbaiki lebih dulu. Mereka sebaiknya menolak tekanan melaporkan aktivitas individu dan berkeras pada ukuran tingkat tim.

### Tim layanan dan operasi

Tim operasi memikul siaga, interupsi, dan pekerjaan tak terencana yang mengikis fokus dan kecepatan. Mereka sebaiknya mengangkat beban struktural sebagai masalah sistem, mengukur lingkaran perkakas mereka sendiri, dan menjaga rotasi yang berkelanjutan. Mereka diuntungkan oleh daftar hambatan bersama dengan tim pengiriman, karena banyak hambatan melintasi batas.

### Kepemimpinan dan tata kelola

Pemimpin menetapkan kondisi dan memutuskan bagaimana data dipakai. Mereka sebaiknya mendanai perbaikan yang diungkap ukuran kondisi, melindungi aturan privasi, dan meminta tren dan hambatan sebagai ganti skor untuk dibandingkan. Tata kelola sebaiknya memperlakukan permintaan metrik aktivitas individu sebagai alasan meninjau ulang aturan, dan mengharapkan pekerjaan perbaikan terlihat.

### Pelanggan dan pengguna

Pengguna diuntungkan oleh tim yang dapat bekerja dengan tenang dan belajar cepat, karena masalah mereka terselesaikan dengan baik. Mereka juga memperhatikan ketika tim kewalahan: jawaban lebih lambat, kesalahan berulang, pergantian tinggi. Umpan balik mereka adalah bukti tentang kesehatan tim dari luar, dan mereka berhak atas kejujuran tentang bagaimana perbaikan diprioritaskan.

## Dalam praktik: contoh ITIL agile

Kelompok teknologi sebuah perusahaan asuransi nasional punya 14 tim yang membangun dan menjalankan layanan polis dan klaim. Pimpinan meminta dasbor produktivitas pengembang. Permintaan pertama adalah commit dan tiket yang ditutup per orang. Kepala efektivitas rekayasa mengusulkan pendekatan berbeda. Angka di bawah bersifat ilustratif.

Ia mulai dengan percakapan di lima tim. Tiga hambatan muncul berulang: rangkaian pengujian memakan 70 menit, tinjauan kode menunggu lama pada tim yang bergantung pada dua peninjau senior, dan tak ada yang merasa mampu mengubah layanan perhitungan klaim lama. Ia mengukur apa yang dapat ia ukur dari sistem. Median lingkaran build-dan-uji adalah 58 menit dengan persentil ke-85 sebesar 92. Median penantian tinjauan pertama adalah 9 jam kerja dan persentil ke-85 adalah 31 jam. Ia menambahkan denyut kuartalan singkat dengan tiga pertanyaan DevEx, dengan kelompok pelaporan minimum lima orang. Peringkat beban kognitif untuk layanan perhitungan klaim adalah 4,4 pada skala lima poin dengan 5 sangat sulit, dibanding 2,6 untuk portal polis. Waktu fokus yang dilaporkan tim sekitar 3 jam sehari, dengan rapat dan permintaan tak terencana sebagai penyebab utama. Setiap tim menjalankan pemeriksaan kesehatannya sendiri pada dimensi yang dipilihnya, dan hanya membaca tren gabungan.

Kelompok menyepakati empat tindakan dengan tim. Rangkaian pengujian dipecah dan diparalelkan, dan persentil ke-85 turun dari 92 menjadi 41 menit dalam dua bulan. Jadwal bergilir tinjauan menyebarkan beban melampaui dua peninjau senior, dan penantian persentil ke-85 turun menjadi 14 jam. Tiga tim menyepakati blok mingguan tanpa rapat, dan satu tim merombak cara permintaan tak terencana sampai kepadanya. Layanan perhitungan klaim menjadi proyek belajar bersama, dengan pairing dan dokumentasi, dan peringkat beban kognitifnya turun menjadi 3,5 selama dua kuartal. Waktu fokus yang dilaporkan naik menjadi sekitar 4 jam.

Ketika seorang manajer senior kembali meminta hitungan commit individu, kepala efektivitas rekayasa menjelaskan riset SPACE dan DevEx dan menawarkan dasbor kondisi. Keputusan dicatat, bersama aturan privasi yang menyatakan aktivitas individu tidak akan pernah dipakai dalam tinjauan. Satu tim meminta hasil pemeriksaan kesehatannya tidak diringkas untuk pimpinan kuartal ini, dan permintaan itu dikabulkan. Pergantian karyawan di tim yang terlibat turun selama setahun berikutnya, dan ia mencatat bahwa ia tak dapat membuktikan hubungannya dan tidak akan mengklaimnya.

## Sudut pandang sektor

**Startup.** Semua orang saling kenal, jadi percakapan mengalahkan survei. Catat waktu lingkaran umpan balik utama, jaga build tetap cepat, dan waspadai tanda kecepatan yang tak berkelanjutan, karena beberapa orang memikul banyak. Jangan mengimpor program survei besar.

**Bisnis kecil.** Tim kecil mungkin satu atau dua orang yang membangun sekaligus mendukung. Risiko utama mereka adalah gangguan dan ketergantungan pada individu. Simpan daftar hambatan sederhana, pastikan ada pengganti saat absen, dan tanyakan satu sama lain secara teratur apa yang menghalangi. Data tingkat individu secara inheren mengidentifikasi, jadi andalkan percakapan.

**Perusahaan besar.** Skala memberi ragam dan godaan membandingkan. Sediakan perangkat bersama (pertanyaan denyut, pencatatan waktu lingkaran) sambil membiarkan tim memiliki pemeriksaan kesehatan mereka. Agregasikan dengan hati-hati, bagikan pola antar-tim untuk menyebarkan perbaikan, dan jauhkan peringkat. Libatkan dewan karyawan atau perwakilan pegawai di mana ada.

**Pemerintah dan sektor publik.** Pengadaan, aturan keamanan, dan rantai persetujuan memperpanjang lingkaran umpan balik, dan staf mungkin punya perlindungan kuat atas pemantauan. Ukur lingkaran, libatkan perwakilan dalam menetapkan aturan data, dan pakai temuan untuk menyederhanakan proses. Pegawai negeri yang termotivasi oleh nilai pelayanan diuntungkan oleh penyingkiran hambatan yang terlihat (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah waktu tim untuk pemeriksaan kesehatan dan denyut, sedikit instrumentasi pipeline dan alat tinjauan, analis atau pelatih untuk membantu menafsirkan hasil dan memfasilitasi, dan waktu rekayasa untuk menyingkirkan hambatan. Sebagian besar biaya ini kecil dibanding biaya lingkaran lambat yang dikalikan pada banyak orang.

Imbal hasilnya datang dari waktu yang dipulihkan, pengerjaan ulang yang lebih sedikit, retensi lebih baik, dan pembelajaran lebih cepat. Estimasi dari data Anda sendiri: jam per pekan yang hilang untuk menunggu build dan tinjauan di seluruh kelompok, biaya perekrutan dan orientasi untuk menggantikan orang yang pergi, dan pola insiden atau cacat yang terkait dengan tim yang kelebihan beban. Berhati-hatilah mengubah menit menjadi uang, dan nyatakan asumsinya. Hindari klaim dari studi terbitan tentang peningkatan produktivitas kecuali Anda dapat menelusuri metode dan kecocokannya. Ingat biaya jika keliru: program yang dipandang sebagai pengawasan merusak kepercayaan dan mutu setiap survei berikutnya (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Dasbor produktivitas individu.** Mengukur aktivitas, mengundang manipulasi, dan merusak kepercayaan. Ukur kondisi pada tingkat tim.
- **Memakai skor pemeriksaan kesehatan untuk membandingkan tim.** Tim lalu mengelola skor. Biarkan tim memiliki hasil mereka.
- **Survei tanpa tindakan.** Orang berhenti menjawab. Perbaiki sesuatu yang terlihat tiap siklus.
- **Mengukur waktu daring atau kehadiran.** Menghargai keterlihatan dan menghukum fokus. Ukur lingkaran dan hambatan.
- **Satu ukuran untuk segalanya.** Melewatkan sebagian besar gambaran. Cakup beberapa dimensi.
- **Mengabaikan ekor.** Median menyembunyikan lingkaran lambat yang menyakitkan. Laporkan persentil.
- **Menyalahkan orang atas masalah sistem.** Hambatan biasanya struktural. Perbaiki strukturnya.
- **Berjalan panas sebagai hal normal.** Urgensi permanen membakar orang. Perlakukan kelebihan beban berkepanjangan sebagai kegagalan perencanaan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Memahami kondisi | Anekdot | Survei sesekali | Percakapan dan denyut reguler tentang lingkaran umpan balik, beban, dan alur | Data persepsi dan alur kerja digabung, dengan tren tingkat tim | Pandangan bersama atas kondisi lintas tim dan pemasok; tim ikut merancang ukuran |
| Kepemilikan dan etika | Manajemen membaca semuanya | Kepedulian informal | Pemeriksaan kesehatan milik tim; aturan privasi tertulis | Aturan ditinjau bersama perwakilan; larangan pemakaian individu ditegakkan | Aturan dan praktik diaudit secara independen; tim mengendalikan pembagian data |
| Tindakan | Keluhan tak ditangani | Perbaikan ad hoc | Daftar hambatan dengan pemilik; satu atau dua perbaikan per siklus | Perbaikan dilacak dan dikaitkan dengan hasil; kecepatan berkelanjutan dipantau | Penyingkiran hambatan terbangun dalam perencanaan; pembelajaran dibagikan luas |

## Daftar periksa

- [ ] Tim telah mengatakan dengan kata-kata mereka sendiri apa yang memperlambat mereka.
- [ ] Setidaknya satu pertanyaan persepsi dan satu ukuran sistem mencakup tiap lingkaran umpan balik, beban kognitif, dan alur.
- [ ] Ukuran berasal dari setidaknya tiga dimensi SPACE.
- [ ] Setiap tim memiliki pemeriksaan kesehatannya dan membaca hasilnya lebih dulu.
- [ ] Waktu lingkaran umpan balik dilaporkan sebagai median dan persentil ke-85.
- [ ] Daftar hambatan terlihat punya pemilik, dan waktu penyelesaian dilacak.
- [ ] Hasil dilaporkan pada tingkat tim dengan ukuran kelompok minimum.
- [ ] Aturan privasi tertulis menyatakan data individu tidak akan dipakai dalam tinjauan.
- [ ] Hitungan aktivitas tidak dilaporkan sebagai produktivitas.
- [ ] Tim melihat setidaknya satu perbaikan per siklus.

## Prompt AI

**Susun pertanyaan denyut untuk tiga dimensi DevEx.**

```text
Susun denyut singkat tidak lebih dari enam pertanyaan untuk [type of team] yang
mencakup lingkaran umpan balik, beban kognitif, dan keadaan alur. Pakai kata-kata
netral, skala konsisten, dan satu komentar terbuka. Untuk tiap pertanyaan sarankan
ukuran sistem yang cocok untuk dibandingkan. Jangan mengklaim hasil penelitian.
Daftar asumsi Anda dan cara pertanyaan dapat disalahbaca.
```

**Analisis pola daftar hambatan.**

```text
Berikut daftar hambatan tim selama [period] terakhir dengan tanggal diangkat,
tanggal diselesaikan, dan deskripsi singkat: [paste, sanitized]. Kelompokkan
hambatan menurut sebab, tunjukkan butir lama dan pola, dan sarankan satu atau dua
yang ditangani lebih dulu serta alasannya. Jangan menyimpulkan motif atau menamai
individu. Daftar asumsi Anda dan apa yang sebaiknya dikonfirmasi tim.
```

**Tulis aturan privasi untuk program kesehatan tim.**

```text
Susun satu halaman aturan untuk program kesehatan tim dan pengalaman pengembang
di [type of organization]. Cakup apa yang dikumpulkan, tujuan, siapa melihat apa,
ukuran kelompok minimum, retensi, janji bahwa data individu tidak akan dipakai
dalam tinjauan kinerja, dan cara staf mengangkat kekhawatiran. Tandai apa pun
yang sebaiknya saya tinjau bersama hukum, privasi, dan perwakilan pegawai. Jangan
memberi kesimpulan hukum. Daftar asumsi Anda.
```

**Bandingkan kondisi dengan hasil.**

```text
Untuk [number] tim kami punya ukuran kondisi (waktu lingkaran umpan balik,
peringkat beban kognitif, waktu fokus) dan ukuran hasil (cycle time, change fail
rate, insiden): [paste table]. Gambarkan pola, katakan di mana data terlalu jarang
untuk menyimpulkan apa pun, dan sarankan hipotesis untuk diuji bersama tim. Jangan
mengklaim sebab-akibat. Daftar asumsi Anda dan kewaspadaan.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik kesehatan tim atau pengalaman pengembang.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik terkait manusia membawa vektor manipulasi, pagar pembatas, dan aturan privasinya.

## Poin penting

- Ukur kondisi tempat orang bekerja: lingkaran umpan balik, beban kognitif, dan alur.
- Gabungkan apa yang dikatakan orang dengan apa yang dicatat sistem, dan lihat ketidaksepakatannya.
- Biarkan tim memiliki pemeriksaan kesehatan mereka, laporkan pada tingkat tim, dan jangan pernah memakai data pada individu.
- Hindari hitungan aktivitas sebagai pengganti produktivitas.
- Bertindaklah secara terlihat pada satu atau dua hambatan sekaligus, dan lacak berapa lama hambatan diselesaikan.
- Lindungi kecepatan yang dapat dipertahankan tim tanpa batas.

## Referensi dan bacaan lanjutan

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
