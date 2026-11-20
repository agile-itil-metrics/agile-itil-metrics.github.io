# Uyum ve denetim metrikleri

**Uyum, kanıt işin kendisi tarafından üretildiğinde en kolay ve en dürüst haldedir; bu yüzden kanıtın ne kadarının otomatik geldiğini, bulguların ne kadar hızlı düzeltildiğini ve aynı bulgunun ne sıklıkla geri geldiğini ölçün, denetçileri de konuşmaya erken katılan paydaşlar olarak görün.**

## Genel bakış ve motivasyon

BT hizmetleri kuran ve işleten kuruluşların çoğu birilerine karşı sorumludur: düzenleyiciler, müşteriler, belgelendirme kuruluşları, sigortacılar, yönetim kurulları. [Mevzuata uyum](https://en.wikipedia.org/wiki/Regulatory_compliance), yasalara, kurallara ve standartlara uymak ve bunu gösterebilmektir. Denetim, bunun doğru olup olmadığına karar vermek için kanıtın sistematik biçimde incelenmesidir. BT'de buna mali raporlama kontrollerinin, veri koruma yükümlülüklerinin, güvenlik belgelendirmelerinin ve sözleşmesel taahhütlerin denetimleri dahildir. [Bilgi teknolojisi denetimi](https://en.wikipedia.org/wiki/Information_technology_audit), sistemlerin ve tuttukları verilerin etrafındaki kontrolleri inceler.

Uyum ile sürekli teslimatın sürtüşmeyle anılan bir ünü vardır. Uyum, değişiklikten önce belge, imza ve onay ister; sürekli teslimat ise sürekli yayımlanan küçük değişiklikleri tercih eder. Uyum sondaki bir aşama olarak ele alındığında sürtüşme gerçektir. Uyum iş akışına yerleştirildiğinde azalır. Değişiklik kayıtları, kod incelemeleri, otomatik testler ve erişim günlükleri kanıttır ve bir teslimat işlem hattı bunları her gün üretir. [Sürekli denetim](https://en.wikipedia.org/wiki/Continuous_auditing), dönemsel örnekler yerine kontrollerin otomatik, neredeyse gerçek zamanlı denetimlerini kullanır ve sürekli teslimatın ritmiyle örtüşür. [Denetim izi](https://en.wikipedia.org/wiki/Audit_trail), kimin, ne zaman, hangi sistemde ne yaptığını gösteren bir kayıttır ve çoğu zaman elinizdeki en güçlü kanıttır.

ITIL ilgili uygulamaları tarif eder: bilgi güvenliği yönetimi, risk yönetimi ve hizmet değer sisteminin yönetişimi; ayrıca bilgi güvenliği yönetim sistemleri için [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001) gibi standartlara işaret eder. Kuruluşların sık karşılaştığı çerçeveler arasında, Amerika Birleşik Devletleri'ndeki [Sarbanes–Oxley Yasası](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act) gibi mali kontrollere ilişkin raporlama rejimleri, Avrupa Birliği'ndeki [Genel Veri Koruma Tüzüğü](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation) gibi veri koruma yasaları ve güvenlikle ilgili kontrolleri ve ilişkili ölçütleri inceleyen [SOC 2](https://en.wikipedia.org/wiki/SOC_2) gibi güvence raporları yer alır. Ayrıntılar yargı bölgesine, sektöre ve tarihe göre değişir; bu konu yasal gereklilikleri değil, ölçüm uygulamasını betimler. Size nelerin uygulandığı konusunda uyum, hukuk ve denetim iş arkadaşlarınızla çalışın.

Uyum metriklerinin amacı, kuruluşun yükümlülüklerini ne kadar iyi karşıladığını ve bunun ne kadar emek gerektirdiğini öğrenmek, böylece her ikisinin de iyileşebilmesidir. Risk, uyumun denetçi için sahnelenen bir gösteriye dönüşmesidir. Bir takım belgeleri son anda üreterek bir denetimi geçebilir ve yine de riskli uygulamalar yürütebilir. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law)ndan çıkan koruma önlemi geçerlidir: “denetim bulguları” bir hedef olduğunda insanlar incelemeden kaçınır, kapsamı daraltır ve ifadeler üzerinde pazarlık yapar (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

İki düşünce çizgisi yardımcı olur.

- **Yan ürün olarak uyum.** İşlem hattı inceleme, test, onay ve dağıtımı otomatik olarak kaydediyorsa, bir denetim yakın olsun olmasın kanıt vardır. Bu aynı zamanda kanıtı sonradan yeniden oluşturma cazibesini ortadan kaldırır.
- **Paydaş olarak denetçiler.** Çevik uygulama, paydaşlarla sürekli iş birliğine değer verir. Denetçiler ve değerlendiriciler meşru soruları olan paydaşlardır. Onları kontrollerin ve kanıtın tasarımına dahil etmek, bağımsızlıklarını korurken sürprizi ve yeniden işi azaltır.

## Temel ilkeler

- **Kanıtı işin yan ürünü olarak üretin.** İşlem hatları, kayıtlar ve günlükler denetim sorularının çoğunu yanıtlamalıdır.
- **Yükümlülükleri kontrollere ve sahiplere eşleyin.** Her yükümlülüğün bir kontrolü, her kontrolün bir sahibi vardır.
- **Denetçilerle erken iş birliği yapın.** Tasarımları ve kanıt yaklaşımlarını denetimden önce paylaşın ve bağımsızlıklarını koruyun.
- **Bulguları değil, nedenleri düzeltin.** Nedeni ortadan kaldırmadan kapatılan bulgu geri gelir.
- **Sonucun yanı sıra emeği de ölçün.** Uyumun maliyeti resmin bir parçasıdır.
- **Önemli olan yerde görevler ayrılığını koruyun.** İncelemenin bağımsızlığı, otomasyonun destekleyebileceği ama yerine geçemeyeceği bir kontroldür.
- **Boşluklar konusunda dürüst olun.** Kendi bildirdiğiniz zayıflıkları başkalarından önce sizin bulmanız daha iyidir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Yükümlülük kapsamı | Uygulanabilir yükümlülüklerin, sahibi ve bir kanıt kaynağı olan bir kontrole eşlenen oranı | sahibi ve kanıt kaynağı olan en az bir kontrole eşlenen yükümlülükler / uygulanabilir yükümlülükler | yüzde | Yükümlülük kaydı ve kontrol kaydı | Yönetişim; bilgi güvenliği yönetimi; risk yönetimi | Bitti tanımı kontrol kanıtını içerir | Üç aylık |
| Kanıt otomasyon oranı | Kapsamdaki kontrol kanıtının kayıt sistemlerinden otomatik toplanan oranı | otomatik toplanan kontrol kanıtı öğeleri / gereken kanıt öğeleri | yüzde | Kontrol kaydı, işlem hattı ve sistem günlükleri | Bilgi güvenliği yönetimi; değişiklik yetkilendirme | İşlem hattı incelemeyi, testi ve dağıtımı otomatik kaydeder | Üç aylık |
| Kanıt yanıt süresi | Bir denetçi veya değerlendirici tarafından istenen kanıtı sağlama süresi | talepten kabul edilen kanıta kadar geçen günlerin medyanı ve 85. yüzdeliği | gün | Denetim talebi izleyicisi | Yönetişim; bilgi güvenliği yönetimi | Bir paydaş sorusuna duyarlılık | Denetim başına |
| Bulgu kapatma süresi | Denetim bulgularını önem derecesine göre kapatma süresi | bulgunun verilmesinden doğrulanmış kapatmaya kadar geçen günlerin medyanı ve 85. yüzdeliği | gün | Bulgu izleyicisi | Sürekli iyileştirme; risk yönetimi | Bir kusuru düzeltme süresi | Aylık |
| Tekrarlayan bulgu oranı | Önceki bir denetim veya incelemeden tekrarlayan bulguların oranı | özü itibarıyla daha önce kapatılmış bir bulguyla eşleşen bulgular / dönemdeki bulgular | yüzde | Neden bağlantılı bulgu izleyicisi | Sürekli iyileştirme; sorun yönetimi | Bir düzeltmeden sonra tekrarlayan kusur | Denetim döngüsü başına |
| Görevler ayrılığı çatışmaları | Ayrılık kurallarını ihlal eden erişim veya onay birleşimlerinin sayısı ve çözülme süresi | tespit edilen çatışmalar; çözülme için geçen günlerin medyanı | adet; gün | Kimlik ve erişim yönetimi araçları, değişiklik kayıtları | Bilgi güvenliği yönetimi; değişiklik yetkilendirme | Değişikliklerin bağımsız incelemesi | Aylık |
| Denetim emeği | Kuruluşun bir denetim döngüsüne hazırlanmak ve onu desteklemek için harcadığı kişi saatleri, kapsam birimi başına | denetim hazırlığı ve desteğine kaydedilen saatler / kapsamdaki kontroller veya sistemler | birim başına saat | Zaman kayıtları veya emek tahminleri | Yönetişim; sürekli iyileştirme | Teslimat dışı işin maliyeti | Denetim döngüsü başına |

Kapsamdaki yükümlülükleri ve denetim kapsamını kayıtta belirtin. Kapatma süresi, bulgu verildiğinde başlar ve takımın bitti demesiyle değil, denetçinin veya bağımsız bir doğrulayıcının kapatmayı onaylamasıyla sona erer. Tekrarlayan bulgular ifadeye göre değil nedene göre eşleştirilir ve eşleştirme kuralı kaydedilir. Denetim emeği kuruluş için bir eğilim ölçümüdür ve asla bireylerin ölçümü değildir.

## Öneriler

### Yükümlülüklerinizi ve kontrollerinizi tanıyın

**1. Geçerli yükümlülükleri sade bir dille listeleyin.** Hukuk ve uyum iş arkadaşlarınızla birlikte, hizmeti bağlayan yasaları, standartları, sözleşmeleri ve politikaları ve her birinin sonuçlar açısından ne gerektirdiğini listeleyin. Listeyi kısa ve okunabilir tutun. Kimsenin sade biçimde ifade edemediği yükümlülükler, denetim sürprizlerine yol açanlardır.

**2. Her yükümlülüğü kontrollere, sahiplere ve kanıta eşleyin.** Her yükümlülük için, onu karşılayan kontrolü, sorumlu kişiyi ve kontrolün işlediğini gösteren kanıtı adlandırın. Bir kontrol birden çok yükümlülüğü karşılıyorsa bunu belirtin, çünkü bu yinelenen emeği azaltır. Yükümlülük kapsamı bu haritanın tamlığını ölçer. Eşlenmemiş yükümlülükler, kapatılacak ya da bilerek kabul edilecek boşluklardır.

**3. Daha az ve daha güçlü kontrolleri tercih edin.** Otomatik ve test edilmiş bir kontrol, birkaç elle yürütülen kontrole bedeldir. Örtüşen kontrolleri arayın ve hiçbir yükümlülüğe hizmet etmeyenleri emekliye ayırın. Her kontrol, işletmek ve kanıtlamak için emeğe mal olur (bkz. Konu 8.2 “Risk ve kontrol metrikleri”).

### Kanıtı bir yan ürün haline getirin

**4. Kanıtı işlem hattının üretmesine izin verin.** Her üretim değişikliğini bir talebe, bir kod incelemesine, test sonuçlarına ve gerekliyse bir onaya bağlayın; hepsi otomatik kaydedilsin. Bunları gösteren bir dağıtım kaydı, bir belge yazılmadan denetçiye ne olduğunu anlatır. Bu, çevik takımların zaten kullandığı sürekli teslimat uygulamalarına dayanır (bkz. Konu 4.5 “Yayın ve dağıtım metrikleri”).

**5. İşlem hattında politika denetimleri kullanın.** “Yazar dışında biri tarafından incelenmeden dağıtım yapılmaz” ya da “bilet olmadan üretim erişimi verilmez” gibi kuralları otomatik denetimler olarak kodlayın. Denetim hem bir kontrol hem de onun kanıtıdır. Kuralları görünür ve sürümlenmiş tutun, böylece onlarda yapılan değişiklikler de kaydedilir. Bu, hassas bir sürecin tüm aşamalarını hiçbir kişinin tek başına kontrol etmemesi ilkesi olan [görevler ayrılığını](https://en.wikipedia.org/wiki/Segregation_of_duties) destekler.

**6. Denetim izlerini düzgün biçimde saklayın.** Erişim ve değişiklik günlüklerini, betimledikleri kişiler tarafından değiştirilemeyecek biçimde tutun, gereken süre boyunca saklayın ve aranabilir hale getirin. Kaydettiği kişilerce düzenlenebilen bir iz zayıf bir kanıttır. Saklama kurallarını hukuk iş arkadaşlarınızla denetleyin.

**7. Kanıtın ne kadarının otomatik olduğunu ölçün.** Kanıt otomasyon oranı, elle toplamanın nerede sürdüğünü gösterir. Elle yapılan öğeleri emeğe ve riske göre sıralayın ve en kötüsünden başlayarak otomatikleştirin. Oran yükseldikçe denetim emeği ve yanıt süresi düşer.

### Denetçilerle çalışın

**8. Denetçileri tasarıma davet edin.** Kontrollerde ve kanıtta planlanan değişiklikleri iç denetim ve dış değerlendiricilerle erkenden paylaşın ve onları neyin tatmin edeceğini sorun. Bağımsızlık, kontrollerinizi onların tasarlamadığı anlamına gelir; hangi kanıta ihtiyaç duyacaklarını size söyleyemeyecekleri anlamına gelmez. Erken konuşmalar yeniden işi azaltır. İç Denetçiler Enstitüsü, mesleğin [iç denetim](https://en.wikipedia.org/wiki/Internal_audit) rolünü açıklayan standartlar yayımlar.

**9. Bir kanıt dizini hazırlayın.** Her kanıt türünün nerede durduğunu ve nasıl alınacağını gösteren canlı bir dizin tutun. Kanıt taleplerinin yanıt süresini izleyin ve gecikmeleri eksik otomasyonu bulmak için kullanın. Kısa ve düzenli bir süreç, her denetimden önceki telaştan iyidir.

**10. Önemlilik ve kapsamın anlamı üzerinde anlaşın.** Denetçilere neyin önemli olduğuna ve neyin kapsamda olduğuna nasıl karar verdiklerini sorun ve yanıtı kaydedin. Ortak bir anlayış, sonradan çıkacak anlaşmazlıkları önler. İncelemeden kaçınmak için kapsamı daraltmayın ve sebepsiz yere genişletmeyin.

### Nedenleri düzeltin ve öğrenin

**11. Her bulguyu bir sorun kaydı olarak ele alın.** Nedeni bulun, düzeltin ve kapatmayı bağımsız biri tarafından doğrulayın. Tekrarlayan bulguları öncekilere bağlayın ve ilk düzeltmenin neden tutmadığını inceleyin. Yüksek bir tekrarlayan bulgu oranı, belirtileri ele alan düzeltmelere işaret eder; bu da sorun yönetimiyle ilişkilidir (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

**12. Maliyeti izleyin ve düşürün.** Denetim emeğini döngüler boyunca kaydedin. Emek yüksek ve sabitse, denetimler arasındaki yinelemeyi, elle kanıt toplamayı ve kimseye hizmet etmeyen kontrolleri arayın. Emek eğilimini sonuçlarla birlikte raporlayın. Uyum, gerçek riski azalttığında maliyetine değerdir ve metrikler bunu ayırt etmenize yardımcı olur.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşlenen koruma önlemi metriği veya uygulaması |
| --- | --- | --- |
| Yükümlülük kapsamı | Yükümlülükleri zayıf veya ilgisiz kontrollere eşlemek; yükümlülükleri dar tanımlamak | Kontrol uygunluğunun ikinci bir tarafça gözden geçirilmesi; kontrolleri test etmek (bkz. Konu 8.2 “Risk ve kontrol metrikleri”) |
| Kanıt otomasyon oranı | Ekran görüntülerini veya dışa aktarımları otomatik saymak; önce düşük değerli kanıtı otomatikleştirmek | Otomatiği sistem tarafından üretilmiş ve kurcalamaya dirençli olarak tanımlamak; riske göre sıralamak |
| Kanıt yanıt süresi | Kısmi kanıtı hızla sağlamak; talebin ifadesi üzerinde pazarlık yapmak | Yalnızca kabul edilen kanıtı saymak; takip taleplerini izlemek |
| Bulgu kapatma süresi | Bulguları doğrulamadan kapatmak; önem derecesini yeniden sınıflandırmak | Bağımsız doğrulama; önem derecesi değişiklik günlüğü |
| Tekrarlayan bulgu oranı | Bulguları eşleşmeyecek şekilde yeniden ifade etmek; önceki bulguyu farklı bir tür olarak kapatmak | Kayıtlı bir kuralla nedene göre eşleştirmek; iç denetimin gözden geçirmesi |
| Görevler ayrılığı çatışmaları | Çatışmaları kapsam dışı sistemlere taşımak; hiç kaydedilmeyen geçici erişim vermek | Hassas süreçleri olan tüm sistemleri kapsamak; geçici erişimi gözden geçirmek |
| Denetim emeği | Saatleri kaydetmemek; emeği başka bütçelere kaydırmak | Zaman kayıtlarını örneklemek; takım anketleriyle karşılaştırmak |

Sağlıklı bir okuma şudur: yükselen kanıt otomasyonu, daha kısa ve daha istikrarlı yanıt süresi, doğrulamayla kapatılan bulgular, düşük bir tekrar oranı ve süreç olgunlaştıkça azalan denetim emeği.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yanı | Zayıf yanı |
| --- | --- | --- |
| Dönemsel elle kanıt | Denetçilere tanıdık | Maliyetli; sonradan yeniden oluşturulur |
| Otomatik sürekli kanıt | Sürdürmesi ucuz; zamanında | Mühendislik gerektirir; denetçilerin kaynağa güvenmesi gerekir |
| Ağır onaylar | Görünür kontrol | Yavaş; değişikliği toplulaştırır |
| Otomatik politika denetimleri | Tutarlı ve hızlı | Kurallar doğru ve görünür olmalı |
| Denetçilerin erken katılımı | Daha az sürpriz | Bağımsızlığı korumak için özen gerektirir |
| Sonda denetim | Net ayrım | Geç bulgular; yeniden iş |
| Birçok yükümlülük için tek kontrol | Verimli | Tek bir başarısızlık birkaç yükümlülüğü etkiler |
| Birçok özel kontrol | Net eşleme | Yinelenen emek |

Düz yazıyla yanıt şudur: kanıtı işlem hattından ve kayıt sistemlerinden otomatikleştirin, denetçileri bağımsızlıklarını koruyarak tasarıma erken dahil edin ve yükümlülüklere eşlenmiş yalın bir güçlü kontrol kümesi tutun.

## Takımınızla tartışılacak sorular

**1. Hangi denetim sorusunu yanıtlamak bizim için en uzun sürüyor ve neden?**
Son denetimdeki en yavaş kanıt talebini seçin ve izini sürün. Kanıt eksik mi, dağınık mı, yoksa birinin kafasında mı? Neyin onu otomatik yapacağını tartışın. Kolaylaştırıcı maliyeti saat cinsinden kaydetmelidir.

**2. Son bir aydaki herhangi bir üretim değişikliği için kimin incelediğini ve hangi testlerin çalıştığını gösterebilir miyiz?**
Rastgele bir değişiklik seçin ve deneyin. Zincirin nerede koptuğunu not edin. Boşluğu kapatan, değişiklik kaydında ya da işlem hattında yapılacak bir iyileştirme üzerinde anlaşın.

**3. Son denetimde ne vaat ettik ve bu tuttu mu?**
Bulguları ve düzeltmeleri gözden geçirin. Her biri için nedenin ortadan kaldırılıp kaldırılmadığını ve kapatmayı kimin doğruladığını sorun. Tekrarları arayın. Daha derinlemesine incelenecek bir bulgu üzerinde anlaşın.

**4. Kanıtı nasıl kolaylaştıracağımızı denetçilere sorsaydık bize ne söylerlerdi?**
İç denetim veya bir değerlendirici ile kanıt tasarımı üzerine bir konuşma planlayın. Neye güvendiklerini ve neye güvenmediklerini sorun. Kolaylaştırıcı yanıtlarını bilgi olarak ele almalı ve bağımsızlık kurallarını akılda tutmalıdır.

**5. Hangi kontrolleri hiçbir yükümlülüğün gerektirmediği halde işletiyoruz?**
Kontrolleri ve hizmet ettikleri yükümlülükleri listeleyin. Net amacı olmayanları bulun. Onları emekliye ayırmayı ve gereksiz olduklarına dair kanıtı tartışın.

**6. Burada hassas bir işi tek bir kişi baştan sona nerede yapabilir?**
Dağıtımı, erişim izinlerini ve ödemeleri düşünün. Araçların ayrımı zorunlu kılıp kılmadığını ya da yalnızca politikanın olup olmadığını kontrol edin. Personel sayısının az olduğu yerlerde otomatik inceleme gibi telafi edici kontrolleri tartışın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları işlerini iyi yaparak kanıtın büyük bölümünü üretir. Değişiklik, inceleme ve test kayıtlarını bağlı tutmalı, işlem hattı politika denetimlerini kullanmalı ve riski azaltmadan işi yavaşlatan kontrollere ilişkin endişelerini dile getirmelidir. Hangi kanıtın yeterli olduğuna dair denetçilerle yapılan erken konuşmalardan yararlanırlar.

### Hizmet ve operasyon takımları

Operasyon takımları, birçok denetimin merkezinde yer alan erişim yönetimini, günlüklemeyi, yedeklemeleri ve olay ele almayı yürütür. Günlükleri kurcalamaya dirençli ve saklanmış tutmalı, erişim incelemelerini takvime göre yönetmeli ve kanıt dizinini sürdürmelidir. Elle kanıtın yükünü onlar taşır ve otomasyonun en çok nerede yardımcı olacağını gösterebilirler.

### Liderlik ve yönetişim

Liderler uyumdan ve çoğu zaman denetim sonuçlarından sorumludur. Kanıt otomasyonunu finanse etmeli, yalnızca bulgu sayısını değil kapsamı ve tekrarlayan bulgu oranlarını istemeli ve denetçilerin bağımsızlığını desteklemelidir. Yönetişim, boşluklara dair dürüst raporlar ve her biri için bir plan beklemelidir.

### Müşteriler ve kullanıcılar

Müşteriler ve kullanıcılar, verilerinin ve hizmetlerinin nasıl ele alındığına dair güvence olarak uyuma dayanır. Güvence raporları açık olduğunda, olaylar gerektiği gibi bildirildiğinde ve kontroller meşru kullanımı gereğinden fazla zorlaştırmadığında yararlanırlar. Uyum hakkında şeffaf iletişim güven oluşturur.

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir ödeme şirketi, bir kart işleme platformu işletiyor ve her yıl bir güvenlik güvence çerçevesine ve bir veri koruma rejimine göre değerlendiriliyor. Aşağıdaki rakamlar açıklayıcıdır.

Denetim hazırlığı mühendislik takımlarının her yıl yaklaşık altı haftasını alıyor. Geçen yılki değerlendirme 14 bulguyla kapandı; bunların 5'i bir önceki yıldan tekrarlıydı. Uyum başkanı durumu haritalıyor. Yükümlülük kapsamı yüzde 83; yükümlülüklerin yüzde 17'sinin adı belli bir kontrol sahibi yok. Kanıt otomasyonu yüzde 22 ve değişiklik onayı kanıtının çoğu, elle derlenmiş bilet ekran görüntülerinden geliyor. Ortanca kanıt yanıt süresi 9 gün, 85. yüzdelik ise 21 gün. Ortanca bulgu kapatma süresi 74 gün ve kapatma çoğunlukla sahip takım tarafından doğrulamasız işaretlenmiş.

Uyum başkanı, teslimat ve operasyon takımlarıyla ve iç denetçiyle çalışıyor. Dört şeyi değiştiriyorlar. İşlem hattındaki her üretim değişikliği artık talebe, yazar dışında biri tarafından yapılan kod incelemesine, test sonuçlarına ve dağıtıma bağlanıyor ve bunlar değişiklik kaydında otomatik olarak kaydediliyor. Bir politika denetimi bağımsız incelemesi olmayan dağıtımı engelliyor ve acil durumlar için istisna yolunu günlüğe kaydediyor. Erişim incelemeleri, görevler ayrılığı çatışmalarını doğrudan gösteren kimlik sisteminden üç ayda bir yürütülüyor. Her bulgu, iç denetimden bağımsız bir doğrulayıcıyla bir sorun kaydı oluyor ve tekrarlayan bulgular selefleriyle bağlanıyor.

Bir sonraki değerlendirmede kanıt otomasyon oranı yüzde 71, ortanca kanıt yanıt süresi 2 gün, 85. yüzdelik 5 gün ve denetim hazırlığı yaklaşık iki hafta sürüyor. Yükümlülük kapsamı yüzde 97 ve kalan öğelerin belgelenmiş kabulü var. Bulgular 6'ya düşüyor, biri tekrarlı ve ortanca kapatma süresi bağımsız doğrulamayla 31 gün. İcra kurulu başkanı gelecek yıl için sıfır bulgu istiyor. Uyum başkanı, tekrarlayan bulguların, kapatma süresinin ve kanıt otomasyonunun izlenmesini öneriyor; sıfır bulgu hedefinin takımları sorunları saklamaya ya da kapsamı daraltmaya ittiğini ve hiçbir şey bulmayan bir değerlendiricinin yeterince dikkatli bakmamış olabileceğini açıklıyor. Karar kaydediliyor ve yönetim kurulu ölçümleri bir sonraki toplantıda incelemeyi kabul ediyor.

## Sektör mercekleri

**Girişim.** Yükümlülükler büyük bir müşteriyle ya da bir yatırım turuyla aniden gelebilir. Alışkanlıkları erkenden edinin: akran incelemesi, değişiklik kayıtları ve işlem hattında erişim kontrolü; böylece kanıt istendiğinde var olur. İş gerektirdiğinde bir çerçeve seçin ve onu zaten yaptıklarınıza eşleyin.

**Küçük işletme.** Uyum yükümlülükleri çoğu zaman sözleşmelerle ve yasayla belirlenir ve kaynaklar sınırlıdır. Yükümlülüklerin kısa bir listesini tutun, kendi güvence raporları olan yönetilen hizmetlere güvenin ve basit bir kanıt klasörü tutun. Ele aldıkları riskten daha pahalıya mal olan uyum araçları satın almaya karşı temkinli olun.

**Büyük kuruluş.** Birçok yükümlülük örtüşür; bu yüzden bir kontrolü birçok yükümlülüğe eşleyen birleşik bir kontrol çerçevesi büyük emek tasarrufu sağlar. Ortak kanıt kaynakları, paylaşılan bir bulgu izleyicisi ve tekrarlanan talepleri önlemek için bir denetim takvimi kullanın. Takımların aynı şey için üç kez incelenmemesi adına iç denetimi, uyumu ve güvenliği eşgüdümleyin.

**Kamu sektörü.** Uyum yükümlülükleri kapsamlı ve kamusaldır; ulusal organlarca yapılan denetimlerle birlikte kamu alımları, kayıtlar, erişilebilirlik ve veri koruma kurallarını içerir. Kararları ve kanıtı gereken süre boyunca belgeleyin, mümkün olduğunda raporları kurumlar arasında tutarlı kılın ve bağımsız denetim ile yönetim arasında net bir çizgi tutun. Yükümlülükler seçimler ve mevzuatla değişebilir (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler arasında kontrol kaydı için araçlar, kanıt için işlem hattı entegrasyonu, kimlik ve günlükleme sistemleri ile uyum personelinin ve takımların zamanı yer alır. Kanıtı otomatikleştirmenin ilk emeği önemlidir ve yinelenen elle işin yerini alır.

Getiriler, daha düşük yinelenen denetim emeği, taleplere daha hızlı yanıt, daha az tekrarlayan bulgu ve kontrol sağlığına dair daha dürüst bir görünümdür. Ayrıca bir belgelendirme döngüsünün sonundaki sürprizlerin kaçınılan maliyetini de içerir. Gerekçeyi kendi rakamlarınızdan kurun: öncesi ve sonrası denetim hazırlık saatleri, kanıt yanıt süresi, bulguların sayısı ve yaşı ve ticari bir anlaşmadaki denetimle ilgili herhangi bir gecikmenin maliyeti. Yöntemini ve ilgisini izleyemiyorsanız uyum maliyeti çalışmalarını alıntılamaktan kaçının. Programın maliyetini ve zayıf kontrollerin aşırı otomasyonu riskini hesaba katın. Daha geniş mali ele alış, önceki bölümün son konusunda yer alır (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Denetime son ayda hazırlanmak.** Yeniden oluşturulmuş kanıt ve bir telaş üretir. Kanıtı iş gerçekleşirken kaydedin.
- **Kanıt olarak ekran görüntüleri.** Elle yapılırlar, değiştirilmesi kolaydır ve pahalıdır. Sistem tarafından üretilmiş kayıtlar kullanın.
- **Sıfır bulguyu hedeflemek.** Dar kapsamı ve gizlenen sorunları ödüllendirir. Kapatmayı, tekrarları ve kapsamı izleyin.
- **Bulguları beyanla kapatmak.** Aynı bulgu geri gelir. Kapatmayı bağımsız olarak doğrulayın.
- **Denetçileri hasım görmek.** Her iki tarafta maliyeti artırır. Bağımsızlığı korurken kanıt tasarımında iş birliği yapın.
- **Hiçbir yükümlülüğe hizmet etmeyen kontroller.** Emeğe mal olur ve alaycılığı besler. Onları emekliye ayırın.
- **Kötü bir kontrolü otomatikleştirmek.** Zayıf bir kontrolün kanıtını ölçekte üretir. Önce kontrolü test edin.
- **Elle görevler ayrılığı.** Belleğe dayanır. Bunu araçlarda zorunlu kılın ve istisnaları gözden geçirin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Yükümlülükler ve kontroller | Birkaç kişi tarafından bilinir | Yükümlülüklerin ve kontrollerin listesi | Kontrollere, sahiplere ve kanıt kaynaklarına eşlenmiş | Kapsam izlenir; örtüşme azaltılır; kontroller test edilir | Takımlar, tedarikçiler ve rejimler arasında birleşik kontrol çerçevesi |
| Kanıt | Denetimlerden önce derlenir | Standart şablonlar ve bir kanıt klasörü | İşlem hatları ve kayıt sistemleri kanıtın büyük kısmını üretir | Otomasyon oranı, yanıt süresi ve emek yönetilir | Denetçilerin kanıtı doğrudan tükettiği sürekli güvence |
| Bulgular ve öğrenme | Bulgular tartışılır ve beyanla kapatılır | Bulgular izlenir | Bulgular, bağımsız doğrulamayla sorun kayıtları olarak ele alınır | Tekrarlar ve kapatma süresi analiz edilir ve kontrol tasarımına geri beslenir | Bulgular kuruluş genelinde ve ortaklarla paylaşılır; iyileştirme rutindir |

## Kontrol listesi

- [ ] Geçerli yükümlülükler sade bir dille, sahipleriyle birlikte listelenmiş.
- [ ] Her yükümlülük kontrollere ve bir kanıt kaynağına eşlenmiş.
- [ ] Üretim değişiklikleri bağlantılı talep, inceleme, test ve dağıtım kanıtını otomatik olarak taşıyor.
- [ ] Politika denetimleri işlem hattında incelemeyi ve görevler ayrılığını zorunlu kılıyor.
- [ ] Denetim izleri kurcalamaya dirençli ve gereken süre boyunca saklanıyor.
- [ ] Bir kanıt dizini var ve taleplerin yanıt süresi ölçülüyor.
- [ ] Bağımsızlık korunurken kanıt tasarımı konusunda denetçilere danışılıyor.
- [ ] Bulgular sorun kayıtları olarak kaydediliyor ve bağımsız doğrulamayla kapatılıyor.
- [ ] Tekrarlayan bulgular öncüllerine bağlanıyor ve neden açısından inceleniyor.
- [ ] Denetim emeği bir eğilim olarak izleniyor ve yinelenme açısından gözden geçiriliyor.

## Yapay zekâ istemleri

**Yükümlülükleri kontrollere eşleyin.**

```text
[sektör ve yargı bölgesi] içindeki hizmetimize uygulanan yükümlülüklerin
listesi şöyle: [sade bir dille yapıştırın]. Kontrol listemiz şöyle:
[yapıştırın]. Her yükümlülüğü kontrollere, her kontrolün işlediğini gösteren
kanıta ve bir sahip rolüne eşleyen bir tablo oluşturun. Kontrolü olmayan
yükümlülükleri, yükümlülüğü olmayan kontrolleri ve zayıf kanıtı işaretleyin.
Hukuki sonuç vermeyin. Varsayımlarınızı ve hukuk ile uyum için sorularınızı
listeleyin.
```

**Kanıt otomasyonunu planlayın.**

```text
Elle yürütülen denetim kanıtlarımız şunları içeriyor: [harcanan saatlerle
öğeleri listeleyin]. Kayıt sistemlerimiz şunlar: [araçları listeleyin]. Kanıt
öğelerini emeğe ve riske göre sıralayın ve her birinin bir kayıt sisteminden
otomatik olarak nasıl toplanabileceğini, kanıtı neyin güvenilir kıldığını
(kurcalamaya direnç, bütünlük) ve denetçilerle neyin doğrulanması gerektiğini
önerin. Belirli araçların özelliklerini varsaymayın. Varsayımlarınızı
listeleyin.
```

**Tekrarlayan bulguları analiz edin.**

```text
Son [sayı] denetim döngüsünden nedenleri ve düzeltmeleriyle bulgular şunlar:
[arındırılmış olarak yapıştırın]. Bulguları temel nedene göre gruplayın,
tekrarları belirleyin ve önceki düzeltmelerin neden tutmadığını önerin.
Bulguları nedene göre eşleştirmek için bir kural ve kapatma için bir doğrulama
adımı önerin. Verilen bilginin ötesinde tahmin yürütmeyin. Varsayımlarınızı
listeleyin.
```

**Denetçilerle erken bir konuşmaya hazırlanın.**

```text
[kontrol veya süreç] için kanıt üretme biçimimizi değiştirme konusunda iç
denetimle yapılacak bir toplantı için bir gündem taslağı hazırlayın. Neyi
değiştirmeyi planladığımızı, yanıtlanması gereken soruları (kabul edilebilir
kanıt, örnekleme, önemlilik), bağımsızlığı korumak için onlardan neyi
yapmalarını istemeyeceğimizi ve sonucu nasıl kaydedeceğimizi ekleyin. Sade bir
dil kullanın. Varsayımlarınızı ve riskleri listeleyin.
```

## Yapay zekâ becerileri

- [Çevik ITIL Metrikleri becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir uyum veya denetim metriği için eşlenen koruma önlemini bulmak üzere kullanın.
- [Çevik ITIL Metrikleri bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir uyum metriği girdisinin manipülasyon yöntemini, koruma önlemini ve bağımsızlık kuralını taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Kanıtı teslimatın yan ürünü olarak, işlem hatlarından ve kayıt sistemlerinden üretin ve ne kadarının otomatik olduğunu ölçün.
- Her yükümlülüğü bir kontrole, bir sahibe ve bir kanıt kaynağına eşleyin.
- Denetçileri kanıt tasarımına erkenden davet edin ve bağımsızlıklarını koruyun.
- Bulguları nedenleri ortadan kaldırarak kapatın, kapatmayı bağımsız olarak doğrulayın ve tekrarlayan bulgu oranını izleyin.
- Sıfır bulgu gibi hedeflerden kaçının ve sonuçların yanında emeği de izleyin.
- Görevler ayrılığını araçlarda zorunlu kılın ve denetim izlerini kurcalamaya dirençli tutun.

## Kaynaklar ve ileri okuma

1. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
2. Institute of Internal Auditors, *Global Internal Audit Standards*, 2024.
3. American Institute of Certified Public Accountants, *Trust Services Criteria* (used in SOC 2 examinations), latest version.
4. Kim, G., Humble, J., Debois, P., and Willis, J., *The DevOps Handbook*, IT Revolution, 2016.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Regulatory compliance](https://en.wikipedia.org/wiki/Regulatory_compliance).
8. Wikipedia, [Information technology audit](https://en.wikipedia.org/wiki/Information_technology_audit).
9. Wikipedia, [Continuous auditing](https://en.wikipedia.org/wiki/Continuous_auditing).
10. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
11. Wikipedia, [ISO/IEC 27001](https://en.wikipedia.org/wiki/ISO/IEC_27001).
12. Wikipedia, [Sarbanes–Oxley Act](https://en.wikipedia.org/wiki/Sarbanes%E2%80%93Oxley_Act).
13. Wikipedia, [General Data Protection Regulation](https://en.wikipedia.org/wiki/General_Data_Protection_Regulation).
14. Wikipedia, [SOC 2](https://en.wikipedia.org/wiki/SOC_2).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
16. Wikipedia, [Segregation of duties](https://en.wikipedia.org/wiki/Segregation_of_duties).
17. Wikipedia, [Internal audit](https://en.wikipedia.org/wiki/Internal_audit).
