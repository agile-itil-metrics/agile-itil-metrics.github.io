# Metrik manajemen aset TI

**Anda tidak dapat mendukung, mengamankan, atau membayar dengan masuk akal untuk apa yang tidak dapat Anda temukan, jadi ukur seberapa akurat, lengkap, dan terkini catatan aset Anda, dan bangun kebiasaan mencatat aset sebagai hasil sampingan pekerjaan sehari-hari alih-alih pembersihan tahunan.**

## Gambaran umum dan motivasi

Setiap layanan bertumpu pada benda: laptop, server, lisensi, akun cloud, perangkat jaringan, dan data serta kontrak yang melekat padanya. [Manajemen aset TI](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM) adalah himpunan praktik bisnis yang menyatukan fungsi keuangan, kontraktual, dan inventaris untuk mendukung manajemen siklus hidup dan pengambilan keputusan strategis bagi lingkungan TI. Ia menjawab pertanyaan yang menjadi tumpuan praktik lain. Apa yang kita miliki? Di mana? Siapa yang bertanggung jawab? Berapa biayanya? Kapan harus diperbarui, ditambal, atau diganti?

Pengiriman berkelanjutan dan ITIL bertemu dengan canggung di wilayah ini. Tim yang menyampaikan perangkat lunak secara berkelanjutan membuat dan menghancurkan infrastruktur sepanjang waktu: kontainer, mesin virtual, lingkungan uji, dan akun cloud muncul dalam hitungan menit. Lembar kerja kuartalan tidak dapat mengimbangi. ITAM dari tradisi ITIL berkeras pada catatan, pemilik, dan siklus hidup, dan kekeraskepalaan itu benar, karena aset yang tak terkelola adalah tempat celah keamanan, uang terbuang, dan kegagalan kepatuhan tumbuh. Sumbangan agile adalah kolaborasi berkelanjutan lintas pengadaan, keuangan, keamanan, dan operasi, dan kebiasaan praktis mencatat aset secara otomatis saat dibuat, lewat pipeline dan infrastruktur sebagai kode, sehingga catatan adalah hasil sampingan pekerjaan.

Tiga istilah berulang dalam topik ini.

