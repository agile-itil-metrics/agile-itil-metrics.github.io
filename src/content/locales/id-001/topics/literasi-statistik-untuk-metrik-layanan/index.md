# Literasi statistik untuk metrik layanan

**Data tiket dan alur itu miring, bergumpal, dan sering tipis, jadi laporkan median dan persentil tinggi alih-alih rata-rata, katakan berapa banyak item di balik setiap tingkat, dan pisahkan variasi biasa dari perubahan nyata sebelum ada yang bereaksi.**

## Gambaran umum dan motivasi

Kebanyakan metrik layanan tiba sebagai satu angka di dasbor: rata-rata waktu penyelesaian, persen insiden yang diselesaikan dalam target, tiket ditutup pekan ini. Satu angka terasa presisi. Biasanya ia ringkasan padat dari kumpulan peristiwa yang berantakan, dan pemadatan itu menentukan apa yang dilihat pembaca. Literasi statistik, untuk keperluan buku ini, adalah sekumpulan kecil kebiasaan yang menjaga ringkasan tetap jujur: pilih ringkasan yang sesuai bentuk data, ketahui berapa banyak data di baliknya, dan bedakan perubahan nyata dari kebisingan.

Bentuk data layanan adalah masalah pertama. Ukuran waktu seperti waktu penyelesaian, cycle time, dan waktu tunggu dibatasi di nol dan memiliki ekor panjang di kanan. Kebanyakan item selesai cepat, dan beberapa memakan waktu sangat lama. Data seperti ini [miring](https://en.wikipedia.org/wiki/Skewness), dan rata-rata aritmetika tertarik ke ekor, sehingga satu tiket yang macet dapat menggeser rata-rata lebih daripada seratus tiket rutin. [Median](https://en.wikipedia.org/wiki/Median), nilai tengah ketika item diurutkan, jauh kurang terpengaruh. [Persentil](https://en.wikipedia.org/wiki/Percentile) menggeneralisasikannya: persentil ke-85 adalah nilai yang dipenuhi 85 persen item dalam penyelesaiannya. Durasi semacam ini sering dimodelkan dengan [distribusi log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution), yang logaritma nilainya simetris. Pelajarannya adalah bahwa “tipikal” dan “rata-rata” berbeda untuk data miring.

Ukuran sampel adalah masalah kedua. Tim yang menyelesaikan 12 insiden prioritas 1 dalam satu kuartal dan melaporkan “83 persen dalam target” sedang menggambarkan 10 dari 12. Satu kegagalan lagi akan menggeser angka itu delapan poin. Pernyataan yang jujur menyertakan hitungannya, dan sering sebuah rentang. [Selang kepercayaan](https://en.wikipedia.org/wiki/Confidence_interval) adalah rentang yang dihitung dari data yang menyatakan sejauh mana nilai sebenarnya dapat dengan wajar berada dari yang teramati. Selang lebar untuk sampel kecil dan sempit untuk sampel besar, yang merupakan pesan yang benar untuk kuartal dengan 12 insiden.

Variasi adalah masalah ketiga. Setiap proses menghasilkan angka yang bergoyang dari pekan ke pekan tanpa ada yang berubah. Walter Shewhart, yang mengerjakan mutu manufaktur pada 1920-an, memisahkan goyangan rutin ini dari sinyal yang layak diselidiki, dan memberi kita [bagan kendali](https://en.wikipedia.org/wiki/Control_chart). Menerapkan bagan seperti ini pada sebuah proses disebut [pengendalian proses statistik](https://en.wikipedia.org/wiki/Statistical_process_control). Bagian dari kesalahan terakhir itu adalah [regresi ke arah rata-rata](https://en.wikipedia.org/wiki/Regression_toward_the_mean): nilai ekstrem cenderung diikuti nilai yang kurang ekstrem, sehingga pekan setelah pekan yang buruk tampak seperti pemulihan entah ada yang berbuat sesuatu atau tidak.

Praktik alur agile, seperti penggunaan persentil cycle time dan usia item kerja dalam Kanban Guide, sudah meminta distribusi dan perkiraan yang dinyatakan sebagai kemungkinan (lihat topik 2.1, Ukuran alur). Dalam ITIL 4, praktik pengukuran dan pelaporan serta praktik perbaikan berkelanjutan sama-sama bergantung pada ukuran yang berarti sebagaimana tampaknya, dan manajemen tingkat layanan bergantung pada target yang ditetapkan terhadap variasi yang realistis. Literasi statistik adalah lapisan bersama di bawah keduanya. Ia juga mendukung pagar pembatas dalam topik 1.2, Hukum Goodhart dan psikologi metrik: tim yang menunjukkan seluruh distribusi punya lebih sedikit tempat menyembunyikan rata-rata yang dimanipulasi.

Variasi sebab-umum melekat pada proses, dan variasi sebab-khusus berasal dari sesuatu yang spesifik yang berubah atau salah. Perjanjian tingkat layanan (SLA) adalah komitmen terdokumentasi kepada pelanggan, dan sasaran tingkat layanan (SLO) adalah target untuk sebuah ukuran.

## Prinsip utama

- **Cocokkan ringkasan dengan bentuknya.** Pakai median dan persentil untuk durasi, dan tampilkan seluruh distribusi ketika keputusannya penting. Sisakan rata-rata untuk data yang kira-kira simetris, atau untuk total seperti biaya.
- **Setiap tingkat membawa hitungannya.** Persentase tanpa pembilang dan penyebut adalah klaim tanpa bukti terlampir. Di bawah hitungan minimum yang dinyatakan, tampilkan item mentah alih-alih tingkat.
- **Variasi biasa bukan berita.** Ketahui rentang normal sebuah ukuran sebelum bereaksi. Tanggapi sinyal, bukan setiap pergerakan.
- **Ketidakpastian adalah bagian dari jawaban.** Nyatakan perkiraan sebagai kemungkinan (“85 persen item selesai dalam 9 hari”) dan taksiran sebagai rentang, dan tahan presisi palsu.
- **Tunjukkan distribusi kepada tim yang memiliki pekerjaan.** Item mentah dan histogram membuat kasus tak lazim terlihat, dan mempersulit manipulasi diam-diam.
- **Korelasi, seleksi, dan waktu menjelaskan banyak “perbaikan.”** Tanyakan apa lagi yang berubah, siapa yang tertinggal dari data, dan apakah titik awalnya luar biasa buruk.
- **Jaga statistik tetap proporsional.** Tim butuh segelintir teknik yang dipakai konsisten, bukan kuliah statistik. Jelaskan setiap bagan dengan kata sederhana.

## Definisi metrik

Metrik di bawah menggambarkan mutu statistik sebuah praktik metrik dan distribusi pekerjaan layanan. Ukuran waktu memakai jam yang dinyatakan di setiap baris, dan definisinya dimaksudkan untuk dipakai ulang oleh topik-topik berikutnya (lihat topik 3.3, Waktu respons dan penyelesaian insiden, dan topik 2.2, Lead time, cycle time, dan efisiensi alur).

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Median waktu penyelesaian | Waktu penyelesaian tengah dari insiden yang diselesaikan pada periode itu | persentil ke-50 dari (stempel waktu selesai dikurangi stempel waktu dibuat) atas insiden yang diselesaikan pada periode itu; jam dimulai saat tiket dibuat dan berhenti saat diselesaikan; jeda dilaporkan terpisah, tidak dikurangkan; tiket yang dibatalkan dan duplikat dikecualikan | jam atau hari | Riwayat status alat ITSM | Manajemen insiden; pengukuran dan pelaporan | Median cycle time | Mingguan atau bulanan |
| Waktu penyelesaian persentil tinggi | Waktu yang di dalamnya kebanyakan insiden diselesaikan, dengan persentil disebutkan | persentil ke-85 (atau ke-95) dari waktu terlewat yang sama seperti di atas; dihitung hanya jika setidaknya 20 item diselesaikan, jika tidak item mentah didaftar | jam atau hari | Riwayat status alat ITSM | Manajemen insiden; manajemen tingkat layanan | Perkiraan persentil cycle time | Mingguan atau bulanan |
| Usia item terbuka tertua | Usia item tertua yang masih terbuka, ditambah jumlah item yang lebih tua dari persentil tinggi | sekarang dikurangi stempel waktu dibuat untuk item terbuka, tanpa jeda dikurangkan; menghitung semua item terbuka dalam antrean layanan termasuk yang menunggu pelanggan | hari | Alat ITSM atau pelacak isu | Manajemen insiden; manajemen masalah | Usia item kerja | Mingguan |
| Cakupan pelaporan tingkat | Porsi tingkat yang dilaporkan dan menampilkan pembilang, penyebut, dan pemeriksaan hitungan minimum | tingkat yang dilaporkan dengan hitungan dan bendera sampel / tingkat yang dilaporkan; hanya menghitung tingkat yang diterbitkan dalam paket tinjauan periode itu | persen | Register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik) | Pengukuran dan pelaporan | Kesepakatan kerja | Kuartalan |
| Tingkat sinyal bagan kendali | Porsi titik pada bagan kendali sebuah ukuran yang menandakan variasi sebab-khusus menurut aturan tertulis tim | titik yang ditandai menurut aturan / titik yang diplot, atas 20 titik terakhir atau lebih; aturan ditetapkan di muka dan dicatat | persen | Alat bagan kendali atau spreadsheet | Perbaikan berkelanjutan | Inspeksi retrospektif atas proses | Bulanan |
| Lebar selang | Lebar rentang ketidakpastian yang dinyatakan pada tingkat utama | batas atas dikurangi batas bawah selang, memakai metode yang disebut di register, untuk tingkat utama periode itu | poin persentase | Dihitung dari hitungan ITSM | Manajemen tingkat layanan | Rentang perkiraan dalam perencanaan | Bulanan |

Bila kontrak menyebut rata-rata, laporkan angka kontraktual dan tampilkan median dan persentil di sampingnya.

## Rekomendasi

### Ringkas data waktu dengan jujur

**1. Jadikan median dan satu persentil tinggi bernama sebagai default.** Untuk waktu penyelesaian, cycle time, dan waktu pemenuhan, terbitkan median dan persentil ke-85 atau ke-95 bersama, dan tuliskan persentil itu dalam nama metrik. Median menyatakan apa yang tipikal, dan persentil tinggi menyatakan apa yang dapat dijanjikan dengan wajar kepada pelanggan. Jika Anda harus memilih satu angka untuk komitmen, pilih persentilnya.

**2. Tunjukkan bentuk selain ringkasannya.** Histogram atau diagram sebar waktu penyelesaian menurut tanggal tutup menunjukkan gugusan, ekor panjang, dan pergeseran mendadak yang tak ditunjukkan ringkasan mana pun. Bila gambar dan angka tidak sepakat, percayai gambar dan selidiki angkanya.

**3. Tambahkan usia item terbuka tertua.** Persentil pekerjaan yang selesai menengok ke belakang dan mengabaikan semua yang masih macet. Laporkan item terbuka tertua dan berapa banyak item terbuka yang sudah lebih tua dari persentil tinggi Anda (lihat topik 2.1, Ukuran alur). Ini koreksi paling berguna untuk rata-rata yang membaik karena item sulit dibiarkan menua.

### Hormati sampel kecil dan ketidakpastian

**4. Terbitkan hitungan bersama setiap tingkat.** Tulis “10 dari 12 diselesaikan dalam target” alih-alih “83 persen.” Tambahkan aturan bahwa tingkat yang didasarkan pada item kurang dari jumlah tertentu ditampilkan sebagai hitungan atau item yang mendasarinya. Ambangnya adalah pertimbangan: tuliskan, tinjau, dan terapkan di mana-mana.

**5. Pakai selang untuk tingkat utama dan perkiraan.** Untuk proporsi seperti porsi perubahan yang gagal, hitung selang kepercayaan dengan metode yang disepakati tim Anda dan catat metodenya di register. Untuk perkiraan pengiriman, rentang berbasis sampel (misalnya, “kemungkinan antara 8 dan 14 item per pekan”) memberi tahu perencana lebih banyak daripada satu angka throughput. Jika selang terlalu lebar untuk memberi masukan bagi keputusan, katakan demikian.

### Bedakan sinyal dari kebisingan

**6. Gambar bagan kendali untuk ukuran yang Anda tindak.** Bagan individu sederhana memplot setiap titik dalam urutan waktu dengan garis tengah dan batas yang dihitung dari data, dan menandai titik di luar batas atau deretan di satu sisi garis tengah. Mulailah dengan median waktu penyelesaian mingguan dan volume mingguan. Tulis aturan sinyal sekali (misalnya, titik di luar batas, atau deretan delapan di satu sisi) dan jaga tetap, agar tim tidak menyesuaikan aturan sampai bagan sesuai perasaannya.

**7. Tindak sinyal dan biarkan variasi sebab-umum.** Bila titik berada dalam batas, tahan memberi penjelasan; itu proses berperilaku seperti biasa. Bila sinyal muncul, tanyakan apa yang berubah pekan itu: rilis, kekosongan staf, gangguan pemasok, kategori baru. Jika proses stabil tetapi tidak memuaskan, perbaikannya adalah perubahan pada sistem, bukan percakapan dengan siapa pun yang mengalami pekan merah.

**8. Harapkan regresi ke arah rata-rata setelah periode ekstrem.** Jika Anda meluncurkan inisiatif di bulan terburuk tahun itu, sebagian perbaikan akan menyusul secara kebetulan. Bandingkan dengan garis dasar lebih panjang, dengan layanan serupa yang tidak berubah, atau dengan batas kendali, sebelum memberi kredit kepada inisiatif. Sepasang sebelum-dan-sesudah dua titik adalah bentuk bukti terlemah.

### Bernalar dengan cermat tentang sebab dan seleksi

**9. Tanyakan apa yang hilang dari data.** Respons survei berasal dari orang yang memilih menjawab. Tiket tertutup mengecualikan yang masih terbuka. Sebelum menarik kesimpulan, daftar siapa atau apa yang absen dan bagaimana itu dapat memiringkan hasil.

**10. Ubah definisi dengan sengaja, dan tandai pada bagan.** Model status baru, matriks prioritas baru, atau daftar kategori baru mengubah data tanpa mengubah pekerjaan. Beri catatan pada setiap perubahan di bagan dan mulai ulang batas kendali setelahnya (lihat topik 1.5, Sumber data dan instrumentasi).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Median waktu penyelesaian | Menutup tiket cepat lebih dulu dan membiarkan yang sulit terbuka; memecah satu tiket menjadi beberapa yang mudah; menjeda jam dalam status menunggu pelanggan | Waktu penyelesaian persentil tinggi dan usia item terbuka tertua; porsi waktu dalam status jeda; tingkat tiket tertaut |
| Waktu penyelesaian persentil tinggi | Memilih persentil yang menyanjung hasil, atau mengubahnya antarlaporan; mengecualikan kasus panjang sebagai “pencilan” atau mengklasifikasikan ulang | Persentil ditetapkan di register; daftar item yang dikecualikan beserta alasan; usia item terbuka tertua |
| Usia item terbuka tertua | Menutup atau menggabungkan item tertua tanpa menyelesaikannya; memindahkannya ke antrean atau kategori lain | Tingkat pembukaan ulang; audit bersampel atas item tertutup tertua; hitungan pemindahan antrean |
| Cakupan pelaporan tingkat | Menempelkan hitungan dengan huruf kecil sementara judul tetap memimpin dengan persentase; menetapkan hitungan minimum begitu rendah sehingga tak pernah terpicu | Tinjau dasbor sebenarnya, bukan register; hitungan minimum ditinjau bersama lebar selang |
| Tingkat sinyal bagan kendali | Melebarkan batas, menambah aturan, atau memulai ulang garis dasar sehingga sinyal menghilang; menggeser titik dengan mengubah ukuran | Aturan dan batas disimpan di register dengan riwayat perubahan; bandingkan dengan histogram mentah |
| Lebar selang | Memilih metode atau jendela yang menghasilkan rentang sempit; menggabungkan layanan yang berbeda untuk memperbesar sampel | Metode disebut di register; rincian per layanan tersedia atas permintaan; hasil tergabung dan tak tergabung dibandingkan |

Pembacaan yang sehat menunjukkan median dan persentil yang bergerak searah dengan pengalaman pengguna, daftar pendek item lama yang menyusut tanpa diam-diam diklasifikasikan ulang, dan tingkat yang muncul bersama hitungannya. Tingkat sinyal bagan kendali sebaiknya rendah dan tidak nol: bagan yang tak pernah memberi sinyal mungkin tidak mampu, dan yang selalu memberi sinyal mencerminkan proses tak stabil atau aturan yang dipilih buruk.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Rata-rata waktu penyelesaian | Sederhana, cocok dengan banyak kontrak, mudah dijumlahkan | Didominasi ekor; menyembunyikan apa yang biasanya dialami pelanggan |
| Median plus persentil tinggi | Tahan pencilan; mendukung janji kepada pelanggan | Butuh sedikit penjelasan; persentil membutuhkan cukup item agar stabil |
| Tingkat mentah tanpa hitungan | Ringkas dan akrab | Menyembunyikan sampel kecil dan mengundang pembacaan berlebihan |
| Tingkat dengan hitungan dan selang | Jujur tentang ketidakpastian; mencegah reaksi berlebihan | Tampak kurang tegas; metode selang perlu disepakati |
| Bagan kendali | Memisahkan sinyal dari kebisingan; memandu kapan bertindak | Butuh cukup titik dan definisi stabil; batas bisa disalahbaca atau dimanipulasi |
| Perbandingan sebelum-dan-sesudah | Cepat dan mudah dikomunikasikan | Rentan terhadap regresi ke arah rata-rata dan perubahan yang bersamaan |

Untuk layanan dengan segelintir insiden setahun, tidak ada statistik yang stabil, dan metode yang tepat adalah membaca setiap insiden. Untuk meja berdaya angkut tinggi, ukuran yang sadar distribusi murah dan jelas lebih unggul. Pilih menurut volume dan taruhan keputusannya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Angka dasbor kita saat ini yang mana adalah rata-rata dari sesuatu yang miring, dan apa yang akan ditunjukkan median dan persentil ke-95?**
Pilih ukuran waktu yang paling diawasi dan hitung ketiganya pada set item yang sama sebelum rapat. Tanyakan apakah cerita yang dituturkan rata-rata sesuai dengan yang dikatakan pengguna. Tutup dengan menyepakati ringkasan mana yang menjadi judul dan di mana yang lain akan muncul.

**2. Berapa banyak item di balik persentase yang paling sering kita kutip, dan masihkah kita mengutipnya jika kita menulis hitungannya?**
Daftar tiga persentase yang paling sering dibaca pimpinan. Di samping masing-masing, tulis pembilang dan penyebut untuk periode terakhir. Tanyakan apa yang akan dilakukan satu keberhasilan atau kegagalan tambahan pada angka itu. Sepakati hitungan minimum yang di bawahnya tim menampilkan item, bukan tingkat.

**3. Kapan terakhir kita memberi kredit perbaikan kepada sebuah inisiatif, dan apa lagi yang benar saat itu?**
Pilih kisah sukses terbaru. Tanyakan kapan ukuran itu berada di titik terburuk, seperti apa riwayat yang lebih panjang, dan apakah layanan sebanding juga membaik. Jaga nada tetap ingin tahu.

**4. Apa rentang normal ukuran kunci kita, dan siapa yang bisa mengatakan bahwa sebuah pekan tidak biasa?**
Plot 20 nilai mingguan terakhir atau lebih untuk satu ukuran dan gambar garis tengah dan batasnya, atau hitung secara kasar. Tanyakan pekan mana yang ditanggapi tim padahal berada dalam rentang. Sepakati siapa yang memiliki bagan dan di mana aturan sinyal ditulis.

**5. Siapa atau apa yang hilang dari data kita?**
Daftar sumber ukuran itu: tiket tertutup, respons survei, layanan yang dipantau, alat dengan stempel waktu. Untuk masing-masing, tanyakan siapa yang dikecualikan dan mengapa. Catat setiap kesenjangan sebagai perbaikan atau catatan peringatan.

**6. Bagaimana kita menjelaskan rentang lebar atau “kami belum tahu” kepada pimpinan tanpa terdengar seperti dalih?**
Latih kata-katanya pada contoh nyata: “Antara 70 dan 95 persen, atas 12 insiden; kami harapkan ini menyempit setelah kuartal berikutnya.” Tanyakan apa yang perlu diputuskan audiens dan apakah rentang itu mengubah keputusan. Tulis naskah singkat dalam rapat.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memakai cycle time dan throughput untuk memperkirakan, dan paling diuntungkan oleh perkiraan berbasis persentil daripada rata-rata (lihat topik 2.1, Ukuran alur). Perkiraan yang dinyatakan sebagai rentang dengan kemungkinan lebih mudah dipertahankan daripada tanggal. Tahan membaca perubahan satu periode sebagai tren (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman).

### Tim layanan dan operasi

Tim operasi memiliki data tiket dan jam insiden, sehingga paling cocok menerbitkan median, persentil, dan item terbuka tertua, serta menjelaskan aturan jeda. Mereka sebaiknya memplot volume mingguan dan waktu penyelesaian dengan batas kendali agar pergeseran nyata, seperti rilis yang cacat, dibedakan dari pekan yang buruk. Ketika sebuah layanan hanya memiliki sedikit insiden, mereka sebaiknya meninjau tiap insiden alih-alih menghitung tingkat (lihat topik 3.3, Waktu respons dan penyelesaian insiden).

### Kepemimpinan dan tata kelola

Pemimpin mengajukan pertanyaan yang membentuk apa yang ditunjukkan tim. Bertanya “mengapa ini naik?” pada setiap goyangan melatih organisasi menjelaskan kebisingan dan menyembunyikannya. Pemimpin sebaiknya bertanya apakah sebuah pergerakan berada dalam rentang normal, berapa banyak item di balik angka, dan apa yang berubah dalam proses. Badan tata kelola dapat mewajibkan hitungan pada tingkat utama.

### Pelanggan dan pengguna

Pelanggan mengalami kasus individual, bukan rata-rata. Mereka mengingat satu permintaan yang memakan lima pekan, dan rata-rata dua hari tidak memperbaiki ingatan itu. Komitmen persentil (“sembilan dari sepuluh permintaan dalam tiga hari kerja”) lebih cocok dengan model mental pelanggan daripada waktu rata-rata. Hasil survei sebaiknya ditampilkan dengan jumlah respons, dan komentar terbuka dibaca bersama angka (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah memiliki service desk dan tim operasi yang mendukung toko webnya. Angka di bawah bersifat ilustratif.

Pimpinan melihat judul bulanan: “rata-rata waktu penyelesaian insiden turun dari 9,1 jam menjadi 7,4 jam.” Kepala operasi diminta mengonfirmasinya dan memaparkan rencana untuk target berikutnya, 6 jam. Sebelum setuju, ia meminta analis menarik item yang mendasarinya dan memplotnya. Dari 240 insiden pada bulan itu (ilustratif), median adalah 2,5 jam, persentil ke-85 adalah 14 jam, dan 9 insiden lebih tua dari 5 hari dan masih terbuka. Bulan sebelumnya, median adalah 2,6 jam. Rata-rata turun karena tiga insiden yang sangat panjang dari bulan sebelumnya, salah satunya berusia 11 hari, kebetulan diselesaikan lebih awal dalam periode itu, dan karena sekelompok tiket setel ulang kata sandi diklasifikasikan ulang ke jenis permintaan yang cepat ditutup.

Tim memplot median mingguan untuk 26 pekan terakhir. Garis tengah berada di dekat 2,6 jam, dan setiap titik dari dua bulan terakhir berada dalam batas. Penurunan pada judul bukan sinyal. Klasifikasi ulang pada pekan kedua mengubah definisi di tengah bagan, jadi tim menandainya dan memulai ulang batas dari titik itu.

Mereka memutuskan tiga perubahan. Laporan bulanan akan menunjukkan median, persentil ke-85, dan item terbuka tertua, dengan jumlah insiden di balik masing-masing. Target rata-rata 6 jam yang diusulkan diganti dengan percakapan tentang sasaran persentil, untuk ditetapkan setelah satu kuartal data di bawah definisi baru. Tim juga akan mendaftar 9 insiden lama dengan pemilik dan langkah berikutnya masing-masing.

Risiko manipulasi yang mereka tangkap muncul pada tinjauan berikutnya. Seorang manajer mengusulkan menutup 9 insiden tertua sebagai “tidak lagi dapat direproduksi” agar angka item tertua tampak sehat. Karena register memasangkan usia item terbuka tertua dengan tingkat pembukaan ulang dan audit bersampel atas penutupan lama, tim membaca tiga dari penutupan yang diusulkan, mendapati dua masih aktif, dan membiarkannya terbuka. Angka item tertua tetap tidak nyaman selama satu bulan lagi. Itulah perilaku yang dimaksudkan.

## Sudut pandang sektor

**Startup.** Volume kecil, jadi kebanyakan tingkat terdiri dari beberapa item dan selang lebar. Baca setiap insiden alih-alih menghitung statistik, simpan bagan mingguan sederhana untuk satu atau dua ukuran, dan hindari menyatakan tren dari tiga titik. Seiring volume tumbuh, beralihlah lebih awal ke median dan persentil agar kebiasaannya sudah terbentuk.

**Bisnis kecil.** Orang yang menjalankan TI juga memiliki data, dan sampelnya biasanya kecil. Laporkan hitungan, bukan persentase, untuk peristiwa langka, dan bandingkan dengan riwayat panjang Anda sendiri. Periksa apa yang sebenarnya diukur jam “waktu respons” vendor.

**Perusahaan besar.** Volume membuat distribusi bermakna, dan juga mendorong rekapitulasi yang mencampur layanan berbeda. Bandingkan yang sebanding, terbitkan definisi dan persentil yang dipakai, dan simpan pustaka bersama aturan bagan dan perhitungan agar tim tidak menghitung ukuran yang sama dengan tiga cara.

**Pemerintah dan sektor publik.** Kontrak dan pelaporan undang-undang sering menetapkan rata-rata atau persentase ambang, dan definisi itu tidak bisa ditawar. Laporkan angka yang diwajibkan persis seperti didefinisikan, dan tampilkan median, persentil, dan hitungan di sampingnya agar badan pengawas melihat gambaran utuh. Pengawasan publik membuat ketidakpastian yang jujur lebih bernilai, karena angka yang terlalu percaya diri mahal untuk ditarik kembali (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Dibutuhkan beberapa jam untuk menyepakati aturan ringkasan, membangun histogram dan bagan kendali dari ekspor, dan menambahkan hitungan ke templat laporan, ditambah beberapa menit setiap siklus untuk menjaganya mutakhir. Kebanyakan alat sudah menghitung persentil. Biaya yang lebih besar adalah percakapan dengan orang yang terbiasa pada satu angka yang menenangkan.

Imbal hasilnya adalah keputusan yang lebih baik dan reaksi yang kurang sia-sia. Tim berhenti menata ulang organisasi setelah satu pekan buruk, berhenti memberi kredit kepada inisiatif atas perbaikan kebetulan, dan berhenti menjanjikan rata-rata yang tidak dialami separuh pelanggannya. Jangan meminjam angka: hitung seberapa sering keputusan tahun lalu dibalik dan berapa banyak “perbaikan” yang lenyap pada periode berikutnya, dan pakai hitungan itu untuk mengukur kasusnya.

## Anti-pola dan jebakan

- **Merata-ratakan durasi miring.** Rata-rata ditarik ekor dan menutupi apa yang dirasakan pengguna. Laporkan median dan persentil tinggi bernama, dan tampilkan item terbuka tertua.
- **Persentase dari sampel kecil.** “100 persen” dari tiga item adalah anekdot. Tampilkan hitungan dan terapkan aturan hitungan minimum.
- **Bereaksi pada setiap goyangan.** Mengejar tiap pekan merah menyia-nyiakan upaya dan mengajari tim menjelaskan kebisingan. Pakai batas kendali dan aturan sinyal tertulis.
- **Bukti sebelum-dan-sesudah.** Dua titik tidak dapat memisahkan intervensi dari kebetulan atau regresi ke arah rata-rata. Pakai garis dasar lebih panjang dan pembanding.
- **Memindahkan tiang gawang pada bagan.** Mengubah batas, aturan, atau definisi setelah kejadian membuat bagan mana pun sesuai ceritanya. Tetapkan aturan, catat perubahan, dan beri catatan.
- **Mengecualikan pencilan secara default.** Kasus terpanjang biasanya yang diingat pelanggan. Kecualikan hanya dengan alasan tertulis, dan daftar apa yang dikecualikan.
- **Presisi palsu.** Melaporkan 83,3 persen dari 12 item menyiratkan pengetahuan yang tidak dimiliki data. Bulatkan dengan jujur dan tampilkan rentang.
- **Menggabungkan pekerjaan yang berbeda.** Waktu campuran untuk setel ulang kata sandi dan kegagalan pusat data tidak menggambarkan keduanya. Segmentasikan dulu.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Ringkasan data waktu | Hanya rata-rata | Beberapa tim menunjukkan median | Median plus persentil bernama dan item terbuka tertua adalah standar | Distribusi ditinjau dengan pagar pembatas dan diplot tren | Komitmen persentil disepakati dengan pelanggan dan pemasok, dan direvisi seiring data berubah |
| Ukuran sampel dan ketidakpastian | Tingkat dikutip tanpa hitungan | Hitungan ditampilkan di beberapa laporan | Hitungan dan aturan hitungan minimum pada setiap tingkat | Selang pada tingkat utama, metode di register | Ketidakpastian dibagikan terbuka kepada pelanggan dan dipakai dalam perencanaan lintas tim |
| Variasi dan sebab-akibat | Setiap perubahan dijelaskan | Beberapa bagan dengan batas | Bagan kendali dengan aturan tertulis untuk ukuran kunci | Sinyal memicu penyelidikan terencana; inisiatif diperiksa terhadap garis dasar | Pustaka bagan bersama antarlayanan; garis dasar dibandingkan antartim tanpa peringkat |

## Daftar periksa

- [ ] Setiap ukuran waktu melaporkan median dan persentil tinggi bernama, bukan rata-rata saja.
- [ ] Usia item terbuka tertua dan jumlah item di luar persentil tinggi dilaporkan.
- [ ] Setiap tingkat yang dilaporkan menampilkan pembilang dan penyebutnya.
- [ ] Aturan hitungan minimum tertulis dan diterapkan pada semua tingkat.
- [ ] Tingkat utama dan perkiraan menampilkan rentang, dengan metode disebut di register.
- [ ] Bagan kendali ada untuk tiga ukuran yang ditindak tim, dengan aturan sinyal tertulis.
- [ ] Perubahan definisi diberi catatan pada bagan dan dicatat di register.
- [ ] Item yang dikecualikan didaftar beserta alasan.
- [ ] Klaim perbaikan diperiksa terhadap garis dasar lebih panjang sebelum diulang.
- [ ] Vektor manipulasi dan pagar pembatas setiap metrik ada di register (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

## Prompt AI

**Periksa apakah ringkasan sesuai dengan data.**

```text
Saya punya [number] nilai [measure, such as incident resolution time] untuk
[service] selama [period]. Jam dimulai pada [start event] dan berhenti pada
[stop event]. Jeda [handled how]. Nilainya ditempel di bawah.

Jelaskan bentuk distribusi, hitung rata-rata, median, dan [percentile, such as
85th] serta [second percentile, such as 95th], dan katakan ringkasan mana yang
paling mewakili kasus tipikal dan mana yang mendukung janji kepada pelanggan.
Tunjukkan nilai yang tampak seperti kesalahan data, tetapi jangan
menghapusnya. Jangan mengarang nilai acuan. Daftar asumsi Anda dan apa yang tidak
dapat Anda tentukan dari data.

[paste values, with personal data removed]
```

**Nyatakan tingkat beserta ketidakpastiannya.**

```text
Tim kami melaporkan [rate name] sebagai [numerator] dari [denominator] untuk
[period] dan [service]. Tunjukkan cara menyajikannya dengan hitungan, jelaskan
dalam kata sederhana seberapa besar satu keberhasilan lebih banyak atau lebih
sedikit akan mengubahnya, dan hitung selang kepercayaan memakai [method, or "a
method you recommend and name"]. Sarankan kata-kata yang dapat dipahami pimpinan
non-teknis dan aturan hitungan minimum kapan menampilkan item alih-alih tingkat.
Jangan mengarang angka pembanding. Daftar asumsi Anda, termasuk metode dan
kondisi data yang dibutuhkannya.
```

**Nilai apakah sebuah perubahan sinyal atau kebisingan.**

```text
Berikut [number] nilai berurutan [weekly or monthly] dari [measure] untuk
[service]. Sebuah perubahan terjadi pada [period]: [describe the intervention,
release, or definition change]. Plot atau gambarkan bagan kendali dengan garis
tengah dan batas, terapkan aturan sinyal ini: [list rules, such as one point
beyond the limits or a run of eight on one side], dan katakan titik mana yang
memberi sinyal. Katakan apakah perubahan itu dapat dibedakan dari variasi biasa,
dan penjelasan lain apa, seperti regresi ke arah rata-rata atau perubahan
definisi, yang harus saya singkirkan. Jangan mengklaim sebab-akibat. Daftar
asumsi Anda dan data tambahan yang akan membantu.

[paste values]
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik dan pagar pembatas berpasangan bagi metrik waktu atau tingkat sebelum Anda menerbitkannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa ukuran statistik yang ditambahkan ke sebuah topik memiliki definisi, jam, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Durasi layanan itu miring, jadi laporkan median dan persentil tinggi bernama, dan tambahkan usia item terbuka tertua.
- Setiap tingkat membawa hitungannya, dan sampel kecil ditampilkan sebagai item atau dengan rentang, bukan sebagai persentase yang percaya diri.
- Ketahui rentang normal sebuah ukuran dengan bagan kendali sebelum bereaksi pada satu pekan.
- Curigai perbaikan yang diukur dengan dua titik: regresi ke arah rata-rata dan perubahan definisi menjelaskan banyak di antaranya.
- Ketidakpastian yang jujur adalah kekuatan dalam laporan, dan ia pagar pembatas terhadap manipulasi ala Goodhart (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).
- Jaga teknik tetap proporsional: beberapa metode konsisten yang dijelaskan dengan kata sederhana lebih melayani tim daripada banyak metode tanpa penjelasan.

## Referensi dan bacaan lanjutan

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
