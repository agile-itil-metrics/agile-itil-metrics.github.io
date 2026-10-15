# Pengembalian investasi dan kasus bisnis

**Kasus bisnis adalah perkiraan, jadi tulis dengan rentang dan asumsi yang dinyatakan, danai pekerjaan secara bertahap seiring bukti tiba, dan periksa perkiraan terhadap apa yang terjadi agar kasus berikutnya lebih jujur daripada yang terakhir.**

## Gambaran umum dan motivasi

Memperbaiki cara layanan TI disampaikan dan dijalankan butuh uang dan perhatian, dan setiap usulan bersaing dengan yang lain. Platform baru, perubahan staf, program otomatisasi, dan inisiatif mutu semuanya menjanjikan masa depan lebih baik. Pemimpin butuh cara membandingkannya, dan tim butuh cara memperjuangkan pekerjaan yang penting. Kasus bisnis adalah alat tradisionalnya, dan pengembalian investasi adalah angkanya yang paling terkenal.

[Kasus bisnis](https://en.wikipedia.org/wiki/Business_case) adalah pembenaran bagi proyek atau usaha yang diusulkan, biasanya memaparkan masalah, opsi, biaya, manfaat, dan risiko. [Pengembalian investasi](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) membandingkan keuntungan dari investasi dengan biayanya. [Total biaya kepemilikan](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TCO) menghitung semua yang dibiayai aset atau layanan sepanjang masa hidupnya, termasuk pembelian, operasi, dukungan, dan pembuangan. Topik-topik awal bagian ini menyediakan masukannya: biaya aset, perangkat lunak, catatan konfigurasi, layanan, dan sumber daya cloud (lihat topik 7.5, Biaya layanan dan ekonomi per unit dan topik 7.6, Metrik FinOps dan biaya cloud), dan topik manfaat memberi bukti hasil (lihat topik 6.5, Realisasi nilai dan hasil bisnis).

Dua ketegangan membuat kasus bisnis sulit dikerjakan dengan baik.

- **Kasus bisnis adalah perkiraan, ditulis oleh orang yang menginginkan persetujuan.** Penulis sering ingin usulan berhasil, dan insentif untuk menggelembungkan manfaat dan memangkas biaya kuat. [Bias optimisme](https://en.wikipedia.org/wiki/Optimism_bias) adalah kecenderungan mengharapkan hasil lebih baik daripada yang mungkin, dan terdokumentasi baik dalam perencanaan proyek. Koreksinya adalah [peramalan kelas acuan](https://en.wikipedia.org/wiki/Reference_class_forecasting), yang mendasarkan estimasi pada hasil nyata proyek serupa di masa lalu alih-alih cerita dari bawah ke atas. Riwayat kasus masa lalu Anda sendiri adalah kelas acuan terbaik yang Anda punya.
- **Pengiriman berkelanjutan mengubah apa yang dapat dijanjikan kasus bisnis.** Pendekatan agile mengasumsikan bahwa kebutuhan dan nilai ditemukan seiring pekerjaan berjalan. Lingkup, harga, dan manfaat tetap yang ditetapkan setahun sebelumnya bertentangan dengan itu. Tanggapan agile adalah mendanai secara bertahap: langkah pertama kecil untuk belajar, lalu pendanaan lebih lanjut seiring bukti tiba. Ini cocok dengan tujuan pengiriman berkelanjutan dan kolaborasi berkelanjutan dengan pemangku kepentingan, dan cocok dengan fungsi keuangan yang menginginkan kendali. Itu juga berarti kasus bisnis adalah dokumen hidup, ditinjau kembali seiring hipotesis diuji (lihat topik 6.5, Realisasi nilai dan hasil bisnis).

Beberapa gagasan dari keuangan membantu. [Nilai waktu uang](https://en.wikipedia.org/wiki/Time_value_of_money) mengatakan bahwa satu satuan mata uang hari ini lebih berharga daripada yang nanti, jadi manfaat yang lebih jauh di masa depan dihitung lebih rendah. [Nilai kini bersih](https://en.wikipedia.org/wiki/Net_present_value) (NPV) mengubah aliran biaya dan manfaat masa depan menjadi satu nilai hari ini memakai tingkat diskonto. [Periode balik modal](https://en.wikipedia.org/wiki/Payback_period) adalah waktu untuk memulihkan pengeluaran awal. Masing-masing adalah ringkasan dan masing-masing menyembunyikan asumsi, jadi nyatakanlah. [Biaya peluang](https://en.wikipedia.org/wiki/Opportunity_cost) mengingatkan bahwa biaya memilih satu opsi adalah nilai alternatif terbaik yang dikorbankan. [Biaya tenggelam](https://en.wikipedia.org/wiki/Sunk_cost) adalah uang yang sudah dibelanjakan yang tak dapat dipulihkan dan sebaiknya tidak menggerakkan keputusan untuk melanjutkan.

Setiap angka dalam kasus bisnis dapat dimanipulasi, dengan memilih periode yang murah hati, tingkat diskonto yang menguntungkan, atau manfaat yang sulit diperiksa. Pagar pembatas dari [hukum Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) berlaku pada kasus itu sendiri: ketika persetujuan bergantung pada ROI utama, penulis belajar menghasilkannya (lihat topik 1.2, Hukum Goodhart dan psikologi metrik). Ukuran di bawah karena itu mencakup pemeriksaan atas mutu perkiraan masa lalu.

## Prinsip utama

- **Perlakukan kasus sebagai perkiraan dengan rentang.** Tunjukkan hasil rendah, diharapkan, dan tinggi, dan nyatakan asumsi di balik masing-masing.
- **Hitung biaya penuh.** Sertakan operasi, dukungan, pelatihan, upaya perubahan, dan pembuangan selain pembangunan.
- **Eksplisit tentang manfaat dan buktinya.** Pisahkan penghematan biaya, penghindaran biaya, pendapatan, dan pengurangan risiko, dan katakan bagaimana masing-masing akan diukur.
- **Danai secara bertahap.** Lepaskan uang seiring hipotesis diuji dan gambaran membaik.
- **Bandingkan dengan alternatif, termasuk tidak berbuat apa-apa.** Biaya tetap di tempat adalah bagian kasus.
- **Belajar dari riwayat Anda sendiri.** Periksa perkiraan terhadap hasil dan sesuaikan.
- **Abaikan biaya tenggelam.** Putuskan berdasarkan apa yang ada di depan.

## Definisi metrik

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Pengembalian investasi | Keuntungan bersih relatif terhadap biaya selama periode yang dinyatakan | (total manfaat dikurangi total biaya) / total biaya selama periode | persen | Kasus bisnis, buku besar, register manfaat | Manajemen keuangan layanan; perbaikan berkelanjutan | Tinjauan hasil terhadap pendanaan | Saat keputusan dan pada tiap tinjauan |
| Total biaya kepemilikan | Biaya seumur hidup layanan atau aset selama periode yang dinyatakan | biaya akuisisi + operasi + dukungan + perubahan + pelatihan + pembuangan selama periode | mata uang | Buku besar, model biaya, kontrak pemasok | Manajemen keuangan layanan; manajemen aset TI | Biaya tim yang bertahan dan platformnya | Saat keputusan dan tahunan |
| Periode balik modal | Waktu agar manfaat bersih kumulatif sama dengan investasi awal | waktu saat manfaat kumulatif dikurangi biaya kumulatif mencapai nol | bulan | Arus kas kasus bisnis | Manajemen keuangan layanan | Waktu ke nilai pertama, diperluas ke pemulihan biaya | Saat keputusan dan pada tiap tinjauan |
| Nilai kini bersih | Nilai kini manfaat yang diharapkan dikurangi nilai kini biaya, pada tingkat diskonto yang dinyatakan | jumlah atas periode dari (manfaat dikurangi biaya) / (1 + tingkat diskonto) pangkat periode | mata uang | Arus kas kasus bisnis, kebijakan keuangan tentang tingkat diskonto | Manajemen keuangan layanan | Prioritisasi berbasis nilai | Saat keputusan |
| Akurasi estimasi biaya | Rasio biaya aktual terhadap yang diestimasi untuk inisiatif yang selesai | biaya aktual / biaya yang diestimasi saat persetujuan, per inisiatif dan sebagai distribusi | rasio | Catatan kasus bisnis dan buku besar | Manajemen keuangan layanan; perbaikan berkelanjutan | Akurasi perkiraan | Kuartalan |
| Akurasi estimasi manfaat | Rasio manfaat terealisasi terhadap yang diharapkan untuk inisiatif yang selesai, memakai aturan bukti untuk manfaat | manfaat terealisasi / manfaat yang diharapkan saat persetujuan, per inisiatif dan sebagai distribusi | rasio | Catatan kasus bisnis dan register manfaat | Perbaikan berkelanjutan; tata kelola sistem nilai layanan | Tinjauan hasil bersama pemangku kepentingan | Kuartalan |
| Tingkat penghentian berbasis bukti | Porsi inisiatif yang didanai yang dihentikan atau dibentuk ulang pada gerbang tahap karena bukti mengubah gambaran | inisiatif dihentikan atau dibentuk ulang berdasarkan bukti pada gerbang / inisiatif yang mencapai gerbang | persen | Log keputusan gerbang tahap | Perbaikan berkelanjutan; tata kelola portofolio | Belajar dari pekerjaan yang dirilis | Kuartalan |

Nyatakan periode, tingkat diskonto, dan apa yang dihitung sebagai biaya atau manfaat untuk setiap angka, dan catat bersama kasus. ROI dan NPV sangat bergantung pada ini, jadi dua kasus sebanding hanya jika memakai aturan yang sama. Akurasi biaya dan manfaat ditunjukkan sebagai distribusi, misalnya rasio median dan sebarannya, di seluruh inisiatif masa lalu, bukan sebagai satu rata-rata. Tingkat penghentian berbasis bukti yang rendah mungkin berarti seleksi baik, atau gerbang yang tak pernah berkata tidak, jadi baca bersama ukuran akurasi.

## Rekomendasi

### Tulis kasus dengan jujur

**1. Mulai dengan masalah dan opsi.** Gambarkan masalahnya, siapa yang mengalaminya, dan berapa biayanya sekarang. Daftar setidaknya tiga opsi: tidak berbuat apa-apa, langkah minimal, dan perubahan yang diusulkan, ditambah alternatif serius apa pun. “Tidak berbuat apa-apa” punya biaya, seperti insiden yang berlanjut atau risiko yang tumbuh, dan menyertakannya membuat perbandingan adil.

**2. Hitung total biaya kepemilikan sepanjang masa hidup perubahan.** Sertakan pembangunan, lisensi, hosting, operasi, dukungan, pelatihan, migrasi, waktu orang yang akan memakainya, dan pembuangan. Biaya yang tiba setelah peluncuran adalah yang paling sering ditinggalkan. Pakai periode yang cocok dengan masa hidup manfaat, dan katakan apa itu.

**3. Gambarkan tiap manfaat dan cara mengukurnya.** Pisahkan jenisnya. Penghematan biaya mengurangi belanja nyata. Penghindaran biaya mencegah belanja yang seharusnya terjadi, dan lebih sulit diverifikasi. Manfaat pendapatan bergantung pada perilaku pasar. Pengurangan risiko menurunkan kemungkinan atau dampak kerugian, dan paling baik dinyatakan dalam skenario spesifik. Untuk masing-masing, namai indikator, garis dasar, dan pemiliknya (lihat topik 6.5, Realisasi nilai dan hasil bisnis).

**4. Berikan rentang, dan katakan apa yang mendorongnya.** Untuk biaya dan manfaat, berikan estimasi rendah, diharapkan, dan tinggi, dengan asumsi utama. [Analisis sensitivitas](https://en.wikipedia.org/wiki/Sensitivity_analysis) menunjukkan bagaimana hasil berubah ketika asumsi berubah, dan asumsi mana yang paling penting. Jika kasus hanya berhasil ketika setiap asumsi murah hati, katakan. Simulasi dapat menggabungkan rentang, meski juga dapat memberi kenyamanan palsu jika masukannya tebakan.

### Koreksi untuk optimisme

**5. Pakai riwayat Anda sendiri sebagai kelas acuan.** Lihat hasil biaya dan manfaat nyata inisiatif serupa Anda di masa lalu, dan bandingkan dengan yang diperkirakan. Jika inisiatif masa lalu rata-rata berbiaya 30 persen lebih dari estimasi, estimasi baru yang mengabaikan ini kemungkinan mengulang kesalahan. Sesuaikan, atau setidaknya tunjukkan penyesuaiannya. Ukuran akurasi biaya dan manfaat di atas membangun catatan ini.

**6. Minta seseorang di luar tim meninjau kasus.** Kolega dari keuangan atau tim lain, yang tak berinvestasi pada hasil, membaca kasus untuk biaya yang hilang, manfaat yang murah hati, dan asumsi yang belum diuji. Jadikan tinjauan rutin dan konstruktif. Kasus yang bertahan darinya lebih kuat.

**7. Pisahkan orang yang mengestimasi dari orang yang mengadvokasi, bila mungkin.** Tim pengiriman pandai mengestimasi upaya, dan sponsor pandai menilai nilai. Ketika orang yang sama menginginkan persetujuan, estimasi melenceng. Catat siapa yang menghasilkan angka mana.

### Danai secara bertahap

**8. Lepaskan pendanaan dalam langkah yang terikat pada bukti.** Danai tahap pertama kecil untuk menguji asumsi paling berisiko: bangun irisan tipis, jalankan uji coba, atau ukur garis dasar. Definisikan sebelumnya bukti apa yang akan membenarkan tahap berikutnya, apa yang akan membuat Anda membentuk ulang pekerjaan, dan apa yang akan membuat Anda berhenti. Ini pendekatan agile terhadap risiko yang diterapkan pada uang, dan membatasi biaya kesalahan.

**9. Putuskan di tiap tahap berdasarkan apa yang ada di depan.** Uang yang sudah dibelanjakan adalah biaya tenggelam, dan sebaiknya tidak membebani apakah melanjutkan. Tanyakan apakah biaya yang tersisa dibenarkan oleh manfaat yang tersisa yang diharapkan, mengingat apa yang telah Anda pelajari. Beri tim izin untuk berhenti, dan perlakukan penghentian berbukti baik sebagai hasil yang baik.

**10. Jaga pemangku kepentingan dalam lingkaran.** Tinjau kasus bersama sponsor dan pemilik manfaat di tiap tahap. Kolaborasi dengan pemangku kepentingan sepanjang jalan adalah tujuan inti agile, dan mencegah kasus menjadi dokumen yang tak dibaca siapa pun setelah persetujuan.

### Periksa dan belajar

**11. Tinjau hasil terhadap kasus.** Pada titik tinjauan yang disepakati, bandingkan biaya aktual dan manfaat terealisasi dengan perkiraan. Catat rasio, alasan perbedaan, dan apa yang akan Anda ubah dalam kasus berikutnya. Jadikan tinjauan tanpa menyalahkan dan faktual, karena pelaporan jujur bergantung padanya.

**12. Laporkan distribusi akurasi kepada pengambil keputusan.** Tunjukkan, di seluruh inisiatif masa lalu, bagaimana perkiraan dibandingkan dengan hasil. Portofolio tempat manfaat secara teratur kurang dengan selisih serupa memberi tahu pemimpin seberapa jauh memercayai kasus baru, dan memberi penulis alasan untuk jujur. Pasangkan dengan tingkat penghentian berbasis bukti untuk melihat apakah gerbang berfungsi.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Pengembalian investasi | Memilih periode panjang atau menghitung manfaat lunak; meninggalkan biaya operasi | Aturan tetap untuk periode dan lingkup biaya; mutu bukti manfaat; tinjauan independen |
| Total biaya kepemilikan | Menghilangkan dukungan, pelatihan, upaya perubahan, atau pembuangan; memakai volume optimistis | Daftar periksa kategori biaya; bandingkan dengan TCO aktual pekerjaan serupa di masa lalu |
| Periode balik modal | Mendefinisikan awal terlambat; menghitung manfaat yang tak terealisasi | Definisi jam tetap; bandingkan dengan akurasi manfaat terealisasi |
| Nilai kini bersih | Memilih tingkat diskonto rendah; memperpanjang horizon | Tingkat diskonto ditetapkan oleh kebijakan keuangan; analisis sensitivitas ditunjukkan |
| Akurasi estimasi biaya | Merevisi estimasi garis dasar setelah kejadian; mengecualikan kelebihan sebagai perubahan lingkup | Estimasi dibekukan saat persetujuan; catat perubahan lingkup dengan persetujuan; tunjukkan total biaya penyelesaian |
| Akurasi estimasi manfaat | Menghitung manfaat yang tak diukur; mendefinisikan ulang manfaat | Aturan register manfaat; pemilik di luar tim pengiriman mengonfirmasi |
| Tingkat penghentian berbasis bukti | Menghentikan pekerjaan bernilai rendah untuk menggelembungkan tingkat; tak pernah menghentikan apa pun | Baca bersama ukuran akurasi; tinjau alasan menghentikan dan melanjutkan |

Pembacaan yang sehat adalah portofolio dengan rekam jejak: perkiraan yang agak optimistis dengan cara yang diketahui, kasus yang memuat rentang dan sensitivitas, dan gerbang yang kadang menghentikan pekerjaan berdasarkan bukti.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Kasus bisnis besar di muka | Komitmen dan kendali jelas | Mengunci asumsi; mengundang optimisme |
| Pendanaan bertahap | Membatasi biaya kesalahan; belajar dini | Butuh disiplin di gerbang; kurang kepastian untuk perencanaan |
| Satu angka ROI | Sederhana untuk dibandingkan | Menyembunyikan asumsi; mudah dimanipulasi |
| Rentang dengan sensitivitas | Jujur tentang ketidakpastian | Lebih sulit dibandingkan; mungkin terasa samar |
| Kasus kualitatif | Menangkap alasan strategis dan risiko | Sulit dibandingkan dan diverifikasi |
| Kasus kuantitatif | Dapat dibandingkan dan diuji | Presisi palsu; menghilangkan yang tak bisa dihitung |
| Kelas acuan eksternal | Mengoreksi optimisme | Mungkin tak cocok dengan konteks Anda |
| Kelas acuan riwayat sendiri | Cocok dengan konteks Anda | Butuh catatan; sampel kecil |

Jawaban prosanya adalah memakai pendanaan bertahap, rentang, dan riwayat Anda sendiri, bersama uraian kualitatif singkat tentang apa yang terlewat angka. Pakai ROI, NPV, dan periode balik modal sebagai ringkasan, bukan vonis.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Seberapa salah lima kasus bisnis terakhir kita, dan ke arah mana?**
Kumpulkan perkiraan dan biaya serta manfaat aktual untuk inisiatif terbaru. Hitung rasionya. Lihat sebaran dan apakah galat condong ke satu arah. Fasilitator sebaiknya menahan penjelasan pada putaran pertama dan hanya mencatat polanya. Lalu bahas apa implikasinya bagi kasus berikutnya.

**2. Apa asumsi paling berisiko dalam usulan kita saat ini, dan seberapa murah kita bisa mengujinya?**
Daftar asumsi dan peringkat menurut seberapa kasus bergantung padanya dan seberapa tak pasti kita. Untuk yang teratas, rancang uji kecil. Jawabannya membentuk tahap pendanaan pertama.

**3. Berapa biaya tidak berbuat apa-apa, dan sudahkah kita memasukkannya dalam kasus?**
Gambarkan jalur yang mungkin jika usulan tidak disetujui: biaya insiden yang berlanjut, pemeliharaan yang naik, risiko yang tumbuh. Estimasi dengan rentang. Periksa bahwa kasus membandingkan secara adil dengannya.

**4. Biaya mana yang selalu muncul terlambat dalam proyek kita?**
Pikirkan operasi, pelatihan, migrasi, dan penonaktifan. Periksa kasus untuk masing-masing. Tambahkan daftar periksa standar kategori biaya ke templat.

**5. Siapa di luar tim yang pernah menantang angka kita, dan apa katanya?**
Tinjau tinjauan independen terakhir. Jika tidak ada, putuskan siapa yang sebaiknya melakukan yang berikutnya. Percakapan sebaiknya menjelaskan bahwa tinjauan adalah layanan bagi kasus, bukan serangan.

**6. Kapan terakhir kita menghentikan sesuatu karena bukti berubah, dan bagaimana rasanya?**
Ingat inisiatif yang dihentikan atau dibentuk ulang. Bahas bagaimana diterima dan apa dampaknya pada kepercayaan. Sepakati cara membuat penghentian berikutnya terasa seperti pembelajaran.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman menyediakan estimasi biaya dan belajar dari tahap pendanaan. Mereka sebaiknya mengestimasi dalam rentang, mencatat biaya aktual, dan bersuara ketika asumsi patah. Pendanaan bertahap memungkinkan mereka fokus mempelajari apa yang paling penting, dan penghentian berdasarkan bukti sebaiknya dihitung sebagai keberhasilan.

### Tim layanan dan operasi

Tim operasi memiliki sebagian besar biaya setelah peluncuran dan sering ditinggalkan dari kasus. Mereka sebaiknya diminta biaya menjalankan, upaya dukungan, dan risiko, dan sebaiknya memeriksa manfaat yang bergantung pada pekerjaan mereka, seperti insiden berkurang. Mereka dapat memverifikasi klaim penghematan dalam operasi dari data mereka sendiri.

### Kepemimpinan dan tata kelola

Pemimpin memutuskan apa yang didanai dan menetapkan iklim kejujuran. Mereka sebaiknya meminta rentang dan asumsi, meninjau rekam jejak perkiraan, mendanai bertahap, dan menerima penghentian sebagai hasil normal. Tata kelola sebaiknya mewajibkan tinjauan independen atas kasus besar dan pemeriksaan pasca-implementasi, dan melihat portofolio hasil.

### Pelanggan dan pengguna

Pengguna dan pemilik bisnis menanggung manfaat dan gangguan. Mereka sebaiknya menjadi bagian kasus, membantu mendefinisikan masalah dan manfaat, dan diberi tahu apa yang diputuskan dan mengapa. Pengalaman mereka setelah pengiriman adalah ujian terbaik apakah kasus itu benar.

## Dalam praktik: contoh ITIL agile

Kelompok TI sebuah badan kesehatan provinsi mengusulkan program untuk mengotomatisasi permintaan akses rutin dan mengurangi penanganan manual. Angka di bawah bersifat ilustratif.

Draf pertama usulan mengklaim ROI 240 persen selama lima tahun, berdasarkan 18.000 permintaan setahun, biaya penanganan manual rata-rata, dan otomatisasi penuh 80 persen permintaan. Mitra keuangan menyarankan menerapkan riwayat kelompok sendiri. Ia menarik delapan inisiatif masa lalu: biaya aktual adalah median 1,35 kali estimasi, dengan rentang 1,0 sampai 1,9, dan manfaat terealisasi adalah median 0,6 dari manfaat yang diharapkan. Kelompok juga mendapati angka volume permintaan berasal dari satu tahun yang sibuk, dan bahwa estimasi biaya menghilangkan pelatihan dan waktu staf yang meninjau pengecualian.

Tim menulis ulang kasus dengan rentang. Memakai riwayat biaya, biaya yang diharapkan naik sepertiga. Memakai riwayat manfaat, manfaat yang diharapkan dikurangi sekitar separuh. Kasus yang direvisi menunjukkan ROI dalam rentang dari sedikit negatif sampai sekitar 70 persen, periode balik modal antara 20 dan 40 bulan, dan NPV yang positif pada kasus tengah dan yang diharapkan pada tingkat diskonto kebijakan keuangan dan negatif pada kasus rendah. Analisis sensitivitas menunjukkan bahwa porsi permintaan yang dapat diotomatisasi paling penting. Usulan dibentuk ulang menjadi tahap-tahap. Tahap pertama mengotomatisasi tiga jenis permintaan paling umum, dengan anggaran sekitar seperlima total, untuk menguji porsi otomatisasi dan mengukur waktu penanganan garis dasar. Kriteria tahap kedua ditulis: setidaknya 50 persen jenis permintaan itu diotomatisasi penuh, dan waktu penanganan per permintaan berkurang sebesar yang dinyatakan, dengan pemilik manfaat mengonfirmasi.

Setelah tahap pertama, 58 persen dari tiga jenis permintaan diotomatisasi, dan pengecualian memakan waktu lebih lama dari yang diharapkan. Tim membentuk ulang tahap kedua untuk memperbaiki penanganan pengecualian sebelum memperluas ke lebih banyak jenis. Dewan badan bertanya mengapa angka ROI turun. Direktur menjelaskan bahwa angka sebelumnya mengasumsikan otomatisasi penuh dan tak ada riwayat kelebihan, dan bahwa rentang baru lebih jujur. Keputusan dicatat. Pembentukan ulang tahap kedua berdasarkan bukti dicatat, dan tabel akurasi biaya dan manfaat portofolio diperbarui.

## Sudut pandang sektor

**Startup.** Sumber daya langka dan kecepatan belajar penting. Pakai kasus satu halaman dengan asumsi paling berisiko dan uji murah, danai dalam langkah kecil, dan hindari model keuangan rumit. Landasan operasional, bukan NPV, sering menjadi kendala yang mengikat.

**Bisnis kecil.** Pemilik adalah sponsor sekaligus fungsi keuangan. Fokus pada balik modal dan arus kas, sertakan waktu staf, dan bandingkan dengan opsi tidak berbuat apa-apa dan membeli. Waspadai kalkulator ROI buatan vendor, yang cenderung murah hati.

**Perusahaan besar.** Tata kelola portofolio, kebijakan keuangan tentang tingkat diskonto, dan banyak usulan bersaing membuat konsistensi penting. Pakai templat standar dengan kategori biaya wajib, tinjauan independen untuk kasus besar, dan tinjauan pasca-implementasi. Simpan catatan akurasi perkiraan menurut sponsor dan jenis inisiatif sebagai perkakas portofolio, bukan peringkat orang.

**Pemerintah dan sektor publik.** Badan publik sering mengikuti panduan penilaian formal, seperti Green Book Inggris, yang memaparkan cara menilai opsi, menangani bias optimisme, dan mempertimbangkan nilai uang termasuk manfaat nonkeuangan. Manfaat mungkin bersifat sosial dan sulit dimonetisasi, dan transparansi serta audit penting. Pakai panduan yang berlaku bagi Anda, dokumentasikan asumsi, dan catat bukti manfaat (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Topik ini sendiri tentang kasus bisnis, jadi pokoknya adalah biaya mengerjakannya dengan baik. Menulis kasus yang cermat memakan hari, bukan jam, dan tinjauan independen memakan lebih. Melacak akurasi biaya dan manfaat butuh catatan sederhana perkiraan dan hasil tiap inisiatif, yang tak dimiliki banyak organisasi. Pendanaan bertahap menambah rapat tata kelola.

Imbal hasilnya adalah alokasi uang langka yang lebih baik dan lebih sedikit kegagalan besar. Kasus jujur mengurangi kejutan yang menyusul kasus optimistis. Rekam jejak memungkinkan pemimpin mendiskon kasus baru dengan semestinya, yang membuat seluruh portofolio lebih andal. Bangun argumen dari riwayat Anda sendiri: rasio biaya dan manfaat aktual terhadap estimasi, uang yang dibelanjakan pada inisiatif yang kemudian ditinggalkan, dan biaya tinjauan dibandingkan dengan kelebihan yang dicegahnya. Hindari mengutip studi tingkat kegagalan proyek kecuali Anda dapat menelusuri metode dan relevansinya dengan jenis pekerjaan Anda.

## Anti-pola dan jebakan

- **Satu angka ROI disajikan sebagai fakta.** Menyembunyikan asumsi. Tunjukkan rentang dan sensitivitas.
- **Meninggalkan biaya operasi.** Pembangunan hanyalah sebagian biaya seumur hidup. Hitung seluruh masa hidup.
- **Menghitung manfaat lunak sebagai keras.** Penghindaran biaya dan klaim produktivitas butuh bukti. Beri label dan uji.
- **Memperkirakan hanya dari bawah ke atas.** Mengulang optimisme. Bandingkan dengan riwayat Anda sendiri.
- **Semua pendanaan di muka.** Mengunci tebakan. Danai bertahap dengan gerbang bukti.
- **Melanjutkan karena uang yang sudah dibelanjakan.** Putuskan berdasarkan apa yang ada di depan.
- **Menilai pekerjaan rumah sendiri.** Minta pembaca independen meninjau biaya dan manfaat.
- **Tak pernah meninjau ulang kasus.** Tanpa tinjauan hasil, tak ada yang membaik. Periksa perkiraan terhadap hasil.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Menulis kasus | Presentasi informal dengan angka utama | Templat dengan biaya dan manfaat | Templat standar dengan daftar periksa TCO, rentang, dan sensitivitas | Penyesuaian riwayat sendiri diterapkan; tinjauan independen | Kasus dikembangkan bersama pemilik bisnis dan keuangan; asumsi bersama di seluruh portofolio |
| Pendanaan | Semua di muka | Tonggak | Pendanaan bertahap dengan kriteria bukti | Gerbang rutin membentuk ulang atau menghentikan pekerjaan berdasarkan bukti | Pendanaan portofolio bergeser antar-inisiatif berdasarkan bukti |
| Pembelajaran | Tanpa tindak lanjut | Tinjauan sesekali | Tinjauan pasca-implementasi terhadap kasus | Akurasi biaya dan manfaat dilacak sebagai distribusi dan dipakai dalam kasus baru | Pembelajaran dibagikan di seluruh organisasi dan dengan mitra; metode membaik |

## Daftar periksa

- [ ] Kasus mendaftar opsi, termasuk tidak berbuat apa-apa.
- [ ] Total biaya kepemilikan mencakup pembangunan, operasi, dukungan, pelatihan, perubahan, dan pembuangan.
- [ ] Setiap manfaat punya jenis, indikator, garis dasar, dan pemilik.
- [ ] Biaya dan manfaat diberikan sebagai rentang dengan pendorong dinyatakan.
- [ ] Analisis sensitivitas menunjukkan asumsi mana yang paling penting.
- [ ] Estimasi dibandingkan dengan riwayat Anda sendiri atas inisiatif serupa.
- [ ] Peninjau independen telah membaca kasus.
- [ ] Pendanaan bertahap, dengan kriteria bukti untuk melanjutkan, membentuk ulang, atau menghentikan.
- [ ] Hasil ditinjau terhadap kasus pada tanggal yang disepakati.
- [ ] Akurasi biaya dan manfaat di seluruh inisiatif masa lalu dilaporkan kepada pengambil keputusan.

## Prompt AI

**Uji tekan sebuah kasus bisnis.**

```text
Berikut ringkasan kasus bisnis kami untuk [initiative]: biaya [list with
ranges], manfaat [list with types and ranges], periode [years], tingkat diskonto
[rate set by finance], dan asumsi [list]. Identifikasi kategori biaya yang hilang,
manfaat yang butuh bukti lebih kuat, asumsi yang mendominasi hasil, dan risiko
optimisme. Sarankan analisis sensitivitas dan struktur pendanaan bertahap. Jangan
mengarang angka. Daftar asumsi Anda dan pertanyaan yang harus saya jawab.
```

**Bangun kelas acuan dari riwayat kami.**

```text
Kami punya inisiatif masa lalu ini dengan perkiraan serta biaya dan manfaat
aktual: [paste a table]. Hitung rasio aktual terhadap perkiraan, gambarkan median
dan sebaran, komentari pola apa pun menurut jenis inisiatif, dan sarankan cara
memakainya ketika mengestimasi inisiatif baru. Peringatkan saya di mana sampel
terlalu kecil untuk diandalkan. Jangan memakai tolok ukur luar. Daftar asumsi Anda.
```

**Rancang gerbang tahap.**

```text
Untuk [initiative], usulkan tiga tahap pendanaan. Untuk masing-masing, nyatakan
asumsi paling berisiko untuk diuji, bukti yang akan membenarkan melanjutkan,
bukti yang akan membuat kami membentuk ulang pekerjaan, dan bukti yang akan
membuat kami berhenti. Jaga tiap tahap kecil dan murah. Jangan mengasumsikan
metode pengiriman tertentu. Daftar asumsi Anda dan keputusan yang butuh masukan
pimpinan.
```

**Tulis tinjauan pasca-implementasi.**

```text
Susun tinjauan pasca-implementasi satu halaman untuk [initiative]. Masukan: kasus
asli [summary], biaya aktual [figures], manfaat terealisasi dan bukti [summary],
dan apa yang berubah di sepanjang jalan [list]. Sertakan rasio biaya dan manfaat,
alasan perbedaan, apa yang akan kami ubah dalam kasus berikutnya, dan pertanyaan
untuk pemilik manfaat. Jaga nada faktual dan tanpa menyalahkan. Daftar asumsi Anda
dan klaim apa pun yang perlu diperiksa.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan pagar pembatas berpasangan bagi metrik kasus bisnis atau ROI.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa entri metrik keuangan menyatakan periode, asumsi, vektor manipulasi, dan pagar pembatasnya.

## Poin penting

- Kasus bisnis adalah perkiraan: tunjukkan rentang, asumsi, dan sensitivitas.
- Hitung total biaya kepemilikan sepanjang masa hidup perubahan, dan bandingkan dengan tidak berbuat apa-apa.
- Koreksi optimisme memakai riwayat perkiraan dan hasil Anda sendiri.
- Danai bertahap, putuskan berdasarkan apa yang ada di depan, dan perlakukan penghentian berbasis bukti sebagai keberhasilan.
- Tinjau hasil terhadap kasus dan laporkan akurasi kepada pengambil keputusan.
- Pakai ROI, NPV, dan periode balik modal sebagai ringkasan dengan aturan yang dinyatakan, bukan vonis.

## Referensi dan bacaan lanjutan

1. HM Treasury, *The Green Book: Central Government Guidance on Appraisal and Evaluation*, United Kingdom, latest edition.
2. Flyvbjerg, B., "From Nobel Prize to project management: Getting risks right," *Project Management Journal*, 37(3), 2006.
3. Kahneman, D., and Lovallo, D., "Timid choices and bold forecasts: A cognitive perspective on risk taking," *Management Science*, 39(1), 1993.
4. Brealey, R. A., Myers, S. C., and Allen, F., *Principles of Corporate Finance*, McGraw-Hill (latest edition).
5. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
6. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Business case](https://en.wikipedia.org/wiki/Business_case).
9. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
10. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
11. Wikipedia, [Optimism bias](https://en.wikipedia.org/wiki/Optimism_bias).
12. Wikipedia, [Reference class forecasting](https://en.wikipedia.org/wiki/Reference_class_forecasting).
13. Wikipedia, [Time value of money](https://en.wikipedia.org/wiki/Time_value_of_money).
14. Wikipedia, [Net present value](https://en.wikipedia.org/wiki/Net_present_value).
15. Wikipedia, [Payback period](https://en.wikipedia.org/wiki/Payback_period).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Sunk cost](https://en.wikipedia.org/wiki/Sunk_cost).
18. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
19. Wikipedia, [Sensitivity analysis](https://en.wikipedia.org/wiki/Sensitivity_analysis).
