# Metrik kepatuhan dan audit

**Kepatuhan paling mudah dan paling jujur ketika bukti dihasilkan oleh pekerjaan itu sendiri, jadi ukur seberapa banyak bukti datang secara otomatis, secepat apa temuan diperbaiki, dan seberapa sering temuan yang sama kembali, dan perlakukan auditor sebagai pemangku kepentingan yang bergabung dalam percakapan sejak dini.**

## Gambaran umum dan motivasi

Kebanyakan organisasi yang membangun dan menjalankan layanan TI bertanggung jawab kepada seseorang: regulator, pelanggan, badan sertifikasi, perusahaan asuransi, dewan. [Kepatuhan regulasi](https://en.wikipedia.org/wiki/Regulatory_compliance) adalah tindakan menyesuaikan diri dengan hukum, aturan, dan standar, serta menunjukkan bahwa Anda melakukannya. Audit adalah pemeriksaan sistematis atas bukti untuk menilai apakah hal itu benar. Dalam TI ini mencakup audit kendali pelaporan keuangan, kewajiban perlindungan data, sertifikasi keamanan, dan komitmen kontraktual. [Audit teknologi informasi](https://en.wikipedia.org/wiki/Information_technology_audit) memeriksa kendali di sekitar sistem dan data yang dipegangnya.

Kepatuhan dan pengiriman berkelanjutan punya reputasi gesekan. Kepatuhan meminta dokumen, tanda tangan, dan persetujuan sebelum perubahan, dan pengiriman berkelanjutan menyukai perubahan kecil yang dirilis terus-menerus. Gesekan itu nyata ketika kepatuhan diperlakukan sebagai fase di akhir. Gesekan berkurang ketika kepatuhan dibangun ke dalam alur kerja. Catatan perubahan, tinjauan kode, pengujian otomatis, dan log akses adalah bukti, dan pipeline pengiriman menghasilkannya setiap hari. [Audit berkelanjutan](https://en.wikipedia.org/wiki/Continuous_auditing) memakai pemeriksaan kendali otomatis yang hampir waktu nyata alih-alih sampel berkala, dan cocok dengan irama pengiriman berkelanjutan. [Jejak audit](https://en.wikipedia.org/wiki/Audit_trail) adalah catatan yang menunjukkan siapa melakukan apa, kapan, pada sistem mana, dan sering menjadi bukti terkuat yang Anda miliki.

ITIL menggambarkan praktik yang relevan: manajemen keamanan informasi, manajemen risiko, dan tata kelola sistem nilai layanan, dan menunjuk pada standar seperti [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) untuk sistem manajemen keamanan informasi. Kerangka yang lazim dihadapi organisasi mencakup rezim pelaporan untuk kendali keuangan, seperti [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) di Amerika Serikat, undang-undang perlindungan data seperti [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) di Uni Eropa, dan laporan penjaminan seperti [SOC 2](https://en.wikipedia.org/wiki/SOC_2), yang memeriksa kendali yang relevan dengan keamanan dan kriteria terkait. Detailnya berbeda menurut yurisdiksi, sektor, dan tanggal, dan topik ini menggambarkan praktik pengukuran, bukan persyaratan hukum. Bekerjalah dengan rekan kepatuhan, hukum, dan audit Anda untuk mengetahui apa yang berlaku bagi Anda.

Tujuan metrik kepatuhan adalah mempelajari seberapa baik organisasi memenuhi kewajibannya dan seberapa besar upaya yang dibutuhkan, agar keduanya dapat membaik. Risikonya adalah kepatuhan menjadi pertunjukan untuk auditor. Tim dapat lulus audit dengan menghasilkan dokumen pada menit terakhir dan tetap menjalankan praktik berisiko. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku: ketika “temuan audit” menjadi target, orang menghindari pengamatan, mempersempit lingkup, dan menawar kata-kata (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Dua alur pikir membantu.

- **Kepatuhan sebagai hasil sampingan.** Jika pipeline mencatat tinjauan, pengujian, persetujuan, dan deployment secara otomatis, bukti ada baik audit sudah dekat maupun tidak. Ini juga menghilangkan godaan merekonstruksi bukti sesudahnya.
- **Auditor sebagai pemangku kepentingan.** Praktik agile menghargai kolaborasi berkelanjutan dengan pemangku kepentingan. Auditor dan penilai adalah pemangku kepentingan dengan pertanyaan yang sah. Melibatkan mereka dalam merancang kendali dan bukti mengurangi kejutan dan pengerjaan ulang, sambil menjaga independensi mereka.

## Prinsip utama

- **Hasilkan bukti sebagai hasil sampingan pekerjaan.** Pipeline, tiket, dan log sebaiknya menjawab sebagian besar pertanyaan audit.
- **Petakan kewajiban ke kendali dan pemilik.** Setiap kewajiban punya kendali, dan setiap kendali punya pemilik.
- **Berkolaborasi sejak dini dengan auditor.** Bagikan desain dan pendekatan bukti sebelum audit, dan jaga independensi mereka.
- **Perbaiki sebab, bukan temuan.** Temuan yang ditutup tanpa menghapus sebabnya akan kembali.
- **Ukur upaya selain hasil.** Biaya kepatuhan adalah bagian gambaran.
- **Pertahankan pemisahan tugas di mana penting.** Independensi tinjauan adalah kendali yang dapat didukung otomatisasi tetapi tidak digantikannya.
- **Jujurlah tentang celah.** Kelemahan yang dilaporkan sendiri lebih baik ditemukan oleh Anda daripada oleh orang lain.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan kewajiban | Porsi kewajiban yang berlaku yang dipetakan ke kendali dengan pemilik dan sumber bukti | kewajiban dipetakan ke setidaknya satu kendali dengan pemilik dan sumber bukti / kewajiban yang berlaku | persen | Register kewajiban dan register kendali | Tata kelola; manajemen keamanan informasi; manajemen risiko | Definisi selesai mencakup bukti kendali | Kuartalan |
| Tingkat otomatisasi bukti | Porsi bukti kendali dalam lingkup yang dikumpulkan otomatis dari sistem pencatatan | item bukti kendali dikumpulkan otomatis / item bukti yang dibutuhkan | persen | Register kendali, pipeline dan log sistem | Manajemen keamanan informasi; pemberdayaan perubahan | Pipeline mencatat tinjauan, pengujian, dan deployment secara otomatis | Kuartalan |
| Waktu penyampaian bukti | Waktu menyediakan bukti yang diminta auditor atau penilai | median dan persentil ke-85 hari dari permintaan sampai bukti diterima | hari | Pelacak permintaan audit | Tata kelola; manajemen keamanan informasi | Responsivitas terhadap pertanyaan pemangku kepentingan | Per audit |
| Waktu penutupan temuan | Waktu menutup temuan audit menurut keparahan | median dan persentil ke-85 hari dari temuan diterbitkan sampai penutupan terverifikasi | hari | Pelacak temuan | Perbaikan berkelanjutan; manajemen risiko | Waktu memperbaiki cacat | Bulanan |
| Tingkat temuan berulang | Porsi temuan yang berulang dari audit atau tinjauan sebelumnya | temuan yang secara substansi cocok dengan temuan tertutup sebelumnya / temuan pada periode itu | persen | Pelacak temuan dengan tautan sebab | Perbaikan berkelanjutan; manajemen masalah | Cacat berulang setelah perbaikan | Per siklus audit |
| Konflik pemisahan tugas | Hitungan kombinasi akses atau persetujuan yang melanggar aturan pemisahan, dan waktu menyelesaikan | konflik terdeteksi; median hari untuk menyelesaikan | hitungan; hari | Alat manajemen identitas dan akses, catatan perubahan | Manajemen keamanan informasi; pemberdayaan perubahan | Tinjauan independen atas perubahan | Bulanan |
| Upaya audit | Jam-orang yang dihabiskan organisasi untuk mempersiapkan dan mendukung siklus audit, per unit lingkup | jam dicatat untuk persiapan dan dukungan audit / kendali atau sistem dalam lingkup | jam per unit | Catatan waktu atau estimasi upaya | Tata kelola; perbaikan berkelanjutan | Biaya pekerjaan non-pengiriman | Per siklus audit |

Nyatakan kewajiban dalam lingkup dan lingkup audit di register. Waktu penutupan dimulai ketika temuan diterbitkan dan berhenti ketika auditor atau pemverifikasi independen mengonfirmasi penutupan, bukan ketika tim mengatakan selesai. Temuan berulang dicocokkan menurut sebab, bukan menurut kata-kata, dan aturan pencocokan dicatat. Upaya audit adalah ukuran tren bagi organisasi dan tidak pernah ukuran individu.

## Rekomendasi

### Kenali kewajiban dan kendali Anda

**1. Daftar kewajiban yang berlaku, dalam bahasa lugas.** Bersama rekan hukum dan kepatuhan, daftar hukum, standar, kontrak, dan kebijakan yang mengikat layanan, dan apa yang diwajibkan masing-masing dalam hal hasil. Jaga daftar pendek dan terbaca. Kewajiban yang tak dapat dinyatakan dengan lugas oleh siapa pun adalah yang menyebabkan kejutan audit.

**2. Petakan tiap kewajiban ke kendali, pemilik, dan bukti.** Untuk tiap kewajiban, namai kendali yang memenuhinya, orang yang bertanggung jawab, dan bukti yang menunjukkan kendali beroperasi. Di mana satu kendali memenuhi beberapa kewajiban, katakan, karena itu mengurangi upaya ganda. Cakupan kewajiban mengukur kelengkapan peta ini. Kewajiban yang tak terpetakan adalah celah untuk ditutup atau diterima dengan sadar.

**3. Utamakan kendali yang lebih sedikit dan lebih kuat.** Kendali yang otomatis dan teruji bernilai beberapa kendali manual. Cari kendali yang tumpang tindih, dan pensiunkan yang tidak melayani kewajiban apa pun. Setiap kendali berbiaya upaya untuk dioperasikan dan dibuktikan (lihat topik 8.2, Metrik risiko dan kendali).

### Jadikan bukti hasil sampingan

**4. Biarkan pipeline menghasilkan bukti.** Kaitkan setiap perubahan produksi dengan permintaan, tinjauan kode, hasil pengujian, dan persetujuan bila diwajibkan, semuanya dicatat otomatis. Catatan deployment yang menunjukkan ini memberi tahu auditor apa yang terjadi tanpa dokumen yang ditulis. Ini bergantung pada praktik pengiriman berkelanjutan yang sudah dipakai tim agile (lihat topik 4.5, Metrik rilis dan deployment).

**5. Pakai pemeriksaan kebijakan di pipeline.** Kodekan aturan, seperti “tidak ada deployment tanpa tinjauan oleh seseorang selain penulisnya” atau “tidak ada akses produksi tanpa tiket”, sebagai pemeriksaan otomatis. Pemeriksaan itu sekaligus kendali dan buktinya. Jaga aturan terlihat dan berversi, agar perubahan padanya juga tercatat. Ini mendukung [pemisahan tugas](https://en.wikipedia.org/wiki/Segregation_of_duties), prinsip bahwa tak ada satu orang pun yang sebaiknya mengendalikan semua tahap proses sensitif.

**6. Pelihara jejak audit dengan benar.** Simpan log akses dan perubahan dengan cara yang tak dapat diubah oleh orang yang digambarkannya, pertahankan selama periode yang diwajibkan, dan buat dapat dicari. Jejak yang dapat disunting oleh pihak yang dicatatnya adalah bukti lemah. Periksa aturan retensi bersama rekan hukum.

**7. Ukur seberapa banyak bukti yang otomatis.** Tingkat otomatisasi bukti menunjukkan di mana pengumpulan manual tetap ada. Urutkan item manual menurut upaya dan risiko, dan otomatisasi yang terburuk lebih dulu. Seiring tingkat naik, upaya audit dan waktu penyampaian turun.

### Bekerja sama dengan auditor

**8. Undang auditor ke dalam desain.** Bagikan rencana perubahan kendali dan bukti kepada audit internal dan penilai eksternal sejak dini, dan tanyakan apa yang akan memuaskan mereka. Independensi berarti mereka tidak merancang kendali Anda, dan tidak berarti mereka tak dapat memberi tahu Anda bukti apa yang akan mereka butuhkan. Percakapan awal mengurangi pengerjaan ulang. Institute of Internal Auditors menerbitkan standar untuk profesi yang menjelaskan peran [audit internal](https://en.wikipedia.org/wiki/Internal_audit).

**9. Siapkan indeks bukti.** Simpan indeks hidup tentang di mana tiap jenis bukti berada dan cara mengambilnya. Lacak waktu penyampaian untuk permintaan bukti dan pakai keterlambatan untuk menemukan otomatisasi yang hilang. Proses pendek dan mantap mengalahkan berebut sebelum tiap audit.

**10. Sepakati makna materialitas dan lingkup.** Tanyakan kepada auditor bagaimana mereka menilai apa yang penting dan apa yang dalam lingkup, dan catat jawabannya. Pemahaman bersama mencegah sengketa kemudian. Jangan mempersempit lingkup untuk menghindari pengamatan, dan jangan memperluasnya tanpa alasan.

### Perbaiki sebab dan belajar

**11. Perlakukan tiap temuan sebagai catatan masalah.** Temukan sebabnya, perbaiki, dan verifikasi penutupan oleh pihak independen. Kaitkan temuan berulang dengan yang sebelumnya, dan periksa mengapa perbaikan pertama tidak bertahan. Tingkat temuan berulang yang tinggi menunjuk pada perbaikan yang menangani gejala, yang terkait dengan manajemen masalah (lihat topik 4.1, Metrik manajemen masalah).

**12. Lacak biayanya dan turunkan.** Catat upaya audit sepanjang siklus. Jika upaya tinggi dan datar, cari duplikasi antar-audit, pengumpulan bukti manual, dan kendali yang tak melayani siapa pun. Laporkan tren upaya bersama hasilnya. Kepatuhan sepadan dengan biayanya ketika ia mengurangi risiko nyata, dan metrik membantu Anda membedakannya.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan kewajiban | Memetakan kewajiban ke kendali lemah atau tak relevan; mendefinisikan kewajiban secara sempit | Tinjauan relevansi kendali oleh pihak kedua; uji kendali (lihat topik 8.2, Metrik risiko dan kendali) |
| Tingkat otomatisasi bukti | Menghitung tangkapan layar atau ekspor sebagai otomatis; mengotomatisasi bukti bernilai rendah lebih dulu | Definisikan otomatis sebagai dihasilkan sistem dan tahan rekayasa; urutkan menurut risiko |
| Waktu penyampaian bukti | Memberi bukti parsial dengan cepat; menawar kata-kata permintaan | Hitung hanya bukti yang diterima; lacak permintaan tindak lanjut |
| Waktu penutupan temuan | Menutup temuan tanpa verifikasi; mengklasifikasi ulang keparahan | Verifikasi independen; log perubahan keparahan |
| Tingkat temuan berulang | Menulis ulang temuan agar tak cocok; menutup temuan sebelumnya sebagai jenis berbeda | Cocokkan menurut sebab dengan aturan tercatat; tinjauan oleh audit internal |
| Konflik pemisahan tugas | Memindahkan konflik ke sistem di luar lingkup; memberi akses sementara yang tak pernah dicatat | Cakup semua sistem dengan proses sensitif; tinjau akses sementara |
| Upaya audit | Tidak mencatat jam; memindahkan upaya ke anggaran lain | Ambil sampel catatan waktu; bandingkan dengan survei tim |

Pembacaan yang sehat adalah otomatisasi bukti yang naik, waktu penyampaian yang lebih pendek dan lebih mantap, temuan ditutup dengan verifikasi, tingkat pengulangan rendah, dan upaya audit yang turun seiring proses matang.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Bukti manual berkala | Akrab bagi auditor | Mahal; direkonstruksi setelah kejadian |
| Bukti berkelanjutan otomatis | Murah dirawat; tepat waktu | Butuh rekayasa; auditor perlu memercayai sumbernya |
| Persetujuan berat | Kendali terlihat | Lambat; menumpuk perubahan |
| Pemeriksaan kebijakan otomatis | Konsisten dan cepat | Aturan harus benar dan terlihat |
| Keterlibatan awal auditor | Lebih sedikit kejutan | Butuh kehati-hatian menjaga independensi |
| Audit di akhir | Pemisahan jelas | Temuan terlambat; pengerjaan ulang |
| Satu kendali untuk banyak kewajiban | Efisien | Satu kegagalan memengaruhi beberapa kewajiban |
| Banyak kendali spesifik | Pemetaan jelas | Upaya ganda |

Jawaban prosanya adalah mengotomatisasi bukti dari pipeline dan sistem pencatatan, melibatkan auditor sejak awal dalam desain sambil menjaga independensi mereka, dan menjaga himpunan kendali kuat yang ramping dan terpetakan pada kewajiban.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Pertanyaan audit mana yang paling lama kita jawab, dan mengapa?**
Pilih permintaan bukti paling lambat dari audit terakhir dan telusuri. Apakah buktinya hilang, tersebar, atau di kepala seseorang? Bahas apa yang akan membuatnya otomatis. Fasilitator sebaiknya mencatat biayanya dalam jam.

**2. Dapatkah kita menunjukkan, untuk perubahan produksi mana pun bulan lalu, siapa yang meninjaunya dan pengujian apa yang berjalan?**
Pilih satu perubahan secara acak dan cobalah. Catat di mana rantai putus. Sepakati satu perbaikan pada catatan perubahan atau pipeline yang menutup celah.

**3. Apa yang kita janjikan pada audit terakhir, dan apakah bertahan?**
Tinjau temuan dan perbaikannya. Untuk tiap temuan, tanyakan apakah sebabnya dihapus dan siapa yang memverifikasi penutupan. Cari pengulangan. Sepakati satu temuan untuk diperiksa lebih dalam.

**4. Apa yang akan dikatakan auditor jika kita bertanya cara membuat bukti lebih mudah?**
Rencanakan percakapan dengan audit internal atau penilai tentang desain bukti. Tanyakan apa yang mereka percayai dan apa yang tidak. Fasilitator sebaiknya memperlakukan jawaban mereka sebagai informasi, dan mengingat aturan independensi.

**5. Kendali mana yang kita jalankan yang tak dibutuhkan kewajiban mana pun?**
Daftar kendali dan kewajiban yang dilayaninya. Temukan yang tanpa tujuan jelas. Bahas memensiunkannya, dan bukti bahwa kendali itu tak diperlukan.

**6. Di mana satu orang dapat melakukan sesuatu yang sensitif dari ujung ke ujung di sini?**
Pikirkan deployment, pemberian akses, dan pembayaran. Periksa apakah perkakas menegakkan pemisahan atau hanya kebijakan. Bahas kendali kompensasi, seperti tinjauan otomatis, di mana jumlah staf kecil.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman menghasilkan sebagian besar bukti dengan mengerjakan tugas mereka dengan baik. Mereka sebaiknya menjaga catatan perubahan, tinjauan, dan pengujian tetap terkait, memakai pemeriksaan kebijakan pipeline, dan mengangkat kekhawatiran tentang kendali yang memperlambat pekerjaan tanpa mengurangi risiko. Mereka diuntungkan oleh percakapan awal dengan auditor tentang bukti yang cukup.

### Tim layanan dan operasi

Tim operasi menjalankan manajemen akses, pencatatan log, cadangan, dan penanganan insiden, yang sentral bagi banyak audit. Mereka sebaiknya menjaga log tahan rekayasa dan tersimpan, mengelola tinjauan akses sesuai jadwal, dan menyimpan indeks bukti. Mereka menanggung beban bukti manual dan dapat menunjuk di mana otomatisasi paling membantu.

### Kepemimpinan dan tata kelola

Pemimpin bertanggung jawab atas kepatuhan dan sering atas hasil audit. Mereka sebaiknya mendanai otomatisasi bukti, meminta cakupan dan tingkat temuan berulang alih-alih hanya hitungan temuan, dan mendukung independensi auditor. Tata kelola sebaiknya mengharapkan laporan jujur tentang celah, dan rencana untuk masing-masing.

### Pelanggan dan pengguna

Pelanggan dan pengguna mengandalkan kepatuhan sebagai jaminan tentang bagaimana data dan layanan mereka ditangani. Mereka diuntungkan ketika laporan penjaminan jelas, ketika insiden dilaporkan sesuai kewajiban, dan ketika kendali tidak membuat pemakaian yang sah lebih sulit dari yang perlu. Komunikasi transparan tentang kepatuhan membangun kepercayaan.

## Dalam praktik: contoh ITIL agile

Sebuah perusahaan pembayaran menengah menjalankan platform pemrosesan kartu dan dinilai tiap tahun terhadap kerangka penjaminan keamanan dan rezim perlindungan data. Angka di bawah bersifat ilustratif.

Persiapan audit memakan tim rekayasa sekitar enam pekan setiap tahun. Penilaian tahun lalu ditutup dengan 14 temuan, 5 di antaranya berulang dari tahun sebelumnya. Kepala kepatuhan memetakan situasi. Cakupan kewajiban adalah 83 persen, dengan 17 persen kewajiban tanpa pemilik kendali bernama. Otomatisasi bukti adalah 22 persen, dan sebagian besar bukti untuk persetujuan perubahan datang dari tangkapan layar tiket yang disusun dengan tangan. Median waktu penyampaian bukti adalah 9 hari, dengan persentil ke-85 sebesar 21 hari. Median waktu penutupan temuan adalah 74 hari, dan penutupan sering ditandai oleh tim pemilik tanpa verifikasi.

Kepala kepatuhan bekerja bersama tim pengiriman dan operasi serta auditor internal. Mereka mengubah empat hal. Setiap perubahan produksi di pipeline kini terkait dengan permintaan, tinjauan kode oleh seseorang selain penulis, hasil pengujian, dan deployment, dicatat otomatis di catatan perubahan. Pemeriksaan kebijakan memblokir deployment yang tak punya tinjauan independen, dan mencatat jalur pengecualian untuk keadaan darurat. Tinjauan akses berjalan kuartalan dari sistem identitas, yang menunjukkan konflik pemisahan tugas secara langsung. Setiap temuan menjadi catatan masalah, dengan pemverifikasi independen dari audit internal, dan temuan berulang dikaitkan dengan pendahulunya.

Pada penilaian berikutnya, tingkat otomatisasi bukti adalah 71 persen, median waktu penyampaian bukti 2 hari, persentil ke-85 sebesar 5 hari, dan persiapan audit memakan sekitar dua pekan. Cakupan kewajiban 97 persen, dan sisa itemnya punya penerimaan terdokumentasi. Temuan turun menjadi 6, dengan satu berulang, dan median waktu penutupan 31 hari dengan verifikasi independen. Direktur utama meminta nol temuan tahun depan. Kepala kepatuhan mengusulkan melacak temuan berulang, waktu penutupan, dan otomatisasi bukti, dan menjelaskan bahwa tujuan nol temuan mendorong tim menyembunyikan isu atau mempersempit lingkup, dan bahwa penilai yang tak menemukan apa-apa mungkin belum melihat cukup keras. Keputusan dicatat, dan dewan setuju meninjau ukuran itu pada rapat berikutnya.

## Sudut pandang sektor

**Startup.** Kewajiban dapat datang tiba-tiba bersama pelanggan besar atau putaran pendanaan. Bangun kebiasaan sejak dini: tinjauan sejawat, catatan perubahan, dan kendali akses di pipeline, agar bukti ada ketika diminta. Pilih satu kerangka ketika bisnis membutuhkannya dan petakan ke apa yang sudah Anda lakukan.

**Bisnis kecil.** Kewajiban kepatuhan sering ditetapkan oleh kontrak dan hukum, dan sumber daya terbatas. Simpan daftar pendek kewajiban, andalkan layanan terkelola dengan laporan penjaminan mereka sendiri, dan simpan folder bukti sederhana. Waspadai membeli perkakas kepatuhan yang biayanya lebih dari risiko yang ditanganinya.

**Perusahaan besar.** Banyak kewajiban tumpang tindih, jadi kerangka kendali terpadu yang memetakan satu kendali ke banyak kewajiban menghemat upaya besar. Pakai sumber bukti bersama, pelacak temuan bersama, dan kalender audit untuk menghindari permintaan berulang. Koordinasikan audit internal, kepatuhan, dan keamanan agar tim tidak diperiksa tiga kali untuk hal yang sama.

**Pemerintah dan sektor publik.** Kewajiban kepatuhan luas dan terbuka, termasuk aturan pengadaan, kearsipan, aksesibilitas, dan perlindungan data, dengan audit oleh badan nasional. Dokumentasikan keputusan dan bukti selama periode yang diwajibkan, buat laporan konsisten antar-lembaga bila mungkin, dan jaga garis jelas antara audit independen dan manajemen. Kewajiban dapat berubah seiring pemilu dan legislasi (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya mencakup perkakas untuk register kendali, integrasi pipeline untuk bukti, sistem identitas dan pencatatan log, serta waktu staf kepatuhan dan tim. Upaya awal mengotomatisasi bukti signifikan, dan menggantikan pekerjaan manual berulang.

Imbal hasilnya adalah upaya audit berulang yang lebih rendah, respons lebih cepat terhadap permintaan, lebih sedikit temuan berulang, dan pandangan lebih jujur tentang kesehatan kendali. Itu juga mencakup biaya kejutan yang dihindari pada akhir siklus sertifikasi. Bangun kasus dari angka Anda sendiri: jam persiapan audit sebelum dan sesudah, waktu penyampaian bukti, jumlah dan usia temuan, dan biaya penundaan terkait audit pada kesepakatan komersial. Hindari mengutip studi biaya kepatuhan kecuali Anda dapat menelusuri metode dan relevansinya. Hitung biaya program dan risiko otomatisasi berlebihan atas kendali yang lemah. Perlakuan keuangan yang lebih luas muncul di topik terakhir bagian sebelumnya (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Bersiap untuk audit pada bulan terakhir.** Menghasilkan bukti yang direkonstruksi dan kegaduhan. Catat bukti saat pekerjaan terjadi.
- **Tangkapan layar sebagai bukti.** Manual, mudah diubah, dan mahal. Pakai catatan yang dihasilkan sistem.
- **Mengincar nol temuan.** Menghargai lingkup sempit dan isu tersembunyi. Lacak penutupan, pengulangan, dan cakupan.
- **Menutup temuan dengan pernyataan.** Temuan yang sama kembali. Verifikasi penutupan secara independen.
- **Memperlakukan auditor sebagai lawan.** Menaikkan biaya di kedua sisi. Berkolaborasilah pada desain bukti sambil menjaga independensi.
- **Kendali yang tak melayani kewajiban apa pun.** Berbiaya upaya dan menumbuhkan sinisme. Pensiunkan.
- **Mengotomatisasi kendali yang buruk.** Menghasilkan bukti kendali lemah pada skala. Uji kendali lebih dulu.
- **Pemisahan tugas secara manual.** Bergantung pada ingatan. Tegakkan dalam perkakas dan tinjau pengecualian.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Kewajiban dan kendali | Diketahui beberapa orang | Daftar kewajiban dan kendali | Dipetakan ke kendali, pemilik, dan sumber bukti | Cakupan dilacak; tumpang tindih dikurangi; kendali diuji | Kerangka kendali terpadu lintas tim, pemasok, dan rezim |
| Bukti | Disusun sebelum audit | Templat standar dan folder bukti | Pipeline dan sistem pencatatan menghasilkan banyak bukti | Tingkat otomatisasi, waktu penyampaian, dan upaya dikelola | Penjaminan berkelanjutan dengan auditor mengonsumsi bukti langsung |
| Temuan dan pembelajaran | Temuan diperdebatkan dan ditutup dengan pernyataan | Temuan dilacak | Temuan diperlakukan sebagai catatan masalah dengan verifikasi independen | Pengulangan dan waktu penutupan dianalisis dan disuapkan ke desain kendali | Temuan dibagikan di seluruh organisasi dan dengan mitra; perbaikan menjadi rutin |

## Daftar periksa

- [ ] Kewajiban yang berlaku didaftar dalam bahasa lugas, dengan pemilik.
- [ ] Setiap kewajiban dipetakan ke kendali dan sumber bukti.
- [ ] Perubahan produksi membawa bukti permintaan, tinjauan, pengujian, dan deployment yang terkait secara otomatis.
- [ ] Pemeriksaan kebijakan menegakkan tinjauan dan pemisahan tugas di pipeline.
- [ ] Jejak audit tahan rekayasa dan disimpan selama periode yang diwajibkan.
- [ ] Indeks bukti ada, dan waktu penyampaian permintaan diukur.
- [ ] Auditor diajak berkonsultasi tentang desain bukti sementara independensi dijaga.
- [ ] Temuan dicatat sebagai catatan masalah dan ditutup dengan verifikasi independen.
- [ ] Temuan berulang dikaitkan dengan pendahulunya dan diperiksa sebabnya.
- [ ] Upaya audit dilacak sebagai tren dan ditinjau untuk duplikasi.

## Prompt AI

**Petakan kewajiban ke kendali.**

```text
Berikut daftar kewajiban yang berlaku bagi layanan kami di [sector and
jurisdiction]: [paste in plain language]. Berikut daftar kendali kami: [paste].
Bangun tabel yang memetakan tiap kewajiban ke kendali, bukti yang menunjukkan
tiap kendali beroperasi, dan peran pemilik. Tandai kewajiban tanpa kendali,
kendali tanpa kewajiban, dan bukti lemah. Jangan memberi kesimpulan hukum. Daftar
asumsi Anda dan pertanyaan untuk hukum dan kepatuhan.
```

**Rencanakan otomatisasi bukti.**

```text
Bukti audit manual kami mencakup: [list items with hours spent]. Sistem pencatatan
kami adalah: [list tools]. Urutkan item bukti menurut upaya dan risiko dan usulkan
bagaimana tiap item dapat dikumpulkan otomatis dari sistem pencatatan, apa yang
membuat bukti tepercaya (tahan rekayasa, kelengkapan), dan apa yang dikonfirmasi
dengan auditor. Jangan mengasumsikan fitur perkakas tertentu. Daftar asumsi Anda.
```

**Analisis temuan berulang.**

```text
Berikut temuan dari [number] siklus audit terakhir, dengan sebab dan perbaikan:
[paste, sanitized]. Kelompokkan temuan menurut sebab mendasar, identifikasi
pengulangan, dan sarankan mengapa perbaikan sebelumnya tidak bertahan. Usulkan
aturan untuk mencocokkan temuan menurut sebab dan langkah verifikasi untuk
penutupan. Jangan berspekulasi di luar informasi yang diberikan. Daftar asumsi
Anda.
```

**Siapkan percakapan awal dengan auditor.**

```text
Susun agenda rapat dengan audit internal tentang mengubah cara kami menghasilkan
bukti untuk [control or process]. Sertakan apa yang akan kami ubah, pertanyaan
yang kami butuh dijawab (bukti yang dapat diterima, pengambilan sampel,
materialitas), apa yang tidak akan kami minta mereka lakukan demi menjaga
independensi, dan bagaimana kami mencatat hasilnya. Pakai bahasa lugas. Daftar
asumsi Anda dan risiko.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik kepatuhan atau audit.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik kepatuhan membawa vektor manipulasi, pagar pembatas, dan aturan independensinya.

## Poin penting

- Hasilkan bukti sebagai hasil sampingan pengiriman, dari pipeline dan sistem pencatatan, dan ukur seberapa banyak yang otomatis.
- Petakan setiap kewajiban ke kendali, pemilik, dan sumber bukti.
- Undang auditor ke dalam desain bukti sejak dini, dan lindungi independensi mereka.
- Tutup temuan dengan menghapus sebab, verifikasi penutupan secara independen, dan awasi tingkat temuan berulang.
- Hindari target seperti nol temuan, dan lacak upaya bersama hasil.
- Tegakkan pemisahan tugas dalam perkakas, dan jaga jejak audit tahan rekayasa.

## Referensi dan bacaan lanjutan

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
