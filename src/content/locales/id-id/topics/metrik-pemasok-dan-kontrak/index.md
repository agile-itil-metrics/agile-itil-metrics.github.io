# Metrik pemasok dan kontrak

**Pemasok adalah bagian dari layanan Anda, jadi ukur apa yang mereka sampaikan, seberapa besar Anda bergantung pada mereka, dan apakah Anda bisa pergi, dan bangun hubungan di sekitar hasil bersama dan percakapan reguler, bukan di sekitar penalti dan kejutan.**

## Gambaran umum dan motivasi

Hampir tak ada layanan yang dibangun dan dijalankan oleh satu tim saja. Penyedia cloud menjadi host-nya, vendor memasok perangkat lunaknya, kontraktor mengisi staf service desk, perusahaan telekomunikasi membawa lalu lintasnya, dan mitra pembayaran memindahkan uangnya. Ketika salah satu gagal, pengguna Anda tidak membedakan antara kegagalan Anda dan kegagalan mereka. [Manajemen vendor](https://en.wikipedia.org/wiki/Vendor_management) adalah disiplin memilih, mengontrak, memantau, dan, bila perlu, keluar dari pemasok. Praktik manajemen pemasok ITIL menggambarkannya sebagai memastikan bahwa pemasok dan kinerja mereka dikelola dengan semestinya untuk mendukung penyampaian layanan tanpa celah.

[Alih daya](https://en.wikipedia.org/wiki/Outsourcing) memindahkan pekerjaan ke pihak luar dan tidak memindahkan akuntabilitas: organisasi tetap bertanggung jawab kepada pelanggan dan regulatornya. Kontrak karena itu adalah sarana koordinasi dan alokasi risiko, bukan pemindahan tanggung jawab. Ketika banyak pemasok terlibat, [multisourcing](https://en.wikipedia.org/wiki/Multisourcing) dan praktik [integrasi dan manajemen layanan](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) mengoordinasikan mereka agar pengguna melihat satu layanan. Ukuran dalam topik ini menggambarkan kesehatan jaringan itu.

Nilai agile memberi orientasi yang berguna. Manifesto Agile menyatakan preferensi pada kolaborasi dengan pelanggan di atas negosiasi kontrak. Itu tidak berarti mengabaikan kontrak, yang mengalokasikan risiko dan uang nyata. Itu berarti membangun hubungan tempat pemasok dan pelanggan bekerja pada hasil yang sama, berbagi informasi lebih awal, dan menyesuaikan seiring mereka belajar. Pemasok yang diperlakukan sebagai mitra memberi tahu Anda tentang masalah lebih cepat. Pemasok yang takut penalti menyembunyikannya. Pengukuran sebaiknya mendukung pola pertama.

Empat masalah berulang dalam pengukuran pemasok.

- **Laporan hijau dan pengguna tak puas.** Pemasok dapat memenuhi setiap tingkat layanan kontraktual dan tetap menyampaikan pengalaman buruk, pola yang disebut topik awal tentang perjanjian tingkat layanan sebagai efek semangka (lihat topik 5.1, Metrik SLA, OLA, dan XLA). Kontrak mengukur apa yang dikatakannya, dan pengguna mengalami sesuatu yang lebih luas.
- **Konsentrasi dan keterkuncian.** Bergantung besar pada satu pemasok efisien sampai ia gagal atau menaikkan harga. [Keterkuncian vendor](https://en.wikipedia.org/wiki/Vendor_lock-in) membuat perubahan mahal, dan biayanya tumbuh diam-diam dengan setiap integrasi.
- **Dependensi tersembunyi.** Pemasok Anda punya pemasok. [Serangan rantai pasok](https://en.wikipedia.org/wiki/Supply_chain_attack) menyasar vendor tepercaya untuk menjangkau pelanggannya, dan kegagalan pada subkontraktor dapat menjangkau Anda tanpa kontak apa pun dari pemasok langsung Anda.
- **Keluar sebagai renungan belakangan.** Banyak kontrak ditandatangani tanpa rencana mengakhirinya. [Strategi keluar](https://en.wikipedia.org/wiki/Exit_strategy) yang tak pernah diuji mungkin tidak berfungsi saat dibutuhkan.

Pertimbangan lain adalah bentuk kontrak. [Kontrak berbasis kinerja](https://en.wikipedia.org/wiki/Performance-based_contracting) mengikat pembayaran pada hasil, dan dapat menyelaraskan kepentingan ketika hasil jelas dan terukur. Ia juga dapat mengundang manipulasi ketika ukurannya sempit. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku ke dua arah: pemasok mengoptimalkan tingkat layanan yang diukur, dan pembeli mengoptimalkan penghematan yang dilaporkan (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Topik ini membangun di atas catatan bagian sebelumnya, terutama data perangkat lunak dan keuangan (lihat topik 7.2, Metrik aset perangkat lunak dan lisensi, dan topik 7.5, Biaya layanan dan ekonomi per unit), dan mempersiapkan kewajiban pelaporan yang sering jatuh pada badan publik (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Prinsip utama

- **Anda tetap bertanggung jawab.** Kontrak mengalokasikan risiko dan uang, dan tidak memindahkan tanggung jawab kepada pengguna dan regulator.
- **Ukur hasil dan pengalaman selain syarat kontrak.** Laporan kontrak yang hijau dapat menyembunyikan layanan buruk.
- **Kenali dependensi Anda.** Petakan pemasok kritis, subkontraktor kuncinya, dan layanan yang bergantung pada mereka.
- **Rencanakan keluar sebelum Anda menandatangani.** Rencana keluar yang belum diuji adalah harapan.
- **Berkolaborasi secara teratur.** Tinjauan bersama yang sering dan terus terang mengalahkan rapat krisis tahunan.
- **Bagikan data secara terbuka.** Kedua pihak diuntungkan oleh angka yang sama.
- **Bedakan pemasok menurut kekritisan.** Belanjakan upaya manajemen di tempat kegagalan paling menyakitkan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pencapaian tingkat layanan pemasok | Porsi ukuran tingkat layanan kontraktual yang dipenuhi pemasok, dipasangkan dengan ukuran pengalaman untuk layanan yang sama | ukuran terpenuhi pada periode itu / ukuran yang dikontrakkan; dilaporkan di samping skor pengalaman pengguna untuk layanan | persen | Laporan pemasok, pemantauan Anda sendiri, data survei | Manajemen pemasok; manajemen tingkat layanan | Tinjauan kontribusi mitra pada tujuan | Bulanan |
| Waktu insiden yang diatribusikan ke pemasok | Jam dampak layanan yang diatribusikan ke komponen atau tindakan pemasok | jumlah jam dampak insiden tempat kegagalan pemasok adalah penyebab terkonfirmasi | jam | Catatan insiden dengan analisis sebab, laporan insiden pemasok | Manajemen insiden; manajemen pemasok | Waktu hilang pada penghalang eksternal | Bulanan |
| Cakupan register kontrak | Porsi pemasok dengan kontrak terkini, pemilik internal bernama, dan tinjauan terjadwal | pemasok dengan ketiganya / pemasok dalam lingkup | persen | Register kontrak, catatan pengadaan | Manajemen pemasok; manajemen keuangan | Kepemilikan jelas atas dependensi eksternal | Kuartalan |
| Kemutakhiran uji tuntas | Porsi pemasok kritis yang penilaian risikonya berada dalam siklus tinjauannya | pemasok kritis yang dinilai dalam siklus / pemasok kritis | persen | Penilaian risiko pemasok | Manajemen pemasok; manajemen risiko; manajemen keamanan informasi | Tinjauan risiko secara teratur | Kuartalan |
| Kesiapan keluar | Porsi pemasok kritis dengan rencana keluar terdokumentasi yang telah diuji dalam periode yang disepakati | pemasok kritis dengan rencana keluar teruji / pemasok kritis | persen | Rencana keluar dan catatan pengujian | Manajemen pemasok; manajemen kelangsungan layanan | Pemulihan dependensi yang dilatih | Tahunan |
| Konsentrasi | Porsi layanan kritis yang bergantung pada satu pemasok tanpa alternatif teruji | layanan kritis dengan dependensi satu pemasok dan tanpa alternatif teruji / layanan kritis | persen | Peta dependensi, register pemasok | Manajemen pemasok; manajemen risiko | Menghindari satu titik kegagalan | Kuartalan |
| Tingkat penutupan tindakan bersama | Porsi tindakan yang disepakati dalam tinjauan bersama dengan pemasok yang ditutup pada tenggatnya | tindakan bersama ditutup pada tanggal / tindakan bersama jatuh tempo | persen | Notulen tinjauan dan pelacak tindakan | Manajemen pemasok; perbaikan berkelanjutan | Tindakan retrospektif disampaikan | Kuartalan |

Definisikan kekritisan di register, dengan kriterianya, dan terapkan secara konsisten. Ukuran tingkat layanan “terpenuhi” sebagaimana didefinisikan dalam kontrak, dan ukuran pengalaman adalah yang Anda pilih untuk layanan yang sama. Waktu insiden yang diatribusikan ke pemasok hanya menghitung penyebab terkonfirmasi, dan metode atribusi disepakati dengan pemasok bila mungkin. Kesiapan keluar menghitung rencana sebagai teruji hanya ketika penelusuran atau latihan tercatat dalam periode itu.

## Rekomendasi

### Kenali pemasok Anda dan apa yang bergantung pada mereka

**1. Simpan register pemasok dengan pemilik dan kekritisan.** Daftar setiap pemasok dengan kontrak, apa yang mereka sediakan, pemilik internal, tanggal kontrak, dan kekritisan. Sertakan layanan gratis atau informal yang diandalkan tim Anda. Kekritisan adalah penilaian tentang kerugian jika pemasok gagal, dan menentukan seberapa banyak perhatian manajemen yang didapat hubungan itu.

**2. Petakan rantai dependensi untuk layanan kritis.** Untuk tiap layanan kritis, daftar pemasok yang dibutuhkannya dan, bila bisa, subkontraktor kunci dan platform bersama mereka. Pakai catatan konfigurasi untuk tautan internal, dan tanyakan kepada pemasok dependensi kritis mereka (lihat topik 7.4, Metrik kualitas konfigurasi dan CMDB). Peta menunjukkan risiko konsentrasi dan memberi tahu Anda di mana gangguan di tempat lain akan menjangkau Anda.

**3. Nilai risiko secara proporsional.** Pakai penilaian standar yang singkat untuk pemasok berisiko rendah dan yang lebih dalam untuk yang kritis, mencakup keamanan, ketahanan, stabilitas keuangan, dan kepatuhan. Nilai ulang pada siklus dan ketika ada yang berubah. Bagikan hasilnya kepada pemasok dan sepakati tindakan. Standar seperti ISO/IEC 27036 memberi panduan tentang keamanan informasi dalam hubungan pemasok.

### Tulis kontrak untuk hasil dan kerja sama

**4. Definisikan tingkat layanan yang mencerminkan apa yang dialami pengguna.** Sertakan ukuran kontraktual yang terkait dengan hasil pengguna, seperti kecepatan tindakan yang menghadap pengguna, selain ketersediaan komponen. Minta data untuk memeriksanya sendiri. [Perjanjian tingkat layanan](https://en.wikipedia.org/wiki/Service-level_agreement) dengan ukuran yang tak dapat diverifikasi siapa pun, atau yang tak cocok dengan apa yang dirasakan pengguna, menghasilkan efek semangka.

**5. Utamakan tujuan bersama daripada hanya penalti.** Kredit untuk target yang terlewat lazim dan punya tempat, tetapi kontrak yang terutama dibangun di atas penalti membuat hubungan bersifat bermusuhan dan data kurang jujur. Bila mungkin, sertakan sasaran bersama, tinjauan bersama reguler, dan pembagian keuntungan untuk perbaikan. Tinjau insentif untuk efek samping yang mungkin ditimbulkannya.

**6. Rencanakan keluar dalam kontrak.** Sertakan ekspor data dalam format yang dapat dipakai, dukungan selama transisi, pemberitahuan yang wajar, dan kejelasan tentang kekayaan intelektual dan kepemilikan konfigurasi. Tanyakan berapa biaya pergi dan tuliskan. Kontrak tanpa syarat keluar membuat Anda bernegosiasi di bawah tekanan.

### Kelola hubungan

**7. Adakan tinjauan bersama secara teratur.** Bertemulah pada irama yang sesuai dengan kekritisan, dengan agenda standar yang singkat: hasil, insiden, risiko, perubahan mendatang, dan tindakan. Bagikan ukuran Anda sendiri kepada pemasok dan minta ukuran mereka. Lacak tindakan dan penutupannya. Perlakukan rapat sebagai sesi kerja antar-mitra, dan undang orang yang mengerjakan pekerjaan.

**8. Bagikan informasi insiden dengan cepat dan terbuka.** Sepakati bagaimana dan secepat apa tiap pihak memberi tahu pihak lain, dan tinjau insiden signifikan bersama tanpa menyalahkan (lihat topik 3.4, Metrik insiden besar). Ukur waktu insiden yang diatribusikan ke pemasok untuk melihat di mana dampak terbesar, dan pakai dalam percakapan, bukan sebagai tongkat.

**9. Gabungkan data kontrak dengan pengalaman pengguna.** Untuk tiap layanan pemasok kritis, taruh ukuran kontraktual di samping ukuran kepuasan atau upaya dari pengguna (lihat topik 6.2, Perjanjian tingkat pengalaman). Ketidaksepakatan antara keduanya adalah titik awal diskusi.

**10. Koordinasikan pemasok menjadi satu layanan.** Di mana beberapa pemasok berkontribusi pada satu layanan, sepakati siapa yang memiliki hasil ujung ke ujung, bagaimana serah terima bekerja, dan siapa yang berkomunikasi dengan pengguna. Praktik SIAM memformalkan ini. Ukur keterlambatan serah terima dan eskalasi berulang antar-pemasok (lihat topik 9.3, Metrik kolaborasi dan serah terima).

### Kurangi konsentrasi dan bersiap pergi

**11. Ukur konsentrasi dan putuskan dengan sengaja.** Laporkan porsi layanan kritis yang bergantung pada satu pemasok tanpa alternatif teruji. Konsentrasi kadang pilihan yang tepat, karena membawa kesederhanaan dan bobot negosiasi. Jadikan itu keputusan dengan pemilik, biaya, dan tanggal tinjauan, bukan kecelakaan.

**12. Uji keluar.** Untuk pemasok kritis, telusuri rencana keluar setidaknya sekali dalam periode yang ditentukan: dapatkah Anda mengekspor data, adakah alternatif, berapa lama waktunya, apa yang akan rusak? Latihan tabletop mengungkap celah dengan murah. Catat hasilnya dan perbaiki celah, dan perbarui rencana ketika arsitektur berubah.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Pencapaian tingkat layanan pemasok | Pemasok mengecualikan peristiwa dari pengukuran; jam berhenti; definisi sempit | Pemantauan sendiri; ukuran pengalaman; audit pengecualian |
| Waktu insiden yang diatribusikan ke pemasok | Menyengketakan atribusi; mengklasifikasi kesalahan pemasok sebagai sisi pelanggan | Tinjauan sebab bersama; peninjau netral untuk sengketa; lacak porsi yang disengketakan |
| Cakupan register kontrak | Menamai pemilik yang tak tahu; mendaftar kontrak tanpa tanggal | Konfirmasi pemilik; periksa bahwa rapat tinjauan diadakan |
| Kemutakhiran uji tuntas | Penilaian hanya lewat kuesioner; pemasok mengesahkan sendiri | Persyaratan bukti untuk pemasok kritis; verifikasi sampel |
| Kesiapan keluar | Menulis rencana dan menyebutnya teruji; latihan tanpa langkah nyata | Catat apa yang dilatih; tinjauan independen atas latihan |
| Konsentrasi | Memecah satu pemasok menjadi beberapa badan hukum di atas kertas | Peta dependensi ke penyedia akhir; tinjau platform bersama |
| Tingkat penutupan tindakan bersama | Menetapkan tindakan mudah; menutup tanpa efek | Tinjau mutu tindakan; periksa bahwa isu yang dituju membaik |

Pembacaan yang sehat adalah register pemasok dengan pemilik aktif, tingkat layanan yang cocok dengan pengalaman pengguna, insiden yang dibahas terbuka, konsentrasi yang dipilih dengan sengaja, dan rencana keluar yang telah dilatih.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Satu pemasok | Kesederhanaan, bobot negosiasi, integrasi | Risiko konsentrasi, keterkuncian |
| Banyak pemasok | Ketahanan, pilihan | Biaya integrasi, beban koordinasi |
| Kontrak berat penalti | Pemulihan jelas | Bermusuhan; menyembunyikan masalah |
| Kemitraan dengan tujuan bersama | Data jujur, pembelajaran lebih cepat | Butuh kepercayaan dan kematangan; pemulihan kurang jelas |
| Pembayaran berbasis hasil | Menyelaraskan insentif | Hasil sulit didefinisikan dan diukur; manipulasi |
| Pembayaran berbasis masukan | Sederhana, terprediksi | Menghargai upaya, bukan hasil |
| Tinjauan bersama yang sering | Peringatan dini | Biaya waktu |
| Hanya tinjauan tahunan | Biaya rendah | Lambat menangkap masalah |

Jawaban prosanya adalah menyimpan pemulihan kontraktual untuk kasus serius, membangun hubungan sehari-hari di sekitar hasil bersama dan data terbuka, dan memilih konsentrasi dengan sengaja. Cocokkan intensitas manajemen dengan kekritisan pemasok.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Kegagalan pemasok mana yang paling menyakiti pengguna kita, dan apa rencana kita?**
Namai tiga dependensi teratas. Untuk tiap dependensi, tanyakan apa yang akan terjadi dalam gangguan berkepanjangan dan apa rencananya. Fasilitator sebaiknya mencari dependensi tanpa rencana, tanpa pemilik, atau tanpa alternatif teruji. Sepakati satu untuk dikerjakan lebih dulu.

**2. Di mana laporan kontrak yang hijau tidak sepakat dengan apa yang dikatakan pengguna?**
Ambil satu layanan pemasok dan bandingkan ukuran kontrak dengan umpan balik pengguna. Tanyakan mana yang lebih andal dan mengapa. Percakapan sering menemukan tingkat layanan yang mengukur hal yang salah. Sepakati mengangkatnya pada tinjauan bersama berikutnya.

**3. Siapa di tim yang memiliki tiap hubungan pemasok kritis, dan seberapa sering mereka bertemu?**
Periksa register. Jika pemilik belum bertemu pemasok selama berbulan-bulan, tanyakan mengapa. Sepakati irama dan agenda standar untuk yang paling kritis.

**4. Apa yang dibutuhkan untuk meninggalkan pemasok terbesar kita?**
Estimasi waktu, biaya, dan risiko keluar. Tanyakan data, integrasi, dan keterampilan mana yang mengikat Anda. Putuskan apakah ketergantungan itu pilihan sengaja dan apa yang akan mengubahnya.

**5. Bagaimana kita mengetahui insiden pemasok, dan secepat apa?**
Tinjau dua insiden pemasok terakhir dan waktu dari awalnya sampai Anda tahu. Periksa syarat pemberitahuan. Sepakati perbaikan, seperti umpan status bersama atau kontak bernama.

**6. Apa yang kita bagikan kepada pemasok, dan apa yang mereka bagikan kepada kita?**
Daftar data yang diberikan tiap pihak. Bahas berbagi tambahan apa yang akan membantu, seperti perkiraan permintaan atau pemberitahuan perubahan lebih awal. Pertimbangkan kerahasiaan, dan sepakati satu pertukaran untuk memulai.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman bergantung pada pemasok untuk platform, komponen, dan layanan, dan merasakan perubahan pemasok secara langsung. Mereka sebaiknya menjaga dependensi terlihat dalam desain, memberi pemasok pemberitahuan dini atas perubahan permintaan, dan ikut tinjauan bersama. Mereka dapat membangun ketahanan ke dalam layanan mereka, misalnya dengan fallback, agar satu kegagalan pemasok tidak menghentikan segalanya.

### Tim layanan dan operasi

Tim operasi mengelola hubungan sehari-hari: mengangkat insiden, melacak kinerja, dan mengoordinasikan serah terima. Mereka memegang bukti tentang dampak yang diatribusikan ke pemasok dan pengalaman bekerja dengan tiap pemasok. Mereka sebaiknya mencatat atribusi dengan cermat, menjaga saluran pemberitahuan berfungsi, dan ikut latihan keluar.

### Kepemimpinan dan tata kelola

Pemimpin menandatangani kontrak dan menerima risiko. Mereka sebaiknya meminta laporan kekritisan, konsentrasi, dan kesiapan keluar, menetapkan harapan untuk kemitraan, dan menghindari memilih pemasok hanya berdasarkan harga. Tata kelola sebaiknya mewajibkan uji tuntas yang proporsional dengan kekritisan dan bukti bahwa rencana keluar diuji.

### Pelanggan dan pengguna

Pengguna mengalami hasil gabungan jaringan pemasok. Mereka butuh komunikasi jelas ketika masalah pemasok memengaruhi mereka, dan dukungan konsisten terlepas dari pihak mana yang bersalah. Umpan balik mereka adalah pemeriksa apakah kinerja pemasok, seperti dilaporkan, cocok dengan kenyataan.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah grup rumah sakit regional mendukung sistem klinis dengan sekitar 60 pemasok, termasuk penyedia hosting, vendor rekam elektronik, operator jaringan, dan service desk terkelola. Angka di bawah bersifat ilustratif.

Setelah gangguan panjang pada sistem rekam, dewan bertanya berapa banyak dependensi semacam itu ada. Kepala manajemen vendor membangun gambarannya. Register pemasok mencakup 47 dari 60 pemasok yang dikenal dengan kontrak terkini, pemilik, dan tanggal tinjauan, cakupan 78 persen. Uji tuntas terkini untuk 6 dari 14 pemasok kritis. Dari 22 layanan kritis, 9 bergantung pada satu pemasok tanpa alternatif teruji, konsentrasi 41 persen, dan dua pemasok itu berbagi platform hosting yang sama. Service desk terkelola melaporkan pencapaian tingkat layanan 98 persen, sementara kepuasan staf klinis terhadap desk menurun, dan laporan bulanan menunjukkan bahwa insiden yang menunggu lini kedua pemasok dikecualikan dari waktu respons yang diukur. Selama kuartal terakhir, waktu insiden yang diatribusikan ke pemasok berjumlah 53 jam, tiga perempatnya dari dua pemasok. Rencana keluar untuk vendor rekam ada di atas kertas dan tak pernah dilatih.

Kepala manajemen vendor menyepakati perubahan bersama pemilik sistem klinis dan pemasok. Pemasok kritis mendapat tinjauan bersama kuartalan dengan agenda bersama dan data dari kedua sisi. Kontrak service desk diamandemen untuk mengukur waktu penyelesaian dari sudut pandang pengguna, dan pemasok setuju membagikan data antreannya. Survei pengalaman singkat ditambahkan di samping ukuran kontrak. Uji tuntas untuk pemasok kritis pindah ke siklus tahunan dengan permintaan bukti. Tim menjalankan latihan keluar tabletop untuk vendor rekam, yang menemukan bahwa format ekspor data tidak mencakup jejak audit, dan bahwa alternatifnya akan butuh berbulan-bulan untuk disiapkan. Temuan itu masuk ke negosiasi kontrak berikutnya. Grup juga memutuskan dari sembilan dependensi satu pemasok mana yang diterima dengan sengaja, dan mana yang dikurangi.

Setahun kemudian, cakupan register adalah 96 persen, uji tuntas terkini untuk 13 dari 14 pemasok kritis, dan konsentrasi 27 persen dengan setiap kasus tersisa dicatat sebagai keputusan yang diterima. Waktu insiden yang diatribusikan ke pemasok turun menjadi 22 jam per kuartal. Ukuran kontrak service desk dan skor kepuasan klinis kini bergerak bersama. Direktur keuangan meminta klausul yang mengenakan penalti keuangan untuk setiap tingkat layanan yang terlewat pada semua pemasok. Kepala manajemen vendor mengusulkan penalti hanya untuk ukuran kritis terkait keselamatan, dan tujuan bersama untuk sisanya, menjelaskan bahwa penalti menyeluruh membuat pemasok menyembunyikan peristiwa dan berdebat soal pengukuran. Keputusan dicatat, dan templat kontrak diperbarui.

## Sudut pandang sektor

**Startup.** Pemasok kebanyakan cloud dan perkakas perangkat lunak sebagai layanan. Simpan daftar dengan pemilik dan tanggal pembaruan, ketahui data apa yang dipegang masing-masing, dan simpan ekspor data kritis. Pilih pemasok dengan jalur ekspor jelas, karena keterkuncian dini murah diciptakan dan mahal dibatalkan.

**Bisnis kecil.** Beberapa pemasok menopang bisnis, dan pemilik sering mengelola mereka langsung. Simpan kontak dan syarat kontrak di satu tempat, minta pembaruan status dan insiden, dan uji pemulihan dari cadangan yang dipegang di luar pemasok. Kurangi ketergantungan pada satu orang di pemasok.

**Perusahaan besar.** Banyak pemasok dan lapisan memanggil fungsi manajemen pemasok, tingkat kekritisan, dan syarat kontrak standar untuk keamanan, ketahanan, dan keluar. Pakai koordinasi bergaya SIAM di mana pemasok harus bekerja bersama. Simpan peta dependensi pusat dan bagikan dengan tim risiko dan kelangsungan.

**Pemerintah dan sektor publik.** Hukum pengadaan, aturan persaingan, dan persyaratan transparansi membentuk cara pemasok dipilih dan dikelola. Kontrak mungkin panjang, dengan kewajiban pelaporan publik dan persyaratan kedaulatan, aksesibilitas, dan keluar. Dokumentasikan keputusan, laporkan kinerja pemasok sesuai kewajiban, dan rencanakan pengadaan ulang (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah waktu pemilik pemasok dan fungsi koordinasi kecil, register dan data dependensi, upaya penilaian, dan tinjauan bersama. Latihan keluar berbiaya beberapa jam sampai hari per pemasok kritis. Perkakas bisa sesederhana register bersama.

Imbal hasilnya adalah insiden akibat pemasok yang lebih sedikit dan lebih singkat, syarat komersial lebih baik dari negosiasi yang terinformasi, biaya keterkuncian yang dihindari, dan respons yang lebih cepat dan tenang ketika pemasok gagal. Bangun kasus dari data Anda sendiri: jam insiden yang diatribusikan ke pemasok dan biayanya, biaya dan waktu transisi pemasok di masa lalu, dan selisih antara tingkat layanan kontraktual dan pengalaman yang dilaporkan pengguna. Hindari mengutip tingkat kegagalan alih daya industri kecuali Anda dapat menelusuri sumber dan metodenya. Sertakan biaya menjaga opsi kedua tetap hangat, dan bandingkan dengan paparan yang dikurangi (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Menandatangani dan melupakan.** Kontrak melenceng dari kenyataan. Adakan tinjauan reguler dengan pemilik dan data.
- **Hanya memercayai laporan pemasok.** Mengukur apa yang dipilih pemasok. Pantau secara independen dan bandingkan dengan pengalaman pengguna.
- **Hubungan hanya penalti.** Mengurangi kejujuran. Bangun tujuan bersama di samping pemulihan.
- **Tanpa rencana keluar.** Pergi menjadi krisis. Tulis dan uji rencana sebelum dibutuhkan.
- **Konsentrasi tersembunyi.** Beberapa pemasok mungkin berbagi satu platform. Petakan ke penyedia akhir.
- **Menyalahkan dalam tinjauan bersama.** Pemasok menyembunyikan insiden. Tinjau insiden tanpa menyalahkan.
- **Manajemen seragam semua pemasok.** Membuang upaya pada yang kecil dan mengabaikan yang kritis. Bagi menurut kekritisan.
- **Mengabaikan subkontraktor.** Risiko Anda mencakup risiko mereka. Tanyakan dependensi kritis.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Mengenal pemasok | Kontrak tersebar | Register untuk pemasok utama | Register dengan pemilik, kekritisan, dan tanggal tinjauan | Peta dependensi ke subkontraktor; cakupan dan kemutakhiran dilacak | Pandangan dependensi bersama dengan pemasok dan pelanggan |
| Kinerja dan hubungan | Reaktif; sengketa | Laporan bulanan dari pemasok | Ukuran kontrak dan pengalaman dibandingkan; tinjauan bersama reguler | Tindakan dilacak; insiden ditinjau bersama; atribusi disepakati | Pemasok terintegrasi sebagai mitra dengan tujuan bersama dan data terbuka |
| Ketahanan dan keluar | Tidak ada | Syarat keluar di beberapa kontrak | Rencana keluar untuk pemasok kritis | Rencana keluar dilatih; konsentrasi diputuskan dengan sengaja | Alternatif dijaga hangat; latihan bersama dengan pemasok |

## Daftar periksa

- [ ] Register pemasok mendaftar setiap pemasok dengan pemilik, kekritisan, dan tanggal kontrak.
- [ ] Layanan kritis punya peta dependensi yang mencapai subkontraktor kunci.
- [ ] Tingkat layanan kontrak dipasangkan dengan ukuran pengalaman pengguna.
- [ ] Tinjauan bersama dengan pemasok kritis diadakan pada irama dengan agenda standar.
- [ ] Uji tuntas untuk pemasok kritis terkini dan berbasis bukti.
- [ ] Syarat dan saluran pemberitahuan insiden disepakati dan diuji.
- [ ] Waktu insiden yang diatribusikan ke pemasok dicatat dengan atribusi yang disepakati.
- [ ] Konsentrasi diukur dan setiap dependensi satu pemasok adalah keputusan tercatat.
- [ ] Rencana keluar ada untuk pemasok kritis dan dilatih dalam periode.
- [ ] Syarat kontrak mencakup ekspor data, dukungan transisi, dan kepemilikan konfigurasi.

## Prompt AI

**Bangun penilaian kekritisan pemasok.**

```text
Kami punya pemasok ini: [list with what each provides]. Layanan kritis kami
adalah: [list]. Usulkan kriteria untuk menilai kekritisan pemasok (misalnya
kerugian jika tak tersedia, data yang dipegang, kemudahan penggantian), beri skor
tiap pemasok terhadapnya dengan alasan, dan sarankan intensitas manajemen menurut
tingkat. Jangan mengarang fakta tentang pemasok. Daftar asumsi Anda dan apa yang
harus saya konfirmasi dengan pemilik layanan.
```

**Bandingkan ukuran kontrak dengan pengalaman pengguna.**

```text
Untuk layanan pemasok [name], ukuran kontrak dan hasilnya selama [period]
terakhir adalah: [paste]. Data pengalaman pengguna untuk layanan yang sama adalah:
[paste survey scores or comment themes]. Gambarkan di mana keduanya sepakat dan
tidak, beri penjelasan masuk akal untuk tiap ketidaksepakatan, dan sarankan
pertanyaan untuk tinjauan bersama berikutnya. Jangan mengasumsikan niat pemasok.
Daftar asumsi Anda.
```

**Rancang latihan keluar.**

```text
Rancang latihan tabletop setengah hari tentang meninggalkan [supplier] untuk
[service]. Sertakan skenario, peserta, langkah untuk ditelusuri (ekspor data,
alternatif, peralihan, komunikasi), apa yang dicatat (waktu, celah, keputusan),
dan cara mengubah temuan menjadi tindakan dan perubahan kontrak. Jangan
mengasumsikan produk tertentu. Daftar asumsi Anda dan risiko dalam latihan.
```

**Susun agenda tinjauan bersama.**

```text
Susun agenda dan paket data satu halaman untuk tinjauan bersama kuartalan dengan
[supplier] tentang [service]. Sertakan hasil terhadap ukuran kontraktual dan
pengalaman pengguna, insiden dan pembelajaran, risiko, perubahan mendatang di
kedua sisi, dan tinjauan tindakan. Jaga nada kolaboratif. Pakai masukan ini:
[paste]. Daftar asumsi Anda dan butir apa pun yang butuh tinjauan hukum.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik pemasok atau kontrak.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik pemasok membawa vektor manipulasi, pagar pembatas, dan aturan atribusinya.

## Poin penting

- Anda tetap bertanggung jawab atas layanan yang dialihdayakan, jadi kelola pemasok sebagai bagian layanan Anda sendiri.
- Pasangkan ukuran kontrak dengan pengalaman pengguna, dan pantau terlepas dari laporan pemasok.
- Petakan dependensi sampai subkontraktor, dan perlakukan konsentrasi sebagai keputusan yang disengaja.
- Bangun hubungan di sekitar hasil bersama dan tinjauan bersama reguler, dengan pemulihan disimpan untuk kasus serius.
- Rencanakan keluar sebelum menandatangani, dan uji untuk pemasok kritis.
- Tinjau insiden bersama pemasok tanpa menyalahkan dan bagikan data secara terbuka.

## Referensi dan bacaan lanjutan

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Vendor management](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Exit strategy](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
