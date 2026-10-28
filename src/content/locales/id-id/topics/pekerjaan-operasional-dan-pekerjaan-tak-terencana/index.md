# Pekerjaan operasional dan pekerjaan tak terencana

**Tim yang membangun dan menjalankan layanan punya satu kolam kapasitas, jadi buat pembagian antara perubahan terencana dan pekerjaan operasional terlihat, lindungi dengan aturan eksplisit untuk interupsi dan ekspedit, dan baca porsi pekerjaan tak terencana sebagai sinyal tentang sistem, bukan vonis atas orang.**

## Gambaran umum dan motivasi

Setiap tim yang membangun dan menjalankan layanan menghabiskan waktunya pada dua jenis pekerjaan yang luas. **Pekerjaan perubahan** menggerakkan layanan maju: fitur baru, perbaikan terencana, migrasi, dan penghapusan kelemahan yang diketahui. **Pekerjaan menjalankan**, juga disebut pekerjaan operasional, menjaga layanan tetap berjalan: menjawab insiden dan permintaan, merespons peringatan, menerapkan patch rutin, memulihkan akses, dan menangani tugas manual yang masih dituntut layanan. Keduanya sah, dan layanan yang punya pengguna butuh keduanya. Masalah mulai ketika tak ada yang bisa mengatakan berapa banyak dari masing-masing yang dikerjakan tim, karena rencana lalu diam-diam mengandaikan kapasitas yang sudah dihabiskan pekerjaan menjalankan.

Pekerjaan juga dapat dipilah menurut apakah ia sudah diperkirakan. **Pekerjaan terencana** dipilih sebelum periode dimulai, misalnya selama perencanaan kerja atau komitmen kuartalan. **Pekerjaan tak terencana** tiba selama periode dan menuntut perhatian yang tidak dianggarkan: insiden produksi, permintaan mendesak dari pemangku kepentingan senior, perbaikan keamanan, atau cacat yang menghalangi pelanggan. Kedua sumbu itu tumpang tindih tetapi tidak sama. Sebagian besar pekerjaan menjalankan tak terencana dalam waktunya meskipun volumenya dapat diprediksi, dan sebagian pekerjaan menjalankan, seperti pembaruan sertifikat terjadwal, sepenuhnya terencana. Pekerjaan perubahan juga dapat tak terencana, seperti ketika regulasi berubah dan tim harus merespons dalam hitungan pekan.

Pandangan agile dan ITIL menggambarkan tekanan yang sama dengan kata berbeda. Dalam perencanaan berbatas waktu, komitmen adalah perkiraan kapasitas, dan pekerjaan yang tiba di tengah periode menggeser sesuatu atau ditunda. Pada papan alur, pekerjaan dalam proses punya batas eksplisit dan sering ada jalur khusus untuk item mendesak, dan pertanyaannya adalah berapa banyak item mendesak yang dapat diserap sistem sebelum alur runtuh (lihat topik 2.1, Ukuran alur). Dalam ITIL 4 (versi yang diterbitkan pada 2019), manajemen insiden, manajemen permintaan layanan, dan manajemen masalah menjelaskan bagaimana pekerjaan menjalankan diterima, diprioritaskan, dan diselesaikan, sementara pemberdayaan perubahan dan praktik pengembangan dan manajemen perangkat lunak mengatur perubahan terencana. Praktik itu menjelaskan alur kerja. Jarang mereka mengatakan bagaimana satu tim sebaiknya membagi jamnya di antara keduanya, dan celah itu tempat topik ini bekerja.

