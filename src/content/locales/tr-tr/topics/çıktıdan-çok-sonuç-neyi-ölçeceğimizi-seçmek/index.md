# Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek

**İyi bir hizmet ya da teslimat metriği, bir müşterinin yaşamındaki bir değişimi ya da bir hizmetin sağlığını tarif eder; bu yüzden ölçüleri, kimin için neyin değiştiğini sorarak seçin ve etkinlik ile çıktı sayılarını en fazla destekleyici kanıt olarak görün.**

## Genel bakış ve motivasyon

Çoğu pano, saymanın kolay olduğu şeylerle başlar: kapatılan bildirimler, dağıtılan değişiklikler, bitirilen hikâyeler, yanıtlanan çağrılar. Bunlar bir araçta zaten zaman damgalıdır ve ekibin denetimindedir. Hiçbiri kimsenin daha iyi durumda olup olmadığını söylemez.

Dört sözcük bunu düzgün tutar. **Etkinlik (activity)** harcanan çabadır: çalışılan saatler, yapılan toplantılar, yapılan aramalar. **Çıktı (output)** işin ürettiği şeydir: bir sürüm, çözülmüş bir bildirim, yayımlanmış bir makale. **Sonuç (outcome)**, çıktının birisi için mümkün kıldığı değişimdir: bir müşteri bir görevi yarı sürede tamamlar, bir klinik zamanında açılır, tekrarlanan bir sorun tekrarlamayı bırakır. **Etki (impact)**, kurumun hedefleri üzerindeki daha uzun vadeli etkidir; örneğin elde tutulan müşteriler ya da hizmet sunmanın daha düşük maliyeti. ITIL 4'te (çerçevenin AXELOS tarafından yayımlanan, şimdi PeopleCert'e ait olan 2019 sürümü) bir çıktı, bir etkinliğin somut ya da soyut bir teslim edilebilir ürünüdür ve bir sonuç, bir ya da daha fazla çıktının mümkün kıldığı, bir paydaş için ortaya çıkan sonuçtur.

