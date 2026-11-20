# Değer akışı metrikleri

**Bir değer akışını uçtan uca ölçün, her aşamayı işe dokunulan süre ve işin beklediği süre olarak ayırın ve ne kadarının kullanılabilir geldiğini sayın; çünkü bir hizmet kuruluşunda en büyük gecikmeler ve en büyük yeniden iş takımların içinde değil, aralarında yer alır.**

## Genel bakış ve motivasyon

Çoğu takım kendi aşamasını ölçer. Hizmet masası kapatılan kayıtları, bir geliştirme takımı bitirilen hikâyeleri, bir değişiklik kurulu onaylanan değişiklikleri raporlar. Her sayı sağlıklı görünebilirken bir şey isteyen kişi haftalarca bekler. Neden yapısaldır: tipik bir talepte geçen sürenin çoğu kuyruklarda ve devir tesliminde harcanır ve hiçbir tek takım bu zamanın sahibi değildir.

[Değer akışı](https://en.wikipedia.org/wiki/Value_stream), bir talebin teslim edilmiş değere dönüştüğü adımlar dizisidir. [Değer akışı haritalama](https://en.wikipedia.org/wiki/Value-stream_mapping), [yalın imalat](https://en.wikipedia.org/wiki/Lean_manufacturing) içinde geliştirilen ve sonradan ofislere, hastanelere ve yazılıma uygulanan; bir sürecin başlangıcından müşteriye kadar her adımı çizen ve her aşamada zamanı ve hacmi kaydeden tekniktir. Harita, mevcut durumun bir resmi ve ardından daha iyi bir gelecek durumun bir resmidir. Haritadaki sayılar bu konunun konusudur.

İki sözlük burada buluşur. Information Technology Infrastructure Library’nin dördüncü sürümü olan ITIL 4’te değer akışı, belirli bir ürün ya da hizmeti yaratmak üzere düzenlenmiş [ITIL](https://en.wikipedia.org/wiki/ITIL) hizmet değer zinciri etkinliklerinin (planlama, iyileştirme, ilgilenme, tasarım ve geçiş, edinme ve inşa, sunma ve destek) belirli bir bileşimidir. Örnekler “bir olaydan sonra hizmeti geri getirmek” ve “bir değişikliği fikirden üretime teslim etmek”tir. ITIL size bir akışın ne olduğunu ve kimin dahil olması gerektiğini söyler. Yalın size onu nasıl ölçeceğinizi söyler. Çevik karşılığı, akışı yöneten takımların çevrim süresi gibi ölçümlerle zaten izlediği, iş öğelerinin bir pano boyunca akışıdır (bkz. Konu 2.1 “Akış ölçümleri”).

Yalın ölçümler azdır. **Teslim süresi**, bir talebin yapıldığı andan teslim edildiği ana kadar geçen toplam süredir. **İşlem süresi**, bazen dokunma süresi de denir, birinin öğe üzerinde etkin biçimde çalıştığı süredir. **Bekleme süresi**, öğenin etkin işler arasında, bir kuyrukta, bir onayda ya da bir devir teslimde durduğu süredir. **Tamamlanmış ve doğru yüzdesi (%C/A)**, bir sonraki aşamanın, düzeltmek, tamamlamak ya da geri göndermek zorunda kalmadan geldiği gibi kullanabildiği öğelerin payıdır. **Takt süresi**, akışın müşteri talebiyle eşleşmek için öğeleri tamamlaması gereken hızdır; kullanılabilir çalışma süresinin o sürede talep edilen öğe sayısına bölünmesiyle hesaplanır. İşlem süresinin teslim süresine oranı **süreç verimliliğidir**; bu kitap onu akış verimliliğinin değer akışı biçimi olarak ele alır (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”).

İki ilişki sayıları birlikte yararlı kılar. Birincisi, [teslim süresi](https://en.wikipedia.org/wiki/Lead_time), her aşamadaki işlem süresi ile bekleme süresinin toplamıdır; dolayısıyla teslim süresi haftalar, işlem süresi günler olan bir akış çoğunlukla kuyruktur. [Little yasası](https://en.wikipedia.org/wiki/Little%27s_law) bu kuyruğu devam eden işe ve çıktı hızına bağlar; bu yüzden Konu 2.3 (“Devam eden iş ve kuyruklar”) doğal yoldaştır. İkincisi, %C/A bileşik etki yapar. Her aşamanın çıktısının yüzde 90’ını temiz geçirdiği beş aşamalı bir akış, yalnızca yaklaşık yüzde 59 oranında temiz bir sonuç teslim eder; imalatta [döngülenmiş verim](https://en.wikipedia.org/wiki/Rolled_throughput_yield) (rolled throughput yield) olarak bilinen bir çarpım. Tek aşamalı raporların hepsi yüzde 90 der. Akış çok daha az rahatlatıcı bir şey söyler.

## Temel ilkeler

- **Müşterinin talebinden başlayın ve müşterinin kullanımında bitirin.** “İş başladı”dan “iş birleştirildi”ye kadar ölçülen bir akış, çoğu zaman en uzun kısım olan iki uçtaki beklemeyi gizler.
- **Her aşamada dokunma süresini bekleme süresinden ayırın.** Tek bir aşama süresi ikisini harmanlar ve iyileştirme çabasını yanlış yere gönderir. Bekleme genellikle akışın bir tasarım özelliğidir, emek eksikliği değil.
- **Kaliteyi, hızın yanı sıra tamlık ve doğruluk olarak ölçün.** İşi geri gönderen hızlı bir aşama akışın terimleriyle yavaştır, çünkü yeniden iş kapasiteyi tüketir ve beklemeyi artırır.
- **Bir seferde bir akışı ve bir öğe sınıfını haritalayın.** Acil değişiklikleri rutin taleplerle karıştıran bir harita, hiçbirini tanımlamayan bir ortalama üretir.
- **Dağılımları raporlayın ve örneği gösterin.** Teslim süresi ve bekleme süresi çarpıktır; bu yüzden medyanı ve yüksek bir yüzdeliği gösterin ve kaç öğe ve hangi dönem olduğunu söyleyin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).
- **Akışları tanımlayın, asla insanları.** Aşama metrikleri işin nerede beklediğini belirler. Her aşamadaki bireylerin ya da takımların sıralaması asla değildir.

## Metrik tanımları

Aşağıdaki metrikler adlandırılmış tek bir değer akışı ve tek bir iş sınıfı için tanımlanır. Öğe sayıları, aksi belirtilmedikçe iptal edilen öğeleri hariç tutar. İşlem süresi ve bekleme süresi her aşama için raporlanır ve akış için toplanır.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Değer akışı teslim süresi | Müşterinin talebinden müşterinin sonucu kullanabilmesine geçen süre | Teslim onayının zamanı eksi talebin kaydedildiği zaman; iptal edilen ya da geri çekilen öğeler hariç tutulur; medyanı ve 85. ile 95. yüzdelikleri raporlayın | gün | İş hattından ya da karşılama sisteminden teslim olaylarıyla birleştirilmiş ITSM aracı kayıtları | Hizmet talebi yönetimi; değişiklik yetkilendirme | Takım panosunda teslim süresi | Aylık |
| İşlem süresi | Bir öğenin, aşama başına ve akış için, etkin biçimde üzerinde çalışıldığı süre | Öğenin etkin bir durumda olduğu aralıkların toplamı, aşama başına; kuyruk, onay bekleme ve engellenmiş durumlar hariç tutulur | saat ya da gün | İzleyici durum geçmişi; durumlar fazla kaba olduğunda süre kayıtları | Olay yönetimi; hizmet talebi yönetimi | “Devam ediyor” sütunlarında çevrim süresi | Aylık |
| Bekleme süresi | Bir öğenin, aşama başına ve akış için, etkin işler arasında durduğu süre | Aşama geçen süresi eksi o aşamanın işlem süresi; kuyrukları, onayları, devir teslimleri ve engellenmiş süreyi içerir | gün | İzleyici durum geçmişi ve ITSM aracı durum değişiklikleri | Değişiklik yetkilendirme; hizmet masası | Kuyruk sütunlarında geçen süre; engellenmiş süre | Aylık |
| Süreç verimliliği | Teslim süresinin işlem süresi olan payı | Aşamalar boyunca işlem süresi toplamı / aynı öğeler için değer akışı teslim süresi; hâlâ açık öğeler hariç tutulur | yüzde | İşlem süresinden ve teslim süresinden türetilir | Sürekli iyileştirme | Akış verimliliği | Üç aylık |
| Tamamlanmış ve doğru yüzdesi (aşama) | Bir aşamanın düzeltme, tamamlama ya da iade olmaksızın kullanabildiği, aldığı öğelerin payı | Geldiği gibi kabul edilen öğeler / dönemde alınan öğeler; herhangi bir nedenle iade edilen öğeler kabul edilmemiş sayılır | yüzde | İzleyicideki ya da ITSM aracındaki iade ve yeniden açma olayları; örneklenmiş kabul incelemeleri | Hizmet talebi yönetimi; değişiklik yetkilendirme; sorun yönetimi | Hazır olma tanımı; yeniden iş oranı | Aylık |
| Döngülenmiş tamamlanmış ve doğru yüzdesi | Her aşamayı temiz geçen öğelerin payı | Bir akış ve dönem için aşama %C/A değerlerinin çarpımı (örneğin 0,90 x 0,85 x 0,95); akışın dışındaki aşamalar hariç tutulur | yüzde | Aşama değerlerinden türetilir | Sürekli iyileştirme | Bir iş hattı boyunca kaçak hata ve yeniden iş oranı | Üç aylık |
| Devir teslim sayısı | Bir öğenin takımlar ya da kuyruklar arasında geçiş sayısı | Talepten teslime, öğe başına sahip takım ya da kuyruk değişikliklerinin sayısı; medyanı ve 85. yüzdeliği raporlayın | sayı | ITSM aracındaki ya da izleyicideki atama geçmişi | Hizmet masası; hizmet talebi yönetimi | Takımlar arası bağımlılıklar | Üç aylık |
| Takt süresi oranı | Akışın hızının talebi karşılayıp karşılamadığı | Tamamlanmalar arasında gözlenen medyan aralık / takt süresi; burada takt süresi, kullanılabilir çalışma süresinin aynı dönemde talep edilen öğe sayısına bölümüdür; 1’in üzerindeki bir oran, akışın talepten yavaş olduğu anlamına gelir | oran | Giriş kuyruğundan talep sayısı ve tamamlanma olayları | Kapasite ve performans yönetimi; hizmet düzeyi yönetimi | Talebe karşı çıktı hızı; tahmin | Üç aylık |

İşlem süresi, bekleme süresi ve aşama teslim süreleri aynı öğe kümesi üzerinde toplamlar ve oranlardır; bu nedenle öğe düzeyindeki kayıtlardan hesaplanır ve asla farklı örneklerde ölçülmüş aşama ortalamalarını toplayarak değil. Takt süresi en çok standart talepler ve rutin değişiklikler gibi tekrarlanabilir işe uyar; her öğenin benzersiz olduğu iş için kötü bir uyumdur.

## Öneriler

### Akışı seçin

**1. Değerli bir akış ve bir öğe sınıfı seçin ve sınırlarını adlandırın.** İyi ilk adaylar, erişim ya da ekipman tedariki gibi yüksek hacimli bir talep türü ya da normal bir değişikliğin onaydan canlıya yoludur. Saati başlatan tetikleyiciyi ve müşteriye teslimi doğrulayan olayı yazın. İkisini de birer cümleyle ifade edemiyorsanız akış henüz tanımlanmamıştır (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”).

**2. Saati müşterinin talebinde başlatın ve müşterinin kullanımında durdurun.** Takım işi kabul ettiğinde başlayan ve takım onu bitti işaretlediğinde duran bir akış, giriş kuyruğunu ve onay gecikmesini hariç tutar. Bunlar sıklıkla en uzun beklemelerdir. Gerçek sınırlar için veri henüz toplanmıyorsa daha dar ölçümü dürüst bir etiketle raporlayın ve enstrümantasyonu planlayın (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

### Mevcut durumu haritalayın

**3. Akışı işi yapan insanlarla yürüyün.** Müşteri tarafı dahil her aşamadan bir temsilciyle bir haritalama oturumu yapın. Adımları gerçekte olduğu gibi çizin, sonra belgelenmiş süreçle karşılaştırın. İkisi arasındaki boşluklar kendi başlarına bulgulardır. Yöntem, Rother ve Shook’un *Learning to See* kitabında ve Martin ile Osterling’in *Value Stream Mapping* kitabında açıklanır.

**4. Her aşama için işlem süresini ve bekleme süresini gerçek öğelerden kaydedin.** Yakın zamandaki öğelerden bir örnek alın, hacim izin veriyorsa 20 ya da daha fazlasını, ve her birini izleyici geçmişini ve gerektiğinde bir konuşmayı kullanarak akış boyunca izleyin. Her aşamadan önceki dokunma süresini ve beklemeyi kaydedin. Örneği bir tahmin olarak ele alın ve nasıl çekildiğini söyleyin. Akış haritayı geçersiz kılacak kadar değiştiğinde haritalamayı yineleyin.

**5. Beklemeyi kendi çubuğu olarak gösterin.** Haritada ve panoda her aşama için işlem süresini ve bekleme süresini ayrı bölümler olarak çizin. 30 dakika işlem süresi ve dört gün beklemesi olan bir aşama, dört gün işlem süresi olan bir aşamaya hiç benzemez; oysa aşama süresi aynıdır.

### Kaliteyi akış boyunca ölçün

**6. %C/A’yı devir tesliminde, alıcı aşamanın tanımladığı biçimde ölçün.** “Geldiği gibi kullanılabilir”in ne anlama geldiğine alıcı takım karar verir; ideal olarak kısa bir yazılı kabul koşuluyla. Bir iadeyi, eksik bilgi için bir isteği ya da sessiz bir düzeltmeyi kabul edilmemiş sayın. Sessiz düzeltme en yaygın sızıntıdır, çünkü iş, kimse bozuk olduğunu kaydetmeden düzeltilir.

**7. Döngülenmiş %C/A’yı hesaplayın ve aşama değerleriyle karşılaştırın.** Aşama değerlerini çarpın. Döngülenmiş rakamla en iyi görünen aşama arasındaki fark, yeniden işin bileşik etkisidir ve çoğu zaman bir devir teslimi düzeltmenin gerekçesini herhangi bir hız ölçümünden daha iyi kurar. Bunu aynı akış için yeniden iş ve değişiklik başarısızlığı ölçümlerine bağlayın (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”).

### Sayıları karar vermek için kullanın

**8. Önce en büyük beklemeyi iyileştirin ve nedenini arayüzde arayın.** Aşamaları bekleme süresine göre sıralayın, sonra bekleyen öğenin neyi beklediğini sorun: bir karar, bir kişi, bir parti, planlı bir aralık ya da eksik bir girdi. Sonra o beklemenin gerekli olup olmadığını sorun. [Kısıtlar kuramı](https://en.wikipedia.org/wiki/Theory_of_constraints), akışın hızının en dar aşamasınca belirlendiğini savunur; bu yüzden kısıt olmayan bir aşamayı iyileştirmek çok az şey değiştirir. Değişiklik yetkilendirmedeki onay beklemeleri sık görülen bir durumdur (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

**9. Aşamaları eniyilemeden önce devir teslimleri azaltın.** Her devir teslim bir kuyruk, bir bağlam değişikliği ve eksik bilgi için bir fırsat ekler. Devir teslimleri sayın, sonra bir aşamanın birleştirilip birleştirilemeyeceğini, bir kararın işi yapan takıma devredilip devredilemeyeceğini ya da standart bir talebin önceden yetkilendirilip yetkilendirilemeyeceğini sınayın. ITIL 4, standart değişiklikleri önceden yetkilendirilmiş, düşük riskli değişiklikler olarak tanımlar; bu, değişiklik akışına uygulanan tam olarak bu hamledir.

**10. Talebi ve hızı yalnızca tekrarlanabilir iş için takt süresiyle karşılaştırın.** Takt süresini dönem için gerçek talep verisinden hesaplayın, sonra akışın öğeleri gerçekte tamamladığı aralıkla karşılaştırın. Takttan yavaş bir akış bir kuyruk büyütür ve Little yasası size bunun kabaca ne kadar hızlı olduğunu söyler. Takttan çok daha hızlı bir akışın, başka yöne çevrilebilecek boşluğu vardır. Takt süresini bireyler için hedef koymakta kullanmayın.

### Ölçümü dürüst tutun

**11. Veriyi araçlar arasında birleştirin ve neyin tahmin edildiğini söyleyin.** Akış genellikle ITSM aracını, sorun izleyiciyi ve iş hattını keser. Bir öğe tanımlayıcısı üzerinde birleştirin, birleştirme kuralını belgeleyin ve hangi aşamaların sistem olaylarından, hangilerinin örneklemeden geldiğini işaretleyin. Tahmin olarak etiketlenmiş bir tahmin, kaynağı bilinmeyen kesin görünümlü bir sayıdan çok daha yararlıdır.

**12. Haritayı üç ayda bir gözden geçirin ve her seferinde ham öğeleri okuyun.** Takımlar yeniden düzenlendikçe ve araçlar değiştikçe akışlar kayar. Haritayı ve bir kararı, her aşamanın temsil edildiği kalıcı bir incelemenin gündemine koyun (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşlenen koruma çizgisi metriği ya da uygulaması |
| --- | --- | --- |
| Değer akışı teslim süresi | Saati daha geç başlatmak, örneğin talep yerine triyajda; müşteri kullanamadan öğeleri kapatmak; bir talebi birkaç küçük talebe bölmek | Metrik sicilinde yazılı sabit saat kuralları; teslimin müşteri tarafından onaylanması; yeniden açılan öğelerin ve bağlı alt öğelerin sayısı |
| İşlem süresi | İşlem süresi yükselsin ve akış verimli görünsün diye boşta ya da engellenmiş durumları etkin kaydetmek; ya da meşgul görünmek için beklemeleri iş olarak kaydetmek | Bir öğe örneğinin gözlenmesi; işlem süresinin varsa süre kayıtlarıyla karşılaştırılması; durum tanımlarının takımla gözden geçirilmesi |
| Bekleme süresi | Beklemeyi, bir yan konuşma, bir elektronik tablo ya da saati durduran bir “beklemede” durumu gibi izlenmeyen bir duruma taşımak | Duraklatma ve engellenmiş durumların kullanımını raporlamak; kayıt yaşını aşama zaman damgalarıyla karşılaştırmak; sistem dışı beklemeler için öğeleri örneklemek |
| Süreç verimliliği | Ölçülen öğeler için hızlandırılmış ele almayla teslim süresini küçültmek ya da oranı yükseltmek için işlem süresini şişirmek | Teslim süresini ve işlem süresini oranın yanında göstermek; hızlandırılmış payı raporlamak; oranın kendisi için asla hedef koymamak |
| Tamamlanmış ve doğru yüzdesi (aşama) | Alıcı aşamanın daha az öğe iade edilsin diye kabul çıtasını düşürmesi ya da gönderen aşamanın işi gayriresmî geçici çözümlerle itmesi | Yazılı kabul koşulu; aşağı akıştaki hata ve yeniden iş sayıları; kabul edilen öğelerin bir üçüncü taraf tarafından incelenen örneği |
| Döngülenmiş tamamlanmış ve doğru yüzdesi | İadelerin bir aşamanın içinde gerçekleşip devir teslim sayısından kaybolması için aşamaları birleştirmek; elverişli bir aşama listesi seçmek | Aşama listesini önceden sabitlemek; aşama değişikliklerini karar günlüğünde raporlamak; bütün akış için yeniden iş oranıyla karşılaştırmak |
| Devir teslim sayısı | Sayılan sahip değişikliklerinden kaçınmak için öğeleri paylaşılan bir kuyruğa ya da her şeye sahip bir sahibe yeniden atamak; devir teslimleri, birkaçını kapsayan tek bir “takım” içinde gizlemek | Kuyruğa ve role göre saymak; örneklenen öğelerin atama geçmişini okumak; öğe başına yeniden atama sayısını izlemek |
| Takt süresi oranı | Ertelenen ya da reddedilen talebi talep edilmemiş saymak; kısmi tamamlanmaları tamamlanma saymak | Talebi, reddedilen talebi ve birikim listesi yaşını oranın yanında raporlamak; tamamlanmaları yalnızca müşteri onayladığında saymak |

Sağlıklı bir okuma, örnek karşısında makul görünen teslim süresi ve işlem süresi, görünür biçimde daha büyük kısım olan ve yavaş yavaş küçülen bekleme süresi, arkasında yazılı bir kabul koşulu olan %C/A değerleri ve yalnızca gerçek bir karar ya da adım kaldırıldığında düşen devir teslimler gösterir. Döngülenmiş %C/A düşerken teslim süresi iyileşiyorsa akış, maliyeti aşağıya taşıyarak işi daha hızlı itiyordur; bu, koruma çizgilerinin yakalamak için var olduğu örüntüdür (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Örnekle atölye tabanlı haritalama | Hızlıdır, bütün akışı gösterir, takımlar arasında ortak anlayış kurar | Hızla eskiyen bir anlık görüntüdür; örnek yanlılığı; dürüst katılımcılara bağlıdır |
| Araç olaylarından otomatik ölçüm | Sürekli, nesnel; yüzdelikleri ve eğilimleri destekler | Yalnızca araçların kaydettiğini görür; sistem dışı beklemeler ve sessiz düzeltmeler görünmezdir |
| Uçtan uca müşteri sınırları | Deneyimi yansıtır; giriş ve onay gecikmelerini ortaya çıkarır | Birkaç sistemden veri ve paylaşılan bir öğe tanımlayıcısı gerektirir |
| Takt süresi ve talep karşılaştırması | Hızı gerçek talebe bağlar; kuyruk büyümesini öngörülebilir kılar | Benzersiz, tekrarlanamayan iş için zayıftır; güvenilir talep sayımları gerektirir |
| Döngülenmiş %C/A | Yeniden işin devir teslimler boyunca nasıl bileşik etki yaptığını gösterir | Kabul koşulları üzerinde anlaşma gerektirir; tanımlar üzerine tartışmak kolaydır |

Akışın biçimini öğrenmek için haritalama atölyesini, onu izlemek için otomatik ölçümü kullanın. Takım sınırı ölçümlerini girdi olarak, müşteri sınırı ölçümlerini hüküm olarak kullanın. Yaklaşımın maliyeti, zorladığı takımlar arası konuşmadır; bu aynı zamanda başlıca faydasıdır.

## Takımınızla tartışılacak sorular

**1. En yaygın talebimizde müşterinin saati nerede başlıyor ve duruyor ve raporumuz bununla uyuşuyor mu?**
Bir talep türü seçin ve bir beyaz tahtada, müşteri sorduğu andan sonucu kullanabildiği ana kadar izleyin. Mevcut raporumuzun saymaya nerede başladığını ve durduğunu işaretleyin. Kolaylaştırıcı her uçtaki boşluğa bakmalıdır, çünkü giriş kuyrukları ve onay gecikmeleri rutin biçimde dışarıda bırakılır. Raporu değiştirmek ya da kısmi bir görünüm olarak etiketlemek konusunda anlaşın.

**2. Akışımızdaki her aşama için geçen sürenin ne kadarında biri öğe üzerinde çalışıyor?**
Yakın zamandan beş öğe alın ve her birinin geçmişini yeniden oluşturun. Her aşama için dokunma süresini ve beklemeyi tahmin edin ve toplamları karşılaştırın. Çoğu grup, geçen sürenin ne kadar küçük bir kısmının iş olduğuna şaşırır. Her uzun beklemenin neyi beklediğini sorun ve genellikle “insanlar meşgul” olan ilk yanıta direnin. Hangi beklemelerin kapasite sınırlarından çok tasarım tercihlerine benzediğini kaydedin.

**3. Bir sonraki aşama bizden neye ihtiyaç duyuyor ve eksik olduğunu nasıl bilirdik?**
Alıcı aşamanın bir temsilcisinden kabul koşulunu sade sözlerle belirtmesini isteyin. Bunu gönderen aşamanın sağladığını düşündüğüyle karşılaştırın. Son ayda işin iade edildiği, başkası tarafından tamamlandığı ya da sessizce düzeltildiği sayıları sayın. Tartışma çoğu zaman yinelenen bir iadeyi ortadan kaldıran küçük bir kontrol listesi üretir.

**4. Hangi devir teslimler ihtiyaçtan değil tarihçeden dolayı var?**
Haritadaki devir teslimleri sıralayın ve her birinin neden var olduğunu sorun. Bazıları gerçektir: bir beceri, bir kontrol, görevlerin ayrılığı. Diğerleri, yıllar önce bir takım sınırı çizildiği için sürer. Kaldırılacak, devredilecek ya da önceden yetkilendirilecek bir devir teslim seçin ve kimin onay vermesi gerektiğini adlandırın.

**5. Herkesin şikâyet ettiği aşamayı iyileştirsek müşteri fark eder miydi?**
En çok dikkat çeken aşamayı en uzun beklemeyi tutan aşamayla karşılaştırın. Kısıtlar kuramı, kısıt olmayanı iyileştirmenin müşteri için çok az şey değiştirdiğini ileri sürer. En gürültülü aşamanın aynı zamanda en yavaş olması için neyin doğru olması gerekeceğini sorun. Kolaylaştırıcı, grubun yanıtı veriyle nasıl sınayacağı konusunda anlaşmasına yardım etmelidir.

**6. Biri bu akışı daha iyi yapmadan daha iyi göstermeyi nasıl başarırdı?**
Oyunlaştırma vektörleri tablosunu grupla birlikte gözden geçirin. Her metrik için baskı altındaki bir kişinin ne yapabileceğini ve yapsa takımın ne göreceğini sorun. Hangi koruma çizgisi okumasının her seferinde gözden geçirileceği ve kimin sahip olduğu konusunda anlaşın. Amaç, suçlu aramak değil, ortak bir denetleme alışkanlığıdır.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları genellikle kendi aşamalarını net, akışı kötü görür. Bir değer akışı görünümü onlara, biten bir değişikliğin inceleme, onay, yayın aralığı ya da dağıtım penceresi için ne kadar beklediğini ve bunun ne kadarının denetimleri dışında olduğunu gösterir. Devir tesliminde %C/A’dan yararlanırlar, çünkü “kötü gereksinimler” ya da “geç incelemeler” hakkındaki belirsiz şikâyetleri sayılmış olaylara dönüştürür. Kendi çevrim sürelerini, alıcı aşama pahasına iyileştirmekten kaçınmalıdırlar (bkz. Konu 2.8 “DORA metrikleri”).

### Hizmet ve operasyon takımları

Operasyon takımları kuyrukların çoğuna sahiptir: hizmet masası girişi, değişiklik onayı, yayın çizelgesi, nöbet devri. Önceden yetkilendirilmiş standart değişikliklerden, gelen iş için net kabul koşullarından ve hangi devir teslimlerin en çok bekleme eklediğine dair bir görünümden yararlanırlar. Ayrıca bir %C/A ölçümünde alıcı aşama olmayı ve eksiksiz bir devir tesliminin neye benzediğini tanımlamayı beklemelidirler. Öğeleri çoğu zaman kendi katı saatlerini taşır; bu yüzden akış ölçümü hizmet düzeyi ölçümlerinin yanında yer alır, onların yerini almaz.

### Liderlik ve yönetişim

Liderler takımlar arası değişikliği destekler ve bir akışın adlandırılmış bir sahibi olup olmadığına karar verir. Aşama aşama bir puan kartı yerine, akışın müşteri açısından teslim süresini ve en büyük beklemeyi istemelidirler. İşi onaylayan yönetişim organları kendileri de aşamalardır ve bekleme süreleri haritada yer alır. İşlem süresinin teslim süresine oranı üzerinde hedef koymak yukarıda anlatılan vektörleri davet eder; bu yüzden onu incelemeyi yönlendirmek için kullanın (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”).

### Müşteriler ve kullanıcılar

Müşteriler teslim süresini ve yeniden işi deneyimler ve aşamaları nadiren görürler. En yararlı katkıları sonucun ne zaman kullanılabilir olduğunu onaylamak ve onu elde etmek için ne yapmaları gerektiğini, örneğin bir formu yeniden göndermeyi, söylemektir. Müşteriye yönelik raporlar saatin başlangıcını ve bitişini sade sözlerle belirtmelidir. Akış dürüst bir medyan ve yüksek bir yüzdelik yayımladığında müşteriler ayrıca yararlanır, çünkü yalnızca medyana dayalı bir vaat birkaç talepten birini hayal kırıklığına uğratır.

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir sigorta şirketinin BT departmanı, poliçe yönetim platformuna normal değişiklikler teslim eder. İş tarafındaki müşteriler “küçük değişikliklerin bir aydan uzun sürdüğünden” şikâyet eder. Bu örnekteki bütün sayılar örnekleyicidir.

Departman akışı, bir iş sahibinin bir değişiklik talebi gönderdiği andan sahibin değişikliğin canlıda olduğunu onayladığı ana kadar haritalar. Yakın zamandaki 20 normal değişiklikten oluşan bir örnek, aşama başına örnekleyici medyan değerler kullanılarak aşağıdaki aşama tablosunu verir.

| Aşama | İşlem süresi (gün) | Bekleme süresi (gün) | %C/A (örnekleyici) |
| --- | --- | --- | --- |
| Giriş ve triyaj | 0,5 | 6 | 85 |
| İnşa | 1,5 | 5 | 90 |
| Test | 0,5 | 8 | 80 |
| Değişiklik onayı | 0,25 | 9 | 70 |
| Dağıtım ve onay | 0,25 | 4 | 95 |
| Akış toplamı | 3,0 | 32 | 41 (döngülenmiş) |

Örnekteki akış teslim süresi yaklaşık 35 gündür; dolayısıyla süreç verimliliği kabaca yüzde 9’dur. Döngülenmiş %C/A, beş aşama değerinin çarpımı olarak yaklaşık yüzde 41’dir; yani değişikliklerin yarısından azı her aşamayı iade almadan geçer. Değişiklik onayı aşaması yalnızca %C/A’ya göre mütevazı görünür, ancak 9 günlük beklemesi en uzun tek kuyruktur ve değişikliklerin yüzde 30’u oraya eksik risk bilgisiyle gelir ve kurul bunları geri gönderir.

Takım iki karar alır. Birincisi, en sık görülen on düşük riskli değişiklik türünü önceden yetkilendirilmiş prosedürlü standart değişiklikler olarak sınıflandırır; böylece kurulu atlarlar. İkincisi, giriş formuna kurulun hep sorduğu risk alanlarını ekler ve kurulla kısa bir kabul kontrol listesi üzerinde anlaşılır. Bu seçimler, takımdan “daha hızlı gitmesinin” istendiği inşa aşamasına değil, en büyük beklemeye ve en büyük bileşik iadeye yöneliktir.

Üç ay sonra örneklenen sınıf için medyan teslim süresi düşer ve onay beklemesi küçülür; döngülenmiş %C/A ise yükselir. Oyunlaştırma riski üçüncü ayda ortaya çıkar. Bir ürün takımı, küçük öğeler standart değişiklik olarak nitelik kazandığı için birkaç talebi iki ya da üç daha küçük talebe böler ve öğe başına teslim süresi keskin biçimde düşer. İnceleyici, bağlı alt öğelerin sayısının arttığını ve asıl talep başına müşteri onayının iyileşmediğini fark eder. Departman teslim süresini korur, ancak öğeyi müşterinin asıl talebi olarak yeniden tanımlar; böylece bölmeler artık yardımcı olmaz. Karar günlüğü tanım değişikliğini kaydeder ve önceki çeyreği aynı kuralla yeniden ifade eder.

## Sektör mercekleri

**Girişim (startup).** Az sayıda devir teslimi olan kısa bir akışın haritalanacak çok az şeyi vardır ve en yararlı ölçüm yalnızca müşteri talebinden müşteri kullanımına geçen süredir. Akışı bir duvara çizin, ham öğeleri okuyun ve takım büyüdükçe ortaya çıkan ilk devir teslimi izleyin. Akış kararlı hâle gelmeden araç kurmaya direnin.

**Küçük işletme.** Bir ya da iki kişi çoğu zaman birkaç aşamayı üstlenir; bu yüzden devir teslimler takımlar arasında değil roller ya da araçlar arasındadır. İzleyici ya da hizmet masası raporları teslim süresini ucuza verir ve on öğelik bir örnek beklemeyi ortaya çıkarır. Yönetilen hizmet sağlayıcısı gibi tedarikçilerden aşama sürelerini isteyin, çünkü tedarikçinin kuyruğu çoğu zaman en uzun beklemedir.

**Büyük kurum.** Birçok takımlı ve onay kapılı uzun akışlar, döngülenmiş %C/A ve devir teslim sayısının en çok karşılığını verdiği yerlerdir. Her büyük akışa bir sahip atayın, her aşama temsil edilerek birlikte haritalayın ve araçların birleştirilebilmesi için paylaşılan bir öğe tanımlayıcısı kullanın. Farklı bölümler aynı sözcükleri farklı saatler için kullanacaktır; bu yüzden ölçüm başına tek bir tanım yayımlayın ve bir değişiklik günlüğü tutun.

**Devlet ve kamu sektörü.** Yasal onaylar, satın alma adımları ve denetim kontrolleri, kaldırılamayan meşru aşamalar oluşturur ve çoğu zaman en uzun beklemeleri tutar. Bunları dürüstçe haritalayın, zorunlu beklemeyi kaçınılabilir beklemeden ayırın ve zorunlu kısmı kuralları koyanlara gösterin. Verinin ve her tanım değişikliğinin denetim izini tutun (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon, beklemenin genellikle teslim süresinin en büyük kısmı ve azaltması en ucuz kısım olmasıdır; çünkü çözüm çoğu zaman ek kapasite değil bir karar, bir kural ya da bir devir tesliminden ibarettir. Müşteriler teslim süresini doğrudan hisseder ve kuruluş, bir aşama raporunda hiç görünmeyen kapasitede yeniden işin bedelini öder. Devir teslimleri ve iadeleri azaltmak, sonradan olaya dönüşen arıza kiplerini de azaltır.

Maliyetler mütevazıdır ve çoğunlukla insana aittir: haritalama atölyesi ve örnek için birkaç kişinin birkaç saati, araçlar arasında paylaşılan bir öğe tanımlayıcısı (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”) ve her ay biraz analist zamanı. Daha büyük maliyet, takımlar arası konuşma ve birinin sahip olduğu bir kuralı değiştirme isteğidir.

Getiri, daha kısa ve daha öngörülebilir teslim süreleri, yükselen bir döngülenmiş %C/A, daha az iade edilen öğe ve yeniden işten serbest kalan kapasite olarak ortaya çıkar. Yayımlanmış vaka çalışmalarından yüzde olarak bir iyileşme öngörmeyin. Getiriyi kendi akışınızdan tahmin edin: öğe hacmi, mevcut bekleme, müşteri için gecikmenin maliyeti (en iyi ifade edebildiğiniz kadarıyla) ve sayabileceğiniz yeniden iş saatleri. Akış Çerçevesi (Flow Framework) ve yalın yazın örüntüyü anlatır ve hiçbiri akışınıza aktarılabilecek bir kıyaslama sunmaz (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Bir akış yerine bir aşamayı haritalamak.** Bir takımın işinin güzelce ayrıntılı haritası en uzun beklemeleri sayfanın dışında bırakır. Müşterinin talebinden müşterinin kullanımına haritalayın ve ayrıntıyı yalnızca beklemelerin olduğu yerde ekleyin.
- **Farklı örneklerden aşama sürelerinin ortalamasını almak.** Aşama ortalamalarının toplamı akışın ortalaması değildir. Akış ölçümlerini öğe düzeyi kayıtlardan hesaplayın ve medyanları ve yüzdelikleri raporlayın.
- **Bekleme süresini bir emek sorunu saymak.** İnsanlara daha hızlı çalışmalarını söylemek nadiren bir kuyruğu kısaltır. Öğenin neyi beklediğini ve beklemenin gerekli olup olmadığını sorun.
- **Süreç verimliliğini hedef olarak eniyilemek.** Oran hedef olduğunda işlem süresi şişirilir ya da teslim süresi hilelerle kırpılır. Onu incelemeye bir uyarıcı olarak kullanın ve müşterinin onayladığı teslim süresiyle eşleyin.
- **%C/A’yı yazılı bir kabul koşulu olmadan ölçmek.** Koşul olmadan her iade bir tartışmadır. Koşulu alıcı aşamaya yazdırın ve kısa tutun.
- **Sessiz yeniden işin kaydedilmemesine izin vermek.** Bir aşama gelen işi kaydetmeden düzeltiyorsa %C/A olduğundan yüksek gösterilir ve gönderen aşama hiç öğrenmez. Her düzeltmeyi bir iade olarak kaydedin.
- **Akış metriklerini takımları ya da insanları sıralamak için kullanmak.** Sistemi tanımlarlar ve en büyük bekleme nadiren bir takımın hatasıdır. Aşamaya ve akışa göre raporlayın ve sonuçları bütün aşamalar hazır bulunurken gözden geçirin.
- **Bir kez haritalayıp bir daha yapmamak.** Akışlar kayar. Haritayı bir takvimle ve her yeniden düzenlemeden ya da araç değişikliğinden sonra gözden geçirin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Akış tanımı ve saatler | Akış tanımsız; her takım kendi aşamasını ölçer | Bir akış bir takım tarafından haritalanmış; saatler diğer takımlarınkinden farklıdır | Her büyük akış için müşteri talebinden müşteri kullanımına yazılı başlangıç ve bitiş | Saat kuralları gözden geçirilir, değişiklikler kaydedilir, tanımlar değiştiğinde geçmiş yeniden ifade edilir | Tanımlar, akış ve talep değiştikçe takımlar ve tedarikçiler arasında gözden geçirilir |
| İşlem süresi ve bekleme süresi | Yalnızca geçen süre bilinir | Bir akış için elle örneklenir | Belgelenmiş bir durum modeli ve etiketli tahminlerle araç olaylarından toplanır | Yüzdeliklerle eğilim olarak izlenir, bekleme azaltmaları finanse edilir ve izlenir | Tedarikçiler ve takımlar arasındaki beklemeler, paylaşılan kuyruklar görünür olarak birlikte yönetilir |
| Akış boyunca kalite | Yeniden iş fark edilir ama sayılmaz | İadeler bazı aşamalar tarafından sayılır | Yazılı kabul koşulları ve aşama %C/A sahibi takımlara gösterilir | Döngülenmiş %C/A eğilim olarak izlenir ve yeniden iş ve başarısızlık ölçümleriyle eşlenir | Kabul koşullarına gönderen ve alıcı birlikte sahip olur ve müşteri sonuçlarına bağlanır |
| İyileştirmede kullanım | Haritalama bir kez yapılır, sonra rafa kalkar | Ara sıra bir atölye yerel bir düzeltmeye yol açar | Her aşamanın hazır bulunduğu üç aylık inceleme | En büyük bekleme ya da iade her çeyrekte bir sahiple ele alınır | İyileştirme fikirleri her aşamadan gelir; kararlar kaydedilir ve sonuçlar denetlenir |

## Kontrol listesi

- [ ] Bir değer akışı ve bir öğe sınıfı, bir akış sahibiyle birlikte adlandırılmıştır.
- [ ] Saatin başlangıcı ve bitişi müşterinin talebi ve müşterinin kullanımı açısından yazılmıştır.
- [ ] Mevcut durum haritası, müşteri tarafı dahil her aşamanın bir temsilcisiyle oluşturulmuştur.
- [ ] İşlem süresi ve bekleme süresi, gerçek öğelerden bir örnekle her aşama için ayrı kaydedilir.
- [ ] Aşama ve akış süreleri, örnek büyüklüğü gösterilerek medyan ve yüksek bir yüzdelik olarak raporlanır.
- [ ] Her alıcı aşamanın yazılı bir kabul koşulu vardır ve iadeler kaydedilir.
- [ ] Döngülenmiş tamamlanmış ve doğru yüzdesi aşama değerlerinden hesaplanır.
- [ ] Devir teslimler sayılır ve en büyük beklemenin adlandırılmış bir sahibi ve planlanmış bir deneyi vardır.
- [ ] Her metriğin oyunlaştırma vektörü ve koruma çizgisi takımla gözden geçirilmiştir.
- [ ] Harita ve örnek bir takvimle gözden geçirilir ve tanım değişiklikleri kaydedilir.

## Yapay zekâ istemleri

**Bir değer akışı haritalama görüşme kılavuzu taslağı hazırlayın.**

```text
[Akış adı] için değer akışını, [başlangıç olayı] olayından [bitiş olayı]
olayına kadar, [öğe sınıfı] öğe sınıfı için haritalıyorum. İlgili takımlar:
[takımların listesi]. Bir haritalama atölyesi için görüşme kılavuzu taslağı
hazırlayın: her aşama için işlem süresi, bekleme süresi, devir teslimler, iadeler
ve kabul koşulları hakkında sorular ve müşteri tarafı için sorular. Süre ya da
kıyaslama değerleri uydurmayın. Varsayımlarınızı ve yanıtları denetlemek için
toplamam gereken veriyi listeleyin.
```

**Bir örnekten akış ölçümlerini hesaplayın.**

```text
Aşama giriş ve çıkış zamanları, etkin ve bekleme durumları ve iadeleri olan
[sayı] öğelik bir örnek: [veriyi yapıştırın ya da sütunları tanımlayın]. Teslim
süresini, işlem süresini, bekleme süresini, süreç verimliliğini, aşama
tamamlanmış ve doğru yüzdesini ve döngülenmiş tamamlanmış ve doğru yüzdesini
hesaplayın ve kullanılan formülleri gösterin. Medyanları ve [yüzdelik] yüzdeliği
raporlayın. Zaman damgaları eksik öğeleri işaretleyin ve nasıl ele aldığınızı
söyleyin. Boşlukları uydurma değerlerle doldurmayın. Varsayımlarınızı listeleyin.
```

**Bir akış panosunda oyunlaştırma risklerini bulun.**

```text
Akış panomuz [akış adı] için [metriklerin listesi] gösteriyor ve takımlar
[hedefler ya da yok] karşısında değerlendiriliyor. Her metrik için, sayının akış
iyileşmeden iyileşebileceği makul yolları, her birini ortaya çıkaracak sinyalleri
ve onu yakalayacak bir koruma çizgisi metriğini ya da uygulamasını listeleyin.
[İlgilenilen aşama ya da devir teslim] üzerine odaklanın. Bireylerin sıralanmasını
önermeyin ve eşik uydurmayın. Varsayımlarınızı listeleyin.
```

**Bir devir teslim için kabul koşulu yazın.**

```text
Gönderen aşama [gönderen takım], alıcı aşama [alıcı takım]. Öğeler [öğe türü] ve
iade edilmelerinin en yaygın nedenleri [nedenler]. Alıcının uygulayabileceği,
en fazla [sayı] kontrolden oluşan kısa bir kabul koşulu ve tamamlanmış ve doğru
yüzdesinin hesaplanabilmesi için iadeleri kaydetmenin bir yolunu taslak olarak
hazırlayın. İfadeyi tarafsız tutun ve suçlama yapmayın. Varsayımlarınızı ve her
iki takıma sormam gereken soruları listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): akış haritanızdaki bir metriği tanımlayan konuyu ve yanında yer alması gereken koruma çizgisini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): düzenlenmiş bir metrik konusunun saatlerini, oyunlaştırma vektörlerini ve çapraz başvurularını belirttiğini denetlemek için kullanın.

## Temel çıkarımlar

- Akışı müşterinin talebinden müşterinin kullanımına kadar ölçün, çünkü takım sınırı ölçümleri en uzun beklemeleri gizler.
- Her aşamayı işlem süresi ve bekleme süresi olarak ayırın ve en büyük beklemenin nedenini takımlar arasındaki arayüzde arayın.
- Tamamlanmış ve doğru yüzdesi aşamalar boyunca bileşik etki yapar; bu yüzden döngülenmiş değer genellikle herhangi bir aşama raporunun önerdiğinden düşüktür.
- Aşamaları daha hızlı gitmeye zorlamadan önce devir teslimleri azaltın ve rutin işi önceden yetkilendirin.
- Araç verisinin yanında gerçek öğelerden bir örnek gözlemleyin, yüzdelikleri raporlayın ve tahminleri etiketleyin.
- Her akış metriğini koruma çizgisiyle eşleyin ve ölçümleri sistemi tanımlamak için kullanın, insanları sıralamak için asla.

## Kaynaklar ve ileri okuma

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
