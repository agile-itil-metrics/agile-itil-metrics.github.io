# Metrik perbaikan berkelanjutan

**Perbaikan adalah kebiasaan memperhatikan, mencoba, dan memeriksa, jadi ukur apakah gagasan berubah menjadi perubahan, apakah perubahan diperiksa efeknya, dan apakah masalah yang sama terus kembali, dan jaga pekerjaannya di tangan orang yang mengerjakannya.**

## Gambaran umum dan motivasi

Salah satu prinsip Manifesto Agile mengatakan bahwa pada interval teratur tim merenung tentang cara menjadi lebih efektif, lalu menyetel dan menyesuaikan perilakunya sesuai itu. ITIL menyatakan keyakinan yang sama dalam prinsip panduannya dan praktik perbaikan berkelanjutannya: layanan dan cara menjalankannya sebaiknya diperbaiki sepanjang waktu, dalam langkah kecil, berdasarkan bukti. Keduanya meminta hal yang sama, yaitu kebiasaan perbaikan yang tetap dan bukan program sesekali.

Kebanyakan organisasi percaya mereka melakukan ini. Banyak yang punya rapat bergaya retrospektif yang menghasilkan daftar tindakan, register gagasan perbaikan, atau rencana perbaikan tahunan. Kegagalan umumnya adalah daftar tumbuh dan sedikit yang terjadi. Tindakan disepakati dalam rapat dan dilupakan. Perbaikan dibuat dan tak pernah diperiksa, sehingga tak ada yang tahu apakah membantu. Masalah yang sama kembali dengan nama lain. Metrik perbaikan berkelanjutan adalah cara membedakan antara organisasi yang sedang memperbaiki dan yang hanya membicarakannya.

