# Metrik backlog dan penyempurnaan

**Backlog adalah antrean janji, jadi ukur berapa banyak janji yang menunggu, berapa lama mereka menunggu, dan seberapa banyak dari rentang pekerjaan berikutnya yang benar-benar siap, dan perlakukan tumpukan item lama yang membesar sebagai keputusan yang belum Anda ambil.**

## Gambaran umum dan motivasi

Setiap tim yang membangun atau menjalankan layanan menyimpan daftar pekerjaan yang telah disepakati untuk dipertimbangkan. Dalam praktik agile daftar ini adalah [backlog produk](https://en.wikipedia.org/wiki/Product_backlog), kumpulan item berurutan yang menjelaskan apa yang mungkin dikerjakan untuk memperbaiki produk. Pada papan alur padanannya adalah kumpulan item yang menunggu di sebelah kiri kolom yang sudah dimulai. Dalam manajemen layanan TI (ITSM), sebagaimana dijelaskan [ITIL](https://en.wikipedia.org/wiki/ITIL), padanannya adalah insiden, permintaan layanan, masalah, dan perubahan terbuka yang menunggu dalam antrean. Semuanya adalah backlog. Mereka berbeda dalam siapa yang mengisinya, seberapa cepat item harus keluar, dan apa artinya sebuah item menunggu.

Sebagian besar datanya berasal dari [sistem pelacak isu](https://en.wikipedia.org/wiki/Issue_tracking_system) atau alat ITSM. Metrik backlog menjawab pertanyaan polos: apakah jumlah pekerjaan yang dijanjikan sepadan dengan kapasitas untuk mengerjakannya, dan apakah pekerjaan yang dijanjikan masih layak dikerjakan? Backlog yang tumbuh tanpa batas tidak menggambarkan rencana. Ia menggambarkan daftar keinginan, dan setiap pembacanya, dari pemilik produk sampai pelanggan yang mengangkat sebuah item, akan membentuk gagasan sendiri tentang kapan ia akan dikerjakan. Jawaban jujurnya sering “tidak akan,” dan harga tidak mengatakannya dibayar dalam kepercayaan, waktu yang dihabiskan membaca ulang item lama, dan keputusan yang dibuat atas informasi basi.

Penyempurnaan adalah aktivitas yang menjaga backlog berguna. Dalam praktik agile, penyempurnaan backlog produk adalah pekerjaan berkelanjutan menambahkan rincian, estimasi, dan urutan pada item agar siap dimulai. Tim yang menarik pekerjaan seiring kapasitas bebas sering menyebut aktivitas yang sama replenishment atau pembersihan backlog. Dalam ITSM ia muncul sebagai triase, kategorisasi, dan perapian daftar kesalahan yang diketahui atau masalah. Metrik dalam topik ini mengukur ukuran dan usia backlog, berapa banyak pekerjaan yang siap, dan seberapa baik penyempurnaan menjaga jendela pekerjaan siap di depan tim.

Empat istilah berulang. **Item** adalah satu entri dalam backlog, seperti [cerita pengguna](https://en.wikipedia.org/wiki/User_story), cacat, permintaan layanan, atau catatan masalah. **Usia item** adalah waktu terlewat sejak item memasuki backlog, yang berbeda dari usia item kerja dalam pengukuran alur, tempat jam dimulai ketika pekerjaan mulai (lihat topik 2.1, Ukuran alur). **Siap** berarti item memenuhi definisi siap tertulis tim, sehingga tim dapat memulainya dan berharap menyelesaikannya dalam jendela tingkat layanan. **Penyempurnaan** adalah pekerjaan membuat item siap dan menyingkirkan item yang tak akan pernah dikerjakan.

Backlog produk dan layanan berperilaku berbeda, dan mencampurnya adalah kesalahan paling umum di area ini. Backlog produk adalah tempat item sengaja ditahan sampai pemilik produk memutuskan urutannya. Menunggu adalah keadaan normal, dan item tua adalah alasan untuk bertanya apakah ia masih penting. Backlog layanan berisi insiden dan permintaan adalah antrean dengan janji terlampir: pelanggan mengharapkan jawaban dalam suatu waktu. Menunggu di sana adalah biaya bagi pelanggan sejak menit pertama. Backlog produk sebaiknya dipangkas; backlog layanan sebaiknya dikuras. Taruh keduanya pada satu bagan dan bagan itu akan menyesatkan.

Pandangan agile memperlakukan backlog sebagai artefak hidup yang dimiliki pemilik produk, dijaga cukup pendek untuk dipahami dan diurutkan menurut nilai. Pandangan ITIL memperlakukan catatan terbuka sebagai pekerjaan dalam proses terhadap tingkat layanan yang disepakati, dimiliki suatu praktik. Kedua pandangan berbagi satu fakta dari teori antrean: antrean yang menerima item lebih cepat daripada yang dilepasnya akan tumbuh, dan waktu item menunggu tumbuh bersama antrean (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean). [Hukum Little](https://en.wikipedia.org/wiki/Little%27s_law) mengaitkan ukuran antrean, laju item pergi, dan waktu rata-rata item berada dalam sistem, dan itu alasan ukuran backlog dan usia backlog adalah dua pandangan atas hal yang sama.

Satu pembedaan terakhir menjaga topik ini jujur. Backlog bukan ukuran produktivitas atau seberapa sibuk sebuah tim. Backlog besar dapat berarti produk yang populer, daftar yang kurang dipangkas, atau tim yang kekurangan sumber daya, dan angka saja tidak dapat menyatakan yang mana.

## Prinsip utama

- **Ukur usia selain ukuran.** Ukuran menyatakan berapa banyak yang menunggu; usia menyatakan berapa lama, dan item tertua menunjukkan di mana keputusan dihindari.
- **Pisahkan backlog produk dan layanan.** Ide yang ditahan dan pelanggan yang menunggu adalah hal berbeda, dan masing-masing butuh pembacaannya sendiri.
- **Bidik pekerjaan siap, bukan daftar panjang.** Beberapa pekan pekerjaan siap yang terurut baik lebih bernilai daripada seribu item yang tak dilihat siapa pun.
- **Memangkas adalah fitur.** Menyingkirkan item yang tak akan Anda kerjakan adalah pekerjaan jujur, dan tingkat pembuangan yang tak pernah di atas nol adalah peringatan.
- **Pakai distribusi.** Laporkan median dan persentil ke-85 usia item dan tampilkan item tertua, karena rata-rata menyembunyikan ekor.
- **Gambarkan tim dan sistem.** Metrik backlog menunjukkan bagaimana pekerjaan sampai ke tim dan bagaimana ditangani, tidak pernah bagaimana individu berkinerja.
- **Ikat setiap angka pada keputusan.** Jika bagan backlog tak akan mengubah apa yang Anda lakukan berikutnya, pensiunkan.

## Definisi metrik

Metrik di bawah berlaku untuk satu backlog sekaligus. Pilih backlognya lebih dulu (backlog produk, antrean insiden, antrean permintaan layanan, daftar masalah) dan laporkan setiap metrik per backlog. Persentil memakai metode [persentil](https://en.wikipedia.org/wiki/Percentile) yang dinyatakan dalam topik 1.6, Literasi statistik untuk metrik layanan.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ukuran backlog | Jumlah item terbuka dalam backlog bernama pada satu titik waktu | Hitungan item dengan status terbuka atau siap pada tanggal potret; tidak termasuk item yang sedang dikerjakan dan item tertutup | item | Potret pelacak isu atau alat ITSM | Manajemen insiden; manajemen permintaan layanan; manajemen masalah | Backlog produk; antrean masukan | Mingguan |
| Usia backlog | Distribusi berapa lama item terbuka telah menunggu | Untuk setiap item terbuka, tanggal potret dikurangi tanggal ia memasuki backlog; laporkan median, persentil ke-85, dan item tertua | hari | Pembuatan dan riwayat status pelacak isu atau ITSM | Manajemen insiden; manajemen masalah; perbaikan berkelanjutan | Kesehatan backlog; tinjauan item menua | Mingguan |
| Kedalaman pekerjaan siap | Seberapa jauh ke depan tim memiliki pekerjaan siap | Item yang memenuhi definisi siap / rata-rata item selesai per pekan selama enam periode terakhir | pekan | Bendera siap pelacak isu dan riwayat throughput | Analisis bisnis; manajemen permintaan layanan | Definisi siap; penyempurnaan | Per periode perencanaan |
| Cakupan penyempurnaan | Porsi jendela jangka dekat yang siap | Item dalam dua dwipekan pekerjaan yang diharapkan berikutnya (atau N teratas menurut urutan) yang memenuhi definisi siap / item dalam jendela itu | persen | Urutan pelacak isu, bendera siap, dan pekerjaan terencana | Analisis bisnis; pemberdayaan perubahan (untuk perubahan terencana) | Penyempurnaan backlog produk | Per periode perencanaan |
| Rasio masuk-keluar backlog | Apakah item tiba lebih cepat daripada pergi | Item ditambahkan pada periode itu / item dikeluarkan dari backlog lewat penyelesaian atau pembuangan pada periode yang sama; rasio di atas 1 berarti pertumbuhan | rasio | Peristiwa dibuat dan diselesaikan pelacak isu atau ITSM | Manajemen insiden; manajemen permintaan layanan; manajemen kapasitas dan kinerja | Laju kedatangan dan keberangkatan | Mingguan |
| Tingkat pembuangan backlog | Porsi item yang pergi dibuang tanpa disampaikan | Item ditutup sebagai tidak akan dikerjakan, duplikat, atau usang / semua item yang meninggalkan backlog pada periode itu; tidak termasuk item yang ditutup sebagai selesai | persen | Kolom resolusi pelacak isu | Perbaikan berkelanjutan; manajemen masalah (tinjauan kesalahan yang diketahui) | Pemangkasan backlog; pengurutan pemilik produk | Bulanan |
| Backlog layanan melewati target | Porsi item layanan terbuka yang lebih tua dari jendela respons atau penyelesaian yang disepakati | Item terbuka yang waktu terlewatnya melebihi target layanan / semua item terbuka dalam antrean; jam berjalan sejak pencatatan dan berhenti hanya pada keadaan yang diizinkan definisi tertulis | persen | Alat ITSM dengan jam tingkat layanan | Manajemen tingkat layanan; manajemen insiden; manajemen permintaan layanan | Jalur ekspedit; ekspektasi tingkat layanan | Harian atau mingguan |

Tiga jam perlu dinyatakan dengan jelas. Usia backlog dimulai ketika item dibuat dalam backlog dan berhenti ketika ia pergi lewat penyelesaian atau pembuangan, sehingga item yang dibuka ulang memulai usia baru. Kedalaman pekerjaan siap memakai throughput dari item selesai saja, tidak pernah velocity terencana, karena velocity terencana adalah perkiraan. Backlog layanan melewati target memakai jam tingkat layanan, yang dapat berbeda dari usia backlog karena jeda yang diizinkan (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

## Rekomendasi

### Siapkan backlog agar dapat diukur

**1. Namai setiap backlog dan pemiliknya.** Setiap backlog dalam lingkup punya satu pemilik, satu tujuan, dan satu daftar jenis item. Backlog produk milik pemilik produk; antrean insiden milik service desk atau kelompok penyelesai. Tanpa pemilik bernama tak seorang pun memutuskan kapan item lama harus pergi.

**2. Pisahkan item yang ditahan dari janji dalam antrean.** Beri tag setiap item sebagai ide yang ditahan tim untuk diurutkan atau komitmen yang sedang ditunggu seseorang. Laporkan ukuran dan usia backlog terpisah untuk masing-masing. Permintaan dukungan yang duduk di backlog produk adalah janji dalam antrean di tempat yang salah, dan layak mendapat jam layanan.

**3. Tulis definisi siap, dan jaga tetap singkat.** Definisi siap mendaftar beberapa hal yang perlu diketahui tim sebelum memulai: hasil yang dicari, ukuran kasar, kondisi penerimaan, dan ketergantungan apa pun. Jaga dalam segelintir baris dan revisi ketika berhenti memprediksi pekerjaan yang mulus. Daftar periksa panjang mengubah penyempurnaan menjadi urusan dokumen dan mengundang mencentang kotak.

**4. Catat tanggal masuk dan alasan keluar.** Usia dan tingkat pembuangan sama-sama bergantung pada dua kolom: tanggal item masuk dan alasan ia pergi. Jadikan keduanya wajib di alat, dan tambahkan daftar alasan keluar terkendali seperti selesai, duplikat, usang, dan tidak akan dikerjakan. Tanggal yang hilang adalah penyebab paling umum usia backlog yang tak dapat dipakai (lihat topik 1.5, Sumber data dan instrumentasi).

### Baca ukuran dan usia bersama

**5. Laporkan usia backlog sebagai distribusi.** Tampilkan median, persentil ke-85, dan item tertua, serta histogram menurut pita usia seperti di bawah 30 hari, 30 sampai 90, 90 sampai 180, dan di atas 180. Rata-rata usia yang datar dapat menyembunyikan tumpukan item kuno yang membesar karena item baru menarik rata-rata turun. Pandangan item tertua adalah yang paling sulit disembunyikan.

**6. Pakai rasio masuk-keluar untuk melihat pertumbuhan lebih awal.** Rasio yang terus di atas 1 berarti backlog akan tumbuh, berapa pun ukurannya saat ini. Plot sebagai angka empat pekan bergulir untuk meratakan libur dan pekan rilis. Pasangkan dengan throughput agar tim dapat melihat apakah pertumbuhan berasal dari permintaan yang naik atau keluaran yang turun (lihat topik 2.1, Ukuran alur).

**7. Ubah ukuran menjadi waktu dengan throughput.** Bagi ukuran backlog dengan rata-rata item selesai per periode untuk mendapat jumlah kasar periode pekerjaan yang menunggu, pemakaian langsung hukum Little. Nyatakan dengan jelas bahwa itu rata-rata, bukan janji, dan tampilkan rentangnya memakai throughput lebih rendah dan lebih tinggi dari periode terbaru. Backlog produk seratus item yang sama dengan setahun pekerjaan adalah percakapan tentang lingkup, bukan jadwal.

### Jaga penyempurnaan tetap mengalir

**8. Bidik jendela pekerjaan siap, bukan backlog penuh yang siap.** Sempurnakan cukup untuk satu sampai tiga pekan pekerjaan berikutnya dan tidak lebih. Rincian yang ditambahkan pada item yang tak dimulai selama enam bulan biasanya basi, jadi ukur kedalaman pekerjaan siap dan biarkan mengambang dalam pita target, seperti satu sampai tiga pekan pekerjaan, yang dipilih dan ditinjau ulang tim. Kedalaman jauh di atas pita adalah pemborosan; kedalaman di bawah satu pekan pekerjaan adalah risiko perencanaan menganggur atau terburu-buru.

**9. Ukur cakupan penyempurnaan pada item yang akan segera dimulai.** Cakupan penyempurnaan hanya melihat bagian atas urutan. Ia menjawab pertanyaan yang akan diajukan rapat perencanaan: jika kita mulai sekarang, apakah item berikutnya siap? Laporkan tepat sebelum perencanaan, ketika kegagalan masih bisa diperbaiki, bukan sesudahnya.

**10. Jadikan penyempurnaan aktivitas reguler yang singkat.** Panduan agile, termasuk Scrum Guide, menjelaskan penyempurnaan sebagai aktivitas berkelanjutan dan menyerahkan bentuknya kepada tim. Banyak tim mendapati sesi singkat yang sering bekerja lebih baik daripada satu rapat panjang.

### Pangkas dan tinjau

**11. Pangkas sesuai jadwal dan laporkan tingkat pembuangan.** Tinjau item tertua setiap bulan dan tanyakan untuk masing-masing: apakah kita akan mengerjakan ini dalam enam bulan ke depan, dan jika tidak, mengapa menyimpannya? Menutup item dengan alasan tertulis bukan kegagalan. Tim yang tak pernah membuang kemungkinan menimbun, dan tim yang membuang sebagian besar yang diterimanya kemungkinan menerima pekerjaan yang seharusnya ditolak di pintu.

**12. Tangani backlog layanan dengan menguras, bukan memangkas.** Untuk antrean insiden dan permintaan, pertanyaan pertama adalah apakah item berada dalam jendela layanannya. Lacak porsi yang melewati target dan item terbuka tertua, dan simpan jalur ekspedit untuk item yang tak bisa menunggu. Daftar masalah dan kesalahan yang diketahui berada di antara dua dunia: ditahan sampai perbaikan didanai, jadi tinjau seperti backlog produk, dengan tanggal tinjauan tertulis untuk setiap entri (lihat topik 4.6, Utang teknis dan kesalahan yang diketahui).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Ukuran backlog | Menutup item secara massal sebagai usang, memecah item agar tampak sibuk, atau menyembunyikan pekerjaan di daftar samping dan spreadsheet | Tingkat pembuangan backlog dengan alasan keluar; perbandingan berkala antara alat dan daftar permintaan nyata; umpan balik pelanggan atas item yang dibuang |
| Usia backlog | Mengatur ulang tanggal masuk dengan menggandakan atau membuat ulang item lama; memindahkan item antarbacklog; membuka ulang alih-alih mengangkat kembali untuk mengubah jam | Audit item yang digandakan dan dipindahkan; tinjauan item tertua; usia diukur dari pembuatan pertama lintas catatan tertaut |
| Kedalaman pekerjaan siap | Menandai item siap tanpa memeriksanya; menggelembungkan kedalaman dengan menulis item rinci untuk pekerjaan bernilai rendah | Sampel item siap dibaca terhadap definisi; tingkat pengerjaan ulang atau kembali ke penyempurnaan saat pekerjaan dimulai |
| Cakupan penyempurnaan | Mencentang bendera siap untuk memenuhi angka; mempersempit jendela agar lebih sedikit item dihitung | Hitungan item yang dikirim kembali setelah perencanaan; keberhasilan tujuan pengiriman dan perubahan lingkup di tengah periode (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman) |
| Rasio masuk-keluar backlog | Menutup item mudah dengan cepat untuk mendorong keluaran, atau menolak item baru di pintu untuk menahan masukan | Usia item tertua; tingkat pembuangan; porsi permintaan yang ditolak tanpa alasan; kebutuhan tak terpenuhi yang dilaporkan pelanggan |
| Tingkat pembuangan backlog | Membuang item yang masih diinginkan pengguna, untuk mengecilkan ukuran; atau menghindari pembuangan agar angka tampak lembut | Tinjauan sampel item yang dibuang bersama peminta; tingkat pembukaan ulang dan pengangkatan kembali untuk item yang dibuang |
| Backlog layanan melewati target | Menjeda jam dengan status menunggu pelanggan, menurunkan prioritas, atau menutup dan membuka kembali untuk mengatur ulang jendela | Porsi waktu dalam status jeda; tingkat pembukaan ulang (lihat topik 1.2, Hukum Goodhart dan psikologi metrik); kepuasan pengguna atas tiket tertutup |

Pembacaan yang sehat menunjukkan backlog yang ukurannya stabil atau menurun pelan, item tertuanya sedikit dan masing-masing punya pemilik dan alasan tertulis, dan jendela jangka dekatnya sebagian besar siap. Rasio masuk-keluar berkisar di dekat 1, tingkat pembuangan tidak nol dan tidak mendominasi, dan cakupan penyempurnaan naik tanpa pekerjaan terencana menjadi lebih rapuh. Ketika angka tampak bagus tetapi pelanggan masih melaporkan tak ada yang terjadi pada permintaan mereka, percayai pelanggan dan audit datanya.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Backlog produk kecil yang dipangkas agresif | Mudah dipahami dan dijaga urutannya; jujur tentang kapasitas | Berisiko membuang ide yang kelak penting; peminta mungkin merasa diabaikan |
| Backlog besar yang dipertahankan | Mempertahankan setiap ide dan permintaan; riwayat berguna | Mahal dibaca; item basi menyesatkan perencanaan dan menyembunyikan prioritas sebenarnya |
| Jendela siap yang dalam (banyak pekan disempurnakan) | Perencanaan mulus; lebih sedikit kejutan saat pekerjaan dimulai | Rincian yang disempurnakan menjadi basi; upaya dihabiskan untuk pekerjaan yang mungkin tak pernah dimulai |
| Jendela siap yang dangkal (sekitar satu pekan) | Sedikit rincian terbuang; tetap fleksibel | Perencanaan bisa macet ketika beberapa item belum siap; waktu tunggu lebih sedikit untuk melihat ketergantungan |
| Definisi siap yang ketat | Lebih sedikit awal yang kabur; pekerjaan dapat diprediksi | Bisa menjadi gerbang yang memperlambat alur dan mendorong mengisi kotak |
| Definisi siap yang ringan | Cepat; memercayai tim | Lebih banyak penemuan selama pekerjaan; lebih banyak perubahan di tengah periode |

Jawaban praktisnya adalah menjaga backlog cukup kecil untuk dibaca sekali duduk, menyimpan jendela siap sekitar satu sampai tiga pekan pekerjaan, dan membiarkan definisi siap cukup singkat untuk diingat orang. Antrean layanan butuh sikap sebaliknya: kecil bukan tujuan, menyelesaikan dalam jendela yang disepakati adalah tujuan. Pilih sel di setiap baris yang cocok dengan konteks Anda dan tuliskan alasannya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Jika kita berhenti menambah item hari ini, berapa lama membersihkan backlog pada throughput terbaru kita, dan apakah angka itu terasa masuk akal?**
Mulai dengan membagi ukuran backlog dengan jumlah tipikal item selesai per periode dan tunjukkan rentang memakai periode terbaik dan terburuk belakangan ini. Tanyakan apakah tim memercayai hasilnya, dan ke mana waktu akan benar-benar pergi. Jika angkanya lebih panjang dari setahun untuk backlog produk, tanyakan item mana yang dapat dihapus tanpa ada yang menyadari.

**2. Mana lima item tertua, dan siapa yang memutuskan mereka masih pantas di sini?**
Bacakan lima item tertua dengan tanggal masuknya. Untuk masing-masing, minta pemilik bernama dan alasan ia tetap ada, seperti menunggu ketergantungan, penundaan yang disengaja, atau pengabaian. Sepakati tindakan untuk masing-masing: jadwalkan, buang, atau tuliskan mengapa ia tetap dan kapan ditinjau lagi.

**3. Apa arti “siap” di sini, dan apakah kejutan terbaru kita berasal dari item yang tidak siap?**
Minta setiap orang menulis definisi siap dengan kata sendiri, lalu bandingkan. Perbedaan adalah temuan pertama. Tengok kembali item yang menimbulkan pertanyaan di tengah periode atau pengerjaan ulang dan tanyakan apa yang akan membuatnya siap. Fasilitator sebaiknya menahan menambah butir daftar periksa untuk setiap kejutan dan memilih satu atau dua yang akan mencegah paling banyak kesulitan.

**4. Backlog kita yang mana menyimpan ide, dan mana yang menyimpan janji kepada seseorang?**
Daftar setiap backlog dan pilah itemnya menjadi dua jenis. Permintaan dukungan, insiden, dan item pelanggan yang dikomitmenkan adalah janji dan butuh jam layanan; ide dan peningkatan ditahan untuk diurutkan. Bahas di mana keduanya dicampur dan apa yang dilakukannya pada bagan usia. Hasilnya bisa sesederhana label dan filter yang memungkinkan masing-masing dilaporkan sendiri.

**5. Kapan terakhir kita menyingkirkan item dengan sengaja, dan bagaimana reaksi peminta?**
Memangkas sering terasa berisiko, jadi lihat buktinya. Periksa tingkat pembuangan dan ambil sampel beberapa item yang dibuang. Tanyakan apakah peminta diberi tahu, dan apakah ada yang meminta item dikembalikan. Fasilitator sebaiknya membantu kelompok menyepakati pesan sederhana kepada peminta (“kami tidak berencana mengerjakan ini; inilah alasannya; ajukan lagi jika keadaan berubah”) agar memangkas menjadi rutin dan santun.

**6. Jika kita ingin bagan backlog kita tampak lebih baik tanpa membantu siapa pun, apa yang akan kita lakukan?**
Jalankan tinjauan manipulasi dari topik 1.2 pada setiap metrik backlog. Jawaban yang mungkin mencakup menutup item lama secara massal, menggandakan item untuk mengatur ulang usia, menandai item siap lebih awal, dan mempersempit jendela yang dihitung cakupan. Untuk setiap jawaban, periksa apakah pagar pembatas dalam tabel di atas akan menangkapnya. Catat yang akan lolos dan pilih satu pemeriksaan baru untuk dicoba kuartal depan.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memakai metrik backlog untuk menjaga perencanaan tenang. Kedalaman pekerjaan siap dan cakupan penyempurnaan memberi tahu tim apakah sesi perencanaan berikutnya akan mulus, dan usia backlog menunjukkan janji mana yang diam-diam membusuk. Kebiasaan yang baik adalah meninjau usia, masuk-keluar, dan kedalaman siap selama beberapa menit pada setiap sesi penyempurnaan, lalu menindak satu hal. Tim sebaiknya menerbitkan set kecil yang stabil ke luar dan menyimpan pita usia rinci untuk keperluan sendiri (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman).

### Tim layanan dan operasi

Tim operasi menjalankan antrean dengan jam. Pembacaan utama mereka adalah porsi item terbuka yang melewati target bersama item terbuka tertua, dipecah menurut prioritas dan keadaan jeda. Daftar masalah dan kesalahan yang diketahui butuh tanggal tinjauan pada setiap entri agar item yang ditahan tidak menjadi permanen. Tim juga sebaiknya mengawasi rasio masuk-keluar untuk antrean insiden, karena rasio di atas 1 selama beberapa pekan adalah tanda awal kekurangan staf atau penyebab berulang (lihat topik 3.2, Volume dan prioritas insiden).

### Kepemimpinan dan tata kelola

Pemimpin melihat backlog sebagai pernyataan niat. Backlog yang sangat besar memberi tahu mereka bahwa organisasi menjanjikan lebih dari yang dapat disampaikannya, dan yang menyusut cepat mungkin berarti pemangkasan atau permintaan yang berkurang. Tanyakan keputusan apa yang diberi masukan oleh angka itu. Danai waktu untuk penyempurnaan dan pemangkasan, hindari target pada ukuran backlog mentah, dan minta distribusi usia dan alasan pembuangan ketika angka ukuran disajikan (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur).

### Pelanggan dan pengguna

Pelanggan mengalami backlog sebagai kebisuan. Item yang diangkat enam bulan lalu tanpa balasan mengatakan lebih banyak daripada bagan mana pun. Pengguna menghargai diberi tahu kebenaran: direncanakan, tidak direncanakan dan inilah alasannya, atau menunggu ketergantungan. Beri peminta cara melihat status item mereka, dan perlakukan item yang dibuang sebagai tugas komunikasi, bukan pembersihan data (lihat topik 3.5, Metrik pemenuhan permintaan layanan).

## Dalam praktik: contoh ITIL agile

Sebuah perusahaan asuransi regional berukuran menengah menjalankan aplikasi klaim internal dengan tim produk dan service desk terpisah. Angka dalam contoh ini bersifat ilustratif.

Backlog tim produk berisi 412 item. Median usianya 138 hari, persentil ke-85 adalah 410 hari, dan item tertua berusia 29 bulan. Tim menyelesaikan sekitar 14 item per dwipekan, sehingga backlog kira-kira 29 dwipekan pekerjaan pada throughput terbaru. Cakupan penyempurnaan untuk dua dwipekan berikutnya 55 persen, dan perencanaan sering berlarut karena tim menemukan rincian yang hilang. Service desk menunjukkan gambaran berbeda: 63 permintaan terbuka, 9 persen di antaranya melewati target, dan rasio masuk-keluar mendekati 1.

Seorang pemilik produk meminta angka yang lebih kecil dan mengusulkan target kurang dari 200 item pada akhir kuartal. Tim tidak ingin memperlakukannya sebagai tujuan sendiri. Sebagai gantinya mereka menjalankan tinjauan. Mereka memberi tag item sebagai ide yang ditahan atau pekerjaan yang dijanjikan dan mendapati 38 dari 412 adalah permintaan dukungan yang dijanjikan kepada pelanggan akan ditangani. Mereka memindahkannya ke antrean layanan dengan jam layanan. Mereka membaca 40 item tertua dan mendapati 22 usang atau duplikat. Mereka menutupnya dengan alasan keluar dan memberi tahu peminta. Mereka menetapkan pita siap satu sampai dua dwipekan dan menghabiskan sesi mingguan singkat menyempurnakan hanya bagian atas urutan.

Selama tiga dwipekan ukuran backlog turun menjadi 301 dan tingkat pembuangan bulan itu 31 persen, tinggi dengan sengaja dan ditandai dalam tinjauan. Cakupan penyempurnaan naik menjadi 88 persen. Pandangan cepat atas data mengungkap risiko manipulasi: ukuran backlog turun lebih cepat dari yang diharapkan karena dua anggota tim menggandakan beberapa item menua menjadi yang segar untuk menghindari daftar item lama. Tim menangkap ini ketika bagan item tertua tidak lagi cocok dengan sampel pembuangan. Mereka sepakat mengukur usia dari pembuatan pertama lintas catatan tertaut dan meninjau gandaan pada setiap sesi pemangkasan. Keputusan yang dicatat untuk pimpinan adalah menjatuhkan target ukuran dan sebagai gantinya melaporkan distribusi usia, jendela siap, dan alasan pembuangan setiap kuartal.

## Sudut pandang sektor

**Startup.** Backlog sering berupa satu daftar di kepala pendiri atau papan sederhana. Lacak hanya usia item tertua dan apakah pekerjaan berikutnya siap. Pangkas keras dan sering, karena jawaban yang tepat untuk ide berusia tiga bulan sering melupakannya.

**Bisnis kecil.** Pekerjaan produk dan layanan biasanya berbagi satu tim, jadi backlog mencampur ide yang ditahan dan janji kepada pelanggan. Pisahkan dengan label sejak awal. Satu daftar yang dibaca mingguan dalam rapat singkat mengalahkan metrik yang rumit. Awasi usia item yang dihadapkan kepada pelanggan lebih dulu, karena satu permintaan yang terlupakan dapat merugikan hubungan.

**Perusahaan besar.** Banyak tim dan banyak antrean melipatgandakan cara salah membaca backlog. Definisikan metrik sekali, dengan jam dan alasan keluar, dan hindari merekap ukuran backlog produk ke satu angka portofolio. Bandingkan tim dengan riwayatnya sendiri, tidak pernah dengan tim lain yang pekerjaannya berbeda (lihat topik 2.4, Metrik aliran nilai). Daftar masalah dan kesalahan yang diketahui layak mendapat ritme tinjauan sendiri.

**Pemerintah dan sektor publik.** Komitmen kepada warga, waktu respons undang-undang, dan jejak audit membentuk antrean layanan. Perlakukan jam undang-undang sebagai masukan tetap dan laporkan porsi yang melewati target dengan definisi yang dipakai. Backlog produk mungkin dibatasi putaran pendanaan dan pengadaan, jadi jendela siap mungkin perlu lebih panjang daripada tim komersial. Jaga alasan pembuangan tetap terlihat, karena akuntabilitas publik membuat membuang diam-diam berisiko.

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya metrik ini sederhana. Sebagian besar data sudah ada di pelacak isu atau alat ITSM. Biayanya adalah tanggal masuk dan alasan keluar yang wajib, sesi pemangkasan bulanan singkat, beberapa menit dalam penyempurnaan untuk melihat bagan usia dan siap, dan sedikit upaya memisahkan backlog produk dan layanan. Spreadsheet atau laporan bawaan alat cukup untuk memulai, dan tidak ada produk baru yang perlu dibeli.

Imbal hasil datang dari pemborosan yang terhindari dan janji yang lebih jelas. Tim yang menjaga jendela siap menghabiskan lebih sedikit waktu perencanaan menemukan ulang apa arti sebuah item, dan tim yang memangkas berhenti membaca ulang item yang tak akan pernah dikerjakan. Pelanggan mendapat jawaban jujur lebih cepat, yang mengurangi kontak berulang dan eskalasi. Gambarkan manfaatnya dalam pola yang dapat diperiksa tim sendiri: sesi perencanaan lebih pendek, lebih sedikit item dikembalikan ke penyempurnaan setelah pekerjaan dimulai, lebih sedikit pengejar tentang permintaan lama, dan lebih sedikit kejutan ketika pimpinan bertanya apa yang ada dalam jalur. Topik ini tidak menawarkan persentase, karena tidak ada yang dapat diberikan tanpa sumber. Ukur garis dasar Anda sendiri selama satu kuartal dan bandingkan.

## Anti-pola dan jebakan

- **Memperlakukan ukuran backlog sebagai skor produktivitas atau kinerja.** Ukuran bergantung pada permintaan, lingkup, dan kebiasaan memangkas. Laporkan ukuran bersama usia dan alasan pembuangan, dan jangan pernah membandingkan tim dengannya.
- **Mencampur ide yang ditahan dan janji pelanggan dalam satu daftar.** Bagan usia lalu terbaca sebagai pengabaian dan jam layanan hilang. Pisahkan dengan label dan laporkan masing-masing terpisah.
- **Menyempurnakan segalanya.** Item rinci yang tak dimulai selama berbulan-bulan menjadi basi. Simpan jendela siap dan sempurnakan tepat sebelum dibutuhkan.
- **Tak pernah membuang.** Daftar yang terus tumbuh membuat setiap pernyataan tentang lingkup salah. Pangkas sesuai jadwal dan catat alasannya setiap kali.
- **Mengatur ulang usia dengan menggandakan atau memindahkan item.** Itu menyanjung bagan dan kehilangan riwayat. Ukur usia dari pembuatan pertama lintas catatan tertaut dan audit gandaan.
- **Definisi siap yang dipakai sebagai gerbang.** Jika ia menghalangi pekerjaan yang dapat dimulai tim dengan aman, ia memperlambat alur. Jaga tetap singkat dan biarkan tim menimpanya dengan alasan tertulis.
- **Target pada ukuran mentah.** Target kurang dari N item mengundang penutupan massal. Targetkan usia item tertua atau porsi yang melewati target layanan, dengan pagar pembatas.
- **Memakai usia rata-rata.** Item baru menarik rata-rata turun sementara yang lama menumpuk. Tampilkan median, persentil ke-85, dan item tertua.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan data | Tanggal masuk dan alasan keluar hilang atau tak konsisten | Beberapa tim mencatat tanggal; definisi siap berbeda | Satu definisi siap dan usia backlog tertulis; tanggal masuk dan alasan keluar wajib | Kualitas data disampel; usia diukur lintas gandaan dan pemindahan | Definisi dibagikan antartim dan pemasok dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Kesehatan backlog | Backlog tumbuh tanpa disadari; tanpa pemangkasan | Pembersihan sesekali ketika daftar tak terkelola | Pemangkasan terjadwal; backlog produk dan layanan dipisahkan | Ukuran, usia, masuk-keluar, dan tingkat pembuangan diplot tren dan ditinjau dengan pagar pembatas | Kebijakan backlog disetel antartim menurut permintaan dan kapasitas; pelanggan melihat status item mereka |
| Penyempurnaan | Rincian ad hoc ditambahkan saat perencanaan | Sesi reguler untuk beberapa tim | Penyempurnaan singkat reguler dengan jendela siap yang disepakati | Cakupan dan kedalaman siap ditinjau dan dikaitkan dengan hasil pengiriman | Penyempurnaan dibagikan antartim dan ketergantungan; jendela menyesuaikan kondisi |
| Pemakaian dalam keputusan | Angka ditunjukkan hanya ketika ada yang salah | Dilaporkan kepada pimpinan tanpa diskusi | Tim meninjau usia dan kedalaman siap dalam penyempurnaan | Pekerjaan perbaikan yang didanai mengikuti tinjauan | Bukti backlog memberi masukan bagi keputusan portofolio dan kapasitas di seluruh organisasi |

## Daftar periksa

- [ ] Setiap backlog punya pemilik bernama dan tujuan yang dinyatakan.
- [ ] Ide yang ditahan dan janji pelanggan diberi label dan dilaporkan terpisah.
- [ ] Setiap item punya tanggal masuk yang wajib dan alasan keluar dari daftar terkendali.
- [ ] Tim punya definisi siap tertulis yang singkat.
- [ ] Usia backlog dilaporkan sebagai median, persentil ke-85, dan item tertua.
- [ ] Rasio masuk-keluar ditampilkan sebagai angka bergulir di samping throughput.
- [ ] Jendela siap disepakati, dan kedalaman pekerjaan siap dilaporkan terhadapnya.
- [ ] Cakupan penyempurnaan dilaporkan sebelum perencanaan, bukan sesudahnya.
- [ ] Sesi pemangkasan bulanan ada di kalender dan tingkat pembuangan dilaporkan.
- [ ] Antrean layanan menunjukkan porsi yang melewati target dan pemakaian status jeda.
- [ ] Tinjauan manipulasi untuk metrik backlog telah dijalankan kuartal ini.

## Prompt AI

**Nilai kesehatan sebuah backlog.**

```text
Saya bekerja dengan [team name], yang memiliki [type of backlog, such as a product
backlog or incident queue]. Berikut ringkasan backlog: [number of items],
distribusi usia [median, 85th percentile, oldest item], item selesai per [week]
[numbers], item ditambahkan per [week] [numbers], dan alasan pembuangan [counts].
Definisi siap kami: [definition].

Jelaskan apa arti kombinasi angka ini, dengan mendaftar setidaknya tiga
penjelasan berbeda, dan sarankan data tambahan apa yang akan membedakannya.
Jangan mengarang nilai acuan atau target. Daftar asumsi Anda dan apa pun yang
tidak dapat Anda tentukan dari yang saya berikan.
```

**Susun definisi siap.**

```text
Bantu saya menyusun definisi siap singkat untuk [team name], yang mengerjakan
[type of work]. Masalah kami dengan item yang tidak siap saat ini: [list of
problems]. Usulkan tidak lebih dari enam kriteria, katakan masalah apa yang
ditangani tiap kriteria, dan jelaskan bagaimana tim dapat memeriksa tiap
kriteria dalam kurang dari semenit. Sarankan juga kapan tim boleh memulai item
yang tidak memenuhi definisi itu. Jangan menyalin teks kerangka apa pun. Daftar
asumsi Anda.
```

**Rencanakan sesi pemangkasan backlog.**

```text
Rencanakan sesi pemangkasan [length of time] untuk backlog [team name]. Backlog
berisi [number] item, dan yang tertua berusia [age]. Alasan keluar yang kami
pakai: [list]. Usulkan agenda, pertanyaan untuk diajukan tentang setiap item
lama, pesan sederhana untuk dikirim kepada peminta yang itemnya disingkirkan,
dan data untuk dicatat sesudahnya. Tunjukkan cara sesi itu dapat dimanipulasi dan
cara menangkapnya. Jangan mengarang statistik. Daftar asumsi Anda.
```

**Pisahkan pekerjaan produk dan layanan dalam backlog campuran.**

```text
Berikut sampel [number] item dari backlog gabungan kami di [tool name], dengan
kolom [list of fields]. Klasifikasikan tiap item sebagai ide yang ditahan, janji
pelanggan dengan ekspektasi layanan, atau tidak jelas, dan jelaskan penalaran
Anda. Lalu sarankan label dan aturan sederhana untuk merutekan item mendatang.
Laporkan pola, bukan individu, dan jangan menebak fakta yang tidak ada dalam
data. Daftar asumsi Anda dan item yang tidak dapat Anda klasifikasikan.

[paste items, with personal data removed]
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan dan topik tetangga bagi metrik backlog yang akan Anda perkenalkan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa topik backlog yang direvisi menjaga vektor manipulasi, pagar pembatas, dan referensi silangnya tetap konsisten.

## Poin penting

- Backlog adalah antrean janji, jadi baca ukuran dan usia bersama dan tampilkan item tertua.
- Simpan ide yang ditahan dan janji pelanggan dalam tampilan terpisah, karena menunggu berarti hal berbeda di masing-masing.
- Bidik jendela pendek pekerjaan siap dan ukur cakupan penyempurnaan pada item yang akan segera dimulai.
- Pangkas sesuai jadwal, catat mengapa item pergi, dan perlakukan tingkat pembuangan nol sebagai peringatan.
- Targetkan usia dan jendela layanan, bukan ukuran mentah, dan pasangkan setiap metrik backlog dengan pagar pembatas.
- Metrik backlog menggambarkan bagaimana pekerjaan sampai ke tim dan bagaimana ditangani, dan tidak pernah memeringkat orang.

## Referensi dan bacaan lanjutan

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
