# Metrik service desk

**Ukur service desk dari seberapa baik ia membantu orang kembali bekerja dan seberapa banyak ia mengajari seluruh organisasi, karena hitungan panggilan dan menit di telepon menghargai kecepatan dan volume dengan mengorbankan keduanya.**

## Gambaran umum dan motivasi

Bagi kebanyakan pengguna, service desk adalah layanan itu sendiri. Mereka jarang bertemu para insinyur atau melihat jalur pengiriman; mereka bertemu siapa pun yang menjawab ketika sesuatu salah. [Help desk](https://en.wikipedia.org/wiki/Help_desk) adalah departemen atau orang yang memberi bantuan dan informasi, biasanya tentang masalah komputer. Dalam pemakaian [manajemen layanan TI (ITSM)](https://en.wikipedia.org/wiki/IT_service_management), service desk adalah titik kontak tunggal antara penyedia dan penggunanya, menangani insiden (gangguan tak terencana atau potensi gangguan pada layanan) dan permintaan layanan (permintaan rutin atas sesuatu yang biasa disediakan layanan). Dalam [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, praktik service desk berada di samping manajemen insiden dan manajemen permintaan layanan, dan dijelaskan lewat tujuan dan hasilnya, bukan daftar ukuran yang tetap. Topik ini karena itu menawarkan panduan praktis, bukan persyaratan kerangka.

Ukuran yang tumbuh di sekitar meja berasal sebagian besar dari tradisi [pusat panggilan](https://en.wikipedia.org/wiki/Call_centre): berapa banyak kontak tiba, berapa lama orang menunggu, berapa banyak menyerah, berapa lama tiap kontak memakan waktu, dan berapa banyak yang diselesaikan pada percobaan pertama. Ukuran itu berguna dan murah, dan juga yang paling mudah dalam buku ini dijadikan target yang merusak layanan. Panggilan singkat tampak efisien sampai pengguna yang sama menelepon kembali tiga kali. Pembatalan rendah tampak peduli sampai agen menjawab cepat dan tak menyelesaikan apa pun. Tugas topik ini adalah menjelaskan setiap ukuran, menyatakan jamnya, dan mengatakan apa yang dihargai dan disembunyikannya.

Pandangan agile menambah tujuan kedua. Setiap kontak adalah bukti tentang apa yang membingungkan pengguna, apa yang rusak, dan apa yang mereka harap dilakukan layanan. Tim agile yang sering merilis butuh bukti itu dengan cepat dan pada tingkat layanan, bukan tiket. Jadi meja diukur dua kali: sebagai operasi yang menjawab orang dengan baik, dan sebagai sensor yang menyuapi backlog. Volume adalah jembatan antara keduanya. Hitungan yang naik dapat berarti pertumbuhan, rilis yang buruk, artikel yang hilang, atau saluran baru, dan metrik saja tak dapat menyatakan yang mana (lihat topik 3.2, Volume dan prioritas insiden, untuk cara membaca hitungan menurut kategori dan prioritas).

Istilah kunci: [penyelesaian pada panggilan pertama](https://en.wikipedia.org/wiki/First_call_resolution) adalah porsi kontak yang diselesaikan pada kontak pertama; [distributor panggilan otomatis](https://en.wikipedia.org/wiki/Automatic_call_distributor) merutekan panggilan masuk ke staf yang tersedia; [perjanjian tingkat layanan (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) adalah komitmen antara penyedia dan pelanggan; [persentil](https://en.wikipedia.org/wiki/Percentile) adalah nilai yang di bawahnya jatuh porsi pengamatan tertentu, sehingga persentil ke-85 waktu penanganan adalah durasi yang di dalamnya 85 persen kontak selesai; dan [kepuasan pelanggan](https://en.wikipedia.org/wiki/Customer_satisfaction) (lihat topik 6.1, Metrik kepuasan pelanggan) adalah seberapa baik layanan memenuhi ekspektasi pengguna.

Istilah “kontak” dan “tiket” tidak sama. Kontak adalah satu percobaan seseorang menjangkau meja lewat saluran seperti telepon, obrolan, email, portal, datang langsung, atau pesan. Tiket (juga disebut catatan) adalah apa yang dibuat alat ITSM untuk melacak pekerjaan. Satu tiket dapat melibatkan banyak kontak, dan sebagian kontak, seperti setel ulang kata sandi yang dijawab di tempat, mungkin membuat tiket hanya sebagai catatan. Mencampur keduanya adalah sumber kebingungan paling umum dalam pelaporan meja, jadi definisi di bawah menghitungnya terpisah.

## Prinsip utama

- **Hitung kontak dan tiket terpisah, dan definisikan keduanya.** Kontak adalah percobaan menjangkau meja; tiket adalah catatan pekerjaan. Laporan yang mencampurnya tak dapat direkonsiliasi.
- **Laporkan waktu sebagai distribusi.** Tampilkan median dan persentil tinggi seperti ke-85 atau ke-95, jangan hanya rata-rata, karena beberapa kontak yang sangat panjang atau sangat pendek mendistorsi rata-rata.
- **Pasangkan setiap ukuran kecepatan dengan ukuran hasil.** Kecepatan menjawab, pembatalan, dan waktu penanganan menggambarkan upaya. Penyelesaian dan kontak ulang menggambarkan apakah pengguna terbantu.
- **Normalkan volume terhadap pemakaian.** Hitungan yang naik karena basis pengguna tumbuh adalah cerita berbeda dari yang naik per pengguna.
- **Ukur saluran dan layanan, bukan orang.** Metrik ini menggambarkan meja, antrean, layanan, dan saluran. Tidak pernah dipakai untuk memeringkat atau mendisiplinkan agen individu.
- **Perlakukan meja sebagai sensor.** Setiap metrik sebaiknya mengarah pada pertanyaan bagi tim pengiriman tentang apa yang diperbaiki, didokumentasikan, atau diotomatisasi di hulu.

## Definisi metrik

Tabel mendaftar tujuh ukuran yang dapat dikumpulkan kebanyakan service desk dari platform telefoni dan alat ITSM-nya. Ambang dan target ditetapkan dan dituliskan oleh tiap meja; topik ini tidak memberi nilai acuan.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume kontak | Jumlah kontak yang diterima meja, menurut saluran dan periode | hitungan kontak yang dibuat pada periode itu, menurut saluran; kontak uji internal, balasan otomatis email duplikat, dan panggilan keluar yang dilakukan meja dikecualikan | hitungan | Log platform telefoni atau obrolan; catatan kontak alat ITSM | Service desk | Sinyal permintaan dalam penyempurnaan backlog | Mingguan |
| Tingkat kontak | Kontak relatif terhadap ukuran populasi yang dilayani, agar pertumbuhan tak keliru dianggap masalah | kontak pada periode itu / pengguna atau akun aktif pada periode itu, diskalakan ke 100 pengguna; hitungan pengguna diambil dari periode yang sama dan definisi “aktif” ditulis | kontak per 100 pengguna | Catatan kontak dan sistem identitas atau lisensi | Service desk; manajemen tingkat layanan | Permintaan yang disesuaikan pemakaian dalam tinjauan produk | Bulanan |
| Waktu menjawab | Penantian dari saat kontak masuk antrean sampai orang atau mesin jawaban otomatis terlibat | jam dimulai saat kontak diantrekan dan berhenti pada respons manusia pertama; kontak yang dibatalkan dikecualikan dari ukuran ini dan dihitung dalam pembatalan; laporkan median dan persentil ke-85 | detik (telepon, obrolan); menit atau jam (email, portal) | Platform telefoni; platform obrolan; stempel waktu alat ITSM | Service desk | Kesepakatan kerja ketanggapan | Harian selama jendela tinjauan, mingguan dalam tren |
| Tingkat pembatalan | Porsi kontak yang diakhiri pengguna sebelum ada yang terlibat | kontak yang diakhiri pengguna sebelum respons manusia pertama / kontak yang diantrekan; kontak yang berakhir dalam masa tenggang singkat (dinyatakan dalam definisi, misalnya lima detik) dikecualikan sebagai tak disengaja | persen | Platform telefoni; platform obrolan | Service desk | Sinyal biaya keterlambatan dalam tinjauan layanan | Mingguan |
| Waktu penanganan | Waktu yang dihabiskan meja untuk satu kontak | jam dimulai saat orang terlibat dan berhenti saat mereka menyelesaikan kontak, termasuk pekerjaan dokumentasi setelah kontak; menunggu pengguna dihitung hanya bila definisi menyatakannya; laporkan median dan persentil ke-85, dipecah menurut jenis kontak | menit | Platform telefoni; platform obrolan; log kerja alat ITSM | Service desk; manajemen insiden | Sinyal upaya dalam penyempurnaan dan perencanaan kapasitas | Mingguan |
| Tingkat penyelesaian pada kontak pertama | Porsi kontak yang diselesaikan pada kontak pertama tanpa kontak lanjutan pada hal yang sama | kontak yang diselesaikan selama kontak dan tidak diikuti kontak ulang pada isu yang sama oleh pengguna yang sama dalam jendela kontak ulang / kontak yang memenuhi syarat; panggilan yang hanya butuh rujukan dan panggilan yang tak diharapkan diselesaikan meja dikecualikan | persen | Kolom penyelesaian dan tautan alat ITSM; konfirmasi pengguna bila dikumpulkan | Service desk; manajemen insiden | Pemeriksaan definisi selesai, diselesaikan pada sentuhan pertama | Bulanan |
| Tingkat kontak ulang | Porsi kontak yang diselesaikan dan diikuti kontak lain pada hal yang sama | kontak yang diikuti dalam jendela kontak ulang (misalnya tujuh hari, ditetapkan dalam definisi) oleh kontak lain dari pengguna yang sama pada layanan atau isu yang sama / kontak yang diselesaikan pada periode sebelumnya; kontak tentang isu baru dikecualikan | persen | Tautan dan riwayat pembukaan ulang alat ITSM; catatan kontak | Service desk; manajemen insiden | Tingkat cacat yang lolos | Bulanan |

Penyelesaian pada kontak pertama punya lebih dari satu definisi yang dapat dipertahankan, jadi definisi adalah bagian dari metrik. Sebagian meja menghitung kontak sebagai diselesaikan ketika agen menutup tiket selama panggilan. Yang lain menghitung hanya bila pengguna tidak kembali dalam jendela. Yang kedua lebih sulit dikumpulkan dan lebih sulit dimanipulasi, dan itulah yang dipakai di sini. Nyatakan jendelanya, nyatakan apa yang dihitung sebagai “hal yang sama,” dan terapkan keduanya dengan cara sama setiap periode.

## Rekomendasi

### Pisahkan kontak dari tiket sejak awal

**Beri kontak dan tiket definisi, pengenal, dan hitungan masing-masing.** Kontak adalah catatan percobaan menjangkau meja, dan tiket adalah catatan pekerjaan. Tautkan keduanya dalam alat agar kontak ulang pada hal yang sama terlihat. Laporan yang mencampur keduanya memberi angka volume yang tak dapat direkonsiliasi siapa pun dengan platform telefoni.

### Laporkan volume menurut saluran, kategori, dan tingkat ternormalisasi

**Tampilkan volume total, volume menurut saluran, volume menurut kategori, dan tingkat kontak per 100 pengguna.** Total saja mencampuradukkan pertumbuhan dengan masalah. Penurunan volume telepon mungkin pergeseran ke obrolan, dan kenaikan kontak portal mungkin keberhasilan swalayan yang disengaja. Plot deret selama setidaknya setahun agar musiman seperti awal semester dan akhir tahun keuangan terlihat.

### Pakai distribusi untuk setiap ukuran waktu

**Laporkan median dan persentil tinggi untuk waktu menjawab dan waktu penanganan.** Rata-rata distribusi miring menggambarkan hampir tak seorang pun. Median menunjukkan kontak tipikal, dan persentil ke-85 atau ke-95 menunjukkan seberapa buruk ekor yang lambat. Katakan berapa banyak kontak yang mendasari angka itu, dan tandai pembacaan sebagai tak andal ketika antrean hanya menangani segelintir kontak pada periode itu (lihat topik 1.6, Literasi statistik untuk metrik layanan).

### Perlakukan pembatalan sebagai sinyal permintaan dan penjadwalan staf

**Baca pembatalan bersama waktu menjawab dan pola kedatangan.** Orang membatalkan ketika penantian lebih lama dari yang mereka harapkan, sehingga tingkatnya naik bersama penantian, dan penantian naik ketika kedatangan melebihi kapasitas. [Teori antrean](https://en.wikipedia.org/wiki/Queueing_theory) menjelaskan mengapa penantian tumbuh tajam saat antrean mendekati utilisasi penuh, itulah sebabnya meja yang dijalankan hampir 100 persen sibuk selalu punya penantian panjang dan pembatalan tinggi. Jadwalkan staf menurut pola kedatangan per jam dan hari alih-alih rata-rata bulanan, dan tampilkan pembatalan menurut waktu hari (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean).

### Definisikan penyelesaian pada kontak pertama dengan cermat, lalu ukur dari sisi pengguna

**Pakai definisi berbasis kontak ulang dan konfirmasikan dengan pertanyaan singkat kepada pengguna.** Menghitung hanya kontak yang tidak kembali dalam jendela yang dinyatakan lebih sulit digelembungkan daripada bendera agen yang ditetapkan saat penutupan. Tambahkan pemeriksaan satu pertanyaan, seperti “apakah masalah Anda terselesaikan?”, dan bandingkan dengan angka kontak ulang. Ketika keduanya berselisih, jawaban pengguna panduan yang lebih baik, dan jurang itu menunjuk di mana penutupan terlalu dini.

### Pakai waktu penanganan untuk perencanaan, bukan target

**Perlakukan waktu penanganan sebagai masukan kapasitas dan diagnostik, dan jangan pernah menetapkan target yang harus dikalahkan agen.** Target pada waktu penanganan membayar untuk memburu-buru, transfer dini, dan dokumentasi tipis. Pakai distribusi menurut jenis kontak untuk merencanakan staf dan menemukan kontak yang memakan waktu jauh lebih lama daripada yang sejenis, yang sering menunjuk pada artikel yang hilang, alat yang kikuk, atau proses yang tak jelas. Bidik sebab sistem, bukan agen.

### Kaitkan metrik meja dengan pekerjaan pengiriman

**Tinjau kategori kontak teratas bersama tim pemilik layanan.** Setiap bulan, ambil lima kategori yang menghasilkan kontak per 100 pengguna terbanyak dan tanyakan perubahan apa di hulu yang akan menyingkirkannya: perbaikan, artikel, pesan kesalahan yang lebih baik, atau jalur swalayan. Catat jawabannya di backlog tim pemilik. Ini mengubah angka meja menjadi pekerjaan perbaikan dan merupakan pemakaian agile data yang paling jelas (lihat topik 3.6, Metrik manajemen pengetahuan, dan topik 3.7, Metrik swalayan dan otomatisasi).

### Sertakan setiap saluran dalam definisi yang sama

**Terapkan aturan jam dan hitungan yang sama pada telepon, obrolan, email, portal, datang langsung, dan pesan.** Saluran asinkron tidak punya antrean langsung, jadi waktu menjawab berarti hal berbeda di masing-masing. Definisikan jam per saluran, dan laporkan masing-masing terpisah sebelum menggabungkan. Meja yang hanya menerbitkan saluran terbaiknya menyembunyikan pengalaman orang lain.

### Hubungkan metrik dengan pengalaman pengguna

**Pasangkan ukuran operasional dengan pertanyaan kepuasan pasca-kontak dan isian teks bebas.** Jawaban cepat atas kontak yang kasar atau tidak membantu adalah hasil yang buruk, dan jam tak dapat melihatnya. Tampilkan tingkat respons dan komposisi responden di samping skor, karena hanya sebagian pengguna yang memilih sendiri yang menjawab (lihat topik 1.5, Sumber data dan instrumentasi). Baca komentar bersama orang yang menjawab kontak, dalam suasana tim.

### Jaga metrik di tingkat tim dan antrean

**Laporkan menurut antrean, saluran, layanan, dan tim, dan simpan data tingkat agen untuk percakapan pembinaan yang diikuti agen.** Memeringkat agen individu pada waktu penanganan atau tingkat penyelesaian mendorong memilih kontak mudah dan menghindari yang sulit. Ia juga merusak kepercayaan pada data, dan pengguna merasakan hasilnya dalam mutu bantuan. Pakai angka tingkat tim untuk bertanya apa yang dibutuhkan sistem.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Volume kontak | Agen mengecilkan hati pencatatan dengan mengarahkan pengguna ke saluran yang tak dihitung, atau memecah satu kontak menjadi beberapa agar antrean tampak sibuk; manajer menargetkan volume lebih rendah | Tingkat kontak per 100 pengguna dan rekonsiliasi berkala hitungan telefoni dengan hitungan tiket; aturan tetap bahwa setiap saluran dihitung |
| Tingkat kontak | Penyebut dipilih setelah kejadian (misalnya definisi “aktif” yang luas) agar tingkat tampak lebih baik | Definisi bertanggal tertulis untuk “pengguna aktif” dan hitungan mentah ditampilkan di samping tingkat |
| Waktu menjawab | Kontak dijawab oleh sapaan otomatis atau transfer ke antrean sepi, atau panggilan diangkat lalu ditahan; email mendapat balasan otomatis yang dihitung sebagai jawaban | Definisikan jam sebagai respons manusia pertama, dan lacak pembatalan dan kontak ulang di sampingnya |
| Tingkat pembatalan | Penelepon dijatuhkan sebelum diantrekan, masa tenggang diperpanjang, atau tawaran panggil balik dihitung sebagai kontak yang dijawab | Persentil waktu menjawab, tingkat penyelesaian panggil balik, dan masa tenggang yang diterbitkan |
| Waktu penanganan | Panggilan diburu-buru, ditransfer dini, atau diakhiri sebelum masalah selesai; catatan dibiarkan tipis; pekerjaan dipindah ke waktu setelah kontak yang dikecualikan jam | Penyelesaian pada kontak pertama, tingkat kontak ulang, dan tinjauan sampel mutu dokumentasi oleh tim |
| Tingkat penyelesaian pada kontak pertama | Tiket ditutup selama panggilan apa pun hasilnya, “hal yang sama” dibaca sempit, atau kontak sulit diklasifikasikan sebagai “tak diharapkan diselesaikan” | Tingkat kontak ulang, konfirmasi satu pertanyaan dari pengguna, dan audit berkala atas pengecualian oleh tim |
| Tingkat kontak ulang | Pengguna diminta membuka tiket baru untuk tindak lanjut, atau tindak lanjut dicatat di bawah kategori berbeda sehingga tak tertaut | Aturan penautan dalam alat, audit sampel kontak ulang yang tak tertaut, dan penyelesaian yang dilaporkan pengguna |

Pembacaan yang sehat adalah serangkaian angka yang sepakat satu sama lain. Waktu menjawab dan pembatalan bergerak bersama, waktu penanganan bervariasi dengan jenis kontak dan bukan dengan target hari itu, penyelesaian pada kontak pertama dan kontak ulang adalah bayangan cermin yang berjumlah dekat batas atasnya, dan jawaban pengguna atas “apakah masalah Anda terselesaikan?” sepakat dengan angka kontak ulang. Satu angka yang membaik tajam sementara yang lain datar adalah alasan untuk melihat cara pengumpulannya sebelum bersuka cita. Meja yang dimanipulasi biasanya menunjukkan gejalanya pada kontak ulang, kategori berulang dalam volume, dan keluhan yang naik.

## Kompromi: kelebihan dan kekurangan

| Pilihan | Keuntungan | Biaya atau risiko |
| --- | --- | --- |
| Rata-rata waktu penanganan sebagai judul | Sederhana, ada di setiap platform, mudah dijelaskan | Menghargai memburu-buru, menyembunyikan ekor, dan mengundang target yang merusak penyelesaian |
| Median dan persentil ke-85 untuk waktu | Menggambarkan kasus tipikal dan ekor yang lambat | Butuh cukup kontak agar stabil dan sedikit lebih banyak penjelasan |
| Penyelesaian pada kontak pertama menurut bendera penutupan agen | Mudah dikumpulkan | Mudah digelembungkan dan sulit dibandingkan antarmeja |
| Penyelesaian pada kontak pertama menurut jendela kontak ulang | Sulit dimanipulasi dan lebih dekat pada pengalaman pengguna | Butuh penautan yang baik dalam alat dan menunggu jendela berlalu sebelum dapat dilaporkan |
| Pembatalan dengan masa tenggang | Menyingkirkan penutupan tak disengaja | Masa tenggang dapat diperpanjang untuk menyanjung angka |
| Tingkat kontak per 100 pengguna | Memisahkan pertumbuhan dari masalah | Bergantung pada hitungan pengguna yang tepercaya dan definisi “aktif” yang jelas |
| Survei pasca-kontak | Menangkap apa yang tak dapat ditangkap jam | Tingkat respons rendah dan tak merata, dan bias menuju pengguna dengan perasaan kuat |
| Pelaporan hanya menurut tim dan antrean | Melindungi kepercayaan dan memusatkan perhatian pada sistem | Memberi lebih sedikit rincian untuk pembinaan individu, yang butuh proses lain yang pribadi |

Tak ada set ukuran yang menghilangkan ketegangan antara kecepatan dan kepedulian. Meja yang menjawab setiap kontak dalam hitungan detik dan menyelesaikan sedikit punya antrean yang baik dan layanan yang buruk, dan meja yang meluangkan waktu menyelesaikan dengan benar akan menunjukkan waktu penanganan dan penantian lebih panjang. Jalan keluarnya adalah menyepakati hasil mana yang paling penting kuartal ini, membuat imbal balik eksplisit, dan meninjau pasangan metrik yang menjaganya seimbang. Lebih cepat lebih baik hanya selama penyelesaian bertahan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa arti “kontak” di sini, dan apakah hitungan kita cocok dengan yang dilaporkan masing-masing platform telefoni dan alat ITSM?**
Minta kelompok menelusuri satu hari kontak melalui setiap saluran dan membandingkan hitungan dari kedua sistem. Catat kontak yang tak pernah menjadi tiket dan tiket yang tak pernah dimulai sebagai kontak. Fasilitator sebaiknya mengharapkan jurang pada awalnya dan memperlakukannya sebagai temuan tentang definisi, bukan kesalahan orang. Sepakati aturan untuk laporan berikutnya dan siapa pemiliknya.

**2. Ketika kita mengatakan kontak diselesaikan pada kontak pertama, bagaimana kita tahu pengguna akan setuju?**
Tinjau sepuluh kontak terbaru yang ditandai sebagai penyelesaian pada kontak pertama dan periksa apakah ada pengguna yang kembali pada hal yang sama. Tanyakan apa yang dapat dilakukan agen secara berbeda pada yang kembali. Diskusi biasanya menunjukkan di mana penutupan terjadi sebelum pengguna siap. Putuskan apakah menambah konfirmasi satu pertanyaan dan seperti apa jendela kontak ulang.

**3. Apa yang terjadi pada orang yang menunggu, dan kapan mereka menyerah?**
Lihat kurva pembatalan menurut waktu menunggu. Kebanyakan meja menemukan titik yang di luarnya orang pergi dalam jumlah besar, dan titik itu adalah batas praktis antrean. Tanyakan panggil balik, obrolan, atau jawaban otomatis apa yang ditawarkan, dan apakah ada yang dihitung sebagai dijawab padahal masalah tak terselesaikan. Fasilitator dapat memakai ini untuk membuka diskusi tentang penjadwalan staf per jam, bukan per bulan.

**4. Angka waktu penanganan kita yang mana akan berubah jika kita memperhatikan pekerjaan setelah kontak dan menunggu?**
Daftar apa yang termasuk dalam jam dan apa yang tidak. Tanyakan apakah ada yang merasakan tekanan untuk mempersingkat panggilan, dan apa yang mereka lakukan. Pertanyaan ini lebih mudah dijawab dalam tim daripada dalam laporan, jadi beri orang kesempatan berbicara tanpa atribusi. Sepakati definisi dan apakah waktu penanganan hanya dipakai untuk perencanaan.

**5. Lima kategori mana yang menghasilkan kontak per 100 pengguna terbanyak kuartal lalu, dan siapa yang memiliki perbaikan untuk masing-masing?**
Bawa data kategori dan pemilik layanan yang mendasarinya ke meja yang sama. Untuk setiap kategori, tanyakan apakah respons terbaik adalah perbaikan, artikel, pesan yang lebih baik, atau jalur swalayan. Intinya pulang dengan item di backlog dan pemilik bernama. Tinjau daftar itu lagi kuartal depan untuk melihat mana yang bergerak.

**6. Apakah kita melaporkan ini di tingkat tim dan antrean, dan apakah ada yang memakainya untuk membandingkan individu?**
Tanyakan langsung kepada kelompok apakah salah satu angka ini pernah dipakai menilai seseorang, dan apa efeknya. Bahas apa yang akan dihentikan meja jika perbandingan individu berakhir, dan apa yang akan dimulainya. Fasilitator sebaiknya mencatat contoh apa pun dan membawanya kepada pemilik metrik untuk keputusan tentang kebijakan. Tujuannya komitmen tertulis bahwa data menggambarkan sistem.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman mendapat pandangan terbaik atas layanannya sendiri dari meja. Kontak per 100 pengguna setelah rilis cepat menunjukkan apakah perubahan membingungkan orang, dan kategori menunjukkan apa yang diperbaiki berikutnya. Tim sebaiknya mengharapkan tinjauan bulanan atas kategori teratas dan memperlakukannya sebagai masukan backlog, tanpa menyalahkan meja karena melaporkan apa yang dikatakan pengguna. Minta sampel kontak dari meja selain hitungan, karena kata yang dipakai pengguna sering mengungkap masalah pelabelan atau desain.

### Tim layanan dan operasi

Staf meja dan pemimpinnya butuh angka yang membantu mereka merencanakan dan memperbaiki tanpa berubah menjadi target. Penjadwalan staf per jam dari pola kedatangan, tinjauan kontak ulang, dan permintaan artikel adalah keluaran paling berguna. Staf sebaiknya punya suara dalam bagaimana metrik didefinisikan, karena mereka tahu di mana jam menyesatkan. Mereka sebaiknya melihat angka tim mereka sendiri lebih dulu dan dapat menantangnya.

### Kepemimpinan dan tata kelola

Pemimpin butuh set pendek angka yang sepakat satu sama lain: volume dan tingkat kontak, waktu menjawab dan pembatalan, penyelesaian pada kontak pertama dan kontak ulang, dan skor kepuasan pengguna beserta tingkat responsnya. Mereka sebaiknya meminta distribusi dan catatan tentang perubahan definisi, dan menolak menetapkan satu target pada waktu penanganan atau pada volume. Target pada kecepatan saja mengundang manipulasi yang dijelaskan di atas. Tata kelola sebaiknya mencatat siapa memiliki setiap definisi (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

### Pelanggan dan pengguna

Pengguna peduli apakah mereka tersambung, apakah mereka diperlakukan dengan baik, dan apakah masalah tetap terselesaikan. Mereka tidak peduli waktu penanganan. Memberi tahu mereka apa yang diukur meja dan menindaklanjuti umpan balik mereka membangun kepercayaan, begitu pula memastikan saluran yang mereka sukai diukur dan dijaga stafnya. Pelanggan yang membeli layanan dilayani oleh komitmen jelas dalam SLA atau perjanjian pengalaman (lihat topik 5.1, Metrik SLA, OLA, dan XLA, dan topik 6.2, Perjanjian tingkat pengalaman).

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional menjalankan service desk dengan sekitar selusin staf untuk kira-kira 4.000 pengguna klinis dan administratif. Angka di bawah bersifat ilustratif dan tidak berasal dari organisasi nyata mana pun.

Tampilan mingguan tim menunjukkan 1.900 kontak (ilustratif), yaitu tingkat kontak 47,5 kontak per 100 pengguna (ilustratif). Waktu menjawab telepon memiliki median 40 detik dan persentil ke-85 sebesar 6 menit (ilustratif). Pembatalan 14 persen (ilustratif) dan naik tajam pada pagi hari kerja antara 08.00 dan 09.30. Median waktu penanganan 7 menit, dan persentil ke-85 adalah 22 menit (ilustratif). Penyelesaian pada kontak pertama menurut jendela kontak ulang adalah 61 persen (ilustratif), dan tingkat kontak ulang tujuh hari 19 persen (ilustratif).

Pada tinjauan bulanan, kepala meja dan tim aplikasi klinis melihat kategori. Masalah masuk dan lencana menyumbang porsi besar kontak pagi, dan perubahan terbaru pada masuk aplikasi klinis menghasilkan lonjakan kontak tentang pesan kesalahan yang sama. Meja dan tim aplikasi memutuskan melakukan tiga hal. Mereka akan mengubah pesan kesalahan dan menambahkan tautan ke artikel, mereka akan menambahkan opsi panggil balik untuk puncak pagi, dan mereka akan memajukan mulai satu shift satu jam untuk menutupi pola kedatangan 08.00. Mereka akan meninjau pembatalan, kontak ulang, dan tingkat kontak untuk kategori itu setelah empat pekan.

Di tengah kuartal seorang manajer mengusulkan target waktu penanganan 5 menit untuk mengurangi antrean. Tim menunjukkan bahwa kontak persentil ke-85 adalah yang lambat yang paling penting dan bahwa target akan mendorong agen mengakhiri panggilan lebih dini. Mereka juga memperhatikan bahwa angka penyelesaian pada kontak pertama naik menjadi 78 persen (ilustratif) dalam satu pekan sementara tingkat kontak ulang naik menjadi 27 persen (ilustratif). Tinjauan menemukan beberapa shift mulai menutup tiket selama panggilan dengan catatan agar pengguna menelepon kembali, yang dihitung sebagai penyelesaian pada kontak pertama. Tim mengembalikan definisi berbasis kontak ulang, menambahkan pertanyaan konfirmasi pengguna, dan membuang target waktu penanganan. Pembatalan, waktu menjawab, dan kontak ulang dilaporkan bersama sejak saat itu.

## Sudut pandang sektor

**Startup.** Meja sering berupa kotak masuk bersama atau saluran obrolan yang ditangani siapa pun yang bebas. Hitung kontak menurut saluran, beri tag kategori, dan lihat lima teratas setiap bulan bersama orang yang membangun produk. Jangan membeli platform pusat panggilan sebelum volumenya membenarkan, dan jangan menetapkan target kecepatan ketika dua orang menjawab semua kontak.

**Bisnis kecil.** Satu orang atau penyedia alihdaya biasanya menjalankan service desk yang dihosting. Pakai laporan standar alat, minta pemasok mendefinisikan kontak, penyelesaian, dan pembatalan secara tertulis, dan ekspor data mentah sesekali. Pertanyaan berulang singkat kepada pengguna, seperti “apakah masalah Anda terselesaikan?”, memberi lebih banyak wawasan daripada dasbor panjang.

**Perusahaan besar.** Banyak antrean, bahasa, alat, dan pemasok menyebabkan definisi berbeda untuk kata yang sama. Sepakati definisi bersama untuk kontak, penyelesaian pada kontak pertama, dan kontak ulang, serta set saluran bersama. Laporkan menurut antrean dan layanan, dengan tampilan standar untuk pimpinan, dan pakai data manajemen tenaga kerja untuk menjadwalkan staf menurut pola kedatangan. Bandingkan antrean hanya setelah memeriksa bahwa mereka memakai definisi yang sama.

**Pemerintah dan sektor publik.** Catatan mungkin punya kewajiban retensi, akses, audit, dan privasi, dan kontrak mungkin menetapkan metrik dan target untuk meja alihdaya. Baca metrik kontrak dengan kritis dan tambahkan ukuran pagar pembatas ke pelaporan meskipun tidak diwajibkan. Simpan jejak audit perubahan definisi, dan hindari mengumpulkan data pribadi yang tak diperlukan. Layanan publik sering melayani pengguna dengan pilihan saluran terbatas, jadi aksesibilitas tiap saluran adalah bagian gambaran (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasi untuk metrik meja yang lebih baik adalah layanan yang lebih murah dan lebih baik, dan imbal hasilnya datang di tiga tempat. Pertama, lebih sedikit kontak berulang: setiap kontak ulang adalah pekerjaan yang tak perlu dilakukan meja dan waktu yang tak ingin dihabiskan pengguna. Kedua, perbaikan di hulu: data kategori meja dapat menyingkirkan seluruh kelas kontak ketika tim pengiriman menindaklanjutinya. Ketiga, penjadwalan staf yang lebih baik: data pola kedatangan memungkinkan manajer menempatkan orang saat pengguna membutuhkannya, yang menurunkan pembatalan dan waktu menganggur sekaligus.

Biaya pengumpulan sederhana bila platform telefoni dan alat ITSM sudah mencatat peristiwa. Biaya utamanya adalah waktu menyepakati definisi, memperbaiki penautan antara kontak dan tiket, menambah pertanyaan pasca-kontak singkat, dan meninjau data bersama tim pengiriman.

Tak ada angka imbal hasil ditawarkan di sini, karena angka terbitan bervariasi menurut organisasi dan metodenya, dan tidak satu pun diverifikasi untuk topik ini. Perkirakan imbal hasil dari data Anda sendiri. Ambil hitungan kontak ulang dan waktu penanganan terukur, kalikan dengan biaya satu jam agen, dan bandingkan dengan biaya perbaikan. Gambarkan hasilnya sebagai estimasi beserta asumsinya, dan tinjau kembali setelah perubahan (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Menargetkan rata-rata waktu penanganan.** Itu menghargai memburu-buru dan transfer dini. Pakai distribusi menurut jenis kontak untuk perencanaan, dan pasangkan dengan penyelesaian pada kontak pertama dan kontak ulang.
- **Menghitung bendera penutupan yang ditetapkan agen sebagai penyelesaian pada kontak pertama.** Bendera dapat ditetapkan apa pun hasilnya. Pakai jendela kontak ulang dan konfirmasi pengguna.
- **Memeringkat agen individu.** Itu mendorong memilih yang mudah dan perilaku defensif. Laporkan menurut tim dan antrean, dan jaga percakapan individu pribadi dan suportif.
- **Melaporkan rata-rata semua saluran yang menyembunyikan saluran terlemah.** Telepon, obrolan, dan email berperilaku berbeda. Laporkan tiap saluran terpisah sebelum menggabungkan.
- **Membaca volume tanpa penyebut.** Kenaikan mungkin pertumbuhan. Tampilkan kontak per 100 pengguna dan campuran kategori.
- **Meninggalkan meja dari keputusan pengiriman.** Hitungan yang dilaporkan ke dasbor dan tak pernah dibahas dengan tim produk disia-siakan. Adakan tinjauan bulanan atas kategori teratas bersama pemiliknya.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | Tiap orang menghitung kontak secara berbeda | Beberapa definisi ditulis untuk sebagian antrean | Satu definisi tertulis per metrik, termasuk awal dan akhir jam dan pengecualian | Perubahan definisi dicatat dan ditinjau sesuai jadwal | Definisi dibagikan kepada pemasok dan pelanggan dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Penangkapan dan kualitas data | Hitungan dirakit dengan tangan dari ekspor | Data telefoni dan ITSM dilaporkan terpisah | Kontak dan tiket tertaut, dengan penangkapan otomatis lintas saluran | Penautan, kelengkapan, dan rekonsiliasi diukur dan diplot tren | Data kontak dibagikan antartim dan pemasok lewat antarmuka yang disepakati |
| Pemakaian dalam perbaikan | Angka dilaporkan tetapi jarang dibahas | Tinjauan sesekali atas periode sibuk | Tinjauan bulanan kategori teratas bersama pemilik layanan | Perbaikan direncanakan, didanai, dan diperiksa terhadap kontak ulang dan volume | Data meja menggerakkan prioritas backlog antartim produk dan pemasok |
| Pagar pembatas dan kepercayaan | Target kecepatan diterapkan pada individu | Sedikit kesadaran tentang manipulasi | Ukuran berpasangan dilaporkan bersama dan tanpa peringkat individu | Pemeriksaan manipulasi diaudit tim dan konfirmasi pengguna dipakai | Pengguna dan staf membantu menetapkan ukuran dan melihat hasilnya |

## Daftar periksa

- [ ] Kontak dan tiket didefinisikan dan dihitung terpisah, dan hitungan cocok.
- [ ] Setiap saluran punya jam tertulis untuk waktu menjawab dan cara menangani balasan otomatis yang dinyatakan.
- [ ] Ukuran waktu dilaporkan sebagai median dan persentil tinggi dengan ukuran sampel.
- [ ] Pembatalan punya masa tenggang tertulis dan ditampilkan bersama waktu menjawab.
- [ ] Penyelesaian pada kontak pertama memakai jendela kontak ulang dan makna “hal yang sama” yang dinyatakan.
- [ ] Konfirmasi pengguna satu pertanyaan dikumpulkan, dengan tingkat responsnya ditampilkan.
- [ ] Tingkat kontak per 100 pengguna dilaporkan, dengan definisi tertulis “pengguna aktif.”
- [ ] Tak ada target waktu penanganan yang ditetapkan untuk agen, dan tak ada metrik yang memeringkat individu.
- [ ] Kategori kontak teratas ditinjau bulanan bersama tim pemilik, dan tindakan masuk ke backlog.
- [ ] Definisi dikendalikan versinya dan setiap perubahan diberi tanggal.

## Prompt AI

**Susun definisi tepat untuk ukuran inti meja.**

```text
Saya menulis definisi untuk ukuran service desk ini: [list of measures, for
example contact volume, time to answer, abandonment, handle time, first contact
resolution, recontact]. Saluran kami [list channels] dan alat kami [telephony or
chat platform and ITSM tool]. Untuk setiap ukuran, susun definisi, rumus, awal dan
akhir jam, inklusi dan eksklusi, satuan, dan sumber data. Pakai istilah yang sama
sepanjang dan jangan mengarang nilai acuan atau target. Daftar asumsi Anda dan
pertanyaan yang harus saya jawab untuk menuntaskan.
```

**Tinjau set angka meja untuk tanda manipulasi.**

```text
Berikut angka service desk kami untuk [period]: [paste figures such as volume,
time to answer percentiles, abandonment, handle time percentiles, first contact
resolution, recontact]. Definisi kami [paste definitions]. Cari pola yang
menyarankan sebuah angka membaik karena cara ia dikumpulkan dan bukan karena
layanan membaik, dan sarankan apa yang diperiksa dalam data untuk masing-masing.
Jangan menuduh individu dan jangan mengarang ambang. Daftar asumsi Anda dan apa
yang tidak dapat Anda tentukan dari data yang diberikan.
```

**Siapkan tinjauan bulanan kategori kontak teratas.**

```text
Saya menyiapkan tinjauan bulanan kategori kontak service desk untuk [service or
team]. Saya punya [category counts and contacts per 100 users for the last three
months]. Susun agenda, templat tabel singkat, dan daftar pertanyaan untuk diajukan
kepada setiap pemilik layanan tentang sebab, perbaikan, artikel, dan opsi
swalayan. Sarankan cara mencatat tindakan dalam backlog. Jangan mengarang angka
atau sebab. Daftar asumsi Anda dan data yang harus saya bawa.
```

**Rancang survei pasca-kontak singkat.**

```text
Saya ingin mengukur apakah pengguna merasa terbantu setelah menghubungi [service
desk name] lewat [channel]. Susun [number] pertanyaan netral, termasuk satu
tentang apakah masalah terselesaikan, rencana kapan mengirimkannya, dan cara
melaporkan tingkat respons dan komposisi responden. Tandai kata-kata yang dapat
membiaskan jawaban dan catat pertimbangan privasi mengingat data akan disimpan di
[tool]. Jangan mengarang tingkat respons acuan. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik mana yang mendefinisikan metrik terkait dan pagar pembatas yang harus berada di samping ukuran meja.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penyuntingan topik ini menjaga setiap metrik dipasangkan dengan vektor manipulasi dan pagar pembatas.

## Poin penting

- Hitung kontak dan tiket terpisah, definisikan keduanya, dan normalkan volume terhadap ukuran basis pengguna.
- Laporkan waktu sebagai median dan persentil tinggi, dan katakan berapa banyak kontak yang mendasari tiap angka.
- Baca kecepatan menjawab, pembatalan, dan waktu penanganan sebagai tanda upaya, dan pasangkan dengan penyelesaian pada kontak pertama dan kontak ulang sebagai tanda hasil.
- Definisikan penyelesaian pada kontak pertama menurut apakah pengguna kembali, dan konfirmasikan dengan pemeriksaan satu pertanyaan.
- Pakai meja sebagai sensor: tinjau kategori teratas setiap bulan bersama tim pemilik layanan.
- Ukur antrean, saluran, dan layanan, dan jangan pernah memeringkat agen individu.

## Referensi dan bacaan lanjutan

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
