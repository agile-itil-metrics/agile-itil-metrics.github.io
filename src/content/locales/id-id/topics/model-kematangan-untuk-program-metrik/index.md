# Model kematangan untuk program metrik

**Pakai skala lima tingkat bersama untuk menggambarkan di mana program metrik berada dan memilih langkah kecil berikutnya, tidak pernah sebagai skor untuk dipamerkan, dibandingkan, atau disertifikasi.**

## Gambaran umum dan motivasi

Setiap topik lain dalam buku ini diakhiri tabel kematangan kecil untuk pokok bahasannya. Topik ini menerapkan skala yang sama pada program metrik secara keseluruhan. Pertanyaannya bukan seberapa baik waktu insiden suatu tim. Pertanyaannya adalah seberapa baik organisasi mengumpulkan, membaca, dan bertindak atas ukuran sama sekali: apakah definisi dibagikan, apakah data dipercaya, apakah angka menuntun pada keputusan, dan apakah orang yang diukur memandang program sebagai bantuan.

Model kematangan adalah uraian tahap yang dapat dilalui organisasi seiring suatu praktik berkembang. Contoh paling terkenal dalam perangkat lunak adalah [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model), yang tumbuh dari pekerjaan di Software Engineering Institute dan menyebar luas. Pengaruhnya besar, begitu pula kritik yang menyusul. Organisasi mengejar tingkatnya dan bukan kemampuannya, auditor menilai dokumen, dan model itu dipakai sebagai lencana. Pemakaian yang bertanggung jawab atas model kematangan apa pun menjaga tiga peringatan dalam pandangan. Skala adalah alat percakapan dan bukan sertifikasi. Lebih tinggi tidak selalu lebih baik, karena tingkat yang tepat bergantung pada konteks. Dan model bukan pengganti hasil: program matang yang tidak memperbaiki layanan adalah kegagalan yang sangat rapi, dan tingkat yang ditampilkan sebagai lencana sangat mirip [metrik vanitas](https://en.wikipedia.org/wiki/Vanity_metric), angka yang tampak baik dan tak menginformasikan keputusan.

Skala yang dipakai di sini adalah yang dibagikan di seluruh buku dan *Agile ITIL Guide*: Memulai, Berkembang, Terstandar, Terkelola, dan Terorkestrasi (lihat model kematangan bersama dalam spesifikasi). Ia sengaja tidak sama dengan skala kematangan proses di ITIL, di ISO/IEC 33000, atau di Capability Maturity Model, dan tim sebaiknya tidak mengklaim skor di kerangka mana pun itu atas dasar yang ini.

Tujuan agile menunjuk cara memakainya. Perbaikan berkelanjutan berarti model untuk menemukan langkah berikutnya, bukan untuk mencapai keadaan akhir. Evolusi berkelanjutan berarti program yang mencapai Terorkestrasi tahun lalu mungkin mundur jika orang pergi atau prioritas bergeser, jadi penilaian diri diulang. Keterlibatan pemangku kepentingan berkelanjutan berarti penilaian dilakukan bersama tim dan bukan terhadap mereka. Kecepatan berkelanjutan berarti program mengambil satu langkah sekaligus dan tidak mencoba melompati tiga tingkat dalam satu kuartal. Dan membangun di sekitar individu termotivasi berarti orang yang mengerjakan pekerjaan menilai apakah program membantu mereka. Ini logika yang sama seperti praktik perbaikan berkelanjutan di ITIL, ketika organisasi memeriksa keadaan saat ini, menetapkan arah, dan memperbaiki dalam langkah kecil, kebiasaan yang dekat dengan [kaizen](https://en.wikipedia.org/wiki/Kaizen), gagasan Jepang tentang perbaikan berkelanjutan oleh semua orang. Gagasan yang lebih umum adalah [proses perbaikan berkelanjutan](https://en.wikipedia.org/wiki/Continual_improvement_process) (lihat topik 9.5, Metrik perbaikan berkelanjutan).

Model ini punya jebakan khusus dalam konteks metrik. Program yang dinilai pada metriknya sendiri mengundang distorsi yang justru diperingatkannya. Jika “jumlah ukuran dengan definisi” menjadi target, definisi berlipat ganda. Pendekatan dalam topik ini karena itu memakai bukti dari pekerjaan (keputusan apa yang berubah, apa kata tim) selain hitungan, dan menjaga penilaian dimiliki tim, yang paling sedikit untung dari menggelembungkannya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Formulir penilaian pendamping untuk tim muncul di lampiran (lihat topik 12.5, Penilaian mandiri kematangan).

## Prinsip utama

- **Skala adalah alat percakapan.** Ia membantu orang menggambarkan masa kini dan memilih langkah berikutnya, dan bukan untuk menilai, memeringkat, atau menyertifikasi.
- **Nilai bersama tim.** Penilaian diri, dibahas terbuka, lebih akurat daripada penilaian eksternal.
- **Nilai berdasarkan bukti.** Tanyakan keputusan apa yang berubah, apa kata orang, dan apa yang ditunjukkan data, selain dokumen apa yang ada.
- **Dimensi dapat berbeda.** Program dapat kuat dalam perkakas dan lemah dalam kepercayaan. Laporkan profilnya, bukan satu angka.
- **Bergerak satu langkah sekaligus.** Bidik tingkat berikutnya dalam satu atau dua dimensi, bukan segalanya sekaligus.
- **Lebih tinggi tidak selalu lebih baik.** Pilih tingkat yang cocok dengan ukuran, risiko, dan kebutuhan organisasi.
- **Harapkan kemunduran.** Pergantian staf, reorganisasi, dan tekanan dapat mendorong program mundur. Nilai ulang secara teratur.
- **Jangan pernah menerbitkan tabel liga tim.** Agregasikan untuk program dan bagikan hasil tim hanya kepada tim.

## Definisi metrik

Ukuran di bawah menggambarkan kesehatan program dan penilaiannya. Ukuran itu untuk tim program dan sponsor, dan dibaca sebagai sinyal untuk diskusi.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Partisipasi penilaian | Porsi tim peserta yang menyelesaikan penilaian diri dengan diskusi mereka sendiri | tim yang menyelesaikan dan membahas / tim peserta | persen | Catatan penilaian | Perbaikan berkelanjutan | Renungan dan retrospektif | Dua kali setahun |
| Profil menurut dimensi | Distribusi tingkat penilaian diri tim di tiap dimensi, ditunjukkan sebagai rentang dan bukan satu skor | hitungan tim di tiap tingkat, per dimensi | tim per tingkat | Penilaian diri, diagregasi | Perbaikan berkelanjutan; tata kelola | Pekerjaan terlihat | Dua kali setahun |
| Tindakan perbaikan dari penilaian | Porsi langkah berikutnya yang disepakati yang selesai, dibuang dengan alasan, atau masih berjalan | tindakan ditutup atau dialasankan / tindakan disepakati | persen | Register perbaikan | Perbaikan berkelanjutan | Eksperimen kecil | Kuartalan |
| Bukti keputusan | Porsi ukuran bersampel yang timnya dapat menyebut keputusan atau pilihan sadar yang diinformasikan ukuran itu pada kuartal terakhir | ukuran dengan keputusan bernama / ukuran yang disampel | persen | Wawancara tim; catatan tinjauan | Perbaikan berkelanjutan | Bukti di atas seremoni | Kuartalan |
| Kepercayaan pada definisi dan data | Kesepakatan tingkat tim bahwa definisi jelas dan data benar | persen yang setuju pada survei tim singkat; tingkat respons ditunjukkan | persen | Survei tim anonim | Manajemen pengetahuan; manajemen informasi | Pemahaman bersama | Dua kali setahun |
| Waktu ke tingkat berikutnya (deskriptif) | Waktu berlalu bagi tim untuk menaikkan satu dimensi satu tingkat di mana mereka memilihnya | median bulan dari langkah yang disepakati sampai penilaian ulang tim | bulan | Riwayat penilaian | Perbaikan berkelanjutan | Kecepatan berkelanjutan | Tahunan |
| Beban penilaian | Jam yang dimakan penilaian per tim | median jam per tim | jam | Estimasi waktu dari tim | Perbaikan berkelanjutan | Kecepatan berkelanjutan | Dua kali setahun |

Partisipasi diukur sebagai penyelesaian dengan diskusi, karena formulir yang diisi sendirian sedikit bicara. Profil adalah rentang dan tidak pernah dirata-ratakan menjadi satu angka kematangan. Waktu ke tingkat berikutnya bersifat deskriptif: pendakian cepat mungkin mencerminkan penilaian diri yang digelembungkan, dan yang lambat mungkin mencerminkan kehati-hatian yang pantas. Beban penilaian adalah pemeriksaan atas penilaian itu sendiri, yang sebaiknya tidak lebih dari satu atau dua jam per tim.

## Rekomendasi

### Pakai skala dengan baik

**1. Definisikan dimensi program metrik.** Himpunan yang bisa dikerjakan punya enam dimensi: (a) pertanyaan dan tujuan, apakah ukuran menjawab pertanyaan yang diajukan audiens; (b) definisi dan kepemilikan, apakah ukuran punya definisi tertulis dan pemilik; (c) data dan perkakas, apakah data akurat, tepat waktu, dan portabel; (d) pemakaian dalam keputusan, apakah angka menginformasikan pilihan; (e) kepercayaan dan rasa aman, apakah orang percaya data membantu mereka; dan (f) tinjauan dan evolusi, apakah program memangkas dirinya sendiri. Enam cukup untuk berguna dan cukup sedikit untuk dibahas dalam satu jam.

**2. Gambarkan seperti apa tiap tingkat.** Tabel di bagian “Model kematangan” di bawah memberi uraian singkat untuk tiap dimensi pada tiap tingkat. Perlakukan sebagai pemicu. Tim sebaiknya menyesuaikan kata-katanya dengan konteksnya sendiri dan menulis contohnya sendiri.

**3. Jangan merata-ratakan.** Satu skor keseluruhan menyembunyikan pola yang penting. Program dengan kematangan perkakas tinggi dan kepercayaan rendah berada dalam situasi berbeda dari yang sebaliknya, dan langkah berikutnya berbeda. Tunjukkan profil.

### Nilai bersama dan bukan terhadap tim

**4. Jadikan percakapan satu jam.** Kumpulkan tim dengan tabel. Minta tiap orang menandai di mana mereka pikir tim berada di tiap dimensi, secara pribadi, lalu bandingkan. Bahas perbedaan, karena mengungkap pengalaman berbeda atas program yang sama. Sepakati pandangan tim, catat bukti di baliknya, dan pilih satu atau dua langkah berikutnya.

**5. Minta bukti.** Untuk tiap tingkat yang diklaim, minta contoh. “Kami memakai angka dalam keputusan” mengundang pertanyaan “Keputusan mana kuartal lalu?” Pakai ukuran bersampel dan wawancara untuk memeriksa. Ini menghormati orang dan menjaga penilaian dari melenceng ke angan-angan.

**6. Jaga hasil bersama tim.** Profil tim milik tim. Program membagikan rentang teragregasi dan tema umum, dan bukan peringkat. Jelaskan bahwa penilaian tidak memengaruhi pendanaan, kedudukan, atau tinjauan. Jika memengaruhi, tim akan menggelembungkannya dan nilainya hilang (lihat topik 11.3, Meluncurkan metrik tanpa menumbuhkan ketakutan).

### Pilih langkah berikutnya

**7. Pilih dimensi yang membatasi yang lain.** Kepercayaan dan rasa aman sering membatasi segalanya: tanpanya, data terdistorsi dan keputusan dicurigai. Definisi dan kepemilikan sering membatasi data dan pemakaian. Pola umum adalah memperkuat kepercayaan dan definisi lebih dulu, lalu data, lalu pemakaian dan tinjauan. Cari dimensi tempat perbaikan kecil akan membuka yang lain.

**8. Tetapkan langkah kecil yang konkret.** Langkah berikutnya sebaiknya yang dapat diselesaikan tim dalam satu kuartal dan dikenali: “sepakati piagam,” “tulis definisi untuk empat ukuran kami,” “otomatisasi dua umpan,” “adakan tinjauan bulanan tempat kami mencatat keputusan.” Hindari langkah seperti “capai Tingkat 4.” Tingkat menggambarkan keadaan, dan langkah menggambarkan pekerjaan.

**9. Kaitkan langkah dengan register perbaikan.** Taruh tindakan di tempat yang sama dengan pekerjaan perbaikan lain, dengan pemilik dan tanggal, dan tinjau kemajuan dalam percakapan perbaikan reguler (lihat topik 9.5, Metrik perbaikan berkelanjutan). Langkah yang tak didanai atau dijadwalkan tidak akan terjadi.

### Jaga tetap jujur dan ringan

**10. Kalibrasi lintas tim tanpa memeringkat mereka.** Adakan sesi singkat tempat tim membagikan contoh apa yang mereka sebut Tingkat 3 dalam suatu dimensi. Bahas perbedaan standar. Tujuannya pemahaman bersama, bukan skor yang sama. Rotasi fasilitator, dan undang tim dari luar program untuk menantang kata-katanya.

**11. Nilai ulang pada irama, dan sebagai respons atas peristiwa.** Dua kali setahun cukup bagi sebagian besar program. Nilai ulang setelah reorganisasi, perubahan perkakas, atau pelanggaran piagam, karena ini dapat menggerakkan kepercayaan ke arah mana pun. Awasi kemunduran dan perlakukan sebagai informasi, bukan kegagalan.

**12. Pensiunkan atau revisi modelnya sendiri.** Tiap tahun, tanyakan tim apakah dimensi dan uraian tingkat masih cocok. Ubah kata yang membingungkan, dan buang yang tak dipakai siapa pun. Model yang tak berubah dalam lima tahun mungkin menggambarkan program yang tak lagi ada.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Partisipasi penilaian | Menyelesaikan formulir untuk memenuhi kuota; satu orang mengisi untuk tim | Wajibkan diskusi tim; minta bukti di balik tiap klaim |
| Profil menurut dimensi | Menggelembungkan tingkat agar tampak baik; sengaja merendahkan agar mendapat bantuan | Jangan kaitkan dengan pendanaan atau kedudukan; minta bukti; kalibrasi secara terbuka |
| Tindakan perbaikan dari penilaian | Memilih langkah remeh untuk ditutup; menutup tanpa mengerjakan | Tinjau ukuran dan nilai langkah; periksa hasil pada penilaian berikutnya |
| Bukti keputusan | Mengarang keputusan setelah kejadian; mendaftar keputusan tanpa konsekuensi | Minta tanggal dan orang yang terlibat; terima “memilih tidak berbuat apa-apa” sebagai keputusan |
| Kepercayaan pada definisi dan data | Melatih responden; respons rendah menyembunyikan ketidakpuasan | Anonimitas dan ukuran kelompok minimum; tunjukkan tingkat respons; bicara langsung dengan tim |
| Waktu ke tingkat berikutnya (deskriptif) | Mempercepat klaim kemajuan; menyembunyikan kemunduran | Jaga deskriptif; baca bersama bukti; catat kemunduran tanpa hukuman |
| Beban penilaian | Melewatkan diskusi untuk memangkas jam | Lacak jam bersama partisipasi dan mutu bukti |

Pembacaan yang sehat menunjukkan profil dengan campuran tingkat, dengan kepercayaan dan definisi naik sebelum perkakas dan kemasan, langkah berikutnya yang kecil dan selesai, keputusan yang dapat disebut tim, dan catatan jujur kemunduran sesekali.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Penilaian diri tim | Jujur, dimiliki, cepat | Subjektif; butuh kalibrasi |
| Penilaian eksternal | Konsisten; independen | Mahal; mengundang berakting untuk penilai |
| Satu skor keseluruhan | Mudah dikomunikasikan | Menyembunyikan pola; mengundang target |
| Profil menurut dimensi | Menunjukkan di mana bertindak | Lebih sulit diringkas |
| Penilaian tahunan | Ringan | Lambat memperhatikan kemunduran |
| Dua kali setahun dengan pemicu peristiwa | Responsif | Lebih banyak upaya |
| Dikaitkan dengan pendanaan | Memperoleh perhatian | Penggelembungan dan manipulasi |
| Dijaga terpisah dari pendanaan | Data jujur | Butuh cara lain memperoleh dukungan |

Jawaban prosanya adalah menjalankan penilaian diri ringan dengan bukti, melaporkan profil dan rentang, menjaga hasil bersama tim, dan mengikat langkah berikutnya pada register perbaikan, bukan pada pendanaan atau kedudukan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Dari enam dimensi, mana yang akan kita sebut paling lemah, dan apa yang membuat kita mengatakannya?**
Minta tiap orang memilih satu secara pribadi lalu berbagi. Fasilitator sebaiknya meminta contoh terbaru. Cari pola, dan sepakati dimensi mana yang membatasi yang lain.

**2. Dapatkah kita menyebut keputusan dari kuartal lalu yang diubah oleh suatu ukuran?**
Daftar. Jika daftarnya pendek, tanyakan mengapa. Bahas apakah masalahnya ukuran, data, atau kebiasaan melihat.

**3. Di mana kita menempatkan diri pada kepercayaan dan rasa aman, dan bagaimana kita tahu?**
Lihat laporan nyaris celaka, tantangan, dan hasil survei. Bandingkan dengan cara orang berbicara dalam praktik. Sepakati satu hal yang dapat dilakukan pemimpin untuk menggesernya.

**4. Seperti apa langkah berikutnya yang kecil dan konkret untuk dimensi terlemah kita?**
Susun dalam satu kalimat, dengan pemilik dan tanggal. Periksa bahwa dapat diselesaikan dalam satu kuartal. Sepakati bagaimana kita akan tahu ia berhasil.

**5. Apa yang akan membuat penilaian ini terasa seperti ancaman, dan bagaimana kita mencegahnya?**
Bahas pemakaian hasil yang akan ditakuti orang. Tuliskan untuk apa hasil tidak akan pernah dipakai. Periksa bahwa pimpinan program setuju.

**6. Adakah tingkat yang tak perlu kita capai?**
Pikirkan ukuran, risiko, dan tujuan kita. Gambarkan tingkat yang cukup baik untuk sekarang dan sinyal yang akan memberi tahu kita untuk meninjau kembali.

## Empat perspektif

### Tim produk dan pengiriman

Tim menilai diri sendiri, memilih langkah berikutnya, dan menyimpan hasilnya. Mereka sebaiknya memakai percakapan untuk mengungkap perbedaan pengalaman, meminta bukti, dan menetapkan langkah cukup kecil untuk diselesaikan. Mereka sebaiknya menolak upaya apa pun mengubah profil menjadi peringkat.

### Tim layanan dan operasi

Tim operasi memikul beban data dan insiden yang berat dan dapat melihat di mana program mendukung atau membebani mereka. Mereka sebaiknya mencatat di mana perkakas atau definisi menghalangi pekerjaan mereka, meminta agar data siaga dan insiden ditangani dengan hati-hati, dan memberi umpan balik terus terang tentang beban penilaian.

### Kepemimpinan dan tata kelola

Pemimpin menyponsori program dan menerima gambaran agregat. Mereka sebaiknya meminta profil dan tema umum, menolak meminta satu skor, mendanai langkah berikutnya yang dipilih tim, dan tidak mengaitkan pendanaan atau kedudukan dengan penilaian. Mereka juga sebaiknya meneladankan perilaku dengan menggambarkan keputusan yang diinformasikan metrik.

### Pelanggan dan pengguna

Pelanggan dan pengguna diuntungkan ketika program memperbaiki layanan dan ketika umpan balik mereka menjadi bagian ukuran. Di mana mereka adalah mitra, mereka dapat ikut menilai ukuran yang menyangkut mereka, misalnya kegunaan survei kepuasan, dan meninjau bagaimana data mereka dipakai.

## Dalam praktik: contoh ITIL agile

Sebuah grup asuransi nasional punya 20 tim pengiriman dan dukungan dan program metrik yang telah berjalan 18 bulan. Sponsor meminta “skor kematangan untuk tiap tim” untuk memandu investasi. Pimpinan program waspada, mengingat bagaimana penilaian bergaya audit sebelumnya membuat tim menyiapkan map dokumen. Angka di bawah bersifat ilustratif.

Pimpinan program mengusulkan sebagai gantinya profil lintas enam dimensi, dinilai tim dalam percakapan satu jam dengan fasilitator dari luar tim, dengan hasil disimpan tim. Ia memberi tahu sponsor bahwa program akan melaporkan rentang dan tema umum, dan bahwa tidak ada profil tim yang akan dikaitkan dengan pendanaan. Sponsor setuju, dan keputusan dicatat.

Sembilan belas dari 20 tim menyelesaikan penilaian dengan diskusi, jadi partisipasi 95 persen. Profil menunjukkan rentang: dalam pertanyaan dan tujuan, sebagian besar tim berada pada Tingkat 2 atau 3; dalam definisi dan kepemilikan, sebaran dari 1 sampai 4; dalam data dan perkakas, kebanyakan 3; dalam pemakaian dalam keputusan, kebanyakan 2; dalam kepercayaan dan rasa aman, terbelah antara 2 dan 4; dan dalam tinjauan dan evolusi, kebanyakan 1 atau 2. Pemeriksaan bukti mengungkap sesuatu. Sebelas tim mengklaim Tingkat 3 untuk pemakaian dalam keputusan, tetapi ketika diminta menyebut keputusan dari kuartal terakhir yang diinformasikan suatu ukuran, hanya enam yang bisa. Pimpinan program mencatat ini tanpa menghakimi, dan menjadi tema: tim punya dasbor dan jarang mengadakan tinjauan yang mencatat keputusan.

Langkah berikutnya kecil. Delapan tim memilih tinjauan bulanan dengan log keputusan. Empat memilih menulis definisi untuk ukuran mereka. Tiga memilih menyepakati piagam. Enam bulan kemudian, 14 dari 17 langkah yang disepakati selesai, satu dibuang dengan alasan, dan dua sedang berjalan. Penilaian ulang menunjukkan bukti keputusan naik dari 38 persen menjadi 71 persen ukuran bersampel, dan survei kepercayaan bergerak dari 54 menjadi 67 persen kesepakatan. Satu tim mundur dalam kepercayaan setelah reorganisasi, dan fasilitator mencatatnya sebagai informasi, bukan kegagalan. Setahun kemudian sponsor kembali meminta satu skor untuk laporan tahunan. Pimpinan program menawarkan profil satu halaman dengan rentang, tiga tema, dan langkah perbaikan yang selesai. Sponsor menerima, dan laporan menyatakan dengan jelas bahwa skala adalah alat percakapan.

## Sudut pandang sektor

**Startup.** Penilaian formal kemungkinan berlebihan. Percakapan singkat dua kali setahun atas enam dimensi, dengan satu atau dua langkah kecil, sudah cukup. Waspadai ketakutan bahwa ukuran akan dipakai untuk penghakiman, karena tim kecil merasakannya tajam.

**Bisnis kecil.** Pakai dimensi sebagai daftar periksa untuk berbincang dengan pemilik dan staf. Tanyakan apakah beberapa ukuran yang Anda simpan menjawab pertanyaan nyata, apakah orang tahu artinya, dan apakah dipakai. Pilih satu langkah. Jangan menghabiskan lebih dari satu jam.

**Perusahaan besar.** Skala butuh proses ringan dan konsisten: dimensi yang sama, penilaian diri dengan fasilitator, sesi kalibrasi, dan profil teragregasi. Tahan kantor penilaian pusat. Kaitkan langkah berikutnya dengan register perbaikan, dan laporkan rentang dan tema kepada sponsor. Jaga agar skala tidak berubah menjadi latihan kepatuhan.

**Pemerintah dan sektor publik.** Badan audit dan pengawas mungkin meminta skor kematangan. Jelaskan perbedaan antara alat percakapan internal ini dan kerangka formal apa pun. Jaga hasil tim bersama tim, berikan agregat kepada pengawas, dan bersikaplah transparan tentang apa skala itu dan bukan (lihat topik 8.3, Metrik kepatuhan dan audit).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya kecil: satu atau dua jam per tim dua kali setahun, fasilitator, sedikit analisis, dan upaya menjalankan langkah perbaikan. Biaya yang lebih besar datang ketika model disalahgunakan, dengan konsultan, kantor penilaian, dan map bukti.

Imbal hasilnya datang dari penyasaran upaya yang lebih baik. Alih-alih menyebar investasi ke semua dimensi, program menemukan dimensi pembatas dan menanganinya. Imbal hasil lain mencakup pengenalan kemunduran lebih awal, bahasa bersama antar-tim, dan langkah perbaikan yang dipilih dan dimiliki tim. Bangun kasus dari data Anda sendiri: langkah perbaikan yang selesai, perubahan dalam bukti keputusan dan hasil survei kepercayaan, dan upaya yang dimakan penilaian. Hindari mengutip klaim terbitan tentang imbal hasil peningkatan kematangan tanpa sumber yang dapat ditelusuri dan relevansinya dengan konteks Anda (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Lencana kematangan.** Tingkat menjadi tujuan. Pakai sebagai percakapan, dengan bukti.
- **Satu angka keseluruhan.** Pola hilang dan target muncul. Tunjukkan profil.
- **Penilaian oleh auditor.** Tim menyiapkan dokumen untuk berakting. Pakai penilaian diri dengan fasilitator.
- **Mengaitkan skor dengan pendanaan.** Penggelembungan menyusul. Jaga penilaian terpisah.
- **Mengejar tingkat teratas.** Tidak setiap program butuh Terorkestrasi. Pilih yang cocok.
- **Menilai dan melupakan.** Tak ada langkah menyusul. Kaitkan langkah dengan register perbaikan.
- **Penilaian terlalu panjang.** Beban tumbuh dan mutu turun. Jaga dalam satu jam.
- **Mengabaikan kemunduran.** Program melorot setelah perubahan. Nilai ulang pada irama dan setelah peristiwa.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Pertanyaan dan tujuan | Ukuran dikumpulkan karena data ada | Sebagian tim menyatakan pertanyaan yang mereka ajukan | Audiens dan pertanyaan ditulis; ukuran dipetakan padanya | Cakupan pertanyaan ditinjau; pertanyaan tak terjawab menggerakkan ukuran baru | Audiens, termasuk pelanggan dan pemasok, membentuk ukuran; pertanyaan berevolusi bersama layanan |
| Definisi dan kepemilikan | Definisi bervariasi menurut orang | Sebagian tertulis; pemilik informal | Katalog dengan definisi, sumber, pemilik, dan batas untuk tiap ukuran | Kelengkapan definisi dan tantangan dikelola | Definisi dimiliki bersama lintas tim dan pemasok; direvisi ketika berhenti menginformasikan keputusan |
| Data dan perkakas | Manual dan rapuh | Sebagian umpan otomatis | Pipeline teruji, penyimpanan bersama, data portabel | Keandalan, rekonsiliasi, dan kesiapan keluar dikelola | Pipeline terfederasi dengan kontrak bersama; sumber diperbaiki dari umpan balik |
| Pemakaian dalam keputusan | Angka ditampilkan, jarang dipakai | Dipakai dalam sebagian tinjauan | Tinjauan reguler yang mencatat keputusan | Bukti keputusan dilacak dan ditindaklanjuti | Keputusan dikaitkan lintas tim dengan hasil; pembelajaran dibagikan |
| Kepercayaan dan rasa aman | Takut atau acuh | Jaminan lisan | Piagam tertulis; tampilan individu mati; survei rasa aman | Pelanggaran ditinjau secara terbuka; sinyal keterusterangan dikelola | Kepercayaan bersifat rutin; program dibentuk staf dan mitra |
| Tinjauan dan evolusi | Tidak ada | Pembersihan sesekali | Tinjauan berkala bersama tim; aturan pensiun | Langkah penilaian didanai dan selesai | Program membaik terus-menerus, dengan perubahan dari semua orang |

## Daftar periksa

- [ ] Enam dimensi disepakati, dan uraian tingkat disesuaikan dengan konteks kita.
- [ ] Tiap tim menilai diri dalam diskusi sekitar satu jam, dengan fasilitator.
- [ ] Setiap tingkat yang diklaim didukung contoh atau pemeriksaan bersampel.
- [ ] Hasil ditunjukkan sebagai profil dan rentang, dan tidak pernah sebagai satu skor rata-rata atau peringkat.
- [ ] Hasil tim tetap bersama tim, dan agregat dibagikan kepada sponsor.
- [ ] Penilaian tidak dikaitkan dengan pendanaan, kedudukan, atau tinjauan kinerja, dan ini tertulis.
- [ ] Tiap tim menyepakati satu atau dua langkah kecil berikutnya, dengan pemilik dan tanggal.
- [ ] Langkah berikutnya dilacak di register perbaikan.
- [ ] Penilaian ulang terjadi setidaknya dua kali setahun dan setelah peristiwa besar.
- [ ] Model itu sendiri ditinjau tiap tahun bersama tim.

## Prompt AI

**Siapkan percakapan penilaian diri.**

```text
Siapkan rencana fasilitasi satu jam untuk penilaian diri tim atas program
metriknya lintas enam dimensi: pertanyaan dan tujuan, definisi dan kepemilikan,
data dan perkakas, pemakaian dalam keputusan, kepercayaan dan rasa aman, serta
tinjauan dan evolusi. Pakai lima tingkat: Memulai, Berkembang, Terstandar,
Terkelola, Terorkestrasi. Sertakan penandaan pribadi, perbandingan, pertanyaan
bukti, dan menyepakati satu atau dua langkah kecil berikutnya. Jangan menghasilkan
skor. Daftar asumsi Anda.
```

**Ubah dimensi lemah menjadi langkah.**

```text
Tim kami menilai diri pada Tingkat [n] pada [dimension] program metriknya. Bukti:
[paste]. Sarankan tiga langkah kecil, masing-masing dapat diselesaikan dalam satu
kuartal, yang dapat menggerakkan kami menuju Tingkat [n+1]. Untuk tiap langkah,
gambarkan pemilik, upaya, manfaat yang mungkin, dan cara kami mengetahui ia
berhasil. Jangan menjanjikan hasil. Daftar asumsi Anda dan risiko.
```

**Periksa bukti untuk tingkat yang diklaim.**

```text
Sebuah tim mengklaim Tingkat [n] pada [dimension] dan memberi bukti ini: [paste].
Bertindaklah sebagai rekan yang ingin tahu. Daftar pertanyaan untuk menguji
apakah bukti mendukung klaim, contoh apa yang meyakinkan, dan tanda apa yang
menyarankan klaim terlalu optimistis. Jangan menghakimi tim. Daftar asumsi Anda.
```

**Ringkas profil tanpa memeringkat.**

```text
Berikut hitungan teragregasi tim pada tiap tingkat untuk tiap dimensi: [paste].
Tulis ringkasan setengah halaman untuk sponsor yang menggambarkan rentang, tiga
tema umum, dan langkah perbaikan yang dipilih tim. Jangan memeringkat tim,
menghasilkan satu skor, atau mengklaim sebab tanpa bukti. Daftar catatan tentang
penilaian diri.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk memetakan ukuran program ke dimensi kematangan dan pagar pembatas berpasangannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa penilaian kematangan melaporkan profil, menjaga hasil bersama tim, dan menghindari satu skor.

## Poin penting

- Pakai skala lima tingkat bersama sebagai alat percakapan, tidak pernah sebagai lencana, peringkat, atau sertifikasi.
- Laporkan profil lintas enam dimensi dan bukan satu skor rata-rata.
- Nilai bersama tim, minta bukti, dan jaga hasil tiap tim bersama tim.
- Pilih langkah kecil berikutnya pada dimensi yang membatasi yang lain, sering kepercayaan dan definisi.
- Lacak langkah di register perbaikan, dan nilai ulang secara teratur karena program mundur.
- Lebih tinggi tidak selalu lebih baik, dan hasil lebih penting daripada tingkat.

## Referensi dan bacaan lanjutan

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
