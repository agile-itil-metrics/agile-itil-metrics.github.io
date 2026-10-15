# Sumber data dan instrumentasi

**Sebuah metrik hanya setepercaya peristiwa di bawahnya, jadi sebut sistem pencatat untuk setiap angka, tangkap peristiwa secara otomatis pada saat terjadi, dan uji jalur data sama cermatnya dengan menguji bagan.**

## Gambaran umum dan motivasi

Kebanyakan program metrik menghabiskan upaya pada dasbor dan hampir tidak pada pipa yang memberinya data. Itu terbalik. Bagan yang dipoles di atas stempel waktu yang tidak konsisten, kolom status yang tak diperbarui siapa pun, atau integrasi yang diam-diam berhenti bulan lalu tampak berwibawa padahal salah. Topik ini membahas fondasi yang tak glamor bagi sisa buku: dari mana data layanan dan pengiriman berasal, seberapa andal tiap sumber, dan kegagalan kualitas data mana yang membatalkan sebuah metrik sebelum ada yang menyadarinya.

Sumber terbagi dalam beberapa keluarga. Alat [manajemen layanan TI (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) mencatat insiden, permintaan, masalah, dan perubahan, yang oleh [ITIL](https://en.wikipedia.org/wiki/ITIL) diperlakukan sebagai catatan inti operasi layanan. [Sistem pelacak isu](https://en.wikipedia.org/wiki/Issue_tracking_system) mencatat backlog dan pergerakan item kerja bagi tim agile. [Kontrol versi](https://en.wikipedia.org/wiki/Version_control) mencatat commit, cabang, dan penggabungan. Jalur [integrasi dan pengiriman berkelanjutan (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) mencatat build, hasil pengujian, dan deployment. Platform pemantauan dan [observabilitas](https://en.wikipedia.org/wiki/Observability_(software)) memancarkan telemetri: metrik, log, dan jejak dari sistem yang berjalan. [Basis data manajemen konfigurasi (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) mencatat layanan dan komponen yang menjadi tempat hal lain terhubung. Survei mencatat apa yang tidak dapat diamati sistem apa pun, seperti kepuasan dan upaya.

Peristiwa deployment yang ditulis jalur pengiriman bersifat objektif dan sulit dipalsukan, status tiket yang diubah berjam-jam setelah pekerjaan adalah ingatan, dan jawaban survei adalah persepsi. Mengetahui jenis catatan mana yang ada di balik sebuah angka memberi tahu kegagalan mana yang harus dicari lebih dulu.

Pandangan agile dan ITIL bertemu pada data yang sama: keduanya adalah mesin status dengan stempel waktu, jadi catat setiap perubahan status sebagai peristiwa dengan waktu yang andal dan turunkan metrik dari peristiwa itu.

Tiga istilah berulang dalam topik ini. **Sistem pencatat** adalah satu sumber yang otoritatif untuk sebuah fakta, misalnya jalur pengiriman untuk “deployment terjadi.” **Instrumentasi** adalah penangkapan peristiwa yang disengaja, lewat kode, konfigurasi, atau integrasi alat, sehingga metrik dapat dihitung tanpa ada yang mengetiknya. **Model status** adalah set keadaan yang dapat dimiliki sebuah item kerja atau catatan dan perpindahan yang diizinkan di antaranya. Model status menentukan jam mana yang dapat dihitung sama sekali.

Pada skala perusahaan dan sektor publik masalahnya bertambah. Data melewati konektor, pekerjaan [ekstrak, transformasi, muat (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load), dan lapisan pelaporan, dan setiap lompatan adalah peluang makna bergeser. Kolom yang berarti satu hal di sumber dapat berarti sesuatu yang sedikit berbeda di gudang data, dan angkanya tetap tampak masuk akal. Obatnya adalah memperpendek jarak antara peristiwa dan dasbor, dan memeriksa jalur data secara terjadwal.

## Prinsip utama

- **Tangkap peristiwa, bukan ringkasan.** Simpan perubahan status mentah dengan stempel waktu dan hitung metrik darinya, sehingga definisi dapat berubah tanpa kehilangan riwayat.
- **Utamakan pengamatan daripada laporan diri.** Bila sebuah sistem dapat melihat peristiwa, pakai itu; sisakan laporan orang untuk apa yang hanya dapat dikatakan orang.
- **Sebut satu sistem pencatat per fakta.** Sumber ganda berselisih, dan perselisihan itu mengikis kepercayaan pada keduanya.
- **Rancang model status sebelum metriknya.** Jam tidak dapat dihitung dari keadaan yang tidak ada atau yang berarti lain di tim lain.
- **Perlakukan jalur data sebagai produk.** Ia punya pemilik, pengujian, pemantauan, dan log perubahan, karena kualitas data menurun diam-diam.
- **Tunjukkan asal-usul.** Setiap angka di dasbor sebaiknya mengarah kembali ke catatan sumbernya dalam satu atau dua klik.
- **Kumpulkan hanya yang akan dipakai, dan lindungi.** Setiap kolom adalah biaya dan, bila menyangkut orang, kewajiban privasi.

## Definisi metrik

Metrik di bawah mengukur kesehatan pasokan data itu sendiri. Ini adalah panel instrumen untuk instrumen.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan sumber | Porsi layanan dan tim dalam lingkup yang peristiwanya mencapai penyimpanan metrik secara otomatis | layanan atau tim dengan umpan otomatis / layanan atau tim dalam lingkup; “dalam lingkup” didaftar di register metrik | persen | Register metrik dan konfigurasi jalur data | Pengukuran dan pelaporan; manajemen konfigurasi layanan | Kesepakatan kerja tim tentang perangkat | Kuartalan |
| Kelengkapan stempel waktu | Porsi item kerja tertutup yang membawa setiap stempel waktu yang dibutuhkan untuk jam metrik | item tertutup dengan semua stempel waktu perubahan status yang diperlukan / item ditutup pada periode itu; item yang masih terbuka dikecualikan | persen | Riwayat alat ITSM atau pelacak isu | Manajemen insiden; manajemen permintaan layanan | Riwayat papan atau alur kerja | Bulanan |
| Tingkat pencatatan mundur | Porsi perubahan status yang dicatat setelah kejadian, diukur dari selisih antara waktu peristiwa dan waktu entri | perubahan status yang dimasukkan lebih dari 24 jam setelah waktu peristiwa / perubahan status pada periode itu; jam dimulai pada peristiwa, berhenti pada entri | persen | Jejak audit pelacak, atau waktu peristiwa jalur data dibanding waktu entri | Pemberdayaan perubahan; manajemen insiden | Definisi selesai | Bulanan |
| Kesegaran data | Seberapa tua data terbaru di dasbor saat dilihat | waktu lihat dikurangi waktu peristiwa terbaru yang dimuat; laporkan median dan persentil ke-95 | jam | Log eksekusi jalur data dan log pemuatan dasbor | Pengukuran dan pelaporan | Persiapan tinjauan pemangku kepentingan | Mingguan |
| Selisih rekonsiliasi | Ketidaksepakatan dua sumber untuk hitungan yang sama | selisih mutlak antara dua hitungan / hitungan sistem pencatat, untuk periode dan lingkup tetap | persen | Sistem pencatat dan lapisan pelaporan | Manajemen tingkat layanan; manajemen keuangan | Pemeriksaan laporan rilis | Bulanan |
| Penyimpangan model status | Jumlah nama status atau transisi berbeda yang dipakai dibandingkan dengan model terdokumentasi | status atau transisi tak terdokumentasi yang teramati pada periode itu (hitungan); yang terdokumentasi dikecualikan | hitungan | Konfigurasi alur kerja pelacak dan riwayat peristiwa | Perbaikan berkelanjutan | Kesepakatan kerja tentang alur kerja | Kuartalan |
| Tingkat respons survei | Porsi orang yang diundang dan menyelesaikan survei | respons selesai / undangan terkirim; undangan yang terpental dikecualikan | persen | Alat survei | Manajemen tingkat layanan; pengalaman pelanggan | Tinjauan pemangku kepentingan dan umpan balik perbaikan | Per gelombang survei |

Kelengkapan stempel waktu hanya menghitung item tertutup, sehingga tumpukan item terbuka lama tidak dapat menyembunyikan kesenjangan. Tingkat pencatatan mundur memakai ambang 24 jam sebagai contoh; tim memilih ambang yang sesuai pekerjaannya dan menuliskannya.

## Rekomendasi

### Petakan setiap metrik ke sumbernya

**1. Bangun peta sumber sebelum membangun dasbor.** Untuk setiap metrik, catat sistem pencatat, peristiwa yang memulai jam, peristiwa yang menghentikannya, pemilik sumber, dan mode kegagalan yang diketahui. Jika Anda tidak bisa menyebut sistemnya, Anda belum tahu dari mana angka itu berasal. Simpan peta di register metrik (lihat topik 1.4, Tata kelola dan kepemilikan metrik).

**2. Pilih satu sistem pencatat per fakta.** Deployment dicatat jalur pengiriman, insiden oleh alat ITSM, perubahan kode oleh kontrol versi, hubungan layanan oleh CMDB. Bila dua alat memegang fakta yang sama, putuskan mana yang menang dan buat yang lain membaca darinya. Rekonsiliasi lalu menjadi pemeriksaan, bukan perdebatan.

### Tangkap peristiwa pada saat terjadi

**3. Instrumentasi peristiwanya, bukan laporannya.** Biarkan jalur pengiriman mencatat deployment, host kontrol versi mencatat penggabungan, dan sistem pemantauan mencatat peringatan. Data yang bergantung pada seseorang mengingat untuk memperbarui kolom memburuk seiring jarak dari peristiwa dan beban kerja. Bila peristiwa otomatis ada, utamakan itu daripada proksi ketikan manusia untuk fakta yang sama (lihat topik 2.8, Metrik DORA).

**4. Jadikan perubahan status efek samping dari pekerjaan.** Jika penggabungan cabang memindahkan item kerja ke “dalam tinjauan” atau deployment memindahkannya ke “dirilis,” tak seorang pun harus mengingat. Integrasi antara kontrol versi, jalur pengiriman, dan pelacak menghapus sebagian besar pencatatan mundur.

**5. Simpan peristiwa mentah, dan jaga agar tak berubah.** Simpan setiap perubahan status dengan waktu peristiwa, waktu entri, dan jenis pelaku (orang atau otomatisasi). Tulis koreksi sebagai peristiwa baru, bukan penimpaan, sehingga riwayat koreksi itu sendiri menjadi data.

### Benahi waktu

**6. Catat waktu dalam satu standar.** Simpan stempel waktu dalam [Waktu Universal Terkoordinasi (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) dalam format tak ambigu seperti yang ditetapkan ISO 8601 dan RFC 3339, dan ubah ke waktu lokal hanya untuk tampilan. Zona waktu campuran dan pergantian waktu musim panas diam-diam menghasilkan durasi negatif dan jam yang meleset sejam.

**7. Tulis aturan jam di tempat data berada.** Untuk setiap ukuran waktu, nyatakan peristiwa mana yang memulai jam, mana yang menghentikannya, dan status mana yang menjedanya. Status jeda adalah keputusan desain. Laporkan seberapa sering tiap status jeda dipakai, karena jam adalah tempat data layanan paling sering dibentuk (lihat topik 3.3, Waktu respons dan penyelesaian insiden).

### Rancang model status

**8. Jaga model status tetap kecil, bersama, dan terdokumentasi.** Setiap status tambahan mengundang tafsir berbeda dari tiap tim. Definisikan arti tiap keadaan dalam satu kalimat, siapa yang boleh memindahkan pekerjaan ke dalamnya, dan transisi mana yang diizinkan. Usia item kerja dan ukuran alur bergantung pada model ini (lihat topik 2.1, Ukuran alur), dan perbandingan antartim bergantung pada tim memakai kata yang sama untuk keadaan yang sama. Ketika data mengejutkan Anda, curigai alur kerja lebih dulu: catat setiap perubahan pada alur kerja atau kolom dengan tanggal dan alasannya, dan hitung status tak terdokumentasi sebagai sinyal penyimpangan.

### Jaga jalur data tetap jujur

**9. Uji jalur data seperti perangkat lunak.** Periksa jumlah baris terhadap sumber, periksa bahwa kolom wajib ada, periksa duplikat, dan beri peringatan ketika sebuah umpan berhenti. Tambahkan indikator kesegaran ke setiap dasbor agar pemirsa dapat melihat seberapa tua datanya. Kegagalan konektor yang senyap sehingga angka bulan lalu tetap tampil di layar adalah salah satu kegagalan paling umum dan paling merusak di bidang ini (lihat topik 11.1, Merancang dasbor metrik layanan).

**10. Rekonsiliasi secara terjadwal dan ambil sampel dengan tangan.** Bandingkan hitungan di lapisan pelaporan dengan sumber untuk periode tetap, dan selidiki selisihnya. Lalu baca sampel kecil catatan mentah. Sampel lima belas menit sering menemukan apa yang tak dapat ditemukan pemeriksaan otomatis, seperti status yang dipakai dengan cara tak terduga.

### Tangani orang dan survei dengan hati-hati

**11. Sisakan survei untuk apa yang hanya dapat dikatakan seseorang.** Kepuasan, upaya, kepercayaan, dan kesejahteraan tidak dapat diamati dari data sistem. Tanyakan langsung, jaga survei singkat, variasikan waktunya, dan laporkan tingkat respons dan siapa yang menjawab, karena orang yang menjawab berbeda dari yang tidak, suatu bentuk [bias seleksi](https://en.wikipedia.org/wiki/Selection_bias). Baca komentar terbuka secara utuh (lihat topik 6.1, Metrik kepuasan pelanggan).

**12. Lindungi data pribadi dan jaga data di tingkat tim.** Data peristiwa tentang pekerjaan dapat mengidentifikasi individu lewat kepengarangan commit, kolom penerima tugas, dan catatan obrolan. Kumpulkan pada tingkat yang dibutuhkan metrik, agregasikan ke tim dan layanan, dan terapkan aturan privasi yurisdiksi dan organisasi Anda. Data tingkat individu, begitu terkumpul, cenderung dipakai untuk peringkat, yang merusak sumbernya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan sumber | Menghitung layanan sebagai tercakup setelah umpan tersambung, meski nyaris tak membawa peristiwa; membiarkan layanan sulit di luar lingkup | Volume peristiwa per layanan tercakup dibandingkan aktivitas yang diketahui; tinjau daftar lingkup terhadap katalog layanan |
| Kelengkapan stempel waktu | Mengisi stempel waktu wajib dengan waktu penutupan untuk memenuhi validasi | Distribusi selisih antara keadaan berurutan; ambil sampel item tertutup untuk melihat apakah waktunya masuk akal |
| Tingkat pencatatan mundur | Memasukkan perubahan tepat di dalam ambang; melebarkan ambang; mencatat semua perubahan lewat satu pembaruan massal | Pola waktu entri per jam; porsi perubahan oleh otomatisasi dibanding oleh tangan; audit penyuntingan massal |
| Kesegaran data | Menampilkan waktu penyegaran terakhir alih-alih waktu peristiwa terbaru | Waktu peristiwa terbaru ditampilkan di dasbor; beri peringatan ketika umpan tidak mengirim peristiwa baru |
| Selisih rekonsiliasi | Memilih periode atau lingkup yang cocok; menyesuaikan lapisan pelaporan agar sama dengan sumber tanpa mencari penyebab | Tetapkan lingkup dan periode di muka; catat setiap penyebab yang ditemukan dan tinjau penyebabnya tiap kuartal |
| Penyimpangan model status | Memakai ulang status yang ada untuk makna baru agar tak ditandai; menambah status tanpa mencatatnya | Bandingkan konfigurasi alur kerja dengan register pada setiap tinjauan; baca sampel item dalam keadaan tak lazim |
| Tingkat respons survei | Mengundang hanya orang yang kemungkinan merespons; mengirim pengingat ke pengguna yang puas; menawarkan hadiah yang membiaskan jawaban | Komposisi responden dibandingkan populasi pengguna; distribusi jawaban per gelombang; komentar terbuka dibaca dalam tinjauan |

Pembacaan yang sehat adalah set angka yang membosankan: cakupan tinggi, pencatatan mundur rendah dan menurun, kesegaran dalam janji yang dinyatakan, dan penyebab yang diketahui setiap kali selisih rekonsiliasi tidak nol. Ketika sebuah angka bergerak, seseorang dapat menyatakan apakah pekerjaannya yang berubah atau instrumennya.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Penangkapan peristiwa otomatis | Objektif, tepat waktu, upaya rendah setelah dibangun | Hanya mencakup yang diinstrumentasi; rusak senyap saat alat berubah |
| Entri manual dan pembaruan status | Menangkap konteks dan pertimbangan; berjalan tanpa integrasi | Terlambat, tidak konsisten, dan terbuka untuk manipulasi |
| Satu penyimpanan metrik pusat | Satu definisi, satu tempat untuk menguji dan mengelola | Butuh pendanaan dan kepemilikan; bisa menjadi hambatan |
| Tiap tim menyimpan datanya sendiri | Sesuai pekerjaan lokal; cepat dimulai | Definisi menyimpang; rekapitulasi tak andal |
| Peristiwa mentah disimpan jangka panjang | Definisi dapat berubah dan riwayat dapat dihitung ulang | Biaya penyimpanan dan privasi; lebih banyak yang harus diamankan |

Otomatiskan apa yang dapat diamati, tanyakan kepada orang tentang yang tidak, dan simpan catatan mentahnya. Investasikan lebih dulu pada sumber di balik dua atau tiga metrik yang benar-benar dipakai tim, bukan pada platform data untuk setiap angka yang terbayangkan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Untuk metrik terpenting kita, sistem mana sumber pencatatnya, dan bagaimana kita tahu?**
Minta kelompok menelusuri angka dari dasbor kembali ke peristiwa pertama. Catat setiap tempat orang atau transformasi menyentuh data. Fasilitator sebaiknya mencari langkah yang tak dapat dijelaskan siapa pun, karena di situlah penyelidikan pertama harus dimulai.

**2. Stempel waktu kita yang mana ditulis sistem, dan mana yang diketik orang?**
Daftar jam yang dipakai, seperti waktu merespons, waktu menyelesaikan, dan cycle time. Tandai setiap awal dan akhir sebagai otomatis atau manual. Untuk yang manual, tanyakan berapa lama setelah peristiwa entri biasanya dibuat. Diskusi sering menunjukkan bahwa metrik yang paling diperdebatkan bertumpu pada stempel waktu yang paling tak andal.

**3. Apa arti status kita, dan apakah semua tim bermaksud hal yang sama?**
Taruh alur kerja di papan dan minta orang dari tim berbeda menjelaskan tiap keadaan dengan kata mereka sendiri. Bandingkan penjelasannya. Hitung keadaan tempat jam berhenti, dan tanyakan siapa yang boleh memakainya dan mengapa. Sepakati satu perubahan untuk menghapus ambiguitas dan catat dengan alasannya.

**4. Bagaimana kita akan tahu jika sebuah umpan berhenti senyap?**
Tanyakan kapan terakhir ada yang memeriksa bahwa data di dasbor mutakhir. Bahas peringatan atau indikator kesegaran apa yang akan menangkap konektor yang berhenti dalam sehari. Fasilitator sebaiknya mendorong adanya pemilik bernama dan pemeriksaan konkret, bukan niat umum untuk berhati-hati.

**5. Apa yang kita kumpulkan tetapi tak pernah dipakai, dan apa yang kita pakai tetapi tak kita kumpulkan dengan baik?**
Letakkan daftar kolom dan daftar metrik berdampingan. Tandai kolom yang tak memberi masukan bagi keputusan dan metrik yang bertumpu pada kolom buruk. Putuskan satu kolom untuk berhenti dikumpulkan dan satu untuk diperbaiki kuartal ini.

**6. Siapa yang menjawab survei kita, dan siapa yang tidak?**
Bandingkan responden dengan populasi pengguna atau anggota tim. Lihat tingkat respons per kelompok dan menurut jam atau hari. Bahas apa arti kebisuan itu dan bagaimana menjangkau kelompok yang diam tanpa tekanan. Sepakati bagaimana tingkat respons akan ditampilkan di samping setiap hasil survei.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman menghasilkan sebagian besar data objektif: commit, tinjauan, build, dan deployment. Mereka diuntungkan oleh instrumentasi yang menjadikan perubahan status efek samping pekerjaan, sehingga papan tetap jujur tanpa upaya tambahan. Mereka sebaiknya menjaga alur kerja tetap kecil dan berhati-hati memakai aktivitas kontrol versi sebagai ukuran upaya (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur).

### Tim layanan dan operasi

Tim layanan bergantung pada catatan yang dibuat orang di bawah tekanan, sering saat insiden. Aturan jam, status jeda, dan kolom prioritas adalah tempat penyimpangan terjadi. Tim operasi sebaiknya menjadikan penangkapan waktu kunci otomatis bila mungkin, seperti waktu peringatan dan waktu pengakuan, mengaudit pemakaian status jeda, dan memisahkan data pemantauan dari catatan tiket agar masing-masing dapat memeriksa yang lain (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan).

### Kepemimpinan dan tata kelola

Pemimpin memutuskan seberapa banyak berinvestasi pada fondasi data, dan menetapkan insentif yang menentukan apakah data tetap jujur. Mereka sebaiknya bertanya dari mana angka berasal sebelum bertanya mengapa ia bergerak, mendanai kepemilikan jalur data sebagai pekerjaan berkelanjutan, dan mengharapkan tanggal kesegaran dan definisi pada setiap laporan. Badan tata kelola sebaiknya memperlakukan perubahan terdokumentasi pada sumber atau definisi sebagai peristiwa normal, bukan kegagalan.

### Pelanggan dan pengguna

Pengguna memasok data yang paling penting tentang pengalaman, biasanya dengan menjawab survei, menilai interaksi, atau melaporkan masalah. Mereka perlu tahu apa yang dikumpulkan, mengapa, dan apa yang akan berubah sebagai akibatnya. Survei singkat dan tindak lanjut yang terlihat menjaga tingkat respons tetap sehat. Laporan tingkat layanan yang dihadapkan kepada pelanggan sebaiknya menyatakan sumber dan definisinya (lihat topik 5.2, SLI, SLO, dan anggaran kesalahan).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah memiliki tim platform, tiga tim produk, dan service desk. Semua angka dalam contoh ini bersifat ilustratif.

Pimpinan bertanya mengapa lead time perubahan pada laporan bulanan turun dari median 9 hari menjadi 3 hari dalam satu kuartal, sementara tim produk melaporkan tidak ada perubahan dalam cara bekerja. Kepala rekayasa platform mencurigai instrumennya dan meminta peta sumber untuk metrik itu.

Peta menunjukkan bahwa lead time dimulai saat catatan perubahan dibuat di alat ITSM dan berhenti saat statusnya diatur ke “diimplementasikan.” Dua tim produk mulai membuat catatan setelah pekerjaan siap, sehingga jam mulai terlambat. Sampel 40 catatan menemukan 12 dibuat pada hari yang sama dengan deployment. Tingkat pencatatan mundur, diukur sebagai selisih antara peristiwa deployment di jalur pengiriman dan entri status “diimplementasikan,” adalah 31 persen di atas ambang 24 jam yang ditetapkan tim.

Tim membuat tiga perubahan. Pertama, awal jam dipindah ke commit pertama yang tertaut pada perubahan, diambil dari kontrol versi, dan akhirnya dipindah ke peristiwa deployment yang ditulis jalur pengiriman. Kedua, alat ITSM menerima status dari jalur pengiriman, sehingga “diimplementasikan” tidak lagi diketik. Ketiga, dasbor mendapat indikator kesegaran dan pemeriksaan rekonsiliasi hitungan perubahan antara jalur pengiriman dan alat ITSM.

Di bawah definisi baru, median lead time adalah 7 hari dan persentil ke-95 adalah 21 hari, dan tingkat pencatatan mundur turun menjadi 4 persen. Pimpinan awalnya membaca 7 hari sebagai hasil yang lebih buruk. Kepala platform menjelaskan bahwa angka lama adalah artefak dari pembuatan catatan yang terlambat. Keputusan yang ditulis dalam log keputusan adalah menyajikan ulang dua kuartal sebelumnya dari peristiwa mentah dan menandai perubahan definisi pada bagan. Risiko manipulasi yang ditangkap tim itu halus: tak seorang pun memalsukan angka, namun pembuatan catatan yang terlambat menghasilkan angka yang menyanjung. Selisih rekonsiliasi kini bertindak sebagai pagar pembatas, dan sampel catatan mentah ditinjau setiap kuartal.

## Sudut pandang sektor

**Startup.** Data tipis dan kepercayaan tinggi, yang membantu. Pakai jalur pengiriman dan kontrol versi sebagai sumber utama, karena tidak butuh upaya tambahan, dan jaga model status pada segelintir keadaan. Tuliskan setiap definisi dan sumbernya dalam satu halaman, dan tinjau ulang ketika tim berlipat dua.

**Bisnis kecil.** Satu orang sering menjalankan TI pada service desk yang dihosting. Pakai laporan alat itu, minta definisinya dari pemasok secara tertulis, dan ekspor data mentah secara berkala untuk menghindari keterkungkungan.

**Perusahaan besar.** Banyak alat, banyak tim, dan lapisan integrasi menciptakan risiko terbesar penyimpangan definisi. Investasikan pada model peristiwa bersama, penyimpanan metrik pusat dengan pemilik bernama, serta pemeriksaan rekonsiliasi dan kesegaran otomatis. Sepakati kosakata status kecil di seluruh perusahaan, dan biarkan tim menambah keadaan lokal hanya dengan pemetaan yang dinyatakan ke kosakata itu.

**Pemerintah dan sektor publik.** Catatan dapat tunduk pada hukum retensi, audit, akses, dan privasi, dan pengadaan dapat mengunci alat dan format data. Perlakukan ini sebagai masukan desain: simpan jejak audit, dokumentasikan silsilah dari peristiwa ke laporan, dan negosiasikan hak ekspor data dalam kontrak. Kewajiban pelaporan menjadikan definisi terdokumentasi esensial (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya topik ini terdiri dari tiga bagian. Yang pertama adalah upaya membangun: integrasi, penyimpanan metrik, dan pembenahan model status. Yang kedua adalah upaya menjalankan: pemilik jalur data, pemantauan umpan, dan rutinitas rekonsiliasi serta sampling kuartalan. Yang ketiga adalah biaya kendali privasi dan keamanan untuk data yang Anda simpan.

Imbal hasil datang dari keputusan yang dibuat atas angka yang berarti sebagaimana tampaknya. Data yang buruk menyebabkan investasi yang keliru, perdebatan tentang angka siapa yang benar, dan hasil yang disajikan ulang sehingga merusak kepercayaan. Gambarkan manfaatnya lewat pola yang dapat Anda ukur sendiri: waktu untuk menghasilkan laporan bulanan sebelum dan sesudah, jumlah sengketa rekonsiliasi per kuartal, serta tingkat pencatatan mundur dan kelengkapan stempel waktu dari waktu ke waktu. Total biaya kepemilikan didominasi manusia, jadi hitung jam pemilik jalur data.

## Anti-pola dan jebakan

- **Membangun dasbor sebelum peta sumber.** Bagan tampak selesai sementara maknanya tak diketahui. Petakan sumber, jam, dan pemilik lebih dulu.
- **Memercayai pembaruan status manual untuk ukuran waktu.** Entri terlambat menjadikan jam fiksi. Otomatiskan transisi dari peristiwa jalur pengiriman dan kontrol versi di mana pun tersedia.
- **Beberapa sistem pencatat untuk satu fakta.** Sengketa menyusul. Pilih satu dan buat yang lain membaca darinya.
- **Perubahan definisi diam-diam.** Garis tren menjadi tak bermakna. Catat setiap perubahan beserta alasannya dan tandai pada bagan.
- **Rata-rata dari data tak lengkap.** Stempel waktu yang hilang tidak acak, karena item yang merepotkan sering yang dilewati. Laporkan kelengkapan stempel waktu di samping hasilnya.
- **Mengumpulkan segalanya kalau-kalau berguna.** Biaya dan risiko privasi naik tanpa keputusan yang dilayani. Kumpulkan apa yang dibutuhkan pertanyaan bernama.
- **Tanpa indikator kesegaran.** Dasbor basi tampak sama dengan yang mutakhir. Tampilkan usia peristiwa terbaru di setiap tampilan.
- **Data tingkat individu tanpa tujuan.** Ia menggoda peringkat dan merusak sumber. Agregasikan ke tingkat tim dan layanan, dan batasi akses.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Sumber dan penangkapan | Angka dirakit manual dari ekspor | Beberapa alat memberi laporan secara otomatis; yang lain tidak | Setiap metrik punya satu sistem pencatat bernama dan penangkapan otomatis bila ada peristiwa | Cakupan dan kelengkapan diukur dan diplot tren | Peristiwa dibagikan antartim dan pemasok lewat antarmuka yang disepakati, dengan kontrak untuk ekspor |
| Model waktu dan status | Tiap orang mencatat dan membaca waktu secara berbeda | Beberapa tim mendokumentasikan alur kerjanya | Satu standar waktu dan kosakata status bersama dengan aturan jam tertulis | Penyimpangan dan pencatatan mundur dipantau, dan perubahan dicatat dengan alasan | Model direvisi bersama pemasok dan pelanggan ketika tidak lagi memberi masukan bagi keputusan |
| Kualitas jalur data | Kegagalan ditemukan ketika seseorang mengeluh | Pemeriksaan manual sesekali | Jumlah baris, pemeriksaan duplikat, dan indikator kesegaran pada tiap dasbor | Rekonsiliasi dijadwalkan dan penyebab ditinjau; jalur data punya pemilik | Kesehatan jalur data dilaporkan seperti layanan, dengan perbaikan didanai |
| Praktik survei dan privasi | Survei ad hoc; tanpa tinjauan privasi | Pertanyaan standar di beberapa tim | Survei singkat reguler dengan tingkat respons ditampilkan; data disimpan di tingkat tim | Komposisi responden ditinjau dan ditindaklanjuti | Hasil survei dan praktik privasi dibagikan terbuka kepada pengguna |

## Daftar periksa

- [ ] Setiap metrik yang dilaporkan memiliki sistem pencatat bernama dan pemilik sumber bernama.
- [ ] Peta sumber disimpan di register metrik.
- [ ] Setiap ukuran waktu menyatakan di mana jam mulai, berhenti, dan jeda.
- [ ] Stempel waktu disimpan dalam UTC dengan format tak ambigu, dan jam server disinkronkan.
- [ ] Perubahan status dihasilkan otomatisasi di mana pun ada peristiwa.
- [ ] Peristiwa mentah disimpan dengan waktu peristiwa dan waktu entri, dan koreksi adalah peristiwa baru.
- [ ] Model status didokumentasikan, dan setiap perubahan dicatat dengan alasannya.
- [ ] Setiap dasbor menampilkan usia data terbarunya.
- [ ] Hitungan direkonsiliasi dengan sumber secara terjadwal, dan penyebab dicatat.
- [ ] Sampel catatan mentah dibaca setiap kuartal.
- [ ] Tingkat respons survei dan komposisi responden ditampilkan bersama setiap hasil survei.
- [ ] Data pribadi diminimalkan dan diagregasi ke tingkat tim dan layanan.

## Prompt AI

**Bangun peta sumber untuk sebuah metrik.**

```text
Saya mendokumentasikan data di balik metrik ini: [metric name], didefinisikan
sebagai [definition]. Alat kami adalah [list of tools, for example tracker, ITSM
tool, pipeline, monitoring]. Susun peta sumber dengan bidang berikut: peristiwa
yang memulai jam, peristiwa yang menghentikannya, sistem pencatat untuk
masing-masing, siapa atau apa yang membuat peristiwa (orang atau otomatisasi),
mode kegagalan yang mungkin, dan pemeriksaan yang akan mendeteksi setiap
kegagalan. Jangan mengarang fitur alat atau nilai acuan. Daftar asumsi Anda dan
pertanyaan yang harus saya jawab untuk melengkapi peta.
```

**Tinjau model status untuk ambiguitas.**

```text
Berikut alur kerja untuk [team or service]: [list of statuses and allowed
transitions, with a one-line meaning for each if known]. Jam yang kami hitung
darinya adalah [list clocks]. Identifikasi status yang ambigu, keadaan tempat jam
dapat berhenti atau jeda secara menyesatkan, dan tempat dua tim mungkin membaca
kata yang sama secara berbeda. Sarankan model yang lebih kecil yang tetap
mendukung jam itu, dan katakan apa yang hilang. Jangan menebak bagaimana alat
kami dikonfigurasi. Daftar asumsi Anda.
```

**Rancang pemeriksaan kualitas data untuk sebuah umpan.**

```text
Kami memuat [data type, for example change records] dari [source system] ke
[destination] setiap [schedule]. Kolom wajib adalah [list fields]. Usulkan set
pemeriksaan praktis untuk kelengkapan, duplikat, kesegaran, dan rekonsiliasi
terhadap sumber, dengan saran peringatan dan peran pemilik untuk masing-masing.
Jaga set cukup kecil untuk dipelihara tim beranggota [team size]. Jangan
mengarang ambang; tanyakan kepada saya yang Anda butuhkan. Daftar asumsi Anda.
```

**Susun survei singkat dan rencana untuk tingkat responsnya.**

```text
Saya ingin mengukur [experience topic, for example effort to get a request
fulfilled] untuk [audience]. Susun [number] pertanyaan netral, rencana kapan dan
bagaimana mengirimkannya, dan cara melaporkan tingkat respons dan komposisi
responden. Tandai kata-kata yang dapat membiaskan jawaban, dan catat
pertimbangan privasi mengingat data akan disimpan di [tool or location]. Jangan
mengarang tingkat respons acuan. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik mana yang mendefinisikan metrik yang Anda instrumentasi dan pagar pembatas yang harus berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa topik metrik baru atau yang disunting menyebut sumber data dan jamnya.

## Poin penting

- Setiap metrik bergantung pada sistem pencatat bernama, jadi petakan sumber sebelum membangun bagan.
- Tangkap peristiwa secara otomatis pada saat terjadi, dan simpan peristiwa mentah agar definisi bisa berubah tanpa kehilangan riwayat.
- Waktu juga data: pakai satu standar, tulis aturan jam, dan waspadai pencatatan mundur.
- Jaga model status tetap kecil, bersama, dan terdokumentasi, dan catat setiap perubahan.
- Perlakukan jalur data sebagai produk dengan pemilik, pengujian, indikator kesegaran, dan rekonsiliasi terjadwal.
- Pakai survei untuk apa yang hanya dapat dikatakan orang, tampilkan tingkat responsnya, dan jaga data pribadi di tingkat tim.

## Referensi dan bacaan lanjutan

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
