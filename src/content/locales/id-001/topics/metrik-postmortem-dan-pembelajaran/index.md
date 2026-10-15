# Metrik postmortem dan pembelajaran

**Tinjauan yang ditulis, diarsipkan, dan dilupakan tidak mengajari siapa pun, jadi ukur apakah tinjauan terjadi, apakah bermutu, apakah tindakannya selesai, dan apakah sebab yang sama berhenti kembali, dan jaga seluruh praktik tetap tanpa menyalahkan agar orang terus mengatakan yang sebenarnya.**

## Gambaran umum dan motivasi

Setiap layanan kadang gagal. Yang membedakan tim yang terus membaik dari tim yang mengulang pekan terburuknya adalah apa yang terjadi pada hari-hari setelah kegagalan. [Postmortem](https://en.wikipedia.org/wiki/Postmortem_documentation) adalah catatan tertulis tentang insiden atau nyaris celaka: apa yang terjadi, bagaimana terdeteksi dan ditangani, kondisi apa yang memungkinkannya, dan apa yang akan diubah tim. ITIL menyebut kegiatan itu tinjauan pasca-insiden, dan topik ini memakai kedua nama itu bergantian. Refleksi tim rutin adalah kerabat dekat yang melihat pekerjaan biasa alih-alih gangguan.

Topik ini mencakup ukuran yang memberi tahu apakah lingkaran pembelajaran itu bekerja. Ia mengajukan empat pertanyaan. Apakah tinjauan yang seharusnya terjadi benar-benar terjadi? Apakah cukup baik untuk menemukan sesuatu yang nyata? Apakah tindakan yang dihasilkannya selesai? Dan apakah sebab yang sama tetap kembali? Pertanyaan kelima berjalan di bawah yang lain: apakah orang merasa cukup aman untuk menggambarkan apa yang sebenarnya terjadi?

Topik ini berada di antara dua tetangga dan menghindari mengulangi keduanya. Metrik insiden besar (lihat topik 3.4, Metrik insiden besar) mengukur ketepatan waktu tinjauan dan tindak lanjut tindakannya untuk insiden besar yang dideklarasikan, dan merupakan rumah kedua ukuran itu dalam setelan sempit tersebut. Metrik manajemen masalah (lihat topik 4.1, Metrik manajemen masalah) memiliki catatan masalah, kesalahan yang diketahui, dan waktu menuju perbaikan permanen. Topik ini memperluas pandangan ke setiap tingkat keparahan insiden, ke nyaris celaka, dan ke retrospektif tim, dan memiliki mutu pembelajaran itu sendiri: cakupan, kedalaman, penutupan tindakan dari semua sumber, kekambuhan sebab, dan sinyal tanpa menyalahkan yang menjaga data tetap jujur.

### Istilah yang dipakai dalam topik ini

- **Postmortem atau tinjauan pasca-insiden:** pemeriksaan terstruktur dan tanpa menyalahkan atas insiden setelah layanan dipulihkan, berakhir dengan catatan tertulis.
- **Nyaris celaka:** peristiwa yang dapat menyebabkan insiden atau kerugian tetapi tidak, misalnya deployment gagal yang tertangkap di lingkungan uji atau peringatan yang menyala beberapa menit sebelum pengguna menyadari.
- **Item tindakan:** perubahan spesifik dengan tim pemilik bernama, tenggat, dan cara mengetahui kapan selesai.
- **Faktor penyumbang:** kondisi yang membuat insiden mungkin terjadi atau lebih buruk. Kebanyakan insiden punya beberapa. “Akar masalah” tunggal sering penyederhanaan, dan [analisis akar masalah](https://en.wikipedia.org/wiki/Root_cause_analysis) paling baik diperlakukan sebagai pencarian kondisi, bukan pencarian pihak yang bersalah.
- **Kelas sebab:** label stabil dari daftar pendek yang disepakati (misalnya “batas kapasitas,” “hanyutan konfigurasi,” “pemantauan hilang,” “kepemilikan tak jelas”) yang dipakai untuk mengenali kekambuhan. Ia menggambarkan kondisi sistem, tidak pernah orang.
- **Tanpa menyalahkan:** gaya tinjauan yang bertanya bagaimana sistem mengizinkan orang yang wajar bertindak seperti yang dilakukannya, dan tidak bertanya siapa yang dihukum. Ia adalah praktik, dan terkait dengan gagasan [budaya adil](https://en.wikipedia.org/wiki/Just_culture), tempat kesalahan jujur diperlakukan sebagai pembelajaran dan tindakan ceroboh tetap ditangani terpisah.
- **Information Technology Infrastructure Library (ITIL):** kerangka yang banyak dipakai untuk manajemen layanan TI (ITSM). Topik ini merujuk praktik sebagaimana dijelaskan dalam ITIL 4 (2019), dan buku secara keseluruhan bertanggal per Oktober 2026. Lihat [ITIL](https://en.wikipedia.org/wiki/ITIL).

### Bagaimana pandangan agile dan ITIL berbeda

ITIL menyumbang struktur. Dalam ITIL 4, manajemen insiden memulihkan layanan, manajemen masalah mengurangi kemungkinan dan dampak insiden dengan menemukan dan mengelola sebab, dan perbaikan berkelanjutan mengubah apa yang dipelajari menjadi perubahan yang didanai. Tinjauan adalah engsel antara dua yang pertama dan yang ketiga. ITIL cenderung bertanya apakah tinjauan diadakan, apakah catatan masalah dibuka di mana diperlukan, dan apakah perbaikan didaftarkan.

Tradisi agile dan [rekayasa keandalan situs (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) menyumbang kebiasaan. Tinjauan tanpa menyalahkan, singkat, ditulis untuk pembaca di luar tim, dan dibagikan luas. Refleksi tim rutin, kebiasaan perbaikan berkelanjutan, bertanya apa yang diubah berikutnya, dan preferensi [agile](https://en.wikipedia.org/wiki/Agile_software_development) pada penyesuaian kecil dan sering menggantikan satu program perbaikan besar. Buku *Site Reliability Engineering* dari Google mendedikasikan satu bab untuk budaya postmortem dan berpendapat bahwa proses tinjauan hanya sebaik budaya di sekitarnya.

Dipakai bersama, kedua pandangan itu kuat. ITIL memberi aturan cakupan dan tempat untuk tindakan hidup. Kebiasaan agile dan SRE memberi kejujuran dan kecepatan. Diukur bersama, keduanya menunjukkan apakah lingkaran menutup.

## Prinsip utama

- **Pembelajaran adalah produknya, bukan dokumennya.** Tinjauan berhasil bila sesuatu berubah dalam sistem, proses, atau pemahaman bersama. Hitung perubahannya, bukan urusan kertas.
- **Tanpa menyalahkan adalah prasyarat untuk data yang baik.** Jika orang takut disalahkan, lini masa akan tipis, faktor penyumbang rapi, dan insiden yang sama akan kembali. Lindungi keterusterangan sebelum mengukur apa pun yang lain.
- **Ukur tindak lanjut dan kekambuhan, bukan volume.** Jumlah tinjauan sedikit berkata. Porsi tindakan yang selesai dan porsi sebab yang tetap hilang berkata banyak.
- **Pegang metrik di tingkat tim dan sistem.** Tinjauan tentang kondisi. Jangan pernah menghitung tinjauan, tindakan, atau kesalahan per orang, dan jangan pernah memakai angka ini dalam percakapan kinerja.
- **Sesuaikan ukuran tinjauan.** Tidak setiap peristiwa pantas dokumen panjang. Tetapkan pemicu menurut dampak dan nilai pembelajaran, dan biarkan peristiwa kecil mendapat tinjauan singkat.
- **Biarkan tindakan bersaing dengan jujur.** Item tindakan adalah pekerjaan. Ia milik backlog yang sama dengan pekerjaan lain, diperingkat terhadapnya, dan boleh ditolak dengan alasan tercatat.
- **Bacalah tinjauannya.** Angka menemukan lokasi masalah. Manusia yang membaca sampel memberi tahu apakah tinjauan itu bagus.

## Definisi metrik

Metrik di bawah menggambarkan lingkaran pembelajaran untuk suatu layanan atau kelompok tim. Masing-masing menyatakan apa yang dihitung, di mana jam mulai dan berhenti, dan apa yang dikecualikan. Ukuran waktu sebaiknya ditampilkan sebagai median dan persentil tinggi (misalnya ke-85) dengan usia item terbuka tertua, bukan sebagai rata-rata (lihat topik 1.6, Literasi statistik untuk metrik layanan).

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cakupan tinjauan | Porsi peristiwa yang memenuhi syarat yang menerima tinjauan selesai | Peristiwa memenuhi syarat dengan tinjauan terbit dalam jendela yang disepakati / peristiwa memenuhi syarat yang ditutup pada periode itu. Peristiwa memenuhi syarat adalah yang memenuhi pemicu tertulis. Peristiwa di dalam jendela yang masih terbuka pada akhir periode dikecualikan. | persen | Catatan insiden alat ITSM digabung dengan repositori tinjauan | Manajemen insiden; manajemen masalah | Refleksi tim rutin; kesepakatan kerja tim | Bulanan |
| Skor mutu tinjauan | Apakah tinjauan terbit memenuhi standar tertulis singkat | Tinjauan dalam sampel yang memenuhi setidaknya [jumlah yang disepakati] butir daftar periksa / tinjauan dalam sampel. Sampel adalah jumlah tetap tinjauan yang ditarik acak tiap kuartal, dinilai seseorang di luar tim pemilik. | persen | Sampel kuartalan repositori tinjauan dengan lembar penilaian | Perbaikan berkelanjutan; manajemen masalah | Definisi selesai untuk tinjauan | Kuartalan |
| Tingkat penutupan tindakan | Porsi tindakan tinjauan yang selesai pada tenggatnya | Tindakan yang selesai atau ditolak secara resmi (dengan alasan) pada tenggat / tindakan yang jatuh tempo pada periode itu. Jam dimulai saat tinjauan terbit dan berhenti saat tim pemilik menandai tindakan selesai dan peninjau mengonfirmasi. Tindakan yang ditutup sebagai “tidak akan dikerjakan” dihitung terpisah dan dilaporkan. | persen | Backlog tim atau register perbaikan ITSM, tertaut ke tinjauan | Perbaikan berkelanjutan; manajemen masalah | Backlog tim; tindakan perbaikan | Bulanan |
| Usia tindakan terbuka | Usia tindakan tinjauan yang masih terbuka | Untuk tiap tindakan terbuka, hari ini dikurangi tanggal penerbitan tinjauannya. Laporkan median, persentil ke-85, dan yang tertua. | hari | Backlog tim atau register perbaikan | Perbaikan berkelanjutan | Usia item kerja; pekerjaan dalam proses yang menua | Bulanan |
| Tingkat kekambuhan sebab | Porsi peristiwa yang kelas sebabnya cocok dengan peristiwa sebelumnya untuk layanan yang sama | Peristiwa pada periode itu yang kelas sebab utamanya cocok dengan tinjauan yang ditutup dalam dua belas bulan sebelumnya untuk layanan yang sama / peristiwa dengan kelas sebab tercatat pada periode itu. Peristiwa tanpa kelas sebab tercatat dikecualikan dan dihitung terpisah. | persen | Kolom kelas sebab repositori tinjauan digabung dengan catatan insiden | Manajemen masalah; manajemen insiden | Analisis cacat yang lolos; tema retrospektif | Kuartalan |
| Tingkat pelaporan nyaris celaka | Volume nyaris celaka dan sinyal lemah yang dipilih orang untuk dilaporkan | Nyaris celaka yang dicatat pada periode itu / layanan aktif, ditampilkan sebagai tren per layanan dan tidak pernah per orang. Tingkat ini dimaksudkan naik di awal program yang sehat lalu mendatar. | hitungan per layanan | Log nyaris celaka, atau kolom bertag dalam pelacak isu | Manajemen insiden; manajemen risiko | Pemeriksaan kesehatan tim; papan hambatan | Bulanan |
| Jangkauan pembelajaran | Seberapa jauh tinjauan menyebar di luar tim yang menulisnya | Tinjauan yang dipresentasikan atau dibahas di luar tim pemilik (forum bersama, sesi lintas tim, atau pembacaan terdokumentasi oleh tim yang bergantung) dalam [jumlah hari yang disepakati] sejak penerbitan / tinjauan yang terbit pada periode itu | persen | Catatan forum atau rapat dan repositori tinjauan | Perbaikan berkelanjutan; manajemen pengetahuan | Tinjauan pemangku kepentingan; komunitas praktik | Kuartalan |
| Pembawaan tindakan retrospektif | Porsi tindakan retrospektif tim yang selesai pada retrospektif berikutnya | Tindakan retrospektif yang selesai sebelum retrospektif berikutnya / tindakan retrospektif yang disepakati pada yang sebelumnya. Tindakan yang sengaja dilepas dengan alasan dikeluarkan dari kedua hitungan. | persen | Catatan atau papan retrospektif, disimpan di backlog tim | Perbaikan berkelanjutan | Refleksi tim rutin | Per periode tinjauan, ditinjau kuartalan |
| Denyut aman-berbicara | Apakah orang percaya mereka dapat menggambarkan kesalahan tanpa disalahkan | Porsi respons pada atau di atas [tingkat yang disepakati] pada himpunan pertanyaan anonim singkat (misalnya “Saya dapat menggambarkan kesalahan dalam tinjauan tanpa takut disalahkan”) / respons yang diterima. Denyut dilaporkan hanya untuk kelompok yang cukup besar untuk melindungi anonimitas. | persen | Survei denyut anonim | Perbaikan berkelanjutan; perubahan organisasi | Pemeriksaan kesehatan tim; pemeriksaan keamanan psikologis | Kuartalan |

Tinjauan “terbit” bila terlihat oleh pembaca yang dituju, bukan disimpan sebagai draf. Kelas sebab dicatat oleh kelompok tinjauan dari tinjauan itu sendiri, dari daftar pendek yang disepakati, tidak pernah oleh siapa pun yang menutup tiket.

## Rekomendasi

### Putuskan apa yang pantas ditinjau

**1. Tuliskan pemicu dan terbitkan.** Aturan seperti “setiap insiden besar, setiap insiden dari dua tingkat keparahan teratas, peristiwa apa pun dengan kehilangan data pelanggan, dan nyaris celaka apa pun yang dinilai tim instruktif” menyingkirkan perdebatan dan membuat cakupan terukur. Tanpa pemicu tertulis, tinjauan mengikuti suasana hati dan beban kerja, dan angka cakupan tak bermakna.

**2. Sesuaikan tinjauan dengan peristiwa.** Peristiwa kecil dapat punya tinjauan setengah halaman yang ditulis dalam tiga puluh menit, sedangkan insiden besar mungkin pantas lini masa penuh dan sesi terfasilitasi. Jalur ringan menjaga cakupan tetap tinggi tanpa menjadikan praktik itu beban.

### Nilai mutu dengan membaca

**3. Ambil sampel dan baca tinjauan tiap kuartal.** Tarik sampel acak kecil, dan minta seseorang di luar tim pemilik membaca masing-masing terhadap daftar periksa singkat. Butir berguna mencakup lini masa yang menunjukkan keputusan dan informasi yang tersedia saat dibuat, lebih dari satu faktor penyumbang, uraian tentang apa yang berjalan baik, tindakan dengan pemilik dan tanggal, dan bahasa yang menggambarkan sistem dan bukan individu. Laporkan porsi yang memenuhi standar, dan umpan balikkan temuan kepada penulis sebagai pembinaan.

**4. Ajarkan keterampilan meninjau.** [Bias tinjauan balik](https://en.wikipedia.org/wiki/Hindsight_bias) membuat peristiwa tampak jelas setelah kejadian dan mendorong penulis ke “seseorang seharusnya memperhatikan.” Minta fasilitator merekonstruksi apa yang diketahui orang pada tiap saat, dan pakai [lima mengapa](https://en.wikipedia.org/wiki/Five_whys) sebagai pemicu pertanyaan, bukan resep untuk satu jawaban.

### Buat tindakan selesai

**5. Taruh tindakan di backlog sesungguhnya.** Tindakan yang hanya hidup dalam dokumen tinjauan tak terlihat oleh perencanaan. Buat item kerja di pelacak tim pemilik, tautkan ke tinjauan, dan biarkan bersaing untuk kapasitas seperti pekerjaan lain. Laporkan penutupan menurut tim dan layanan agar tindakan yang terhalang terlihat oleh orang yang dapat membukanya.

**6. Izinkan “tidak akan dikerjakan” yang jujur, dan catat alasannya.** Beberapa tindakan ternyata terlalu mahal atau tak relevan lagi. Menutupnya dengan alasan yang dinyatakan lebih sehat daripada membiarkannya terbuka setahun atau menandainya selesai tanpa mengerjakan. Laporkan porsi yang ditolak, karena porsi sangat tinggi menyarankan proses tinjauan mengusulkan tindakan yang tak akan didanai siapa pun.

**7. Lacak usia tindakan terbuka, selain tingkat penutupan.** Persentil ke-85 usia tindakan terbuka dan tindakan terbuka tertua menunjukkan apa yang macet. Tinjau yang tertua pada rapat yang meninjau keandalan layanan.

### Awasi pengulangan

**8. Simpan daftar pendek kelas sebab, dan beri tag setiap tinjauan.** Daftar delapan sampai lima belas kelas sudah cukup. Tinjau daftar bila lebih dari porsi kecil peristiwa jatuh ke kelas “lainnya.” Pemberian tag memungkinkan Anda menjawab pertanyaan “apakah kita pernah melihat ini?” dengan data, dan menyuapi manajemen masalah dengan pola yang tak ditunjukkan satu tinjauan pun (lihat topik 4.1, Metrik manajemen masalah, dan topik 4.6, Utang teknis dan kesalahan yang diketahui).

**9. Perlakukan kekambuhan sebagai sinyal tentang tindakan, bukan orang.** Ketika kelas sebab kembali, tanyakan apakah tindakan sebelumnya selesai, apakah itu tindakan yang tepat, dan apakah kelasnya terlalu luas. Kekambuhan setelah semua tindakan ditutup berarti tindakannya tidak berhasil, yang merupakan kabar berguna.

### Lindungi kejujuran

**10. Jaga tinjauan tanpa menyalahkan dan buat terlihat.** Nyatakan dalam templat bahwa tinjauan menggambarkan kondisi dan keputusan dan tidak menetapkan kesalahan, dan minta pemimpin berterima kasih kepada penulis atas keterusterangan. [Keamanan psikologis](https://en.wikipedia.org/wiki/Psychological_safety), dalam riset Amy Edmondson tentang tim kerja, adalah keyakinan bersama bahwa tim aman untuk mengambil risiko antarpribadi (lihat topik 9.2, Metrik kepuasan dan kesejahteraan).

**11. Hargai laporan nyaris celaka, dan baca hitungan yang naik sebagai kabar baik di awal.** Tim yang mulai melaporkan nyaris celaka akan melihat hitungan naik, karena peristiwanya selalu terjadi. Katakan di muka, lacak porsi nyaris celaka yang menghasilkan perubahan, dan terbitkan ceritanya dengan persetujuan tim.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Cakupan tinjauan | Mempersempit pemicu; menurunkan tingkat keparahan agar peristiwa jatuh di luarnya; mengajukan “tinjauan” satu baris untuk mencentang kotak | Skor mutu tinjauan; bandingkan hitungan keparahan insiden dengan dampak yang dilaporkan pelanggan; audit penurunan |
| Skor mutu tinjauan | Menulis sesuai daftar periksa dengan kalimat baku; dinilai oleh tim pemilik; sampel yang dapat ditebak | Penilai luar; sampel acak; bacakan dua tinjauan tiap kuartal; lacak apakah tindakan dari tinjauan berskor tinggi selesai |
| Tingkat penutupan tindakan | Menetapkan tenggat jauh; memecah tindakan menjadi potongan remeh; menutup tindakan tanpa verifikasi; menyatakan “tidak akan dikerjakan” untuk membersihkan daftar | Usia tindakan terbuka; porsi ditolak dengan alasan; konfirmasi peninjau bahwa perubahan berfungsi; tingkat kekambuhan sebab |
| Usia tindakan terbuka | Menutup dan membuka kembali atau membuat ulang tindakan untuk mengatur ulang usianya; memindahkan tindakan ke daftar “gagasan” terpisah | Tautkan tindakan baru ke tinjauan asal dan simpan tanggal pertama; hitungan tindakan yang dipindahkan ke gagasan |
| Tingkat kekambuhan sebab | Mencatat kelas sebab yang samar atau selalu berubah agar tak ada yang cocok; memakai kelas “lainnya” yang luas; menautkan pengulangan ke kelas berbeda | Porsi peristiwa di “lainnya”; pembacaan ulang berkala tinjauan menurut kelas; tinjauan daftar kelas itu sendiri |
| Tingkat pelaporan nyaris celaka | Meminta laporan demi mencapai angka; mencatat peristiwa remeh; atau, ke arah lain, membaca angka sebagai kegagalan dan menekan laporan | Porsi nyaris celaka yang berujung perubahan; tanpa target pada hitungan; umpan balik dari denyut aman-berbicara |
| Jangkauan pembelajaran | Menambah nama ke daftar distribusi; mempresentasikan di sesi yang sepi; menghitung tautan sebagai dibaca | Kehadiran atau catatan diskusi sebenarnya; tanyakan tim yang bergantung apa yang mereka ubah setelah tinjauan terakhir |
| Pembawaan tindakan retrospektif | Hanya menyepakati tindakan remeh yang mudah diselesaikan; melewatkan retrospektif; menandai butir selesai | Dampak tindakan sebagaimana dinilai tim; tingkat retrospektif diadakan; apakah tema yang sama muncul beberapa pekan |
| Denyut aman-berbicara | Menekan responden; mensurvei hanya yang percaya diri; melaporkan rata-rata yang menyembunyikan kelompok berskor rendah | Tingkat respons dan campuran responden; ukuran kelompok minimum; komentar terbuka dibaca penuh; apakah bahasa tinjauan berubah |

Pembacaan yang sehat menunjukkan tinjauan untuk peristiwa yang penting, standar mutu yang dipenuhi kebanyakan, tindakan yang selesai atau ditolak dengan jujur, segelintir tindakan lama yang dapat disebut pemimpin, kelas sebab yang frekuensinya turun setelah ditangani, dan hitungan nyaris celaka yang naik lalu mantap. Denyut tetap stabil atau membaik ketika insiden sulit terjadi. Pola yang terlalu bersih adalah tanda untuk membaca sampel.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Meninjau setiap insiden | Cakupan lengkap; tak ada perdebatan tentang pemicu | Berat; tinjauan menjadi dangkal; tim mulai membenci proses |
| Meninjau menurut pemicu tertulis | Memusatkan upaya pada dampak dan nilai pembelajaran | Pemicu butuh perawatan; peristiwa perbatasan lolos |
| Pemberian tag kelas sebab | Menemukan pola lintas tinjauan | Kelas adalah penyederhanaan; sebab nyata sering beberapa hal sekaligus |
| Denyut anonim tentang keamanan | Sinyal jujur pada pertanyaan sensitif | Kasar; tim kecil mungkin dapat dikenali; kelelahan survei |

Jawaban prosanya adalah menjaga lingkaran pendek dan angka sedikit: pemicu tertulis, sampel mutu kecil, satu pelacak tindakan, dan daftar kelas sebab, dengan denyut keamanan ditambahkan begitu tim memercayai yang lain. Tidak ada ukuran di sini yang membuktikan pembelajaran telah terjadi. Bersama-sama mereka menunjukkan apakah kondisi untuknya ada.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Mana dari lima insiden terakhir kita yang menerima tinjauan, dan apakah ada yang mengubah sesuatu karenanya?**
Mulai dari daftar insiden, bukan dari folder tinjauan, agar tinjauan yang hilang terlihat. Untuk setiap tinjauan, tanyakan apa yang berbeda dalam sistem atau proses hari ini. Jika jawabannya “tidak ada,” tanyakan mengapa tinjauan diadakan dan siapa yang membacanya. Fasilitator sebaiknya mencatat jawaban tanpa menghakimi, karena menunjukkan apakah praktik menghasilkan perubahan atau urusan kertas.

**2. Apa yang akan mempersulit seseorang mengatakan yang sebenarnya dalam tinjauan di sini?**
Minta contoh spesifik: reaksi manajer, tinjauan kinerja, eskalasi pelanggan, nada dalam email. Undang orang menulis jawaban anonim lebih dulu. Cari kondisi yang dapat diubah, seperti siapa yang hadir, siapa yang membaca, dan apa yang dikatakan pemimpin dengan lantang. Ini percakapan yang melindungi setiap angka lain dalam topik ini.

**3. Item tindakan mana yang terbuka paling lama, dan apa yang menghalanginya?**
Tampilkan lima tertua. Untuk masing-masing, tanyakan apakah tindakan masih tepat, apakah punya pemilik dengan kapasitas, dan apakah sebaiknya dikerjakan, dijadwalkan ulang, atau ditolak. Jaga fokus pada sistem kerja dan bukan pemilik. Sepakati keputusan untuk masing-masing sebelum sesi berakhir.

**4. Kapan jenis masalah yang sama kembali, dan apa artinya bagi perbaikan sebelumnya?**
Pakai tag kelas sebab untuk menemukan pengulangan, dan baca tinjauan sebelumnya dan tindakannya. Tanyakan apakah tindakan selesai, apakah menangani faktor penyumbang, dan apakah kelas digambar terlalu luas. Tujuannya tindakan yang lebih baik, bukan penjelasan.

**5. Apakah kita melaporkan nyaris celaka, dan apa yang terjadi ketika seseorang melakukannya?**
Minta contoh terbaru dan telusuri apa yang menyusul. Jika tidak ada yang menyusul, tanyakan mengapa orang akan melapor lagi. Jika hitungan rendah, tanyakan apa yang ditakuti orang. Fasilitator sebaiknya menjelaskan bahwa hitungan yang naik diharapkan di awal, dan menyepakati bagaimana tim merespons laporan berikutnya agar pelaporan terasa berharga.

**6. Bagaimana kita tahu tinjauan itu bagus jika kita tidak dapat melihat angka apa pun?**
Ini meminta tim menggambarkan mutu dengan kata-katanya sendiri. Jawaban umum mencakup “seseorang di luar tim belajar sesuatu,” “perbaikannya bertahan,” dan “penulis tidak takut.” Ubah jawaban menjadi daftar periksa untuk sampel kuartalan, dan tinjau kembali setelah dua kuartal.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman menulis banyak tinjauan dan memikul sebagian besar tindakan, jadi merasakan biaya proses yang kikuk lebih dulu. Mereka diuntungkan oleh templat pendek, aturan pemicu yang jelas, dan tautan terlihat antara tindakan dan item backlog tim. Refleksi tim rutin pantas mendapat disiplin tindak lanjut yang sama seperti tinjauan insiden, dan tim yang menyelesaikan tindakan retrospektifnya mempraktikkan kebiasaan yang sama dalam skala lebih kecil. Waspadai tindakan terdesak keluar oleh tekanan fitur, dan bawa pertukaran itu kepada pemilik produk secara terbuka (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman).

### Tim layanan dan operasi

Tim operasi memegang bukti (lini masa, peringatan, log obrolan) dan berada di posisi terbaik untuk memberi tag kelas sebab secara konsisten dan memperhatikan pengulangan sebelum menjadi gangguan. Mereka butuh waktu terlindungi untuk menulis, karena tinjauan yang ditulis di akhir shift panjang tipis. Tautkan setiap tinjauan ke catatan masalah apa pun yang disuapinya (lihat topik 3.3, Waktu respons dan penyelesaian insiden).

### Kepemimpinan dan tata kelola

Pemimpin menetapkan nada setiap tinjauan lewat apa yang mereka tanyakan sesudahnya. “Siapa yang melakukan ini?” mengakhiri tinjauan jujur, dan “apa yang kita pelajari, dan apa yang kita ubah?” mengundangnya. Badan tata kelola sebaiknya mengharapkan cakupan, mutu, usia tindakan, dan kekambuhan pada tinjauan keandalan, mendanai tindakan yang butuh investasi, dan tidak pernah membandingkan tim menurut berapa banyak insiden atau tinjauan yang mereka miliki.

### Pelanggan dan pengguna

Pelanggan jarang melihat tinjauan, tetapi merasakan hasilnya: kerusakan yang sama yang berhenti kembali, dan penjelasan jujur ketika kembali. Di mana kontrak mengizinkan, terbitkan ringkasan berbahasa lugas setelah insiden signifikan (lihat topik 3.4, Metrik insiden besar). Kontak ulang pada isu yang sama adalah sinyal dari sisi pelanggan bahwa pembelajaran belum mendarat (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Sebuah pengecer daring berukuran menengah menjalankan etalase untuk pelanggan, layanan pembayaran, dan platform inventaris internal. Lima tim produk membangun dan menjalankan layanan ini, dan kelompok manajemen layanan kecil menjaga proses insiden dan masalah. Angka dalam contoh ini bersifat ilustratif.

Dalam satu kuartal pengecer memiliki 41 insiden pada dua tingkat keparahan teratas. Pemicu tertulis menjadikan semuanya memenuhi syarat untuk tinjauan, dan 36 tinjauan terbit dalam sepuluh hari kerja, sehingga cakupan tinjauan sekitar 88 persen. Pimpinan senang. Kelompok manajemen layanan menarik sampel acak delapan tinjauan, meminta tim dari area produk lain menilainya, dan mendapati hanya tiga yang memenuhi standar yang disepakati. Celah umumnya adalah lini masa mendaftar apa yang terjadi tetapi tidak apa yang diketahui orang ketika membuat setiap keputusan, dan bagian faktor penyumbang menamai satu sebab.

Sampel yang sama menunjukkan bahwa dari 74 tindakan yang jatuh tempo pada kuartal itu, 51 selesai pada tenggatnya, tingkat penutupan sekitar 69 persen. Tindakan terbuka tertua, berusia 210 hari, adalah ambang peringatan kapasitas pada basis data pembayaran, yang ditunda dalam enam pekan berturut-turut. Pemberian tag sebab menunjukkan “batas kapasitas” pada 9 dari 36 tinjauan, 4 di antaranya untuk layanan pembayaran. Denyut anonim, dijawab 58 dari 70 orang yang diundang, lebih rendah di kelompok siaga, tempat beberapa komentar mengatakan manajer senior mengajukan pertanyaan tajam tentang individu bernama.

Tim membuat tiga keputusan. Pertama, mereka mengadakan sesi singkat dengan manajer senior yang menghadiri tinjauan dan menyepakati aturan: pertanyaan di ruangan tentang kondisi dan keputusan, dan tindak lanjut apa pun tentang seseorang lewat pemimpin tim. Kedua, mereka menaruh tindakan kapasitas tertua di puncak putaran perencanaan berikutnya tim pembayaran, diperingkat terhadap pekerjaan fitur oleh pemilik produk, dan melaporkan hasilnya pada tinjauan keandalan. Ketiga, mereka menambahkan dua butir daftar periksa ke templat tinjauan (apa yang diketahui orang pada tiap keputusan, dan setidaknya dua faktor penyumbang) dan menjalankan sesi pembinaan bagi penulis memakai satu tinjauan yang dianonimkan.

Risiko manipulasi muncul pada kuartal berikutnya. Cakupan tinjauan naik menjadi 97 persen, tetapi porsi tinjauan di bawah 300 kata berlipat dua, dan beberapa tim menurunkan insiden dari keparahan dua ke tiga tepat di bawah pemicu. Sampel mutu dan audit perubahan keparahan menangkapnya. Kelompok bertanya mengapa penurunan terjadi, mengetahui bahwa tim merasa tinjauan itu menghukum, dan melonggarkan ekspektasi panjang untuk peristiwa kecil sambil mempertahankan pemicu keparahan dua.

## Sudut pandang sektor

**Startup.** Tim kecil dapat belajar cepat karena semua orang menghadiri insiden. Risikonya adalah tak ada yang dituliskan dan pelajaran pergi bersama perekrutan berikutnya. Simpan templat satu halaman, adakan tinjauan untuk apa pun yang membangunkan seseorang di malam hari, dan lacak hanya penutupan tindakan dan sebab berulang. Lindungi keterusterangan dengan meminta pendiri membaca tinjauan tanpa komentar tentang individu.

**Bisnis kecil.** Orang yang memperbaiki masalah sering satu-satunya yang memahaminya. Pakai templat ringkas dan tinjau tindakan terbuka tertua tiap bulan.

**Perusahaan besar.** Standarkan templat, pemicu, dan daftar kelas sebab, dan biarkan tim menyesuaikan kedalaman. Sediakan tempat yang dapat dicari untuk tinjauan, forum lintas tim, dan penilai luar. Waspadai tabel liga tim menurut hitungan insiden atau tinjauan, karena menghukum transparansi.

**Pemerintah dan sektor publik.** Tinjauan dapat menghadapi kewajiban undang-undang, audit, atau permintaan kebebasan informasi, yang membuat penulis berhati-hati. Pisahkan tinjauan pembelajaran dari laporan formal untuk pengawasan, dan catat tindakan yang terhalang beserta ketergantungannya (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya praktik ini sebagian besar waktu. Penulis menghabiskan berjam-jam untuk tiap tinjauan dan banyak orang menghabiskan satu jam dalam sesi. Sampel mutu kuartalan memakan beberapa jam pembaca luar. Pemberian tag sebab dan pelacakan tindakan butuh sedikit perkakas, yang dapat berupa lembar kerja dan satu kolom di alat tiket dan backlog yang ada. Ada biaya lebih besar dan kurang terlihat dalam perilaku pimpinan, karena program gagal jika pemimpin bereaksi buruk terhadap tinjauan yang terus terang.

Imbal hasil datang dari sebab yang berhenti kambuh dan dari insiden yang lebih pendek karena tim pernah melihat yang serupa. Lebih sedikit insiden berulang membebaskan kapasitas rekayasa dan operasi, mengurangi eskalasi, dan menurunkan biaya gangguan bagi pelanggan. Perpustakaan tinjauan bersama memperpendek kurva belajar staf baru dan menurunkan ketergantungan pada segelintir orang berpengalaman. Jangan mengutip persentase dari organisasi lain. Ukur garis dasar Anda sendiri untuk kekambuhan sebab, usia tindakan terbuka, dan kontak ulang sebelum memulai, dan bandingkan setelah dua atau tiga kuartal.

Batas jujurnya adalah pembelajaran sulit diatribusikan: penurunan kekambuhan dapat berasal dari tinjauan yang lebih baik, perubahan arsitektur yang tak berkaitan, atau keberuntungan. Untuk pembahasan lebih luas lihat topik 7.7, Pengembalian investasi dan kasus bisnis.

## Anti-pola dan jebakan

- **Teater tinjauan.** Tinjauan memenuhi aturan dan tak ada yang membacanya. Sebagai gantinya, ambil sampel dan baca tinjauan, dan nilai dari perubahan yang dihasilkannya.
- **Pencarian akar masalah sebagai seseorang.** Tinjauan menamai kesalahan individu dan berhenti. Sebagai gantinya, tanyakan apa yang membuat kesalahan mungkin terjadi, dan daftar beberapa faktor penyumbang.
- **Inflasi tindakan.** Tinjauan menghasilkan daftar panjang yang tak dapat didanai tim. Sebagai gantinya, batasi setiap tinjauan pada beberapa tindakan berperingkat dan tolak sisanya dengan alasan.
- **Tindakan di luar backlog.** Mereka hidup dalam dokumen dan tak pernah direncanakan. Sebagai gantinya, buat item kerja di pelacak tim pemilik dan tautkan ke tinjauan.
- **Penutupan tanpa verifikasi.** Tindakan ditandai selesai dan sebab kembali. Sebagai gantinya, minta peninjau mengonfirmasi perubahan berfungsi dan awasi kekambuhan kelas sebab.
- **Memakai hitungan untuk membandingkan tim.** Tim dengan lebih banyak tinjauan atau nyaris celaka tampak lebih buruk. Sebagai gantinya, baca hitungan tinggi sebagai keterbukaan, dan bandingkan tiap tim dengan riwayatnya sendiri.
- **Menghukum pembawa pesan.** Pemimpin mempertanyakan seseorang setelah tinjauan yang terus terang. Sebagai gantinya, sepakati norma bagaimana pemimpin merespons, dan periksa denyut setelah insiden sulit.
- **Memperlakukan metrik sebagai bukti pembelajaran.** Dasbor bersih dianggap bukti bahwa organisasi belajar. Sebagai gantinya, terus baca sampel tinjauan dan tanyai orang yang menulisnya.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Pemicu dan cakupan | Tinjauan bergantung pada siapa yang tersedia dan seberapa buruk rasanya | Beberapa tim mengadakan tinjauan untuk insiden serius | Pemicu tertulis dan templat bersama; cakupan dihitung menurut keparahan | Cakupan diplot tren dan diaudit terhadap penurunan; jalur ringan dan penuh | Pemicu disesuaikan bersama pelanggan dan pemasok; tinjauan bersama untuk insiden gabungan |
| Mutu dan kejujuran | Tinjauan menamai orang atau satu sebab | Beberapa tim menulis tinjauan tanpa menyalahkan | Standar daftar periksa; bahasa tanpa menyalahkan diharapkan | Sampel kuartalan luar; denyut ditinjau; pembinaan bagi penulis | Tinjauan ditulis bersama pemasok dan pengguna; membaca lintas tim rutin |
| Tindakan dan kekambuhan | Tindakan hidup dalam dokumen dan jarang selesai | Tindakan dilacak beberapa tim; penutupan bervariasi | Tindakan di backlog sesungguhnya dengan pemilik, tanggal, dan penolakan jujur | Penutupan, usia, dan kekambuhan sebab ditinjau, dengan perbaikan yang didanai | Tindakan lintas tim dan pemasok terkoordinasi; kelas sebab direvisi seiring pola bergeser |
| Berbagi dan pembelajaran | Pelajaran tinggal bersama tim | Tinjauan diposting untuk tim | Tinjauan dapat dicari dan dibagikan di forum rutin | Jangkauan diukur; tim yang bergantung melaporkan perubahan yang dibuat | Pembelajaran mengalir ke desain, orientasi, dan kontrak pemasok |

## Daftar periksa

- [ ] Pemicu tertulis menyatakan peristiwa mana yang menerima tinjauan, termasuk nyaris celaka bernilai pembelajaran tinggi.
- [ ] Templat pendek ada, dengan jalur ringan untuk peristiwa kecil.
- [ ] Tinjauan tanpa menyalahkan menurut templat dan menurut perilaku pimpinan.
- [ ] Setiap tindakan adalah item kerja di backlog tim pemilik, dengan pemilik dan tanggal.
- [ ] Tindakan boleh ditolak, dan alasannya dicatat dan dilaporkan.
- [ ] Daftar pendek kelas sebab ada, dan setiap tinjauan diberi tag.
- [ ] Pembaca luar menilai sampel acak tinjauan tiap kuartal.
- [ ] Tindakan terbuka tertua ditinjau bersama keandalan layanan.
- [ ] Usia tindakan terbuka dilaporkan sebagai median, persentil tinggi, dan yang tertua.
- [ ] Jalur nyaris celaka ada, dan tim tahu apa yang terjadi setelah laporan.
- [ ] Tidak ada metrik dalam topik ini yang dilaporkan atau dipakai per orang.
- [ ] Denyut aman-berbicara berjalan hanya untuk kelompok yang cukup besar untuk melindungi anonimitas.

## Prompt AI

**Tinjau draf postmortem untuk mutu.**

```text
Berikut draf postmortem untuk [incident description] pada [service]. Periksa
terhadap standar ini: [paste your review checklist]. Untuk setiap butir, katakan
apakah draf memenuhinya, kutip baris yang mendukung penilaian Anda, dan tunjuk
bahasa yang menetapkan kesalahan pada orang alih-alih menggambarkan kondisi.
Jangan menambah fakta yang tidak ada dalam teks. Daftar asumsi Anda dan apa pun
yang tidak dapat Anda nilai dari yang saya berikan.

[paste the draft, with personal data removed]
```

**Usulkan kelas sebab dari tinjauan masa lalu.**

```text
Berikut ringkasan [number] tinjauan masa lalu untuk [service or group of
services]. Usulkan daftar pendek kelas sebab, antara [minimum] dan [maximum],
yang menggambarkan kondisi sistem dan tidak pernah orang. Untuk setiap kelas
berikan definisi satu baris, tinjauan yang cocok, dan tinjauan yang ambigu. Jangan
mengarang sebab yang tidak didukung teks. Daftar asumsi Anda dan tinjauan yang
tidak dapat Anda klasifikasikan.

[paste summaries]
```

**Analisis item tindakan terbuka untuk pola macet.**

```text
Berikut ekspor tindakan tinjauan untuk [team or service]: tim pemilik, tanggal
dibuat, tenggat, status, dan uraian satu baris. Laporkan median, persentil ke-85,
dan usia maksimum tindakan terbuka, lalu kelompokkan tindakan tertua menurut
kemungkinan alasan macet (misalnya lingkup tak jelas, ketergantungan pada tim
lain, tak ada kapasitas, atau nilai rendah). Laporkan pola menurut tim dan
layanan, tidak pernah menurut orang. Jangan menebak alasan yang tidak didukung
data. Daftar asumsi Anda dan kolom tambahan yang akan membantu.

[paste export with personal data removed]
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang cocok, definisi, dan pagar pembatas berpasangan bagi metrik tinjauan atau pembelajaran yang akan Anda laporkan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa metrik pembelajaran yang direvisi masih membawa jam, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Tinjauan bernilai sebesar apa yang diubahnya, jadi ukur cakupan, mutu, penutupan tindakan, dan kekambuhan sebab, dan baca sampel tinjauan itu sendiri.
- Tanpa menyalahkan adalah prasyarat untuk data jujur, dan pemimpin melindunginya lewat cara mereka merespons tinjauan yang terus terang.
- Taruh tindakan di backlog sesungguhnya, batasi jumlahnya, izinkan penolakan jujur, dan awasi usia yang tertua.
- Beri tag tinjauan dengan daftar pendek kelas sebab agar sebab berulang terlihat dan menyuapi manajemen masalah.
- Baca hitungan nyaris celaka yang naik sebagai tanda keterbukaan di awal, dan jangan pernah memeringkat orang atau tim menurut volume tinjauan.
- Pasangkan setiap angka di sini dengan pagar pembatas, karena lingkaran pembelajaran sendiri adalah target yang dapat dimanipulasi.

## Referensi dan bacaan lanjutan

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
