# Pengantar Bagian 5: Metrik Tingkat Layanan, Ketersediaan, dan Keandalan

**Metrik tingkat layanan, ketersediaan, dan keandalan menggambarkan apa yang dapat diandalkan pengguna dari suatu layanan, agar tim hanya menjanjikan apa yang dapat mereka sampaikan, menyadari lebih awal ketika mereka menyimpang dari janji, dan mengerahkan upaya di tempat yang akan dirasakan pengguna.**

Bagian 2 sampai 4 melihat bagaimana pekerjaan bergerak: seberapa cepat mengalir, bagaimana insiden ditangani, dan bagaimana perubahan dibuat dengan aman. Bagian ini beralih ke hasil yang sesungguhnya dialami pengguna. Layanan yang sering dikirim dan menyelesaikan insiden dengan cepat masih bisa lambat, tidak tersedia pada saat yang salah, atau tak terprediksi. Pengguna menilai layanan dari apakah ia berfungsi ketika mereka membutuhkannya, bukan dari bagaimana tim mengorganisasi diri.

Dua tradisi bertemu di sini. Praktik ITIL sejak lama memakai perjanjian tingkat layanan, target, dan pelaporan untuk menetapkan ekspektasi antara penyedia dan pelanggannya. Praktik rekayasa keandalan situs, sebagaimana diuraikan dalam buku *Site Reliability Engineering* dari Google, memakai indikator tingkat layanan, tujuan, dan anggaran kesalahan untuk mengubah keandalan menjadi pertukaran rekayasa yang eksplisit terhadap laju perubahan. Keduanya kompatibel. Keduanya dimulai dari apa yang dipedulikan pengguna, keduanya menyatakannya sebagai target terukur, dan keduanya butuh catatan jujur tentang seberapa sering target terpenuhi.

Satu risiko berulang berjalan sepanjang bagian ini. Angka keandalan mudah dibuat tampak baik: dengan memilih indikator yang nyaman, dengan mengecualikan periode yang canggung, atau dengan mengukur komponen alih-alih perjalanan pengguna. Karena itu setiap topik di sini menamai jam dan batas ukurannya, membaca waktu dan latensi sebagai distribusi dengan persentil (lihat topik 1.6, Literasi statistik untuk metrik layanan), dan memasangkan setiap ukuran dengan pagar pembatas (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Setiap metrik menggambarkan layanan, tim, atau sistem. Tidak satu pun memeringkat individu, dan ukuran siaga khususnya ada untuk melindungi orang, bukan menilai mereka.

## Topik dalam bagian ini

- **5.1 Metrik SLA, OLA, dan XLA**: ukuran perjanjian tingkat layanan, perjanjian tingkat operasional, dan perjanjian tingkat pengalaman, dan bagaimana pelaporan semangka menyembunyikan masalah di balik dasbor hijau serta cara menghindarinya.
- **5.2 SLI, SLO, dan anggaran kesalahan**: indikator dan tujuan tingkat layanan, kebijakan anggaran kesalahan, laju pembakaran, dan memilih indikator dari apa yang dipedulikan pengguna.
- **5.3 Metrik ketersediaan**: perhitungan uptime dan downtime, ketersediaan berbobot pengguna, gangguan terencana versus tak terencana, dan aritmetika sembilan.
- **5.4 Metrik kapasitas dan kinerja**: utilisasi, saturasi, persentil latensi, ruang kosong, dan memperkirakan permintaan.
- **5.5 Metrik kualitas pemantauan dan peringatan**: volume peringatan, tingkat peringatan yang dapat ditindak, positif palsu, cakupan deteksi, dan kelelahan peringatan.
- **5.6 Metrik kelangsungan layanan**: sasaran waktu pemulihan dan titik pemulihan yang terpenuhi dalam uji, frekuensi uji, temuan game day, dan kemutakhiran rencana.
- **5.7 Metrik pekerjaan berulang dan siaga**: panggilan per shift, beban di luar jam kerja, porsi toil dari waktu, dan ukuran rotasi yang berkelanjutan.

## Bagaimana topik-topik ini saling terkait

Tiga topik pertama membentuk inti bagian ini, karena mendefinisikan janji dan cara mengukurnya. Topik 5.1 (lihat topik 5.1, Metrik SLA, OLA, dan XLA) mencakup perjanjian antara penyedia, tim internal, dan pelanggan, dan praktik pelaporan yang membuat perjanjian itu jujur atau menyesatkan. Topik 5.2 (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan) menyediakan padanan rekayasanya: indikator yang diambil dari pengalaman pengguna, tujuan yang ditetapkan terhadapnya, dan anggaran kesalahan yang membuat ruang tersisa untuk risiko terlihat. Topik 5.3 (lihat topik 5.3, Metrik ketersediaan) menetapkan aritmetika yang diandalkan keduanya, termasuk apa yang dihitung sebagai downtime dan pengguna mana yang terdampak.

Kapasitas dan kinerja duduk dekat di belakang ketersediaan. Layanan yang secara teknis hidup tetapi jenuh atau lambat gagal terhadap penggunanya dengan cara yang terlewat oleh angka uptime sederhana. Topik 5.4 (lihat topik 5.4, Metrik kapasitas dan kinerja) menyediakan persentil latensi dan ukuran ruang kosong yang melengkapi ketersediaan, dan perkiraan permintaannya memberi peringatan dini sebelum tujuan terancam.

Deteksi dan pemulihan menentukan seberapa banyak kegagalan yang dialami pengguna. Topik 5.5 (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan) bertanya apakah tim mengetahui masalah dengan cepat dan dari sinyal yang layak ditindaklanjuti, yang terhubung langsung dengan waktu deteksi dan pemulihan di Bagian 3. Topik 5.6 (lihat topik 5.6, Metrik kelangsungan layanan) bertanya apakah tim dapat pulih dalam batas yang dinyatakan ketika sesuatu yang lebih besar salah, dan menguji klaim itu alih-alih mengasumsikannya.

Topik 5.7 (lihat topik 5.7, Metrik pekerjaan berulang dan siaga) bertindak sebagai pagar pembatas manusia bagi yang lain. Tujuan ketat, peringatan bising, dan insiden yang sering semuanya jatuh pada orang yang memegang pager. Panggilan per shift dan porsi toil mengungkap kapan keandalan dibeli dengan upaya yang tak berkelanjutan, dan mereka terhubung kembali ke ukuran pekerjaan tak terencana di Bagian 2. Kualitas peringatan dalam topik 5.5 dan beban siaga dalam topik 5.7 sebaiknya dibaca sebagai pasangan, karena peringatan yang buruk adalah sebab umum rotasi yang berat.

Akhirnya, anggaran kesalahan dalam topik 5.2 menghubungkan bagian ini dengan perubahan di Bagian 4. Ketika anggaran sehat, tim dapat merilis lebih bebas. Ketika habis, perubahan dan pekerjaan keandalan sebaiknya diseimbangkan ulang. Bagian 6 lalu memeriksa apakah memenuhi target di bagian ini membuat pengguna lebih baik, yang merupakan pertanyaan yang tak dapat dijawab laporan hijau sendirian.
