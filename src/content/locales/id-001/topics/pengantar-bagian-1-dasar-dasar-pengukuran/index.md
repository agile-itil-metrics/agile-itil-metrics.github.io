# Pengantar Bagian 1: Dasar-Dasar Pengukuran

**Pengukuran hanya membantu tim yang membangun dan menjalankan layanan bila dipilih untuk suatu tujuan, dimiliki seseorang, bersumber dari data yang tepercaya, dibaca dengan cermat, dan dijaga agar tidak membelokkan pekerjaan yang digambarkannya.**

Tim agile dan tim manajemen layanan TI (ITSM) sama-sama menghasilkan aliran angka yang tak putus: tiket yang ditutup, cerita yang selesai, deployment yang dilakukan, insiden yang diselesaikan. Memiliki angka itu mudah. Memiliki angka yang membantu orang memutuskan sesuatu jauh lebih sulit, dan di celah itulah kebanyakan program metrik tersendat. Bagian ini memberikan landasan bersama yang diandalkan setiap bagian berikutnya, sebelum satu pun metrik didefinisikan.

Landasan itu mencakup enam pertanyaan secara berurutan. Mengapa mengukur sama sekali, dan berapa harga yang dibayar bila tidak mengukur apa pun atau mengukur hal yang keliru? Bagaimana sebuah ukuran berubah menjadi target lalu berhenti berkata jujur? Apa yang layak diukur sejak awal? Siapa yang mendefinisikan, memiliki, dan memensiunkan setiap metrik? Dari mana data berasal, dan sejauh mana ia bisa dipercaya? Bagaimana angka harus dibaca, mengingat data tiket dan alur itu miring dan sering jarang? Satu topik penutup menunjukkan bagaimana kerangka kerja yang mapan membantu menata jawabannya.

Bacalah bagian ini lebih dulu bila Anda baru mengenal buku ini, dan kembalilah kapan pun sebuah metrik di bagian berikutnya tampak berperilaku buruk. Sebagian besar kegagalan metrik di bagian berikutnya bisa ditelusuri ke salah satu gagasan yang diperkenalkan di sini. Metrik dalam buku ini menggambarkan tim, layanan, dan sistem. Metrik tidak pernah dipakai untuk memeringkat individu.

## Topik dalam bagian ini

- **1.1 Mengapa mengukur ITIL agile**: mengapa tim yang membangun dan menjalankan layanan membutuhkan angka, apa yang disumbangkan agile dan ITIL masing-masing pada pengukuran, serta harga dari tidak mengukur apa pun atau mengukur hal yang keliru.
- **1.2 Hukum Goodhart dan psikologi metrik**: pagar pembatas di balik setiap topik lain, mencakup bagaimana sebuah ukuran berubah menjadi target, bagaimana manipulasi terjadi pada data tiket dan pengiriman, dan kebiasaan yang mencegahnya.
- **1.3 Hasil di atas keluaran: memilih apa yang diukur**: nilai, hasil, keluaran, dan aktivitas, indikator pendahulu dan indikator tertinggal, serta penciptaan nilai bersama dalam ITIL sebagai ujian metrik yang baik.
- **1.4 Tata kelola dan kepemilikan metrik**: pemilik metrik, definisi, ritme tinjauan, pemensiunan, dan siapa yang boleh melihat apa.
- **1.5 Sumber data dan instrumentasi**: alat ITSM, pelacak isu, kontrol versi, jalur integrasi dan pengiriman berkelanjutan, pemantauan, basis data manajemen konfigurasi (CMDB), dan survei sebagai sumber, dengan perhatian pada kualitas data, stempel waktu, dan model status.
- **1.6 Literasi statistik untuk metrik layanan**: persentil di atas rata-rata, distribusi miring, sampel kecil, bagan kendali, dan ketidakpastian yang jujur untuk data tiket dan alur.
- **1.7 Kerangka pengukuran**: Goal-Question-Metric, tujuan dan hasil kunci (OKR), balanced scorecard, faktor keberhasilan kritis dan indikator kinerja utama, serta cara semuanya berpadu dengan praktik ITIL.

## Bagaimana topik-topik ini saling terkait

Topik-topik ini membentuk sebuah lingkaran, bukan tangga. Topik 1.1 (lihat topik 1.1, Mengapa mengukur ITIL agile) menyediakan tujuan, dan topik 1.3 (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur) mengubah tujuan itu menjadi pilihan tentang apa yang diukur. Metrik yang dipilih karena fokus pada hasil tetap membutuhkan definisi, pemilik, dan tanggal tinjauan, yang menjadi pekerjaan topik 1.4 (lihat topik 1.4, Tata kelola dan kepemilikan metrik). Kerangka seperti Goal-Question-Metric, yang dibahas dalam topik 1.7 (lihat topik 1.7, Kerangka pengukuran), memberi cara yang dapat diulang untuk bergerak dari tujuan ke sekumpulan kecil ukuran, sehingga cocok berpasangan dengan topik 1.3 dan 1.4.

Data dan statistik membentuk pasangan kedua. Metrik yang dipilih dengan baik hanya sebaik catatan di belakangnya, dan topik 1.5 (lihat topik 1.5, Sumber data dan instrumentasi) menjelaskan bagaimana stempel waktu, model status, dan konfigurasi alat membentuk arti sebuah angka. Topik 1.6 (lihat topik 1.6, Literasi statistik untuk metrik layanan) kemudian membahas cara membaca angka itu dengan jujur, memakai persentil, bagan kendali, dan pernyataan sederhana tentang ketidakpastian. Data yang lemah mengalahkan statistik yang baik, dan statistik yang lemah menyia-nyiakan data yang baik, jadi keduanya sebaiknya dibaca bersama.

Topik 1.2 (lihat topik 1.2, Hukum Goodhart dan psikologi metrik) berdiri melintasi semua yang lain sebagai pagar pembatas. Metrik apa pun yang dipilih berdasarkan topik 1.3, dikelola berdasarkan topik 1.4, dan bersumber dari topik 1.5 tetap bisa dimanipulasi begitu orang dinilai berdasarkan metrik itu. Tata kelola membatasi siapa melihat apa dan bagaimana sebuah metrik dipakai. Pilihan yang berfokus pada hasil membuat manipulasi kurang menguntungkan. Ukuran berpasangan, yang diperkenalkan di sini dan dikembangkan sepanjang buku, memungkinkan satu angka memeriksa angka lain. Karena itu setiap metrik di bagian berikutnya memuat vektor manipulasi dan pagar pembatas, dan bagian ini menjelaskan alasannya.
