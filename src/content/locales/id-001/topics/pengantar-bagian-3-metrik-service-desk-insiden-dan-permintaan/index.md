# Pengantar Bagian 3: Metrik Service Desk, Insiden, dan Permintaan

**Metrik service desk, insiden, dan permintaan menunjukkan seberapa baik dukungan dan pemulihan bekerja bagi orang yang memakai layanan Anda, agar Anda dapat memperbaiki pengalaman mendapat bantuan alih-alih tampilan sebuah laporan.**

Ini bagian buku tempat pengguna bertemu layanan. Orang yang tidak bisa masuk, pelanggan yang pesanannya gagal, dan karyawan yang butuh laptop baru semuanya sampai kepada organisasi lewat service desk, peringatan pemantauan, portal swalayan, atau pesan obrolan. Apa yang terjadi berikutnya menentukan bagaimana mereka menilai seluruh layanan. Metrik di area ini menggambarkan pengalaman itu dari dua sisi: seberapa cepat dan baik organisasi memulihkan layanan ketika sesuatu rusak, dan seberapa andal ia memenuhi permintaan rutin yang diajukan orang.

Dalam ITIL 4, manajemen insiden dan manajemen permintaan layanan adalah praktik terpisah, dan service desk adalah titik kontak untuk keduanya. Tim agile yang menjalankan apa yang mereka bangun sering menangani pekerjaan yang sama lewat rotasi siaga dan antrean bersama. Bagaimanapun, masalah pengukurannya serupa. Hitungan bergantung pada bagaimana pekerjaan dikategorikan, waktu bergantung pada di mana jam mulai dan berhenti, dan rata-rata menyembunyikan keterlambatan panjang yang diingat pengguna. Kebiasaan statistik yang diuraikan di Bagian 1 berlaku sepanjang bagian ini (lihat topik 1.6, Literasi statistik untuk metrik layanan).

Metrik dukungan juga luar biasa mudah dimanipulasi. Meja dapat menutup tiket lebih cepat dengan menutupnya terlalu dini, dan dapat menurunkan waktu penanganan dengan memburu-buru penelepon. Tim dapat mengurangi jumlah insiden dengan mengklasifikasi ulang menjadi permintaan. Setiap topik dalam bagian ini karena itu menyebut perilaku yang dihargai sebuah metrik, perilaku yang disembunyikannya, dan pagar pembatas yang menangkap perbedaannya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Setiap ukuran di sini menggambarkan tim, layanan, atau sistem. Tidak satu pun memeringkat agen atau penanggap individu.

## Topik dalam bagian ini

- **3.1 Metrik service desk**: volume kontak, penyelesaian pada kontak pertama, pembatalan, dan waktu penanganan; apa yang dihargai dan disembunyikan masing-masing.
- **3.2 Volume dan prioritas insiden**: hitungan insiden, kategori, dampak dan urgensi, campuran prioritas, insiden berulang, dan menormalkan volume terhadap pemakaian.
- **3.3 Waktu respons dan penyelesaian insiden**: waktu mendeteksi, mengakui, merespons, dan menyelesaikan; ukuran waktu rata-rata dan masalah statistiknya; persentil sebagai gantinya.
- **3.4 Metrik insiden besar**: frekuensi, durasi, dampak pelanggan, ketepatan waktu komunikasi, dan tindak lanjut tindakan.
- **3.5 Metrik pemenuhan permintaan layanan**: waktu pemenuhan, backlog, volume permintaan menurut item katalog, dan porsi otomatisasi.
- **3.6 Metrik manajemen pengetahuan**: pemakaian artikel, pemakaian ulang dalam penyelesaian, tingkat tautan, kesegaran, dan indikator Knowledge-Centered Service (KCS).
- **3.7 Metrik swalayan dan otomatisasi**: deflection, keberhasilan swalayan, cakupan otomatisasi, dan efek shift-left pada volume dan kompleksitas.

## Bagaimana topik-topik ini saling terkait

Empat topik pertama mengikuti kehidupan sebuah gangguan. Kontak tiba di meja, yang menjadi perhatian topik 3.1 (lihat topik 3.1, Metrik service desk). Yang melaporkan kerusakan menjadi insiden, yang dihitung dan diklasifikasikan topik 3.2 (lihat topik 3.2, Volume dan prioritas insiden) menurut dampak dan urgensi. Topik 3.3 (lihat topik 3.3, Waktu respons dan penyelesaian insiden) lalu mengukur berapa lama setiap tahap memakan waktu. Insiden yang sedikit namun menyebabkan kerugian serius mendapat bahasan sendiri dalam topik 3.4 (lihat topik 3.4, Metrik insiden besar), karena kelangkaan dan ukurannya membuat rata-rata biasa menyesatkan.

Beberapa ukuran ini butuh pasangan agar tetap jujur. Kecepatan di meja, seperti waktu penanganan dalam topik 3.1, sebaiknya dibaca bersama penyelesaian pada kontak pertama dan kontak berulang yang dihasilkannya, agar panggilan cepat tidak keliru dianggap masalah terselesaikan. Waktu penyelesaian dalam topik 3.3 pantas dibaca bersama insiden berulang dalam topik 3.2, karena pemulihan cepat yang gagal lagi seminggu kemudian tidak membantu pengguna. Campuran prioritas dalam topik 3.2 memberi konteks pada setiap ukuran waktu: kenaikan median waktu penyelesaian mungkin mencerminkan perubahan jenis insiden yang tiba, bukan perubahan seberapa baik tim merespons.

Permintaan dan insiden sebaiknya diukur berdampingan tetapi tidak pernah digabung. Topik 3.5 (lihat topik 3.5, Metrik pemenuhan permintaan layanan) membahas pekerjaan pemenuhan yang dapat diprediksi dan berulang, tempat tujuannya adalah upaya per permintaan yang stabil dan menyusut. Pekerjaan insiden tak dapat diprediksi, dan tujuannya adalah pemulihan yang cepat dan tahan lama. Menggabungkan keduanya dalam rata-rata satu antrean menyembunyikan masalah keduanya. Ukuran alur di Bagian 2 menyediakan jam bersama dan batas pekerjaan dalam proses yang menjaga kedua aliran tidak saling kelaparan (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).

Dua topik terakhir bertindak atas volume yang diukur yang lain. Pengetahuan dalam topik 3.6 (lihat topik 3.6, Metrik manajemen pengetahuan) memperpendek penyelesaian dengan membiarkan orang berikutnya memakai ulang apa yang dipelajari orang sebelumnya, dan menyuapi konten swalayan yang diukur dalam topik 3.7 (lihat topik 3.7, Metrik swalayan dan otomatisasi). Deflection dan otomatisasi mengurangi kontak sederhana yang mencapai meja, yang menyisakan campuran pekerjaan lebih sulit bagi orang yang tinggal. Pergeseran itu sebaiknya diharapkan, dan waktu penanganan mungkin naik karenanya, jadi sebaiknya dibaca sebagai perubahan campuran, bukan kemunduran kinerja.

Insiden berulang menjadi masukan bagi manajemen masalah di Bagian 4.
