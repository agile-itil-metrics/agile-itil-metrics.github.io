# Pengantar Bagian 10: Metrik di Era AI

**AI membuat keluaran murah dan fasih, yang memutus hubungan lama antara apa yang dihasilkan dan apa yang layak dimiliki, jadi ukur apa yang bertahan, apa yang membantu, dan apa yang tetap terkendali.**

Setiap metrik dalam buku ini bersandar pada asumsi bahwa menghasilkan hal yang dihitung membutuhkan upaya nyata. Tiket yang terselesaikan mencerminkan kerja. Artikel yang tertulis mencerminkan pengetahuan. Perubahan yang digabung mencerminkan kehati-hatian. AI generatif melemahkan asumsi itu. Ia dapat menyusun balasan, artikel, pengujian, atau blok kode dalam hitungan detik, dan yang disusunnya sering masuk akal dan kadang salah. Hitungannya naik. Apakah orang yang dilayani lebih baik adalah pertanyaan terpisah yang tak dapat dijawab hitungan.

AI juga menambah hal baru untuk diukur. Asisten percakapan dan agen yang bertindak atas nama pengguna butuh ukuran penyelesaian, serah terima, dan kerugian dari tindakan yang salah. Tata kelola model, prompt, dan pemasok butuh ukuran cakupan, kendali, dan penanganan insiden. Dan orang yang bekerja di samping perkakas ini butuh keterampilan, pemahaman, dan kecepatan berkelanjutan mereka dilindungi. Ukuran dalam bagian ini bersandar pada sisa buku, karena pagar pembatasnya sama: pasangkan setiap metrik dengan pemeriksaan atas apa yang dapat disembunyikannya, bandingkan dengan garis dasar, ambil sampel bersama orang, dan jauhkan data tentang manusia dari evaluasi (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

Cara kerja agile dan ITIL menawarkan sikap yang masuk akal terhadap semua ini. Perlakukan setiap pemakaian AI sebagai eksperimen kecil. Nyatakan manfaat yang diharapkan, coba dengan orang yang bersedia, bandingkan dengan pekerjaan serupa yang dikerjakan tanpanya, dan putuskan berdasarkan bukti. Jaga pemangku kepentingan terlibat secara berkelanjutan, karena merekalah yang pertama memperhatikan ketika sinyal memburuk. Bidik kecepatan yang berkelanjutan, agar waktu yang dihemat adalah pilihan tentang mutu dan pembelajaran, bukan kenaikan permintaan otomatis. Dan ingat tujuan membangun di sekitar individu yang termotivasi: AI sebaiknya meringankan pekerjaan yang membosankan dan menghormati pertimbangan orang, dan tidak boleh menjadi cara untuk memantau mereka.

Fakta tentang perkakas, produk, dan aturan AI berubah dengan cepat. Pernyataan dalam bagian ini tentang regulasi, standar, dan perkakas tertentu bertanggal per Oktober 2026, dan pembaca sebaiknya memeriksanya kembali. Prinsip pengukuran lebih tahan lama daripada teknologi mana pun yang digambarkannya.

## Topik dalam bagian ini

- **10.1 AI dalam pengukuran manajemen layanan**: di mana AI masuk ke pekerjaan, garis dasar sebelum adopsi, perbandingan, waktu ke hasil yang diperiksa, dan biaya penuh.
- **10.2 Mengukur pekerjaan berbantuan AI**: retensi, pengerjaan ulang, beban tinjauan, cacat yang lolos, pemahaman, dan keterampilan.
- **10.3 Metrik agen AI dan chatbot**: penyelesaian terverifikasi, kontak kembali, serah terima, waktu ke seseorang, akurasi jawaban, dan pembalikan tindakan agen.
- **10.4 Inflasi metrik dan pengenceran kualitas**: bagaimana volume dan kecepatan menggelembung, pengambilan sampel kebermanfaatan, beban verifikasi, dan memutus lingkaran umpan balik.
- **10.5 Metrik tata kelola dan risiko AI**: register pemakaian, kelas risiko, kendali perubahan untuk model dan prompt, evaluasi, pengawasan, dan insiden.

## Bagaimana topik-topik ini saling terkait

Topik fondasi (lihat topik 10.1, AI dalam pengukuran manajemen layanan) menetapkan metode: garis dasar, perbandingan, pengambilan sampel, dan biaya penuh. Ia berlaku untuk setiap topik lain dalam bagian ini. Topik pekerjaan berbantuan (lihat topik 10.2, Mengukur pekerjaan berbantuan AI) memakai metode itu pada pekerjaan yang dilakukan orang dengan AI di sampingnya, dan melihat apa yang bertahan dan apa yang terjadi pada pemahaman. Topik chatbot dan agen (lihat topik 10.3, Metrik agen AI dan chatbot) menerapkannya pada sistem yang menghadapi pengguna langsung atau bertindak atas nama mereka, di mana biaya jawaban atau tindakan yang salah jatuh pada orang lain.

Inflasi dan pengenceran (lihat topik 10.4, Inflasi metrik dan pengenceran kualitas) adalah pendamping peringatan bagi semuanya. Ia menjelaskan mengapa angka mudah naik dan apa yang dipasangkan dengannya, dan terhubung dengan pemeriksaan kebermanfaatan di topik lain. Tata kelola (lihat topik 10.5, Metrik tata kelola dan risiko AI) adalah struktur yang menahan sisanya di tempat: ia menyediakan register yang memberi tahu apa yang diukur, kelas risiko yang memberi tahu seberapa dalam, kendali perubahan yang menjaga perilaku agar tidak hanyut tanpa terlihat, dan proses insiden ketika ada yang salah.

Beberapa pasangan pagar pembatas menyusul. Ukuran kecepatan sebaiknya dibaca bersama waktu ke hasil yang diperiksa dan beban verifikasi. Angka penahanan atau pengalihan sebaiknya dibaca bersama penyelesaian terverifikasi dan kontak kembali. Hitungan pemakaian terdaftar sebaiknya dibaca terhadap penemuan independen. Angka adopsi untuk perkakas AI sebaiknya diperlakukan sebagai deskriptif, dan hasil terhadap pembanding yang memikul bobotnya.

Bagian ini terhubung ke bagian sebelumnya: ukuran tinjauan dan alur Bagian 2, ukuran pengetahuan dan swalayan Bagian 3, ukuran keamanan dan risiko Bagian 8, dan ukuran manusia Bagian 9. Ia mengarah ke bagian isi terakhir, yang tentang membangun program metrik itu sendiri, karena program yang memperkenalkan pengukuran tanpa kehati-hatian akan menderita distorsi yang sama yang digambarkan bagian ini.
