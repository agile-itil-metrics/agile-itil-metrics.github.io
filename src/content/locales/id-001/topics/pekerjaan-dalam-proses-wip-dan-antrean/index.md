# Pekerjaan dalam proses (WIP) dan antrean

**Tim yang sepenuhnya sibuk adalah tim yang pekerjaannya menunggu, jadi ukur berapa banyak pekerjaan dalam proses, berapa lama antre, dan seberapa dekat tim berjalan dengan kapasitas, dan pakai aritmetika antrean untuk menetapkan batas sebelum keterlambatan tiba.**

## Gambaran umum dan motivasi

Setiap tim layanan punya antrean, entah memakai kata itu atau tidak. Insiden menunggu triase, permintaan menunggu persetujuan, perubahan menunggu slot tinjauan, dan item backlog menunggu seseorang menariknya. Sebagian besar waktu terlewat dalam sistem ini dihabiskan menunggu, bukan bekerja. Ukuran dalam topik ini menjelaskan mengapa penantian tumbuh, bagaimana melihatnya lebih awal, dan apa yang dapat dilakukan tim.

Besaran sentralnya adalah [pekerjaan dalam proses](https://en.wikipedia.org/wiki/Work_in_process) (WIP), jumlah item yang sudah dimulai dan belum selesai. Tim agile yang mengelola alur membuat WIP terlihat pada papan dan membatasinya dengan batas WIP. Operasi layanan di bawah ITIL menghitung insiden, permintaan, dan perubahan yang terbuka, dan menyebut kumpulannya antrean atau backlog catatan. Kedua pandangan menggambarkan hal yang sama: item di dalam sistem yang belum menyampaikannya. Topik ini memakai “pekerjaan dalam proses” untuk keduanya, dan menyatakan batasnya setiap kali (status mana yang dihitung sebagai “dalam proses” dan mana yang tidak), karena batas itu menentukan setiap angka berikutnya.

Matematikanya berasal dari [teori antrean](https://en.wikipedia.org/wiki/Queueing_theory), studi tentang garis penantian. Hasilnya yang paling berguna bagi tim layanan adalah [hukum Little](https://en.wikipedia.org/wiki/Little%27s_law), dibuktikan John Little pada 1961. Untuk sistem stabil, jumlah rata-rata item dalam sistem sama dengan laju kedatangan rata-rata dikalikan waktu rata-rata item berada dalam sistem. Dalam istilah pengiriman, WIP rata-rata sama dengan throughput rata-rata dikalikan cycle time rata-rata. Hukum ini berlaku terlepas dari urutan item dilayani, yang menjadikannya pemeriksaan kewajaran murah atas set ukuran alur mana pun (lihat topik 2.1, Ukuran alur, dan topik 2.2, Lead time, cycle time, dan efisiensi alur).

Hasil kedua kurang nyaman. Ketika sumber daya bersama mendekati pemakaian penuh, waktu tunggu naik makin lama makin cepat. Pendekatan terkait, [rumus Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula), menunjukkan bahwa keterlambatan antrean tumbuh bersama utilisasi sebanding dengan rasio utilisasi terhadap fraksi menganggur yang tersisa, dan juga tumbuh bersama variabilitas kedatangan dan waktu layanan. Pekerjaan dukungan dan operasi bersifat variabel secara alami, karena insiden datang dalam gelombang dan upaya per item sangat berbeda. Tim yang merencanakan 100 persen sibuk karena itu telah merencanakan penantian panjang, dan insiden besar pertama mengubah penantian panjang menjadi backlog yang butuh berpekan-pekan untuk dibersihkan.

Istilah yang dipakai dalam topik ini:

- **Laju kedatangan** adalah jumlah item yang memasuki sistem per satuan waktu.
- **Throughput** (atau laju keberangkatan) adalah jumlah item yang meninggalkan sistem sebagai selesai, per satuan waktu.
- **Cycle time** adalah waktu terlewat dari saat item memasuki batas sistem sampai saat meninggalkannya. Topik ini memakai jam yang sama dengan topik 2.2.
- **Waktu antre** adalah bagian waktu terlewat ketika item menunggu dan tak seorang pun mengerjakannya.
- **Utilisasi** adalah fraksi kapasitas tersedia yang dipakai. Untuk tim, kapasitas dinyatakan dalam jam kerja atau jumlah item yang dapat ditangani paralel. Utilisasi adalah sifat tim atau kolam sumber daya, tidak pernah individu.
- **Batas WIP** adalah jumlah maksimum item yang disepakati pada satu tahap atau pada seluruh sistem. Item baru tidak dimulai ketika batas tercapai.
- **Hambatan** adalah tahap dengan kapasitas paling sedikit relatif terhadap permintaan. Ia menetapkan laju seluruh rantai, hal yang dikembangkan oleh [teori kendala](https://en.wikipedia.org/wiki/Theory_of_constraints) dan gagasannya tentang [hambatan](https://en.wikipedia.org/wiki/Bottleneck_(production)).

Pandangan agile dan ITIL bertemu di sini: ITIL 4 (2019) memperlakukan manajemen kapasitas dan kinerja, manajemen insiden, dan manajemen permintaan layanan sebagai praktik yang bergantung pada pencocokan kapasitas dengan permintaan, dan metode agile menyatakan gagasan yang sama sebagai membatasi pekerjaan yang sedang berjalan dan menyelesaikan sebelum memulai. [Pengembangan perangkat lunak lean](https://en.wikipedia.org/wiki/Lean_software_development) memperlakukan pekerjaan yang belum selesai sebagai persediaan dengan biaya penyimpanan dan risiko.

## Prinsip utama

- **Menunggu mendominasi waktu terlewat.** Pada kebanyakan sistem layanan dan pengiriman, item menunggu jauh lebih lama daripada dikerjakan, jadi mengurangi penantian adalah tuas yang lebih besar daripada bekerja lebih cepat.
- **Hukum Little mengaitkan tiga angka alur.** WIP rata-rata, throughput, dan cycle time tidak dapat ditetapkan secara terpisah. Jika Anda menginginkan cycle time lebih pendek pada throughput yang sama, Anda harus menurunkan WIP.
- **Keterlambatan tumbuh curam mendekati utilisasi penuh.** Kelonggaran adalah harga ketanggapan. Tim tanpa kapasitas cadangan tidak dapat menyerap gelombang atau item mendesak tanpa membuat segalanya yang lain terlambat.
- **Variabilitas memperkuat antrean.** Kedatangan yang tak merata dan ukuran item yang tak merata memperpanjang antrean bahkan ketika beban rata-rata tampak dapat diterima. Kurangi variabilitas di mana bisa dan tampung di mana tidak.
- **Batasi WIP untuk menyelesaikan pekerjaan, bukan agar tampak sibuk.** Batas WIP adalah pemicu percakapan tentang pekerjaan terhalang dan kapasitas, bukan aturan kepatuhan.
- **Ukur pada tingkat sistem.** WIP, panjang antrean, dan utilisasi menggambarkan tim dan layanan, tidak pernah orang di dalamnya.
- **Laporkan distribusi, bukan rata-rata.** Waktu antre berekor panjang, jadi tampilkan median dan persentil tinggi seperti ke-85 atau ke-95 (lihat topik 1.6, Literasi statistik untuk metrik layanan).

## Definisi metrik

Tujuh ukuran mencakup topik ini. Masing-masing didefinisikan untuk batas bernama yang dituliskan tim di register metriknya (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pekerjaan dalam proses | Jumlah item yang dimulai dan belum selesai di dalam batas yang disepakati | Hitungan item dalam status “dalam proses” pada waktu potret; item di backlog atau antrean “siap” sebelum status kerja pertama dan item yang sudah selesai dikecualikan | item | Riwayat status pelacak isu atau alat ITSM | Manajemen insiden; manajemen permintaan layanan | Hitungan WIP pada papan | Potret harian, ditinjau mingguan |
| Panjang antrean | Jumlah item yang menunggu pekerjaan dimulai atau menunggu di antara tahap | Hitungan item dalam status menunggu (misalnya “baru,” “menunggu triase,” “menunggu tinjauan”) pada waktu potret; item terhalang dilaporkan terpisah, tidak ditambahkan | item | Riwayat status pelacak atau ITSM | Manajemen insiden; pemberdayaan perubahan | Kolom siap dan kolom antrean pada papan | Potret harian, ditinjau mingguan |
| Waktu antre | Waktu terlewat sebuah item menunggu sebelum pekerjaan dimulai, per tahap | Jam dimulai ketika item memasuki status menunggu dan berhenti ketika memasuki status aktif berikutnya; waktu dalam status yang ditandai “terhalang pelanggan” dikecualikan dan dilaporkan sebagai angka tersendiri; laporkan median dan persentil ke-85 | jam atau hari | Stempel waktu transisi status dalam pelacak atau alat ITSM | Service desk; manajemen insiden; pemberdayaan perubahan | Waktu tunggu dalam aliran nilai; waktu di kolom antrean | Mingguan |
| Laju kedatangan dan keberangkatan | Item yang masuk dan keluar sistem per periode, dan selisihnya sebagai pertumbuhan antrean bersih | Kedatangan = item yang memasuki batas pada periode itu; keberangkatan = item yang selesai pada periode itu; pertumbuhan bersih = kedatangan dikurangi keberangkatan; item yang dibuka kembali dihitung sebagai kedatangan hanya bila tim mendefinisikannya demikian | item per pekan | Stempel waktu pembuatan dan penyelesaian pelacak atau ITSM | Manajemen pemantauan dan peristiwa; manajemen insiden | Throughput dan diagram alur kumulatif | Mingguan |
| Rasio beban tim | Porsi kapasitas tim yang akan dikonsumsi pekerjaan terencana dan yang diharapkan | Jam permintaan yang diharapkan pada periode itu (kedatangan dikali upaya rata-rata per item) / jam kapasitas yang tersedia setelah cuti dan komitmen tetap; tim menyatakan cara memperkirakan upaya; individu tidak pernah dilaporkan | persen | Rencana kapasitas, riwayat upaya pelacak, rota | Manajemen kapasitas dan kinerja; manajemen tenaga kerja dan talenta | Kapasitas tim dalam pekerjaan terencana | Bulanan, dan pada setiap acara perencanaan |
| Tingkat pelanggaran batas WIP | Porsi hari ketika tahap atau sistem melampaui batas WIP yang disepakati | Hari dengan WIP di atas batas / hari kerja pada periode itu; hari ketika tim mencatat pengecualian yang disengaja beserta alasannya dilaporkan terpisah | persen hari | Potret WIP harian dan log pengecualian | Perbaikan berkelanjutan; manajemen insiden | Kesepakatan kerja batas WIP | Mingguan |
| Rasio konsistensi hukum Little | Pemeriksaan bahwa ketiga angka alur sepakat satu sama lain | WIP rata-rata selama periode / (keberangkatan per hari dikali cycle time rata-rata dalam hari) untuk batas dan periode yang sama; rasio mendekati 1 berarti definisi konsisten, rasio jauh dari 1 berarti batas atau jam tidak konsisten | rasio | Data pelacak yang sama dengan metrik alur lain | Pengukuran dan pelaporan | Pemeriksaan kewajaran metrik alur dalam retrospektif | Bulanan |

## Rekomendasi

### Definisikan batasnya lebih dulu

**1. Tulis batas sistem sebelum menghitung apa pun.** Nyatakan status mana yang memulai “dalam proses” dan mana yang mengakhirinya, dan item mana yang dikecualikan (misalnya pemeliharaan terjadwal, atau item yang menunggu pelanggan). Dua tim yang menghitung WIP berbeda akan menghasilkan angka yang tak dapat dibandingkan, dan batas yang bergeser diam-diam akan merusak pemeriksaan hukum Little. Catat batas di register metrik dan ubah hanya dengan alasan tercatat.

**2. Pisahkan menunggu dari bekerja dalam model status.** Jika satu status mencakup “antre untuk tinjauan” dan “sedang ditinjau,” waktu antre tak terlihat. Beri keadaan menunggu nama sendiri, seperti dijelaskan dalam topik 1.5, Sumber data dan instrumentasi, agar stempel waktu transisi mengungkap keterlambatan. Biaya satu status tambahan kecil dibandingkan nilai melihat di mana item duduk.

### Pakai hukum Little sebagai pemeriksaan konsistensi

**3. Jalankan pemeriksaan hukum Little setiap bulan.** Hitung WIP rata-rata, throughput, dan cycle time rata-rata untuk periode dan batas yang sama, dan lihat apakah kira-kira sepakat. Ketidakcocokan besar biasanya berarti item masuk atau keluar sistem tanpa dihitung, atau item lama diparkir dalam status tak terawasi. Perbaiki data sebelum menafsirkan tren apa pun. Hukum itu adalah teorema tentang sistem stabil, jadi terapkan pada periode ketika antrean tidak tumbuh atau menyusut secara dramatis.

### Awasi utilisasi dan pertumbuhan antrean

**4. Rencanakan kelonggaran di mana variabilitas tinggi.** Untuk penanganan insiden, pekerjaan siaga, dan antrean mana pun yang disuapi permintaan acak, rencanakan di bawah kapasitas penuh agar gelombang tidak menjadi backlog. Tim sering mendapati rasio beban yang tampak nyaman di atas kertas sudah terlalu tinggi setelah interupsi dihitung (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana). Sepakati rentang target dengan orang yang mengerjakan pekerjaan dan tinjau setelah insiden besar.

**5. Lacak pertumbuhan antrean bersih selain ukuran antrean.** Antrean 40 item yang menyusut itu sehat, dan antrean 15 yang tumbuh 5 item seminggu tidak. Bandingkan kedatangan dan keberangkatan setiap pekan, dan plot tren dengan [diagram alur kumulatif](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), tempat pita yang melebar untuk suatu tahap menandakan WIP yang tumbuh di sana. Ketika kedatangan melebihi keberangkatan selama beberapa pekan, antrean tumbuh tanpa batas dan sebuah keputusan jatuh tempo: tambah kapasitas, kurangi permintaan, atau ubah apa yang diterima.

**6. Baca waktu antre per tahap untuk menemukan hambatan.** Pecah waktu terlewat menjadi periode penantian per tahap. Tahap dengan waktu antre terlama dan item menunggu terbanyak adalah kandidat hambatan. Memperbaiki tahap lain mana pun tidak akan memperpendek seluruh sistem, jadi arahkan upaya perbaikan pada kendala, dan periksa lagi sesudahnya karena kendala berpindah.

### Batasi WIP dengan cara yang berhasil

**7. Tetapkan batas WIP pertama dari pengamatan, lalu sesuaikan.** Mulailah dekat WIP rata-rata saat ini, atau sedikit di bawahnya, dan amati apa yang terjadi pada cycle time dan item terhalang. Turunkan batas selangkah demi selangkah selama tim masih dapat menjaga setiap orang produktif menyelesaikan pekerjaan. Tidak ada angka benar yang universal, dan angka yang dipinjam dari tim lain tidak membawa bukti untuk tim Anda.

**8. Perlakukan pelanggaran sebagai dorongan, bukan pelanggaran aturan.** Ketika WIP melampaui batas, tanyakan apa yang menghalangi penyelesaian dan siapa yang dapat mengeroyoknya. Pelanggaran yang dicatat dengan alasan, seperti perbaikan produksi mendesak, adalah informasi. Jika pelanggaran menjadi rutin, batas itu salah atau sistem kelebihan beban, dan tanggapannya adalah percakapan kapasitas, bukan teguran.

**9. Terapkan batas pada seluruh aliran nilai, bukan satu kolom.** Batas pada “sedang dikerjakan” saja membiarkan pekerjaan menumpuk di antrean tinjauan, pengujian, dan persetujuan. Batasi jumlah item dalam sistem dari ujung ke ujung, dan tambahkan batas tahap di mana antrean tertentu terus tumbuh. Tahap bersama seperti tinjauan penasihat perubahan atau lingkungan pengujian layak mendapat batas terlihat dan waktu antre sendiri.

### Tangani pekerjaan mendesak dan variabel dengan sengaja

**10. Beri pekerjaan ekspedit sebuah kebijakan.** Tanpa itu, item mendesak diam-diam melampaui setiap batas dan tim tak dapat membedakan beban terencana dari tak terencana. Definisikan apa yang memenuhi syarat, berapa banyak item ekspedit boleh berjalan, dan pekerjaan mana yang berhenti. Hitung item ekspedit dan efeknya pada waktu antre, agar harga urgensi terlihat bagi yang memintanya (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Pekerjaan dalam proses | Memindahkan item ke status “diparkir” atau “ditahan” agar tetap di bawah batas; memecah item agar tampak lebih kecil; memulai pekerjaan di luar papan | Hitungan item dalam status diparkir dan usianya; ambil sampel papan terhadap pekerjaan nyata; laporkan item tertua dalam proses |
| Panjang antrean | Menutup dan membuka kembali item; menolak item baru di pintu; mengganti nama status menunggu sehingga jatuh di luar hitungan | Tingkat pembukaan ulang dan tingkat penolakan di samping panjang antrean; tinjauan definisi status pada setiap tinjauan metrik |
| Waktu antre | Memulai jam terlambat dengan membuat catatan setelah pekerjaan siap; menjeda jam lewat status terhalang atau menunggu pelanggan; menandai item sedang berjalan padahal baru dibuka | Distribusi waktu dalam status terhalang dan jeda; porsi item yang dibuat setelah dimulai; waktu tunggu yang dilaporkan peminta dari survei singkat |
| Laju kedatangan dan keberangkatan | Menutup item dengan cepat untuk menaikkan keberangkatan; memecah satu permintaan menjadi banyak untuk menaikkan kedua hitungan; menghitung duplikat sebagai kedatangan | Ukuran kualitas dan pembukaan ulang pada item tertutup (lihat topik 3.3, Waktu respons dan penyelesaian insiden); distribusi ukuran item; pemeriksaan hasil bagi pelanggan |
| Rasio beban tim | Meremehkan upaya untuk menunjukkan kapasitas cadangan, atau melebih-lebihkan permintaan untuk membenarkan penambahan staf; melaporkan rasio untuk periode yang menguntungkan | Bandingkan upaya yang diperkirakan dan sebenarnya per item; tampilkan rasio dengan trennya dan porsi interupsi; tinjauan sejawat atas metode estimasi |
| Tingkat pelanggaran batas WIP | Menaikkan batas untuk menghentikan pelanggaran; menyembunyikan pelanggaran dengan memindahkan item dari papan; memberi pengecualian dengan longgar | Jumlah dan alasan pengecualian; riwayat perubahan batas beserta tanggal; persentil cycle time di samping tingkat pelanggaran |
| Rasio konsistensi hukum Little | Menyesuaikan batas atau periode sampai rasio mendekati 1; mengecualikan item berumur panjang sebagai pencilan | Tetapkan batas dan periode di muka; terbitkan item yang dikecualikan dan jumlahnya; tinjau perubahan batas dengan alasan |

Pembacaan yang sehat adalah tim yang WIP-nya stabil atau menurun, persentil waktu antre-nya datar atau membaik, kedatangan dan keberangkatannya kira-kira seimbang, dan pelanggarannya disertai alasan yang berujung pada tindakan. Rasio hukum Little berkisar di dekat 1 karena datanya konsisten, bukan karena seseorang menyetelnya.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Batas WIP ketat | Cycle time lebih pendek, masalah ditemukan lebih awal, lebih banyak penyelesaian | Waktu menganggur bisa muncul di suatu tahap; butuh disiplin dan sedikit lintas keterampilan; bisa mengecewakan pemangku kepentingan yang ingin pekerjaan dimulai |
| Batas WIP longgar atau tanpa batas | Semua orang tampak sibuk dan permintaan diterima cepat | Antrean panjang, pengiriman lambat, sumbatan tersembunyi, banyak pergantian konteks |
| Kapasitas kelonggaran terencana | Menyerap gelombang dan pekerjaan mendesak; menjaga waktu respons pendek | Tampak seperti pemborosan pada laporan utilisasi; butuh pimpinan menerima efisiensi tampak yang lebih rendah |
| Utilisasi terencana tinggi | Tampak efisien dan murah per jam | Penantian tumbuh curam saat beban mendekati kapasitas; rapuh terhadap gangguan apa pun |
| Memakai hukum Little untuk perencanaan | Sederhana, umum, dan cepat diterapkan | Valid hanya untuk sistem stabil dan untuk rata-rata; tak mengatakan apa-apa tentang satu item |

Batasi WIP dan jaga kelonggaran di mana variabilitas dan biaya keterlambatan tinggi, dan terima batas lebih longgar di mana pekerjaan stabil dan independen.

Dalam model buku teks paling sederhana tentang satu server dengan kedatangan dan waktu layanan acak (antrean M/M/1), waktu rata-rata dalam sistem adalah waktu layanan dibagi satu dikurangi utilisasi: 2 kali pada 50 persen, 5 kali pada 80 persen, 10 kali pada 90 persen, dan 20 kali pada 95 persen. Tim sungguhan bukan server tunggal, jadi perlakukan angka-angka ini sebagai bentuk kurva, bukan perkiraan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa yang dihitung sebagai “dalam proses” bagi kita, dan apakah kita semua menghitungnya dengan cara yang sama?**
Minta setiap orang menyebut status pertama dan terakhir yang menjadikan item bagian dari WIP, lalu bandingkan jawaban. Cari status seperti “ditahan” atau “menunggu pelanggan” yang dihitung sebagian orang dan tidak oleh yang lain. Sepakati satu batas dan tuliskan. Fasilitator sebaiknya mencatat bagaimana jawaban itu akan mengubah angka WIP, karena itu menunjukkan seberapa sensitif metrik terhadap definisi.

**2. Di mana item kita menunggu paling lama, dan siapa yang memiliki antrean itu?**
Gambar alur dari kedatangan sampai selesai dan tandai titik penantian. Dengan data sebulan terakhir, perkirakan median dan persentil ke-85 penantian di setiap titik. Bahas antrean mana yang tak dimiliki siapa pun, seperti langkah persetujuan atau lingkungan pengujian bersama. Sepakati satu antrean untuk diperiksa rinci dan seseorang untuk membawa datanya lain kali.

**3. Seberapa sibuk yang terlalu sibuk untuk jenis pekerjaan kita?**
Bandingkan beban terencana dengan porsi waktu yang sebenarnya dihabiskan untuk interupsi dan item mendesak. Tanyakan apa yang terjadi pada antrean terakhir kali permintaan melonjak. Bahas gagasan bahwa tim tanpa kapasitas cadangan tidak dapat merespons dengan cepat. Fasilitator sebaiknya mengarahkan ke rentang target untuk rasio beban, bukan angka tunggal, dan rencana untuk apa yang terjadi bila rentang itu terlampaui.

**4. Apakah antrean kita tumbuh, menyusut, atau stabil, dan bagaimana kita tahu?**
Lihat kedatangan dan keberangkatan delapan pekan terakhir. Bagan sederhana sudah cukup. Tanyakan apakah ada yang akan menyadari kenaikan pelan sebelum menjadi masalah, dan sinyal apa yang akan memicu tindakan. Sepakati apa yang sebaiknya dilakukan tim bila keberangkatan tertinggal dari kedatangan tiga pekan berturut-turut.

**5. Apa yang terjadi jika kita menurunkan batas WIP kita satu?**
Minta orang memprediksi item mana yang akan menunggu, mana yang selesai lebih cepat, dan apa yang akan mereka lakukan ketika tak dapat memulai sesuatu yang baru. Angkat ketakutan seperti dianggap menganggur.

**6. Apakah angka-angka kita sepakat satu sama lain?**
Ambil data sebulan dan hitung WIP rata-rata, throughput, dan cycle time rata-rata. Periksa apakah WIP kira-kira throughput dikali cycle time. Jika tidak, cari penyebabnya, seperti item yang selesai tetapi tidak ditutup, atau item ditutup tanpa pernah dimulai. Fasilitator sebaiknya memperlakukan ketidakcocokan sebagai hadiah: ia menunjuk pada masalah data atau definisi yang kalau tidak akan mendistorsi setiap metrik alur lain.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman merasakan efek WIP berlebih sebagai pergantian konteks, umpan balik terlambat, dan pekerjaan belum selesai yang membusuk. Mereka paling diuntungkan oleh batas WIP yang terlihat, item kecil, dan kebiasaan menyelesaikan sebelum memulai. Tim sebaiknya melihat waktu antre di antara tahapnya sendiri, seperti menunggu tinjauan, karena keterlambatan ini biasanya lebih besar daripada waktu menulis kode (lihat topik 2.7, Metrik pull request dan tinjauan kode).

### Tim layanan dan operasi

Tim operasi menghadapi permintaan acak, sehingga efek antrean kuat. Service desk, rotasi siaga, dan dewan tinjauan perubahan masing-masing berperilaku seperti antrean dengan kedatangan variabel. Tim ini membutuhkan kelonggaran eksplisit, aturan prioritas yang jelas, dan kebijakan untuk pekerjaan ekspedit agar item mendesak tidak diam-diam menggeser segalanya yang lain (lihat topik 3.1, Metrik service desk, dan topik 5.7, Metrik pekerjaan berulang dan siaga). Ukur waktu antre di setiap serah terima, dan awasi pekerjaan yang memantul di antara kelompok (lihat topik 9.3, Metrik kolaborasi dan serah terima).

### Kepemimpinan dan tata kelola

Pemimpin memengaruhi antrean lewat permintaan yang mereka terima dan utilisasi yang mereka hargai. Mereka sebaiknya meminta persentil waktu antre dan pertumbuhan antrean bersih selain utilisasi, dan mengharapkan bahwa layanan yang sehat berjalan di bawah kapasitas penuh. Permintaan menambah proyek ke tim yang sudah pada batasnya adalah keputusan memperpanjang cycle time semua orang, dan tata kelola sebaiknya membuat imbal balik itu eksplisit. Danai kapasitas untuk kendala alih-alih dorongan efisiensi umum (lihat topik 5.4, Metrik kapasitas dan kinerja).

### Pelanggan dan pengguna

Pelanggan mengalami antrean sebagai menunggu respons, dan mereka jarang peduli seberapa sibuk tim. Mereka butuh ekspektasi jujur berdasarkan distribusi penantian masa lalu, cara melihat status permintaan mereka, dan jalur eskalasi untuk kebutuhan mendesak. Membatasi WIP dapat berarti penerimaan permintaan baru lebih lambat dan penyelesaian permintaan yang diterima lebih cepat, dan pilihan itu sebaiknya dijelaskan kepada mereka (lihat topik 6.2, Perjanjian tingkat pengalaman).

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional memiliki service desk, tim infrastruktur, dan tim aplikasi. Semua angka dalam contoh ini bersifat ilustratif.

Tim aplikasi menangani permintaan layanan dan perubahan kecil untuk sistem klinis. Selama satu kuartal, dasbornya menunjukkan median cycle time naik dari 6 hari kerja menjadi 11, sementara tim melaporkan “mentok.” Rasio beban yang dihitung tim untuk kuartal itu adalah 98 persen. Persentil ke-85 waktu antre untuk tahap “menunggu persetujuan klinis” adalah 9 hari kerja, dan WIP rata-rata pada papan adalah 44 item terhadap throughput 4 item per hari kerja. Menerapkan hukum Little, 44 dibagi 4 menghasilkan cycle time rata-rata tersirat 11 hari kerja, yang sesuai dengan angka terukur, jadi datanya konsisten dan tim memercayainya.

Kepala departemen pertama-tama menyarankan merekrut kontraktor. Ketua tim menunjuk rincian tahap: dari 11 hari, antrean sebelum persetujuan klinis dan antrean sebelum deployment menyumbang sebagian besar waktu terlewat, dan pekerjaan aktif porsi kecil. Kedatangan selama kuartal melebihi keberangkatan sekitar 2 item per pekan, sehingga antrean tumbuh terus. Tim juga telah menerima setiap permintaan mendesak, dan item ekspedit tidak memiliki kebijakan.

Tim memutuskan empat perubahan, dicatat dalam log keputusan. Ia menetapkan batas WIP seluruh sistem 30 item, dengan batas tahap 8 pada antrean persetujuan. Ia merencanakan rasio beban sekitar 80 persen agar interupsi yang diharapkan muat. Ia menulis kebijakan ekspedit yang mengizinkan paling banyak dua item mendesak berjalan. Ia meminta kelompok persetujuan klinis mengadakan slot tinjauan harian singkat alih-alih rapat mingguan. Setelah delapan pekan, tim melaporkan median cycle time 7 hari kerja, persentil ke-85 waktu antre pada persetujuan sebesar 3 hari kerja, dan tingkat pelanggaran 10 persen hari, dengan alasan tercatat.

Tim menangkap risiko manipulasi pada bulan kedua. Tingkat pelanggaran tampak sangat baik, namun sampel papan menunjukkan beberapa item dalam status baru bernama “tertunda,” yang berada di luar hitungan WIP, dan pagar pembatas hitungan status diparkir terus naik. Tim menghapus status itu, memindahkan item kembali ke hitungan, dan mewajibkan setiap status baru ditambahkan ke register beserta definisi. Tingkat pelanggaran naik menjadi 18 persen selama beberapa pekan, yang diterima tim sebagai angka yang jujur, lalu turun seiring item terhalang diselesaikan.

## Sudut pandang sektor

**Startup.** Permintaan tak merata dan godaannya adalah memulai segalanya. Papan sederhana dengan batas WIP yang terlihat dan pemeriksaan mingguan atas item tertua dalam proses sudah cukup. Simpan kelonggaran untuk masalah produksi, karena satu gangguan dapat menghabiskan seluruh tim.

**Bisnis kecil.** Satu atau dua orang sering menangani dukungan, proyek, dan administrasi, dan kotak masuk adalah antreannya. Pisahkan pekerjaan terencana dari reaktif, tetapkan batas harian pada tugas yang dimulai, dan beri tahu pelanggan penantian biasa untuk setiap jenis permintaan.

**Perusahaan besar.** Banyak tim berbagi tahap seperti persetujuan perubahan, tinjauan keamanan, dan lingkungan pengujian, dan antrean bersama sering yang terpanjang. Ukur waktu antre pada tahap bersama dan terbitkan, beri setiap tahap bersama seorang pemilik, dan hindari melaporkan utilisasi sebagai target. Alat mungkin menghitung WIP secara berbeda antartim, jadi sepakati batas bersama dan kosakata status bersama sebelum merekap (lihat topik 2.4, Metrik aliran nilai).

**Pemerintah dan sektor publik.** Tenggat undang-undang, langkah pengadaan, dan persetujuan formal menciptakan antrean panjang yang tidak dikendalikan tim. Pisahkan waktu yang dikendalikan tim dari waktu menunggu badan lain, dan laporkan keduanya. Di mana target layanan ditetapkan oleh hukum atau regulasi, dokumentasikan aturan jam dan jeda apa pun, dan simpan jejak audit (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah pengiriman lebih cepat dan lebih dapat diprediksi tanpa menambah staf, karena menunggu mendominasi waktu terlewat dan pemotongan sederhana pada WIP atau antrean persetujuan panjang memperpendek cycle time setiap item sesudahnya. Kelonggaran terencana juga memungkinkan tim menyerap insiden besar tanpa kehilangan berpekan-pekan pekerjaan lain.

Biayanya sederhana dan sebagian besar manusia: upaya mendefinisikan batas dan status, membangun potret WIP harian dan laporan waktu antre dari data alat yang ada, dan mengadakan tinjauan mingguan singkat. Membatasi WIP juga berarti mengatakan belum kepada sebagian permintaan, yang membutuhkan persetujuan pemangku kepentingan, dan kapasitas menganggur adalah biaya tampak yang perlu dipahami pemimpin sebagai asuransi terhadap keterlambatan.

Imbal hasil sebaiknya digambarkan lewat pola yang dapat diukur organisasi sendiri alih-alih persentase pinjaman. Lacak median dan persentil ke-85 cycle time sebelum dan sesudah batas, jumlah item yang menua melampaui ambang yang disepakati, tingkat pelanggaran dan alasannya, dan porsi waktu yang dihabiskan untuk pekerjaan mendesak. Kasus bisnis paling kuat ketika mengaitkan waktu antre dengan sesuatu yang sudah dirasakan bisnis, seperti menunggu akses karyawan baru, perubahan sistem klinis, atau perbaikan pelanggan. Total biaya kepemilikan didominasi waktu orang yang meninjau dan menindaklanjuti angka, jadi hitung waktu itu terhadap keterlambatan yang disingkirkannya. Tim sebaiknya membangun garis dasarnya sendiri, karena tidak ada nilai acuan yang dikutip di sini.

## Anti-pola dan jebakan

- **Menargetkan utilisasi 100 persen.** Itu menjamin penantian panjang dan pengiriman yang rapuh. Rencanakan rasio beban dengan kelonggaran dan tinjau setelah gangguan.
- **Membatasi hanya kolom “sedang dikerjakan.”** Pekerjaan lalu menumpuk di antrean di luar batas. Batasi sistem dari ujung ke ujung dan tambahkan batas tahap di mana antrean tumbuh.
- **Memperlakukan batas WIP sebagai aturan yang harus ditegakkan.** Orang menyembunyikan pekerjaan agar patuh. Pakai pelanggaran sebagai dorongan untuk bertanya apa yang terhalang, dan catat alasannya.
- **Memarkir item di status tak terbatas.** Hitungan tetap rendah sementara pekerjaan menunggu tak terlihat. Masukkan status diparkir dalam hitungan yang terlihat dan tinjau usianya.
- **Mengukur utilisasi individu.** Itu menghargai tampak sibuk dan mengundang peringkat. Ukur tim atau kolam sumber daya, dan jangan pernah menerbitkan angka per orang.
- **Mengabaikan sisi kedatangan.** Tim mengerjakan keberangkatan sementara permintaan terus tumbuh. Lacak kedatangan, dan bila melebihi kapasitas, buat keputusan eksplisit tentang apa yang diterima.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan batas | Tiap orang menghitung WIP dengan cara pribadi | Beberapa tim menulis batas untuk papannya | Satu batas tertulis dan kosakata status, dengan keadaan menunggu dipisahkan dari keadaan bekerja | Perubahan batas dicatat dan pemeriksaan hukum Little dijalankan bulanan | Batas diselaraskan dengan pemasok dan tim mitra, dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Batas WIP dan kelonggaran | Tanpa batas; semua orang sibuk | Batas informal pada satu kolom | Batas seluruh sistem dan tahap, dengan log pelanggaran dan rentang beban yang dinyatakan | Batas disesuaikan dari bukti cycle time dan antrean dengan ritme | Batas dan kapasitas dikoordinasikan antartim yang berbagi tahap |
| Visibilitas antrean | Menunggu terlihat hanya lewat keluhan | Panjang antrean dihitung di beberapa papan | Persentil waktu antre per tahap ditampilkan kepada tim pemilik | Pertumbuhan antrean bersih diplot tren dengan pagar pembatas dan ditindak lewat pekerjaan yang didanai | Waktu antre pada tahap bersama dan eksternal dilaporkan terbuka kepada pelanggan dan pemasok |
| Pemakaian dalam keputusan | Permintaan kapasitas diperdebatkan dengan anekdot | Utilisasi dikutip untuk membenarkan penambahan staf | Bukti antrean dan cycle time dipakai dalam perencanaan | Imbal balik permintaan dan kapasitas diputuskan dengan data dalam tinjauan tata kelola | Permintaan dibentuk bersama pelanggan memakai distribusi waktu tunggu |

## Daftar periksa

- [ ] Batas sistem untuk WIP tertulis, dengan status awal dan akhir serta pengecualian.
- [ ] Keadaan menunggu dan keadaan bekerja adalah status terpisah dalam alur kerja.
- [ ] Potret WIP dan antrean harian ditangkap dan disimpan.
- [ ] Waktu antre dilaporkan sebagai median dan persentil tinggi, per tahap.
- [ ] Kedatangan dan keberangkatan diplot mingguan, dengan diagram alur kumulatif.
- [ ] Batas WIP ada untuk sistem dan untuk setiap tahap dengan antrean yang tumbuh.
- [ ] Pelanggaran batas dicatat dengan alasan dan ditinjau mingguan.
- [ ] Kebijakan mendefinisikan pekerjaan ekspedit dan membatasi jumlah yang berjalan.
- [ ] Rasio beban tim diperkirakan di tingkat tim, tidak pernah per orang, dengan metode dinyatakan.
- [ ] Pemeriksaan hukum Little dijalankan bulanan dan ketidakcocokan diselidiki.
- [ ] Status diparkir dan terhalang dihitung dan usianya ditinjau.
- [ ] Setiap perubahan pada batas, status, atau limit dicatat dengan tanggal dan alasannya.

## Prompt AI

**Periksa batas dan status di balik hitungan WIP.**

```text
Saya ingin mendefinisikan pekerjaan dalam proses untuk [team or service]. Status
alur kerja kami adalah [list of statuses with a one-line meaning each], dan item
ini dikecualikan: [exclusions]. Identifikasi ambiguitas tentang status mana yang
dihitung dalam proses, mana yang menunggu, dan mana yang terhalang. Sarankan
batas dan daftar status yang lebih bersih, dan katakan apa yang akan dilakukan
perubahan itu pada angka WIP. Jangan menebak bagaimana alat kami dikonfigurasi dan
jangan mengarang nilai acuan. Daftar asumsi Anda dan pertanyaan yang harus saya
jawab.
```

**Jalankan pemeriksaan konsistensi hukum Little.**

```text
Berikut data untuk [team or service] selama [period]: WIP rata-rata [value],
keberangkatan per hari [value], dan cycle time rata-rata dalam hari [value],
memakai batas [boundary description]. Hitung rasio WIP rata-rata terhadap
keberangkatan dikali cycle time, dan jelaskan apa arti ketidakcocokan mengingat
batas ini, seperti item diparkir, item ditutup tanpa dimulai, atau periode tak
stabil. Sarankan pemeriksaan yang dapat saya lakukan di [tracker or ITSM tool].
Jangan mengarang angka atau ambang. Daftar asumsi Anda.
```

**Rencanakan eksperimen batas WIP pertama.**

```text
Tim kami adalah [team size and roles], mengerjakan [type of work]. WIP rata-rata
saat ini [value], dengan tahap [list of stages], dan antrean terpanjang adalah
[stage]. Susun eksperimen berbatas waktu untuk memperkenalkan batas WIP: sebuah
hipotesis, batas yang dicoba dan alasannya, ukuran yang diawasi (termasuk
setidaknya satu pagar pembatas), apa yang dihitung sebagai pengecualian, dan
tanggal tinjauan. Jangan menyatakan batas benar yang universal atau nilai acuan.
Daftar asumsi Anda dan risikonya.
```

**Temukan hambatan yang mungkin dari data tahap.**

```text
Untuk [team or service], berikut waktu antre dan WIP per tahap selama [period]:
[table of stage, median queue time, 85th percentile queue time, items waiting,
and capacity notes]. Peringkat tahap sebagai kandidat kendala, jelaskan penalaran
dalam bahasa sederhana, dan sarankan satu eksperimen berbiaya rendah untuk
kandidat teratas dan satu ukuran yang akan menunjukkan itu berhasil. Jangan
mengarang data atau acuan. Daftar asumsi Anda dan data tambahan apa yang akan
mengubah peringkat.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik mana yang mendefinisikan ukuran alur atau kapasitas yang Anda tambahkan dan pagar pembatas yang harus berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa metrik yang disunting menyebut jam, batas, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Menunggu mendominasi waktu terlewat, jadi ukur WIP, panjang antrean, dan waktu antre per tahap, dan laporkan median dan persentil tinggi.
- Hukum Little mengikat WIP rata-rata, throughput, dan cycle time, yang menjadikannya ujian cepat apakah definisi Anda konsisten.
- Keterlambatan naik curam saat utilisasi mendekati kapasitas penuh, jadi rencanakan kelonggaran di mana permintaan variabel.
- Batasi WIP untuk seluruh sistem, perlakukan pelanggaran sebagai dorongan untuk percakapan, dan waspadai pelabelan ulang pekerjaan agar tetap di bawah batas.
- Awasi kedatangan dan keberangkatan, karena antrean yang tumbuh pekan demi pekan membutuhkan keputusan tentang kapasitas atau permintaan.
- Ukur tim dan layanan, bukan individu, dan sepakati satu batas tertulis sebelum membandingkan angka.

## Referensi dan bacaan lanjutan

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
