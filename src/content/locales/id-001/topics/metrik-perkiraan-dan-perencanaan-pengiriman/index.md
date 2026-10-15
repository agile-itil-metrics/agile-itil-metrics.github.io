# Metrik perkiraan dan perencanaan pengiriman

**Tim yang menyampaikan perangkat lunak secara berkelanjutan dan juga menjalankan layanan langsung membutuhkan perkiraan yang jujur, bukan komitmen yang diperas dari estimasi, jadi rencanakan dari alur pekerjaan yang selesai, berikan rentang alih-alih tanggal, dan jaga angka perencanaan lokal tim tetap di luar perbandingan dan di luar target.**

## Gambaran umum dan motivasi

Pemangku kepentingan mengajukan dua pertanyaan kepada setiap tim pengiriman: “Kapan selesai?” dan “Berapa banyak yang bisa kalian ambil?” Jawaban agile dimulai dari tujuan dalam prinsip Agile Manifesto: sampaikan perangkat lunak berharga secara berkelanjutan, berkolaborasi dengan pemangku kepentingan setiap hari, merefleksikan dan memperbaiki secara berkala, dan bangun pekerjaan di sekitar orang yang termotivasi yang dipercaya untuk menyelesaikannya. Perkiraan yang melayani tujuan itu adalah percakapan antarpemangku kepentingan tentang hasil dan risiko yang mungkin. Ia bukan janji yang diperas di bawah tekanan.

