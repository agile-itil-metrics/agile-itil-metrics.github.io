# Metrik aliran nilai

**Ukur aliran nilai dari ujung ke ujung, pecah setiap tahap menjadi waktu pekerjaan disentuh dan waktu ia menunggu, dan hitung berapa banyak yang tiba dalam keadaan dapat dipakai, karena keterlambatan terbesar dan pengerjaan ulang terbesar dalam organisasi layanan berada di antara tim, bukan di dalamnya.**

## Gambaran umum dan motivasi

Kebanyakan tim mengukur tahapnya sendiri. Service desk melaporkan tiket ditutup, tim pengembangan melaporkan cerita selesai, dewan perubahan melaporkan perubahan disetujui. Setiap angka bisa tampak sehat sementara orang yang meminta sesuatu menunggu berpekan-pekan. Alasannya struktural: dalam permintaan tipikal, sebagian besar waktu terlewat dihabiskan dalam antrean dan serah terima, dan tak ada tim tunggal yang memiliki waktu itu.

[Aliran nilai](https://en.wikipedia.org/wiki/Value_stream) adalah rangkaian langkah yang mengubah permintaan menjadi nilai yang disampaikan. [Pemetaan aliran nilai](https://en.wikipedia.org/wiki/Value-stream_mapping) adalah tekniknya, dikembangkan dalam [manufaktur lean](https://en.wikipedia.org/wiki/Lean_manufacturing) dan kemudian diterapkan pada kantor, rumah sakit, dan perangkat lunak, yaitu menggambar setiap langkah dari awal proses sampai pelanggan dan mencatat waktu dan volume pada tiap tahap. Peta itu adalah gambaran keadaan saat ini, diikuti gambaran keadaan masa depan yang lebih baik. Angka pada peta adalah pokok bahasan topik ini.

Dua kosakata bertemu di sini. Dalam ITIL 4, edisi keempat Information Technology Infrastructure Library, aliran nilai adalah kombinasi spesifik aktivitas rantai nilai layanan [ITIL](https://en.wikipedia.org/wiki/ITIL) (rencanakan, perbaiki, libatkan, rancang dan transisikan, peroleh dan bangun, sampaikan dan dukung) yang disusun untuk menciptakan produk atau layanan tertentu. Contohnya “pulihkan layanan setelah insiden” dan “sampaikan perubahan dari gagasan ke produksi.” ITIL memberi tahu apa itu aliran dan siapa yang perlu dilibatkan. Lean memberi tahu cara mengukurnya. Padanan agile adalah alur item kerja melintasi papan, yang sudah dilacak tim yang mengelola alur dengan ukuran seperti cycle time (lihat topik 2.1, Ukuran alur).

Ukuran lean hanya sedikit. **Lead time** adalah total waktu terlewat dari saat permintaan dibuat sampai saat disampaikan. **Waktu proses**, kadang disebut waktu sentuh, adalah waktu seseorang benar-benar mengerjakan item. **Waktu tunggu** adalah waktu item duduk di antara pekerjaan aktif, dalam antrean, persetujuan, atau serah terima. **Persen lengkap dan akurat (%C/A)** adalah porsi item yang dapat dipakai tahap berikutnya sebagaimana diterima, tanpa harus dikoreksi, dilengkapi, atau dikirim kembali. **Takt time** adalah laju yang harus dicapai aliran dalam menyelesaikan item agar sesuai permintaan pelanggan, dihitung sebagai waktu kerja tersedia dibagi jumlah item yang diminta dalam waktu itu. Rasio waktu proses terhadap lead time adalah **efisiensi proses**, yang oleh buku ini diperlakukan sebagai bentuk aliran nilai dari efisiensi alur (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur).

Dua hubungan membuat angka-angka berguna bersama. Pertama, [lead time](https://en.wikipedia.org/wiki/Lead_time) adalah jumlah waktu proses dan waktu tunggu di setiap tahap, jadi aliran dengan lead time berpekan-pekan dan waktu proses berhari-hari sebagian besar adalah antrean. [Hukum Little](https://en.wikipedia.org/wiki/Little%27s_law) mengaitkan antrean itu dengan pekerjaan dalam proses dan throughput, itulah sebabnya topik 2.3 (Pekerjaan dalam proses (WIP) dan antrean) menjadi pendamping alami. Kedua, %C/A berlipat ganda. Aliran lima tahap yang masing-masing meneruskan 90 persen keluarannya dengan bersih hanya menyampaikan hasil bersih sekitar 59 persen dari waktu, hasil kali yang dalam manufaktur dikenal sebagai [hasil throughput bergulir](https://en.wikipedia.org/wiki/Rolled_throughput_yield). Laporan satu tahap semuanya mengatakan 90 persen. Aliran itu mengatakan sesuatu yang jauh kurang menyenangkan.

## Prinsip utama

- **Mulai dari permintaan pelanggan dan berakhir pada pemakaian pelanggan.** Aliran yang diukur dari “pekerjaan dimulai” sampai “pekerjaan digabung” menyembunyikan penantian di kedua ujung, yang sering bagian terpanjang.
- **Pisahkan waktu sentuh dari waktu tunggu di setiap tahap.** Durasi tahap tunggal mencampur keduanya dan mengirim upaya perbaikan ke tempat yang salah. Menunggu biasanya sifat desain aliran, bukan kegagalan upaya.
- **Ukur kualitas sebagai kelengkapan dan akurasi, selain kecepatan.** Tahap cepat yang mengirim kembali pekerjaan itu lambat dalam istilah aliran, karena pengerjaan ulang memakan kapasitas dan menambah penantian.
- **Petakan satu aliran dan satu kelas item sekaligus.** Peta yang mencampur perubahan darurat dengan permintaan rutin menghasilkan rata-rata yang tak menggambarkan keduanya.
- **Laporkan distribusi dan tampilkan sampelnya.** Lead time dan waktu tunggu itu miring, jadi tampilkan median dan persentil tinggi, dan katakan berapa banyak item dan periode mana (lihat topik 1.6, Literasi statistik untuk metrik layanan).
- **Gambarkan aliran, bukan orang.** Metrik tahap mengidentifikasi di mana pekerjaan menunggu. Tidak pernah peringkat individu atau tim di setiap tahap.

## Definisi metrik

Metrik di bawah didefinisikan untuk satu aliran nilai bernama dan satu kelas pekerjaan. Hitungan item mengecualikan item yang dibatalkan kecuali dinyatakan lain. Waktu proses dan waktu tunggu dilaporkan untuk setiap tahap dan dijumlahkan untuk aliran.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Lead time aliran nilai | Waktu terlewat dari permintaan pelanggan sampai pelanggan dapat memakai hasilnya | waktu konfirmasi penyampaian dikurangi waktu permintaan dicatat; item yang dibatalkan atau ditarik dikecualikan; laporkan median serta persentil ke-85 dan ke-95 | hari | Catatan alat ITSM digabung dengan peristiwa penyampaian dari jalur pengiriman atau sistem pemenuhan | Manajemen permintaan layanan; pemberdayaan perubahan | Lead time pada papan tim | Bulanan |
| Waktu proses | Waktu item sedang aktif dikerjakan, per tahap dan untuk aliran | jumlah selang ketika item berada dalam keadaan aktif, per tahap; keadaan antrean, menunggu persetujuan, dan terhalang dikecualikan | jam atau hari | Riwayat status pelacak; catatan waktu bila keadaan terlalu kasar | Manajemen insiden; manajemen permintaan layanan | Cycle time pada kolom “sedang dikerjakan” | Bulanan |
| Waktu tunggu | Waktu item duduk di antara pekerjaan aktif, per tahap dan untuk aliran | waktu terlewat tahap dikurangi waktu proses tahap itu; mencakup antrean, persetujuan, serah terima, dan waktu terhalang | hari | Riwayat status pelacak dan perubahan keadaan alat ITSM | Pemberdayaan perubahan; service desk | Waktu di kolom antrean; waktu terhalang | Bulanan |
| Efisiensi proses | Porsi lead time yang merupakan waktu proses | jumlah waktu proses di semua tahap / lead time aliran nilai untuk item yang sama; item yang masih terbuka dikecualikan | persen | Diturunkan dari waktu proses dan lead time | Perbaikan berkelanjutan | Efisiensi alur | Kuartalan |
| Persen lengkap dan akurat (tahap) | Porsi item yang diterima tahap dan dapat dipakainya tanpa koreksi, pelengkapan, atau pengembalian | item diterima sebagaimana adanya / item diterima pada periode itu; item yang dikembalikan karena alasan apa pun dihitung sebagai tidak diterima | persen | Peristiwa pengembalian dan pembukaan ulang di pelacak atau alat ITSM; tinjauan penerimaan bersampel | Manajemen permintaan layanan; pemberdayaan perubahan; manajemen masalah | Definisi siap; tingkat pengerjaan ulang | Bulanan |
| Persen lengkap dan akurat bergulir | Porsi item yang melewati setiap tahap dengan bersih | hasil kali nilai %C/A tahap untuk satu aliran dan periode (misalnya 0,90 x 0,85 x 0,95); tahap di luar aliran dikecualikan | persen | Diturunkan dari nilai tahap | Perbaikan berkelanjutan | Tingkat cacat lolos dan pengerjaan ulang sepanjang jalur | Kuartalan |
| Jumlah serah terima | Berapa kali item berpindah antara tim atau antrean | hitungan perubahan tim atau antrean pemilik dari permintaan sampai penyampaian, per item; laporkan median dan persentil ke-85 | hitungan | Riwayat penugasan di alat ITSM atau pelacak | Service desk; manajemen permintaan layanan | Ketergantungan antartim | Kuartalan |
| Rasio takt time | Apakah laju aliran sesuai dengan permintaan | median selang teramati antara penyelesaian / takt time, dengan takt time adalah waktu kerja tersedia dibagi item yang diminta dalam periode yang sama; rasio di atas 1 berarti aliran lebih lambat dari permintaan | rasio | Hitungan permintaan dari antrean penerimaan dan peristiwa penyelesaian | Manajemen kapasitas dan kinerja; manajemen tingkat layanan | Throughput terhadap permintaan; perkiraan | Kuartalan |

Waktu proses, waktu tunggu, dan lead time tahap adalah jumlah dan rasio atas set item yang sama, jadi dihitung dari catatan tingkat item dan tidak pernah dengan menjumlahkan rata-rata tahap yang diukur pada sampel berbeda. Takt time paling cocok untuk pekerjaan yang dapat diulang seperti permintaan standar dan perubahan rutin, dan kurang cocok untuk pekerjaan yang setiap itemnya unik.

## Rekomendasi

### Pilih aliran

**1. Pilih satu aliran berharga dan satu kelas item, dan sebut batasnya.** Kandidat pertama yang baik adalah jenis permintaan bervolume tinggi, seperti penyediaan akses atau perangkat, atau jalur perubahan normal dari persetujuan sampai tayang. Tulis pemicu yang memulai jam dan peristiwa yang mengonfirmasi penyampaian kepada pelanggan. Jika Anda tak dapat menyatakan keduanya dalam satu kalimat masing-masing, aliran itu belum didefinisikan (lihat topik 3.5, Metrik pemenuhan permintaan layanan).

**2. Mulai jam pada permintaan pelanggan dan hentikan pada pemakaian pelanggan.** Aliran yang dimulai ketika tim menerima pekerjaan dan berhenti ketika tim menandainya selesai mengecualikan antrean penerimaan dan keterlambatan konfirmasi. Itu sering penantian terpanjang. Jika data untuk batas sebenarnya belum ditangkap, laporkan ukuran yang lebih sempit dengan label jujur dan rencanakan instrumentasinya (lihat topik 1.5, Sumber data dan instrumentasi).

### Petakan keadaan saat ini

**3. Telusuri aliran bersama orang yang mengerjakan pekerjaan.** Jalankan sesi pemetaan dengan perwakilan dari setiap tahap, termasuk sisi pelanggan. Gambar langkah sebagaimana benar-benar terjadi, lalu bandingkan dengan proses yang terdokumentasi. Jurang antara keduanya adalah temuan tersendiri. Metodenya diuraikan dalam *Learning to See* karya Rother dan Shook dan dalam *Value Stream Mapping* karya Martin dan Osterling.

**4. Catat waktu proses dan waktu tunggu untuk setiap tahap dari item nyata.** Ambil sampel item terbaru, 20 atau lebih bila volume memungkinkan, dan ikuti masing-masing melalui aliran memakai riwayat pelacak dan, bila perlu, percakapan. Catat waktu sentuh dan penantian sebelum setiap tahap. Perlakukan sampel sebagai estimasi dan katakan bagaimana ia diambil. Ulangi pemetaan ketika aliran berubah cukup banyak untuk membatalkannya.

**5. Tunjukkan menunggu sebagai batang tersendiri.** Pada peta dan dasbor, gambar waktu proses dan waktu tunggu sebagai segmen terpisah untuk setiap tahap. Tahap dengan 30 menit waktu proses dan empat hari tunggu tampak sama sekali tidak seperti tahap dengan empat hari waktu proses, padahal durasi tahapnya identik.

### Ukur kualitas sepanjang aliran

**6. Ukur %C/A pada serah terima, didefinisikan oleh tahap penerima.** Tim penerima memutuskan apa arti “dapat dipakai sebagaimana diterima,” idealnya dalam kondisi penerimaan tertulis yang singkat. Hitung pengembalian, permintaan informasi yang hilang, atau koreksi diam-diam sebagai tidak diterima. Koreksi diam-diam adalah kebocoran paling umum, karena pekerjaan diperbaiki tanpa ada yang mencatat bahwa ia rusak.

**7. Hitung %C/A bergulir dan bandingkan dengan nilai tahap.** Kalikan nilai tahap. Jurang antara angka bergulir dan tahap yang tampak terbaik adalah efek berlipat dari pengerjaan ulang, dan sering membuat alasan memperbaiki sebuah serah terima lebih kuat daripada ukuran kecepatan mana pun. Kaitkan dengan ukuran pengerjaan ulang dan kegagalan perubahan untuk aliran yang sama (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang).

### Pakai angka untuk memutuskan

**8. Perbaiki penantian terbesar lebih dulu, dan cari penyebabnya di antarmuka.** Peringkat tahap menurut waktu tunggu, lalu tanyakan apa yang ditunggu item itu: keputusan, orang, batch, slot terjadwal, atau masukan yang hilang. Lalu tanyakan apakah penantian itu perlu. [Teori kendala](https://en.wikipedia.org/wiki/Theory_of_constraints) menyatakan bahwa laju aliran ditetapkan oleh tahapnya yang paling sempit, jadi memperbaiki tahap yang bukan kendala sedikit mengubah apa pun. Penantian persetujuan dalam pemberdayaan perubahan adalah kasus yang sering (lihat topik 4.3, Metrik pemberdayaan perubahan).

**9. Kurangi serah terima sebelum mengoptimalkan tahap.** Setiap serah terima menambah antrean, pergantian konteks, dan peluang informasi tak lengkap. Hitung serah terima, lalu uji apakah sebuah tahap dapat digabung, keputusan didelegasikan kepada tim yang mengerjakan, atau permintaan standar diotorisasi sebelumnya. ITIL 4 menjelaskan perubahan standar sebagai perubahan berisiko rendah yang diotorisasi sebelumnya, yang persis langkah ini diterapkan pada aliran perubahan.

**10. Bandingkan permintaan dan laju dengan takt time, hanya untuk pekerjaan yang dapat diulang.** Hitung takt time dari data permintaan nyata periode itu, lalu bandingkan dengan selang ketika aliran benar-benar menyelesaikan item. Aliran yang lebih lambat dari takt menumbuhkan antrean, dan hukum Little memberi tahu kira-kira seberapa cepat. Aliran yang jauh lebih cepat dari takt punya kelonggaran yang dapat dialihkan. Jangan pakai takt time untuk menetapkan target bagi individu.

### Jaga pengukuran tetap jujur

**11. Gabungkan data lintas alat, dan katakan apa yang diperkirakan.** Aliran biasanya melintasi alat ITSM, pelacak isu, dan jalur pengiriman. Gabungkan pada pengenal item, dokumentasikan aturan penggabungan, dan tandai tahap mana berasal dari peristiwa sistem dan mana dari sampling. Estimasi yang dilabeli sebagai estimasi jauh lebih berguna daripada angka yang tampak presisi tanpa asal-usul yang diketahui.

**12. Tinjau peta tiap kuartal, dan baca item mentah setiap kali.** Aliran bergeser seiring tim dirombak dan alat berubah. Taruh peta dan satu keputusan pada agenda tinjauan tetap dengan setiap tahap terwakili (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Lead time aliran nilai | Memulai jam lebih lambat, misalnya pada triase alih-alih permintaan; menutup item sebelum pelanggan dapat memakainya; memecah satu permintaan menjadi beberapa yang kecil | Aturan jam tetap yang tertulis di register metrik; konfirmasi penyampaian oleh pelanggan; hitungan item yang dibuka ulang dan item anak yang tertaut |
| Waktu proses | Mencatat keadaan menganggur atau terhalang sebagai aktif sehingga waktu proses naik dan aliran tampak efisien; atau mencatat penantian sebagai pekerjaan agar tampak sibuk | Pengamatan sampel item; waktu proses dibandingkan dengan catatan waktu bila ada; definisi keadaan ditinjau dengan tim |
| Waktu tunggu | Memindahkan penantian ke keadaan yang tak terlacak, seperti percakapan samping, spreadsheet, atau status “tertunda” yang menghentikan jam | Laporkan pemakaian status jeda dan terhalang; bandingkan usia tiket dengan stempel waktu tahap; ambil sampel item untuk penantian di luar sistem |
| Efisiensi proses | Mengecilkan lead time dengan penanganan ekspedit untuk item yang diukur, atau menggelembungkan waktu proses untuk menaikkan rasio | Tampilkan lead time dan waktu proses di samping rasio; laporkan porsi ekspedit; jangan pernah menetapkan target untuk rasio itu sendiri |
| Persen lengkap dan akurat (tahap) | Tahap penerima menurunkan ambang penerimaan agar lebih sedikit item dikembalikan, atau tahap pengirim mendorong pekerjaan lewat jalan pintas informal | Kondisi penerimaan tertulis; hitungan cacat dan pengerjaan ulang di hilir; sampel item yang diterima ditinjau pihak ketiga |
| Persen lengkap dan akurat bergulir | Menggabung tahap sehingga pengembalian terjadi di dalam tahap dan hilang dari hitungan serah terima; memilih daftar tahap yang menguntungkan | Tetapkan daftar tahap di muka; laporkan perubahan tahap di log keputusan; bandingkan dengan tingkat pengerjaan ulang untuk seluruh aliran |
| Jumlah serah terima | Menugaskan ulang item ke antrean bersama atau pemilik serba ada untuk menghindari perubahan pemilik yang dihitung; menyembunyikan serah terima dalam satu “tim” yang mencakup beberapa | Hitung menurut antrean dan peran; baca riwayat penugasan item bersampel; lacak jumlah penugasan ulang per item |
| Rasio takt time | Menghitung permintaan yang ditunda atau ditolak sebagai tidak diminta; menghitung penyelesaian sebagian sebagai penyelesaian | Laporkan permintaan, permintaan yang ditolak, dan usia backlog di samping rasio; hitung penyelesaian hanya bila pelanggan mengonfirmasi |

Pembacaan yang sehat menunjukkan lead time dan waktu proses yang masuk akal terhadap sampel, waktu tunggu yang jelas merupakan bagian lebih besar dan perlahan menyusut, nilai %C/A dengan kondisi penerimaan tertulis di belakangnya, dan serah terima yang turun hanya ketika keputusan atau langkah nyata disingkirkan. Jika lead time membaik sementara %C/A bergulir turun, aliran mengirim pekerjaan lebih cepat dengan memindahkan biaya ke hilir, yaitu pola yang hendak ditangkap pagar pembatas (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Pemetaan berbasis lokakarya dengan sampel | Cepat, menunjukkan seluruh aliran, membangun pemahaman bersama antartim | Potret yang cepat menua; bias sampel; bergantung pada peserta yang jujur |
| Pengukuran otomatis dari peristiwa alat | Berkelanjutan, objektif, mendukung persentil dan tren | Hanya melihat apa yang dicatat alat; penantian di luar sistem dan koreksi diam-diam tak terlihat |
| Batas ujung ke ujung milik pelanggan | Mencerminkan pengalaman; mengungkap keterlambatan penerimaan dan konfirmasi | Butuh data dari beberapa sistem dan pengenal item bersama |
| Perbandingan takt time dan permintaan | Mengikat laju pada permintaan nyata; membuat pertumbuhan antrean dapat diprediksi | Lemah untuk pekerjaan unik yang tak berulang; butuh hitungan permintaan yang andal |
| %C/A bergulir | Menunjukkan bagaimana pengerjaan ulang berlipat di serah terima | Butuh kesepakatan tentang kondisi penerimaan; mudah diperdebatkan definisinya |

Pakai lokakarya pemetaan untuk mempelajari bentuk aliran dan pengukuran otomatis untuk mengawasinya. Pakai ukuran batas tim sebagai masukan dan ukuran batas pelanggan sebagai putusan. Biaya pendekatan ini adalah percakapan lintas tim yang dipaksakannya, yang juga manfaat utamanya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Di mana jam pelanggan mulai dan berhenti pada permintaan kita yang paling umum, dan apakah laporan kita sepakat?**
Pilih satu jenis permintaan dan telusuri di papan tulis dari saat pelanggan meminta sampai saat mereka dapat memakai hasilnya. Tandai di mana laporan kita saat ini mulai dan berhenti menghitung. Fasilitator sebaiknya mencari jurang di setiap ujung, karena antrean penerimaan dan keterlambatan konfirmasi lazim dilewatkan. Sepakati apakah akan mengubah laporan atau melabelinya sebagai pandangan parsial.

**2. Untuk setiap tahap dalam aliran kita, berapa banyak waktu terlewat yang dipakai seseorang mengerjakan item?**
Ambil lima item terbaru dan rekonstruksi riwayat masing-masing. Perkirakan waktu sentuh dan penantian untuk setiap tahap, dan bandingkan totalnya. Kebanyakan kelompok terkejut betapa sedikit waktu terlewat yang merupakan pekerjaan. Tanyakan apa yang ditunggu setiap penantian panjang, dan tahan jawaban pertama, yang biasanya “orang sibuk.” Catat penantian mana yang tampak sebagai pilihan desain, bukan batas kapasitas.

**3. Apa yang dibutuhkan tahap berikutnya dari kita, dan bagaimana kita tahu itu hilang?**
Minta perwakilan tahap penerima menyatakan kondisi penerimaan dalam kata sederhana. Bandingkan dengan yang diyakini tahap pengirim disediakannya. Hitung berapa kali bulan lalu pekerjaan dikembalikan, dilengkapi orang lain, atau diperbaiki diam-diam. Diskusi sering menghasilkan daftar periksa kecil yang menghilangkan pengembalian berulang.

**4. Serah terima mana yang ada karena sejarah, bukan kebutuhan?**
Daftar serah terima pada peta dan tanyakan mengapa masing-masing ada. Sebagian nyata: keterampilan, kendali, pemisahan tugas. Yang lain bertahan karena batas tim ditarik bertahun-tahun lalu. Pilih satu serah terima untuk dihapus, didelegasikan, atau diotorisasi sebelumnya, dan sebut siapa yang harus setuju.

**5. Jika kita memperbaiki tahap yang dikeluhkan semua orang, apakah pelanggan akan menyadarinya?**
Bandingkan tahap yang paling banyak menarik perhatian dengan tahap yang memegang penantian terpanjang. Teori kendala menyarankan bahwa memperbaiki non-kendala sedikit mengubah apa pun bagi pelanggan. Tanyakan apa yang harus benar agar tahap yang paling ribut juga yang paling lambat. Fasilitator sebaiknya membantu kelompok menyepakati cara menguji jawabannya dengan data.

**6. Bagaimana seseorang bisa membuat aliran ini tampak lebih baik tanpa membuatnya lebih baik?**
Telusuri tabel vektor manipulasi bersama kelompok. Untuk setiap metrik, tanyakan apa yang mungkin dilakukan seseorang di bawah tekanan dan apa yang akan dilihat tim bila itu dilakukan. Sepakati pembacaan pagar pembatas mana yang akan ditinjau setiap kali dan siapa pemiliknya. Tujuannya kebiasaan bersama memeriksa, bukan pencarian pelaku.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman biasanya melihat tahapnya sendiri dengan jelas dan alirannya dengan buruk. Pandangan aliran nilai menunjukkan berapa lama perubahan yang selesai menunggu tinjauan, persetujuan, slot rilis, atau jendela deployment, dan berapa banyak yang di luar kendali mereka. Mereka diuntungkan oleh %C/A pada serah terima mereka, karena mengubah keluhan samar tentang “persyaratan buruk” atau “tinjauan terlambat” menjadi peristiwa terhitung. Mereka sebaiknya waspada memperbaiki cycle time sendiri dengan mengorbankan tahap penerima (lihat topik 2.8, Metrik DORA).

### Tim layanan dan operasi

Tim operasi memiliki banyak antrean: penerimaan service desk, persetujuan perubahan, jadwal rilis, serah terima siaga. Mereka diuntungkan oleh perubahan standar yang diotorisasi sebelumnya, kondisi penerimaan jelas untuk pekerjaan masuk, dan pandangan tentang serah terima mana yang menambah penantian terbanyak. Mereka juga sebaiknya mengharapkan menjadi tahap penerima dalam ukuran %C/A, dan mendefinisikan seperti apa serah terima yang lengkap. Item mereka sering membawa jam ketat sendiri, jadi ukuran aliran berada di samping, dan tidak menggantikan, ukuran tingkat layanan.

### Kepemimpinan dan tata kelola

Pemimpin mensponsori perubahan lintas tim dan memutuskan apakah aliran punya pemilik bernama. Mereka sebaiknya meminta lead time aliran dari sudut pandang pelanggan dan penantian terbesar, bukan kartu skor tahap demi tahap. Badan tata kelola yang menyetujui pekerjaan adalah tahap itu sendiri, dan waktu tunggunya termasuk dalam peta. Menetapkan target pada rasio waktu proses terhadap lead time mengundang vektor yang diuraikan di atas, jadi pakai untuk mengarahkan penyelidikan (lihat topik 6.5, Realisasi nilai dan hasil bisnis).

### Pelanggan dan pengguna

Pelanggan mengalami lead time dan pengerjaan ulang, dan jarang melihat tahap. Kontribusi mereka yang paling berguna adalah mengonfirmasi kapan hasil dapat dipakai dan menyatakan apa yang harus mereka lakukan untuk mendapatkannya, seperti mengajukan ulang formulir. Laporan yang dihadapkan kepada pelanggan sebaiknya menyatakan awal dan akhir jam dalam kata sederhana. Pelanggan juga diuntungkan ketika aliran menerbitkan median yang jujur dan persentil tinggi, karena janji berdasarkan median saja mengecewakan satu dari beberapa permintaan.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah perusahaan asuransi berukuran menengah menyampaikan perubahan normal pada platform administrasi polisnya. Pelanggan di bisnis mengeluh bahwa “perubahan kecil memakan waktu lebih dari sebulan.” Semua angka dalam contoh ini bersifat ilustratif.

Departemen memetakan aliran dari saat pemilik bisnis mengajukan permintaan perubahan sampai saat pemilik mengonfirmasi perubahan telah tayang. Sampel 20 perubahan normal terbaru memberi tabel tahap di bawah, memakai nilai median ilustratif per tahap.

| Tahap | Waktu proses (hari) | Waktu tunggu (hari) | %C/A (ilustratif) |
| --- | --- | --- | --- |
| Penerimaan dan triase | 0,5 | 6 | 85 |
| Pembangunan | 1,5 | 5 | 90 |
| Pengujian | 0,5 | 8 | 80 |
| Persetujuan perubahan | 0,25 | 9 | 70 |
| Deployment dan konfirmasi | 0,25 | 4 | 95 |
| Total aliran | 3,0 | 32 | 41 (bergulir) |

Lead time aliran dalam sampel sekitar 35 hari, jadi efisiensi proses kira-kira 9 persen. %C/A bergulir sekitar 41 persen, hasil kali lima nilai tahap, sehingga kurang dari separuh perubahan melewati setiap tahap tanpa pengembalian. Tahap persetujuan perubahan tampak sedang bila dilihat dari %C/A saja, tetapi 9 hari tunggunya adalah antrean tunggal terpanjang, dan 30 persen perubahan tiba di sana dengan informasi risiko yang hilang, yang dikembalikan oleh dewan.

Tim membuat dua keputusan. Pertama, ia mengklasifikasikan sepuluh jenis perubahan berisiko rendah yang paling sering sebagai perubahan standar dengan prosedur yang diotorisasi sebelumnya, sehingga melewati dewan. Kedua, formulir penerimaan mendapat kolom risiko yang selalu ditanyakan dewan, dan daftar periksa penerimaan singkat disepakati dengan dewan. Pilihan ini menyasar penantian terbesar dan pengembalian berlipat terbesar, bukan tahap pembangunan, tempat tim diminta untuk “lebih cepat.”

Tiga bulan kemudian, median lead time untuk kelas bersampel turun dan penantian persetujuan menyusut, sementara %C/A bergulir naik. Risiko manipulasi muncul pada bulan ketiga. Sebuah tim produk memecah beberapa permintaan menjadi dua atau tiga yang lebih kecil, karena item kecil memenuhi syarat sebagai perubahan standar, dan lead time per item turun tajam. Peninjau memperhatikan bahwa hitungan item anak tertaut naik dan konfirmasi pelanggan per permintaan asli tidak membaik. Departemen mempertahankan lead time, tetapi mendefinisikan ulang item sebagai permintaan asli pelanggan, sehingga pemecahan tak lagi membantu. Log keputusan mencatat perubahan definisi dan menyajikan ulang kuartal sebelumnya dengan aturan yang sama.

## Sudut pandang sektor

**Startup.** Aliran pendek dengan sedikit serah terima punya sedikit untuk dipetakan, dan ukuran paling berguna sekadar waktu terlewat dari permintaan pelanggan sampai pemakaian pelanggan. Gambar aliran di dinding, baca item mentah, dan awasi serah terima pertama yang muncul seiring tim bertumbuh. Tahan membangun perangkat sebelum aliran stabil.

**Bisnis kecil.** Satu atau dua orang sering mencakup beberapa tahap, jadi serah terima terjadi antarperan atau antaralat, bukan antartim. Laporan pelacak atau service desk memberi lead time dengan murah, dan sampel sepuluh item mengungkap penantian. Tanyakan kepada pemasok, seperti penyedia layanan terkelola, waktu tahap mereka, karena antrean pemasok sering penantian terpanjang.

**Perusahaan besar.** Aliran panjang dengan banyak tim dan gerbang persetujuan adalah tempat %C/A bergulir dan jumlah serah terima paling membayar. Tunjuk pemilik untuk setiap aliran besar, petakan bersama dengan setiap tahap terwakili, dan pakai pengenal item bersama agar alat dapat digabung. Divisi berbeda akan memakai kata yang sama untuk jam berbeda, jadi terbitkan satu definisi per ukuran dan simpan log perubahan.

**Pemerintah dan sektor publik.** Persetujuan undang-undang, langkah pengadaan, dan kendali audit membentuk tahap sah yang tak dapat dihapus, dan sering memegang penantian terpanjang. Petakan dengan jujur, pisahkan penantian yang diwajibkan dari yang dapat dihindari, dan tunjukkan bagian yang diwajibkan kepada pihak yang menetapkan aturan. Simpan jejak audit data dan perubahan definisi apa pun (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah bahwa menunggu biasanya bagian terbesar dari lead time dan yang termurah dikurangi, karena perbaikannya sering berupa keputusan, aturan, atau serah terima, bukan kapasitas tambahan. Pelanggan merasakan lead time secara langsung, dan organisasi membayar pengerjaan ulang dalam kapasitas yang tak pernah muncul pada laporan tahap. Mengurangi serah terima dan pengembalian juga mengurangi mode kegagalan yang kelak menjadi insiden.

Biayanya sederhana dan sebagian besar manusia: beberapa jam waktu beberapa orang untuk lokakarya pemetaan dan sampel, pengenal item bersama di seluruh alat (lihat topik 1.5, Sumber data dan instrumentasi), dan sedikit waktu analis tiap bulan. Biaya yang lebih besar adalah percakapan lintas tim dan kesediaan mengubah aturan yang dimiliki seseorang.

Imbal hasil tampak sebagai lead time yang lebih pendek dan lebih dapat diprediksi, %C/A bergulir yang naik, lebih sedikit item dikembalikan, dan kapasitas yang dibebaskan dari pengerjaan ulang. Jangan memperkirakan peningkatan persentase dari studi kasus terbitan. Perkirakan imbal hasil dari aliran Anda sendiri: volume item, penantian saat ini, biaya keterlambatan bagi pelanggan sebaik yang dapat Anda nyatakan, dan jam pengerjaan ulang yang dapat Anda hitung. Flow Framework dan literatur lean menggambarkan polanya, dan tidak satu pun menyediakan tolok ukur yang berpindah ke aliran Anda (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Memetakan tahap, bukan aliran.** Peta rinci yang indah dari pekerjaan satu tim meninggalkan penantian terpanjang di luar halaman. Petakan dari permintaan pelanggan sampai pemakaian pelanggan, dan tambahkan rincian hanya di tempat penantian.
- **Merata-ratakan waktu tahap dari sampel berbeda.** Jumlah rata-rata tahap bukan rata-rata aliran. Hitung ukuran aliran dari catatan tingkat item dan laporkan median dan persentil.
- **Memperlakukan waktu tunggu sebagai masalah upaya.** Menyuruh orang bekerja lebih cepat jarang memperpendek antrean. Tanyakan apa yang ditunggu item dan apakah penantian itu perlu.
- **Mengoptimalkan efisiensi proses sebagai target.** Begitu rasio menjadi tujuan, waktu proses dilapisi atau lead time dipangkas dengan trik. Pakai sebagai dorongan penyelidikan dan pasangkan dengan lead time yang dikonfirmasi pelanggan.
- **Mengukur %C/A tanpa kondisi penerimaan tertulis.** Tanpanya, setiap pengembalian adalah perdebatan. Minta tahap penerima menulis kondisinya dan jaga tetap singkat.
- **Membiarkan pengerjaan ulang diam-diam tak tercatat.** Jika tahap memperbaiki pekerjaan masuk tanpa mencatatnya, %C/A dilebih-lebihkan dan tahap pengirim tak pernah belajar. Catat setiap koreksi sebagai pengembalian.
- **Memakai metrik aliran untuk memeringkat tim atau orang.** Metrik itu menggambarkan sistem, dan penantian terbesar jarang kesalahan satu tim. Laporkan menurut tahap dan aliran, dan tinjau hasilnya dengan semua tahap hadir.
- **Memetakan sekali dan tak pernah lagi.** Aliran bergeser. Tinjau peta sesuai jadwal dan setelah reorganisasi atau perubahan alat apa pun.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi aliran dan jam | Aliran tak terdefinisi; tiap tim mengukur tahapnya sendiri | Satu aliran dipetakan oleh satu tim; jam berbeda dari tim lain | Awal dan akhir tertulis untuk tiap aliran besar, dari permintaan pelanggan sampai pemakaian pelanggan | Aturan jam ditinjau, perubahan dicatat, riwayat disajikan ulang saat definisi berubah | Definisi direvisi antartim dan pemasok seiring aliran dan permintaan berubah |
| Waktu proses dan waktu tunggu | Hanya waktu terlewat yang diketahui | Disampel untuk satu aliran dengan tangan | Dikumpulkan dari peristiwa alat dengan model keadaan terdokumentasi dan estimasi berlabel | Diplot tren dengan persentil, pengurangan waktu tunggu didanai dan dilacak | Penantian lintas pemasok dan tim dikelola bersama, dengan antrean bersama terlihat |
| Kualitas sepanjang aliran | Pengerjaan ulang disadari tetapi tak dihitung | Pengembalian dihitung oleh beberapa tahap | Kondisi penerimaan tertulis dan %C/A tahap ditampilkan kepada tim pemilik | %C/A bergulir diplot tren dan dipasangkan dengan ukuran pengerjaan ulang dan kegagalan | Kondisi penerimaan dimiliki bersama pengirim dan penerima dan dikaitkan dengan hasil pelanggan |
| Pemakaian dalam perbaikan | Pemetaan dilakukan sekali, lalu disimpan | Lokakarya sesekali menghasilkan perbaikan lokal | Tinjauan kuartalan dengan setiap tahap hadir | Penantian atau pengembalian terbesar ditangani tiap kuartal dengan pemilik | Gagasan perbaikan datang dari setiap tahap, dengan keputusan dicatat dan hasil diperiksa |

## Daftar periksa

- [ ] Satu aliran nilai dan satu kelas item disebut, dengan pemilik aliran.
- [ ] Awal dan akhir jam ditulis dalam istilah permintaan pelanggan dan pemakaian pelanggan.
- [ ] Peta keadaan saat ini dibangun dengan perwakilan setiap tahap, termasuk sisi pelanggan.
- [ ] Waktu proses dan waktu tunggu dicatat terpisah untuk setiap tahap dari sampel item nyata.
- [ ] Waktu tahap dan aliran dilaporkan sebagai median dan persentil tinggi, dengan ukuran sampel ditampilkan.
- [ ] Setiap tahap penerima memiliki kondisi penerimaan tertulis, dan pengembalian dicatat.
- [ ] Persen lengkap dan akurat bergulir dihitung dari nilai tahap.
- [ ] Serah terima dihitung dan penantian terbesar punya pemilik bernama dan eksperimen terencana.
- [ ] Vektor manipulasi dan pagar pembatas setiap metrik ditinjau dengan tim.
- [ ] Peta dan sampel ditinjau sesuai jadwal, dan perubahan definisi dicatat.

## Prompt AI

**Susun panduan wawancara pemetaan aliran nilai.**

```text
Saya memetakan aliran nilai untuk [stream name], dari [start event] sampai [end
event], untuk kelas item [item class]. Tim yang terlibat adalah [list of teams].
Susun panduan wawancara untuk lokakarya pemetaan: pertanyaan untuk setiap tahap
tentang waktu proses, waktu tunggu, serah terima, pengembalian, dan kondisi
penerimaan, ditambah pertanyaan untuk sisi pelanggan. Jangan mengarang waktu atau
nilai acuan. Daftar asumsi Anda dan data yang harus saya kumpulkan untuk
memeriksa jawabannya.
```

**Hitung ukuran aliran dari sampel.**

```text
Berikut sampel [number] item dengan waktu masuk dan keluar tahap, keadaan aktif
dan menunggu, dan pengembalian: [paste data or describe the columns]. Hitung lead
time, waktu proses, waktu tunggu, efisiensi proses, persen lengkap dan akurat
tahap, dan persen lengkap dan akurat bergulir, dan tunjukkan rumus yang dipakai.
Laporkan median dan persentil [percentile]. Tandai item dengan stempel waktu yang
hilang dan katakan bagaimana Anda menanganinya. Jangan mengisi celah dengan nilai
karangan. Daftar asumsi Anda.
```

**Temukan risiko manipulasi pada dasbor aliran.**

```text
Dasbor aliran kami menunjukkan [list metrics] untuk [stream name], dan tim
ditinjau terhadap [targets or none]. Untuk setiap metrik, daftar cara yang masuk
akal angka itu dapat membaik tanpa aliran membaik, sinyal yang akan
mengungkap masing-masing, dan metrik atau praktik pagar pembatas yang akan
menangkapnya. Fokus pada [stage or handoff of concern]. Jangan menyarankan
memeringkat individu dan jangan mengarang ambang. Daftar asumsi Anda.
```

**Tulis kondisi penerimaan untuk serah terima.**

```text
Tahap pengirim adalah [sender team] dan tahap penerima adalah [receiver team].
Item berupa [item type], dan alasan paling umum item dikembalikan adalah
[reasons]. Susun kondisi penerimaan singkat berisi tidak lebih dari [number]
pemeriksaan yang dapat diterapkan penerima, dan cara mencatat pengembalian agar
persen lengkap dan akurat dapat dihitung. Jaga kata-kata netral dan jangan
menyalahkan. Daftar asumsi Anda dan pertanyaan yang harus saya ajukan kepada
kedua tim.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan metrik pada peta aliran Anda dan pagar pembatas yang harus berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa topik metrik yang disunting menyatakan jam, vektor manipulasi, dan referensi silangnya.

## Poin penting

- Ukur aliran dari permintaan pelanggan sampai pemakaian pelanggan, karena ukuran batas tim menyembunyikan penantian terpanjang.
- Pecah setiap tahap menjadi waktu proses dan waktu tunggu, dan cari penyebab penantian terbesar di antarmuka antartim.
- Persen lengkap dan akurat berlipat di antara tahap, jadi nilai bergulirnya biasanya lebih rendah daripada yang disarankan laporan tahap mana pun.
- Kurangi serah terima dan otorisasi pekerjaan rutin sebelumnya daripada mendorong tahap agar lebih cepat.
- Amati sampel item nyata di samping data alat, laporkan persentil, dan beri label estimasi.
- Pasangkan setiap metrik aliran dengan pagar pembatasnya, dan pakai ukuran untuk menggambarkan sistem, tidak pernah memeringkat orang.

## Referensi dan bacaan lanjutan

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
