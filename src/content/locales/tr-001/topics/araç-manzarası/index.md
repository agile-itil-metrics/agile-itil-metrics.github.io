# Araç manzarası

**Araçları yanıtlanması gereken sorulara ve güvenebileceğiniz veriye göre seçin, veriyi taşınabilir tutun ve sayıları okumaya değer kılan alışkanlıklardan çok platformlara para harcamayın.**

## Genel bakış ve motivasyon

Araçlar, metrik programlarının en sık yanlış gittiği yerdir ve bu iki zıt yönde olur. Bazı kurumlar önce büyük bir analitik platformu satın alır ve sonradan üzerinde anlaşılmış tanımlarının, temiz verilerinin ve hedef kitlelerinin olmadığını fark eder. Diğerleri yalnızca bir kişinin anladığı bir yığın betik ve elektronik tablo oluşturur ve program o kişi ayrıldığında biter. İkisi de aracı esas alıp onun yanıtlaması beklenen soruları göz ardı eder.

Manzara kalabalıktır ve hızla değişir; bu yüzden bu konu bilinçli olarak satıcıdan bağımsızdır. Araç türlerini, aralarındaki veri akışlarını, oluşturma ve satın alma arasındaki ödünleşimleri ve seçim ölçütlerini anlatır. Hiçbir ürün adı anmaz; çünkü ürün adları çabuk eskir ve bir kitap güncel özellikler ve fiyatlar için kötü bir rehberdir. Ölçüm ilkeleri satıcıyla değişmez: neyi ölçtüğünüzü, verinin nereden geldiğini, sahibinin kim olduğunu ve nasıl okunacağını bilin.

