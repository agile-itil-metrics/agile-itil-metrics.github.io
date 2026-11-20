# Yatırım getirisi ve iş gerekçesi

**İş gerekçesi bir tahmindir; bu yüzden onu aralıklarla ve belirtilmiş varsayımlarla yazın, işi kanıt geldikçe aşamalar hâlinde finanse edin ve tahmini olanlarla karşılaştırın ki bir sonraki gerekçe öncekinden daha dürüst olsun.**

## Genel bakış ve motivasyon

BT hizmetlerinin teslim edilme ve işletilme biçimini iyileştirmek para ve dikkat gerektirir ve her öneri diğerleriyle yarışır. Yeni bir platform, bir kadro değişikliği, bir otomasyon programı ve bir kalite girişimi, hepsi daha iyi bir gelecek vaat eder. Liderlerin bunları karşılaştıracak bir yola, takımların da önemli olan iş için tartışacak bir yola ihtiyacı vardır. İş gerekçesi geleneksel araçtır ve yatırım getirisi onun en bilinen sayısıdır.

[İş gerekçesi](https://en.wikipedia.org/wiki/Business_case), önerilen bir proje ya da girişim için genellikle sorunu, seçenekleri, maliyetleri, faydaları ve riskleri ortaya koyan bir gerekçelendirmedir. [Yatırım getirisi](https://en.wikipedia.org/wiki/Return_on_investment) (YG), bir yatırımdan elde edilen kazancı maliyetiyle karşılaştırır. [Toplam sahip olma maliyeti](https://en.wikipedia.org/wiki/Total_cost_of_ownership) (TSM), bir varlığın ya da hizmetin ömrü boyunca, satın alma, işletme, destek ve imha dahil, neye mal olduğunun tamamını sayar. Bu bölümün önceki konuları girdileri sağlar: varlıkların, yazılımın, yapılandırma kayıtlarının, hizmetlerin ve bulut kaynaklarının maliyeti (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi” ve Konu 7.6 “FinOps ve bulut maliyeti metrikleri”) ve fayda konusu sonuçların kanıtını verir (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”).

İş gerekçelerini iyi yapmayı zorlaştıran iki gerilim vardır.

- **İş gerekçeleri, onay isteyen insanlarca yazılan tahminlerdir.** Yazar çoğu zaman önerinin başarılı olmasını ister ve faydaları şişirme ve maliyetleri kırpma teşviki güçlüdür. [İyimserlik yanlılığı](https://en.wikipedia.org/wiki/Optimism_bias), olası olandan daha iyi sonuçlar bekleme eğilimidir ve proje planlamasında iyi belgelenmiştir. Düzeltici, tahminleri aşağıdan yukarıya bir hikâyeye değil benzer geçmiş projelerin gerçek sonuçlarına dayandıran [referans sınıfı tahminidir](https://en.wikipedia.org/wiki/Reference_class_forecasting). Geçmiş gerekçelerinizin kendi geçmişi, elinizdeki en iyi referans sınıfıdır.
- **Sürekli teslimat, bir iş gerekçesinin neyi vaat edebileceğini değiştirir.** Çevik yaklaşım, gereksinimlerin ve değerin iş ilerledikçe keşfedildiğini varsayar. Bir yıl önceden belirlenmiş sabit bir kapsam, fiyat ve fayda ile bu çelişir. Çevik yanıt, aşamalı finansmandır: öğrenmek için küçük bir ilk adım, sonra kanıt geldikçe daha fazla finansman. Bu, sürekli teslimat ve paydaşlarla sürekli iş birliği amacına uyar ve denetim isteyen bir finans işlevine de uyar. Aynı zamanda iş gerekçesinin, hipotezler sınandıkça yeniden ele alınan yaşayan bir belge olduğu anlamına gelir (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”).

Finanstan birkaç fikir yardımcı olur. [Paranın zaman değeri](https://en.wikipedia.org/wiki/Time_value_of_money), bugünkü bir para biriminin sonraki bir para biriminden daha değerli olduğunu söyler; bu yüzden gelecekteki faydalar daha az sayılır. [Net bugünkü değer](https://en.wikipedia.org/wiki/Net_present_value) (NBD), gelecekteki maliyet ve fayda akışını bir iskonto oranı kullanarak bugün için tek bir değere çevirir. [Geri ödeme süresi](https://en.wikipedia.org/wiki/Payback_period), ilk harcamanın geri kazanılma süresidir. Her biri bir özettir ve her biri varsayımları gizler; bu yüzden onları belirtin. [Fırsat maliyeti](https://en.wikipedia.org/wiki/Opportunity_cost), bir seçeneği seçmenin maliyetinin vazgeçilen en iyi alternatifin değeri olduğunu hatırlatır. [Batık maliyet](https://en.wikipedia.org/wiki/Sunk_cost) zaten harcanmış ve geri kazanılamayan paradır ve devam etme kararını yönlendirmemelidir.

Bir iş gerekçesindeki her sayı, cömert bir dönem, elverişli bir iskonto oranı ya da denetlenmesi zor faydalar seçilerek oyunlanabilir. [Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi gerekçenin kendisine uygulanır: onay başlıktaki bir YG'ye bağlı olduğunda yazarlar onu üretmeyi öğrenir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Bu yüzden aşağıdaki ölçümler geçmiş tahminlerin kalitesine dair bir denetim içerir.

## Temel ilkeler

- **Gerekçeyi aralıklı bir tahmin olarak ele alın.** Düşük, beklenen ve yüksek sonuçları gösterin ve her birinin ardındaki varsayımları belirtin.
- **Tam maliyeti sayın.** Yapımın yanı sıra işletmeyi, desteği, eğitimi, değişiklik emeğini ve imhayı dahil edin.
- **Faydalar ve kanıtları konusunda açık olun.** Maliyet tasarrufunu, maliyetten kaçınmayı, geliri ve risk azaltmayı ayırın ve her birinin nasıl ölçüleceğini söyleyin.
- **Aşamalı finanse edin.** Hipotezler sınandıkça ve resim iyileştikçe parayı serbest bırakın.
- **Hiçbir şey yapmamak dahil alternatiflerle karşılaştırın.** Olduğu yerde kalmanın maliyeti gerekçenin parçasıdır.
- **Kendi geçmişinizden öğrenin.** Tahminleri sonuçlarla karşılaştırın ve ayarlayın.
- **Batık maliyetleri yok sayın.** Önünüzde olana göre karar verin.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL pratiği | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Yatırım getirisi | Belirtilen bir dönemde maliyete göre net kazanç | (toplam faydalar eksi toplam maliyetler) / dönem boyunca toplam maliyetler | yüzde | İş gerekçesi, defter, fayda sicili | Hizmet finansal yönetimi; sürekli iyileştirme | Finansmana karşı sonuç incelemesi | Karar anında ve her incelemede |
| Toplam sahip olma maliyeti | Belirtilen bir dönemde bir hizmetin ya da varlığın tüm ömür maliyeti | dönem boyunca edinme + işletme + destek + değişiklik + eğitim + imha maliyetleri | para birimi | Defter, maliyet modelleri, tedarikçi sözleşmeleri | Hizmet finansal yönetimi; BT varlık yönetimi | Kalıcı bir takımın ve platformlarının maliyeti | Karar anında ve yıllık |
| Geri ödeme süresi | Kümülatif net faydaların ilk yatırıma eşit olma süresi | kümülatif faydalar eksi kümülatif maliyetlerin sıfıra ulaştığı zaman | ay | İş gerekçesi nakit akışları | Hizmet finansal yönetimi | İlk değere kadar geçen süre, maliyetin geri kazanılmasına genişletilmiş | Karar anında ve her incelemede |
| Net bugünkü değer | Belirtilen bir iskonto oranında beklenen faydaların bugünkü değeri eksi maliyetlerin bugünkü değeri | dönemler üzerinde (fayda eksi maliyet) / (1 + iskonto oranı) üzeri dönem toplamı | para birimi | İş gerekçesi nakit akışları, iskonto oranına ilişkin finans politikası | Hizmet finansal yönetimi | Değer temelli önceliklendirme | Karar anında |
| Maliyet tahmini doğruluğu | Tamamlanan girişimler için gerçekleşen maliyetin tahmin edilene oranı | onayda gerçekleşen maliyet / tahmin edilen maliyet, girişim başına ve bir dağılım olarak | oran | İş gerekçesi kayıtları ve defter | Hizmet finansal yönetimi; sürekli iyileştirme | Tahmin doğruluğu | Üç aylık |
| Fayda tahmini doğruluğu | Fayda kanıt kurallarını kullanarak, tamamlanan girişimler için gerçekleşen faydanın beklenen faydaya oranı | onayda gerçekleşen fayda / beklenen fayda, girişim başına ve bir dağılım olarak | oran | İş gerekçesi kayıtları ve fayda sicili | Sürekli iyileştirme; hizmet değer sistemi yönetişimi | Paydaşlarla sonuç incelemesi | Üç aylık |
| Kanıta dayalı durdurma oranı | Kanıt resmi değiştirdiği için bir aşama kapısında durdurulan ya da yeniden şekillendirilen finanse edilmiş girişimlerin payı | bir kapıda kanıta dayanarak durdurulan ya da yeniden şekillendirilen girişimler / bir kapıya ulaşan girişimler | yüzde | Aşama kapısı karar günlüğü | Sürekli iyileştirme; portföy yönetişimi | Yayımlanmış işten öğrenme | Üç aylık |

Her rakam için dönemi, iskonto oranını ve neyin maliyet ya da fayda sayıldığını belirtin ve gerekçeyle birlikte kaydedin. YG ve NBD bunlara ağır biçimde bağlıdır; bu yüzden iki gerekçe ancak aynı kuralları kullanıyorlarsa karşılaştırılabilir. Maliyet ve fayda doğruluğu, tek bir ortalama olarak değil, geçmiş girişimler boyunca bir dağılım olarak, örneğin medyan oran ve yayılımla gösterilir. Düşük bir kanıta dayalı durdurma oranı, iyi seçim anlamına gelebilir ya da asla hayır demeyen kapılar anlamına gelebilir; bu yüzden doğruluk ölçümleriyle birlikte okuyun.

## Öneriler

### Gerekçeyi dürüstçe yazın

**1. Sorunla ve seçeneklerle başlayın.** Sorunu, onu kimin yaşadığını ve şu anda neye mal olduğunu betimleyin. En az üç seçeneği listeleyin: hiçbir şey yapmamak, asgari bir adım ve önerilen değişiklik ve ciddi bir alternatif varsa onu. “Hiçbir şey yapmamanın” devam eden olaylar ya da büyüyen risk gibi maliyetleri vardır ve bunları dahil etmek karşılaştırmayı adil kılar.

**2. Değişikliğin ömrü boyunca toplam sahip olma maliyetini sayın.** Yapımı, lisansları, barındırmayı, işletmeyi, desteği, eğitimi, geçişi, onu kullanacak insanların zamanını ve imhayı dahil edin. Yayından sonra gelen maliyetler, en sık dışarıda bırakılanlardır. Faydanın ömrüne uyan bir dönem kullanın ve ne olduğunu söyleyin.

**3. Her faydayı ve nasıl ölçüleceğini betimleyin.** Türleri ayırın. Maliyet tasarrufları gerçek harcamayı azaltır. Maliyetten kaçınma, aksi hâlde gerçekleşecek harcamayı önler ve doğrulaması daha zordur. Gelir faydaları piyasa davranışına bağlıdır. Risk azaltma, kayıp olasılığını ya da etkisini düşürür ve en iyi belirli bir senaryo üzerinden ifade edilir. Her biri için göstergeyi, taban çizgisini ve sahibi adlandırın (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”).

**4. Aralıklar verin ve onları neyin yönlendirdiğini söyleyin.** Maliyetler ve faydalar için ana varsayımlarla birlikte düşük, beklenen ve yüksek bir tahmin verin. [Duyarlılık analizi](https://en.wikipedia.org/wiki/Sensitivity_analysis), bir varsayım değiştiğinde sonucun nasıl değiştiğini ve hangi varsayımların en çok önemli olduğunu gösterir. Gerekçe yalnızca her varsayım cömert olduğunda işliyorsa bunu söyleyin. Simülasyon aralıkları birleştirebilir, ancak girdiler tahminse sahte bir rahatlık da verebilir.

### İyimserliği düzeltin

**5. Kendi geçmişinizi bir referans sınıfı olarak kullanın.** Geçmişteki benzer girişimlerinizin gerçek maliyet ve fayda sonuçlarına bakın ve tahmin edilenle karşılaştırın. Geçmiş girişimler ortalamada tahmin edilenden yüzde 30 fazlaya mal olduysa, bunu yok sayan yeni bir tahmin hatayı tekrarlama eğilimindedir. Ayarlayın ya da en azından ayarlamayı gösterin. Yukarıdaki maliyet ve fayda doğruluğu ölçümleri bu kaydı oluşturur.

**6. Gerekçeyi takım dışından biri gözden geçirsin.** Finanstan ya da başka bir takımdan, sonuca yatırım yapmamış bir meslektaş, gerekçeyi eksik maliyetler, cömert faydalar ve sınanmamış varsayımlar açısından okur. İncelemeyi rutin ve yapıcı yapın. Bundan sağ çıkan bir gerekçe daha güçlüdür.

**7. Mümkün olduğunda tahmin edenlerle savunanları ayırın.** Teslimat takımları emeği tahmin etmekte, sponsorlar ise değeri yargılamakta iyidir. Aynı kişi onay istediğinde tahminler kayar. Hangi sayıyı kimin ürettiğini kaydedin.

### Aşamalı finanse edin

**8. Finansmanı kanıta bağlı adımlarla serbest bırakın.** En riskli varsayımı sınamak için küçük bir ilk aşamayı finanse edin: ince bir dilim kurun, bir pilot çalıştırın ya da taban çizgisini ölçün. Sonraki aşamayı hangi kanıtın haklı çıkaracağını, hangisinin işi yeniden şekillendirmenizi sağlayacağını ve hangisinin sizi durduracağını önceden tanımlayın. Bu, çevik risk yaklaşımının paraya uygulanmasıdır ve yanılmanın maliyetini sınırlar.

**9. Her aşamada önünüzde olana göre karar verin.** Zaten harcanan para batık maliyettir ve devam edip etmemeyi etkilememelidir. Öğrendiklerinize göre kalan maliyetin kalan beklenen faydayla haklı çıkıp çıkmadığını sorun. Takımlara durma izni verin ve iyi kanıtlanmış bir durdurmayı iyi bir sonuç sayın.

**10. Paydaşları sürecin içinde tutun.** Gerekçeyi her aşamada sponsor ve fayda sahibiyle gözden geçirin. Baştan sona paydaşlarla iş birliği çevik bir temel amaçtır ve gerekçenin onaydan sonra kimsenin okumadığı bir belgeye dönüşmesini önler.

### Denetleyin ve öğrenin

**11. Sonucu gerekçeye karşı gözden geçirin.** Kararlaştırılan inceleme noktalarında gerçek maliyeti ve gerçekleşen faydayı tahminle karşılaştırın. Oranları, farkların nedenlerini ve bir sonraki gerekçede neyi değiştireceğinizi kaydedin. İncelemeyi suçlamasız ve olgusal yapın; çünkü dürüst raporlama buna bağlıdır.

**12. Doğruluk dağılımını karar vericilere raporlayın.** Geçmiş girişimler boyunca tahminlerin sonuçlarla nasıl karşılaştığını gösterin. Faydaların düzenli olarak benzer bir marjla kısa kaldığı bir portföy, liderlere yeni bir gerekçeye ne kadar güveneceklerini söyler ve yazarlara dürüst olmak için bir neden verir. Kapıların işleyip işlemediğini görmek için bunu kanıta dayalı durdurma oranıyla eşleyin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlanır | Eşlenmiş koruma metriği ya da pratiği |
| --- | --- | --- |
| Yatırım getirisi | Uzun bir dönem seçmek ya da yumuşak faydaları saymak; işletme maliyetini dışarıda bırakmak | Dönem ve maliyet kapsamı için sabit kurallar; fayda kanıtı kalitesi; bağımsız inceleme |
| Toplam sahip olma maliyeti | Destek, eğitim, değişiklik emeği ya da imhayı atlamak; iyimser hacimler kullanmak | Maliyet kategorileri kontrol listesi; benzer geçmiş işlerin gerçek TSM'si ile karşılaştırmak |
| Geri ödeme süresi | Başlangıcı geç tanımlamak; gerçekleşmeyen faydaları saymak | Saat tanımı sabit; gerçekleşen fayda doğruluğuyla karşılaştırmak |
| Net bugünkü değer | Düşük bir iskonto oranı seçmek; ufku uzatmak | Finans politikasıyla belirlenen iskonto oranı; gösterilen duyarlılık analizi |
| Maliyet tahmini doğruluğu | Temel tahmini sonradan revize etmek; aşımları kapsam değişikliği olarak dışlamak | Onayda dondurulmuş tahmin; kapsam değişikliklerini onayla günlüğe kaydetmek; tamamlanma için toplam maliyeti göstermek |
| Fayda tahmini doğruluğu | Ölçülmemiş faydaları saymak; faydayı yeniden tanımlamak | Fayda sicili kuralları; teslimat takımı dışındaki sahibin doğrulaması |
| Kanıta dayalı durdurma oranı | Oranı şişirmek için düşük değerli işi durdurmak; hiçbir şeyi asla durdurmamak | Doğruluk ölçümleriyle birlikte okumak; durdurma ve devam etme nedenlerini incelemek |

Sağlıklı bir okuma, bir sicil kaydı olan bir portföydür: bilinen bir biçimde biraz iyimser olan tahminler, aralıklar ve duyarlılık içeren gerekçeler ve zaman zaman işi kanıta dayanarak durduran kapılar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Büyük, peşin iş gerekçesi | Net taahhüt ve denetim | Varsayımları kilitler; iyimserliği davet eder |
| Aşamalı finansman | Yanılmanın maliyetini sınırlar; erken öğrenir | Kapılarda disiplin gerektirir; planlama için daha az kesinlik |
| Tek YG rakamı | Karşılaştırması basit | Varsayımları gizler; oyunlaması kolay |
| Duyarlılıklı aralık | Belirsizlik konusunda dürüst | Karşılaştırması daha zor; belirsiz hissettirebilir |
| Nitel gerekçe | Stratejik ve risk nedenlerini yakalar | Karşılaştırması ve doğrulaması zor |
| Nicel gerekçe | Karşılaştırılabilir ve sınanabilir | Sahte kesinlik; sayılamayanı dışarıda bırakır |
| Dış referans sınıfı | İyimserliği düzeltir | Bağlamınıza uymayabilir |
| Kendi geçmişiniz referans sınıfı | Bağlamınıza uyar | Bir kayıt gerektirir; küçük örneklemler |

Düz yazıyla yanıt şudur: aşamalı finansmanı, aralıkları ve kendi geçmişinizi, sayıların kaçırdıklarına dair kısa bir nitel anlatımla birlikte kullanın. YG'yi, NBD'yi ve geri ödemeyi hüküm olarak değil özet olarak kullanın.

## Takımınızla tartışılacak sorular

**1. Son beş iş gerekçemiz ne kadar yanlıştı ve hangi yönde?**
Yakın tarihli girişimler için tahmin edilen ve gerçekleşen maliyetleri ve faydaları toplayın. Oranları hesaplayın. Yayılıma ve hataların tek yöne eğilip eğilmediğine bakın. Kolaylaştırıcı ilk turda açıklamalara direnmeli ve yalnızca örüntüyü kaydetmelidir. Sonra bunun bir sonraki gerekçe için ne anlama geldiğini tartışın.

**2. Mevcut önerimizdeki en riskli varsayım nedir ve onu ne kadar ucuza sınayabiliriz?**
Varsayımları listeleyin ve gerekçenin her birine ne kadar bağlı olduğuna ve ne kadar emin olmadığımıza göre sıralayın. En üsttekiler için küçük bir sınama tasarlayın. Yanıt, ilk finansman aşamasını şekillendirir.

**3. Hiçbir şey yapmamak neye mal olur ve bunu gerekçeye koyduk mu?**
Öneri onaylanmazsa olası yolu betimleyin: devam eden olay maliyetleri, artan bakım, büyüyen risk. Bir aralıkla tahmin edin. Gerekçenin onunla adil karşılaştırıldığını denetleyin.

**4. Projelerimizde hangi maliyetler hep geç ortaya çıkıyor?**
İşletmeyi, eğitimi, geçişi ve hizmetten kaldırmayı düşünün. Gerekçeyi her biri için denetleyin. Şablona standart bir maliyet kategorileri kontrol listesi ekleyin.

**5. Takım dışından kim sayılarımıza itiraz etti ve ne dedi?**
Son bağımsız incelemeyi gözden geçirin. Hiç yoksa bir sonrakini kimin yapacağına karar verin. Konuşma, incelemenin gerekçeye bir hizmet olduğunu, saldırı olmadığını netleştirmelidir.

**6. Kanıt değiştiği için en son ne zaman bir şeyi durdurduk ve nasıl hissettirdi?**
Durdurulmuş ya da yeniden şekillendirilmiş bir girişimi hatırlayın. Nasıl karşılandığını ve güvene ne yaptığını tartışın. Bir sonraki durdurmayı öğrenme gibi hissettirmenin yolunu kararlaştırın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları maliyet tahminlerini sağlar ve finansman aşamalarından öğrenir. Aralıklarla tahmin etmeli, gerçek maliyetleri kaydetmeli ve varsayımlar bozulduğunda sesini yükseltmelidir. Aşamalı finansman, onların en çok önemli olanı öğrenmeye odaklanmasına izin verir ve kanıta dayalı bir durdurma başarı sayılmalıdır.

### Hizmet ve operasyon takımları

Operasyon takımları, yayından sonraki maliyetin büyük bölümüne sahiptir ve çoğu zaman gerekçenin dışında bırakılır. Onlardan işletme maliyetleri, destek emeği ve riskler istenmeli ve olayların azalması gibi işlerine bağlı faydaları denetlemelidirler. Operasyondaki tasarruf iddialarını kendi verilerinden doğrulayabilirler.

### Liderlik ve yönetişim

Liderler neyin finanse edileceğine karar verir ve dürüstlük iklimini belirler. Aralıklar ve varsayımlar istemeli, tahminlerin sicilini gözden geçirmeli, aşamalı finanse etmeli ve bir durdurmayı normal bir sonuç olarak kabul etmelidir. Yönetişim, büyük gerekçeler için bağımsız inceleme ve uygulama sonrası denetim gerektirmeli ve sonuçların portföyüne bakmalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar ve iş sahipleri, faydaları ve aksamayı taşır. Gerekçenin parçası olmalı, sorunu ve faydayı tanımlamaya yardım etmeli ve neye karar verildiği ve nedeni kendilerine söylenmelidir. Teslimattan sonraki deneyimleri, gerekçenin doğru olup olmadığının en iyi sınavıdır.

## Uygulamada: çevik bir ITIL örneği

Bir eyalet sağlık kurumunun BT grubu, rutin erişim taleplerini otomatikleştirmek ve elle ele almayı azaltmak için bir program önerir. Aşağıdaki sayılar açıklayıcıdır.

Önerinin ilk taslağı, yılda 18.000 talebe, ortalama bir elle ele alma maliyetine ve taleplerin yüzde 80'inin tam otomasyonuna dayanarak beş yılda yüzde 240 YG iddia eder. Finans iş ortağı, grubun kendi geçmişini uygulamayı önerir. Sekiz geçmiş girişimi çeker: gerçek maliyet tahminin medyan 1,35 katıdır ve aralık 1,0 ile 1,9 arasındadır, gerçekleşen fayda ise beklenen faydanın medyan 0,6'sıdır. Grup ayrıca talep hacmi rakamının tek bir yoğun yıldan geldiğini ve maliyet tahmininin eğitimi ve istisnaları gözden geçiren personelin zamanını dışarıda bıraktığını bulur.

Takım gerekçeyi aralıklarla yeniden yazar. Maliyet geçmişi kullanıldığında beklenen maliyet üçte bir artar. Fayda geçmişi kullanıldığında beklenen fayda kabaca yarıya iner. Gözden geçirilmiş gerekçe, hafifçe negatiften yaklaşık yüzde 70'e kadar bir aralıkta YG, 20 ile 40 ay arasında bir geri ödeme süresi ve finans politikası iskonto oranında orta ve beklenen durumlarda pozitif, düşük durumda negatif bir NBD gösterir. Duyarlılık analizi, otomatikleştirilebilecek talep payının en çok önemli olduğunu gösterir. Öneri aşamalara yeniden şekillendirilir. İlk aşama, otomasyon payını sınamak ve taban çizgisi ele alma süresini ölçmek için, toplamın yaklaşık beşte biri bütçeyle en yaygın üç talep türünü otomatikleştirir. İkinci aşamanın ölçütleri yazılır: bu talep türlerinin en az yüzde 50'sinin tam otomatikleştirilmesi ve talep başına ele alma süresinin belirtilen bir miktar azalması; fayda sahibi bunu doğrular.

İlk aşamadan sonra üç talep türünün yüzde 58'i otomatikleştirilmiştir ve istisnalar beklenenden uzun sürmektedir. Takım, daha fazla türe genişletmeden önce istisna ele almayı iyileştirmek için ikinci aşamayı yeniden şekillendirir. Kurumun yönetim kurulu, YG rakamının neden düştüğünü sorar. Direktör, önceki rakamın tam otomasyonu ve aşım geçmişi olmadığını varsaydığını ve yeni aralığın daha dürüst olduğunu açıklar. Karar kaydedilir. İkinci aşamanın kanıta dayalı yeniden şekillendirilmesi günlüğe kaydedilir ve portföyün maliyet ve fayda doğruluğu tabloları güncellenir.

## Sektör mercekleri

**Girişim (startup).** Kaynaklar kıttır ve öğrenme hızı önemlidir. En riskli varsayımı ve ucuz bir sınamayı içeren tek sayfalık bir gerekçe kullanın, küçük adımlarla finanse edin ve ayrıntılı finansal modellerden kaçının. Bağlayıcı kısıt çoğu zaman NBD değil, pisttir (runway).

**Küçük işletme.** Sahip, hem sponsor hem finans işlevidir. Geri ödemeye ve nakit akışına odaklanın, personelin zamanını dahil edin ve hiçbir şey yapmama ve satın alma seçenekleriyle karşılaştırın. Cömert olma eğilimindeki, tedarikçilerin sunduğu YG hesaplayıcılarına dikkat edin.

**Büyük işletme.** Portföy yönetişimi, iskonto oranlarına dair finans politikası ve çok sayıda yarışan öneri tutarlılığı önemli kılar. Gerekli maliyet kategorileriyle standart bir şablon, büyük gerekçeler için bağımsız inceleme ve uygulama sonrası bir inceleme kullanın. Tahmin doğruluğunun sicilini sponsor ve girişim türü bazında, insanların sıralaması olarak değil bir portföy aracı olarak tutun.

**Kamu sektörü.** Kamu kurumları çoğu zaman, seçeneklerin nasıl değerlendirileceğini, iyimserlik yanlılığının nasıl ele alınacağını ve parasal olmayan faydalar dahil kamu yararı karşılığını nasıl dikkate alacağını ortaya koyan Birleşik Krallık Green Book'u gibi resmî değerlendirme kılavuzlarını izler. Faydalar toplumsal olabilir ve paraya çevrilmesi zor olabilir; şeffaflık ve denetim önemlidir. Sizin için geçerli kılavuzu kullanın, varsayımları belgeleyin ve faydaların kanıtını kaydedin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bu konu başlı başına iş gerekçesi hakkındadır; bu yüzden mesele onu iyi yapmanın maliyetidir. Özenli bir gerekçe yazmak saatler değil günler alır ve bağımsız inceleme daha fazlasını alır. Maliyet ve fayda doğruluğunu izlemek, her girişimin tahmininin ve sonucunun basit bir kaydını gerektirir ve pek çok kurumda bu yoktur. Aşamalı finansman yönetişim toplantıları ekler.

Getiri, kıt paranın daha iyi dağıtımı ve daha az büyük başarısızlıktır. Dürüst gerekçeler, iyimser olanları izleyen sürprizleri azaltır. Bir sicil kaydı, liderlerin yeni gerekçeleri uygun biçimde iskonto etmesine olanak verir; bu da tüm portföyü daha güvenilir kılar. Argümanı kendi geçmişinizden kurun: gerçekleşen maliyetin ve faydanın tahmin edilene oranları, sonradan terk edilen girişimlere harcanan para ve incelemenin maliyetinin önlediği aşımlarla karşılaştırması. Yönteminin ve sizin iş türünüzle ilgisinin izini sürebildiğiniz sürece proje başarısızlık oranlarına dair çalışmaları aktarmaktan kaçının.

## Anti-desenler ve tuzaklar

- **Olgu gibi sunulan tek bir YG rakamı.** Varsayımları gizler. Aralıkları ve duyarlılığı gösterin.
- **İşletme maliyetini dışarıda bırakmak.** Yapım, ömür maliyetinin bir kesridir. Tüm ömrü sayın.
- **Yumuşak faydaları sert saymak.** Maliyetten kaçınma ve verimlilik iddiaları kanıt gerektirir. Bunları etiketleyin ve sınayın.
- **Yalnızca aşağıdan yukarıya tahmin etmek.** İyimserliği tekrarlar. Kendi geçmişinizle karşılaştırın.
- **Tüm finansman peşin.** Tahminleri kilitler. Kanıt kapılarıyla aşamalı finanse edin.
- **Zaten harcanmış para yüzünden devam etmek.** Önünüzde olana göre karar verin.
- **Kendi ödevini notlandırmak.** Maliyetleri ve faydaları bağımsız bir okuyucuya inceletin.
- **Gerekçeyi bir daha ele almamak.** Sonuç incelemeleri olmadan hiçbir şey iyileşmez. Tahminleri sonuçlara karşı denetleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Gerekçeyi yazmak | Başlıkta bir rakamla gayriresmî sunum | Maliyetleri ve faydaları içeren şablon | TSM kontrol listesi, aralıklar ve duyarlılıkla standart şablon | Kendi geçmişine göre ayarlama uygulanır; bağımsız inceleme | Gerekçeler iş sahipleri ve finansla birlikte geliştirilir; portföy genelinde paylaşılan varsayımlar |
| Finansman | Hepsi peşin | Kilometre taşları | Kanıt ölçütleriyle aşamalı finansman | Kapılar işi düzenli olarak kanıta dayanarak yeniden şekillendirir ya da durdurur | Portföy finansmanı, kanıta dayanarak girişimler arasında esner |
| Öğrenme | Takip yok | Ara sıra inceleme | Gerekçeye karşı uygulama sonrası inceleme | Maliyet ve fayda doğruluğu dağılım olarak izlenir ve yeni gerekçelerde kullanılır | Öğrenme kurum genelinde ve iş ortaklarıyla paylaşılır; yöntem iyileşir |

## Kontrol listesi

- [ ] Gerekçe, hiçbir şey yapmamak dahil seçenekleri listeler.
- [ ] Toplam sahip olma maliyeti yapımı, işletmeyi, desteği, eğitimi, değişikliği ve imhayı kapsar.
- [ ] Her faydanın bir türü, bir göstergesi, bir taban çizgisi ve bir sahibi vardır.
- [ ] Maliyetler ve faydalar, sürücüleri belirtilen aralıklar olarak verilir.
- [ ] Bir duyarlılık analizi hangi varsayımların en çok önemli olduğunu gösterir.
- [ ] Tahminler, benzer girişimlerin kendi geçmişinizle karşılaştırılır.
- [ ] Bağımsız bir gözden geçiren gerekçeyi okumuştur.
- [ ] Finansman, devam etme, yeniden şekillendirme ya da durdurma için kanıt ölçütleriyle aşamalıdır.
- [ ] Sonuçlar, kararlaştırılan tarihlerde gerekçeye karşı gözden geçirilir.
- [ ] Geçmiş girişimler boyunca maliyet ve fayda doğruluğu karar vericilere raporlanır.

## Yapay zekâ istemleri

**Bir iş gerekçesini stres testinden geçirin.**

```text
İşte [girişim] için iş gerekçemizin bir özeti: maliyetler [aralıklı liste],
faydalar [tür ve aralıklı liste], dönem [yıl], iskonto oranı [finansın
belirlediği oran] ve varsayımlar [liste]. Eksik maliyet kategorilerini,
daha güçlü kanıt gerektiren faydaları, sonuca hâkim olan varsayımları ve
iyimserlik risklerini belirle. Bir duyarlılık analizi ve aşamalı bir
finansman yapısı öner. Rakam uydurma. Varsayımlarını ve yanıtlamam gereken
soruları listele.
```

**Geçmişimizden bir referans sınıfı oluşturun.**

```text
Tahmin edilen ve gerçekleşen maliyet ve faydalarıyla şu geçmiş girişimlerimiz
var: [bir tablo yapıştırın]. Gerçekleşenin tahmin edilene oranlarını hesapla,
medyanı ve yayılımı betimle, girişim türüne göre herhangi bir örüntü hakkında
yorum yap ve yeni bir girişimi tahmin ederken bunu nasıl kullanacağımı öner.
Örneklemin güvenmek için çok küçük olduğu yerlerde beni uyar. Dış kıyaslama
değerleri kullanma. Varsayımlarını listele.
```

**Aşama kapıları tasarlayın.**

```text
[girişim] için üç finansman aşaması öner. Her biri için sınanacak en riskli
varsayımı, devam etmeyi haklı çıkaracak kanıtı, işi yeniden şekillendirmemizi
sağlayacak kanıtı ve bizi durduracak kanıtı belirt. Her aşamayı küçük ve ucuz
tut. Belirli bir teslimat yöntemi varsayma. Varsayımlarını ve liderlik girdisi
gerektiren kararları listele.
```

**Bir uygulama sonrası inceleme yazın.**

```text
[girişim] için tek sayfalık bir uygulama sonrası inceleme taslağı hazırla.
Girdiler: özgün gerekçe [özet], gerçek maliyet [rakamlar], gerçekleşen fayda
ve kanıtı [özet] ve yol boyunca neyin değiştiği [liste]. Maliyet ve fayda
oranlarını, farkların nedenlerini, bir sonraki gerekçede neyi değiştireceğimizi
ve fayda sahibi için soruları içersin. Tonu olgusal ve suçlamasız tut.
Varsayımlarını ve denetlenmesi gereken her iddiayı listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir iş gerekçesi ya da YG metriği için eşlenmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir finansal metrik girdisinin dönemini, varsayımlarını, oyunlama yolunu ve koruma önlemini belirttiğini denetlemek için kullanın.

## Temel çıkarımlar

- İş gerekçesi bir tahmindir: aralıkları, varsayımları ve duyarlılığı gösterin.
- Değişikliğin ömrü boyunca toplam sahip olma maliyetini sayın ve hiçbir şey yapmamakla karşılaştırın.
- İyimserliği, kendi tahmin ve sonuç geçmişinizi kullanarak düzeltin.
- Aşamalı finanse edin, önünüzde olana göre karar verin ve kanıta dayalı bir durdurmayı başarı sayın.
- Sonuçları gerekçeye karşı gözden geçirin ve doğruluğu karar vericilere raporlayın.
- YG'yi, NBD'yi ve geri ödemeyi, belirtilmiş kurallarla özet olarak kullanın, hüküm olarak değil.

## Kaynaklar ve ileri okuma

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
