# Ukuran alur

**Empat hitungan dan jam yang sederhana, pekerjaan yang sedang berjalan, throughput, usia item kerja, dan cycle time, memberi tahu tim di mana pekerjaannya macet dan apa yang dapat dijanjikannya, asalkan masing-masing didefinisikan sama untuk pekerjaan proyek dan pekerjaan layanan dan dibaca sebagai distribusi, bukan rata-rata.**

## Gambaran umum dan motivasi

Kebanyakan dasbor pengiriman dan layanan melaporkan apa yang selesai bulan lalu. Ukuran alur menambahkan pandangan yang penting selagi pekerjaan masih bergerak: berapa banyak yang sedang berjalan sekarang, seberapa tua setiap item, seberapa cepat item selesai, dan berapa lama waktunya. Literatur alur memberi keempat ukuran ini definisi yang tepat. Kanban Guide (kanbanguides.org, versi terkini per Oktober 2026) adalah salah satu sumber yang jelas: ia menamai keempatnya sebagai ukuran yang dipakai tim untuk memeriksa dan menyesuaikan alur kerjanya, dan topik ini mengikuti definisi itu tanpa mensyaratkan metode atau papan tertentu.

Keempat definisi itu pendek. **Pekerjaan yang sedang berjalan (WIP)** adalah jumlah item kerja yang sudah dimulai tetapi belum selesai. **Throughput** adalah jumlah item kerja yang selesai per satuan waktu. **Usia item kerja** adalah waktu terlewat antara saat item kerja dimulai dan waktu sekarang, sehingga hanya berlaku untuk item yang masih berjalan. **Cycle time** adalah waktu terlewat antara saat item kerja dimulai dan saat selesai, menghitung kedua hari secara inklusif dalam rumusan Guide. **Item kerja** adalah satuan pekerjaan yang dipilih tim untuk dilacak sebagai satu hal, seperti cerita pengguna, insiden, permintaan layanan, atau perubahan. **Alur kerja** adalah set keadaan antara “dimulai” dan “selesai,” dan **definisi alur kerja** tertulis tim menyatakan keadaan mana itu.

Dua dari empat itu tentang sistem secara keseluruhan (WIP dan throughput) dan dua tentang item individual (usia dan cycle time). Pasangan untuk item yang selesai adalah throughput dan cycle time. Pasangan untuk item yang belum selesai adalah WIP dan usia. Pemisahan ini penting karena ukuran item selesai bersifat tertinggal: ia memberi tahu bagaimana hal-hal berjalan. Ukuran item belum selesai bersifat pendahulu: ia memberi tahu apa yang akan terjadi, selagi masih ada waktu untuk bertindak. Usia item kerja adalah yang paling kurang dimanfaatkan dari keempatnya, dan biasanya yang pertama layak ditambahkan ke papan.

