# Metrik perubahan organisasi dan adopsi

**Perubahan telah mengakar ketika orang melakukan hal baru karena alasan yang dimaksudkan dan hasilnya membaik, jadi ukur tujuan dan efek dan bukan keberadaan ritual, dan jaga kecepatan perubahan pada tingkat yang dapat dipertahankan orang.**

## Gambaran umum dan motivasi

Organisasi mengadopsi cara kerja baru sepanjang waktu: proses manajemen layanan baru, pipeline pengiriman, struktur tim yang berbeda, seperangkat praktik agile, kerangka insiden. Pengumuman itu mudah. Apa yang berubah dalam perilaku harian adalah pertanyaan sebenarnya, dan apakah manfaat yang dimaksud menyusul adalah yang penting. Banyak program melaporkan keberhasilan karena pelatihan telah diberikan, perkakas terpasang, dan kosakata baru dipakai, sementara pekerjaan tampak sama dan hasil belum bergerak.

Prinsip Manifesto Agile mengatakan bahwa arsitektur, kebutuhan, dan desain terbaik muncul dari tim yang mengorganisasi diri, dan bahwa perubahan kebutuhan disambut. Prinsip itu juga mengatakan untuk membangun proyek di sekitar individu yang termotivasi dan memercayai mereka, dan untuk mempertahankan kecepatan konstan tanpa batas. Prinsip-prinsip ini adalah argumen tetap melawan memaksakan praktik dari atas dan mengukur kepatuhan. Mereka menunjuk pada pendekatan perubahan yang berbeda: libatkan orang secara berkelanjutan, biarkan cara kerja berevolusi, dan nilai berdasarkan hasil.

