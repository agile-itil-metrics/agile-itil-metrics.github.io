# Metrik siklus hidup aset perangkat keras

**Perangkat adalah alat harian orang yang termotivasi sekaligus aliran biaya, risiko, dan pemborosan, jadi rencanakan penyegaran sebagai aliran mantap alih-alih hentakan berkala, ukur usia dan kegagalan dari data Anda sendiri, dan perlakukan pembuangan aman dan pemakaian ulang sebagai bagian pekerjaan.**

## Gambaran umum dan motivasi

Di balik setiap layanan ada benda fisik: laptop, ponsel, server, peralatan jaringan, printer, serta kabel dan rak yang menyatukannya. Perangkat keras punya siklus hidup yang tidak dimiliki perangkat lunak. Ia dibeli, dikirim, diberi citra, dibagikan, diperbaiki, dipindahkan, dipensiunkan, dihapus datanya, dan didaur ulang, dan setiap langkah punya biaya dan risiko. Laptop yang gagal saat panggilan klien berbiaya lebih daripada laptopnya. Server pensiun yang meninggalkan gedung dengan data di disknya berbiaya jauh lebih daripada nilai jualnya. Laci ponsel tak terpakai adalah modal yang tidak melakukan apa-apa.

Tujuan agile membangun proyek di sekitar individu yang termotivasi, dengan lingkungan dan dukungan yang mereka butuhkan, berlaku langsung. Orang tak dapat bekerja paling baik pada perangkat yang lambat, rusak, atau hilang. Tradisi ITIL menyumbang pandangan siklus hidup dan catatan yang menyertainya, dibahas dalam topik sebelumnya tentang manajemen aset TI (lihat topik 7.1, Metrik manajemen aset TI). Topik ini menambah ukuran khusus untuk peralatan fisik: seberapa tua, seberapa sering gagal, seberapa baik dipakai, dan bagaimana ia keluar.

Perencanaan perangkat keras sering dilakukan dalam siklus besar: ganti semuanya tiap beberapa tahun, dalam satu pembelian besar, lalu hidup dengan akibatnya. Alternatif yang lebih mantap, dalam semangat pengiriman berkelanjutan, adalah menyegarkan sebagian aset secara terus-menerus. Itu meratakan belanja, menyebar beban kerja pembuatan citra dan serah terima, dan memungkinkan Anda belajar dari tiap batch sebelum membeli yang berikutnya. Itu juga berarti Anda butuh data usia dan kegagalan untuk memutuskan kapan tiap perangkat harus pergi.

Tiga gagasan mengorganisasi ukuran.