Hubungan antara tiga yang pertama bukan kebetulan. [Hukum Little](https://en.wikipedia.org/wiki/Little%27s_law), hasil dari [teori antrean](https://en.wikipedia.org/wiki/Queueing_theory), menyatakan bahwa dalam sistem stabil jumlah rata-rata item dalam sistem sama dengan laju kedatangan rata-rata dikalikan waktu rata-rata tiap item berada di sana. Dalam istilah alur, WIP rata-rata terikat pada throughput rata-rata dan cycle time rata-rata. Hukum itu hanya berlaku dalam kondisi yang dibahas kembali pada Rekomendasi (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean, untuk bahasan lengkapnya). Konsekuensi praktisnya sederhana: jika throughput tetap kira-kira konstan, lebih banyak pekerjaan yang sedang berjalan berarti cycle time lebih panjang.

Pandangan agile dan ITIL bertemu di sini dengan kosakata berbeda. Dalam praktik agile, ukuran alur milik papan tim dan dipakai dalam tinjauan reguler dengan pemangku kepentingan dan dalam refleksi tim sendiri tentang cara memperbaiki. Dalam ITIL 4, angka yang sama menggambarkan bagaimana manajemen insiden, manajemen permintaan layanan, dan pemberdayaan perubahan memindahkan catatan melalui keadaan, dan mereka menyuapi praktik pengukuran dan pelaporan serta manajemen tingkat layanan. Insiden adalah item kerja. Permintaan layanan adalah item kerja. Keduanya punya awal, akhir, dan usia di antaranya. Service desk ITIL dan tim pengiriman melakukan pekerjaan sejenis dari sudut pengukuran: item datang, menunggu, dikerjakan, dan pergi.

Ukuran ini juga terhubung dengan [pengembangan perangkat lunak lean](https://en.wikipedia.org/wiki/Lean_software_development), yang memperlakukan menunggu sebagai sumber utama pemborosan, dan dengan [diagram alur kumulatif](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), bagan kedatangan dan keberangkatan kumulatif yang menunjukkan WIP, throughput, dan cycle time sekilas. Bagan itu opsional. Keempat ukuran dapat dihitung dari tabel item dengan dua tanggal masing-masing.

Karena cycle time dan usia adalah durasi dengan ekor panjang di kanan, satu rata-rata menyesatkan. [Persentil](https://en.wikipedia.org/wiki/Percentile) seperti ke-85 memberi tahu tim “85 persen item selesai dalam sekian hari,” yang merupakan perkiraan dan janji yang dapat dipakai (lihat topik 1.6, Literasi statistik untuk metrik layanan). Literatur alur menyebut janji semacam itu **ekspektasi tingkat layanan (SLE)**: berapa lama item tipikal sebaiknya memakan waktu, dinyatakan sebagai waktu dan probabilitas. SLE adalah perkiraan tim sendiri. Ia bukan [perjanjian tingkat layanan](https://en.wikipedia.org/wiki/Service-level_agreement), yang merupakan komitmen yang dinegosiasikan dengan pelanggan (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

## Prinsip utama

- **Hitung item utuh yang cocok dengan satu definisi dimulai dan selesai.** Memecah atau menggabung item untuk memperbaiki angka menghancurkan keterbandingan. Sepakati apa itu item kerja, dan jaga definisinya stabil.
- **Definisikan jam sebelum mengumpulkan data.** Cycle time dan usia bergantung pada keadaan mana yang berarti “dimulai” dan mana “selesai.” Tuliskan keduanya, dan catat setiap perubahannya (lihat topik 1.5, Sumber data dan instrumentasi).
- **Lihat pekerjaan yang belum selesai lebih dulu.** Usia dan WIP adalah satu-satunya ukuran yang masih dapat mengubah hasil. Throughput dan cycle time mengonfirmasi apa yang sudah terjadi.
- **Laporkan distribusi, bukan rata-rata.** Tampilkan persentil untuk cycle time dan usia, dan deretan hitungan mingguan untuk throughput, agar bentuk variasi terlihat.
- **Pakai ukuran untuk mengelola alur kerja, bukan orang.** Satuan analisisnya adalah alur kerja tim. Jangan pernah memeringkat individu menurut item yang diselesaikan atau cycle time.
- **Batasi WIP agar alur dapat diprediksi.** Batas WIP adalah kebijakan, bukan target. Batas itu ada untuk mengungkap antrean dan memperpendek cycle time.
- **Pisahkan waktu alur dari akurasi perencanaan.** Ukuran alur menggambarkan bagaimana pekerjaan bergerak. Dengan sendirinya ia tidak mengatakan apa pun tentang apakah pekerjaan yang tepat dipilih (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur).

## Definisi metrik

Setiap baris menghitung item pada alur kerja satu tim. Item yang masih berjalan dikecualikan dari cycle time dan throughput, dan item yang selesai dikecualikan dari usia dan WIP.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pekerjaan yang sedang berjalan (WIP) | Item kerja yang dimulai tetapi belum selesai | Hitungan item yang stempel waktu mulainya terisi dan stempel waktu selesainya kosong, pada saat yang dinyatakan (misalnya akhir setiap hari); item backlog yang belum dimulai dan item yang selesai dikecualikan | item | Riwayat status pelacak isu atau alat ITSM | Manajemen insiden; manajemen permintaan layanan; pemberdayaan perubahan | Batas WIP; backlog tim yang sedang dikerjakan | Potret harian, ditinjau mingguan |
| Throughput | Item kerja yang selesai per satuan waktu | Hitungan item yang stempel waktu selesainya jatuh pada periode itu (misalnya pekan kalender, Senin sampai Minggu); item yang selesai lalu dibuka kembali dihitung lagi hanya bila merupakan item baru | item per pekan | Riwayat status pelacak isu atau alat ITSM | Manajemen insiden; pemenuhan permintaan layanan | Throughput; item yang selesai | Mingguan |
| Usia item kerja | Waktu terlewat sebuah item belum selesai berada dalam proses | Waktu sekarang dikurangi stempel waktu mulai, untuk item yang masih berjalan; jam berjalan melewati waktu terhalang; item yang belum dimulai dikecualikan | hari | Riwayat status pelacak isu atau alat ITSM | Manajemen insiden; manajemen masalah | Usia item kerja; check-in harian tim | Harian, ditinjau pada setiap check-in tim |
| Cycle time | Waktu terlewat dari awal sampai akhir sebuah item yang selesai | Stempel waktu selesai dikurangi stempel waktu mulai, dalam hari kalender, inklusif; jam dimulai pada perpindahan pertama ke keadaan dimulai dan berhenti pada perpindahan ke keadaan selesai; laporkan median serta persentil ke-85 dan ke-95 | hari | Riwayat status pelacak isu atau alat ITSM | Manajemen insiden; pemenuhan permintaan layanan; pemberdayaan perubahan | Cycle time; durasi item | Mingguan, dengan jendela bergulir 8 sampai 12 pekan |
| Pencapaian SLE | Porsi item selesai yang memenuhi ekspektasi tingkat layanan tim | Item selesai dengan cycle time pada atau di bawah SLE / semua item yang selesai dalam jendela; item yang masih terbuka dikecualikan | persen | Diturunkan dari cycle time | Manajemen tingkat layanan | Ekspektasi tingkat layanan | Bulanan |
| Porsi waktu terhalang | Porsi hari-berjalan yang dihabiskan item ditandai terhalang | Hari-item dalam keadaan terhalang / hari-item dalam proses, selama jendela; jam untuk keduanya dimulai pada stempel waktu mulai | persen | Bendera pelacak isu atau status terhalang di alat ITSM | Manajemen insiden; manajemen masalah; manajemen pemasok | Hambatan; kendala yang diangkat dalam check-in harian tim | Mingguan |

Cycle time di sini mengikuti definisi literatur alur. Ia berbeda dari gagasan ITIL tentang waktu penyelesaian, yang sering diukur sejak tiket dibuka dan dapat mengecualikan waktu ditahan. Tim yang ingin membandingkan keduanya harus melabelinya, dan topik 2.2 membahas jam secara rinci (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur). Pencapaian SLE dan porsi waktu terhalang diturunkan dari empat ukuran inti dan disertakan karena begitulah tim memakai ukuran itu sehari-hari.

## Rekomendasi

### Definisikan alur kerja dan item

**1. Tulis definisi alur kerja sebelum membuat bagan apa pun.** Daftar keadaannya, katakan mana yang berarti “dimulai” dan mana yang berarti “selesai,” dan nyatakan siapa yang boleh memindahkan item di antaranya. Literatur alur menyebut ini definisi alur kerja, dan setiap ukuran dalam topik ini bergantung padanya. Jika dua tim mendefinisikan “dimulai” secara berbeda, cycle time mereka tidak dapat dibandingkan.

**2. Pilih ukuran item kerja yang dapat diselesaikan tim dalam hitungan hari, bukan bulan.** Item kerja adalah apa pun yang dilacak tim sebagai satu satuan: cerita, insiden, permintaan. Item yang sangat besar menyembunyikan usianya sendiri dan membuat throughput bergumpal. Pakai aturan stabil seperti “satu item adalah satu hal yang bisa disadari pelanggan atau pengguna,” dan hindari memecah item hanya untuk memperbaiki hitungan.

**3. Perlakukan pekerjaan proyek dan pekerjaan layanan sebagai alur sejenis, dengan pola kedatangan berbeda.** Pekerjaan proyek datang sebagai backlog terencana yang ditarik tim. Pekerjaan layanan, seperti insiden dan permintaan, datang tak terduga dan dapat mendahului pekerjaan terencana. Ukur keduanya pada papan yang sama atau tabel yang sama, diberi tag menurut jenis, agar Anda dapat melihat bagaimana interupsi memengaruhi pekerjaan terencana (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).

### Ukur pekerjaan yang belum selesai

**4. Mulailah dengan usia item kerja pada papan.** Tandai setiap kartu dengan usianya dalam hari dan urutkan atau sorot menurut pita persentil yang diambil dari riwayat cycle time tim sendiri. Item yang lebih tua dari persentil ke-85 cycle time masa lalu adalah sinyal untuk bertanya apa yang menghalanginya hari ini. Ini mengubah ukuran tertinggal menjadi dorongan harian.

**5. Hitung WIP dengan jujur dan tetapkan batas yang dapat Anda pertahankan.** Hitung setiap item yang dimulai dan belum selesai, termasuk pekerjaan yang menunggu tinjauan atau pemasok. Pilih batas awal dari WIP rata-rata tim saat ini dan turunkan selangkah demi selangkah, mencatat apa yang berubah pada cycle time dan usia. Perlakukan batas sebagai kebijakan yang diperiksa tim, dan pakai hukum Little hanya sebagai pemeriksaan kewajaran atas rata-rata (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean).

**6. Tunjukkan pekerjaan terhalang sebagai waktu, bukan bendera.** Bendera terhalang yang tak dihitung siapa pun menjadi alasan. Catat kapan item menjadi terhalang dan kapan dibebaskan, lalu laporkan porsi waktu terhalang. Biarkan jam item terus berjalan melewati hambatan, karena penantian pelanggan tidak berhenti (lihat topik 3.3, Waktu respons dan penyelesaian insiden, tempat status ditahan ITIL menimbulkan pertanyaan yang sama).

### Ukur pekerjaan yang sudah selesai

**7. Laporkan cycle time sebagai distribusi dengan persentil.** Tampilkan median, persentil ke-85, dan persentil ke-95, dan plot setiap item selesai sebagai titik sepanjang waktu (diagram sebar) agar tim dapat melihat gugusan dan pencilan. Nyatakan jendelanya, misalnya 10 pekan terakhir. Rata-rata menyembunyikan ekor panjang yang dirasakan pelanggan.

**8. Laporkan throughput sebagai deretan mingguan, bukan satu total.** Plot hitungan item selesai per pekan sebagai [bagan lari](https://en.wikipedia.org/wiki/Run_chart) atau [bagan kendali](https://en.wikipedia.org/wiki/Control_chart). Hitungan mingguan bervariasi secara alami, jadi bacalah perubahan terhadap variasi itu sebelum bereaksi, dan jangan pernah membandingkan throughput dua tim sebagai peringkat kinerja, karena ukuran dan definisi item berbeda (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman).

**9. Tetapkan ekspektasi tingkat layanan dari data Anda sendiri dan tinjau.** Ambil cycle time tim untuk beberapa pekan terakhir, pilih probabilitas yang dapat diterima tim, dan baca jumlah harinya dari persentil. Terbitkan sebagai “85 persen item selesai dalam 9 hari atau kurang,” memakai nilai nyata dari data Anda. Tinjau kembali ketika alur kerja berubah. SLE adalah perkiraan yang dibuat tim tentang dirinya sendiri, jadi pisahkan dari target kontraktual.

### Pakai ukuran itu

**10. Pakai keempatnya bersama, dan ajukan empat pertanyaan yang sama pada setiap check-in tim.** Apa yang sedang berjalan, dan apakah dalam batas? Item mana yang tertua, dan apa yang akan membukanya? Berapa banyak yang kita selesaikan, dan apakah itu dalam rentang biasa? Berapa lama yang terbaru dibandingkan ekspektasi kita? Keempat pertanyaan menggantikan laporan status dan memakan beberapa menit.

**11. Terapkan ukuran yang sama pada antrean layanan, dengan batas jelas untuk jam.** Untuk insiden dan permintaan, “dimulai” mungkin penugasan pertama ke orang atau tim, sedangkan jam penyelesaian ITIL dimulai saat pencatatan. Keduanya sah dan menjawab pertanyaan berbeda: seberapa tanggap penerimaan, dan berapa lama pekerjaan itu sendiri. Sebut setiap jam, dan jangan campur dalam satu bagan (lihat topik 3.5, Metrik pemenuhan permintaan layanan).

**12. Ubah alur kerja, ukur lagi, dan simpan riwayatnya.** Ketika tim mengubah batas WIP, keadaan, atau kebijakan, catat tanggal dan alasannya, dan tandai perubahan pada bagan. Pergeseran cycle time setelah perubahan adalah bukti efeknya. Pergeseran tanpa perubahan tercatat adalah alasan mencurigai instrumennya (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Pekerjaan yang sedang berjalan (WIP) | Menahan item di backlog atau kolom “siap” sampai saat terakhir, sehingga tak dihitung sebagai dimulai; menutup dan membuka kembali item; menyembunyikan pekerjaan di luar papan | Rekonsiliasi item papan dengan permintaan yang diterima; ambil sampel papan terhadap pekerjaan sebenarnya tim; lacak usia item di kolom pertama |
| Throughput | Memecah item menjadi potongan kecil; menutup item sebelum selesai; memilih item mudah lebih dulu | Lihat distribusi ukuran item dan tingkat pembukaan ulang; hitung cacat yang lolos dan insiden yang terkait item terbaru; tinjau campuran jenis pekerjaan yang diselesaikan |
| Usia item kerja | Memindahkan item basi ke “selesai” atau keadaan baru untuk mengatur ulang jam; membatalkan item lama diam-diam; membuat salinan segar dari item lama | Audit perpindahan status mundur dan item yang dibatalkan; laporkan item yang dibatalkan beserta usianya; periksa duplikat yang dibuat dekat batas usia |
| Cycle time | Memulai jam terlambat dengan memindahkan item ke “dikerjakan” hanya ketika pekerjaan hampir selesai; mengakhirinya lebih awal dengan menandai item selesai sebelum tinjauan atau rilis | Bandingkan waktu mulai dengan commit pertama atau aktivitas pertama; laporkan waktu antara “selesai” dan rilis; ambil sampel item selesai untuk penyelesaian sebenarnya |
| Pencapaian SLE | Menetapkan SLE yang longgar; mengecualikan item sulit sebagai “khusus”; menutup item agar tetap di bawah batas | Jaga SLE pada persentil data masa lalu dan tinjau tiap kuartal; laporkan item yang dikecualikan beserta alasannya; baca persentil ke-95 dan item terbuka tertua |
| Porsi waktu terhalang | Tak pernah menandai hambatan, sehingga porsinya tampak rendah; menandai segalanya terhalang untuk menjelaskan keterlambatan | Bandingkan porsi terhalang dengan usia item yang berjalan; tinjau alasan hambatan menurut kategori; ambil sampel item terhalang untuk memeriksa setiap alasan |

Pembacaan yang sehat menunjukkan WIP pada atau di bawah batas pada kebanyakan hari, usia sebagian besar di bawah persentil ke-85 cycle time masa lalu, dan throughput bervariasi dalam rentang stabil dari pekan ke pekan. Persentil cycle time stabil atau menurun, pencapaian SLE berada dekat probabilitas yang dipilih tim, dan waktu terhalang punya penyebab bernama yang sedang dikerjakan seseorang. Ketika sebuah angka tampak terlalu bagus, tanyakan apakah jam bergeser atau definisi berubah sebelum bersuka cita.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Ukuran alur (WIP, throughput, usia, cycle time) | Sederhana, tak bergantung alat, berbasis hitungan dan tanggal; mendukung perkiraan probabilistik | Butuh definisi konsisten dan stempel waktu bersih; tak mengatakan apa pun tentang nilai atau kualitas |
| Ukuran berbasis estimasi seperti poin cerita | Memuat pandangan upaya dan kompleksitas; cocok untuk pekerjaan terencana | Subjektif dan khusus tim; tak dapat dibandingkan antartim |
| Metrik layanan berbasis rata-rata seperti waktu rata-rata penyelesaian | Mudah dihitung dan dijelaskan | Terdistorsi pencilan dan kemiringan; menyembunyikan ekor panjang |
| Cycle time dan SLE berbasis persentil | Mencerminkan apa yang dialami pelanggan; mendukung janji yang jelas | Butuh cukup riwayat; lebih sulit dijelaskan kepada orang yang terbiasa dengan rata-rata |
| Satu definisi “dimulai” dan “selesai” di seluruh organisasi | Memungkinkan rekapitulasi dan perbandingan | Kurang cocok bagi sebagian tim; dapat mendorong tim ke keadaan buatan |

Pilih ukuran paling sederhana yang melayani keputusan di tangan. Ukuran alur bekerja baik bagi tim yang menarik pekerjaan dan dapat menyelesaikan item dalam hitungan hari. Ukuran itu kurang cocok ketika item memakan bulanan, ketika satu item sangat bervariasi ukurannya, atau ketika sebagian besar nilai ada dalam penemuan dan bukan dalam pengiriman.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Keadaan mana yang berarti “dimulai” bagi kita, dan mana yang berarti “selesai,” dan apakah semua orang sepakat?**
Tampilkan papan di layar dan minta setiap orang menunjuk keadaan pertama dan terakhir jam. Catat ketidaksepakatan, karena itu sumber terbesar cycle time yang tak andal. Perhatikan terutama item yang menunggu tinjauan, antrean rilis, atau di tangan pemasok. Sepakati definisi alur kerja tertulis dan tanggal berlakunya.

**2. Berapa banyak pekerjaan yang sedang berjalan sekarang, dan apa yang akan terjadi jika kita berhenti memulai item baru selama satu pekan?**
Hitung kartunya, termasuk pekerjaan yang macet. Tanyakan apa yang akan diselesaikan tim dan apa yang masih macet. Fasilitator sebaiknya mengarahkan percakapan pada alasan memulai lebih awal, seperti takut menganggur atau tekanan pemangku kepentingan, dan menjauh dari menyalahkan. Usulkan batas WIP pertama dan tanggal untuk meninjaunya.

**3. Item mana yang tertua di papan, dan apa yang menghentikan masing-masing?**
Urutkan menurut usia dan bicarakan tiga item tertua. Untuk masing-masing, sebut hambatan, orang yang dapat menyingkirkannya, dan tindakan berikutnya. Bandingkan usia tertua dengan persentil ke-85 cycle time masa lalu. Jadikan kebiasaan menanyakan ini pada setiap check-in, karena usia adalah satu-satunya ukuran yang masih dapat mengubah hasil.

**4. Seperti apa distribusi cycle time kita, dan janji apa yang bisa kita buat darinya?**
Tampilkan diagram sebar item selesai selama 8 sampai 12 pekan terakhir. Baca median, persentil ke-85, dan ke-95. Bahas apakah tim nyaman menyatakan SLE pada persentil ke-85, dan apa kesamaan para pencilan. Fasilitator sebaiknya memeriksa bahwa kelompok memahami perbedaan antara median dan ekor.

**5. Bagaimana insiden dan permintaan memengaruhi pekerjaan terencana yang kita tarik dari backlog?**
Beri tag pada item selesai menurut jenis dan bandingkan cycle time dan throughput menurut jenis. Tanyakan seberapa sering item terencana macet karena insiden tiba. Putuskan apakah kebijakan ekspedit atau kapasitas cadangan akan membantu, dan bagaimana menjaga pemakaiannya tetap terlihat (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana). Bahas apa yang akan dihentikan tim jika interupsi berlipat dua.

**6. Ukuran mana ini yang bisa kita manipulasi, dan bagaimana kita akan menyadarinya?**
Telusuri setiap ukuran dan tanyakan bagaimana seseorang di bawah tekanan dapat membuatnya tampak lebih baik tanpa memperbaiki alur. Cocokkan setiap jawaban dengan pagar pembatas dari tabel. Fasilitator sebaiknya memperlakukan ini sebagai latihan desain pada instrumen, bukan tuduhan. Pilih satu pagar pembatas untuk ditambahkan kuartal ini, dan sebut pemiliknya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memakai ukuran alur untuk melihat sistemnya sendiri. Mereka paling diuntungkan oleh usia item yang berjalan dan distribusi cycle time, yang memberi tahu apa yang harus dikeroyok dan apa yang dijanjikan. Mereka sebaiknya menghindari menjadikan throughput sebagai target dan menghindari membandingkan angka mereka dengan tim lain (lihat topik 2.8, Metrik DORA, untuk ukuran tingkat pengiriman yang berada di atas alur tim).

### Tim layanan dan operasi

Tim layanan menangani kedatangan yang tidak mereka kendalikan. Ukuran alur menunjukkan bagaimana interupsi, serah terima, dan menunggu pihak lain memperpanjang waktu menyelesaikan. Mereka diuntungkan oleh tampilan terpisah untuk insiden, permintaan, dan perubahan terencana, dan oleh waktu terhalang yang dilaporkan menurut alasan. Mereka sebaiknya menjaga jam ITIL yang dipersyaratkan kontrak sambil memakai jam alur untuk menjalankan tim.

### Kepemimpinan dan tata kelola

Pemimpin sebaiknya meminta distribusi dan tren, bukan angka tunggal, dan membaca perubahan dengan perubahan alur kerja yang tercatat di sampingnya. Mereka dapat memakai pencapaian SLE dan profil usia untuk melihat risiko lebih awal. Mereka sebaiknya menahan merekap throughput antartim, karena definisi item berbeda, dan mendanai pembersihan model status dan stempel waktu yang dibutuhkan data alur yang andal.

### Pelanggan dan pengguna

Pelanggan merasakan cycle time dan terutama ekornya. Pernyataan seperti “kebanyakan permintaan jenis ini selesai dalam sekian hari” memberi mereka sesuatu untuk direncanakan, dan catatan jujur ketika tim berada di luar ekspektasinya membangun kepercayaan. Mereka tidak membutuhkan hitungan WIP atau throughput, tetapi mereka diuntungkan ketika ukuran itu mengurangi penantian.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional menjalankan tim gabungan yang menangani permintaan layanan pengguna akhir dan aliran kecil perbaikan terencana untuk sistem klinis. Semua angka dalam contoh ini bersifat ilustratif.

Tim memiliki papan dengan keadaan Siap, Dikerjakan, Menunggu pihak lain, Tinjauan, dan Selesai. Manajer memperhatikan bahwa laporan bulanan menunjukkan 46 item selesai, sejalan dengan bulan sebelumnya, namun staf klinis mengeluh permintaan memakan waktu “selamanya.” Tinjauan riwayat pelacak menunjukkan bahwa “dimulai” ditetapkan saat kartu pertama kali di-triase, sehingga cycle time mencakup hari-hari dalam antrean.

Tim menulis ulang definisi alur kerja: “dimulai” adalah perpindahan pertama ke Dikerjakan, “selesai” adalah perpindahan ke Selesai, dan Menunggu pihak lain dihitung sebagai sedang berjalan, dengan waktu terhalangnya sendiri. Dengan jam baru, median cycle time dari 10 pekan terakhir adalah 4 hari, persentil ke-85 adalah 11 hari, dan persentil ke-95 adalah 24 hari. WIP rata-rata adalah 19 item untuk tim beranggota 6. Usia item kerja menunjukkan tujuh kartu lebih tua dari 11 hari, dan lima di antaranya menunggu pemasok luar.

Tim memutuskan tiga hal. Ia menetapkan SLE “85 persen item selesai dalam 11 hari atau kurang.” Ia menetapkan batas WIP 12 dan sepakat berhenti memulai item terencana baru bila batas tercapai. Ia juga menambahkan tinjauan mingguan sepuluh menit atas lima item tertua. Item pemasok diangkat lewat manajemen pemasok beserta tanggal sejak kapan mereka menunggu.

Enam pekan kemudian, persentil ke-85 cycle time adalah 8 hari dan WIP rata-rata 12. Throughput adalah 44 item per pekan selama beberapa pekan, dekat tingkat sebelumnya. Lalu tim melihat kemungkinan risiko manipulasi: median cycle time turun menjadi 2 hari dalam satu pekan, tetapi hitungan item selesai per pekan melonjak dan porsi item yang dibuka kembali dalam seminggu naik. Sampel kartu menunjukkan permintaan besar dipecah menjadi beberapa kartu satu baris untuk menaikkan throughput dan memperpendek cycle time. Pagar pembatas menangkapnya: campuran ukuran item dan tingkat pembukaan ulang. Tim menyepakati aturan tentang apa yang dihitung sebagai satu item, menggabungkan kartu yang dipecah dalam laporan, dan terus menerbitkan SLE dan daftar usia.

## Sudut pandang sektor

**Startup.** Tim kecil dapat memulai dengan papan fisik atau digital dan spreadsheet tanggal mulai dan selesai. Mulailah dengan usia dan WIP, karena tidak butuh riwayat, dan tambahkan persentil cycle time setelah sekitar sepuluh pekan data. Simpan satu papan untuk pekerjaan terencana dan perbaikan mendesak, diberi tag menurut jenis, agar interupsi terlihat.

**Bisnis kecil.** Pekerjaan sering datang lewat email atau help desk yang dihosting. Pakai tanggal dibuat, dimulai, dan diselesaikan dari alat itu sendiri, periksa bahwa “dimulai” berarti seseorang mulai bekerja, dan ekspor data secara teratur. Tinjauan mingguan sederhana atas item terbuka tertua lebih banyak manfaatnya daripada dasbor yang rumit.

**Perusahaan besar.** Banyak tim, alat, dan alur kerja menjadikan definisi yang konsisten tantangan utama. Sepakati kosakata umum kecil untuk dimulai dan selesai, biarkan tim memetakan keadaan lokal ke sana, dan jaga data alur tingkat tim di tingkat tim. Pakai ukuran untuk menemukan antrean sistemik, seperti langkah persetujuan bersama atau lingkungan bersama, bukan untuk membandingkan tim.

**Pemerintah dan sektor publik.** Tenggat undang-undang, persyaratan audit, dan aturan pengadaan membentuk jam. Pisahkan jam undang-undang dari jam alur tim, dan dokumentasikan keduanya. Langkah yang dikendalikan pemasok sering mendominasi cycle time, jadi catat sebagai waktu terhalang dan pakai datanya dalam diskusi kontrak (lihat topik 8.4, Metrik pemasok dan kontrak).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya ukuran alur rendah dalam perangkat dan sedang dalam disiplin. Tim membutuhkan papan dengan perubahan status yang andal, beberapa jam untuk menulis definisi alur kerja, tinjauan berulang yang singkat, dan seseorang untuk merawat bagan. Jika stempel waktu berasal dari pelacak atau alat ITSM, pengumpulan hampir gratis. Biaya yang lebih besar adalah waktu untuk menyelaraskan definisi dan mengubah kebiasaan, seperti berhenti memulai pekerjaan baru ketika batas tercapai.

Imbal hasilnya tampak pada keterprediksian dan lebih sedikit kejutan. Tim yang dapat menyatakan SLE dari datanya sendiri dapat menjawab “kapan selesai?” tanpa menambah estimasi dan dapat melihat pekerjaan macet lebih awal. Gambarkan manfaatnya lewat ukuran yang dapat Anda amati sendiri: porsi item yang lebih tua dari persentil ke-85, lebar jurang antara median dan persentil ke-95, dan waktu yang dihabiskan dalam rapat status sebelum dan sesudah. Tidak ada nilai acuan ditawarkan di sini, karena angka terbitan bergantung pada alur kerja dan definisi item. Total biaya kepemilikan sebagian besar waktu orang, jadi hitunglah, dan bandingkan dengan biaya pekerjaan yang menunggu tanpa terlihat.

## Anti-pola dan jebakan

- **Menghitung item yang tak pernah dimulai.** Kartu backlog menggelembungkan WIP dan usia dan membuat papan tak terbaca. Hitung hanya item yang dimulai, dan simpan backlog di tempatnya sendiri (lihat topik 2.6, Metrik backlog dan penyempurnaan).
- **Memperlakukan batas WIP sebagai target yang harus dicapai.** Batas adalah langit-langit yang mengungkap antrean. Tinjau apakah batas menjalankan tugasnya, dan turunkan ketika tim sanggup.
- **Hanya melaporkan rata-rata.** Rata-rata cycle time menyembunyikan ekor panjang yang dirasakan pelanggan. Laporkan median serta persentil ke-85 dan ke-95.
- **Menjeda jam saat menunggu.** Menghentikan jam ketika item terhalang membuat cycle time tampak lebih baik dan menyembunyikan keterlambatan. Biarkan jam berjalan dan laporkan waktu terhalang terpisah.
- **Membandingkan throughput antartim.** Definisi dan ukuran item berbeda. Bandingkan tiap tim dengan riwayatnya sendiri.
- **Memakai ukuran alur untuk menilai individu.** Item selesai per orang mengundang manipulasi dan mengabaikan pekerjaan bersama. Jaga setiap ukuran di tingkat tim.
- **Mengubah alur kerja tanpa mencatat.** Perubahan nama keadaan atau kebijakan mematahkan tren secara diam-diam. Catat tanggal dan alasan, dan tandai pada setiap bagan.
- **Mencampur insiden, permintaan, dan pekerjaan terencana dalam satu distribusi.** Cycle time mereka berbeda secara alami. Beri tag menurut jenis dan baca tiap distribusi sendiri.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | “Dimulai” dan “selesai” berarti hal berbeda bagi orang berbeda | Beberapa tim menuliskan keadaan alur kerjanya | Satu definisi alur kerja tertulis per tim, dengan aturan jam untuk waktu terhalang | Perubahan definisi dicatat dan ditandai pada bagan; jam ditinjau untuk penyimpangan | Definisi diselaraskan antartim dan pemasok di mana pekerjaan melintasi batas, dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Mengukur pekerjaan belum selesai | Status disampaikan dalam rapat | Kartu menunjukkan usia atau WIP untuk beberapa tim | WIP dihitung harian dan usia ditampilkan pada setiap kartu, dengan batas tertulis | Pita usia dari persentil historis menggerakkan tindakan harian | Antrean dan serah terima lintas tim dilacak bersama, dengan usia dibagikan kepada pemasok |
| Mengukur pekerjaan selesai | Hitungan tiket tertutup per bulan | Rata-rata cycle time dilaporkan beberapa tim | Persentil cycle time dan throughput mingguan dari satu sumber data | Tren ditinjau terhadap perubahan tercatat; pencapaian SLE dilacak | Perkiraan dari data alur menginformasikan perencanaan dan komitmen layanan lintas tim |
| Pemakaian dan pagar pembatas | Angka dipakai untuk mengejar orang | Kesadaran informal tentang manipulasi | Setiap ukuran dipasangkan dengan pagar pembatas dan ditinjau bersama tim | Peringatan pagar pembatas berujung pada pekerjaan perbaikan yang didanai | Ukuran dan pagar pembatas direvisi bersama pelanggan dan pemasok |

## Daftar periksa

- [ ] Definisi alur kerja tertulis, dengan keadaan “dimulai” dan “selesai” disebut.
- [ ] Item kerja didefinisikan, dengan aturan untuk memecah dan menggabung item.
- [ ] WIP dihitung harian dari data alat, dan batas WIP tertulis.
- [ ] Setiap kartu yang berjalan menampilkan usianya dalam hari.
- [ ] Cycle time dilaporkan sebagai median, persentil ke-85, dan persentil ke-95 selama jendela yang dinyatakan.
- [ ] Throughput dilaporkan sebagai bagan lari mingguan beserta jendelanya.
- [ ] Ekspektasi tingkat layanan dinyatakan dari data tim sendiri dan ditinjau tiap kuartal.
- [ ] Waktu terhalang dicatat dengan awal, akhir, dan alasan, dan jam item terus berjalan.
- [ ] Insiden, permintaan, dan pekerjaan terencana diberi tag agar masing-masing dapat dibaca sendiri.
- [ ] Setiap perubahan keadaan atau kebijakan dicatat dengan tanggal dan alasannya.
- [ ] Setiap ukuran dipasangkan dengan pagar pembatas dari tabel manipulasi.
- [ ] Tidak ada ukuran yang dipakai untuk memeringkat individu atau membandingkan tim.

## Prompt AI

**Periksa definisi alur kerja untuk masalah jam.**

```text
Berikut alur kerja untuk [team or service]: [list of states and transitions, with
a one-line meaning for each if known]. Kami ingin menghitung pekerjaan yang
sedang berjalan, throughput, usia item kerja, dan cycle time memakai definisi
literatur alur. Identifikasi keadaan mana yang seharusnya memulai jam dan mana
yang menghentikannya, keadaan mana pun tempat jam dapat dijeda atau disalahbaca,
dan keadaan mana pun yang mungkin ditafsirkan berbeda oleh dua tim. Jangan
menebak bagaimana alat kami dikonfigurasi. Daftar asumsi Anda dan pertanyaan yang
harus saya jawab untuk menuntaskan definisi.
```

**Analisis ekspor item kerja.**

```text
Saya punya ekspor [number] item kerja selesai dari [tool] dengan bidang berikut:
[field names, for example id, type, started date, finished date, blocked
periods]. Jelaskan cara menghitung persentil cycle time, throughput mingguan, dan
pekerjaan yang sedang berjalan harian dari bidang ini, dan cara menangani tanggal
yang hilang, item yang dibuka kembali, dan item berjenis [types]. Berikan
langkah-langkah dan kerangka skrip singkat dalam [language], dan jangan berasumsi
tentang nilai apa pun. Daftar asumsi Anda dan pemeriksaan kualitas data yang
harus saya jalankan lebih dulu.
```

**Susun pernyataan ekspektasi tingkat layanan.**

```text
Tim kami menangani [type of work] dan memiliki data cycle time untuk [number]
pekan terakhir, dengan median [value], persentil ke-85 sebesar [value], dan
persentil ke-95 sebesar [value]. Susun ekspektasi tingkat layanan satu kalimat
dan catatan singkat yang menjelaskannya kepada [audience, for example customers
or the service owner], termasuk apa yang tidak dijanjikannya. Jangan mengarang
nilai target atau acuan. Daftar asumsi Anda dan peringatan tentang ukuran
sampel.
```

**Tinjau risiko manipulasi untuk ukuran alur kita.**

```text
Kami melacak [list of flow measures] untuk [team or service]. Tim berada di bawah
tekanan untuk [pressure, for example reduce ticket age]. Untuk setiap ukuran,
daftar cara realistis ia dapat dibuat tampak lebih baik tanpa memperbaiki alur,
sinyal dalam data kami yang akan mengungkap masing-masing, dan pagar pembatas
berpasangan. Jangan mengarang statistik atau mengutip studi. Daftar asumsi Anda
dan data yang saya butuhkan untuk menguji setiap risiko.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan sebuah ukuran alur dan pagar pembatas yang harus berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penyuntingan topik ini menjaga templat, tabel definisi, dan tabel manipulasi tetap selaras.

## Poin penting

- Empat ukuran menggambarkan alur: pekerjaan yang sedang berjalan, throughput, usia item kerja, dan cycle time, masing-masing dengan definisi pendek dan jam yang harus ditulis.
- Usia item kerja dan WIP adalah ukuran pendahulu; throughput dan cycle time mengonfirmasi apa yang sudah terjadi.
- Laporkan cycle time dan usia sebagai persentil, dan nyatakan ekspektasi tingkat layanan dari data Anda sendiri.
- Ukuran yang sama cocok untuk pekerjaan proyek dan pekerjaan layanan, asalkan Anda memberi tag jenis pekerjaan dan menyebut setiap jam.
- Setiap ukuran bisa dimanipulasi dengan menggeser jam, memecah item, atau menyembunyikan pekerjaan, jadi pasangkan masing-masing dengan pagar pembatas.
- Jaga ukuran di tingkat tim dan pakai untuk memperbaiki alur kerja, jangan pernah memeringkat orang.

## Referensi dan bacaan lanjutan

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