Beberapa istilah berulang di sini. **Interupsi** adalah permintaan apa pun yang tiba di luar siklus perencanaan dan menarik seseorang dari item yang dikerjakannya. **Beban interupsi** adalah efek total permintaan itu pada tim selama satu periode, diukur menurut hitungan, jam, atau porsi kapasitas yang dikonsumsinya. **Ekspedit** adalah item kerja yang diizinkan menyalip antrean, biasanya karena [biaya keterlambatannya](https://en.wikipedia.org/wiki/Cost_of_delay) tinggi dan segera. **Jalur ekspedit** adalah aturan, sering baris khusus pada papan, yang membatasi berapa banyak ekspedit boleh berjalan sekaligus. **Alokasi kapasitas** adalah pembagian eksplisit kapasitas tim di antara jenis pekerjaan, misalnya porsi yang dinyatakan untuk perubahan terencana, porsi untuk pekerjaan menjalankan, dan porsi untuk perbaikan.

Pekerjaan tak terencana adalah pajak tersembunyi terbesar atas pengiriman terencana: setiap interupsi memakan waktunya sendiri ditambah waktu pemulihan yang hilang karena [pergantian tugas](https://en.wikipedia.org/wiki/Task_switching_(psychology)), dan penelitian tentang pekerjaan yang terinterupsi (Mark, Gudith, dan Klocke, 2008) mendapati bahwa orang mengompensasi dengan bekerja lebih cepat dengan harga stres yang lebih besar. Catatan tentang arah. Porsi pekerjaan tak terencana yang tinggi bukan cacat dengan sendirinya. Layanan yang baru diluncurkan, gangguan yang sedang berlangsung, atau peristiwa teregulasi dapat dengan sah menghabiskan sebagian besar kapasitas tim untuk sementara. Tujuannya bukan mendorong pekerjaan tak terencana ke nol atau menyembunyikannya, tetapi melihatnya, menghargainya, dan memutuskan dengan sengaja berapa banyak yang akan diserap tim dan berapa banyak yang harus diperbaiki organisasi di hulu. Pekerjaan tak terencana yang berulang untuk sebab yang sama adalah jenis yang paling berguna ditemukan, karena ia menunjuk pada catatan masalah, celah pemantauan, atau butir [utang teknis](https://en.wikipedia.org/wiki/Technical_debt) yang lebih murah dihapus daripada terus dibayar.

## Prinsip utama

- **Kapasitas terbatas dan bersama.** Setiap jam yang diberikan pada pekerjaan menjalankan atau ekspedit adalah jam yang tidak diberikan pada perubahan terencana, jadi buat pembagiannya eksplisit dan terlihat alih-alih membiarkannya muncul dari siapa yang berteriak paling keras.
- **Golongkan pekerjaan saat tiba, bukan sesudahnya.** Beri tag setiap item sebagai terencana atau tak terencana dan sebagai perubahan atau menjalankan pada saat ia memasuki sistem, karena penggolongan ulang di akhir periode adalah ingatan, bukan pengamatan.
- **Interupsi punya harga di luar durasinya.** Hitung biaya pemulihan akibat pergantian selain menit yang dipakai, dan utamakan desain yang mengelompokkan atau merutekan interupsi ke orang bernama.
- **Ekspedit menurut aturan, bukan menurut pangkat.** Jalur ekspedit dengan batas dan ujian masuk melindungi alur; ekspedit tanpa batas menurut senioritas menghapusnya.
- **Sisihkan kapasitas dengan sengaja.** Penyangga terencana lebih jujur daripada rencana yang mengandaikan tidak ada.
- **Perlakukan pekerjaan tak terencana yang berulang sebagai cacat dalam sistem.** Pengulangan mingguan adalah kandidat untuk catatan masalah atau otomatisasi.
- **Ukur tim dan layanan, bukan individu.** Orang yang menjawab sebagian besar interupsi biasanya orang yang paling banyak tahu; memeringkat mereka menghukum hal yang salah (lihat topik 1.2, Hukum Goodhart dan psikologi metrik).

## Definisi metrik

Tujuh metrik menggambarkan bagaimana kapasitas dibagi dan diganggu. Masing-masing butuh aturan penggolongan tertulis, karena semuanya bergantung pada bagaimana item diberi tag. Periode dalam setiap rumus adalah jendela tetap yang sama untuk tim, seperti pekan, bulan, atau kuartal.

| Metrik | Definisi | Rumus | Satuan | Sumber data | Praktik ITIL | Padanan agile | Periode |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Rasio pekerjaan tak terencana | Porsi item kerja selesai, menurut hitungan, yang tidak ada dalam rencana pada awal periode | item selesai pada periode itu yang memasuki papan atau backlog setelah periode dimulai / semua item selesai pada periode itu; jam dimulai pada acara perencanaan, berhenti pada akhir periode; item yang dibatalkan dan yang masih terbuka dikecualikan | persen | Pelacak isu dengan waktu pembuatan item dan potret perencanaan | Manajemen insiden; manajemen permintaan layanan | Perubahan lingkup; jenis item kerja | Bulanan |
| Kepatuhan alokasi kapasitas | Seberapa dekat upaya sebenarnya dengan pembagian yang dinyatakan antara pekerjaan perubahan, menjalankan, dan perbaikan | untuk tiap kategori, selisih mutlak antara porsi sebenarnya dan porsi yang disepakati, dijumlahkan dan dibagi dua; porsi sebenarnya adalah item selesai (atau upaya tercatat bila tim mencatatnya) dalam kategori itu / semua item selesai; item tanpa kategori dilaporkan terpisah dan tidak dibuang | poin persen | Kolom jenis pekerjaan pelacak isu, dan catatan waktu bila ada | Perbaikan berkelanjutan; manajemen kapasitas dan kinerja | Alokasi kapasitas atau perencanaan kapasitas | Bulanan |
| Laju interupsi | Seberapa sering permintaan di luar rencana mencapai tim dan mencapai orang yang mengerjakan pekerjaan terencana | interupsi yang diterima tim pada periode itu / hari kerja pada periode itu, dengan interupsi adalah tiket, panggilan, permintaan pesan, atau permintaan apa pun yang dicatat pada saluran penerimaan tim dan belum ada dalam rencana; duplikat dari permintaan mendasar yang sama dihitung sekali | interupsi per hari kerja | Log saluran penerimaan, antrean ITSM, sistem peringatan, dan log interupsi tim | Manajemen insiden; manajemen permintaan layanan; manajemen pemantauan dan peristiwa | Log interupsi atau kesepakatan kerja tim | Mingguan |
| Tingkat ekspedit | Porsi item selesai yang memakai jalur ekspedit | item selesai pada periode itu yang memasuki jalur ekspedit / semua item selesai pada periode itu; jam dimulai ketika item ditandai ekspedit dan berhenti pada penyelesaian; item yang diturunkan dari jalur sebelum pekerjaan dimulai dihitung terpisah | persen | Riwayat jalur papan atau riwayat kolom prioritas | Manajemen insiden; pemberdayaan perubahan (perubahan darurat) | Kelas layanan ekspedit | Bulanan |
| Pergeseran pekerjaan terencana | Jumlah item terencana yang didorong keluar atau ditinggalkan untuk memberi ruang pada pekerjaan tak terencana | item terencana yang dikeluarkan dari periode, ditunda, atau dibiarkan belum selesai dengan alasan tercatat “tergeser oleh pekerjaan tak terencana” pada periode itu (hitungan); item yang dikeluarkan karena tujuan berubah dikecualikan | hitungan item | Riwayat perubahan papan, dengan kolom alasan | Pemberdayaan perubahan; perbaikan berkelanjutan | Perlindungan tujuan pengiriman; negosiasi lingkup | Bulanan |
| Porsi pekerjaan tak terencana berulang | Porsi item tak terencana yang sebabnya cocok dengan item tak terencana sebelumnya dalam jendela tinjau balik | item tak terencana selesai pada periode itu yang tertaut pada catatan masalah, aturan peringatan, atau tag sebab yang sama dengan item sebelumnya dalam jendela tinjau balik (misalnya 90 hari) / semua item tak terencana selesai pada periode itu; item tanpa tag sebab dilaporkan sebagai hitungan tak terklasifikasi terpisah | persen | Catatan insiden dan masalah ITSM, tag sebab pelacak | Manajemen masalah; manajemen kesalahan yang diketahui | Butir tindakan retrospektif; tag cacat berulang | Bulanan |
| Keandalan komitmen terencana | Porsi item yang direncanakan tim untuk periode itu yang diselesaikannya pada periode itu | item terencana yang selesai pada periode itu / item terencana pada awal periode; item yang ditambahkan setelah awal dikecualikan dari kedua hitungan | persen | Potret perencanaan dan riwayat penyelesaian pelacak | Manajemen tingkat layanan; pemberdayaan perubahan | Keandalan perkiraan | Bulanan |

Ukuran waktu dalam topik ini, seperti usia item ekspedit, sebaiknya ditampilkan sebagai persentil (misalnya median dan persentil ke-85) dan bukan rata-rata, karena satu insiden panjang mendistorsi rata-rata (lihat topik 1.6, Literasi statistik untuk metrik layanan).

## Rekomendasi

### Buat pembagiannya terlihat

**1. Beri tag setiap item dengan dua kolom saat penerimaan.** Tambahkan jenis pekerjaan (perubahan, menjalankan, perbaikan) dan bendera terencana (terencana, tak terencana) pada formulir penerimaan pelacak atau alat ITSM, dan jadikan keduanya wajib. Tag murah bila ditetapkan saat pembuatan dan tak andal bila direkonstruksi kemudian. Tulis definisi setiap nilai dalam satu kalimat di kesepakatan kerja tim, dan tinjau ketika tag berhenti menggambarkan pekerjaan (lihat topik 1.5, Sumber data dan instrumentasi).

**2. Bekukan potret perencanaan.** “Tak terencana” hanya bermakna relatif terhadap sebuah rencana, jadi tangkap daftar item pada awal periode dan simpan. Bandingkan pekerjaan selesai terhadap potret, bukan terhadap tampilan papan di akhir.

### Alokasikan kapasitas dengan sengaja

**3. Sepakati alokasi kapasitas dan perlakukan sebagai hipotesis.** Putuskan, sebagai tim dan bersama pemilik produk atau pemilik layanan, kira-kira berapa porsi untuk perubahan terencana, pekerjaan menjalankan, dan perbaikan. Mulailah dari apa yang ditunjukkan data tentang apa yang sebenarnya dikerjakan tim selama beberapa periode terakhir, lalu pilih target yang bergerak ke arah yang diinginkan. Tinjau ulang pembagian itu pada setiap siklus perencanaan; persentase tetap yang disalin dari slide tim lain adalah tebakan, bukan keputusan.

**4. Sisihkan penyangga yang ukurannya dari riwayat Anda sendiri.** Pakai catatan interupsi tim sendiri untuk menentukan ukuran penyangga bagi pekerjaan tak terencana, misalnya dengan melihat bagian tengah dan rentang atas porsi tak terencana mingguan selama periode terakhir, dan rencanakan hanya kapasitas yang tersisa. Penyangga yang kerap tak terpakai dapat menyusut; yang kerap habis butuh alokasi lebih besar atau sebab yang disingkirkan. Hubungan antara beban dan keterlambatan dalam antrean (lihat [hukum Little](https://en.wikipedia.org/wiki/Little%27s_law), dan topik 2.3, Pekerjaan dalam proses (WIP) dan antrean) menjelaskan mengapa sistem yang dijalankan pada utilisasi penuh tak punya ruang menyerap kejutan.

### Rancang jalur interupsi

**5. Rutekan interupsi ke peran bernama.** Putar satu orang, sering disebut penangan interupsi, insinyur piket, atau perisai, untuk menerima permintaan masuk selama sehari atau sepekan, sementara yang lain melindungi fokusnya. Peran itu punya lingkup tertulis, catatan serah terima, dan batas berapa lama berlangsung agar bebannya dibagi adil. Tim yang berotasi sebaiknya menghubungkannya dengan praktik siaga (lihat topik 5.7, Metrik pekerjaan berulang dan siaga).

**6. Triase di pintu.** Interupsi sangat berbeda tingkat urgensinya. Terapkan aturan [triase](https://en.wikipedia.org/wiki/Triage) singkat pada penerimaan yang menanyakan tiga hal: apakah layanan mati atau pengguna terhalang, adakah tanggal yang tak bisa bergeser, dan dapatkah permintaan menunggu acara perencanaan berikutnya? Item yang gagal ketiganya masuk backlog dan direncanakan seperti pekerjaan lain. Dalam istilah ITIL 4 ini adalah langkah pemrioritasan manajemen insiden dan manajemen permintaan layanan yang diterapkan pada penerimaan tim sendiri.

### Atur jalur ekspedit

**7. Beri jalur ekspedit batas dan ujian masuk.** Jalur menampung paling banyak satu atau dua item sekaligus, dan item masuk hanya bila biaya keterlambatannya tinggi dan segera dan peminta dapat menyatakannya. Ujian yang dinyatakan memungkinkan tim berkata tidak pada permintaan yang sekadar keras. Jika jalur selalu penuh, ia telah berhenti menjadi pengecualian, dan tim sebaiknya meninjau ujian masuk dan sebab di hulu. Jalur adalah [kelas layanan](https://en.wikipedia.org/wiki/Class_of_service) dengan aturannya sendiri; lihat literatur Kanban untuk gagasan di baliknya (Anderson, 2010).

### Singkirkan sumbernya

**8. Kaitkan item tak terencana dengan sebab dan tinjau pengulangan.** Tambahkan tag sebab atau tautan ke catatan masalah pada setiap item tak terencana. Sekali sebulan, daftar sebab yang berulang dan kirim yang teratas ke manajemen masalah, ke backlog sebagai butir utang teknis, atau ke perbaikan pemantauan (lihat topik 4.1, Metrik manajemen masalah, dan topik 4.6, Utang teknis dan kesalahan yang diketahui). Porsi pekerjaan tak terencana berulang menunjukkan apakah perbaikan itu mendarat. Polanya mirip penghapusan toil yang dijelaskan dalam buku Google SRE, tempat pekerjaan operasional manual yang berulang diperlakukan sebagai sesuatu yang harus direkayasa hilang; buku itu menyarankan menjaganya di bawah suatu porsi waktu insinyur (Beyer dkk., 2016), pedoman yang sebaiknya diuji tiap tim terhadap datanya sendiri alih-alih diadopsi sebagai target.

## Vektor manipulasi dan pagar pembatas

| Metrik | Cara dimanipulasi | Metrik atau praktik pagar pembatas yang dipasangkan |
| --- | --- | --- |
| Rasio pekerjaan tak terencana | Menambahkan item ke potret perencanaan terlambat agar dihitung terencana; membiarkan pekerjaan mendesak tak terlacak sehingga tak pernah dihitung; menandai item terencana sebagai tak terencana untuk membenarkan rencana yang meleset | Potret perencanaan beku dengan stempel waktu; hitungan tak terklasifikasi; sampel item tertutup dibaca tiap kuartal untuk membandingkan tag dengan yang terjadi |
| Kepatuhan alokasi kapasitas | Memindahkan item antarkategori agar sesuai pembagian yang disepakati; memecah satu item menjadi beberapa untuk menggeser porsi; memilih pembagian yang sudah dicapai tim | Definisi kategori tetap yang tertulis di kesepakatan kerja; sampel deskripsi item terhadap kategorinya; keandalan komitmen terencana |
| Laju interupsi | Mengubah interupsi menjadi bantuan diam-diam yang tak pernah masuk log; menggabung beberapa permintaan menjadi satu entri; mengecilkan hati orang untuk meminta | Bandingkan log dengan lalu lintas saluran penerimaan dan riwayat peringatan; tanyakan kepada tim dalam retrospektif apakah log sesuai pengalaman mereka |
| Tingkat ekspedit | Menjaga pekerjaan mendesak di luar jalur agar tampak disiplin, atau memasukkan segalanya agar cepat; mendefinisikan ulang ekspedit sebagai “penting” | Batas jalur dengan ujian masuk; porsi item ekspedit yang memenuhi ujian pada tinjauan; pergeseran pekerjaan terencana |
| Pergeseran pekerjaan terencana | Mencatat pergeseran sebagai perubahan lingkup karena pilihan; membiarkan item terencana gagal diam-diam tanpa alasan; menghindari item terencana yang mungkin tergeser | Kolom alasan wajib pada setiap item yang dikeluarkan atau belum selesai; keandalan komitmen terencana; tinjauan alasan di retrospektif |
| Porsi pekerjaan tak terencana berulang | Memakai tag sebab kasar sehingga pengulangan tersembunyi, atau yang halus sehingga tak ada yang berulang; menutup catatan masalah untuk menghapus tautan | Taksonomi tag sebab ditinjau tiap kuartal; hitungan tak terklasifikasi; pemeriksaan kekambuhan setelah catatan masalah ditutup |
| Keandalan komitmen terencana | Merencanakan kecil agar menyelesaikan semuanya; melapisi estimasi; menghitung item parsial sebagai selesai; membuang item sulit sebelum periode dimulai | Ukuran dan nilai item yang direncanakan dibandingkan dari waktu ke waktu; pemeriksaan hasil atas tujuan pengiriman; rasio pekerjaan tak terencana, agar nilai tinggi tidak dibaca sebagai kesehatan ketika rencananya penakut |

Pembacaan yang sehat adalah rasio pekerjaan tak terencana yang dapat dijelaskan tim, jalur ekspedit yang jarang penuh, dan porsi pengulangan yang turun setelah perbaikan. Pembacaan yang terlalu sempurna adalah hal yang harus diselidiki. Tim yang melaporkan nol pekerjaan tak terencana punya layanan yang sangat tenang atau yang tak terlacak, dan cara membedakannya adalah membandingkan log dengan riwayat peringatan dan tiket.

## Kompromi: kelebihan dan kekurangan

| Pendekatan | Kekuatan | Kelemahan |
| --- | --- | --- |
| Alokasi kapasitas tetap (persentase yang dinyatakan) | Mudah dijelaskan; melindungi pekerjaan perbaikan dari kelaparan | Mengabaikan variasi nyata; bisa dimanipulasi dengan pelabelan ulang |
| Penyangga yang disisihkan dari riwayat | Mencocokkan rencana dengan beban interupsi nyata | Butuh beberapa periode data andal; bisa menyembunyikan sebab kronis |
| Penangan interupsi bergilir | Melindungi fokus sebagian besar tim; membagi beban dengan adil | Pekerjaan terencana penangan sendiri macet; peran butuh serah terima dan dukungan |
| Batas ekspedit ketat | Menjaga alur dapat diprediksi; memaksa biaya keterlambatan dinyatakan | Peminta mungkin mengitarinya; keadaan darurat sungguhan bisa terasa terhalang |
| Menghitung item alih-alih upaya | Sederhana dan sulit digelembungkan | Memperlakukan ukuran yang sangat berbeda sama |

Posisi praktis bagi kebanyakan tim adalah menghitung item lebih dulu, menambahkan upaya hanya di tempat hitungan item menyesatkan, melindungi penyangga kecil dan jalur ekspedit kecil, dan memakai tag sebab untuk menyerang pengulangan terbesar.

## Pertanyaan untuk dibahas bersama tim Anda

**1. Berapa porsi pekerjaan selesai periode lalu yang tak terencana, dan bagaimana kita tahu?**
Buka potret perencanaan di samping daftar item selesai dan hitung item yang tidak ada dalam rencana. Bandingkan hasilnya dengan perasaan tiap orang tentang periode itu; keduanya sering berbeda. Fasilitator sebaiknya bertanya berapa banyak item yang tak pernah dicatat, karena jawaban jujur membentuk setiap angka lain.

**2. Tiga sumber interupsi mana yang paling mahal bagi kita, dan siapa yang dapat menyingkirkannya?**
Daftar sumber menurut hitungan dan menurut upaya yang diserapnya, seperti peringatan, permintaan berulang, eskalasi, dan permintaan ad hoc dari pemangku kepentingan. Tandai masing-masing sebagai dapat disingkirkan, dapat dirutekan, atau tak terhindarkan. Fasilitator sebaiknya mendorong adanya pemilik bernama di luar tim untuk sumber apa pun yang tak dapat diperbaiki tim sendiri.

**3. Pembagian antara pekerjaan perubahan, menjalankan, dan perbaikan seperti apa yang sebenarnya kita inginkan?**
Bandingkan pembagian yang ditunjukkan data dengan yang diyakini orang dan yang diharapkan pimpinan. Bahas jenis pekerjaan mana yang akan dijatuhkan tim lebih dulu di bawah tekanan, karena itu mengungkap prioritas sebenarnya. Pilih target untuk periode berikutnya dan cara memeriksanya.

**4. Apa aturan kita untuk jalur ekspedit, dan siapa yang memutuskan?**
Bacakan aturan saat ini, atau catat bahwa tak ada. Minta tiga ekspedit terakhir dan uji masing-masing terhadap biaya keterlambatan yang dinyatakan. Bahas apa yang dilakukan tim ketika orang senior meminta lompatan yang gagal ujian, dan siapa yang mendukung keputusan itu.

**5. Ketika kita diinterupsi, berapa harga yang kita bayar setelah interupsi berakhir?**
Minta orang menjelaskan berapa lama waktu untuk kembali ke posisi dalam tugas setelah interupsi tipikal.

**6. Item tak terencana mana yang telah kembali lebih dari sekali, dan apa yang akan menghentikannya?**
Ambil kuartal terakhir item tak terencana dan cari pengulangan menurut sebab. Pilih yang total upayanya tertinggi dan telusuri mengapa ia berulang: peringatan yang hilang, cacat yang belum diperbaiki, langkah manual, atau masalah pemasok. Putuskan apakah ia masuk catatan masalah, backlog, atau percakapan dengan pemasok.

## Empat perspektif

### Tim produk dan pengiriman

Tim pengiriman merasakan pekerjaan tak terencana sebagai rencana yang rusak dan perkiraan yang bergeser. Mereka diuntungkan oleh pemberian tag saat penerimaan, potret perencanaan beku, dan perkiraan yang dibangun dengan penyangga berdasarkan riwayat (lihat topik 2.5, Metrik perkiraan dan perencanaan pengiriman). Catatan pergeseran menunjukkan kepada pemilik produk berapa biaya setiap permintaan terlambat.

### Tim layanan dan operasi

Tim operasi memikul sebagian besar pekerjaan menjalankan. Mereka butuh penangan interupsi bernama, aturan triase, dan jalur dari permintaan dan peringatan berulang ke perbaikan (lihat topik 5.5, Metrik kualitas pemantauan dan peringatan). Porsi pengulangan adalah argumen terkuat mereka untuk berinvestasi pada manajemen masalah.

### Kepemimpinan dan tata kelola

Pemimpin menetapkan alokasi sebenarnya lewat permintaan yang mereka buat dan tenggat yang mereka terima. Mereka sebaiknya meminta rasio dan sebab-sebabnya, mendanai pekerjaan perbaikan yang menyingkirkan interupsi berulang, dan menghindari memakai ekspedit sebagai cara normal menyelesaikan sesuatu.

### Pelanggan dan pengguna

Pelanggan melihat pekerjaan tak terencana sebagai gangguan, jawaban lambat, dan fitur tertunda. Mereka diuntungkan ketika tim punya ruang memperbaiki sebab, dan mereka butuh jalur adil untuk mengajukan urgensi. Perjanjian tingkat layanan (lihat [perjanjian tingkat layanan](https://en.wikipedia.org/wiki/Service-level_agreement)) sebaiknya mencerminkan beban interupsi yang dipikul tim (lihat topik 5.1, Metrik SLA, OLA, dan XLA).

## Dalam praktik: contoh ITIL agile

Departemen TI sebuah perusahaan asuransi kesehatan regional menjalankan platform klaim dengan satu tim produk beranggota tujuh dan service desk bersama. Tim membangun fitur baru dan juga mendukung platform di produksi. Semua angka dalam contoh ini bersifat ilustratif.

Selama enam pekan, keandalan komitmen terencana tim turun dari sekitar 85 persen menjadi 55 persen, dan pemilik produk mulai mempertanyakan estimasi tim. Ketua tim menarik riwayat pelacak. Memakai potret perencanaan beku, rasio pekerjaan tak terencana adalah 41 persen menurut hitungan pada periode terbaru, dibandingkan ingatan tim “mungkin seperlima.” Hitungan tak terklasifikasi 9 persen, jadi rasionya cukup tepercaya.

Memilah item tak terencana menurut sebab menunjukkan 14 dari 24 adalah pekerjaan menjalankan, dan dari itu, 9 ditelusuri ke satu pekerjaan batch pengajuan klaim yang gagal setelah perubahan format data oleh mitra dan dimulai ulang dengan tangan setiap kali. Porsi pekerjaan tak terencana berulang adalah 58 persen. Laju interupsi 6 per hari kerja, dan 4 di antaranya mencapai insinyur yang mengerjakan pekerjaan terencana, karena service desk mengeskalasi langsung kepada siapa pun yang menjawab pertama. Jalur ekspedit memegang dua item sekaligus pada kebanyakan hari, dan tingkat ekspedit adalah 23 persen. Pergeseran pekerjaan terencana adalah 7 item pada periode itu, 5 di antaranya membawa alasan “tergeser oleh pekerjaan tak terencana.”

Tim membuat empat keputusan bersama pemilik produk dan pemilik layanan. Pertama, satu insinyur pada satu waktu menjadi penangan interupsi dengan lingkup tertulis dan catatan serah terima, dan eskalasi hanya ke orang itu. Kedua, jalur ekspedit dibatasi satu item, dengan ujian masuk yang mensyaratkan biaya keterlambatan yang dinyatakan, dan setiap ekspedit mencatat item yang digesernya. Ketiga, kegagalan pekerjaan batch diangkat sebagai catatan masalah, dengan perbaikan dan percakapan dengan mitra ditaruh di backlog sebagai pekerjaan perbaikan, memakai 15 persen kapasitas, porsi yang dipilih tim sebagai alokasi pertamanya untuk perbaikan. Keempat, tim merencanakan periode pekerjaan berikutnya dengan penyangga yang ukurannya dari rentang atas porsi tak terencana terbaru, bukan dengan beban penuh.

Enam pekan kemudian, rasio pekerjaan tak terencana adalah 27 persen, porsi pengulangan 22 persen, laju interupsi yang mencapai pekerja terencana 1,5 per hari, dan keandalan komitmen terencana sekitar 78 persen (semuanya ilustratif). Tim belum mencapai 85 persen sebelumnya, dan mengatakannya.

Risiko manipulasi yang ditangkap tim: pada periode kedua di bawah susunan baru laju interupsi turun tajam, dan ketua tim memperhatikan bahwa orang mengirim pesan langsung kepada penangan, sehingga bantuan tak pernah masuk log. Membandingkan log dengan saluran penerimaan dan riwayat peringatan menunjukkan volume sebenarnya tak berubah. Tim sepakat bahwa penangan mengarahkan pesan langsung ke saluran penerimaan. Kesalahannya ada pada desain jalur, bukan pada orang mana pun.

## Sudut pandang sektor

**Startup.** Hampir semua pekerjaan terasa mendesak dan beberapa orang yang sama mengerjakan perubahan dan menjalankan. Jaga penggolongan pada dua tag dan tetapkan batas eksplisit pada ekspedit. Rasio tak terencana adalah bukti untuk mengatakan “kita bisa mengerjakan peta jalan atau beban dukungan, tidak keduanya.”

**Bisnis kecil.** Satu administrator atau tim kecil sering menangani setiap permintaan. Pakai jenis tiket alat sebagai penggolongan, catat interupsi selama sebulan untuk mempelajari polanya, dan sisihkan blok harian tetap untuk pekerjaan terencana. Minta pemasok laporan volume dan sebab berulang mereka.

**Perusahaan besar.** Pekerjaan tak terencana bagi satu tim sering pekerjaan terencana bagi tim lain. Sepakati definisi bersama, laporkan per tim dan per layanan, dan danai perbaikan di tingkat tempat sebabnya hidup (lihat topik 9.3, Metrik kolaborasi dan serah terima).

**Pemerintah dan sektor publik.** Kapasitas mungkin ditetapkan oleh batas jumlah pegawai, dan pekerjaan menjalankan mungkin ditetapkan undang-undang atau temuan audit. Jadikan ini bagian alokasi, dokumentasikan aturan penggolongan, dan simpan jejak audit (lihat topik 8.5, Pelaporan teregulasi dan pemerintah).

## Kasus bisnis: motivasi, ROI, dan TCO

Motivasinya adalah pengiriman yang dapat diprediksi: rencana yang mengabaikan beban interupsi meleset berulang kali, dan pekerjaan tak terencana yang terlihat memberi tim suara lebih kuat ketika meminta waktu untuk menyingkirkan sebab.

Biaya mengumpulkan ukuran ini sederhana bila tag dan potret perencanaan menjadi bagian alur kerja normal. Biaya utamanya adalah waktu menyepakati definisi, disiplin memberi tag saat penerimaan, sedikit perangkat untuk menggabungkan data pelacak dan ITSM (lihat topik 1.5, Sumber data dan instrumentasi), dan jam penangan interupsi, yang pekerjaan terencananya sendiri melambat. Menambah catatan waktu tingkat jam jauh lebih mahal dan sering dibenci, jadi tambahkan hanya jika hitungan item terbukti menyesatkan. Total biaya kepemilikan didominasi waktu orang, jadi hitunglah.

Imbal hasil tampak pada pola yang dapat diukur tim sendiri alih-alih angka asumsi. Cari porsi pekerjaan tak terencana berulang yang turun setelah perbaikan masalah, kenaikan keandalan komitmen terencana, lebih sedikit item terencana yang tergeser, dan lebih sedikit interupsi yang mencapai orang pada pekerjaan terencana. Di mana jam diketahui, upaya yang dipulihkan dari sebab berulang yang disingkirkan dapat dihargai pada biaya per jam tim sendiri dan dibandingkan dengan upaya perbaikannya (lihat topik 7.5, Biaya layanan dan ekonomi per unit, dan topik 7.7, Pengembalian investasi dan kasus bisnis). Jangan meminjam persentase industri untuk pekerjaan tak terencana; tak ada angka dari organisasi lain yang menggantikan riwayat Anda sendiri.

## Anti-pola dan jebakan

- **Memperlakukan semua pekerjaan tak terencana sebagai kegagalan.** Sebagian adalah layanan menjalankan tugasnya, dan target nol mendorong pekerjaan keluar dari log. Sebagai gantinya, tanyakan bagian mana yang diharapkan, mana yang dapat dihindari, dan tetapkan penyangga untuk yang pertama.
- **Budaya pahlawan.** Orang yang menyelamatkan setiap keadaan darurat menjadi tak tergantikan, lelah, dan titik kegagalan tunggal. Sebagai gantinya, bagi peran interupsi secara bergilir dan hargai penyingkiran sebab.
- **Semuanya ekspedit.** Jalur yang selalu penuh hanyalah antrean kedua. Sebagai gantinya, tetapkan batas, wajibkan biaya keterlambatan yang dinyatakan, dan tinjau ujian masuk bulanan.
- **Merencanakan pada utilisasi penuh.** Rencana tanpa kelonggaran menjamin setiap kejutan menggeser sesuatu. Sebagai gantinya, ukur penyangga dari riwayat interupsi Anda sendiri dan rencanakan kapasitas yang tersisa.
- **Menggolongkan sesudah kejadian.** Tag yang ditambahkan di akhir periode mencerminkan ingatan dan suasana hati. Sebagai gantinya, wajibkan tag saat penerimaan dan bekukan potret perencanaan.
- **Menyerap permintaan diam-diam.** Bantuan yang tak pernah masuk log membuat beban tak terlihat dan perencanaan salah. Sebagai gantinya, jadikan satu jalur penerimaan sebagai aturan dan arahkan permintaan saluran samping ke sana.

## Model kematangan

| Dimensi | 1 Memulai | 2 Berkembang | 3 Terstandar | 4 Terkelola | 5 Terorkestrasi |
| --- | --- | --- | --- | --- | --- |
| Penggolongan dan visibilitas | Pekerjaan tak diberi tag; pekerjaan tak terencana dirasakan, tidak dihitung | Beberapa tim memberi tag terencana dan tak terencana dengan kata sendiri | Satu definisi tertulis jenis pekerjaan dan bendera terencana, diterapkan saat penerimaan dengan potret perencanaan | Rasio tak terencana dan hitungan tak terklasifikasi diplot tren dan ditinjau tiap periode | Definisi dibagikan antartim dan pemasok, dan direvisi ketika tidak lagi memberi masukan bagi keputusan |
| Alokasi kapasitas | Kapasitas diasumsikan sepenuhnya tersedia untuk pekerjaan terencana | Penyangga kasar diterapkan beberapa tim | Pembagian yang disepakati antara perubahan, menjalankan, dan perbaikan, dengan penyangga dari riwayat | Kepatuhan ditinjau dan pembagian disesuaikan bersama pemilik produk dan layanan | Alokasi dinegosiasikan antartim yang berbagi platform, layanan, dan orang |
| Penanganan interupsi dan ekspedit | Siapa pun menginterupsi siapa pun; urgensi ditetapkan oleh senioritas | Kebiasaan orang piket atau baris mendesak ada di beberapa tim | Peran interupsi bernama, aturan triase, dan jalur ekspedit dengan batas dan ujian masuk | Tingkat ekspedit, pergeseran, dan laju interupsi ditinjau terhadap pagar pembatas | Perutean interupsi dan aturan ekspedit dikoordinasikan antartim, dengan siaga dan jalur eskalasi bersama |
| Penyingkiran sebab | Masalah yang sama berulang dan diperbaiki dengan heroisme | Beberapa pengulangan disadari dan dibahas dalam retrospektif | Item tak terencana membawa tag sebab dan pengulangan teratas masuk manajemen masalah | Porsi pengulangan dilacak dan perbaikan didanai sebagai pekerjaan perbaikan terencana | Sebab ditelusuri antartim, pemasok, dan pelanggan, dan perbaikan menjadi rutin |

## Daftar periksa

- [ ] Setiap item kerja membawa jenis pekerjaan (perubahan, menjalankan, perbaikan) dan bendera terencana, ditetapkan saat penerimaan.
- [ ] Definisi terencana, tak terencana, perubahan, dan menjalankan tertulis di kesepakatan kerja tim.
- [ ] Potret perencanaan dibekukan pada awal setiap periode dan disimpan.
- [ ] Rasio pekerjaan tak terencana dilaporkan sebagai tren, di samping hitungan tak terklasifikasi.
- [ ] Tim dan pemiliknya telah menyepakati alokasi kapasitas dan meninjaunya pada kuartal terakhir.
- [ ] Satu jalur penerimaan ada, dan permintaan saluran samping diarahkan ke sana.
- [ ] Peran interupsi dengan lingkup tertulis berotasi di antara tim.
- [ ] Jalur ekspedit punya batas, ujian masuk, dan catatan tentang apa yang digeser setiap ekspedit.
- [ ] Item tak terencana membawa tag sebab atau tautan catatan masalah, dan pengulangan ditinjau bulanan.
- [ ] Ukuran dilaporkan di tingkat tim dan layanan, dan tidak pernah dipakai untuk memeringkat individu.

## Prompt AI

**Rancang penggolongan pekerjaan untuk penerimaan.**

```text
Tim kami adalah [team description, for example a platform team of six that builds
and supports an internal service]. Kami memakai [tracker or ITSM tool]. Kami
ingin memberi tag setiap item saat penerimaan sebagai perubahan, menjalankan,
atau perbaikan, dan sebagai terencana atau tak terencana. Susun definisi satu
kalimat yang jelas untuk setiap nilai, tiga kasus tepi yang akan diperdebatkan
orang dengan saran putusan untuk masing-masing, dan formulir penerimaan singkat.
Jangan mengarang fitur alat kami atau nilai acuan. Daftar asumsi Anda dan
pertanyaan yang harus saya jawab untuk menyempurnakan definisi.
```

**Analisis log interupsi untuk mencari pola.**

```text
Berikut ringkasan interupsi kami selama [period]: [paste anonymized counts by
source, day, and type, with no names of individuals]. Kelompokkan menjadi sumber
yang dapat disingkirkan, dirutekan ke satu orang, dikelompokkan, atau diterima.
Untuk setiap kelompok, sarankan satu eksperimen dan satu ukuran apakah itu
berhasil. Jangan mengarang nilai acuan atau membandingkan kami dengan organisasi
lain. Daftar asumsi Anda dan data yang Anda butuhkan agar lebih yakin.
```

**Susun kebijakan jalur ekspedit.**

```text
Kami menjalankan [flow board, time-boxed planning, continuous flow, or a hybrid]
dengan tim beranggota [team size] dan tingkat layanan [service levels, if any].
Susun kebijakan ekspedit satu halaman dengan ujian masuk berdasarkan biaya
keterlambatan yang dinyatakan, batas item dalam jalur, aturan tentang apa yang
terjadi pada item yang digeser, dan daftar pertanyaan tinjauan bulanan. Jaga
bahasa netral dan hindari menyebut individu. Jangan mengarang ambang; tandai yang
harus saya pilih. Daftar asumsi Anda.
```

## Keterampilan AI

- [Skill Agile ITIL Metrics](../../../../skills/agile-itil-metrics-skill/SKILL.md): gunakan untuk menemukan topik mana yang memiliki metrik terkait, seperti volume insiden atau toil, dan pagar pembatas yang harus berada di sampingnya.
- [Skill pemelihara Agile ITIL Metrics](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gunakan untuk memeriksa bahwa versi topik ini yang disunting menjaga jam, aturan penggolongan, dan tabel manipulasinya tetap selaras.

## Poin penting

- Pekerjaan terencana dan tak terencana, serta pekerjaan perubahan dan menjalankan, berbagi satu kolam kapasitas, jadi buat pembagian terlihat dan sepakati dengan sengaja.
- Beri tag pekerjaan saat penerimaan dan bekukan potret perencanaan, karena “tak terencana” hanya bermakna terhadap rencana yang tercatat.
- Interupsi memakan waktu pemulihan selain menit, jadi rutekan ke peran bernama dan triase di pintu.
- Jalur ekspedit butuh batas, ujian masuk, dan catatan tentang apa yang digeser setiap ekspedit.
- Pekerjaan tak terencana berulang adalah sinyal terkuat bagi manajemen masalah dan pekerjaan perbaikan, dan porsi pengulangan menunjukkan apakah perbaikan mendarat.
- Laporkan di tingkat tim dan layanan, bandingkan tim dengan riwayatnya sendiri, dan jangan pernah memeringkat individu.

## Referensi dan bacaan lanjutan

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
