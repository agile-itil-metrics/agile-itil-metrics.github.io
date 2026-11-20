# FinOps ve bulut maliyeti metrikleri

**Bulut harcamasına her gün mühendisler karar verir; bu yüzden hizmetleri geliştiren ve işleten insanlara maliyet verisini, bağlamı ve bunun üzerine harekete geçme yetkisini verin ve israfı, dağıtımı ve birim maliyeti güvenilirliğe gösterdiğiniz özenle ölçün.**

## Genel bakış ve motivasyon

Bir veri merkezinde harcamaya satın alma siparişleriyle karar verilir ve birkaç büyük adım olarak gelir. Bulutta bir geliştirici, birkaç satır yapılandırmayla kurumu yinelenen bir ücrete bağlayabilir ve unutulmuş bir test ortamı aylarca para harcayabilir. [Bulut bilişim](https://en.wikipedia.org/wiki/Cloud_computing), bilişim kaynaklarına talep üzerine erişim sunar ve beraberinde gelen [kullandıkça öde](https://en.wikipedia.org/wiki/Pay_as_you_go) modeli, faturanın kullanımı izlemesi demektir. Bu hem güçlü hem risklidir. Bir takımın dakikalar içinde ölçeklenmesine izin veren aynı esneklik, maliyetin kimsenin fark edebileceğinden daha hızlı büyümesine de izin verir.

Finans ve operasyonun bir kısaltması olan FinOps, bulut maliyetini yönetmeye yönelik bir pratik ve kültürdür. FinOps Foundation bunu, mühendislik, finans, satın alma ve iş takımlarının veriye dayalı harcama kararları üzerinde iş birliği yaptığı bir operasyonel çerçeve olarak tanımlar. Merkezî fikri, bulut kaynaklarını kullanan insanların maliyetlerini görmesi ve sahiplenmesi, finansın ise yapıyı, tahminleri ve taahhütleri sağlamasıdır. Bu, paydaşlar arasında sürekli iş birliği ve hizmetlerinin sahibi olan takımlar çevik amaçlarıyla ve ITIL'in hizmet finansal yönetimi kaygısıyla örtüşür. Bu konu, bu pratiği somut kılan ölçümleri kapsar. Önceki konudaki genel maliyetlendirme fikirleri üzerine kurulur (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”).

Bulut maliyetinin kendi ölçümlerini gerektiren özellikleri vardır.

- **Esneklik.** [Otomatik ölçekleme](https://en.wikipedia.org/wiki/Autoscaling) kaynakları talebe göre ayarlar; bu da maliyeti değişken ve bazen şaşırtıcı kılar. [Sunucusuz bilişim](https://en.wikipedia.org/wiki/Serverless_computing) yürütme başına ücretlendirir ve dikkati sunuculardan isteklere kaydırır.
- **Çok sayıda küçük karar.** Örnek boyutu, depolama katmanı, bölge ve mimari seçiminin her biri maliyeti değiştirir. Harcama, birçok insanın verdiği yüzlerce kararın içine dağılmıştır ve etiketler ve iyi raporlama olmadan görülmesi zordur.
- **Fiyatlandırma modelleri.** Talep üzerine fiyatlar esnektir ve en yüksektir. Ayrılmış kapasite ya da tasarruf planları gibi [hacim indirimi](https://en.wikipedia.org/wiki/Volume_discount) karşılığı taahhütler, kullanım sözü karşılığında birim fiyatı düşürür. Spot ya da geri alınabilir kapasite ucuzdur ve geri alınabilir. Her modelin bir riski vardır ve doğru karışım, iş yükünün ne kadar öngörülebilir olduğuna bağlıdır. Kesin koşullar sağlayıcılar arasında farklıdır ve sık değişir; bu yüzden herhangi bir ayrıntıya güvenmeden önce güncel sağlayıcı belgelerini denetleyin.
- **Ortak ve etiketsiz maliyet.** Sahip ya da amaç etiketi olmayan kaynaklar atfedilemez. Ortak platformlar, onları farklı tüketen takımlar arasında maliyet yayar.
- **Çevresel maliyet.** Bulut iş yükleri enerji tüketir ve emisyona neden olur; bir iş yükünün [karbon ayak izi](https://en.wikipedia.org/wiki/Carbon_footprint) giderek raporlanması gereken bir şey hâline geliyor. Bunu tahmin etme yöntemleri hâlâ gelişmektedir ve sayılar yöntemleriyle birlikte gelmelidir.

Buluttaki maliyet ölçümleri kısayollarla kolayca kazanılır. Harcamayı izlemeyi kapatarak ya da hizmet çökene kadar kaynakları küçülterek kesmek, daha düşük bir fatura ve daha kötü bir hizmet gösterir. [Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi geçerlidir: buradaki her maliyet ölçümü bir güvenilirlik ya da kalite ölçümünün yanında durur ve hiçbir takım faturasına göre sıralanmaz (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Maliyet bir mühendislik metriğidir.** Bir hizmeti geliştiren ve işleten takımlar maliyetini görür ve sahiplenir.
- **Sahiplere dağıtın.** Her dolar bir takıma ya da bildirilmiş ortak bir havuza eşlenmelidir.
- **Maliyeti kalite ve güvenilirlikle eşleyin.** Hizmeti bozan tasarruf tasarruf değildir.
- **Sürekli ve küçük adımlarla iyileştirin.** İsrafı düzenli gözden geçirin ve normal işin parçası olarak harekete geçin.
- **Aralıklarla tahmin edin.** Değişken talep, tek sayılı tahminleri kırılgan kılar.
- **İşlevler arası iş birliği yapın.** Mühendislik, finans, satın alma ve iş birlikte karar verir.
- **Takımları faturalarına göre sıralamayın.** Hizmetler farklıdır ve büyüme israf değildir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL pratiği | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dağıtım kapsamı | Bulut harcamasından sahibi olan bir takıma ya da bildirilmiş ortak bir havuza atfedilenin payı | geçerli sahip ve hizmet etiketi olan ya da bildirilmiş ortak havuzdaki harcama / toplam bulut harcaması | yüzde | Bulut faturalama dışa aktarımı, etiket politikası | Hizmet finansal yönetimi; BT varlık yönetimi | Takımın işlettiğinin sahipliği | Haftalık |
| Bulut birim maliyeti | Kullanıcıların değer verdiği bir şeyin birimi başına bulut kaynaklarının maliyeti | dönemde hizmetin bulut maliyeti / dönemde teslim edilen birimler | para birimi/birim | Hizmet hacmiyle birleştirilmiş faturalama verileri | Hizmet finansal yönetimi; hizmet düzeyi yönetimi | Sonuç başına hizmet sunma maliyeti | Aylık |
| İsraf oranı | Atıl ya da açıkça gereğinden büyük kaynaklara yapılan harcamanın payı | kapsamdaki kaynaklar üzerindeki toplam harcama içinde, kararlaştırılan kurallara göre atıl ya da gereğinden büyük kaynaklara yapılan harcama | yüzde | Kullanım metrikleri ve faturalama | Kapasite ve performans yönetimi; finansal yönetim | Araç zincirinde israfın azaltılması | Haftalık |
| Taahhüt kapsamı | İndirimli taahhütlerle karşılanan uygun kararlı kullanımın payı | taahhütlerle karşılanan uygun kullanım / uygun kullanım | yüzde | Faturalama ve taahhüt raporları | Hizmet finansal yönetimi; tedarikçi yönetimi | Öngörülebilir talep için planlama | Aylık |
| Taahhüt kullanımı | Satın alınan taahhütlerin kullanılanının payı | kullanılan taahhüt saatleri / satın alınan taahhüt saatleri | yüzde | Taahhüt raporları | Hizmet finansal yönetimi; tedarikçi yönetimi | Planlı yatırımdan değer | Aylık |
| Tahmin sapması | Takım bazında ve toplamda tahmin ile gerçekleşen bulut harcaması arasındaki fark | (gerçekleşen eksi tahmin) / tahmin | yüzde | Tahmin günlüğü ve faturalama verileri | Hizmet finansal yönetimi | Tahmin doğruluğu | Aylık |
| Anomali kabul süresi | Bir maliyet anomalisi uyarısından sahibin kaydedilmiş bir kararına kadar geçen süre | uyarıdan sahip yanıtına kadar geçen saatlerin medyanı ve 85. yüzdeliği | saat | Anomali uyarıları ve bilet kayıtları | İzleme ve olay yönetimi; olay yönetimi | Bir üretim sinyaline duyarlılık | Aylık |

Kaynakların kapsamını, etiket kurallarını ve neyin atıl ya da gereğinden büyük sayıldığını tanımlayın ve kaydedin. Taahhüt kapsamı yalnızca kararlı taban kullanıma göre hesaplanır, tepe noktalarına göre değil. Birim maliyet, hizmet sahibiyle üzerinde anlaşılmış ve eğilim için sabitlenmiş bir birim kullanır. Maliyet verisi; kredileri, indirimleri, vergileri ve destek ücretlerini içerip içermediğini ve hangi para biriminin ve döviz kurunun geçerli olduğunu söylemelidir.

## Öneriler

### Maliyeti görünür ve sahipli yapın

**1. Küçük, zorunlu bir etiket kümesi uygulayın.** Her kaynağın bir sahip, bir hizmet ve bir ortam etiketi taşımasını, sonradan bir temizlikle değil oluşturma anında politikayla zorunlu kılarak şart koşun. Dağıtım kapsamı bunun ne kadar iyi çalıştığını ölçer. Etiketlemeyen kaynaklar engellenebilir ya da bir gün içinde hesap sahibine işaretlenebilir. İnsanlar uysun diye etiket kümesini küçük tutun.

**2. Takımlara kendi maliyet görünümlerini verin.** Her takıma, hizmet ve ortam bazında harcamasının eğilimler ve anomalilerle birlikte günlük ya da haftalık bir görünümünü sağlayın. İnsanlar görüp anlayabildikleri verilere yanıt verir. Aylık gelen ve yalnızca finansa giden bir rapor pek az şey değiştirir.

**3. Ortak maliyet havuzlarını ve sürücülerini tanımlayın.** Ortak platformlar, ağ ve destek ücretleri, nasıl dağıtılacaklarına dair bir kurala ihtiyaç duyar (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”). Kuralı yayımlayın, takımlarla gözden geçirin ve havuzu küçük tutun. İnsanların izleyebildiği bir kural, kimsenin anlamadığı adil bir kuraldan daha çok güven kazanır.

**4. Kısa, düzenli bir maliyet konuşması yapın.** Mühendislik, finans ve ürün sahiplerini, büyük harcamacılar için haftalık ya da iki haftalık, diğerleri için aylık düzenli bir ritimle otuz dakika boyunca bir araya getirin. Eğilimi, anomalileri ve iyileştirme birikim listesini gözden geçirin. Bu, pratikte sürekli iş birliğidir ve ağır bir süreç olmadan maliyeti gündemde tutar.

### Yalnızca harcamayı değil değeri ölçün

**5. Maliyeti birim başına ifade edin.** Toplam bulut harcaması başarıyla artar. Önemli olan, aktif müşteri, işlem ya da derleme başına maliyettir. Hizmet için anlamlı bir birim seçin, zaman içinde izleyin ve değişiklikleri not edin. Artan toplam harcamayla düşen birim maliyet sağlıklı bir örüntüdür; sabit kullanımla artan birim maliyet ise araştırma için bir uyarıdır.

**6. Maliyetin yanında güvenilirliği ve kaliteyi gösterin.** Maliyeti aynı hizmetin kullanılabilirliği, gecikmesi ve hata oranıyla birlikte gösterin (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”). Hata oranlarını yükselten maliyet tasarrufları, maliyetin kullanıcılara aktarılmasıdır. Bir hata bütçesi yaklaşımı ödünleşimi açık hâle getirebilir: hizmet gerekenden çok daha iyiyken daha az harcayın ve değilken yatırım yapın.

**7. İsrafı açık kurallarla izleyin.** Atıl (örneğin bir dönemde anlamlı kullanım yok) ve gereğinden büyük (örneğin kullanım sürekli olarak sağlanan kapasitenin çok altında) tanımlarını yapın ve her birine yapılan harcamayı raporlayın. Kurallar özen gerektirir: dayanıklılık için bir bekleme sistemi tasarım gereği atıl görünür ve hariç tutulup etiketlenmelidir. Kurallar yanlış pozitifler ürettiğinde bunları yeniden gözden geçirin.

### Bulduklarınıza göre harekete geçin

**8. Boyutlandırmayı ve temizliği normal işin içinde yapın.** İsraf gidermeyi takımın birikim listesinde sürekli bir kalem yapın ve sürekli iyileştirmenin parçası olarak küçük adımlarla ele alın. Üretim dışı ortamları mesai dışında durdurulacak şekilde zamanlayın, bağlı olmayan depolamayı silin, uygun depolama katmanlarını seçin ve önce en büyük kalemleri gözden geçirin. Küçük düzenli değişiklikler, baskı arttığında unutulma eğilimindeki nadir kahramanca temizliklerden daha iyi sonuç verir.

**9. Fiyatlandırma modelini iş yüküne uydurun.** Kararlı taban kullanım için taahhütleri, değişken yük için talep üzerine kapasiteyi ve kesintiye dayanıklı iş için kesintiye uğratılabilir kapasiteyi kullanın. Taahhüdü kademeli, küçük miktarlarla verin ve hem kapsamı hem kullanımı izleyin. Aşırı taahhüt parayı israf eder, yetersiz taahhüt prim öder. Finansı ve satın almayı işe katın ve koşulları sağlayıcıyla yeniden denetleyin; çünkü değişirler.

**10. Anomalileri saptayın ve yanıt verin.** Harcama üzerinde, bir taban çizgisine göre ani değişiklikleri işaretleyen anomali saptama kullanın. [Anomali saptama](https://en.wikipedia.org/wiki/Anomaly_detection) araçları basit eşiklerden istatistiksel modellere uzanır. Sahibi takımı uyarın ve kabul etmenin ve karar vermenin ne kadar sürdüğünü ölçün. Yanlış yapılandırılmış bir iş saatler içinde büyük bir fatura çıkarabilir; bu yüzden hız önemlidir (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”).

### Tahmin edin ve planlayın

**11. Aralıklar ve sürücülerle tahmin edin.** Tahminleri, beklenen kullanıcılar ya da işlemler gibi talebin sürücülerinden ve birim maliyetten kurun. Tahmin ile gerçekleşen arasındaki farkları açıklamak için [sapma çözümlemesini](https://en.wikipedia.org/wiki/Variance_analysis) kullanın ve hacim, fiyat ve karışımdan kaynaklananları ayırın. Bir aralık verin ve varsayımları belirtin. Model iyileştikçe tahmin sapması küçülmelidir.

**12. Sürdürülebilirliği resme katın.** Büyük iş yükleriyle ilişkili emisyonları, sağlayıcı raporları ya da yayımlanmış metodolojiler gibi belgelenmiş bir yöntemle tahmin edin ve tahminin sınırlarını belirtin. Bölge, örnek türü ve zamanlama seçimlerini hem maliyet hem emisyon açısından karşılaştırın. Birim başına emisyonu birim başına maliyetin eşlikçisi olarak ele alın ve yöntemin destekleyemeyeceği bir kesinlik iddia etmeyin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlanır | Eşlenmiş koruma metriği ya da pratiği |
| --- | --- | --- |
| Dağıtım kapsamı | Her şeyi hepsini kapsayan bir sahibe etiketlemek; büyük tutarları ortak olarak bildirmek | Hepsini kapsayan sahiplerin sahip olduğu harcama payı; ortak havuz büyüklüğü ve incelemesi; sahip doğrulama örneği |
| Bulut birim maliyeti | Ucuza büyüyen bir birim seçmek; maliyeti kesmek için güvenilirliği kesmek | Sabit birim tanımı; güvenilirlik ve kalite eşlikçileri |
| İsraf oranı | Atıl tanımını daraltmak; israfı kapsam dışı bir hesaba taşımak | Sicilde kurallar; tüm hesapları taramak; kuralların hariç tuttuğu kaynaklardan örnek almak |
| Taahhüt kapsamı | Yüksek bir yüzdenin peşinden şişirilmiş taban çizgilerine taahhüt vermek | Taahhüt kullanımı; taban çizgisini kullanım geçmişiyle denetlemek |
| Taahhüt kullanımı | Taahhütleri doldurmak için gerekmeyen uygun kullanımı eklemek | Gerçek talepteki büyümeyle karşılaştırmak; birim maliyet |
| Tahmin sapması | Tahminleri şişirmek; geç revize etmek | Tahmini başlangıçta günlüğe kaydetmek; aralık genişliğini ve isabet oranını izlemek |
| Anomali kabul süresi | Uyarıları bakmadan kabul etmek; uyarıları otomatik kapatmak | Bir karar ve sonuç kaydetmek; yanıt kalitesi için uyarılardan örnek almak |

Sağlıklı bir okuma; neredeyse tüm harcamanın sahipli ve görünür olması, açıklanmış nedenlerle hareket eden birim maliyet, kesinti olmadan küçülen israf, kullanılan taahhütler ve hatası zamanla daralan tahminlerdir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Merkezî bulut takımı harcamayı denetler | Tutarlılık ve pazarlık gücü | Yavaş; mühendislik kararlarından uzak |
| Takımlar kendi bulut maliyetlerine sahip çıkar | Hızlı, bilgili kararlar | Veri, eğitim ve koruma önlemleri gerektirir |
| Yalnızca talep üzerine | Esnek | En yüksek birim fiyat |
| Ağır taahhütler | Daha düşük birim fiyat | Talep düşerse kilitlenme ve israf |
| Sıkı bütçe tavanları | Aşımları önler | Kesintilere yol açabilir ya da geçerli işi engelleyebilir |
| Uyarılar ve inceleme | Hızı korur | Zamanında yanıta bağlıdır |
| Agresif boyutlandırma | Para tasarruf eder | Fazla yapılırsa performansa risk |
| SLO'larla ölçülü boyutlandırma | Dengeli | Güvenilirlik verisi ve özen gerektirir |

Düz yazıyla yanıt şudur: takımlara veri ve sahiplik verin, hizmetin kritik olduğu yerde sert duruşlar yerine uyarılar ve bütçeler gibi koruma önlemleri koyun, kararlı taban çizgisine kademeli taahhüt verin ve maliyeti her zaman güvenilirlikle eşleyin.

## Takımınızla tartışılacak sorular

**1. Bulut faturamızın ne kadarını bugün bir sahibe atfedebiliyoruz ve kim bulunamıyor?**
Geçerli etiketli harcama payına ve etiketsiz en büyük kalemlere bakın. Her birinin sahibinin kim olacağını sorun. Kolaylaştırıcı, kimsenin sahiplenmediği kalem sayısını not etmelidir. Oluşturma anında uygulanacak bir etiket politikası adımı üzerinde anlaşın.

**2. Son altı ayda birim maliyetimize ne oldu ve neden?**
Birim maliyeti çizin ve mimari, fiyat ve hacimdeki değişiklikleri not edin. Hangi değişikliklerin bilinçli olduğunu sorun. Eğilim bir sürprizse hangi verinin eksik olduğunu tartışın. Grafiğe bir kalite ölçümü ekleyin.

**3. Cesaret etsek yarın hangi kaynaklarımızı kapatırdık?**
Adayları listeleyin: atıl ortamlar, gereğinden büyük veri tabanları, unutulmuş depolama. Her biri için riskin ne olduğunu ve kimin karar verdiğini sorun. Birini kaldırmayı denemek için güvenli bir yol üzerinde anlaşın; örneğin önce zamanlama ya da anlık görüntü almak.

**4. Bir iş on kat daha pahalıya mal olmaya başlasa bunu bir gün içinde nasıl bilirdik?**
Uyarı yolunu faturadan sahibe kadar gözden geçirin. Geçmişten bir örnekle sınayın. Konuşma gecikmeleri ve sahiplik boşluklarını ortaya çıkarmalıdır. Kabul etmek ve karar vermek için bir hedef süre ve kimin görevde olduğu üzerinde anlaşın.

**5. Taban kullanımımızın ne kadarına güvenle taahhüt verebiliriz ve bizi neyin yanıltabileceği?**
Kullanım geçmişinde kararlı bir tabana ve ona yönelik risklere bakın: ürün değişiklikleri, geçişler, fiyat değişiklikleri. İlk ölçülü taahhüdü ve bir inceleme tarihini belirleyin. Finansı tartışmaya dahil edin.

**6. Maliyet ve güvenilirlik arasında yanlışlıkla hangi ödünleşimi yapıyoruz?**
Son tasarrufları ve olayları gözden geçirin. Herhangi biri ilişkili miydi? Ödünleşimi açık hâle getirmenin yollarını tartışın; örneğin maliyet incelemelerini hata bütçelerine bağlayarak. Güvenilirliği etkileyen bir kesintiyi kimin onaylayabileceğine karar verin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları maliyeti yönlendiren kararları verir ve onu azaltmak için en uygun konumdadır. Oluşturma anında etiketlemeli, maliyet görünümlerini düzenli denetlemeli, maliyeti tasarım konuşmalarına katmalı ve israf azaltmayı normal iş saymalıdır. Bir değişikliğin maliyet üzerindeki etkisini, yaptıktan kısa süre sonra görebilmelidirler; bu hızlı öğrenmeyi destekler.

### Hizmet ve operasyon takımları

Operasyon ve platform takımları ortak hizmetleri işletir, politikayı uygular ve anomali uyarılarını yürütür. Etiket uyumunu basit tutmalı, self servis raporlar sağlamalı ve ortak maliyet için net kurallar yayımlamalıdır. Sağladıkları platformların hem maliyetini hem güvenilirliğini izlemeli ve bir kapı olmadan takımların harekete geçmesine yardımcı olmalıdır.

### Liderlik ve yönetişim

Liderler ve finans öngörülebilir harcama ve iyi değer ister. Araçları ve maliyet çalışması için zamanı finanse etmeli, tahminlerde aralıkları kabul etmeli, takım sıralama tablolarından kaçınmalı ve kalite yanında birim maliyet istemelidir. Yönetişim, taahhütlerin veriyle verildiğini ve sürdürülebilirlik iddialarının yöntemlerini belirttiğini denetlemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar bulut maliyetini dolaylı olarak, fiyatlar, özellikler ya da hizmetin istikrarı aracılığıyla hisseder. Tasarruflar iyileştirmeleri finanse ettiğinde yarar görür, kesintiler kaliteyi düşürdüğünde zarar görür. Kullanıcıların tüketim için ücretlendirildiği yerde, net faturalar ve onları etkileyebilmek isterler.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir çevrimiçi perakendeci, altı mühendislik takımıyla mağazasını ve sipariş platformunu bir genel bulut üzerinde işletir. Aşağıdaki sayılar açıklayıcıdır.

Bulut harcaması bir yıl boyunca istikrarlı biçimde arttı ve finans direktörü bir kesinti ister. FinOps liderliği faturalama verilerini çeker. Dağıtım kapsamı yüzde 68'dir ve etiketsiz harcamanın üçte biri test hesaplarındadır. Tamamlanan sipariş başına maliyet 0,31 ABD dolarıdır; altı ay önce 0,27 idi ve sipariş hacmi yüzde 15 büyüdü. Takımın kurallarına göre israf oranı kapsamdaki harcamanın yüzde 14'üdür; çoğunlukla geceleri ve hafta sonları çalışan üretim dışı ortamlar ve birkaç gereğinden büyük veri tabanıdır. Taahhüt kapsamı kararlı tabanın yüzde 20'sidir ve satın alınanlarda kullanım yüzde 97'dir. Son çeyrekteki artı yüzde 18'lik tahmin sapması, platform takımına kimsenin haber vermediği bir pazarlama kampanyasının ardından gelmiştir. Bir hesapta başıboş bir veri işi, kimse fark etmeden iki gün çalışmıştır.

Lider, mühendislik takımlarıyla dört değişiklik üzerinde anlaşır. Bir etiket politikası, iki haftalık bir ek süreyle sahip ve hizmet etiketi olmayan yeni kaynakları engeller. Her takım haftalık bir maliyet görünümü ve iki haftalık maliyet konuşmasında kısa bir yer alır. Üretim dışı ortamlar mesai dışında durdurulacak şekilde zamanlanır ve gereğinden büyük üç veri tabanı, performansları hizmet düzeyi hedeflerine karşı denetlendikten sonra yeniden boyutlandırılır. İlk taahhüt kararlı tabanın yüzde 60'ını kapsar ve üç ay sonra inceleme yapılır. Bir anomali uyarısı, dört saat içinde kaydedilmiş bir karar beklentisiyle sahibi takıma gider ve planlama takvimi artık pazarlama kampanyalarını içerir.

Bir çeyrek sonra dağıtım kapsamı yüzde 93'tür, israf oranı yüzde 6'ya düşer, ödeme gecikmesi ya da hata oranında bir değişiklik olmadan sipariş başına maliyet 0,26 ABD dolarına düşer ve tahmin sapması artı yüzde 5'tir. Taahhüt kapsamı yüzde 55'tir ve kullanım yüzde 96'dır. Medyan anomali kabul süresi 2 saattir; 85. yüzdelik 6'dır. Finans direktörü, takım başına maliyeti gösteren bir sıralama tablosu ister. FinOps lideri, takımların farklı büyümeye sahip farklı hizmetler işlettiğini açıklayarak reddeder ve bunun yerine her takımın birim maliyet eğilimini güvenilirlik ölçümleriyle birlikte sunar. Karar kaydedilir ve bir sonraki inceleme tarihi belirlenir.

## Sektör mercekleri

**Girişim (startup).** Krediler ve düşük faturalar, ölçekte pahalıya dönüşen kötü alışkanlıkları gizleyebilir. İlk günden etiketleyin, üretim dışı kaynakları zamanlayın ve müşteri başına maliyeti erken izleyin. Yalnızca talep öngörülebilir olduğunda taahhüt verin.

**Küçük işletme.** Tek bir hesap ve birkaç hizmet, etiketlemeyi ve incelemeyi basit kılar. Faturayı aylık olarak sistemi kuran kişiyle gözden geçirin, unutulmuş kaynakları kaldırın ve uzun taahhütlerden sakının. Bir bütçe uyarısı, tek başına en değerli denetimdir.

**Büyük işletme.** Çok sayıda hesap, takım ve sağlayıcı, takımları denetlemek yerine onları güçlendiren merkezî bir FinOps işlevi gerektirir. Etiketleri ve faturalama dışa aktarımlarını sağlayıcılar arasında standartlaştırın, taahhütleri merkezî pazarlık edin ve takımlara verilerini verin. Çoklu bulut raporlama farklılıkları için plan yapın.

**Kamu sektörü.** Satın alma çerçeveleri, veri ikametgâhı ve sabit yıllık bütçeler seçimleri kısıtlar. Maliyet ve bölge kararlarını belgeleyin, değişken harcamanın ödenekler üzerindeki etkisini modelleyin ve denetim izleri tutun. Sürdürülebilirlik konusundaki kamusal taahhütler, emisyonların yöntemleriyle raporlanmasını gerektirebilir (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bir FinOps pratiğinin maliyetleri; raporlamayı, etiket politikasını ve düzenli konuşmayı yürütecek birkaç kişinin zamanı, bulut platformunca sağlanabilen ya da satın alınan araçlar ve bulgulara göre harekete geçmek için mühendislik zamanıdır. Küçük bir pratik, bir faturalama dışa aktarımı ve bir elektronik tabloyla başlayabilir.

Getiriler; azalan israftan, taahhütler yoluyla daha iyi fiyatlardan, daha az sürprizden ve mimariye dair daha iyi kararlardan gelir. Gerekçeyi kendi sayılarınızdan kurun: ilk incelemede israf oranı ve maliyeti, üretim dışı ortamları zamanlamadan sağlanan tasarruflar, taahhüt verilen kısımdaki taahhüt indirimi ve erken yakalanan anomalilerin önlenen maliyeti. İzlenebilir bir kaynak ve yöntem olmadan sektör genelinde israf yüzdelerini ya da tasarruf rakamlarını aktarmaktan kaçının. Pratiğin maliyetini ve aşırı taahhüt riskini dahil edin. Genel olarak iyileştirmelerin finansal gerekçesi bir sonraki konuda ele alınır (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Hayır diyen merkezî bir takım.** İşi yavaşlatır ve takımlar onu dolaşır. Takımları veri ve koruma önlemleriyle güçlendirin.
- **Güvenilirliği izlemeden maliyet kesmek.** Tasarruf olaylar olarak geri döner. Maliyeti hizmet düzeyi ölçümleriyle eşleyin.
- **Taahhüt kapsamının peşinden koşmak.** Düşük kullanımla yüksek bir yüzde israftır. İkisini de izleyin.
- **Yalnızca finansa aylık raporlar.** Mühendisler onları hiç görmez. Takımlara günlük ya da haftalık görünümler verin.
- **Etiketlemeyi temizlik projesi yapmak.** Çürür. Etiketleri oluşturma anında zorunlu kılın.
- **Takımları harcamaya göre sıralamak.** Büyüme israf gibi görünür. Birim maliyet eğilimlerini bağlamla gösterin.
- **Tek bir sayıyla tahmin etmek.** Değişken talep onu bozar. Aralıklar ve sürücüler kullanın.
- **Kesin emisyon iddia etmek.** Tahmin yöntemleri belirsizdir. Yöntemi ve sınırları belirtin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Görünürlük ve sahiplik | Aylık fatura finans tarafından gözden geçirilir | Etiketler bazı takımlarca kullanılır | Zorunlu etiketler; takımlar haftalık maliyet görünümlerini görür | Dağıtım kapsamı yönetilir; ortak havuzlar gözden geçirilir | Maliyet verisi sağlayıcılar arasında ürün kararlarına nerdeyse gerçek zamanlı akar |
| İyileştirme | Ara sıra temizlikler | Bazı takımlarca zamanlamalar ve boyutlandırma | İsraf kuralları ve sürekli bir iyileştirme birikim listesi | İsraf, taahhütler ve birim maliyet güvenilirlik eşlikçileriyle yönetilir | İnsan gözetimi ve paylaşılan öğrenmeyle sürekli, otomatik iyileştirme |
| Planlama | Yıllık bütçe | Kaba tahminler | Aralıklarla sürücü tabanlı tahminler | Sapma çözümlenir ve geri beslenir; taahhütler kademeli yönetilir | İş, tedarikçiler ve sürdürülebilirlik hedefleriyle ortak tahmin |

## Kontrol listesi

- [ ] Küçük bir zorunlu etiket kümesi (sahip, hizmet, ortam) kaynak oluşturma anında uygulanır.
- [ ] Dağıtım kapsamı haftalık raporlanır ve etiketsiz en büyük kalemler listelenir.
- [ ] Her takımın eğilimler ve anomalilerle haftalık bir maliyet görünümü vardır.
- [ ] Düzenli bir mühendislik ve finans maliyet konuşması takvimdedir.
- [ ] Bulut birim maliyeti kullanılabilirlik, gecikme ve hata oranının yanında izlenir.
- [ ] İsraf kuralları yazılı ve uygulanmaktadır; hariç tutmalar etiketlenmiştir.
- [ ] Taahhütler, kapsam ve kullanım izlenerek kararlı taban kullanıma karşı kademeli verilir.
- [ ] Tahminler sürücüler ve aralıklar kullanır ve sapma çözümlenir.
- [ ] Anomali uyarıları, beklenen karar süresiyle sahiplere ulaşır.
- [ ] Emisyon tahminleri, raporlanıyorsa, yöntemini ve sınırlarını belirtir.

## Yapay zekâ istemleri

**Bir maliyet eğilimini çözümleyin.**

```text
[dönem] boyunca [hizmet] için bulut maliyetimizin ve kullanımımızın bir özeti:
[aylık maliyeti, hacmi ve bilinen değişiklikleri yapıştırın]. Maliyetteki
değişimi, verinin izin verdiği ölçüde hacim, fiyat ve karışım etkilerine ayır,
sonraki denetimi öner ve bir kalite eşlikçisiyle birim maliyet öner. Fiyat ya
da indirim uydurma. Varsayımlarını ve daha emin olmak için ihtiyaç duyacağın
verileri listele.
```

**Bir etiket politikası taslağı hazırlayın.**

```text
[sağlayıcı(lar)] kullanan [kurum türü] için bir etiket politikası taslağı
hazırla. Asgari bir zorunlu etiket kümesi, izin verilen değerler, oluşturma
anında nasıl uygulandıkları, ihlallerin sahiplere nasıl raporlandığı ve bir ek
süre içersin. Mühendislerin izleyebileceği kadar kısa tut. Varsayımlarını ve
güncel belgelerde denetlemem gereken, sağlayıcı özelliklerine bağlı her şeyi
listele.
```

**İsraf kurallarını tanımlayın.**

```text
[ortam türü] içindeki bulut kaynaklarını atıl ya da gereğinden büyük olarak
sınıflandırmak için kurallar öner; kullanılan metrikleri, zaman pencerelerini,
hariç tutmaları (örneğin dayanıklılık beklemeleri) ve yanlış pozitifler için
bir inceleme sürecini içersin. Güvenilirliğe zarar vermekten nasıl
kaçınılacağını betimle. Kendi verimizden nasıl kalibre etmemiz gerektiğini
söylemeden sayısal eşikler belirleme. Varsayımlarını listele.
```

**İlk taahhüdü planlayın.**

```text
Son [dönem] boyunca kararlı taban kullanımımız [özet] ve talep riskleri
[liste]. İlk taahhüt için temkinli bir plan özetle: taban çizgisinin nasıl
tahmin edileceği, ne kadar taahhüt verileceği, kullanımın nasıl gözden
geçirileceği ve bizi neyin durduracağı. Belirli sağlayıcı indirimlerini ya da
koşullarını varsayma. Varsayımlarını ve finans ile satın alma için soruları
listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir bulut maliyeti metriği için eşlenmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir bulut maliyeti metriği girdisinin oyunlama yolunu, koruma önlemini ve güvenilirlik eşlikçisini taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Maliyeti görünür ve sahipli yapın: etiketleri oluşturma anında zorunlu kılın ve her takıma kendi haftalık görünümünü verin.
- Birim başına maliyeti, asla tek başına değil, güvenilirlik ve kalitenin yanında ölçün.
- İsrafı yazılı kurallar eşliğinde normal işin parçası olarak kaldırın.
- Kararlı taban çizgisine kademeli taahhüt verin ve hem kapsamı hem kullanımı izleyin.
- Sürücüler ve aralıklarla tahmin edin ve anomalileri hızlı yanıtla izleyin.
- Takımları harcamaya göre sıralamayın ve her emisyon tahmininin yöntemini ve sınırlarını belirtin.

## Kaynaklar ve ileri okuma

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
