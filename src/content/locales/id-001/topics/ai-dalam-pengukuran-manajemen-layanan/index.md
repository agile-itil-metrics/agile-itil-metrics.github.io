# AI dalam pengukuran manajemen layanan

**Sebelum AI mengubah pekerjaan, tuliskan seperti apa pekerjaan hari ini, lalu ukur setiap pemakaian AI terhadap garis dasar itu dan terhadap pekerjaan sebanding yang dikerjakan tanpanya, karena klaimnya akan besar dan buktinya biasanya kecil.**

## Gambaran umum dan motivasi

Kecerdasan buatan kini berada di dalam banyak perkakas yang dipakai tim untuk membangun dan menjalankan layanan. [Kecerdasan buatan](https://en.wikipedia.org/wiki/Artificial_intelligence) (AI) adalah kemampuan sistem komputasi untuk melakukan tugas yang dikaitkan dengan kecerdasan manusia. Di dalamnya, sistem [pembelajaran mesin](https://en.wikipedia.org/wiki/Machine_learning) mempelajari pola dari data, dan sistem [AI generatif](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), yang sering dibangun di atas [model bahasa besar](https://en.wikipedia.org/wiki/Large_language_model), menghasilkan teks, kode, dan konten lain sebagai tanggapan atas prompt. Dalam manajemen layanan TI (ITSM) kemampuan ini muncul dalam triase tiket, peringkasan insiden, penyusunan artikel pengetahuan, saran respons untuk service desk, pelengkapan dan tinjauan kode dalam pipeline pengiriman, deteksi anomali dalam pemantauan, dan asisten percakapan untuk pengguna. [AIOps](https://en.wikipedia.org/wiki/AIOps) adalah nama yang sering diberikan pada penerapan AI pada data operasi TI.

Klaim yang dibuat untuk perkakas ini besar, dan bukti dalam organisasi mana pun biasanya kecil. Vendor melaporkan waktu yang dihemat. Pengadopsi awal melaporkan antusiasme. Eksekutif meminta peningkatan efisiensi yang dijanjikan. Tim sementara itu melaporkan bahwa keluaran perlu diperiksa, bahwa sebagian saran salah dengan penuh keyakinan, dan bahwa pekerjaan terasa berbeda. Pengukuran adalah cara organisasi mengetahui mana yang benar untuk pekerjaannya sendiri. Bagian buku ini menganggap AI serius sebagai sesuatu untuk diukur, dengan pagar pembatas yang sama seperti keluarga metrik lain.

AI mengubah masalah pengukuran dalam empat cara.

- **Volume dan kecepatan naik sementara mutu menjadi lebih sulit terlihat.** AI dapat menghasilkan tiket, balasan, kode, dan dokumen dengan cepat, sehingga ukuran keluaran naik. Apakah keluarannya baik adalah pertanyaan terpisah (lihat topik 10.4, Inflasi metrik dan pengenceran kualitas).
- **Garis dasar lenyap.** Begitu AI dipakai harian, Anda tak dapat memulihkan seperti apa pekerjaan tanpanya. Garis dasar harus ditangkap sebelum perubahan, atau kelompok pembanding harus ada.
- **Manusia tetap dalam lingkaran, dengan konsekuensi.** Rancangan [human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop) menjaga seseorang bertanggung jawab atas hasil. Orang yang meninjau keluaran mesin mungkin terlalu mudah tunduk padanya, pola yang dikenal sebagai [bias otomatisasi](https://en.wikipedia.org/wiki/Automation_bias), atau mungkin menghabiskan lebih banyak waktu memeriksa daripada yang dihemat.
- **Keluaran dapat fasih dan salah.** [Halusinasi](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) adalah keluaran yakin yang tak didukung masukan atau fakta. Ukuran harus mencakup pemeriksaan kebenaran, yang disampel oleh seseorang.

Cara kerja agile dan ITIL sama-sama memberi sikap terhadap ini. Tujuan agile tentang pengiriman berkelanjutan, perbaikan berkelanjutan, dan evolusi berkelanjutan menyarankan memperlakukan setiap pemakaian AI sebagai eksperimen kecil: nyatakan manfaat yang diharapkan, coba dengan beberapa orang yang bersedia, bandingkan, dan putuskan. Prinsip panduan ITIL untuk maju secara iteratif dengan umpan balik menunjuk ke arah yang sama, dan penekanannya pada nilai bertanya hasil apa yang membaik bagi pengguna dan bisnis, bukan seberapa banyak teks dihasilkan. Tujuan orang yang termotivasi dilayani ketika AI meringankan pekerjaan membosankan dan menghormati pertimbangan mereka, dan tidak dilayani ketika AI menjadi cara menaikkan kecepatan atau memantau orang yang memakainya. Kecepatan berkelanjutan berarti waktu yang dihemat sebaiknya tidak diam-diam diubah menjadi permintaan lebih banyak.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku pada AI dalam bentuknya yang paling tajam. Jika “adopsi AI” atau “porsi kode buatan AI” menjadi target, orang akan memakai perkakas di tempat ia tak membantu, dan mutu akan membayar angkanya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Topik ini mencakup fondasi: di mana AI masuk ke pekerjaan, garis dasar apa yang ditangkap, dan ukuran mana yang menunjukkan apakah pemakaian AI membantu. Topik berikutnya lebih dalam tentang pekerjaan berbantuan, agen dan chatbot, inflasi dan pengenceran, serta tata kelola. Fakta tentang produk dan aturan AI berubah dengan cepat, dan pernyataan tentang perkakas atau regulasi tertentu dalam bagian ini bertanggal per Oktober 2026 dan sebaiknya diperiksa kembali.

## Prinsip utama

- **Tangkap garis dasar sebelum memperkenalkan AI.** Tanpanya, setiap klaim manfaat hanyalah opini.
- **Perlakukan setiap pemakaian sebagai eksperimen dengan pembanding.** Bandingkan dengan pekerjaan serupa yang dikerjakan tanpa AI, pada periode yang sama.
- **Ukur mutu dengan pengambilan sampel, bersama orang.** Keluaran fasih bukan keluaran benar.
- **Hitung biaya penuh.** Sertakan waktu tinjauan, pengerjaan ulang, lisensi, dan biaya inferensi.
- **Jaga orang bertanggung jawab dan terinformasi.** Orang yang memakai AI bertanggung jawab atas hasilnya.
- **Jangan biarkan AI menjadi kenaikan kecepatan atau pemantau.** Waktu yang dihemat adalah pilihan tentang cara memakai waktu.
- **Mulai dengan orang yang bersedia dan masalah nyata.** Mandat menghasilkan pemakaian tanpa nilai.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kelengkapan garis dasar | Porsi kasus penggunaan AI yang direncanakan yang punya garis dasar pra-adopsi tercatat untuk indikator utamanya | kasus penggunaan dengan garis dasar bertanggal / kasus penggunaan yang direncanakan | persen | Register kasus penggunaan | Perbaikan berkelanjutan; pengukuran dan pelaporan | Garis dasar sebelum eksperimen | Kuartalan |
| Cakupan pemakaian AI | Porsi butir pekerjaan atau tugas yang memenuhi syarat tempat AI dipakai, menurut kasus penggunaan | butir tempat bantuan AI dipakai / butir memenuhi syarat, dari log perkakas atau tag pengguna, pada tingkat tim | persen | Log pemakaian perkakas, tag | Service desk; manajemen insiden; manajemen rilis dan deployment | Adopsi perkakas oleh tim yang bersedia | Bulanan |
| Tingkat penerimaan dan penimpaan saran | Porsi saran AI yang diterima apa adanya, disunting, atau ditolak | saran di tiap kategori / saran yang ditawarkan | persen | Log perkakas diagregasi menurut tim | Service desk; manajemen pengetahuan | Tinjauan saran mesin | Bulanan |
| Akurasi keluaran yang ditinjau | Porsi keluaran AI bersampel yang dinilai benar dan sesuai tujuan oleh peninjau berkualifikasi | keluaran dinilai benar / keluaran bersampel | persen | Catatan tinjauan bersampel | Penjaminan mutu; manajemen pengetahuan | Definisi selesai untuk keluaran | Bulanan |
| Waktu tugas terhadap garis dasar | Waktu menyelesaikan tugas yang didefinisikan dengan AI dibandingkan garis dasar atau kelompok pembanding | median dan persentil ke-85 waktu tugas dengan AI dikurangi yang sama untuk garis dasar atau pembanding | menit atau jam | Tugas yang diukur waktunya, stempel waktu tiket | Service desk; manajemen insiden | Cycle time untuk tugas | Kuartalan |
| Biaya per tugas berbantuan AI | Total biaya pekerjaan berbantuan AI per tugas, termasuk tinjauan dan pengerjaan ulang | (biaya lisensi dan pemakaian + biaya waktu tinjauan dan pengerjaan ulang) / tugas selesai dengan AI | mata uang per tugas | Faktur vendor, estimasi waktu, pelacak kerja | Manajemen keuangan layanan | Biaya melayani per hasil | Kuartalan |
| Pergerakan hasil terhadap pembanding | Perubahan indikator hasil untuk pekerjaan berbantuan AI dibandingkan pekerjaan serupa tanpa bantuan | perubahan indikator untuk kelompok berbantuan AI dikurangi perubahan untuk kelompok pembanding | satuan indikator | Ukuran hasil per kasus penggunaan (mutu, kepuasan, tingkat buka kembali, cacat) | Perbaikan berkelanjutan | Belajar dari eksperimen | Kuartalan |

Definisikan setiap kasus penggunaan menurut tugas, pengguna, dan indikator hasilnya, dan catat di register. Cakupan pemakaian AI adalah ukuran deskriptif dan bukan target. Akurasi keluaran yang ditinjau dinilai terhadap standar tertulis oleh seseorang yang berkualifikasi yang tidak menghasilkan keluaran itu. Waktu tugas mencakup waktu untuk memberi prompt, meninjau, dan mengoreksi selain menghasilkan. Biaya per tugas menghitung waktu orang yang dihabiskan memeriksa dan memperbaiki. Pergerakan hasil membutuhkan pembanding yang dipilih sebelumnya dan catatan tentang perubahan lain selama periode itu.

## Rekomendasi

### Putuskan di mana AI berada

**1. Daftar tugas dan masalah yang ditangani tiap pemakaian AI.** Mulailah dari rasa sakit, bukan dari perkakas: penyusunan berulang, triase lambat, pengetahuan tersebar, tinjauan panjang, peringatan bising. Untuk tiap pemakaian kandidat, tuliskan masalah, siapa yang merasakannya, hasil yang sebaiknya membaik, dan risikonya. Lewati pemakaian tanpa masalah yang jelas. Ini adalah register tempat garis dasar dan ukuran bergantung.

**2. Klasifikasikan risiko tiap pemakaian.** Perkakas yang menyusun catatan internal membawa risiko berbeda dari yang mengubah sistem produksi, membalas pelanggan, atau membuat keputusan tentang orang. Klasifikasikan pemakaian menurut kerugian jika keluaran salah, siapa yang terdampak, dan apakah seseorang meninjau sebelum berlaku. Pemakaian berisiko lebih tinggi butuh ukuran, pengambilan sampel, dan tata kelola yang lebih kuat (lihat topik 10.5, Metrik tata kelola dan risiko AI).

**3. Mulai dengan orang yang bersedia dan tugas terbatas.** Lakukan uji coba dengan sukarelawan pada tugas yang umum dan dapat diperiksa. Sukarelawan memberi umpan balik jujur dan menyesuaikan perkakas dengan pekerjaan mereka. Tugas terbatas membuat garis dasar dan perbandingan layak. Hindari memulai dengan pekerjaan yang paling sensitif.

### Tangkap garis dasar dan siapkan perbandingan

**4. Catat garis dasar sebelum pemakaian pertama.** Untuk tiap kasus penggunaan, tangkap keadaan indikator saat ini: waktu menyelesaikan, tingkat mutu atau cacat, pengerjaan ulang, kepuasan pengguna, dan biaya. Ambil cukup pengamatan untuk melihat variasi normal (lihat topik 1.6, Literasi statistik untuk metrik layanan). Beri tanggal garis dasar dan simpan. Garis dasar yang diambil setelah peluncuran adalah catatan dunia yang baru.

**5. Bangun pembanding.** Bila mungkin, simpan kelompok atau himpunan tugas serupa yang tidak memakai AI selama periode uji coba, atau gantian pemakaian menurut pekan atau jenis tugas dengan cara yang adil. Pengacakan ideal dan sering tak praktis. Nyatakan dengan jelas apa lagi yang berubah. Tanpa pembanding, perbaikan akibat musiman, staf, atau pembelajaran akan dikreditkan pada perkakas.

**6. Ukur waktu dengan jujur.** Waktu ke draf pertama jarang menjadi ukuran yang tepat. Ukur waktu ke hasil yang selesai dan diperiksa, termasuk pemberian prompt, tinjauan, dan koreksi. Orang sering melaporkan waktu yang dihemat berdasarkan langkah penghasilan, dan langkah tinjauan memakan sebagian atau seluruhnya. Studi waktu pada sampel tugas layak diupayakan.

### Ukur mutu dan biaya

**7. Ambil sampel keluaran untuk ditinjau orang berkualifikasi.** Tiap bulan, tarik sampel acak keluaran berbantuan AI dan minta orang berkualifikasi menilainya terhadap standar tertulis. Laporkan akurasi, jenis galat yang ditemukan, dan tren. Ini perlindungan utama terhadap kesalahan fasih yang menyebar. Jaga peninjau independen dari penghasil, dan rotasi peninjau.

**8. Awasi pola penerimaan dan penimpaan.** Tingkat penerimaan yang sangat tinggi dapat menandakan bias otomatisasi, ketika orang menerima tanpa memeriksa. Tingkat yang sangat rendah dapat menandakan perkakas yang tak berguna. Pakai tingkat itu sebagai pemicu percakapan dengan tim dan tanyakan apa artinya dalam pengalaman mereka. Jangan menetapkan target untuk penerimaan.

**9. Hitung biaya penuh per tugas.** Sertakan biaya lisensi, biaya berbasis pemakaian, waktu untuk memberi prompt, meninjau, dan mengoreksi, pelatihan, dan upaya tata kelola. Bandingkan dengan biaya garis dasar. Perkakas yang membuat draf dengan cepat dan butuh koreksi berat mungkin berbiaya lebih daripada cara lama. Sertakan biaya kesalahan yang sampai ke pengguna.

### Jaga sisi manusia tetap benar

**10. Lindungi orang dari pemantauan dan dari merayapnya kecepatan.** Agregasikan data pemakaian AI pada tingkat tim dan jangan memakainya untuk menilai individu. Jangan memakai pemakaian sebagai ukuran kinerja. Sepakati sebelumnya bahwa waktu yang dihemat tidak akan otomatis menjadi beban kerja tambahan, dan putuskan bersama tim apa yang dilakukan dengannya: mutu, pembelajaran, perbaikan, atau pekerjaan lain. Kecepatan konstan adalah tujuan desain (lihat topik 9.2, Metrik kepuasan dan kesejahteraan).

**11. Tanyakan orang yang memakainya.** Denyut singkat dan percakapan mengungkap apa yang terlewat angka: di mana perkakas membantu, di mana membuat frustrasi, di mana ia menggeser pekerjaan dari membuat ke memeriksa, dan apakah ia mengubah kepuasan pekerjaan. Perlakukan kekhawatiran tentang keterampilan, mutu, dan keamanan kerja dengan hormat.

**12. Putuskan, terbitkan, dan tinjau kembali.** Pada akhir setiap uji coba, putuskan untuk menskalakan, menyesuaikan, atau berhenti, dan catat buktinya. Bagikan hasil dengan jujur, termasuk yang nol dan negatif. Tinjau kembali keputusan seiring perkakas berubah, yang terjadi dengan cepat. Pemakaian yang tidak membantu tahun lalu mungkin membantu sekarang, dan sebaliknya.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Kelengkapan garis dasar | Mencatat garis dasar setelah kejadian; memakai indikator yang mudah | Garis dasar bercap tanggal; tinjauan independen atas metode garis dasar |
| Cakupan pemakaian AI | Mewajibkan pemakaian; menghitung pemanggilan remeh atau otomatis | Tidak pernah target; bandingkan dengan pergerakan hasil; hitung pemakaian bermakna |
| Tingkat penerimaan dan penimpaan saran | Menghargai penerimaan; mempersulit penolakan | Tanpa target; akurasi keluaran yang ditinjau; tanyakan pengalaman pengguna |
| Akurasi keluaran yang ditinjau | Menyampel keluaran mudah; peninjau yang longgar | Sampel acak oleh peninjau independen; standar tertulis; rotasi peninjau |
| Waktu tugas terhadap garis dasar | Hanya mengukur waktu penghasilan; memilih tugas mudah | Waktu ke hasil yang diperiksa; sampel tugas secara acak; sertakan tinjauan dan pengerjaan ulang |
| Biaya per tugas berbantuan AI | Meninggalkan waktu tinjauan atau biaya tata kelola | Daftar periksa biaya penuh; bandingkan dengan studi waktu |
| Pergerakan hasil terhadap pembanding | Memilih kelompok atau periode yang menguntungkan; mengabaikan perubahan lain | Pembanding dan periode yang disepakati sebelumnya; daftar perubahan lain |

Pembacaan yang sehat adalah garis dasar untuk setiap uji coba, waktu ke hasil selesai yang terukur, akurasi diperiksa orang berkualifikasi, biaya yang mencakup tinjauan, hasil dibandingkan secara adil, dan tim yang mengatakan perkakas melayani pertimbangan mereka.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Uji coba dengan sukarelawan | Umpan balik jujur; risiko rendah | Sukarelawan adalah penggemar; hasil mungkin tak menggeneralisasi |
| Peluncuran yang diwajibkan | Cakupan cepat | Pemakaian tanpa nilai; kebencian; manipulasi |
| Perbandingan terkendali | Bukti kredibel | Upaya; tidak selalu mungkin |
| Hanya sebelum-dan-sesudah | Sederhana | Dikacaukan perubahan lain |
| Penghematan yang dilaporkan vendor | Mudah diperoleh | Optimistis; tanpa konteks |
| Tugas yang diukur waktunya sendiri | Berpijak pada pekerjaan Anda | Memakan waktu; sampel kecil |
| Tinjauan berat atas setiap keluaran | Aman | Menghapus manfaat |
| Tinjauan bersampel | Dapat diskalakan | Sebagian galat lolos |

Jawaban prosanya adalah menjalankan uji coba kecil dengan garis dasar dan pembanding, mengambil sampel keluaran untuk mutu, menghitung biaya penuh, dan memutuskan berdasarkan bukti. Pakai angka vendor sebagai hipotesis untuk diuji.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Di mana kita mengharapkan AI membantu, dan apa yang akan kita lihat jika ia membantu?**
Daftar pemakaian kandidat dan, untuk masing-masing, indikator dan garis dasar yang kita punya hari ini. Fasilitator sebaiknya mendorong kekhususan: tugas mana, ukuran mana, seberapa besar perubahan yang akan penting. Pilih satu pemakaian untuk diuji coba dan sepakati garis dasarnya.

**2. Apa yang akan membuat kita memercayai atau tidak memercayai saran AI, dan bagaimana kita tahu kita keliru?**
Bahas kasus ketika keluaran salah dan bagaimana diketahui. Pertimbangkan bagaimana tinjauan bekerja dalam praktik dan apakah tekanan membuatnya dilewati. Sepakati metode pengambilan sampel yang akan dijalankan seseorang yang independen.

**3. Seberapa banyak waktu yang kita hemat akan dihabiskan untuk memeriksa?**
Ukur waktu satu tugas nyata dengan dan tanpa perkakas, termasuk pemberian prompt dan tinjauan. Bandingkan dengan yang diharapkan orang. Percakapan sering mengungkap di mana keuntungannya dan di mana bukan.

**4. Apa yang sebaiknya kita lakukan dengan waktu yang kita hemat?**
Putuskan sebelumnya. Opsinya mencakup pekerjaan mutu, pembelajaran, perbaikan, atau tekanan lebih rendah. Bahas cara mencegah waktu diam-diam terserap ke permintaan lebih banyak. Sepakati dengan pemimpin bagaimana tim akan melindunginya.

**5. Apa yang tidak kita ingin AI lakukan di sini, dan mengapa?**
Daftar tugas yang butuh pertimbangan, empati, atau akuntabilitas manusia. Bahas risiko bagi pengguna dan keterampilan. Fasilitator sebaiknya mencatat batas sebagai masukan bagi tata kelola.

**6. Bagaimana kita tahu kapan berhenti?**
Definisikan bukti yang akan mengakhiri uji coba atau pemakaian. Sepakati siapa yang memutuskan dan kapan. Uji coba tanpa kriteria keluar menjadi perlengkapan permanen.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman memakai AI untuk kode, pengujian, tinjauan, dan dokumentasi. Mereka sebaiknya mengukur waktu ke hasil yang ditinjau dan berfungsi, mengawasi mutu dan cacat, dan menjaga tinjauan manusia tetap bermakna. Mereka sebaiknya menolak metrik yang menghitung baris yang dihasilkan atau penerimaan, dan berkeras pada ukuran hasil seperti cacat dan stabilitas.

### Tim layanan dan operasi

Tim operasi dan service desk memakai AI untuk triase, ringkasan, saran, dan pemantauan. Mereka sebaiknya membandingkan mutu penanganan dan penyelesaian dengan garis dasar, mengambil sampel keluaran, dan mengawasi efek pada pengguna dan kontak berulang. Mereka sebaiknya dikonsultasi sebelum AI ditempatkan di hadapan pengguna.

### Kepemimpinan dan tata kelola

Pemimpin menyponsori program AI dan menghadapi tekanan menunjukkan keuntungan. Mereka sebaiknya berkeras pada garis dasar dan pembanding, mendanai pekerjaan tinjauan, menghindari target pemakaian, dan melindungi orang dari pemantauan dan merayapnya kecepatan. Tata kelola sebaiknya mewajibkan klasifikasi risiko dan bukti sebelum menskalakan.

### Pelanggan dan pengguna

Pengguna bertemu AI dalam jawaban, saran, dan tindakan otomatis. Mereka menginginkan bantuan yang benar dan dapat dipahami serta kemampuan menjangkau seseorang. Mereka sebaiknya diberi tahu ketika berinteraksi dengan AI bila pantas, dan umpan balik mereka adalah bukti kunci apakah ia membantu (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Kelompok teknologi sebuah perusahaan asuransi menengah menjalankan service desk internal untuk 4.000 staf dan beberapa tim produk. Pimpinan membeli lisensi untuk asisten AI dan meminta laporan waktu yang dihemat setelah tiga bulan. Angka di bawah bersifat ilustratif.

Kepala manajemen layanan berkeras pada garis dasar. Untuk tugas paling umum service desk, menyusun balasan untuk permintaan akses dan kata sandi, ia mengukur waktu 120 tiket terbaru: median waktu penanganan 11 menit, persentil ke-85 sebesar 24, tingkat buka kembali 6 persen, dan skor kepuasan dari survei yang stabil. Ia memilih dua tim untuk menguji coba asisten dan menyimpan dua tim serupa sebagai pembanding. Tim uji coba adalah sukarelawan.

Setelah delapan pekan, median waktu penanganan tim uji coba adalah 8 menit dan persentil ke-85 adalah 19, dibanding 11 dan 23 pada tim pembanding. Log perkakas menunjukkan agen menerima saran apa adanya pada 52 persen kasus, menyuntingnya pada 38 persen, dan menolaknya pada 10 persen. Sampel acak bulanan 80 balasan, ditinjau agen senior yang tidak ikut uji coba, mendapati 91 persen sepenuhnya benar, dengan galat terkonsentrasi pada prosedur yang jarang dipakai tempat asisten memberi langkah usang. Tingkat buka kembali di tim uji coba naik sedikit menjadi 7 persen, dalam variasi normal. Biaya per tiket turun sedikit setelah lisensi dan waktu tinjauan dihitung. Survei menunjukkan agen menghargai draf dan tidak suka pemeriksaan tambahan atas respons panjang. Dua agen mengatakan mereka merasa tertekan menangani lebih banyak tiket per jam.

Kepala manajemen layanan melaporkan penghematan waktu sekitar seperempat pada median dan menyatakan catatannya: dua tim, delapan pekan, sukarelawan, dan tingkat buka kembali yang perlu diawasi. Ia menyepakati dengan pemimpin bahwa waktu yang dihemat akan masuk ke basis pengetahuan dan kasus kompleks, dan bahwa tidak ada target tiket yang naik. Prosedur usang diperbaiki di basis pengetahuan. Manajer senior meminta pemakaian wajib seperusahaan dan target penerimaan 80 persen. Ia menolak target itu, menjelaskan bahwa target penerimaan akan menghargai tidak memeriksa, dan mengusulkan memperluas uji coba ke dua tim lagi dengan ukuran yang sama. Keputusan dicatat.

## Sudut pandang sektor

**Startup.** Perkakas diadopsi cepat dan sering informal. Tangkap garis dasar sederhana waktu dan cacat untuk pemakaian utama, jaga tinjauan manusia atas apa pun yang menghadap pelanggan, dan hindari terkunci pada satu vendor sejak dini. Awasi keamanan dan paparan data ketika staf memakai perkakas publik.

**Bisnis kecil.** Asisten siap pakai dapat menawarkan bantuan nyata untuk menyusun dan tugas rutin. Ukur dalam skala kecil: waktu untuk beberapa tugas nyata dan tingkat koreksi. Berhati-hatilah dengan data rahasia, dan periksa syarat vendor tentang bagaimana data dipakai.

**Perusahaan besar.** Skala menuntut tata kelola, standar pengadaan, dan pendekatan pengukuran bersama. Jalankan uji coba dengan pembanding, terbitkan hasil secara internal, dan bagikan garis dasar dan metode antar-tim. Waspadai program yang melaporkan pemakaian sebagai keberhasilan.

**Pemerintah dan sektor publik.** Keputusan yang memengaruhi warga mungkin tunduk pada kewajiban hukum tentang transparansi, keadilan, dan tinjauan manusia. Klasifikasikan pemakaian menurut risiko, simpan catatan bagaimana AI dipakai dalam keputusan, dan bersikaplah terbuka. Aturan pengadaan dan perlindungan data berlaku, dan beberapa yurisdiksi punya undang-undang AI khusus yang perlu diperiksa per hari ini (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah lisensi atau biaya pemakaian, integrasi, pelatihan, waktu menangkap garis dasar dan menjalankan perbandingan, waktu orang yang dihabiskan meninjau dan mengoreksi keluaran, dan upaya tata kelola. Biaya dapat berskala dengan pemakaian dan berubah dengan harga vendor, jadi modelkan rentang.

Imbal hasil potensialnya adalah waktu yang dipulihkan pada tugas berulang, penyusunan dan pencarian lebih cepat, cakupan pengetahuan lebih baik, dan kelegaan bagi staf dari pekerjaan membosankan. Ini kemungkinan untuk diuji, bukan asumsi untuk disimpan. Bangun kasus dari uji coba Anda sendiri: waktu tugas terukur ke hasil yang diperiksa, akurasi yang ditinjau, pengerjaan ulang, dan biaya penuh per tugas, terhadap garis dasar dan pembanding. Hindari mengutip persentase produktivitas dari sumber vendor atau survei kecuali Anda dapat menelusuri metode dan kecocokannya dengan pekerjaan Anda. Sertakan risiko kesalahan yang sampai ke pengguna dan biaya mengatur perkakas (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Memperkenalkan AI tanpa garis dasar.** Anda tak dapat mengetahui apa yang berubah. Tangkap lebih dulu.
- **Mengukur kecepatan penghasilan.** Penghematan bisa lenyap dalam tinjauan. Ukur waktu ke hasil yang diperiksa.
- **Target adopsi.** Menghasilkan pemakaian tanpa nilai. Perlakukan cakupan sebagai deskriptif.
- **Memercayai klaim vendor.** Itu hipotesis. Uji pada pekerjaan Anda.
- **Tinjauan yang tidak nyata.** Bias otomatisasi mengubah tinjauan menjadi stempel karet. Ambil sampel dan periksa secara independen.
- **Mengubah waktu yang dihemat menjadi permintaan lebih banyak.** Mengikis kepercayaan dan kecepatan berkelanjutan. Putuskan sebelumnya untuk apa waktu itu.
- **Memantau pemakaian individu.** Menumbuhkan ketakutan. Agregasikan ke tingkat tim.
- **Uji coba tanpa akhir.** Menjadi permanen secara bawaan. Tetapkan kriteria keluar.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Tujuan dan garis dasar | Perkakas diadopsi karena antusiasme | Kasus penggunaan didaftar | Register dengan masalah, kelas risiko, garis dasar, dan indikator untuk tiap pemakaian | Garis dasar dan pembanding diwajibkan sebelum menskalakan; hasil diterbitkan | Garis dasar dan metode bersama antar-tim dan mitra; pemakaian dipensiunkan ketika bukti memudar |
| Bukti manfaat | Anekdot dan klaim vendor | Estimasi waktu informal | Tugas diukur waktunya; akurasi bersampel; biaya penuh per tugas | Pergerakan hasil terhadap pembanding dilaporkan dengan batasnya | Pandangan portofolio tentang di mana AI membantu, dengan pembelajaran dibagikan luas |
| Orang dan kecepatan | Mandat; pemantauan | Kepedulian informal | Hanya data tingkat tim; waktu yang dihemat dialokasikan dengan kesepakatan | Kekhawatiran dilacak; keterampilan dan kepuasan diukur | Pemakaian AI dirancang bersama pengguna dan staf; kecepatan berkelanjutan dilindungi |

## Daftar periksa

- [ ] Setiap pemakaian AI punya masalah tertulis, kelas risiko, pemilik, dan kriteria keluar.
- [ ] Garis dasar bertanggal ada untuk tiap uji coba sebelum pemakaian pertama.
- [ ] Kelompok pembanding atau tugas pembanding didefinisikan sebelumnya.
- [ ] Waktu diukur ke hasil yang selesai dan diperiksa.
- [ ] Keluaran disampel bulanan dan ditinjau orang berkualifikasi dan independen.
- [ ] Biaya penuh per tugas mencakup tinjauan dan pengerjaan ulang.
- [ ] Data pemakaian diagregasi pada tingkat tim dan tidak dipakai untuk individu.
- [ ] Tim telah menyepakati apa yang dilakukan dengan waktu yang dihemat.
- [ ] Pengguna ditanya tentang pengalaman mereka dengan perkakas.
- [ ] Uji coba berakhir dengan keputusan tercatat untuk menskalakan, menyesuaikan, atau berhenti.

## Prompt AI

**Susun entri kasus penggunaan.**

```text
Kami mempertimbangkan memakai AI untuk [task] di [team and service]. Susun entri
register kasus penggunaan: masalah dan siapa yang merasakannya, hasil yang
sebaiknya membaik, klasifikasi risiko dan alasannya, langkah tinjauan manusia,
indikator garis dasar yang ditangkap sekarang, pendekatan pembanding, komponen
biaya yang dilacak, kriteria keluar, dan pertanyaan untuk tim. Jangan
mengasumsikan fitur vendor tertentu atau mengklaim manfaat. Daftar asumsi Anda.
```

**Rancang studi tugas yang diukur waktunya.**

```text
Rancang studi kecil untuk mengukur efek asisten AI pada [task]. Usulkan cara
memilih tugas, cara membandingkan dengan dan tanpa perkakas secara adil, apa yang
diukur waktunya (termasuk pemberian prompt, tinjauan, dan koreksi), cara menilai
mutu keluaran, dan cara menghindari bias. Jaga praktis untuk tim berisi [number]
orang. Jangan menyatakan hasil yang diharapkan. Daftar asumsi Anda dan batas
rancangan.
```

**Rencanakan pengambilan sampel keluaran.**

```text
Keluaran berbantuan AI kami per bulan sekitar [number] dengan jenis [list].
Rancang proses pengambilan sampel acak dan tinjauan bulanan: ukuran sampel dan
metode pemilihan (dengan penalarannya, menghindari presisi berlebihan), siapa
yang meninjau, standar tertulis, kategori galat, cara melaporkan, dan cara
memakai temuan. Daftar asumsi Anda dan risiko.
```

**Putuskan apa yang dilakukan dengan waktu yang dihemat.**

```text
Uji coba kami menghemat median [value] per tugas untuk [number] tugas per pekan
di [team]. Sarankan opsi memakai waktu yang mendukung mutu, pembelajaran, dan
kecepatan berkelanjutan, dengan pertukaran dan risiko masing-masing, dan cara
menyepakati pilihan dengan tim dan pemimpin. Jangan mengasumsikan penghematan
akan bertahan. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik terkait AI sebelum melaporkannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik AI mencatat garis dasar, pembanding, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Tangkap garis dasar bertanggal sebelum AI dipakai, dan bandingkan dengan pekerjaan serupa yang dikerjakan tanpanya.
- Ukur waktu ke hasil yang selesai dan diperiksa, dan ambil sampel keluaran untuk akurasi dengan peninjau independen.
- Hitung biaya penuh, termasuk tinjauan dan pengerjaan ulang.
- Perlakukan pemakaian dan penerimaan sebagai deskriptif, tidak pernah sebagai target.
- Putuskan sebelumnya apa yang dilakukan dengan waktu yang dihemat, dan jaga kecepatan berkelanjutan.
- Jaga data pemakaian pada tingkat tim, dan akhiri setiap uji coba dengan keputusan tercatat.

## Referensi dan bacaan lanjutan

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
