# Metrik agen AI dan chatbot

**Asisten percakapan hanya membantu ketika masalah pengguna terselesaikan dan tetap terselesaikan, jadi ukur penyelesaian terverifikasi, kontak kembali, mutu serah terima kepada manusia, dan kerugian dari tindakan yang salah, dan jangan pernah menghargai bot karena menjauhkan orang dari bantuan.**

## Gambaran umum dan motivasi

Banyak organisasi kini menaruh asisten percakapan di antara pengguna dan service desk, dan sebagian memberi agen AI kemampuan bertindak: mengatur ulang kata sandi, memesan peralatan, memulai ulang layanan, mengubah konfigurasi. [Chatbot](https://en.wikipedia.org/wiki/Chatbot) adalah aplikasi perangkat lunak yang melakukan percakapan, dan [asisten virtual](https://en.wikipedia.org/wiki/Virtual_assistant) menambah kemampuan melakukan tugas atas nama pengguna. Gagasan lebih luas tentang [agen cerdas](https://en.wikipedia.org/wiki/Intelligent_agent) adalah sistem yang mempersepsi lingkungan dan mengambil tindakan menuju tujuan. Model bahasa modern membuat sistem ini jauh lebih mampu percakapan terbuka daripada pendahulunya yang berbasis aturan, dan program percakapan pertama, ELIZA karya Joseph Weizenbaum pada 1960-an, sudah menunjukkan betapa mudahnya orang mengaitkan pemahaman dengan mesin yang sekadar menghasilkan balasan yang masuk akal.

Daya tariknya jelas. Pengguna mendapat bantuan pada jam berapa pun tanpa menunggu. Tim menghabiskan lebih sedikit waktu untuk permintaan rutin. [Swalayan](https://en.wikipedia.org/wiki/Self-service) sejak lama menjadi tujuan ITSM, dan shift-left, pemindahan penyelesaian ke titik yang lebih awal dan lebih murah, adalah gagasan inti service desk (lihat topik 3.7, Metrik swalayan dan otomatisasi). Masalah pengukurannya adalah bahwa angka yang jelas menghargai hal yang salah. Bot yang mengakhiri percakapan dihitung telah “menahannya,” entah pengguna terbantu atau menyerah. Bot yang tak pernah menawarkan manusia memaksimalkan penahanan. Bot yang dengan yakin memberi jawaban salah menghasilkan kegagalan senyap yang muncul sebagai kontak marah berhari-hari kemudian.

Dua jenis sistem butuh ukuran berbeda.

- **Asisten percakapan** menjawab pertanyaan, memandu pengguna, dan mengumpulkan informasi. Risikonya adalah jawaban salah atau tak membantu dan menjebak pengguna dalam putaran. Ukuran berfokus pada penyelesaian, akurasi, dan jalur ke manusia.
- **Agen yang bertindak** mengubah hal-hal di dunia: akun, sistem, tiket, uang. Risikonya adalah tindakan salah dengan konsekuensi nyata. Ukuran berfokus pada kebenaran tindakan, keterbalikan, batas izin, dan jejak audit. Pemakaian ini memanggil tata kelola lebih kuat dan, sering, persetujuan manusia untuk langkah yang berkonsekuensi (lihat topik 10.5, Metrik tata kelola dan risiko AI).

Beberapa isu desain membentuk apa yang Anda ukur.

- **Kejujuran tentang dengan apa pengguna berbicara.** Banyak yurisdiksi punya atau sedang mengembangkan kewajiban memberi tahu orang ketika mereka berinteraksi dengan sistem AI, dan per Oktober 2026 aturan ini berkembang, jadi periksa apa yang berlaku bagi Anda. Praktik baiknya adalah mengatakannya dengan jelas bagaimanapun.
- **Jalan keluar.** Pengguna harus dapat menjangkau seseorang tanpa perjuangan. Bot yang menyembunyikan jalur ke manusia adalah [pola gelap](https://en.wikipedia.org/wiki/Dark_pattern), rancangan yang menipu atau menjebak pengguna ke hasil yang tidak akan mereka pilih.
- **Aksesibilitas.** Antarmuka percakapan harus berfungsi bagi orang yang memakai teknologi bantu, yang kemampuan bahasanya terbatas, dan yang butuh bahasa atau kanal lain.
- **Keputusan otomatis.** Ketika keluaran asisten memengaruhi hak atau akses seseorang, topik [pengambilan keputusan otomatis](https://en.wikipedia.org/wiki/Automated_decision-making) dan kewajiban di sekitarnya berlaku. Jaga keputusan semacam itu pada manusia, atau dengan pengaman kuat.

Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) tampak jelas di sini: jika penahanan atau pengalihan adalah targetnya, cara termurah memenuhinya adalah membuat manusia lebih sulit dijangkau (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Ukuran di bawah menaruh penyelesaian dan hasil pengguna lebih dulu.

## Prinsip utama

- **Penyelesaian adalah ukurannya, bukan penahanan.** Percakapan yang berakhir bukan masalah yang terselesaikan.
- **Verifikasi, dan periksa kembalinya.** Hitung kontak sebagai terselesaikan hanya ketika pengguna mengonfirmasi atau tidak kembali.
- **Selalu sediakan jalan ke manusia.** Jadikan jalurnya mudah, cepat, dan terlihat, dan bawa konteksnya.
- **Jujurlah tentang sistemnya.** Katakan bahwa itu AI, apa yang bisa dilakukannya, dan apa yang tidak.
- **Batasi apa yang boleh dilakukan agen.** Berikan hak istimewa minimal, wajibkan persetujuan untuk tindakan berkonsekuensi, dan simpan jejak audit.
- **Ukur mutu jawaban dengan pengambilan sampel.** Balasan fasih bisa salah.
- **Dengarkan pengguna dan staf yang memungut sisanya.** Mereka melihat apa yang terlewat metrik.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tingkat penyelesaian terverifikasi | Porsi percakapan bot tempat pengguna mengonfirmasi isu terselesaikan, atau tidak kembali dalam periode yang dinyatakan | percakapan dengan penyelesaian terkonfirmasi atau tanpa kontak kembali dalam 7 hari / percakapan yang dimulai dengan maksud yang dapat diselesaikan | persen | Log percakapan, konfirmasi pengguna, data tiket dan kontak | Service desk; manajemen pengetahuan | Hasil kerja bagi pengguna | Mingguan |
| Tingkat kontak kembali | Porsi percakapan yang diakhiri bot yang disusul kontak tentang isu yang sama lewat kanal apa pun | percakapan yang disusul kontak terkait dalam 7 hari / percakapan berakhir tanpa serah terima | persen | Log percakapan digabung dengan catatan tiket dan kontak | Service desk; manajemen insiden | Cacat yang lolos | Mingguan |
| Kelengkapan konteks serah terima | Porsi serah terima kepada manusia tempat orang itu punya informasi yang dibutuhkan tanpa meminta pengguna mengulang | serah terima bersampel yang dinilai lengkap oleh agen penerima / serah terima yang disampel | persen | Serah terima bersampel, umpan balik agen | Service desk; manajemen pengetahuan | Kolaborasi mulus lintas batas | Bulanan |
| Waktu ke manusia | Waktu dari pengguna meminta seseorang, atau bot memutuskan menyerahkan, sampai seseorang mengambil alih | median dan persentil ke-85 menit | menit | Log percakapan, data antrean | Service desk; manajemen insiden | Responsivitas ketika pengguna butuh bantuan | Mingguan |
| Akurasi jawaban | Porsi jawaban bot bersampel yang dinilai benar, lengkap, dan aman oleh peninjau berkualifikasi | jawaban dinilai benar / jawaban bersampel | persen | Tinjauan bersampel | Manajemen pengetahuan; penjaminan mutu | Definisi selesai untuk sebuah jawaban | Bulanan |
| Kepuasan dan upaya bot | Peringkat pengguna atas kepuasan dan kemudahan setelah percakapan, dengan komentar | peringkat favorable / peringkat; rata-rata peringkat upaya | persen; poin skala | Survei singkat pasca-percakapan | Service desk; pengalaman pelanggan | Umpan balik atas perangkat lunak yang berfungsi | Mingguan |
| Tingkat pembalikan tindakan agen | Porsi tindakan yang diambil agen AI yang harus dikoreksi, dibatalkan, atau dieskalasi | tindakan dibalik atau dikoreksi / tindakan diambil, menurut jenis tindakan dan kelas risiko | persen | Log audit tindakan, catatan perubahan | Pemberdayaan perubahan; manajemen insiden | Pengerjaan ulang dan rollback | Mingguan |

Definisikan maksud yang ditangani bot, dan kecualikan dari penahanan yang sebaiknya selalu diserahkan. Penyelesaian terverifikasi menghitung percakapan hanya jika isu dalam lingkup dan pengguna entah mengonfirmasi atau tak menunjukkan kontak kembali. Waktu ke manusia dimulai pada permintaan pengguna, bukan di akhir menu. Akurasi jawaban dinilai terhadap basis pengetahuan dan kebijakan oleh orang yang tidak membangun bot. Pembalikan tindakan agen dipecah menurut jenis tindakan dan kelas risiko, dan setiap tindakan yang merugikan dilaporkan terpisah sebagai insiden.

## Rekomendasi

### Definisikan keberhasilan sebagai penyelesaian

**1. Definisikan maksud dan hasil yang Anda inginkan.** Daftar masalah yang sebaiknya ditangani asisten, seperti pengaturan ulang kata sandi, status akses, pertanyaan cara-melakukan, dan hasil untuk masing-masing: dijawab, dikerjakan, atau diserahkan. Putuskan maksud mana yang harus selalu pergi ke manusia: keluhan, apa pun yang melibatkan kesusahan, keselamatan, hak hukum, atau uang. Bot yang mencoba menangani segalanya gagal parah di tepi.

**2. Ukur penyelesaian terverifikasi dan kembalinya.** Tanyakan kepada pengguna di akhir apakah isunya terselesaikan, dan juga cari kontak terkait sesudahnya. Salah satu saja tidak cukup: pengguna yang menyerah tidak menjawab, dan sebagian yang terbantu tetap menelepon. Bersama-sama keduanya mendekati penyelesaian sejati. Perlakukan tingkat kontak kembali sebagai pagar pembatas kunci untuk angka penahanan apa pun (lihat topik 3.1, Metrik service desk).

**3. Hindari penahanan sebagai target.** Laporkan penahanan hanya sebagai angka deskriptif dan selalu di samping penyelesaian terverifikasi, kembalinya, dan kepuasan. Penahanan yang naik dengan kembalinya yang naik berarti bot menolak orang. Jangan menetapkan target penahanan atau mengikat kinerja siapa pun padanya.

### Jadikan jalan ke manusia mudah dan baik

**4. Biarkan pengguna menjangkau seseorang kapan saja.** Sediakan cara yang jelas dan lugas meminta manusia, dan hormati. Ukur waktu ke manusia dan porsi percakapan tempat pengguna meminta lebih dari sekali. Uji jalurnya sendiri secara teratur. Di mana tak ada orang tersedia, katakan kapan akan ada, dan tawarkan panggilan balik.

**5. Serahkan dengan konteks.** Ketika bot menyerahkan percakapan kepada seseorang, sertakan ringkasan, apa yang dicoba, kata-kata pengguna, dan detail akun yang relevan agar pengguna tak mengulang diri. Minta agen penerima menilai apakah serah terima lengkap, dan ambil sampel hasilnya. Serah terima buruk membuat pengguna kurang memercayai bot dan layanan (lihat topik 9.3, Metrik kolaborasi dan serah terima).

**6. Rancang untuk semua pengguna.** Uji asisten dengan pengguna yang memakai teknologi bantu, yang menulis dalam bahasa lain, yang terburu-buru atau dalam kesusahan, dan yang tidak nyaman dengan teknologi. Tawarkan kanal lain. Ukur penyelesaian terverifikasi dan kepuasan menurut kelompok pengguna di mana aman dan sah. Rata-rata menyembunyikan mereka yang paling dikecewakan bot.

### Periksa mutu apa yang dikatakan dan dilakukannya

**7. Ambil sampel jawaban untuk akurasi dan keselamatan.** Tiap bulan, tarik sampel acak percakapan dan minta orang berkualifikasi menilai jawabannya: benar, lengkap, aman, dan jujur tentang ketidakpastian. Catat galat menurut jenis: usang, dikarang, di luar kebijakan, atau disalahpahami. Suapkan galat ke basis pengetahuan dan konfigurasi. Tambahkan pengujian terarah untuk topik sensitif, dan untuk upaya mendorong asisten keluar dari lingkupnya.

**8. Jaga pengetahuan tetap terkini.** Asisten hanya sebaik konten dan perkakas yang diandalkannya. Kaitkan galat jawaban dengan artikel pengetahuan, dan ukur kesegaran pengetahuan yang dipakainya (lihat topik 3.6, Metrik manajemen pengetahuan). Di mana sistem memakai pengambilan dari basis pengetahuan, sertakan pemeriksaan bahwa ia mengutip sumbernya dan bahwa sumbernya benar.

**9. Jujurlah kepada pengguna.** Nyatakan di awal bahwa mereka berbicara dengan AI, dan apa yang bisa dan tidak bisa dilakukannya. Jangan memberinya nama atau sikap manusia yang menyarankan sebaliknya. Di mana ia tak yakin, ia sebaiknya mengatakannya dan menawarkan seseorang. Periksa hukum yang berlaku tentang pengungkapan.

### Kelola agen yang bertindak

**10. Klasifikasikan tindakan menurut risiko dan tetapkan izin yang sesuai.** Untuk tiap tindakan yang dapat diambil agen, definisikan kelas risikonya: informasional, dapat dibalik dan berdampak rendah, atau berkonsekuensi. Berikan hak istimewa minimal yang dibutuhkan. Wajibkan persetujuan manusia untuk tindakan berkonsekuensi. Simpan jejak audit setiap tindakan dengan alasan, pengguna, dan hasilnya. Kendali ini terhubung dengan ukuran perubahan dan keamanan pada bagian sebelumnya (lihat topik 8.1, Metrik insiden keamanan dan kerentanan, dan topik 8.2, Metrik risiko dan kendali).

**11. Ukur kebenaran dan keterbalikan tindakan.** Lacak tingkat pembalikan menurut jenis tindakan, dan tinjau setiap tindakan yang merugikan sebagai insiden, tanpa menyalahkan. Uji agen di lingkungan aman sebelum memberi akses, dan uji ulang ketika model atau perkakas berubah. Versi model baru dapat mengubah perilaku, jadi perlakukan sebagai perubahan yang butuh kendali (lihat topik 4.3, Metrik pemberdayaan perubahan).

**12. Dengarkan orang yang memungut sisanya.** Staf service desk melihat konsekuensi kegagalan bot: pengguna marah, kontak berulang, dan kekacauan untuk dibereskan. Tanyakan secara teratur apa yang salah pada bot dan apa yang mempersulit. Umpan balik mereka dan komentar pengguna adalah bukti yang tak sepenuhnya ditangkap metrik mana pun, dan sebaiknya membentuk putaran perubahan berikutnya.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Tingkat penyelesaian terverifikasi | Menghitung setiap akhir percakapan sebagai terselesaikan; mengajukan pertanyaan konfirmasi yang mengarahkan | Definisikan konfirmasi secara netral; tingkat kontak kembali; ambil sampel percakapan |
| Tingkat kontak kembali | Mengukur hanya lewat satu kanal; jendela pendek | Gabungkan semua kanal; pakai jendela lebih panjang sebagai pemeriksaan; ambil sampel yang kembali |
| Kelengkapan konteks serah terima | Menyerahkan transkrip panjang alih-alih ringkasan; menyampel serah terima mudah | Peringkat agen penerima; sampel acak; waktu penyelesaian setelah serah terima |
| Waktu ke manusia | Memulai jam setelah menu; menghitung pengakuan antrean sebagai pengambilalihan | Jam dimulai pada permintaan; pengambilalihan berarti seseorang aktif dalam percakapan |
| Akurasi jawaban | Menyampel percakapan mudah; peninjau yang longgar | Sampel acak oleh peninjau independen; kasus uji adversarial |
| Kepuasan dan upaya bot | Hanya menyurvei percakapan selesai; menaruh survei di tempat hanya pengguna yang senang mencapainya | Survei juga percakapan yang ditinggalkan; tingkat respons dan bauran; baca komentar |
| Tingkat pembalikan tindakan agen | Tidak mencatat pembalikan; mengklasifikasi ulang koreksi sebagai pekerjaan baru | Log audit tahan rekayasa; kaitkan pembalikan dengan tindakan; tinjauan insiden |

Pembacaan yang sehat adalah penyelesaian terverifikasi tinggi dengan kembalinya rendah, jalur ke manusia yang mudah dan cepat dengan serah terima lengkap, jawaban akurat pada tinjauan bersampel, pengguna puas lintas kelompok, dan agen yang tindakannya jarang butuh dibalik dan tidak pernah menyebabkan kerugian tak terlihat.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Bot berbasis aturan | Terprediksi, mudah diuji | Sempit; rapuh; membuat frustrasi di luar skrip |
| Asisten model bahasa | Fleksibel, fasih | Dapat salah dengan yakin; lebih sulit diuji |
| Pengambilan dari pengetahuan yang disetujui | Jawaban membumi, lebih mudah dikoreksi | Bergantung pada mutu konten |
| Generasi terbuka | Cakupan luas | Risiko pengarangan lebih tinggi |
| Persetujuan manusia untuk tindakan | Keselamatan | Lebih lambat; kelelahan peninjau |
| Tindakan otonom | Kecepatan | Radius ledakan lebih besar ketika salah |
| Lingkup ketat dengan serah terima dini | Aman | Penahanan lebih rendah |
| Lingkup luas | Penahanan lebih tinggi | Lebih banyak galat di tepi |

Jawaban prosanya adalah mulai dengan maksud sempit yang dipahami baik, membumikan jawaban pada pengetahuan yang disetujui, membuat bantuan manusia mudah, dan memperluas lingkup serta otonomi hanya sejauh ukuran membenarkan.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Jika pengguna menginginkan seseorang sekarang, berapa langkah yang dibutuhkan, dan sudahkah kita mencobanya sendiri?**
Uji jalurnya bersama. Hitung langkah dan penantian. Fasilitator sebaiknya mencatat setiap hambatan. Sepakati perubahan agar jalurnya pendek, dan ukur waktu ke manusia.

**2. Berapa porsi percakapan yang diakhiri bot kita yang benar-benar menyelesaikan masalah?**
Periksa kembalinya dan konfirmasi untuk sampel. Bandingkan dengan angka penahanan. Bahas selisihnya. Putuskan angka mana yang sebaiknya dilihat pemimpin.

**3. Apa yang salah pada bot kita, dan siapa yang mengetahuinya?**
Tanyakan service desk. Tinjau percakapan bersampel. Cari pola: artikel usang, pertanyaan ambigu, topik sensitif. Sepakati jalur dari galat ke perbaikan, dengan pemilik.

**4. Tindakan mana yang boleh diambil agen sendiri, dan mana yang butuh seseorang?**
Daftar tindakan dengan kelas risiko dan izinnya. Tanyakan kegagalan realistis terburuk dari masing-masing. Sepakati aturan persetujuan dan jejak audit, dan siapa yang meninjau kasus merugikan.

**5. Siapa yang diam-diam dikecewakan bot?**
Pikirkan pengguna yang terburu-buru, dalam kesusahan, dengan kebutuhan aksesibilitas, atau bahasa terbatas. Lihat penyelesaian dan kepuasan menurut kelompok, di mana aman. Sepakati satu pengujian dengan pengguna semacam itu.

**6. Apa yang akan membuat kita mematikan bot atau mempersempit lingkupnya?**
Definisikan buktinya: kembalinya di atas tingkat tertentu, tindakan merugikan, akurasi di bawah standar. Putuskan siapa yang boleh memutuskan. Memiliki aturan berhenti sebelumnya membuat bertindak lebih mudah.

## Empat perspektif

### Tim produk dan pengiriman

Tim yang membangun asisten memiliki mutunya. Mereka sebaiknya mendefinisikan maksud, membumikan jawaban pada pengetahuan yang disetujui, menguji dengan kasus adversarial, merilis perubahan di bawah kendali, dan membaca kegagalannya. Mereka sebaiknya menolak target penahanan yang menghargai menjebak pengguna.

### Tim layanan dan operasi

Staf service desk bekerja dengan asisten dan mewarisi kegagalannya. Mereka sebaiknya menilai serah terima, menandai jawaban salah, menjaga pengetahuan tetap terkini, dan mengambil alih dengan cepat ketika diminta. Mereka penilai terbaik apakah asisten membantu pengguna, dan beban kerja serta stres mereka adalah bagian gambaran.

### Kepemimpinan dan tata kelola

Pemimpin menyponsori asisten dan menginginkan penghematan. Mereka sebaiknya meminta penyelesaian terverifikasi, kembalinya, dan kepuasan di samping penahanan, mewajibkan aturan berhenti, mendanai jalur manusia, dan meninjau kelas risiko untuk agen. Tata kelola sebaiknya memeriksa pengungkapan, aksesibilitas, dan kewajiban hukum.

### Pelanggan dan pengguna

Pengguna menginginkan bantuan dengan sedikit upaya dan tanpa tipu daya. Mereka sebaiknya tahu mereka berbicara dengan AI, dapat menjangkau seseorang dengan mudah, dan percaya bahwa sistem tidak akan bertindak tanpa alasan baik. Pengalaman mereka, terutama tentang kegagalan, adalah bukti utama apakah asisten layak dimiliki.

## Dalam praktik: contoh ITIL agile

Sebuah universitas nasional menjalankan service desk mahasiswa dan staf yang menangani sekitar 30.000 kontak sebulan. Ia meluncurkan chatbot untuk permintaan umum, dan dasbor vendor melaporkan tingkat penahanan 74 persen. Angka di bawah bersifat ilustratif.

Kepala layanan mahasiswa memeriksa. Di antara percakapan yang diakhiri bot pada bulan terakhir, 29 persen disusul kontak terkait lewat surel atau telepon dalam tujuh hari. Penyelesaian terverifikasi, memakai konfirmasi pengguna dan ketiadaan kembali, adalah 49 persen untuk maksud dalam lingkup. Median waktu menjangkau seseorang setelah meminta adalah 6 menit, dengan persentil ke-85 sebesar 22, sebagian karena jalurnya membutuhkan tiga langkah menu. Sampel 100 percakapan yang ditinjau dua penasihat berpengalaman menemukan 88 jawaban benar dan 12 cacat: 7 usang, 3 mengarang rincian tentang tenggat, dan 2 salah menangani kasus sensitif yang melibatkan mahasiswa dalam kesulitan. Agen penerima menilai 54 persen serah terima lengkap. Kepuasan terhadap bot lebih rendah bagi mahasiswa yang memakai pembaca layar dan yang menulis dalam bahasa selain Inggris. Tim service desk melaporkan banyak kontak yang dimulai dengan “chatbot tidak bisa membantu.”

Kepala layanan mahasiswa membuat perubahan bersama tim. Maksud sensitif, seperti kesejahteraan, keluhan, dan sengketa biaya, diarahkan langsung ke seseorang, dan bot mengatakannya. Opsi “bicara dengan orang” muncul di setiap layar, dan waktu ke manusia dilacak, dengan target menjawab dalam beberapa menit selama jam yang dijaga staf. Serah terima mencakup ringkasan otomatis dan kata-kata pengguna sendiri. Pemilik basis pengetahuan memperbaiki artikel usang, dan tinjauan sampel bulanan menyuapi mereka. Asisten dibatasi menjawab dari konten yang disetujui dan diwajibkan mengatakan ketika tidak tahu. Uji coba kedua memungkinkan agen mengatur ulang kata sandi setelah verifikasi identitas, dengan setiap tindakan dicatat dan dapat dibalik dalam batas waktu, dan tingkat pembalikan dilacak. Dasbor mengganti penahanan dengan penyelesaian terverifikasi, tingkat kontak kembali, akurasi, waktu ke manusia, dan kepuasan menurut kelompok.

Tiga bulan kemudian, penyelesaian terverifikasi mencapai 66 persen untuk maksud dalam lingkup, tingkat kontak kembali turun menjadi 14 persen, median waktu ke manusia turun menjadi 2 menit, porsi serah terima lengkap naik menjadi 86 persen, dan akurasi pada jawaban bersampel naik menjadi 95 persen, tanpa kasus sensitif yang salah ditangani dalam sampel. Tingkat pembalikan tindakan agen dalam uji coba kata sandi adalah 1,2 persen. Kantor rektor meminta target penahanan 85 persen. Kepala layanan mahasiswa menjelaskan bahwa target penahanan lebih tinggi akan menghargai menyembunyikan jalur ke manusia, dan mengusulkan penyelesaian terverifikasi dan kembalinya sebagai ukuran, dengan tinjauan apa yang diperluas berikutnya. Keputusan dicatat.

## Sudut pandang sektor

**Startup.** Asisten dapat menutup dukungan dengan biaya rendah, dan satu jawaban buruk dapat membuat pelanggan hilang. Jaga lingkup sempit, bumikan jawaban pada dokumentasi Anda, buat opsi manusia jelas, dan baca setiap eskalasi. Berhati-hatilah membiarkan agen bertindak atas akun atau pembayaran.

**Bisnis kecil.** Asisten siap pakai di situs web dapat menangani pertanyaan umum. Ujilah seperti pelanggan, pastikan nomor telepon atau surel mudah ditemukan, dan tinjau percakapan mingguan. Periksa apa yang dilakukan vendor dengan data.

**Perusahaan besar.** Skala menawarkan penghematan dan risiko. Jalankan proses tata kelola untuk kelas risiko, persetujuan, dan audit, ukur menurut maksud dan kelompok pengguna, dan pastikan seseorang dapat dijangkau di setiap kanal. Koordinasikan lintas dukungan, keamanan, hukum, dan aksesibilitas.

**Pemerintah dan sektor publik.** Warga mungkin tak punya penyedia alternatif, dan kewajiban aksesibilitas, akses bahasa, dan perlakuan adil berlaku kuat. Jaga seseorang dapat dijangkau, hindari keputusan otomatis tentang hak tanpa pengaman, terbitkan cara asisten dipakai, dan periksa kewajiban pengungkapan dan hukum administrasi (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Biayanya adalah lisensi atau biaya pemakaian, integrasi, persiapan konten, pengambilan sampel dan tinjauan berkelanjutan, pemeliharaan basis pengetahuan, pengujian, dan tata kelola. Jalur manusia yang baik juga berbiaya uang, karena harus diisi staf.

Imbal hasil potensialnya adalah penantian lebih singkat untuk isu sederhana, kelegaan dari kontak berulang, dan cakupan di luar jam kerja. Sisi risikonya mencakup kembalinya, kepercayaan hilang, kerugian dari jawaban atau tindakan salah, dan paparan hukum. Bangun kasus dari angka Anda sendiri: penyelesaian terverifikasi dan kembalinya, biaya per kontak terselesaikan termasuk serah terima, waktu staf yang dihabiskan memperbaiki kegagalan bot, dan kepuasan menurut kelompok. Hindari memakai klaim penahanan atau pengalihan vendor sebagai estimasi Anda. Hitung biaya jalur manusia dan tata kelola (lihat topik 7.7, Pengembalian investasi dan kasus bisnis).

## Anti-pola dan jebakan

- **Penahanan sebagai target.** Menghargai menjauhkan orang dari bantuan. Laporkan penyelesaian terverifikasi dan kembalinya.
- **Jalur ke manusia yang tersembunyi atau lambat.** Itu pola gelap, dan pengguna memperhatikan. Buat pendek dan uji.
- **Menyerahkan tanpa konteks.** Pengguna mengulang diri dan kepercayaan turun. Sertakan ringkasan.
- **Membiarkan bot menangani kasus sensitif.** Kesejahteraan, keluhan, dan hak butuh manusia. Arahkan langsung.
- **Tindakan otonom tanpa audit atau persetujuan.** Satu galat dapat berskala. Klasifikasikan, batasi, dan catat.
- **Mengukur hanya apa yang ditunjukkan dasbor vendor.** Menyanjung. Gabungkan data Anda sendiri.
- **Mengabaikan kelompok yang dikecewakan bot.** Rata-rata menyembunyikan mereka. Uji dan segmentasi di mana aman.
- **Tanpa aturan berhenti.** Bot yang gagal tetap menyala. Definisikan bukti yang akan mempersempit atau mematikannya.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Hasil | Penahanan dilaporkan | Kepuasan disurvei | Penyelesaian terverifikasi dan kembalinya dilacak per maksud | Disegmentasi menurut kelompok pengguna; aturan berhenti didefinisikan; akurasi disampel bulanan | Asisten, staf, dan pengetahuan diperbaiki bersama memakai bukti bersama |
| Jalan ke orang | Sulit ditemukan | Opsi tersedia | Jalur pendek; waktu ke manusia dilacak; serah terima membawa konteks | Mutu serah terima dinilai dan diperbaiki; staf dicocokkan dengan permintaan | Bot dan staf berkolaborasi mulus lintas kanal, dengan pilihan pengguna dihormati |
| Agen yang bertindak | Otomatisasi ad hoc | Tindakan berskrip | Tindakan diklasifikasi risiko, hak istimewa minimal, persetujuan dan audit | Tingkat pembalikan dan kerugian ditinjau; perubahan dikendalikan | Perilaku agen diatur di seluruh organisasi dan pemasok dengan penjaminan independen |

## Daftar periksa

- [ ] Maksud asisten didaftar, dengan yang harus selalu pergi ke manusia.
- [ ] Penyelesaian terverifikasi dan tingkat kontak kembali dilaporkan di samping penahanan.
- [ ] Jalur terlihat dan pendek ke manusia ada di setiap layar, dan waktu ke manusia diukur.
- [ ] Serah terima mencakup ringkasan dan kata-kata pengguna, dan dinilai agen penerima.
- [ ] Jawaban disampel bulanan oleh peninjau berkualifikasi dan independen.
- [ ] Pengguna diberi tahu bahwa mereka berbicara dengan AI, dan apa yang bisa dilakukannya.
- [ ] Pengujian aksesibilitas dan bahasa lain dilakukan dengan pengguna nyata.
- [ ] Tindakan agen diklasifikasi risiko, diberi izin hak istimewa minimal, dan dicatat audit.
- [ ] Tingkat pembalikan dan tindakan merugikan ditinjau tanpa menyalahkan.
- [ ] Aturan berhenti mendefinisikan kapan mempersempit atau mematikan asisten.

## Prompt AI

**Definisikan maksud dan aturan serah terima.**

```text
Kami menjalankan service desk untuk [type of organization]. Alasan kontak paling
umum adalah: [list with volumes]. Usulkan maksud mana yang sebaiknya ditangani
penuh oleh chatbot, mana yang hanya dibantu lalu diserahkan, dan mana yang harus
selalu pergi ke manusia, dengan alasan. Sertakan informasi serah terima yang
diteruskan. Jangan mengarang statistik. Daftar asumsi Anda dan risiko untuk kasus
sensitif.
```

**Periksa klaim penahanan.**

```text
Dasbor chatbot kami menunjukkan penahanan [value]. Kami juga punya: kontak kembali
dalam tujuh hari [value], hasil survei [values], dan sampel percakapan [describe].
Jelaskan apa penyelesaian terverifikasi mungkin, cara menghitungnya dari data
kami, apa yang disarankan selisih antara penahanan dan penyelesaian, dan apa yang
diperiksa berikutnya. Jangan mengklaim sebab yang tak dapat didukung data. Daftar
asumsi Anda.
```

**Rancang klasifikasi risiko untuk tindakan agen.**

```text
Agen AI mungkin mengambil tindakan ini: [list]. Untuk masing-masing, usulkan kelas
risiko (informasional, dapat dibalik berdampak rendah, berkonsekuensi), izin yang
dibutuhkan, apakah seseorang harus menyetujui, apa yang dicatat, cara
membaliknya, dan pengujian yang dijalankan sebelum mengaktifkannya. Jangan
mengasumsikan perkakas tertentu. Daftar asumsi Anda dan keputusan yang butuh
masukan keamanan dan hukum.
```

**Rencanakan tinjauan percakapan bot.**

```text
Rancang tinjauan bulanan percakapan bot: ukuran sampel dan pemilihan (termasuk
beberapa yang ditinggalkan dan beberapa dari kelompok pengguna yang berisiko
mendapat layanan buruk), kualifikasi peninjau, rubrik singkat untuk kebenaran,
keselamatan, dan kejujuran tentang ketidakpastian, cara mencatat galat dan
memperbaiki sumbernya, dan cara melaporkan tanpa mengidentifikasi pengguna.
Daftar asumsi Anda dan kewaspadaan privasi.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik chatbot atau agen AI.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik chatbot mengukur penyelesaian dan membawa vektor manipulasi serta pagar pembatasnya.

## Poin penting

- Ukur penyelesaian terverifikasi dan kontak kembali, dan perlakukan penahanan hanya sebagai angka deskriptif.
- Jadikan jalan ke manusia pendek dan terlihat, dan serahkan dengan konteks.
- Ambil sampel jawaban untuk akurasi dan keselamatan, dan jaga pengetahuan yang dipakai asisten tetap terkini.
- Jujurlah bahwa pengguna berbicara dengan AI, dan uji dengan pengguna yang paling mungkin dikecewakan.
- Untuk agen yang bertindak, klasifikasikan risiko, batasi izin, wajibkan persetujuan untuk tindakan berkonsekuensi, dan simpan jejak audit.
- Definisikan aturan berhenti sebelumnya.

## Referensi dan bacaan lanjutan

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
