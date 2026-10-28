# Metrik pemberdayaan perubahan

**Metrik pemberdayaan perubahan menunjukkan apakah organisasi Anda membiarkan perubahan bermanfaat mengalir dengan aman dan cepat, jadi ukur bagaimana perubahan diklasifikasikan, berapa lama menunggu keputusan, dan seberapa banyak keputusan itu dibuat otomatis oleh pipeline, dan pasangkan setiap ukuran kecepatan dengan pandangan tentang risiko.**

## Gambaran umum dan motivasi

Setiap layanan berubah. Tim menambah fitur, menambal pustaka, memutar sertifikat, mengubah ukuran basis data, dan memensiunkan komponen lama. Dalam kerangka [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, praktik yang mengatur ini disebut pemberdayaan perubahan, dan tujuannya yang dinyatakan adalah memaksimalkan jumlah perubahan layanan dan produk yang berhasil dengan memastikan risiko dinilai dengan benar, perubahan diotorisasi, dan jadwal perubahan dikelola. Edisi ITIL sebelumnya menyebut praktik itu [manajemen perubahan](https://en.wikipedia.org/wiki/Change_management_(ITSM)), dan banyak organisasi masih memakai nama itu. Nama baru menandakan pergeseran penekanan: praktik ini ada untuk memberdayakan perubahan yang baik, bukan menahannya.

**Perubahan** dalam ITIL 4 adalah penambahan, modifikasi, atau penghapusan apa pun yang dapat berdampak langsung atau tidak langsung pada layanan. Itu cakupan yang lebih luas daripada deployment kode. Ia mencakup suntingan konfigurasi, pembaruan infrastruktur, perubahan akses, tindakan pemasok, dan dokumentasi yang diandalkan operator. Tim agile biasanya melihat perubahan sebagai pull request yang dikirim. Tim operasi layanan melihatnya sebagai entri pada jadwal. Kedua pandangan sah, dan metrik dalam topik ini bekerja paling baik ketika menggambarkan peristiwa yang sama dari kedua sisi.

ITIL 4 menggambarkan tiga jenis perubahan, dan metrik dalam topik ini bergantung padanya. Periksa kata-kata persisnya dalam publikasi terkini pemilik kerangka; topik ini merangkum pola yang didokumentasikan luas per Oktober 2026.

- **Perubahan standar** berisiko rendah dan dipahami baik. Ia mengikuti prosedur terdokumentasi dan diotorisasi di muka, jadi tidak butuh persetujuan kasus per kasus.
- **Perubahan normal** butuh penilaian dan otorisasi sebelum berlanjut. Kedalaman penilaian menyesuaikan dengan risiko dan dampak.
- **Perubahan darurat** harus terjadi segera, sering untuk memulihkan layanan atau menutup kerentanan serius. Ia mengikuti jalur dipercepat dengan tinjauan lebih lengkap sesudahnya.

Istilah lain berulang di bawah. **Otoritas perubahan** adalah orang atau kelompok yang memegang hak menyetujui perubahan jenis tertentu. **Dewan penasihat perubahan (CAB)** adalah kelompok yang meninjau perubahan yang diusulkan dan menasihati atau memutuskan. **Lead time persetujuan** adalah waktu perubahan menunggu keputusan otorisasi. **Persentil** adalah nilai di bawahnya jatuh porsi pengamatan yang dinyatakan, sehingga persentil ke-85 adalah angka yang dikalahkan 85 persen perubahan.

Mengapa mengukur semua ini? Bukti terbitan terkuat tentang kendali perubahan datang dari program riset DevOps Research and Assessment (DORA). Panduannya melaporkan bahwa persetujuan eksternal yang berat, seperti CAB atau tanda tangan manajer senior, berasosiasi dengan kinerja pengiriman perangkat lunak yang lebih buruk, dan bahwa tidak ditemukan bukti bahwa tinjauan eksternal yang lebih formal menurunkan porsi perubahan yang gagal. Ia merekomendasikan tinjauan sejawat, pengujian otomatis, dan perubahan kecil sebagai gantinya, dengan peran strategis bagi dewan pusat mana pun. Ini pernyataan tentang asosiasi dalam data survei, bukan hukum, dan halaman DORA tidak memberi ukuran efek untuk klaim itu, jadi perlakukan sebagai alasan kuat untuk melihat data Anda sendiri dan bukan vonis atas kendali tertentu. Materi pemberdayaan perubahan dalam *Agile ITIL Guide* merangkum riset yang sama.

Pandangan agile dan ITIL bertemu pada pertanyaan di mana kendali hidup. Dalam pipeline pengiriman, banyak penilaian dapat terjadi terus-menerus: peninjau menyetujui kode, pengujian otomatis memeriksa perilaku, dan alat deployment menulis catatan. Ini memenuhi maksud [pemisahan tugas](https://en.wikipedia.org/wiki/Separation_of_duties) bila tinjauan dicatat dan penulis tidak dapat menyetujui pekerjaannya sendiri. Metrik memberi tahu apakah ini benar-benar terjadi, atau apakah pipeline adalah jalan cepat yang masih ditinggalkan kebanyakan perubahan untuk menunggu dalam antrean.

Topik ini mencakup sisi alur dan kendali perubahan: volume, campuran jenis, waktu tunggu, dan otomatisasi. Ia tidak mencakup apakah perubahan berhasil. Tingkat kegagalan perubahan, porsi darurat, rollback, dan ukuran hotfix milik topik 4.4, Kegagalan perubahan dan pengerjaan ulang, dan ukuran throughput dan ketidakstabilan DORA ada di topik 2.8, Metrik DORA. Frekuensi deployment dan rilis ada di topik 4.5, Metrik rilis dan deployment. Sisi insiden dari perubahan buruk ada di topik 3.3, Waktu respons dan penyelesaian insiden, dan topik 3.4, Metrik insiden besar.

Metrik perubahan cepat menarik [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): target untuk waktu persetujuan mengundang persetujuan cepat yang kosong, dan target untuk porsi perubahan standar mengundang pengklasifikasian ulang pekerjaan berisiko sebagai rutin (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Cocokkan kendali dengan risiko.** Tujuannya kendali proporsional: perubahan berisiko rendah mengambil jalur cepat yang diotorisasi di muka, dan perubahan berisiko tinggi mendapat pengawasan nyata. Satu proses untuk semuanya lambat untuk kebanyakan perubahan dan dangkal untuk yang berbahaya.
- **Ukur penantian, bukan hanya pekerjaan.** Lead time persetujuan sering mendominasi waktu yang dihabiskan perubahan selesai sebelum mencapai produksi. Ia tak terlihat kecuali seseorang mencatat kapan persetujuan diminta dan kapan diberikan.
- **Hitung jenis sebelum menghitung hal lain.** Volume, kecepatan, dan risiko berbeda tajam antara perubahan standar, normal, dan darurat. Satu rata-rata di ketiganya menyembunyikan setiap sinyal berguna.
- **Utamakan bukti otomatis dan tercatat daripada rapat.** Tinjauan sejawat, pengujian lulus, dan pemeriksaan pipeline menghasilkan catatan tanpa slot kalender. Ukur berapa banyak keputusan persetujuan yang ditangkap pipeline.
- **Gambarkan layanan atau tim, tidak pernah orang.** Penyetuju dan peminta bekerja di dalam sistem. Memeringkat individu menurut persetujuan yang diberikan atau ditolak mengajari orang menyetujui semuanya atau tak satu pun.
- **Pasangkan kecepatan dengan keselamatan.** Persetujuan lebih cepat adalah kabar baik hanya jika gambaran kegagalan mantap. Baca metrik ini di samping topik 4.4, Kegagalan perubahan dan pengerjaan ulang.
- **Tuliskan aturan klasifikasi.** Apakah perubahan standar, normal, atau darurat adalah pertimbangan yang harus dapat direproduksi. Catat kriteria dan tinjau sampel tiap kuartal.

## Definisi metrik

Tabel menyatakan jam dan pengecualian yang sebaiknya dituliskan tim Anda. Data berasal dari alat perubahan atau tiket, peristiwa kendali versi dan pipeline, dan catatan persetujuan (lihat topik 1.5, Sumber data dan instrumentasi).

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Volume perubahan menurut jenis | Jumlah perubahan yang selesai, dibagi standar, normal, dan darurat | Hitungan catatan perubahan yang mencapai status terimplementasi pada periode itu, dikelompokkan menurut jenis pada saat persetujuan; perubahan yang dibatalkan dan ditarik dikecualikan dan dilaporkan terpisah; laporkan per layanan, bukan per orang | Perubahan per pekan atau bulan, menurut jenis | Catatan perubahan di alat ITSM, digabung dengan peristiwa deployment pipeline | Pemberdayaan perubahan | Throughput item kerja selesai; isi rilis per inkremen | Mingguan, ditinjau bulanan |
| Porsi perubahan standar | Porsi perubahan selesai yang mengambil jalur diotorisasi di muka | Perubahan standar yang selesai pada periode itu / semua perubahan yang selesai pada periode itu; perubahan yang diklasifikasi ulang setelah kejadian dihitung menurut jenis akhirnya dan pengklasifikasian ulang dicatat | Persen | Catatan perubahan dengan jenis dan riwayat klasifikasi ulang | Pemberdayaan perubahan | Pekerjaan rutin yang dicakup kesepakatan kerja dan definisi selesai tim | Bulanan |
| Lead time persetujuan | Waktu perubahan menunggu keputusan otorisasi | Jam dimulai saat permintaan diajukan sebagai siap untuk penilaian dan berhenti saat keputusan otorisasi dicatat; waktu menunggu peminta menyediakan informasi dikecualikan dan ditampilkan terpisah; laporkan median dan persentil ke-85 untuk perubahan normal pada periode itu; perubahan standar tanpa langkah persetujuan dikecualikan | Jam atau hari kerja | Stempel waktu pada catatan perubahan atau peristiwa persetujuan di pipeline | Pemberdayaan perubahan | Waktu tunggu dalam alur kerja; waktu di kolom tinjauan | Mingguan, ditinjau bulanan |
| Porsi persetujuan otomatis | Porsi keputusan otorisasi yang dibuat dan dicatat oleh kendali pipeline atau kebijakan diotorisasi di muka | Perubahan yang persetujuannya diberikan oleh pemeriksaan otomatis tercatat atau tinjauan sejawat tercatat di bawah kebijakan tertulis / semua perubahan yang selesai pada periode itu; tanda tangan manual oleh dewan atau manajer dihitung tidak otomatis | Persen | Log pipeline, catatan tinjauan kode, dan catatan perubahan | Pemberdayaan perubahan; manajemen deployment | Gerbang mutu otomatis; tinjauan sejawat sebagai bagian definisi selesai | Bulanan |
| Usia antrean persetujuan | Berapa lama permintaan tertunda telah menunggu saat ini | Usia tiap perubahan yang saat ini menunggu keputusan, diukur dari pengajuan sampai saat snapshot; laporkan item tertua dan persentil ke-85 antrean terbuka; persetujuan selesai dikecualikan | Jam atau hari kerja | Catatan perubahan dengan status persetujuan terbuka | Pemberdayaan perubahan | Usia item kerja; pekerjaan dalam proses yang menua | Snapshot harian, ditinjau mingguan |
| Kelengkapan catatan perubahan | Porsi perubahan selesai yang catatannya dapat menjawab siapa, apa, mengapa, kapan, dan layanan mana | Perubahan dengan semua kolom wajib terisi dan tertaut ke layanan atau item konfigurasi yang terdampak / semua perubahan yang selesai pada periode itu; kolom wajib didaftar dalam definisi; catatan yang dibuat setelah perubahan diimplementasikan ditandai | Persen | Catatan perubahan, tautan kendali versi, data konfigurasi | Pemberdayaan perubahan; manajemen konfigurasi layanan | Keterlacakan dari commit ke tiket ke deployment | Bulanan |

Lead time persetujuan melihat ke belakang pada perubahan yang selesai menunggu dan dapat menyembunyikan tumpukan permintaan macet. Usia antrean melihat apa yang menunggu hari ini, yang merupakan peringatan lebih dini. Porsi perubahan standar bukan skor untuk dimaksimalkan: tim yang mengubah konfigurasi lewat pipeline matang akan punya porsi tinggi, dan tim pada sistem inti warisan wajar punya yang rendah.

## Rekomendasi

### Tetapkan dasar-dasarnya

**1. Hitung perubahan menurut jenis sebelum mengukur hal lain.** Bangun satu tampilan perubahan selesai, dibagi standar, normal, dan darurat, per layanan dan per bulan. Banyak organisasi mendapati pada titik ini bahwa tak seorang pun bisa sepakat tentang total, karena tiket, deployment pipeline, dan perbaikan informal dihitung terpisah. Merekonsiliasi sumber-sumber ini adalah hasil pertama program (lihat topik 1.5, Sumber data dan instrumentasi).

**2. Tulis aturan klasifikasi dan ambil sampelnya.** Nyatakan apa yang membuat perubahan standar: prosedur terdokumentasi, risiko yang diketahui, dan rekam jejak. Nyatakan apa yang mendorong perubahan menjadi normal atau darurat. Tinjau sampel acak sekitar dua puluh perubahan tiap kuartal dan tanyakan apakah masing-masing diklasifikasikan sebagaimana kata aturan. Salah klasifikasi adalah ancaman utama bagi setiap angka lain dalam topik ini.

**3. Definisikan jam persetujuan secara tertulis.** Katakan bahwa jam dimulai saat permintaan diajukan sebagai siap, dan berhenti saat keputusan dicatat, dan namai pengecualian, seperti menunggu peminta menjawab pertanyaan. Tanpa ini, satu tim mengukur dari pembuatan tiket dan yang lain dari rapat dewan, dan angka tak dapat dibandingkan bahkan dari waktu ke waktu.

### Persingkat penantian

**4. Laporkan lead time persetujuan sebagai distribusi.** Rata-rata menyembunyikan pola yang penting, yaitu beberapa perubahan menunggu sangat lama. Tampilkan median dan persentil ke-85, dan beberapa kasus paling lambat menurut nama perubahan, bukan nama orang (lihat topik 1.6, Literasi statistik untuk metrik layanan). Jika persentil ke-85 berkali-kali lipat median, sebabnya biasanya siklus rapat atau satu penyetuju yang kelebihan beban, dan perbaikannya struktural.

**5. Awasi antrean, bukan hanya riwayat.** Tinjau usia antrean persetujuan tiap pekan di forum yang sama yang meninjau ukuran alur. Item menunggu tertua adalah peringatan dini terbaik bahwa dewan kelebihan beban, bahwa liburan telah menghentikan tanda tangan, atau bahwa peminta diam-diam berhenti menindaklanjuti. Tampilan antrean juga cocok dengan kebiasaan melihat pekerjaan yang menua (lihat topik 2.1, Ukuran alur).

**6. Pisahkan menunggu informasi dari menunggu keputusan.** Ketika permintaan dikembalikan ke peminta untuk rincian lebih, hentikan jam persetujuan dan mulai jam lain. Penyetuju disalahkan atas keterlambatan yang disebabkan peminta, dan peminta disalahkan atas keterlambatan dalam antrean. Dua jam memberi tiap sisi gambaran akurat dan perbaikan konkret, seperti templat permintaan yang lebih baik.

### Pindahkan kendali ke dalam pipeline

**7. Ubah jenis perubahan berulang dan berisiko rendah menjadi perubahan standar.** Pilih perubahan normal paling umum dalam tampilan volume Anda, seperti pembaruan pustaka rutin atau tindakan penskalaan. Tuliskan prosedur dan pemeriksaannya, sepakati risikonya dengan otoritas perubahan, dan otorisasikan di muka. Lalu awasi porsi perubahan standar dan lead time persetujuan untuk perubahan normal bersama: porsi seharusnya naik dan antrean memendek, tanpa kenaikan kegagalan yang sepadan (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang).

**8. Catat persetujuan di tempat pekerjaan berlangsung.** Tangkap tinjauan sejawat di alat [tinjauan kode](https://en.wikipedia.org/wiki/Code_review) dan biarkan pipeline menautkan tinjauan, hasil uji, dan deployment ke catatan perubahan secara otomatis. Catatan lalu menjadi hasil sampingan pekerjaan alih-alih tugas terpisah. Ukur porsi persetujuan otomatis, dan periksa sampel untuk memastikan tinjauan yang tercatat substansial, bukan stempel karet (lihat topik 2.7, Metrik pull request dan tinjauan kode).

**9. Perlakukan pipeline sebagai tempat mengodekan kebijakan.** Aturan seperti “tidak ada akses produksi langsung tanpa tiket,” “pengujian harus lulus,” dan “penulis tidak dapat menyetujui perubahannya sendiri” dapat ditegakkan oleh perkakas, dengan konfigurasi disimpan sebagai kode di bawah praktik [infrastruktur sebagai kode](https://en.wikipedia.org/wiki/Infrastructure_as_code). Ketika kebijakan adalah kode, Anda dapat menunjukkan kepada auditor aturan dan riwayatnya alih-alih notulen rapat. Ukur berapa banyak perubahan yang melewati pipeline, karena setiap pelewatan adalah lubang dalam kendali.

### Jaga kendali tetap jujur

**10. Simpan jalur cepat untuk perubahan darurat, dan tinjau bagaimana dipakai.** Perubahan darurat butuh kecepatan, jadi jangan memperlambatnya dengan antrean normal. Tinjau masing-masing sesudahnya dan awasi hanyutan ke atas dalam volume, karena jalur darurat yang lebih mudah dari jalur normal menjadi bawaan (ukuran untuk ini ada di topik 4.4, Kegagalan perubahan dan pengerjaan ulang). Laporkan volume darurat di samping volume normal dalam tampilan yang sama.

**11. Audit kelengkapan catatan menurut jadwal.** Catatan lengkap membantu selama insiden, ketika penanggap bertanya apa yang berubah baru-baru ini (lihat topik 3.3, Waktu respons dan penyelesaian insiden). Ukur kelengkapan, tinjau sampel, dan perlakukan celah sebagai cacat pada formulir atau integrasi, bukan kegagalan peminta. [Jejak audit](https://en.wikipedia.org/wiki/Audit_trail) yang disusun sesudahnya dari ingatan adalah bukti lemah.

**12. Tinjau model otoritas perubahan setidaknya setahun sekali.** Putuskan siapa yang memegang hak persetujuan untuk tiap jenis dan tingkat risiko, dan pensiunkan dewan yang menyetujui semua yang dilihatnya. Geser dewan pusat ke peran strategis: mengoordinasikan antartim, menyelesaikan konflik jadwal, dan memutuskan pertukaran antara waktu ke pasar dan risiko. Catat keputusan dan buktinya di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Volume perubahan menurut jenis | Memecah satu perubahan menjadi banyak catatan kecil agar tampak sibuk, menggabung banyak menjadi satu agar tampak tenang, atau membiarkan perubahan informal di luar pembukuan | Rekonsiliasi hitungan terhadap peristiwa deployment pipeline tiap bulan; lacak porsi deployment tanpa catatan perubahan yang cocok |
| Porsi perubahan standar | Mengklasifikasi ulang pekerjaan berisiko sebagai standar untuk mencapai target, atau menulis prosedur standar luas yang mencakup apa saja | Tinjauan sampel klasifikasi kuartalan; tingkat kegagalan perubahan menurut jenis (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang); log klasifikasi ulang |
| Lead time persetujuan | Memulai jam terlambat, menghentikannya terlalu dini, menjedanya untuk pertanyaan yang tak perlu ditanyakan, atau menyetujui tanpa membaca | Persentil ke-85 di samping median; tinjauan sampel persetujuan untuk substansi; tingkat kegagalan perubahan menurut kelompok penyetuju, tidak pernah menurut individu |
| Porsi persetujuan otomatis | Menambah pemeriksaan otomatis yang selalu lulus, atau menghitung tinjauan sejawat tanpa komentar sebagai jaminan | Tinjauan sampel persetujuan otomatis dan sejawat; cacat yang lolos dan tingkat kegagalan untuk perubahan yang disetujui otomatis; hitungan pelewatan |
| Usia antrean persetujuan | Menutup atau menarik permintaan lama agar antrean tampak pendek, atau memindahkannya ke permintaan baru dengan stempel waktu segar | Hitungan permintaan yang ditarik dan diajukan ulang; usia permintaan diukur dari pengajuan pertama |
| Kelengkapan catatan perubahan | Mengisi kolom wajib dengan teks placeholder, atau membuat catatan setelah perubahan untuk memenuhi laporan | Tandai catatan yang dibuat setelah implementasi; tinjauan mutu sampel teks bebas; tingkat tautan-ke-commit |

Pembacaan yang sehat menunjukkan campuran jenis bergeser perlahan ke perubahan standar dengan gambaran kegagalan yang stabil, median waktu persetujuan dekat persentil ke-85, antrean tanpa item yang jauh lebih tua dari yang lain, dan hitungan pelewatan yang tetap mendekati nol. Curigai lonjakan tiba-tiba pada satu angka. Waktu persetujuan yang separuh dalam sebulan tanpa perubahan proses biasanya berarti jam yang bergerak, bukan pekerjaan.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kelebihan | Kekurangan |
| --- | --- | --- |
| Perubahan standar yang diotorisasi di muka | Cepat, konsisten, murah diaudit; membebaskan otoritas perubahan untuk pekerjaan berisiko | Butuh desain di muka; klasifikasi dapat hanyut; prosedur luas menyembunyikan risiko |
| Tinjauan sejawat yang dicatat di pipeline | Tinjauan oleh orang yang mengenal kode; menghasilkan catatan otomatis; berskala dengan volume | Mutu bergantung pada budaya tinjauan; tim kecil mungkin tak punya peninjau independen; sebagian regulator mengharapkan penyetuju terpisah |
| Dewan penasihat perubahan pusat | Visibilitas lintas tim; menangkap tabrakan jadwal dan risiko ketergantungan bersama | Lambat bila dipakai sebagai gerbang setiap perubahan; mendorong batch perubahan lebih besar yang dikirim lebih jarang; menciptakan antrean |
| Lead time persetujuan sebagai metrik judul | Mudah dijelaskan; mengungkap sumber keterlambatan nyata | Mudah dimanipulasi; dapat mendorong penyetuju tergesa-gesa; tidak berkata apa-apa tentang mutu keputusan |
| Porsi persetujuan otomatis sebagai target | Menghargai investasi dalam perkakas dan bukti tercatat | Dapat menghargai pemeriksaan otomatis lemah; mungkin mengecualikan perubahan yang sungguh butuh pertimbangan manusia |

Pertanyaan yang lebih baik jarang “dewan atau tanpa dewan” dan biasanya “perubahan mana yang butuh jenis pengawasan mana, dan bagaimana kita tahu?”

## Pertanyaan untuk dibahas bersama tim Anda

**1. Berapa banyak perubahan yang kita buat bulan lalu, dan apakah semua sumber kita sepakat?**
Minta tiap kelompok menghasilkan hitungannya sendiri dari tiket, deployment pipeline, dan saluran informal. Bandingkan totalnya. Jurang itu sendiri adalah temuan tentang perubahan yang tak tercatat. Fasilitator sebaiknya menyepakati sumber mana yang menjadi sistem pencatat dan siapa yang merekonsiliasi yang lain.

**2. Perubahan normal kita mana yang sebenarnya rutin, dan apa yang dibutuhkan untuk menjadikannya standar?**
Daftar lima perubahan normal tersering. Untuk masing-masing, tanyakan apakah prosedur terdokumentasi, apakah risiko dipahami, dan apakah tim punya rekam jejak bersih. Diskusi sering memunculkan satu atau dua kandidat jelas. Catat pemeriksaan yang akan membuat otorisasi di muka aman, dan namai siapa yang akan menyetujui prosedur standar.

**3. Di mana jam persetujuan kita mulai dan berhenti, dan apa yang menunggu di dalamnya?**
Ambil tiga perubahan normal terakhir dan telusuri dari pengajuan sampai keputusan. Catat setiap serah terima, rapat, dan permintaan informasi. Orang sering terkejut betapa banyak penantian adalah waktu kalender di antara putaran pertanyaan. Sepakati definisi tertulis jam dan apa yang dikecualikan.

**4. Apakah kita memercayai persetujuan kita, atau hanya mengumpulkannya?**
Tarik sampel persetujuan terbaru dan baca tinjauannya. Cari persetujuan yang diberikan dalam hitungan detik atau tanpa komentar. Tujuannya mengetahui seberapa banyak jaminan yang sebenarnya diberikan proses, bukan menemukan pihak bersalah. Bahas apa yang akan membuat tinjauan lebih substansial tanpa memperlambatnya.

**5. Untuk apa dewan perubahan kita, dan apa yang akan hilang jika berhenti bertemu?**
Tanyakan apa yang diputuskan dewan yang tak dapat diputuskan orang lain, dan apa yang hanya dikonfirmasinya. Sebagian dewan melakukan pekerjaan berharga mengoordinasikan antartim dan memperhatikan tabrakan jadwal. Yang lain mengulang keputusan yang sudah dibuat dalam tinjauan kode. Sepakati fungsi mana yang layak dipertahankan dan mana yang bisa pindah ke pipeline atau forum yang lebih ringan.

**6. Jika kita memotong waktu persetujuan separuh, apa yang perlu kita lihat untuk tahu itu aman?**
Namai sinyal keselamatan sebelum perubahan, seperti tingkat kegagalan perubahan menurut jenis, porsi darurat, dan insiden yang tertaut pada perubahan terbaru. Sepakati ambang yang akan memicu jeda. Percakapan ini mengubah target kecepatan menjadi eksperimen dengan aturan berhenti, yang merupakan pertahanan terbaik terhadap mengoptimalkan hal yang salah.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman merasakan lead time persetujuan sebagai waktu menganggur antara perubahan selesai dan berjalan. Mereka ingin melihat angka mereka sendiri menurut jenis, dengan tampilan antrean, agar dapat memutuskan kapan membatch, kapan memecah, dan kapan meminta perubahan standar baru. Kontribusi terbaik mereka adalah templat permintaan yang baik, perubahan kecil, dan tautan bersih dari commit ke catatan perubahan.

### Tim layanan dan operasi

Tim operasi memakai catatan perubahan untuk menjawab pertanyaan insiden pertama: apa yang berubah baru-baru ini? Mereka menghargai kelengkapan, tautan layanan yang akurat, dan jadwal yang dapat dipercaya. Mereka juga menanggung biaya perubahan yang salah, jadi punya kepentingan sah dalam aturan klasifikasi dan dalam tinjauan perubahan darurat. Langkah terbaik adalah ikut memiliki katalog perubahan standar bersama tim pengiriman, agar otorisasi di muka mencerminkan pengetahuan operasional.

### Kepemimpinan dan tata kelola

Pemimpin dan badan tata kelola butuh jaminan bahwa perubahan dikendalikan, dan perlu tahu apakah kendali memperlambat organisasi. Metrik ini memberi keduanya: campuran jenis, waktu tunggu, dan porsi persetujuan yang didukung bukti tercatat. Minta tren dan sebaran lintas layanan, tidak pernah tabel liga, dan baca bersama ukuran kegagalan (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang). Mendanai otomatisasi yang memindahkan persetujuan ke pipeline biasanya investasi lebih baik daripada menambah peninjau ke dewan.

### Pelanggan dan pengguna

Pelanggan jarang melihat proses perubahan. Mereka melihat fitur baru tiba, perbaikan dikirim segera, dan lebih sedikit gangguan setelah rilis. Persetujuan lambat menunda perbaikan yang mereka minta, dan persetujuan lemah mempertaruhkan gangguan yang mereka takuti. Di mana layanan punya jendela pemeliharaan terjadwal, terbitkan kalender perubahan dalam bahasa lugas.

## Dalam praktik: contoh ITIL agile

Sebuah perusahaan asuransi regional fiktif menjalankan portal pelanggan dengan delapan tim pengiriman dan CAB yang bertemu dua kali seminggu. Semua angka di bawah bersifat ilustratif.

Pemimpin operasi layanan membangun tampilan lengkap pertama atas perubahan. Untuk bulan itu, portal menunjukkan sekitar 420 perubahan selesai menurut tiket, 610 deployment produksi menurut pipeline, dan jurang yang ternyata adalah perubahan yang dibuat tanpa tiket. Dari 420 perubahan bertiket, 18 persen standar, 76 persen normal, dan 6 persen darurat (ilustratif). Median lead time persetujuan untuk perubahan normal adalah 2 hari kerja, dan persentil ke-85 adalah 7 hari kerja (ilustratif). Permintaan tertua dalam antrean telah menunggu 12 hari kerja.

Ketika tim melihat penantian panjang itu, mereka menemukan dua sebab. Banyak permintaan duduk sampai rapat dewan berikutnya meskipun rutin, dan yang lain memantul kembali ke peminta beberapa kali karena informasi kurang. Tim memisahkan kedua jam dan mendapati bahwa kira-kira separuh penantian persentil ke-85 adalah waktu menunggu peminta. Mereka memperbaiki templat permintaan lebih dulu. Lalu mereka memilih tiga perubahan normal tersering: pembaruan dependensi dengan pengujian lulus, toggle konfigurasi di alat feature flag, dan penskalaan server aplikasi. Mereka menulis prosedur, menyepakati risiko dengan otoritas perubahan, dan mengubahnya menjadi perubahan standar dengan persetujuan dicatat di pipeline.

Dua bulan kemudian, porsi standar naik menjadi 41 persen (ilustratif), persentil ke-85 lead time persetujuan untuk perubahan normal turun menjadi 4 hari kerja (ilustratif), dan tingkat kegagalan perubahan menurut jenis tetap datar, sebagaimana dilaporkan dalam ukuran pendamping (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang). Dewan bergeser dari meninjau setiap perubahan normal ke meninjau perubahan berisiko tinggi dan jadwal bulanan.

Risiko manipulasi muncul dalam sampel kuartalan. Satu tim telah mengklasifikasikan migrasi skema basis data sebagai perubahan standar karena prosedur sebelumnya untuk “perubahan konfigurasi” dirumuskan longgar. Peninjau sampel memperhatikan bahwa migrasi itu tidak punya rencana rollback. Tim memperketat definisi perubahan standar, menambah aturan bahwa perubahan skema selalu normal, dan log klasifikasi ulang menjadi agenda tetap. Keputusan yang dicatat di register metrik adalah mempertahankan porsi perubahan standar sebagai ukuran konteks dan bukan target.

## Sudut pandang sektor

**Startup.** Startup biasanya punya sedikit proses formal dan banyak otomatisasi pipeline. Perubahan terjadi cepat tanpa catatan, jadi kelengkapan dan tautan dari commit ke deployment paling penting. Definisi satu halaman tentang tiga jenis, ditambah tinjauan yang dicatat pipeline, sering sudah cukup.

**Bisnis kecil.** Bisnis kecil sering punya satu atau dua orang yang menulis sekaligus merilis perubahan, jadi tinjauan independen sulit. Pakai daftar perubahan standar sederhana untuk pekerjaan rutin, wajibkan sepasang mata kedua untuk apa pun yang menyentuh data pelanggan atau uang, dan simpan log polos perubahan. Ukuran yang layak dilacak adalah volume menurut jenis dan kelengkapan catatan, karena murah dan membantu selama insiden.

**Perusahaan besar.** Perusahaan besar punya banyak tim, platform bersama, dan sistem warisan dengan risiko berbeda. Mereka cenderung punya CAB, dan metrik membantu memutuskan tugasnya mana yang sebaiknya tetap. Pekerjaan utamanya adalah klasifikasi konsisten, katalog perubahan standar bersama, dan pipeline yang mencatat bukti audit. Rekap menurut layanan dan kelas risiko, bukan peringkat tim.

**Pemerintah dan sektor publik.** Badan publik sering menghadapi persyaratan hukum untuk persetujuan, pemisahan tugas, dan retensi catatan, dan mungkin punya jendela rilis yang digerakkan pengadaan. Metrik sebaiknya menyatakan kendali mana yang wajib dan mana kebiasaan lokal, karena yang pertama tidak dapat dihapus dan yang kedua bisa. Tinjauan sejawat tercatat dan bukti pipeline sering dapat memenuhi maksudnya, tetapi konfirmasikan dengan auditor terkait sebelum mengandalkannya (lihat topik 8.3, Metrik kepatuhan dan audit).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya biasanya waktu yang dihabiskan perubahan untuk menunggu. Ketika pekerjaan selesai mengantre untuk keputusan, nilai tertunda, batch tumbuh, dan setiap batch membawa lebih banyak risiko. Motivasi kedua adalah jaminan: pemimpin dan auditor ingin tahu bahwa perubahan dikendalikan, dan bukti tercatat di pipeline lebih murah dihasilkan dan lebih tepercaya daripada rekonstruksi. Ketiga adalah respons insiden, karena catatan perubahan yang lengkap dan akurat mempersingkat pencarian sebab.

Pengumpulan murah jika alat perubahan dan pipeline sudah menyimpan stempel waktu dan jenis, dan sedang jika Anda harus mengintegrasikannya. Bertindak atas data lebih mahal: menulis prosedur perubahan standar, membangun pemeriksaan pipeline, dan melatih penyetuju serta peminta. Harapkan sebagian besar pekerjaan di kuartal pertama dan biaya lebih rendah dan mantap untuk pengambilan sampel dan tinjauan sesudahnya.

Imbal hasil muncul sebagai lebih sedikit waktu tunggu per perubahan, lebih sedikit rapat, lebih sedikit upaya menyiapkan bukti audit, dan diagnosis lebih cepat selama insiden. Perkirakan dengan data Anda sendiri: kalikan pengurangan jam tunggu persetujuan dengan jumlah perubahan yang terpengaruh dan dengan biaya per jam tertunda yang diterima rekan keuangan Anda. Jangan mengimpor angka dari organisasi lain. Riset DORA mendukung arah argumen ini, tetapi halamannya tidak memberi biaya atau imbal hasil, dan angka dolar apa pun harus berasal dari pengukuran Anda sendiri.

## Anti-pola dan jebakan

- **Memperlakukan porsi perubahan standar sebagai target.** Tim mengklasifikasi ulang pekerjaan berisiko untuk mencapai angka. Pakai sebagai konteks, tinjau klasifikasi dengan sampel, dan awasi tingkat kegagalan menurut jenis.
- **Mengukur kecepatan persetujuan saja.** Stempel karet cepat tampak sangat baik dan tidak menyampaikan apa-apa. Pasangkan lead time dengan tinjauan sampel substansi persetujuan dan gambaran kegagalan.
- **Menambah persetujuan setelah tiap insiden.** Setiap gerbang baru memperlambat sistem dan sering mendorong batch lebih besar. Lihat dulu mengapa kegagalan terjadi, dan perbaiki sebab dalam pengujian, tinjauan, atau pipeline.
- **Memeringkat penyetuju atau peminta.** Hitungan persetujuan atau penolakan per orang mengajari orang menyetujui semuanya atau tak satu pun. Laporkan menurut layanan dan jenis perubahan.
- **Merata-ratakan lintas jenis perubahan.** Satu rata-rata mencampur pekerjaan rutin dan berisiko dan menyembunyikan keduanya. Selalu pisahkan menurut jenis dan tampilkan persentil ke-85.
- **Mengabaikan perubahan yang dibuat di luar proses.** Pelewatan menyembunyikan volume dan risiko nyata. Rekonsiliasi deployment pipeline dengan catatan perubahan dan perlakukan celah sebagai cacat sistem.
- **Mempertahankan dewan karena kebiasaan.** Dewan yang menyetujui semua yang dilihatnya menambah keterlambatan tanpa menambah jaminan. Tinjau tiap tahun apa yang diputuskannya yang tak dapat diputuskan orang lain, dan fokuskan kembali.
- **Mengumpulkan data dan tak pernah memutuskan.** Lampirkan setiap metrik pada pemilik bernama dan forum tinjauan (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

## Model kematangan

| Dimensi | Memulai | Berkembang | Terstandar | Terkelola | Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Klasifikasi dan volume | Jenis informal; tak ada yang tahu totalnya | Beberapa tim menghitung menurut jenis dengan aturan berbeda | Satu klasifikasi tertulis, satu sistem pencatat | Campuran jenis diplot tren dan disampel untuk akurasi | Katalog perubahan standar dibagikan dengan pemasok dan direvisi seiring bukti risiko berubah |
| Jam persetujuan dan antrean | Penantian persetujuan dirasakan tetapi tak diwaktukan | Beberapa tim memberi stempel waktu pada permintaan | Satu definisi jam, median dan persentil ditampilkan | Usia antrean ditinjau mingguan; keterlambatan menggerakkan perbaikan yang didanai | Alur persetujuan disetel antartim dan pemasok terhadap kegagalan dan hasil pelanggan |
| Otomatisasi persetujuan | Persetujuan adalah rapat atau email | Beberapa pipeline mencatat tinjauan sejawat | Tinjauan dan pemeriksaan tercatat adalah bawaan untuk perubahan berisiko rendah | Porsi otomatis dilacak dengan hitungan pelewatan dan pemeriksaan mutu bersampel | Kebijakan dikodekan dalam kendali platform bersama yang menyesuaikan seiring gambaran risiko berubah |
| Catatan dan pemakaian | Catatan tipis atau ditulis sesudahnya | Catatan ada tetapi mutunya berbeda | Kolom wajib disepakati dan tertaut ke layanan | Kelengkapan diaudit dan dipakai dalam tinjauan insiden | Data perubahan menyuapi praktik insiden, masalah, dan audit di seluruh organisasi |

## Daftar periksa

- [ ] Tiga jenis perubahan dan kriterianya tertulis dan disepakati.
- [ ] Satu tampilan perubahan selesai menurut jenis ada, direkonsiliasi dengan deployment pipeline.
- [ ] Jam persetujuan punya awal, akhir, dan daftar pengecualian tertulis.
- [ ] Lead time persetujuan dilaporkan sebagai median dan persentil ke-85.
- [ ] Usia antrean persetujuan terlihat dan ditinjau mingguan.
- [ ] Setidaknya satu perubahan normal yang sering telah diubah menjadi perubahan standar dengan prosedur terdokumentasi.
- [ ] Tinjauan sejawat dan hasil uji ditautkan ke catatan perubahan secara otomatis.
- [ ] Sampel kuartalan memeriksa klasifikasi dan mutu persetujuan.
- [ ] Pelewatan pipeline diukur dan ditinjau.
- [ ] Setiap metrik punya pemilik bernama, vektor manipulasi, dan pagar pembatas di register metrik.
- [ ] Tak ada laporan yang memeringkat penyetuju atau peminta individu.

## Prompt AI

**Susun panduan klasifikasi untuk tiga jenis perubahan.**

```text
Saya bekerja di [type of organization] dan kami menjalankan [list of services].
Alat perubahan kami [tool], pipeline kami [pipeline tool], dan konteks regulasi
kami [regulations or none]. Berikut sepuluh perubahan tersering kami: [list].
Susun panduan berbahasa lugas untuk memutuskan apakah masing-masing perubahan
standar, normal, atau darurat, dengan kriteria yang Anda pakai dan satu contoh
kasus perbatasan. Jangan mengarang nilai acuan atau mengklaim praktik apa pun
memenuhi persyaratan audit. Daftar asumsi Anda dan pertanyaan yang harus saya
jawab sebelum mengadopsi panduan.
```

**Temukan ke mana waktu persetujuan pergi.**

```text
Berikut ekstrak catatan perubahan dengan stempel waktu pengajuan, permintaan
informasi, dan keputusan: [pasted data or description]. Proses persetujuan kami
[description]. Hitung median dan persentil ke-85 lead time persetujuan menurut
jenis perubahan, memisahkan waktu menunggu peminta dari waktu menunggu keputusan,
dan sarankan tiga pertanyaan untuk diajukan tentang kasus terpanjang. Jangan
mengarang angka yang tidak ada dalam data, dan jangan memeringkat individu.
Daftar asumsi Anda dan masalah kualitas data yang Anda perhatikan.
```

**Periksa metrik untuk risiko manipulasi.**

```text
Kami melaporkan metrik pemberdayaan perubahan ini: [list of metrics with
definitions]. Audiensnya [team, leadership, or governance body] dan metrik
dipakai untuk [purpose]. Untuk setiap metrik, daftar cara yang masuk akal ia
dapat digelembungkan, disembunyikan, atau didistorsi tanpa perbaikan nyata, dan
sarankan ukuran atau praktik pagar pembatas berpasangan. Jangan mengusulkan
target atau nilai acuan. Daftar asumsi Anda dan risiko manipulasi mana yang
menurut Anda paling penting untuk [service name].
```

**Rencanakan peralihan dari persetujuan dewan ke persetujuan pipeline.**

```text
Jalur persetujuan kami saat ini untuk [change type] adalah [description], dengan
[number] penyetuju dan penantian tipikal digambarkan sebagai [description].
Pipeline kami menyediakan [checks, tests, review tooling]. Usulkan rencana
bertahap untuk memindahkan perubahan berisiko rendah ke persetujuan berbasis
pipeline yang tercatat, termasuk bukti yang harus kami simpan, sinyal keselamatan
yang diawasi, dan aturan berhenti. Jangan mengklaim rencana memenuhi regulasi
atau standar apa pun. Daftar asumsi Anda dan orang yang harus saya konsultasi,
seperti [auditor, security lead, change authority].
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik perubahan, rilis, dan insiden terkait dan pagar pembatas yang harus berada di samping setiap metrik pemberdayaan perubahan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa versi topik ini yang direvisi menjaga jam, vektor manipulasi, dan referensi silangnya tetap konsisten.

## Poin penting

- Metrik pemberdayaan perubahan mengukur alur dan kendali perubahan: volume menurut jenis, penantian persetujuan, dan berapa banyak persetujuan yang dicatat otomatis oleh pipeline.
- Pisahkan semuanya menurut jenis perubahan, laporkan waktu tunggu sebagai median dan persentil ke-85, dan awasi antrean langsung selain riwayat.
- Memindahkan pekerjaan rutin ke perubahan standar dan mencatat tinjauan di pipeline adalah cara paling langsung memperpendek penantian, dan harus dibaca di samping ukuran kegagalan.
- Porsi perubahan standar dan kecepatan persetujuan mudah dimanipulasi, jadi ambil sampel klasifikasi dan mutu persetujuan dan jauhkan angka dari kartu skor individu.
- Pakai metrik untuk memutuskan untuk apa dewan perubahan, dan danai otomatisasi yang membuat kendali lebih ringan menjadi aman.

## Referensi dan bacaan lanjutan

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Change management (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