Bir hizmet metrikleri programının ihtiyaç duyduğu verinin çoğu zaten kayıt sistemlerinde bulunur. [BT hizmet yönetimi](https://en.wikipedia.org/wiki/IT_service_management) araçları olayları, talepleri, sorunları, değişiklikleri ve yapılandırma kayıtlarını tutar. Kaynak kontrol, derleme, test ve dağıtım sistemleri mühendislik işinin geçmişini tutar. İzleme ve [gözlemlenebilirlik](https://en.wikipedia.org/wiki/Observability_(software)) sistemleri kullanılabilirlik, gecikme ve hata verisini tutar. Anket araçları, mali sistemler, insan kaynakları sistemleri ve sözleşme depoları geri kalanını tutar. Bir metrik programı, bu kaynakların içinde yapılan işi bozmadan onları birleştirir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

Verinin kaynaklardan analiz edilebileceği bir yere taşınması bir [veri hattıdır](https://en.wikipedia.org/wiki/Data_pipeline) ve klasik desen [çıkar, dönüştür, yükle](https://en.wikipedia.org/wiki/Extract,_transform,_load) desenidir: kaynaklardan oku, yeniden biçimlendir ve temizle, bir depoya yaz. Depo, birkaç sistemden gelen verinin analiz için düzenlendiği bütünleşik bir depo olan [veri ambarı](https://en.wikipedia.org/wiki/Data_warehouse) olabilir. Programlar bu sistemlere, bir yazılım parçasının başka bir yazılımdan veriyi tanımlı bir biçimde istemesinin yolu olan [uygulama programlama arayüzü](https://en.wikipedia.org/wiki/Application_programming_interface) aracılığıyla ulaşır. Akıp giden şeyin kalitesi her grafiğin kalitesini belirler. [Veri kalitesi](https://en.wikipedia.org/wiki/Data_quality) doğruluğu, bütünlüğü, tutarlılığı ve güncelliği kapsar; onu sürdüren disiplin ise [veri yönetişimidir](https://en.wikipedia.org/wiki/Data_governance).

Mali yön özen gerektirir. Bir aracın [toplam sahip olma maliyeti](https://en.wikipedia.org/wiki/Total_cost_of_ownership) lisansları, altyapıyı, entegrasyonu, eğitimi, yönetimi ve ondan ayrılmanın maliyetini içerir. [Satıcıya bağımlılık](https://en.wikipedia.org/wiki/Vendor_lock-in), tedarikçi değiştirmenin o kadar maliyetli olduğu ve müşterinin fiilen bağlı kaldığı durumdur. Metrik programları özellikle açıktır; çünkü tanımlar, geçmiş ve panolar bir aracın içinde birikir ve sonradan çıkarmak zordur.

Çevik hedefler yaklaşımı şekillendirir. Sürekli teslimat programa da uygulanır: tek bir takım için tek bir kaynaktan tek bir görünüme giden en ince çalışan yolu ayağa kaldırın, kullanımından öğrenin ve genişletin. Sürekli paydaş katılımı, sayıları kullanacak kişilerin araç seçimlerine katılması demektir. Sürekli iyileştirme ve süregelen evrim, araçların değişmesinin beklendiği anlamına gelir; bu yüzden taşınabilirlik mükemmellikten daha önemlidir. Sürdürülebilir tempo, programın ölçtüğü işi aç bırakan bir veri mühendisliği projesine dönüşmemesi demektir. Ve motivasyonu yüksek bireyler, kendi seçmelerine yardım ettikleri ve anladıkları araçlarla, yukarıdan dayatılan, özellikle de gözetim gibi hissettiren araçlara göre daha iyi iş çıkarır (bkz. Konu 11.3 “Korku yaratmadan metrikleri devreye almak”).

Konu, pano tasarım yönergesinden (bkz. Konu 11.1 “Hizmet metrikleri panosu tasarlamak”) ve 1. bölümdeki yönetişim konularından yararlanır.

## Temel ilkeler

- **Araçlardan önce sorular.** Önce soruları ve ölçümleri yazın, sonra bunların hangi araçları gerektirdiğine bakın.
- **Kayıt sistemlerini kullanın.** Veriyi işin yapıldığı yerden alın ve insanlardan iki kez girmelerini istemekten kaçının.
- **Tanımları aracın dışında tutun.** Metrik tanımlarını bir platform değişikliğinden sağ çıkan, sade ve taşınabilir bir biçimde sürdürün.
- **Taşınabilir veriyi tercih edin.** Veriyi açık biçimlerde, belgelenmiş arayüzlerle saklayın ve bir çıkış yolu bulundurun.
- **İnce başlayın ve büyüyün.** Bir kaynak, bir görünüm, bir takım; sonra genişletin.
- **Tam maliyeti sayın.** Lisanslar, entegrasyon, veri temizleme ve bakım maliyetinin küçük bir bölümüdür.
- **İnsanları koruyun.** Araçlar takımlara ve hizmetlere toplulaştırmalı, erişim kurallarını uygulamalı ve gözetimi zorlaştırmalıdır.
- **Veri hattına bir hizmet gibi davranın.** Bir sahibe, izlemeye, testlere ve başarısızlığı ele almanın bir yoluna ihtiyaç duyar.

## Metrik tanımları

Aşağıdaki ölçümler metrik araçlarının ve veri tedarikinin sağlığını betimler. Program takımı içindir; altyapıyı dürüst tutmak için kullanılır ve insanları değerlendirmek için kullanılmamalıdır.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kaynak kapsamı | Üzerinde anlaşılmış ölçümler için gereken kayıt sistemlerinden metrik deposunu otomatik besleyenlerin payı | bağlanmış ve test edilmiş kaynaklar / üzerinde anlaşılmış ölçümler için gereken kaynaklar | yüzde | Kaynak envanteri; veri hattı yapılandırması | Bilgi ve teknoloji yönetimi; hizmet yapılandırma yönetimi | Veri hattının sürekli teslimatı | Üç aylık |
| Veri hattı güvenilirliği | Zamanında ve geçen denetimlerle tamamlanan planlı veri yüklemelerinin payı | geçen denetimlerle zamanında yapılan yüklemeler / planlanan yüklemeler | yüzde | Veri hattı günlükleri ve test sonuçları | İzleme ve olay yönetimi | Otomatik testler ve hızlı geri bildirim | Haftalık |
| Yeni ölçüme geçen süre | Yeni bir ölçüm için onaylanmış talepten, tanım kartıyla birlikte kullanıma sunulmasına kadar geçen süre | onaydan yayına kadar geçen gün sayısı, medyan ve 85. yüzdelik | gün | Talep ve yayın kayıtları | Hizmet talebi yönetimi; değişiklik yetkilendirme | Küçük değer artımları | Üç aylık |
| Mutabakat oranı | Örneklenen bir denetimde metrik deposu ile kaynak sistem arasında eşleşen temel rakamların payı | toleransla eşleşen rakamlar / denetlenen rakamlar | yüzde | Mutabakat denetimleri | Bilgi ve teknoloji yönetimi | Güvenilir geri bildirim | Aylık |
| Elle çalışma payı | Yinelenen raporlarda elle toplama ve temizlemeye harcanan emeğin payı | elle yapılan adımlara harcanan saat / yinelenen raporlara harcanan toplam saat | yüzde | Zaman tahminleri; takım anketi | Sürekli iyileştirme | Angaryanın ortadan kaldırılması | Üç aylık |
| Çıkışa hazırlık | Tanımların, geçmişin ve panoların belgelenmiş, kullanılabilir bir biçimde dışa aktarılıp aktarılamayacağı | test edilmiş ve eksiksiz dışa aktarmalar / planlanan dışa aktarma testleri | yüzde | Dışa aktarma test kayıtları | Tedarikçi yönetimi; hizmet sürekliliği yönetimi | Sürdürülebilir seçimler | Yıllık |
| Desteklenen takım başına araç maliyeti | Programın araçlarının tam yıllık maliyetinin hizmet verdiği takımlara bölünmesi | (lisanslar + altyapı + bakım emeği) / hizmet verilen takımlar | takım başına para birimi | Mali ve emek kayıtları | Hizmet mali yönetimi | Sürdürülebilir tempo | Yıllık |

Kaynakları var olana göre değil, üzerinde anlaşılmış ölçümlerin ihtiyacına göre sayın; böylece alakasız sistemler bağlanarak kapsam yükseltilmez. Mutabakat, önceden bir örneklem ve bir tolerans seçmeyi gerektirir. Desteklenen takım başına araç maliyeti, seçenekleri karşılaştırmak için kullanılan betimleyici bir rakamdır, aşağı itilecek bir hedef değildir. Veri hattını sürdüren kişilerin emeğini de içerir.

## Öneriler

### Neye ihtiyacınız olduğuna karar verin

**1. Gereksinimleri sorular ve ölçümler olarak yazın.** Programın yayımlamayı kabul ettiği ölçümleri (bkz. Konu 11.1 “Hizmet metrikleri panosu tasarlamak”), her birinin ihtiyaç duyduğu kaynakları, her birinin ne kadar güncel olması gerektiğini, kimin görebileceğini ve geçmişin ne kadar süre saklanması gerektiğini listeleyin. Olmazsa olmazları tercihlerden ayırın. İki sayfalık kısa bir belge, uzun bir teklif isteme belgesinden daha iyidir.

**2. Halihazırda sahip olduklarınızın envanterini çıkarın.** Birçok kurumun hizmet yönetimi, mühendislik ve izleme araçlarında kullanılmayan analitik özellikleri vardır. Birçoğunun ihtiyacın bir kısmını zaten yanıtlayan elektronik tabloları, betikleri ve raporları vardır. Bunların neler yapabildiğine bakarak başlayın. En ucuz araç, zaten parası ödenmiş ve zaten anlaşılmış olandır.

**3. Araçtan önce veriyi gözden geçirin.** Her kaynak için verinin eksiksiz olup olmadığını, tutarlı girilip girilmediğini ve bir arayüz aracılığıyla erişilebilir olup olmadığını kontrol edin. Bir araç, kimsenin kullanmadığı olay kategorilerini, sonradan oluşturulan değişiklik kayıtlarını veya üzerine yazılan zaman damgalarını düzeltemez. En değerli erken çalışmaların bazıları, veri yakalamayı kaynağında düzeltmektir (bkz. Konu 7.4 “Yapılandırma ve CMDB kalitesi metrikleri”).

### Oluşturun, satın alın veya birleştirin

**4. Oluşturmayı ve satın almayı tam maliyet ve uyum açısından karşılaştırın.** Bir analitik platformu veya paketlenmiş bir mühendislik analitiği ürünü satın almak, lisans bedeli, dünyanın sabit bir modeli ve bağımlılık karşılığında hazır bağlayıcılar, grafikler ve destek getirir. Bir veri hattı ve görünümler oluşturmak, mühendislik zamanı ve bakım karşılığında uyum ve denetim getirir. Çoğu kurum sonunda birleştirir: yeterince iyi olduğu yerde yerleşik raporlamayı kullanın, görünümler için genel bir analiz aracı kullanın ve başka hiçbir şeyin uymadığı yerde ince bağlayıcılar oluşturun.

**5. Gerçek veriyle bir prototip test edin.** Taahhüt vermeden önce, kendi ölçümlerinizden iki veya üçüyle, gerçek veri ve gerçek kullanıcılarla süre sınırlı bir deneme yürütün. Bağlantıların ne kadar sürdüğünü, aracın tanımlarınızı ne kadar iyi ele aldığını, dağılımları ve yüzdelik dilimleri gösterip gösteremediğini ve erişimi nasıl denetlediğini kontrol edin. Pazarlama gösterimleri temiz veri kullanır; sizinki temiz değildir.

**6. Girmeden önce çıkışı planlayın.** Tanımların, geçmişin ve panoların nasıl dışa aktarılabileceğini sorun ve test edin. Açık arayüzleri ve standart biçimleri olan araçları tercih edin; metrik tanımlarının ve temizlenmiş verinin kendi kopyanızı tutun. Ayrılmanın maliyeti, kalmanın maliyetinin bir parçasıdır ve inandırıcı bir çıkış pazarlık gücünüzü artırır (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

### Açık ölçütlerle seçin

**7. Satıcıdan bağımsız seçim ölçütleri kullanın.** Yararlı ölçütler şunlardır. İhtiyaç duyduğunuz veri kaynaklarının bakımı yapılan bağlayıcıları var mı? Tanımlar yazılabiliyor, sürümlenebiliyor ve gözden geçirilebiliyor mu? Araç, ortalamaların ve sayıların yanı sıra dağılımları, yüzdelik dilimleri ve eğilimleri gösterebiliyor mu? Takımlara ve hizmetlere toplulaştırıyor ve bireysel düzeydeki görünümleri kısıtlamanıza izin veriyor mu? Role dayalı erişimi ve denetimi destekliyor mu? Veri açık biçimlerde dışa aktarılabiliyor mu? Satıcı değişiklikleri, kesintileri ve güvenlik olaylarını nasıl ele alıyor? Üç yıl içinde beklediğiniz ölçekte maliyeti nedir?

**8. Yerleşik puanlamaya karşı temkinli olun.** Bazı araçlar kutudan çıkar çıkmaz bileşik puanlar, insanların sıralamaları veya “verimlilik” endeksleri sunar. Bunlar benimsemesi kolay, savunması zordur (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Bu tür özelliklerin kapatılıp kapatılamayacağını kontrol edin ve herhangi bir şeyi açmadan önce politikayı belirleyin.

**9. Kullanacak kişileri dahil edin.** Takımlardan kısa listedeki seçenekleri kendi verileriyle denemelerini isteyin. Soruları, bir gereksinim belgesinin göstermediği sınırları ortaya çıkaracaktır. Güvenliği, gizliliği, finansı ve satın almayı erkenden dahil edin (bkz. Konu 8.1 “Güvenlik olayı ve zafiyet metrikleri”).

### Veri hattını bir hizmet olarak işletin

**10. Veri hattını otomatikleştirin, test edin ve izleyin.** Veri yüklemelerine diğer her üretim hizmeti gibi davranın. Sayılar, aralıklar, yinelenenler ve güncellik üzerinde otomatik denetimler çalıştırın. Başarısızlıkta uyarı verin ve veri kalitesi durumunu panoda gösterin. Dönüşüm mantığını sürümleyin ve değişikliklerini kod gibi gözden geçirin (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”).

**11. Tanımların bir kataloğunu tutun.** Her ölçümün tanımını, formülünü, kaynağını, sahibini ve sınırlarını içeren ortak bir katalog sürdürün. Sade metin dosyalarından oluşan bir depo, bir veri kataloğu aracı veya bir wiki olabilir. Önemli olan, anlam için doğruluk kaynağı olması ve panoların ondan okuması veya ona bağlantı vermesidir (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

**12. Araçları yılda bir gözden geçirin.** Her yıl araçların maliyetinin ne olduğunu, programın hangi parçaları kullandığını, elle emeğin nerede kaldığını ve hangi yeni seçeneklerin bulunduğunu kontrol edin. Kimsenin kullanmadığını emekliye ayırın. Program olgunlaştıkça oluşturma ve satın alma dengesini yeniden düşünün. Değişikliği işin normal bir parçası olarak planlayın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Kaynak kapsamı | Kolay veya alakasız kaynakları bağlamak; kullanılabilir veri taşımayan bir bağlantıyı saymak | Üzerinde anlaşılmış ölçümlere göre sayın; kaynak başına veri bütünlüğünü kontrol edin |
| Veri hattı güvenilirliği | Yüklemelerin hep geçmesi için denetimleri gevşetmek; daha az yükleme planlamak | Denetimlerin gücünü gözden geçirin; mutabakatı ve kaynak satır sayılarını izleyin |
| Yeni ölçüme geçen süre | Tanımlar veya testler olmadan yayımlamak; neyin yeni ölçüm sayıldığını daraltmak | Tamamlanma için tanım kartını ve bir mutabakat denetimini şart koşun |
| Mutabakat oranı | Denetlemek için kolay rakamları seçmek; bir sapmadan sonra toleransı genişletmek | Örnekleri denetimden önce seçin; toleransı önceden sabitleyin; zor rakamları dahil edin |
| Elle çalışma payı | Elle işi olduğundan az göstermek; emeği diğer bütçelerde gizlemek | İşi yapan kişilere sorun; her raporlama döngüsünün sonunda harcanan zamanla karşılaştırın |
| Çıkışa hazırlık | Kısmi bir dışa aktarmayı test etmek; belgelenmiş bir planı hazırlık saymak | Bir örnek üzerinde farklı bir araca tam geri yükleme yapın; tanımları ve geçmişi doğrulayın |
| Desteklenen takım başına araç maliyeti | Bakım emeğini dışarıda bırakmak; kâğıt üzerinde takım eklemek | Personel zamanını dahil edin; görünümlerini aktif olarak kullanan takımları sayın |

Sağlıklı bir okuma, zamanında gelen ve kaynakla mutabık olan veriyi, tanımlarla birlikte yayımlanan yeni ölçümleri, azalan elle emeği ve en az bir kez test edilmiş bir çıkışı gösterir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Her aracın yerleşik raporlaması | Ucuz; zaten mevcut; anlaşılmış | Silolar; araçlar arasında tutarsız tanımlar |
| Tek satıcıdan tek paket | Bütünleşik; tek sözleşme | Bağımlılık; sizin değil satıcının modeline uyar |
| Paketlenmiş mühendislik analitiği ürünü | Hızlı başlangıç; hazır bağlayıcılar | Sabit model; bireysel düzeyde puanlama riski; ölçekte maliyet |
| Genel analiz ve görselleştirme aracı | Esnek; geniş beceri bulunur | Veri tedariği ve tasarım becerisi gerektirir |
| Dönüşüm katmanlı ambar | Güçlü denetim; kaynaklar arası birleştirme | Mühendislik emeği; sahiplik gerektirir |
| Elektronik tablolar ve betikler | Başlaması hızlı; lisans yok | Kırılgan; bireylere bağımlı; denetlemesi zor |
| Açık kaynak yığını | Denetim; lisans maliyeti yok | Bakım emeği; destek size bağlı |
| Elle toplanan metrikler | Hiçbir araç olmadan çalışır | Yavaş; hataya açık; sürdürmesi zor |

Düzyazıyla yanıt şudur: elinizde olanla başlayın, gerçek soruları yanıtlayan en ince bağlantıyı ekleyin, tanımları ve veriyi taşınabilir tutun ve ancak daha hafif araçlar kararları gözle görülür biçimde sınırladığında daha ağır araçlara geçin.

## Takımınızla tartışılacak sorular

**1. Hangi sayıları her ay elle üretiyoruz ve bunu bırakmak için ne gerekir?**
Elle hazırlanan raporları ve harcadıkları saatleri listeleyin. Her birinin kaynağını ve bir arayüzü olup olmadığını bulun. Kolaylaştırıcı, hangi raporların kolayca bırakılabileceğini sormalıdır. Biri otomatikleştirmek, biri emekliye ayırmak üzerinde anlaşın.

**2. Mevcut raporlama aracımız yarın yok olsa neyi kaybederdik?**
Yalnızca onun içinde bulunan tanımları, geçmişi ve panoları sayın. Bunlardan hangilerinin dışa aktarılabilir olduğunu kontrol edin. Bir kopyanın nerede tutulacağı konusunda anlaşın.

**3. Sistemlerimizdeki hangi verilere en az güveniyoruz ve neden?**
Girme alışkanlıklarına, varsayılanlara ve üzerine yazılan alanlara bakın. Her çarpıtmanın yayımladığımız ölçümleri ne kadar etkilediğini tahmin edin. Hangi kaynak düzeltmesinin en az çabayla en çok güven katacağı konusunda anlaşın.

**4. Araç insanların neyi görmesine izin veriyor ki bunu istemezdik?**
Bireysel düzeydeki görünümlere, etkinlik günlüklerine ve sıralamalara bakın. Neyin kısıtlanacağına veya kapatılacağına karar verin ve özelliği kimse kullanmadan önce kuralı yazın.

**5. Yeni bir ölçüm eklememiz ne kadar sürüyor ve bizi ne yavaşlatıyor?**
Yakın tarihli bir talebi onaydan kullanıma sunulmaya kadar izleyin. Beklemeleri işaretleyin. Onaylar, eksik tanımlar veya elle temizleme gibi neyin kaldırılacağı konusunda anlaşın.

**6. Bu aracın bir takım için bir yıllık tam maliyeti nedir?**
Lisansları, altyapıyı, entegrasyonu, eğitimi ve onu sürdüren kişilerin zamanını ekleyin. İyileştirdiği kararlarla karşılaştırın. Neyin parasını ödemeyi bırakacağımızı tartışın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Takımlar, ek giriş olmadan işten gelen veriyi ve sorularını yanıtlayan görünümleri ister. Araçları seçmeye ve test etmeye yardım etmeli, kendi ölçümlerinin tanımlarına sahip çıkmalı ve bireyleri sıralayan özellikleri reddetmelidir. Zamanları en kıt girdidir ve onlardan işi iki kez kaydetmelerini isteyen araçlara direnç gösterilir.

### Hizmet ve operasyon takımları

Operasyon takımları kaynakları ve çoğu zaman veri hattını işletir. Veri hattına izleme ve testlerle bir hizmet gibi davranmalı, kaynak veri alanlarını güvenilir tutmalı ve kayıt sistemlerinde bağlayıcıları bozacak değişiklikleri bildirmelidir. Bir sayının yanlış olduğunu ilk onlar görür.

### Liderlik ve yönetişim

Liderler programı finanse eder ve beklentileri belirler. Lisans fiyatını değil toplam maliyeti istemeli, taşınabilirliği ve bir çıkışı şart koşmalı, bir tanım sorununu çözmek için platform satın almaya direnmeli ve gizlilik ile erişim kurallarında ısrar etmelidir. Mütevazı bir başlangıcı kabul etmeli ve onu iyileştirdiği kararlarla yargılamalıdır.

### Müşteriler ve kullanıcılar

Müşteriler ve kullanıcılar araçları nadiren görür ve sonuçlarıyla yaşarlar: kendileri hakkındaki veri saklanır, birleştirilir ve analiz edilir. Neyin toplandığı, ne kadar süre saklandığı, kimin gördüğü ve nasıl korunduğu konusunda açık kuralları hak ederler. Ölçümler onların geri bildirimlerinden yararlandığında araçlar rızaya ve anonimliğe saygı göstermelidir.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir lojistik şirketinin bir hizmet yönetimi aracı, bir kaynak kontrol ve dağıtım sistemi, bir izleme platformu ve bir anket aracı vardır ve her biri kendi raporlarını üretir. Hizmet yönetimi başkanı 12 takım için hizmet sağlığının tek bir görünümünü ister. Bir satıcı, üç yıllık sözleşmeyle hepsi bir arada bir analitik platformu sunar. Aşağıdaki rakamlar açıklayıcı örnektir.

Hizmet yönetimi başkanı önce, takımların ve liderlerin pano oturumlarında üzerinde anlaştığı soruları ve 14 ölçümü yazar. Var olanın envanterini çıkarır: hizmet yönetimi aracı olay ve değişiklik verisini arayüzü aracılığıyla dışa aktarabilmekte, dağıtım sistemi dağıtım zaman damgalarını sağlamakta ve izleme platformu hedeflere karşı kullanılabilirliği raporlamaktadır. Takım temsilcilerinden oluşan küçük bir gruptan iki seçeneği üç ölçüm üzerinde gerçek veriyle test etmesini ister: satıcının platformu ve küçük bir veri deposu ve ince bağlayıcılarla birlikte genel bir görselleştirme aracından oluşan bir birleşim.

Deneme farkları ortaya çıkarır. Platform tüm kaynaklara iki günde bağlanmıştır, ama teslim süresini ortalama olarak hesaplamış ve yüksek bir yüzdelik dilimi gösterememiştir; kapatılamayan yerleşik bir “takım verimlilik puanı” vardır ve pano tanımlarını dışa aktarmak başka hiçbir aracın okuyamadığı bir dosya üretmiştir. Birleşim bağlanmak için 11 gün almıştır, ama medyanları ve yüzdelik dilimleri göstermiş, tanımları bir depoda sade metin olarak tutmuş ve bireysel düzeydeki alanları veri deposunda kısıtlamıştır. Grup ayrıca değişiklik kayıtlarının yüzde 30'unun dağıtımdan sonra oluşturulduğunu keşfeder; dolayısıyla teslim süresi, onu hangi araç okursa okusun yanlıştır. Girme alışkanlığını kaynağında düzeltmek ilk iş olur.

Şirket birleşimi seçer. Kaynak kapsamı, iki çeyrekte gereken 8 kaynaktan 3'ünden 7'sine yükselir. Veri hattı güvenilirliği, geçen denetimlerle zamanında yapılan yüklemelerin yüzde 71'inde başlar ve takım testler ve başarısızlık uyarıları ekledikten sonra yüzde 96'ya ulaşır. Yeni ölçüme geçen süre medyan 31 günden 9 güne düşer. Aylık rapordaki elle emek yaklaşık 40 saatten 6 saate düşer. Bir direktör, takımların tek bir sıralamasını vermek için satıcı platformunun verimlilik puanının eklenip eklenemeyeceğini sorar. Hizmet yönetimi başkanı Konu 1.2'deki analizi açıklar, şirketin başka bir yerinde benzer bir puan kullanıldığında ne olduğunu gösterir ve mevcut dengeli görünümü önerir. Karar kaydedilir ve puan özelliği, onu içeren her araçta devre dışı bırakılır.

## Sektör mercekleri

**Girişim (startup).** Ürünün ve mevcut araçların zaten sunduğunu kullanın. Bir elektronik tablo ve kullandığınız araçların yerleşik raporları, çoğu erken soruyu yanıtlayabilir. Sorular kararlı hâle gelene ve elle emek acıtana kadar bir veri platformuna direnin. Sonraki bir geçiş kolay olsun diye metrik tanımlarını yazılı tutun.

**Küçük işletme.** Az ölçüm ve az sistem, basit araçlar demektir. Yerleşik raporlar ve bir elektronik tablo çoğu zaman yeterlidir. Başlıca riskler, yalnızca bir kişinin kafasında tutulan veri ve dışa aktarımı olmayan araçlardır. Ayrılabileceğiniz ürünler seçin ve tanımları yazın.

**Büyük kurum.** Çok sayıda sistem, takım ve tanım; yönetilen bir veri deposunu, bir tanım kataloğunu ve katmanlı görünümleri gerektirir. Birleşik sahiplik, her raporu inşa eden merkezî bir takımdan daha iyi çalışır. Satıcıya bağımlılığa, erişim denetimine, gizliliğe ve tedarikçi değerlendirmesine dikkat edin ve veri hattını bir hizmet olarak sunan küçük bir platform takımı düşünün.

**Devlet ve kamu sektörü.** Satın alma kuralları, veri egemenliği ve erişilebilirlik araç seçimlerini etkiler. Sözleşmeler uzun ve yönetimler değişken olduğu için açık standartlar ve taşınabilirlik değerlidir. Güvenlik değerlendirmeleri, kayıt saklama ve kamuya açıklama kuralları için plan yapın ve barındırma ile satın almaya ilişkin güncel yönergeleri kontrol edin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler arasında lisanslar veya abonelikler, altyapı, entegrasyon ve bağlayıcı çalışması, veri temizleme, tanım ve katalog çalışması, eğitim, destek ve veri hattını sağlıklı tutmanın yinelenen emeği bulunur. Oluşturma seçeneklerinin hafife alınması kolay mühendislik maliyetleri vardır; satın alma seçeneklerinin ise ölçekle büyüyen ücretleri ve ayrılmanın maliyeti vardır.

Getiriler, tasarruf edilen raporlama emeğinden, daha hızlı yanıtlardan, sayılar üzerine daha az anlaşmazlıktan ve güvenilen veriden gelen daha iyi kararlardan gelir. İş gerekçesini kendi verilerinizden kurun: şu anda elle hazırlanan raporlara harcanan saatler, tek bir rakamın rakip sürümlerinin sayısı, bir soru ile bir yanıt arasındaki gecikme ve çakışan araçların maliyetleri. Analitik getirileri hakkında analist rakamlarını, izlenebilir bir kaynak ve sizin bağlamınızla ilgisi olmadan aktarmaktan kaçının. Adil bir karşılaştırma, her seçeneğin çıkış dahil üç yıllık tam maliyetini sayar (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi” ve Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Önce araç, sonra sorular.** Platform gelir ve ondan ne isteneceğini kimse bilmez. Önce ölçümleri yazın.
- **Tanım sorununu çözmek için satın almak.** Anlam konusundaki anlaşmazlık her araçta sürer. Tanımları netleştirin.
- **Yerleşik bireysel puanlar.** Cezbederler ve çarpıtırlar. Devre dışı bırakın ve önce politikayı belirleyin.
- **Çıkış yok.** Geçmiş ve tanımlar hapsolur. Dışa aktarmayı test edin ve bir kopya tutun.
- **Tek kişilik veri hattı.** O kişi ayrıldığında durur. Belgeleyin, test edin ve sahipliği paylaşın.
- **Çift giriş.** İnsanlar aynı işi iki kez kaydeder ve her ikisinin de kalitesi düşer. Veriyi kayıt sistemlerinden alın.
- **Erken aşırı mühendislik.** Tek bir görünüm değerini kanıtlamadan bir veri platformu gelir. İnce başlayın.
- **Veri kalitesini göz ardı etmek.** Kirli veri üzerindeki temiz grafikler daha ikna edici biçimde yanıltır. Yakalamayı kaynağında düzeltin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Veri tedariki | Elle toplama; elektronik tablolar | Bazı otomatik beslemeler; bireysel betikler | Üzerinde anlaşılmış kaynaklar, test edilmiş veri hatlarıyla ortak bir depoyu besler | Güvenilirlik, mutabakat ve güncellik yönetilir ve görünürdür | Takımlar ve tedarikçiler arasında ortak sözleşmelerle birleşik veri hatları; kaynaklar geri bildirimden iyileştirilir |
| Tanımlar ve katalog | İnsanların kafasında | Bazıları belgelenmiş | Sahipleri olan, sürümlenmiş ve gözden geçirilmiş tek bir tanım kataloğu | Katalog panoları yönlendirir; değişiklikler kullanıcılarla gözden geçirilir | Tanımlar takımlar ve tedarikçiler arasında ortak sahiplenilir; kararlara bilgi sağlamayı bıraktıklarında emekliye ayrılır |
| Seçim ve maliyet | Gelişigüzel satın almalar | Çakışan araçlar | Ölçütler yazılıdır; çıkış test edilmiştir; tam maliyet sayılır | Desteklenen takım başına maliyet ve elle emek yönetilir | Araç seçimleri kullanıcılarla düzenli gözden geçirilir ve ihtiyaçlar değiştikçe uyarlanır |

## Kontrol listesi

- [ ] Üzerinde anlaşılmış ölçümler ve soruları, araçlar karşılaştırılmadan önce yazılmıştır.
- [ ] Mevcut araçların ve raporların envanteri çıkarılmış ve önce test edilmiştir.
- [ ] Ana kaynaklardaki veri kalitesi kontrol edilmiş ve en kötü boşluklar giderilmiştir.
- [ ] Seçim ölçütleri yazılıdır ve dağılımları, erişim denetimini ve dışa aktarmayı içerir.
- [ ] Herhangi bir taahhütten önce gerçek veri ve gerçek kullanıcılarla süre sınırlı bir deneme yapılmıştır.
- [ ] Bireysel düzeyde puanlama ve sıralama özellikleri politika gereği devre dışı bırakılmış veya kısıtlanmıştır.
- [ ] Tanımlar, tek bir aracın dışında taşınabilir bir katalogda tutulur.
- [ ] Veri hattının bir sahibi, otomatik denetimleri, izlemesi ve bir başarısızlık uyarısı vardır.
- [ ] Tanımların ve geçmişin bir dışa aktarımı test edilmiştir.
- [ ] Çıkış dahil üç yıllık tam maliyet sayılmıştır.

## Yapay zekâ istemleri

**Sorulardan gereksinimler yazın.**

```text
Şunlar hedef kitlelerimizin sorduğu sorular ve yayımlamayı planladığımız
ölçümlerdir: [yapıştırın]. Bir metrik aracı veya veri hattı için iki sayfalık bir
gereksinim belgesi taslağı hazırlayın. Veri kaynaklarını, güncelliği, erişim
denetimini, saklamayı, dağılımları ve yüzdelik dilimleri, dışa aktarmayı ve
taşınabilirliği ve olmazsa olmazlar ile tercihlerin bir listesini kapsayın. Ürün
adı anmayın. Varsayımlarınızı ve takımlarla doğrulanacak noktaları listeleyin.
```

**Bir araç denemesi planlayın.**

```text
Metrik programımız için [seçenekler] seçeneklerini karşılaştırıyoruz. Ölçümlerimizden
üçünü ve gerçek veriyi kullanan iki haftalık bir deneme tasarlayın. Neyin test
edileceğini, seçeneklerin yazılı ölçütlere göre nasıl puanlanacağını, kimin
katılması gerektiğini, erişim denetiminin ve dışa aktarmanın nasıl kontrol
edileceğini ve hangi kanıtları kaydedeceğimizi belirtin. Belirli ürünler hakkında
sonuç iddia etmeyin. Varsayımlarınızı ve risklerinizi listeleyin.
```

**Bir veri hattını gözden geçirin.**

```text
Şu, verinin [kaynaklar] kaynaklarından panolarımıza nasıl aktığının bir
açıklamasıdır: [yapıştırın]. Verinin geç kalabileceği, yinelenebileceği, üzerine
yazılabileceği veya kaybolabileceği noktaları belirleyin ve her biri için otomatik
denetimler önerin. Temel rakamları kaynakla mutabık kılmanın bir yolunu önerin.
Sistem davranışı uydurmayın. Varsayımlarınızı ve açıklamadan anlayamadıklarınızı
listeleyin.
```

**Tam maliyeti karşılaştırın.**

```text
Metrik programımız için araç oluşturmanın, satın almanın ve birleştirmenin üç
yıllık tam maliyetini karşılaştırmama yardım edin. Her seçenek için lisansları,
altyapıyı, entegrasyonu, veri temizlemeyi, eğitimi, bakımı ve çıkışı içeren maliyet
kategorilerini listeleyin. Kendi rakamlarımız için boşlukları olan bir tablo
verin. Fiyat sağlamayın. Varsayımlarınızı listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): gereksinimleri yazarken her ölçüm için veri kaynağını ve koruma önlemini bulmak amacıyla kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir araç karar kaydının tanımları, veri kaynaklarını ve koruma önlemlerini içerdiğini denetlemek amacıyla kullanın.

## Temel çıkarımlar

- Önce soruları ve ölçümleri yazın ve araçları bunlara hizmet edecek biçimde seçin.
- Kayıt sistemlerini kullanın, veri yakalamayı kaynağında düzeltin ve mutabakatı test edin.
- Tanımları ve veriyi taşınabilir tutun ve taahhütte bulunmadan önce çıkışı test edin.
- Bireysel düzeyde puanlamayı ve sıralamaları devre dışı bırakın ve herhangi bir özelliği açmadan önce politikayı belirleyin.
- Veri hattını bir sahip, testler ve izlemeyle bir hizmet olarak işletin.
- Birkaç yıl boyunca tam maliyeti sayın ve gerçek soruları yanıtlayan en ince yolla başlayın.

## Kaynaklar ve ileri okuma

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
