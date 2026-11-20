# Deneyim düzeyi anlaşmaları

**Deneyim düzeyi anlaşması, “hizmet hedefini karşıladı mı?” sorusuna “kullanması nasıl hissettirdi?” sorusunu ekler. Yalnızca deneyim ölçümleri kullanıcılarla birlikte seçildiğinde ve operasyonel ölçümlerin yanında tutulduğunda işe yarar.**

## Genel bakış ve motivasyon

Bir [hizmet düzeyi anlaşması](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA), bir sağlayıcının neyi teslim etmeyi taahhüt ettiğini, genellikle sağlayıcının sayabildiği terimlerle kaydeder: kullanılabilirlik, yanıt süresi, çözüm süresi. Bu ölçümler yararlıdır ve aynı zamanda eksiktir. Bir takım panodaki her hedefi karşılayabilir; kullanıcılar ise haftalarını yavaş girişlerin etrafından dolanarak, bir hizmet masasına kendilerini tekrar anlatarak ve onayları bekleyerek geçirebilir. Yeşil raporlama ile mutsuz kullanıcılar arasındaki bu boşluğa bazen karpuz etkisi denir: dışı yeşil, içi kırmızı (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

**Deneyim düzeyi anlaşması (XLA)**, bir sağlayıcı ile bir hizmeti kullanan insanlar arasında, hizmetin vermesi gereken deneyime ilişkin bir anlaşmadır. İstenen sonuçları ve duyguları, örneğin “işe geldikten birkaç dakika içinde çalışmaya başlayabiliyorum” veya “talebimin ele alınacağına güveniyorum” gibi, ifade eder ve bunların karşılanıp karşılanmadığını gösterecek ölçümleri adlandırır. Terim BT hizmet yönetimi (ITSM) topluluğunda kullanılır ve tam tanımı yazarlara ve satıcılara göre değişir. Bir XLA'yı ITIL'in parçası olarak tanımlamadan önce çerçeve sahibinin güncel yayınlarına bakın ve hangi kullanımı izlediğinizi belirtin. Bu konu XLA'yı pratik bir fikir olarak ele alır: deneyim ölçümlerini operasyonel ölçümlerin yanına yerleştiren bir anlaşma.

Fikrin kökleri BT'nin dışındadır. [Kullanıcı deneyimi](https://en.wikipedia.org/wiki/User_experience), bir kişinin bir ürünü, sistemi veya hizmeti kullanırkenki genel deneyimidir; [müşteri deneyimi](https://en.wikipedia.org/wiki/Customer_experience) ise bir müşterinin bir kurumla zaman içindeki etkileşimlerinin toplamıdır. [Kullanılabilirlik](https://en.wikipedia.org/wiki/Usability), insanların hedeflerine ne kadar etkili, verimli ve tatmin edici biçimde ulaşabildiğiyle ilgilenir. Çevik takımlar bu alanı tasarım odaklı düşünmeden ve kullanıcı araştırmasından, ayrıca kullanıcıların çalışan yazılıma tepki verdiği paydaş gözden geçirmelerinden tanır. XLA aynı dikkati çalışma zamanındaki hizmete getirir.

Deneyimi ölçmek zordur ve çarpıtmak kolaydır. Yalnızca mutlu kullanıcılara ulaşan bir anket, yükselmesi için ayarlanmış bir duygu puanı veya kimsenin açıklayamadığı tek bir “deneyim endeksi”, oynanmış bir kayıt süresi kadar kesin biçimde yanıltır. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) kaynaklı koruma önlemi tam olarak geçerlidir: deneyim ölçümleri konuşma başlatıcılardır, kota değil (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Bu konu, önceki konudaki anket ölçümleri üzerine kuruludur (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”) ve sormaya dayanmayan davranışsal ve yolculuk temelli ölçümler ekler.

## Temel ilkeler

- **İnsanların önemsediği sonuçlarla başlayın.** Kullanıcılara iyi bir günün nasıl göründüğünü sorun ve anlaşmaları onların sözcükleriyle yazın.
- **Deneyimi operasyonlarla eşleştirin.** Bir XLA, bir SLA'nın yanında durur, yerine geçmez.
- **Farklı açılardan birkaç ölçüm kullanın.** İnsanların söylediklerini, yaptıklarını ve sistemin kaydettiklerini birleştirin.
- **Yalnızca temas noktalarını değil, yolculukları da ölçün.** Bir deneyim, ihtiyaçtan sonuca uzanan bütün yoldur.
- **Belirsizlik konusunda dürüst olun.** Deneyim verisi gürültülüdür ve küçük gruplar korunmaya ihtiyaç duyar.
- **Hedefleri kullanıcılarla belirleyin ve gözden geçirin.** XLA, tarif ettiği insanlarla birlikte gözden geçirilen yaşayan bir anlaşmadır.
- **Deneyim verisini bireyleri sıralamak için asla kullanmayın.**

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Deneyim puanı | Bir hizmet ve hedef kitle için kararlaştırılmış bir deneyim ifadesinin ortalama derecelendirmesi | sabit bir ölçekte tek bir ifadeye verilen geçerli yanıtların ortalama derecesi | ölçek puanı | Takvimle gönderilen kısa nabız anketi | Hizmet düzeyi yönetimi; sürekli iyileştirme | Paydaş gözden geçirme geri bildirimi; ürün sonucu gözden geçirmesi | Aylık |
| Duygu eğilimi | Bir hizmete ilişkin serbest metin yorumlarındaki tonun yönü | olumlu kodlanan yorumların payı eksi olumsuz kodlanan yorumların payı, dönem başına | yüzde puanı | Kodlanmış anket yorumları ve kayıt yorumları | Sürekli iyileştirme | Geriye dönük değerlendirme temaları | Aylık |
| Kullanıcı başına sürtünme olayı | Bir kullanıcının sorunla karşılaştığına dair sinyallerin sayısı, etkin kullanıcılara göre normalleştirilmiş | (tekrar temaslar + yeniden açılan kalemler + belirlenen sayıyı aşan başarısız girişler + terk edilen talepler) / etkin kullanıcılar | kullanıcı başına olay | Kayıt sistemi, kimlik günlükleri, talep portalı | Hizmet masası; olay yönetimi | Kullanımda bulunan kusurlar | Aylık |
| BT sorunlarına kaybedilen zaman | Kullanıcıların bir dönemde hizmet sorunlarına kaybettiği tahmini zaman | kullanıcı başına bildirilen kayıp dakika veya etkilenen kullanıcılarla ağırlıklandırılmış, bozulmuş durumda ölçülen süre | kullanıcı başına dakika | Nabız anketi; kullanıcı sayılarına bağlanan izleme | Kullanılabilirlik yönetimi; olay yönetimi | Engellerde kaybedilen çevrim süresi | Üç aylık |
| Yolculuk tamamlama oranı | Tanımlı bir yolculuğu terk etmeden veya yardım aramadan bitiren kullanıcıların payı | yardım teması olmadan yolculuğu tamamlayan kullanıcılar / yolculuğa başlayan kullanıcılar | yüzde | Portal analitiği; kayıt bağlantıları | Hizmet talebi yönetimi; hizmet kataloğu yönetimi | Kullanılabilirlik testlerinde görev başarısı | Aylık |
| XLA gerçekleşmesi | Dönemde karşılanan kararlaştırılmış deneyim hedeflerinin payı | karşılanan hedefler / kararlaştırılan hedefler | yüzde | XLA sicili | Hizmet düzeyi yönetimi | Teslimat hedefi gerçekleşmesi | Üç aylık |
| Deneyim farkı | Aynı hizmet için SLA gerçekleşmesi ile deneyim puanı arasındaki fark | hizmetler arasında SLA gerçekleşme sırası eksi deneyim puanı sırası veya yazılı bir karşılaştırma | sıra farkı veya not | SLA raporları ve nabız anketi | Hizmet düzeyi yönetimi | Bitti tanımı ile kullanıcı geri bildirimi | Üç aylık |

Her ölçüm için hedef kitleyi ve dönemi tanımlayın. Küçük grupların nasıl korunduğunu belirtin: örneğin on kişiden küçük hiçbir grup için sonuç gösterilmez. Sürtünme olayları sinyalleri sayar, suçlamayı değil; bu nedenle bir olay bir hizmete ve bir kullanıcı grubuna bağlanır, hiçbir zaman adı belli bir kişinin performans değerlendirmesine değil.

## Öneriler

### Anlaşmayı kullanıcılarla tasarlayın

**1. Ölçmeden önce görüşün.** Her önemli gruptan bir kullanıcı örneğiyle zaman geçirin ve sorun: Bu hizmetle iyi bir gün nasıl görünür? Zamanınızı nerede boşa harcıyor? Düzgün çalışsa neyi yapmayı bırakırdınız? [İnsan merkezli tasarım](https://en.wikipedia.org/wiki/Human-centered_design) alışkanlıklarını kullanın: gerçek işi gözlemleyin ve duyduklarınızı kullanıcının sözcükleriyle yazın. Ortaya çıkan ifadeler anlaşmanın deneyim hedefleri olur.

**2. Deneyim ifadelerini sonuç olarak yazın.** “Yeni başlayan birini ilk sabahında üretken hale getirebiliyorum”, “yeni başlayan erişim talebi iki günde çözüldü” ifadesinden daha çok şey söyler. Her ifadeyi kısa, birinci tekil kişide ve tek bir hizmete bağlı tutun. İnsanların hatırlayabilmesi için hizmet başına üç ila beş ifadeyi hedefleyin.

**3. Ölçümleri üç açıdan seçin.** Her ifade için insanların söylediklerinden bir ölçüm (bir nabız sorusu veya yorum teması), insanların yaptıklarından bir ölçüm (yolculuk tamamlama, tekrar temaslar, terk edilen talepler) ve mümkünse sistemin kaydettiğinden bir ölçüm (yolculuktaki adımların gecikmesi) seçin. Üçü uyuşmadığında araştırılacak bir şey bulmuşsunuz demektir.

**4. Hedefleri hafifçe belirleyin.** Başlangıçta kesin bir sayı yerine bir yön (“kaybedilen zamanı azalt”) ve bir gözden geçirme tarihi belirleyin. Yeni deneyim ölçümleri için kesin hedefler, ölçüm anlaşılmadan oynamayı davet eder. Bir hedef ortaya çıktığında onu bir aralık yapın ve kimin kabul ettiğini söyleyin.

### Veriyi toplayın ve okuyun

**5. Kısa, düzenli nabız soruları kullanın.** Tek bir ifadeye ilişkin, düzenli aralıklarla sorulan tek bir soru, uzun bir yıllık anketten daha kolay yanıtlanır. İfadeleri döndürün, sözcükleri kararlı tutun ve aynı kişiye belirli bir dönemde birden fazla kez sormaktan kaçının. Nabız tasarımını önceki konudaki anket ilkelerine bağlayın (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

**6. Yorumları bir yöntemle okuyun.** [Duygu analizi](https://en.wikipedia.org/wiki/Sentiment_analysis) araçları büyük hacimli metni sıralayabilir; ancak alayı, jargonu ve bağlamı yanlış okurlar. Araç çıktısını ilk geçiş olarak ele alın, her ay bir kişiye bir örnekleme kontrol ettirin ve elle kodladığınız kısa bir tema listesi tutun. Analizin amacı kullanıcılarla konuşulacak konuları bulmaktır, bir puan üretmek değil.

**7. Yolculuktan davranışsal sinyaller ekleyin.** Kullanıcıların önemsediği yolculukları, onların bilgisiyle ölçümleyin: nereden başlıyorlar, nerede bırakıyorlar ve nerede yardım istiyorlar? Sayfa yükleme sürelerinin, hataların ve adımların [gerçek kullanıcı izlemesi](https://en.wikipedia.org/wiki/Real_user_monitoring), anketlerin veremeyeceği bir görünüm sunar. Kullanıcılara ne topladığınızı söyleyin, ihtiyacınız olanla sınırlı tutun ve paylaşmadan önce toplulaştırın.

**8. Küçük grupları ve bireyleri koruyun.** Deneyim verisi kimin zorlandığını açığa çıkarabilir. Sonuçları toplulaştırın, kararlaştırılan büyüklüğün altındaki grupları bastırın ve veriyi asla performans değerlendirmelerinde kullanmayın. Ham yorumları kimin görebileceğine karar verin ve onları buna göre saklayın. Düzenlemeye tabi ortamlarda davranışsal veri toplamadan önce gizlilik uzmanlarına danışın.

### Anlaşmayı kullanın

**9. SLA ve XLA'yı yan yana gösterin.** Aynı sayfada, her hizmet için operasyonel gerçekleşmeyi ve deneyim ölçümlerini gösterin. Eşleşmenin kendisi amaçtır: düşen bir deneyim puanıyla yeşil bir SLA bir konuşma için bir uyarıdır; başarısız SLA'larla yeşil bir deneyim puanı ise kullanıcılara neyin söylenmediğine bakmayı hak eder.

**10. Kullanıcılarla düzenli bir deneyim gözden geçirmesi yapın.** Kullanıcı gruplarının temsilcileriyle üç ayda bir buluşun, veriyi gösterin, ne anlama geldiğini sorun ve denenecek bir veya iki iyileştirme üzerinde anlaşın. Hizmet masasını ve ürün takımını dahil edin; çünkü kötü bir deneyimin nedeni çoğunlukla destekte değil üründedir.

**11. Düzeltmeleri finanse edin.** Sürtünmeyi belirleyip sonra olduğu yerde bırakan bir anlaşma, kullanıcılara ölçümlerin gösteriden ibaret olduğunu öğretir. En önemli iki üç deneyim sorununu sahipleri ve tarihleriyle birikim listesine koyun ve bir sonraki gözden geçirmede bunlar üzerine raporlayın. Bu kitabın ilerleyen bölümlerindeki sürekli iyileştirme metriklerine bakın (bkz. Konu 9.5 “Sürekli iyileştirme metrikleri”).

**12. Hizmetler ve kullanıcılar değiştikçe anlaşmayı gözden geçirin.** Artık önemi kalmayan ifadeleri kaldırın ve yenilerini ekleyin. Değişiklikleri, her metrik tanımında olduğu gibi kaydedin ve eğilim grafiklerinde işaretleyin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oynanır | Eşlenen koruma metriği veya uygulaması |
| --- | --- | --- |
| Deneyim puanı | Yalnızca memnun kullanıcıları anketlemek; anketi iyi olaylardan sonraya zamanlamak; ifadeyi daha kolay katılınır olacak biçimde yeniden yazmak | Yanıt oranı ve yanıtlayıcı karışımı; kararlı ifade günlüğü; yorumları okuma |
| Duygu eğilimi | Eğilim yükselene kadar aracı veya tema listesini ayarlamak; olumsuz kanalları dışlamak | Aylık bir örneğin insan tarafından kontrolü; sabit bir kodlama kılavuzu tutma ve değişiklikleri kaydetme |
| Kullanıcı başına sürtünme olayı | Daha az olay sayılsın diye olayları yeniden tanımlamak; masaya ulaşmayı zorlaştırarak tekrar temasları caydırmak | Kanal bazında temas hacmi; hizmet masasında terk oranı (bkz. Konu 3.1 “Hizmet masası metrikleri”) |
| BT sorunlarına kaybedilen zaman | Düşük tahminleri sabitleyecek biçimde sormak; yalnızca büyük olayları saymak | Bildirilen zamanı ölçülen bozulmuş zamanla karşılaştırma; anket ifadesinin gözden geçirilmesi |
| Yolculuk tamamlama oranı | Yolculuğu, başarısızlık kapsam dışı kalacak kadar dar tanımlamak; zor vakaları farklı bir kanala yönlendirmek | Sicilde yolculuk tanımı; yardım temas oranı ve yükseltmeler |
| XLA gerçekleşmesi | Zaten karşılanmış hedefler belirlemek; çok küçük bir hedef kümesi tanımlamak | Hedef belirlemeyi kullanıcılarla gözden geçirme; gerçekleşmeyi eğilim ve hedef geçmişiyle gösterme |
| Deneyim farkı | En iyi görünen hizmetleri veya dönemleri seçmek; hangi SLA'ların karşılaştırıldığını değiştirmek | Önceden kararlaştırılmış sabit karşılaştırma kümesi; tüm hizmetleri gösterme |

Sağlıklı bir okuma şudur: yorumlarla ve kullanıcı gözden geçirme konuşmasıyla uyuşan bir deneyim resmi, yavaş ve takımın açıklayabileceği nedenlerle değişen küçük bir ölçüm kümesi ve kısalan bir deneyim düzeltmeleri birikim listesi.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Yalnızca SLA | Açık, sayılabilir, sözleşmesel | Kullanıcıların hissettiğini kaçırır; kullanıcılar mutsuzken yeşil olabilir |
| Yalnızca XLA | Kullanıcıların değer verdiği şeye yakın | Ölçmesi ve karşılaştırması daha zor; tedarikçilerle sözleşmeler için zayıf bir temel |
| XLA ile SLA | Her iki görünümü verir ve farkı ortaya çıkarır | Daha fazla iş; uyuşmazlıkları okurken güven ve muhakeme gerektirir |
| Anket temelli deneyim ölçümleri | Kullanıcıların doğrudan sesi | Yanıt yanlılığı; yanıtlayanlara yük |
| Davranışsal ölçümler | Anket yükü yok; nesnel | Ölçümleme ve gizlilik özeni gerekir; ne olduğunu gösterir, nedenini değil |
| Tek deneyim endeksi | Kolay manşet | Ayrıntıyı gizler; oynaması kolay, açıklaması zor |

Pratik yanıt, XLA'yı bir ek olarak kullanmaktır; operasyonlar ile deneyim arasındaki boşluğun zaten görünür olduğu birkaç hizmet için devreye alın. Sözleşmesel SLA'ların yerine, tedarikçilerin denetleyemediği deneyim ölçümlerini koymayın. Yasal ve ticari taahhütleri SLA'da tutun ve XLA'yı iyileştirmeyi ve konuşmayı yürütmek için kullanın.

## Takımınızla tartışılacak sorular

**1. En önemli hizmetimiz için, iyi bir gün kullanıcılar için kendi sözleriyle nasıl görünür?**
İki üç kullanıcı toplayın veya yakın tarihli görüşmeleri yeniden kullanın ve ifadelerini yazın. Kolaylaştırıcı, onları operasyonel terimlerle yeniden yazma dürtüsüne direnmelidir. İfadeleri mevcut SLA ile karşılaştırın ve hangi ifadeleri kapsadığını, hangilerini yok saydığını sorun. Boşluklar deneyim ölçümleri için adaylardır.

**2. Yeşil panolarımız ve kullanıcıların hikâyeleri nerede çelişiyor?**
Takımdan, bir hizmetin hedeflerini karşıladığı ve kullanıcıların yine de şikâyet ettiği yakın tarihli bir vakayı isteyin. Vakayı veri üzerinden izleyin: neyi ölçtük ve neyi kaçırdık? Konuşma çoğunlukla eksik bir adımı, bir devir teslimi veya erken duran bir saati ortaya çıkarır. Vakayı kullanıcılarla bir sonraki gözden geçirme için örnek olarak kaydedin.

**3. Bu deneyim ifadesinin doğru olup olmadığını bilmek için hangi üç ölçümü kullanırdık?**
Bir ifade seçin ve insanların söylediklerinden bir, yaptıklarından bir ve sistemin kaydettiğinden bir ölçüm seçin. Her birinin neyi kaçırabileceğini ve nasıl oynanabileceğini sorun. Kuşkucu bir kullanıcıyı ikna edecek en küçük kümede anlaşın.

**4. Kullanıcılar hakkında, beklemeyecekleri neler topluyoruz ve bundan rahatsız olurlar mı?**
Davranışsal veri kaynaklarını ve her birinin amacını listeleyin. Bir kullanıcı temsilcisinden tepki isteyin. Kolaylaştırıcı rahatsızlığı bir engel olarak değil, tasarım hakkında bir bilgi olarak ele almalıdır. Neyi toplamayı bırakacağınıza, neyi toplulaştıracağınıza ve ham veriyi kimin görebileceğine karar verin.

**5. Tüm SLA'lar yeşil kalırken deneyim puanı düşseydi ne yapardık?**
Yanıtı prova edin. Önce kim bakar, neleri kontrol eder ve kimlerle konuşur? Takımın deneyim puanına güvenip güvenmeyeceğine ya da onu reddetmenin yollarını arayıp aramayacağına karar verin. Yanıt, takımın anlaşmayı ne kadar ciddiye aldığını gösterir.

**6. Hangi deneyim düzeltmelerini söz verdik ve onlara ne oldu?**
Kullanıcılarla yapılan son iki gözden geçirme toplantısına bakın. Her taahhüt için tarihi, sahibi ve sonucu gösterin. Liste boşsa veya bayatsa nedenini tartışın. Bir sonraki gözden geçirmeden önce teslim edilecek bir düzeltme ve bunun gerçekleştiğini kullanıcılara söylemenin bir yolu üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Ürün takımları kötü bir deneyimin nedeninin büyük kısmını elinde tutar: kafa karıştırıcı ekranlar, yavaş adımlar, belirsiz hatalar. Deneyim ölçümleri onlara canlı kullanımdan kanıt verir ve doğrudan iyileştirme oturumlarını besler. Takımlar her planlama oturumundan önce yorum temalarını okumalı ve yolculuk ölçümlerini birikim listesine bağlamalıdır. Deneyim puanını bir takım hedefi olarak ele almamalıdırlar. O, operasyonlarla paylaştıkları hizmet hakkında bilgidir.

### Hizmet ve operasyon takımları

Operasyon takımları sürtünmeyi ilk görür: tekrar temaslar, geçici çözümler ve öfkeli arayanlar. Deneyim ölçümleri onlara SLA'nın gizlediğini göstermenin bir yolunu ve kayıtları daha hızlı kapatmak yerine nedenleri düzeltmek için bir gerekçe verir. Tanımlar ve örnekleme konusunda çizgiyi korumalı, kullanıcıları daha iyi görünen kanallara yönlendirmekten kaçınmalı ve mutsuz yorumları eksiksiz okumalıdırlar (bkz. Konu 3.1 “Hizmet masası metrikleri”).

### Liderlik ve yönetişim

Liderler, bir XLA'nın bir konuşma mı yoksa bir skor tablosu mu olacağını seçer. Deneyim verisinin nereye yatırım yapılacağı hakkında ne söylediğini sormalı, ücreti bir deneyim endeksine bağlamaktan kaçınmalı ve personel verilerinin gizliliğini korumalıdır. Yönetişim tanımları, örneklemeyi ve değişikliklerin geçmişini istemeli ve bir deneyim ölçümündeki açıklanamayan bir sıçramayı yöntemi kontrol etmek için bir neden saymalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar anlaşmanın yazarlarıdır. İyinin neye benzediğini tarif etmeye davet edilmeli, sonuçlar kendilerine gösterilmeli ve neyin değiştiği söylenmelidir. Hakkında ne toplandığını ve nedenini bilmeli, hayır deme olanakları bulunmalıdır. Sık sorulan ve hiçbir şeyin iyileşmediğini gören kullanıcılar yanıt vermeyi bırakır ve bu sessizlik veriyi gerçeklikten daha iyi gösterir.

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir profesyonel hizmetler firması, 1.800 çalışan için dahili bir BT hizmeti işletir. Aşağıdaki sayılar açıklayıcıdır (illustrative).

Aylık SLA raporu, iş birliği platformu için yüzde 99,8 kullanılabilirlik ve olayların yüzde 96'sının hedef içinde çözüldüğünü gösterir. BT direktörü memnundur; yine de müşteri sahalarındaki danışmanlar yavaş oturum açmadan şikâyet etmeyi sürdürür. Hizmet yöneticisi iş birliği platformu için bir XLA pilotu önerir.

12 danışmanla yapılan görüşmelerde üç ifade ortaya çıkar: “Bir müşteri görüşmesine karar verdikten sonra iki dakika içinde katılabiliyorum”, “hesabıma yeniden girmek için BT'yi aramam gerekmiyor” ve “bir şey bozulduğunda ne olduğunu biliyorum”. Takım her biri için ölçümler seçer. Birincisi için ifadenin nabız derecelendirmesini ve bölgeye göre toplulaştırılmış, müşterinin gerçek kullanıcı izlemesinden oturum açma başlangıcından görüşmeye katılıma kadar ölçülen süreyi alırlar. İkincisi için etkin kullanıcı başına aylık parola sıfırlama temaslarını sayarlar. Üçüncüsü için durum mesajının 30 dakika içinde güncellendiği olayların payını izler ve bu konuda nabız sorusunu sorarlar.

İlk iki aylık veri, oturum açmadan görüşmeye katılıma medyan sürenin genel merkez bölgesinde iyi, diğer iki bölgede ise uzun olduğunu ve yönetilen dizüstü bilgisayarlardaki personelde kullanıcı başına parola sıfırlama temaslarının diğerlerinden üç kat yüksek olduğunu gösterir. İlk ifade için deneyim puanı 5 üzerinden 3,1'dir; ofis temelli personelde bu 4,2'dir. SLA her ikisinde de yeşildir. Hizmet yöneticisi bulguyu kullanıcı gözden geçirmesine götürür. Takım iki iyileştirmede anlaşır: uzak bölgeler için çoklu oturum açma (SSO) yapılandırmasını ayarlamak ve yönetilen dizüstü bilgisayarlardaki belirteç yenileme ayarlarını değiştirmek. Üç ay sonra medyan süre düşer, kullanıcı başına sıfırlama temasları düşer ve deneyim puanı 3,8'e yükselir. Direktör, XLA'yı bu hizmet için sürdürmeyi, bir hizmete daha eklemeyi ve bir sonraki gözden geçirmeye kadar sayısal hedef belirlememeyi kabul eder.

## Sektör mercekleri

**Girişim (startup).** Kullanıcılarla yakın temas, görüşmeleri kolaylaştırır. Bir çerçeve oluşturmaya direnin: çekirdek hizmet için üç deneyim ifadesi yazın, kullanıcılara her ay bunlar hakkında sorun ve bir davranışsal ölçüm ekleyin. Resmî anlaşmalar sonra gelir.

**Küçük işletme.** Personel azdır ve çoğunlukla BT ile bir yöneticiyi paylaşır. Konuşmaları ve çok kısa bir aylık nabzı kullanın. Küçük gruplar kolayca tanımlanabildiği için davranışsal verilerle dikkatli olun.

**Kurumsal.** Ölçek, birçok kullanıcı grubunu ve tedarikçiyi getirir. Deneyim ifadelerini hizmet ve persona başına tanımlayın, panoları hizmet başına tutun ve şirket çapında tek bir deneyim endeksinden kaçının. XLA'yı tedarikçi sözleşmeleriyle hizalayın; böylece tedarikçiler etkileyemedikleri ölçümlerden sorumlu tutulmadan veri sağlayabilir.

**Kamu sektörü.** Hizmetler çoğunlukla personelin yanı sıra kamuyla da karşı karşıya gelir; erişilebilirlik, sade dil ve eşit erişim konusunda yükümlülükler vardır. Erişilebilirliği deneyim ifadelerine ve ölçümlere dahil edin, yardımcı teknolojiye bağımlı kullanıcılarla test edin ve kişisel verileri yasaya uygun biçimde koruyun. Kamuya raporlama gerekiyorsa yöntemleri sonuçlarla birlikte raporlayın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyet ılımlıdır. Kullanıcı görüşmeleri hizmet başına birkaç gün alır. Aylık bir nabız anketi, birçok kuruluşun zaten sahip olduğu bir anket aracı gerektirir. Davranışsal ölçümler biraz ölçümleme gerektirir; bu, mevcut izlemeden ve portal analitiğinden gelebilir. Kullanıcılarla gözden geçirme her çeyrekte birkaç saat sürer. Yorumları kodlamak ayda bir iki saat sürer.

Getiri, SLA'ların göstermediği sorunları, örneğin belirli bölgelerdeki veya cihazlardaki yavaş yolculukları bulmakta ve iyileştirme parasını kullanıcıların değer verdiği şeye yönlendirmektedir. BT sorunlarına kaybedilen zaman, dikkatle ölçerseniz kendi personel ücretlerinizle bir maliyete dönüştürülebilir. Üretkenlik kazanımlarına ilişkin genel iddialardan kaçının. Gerekçeyi kendi başlangıç değerinizden oluşturun: bir düzeltmeden önce ve sonra kullanıcı başına kaybedilen zaman, kullanıcı başına sürtünme olayları ve tekrar temaslar. Ayrıca resmî hizmet beceriksiz olduğu için benimsenen gölge araçlar gibi geçici çözümlerin önlenen maliyetini de sayın.

## Anti-desenler ve tuzaklar

- **SLA'ları XLA'larla değiştirmek.** Sözleşmeler sayılabilir taahhütlere ihtiyaç duyar. İkisini de tutun ve birlikte gösterin.
- **Tek bir bileşik deneyim endeksi.** Nedeni gizler ve oynamayı davet eder. Birkaç ayrı ölçüm gösterin.
- **Deneyimi kullanıcılar olmadan tanımlamak.** Toplantı odasında yazılan ifadeler sağlayıcının görüşünü anlatır. Kullanıcılarla görüşün ve test edin.
- **İnsanlar yanıt vermeyi bırakana kadar anket yapmak.** Nabızları kısa tutun ve konuları döndürün.
- **Kimseye söylemeden davranışsal veri toplamak.** Güveni zedeler ve yasayı çiğneyebilir. Neyin ve neden toplandığı konusunda açık olun.
- **Deneyim verisini performans değerlendirmelerinde kullanmak.** Bir öğrenme aracını gözetime dönüştürür ve dürüst raporlamayı yok eder.
- **Nedeni değil ölçümü düzeltmek.** Bir sayıyı iyileştirmek için kullanıcıları daha dost bir kanala yönlendirmeyin. Yolculuğu düzeltin.
- **Bulguları bir slaytta bırakmak.** Deneyim düzeltmelerini finanse edin ve izleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Deneyim hedefleri | Örtük veya yok | Bazı hizmetler için sağlayıcı tarafından yazılmış | Kilit hizmetler için kullanıcılarla yazılmış ifadeler | İfadeler her çeyrek kullanıcı gruplarıyla gözden geçirilip değiştiriliyor | Hizmetler ve tedarikçiler arasında paylaşılıyor, kullanıcılarla ortak sahiplenilen |
| Ölçüm | Ara sıra anketler | Bir hizmet için nabız anketi | Her ifade için üç açılı ölçümler (söyleme, yapma, sistem) | Ölçümler eğilimle izleniyor, küçük gruplar için korunuyor ve SLA'larla karşılaştırılıyor | Sağlayıcılar arasında birleştirilmiş veri, kullanıcının denetlediği gizlilik tercihleriyle |
| Eylem | Şikâyetler tek tek ele alınıyor | Düzeltmeler plansız yapılıyor | En önemli deneyim sorunları sahipleriyle birlikte birikim listesinde | Düzeltmeler finanse ediliyor, izleniyor ve kullanıcılara bildiriliyor | İyileştirme takımlar, tedarikçiler ve kullanıcılar arasında koordine ediliyor, öğrenme paylaşılıyor |

## Kontrol listesi

- [ ] Her XLA hizmetinin, kullanıcılarla yazılmış üç ila beş deneyim ifadesi var.
- [ ] Her ifadenin en az iki açıdan (söyleme, yapma, sistem) ölçümleri var.
- [ ] SLA ve deneyim ölçümleri her hizmet için aynı sayfada görünüyor.
- [ ] Nabız anketleri kısa, düzenli ve ifade açısından kararlı.
- [ ] Yorumlar kararlı bir kılavuzla kodlanıyor ve bir kişi aylık bir örneği kontrol ediyor.
- [ ] Kararlaştırılan büyüklüğün altındaki gruplar raporlarda bastırılıyor.
- [ ] Toplanan davranışsal veri kullanıcılara açıklanıyor ve ihtiyaçla sınırlı.
- [ ] Hiçbir deneyim ölçümü bireysel performans değerlendirmelerinde kullanılmıyor.
- [ ] Kullanıcı temsilcileriyle üç aylık bir gözden geçirme takvimde.
- [ ] En önemli deneyim sorunlarının birikim listesinde sahipleri ve tarihleri var.

## Yapay zekâ istemleri

**Görüşme notlarından deneyim ifadeleri taslağı hazırlayın.**

```text
[kurum türü] içinde [hizmet] kullanıcılarıyla yapılan [sayı] görüşmeden
anonimleştirilmiş notlar burada: [notları yapıştırın]. Üç ila beş deneyim
ifadesi önerin; birinci tekil kişide olsun, her biri kullanıcıların önemsediği
tek bir sonuca bağlı olsun ve mümkün olduğunda onların sözcüklerini kullansın.
Her biri için insanların söylediklerinden bir ölçüm, yaptıklarından bir ölçüm ve
sistemin kaydettiğinden bir ölçüm önerin. Rakam uydurmayın. Varsayımlarınızı ve
notlardan anlayamadığınız her şeyi listeleyin.
```

**SLA ile deneyim arasındaki farkı bulun.**

```text
[dönem] için [hizmet] SLA sonuçlarımız şöyleydi: [sonuçları yapıştırın].
Deneyim verilerimiz (nabız puanları, yorum temaları, sürtünme sayıları) şöyleydi:
[verileri yapıştırın]. İkisinin nerede çeliştiğini açıklayın, her çelişki için
üç olası açıklama sunun ve sonra neyin kontrol edileceğini önerin. Verinin
destekleyemeyeceği bir neden varsaymayın. Varsayımlarınızı ve hangi ek verilerin
yardımcı olacağını listeleyin.
```

**Davranışsal ölçümler için gizlilik yaklaşımını gözden geçirin.**

```text
Deneyim ölçümü için şu davranışsal sinyalleri toplamayı planlıyoruz: [liste].
Kullanıcılar [personel, kamu veya her ikisi], [yargı alanı veya sektör]
içinde. Planı gizlilik, güven ve adalet risklerine karşı gözden geçirin ve
asgari toplulaştırma, saklama ve açıklama uygulamaları önerin. Bir gizlilik
uzmanına götürmem gereken her şeyi işaretleyin. Hukuki sonuç vermeyin.
Varsayımlarınızı listeleyin.
```

**Kullanıcılarla üç aylık bir deneyim gözden geçirmesi hazırlayın.**

```text
[kullanıcı grupları] temsilcileriyle [hizmet] için üç aylık bir deneyim
gözden geçirmesine yönelik bir gündem ve bir sayfalık özet taslağı hazırlayın.
SLA ve deneyim sonuçlarını yan yana, en önemli yorum temalarını, geçen
çeyrekteki taahhütleri ve durumlarını ve kullanıcılara iki soruyu ekleyin.
Veri: [verileri yapıştırın]. Tonu sade tutun ve jargondan kaçının.
Varsayımlarınızı listeleyin ve kontrol edilmesi gereken her iddiayı işaretleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir deneyim ölçümünü panoya eklemeden önce koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir XLA metrik kaydının oynama vektörünü ve koruma önlemini taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Bir XLA, operasyonel hedeflere deneyim hedefleri ve ölçümleri ekler ve SLA'yı tamamlar.
- Deneyim ifadelerini kullanıcılarla, onların sözcükleriyle yazın ve her birini insanların söylediklerinden, yaptıklarından ve sistemin kaydettiklerinden ölçümlere bağlayın.
- SLA ve deneyim sonuçlarını birlikte gösterin ve uyuşmazlığı araştırma için bir uyarı olarak ele alın.
- Kullanıcıları koruyun: ne topladığınızı açıklayın, toplulaştırın, küçük grupları bastırın ve veriyi performans değerlendirmelerinin dışında tutun.
- Tek bir deneyim endeksinden ve ölçümler anlaşılmadan kesin hedeflerden kaçının.
- Verinin ortaya çıkardığı düzeltmeleri finanse edin ve kullanıcılara neyin değiştiğini söyleyin.

## Kaynaklar ve ileri okuma

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
