# Metrik swalayan dan otomatisasi

**Ukur swalayan dari apakah orang mendapat yang mereka butuhkan tanpa bantuan, dan ukur otomatisasi dari pekerjaan yang disingkirkannya dan kegagalan yang ditimbulkannya, karena kontak yang tak pernah tiba hanya sebuah keberhasilan jika masalahnya terselesaikan.**

## Gambaran umum dan motivasi

Swalayan dan otomatisasi adalah dua cara utama organisasi layanan mengambil pekerjaan rutin dari orang-orangnya. [Swalayan](https://en.wikipedia.org/wiki/Self-service_software) memungkinkan pengguna menyelesaikan masalah atau memperoleh sesuatu sendirian, lewat portal, artikel pengetahuan, halaman setel ulang kata sandi, atau [chatbot](https://en.wikipedia.org/wiki/Chatbot). [Otomatisasi](https://en.wikipedia.org/wiki/Automation) memungkinkan sistem melakukan langkah yang dulu dilakukan orang, seperti membuat akun, memulai ulang layanan, atau menutup tiket begitu monitor mengonfirmasi pemulihan. Keduanya bertujuan pada hasil yang sama: lebih sedikit tugas berulang bagi orang, hasil lebih cepat bagi pengguna, dan lebih banyak waktu untuk pekerjaan yang butuh pertimbangan.

Gagasan ini terpetakan pada kedua tradisi. Dalam [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, praktik manajemen permintaan layanan mengharapkan permintaan berulang yang dipahami baik ditangani lewat alur standar dengan otomatisasi sebanyak yang masuk akal, dan praktik manajemen insiden dan manajemen pengetahuan mengharapkan informasi yang baik tersedia bagi pengguna dan staf dukungan pada titik paling awal yang berguna. Praktik agile dan DevOps sampai di tempat yang sama lewat jalan lain: [infrastruktur sebagai kode](https://en.wikipedia.org/wiki/Infrastructure_as_code), pipeline, dan disiplin menyingkirkan toil, yang oleh buku rekayasa keandalan situs Google didefinisikan sebagai pekerjaan manual, berulang, dapat diotomatisasi yang tumbuh seiring layanan. Gagasan bersamanya sering disebut “shift left”: pindahkan penyelesaian masalah ke arah pengguna, atau ke titik termurah dan paling awal dalam rantai dukungan, dan menjauh dari antrean spesialis.

Bahasa shift-left mengundang kesalahan pengukuran. Tim melihat bahwa kontak yang dihindari itu murah lalu menghitung kontak yang dihindari sebagai keberhasilan. Hitungannya mudah dihasilkan, karena kunjungan portal yang tidak berakhir dengan tiket tampak identik dengan kunjungan portal tempat pengguna menyerah. Topik ini karena itu bermula dari hasil pengguna. Ia mendefinisikan apa arti keberhasilan swalayan, bagaimana memperkirakan deflection tanpa mengklaim jasa atas pengabaian, bagaimana mengukur cakupan dan keandalan otomatisasi, dan bagaimana melihat efek shift-left pada volume dan kompleksitas. Ukuran volume dan prioritas terkait ada di topik 3.2, Volume dan prioritas insiden, sisi permintaan di topik 3.5, Metrik pemenuhan permintaan layanan, dan sisi pengetahuan di topik 3.6, Metrik manajemen pengetahuan.

Istilah yang dipakai dalam topik ini:

- **Level 0 (atau tingkat swalayan)**: penyelesaian oleh pengguna tanpa menghubungi staf. Level 1 adalah lini pertama dukungan, biasanya service desk, dan level 2 dan 3 adalah tingkat spesialis dan rekayasa.
- **Deflection**: kontak yang seharusnya mencapai staf dan diselesaikan di level 0 sebagai gantinya. Ia tidak dapat diamati langsung, jadi selalu estimasi.
- **Fall-through**: pengguna yang mencoba swalayan, tidak berhasil, lalu menghubungi staf tentang kebutuhan yang sama.
- **Runbook**: prosedur terdokumentasi untuk tugas operasional rutin. [Runbook](https://en.wikipedia.org/wiki/Runbook) adalah langkah pertama yang lazim menuju otomatisasinya.
- **Toil**: pekerjaan manual, berulang, dapat diotomatisasi tanpa nilai bertahan (lihat topik 5.7, Metrik pekerjaan berulang dan siaga).
- **Katalog layanan**: daftar layanan dan permintaan standar yang ditawarkan kepada pengguna. ITIL menyebutnya service catalogue.

## Prinsip utama

- **Hitung hasil, bukan kontak yang dihindari.** Sesi portal tanpa tiket adalah keberhasilan hanya bila kebutuhan pengguna terpenuhi. Definisikan keberhasilan dari sisi pengguna dan verifikasi dengan sinyal tindak lanjut.
- **Deflection adalah estimasi, jadi labeli demikian.** Nyatakan metode, pembanding yang dipakai, dan ketidakpastiannya. Jangan pernah menyajikan angka deflection yang diperkirakan sebagai fakta terukur.
- **Ukur jalur fall-through.** Rute dari percobaan swalayan yang gagal ke kontak berstaf adalah tempat sebagian besar kegagalan tersembunyi hidup. Laporkan di samping setiap angka keberhasilan.
- **Otomatisasi punya sisi biaya.** Setiap alur otomatis butuh perawatan, pemantauan, dan cara gagal dengan aman. Ukur cakupan dan keandalan bersama, dan hitung upaya yang dihabiskan menjaga otomatisasi tetap hidup.
- **Shift left mengubah campuran selain volume.** Ketika pekerjaan mudah keluar dari antrean, pekerjaan yang tersisa lebih sulit dan lebih lambat rata-rata. Baca waktu penyelesaian dan waktu penanganan dengan itu dalam benak (lihat topik 3.3, Waktu respons dan penyelesaian insiden).
- **Metrik menggambarkan layanan dan alur.** Laporkan menurut item katalog, keluarga artikel, atau alur otomatisasi. Jangan pernah memeringkat agen menurut berapa banyak pengguna yang mereka dorong ke swalayan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat keberhasilan swalayan | Porsi sesi swalayan tempat kebutuhan pengguna terpenuhi tanpa kontak staf | Sesi yang berakhir dengan hasil selesai (permintaan diajukan dan dipenuhi, artikel ditandai bermanfaat, setel ulang selesai) tanpa kontak berstaf tentang kebutuhan yang sama dalam 7 hari, dibagi semua sesi yang memulai tugas. Jam dimulai pada tindakan bermakna pertama di portal, berhenti pada penyelesaian atau pengabaian. Mengecualikan lalu lintas bot, akun uji, dan penelusuran murni | Persen | Log portal dan identitas, sistem tiket, analitik sesi | Manajemen permintaan layanan; manajemen pengetahuan | Putaran umpan balik pelanggan; kriteria penerimaan berbasis hasil | Bulanan |
| Perkiraan tingkat deflection | Perkiraan porsi permintaan yang diselesaikan di level 0 yang seharusnya mencapai staf | Bandingkan tingkat kontak per 1.000 pengguna aktif untuk suatu layanan sebelum dan sesudah perubahan swalayan, atau terhadap kelompok tahan, disesuaikan untuk pergeseran permintaan yang diketahui. Dinyatakan sebagai estimasi dengan metode disebut. Mengecualikan kontak yang pindah ke saluran lain | Persen (estimasi) | Sistem tiket, hitungan populasi pengguna, data eksperimen atau kohort | Service desk; manajemen insiden | Eksperimen dengan kelompok kontrol; uji A/B | Kuartalan |
| Tingkat fall-through | Porsi percobaan swalayan yang gagal yang berakhir pada kontak berstaf tentang kebutuhan yang sama | Kontak berstaf yang dibuka dalam 7 hari sejak sesi swalayan terabaikan atau tak berhasil oleh pengguna sama pada topik sama, dibagi sesi tak berhasil. Jam dimulai pada akhir sesi. Mengecualikan kontak tak berkaitan | Persen | Log portal digabung dengan sistem tiket pada pengguna dan topik | Service desk; manajemen pengetahuan | Jalur eskalasi dalam definisi selesai; umpan balik dari dukungan | Bulanan |
| Adopsi swalayan (porsi portal-dahulu) | Porsi permintaan dan laporan insiden yang memenuhi syarat yang diajukan lewat saluran swalayan | Item yang dibuat lewat portal, bot, atau API, dibagi semua item untuk entri katalog yang menawarkan rute swalayan. Mengecualikan item yang tidak punya rute swalayan | Persen | Kolom saluran sistem tiket, konfigurasi katalog | Manajemen permintaan layanan; manajemen katalog layanan | Pelacakan adopsi setelah rilis | Bulanan |
| Cakupan otomatisasi | Porsi pekerjaan berulang yang memenuhi syarat yang diselesaikan otomatisasi tanpa langkah manual | Item yang diselesaikan alur otomatis dari ujung ke ujung, dibagi semua item jenis yang dinilai dapat diotomatisasi. Menghitung jenis sebagai dapat diotomatisasi hanya bila daftar kandidat tertulis menamainya. Mengecualikan pekerjaan sekali jalan dan item yang ditolak otomatisasi | Persen | Sistem tiket, log platform otomatisasi, daftar kandidat | Manajemen permintaan layanan; manajemen deployment | Otomatisasi definisi selesai; pipeline sebagai kode | Bulanan |
| Tingkat kegagalan dan pengerjaan ulang otomatisasi | Porsi eksekusi otomatis yang gagal, butuh perbaikan manual, atau menghasilkan hasil yang kemudian dikoreksi | Eksekusi otomatis yang galat, di-rollback, atau diikuti perbaikan manual dalam 7 hari, dibagi semua eksekusi otomatis. Jam dimulai pada awal eksekusi. Mengecualikan uji coba terencana | Persen | Log platform otomatisasi, sistem tiket, catatan perubahan | Pemberdayaan perubahan; manajemen insiden | Tingkat kegagalan perubahan; stabilitas build dan uji | Mingguan |
| Waktu sentuh manual per jenis permintaan | Upaya staf yang dihabiskan pada jenis permintaan yang menjadi kandidat otomatisasi | Menit kerja langsung yang dicatat staf pada item jenis itu pada periode tersebut, diringkas sebagai median dan persentil ke-85 per item. Diperkirakan dengan pengambilan sampel di mana waktu tidak dicatat. Mengecualikan waktu menunggu | Menit per item | Pengambilan sampel waktu, log kerja tiket | Manajemen permintaan layanan | Pelacakan toil; pemborosan aliran nilai | Kuartalan |
| Distribusi level (porsi shift-left) | Di mana dalam rantai dukungan item diselesaikan | Item yang diselesaikan pada tiap level (0, 1, 2, 3) dibagi semua item terselesaikan pada periode itu. Level adalah tingkat tertinggi yang melakukan kerja langsung. Mengecualikan item yang dibatalkan sebelum triase | Persen menurut level | Kelompok penyelesai dan riwayat penugasan sistem tiket | Manajemen insiden; service desk | Swarming dan pola eskalasi; tim lintas fungsi | Bulanan |

Semuanya diukur per layanan, item katalog, atau alur, tidak pernah per orang. Ukuran waktu sebaiknya ditampilkan sebagai median ditambah persentil tinggi, sebagaimana dijelaskan pengantar topik tentang literasi statistik (lihat topik 1.6, Literasi statistik untuk metrik layanan).

## Rekomendasi

### Definisikan keberhasilan dari sisi pengguna

**1. Tuliskan apa arti “mendapat yang saya butuhkan” untuk tiap rute swalayan.** Untuk setel ulang kata sandi itu setel ulang yang selesai dan masuk yang berhasil. Untuk permintaan itu pemenuhan, bukan pengajuan. Untuk artikel itu pengguna yang tidak menghubungi staf lagi tentang kebutuhan yang sama. Definisi yang berhenti pada “melihat halaman” mengukur lalu lintas.

**2. Gabungkan sesi swalayan dengan kontak berikutnya.** Bukti kegagalan terkuat adalah kontak berstaf pada topik yang sama segera setelah sesi. Tautkan keduanya pada pengguna dan topik di mana aturan privasi mengizinkan, dan di mana tidak, pakai hitungan agregat menurut topik dan hari. Penggabungan itu mengubah cerita kepuasan yang samar menjadi tingkat fall-through yang dapat Anda perbaiki.

**3. Tanyakan pengguna dengan satu pertanyaan di titik keluar.** Pertanyaan satu baris seperti “Apakah ini menyelesaikan masalah Anda?” memberi sinyal langsung yang tak dapat diberikan log. Perlakukan jawaban sebagai sampel, baca komentar teks bebas, dan bandingkan yang menjawab dengan yang tidak agar pengguna paling bahagia tidak mendefinisikan hasil (lihat topik 6.1, Metrik kepuasan pelanggan).

### Perkirakan deflection dengan jujur

**4. Utamakan pembandingan daripada penghitung.** Estimasi paling bersih datang dari kelompok tahan, peluncuran bertahap, atau tampilan sebelum-dan-sesudah kontak per 1.000 pengguna aktif untuk layanan terdampak. Menghitung “sesi yang tidak menjadi tiket” melebih-lebihkan efek, karena banyak pengguna itu tidak pernah punya kebutuhan yang akan dilihat staf. Nyatakan metode dan ketidakpastian di samping angka.

**5. Normalkan volume terhadap pemakaian.** Penurunan hitungan tiket dapat mengikuti penurunan pengguna, siklus rilis yang tenang, atau perubahan musiman. Bagi dengan pengguna aktif atau transaksi sebelum menarik kesimpulan (lihat topik 3.2, Volume dan prioritas insiden). Beri catatan pada bagan dengan rilis, kampanye, dan perubahan portal.

**6. Jauhkan deflection dari target.** Target untuk deflection menghargai menyembunyikan rute kontak, mengubur nomor telepon, dan menutup sesi obrolan lebih awal. Pakai deflection sebagai estimasi pembelajaran dan biarkan target berada pada hasil pengguna, seperti tingkat keberhasilan swalayan dan item belum terselesaikan tertua.

### Ukur otomatisasi sebagai produk, bukan proyek

**7. Simpan daftar kandidat dan ukur cakupan terhadapnya.** Cakupan atas “semua pekerjaan” adalah ukuran yang buruk, karena sebagian besar pekerjaan tidak dapat diotomatisasi. Simpan daftar tertulis pendek jenis permintaan dan insiden yang berulang, dipahami baik, dan sering, peringkatkan menurut waktu sentuh manual dan volume, dan laporkan cakupan terhadap daftar itu. Tinjau daftar tiap kuartal agar penyebut jujur.

**8. Pasangkan cakupan dengan keandalan.** Alur otomatis yang gagal satu dari sepuluh eksekusi, atau yang diam-diam menghasilkan hasil salah, dapat lebih mahal daripada tugas manual yang digantikannya. Lacak tingkat kegagalan dan pengerjaan ulang, waktu mendeteksi eksekusi gagal, dan seberapa sering seseorang harus memperbaiki hasilnya. Pakai praktik penanganan kesalahan yang dijelaskan komunitas rekayasa keandalan situs: langkah idempoten, peringatan yang jelas, dan cadangan manual yang aman (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan).

**9. Hitung perawatannya.** Otomatisasi butuh pemilik, kendali versi, uji, dan pembaruan ketika sistem di sekitarnya berubah. Catat waktu yang dihabiskan merawat tiap alur, dan bandingkan dengan waktu sentuh manual yang disingkirkannya. Otomatisasi yang biaya menjaganya tetap berjalan lebih besar dari yang dihematnya adalah kandidat pemensiunan, yang merupakan hasil normal, bukan kegagalan.

### Awasi efek shift-left

**10. Harapkan pekerjaan tersisa lebih sulit.** Ketika kontak rutin meninggalkan service desk, rata-rata waktu penanganan dan penyelesaian pada kontak pertama di level 1 sering memburuk meskipun layanan lebih baik. Laporkan distribusi level dan campuran kategori di samping ukuran itu, dan sepakati di muka dengan pimpinan bahwa kenaikan waktu penanganan setelah deflection yang berhasil adalah yang diharapkan (lihat topik 3.1, Metrik service desk).

**11. Tutup lingkaran ke pengetahuan dan manajemen masalah.** Setiap fall-through adalah bukti artikel yang hilang atau buruk, formulir yang membingungkan, atau cacat yang belum diperbaiki. Rutekan topik fall-through teratas ke pemilik pengetahuan dan, di mana sebabnya cacat, ke manajemen masalah (lihat topik 4.1, Metrik manajemen masalah). Tinjau daftar tiap bulan dan laporkan berapa banyak item diperbaiki.

**12. Bagikan kapasitas yang Anda bebaskan.** Jika otomatisasi dan swalayan menyingkirkan pekerjaan, putuskan apa yang dibeli waktu bebas itu: pekerjaan perbaikan, perbaikan proaktif, atau pelatihan. Tim yang tidak melihat manfaat dari otomatisasi berhenti mengusulkannya. Lacak porsi kapasitas terencana untuk perbaikan dari waktu ke waktu (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat keberhasilan swalayan | Menghitung formulir selesai atau tampilan halaman apa pun sebagai keberhasilan; menghapus prompt “apakah ini membantu” ketika skor turun; mengecualikan topik sulit dari penyebut | Tingkat fall-through dan sampel sesi tertutup yang dibaca orang; laporkan aturan penyebut |
| Perkiraan tingkat deflection | Menyembunyikan rute kontak; menambah langkah sebelum kontak; mengklasifikasi semua tiket yang lebih sedikit sebagai deflection apa pun sebabnya | Kontak per 1.000 pengguna aktif, kepuasan pengguna pada layanan terdampak, dan metode ditulis di samping angka |
| Tingkat fall-through | Mendefinisikan jendela pencocokan begitu pendek sehingga kembalinya pengguna jatuh di luarnya; menutup kontak lanjutan sebagai duplikat | Tingkat kontak ulang lintas semua saluran; tinjauan sampel kontak yang kembali |
| Adopsi swalayan (porsi portal-dahulu) | Memaksa semua permintaan masuk portal tanpa memandang kecocokan; melabeli ulang tiket yang dibuat lewat telepon sebagai tiket portal | Tingkat keberhasilan swalayan dan upaya pengguna; porsi permintaan yang tak punya rute portal yang dapat dipakai |
| Cakupan otomatisasi | Memilih item mudah untuk daftar kandidat; menumbuhkan penyebut dengan tugas remeh; menghitung alur yang sebagian manual sebagai otomatis | Daftar kandidat tertulis yang ditinjau tiap kuartal; tingkat kegagalan dan pengerjaan ulang otomatisasi; waktu sentuh manual item yang tersisa |
| Tingkat kegagalan dan pengerjaan ulang otomatisasi | Mengecualikan perbaikan manual dari hitungan; membiarkan eksekusi gagal mencoba ulang diam-diam sampai berhasil; melabeli kegagalan sebagai “uji coba terencana” | Catatan insiden dan peringatan yang ditautkan ke alur; waktu mendeteksi eksekusi gagal; audit hasil bersampel |
| Waktu sentuh manual per jenis permintaan | Tidak mencatat waktu untuk item yang tampak manual; menetapkan waktu ke kategori lain; mengambil sampel hanya pada hari sepi | Rencana pengambilan sampel ditulis dan ditinjau; bandingkan dengan cycle time dan usia antrean untuk jenis yang sama |
| Distribusi level (porsi shift-left) | Menaikkan porsi yang diselesaikan di level 1 dengan mengklasifikasi ulang eskalasi, atau menutup item di level 1 dan membukanya kembali di level 2 sebagai item baru | Tingkat pembukaan ulang dan tingkat tiket tertaut; sampel mutu penyelesaian; kepuasan pelanggan menurut level |

Pembacaan yang sehat menunjukkan keberhasilan swalayan naik bersama tingkat fall-through yang stabil atau turun, perkiraan deflection dinyatakan dengan metodenya, cakupan otomatisasi naik terhadap daftar kandidat yang ditinjau sementara kegagalan dan pengerjaan ulang tetap rendah, dan distribusi level yang memindahkan pekerjaan lebih awal tanpa menaikkan tingkat pembukaan ulang atau menurunkan kepuasan. Jika satu angka membaik sementara pagar pembatasnya memburuk, perlakukan perbaikan itu sebagai belum terbukti.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Swalayan lebih dulu | Hasil segera bagi pengguna, biaya marginal lebih rendah, tersedia setiap jam | Pengguna dengan kebutuhan rumit atau tak biasa dapat merasa terdampar; konten lemah menciptakan lebih banyak kontak daripada yang disingkirkan |
| Kontak berstaf lebih dulu | Bantuan pribadi, pertimbangan, dan peluang memperhatikan masalah tak biasa | Lebih lambat, mahal, dan bergantung pada ketersediaan staf |
| Memperkirakan deflection dengan kelompok tahan | Bukti efek yang kredibel | Butuh kerja desain dan toleransi terhadap kelompok yang tidak menerima perubahan |
| Menghitung sesi tanpa tiket | Murah dan selalu tersedia | Melebih-lebihkan keberhasilan; mengundang manipulasi; tidak bisa membedakan keberhasilan dari pengabaian |
| Otomatisasi luas | Eksekusi konsisten dan lebih sedikit toil | Beban perawatan, mode kegagalan yang berskala, dan keterampilan yang dapat memudar dari tim |
| Otomatisasi selektif atas alur stabil | Imbal hasil lebih baik untuk upaya dan lebih sedikit kejutan | Menyisakan sebagian pekerjaan manual, yang butuh perhatiannya sendiri |

Jawaban prosanya adalah mengotomatisasi yang sering, stabil, dan dipahami baik, dan menjaga seseorang tersedia di mana kebutuhan tidak jelas atau taruhannya tinggi. Swalayan sebaiknya dinilai dari apakah orang terbantu, dengan rute berstaf tetap terlihat. Penghematan shift-left nyata hanya bila hasil pengguna bertahan, jadi hitung kedua sisi.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Ketika pengguna membuka portal dan pergi tanpa mengajukan tiket, apa yang kita anggap terjadi, dan bagaimana kita akan mengetahuinya?**
Minta kelompok mendaftar kemungkinan ceritanya: pengguna menemukan jawaban, menyerah, menelepon sebagai gantinya, atau bertanya kepada rekan. Lihat data apa yang akan memisahkannya, seperti kontak lanjutan, prompt keluar, atau sampel sesi. Fasilitator sebaiknya mencatat asumsi mana yang kini ada di dasbor dan siapa yang bergantung padanya. Tutup dengan menyepakati satu perubahan yang akan mengganti asumsi dengan bukti.

**2. Bagaimana kita kini memperkirakan deflection, dan apakah kita akan mempertahankan metodenya di depan rekan keuangan yang skeptis?**
Telusuri perhitungan langkah demi langkah, termasuk kelompok pembanding dan penyesuaian untuk perubahan permintaan. Tanyakan apa lagi yang berubah selama periode itu, seperti rilis, gangguan, atau perubahan staf. Catat rentang nilai yang masuk akal selain judulnya. Diskusi sebaiknya berakhir dengan pernyataan polos tentang metode yang dapat berada di samping angka.

**3. Otomatisasi mana yang akan kita matikan besok jika kita tahu biaya sebenarnya?**
Daftar alur otomatis dengan pemilik, tanggal perubahan terakhir, hitungan eksekusi, tingkat kegagalan, dan upaya perawatan. Tanyakan mana yang tak akan dirindukan siapa pun, dan mana yang takut disentuh orang. Fasilitator sebaiknya memperlakukan pemensiunan sebagai hasil yang sah. Jawabannya sering mengungkap alur tanpa pemilik.

**4. Apa yang terjadi pada pengguna yang percobaan swalayannya gagal, dan berapa lama mereka mencapai seseorang?**
Minta seseorang menelusuri jalur sebagaimana pengguna, termasuk menemukan rute kontak. Waktukan dan catat setiap langkah yang bisa diperpendek. Bandingkan pengalaman itu dengan maksud portal yang dinyatakan. Kelompok sebaiknya memutuskan apakah rutenya semudah ditemukan seperti rute swalayan.

**5. Seperti apa campuran pekerjaan service desk setahun lalu, dan seperti apa sekarang?**
Tinjau campuran kategori dan distribusi level dari waktu ke waktu. Bahas mengapa waktu penanganan atau penyelesaian pada kontak pertama bergerak, dan apakah itu mencerminkan campuran yang lebih sulit. Tanyakan apakah pimpinan telah diberi tahu bahwa ini diharapkan. Sepakati cara menyajikan tren agar kenaikan waktu penanganan setelah shift left yang berhasil tidak dibaca sebagai kemunduran.

**6. Apa yang akan kita lakukan dengan kapasitas yang dibebaskan otomatisasi, dan siapa yang memutuskan?**
Perkirakan jam yang disingkirkan dari pekerjaan manual dan namai apa yang dimaksudkan untuk dibelinya. Tanyakan apakah waktu itu pergi ke pekerjaan perbaikan atau diserap permintaan baru. Bahas bagaimana tim akan tahu. Fasilitator sebaiknya mendorong komitmen konkret, seperti porsi kapasitas yang dicadangkan untuk memperbaiki topik fall-through teratas.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memiliki banyak hal yang membuat swalayan berhasil: pesan kesalahan yang jelas, formulir yang dapat dipakai, bantuan dalam produk, dan kemampuan melakukan tugas tanpa mengajukan tiket. Mereka juga memiliki otomatisasi yang hidup dalam pipeline dan kode infrastruktur. Ukuran berguna mereka adalah keberhasilan swalayan pada fitur mereka sendiri dan langkah manual yang tersisa dalam pekerjaan rilis dan lingkungan, diperlakukan sebagai toil untuk disingkirkan (lihat topik 2.8, Metrik DORA). Mereka sebaiknya membaca topik fall-through sebagai backlog produk.

### Tim layanan dan operasi

Tim operasi memikul perangkat otomatisasi dan cadangan berstaf. Mereka sebaiknya melacak keandalan otomatisasi, beban perawatan, dan waktu sentuh manual yang tersisa, dan mengawasi distribusi level tanpa dihukum karena pekerjaan lebih sulit yang tersisa. Agen sebaiknya dimintai pendapat tentang permintaan mana yang kandidat otomatisasi yang baik, karena mereka tahu di mana gesekan sebenarnya. Laporkan menurut alur dan jenis permintaan, dan tidak pernah menurut agen.

### Kepemimpinan dan tata kelola

Pemimpin tergoda memperlakukan deflection sebagai angka penghematan biaya. Permintaan yang lebih baik adalah hasil pengguna, metode di balik estimasi apa pun, dan keandalan otomatisasi. Tata kelola sebaiknya mengharapkan daftar kandidat, pemilik untuk setiap alur otomatis, dan aturan pemensiunan. Pemimpin juga sebaiknya melindungi rute berstaf agar tidak disembunyikan demi memenuhi target (lihat topik 11.3, Meluncurkan metrik tanpa menumbuhkan ketakutan).

### Pelanggan dan pengguna

Pengguna ingin melanjutkan pekerjaan mereka. Banyak yang lebih suka swalayan bila berfungsi, dan hampir semua tidak suka terjebak di dalamnya bila tidak. Pengalaman mereka paling baik ditangkap oleh pertanyaan upaya dan hasil di titik keluar, dan oleh apakah percobaan yang gagal cepat mengarah ke seseorang (lihat topik 6.4, Pengalaman pengguna dan karyawan). Pengguna dengan kebutuhan aksesibilitas atau kepercayaan diri terbatas adalah peringatan dini untuk portal yang hanya berfungsi bagi pengguna rata-rata.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah pengecer daring berukuran menengah menjalankan service desk, tim platform, dan beberapa tim produk. Angka dalam contoh ini bersifat ilustratif.

Departemen meluncurkan portal yang dirancang ulang dengan setel ulang kata sandi terpandu, alur permintaan akses perangkat lunak, dan chatbot untuk pertanyaan umum. Tiga bulan kemudian, laporan portal menunjukkan 62 persen sesi berakhir tanpa tiket, dan seorang manajer mengusulkan menyebutnya “deflection” dan menetapkan target 70 persen. Kepala service desk gelisah, karena agen melaporkan bahwa orang yang menelepon mengatakan mereka “mencoba portal dulu.”

Tim meninjau ukuran. Mereka mendefinisikan keberhasilan swalayan sebagai hasil selesai tanpa kontak berstaf pada topik yang sama dalam 7 hari. Dengan definisi itu tingkat keberhasilan adalah 48 persen, bukan 62, dan tingkat fall-through untuk alur permintaan akses adalah 31 persen. Membaca sampel 40 kontak fall-through, mereka mendapati bahwa kebanyakan pengguna tidak bisa menentukan mana dari dua item katalog serupa yang dipilih, dan chatbot menjawab pertanyaan tentang alat yang sudah dipensiunkan.

Tim membuat tiga keputusan. Pertama, ukuran judul menjadi keberhasilan swalayan, dengan perkiraan deflection hanya ditampilkan sebagai estimasi kuartalan berdasarkan kontak per 1.000 pengguna aktif, dan tidak ada target pada deflection. Kedua, dua item katalog serupa digabung, konten chatbot dikoreksi, dan dua topik fall-through teratas ditambahkan ke backlog perbaikan dengan pemilik. Ketiga, proses manual untuk membuat lingkungan uji, yang memakan median 25 menit (ilustratif) insinyur platform dan terjadi sekitar 40 kali sebulan (ilustratif), ditambahkan ke daftar kandidat otomatisasi.

Tim platform mengotomatisasi alur lingkungan dalam kuartal itu. Risiko manipulasi muncul cepat: angka cakupan alur naik, tetapi tingkat kegagalan dan pengerjaan ulang menunjukkan bahwa satu dari delapan eksekusi (ilustratif) butuh perbaikan manual dan bahwa perbaikan itu dicatat sebagai “pemeliharaan terencana.” Tim menambahkan eksekusi yang diperbaiki ke hitungan kegagalan, menautkan eksekusi ke catatan insiden, dan sepakat meninjau alur tiap bulan. Pada tinjauan berikutnya, tingkat keberhasilan naik menjadi 57 persen (ilustratif), tingkat fall-through turun, dan waktu penanganan service desk naik sedikit karena kontak yang tersisa lebih sulit. Kepala TI setuju menyajikan waktu penanganan bersama distribusi level, untuk menghindari membaca kenaikan itu sebagai kemunduran.

## Sudut pandang sektor

**Startup.** Pendiri sering dapat memperbaiki jalur swalayan yang buruk dengan berbicara kepada pengguna. Ukur keberhasilan dengan satu pertanyaan keluar dan beberapa pembacaan sesi nyata, dan otomatisasi dua atau tiga tugas yang paling banyak menginterupsi orang. Hindari membangun bot sebelum jawaban tertulis baik.

**Bisnis kecil.** Satu orang mungkin menjalankan TI untuk semua, jadi swalayan sebagian besar berarti panduan singkat yang baik dan formulir permintaan bersama. Otomatisasi penyiapan akun dan setel ulang kata sandi cepat membayar, asalkan seseorang memiliki tiap alur. Jaga rute berstaf tetap jelas, karena staf pemilik sendiri akan memutari sistem jika tidak.

**Perusahaan besar.** Skala membuat manfaat dan manipulasi lebih besar. Standarkan definisi di seluruh unit bisnis, simpan daftar kandidat pusat dan register otomatisasi, dan laporkan menurut layanan dan item katalog. Waspadai membandingkan unit yang melayani populasi pengguna yang sangat berbeda.

**Pemerintah dan sektor publik.** Aksesibilitas, akses bahasa, dan kewajiban melayani orang yang tak dapat memakai saluran digital adalah masukan desain, bukan tambahan. Jaga rute berbantuan tersedia dan terukur, dokumentasikan keputusan otomatis yang memengaruhi orang, dan harapkan pertanyaan audit tentang siapa yang memiliki tiap alur otomatis (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah lebih sedikit kontak berulang, hasil lebih cepat bagi pengguna, eksekusi tugas rutin yang lebih mantap, dan lebih banyak kapasitas untuk pekerjaan perbaikan. Sisi biayanya mencakup membangun dan merawat portal dan konten, pekerjaan integrasi dan data untuk menggabungkan sesi dengan tiket, platform otomatisasi, dan waktu untuk menulis, menguji, dan memiliki tiap alur otomatis. Sampel waktu staf dan survei keluar singkat berbiaya kecil, dan memberi sebagian besar bukti yang Anda butuhkan.

Imbal hasil sebaiknya diargumentasikan dari data Anda sendiri. Pakai waktu sentuh manual dan volume untuk memperkirakan upaya yang disingkirkan otomatisasi, kurangi perawatan dan biaya kegagalan, dan laporkan hasilnya sebagai rentang dengan asumsinya. Untuk swalayan, pakai tingkat fall-through dan hasil bersampel untuk menunjukkan porsi kontak yang dihindari karena pengguna terbantu, bukan sekadar ditolak. Jangan mengimpor persentase deflection atau penghematan dari vendor atau survei; ukur garis dasar Anda sendiri lebih dulu. Total biaya kepemilikan otomatisasi mencakup perubahan yang akan dibutuhkannya seiring sistem di sekitarnya berevolusi, jadi anggarkan untuk itu.

## Anti-pola dan jebakan

- **Menghitung sesi tanpa tiket sebagai keberhasilan.** Ia tidak dapat memisahkan bantuan dari pengabaian. Definisikan keberhasilan menurut hasil dan verifikasi dengan fall-through dan umpan balik keluar.
- **Target pada deflection.** Itu menghargai menyembunyikan rute kontak. Pakai deflection sebagai estimasi dan tetapkan target pada hasil pengguna.
- **Menyembunyikan nomor telepon atau obrolan.** Pengguna yang tak dapat menjangkau seseorang menaikkan upaya mereka dan kehilangan kepercayaan. Jaga rute berstaf terlihat dan ukur berapa lama menjangkaunya.
- **Mengotomatisasi sebelum memahami proses.** Alur mengodekan kebingungan dengan kecepatan tinggi. Dokumentasikan dan sederhanakan runbook dulu, lalu otomatisasi versi yang stabil.
- **Otomatisasi tanpa pemilik.** Alur tanpa pemilik membusuk diam-diam dan gagal pada saat buruk. Beri tiap alur pemilik, uji, monitor, dan aturan pemensiunan.
- **Mengabaikan biaya kegagalan.** Angka cakupan tinggi dengan pengerjaan ulang yang tak terukur adalah kewajiban tersembunyi. Laporkan tingkat kegagalan dan pengerjaan ulang bersama cakupan.
- **Membaca kenaikan waktu penanganan sebagai kemunduran.** Setelah shift left yang berhasil, pekerjaan yang tersisa lebih sulit. Tampilkan distribusi level dan campuran kategori di samping ukuran waktu.
- **Memeringkat agen menurut kontak yang dideflect.** Itu menghasilkan mendorong pengguna menjauh dan merusak data. Laporkan hanya menurut layanan dan alur.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Keberhasilan swalayan dan deflection | Kunjungan portal dan hitungan tiket dilaporkan; tak ada definisi hasil | Keberhasilan didefinisikan untuk beberapa rute; deflection dikutip tanpa metode | Satu definisi keberhasilan tertulis; fall-through diukur; deflection dilabeli estimasi | Keberhasilan dan fall-through diplot tren dengan umpan balik keluar; deflection diperkirakan dengan pembandingan | Hasil dibagikan dengan tim produk dan pemasok; topik fall-through menggerakkan perbaikan yang didanai |
| Cakupan dan keandalan otomatisasi | Otomatisasi ad hoc; tak ada daftar kandidat | Beberapa alur diotomatisasi oleh tim individual; kegagalan ditangani informal | Daftar kandidat, pemilik, dan ukuran kegagalan didefinisikan untuk setiap alur otomatis | Cakupan, tingkat kegagalan, dan upaya perawatan ditinjau dan didanai secara berkala | Otomatisasi dikoordinasikan antartim dan pemasok; alur dipensiunkan dan direvisi secara rutin |
| Efek shift-left dan pemakaian | Volume dilaporkan tanpa konteks | Distribusi level dilacak beberapa tim | Distribusi level dan campuran kategori dilaporkan di samping waktu penanganan | Kapasitas yang dibebaskan direncanakan dan dilacak; pimpinan membaca efek campuran dengan benar | Kapasitas dan pembelajaran mengalir kembali ke layanan dan perancangan katalog di seluruh organisasi |

## Daftar periksa

- [ ] Keberhasilan swalayan didefinisikan menurut hasil, dengan awal, akhir, dan pengecualian tertulis.
- [ ] Tingkat fall-through diukur untuk rute swalayan teratas.
- [ ] Angka deflection apa pun menyatakan metodenya dan dilabeli sebagai estimasi.
- [ ] Tidak ada target yang ditetapkan pada deflection.
- [ ] Prompt keluar satu pertanyaan atau umpan balik setara ada untuk rute kunci.
- [ ] Daftar kandidat otomatisasi tertulis ada dan ditinjau tiap kuartal.
- [ ] Setiap alur otomatis punya pemilik, monitor, dan ukuran kegagalan dan pengerjaan ulang.
- [ ] Waktu sentuh manual disampel untuk jenis permintaan teratas.
- [ ] Distribusi level ditampilkan di samping waktu penanganan dan penyelesaian pada kontak pertama.
- [ ] Rute berstaf terlihat dan waktu aksesnya diperiksa.
- [ ] Topik fall-through teratas ditinjau tiap bulan dan dirutekan ke pemilik.
- [ ] Tidak ada metrik dalam topik ini yang dilaporkan atau ditargetkan per agen.

## Prompt AI

**Periksa bagaimana kita memperkirakan deflection.**

```text
Kami menjalankan [type of service] untuk [number] pengguna aktif. Kami melaporkan
deflection sebagai [describe current calculation], memakai data dari [tools].
Perubahan pada periode itu: [releases, campaigns, outages, staffing changes].
Tinjau metodenya dan jelaskan di mana ia mungkin melebih-lebihkan atau
mengurangi efek. Sarankan pembandingan yang lebih baik, seperti kelompok tahan
atau kontak per 1.000 pengguna aktif, hanya memakai data yang saya uraikan. Jangan
mengarang nilai acuan atau target. Daftar asumsi Anda dan data yang Anda butuhkan
untuk menguatkan estimasi.
```

**Analisis topik fall-through dari sampel.**

```text
Berikut [number] kontak berstaf dari [service] yang mengikuti percobaan swalayan
pada topik yang sama, dengan kolom [list fields] dan uraian pengguna. Kelompokkan
menurut kemungkinan sebab (celah konten, formulir membingungkan, cacat, akses
hilang, preferensi pengguna) dan laporkan pola, bukan individu. Sarankan
kelompok sebab mana yang diserahkan ke pemilik pengetahuan, tim produk, atau
manajemen masalah. Jangan menebak di luar teks yang diberikan. Daftar asumsi Anda
dan apa yang tidak dapat Anda nilai.

[paste contacts with personal data removed]
```

**Peringkatkan kandidat otomatisasi.**

```text
Berikut daftar jenis permintaan dan insiden untuk [team]: [type, monthly
volume, median manual minutes, variability, risk if wrong]. Usulkan peringkat
untuk kandidat otomatisasi dan jelaskan penalaran untuk masing-masing, termasuk
beban perawatan dan dampak kegagalan. Tandai item yang sebaiknya tetap manual.
Pakai hanya angka yang saya berikan dan jangan mengarang angka penghematan.
Daftar asumsi Anda dan pertanyaan yang harus saya jawab sebelum berkomitmen.
```

**Rancang pagar pembatas untuk alur otomatis.**

```text
Kami mengotomatisasi [flow name] untuk [service]. Proses manual saat ini:
[steps]. Perkakas: [automation platform]. Usulkan metrik untuk dilacak
(cakupan, kegagalan dan pengerjaan ulang, waktu mendeteksi eksekusi gagal, upaya
perawatan), cara masing-masing dapat dimanipulasi, dan pagar pembatas untuk
masing-masing. Sertakan cadangan manual yang aman dan kriteria pemensiunan.
Jangan mengarang ambang atau acuan. Daftar asumsi Anda dan apa pun yang perlu
Anda ketahui tentang lingkungan kami.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik terkait dan pagar pembatas bagi metrik swalayan atau otomatisasi yang akan Anda perkenalkan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penyuntingan topik ini menjaga setiap metrik dipasangkan dengan vektor manipulasi dan pagar pembatas.

## Poin penting

- Keberhasilan swalayan adalah hasil pengguna, jadi definisikan dari sisi pengguna dan verifikasi dengan fall-through dan umpan balik keluar.
- Deflection adalah estimasi, jadi nyatakan metodenya dan jauhkan dari target.
- Cakupan otomatisasi tak banyak berarti tanpa keandalan, perawatan, dan daftar kandidat yang ditinjau.
- Shift left menaikkan kesulitan pekerjaan yang tersisa, jadi baca waktu penanganan bersama distribusi level dan campuran kategori.
- Ukur alur, layanan, dan item katalog, tidak pernah agen, dan jaga rute berstaf tetap terlihat.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
