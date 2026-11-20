# Güvenlik olayı ve zafiyet metrikleri

**Güvenlik, bir hizmeti sürekli teslim etmenin ve işletmenin parçasıdır; bu yüzden insanların ne kadar süre maruz kaldığını, ters giden şeyi ne kadar hızlı sınırladığınızı ve iş arkadaşlarının el kaldırmaya ne kadar istekli olduğunu ölçün, bir hatayı asla suçlama gerekçesine dönüştürmeyin.**

## Genel bakış ve motivasyon

Her hizmet zayıflıklar taşır ve bunlardan bazıları ona karşı kullanılacaktır. [Zafiyet](https://en.wikipedia.org/wiki/Vulnerability_(computing)), yazılımda, donanımda, yapılandırmada veya süreçte bulunan ve bir sistemin gizliliğine, bütünlüğüne ya da erişilebilirliğine zarar vermek için istismar edilebilen bir zayıflıktır. Güvenlik olayı ise bu zararın gerçekleştiği ya da inandırıcı biçimde tehdit edildiği bir olaydır. Bu alandaki metrikler iki soruyu yanıtlamaya çalışır. Ne kadar maruz durumdayız ve sorunları ne kadar hızlı buluyor, düzeltiyor ve onlardan toparlanıyoruz?

Çevik ve DevOps geleneği güvenliği, sürekli teslimatın sonundaki bir kapı olarak değil, onun bir özelliği olarak ele alır. [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps), güvenlik denetimlerini işlem hattına yerleştirerek ve sorumluluğu geliştirme, güvenlik ve operasyon arasında paylaştırarak DevOps fikrini genişletir. ITIL, bilgi güvenliği yönetimi uygulaması aracılığıyla politikayı, riske dayalı düşünmeyi ve olay, değişiklik ve varlık yönetimiyle bağlantıyı katar. İkisi günlük işte buluşur: bağımlılık güncellemeleri sıradan değişiklikler olarak gelir, zafiyet bulguları sahipli birikim listesi öğelerine dönüşür ve olaylar, diğer her olay gibi suçlamasız incelemelerle ele alınır (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”).

Güvenlik metrikleri belirli çarpıtmalara açıktır.

- **Bulguları saymak, bakmamayı ödüllendirir.** Daha az tarama yapan takım daha az bulgu bulur. Ham zafiyet sayısı, bir şey iyileştiği için değil, bir tarayıcı erişimini kaybettiği için düşebilir.
- **Önem puanları girdidir, hakikat değil.** [Ortak Zafiyet Puanlama Sistemi](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS), bir zafiyete soyut olarak bir önem puanı verir; [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) gibi kayıt defterleri de onlara tanımlayıcılar atar. Bir zafiyetin sizin için önemli olup olmadığı, ortamınızda erişilebilir olup olmadığına, bir istismarın kullanımda olup olmadığına ve etkilenen varlığın ne kadar değerli olduğuna bağlıdır. Tek başına kullanılan ham bir önem puanı, çabayı yanlış yerlere yönlendirir.
- **Suçlama bildirimleri bastırır.** İnsanlar bir bağlantıya tıkladıkları ya da sebep oldukları bir olayı bildirdikleri için cezalandırılırsa bildirimler durur ve maruz kalma görünmeden büyür. Psikolojik güvenlik bir güvenlik kontrolüdür.
- **Süre ölçümleri kuyruğu gizler.** Medyan yama süresi sağlıklı görünürken bir avuç kritik sistem aylarca maruz kalmış durumda kalabilir.

Bu konu, ana ölçümleri tanımlarıyla, manipülasyon yöntemleriyle ve koruma önlemleriyle verir. Önceki bölümdeki varlık ve yapılandırma kayıtlarına dayanır, çünkü bulamadığınız şeyi yamalayamaz ya da tarayamazsınız (bkz. Konu 7.1 “BT varlık yönetimi metrikleri” ve Konu 7.4 “Yapılandırma ve CMDB kalitesi metrikleri”). Bir uyarı: bu bir ölçüm rehberidir, güvenlik el kitabı değildir. Kontrolleri nitelikli güvenlik uzmanlarıyla birlikte seçin ve ISO/IEC 27001 ile ulusal kurumların rehberliği gibi size uygulanan standartlara ve yasal yükümlülüklere uyun.

[Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law)ndan çıkan koruma önlemi güvenlikte özellikle keskin biçimde geçerlidir. Bir metrik hedef haline geldiğinde insanlar bulguları yeniden sınıflandırır, varlıkları taramaların dışında bırakır ve nedeni gidermeden kayıtları kapatır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Sayıların yanı sıra maruz kalma süresini de ölçün.** Bir zayıflığın ne kadar süre açık kaldığı, kaç tane bulunduğundan daha önemlidir.
- **Bağlama göre önceliklendirin.** Önem derecesini, istismar edilebilirliği, erişilebilirliği ve varlık değerini birleştirin.
- **Önce kapsamı kontrol edin.** Mülkün yarısını kaçıran bir taramanın temiz raporu yanıltıcı bir rahatlıktır.
- **Güvenliği işlem hattına yerleştirin.** Güvenli seçimleri kolay varsayılan yapın ve hızlı geri bildirim verin.
- **Disiplinler arasında iş birliği yapın.** Güvenlik, geliştirme ve operasyon sonuçların sahipliğini birlikte üstlenir.
- **Bildirimi güvenli hale getirin.** Hataların suçlamasız ele alınması sinyallerin akmasını sağlar.
- **İnsan davranışı verilerini toplulaştırın.** Grup örüntülerini raporlayın, bireylerin adını asla anmayın ya da sıralamayın.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Maruz kalma penceresi | Bilinen bir zafiyetin kapsamdaki varlıklarda öncelik bandına göre açık kaldığı süre | zafiyetin varlığa uygulandığının bilindiği tarihten bir düzeltmenin veya kabul edilmiş azaltımın doğrulandığı tarihe kadar geçen günlerin medyanı ve 85. yüzdeliği | gün | Zafiyet tarayıcısı, kayıt sistemi, değişiklik kayıtları | Bilgi güvenliği yönetimi; sorun yönetimi | Birikim listesindeki bir kusurun düzeltilme süresi | Haftalık |
| Yama uyumu | Kapsamdaki varlıkların, sınıfları için yama politikası penceresini karşılayan oranı | politika penceresi içinde yamalanan varlıklar / dönemde yama gerektiren kapsamdaki varlıklar | yüzde | Uç nokta ve sunucu yönetim araçları, varlık kaydı | Bilgi güvenliği yönetimi; yayın ve dağıtım yönetimi | İşlem hattında güncel tutulan bağımlılıklar | Haftalık |
| Gecikmiş kritik bulgular | Politika son tarihini aşmış kritik öncelikli bulguların sayısı ve yaşı | son tarihi geçmiş kritik bulguların sayısı; en eskisinin yaşı | adet; gün | Zafiyet yönetim sistemi | Bilgi güvenliği yönetimi; risk yönetimi | Üzerinde anlaşılan sınırı aşan güvenlik kusurları | Haftalık |
| Tarama kapsamı | Kapsamdaki varlıkların gereken aralık içinde değerlendirilen oranı | son aralıkta başarıyla taranan varlıklar / kapsamdaki varlıklar | yüzde | Varlık kaydıyla birleştirilmiş tarayıcı raporları | Bilgi güvenliği yönetimi; BT varlık yönetimi | Her derlemede çalıştırılan işlem hattı denetimleri | Haftalık |
| Sınırlama süresi | Doğrulanmış bir güvenlik olayının tespitinden sınırlanmasına kadar geçen süre | tespitten sınırlamaya kadar geçen saatlerin medyanı ve 85. yüzdeliği | saat | Olay kayıtları | Olay yönetimi; bilgi güvenliği yönetimi | Bir arızadan sonra hizmeti geri getirme süresi | Olay başına, aylık incelenir |
| Risk istisnası yaşı | Kabul edilmiş risk istisnalarının yaşı ve inceleme tarihini geçenlerin oranı | onaydan bu yana geçen günler; inceleme tarihi geçmiş istisnalar / açık istisnalar | gün; yüzde | İstisna kaydı | Risk yönetimi; bilgi güvenliği yönetimi | Teknik borç incelemesi | Aylık |
| Güvenlik bildirim oranı | Bildirim kültürünün bir göstergesi olarak, çalışanların bildirdiği şüpheli olayların doğrulanmış güvenlik olaylarına oranı | dönemdeki çalışan bildirimleri / dönemde doğrulanan şüpheli olaylar, grup düzeyinde eğilimle birlikte | oran | Güvenlik e-posta kutusu, olay kayıtları | Bilgi güvenliği yönetimi; olay yönetimi | Engelleri açıkça dile getirme | Aylık |

Öncelik bantlarını ve politika pencerelerini kayıtta belirtin. Maruz kalma penceresi, zafiyetin varlığa uygulandığının bilindiği anda başlar; bu an, açıklanma ile varlığın etkilenen bileşeni çalıştırdığının bilindiği zamandan sonra gelenidir ve doğrulanmış düzeltmede ya da belgelenmiş, süreyle sınırlı bir azaltımda sona erer. Sınırlama süresi, kimsenin okumadığı ilk uyarıda değil, tespitte başlar. Test bulgularını ve yanlış pozitifleri ancak incelemeden sonra dışarıda bırakın. Güvenlik bildirim oranı grupları ve eğilimleri betimler, asla bireyleri değil.

## Öneriler

### Mülkünüzü ve maruz kalmanızı tanıyın

**1. Varlık ve bağımlılık kayıtlarından başlayın.** Taramalar, yamalama ve sahiplik, nelerin var olduğunu bilmeye bağlıdır. Her bulguyu bir varlığa, bir sahibe ve bir hizmete bağlayın ve tarama kapsamını kayda göre ölçün. Kapsam düşükse bulguları okumadan önce bunu düzeltin. Taranmamış bir varlık bir bilinmeyendir ve bu, bilinen bir zayıflıktan daha kötüdür.

**2. Önce [saldırı yüzeyini](https://en.wikipedia.org/wiki/Attack_surface) azaltın.** Gerekli olmayanı kaldırın: kullanılmayan hizmetler, açık portlar, eski hesaplar, unutulmuş ortamlar. Emekliye ayırdığınız her şey yamalamak zorunda olmadığınız bir şeydir. İnternete açık hizmetlerin ve uyuyan hesapların sayısını basit göstergeler olarak izleyin ve sahipleriyle birlikte inceleyin.

**3. Yazılım tedarik zincirinizi dahil edin.** Modern hizmetler birçok bileşene bağımlıdır. [Yazılım tedarik zinciri](https://en.wikipedia.org/wiki/Software_supply_chain), kütüphaneleri, derleme araçlarını, kapsayıcı imajlarını ve arkalarındaki tedarikçileri içerir. Zafiyetli bir bileşenin nerede kullanıldığını bulmak için daha önce anlatılan yazılım malzeme listelerini kullanın (bkz. Konu 7.2 “Yazılım varlığı ve lisans metrikleri”) ve bağımlılık bulgularını altyapı bulgularıyla aynı ölçümlere dahil edin.

### Önceliklendirin ve düzeltin

**4. Yalnızca önem puanına göre değil, bağlama göre sıralayın.** CVSS önem derecesini, bir istismarın kullanımda olduğunun bilinip bilinmediğiyle, zafiyetli bileşenin erişilebilir olup olmadığıyla ve varlığın önemiyle birleştirin. İlk etken için, istismar edildiği bilinen zafiyetlerin kamuya açık listeleri yardımcı olur. Sıralama kurallarını yazın, gözden geçirin ve yüksek önemli bir öğenin önceliği düşürüldüğünde gerekçeyi kaydedin.

**5. Politika pencerelerini banda göre belirleyin ve bunlara karşı raporlayın.** Her öncelik bandı için, giderme veya azaltma konusunda hedef bir süre üzerinde anlaşın. Pencere içindeki oranı, maruz kalmanın medyanını ve 85. yüzdeliğini ve en eski açık öğeyi raporlayın. Pencereler konuşma için hedeflerdir ve en eski öğeler dikkati hak eder, çünkü sürecin nerede başarısız olduğunu gösterirler (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**6. Yamalamayı sıradan, sık yapılan bir değişiklik olarak ele alın.** En güvenli yama süreci, sık çalışan ve sıkıcı olandır. Küçük, sık güncellemeler, büyük ve seyrek olanlara göre daha kolay test edilir ve geri alınır; otomatik işlem hatları bunları sürekli uygulayabilir. Riske dayalı onay için değişiklik yetkilendirme yaklaşımını kullanın ve acil düzeltmeler için bir acil durum yolu bulundurun (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

**7. İstisnaları görünür ve kısa ömürlü yapın.** Bazen bir düzeltme mümkün olmaz. İstisnayı bir gerekçe, bir telafi edici kontrol, bir sahip ve bir inceleme tarihiyle kaydedin ve istisnaların yaşını raporlayın. İnceleme tarihi olmayan istisnalar kalıcı hale gelir ve kalıcı istisnalar gerçek risk kaydına dönüşür.

### Yanıt verin ve öğrenin

**8. Olay müdahalesini uygulayın.** [Bilgisayar güvenliği olay yönetimi](https://en.wikipedia.org/wiki/Computer_security_incident_management); hazırlık, tespit, sınırlama, ortadan kaldırma, toparlanma ve öğrenilen dersleri kapsar. Tatbikatlarla prova yapın, sınırlama süresini tespitten itibaren kaydedin ve her önemli olayı suçlamasız biçimde inceleyin. Güvenlik olayı yönetiminin yapısı, büyük olay yönetiminin yapısına benzer (bkz. Konu 3.4 “Büyük olay metrikleri”).

**9. Yalnızca tespiti değil, sınırlamayı ölçün.** Tespit araçları uyarı üretir; değer, sonrasında olanda yatar. Doğrulanmış olayların sınırlanmasının ve onlardan toparlanmanın ne kadar sürdüğünü ve hangi oranının kendi izlemeniz tarafından bulunduğunu, hangi oranının dışarıdakilerce bildirildiğini izleyin. İçeriden tespit edilen olayların oranındaki artış, görünürlüğün iyileştiğinin işaretidir.

**10. Ramak kalalardan öğrenin.** Bildirilen ve engellenen bir kimlik avı e-postası ya da bir iş arkadaşının saldırgandan önce bulduğu bir zafiyet bedava bir derstir. Bunları bir olay gibi kaydedin ve inceleyin, bildiren kişiye teşekkür edin. Güvenlik bildirim oranı bu kültürün bir sağlık göstergesidir ve güvenle birlikte artmalıdır.

### Kültürü ve işlem hattını oluşturun

**11. Denetimleri geliştiricilerin çalıştığı yere koyun.** Derlemede bağımlılık ve statik analiz çalıştırın, çekme isteğinde geri bildirim verin ve derlemeleri yalnızca takımın engelleyici olarak kabul ettiği sorunlarda başarısız kılın. Hızlı ve ilgili geri bildirim düzeltilir. Düşük değerli bulgu seli ise görmezden gelinir. İşlem hattı bulgularının düzeltme süresini izleyin ve kuralları takımlarla birlikte ayarlayın (bkz. Konu 2.7 “Çekme isteği ve kod inceleme metrikleri”).

**12. Utandırmadan eğitin ve sınayın.** Simüle kimlik avı gibi farkındalık tatbikatları becerileri geliştirebilir; sonuçlar bireyleri adlandırmak ya da disipline etmek için kullanıldığında güveni de zedeleyebilir. Yalnızca toplulaştırılmış sonuçları raporlayın, kaç kişinin şüpheli iletileri bildirdiğine odaklanın ve amacı açıklayın. Bir tatbikat çalışanlara kandırılmış hissi veriyorsa onu değiştirin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşlenen koruma önlemi metriği veya uygulaması |
| --- | --- | --- |
| Maruz kalma penceresi | Bulguları doğrulamadan kapatmak; başlangıç tarihini değiştirmek; önem derecesini yeniden sınıflandırmak | Düzeltme yapan takımın dışındaki biri tarafından doğrulama adımı; kayıttaki başlangıç tarihi kuralı; önem derecesi değişiklik günlüğü |
| Yama uyumu | Yamalaması zor varlıkları kapsamın dışında bırakmak; sistem yeniden başlatılmadığı halde bir yamayı uygulanmış saymak | Kapsam değişikliklerinin günlüğe kaydedilmesi; yüklü sürümü kayıttan değil varlığın kendisinden doğrulamak |
| Gecikmiş kritik bulgular | Bulguları bölmek veya birleştirmek; önem derecesini düşürmek | Benzersiz zafiyet ve varlığa göre saymak; tüm önem derecesi değişikliklerini incelemek |
| Tarama kapsamı | Daha dar bir kümeyi taramak; kimlik doğrulaması başarısız olan bir taramayı saymak | Varlık kaydına karşı kapsam; tarama kalitesi (kimlik doğrulamalı, tam) |
| Sınırlama süresi | Saati daha geç başlatmak; sınırlamayı erken ilan etmek | Saat ilk tespit sinyalinde başlar; sınırlamayı kanıtla doğrulamak |
| Risk istisnası yaşı | İstisnaları otomatik yenilemek; yaşı düşürmek için istisnaları bölmek | İstisna yenilemelerini gerekçeyle incelemek; yeni kanıt olmadan yenilemeleri sınırlamak |
| Güvenlik bildirim oranı | Düşük değerli bildirimleri teşvik etmek; diğer rakamları iyileştirmek için bildirimleri caydırmak | Bildirimlerin kalitesi; yorumları okumak; insanların bildirimde kendilerini güvende hissedip hissetmediğine dair anket |

Sağlıklı bir okuma şudur: yüksek tarama kapsamı, kısa ve küçülen bir maruz kalma kuyruğu, inceleme tarihleri olan dürüst istisnalar, hızla sınırlanan ve daha sık içeriden bulunan olaylar ve şüpheli olayları korkmadan size anlatan çalışanlar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yanı | Zayıf yanı |
| --- | --- | --- |
| Yalnızca önem puanına dayalı önceliklendirme | Basit, tutarlı | Bağlamı yok sayar; çabayı yanlış yerlere yönlendirir |
| Bağlama dayalı önceliklendirme | Gerçek riske odaklanır | Veri ve muhakeme gerektirir |
| Sabit yama pencereleri | Net beklentiler | Riskli, aceleye gelmiş değişiklikleri zorlayabilir |
| Riske dayalı pencereler | Duruma uyar | Denetlemesi daha zor |
| Sık otomatik yamalama | Küçük değişiklikler, daha az maruz kalma | İyi testler ve geri alma gerektirir |
| Seyrek büyük yama döngüleri | Tanıdık | Daha uzun maruz kalma, değişiklik başına daha büyük risk |
| Kimlik avı simülasyonu | Farkındalık oluşturur | Kötüye kullanılırsa güveni aşındırabilir |
| Bildirim kültürüne odaklanma | Sorunları erken ortaya çıkarır | Doğrudan ölçmesi zor |

Düz yazıyla yanıt şudur: bağlama göre sıralayın, iyi geri almayla küçük adımlarla sık yamalayın, istisnaları son tarihlerle kaydedin ve bildirim kültürüne bir kontrol olarak yatırım yapın.

## Takımınızla tartışılacak sorular

**1. Taramalarımız mülkümüzün ne kadarını gerçekten görüyor?**
Taranan varlıkları varlık kaydıyla karşılaştırın. Neyin eksik olduğunu ve nedenini sorun. Kolaylaştırıcı, kapsayıcılar, uzak cihazlar veya üçüncü taraf sistemler gibi sistematik olarak taranmayan kategorileri aramalıdır. Bu çeyrekte kapatılacak bir açık üzerinde anlaşın.

**2. En eski açık kritik bulgumuz hangisi ve neden hâlâ açık?**
Ortalamaya değil, kuyruğa bakın. En eski birkaçının izini sürün: sahipleri kim, onları ne engelliyor, telafi edici kontrol nedir. Kolaylaştırıcı istisnanın kayıtlı olup olmadığını sormalıdır. En eskisinin engelini kimin kaldıracağı üzerinde anlaşın.

**3. Bir güvenlik düzeltmesi bir kesintiye en son ne zaman yol açtı ve sonrasında ne değişti?**
Bir örneği hatırlayın. Neden aceleye gelmiş bir düzeltme miydi yoksa eksik bir test miydi? Yamalamanın nasıl rutin ve güvenli hale getirileceğini tartışın. Yanıtı değişiklik ve yayın uygulamasına bağlayın.

**4. Bir iş arkadaşı bugün şüpheli bir e-posta bildirseydi ona ne olurdu?**
Bildirimden yanıta kadar gerçek yolu, bildirenin nasıl teşekkür edildiği de dahil, betimleyin. Bildirdiği ya da tıkladığı için birinin utandırılıp utandırılmadığını sorun. Konuşma güven üzerinedir. Bildirimi daha kolay ya da daha güvenli kılan küçük bir değişiklik üzerinde anlaşın.

**5. Güvenlik rakamlarımızdan hangisi, biz daha az güvenli hale gelirken yükselebilir?**
Ölçümleri listeleyin ve her birinin kapsamı daraltarak ya da yeniden etiketleyerek nasıl iyileştirilebileceğini düşünün. Her birine bir koruma önlemi atayın. Bu alıştırma, bir sonraki inceleme için kayıt girdisini oluşturur.

**6. Doğrulanmış bir olayı ne kadar hızlı sınırlayabiliriz ve bunu nereden biliyoruz?**
Son iki olayı gözden geçirin ve tespitten sınırlamaya kadar izini sürün. Gecikmeleri not edin. Hangi tatbikatları yaptığımızı sorun. Bir sonraki incelemeden önce birini yapmak üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları düzeltmelerin çoğunu yapar ve zayıflıkların birçoğunu getirir. Bağımlılıkları normal akışın parçası olarak güncel tutmalı, güvenlik bulgularını sahipleri ve tarihleri olan birikim listesi öğeleri olarak ele almalı ve hızlı, ilgili geri bildirim veren işlem hattı denetimleri kullanmalıdır. Açık önceliklere ve bunlara göre hareket edecek zamana ihtiyaç duyarlar ve endişelerini özgürce dile getirebilmelidirler.

### Hizmet ve operasyon takımları

Operasyon takımları tarayıcıları çalıştırır, yamaları uygular ve olaylara yanıt verir. Varlık bağlantılarını güncel tutmalı, kapsamı dürüstçe raporlamalı ve istisnaları son tarihlerle ele almalıdır. Ayrıca olay müdahalesini prova etmek için korunmuş zamana ve hatalar olduğunda suçlamasız bir kültüre ihtiyaç duyarlar.

### Liderlik ve yönetişim

Liderler risk iştahını belirler ve güvenliğin sürekli bir faaliyet olarak mı yoksa bir proje olarak mı finanse edileceğine karar verir. Toplamlar yerine maruz kalma pencerelerini ve en eski açık öğeleri istemeli, bildirim kültürünü korumalı ve görünürlük iyileştiğinde rakamların yükseleceğini kabul etmelidir. Yönetişim, istisnalar ve olaydan öğrenme için kanıt istemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar hem yararlanıcıdır hem de bir savunma hattıdır. Verilerini koruyan hizmetler ve açık, adil rehberlik isterler. Kendilerini etkileyen bir olay olduğunda hızla bilgilendirilmeli, sorun bildirdiklerinde saygıyla karşılanmalı ve işlerini gereğinden fazla zorlaştırmayan güvenlik önlemleri almalıdırlar (bkz. Konu 6.4 “Kullanıcı ve çalışan deneyimi”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir kredi birliği; çevrimiçi bankacılık, bir mobil uygulama ve şube sistemlerini küçük bir mühendislik takımı ve dış kaynaklı bir güvenlik operasyon hizmetiyle işletiyor. Aşağıdaki rakamlar açıklayıcıdır.

Yönetim kurulu bir güvenlik panosu istiyor. Güvenlik analistinin ilk taslağı, 4.200 açık ve azalan zafiyeti ve yüzde 96 yama uyumunu gösteriyor. Mühendislik başkanı tarama kapsamını soruyor. Analist, tarayıcı çıktısını varlık kaydıyla birleştirdiğinde, sunucuların yüzde 31'inin ve kapsayıcıların neredeyse tamamının, tarayıcı bir geçişten sonra kimlik bilgilerini kaybettiği için son 30 günde taranmadığını buluyor. Taranan varlıklar arasında kritik zafiyetler için medyan maruz kalma penceresi 9 gün, 85. yüzdelik ise 41 gün. En eski kritik bulgu 212 günlük; dört ay önce süresi dolmuş bir istisnası olan eski bir sistemde. Yüzde 96'lık yama uyumu yalnızca yama aracının raporladığı varlıklar üzerinden hesaplanmış.

Takım, mühendislik ve operasyonla birlikte dört değişiklik yapıyor. Tarama kapsamı panonun ilk satırı oluyor; hedef kayıttaki tüm varlıkların kapsanması ve tarama kimlik doğrulaması onarılıp izleniyor. Önceliklendirme, önem puanına istismar durumunu ve varlık önemini ekliyor; böylece 4.200 bulgu şu anda önemli olan yaklaşık 60 öğelik kısa bir listeye iniyor. Bağımlılık güncellemeleri, otomatik testlerle sık ve küçük değişiklikler olarak işlem hattına taşınıyor. İstisnalara bir sahip, bir telafi edici kontrol ve bir inceleme tarihi veriliyor; süresi dolan istisna risk komitesi tarafından inceleniyor. Güvenlik analisti ayrıca simüle kimlik avı sonuçlarının raporlanma biçimini değiştiriyor: yalnızca grup düzeyindeki bildirim oranı gösteriliyor ve analist bildirenlere bizzat teşekkür ediyor.

İki ay sonra tarama kapsamı yüzde 97, kritik öğeler için 85. yüzdelik maruz kalma penceresi 14 gün ve en eski kritik bulgu, incelemesine 60 gün kalmış, azaltılmış bir istisna. Şüpheli bir ödeme talebi e-postası bir şube çalışanı tarafından dakikalar içinde bildiriliyor ve olay iki saatten kısa sürede sınırlanıyor. Yönetim kurulu, açık zafiyet sayısının yıl sonuna kadar yarıya indirilmesini istiyor. Mühendislik başkanı, bir sayının daha az tarama yaparak düşebileceğini açıklayarak bunun yerine maruz kalma penceresinin ve gecikmiş kritik bulguların raporlanmasını öneriyor. Karar kaydediliyor ve yönetim kurulu yeni ölçümleri bir sonraki toplantıda incelemeyi kabul ediyor.

## Sektör mercekleri

**Girişim.** Genellikle özel bir güvenlik takımı yoktur; bu yüzden temel şeyleri işlem hattına yerleştirin: bağımlılık güncellemeleri, gizli bilgi taraması, çok faktörlü kimlik doğrulama ve en az ayrıcalık. Kısa bir kritik sistem listesi için maruz kalma penceresini izleyin ve basit bir olay planı bulundurun. Mülkünüzü tanımadan büyük bir araç takımı satın almaya direnin.

**Küçük işletme.** Dış kaynaklı hizmetler ve bulut araçları riskin çoğunu taşır. Bir envanter tutun, her yerde çok faktörlü kimlik doğrulamayı açın, sistemleri otomatik olarak güncel tutun ve olay anında kimi arayacağınızı bilin. Yama uyumunu ve yedekleri geri yükleme süresini ölçün. Hataları bildiren çalışanları utandırmaktan kaçının.

**Büyük kuruluş.** Ölçek, birçok takım ve araç arasında tutarlı veri gerektirir. Öncelik bantlarını ve pencereleri merkezi olarak tanımlayın, takımların kendi bulgularının sahibi olmasına izin verin, maruz kalmayı iş hizmetine göre raporlayın ve düzenli tatbikatlar yapın. Tedarikçilerin güvenlik takımlarıyla koordine olun ve devir tesliminleri test edin.

**Kamu sektörü.** Sektörler genellikle belirli zafiyetler için son tarihli zorunlu direktiflerle, resmi olay raporlama yükümlülükleriyle ve denetim gereksinimleriyle karşılaşır. Bunları tasarım girdisi olarak ele alın: direktif son tarihlerine uyumu izleyin, kanıtı saklayın ve olayları gerektiği gibi raporlarken bireylerin mahremiyetini koruyun (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler, belki zaten sahip olunan tarama ve izleme araçları; varlık bağlantılarını sürdürme zamanı; bulguları düzeltmek ve bağımlılıkları güncellemek için mühendislik zamanı; olay müdahalesi hazırlığı ve tatbikatları; ve eğitimdir. İşlem hattı denetimleri kurulum zamanına ve bir miktar derleme süresine mal olur. Dış kaynaklı izlemenin bir hizmet bedeli vardır.

Getiri, olayların daha düşük olasılığı ve daha düşük etkisi, daha kısa maruz kalma ve daha az aceleye gelmiş acil değişikliktir. Bu faydalar gerçektir ve nicelendirilmesi zordur, çünkü yaşanmayan olay bir kayıt bırakmaz. Kaynağını ve ilgisini izleyemiyorsanız sektör ortalaması ihlal maliyetlerini ya da olay sıklıklarını alıntılamaktan kaçının. Gerekçeyi kendi verinizden kurun: maruz kalma penceresi eğilimi, geç yamalamanın yol açtığı acil değişikliklerin sayısı, otomasyonun ortadan kaldırdığı elle yama işine harcanan zaman ve geçmiş olaylarınızın, personel zamanı ve müşteri etkisi dahil, maliyeti. Risk azaltımını, iş gerekçeleriyle ilgili önceki konunun önerdiği gibi, belirli senaryolar cinsinden betimleyin (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Zafiyet sayılarını raporlamak.** Taramalar bir şeyleri kaçırdığında sayılar düşer. Maruz kalma penceresini, gecikmiş öğeleri ve kapsamı raporlayın.
- **Yalnızca önem puanına göre önceliklendirmek.** Erişilebilirliği ve istismarı yok sayar. Bağlam ekleyin.
- **Taramayı hakikat saymak.** Kapsamı ve tarama kalitesini varlık kaydına karşı kontrol edin.
- **Kalıcı istisnalar.** Gizli riske dönüşürler. Her istisnaya bir sahip ve bir inceleme tarihi verin.
- **İnsanları hatalar için utandırmak.** Bildirimler durur. Suçlamasız inceleme kullanın ve sonuçları toplulaştırın.
- **Sonda bir kapı olarak güvenlik.** Teslimatı yavaşlatır ve geçici çözümleri davet eder. Denetimleri işlem hattına yerleştirin.
- **Büyük patlamalı yama döngüleri.** Riskli ve yavaştırlar. Küçük değişikliklerle sık yamalayın.
- **Tedarikçileri göz ardı etmek.** Onların zayıflıkları sizindir. Tedarikçilerin güvenlik yükümlülüklerini ve olaylarını izleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Görünürlük | Bazı sistemlerin ara sıra taranması | Ana sistemlerin düzenli taranması | Tarama kapsamı varlık kaydına karşı izlenir; bulgular sahiplere bağlanır | Kapsam, maruz kalma pencereleri ve istisnalar yönetilir ve eğilimleri izlenir | Bağımlılıklar dahil, takımlar ve tedarikçiler arasında paylaşılan görünüm |
| Önceliklendirme ve düzeltme | En yüksek sesli talebe göre düzeltme | Önem derecesine dayalı listeler | Bağlama dayalı sıralama; banda göre politika pencereleri; sık, küçük yamalar | Pencereler ve kuyruk incelenir; işlem hattı denetimleri takımlarla ayarlanır | İnsan gözetimiyle otomatik, riske dayalı giderme |
| Yanıt ve kültür | Geçici müdahale; suçlama | Temel plan, nadiren test edilir | Prova edilmiş plan; suçlamasız inceleme; bildirime değer verilir | Sınırlama süresi ve içeriden tespit oranı yönetilir; bildirim kültürü ölçülür | Tedarikçiler ve müşterilerle ortak tatbikatlar; öğrenme geniş çapta paylaşılır |

## Kontrol listesi

- [ ] Tarama kapsamı varlık kaydına karşı ölçülüyor.
- [ ] Bulgular bir varlığa, bir sahibe ve bir hizmete bağlanıyor.
- [ ] Öncelik bantları önem derecesini, istismarı, erişilebilirliği ve varlık önemini birleştiriyor.
- [ ] Banda göre politika pencereleri kararlaştırılmış; maruz kalma penceresi ve en eski açık öğe raporlanıyor.
- [ ] Bağımlılık ve işlem hattı denetimleri, kararlaştırılmış engelleyicilerle her derlemede çalışıyor.
- [ ] Yamalama, bir acil durum yoluyla birlikte sık, küçük, test edilmiş değişiklikler olarak yürüyor.
- [ ] İstisnaların bir sahibi, bir telafi edici kontrolü ve bir inceleme tarihi var.
- [ ] Olay müdahalesi prova ediliyor ve sınırlama süresi tespitten itibaren ölçülüyor.
- [ ] İnsan davranışı verileri yalnızca toplulaştırılmış olarak raporlanıyor ve bildirimlere teşekkür ediliyor.
- [ ] Tedarikçilerin güvenlik yükümlülükleri ve olayları izleniyor.

## Yapay zekâ istemleri

**Bir zafiyet önceliklendirme kuralını inceleyin.**

```text
Zafiyetleri önceliklendirmek için mevcut kuralımız şu: [açıklayın]. Veri
alanlarımız şunları içeriyor: [listeleyin, örneğin önem puanı, istismar
durumu, varlık önemi, internete maruz kalma]. Kuralı kör noktalar ve
manipüle edilme yolları açısından inceleyin ve net bantlar ile politika
pencereleri içeren, bağlama dayalı bir sıralama önerin. Belirli sayıları
sektör standardı olarak belirtmeyin. Varsayımlarınızı ve bir güvenlik
uzmanının neyi doğrulaması gerektiğini listeleyin.
```

**Tarama kapsamını kontrol edin.**

```text
Aşağıda, varlık kaydımızın sınıflara göre bir özeti ve tarayıcımızın son
[aralık] içinde gördüğü varlıklar yer alıyor: [sayıları veya arındırılmış
listeleri yapıştırın]. Kapsamı düşük sınıfları, boşlukların olası nedenlerini
ve her nedeni doğrulamak için en hızlı kontrolleri belirleyin. Başarısız veya
kısmi bir taramanın başarı gibi görünmemesi için kapsamın nasıl
raporlanacağını önerin. Varsayımlarınızı listeleyin.
```

**Bir masa başı tatbikatı planlayın.**

```text
[kuruluş türü] için şu senaryo üzerine 90 dakikalık bir masa başı tatbikatı
tasarlayın: [açıklayın, örneğin ele geçirilmiş bir tedarikçi kimlik bilgisi].
Roller, enjekte edilecek gelişmelerin bir zaman çizelgesi, tetiklenecek
kararlar, kaydedilecekler (tespit ve sınırlama süresi dahil) ve suçlamasız
bir değerlendirme toplantısı için sorular ekleyin. Gerçek isim veya sistem
eklemeyin. Varsayımlarınızı ve bizim bağlamımıza uyarlanacakları listeleyin.
```

**Bildirilen bir hata için suçlamasız bir ileti yazın.**

```text
Bir iş arkadaşı şunu yaptığını bildirdi: [açıklayın, örneğin bir kimlik avı
e-postasındaki bağlantıya tıkladı]. Güvenlik takımından, onlara teşekkür
eden, ne yapacağımızı açıklayan ve ihtiyaç duyduğumuz ayrıntıları isteyen
kısa ve nazik bir yanıt taslağı hazırlayın. Ardından haftalık güncelleme için,
kimsenin adını anmadan dersi paylaşan toplulaştırılmış bir not taslağı
hazırlayın. Varsayımlarınızı ve gözden geçirmem gereken üslup tercihlerini
listeleyin.
```

## Yapay zekâ becerileri

- [Çevik ITIL Metrikleri becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir güvenlik veya zafiyet metriği için eşlenen koruma önlemini bulmak üzere kullanın.
- [Çevik ITIL Metrikleri bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir güvenlik metriği girdisinin manipülasyon yöntemini, koruma önlemini ve gizlilik kurallarını taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Ham bulgu sayılarını değil, maruz kalma süresini, en eski açık öğeleri ve tarama kapsamını ölçün.
- Bağlama göre önceliklendirin: önem derecesi, istismar, erişilebilirlik ve varlık önemi.
- Sık sık, küçük ve test edilmiş değişikliklerle yamalayın ve her istisnaya bir sahip ile bir inceleme tarihi verin.
- Olayları hızla sınırlayın, suçlamasız öğrenin ve içeriden tespiti izleyin.
- Bildirim kültürünü bir kontrol olarak ele alın: bildirenlere teşekkür edin ve bireyleri asla sıralamayın.
- Güvenlik denetimlerini işlem hattına yerleştirin; böylece güvenli seçimler kolay olanlar olsun.

## Kaynaklar ve ileri okuma

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
