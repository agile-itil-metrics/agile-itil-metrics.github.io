# Peta jalan adopsi bertahap

**Mulailah dari tempat Anda berada, sampaikan sesuatu yang berguna kepada satu tim dalam bulan pertama, dan tumbuhkan program dalam langkah kecil yang masing-masing berhak atas langkah berikutnya.**

## Gambaran umum dan motivasi

Sebagian besar panduan tentang metrik menggambarkan keadaan akhir: himpunan ukuran yang lengkap, penyimpanan data bersih, dasbor untuk setiap audiens, budaya bukti. Sedikit organisasi tiba di sana dengan rencana. Mereka tiba, ketika berhasil, lewat serangkaian langkah kecil yang berguna, yang masing-masing sudah balik modal sebelum yang berikutnya dimulai. Topik ini menawarkan peta jalan dalam semangat itu: 30 hari pertama, 60 berikutnya, dan 90 selanjutnya, yang bersama-sama sekitar 180 hari. Waktunya adalah bentuk kasar dan bukan janji. Tim kecil mungkin bergerak lebih cepat, dan yang besar atau berhati-hati lebih lambat.

Logikanya adalah logika pengiriman berkelanjutan yang sama yang direkomendasikan sisa buku untuk layanan. Sampaikan irisan tipis yang berfungsi lebih awal. Taruh di depan pengguna nyata. Belajar dari apa yang mereka lakukan dengannya. Perluas apa yang membantu, dan buang apa yang tidak. Program metrik yang menghabiskan enam bulan untuk desain dan meluncurkan dasbor penuh kepada audiens yang terkejut mengulang kesalahan lama rilis besar: banyak upaya, umpan balik terlambat, dan peluang tinggi bahwa hasilnya kurang cocok. Gagasan [produk minimum yang layak](https://en.wikipedia.org/wiki/Minimum_viable_product), versi terkecil dari sesuatu yang menyampaikan nilai dan menghasilkan pembelajaran, berlaku bagi program seperti bagi produk.

Tujuan agile membentuk peta jalan dalam beberapa cara. Keterlibatan pemangku kepentingan berkelanjutan berarti pekan-pekan pertama dihabiskan bersama orang yang akan memakai dan diukur oleh angka, bukan di ruang belakang. Perbaikan berkelanjutan berarti rencana sendiri ditinjau dan diubah seiring program belajar, dalam semangat [kaizen](https://en.wikipedia.org/wiki/Kaizen), praktik perbaikan kecil yang mantap oleh semua orang. Evolusi berkelanjutan berarti tak ada daftar ukuran yang final. Kecepatan berkelanjutan berarti peta jalan meminta porsi sederhana waktu tim, dan program tidak menambah beban pelaporan yang melebihi bantuannya. Dan membangun di sekitar individu termotivasi berarti mulai dengan sukarelawan dan dengan pertanyaan yang mereka pedulikan.

Peta jalan menghormati topik lain dalam bagian ini. Ia mengasumsikan aturan dasar kepercayaan dari topik peluncuran (lihat topik 11.3, Meluncurkan metrik tanpa menumbuhkan ketakutan), memakai prinsip dasbor (lihat topik 11.1, Merancang dasbor metrik layanan), menjaga perkakas tetap tipis sampai nilai terbukti (lihat topik 11.2, Lanskap perkakas), dan melacak kemajuan dengan profil kematangan program (lihat topik 11.4, Model kematangan untuk program metrik).

Tiga gagasan membantu menjangkarkan pekerjaan awal. Pertama, mulailah dengan garis dasar. [Run chart](https://en.wikipedia.org/wiki/Run_chart) dari beberapa bulan data yang ada menunjukkan keadaan sekarang dan memberi perubahan kemudian sesuatu untuk dibandingkan. Kedua, periksa [mutu data](https://en.wikipedia.org/wiki/Data_quality) di awal, karena perbaikan awal yang paling berharga sering datang dari memperbaiki cara pekerjaan dicatat dan bukan dari bagan mana pun. Ketiga, buat hasil terlihat: [radiator informasi](https://en.wikipedia.org/wiki/Information_radiator), tampilan yang menunjukkan informasi sekilas tanpa ada yang bertanya, membantu tim melihat datanya sendiri dan memulai percakapan. Langkah pertama biasanya berbentuk [proyek percontohan](https://en.wikipedia.org/wiki/Pilot_project) dengan peserta yang bersedia, disusul menyebarkan apa yang berhasil sebagai [manajemen perubahan](https://en.wikipedia.org/wiki/Change_management) di organisasi yang lebih luas (lihat topik 9.6, Metrik perubahan organisasi dan adopsi).

Tak ada peta jalan yang cocok untuk setiap organisasi. Rencana di bawah adalah titik awal untuk disesuaikan oleh orang yang akan menjalankannya.

## Prinsip utama

- **Mulai dari tempat Anda berada.** Pakai data, perkakas, dan kebiasaan yang Anda punya. Jangan menunggu platform baru.
- **Uji coba dengan sukarelawan.** Satu sampai tiga tim yang bersedia, mengerjakan pertanyaan yang mereka pedulikan.
- **Sampaikan nilai dalam bulan pertama.** Sesuatu yang membantu tim, bukan laporan untuk manajemen.
- **Satu irisan tipis sekaligus.** Satu sumber, satu tampilan, segelintir ukuran, lalu perluas.
- **Tulis janji sejak dini.** Piagam singkat sebelum angka pertama dibagikan.
- **Tinjau dan sesuaikan.** Periksa di akhir tiap tahap apa yang membantu, apa yang merugikan, dan apa yang diubah.
- **Hentikan hal-hal.** Pensiunkan ukuran dan laporan yang tak dipakai siapa pun saat yang baru tiba.
- **Jangan lewati kepercayaan.** Bergerak cepat pada perkakas sambil meninggalkan kepercayaan menghasilkan distorsi.

## Definisi metrik

Ukuran di bawah melacak kemajuan adopsi itu sendiri. Ukuran itu untuk tim program dan sponsor, dan dibaca sebagai sinyal, bukan target. Ukuran itu menghindari hitungan dasbor atau laporan, yang akan menghargai aktivitas.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Waktu ke hasil berguna pertama | Waktu berlalu dari awal program sampai ukuran pertama yang menurut tim uji coba membantunya membuat perubahan | hari dari kickoff sampai pemakaian bermanfaat pertama yang dikonfirmasi tim | hari | Log program; konfirmasi tim | Perbaikan berkelanjutan | Penyampaian nilai awal dan berkelanjutan | Sekali, lalu per tim baru |
| Tim yang aktif memakai ukuran | Porsi tim yang diundang yang memakai ukuran mereka dalam tinjauan pada periode itu, menurut pengakuan mereka sendiri | tim yang memakai ukuran dalam tinjauan / tim yang diundang | persen | Konfirmasi tim; catatan tinjauan | Manajemen perubahan organisasi | Keterlibatan pemangku kepentingan berkelanjutan | Bulanan |
| Perbaikan yang dilacak ke ukuran | Jumlah perubahan yang dibuat tim yang mereka atribusikan, dengan alasan, pada apa yang ditunjukkan suatu ukuran | hitungan perubahan yang dilaporkan tim dengan kaitan yang dinyatakan ke ukuran | hitungan | Register perbaikan | Perbaikan berkelanjutan | Eksperimen berbasis bukti | Kuartalan |
| Ukuran dan laporan yang dipensiunkan | Ukuran atau laporan yang dihentikan karena berhenti menginformasikan keputusan | hitungan dipensiunkan per kuartal | hitungan | Log perubahan katalog | Perbaikan berkelanjutan | Evolusi berkelanjutan | Kuartalan |
| Cakupan garis dasar | Porsi ukuran yang disepakati yang punya garis dasar tercatat sedikitnya beberapa bulan | ukuran dengan garis dasar / ukuran yang disepakati | persen | Katalog metrik | Manajemen tingkat layanan; perbaikan berkelanjutan | Bukti di atas opini | Kuartalan |
| Porsi upaya program | Porsi waktu tim peserta yang dihabiskan untuk tugas pengukuran | jam untuk pengumpulan, pelaporan, dan tinjauan / total jam tim, menurut estimasi | persen | Estimasi waktu tim | Perbaikan berkelanjutan | Kecepatan berkelanjutan | Kuartalan |
| Penyelesaian tinjauan tahap | Porsi tinjauan tahap terencana yang diadakan bersama tim, dengan perubahan dicatat | tinjauan diadakan dengan perubahan tercatat / tinjauan direncanakan | persen | Catatan program | Perbaikan berkelanjutan | Renungan teratur | Per tahap |

Waktu ke hasil berguna pertama diukur menurut pengakuan tim uji coba dan bukan program. Tim yang aktif memakai ukuran dihitung menurut apa yang dikatakan tim, dan bukan menurut login. Perbaikan yang dilacak ke ukuran adalah hitungan kaitan yang dinyatakan dan bukan target, karena target akan menghasilkan kaitan rekaan. Porsi upaya program sebaiknya tetap kecil, dan kenaikan adalah peringatan.

## Rekomendasi

### Hari 1 sampai 30: dengarkan, sepakati, dan sampaikan satu hal berguna

**1. Temukan sponsor dan beberapa sukarelawan.** Minta pemimpin senior menyponsori program dan menandatangani piagam singkat. Undang satu sampai tiga tim yang ingin tahu dan dihormati. Jelaskan bahwa tujuannya membantu mereka melihat pekerjaan mereka sendiri dan memperbaikinya, dan bahwa data tidak akan dipakai untuk memeringkat atau menilai individu (lihat topik 11.3, Meluncurkan metrik tanpa menumbuhkan ketakutan).

**2. Ajukan pertanyaan.** Temui tiap tim uji coba selama satu jam. Tanyakan apa yang memperlambat mereka, apa yang mengejutkan mereka, dan apa yang mereka harap mereka ketahui. Tuliskan pertanyaannya. Pilih tiga sampai lima ukuran dari buku ini yang menjawab pertanyaan itu, masing-masing dengan pagar pembatas pendamping (lihat topik 1.3, Hasil di atas keluaran: memilih apa yang diukur).

**3. Lihat data yang sudah Anda punya.** Tarik beberapa bulan riwayat dari sistem pencatatan dan plot run chart. Periksa mutu data dengan jujur: bidang hilang, kategori berubah, catatan dibuat setelah kejadian. Perbaiki penangkapan di sumber di mana murah. Lembar kerja sederhana cukup pada tahap ini (lihat topik 1.5, Sumber data dan instrumentasi).

**4. Sampaikan satu hal berguna.** Pada akhir bulan pertama, beri tiap tim uji coba tampilan kecil data mereka sendiri dengan definisi untuk tiap ukuran, dan adakan percakapan tinjauan. Cari satu perubahan yang disarankan data, seperti menghapus langkah menunggu, dan bantu tim mencobanya. Hasil berguna pertama lebih penting daripada perkakas yang dipoles.

### Hari 31 sampai 90: belajar, perluas, dan jadikan rutin

**5. Adakan tinjauan pertama dengan tim uji coba.** Tanyakan apa yang membantu, apa yang membingungkan, apa yang terasa berisiko, dan apa yang akan mereka ubah. Revisi ukuran, definisi, dan piagam. Dengarkan terutama tanda ketakutan atau manipulasi. Bagikan kisah singkat apa yang berubah, diceritakan oleh tim.

**6. Otomatisasi jalur tipis.** Di mana pekerjaan manual berat, otomatisasi satu atau dua umpan yang paling penting, dengan pemeriksaan kesegaran dan rekonsiliasi terhadap sumber. Simpan definisi dalam katalog lugas dan portabel. Jangan membeli platform dulu kecuali uji coba telah menunjukkan bahwa perkakas yang ada tak dapat mengerjakan tugasnya (lihat topik 11.2, Lanskap perkakas).

**7. Tetapkan irama tinjauan.** Adakan tinjauan bulanan singkat di tiap tim uji coba yang melihat tren, mencatat keputusan, dan mencatat peristiwa. Sertakan kesempatan mengatakan “tanpa tindakan.” Tambahkan pandangan kuartalan atas seluruh program bersama sponsor, memakai tampilan teragregasi dan komentar tim.

**8. Undang gelombang berikutnya.** Tawarkan pendekatan kepada lebih banyak tim, dipimpin oleh kisah tim uji coba. Biarkan tiap tim baru memilih ukurannya dari menu, dengan inti bersama kecil. Jaga kecepatan berkelanjutan: beberapa tim sekaligus, dengan dukungan dari tim uji coba dan pimpinan program.

### Hari 91 sampai 180: perkuat, seimbangkan, dan bersiap menyerahkan

**9. Rancang tampilan audiens.** Bersama audiens, rancang tampilan pemilik layanan dan pimpinan yang diuraikan dalam topik dasbor, memakai definisi bersama dan komentar tim (lihat topik 11.1, Merancang dasbor metrik layanan). Jaga setiap tampilan kecil. Pensiunkan laporan lama yang digantikannya.

**10. Tambahkan keseimbangan dan hasil.** Perluas ukuran uji coba menjadi himpunan seimbang yang mencakup mutu, keandalan, pengalaman, dan biaya, dengan hasil di samping aktivitas (lihat topik 6.5, Realisasi nilai dan hasil bisnis). Periksa setiap ukuran baru untuk vektor manipulasi dan pagar pembatasnya sebelum ditunjukkan.

**11. Nilai program.** Jalankan penilaian diri dari topik model kematangan bersama tiap tim peserta, laporkan profil dan tema, dan pilih satu atau dua langkah berikutnya pada dimensi yang membatasi yang lain (lihat topik 11.4, Model kematangan untuk program metrik). Hitung apa yang telah Anda pensiunkan selain apa yang telah Anda tambahkan.

**12. Putuskan apa yang berikutnya.** Pada tinjauan hari ke-180, bersama tim dan sponsor, putuskan untuk melanjutkan, menyesuaikan, atau berhenti. Tuliskan apa yang telah dilakukan program, dengan upaya berapa, dan apa yang berubah pada layanan. Pilih tahap berikutnya: lebih banyak tim, perkakas lebih dalam, kaitan ke ukuran keuangan atau pelanggan, atau konsolidasi. Catat keputusan dan alasannya.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Waktu ke hasil berguna pertama | Menyatakan perubahan remeh berguna; terburu-buru membuat pajangan | Tanyakan tim apa yang berubah; periksa bahwa perubahan bertahan |
| Tim yang aktif memakai ukuran | Tinjauan diadakan untuk mencentang kotak; mengklaim pemakaian yang tak terjadi | Minta keputusan yang dibuat; ambil sampel catatan tinjauan; bicara dengan tim |
| Perbaikan yang dilacak ke ukuran | Mengarang kaitan untuk mencapai hitungan; mengklaim kredit atas perubahan tak terkait | Jaga deskriptif; tanyakan penalaran tim; terima kaitan yang tak pasti apa adanya |
| Ukuran dan laporan yang dipensiunkan | Memensiunkan ukuran tak nyaman; memensiunkan dan memperkenalkan kembali dengan nama baru | Tinjau daftar pensiun untuk tren tak menguntungkan; wajibkan alasan yang dinyatakan |
| Cakupan garis dasar | Memalsukan riwayat; memakai periode yang menyanjung hasil kemudian | Catat sumber dan periode; simpan data mentah; pilih garis dasar sebelum perubahan |
| Porsi upaya program | Meremehkan upaya; memindahkan pekerjaan ke orang di luar hitungan | Tanyakan orang yang mengerjakan pekerjaan; bandingkan dengan lembur di akhir siklus |
| Penyelesaian tinjauan tahap | Tinjauan singkat dan asal-asalan; mencatat perubahan yang tak pernah terjadi | Periksa bahwa perubahan dilaksanakan; tanyakan tim apakah tinjauan layak waktu mereka |

Pembacaan yang sehat menunjukkan hasil berguna pertama dalam bulan pertama atau kedua, tim yang memakai ukuran karena mereka menganggapnya membantu, segelintir perubahan teratribusi, laporan dipensiunkan di samping yang baru, porsi upaya yang sederhana dan stabil, dan tinjauan tahap yang menuntun pada perubahan nyata dalam rencana.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Uji coba dengan sukarelawan | Kepercayaan; kisah nyata | Awal lebih lambat; bias seleksi |
| Peluncuran ke semua tim bersama | Cakupan cepat | Resistensi; distorsi |
| Lembar kerja dulu | Cepat; biaya rendah; pembelajaran | Rapuh; upaya manual |
| Platform dulu | Kemasan; skala | Biaya; kecocokan lemah sebelum pertanyaan jelas |
| Sedikit ukuran per tim | Fokus; beban rendah | Mungkin melewatkan area penting |
| Banyak ukuran sekaligus | Keluasan | Kelebihan beban; sprawl |
| Rencana 180 hari tetap | Kejelasan bagi sponsor | Kaku; mengabaikan apa yang dipelajari |
| Tinjauan tahap yang mengubah rencana | Pembelajaran; kecocokan | Kurang terprediksi bagi sponsor |

Jawaban prosanya adalah mulai dengan sukarelawan dan lembar kerja, memperluas seiring nilai ditunjukkan, memberi sponsor bentuk yang jelas dan titik tinjauan, dan mengizinkan rencana berubah.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa satu pertanyaan yang kita harap dapat jawab tentang pekerjaan kita bulan ini?**
Kumpulkan pertanyaan dari semua orang. Pilih yang paling penting dan dapat dijawab dengan data yang sudah kita pegang. Sepakati seperti apa jawaban yang berguna.

**2. Apa yang sudah kita ukur, dan siapa yang melihatnya?**
Daftar laporan yang ada dan audiensnya. Tandai yang tak dipakai siapa pun. Putuskan mana yang dipensiunkan untuk memberi ruang bagi yang baru.

**3. Apa yang akan membuat kita bersedia mencoba ini selama sebulan?**
Dengar syaratnya: piagam, suara dalam ukuran, waktu terbatas. Sepakati bersama sponsor sebelum memulai.

**4. Perubahan kecil apa yang mungkin disarankan data pertama?**
Lihat beberapa bulan riwayat bersama. Namai kemungkinan perubahan dan hasil yang diharapkan. Sepakati bagaimana kita akan mengetahui apakah membantu.

**5. Berapa banyak waktu kita yang dapat diberikan tanpa merugikan pekerjaan?**
Estimasi dalam jam per bulan. Sepakati batas, dan tinjau pada tinjauan tahap pertama.

**6. Kapan kita sebaiknya berhenti atau mengubah rencana?**
Gambarkan tandanya: tak ada hasil berguna, ketakutan meningkat, upaya berat. Sepakati siapa yang memutuskan, dan bagaimana keputusan dicatat.

## Empat perspektif

### Tim produk dan pengiriman

Tim uji coba memikul risiko awal dan memberi bukti awal. Mereka sebaiknya meminta piagam, memilih ukuran mereka sendiri, memakai tampilan pertama dalam tinjauan mereka sendiri, dan melaporkan dengan jujur apa yang membantu dan apa yang tidak. Mereka diuntungkan ketika hasil pertama menyingkirkan hambatan nyata.

### Tim layanan dan operasi

Tim operasi menyediakan banyak data dan sering punya beban terbesar. Mereka sebaiknya membantu menilai mutu data, menunjuk di mana suatu ukuran akan menghargai perilaku yang salah, dan melindungi waktu untuk pekerjaan siaga dan insiden. Kecepatan berkelanjutan mereka adalah kendala tetap pada rencana.

### Kepemimpinan dan tata kelola

Pemimpin menyponsori, menandatangani piagam, dan melindungi program dari penyalahgunaan. Mereka sebaiknya menerima awal yang sederhana, meminta hasil dan kisah alih-alih hitungan dasbor, menghindari meminta peringkat, dan membiarkan rencana berubah seiring program belajar. Mereka sebaiknya menilainya dari keputusan yang membaik.

### Pelanggan dan pengguna

Pelanggan dan pengguna beruntung ketika program menuntun pada layanan lebih baik. Mereka dapat ikut memilih ukuran pengalaman dan meninjau apa yang dikumpulkan tentang mereka. Mereka sebaiknya melihat perubahan yang berasal dari umpan balik mereka.

## Dalam praktik: contoh ITIL agile

Otoritas transportasi publik menengah punya 12 tim lintas layanan digital, teknologi operasi, dan service desk. Kepala informasi baru menginginkan “program metrik dalam enam bulan.” Upaya sebelumnya membeli platform dan menghasilkan dasbor yang jarang dibuka. Angka di bawah bersifat ilustratif.

Kepala perbaikan layanan mengusulkan peta jalan 180 hari dengan tinjauan tahap pada hari 30, 90, dan 180. Pada pekan pertama ia menemui kepala informasi, yang menandatangani piagam satu halaman, dan mengundang tiga tim sukarelawan: service desk, tim informasi penumpang, dan tim operasi infrastruktur. Dalam sesi satu jam tiap tim menyatakan pertanyaannya. Service desk ingin tahu mengapa masalah pelanggan yang sama kembali. Tim informasi penumpang ingin tahu apakah perubahannya merusak sesuatu. Tim infrastruktur ingin tahu berapa banyak waktunya habis untuk pekerjaan tak terencana.

Untuk tiap tim ia memilih tiga sampai lima ukuran dari buku ini, dengan pagar pembatas, dan membangun run chart dalam lembar kerja bersama dari data lima bulan sebelumnya. Pemeriksaan data menemukan bahwa 27 persen catatan perubahan di tim informasi penumpang dibuat setelah deployment, dan bahwa kategori service desk telah direorganisasi di tengah periode. Memperbaiki kebiasaan entri dan memetakan kategori memakan dua pekan. Pada hari ke-27 service desk melihat bahwa 19 persen kontaknya adalah kembalinya dalam sepekan, terkonsentrasi di dua kategori yang terkait dengan halaman jadwal yang membingungkan. Tim bekerja dengan tim informasi penumpang untuk mengubah halaman itu. Service desk mengonfirmasi ini sebagai hasil berguna pertama, pada hari ke-27.

Pada tinjauan hari ke-30 tim meminta definisi lebih pendek dan jumlah bagan lebih sedikit, dan satu bertanya apakah data akan dipakai dalam tinjauan tahunan mereka. Piagam diperjelas untuk mengatakan tidak. Antara hari 31 dan 90, kepala mengotomatisasi dua umpan, menyiapkan tinjauan bulanan di tiap tim yang mencatat keputusan, dan mengundang empat tim lagi berdasarkan kisah uji coba. Tim yang aktif memakai ukuran berada pada 7 dari 7 yang diundang. Pada tinjauan hari ke-90, tim melaporkan lima perubahan yang mereka atribusikan pada ukuran mereka. Program telah memensiunkan tiga laporan mingguan lama. Porsi upaya diperkirakan 3 persen waktu tim. Antara hari 91 dan 180, kepala merancang tampilan pemilik layanan dan pimpinan bersama audiens itu, menambah ukuran pengalaman dan biaya ke himpunan seimbang, dan menjalankan penilaian diri: sebagian besar tim berada pada Tingkat 2 dalam pemakaian dalam keputusan dan 3 dalam kepercayaan dan rasa aman, dan langkah berikutnya yang dipilih adalah log keputusan di setiap tim. Pada hari ke-180 kepala informasi meminta peringkat semua 12 tim menurut kematangannya. Kepala menawarkan profil agregat dan tema, menjelaskan piagam, dan permintaan itu dibatalkan. Sponsor setuju memperluas program ke lima tim sisanya selama dua kuartal berikutnya, tetap secara sukarela.

## Sudut pandang sektor

**Startup.** Padatkan peta jalan. Dalam dua pekan, sepakati tiga pertanyaan dan dua atau tiga ukuran, dan lihat bersama tiap pekan atau dua pekan. Pakai apa yang sudah Anda punya. Tinjau kembali setelah satu kuartal. Startup yang menunggu membangun perkakas akan kehilangan kebiasaan melihat.

**Bisnis kecil.** 30 hari pertama mungkin satu percakapan, daftar satu halaman pertanyaan, lembar kerja, dan satu perubahan. Tahap berikutnya melibatkan pandangan bulanan yang teratur. Risiko utamanya adalah orang yang menyiapkannya menjadi satu-satunya yang memahaminya, jadi tuliskan arti tiap ukuran.

**Perusahaan besar.** Pakai gelombang sukarelawan, tim pusat kecil yang mendukung dan tidak memiliki ukuran, definisi bersama, dan tinjauan tahap bersama sponsor. Tahan satu tanggal global. Harapkan menghabiskan tahap pertama memperbaiki penangkapan data, dan rencanakan koordinasi dengan keamanan, privasi, dan dewan karyawan atau perwakilan staf di mana ada.

**Pemerintah dan sektor publik.** Konsultasi dengan perwakilan staf dan komunikasi jelas kepada badan pengawas adalah bagian pekerjaan awal. Siklus pengadaan sering mengutamakan memulai dengan perkakas yang sudah dimiliki. Jaga pelaporan wajib terpisah dari ukuran perbaikan, dan dokumentasikan keputusan untuk audit (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya 180 hari pertama kebanyakan waktu orang: pimpinan program, upaya analisis kecil, porsi waktu tim uji coba, dan perhatian sponsor. Biaya perkakas dapat rendah atau nol pada tahap awal. Biaya yang lebih besar adalah biaya salah di langkah awal, misalnya dengan meluncurkan ukuran tanpa kepercayaan.

Imbal hasil muncul lebih awal jika langkah pertama dipilih dengan baik: perubahan yang disarankan data, laporan yang dipensiunkan, lebih sedikit sengketa soal angka, dan tim yang meminta lebih. Bangun kasus dari catatan Anda sendiri: hari ke hasil berguna pertama, perubahan yang diatribusikan tim pada ukuran, jam yang dihemat pada laporan yang dipensiunkan, dan upaya yang dihabiskan. Hindari mengutip angka luar tentang imbal hasil analitik tanpa sumber yang dapat ditelusuri dan relevansinya dengan pengaturan Anda. Klaim yang kredibel itu sederhana dan lokal (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Peluncuran big-bang.** Berbulan-bulan desain, lalu kejutan. Sampaikan irisan tipis lebih awal.
- **Platform dulu.** Perkakas tiba sebelum pertanyaan. Mulai dengan apa yang Anda punya.
- **Menghitung dasbor.** Aktivitas diukur, nilai diabaikan. Lacak keputusan dan perubahan.
- **Melewatkan piagam.** Ketakutan mengisi celah. Tulis janji sebelum angka pertama ditunjukkan.
- **Terlalu banyak tim sekaligus.** Dukungan runtuh. Sebarkan dalam gelombang kecil.
- **Tak pernah menghentikan apa pun.** Laporan lama tetap di samping yang baru. Pensiunkan saat Anda menambah.
- **Rencana tetap yang dibela terhadap bukti.** Rencana sebaiknya berubah seiring Anda belajar.
- **Menyerah setelah kegagalan pertama.** Upaya awal mengajarkan. Tinjau, sesuaikan, dan coba lagi.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Mulai dan uji coba | Tanpa rencana; laporan ad hoc | Tim yang tertarik mencoba ukuran sendiri | Piagam, sponsor, dan uji coba sukarela dengan hasil berguna pertama | Pembelajaran uji coba menggerakkan rencana gelombang; waktu ke nilai dilacak | Tim menyebarkan pendekatan di antara mereka sendiri; sponsor dan mitra bergabung |
| Perluasan dan irama | Upaya sekali jalan | Sebagian tinjauan reguler | Tinjauan tim bulanan dan tinjauan program kuartalan | Porsi upaya, pensiun, dan perubahan teratribusi dikelola | Tinjauan terkait lintas tim dan layanan; irama menyesuaikan kebutuhan |
| Pembelajaran dan penyesuaian | Rencana tetap atau tidak ada | Pelajaran sesekali dibagikan | Tinjauan tahap mengubah rencana | Langkah peta jalan terikat pada profil kematangan | Program membaik terus-menerus dari kontribusi semua orang |

## Daftar periksa

- [ ] Sponsor telah menandatangani piagam singkat sebelum angka pertama dibagikan.
- [ ] Satu sampai tiga tim sukarelawan telah menyatakan pertanyaan mereka dengan kata-kata sendiri.
- [ ] Garis dasar beberapa bulan data dan pemeriksaan mutu data ada untuk tiap ukuran uji coba.
- [ ] Tiap tim uji coba punya tampilan kecil dengan definisi untuk setiap ukuran.
- [ ] Hasil berguna pertama disampaikan, dan dikonfirmasi tim, dalam bulan pertama atau kedua.
- [ ] Irama tinjauan ada di tiap tim uji coba dan mencatat keputusan.
- [ ] Laporan lama dipensiunkan saat tampilan baru menggantikannya.
- [ ] Upaya yang diminta program dari tim diestimasi dan dijaga kecil.
- [ ] Tinjauan tahap pada hari 30, 90, dan 180 diadakan bersama tim, dan rencana berubah sebagai hasilnya.
- [ ] Tahap berikutnya diputuskan bersama tim dan sponsor dan dicatat dengan alasan.

## Prompt AI

**Susun rencana 180 hari.**

```text
Susun peta jalan 180 hari untuk memperkenalkan program metrik layanan di
[organization type] dengan [number] tim. Pakai tinjauan tahap pada hari 30, 90,
dan 180. Untuk tiap tahap, daftar tujuan, aktivitas, orang yang terlibat, waktu
yang diminta dari tim, hasil berguna pertama yang diharapkan, dan risiko. Mulai
dengan tim uji coba sukarelawan, piagam, dan perkakas yang ada. Jangan menjanjikan
hasil. Daftar asumsi Anda.
```

**Pilih ukuran pertama.**

```text
Sebuah tim uji coba menggambarkan masalahnya sebagai berikut: [paste]. Sarankan
tiga sampai lima ukuran untuk memulai, masing-masing dengan definisi, sumber data,
vektor manipulasi yang paling mungkin, dan pagar pembatas pendamping. Utamakan
data yang sudah dipegang tim. Jangan mengarang angka. Daftar asumsi Anda dan apa
yang diperiksa tentang mutu data.
```

**Jalankan pemeriksaan mutu data.**

```text
Berikut contoh uraian bidang dan nilai dalam catatan [system] kami: [paste].
Identifikasi masalah mutu yang mungkin untuk mengukur lead time, kegagalan
perubahan, dan kontak kembali, seperti bidang hilang, kategori berubah, dan
catatan dibuat setelah kejadian. Sarankan pemeriksaan dan perbaikan sederhana di
sumber. Jangan menebak isi yang tak dapat Anda lihat. Daftar asumsi Anda.
```

**Rencanakan tinjauan tahap.**

```text
Rencanakan tinjauan tahap 45 menit untuk hari [30, 90, or 180] bersama tim uji
coba dan sponsor. Sertakan pertanyaan tentang apa yang membantu, apa yang terasa
berisiko, upaya apa yang dimakan, apa yang dihentikan, dan apa yang diubah dalam
rencana. Sertakan cara mencatat keputusan dan membagikan kisah singkat apa yang
berubah. Jangan memeringkat tim. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk memilih ukuran awal beserta pagar pembatas berpasangannya bagi tim uji coba.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa peta jalan menjaga ukuran pada tingkat tim dan membawa vektor manipulasi untuk setiap ukuran yang diperkenalkan.

## Poin penting

- Mulai dari tempat Anda berada, dengan sukarelawan, piagam, dan data serta perkakas yang sudah Anda punya.
- Sampaikan satu hasil berguna kepada satu tim dalam bulan pertama atau kedua.
- Perluas dalam gelombang kecil, dan pensiunkan laporan saat tampilan baru menggantikannya.
- Periksa mutu data sejak dini, dan perbaiki penangkapan di sumber.
- Adakan tinjauan tahap yang mengubah rencana, dan jaga upaya yang diminta dari tim tetap kecil.
- Putuskan tahap berikutnya bersama tim dan sponsor, dan catat alasannya.

## Referensi dan bacaan lanjutan

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
