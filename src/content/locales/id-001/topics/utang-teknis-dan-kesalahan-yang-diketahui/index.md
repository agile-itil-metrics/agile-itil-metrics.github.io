# Utang teknis dan kesalahan yang diketahui

**Perlakukan kesalahan yang diketahui dan utang teknis sebagai satu buku besar terlihat atas perbaikan yang ditunda, ukur berapa biaya setiap item tiap bulan ia tetap terbuka, dan belanjakan porsi kapasitas yang dilindungi pada item dengan bunga tertinggi.**

## Gambaran umum dan motivasi

Setiap tim menunda sebagian perbaikan. Cacat dipahami tetapi tidak diperbaiki, jalan pintas diambil untuk memenuhi tanggal, komponen dibiarkan menua, dan solusi sementara ditulis ke dalam runbook. Setiap penundaan adalah keputusan masuk akal ketika dibuat. Masalah dimulai ketika penundaan menumpuk di luar pandangan, karena biaya memikulnya muncul kemudian sebagai insiden, pengiriman lambat, dan orang yang lelah, tanpa baris pada laporan mana pun yang menghubungkan biaya dengan sebabnya.

Dua kosakata menggambarkan pola yang sama. Dalam [ITIL](https://en.wikipedia.org/wiki/ITIL), **kesalahan yang diketahui** adalah masalah yang akar masalahnya dipahami dan untuknya ada solusi sementara, atau perbaikan permanen yang belum diterapkan. Kesalahan yang diketahui dicatat agar staf service desk dan operasi dapat menyelesaikan insiden berulang dengan cepat, dan catatan tetap terbuka sampai perbaikan dirilis. Dalam kerja perangkat lunak agile, **[utang teknis](https://en.wikipedia.org/wiki/Technical_debt)** adalah metafora, yang dicetuskan [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) pada 1992, untuk pilihan desain dan implementasi yang membuat perubahan di masa depan lebih sulit. Metafora itu membawa dua gagasan yang penting untuk pengukuran: **pokok**, yaitu upaya yang dibutuhkan untuk menyingkirkan utang, dan **bunga**, yaitu upaya atau risiko tambahan yang Anda bayar tiap periode selama utang bertahan.

Kedua pandangan berbeda dalam tempat melihat. Kesalahan yang diketahui ditemukan lewat operasi: insiden atau penyelidikan masalah menemukan sebab. Utang teknis biasanya ditemukan lewat pengiriman: pengembang memperhatikan bahwa perubahan lebih sulit dari seharusnya. Kesalahan yang diketahui sering utang teknis yang sudah mulai menyakiti pelanggan. Utang teknis sering kesalahan yang diketahui yang menunggu terjadi. Menyimpan daftar terpisah, satu di alat ITSM dan satu di backlog atau wiki, menyembunyikan hubungan itu dan menghasilkan dua argumen bersaing untuk kapasitas langka yang sama.

Topik ini memberi Anda himpunan kecil ukuran untuk buku besar gabungan. Ia menghindari satu angka dolar untuk utang seluruh organisasi, yang tidak dihasilkan metode mana pun secara andal, dan mengukur apa yang dapat Anda amati: item terbuka, waktu menunggu, insiden yang disebabkan, pekerjaan yang ditambahkan, dan kapasitas yang dihabiskan untuk perbaikan. Buku besar lalu menyuapi percakapan prioritisasi antara produk dan operasi (lihat topik 4.1, Metrik manajemen masalah, untuk catatan masalah dan perbaikan permanen, dan topik 2.9, Pekerjaan operasional dan pekerjaan tak terencana, untuk beban interupsi yang diciptakan utang).

Istilah yang dipakai dalam topik ini:

- **Solusi sementara** adalah cara memulihkan layanan atau menghindari kegagalan tanpa menyingkirkan sebabnya.
- **Perbaikan permanen** menyingkirkan sebab. [Analisis akar masalah](https://en.wikipedia.org/wiki/Root_cause_analysis) adalah pekerjaan yang menemukannya.
- **[Refactoring kode](https://en.wikipedia.org/wiki/Code_refactoring)** menyusun ulang kode tanpa mengubah perilaku eksternalnya. Itu cara yang lazim untuk melunasi utang desain.
- **[Code smell](https://en.wikipedia.org/wiki/Code_smell)** adalah tanda permukaan dalam kode yang sering menunjukkan masalah lebih dalam. Ia pemicu untuk melihat, bukan vonis.
- **[Biaya peluang](https://en.wikipedia.org/wiki/Opportunity_cost)** adalah nilai alternatif terbaik yang Anda lepaskan dengan memilih satu pemakaian waktu atas yang lain. Setiap perbaikan bersaing dengan fitur, dan perbandingan itu adalah keputusan sesungguhnya.
- **[Biaya penundaan](https://en.wikipedia.org/wiki/Cost_of_delay)** adalah kerugian ekonomi dari menunda sepotong pekerjaan. Itu gagasan di balik menghargai bunga pada item utang.
- **[Bug perangkat lunak](https://en.wikipedia.org/wiki/Software_bug)** adalah cacat dalam perangkat lunak. Kesalahan yang diketahui dapat berupa bug, kelemahan konfigurasi, batas desain, atau cacat pemasok.
- **[Analisis program statis](https://en.wikipedia.org/wiki/Static_program_analysis)** memeriksa kode tanpa menjalankannya. Peringatan dan skor kompleksitasnya adalah indikator kemungkinan utang, dan bukti yang lebih lemah daripada riwayat insiden.

Tidak semua utang adalah kesalahan. Kuadran Martin Fowler memisahkan utang sengaja dari tak sengaja dan ceroboh dari bijaksana (lihat daftar referensi). Jalan pintas bijaksana dengan rencana pelunasan adalah pinjaman yang sehat, dan utang ceroboh adalah jenis yang dicegah. Metrik di sini tidak menilai asal-usul. Mereka menunjukkan saldonya.

## Prinsip utama

- **Satu buku besar, dua pintu.** Kesalahan yang diketahui dari operasi dan item utang dari pengiriman masuk ke daftar terlihat yang sama, dengan tautan antara catatan yang menggambarkan sebab yang sama.
- **Ukur bunga, dan pokoknya juga.** Ukuran perbaikan kurang penting daripada apa yang dibiayakan item terbuka tiap bulan dalam insiden, solusi sementara, dan perubahan yang diperlambat. Peringkatkan menurut bunga per satuan upaya perbaikan.
- **Jadikan penundaan keputusan dengan pemilik.** Setiap item punya pemilik, alasan menunggu yang dinyatakan, dan tanggal tinjauan. Item yang tak dipilih siapa pun untuk ditunda adalah pengabaian, dan dihitung demikian.
- **Lindungi kapasitas sebelum Anda membutuhkannya.** Porsi kapasitas yang dinyatakan setiap tim untuk pekerjaan perbaikan, disepakati di muka, mengalahkan pembersihan heroik setelah kuartal buruk.
- **Jaga solusi sementara tetap jujur.** Solusi sementara adalah layanan, dengan biaya, pemilik, dan mode kegagalannya sendiri. Ukur seberapa sering dipakai dan seberapa sering gagal.
- **Gambarkan sistem, tidak pernah orang.** Utang milik layanan atau komponen. Jangan pernah mengatribusikannya pada penulis, dan jangan pernah memeringkat insinyur menurut utang yang mereka sentuh.
- **Perkirakan secara kasar.** Ukuran “jam”, “hari”, dan “pekan” sudah cukup. Presisi di luar itu dikarang.

## Definisi metrik

Metrik di bawah menggambarkan buku besar perbaikan yang ditunda. Jam dan batas dinyatakan dalam tiap rumus. Ukuran waktu dilaporkan sebagai distribusi (median dan persentil ke-85 atau ke-95), bukan sebagai satu rata-rata.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Usia backlog kesalahan yang diketahui | Berapa lama kesalahan yang diketahui terbuka telah menunggu perbaikan permanen | Jam dimulai saat catatan masalah ditandai “kesalahan yang diketahui”; berhenti saat perbaikan permanen dirilis ke produksi; item yang ditutup sebagai “risiko diterima” dilaporkan terpisah dan dikecualikan. Laporkan hitungan, median usia, dan persentil ke-85 usia, menurut layanan | hari (distribusi) | Catatan masalah dan kesalahan yang diketahui alat ITSM, catatan rilis | Manajemen masalah | Bagan item kerja yang menua; usia backlog bug | Bulanan |
| Cakupan solusi sementara | Porsi kesalahan yang diketahui terbuka yang punya solusi sementara terdokumentasi dan teruji yang dapat diikuti agen | kesalahan yang diketahui terbuka dengan solusi sementara yang ditinjau dalam 6 bulan terakhir / kesalahan yang diketahui terbuka; item tertutup dan risiko diterima dikecualikan | persen | Basis pengetahuan yang tertaut ke catatan kesalahan yang diketahui | Manajemen masalah; manajemen pengetahuan | Runbook atau definisi selesai untuk operabilitas | Bulanan |
| Insiden tertaut pada kesalahan yang diketahui terbuka | Insiden yang sebabnya adalah kesalahan yang diketahui terbuka, ukuran langsung bunga yang dibayar dalam gangguan layanan | insiden pada periode itu yang tertaut pada kesalahan yang diketahui yang terbuka saat insiden dimulai / semua insiden pada periode itu; insiden tanpa tautan sebab dilaporkan sebagai tak tertaut, tidak dihitung | persen, ditambah hitungan | Tautan insiden-ke-masalah alat ITSM | Manajemen insiden; manajemen masalah | Cacat yang lolos; arus masuk bug produksi | Bulanan |
| Stok utang | Jumlah dan perkiraan ukuran item utang teknis terdaftar yang tetap terbuka | item terbuka dalam register utang pada akhir periode; ukuran adalah jumlah pita upaya kasar (jam, hari, pekan) yang ditetapkan saat pendaftaran; utang yang tak terdaftar atau diduga dikecualikan | hitungan, dan pita upaya | Register utang di pelacak, bertag menurut layanan | Perbaikan berkelanjutan; desain layanan | Item backlog produk berlabel utang | Bulanan |
| Bunga utang | Pekerjaan tambahan yang disebabkan utang dan kesalahan yang diketahui terbuka, dalam waktu tim | jam yang dicatat pada periode itu terhadap item kerja bertag dengan referensi utang atau kesalahan yang diketahui (solusi sementara, langkah manual, pengerjaan ulang, dan upaya tambahan pada perubahan terdampak) / total jam kerja tim pada periode itu; pekerjaan perbaikan itu sendiri dikecualikan dan dihitung di bawah porsi kapasitas | persen waktu kerja | Tag waktu atau upaya pada item kerja, disimpan di tingkat tim | Perbaikan berkelanjutan; manajemen masalah | Porsi pekerjaan tak terencana dan pengerjaan ulang | Bulanan |
| Porsi kapasitas utang | Porsi kapasitas pengiriman yang dihabiskan untuk melunasi utang dan kesalahan yang diketahui | kapasitas (jumlah item atau upaya) item kerja selesai bertag perbaikan utang atau perbaikan kesalahan yang diketahui / semua item kerja selesai pada periode itu; item tanpa tag dikecualikan | persen | Pelacak, item selesai menurut tag | Perbaikan berkelanjutan; pemberdayaan perubahan | Alokasi kapasitas | Per periode perencanaan, ditinjau bulanan |
| Perubahan bersih utang | Apakah buku besar tumbuh atau menyusut | item utang dan kesalahan yang diketahui terdaftar pada periode itu dikurangi item yang diselesaikan pada periode itu; diselesaikan berarti perbaikan dirilis, bukan digabung; item yang ditutup sebagai “tidak akan diperbaiki” dihitung pada baris terpisah | hitungan (bertanda) | Register utang dan catatan kesalahan yang diketahui | Perbaikan berkelanjutan | Perubahan backlog menurut kategori | Bulanan |

Risiko diterima adalah cara sah menutup kesalahan yang diketahui, karena beberapa masalah tak layak diperbaiki. Ia didaftar terpisah agar menutup item tidak diam-diam memperbaiki angka usia. Jendela tinjauan 6 bulan dalam cakupan solusi sementara adalah contoh. Tim menetapkan jendela agar sesuai dengan seberapa cepat sistemnya berubah dan menuliskannya di register metrik.

## Rekomendasi

### Bangun buku besar

**1. Gabungkan daftar kesalahan yang diketahui dan daftar utang menjadi satu buku besar.** Simpan satu register dengan kolom untuk asal (operasi atau pengiriman), layanan, pemilik, pita ukuran, dan tautan ke catatan terkait. Alat ITSM dapat menyimpannya, atau pelacak dapat, asalkan tiap sistem menaut ke yang lain. Tanpa satu tampilan, kesalahan yang diketahui di operasi bersaing dengan item utang tak terlihat di pengiriman untuk insinyur yang sama.

**2. Daftarkan utang pada saat dibuat atau ditemukan.** Jalan pintas yang diambil dengan sengaja masuk ke register dalam pull request atau catatan perubahan yang sama, dengan alasan yang dinyatakan dan tanggal tinjauan. Utang yang ditemukan kemudian didaftarkan oleh siapa pun yang menemukannya. Aturan penangkapan satu baris yang murah bekerja lebih baik daripada audit berkala, karena orang lupa apa yang mereka ketahui kuartal lalu.

### Ukur bunganya

**3. Tautkan insiden ke kesalahan yang diketahui setiap kali.** Tautan antara insiden dan kesalahan yang diketahui adalah data terkuat yang Anda miliki tentang bunga, dan biayanya beberapa detik saat penyelesaian. Jadikan tautan kolom wajib ketika sebab diketahui, dan laporkan porsi tak tertaut agar celah tidak tampak sebagai kabar baik (lihat topik 3.3, Waktu respons dan penyelesaian insiden). Ketika sebab yang sama muncul di beberapa insiden, catatan masalah membawa bukti untuk perbaikan.

**4. Beri tag pada pekerjaan yang diciptakan utang.** Biarkan insinyur menandai item kerja ketika solusi sementara, langkah manual, atau pengerjaan ulang tambahan dibutuhkan karena kelemahan yang diketahui, dan tautkan ke item buku besar. Tag berbiaya kecil dan memberi angka bunga utang di tingkat tim. Perlakukan hasilnya sebagai estimasi dengan galat lebar, berguna untuk memeringkat item dan mengawasi tren, bukan untuk pembukuan.

**5. Hargai setiap item dalam dua angka: upaya perbaikan dan bunga bulanan.** Pakai pita kasar, seperti jam, hari, pekan, untuk upaya, dan biaya bulanan kasar yang ditarik dari insiden tertaut, pekerjaan bertag, dan biaya henti apa pun yang sudah diperkirakan organisasi Anda. Membagi bunga dengan upaya memberi waktu balik modal sederhana. Jangan mengarang presisi: pita dan asumsi yang dinyatakan sudah cukup untuk memisahkan kemenangan jelas dari item yang dapat menunggu.

### Lindungi kapasitas dan putuskan

**6. Cadangkan porsi kapasitas tetap, dan laporkan.** Sepakati dengan pemilik produk porsi tiap siklus untuk pekerjaan perbaikan, ditetapkan menurut tren buku besar dan ditinjau tiap kuartal. Laporkan porsi kapasitas utang di samping angka pekerjaan terencana, agar pemimpin melihat pekerjaan perbaikan sebagai investasi yang disengaja. Porsi yang dicadangkan juga melindungi tim dari argumen pertukaran pada setiap percakapan perencanaan, yang biasanya dimenangkan backlog fitur.

**7. Peringkatkan perbaikan terhadap fitur dengan satu mata uang bersama.** Taruh kesalahan yang diketahui dan item utang dalam percakapan prioritisasi yang sama dengan fitur, dinyatakan sebagai biaya penundaan dan waktu balik modal. Perbaikan yang menyingkirkan insiden mingguan, dan mengembalikan upayanya dalam satu kuartal, bersaing atas kelebihannya sendiri. Memeringkat menurut kerasnya suara, senioritas, atau tanggal pendaftaran memberi hasil buruk (lihat topik 4.4, Kegagalan perubahan dan pengerjaan ulang).

**8. Tutup lingkaran pada keputusan penundaan.** Untuk setiap item yang dengan sadar dibiarkan terbuka, catat siapa yang menerima risiko, tanggal tinjauan, dan pemicu yang akan menaikkannya, seperti insiden kedua atau perubahan terencana di area itu. Tinjau daftar yang diterima pada periodenya sendiri. Item yang ditunda tiga kali tanpa pemicu adalah keputusan untuk mengabaikannya, dan buku besar sebaiknya mengatakannya.

### Jaga angka tetap jujur

**9. Rilis perbaikan sebelum menutup catatan.** Kesalahan yang diketahui tetap terbuka sampai perbaikan permanen ada di produksi dan kekambuhan telah diperiksa selama jendela yang dinyatakan. Menutup pada “digabung” atau “tiket selesai” menyanjung angka usia dan perubahan bersih dan membuka kembali insiden kemudian (lihat topik 4.5, Metrik rilis dan deployment). Lacak tingkat pembukaan ulang kesalahan yang diketahui sebagai pemeriksaan mutu aturan penutupan.

**10. Lihat bentuk buku besar, di luar totalnya.** Hitungan yang datar dapat menyembunyikan ekor panjang item sangat tua, porsi item yang tumbuh di satu layanan, atau buku besar yang dijaga kecil dengan menutup semuanya sebagai “tidak akan diperbaiki.” Tampilkan distribusi usia, pembagian menurut layanan, dan daftar risiko diterima dalam satu halaman. Tinjau bersama orang yang memiliki layanan, dalam rapat yang sama yang merencanakan pekerjaan kuartal berikutnya.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Usia backlog kesalahan yang diketahui | Menutup catatan lama sebagai “risiko diterima” atau “tidak akan diperbaiki”; memecah satu catatan lama menjadi yang baru dan muda; mengatur ulang jam dengan mendaftar ulang | Hitungan dan usia risiko diterima dilaporkan pada halaman yang sama; tinjauan penutupan oleh seseorang di luar tim pemilik; garis keturunan catatan dijaga |
| Cakupan solusi sementara | Menulis solusi sementara samar untuk memenuhi kolom; menghitung solusi sementara yang belum pernah dicoba agen mana pun | Tingkat pemakaian dan kegagalan solusi sementara dalam insiden tertaut; uji berkala sampel solusi sementara |
| Insiden tertaut pada kesalahan yang diketahui terbuka | Membiarkan insiden tak tertaut, atau menautkannya ke sebab lain, agar porsi turun | Porsi insiden tak tertaut dilaporkan di sampingnya; tinjauan sampel insiden tertutup untuk tautan yang terlewat |
| Stok utang | Tidak mendaftarkan utang, agar stok tampak kecil; menggabung banyak item menjadi satu item besar; mendaftar hal remeh agar tampak tekun | Tinjauan register terhadap sampel tinjauan kode dan postmortem insiden; pemeriksaan ukuran dan kekhususan item |
| Bunga utang | Kurang memberi tag pada pekerjaan untuk menghindari pengawasan, atau terlalu banyak memberi tag untuk memenangkan anggaran perbaikan; membaca angka sebagai peringkat tim | Audit sampel item bertag dan tak bertag; tampilan tingkat tim saja, tanpa perbandingan antartim; bunga dibaca bersama tautan insiden |
| Porsi kapasitas utang | Memberi tag pekerjaan fitur biasa sebagai perbaikan; memilih item kosmetik mudah untuk mengisi porsi | Pemeriksaan hasil: usia item berbunga tinggi tertua dan tautan insiden menurun; tinjauan apa yang diperbaiki terhadap peringkat |
| Perubahan bersih utang | Menyelesaikan banyak item kecil untuk mengimbangi beberapa yang besar; menutup item sebagai “tidak akan diperbaiki” agar hitungan turun | Perubahan bersih ditampilkan menurut pita ukuran dan bunga; baris “tidak akan diperbaiki” dilaporkan; pemeriksaan kekambuhan pada item terselesaikan |

Pembacaan yang sehat menunjukkan buku besar yang terlihat, spesifik, dan bergerak ke arah yang dipilih tim. Item berbunga tinggi tertua berkurang jumlahnya. Insiden tertaut pada kesalahan yang diketahui terbuka cenderung turun, dan porsi tak tertaut kecil. Porsi kapasitas utang stabil pada tingkat yang disepakati alih-alih melonjak setelah krisis dan lenyap sesudahnya. Daftar risiko diterima pendek dan ditinjau. Ketika satu angka tampak sangat baik dan yang lain tidak bergerak, curigai definisinya sebelum merayakan.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Satu buku besar gabungan kesalahan yang diketahui dan utang | Satu prioritisasi; operasi dan pengiriman melihat biaya yang sama | Butuh perkakas bersama atau tautan; kepemilikan lintas dua fungsi harus diselesaikan |
| Porsi kapasitas tetap untuk perbaikan | Terprediksi; melindungi pekerjaan perbaikan dari tekanan fitur | Dapat dihabiskan untuk item bernilai rendah jika peringkat lemah |
| Pekerjaan perbaikan dijadwalkan hanya ketika menang dalam debat prioritas | Fleksibel; menanggapi prioritas saat ini | Fitur hampir selalu menang; buku besar tumbuh sampai krisis |
| Bunga diperkirakan dari insiden dan pekerjaan bertag | Mengaitkan utang dengan biaya yang dapat diamati; mendukung peringkat | Angka kasar; bergantung pada pemberian tag dan tautan insiden yang jujur |
| Dorongan perbaikan khusus atau “pekan utang” | Fokus dan kemajuan terlihat | Episodik; buku besar terisi lagi di antara acara; menginterupsi komitmen terencana |

Pilih pengaturan teringan yang menjaga item berbunga tinggi tertua tetap bergerak. Tim kecil dapat menjalankan buku besar pada satu papan dengan label dan tinjauan bulanan. Organisasi lebih besar butuh tautan antaralat dan metode peringkat yang disepakati. Tujuannya keputusan yang disengaja untuk tiap item, bukan daftar kosong.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Tiga item terbuka mana yang paling mahal bagi kita tiap bulan, dan bagaimana kita tahu?**
Minta orang menyebut kandidat dari ingatan, lalu periksa terhadap tautan insiden dan pekerjaan bertag. Bandingkan daftar yang diingat dengan yang terukur, dan catat celahnya. Sepakati bagaimana bukti peringkat akan dikumpulkan mulai sekarang.

**2. Ketika kita menunda perbaikan, siapa yang memutuskan, dan kapan kita melihat lagi?**
Telusuri lima penundaan terakhir dan tanyakan siapa yang menerima risiko dan tanggal tinjauan apa yang ditetapkan. Di mana tak seorang pun memutuskan, item itu diabaikan, bukan ditunda. Sepakati aturan bahwa setiap penundaan membawa pemilik, alasan, dan pemicu. Bahas bagaimana daftar risiko diterima akan ditinjau dan oleh siapa.

**3. Berapa banyak kapasitas yang sebaiknya kita cadangkan untuk perbaikan, dan apa yang akan mengubah porsinya?**
Tunjukkan tren buku besar dan porsi kapasitas utang saat ini. Tanyakan apa yang rela dilepas tim untuk menaikkannya, dan bukti apa yang memungkinkannya turun. Catat angkanya, alasannya, dan tanggal untuk ditinjau kembali.

**4. Apakah solusi sementara kita nyata, dan apakah agen baru dapat mengikutinya?**
Pilih satu solusi sementara secara acak dan minta seseorang yang tidak menulisnya mengikutinya. Sepakati rutinitas uji untuk solusi sementara yang mencakup kesalahan berdampak tertinggi.

**5. Apa yang dihitung sebagai diperbaiki, dan berapa lama kita mengawasi sebelum menutup catatan?**
Bandingkan aturan penutupan yang dipakai operasi, pengiriman, dan pemilik produk. Bahas jendela kekambuhan yang cocok untuk layanan, dan apa yang akan dilakukan tim ketika item tertutup dibuka kembali. Sepakati satu definisi dan tuliskan di register metrik.

**6. Di mana angka utang kita mungkin menceritakan kisah yang nyaman?**
Tanyakan cara tiap angka dapat disanjung: utang tak terdaftar, item mudah diperbaiki lebih dulu, item ditutup sebagai tidak akan diperbaiki. Lihat porsi insiden tak tertaut dan daftar risiko diterima. Pilih satu pagar pembatas untuk ditambahkan kuartal ini dan namai siapa yang akan memeriksanya.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman melihat utang lebih dulu, biasanya saat mengubah kode. Mereka diuntungkan oleh register yang mudah ditambahi dan oleh porsi kapasitas yang dilindungi, agar pekerjaan perbaikan tidak bergantung pada memenangkan argumen di setiap percakapan perencanaan. Mereka sebaiknya mendaftarkan jalan pintas saat mengambilnya, memberi tag pekerjaan yang disebabkan titik lemah, dan menghindari memakai utang sebagai label untuk pekerjaan apa pun yang lebih mereka sukai tidak dikerjakan (lihat topik 2.2, Lead time, cycle time, dan efisiensi alur, untuk efek utang pada lead time).

### Tim layanan dan operasi

Tim operasi melihat bunganya: insiden berulang, langkah manual, solusi sementara yang rapuh, dan beban siaga yang menyusul. Mereka memiliki catatan kesalahan yang diketahui dan dokumen solusi sementara, dan memegang data insiden yang menghargai bunga. Mereka sebaiknya menautkan setiap insiden ke kesalahan yang diketahui, menguji solusi sementara, dan membawa bukti berperingkat ke percakapan perencanaan alih-alih daftar keluhan (lihat topik 5.7, Metrik pekerjaan berulang dan siaga).

### Kepemimpinan dan tata kelola

Pemimpin memutuskan berapa banyak kapasitas yang diterima pekerjaan perbaikan, dan insentif yang mereka tetapkan menentukan apakah buku besar tetap jujur. Mereka sebaiknya meminta distribusi usia, angka bunga, dan daftar risiko diterima, bukan satu skor utang. Membaca buku besar sebagai peringkat tim menghukum pendaftaran dan mendorong utang ke bawah tanah. Forum tata kelola sebaiknya memperlakukan penerimaan risiko sebagai keputusan dengan pemilik dan tanggal tinjauan.

### Pelanggan dan pengguna

Pelanggan merasakan utang sebagai kegagalan berulang dan solusi sementara yang harus mereka ikuti. Di mana solusi sementara memengaruhi pengguna, terbitkan dengan catatan polos kapan perbaikan diharapkan, dan tepati tanggalnya atau jelaskan perubahannya. Lebih sedikit insiden berulang dan status jujur tentang masalah yang diketahui membangun lebih banyak kepercayaan daripada janji tanpa cacat (lihat topik 6.1, Metrik kepuasan pelanggan).

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah rumah sakit regional menjalankan layanan penjadwalan pasien, didukung satu tim produk dan kelompok operasi. Semua angka dalam contoh ini bersifat ilustratif.

Kelompok operasi menyimpan 23 kesalahan yang diketahui di alat ITSM. Tim produk menyimpan daftar terpisah 41 item utang di papannya. Tinjauan kuartalan mendapati bahwa 9 kesalahan yang diketahui dan 7 item utang menggambarkan lima sebab yang sama. Kesalahan yang diketahui tertua berusia 14 bulan, median usia kesalahan yang diketahui adalah 5 bulan, dan persentil ke-85 adalah 11 bulan. Cakupan solusi sementara adalah 61 persen. Insiden tertaut pada kesalahan yang diketahui terbuka adalah 18 persen dari insiden kuartal itu, dan 22 persen insiden tak tertaut, sehingga porsi sebenarnya bisa lebih tinggi.

Tim menggabungkan kedua daftar menjadi satu buku besar 55 item berbeda. Untuk sepuluh item dengan insiden tertaut terbanyak, mereka memperkirakan upaya perbaikan dalam pita dan bunga bulanan dalam jam. Satu item menonjol: pekerjaan sinkronisasi janji temu malam yang gagal diam-diam sekitar sekali tiap dua pekan dan butuh mulai ulang manual oleh staf siaga. Perbaikannya diperkirakan dua pekan. Bunganya, dari insiden tertaut dan pekerjaan bertag, sekitar 10 jam sebulan, dan setiap kegagalan menunda daftar klinik pagi. Waktu balik modal sekitar empat bulan, lebih cepat daripada fitur mana pun yang ada dalam rencana saat itu.

Keputusan, dicatat dalam log keputusan, adalah mencadangkan 15 persen kapasitas tim produk untuk pekerjaan perbaikan, diperingkat menurut bunga per satuan upaya, dan memperbaiki pekerjaan sinkronisasi lebih dulu. Kepala operasi juga setuju menautkan setiap insiden ke kesalahan yang diketahui di mana ada dan menguji lima solusi sementara yang paling banyak dipakai.

Dua kuartal kemudian median usia kesalahan yang diketahui adalah 4 bulan dan persentil ke-85 adalah 9 bulan. Insiden tertaut pada kesalahan yang diketahui terbuka turun menjadi 11 persen. Porsi tak tertaut turun menjadi 8 persen, yang memberi tim lebih banyak keyakinan pada angka itu. Lalu tim menangkap risiko manipulasi. Baris perubahan bersih utang menunjukkan 12 item diselesaikan dalam satu kuartal, tetapi 6 di antaranya ditutup sebagai tidak akan diperbaiki, dan dua di antaranya adalah item berbunga tinggi tertua. Peninjau di luar tim membaca catatan dan mendapati penutupan dilakukan untuk memperbaiki angka usia. Item dibuka kembali, alasan penutupan menjadi kolom wajib dengan penyetuju bernama, dan item risiko diterima kini muncul di halaman yang sama dengan distribusi usia.

## Sudut pandang sektor

**Startup.** Utang biasanya disengaja dan sering benar, karena kecepatan menuju pelanggan pertama paling penting. Simpan satu daftar di papan dengan label, daftarkan jalan pintas saat mengambilnya, dan tetapkan tanggal tinjauan agar “nanti” punya makna. Naikkan porsi perbaikan ketika bunga mulai terlihat dalam insiden.

**Bisnis kecil.** Satu administrator atau tim kecil sering memikul operasi dan pengiriman sekaligus, jadi kedua daftar secara alami satu. Catat kesalahan yang diketahui dan solusi sementaranya dalam dokumen bersama, dan catat pemasok atau kontrak mana yang menjadi tumpuan tiap item. Cacat milik pemasok adalah kesalahan yang diketahui yang tak dapat Anda perbaiki sendiri, jadi lacak tanggal yang dijanjikan pemasok dan solusi sementara Anda.

**Perusahaan besar.** Banyak tim, banyak layanan, dan banyak pemasok menciptakan beberapa daftar bersaing dan beberapa definisi “selesai.” Tetapkan satu struktur buku besar, satu aturan penutupan, dan satu metode peringkat, dan biarkan tim menambah kolom lokal dengan pemetaan yang dinyatakan.

**Pemerintah dan sektor publik.** Sistem warisan, siklus pengadaan panjang, dan anggaran tetap membuat sebagian utang mahal dilunasi dan sebagian keputusan penggantian lambat. Catat kendala hukum, retensi, dan audit yang menghalangi perbaikan, karena menjelaskan penundaan. Tampilkan buku besar sebagai bagian pelaporan risiko, dan rencanakan perbaikan dalam siklus anggaran alih-alih memperlakukannya sebagai biaya tak terencana (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah berhenti membayar bunga yang tak dapat Anda lihat. Insiden berulang, solusi sementara manual, dan perubahan lambat dan berisiko adalah biaya yang terlihat, dan biasanya dicatat sebagai masalah terpisah dalam anggaran terpisah. Buku besar gabungan mengubahnya menjadi satu perbandingan antara biaya perbaikan dan biaya memikul utang.

Biaya praktik ini terdiri dari tiga bagian. Yang pertama penyiapan: register, tautan antara alat ITSM dan pelacak, dan konvensi pemberian tag. Yang kedua upaya menjalankan: beberapa detik per insiden untuk menautkan, beberapa detik per item kerja untuk memberi tag, dan tinjauan bulanan satu atau dua jam per layanan. Yang ketiga kapasitas perbaikan itu sendiri, yang merupakan item terbesar dan merupakan investasi yang disengaja, bukan overhead.

Imbal hasil datang dari pola yang dapat Anda ukur sendiri. Bandingkan insiden tertaut pada kesalahan yang diketahui sebelum dan sesudah perbaikannya, jam pekerjaan bertag pada perubahan terdampak sebelum dan sesudah, dan interupsi siaga yang dihindari. Tambahkan biaya henti jika organisasi Anda sudah memperkirakannya. Jangan meminjam angka industri untuk biaya utang: literatur riset tentang topik ini nyata, tetapi angkanya bergantung pada konteks, dan data insiden dan waktu Anda sendiri adalah bukti yang lebih baik. Riset *Accelerate* mengaitkan kinerja pengiriman dengan kinerja organisasi (lihat topik 2.8, Metrik DORA), meskipun tidak memberi harga untuk buku besar Anda. Untuk pembahasan biaya dan imbal hasil yang lebih luas, lihat topik 7.7, Pengembalian investasi dan kasus bisnis.

## Anti-pola dan jebakan

- **Dua daftar yang tak pernah bertemu.** Operasi dan pengiriman berargumen untuk kapasitas yang sama dengan bukti berbeda. Gabungkan daftar atau tautkan setiap sebab bersama.
- **Satu skor utang untuk organisasi.** Itu menyembunyikan di mana biaya berada dan mengundang peringkat tim. Laporkan buku besar menurut layanan, dengan usia, bunga, dan kepemilikan.
- **Penulisan ulang besar sebagai satu-satunya perbaikan.** Pembersihan besar macet, dan buku besar terisi lagi selama berjalan. Pensiunkan item dalam langkah kecil, diperingkat menurut waktu balik modal.
- **Utang nol sebagai tujuan.** Mengejarnya menghargai penutupan remeh dan mengecilkan hati pendaftaran jujur. Bidik buku besar yang item berbunga tinggi tertuanya bergerak.
- **Menutup kesalahan yang diketahui pada “digabung.”** Perbaikan belum mencapai pengguna, dan insiden kembali. Tutup pada rilis, lalu awasi kekambuhan selama jendela yang dinyatakan.
- **Menyembunyikan penundaan dalam “tidak akan diperbaiki.”** Angka usia membaik dan risiko tetap. Hitung risiko diterima terpisah, dengan pemilik dan tanggal tinjauan.
- **Memperlakukan analisis statis sebagai kebenaran.** Skor mencerminkan bentuk kode, bukan biaya. Pakai untuk menemukan kandidat, lalu konfirmasikan dengan tautan insiden dan riwayat perubahan.
- **Mengatribusikan utang pada penulis.** Itu mengajari orang menyembunyikan jalan pintas dan menghindari komponen sulit. Jaga setiap ukuran di tingkat layanan dan tim (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Buku besar dan definisi | Kesalahan yang diketahui dan utang hidup di kepala orang atau catatan tersebar | Operasi dan pengiriman masing-masing menyimpan daftar, dengan aturan berbeda | Satu buku besar dengan definisi tertulis, pemilik, dan aturan penutupan untuk setiap item | Usia, risiko diterima, dan perubahan bersih ditinjau terhadap definisi tertulis | Definisi direvisi bersama pemasok dan pelanggan ketika tidak lagi memberi masukan bagi keputusan |
| Mengukur bunga | Tak ada tautan antara insiden dan sebab | Beberapa insiden ditautkan ke kesalahan yang diketahui dengan tangan | Tautan insiden wajib di mana sebab diketahui; pekerjaan diberi tag di tingkat tim | Bunga dan waktu balik modal diperkirakan untuk item teratas dan diplot tren | Bunga dikaitkan dengan hasil layanan dan dibagikan antartim dan pemasok |
| Kapasitas dan prioritisasi | Perbaikan terjadi dalam krisis | Waktu informal disisihkan beberapa tim | Porsi kapasitas yang disepakati dan metode peringkat bersama | Porsi disesuaikan menurut tren buku besar dan didanai sebagai pekerjaan terencana | Kapasitas perbaikan dikoordinasikan lintas platform bersama dan pemasok |
| Solusi sementara dan penutupan | Solusi sementara tak terdokumentasi atau dipegang satu orang | Terdokumentasi untuk beberapa kesalahan, belum teruji | Solusi sementara di basis pengetahuan, dengan aturan penutupan pada rilis | Pemakaian, kegagalan, dan kekambuhan solusi sementara setelah penutupan diukur | Solusi sementara dipensiunkan otomatis saat perbaikan dirilis, dengan umpan balik dari pengguna |

## Daftar periksa

- [ ] Kesalahan yang diketahui dan item utang berada dalam satu buku besar, atau ditautkan item demi item.
- [ ] Setiap item punya pemilik, pita ukuran, layanan, dan tanggal tinjauan.
- [ ] Jalan pintas yang disengaja didaftarkan saat diambil, dengan alasan.
- [ ] Insiden ditautkan ke kesalahan yang diketahui di mana sebab diketahui, dan porsi tak tertaut dilaporkan.
- [ ] Pekerjaan yang disebabkan titik lemah diberi tag di tingkat tim, dan pemberian tag diaudit dengan sampel.
- [ ] Setiap item teratas punya pita upaya perbaikan dan estimasi bunga bulanan.
- [ ] Porsi kapasitas untuk pekerjaan perbaikan disepakati, dilaporkan, dan ditinjau tiap kuartal.
- [ ] Kesalahan yang diketahui ditutup pada rilis perbaikan, dengan jendela kekambuhan yang dinyatakan.
- [ ] Penutupan risiko diterima didaftar terpisah, dengan penyetuju dan tanggal tinjauan.
- [ ] Solusi sementara untuk kesalahan berdampak tertinggi diuji menurut jadwal.
- [ ] Distribusi usia dan pembagian menurut layanan ditampilkan, dengan totalnya.
- [ ] Tak ada ukuran utang yang dipakai untuk membandingkan atau memeringkat individu.

## Prompt AI

**Gabungkan dua daftar menjadi satu buku besar.**

```text
Saya punya dua daftar perbaikan yang ditunda. Daftar A berasal dari [operations
tool or source] dan berisi [number] kesalahan yang diketahui. Daftar B berasal
dari [delivery tracker or source] dan berisi [number] item utang teknis. Berikut
entrinya: [paste entries with title, service, date registered, and a one-line
description]. Kelompokkan entri yang tampaknya menggambarkan sebab yang sama,
usulkan satu entri buku besar untuk tiap kelompok, dan tandai entri yang butuh
manusia untuk mengonfirmasi kecocokannya. Jangan mengarang sebab, layanan, atau
tanggal. Daftar asumsi Anda dan pertanyaan yang harus saya jawab sebelum
menggabungkan.
```

**Perkirakan pita upaya dan bunga bulanan untuk item teratas.**

```text
Untuk item buku besar [item title] pada [service], saya punya bukti ini: insiden
tertaut [list with dates and durations], pekerjaan bertag [hours or item counts],
dan estimasi perbaikan dari tim sebesar [estimate]. Bantu saya menulis pita upaya
dan bunga bulanan yang kasar, waktu balik modal sederhana, dan tingkat keyakinan
untuk tiap angka. Tunjukkan aritmetika Anda. Jangan mengarang biaya, nilai
acuan, atau angka industri. Jika sebuah angka hilang, tanyakan kepada saya. Daftar
asumsi Anda.
```

**Tinjau risiko penutupan dan manipulasi.**

```text
Berikut definisi dan data kuartal terakhir untuk buku besar kesalahan yang
diketahui dan utang kami: [definitions of age, workaround coverage, debt net
change, and the closure rule] dan [summary of items closed, with closure
reasons]. Identifikasi cara ukuran ini dapat disanjung, bukti dalam data yang
menyarankan hal itu telah terjadi, dan pagar pembatas untuk masing-masing.
Perlakukan ini sebagai tinjauan atas instrumen, bukan tinjauan atas orang. Jangan
menuduh siapa pun, dan jangan mengarang data. Daftar asumsi Anda.
```

**Siapkan percakapan prioritisasi dengan pemilik produk.**

```text
Saya perlu mengusulkan cara membagi kapasitas antara fitur dan pekerjaan
perbaikan untuk [team] kuartal depan. Buku besar menunjukkan [summary of ledger:
counts, age distribution, top items with effort and interest bands]. Rencana fitur
berisi [summary of planned features and their expected value, as supplied by the
product owner]. Susun usulan satu halaman yang membandingkan opsi untuk porsi
perbaikan, menyatakan biaya penundaan item perbaikan utama, dan menamai
pertukarannya. Jangan mengarang estimasi nilai atau porsi acuan. Daftar asumsi
Anda dan keputusan yang harus dibuat pemilik produk.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik yang mendefinisikan metrik terkait, seperti kekambuhan atau kegagalan perubahan, dan pagar pembatas yang berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa metrik yang disunting menamai jam, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Kesalahan yang diketahui dan utang teknis adalah dua pandangan atas satu buku besar perbaikan yang ditunda, jadi simpan bersama atau tertaut.
- Ukur bunga yang dibiayakan tiap item setiap bulan, dalam insiden, solusi sementara, dan perubahan yang diperlambat, dan peringkatkan perbaikan menurut waktu balik modal.
- Jadikan setiap penundaan keputusan dengan pemilik, alasan, dan tanggal tinjauan, dan laporkan risiko diterima secara terpisah.
- Cadangkan porsi kapasitas yang disepakati untuk pekerjaan perbaikan, dan laporkan di samping pekerjaan terencana.
- Tutup kesalahan yang diketahui pada rilis perbaikan, lalu awasi kekambuhan sebelum memercayai hasilnya.
- Jaga setiap ukuran di tingkat layanan dan tim, dan pakai pagar pembatas agar angka yang lebih baik berarti sistem yang lebih baik.

## Referensi dan bacaan lanjutan

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