- **Usia dan kegagalan.** [Tingkat kegagalan](https://en.wikipedia.org/wiki/Failure_rate) populasi perangkat berubah sepanjang masa hidupnya, dan [rata-rata waktu antarkegagalan](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF) adalah ringkasan umum untuk item yang dapat diperbaiki. Rata-rata menyembunyikan banyak hal: batch dengan komponen cacat mungkin gagal awal sementara sisanya baik. Lihat kegagalan menurut model, batch, dan pita usia, dan pakai riwayat Anda sendiri, bukan angka produsen, untuk merencanakan.
- **Pemanfaatan.** Perangkat yang tak dipakai siapa pun adalah pemborosan, dan perangkat yang kelebihan beban adalah sumber gesekan. Ukur apakah peralatan dipakai dan apakah cocok dengan pekerjaan.
- **Keluar yang bertanggung jawab.** Peralatan pensiun mungkin menyimpan data sensitif, mengandung bahan berharga dan berbahaya, dan menambah sampah elektronik. [Sampah elektronik](https://en.wikipedia.org/wiki/Electronic_waste) adalah kekhawatiran lingkungan yang tumbuh, dan banyak yurisdiksi mengatur cara penanganannya. [Penghapusan data](https://en.wikipedia.org/wiki/Data_erasure) yang aman dan pemakaian ulang atau daur ulang bersertifikat adalah akhir siklus hidup, bukan renungan belakangan. Pendekatan [ekonomi sirkular](https://en.wikipedia.org/wiki/Circular_economy) menjaga produk dan bahan tetap dipakai selama mungkin.

Metrik perangkat keras terpapar distorsi yang akrab. Tim yang dihargai atas rata-rata usia perangkat rendah mungkin menyegarkan perangkat yang baik-baik saja. Tim yang dihargai atas belanja rendah mungkin memperpanjang masa hidup sampai kegagalan mengganggu orang. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku, jadi setiap ukuran dipasangkan dengan pemeriksaan bahwa orang dan planet lebih baik, bukan hanya angkanya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Rencanakan aliran yang mantap.** Segarkan sebagian aset tiap periode, dan belajar dari tiap batch.
- **Putuskan dengan bukti.** Pakai data kegagalan, usia, dan pemakaian Anda sendiri untuk memilih kapan mengganti.
- **Lihat distribusinya.** Rata-rata menyembunyikan ekor yang tua, rusak, dan menganggur.
- **Hitung biaya total.** Harga beli adalah satu bagian dari biaya perangkat sepanjang masa hidupnya (lihat topik 7.5, Biaya layanan dan ekonomi per unit).
- **Lindungi data sampai akhir.** Perangkat belum pensiun sampai datanya hilang dan buktinya dicatat.
- **Utamakan pemakaian ulang dan perbaikan.** Jaga peralatan tetap beroperasi selama ia melayani orang dengan baik.
- **Perlakukan peralatan sebagai bagian lingkungan kerja.** Orang butuh perangkat yang berfungsi.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Profil usia | Distribusi usia perangkat menurut kelas, dan porsi yang melewati masa pakai terencana | median usia dan persentil ke-85 usia; porsi perangkat yang lebih tua dari masa pakai terencana untuk kelas | tahun; persen | Tanggal pembelian dan deployment register aset | Manajemen aset TI; manajemen kapasitas dan kinerja | Tinjauan kesehatan teknis | Kuartalan |
| Tingkat penyegaran tepat waktu | Porsi perangkat yang mencapai penggantian terencana yang diganti dalam jendela terencana | perangkat diganti dalam jendela / perangkat yang mencapai penggantian terencana pada periode itu | persen | Register aset dan rencana penyegaran | Manajemen aset TI; manajemen permintaan layanan | Pemeliharaan terencana lingkungan kerja | Kuartalan |
| Tingkat kegagalan menurut model | Kegagalan per 100 perangkat per tahun, menurut model dan pita usia | kegagalan perangkat keras pada periode itu / rata-rata perangkat beroperasi, diskalakan ke setahun, dikali 100 | kegagalan per 100 per tahun | Catatan insiden dan perbaikan digabung dengan register | Manajemen insiden; manajemen aset TI | Cacat dalam lingkungan kerja | Kuartalan |
| Porsi perangkat menganggur | Porsi perangkat yang dikeluarkan tanpa aktivitas dalam periode tertentu | perangkat tanpa masuk atau aktivitas jaringan dalam 60 hari / perangkat yang dikeluarkan | persen | Log manajemen endpoint, diagregasi menurut kelas | Manajemen aset TI; manajemen keuangan | Pengurangan pemborosan | Bulanan |
| Lead time penggantian | Waktu mengganti perangkat yang gagal atau hilang dengan yang berfungsi | median dan persentil ke-85 jam atau hari dari laporan sampai pengguna punya perangkat berfungsi | hari | Catatan insiden dan permintaan | Manajemen insiden; manajemen permintaan layanan | Waktu membebaskan anggota tim dari hambatan | Bulanan |
| Penyelesaian pembuangan aman | Porsi perangkat pensiun dengan bukti tercatat penghapusan atau penghancuran data | perangkat pensiun dengan bukti penghapusan atau penghancuran / perangkat yang dipensiunkan | persen | Catatan pembuangan dan sertifikat penghapusan | Manajemen keamanan informasi; manajemen aset TI | Definisi selesai untuk memensiunkan peralatan | Bulanan |
| Tingkat pemakaian ulang dan daur ulang | Porsi perangkat pensiun yang dipakai ulang, direkondisi, atau didaur ulang lewat saluran yang disetujui | perangkat dipakai ulang, direkondisi, atau didaur ulang lewat saluran yang disetujui / perangkat yang dipensiunkan | persen | Catatan pembuangan dan mitra | Manajemen aset TI; manajemen pemasok | Tujuan keberlanjutan dalam perencanaan | Kuartalan |

Definisikan kelas perangkat (misalnya laptop standar, workstation pengembang, ponsel, server, switch jaringan), masing-masing dengan masa pakai terencananya sendiri. Tingkat kegagalan menghitung hanya kerusakan perangkat keras, dan mengecualikan kerusakan perangkat lunak, kerusakan akibat pengguna yang dikodekan terpisah, dan kehilangan. Jam untuk lead time penggantian dimulai pada laporan dan berhenti ketika pengguna mengonfirmasi perangkat berfungsi, bukan ketika satu dikirim. Porsi perangkat menganggur mengecualikan perangkat yang sengaja cadangan, yang dihitung sebagai kelas terpisah.

## Rekomendasi

### Rencanakan aliran

**1. Tetapkan masa pakai terencana untuk tiap kelas, dan perlakukan sebagai hipotesis.** Mulai dari garansi vendor dan pengalaman Anda sendiri, dan revisi seiring data tiba. Masa pakai terencana beberapa tahun untuk laptop, lebih lama untuk peralatan jaringan, dan lebih pendek untuk perangkat yang banyak dipakai adalah lazim, tetapi angka yang tepat untuk aset Anda datang dari data kegagalan dan pemakaian Anda sendiri. Tulis alasannya di register.

**2. Segarkan terus-menerus dalam batch kecil.** Ganti porsi perangkat yang mantap tiap bulan atau kuartal, diurutkan menurut usia, riwayat kegagalan, dan kebutuhan. Batch kecil meratakan biaya, menyebar pekerjaan pembuatan citra dan serah terima, dan memungkinkan Anda menguji model baru dengan beberapa pengguna sebelum berkomitmen. Satu penyegaran besar tiap beberapa tahun memusatkan risiko dan upaya.

**3. Simpan penyangga cadangan yang sedang.** Kolam kecil perangkat siap memperpendek lead time penggantian untuk kegagalan, kehilangan, dan karyawan baru. Tentukan ukuran penyangga dari riwayat kegagalan dan perekrutan Anda sendiri, dan tinjau tiap kuartal. Hitung cadangan sebagai kelasnya sendiri agar tidak mendistorsi pemanfaatan.

**4. Rencanakan bersama keuangan, bukan terhadap mereka.** Sepakati bagaimana perangkat dikapitalisasi dan disusutkan, dan bagaimana penyegaran yang mantap muncul di anggaran. Aturan [penyusutan](https://en.wikipedia.org/wiki/Depreciation) memengaruhi kapan penggantian paling murah di atas kertas, dan sebaiknya tidak menggerakkan penggantian perangkat yang masih melayani orang dengan baik. Simpan pandangan bersama atas rencana dan asumsinya.

### Belajar dari data Anda sendiri

**5. Pelajari kegagalan menurut model, batch, dan usia.** Gabungkan catatan perbaikan dan insiden ke register dan lihat kegagalan per 100 perangkat per tahun menurut model dan pita usia. Cari batch yang gagal awal, model yang gagal dengan cara tertentu, dan usia saat kegagalan mulai naik. Pakai temuan untuk memilih model dan mewaktukan penggantian. Berhati-hatilah dengan sampel kecil, dan katakan ketika model punya terlalu sedikit perangkat untuk dinilai (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**6. Pakai garansi dan perbaikan dengan bijak.** Ketahui apa yang dicakup [garansi](https://en.wikipedia.org/wiki/Warranty) dan berapa lama, catat klaim, dan bandingkan biaya perbaikan dengan penggantian. Perbaikan menjaga peralatan tetap dipakai dan di luar aliran sampah, dan hak memperbaiki suku cadang dan informasi adalah topik kebijakan aktif di beberapa tempat. Utamakan model yang dapat diperbaiki dan ditingkatkan bila hal lain sama.

**7. Ukur pemakaian untuk menemukan yang menganggur dan yang tertekan.** Agregasikan data aktivitas menurut kelas, dan cari perangkat yang tak pernah dipakai dan perangkat yang konsisten mentok. Perangkat menganggur dapat ditetapkan ulang atau dipensiunkan. Perangkat tertekan adalah gesekan, dan pengguna akan merasakannya (lihat topik 6.4, Pengalaman pengguna dan karyawan). Hormati privasi: laporkan menurut kelas dan kelompok, tidak pernah menurut orang, dan pakai data minimum.

**8. Lacak lead time penggantian sebagai layanan.** Ukur berapa lama seseorang mendapat perangkat berfungsi setelah kegagalan atau kehilangan, dan sertakan langkahnya: laporan, persetujuan, stok, pembuatan citra, pengiriman, dan serah terima. Persentil ke-85 memberi tahu seberapa buruk kasus yang kurang beruntung. Perbaiki langkah paling lambat lebih dulu.

### Kelola perangkat dengan baik

**9. Kelola perangkat secara terpusat dan konsisten.** [Manajemen perangkat seluler](https://en.wikipedia.org/wiki/Mobile_device_management) dan alat serupa memungkinkan Anda mendaftarkan, mengonfigurasi, memperbarui, dan menghapus perangkat dari jarak jauh, yang mengurangi pekerjaan manual dan risiko. Pakai untuk menjaga register tetap akurat, mendorong pembaruan dengan memperhatikan fokus orang, dan mendukung respons perangkat hilang.

**10. Jadikan pembuangan aman sebagai proses yang terdefinisi.** Ikuti standar yang diakui untuk membersihkan media, seperti panduan yang diterbitkan National Institute of Standards and Technology Amerika Serikat, atau padanannya di yurisdiksi Anda. Catat metode, tanggal, dan bukti untuk tiap perangkat, dan pakai mitra bersertifikat untuk penghancuran dan daur ulang. Langkah pembuangan tanpa bukti adalah celah.

**11. Utamakan pemakaian ulang, lalu daur ulang.** Di mana perangkat masih berfungsi, tempatkan ulang secara internal, donasikan lewat mitra yang disetujui, atau jual kembali setelah dihapus. Pakai pendaur ulang bersertifikat untuk sisanya. Ukur porsi perangkat pensiun yang pergi ke tiap saluran dan alasan untuk yang langsung menjadi sampah. Regulasi sampah elektronik bervariasi menurut yurisdiksi dan ditegakkan, jadi libatkan rekan hukum dan keberlanjutan Anda.

**12. Tinjau siklus hidup bersama orang yang memakainya.** Sekali per kuartal, kumpulkan keuangan, keamanan, pengadaan, service desk, dan beberapa pengguna untuk melihat usia, kegagalan, lead time, dan pembuangan. Tanyakan apa yang berfungsi dan apa yang menjengkelkan orang. Ini kolaborasi berkelanjutan di sekitar lingkungan kerja, dan menjaga rencana tetap realistis.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Profil usia | Mengganti perangkat sehat untuk menurunkan rata-rata; mengecualikan perangkat tua dengan mengklasifikasi ulang sebagai cadangan | Tingkat kegagalan menurut pita usia; porsi perangkat menganggur; tinjauan klasifikasi ulang |
| Tingkat penyegaran tepat waktu | Melebarkan jendela terencana; menunda tanggal terencana dengan mengedit rencana | Perubahan rencana dicatat dengan alasan; bandingkan dengan kegagalan dan umpan balik pengguna |
| Tingkat kegagalan menurut model | Mengodekan kegagalan sebagai kerusakan pengguna atau kerusakan perangkat lunak; menunda catatan perbaikan | Ambil sampel pengodean kegagalan; bandingkan catatan perbaikan dengan catatan insiden |
| Porsi perangkat menganggur | Menghitung aktivitas latar terjadwal sebagai pemakaian; menetapkan ulang perangkat menganggur ke pengguna hantu | Pakai masuk manusia sebagai sinyal aktivitas; periksa sampel penugasan |
| Lead time penggantian | Menghentikan jam saat pengiriman; menutup permintaan sebelum pengguna punya perangkat berfungsi | Jam berakhir pada konfirmasi pengguna; survei penggantian terbaru |
| Penyelesaian pembuangan aman | Mencatat penghapusan tanpa bukti; sertifikat tak dicocokkan dengan nomor seri | Cocokkan sertifikat dengan nomor seri; audit sampel bersama mitra pembuangan |
| Tingkat pemakaian ulang dan daur ulang | Menghitung perangkat yang dikirim ke pialang dengan penanganan hilir tak diketahui sebagai didaur ulang | Wajibkan mitra bersertifikat dan pelaporan hilir; audit sampel |

Pembacaan yang sehat adalah profil usia dengan ekor tua yang tipis, tingkat kegagalan yang memandu pembelian, waktu penggantian yang singkat, bukti pembuangan yang lengkap, dan porsi peralatan yang menjadi sampah yang menurun.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Penyegaran siklus tetap | Anggaran terprediksi dan aturan sederhana | Mengganti perangkat yang baik-baik saja; menciptakan puncak pekerjaan besar |
| Penyegaran berkelanjutan dalam batch | Biaya dan beban kerja mulus; belajar di antara batch | Butuh data baik dan disiplin |
| Jalankan sampai gagal | Biaya pembelian terendah | Mengganggu orang; biaya tak terencana; risiko keamanan sistem tua |
| Masa pakai terencana pendek | Lebih baru, lebih cepat, lebih baik didukung | Biaya lebih tinggi dan lebih banyak sampah |
| Masa pakai terencana panjang | Biaya lebih rendah dan lebih sedikit sampah | Lebih banyak kegagalan dan paparan keamanan di ekor |
| Perbaikan dan pemakaian ulang internal | Menjaga perangkat tetap dipakai; sampah lebih sedikit | Butuh keterampilan dan suku cadang |
| Pembuangan dialihdayakan | Penanganan spesialis | Butuh pengawasan rantai hilir |

Jawaban prosanya adalah menyegarkan terus-menerus dalam batch kecil, berdasarkan usia, kegagalan, dan kebutuhan, memperbaiki dan memakai ulang di mana melayani orang, dan menahan rantai pembuangan pada standar yang dapat Anda buktikan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Seperti apa gambaran usia dan kegagalan perangkat kita, dan siapa yang memegang yang tertua?**
Tunjukkan distribusi usia dan tingkat kegagalan menurut pita. Lihat siapa yang memegang perangkat tertua dan apakah mereka orang yang paling butuh peralatan andal. Fasilitator sebaiknya bertanya apa yang akan diubah tim pada urutan penyegaran berdasarkan gambaran itu.

**2. Berapa lama seseorang mendapat perangkat berfungsi setelah miliknya rusak?**
Telusuri tiga penggantian terakhir dari laporan sampai perangkat berfungsi. Catat penantiannya. Tanyakan langkah mana yang dapat dihapus atau diotomatisasi. Sepakati satu perubahan dan cara mengukur efeknya.

**3. Model mana yang paling merepotkan kita, dan bagaimana kita tahu?**
Daftar model dengan tingkat kegagalan atau tiket tertinggi. Periksa apakah sampel cukup besar untuk dinilai. Tanyakan bagaimana temuan memengaruhi pembelian berikutnya. Jika tidak, putuskan cara menyuapkannya kembali ke pengadaan.

**4. Apa yang akan kita lakukan jika perangkat pensiun muncul dengan data di dalamnya?**
Telusuri jalur pembuangan dan bukti yang disimpan di tiap langkah. Tanyakan di mana mata rantai terlemah dan siapa yang memverifikasi mitra hilir. Sepakati pemeriksaan sampel bukti pembuangan untuk kuartal berikutnya.

**5. Di mana peralatan kita menganggur, dan mengapa?**
Lihat perangkat tanpa pemakaian dalam 60 hari dan cadangan. Tanyakan apakah sebaiknya ditetapkan ulang, dipensiunkan, atau dipertahankan. Percakapan juga mengungkap ketidakcocokan antara apa yang dikeluarkan untuk orang dan apa yang mereka butuhkan.

**6. Apa yang dibutuhkan untuk memakai ulang atau memperbaiki lebih banyak dari yang kita pensiunkan?**
Daftar hambatannya: keterampilan, suku cadang, kebijakan, atau mitra. Tanyakan seperti apa percontohan dengan satu kelas perangkat dan bagaimana diukur. Sertakan perspektif keberlanjutan dan keuangan.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman bergantung pada mesin dan perangkat uji yang andal, dan merasakan build lambat dan laptop rusak secara langsung. Mereka sebaiknya menandai peralatan yang memperlambat mereka, ikut memilih model untuk peran mereka, dan mengharapkan jalur penggantian cepat. Tim yang menguji pada perangkat fisik, seperti ponsel, sebaiknya memperlakukan perangkat itu sebagai aset dengan pemilik dan rencana penyegaran.

### Tim layanan dan operasi

Tim operasi menjalankan rantai pasok: membeli, menerima, membuat citra, men-deploy, memperbaiki, dan membuang. Mereka sebaiknya menjaga catatan tetap terkini, mengawasi pola kegagalan, memegang kolam cadangan yang masuk akal, dan menyimpan bukti pembuangan. Mereka memikul pekerjaan fisik, dan kapasitas mereka membatasi seberapa cepat penyegaran dapat berjalan.

### Kepemimpinan dan tata kelola

Pemimpin menginginkan biaya terprediksi, risiko rendah, dan kisah keberlanjutan. Mereka sebaiknya mendanai penyegaran yang mantap, meminta data usia dan kegagalan sebagai ganti rata-rata usia polos, dan mewajibkan bukti pembuangan. Tata kelola sebaiknya memeriksa bahwa kewajiban lingkungan dan perlindungan data terpenuhi dan bahwa rencana ditinjau kembali seiring kondisi berubah.

### Pelanggan dan pengguna

Pengguna ingin perangkat yang berfungsi, diganti cepat ketika tidak. Mereka juga memiliki sebagian hasil: melaporkan masalah lebih awal, mengembalikan peralatan, dan memberi tahu TI ketika mereka pindah. Pandangan mereka tentang peralatan dan proses penggantian adalah umpan balik paling langsung yang tersedia. Libatkan mereka dalam memilih model untuk pekerjaan mereka.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah pemerintah kabupaten mendukung 3.800 staf di 40 situs, dengan campuran perangkat kantor, lapangan, dan bersama. Angka di bawah bersifat ilustratif.

Setiap empat tahun kabupaten mengganti semua laptop dalam satu pengadaan, dan siklus terakhir berakhir dengan lonjakan kegagalan pada tahun sebelum penggantian dan berbulan-bulan pekerjaan pembuatan citra pada tahun penggantian. Manajer aset mengusulkan penyegaran yang mantap dan membangun gambaran dari register dan catatan perbaikan. Median usia laptop adalah 3,2 tahun dan persentil ke-85 adalah 5,1 tahun. Kegagalan per 100 laptop per tahun naik dari sekitar 6 untuk perangkat di bawah tiga tahun menjadi sekitar 19 untuk perangkat di atas lima tahun. Satu model yang dibeli dalam satu batch menunjukkan 24 kegagalan per 100 per tahun pada usia dua tahun, disebabkan cacat baterai. Median lead time penggantian adalah 5 hari, dengan persentil ke-85 sebesar 12 hari, sebagian besar menunggu pembuatan citra. Porsi perangkat menganggur adalah 7 persen, sebagian besar cadangan dan perangkat staf yang cuti panjang. Dari 410 laptop yang dipensiunkan tahun lalu, 366 punya sertifikat penghapusan tercatat, tingkat penyelesaian 89 persen, dan 12 persen pergi ke pendaur ulang tanpa pelaporan hilir.

Tim membuat empat perubahan. Ia beralih ke penyegaran kuartalan sekitar 6 persen laptop, diurutkan menurut usia dan riwayat kegagalan, dengan staf lapangan dan perangkat tertua lebih dulu. Ia bernegosiasi dengan pemasok untuk batch cacat di bawah garansi. Ia memegang kolam cadangan 2 persen aset, dimuat lebih dulu dengan citra standar, yang memangkas penantian pembuatan citra. Ia mewajibkan sertifikat yang dicocokkan dengan nomor seri untuk setiap perangkat yang dibuang, dan pindah ke pendaur ulang yang melaporkan penanganan hilir. Ia juga memulai percontohan kecil untuk merekondisi dan menempatkan ulang perangkat di bawah empat tahun.

Dua kuartal kemudian lead time penggantian persentil ke-85 adalah 4 hari, porsi perangkat di atas lima tahun turun dari 22 persen menjadi 13 persen, penyelesaian bukti pembuangan adalah 99 persen, dan tingkat pemakaian ulang dan daur ulang lewat saluran yang disetujui adalah 94 persen. Kantor keuangan meminta satu target untuk rata-rata usia perangkat, dan manajer aset mengusulkan melacak profil usia dan tingkat kegagalan bersama, menjelaskan bahwa rata-rata usia rendah dapat dibeli dengan mengganti perangkat sehat. Keputusan dicatat dalam log keputusan, dengan tinjauan enam bulan lagi.

## Sudut pandang sektor

**Startup.** Perangkat dibeli sesuai kebutuhan dan sering oleh orang yang akan memakainya. Simpan daftar sederhana dengan tanggal pembelian, hapus perangkat saat keluar, dan hindari membeli berlebihan. Pakai alat pendaftaran terkelola sejak dini, karena lebih murah daripada memasang belakangan.

**Bisnis kecil.** Biaya perangkat yang gagal jatuh pada beberapa orang. Simpan satu atau dua cadangan, catat tanggal garansi, dan punya rutinitas untuk menghapus dan membuang. Pendaur ulang dan perekondisi lokal dapat menjadi mitra baik. Daftar periksa pembuangan tiga baris mengalahkan tidak ada.

**Perusahaan besar.** Skala membuat perilaku batch dan manajemen pemasok penting. Pakai data kegagalan untuk bernegosiasi dengan pemasok, standarkan beberapa model per kelas, dan jalankan penyegaran berkelanjutan dengan dukungan logistik. Selaraskan dengan pelaporan keberlanjutan, karena perangkat keras sering mendominasi jejak TI.

**Pemerintah dan sektor publik.** Aturan pengadaan, retensi catatan, dan perlindungan data yang ketat membentuk siklus hidup. Dokumentasikan pembersihan menurut standar yang diakui, simpan bukti pembuangan selama periode yang diwajibkan, dan pertimbangkan komitmen publik tentang keberlanjutan dan perbaikan. Badan publik mungkin diwajibkan melaporkan sampah elektronik (lihat topik 8.3, Metrik kepatuhan dan audit).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah upaya menggabungkan data register, perbaikan, dan endpoint; sebagian perkakas manajemen perangkat bila belum ada; kolam cadangan; dan pekerjaan proses pembuangan dengan bukti. Penghematan dan manfaat muncul dalam lebih sedikit kegagalan yang mengganggu, anggaran yang lebih mulus, lebih sedikit peralatan terbuang, dan risiko insiden data yang lebih rendah.

Bangun kasus dari data Anda sendiri. Bandingkan biaya menjalankan perangkat melewati masa pakai terencananya, termasuk upaya dukungan dan waktu kerja hilang per kegagalan, dengan biaya menggantinya lebih awal. Bandingkan biaya kolam cadangan dengan hari kerja hilang yang dihemat per kegagalan. Hitung jumlah perangkat pensiun tanpa bukti penghapusan, dan biaya satu insiden data yang akan menyusul. Hindari mengutip umur perangkat rata-rata atau angka sampah elektronik dari sumber terbitan tanpa memeriksa metode dan tanggalnya. Total biaya kepemilikan menyatukan bagian-bagian ini (lihat topik 7.5, Biaya layanan dan ekonomi per unit), dan [total biaya kepemilikan](https://en.wikipedia.org/wiki/Total_cost_of_ownership) penuh perangkat mencakup pembelian, dukungan, energi, gangguan, dan pembuangan.

## Anti-pola dan jebakan

- **Mengganti semuanya menurut kalender.** Itu membuang perangkat yang berfungsi dan menciptakan lonjakan beban kerja. Pakai usia, kegagalan, dan kebutuhan.
- **Menjalankan sampai gagal.** Biaya tak terencana dan gangguan melampaui penghematan. Awasi ekor usia.
- **Memakai rata-rata usia sebagai target.** Dapat dipenuhi dengan mengganti perangkat sehat. Tampilkan profil dan tingkat kegagalan.
- **Memercayai angka keandalan produsen.** Pemakaian Anda berbeda. Pakai data kegagalan Anda sendiri.
- **Membuang tanpa bukti.** Penghapusan yang tak tercatat adalah risiko yang tak dapat Anda tunjukkan telah dikelola.
- **Mengirim perangkat ke pendaur ulang termurah.** Penanganan hilir penting. Pakai mitra bersertifikat.
- **Melacak orang lewat perangkatnya.** Laporkan menurut kelas dan kelompok, dan tidak pernah menurut individu.
- **Mengabaikan perbaikan dan pemakaian ulang.** Menjaga peralatan beroperasi lebih murah dan lebih ramah lingkungan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Perencanaan | Beli ketika rusak | Penyegaran berkala menurut kalender | Masa pakai terencana per kelas; penyegaran mantap dalam batch | Penyegaran diwaktukan menurut usia, kegagalan, dan kebutuhan; cadangan ditentukan dari data | Penyegaran dikoordinasikan dengan pemasok, keuangan, dan tujuan keberlanjutan lintas situs |
| Belajar dari data | Tak ada catatan kegagalan | Catatan perbaikan disimpan | Tingkat kegagalan menurut model dan usia dilacak | Temuan mengubah pembelian dan waktu; lead time dikelola | Data kegagalan dan pemakaian dibagikan dengan pemasok untuk memperbaiki desain dan syarat |
| Keluar | Perangkat lenyap | Penghapusan informal | Proses pembuangan dengan bukti untuk setiap perangkat | Bukti diaudit; pemakaian ulang dan daur ulang dilacak | Praktik sirkular dengan mitra bersertifikat dan pelaporan publik |

## Daftar periksa

- [ ] Kelas perangkat dan masa pakai terencana didefinisikan, dengan alasan dicatat.
- [ ] Rencana penyegaran yang mantap ada dan ditinjau bersama keuangan.
- [ ] Profil usia, tingkat kegagalan menurut model, dan lead time penggantian dilaporkan.
- [ ] Kolam cadangan ditentukan ukurannya dari data kegagalan dan perekrutan.
- [ ] Perangkat menganggur diidentifikasi menurut kelas, dengan aturan privasi berlaku.
- [ ] Klaim garansi dan perbaikan dicatat dan dipakai dalam keputusan pembelian.
- [ ] Setiap perangkat pensiun punya metode pembersihan dan bukti tercatat.
- [ ] Mitra pembuangan bersertifikat dan melaporkan penanganan hilir.
- [ ] Tingkat pemakaian ulang dan daur ulang dilacak.
- [ ] Tinjauan kuartalan mencakup keuangan, keamanan, pengadaan, service desk, dan pengguna.

## Prompt AI

**Analisis data kegagalan menurut model dan usia.**

```text
Berikut ringkasan kegagalan perangkat keras untuk [device class] selama [period]:
model, jumlah beroperasi, pita usia, dan jumlah kegagalan: [paste table].
Gambarkan pola menurut model dan usia, tandai batch atau model yang tampak tak
biasa, katakan di mana sampel terlalu kecil untuk dinilai, dan sarankan apa yang
diperiksa berikutnya. Jangan menerapkan angka produsen atau mengarang nilai
acuan. Daftar asumsi Anda.
```

**Rancang rencana penyegaran berkelanjutan.**

```text
Kami punya [number] perangkat dalam kelas ini: [list with age profile]. Data
kegagalan dan perbaikan: [summary]. Kendala anggaran: [summary]. Usulkan rencana
penyegaran kuartalan yang mengganti porsi mantap, mengurutkan penggantian menurut
usia, riwayat kegagalan, dan kebutuhan pengguna, dan menjaga kolam cadangan.
Jelaskan pertukarannya terhadap penyegaran siklus tetap dan apa yang diukur.
Jangan mengarang harga. Daftar asumsi Anda.
```

**Tinjau proses pembuangan.**

```text
Proses pembuangan kami untuk [device types] yang dipensiunkan adalah: [describe
steps, partners, and records]. Tinjau untuk celah dalam pembersihan data, bukti,
rantai penguasaan, dan penanganan lingkungan, dan sarankan perbaikan dan
pemeriksaan sampel. Sebutkan bahwa persyaratan bervariasi menurut yurisdiksi dan
sebaiknya diperiksa bersama spesialis hukum dan keamanan. Jangan memberi
kesimpulan hukum. Daftar asumsi Anda.
```

**Kurangi lead time penggantian.**

```text
Mengganti perangkat yang gagal saat ini memakan langkah dan penantian tipikal
ini: [list]. Identifikasi langkah paling lambat, sarankan perubahan (misalnya
cadangan yang dimuat lebih dulu, pendaftaran jarak jauh, atau persetujuan yang
disederhanakan), dan gambarkan cara mengukur efek pada median dan persentil ke-85.
Jangan mengasumsikan perkakas yang belum kami uraikan. Daftar asumsi Anda dan
risiko.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik siklus hidup perangkat keras.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik perangkat keras membawa vektor manipulasi, pagar pembatas, dan aturan buktinya.

## Poin penting

- Segarkan porsi perangkat yang mantap secara berkelanjutan, memakai data usia, kegagalan, dan pemakaian Anda sendiri.
- Lihat distribusi usia dan kegagalan menurut model, bukan rata-rata.
- Jaga penggantian cepat dengan kolam cadangan dan jalur pendek yang terukur.
- Perlakukan pembuangan aman dengan bukti sebagai akhir siklus hidup, dan utamakan perbaikan, pemakaian ulang, dan daur ulang bersertifikat.
- Laporkan menurut kelas perangkat dan kelompok, dan jangan pernah melacak individu lewat peralatannya.
- Tinjau siklus hidup bersama keuangan, keamanan, pengadaan, dan pengguna sekaligus.

## Referensi dan bacaan lanjutan

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
