# Metrik insiden besar

**Ukur insiden besar sebagai peristiwa langka dan mahal untuk dipelajari, bukan sebagai tabel liga: hitung, waktukan dengan jujur, ukur dampak pelanggan, periksa bahwa orang diberi tahu, dan buktikan bahwa tindakan tindak lanjut benar-benar selesai.**

## Gambaran umum dan motivasi

Insiden besar adalah insiden yang cukup serius untuk membutuhkan respons di luar rutinitas biasa. [ITIL](https://en.wikipedia.org/wiki/ITIL), kerangka manajemen layanan TI yang paling dikenal, menggambarkan [manajemen insiden](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) sebagai pemulihan operasi layanan normal secepat mungkin, dan mengharapkan organisasi menangani insiden paling seriusnya lewat jalur tersendiri yang lebih terkoordinasi. Bagaimana organisasi menarik garis itu adalah keputusannya sendiri. Pilihan yang lazim adalah insiden yang memengaruhi banyak pengguna atau layanan kritis dan membutuhkan beberapa tim bekerja bersama di bawah satu koordinator. Tulis definisi Anda sendiri, karena setiap metrik dalam topik ini bergantung padanya.

Insiden besar jarang. Sebuah tim mungkin melihat puluhan insiden biasa per pekan dan dua atau tiga insiden besar per kuartal. Itu mengubah cara mengukur. Statistik biasa untuk volume dan waktu penyelesaian insiden (lihat topik 3.2, Volume dan prioritas insiden, dan topik 3.3, Waktu respons dan penyelesaian insiden) mengandaikan banyak peristiwa dan menghargai rata-rata. Dengan segelintir insiden besar per periode, rata-rata didominasi satu malam buruk, garis tren sebagian besar kebisingan, dan [persentil](https://en.wikipedia.org/wiki/Percentile) tak bermakna pada lima titik data (lihat topik 1.6, Literasi statistik untuk metrik layanan). Pendekatan jujur adalah menampilkan setiap insiden besar sebagai barisnya sendiri, dengan lini masanya sendiri, dan meringkas hanya pada jendela yang lebih panjang.

Pandangan agile dan ITIL bertemu di sini lebih langsung daripada di bagian mana pun dalam buku ini. ITIL menyumbang strukturnya: insiden besar yang dideklarasikan, koordinator bernama, komunikasi terdefinisi kepada pihak terdampak, dan tinjauan sesudahnya. Tradisi [agile](https://en.wikipedia.org/wiki/Agile_software_development) dan [rekayasa keandalan situs (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) menyumbang kebiasaannya: [komandan insiden](https://en.wikipedia.org/wiki/Incident_commander) yang menjalankan respons, tinjauan tanpa menyalahkan atas apa yang terjadi, dan fokus pada pembelajaran yang menyuapi perbaikan berkelanjutan. *Site Reliability Engineering* dari Google menjelaskan pola komando insiden dan praktik tinjauan postmortem (lihat Referensi). [Postmortem](https://en.wikipedia.org/wiki/Postmortem_documentation) dalam arti ini adalah catatan tertulis tentang insiden, sebabnya, dan tindakan yang menyusul, dan istilah itu dipakai di sini bergantian dengan “tinjauan pasca-insiden.”

Topik ini mencakup lima pertanyaan. Seberapa sering insiden besar terjadi? Berapa lama berlangsung, dan berapa banyak waktu itu dihabiskan sebelum ada yang mendeklarasikannya? Berapa banyak pengguna, dan pengguna mana, yang merasakannya? Apakah orang mendengar dari kita tepat waktu dan dengan irama tetap? Dan apakah tindak lanjut yang dijanjikan terjadi? Topik terkait mencakup apa yang ada di sekitarnya: ketersediaan (lihat topik 5.3, Metrik ketersediaan), mutu tinjauan tertulis (lihat topik 4.2, Metrik postmortem dan pembelajaran), sebab yang mendasari (lihat topik 4.1, Metrik manajemen masalah), dan perubahan yang sering memicunya (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang).

Istilah yang dipakai dalam topik ini:

- **Insiden besar:** insiden yang memenuhi kriteria deklarasi tertulis Anda dan memicu proses insiden besar.
- **Deklarasi:** saat seseorang berwenang secara resmi memanggil proses insiden besar.
- **Waktu memulihkan:** waktu dari awal dampak pelanggan sampai saat layanan dipulihkan bagi pengguna. Saat memulihkan layanan tidak sama dengan menemukan [akar masalah](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Komandan insiden:** peran yang mengoordinasikan respons, menugaskan tugas, dan memutuskan. Itu peran selama insiden, bukan jabatan.
- **Tinjauan pasca-insiden:** pemeriksaan terstruktur dan tanpa menyalahkan atas insiden setelah layanan dipulihkan.
- **Item tindakan:** perubahan spesifik, berpemilik, dan bertanggal yang menyusul dari tinjauan.

## Prinsip utama

- **Tampilkan peristiwa, lalu ringkas.** Peristiwa langka pantas mendapat lini masa individual. Laporkan setiap insiden besar terpisah dan pakai statistik ringkasan hanya pada jendela panjang, dengan hitungan di sampingnya.
- **Mulai jam pada dampak, bukan pada kesadaran.** Durasi yang dimulai saat seseorang menyadari menyembunyikan celah deteksi, yang sering bagian terbesar ceritanya.
- **Ukur pengalaman pengguna, bukan upaya tim.** Dampak pelanggan adalah alasan proses itu ada. Jam upaya penanggap adalah biaya untuk dilacak, tidak pernah skor.
- **Komunikasi adalah bagian pemulihan.** Layanan yang dipulihkan sementara pengguna masih menebak baru separuh diperbaiki. Perlakukan ketepatan waktu pembaruan sebagai ukuran respons.
- **Tinjauan belum selesai sampai tindakannya selesai.** Dokumen lengkap dengan tindakan terbuka tidak mengubah apa pun. Ukur tindak lanjut, bukan sekadar keberadaan tinjauan.
- **Jangan pernah memeringkat orang, dan jangan pernah menghukum deklarasi.** Jika mendeklarasikan insiden besar merugikan tim pendeklarasi dalam laporan, lebih sedikit insiden akan dideklarasikan dan metrik akan membaik sementara layanan memburuk.
- **Jaga kriteria deklarasi stabil.** Menggeser ambang mengubah setiap metrik dalam topik ini. Catat setiap perubahan dengan alasan dan tanggalnya.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hitungan insiden besar | Insiden besar yang dideklarasikan dalam satu periode, menurut layanan | Hitungan insiden yang memenuhi kriteria deklarasi dan dideklarasikan pada periode itu, menurut waktu deklarasi; insiden yang diturunkan dalam jam pertama didaftar terpisah dan dikecualikan | hitungan per kuartal | Catatan insiden alat ITSM dengan bendera insiden besar | Manajemen insiden | Tinjauan kesehatan tim atau layanan | Laporan bulanan, tren kuartalan |
| Durasi insiden besar | Waktu pelanggan terdampak | Waktu layanan dipulihkan dikurangi waktu awal dampak, per insiden. Awal dampak adalah bukti paling awal dalam pemantauan atau laporan pengguna pertama, mana yang lebih dulu. Pemulihan parsial dicatat sebagai peristiwanya sendiri, dan pemulihan penuh menghentikan jam | menit, per insiden | Lini masa pemantauan, lini masa insiden di alat ITSM | Manajemen insiden; manajemen tingkat layanan | Waktu pemulihan dalam metrik pengiriman (lihat topik 2.8, Metrik DORA) | Per insiden; median dan maksimum jendela panjang tiap kuartal |
| Waktu mendeklarasikan | Jeda antara awal dampak dan deklarasi insiden besar | Waktu deklarasi dikurangi waktu awal dampak, per insiden. Insiden yang tak pernah dideklarasikan ditemukan lewat tinjauan kuartalan atas insiden biasa berdampak tinggi dan disertakan dengan waktu deklarasi n/a (tak pernah dideklarasikan) | menit, per insiden | Lini masa pemantauan, jejak audit alat ITSM | Manajemen insiden; manajemen pemantauan dan peristiwa | Definisi siap untuk eskalasi dalam kesepakatan kerja tim | Per insiden |
| Dampak pelanggan | Berapa banyak pengguna dan berapa banyak pemakaian yang terpengaruh | Pengguna terdampak (atau permintaan gagal) dikalikan menit terdampak, per insiden. Hitung hanya pengguna yang mencoba memakai layanan selama jendela dampak. Pemeliharaan terencana dikecualikan | menit-pengguna, atau permintaan gagal | Telemetri layanan, catatan kontak dukungan | Manajemen tingkat layanan; manajemen insiden | Indikator tingkat layanan yang menghadap pengguna (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan) | Per insiden |
| Ketepatan waktu komunikasi | Apakah pihak terdampak diberi tahu tepat waktu | Porsi insiden besar yang pemberitahuan pertama kepada pelanggan keluar dalam target setelah deklarasi, dan porsi pembaruan terjadwal yang dikirim dalam interval yang disepakati. Jam dimulai saat deklarasi. Pesan internal saja dikecualikan | persen insiden; persen pembaruan | Riwayat halaman status, log komunikasi di alat ITSM | Manajemen insiden; manajemen tingkat layanan | Komunikasi pemangku kepentingan dalam kesepakatan kerja tim | Per insiden; ringkasan kuartalan |
| Ketepatan waktu penyelesaian tinjauan | Apakah tinjauan berlangsung cukup cepat untuk berguna | Porsi insiden besar dengan tinjauan terbit dalam jumlah hari kerja yang disepakati setelah pemulihan. Jam berhenti saat penerbitan, bukan pada draf pertama. Insiden yang masih dalam jendela dikecualikan | persen | Repositori tinjauan, alat ITSM | Perbaikan berkelanjutan; manajemen masalah | Tindak lanjut perbaikan | Kuartalan |
| Tindak lanjut item tindakan | Apakah tindakan tinjauan diselesaikan | Tindakan tinjauan yang selesai pada tenggatnya / tindakan tinjauan yang jatuh tempo pada periode itu. Tindakan yang ditutup sebagai “tidak akan dikerjakan” dihitung terpisah dengan alasan, tidak disembunyikan | persen; hitungan yang terlambat | Pelacak isu yang tertaut ke tinjauan | Perbaikan berkelanjutan; manajemen masalah | Item backlog dari retrospektif | Bulanan |
| Tingkat insiden besar berulang | Kekambuhan sebab yang sama | Insiden besar pada periode itu yang sebab tercatatnya cocok dengan insiden besar sebelumnya dalam dua belas bulan sebelumnya / insiden besar pada periode itu. Pencocokan menurut kolom sebab, ditinjau dengan tangan | persen, dengan hitungan ditampilkan | Catatan tinjauan, catatan masalah | Manajemen masalah | Pekerjaan pencegahan di backlog | Kuartalan |

Setiap baris butuh aturan jam tertulis sebelum dipercaya. Perselisihan tentang awal dampak dan waktu pemulihan lazim terjadi dan paling baik diselesaikan sebelumnya (lihat topik 1.5, Sumber data dan instrumentasi).

## Rekomendasi

### Tuliskan apa yang membuat insiden menjadi besar

**Terbitkan kriteria deklarasi yang dapat diterapkan siapa pun yang siaga.** Kriteria biasanya menggabungkan dampak (pengguna terdampak, layanan kritis menurun, risiko keselamatan atau hukum) dengan kebutuhan koordinasi (lebih dari satu tim dibutuhkan). Daftar pendek dengan contoh mengalahkan matriks panjang. Nyatakan siapa yang boleh mendeklarasikan, dan tegaskan bahwa mendeklarasikan dengan itikad baik tidak pernah kesalahan, bahkan ketika insiden ternyata kecil.

**Catat versi kriteria dalam setiap catatan insiden.** Ketika ambang bergeser, tren ikut bergerak. Nomor versi atau tanggal pada tiap catatan memungkinkan Anda membandingkan yang sejenis dan menjelaskan lonjakan hitungan yang berasal dari perubahan aturan.

### Hitung dan klasifikasikan tanpa menjadikan hitungan sebagai target

**Laporkan hitungan beserta konteksnya.** Tampilkan jumlah insiden besar per kuartal di samping layanan, pemicu (perubahan, kapasitas, ketergantungan, keamanan, lainnya) dan versi kriteria. Hitungan tanpa konteks mengundang target seperti “kurang dari tiga per kuartal,” yang mengajari orang untuk tidak mendeklarasikan. Perlakukan hitungan yang turun sebagai kabar baik hanya bila waktu mendeklarasikan dan dampak pelanggan stabil.

**Pisahkan yang dideklarasikan, diturunkan, dan terlewat.** Lacak insiden yang dideklarasikan dan diturunkan, karena menunjukkan apakah kriteria masuk akal. Tinjau sampel insiden biasa tiap kuartal untuk yang seharusnya dideklarasikan. Yang terlewat adalah yang paling informatif.

### Waktukan insiden dari sisi pengguna

**Mulai jam saat pelanggan terdampak.** Pakai bukti andal paling awal, yang sering sinyal pemantauan yang mendahului tiket pertama. Ketika awal tidak pasti, catat estimasi dan sumbernya, bukan waktu seseorang menyadari. Jeda antara awal dampak dan deklarasi adalah metrik tersendiri dan biasanya paling murah diperbaiki.

**Bagi lini masa menjadi fase.** Deteksi, deklarasi, diagnosis, mitigasi, dan pemulihan penuh masing-masing punya sebab keterlambatan dan pemilik yang berbeda. Rincian fase untuk setiap insiden menunjukkan ke mana waktu pergi tanpa perlu rata-rata. Memulihkan layanan dengan solusi sementara dan memperbaiki sebab adalah peristiwa terpisah, dan yang kedua milik manajemen masalah.

**Pakai median dan kasus terburuk pada jendela panjang, dengan hitungan.** Untuk data setahun, laporkan median dan durasi terpanjang, dan katakan dari berapa insiden keduanya berasal. Hindari satu rata-rata waktu memulihkan untuk insiden besar. Dengan sedikit peristiwa ia tidak stabil, dan terdistorsi oleh satu gangguan panjang (lihat topik 1.6, Literasi statistik untuk metrik layanan).

### Ukur dampak pelanggan dalam istilah yang dikenali pengguna

**Utamakan dampak berbasis pengguna daripada berbasis server.** Permintaan gagal, pengguna terdampak, atau transaksi terdampak menggambarkan apa yang terjadi pada orang. Menit layanan menurun pada suatu komponen menggambarkan apa yang terjadi pada mesin. Di mana Anda punya indikator tingkat layanan, pakai (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan) dan kaitkan insiden dengan gambaran ketersediaan (lihat topik 5.3, Metrik ketersediaan).

**Tambahkan pernyataan dampak berbahasa lugas pada setiap catatan.** Satu atau dua kalimat yang menyebut siapa yang terdampak dan apa yang tak bisa mereka lakukan. Kontak dukungan, sebutan di media sosial, dan eskalasi pelanggan adalah bukti bagi pernyataan itu, bukan metrik untuk dimaksimalkan.

### Ukur komunikasi sebagai bagian respons

**Tetapkan target komunikasi menurut audiens.** Pelanggan terdampak, pemangku kepentingan internal, dan eksekutif membutuhkan pesan berbeda pada waktu berbeda. Sepakati target untuk pemberitahuan pertama setelah deklarasi dan irama pembaruan yang tetap, dan ukur kepatuhan per insiden. Irama lebih penting daripada isi: pembaruan yang berkata “tidak ada perubahan, pembaruan berikutnya dalam tiga puluh menit” dan tiba tepat waktu membangun lebih banyak kepercayaan daripada keheningan.

**Pisahkan respons dan komunikasi di tangan berbeda.** Pemimpin komunikasi membebaskan komandan insiden untuk fokus pada diagnosis. Tim kecil dapat memakai daftar periksa dan templat yang sudah ditulis sebagai gantinya.

### Tutup lingkaran pembelajaran

**Adakan tinjauan segera, dan terbitkan.** Ingatan memudar, jadi tetapkan jendela untuk tinjauan dan ukur apakah terpenuhi. Penyelesaian tinjauan kurang penting daripada apa yang diubah tinjauan, jadi pasangkan dengan tindak lanjut. *Site Reliability Engineering* dari Google membela tinjauan tanpa menyalahkan dan menuliskannya (lihat Referensi), dan topik 4.2 (Metrik postmortem dan pembelajaran) membahas mutu tinjauan.

**Lacak tindakan sampai selesai, dan izinkan “tidak akan dikerjakan” yang jujur.** Taruh setiap tindakan di backlog yang sudah dipakai tim pemilik, dengan pemilik dan tanggal. Catat tindakan yang ditolak, dengan alasan, alih-alih membiarkannya membusuk. Tinjau tindakan terlambat pada tinjauan operasi atau layanan, dan tanyakan apa yang menghalanginya. Batasi jumlah tindakan per tinjauan agar yang tersisa adalah yang penting.

**Cari pola lintas insiden, dan kirim ke manajemen masalah.** Sebab berulang, pemicu umum, dan celah deteksi berulang adalah sinyal yang terlewat oleh tinjauan tunggal. Masukkan ke proses masalah dan kesalahan yang diketahui (lihat topik 4.1, Metrik manajemen masalah) dan ke perencanaan tim pemilik layanan. Perlakukan tingkat pengulangan yang naik sebagai dorongan untuk menyelidiki, bukan vonis.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Hitungan insiden besar | Menaikkan ambang deklarasi, menjaga insiden pada “tinggi” agar tak pernah dideklarasikan, memecah satu peristiwa menjadi beberapa catatan, atau menggabung beberapa menjadi satu | Kriteria tetap dan berversi; sampel kuartalan insiden biasa berdampak tinggi; dampak pelanggan dan waktu mendeklarasikan dilacak di samping hitungan |
| Durasi insiden besar | Mengatur jam ke awal dampak yang lebih lambat, menyatakan “dipulihkan” sementara pengguna masih gagal, atau menutup dan membuka catatan baru | Awal dampak diambil dari pemantauan; pemulihan dikonfirmasi oleh indikator yang menghadap pengguna; catatan yang dibuka ulang dan tertaut dihitung sebagai satu insiden |
| Waktu mendeklarasikan | Mendeklarasikan awal pada segalanya agar tampak cepat, atau mendatangkan mundur deklarasi ke awal dampak | Porsi insiden yang dideklarasikan lalu diturunkan; jejak audit waktu deklarasi; sampel lini masa terhadap pemantauan mentah |
| Dampak pelanggan | Mempersempit definisi “terdampak,” menghitung hanya pengguna yang membuat tiket, atau mengukur ketergantungan yang tetap hidup | Dampak diturunkan dari telemetri selain kontak; pernyataan dampak berbahasa lugas ditinjau pada tinjauan insiden |
| Ketepatan waktu komunikasi | Memposting pemberitahuan samar untuk memulai jam, mengirim pembaruan tanpa isi, atau menghitung pesan internal | Pemeriksaan isi sampel pembaruan; umpan balik pelanggan tentang kejelasan; hanya pemberitahuan yang menghadap pelanggan dihitung |
| Ketepatan waktu penyelesaian tinjauan | Menerbitkan dokumen tipis untuk memenuhi tanggal, atau menyatakan tinjauan “tidak perlu” | Mutu tinjauan dibaca rekan pada sampel (lihat topik 4.2, Metrik postmortem dan pembelajaran); porsi tinjauan yang dikesampingkan ditampilkan |
| Tindak lanjut item tindakan | Menulis tindakan samar atau remeh yang mudah ditutup, menutup tindakan tanpa mengerjakan, atau melabeli ulang sebagai “tidak akan dikerjakan” | Mutu tindakan disampel; tindakan tertutup diverifikasi terhadap perubahan sistem; porsi “tidak akan dikerjakan” dan alasannya ditinjau |
| Tingkat insiden besar berulang | Mencatat setiap sebab sebagai baru dengan memilih kata berbeda, atau menyalahkan segalanya pada “kesalahan manusia” | Taksonomi sebab pendek dengan definisi; kolom sebab ditinjau seseorang di luar insiden; “kesalahan manusia” sebagai sebab tidak diterima tanpa penjelasan sistem |

Pembacaan yang sehat adalah hitungan insiden dideklarasikan yang sedang dan cukup stabil, dengan penurunan sesekali dan satu yang terlewat sesekali ditemukan dalam tinjauan. Waktu mendeklarasikan pendek dan menurun, dampak pelanggan per insiden dipahami dan turun di mana pekerjaan pencegahan dilakukan, dan hampir semua pembaruan yang menghadap pelanggan tepat jadwal. Tinjauan terbit tepat waktu dan tindakannya sebagian besar selesai, dengan himpunan kecil dan jujur tindakan yang ditolak. Jika semuanya tampak sempurna, tanyakan apakah kriteria telah hanyut atau orang telah berhenti mendeklarasikan (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). [Hukum yang dinamai menurut Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) paling mudah terlihat di sini, karena biaya angka buruk adalah berkurangnya kemauan membunyikan alarm.

## Kompromi: kelebihan dan kekurangan

| Pilihan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Tampilkan setiap insiden sebagai baris | Menjaga konteks, menghindari rata-rata menyesatkan pada hitungan kecil | Lebih sulit diringkas untuk pemimpin; butuh narasi singkat per insiden |
| Laporkan hitungan insiden besar | Sederhana, akrab, terlihat oleh pimpinan | Mudah dijadikan target; bereaksi terhadap perubahan kriteria |
| Waktu dari awal dampak | Mencerminkan pengalaman pengguna, memperlihatkan celah deteksi | Awal dampak kadang tidak pasti dan butuh pertimbangan |
| Waktu dari deklarasi | Mudah ditangkap dan dibandingkan | Menyembunyikan deteksi lambat dan deklarasi lambat |
| Menit-pengguna dampak | Dapat dibandingkan antarinsiden dan layanan | Butuh telemetri; memperlakukan semua pengguna dan menit sama |
| Tingkat penyelesaian tinjauan | Mudah dikumpulkan, mendorong kebiasaan | Menghargai dokumen, bukan pembelajaran |
| Tingkat tindak lanjut tindakan | Menghubungkan tinjauan dengan perubahan | Bisa dimanipulasi dengan tindakan remeh; butuh pemilik dan backlog |

Pakai himpunan kecil ukuran yang mencakup seluruh siklus (deklarasi, pemulihan, memberi tahu, belajar, menyelesaikan) alih-alih mengoptimalkan satu. Tambahkan ukuran dampak hanya bila telemetri ada. Di mana telemetri hilang, pernyataan dampak tertulis yang cermat lebih melayani daripada angka karangan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa tepatnya yang membuat insiden besar di sini, dan apakah semua orang yang siaga setuju?**
Definisi adalah fondasi bagi setiap angka lain. Minta tiga orang mengklasifikasi insiden terbaru yang sama dan bandingkan jawabannya. Ketidaksepakatan menunjukkan di mana kriteria samar. Fasilitator sebaiknya mencatat contoh untuk ditambahkan ke kriteria tertulis dan menyepakati siapa yang boleh mendeklarasikan. Tutup dengan mengonfirmasi bahwa mendeklarasikan dengan itikad baik selalu dapat diterima, meskipun insiden kemudian diturunkan.

**2. Pada insiden besar terakhir kita, berapa lama antara awal dampak dan deklarasi?**
Rekonstruksi lini masa dari pemantauan, bukan ingatan. Jeda sering lebih besar dari yang diharapkan dan kadang fase terpanjang. Tanyakan sinyal apa yang ada dan siapa yang melihatnya, dan apakah jeda berasal dari kriteria yang tidak jelas, peringatan yang hilang, atau keengganan mendeklarasikan. Pilih satu perubahan yang akan memperpendeknya, dan putuskan bagaimana Anda akan tahu.

**3. Siapa yang terdampak, dan bagaimana kita tahu?**
Bandingkan apa yang diyakini tim saat itu dengan apa yang ditunjukkan telemetri dan kontak dukungan kemudian. Tanyakan pelanggan mana, jika ada, yang terdampak lebih dari yang lain, dan apakah mereka yang paling penting bagi bisnis atau yang paling tidak mampu mengatasinya. Bahas apakah pernyataan dampak adalah sesuatu yang dikenali pelanggan. Sepakati satu ukuran dampak yang dapat Anda kumpulkan dengan andal lain kali.

**4. Apakah orang mendengar dari kita ketika mereka membutuhkannya, dan apakah pesannya berguna?**
Periksa pemberitahuan pertama dan setiap pembaruan terhadap irama yang disepakati. Baca pesan sebenarnya sebagaimana pelanggan. Tanyakan apakah pesan itu menyatakan apa yang diketahui, apa yang tidak diketahui, dan kapan pembaruan berikutnya datang. Bahas siapa yang memiliki komunikasi selama insiden dan apakah orang itu bebas melakukannya.

**5. Apa yang terjadi pada tindakan dari tiga tinjauan terakhir kita?**
Tarik tindakan ke satu daftar dan tandai masing-masing selesai, berjalan, terlambat, atau ditolak. Untuk yang terlambat, tanyakan apa yang menghalanginya: kapasitas, kepemilikan, prioritas, atau lingkup yang tidak jelas. Putuskan bagaimana tindakan terlambat akan diangkat pada rapat operasi atau perencanaan berikutnya.

**6. Jika kita diukur menurut jumlah insiden besar, apa yang akan kita lakukan secara berbeda, dan apakah pelanggan akan lebih baik?**
Pertanyaan ini memunculkan vektor manipulasi sebelum terjadi. Minta kelompok jujur tentang apa yang mungkin mereka ubah: ambang, label, siapa yang mendeklarasikan. Lalu tanyakan apa target yang lebih baik. Jawaban yang baik bergerak ke dampak pelanggan, waktu mendeklarasikan, dan tindak lanjut, yang lebih sulit dimanipulasi tanpa membantu pengguna. Catat jawabannya sebagai pagar pembatas.

## Empat perspektif

### Tim produk dan pengiriman

Tim produk bertemu insiden besar sebagai interupsi terhadap pekerjaan terencana dan sebagai umpan balik atas perubahan mereka sendiri. Mereka paling diuntungkan oleh angka dampak yang jelas, akses cepat ke lini masa insiden mereka sendiri, dan tindakan tinjauan yang mendarat di backlog mereka dengan ruang untuk mengerjakannya. Sisihkan kapasitas untuk tindak lanjut insiden, dan perlakukan tindakan sebagai pekerjaan dengan kedudukan sama seperti fitur. Bagikan kategori sebab agar pemicu yang berulang mengarah pada perubahan praktik (lihat topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana).

### Tim layanan dan operasi

Tim operasi menjalankan respons dan menanggung biaya kerja larut malam. Mereka butuh kriteria yang dapat diterapkan pukul 3 pagi, peran komandan dan komunikasi yang dapat mereka staf, dan alat yang menangkap lini masa saat peristiwa terjadi alih-alih dari ingatan sesudahnya. Mereka sebaiknya mengawasi beban yang ditimbulkan insiden besar pada sekelompok kecil orang (lihat topik 5.7, Metrik pekerjaan berulang dan siaga) dan memakai metrik dalam topik ini untuk meminta pekerjaan pencegahan, bukan untuk membandingkan penanggap.

### Kepemimpinan dan tata kelola

Pemimpin menetapkan iklim yang menentukan apakah orang mendeklarasikan dengan cepat dan melapor dengan jujur. Mereka sebaiknya meminta cerita tiap insiden besar dan tren setahun, menghindari target pada hitungan, dan bertanya tentang dampak pelanggan, celah deteksi, dan tindakan yang selesai. Danai pekerjaan pencegahan yang direkomendasikan tinjauan, dan tinjau di forum yang sama dengan rencana pengiriman. Tata kelola kemudian dapat melihat apakah pelajaran berubah menjadi perubahan (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan, untuk cara mengaitkan keandalan dan investasi).

### Pelanggan dan pengguna

Pelanggan menilai insiden besar dari berapa lama mereka terdampak, apakah mereka diberi tahu, dan apakah terjadi lagi. Mereka lebih terlayani oleh pemberitahuan awal yang jujur daripada yang terlambat dan dipoles. Beri mereka saluran status, irama yang dapat diandalkan, dan penjelasan jelas sesudahnya tentang apa yang terjadi dan apa yang akan berubah. Di mana kontrak berlaku, laporkan dalam istilah yang disepakati dalam perjanjian tingkat layanan (lihat topik 5.1, Metrik SLA, OLA, dan XLA). Kepuasan setelah insiden layak ditanyakan (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Seorang pengecer daring berukuran menengah menjalankan etalase, layanan pembayaran, dan layanan manajemen pesanan, masing-masing dimiliki tim produk, dengan tim platform bersama yang siaga. Kelompok manajemen layanan kecil menjalankan proses insiden besar. Semua angka dalam contoh ini bersifat ilustratif.

Dalam dua kuartal terakhir pengecer itu mendeklarasikan lima insiden besar (ilustratif). Kelompok manajemen layanan menampilkan masing-masing sebagai baris dengan awal dampak, waktu deklarasi, waktu pemulihan, estimasi pesanan gagal, waktu pemberitahuan pelanggan pertama, dan status tinjauan. Mereka memperhatikan bahwa median jeda antara awal dampak dan deklarasi adalah 38 menit (ilustratif), hampir sepanjang median waktu dari deklarasi ke pemulihan sebesar 52 menit (ilustratif). Dengan lima insiden mereka memperlakukan kedua angka sebagai kasar dan membaca lini masanya. Tiga dari lima menunjukkan peringatan pemantauan yang menyala awal dan tergeletak tanpa diakui di saluran bersama.

Tim memutuskan merutekan kelas peringatan itu ke pager siaga dan menambahkan baris pada kriteria yang menyatakan bahwa sinyal kegagalan checkout yang berkelanjutan cukup untuk mendeklarasikan, tanpa menunggu tiket. Mereka juga menetapkan target pemberitahuan pelanggan pertama dalam 20 menit setelah deklarasi (ilustratif), dan memeriksanya per insiden. Dua dari lima memenuhinya. Tim deployment menambahkan templat halaman status yang dapat diisi pemimpin komunikasi di bawah tekanan.

Selama tinjauan yang sama mereka menemukan risiko manipulasi. Seorang manajer satu tim produk mengusulkan tujuan kuartalan “tidak lebih dari dua insiden besar.” Kelompok manajemen layanan menunjukkan bahwa kuartal sebelumnya ada satu insiden yang bertahan pada prioritas tinggi selama empat jam dengan pelanggan gagal di checkout, yang tak pernah dideklarasikan karena tim dekat dengan batas. Mereka mengganti tujuan itu dengan tiga ukuran: waktu mendeklarasikan, pesanan gagal per insiden, dan porsi tindakan tinjauan yang selesai tepat waktu. Mereka menambahkan pagar pembatas berupa sampel kuartalan insiden prioritas tinggi yang dibaca seseorang di luar tim pemilik. Kuartal berikutnya hitungan yang dideklarasikan naik menjadi empat (ilustratif), median waktu mendeklarasikan turun, dan tinjauan sampel tidak menemukan deklarasi yang terlewat.

## Sudut pandang sektor

**Startup.** Startup mungkin tak punya proses insiden besar formal, hanya siapa pun yang terjaga. Mulai dengan definisi satu paragraf, koordinator bernama untuk setiap peristiwa, dan dokumen bersama yang mencatat lini masa. Hitung insiden dan catat dampak dalam satu kalimat. Tinjauan dapat berupa catatan setengah halaman, dan tindak lanjutnya adalah item di backlog tim.

**Bisnis kecil.** Bisnis kecil sering bergantung pada pemasok untuk banyak layanannya, sehingga lini masa mencakup menunggu pemasok. Catat kontak dan waktu respons pemasok dalam lini masa insiden, karena menjelaskan banyak durasi dan memberi bukti untuk percakapan kontrak. Jaga komunikasi pelanggan sederhana: satu saluran, satu orang, dan interval pembaruan yang dinyatakan.

**Perusahaan besar.** Perusahaan besar menjalankan banyak layanan dan punya banyak insiden tiap periode, jadi hitungan per layanan dan rekapitulasi sama-sama berguna. Risikonya adalah kriteria yang tidak konsisten antardivisi dan proses yang cukup berat untuk memperlambat deklarasi. Selaraskan definisi, jaga proses tetap ringan selama lima belas menit pertama, dan pakai format catatan bersama agar dampak dan komunikasi dapat dibandingkan.

**Pemerintah dan sektor publik.** Badan publik sering punya kewajiban undang-undang, seperti memberi tahu regulator atau publik, dan biaya kegagalan lebih tinggi bagi warga yang tidak punya alternatif. Tambahkan ukuran kepatuhan terhadap kewajiban pemberitahuan dan dampak pada kelompok rentan, dan simpan catatan yang bertahan terhadap audit dan permintaan informasi publik. Siklus pengadaan dapat menunda item tindakan, jadi lacak tindakan yang terhalang dan eskalasikan.

## Kasus bisnis: motivasi, ROI, dan TCO

Motifnya adalah memangkas biaya insiden yang paling menyakitkan: pendapatan atau layanan yang hilang, kepercayaan yang rusak, kelelahan staf, dan paparan regulasi. Himpunan kecil dan konsisten ukuran insiden besar menunjukkan dari mana biaya itu berasal, apakah deteksi dan komunikasi membaik, dan apakah investasi dalam pencegahan mendarat. Ukuran yang tak menunjukkan apa pun selain hitungan mendorong biaya ke dalam penyembunyian insiden.

Biaya pengumpulan sedang jika data sudah ada di alat ITSM, sistem pemantauan, dan pelacak isu. Biaya utamanya adalah menyepakati definisi, menautkan catatan insiden ke pemantauan dan ke backlog tindakan, dan waktu untuk menulis setiap tinjauan. Metrik hampir tak berbiaya selain membuat catatan konsisten.

Imbal hasil muncul sebagai waktu mendeklarasikan yang lebih pendek, komunikasi yang lebih jelas, lebih sedikit insiden berulang, dan lebih sedikit pengerjaan ulang. Tak ada angka universal yang berlaku, jadi perkirakan sendiri: ambil insiden besar setahun terakhir Anda, perkirakan biaya satu jam dampak untuk tiap layanan bersama keuangan, dan bandingkan dengan biaya pekerjaan tindak lanjut yang Anda butuhkan untuk mencegah sebab berulang. Total biaya kepemilikan mencakup waktu peninjau, perkakas untuk lini masa dan halaman status, dan kapasitas yang disisihkan untuk tindakan tindak lanjut, yang paling kurang diinvestasikan kebanyakan program.

## Anti-pola dan jebakan

- **Target untuk jumlah insiden besar.** Itu mengajari orang menghindari deklarasi. Sebagai gantinya, lacak waktu mendeklarasikan, dampak, dan tindak lanjut, dan ambil sampel untuk deklarasi yang terlewat.
- **Satu rata-rata waktu memulihkan untuk insiden besar.** Dengan sedikit peristiwa, satu gangguan panjang mendominasi. Sebagai gantinya, tampilkan tiap insiden, lalu median dan terpanjang setahun beserta hitungan.
- **Memulai jam pada deklarasi.** Itu menyembunyikan keterlambatan deteksi dan deklarasi. Sebagai gantinya, mulai pada bukti paling awal dampak pelanggan, dan laporkan jeda terpisah.
- **Memeringkat penanggap atau tim menurut metrik insiden.** Itu menghancurkan keterusterangan dan merusak tinjauan. Sebagai gantinya, laporkan menurut layanan dan sistem, dan jauhkan nama dari data.
- **Menganggap tinjauan selesai ketika dokumen terbit.** Perubahan adalah intinya. Sebagai gantinya, ukur tindak lanjut tindakan dan lihat tindakan terlambat tiap bulan.
- **Perubahan ambang diam-diam.** Tren menjadi tak bermakna. Sebagai gantinya, versikan kriteria dan catat perubahan dalam laporan.
- **Menghitung hanya tiket sebagai dampak.** Banyak pengguna terdampak tidak pernah menelepon. Sebagai gantinya, pakai telemetri dan tambahkan pernyataan dampak berbahasa lugas.
- **Memakai metrik untuk menyalahkan.** Orang lalu menyembunyikan fakta. Sebagai gantinya, jaga tinjauan tanpa menyalahkan, fokus pada kondisi dan keputusan, dan cari sebab sistem.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Definisi dan jam | Besar berarti apa pun kata orang yang paling keras; waktu berasal dari ingatan | Beberapa tim punya kriteria dan menuliskan waktu mulai dan selesai | Satu definisi tertulis, berversi, dengan aturan jam untuk awal dampak, deklarasi, dan pemulihan | Definisi dan jam diaudit terhadap pemantauan; perubahan dicatat dengan alasan | Kriteria dan jam disepakati dengan pemasok dan pelanggan, direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Dampak dan komunikasi | Dampak digambarkan dalam anekdot; pembaruan dikirim saat seseorang ingat | Dampak diperkirakan untuk beberapa insiden; beberapa tim memakai halaman status | Dampak diukur dari telemetri untuk layanan kunci; target pembaruan ditetapkan dan dilacak | Dampak dan komunikasi diplot tren dan dikaitkan dengan umpan balik pelanggan | Dampak dibagikan dengan pelanggan dan pemasok dalam format bersama, dengan tindakan perbaikan bersama |
| Tinjauan dan tindak lanjut | Tinjauan jarang dan tak tertulis; tindakan terlupakan | Tinjauan ditulis beberapa tim; tindakan dicatat tetapi tak dilacak | Setiap insiden besar ditinjau tepat waktu; tindakan dilacak di backlog tim | Tindakan terlambat dan sebab berulang ditinjau secara berkala, dengan pekerjaan pencegahan yang didanai | Pola dibagikan antartim dan pemasok; pembelajaran mengubah desain dan perencanaan secara rutin |
| Pemakaian dalam keputusan | Angka dikutip setelah kejadian | Hitungan ditunjukkan kepada pemimpin tanpa konteks | Lini masa dan tren ditunjukkan kepada tim pemilik layanan | Metrik dipasangkan dengan pagar pembatas dan dipakai untuk memprioritaskan pekerjaan keandalan | Investasi keandalan diputuskan bersama memakai bukti dampak dan kekambuhan lintas layanan |

## Daftar periksa

- [ ] Kriteria deklarasi tertulis, berversi, dan diketahui semua orang yang siaga.
- [ ] Mendeklarasikan dengan itikad baik secara eksplisit aman, dan tidak ada target pada hitungan.
- [ ] Waktu awal dampak, deklarasi, dan pemulihan didefinisikan dan diambil dari pemantauan atau jejak audit.
- [ ] Setiap insiden besar ditampilkan sebagai barisnya sendiri dengan lini masa fase.
- [ ] Dampak pelanggan diturunkan dari telemetri bila ada dan digambarkan dalam pernyataan berbahasa lugas.
- [ ] Target untuk pemberitahuan pertama dan irama pembaruan ditetapkan dan diperiksa per insiden.
- [ ] Tinjauan terbit dalam jendela yang disepakati dan tindakannya ada di backlog tim pemilik.
- [ ] Tindakan terlambat dan sebab berulang ditinjau menurut jadwal.
- [ ] Sampel kuartalan insiden biasa berdampak tinggi memeriksa deklarasi yang terlewat.
- [ ] Setiap metrik punya pagar pembatas bernama dan tidak ada metrik yang dipakai untuk memeringkat individu.

## Prompt AI

**Susun kriteria deklarasi untuk ditinjau.**

```text
Saya menyusun kriteria untuk mendeklarasikan insiden besar di [organization
type]. Layanan kami [list of services] dan tim kami [list of teams]. Pengguna
adalah [description of users]. Usulkan himpunan pendek kriteria deklarasi dengan
dua atau tiga contoh untuk masing-masing, daftar ambiguitas yang mungkin
diperdebatkan tim, dan pertanyaan yang harus saya selesaikan dengan
[stakeholders]. Jangan mengarang ambang atau nilai acuan; pakai [placeholders]
di mana angka dibutuhkan. Daftar asumsi Anda.
```

**Rekonstruksi dan kritik lini masa insiden.**

```text
Berikut lini masa insiden besar: [paste timeline with timestamps and sources].
Identifikasi awal dampak, deklarasi, mitigasi, dan pemulihan penuh, dan katakan
stempel waktu mana yang tidak pasti dan mengapa. Bagi durasi menjadi fase dan
catat di mana keterlambatan terbesar terjadi. Sarankan pertanyaan untuk diajukan
kepada penanggap dan bukti pemantauan yang dicari. Jangan mengarang fakta yang
tidak ada dalam lini masa. Daftar asumsi Anda.
```

**Tinjau sekumpulan tindakan pasca-insiden.**

```text
Berikut tindakan dari [number] tinjauan pasca-insiden untuk [service]: [paste
actions with owner, due date, and status]. Kelompokkan menurut tema, tandai yang
samar, remeh, atau tanpa pemilik, dan identifikasi pola yang menyarankan catatan
masalah atau item backlog untuk [owning team]. Jangan memeringkat individu atau
tim menurut kinerja. Jangan mengarang sebab. Daftar asumsi Anda dan informasi
yang Anda butuhkan untuk memperbaiki analisis.
```

**Uji metrik yang diusulkan terhadap manipulasi.**

```text
Kami berencana melacak [metric name], didefinisikan sebagai [definition] dan
diukur dari [data source]. Jelaskan bagaimana metrik ini dapat dimanipulasi oleh
[role], perilaku jujur apa yang mungkin dikecilkan hatinya, dan metrik atau
praktik pagar pembatas berpasangan mana yang akan menangkap tiap kasus. Jaga
saran tetap praktis untuk tim beranggotakan [team size]. Jangan mengarang nilai
acuan atau sumber. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik terkait dan pagar pembatas yang harus berada di samping setiap metrik insiden besar.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa versi topik ini yang disunting masih mengikuti templat dan konvensi.

## Poin penting

- Insiden besar jarang, jadi tampilkan masing-masing dengan lini masanya dan ringkas hanya pada jendela panjang dengan hitungan di samping angka.
- Mulai jam pada dampak pelanggan, dan laporkan jeda sebelum deklarasi sebagai ukurannya sendiri.
- Ukur dampak dalam istilah pengguna dan pemakaian, dan tambahkan pernyataan berbahasa lugas untuk apa yang terlewat angka.
- Perlakukan ketepatan waktu komunikasi sebagai bagian respons, dengan target menurut audiens dan irama pembaruan yang tetap.
- Tinjauan selesai ketika tindakannya selesai, jadi lacak tindak lanjut dan sebab berulang.
- Jangan pernah menetapkan target pada hitungan, jangan pernah memeringkat orang, dan jaga agar mendeklarasikan tetap aman.

## Referensi dan bacaan lanjutan

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
