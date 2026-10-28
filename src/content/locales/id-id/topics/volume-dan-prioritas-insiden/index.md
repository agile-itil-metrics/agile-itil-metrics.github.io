# Volume dan prioritas insiden

**Hitung insiden terhadap pemakaian yang menghasilkannya, baca prioritas sebagai campuran dan bukan skor, dan awasi pengulangan, karena bentuk permintaan insiden memberi tahu Anda di mana berinvestasi jauh sebelum waktu penyelesaian tunggal mana pun.**

## Gambaran umum dan motivasi

Insiden, dalam istilah [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, adalah gangguan tak terencana pada layanan atau penurunan mutunya. [Manajemen insiden](https://en.wikipedia.org/wiki/Incident_management) adalah praktik yang memulihkan operasi layanan normal secepat yang praktis dan membatasi kerugian bagi bisnis. Setiap insiden juga sebuah sinyal: sesuatu dalam layanan, perubahannya, penggunanya, atau pemantauannya tidak bekerja seperti yang diharapkan. Hitungan dan sifat insiden karena itu adalah salah satu ukuran permintaan paling informatif yang dimiliki tim operasi.

Volume saja adalah panduan yang buruk. Kenaikan insiden dapat berarti layanan memburuk, atau lebih banyak orang memakainya, atau pemantauan membaik dan kini melihat kerusakan yang dulu tak dilaporkan. Penurunan dapat berarti pekerjaan keandalan membuahkan hasil, atau pengguna berhenti repot melapor. Topik ini tentang membaca volume dengan konteks cukup untuk membedakan cerita-cerita itu: menormalkan terhadap pemakaian, memecah menurut kategori dan layanan, dan mengawasi campuran prioritas dan laju pengulangan.

Prioritas adalah separuh kedua topik. Praktik ITIL lazim menurunkan prioritas dari dua masukan: dampak (seberapa banyak bisnis terpengaruh) dan urgensi (seberapa cepat bisnis butuh perbaikan). Pasangan itu dipetakan ke tingkat prioritas yang menetapkan respons yang diharapkan. Tim agile punya padanan dekat dalam cara mereka mentriase backlog: label keparahan dan urgensi pada cacat, dan “kelas layanan” pada papan alur yang memutuskan apa yang menyalip antrean. Katanya berbeda; pertanyaannya sama: apa yang harus ditangani lebih dulu, dan mengapa.

Pandangan ITIL memperlakukan insiden sebagai catatan yang dimiliki service desk dan kelompok penyelesai, dengan kategori, prioritas, dan target tingkat layanan. Pandangan agile memperlakukan pekerjaan tak terencana sebagai interupsi terhadap alur yang bersaing dengan pekerjaan terencana (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana). Kedua pandangan diuntungkan oleh ukuran yang sama, bila ukuran itu menggambarkan sistem dan bukan orang di dalamnya. [Service desk](https://en.wikipedia.org/wiki/Help_desk_software) adalah tempat sebagian besar catatan bermula, dan metriknya sendiri dibahas terpisah (lihat topik 3.1, Metrik service desk). Seberapa cepat insiden direspons dan diselesaikan dibahas dalam topik 3.3, Waktu respons dan penyelesaian insiden. Insiden besar punya ukurannya sendiri (lihat topik 3.4, Metrik insiden besar).

Beberapa istilah berulang di bawah. **Persentil** adalah nilai yang di bawahnya jatuh porsi pengamatan yang dinyatakan, sehingga persentil ke-85 adalah nilai yang tidak dilampaui 85 persen pengamatan. **Perjanjian tingkat layanan (SLA)** adalah komitmen terdokumentasi antara penyedia dan pelanggan. **Item konfigurasi (CI)** adalah komponen yang perlu dikelola untuk menyampaikan layanan. **Proses Poisson** menggambarkan peristiwa yang tiba secara independen pada laju rata-rata tertentu, yang merupakan model pertama yang berguna untuk kedatangan insiden (lihat topik 1.6, Literasi statistik untuk metrik layanan).

Peringatan dari topik 1.2 (Hukum Goodhart dan psikologi metrik) berlaku di sini lebih daripada kebanyakan tempat. Hitungan insiden dan prioritas dimasukkan oleh orang, sering di bawah tekanan, dan angka yang menempel pada catatan dapat diubah dengan mengubah cara catatan itu ditulis. Setiap metrik di bawah punya vektor manipulasi, dan pagar pembatas adalah bagian definisi.

## Prinsip utama

- **Normalkan sebelum membandingkan.** Hitungan tak banyak berarti tanpa pemakaian, basis pengguna, atau volume transaksi yang menghasilkannya. Bandingkan tingkat antarperiode dan layanan, dan tampilkan hitungan mentah di sampingnya.
- **Baca campuran, bukan satu angka.** Distribusi prioritas, distribusi kategori, dan porsi pengulangan berkata lebih banyak bersama daripada total mana pun.
- **Prioritas adalah aturan, bukan suasana hati.** Turunkan dari dampak dan urgensi memakai matriks tertulis, dan ukur seberapa sering diubah setelah kejadian.
- **Pisahkan insiden dari permintaan.** Permintaan untuk sesuatu yang normal bukan kerusakan. Menghitung keduanya bersama menggelembungkan volume insiden dan menyembunyikan apa yang dihabiskan service desk waktunya (lihat topik 3.5, Metrik pemenuhan permintaan layanan).
- **Pengulangan adalah sinyal paling berharga.** Insiden yang kembali menunjuk pada masalah yang belum terselesaikan (lihat topik 4.1, Metrik manajemen masalah).
- **Ukur layanan dan tim, bukan agen.** Hitungan menurut orang mengundang peringkat, dan peringkat merusak data (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).
- **Harapkan volume bergerak karena sebab yang bukan kualitas.** Rilis, musim, kampanye, dan perubahan saluran pelaporan semuanya menggeser hitungan. Beri catatan pada bagan.

## Definisi metrik

Tabel mendaftar metrik dalam topik ini. Jam dan batas dinyatakan di kolom rumus. “Ditutup” dan “dibuka” merujuk pada stempel waktu dalam catatan insiden; waktu pembukaan adalah saat catatan dibuat atau saat sistem pemantauan membuatnya, dan waktu penutupan adalah saat insiden dikonfirmasi diselesaikan dan ditutup.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume insiden menurut layanan | Hitungan insiden yang dibuka untuk satu layanan dalam satu periode | insiden dengan waktu pembukaan di dalam periode, diatribusikan ke layanan yang terdampak; permintaan layanan, duplikat yang digabung ke catatan induk, dan catatan yang dibatalkan karena salah dibuat dikecualikan | hitungan | Catatan insiden alat ITSM | Manajemen insiden | Cacat produksi atau item kerja tak terencana per tim | Mingguan, ditinjau bulanan |
| Tingkat insiden ternormalisasi | Insiden relatif terhadap pemakaian layanan | insiden yang dibuka pada periode itu / ukuran pemakaian untuk periode dan lingkup yang sama (pengguna aktif, sesi, atau transaksi, dipilih dan dicatat per layanan) x 1.000; ukuran pemakaian harus berasal dari sumber selain alat insiden | insiden per 1.000 satuan pemakaian | Alat ITSM ditambah data pemakaian dari analitik atau pemantauan | Manajemen insiden; manajemen tingkat layanan | Kepadatan cacat per rilis atau per pengguna | Bulanan |
| Campuran prioritas | Porsi insiden yang dibuka pada tiap tingkat prioritas | insiden pada prioritas yang tercatat saat pembukaan / semua insiden yang dibuka pada periode itu, ditampilkan untuk tiap tingkat; insiden yang diklasifikasi ulang dihitung pada prioritas pembukaan dan ditampilkan lagi pada prioritas penutupan | persen menurut tingkat | Alat ITSM, termasuk riwayat perubahan prioritas | Manajemen insiden | Distribusi keparahan cacat; campuran kelas layanan | Bulanan |
| Tingkat klasifikasi ulang prioritas | Porsi insiden yang prioritasnya berubah antara pembukaan dan penutupan | insiden yang ditutup pada periode itu dan prioritas penutupannya berbeda dari prioritas pembukaan / insiden yang ditutup pada periode itu | persen | Jejak audit alat ITSM | Manajemen insiden | Tingkat triase ulang pada backlog cacat | Bulanan |
| Konsentrasi kategori | Porsi volume insiden yang dipegang kategori terbesar | insiden pada lima kategori teratas menurut hitungan / semua insiden terkategori pada periode itu; insiden tak terkategori dilaporkan terpisah sebagai porsinya sendiri | persen | Kolom kategori dan layanan alat ITSM | Manajemen insiden; manajemen masalah | Gugus cacat menurut komponen atau epik | Bulanan |
| Tingkat insiden berulang | Porsi insiden yang kambuh untuk layanan, item konfigurasi, dan kategori yang sama dalam jendela yang dinyatakan | insiden pada periode itu dengan insiden tertutup sebelumnya untuk layanan, CI, dan kategori yang sama dalam jendela sebelumnya (misalnya 30 hari, ditetapkan sekali dan dicatat) / insiden yang dibuka pada periode itu; catatan yang dibuka ulang dihitung sebagai pembukaan ulang, bukan pengulangan | persen | Alat ITSM dan tautan CMDB | Manajemen insiden; manajemen masalah | Tingkat regresi atau cacat yang lolos | Bulanan |
| Tingkat pembukaan ulang | Porsi insiden tertutup yang dibuka kembali | insiden yang ditutup pada periode itu dan kemudian dibuka kembali dalam jendela yang dinyatakan (misalnya 7 hari) / insiden yang ditutup pada periode itu | persen | Riwayat status alat ITSM | Manajemen insiden | Cacat yang dibuka ulang; pengerjaan ulang | Bulanan |
| Porsi terdeteksi pemantauan | Porsi insiden yang pertama kali diangkat pemantauan sebelum pengguna melapor | insiden yang peristiwa pertamanya adalah peringatan otomatis / semua insiden yang dibuka pada periode itu; insiden yang dibuka orang dari sebuah peringatan dihitung menurut waktu peringatan | persen | Alat ITSM, integrasi pemantauan | Manajemen pemantauan dan peristiwa; manajemen insiden | Cacat berbasis peringatan versus yang dilaporkan pelanggan | Bulanan |

Dua catatan atas definisi. Pertama, “prioritas” dalam tabel ini adalah prioritas yang dibawa catatan, yang seharusnya berasal dari matriks dampak dan urgensi dan bukan dari urutan yang diinginkan orang untuk pekerjaan. Kedua, volume yang dilaporkan untuk satu periode adalah hitungan pembukaan, bukan hitungan insiden terbuka pada hari tertentu. Hitungan terbuka pada saat mana pun adalah ukuran backlog dan milik penuaan (lihat topik 3.3, Waktu respons dan penyelesaian insiden).

## Rekomendasi

### Hitung dengan cermat

**1. Tulis apa itu insiden dan apa yang bukan.** Banyak alat menyimpan insiden, permintaan, peringatan, dan masalah dalam satu tabel. Putuskan jenis catatan mana yang dihitung, dokumentasikan filternya, dan terapkan setiap kali. Perubahan filter mengubah tren, jadi catat perubahan dengan tanggal dan alasannya (lihat topik 1.5, Sumber data dan instrumentasi).

**2. Hilangkan duplikat sebelum melaporkan.** Ketika satu kerusakan menghasilkan lima puluh tiket, insiden induk adalah peristiwanya dan anak-anaknya adalah ukuran jangkauannya. Laporkan kedua angka: insiden induk untuk berapa banyak kerusakan terjadi, dan catatan tertaut untuk berapa banyak orang merasakannya. Mencampur keduanya membuat satu gangguan besar tampak seperti sebulan pekerjaan rutin.

**3. Atribusikan insiden ke layanan selain tim.** Layanan adalah hal yang dibeli dan dipahami bisnis. Pakai katalog layanan (“service catalogue” dalam ejaan ITIL) untuk mendefinisikan daftar, dan tinjau pemetaan dari CI ketika layanan berubah. Insiden tanpa layanan adalah masalah kualitas data untuk diperbaiki, dan porsi catatan semacam itu layak dilaporkan.

### Normalkan dan tafsirkan volume

**4. Normalkan terhadap ukuran pemakaian dari sumber yang berbeda.** Bagi dengan pengguna aktif, sesi, atau transaksi, diambil dari analitik atau pemantauan dan bukan dari alat insiden. Layanan yang penggunanya dan insidennya berlipat dua tidak jadi lebih buruk; layanan yang insidennya berlipat dua dengan pemakaian datar memang demikian. Tampilkan hitungan mentah di samping tingkat agar tak seorang pun percaya penyebut menyembunyikan sesuatu.

**5. Pakai bagan kendali, bukan panah tren.** Hitungan insiden bervariasi dari pekan ke pekan bahkan ketika tak ada yang berubah. [Bagan kendali](https://en.wikipedia.org/wiki/Control_chart) menunjukkan rentang variasi biasa, sehingga tim bereaksi pada sinyal dan membiarkan kebisingan. Hitungan mingguan yang bergerak di dalam batas bukan berita; deretan berkelanjutan di satu sisi rata-rata adalah. Sesuaikan untuk [musiman](https://en.wikipedia.org/wiki/Seasonality) seperti akhir kuartal, libur, dan siklus rilis dengan membandingkan periode sejenis.

**6. Beri catatan pada bagan dengan peristiwa.** Tandai rilis, migrasi, kampanye, gangguan ketergantungan, dan perubahan pada saluran pelaporan. Formulir swalayan baru atau tombol “laporkan masalah” yang lebih terlihat dapat menaikkan volume sementara layanan tetap sama. Kebanyakan perdebatan volume berakhir cepat ketika bagan menunjukkan apa yang terjadi pekan itu.

### Kelola prioritas dengan aturan

**7. Turunkan prioritas dari dampak dan urgensi dengan matriks yang diterbitkan.** Definisikan dampak dalam istilah pengguna dan fungsi bisnis yang terpengaruh, dan urgensi dalam istilah seberapa cepat kerugian tumbuh. Terbitkan matriks pada halaman tempat agen memilih nilai, dengan dua atau tiga contoh kerja per sel. Hindari kolom prioritas pilihan bebas; itu berubah menjadi negosiasi, dan hitungan insiden “prioritas 1” menjadi ukuran bujukan.

**8. Laporkan campuran dan tingkat klasifikasi ulang bersama.** Campuran yang sehat memiliki sedikit insiden prioritas tertinggi dan dasar luas yang lebih rendah. Jika tingkat teratas tumbuh, tanyakan apakah kerugian tumbuh atau pelanggan belajar bahwa “kritis” mendapat perhatian. Tingkat klasifikasi ulang menunjukkan seberapa cocok matriks: perubahan sering saat penutupan berarti aturan tidak jelas atau penilaian pertama terburu-buru. Tinjau sampel catatan yang diklasifikasi ulang setiap bulan dalam kelompok yang memiliki matriks.

**9. Jaga prioritas dan kelas layanan agile tetap selaras.** Di mana tim pengiriman menerima pekerjaan berbasis insiden, pakai kata dan matriks yang sama, atau terbitkan pemetaan yang jelas. Tim yang menyebut cacat “tinggi” sementara operasi menyebut cacat yang sama “sedang” akan kehilangan waktu pada penerjemahan. Sisihkan tunjangan eksplisit untuk pekerjaan ekspedit agar interupsi terlihat dalam ukuran alur (lihat topik 2.1, Ukuran alur).

### Cari pengulangan dan pola

**10. Lacak pengulangan dan pembukaan ulang sebagai sinyal terpisah.** Pembukaan ulang berarti perbaikan pertama tidak bertahan; pengulangan berarti jenis kerusakan yang sama kembali setelah perbaikan yang layak. Yang pertama menunjuk pada mutu penyelesaian dan yang kedua pada sebab yang belum terselesaikan. Tautkan gugus berulang ke catatan masalah, dan berhenti menghitung insiden sebagai diperbaiki ketika kemungkinan akan kembali (lihat topik 4.1, Metrik manajemen masalah).

**11. Pakai [prinsip Pareto](https://en.wikipedia.org/wiki/Pareto_principle) untuk memilih tempat melihat.** Urutkan kategori dan layanan menurut hitungan insiden dan lihat betapa sedikit yang menyumbang sebagian besar volume. Selidiki beberapa teratas sebelum membangun laporan baru untuk sisanya. Bentuknya adalah dorongan untuk [analisis akar masalah](https://en.wikipedia.org/wiki/Root_cause_analysis), bukan kesimpulan, karena kategori berhitungan tinggi mungkin sekadar yang mudah dikategorikan.

**12. Umpan balikkan temuan kepada pengiriman dan service desk.** Bagikan tampilan kategori dan pengulangan kepada tim yang membangun dan mengubah layanan, dalam percakapan reguler alih-alih laporan. Pasangkan setiap gugus berulang dengan pemilik, langkah berikutnya, dan tanggal, dan taruh pekerjaan di backlog yang sama dengan prioritas lain (lihat topik 2.6, Metrik backlog dan penyempurnaan). Volume turun ketika sebab disingkirkan, dan itu butuh kapasitas terencana.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Volume insiden menurut layanan | Mencatat insiden sebagai permintaan, menggabung tiket tak berkaitan, mengecilkan hati pengguna melapor, atau menutup duplikat sebagai “tidak ada kerusakan ditemukan” | Volume kontak yang dilaporkan pengguna dan volume permintaan di samping volume insiden; kepuasan dan pembatalan dari service desk; sampel permintaan yang terbaca seperti kerusakan |
| Tingkat insiden ternormalisasi | Memilih penyebut yang memberi angka terbaik, atau mengubah definisi pemakaian antarperiode | Ukuran pemakaian tetap per layanan, dicatat di register; hitungan mentah ditampilkan di samping tingkat |
| Campuran prioritas | Menurunkan prioritas agar tampak tenang atau menaikkannya untuk mendapat perhatian; memberi prioritas rendah untuk menghindari target respons | Tingkat klasifikasi ulang prioritas; tinjauan sampel bulanan terhadap matriks dampak dan urgensi; dampak yang dilaporkan pelanggan |
| Tingkat klasifikasi ulang prioritas | Tidak mengubah prioritas ketika seharusnya, sehingga tingkat tampak stabil; mengubahnya hanya saat penutupan agar sesuai target | Sampel catatan tempat dampak berubah selama insiden; tinjauan lini masa insiden |
| Konsentrasi kategori | Memakai kategori serba ada, atau memecah kategori besar menjadi beberapa untuk menyembunyikan konsentrasi | Porsi catatan tak terkategori dan “lainnya”; tinjauan berkala daftar kategori; pemeriksaan kategori terhadap catatan penyelesaian |
| Tingkat insiden berulang | Membuka insiden baru dengan kata atau CI berbeda untuk menghindari tautan; menutup lebih awal untuk menghindari pembukaan ulang | Tinjauan catatan hampir-duplikat menurut teks dan layanan; tingkat pembukaan ulang; tingkat tautan ke catatan masalah |
| Tingkat pembukaan ulang | Meminta pengguna membuka tiket baru alih-alih membuka kembali; menutup tiket terlambat untuk menghindari pembukaan ulang | Hitungan tiket baru yang merujuk tiket tertutup baru-baru ini; konfirmasi penyelesaian oleh pelanggan; distribusi waktu-ke-penutupan |
| Porsi terdeteksi pemantauan | Membuat peringatan bising yang membuka insiden otomatis, atau membiarkan orang melabeli ulang laporan pengguna sebagai peringatan | Ukuran kualitas peringatan seperti porsi peringatan yang dapat ditindak (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan); audit sumber insiden |

Pembacaan yang sehat membosankan dan dapat dijelaskan. Tingkat ternormalisasi stabil atau menurun untuk layanan stabil dan naik ketika pemakaian atau perubahan naik karena sebab yang ditunjukkan bagan. Campuran prioritas stabil, klasifikasi ulang rendah, dan sedikit kategori mendapat perhatian yang disengaja. Pengulangan dan pembukaan ulang turun setelah pekerjaan masalah terencana, dan pergerakan metrik mana pun punya penjelasan yang dapat diberikan seseorang tanpa mempertahankan angka itu.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Hitungan insiden mentah | Sederhana, mudah dijelaskan, selalu tersedia | Mencampur pemakaian, mutu, dan perilaku pelaporan dalam satu angka |
| Tingkat terhadap pemakaian | Memungkinkan perbandingan adil antarperiode dan layanan | Butuh sumber pemakaian tepercaya; penyebut bisa diperdebatkan |
| Matriks dampak dan urgensi tetap | Prioritas konsisten antartim; dapat diaudit | Bisa terasa kaku; kasus tepi butuh pertimbangan dan jalur untuk menimpa |
| Prioritas pilihan bebas | Cepat dan fleksibel bagi agen berpengalaman | Tak konsisten, terbuka terhadap tekanan, sulit dibandingkan dari waktu ke waktu |
| Pohon kategori rinci | Menunjukkan dari mana permintaan datang | Sulit dipakai di bawah tekanan; orang memilih kecocokan pertama atau “lainnya” |
| Daftar kategori pendek dengan tag | Cepat diterapkan dan konsisten | Kurang rinci; bisa menyembunyikan pola yang butuh analisis teks |
| Tingkat pengulangan menurut CI dan kategori | Menunjuk sebab yang belum terselesaikan | Bergantung pada data CI yang baik; tautan palsu dan yang terlewat sama-sama terjadi |

Terima bahwa tak ada satu ukuran pun yang benar. Pakai hitungan mentah untuk perencanaan kapasitas, tingkat untuk kesehatan, campuran prioritas untuk risiko, dan pengulangan untuk perbaikan, dan tampilkan masing-masing sebagaimana adanya. Jaga daftar kategori cukup pendek agar orang memakainya, dan perbaiki pohon hanya ketika keputusan membutuhkan rincian lebih halus.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa yang dihitung sebagai insiden di sini, dan apakah semua orang menerapkan aturan dengan cara yang sama?**
Ambil sepuluh catatan terbaru dan minta setiap orang melabelinya sebagai insiden, permintaan, atau yang lain. Bandingkan jawaban dan bahas ketidaksepakatan. Fasilitator sebaiknya mencari kebiasaan seperti memperlakukan setiap tiket dari orang senior sebagai insiden, lalu sepakati satu aturan tertulis dengan contoh. Catat tanggalnya agar tren kemudian dapat dibaca dengan benar.

**2. Ketika volume insiden naik kuartal lalu, apa yang kita ketahui tentang pemakaian dan perubahan pada saat itu?**
Taruh bagan di samping lini masa rilis, kampanye, dan angka pemakaian. Tanyakan kenaikan mana yang terjelaskan dan mana yang tidak. Diskusi cenderung menunjukkan betapa jarang penyebut ada di halaman. Sepakati ukuran pemakaian mana yang dibawa tiap layanan mulai sekarang.

**3. Bagaimana prioritas diputuskan, dan kapan terakhir ia mengejutkan kita?**
Telusuri matriks dampak dan urgensi dengan contoh terbaru dari tiap tingkat prioritas. Tanyakan di mana agen menebak dan di mana pelanggan atau manajer mendesak. Bandingkan prioritas pembukaan dan prioritas penutupan beberapa catatan. Putuskan satu perubahan pada matriks atau contohnya yang mengurangi perdebatan.

**4. Tiga kategori mana yang memakan sebagian besar volume insiden kita, dan siapa yang bekerja menyingkirkan sebabnya?**
Daftar kategori teratas dan, untuk masing-masing, pemilik sebab yang mendasari. Jika jawabannya “tak seorang pun,” itu temuan. Tanyakan apakah kategori itu gugus nyata atau kebiasaan melabeli. Pilih satu gugus untuk diselidiki bersama tim pengiriman kuartal ini.

**5. Bagaimana kita membedakan pengulangan dari pembukaan ulang, dan apa yang kita lakukan tentang masing-masing?**
Tunjukkan kepada tim dua atau tiga pasang catatan dan tanyakan mana yang pengulangan. Bahas apa yang dikatakan pembukaan ulang tentang mutu perbaikan pertama, dan apa yang dikatakan pengulangan tentang sebab. Fasilitator sebaiknya mengarahkan kelompok untuk menautkan gugus berulang ke catatan masalah alih-alih menutupnya satu per satu. Sepakati siapa yang meninjau dan seberapa sering.

**6. Apa yang akan menggoda kita untuk diubah jika hitungan insiden kita ditinjau pimpinan senior setiap pekan?**
Minta kelompok membayangkan angka itu di dinding. Kebiasaan mana yang akan bergeser: cara mencatat, cara menggabung tiket, cara menetapkan prioritas? Namai tekanan itu secara terbuka dan tanpa menyalahkan. Sepakati pagar pembatas mana yang akan menunjukkan pergeseran, dan siapa yang melihatnya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman menerima keluaran topik ini sebagai permintaan. Tampilan kategori dan pengulangan menunjukkan bagian produk mana yang menyebabkan paling banyak masalah, dan campuran prioritas menunjukkan berapa banyak pekerjaan interupsi yang harus direncanakan. Tim sebaiknya memperlakukan pekerjaan berbasis insiden sebagai bagian kapasitas mereka, menjaganya terlihat dalam ukuran alur, dan memakai gugus berulang untuk membenarkan pekerjaan keandalan di backlog (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana). Menghitung insiden per rilis adalah tren yang berguna, meskipun tidak boleh menjadi ukuran menyalahkan pengembang individu.

### Tim layanan dan operasi

Tim layanan dan operasi membuat catatan dan merasakan tekanan seputar prioritas. Mereka diuntungkan oleh matriks yang jelas, daftar kategori pendek, dan cara cepat menautkan duplikat. Mereka sebaiknya memeriksa data di alat mereka sendiri, seperti porsi catatan tak terkategori dan tingkat klasifikasi ulang, sebelum orang lain melakukannya. Tim operasi berada di posisi baik untuk menjalankan tinjauan sampel bulanan dan menyuapi gugus berulang ke manajemen masalah.

### Kepemimpinan dan tata kelola

Pemimpin ingin tahu apakah layanan membaik dan di mana berinvestasi. Mereka sebaiknya meminta tingkat ternormalisasi, campuran prioritas, dan tampilan pengulangan, dengan catatan, dan menolak satu angka volume. Target “lebih sedikit insiden” mengundang penekanan, jadi tetapkan ekspektasi pada hasil seperti dampak pelanggan dan pengurangan pengulangan. Tata kelola sebaiknya memiliki matriks prioritas dan menyetujui perubahannya, dengan efek pada garis tren dicatat.

### Pelanggan dan pengguna

Pelanggan mengalami insiden sebagai pekerjaan yang terputus, bukan sebagai kategori. Mereka butuh cara mudah melaporkan kerusakan, prioritas yang adil berdasarkan dampak mereka, dan pembaruan yang jujur. Jika laporan dikecilkan hatinya atau prioritas terasa semena-mena, volume akan turun dan kepercayaan turun bersamanya. Bagikan temuan utama dalam istilah yang dikenali pengguna, seperti layanan yang diperbaiki dan masalah yang disingkirkan (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional mendukung sistem rekam pasien, sistem penjadwalan, dan alat pesan staf. Semua angka dalam contoh ini bersifat ilustratif.

Laporan bulanan menunjukkan 640 insiden pada bulan terakhir kuartal, naik dari 520 bulan sebelumnya. Pimpinan meminta rencana pemulihan. Pemilik layanan sistem penjadwalan, yang hitungannya naik paling banyak, meminta melihat data sebelum setuju bahwa layanan memburuk.

Tiga fakta muncul. Pertama, sistem penjadwalan mendapat kelompok klinik baru bulan itu, dan pengguna aktif naik sekitar 30 persen (ilustratif). Setelah dinormalkan, tingkat insiden per 1.000 sesi kira-kira datar. Kedua, 90 dari catatan tambahan tertaut pada satu insiden induk, antarmuka gagal dengan sistem laboratorium, sehingga jumlah kerusakan berbeda hanya naik segelintir. Ketiga, campuran prioritas bergeser: porsi prioritas tertinggi adalah 2 persen bulan sebelumnya dan kini 7 persen. Tingkat klasifikasi ulang juga berlipat dua, dan sampel 20 catatan menunjukkan sekitar separuh prioritas tinggi diturunkan saat penutupan.

Tim membuat tiga keputusan. Mereka melaporkan insiden induk dan catatan tertaut terpisah. Mereka menambahkan sesi aktif ke laporan sebagai penyebut. Mereka mengadakan sesi setengah jam dengan service desk dan pimpinan klinis untuk menerapkan matriks dampak dan urgensi pada catatan bersampel, yang menunjukkan bahwa “klinik tidak dapat membuat janji pasien” telah diperlakukan sedang oleh sebagian agen dan tinggi oleh yang lain. Matriks mendapat dua contoh klinis per sel.

Risiko manipulasi yang mereka tangkap bersifat senyap. Seorang manajer telah meminta agen menghindari prioritas 1 untuk sistem penjadwalan karena masing-masing memicu tinjauan, sehingga catatan dibuka pada prioritas lebih rendah dan dinaikkan kemudian, atau tidak dinaikkan sama sekali. Tingkat klasifikasi ulang dan tinjauan sampel mengungkap polanya. Tim sepakat bahwa tinjauan adalah untuk belajar, menerbitkan pernyataan itu, dan melacak porsi insiden yang dibuka di bawah prioritas penutupan sebagai pagar pembatas. Konsentrasi kategori juga menunjukkan kerusakan antarmuka di puncak daftar, sehingga catatan masalah dibuka dan perbaikan dijadwalkan bersama tim antarmuka.

## Sudut pandang sektor

**Startup.** Volume kecil dan tim mengenal setiap insiden, jadi tingkat dan matriks bisa terasa berat. Simpan hitungan sederhana menurut layanan dan daftar pendek kategori, dan tuliskan dalam satu halaman apa yang dihitung sebagai insiden. Awasi pengulangan, karena tim kecil dapat menyingkirkan kerusakan berulang dengan cepat dan mendapatkan waktu kembali.

**Bisnis kecil.** Service desk mungkin satu orang memakai alat yang dihosting. Pakai laporan standar alat, jaga prioritas pada beberapa tingkat dengan aturan dampak dan urgensi yang polos, dan periksa bahwa permintaan tidak dihitung sebagai insiden. Bandingkan bulan ke bulan dengan catatan tentang perubahan, seperti staf baru atau perangkat lunak baru.

**Perusahaan besar.** Banyak layanan, pemasok, dan meja menjadikan konsistensi masalah utama. Sepakati satu matriks dampak dan urgensi, satu skema kategori dengan kedalaman terbatas, dan satu aturan untuk penghilangan duplikat, dan biarkan tim lokal menambah tag tanpa mengubah skema bersama. Normalkan menurut layanan dan tinjau tren dengan bagan kendali dan catatan. Insiden yang disebabkan pemasok butuh definisi bersama dalam kontrak (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

**Pemerintah dan sektor publik.** Insiden dapat membawa kewajiban pelaporan, kebutuhan audit, dan kepentingan publik, terutama di mana layanan memengaruhi hak atau keselamatan warga. Dokumentasikan matriks prioritas dan skema kategori, simpan jejak audit perubahan prioritas, dan berhati-hati dengan hitungan yang diterbitkan, karena pelaporan publik dapat menciptakan tekanan kuat pada cara catatan ditulis. Data pemakaian mungkin dibatasi aturan privasi, jadi nyatakan penyebut yang dapat Anda pakai secara sah (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah manajemen permintaan. Insiden memakan waktu terampil, menginterupsi pekerjaan terencana, dan mengganggu pengguna. Memahami volume, prioritas, dan pengulangan memungkinkan organisasi menyingkirkan sebab, menetapkan staf terhadap permintaan nyata, dan menunjukkan kepada pimpinan di mana pekerjaan keandalan akan membayar.

Biayanya terdiri dari tiga bagian. Penyiapan mencakup mendefinisikan insiden dan permintaan, menyepakati matriks prioritas dan skema kategori, dan menautkan data pemakaian ke layanan. Biaya menjalankan adalah upaya menjaga catatan bersih, tinjauan sampel bulanan, dan seseorang untuk merawat laporan. Biaya ketiga adalah waktu untuk menindaklanjuti temuan, tempat sebagian besar imbal hasil berasal, jadi rencanakan kapasitas untuknya.

Imbal hasil paling baik digambarkan sebagai pola yang dapat Anda ukur sendiri. Ini mencakup lebih sedikit pengulangan setelah pekerjaan masalah, lebih sedikit waktu dihabiskan dalam perselisihan prioritas, lebih sedikit eskalasi mengejutkan, dan kecocokan staf dan permintaan yang lebih baik. Hindari menjanjikan persentase pengurangan insiden; itu bergantung pada layanan, titik awal, dan pekerjaan yang dilakukan. Total biaya kepemilikan sebagian besar waktu orang, jadi hitunglah, dan bandingkan dengan waktu yang kini dikonsumsi insiden berulang.

## Anti-pola dan jebakan

- **Melaporkan hitungan mentah sebagai skor kesehatan.** Pemakaian, perubahan, dan perilaku pelaporan semuanya menggesernya. Tampilkan tingkat ternormalisasi, hitungan mentah, dan catatan bersama.
- **Target untuk lebih sedikit insiden.** Itu menghargai penekanan dan pelabelan keliru. Tetapkan tujuan untuk pengurangan pengulangan dan dampak pelanggan, dan simpan hitungan insiden sebagai informasi.
- **Menghitung permintaan sebagai insiden.** Volume naik dan layanan tampak lebih buruk dari yang sebenarnya. Pisahkan jenis catatan dan laporkan masing-masing.
- **Prioritas pilihan bebas.** Prioritas menjadi negosiasi dan campuran menjadi tak bermakna. Pakai matriks yang diterbitkan dan ambil sampel untuk konsistensi.
- **Pohon kategori yang tak dipakai siapa pun.** Orang memilih kecocokan pertama, dan “lainnya” tumbuh. Jaga tetap pendek, tinjau “lainnya” bulanan, dan pangkas yang tak terpakai.
- **Menghitung setiap tiket tertaut sebagai kerusakan terpisah.** Satu gangguan mendominasi bulan. Laporkan insiden induk dan jumlah catatan tertaut.
- **Memeringkat agen atau tim menurut hitungan insiden.** Hitungan menurut orang mencerminkan alokasi kerja dan kebiasaan tiket. Agregasikan ke layanan dan tinjau pola, bukan orang.
- **Mengabaikan pengulangan.** Kerusakan yang sama diperbaiki berulang kali, dan tak seorang pun memiliki sebabnya. Tautkan pengulangan ke catatan masalah dan tetapkan pemilik.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan penghitungan | Orang tak sepakat apa itu insiden; hitungan berasal dari ekspor ad hoc | Beberapa tim menyaring permintaan dari insiden; aturan berbeda | Satu definisi tertulis, filter, dan aturan penghilangan duplikat untuk semua tim | Perubahan definisi dicatat dan ditampilkan pada bagan tren; porsi catatan tak terkategori dilacak | Definisi ditinjau bersama pemasok dan pelanggan dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Normalisasi dan penafsiran | Hanya hitungan mentah | Data pemakaian dipakai beberapa layanan | Ukuran pemakaian bernama per layanan dari sumber terpisah | Bagan kendali dengan catatan dipakai dalam tinjauan | Data pemakaian, perubahan, dan insiden ditautkan antartim dan pemasok untuk menjelaskan permintaan |
| Praktik prioritas | Prioritas dipilih menurut perasaan | Matriks ada di beberapa tim | Satu matriks dengan contoh, ditampilkan di tempat prioritas dipilih | Campuran dan tingkat klasifikasi ulang ditinjau dan disampel bulanan | Matriks disetel bersama pelanggan dan pemilik klinis atau bisnis seiring kondisi berubah |
| Pengulangan dan pola | Pengulangan diingat dari ingatan | Daftar kategori ditinjau sesekali | Tingkat pengulangan dan pembukaan ulang dilaporkan bulanan dengan jendela yang dinyatakan | Gugus berulang ditautkan ke catatan masalah dengan pemilik dan tanggal | Penyingkiran sebab lintas tim dan pemasok didanai dan dilacak hingga permintaan berkurang |

## Daftar periksa

- [ ] Definisi tertulis memisahkan insiden dari permintaan, peringatan, dan masalah.
- [ ] Insiden induk dan catatan tertaut dilaporkan terpisah.
- [ ] Setiap insiden diatribusikan ke layanan dari katalog layanan.
- [ ] Setiap layanan punya ukuran pemakaian bernama dari sumber selain alat insiden.
- [ ] Laporan menunjukkan hitungan mentah, tingkat ternormalisasi, dan catatan untuk rilis dan kampanye.
- [ ] Bagan kendali dipakai sebelum ada yang bereaksi pada perubahan volume mingguan.
- [ ] Prioritas diturunkan dari matriks dampak dan urgensi yang diterbitkan dengan contoh.
- [ ] Campuran prioritas dan tingkat klasifikasi ulang ditinjau bersama setiap bulan.
- [ ] Daftar kategori pendek, dan porsi “lainnya” dan catatan tak terkategori dilacak.
- [ ] Tingkat pengulangan dan pembukaan ulang memakai jendela yang dinyatakan dan dilaporkan terpisah.
- [ ] Gugus berulang ditautkan ke catatan masalah dengan pemilik.
- [ ] Tak ada laporan yang memeringkat agen individu menurut hitungan insiden.

## Prompt AI

**Periksa definisi volume insiden untuk ambiguitas.**

```text
Kami menghitung volume insiden untuk [service or team] dari [ITSM tool]. Filter
kami saat ini [describe record types, statuses, and exclusions] dan periode kami
[period]. Tinjau definisi untuk ambiguitas, termasuk cara permintaan, duplikat,
tiket yang digabung, dan catatan yang dibatalkan ditangani. Sarankan aturan
tertulis yang jelas dan daftar pendek contoh yang akan menyelesaikan
ketidaksepakatan. Jangan mengarang nilai acuan. Daftar asumsi Anda dan pertanyaan
yang harus saya jawab untuk melengkapi definisi.
```

**Rancang tingkat insiden ternormalisasi.**

```text
Untuk layanan [service name] saya ingin tingkat insiden yang dinormalkan menurut
pemakaian. Ukuran pemakaian yang tersedia adalah [list, for example active users,
sessions, transactions] dari [source]. Bandingkan opsinya, katakan mana yang
paling cocok dan mengapa, dan jelaskan apa yang dapat mendistorsi masing-masing.
Usulkan cara menampilkan hitungan mentah, tingkat, dan catatan untuk [events such
as releases or campaigns] pada satu bagan. Jangan mengarang angka atau ambang.
Daftar asumsi Anda.
```

**Tinjau matriks dampak dan urgensi.**

```text
Berikut matriks prioritas kami: [paste impact levels, urgency levels, and the
resulting priorities], dan berikut [number] contoh insiden anonim: [paste short
descriptions]. Terapkan matriks pada setiap contoh, tunjukkan di mana dua pembaca
bisa mencapai prioritas berbeda, dan sarankan kata-kata atau contoh yang
mengurangi ketidaksepakatan. Identifikasi cara matriks dapat dimanipulasi. Jangan
mengarang target respons atau nilai acuan. Daftar asumsi Anda.
```

**Analisis kategori dan pengulangan untuk kandidat perbaikan.**

```text
Saya punya catatan insiden untuk [period] dengan kolom ini: [list fields, for
example service, category, CI, opening time, closing time, reopen flag]. Jelaskan
metode untuk menemukan kategori teratas, memisahkan pembukaan ulang dari
pengulangan memakai jendela [window], dan memilih [number] kandidat untuk
penyelidikan masalah. Jelaskan cara memeriksa kategori serba ada dan catatan
hampir-duplikat. Jangan mengarang pola dalam data yang belum Anda tunjukkan.
Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan metrik terkait dan pagar pembatas yang harus berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa topik metrik yang disunting menjaga jam, vektor manipulasi, dan pagar pembatasnya tetap lengkap.

## Poin penting

- Volume insiden mencerminkan pemakaian, perubahan, dan perilaku pelaporan sama banyaknya dengan mutu, jadi normalkan dan beri catatan.
- Baca prioritas sebagai campuran, turunkan dari matriks dampak dan urgensi yang diterbitkan, dan awasi tingkat klasifikasi ulang.
- Laporkan insiden induk dan catatan tertaut terpisah agar satu gangguan tidak tampak seperti sebulan pekerjaan rutin.
- Pengulangan dan pembukaan ulang adalah sinyal paling berguna, karena menunjuk pada sebab dan perbaikan yang tak bertahan.
- Agregasikan ke layanan dan tim, bukan ke agen individu, dan pasangkan setiap metrik dengan pagar pembatas.
- Pakai bagan kendali dan tampilan Pareto untuk memutuskan di mana melihat, lalu beri setiap gugus pemilik dan kapasitas.

## Referensi dan bacaan lanjutan

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
