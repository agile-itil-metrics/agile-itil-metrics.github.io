# Risk ve kontrol metrikleri

**Risk çalışması, neyin ters gidebileceği ve bu konuda ne yaptığımız üzerine süregelen bir konuşmadır; bu yüzden kaydı kısa ve canlı tutun, önemli olan kontrolleri test edin ve belirsizliği düzenli gösteren her sayıdan şüphe edin.**

## Genel bakış ve motivasyon

Bir hizmette yapılan her değişiklik risk taşır, ona dokunmamak da öyle. [Risk yönetimi](https://en.wikipedia.org/wiki/Risk_management), risklerin belirlenmesi, değerlendirilmesi ve önceliklendirilmesidir; ardından bunları azaltmak, kabul etmek, devretmek ya da önlemek için eşgüdümlü eylem gelir. ITIL riski her uygulamanın içinden geçen bir iplik olarak ele alır: değişiklik yetkilendirme bir değişikliğin ne kadar incelemeye ihtiyaç duyduğuna karar verir, hizmet sürekliliği kesintiye karşı plan yapar, bilgi güvenliği tehditlere karşı korur. Çevik ve DevOps çalışma biçimleri riski farklı bir yolla azaltır. Hızlı geri bildirimle ve geri alma yeteneğiyle sürekli teslim edilen küçük değişiklikler, her değişikliği daha az tehlikeli kılar ve sorunları daha erken görünür hale getirir.

İki görüş metriklerde buluşur. Sürekli teslim eden bir takımın yine de başlıca risklerini, bunların sahiplerini ve güvendiği kontrollerin çalışıp çalışmadığını bilmesi gerekir. Ağır onayda ısrar eden bir risk işlevinin yine de kontrollerinin zararı azalttığına ve insanları yalnızca yavaşlatmadığına dair kanıta ihtiyacı vardır. Bu konu her ikisi için de ölçümleri verir ve güvenlik ile denetim üzerine komşu konularda anlatılan uygulamalara dayanır (bkz. Konu 8.1 “Güvenlik olayı ve zafiyet metrikleri” ve Konu 8.3 “Uyum ve denetim metrikleri”).

Dört terim sık sık geçer.

- **Risk:** gerçekleşirse hedefleri etkileyen belirsiz bir olay veya durum. Bir nedeni, bir olayı ve bir sonucu vardır; olasılığı ve etkisi de genellikle bilinmez, tahmin edilir.
- **Risk kaydı:** belirlenmiş risklerin sahipleri, derecelendirmeleri ve yanıtlarıyla listesi. [Risk kaydı](https://en.wikipedia.org/wiki/Risk_register), güncel olduğunda ve okunduğunda bir çalışma aracıdır; değilse bir uyum nesnesidir.
- **Kontrol:** bir riski azaltan eylem veya mekanizma; örneğin bir inceleme, otomatik bir test, bir onay, görevler ayrılığı veya bir izleme uyarısı. Bir kuruluşun güvendiği kontroller kümesi, onun [iç kontrol](https://en.wikipedia.org/wiki/Internal_control) sistemidir.
- **Temel risk göstergesi (KRI):** kayıp gerçekleşmeden önce bir riskin düzeyindeki değişimi sinyalleyen ölçüm. [Temel risk göstergesi](https://en.wikipedia.org/wiki/Key_risk_indicator), bir olayın önüne geçtiğinde ve biri ona göre hareket ettiğinde yararlıdır.

Risk nicelleştirmenin bilinen zayıflıkları vardır. Olasılığı etkiye karşı renkli hücrelerden oluşan bir ızgarada gösteren [risk matrisi](https://en.wikipedia.org/wiki/Risk_matrix) yaygın biçimde kullanılır ve yaygın biçimde eleştirilir: derecelendirmeler özneldir, farklı riskler farklı nedenlerle aynı hücreye düşebilir ve sıralı puanları çarpmanın aritmetiği sağlam bir temele sahip değildir. Bazen [kara kuğu kuramı](https://en.wikipedia.org/wiki/Black_swan_theory) üzerinden betimlenen nadir ve ağır olaylar, özellikle derecelendirmesi zor olaylardır. Dürüst yanıt, matrisi bir konuşma yardımcısı olarak kullanmak, aralıklar göstermek ve onu kontroller ve olaylar hakkındaki kanıtla desteklemektir. Riski sahiplenen takımları, onu gözetleyen takımlardan ve bağımsız güvenceden ayıran üç savunma hattı çerçevesi roller için bir yapı sunar; birinci hat, yani teslimat ve operasyon takımları, risklerini gerçekten sahiplendiğinde en iyi çalışır.

[Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law)ndan çıkan koruma önlemi risk raporlamasına özel bir biçimde uygulanır. Kırmızı bir derecelendirme inceleme getirdiğinde insanlar riskleri sarı olarak derecelendirir. Kapatılmış bir risk başarı sayıldığında insanlar riskleri ele almadan kapatır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Kaydı kısa ve güncel tutun.** İncelenen, iyi sahiplenilmiş birkaç risk, incelenmeyen yüzlercesinden üstündür.
- **Birinci hattın risklerini sahiplenmesini sağlayın.** İşe en yakın insanlar onu en iyi bilir.
- **Güvendiğiniz kontrolleri test edin.** Hiç test edilmemiş bir kontrol bir umuttur.
- **Birinin harekete geçtiği öncü göstergeleri tercih edin.** Yanıt planı olmayan bir gösterge süstür.
- **Yanlış kesinlik değil, aralıklar ve kanıt gösterin.** Derecelendirmeler tahmindir.
- **Değişikliği küçük ve geri alınabilir yaparak riski azaltın.** Hızlı geri almayla sürekli teslimat bir kontroldür.
- **Riskten suçlamasız söz edin.** Dürüst bildirim, tüm uygulamanın ham maddesidir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Risk inceleme güncelliği | Açık risklerin sahibi tarafından kararlaştırılan aralık içinde incelenen oranı | aralık içinde incelenen riskler / açık riskler | yüzde | Risk kaydı inceleme tarihleri | Risk yönetimi; sürekli iyileştirme | Planlama ve gözden geçirme konuşmalarında incelenen riskler | Aylık |
| Sahip kapsamı | Sahipliği kabul etmiş, adı belli, güncel bir sahibi olan açık risklerin oranı | doğrulanmış güncel sahibi olan riskler / açık riskler | yüzde | Kişi dizinine bağlanmış risk kaydı | Risk yönetimi | Birikim listesindeki takım sahipli riskler | Aylık |
| Kontrol testi kapsamı | Gereken döngü içinde işleyiş açısından test edilen temel kontrollerin oranı | döngüde test edilen temel kontroller / temel kontroller | yüzde | Kontrol kaydı ve test kayıtları | Risk yönetimi; bilgi güvenliği yönetimi | İşlem hattındaki otomatik denetimler | Üç aylık |
| Kontrol etkinliği oranı | Test edilen kontrollerin tasarlandığı gibi çalıştığı bulunan oranı | etkili bulunan kontroller / test edilen kontroller | yüzde | Test sonuçları | Risk yönetimi; sürekli iyileştirme | Doğru nedenlerle geçen otomatik testler | Üç aylık |
| KRI ihlali yanıt süresi | Bir temel risk göstergesinin eşiğini aşmasından kaydedilmiş bir karara kadar geçen süre | ihlalden karara kadar geçen saat veya günlerin medyanı ve 85. yüzdeliği | saat veya gün | KRI izleme ve karar günlüğü | Risk yönetimi; izleme ve olay yönetimi | Bir üretim sinyaline tepki | Aylık |
| Ele alma planı zamanındalığı | Risk ele alma işlemlerinin taahhüt edilen tarihe kadar tamamlanan oranı | tarihine kadar tamamlanan ele alma işlemleri / dönemde vadesi gelen ele alma işlemleri | yüzde | Risk kaydı ve eylem izleyici | Risk yönetimi; sürekli iyileştirme | Teslim edilen iyileştirme eylemleri | Üç aylık |
| Riske dayalı değişiklik payı | Kontrol kanıtı eklenmiş, riske dayalı yollarla onaylanan değişikliklerin oranı | gerekli kanıtla riske dayalı yolla onaylanan değişiklikler / dönemdeki değişiklikler | yüzde | Değişiklik kayıtları | Değişiklik yetkilendirme; risk yönetimi | Otomatik denetimlerle sürekli teslim edilen değişiklikler | Aylık |

İnceleme aralığını ve temel kontrol listesini kayıtta tanımlayın. Bir kontrol, yalnızca test tasarımı değil, işleyişin kanıtını incelediğinde “test edilmiş” sayılır. KRI saati, izleme sisteminin kaydettiği şekilde göstergenin eşiği aştığı anda başlar ve yazıya dökülmüş bir kararda sona erer; bu karar harekete geçmek, kabul etmek ya da eşiği değiştirmek olabilir. Emekliye ayrılan riskleri paydadan ancak kayıtlı bir kapatma kararından sonra çıkarın.

## Öneriler

### Risk konuşmasını canlı tutun

**1. Kaydı kısa tutun ve her riski standart biçimde yazın.** “[Neden] nedeniyle, [olay] gerçekleşebilir ve [sonuç] ortaya çıkabilir.” biçiminde bir cümle kullanın. Kaydı, bir kararı ya da planı değiştirecek risklerle sınırlayın. Yinelenenleri birleştirin, belirsiz olanları bölün ve geçmiş riskleri emekliye ayırın. İnsanların tartıştığı birkaç düzine riskin listesi, kimsenin okumadığı binlercesinden daha değerlidir.

**2. Her riski harekete geçebilecek bir sahibe atayın.** Sahip, yanıt üzerinde yetkisi olan kişidir; genellikle risk işlevinde değil, teslimat veya operasyon takımındadır. Sahipliği kişiyle doğrulayın ve insanlar rol değiştirdiğinde gözden geçirin. Sahip kapsamı bunu ölçer; sahipsiz bir risk bir bulgudur.

**3. Riskleri zaten yapılan konuşmalarda inceleyin.** Ayrı bir toplantı oluşturmak yerine, en önemli riskleri planlamada, gözden geçirmede ve olay incelemelerinde gündeme getirin. Daha etkili olmanın yollarına dair düzenli yansıtma yapma çevik alışkanlığı, “bizi sırada ne incitebilir?” sorusu için doğal bir yuvadır. Sonucu kayda geçirin.

**4. Derecelendirmeleri kanıt ve aralıklarla eşleştirin.** Her önemli risk için, onu olası ya da ciddi saymanızı neyin sağladığını kaydedin: olaylar, ramak kalalar, test sonuçları, tedarikçi geçmişi. Mümkün olduğunda olasılık ve etki için bir aralık verin ve ne kadar emin olmadığınızı söyleyin. Sıralı puanları tek bir sayıda birleştirip bir ölçüm gibi ele almayın. Bir matris kullanıyorsanız, bir tartışmayı başlatmak için kullanın (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

### Kontrolleri test edin

**5. Temel kontrolleri ve her birinin ne işe yaradığını adlandırın.** Her büyük risk için, güvendiğiniz birkaç kontrolü ve her birinin başarısızlığının neye benzeyeceğini listeleyin. Yüzlerce küçük faaliyeti sıralayan bir kontrol kaydı, önemli olanları gizler. İşlem hattındaki otomatik kontrolleri, örneğin testleri, politika denetimlerini ve onay kapılarını dahil edin.

**6. Yalnızca tasarımı değil, işleyişi test edin.** Tasarım incelemesi, kontrolün işletilseydi çalışıp çalışmayacağını sorar. İşleyiş testi, kontrolün dönem içinde işletilip işletilmediğini ve çalışıp çalışmadığını kanıt örneklerini inceleyerek sorar. Testleri riske uygun bir döngüde planlayın, sonuçları kaydedin ve başarısızlıkları takip edin. Mümkün olduğunda kanıtı otomatikleştirin, böylece test sürekli gerçekleşir.

**7. Kontrol başarısızlıklarını bilgi olarak ele alın.** Başarısız bir test, kontrol sisteminin çalışmasıdır. Başarısızlığı kaydedin, nedenini sorun ve kök nedeni düzeltin. Kontrol etkinliği oranı takiple birlikte okunmalıdır: hızla bulunup düzeltilen başarısızlıklar, zayıf testten gelen kusursuz bir orandan daha sağlıklıdır.

**8. Değer kattığı yerde bağımsız güvence kullanın.** İç denetim veya bağımsız bir gözden geçirici, birinci hattın sahip olduğu ve ikinci hattın gözetlediği kontrolleri test edebilir. Bağımsızlık, kendi işinizi notlandırmaya karşı korur. Takımların aynı şey için üç grup tarafından test edilmemesi için eşgüdüm sağlayın.

### Göstergeleri ve kararları iyi kullanın

**9. Büyük risk başına birkaç öncü gösterge seçin.** Bir temel risk göstergesinin ölçülmesi ucuz olmalı, bir nedene bağlanmalı ve bir eşik ile bir yanıtla eşlenmelidir. Örneğin, en eski kritik zafiyetin yaşı güvenlik riskini, acil işlem gerektiren değişikliklerin oranı da değişiklik riskini sinyaller. Göstergeye kimin baktığını ve eşikte ne yapacağını tanımlayın (bkz. Konu 8.1 “Güvenlik olayı ve zafiyet metrikleri”).

**10. Her ihlalde kararı kaydedin.** Bir gösterge eşiği aştığında biri karar verir: harekete geçmek, kabul etmek ya da eşiği ayarlamak. Kararı ve gerekçeyi yazın. Bu, eşiklerin iyi ayarlanıp ayarlanmadığını ve yanıtın zamanında olup olmadığını gösteren bir geçmiş oluşturur.

**11. Riske dayalı onayı değişiklik için varsayılan yapın.** Sürekli teslimat ortamında, genel onay kurullarını riske dayalı yollarla değiştirin: düşük riskli standart değişiklikler için otomatik denetimler ve akran incelemesi, yüksek riskli az sayıdaki değişiklik için daha kapsamlı inceleme (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”). Kontrollerin çalıştığına dair kanıtı ekleyin. Bu, riski ve gecikmeyi birlikte azaltır, çünkü otomatik kanıtlı küçük değişiklikler, imzalı büyük olanlardan daha güvenlidir.

**12. Kayıplardan ve ramak kalalardan öğrenin.** Olaylardan ve ramak kalalardan sonra kaydı güncelleyin: risk orada mıydı, iyi derecelendirilmiş miydi, kontrol çalıştı mı? Yanıtları her ikisini de iyileştirmek için kullanın. Olaylar ile kayıt arasındaki döngü, kaydı dürüst tutan şeydir (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşlenen koruma önlemi metriği veya uygulaması |
| --- | --- | --- |
| Risk inceleme güncelliği | Riskleri tartışma yapmadan incelenmiş olarak işaretlemek; aralığı değiştirmek | İncelemeleri içerik açısından örneklemek; kayıtta sabit aralık |
| Sahip kapsamı | Sahiplerini haberdar etmeden atama yapmak; yetkisi olmayan kıdemli birini adlandırmak | Sahip doğrulaması; sahiplerin yanıta göre hareket edebildiğini kontrol etmek |
| Kontrol testi kapsamı | Kolay kontrolleri test etmek; tasarım incelemelerini işleyiş testi olarak saymak | Temel kontrol listesinin ikinci bir tarafça belirlenmesi; test türünün kaydedilmesi |
| Kontrol etkinliği oranı | Küçük örneklemlerle test etmek; geçecek örnekleri seçmek | Sahibinden bağımsız örnekleme yöntemi; örneklem büyüklüğünün kaydedilmesi |
| KRI ihlali yanıt süresi | İhlalden sonra eşiği değiştirmek; içeriği olmayan bir karar kaydetmek | Eşik değişikliği günlüğü; karar içeriğinin örneklenmesi |
| Ele alma planı zamanındalığı | Kolay tarihler belirlemek; tamamlanmayı yeniden tanımlamak | Onay sırasında sahibiyle üzerinde anlaşılan tarihler; risk derecelendirmesinin değiştiğini kontrol etmek |
| Riske dayalı değişiklik payı | İncelemeden kaçınmak için değişiklikleri düşük riskli olarak sınıflandırmak; kontrollerce üretilmemiş kanıt eklemek | Sınıflandırmayı kurallara karşı örneklemek; işlem hattından otomatik kanıt |

Sağlıklı bir okuma şudur: insanların hakkında tartıştığı kısa bir kayıt, risklerini bilen sahipler, bazı başarısızlıkların bulunup düzeltildiği test edilmiş kontroller, gerçek kararlara yol açan göstergeler ve küçük değişiklikler için daha az ağır onay.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yanı | Zayıf yanı |
| --- | --- | --- |
| Risk matrisi | Hızlı, görsel, konuşmayı başlatıcı | Öznel; yanlış kesinlik; sıralı aritmetik |
| Nicelleştirilmiş aralıklar | Belirsizlik konusunda daha dürüst | Veri ve beceri gerektirir; emek |
| Ağır onay kurulları | Görünür kontrol | Yavaş; değişikliğin toplu hale getirilmesini teşvik eder |
| Riske dayalı otomatik denetimler | Hızlı ve tutarlı | Mühendislik gerektirir; otomatik denetimler yanılabilir |
| Merkezi risk işlevi riskleri sahiplenir | Tutarlılık | İşten uzak; sahipler ilgisiz |
| Birinci hat sahipliği | Bilgi ve hesap verebilirlik | Değişken kalite; gözetim gerektirir |
| Dönemsel kontrol testi | Kararlı kontroller için verimli | Testler arasındaki sapmayı kaçırır |
| Sürekli kontrol izleme | Zamanında kanıt | Araç emeği; gürültü |

Düz yazıyla yanıt şudur: sahipliği takımlara verin, hafif merkezi gözetim ve bağımsız test uygulayın, mümkün olduğunda kanıtı otomatikleştirin ve derecelendirmeleri konuşma için istemler olarak kullanın.

## Takımınızla tartışılacak sorular

**1. Önümüzdeki yıl bu hizmeti en çok incitmesi olası üç risk nedir ve her birinin sahibi kim?**
Her üyeden özel olarak üç risk yazmasını isteyin, sonra karşılaştırın. Örtüşmeler ve farklılıkların her ikisi de bilgi vericidir. Kolaylaştırıcı, her riske kimin karşılık vereceğini kaydetmelidir. İlk üç üzerinde anlaşın ve sahipleri doğrulayın.

**2. En çok hangi kontrole bağımlıyız ve çalıştığını en son ne zaman kontrol ettik?**
Bir kod inceleme kuralı, bir yedekleme ya da bir onay adımı gibi bir kontrol seçin. İşleyişinin kanıtının en son ne zaman incelendiğinin izini sürün. Kimse bilmiyorsa bir test planlayın. Konuşma, tasarım ile işleyiş arasındaki farkı gösterir.

**3. Bir derecelendirmeyi sarıdan kırmızıya değiştirmemizi ne sağlar ve bunu kim fark eder?**
Göstergeleri ve eşikleri tartışın. Takımın dikkat çekmemek için bir derecelendirmeyi hiç düşürüp düşürmediğini ve buna hangi baskının yol açtığını sorun. Hangi kanıtın bir değişikliği haklı çıkaracağı ve kırmızı demenin nasıl güvenli bir şey haline getirileceği üzerinde anlaşın.

**4. Hangi onaylar riski azaltmadan değişikliklerimizi yavaşlatıyor?**
Tipik bir değişikliğin ihtiyaç duyduğu onayları listeleyin ve her biri için hangi riski ele aldığını ve hiç bir değişikliği durdurup durdurmadığını sorun. Birini otomatik bir denetimle değiştirmeyi önerin. Hangi kanıtın değişikliğin güvenli olduğunu göstereceği üzerinde anlaşın.

**5. Bir kontrol başarısız olduğunda bunu nasıl öğrendik ve ne yaptık?**
Yakın zamanlı bir başarısızlığı hatırlayın. Test ile mi, bir olayla mı yoksa bir denetçi tarafından mı bulundu? Daha güçlü bir döngünün nasıl görüneceğini tartışın. Bunu bulan kişiye nasıl davranıldığını da ekleyin.

**6. Hangi riskleri kabul ettik ve bu kararı ne zaman gözden geçiriyoruz?**
Kabul edilmiş riskleri ve inceleme tarihlerini listeleyin. Her birinin bir sahibi ve bir gerekçesi olduğunu kontrol edin. İnceleme tarihi olmayan kabul edilmiş risk, kimsenin izlemediği bir risktir.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları operasyonel riskin çoğunu sahiplenir. Kendi risklerinin kısa bir listesini tutmalı, bunları planlamada ve gözden geçirmede tartışmalı ve kanıtın otomatik olması için kontrolleri işlem hattına yerleştirmelidir. Düşük riskli değişikliklerin akmasına izin veren riske dayalı değişiklik yollarından yararlanırlar ve neyin ters gidebileceği konusunda dürüst olmalıdırlar.

### Hizmet ve operasyon takımları

Operasyon takımları kontrolleri işletir: yedeklemeler, izleme, erişim incelemeleri ve kurtarma testleri. İşleyiş kanıtını saklamalı, kontrolleri düzenli bir döngüyle test etmeli ve gösterge ihlallerini erken dile getirmelidir. Ağır kontrollerin maliyetini onlar taşır ve hangilerinin az katkı sağladığını söylemelidirler.

### Liderlik ve yönetişim

Liderler risk iştahını belirler ve ne kadar sürtünmenin kabul edilebilir olduğuna karar verir. Sahipleri ve kanıtıyla en önemli risklerin kısa bir listesini istemeli, kırmızı derecelendirmeleri hoş karşılamalı, kontrol testini finanse etmeli ve bağımsız güvenceyi desteklemelidir. Yönetişim, kaydın olayları ve ramak kalaları yansıttığını kontrol etmeli ve düzenli görünen raporları ödüllendirmemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar gerçekleşen risklerin sonuçlarına katlanır ve çoğu zaman bunları kayıttan önce bilir. Endişelerini işaretleyebilecekleri bir yola sahip olmalı ve gizlilik sınırları içinde kendilerini etkileyen risklerden haberdar edilmelidirler. Olay ve değişikliklerle ilgili deneyimleri risk incelemeleri için kanıttır.

## Uygulamada: çevik bir ITIL örneği

Ulusal bir enerji şirketinin dijital grubu; müşteri faturalandırmasını, bir mobil uygulamayı ve şebeke operasyonlarıyla entegrasyonları işletiyor. Aşağıdaki rakamlar açıklayıcıdır.

Grubun risk kaydında 340 girdi var ve en son üç yıl önce temizlenmiş. Risk inceleme güncelliği yüzde 22 ve 61 riskin sahibi ayrılmış. Matris 85 riski kırmızı gösteriyor ve raporu kimse okumuyor. Yeni hizmet güvencesi başkanı bir sıfırlama öneriyor. Teslimat takımlarıyla birlikte kaydı bir kararı değiştirecek risklere indirerek 38'de bitiriyor. Her birini, harekete geçebilecek takımdaki adı belli bir sahibe atıyor ve onlar bunu doğruluyor. 12 temel kontrol seçiyor ve her biri için tasarımı incelemek yerine işleyişi test ediyor. Beşi başarısız oluyor: iki yedek geri yükleme hiç test edilmemişti, bir erişim incelemesi atlanmıştı ve iki değişiklik onayı test kanıtı olmadan imzalanmıştı.

Takım başarısızlıkları düzeltiyor ve standart değişiklikler için değişiklik onay kurulunu riske dayalı yollarla değiştiriyor. Kontroller otomatik testler ve akran incelemesi; işlem hattı kanıtı değişiklik kaydına ekliyor. Her büyük risk, eşikleri ve yanıtlarıyla bir ya da iki öncü gösterge alıyor. Uzamış faturalandırma kesintisi riski için göstergeler, en eski kritik zafiyetin yaşı ve çeyrekteki başarısız yedek geri yükleme sayısı. İlk çeyrekte sahipler 38 riskin tamamını doğruluyor, inceleme güncelliği yüzde 91, kontrol etkinliği oranı ilk testte 12 kontrolden 7'si ve düzeltmelerden sonra 12'nin 12'si, ortanca KRI ihlali yanıt süresi ise 2 gün. Riske dayalı yollardan geçen değişikliklerin payı yüzde 64.

Baş risk sorumlusu, kırmızı risklerin sayısının bir yıl içinde yarıya inmesini istiyor. Hizmet güvencesi başkanı, bunun yerine ele alma planı zamanındalığının ve kontrol etkinliğinin izlenmesini öneriyor; kırmızı risklerin sayısının yeniden derecelendirmeyle düşebileceğini ve dürüst kırmızı derecelendirmeleri görmeyi tercih ettiğini açıklıyor. Karar kaydediliyor ve bir sonraki çeyreğin raporu, her düşürmenin ardındaki örneklenmiş kararları içeriyor.

## Sektör mercekleri

**Girişim.** Riskler çoğunlukla paranın bitmesi, kilit kişilerin kaybı ve büyük bir kesinti üzerinedir. İlk beşin tek sayfalık bir listesini tutun, aylık inceleyin ve yedekleri ile geri yüklemeleri test edin. Kontrolleri en baştan işlem hattına yerleştirin; sonradan eklemekten daha ucuzdur.

**Küçük işletme.** Bir avuç risk baskındır: kilit kişi bağımlılığı, tek bir tedarikçi, fidye yazılımı ve veri kaybı. Sahipleriyle kısa bir liste tutun, geri yüklemeleri test edin ve sigorta ile iletişim bilgilerini güncel tutun. Ağır çerçevelere direnin ve onlardan uygun olanı ödünç alın.

**Büyük kuruluş.** Ölçek, ortak bir sınıflandırma, hafif bir kayıt aracı ve uygulamada üç savunma hattı gerektirir. Birinci hattın risklerini sahiplenmesini sağlayın, ikinci hattı küçük ve danışmanlık yapan bir hat olarak tutun ve bağımsız testi verimli kılın. Denetim, risk ve uyum arasında yinelenen testlerden kaçının.

**Kamu sektörü.** Risk yönetimi çoğu zaman standart çerçeveler, denetim komiteleri ve kamuya raporlamayla birlikte resmi bir görevdir. Gerekli çerçeveyle uyum sağlayın, risk iştahı bildirimlerini belgeleyin ve kanıtı saklayın. Kamusal hesap verebilirlik dürüst kırmızı derecelendirmeleri daha değerli ve aynı zamanda daha zor kılar (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler, sahiplerin riskleri incelemeye ayırdığı zaman, temel kontrolleri tanımlamak ve test etmek için gösterilen emek, zaten yoksa kayıt ve gösterge izleme için araçlar ve bağımsız güvence maliyetidir. Kanıt toplamayı otomatikleştirmek mühendislik emeği gerektirir ve sonra yinelenen maliyeti azaltır.

Getiriler, daha az sürpriz, daha hızlı ve daha hafif değişiklik onayı ve daha inandırıcı güvencedir. Budanmış bir kayıt ve riske dayalı değişiklik yolları, büyük onay organlarının tükettiği zamanı kazandırır. Bir olaydan önce bulunan başarısız kontrol testleri, fiyatlandırması zor kayıpları önler. Gerekçeyi kendi verinizden kurun: onay başına harcanan zaman öncesi ve sonrası, testle bulunan kontrol başarısızlıklarının olaylar veya denetçilerce bulunanlara oranı ve bir kontrolün önleyebileceği geçmiş olayların maliyeti. İzlenebilir bir kaynağı ve yöntemi olmayan sektör kayıp istatistiklerini alıntılamaktan kaçının.

## Anti-desenler ve tuzaklar

- **Sonsuza dek büyüyen bir kayıt.** Kimse okumaz. Önemli olan risklere kadar budayın.
- **Kanıtsız derecelendirmeler.** Renkli görüşlerdir. Kanıt ve aralık ekleyin.
- **Yalnızca isim olarak sahipler.** Risk, harekete geçemeyen birindedir. Sahipliği doğru kişilerle doğrulayın.
- **Tasarımı test edip güvence demek.** Çalışabilecek bir kontrol çalışmamış olabilir. İşleyişi test edin.
- **Yalnızca kırmızı risklerin sayısını raporlamak.** Sayılar yeniden derecelendirmeyle düşer. Ele alma işlemlerine ve kontrol sonuçlarına bakın.
- **Her değişiklik için onay kurulları.** Küçük değişiklikleri yavaşlatır ve toplulaştırmayı öğretir. Riske dayalı yollar kullanın.
- **Kırmızı derecelendirmeleri cezalandırmak.** Riskler o zaman gizlenir. Erken uyarıyı ödüllendirin.
- **Ayrı risk ve teslimat kültürleri.** Takımlarla değil takımlara yapılan risk çalışması, uyum tiyatrosu üretir.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Kayıt ve sahiplik | Uzun, bayat liste | Kayıt var, kısmen sahipli | Doğrulanmış birinci hat sahipleri ve inceleme tarihleriyle kısa kayıt | Takım konuşmalarında incelemeler; kanıt ve aralıklar eklenmiş | Riskler, ortak sahiplerle takımlar ve tedarikçiler arasında paylaşılır |
| Kontroller | Çalıştığı varsayılır | Tasarım belgelenmiş | Temel kontroller adlandırılmış; bir döngüyle işleyiş testleri | Başarısızlıklar takip edilir; kanıt mümkün olduğunda otomatikleştirilir | İnsan gözetimi ve bağımsız güvenceyle sürekli kontrol izleme |
| Kararlar ve değişiklik | Komite onayları | Bazı standart değişiklikler önceden onaylı | Kanıt eklenmiş, riske dayalı yollar | Eşikli göstergeler ve kaydedilmiş kararlar; yollar sonuçlardan ayarlanır | Risk kararları, kuruluş ve tedarik zinciri genelinde işlem hatlarına gömülüdür |

## Kontrol listesi

- [ ] Kayıt kısa ve riskler neden, olay ve sonuç biçiminde yazılmış.
- [ ] Her riskin harekete geçebilecek, doğrulanmış bir birinci hat sahibi var.
- [ ] Riskler, takımın düzenli konuşmaları içinde inceleniyor.
- [ ] Temel kontroller adlandırılmış ve belirtilen bir döngüyle işleyiş açısından test ediliyor.
- [ ] Kontrol başarısızlıkları kaydediliyor, açıklanıyor ve düzeltiliyor.
- [ ] Her büyük riskin eşikleri ve yanıtlarıyla bir ya da iki öncü göstergesi var.
- [ ] Gösterge ihlallerindeki kararlar kaydediliyor.
- [ ] Riske dayalı değişiklik yolları var ve kanıt mümkün olduğunda otomatik ekleniyor.
- [ ] Kabul edilmiş risklerin bir sahibi, bir gerekçesi ve bir inceleme tarihi var.
- [ ] Olaylar ve ramak kalalar kaydı güncelliyor.

## Yapay zekâ istemleri

**Riskleri standart biçimde yeniden yazın.**

```text
Risk kaydımızdan [sayı] girdi aşağıda: [hassas ayrıntılar çıkarılmış olarak
yapıştırın]. Her birini "[Neden] nedeniyle, [olay] gerçekleşebilir ve
[sonuç] ortaya çıkabilir." biçiminde yeniden yazın. Belirsiz, yinelenen veya
aslında zaten gerçekleşmiş sorunlar olan girdileri işaretleyin. Hangilerinin
birleştirilebileceğini veya emekliye ayrılabileceğini önerin. Onları
derecelendirmeyin. Varsayımlarınızı ve sahiplerle neyin doğrulanacağını
listeleyin.
```

**Bir kontrol testi tasarlayın.**

```text
[açıklayın, örneğin faturalandırma sistemi için üç aylık erişim incelemesi]
kontrolü için bir işleyiş testi tasarlayın. Hangi kanıtın inceleneceğini,
önyargısız bir örneklemin nasıl seçileceğini, neyin geçme veya kalma
sayılacağını, sonuçların nasıl kaydedileceğini ve kanıt toplamanın zamanla
nasıl otomatikleştirileceğini ekleyin. Belirli araçları varsaymayın.
Varsayımlarınızı ve test tasarımındaki riskleri listeleyin.
```

**Bir risk için öncü göstergeler önerin.**

```text
Risk: [neden, olay, sonuç biçiminde açıklayın]. Ölçmesi ucuz ve nedene bağlı
en fazla üç öncü gösterge önerin; eşik ihlali için önerilen bir yanıtı ve her
göstergenin nasıl yanıltabileceğini ekleyin. Eşik değerleri uydurmayın; bunları
kendi verimizden nasıl kalibre etmemiz gerektiğini açıklayın. Varsayımlarınızı
listeleyin.
```

**Bir değişiklik onay sürecini inceleyin.**

```text
[değişiklik türü] için değişiklik onay sürecimiz şöyle: [adımları, onaylayanları
ve tipik gecikmeleri açıklayın]. Riski azaltmadan gecikme ekleyen adımları
belirleyin, otomatik denetimler ve kanıtla riske dayalı bir alternatif önerin ve
riskin artıp azaldığını bilmek için neyi ölçmemiz gerektiğini söyleyin.
Araştırma sonucu iddia etmeyin. Varsayımlarınızı ve liderlik girdisi gerektiren
kararları listeleyin.
```

## Yapay zekâ becerileri

- [Çevik ITIL Metrikleri becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir risk veya kontrol metriği için eşlenen koruma önlemini bulmak üzere kullanın.
- [Çevik ITIL Metrikleri bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir risk metriği girdisinin manipülasyon yöntemini, koruma önlemini ve kanıt kuralını taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Risk kaydını kısa tutun, harekete geçebilecek takımlara sahiplendirin ve zaten var olan konuşmalarda inceleyin.
- Temel kontrollerin işlediğini test edin, başarısızlıkları yararlı bilgi olarak ele alın ve kanıtı otomatikleştirin.
- Eşikleri, yanıtları ve kaydedilmiş kararları olan birkaç öncü gösterge kullanın.
- Genel onayı, otomatik kanıtla desteklenen riske dayalı değişiklik yollarıyla değiştirin.
- Yanlış kesinlik yerine aralıklar ve kanıt gösterin, matrisleri konuşma başlatmak için kullanın.
- Kırmızı derecelendirmeyi vermeyi güvenli kılın ve kayıplardan ile ramak kalalardan öğrenin.

## Kaynaklar ve ileri okuma

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
