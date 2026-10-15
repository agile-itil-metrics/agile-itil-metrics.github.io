# Pengantar Bagian 2: Metrik Alur dan Pengiriman Berkelanjutan

**Metrik alur menunjukkan bagaimana pekerjaan benar-benar bergerak melalui tim yang membangun dan menjalankan layanan, agar Anda dapat menemukan di mana ia menunggu, memutuskan apa yang diubah, dan memeriksa bahwa perubahan itu membantu.**

Tim agile yang juga menjalankan layanan menangani aliran pekerjaan campuran: fitur terencana, perbaikan cacat, permintaan layanan, dan interupsi dari insiden langsung. Semuanya bersaing untuk orang yang sama dan perhatian yang sama. Metrik alur menggambarkan aliran itu dari sudut pandang item kerja. Metrik ini menanyakan berapa banyak item sedang berjalan, berapa lama waktunya, seberapa tua, dan berapa banyak yang selesai dalam satu periode.

Pandangan ini berguna karena sebagian besar keterlambatan adalah menunggu, bukan mengerjakan. Sebuah permintaan bisa duduk dalam antrean, dalam tinjauan, atau dalam persetujuan jauh lebih lama daripada waktu yang dihabiskan orang untuknya. Mengukur jam pada item, bukan upaya orangnya, mengungkap kesenjangan itu dan memberi tim titik awal bersama yang faktual untuk perbaikan. Ia juga cocok dengan kedua dunia. Praktik agile berbicara tentang cycle time dan throughput, dan praktik ITIL berbicara tentang aliran nilai dan kinerja layanan. Keduanya menggambarkan pergerakan pekerjaan yang sama.

Data alur itu miring, dan mudah disalahgunakan. Ukuran waktu sebaiknya dibaca sebagai distribusi dengan persentil, sebagaimana diuraikan di Bagian 1 (lihat topik 1.6, Literasi statistik untuk metrik layanan). Setiap metrik dalam bagian ini menggambarkan tim, layanan, atau sistem. Tidak satu pun memeringkat individu, dan tidak satu pun adalah target untuk didorong naik atau turun sendirian (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Topik dalam bagian ini

- **2.1 Ukuran alur**: pekerjaan yang sedang berjalan, throughput, usia item kerja, dan cycle time, diterapkan pada pekerjaan proyek dan layanan.
- **2.2 Lead time, cycle time, dan efisiensi alur**: definisi yang tahan lintas tim, di mana jam mulai dan berhenti, dan bagaimana mengungkap waktu menunggu.
- **2.3 Pekerjaan dalam proses (WIP) dan antrean**: hukum Little, utilisasi dan pertumbuhan antrean, batas pekerjaan dalam proses (WIP), dan mengapa tim layanan yang sepenuhnya sibuk itu lambat.
- **2.4 Metrik aliran nilai**: ukuran pemetaan aliran nilai, waktu proses, waktu tunggu, persen lengkap dan akurat, dan aliran nilai ITIL.
- **2.5 Metrik perkiraan dan perencanaan pengiriman**: poin cerita dan velocity, keberhasilan tujuan pengiriman, akurasi perkiraan, dan mengapa velocity tak boleh dibandingkan antartim.
- **2.6 Metrik backlog dan penyempurnaan**: ukuran dan usia backlog, pekerjaan siap, cakupan penyempurnaan, dan bagaimana backlog produk dan layanan berbeda.
- **2.7 Metrik pull request dan tinjauan kode**: waktu tinjauan, ukuran pull request, dan pengerjaan ulang sebagai sinyal alur, beserta vektor manipulasi yang mengikutinya.
- **2.8 Metrik DORA**: lead time perubahan, frekuensi deployment, waktu pemulihan deployment gagal, tingkat kegagalan perubahan, dan tingkat pengerjaan ulang deployment, dengan peringatan penelitian itu sendiri.
- **2.9 Pekerjaan operasional dan pekerjaan tak terencana**: pekerjaan terencana versus tak terencana, beban interupsi, jalur ekspedit, dan alokasi kapasitas antara pekerjaan perubahan dan pekerjaan menjalankan.

## Bagaimana topik-topik ini saling terkait

Empat topik pertama membentuk inti bagian ini. Topik 2.1 (lihat topik 2.1, Ukuran alur) mendefinisikan besaran dasar: pekerjaan yang sedang berjalan, throughput, usia item kerja, dan cycle time. Topik 2.2 (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur) menetapkan di mana jam mulai dan berhenti, yang menjadi tumpuan setiap perbandingan. Topik 2.3 (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean) menjelaskan mengapa besaran itu bergerak bersama, dan topik 2.4 (lihat topik 2.4, Metrik aliran nilai) memperluas pandangan dari papan satu tim ke seluruh jalur dari permintaan ke nilai.

Beberapa topik bertindak sebagai pagar pembatas bagi yang lain. Throughput dan ukuran kecepatan dapat digelembungkan dengan memecah pekerjaan menjadi potongan lebih kecil atau dengan terburu-buru, sehingga sebaiknya dibaca bersama sinyal pengerjaan ulang dan kualitas. Ukuran pull request dan waktu tinjauan dalam topik 2.7 (lihat topik 2.7, Metrik pull request dan tinjauan kode) adalah indikator awal keterlambatan dan pengerjaan ulang. Hasil pengiriman dalam topik 2.8 (lihat topik 2.8, Metrik DORA) memasangkan ukuran kecepatan dengan ukuran stabilitas, agar pengiriman lebih cepat tidak dibeli dengan lebih banyak kegagalan. Velocity dalam topik 2.5 (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman) adalah alat bantu perencanaan untuk satu tim, dan sebaiknya diperiksa terhadap akurasi perkiraan dan ukuran alur, bukan dibaca sebagai keluaran.

Topik yang tersisa menggambarkan kondisi di bawah mana pekerjaan mengalir. Backlog yang panjang, tua, atau kurang disempurnakan menyuapi alur yang buruk, yang menjadi perhatian topik 2.6 (lihat topik 2.6, Metrik backlog dan penyempurnaan). Pekerjaan tak terencana dan interupsi, yang dibahas dalam topik 2.9 (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana), sering menjadi alasan tersembunyi cycle time memanjang dan perkiraan meleset. Membacanya di samping pekerjaan dalam proses dan antrean pada topik 2.3 menjelaskan mengapa tim tanpa kapasitas cadangan tidak dapat menyerap insiden tanpa menunda segalanya yang lain.

Bagian-bagian berikutnya membangun di atas ukuran ini. Metrik insiden, perubahan, dan rilis di Bagian 3 dan 4 memakai jam yang sama dan cara berpikir distribusi yang sama, diterapkan pada pekerjaan dukungan dan perubahan. Secara keseluruhan, pandangan alur memungkinkan tim agile dan ITIL berbicara tentang satu sistem kerja bersama.
