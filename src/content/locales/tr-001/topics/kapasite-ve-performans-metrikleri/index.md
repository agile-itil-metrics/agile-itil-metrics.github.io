# Kapasite ve performans metrikleri

**Bir hizmetin ne kadar dolu olduğunu, en yavaş isteklerinin ne kadar yavaş olduğunu ve kullanıcılar fark etmeden önce ne kadar pay kaldığını ölçün; sonra talebi aralıklarla tahmin edin ki kapasite şikâyetten sonra değil, ihtiyaçtan önce gelsin.**

## Genel bakış ve motivasyon

Kullanılabilirlik, bir hizmetin yanıt verip vermediğini söyler. Kapasite ve performans ise ne kadar iyi yanıt verdiğini ve talep büyüdükçe bunu ne kadar süre sürdüreceğini söyler. Sekiz saniyede yanıt veren bir ödeme sayfası, çoğu kullanılabilirlik tanımına göre “ayakta”dır ve her müşterinin tanımına göre “bozuk”tur. Depolama alanının yüzde 95'inde olan bir veritabanı bugün sağlıklıdır ve gelecek ay bir kesintidir. Bu konu, bu boşlukları kapatan ölçümleri kapsar.

[Kapasite planlaması](https://en.wikipedia.org/wiki/Capacity_planning), bir hizmetin değişen talebi karşılamak için ihtiyaç duyduğu kaynakları belirleme uygulamasıdır. ITIL 4'te bu, hizmetlerin üzerinde uzlaşılan ve beklenen performansa ulaşmasını, mevcut ve gelecekteki talebi maliyet etkin biçimde karşılamasını sağlamayı amaçlayan kapasite ve performans yönetimi uygulamasında yer alır. Uygulama bunu üç düzeyde tanımlar: iş (kuruluşun hizmetlerinden ne isteyeceği), hizmet (bir hizmetin yük altında nasıl davrandığı) ve bileşen (her sunucunun, veritabanının, ağ bağlantısının ya da kuyruğun nasıl davrandığı). Bu konudaki ölçümler çoğunlukla hizmet ve bileşen düzeylerinde çalışır ve herhangi bir şeyi tahmin etmek için iş düzeyinden girdiye ihtiyaç duyar.

[Site güvenilirliği mühendisliği (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering), gecikmeyi, trafiği, hataları ve doygunluğu, kullanıcıya dönük herhangi bir sistemde izlemeye değer dört sinyal olarak ele alır ve performans hedeflerini hizmet düzeyi hedeflerine bağlar (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”). Çevik ekipler kapasiteyle bir teslimat sorusu olarak karşılaşır: bir sonraki yayın beklenen yükü taşıyabilir mi ve yanıtın sahibi kim? Performansı, boru hattında denetlenen bir kabul ölçütü olarak ele almak konuşmayı daha erkene taşır.

Bu konuda birkaç terim yinelenir. **Kullanım**, bir aralık boyunca bir kaynağın kapasitesinin kullanılan payıdır; örneğin işlemci zamanının meşgul olan payı. **Doygunluk**, bir kaynak tamamen kullanıldığı için bekleyen iş miktarıdır; örneğin bir çalıştırma kuyruğunun ya da bir istek birikiminin uzunluğu. Kullanım, bir kaynağın ne kadar meşgul olduğunu söyler. Doygunluk, işin onun için kuyrukta bekleyip beklemediğini söyler ve kullanıcıların hissettiği şey kuyruklardır. **[Gecikme](https://en.wikipedia.org/wiki/Latency_(engineering))**, bir istek ile yanıtı arasındaki süredir. **[İşlem hacmi](https://en.wikipedia.org/wiki/Throughput)**, bir hizmetin işi tamamlama hızıdır; örneğin saniye başına istek sayısı. **Tampon kapasite**, mevcut en yüksek yük ile hizmetin hedeflerini karşılamayı bıraktığı yük arasındaki boşluktur. **Talep**, kullanıcıların ve işletmenin hizmetten istediği iştir; bu, hizmetin tamamladığı işle aynı şey değildir: aşırı yüklü bir hizmet, istenenden azını tamamlar.

Bekleme hatlarının bir özelliği, bu ölçümlerin neden böyle davrandığını açıklar. [Kuyruk kuramı](https://en.wikipedia.org/wiki/Queueing_theory), rastgele varışlı bir hizmet için bekleme süresinin kullanım ılımlıyken yavaş büyüdüğünü, sonra kullanım tam kullanıma yaklaştıkça dik biçimde yükseldiğini gösterir. [Little yasası](https://en.wikipedia.org/wiki/Little%27s_law), bir sistemdeki ortalama istek sayısını, varış hızı ve her bir isteğin orada geçirdiği ortalama süreyle ilişkilendirir. Yüksek ortalama kullanımdaki bir kaynak bir uçuruma yakındır. Eğrinin tam biçimi hizmete bağlıdır; bu yüzden eşiği genel bir makaleden ödünç almak yerine kendi sisteminizi [yük testi](https://en.wikipedia.org/wiki/Load_testing) ile sınayarak bulun.

Gecikme özel bir dikkat gerektirir; çünkü ortalama, önemli olan deneyimi gizler. Bir [yüzdelik dilim](https://en.wikipedia.org/wiki/Percentile), gözlemlerin belirli bir payının altında kaldığı değeri belirtir: 95. yüzdelik dilim (p95), isteklerin yüzde 95'inin geçtiği gecikmedir. [Kuyruk gecikmesi](https://en.wikipedia.org/wiki/Tail_latency), tek bir kullanıcı eyleminin birçok iç çağrıya dağıldığı sistemlerde baskın olma eğilimindedir. Yalnızca ortalamayı değil, yüzdelik dilimleri raporlayın (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı” ve aynı savı çözüm süresi için yapan Konu 3.3 “Olaya yanıt ve çözüm süresi”).

Son olarak, kapasite talebin [tahmin edilmesine](https://en.wikipedia.org/wiki/Forecasting) bağlıdır ve talebin örüntüleri vardır: günlük döngüler, haftalık döngüler ve takvime, kampanyalara ve ürün lansmanlarına bağlı [mevsimsellik](https://en.wikipedia.org/wiki/Seasonality). [Otomatik ölçekleme](https://en.wikipedia.org/wiki/Autoscaling) bunun nasıl hissettirdiğini değiştirir, çünkü bulut platformları dakikalar içinde kaynak ekleyebilir, ama konuyu ortadan kaldırmaz. Otomatik ölçeklemenin sınırları, bir gecikmesi, bir maliyeti ve bir veritabanı ya da üçüncü taraf arayüzü gibi ölçeklenmeyen bağımlılıkları vardır. Maliyet tarafı FinOps ile ilgilidir (bkz. Konu 7.6 “FinOps ve bulut maliyeti metrikleri”).

Komşu konular kullanılabilirlik aritmetiğini (bkz. Konu 5.3 “Kullanılabilirlik metrikleri”), uyarı tasarımını (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”) ve rotasyon yükünü (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”) kapsar. Burada konu, hizmetin kendi kaynakları ve yanıt süreleridir.

## Temel ilkeler

- **Kullanımın yanında doygunluğu da ölçün.** Kullanım bir kaynağın ne kadar meşgul olduğunu, doygunluk ise işin bekleyip beklemediğini gösterir. Kullanıcılar beklemeyi yaşar.
- **Gecikmeyi bir dağılım olarak raporlayın.** Kullanıcıya dönük işlem başına yüzdelik dilimler kullanın ve yavaş kuyruğu görünür tutun. Çarpık bir dağılımın ortalaması neredeyse hiç kimseyi tanımlamaz.
- **Hedefleri kullanıcı deneyimine bağlayın.** Bir eşik, bir aracın grafiğe dökmeye karar verdiği şeye değil, bir kullanıcının ya da işletmenin önemsediği bir şeye kadar izlenebildiğinde anlamlıdır.
- **Aralıklarla planlayın ve bunları gözden geçirin.** Bir tahmin, belirtilmiş varsayımlarla bir aralıktır. Olanla karşılaştırın ve hatadan öğrenin.
- **Sınırlarınızı sınayarak bilin.** Gerçekçi bir yük testi doğrulayana kadar kapasite bir hipotezdir. Önemli olan değişikliklerden sonra testi tekrarlayın.
- **Sistemleri tanımlayın, insanları asla.** Bu ölçümler hizmetlere, bileşenlere ve ekiplere aittir. Bireyler için asla bir puan kartı değildir.
- **Maliyeti riske karşı tartın.** Yedek kapasite para, eksik kapasite müşteri kaybettirir. Dengeyi görünür kılın ki seçilsin, kendiliğinden sürüklenilmesin.

## Metrik tanımları

Tablo yedi ölçümü listeler. Saatler ve sınırlar her formülde belirtilmiştir. Yüzdelik dilime dayalı ölçümler sicilde belirtilen sabit bir pencere kullanır ve ham gözlemlerden ya da histogramlardan hesaplanır; asla ortalamaların ortalaması olarak değil.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılık | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kaynak kullanımı | Bir aralık boyunca bir kaynağın kapasitesinin kullanılan payı, aralık serisinin yüksek bir yüzdelik dilimi olarak raporlanır | 1 ila 5 dakikalık aralık başına meşgul kapasite / toplam kapasite; gözden geçirme penceresi üzerinde medyanı ve 95. yüzdelik dilimi raporlayın; kaynağın boşaltıldığı bakım pencereleri hariç tutulur | yüzde | Altyapı izleme ve bulut platformu metrikleri | Kapasite ve performans yönetimi; izleme ve olay yönetimi | Bitti tanımındaki operasyonel kabul ölçütleri; SRE kaynak sinyalleri | Haftalık |
| Doygunluk | Tamamen kullanılan bir kaynak için bekleyen iş miktarı | aralık başına kuyruk uzunluğu, çalıştırma kuyruğu, bekleyen istekler ya da kısıtlanan istekler; 95. yüzdelik dilimi ve herhangi bir beklemenin olduğu aralıkların payını raporlayın; talebin olmadığı aralıklar hariç tutulur | sayı ya da aralıkların yüzdesi | Uygulama ve altyapı telemetrisi | Kapasite ve performans yönetimi; izleme ve olay yönetimi | SRE doygunluk sinyali; bir hizmet kuyruğunda devam eden iş sınırı | Haftalık |
| Gecikme yüzdelik dilimi | Kullanıcıya dönük bir işlem için bir isteği yanıtlamak için geçen süre; medyan, p95 ve p99'da raporlanır | kenarda isteğin alınmasından son baytın gönderilmesine kadar yanıt süresi, başarılı istek başına; başarısız istekler hızlı yanıt olarak değil hata olarak raporlanır; kayan bir pencere üzerinde ölçün | milisaniye | Yük dengeleyici ya da ağ geçidi günlükleri, izleme, gerçek kullanıcı izleme | Hizmet düzeyi yönetimi; kapasite ve performans yönetimi | SRE gecikme göstergesi ve hizmet düzeyi hedefi | Sürekli, haftalık gözden geçirilir |
| Tampon kapasite | Bir hizmetin hedeflerini ihlal etmeden önce taşıyabileceği kalan yük | (sınanmış ya da modellenmiş kırılma yükü - mevcut en yüksek yük) / mevcut en yüksek yük; en yüksek yük, penceredeki en yoğun saattir; kırılma yükü, bir testte gecikme hedefinin ilk kez ihlal edildiği yüktür, donanımın azami değeri değil | yüzde ya da mevcut büyümede gün | Yük testi sonuçları ve trafik telemetrisi | Kapasite ve performans yönetimi; hizmet düzeyi yönetimi | Boru hattında işlevsel olmayan gereksinimler ve performans testleri | Aylık ve büyük lansmanlardan önce |
| Tahmin hatası | Bir dönem için tahmin edilen talep ile gerçekleşen talep arasındaki fark | belirtilmiş bir ufuk için mutlak (tahmin edilen en yüksek - gerçekleşen en yüksek) / gerçekleşen en yüksek; tahmin ufkun başında dondurulur ve sonradan gözden geçirilmez; tahmin edilmemiş tek seferlik olaylar çıkarılmaz, listelenir | yüzde | Tahmin sicili ve trafik telemetrisi | Kapasite ve performans yönetimi; hizmet finansal yönetiminde talebe ilişkin planlama | Yayın ve yol haritası tahmini; SRE talep tahmini | Üç aylık |
| Kapasite hazırlık süresi | İhtiyaç kabul edildikten sonra yeni kapasiteyi hizmete almak için gereken süre | saat, kapasite talebi onaylandığında başlar ve kapasite üretim trafiğini taşıdığında durur; medyanı ve 85. yüzdelik dilimi raporlayın; iptal edilen talepler hariç tutulur | gün | ITSM aracındaki talep kayıtları, değişiklik kayıtları, sağlama günlükleri | Kapasite ve performans yönetimi; hizmet talebi yönetimi; değişiklik yetkilendirme | Bir platform birikim listesi kalemi için teslim süresi (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”) | Üç aylık |
| Performans testi kapsamı | Yakın tarihli, gerçekçi bir yük testi olan kritik hizmetlerin payı | temsili bir ortamda ve iş yükünde, belirtilmiş bir yaştan daha genç geçen bir yük testi olan kritik hizmetler / sicildeki kritik hizmetler; yaş sınırı yazılıdır | yüzde | Test sonuçları deposu ve hizmet sicili | Kapasite ve performans yönetimi; yayın yönetimi | Sürekli teslimat boru hattında işlevsel olmayan testler | Üç aylık |

Birlikte bunlar dört soruyu yanıtlar: ne kadar dolu, ne kadar yavaş, ne kadar pay kaldı ve yanıt değiştiğinde ne kadar hızlı karşılık verebiliriz.

## Öneriler

### Kullanıcıdan başlayın, sonra kaynağa geçin

**1. Kullanıcıların önemsediği az sayıda işlemi seçin ve bunları ölçün.** Bir hizmetin yüzlerce uç noktası ve önemli olan bir avuç yolculuğu vardır; örneğin oturum açmak, aramak, ödeme yapmak ve ekstre indirmek. Bunları ürün sahipleri ve müşterilerle uzlaşın ve her biri için bir gecikme beklentisi belirleyin. Bunlar doğal olarak hizmet düzeyi göstergelerine bağlanır (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”).

**2. Her kaynak grafiğini bir doygunluk grafiğiyle eşleştirin.** Yalnızca işlemci kullanımını göstermek “yalnızca yüzde 70'e ulaştı” rahatlığının yanlış güvenini davet eder. Yanına kuyruğu, bekleyen istekleri ya da kısıtlama sayısını ekleyin. Kullanım alarm verici görünmeden önce doygunluk ortaya çıktığında gerçek kısıtı bulmuşsunuzdur ve bu kısıt çoğu zaman izlediğiniz kaynak değildir; örneğin bir bağlantı havuzu, bir iş parçacığı sınırı ya da bir ortak arayüzündeki hız sınırı.

**3. Sessiz ortalama yerine yoğun kuyruğu tercih edin.** Bir gün üzerindeki ortalamalar gecenin ölü saatini öğle yemeği zirvesiyle harmanlar. En yoğun döneme bakın ve en kötü aralıkların tarihini ve nedenini kaydedin. Planlama sorusu, hizmetin beklenen en kötü saatinde nasıl davrandığıdır.

### Gecikmeyi dürüstçe raporlayın

**4. İşlem başına yüzdelik dilimleri yayımlayın ve pencereyi adlandırın.** Her önemli işlem için kayan bir pencere üzerinde medyanı, p95'i ve p99'u belirtin ve hangi isteklerin dahil olduğunu söyleyin. Yüzdelik dilimlerin ortalamasını sunucular ya da işlemler arasında asla almayın; çünkü sonuç hiçbir gerçek kullanıcının deneyimine karşılık gelmez; bunun yerine histogramları ya da ham gözlemleri birleştirin. Örneklem küçükse bunu söyleyin; çünkü birkaç yüz istekten gelen bir p99 gürültülü bir sayıdır (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**5. Yalnızca sunucunun olduğu yerde değil, kullanıcının olduğu yerde de ölçün.** Sunucu tarafı zamanlamaları ağı, tarayıcıyı ve cihazı dışarıda bırakır. Yavaş bir arka ucu yavaş bir son mil sorunundan ayırt edebilmek için gerçek kullanıcı izleme ya da sentetik kontroller ekleyin.

**6. Hataları ve zaman aşımlarını gecikmenin yerine değil, onunla birlikte sayın.** Hızlı arızalanan bir hizmet gecikme grafiğinde hızlı görünür ve zaman aşımına uğrayan bir hizmet yanlış nedenle yavaş görünür. Hata oranını gecikme yüzdelik dilimiyle birlikte raporlayın ki hızlı bir arıza sonucu pohpohlayamasın.

### Sınırları bulun, sonra pay bırakın

**7. Kırılma noktasını bilerek sınayın.** İşlemlerin gerçekçi bir karışımını yeniden oynatan yük testleri yürütün, yükü kademeli artırın ve gecikme hedefinin ilk nerede ihlal edildiğini ve hangi kaynağın önce doyduğunu not edin. Üretime önemli yönlerden benzeyen bir ortamda test edin ve benzemediği yönleri yazın. Güvenli bir yerde başarısız olan bir test, yaşayacağınız en ucuz olaydır (kontrolleri boru hattına koymak için bkz. Konu 4.5 “Yayın ve dağıtım metrikleri”).

**8. Tampon kapasiteyi bir politika olarak belirleyin ve bir ödünleşim olarak gözden geçirin.** Bir hizmetin beklenen en yüksek yükü üzerinde ne kadar pay tuttuğuna ve nedenine karar verin. Kritik müşteriye dönük hizmetler daha fazlasını, dahili toplu hizmetler daha azını haklı kılar. Rakam maliyet ve risk hakkında bir iş tercihidir; bu yüzden gerekçeyi kaydedin ve bir kesintinin maliyeti ya da kapasite fiyatı değiştiğinde yeniden gözden geçirin. Başka bir kuruluştan bir sayı kopyalamayın.

### Talebi onu bilen insanlarla tahmin edin

**9. İşletmeye neyin geldiğini sorun ve tahmini yazın.** Pazarlama kampanyaları, yeni müşteriler, düzenleyici son tarihler ve mevsimsel olaylar, trafik bunu gösterecek kadar önce talebi değiştirir. Tarih, varsayımlar, aralık, sahibi ve her girdinin kaynağını içeren kısa bir tahmin sicili tutun. Düşük, beklenen ve yüksek senaryo gibi bir aralık olarak verilen tahmin, tek bir sayıdan daha dürüst ve ne kadar satın alınacağına karar vermek için daha yararlıdır.

**10. Tahmini puanlayın ve hatayı onu iyileştirmek için kullanın.** Her dönemden sonra, dondurulmuş tahmini olanlarla tahmin hatasını kullanarak karşılaştırın ve büyük sapmaların nedenlerini listeleyin. Yaygın nedenler duyurulmamış bir kampanya, kullanıcı davranışında bir değişiklik ve yer değiştiren bir bağımlılıktır. Amaç, ulaşılamaz olan sıfır hata değil, hangi girdilerin güvenilir olduğunu öğrenmek ve olmadıkları yerde aralığı genişletmektir.

### Kapasiteyi eklemeyi kolaylaştırın

**11. Doğruluğun peşine düşmeden önce kapasite hazırlık süresini kısaltın.** Yeni kapasitenin gelmesi haftalar sürüyorsa çok önceden tahmin etmeniz ve daha fazla yedek taşımanız gerekir. Dakikalar sürüyorsa ihtiyaca daha yakın çalışabilirsiniz. “Onaylandı” ile “trafik taşıyor” arasındaki adımlara, örneğin satın alma, onay, sağlama, yapılandırma ve test gibi, bakın ve önce en uzun beklemeleri kaldırın (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”). ITIL terimleriyle bu, bir kapasite stratejisi tercihidir: talebin önünde, talebe eşit ya da arkasında olmak; bilinçli olarak, hizmet başına seçin.

**12. Otomatik ölçeklemeyi ölçülecek bir sistem olarak ele alın.** Ölçeklemenin ne sıklıkla tetiklendiğini, yeni kapasitenin yararlı hale gelmesinin ne kadar sürdüğünü, yapılandırılmış azami değere ne sıklıkla ulaştığını ve neye mal olduğunu kaydedin. Sınırında takılı kalmış bir otomatik ölçekleyici, çoktan başarısız olmuş bir kapasite planıdır. Bunları maliyet görünümüyle birlikte gözden geçirin; böylece performans ve harcama birlikte tartışılır (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş korkuluk metriği ya da uygulaması |
| --- | --- | --- |
| Kaynak kullanımı | Zirveleri gizlemek için uzun aralıklar üzerinden ortalama almak; boşta ayrılmış kapasiteyi “kullanılmış” saymak; yalnızca en sakin kaynakları raporlamak | Ortalamanın yanında yoğun saat 95. yüzdelik dilimi; doygunluk ölçümü; hizmet haritasına karşı gözden geçirilen kapsamdaki kaynak listesi |
| Doygunluk | Hiçbir şey reddedilmiş ya da kısıtlanmış olarak raporlanmasın diye kuyruk sınırlarını yükseltmek; beklemeyi ölçülmeyen başka bir kuyruğa taşımak | Aynı işlem için gecikme yüzdelik dilimi ve hata oranı; tek bir aşama değil, uçtan uca kuyruk süresi; yoldaki tüm kuyrukların gözden geçirilmesi |
| Gecikme yüzdelik dilimi | Yalnızca ortalamayı ya da medyanı raporlamak; yavaş ya da başarısız istekleri örneklemden çıkarmak; hızlı bir iç konumdan ölçmek; “aykırı değerleri” hariç tutmak | p95 ve p99'un her zaman gösterilmesi; gecikmenin yanında gösterilen hata ve zaman aşımı oranı; sunucu tarafı zamanlamayla karşılaştırılan gerçek kullanıcı izleme; gösterilen ham örneklem büyüklüğü |
| Tampon kapasite | Hafif bir test iş yükü seçmek; üretimden daha büyük bir ortamı test etmek; kırılma noktasını donanımın azami değeri olarak tanımlamak | Üretim trafiği biçimine karşı gözden geçirilen test iş yükü; test ile üretim arasındaki farkların yazılı listesi; ilgili değişikliklerden sonra yeniden test edilen tampon kapasite |
| Tahmin hatası | Tahmini sonradan gözden geçirmek; her sonuç “aralığın içinde” olsun diye çok geniş aralıklar belirlemek; sürprizli ayları “tahmin edilmemiş olaylar” olarak çıkarmak | Sicilde dondurulmuş ve tarihlenmiş tahmin; hatayla birlikte raporlanan aralık genişliği; hariç tutulan her olayın listelenip gözden geçirilmesi |
| Kapasite hazırlık süresi | Onay kayıtlarını geciktirerek saati daha geç başlatmak; kapasite trafik taşıdığında değil sipariş verildiğinde talepleri kapatmak; talepleri bölmek | Onaydan trafik taşımaya kadar tanımlanan saat; sağlama günlükleriyle karşılaştırılan kapatılmış talep örneği; yeniden açılan talep sayısı |
| Performans testi kapsamı | Kapsam iddia etmek için önemsiz bir test çalıştırmak; kritik hizmetlerin listesini küçültmek; eski geçen bir testi kayıtlarda tutmak | Kaydedilen test yaşı ve iş yükü gerçekçiliği; hizmet kataloğuna ve olay geçmişine karşı gözden geçirilen kritik hizmet listesi; geçenlerin yanı sıra başarısız testlerin raporlanması |

Sağlıklı bir okuma şunları gösterir: görünür günlük döngüleri ve tamponu olan kullanım, nadiren ve kısaca ortaya çıkan doygunluk, en yoğun saatlerde sabit ya da iyileşen gecikme yüzdelik dilimleri ve bilinen, yavaşça küçülen bir tahmin hatası. Sağlıklı işaret, sürprizlerin nedenleriyle birlikte tartışılmasıdır. Kusursuz sayılar şüphe uyandırmalıdır; çünkü genellikle ölçümün yumuşak olduğu anlamına gelir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Cömert tamponla çalışmak | Sürprizleri emer; gecikmeyi ve kullanılabilirliği korur | Daha yüksek maliyet; verimsizliği ve zayıf tahmini gizler |
| Hızlı otomatik ölçeklemeyle yalın çalışmak | Daha düşük maliyet; kapasite talebi izler | Ölçekleme hızına ve sınırlarına bağlıdır; bağımlılıklar ölçeklenmeyebilir; bir olay sırasında akıl yürütmesi daha zordur |
| Yüzdelik dilimli gecikme hedefleri | Yavaş isteklerin neye benzediğini yansıtır; ortalama hilelerine direnir | Daha fazla veri ve daha büyük örneklem gerektirir; düşük trafikli hizmetler için yüksek yüzdelik dilimlerde gürültülüdür |
| Yalnızca ortalama ya da medyan gecikme | Basit ve kararlı | Şikâyetleri ve müşteri kaybını yönlendiren kuyruğu gizler |
| Sentetik yük testleri | Kontrollü, tekrarlanabilir, güvenli | Yalnızca iş yükü modeli ve ortam kadar gerçekçi |
| Temel olarak üretim telemetrisi | Gerçek davranışı ve gerçek karışımı yansıtır | Sınırları yalnızca bunlara ulaşıldıktan sonra ortaya çıkarır; mevcut talebin ötesinde prob yapamaz |
| Ayrıntılı tahmin modelleri | Mevsimselliği ve büyümeyi yakalar | Veri ve beceri gerektirir; girdiler zayıf olduğunda yanlış bir kesinlik hissi |
| İşletmeyle uzlaşılan basit aralıklar | Açıklaması ve güncellemesi kolay; varsayımlara odaklanır | Daha kaba; işletmeden dürüst girdiye bağlıdır |

Kararı destekleyen en hafif yöntemi seçin. Çoğu hizmet için yoğun saat kullanımına, doygunluğa ve gecikme yüzdelik dilimlerine haftalık bir bakış, büyük değişikliklerden önce bir yük testi ve üç aylık bir tahmin gözden geçirmesi yeterlidir. Yanılmanın maliyetinin büyük olduğu yerde modelleme ekleyin.

## Takımınızla tartışılacak sorular

**1. Hangi üç kullanıcı yolculuğu en önemlidir ve kullanıcılar her biri için hangi yanıt süresini bekler?**
Gruptan yolculukları adlandırmasını isteyin, sonra panoların grafiğe döktüğüyle karşılaştırın. Kolaylaştırıcı, bir mühendislik tercihine değil, bir kullanıcıya ya da müşteriye kadar izlenebilen bir beklenti için ısrar etmelidir.

**2. Hizmetimiz bir uçuruma nerede yakın ve bunu nasıl biliyoruz?**
Bağlantı havuzları, iş parçacığı sınırları ya da bir ortağın hız sınırı gibi kaynaklara bakın. Her birinin kırılma noktasına kadar en son ne zaman test edildiğini sorun. Kimse bilmiyorsa ilk iş budur.

**3. Bugün gecikmeyi nasıl raporluyoruz ve en yavaş yüzde birlik kullanıcı ne derdi?**
Bir işlem için ortalamayı, medyanı, p95'i ve p99'u yan yana gösterin ve aradaki farkı tartışın. Hangi isteklerin hariç tutulduğunu ve nedenini, ayrıca başarısız isteklerin sayılıp sayılmadığını sorun.

**4. Ne kadar tampon tutuyoruz, bunu kim seçti ve seçimi en son ne zaman yeniden gözden geçirdik?**
Payın maliyetini ve en yoğun günde bir kesintinin maliyetini tartışın. Bir gözden geçirme tarihi ve payı değiştirecek kanıt üzerinde uzlaşın.

**5. Son üç talep tahminimiz ne kadar iyiydi ve ne öğrendik?**
Tarihli tahminleri gerçekleşenlerle ve büyük sapmaların nedenleriyle karşılaştırın. İşletmenin bildiği ama operasyonun almadığı şeyin ne olduğunu sorun. Tahmin sicilene pazarlama takvimi ya da bir lansman takvimi gibi eklenecek bir girdi üzerinde karar verin.

**6. Gelecek ay iki katı kapasiteye ihtiyaç duysak bizi ne durdururdu?**
Talepten üretim trafiğine kadar her adımı listeleyin ve nerede beklediğini işaretleyin. Satın alma, onaylar, lisanslama ve ölçeklenmeyen bağımlılıkları dahil edin. Kolaylaştırıcı, teknik olmayan en uzun beklemeyi aramalıdır; çünkü bu çoğu zaman bir onay ya da sözleşmedir. Kısaltılacak bir adım üzerinde uzlaşın ve etkiyi kapasite hazırlık süresi üzerinden ölçün.

## Dört bakış açısı

### Ürün ve teslimat takımları

Yoğun yollara dokunan özelliklerin kabul ölçütlerine bir performans beklentisi ekleyin, uygulanabilir olduğu yerde boru hattında bir yük testi çalıştırın ve operasyona lansmanları erkenden bildirin. Performansı daha sonraki bir “sağlamlaştırma” görevi olarak ele alma alışkanlığına dikkat edin; bu plansız işe dönüşür (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

### Hizmet ve operasyon takımları

Operasyon ekipleri telemetrinin, kapasite planının ve bir sınıra ulaşıldığında yanıtın sahibidir. Gerçekten kullandıkları panolarda doygunluğa ve kuyruk gecikmesine, işletmeyle paylaşılan bir tahmin siciline ve güvenilen test sonuçlarına ihtiyaç duyarlar. Kapasiteyle ilgili her olayı nedeniyle birlikte kaydetmelidirler (bkz. Konu 4.1 “Sorun yönetimi metrikleri” ve Konu 3.4 “Büyük olay metrikleri”).

### Liderlik ve yönetişim

Liderler, kuruluşun ne kadar riski ve maliyeti kabul ettiğine karar verir ve tampon politikası bu kararın göründüğü yerdir. Kritik hizmet başına gecikme yüzdelik dilimlerini ve tamponu, yanında tahmin hatasıyla birlikte isteyin ve kapasite taleplerini kanıt taşıyan yatırım kararları olarak ele alın. Yönetişim organları, her hizmeti uçurumda aynı noktaya iten, kuruluş çapında tek bir kullanım hedefine direnmelidir.

### Müşteriler ve kullanıcılar

Müşteriler yavaşlığı, herhangi bir kullanılabilirlik sayısı değişmeden çok önce güvenilmezlik olarak hisseder. Performansı belirtilen yükte yüzdelik dilimler cinsinden belirtin ve hizmetin yoğun dönemleri nasıl ele aldığını paylaşın (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri” ve Konu 6.2 “Deneyim düzeyi anlaşmaları”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci, her biri bir ürün ekibine ait bir mağaza vitrini, bir ödeme hizmeti ve bir sipariş hizmeti işletir; ortak altyapıyı bir platform ekibi sağlar. Bu örnekteki tüm sayılar açıklayıcıdır.

Platform ekibinin haftalık gözden geçirmesi, vitrin aramasını 180 milisaniyelik medyan gecikmeyle ve 420 milisaniyelik p95 ile, ikisi de hedef içinde, ve yoğun saat 95. yüzdelik diliminde yüzde 58 işlemci kullanımıyla gösterir. Planlı bir satıştan üç hafta önce bir destek lideri, müşterilerin akşam kampanyaları sırasında sitenin “sürünür” gibi çalıştığını söylediğini bildirir. Pano yeşildir.

Ekip, önceki satışın en yoğun saatinde arama için p99'a bakar ve 1,5 saniyelik p99 hedefine karşı 3,1 saniye bulur. Doygunluk hikâyenin geri kalanını anlatır: ürün veritabanına bağlantı havuzu, zirve sırasında bir dakikalık aralıkların yüzde 14'ünde bekleyen istekler gösterirken işlemci kullanımı hiçbir zaman yüzde 60'ı aşmamıştır. Kısıt hiçbir zaman işlemci olmamıştır. Trafik bugünkünün üçte biri olduğunda belirlenmiş bir havuz sınırıdır.

Ürün sahibi ve platform lideri, operasyonların üretim karışımını kullanarak geçen yılın zirvesinin 1,5 katında bir yük testi çalıştırır. Test, p99 hedefinin geçen yılın zirvesinin 1,15 katında ihlal edildiğini gösterir; yani tampon, müşteriye dönük hizmetler için yüzde 40'lık bir politikaya karşı yüzde 15'tir. Pazarlama takvimi, açılış gününde geçen yılın zirvesinin 1,6 katı talep önerir. Sicilde dondurulmuş eski tahmin aralığı 1,2 ile 1,4 olarak koymuştu ve geçen yılki satışa karşı hata, çoğunlukla duyurulmamış bir e-posta kampanyasından, yüzde 22 olmuştur.

Karar günlüğüne kaydedilen karar dört bölümden oluşur. Birincisi, havuz sınırını yükseltmek ve okuma kopyaları eklemek ve yeniden test etmek. İkincisi, kampanyaların tahmin siciline en az altı hafta önceden ulaşması için yayın sürecine bir satış hazırlığı kontrol listesi eklemek. Üçüncüsü, haftalık gözden geçirmeye p99'u ve havuz doygunluğunu eklemek. Dördüncüsü, yıl boyu yedek yerine zamanlanmış ölçekleme kullanarak, satış penceresi için ek kapasitenin maliyeti konusunda finansla uzlaşmak.

Değişikliklerden sonra ikinci bir test, p99 hedefinin geçen yılın zirvesinin 1,8 katına kadar tuttuğunu gösterir. Oyunlaştırma riski gözden geçirme sırasında ortaya çıktı. Bir yüklenici, 5 saniyeden yavaş istekleri aykırı değer oldukları gerekçesiyle gecikme raporundan hariç tutmak gibi bir “hızlı kazanım” önermişti. Ekip reddetti: hariç tutulan istekler tam olarak şikâyet eden müşterilerdi. Korkuluk, her gecikme yüzdelik diliminin yanında hata ve zaman aşımı oranlarını tutmak ve örneklem büyüklüğünü kaydetmekti. Satış sırasında p99 en fazla 1,2 saniyeye çıkar, havuz doygunluğu aralıkların yüzde 1'inin altında kalır ve tahmin hatası yüzde 9'dur; kalan sapmanın nedeniyle birlikte sicilde kaydedilmiştir.

## Sektör mercekleri

**Girişim.** Trafik küçüktür ve büyüme belirsizdir; bu yüzden ucuz ölçümler ayrıntılı olanlardan iyidir. Para kazanan iki ya da üç yolculuk için gecikme yüzdelik dilimlerini izleyin, veritabanında doygunluğu gözleyin ve lansmanlardan önce basit bir yük testi çalıştırın. Bir hata ya da trafik sıçramasının faturaya dönüşmemesi için bir harcama uyarısı ayarlayın.

**Küçük işletme.** Hizmetler çoğu zaman barındırılır ya da satın alınır; bu yüzden kapasite bir tedarikçi meselesidir. Tedarikçiden performans ve kapasite raporlarını yazılı olarak isteyin, sözleşmenin yoğun dönemler hakkında ne söylediğini öğrenin ve müşterinin görünümünü birkaç sentetik kontrolle izleyin. İşletmenin onsuz yapamayacağı tek sistemde tamponu izleyin.

**Kurumsal.** Çok sayıda hizmet altyapıyı paylaşır; bu yüzden kapasite sorunları yanlış yerde ortaya çıkar. Hizmetleri kullandıkları bileşenlere bağlayan bir hizmet haritasına, iş birimleriyle ortak bir tahmin sürecine ve ekipler arasında gecikme yüzdelik dilimlerinin ortak tanımlarına yatırım yapın. Tampon politikasını hizmet kritikliğine göre belirleyin.

**Kamu sektörü.** Talep, vergi beyan tarihleri, yardım başvuruları ve seçimler gibi yasayla belirlenmiş son tarihlerle şekillenir ve bu tarihlerdeki başarısızlık kamuya açıktır. Tahminler yasal takvimi kullanmalı ve zirve için kapasitenin aylar önceden sözleşmeye bağlanması gerekebilir. Satın alma hazırlık süreleri kapasite hazırlık süresini uzatır; bu yüzden onları ölçün ve etraflarında planlama yapın. Hizmet performansının kamuya açık raporları yüzdelik dilimi ve yük koşullarını belirtmelidir (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetin dört bölümü vardır. Birincisi enstrümantasyondur: telemetri ve depolanması. İkincisi testtir: temsili bir ortam ve bakım gerektiren iş yükü modelleri. Üçüncüsü planlama rutinidir: tahmin sicilini tutmak ve hatayı her çeyrek gözden geçirmek. Dördüncüsü, çoğu zaman en büyük maliyet olan ve açık hale getirmeye en değer olan yedek kapasitenin kendisidir.

Getiri, kapasiteyle ilgili daha az olaydan, ne zaman satın alınacağına ve ne zaman alınmayacağına dair daha iyi kararlardan ve verilerin gereksiz olduğunu gösterdiği kapasite üzerine önlenen harcamadan gelir. Önceden bir yüzde tasarruf vaat etmeyin. Bunun yerine kendi örüntünüzü ölçün: çeyrek başına kapasite nedenli olay sayısı, acil eylem gerektiren zirvelerin payı, üzerinde uzlaşılan tampon politikasına göre boşta kapasite üzerindeki harcama ve tahmin hatasındaki eğilim. Google SRE kitabı güvenilirliği ekonomik bir karar olarak ele alır.

Toplam sahip olma maliyetine insanlar ve test ortamı egemendir. Küçük bir ekip mevcut izleme, haftalık bir gözden geçirme ve en önemli yolculuk için tek bir yük testiyle başlayabilir.

## Anti-desenler ve tuzaklar

- **Ortalama kullanımı kapasite hikâyesi olarak raporlamak.** Ortalama, zirveyi ve uçurumu gizler. Yoğun saat yüksek yüzdelik dilimini ve doygunluk ölçümünü raporlayın.
- **Yönetici panosunda ortalama gecikme.** Şikâyetleri kuyruk yönlendirir. Hata oranları ve örneklem büyüklüğüyle p95 ve p99'u gösterin.
- **Gecikmeden “aykırı değerleri” hariç tutmak.** En yavaş istekler gerçek kullanıcılardır. Onları tutun ve veriyi kırpmak yerine nedenini araştırın.
- **Yüzdelik dilimlerin ortalamasını sunucular arasında almak.** Sonuç kimseyi tanımlamaz. Yüzdelik dilimi hesaplamadan önce histogramları ya da ham gözlemleri birleştirin.
- **Yalnızca geçen yılın trafiğinden oluşturulmuş kapasite planları.** Talep iş olaylarına bağlıdır. İş takvimini dahil edin ve tahmin hatasını gözden geçirin.
- **Üretime benzemeyen bir ortamda test etmek.** Geçen bir sonuç yanlış güven verir. Farkları kaydedin ve bunlar için düzeltme yapın ya da güvenli biçimde üretimde test edin.
- **Kapasite metriklerini mühendisleri ya da ekipleri sıralamak için kullanmak.** Kullanım ve gecikme sistemleri tanımlar. Bunları hizmet tasarımı ve talep açısından gözden geçirin ve bireyleri resmin dışında tutun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Kullanımın, doygunluğun ve gecikmenin ölçümü | Birkaç sunucudan ortalamalar; yüksek işlemci kullanımında uyarılar | Bazı ekipler gecikme yüzdelik dilimlerini ve kuyrukları grafiğe döker | Ortak tanımlar: temel işlem başına yüzdelik dilimler, kullanımın yanında doygunluk, yazılı pencereler | Hedeflere karşı eğilim olarak izlenir, hata oranlarıyla eşleştirilir, haftalık gözden geçirilir | Tanımlar tedarikçiler ve müşterilerle birlikte gözden geçirilir; kullanıcı tarafı ve sunucu tarafı görünümleri uzlaştırılır |
| Sınırlar ve tampon | Bir arıza yaşanana kadar sınırlar bilinmez | Büyük lansmanlardan önce ara sıra yük testleri | Yazılı bir tampon politikasına karşı kritik hizmetlerde yük testleri | Tampon hizmet başına izlenir ve ilgili değişikliklerden sonra yeniden test edilir | Tampon politikası ekipler ve tedarikçiler arasında maliyet, risk ve olay verisinden ayarlanır |
| Tahmin | Bir talep sırasında rastgele tahminler | Bireysel ekipler tahminleri kafalarında ya da elektronik tablolarda tutar | İş takvimiyle beslenen, aralıkları ve sahipleri olan ortak bir tahmin sicili | Tahmin hatası puanlanır ve sapmaların nedenleriyle gözden geçirilir | Tahminler işletme ve tedarikçilerle birlikte oluşturulur; girdiler rutin olarak iyileştirilir |
| Kapasite teslimi | Bir olaydan sonra kapasite eklenir | Yaygın durumlar için standart talepler | Onaydan üretim trafiğine belgelenmiş yol, kapasite hazırlık süresi ölçülür | En uzun beklemeler finanse edilen iyileştirmeyle hedeflenir | Kapasite politika içinde otomatik olarak eklenir; ölçekleme davranışı ve maliyet birlikte gözden geçirilir |

## Kontrol listesi

- [ ] Kritik kullanıcı yolculukları adlandırılmıştır; her birinin sahibiyle uzlaşılmış bir gecikme beklentisi vardır.
- [ ] Gecikme, işlem başına medyan, p95 ve p99 olarak raporlanır; pencere ve örneklem büyüklüğü belirtilir.
- [ ] Yüzdelik dilimler histogramlardan ya da ham gözlemlerden hesaplanır, sunucular arasında asla ortalaması alınmaz.
- [ ] Her kullanım grafiğinin yanında bir doygunluk grafiği vardır.
- [ ] Hata ve zaman aşımı oranları her gecikme yüzdelik diliminin yanında gösterilir.
- [ ] Her kritik hizmetin bir yük testi vardır ve iş yükü ve ortam farkları yazılmıştır.
- [ ] Hizmet kritikliği başına, gerekçesi kaydedilmiş bir tampon politikası vardır.
- [ ] Tarihli bir tahmin sicili aralıkları, varsayımları ve sahipleri tutar ve iş takvimiyle beslenir.
- [ ] Tahmin hatası her çeyrek gözden geçirilir; büyük sapmaların nedenleri kaydedilir.
- [ ] Kapasite hazırlık süresi onaydan trafik taşımaya kadar ölçülür.
- [ ] Otomatik ölçekleme sınırları, gecikmesi ve maliyeti hizmet sahibiyle gözden geçirilir.
- [ ] Hiçbir kapasite ya da performans ölçümü birey bazında raporlanmaz.

## Yapay zekâ istemleri

**Bir gecikme raporunu gizli çarpıtma açısından gözden geçirin.**

```text
[işlem ya da hizmet] için gecikmeyi şöyle raporluyoruz: [ölçüm noktasının,
pencerenin, gösterilen istatistiklerin ve hangi isteklerin dahil ya da hariç
tutulduğunun açıklaması]. Kullanıcılarımız [kullanıcı yolculuğu ya da beklenti]
konusunu önemsiyor. Bu raporun en yavaş kullanıcıların deneyimini olduğundan
düşük gösterebileceği yolları belirle; örneğin ortalama alma, hariç tutma
kuralları, örnekleme ya da ölçüm konumu. Bunun yerine neyin gösterilmesi
gerektiğini ve hangi ek veriye ihtiyaç duyacağımı öner. Kıyaslama değerleri ya
da eşikler uydurma; ihtiyaç duyduklarını bana sor. Varsayımlarını listele.
```

**Bir hizmet için yük testi planı taslağı hazırlayın.**

```text
[hizmet adı] için bir yük testi planına ihtiyacım var. Ana kullanıcı yolculukları
[yolculuklar], bağımlılıkları [bağımlılıklar] ve üretim trafik karışımı kabaca
[karışımın açıklaması]. Test ortamı üretimden şu yönlerden farklı: [farklar]. Bir
iş yükü modeli, bir artış örüntüsü, kaydedilecek ölçümler (gecikme yüzdelik
dilimleri, hata oranı, kullanım, doygunluk), durdurma koşulları ve sonuçların
yanıtlaması gereken soruları öner. Araç özelliklerini varsayma ya da hedef
değerler uydurma. Varsayımlarını ve testin risklerini listele.
```

**İşletmeyle birlikte bir talep tahmini yapılandırın.**

```text
[hizmet] için [ufuk] kapsayan bir kapasite tahmini hazırlıyorum. Bilinen girdiler:
[geçmiş trafik açıklaması], [iş olayları ve tarihleri] ve [planlı değişiklikler].
Düşük, beklenen ve yüksek senaryoları, her birinin arkasındaki varsayımları, her
girdinin sahibini ve tahmin hatasını puanlayan bir gözden geçirme rutinini içeren
bir tahmin sicili düzeni taslağı hazırla. [işletme paydaşları] için sorulacak
sorular öner. Büyüme oranları ya da mevsimsel faktörler uydurma. Varsayımlarını
listele.
```

**Belirtilerden gerçek kısıtı bulun.**

```text
Bir hizmet yoğun yük sırasında şu belirtileri gösteriyor: [belirtiler, örneğin
yavaş p99, kuyruk büyümesi, hata türleri]. Kullanım verisi: [kaynak kullanımının
özeti]. Doygunluk verisi: [kuyrukların, havuzların, kısıtlamanın özeti]. Mimari
notları: [kısa açıklama]. Kısıt olabilecek kaynakları ve sınırları, bunlar
arasında ayrım yapacak kanıtı ve her biri için en ucuz bir sonraki testi
listele. Verinin desteklemediği bir nedeni iddia etme. Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir kapasite ya da performans ölçümünü, saatlerini ve yanında bulunması gereken korkuluğu tanımlayan konuyu bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): düzenlenmiş bir kapasite ya da performans konusunun her metriği bir oyunlaştırma vektörü ve bir korkulukla eşleştirilmiş tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- Kullanıcılar yüzdeyi değil kuyruğu hissettiği için doygunluğu kullanımla birlikte ölçün.
- Gecikmeyi, hata oranları ve örneklem büyüklüğüyle işlem başına yüzdelik dilimler olarak raporlayın ve yüzdelik dilimlerin ortalamasını asla almayın.
- Sınırları sınayarak bulun ve tamponu maliyeti riske karşı tartan kaydedilmiş bir politika olarak belirleyin.
- Talebi işletmeyle aralıklar olarak tahmin edin, tahmini dondurun ve hatadan öğrenin.
- Kapasitenin ihtiyacı izlemesi için kapasite hazırlık süresini kısaltın ve otomatik ölçeklemeyi ölçün.
- Hizmetleri ve sistemleri tanımlayın, insanları asla ve kusursuz görünen sayıları ölçümü denetlemek için bir uyarı olarak ele alın.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
