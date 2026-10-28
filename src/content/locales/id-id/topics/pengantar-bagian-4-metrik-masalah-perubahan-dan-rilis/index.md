# Pengantar Bagian 4: Metrik Masalah, Perubahan, dan Rilis

**Metrik masalah, perubahan, dan rilis menunjukkan apakah cara tim mengubah layanannya dan belajar dari kegagalan membuat layanan itu lebih cepat diperbaiki sekaligus lebih mantap dijalankan.**

Setiap perubahan pada layanan yang hidup adalah taruhan. Ia dapat menyampaikan nilai lebih cepat, atau dapat merusak sesuatu yang diandalkan pengguna. Bagian 3 mengukur seberapa baik dukungan dan pemulihan bekerja ketika sesuatu salah (lihat topik 3.0, Pengantar Bagian 3: Metrik Service Desk, Insiden, dan Permintaan). Bagian ini melihat sisi lain dari koin yang sama: bagaimana perubahan masuk ke lingkungan, seberapa sering menimbulkan masalah, dan seberapa baik organisasi belajar agar masalah yang sama tidak kembali.

Pengiriman berkelanjutan dan ITIL mendekati wilayah ini dari arah berbeda. Praktik agile mengutamakan pengiriman perangkat lunak berkelanjutan dalam perubahan kecil dan memperlakukan umpan balik cepat sebagai ukuran keselamatan. Praktik ITIL seperti manajemen masalah, pemberdayaan perubahan, dan manajemen rilis ada untuk melindungi stabilitas dan menemukan serta menyingkirkan sebab insiden. Metrik dalam bagian ini memungkinkan kedua pandangan diperiksa terhadap bukti yang sama. Jika perubahan yang sering aman, ukuran kegagalan dan pengerjaan ulang akan menunjukkannya. Jika suatu kendali memperlambat pengiriman tanpa mengurangi risiko, ukuran persetujuan dan lead time yang akan menunjukkannya.

Dua peringatan berjalan sepanjang bagian ini. Kecepatan dan stabilitas harus dibaca bersama, karena angka yang memperbaiki salah satunya sambil diam-diam merusak yang lain adalah pertukaran yang buruk. Ukuran waktu juga harus dibaca sebagai distribusi dengan persentil, sebagaimana diuraikan di Bagian 1 (lihat topik 1.6, Literasi statistik untuk metrik layanan). Setiap metrik di sini menggambarkan tim, layanan, atau sistem. Tidak satu pun memeringkat individu, dan tidak satu pun adalah target untuk didorong secara terpisah (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Topik dalam bagian ini

- **4.1 Metrik manajemen masalah**: masalah yang dibuka dan ditutup, pemakaian ulang kesalahan yang diketahui, kekambuhan, dan waktu menuju perbaikan permanen.
- **4.2 Metrik postmortem dan pembelajaran**: penyelesaian tinjauan, penutupan item tindakan, kekambuhan sebab, dan sinyal pembelajaran tanpa menyalahkan.
- **4.3 Metrik pemberdayaan perubahan**: volume perubahan menurut jenis, lead time persetujuan, porsi perubahan standar, dan otomatisasi persetujuan.
- **4.4 Kegagalan perubahan dan pengerjaan ulang**: tingkat kegagalan perubahan, porsi perubahan darurat, tingkat rollback dan hotfix, serta definisi kegagalan yang konsisten.
- **4.5 Metrik rilis dan deployment**: frekuensi deployment, frekuensi rilis, pemakaian feature flag, lead time rilis, dan memisahkan deployment dari rilis.
- **4.6 Utang teknis dan kesalahan yang diketahui**: backlog kesalahan yang diketahui, stok dan bunga utang, dan memprioritaskan perbaikan terhadap pekerjaan fitur.

## Bagaimana topik-topik ini saling terkait

Bagian ini terbagi menjadi dua separuh yang saling bergantung. Topik 4.1 dan 4.2 tentang pembelajaran: bagaimana insiden ditelusuri ke sebab, dan bagaimana tinjauan berubah menjadi perbaikan yang diselesaikan. Topik 4.3, 4.4, dan 4.5 tentang perubahan: bagaimana disetujui, seberapa sering gagal, dan bagaimana sampai ke pengguna. Topik 4.6 menyatukan kedua separuh, karena utang dan kesalahan yang diketahui yang ditemukan pembelajaran adalah item yang sama yang bersaing dengan fitur baru untuk waktu tim.

Pasangan terpenting adalah antara kecepatan dan kegagalan. Frekuensi deployment dan rilis dalam topik 4.5 (lihat topik 4.5, Metrik rilis dan deployment) menggambarkan seberapa sering perubahan mencapai produksi, dan program riset DORA memasangkan ukuran throughput semacam itu dengan ukuran stabilitas (lihat topik 2.8, Metrik DORA). Topik 4.4 (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang) menyediakan sisi stabilitas itu. Tim yang melakukan deployment lebih sering sementara tingkat kegagalan dan pengerjaan ulangnya tetap datar atau turun sedang membaik. Tim yang frekuensinya naik sementara rollback dan hotfix ikut naik memindahkan biaya ke tempat lain.

Pemberdayaan perubahan berada di antara keduanya. Topik 4.3 (lihat topik 4.3, Metrik pemberdayaan perubahan) mengukur sisi kendali: berapa lama persetujuan, berapa banyak perubahan yang diotorisasi di muka sebagai standar, dan berapa banyak persetujuan yang diotomatisasi. Lead time persetujuan adalah biaya sebuah kendali, dan tingkat kegagalan perubahan dari topik 4.4 adalah bukti apakah kendali itu bekerja. Dibaca bersama, keduanya menunjukkan apakah langkah persetujuan yang berat membeli keselamatan atau hanya menambah keterlambatan, dan apakah persetujuan yang lebih ringan dan otomatis telah menjaga kegagalan tetap stabil.

Topik pembelajaran menjaga yang lain. Manajemen masalah dalam topik 4.1 (lihat topik 4.1, Metrik manajemen masalah) mengukur kekambuhan dan waktu menuju perbaikan permanen, yang merupakan ujian jangka panjang apakah penanganan insiden dari Bagian 3 menyingkirkan sebab atau hanya memulihkan layanan. Topik 4.2 (lihat topik 4.2, Metrik postmortem dan pembelajaran) memeriksa bahwa tinjauan benar-benar terjadi dan tindakannya ditutup, karena tinjauan selesai tanpa tindak lanjut tidak mengubah apa pun. Menghitung tinjauan atau masalah yang ditutup mudah dimanipulasi, jadi hitungan ini sebaiknya dibaca di samping kekambuhan sebab yang sama, yang lebih sulit dipalsukan.

Terakhir, topik 4.6 (lihat topik 4.6, Utang teknis dan kesalahan yang diketahui) menjelaskan mengapa ukuran lain hanyut. Kesalahan yang diketahui yang tidak ditangani dan utang yang menumpuk menaikkan peluang kegagalan dan biaya setiap perubahan berikutnya. Membaca backlog kesalahan yang diketahui di samping tingkat kegagalan perubahan menunjukkan kapan menunda perbaikan mulai memperlambat pengiriman.

Bagian-bagian berikutnya dibangun di atas ukuran ini. Tujuan tingkat layanan dan anggaran kesalahan di Bagian 5 memberi batas keandalan yang terhadapnya laju perubahan dapat dinilai, dan Bagian 11 menunjukkan cara memperkenalkan ukuran ini tanpa menumbuhkan ketakutan.
