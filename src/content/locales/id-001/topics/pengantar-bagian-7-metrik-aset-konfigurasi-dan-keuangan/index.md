# Pengantar Bagian 7: Metrik Aset, Konfigurasi, dan Keuangan

**Mengetahui apa yang Anda miliki, bagaimana semuanya saling terkait, dan berapa biayanya adalah fondasi tempat setiap keputusan layanan lain berdiri, dan paling baik dijaga tetap terkini sebagai hasil sampingan pekerjaan, bukan sebagai tugas terpisah.**

Tim yang menyampaikan dan menjalankan layanan membuat ratusan keputusan seminggu yang bergantung pada fakta tentang benda: server mana yang disentuh perubahan ini, lisensi mana yang kedaluwarsa bulan depan, siapa yang memiliki akun cloud ini, berapa biaya layanan ini per pelanggan. Ketika fakta itu salah atau hilang, keputusan adalah tebakan. Catatan aset, konfigurasi, dan keuangan ada untuk mengubah tebakan menjadi pilihan yang terinformasi, dan metrik dalam bagian ini bertanya seberapa baik catatan itu dan seberapa baik dipakai.

Praktik agile dan ITIL mendekati wilayah ini dari arah berbeda, dan keduanya lebih kuat bersama. ITIL menyumbang disiplin catatan, pemilik, siklus hidup, dan penghitungan biaya layanan. Agile dan DevOps menyumbang kebiasaan menyampaikan perubahan secara berkelanjutan, dengan infrastruktur digambarkan sebagai kode dan pipeline yang dapat mendaftarkan apa yang dibuatnya. Hasil terbaik datang ketika pipeline pengiriman menyuapi catatan secara otomatis, dan ketika pengadaan, keuangan, keamanan, operasi, dan rekayasa berkolaborasi terus-menerus di sekitar satu gambaran bersama. Tim yang memiliki layanannya, dan yang dipercaya serta diberi informasi yang mereka butuhkan, menjaga catatan tetap benar karena mereka merasakan biayanya ketika catatan salah.

Catatan ini juga mudah digelembungkan. Inventaris dapat tampak sempurna karena hanya mendaftar apa yang sudah diketahui. Angka biaya dapat tampak rendah karena biaya bersama dialokasikan di tempat lain. Kasus bisnis dapat tampak kuat karena manfaatnya murah hati. Setiap metrik dalam bagian ini karena itu datang dengan cara ia dimanipulasi dan pagar pembatas yang memeriksanya terhadap bukti independen, tidak pernah terhadap dirinya sendiri (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Tak satu pun ukuran ini memeringkat orang atau tim. Mereka menggambarkan aset, layanan, dan keputusan.

## Topik dalam bagian ini

- **7.1 Metrik manajemen aset TI**: akurasi inventaris, cakupan penemuan, rekonsiliasi, kepemilikan, dan kelengkapan siklus hidup, dengan catatan ditangkap saat pekerjaan terjadi.
- **7.2 Metrik aset perangkat lunak dan lisensi**: posisi lisensi, pemanfaatan, shelfware, sprawl, kesiapan pembaruan, dan software bill of materials.
- **7.3 Metrik siklus hidup aset perangkat keras**: profil usia, tingkat kegagalan, waktu penggantian, pemanfaatan, pembuangan aman, dan pemakaian ulang.
- **7.4 Metrik kualitas konfigurasi dan CMDB**: kelengkapan, akurasi, cakupan dependensi, prediksi dampak, dan pemakaian catatan konfigurasi.
- **7.5 Biaya layanan dan ekonomi per unit**: biaya per layanan, biaya unit, alokasi, showback, dan mendanai tim yang bertahan.
- **7.6 Metrik FinOps dan biaya cloud**: alokasi menurut tag, pemborosan, komitmen, anomali, varians perkiraan, dan emisi.
- **7.7 Pengembalian investasi dan kasus bisnis**: total biaya kepemilikan, imbal hasil, waktu balik modal, nilai kini bersih, dan akurasi perkiraan masa lalu.

## Bagaimana topik-topik ini saling terkait

Empat topik pertama menggambarkan benda itu sendiri. Catatan aset (lihat topik 7.1, Metrik manajemen aset TI) menyatakan apa yang ada dan siapa yang memilikinya. Topik perangkat lunak dan perangkat keras (lihat topik 7.2, Metrik aset perangkat lunak dan lisensi, dan topik 7.3, Metrik siklus hidup aset perangkat keras) menambah siklus hidup dan kewajiban spesifik tiap kelas. Topik konfigurasi (lihat topik 7.4, Metrik kualitas konfigurasi dan CMDB) menambah hubungan, agar Anda dapat mengatakan apa bergantung pada apa. Mereka berbagi satu metode: tangkap pada saat perubahan, periksa terhadap bukti independen ke kedua arah, dan jaga catatan cukup kecil untuk dijaga tetap benar.

Tiga topik terakhir menggambarkan berapa biaya benda-benda itu dan apakah biaya itu sepadan. Penghitungan biaya layanan (lihat topik 7.5, Biaya layanan dan ekonomi per unit) mengubah belanja menjadi biaya per layanan dan per unit, yang bergantung pada catatan aset dan konfigurasi untuk mengatribusikan biaya dengan adil. Praktik biaya cloud (lihat topik 7.6, Metrik FinOps dan biaya cloud) menerapkan gagasan yang sama di mana belanja berubah tiap jam dan tag adalah tautan antara tagihan dan pemilik. Topik kasus bisnis (lihat topik 7.7, Pengembalian investasi dan kasus bisnis) memakai semua ini untuk membuat pilihan investasi, dan meminta Anda memeriksa pilihan itu terhadap apa yang terjadi.

Beberapa pasangan pagar pembatas menyusul. Angka akurasi inventaris sebaiknya dibaca bersama daftar celah dan porsi tanpa pemilik. Tingkat pemanfaatan lisensi sebaiknya dibaca bersama pengalaman akses pengguna, agar merebut kembali kursi tidak membuat orang frustrasi. Ukuran biaya sebaiknya selalu duduk di samping ukuran keandalan atau kepuasan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan), agar penghematan tidak dibeli dengan layanan yang lebih buruk. Kasus bisnis sebaiknya dibaca bersama rekam jejak perkiraan sebelumnya.

Bagian ini terhubung ke depan dan ke belakang. Bukti manfaat di Bagian 6 (lihat topik 6.5, Realisasi nilai dan hasil bisnis) menyuapi kasus bisnis. Ukuran risiko, audit, dan pemasok di Bagian 8 bergantung pada catatan aset dan kontrak yang diuraikan di sini. Bagian 9 beralih ke orang yang menjaga semua ini berjalan, dan ke kebiasaan perbaikan berkelanjutan yang membuat catatan lebih baik dari waktu ke waktu.
