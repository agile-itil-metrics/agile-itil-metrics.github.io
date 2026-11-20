# Hizmet maliyeti ve birim ekonomisi

**Bir hizmetin neye mal olduğunu ve kullanıcıların değer verdiği bir birim başına neye mal olduğunu bilmek, bir takımın kalite, hız ve harcama konusunda dürüst seçimler yapmasını sağlar; yeter ki dağıtım kuralları adil ve görünür olsun ve hizmeti işleten insanları cezalandırmak için asla kullanılmasın.**

## Genel bakış ve motivasyon

Her BT hizmeti paraya mal olur: insanlar, bulut ve barındırma, lisanslar, donanım, tedarikçiler ve kullandığı ortak platformlardan düşen pay. Liderler bir hizmetin neye mal olduğunu, değip değmediğini ve talep iki katına çıkarsa neyin değişeceğini sorar. Takımlar aynı soruları öbür taraftan sorar: neyi karşılayabiliriz ve neyden vazgeçiyoruz? Sayılar olmadan bu konuşmalar, hangi bütçenin kime ait olduğuna dair tartışmalara dönüşür.

[Maliyet muhasebesi](https://en.wikipedia.org/wiki/Cost_accounting), maliyetleri ölçme, kaydetme ve çözümleme pratiğidir. Bir hizmet kuruluşu için merkezî görevler; maliyetleri hizmetlere atfetmek, maliyeti anlamlı bir şeyin birimi başına ifade etmek ve maliyetin hacimle nasıl değiştiğini öngörmektir. ITIL'in hizmet finansal yönetimi pratiği aynı alanı kapsar ve bulut harcamaları için FinOps pratiği onu daha da ileri taşır (bkz. Konu 7.6 “FinOps ve bulut maliyeti metrikleri”).

Maliyete ilişkin çevik ve ITIL bakışları farklıdır ve bu fark yararlıdır.

- **Proje bakışı**, geçici bir çabayı bir bütçe ve bir teslim tarihiyle finanse eder. Maliyet, projenin harcadığıdır ve başarı, zamanında ve bütçe içinde teslimattır. Proje biter, takım dağılır ve yarattığı hizmet bir başkasına devredilir.
- **Ürün ya da hizmet bakışı**, bir hizmeti ömrü boyunca geliştirmek ve işletmek için kalıcı bir takımı finanse eder. Maliyet, takımın ve platformlarının istikrarlı maliyetidir ve soru, sunulan değerin bu harcamayı haklı çıkarıp çıkarmadığıdır. Bu, sürekli teslimat ve hizmeti bilen motive olmuş insanlar etrafında inşa etme çevik amaçlarına uyar. Ayrıca ITIL'in bir hizmetin yaşam döngüsü boyunca maliyetine dair kaygısına da uyar.

Maliyet ölçümleri bilgilendirdiği kadar kolayca yanıltabilir. Üç sorun tekrar eder.

- **Dağıtım bir seçimdir.** Ağlar, güvenlik ve platformlar gibi ortak maliyetler hizmetler arasında bir kurala göre dağıtılmalıdır ve farklı kurallar farklı yanıtlar verir. [Maliyet dağıtımı](https://en.wikipedia.org/wiki/Cost_allocation), kullanıcılar, istekler ya da depolama gibi maliyetin değişmesine neden olan bir etken olan [maliyet sürücüsünü](https://en.wikipedia.org/wiki/Cost_driver) izlemelidir. [Faaliyet tabanlı maliyetleme](https://en.wikipedia.org/wiki/Activity-based_costing), maliyetleri kaynakları tüketen faaliyetlere kadar izleyerek bunu resmîleştirir.
- **Sabit ve değişken maliyetler farklı davranır.** [Sabit maliyet](https://en.wikipedia.org/wiki/Fixed_cost) bir aralık içinde hacim değiştikçe aynı kalır ve [değişken maliyet](https://en.wikipedia.org/wiki/Variable_cost) hacimle artar. Sabit maliyetler baskınsa, bir hizmetin [birim maliyeti](https://en.wikipedia.org/wiki/Unit_cost) hacim büyüdükçe düşer; bu örüntü [ölçek ekonomileriyle](https://en.wikipedia.org/wiki/Economies_of_scale) ilişkilidir. Hangi maliyetlerin sabit olduğunu bilmeden birim maliyete bakmak yanlış tahminlere yol açar.
- **Maliyet değer değildir.** En ucuz hizmet en iyisi değildir. Sorunları çözmeden bilet kapatırsanız bilet başına maliyet düşer. Maliyet ölçümleri, bu kitabın önceki bölümlerinin sağladığı bir kalite ya da sonuç eşliğine ihtiyaç duyar (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”).

Muhasebe sınıflandırmaları da önemlidir. [Sermaye harcaması](https://en.wikipedia.org/wiki/Capital_expenditure) kalıcı varlıklar satın alır ve işletme giderleri günlük işletmeyi kapsar. Bulut ve abonelik hizmetleri harcamayı birinci türden ikinciye kaydırır; bu, hizmetlerin neye mal olduğunu değiştirmeden bütçelerin nasıl göründüğünü değiştirir. Finans meslektaşları bu kuralların sahibidir ve buradaki metrikler onlarla birlikte kurulmalıdır.

[Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi paraya güçlü biçimde uygulanır. Bir maliyet hedefi, hasarı saklamanın en kolay olduğu yerde, yani bakımda, kalitede ve öğrenme süresinde maliyet kesmeyi üretme eğilimindedir. Bu yüzden aşağıdaki ölçümler hizmet sağlığı göstergeleriyle ve dağıtım kurallarının bir açıklamasıyla eşlenir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Dağıtım kurallarını açık yapın ve sürücülere bağlayın.** İnsanlar izleyebildikleri sayıları kabul eder.
- **Sabit ve değişken maliyeti ayırın.** Tahminler hangisinin hangisi olduğuna bağlıdır.
- **Birim maliyeti kalite eşliğiyle raporlayın.** Daha ucuz olan, yalnızca hizmet hâlâ iyiyse daha iyidir.
- **Aralıklar ve eğilimler kullanın, sahte kesinlik değil.** Dağıtım yargı içerir.
- **Mümkün olduğunda hizmetler etrafında kalıcı takımları finanse edin.** Kararlı takımlar öğrenir ve iyileşir; geçici olanlar dağılır.
- **Maliyetleri onları değiştirebilecek insanlarla paylaşın.** Etkisiz görünürlük yalnızca suçlamadır.
- **Takımları ya da insanları asla maliyete göre sıralamayın.** Hizmetler farklıdır, kısıtları da öyle.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL pratiği | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hizmet başına maliyet | Adlandırılmış bir hizmetin, belgelenmiş dağıtım kurallarıyla tam yüklenmiş yıllık maliyeti | dönemde hizmetin doğrudan maliyetleri + dağıtılan ortak maliyetleri | para birimi/yıl | Genel defter, maliyet merkezi verileri, bulut ve lisans faturaları, zaman ya da faaliyet verileri | Hizmet finansal yönetimi; hizmet kataloğu yönetimi | Kalıcı bir ürün takımının ve platformlarının maliyeti | Üç aylık |
| Birim maliyet | Aktif kullanıcı, işlem ya da çözülen talep gibi kullanıcıların değer verdiği bir şeyin birimi başına maliyet | dönemde hizmet başına maliyet / dönemde teslim edilen birimler | para birimi/birim | Hizmet başına maliyet ve hacim verileri | Hizmet finansal yönetimi; hizmet düzeyi yönetimi | Sonuç başına hizmet sunma maliyeti | Üç aylık |
| Dağıtım kapsamı | BT harcamasından adlandırılmış bir hizmete atfedilen ya da ortak genel gider olarak bildirilenin payı | hizmetlere atfedilen ya da genel gider olarak bildirilen harcama / toplam BT harcaması | yüzde | Genel defter ve dağıtım modeli | Hizmet finansal yönetimi | Her takımın işinin görünür maliyeti | Üç aylık |
| İşletme, değişiklik ve iyileştirme dağılımı | Hizmetleri işletmeye, değiştirmeye ve iyileştirmeye giden harcama ya da kapasitenin payı | her kategorideki harcama ya da kapasite / toplam | yüzde | Defter etiketleri, iş izleyicideki iş türleri | Hizmet finansal yönetimi; sürekli iyileştirme | İş türüne göre kapasite dağılımı | Üç aylık |
| Tahmin sapması | Hizmet bazında tahmin ile gerçekleşen maliyet arasındaki fark | (gerçekleşen eksi tahmin) / tahmin | yüzde | Tahmin günlüğü ve defter | Hizmet finansal yönetimi | Tahmin doğruluğu | Aylık |
| Maliyet görünürlüğü (showback) itiraz oranı | Hizmet sahiplerinin itiraz ettiği ve değiştirilen showback ya da chargeback kalemlerinin payı | itiraz sonrası değiştirilen kalemler / düzenlenen kalemler | yüzde | Showback sistemi ve itiraz günlüğü | Hizmet finansal yönetimi | Ortak maliyetler üzerine retrospektif | Üç aylık |
| Kalıcı takım finansman payı | Teslimat ve operasyon harcamasından bir hizmet için istikrarlı takım kapasitesi olarak finanse edilenin payı | kalıcı hizmet takımlarına harcama / toplam teslimat ve operasyon harcaması | yüzde | Defter ve organizasyon şeması | Hizmet finansal yönetimi; kurumsal değişim | Hizmetler ve motive olmuş insanlar etrafında kurulan takımlar | Yıllık |

Her ölçüm için dönemi, para birimini ve maliyet türlerini tanımlayın ve dağıtım kurallarını metrik siciline kaydedin: hangi maliyetler doğrudan, hangileri ortak ve her ortak maliyeti hangi sürücünün dağıttığı. Birim maliyet, hem kullanıcıların hem de takımın kabul ettiği bir birim gerektirir ve birim tanımı eğilim boyunca sabit kalır. Tahmin sapması, dönem başında olduğu hâliyle tahminle karşılaştırılır, gözden geçirilmiş bir tahminle değil.

## Öneriler

### Maliyet resmini oluşturun

**1. Defter ve hizmet listesiyle başlayın.** Toplam BT harcamasını defterden alın, hizmetleri katalogdan listeleyin ve her maliyetin hangi payının hangi hizmete ait olduğuna karar verin. Kolay doğrudan maliyetlerle başlayın: hizmeti işleten takım, lisansları, barındırması. Ortak maliyetler ikinci sırada gelir. İlgili insanlarla paylaşılan kaba bir ilk resim, özel olarak kurulmuş kesin bir resimden iyidir.

**2. İnsanların izleyebileceği maliyet sürücüleri seçin.** Her ortak maliyet için, onu gerçekte neyin doğurduğuna bağlı bir sürücü seçin: bir iş birliği platformu için kullanıcılar, bir veri platformu için depolama, bir geçit için istekler, uç nokta yönetimi için aygıtlar. Kuralı tek bir cümleyle açıklayın. Kimsenin denetleyemediği sürücüler tartışmaları davet eder ve kimsenin etkileyemediği sürücüler showback'i anlamsız kılar.

**3. Sabit ve değişken maliyeti ayırın.** Her hizmet için hangi maliyetlerin hacimle hareket ettiğini ve hangilerinin etmediğini işaretleyin. Çoğunlukla sabit maliyetli bir hizmetin birim maliyeti büyümeyle düşer, çoğunlukla değişken maliyetli olanın düşmez. Bu ayrım, her tahminin ve ölçeklemeye dair her konuşmanın temelidir.

**4. Dağıtım yargı içerdiğinde aralıklar gösterin.** İki makul dağıtım kuralı yüzde 20 farklı sonuç veriyorsa her ikisini ya da aralığı gösterin. Keyfî bir kuraldan çıkan tek bir kesin sayı, verinin çözemeyeceği kavgaları başlatır.

### Birim başına, yanında kaliteyle ölçün

**5. Değeri yansıtan bir birim seçin.** Aktif kullanıcı, tamamlanan işlem, çözülen talep ya da dağıtım başına maliyetin hepsi yararlı olabilir. Hizmetin ne için olduğuyla bağlantılı birimi seçin, hizmet sahibiyle üzerinde anlaşın ve sabit tutun. Bilet başına maliyet riskli bir birimdir; çünkü biletler erken kapatıldığında düşer ve iyi self servisle biletleri önlediğinizde yükselir.

**6. Her birim maliyeti bir kalite ölçümüyle eşleyin.** Birim maliyeti kullanılabilirlik, memnuniyet ya da yeniden açılma oranının yanında gösterin. Kalite düşerken düşen bir birim maliyet, maliyetin kullanıcılara aktarılmasıdır. Kalite yükselirken sabit kalan bir birim maliyet kazançtır. Bunları birlikte sunun ya da hiç sunmayın (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

**7. Yalnızca düzeyi değil eğilimi izleyin.** Zaman içindeki birim maliyet, neyin değiştiğine dair notlarla, tek bir çeyreğin anlatamayacağı bir hikâye anlatır. Eğilimler yanlış okunmasın diye dağıtım kurallarındaki ya da birimlerdeki değişiklikleri grafikte işaretleyin. Bir hizmeti başkalarıyla karşılaştırmadan önce kendi geçmişiyle karşılaştırın.

### Maliyeti onu değiştirebilecek insanlarla paylaşın

**8. Chargeback'ten önce showback kullanın.** Showback maliyetleri hizmet sahiplerine faturalamadan raporlar; chargeback ise maliyeti onların bütçelerine aktarır. Anlayış ve güven kuran showback ile başlayın ve chargeback'e yalnızca kararları değiştirdiği ve kurallar kabul gördüğü yerde geçin. İkisi de sahiplerin şekillendirmeye yardım ettiği kurallara bağlıdır.

**9. Sahiplerin sayılara itiraz etmesine izin verin.** Hızlı olduğu ve sonuçları günlüğe kaydedildiği sürece bir itiraz süreci sağlık işaretidir. İtiraz oranını gözden geçirin: yüksek bir oran kimsenin güvenmediği kuralları gösterir, sıfır ise kimsenin raporları okumadığını gösterebilir. Yalnızca kalemi değil, kuralı düzeltin.

**10. Maliyeti tüm hizmet takımıyla gözden geçirin.** Düzenli bir maliyet incelemesine yöneticilerin yanı sıra mühendisleri ve operatörleri de dahil edin. Bir hizmeti işleten insanlar çoğu zaman israfın nerede saklandığını bilir: atıl ortamlar, aşırı büyük kaynaklar, mükerrer araçlar. Bulgularını eleştiri değil paylaşılacak iyileştirmeler olarak ele alın.

### İstikrar ve öğrenme için finanse edin

**11. Hizmetler etrafında finanse edilen kalıcı takımları tercih edin.** Mümkün olduğunda, bir proje takımı toplayıp dağıtmak yerine bir hizmetin sahibi olacak istikrarlı bir takımı zaman içinde finanse edin. Kalıcı takımlar bilgi biriktirir, kullanıcılarla daha iyi ilişkiler kurar ve kötü kararların maliyetini taşır. Bu, motive olmuş bireyler etrafında inşa etme çevik amacını ve hizmet yaşam döngüsüne dair ITIL kaygısını yansıtır. Finansman değişikliği önemli bir kurumsal karardır; bu yüzden finansı ve liderliği erkenden işe katın. Mik Kersten'in *Project to Product* kitabı bu geçişi tartışır.

**12. İyileştirme için kapasite ayırın.** Otomasyon, güvenilirlik düzeltmeleri ve mükerrer araçları kaldırma gibi gelecekteki maliyetleri azaltan maliyetler korunmuş finansmana ihtiyaç duyar; aksi hâlde her seferinde özellik çalışmasına yenilir. İyileştirme payını işletme, değişiklik ve iyileştirme dağılımında izleyin ve ürettiği getirilere bakın (bkz. Konu 4.6 “Teknik borç ve bilinen hatalar”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlanır | Eşlenmiş koruma metriği ya da pratiği |
| --- | --- | --- |
| Hizmet başına maliyet | Maliyetleri dağıtım kuralıyla diğer hizmetlere kaydırmak; elverişsiz maliyetleri dağıtılmamış bırakmak | Dağıtım kapsamı; sahiplerce yayımlanan ve gözden geçirilen kurallar; toplamları defterle karşılaştırmak |
| Birim maliyet | Paydayı düşük değerli birimlerle büyütmek; maliyeti kesmek için kaliteyi kesmek; birimi değiştirmek | Kalite eşlik ölçümü; sabit birim tanımı; sonuç denetimleri |
| Dağıtım kapsamı | Atfetmeden kaçınmak için büyük tutarları ortak genel gider olarak bildirmek | Genel gider payının raporlanması; genel gider olarak bildirilenin ve nedeninin incelenmesi |
| İşletme, değişiklik ve iyileştirme dağılımı | İşletme işini iyileştirme ya da değişiklik olarak yeniden etiketlemek; dönem sonunda etiketlemek | Girişte etiketlemek; kalemlerden tür için örnek almak; olay ve talep verileriyle karşılaştırmak |
| Tahmin sapması | Tahminleri şişirmek; tahmini dönemin sonlarında revize etmek | Tahminin başlangıçta günlüğe kaydedilmesi; tahmin aralıklarını zaman içinde gerçekleşenlerle karşılaştırmak |
| Maliyet görünürlüğü (showback) itiraz oranı | İtirazları cesaret kırmak; bir kural değişikliği olmadan kalemleri değiştirmek | İtirazları ve sonuçlarını incelemek; tekrarlanan itirazlardan sonra kuralların değişip değişmediğini denetlemek |
| Kalıcı takım finansman payı | Finansmanı ya da sahipliği değiştirmeden projeleri kalıcı takım olarak yeniden adlandırmak | Takım istikrarını ve sahipliği zaman içinde denetlemek; hizmet sağlığı ölçümleri |

Sağlıklı bir okuma; hizmet sahiplerinin tanıdığı bir maliyet resmi, kalite korunurken açıklanmış nedenlerle hareket eden birim maliyetler, küçülen tahmin hataları ve sayılarda görünen iyileştirme işidir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Proje finansmanı | Net kapsam ve bitiş | Takımlar dağılır; bilgi kaybolur; hizmet devredilir |
| Kalıcı takım finansmanı | Öğrenme, sahiplik, istikrarlı maliyet | Güven ve olgun bir planlama süreci gerektirir; kapsam kayabilir |
| Showback | Az sürtünmeyle anlayış kurar | Kimse sorumlu değilse göz ardı edilebilir |
| Chargeback | Hesap verebilirlik ve fiyat sinyalleri yaratır | İtirazlar; ortak hizmetlerden kaçınma teşvikleri |
| Basit dağıtım kuralları | Açıklaması kolay | Kaba olabilir |
| Faaliyet tabanlı dağıtım | Daha doğru | Sürdürmesi maliyetli; sahte kesinlik |
| Birim başına maliyet | Maliyeti değere bağlar | Birim seçimine ve hacme duyarlı |
| Yalnızca toplam maliyet | Basit | Eğilimleri ve verimliliği gizler |

Düz yazıyla yanıt şudur: basit kurallar ve showback ile başlayın, kararların bağlı olduğu yerde kesinlik ekleyin ve güven ve planlama olgunluğu arttıkça kalıcı takım finansmanına doğru ilerleyin. Her maliyet ölçümünün yanında bir kalite ölçümü tutun.

## Takımınızla tartışılacak sorular

**1. Ana hizmetimiz yılda neye mal oluyor ve bu sayıya kim katılırdı?**
Finans ve hizmet sahibinden bağımsız tahminler üretmelerini isteyin. Bunları karşılaştırın. Kolaylaştırıcı, nerede ve neden farklılaştıklarını not etmelidir: dağıtım kuralları, kapsam ya da eksik maliyetler. Gelecek çeyrek için belgelenmiş tek bir kural üzerinde anlaşın.

**2. Kullanıcılarımızın tanıyacağı birim nedir ve neye mal oluyor?**
Hizmet için olası birimleri listeleyin ve birini seçin. Maliyetini hesaplayın ve neyin yükselteceğini ya da düşüreceğini tartışın. Birimin neyi gizlediğini sorun. Yanında duracak bir kalite ölçümü ekleyin.

**3. Ortak maliyetlerimizden hangileri kimsenin açıklayamadığı bir kuralla dağıtılıyor?**
Ortak maliyetleri ve sürücülerini listeleyin. Her biri için sürücünün maliyeti neyin doğurduğuyla ilgili olup olmadığını sorun. İlgili olmayan birini değiştirin. Sürücüyü kimin etkileyebileceğini tartışın; çünkü etkisi olmayan maliyet verisi yalnızca suçlamadır.

**4. Kapasitemizin ne kadarı hizmeti işletmeye, değiştirmeye ve iyileştirmeye gidiyor?**
Bir çeyreklik tamamlanmış işi, planlama konusundaki gibi türe göre gözden geçirin (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”). Liderlerin düşündükleriyle karşılaştırın. İyileştirme payının ne olması gerektiğine ve neyin onu koruyacağına karar verin.

**5. Bu hizmet için kalıcı bir takımı finanse etsek neyin değişirdi?**
Finansmanı, sahipliği ve ölçümleri hayal edin. Finansın, takımın ve kullanıcıların hangi riskleri ve faydaları göreceğini sorun. Ona doğru bir adım belirleyin; örneğin istikrarlı bir takım listesi ve paylaşılan bir hizmet bütçesi görünümü.

**6. Bir maliyet rakamı en son ne zaman tartışmaya yol açtı ve ne öğrendik?**
Bir showback ya da bütçe anlaşmazlığını hatırlayın. Sayıyla mı yoksa kuralla mı ilgiliydi? Daha net bir kuralın ya da daha iyi bir itiraz sürecinin nasıl yardımcı olacağını tartışın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları maliyeti zamanlarının, platformlarının ve araçlarının fiyatı olarak görür. Hizmetlerinin maliyetini ve birim maliyetini bilmeli, israfı erken fark etmeli ve sayıları iyileştirme işi ve istikrarlı finansman için tartışmakta kullanmalıdır. Sayıyı kaliteyi keserek iyileştirmekten kaçınmalı ve izleyemedikleri dağıtım kurallarına itiraz etmelidir.

### Hizmet ve operasyon takımları

Operasyon takımları hizmetleri işletmenin maliyetini taşır ve çoğu zaman ortak platformları elinde tutar. Ortak maliyetlerin nasıl yönlendirildiğini yayımlamalı, showback sorularını yanıtlamalı ve deneyimden maliyet tasarrufu fikirlerini paylaşmalıdır. İşletme maliyetlerini kesme baskısı beklemeli ve her kesintinin kalite ve risk yüzünü göstermelidir.

### Liderlik ve yönetişim

Liderler maliyet ve değeri sorar ve finansman modelini belirler. Kalite eşlikli birim maliyetler istemeli, uygun olduğu yerde kalıcı takım finansmanını desteklemeli ve takımları maliyete göre sıralamaktan kaçınmalıdır. Yönetişim, dağıtım kurallarının belgelenmesini, gözden geçirilmesini ve tutarlı uygulanmasını beklemeli ve iyileştirme payına bakmalıdır.

### Müşteriler ve kullanıcılar

Chargeback ile ödeyen kullanıcılar faturayı anlamak ve ona etki etmek ister. Diğerleri maliyeti sunulan hizmetlerin kalitesinde ve çeşitliliğinde görür. Net birim maliyetler ve fiyat ile hizmet arasındaki ödünleşimde söz hakkı, ilişkiyi daha sağlıklı yapar ve geri bildirimleri her birim maliyetin kalite eşliğinin bir parçasıdır.

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir üniversitenin merkezî BT departmanı, 18.000 öğrenci ve çalışana yaklaşık 25 hizmet sağlar. Aşağıdaki sayılar açıklayıcıdır.

Maliye ofisi, BT bütçesinin neden kayıttan daha hızlı büyüdüğünü bilmek ister. BT finans iş ortağı hizmet sahipleriyle bir maliyet resmi oluşturur. Toplam BT harcamasının yüzde 72'si adlandırılmış hizmetlere doğrudandır, yüzde 18'i sürücülerle dağıtılan ortak platformlardır (ağ, kimlik, güvenlik araçları) ve yüzde 10'u bildirilmiş genel giderdir. Dolayısıyla dağıtım kapsamı yüzde 90'dır. Öğrenme platformu, aktif kullanıcı başına yılda 36 ABD dolarından 41 ABD dolarına çıkan bir maliyete eşdeğerdir; memnuniyet ve kullanılabilirlik sabittir. Hizmet masası, iki yılda yüzde 12 düşmüş bir çözülen talep başına maliyet gösterir. Hizmet sahibi, düşüşün yeniden açılan biletlerin yüzde 4'ten yüzde 9'a çıkmasıyla aynı zamana denk geldiğine dikkat çeker ve kalite eşliği, tasarrufun kısmen emeğin kullanıcılara aktarılması olduğunu gösterir.

Takım dört değişiklik yapar. Dağıtım kurallarını, her ortak maliyet için sürücüler ve son inceleme tarihiyle tek bir sayfada yayımlar. Talep başına maliyetin yerine, yeniden açılma oranının yanında gösterilen ilk temasta çözülen talep başına maliyeti koyar. Öğrenme platformunu ve kimlik hizmetini istikrarlı bir kadroyla kalıcı takımlar olarak finanse etmeye taşır. En büyük iki hizmetin her biri için kapasitenin yüzde 15'ini iyileştirme işine ayırır ve işin ne getirdiğini izler.

Bir yıl sonra, kullanım arttığı için öğrenme platformunun birim maliyeti 38 ABD dolarıdır, yeniden açılma oranı yüzde 5'e düşmüştür ve iki kalıcı takım hizmeti için tahmin sapması, proje finansmanlı iş için yüzde 11'e karşılık yüzde 4 içindedir. İki kural değiştirildikten sonra showback itiraz oranı yüzde 22'den yüzde 8'e düşmüştür. Maliye ofisi her hizmet için yüzde 5 birim maliyet azaltımı yıllık hedefi ister. BT finans iş ortağı, hedefleri yalnızca açık bir verimlilik kaldıracı olan hizmetler için, kalite eşliğiyle birlikte göstererek önerir ve toptan bir hedefin bakımı kesmeyi ödüllendireceğini açıklar. Karar kaydedilir ve kurallar yılda bir gözden geçirilir.

## Sektör mercekleri

**Girişim (startup).** Maliyet çoğunlukla bulut, araçlar ve maaşlardır. Ana bulut ve araç harcamasını baştan hizmet bazında izleyin, kaynakları etiketleyin ve aktif müşteri başına maliyeti erkenden hesaplayın. Takım küçük olduğundan ayrıntılı dağıtıma direnin.

**Küçük işletme.** Bir avuç tedarikçi ve bir ya da iki kişi maliyetlerin çoğunu oluşturur. Basit bir yıllık resim, ana araçlar için kullanıcı başına maliyet ve ödenip kullanılmayanların bir görünümünü tutun. Tedarikçilerden kalem kalem faturalar isteyin.

**Büyük işletme.** Ölçek, ortak platformlar ve çok sayıda iş birimi getirir. Sürücülü belgelenmiş bir dağıtım modeli, bir itiraz süreci ve BT içine yerleşik bir finans iş ortağı kullanın. Herkese yarar sağlayan ortak hizmetlerin kullanımını caydıran chargeback'e dikkat edin.

**Kamu sektörü.** Bütçeler yıllık ve ödeneğe bağlıdır; sermaye ve işletme harcamalarına dair kurallar vardır ve maliyet şeffaflığı gerekebilir. Hizmet maliyetlendirmesini kamu maliyesi kurallarıyla hizalayın, dağıtım yöntemlerini denetim için belgeleyin ve yasanın izin verdiği yerde kalıcı hizmet takımları için çok yıllı finansmanı göz önünde bulundurun. Birim maliyetleri sonuç ölçümleriyle raporlayın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler; dağıtım modelini kurma emeği, kuralları kararlaştırmak için finansın ve hizmet sahiplerinin zamanı ve aylık raporlama ile itiraz yönetiminin rutin işidir. Çoğu kurumda defter ve bulut faturalama verileri zaten vardır. Bir elektronik tablodaki küçük bir model işe başlayabilir ve araçlar sonra gelir.

Getiriler daha iyi kararlar ve daha az tartışmadır. Maliyetlerini gören takımlar israfı bulur: atıl ortamlar, kullanılmayan lisanslar ve mükerrer araçlar. Liderler maliyet sürücülerini bilerek seçenekleri karşılaştırabilir, sabit ve değişken maliyetler ayrılmış olarak büyümeyi planlayabilir ve iyileştirmeyi getirisinin kanıtıyla finanse edebilir. Gerekçeyi kendi sayılarınızdan kurun: ilk incelemede bulunan israf, bütçe anlaşmazlıklarında harcanan zaman ve öncesi ile sonrasındaki tahmin sapması. Tanımlar çok değiştiği için, kaynağını ve yöntemini izleyemediğiniz sürece gelirin yüzdesi olarak ortalama BT harcamasına dair dış iddialardan kaçının. Bu bölümün son konusu finansal gerekçeyi tek bir yerde toplar (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Ortak maliyeti eşit dağıtmak.** Küçük kullanıcıları cezalandırır ve gerçek sürücüleri gizler. Tüketimi yansıtan sürücüler kullanın.
- **Hedef olarak bilet başına maliyet.** Biletleri erken kapatmayı ödüllendirir. Kalite eşliğiyle çözülen talep başına maliyeti kullanın.
- **Güvensiz kesinlik.** Sahiplerin inanmadığı güzel bir model değersizdir. Kuralları onlarla kurun.
- **Önce chargeback.** Anlayıştan önce kavga başlatır. Showback ile başlayın.
- **Görülmesi zor olanı kesmek.** Bakım, öğrenme ve güvenilirlik işi ilk kesilir ve sonra daha pahalıya mal olur. İyileştirme kapasitesini koruyun.
- **Takımları maliyete göre karşılaştırmak.** Hizmetler kısıtlar ve risk bakımından farklıdır. Her birini kendi geçmişiyle karşılaştırın.
- **Kuralları ve eğilimi aynı anda değiştirmek.** Kural değişikliklerini grafiklerde işaretleyin ve mümkünse geçmişi yeniden ifade edin.
- **Maliyeti finansa ait saymak.** Hizmeti işleten insanlar maliyetin nereden geldiğini bilir. Onları dahil edin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Maliyet resmi | Yalnızca departman bazında bütçe | Birkaç hizmet için hizmet başına maliyet, kaba dağıtım | Sürücülü belgelenmiş dağıtım kuralları; kapsam izlenir | Kalite eşlikli birim maliyetler; sabit ve değişken ayrımı | Maliyetler iş ortaklarıyla şeffaf biçimde paylaşılır; sürücüler birlikte etkilenir |
| Maliyeti kullanma | Yüzdeyle maliyet kesintileri | Bazı sahiplere showback | Tüm hizmetler için showback; itiraz süreci | Tahmin sapması ve birim maliyet eğilimleri kararları yönlendirir | Maliyet, kalite ve değer portföy genelinde açıkça takas edilir |
| Finansman modeli | Yıllık proje bütçeleri | Bazı istikrarlı takımlar | Kilit hizmetler için kalıcı takımlar | Finansman hizmet sonuçlarını ve öğrenmeyi izler | Ortak platform yatırımıyla hizmetler arasında esnek finansman |

## Kontrol listesi

- [ ] Toplam BT harcaması hizmetlere atfedilir ya da genel gider olarak bildirilir ve kapsam izlenir.
- [ ] Dağıtım kuralları ve sürücüler yazılıdır ve hizmet sahipleriyle gözden geçirilir.
- [ ] Sabit ve değişken maliyetler her büyük hizmet için ayrılmıştır.
- [ ] Birim maliyetler üzerinde anlaşılmış, sabit birimler kullanır ve kalite ölçümlerinin yanında yer alır.
- [ ] Tahminler dönem başında günlüğe kaydedilir ve gerçekleşenlerle karşılaştırılır.
- [ ] Showback her hizmet sahibine, bir itiraz süreciyle birlikte sunulur.
- [ ] İşletme, değişiklik ve iyileştirme harcaması ya da kapasitesi raporlanır.
- [ ] Kapasitenin bir payı iyileştirme için korunur.
- [ ] Kural ve birim değişiklikleri eğilim grafiklerinde işaretlenir.
- [ ] Hiçbir takım ya da kişi maliyete göre sıralanmaz.

## Yapay zekâ istemleri

**Ortak hizmetler için maliyet sürücüleri önerin.**

```text
Ortak hizmetlerimiz ve yıllık maliyetleri: [liste]. Bunları kullanan
hizmetlerimiz: [liste]; kullanım verisi şunlar için mevcut: [kullanıcılar,
istekler, depolama gibi sürücülerin listesi]. Her ortak hizmet için bir maliyet
sürücüsü öner, sürücünün maliyeti neyin doğurduğunu yansıttığının nasıl
denetleneceğini açıkla ve sınırlılıklarını betimle. Maliyet uydurma.
Varsayımlarını ve finansın doğrulaması gerekenleri listele.
```

**Bir birim maliyet ve kalite eşliğini tasarlayın.**

```text
[kurum türü] içindeki [ad] hizmeti için birim maliyet bakımından üç olası birim
öner (örneğin aktif kullanıcı, işlem, çözülen talep başına) ve her biri için
yanında gösterilecek bir kalite ölçümü ile çiftin nasıl oyunlanabileceğini
söyle. Gerekçeleriyle birini öner. Rakam uydurma. Varsayımlarını ve hizmet
sahibine sorular listele.
```

**Bir showback incelemesi hazırlayın.**

```text
[hizmet] sahibiyle yapılacak üç aylık bir showback incelemesi için bir gündem ve
tek sayfalık bir özet taslağı hazırla. Veriler: bu çeyrekteki maliyet
[rakamlar], önceki çeyrek [rakamlar], hacim [rakamlar], kalite ölçümleri
[rakamlar] ve itirazlar [liste]. Sahibin israfı bulmasına ve dağıtıma itiraz
etmesine yardımcı olan sorular ekle. Sade bir dil kullan. Varsayımlarını
listele ve denetlenmesi gereken her iddiayı işaretle.
```

**Kalıcı takım finansmanına geçişi planlayın.**

```text
Şu anda işi projeler olarak finanse ediyoruz: [betimleyin]. [hizmetler] için
kalıcı takımları finanse etmeyi düşünüyoruz. Adımları, finansın ve liderliğin
isteyeceği bilgileri, riskleri ve değişikliğin yardımcı olup olmadığını izleme
ölçümlerini (örneğin tahmin sapması, takım istikrarı, iyileştirme payı ve
hizmet sağlığı) özetle. Diğer kurumlardan sonuçlar iddia etme. Varsayımlarını
ve liderlik girdisi gerektiren kararları listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir maliyet ya da birim ekonomisi metriği için eşlenmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir maliyet metriği girdisinin dağıtım kuralını, oyunlama yolunu ve kalite eşliğini belirttiğini denetlemek için kullanın.

## Temel çıkarımlar

- Maliyeti insanların izleyebileceği sürücülerle hizmetlere atfedin ve kuralları gösterin.
- Sabit ve değişken maliyeti ayırın ve her birim maliyeti bir kalite ölçümüyle eşleyin.
- Showback ve bir itiraz süreciyle başlayın, chargeback'i yalnızca kararları değiştiriyorsa ekleyin.
- Mümkün olduğunda hizmetler etrafında kalıcı takımları finanse edin ve iyileştirme kapasitesini koruyun.
- Aralıkları ve eğilimleri raporlayın ve kural değişikliklerini grafiklerde işaretleyin.
- Takımları ya da insanları asla maliyete göre sıralamayın.

## Kaynaklar ve ileri okuma

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
