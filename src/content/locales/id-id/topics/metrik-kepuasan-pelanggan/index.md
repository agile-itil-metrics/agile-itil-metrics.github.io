# Metrik kepuasan pelanggan

**Skor kepuasan memberi tahu Anda bagaimana perasaan orang tentang satu momen layanan, jadi ajukan pertanyaan singkat dan jujur pada waktu yang tepat, baca komentar sebelum angka, dan jangan pernah biarkan skor menjadi kuota.**

## Gambaran umum dan motivasi

Ukuran operasional menyatakan apa yang dilakukan layanan. Ukuran kepuasan menyatakan seperti apa rasanya menerima. Tiket dapat ditutup dalam waktu targetnya dan tetap meninggalkan pengguna buntu, dan layanan yang dipulihkan masih bisa terasa seperti pekan yang buruk. Tim agile menanyakan hal yang sama di akhir setiap inkremen: apakah ini membantu orang yang dituju? Manajemen layanan TI (ITSM), sebagaimana dikodifikasi ITIL, menanyakannya lewat nilai yang diciptakan bersama layanan dengan pelanggannya. Pengukuran kepuasan adalah tempat kedua pertanyaan itu bertemu.

[Kepuasan pelanggan](https://en.wikipedia.org/wiki/Customer_satisfaction) adalah ukuran seberapa baik produk dan layanan memenuhi atau melampaui apa yang diharapkan pelanggan. Dalam pekerjaan layanan biasanya dikumpulkan lewat survei, dan hadir dalam tiga bentuk lazim yang dibahas topik ini:

- **Skor kepuasan pelanggan (CSAT):** penilaian atas interaksi atau layanan tertentu, biasanya pada skala lima poin, dilaporkan sebagai porsi respons yang puas.
- **Net promoter score (NPS):** didasarkan pada satu pertanyaan tentang seberapa mungkin responden merekomendasikan perusahaan, produk, atau layanan. Responden yang menjawab 9 atau 10 adalah promotor, yang menjawab 0 sampai 6 adalah detraktor, dan skornya adalah persentase promotor dikurangi persentase detraktor. [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score) dipopulerkan Fred Reichheld dalam artikel *Harvard Business Review* tahun 2003.
- **Customer effort score (CES):** penilaian seberapa besar upaya yang dibutuhkan untuk menyelesaikan sesuatu, atau seberapa mudah. Para pembuatnya berpendapat bahwa mengurangi upaya memprediksi loyalitas lebih baik daripada menyenangkan orang. Perlakukan klaim itu sebagai hipotesis untuk diuji dalam konteks Anda sendiri, bukan fakta mapan.

Dalam setelan TI internal “pelanggan” adalah rekan kerja, dan survei adalah pertanyaan singkat setelah tiket atau rilis. Prinsipnya sama, dan kewajiban etisnya lebih besar, karena orang yang Anda tanyai bekerja bersama Anda besok.

Survei adalah bentuk [metodologi survei](https://en.wikipedia.org/wiki/Survey_methodology), bidang dengan temuan puluhan tahun tentang bagaimana kata-kata pertanyaan, waktu, dan pengambilan sampel mengubah jawaban. Tim yang melewatkannya cenderung menghasilkan skor yang bergerak karena sebab yang tak berkaitan dengan mutu layanan. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku dengan kekuatan ekstra di sini: ketika staf dihargai atas skor tinggi, mereka belajar memintanya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Topik ini memberi Anda definisi, kebersihan data, dan kebiasaan yang menjaga ukuran kepuasan tetap jujur. Topik berikutnya memperluasnya ke arah pandangan pengalaman yang lebih penuh (lihat topik 6.2, Perjanjian tingkat pengalaman).

## Prinsip utama

- **Tanyakan tentang momen tertentu.** Survei yang terikat pada tiket tertutup atau rilis memberi jawaban lebih tajam daripada pertanyaan tahunan umum.
- **Jaga singkat.** Satu penilaian dan satu komentar terbuka mengalahkan sepuluh pertanyaan yang dilewati kebanyakan orang.
- **Baca komentarnya.** Skor memberi tahu seberapa banyak, dan kata-kata memberi tahu mengapa.
- **Laporkan siapa yang menjawab.** Skor tanpa tingkat respons dan campuran responden adalah desas-desus.
- **Tutup lingkaran.** Orang yang melaporkan pengalaman buruk sebaiknya mendapat kabar balik.
- **Bandingkan dengan diri sendiri dari waktu ke waktu.** Acuan lintas perusahaan menyembunyikan perbedaan metode, audiens, dan budaya.
- **Lindungi responden.** Kumpulkan hanya yang Anda butuhkan, katakan bagaimana akan dipakai, dan jangan memeringkat individu berdasarkannya.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Porsi respons yang puas, untuk jenis interaksi yang didefinisikan | respons dinilai 4 atau 5 pada skala lima poin / respons valid | persen | Survei pasca-interaksi yang terikat pada tiket atau rilis | Service desk; manajemen insiden; manajemen tingkat layanan | Umpan balik tinjauan pemangku kepentingan | Mingguan atau bulanan |
| NPS | Promotor dikurangi detraktor untuk layanan dan audiens yang didefinisikan | persen yang menjawab 9 atau 10 dikurangi persen yang menjawab 0 sampai 6 | poin, rentang -100 sampai 100 | Survei hubungan, dikirim pada interval tetap | Perbaikan berkelanjutan; manajemen tingkat layanan | Tinjauan hasil produk | Kuartalan |
| CES | Rata-rata atau porsi-menguntungkan penilaian seberapa mudah menyelesaikan sesuatu | respons menguntungkan / respons valid, atau rata-rata penilaian | persen atau rata-rata | Survei pasca-interaksi yang terikat pada tiket, permintaan, atau rilis | Manajemen permintaan layanan; service desk | Umpan balik kegunaan dalam penyempurnaan | Bulanan |
| Tingkat respons survei | Porsi pengguna yang diundang yang menjawab | respons diterima / survei disampaikan | persen | Alat survei dan sistem tiket | Pengukuran dan pelaporan | Partisipasi umpan balik dalam tinjauan | Bulanan |
| Cakupan responden | Seberapa dekat campuran responden cocok dengan populasi pengguna pada dimensi yang disepakati | porsi responden di tiap kelompok dibandingkan dengan porsi pengguna di kelompok itu, per kelompok | poin persentase | Alat survei digabung dengan direktori pengguna atau data tiket | Pengukuran dan pelaporan | Peta pemangku kepentingan | Kuartalan |
| Porsi tema komentar | Porsi komentar teks bebas yang ditetapkan ke tiap tema | komentar dalam tema / komentar yang dikodekan | persen | Komentar survei yang dikodekan | Perbaikan berkelanjutan | Tema retrospektif | Bulanan |
| Waktu tindak lanjut detraktor | Waktu dari penilaian rendah sampai kontak terdokumentasi dengan pengguna | stempel waktu catatan tindak lanjut dikurangi stempel waktu penilaian rendah, median dan persentil ke-85 | jam atau hari | Alat survei dan sistem tiket | Manajemen insiden; perbaikan berkelanjutan | Putaran umpan balik dalam kesepakatan kerja | Bulanan |

Jam dan batasnya penting. CSAT dan CES menghitung hanya respons terhadap interaksi tertentu, tidak pernah suasana hati umum. Waktu tindak lanjut detraktor dimulai pada saat penilaian rendah dicatat, bukan ketika seseorang pertama kali membacanya. Kecualikan catatan uji dan respons dari anggota tim yang diukur.

## Rekomendasi

### Rancang instrumen

**1. Pilih satu pertanyaan per tujuan.** Pakai CSAT setelah interaksi untuk mengetahui bagaimana interaksi itu berjalan, CES setelah sesuatu yang harus dilakukan pengguna untuk mengetahui di mana gesekan berada, dan NPS pada interval rutin untuk mengetahui hubungan keseluruhan. Mencampur ketiganya dalam satu formulir mengundang kelelahan survei dan hasil yang kabur. Jika Anda hanya mampu satu, pilih yang cocok dengan keputusan yang perlu Anda buat.

**2. Tulis kata-kata yang netral dan spesifik.** “Seberapa puas Anda dengan cara permintaan Anda ditangani?” lebih baik daripada “Seberapa hebat layanan kami?” Hindari pertanyaan berlaras ganda yang menanyakan kecepatan dan keramahan sekaligus. Tawarkan skala konsisten, labeli ujungnya, dan jaga urutan jawaban sama setiap kali. [Skala Likert](https://en.wikipedia.org/wiki/Likert_scale) adalah desain umum, dan perubahan kecil pada label dapat menggeser hasil, jadi jangan mengubahnya sembarangan.

**3. Tambahkan satu pertanyaan terbuka.** “Apa alasan utama penilaian Anda?” berbiaya kecil bagi responden dan memberi tim data terkayanya. Komentar menjelaskan skor, mengungkap masalah yang tak dapat diungkap angka, dan memberi agen sesuatu untuk dipelajari. Baca dalam tinjauan rutin, dengan lantang bila mungkin.

**4. Waktukan survei dekat dengan peristiwa.** Kirim pertanyaan segera setelah tiket diselesaikan atau rilis mendarat, selagi ingatan segar. Jangan mengirimnya pada saat penutupan oleh agen yang berharap nilai tinggi. Jeda singkat, ditetapkan sistem, menyingkirkan godaan membina jawaban.

### Buat angka dapat dipercaya

**5. Laporkan tingkat respons dan campuran responden di samping setiap skor.** Skor kepuasan dari 4 persen pengguna adalah pernyataan tentang responden. Bandingkan siapa yang menjawab dengan siapa yang diundang, memakai atribut yang sudah Anda pegang, seperti wilayah, layanan, atau jenis permintaan. Jurang besar berarti skor butuh label kehati-hatian. Keterwakilan adalah tema inti riset [bias respons](https://en.wikipedia.org/wiki/Response_bias), dan intinya bagi tim layanan sekadar melihat.

**6. Tampilkan ketidakpastian.** Sampel kecil berayun lebar. [Margin galat](https://en.wikipedia.org/wiki/Margin_of_error) atau [interval kepercayaan](https://en.wikipedia.org/wiki/Confidence_interval) yang ditampilkan di samping CSAT bulanan mencegah tim bereaksi pada derau (lihat topik 1.6, Literasi statistik untuk metrik layanan). Jika tim punya kurang dari beberapa lusin respons dalam suatu periode, laporkan hitungan dan baca komentar, bukan persentase.

**7. Hindari memilih siapa yang ditanya.** Jika orang yang menutup tiket memutuskan apakah survei dikirim, skor naik karena alasan yang salah. Kirim survei otomatis ke setiap interaksi yang memenuhi syarat, atau ke sampel acak jika volume tinggi. Dokumentasikan aturan, termasuk pengecualian apa pun, di register metrik.

**8. Pisahkan kepuasan seseorang dari kinerja seseorang.** Kepuasan bergantung pada faktor yang tak dikendalikan agen individu: mutu produk, antrean, kebijakan, suasana hati pengguna. Jangan memeringkat agen menurut CSAT. Pakai di tingkat tim dan layanan, dan pakai komentar untuk percakapan pembinaan yang disambut agen.

### Bertindak atas apa yang Anda dengar

**9. Tutup lingkaran dengan pengguna yang tidak puas.** Hubungi orang yang melaporkan pengalaman buruk, tanyakan apa yang akan membantu, dan catat apa yang Anda pelajari. Tetapkan target untuk waktu tindak lanjut dan jadikan tindak lanjut sebagai percakapan, bukan permintaan untuk mengubah skor. Mengubah skor atas permintaan adalah distorsi, jadi tindak lanjut sebaiknya bertujuan memperbaiki masalah dan belajar.

**10. Kodekan komentar menjadi tema dan lacak.** Sepakati daftar pendek tema, seperti “harus mengulang diri,” “respons lambat,” “perbaikan tidak bertahan,” “komunikasi tidak jelas,” dan “ramah dan membantu.” Kodekan sampel tiap bulan, dengan tangan atau alat, dan minta seseorang memeriksa hasilnya. Tren tema sering menunjukkan masalah sebelum skor bergerak.

**11. Kaitkan kepuasan dengan data operasional.** Bandingkan CSAT dengan waktu penyelesaian, tingkat pembukaan ulang, dan jumlah kontak per isu. Pasangan itu memberi tahu apakah kecepatan membeli kepuasan atau apakah tim cepat dan salah. Pakai untuk menemukan cerita untuk diselidiki, bukan untuk membuktikan aturan.

**12. Perlakukan acuan dengan hati-hati.** Angka terbitan atau yang disediakan vendor untuk skor kepuasan bergantung pada metode, audiens, dan wilayah, dan riwayat Anda sendiri adalah pembanding yang lebih baik. Jika Anda memakai pembandingan eksternal, nyatakan sumber, metode, dan tanggalnya, dan jangan menetapkan target darinya tanpa menguji apakah metode Anda cocok. Jangan pernah mengarang acuan.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| CSAT | Agen membina pengguna untuk memberi nilai tertinggi; survei dikirim hanya setelah tiket mudah; tiket sulit ditutup tanpa survei | Survei otomatis ke setiap tiket yang memenuhi syarat; tingkat respons dan campuran responden; tingkat pembukaan ulang |
| NPS | Mensurvei hanya pengguna ramah; mewaktukan survei setelah peristiwa baik; bertanya tatap muka; melabeli ulang poin skala | Audiens dan jadwal tetap di register; cakupan responden; baca komentar detraktor |
| CES | Menyingkirkan langkah dari formulir dengan cara yang memindahkan pekerjaan ke tempat lain; bertanya hanya setelah permintaan yang mulus | Hitungan kontak per isu; waktu pemenuhan permintaan dan pengerjaan ulang (lihat topik 3.5, Metrik pemenuhan permintaan layanan) |
| Tingkat respons survei | Mengundang hanya orang yang mungkin menjawab; mengirim survei ke daftar berbeda setiap kali | Aturan undangan tertulis; bandingkan yang diundang dengan populasi pengguna |
| Cakupan responden | Menjatuhkan kelompok sulit dijangkau dari perbandingan; membobot ulang tanpa menyatakan | Terbitkan dimensi dan metode; tampilkan hasil tak berbobot di samping yang berbobot |
| Porsi tema komentar | Mengodekan komentar untuk menghindari tema buruk; menggabung tema agar tak ada yang tampak besar | Orang kedua mengodekan sampel; jaga daftar tema stabil dan catat perubahan |
| Waktu tindak lanjut detraktor | Mencatat catatan tanpa menghubungi pengguna; menghubungi pengguna untuk meminta skor lebih baik | Periksa isi catatan tindak lanjut; tanyakan pengguna di survei berikutnya apakah ada yang menghubungi mereka |

Pembacaan yang sehat adalah tingkat respons yang stabil, campuran responden dekat dengan campuran pengguna, skor yang bergerak bersama pengalaman yang digambarkan pengguna dalam komentar, dan pengguna tidak puas yang mengatakan bahwa seseorang menghubungi mereka kembali.

## Kompromi: kelebihan dan kekurangan

| Ukuran | Kekuatan | Kelemahan |
| --- | --- | --- |
| CSAT | Sederhana, cepat, terikat pada momen tertentu | Mudah digelembungkan; sedikit berkata tentang seluruh hubungan |
| NPS | Satu pertanyaan, mudah dilacak dari waktu ke waktu | Menyembunyikan alasan; satu angka memampatkan distribusi lebar; perbedaan budaya memengaruhi skala |
| CES | Menunjuk langsung pada gesekan yang dapat disingkirkan tim | Kurang dipahami luas; buktinya diperdebatkan |
| Survei panjang tahunan | Kaya, mencakup banyak layanan | Lambat, respons rendah, sulit ditindaklanjuti |
| Hanya komentar | Konkret, mudah diingat | Sulit dibandingkan dari waktu ke waktu; rentan terhadap suara paling keras |
| Sinyal perilaku | Tanpa beban survei; objektif | Tidak menangkap perasaan; dapat salah membaca sebab |

Jawaban prosanya adalah menggabungkan survei interaksi singkat, survei hubungan sesekali, dan komentar, dan membaca ketiganya dengan data operasional. Ukuran kepuasan bekerja sebagai percakapan antara pengguna dan tim. Mereka gagal sebagai papan skor.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Apa yang kita lakukan dengan skor rendah dan skor tinggi?**
Minta tim menggambarkan, dalam praktik, kapan terakhir skor rendah berujung pada perubahan. Lalu tanyakan hal yang sama untuk skor tinggi. Jika jawabannya samar, survei adalah ritual. Fasilitator sebaiknya mencari tautan konkret dari data ke tindakan, dan menyepakati satu tempat tautan itu akan dicatat.

**2. Siapa yang menjawab survei kita, dan siapa yang tidak?**
Minta tim menamai kelompok pengguna yang paling jarang mereka dengar. Bandingkan dengan daftar undangan dan direktori pengguna. Percakapan sering mengungkap bahwa pengguna paling pendiam punya masalah tersulit. Sepakati satu cara menjangkau kelompok pendiam kuartal ini, seperti panggilan singkat atau saluran berbeda.

**3. Kapan dalam interaksi kita bertanya, dan siapa yang memutuskan?**
Telusuri jalur dari penyelesaian ke survei. Temukan setiap titik tempat seseorang dapat memengaruhi apakah, kapan, atau bagaimana survei dikirim. Sepakati mana dari titik itu yang sebaiknya diotomatisasi. Fasilitator dapat bertanya apa yang mungkin dilakukan agen untuk melindungi skor, sebagai pertanyaan desain dan bukan tuduhan.

**4. Apa yang didengar detraktor dari kita setelah mereka menjawab?**
Lihat beberapa penilaian rendah terbaru dan baca catatan tindak lanjutnya. Tanyakan apakah pengguna akan merasa didengar. Bahas cara membuat tindak lanjut berguna tanpa meminta penilaian yang diubah. Putuskan siapa yang memiliki tindak lanjut dan berapa waktu targetnya.

**5. Komentar mana dari bulan lalu yang mengubah apa yang kita lakukan?**
Cetak atau tampilkan sepuluh komentar acak. Tanyakan tim mana yang ditindaklanjuti, mana yang tidak, dan mengapa. Ini menjaga fokus pada kata-kata dan membangun kebiasaan membacanya. Sepakati mengodekan tema bulan depan dan meninjau trennya.

**6. Angka terbitan mana yang menggoda kita untuk dibandingkan, dan apakah perbandingannya adil?**
Namai angkanya, sumbernya, metodenya, dan audiensnya, lalu bandingkan masing-masing dengan milik Anda sendiri. Tanyakan apakah itu akan mengubah keputusan. Jika tidak, singkirkan dan pakai tren Anda sendiri. Fasilitator sebaiknya mencatat jawabannya di register metrik.

## Empat perspektif

### Tim produk dan pengiriman

Tim produk memakai umpan balik kepuasan untuk memutuskan apa yang diperbaiki atau dibangun berikutnya, dan survei singkat setelah rilis memberi bacaan lebih cepat daripada tinjauan kuartalan berikutnya. Tim pengiriman sebaiknya menautkan komentar ke item backlog, menunjukkan kepada pengguna apa yang berubah, dan menghindari memperlakukan skor sebagai tujuan pengiriman. Kenaikan komentar tentang upaya atau kebingungan setelah rilis adalah sinyal untuk melihat rilis itu, bukan survei.

### Tim layanan dan operasi

Service desk mengumpulkan sebagian besar data interaksi dan merasakan tekanan skor paling besar. Tim operasi sebaiknya mengirim survei otomatis, menerbitkan aturan pengambilan sampel, dan memakai komentar untuk pembelajaran tim. Mereka sebaiknya menjaga CSAT di samping tingkat pembukaan ulang dan kontak berulang, agar penutupan cepat tidak tampak sebagai hasil baik (lihat topik 3.1, Metrik service desk).

### Kepemimpinan dan tata kelola

Pemimpin menetapkan iklim untuk manipulasi. Permintaan “kepuasan 95 persen pada akhir tahun” mengajari staf melindungi angka. Pemimpin sebaiknya meminta tingkat respons, campuran responden, dan tema komentar teratas, mendanai perbaikan yang diungkap komentar, dan menjauhkan kepuasan dari gaji dan peringkat individu. Tata kelola sebaiknya mengharapkan metode yang dinyatakan untuk angka apa pun yang dilaporkan secara eksternal.

### Pelanggan dan pengguna

Pengguna memberi waktu dan keterusterangan mereka. Mereka pantas mendapat survei singkat, alasan jelas untuk bertanya, janji tentang bagaimana jawaban mereka akan dipakai, dan balasan ketika mereka melaporkan masalah. Di mana survei tidak anonim, katakan demikian. Pengguna yang tak melihat perubahan akan berhenti menjawab, dan keheningan akan tampak seperti kepuasan.

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional menjalankan service desk dan tim kecil yang membangun aplikasi klinis. Angka di bawah bersifat ilustratif.

CSAT bulanan service desk adalah 92 persen, dihitung dari 140 respons dari sekitar 3.100 tiket tertutup, tingkat respons 4,5 persen. Pimpinan senang. Manajer layanan membaca komentar dan memperhatikan bahwa banyak respons positif datang dari staf administrasi, sementara perawat shift malam nyaris tak muncul. Ia membandingkan campuran responden dengan direktori pengguna dan mendapati staf shift malam sekitar 18 persen pengguna dan 3 persen responden.

Tim membuat tiga perubahan. Survei menjadi formulir dua pertanyaan dengan satu penilaian dan satu komentar, dikirim otomatis oleh sistem tiket empat jam setelah penyelesaian, ke setiap tiket. Versi pesan teks ditawarkan kepada staf yang bekerja shift. Laporan bulanan kini menunjukkan CSAT dengan tingkat respons, interval kepercayaan, campuran responden terhadap campuran pengguna, dan lima tema komentar teratas.

Dalam dua bulan tingkat respons naik menjadi sekitar 11 persen dan CSAT turun menjadi 84 persen. Tema komentar menunjukkan “harus menelepon kembali” dan “perbaikan tidak bertahan” sebagai dua keluhan teratas, terkonsentrasi di sistem klinis. Kepala TI memberi tahu dewan bahwa skor lama mencerminkan siapa yang menjawab, dan skor baru adalah panduan yang lebih baik. Tim produk menambahkan item backlog untuk memperbaiki kerusakan berulang di balik telepon balik itu, dan service desk mulai menghubungi setiap pengguna yang memberi penilaian 1 atau 2 dalam satu hari kerja. Pada kuartal berikutnya, tingkat kontak ulang untuk sistem klinis turun, dan porsi komentar “harus menelepon kembali” turun bersamanya. Tim mencatat keputusan dalam lognya dan tidak menetapkan target CSAT.

## Sudut pandang sektor

**Startup.** Kontak dekat dengan pengguna membuat percakapan singkat lebih baik daripada survei pada awalnya. Tambahkan survei satu pertanyaan begitu volume tumbuh, dan terus baca setiap komentar. Tahan dorongan untuk menerbitkan skor sebelum Anda punya cukup respons agar berarti.

**Bisnis kecil.** Satu pelanggan yang tidak puas dapat lebih penting daripada skor. Pakai survei sebagai dorongan untuk berbicara dengan orang, dan simpan catatan tindak lanjut. Laporan kepuasan yang disediakan vendor pantas disikapi skeptis tentang metodenya.

**Perusahaan besar.** Skala membawa segmen dan godaan untuk merekap. Simpan skor menurut layanan dan audiens, terbitkan metode, dan hindari merata-ratakan layanan tak sama menjadi satu angka. Pakai platform survei yang stabil dengan pengiriman otomatis, dan perlakukan peringkat lintas tim dengan hati-hati.

**Pemerintah dan sektor publik.** Badan publik sering punya kewajiban formal mengumpulkan umpan balik pengguna dan menerbitkan hasilnya, bersama kewajiban aksesibilitas dan privasi. Tawarkan saluran survei yang aksesibel, lindungi identitas responden, dan terbitkan metode bersama hasil. Di mana angka kepuasan muncul dalam kontrak atau laporan undang-undang, definisikan dengan tepat dan tampilkan pagar pembatas di sampingnya (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biaya langsungnya adalah perkakas survei, yang sudah disertakan banyak sistem tiket, satu atau dua jam tiap bulan untuk meninjau komentar dan mengodekan tema, dan waktu untuk menindaklanjuti pengguna yang tidak puas. Biaya yang lebih besar adalah disiplin bertindak atas apa yang Anda dengar. Tak perlu platform baru untuk memulai.

Imbal hasil muncul sebagai perbaikan yang dihargai pengguna dan pemborosan yang dihindari. Komentar memberi tahu Anda di mana gesekan berada, sehingga Anda dapat menyingkirkan sebab kontak berulang dan perbaikan yang gagal alih-alih menambah staf untuk menanganinya. Pandangan lebih baik tentang siapa yang tidak menjawab melindungi Anda dari keputusan berdasarkan segelintir yang memilih sendiri. Gambarkan manfaat dalam istilah masalah yang ditemukan dan disingkirkan, dan ukur garis dasar Anda sendiri sebelum dan sesudah: tingkat kontak ulang, tingkat pembukaan ulang, dan waktu menuju respons berguna pertama. Jangan memakai persentase karangan untuk membenarkan program. Jika Anda butuh angka, bangun dari data Anda sendiri.

## Anti-pola dan jebakan

- **Memperlakukan skor sebagai target.** Ia akan dipenuhi dengan memilih siapa yang ditanya atau membina jawaban. Pakai sebagai pertanyaan dan pasangkan dengan komentar dan ukuran operasional.
- **Mensurvei hanya setelah tiket mudah.** Kirim ke setiap interaksi yang memenuhi syarat, secara otomatis.
- **Memeringkat agen menurut CSAT.** Itu menghukum orang yang mengambil kasus sulit. Pakai tampilan tim dan layanan dan belajar dari komentar.
- **Meminta skor lebih baik.** Tindak lanjut atas penilaian rendah sebaiknya bertujuan memperbaiki masalah. Jangan meminta perubahan.
- **Melaporkan skor tanpa tingkat respons.** Selalu tampilkan siapa yang menjawab dan berapa banyak.
- **Mengubah pertanyaan dan mempertahankan tren.** Catat perubahan dan tandai putusnya pada bagan.
- **Mengimpor acuan tanpa metodenya.** Bandingkan dengan riwayat Anda sendiri lebih dulu.
- **Mengumpulkan komentar dan tak pernah membacanya.** Taruh tinjauan di kalender dan tetapkan pemilik.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Instrumen dan pengambilan sampel | Survei ad hoc sesekali | Survei ada untuk beberapa layanan, dikirim dengan tangan | Survei singkat dikirim otomatis ke semua interaksi yang memenuhi syarat | Aturan pengambilan sampel, perubahan kata-kata, dan pengecualian dicatat dan ditinjau | Instrumen diselaraskan antartim dan pemasok, dan direvisi bersama pengguna |
| Mutu data | Hanya skor | Tingkat respons dilaporkan | Tingkat respons, campuran responden, dan ketidakpastian dilaporkan | Cakupan responden dikelola; pengodean diperiksa oleh orang kedua | Pandangan bersama atas pengalaman lintas layanan, dengan pengguna terlibat dalam penafsiran |
| Tindakan dan tindak lanjut | Skor dilaporkan, tak ada yang berubah | Perbaikan sesekali dari komentar | Tindak lanjut detraktor dengan waktu target; tema dilacak | Tema menggerakkan pekerjaan perbaikan yang didanai dan dikaitkan dengan data operasional | Lingkaran tertutup mencakup tim dan pemasok; pengguna melihat apa yang berubah |

## Daftar periksa

- [ ] Setiap survei punya satu tujuan yang dinyatakan dan satu keputusan yang diinformasikannya.
- [ ] Pertanyaan singkat, netral, dan mencakup satu komentar terbuka.
- [ ] Survei dikirim otomatis ke setiap interaksi yang memenuhi syarat atau ke sampel acak terdokumentasi.
- [ ] Tingkat respons dan campuran responden ditampilkan di samping setiap skor.
- [ ] Ketidakpastian ditampilkan, dan sampel kecil dilaporkan sebagai hitungan.
- [ ] Tak ada agen individu yang diperingkat menurut kepuasan.
- [ ] Orang bernama menindaklanjuti penilaian rendah dalam waktu yang disepakati.
- [ ] Komentar dikodekan menjadi daftar tema yang stabil dan ditinjau bulanan.
- [ ] Perubahan kata-kata dan pengambilan sampel dicatat dan ditandai pada bagan.
- [ ] Responden diberi tahu bagaimana jawaban mereka dipakai, dan data pribadi dilindungi.

## Prompt AI

**Tinjau instrumen survei.**

```text
Saya menjalankan [service or team] untuk [type of organization]. Kami mensurvei
[audience] setelah [event] memakai kata-kata ini: [paste questions and scale].
Tinjau untuk bahasa menggiring, pertanyaan berlaras ganda, skala tidak jelas, dan
beban pada responden. Sarankan versi lebih singkat yang mempertahankan satu
penilaian dan satu komentar terbuka. Jangan mengarang nilai acuan atau mengklaim
hasil riset yang tidak dapat Anda kutip. Daftar asumsi Anda dan apa yang tidak
dapat Anda nilai dari teks.
```

**Kodekan komentar survei menjadi tema.**

```text
Berikut [number] komentar survei teranonimkan untuk [service], dari [period]:
[paste comments with personal data removed]. Usulkan daftar pendek tema (tidak
lebih dari delapan) dan tetapkan tiap komentar ke satu tema, dengan catatan
keyakinan di mana ambigu. Laporkan hitungan per tema dan tiga kutipan
representatif per tema. Jangan mengidentifikasi individu. Katakan apa yang harus
diperiksa orang sebelum mengandalkan pengodean ini, dan daftar asumsi Anda.
```

**Periksa keterwakilan.**

```text
Kami menerima [responses] respons dari [invited] undangan. Responden menurut
[dimension, for example region or shift]: [counts]. Populasi pengguna kami
menurut dimensi yang sama: [counts]. Bandingkan keduanya, gambarkan di mana
campuran responden berbeda, dan katakan kehati-hatian apa yang harus kami lampirkan
pada skor kepuasan kami. Sarankan dua cara praktis menjangkau kelompok yang kurang
terwakili. Jangan menyimpulkan sebab di luar data, dan daftar asumsi Anda.
```

**Rencanakan tindak lanjut lingkaran tertutup.**

```text
Susun proses singkat untuk menindaklanjuti pengguna yang memberi penilaian
[threshold] atau lebih rendah di [service]. Sertakan siapa yang menghubungi
mereka, dalam waktu berapa, apa yang dikatakan, apa yang dicatat, dan bagaimana
menghindari meminta penilaian yang diubah. Konteks: [team size, tools, hours].
Daftar asumsi Anda dan langkah apa pun yang bergantung pada perkakas yang belum
saya uraikan.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik kepuasan sebelum Anda menerbitkannya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik survei yang direvisi menjaga vektor manipulasi dan pagar pembatasnya.

## Poin penting

- Skor kepuasan menggambarkan bagaimana momen layanan terasa, jadi ikat survei pada peristiwa tertentu dan jaga singkat.
- Selalu laporkan tingkat respons, campuran responden, dan ketidakpastian bersama skor.
- Komentar menjelaskan angka, jadi baca tiap bulan dan kodekan menjadi tema.
- Kirim survei secara otomatis dan jangan pernah meminta pengguna mengubah penilaian.
- Pakai kepuasan di tingkat tim dan layanan, tidak pernah untuk memeringkat orang, dan perlakukan acuan eksternal dengan hati-hati.
- Tutup lingkaran: orang yang melaporkan pengalaman buruk sebaiknya mendapat kabar balik dan melihat perubahan.

## Referensi dan bacaan lanjutan

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