Gagasan peringatan dari budaya perangkat lunak adalah kultus kargo. [Pemrograman kultus kargo](https://en.wikipedia.org/wiki/Cargo_cult_programming) menggambarkan penyertaan ritual kode atau praktik yang tak melayani tujuan, disalin dari tempat lain tanpa pemahaman. Ceramah Richard Feynman tentang “sains kultus kargo” memakai citra terkait untuk menggambarkan pekerjaan yang punya bentuk luar sesuatu yang nyata tanpa substansinya. Diterapkan pada cara kerja, kultus kargo adalah tim yang menggelar semua rapat, memakai semua istilah, dan mengisi semua papan, dan tidak menyampaikan secara berkelanjutan, berkolaborasi dengan pemangku kepentingannya, atau memperbaiki. Pendekatan [kultus kargo](https://en.wikipedia.org/wiki/Cargo_cult) mencampuradukkan bentuk praktik dengan tujuannya. Metrik dalam topik ini dirancang untuk membedakannya.

Beberapa gagasan dari studi perubahan membantu.

- **Perubahan adalah masalah [perubahan organisasi](https://en.wikipedia.org/wiki/Organizational_change) sebanyak masalah teknis.** [Manajemen perubahan](https://en.wikipedia.org/wiki/Change_management) menangani sisi manusia: kesadaran, keinginan, pengetahuan, kemampuan, dan penguatan termasuk unsur yang lazim dipakai. Model seperti delapan langkah John Kotter dan ADKAR Prosci menawarkan kosakata, dan tak satu pun jaminan.
- **Orang sering menolak perubahan karena alasan yang masuk akal.** [Resistensi terhadap perubahan](https://en.wikipedia.org/wiki/Resistance_to_change) dapat menandakan masalah nyata pada usulan, ancaman terhadap sesuatu yang dihargai orang, atau kelelahan. Perlakukan sebagai informasi.
- **Adopsi adalah proses sepanjang waktu.** Teori [difusi inovasi](https://en.wikipedia.org/wiki/Diffusion_of_innovations) menggambarkan bagaimana praktik baru menyebar melalui sistem sosial, dari pengadopsi awal ke mayoritas, lewat pengaruh dan pengamatan.
- **Budaya membentuk apa yang mengakar.** [Budaya organisasi](https://en.wikipedia.org/wiki/Organizational_culture), asumsi dan perilaku bersama suatu kelompok, menentukan perubahan mana yang terasa alami dan mana yang ditolak.
- **Pengamatan mengubah perilaku.** [Efek Hawthorne](https://en.wikipedia.org/wiki/Hawthorne_effect) adalah kecenderungan orang mengubah perilakunya karena diamati. Uji coba yang menunjukkan hasil bagus di bawah perhatian dekat mungkin tidak bertahan pada skala.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) sangat relevan untuk transformasi: ketika adopsi menjadi target, tim mengadopsi bentuknya. Dasbor “tim yang memakai proses baru” dengan mandat di belakangnya akan menunjukkan adopsi tinggi dan perubahan rendah (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Topik ini menyatukan ukuran hasil sebelumnya (lihat topik 6.5, Realisasi nilai dan hasil bisnis) dan perbaikan (lihat topik 9.5, Metrik perbaikan berkelanjutan) sebagai bukti bahwa perubahan berhasil.

## Prinsip utama

- **Nilai perubahan dari hasilnya, bukan dari ritualnya.** Bukti adopsi adalah hasil yang lebih baik.
- **Jadikan tujuan setiap praktik eksplisit.** Jika tak ada yang bisa mengatakan mengapa, itu kandidat kultus kargo.
- **Libatkan orang yang terdampak secara berkelanjutan.** Rancang bersama mereka, bukan untuk mereka.
- **Utamakan penerimaan sukarela dan evolusi daripada mandat.** Tim menyesuaikan praktik dengan konteks mereka.
- **Batasi beban perubahan.** Orang hanya dapat menyerap sebanyak itu, dan kecepatan konstan mencakup perubahan.
- **Perlakukan resistensi sebagai data.** Dengarkan apa yang dikatakannya tentang usulan.
- **Bandingkan dengan jujur.** Pakai kelompok pembanding, dan waspadai hasil yang tampak hanya di bawah pengamatan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kejelasan tujuan | Porsi anggota tim yang dapat menyatakan tujuan suatu praktik dengan kata-kata sendiri dan cara mereka akan tahu jika berjalan | anggota yang memberi tujuan dan indikator jelas dalam pemeriksaan singkat anonim / anggota yang ditanya, pada tingkat tim | persen | Pemeriksaan singkat anonim, diagregasi menurut tim | Manajemen perubahan organisasi; perbaikan berkelanjutan | Pemahaman tim mengapa bekerja dengan cara ini | Kuartalan |
| Keluasan adopsi praktik | Porsi tim yang memakai praktik yang didefinisikan, sebagaimana didefinisikan oleh perilaku yang dapat diamati, bukan kehadiran | tim yang menunjukkan perilaku yang didefinisikan pada periode terakhir, dikonfirmasi tim dan pengamat / tim dalam lingkup | persen | Penilaian diri tim dikonfirmasi lewat pengamatan | Manajemen perubahan organisasi | Penyebaran sebuah praktik | Kuartalan |
| Pergerakan hasil terhadap pembanding | Perubahan ukuran hasil untuk tim pengadopsi dibandingkan dengan tim serupa non-pengadopsi pada periode yang sama | perubahan hasil untuk pengadopsi dikurangi perubahan untuk tim pembanding | satuan hasil | Ukuran hasil per tim (alur, stabilitas, pengalaman) | Perbaikan berkelanjutan; pengukuran dan pelaporan | Belajar dari eksperimen | Kuartalan |
| Beban perubahan | Jumlah perubahan signifikan yang secara bersamaan memengaruhi sebuah tim | hitungan inisiatif perubahan signifikan yang meminta tim mengubah cara bekerja pada periode itu, per tim | hitungan | Portofolio perubahan dan masukan tim | Manajemen perubahan organisasi; pemberdayaan perubahan | Kecepatan berkelanjutan | Kuartalan |
| Tingkat keterlibatan pemangku kepentingan | Porsi inisiatif perubahan tempat orang yang terdampak ikut dalam desain dan tinjauan | inisiatif dengan keterlibatan orang terdampak tercatat / inisiatif | persen | Catatan inisiatif dan konfirmasi tim terdampak | Manajemen perubahan organisasi; keterlibatan pemangku kepentingan | Keterlibatan pemangku kepentingan berkelanjutan | Kuartalan |
| Porsi penerimaan sukarela | Porsi tim pengadopsi yang memilih praktik itu, sebagai lawan diarahkan | tim pengadopsi yang melaporkan memilih praktik / tim pengadopsi | persen | Laporan tim | Manajemen perubahan organisasi | Tim yang mengorganisasi diri | Tahunan |
| Tingkat kembali ke semula | Porsi tim yang meninggalkan praktik dalam setahun setelah mengadopsinya | tim yang berhenti dalam 12 bulan / tim yang mengadopsi | persen | Catatan tim dari waktu ke waktu | Manajemen perubahan organisasi; perbaikan berkelanjutan | Praktik ditinggalkan karena tak membantu | Tahunan |

Definisikan praktik menurut apa yang dilakukan tim dan apa yang mereka maksudkan, bukan menurut namanya. Keluasan adopsi menghitung tim hanya ketika perilakunya cocok dengan definisi dan tim serta pengamat sepakat. Pergerakan hasil memakai tim pembanding yang dipilih sebelumnya sebagai serupa dalam jenis layanan dan titik awal, dan menyatakan apa lagi yang berubah. Beban perubahan menghitung inisiatif yang meminta tim mengubah pekerjaannya, bukan pembaruan rutin. Semua ukuran berada pada tingkat tim atau inisiatif, tidak pernah individu.

## Rekomendasi

### Mulai dengan tujuan dan orang

**1. Nyatakan tujuan dan indikator sebelum praktik.** Untuk setiap perubahan yang diusulkan, tuliskan masalah apa yang dipecahkannya, siapa yang merasakannya, hasil apa yang sebaiknya membaik, dan bagaimana Anda akan tahu. Jika tujuannya “menjadi agile” atau “mengadopsi kerangka,” tanyakan lagi. Tim akan mengikuti praktik lebih rela ketika mereka melihat untuk apa ia ada. Ini perlindungan terbaik terhadap kultus kargo.

**2. Libatkan orang yang terdampak dalam merancang perubahan.** Tanyakan kepada mereka yang mengerjakan pekerjaan apa yang menyakitkan, apa yang akan mereka coba, dan apa yang mereka takuti. Rancang bersama beberapa dari mereka, uji dengan kelompok kecil, dan dengarkan. Keterlibatan pemangku kepentingan berkelanjutan adalah tujuan inti agile, dan berlaku bagi program perubahan sebanyak bagi produk. Catat siapa yang ikut.

**3. Dengarkan resistensi.** Ketika orang menolak, tanyakan apa yang mereka lihat yang tidak Anda lihat. Jawaban yang mungkin mencakup cacat dalam usulan, kemampuan yang hilang, biaya yang tak diakui, atau perubahan sebelumnya yang tak pernah selesai. Catat kekhawatiran dan tanggapannya, dan sesuaikan perubahan di mana mereka benar.

### Perkenalkan perubahan dengan cara yang dapat dipelajari

**4. Uji coba dengan pembanding.** Coba perubahan dengan satu atau dua tim yang bersedia, dan amati kelompok sebanding yang tidak berubah. Bandingkan hasil selama periode yang sama. Sadarilah efek Hawthorne, dan perpanjang uji coba cukup lama agar kebaruan memudar. [Proyek percontohan](https://en.wikipedia.org/wiki/Pilot_project) adalah uji skala kecil, dan nilainya terletak pada apa yang diajarkannya sebelum Anda menskalakan, jadi nyatakan sebelumnya apa yang Anda harap dipelajari dan apa yang akan membuat Anda berhenti.

**5. Utamakan penerimaan sukarela, dan biarkan praktik berevolusi.** Ketika tim memilih praktik karena memecahkan masalah bagi mereka, mereka menyesuaikan dan mempertahankannya. Ketika dipaksakan, mereka memerankannya. Tawarkan tujuan, bukti, dan dukungan, dan biarkan tim memutuskan cara menerapkannya. Izinkan variasi lokal, dan belajar darinya. Lacak penerimaan sukarela dan kembali ke semula untuk melihat apakah praktik bertahan karena alasan yang benar.

**6. Sebarkan lewat contoh dan percakapan.** Pengaruh bergerak lewat orang yang dihormati dan terlihat. Bagikan cerita tim yang mencoba sesuatu dan apa yang terjadi, termasuk kemunduran. Komunitas praktik adalah saluran yang baik (lihat topik 9.4, Metrik keterampilan dan pembelajaran). Hindari tabel liga adopsi.

### Awasi bebannya

**7. Hitung perubahan yang mendarat pada tiap tim.** Daftar inisiatif yang meminta tim mengubah cara bekerja: perkakas baru, proses baru, reorganisasi, persyaratan pelaporan. Tim yang menghadapi banyak sekaligus tak dapat menyerapnya, dan [kelelahan perubahan](https://en.wikipedia.org/wiki/Change_fatigue) muncul. Urutkan inisiatif, buang yang bernilai rendah, dan beri tim ruang menyelesaikan satu perubahan sebelum berikutnya. Ini bagian dari menjaga kecepatan berkelanjutan (lihat topik 9.2, Metrik kepuasan dan kesejahteraan).

**8. Pensiunkan apa yang tak lagi melayani.** Untuk setiap praktik baru yang ditambahkan, tanyakan apa yang dapat dihapus. Lapisan proses menumpuk, dan setiap lapisan berbiaya. Tinjau ritual yang dijalankan tim tiap kuartal dan buang yang tujuannya tak lagi dilayani.

### Ukur adopsi dengan apa yang penting

**9. Definisikan adopsi menurut perilaku yang dapat diamati dan tujuan.** Gambarkan apa yang dilakukan tim secara berbeda ketika praktik telah mengakar, misalnya “perubahan mencapai produksi dalam langkah kecil dengan pemeriksaan otomatis, dan pengguna dikonsultasi mingguan.” Nilai lewat pengamatan dan percakapan, bukan dengan menghitung artefak seperti papan atau rapat. Minta anggota tim menjelaskan tujuannya.

**10. Bandingkan hasil, bukan kepatuhan.** Lihat ukuran alur, stabilitas, pengalaman, dan biaya untuk tim pengadopsi terhadap tim pembanding (lihat topik 2.8, Metrik DORA). Hati-hati dengan sebab-akibat: tim yang mengadopsi mungkin berbeda dengan cara yang juga memengaruhi hasil. Laporkan perbandingan dengan batasnya.

**11. Periksa pengalaman orangnya.** Adopsi yang menaikkan gesekan atau mengikis otonomi dapat melemahkan dirinya sendiri. Pakai denyut kesehatan dan kesejahteraan tim untuk melihat bagaimana perubahan terasa (lihat topik 9.1, Kesehatan tim dan pengalaman pengembang). Tanyakan apa yang diambil perubahan selain apa yang ditambahkannya.

**12. Jujurlah dalam pelaporan.** Laporkan adopsi, hasil, beban perubahan, dan kembali ke semula bersama, dengan cerita tentang apa yang dipelajari. Hindari menyatakan keberhasilan ketika bentuk telah menyebar dan hasil belum bergerak. Akui ketika praktik tidak cocok, dan tarik. Transformasi dinilai dari apa yang dimungkinkannya, bukan dari seberapa luas diumumkan.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Kejelasan tujuan | Melatih orang melafalkan tujuan; mengajukan pertanyaan mengarahkan | Pemeriksaan anonim; minta contoh bagaimana mereka akan tahu; bandingkan dengan pergerakan hasil |
| Keluasan adopsi praktik | Menghitung papan dan rapat; tim berakting untuk pengamat | Definisikan menurut perilaku dan tujuan; pengamatan oleh orang di luar tim; pergerakan hasil |
| Pergerakan hasil terhadap pembanding | Memilih kelompok atau periode pembanding yang menguntungkan; meninggalkan perubahan lain | Pilih pembanding dan periode sebelumnya; daftar perubahan lain; tunjukkan ketidakpastian |
| Beban perubahan | Memecah inisiatif menjadi bagian kecil; tidak menghitung perubahan yang datang informal | Hitung menurut efek pada pekerjaan tim; minta tim mendaftar apa yang mereka serap |
| Tingkat keterlibatan pemangku kepentingan | Mengundang orang ke pengarahan dan menyebutnya keterlibatan; hanya mencatat kehadiran | Konfirmasi tim terdampak bahwa mereka memengaruhi desain; catat perubahan yang dibuat sebagai tanggapan |
| Porsi penerimaan sukarela | Menyajikan mandat sebagai pilihan; tim mengatakan mereka memilih padahal merasa harus | Laporan anonim; tanyakan apa yang akan terjadi jika mereka menolak |
| Tingkat kembali ke semula | Membuat meninggalkan praktik mahal atau tersembunyi; menamai ulang praktik yang ditinggalkan | Tinjau alasan meninggalkan; izinkan penarikan yang aman |

Pembacaan yang sehat adalah praktik yang dapat dijelaskan dan dipilih tim, adopsi diukur menurut perilaku, hasil yang membaik terhadap pembanding, beban perubahan yang dapat dikelola, beberapa kembali ke semula dengan alasan baik, dan orang yang mengatakan suara mereka membentuk perubahan.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Peluncuran yang diwajibkan | Cepat, konsisten | Kepatuhan tanpa tujuan; kebencian; kultus kargo |
| Penerimaan sukarela | Pengadopsi termotivasi; kecocokan lokal | Lebih lambat; tak merata; sebagian tim tak pernah mengadopsi |
| Perubahan big-bang | Peristiwa jelas | Risiko tinggi; beban berat; sulit dipelajari |
| Uji coba bertahap dengan pembanding | Belajar sebelum menskalakan | Lebih lambat; uji coba mungkin tak menggeneralisasi |
| Praktik standar lintas tim | Koordinasi dan dukungan lebih mudah | Kurang cocok untuk sebagian tim |
| Variasi lokal | Cocok dengan konteks | Lebih sulit dibandingkan dan didukung |
| Dasbor adopsi | Kemajuan terlihat | Menghargai bentuk adopsi |
| Perbandingan hasil | Sinyal jujur | Sulit diisolasi; lebih lambat terlihat |

Jawaban prosanya adalah melakukan uji coba dengan pembanding, menawarkan praktik beserta tujuannya, membiarkan tim memilih dan menyesuaikan, menghitung beban perubahan, dan menilai menurut hasil, memakai standar apa pun hanya di mana koordinasi menuntutnya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Praktik apa yang kita ikuti yang tak ada yang bisa menjelaskan tujuannya?**
Tiap orang menamai satu. Untuk masing-masing, bahas masalah apa yang dimaksudkan dipecahkannya dan apakah masih. Fasilitator sebaiknya mencatat jawaban tanpa defensif. Sepakati mempertahankan, mengubah, atau membuang dua di antaranya.

**2. Perubahan apa yang mendarat pada kita sekarang, dan mana yang bisa menunggu?**
Daftar setiap inisiatif yang meminta kita mengubah cara bekerja. Hitung. Tanyakan mana yang menambah nilai dan mana yang menambah beban. Usulkan kepada sponsor urutan atau penghentian salah satunya.

**3. Apa yang kita tolak pada perubahan terakhir, dan adakah yang mendengarkan?**
Ingat resistensi atau kekhawatiran. Apakah didengar, dan apakah perubahan menyesuaikan? Bahas cara mengangkat kekhawatiran dengan cara yang diterima. Sepakati bagaimana tim akan memberi umpan balik pada perubahan berikutnya.

**4. Jika perubahan ini berhasil, apa yang berbeda dalam hasil kita, dan bagaimana kita mengetahuinya?**
Susun indikator dan pembandingnya. Tanyakan apa lagi yang berubah pada saat yang sama. Jika tak ada yang bisa mengatakan, perubahan itu kekurangan tujuan. Sepakati garis dasar sekarang.

**5. Bagaimana kita tahu jika praktik baru hanya untuk pertunjukan?**
Pikirkan tanda-tandanya: tak ada yang memakai keluarannya, rapat tanpa keputusan, papan diperbarui untuk penonton. Bahas cara memeriksa ini. Sepakati waktu meninjau ritual yang dijalankan tim.

**6. Praktik mana yang kita tinggalkan, dan apa yang kita pelajari dari meninggalkannya?**
Ingat satu. Bahas apakah aman meninggalkannya, dan apa penggantinya. Perlakukan jawabannya sebagai bukti bahwa tim dapat beradaptasi.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman hidup dengan perubahan itu. Mereka sebaiknya meminta tujuannya, melibatkan diri dalam desain, menjalankan eksperimen kecil, dan mengatakan ketika praktik tidak cocok. Mereka berhak mengembangkan cara kerja mereka, dan mereka berkewajiban menyampaikan hasil yang membenarkan pilihan mereka.

### Tim layanan dan operasi

Tim operasi menyerap perubahan proses dari banyak arah, sering di atas pekerjaan tak terencana. Mereka sebaiknya mencatat beban perubahan, meminta pengurutan, dan ikut uji coba di mana pandangan mereka penting. Mereka berada di posisi baik untuk memperhatikan ketika proses baru menambah langkah tanpa nilai.

### Kepemimpinan dan tata kelola

Pemimpin menyponsori perubahan dan sering memaksakannya. Mereka sebaiknya menyatakan tujuan dan indikator, melibatkan orang yang terdampak, mengutamakan penerimaan sukarela bila mungkin, membatasi beban perubahan, dan siap menarik apa yang tak berhasil. Tata kelola sebaiknya melihat hasil terhadap pembanding, beban perubahan menurut tim, dan tingkat kembali ke semula, dan mencurigai angka adopsi yang seragam tinggi.

### Pelanggan dan pengguna

Pengguna mengalami efek perubahan dalam mutu layanan, komunikasi, dan stabilitas. Mereka dapat dilibatkan dalam merancang perubahan yang memengaruhi mereka, dan umpan balik mereka adalah bukti apakah perubahan membantu. Mereka juga menanggung biaya transformasi yang mengalihkan perhatian tim dari layanan.

## Dalam praktik: contoh ITIL agile

Divisi teknologi sebuah perusahaan logistik multinasional punya 30 tim. Dua tahun lalu ia meluncurkan program transformasi untuk mengadopsi seperangkat cara kerja standar, dan dasbor program menunjukkan 27 dari 30 tim “mengadopsi.” Angka di bawah bersifat ilustratif.

Kepala praktik rekayasa yang baru ditanya apakah program berhasil. Ia melihat melampaui dasbor. Pemeriksaan singkat anonim menunjukkan hanya 41 persen anggota tim yang dapat menyatakan tujuan praktik utama dan cara mengetahui bahwa mereka berfungsi. Pengamatan pada delapan tim menunjukkan lima menggelar rapat yang ditetapkan dan memperbarui papan, dan dua dari lima itu masih merilis kuartalan dengan persetujuan manual. Membandingkan 12 tim dengan perilaku praktik terkuat dengan 12 tim serupa yang tidak, median cycle time dan change fail rate serupa, dan kepuasan dengan cara kerja lebih rendah di antara tim di bawah kepatuhan terkuat. Tim rata-rata menyerap lima inisiatif yang meminta mengubah cara bekerja, dengan tiga tim menghadapi delapan atau lebih. 22 persen tim mengadopsi secara sukarela. Dari tim yang mengadopsi praktik pipeline dua tahun lalu, 30 persen diam-diam telah berhenti.

Kepala praktik rekayasa membingkai ulang program bersama tim. Tujuan tiap praktik ditulis dalam bahasa lugas dengan indikator, dan tim bebas mengadopsi, menyesuaikan, atau menolak, dengan percakapan tentang mengapa. Divisi menerbitkan beban perubahan per tim dan meminta sponsor mengurutkan inisiatif mereka; empat dijeda dan dua digabung. Tim yang bersedia menguji praktik rilis langkah-kecil dengan pemeriksaan otomatis, dengan kelompok pembanding yang dipilih sebelumnya, dan hasilnya dibagikan sebagai cerita dan angka. Pemangku kepentingan dari bisnis dan operasi ikut sesi desain untuk dua perubahan proses. Pelaporan berubah dari hitungan adopsi menjadi pergerakan hasil, beban perubahan, dan kembali ke semula.

Setahun kemudian, 71 persen anggota tim dapat menyatakan tujuan praktik yang mereka pakai. Tim uji coba mengurangi median cycle time 30 persen dibanding pengurangan 6 persen pada kelompok pembanding, dengan efek Hawthorne dipertimbangkan lewat memperpanjang uji coba dua bulan lagi. Rata-rata beban perubahan turun menjadi tiga inisiatif per tim. Penerimaan sukarela naik menjadi 64 persen, dan yang kembali ke semula 9 persen, dengan alasan tercatat. Kepala operasi meminta target adopsi 100 persen pada akhir tahun. Kepala praktik rekayasa mengusulkan melacak hasil dan beban sebagai gantinya, menjelaskan bahwa 100 persen yang diwajibkan menghasilkan penampilan keberhasilan sebelumnya dan kembali ke semula sebelumnya. Keputusan dicatat, dan dasbor membuang hitungan adopsi.

## Sudut pandang sektor

**Startup.** Perubahan konstan dan praktik datang dari pendiri dan perekrutan awal. Jaga tujuan tiap praktik eksplisit dan buang apa pun yang tidak membantu. Tahan menyalin proses perusahaan besar sebelum Anda memiliki masalahnya.

**Bisnis kecil.** Pemilik sering memutuskan, dan perubahan bersifat pribadi. Jelaskan mengapa, libatkan beberapa orang yang terdampak, coba satu perubahan sekaligus, dan periksa apakah rasa sakit yang disasar mereda. Hindari pembelian kerangka yang melampaui kapasitas tim untuk menyerapnya.

**Perusahaan besar.** Skala mengundang standar, program, dan konsultan, dan bersamanya risiko kultus kargo dalam volume. Tawarkan praktik bersama dengan tujuannya, dukung penerimaan sukarela, kelola portofolio perubahan menurut beban tim, dan bandingkan hasil dengan jujur. Pakai komunitas praktik untuk menyebarkan apa yang berhasil.

**Pemerintah dan sektor publik.** Perubahan mungkin digerakkan legislasi, restrukturisasi, dan siklus politik, dengan pilihan terbatas. Di mana pilihan terbatas, bersikaplah transparan, fokus pada tujuan dan hasil, dan libatkan staf dan pengguna sejak dini. Perlindungan staf dan kewajiban konsultasi mungkin berlaku, dan akuntabilitas publik membuat pelaporan jujur tentang apa yang tidak berhasil berharga (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya mengukur perubahan dengan baik kecil: pemeriksaan singkat, data pembanding dari ukuran yang ada, waktu pengamatan, dan daftar inisiatif per tim. Biaya yang lebih besar adalah kesediaan mendengar bahwa program yang disukai tidak berhasil.

Imbal hasilnya datang dari tidak membuang biaya sangat besar transformasi yang gagal: pelatihan, konsultasi, perkakas, dan waktu banyak orang, ditambah biaya kelelahan perubahan dan kepercayaan yang hilang. Bangun kasus dari riwayat Anda sendiri: biaya program masa lalu dan hasil apa yang digerakkannya, jumlah inisiatif yang bersaing untuk tiap tim, dan proporsi praktik yang diadopsi yang kemudian ditinggalkan. Hindari mengutip statistik tentang tingkat kegagalan transformasi kecuali Anda dapat menelusuri sumber dan metodenya. Sertakan manfaat koreksi arah lebih awal lewat uji coba dengan pembanding (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Melaporkan adopsi sebagai keberhasilan.** Bentuk dapat menyebar tanpa substansi. Laporkan hasil terhadap pembanding.
- **Mewajibkan praktik.** Menghasilkan ritual dan kebencian. Tawarkan tujuan dan biarkan tim memilih.
- **Menyalin proses perusahaan lain.** Mengimpor bentuk, bukan kondisi yang membuatnya berhasil. Mulai dari masalah Anda.
- **Terlalu banyak perubahan sekaligus.** Beban melampaui kapasitas. Hitung dan urutkan.
- **Mengabaikan resistensi.** Anda kehilangan informasi. Dengarkan dan sesuaikan.
- **Uji coba tanpa pembanding.** Efek kebaruan menyesatkan. Pakai pembanding dan periode lebih panjang.
- **Tak pernah memensiunkan apa pun.** Lapisan proses menumpuk. Hapus saat Anda menambah.
- **Teater keberhasilan.** Cerita tanpa angka, atau angka tanpa cerita, menyembunyikan kebenaran. Laporkan keduanya, dengan jujur.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Tujuan dan keterlibatan | Praktik diumumkan | Tujuan dinyatakan dalam presentasi | Tujuan dan indikator ditulis untuk tiap perubahan; orang terdampak dikonsultasi | Keterlibatan dan kejelasan tujuan diukur; resistensi dicatat dan dijawab | Perubahan dirancang bersama pengguna dan tim di seluruh organisasi dan mitra |
| Pengenalan dan bukti | Peluncuran big-bang | Uji coba tanpa pembanding | Uji coba dengan kelompok pembanding; adopsi didefinisikan menurut perilaku | Pergerakan hasil dan kembali ke semula dilacak; batas bukti dilaporkan | Pembelajaran seluruh portofolio tentang perubahan mana yang berhasil, dibagikan terbuka |
| Beban dan keberlanjutan | Tanpa pandangan atas beban perubahan | Inisiatif didaftar | Beban perubahan dihitung per tim dan diurutkan | Beban dikelola bersama kapasitas; praktik dipensiunkan | Perubahan direncanakan bersama kapasitas, kesejahteraan, dan tujuan pengiriman |

## Daftar periksa

- [ ] Tiap perubahan punya tujuan tertulis, indikator bernama, dan garis dasar.
- [ ] Orang yang terdampak ikut dalam desain, dan masukan mereka dicatat.
- [ ] Kekhawatiran dan resistensi dicatat bersama tanggapan.
- [ ] Uji coba punya kelompok pembanding dan periode cukup panjang agar kebaruan memudar.
- [ ] Adopsi didefinisikan menurut perilaku yang dapat diamati dan tujuan.
- [ ] Penerimaan sukarela dan kembali ke semula dilacak, dengan alasan.
- [ ] Beban perubahan per tim dihitung, dan inisiatif diurutkan.
- [ ] Praktik ditinjau untuk dihapus setidaknya tahunan.
- [ ] Pergerakan hasil dilaporkan dengan batasnya.
- [ ] Tidak ada target yang mewajibkan persentase tertentu tim mengadopsi praktik.

## Prompt AI

**Tulis tujuan dan indikator untuk perubahan.**

```text
Kami berencana memperkenalkan [change] untuk [teams] di [type of organization].
Susun tujuan satu paragraf dalam bahasa lugas (masalah, siapa yang merasakannya,
hasil yang sebaiknya membaik), indikator dengan garis dasar yang dicatat
sekarang, cara membandingkan dengan tim serupa yang tidak berubah, dan tanda bahwa
praktik telah menjadi ritual tanpa tujuan. Jangan mengarang bukti. Daftar asumsi
Anda dan pertanyaan untuk tim yang terdampak.
```

**Hitung dan urutkan beban perubahan.**

```text
Berikut daftar inisiatif yang akan meminta [team or group] mengubah cara bekerja
dalam [period] mendatang: [paste with sponsors, size, and dates]. Hitung beban per
tim, identifikasi konflik dan dependensi, dan usulkan urutan yang menyisakan ruang
untuk pekerjaan dan kecepatan berkelanjutan. Sarankan mana yang dapat digabung,
ditunda, atau dibuang. Jangan mengasumsikan kami dapat mengerjakan semuanya.
Daftar asumsi Anda.
```

**Rancang uji coba dengan pembanding.**

```text
Rancang uji coba [change] dengan [number] tim yang bersedia dan kelompok pembanding
berisi [number] tim serupa. Usulkan ukuran hasil dan garis dasar, durasi (termasuk
waktu agar kebaruan memudar), cara memilih kelompok pembanding sebelumnya, apa
lagi yang mungkin mengacaukan hasil, dan apa yang akan membuat kami menskalakan,
menyesuaikan, atau berhenti. Jangan mengklaim hasil dari organisasi lain. Daftar
asumsi Anda.
```

**Periksa kultus kargo.**

```text
Berikut praktik yang diikuti tim kami: [describe, with its artifacts and
meetings]. Ajukan kepada saya sepuluh pertanyaan yang dapat saya tanyakan kepada
anggota tim untuk melihat apakah mereka memahami tujuannya, dapat menyebut hasil
yang sebaiknya diperbaikinya, dan akan menyesuaikannya dengan konteks mereka.
Tambahkan tanda-tanda dalam artefak yang menyarankan praktik dijalankan untuk
pertunjukan. Jangan menilai individu. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik adopsi atau perubahan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik adopsi mengukur perilaku dan hasil, dengan vektor manipulasi dan pagar pembatasnya.

## Poin penting

- Nilai perubahan dari hasilnya terhadap pembanding, bukan dari penyebaran ritualnya.
- Tulis tujuan dan indikator sebelum praktik, dan uji apakah orang dapat menjelaskannya.
- Libatkan orang yang terdampak secara berkelanjutan, dan perlakukan resistensi sebagai informasi.
- Utamakan penerimaan sukarela, biarkan praktik berevolusi, dan lacak yang kembali ke semula.
- Hitung beban perubahan pada tiap tim, dan jaga dalam kecepatan yang berkelanjutan.
- Laporkan dengan jujur, termasuk apa yang tidak berhasil, dan pensiunkan praktik yang tak lagi melayani.

## Referensi dan bacaan lanjutan

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Kotter, J. P., *Leading Change*, Harvard Business School Press, 1996.
3. Hiatt, J. M., *ADKAR: A Model for Change in Business, Government and our Community*, Prosci Learning Center Publications, 2006.
4. Schein, E. H., *Organizational Culture and Leadership*, 5th ed., Wiley, 2016.
5. Feynman, R. P., "Cargo Cult Science," Caltech commencement address, 1974, reprinted in *Surely You're Joking, Mr. Feynman!*, W. W. Norton, 1985.
6. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
7. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
8. Wikipedia, [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming).
9. Wikipedia, [Cargo cult](https://en.wikipedia.org/wiki/Cargo_cult).
10. Wikipedia, [Organizational change](https://en.wikipedia.org/wiki/Organizational_change).
11. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
12. Wikipedia, [Resistance to change](https://en.wikipedia.org/wiki/Resistance_to_change).
13. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
14. Wikipedia, [Organizational culture](https://en.wikipedia.org/wiki/Organizational_culture).
15. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
18. Wikipedia, [Change fatigue](https://en.wikipedia.org/wiki/Change_fatigue).
