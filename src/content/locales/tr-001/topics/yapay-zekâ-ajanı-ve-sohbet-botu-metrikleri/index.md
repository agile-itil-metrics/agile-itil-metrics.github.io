# Yapay zekâ ajanı ve sohbet botu metrikleri

**Konuşmalı bir asistan ancak kullanıcının sorunu çözüldüğünde ve çözülmüş kaldığında yardımcı olmuştur. Bu nedenle doğrulanmış çözümü, geri dönüşleri, bir insana devrin kalitesini ve yanlış eylemlerin zararını ölçün ve bir botu insanları yardımdan uzak tutmak için asla ödüllendirmeyin.**

## Genel bakış ve motivasyon

Birçok kurum artık kullanıcılarla hizmet masası arasına konuşmalı bir asistan koyuyor ve bazıları yapay zekâ ajanlarına eylemde bulunma yeteneği veriyor: parola sıfırlamak, ekipman sipariş etmek, bir hizmeti yeniden başlatmak, bir yapılandırmayı değiştirmek. [Sohbet botu](https://en.wikipedia.org/wiki/Chatbot), bir konuşma yürüten yazılım uygulamasıdır; [sanal asistan](https://en.wikipedia.org/wiki/Virtual_assistant) ise buna kullanıcı adına görev yerine getirme yeteneğini ekler. [Akıllı ajan](https://en.wikipedia.org/wiki/Intelligent_agent) fikri daha genel olarak, bir ortamı algılayan ve hedeflere yönelik eylemlerde bulunan bir sistemdir. Modern dil modelleri bu sistemleri, kural tabanlı öncüllerinden çok daha fazla açık sohbet yapabilir kılar; ilk konuşma programı olan Joseph Weizenbaum'un 1960'ların ELIZA'sı ise insanların, yalnızca makul yanıtlar üreten bir makineye ne kadar kolay kavrayış atfettiğini zaten göstermişti.

Çekicilik açıktır. Kullanıcılar beklemeden, her saatte yardım alır. Takımlar rutin taleplere daha az zaman harcar. [Self servis](https://en.wikipedia.org/wiki/Self-service) uzun zamandır ITSM'nin bir hedefidir ve çözümün daha erken ve daha ucuz noktalara kaydırılması olan shift-left, hizmet masasının temel bir fikridir (bkz. Konu 3.7 “Self servis ve otomasyon metrikleri”). Ölçüm sorunu, bariz sayıların yanlış şeyleri ödüllendirmesidir. Bir konuşmayı sona erdiren bot, kullanıcı yardım aldı da vazgeçti de, o konuşmayı “kapsamış” sayılır. Hiçbir zaman bir insan sunmayan bot, kapsamayı azamiye çıkarır. Kendinden emin biçimde yanlış yanıt veren bot, günler sonra öfkeli bir temas olarak görünen sessiz bir başarısızlık üretir.

İki tür sistem farklı ölçütler gerektirir.

- **Konuşmalı asistanlar** soruları yanıtlar, kullanıcılara rehberlik eder ve bilgi toplar. Riskleri yanlış ya da yararsız yanıtlar ve kullanıcıları döngülere hapsetmektir. Ölçütler çözüme, doğruluğa ve bir insana giden yola odaklanır.
- **Eylemde bulunan ajanlar** dünyadaki şeyleri değiştirir: hesapları, sistemleri, biletleri, parayı. Riskleri gerçek sonuçları olan yanlış bir eylemdir. Ölçütler eylemlerin doğruluğuna, geri alınabilirliğe, izin sınırlarına ve denetim izlerine odaklanır. Bu kullanımlar daha güçlü yönetişim ve çoğu kez sonuçları ağır adımlar için insan onayı gerektirir (bkz. Konu 10.5 “Yapay zekâ yönetişimi ve risk metrikleri”).

Birkaç tasarım meselesi neyi ölçeceğinizi şekillendirir.

- **Kullanıcının kiminle konuştuğu konusunda dürüstlük.** Birçok yargı bölgesinde, bir yapay zekâ sistemiyle etkileşime girildiğinde insanlara bunu bildirme yükümlülükleri vardır veya geliştirilmektedir; Ekim 2026 itibarıyla bu kurallar evrilmektedir, bu yüzden size neyin uygulandığını denetleyin. İyi uygulama, her hâlükârda bunu açıkça söylemektir.
- **Bir çıkış yolu.** Kullanıcılar bir insana güçlük çekmeden ulaşabilmelidir. Bir insana giden yolu gizleyen bot, bir [karanlık örüntüdür (dark pattern)](https://en.wikipedia.org/wiki/Dark_pattern); yani kullanıcıları seçmeyecekleri sonuçlara kandıran ya da hapseden bir tasarım.
- **Erişilebilirlik.** Konuşmalı arayüzler yardımcı teknoloji kullanan kişiler, sınırlı dil yetisine sahip olanlar ve başka bir dile ya da kanala ihtiyaç duyanlar için çalışmalıdır.
- **Otomatik kararlar.** Bir asistanın çıktısı bir kişinin haklarını ya da erişimini etkilediğinde [otomatik karar alma](https://en.wikipedia.org/wiki/Automated_decision-making) konusu ve çevresindeki yükümlülükler geçerlidir. Bu tür kararları insanlarda ya da güçlü güvencelerle tutun.

[Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi burada çarpıcıdır: kapsama ya da yönlendirme (deflection) hedefse, bunu karşılamanın en ucuz yolu insana ulaşmayı zorlaştırmaktır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Aşağıdaki ölçütler çözümü ve kullanıcı sonucunu öne koyar.

## Temel ilkeler

- **Ölçü, kapsama değil çözümdür.** Sona ermiş bir konuşma, çözülmüş bir sorun değildir.
- **Doğrulayın ve geri dönüşü denetleyin.** Bir teması yalnızca kullanıcı onayladığında ya da geri dönmediğinde çözülmüş sayın.
- **Her zaman bir insana giden bir yol sağlayın.** Yolu kolay, hızlı ve görünür kılın ve bağlamı taşıyın.
- **Sistem konusunda dürüst olun.** Bunun bir yapay zekâ olduğunu, neler yapabildiğini ve neler yapamadığını söyleyin.
- **Ajanların yapabileceklerini sınırlayın.** En az ayrıcalığı verin, sonuçları ağır eylemler için onay isteyin ve bir denetim izi tutun.
- **Yanıtların kalitesini örnekleme yoluyla ölçün.** Akıcı yanıtlar yanlış olabilir.
- **Kullanıcıları ve parçaları toplayan çalışanları dinleyin.** Ölçütlerin kaçırdığını onlar görür.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Doğrulanmış çözüm oranı | Kullanıcının sorunun çözüldüğünü onayladığı ya da belirli bir süre içinde geri dönmediği bot konuşmalarının payı | onaylanmış çözümü olan ya da 7 gün içinde geri dönüş teması olmayan konuşmalar / çözülebilir bir niyetle başlayan konuşmalar | yüzde | Konuşma günlükleri, kullanıcı onayı, bilet ve temas verileri | Hizmet masası; bilgi yönetimi | Kullanıcı için çalışan sonuç | Haftalık |
| Geri dönüş teması oranı | Bot tarafından sonlandırılan konuşmalardan sonra, aynı sorunla ilgili herhangi bir kanaldan gelen temasın payı | 7 gün içinde ilgili bir temasın izlediği konuşmalar / devirsiz sonlanan konuşmalar | yüzde | Bilet ve temas kayıtlarıyla birleştirilmiş konuşma günlükleri | Hizmet masası; olay yönetimi | Kaçan kusurlar | Haftalık |
| Devir bağlamı bütünlüğü | Kişinin, kullanıcıdan tekrar etmesini istemeden ihtiyaç duyduğu bilgiye sahip olduğu, bir insana yapılan devirlerin payı | alan ajan tarafından eksiksiz bulunan örneklenmiş devirler / örneklenen devirler | yüzde | Örneklenmiş devirler, ajan geri bildirimi | Hizmet masası; bilgi yönetimi | Sınır boyunca sorunsuz iş birliği | Aylık |
| İnsana ulaşma süresi | Kullanıcının bir insan istemesinden ya da botun devretmeye karar vermesinden, bir kişinin devralmasına kadar geçen süre | dakika cinsinden medyan ve 85. yüzdelik | dakika | Konuşma günlükleri, kuyruk verileri | Hizmet masası; olay yönetimi | Kullanıcının yardıma ihtiyacı olduğunda duyarlılık | Haftalık |
| Yanıt doğruluğu | Nitelikli bir inceleyici tarafından doğru, eksiksiz ve güvenli bulunan, örneklenmiş bot yanıtlarının payı | doğru bulunan yanıtlar / örneklenen yanıtlar | yüzde | Örneklenmiş inceleme | Bilgi yönetimi; kalite güvencesi | Bir yanıt için bitti tanımı | Aylık |
| Bot memnuniyeti ve çaba | Kullanıcının bir konuşmadan sonraki memnuniyet ve kolaylık derecelendirmesi, yorumlarla birlikte | olumlu derecelendirmeler / derecelendirmeler; ortalama çaba derecelendirmesi | yüzde; ölçek puanı | Konuşma sonrası kısa anket | Hizmet masası; müşteri deneyimi | Çalışan yazılım üzerine geri bildirim | Haftalık |
| Ajan eylemi geri alma oranı | Bir yapay zekâ ajanı tarafından yapılan eylemlerden düzeltilmesi, geri alınması veya yükseltilmesi gerekenlerin payı | geri alınan veya düzeltilen eylemler / yapılan eylemler, eylem türüne ve risk sınıfına göre | yüzde | Eylem denetim günlüğü, değişiklik kayıtları | Değişiklik yetkilendirme; olay yönetimi | Yeniden iş ve geri alma | Haftalık |

Botun ele aldığı niyetleri tanımlayın ve her zaman devretmesi gerekenleri kapsama dışı bırakın. Doğrulanmış çözüm, bir konuşmayı yalnızca sorun kapsam içindeyse ve kullanıcı ya onayladıysa ya da geri dönüş teması göstermediyse sayar. İnsana ulaşma süresi, bir menünün sonunda değil, kullanıcının isteğinde başlar. Yanıt doğruluğu, bilgi tabanına ve politikaya göre, botu inşa etmemiş bir kişi tarafından değerlendirilir. Ajan eylemi geri alma, eylem türüne ve risk sınıfına göre bölünür ve her zararlı eylem ayrıca bir olay olarak raporlanır.

## Öneriler

### Başarıyı çözüm olarak tanımlayın

**1. Niyetleri ve istediğiniz sonucu tanımlayın.** Asistanın ele alması gereken sorunları, örneğin parola sıfırlama, erişim durumu ve nasıl yapılır soruları ile her biri için sonucu listeleyin: yanıtlandı, yapıldı ya da devredildi. Hangi niyetlerin her zaman bir insana gitmesi gerektiğine karar verin: şikâyetler, sıkıntı, güvenlik, yasal haklar veya para içeren her şey. Her şeyi ele almaya çalışan bir bot, uçlarda kötü biçimde başarısız olur.

**2. Doğrulanmış çözümü ve geri dönüşleri ölçün.** Kullanıcılara sonunda sorunlarının çözülüp çözülmediğini sorun ve ayrıca sonrasında ilgili temaslara bakın. Hiçbiri tek başına yeterli değildir: vazgeçen kullanıcılar yanıt vermez ve yardım alanlardan bazıları yine arar. Birlikte gerçek çözüme yaklaşırlar. Geri dönüş teması oranını, her kapsama rakamı için ana koruma önlemi olarak ele alın (bkz. Konu 3.1 “Hizmet masası metrikleri”).

**3. Kapsamayı hedef olarak kullanmaktan kaçının.** Kapsamayı yalnızca betimleyici bir rakam olarak ve her zaman doğrulanmış çözüm, geri dönüşler ve memnuniyetin yanında raporlayın. Artan geri dönüşlerle birlikte artan bir kapsama, botun insanları geri çevirdiği anlamına gelir. Bir kapsama hedefi koymayın ve kimsenin performansını bununla ilişkilendirmeyin.

### Bir insana giden yolu kolay ve iyi yapın

**4. Kullanıcıların her noktada bir insana ulaşmasına izin verin.** Bir insan istemek için açık ve sade bir yol sağlayın ve ona saygı gösterin. İnsana ulaşma süresini ve kullanıcıların birden fazla kez istediği konuşmaların payını ölçün. Yolu düzenli olarak kendiniz sınayın. Bir kişinin bulunmadığı yerde, ne zaman bulunacağını söyleyin ve geri arama sunun.

**5. Bağlamla devredin.** Bot bir konuşmayı bir kişiye devrettiğinde, kullanıcının kendini tekrar etmemesi için özeti, nelerin denendiğini, kullanıcının sözlerini ve ilgili hesap ayrıntılarını ekleyin. Alan ajanlardan devrin eksiksiz olup olmadığını derecelendirmelerini isteyin ve sonuçları örnekleyin. Kötü devirler kullanıcıların hem bota hem hizmete daha az güvenmesine yol açar (bkz. Konu 9.3 “İş birliği ve devir teslim metrikleri”).

**6. Tüm kullanıcılar için tasarlayın.** Asistanı yardımcı teknoloji kullanan, başka dillerde yazan, aceleci ya da sıkıntıda olan ve teknolojiyle rahat olmayan kullanıcılarla sınayın. Başka kanallar sunun. Güvenli ve yasal olduğu yerde doğrulanmış çözümü ve memnuniyeti kullanıcı grubuna göre ölçün. Ortalamalar, botun en çok başarısız olduğu kişileri gizler.

### Söylediğinin ve yaptığının kalitesini denetleyin

**7. Yanıtları doğruluk ve güvenlik için örnekleyin.** Her ay rastgele bir konuşma örneği çekin ve nitelikli bir kişinin yanıtları değerlendirmesini sağlayın: doğru, eksiksiz, güvenli ve belirsizlik konusunda dürüst. Hataları türüne göre kaydedin: güncel olmayan, uydurulmuş, politika dışı ya da yanlış anlaşılmış. Hataları bilgi tabanına ve yapılandırmaya aktarın. Hassas konular ve asistanı kapsamının dışına itme girişimleri için hedefli testler ekleyin.

**8. Bilgiyi güncel tutun.** Bir asistan yalnızca dayandığı içerik ve araçlar kadar iyidir. Yanıt hatalarını bilgi makalelerine bağlayın ve kullandığı bilginin güncelliğini ölçün (bkz. Konu 3.6 “Bilgi yönetimi metrikleri”). Sistemin bir bilgi tabanından getirme (retrieval) kullandığı yerde, kaynaklarını belirttiğine ve kaynakların doğru olduğuna dair bir denetim ekleyin.

**9. Kullanıcılara karşı dürüst olun.** Başlangıçta bir yapay zekâyla konuştuklarını ve neler yapabildiğini ve yapamadığını belirtin. Aksini düşündürecek bir insan adı ya da tavrı vermeyin. Emin olmadığı yerde bunu söylemeli ve bir kişi sunmalıdır. Bildirim konusunda geçerli yasayı denetleyin.

### Eylemde bulunan ajanları yönetin

**10. Eylemleri riske göre sınıflandırın ve izinleri buna uygun ayarlayın.** Bir ajanın yapabileceği her eylem için risk sınıfını tanımlayın: bilgilendirici, geri alınabilir ve düşük etkili ya da sonuçları ağır. Gereken en az ayrıcalığı verin. Sonuçları ağır eylemler için insan onayı isteyin. Her eylemin nedeniyle, kullanıcısıyla ve sonucuyla bir denetim izini tutun. Bu kontroller daha önceki bölümlerdeki değişiklik ve güvenlik ölçütleriyle bağlantılıdır (bkz. Konu 8.1 “Güvenlik olayı ve zafiyet metrikleri” ve Konu 8.2 “Risk ve kontrol metrikleri”).

**11. Eylem doğruluğunu ve geri alınabilirliği ölçün.** Geri alma oranını eylem türüne göre izleyin ve her zararlı eylemi suçlamadan bir olay olarak inceleyin. Ajanları erişim vermeden önce güvenli bir ortamda sınayın ve model ya da araçlar değiştiğinde yeniden sınayın. Yeni bir model sürümü davranışı değiştirebilir; bu yüzden onu kontrol gerektiren bir değişiklik olarak ele alın (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

**12. Parçaları toplayan insanları dinleyin.** Hizmet masası çalışanları bot başarısızlıklarının sonuçlarını görür: öfkeli kullanıcılar, tekrar temaslar ve temizlenecek dağınıklıklar. Onlara botun neyi yanlış yaptığını ve neyi zorlaştırdığını düzenli olarak sorun. Onların geri bildirimi ve kullanıcıların yorumları hiçbir ölçütün tam olarak yakalayamadığı kanıtlardır ve değişikliklerin bir sonraki turunu şekillendirmelidir.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Doğrulanmış çözüm oranı | Konuşmanın her sonunu çözülmüş saymak; yönlendirici onay soruları sormak | Onayı tarafsız tanımlayın; geri dönüş teması oranı; konuşmaları örnekleyin |
| Geri dönüş teması oranı | Yalnızca tek bir kanaldan ölçmek; kısa pencereler | Tüm kanalları birleştirin; denetim olarak daha uzun bir pencere kullanın; geri dönüşleri örnekleyin |
| Devir bağlamı bütünlüğü | Özet yerine uzun bir döküm iletmek; kolay devirleri örneklemek | Alan ajan derecelendirmesi; rastgele örnek; devirden sonra çözüme kadar süre |
| İnsana ulaşma süresi | Saati menülerden sonra başlatmak; kuyruk onayını devralma saymak | Saat istekte başlar; devralma, bir kişinin konuşmada etkin olması demektir |
| Yanıt doğruluğu | Kolay konuşmaları örneklemek; yumuşak inceleyiciler | Bağımsız inceleyicilerce rastgele örnek; saldırgan test senaryoları |
| Bot memnuniyeti ve çaba | Yalnızca tamamlanan konuşmaları anketlemek; anketi yalnızca mutlu kullanıcıların ulaşacağı yere koymak | Terk edilen konuşmaları da anketleyin; yanıt oranı ve dağılım; yorumları okuyun |
| Ajan eylemi geri alma oranı | Geri almaları günlüğe kaydetmemek; düzeltmeleri yeni iş olarak yeniden sınıflandırmak | Kurcalamaya dayanıklı denetim günlüğü; geri almaları eylemlere bağlayın; olay incelemesi |

Sağlıklı bir okuma şöyledir: düşük geri dönüşlerle yüksek doğrulanmış çözüm, eksiksiz devirlerle bir insana kolay ve hızlı yollar, örneklenmiş incelemede doğru yanıtlar, gruplar arasında memnun kullanıcılar ve eylemleri nadiren geri alınması gereken ve görünmeden asla zarar vermeyen ajanlar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Kural tabanlı bot | Öngörülebilir, sınaması kolay | Dar; kırılgan; senaryoların dışında sinir bozucu |
| Dil modeli asistanı | Esnek, akıcı | Kendinden emin biçimde yanlış olabilir; sınaması daha zor |
| Onaylı bilgiden getirme | Dayanaklı yanıtlar, düzeltmesi daha kolay | İçerik kalitesine bağlı |
| Açık üretim | Geniş kapsama | Uydurma riski daha yüksek |
| Eylemler için insan onayı | Güvenlik | Daha yavaş; inceleyici yorgunluğu |
| Özerk eylemler | Hız | Yanlış olduğunda daha büyük etki alanı |
| Katı kapsam ve erken devir | Güvenli | Daha düşük kapsama |
| Geniş kapsam | Daha yüksek kapsama | Uçlarda daha fazla hata |

Düzyazı yanıt şudur: dar ve iyi anlaşılmış niyetlerle başlayın, yanıtları onaylı bilgiye dayandırın, insan yardımını kolaylaştırın ve kapsamı ve özerkliği yalnızca ölçütler gerekçelendirdikçe genişletin.

## Takımınızla tartışılacak sorular

**1. Bir kullanıcı şu anda bir insan isteseydi bu kaç adım alırdı ve bunu kendimiz denedik mi?**
Yolu birlikte sınayın. Adımları ve beklemeyi sayın. Kolaylaştırıcı her engeli not etmelidir. Yolun kısa olması için değişiklikler üzerinde anlaşın ve insana ulaşma süresini ölçün.

**2. Botumuzun sonlandırdığı konuşmaların ne kadarı gerçekten sorunu çözdü?**
Bir örnek için geri dönüşleri ve onayları denetleyin. Kapsama rakamıyla karşılaştırın. Aradaki farkı tartışın. Liderlerin hangi rakamı görmesi gerektiğine karar verin.

**3. Botumuz neyi yanlış yapıyor ve bunu kim öğreniyor?**
Hizmet masasına sorun. Örneklenmiş konuşmaları inceleyin. Örüntüler arayın: güncel olmayan makaleler, belirsiz sorular, hassas konular. Hatalardan düzeltmelere, bir sahibi olan bir yol üzerinde anlaşın.

**4. Ajan hangi eylemleri kendi başına yapabilir ve hangileri için bir kişi gerekir?**
Eylemleri risk sınıfları ve izinleriyle listeleyin. Her birinin gerçekçi en kötü başarısızlığının ne olacağını sorun. Onay kuralları ve denetim izi ile zararlı vakaları kimin inceleyeceği üzerinde anlaşın.

**5. Bot kimi sessizce yüzüstü bırakıyor?**
Aceleci, sıkıntıda, erişilebilirlik ihtiyacı olan ya da sınırlı dil yetisine sahip kullanıcıları düşünün. Güvenli olduğu yerde grup bazında çözüme ve memnuniyete bakın. Bu tür kullanıcılarla bir test üzerinde anlaşın.

**6. Botu kapatmamıza ya da kapsamını daraltmamıza ne yol açardı?**
Kanıtı tanımlayın: belirli bir düzeyin üzerinde geri dönüşler, zararlı eylemler, bir standardın altında doğruluk. Kimin karar verebileceğine karar verin. Önceden bir durdurma kuralına sahip olmak harekete geçmeyi kolaylaştırır.

## Dört bakış açısı

### Ürün ve teslimat takımları

Asistanı inşa eden takımlar onun kalitesine sahiptir. Niyetleri tanımlamalı, yanıtları onaylı bilgiye dayandırmalı, saldırgan senaryolarla sınamalı, değişiklikleri kontrol altında yayımlamalı ve başarısızlıkları okumalıdır. Kullanıcıları hapsetmeyi ödüllendiren kapsama hedeflerine karşı çıkmalıdırlar.

### Hizmet ve operasyon takımları

Hizmet masası çalışanları asistanla çalışır ve başarısızlıklarını devralır. Devirleri derecelendirmeli, yanlış yanıtları işaretlemeli, bilgiyi güncel tutmalı ve istendiğinde hızla devralmalıdır. Asistanın kullanıcılara yardımcı olup olmadığının en iyi yargıçlarıdır ve iş yükleri ile stresleri tablonun bir parçasıdır.

### Liderlik ve yönetişim

Liderler asistana sponsor olur ve tasarruf ister. Kapsamanın yanında doğrulanmış çözümü, geri dönüşleri ve memnuniyeti istemeli, bir durdurma kuralı şart koşmalı, insana giden yolu finanse etmeli ve ajanlar için risk sınıflarını gözden geçirmelidir. Yönetişim; bildirimi, erişilebilirliği ve yasal yükümlülükleri denetlemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar az çabayla ve hileye başvurulmadan yardım ister. Bir yapay zekâyla konuştuklarını bilmeli, bir insana kolayca ulaşabilmeli ve sistemin iyi bir neden olmadan eylemde bulunmayacağına güvenebilmelidir. Deneyimleri, özellikle başarısızlık deneyimleri, asistanın sahip olmaya değer olup olmadığının birincil kanıtıdır.

## Uygulamada: çevik bir ITIL örneği

Ulusal bir üniversite, ayda yaklaşık 30.000 temas ele alan bir öğrenci ve personel hizmet masası işletiyor. Yaygın talepler için bir sohbet botu başlatıyor ve tedarikçi panosu yüzde 74 kapsama oranı raporluyor. Aşağıdaki sayılar açıklayıcıdır.

Öğrenci hizmetleri başkanı denetler. Son aydaki bot tarafından sonlandırılan konuşmaların yüzde 29'unu, yedi gün içinde e-posta ya da telefonla ilgili bir temas izlemiştir. Kullanıcının onayı ve geri dönüşün yokluğu kullanılarak hesaplanan doğrulanmış çözüm, kapsam içi niyetler için yüzde 49'dur. Bir insan istedikten sonra ona ulaşmanın medyan süresi 6 dakikadır ve 85. yüzdelik 22'dir; bunun bir nedeni yolun üç menü adımı gerektirmesidir. İki deneyimli danışman tarafından incelenen 100 konuşmalık bir örnek, 88 yanıtın doğru, 12'sinin kusurlu olduğunu bulur: 7'si güncel olmayan, 3'ü bir son tarih hakkında ayrıntıları uyduran ve 2'si zor durumdaki bir öğrenciyi içeren hassas vakaları yanlış ele alan yanıtlardır. Alan ajanlar devirlerin yüzde 54'ünü eksiksiz olarak derecelendirir. Bota ilişkin memnuniyet, ekran okuyucu kullanan öğrenciler ve İngilizce dışındaki dillerde yazanlar için daha düşüktür. Hizmet masası takımı, “sohbet botu yardımcı olamadı” diye başlayan çok sayıda temas bildirir.

Öğrenci hizmetleri başkanı takımla birlikte değişiklikler yapar. Refah, şikâyetler ve harçlara ilişkin anlaşmazlıklar gibi hassas niyetler doğrudan bir kişiye yönlendirilir ve bot bunu söyler. Her ekranda bir “bir kişiyle konuş” seçeneği görünür ve insana ulaşma süresi izlenir; personelin bulunduğu saatlerde birkaç dakika içinde yanıt verme hedefi konur. Devirler otomatik bir özet ve kullanıcının kendi sözlerini içerir. Bilgi tabanı sahipleri güncel olmayan makaleleri düzeltir ve aylık bir örnek inceleme onları besler. Asistan yalnızca onaylı içerikten yanıt vermekle sınırlandırılır ve bilmediğinde bunu söylemesi zorunlu kılınır. İkinci bir pilot, bir ajanın kimlik doğrulamasından sonra parolaları sıfırlamasına izin verir; her eylem günlüğe kaydedilir, bir zaman sınırı içinde geri alınabilir ve geri alma oranı izlenir. Pano, kapsamanın yerine doğrulanmış çözümü, geri dönüş teması oranını, doğruluğu, insana ulaşma süresini ve gruba göre memnuniyeti koyar.

Üç ay sonra doğrulanmış çözüm kapsam içi niyetler için yüzde 66'ya ulaşır, geri dönüş teması oranı yüzde 14'e düşer, insana ulaşmanın medyan süresi 2 dakikaya iner, eksiksiz devirlerin payı yüzde 86'ya çıkar ve örneklenmiş yanıtlardaki doğruluk yüzde 95'e yükselir; örnekte yanlış ele alınmış hassas vaka yoktur. Parola pilotunda ajan eylemi geri alma oranı yüzde 1,2'dir. Bir rektörlük ofisi yüzde 85'lik bir kapsama hedefi ister. Öğrenci hizmetleri başkanı, daha yüksek bir kapsama hedefinin bir insana giden yolu gizlemeyi ödüllendireceğini açıklar ve ölçütler olarak doğrulanmış çözümü ve geri dönüşleri, bir sonraki neyin genişletileceğine dair bir incelemeyle birlikte önerir. Karar kaydedilir.

## Sektör mercekleri

**Girişim (startup).** Bir asistan desteği düşük maliyetle karşılayabilir ve tek bir kötü yanıt bir müşteriye mal olabilir. Kapsamı dar tutun, yanıtları dokümantasyonunuza dayandırın, insan seçeneğini belirgin kılın ve her yükseltmeyi okuyun. Bir ajanın hesaplar ya da ödemeler üzerinde eylemde bulunmasına izin verirken dikkatli olun.

**Küçük işletme.** Bir web sitesindeki hazır asistan yaygın soruları ele alabilir. Onu bir müşteri gibi sınayın, bir telefon numarasının ya da e-postanın kolayca bulunduğundan emin olun ve konuşmaları haftalık gözden geçirin. Tedarikçinin verilerle ne yaptığını denetleyin.

**Kurumsal.** Ölçek hem tasarruf hem risk sunar. Risk sınıfları, onaylar ve denetim için bir yönetişim süreci yürütün, niyete ve kullanıcı grubuna göre ölçün ve her kanalda bir kişiye ulaşılabilir olduğundan emin olun. Destek, güvenlik, hukuk ve erişilebilirlik arasında koordine olun.

**Hükûmet ve kamu sektörü.** Vatandaşların alternatif bir sağlayıcısı olmayabilir ve erişilebilirlik, dil erişimi ve adil muamele yükümlülükleri güçlü biçimde geçerlidir. Bir kişiyi ulaşılabilir tutun, haklara ilişkin otomatik kararlardan güvence olmadan kaçının, asistanın nasıl kullanıldığını yayımlayın ve bildirim ile idare hukuku yükümlülüklerini denetleyin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler; lisanslar veya kullanım ücretleri, entegrasyon, içerik hazırlığı, süregelen örnekleme ve inceleme, bilgi tabanının bakımı, test ve yönetişimdir. İyi bir insan yolu da para tutar, çünkü kadrolanması gerekir.

Olası getiriler, basit sorunlar için daha kısa beklemeler, tekrarlayan temaslardan rahatlama ve mesai dışı kapsamadır. Risk tarafı geri dönüşleri, kaybedilen güveni, yanlış yanıtlardan ya da eylemlerden doğan zararı ve yasal maruziyeti içerir. Gerekçeyi kendi sayılarınızdan kurun: doğrulanmış çözüm ve geri dönüşler, devirler dâhil çözülen temas başına maliyet, çalışanların bot başarısızlıklarını düzeltmeye harcadığı zaman ve gruba göre memnuniyet. Bir tedarikçinin kapsama ya da yönlendirme iddialarını tahmininiz olarak kullanmaktan kaçının. İnsan yolunun ve yönetişimin maliyetini sayın (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Hedef olarak kapsama.** İnsanları yardımdan uzak tutmayı ödüllendirir. Doğrulanmış çözümü ve geri dönüşleri raporlayın.
- **Bir insana giden gizli ya da yavaş yol.** Bu bir karanlık örüntüdür ve kullanıcılar fark eder. Kısa tutun ve sınayın.
- **Bağlamsız devir.** Kullanıcılar kendilerini tekrar eder ve güven düşer. Bir özet iletin.
- **Hassas vakaların bot tarafından ele alınmasına izin vermek.** Refah, şikâyetler ve haklar insan gerektirir. Doğrudan yönlendirin.
- **Denetimsiz ya da onaysız özerk eylemler.** Tek bir hata ölçeklenebilir. Sınıflandırın, sınırlayın ve günlüğe kaydedin.
- **Yalnızca tedarikçi panosunun gösterdiğini ölçmek.** Pohpohlar. Kendi verilerinizi birleştirin.
- **Botun başarısız olduğu grupları yok saymak.** Ortalamalar onları gizler. Güvenli olduğu yerde sınayın ve bölümleyin.
- **Durdurma kuralının olmaması.** Başarısız bir bot ayakta kalır. Onu daraltacak ya da kapatacak kanıtı tanımlayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Sonuçlar | Kapsama raporlanır | Memnuniyet anketlenir | Doğrulanmış çözüm ve geri dönüşler niyet başına izlenir | Kullanıcı grubuna göre bölümlenir; durdurma kuralları tanımlanır; doğruluk aylık örneklenir | Asistan, çalışanlar ve bilgi, paylaşılan kanıtlarla birlikte iyileştirilir |
| İnsanlara giden yol | Bulunması zor | Seçenek mevcut | Kısa yol; insana ulaşma süresi izlenir; devirler bağlam taşır | Devir kalitesi derecelendirilir ve iyileştirilir; kadrolama talebe uyarlanır | Bot ve çalışanlar kanallar arasında sorunsuz iş birliği yapar; kullanıcı tercihine saygı gösterilir |
| Eylemde bulunan ajanlar | Plansız otomasyon | Betikli eylemler | Risk sınıflandırmalı eylemler, en az ayrıcalık, onay ve denetim | Geri alma oranı ve zarar incelenir; değişiklikler kontrol edilir | Ajan davranışı kurum ve tedarikçiler genelinde bağımsız güvenceyle yönetilir |

## Kontrol listesi

- [ ] Asistanın niyetleri, her zaman bir insana gitmesi gerekenlerle birlikte listelenmiştir.
- [ ] Doğrulanmış çözüm ve geri dönüş teması oranı, kapsamanın yanında raporlanır.
- [ ] Her ekranda bir insana giden görünür, kısa bir yol vardır ve insana ulaşma süresi ölçülür.
- [ ] Devirler bir özet ve kullanıcının sözlerini içerir ve alan ajanlarca derecelendirilir.
- [ ] Yanıtlar aylık olarak nitelikli, bağımsız inceleyicilerce örneklenir.
- [ ] Kullanıcılara bir yapay zekâyla konuştukları ve neler yapabildiği söylenir.
- [ ] Erişilebilirlik ve başka dil testleri gerçek kullanıcılarla yapılır.
- [ ] Ajan eylemleri risk sınıflandırmalıdır, en az ayrıcalıkla yetkilendirilmiştir ve denetim günlüğüne kaydedilir.
- [ ] Geri alma oranları ve zararlı eylemler suçlamadan incelenir.
- [ ] Bir durdurma kuralı, asistanın ne zaman daraltılacağını ya da kapatılacağını tanımlar.

## Yapay zekâ istemleri

**Niyetleri ve devir kurallarını tanımlayın.**

```text
[Kurum türü] için bir hizmet masası işletiyoruz. En yaygın temas nedenleri
şunlar: [hacimleriyle liste]. Bir sohbet botunun hangi niyetleri tamamen ele
alması, hangilerinde yalnızca yardımcı olup sonra devretmesi ve hangilerinin her
zaman bir kişiye gitmesi gerektiğini, gerekçeleriyle önerin. İletilecek devir
bilgisini ekleyin. İstatistik uydurmayın. Hassas vakalar için varsayımlarınızı ve
risklerinizi listeleyin.
```

**Bir kapsama iddiasını denetleyin.**

```text
Sohbet botu panomuz [değer] kapsama gösteriyor. Ayrıca şunlara sahibiz: yedi gün
içinde geri dönüş temasları [değer], anket sonuçları [değerler] ve bir konuşma
örneği [tanımlayın]. Doğrulanmış çözümün ne olabileceğini, verilerimizden nasıl
hesaplanacağını, kapsama ile çözüm arasındaki farkın neyi düşündürdüğünü ve sonra
neyin denetleneceğini açıklayın. Verilerin destekleyemeyeceği nedenler iddia
etmeyin. Varsayımlarınızı listeleyin.
```

**Ajan eylemleri için bir risk sınıflandırması tasarlayın.**

```text
Bir yapay zekâ ajanı şu eylemleri yapabilir: [liste]. Her biri için bir risk
sınıfı (bilgilendirici, geri alınabilir düşük etkili, sonuçları ağır), gerektirmesi
gereken izni, bir kişinin onaylaması gerekip gerekmediğini, neyin günlüğe
kaydedileceğini, nasıl geri alınacağını ve etkinleştirmeden önce çalıştırılacak bir
testi önerin. Belirli araçları varsaymayın. Varsayımlarınızı ve güvenlik ile hukuk
görüşü gerektiren kararları listeleyin.
```

**Bot konuşmalarının incelemesini planlayın.**

```text
Bot konuşmalarının aylık bir incelemesini tasarlayın: örneklem büyüklüğü ve seçimi
(bazı terk edilmiş konuşmalar ve kötü hizmet alma riski taşıyan kullanıcı
gruplarından bazıları dâhil), inceleyici nitelikleri, doğruluk, güvenlik ve
belirsizlik konusunda dürüstlük için kısa bir değerlendirme ölçeği, hataların nasıl
kaydedileceği ve kaynaklarının nasıl düzeltileceği ve kullanıcıları
tanımlamadan nasıl raporlanacağı. Varsayımlarınızı ve gizlilik uyarılarınızı
listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir sohbet botu ya da yapay zekâ ajanı ölçütü için eşleştirilmiş koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir sohbet botu metrik girdisinin çözümü ölçtüğünü ve manipülasyon yolunu ile koruma önlemini taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Doğrulanmış çözümü ve geri dönüş temaslarını ölçün ve kapsamayı yalnızca betimleyici bir rakam olarak ele alın.
- Bir insana giden yolu kısa ve görünür yapın ve bağlamla devredin.
- Yanıtları doğruluk ve güvenlik için örnekleyin ve asistanın kullandığı bilgiyi güncel tutun.
- Kullanıcıların bir yapay zekâyla konuştuğu konusunda dürüst olun ve yüzüstü bırakılma olasılığı en yüksek kullanıcılarla sınayın.
- Eylemde bulunan ajanlar için riski sınıflandırın, izinleri sınırlayın, sonuçları ağır eylemler için onay isteyin ve bir denetim izi tutun.
- Bir durdurma kuralını önceden tanımlayın.

## Kaynaklar ve ileri okuma

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