[ITIL](https://en.wikipedia.org/wiki/ITIL), her metrik için bir sınav işlevi gören ikinci bir fikir ekler: değer, hizmet sağlayıcı ile hizmet tüketicisi tarafından [birlikte yaratılır](https://en.wikipedia.org/wiki/Co-creation); biri tarafından diğerine teslim edilmez. Bu, değerin kullanımda, müşteri bir sağlayıcının yeteneklerini kendi hedeflerine uyguladığında ortaya çıktığını savunan pazarlama görüşü olan [hizmet baskın mantığının](https://en.wikipedia.org/wiki/Service-dominant_logic) ardındaki düşünceyi izler. Tamamen sağlayıcı tarafında ölçülen bir metrik değeri kanıtlayamaz. Bir ekip her bildirimi kapatabilir ve her sürümü zamanında çıkarabilir, ama kullanıcılar işlerinin hiç kolaylaşmadığını görebilir.

Çevik bakış aynı yere farklı bir yoldan ulaşır. [Çevik yazılım geliştirme](https://en.wikipedia.org/wiki/Agile_software_development) Manifestosu'nun ardındaki ilkeler, çalışan yazılımın ilerlemenin birincil ölçüsü olduğunu ve yapılmayan işin miktarını en üst düzeye çıkarma sanatı olan sadeliğin esas olduğunu söyler. İkisi de daha büyük bir çıktı yığınını ödüllendirmez. İkisi de kullanıcıları için çalışan bir şeyi teslim etmeyi ve kimsenin ihtiyaç duymadığı şeyi inşa etmemeyi işaret eder.

Çıktı ve etkinlik metrikleri yanlış değildir. Akışı, kapasiteyi ve maliyeti yönetirler ve sonraki konular bunları yoğun biçimde kullanır (bkz. Konu 2.1 “Akış ölçümleri”). Hata, onların değerin yerine geçmesine izin vermektir. [Gösteriş metriği (vanity metric)](https://en.wikipedia.org/wiki/Vanity_metric), raporlaması kolay ve neredeyse her zaman yükselen bir sayıdır: toplam kayıtlı kullanıcılar, birikimli işlenen bildirimler, bugüne kadar sunulan özellikler. Bir ekibi meşgul gösterir ve kimseye bir sonraki adımda ne yapacağını söylemez. Sınav şudur: müşterinin durumu kötüleşirken bu sayı yükselebilir mi?

Sonuç metrikleri daha zordur. Yavaş hareket ederler, ekibin denetimi dışındaki etkenlere bağlıdırlar ve gürültülüdürler. Bir parola sıfırlama akışındaki bir değişikliğin temas hacminde görünmesi haftalar alabilir ve hacmi bir pazarlama kampanyası da etkiler. Yanıt, sonuçları dikkatle seçmek, ekibin günü gününe yönlendirdiği çıktı ölçüleriyle eşleştirmek ve hareketin ne kadarını ekibin sahiplenebileceği konusunda dürüst olmaktır.

**Öncü gösterge (leading indicator)**, ilgilendiğiniz sonuçtan önce hareket eden ve erken etkilenebilen bir ölçüdür; örneğin test edilmiş bir destek çalışma kılavuzu olan yeni hizmetlerin payı. **Artçı gösterge (lagging indicator)** sonucu olay sonrasında bildirir; örneğin büyük olayların sayısı ya da müşteri kaybı. İktisatçılar aynı eşleştirmeyi kullanır; bir [ekonomik göstergeyi](https://en.wikipedia.org/wiki/Economic_indicator) öncü, eşzamanlı ya da artçı olarak sınıflandırırlar. Ekipler ikisine de ihtiyaç duyar: artçı göstergeler haklı olup olmadığınızı söyler ve öncü göstergeler hâlâ zaman varken üzerinde harekete geçebileceğiniz bir şey verir. Bir öncü gösterge, birkaç dönem boyunca gerçekten sonuçtan önce hareket ettiğini kontrol edene kadar yalnızca bir hipotezdir.

Sonuç ölçüleri manipülasyona kısmi bir çaredir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Müşterilerin deneyimlediğine yakın bir ölçüyü onlara yardım etmeden iyileştirmek daha zordur ve manipülasyon sonuçtan uzaklıkta yaşar. Seçime yardımcı olan çerçeveler ayrıca ele alınır (bkz. Konu 1.7 “Ölçüm çerçeveleri”).

## Temel ilkeler

- **Sonuçtan başlayın ve geriye doğru çalışın.** Bir müşteri, bir hizmet ya da kurum için istediğiniz değişimi adlandırın, sonra bunu hangi kanıtın göstereceğini sorun, sonra daha erken hangi öncü işaretlerin görüneceğini sorun.
- **Değer birlikte yaratılır; bu yüzden tüketicinin tarafını dahil edin.** Her kümedeki en az bir ölçü, yalnızca sağlayıcının kayıtlarından değil, hizmeti kullanan insanlardan, yani onların başarısından, çabasından ya da deneyiminden gelmelidir.
- **Zinciri görünür tutun.** Etkinliği, çıktıyı, sonucu ve etkiyi bir zincir olarak gösterin. Ekipler çıktılar ve öncü göstergeler üzerinden yönlendirir, kendilerini sonuçlara göre değerlendirir.
- **Eşleştirin, asla ikame etmeyin.** Bir sonuç ölçüsü bir çıktı ölçüsünün neden önemli olduğunu açıklar ve bir çıktı ölçüsü bir sonuç ölçüsü hakkında ne yapılacağını açıklar. İkisi de tek başına işe yaramaz.
- **Yükselebildiği kadar düşebilen ölçüleri tercih edin.** Yalnızca büyüyen bir sayı bir sayımdır, bir sinyal değil.
- **Öncü göstergeleri hipotez olarak ele alın.** Sonucu öngördüklerini kontrol edin ve öngörmediklerinde bırakın.
- **Atıf konusunda dürüst olun.** Sonuçların birçok nedeni vardır. Ekibin neyi etkilediğini ve neyi yalnızca gözlemlediğini söyleyin.

## Metrik tanımları

Aşağıdaki beş metrik, bir ölçüm kümesini sonuçlara doğru kaydırmak için seçilmiştir. Bunlar kullanılacak biçimin örnekleridir ve sonraki konular onları dolduran hizmet ve teslimat ölçülerini tanımlar. Bu konudaki örnekleyici eşikler kıyaslama değeri değildir.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sonuç kapsamı | Raporlanan metrikler içinde, metrik kaydında adı konmuş bir müşteri ya da hizmet için yazılı bir sonuca bağlananların payı | yazılı bir sonuç bağlantısı olan metrikler / dönemde raporlanan metrikler. Yalnızca düzenli bir raporda gösterilen metrikleri sayar; tek bir ekibin tuttuğu çalışma görünümü ölçülerini hariç tutar | yüzde | Metrik kaydı (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”) | Ölçüm ve raporlama; sürekli iyileştirme | Ürün hedefi ve teslimat hedefi | Üç aylık |
| Özellik benimseme oranı | Yeni ya da değiştirilmiş bir yeteneği, sürümden sonra belirtilen bir pencere içinde kullanan uygun kullanıcıların payı | sürümden sonraki 30 gün içinde yeteneği kullanan farklı uygun kullanıcılar / o dönemdeki farklı uygun kullanıcılar. Saat genel kullanılabilirlikte başlar; iç test hesapları ve yeteneğe erişemeyen kullanıcılar hariç tutulur | yüzde | Ürün analitiği, hizmet kataloğu kullanım günlükleri | Hizmet tasarımı; yayın yönetimi | Paydaş gözden geçirmesi geri bildirimi; ürün sonuç ölçüsü | Sürümden sonra 3 ay boyunca aylık, sonra üç aylık |
| Tekrar temas oranı | Bir kullanıcının, daha önceki bir temas kapatıldıktan sonra belirtilen bir pencere içinde aynı hizmet hakkındaki temaslarının payı | kapatılmış bir temasın ardından 14 gün içinde aynı kullanıcıdan aynı hizmet hakkında gelen yeni temaslar / dönemde kapatılan temaslar. Saat kapanışta başlar; planlı takip olarak açılan temaslar hariç tutulur | yüzde | ITSM aracı temas ve bildirim geçmişi | Hizmet masası; olay yönetimi | Kaçan kusurlar; bitti tanımı | Aylık |
| Öncü gösterge doğrulama oranı | Kullanımdaki öncü göstergeler içinde, hareketi gözden geçirme döneminde bağlı artçı göstergesinin hareketinden önce gelenlerin payı | artçı göstergelerine karşı doğrulanmış bir önceliği olan öncü göstergeler / kullanımdaki öncü göstergeler. En az dört dönem veri üzerinde, belgelenmiş bir gözden geçirmede ekip tarafından değerlendirilir; dört dönemden az verisi olan göstergeler hariç tutulur | yüzde | Metrik kaydı ve eğilim geçmişi | Sürekli iyileştirme | Deneylere dair retrospektif eylemleri | Yılda iki kez |
| Fayda gözden geçirmesi tamamlama oranı | Finanse edilmiş değişiklikler ya da iyileştirmeler içinde, amaçlanan sonucu üzerinde anlaşılan gecikmeden sonra ölçüsüne karşı gözden geçirilenlerin payı | planlanan gözden geçirme tarihinden itibaren 90 gün içinde tamamlanmış sonuç gözden geçirmesi olan değişiklikler / gözden geçirme tarihi dönem içine düşen değişiklikler. Yayından önce geri çekilen değişiklikler hariç tutulur | yüzde | Değişiklik kaydı, iyileştirme kaydı, gözden geçirme notları | Sürekli iyileştirme; değişiklik yetkilendirme | Paydaş gözden geçirmesi; ürün artımı gözden geçirmesi | Üç aylık |

Sonuç kapsamı ve fayda gözden geçirmesi tamamlama oranı ölçüm uygulamasını ölçer ve evrakla kolayca karşılanır. Özellik benimseme oranı ve tekrar temas oranı müşteriye daha yakındır ve bir kararı değiştirmesi en olası olanlardır.

## Öneriler

### Sonuçlardan başlayın

**1. Sonucu bir kişi ya da hizmet hakkında bir cümle olarak yazın.** “Personel, hizmet masasını aramadan kendi parolasını sıfırlayabilir” bir sonuçtur. “Yeni kimlik portalını dağıt” bir çıktıdır. Cümleyi metriğin kayıttaki girdisinin en üstüne koyun, sonra ölçüyü seçin. Cümleyi yazamıyorsanız, bir sayı seçmeye hazır değilsiniz.

**2. Etkinlikten etkiye zinciri çizin.** Her hedef için dört kutu çizin: ekibin ne yaptığı, ne ürettiği, kullanıcı için neyin değiştiği ve bunun kurum için neyi değiştirdiği. Her aday metriği bir kutuya yerleştirin. Solu dolu, sağı boş bir küme, sonuç kanıtı aramak için sinyaldir.

**3. Her metrikte birlikte değer yaratma sınavını kullanın.** Sorun: bu kimin değer görüşünü gösteriyor ve tüketicinin görüşü kümenin herhangi bir yerinde görünüyor mu? ITIL terimleriyle, bir hizmet ilişkisinin bir sağlayıcısı ve bir tüketicisi vardır ve değer tüketicinin kullanımında gerçekleşir. Sağlayıcının saatinden bir yanıt süresi ölçüsü, tüketici tarafından bir eşlik edene, örneğin kullanıcının işine devam edip edemediğine, ihtiyaç duyar (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”).

**4. Bir rapor değil, bir karar isteyin.** Her aday metrik için, hareket etse birinin alacağı kararı yazın. Hiçbir kararı olmayan her ölçüyü emekliye ayırın. Bu, gösteriş metriklerine karşı en hızlı süzgeçtir ve bir panonun varsayılan olarak büyümesini önler.

### Çıktıları sonuçlarla eşleştirin

**5. Her büyük çıktı ölçüsü için bir sonuç ölçüsü seçin.** Dağıtımları raporluyorsanız, onları dağıtımların hizmet için neyi değiştirdiğinin bir ölçüsüyle, örneğin değişiklik başarısızlığı ya da kullanıcıya dönük olaylarla, eşleştirin (bkz. Konu 2.8 “DORA metrikleri”). Çözülen bildirimleri raporluyorsanız, tekrar temasla eşleştirin. Çift aynı sayfada olmalıdır. Yalnızca çıktıyı gören bir ekip çıktı için eniyileme yapar.

**6. Ekibin etkileyebildiği sonuç ölçülerini seçin ve yalnızca gözlemlediklerini adlandırın.** Bir ekip kendi hizmetinin tekrar temaslarını ve kendi özelliklerinin benimsenmesini etkileyebilir. Şirketin gelirini yalnızca gözlemleyebilir. İkisi de resme aittir, ama hedefler ve iyileştirme işi etkilenen ölçülere bağlanır. Farkı adlandırmak, ekibin neden olamayacağı hareketler için suçlanmasını önler.

**7. Vekilleri açıkça kullanın.** Birçok sonuç doğrudan ölçülemez. Bir vekil seçin, bunun bir vekil olduğunu söyleyin ve neyi kaçırdığını söyleyin. Tekrar temas oranı, “sorun gerçekten çözüldü” için bir vekildir ve kısa bir anket ya da açık yorumların okunması hâlâ doğruyu söylediğini denetleyebilir (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

### Öncü ve artçı çiftler kurun

**8. Her artçı göstergeyi, üzerinde harekete geçebileceğiniz en az bir öncü göstergeyle eşleştirin.** Büyük olaylar artçı bir göstergedir ve test edilmiş kurtarma çalışma kılavuzu olan hizmetlerin payı onlara öncülük edebilir. Öncü gösterge, ekibe bu ay yapacak bir şey verir. Yazabileceğiniz bir nedenle inandığınız öncü göstergeleri seçin, sonra inancı test edin.

**9. Öncü göstergeleri geriye bakışla doğrulayın.** Yılda iki kez, her öncü göstergeyi artçı eşine karşı en az dört dönem boyunca çizin ve hareketin önce gelip gelmediğini sorun. İlişki zayıfsa, öncü göstergeyi değiştirin ya da bırakın.

**10. Sonucun açık bir kullanıcıya dönük ölçüsü olduğunda hizmet düzeyi hedeflerini kullanın.** İyi seçilmiş bir hizmet düzeyi göstergesi (SLI), kullanıcı mutluluğu için öncü bir sinyaldir ve bir hizmet düzeyi hedefi (SLO) ne kadar iyi olması gerektiğini belirtir (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”). Gösterge makinenin değil kullanıcının bakış açısından seçildiğinde en iyi çalışırlar.

### Seçimi dürüst tutun

**11. Döngüyü sonuç gözden geçirmeleriyle kapatın.** Bir değişiklik ya da iyileştirme finanse edildiğinde, üretmesi beklenen sonucu, ölçüyü ve birinin bakacağı tarihi kaydedin. Yanıt can sıkıcı olsa bile gözden geçirmeyi yapın. Gözden geçirmeler olmadan sonuç dili süstür (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”).

**12. Çıktı ölçülerini çalışma görünümünde tutun ve ne için olduklarını söyleyin.** Akış, kapasite ve maliyet ölçüleri ekibin araçlarıdır, puan kartı değil. Çevrim süresi, işin nerede beklediğini söyler (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”). Yanlarında bir sonuç olmadan yukarıya raporlandıklarında manipülasyona davet ederler.

## Manipülasyon yolları ve koruma önlemleri

Sonuçlara yönelmek manipülasyonu ortadan kaldırmaz. Biçimini değiştirir: sonuçlar yeniden tanımlanabilir, vekiller yönlendirilebilir ve gözden geçirmeler atlanabilir.

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Sonuç kapsamı | Bağlantı kâğıt üzerinde var olsun diye her metrik için belirsiz bir sonuç cümlesi (“hizmeti iyileştir”) yazmak | Kayıttan örnek alın: bir cümle bir kişiyi ya da hizmeti ve bir değişimi adlandırmalıdır; ölçü nedeniyle bir karar alındığını denetleyin |
| Özellik benimseme oranı | Zorunlu ya da otomatik bir ilk kullanımı benimseme olarak saymak; uygun kullanıcı grubunu küçültmek; yeteneği varsayılan yaparak seçilmeden “kullanılmış” olmasını sağlamak | Yeteneği kullananlar arasında görev tamamlama ya da memnuniyet; 30 ve 90 günden sonra kullanımın sürmesi; açık yorumları okuyun |
| Tekrar temas oranı | Kullanıcılara başka bir kanaldan yeni bir talep açmalarını söylemek; teması ilgisiz bir temasın yinelemesi olarak kapatmak; pencere içinde yeniden temastan kaçınmak için kapanışı geciktirmek | Aynı hizmet için kanala göre temaslar; kapanış notlarının örneklemeyle gözden geçirilmesi; kullanıcının bildirdiği “sorun çözüldü” oranı |
| Öncü gösterge doğrulama oranı | Öncü göstergeleri gayriresmi bir bakıştan sonra geçerli ilan etmek; sonuçla önemsizce hareket eden göstergeler seçmek | Çizilmiş verilerle yazılı gözden geçirme kaydı; her döngüde bir sonuca meydan okumak için ekip dışından birini davet edin |
| Fayda gözden geçirmesi tamamlama oranı | Gözden geçirmeyi yalnızca ad olarak yapmak ya da amaçlanan sonucu sonradan belirleyip hep karşılanmasını sağlamak | Gözden geçirmedeki sonucu, değişiklik finanse edildiğinde yapılan ifadeyle karşılaştırın; plan değişikliğine yol açan gözden geçirmelerin payını izleyin |

Sağlıklı bir okuma, bazen hayal kırıklığı yaratan sonuç ölçüleri, bazen bir değişikliği sonlandıran gözden geçirmeler ve bazen bırakılan öncü göstergeler gösterir. Her sonucun karşılandığı ve her öncü göstergenin doğrulandığı bir küme muhtemelen öyle olması için ayarlanmıştır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Çıktı ve etkinlik ölçüleri | Hızlı, ucuz ve ekibin denetiminde; akış ve kapasite kararları için iyi | Şişirilmesi kolay; kimsenin yararlanıp yararlanmadığı hakkında bir şey söylemez |
| Sonuç ölçüleri | Müşterilerin ve kurumun değer verdiğine yakın kalır; yardım etmeden iyileştirmesi daha zor | Yavaş, gürültülü ve ekibin denetimi dışındaki etkenlerden etkilenir |
| Öncü göstergeler | Erken uyarı ve üzerinde harekete geçilecek bir şey verir | Sonuçla bağ, test edilmek yerine varsayıldığında yanıltabilir |
| Artçı göstergeler | Gerçekte ne olduğunu bildirir | Bu dönemin sonucunu değiştirmek için çok geç gelir |
| Sonuçlar için vekiller | Ölçmesi zor sonuçları görünür kılar | Temsil ettiklerinden uzaklaşabilir ve vekilleştirmeye davet eder |
| Küçük, sonuç öncülüğünde bir küme | Hatırlaması ve tartışması kolay; çabayı odaklar | Seçilen sonuçların dışındaki bir sorunu kaçırabilir |
| Geniş, dengeli bir küme | Hizmetin daha fazlasını kapsar | Dikkati seyreltir; her ölçü daha az inceleme alır |

Tüm grubun sayabileceği az sayıda sonuç ölçüsü tutun, her birini onu açıklayan çıktı ve öncü ölçülerle destekleyin ve strateji değiştiğinde kümeyi yeniden ele alın. [Dengeli puan kartı](https://en.wikipedia.org/wiki/Balanced_scorecard) ve [hedefler ve anahtar sonuçlar](https://en.wikipedia.org/wiki/Objectives_and_key_results) ile ilişkilendirilen dengeli yaklaşımların her ikisi de günlük işi önemli sonuçlara bağlamaya çalışır. Anahtar sonuçlar yanında bir yüzde olan bir çıktı listesine dönüştüğünde aynı biçimde başarısız olurlar.

## Takımınızla tartışılacak sorular

**1. En belirgin beş metriğimizden hangileri, müşterilerimiz daha kötü durumdayken yükselebilir?**
Beşini bir tahtaya yazın ve her biri için soruyu sorun. Örneğin kapatılan bildirim sayısı, tekrar temaslar da yükselirken yükselebilir. Kolaylaştırıcı yanıtın evet olduğu durumları kaydetmelidir, çünkü bunlar gösteriş metrikleridir. Her birinin yanında hangi sonuç ölçüsünün duracağını sorarak bitirin.

**2. Bu hizmetin bir müşterisi için iyi bir hafta, onların sözleriyle nasıl görünür?**
Müşterilerle konuşan insanlara sorun ve ekibin kendi sözcük dağarcığından kaçının. Yanıtlar sonuç cümlelerine dönüşür ve çoğu zaman kimsenin ölçmediği şeyleri, örneğin bir sorunu iki kez anlatmak zorunda kalmamayı ortaya çıkarır. Üç cümle yakalayın ve hangilerinin, bir vekille bile, ölçülebileceğini sorun.

**3. Öncü göstergelerimizden hangilerini, öngörmesi beklenen sonuca karşı hiç kontrol ettik?**
Bir gösterge seçin ve onu artçı eşine karşı son birkaç dönem için çizin. Ne gördüğünüzü ve ne kadar emin olduğunuzu sorun. İlişki zayıfsa, yerine neyin konacağını tartışın. Bırakılan bir göstergeyi başarısızlık değil, öğrenmenin olağan bir sonucu olarak ele alın.

**4. Ekibimiz yalnızca gözlemlediği bir sonucun hakkını nerede sahipleniyor?**
Liderliğe raporlardaki metriklere bakın. Hangileri ekibin denetimi dışındaki etkenlere, örneğin mevsimselliğe, bir kampanyaya ya da bir tedarikçiye bağlı? Ekibin neyi etkilediğini ve neyi gözlemlediğini belirtmenin sade bir yolu üzerinde uzlaşın. Bu, ekibi bir sonucun neden olmadığı nedenlerle hareket ettiği güne hazırlar.

**5. Son iki çeyrekte neyi sunduk ya da değiştirdik ve işe yarayıp yaramadığını gözden geçiren oldu mu?**
Değişiklikleri bir tahtaya listeleyin ve gözden geçirme kaydı olanları işaretleyin. Diğerleri için ne sonuç beklendiğini ve bunu şimdi nasıl öğrenebileceğinizi sorun. Suçlu aramaktan kaçının. Amaç, ilk gözden geçirmeler geç olsa bile alışkanlığı başlatmaktır.

**6. Hangi çıktı ölçüleri çalışma görünümümüze geri taşınmalı?**
Bazı ölçüler ekip için yararlı ve bir raporda yanıltıcıdır. Hangilerinin hangisi olduğunu ve her birinin bir liderlik raporunda kalması için yanında neye ihtiyaç duyacağını sorun. Bu çeyrek taşınacak bir ölçü üzerinde uzlaşın. Bir ölçüyü taşımak, şeffaflıktan geri çekilme değil, olgunluk işaretidir.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri çıktıya meyleder, çünkü araçları bunu varsayılan olarak raporlar. Çare, benimseme ve sonuç kanıtını bitti tanımının ve paydaş gözden geçirmesinin bir parçası yapmaktır. Kimsenin kullanmadığı bir özellik bir derstir ve bunu erkenden öğrenmek çevik uygulamanın bir faydasıdır. Ekipler akış ölçülerini çalışma görünümlerinde tutar ve benimseme ile başarısızlık ölçüleriyle eşleştirir (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”).

### Hizmet ve operasyon takımları

Hizmet ekipleri işleme üzerinden ölçülür: yanıtlanan çağrılar, kapatılan bildirimler, çözüm süresi. Bunlar planlama ve maliyet için önemlidir ve kullanıcının sorununun gidip gitmediği hakkında az şey söyler. Operasyon ekipleri hız ölçülerinin yanına tekrar temas, aynı nedenin tekrarı ve kullanıcının bildirdiği çözümü eklemeli ve kolay bildirimlerin artan sayısına kuşkuyla yaklaşmalıdır (bkz. Konu 3.1 “Hizmet masası metrikleri”). Bilgi makalesi kullanımı ve test edilmiş çalışma kılavuzları gibi öncü göstergeler, ekibe olaylar arasında üzerinde harekete geçecek bir şey verir.

### Liderlik ve yönetişim

Liderlerin görmeyi istedikleri şey, kuruma neyin önemli olduğunu öğretir. Sonuçları isteyin, daha yavaş ve gürültülü olduklarını kabul edin ve bunları denetleyen gözden geçirmeleri finanse edin. Yönetişim organları, her biri belirtilmiş bir sahibe ve bilgilendirdiği kararların kaydına sahip, kısa ve istikrarlı bir sonuç ölçüleri kümesi aramalıdır (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”). “Ne öğrendik?” diye soran bir lider, “bu neden kırmızı?” diye soran birinden daha iyi veri alır.

### Müşteriler ve kullanıcılar

Müşteriler sonuçları doğrudan deneyimler ve çıktı sayılarını nadiren görür. Kümenin nihai sınavıdırlar: hizmet, gelmiş oldukları işle ilgilenmelerine izin veriyor mu? Kısa anketler, açık yorumlar ve gerçek görevlerin gözlemi, herhangi bir sağlayıcı tarafı ölçüsünden daha iyi kanıttır. Müşterilerin ayrıca değerin birlikte yaratılmasında bir rolü vardır; bu, ne kadar iyi bilgilendirildikleri, yetkilendirildikleri ve dinlendikleri sonuçları etkiler demektir (bkz. Konu 6.3 “Hizmet benimsenmesi ve katalog metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci, küçük bir hizmet masası tarafından desteklenen yaklaşık 40 ürün ekibine kendi kendine hizmet ortam sağlama hizmeti sunan bir iç platform ekibi işletir. Bu örnekteki tüm sayılar örnekleyicidir.

Aylık rapor 310 karşılanmış talep (240'tan yukarı), 6 saatlik medyan karşılama süresi ve çeyrekte sunulan 12 özellik gösterir. Liderlik memnundur. Platform lideri, sağlamayla ilgili masaya gelen temasların da arttığını fark eder ve ekipten çıktıları umdukları sonuca karşı grafiğe dökmesini ister: ürün ekiplerinin beklemeden ya da yardım istemeden bir ortam almaları.

Zincir egzersizi, ekibin etkinliği ve çıktıyı ölçtüğünü ve hiçbir sonucu ölçmediğini gösterir. Üç tane eklerler. Birincisi tekrar temas oranıdır: sağlama temaslarının yüzde 22'sini, 14 gün içinde aynı hizmet hakkında bir başka temas izler. İkincisi, en yeni üç özellik için, 30 gün sonra uygun ekiplerin yüzde 9'u, yüzde 14'ü ve yüzde 61'i düzeyinde duran özellik benimseme oranıdır. Üçüncüsü, öncü bir gösterge olarak, şu anda yüzde 48 olan, insan adımı olmadan tamamlanan taleplerin payıdır. Bunun tekrar temas oranını aşağı çekmesi gerektiğini varsayarlar.

Düşük benimsemeli ikisine benzeyen iki planlı özelliği duraklatmaya ve çeyreği tekrar temasın en yaygın nedenine, yani bir kota aşıldığında verilen belirsiz bir hata iletisine ayırmaya karar verirler. Amaçlanan sonucu, yüzde 15'in altında bir tekrar temas oranını kaydederler ve 90 gün sonrasına bir gözden geçirme tarihi koyarlar.

Manipülasyon riski ikinci ayda ortaya çıkar. Tekrar temas oranı yüzde 11'e düşer; bu harika görünür. 25 kapatılmış temastan oluşan bir örnek, hizmet masasının kullanıcılardan takip soruları için bir sohbet kanalı kullanmalarını istemeye başladığını ve sohbet kanalının ITSM aracında sayılmadığını gösterir. Ekip, kanala göre temasları rapora ekler, sohbet dökümlerini örnekleme dahil eder ve birleşik oranın yüzde 17 olduğunu bulur. Bu, ilk okumadan daha küçük, gerçek bir iyileşmedir. Gözden geçirmede lider yüzde 17'yi raporlar, öncü göstergenin yüzde 48'den yüzde 57'ye uyumlu biçimde yükseldiğini not eder ve hipotezin doğrulanmış sayılması için gereken dört dönemden ikisinde geçerli kaldığını kaydeder.

## Sektör mercekleri

**Girişim (startup).** Sonuçlar elinizin altındadır: kurucular müşterilerle konuşabilir ve kalıp kalmadıklarını görebilir. Risk, yalnızca kullanıcı ve özelliklerdeki büyümeyi ölçmektir; elde tutma ve görev başarısı görünür olana kadar bunlar gösteriş metrikleridir. Müşterilerin tanıyacağı bir sonuç ölçüsü seçin ve haftalık kontrol edin.

**Küçük işletme.** Sayılar istatistik için çok küçüktür; bu yüzden doğrudan konuşmaları, izlenen bir avuç vakayı ve kısa bir vekil listesini tercih edin. Kendi etkinliklerini sizin sonucunuz gibi raporlayan tedarikçi panolarına karşı dikkatli olun.

**Kurumsal.** Ölçek, çıktı raporlamasına davet eder, çünkü çıktılar birçok ekip arasında karşılaştırılabilirken sonuçlar değildir. Benzemeyen hizmetlere tek bir sonuç tanımı dayatmaktan kaçının. Ortak sonuç cümlelerinden oluşan küçük bir küme üzerinde uzlaşın, her hizmetin kendi ölçülerini seçmesine izin verin ve kaydı güncel tutun.

**Kamu sektörü ve hükümet.** Yasal görevler, finansman kuralları ve hizmet düzeyleri bazı ölçüleri, çoğu zaman işlenen vakalar gibi çıktıları, önceden belirler. Bunları karşılayın ve yanlarına vatandaşlar ve personel için sonuç ölçüleri ekleyin; örneğin bir kişinin geldiği yardımı alıp almadığı gibi. Kamuya raporlama, dürüst sonuç verisini daha değerli ve daha hassas kılar; bu yüzden düzeltilmiş rakamların nasıl açıklanacağı üzerinde önceden uzlaşın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Sonuçlara doğru kaymanın maliyeti çoğunlukla çaba ve sabırdır: sonuç cümleleri yazmak, kısa bir anket ya da bir benimseme olayı gibi birkaç ölçü eklemek ve sonuç gözden geçirmeleri yapmak. Araç maliyeti mütevazıdır, çünkü çoğu vekil zaten toplanan verilerden oluşturulabilir. Daha büyük maliyet gecikmedir, çünkü sonuç verisi yavaş gelir ve liderlerin onu beklemesi gerekir.

Getiri, nereye harcanacağına dair daha iyi seçimlerden gelir. Kimsenin kullanmadığı iş pahalıdır ve tekrar temasların altta yatan nedeni yerinde dururken bir işleme ölçüsünü iyileştirmek de öyledir. Beklenecek örüntü, inşa edilip kullanılmadan bırakılan daha az özellik, tekrarlayan nedenlere daha fazla dikkat ve finansman için daha güçlü bir hikâyedir. Bir yüzde vaat etmeyin. Son sürümlerin benimsenmesi ve tekrar temas gibi kendi temel değerlerinizi ölçün ve birkaç çeyrek sonra karşılaştırın (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Kolay olanı saymak.** Bildirim ve dağıtım sayıları her araçta bulunur; bu onları varsayılan yapar. Başka bir çıktı sayımı eklemeden önce her hizmet için en az bir sonuç ölçüsü ekleyin.
- **Sonuç tiyatrosu.** Hiç denetlemeden her metrik için bir sonuç cümlesi yazmak. Kayıttan bir örneği gözden geçirin ve her ölçünün hangi kararı bilgilendirdiğini sorun.
- **Sınanmamış öncü göstergeler.** Makul bir sinyali kanıt saymak. Onu yılda en az iki kez artçı sonuca karşı çizin ve öncülük etmeyenleri bırakın.
- **Kişisel hedef olarak sonuçlar.** Bir sonuç ölçüsünü tek bir kişiye atamak, Konu 1.2'de açıklanan davranışı davet eder. Sonuçları ekiplere ve hizmetlere bağlayın.
- **Yalnızca sağlayıcının tarafını ölçmek.** İç saatlerden ve sayımlardan oluşan bir küme müşterilerin hissettiğini kaçırır. Her hizmet için bir tüketici tarafı ölçüsü ekleyin.
- **Hiç gözden geçirmemek.** Vaat edilen faydalara dayanarak değişiklikleri finanse edip onları hiç denetlememek. Onaylandığında değişiklik kaydına bir gözden geçirme tarihi koyun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Ölçüleri seçmek | Araçlarda bulunan sayımlar | Bazı ekipler sonuç cümleleri yazar | Her raporlanan metriğin yazılı bir sonucu ve bilgilendirdiği bir kararı vardır | Sonuç ve çıktı kümeleri her çeyrek birlikte gözden geçirilir | Sonuç cümleleri ekipler, tedarikçiler ve müşteriler arasında uyumlu ve strateji değiştiğinde gözden geçirilir |
| Öncü ve artçı göstergeler | Yalnızca geç raporlanan artçı sonuçlar | Sezgiyle seçilmiş birkaç öncü gösterge | Öncü ve artçı göstergeler eşleştirilmiş ve kayıtta tutulur | Öncü göstergeler yılda iki kez sonuçlara karşı doğrulanır | Göstergeler tedarikçiler ve müşterilerle paylaşılır; küme kanıtla gelişir |
| Sonuç gözden geçirmeleri | Değişikliklerin işe yarayıp yaramadığına dair gözden geçirme yok | Büyük değişikliklerden sonra ara sıra gözden geçirmeler | Her finanse edilmiş değişiklik için kayıtlı gözden geçirme tarihi | Gözden geçirmeler tamamlanır ve sonuçlar bir sonraki planı besler | Gözden geçirmeler rutindir, ekipler arasıdır ve müşteri girdisini içerir |
| Tüketici tarafı kanıt | Anekdotlar | Bazı hizmetler için anket | Her hizmet için bir tüketici tarafı ölçüsü | Tüketici kanıtı eğilim olarak izlenir ve operasyonel verilerle birlikte okunur | Müşteriler sonuç ölçülerini tanımlamaya ve yorumlamaya yardımcı olur |

## Kontrol listesi

- [ ] Her hizmetin bir kişiyi ya da hizmeti ve bir değişimi adlandıran en az bir sonuç cümlesi vardır.
- [ ] Her raporlanan metrik, etkinlikten etkiye zincir üzerine yerleştirilmiştir.
- [ ] Her metriğin bilgilendirdiği adı konmuş bir karar vardır; hiçbiri olmayanlar emekliye ayrılır.
- [ ] Bir rapordaki her çıktı ölçüsünün yanında bir sonuç ölçüsü vardır.
- [ ] Her hizmetin en az bir tüketici tarafı ölçüsü vardır.
- [ ] Her artçı göstergenin, bağlantı için yazılı bir gerekçesi olan bir öncü göstergesi vardır.
- [ ] Öncü göstergeler yılda en az iki kez sonuçlara karşı denetlenir.
- [ ] Vekiller, neyi kaçırdıklarıyla birlikte vekil olarak etiketlenmiştir.
- [ ] Her finanse edilmiş değişikliğin amaçlanan bir sonucu, bir ölçüsü ve bir gözden geçirme tarihi vardır.
- [ ] Sonuç ölçüleri ekiplere ve hizmetlere bağlanır, asla bireylere değil.

## Yapay zekâ istemleri

**Bir çıktı metriğini sonuç öncülüğünde bir kümeye dönüştürün.**

```text
Ekibimiz [ekip adı]; [müşteriler ya da kullanıcılar] için [hizmet ya da ürün]
sağlıyor. Şu anda [çıktı veya etkinlik metrikleri listesi] raporluyoruz.
Sonuçlara doğru ilerlemek istiyoruz. Her metrik için, destekleyebileceği bir
müşteri ya da hizmet hakkında bir sonuç cümlesi öner ve değerlendirebileceğimiz
bir sonuç ölçüsü ile bir öncü gösterge öner. Her öneri için ölçünün neyi
kaçıracağını ve nasıl manipüle edilebileceğini söyle. Kıyaslama değerleri ya
da kaynaklar uydurma. Varsayımlarını ve benden ihtiyaç duyduğun bilgileri
listele.
```

**Bir öncü göstergenin güvenilir olup olmadığını sınayın.**

```text
[Artçı sonuç ölçüsü] için [öncü gösterge] öncü göstergesini kullanıyoruz.
Aşağıda, ikisi için de [sayı] dönemlik veri ve bu süre içinde değişen her şeye
dair notlar yapıştırılmış: [veri ve notlar]. Öncü göstergenin artçı göstergeden
önce hareket ediyor görünüp görünmediğini ve veriyle tutarlı başka hangi
açıklamaların olduğunu anlat. Nedensellik iddia etme. Varsayımlarını, bu kadar
verinin sınırlarını ve hangi ek verilerin yardımcı olacağını listele.
```

**Yakın zamanlı bir değişiklik için bir sonuç gözden geçirmesi taslağı hazırlayın.**

```text
Şu değişikliği yaptık: [açıklama], [tarih] tarihinde onaylandı; amaçlanan
sonuç [sonuç cümlesi] ve ölçü [ölçü]. Mevcut veri: [veri]. Amaçlanan sonucu
gördüklerimizle karşılaştıran, ekibin etkilediği şeyi yalnızca gözlemlediği
şeyden ayıran ve kullanıcılar için sorular listeleyen bir sonuç gözden
geçirmesi gündemi ve kısa bir özet yapısı taslağı hazırla. Başarıyı verinin
desteklediğinin ötesinde yargılama. Varsayımlarını ve veri boşluklarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): raporlamak üzere olduğunuz bir çıktı metriği için konuyu ve eşlik eden sonuç ölçüsünü bulmak için kullanın.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): yeni bir metrik konusunun çıktı ölçülerini sonuçlar ve koruyucu önlemlerle eşleştirdiğini denetlemek için kullanın.

## Temel çıkarımlar

- Etkinlik, çıktı, sonuç ve etki farklı şeylerdir ve ilk ikisinden oluşan bir pano değeri gösteremez.
- ITIL'de değer tüketiciyle birlikte yaratılır; bu yüzden her kümenin tüketici tarafından bir ölçüye ihtiyacı vardır.
- Çıktıları sonuçlarla, artçı göstergeleri test ettiğiniz öncü göstergelerle eşleştirin.
- Ekibin neyi etkilediği ve neyi yalnızca gözlemlediği konusunda net olun.
- Finanse edilmiş değişiklikleri amaçlanan sonuçlarına göre gözden geçirin ve sonuçların planı değiştirmesine izin verin.
- Sonuç ölçüleri manipülasyonu azaltır ama bitirmez; bu yüzden her birinin yine de bir koruyucu önleme ihtiyacı vardır.

## Kaynaklar ve ileri okuma

1. Seiden, J., *Outcomes Over Output: Why Customer Behavior Is the Key Metric for Business Success*, Sense & Respond Press, 2019.
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
3. Vargo, S. L., and Lusch, R. F., "Evolving to a New Dominant Logic for Marketing," *Journal of Marketing*, 68(1), 2004.
4. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January to February 1992.
5. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
9. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Co-creation](https://en.wikipedia.org/wiki/Co-creation).
12. Wikipedia, [Service-dominant logic](https://en.wikipedia.org/wiki/Service-dominant_logic).
13. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
14. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
15. Wikipedia, [Economic indicator](https://en.wikipedia.org/wiki/Economic_indicator).
16. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
17. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