[Proses perbaikan berkelanjutan](https://en.wikipedia.org/wiki/Continual_improvement_process) berakar dalam pada manajemen mutu. Siklus [Plan-Do-Check-Act](https://en.wikipedia.org/wiki/PDCA), yang dikaitkan dengan W. Edwards Deming dan Walter Shewhart, menggambarkan perbaikan sebagai eksperimen kecil yang berulang: rencanakan perubahan, coba, periksa hasilnya, dan bertindaklah atas apa yang Anda pelajari. [Kaizen](https://en.wikipedia.org/wiki/Kaizen) adalah istilah Jepang untuk perbaikan berkelanjutan atas praktik kerja, dengan keterlibatan semua orang. Keduanya berasal dari [manufaktur ramping](https://en.wikipedia.org/wiki/Lean_manufacturing) dan Toyota Production System, dan keduanya kini menjadi kosakata standar dalam pekerjaan layanan dan perangkat lunak. ITIL 4 menawarkan model perbaikan berkelanjutan yang langkahnya menanyakan apa visinya, di mana Anda sekarang, di mana Anda ingin berada, bagaimana Anda akan sampai di sana, untuk mengambil tindakan, apakah Anda sampai, dan bagaimana menjaga momentum. Itu adalah pemicu percakapan, bukan prosedur untuk diikuti secara mekanis.

Beberapa gagasan membantu.

- **Perbaiki kendala.** [Teori kendala](https://en.wikipedia.org/wiki/Theory_of_constraints), dikembangkan Eliyahu Goldratt, mengatakan bahwa throughput sebuah sistem dibatasi bagiannya yang paling lambat, sehingga perbaikan di tempat lain menambah sedikit. Temukan kendala memakai ukuran alur dari bagian awal buku ini, dan perbaiki itu lebih dulu (lihat topik 2.3, Pekerjaan dalam proses (WIP) dan antrean).
- **Temukan sebab, bukan gejala.** [Analisis akar masalah](https://en.wikipedia.org/wiki/Root_cause_analysis) mencari sebab mendasar sebuah masalah agar memperbaikinya menghentikan kembalinya. Pemakaian berlebihan metode sederhana dapat menyesatkan ketika masalah punya beberapa sebab, jadi periksa faktor yang berkontribusi.
- **Pertanyakan asumsi.** [Pembelajaran lingkaran ganda](https://en.wikipedia.org/wiki/Double-loop_learning), istilah dari Chris Argyris dan Donald Schön, melampaui memperbaiki tindakan untuk memeriksa keyakinan dan aturan yang menuntun padanya. Tim yang hanya memperbaiki gejala (pembelajaran lingkaran tunggal) cenderung bertemu masalah yang sama lagi.
- **Perbaikan butuh kapasitas.** Tim yang sudah mentok tak punya ruang untuk memperbaiki. Kapasitas terlindungi adalah prasyarat, dan kecepatan yang dapat dipertahankan adalah bagian dari apa yang memungkinkan perbaikan (lihat topik 9.2, Metrik kepuasan dan kesejahteraan).

Metrik perbaikan mengundang manipulasinya sendiri. Jika jumlah tindakan selesai menjadi target, tim menyepakati tindakan remeh. Jika penghematan dari perbaikan menjadi target, klaim menggelembung. Jika jumlah gagasan yang diajukan menjadi target, gagasan membanjir dan tak ada yang ditindaklanjuti. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku: ukur apakah perbaikan berhasil, dan bukan seberapa sibuk program perbaikan terlihat (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Prinsip utama

- **Perbaikan milik orang yang mengerjakan pekerjaan.** Mereka melihat masalah dan kemungkinan perbaikannya lebih dulu.
- **Bekerjalah dalam langkah kecil dan periksa tiap langkah.** Eksperimen kecil mengurangi risiko dan mempercepat pembelajaran.
- **Ukur tindak lanjut dan efek, bukan aktivitas.** Tindakan yang selesai dan efek yang dikonfirmasi lebih penting daripada gagasan yang dihasilkan.
- **Perbaiki kendala lebih dulu.** Upaya jauh dari bottleneck menambah sedikit.
- **Perbaiki sebab.** Cari faktor yang berkontribusi, dan pertanyakan asumsi di baliknya.
- **Lindungi kapasitas untuk perbaikan.** Ia tidak akan terjadi dalam waktu luang yang tidak ada.
- **Rayakan pembelajaran, termasuk dari eksperimen yang gagal.** Gagasan yang dicoba dan tak berhasil adalah informasi.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat tindak lanjut tindakan | Porsi tindakan perbaikan yang disepakati dalam tinjauan yang selesai pada tanggal yang disepakati | tindakan selesai pada tanggal / tindakan jatuh tempo pada periode itu | persen | Register perbaikan atau backlog tim | Perbaikan berkelanjutan | Tindakan renungan disampaikan | Bulanan |
| Usia backlog perbaikan | Usia butir perbaikan terbuka, dengan perhatian pada yang tertua | median dan persentil ke-85 usia dalam hari butir terbuka; usia yang tertua | hari | Register perbaikan | Perbaikan berkelanjutan | Usia backlog | Bulanan |
| Tingkat pemeriksaan efek | Porsi perbaikan selesai yang efeknya diperiksa terhadap garis dasar | perbaikan selesai dengan pemeriksaan sebelum-dan-sesudah tercatat / perbaikan selesai | persen | Register perbaikan dengan bidang garis dasar dan hasil | Perbaikan berkelanjutan; pengukuran dan pelaporan | Belajar dari eksperimen | Kuartalan |
| Waktu dari gagasan ke percobaan | Waktu dari gagasan perbaikan diajukan sampai percobaan pertama dalam pekerjaan nyata | median dan persentil ke-85 hari dari diajukan sampai percobaan pertama | hari | Register perbaikan | Perbaikan berkelanjutan | Umpan balik cepat atas perubahan | Bulanan |
| Porsi gagasan garis depan | Porsi gagasan perbaikan yang diajukan orang yang mengerjakan pekerjaan, dihitung pada tingkat tim | gagasan diajukan anggota tim yang mengerjakan pekerjaan / gagasan diajukan | persen | Register perbaikan | Perbaikan berkelanjutan | Tim yang mengorganisasi diri | Kuartalan |
| Tingkat isu berulang | Porsi isu yang berulang setelah perbaikan yang dimaksudkan menghapus sebabnya | isu berulang dalam periode yang dinyatakan setelah perbaikan terkait ditutup / perbaikan ditutup dengan sebab terkait | persen | Catatan insiden, masalah, dan perbaikan dikaitkan menurut sebab | Manajemen masalah; perbaikan berkelanjutan | Cacat lolos setelah perbaikan | Kuartalan |
| Porsi kapasitas perbaikan | Porsi kapasitas tim yang dihabiskan untuk pekerjaan perbaikan | kapasitas atau butir selesai bertag perbaikan / total kapasitas atau butir selesai | persen | Jenis pekerjaan pelacak kerja | Perbaikan berkelanjutan; manajemen kapasitas dan kinerja | Waktu untuk renungan dan keunggulan teknis | Bulanan |

Definisikan “butir perbaikan” di register dan jaga terpisah dari pekerjaan backlog biasa dan dari perbaikan korektif. Jam tindak lanjut dimulai ketika tindakan disepakati dengan pemilik dan tanggal. Pemeriksaan efek membutuhkan garis dasar yang dicatat sebelum perubahan dan indikator yang didefinisikan, dan hasilnya boleh berupa “tidak ada efek” atau “tidak dapat dipastikan”. Tingkat isu berulang bergantung pada sebab yang tercatat, dan aturan pencocokan ditulis di register. Semua ukuran menggambarkan tim dan sistem, bukan individu.

## Rekomendasi

### Jadikan perbaikan terlihat dan dimiliki

**1. Simpan satu daftar perbaikan terlihat per tim.** Taruh butir perbaikan di tempat tim sudah melihat, seperti papan atau backlog-nya, dan beri tag. Setiap butir punya pemilik, masalah yang dinyatakan, efek yang diharapkan, indikator, dan tanggal. Daftar yang hidup di perkakas terpisah atau dokumen yang tak dibuka siapa pun akan membusuk. Tunjukkan butir tertua agar daftar tak dapat bersembunyi.

**2. Adakan renungan singkat yang teratur.** Pada irama mantap tim bertanya apa yang berjalan baik, apa yang menghalangi, dan apa yang dicoba berikutnya. Jaga singkat dan spesifik, dan akhiri dengan sejumlah kecil tindakan yang punya pemilik. Jika tim Anda memilih memakai format bernama untuk ini, seperti retrospektif, itu pilihan tim. Prinsipnya adalah kebiasaan yang teratur.

**3. Sepakati lebih sedikit tindakan dan selesaikan.** Dua atau tiga tindakan yang selesai mengajarkan lebih banyak daripada selusin yang tidak. Periksa tingkat tindak lanjut. Ketika tindakan berulang kali meleset, tanyakan mengapa: kepemilikan tak jelas, tak ada kapasitas, atau tindakan terlalu besar. Pecah yang besar menjadi langkah kecil.

**4. Lindungi kapasitas.** Sisihkan porsi kapasitas untuk perbaikan, dan rencanakan seperti pekerjaan lain (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman). Ketika tim kelebihan beban, kurangi asupan pekerjaan baru alih-alih membatalkan perbaikan, karena perbaikan sering menjadi yang mengurangi kelebihan beban. Lacak porsi yang dipakai.

### Temukan yang penting

**5. Cari kendalanya.** Pakai data alur untuk menemukan di mana pekerjaan menunggu dan apa yang membatasi throughput. Perbaikan pada kendala menaikkan keluaran seluruh sistem. Perbaikan di tempat lain mungkin hanya memindahkan tumpukan pekerjaan. Terapkan pandangan yang sama pada penanganan insiden, persetujuan perubahan, dan pemenuhan permintaan.

**6. Pakai bukti untuk memilih.** Pilih perbaikan dari data dan dari orang yang paling dekat dengan rasa sakit: insiden berulang, penantian panjang, pengerjaan ulang, keluhan pengguna, daftar hambatan. Kaitkan tiap perbaikan dengan masalah tercatat. Ini mengikat register perbaikan dengan manajemen masalah (lihat topik 4.1, Metrik manajemen masalah).

**7. Cari sebab dan faktor yang berkontribusi.** Untuk masalah berulang, tanyakan mengapa lebih dari sekali, dan cari kondisi selain pemicu. Waspadai berhenti pada sebab masuk akal pertama, atau pada seseorang. Pertanyakan asumsi: mengapa kita bekerja begini, dan apakah aturan itu masih dibutuhkan? Di situlah pembelajaran lingkaran ganda membuahkan hasil.

### Coba kecil, lalu periksa

**8. Jalankan eksperimen kecil dengan garis dasar.** Nyatakan perubahan, efek yang diharapkan, dan indikator. Catat garis dasar sebelum perubahan. Coba pada skala kecil untuk periode singkat, lalu bandingkan. Siklus Plan-Do-Check-Act adalah bingkai sederhana. Semakin singkat waktu dari gagasan ke percobaan, semakin cepat pembelajaran.

**9. Periksa efek dan catat dengan jujur.** Setelah perubahan, bandingkan indikator dengan garis dasar dan dengan apa lagi yang berubah. Catat apakah efek terlihat, tidak terlihat, atau tidak jelas. Tim yang tak pernah menemukan “tidak ada efek” mungkin tidak memeriksa dengan cermat (lihat topik 6.5, Realisasi nilai dan hasil bisnis).

**10. Pertahankan yang berhasil dan buang yang tidak.** Sebarkan perbaikan yang berhasil ke tim lain di mana cocok, dan pensiunkan perubahan yang menambah biaya tanpa manfaat. Tinjau kembali perubahan lebih lama, karena kondisi berubah. Standar sebaiknya berevolusi seiring tim belajar.

### Jaga kebiasaan tetap hidup

**11. Buat aman untuk menyarankan dan untuk berhenti.** Orang mengajukan gagasan ketika gagasan sebelumnya didengar dan ditindaklanjuti. Mereka diam ketika gagasan lenyap atau membawa pekerjaan tambahan bagi pengusul. Tanggapi setiap gagasan, bahkan jika jawabannya “belum sekarang,” dengan alasan. Izinkan tim menghentikan perbaikan yang tidak berhasil.

**12. Jangan jadikan perbaikan sebagai target.** Jangan menetapkan target untuk jumlah gagasan, jumlah tindakan ditutup, atau penghematan yang diklaim. Laporkan tindak lanjut, pemeriksaan efek, tingkat pengulangan, dan beberapa cerita. Bandingkan tiap tim dengan masa lalunya sendiri, dan bagikan gagasan baik antar-tim tanpa memeringkatnya.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat tindak lanjut tindakan | Menyepakati tindakan remeh; menggeser tanggal jatuh tempo; menutup tanpa mengerjakan | Tinjau ukuran dan nilai tindakan; perubahan tanggal dicatat; tingkat pemeriksaan efek |
| Usia backlog perbaikan | Menutup butir lama sebagai “tidak dikerjakan” tanpa keputusan; memecah butir untuk mengatur ulang usia | Catat alasan penutupan; lacak butir ditutup tanpa tindakan; tinjau yang tertua |
| Tingkat pemeriksaan efek | Mencatat pemeriksaan tanpa garis dasar; hanya memeriksa keberhasilan | Garis dasar bertanggal sebelum perubahan; sertakan hasil nol dan negatif |
| Waktu dari gagasan ke percobaan | Menyebut rencana sebagai percobaan; mencoba variasi remeh | Definisikan percobaan sebagai perubahan dalam pekerjaan nyata; lihat pentingnya gagasan yang dicoba |
| Porsi gagasan garis depan | Manajer mengajukan gagasan atas nama staf; kuota gagasan wajib | Gagasan menurut penulis dicatat pada tingkat tim; tanpa kuota; tanyakan tim |
| Tingkat isu berulang | Mencatat sebab berbeda untuk masalah yang sama; menutup catatan sebelumnya dengan jenis lain | Cocokkan menurut sebab dengan aturan tercatat; tinjauan oleh orang di luar tim |
| Porsi kapasitas perbaikan | Menandai pekerjaan biasa sebagai perbaikan; menjadwalkan waktu yang lalu dipakai untuk pengiriman | Ambil sampel butir untuk jenis; bandingkan dengan waktu yang benar-benar dihabiskan |

Pembacaan yang sehat adalah daftar pendek dengan tindakan yang selesai, gagasan yang mencapai percobaan dalam hitungan hari atau pekan, efek yang diperiksa dan kadang mengecewakan, isu berulang yang menurun, dan kapasitas terlindungi yang terpakai.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Program perbaikan besar | Terlihat; dapat menangani isu besar | Lambat; terputus dari pekerjaan harian |
| Eksperimen berkelanjutan kecil | Pembelajaran cepat, risiko rendah | Mungkin melewatkan masalah struktural |
| Tim perbaikan pusat | Keterampilan dan konsistensi | Jauh dari pekerjaan; gagasan macet |
| Perbaikan milik tim | Relevan dan termotivasi | Mutu bervariasi; butuh dukungan |
| Skema gagasan dengan hadiah | Menghasilkan volume | Kuota dan manipulasi; mutu rendah |
| Seleksi berbasis bukti | Berfokus pada masalah nyata | Butuh data dan waktu |
| Pemeriksaan efek formal | Pembelajaran jujur | Upaya; dapat terasa birokratis jika berat |
| Tanpa pemeriksaan | Cepat | Tak belajar apa yang berhasil |

Jawaban prosanya adalah menjaga perbaikan dekat dengan tim, dalam eksperimen kecil dengan pemeriksaan efek ringan, didukung beberapa orang yang membantu soal data dan metode, dan oleh pemimpin yang melindungi kapasitas dan mendengarkan hasilnya.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Perbaikan apa yang kita sepakati pada tinjauan terakhir, dan apakah terjadi?**
Lihat tindakannya. Untuk tiap tindakan, tanyakan apakah selesai, ditinggalkan, atau dilupakan, dan mengapa. Fasilitator sebaiknya mencatat alasannya. Sepakati berapa tindakan yang benar-benar dapat diselesaikan tim, dan pangkas daftar berikutnya sebanyak itu.

**2. Perubahan mana yang baru-baru ini kita buat yang kita tahu membantu, dan bagaimana kita tahu?**
Pilih perubahan terbaru dan cari garis dasar serta hasilnya. Jika tidak ada, bahas cara memeriksa lain kali. Putuskan indikator sederhana untuk eksperimen berikutnya.

**3. Apa yang terus kembali sebanyak apa pun kita memperbaikinya?**
Daftar isu berulang. Untuk satu isu, tanyakan mengapa ia kembali dan asumsi apa di balik pendekatan saat ini. Pertimbangkan apakah perbaikan menangani gejala. Pilih satu isu berulang untuk dilihat lebih dalam.

**4. Di mana pekerjaan menunggu paling lama, dan apa kendalanya?**
Pakai data alur. Tanyakan apakah perbaikan yang sedang dikerjakan tim menyentuh kendala. Jika tidak, bahas apakah mengubah fokus.

**5. Seberapa banyak pekan kita yang dipakai untuk perbaikan, dan apa yang melindunginya?**
Bandingkan rencana dengan kenyataan. Bahas apa yang mengambil waktu. Sepakati aturan melindungi porsi kecil, dan apa yang dipotong jika tim kelebihan beban.

**6. Apa yang terjadi pada gagasan terakhir yang diusulkan seseorang, dan bagaimana mereka mendengar tentangnya?**
Telusuri satu gagasan. Apakah dijawab, dicoba, atau hilang? Bahas cara memastikan setiap gagasan mendapat respons dan alasan.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman adalah sumber utama gagasan perbaikan dan penilai terbaik apakah berhasil. Mereka sebaiknya menjaga daftar terlihat, menyelesaikan beberapa tindakan tiap siklus, memeriksa efek, dan membagikan apa yang mereka pelajari. Mereka butuh kapasitas terlindungi dan pemimpin yang merespons.

### Tim layanan dan operasi

Tim operasi melihat insiden berulang, persetujuan lambat, dan toil manual setiap hari. Mereka sebaiknya mengaitkan perbaikan dengan masalah tercatat, melacak isu berulang, dan menyediakan waktu untuk perbaikan yang mengurangi beban mereka sendiri. Umpan balik mereka menunjukkan apakah perbaikan sampai ke pengguna.

### Kepemimpinan dan tata kelola

Pemimpin menciptakan kondisi: kapasitas terlindungi, rasa aman untuk menyarankan dan untuk berhenti, dan perhatian pada hasil. Mereka sebaiknya meminta tindak lanjut dan pemeriksaan efek, menerima temuan “tidak ada efek” yang jujur, menghindari kuota, dan mendanai perbaikan yang butuh investasi. Tata kelola sebaiknya melihat register perbaikan lintas tim untuk pola yang butuh tindakan struktural.

### Pelanggan dan pengguna

Pengguna diuntungkan oleh layanan yang terus membaik, dan mereka adalah sumber gagasan yang kaya. Mereka sebaiknya ditanya, diberi tahu apa yang berubah, dan diundang memeriksa efeknya. Keluhan berulang tentang isu yang sama adalah sinyal bahwa perbaikan tidak mencapai sebabnya.

## Dalam praktik: contoh ITIL agile

Kelompok layanan digital sebuah badan pajak nasional menjalankan portal pelaporan, sistem pembayaran, dan platform pusat kontak dengan delapan tim. Setiap tim menyimpan daftar perbaikan, dan kelompok melaporkan jumlah perbaikan yang selesai tiap kuartal. Angka di bawah bersifat ilustratif.

Kepala perbaikan layanan memperhatikan bahwa angka yang dilaporkan naik sementara titik sakit yang sama bertahan. Ia meninjau daftarnya. Di seluruh kelompok, 212 butir perbaikan terbuka, dengan median usia 7 bulan dan yang tertua 26 bulan. Dari tindakan yang disepakati dalam tinjauan kuartal lalu, 38 persen selesai pada tanggalnya. Dari 64 perbaikan yang selesai tahun lalu, hanya 9 yang punya garis dasar dan hasil tercatat, tingkat pemeriksaan efek 14 persen, dan 3 dari 9 itu tidak menunjukkan efek. Isu berulang lazim: dari 25 insiden yang terkait dengan perbaikan yang dimaksudkan menghapus sebabnya, 11 berulang dalam enam bulan, tingkat pengulangan 44 persen. Pekerjaan perbaikan memakan sekitar 4 persen kapasitas.

Kelompok menyepakati empat perubahan dengan tim. Tiap tim memangkas daftarnya menjadi butir yang dapat ditangani dalam dua bulan berikutnya dan menyatakan mengapa ia memarkir atau menutup sisanya. Tim menyepakati tidak lebih dari tiga tindakan sekaligus, dengan pemilik bernama. Untuk tiap perbaikan, garis dasar dan indikator dicatat sebelum perubahan, dan hasilnya dicatat sesudahnya, termasuk “tidak ada efek.” Tinjauan kuartalan melihat masalah berulang lintas tim dan memilih dua untuk analisis sebab lebih dalam, dengan tim pusat kontak dan pembayaran menyelidiki sebab bersama. Tiap tim menyisihkan 10 persen kapasitas untuk perbaikan, dilindungi aturan bahwa pembatalan butuh persetujuan pemimpin tim dan entri log. Laporan kepada pemimpin berubah dari jumlah perbaikan selesai menjadi tindak lanjut, pemeriksaan efek, dan isu berulang.

Setelah dua kuartal, butir terbuka turun menjadi 74 dengan median usia 2 bulan. Tindak lanjut naik menjadi 81 persen, tingkat pemeriksaan efek menjadi 70 persen, dengan 9 dari 36 perbaikan yang diperiksa tidak menunjukkan efek dan dibuang. Tingkat isu berulang turun menjadi 20 persen, dan waktu dari gagasan ke percobaan punya median 9 hari. Wakil direktur meminta target 100 perbaikan selesai per kuartal. Kepala perbaikan layanan menjelaskan bahwa hitungan itulah alasan angka sebelumnya menyesatkan, dan mengusulkan melacak tindak lanjut, efek, dan tingkat pengulangan. Keputusan dicatat, dan permintaan satu tim untuk menjalankan eksperimen empat pekan pada proses persetujuannya disetujui.

## Sudut pandang sektor

**Startup.** Perbaikan terjadi terus-menerus dan informal. Simpan daftar pendek, tuliskan efek yang diharapkan dan periksa, dan lindungi sepotong kecil waktu. Hindari proses berat, dan waspadai perbaikan tergeser seluruhnya oleh pertumbuhan.

**Bisnis kecil.** Satu atau dua orang mengerjakan segalanya, dan perbaikan bersaing dengan pemadaman kebakaran. Pilih satu masalah berulang tiap kuartal, perbaiki sebabnya, dan periksa efeknya. Tanyakan pengguna apa yang mengganggu mereka dan bertindaklah atas satu hal.

**Perusahaan besar.** Skala membuat perbaikan tak merata dan gagasan sulit dibagikan. Sediakan format register bersama dan pelatihan ringan, biarkan tim memiliki daftar mereka, dan pakai forum lintas tim untuk menyebarkan apa yang berhasil dan menangani kendala bersama. Hindari kuota pusat.

**Pemerintah dan sektor publik.** Perbaikan mungkin dibatasi pengadaan, legislasi, dan rantai persetujuan, dan diawasi publik. Dokumentasikan eksperimen dan hasilnya, libatkan pengguna dalam memilih dan memeriksa perbaikan, dan laporkan efek dengan jujur, termasuk yang tidak berhasil. Cari perbaikan yang menghapus beban dari warga (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah kapasitas terlindungi, yang merupakan biaya utama, upaya mencatat garis dasar dan hasil, dan sebagian pelatihan atau fasilitasi. Perkakas dapat sesederhana papan yang sudah ada pada tim.

Imbal hasilnya adalah lebih sedikit masalah berulang, toil lebih rendah, penantian lebih singkat, dan semangat lebih baik pada tim yang melihat gagasan mereka menjadi perubahan. Bangun kasus dari data Anda sendiri: biaya insiden berulang dan porsi yang dihapus perbaikan, waktu yang dihemat perbaikan dengan efek terperiksa, dan biaya perbaikan yang dibuat dan tidak berhasil, yang kini pemeriksaan mencegah terulangnya. Hindari mengutip imbal hasil terbitan program perbaikan kecuali Anda dapat menelusuri sumber dan metodenya. Hitung juga biaya peluang kapasitas (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Menghitung perbaikan selesai.** Tim menyepakati perubahan remeh. Ukur tindak lanjut dan efek.
- **Kuota gagasan.** Menghasilkan volume dan derau. Tanggapi gagasan yang datang.
- **Tanpa garis dasar.** Tak ada yang tahu apakah ada yang membantu. Catat sebelum dan sesudah.
- **Hanya keberhasilan yang dicatat.** Pembelajaran dari kegagalan hilang. Catat hasil nol.
- **Daftar panjang tanpa pemangkasan.** Daftar kehilangan kredibilitas. Pangkas sampai apa yang akan dikerjakan tim.
- **Perbaikan di waktu luang.** Tidak ada. Lindungi kapasitas.
- **Memperbaiki gejala.** Masalah kembali. Tanyakan mengapa lebih dari sekali, dan pertanyakan asumsi.
- **Perbaikan oleh tim yang jauh.** Gagasan macet. Jaga bersama orang yang mengerjakan pekerjaan.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Kebiasaan dan kepemilikan | Perbaikan sesekali | Renungan terjadi; tindakan sering hilang | Daftar tim terlihat dengan pemilik; sejumlah kecil tindakan selesai | Tindak lanjut dan waktu gagasan-ke-percobaan dikelola; kapasitas dilindungi | Perbaikan bersifat rutin dan dibagikan lintas tim, pemasok, dan pengguna |
| Bukti dan efek | Opini | Beberapa ukuran setelah perubahan | Garis dasar dan hasil dicatat untuk tiap perbaikan | Pemeriksaan efek mencakup hasil nol; isu berulang dilacak menurut sebab | Pembelajaran tingkat portofolio memandu di mana memperbaiki berikutnya, bersama mitra |
| Kedalaman | Perbaikan gejala | Beberapa analisis sebab | Analisis sebab untuk isu berulang | Kendala diidentifikasi dari data alur; asumsi dipertanyakan | Perbaikan sistemik di seluruh aliran nilai, dengan tata kelola bersama |

## Daftar periksa

- [ ] Tiap tim punya satu daftar perbaikan terlihat dengan pemilik, efek yang diharapkan, dan tanggal.
- [ ] Renungan singkat reguler berakhir dengan sejumlah kecil tindakan berpemilik.
- [ ] Tindak lanjut tindakan dan usia butir tertua ditinjau bulanan.
- [ ] Kapasitas untuk perbaikan direncanakan, dilindungi, dan dilacak.
- [ ] Perbaikan dikaitkan dengan masalah atau bukti tercatat.
- [ ] Garis dasar dan indikator dicatat sebelum tiap perubahan.
- [ ] Efek diperiksa dan dicatat, termasuk tidak ada efek.
- [ ] Isu berulang dilacak menurut sebab setelah perbaikan.
- [ ] Setiap gagasan mendapat respons dengan alasan.
- [ ] Tidak ada kuota atau target untuk gagasan, tindakan, atau penghematan.

## Prompt AI

**Pilih perbaikan dari bukti.**

```text
Berikut masalah dan hambatan berulang kami dengan hitungan kasar dan dampak:
[paste]. Berikut data alur kami tentang di mana pekerjaan menunggu: [paste].
Sarankan dua atau tiga perbaikan mana yang paling mungkin penting, mengapa, dan
bukti apa yang akan mengonfirmasi atau membantahnya. Rekomendasikan eksperimen
kecil untuk masing-masing, dengan garis dasar dan indikator. Jangan mengarang
angka. Daftar asumsi Anda.
```

**Rancang eksperimen kecil.**

```text
Kami ingin mencoba [change] untuk menangani [problem] di [team and process].
Rancang eksperimen kecil: efek yang diharapkan, garis dasar yang dicatat
sekarang, indikator dan cara mengukurnya, periode percobaan, cara mengetahui
apakah perubahan lain mengacaukan hasil, dan apa yang akan kami lakukan jika tak
ada efek. Jaga tetap ringan. Daftar asumsi Anda dan risiko.
```

**Tinjau daftar perbaikan.**

```text
Berikut daftar perbaikan kami dengan usia, pemilik, dan efek yang diharapkan untuk
tiap butir: [paste]. Identifikasi butir yang terlalu samar, terlalu besar, atau
basi, sarankan daftar lebih pendek yang dapat diselesaikan tim dalam dua bulan,
dan usulkan catatan untuk menjelaskan butir yang kami parkir dan mengapa. Jangan
menilai individu. Daftar asumsi Anda.
```

**Analisis masalah berulang.**

```text
Masalah: [describe]. Perbaikan masa lalu dan kapan berulang: [paste]. Sarankan
faktor yang berkontribusi di luar sebab masuk akal pertama, asumsi untuk
dipertanyakan (pembelajaran lingkaran ganda), dan beberapa cara menguji tiap
hipotesis dengan murah. Jangan mengasumsikan satu akar masalah. Daftar asumsi Anda
dan pertanyaan untuk tim.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik perbaikan.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik perbaikan mengukur tindak lanjut dan efek, dengan vektor manipulasi dan pagar pembatasnya.

## Poin penting

- Simpan satu daftar perbaikan terlihat per tim, dengan beberapa tindakan berpemilik sekaligus, dan selesaikan.
- Catat garis dasar sebelum tiap perubahan, periksa efeknya sesudahnya, dan catat hasil nol.
- Lacak tindak lanjut, pemeriksaan efek, isu berulang, dan usia butir tertua.
- Perbaiki kendala lebih dulu, dan cari sebab serta asumsi di baliknya.
- Lindungi kapasitas untuk perbaikan dalam kecepatan yang berkelanjutan.
- Jangan menetapkan kuota untuk gagasan, tindakan, atau penghematan.

## Referensi dan bacaan lanjutan

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