Tim yang menjalankan layanan langsung punya kesulitan tambahan. Kapasitas mereka dibagi antara perubahan terencana, pekerjaan insiden tak terencana, permintaan layanan, dan perbaikan. Rencana yang mengabaikan beban operasional akan gagal karena alasan yang tak direncanakan siapa pun (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana). Manajemen layanan TI (ITSM), sebagaimana dikodifikasi ITIL, memperlakukan ini sebagai pertanyaan kapasitas dan permintaan. [Perencanaan kapasitas](https://en.wikipedia.org/wiki/Capacity_planning) adalah proses menentukan kapasitas yang dibutuhkan organisasi untuk memenuhi permintaan yang berubah. Praktik agile merencanakan terhadap apa yang benar-benar dapat diselesaikan tim adalah gagasan yang sama pada tingkat tim.

Ada dua cara luas memperkirakan pengiriman:

- **Dari estimasi.** Tim mengukur ukuran item dalam suatu satuan, menjumlahkan ukurannya, dan membaginya dengan laju. Banyak tim memakai pengukuran relatif seperti [poin cerita](https://en.wikipedia.org/wiki/Story_point), dan lajunya disebut [velocity](https://en.wikipedia.org/wiki/Velocity_(software_development)). Cepat dimulai, bergantung pada kebiasaan estimasi tim, dan hanya bermakna di dalam satu tim.
- **Dari data alur.** Tim memakai catatannya sendiri tentang pekerjaan yang selesai: berapa banyak item yang diselesaikan per pekan (throughput) dan berapa lama item dari awal sampai akhir (cycle time). Karena ini hitungan dan waktu terlewat, bukan opini, ia tahan terhadap hanyutan dan dapat dipadukan dengan simulasi untuk memberi rentang hasil. Pendekatan ini berasal dari tradisi alur, yang mencakup Kanban Guide, dan bekerja dengan cara mengorganisasi pekerjaan apa pun, termasuk tim yang menyampaikan secara berkelanjutan tanpa periode perencanaan tetap.

Topik ini condong ke pendekatan kedua, karena pengiriman perangkat lunak berkelanjutan menghasilkan aliran item selesai yang dijelaskan langsung oleh data alur (lihat topik 2.1, Ukuran alur, dan topik 2.2, Lead time, cycle time, dan efisiensi alur). Ia tetap membahas yang pertama, karena banyak tim memakai estimasi, dan karena penyalahgunaan velocity adalah salah satu cara paling umum metrik pengiriman salah arah.

Perkiraan adalah [peramalan](https://en.wikipedia.org/wiki/Forecasting) masa depan yang tak pasti, dan ketidakpastian itu intinya. Gagasan [kerucut ketidakpastian](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) menyatakan bahwa estimasi awal adalah yang paling tidak pasti. [Kekeliruan perencanaan](https://en.wikipedia.org/wiki/Planning_fallacy) menyatakan orang meremehkan berapa lama rencana mereka sendiri akan berlangsung bahkan ketika mereka tahu rencana serupa terlambat. Ukuran peramalan yang baik menamai ini dan mengukur seberapa sering perkiraan tepat.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) penting di sini, karena perkiraan dan rencana dengan mudah menjadi janji lalu target. Begitu tim dinilai pada ketepatan tanggal, ia menyembunyikan risiko, memangkas kualitas, atau menyunat estimasi (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Perkirakan dari pekerjaan yang selesai.** Apa yang telah disampaikan tim adalah bukti yang lebih baik daripada apa yang diyakini siapa pun akan disampaikannya.
- **Berikan rentang dengan probabilitas.** “Kemungkinan pada akhir bulan depan, sangat mungkin pada akhir bulan berikutnya” mengalahkan satu tanggal.
- **Rencanakan terhadap kapasitas nyata.** Sertakan pekerjaan operasional, sisakan waktu untuk perbaikan, dan jangan merencanakan utilisasi penuh.
- **Jaga estimasi tetap lokal.** Satuan ukuran apa pun adalah alat perencanaan pribadi satu tim, tidak pernah dasar perbandingan.
- **Ukur kualitas perkiraan, bukan hanya pengiriman.** Perkiraan yang benar karena alasan yang salah adalah keberuntungan.
- **Perlakukan perkiraan sebagai milik bersama.** Pemangku kepentingan dan tim membangunnya bersama dan merevisinya ketika fakta berubah.
- **Percayai tim.** Orang yang dipercaya dan didukung memberi perkiraan yang jujur.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat ketepatan perkiraan | Porsi perkiraan yang hasil sebenarnya jatuh di dalam rentang yang dinyatakan | perkiraan yang hasil sebenarnya dalam rentang yang dinyatakan / perkiraan yang dibuat | persen | Log perkiraan dan catatan pengiriman | Manajemen kapasitas dan kinerja; perbaikan berkelanjutan | Akurasi peramalan dalam percakapan perencanaan | Bulanan |
| Lebar rentang perkiraan | Seberapa lebar rentang yang dinyatakan, relatif terhadap perkiraan median | (batas atas dikurangi batas bawah) / perkiraan median | rasio | Log perkiraan | Manajemen kapasitas dan kinerja | Penyempitan kerucut ketidakpastian | Bulanan |
| Keberhasilan tujuan pengiriman | Porsi tujuan pengiriman yang dinyatakan dan terpenuhi untuk periode itu, dinilai menurut hasil | tujuan terpenuhi / tujuan ditetapkan | persen | Catatan tujuan yang disepakati dengan pemangku kepentingan | Manajemen tingkat layanan; perbaikan berkelanjutan | Tinjauan hasil dengan pemangku kepentingan | Bulanan atau per rilis sebuah tujuan |
| Tingkat perubahan lingkup | Porsi pekerjaan yang dikomitmenkan yang ditambah, dihapus, atau diubah ukurannya setelah perkiraan dibuat | item ditambah atau dihapus setelah perkiraan / item dalam perkiraan asli | persen | Riwayat perubahan pelacak pekerjaan | Pemberdayaan perubahan; manajemen tingkat layanan | Adaptasi backlog terhadap umpan balik | Bulanan |
| Alokasi kapasitas | Porsi kapasitas tim yang dihabiskan untuk perubahan, pekerjaan operasional, dan perbaikan | item atau jam yang selesai di setiap kategori / semua item atau jam yang selesai | persen | Pelacak pekerjaan dengan jenis pekerjaan | Manajemen kapasitas dan kinerja; manajemen insiden | Distribusi jenis pekerjaan | Bulanan |
| Stabilitas throughput | Variasi dalam throughput mingguan | simpangan baku throughput mingguan / rata-rata throughput mingguan | rasio | Pelacak pekerjaan | Manajemen kapasitas dan kinerja | Keterprediksian alur | Bulanan |
| Velocity lokal | Pekerjaan selesai satu tim dalam satuan ukuran miliknya sendiri per periode perencanaan | jumlah estimasi untuk item yang memenuhi definisi selesai pada periode itu | poin yang ditetapkan tim | Pelacak pekerjaan | Manajemen kapasitas dan kinerja | Alat bantu perencanaan kapasitas tim | Per periode perencanaan |

Definisikan jamnya. Perkiraan “dibuat” ketika dicatat dan dibagikan kepada pemangku kepentingan, dan “terpenuhi” ketika hasil dirilis dan dipakai, bukan ketika kode digabung. Throughput menghitung item yang memenuhi definisi selesai, dengan item berbeda jenis dihitung dalam deret terpisah bila ukurannya sangat berbeda. Velocity lokal hanya ditampilkan kepada tim yang memilikinya.

## Rekomendasi

### Perkirakan dari alur

**1. Bangun perkiraan dari throughput dan cycle time.** Hitung item yang selesai setiap pekan selama 12 sampai 26 pekan terakhir. Pakai riwayat itu untuk memperkirakan berapa banyak item akan selesai pada tanggal tertentu, atau kapan sekumpulan item kemungkinan selesai. Simulasi [metode Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method), yang mengambil sampel dari riwayat tim sendiri ribuan kali, mengubah riwayat menjadi rentang probabilitas. Spreadsheet sederhana atau skrip kecil melakukannya dengan baik. Nyatakan jendela riwayat dan tanggal perkiraan.

**2. Laporkan persentil hasil.** Katakan “50 persen mungkin pada 14 Maret, 85 persen mungkin pada 4 April, 95 persen mungkin pada 18 April.” Setiap persentil adalah pernyataan risiko yang jujur, dan pemangku kepentingan dapat memilih berapa banyak margin yang mereka butuhkan. Satu tanggal menyembunyikan pilihan itu (lihat topik 1.6, Literasi statistik untuk metrik layanan).

**3. Pakai persentil cycle time untuk item tunggal.** Untuk satu item, persentil ke-85 cycle time masa lalu menjawab “berapa lama ini mungkin memakan waktu?” lebih baik daripada estimasi mana pun. Tampilkan pada papan, sebagai garis yang dapat dibandingkan dengan usia item yang sedang berjalan (lihat topik 2.1, Ukuran alur).

**4. Jaga ukuran item kira-kira rata.** Peramalan berbasis throughput bekerja paling baik ketika item kecil dan cukup mirip untuk dihitung. Tim sampai di sana dengan mengiris pekerjaan menjadi potongan terkecil yang masih menyampaikan nilai, kebiasaan pengiriman perangkat lunak berkelanjutan itu sendiri. Jika item sangat bervariasi, lacak deret terpisah untuk jenis pekerjaan berbeda.

**5. Segarkan perkiraan setiap kali fakta berubah.** Perkiraan adalah pandangan yang hidup. Ketika lingkup berubah, ukuran tim berubah, atau insiden besar menghabiskan seminggu, jalankan ulang dan beri tahu pemangku kepentingan. Beri versi pada perkiraan agar Anda dapat menilainya kelak.

### Rencanakan terhadap kapasitas nyata

**6. Alokasikan kapasitas menurut jenis pekerjaan.** Catat berapa porsi pekerjaan selesai tim yang berupa perubahan terencana, pekerjaan operasional tak terencana, permintaan layanan, dan perbaikan. Rencanakan porsi yang ditunjukkan pengalaman, bukan yang ideal. Tim yang menjalankan layanan langsung sering mendapati sepertiga atau lebih kapasitasnya terserap pekerjaan operasional, dan angkanya milik mereka untuk diukur, bukan dipinjam (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).

**7. Sisihkan kapasitas untuk perbaikan.** Perbaikan berkelanjutan adalah bagian tetap dari pekerjaan, jadi rencanakan waktunya dalam alokasi, dan lindungi. Tim yang menekannya habis di setiap masa sibuk mendapati beban operasionalnya naik, yang menekannya makin habis. Lacak porsi perbaikan dan efek perbaikan pada porsi operasional.

**8. Jangan merencanakan utilisasi penuh.** Tim yang direncanakan 100 persen tidak punya ruang untuk variasi, dan antrean tumbuh ketika utilisasi mendekati batas (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean). Sisakan kelonggaran untuk hal tak terduga, dan perlakukan sebagai pilihan desain, bukan pemborosan.

### Pakai estimasi dengan hati-hati bila Anda memakainya

**9. Perlakukan velocity sebagai alat bantu perencanaan lokal.** Jika tim mengukur pekerjaan dalam poin cerita, velocity-nya dapat membantu memutuskan berapa banyak yang diambil pada percakapan perencanaan berikutnya, dan hanya sebaiknya dibandingkan dengan masa lalu tim yang sama. Jangan pernah membandingkan tim, menetapkan target velocity, atau melaporkan velocity ke atas sebagai ukuran produktivitas. Poin tidak memiliki satuan bersama antartim, dan tekanan menaikkan angka menggelembungkan estimasi tanpa menyampaikan lebih banyak.

**10. Sesekali bandingkan estimasi dengan cycle time sebenarnya.** Plot estimasi terhadap berapa lama item memakan waktu. Jika estimasi besar tidak memakan waktu lebih lama daripada yang kecil, upaya estimasi tidak membeli banyak, dan menghitung item mungkin melayani tim sama baiknya. Jika berkorelasi, estimasi membawa informasi yang layak dipertahankan. Biarkan tim memutuskan dengan datanya.

### Ukur apakah ia berfungsi

**11. Catat setiap perkiraan dan beri skor.** Catat perkiraan, rentang, dan hasil sebenarnya, lalu hitung tingkat ketepatan. Perkiraan persentil ke-85 yang terkalibrasi baik seharusnya menjadi kenyataan sekitar 85 persen dari waktu. Jika ketepatan jauh di atas atau di bawah, sesuaikan metodenya. Bagikan log kepada pemangku kepentingan, karena kepercayaan pada perkiraan dibangun dari rekam jejak.

**12. Nilai tujuan pengiriman menurut hasil.** Tujuan seperti “pelanggan dapat membayar dengan faktur” terpenuhi ketika pelanggan dapat melakukannya, bukan ketika tugas ditutup. Sepakati tujuan dengan pemangku kepentingan dalam kata sederhana, tinjau bersama, dan catat hasilnya. Ini menjaga perencanaan terikat pada kolaborasi berkelanjutan, dan mencegah pengiriman pekerjaan yang tak dipakai siapa pun (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat ketepatan perkiraan | Menyatakan rentang sangat lebar sehingga setiap perkiraan tepat; memperkirakan ulang setelah kejadian | Lebar rentang perkiraan; simpan perkiraan asli di log; bandingkan rentang dengan riwayat sejawat |
| Lebar rentang perkiraan | Mempersempit rentang agar tampak percaya diri | Tingkat ketepatan perkiraan; wajibkan rentang dibangun dari riwayat tercatat |
| Keberhasilan tujuan pengiriman | Menetapkan tujuan mudah; mendefinisikan ulang tujuan setelah kejadian; menghitung keluaran sebagai hasil | Pemangku kepentingan menilai hasil; kata-kata tujuan disimpan di log; periksa data pemakaian untuk perubahan yang disampaikan |
| Tingkat perubahan lingkup | Membekukan lingkup dengan menolak perubahan yang sah; menyembunyikan perubahan lingkup dengan mengubah ukuran item | Kepuasan pemangku kepentingan terhadap ketanggapan; alasan perubahan dicatat |
| Alokasi kapasitas | Melabeli pekerjaan operasional sebagai perbaikan; menyembunyikan beban operasional dengan bekerja di luar papan | Rekonsiliasi dengan catatan insiden dan permintaan; ambil sampel item untuk jenisnya |
| Stabilitas throughput | Memecah item menjadi potongan remeh untuk menaikkan hitungan; menutup item tanpa menyelesaikannya | Distribusi ukuran item; tingkat pembukaan ulang; ambil sampel untuk nilai yang disampaikan |
| Velocity lokal | Menggelembungkan estimasi; memecah cerita untuk mengklaim poin; membandingkan tim | Jaga tetap pribadi bagi tim; bandingkan dengan throughput dan cycle time; jangan pernah menetapkan target |

Pembacaan yang sehat adalah perkiraan yang menjadi kenyataan pada tingkat yang dinyatakan, tujuan yang disepakati pemangku kepentingan telah terpenuhi, gambaran kapasitas yang cocok dengan yang dijalani tim, dan angka velocity yang, bila ada, dipakai tim dan tak seorang pun yang lain.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Peramalan berbasis alur | Memakai data nyata, tahan penggelembungan, memberi rentang | Butuh riwayat stabil dan item berukuran serupa |
| Peramalan berbasis estimasi | Cepat dimulai, mendorong diskusi tentang pekerjaan | Subjektif, menggelembung di bawah tekanan, tak sebanding antartim |
| Komitmen satu tanggal | Sederhana dikomunikasikan | Menyembunyikan risiko; menghukum kejujuran |
| Rentang dengan probabilitas | Jujur tentang ketidakpastian | Lebih sulit dibaca sebagian pemangku kepentingan pada awalnya |
| Perencanaan pada utilisasi penuh | Tampak efisien | Antrean tumbuh; tak ada ruang untuk insiden atau belajar |
| Kelonggaran terencana | Menyerap variasi dan mendukung perbaikan | Tampak seperti kapasitas menganggur bagi yang belum yakin |

Jawaban dalam prosa adalah mulai dari data alur, tambahkan estimasi hanya di tempat membantu tim, dan berbicaralah dalam rentang. Bila kontrak menuntut tanggal, berikan tanggal yang didukung persentil ke-85 atau ke-95 dan katakan apa yang akan mengubahnya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa yang akan kita katakan jika pemangku kepentingan bertanya “kapan selesai” dan menginginkan jawaban jujur?**
Minta tim menjawab untuk pekerjaan nyata, pertama dengan satu tanggal lalu dengan rentang. Perhatikan perbedaan seberapa nyaman tiap jawaban terasa. Fasilitator sebaiknya mencatat apa yang tim butuhkan untuk memberi rentang dengan jujur, seperti riwayat, ukuran item, dan risiko yang diketahui.

**2. Berapa banyak kapasitas kita yang benar-benar masuk ke perubahan terencana, dan bagaimana kita tahu?**
Lihat pekerjaan selesai tiga bulan terakhir menurut jenis. Bandingkan dengan rencana yang dibuat tim. Percakapan sering mengungkap bahwa pekerjaan operasional lebih besar dari rencana, dan pekerjaan perbaikan lebih kecil. Sepakati alokasi seharusnya apa, dan keputusan apa yang akan mengubahnya.

**3. Di mana estimasi kita membantu, dan di mana hanya memakan waktu?**
Plot sampel estimasi terhadap cycle time sebenarnya. Bahas apakah estimasi lebih besar benar-benar lebih lambat. Jika kaitannya lemah, tanyakan apa yang akan dilakukan tim secara berbeda jika hanya menghitung item. Putuskan apakah melanjutkan, menyederhanakan, atau berhenti mengestimasi untuk masa uji.

**4. Siapa yang melihat angka perencanaan tingkat tim kita, dan apa yang terjadi padanya?**
Telusuri setiap angka perencanaan dari tim sampai audiensnya. Tanyakan apakah ada yang membandingkan tim atau menetapkan target dengannya. Jika ada, bahas cara menghentikannya dan apa yang ditawarkan sebagai gantinya. Fasilitator sebaiknya siap menjelaskan bahwa angka lokal kehilangan nilainya ketika bepergian.

**5. Kapan perkiraan kita gagal, dan apa yang kita pelajari?**
Pilih satu kegagalan dan telusuri. Apakah perubahan lingkup, insiden besar, ketergantungan, atau asumsi yang salah? Apa yang akan menandainya lebih awal? Sepakati satu perubahan pada praktik peramalan, seperti mencatat ketergantungan atau menyegarkan perkiraan mingguan.

**6. Tujuan mana yang kita penuhi kuartal lalu, dan siapa yang menyatakannya?**
Daftar tujuan pengiriman dan siapa yang menilai masing-masing. Jika tim menilai tujuannya sendiri, bahas cara membawa pemangku kepentingan masuk. Percakapan mendukung kolaborasi berkelanjutan, dan menunjukkan apakah tujuan tentang hasil atau tentang tugas.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki perkiraan dan data alur yang mendukungnya. Mereka sebaiknya menerbitkan rentang, menjaga item tetap kecil, dan memperkirakan ulang ketika fakta berubah. Tim yang memilih mengukur pekerjaan dalam poin sebaiknya menjaga angkanya di dalam tim. Tujuannya adalah aliran pekerjaan selesai yang berharga dan stabil, dan perkiraan yang dipercaya pemangku kepentingan karena punya rekam jejak.

### Tim layanan dan operasi

Tim operasi memikul permintaan yang mengganggu rencana. Mereka sebaiknya membagikan beban insiden dan permintaan dengan tim pengiriman, agar rencana kapasitas dimulai dari angka nyata. Tim operasi yang juga menyampaikan perubahan dapat memakai peramalan berbasis alur yang sama untuk pekerjaan mereka sendiri. Perencanaan bersama pekerjaan perubahan dan menjalankan adalah tempat yang baik untuk kolaborasi berkelanjutan di kedua kelompok.

### Kepemimpinan dan tata kelola

Pemimpin memutuskan apakah perkiraan adalah pernyataan risiko atau janji. Mereka sebaiknya meminta rentang, mendanai kelonggaran dan perbaikan, dan menolak memakai velocity atau throughput untuk membandingkan tim. Badan tata kelola sebaiknya melihat tingkat ketepatan perkiraan dari waktu ke waktu dan hasil tujuan, dan memperlakukan kegagalan berulang sebagai sinyal tentang sistem, seperti ketergantungan dan beban operasional, bukan tentang orangnya.

### Pelanggan dan pengguna

Pengguna peduli kapan mereka akan melihat perubahan dan apakah akan membantu. Rentang dengan keyakinan yang dinyatakan melayani mereka lebih baik daripada tanggal yang bergeser. Mereka sebaiknya dilibatkan dalam menilai apakah tujuan terpenuhi, karena merekalah yang merasakan hasilnya. Memberi tahu pengguna ketika perkiraan berubah, dan mengapa, adalah bagian dari memperlakukan mereka sebagai kolaborator.

## Dalam praktik: contoh ITIL agile

Tim digital sebuah perusahaan energi regional membangun portal penagihan pelanggan dan menjalankannya di produksi. Angka di bawah bersifat ilustratif.

Tim diminta pemangku kepentingannya untuk memberi tanggal bagi fitur rencana pembayaran baru yang terdiri dari 22 item. Kuartal lalu tim memberi tanggal pasti berdasarkan estimasinya, melewatkannya lima pekan karena dua insiden besar, dan kehilangan kepercayaan pemangku kepentingan. Kali ini kepala pengiriman menarik throughput 20 pekan terakhir, yang berkisar dari 3 sampai 9 item per pekan dengan median 6, dan mencatat bahwa pekerjaan operasional menyerap sekitar 35 persen item selesai.

Ia menjalankan simulasi dari riwayat. Hasilnya menunjukkan 22 item selesai dalam 4 pekan sekitar separuh waktu, dalam 6 pekan sekitar 85 persen waktu, dan dalam 8 pekan sekitar 95 persen waktu. Ia memaparkan ketiga tanggal itu kepada pemangku kepentingan, beserta asumsinya: ukuran tim tak berubah, beban operasional seperti 20 pekan terakhir, dan tanpa lingkup baru. Seorang pemilik produk bertanya tentang peluncuran untuk tanggal penagihan tertentu delapan pekan lagi. Tim dan pemangku kepentingan sepakat merencanakan untuk tanggal 85 persen, menjaga dua pekan terakhir sebagai penyangga, dan menetapkan titik periksa setiap dua pekan untuk memperkirakan ulang.

Pada titik periksa pertama, kerusakan pada gerbang pembayaran telah memakan tiga hari dan simulasi menggeser tanggal 85 persen satu pekan. Tim memberi tahu pemangku kepentingan hari itu juga, dengan alasannya, dan mereka sepakat memindahkan satu item bernilai rendah keluar. Fitur tayang pada tanggal penyangga. Tujuan pengiriman, “pelanggan dapat menyiapkan rencana pembayaran tanpa menelepon,” dinilai oleh pemilik produk dan panel pelanggan setelah tiga pekan. Tujuan itu terpenuhi bagi sebagian besar pelanggan, dan tema komentar menunjukkan kebingungan pada satu layar, yang bergabung ke backlog. Tim mencatat bahwa tingkat ketepatan perkiraannya untuk kuartal itu adalah empat dari lima. Pemangku kepentingan meminta kepala pengiriman membawa rentang perkiraan ke sesi perencanaan berikutnya, dan tim berhenti memakai poin cerita karena menghitung item memberi jawaban yang sama.

## Sudut pandang sektor

**Startup.** Prioritas berubah cepat, jadi jaga perkiraan singkat dan kasar. Lacak throughput sejak awal, karena tidak butuh biaya, dan beri pendiri rentang. Tahan mengimpor sistem perencanaan yang dibangun untuk tim besar.

**Bisnis kecil.** Satu atau dua orang mungkin mengerjakan pekerjaan perubahan dan menjalankan bersama, tanpa kapasitas cadangan. Jelaskan pembagiannya, dan beri tahu pemilik bila insiden akan menggeser tanggal. Hitungan mingguan sederhana item selesai sudah cukup.

**Perusahaan besar.** Banyak tim dan ketergantungan membuat perkiraan bergantung pada alur tim lain. Perkirakan tiap tim dari datanya sendiri, buat ketergantungan terlihat, dan gabungkan rentang dengan hati-hati, karena menjumlahkan kasus terbaik memberi total yang menyesatkan. Hindari rekapitulasi yang membandingkan tim menurut velocity.

**Pemerintah dan sektor publik.** Anggaran tetap, pengadaan, dan tanggal undang-undang menciptakan tekanan untuk komitmen satu tanggal. Nyatakan tanggal yang didukung persentil terpilih, jelaskan asumsi, dan catat imbal balik lingkup secara terbuka. Bila ada tanggal wajib, rencanakan lingkup agar muat di dalamnya (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya rendah. Data throughput dan cycle time biasanya sudah ada di pelacak pekerjaan tim. Spreadsheet peramalan atau skrip kecil memakan sehari untuk dibangun, dan perkiraan memakan menit untuk diperbarui. Biaya berulangnya adalah waktu untuk mencatat perkiraan dan hasil, dan mengadakan percakapan titik periksa singkat dengan pemangku kepentingan.

Imbal hasil datang dari lebih sedikit kejutan dan keputusan lebih baik. Pemangku kepentingan yang memahami risiko dapat memilih penyangga, menyesuaikan lingkup, atau menyusun ulang pekerjaan lebih awal. Tim menghabiskan lebih sedikit waktu pada upacara estimasi jika menghitung item melayani sama baiknya. Konflik tanggal terlewat dan jalan pintas kualitas yang dipicunya berkurang. Bangun kasusnya dari catatan Anda sendiri: porsi perkiraan yang bertahan, waktu yang dihabiskan mengestimasi, dan perubahan lingkup yang dibuat lebih awal alih-alih terlambat. Jangan meminjam angka keterprediksian dari organisasi lain.

## Anti-pola dan jebakan

- **Memperlakukan perkiraan sebagai komitmen.** Itu mengubah perkiraan menjadi target, dan kejujuran menjadi mahal. Sajikan rentang dan revisi.
- **Membandingkan tim dengan velocity.** Poin bersifat lokal, dan perbandingan menggelembungkannya. Bandingkan tim hanya dengan masa lalunya sendiri.
- **Merencanakan pada utilisasi penuh.** Variasi berubah menjadi keterlambatan. Sisakan kelonggaran.
- **Mengabaikan pekerjaan operasional.** Rencana gagal pada beban yang tak direncanakan siapa pun. Ukur dan rencanakan alokasinya.
- **Memakai satu tanggal untuk segalanya.** Pakai persentil dan katakan mana yang Anda pilih.
- **Mengestimasi lebih presisi daripada yang didukung data.** Estimasi rinci untuk pekerjaan yang jauh adalah yang paling tidak andal. Perkirakan pekerjaan jauh secara kasar.
- **Menetapkan target velocity atau throughput.** Angka akan naik dan nilainya tidak.
- **Tak pernah memberi skor pada perkiraan.** Tanpa rekam jejak, kepercayaan tak dapat tumbuh.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Metode peramalan | Tebakan satu tanggal | Estimasi dijumlahkan dengan tangan | Rentang berbasis alur dengan persentil | Perkiraan dicatat dan diberi skor; metode disetel dari tingkat ketepatan | Perkiraan digabung lintas tim dan ketergantungan, dibagikan langsung kepada pemangku kepentingan |
| Perencanaan kapasitas | Rencana mengabaikan pekerjaan operasional | Beban operasional diketahui kasar | Kapasitas dialokasikan menurut jenis pekerjaan dari data | Alokasi ditinjau terhadap hasil; waktu perbaikan dilindungi | Kapasitas direncanakan bersama pemasok dan operasi lintas layanan |
| Tujuan dan pemakaian angka | Tujuan adalah daftar tugas | Tujuan ditulis | Tujuan dinilai menurut hasil bersama pemangku kepentingan | Kegagalan dianalisis sebagai sinyal sistem; angka lokal dijaga pribadi | Tujuan ditetapkan dan dinilai secara kolaboratif dengan pengguna; pembelajaran dibagikan antartim |

## Daftar periksa

- [ ] Perkiraan dibangun dari riwayat throughput dan cycle time tim sendiri.
- [ ] Perkiraan diberikan sebagai rentang dengan persentil, dengan asumsi dinyatakan.
- [ ] Setiap perkiraan dicatat beserta rentang dan hasil sebenarnya.
- [ ] Tingkat ketepatan perkiraan dan lebar rentang ditinjau bulanan.
- [ ] Kapasitas dialokasikan menurut jenis pekerjaan, termasuk pekerjaan operasional dan perbaikan.
- [ ] Utilisasi terencana menyisakan kelonggaran untuk variasi dan insiden.
- [ ] Satuan ukuran atau velocity apa pun bersifat pribadi bagi tim dan tidak membawa target.
- [ ] Tujuan pengiriman ditulis sebagai hasil dan dinilai bersama pemangku kepentingan.
- [ ] Perubahan lingkup dicatat dengan alasan.
- [ ] Perkiraan disegarkan ketika fakta berubah, dan pemangku kepentingan diberi tahu.

## Prompt AI

**Bangun perkiraan berbasis throughput.**

```text
Tim kami menyelesaikan jumlah item berikut pada tiap [number] pekan terakhir:
[paste weekly counts]. Kami ingin tahu kapan [number] item kemungkinan selesai.
Jelaskan cara menghasilkan rentang probabilitas memakai riwayat kami sendiri,
berikan contoh kerja metode simulasi sederhana, dan jelaskan asumsi yang
dibuatnya. Jangan mengarang riwayat atau nilai acuan. Daftar asumsi Anda dan
kondisi ketika perkiraan itu tidak berlaku.
```

**Tinjau cara kita memakai estimasi.**

```text
Kami mengukur item sebagai [unit] dan memakai [practice] untuk merencanakan.
Berikut sampel [number] item selesai dengan estimasi dan cycle time sebenarnya
dalam hari: [paste data]. Jelaskan apakah estimasi memprediksi cycle time dalam
sampel ini, apa implikasinya bagi seberapa banyak upaya yang layak untuk
mengestimasi, dan apa yang dapat kami coba sebagai gantinya. Jangan mengklaim
hasil melampaui data. Daftar asumsi Anda.
```

**Rencanakan kapasitas lintas pekerjaan perubahan dan menjalankan.**

```text
Selama [period] terakhir, tim kami menyelesaikan [counts] item dengan jenis
berikut: [planned change, incidents, requests, improvement]. Usulkan alokasi
kapasitas untuk [period] berikutnya yang menyisakan kelonggaran, dan jelaskan
cara menyampaikannya kepada pemangku kepentingan. Sarankan cara mendeteksi bila
pekerjaan operasional salah dilabeli. Jangan mengarang rasio industri. Daftar
asumsi Anda.
```

**Susun tinjauan perkiraan dengan pemangku kepentingan.**

```text
Susun agenda dan ringkasan satu halaman untuk titik periksa perkiraan atas
[piece of work]. Data: perkiraan asli [range], status saat ini [description],
perubahan sejak titik periksa terakhir [list]. Sertakan rentang yang diperbarui,
apa yang mengubahnya, opsi untuk lingkup atau waktu, dan pertanyaan yang perlu
dijawab pemangku kepentingan. Pakai bahasa sederhana. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik peramalan atau perencanaan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik perencanaan yang direvisi mempertahankan vektor manipulasi dan pagar pembatasnya.

## Poin penting

- Perkirakan dari alur pekerjaan yang selesai, dan berikan rentang dengan probabilitas alih-alih satu tanggal.
- Rencanakan terhadap kapasitas nyata, termasuk pekerjaan operasional, waktu perbaikan, dan kelonggaran.
- Perlakukan satuan estimasi atau velocity apa pun sebagai alat bantu pribadi satu tim, tidak pernah target atau perbandingan.
- Beri skor pada perkiraan Anda: tingkat ketepatan membangun kepercayaan.
- Nilai tujuan pengiriman menurut hasil, bersama pemangku kepentingan dan pengguna.
- Percayai dan dukung tim: perkiraan jujur datang dari orang yang tidak dihukum karena ketidakpastian.

## Referensi dan bacaan lanjutan

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
