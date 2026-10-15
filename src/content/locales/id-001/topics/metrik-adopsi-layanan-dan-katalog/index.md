# Metrik adopsi layanan dan katalog

**Layanan yang tak dipilih, ditemukan, atau diselesaikan permintaannya oleh siapa pun belum menyampaikan nilai, jadi ukur bagaimana orang menemukan dan memakai apa yang Anda tawarkan, dan jaga katalog sejujur backlog.**

## Gambaran umum dan motivasi

Tim berinvestasi pada layanan lalu mendapati orang tidak memakainya. Portal swalayan baru dilewati lewat email. Item katalog yang dirancang cermat untuk akses perangkat lunak mendapat dua permintaan setahun sementara seratus sebulan tiba lewat obrolan. Layanan pemantauan diluncurkan dan separuh tim yang dibuatkan tidak pernah menyambungkannya. Adopsi adalah separuh pengiriman yang hilang: layanan hanya bernilai ketika pengguna yang dituju memulai, melanjutkan, dan menyelesaikan pemakaiannya.

**Katalog layanan** (ejaan ITIL sendiri adalah “service catalogue”) adalah daftar layanan dan item yang dapat diminta yang ditawarkan organisasi, digambarkan dalam istilah yang dapat dipahami penggunanya. [Katalog layanan](https://en.wikipedia.org/wiki/Service_catalog) biasanya punya tampilan yang menghadap pelanggan, yang mendaftar apa yang dapat diminta pengguna dan bagaimana, dan tampilan teknis, yang mencatat bagaimana tiap layanan dibangun dan didukung. Tim agile akan mengenali bentuknya: katalog adalah semacam [backlog produk](https://en.wikipedia.org/wiki/Product_backlog) secara terbalik. Backlog mendaftar apa yang Anda niatkan untuk dibangun. Katalog mendaftar apa yang sudah Anda tawarkan, dan keduanya butuh perawatan yang sama: pengurutan, pemangkasan, kata-kata jelas, dan aliran umpan balik yang tetap dari pengguna (lihat topik 2.6, Metrik backlog dan penyempurnaan).

**Adopsi** adalah sejauh mana pengguna yang dituju mengambil dan terus memakai suatu layanan. Kajian tentang bagaimana praktik baru menyebar punya sejarah panjang; teori [difusi inovasi](https://en.wikipedia.org/wiki/Diffusion_of_innovations) menggambarkan adopsi sebagai proses dari waktu ke waktu, dengan pengadopsi awal, mayoritas, dan yang tertinggal. Untuk layanan internal, pelajaran praktisnya adalah adopsi jarang terjadi karena pengumuman. Ia terjadi ketika layanan mudah ditemukan, mudah dipakai, dan jelas lebih baik daripada solusi sementara.

Ukuran adopsi menggoda untuk diubah menjadi target. Mewajibkan saluran membuat angka pemakaian tampak baik sementara pengguna membenci dan membangun solusi sementara. Mendorong setiap permintaan ke item katalog membuat cakupan katalog naik sementara penyelesaian turun. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku, jadi setiap ukuran di sini dipasangkan dengan pemeriksaan bahwa nilai nyata, bukan sekadar pemakaian, yang naik (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Topik ini mencakup empat hal: apakah orang memakai layanan (adopsi), apakah mereka dapat menemukan dan menyelesaikan apa yang mereka datangi (katalog dan alur permintaan), apakah katalog terkini dan jujur (kebersihan), dan apakah pemakaian terkonsentrasi pada segelintir item (bentuk). Ia terhubung dengan pemenuhan permintaan (lihat topik 3.5, Metrik pemenuhan permintaan layanan) dan swalayan (lihat topik 3.7, Metrik swalayan dan otomatisasi), yang mencakup apa yang terjadi setelah permintaan dibuat.

## Prinsip utama

- **Adopsi adalah hasil, jadi tanyakan apa yang sedang dicoba dilakukan pengguna.** Hitung tujuan yang selesai, bukan tampilan halaman.
- **Ukur corong, bukan hanya totalnya.** Di mana orang keluar memberi tahu apa yang diperbaiki.
- **Bandingkan dengan alternatif.** Layanan bersaing dengan email, obrolan, panggilan telepon, dan solusi sementara.
- **Jaga katalog sekecil dan sekini mungkin.** Item basi mengajari pengguna berhenti mencari.
- **Segmentasikan sebelum menyimpulkan.** Rata-rata lintas semua pengguna menyembunyikan kelompok yang bagi mereka layanan tidak berfungsi.
- **Jangan pernah memaksa pemakaian demi menaikkan angka.** Mandat menghasilkan angka, bukan adopsi.
- **Perlakukan pemakaian rendah sebagai pertanyaan untuk pemilik dan pengguna.** Mungkin berarti layanan tidak dibutuhkan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat adopsi | Porsi pengguna yang memenuhi syarat yang memakai layanan setidaknya sekali pada periode itu | pengguna berbeda yang memenuhi syarat dengan setidaknya satu pemakaian selesai / pengguna yang memenuhi syarat | persen | Log pemakaian layanan digabung dengan direktori pengguna | Manajemen katalog layanan; manajemen tingkat layanan | Adopsi fitur; tinjauan hasil produk | Bulanan |
| Tingkat pemakaian aktif | Porsi pengadopsi yang masih memakai layanan dari waktu ke waktu | pengguna aktif pada periode itu yang juga memakai layanan pada periode sebelumnya / pengguna aktif pada periode sebelumnya | persen | Log pemakaian; tabel kohort | Perbaikan berkelanjutan | Retensi dalam analitik produk | Bulanan |
| Cakupan katalog | Porsi permintaan yang tiba lewat katalog alih-alih saluran ad hoc | permintaan dibuat lewat katalog / semua permintaan, dari semua saluran | persen | Alat manajemen permintaan; tag kotak surat dan obrolan | Manajemen permintaan layanan; manajemen katalog layanan | Item backlog yang membawa definisi tertulis | Bulanan |
| Tingkat pengabaian permintaan | Porsi permintaan yang dimulai yang tidak diajukan pengguna | permintaan dimulai tetapi tidak diajukan dalam 24 jam / permintaan dimulai | persen | Analitik portal | Manajemen permintaan layanan | Pengabaian tugas dalam uji kegunaan | Bulanan |
| Tingkat keberhasilan pencarian | Porsi pencarian katalog yang berakhir dalam permintaan atau jawaban yang dilihat | pencarian yang diikuti permintaan atau tampilan pengetahuan dalam sesi / pencarian | persen | Log pencarian portal | Manajemen pengetahuan; manajemen katalog layanan | Kemudahan ditemukan dalam riset pengguna | Bulanan |
| Porsi item basi | Porsi item katalog yang melewati tanggal tinjauan atau tak dipakai dalam periode tertentu | item terlambat ditinjau atau dengan nol permintaan dalam 12 bulan / item dalam katalog | persen | Register katalog | Manajemen katalog layanan | Usia backlog dan pemangkasan | Kuartalan |
| Konsentrasi permintaan | Porsi permintaan yang dipegang item yang paling banyak diminta | permintaan untuk lima item teratas / semua permintaan katalog | persen | Alat manajemen permintaan | Manajemen permintaan layanan | Pareto pekerjaan menurut jenis | Kuartalan |

Nyatakan basis pengguna untuk setiap ukuran. “Pengguna yang memenuhi syarat” harus didefinisikan sebelum mengukur, misalnya staf dalam peran yang dapat memakai layanan, dan daftarnya dicatat di register metrik. Hitung pemakaian hanya ketika berakhir dengan hasil selesai, seperti pemberian akses yang diserahkan, dan bukan ketika halaman termuat. Kecualikan akun uji dan lalu lintas otomatis.

## Rekomendasi

### Kenali layanan dan pengguna Anda

**1. Definisikan audiens yang dituju untuk tiap layanan.** Sebelum mengukur adopsi, tuliskan untuk siapa layanan itu, dan mengapa mereka akan memakainya alih-alih alternatif. Layanan analitik baru yang dibangun untuk staf keuangan bukan “adopsi rendah” bila hanya staf keuangan yang dimaksudkan memakainya. Tanpa audiens yang didefinisikan, tingkat adopsi adalah angka tentang tak seorang pun.

**2. Catat alternatifnya.** Untuk setiap layanan utama, daftar apa yang dilakukan orang sekarang ketika tidak memakainya: bertanya pada rekan, mengirim email, membeli alat, menjalankan lembar kerja. Perlakukan alternatif sebagai pesaing dalam arti yang penting: di situlah pengguna Anda pergi ketika layanan Anda lebih sulit. Bandingkan upaya kedua jalur selama desain dan tinjauan.

**3. Gambarkan item dalam bahasa pengguna.** Judul seperti “Akses perangkat lunak, standar” dan “Penggantian laptop, rusak” lebih mudah ditemukan daripada nama internal. Uji judul dengan meminta beberapa pengguna menemukan item dari skenario singkat. Masalah kata-kata muncul cepat dalam log pencarian.

**4. Simpan pemilik untuk setiap item.** Setiap item katalog punya pemilik bernama, tanggal tinjauan, uraian audiens, dan volume yang diharapkan. Item tanpa pemilik hanyut. Jika tak ada yang dapat mengatakan siapa yang memakai item dan mengapa, ia kandidat untuk dihapus.

### Ukur perjalanan

**5. Instrumentasikan corong.** Untuk tiap layanan penting, catat langkah dari penemuan sampai hasil selesai: temukan item, mulai permintaan, isi formulir, ajukan, terima hasil. Tampilan [corong konversi](https://en.wikipedia.org/wiki/Conversion_funnel) menunjukkan di mana pengguna pergi. Perbaiki penurunan terbesar lebih dulu. Periksa bahwa perbaikan membuat formulir lebih pendek atau lebih jelas, bukan sekadar membuat data lebih cantik.

**6. Pakai kohort untuk melihat retensi.** [Analisis kohort](https://en.wikipedia.org/wiki/Cohort_analysis) mengelompokkan pengguna menurut kapan pertama memakai layanan dan mengikuti tiap kelompok. Ia memisahkan layanan yang mempertahankan penggunanya dari yang menarik mereka sekali dan kehilangan mereka. Pakai untuk layanan yang seharusnya dipakai berulang, seperti portal service desk atau pipeline deployment.

**7. Baca log pencarian untuk apa yang tak dapat ditemukan orang.** Pencarian tanpa hasil, atau pencarian yang diulang dengan kata berbeda, menunjuk celah dalam penamaan, dalam konten, atau dalam katalog itu sendiri. Tinjau pencarian tanpa hasil teratas tiap bulan dan putuskan untuk masing-masing: ganti nama item, tambah sinonim, tulis artikel, atau buat item baru. Alat [analitik web](https://en.wikipedia.org/wiki/Web_analytics) dapat menyediakan ini, begitu juga log portal sendiri.

**8. Segmentasikan menurut kelompok.** Pecah adopsi dan pengabaian menurut peran, lokasi, perangkat, dan kebutuhan aksesibilitas di mana Anda punya akses sah dan etis ke informasi itu. Agregat mungkin tampak sehat sementara staf shift malam atau pengguna di perangkat seluler gagal dengan laju dua kali lipat. Tekan kelompok kecil untuk melindungi orang, dan gabungkan dengan ukuran pengalaman di topik sebelumnya (lihat topik 6.2, Perjanjian tingkat pengalaman).

### Jaga katalog tetap jujur

**9. Pangkas menurut jadwal.** Tinjau katalog tiap kuartal. Hapus atau gabungkan item tanpa pemakaian, pensiunkan item untuk layanan yang dihentikan, dan perbaiki item dengan pengabaian tinggi. Katalog kecil yang akurat melayani pengguna lebih baik daripada yang lengkap dan basi. Perlakukan penghapusan sebagai normal dan catat alasannya.

**10. Lihat bentuk permintaan.** Di kebanyakan katalog segelintir item menyumbang sebagian besar permintaan, pola yang sering digambarkan lewat [prinsip Pareto](https://en.wikipedia.org/wiki/Pareto_principle). Pakai untuk memusatkan upaya desain pada item yang sering dan mengotomatisasi yang rutin (lihat topik 3.7, Metrik swalayan dan otomatisasi). Jangan membuang ekor panjang tanpa melihat, karena item langka dapat sangat penting bagi orang yang membutuhkannya.

**11. Jangan memaksa adopsi.** Jika layanan dibutuhkan, pengguna akan datang begitu mudah. Di mana organisasi mewajibkan saluran karena alasan kendali atau audit, katakan demikian, dan terbukalah bahwa angka mencerminkan aturan, bukan preferensi. Hindari [dark pattern](https://en.wikipedia.org/wiki/Dark_pattern), seperti menyembunyikan nomor telepon atau mempersulit alternatif, karena menaikkan pemakaian dan menurunkan kepercayaan.

**12. Tutup lingkaran dengan pemilik dan pengguna.** Bagikan corong, celah pencarian, dan daftar basi kepada pemilik item tiap bulan. Tanyakan pengguna, dalam survei dan tinjauan, mengapa mereka memakai atau menghindari layanan (lihat topik 6.1, Metrik kepuasan pelanggan). Catat apa yang Anda ubah di register dan beri tahu pengguna bahwa itu terjadi.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat adopsi | Mewajibkan pemakaian; menghitung login atau tampilan halaman sebagai pemakaian; mempersempit “pengguna yang memenuhi syarat” menjadi yang sudah memakainya | Definisi hasil selesai; bandingkan dengan penilaian kepuasan dan upaya; terbitkan aturan pengguna yang memenuhi syarat |
| Tingkat pemakaian aktif | Mendaftarkan pengguna otomatis agar tampak aktif; mengirim notifikasi yang dihitung sebagai aktivitas | Hitung hanya tindakan selesai yang dimulai pengguna; wawancara sampel dengan pengguna yang berhenti |
| Cakupan katalog | Memaksa setiap permintaan masuk item katalog generik; menutup permintaan email dengan “silakan pakai portal” | Tingkat pengabaian permintaan dan kepuasan; hitung berapa banyak permintaan diajukan ulang lewat saluran lain |
| Tingkat pengabaian permintaan | Menyingkirkan kolom formulir yang dibutuhkan, yang menggeser pekerjaan ke pemenuhan; menghitung permintaan ditinggalkan hanya setelah jendela panjang | Tingkat pengerjaan ulang dan klarifikasi pada pemenuhan (lihat topik 3.5, Metrik pemenuhan permintaan layanan) |
| Tingkat keberhasilan pencarian | Menghitung klik apa pun sebagai keberhasilan; menambah artikel tak relevan yang cocok dengan setiap kueri | Periksa bahwa hasilnya dipakai (permintaan dibuat, artikel dinilai membantu); baca pencarian tanpa hasil |
| Porsi item basi | Menandai item ditinjau tanpa membacanya; mengatur ulang tanggal tinjauan secara massal | Ambil sampel item yang ditinjau untuk akurasi; tampilkan tanggal perubahan nyata terakhir |
| Konsentrasi permintaan | Memecah item populer menjadi banyak; menggabung item tak berkaitan untuk menyembunyikan permintaan ekor panjang | Taksonomi item tetap dengan log perubahan; lihat ekor menurut kategori |

Pembacaan yang sehat adalah katalog tempat item yang paling banyak dipakai berfungsi baik dan menjadi makin mudah, tempat pengguna memilih layanan karena lebih baik daripada alternatif, dan tempat memensiunkan item adalah rutin.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Saluran yang diwajibkan | Volume terprediksi, mudah diaudit | Kebencian, solusi sementara, angka digelembungkan |
| Adopsi sukarela | Sinyal jujur tentang nilai | Lebih lambat; sebagian layanan mungkin tak pernah diadopsi |
| Katalog besar | Lengkap, mencakup kebutuhan langka | Sulit dicari; menjadi basi |
| Katalog kecil | Mudah ditemukan dan dirawat | Kebutuhan langka jatuh di luar; pengguna beralih ke email |
| Ukuran corong | Menunjuk tepat di mana pengguna keluar | Butuh instrumentasi; dapat mendorong mengoptimalkan formulir dengan mengorbankan hasil |
| Survei tentang mengapa | Menjelaskan perilaku | Dibiaskan oleh siapa yang menjawab; sulit diskalakan |

Jawaban prosanya adalah mengutamakan adopsi sukarela yang didukung keunggulan mutu yang jelas, dan memakai mandat hanya di mana kendali atau kepatuhan menuntutnya, dengan angka dilabeli sesuai. Jaga katalog cukup kecil untuk dirawat, dan taruh ekor di basis pengetahuan yang dapat dicari, bukan dalam seratus item yang setengah dipakai.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Untuk siapa tiap layanan utama kita, dan bagaimana kita tahu mereka memakainya?**
Daftar lima layanan yang paling banyak memakan waktu tim Anda dan tulis audiens yang dituju untuk masing-masing. Lalu tanyakan bagaimana adopsi dapat diukur untuk mereka. Fasilitator sebaiknya mencari layanan tempat tak ada yang dapat menamai audiens, karena itu kemungkinan tak punya rencana adopsi.

**2. Apa yang dilakukan orang ketika mereka tidak memakai layanan kita, dan mengapa?**
Untuk satu layanan berpemakaian rendah, wawancarai atau survei beberapa pengguna yang menghindarinya. Alternatifnya biasanya mengungkap: mungkin lebih cepat, lebih akrab, atau lebih fleksibel. Putuskan apakah memperbaiki layanan, mengubah alternatif, atau menerima bahwa layanan tidak dibutuhkan.

**3. Di mana pengguna keluar dari item kita yang paling banyak diminta?**
Tunjukkan corong untuk item teratas, dari tampilan pertama sampai pengajuan. Minta tim menebak di mana penurunan terbesar, lalu bandingkan. Sepakati satu perubahan untuk diuji, dan katakan bagaimana Anda akan memeriksa bahwa itu membantu tanpa memindahkan masalah ke tempat lain.

**4. Apa yang akan kita hapus dari katalog jika kita berani?**
Cetak daftar item tanpa permintaan dalam setahun. Tanyakan apa yang terjadi jika masing-masing lenyap. Percakapan sering menemukan bahwa item ada karena seseorang pernah memintanya. Sepakati tanggal untuk menghapus atau menggabung lima yang pertama, dan catatan untuk pengguna.

**5. Di mana kita mendorong atau memaksa pengguna, dan apakah sepadan dengan biayanya?**
Daftar setiap tempat tempat aturan atau desain mendorong pengguna ke suatu saluran. Tanyakan mana yang benar-benar dibutuhkan dan mana kebiasaan. Fasilitator sebaiknya menjelajahi bagaimana pengguna mengalami masing-masing, dan apakah angka yang dihasilkan berarti apa yang dikira pimpinan.

**6. Apa yang dicari orang yang tidak kita miliki?**
Tinjau pencarian tanpa hasil teratas. Untuk masing-masing, putuskan apakah menambah item, menulis artikel, atau menjelaskan bahwa layanan itu tidak ada. Tanyakan siapa yang memiliki tinjauan ini dan seberapa sering akan terjadi.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman membangun layanan dan fitur yang butuh adopsi agar berarti. Mereka sebaiknya mendefinisikan audiens di awal, membangun ukuran pemakaian ke dalam layanan, dan meninjau corong setelah peluncuran. Data adopsi adalah umpan balik atas pekerjaan, dan milik penyempurnaan dan tinjauan. Tim sebaiknya menghindari menyatakan rilis selesai ketika dikirim. Selesai berarti pengguna yang dituju mendapat manfaatnya.

### Tim layanan dan operasi

Tim operasi menjalankan katalog dan melihat permintaan yang tiba lewat setiap saluran. Mereka sebaiknya menjaga katalog terkini, memberi tag permintaan yang melewatinya, dan bertanya mengapa. Mereka sebaiknya tidak menutup permintaan dengan mengalihkannya, karena itu menyembunyikan sinyal. Celah pencarian dan pengabaian adalah sumber perbaikan terbaik mereka untuk portal.

### Kepemimpinan dan tata kelola

Pemimpin memutuskan apakah adopsi adalah percakapan atau kuota. Mereka sebaiknya bertanya untuk apa layanan, siapa yang dibantunya, dan mengapa orang memilihnya. Mereka sebaiknya menghindari menetapkan target adopsi untuk tim individual, mendukung pemensiunan layanan tak terpakai, dan mengharapkan melihat adopsi di samping kepuasan dan upaya. Di mana mandat dibenarkan, pemimpin sebaiknya menjelaskannya kepada pengguna.

### Pelanggan dan pengguna

Pengguna ingin mendapat apa yang mereka butuhkan dengan upaya kecil. Mereka memperhatikan ketika portal sulit dicari, ketika formulir menanyakan hal yang sudah diketahui organisasi, dan ketika cara lama lebih cepat. Perilaku mereka, dan apa yang mereka katakan, adalah sinyal adopsi paling jujur. Mereka sebaiknya ditanya mengapa menghindari layanan, dan diberi tahu apa yang berubah akibatnya.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah badan transportasi nasional menjalankan service desk, portal swalayan dengan katalog sekitar 140 item, dan beberapa tim produk. Angka di bawah bersifat ilustratif.

Portal diluncurkan setahun lalu, dan pimpinan menetapkan tujuan 80 persen permintaan lewat portal. Laporan bulanan menunjukkan cakupan 78 persen, dan kepala manajemen layanan senang sampai ia membaca komentar dari survei pengguna. Staf di kantor regional mengatakan portal lambat dan formulirnya panjang. Ia meminta manajer katalog melihat corong dan log pencarian.

Corong untuk “Peralatan karyawan baru” menunjukkan 1.100 permulaan per kuartal dan 640 pengajuan, tingkat pengabaian 42 persen. Formulir punya 23 kolom. Log pencarian menunjukkan istilah “laptop” mengembalikan delapan item, dan istilah “VPN” tidak mengembalikan apa pun, padahal itu istilah yang paling banyak dicari. Dari 140 item katalog, 38 tak punya permintaan dalam 12 bulan dan 21 melewati tanggal tinjauan. Lima item teratas menyumbang 61 persen permintaan, dan 15 persen permintaan lain tiba lewat email dan dicatat dengan tangan.

Tim membuat empat perubahan. Ia memangkas formulir karyawan baru menjadi sembilan kolom dengan memakai data yang sudah dipegang sistem SDM. Ia menambah artikel VPN dan item dengan sinonim. Ia menggabung delapan item laptop menjadi dua. Dan ia memensiunkan 19 dari item tak terpakai dengan catatan kepada pemilik. Ia juga mengubah cara laporan bulanan dibaca: cakupan ditampilkan dengan tingkat pengabaian dan pertanyaan survei “seberapa mudah mendapatkan apa yang Anda butuhkan?” Tiga bulan kemudian, pengabaian item karyawan baru turun menjadi 24 persen, cakupan portal 74 persen, dan penilaian upaya dari kantor regional naik. Direktur bertanya mengapa cakupan turun. Kepala manajemen layanan menjelaskan bahwa permintaan email sebelumnya ditutup paksa, dan bahwa angka yang lebih rendah lebih jujur dan pengalamannya lebih baik. Log keputusan mencatat bahwa target diganti dengan arah: kurangi pengabaian dan naikkan penilaian upaya, dengan cakupan ditinjau tetapi tidak ditargetkan.

## Sudut pandang sektor

**Startup.** Sering tak ada katalog. Halaman sederhana “cara mendapatkan X” dan saluran bersama sudah cukup. Awasi apa yang diminta orang dan ubah lima permintaan teratas menjadi panduan singkat. Ukur adopsi alat internal dengan bertanya kepada pengguna, dan lewati corong formal.

**Bisnis kecil.** Sedikit orang menyediakan TI, dan permintaan tiba lewat setiap saluran. Katalog sederhana 10 sampai 20 item mencakup sebagian besar kebutuhan. Jangan memaksa pengguna ke portal yang berbiaya lebih untuk dirawat daripada permintaan yang ditanganinya. Tinjau daftar dua kali setahun.

**Perusahaan besar.** Skala memberi Anda katalog yang cukup besar untuk butuh tata kelola: pemilik, tanggal tinjauan, dan taksonomi. Segmentasikan adopsi menurut unit bisnis dan wilayah, dan hindari mandat seluruh perusahaan yang mengabaikan kebutuhan lokal. Waspadai pemasok yang item katalognya dihitung tetapi tak dipakai.

**Pemerintah dan sektor publik.** Layanan menjangkau publik selain staf, dengan kewajiban tentang aksesibilitas, bahasa, dan akses setara. Sertakan saluran berbantuan (telepon, tatap muka) dalam ukuran agar adopsi digital tidak menyembunyikan pengucilan. Di mana aturan hukum atau kebijakan mewajibkan saluran, nyatakan dalam laporan (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya sedang. Log pemakaian dan data permintaan biasanya sudah ada. Analisis corong dan pencarian butuh akses ke analitik portal, yang disediakan kebanyakan platform. Biaya waktu utamanya adalah tinjauan katalog kuartalan dan tinjauan bulanan atas celah pencarian dan penurunan, beberapa jam masing-masing. Memperbaiki formulir dan menggabung item berbiaya waktu desain dan konfigurasi.

Imbal hasil datang dari layanan yang dipakai, permintaan yang selesai, dan lebih sedikit pemborosan dalam pemenuhan. Formulir lebih pendek yang memangkas pengabaian mengurangi kontak ulang dan penanganan manual. Memangkas item tak terpakai mengurangi perawatan. Bangun kasus dari angka Anda sendiri: tingkat pengabaian, waktu penanganan manual per permintaan yang dikirim lewat email, dan biaya merawat item tak terpakai, sebelum dan sesudah perubahan. Hindari klaim terbitan tentang ROI portal yang tak dapat Anda telusuri, karena bergantung pada organisasi dan metode.

## Anti-pola dan jebakan

- **Menghitung peluncuran sebagai adopsi.** Layanan diadopsi ketika pengguna yang dituju menyelesaikan hasil dengannya. Ukur pemakaian, bukan pengumuman.
- **Mewajibkan saluran untuk menaikkan angka.** Pengguna akan menyiasatinya. Perbaiki layanan dan biarkan angka mengikuti.
- **Menambah item dan tak pernah menghapus.** Katalog menjadi tak dapat dicari. Pangkas tiap kuartal.
- **Melihat hanya total.** Segmentasikan menurut kelompok dan lihat corong.
- **Menutup permintaan email dengan pengalihan.** Itu menyembunyikan permintaan dan menjengkelkan pengguna. Tangani permintaan dan perbaiki jalurnya.
- **Memakai tampilan halaman sebagai pemakaian.** Hitung hasil selesai.
- **Memperlakukan pemakaian rendah sebagai kegagalan pengguna.** Tanyakan apakah layanan dibutuhkan dan mudah dipakai.
- **Membiarkan pemilik item lalai.** Tetapkan pemilik dan tanggal tinjauan untuk setiap item.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Desain katalog | Daftar tumbuh menurut permintaan | Katalog ada, kata-kata tidak konsisten | Item berbahasa pengguna dengan pemilik dan tanggal tinjauan | Pemangkasan kuartalan; taksonomi dikelola | Katalog dibagikan antartim dan pemasok; item dirancang bersama pengguna |
| Pengukuran adopsi | Anekdot | Hitungan permintaan menurut item | Adopsi didefinisikan menurut pengguna yang memenuhi syarat dan hasil selesai | Corong, kohort, dan segmen ditinjau bulanan | Adopsi dikaitkan dengan pengalaman dan hasil lintas layanan |
| Perbaikan | Perbaikan ad hoc | Perbaikan setelah keluhan | Celah pencarian dan penurunan ditinjau bulanan | Perbaikan diprioritaskan dan dilacak di backlog | Perbaikan dikoordinasikan dengan pengguna, dengan layanan yang dipensiunkan dilaporkan terbuka |

## Daftar periksa

- [ ] Setiap layanan utama punya audiens yang dituju tertulis dan jalur alternatif.
- [ ] Adopsi didefinisikan sebagai hasil selesai oleh pengguna yang memenuhi syarat.
- [ ] Item katalog punya pemilik, uraian dalam bahasa pengguna, dan tanggal tinjauan.
- [ ] Corong diinstrumentasi untuk item yang paling banyak diminta.
- [ ] Pencarian tanpa hasil ditinjau bulanan.
- [ ] Adopsi dan pengabaian disegmentasi menurut kelompok, dengan kelompok kecil ditekan.
- [ ] Permintaan yang tiba di luar katalog diberi tag dan dihitung.
- [ ] Katalog dipangkas tiap kuartal, dengan alasan dicatat.
- [ ] Adopsi ditampilkan di samping ukuran kepuasan atau upaya.
- [ ] Tak ada target adopsi yang ditetapkan untuk tim atau orang individual.

## Prompt AI

**Analisis corong permintaan.**

```text
Untuk item katalog [item name] di [type of organization], data portal kami untuk
[period] adalah: tampilan [number], permulaan [number], pengajuan [number], dan
terpenuhi [number]. Formulir punya [number] kolom: [list]. Gambarkan di mana
pengguna kemungkinan kesulitan, sarankan tiga perubahan untuk diuji, dan katakan
bagaimana saya memeriksa bahwa tiap perubahan membantu tanpa memindahkan masalah
ke pemenuhan. Jangan mengarang nilai acuan. Daftar asumsi Anda dan data tambahan
apa yang Anda butuhkan.
```

**Tinjau log pencarian untuk celah katalog.**

```text
Berikut [number] pencarian katalog teratas dari [period] dengan hitungan hasil:
[paste data]. Kelompokkan menjadi tema, tandai pencarian yang tidak mengembalikan
apa pun atau terlalu banyak item, dan sarankan apakah masing-masing butuh item
baru, penggantian nama, sinonim, atau artikel pengetahuan. Jangan menebak layanan
yang mungkin tidak kami tawarkan. Daftar asumsi Anda dan pertanyaan yang harus
saya ajukan kepada pemilik item.
```

**Rencanakan tinjauan pemangkasan katalog.**

```text
Saya mengelola katalog [number] item. Untuk setiap item ini saya punya hitungan
permintaan 12 bulan, tanggal tinjauan, dan pemilik: [paste a summary]. Usulkan
kriteria untuk menghapus, menggabung, atau mempertahankan item, catatan singkat
kepada pemilik, dan cara menghindari membuang item langka tetapi kritis. Sertakan
pemeriksaan bahwa kami tidak sekadar memindahkan permintaan ke email. Daftar
asumsi Anda.
```

**Susun definisi adopsi untuk suatu layanan.**

```text
Layanan: [name]. Pengguna yang dituju: [roles]. Jalur alternatif hari ini: [what
they do now]. Susun definisi adopsi satu halaman yang mencakup pengguna yang
memenuhi syarat, apa yang dihitung sebagai pemakaian selesai, sumber data, cara
mengecualikan lalu lintas uji dan otomatis, bagaimana ukuran dapat dimanipulasi,
dan pagar pembatas. Jangan mengarang target. Daftar asumsi Anda dan apa pun yang
perlu saya konfirmasi.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik adopsi atau katalog.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik katalog baru punya vektor manipulasi dan pagar pembatasnya.

## Poin penting

- Adopsi berarti pengguna yang dituju menyelesaikan hasil dengan layanan, jadi definisikan audiens dan hitung penyelesaian.
- Ukur corong, celah pencarian, dan retensi pengguna, dan segmentasikan menurut kelompok.
- Bandingkan layanan dengan alternatif yang dimiliki pengguna hari ini.
- Jaga katalog kecil, berpemilik, dan dipangkas tiap kuartal.
- Jangan memaksa pemakaian demi menaikkan angka, dan pasangkan adopsi dengan kepuasan dan upaya.
- Perlakukan pemakaian rendah sebagai pertanyaan tentang kebutuhan dan kemudahan, bukan kegagalan pengguna.

## Referensi dan bacaan lanjutan

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
