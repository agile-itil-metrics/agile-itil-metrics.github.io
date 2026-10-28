# Templat

Empat templat untuk disalin dan disesuaikan: piagam metrik, kartu metrik, spesifikasi dasbor, dan agenda tinjauan. Ini titik awal. Ganti teks dalam tanda kurung, buang yang tidak cocok, dan jaga tiap dokumen dalam satu halaman bila bisa.

## Piagam metrik

```text
Piagam metrik untuk [team, service, or organization]

Tujuan
Kami mengukur [services and ways of working] untuk [improve ... / see ... / decide ...].
Ukuran membantu kami melihat pekerjaan kami sendiri dan memperbaikinya. Ukuran
bukan cara untuk menghakimi individu.

Untuk apa data
- Tinjauan tim tentang bagaimana pekerjaan berjalan dan apa yang dicoba berikutnya.
- Keputusan tentang di mana berinvestasi pada layanan, perkakas, dan keterampilan.
- Pelaporan yang diwajibkan [regulators/customers]: [list, kept separate].

Untuk apa data tidak akan pernah dipakai
- Memeringkat atau membandingkan individu.
- Tinjauan kinerja individu, gaji, promosi, atau pemecatan.
- [Add the worries your teams raised.]

Siapa melihat apa
- Setiap tim melihat datanya sendiri lebih dulu, dan memiliki penafsirannya.
- [Role] melihat tren layanan dan tim yang diagregasi.
- Tampilan tingkat individu dimatikan di [tools].

Data yang disimpan
- [What is collected, from which systems, for how long.]

Tantangan
- Siapa pun boleh menantang angka. Kami menanggapi dalam [number] hari kerja.
- Kontak: [name or group].

Pelanggaran
- Laporkan pemakaian apa pun yang melanggar piagam ini ke [route]. Hasilnya
  diterbitkan tanpa nama.

Tinjauan
- Kami meninjau piagam ini setiap [six months] bersama tim.

Ditandatangani: [sponsor], [team representative(s)]   Tanggal: [date]
```

## Kartu metrik

```text
Kartu metrik: [metric name]

Pertanyaan yang dijawabnya: [the question the audience asked]
Keputusan yang diinformasikannya: [what someone might do differently]
Definisi: [plain words]
Rumus: [how it is calculated]
Satuan: [unit]   Periode: [how often]
Aturan jam atau batas: [when counting starts, stops, pauses]
Sumber data: [system and field]   Penyegaran: [interval]
Pemilik: [role]   Orang untuk ditanya: [name or group]
Audiens: [team, service owner, leadership]
Tingkat: [team, service, or system. Never an individual.]
Tampilan: [median and percentile, run chart, distribution]
Garis dasar: [period and value from our own data]
Batas yang diketahui: [gaps, changes in entry habits, sample size]
Vektor manipulasi: [how it could be made to look better without being better]
Pagar pembatas: [paired metric or practice]
Hasil pendamping: [the outcome it should be read with]
Topik terkait: (lihat topik [N.M], [Title])
Pensiun ketika: [condition]
Terakhir ditinjau: [date]   Perubahan sejak tinjauan terakhir: [notes]
```

## Spesifikasi dasbor

```text
Spesifikasi dasbor: [name]

Audiens: [team, service owner, leadership]
Pemilik: [role]   Irama tinjauan: [monthly or quarterly]   Tanggal tinjauan: [date]
Pertanyaan yang dijawabnya
1. [question]
2. [question]

Ukuran (tidak lebih dari sekitar sembilan)
| Ukuran | Pertanyaan | Pagar pembatas pendamping | Tampilan | Sumber | Penyegaran |
| [name] | [no.] | [name] | [sparkline / run chart / distribution] | [system] | [interval] |

Konteks yang ditunjukkan bersama setiap nilai
- Tren selama [period], catatan peristiwa, tautan definisi, ukuran sampel bila kecil.

Warna status
- [None, or the stated rule that allows for ordinary variation.]

Akses
- [Who may see what. Individual-level views: off.]

Pemeriksaan mutu data
- [Freshness, row counts, reconciliation with the source.]

Pensiun
- Laporan yang digantikan dasbor ini: [list] dipensiunkan pada [date].
- Ukuran yang dipensiunkan ketika: [conditions].

Disetujui audiens: [names or roles]   Tanggal: [date]
```

## Agenda tinjauan

Tinjauan tim 45 menit, bulanan atau kuartalan. Ini percakapan tentang pekerjaan, dipimpin tim.

```text
Tinjauan metrik untuk [team], [date]

1. Check-in (5 menit)
   Bagaimana pekerjaan berjalan? Adakah yang tidak akan ditunjukkan angka?

2. Peristiwa sejak terakhir kali (5 menit)
   Rilis, insiden, perubahan staf, perubahan kebijakan. Tambahkan catatan ke tampilan.

3. Tren dan distribusi (15 menit)
   Untuk tiap ukuran: Apa yang kita lihat? Apakah variasi biasa atau sinyal?
   Baca tiap ukuran bersama pagar pembatasnya. Periksa kesegaran data dan celah
   yang diketahui.

4. Keputusan (10 menit)
   Apa yang akan kita coba, hentikan, atau ubah? Catat tiap keputusan, termasuk
   keputusan untuk menunggu dan mengamati. Namai pemilik dan tanggal untuk
   melihat lagi.

5. Keputusan terakhir (5 menit)
   Apakah keputusan terakhir membantu? Apa yang kita pelajari?

6. Ukuran itu sendiri (5 menit)
   Ukuran mana yang membingungkan atau menyesatkan kita? Mana yang dapat kita
   pensiunkan? Apa yang hilang?

Catat: keputusan, pemilik, tanggal, perubahan pada ukuran.
Aturan: tidak ada perbandingan individu. Angka menggambarkan sistem.
```