- **Aset:** item bernilai bagi organisasi yang dikelola lewat siklus hidup. Dalam ITAM ini mencakup perangkat keras, perangkat lunak, sumber daya cloud, langganan, dan kadang data.
- **Catatan aset:** entri yang menggambarkan aset: apa itu, siapa pemiliknya, di mana, dalam keadaan apa, berapa biayanya, dan ke apa ia tertaut.
- **Siklus hidup:** tahap yang dilalui aset, biasanya diminta, dibeli, diterima, di-deploy, dipakai, dirawat, dipensiunkan, dan dibuang. Pemikiran [siklus hidup produk](https://en.wikipedia.org/wiki/Product_lifecycle) berlaku untuk tiap kelas aset, dengan tahap berbeda untuk laptop dan langganan cloud.

ITAM tumpang tindih dengan manajemen konfigurasi, yang melacak hubungan antarkomponen agar Anda dapat memahami dampak perubahan, dan topik berikutnya membahas perangkat lunak, perangkat keras, dan konfigurasi secara bergantian (lihat topik 7.2, Metrik aset perangkat lunak dan lisensi, topik 7.3, Metrik siklus hidup aset perangkat keras, dan topik 7.4, Metrik kualitas konfigurasi dan CMDB). Perbedaannya soal tujuan: manajemen aset menekankan kepemilikan, biaya, dan siklus hidup, sedangkan manajemen konfigurasi menekankan struktur dan dependensi. Inventaris yang sama sering menyuapi keduanya.

Standar yang dikutip kebanyakan program ITAM adalah ISO/IEC 19770, keluarga standar untuk sistem manajemen aset TI. Kutip dengan nama dan lingkupnya, dan bacalah dari badan standar sebelum mengandalkan rincian apa pun. Topik ini tidak mereproduksi teksnya.

Metrik aset mudah diubah menjadi target, dan targetnya mudah dipenuhi di atas kertas. Inventaris dapat menunjukkan akurasi 100 persen karena hanya mencatat apa yang sudah diketahui. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku: ukur akurasi terhadap bukti independen, dan perlakukan angka sempurna sebagai alasan untuk melihat lebih keras (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Catat pada saat perubahan.** Aset sebaiknya masuk dan keluar dari catatan sebagai bagian dari pekerjaan yang menciptakan atau menyingkirkannya.
- **Ukur terhadap bukti independen.** Akurasi berarti kesesuaian dengan kenyataan, diperiksa dengan metode selain catatan itu sendiri.
- **Setiap aset punya pemilik.** Aset yang tak dimiliki siapa pun tidak akan ditambal, dibayar dengan masuk akal, atau dipensiunkan.
- **Jaga catatan sekecil mungkin.** Tangkap kolom yang dibutuhkan keputusan, dan tidak lebih.
- **Gabungkan sumber.** Alat penemuan, pengadaan, keuangan, identitas, dan penagihan cloud masing-masing melihat sebagian aset.
- **Berkolaborasi lintas fungsi.** Pengadaan, keuangan, keamanan, dan operasi berbagi catatan dan mutunya.
- **Perlakukan celah sebagai informasi.** Aset yang tak terhitung adalah temuan untuk dipahami, bukan kegagalan untuk disembunyikan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Akurasi inventaris | Porsi aset bersampel yang catatannya cocok dengan yang ditemukan | aset bersampel tempat catatan cocok dengan bukti fisik atau teknis pada semua kolom yang disepakati / aset yang disampel | persen | Sampel audit dibandingkan dengan register aset dan data penemuan | Manajemen aset TI; manajemen konfigurasi | Definisi selesai mencakup mendaftarkan aset | Kuartalan |
| Cakupan penemuan | Porsi aset yang diharapkan yang terlihat oleh penemuan pada periode itu | aset yang terlihat setidaknya satu sumber penemuan dalam 30 hari terakhir / aset dalam register yang dapat dilihat penemuan | persen | Laporan alat penemuan digabung dengan register | Manajemen aset TI; manajemen pemantauan dan peristiwa | Keadaan infrastruktur sebagai kode cocok dengan kenyataan | Bulanan |
| Tingkat rekonsiliasi | Porsi aset yang dicocokkan lintas sumber independen | aset yang cocok di register dan sumber kedua (misalnya pengadaan, identitas, atau penagihan cloud) / aset di salah satu sumber | persen | Ekspor register, pengadaan, identitas, penagihan cloud | Manajemen aset TI; manajemen pemasok | Satu sumber kebenaran untuk lingkungan | Bulanan |
| Porsi aset tanpa pemilik | Porsi aset tanpa pemilik bernama yang valid | aset tanpa pemilik atau dengan pemilik yang telah pergi / aset dalam register | persen | Register digabung dengan direktori orang | Manajemen aset TI; manajemen keamanan informasi | Kepemilikan jelas atas layanan dan komponen | Bulanan |
| Kelengkapan tahap siklus hidup | Porsi aset dengan tahap siklus hidup terkini dan tanggal yang disyaratkan tahap itu | aset dengan tahap dan tanggal wajib tercatat / aset dalam register | persen | Register | Manajemen aset TI; manajemen rilis dan deployment | Siklus hidup lingkungan dilacak di pipeline | Bulanan |
| Waktu mencatat | Jeda antara perubahan aset dan pembaruannya di register | median dan persentil ke-85 jam atau hari dari peristiwa perubahan sampai pembaruan register | hari | Peristiwa perubahan, pengadaan, atau pipeline dibandingkan dengan stempel waktu register | Manajemen aset TI; pemberdayaan perubahan | Pendaftaran otomatis di pipeline | Bulanan |
| Tingkat aset tak terhitung | Porsi aset yang diharapkan yang tak dapat ditemukan atau dijelaskan saat audit | aset diharapkan tetapi tak ditemukan, dan tak dijelaskan oleh pembuangan yang disetujui / aset diharapkan | persen | Hasil audit | Manajemen aset TI; manajemen keamanan informasi | Temuan retrospektif tentang item hilang | Per audit |

Nyatakan lingkup “aset” untuk tiap kelas. Laptop, mesin virtual, langganan, dan lisensi berbeda, dan kolom catatan serta buktinya berbeda. Waktu mencatat dimulai pada peristiwa yang menciptakan perubahan, seperti barang diterima, eksekusi pipeline, atau awal langganan, dan berhenti ketika register mencerminkannya. Kecualikan aset yang sengaja di luar lingkup, seperti kontainer uji berumur pendek, dan daftar sebagai kelas pengecualian di register.

## Rekomendasi

### Putuskan apa yang Anda kelola

**1. Daftar kelas aset yang penting dan mengapa.** Mulai dengan yang membawa biaya, risiko, atau kewajiban hukum: perangkat pengguna akhir, server dan akun cloud, peralatan jaringan, lisensi dan langganan perangkat lunak, dan penyimpanan data kritis. Untuk tiap kelas, tuliskan keputusan yang harus didukung catatan: penambalan, pembaruan, audit, penyegaran, pembuangan. Lewati kelas yang tak dibutuhkan keputusan mana pun.

**2. Definisikan kolom minimum.** Untuk tiap kelas, pilih beberapa kolom yang dibutuhkan keputusan: pengenal, jenis, pemilik, lokasi atau akun, status, tanggal perolehan dan akhir, pusat biaya, dan tautan ke layanan yang didukungnya. Catatan pendek yang akurat lebih berharga daripada yang panjang yang basi. Catat definisi di register metrik.

**3. Tetapkan pemilik untuk setiap kelas dan setiap aset.** Pemilik kelas merancang catatan dan proses. Pemilik aset adalah orang atau tim yang bertanggung jawab atas aset dalam pemakaian. Pakai tim, bukan individu, ketika aset dibagi, dan jaga direktori tetap terkini agar kepergian tidak membuat aset yatim.

### Tangkap aset saat pekerjaan terjadi

**4. Daftarkan aset di pipeline.** Di mana infrastruktur dibuat oleh kode, minta pipeline menulis ke register saat pembuatan dan penghapusan. Itu membuat waktu mencatat mendekati nol dan membuat register sepakat dengan kode. Praktik agile menyampaikan perubahan secara berkelanjutan mendukung ini: jika setiap deployment memperbarui catatan, catatan jarang salah.

**5. Tautkan pengadaan dan register.** Untuk perangkat keras dan perangkat lunak yang dibeli, jadikan pesanan pembelian atau pembuatan langganan sebagai pemicu catatan, dan penerimaan barang atau aktivasi sebagai pemicu perubahan keadaan. Praktik [manajemen persediaan](https://en.wikipedia.org/wiki/Inventory_management) untuk barang fisik menawarkan pola berguna untuk menerima, menyimpan, dan mengeluarkan item. Di mana pembelian terjadi di luar pengadaan, seperti kartu kredit tim untuk langganan, tambahkan pemeriksaan bulanan atas data pengeluaran.

**6. Pakai penemuan sebagai pemeriksaan, bukan sebagai catatan.** Alat penemuan memindai jaringan dan akun cloud dan melaporkan apa yang ditemukan. Mereka baik dalam memberi tahu apa yang ada dan buruk dalam memberi tahu siapa yang memilikinya atau mengapa. Pakai untuk mendeteksi aset yang hilang dan tak dikenal dan membandingkan dengan register. Langkah mencocokkan satu sumber terhadap yang lain adalah bentuk [rekonsiliasi](https://en.wikipedia.org/wiki/Reconciliation_(accounting)), gagasan yang sama yang dipakai akuntan untuk membandingkan dua himpunan catatan.

**7. Beri tag dan label saat pembuatan.** Wajibkan pemilik dan tag layanan pada setiap sumber daya cloud dan label pada setiap perangkat fisik. Metode [pelacakan aset](https://en.wikipedia.org/wiki/Asset_tracking) seperti kode batang dan tag frekuensi radio membantu untuk item fisik di gudang dan kantor. Sumber daya tanpa tag adalah temuan untuk tim pemilik, ditangani sebagai bagian normal operasi.

### Ukur dengan jujur

**8. Audit dengan sampel acak.** Tiap kuartal, tarik sampel acak aset dari register dan periksa terhadap bukti: temukan perangkat, periksa sumber daya, konfirmasi pemilik. Lalu tarik sampel arah sebaliknya, dari hasil penemuan dan data pengadaan, dan periksa bahwa masing-masing muncul di register. Kedua arah mengungkap celah berbeda. Laporkan akurasi untuk tiap kelas terpisah.

**9. Awasi kualitas data dari waktu ke waktu.** Kelengkapan, akurasi, dan ketepatan waktu catatan adalah aspek [kualitas data](https://en.wikipedia.org/wiki/Data_quality). Lacak tren per kolom dan per kelas, dan lihat kolom mana yang hanyut paling cepat. Hanyutan pada pemilik dan lokasi normal dan memberi tahu di mana mengotomatisasi.

**10. Laporkan celahnya.** Tampilkan aset tak terhitung, porsi tanpa pemilik, dan item yang belum direkonsiliasi selain akurasi judul. Laporan yang menyembunyikan pengecualiannya adalah laporan tentang laporan. Namai pemilik dan tanggal untuk tiap kelas celah.

### Tutup lingkaran

**11. Pensiunkan aset sedeliberat Anda menciptakannya.** Pembuangan juga butuh catatan: tanggal, metode, dan untuk perangkat yang menyimpan data, bukti bahwa data dihapus. Catatan [rantai penguasaan](https://en.wikipedia.org/wiki/Chain_of_custody) menunjukkan siapa menangani aset dan kapan. Aset yang dipensiunkan yang masih di register menggelembungkan biaya dan membingungkan audit.

**12. Pakai catatan dalam keputusan sehari-hari.** Penambalan, pembaruan, respons keamanan, dan penganggaran sebaiknya membaca dari register. Ketika orang memakainya, mereka memperbaikinya. Ketika register hanya untuk audit, ia membusuk. Tinjau pemakaian register bersama tim yang bergantung padanya, dan perbaiki kolom yang mereka keluhkan lebih dulu.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Akurasi inventaris | Menyampel aset mudah; mengaudit hanya setelah pembersihan; menghitung kecocokan pada lebih sedikit kolom | Sampel acak ditarik seseorang di luar tim; daftar kolom tetap; sampel dari kedua arah |
| Cakupan penemuan | Mempersempit “aset diharapkan” menjadi yang dapat dilihat penemuan; mengecualikan jaringan yang sulit dipindai | Dokumentasikan pengecualian; bandingkan dengan pengadaan dan penagihan cloud |
| Tingkat rekonsiliasi | Memilih sumber kedua yang diturunkan dari yang pertama; mencocokkan otomatis pada kunci lemah | Pakai sumber yang benar-benar independen; periksa kecocokan sampel dengan tangan |
| Porsi aset tanpa pemilik | Menetapkan tim serba ada sebagai pemilik; memasukkan orang placeholder | Hitungan aset yang dimiliki tim serba ada; sampel konfirmasi pemilik |
| Kelengkapan tahap siklus hidup | Mengisi tanggal bawaan; menetapkan setiap aset ke “dipakai” | Bandingkan tahap dengan bukti dalam audit; lihat distribusi usia |
| Waktu mencatat | Memundurkan tanggal peristiwa perubahan; mencatat waktu peristiwa sebagai waktu catatan | Bandingkan dengan stempel waktu sistem sumber; jejak audit pada suntingan |
| Tingkat aset tak terhitung | Menghapusbukukan aset tanpa persetujuan; mengklasifikasi ulang sebagai dibuang | Tingkat persetujuan dan bukti pembuangan; bandingkan penghapusan dengan catatan keuangan |

Pembacaan yang sehat adalah angka akurasi yang tetap di bawah 100 persen karena alasan jujur, dengan celah terlihat yang menyusut, pemilik yang mengonfirmasi asetnya bila ditanya, dan catatan yang dipakai orang untuk membuat keputusan.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Pendaftaran otomatis | Cepat, konsisten, upaya rendah | Butuh rekayasa; melewatkan yang di luar pipeline |
| Pendaftaran manual | Fleksibel, berfungsi untuk apa saja | Lambat, rawan galat, membusuk |
| Digerakkan penemuan | Menemukan yang tak diketahui | Tidak dapat menyediakan kepemilikan atau tujuan |
| Digerakkan pengadaan | Menangkap biaya dan kontrak | Melewatkan pembelian bayangan dan tingkat gratis |
| Kendali ketat atas pembelian | Catatan kuat | Memperlambat tim; mendorong solusi sementara |
| Kendali ringan dengan pemeriksaan | Cepat; bergantung pada kepercayaan | Lebih banyak celah untuk ditemukan dan diperbaiki |
| Skema catatan besar | Pelaporan kaya | Sulit dijaga akurat |
| Skema catatan kecil | Mudah dirawat | Analisis terbatas |

Jawaban prosanya adalah mengotomatisasi pendaftaran di mana infrastruktur adalah kode, memakai data penemuan dan penagihan sebagai pemeriksaan independen, dan menjaga catatan kecil. Percayai tim untuk membuat apa yang mereka butuhkan, minta mereka memberi tag, dan verifikasi dengan pengambilan sampel.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Jika kita harus menemukan setiap aset yang terikat pada layanan terpenting kita besok, berapa lama?**
Pilih satu layanan dan telusuri asetnya dari register dan dari sumber lain. Waktukan latihan dan catat celahnya. Fasilitator sebaiknya mencatat sumber mana yang sepakat dan mana yang tidak. Hasilnya menunjukkan apakah register adalah alat kerja atau dokumen.

**2. Aset mana yang tercipta tanpa diketahui siapa pun di ruangan ini?**
Pikirkan akun cloud, langganan, lingkungan uji, dan perangkat yang dibeli di luar pengadaan. Tanyakan bagaimana semua itu akan muncul. Percakapan menemukan kebocoran. Sepakati satu sumber bukti independen untuk ditambahkan ke rekonsiliasi kuartal ini.

**3. Siapa yang memiliki aset yang kita punya hari ini, dan bagaimana kita tahu mereka masih ada?**
Ambil sampel aset dan minta pemilik bernama mengonfirmasi. Catat berapa banyak pemilik yang berganti peran atau pergi. Putuskan bagaimana direktori dan register akan tetap selaras, misalnya dengan pemeriksaan otomatis ketika seseorang pergi.

**4. Bagaimana kita mengaudit register kita sendiri tanpa menilai pekerjaan rumah sendiri?**
Bahas siapa yang menarik sampel dan siapa yang memeriksanya. Tanyakan apa yang terjadi jika hasilnya buruk. Fasilitator sebaiknya menjelajahi apakah orang merasa aman melaporkan angka buruk, karena audit yang tak aman menghasilkan angka baik.

**5. Apa yang kita catat yang tidak dipakai siapa pun?**
Daftar kolom dalam register dan tanyakan keputusan mana yang memakai tiap kolom. Kolom tanpa pemakai adalah kandidat untuk dihapus. Kolom yang dipakai tetapi tak andal adalah kandidat untuk otomatisasi. Sepakati dua perubahan.

**6. Apa yang terjadi pada aset antara “tak lagi dibutuhkan” dan “lenyap”?**
Telusuri perangkat yang dipensiunkan atau layanan yang dinonaktifkan. Siapa yang mengonfirmasi data dihapus? Kapan catatan ditutup? Celah pada jalur ini adalah tempat biaya, risiko, dan temuan audit menumpuk.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman menciptakan sebagian besar aset baru, dan merasakan pencatatan sebagai gesekan kecuali otomatis. Mereka sebaiknya memperlakukan catatan aset sebagai bagian definisi selesai untuk lingkungan, membiarkan pipeline mendaftarkan apa yang dibuatnya, dan memberi tag sumber daya dengan pemilik. Mereka diuntungkan oleh catatan akurat ketika perlu menemukan biaya, menambal, atau memensiunkan lingkungan.

### Tim layanan dan operasi

Tim operasi bergantung pada register untuk penambalan, respons insiden, dan kapasitas. Mereka sebaiknya merekonsiliasi penemuan dengan register, mengejar aset tanpa pemilik, dan melaporkan celah sebagai temuan. Mereka juga memegang penanganan fisik: menerima, membuat citra, menyimpan, dan membuang, tempat catatan rantai penguasaan penting.

### Kepemimpinan dan tata kelola

Pemimpin dan auditor mengandalkan data aset untuk pengendalian biaya, jaminan keamanan, dan kepatuhan. Mereka sebaiknya meminta metode akurasi dan daftar celah, bukan hanya judul, dan mendanai otomatisasi pendaftaran. Tata kelola sebaiknya mengharapkan register dipakai dalam keputusan dan menyikapi 100 persen yang dilaporkan dengan kecurigaan.

### Pelanggan dan pengguna

Pengguna mengalami manajemen aset ketika perangkat tiba siap, lisensi ada saat dibutuhkan, dan laptop hilang ditangani dengan baik. Umpan balik mereka tentang orientasi dan peralatan adalah bukti bagaimana proses bekerja dalam praktik (lihat topik 6.4, Pengalaman pengguna dan karyawan). Mereka juga punya peran: memberi tahu TI ketika peralatan berpindah atau pergi.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah perusahaan logistik berukuran menengah mendukung sekitar 2.400 staf dan menjalankan platform produk di infrastruktur cloud. Angka di bawah bersifat ilustratif.

Audit internal meminta jumlah perangkat dan sumber daya cloud yang dimiliki perusahaan. Register menunjukkan 3.100 perangkat pengguna akhir dan 1.850 sumber daya cloud. Manajer aset memutuskan menguji angka sebelum melaporkannya. Ia menarik sampel acak 100 perangkat dari register dan mendapati 87 cocok pada keempat kolom yang disepakati, akurasi 87 persen. Dari arah sebaliknya, ia menarik 100 perangkat dari alat manajemen endpoint dan mendapati 94 ada di register. Cakupan penemuan aset cloud adalah 82 persen, karena tiga akun yang dibuat tim proyek tidak tersambung ke alat penemuan. Merekonsiliasi ekspor penagihan cloud dengan register mencocokkan 71 persen sumber daya yang ditagih, dan yang tak cocok sebagian besar lingkungan uji tanpa tag. Porsi aset tanpa pemilik adalah 9 persen, dengan sepertiganya dimiliki orang yang telah pergi.

Tim membuat empat perubahan bersama tim produk dan keuangan. Templat pipeline kini mendaftarkan setiap lingkungan baru dan mewajibkan pemilik dan tag layanan. Tagihan cloud bulanan direkonsiliasi terhadap register, dengan sumber daya tanpa tag dilaporkan kepada pemilik akun. Pemeriksaan bulanan membandingkan direktori orang dengan pemilik aset dan mengirim daftar ke manajer ketika seseorang pergi. Penerimaan barang di gudang memicu pembaruan register pada hari yang sama. Mereka juga mengubah cara melaporkan: ringkasan audit menunjukkan akurasi dari kedua arah sampel, daftar celah, dan porsi tanpa pemilik.

Setelah dua kuartal, akurasi dari sampel register adalah 93 persen, rekonsiliasi aset cloud 90 persen, dan porsi tanpa pemilik 3 persen. Kepala keuangan meminta satu angka “akurasi inventaris” untuk dewan. Manajer aset memberi angka dengan metode dan daftar celah, dan menolak melaporkan target 100 persen, menjelaskan bahwa tujuannya menjaga celah tetap terlihat dan menyusut. Keputusan dicatat, dan tim mencatat bahwa angka lebih rendah dari metode lebih baik lebih berguna daripada angka sebelumnya yang tak terverifikasi.

## Sudut pandang sektor

**Startup.** Mungkin tak ada register formal, hanya akun cloud dan beberapa laptop. Simpan daftar sederhana dengan pemilik, beri tag sumber daya cloud sejak awal, dan tinjau daftar bulanan. Hindari membeli platform sebelum Anda tahu pertanyaan apa yang perlu dijawab.

**Bisnis kecil.** Satu administrator mungkin menangani semuanya. Lembar kerja dengan beberapa kolom dapat berfungsi, jika seseorang memeriksanya terhadap pembelian dua kali setahun. Perhatikan lisensi dan langganan, yang mudah terlupa, dan pembuangan perangkat yang menyimpan data.

**Perusahaan besar.** Skala butuh otomatisasi, pemilik kelas yang jelas, dan rekonsiliasi lintas beberapa sumber. Harapkan akuisisi membawa aset yang tak dikenal, dan rencanakan cara standar membawanya ke catatan yang sama. Selaraskan dengan keuangan tentang akuntansi aset, termasuk bagaimana [aset tetap](https://en.wikipedia.org/wiki/Fixed_asset) dikapitalisasi dan disusutkan, dan sepakati di mana register TI dan buku besar keuangan harus cocok.

**Pemerintah dan sektor publik.** Badan publik menghadapi audit, aturan pengadaan, dan kewajiban catatan, dan sering menyimpan data sensitif pada perangkat. Simpan bukti pembuangan, dokumentasikan rantai penguasaan, dan selaraskan register dengan pelaporan aset yang diwajibkan. Perlakukan register sebagai bagian bukti untuk audit (lihat topik 8.3, Metrik kepatuhan dan audit).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya mencakup waktu merancang catatan, perkakas untuk penemuan dan rekonsiliasi bila Anda belum punya, upaya rekayasa untuk mendaftarkan aset di pipeline, dan upaya rutin pengambilan sampel dan perbaikan. Banyak organisasi sudah memiliki alat penemuan dan endpoint. Tim sederhana dapat menjalankan program, dan biaya berkelanjutan rendah begitu pendaftaran diotomatisasi.

Imbal hasilnya adalah pemborosan yang dihindari dan risiko berkurang. Catatan akurat mengurangi membayar langganan dan sumber daya tak terpakai, mempercepat respons insiden dan penambalan karena Anda tahu apa yang ada, dan memangkas upaya audit. Hindari mengklaim penghematan persentase spesifik dari studi terbitan. Ukur garis dasar Anda sendiri: jumlah sumber daya cloud tanpa pemilik dan biaya bulanannya, waktu menjawab pertanyaan audit, dan lisensi yang dibayar tetapi tak terpakai. Hitung juga biaya risiko: server tak dikenal adalah paparan keamanan, dan laptop hilang dengan data berbiaya pemberitahuan. Perlakuan keuangan atas biaya dibahas kemudian dalam bagian ini (lihat topik 7.5, Biaya layanan dan ekonomi per unit).

## Anti-pola dan jebakan

- **Pembersihan tahunan.** Upaya besar sekali setahun membusuk dalam hitungan pekan. Catat terus-menerus dan ambil sampel tiap kuartal.
- **Mengaudit hanya register.** Itu membuktikan register sepakat dengan dirinya sendiri. Ambil sampel dari bukti independen ke kedua arah.
- **Skor sempurna.** Angka 100 persen biasanya berarti lingkup sempit atau bukti lemah. Lihat apa yang dikecualikan.
- **Kolom pemilik diisi catch-all tim.** Tampak lengkap dan tak berguna. Hitung kepemilikan catch-all sebagai celah.
- **Terlalu banyak kolom.** Orang mengisinya dengan bawaan. Jaga catatan sebatas yang dibutuhkan keputusan.
- **Alat dulu, proses belakangan.** Platform penemuan tanpa aturan kepemilikan dan siklus hidup menghasilkan kekacauan lebih besar. Putuskan pertanyaannya dulu.
- **Menghukum tim karena celah.** Mereka menyembunyikan aset. Perlakukan celah sebagai temuan dan perbaiki sebabnya.
- **Melupakan pembuangan.** Aset yang dipensiunkan yang tetap di register atau pergi tanpa catatan penghapusan menciptakan biaya dan risiko.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Penangkapan | Lembar kerja diperbarui ketika diingat | Register untuk kelas utama, sebagian besar manual | Pendaftaran terikat pada pengadaan dan pipeline | Pendaftaran diotomatisasi; waktu mencatat diukur | Aset didaftarkan lintas tim dan pemasok dari satu aliran peristiwa |
| Akurasi | Tak diketahui | Penghitungan sesekali | Pengambilan sampel independen kuartalan ke kedua arah | Akurasi dan celah dilacak per kelas dan disuapkan ke perbaikan | Pemeriksaan independen dibagikan antara TI, keuangan, dan keamanan |
| Pemakaian | Register dipakai hanya untuk audit | Dipakai beberapa tim | Penambalan, pembaruan, dan penganggaran membaca dari register | Pemakaian ditinjau; kolom disetel pada keputusan | Register menggerakkan keputusan otomatis dengan pengawasan manusia |

## Daftar periksa

- [ ] Kelas aset dan keputusan yang didukung tiap catatan didaftar.
- [ ] Kolom minimum per kelas didefinisikan dan dicatat di register metrik.
- [ ] Setiap kelas dan setiap aset punya pemilik bernama, dijaga terkini terhadap direktori.
- [ ] Pipeline mendaftarkan infrastruktur baru dengan pemilik dan tag layanan.
- [ ] Pengadaan dan pembuatan langganan memicu catatan aset.
- [ ] Data penemuan dan penagihan direkonsiliasi dengan register bulanan.
- [ ] Sampel acak diaudit tiap kuartal ke kedua arah.
- [ ] Daftar celah dengan pemilik dan tanggal diterbitkan bersama angka akurasi.
- [ ] Pembuangan punya metode tercatat dan bukti penghapusan data.
- [ ] Kolom tak terpakai dihapus; register dipakai dalam keputusan harian.

## Prompt AI

**Rancang catatan aset minimum.**

```text
Kami mengelola kelas aset TI ini di [type of organization]: [list]. Keputusan
yang harus didukung data aset kami adalah: [list, for example patching, renewal,
audit, refresh, disposal]. Untuk tiap kelas, usulkan kolom minimum untuk catatan,
sumber mana yang menyediakan tiap kolom, dan bagaimana masing-masing dapat
diverifikasi secara independen. Jangan mengarang persyaratan regulasi. Daftar
asumsi Anda dan apa pun yang harus saya konfirmasi dengan keuangan, keamanan, atau
hukum.
```

**Rencanakan sampel audit dua arah.**

```text
Register kami berisi [number] aset di [classes]. Kami juga punya data penemuan,
data pengadaan, dan data penagihan cloud. Rancang audit kuartalan dengan sampel
acak ditarik dari register dan dari sumber lain, katakan seberapa besar tiap
sampel agar bacaan berguna (jelaskan penalarannya tanpa melebih-lebihkan
presisi), apa yang dicatat, dan bagaimana melaporkan akurasi dan celah dengan
jujur. Daftar asumsi Anda.
```

**Analisis hasil rekonsiliasi.**

```text
Kami merekonsiliasi register kami dengan [source] dan menemukan: cocok [number],
hanya di register [number], hanya di sumber [number]. Berikut contoh tiap
kelompok dengan kolom yang kami pegang: [paste anonymized examples]. Sarankan
alasan yang mungkin untuk tiap ketidakcocokan, mana yang cepat diperbaiki, mana
yang butuh perubahan proses, dan apa yang diperiksa lebih dulu. Jangan
mengasumsikan sebab yang tidak dapat didukung data. Daftar asumsi Anda.
```

**Susun pemeriksaan keluar dan pindah.**

```text
Susun proses bulanan sederhana untuk menemukan aset yang pemiliknya telah pergi
atau berganti peran, memakai direktori orang dan register aset. Sertakan langkah,
siapa yang menerima daftar, waktu yang diizinkan untuk menetapkan ulang, apa yang
terjadi jika tak ada yang merespons, dan bagaimana mencatat hasilnya. Konteks:
[tools and team size]. Daftar asumsi Anda dan pertimbangan privasi yang harus saya
periksa.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik aset sebelum Anda melaporkannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik aset membawa vektor manipulasi, pagar pembatas, dan aturan bukti independennya.

## Poin penting

- Catat aset pada saat perubahan, sebaiknya lewat pipeline dan pengadaan, agar register adalah hasil sampingan pekerjaan.
- Ukur akurasi terhadap bukti independen, mengambil sampel ke kedua arah.
- Setiap aset butuh pemilik, dan aset tanpa pemilik adalah temuan.
- Jaga catatan kecil dan buat berguna dalam keputusan harian.
- Laporkan celahnya, bukan hanya judul, dan curigai skor sempurna.
- Rencanakan pembuangan secermat penciptaan.

## Referensi dan bacaan lanjutan

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
