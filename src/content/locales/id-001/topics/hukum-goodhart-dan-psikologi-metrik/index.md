# Hukum Goodhart dan psikologi metrik

**Angka apa pun yang Anda beri ganjaran, ranking, atau ancaman akan mulai mengubah pekerjaan yang semestinya digambarkannya, sehingga setiap metrik dalam buku ini dipakai sebagai pertanyaan untuk dibahas tim dan dipasangkan dengan pagar pembatas yang menangkap manipulasinya.**

## Gambaran umum dan motivasi

[Hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) adalah peringatan tertua dalam pengukuran. Ekonom Charles Goodhart pada 1975, menulis tentang kebijakan moneter Inggris, mencatat bahwa keteraturan statistik cenderung runtuh begitu otoritas menekannya untuk tujuan pengendalian. Rumusan populernya datang kemudian. Antropolog Marilyn Strathern menyatakannya pada 1997 sebagai “Ketika sebuah ukuran menjadi target, ia berhenti menjadi ukuran yang baik.” Kedua kalimat itu mengatakan hal yang sama: begitu sebuah angka dipakai untuk mengarahkan orang, orang mengarahkan angkanya.

Gagasan yang sama punya nama lain. [Hukum Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law), dari ilmuwan sosial Donald Campbell, mengatakan makin sering indikator kuantitatif dipakai untuk keputusan, makin ia tunduk pada tekanan korupsi dan makin ia memutarbalikkan proses yang semestinya dipantaunya. [Efek kobra](https://en.wikipedia.org/wiki/Cobra_effect) adalah kisah tentang hadiah yang justru menghasilkan lebih banyak hal yang hendak disingkirkannya. Masing-masing adalah contoh [insentif perversi](https://en.wikipedia.org/wiki/Perverse_incentive): ganjaran yang mendorong perilaku menjauh dari yang diinginkan pemberinya.

Tim yang membangun dan menjalankan layanan TI sangat rentan. Pengiriman berkelanjutan dan manajemen layanan TI (ITSM), sebagaimana dikodifikasi oleh [ITIL](https://en.wikipedia.org/wiki/ITIL), sama-sama menghasilkan aliran stempel waktu, hitungan, dan status yang tak putus. Sistem tiket mencatat kapan tiket dibuka, kapan ditugaskan, kapan jam berhenti, dan kapan ditutup. Alat pengiriman mencatat kapan pekerjaan dimulai dan selesai. Angka-angka ini murah dikumpulkan, mudah digambar, dan mudah diubah menjadi target. Angka-angka ini juga mudah digeser tanpa membantu siapa pun.

Tiga istilah berulang dalam topik ini dan bagian buku lainnya. **Ukuran** menggambarkan sesuatu. **Target** adalah angka yang diharapkan dicapai seseorang. **Pagar pembatas** adalah ukuran atau praktik kedua, dipilih sebelumnya, yang akan bergerak bila ukuran pertama dimanipulasi. Langkah dari ukuran ke target adalah tempat masalah bermula, dan pagar pembatas adalah cara Anda menyadarinya.

Topik ini menetapkan aturan yang mengatur setiap topik lain. Setiap keluarga metrik dalam buku ini hadir dengan vektor manipulasinya (bagaimana ia biasanya dimanipulasi) dan pagar pembatasnya. Jika topik berikutnya tampak melewatkan hal itu, anggap topik itu belum selesai.

### Mengapa orang memanipulasi angka

Manipulasi biasanya bukan ketidakjujuran. Ia adalah tanggapan wajar orang-orang cakap terhadap insentif di hadapan mereka. Empat kekuatan bekerja.

- **Tekanan.** Bonus, penilaian, perpanjangan kontrak, atau reputasi seseorang bergantung pada angka itu. Bahkan tanpa kaitan formal, orang menyimpulkan apa yang diperhatikan pimpinan dari apa yang digambar pimpinan.
- **Surogasi.** [Surogasi](https://en.wikipedia.org/wiki/Surrogation) adalah kecenderungan memperlakukan ukuran seolah ia adalah hal yang diwakilinya. Peneliti yang mempelajarinya di organisasi menemukan bahwa upah insentif yang terikat pada sebuah ukuran membuat hal ini lebih mungkin. Tim yang melacak “tiket ditutup” mulai percaya tujuannya adalah tiket tertutup, bukan masalah terselesaikan.
- **Ketakutan.** Ketika angka buruk mendatangkan kesalahan, orang menyembunyikan kabar buruk. Insiden diturunkan tingkatnya, gangguan dilabeli ulang sebagai “pemeliharaan terencana,” dan cacat dicatat sebagai permintaan fitur.
- **Optimasi lokal.** Sebuah tim memperbaiki bagian sistem yang dinilai dan melempar biaya ke bagian yang tidak dinilai. Service desk menutup dengan cepat dan lini kedua mewarisi pengulangannya.

Memahami kekuatan-kekuatan ini penting karena obatnya bukan pengawasan yang lebih ketat. Obatnya adalah mengubah kondisi yang membuat manipulasi menjadi rasional.

## Prinsip utama

- **Ukur untuk belajar, bukan untuk menghakimi.** Tunjukkan angka lebih dulu kepada tim yang mengerjakan pekerjaan, dan pakai untuk mengajukan pertanyaan.
- **Pasangkan setiap metrik dengan pagar pembatas.** Kecepatan dengan kualitas, volume dengan hasil, biaya dengan pengalaman.
- **Gambarkan tim dan sistem, jangan memeringkat orang.** Tabel liga individu adalah cara tercepat merusak sumber data.
- **Utamakan hasil dan tren daripada target.** Sebuah arah dan percakapan mengalahkan ambang batas.
- **Tuliskan definisinya, termasuk jamnya.** Definisi yang ambigu adalah tempat manipulasi bersembunyi.
- **Siap berubah.** Pensiunkan atau rancang ulang metrik ketika tidak lagi memberi masukan bagi keputusan.
- **Buat kabar buruk aman.** Jika pelaporan jujur dihukum, data akan berbohong.

## Definisi metrik

Metrik di bawah ini bukan ukuran layanan atau pengiriman. Ini adalah ukuran kesehatan praktik metrik itu sendiri, dan menunjukkan bentuk yang diambil setiap tabel metrik dalam buku ini. Tiga yang pertama adalah contoh pagar pembatas yang muncul di seluruh topik berikutnya.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan pagar pembatas | Porsi metrik yang dilaporkan dan memiliki pagar pembatas bernama yang dilacak | metrik dengan pagar pembatas / metrik yang dilaporkan | persen | Register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik) | Pengukuran dan pelaporan; perbaikan berkelanjutan | Retrospektif kesepakatan kerja | Kuartalan |
| Tingkat pembukaan ulang | Porsi tiket atau item kerja yang ditutup lalu dibuka kembali dalam jangka yang ditetapkan | item dibuka ulang dalam 14 hari / item ditutup pada periode itu | persen | Riwayat status alat ITSM atau pelacak isu | Manajemen insiden; manajemen masalah | Definisi selesai; cacat yang lolos | Bulanan |
| Jumlah perubahan definisi | Jumlah perubahan pada definisi metrik atau alur status dalam satu periode, beserta alasannya | jumlah entri dalam log perubahan definisi | hitungan | Log perubahan register metrik | Pengukuran dan pelaporan | Kesepakatan kerja | Kuartalan |
| Tingkat pemakaian metrik | Porsi metrik yang dilaporkan dan dikutip dalam sebuah keputusan selama periode itu | metrik yang dikutip dalam keputusan tercatat / metrik yang dilaporkan | persen | Log keputusan atau catatan tinjauan | Perbaikan berkelanjutan | Tindakan retrospektif | Kuartalan |
| Kesenjangan persepsi | Selisih antara hasil survei kepuasan dan tingkat layanan hasil tiket untuk layanan yang sama | tingkat hasil survei dikurangi tingkat hasil pelacak | poin persentase | Alat survei dan alat ITSM | Manajemen tingkat layanan | Umpan balik tinjauan pemangku kepentingan | Kuartalan |

Tingkat pembukaan ulang hanya menghitung item yang dibuka ulang pada catatan yang sama. Item yang ditutup lalu diangkat kembali sebagai tiket baru tidak muncul. Sebagian inti bagian berikutnya adalah bahwa pagar pembatas membutuhkan pagar pembatasnya sendiri, seperti menautkan tiket duplikat ke tiket aslinya.

## Rekomendasi

### Rancang sistem pengukuran

**1. Mulai dari pertanyaan, bukan angka.** Sebelum menambah metrik, tulis pertanyaan yang dijawabnya dan keputusan yang diinformasikannya. “Apakah pengguna mendapat masalahnya terselesaikan pada kali pertama?” adalah pertanyaan. “Kurangi rata-rata waktu penanganan” adalah target yang menyamar sebagai pertanyaan. Metrik tanpa keputusan terlampir adalah kandidat pemensiunan.

**2. Pilih metrik yang saling bertegangan.** Angka tunggal mengundang optimasi berlebihan, jadi pilih pasangan yang saling menarik: lead time dengan tingkat kegagalan perubahan, kecepatan penutupan tiket dengan tingkat pembukaan ulang, ketersediaan dengan pengalaman yang dilaporkan pengguna. Pasangan itu tidak perlu berupa rumus. Ia perlu ditampilkan bersama, di halaman yang sama.

**3. Definisikan jam dan pengecualian.** Untuk setiap ukuran waktu, tulis di mana jam mulai, di mana berhenti, dan kapan boleh berhenti sejenak. Sebagian besar manipulasi pada data layanan hidup di batas-batas ini: tiket yang dimasukkan ke “menunggu pelanggan” menghentikan jam tingkat layanan, dan perubahan yang dicatat hanya setelah diterapkan lolos dari lead time perubahan. Jika ada status jeda, laporkan seberapa sering ia dipakai.

**4. Gunakan distribusi dan persentil.** Rata-rata waktu penyelesaian tiket bisa membaik karena beberapa tiket mudah ditutup dengan cepat sementara yang sulit menua. Tampilkan median dan persentil tinggi (misalnya ke-85 atau ke-95), dan tampilkan item terbuka tertua. Usia item kerja dan tiket terbuka tertua sulit dimanipulasi tanpa benar-benar menyelesaikan pekerjaan (lihat topik 2.1, Ukuran alur).

**5. Simpan register metrik.** Register singkat mendaftar setiap metrik, pemiliknya, definisinya, sumber datanya, vektor manipulasinya, pagar pembatasnya, dan tanggal terakhir ditinjau. Ini membosankan dan merupakan kebiasaan paling efektif dalam topik ini (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

### Perkenalkan metrik dengan aman

**6. Tunjukkan kepada tim lebih dulu, dan tunjukkan data mentah.** Tim yang melihat angka sebelum pimpinan lebih bersedia mempertanyakan keakuratannya. Mulailah dengan item yang mendasarinya, bukan bagannya. Jika data tidak sanggup bertahan dalam percakapan dengan orang yang menghasilkannya, ia tidak akan bertahan di dasbor.

**7. Pisahkan tampilan belajar dari tampilan akuntabilitas.** Tampilan kerja tim boleh memuat banyak ukuran, termasuk yang jelek. Yang sampai ke pimpinan sebaiknya set kecil yang stabil. Jika pimpinan meminta tampilan kerja, harapkan tampilan kerja berubah agar tampak lebih baik.

**8. Jangan kaitkan gaji, disiplin, atau peringkat individu dengan metrik.** Tim boleh diminta menjelaskan angkanya dan memperbaikinya. Target individu pada jumlah tiket, poin cerita, atau commit mengajari orang memaksimalkan hitungan. Pendekatan [indikator kinerja utama](https://en.wikipedia.org/wiki/Key_performance_indicator) bisa berhasil bila indikator dipilih untuk seluruh sistem dan ditinjau berkala. Ia gagal ketika menjadi kartu skor per orang.

**9. Buat pelaporan jujur aman.** [Keamanan psikologis](https://en.wikipedia.org/wiki/Psychological_safety) adalah keyakinan bahwa Anda tidak akan dihukum karena bersuara tentang kesalahan atau kekhawatiran. Tinjauan insiden tanpa menyalahkan adalah contohnya dalam praktik. Tanpa itu, jumlah insiden turun karena alasan yang salah: orang berhenti melapor.

### Jaga sistem tetap jujur

**10. Jalankan tinjauan manipulasi.** Sekali setiap kuartal, ajukan satu pertanyaan kepada tim tentang setiap metrik yang dilaporkan: “Jika kita ingin angka ini tampak baik tanpa membantu siapa pun, apa yang akan kita lakukan?” Tulis jawabannya, lalu periksa apakah pagar pembatas akan menangkap masing-masing. Latihan ini murah, menghasilkan gagasan berguna, dan menggeser percakapan dari kecurigaan ke desain.

**11. Audit definisi terhadap kenyataan.** Ambil sampel sejumlah kecil item yang ditutup dan bacalah. Apakah benar-benar terselesaikan? Apakah prioritasnya jujur? Apakah status “menunggu pelanggan” berarti pelanggan memang sedang ditunggu? Sampel lima belas menit sering memberi tahu lebih banyak daripada dasbor sebulan.

**12. Pensiunkan metrik.** Metrik yang tidak dikutip dalam keputusan selama dua kuartal adalah beban. Singkirkan, dan nyatakan hal itu. Metrik yang lebih sedikit dan masing-masing dipercaya mengalahkan yang banyak.

## Vektor manipulasi dan pagar pembatas

Tabel ini mencakup metrik pada bagian di atas. Topik berikutnya menerapkan bentuk yang sama pada ukuran layanan dan pengiriman.

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan pagar pembatas | Menamai pagar pembatas di atas kertas tanpa pernah melacaknya | Tinjau register: pagar pembatas baru dihitung jika nilai terbarunya muncul di dasbor yang sama |
| Tingkat pembukaan ulang | Menutup tiket dan membuat yang baru alih-alih membukanya kembali; memperpanjang jangka sampai pembukaan ulang jatuh di luarnya | Tingkat tiket duplikat dan tertaut; kekambuhan penyebab yang sama di berbagai tiket |
| Jumlah perubahan definisi | Tidak mencatat perubahan agar hitungan tetap rendah; mengubah alur kerja tanpa memberi tahu siapa pun | Bandingkan model status di alat dengan register pada setiap tinjauan |
| Tingkat pemakaian metrik | Mengutip setiap metrik dalam log keputusan sebagai formalitas | Tanyakan apa yang berubah karena kutipan itu; ambil sampel log |
| Kesenjangan persepsi | Hanya menyurvei pengguna yang puas; mengarahkan survei ke waktu setelah interaksi yang baik | Tingkat respons survei dan komposisi responden; komentar terbuka dibacakan dalam tinjauan |

Pembacaan yang sehat adalah praktik metrik yang berubah: definisi disesuaikan dengan alasan yang tertulis, metrik datang dan pergi, dan tim bisa menceritakan keputusan yang diubah oleh sebuah angka.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Mengukur tanpa target | Mengurangi manipulasi; mengundang diskusi jujur | Bisa menjadi pelaporan yang tak ditindaklanjuti siapa pun |
| Target dengan pagar pembatas | Memberi arah dan urgensi; pasangan membatasi manipulasi | Lebih banyak pekerjaan perawatan; pagar pembatas pun lama-lama dimanipulasi |
| Metrik individu | Mudah dipahami; tampak adil | Merusak data; merugikan kolaborasi |
| Metrik tim dan layanan | Sesuai cara kerja sebenarnya | Lebih sulit diatribusikan; menyembunyikan kebutuhan dukungan individu |
| Sedikit metrik | Lebih mudah dipercaya dan diingat | Titik buta; bisa melewatkan masalah baru |
| Banyak metrik | Cakupan luas | Mengencerkan perhatian; setiap metrik tata kelolanya lemah |

Jawaban dalam prosa adalah memakai target seperlunya, untuk kondisi yang dipahami dengan baik dan sulit dimanipulasi, seperti sasaran tingkat layanan yang diminta pengguna. Bahkan begitu, lebih baik mengaitkan target dengan layanan, bukan dengan penilaian seseorang. Tujuannya bukan menyingkirkan angka dari pengambilan keputusan. Tujuannya menjaga angka tetap terhubung dengan kenyataan dengan menjaga orang yang menghasilkannya di pihak Anda.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Angka mana di dasbor kita saat ini yang paling menggoda untuk diperbaiki tanpa memperbaiki pekerjaan?**
Mulailah dengan metrik yang pertama dilihat orang, lalu beralih ke yang ditanyakan pimpinan. Minta langkah spesifik: apa yang akan kita lakukan pada data jika berada di bawah tekanan? Fasilitator sebaiknya mencatat setiap jawaban tanpa menilai, karena daftar itu menjadi vektor manipulasi untuk register. Akhiri dengan bertanya langkah mana yang akan tertangkap pagar pembatas kita, dan mana yang lolos.

**2. Di mana jam mulai dan berhenti pada ukuran waktu terpenting kita, dan siapa yang memutuskannya?**
Minta kelompok menggambar siklus hidup tiket atau item kerja di papan tulis dan menandai setiap status. Cari status tempat waktu bisa menghilang, seperti menunggu pelanggan atau ditahan. Hitung seberapa sering setiap status dipakai dan oleh siapa. Percakapan ini sering mengungkap bahwa dua tim memakai kata yang sama dengan makna berbeda.

**3. Kapan terakhir sebuah angka membuat kita melakukan sesuatu yang tidak membantu?**
Undang cerita, bukan kesalahan. Contoh umum adalah menutup tiket sebelum memverifikasi, memecah perubahan untuk menaikkan hitungan deployment, atau mengklasifikasi ulang insiden untuk menghindari laporan pelanggaran. Fasilitator sebaiknya bertanya apa yang sedang dilindungi orang itu. Jawabannya biasanya menunjukkan insentif yang perlu diubah.

**4. Siapa yang melihat metrik kita, dan apa yang terjadi padanya di sana?**
Telusuri setiap metrik dari tim sampai audiensnya. Tanyakan apakah ada versinya yang dipakai untuk membandingkan tim atau orang. Tanyakan apa yang akan ditunjukkan tim jika audiensnya berbeda. Di mana tim akan mengubah angka yang ditunjukkan, di situ ada kesenjangan kepercayaan untuk dibicarakan dengan audiens.

**5. Apa pagar pembatas untuk lima metrik terpenting kita, dan apakah ada di halaman yang sama?**
Buat daftar dua kolom di papan. Jika sebuah metrik tidak memiliki pagar pembatas, sepakati satu kandidat dan pemilik untuk mengujinya selama satu kuartal. Jika pagar pembatas ada tetapi jarang dilihat, bahas mengapa. Hindari memilih pagar pembatas yang hanya kebalikan dari metriknya, karena itu tidak memberi tahu hal baru.

**6. Metrik mana yang harus kita pensiunkan kuartal ini?**
Minta bukti: kapan terakhir dipakai dalam keputusan? Jika tak seorang pun ingat, pensiunkan untuk masa uji dan lihat apakah ada yang menyadarinya. Fasilitator sebaiknya memperlakukan pemensiunan sebagai peristiwa normal. Tim yang tak pernah membuang metrik berakhir dengan laporan yang tidak dipercaya atau dibaca siapa pun.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman bertemu manipulasi lewat velocity, throughput, dan hitungan deployment. [Velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)) khususnya adalah alat perencanaan untuk satu tim, bukan ukuran produktivitas, dan membandingkan tim dengannya menyebabkan estimasi menggelembung. Tim pengiriman sebaiknya menyimpan ukuran kerja mereka untuk diri sendiri, menerbitkan set kecil ke luar, dan memasangkan setiap ukuran kecepatan dengan ukuran kualitas (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman).

### Tim layanan dan operasi

Tim layanan bertemu manipulasi lewat waktu penyelesaian, penyelesaian pada kontak pertama, dan kepatuhan tingkat layanan. Status penghenti jam dan bidang prioritas adalah titik penyimpangan yang biasa. Tim operasi sebaiknya mengaudit transisi status secara berkala, melaporkan pemakaian status jeda, dan mengawasi kontak berulang serta tingkat pembukaan ulang di samping kecepatan. Tim siaga harus sangat berhati-hati dengan ukuran yang menghargai tidak dipanggil, karena itu menghukum peringatan yang jujur (lihat topik 3.3, Waktu respons dan penyelesaian insiden).

### Kepemimpinan dan tata kelola

Pemimpin menetapkan insentif, sering tanpa bermaksud. Pertanyaan yang diajukan dalam tinjauan (“mengapa ini merah?”) mengajari tim apa yang harus disembunyikan. Pemimpin sebaiknya bertanya apa yang dipelajari tim dari sebuah angka, menjauhkan tabel liga dari ruangan, melindungi pelaporan yang terus terang, dan mendanai pekerjaan perbaikan yang diungkap angka buruk. Badan tata kelola sebaiknya mengharapkan register metrik dan tinjauan manipulasi sebagai bagian dari pelaporan, dan memperlakukan perubahan terdefinisi pada sebuah metrik sebagai hal normal.

### Pelanggan dan pengguna

Pengguna merasakan dampak manipulasi sebagai layanan yang tampak baik di atas kertas tetapi terasa buruk dalam praktik: tiket ditutup padahal tidak diperbaiki, gangguan dilabeli terencana, survei yang tak pernah sampai kepada mereka. Pengguna juga pagar pembatas terbaik. Umpan balik mereka, dalam bentuk survei, keluhan, dan komentar, sebaiknya ditempatkan di samping angka operasional, dan dibaca utuh, bukan dipadatkan menjadi skor (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional menjalankan service desk dan beberapa tim produk yang membangun aplikasi klinis. Angka dalam contoh ini bersifat ilustratif.

Pimpinan menetapkan target menutup 90 persen insiden dalam waktu yang disepakati. Dalam dua bulan dasbor menunjukkan 94 persen. Kepala operasi layanan senang tetapi gelisah, karena staf klinis mengeluh lebih banyak, bukan lebih sedikit. Ia meminta tim menjalankan tinjauan manipulasi atas metrik itu.

Tim menggambar siklus hidup tiket. Mereka menemukan bahwa tiket berpindah ke “menunggu pelanggan” rata-rata dua kali masing-masing, dan waktu dalam status itu membesar. Sampel 30 tiket tertutup menunjukkan 7 ditutup dengan catatan “tidak ada respons dari pengguna” setelah satu kali upaya menelepon. Mereka juga menemukan bahwa tingkat pembukaan ulang datar hanya karena pengguna diminta “membuat tiket baru” ketika masalahnya kembali.

Tim membuat tiga perubahan. Pertama, bagan waktu penyelesaian kini menampilkan median, persentil ke-90, dan tiket terbuka tertua, beserta porsi waktu yang dihabiskan dalam status jeda. Kedua, dasbor menambahkan tingkat kontak berulang, didefinisikan sebagai porsi tiket baru dari pengguna yang sama tentang layanan yang sama dalam 14 hari. Ketiga, survei singkat dikirim ke sampel acak tiket tertutup, dan komentar terbukanya dibacakan dalam tinjauan bulanan.

Tiga bulan kemudian angka kepatuhan utama turun menjadi 88 persen, yang terasa seperti kabar buruk. Namun tingkat kontak berulang telah turun, dan komentar survei tentang masalah yang belum terselesaikan menjadi lebih jarang. Kepala operasi memberi tahu pimpinan bahwa angka lama itu menggelembung dan gambaran baru lebih jujur, dan ia meminta mereka menerima target tingkat layanan berdasarkan definisi yang dikoreksi. Keputusan yang tercatat dalam log keputusan adalah menetapkan target setelah satu kuartal data lagi, bukan segera.

## Sudut pandang sektor

**Startup.** Tim kecil memiliki sedikit metrik dan kepercayaan yang kuat, yang membantu. Bahayanya adalah mengimpor dasbor perusahaan besar terlalu dini. Mulailah dengan dua atau tiga ukuran yang benar-benar dipakai para pendiri, tuliskan definisinya, dan jauhkan dari percakapan kinerja individu.

**Bisnis kecil.** Sumber daya tipis, dan orang yang menjalankan TI sering melapor langsung kepada pemilik. Satu keluhan pelanggan bisa lebih berbobot daripada dasbor mana pun. Jaga set tetap kecil, utamakan umpan balik langsung dari pengguna, dan perlakukan laporan dari vendor dengan hati-hati, karena vendor punya insentifnya sendiri.

**Perusahaan besar.** Skala melipatgandakan tuntutan akan angka yang dapat dibandingkan dan tekanan untuk memanipulasinya. Pakai set standar kecil dengan definisi tertulis, pisahkan tampilan kerja tim dari rekapitulasi, dan hindari membandingkan tim yang menangani jenis layanan berbeda. Register metrik dan ritme tinjauan menjadi esensial.

**Pemerintah dan sektor publik.** Kewajiban pelaporan dan tingkat layanan dalam kontrak dapat membuat sebagian target tidak bisa ditawar. Perlakukan sebagai masukan desain: penuhi, tampilkan pagar pembatas di sampingnya, dan laporkan definisi yang dipakai. Akuntabilitas publik menaikkan harga menyembunyikan kabar buruk, jadi bangun saluran internal yang aman dan terbukalah tentang definisi yang dikoreksi (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya menerapkan topik ini sebagian besar waktu: beberapa jam untuk menulis definisi dan register, tinjauan manipulasi kuartalan yang singkat, dan sampling item tertutup sesekali. Biaya perangkat kecil. Biaya yang lebih besar adalah perhatian pimpinan, karena disiplin ini hanya berhasil bila orang yang membaca angka bersikap konsisten.

Imbal hasil datang dari pemborosan yang terhindari dan keputusan yang lebih baik. Keputusan yang dibuat dari data yang rusak dapat mengarahkan investasi ke masalah yang salah, seperti menambah staf service desk untuk menutup tiket lebih cepat padahal masalah sebenarnya adalah kontak berulang akibat sebuah cacat. Manipulasi juga mengikis kepercayaan antara tim dan orang yang bergantung padanya, yang sulit dipulihkan. Gambarkan manfaatnya dalam pola, bukan dengan persentase rekaan: lebih sedikit keputusan yang dibalik, lebih sedikit kejutan dalam audit, dan kesesuaian yang lebih baik antara angka operasional dan pengalaman pengguna. Jika Anda butuh angka untuk kasus bisnis, ukur garis dasar Anda sendiri, seperti kesenjangan persepsi dan tingkat kontak berulang, sebelum dan sesudah perubahan.

## Anti-pola dan jebakan

- **Target tanpa pagar pembatas.** Target tunggal dicapai lewat jalur apa pun yang tersedia. Tambahkan ukuran berpasangan sebelum target diumumkan.
- **Tabel liga orang atau tim.** Itu mengundang manipulasi dan mengecilkan hati untuk saling membantu antartim. Tunjukkan kepada tiap tim tren mereka sendiri, dengan konteks.
- **Metrik sebagai hukuman.** Angka merah yang mendatangkan kesalahan akan menjadi hijau lewat penyembunyian. Tanyakan apa yang dibutuhkan tim.
- **Rata-rata data yang miring.** Itu menyembunyikan ekor tempat pengguna menderita. Pakai persentil dan usia item tertua.
- **Mengubah definisi diam-diam.** Garis tren menjadi tak bermakna. Catat setiap perubahan beserta alasannya dan tandai pada bagan.
- **Memperlakukan pagar pembatas sebagai target baru.** Pagar pembatas itu lalu dimanipulasi. Tinjau keduanya bersama dan putar pagar pembatas bila kehilangan daya.
- **Metrik pajangan.** Hitungan yang hanya naik, seperti tiket ditangani atau commit dibuat, tidak mengatakan apa-apa tentang hasil. Pilih ukuran yang bisa turun sekaligus naik.
- **Mengabaikan bukti kualitatif.** Angka saja tidak bisa menunjukkan bahwa tiket tertutup terasa belum terselesaikan. Baca komentarnya.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | Informal; tiap orang menghitung berbeda | Tertulis untuk sebagian metrik | Satu definisi tertulis per metrik, dengan jam dan pengecualian | Definisi ditinjau dan perubahan dicatat beserta alasan | Definisi diselaraskan antartim dan pemasok, direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Pagar pembatas | Tidak ada | Dinamai untuk sebagian metrik | Setiap metrik yang dilaporkan memiliki pagar pembatas di halaman yang sama | Pagar pembatas ditinjau untuk manipulasi setiap kuartal | Pagar pembatas berputar dan dirancang bersama orang yang diukur |
| Pemakaian dan keamanan | Angka dipakai untuk menimpakan kesalahan | Tim melihat angkanya sendiri | Tim melihat data lebih dulu; tanpa peringkat individu | Pimpinan mengajukan pertanyaan belajar; pelaporan aman | Pelanggan dan pemasok berbagi pandangan terus terang tentang angka |

## Daftar periksa

- [ ] Setiap metrik yang dilaporkan memiliki pertanyaan tertulis dan keputusan yang diinformasikannya.
- [ ] Setiap ukuran waktu memiliki aturan mulai, berhenti, dan jeda yang tertulis.
- [ ] Setiap metrik yang dilaporkan memiliki pagar pembatas bernama yang ditampilkan di sampingnya.
- [ ] Ukuran waktu menampilkan persentil dan usia item terbuka tertua.
- [ ] Register metrik ada dengan pemilik, definisi, vektor manipulasi, pagar pembatas, dan tanggal tinjauan.
- [ ] Tim melihat datanya sebelum pimpinan.
- [ ] Tidak ada peringkat, gaji, atau disiplin individu yang dikaitkan dengan metrik.
- [ ] Tinjauan manipulasi kuartalan ada di kalender.
- [ ] Sampel item tertutup dibaca untuk kejujuran setiap kuartal.
- [ ] Setidaknya satu metrik telah dipensiunkan atau dirancang ulang dalam setahun terakhir.

## Prompt AI

**Jalankan tinjauan manipulasi pada sebuah metrik.**

```text
Saya memimpin [team name], yang menjalankan [type of service or delivery work].
Kami melaporkan metrik ini: [metric name], didefinisikan sebagai [definition
including where the clock starts and stops]. Metrik ini dipakai oleh [audience]
untuk [decision or target]. Data kami berasal dari [tool].

Daftar cara realistis metrik ini bisa dibuat tampak lebih baik tanpa memperbaiki
layanan bagi pengguna. Untuk masing-masing, sarankan metrik atau praktik pagar
pembatas yang akan mengungkapnya dan sebutkan apa vektor manipulasi bagi pagar
pembatas itu sendiri. Jangan mengarang nilai acuan. Daftar asumsi Anda dan hal
apa pun yang tidak dapat Anda tentukan dari yang saya berikan.
```

**Susun entri register metrik.**

```text
Susun entri register metrik untuk [metric name] bagi [team name]. Bidang:
pertanyaan yang dijawab, keputusan yang diinformasikan, definisi, rumus, satuan,
sumber data, peran pemilik, ritme tinjauan, vektor manipulasi, pagar pembatas,
dan bagaimana pengguna atau pelanggan akan menyadari jika metrik itu salah.
Dasarkan entri hanya pada deskripsi ini: [describe the metric and current
process]. Tandai setiap bidang yang harus Anda asumsikan, dan daftar pertanyaan
yang harus saya jawab untuk melengkapi entri.
```

**Audit sampel tiket tertutup.**

```text
Berikut [number] tiket tertutup dari [service], dengan bidang [list fields] dan
catatan penyelesaian ditempel di bawah. Tinjau masing-masing untuk tanda bahwa
tiket ditutup tanpa masalah terselesaikan, bahwa status jeda dipakai untuk
menghentikan jam, atau bahwa prioritas atau kategori tampak disesuaikan. Laporkan
pola, bukan individu. Jangan menebak penyebab yang tidak didukung teks. Katakan
apa yang tidak dapat Anda nilai dari data dan bidang tambahan apa yang akan
membantu.

[paste tickets, with personal data removed]
```

**Rencanakan cara memperkenalkan metrik dengan aman.**

```text
Kami berencana memperkenalkan [metric] kepada [audience]. Konteks saat ini: [team
size, culture, previous experience with metrics]. Usulkan rencana peluncuran yang
mencakup siapa yang melihat data lebih dulu, bagaimana kami menjelaskan tujuan,
untuk apa kami tidak akan memakainya, pagar pembatas apa yang kami tampilkan
bersamanya, dan kapan kami meninjau apakah metrik itu berjalan. Tandai risiko
manipulasi atau ketakutan dan sarankan cara menguranginya. Daftar asumsi Anda dan
jangan mengarang statistik.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik dan pagar pembatas berpasangan bagi metrik yang akan Anda perkenalkan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa topik metrik baru memuat vektor manipulasi dan pagar pembatasnya.

## Poin penting

- Ukuran yang menjadi target berhenti menggambarkan pekerjaan, jadi pakai angka untuk mengajukan pertanyaan.
- Manipulasi adalah tanggapan normal terhadap tekanan dan ketakutan, dan ia berkurang dengan mengubah kondisi, bukan dengan mengawasi.
- Setiap metrik membutuhkan definisi tertulis beserta jamnya dan pagar pembatas yang ditampilkan di sampingnya.
- Utamakan persentil dan usia item tertua daripada rata-rata.
- Gambarkan tim dan layanan, jangan memeringkat individu, dan biarkan tim melihat datanya lebih dulu.
- Tinjau manipulasi setiap kuartal dan pensiunkan metrik yang tidak lagi memberi masukan bagi keputusan.

## Referensi dan bacaan lanjutan

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
