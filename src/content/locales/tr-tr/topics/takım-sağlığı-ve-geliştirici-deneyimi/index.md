# Takım sağlığı ve geliştirici deneyimi

**Takımlar, geri bildirim hızlı olduğunda, zihinlerindeki yük yönetilebilir olduğunda ve uzun odaklanma süreleri bulabildiklerinde en iyi işlerini yapar. Bu yüzden bu koşulları takımla birlikte ölçün, ortaya çıkan engelleri kaldırın ve sayıları asla insanları sıralamak için kullanmayın.**

## Genel bakış ve motivasyon

Çevik Manifesto’nun ilkeleri, projeleri motive olmuş bireyler etrafında kurmamızı, onlara ihtiyaç duydukları ortamı ve desteği vermemizi ve işi bitireceklerine güvenmemizi ister. Ayrıca sponsorların, geliştiricilerin ve kullanıcıların sabit bir tempoyu süresiz olarak sürdürebilmesini ve takımın daha etkili olmanın yollarını düzenli olarak düşünmesini ister. Takım sağlığı ve geliştirici deneyimi ölçümleri, bu ilkelerin denetlenebilir hâle geldiği yerdir. Burada işi yapmanın nasıl bir şey olduğu ve neyin önünde durduğu sorulur.

[Geliştirici deneyimi](https://en.wikipedia.org/wiki/Developer_experience), geliştiricilerin birlikte çalıştıkları araçlarla, süreçlerle ve insanlarla kurduğu etkileşimlerin toplamıdır. Bu fikir yazılım mühendisliğinden daha geniştir. Operatörlerin, hizmet masası çalışanlarının, analistlerin ve bir hizmeti geliştiren ya da işleten herkesin çevresiyle ilgili bir deneyimi vardır. Bu konu, mühendisler için “geliştirici deneyimi”, daha geniş grup için “takım sağlığı” terimini kullanır ve aynı ölçümler her ikisi için de geçerlidir.

Geniş biçimde anılan iki araştırma çerçevesi vardır. Nicole Forsgren ve meslektaşlarının 2021’de yayımladığı SPACE çerçevesi, geliştirici [verimliliğinin](https://en.wikipedia.org/wiki/Productivity) tek bir sayıya indirgenemeyeceğini savunur ve beş boyut önerir: memnuniyet ve iyi oluş, performans, etkinlik, iletişim ve iş birliği, verimlilik ve akış. Abi Noda, Margaret-Anne Storey, Nicole Forsgren ve Michaela Greiler’in 2023 tarihli “DevEx: What Actually Drives Productivity” başlıklı devam çalışması, geliştiricilerin hissedebildiği ve kurumların değiştirebildiği üç boyuna odaklanır: geri bildirim döngüleri, bilişsel yük ve akış durumu. Her iki makale de algılara ilişkin anket verilerini, iş akışlarına ilişkin sistem verileriyle birleştirmeyi önerir ve tek bir ölçümün, özellikle bir etkinlik sayımının, verimliliğin vekili olarak kullanılmasına karşı uyarır.

Üç DevEx boyutu pratik bir başlangıç noktasıdır.

- **Geri bildirim döngüleri.** Bir kişi yaptığı işin sonucunu ne kadar çabuk öğrenir? Yavaş derlemeler, yavaş testler, yavaş incelemeler ve yavaş onaylar bekleme ekler, bekleme ise konsantrasyonu böler. Hızlı geri bildirim, sürekli teslimatın da temel desteklerinden biridir.
- **[Bilişsel yük](https://en.wikipedia.org/wiki/Cognitive_load).** Bir kişi bir işi yapabilmek için zihninde ne kadar şey tutmak zorundadır? Karmaşık sistemler, zayıf dokümantasyon, belirsiz sahiplik ve çok sayıda araç yükü artırır. Yükü azaltmak, önemli iş için kapasite açar.
- **[Akış durumu](https://en.wikipedia.org/wiki/Flow_(psychology)).** Bir kişi, konsantre olabileceği kesintisiz zaman dilimleri bulabilir mi? Toplantılar, bildirimler, plansız talepler ve bağlam değiştirme akışı aşındırır.

Bu alandaki ölçümleri kötüye kullanmak alışılmadık ölçüde kolaydır. Commit, çekme isteği, kapatılan bilet ya da çevrim içi saat sayıları etkinlik ölçümleridir. Toplamaları kolaydır, insanların iyi iş yapıp yapamadığı konusunda çok az şey söylerler ve oyunlaştırmaya davet çıkarırlar. Algı ölçümleri özneldir ve değerlidir, ancak insanlar dürüst bir yanıtın sonuçlarından korkarsa çarpıtılabilir. İnsanlara ilişkin her ölçüm gözetime kayabilir. [Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi burada etik bir boyut kazanır: insanlara ilişkin bir ölçüm hedefe dönüştüğünde, insanlar işleri hakkında doğruyu söylemeyi bırakır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Bu konu, daha önce anlatılan iç kullanıcı deneyimi üzerine kurulur (bkz. Konu 6.4 “Kullanıcı ve çalışan deneyimi”) ve iyi oluş, iş birliği, beceriler ve iyileştirme üzerine sonraki konularda sürer.

## Temel ilkeler

- **İnsanları değil, koşulları ölçün.** Ortamı ve engellerini sorun, takım düzeyinde raporlayın.
- **Algıyı iş akışı verileriyle birleştirin.** İnsanların hissettikleri ve sistemlerin kaydettikleri, resmin farklı parçalarını kaçırır.
- **Sağlık kontrolünü takımın sahiplenmesine izin verin.** İşe en yakın insanlar soruları seçer ve sonuçları ilk onlar okur.
- **Bu ölçümleri asla bireyleri sıralamak ya da değerlendirmek için kullanmayın.** Bu, dürüst yanıtları sona erdirir.
- **Etkinlik sayımlarından verimlilik çıkarmaktan kaçının.** Commit, bilet ya da saat sayıları sonuç değildir.
- **Duyduklarınıza görünür biçimde yanıt verin.** Engeli giderin ya da neden gidermediğinizi söyleyin.
- **Sürdürülebilir bir tempoyu koruyun.** Süresiz biçimde yüksek tempoda çalışan bir takım, geleceğinden borç alıyordur.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Geri bildirim döngüsü süresi | Bir kişinin yaygın bir eylemin sonucunu alması için geçen süre, döngü türüne göre | takım başına derleme, test çalıştırma, kod inceleme beklemesi ve dağıtım için dakika ya da saat cinsinden medyan ve 85. yüzdelik | dakika veya saat | Boru hattı ve inceleme aracı zaman damgaları, takım bazında toplulaştırılmış | Yayın ve dağıtım yönetimi; sürekli iyileştirme | Sürekli teslimatta hızlı geri bildirim | Haftalık |
| Odaklanma süresi payı | Çalışma süresinin, kararlaştırılan asgari uzunluktaki kesintisiz bloklarda geçen payı, takımın bildirdiği şekilde | kısa bir nabız anketinde toplanan, takımın bildirdiği odaklanma bloklarındaki saat / çalışma saati | yüzde | Takım nabzı; takım kabul ederse ve toplulaştırılırsa takvim verisi | Sürekli iyileştirme; bilgi yönetimi | Derin çalışma için korunan zaman | Aylık |
| Bilişsel yük derecesi | Adı belirtilen bir sistemi ya da süreci anlamanın ve değiştirmenin ne kadar zor olduğuna dair takım derecelendirmesi | sistem başına, kısa ve kararlaştırılmış bir ölçekte ortalama derece ve dağılım | ölçek puanı | Bir sisteme veya sürece bağlı kısa nabız | Hizmet tasarımı; bilgi yönetimi | İşin ortak anlaşılması | Üç aylık |
| Engel çözüm süresi | Bir engelin takım tarafından dile getirilmesinden kaldırılmasına ya da kaldırmama kararının kaydedilmesine kadar geçen süre | dile getirilmeden çözüme ya da karara kadar geçen günlerin medyanı ve 85. yüzdeliği | gün | Engel listesi veya izleyici | Sürekli iyileştirme; sorun yönetimi | Engellerin kaldırılması | Aylık |
| Takım sağlığı kontrolü eğilimi | Takımın kendi seçtiği boyutlarda kendi derecelendirmesi, zaman içinde izlenir | kontroller arasında takımın seçtiği boyut derecelerindeki değişim | ölçek puanı | Takımın sahip olduğu takım sağlığı kontrolü | Sürekli iyileştirme | Takımın daha etkili olma yolları üzerine düşünmesi | Aylık veya üç aylık |
| Araç ve süreç memnuniyeti | Takımın günlük kullandığı araç ve süreçlerden memnuniyetine dair derecelendirmesi | adı belirtilen her araç veya süreç için ortalama derece ya da olumlu yanıt payı | ölçek puanı veya yüzde | Kısa nabız | Hizmet düzeyi yönetimi; sürekli iyileştirme | Ortamın işe uyumu | Üç aylık |
| Boyut kapsamı | Bir takımın fiilen kullandığı ölçümlerin kapsadığı SPACE boyutu sayısı | kullanımda en az bir ölçümü olan beş boyutun sayısı | sayı (0 ile 5 arası) | Metrik kaydı | Ölçüm ve raporlama; yönetişim | Dengeli ölçümler | Yıllık |

Her şeyi takım düzeyinde toplulaştırın ve asgari bir grup büyüklüğü belirleyin; örneğin beş kişiden küçük bir grup için sonuç yayımlanmasın. Odaklanma süresi takımın kendi tanımıdır ve takvimden türetilen her rakam isteğe bağlıdır, toplulaştırılmıştır ve takım tarafından kabul edilmiştir. Geri bildirim döngüsü süreleri sistemlerden gelir ve insanları değil boru hattını tanımlar. Boyut kapsamı, ölçüm programının bir denetimidir ve tek tür bir ölçüme dayanmayı önlemeyi amaçlar.

## Öneriler

### İnsanların çalıştığı koşullarla başlayın

**1. Takıma onları neyin yavaşlattığını sorun.** Bir anketle değil, bir konuşmayla başlayın: zamanınızı ne boşa harcıyor, neyi anlamak zor, sizi en çok ne kesintiye uğratıyor? Yanıtları takımın kendi sözcükleriyle yazın. Konuşma, hiçbir panonun bulamayacağı sorunları bulur ve sonraki anketlerin ihtiyaç duyduğu güveni kurar. Hangi iki ya da üçünün ölçüleceği konusunda anlaşın.

**2. Üç DevEx boyutunu mercek olarak kullanın.** Geri bildirim döngüleri, bilişsel yük ve akış durumunun her biri için bir algı sorusu ve mümkünse bir sistem ölçümü seçin. Geri bildirim döngüleri için “Derlemelerin ne kadar sürdüğünden ne kadar memnunsunuz?” sorusunu derleme süresiyle eşleştirin. Bilişsel yük için, adı belirtilen bir sistemi anlamanın ve değiştirmenin ne kadar zor olduğunu sorun. Akış için insanların ne sıklıkla kesintisiz çalışabildiğini sorun. İnsanların söylediklerini sistemlerin kaydettikleriyle eşleştirin ve uyuşmazlıklara bakın.

**3. SPACE’in birkaç boyutunu kapsayın.** Hiçbir veri türü baskın olmasın diye, beş boyutun en az üçünden ölçümler seçin. Hizmet işleten bir takım için memnuniyet ve iyi oluş, iş birliği ile verimlilik ve akış çoğu zaman en önemlisidir. Etkinlik ölçümlerine büyük özen gösterin ve bunları yalnızca bağlam olarak kullanın. Boyut kapsamı ölçümü bunu dürüst tutar.

### Özenle ölçün

**4. Takımın sağlık kontrolüne sahip olmasına ve sonuçları önce okumasına izin verin.** Takım sağlık kontrolü, takımın seçtiği boyutlarda (örneğin keyif, destek, hız, öğrenme ve yayın kolaylığı) yapılan kısa bir öz değerlendirmedir. Takım, kimse bir özet görmeden önce kendi sonuçlarını okur ve tartışır. Diğerleri karşılaştırılacak puanları değil, eğilimleri ve takımın yardım istediği engelleri görür. Bu, aracı bir öğrenme yardımcısı olarak tutar ve [psikolojik güvenliğe](https://en.wikipedia.org/wiki/Psychological_safety), yani insanların konuştukları için cezalandırılmayacağına dair ortak inanca dayanır.

**5. Önemli geri bildirim döngülerinin süresini ölçün.** İnsanların şikâyet ettiği döngülerin süresini ölçün: yerel derleme, test paketi, kod inceleme beklemesi, test ortamına dağıtım. Yavaş kuyruk ortalamanın gösterdiğinden daha çok zarar verdiği için medyanı ve 85. yüzdeliği raporlayın. Sayıları boru hattına sahip olan takımla paylaşın ve iyileştirmeyi düzenli bir iş kalemi olarak belirleyin (bkz. Konu 2.7 “Çekme isteği ve kod inceleme metrikleri”).

**6. Odaklanmayı koruyun ve nazikçe ölçün.** Nabızda odaklanmayı sorun ve kesintilere neyin yol açtığına bakın: toplantı yükü, bildirimler, plansız talepler. Bir takım takvim örüntülerine bakmak isterse, bunu onların onayıyla yapın ve sonuçları toplulaştırın. Bireylerin etkinliğini ya da varlığını asla izlemeyin. Amaç, kaldırılabilecek yapısal kesintileri bulmaktır; örneğin bir doküman olabilecek bir toplantı.

**7. Engelleri çözüme kadar izleyin.** Takımın dile getirdiği engelleri gösteren görünür bir liste tutun ve bunların çözülmesinin ya da bilinçli olarak bir kenara bırakılmasının ne kadar sürdüğünü ölçün. Hiç kısalmayan uzun bir liste, insanlara sorun dile getirmenin anlamsız olduğunu öğretir. Bir engeli gerekçesiyle birlikte kaldırmama kararı, çözüm sayılır.

### Sonuçları iyileştirmek için kullanın

**8. Bir seferde bir ya da iki şeyle ilgilenin.** En yüksek değerli engeli seçin, giderin ve takıma söyleyin. Görünür eylem, güven için uzun bir rapordan daha çok şey yapar. Aynı anda birçok girişim başlatma cazibesine direnin.

**9. İnsan ölçümlerini sonuç ölçümleriyle eşleştirin.** Geri bildirim döngülerinin ve bilişsel yükün teslimat ve kararlılık sonuçlarıyla nasıl ilişkili olduğuna bakın (bkz. Konu 2.8 “DORA metrikleri”). Kendi verilerinizdeki ilişkiden nedensellik çıkarmayın. Eşleştirmeyi, keşfedilecek soruları bulmak için kullanın; örneğin incelemeleri daha yavaş olan takımların çevrim süreleri de daha uzun mu.

**10. Etkinlik sayımlarını konuşmanın dışında tutun.** Kişi başına commit, kod satırı ya da kapatılan bilet raporlamayın. Takım çıktılarının sayımları akış için yararlı olabilir, ancak sağlık hakkında çok az şey söyler. Biri bireysel etkinlik metrikleri isterse araştırmayı açıklayın ve bunun yerine koşul ölçümleri önerin.

### İnsanları koruyun

**11. Toplamadan önce gizlilik kurallarını belirleyin.** Neyin toplandığını, nedenini, kimin gördüğünü, ne kadar süre saklandığını ve verinin asla ne için kullanılmayacağını yazın. Takım düzeyinde toplulaştırın, küçük grupları bastırın ve ilgili insanların temsilcilerinin kuralları gözden geçirmesine izin verin. Bu verilerin hiçbirini performans değerlendirmesinde, terfide ya da disiplin işlemlerinde kullanmayın.

**12. Sürdürülebilir tempoyu varsayılan yapın.** Bir takımın yüksek tempoda çalıştığına dair işaretlere dikkat edin: mesai dışı olayların uzun bir dizisi, kalıcı bir acillik hâli, uzayan engel listeleri, düşen memnuniyet. Bunları kapsam, kadro ya da önceliklerle çözülecek sistem sorunları olarak ele alın. İnsanların sürdürebileceği sabit bir tempo bir tasarım hedefidir ve kaliteyi, öğrenmeyi ve elde tutmayı destekler (bkz. Konu 9.2 “Memnuniyet ve iyi oluş metrikleri”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Geri bildirim döngüsü süresi | Yavaş vakaları dışarıda bırakmak; işin çoğunun izlemediği hızlı bir yolu ölçmek | 85. yüzdeliği raporlayın; her döngünün başlangıcını ve bitişini kayıtta tanımlayın |
| Odaklanma süresi payı | Odaklanmadan takvim zamanı bloklamak; yöneticileri memnun etmek için şişirilmiş odaklanma bildirmek | Takımın sahip olduğu nabız; kesinti nedenleriyle karşılaştırma; bireysel raporlama yok |
| Bilişsel yük derecesi | İnceleme çekmemek için sistemleri düşük derecelendirmek; derecelendirmek için kolay sistemleri seçmek | Sabit bir sistem listesini derecelendirin; işe alıştırma süresi ve olay örüntüleriyle karşılaştırın |
| Engel çözüm süresi | Engelleri gidermeden kapatmak; engelleri kaydetmeyi reddetmek | Takım çözümü onaylar; yeniden açılan engel oranı |
| Takım sağlığı kontrolü eğilimi | Yöneticilerin iyi puan için baskı yapması; takımların dikkat çekmemek için puanları ayarlaması | Sonuçlar takıma aittir; eğilimler yalnızca takımın onayıyla paylaşılır |
| Araç ve süreç memnuniyeti | Mutlu kullanıcıları anketlemek; çalışanları iyi yanıt vermeye eğitmek | Yanıt oranı ve dağılımı; yorumları okuyun; sistem ölçümleriyle ilişkilendirin |
| Boyut kapsamı | Bir boyutu göstermelik bir ölçümle saymak | Sayılan her ölçümün bir kararda kullanıldığını denetleyin |

Sağlıklı bir okuma şöyledir: daha kısa ve daha kararlı geri bildirim döngüleri, kilit sistemlerde azalan bilişsel yük, gerçek odaklanma bildiren takımlar, dile getirilen ve çözülen engeller, takımın güvendiği sağlık kontrolleri ve verilerin bireyler üzerinde hiç kullanılmaması.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yönü | Zayıf yönü |
| --- | --- | --- |
| Algı anketleri | Sistemlerin yakalayamadığını yakalar; düşük maliyet | Özneldir; korkuya ve yorgunluğa açıktır |
| İş akışı ölçümleri | Nesnel; sürekli | Duyguları ve nedenleri kaçırır; gözetim riski |
| Takımın sahip olduğu sağlık kontrolü | Takım için dürüst ve yararlı | Karşılaştırması zor; ölçeklenmesi zor |
| Şirket genelinde standart anket | Takımlar arasında karşılaştırılabilir | Daha az ilgili; sıralamak için kullanılır |
| Etkinlik sayımları | Toplaması kolay | Zayıf vekiller; kolayca oyunlaştırılır |
| Koşul odaklı ölçümler | Düzeltilebilir nedenleri gösterir | Takip çabası gerektirir |
| Sık nabızlar | Zamanında | Anket yorgunluğu |
| Yıllık anket | Düşük yük | Yavaş; bayat |

Düz yanıt şudur: takımın sahip olduğu sağlık kontrollerini ve kısa nabızları, insanların şikâyet ettiği döngülerin iş akışı ölçümleriyle birleştirin, etkinlik sayımlarından kaçının ve gizliliği koruyun. Şirket genelindeki karşılaştırmaları az kullanın ve takımları sıralamak için asla kullanmayın.

## Takımınızla tartışılacak sorular

**1. Çalışma günümüzün en yavaş geri bildirim döngüsü nedir ve gerçekte ne kadar sürüyor?**
İnsanların en çok şikâyet ettiği döngüyü seçin. Sistemlerden süresini ölçün ve insanların söylediğiyle karşılaştırın. Kolaylaştırıcı, her iki yöndeki sürprizleri not etmelidir. Onu kısaltacak bir değişiklik üzerinde ve bunun sahibi üzerinde anlaşın.

**2. Hangi sistemi değiştirmekten çekiniyoruz ve onu zorlaştıran ne?**
Sistemin adını koyun. Güçlük kodda mı, dokümantasyonda mı, araçlarda mı, yoksa birkaç kişinin kafasındaki bilgide mi? Yükü en çok hangi tek iyileştirmenin azaltacağını sorun. İşe yarayıp yaramadığını nasıl anlayacağınızı planlayın.

**3. Her birimiz en son ne zaman uzun bir kesintisiz zaman bloğu yaşadı ve başarısız olanları ne böldü?**
Dürüstçe ve suçlamadan paylaşın. Kesintileri listeleyin ve yapısal (toplantılar, bildirimler, plansız talepler) ve tesadüfi olarak ayırın. Azaltılacak bir yapısal kesinti seçin.

**4. Hangi engeli bir sonuç almadan birden fazla kez dile getirdik?**
Engel listesine bakın. Uzun süredir bekleyen her kalem için, kimin çözebileceğini ve onların önünde neyin durduğunu sorun. Takım engel dile getirmeyi bıraktıysa nedenini tartışın. Kanıtla üst makama taşınacak bir engel üzerinde anlaşın.

**5. Dürüst bir sağlık kontrolü yanıtı vermekte bizi ne tereddüt ettirir?**
Sonuçların nasıl kullanılabileceğine dair korkuları tartışın. Kolaylaştırıcı kaygıları kaydetmeli ve kurallar üzerinde anlaşmalıdır: verileri kim görür, onlarla asla ne yapılmayacak. Kurallara güvenilmiyorsa bunu söyleyin ve neyin güven kazandıracağına karar verin.

**6. Ölçümlerimizden hangisi, iş kötüleşirken yükselebilir?**
Ölçümleri listeleyin ve her birinin kimseye yardım etmeden nasıl iyileştirilebileceğini düşünün. Her birine bir koruma önlemi atayın. Bir kararda kullanımı olmayan ölçümleri kaldırın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları onları neyin yavaşlattığını en iyi bilir ve kendi sağlık kontrollerinin sahipleridir. Engelleri adlandırmalı, kontrol ettikleri döngülerin süresini ölçmeli ve önce neyin düzeltileceğine takımla birlikte karar vermelidir. Bireysel etkinlik raporlama baskısına direnmeli ve takım düzeyinde ölçümlerde ısrar etmelidir.

### Hizmet ve operasyon takımları

Operasyon takımları, odaklanmayı ve tempoyu aşındıran nöbeti, kesintileri ve plansız işi taşır. Yapısal yükü bir sistem sorunu olarak dile getirmeli, kendi araçlarının döngülerini ölçmeli ve sürdürülebilir bir rotasyon tutmalıdır. Birçok engel sınırı aştığı için teslimat takımlarıyla ortak engel listelerinden yararlanırlar.

### Liderlik ve yönetişim

Liderler koşulları belirler ve verilerin nasıl kullanılacağına karar verir. Koşul ölçümlerinin ortaya çıkardığı düzeltmeleri finanse etmeli, gizlilik kurallarını korumalı ve karşılaştırılacak puanlar yerine eğilimleri ve engelleri istemelidir. Yönetişim, bireysel etkinlik metrikleri talebini kuralları yeniden gözden geçirmek için bir neden saymalı ve iyileştirme çalışmasının görünür olmasını beklemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar, sakin çalışabilen ve hızlı öğrenen takımlardan yarar sağlar, çünkü sorunları iyi çözülür. Bir takımın bunaldığını da fark ederler: daha yavaş yanıtlar, tekrarlanan hatalar, yüksek devir. Geri bildirimleri, takım sağlığına dışarıdan bakan bir kanıttır ve düzeltmelerin nasıl önceliklendirildiği konusunda dürüstlüğü hak ederler.

## Uygulamada: çevik bir ITIL örneği

Ulusal bir sigortacının teknoloji grubunun, poliçe ve hasar hizmetlerini geliştiren ve işleten 14 takımı vardır. Liderlik, bir geliştirici verimliliği panosu ister. İlk talep, kişi başına commit ve kapatılan bilet sayılarıdır. Mühendislik etkinliği başkanı farklı bir yaklaşım önerir. Aşağıdaki sayılar örnek niteliğindedir.

Beş takımda konuşmalarla başlar. Üç engel tekrar tekrar ortaya çıkar: test paketi 70 dakika sürmektedir, iki kıdemli incelemeciye bağlı takımlarda kod incelemeleri uzun süre beklemektedir ve kimse eski hasar hesaplama hizmetini değiştirebileceğini hissetmemektedir. Sistemlerden ölçebildiklerini ölçer. Derleme ve test döngüsünün medyanı 58 dakikadır ve 85. yüzdeliği 92’dir. İlk incelemeyi bekleme süresinin medyanı 9 iş saati, 85. yüzdeliği 31 saattir. Asgari raporlama grubu beş olmak üzere, üç DevEx sorusunu içeren kısa bir üç aylık nabız ekler. Hasar hesaplama hizmetinin bilişsel yük derecesi, 5’in çok zor olduğu beş puanlık ölçekte 4,4’tür; poliçe portalı için bu değer 2,6’dır. Takımların bildirdiği odaklanma süresi günde yaklaşık 3 saattir ve başlıca nedenler toplantılar ile plansız taleplerdir. Her takım kendi seçtiği boyutlarda kendi sağlık kontrolünü yürütür ve yalnızca birleşik eğilimi okur.

Grup, takımlarla dört eylem üzerinde anlaşır. Test paketi bölünür ve paralelleştirilir ve 85. yüzdelik iki ay içinde 92’den 41 dakikaya düşer. Bir inceleme çizelgesi yükü iki kıdemli incelemecinin ötesine yayar ve 85. yüzdelik bekleme 14 saate düşer. Üç takım haftalık toplantısız bir blok üzerinde anlaşır ve bir takım plansız taleplerin kendisine ulaşma biçimini yeniden düzenler. Hasar hesaplama hizmeti, eşli çalışma ve dokümantasyonla ortak bir öğrenme projesine dönüşür ve bilişsel yük derecesi iki çeyrek içinde 3,5’e düşer. Bildirilen odaklanma süresi yaklaşık 4 saate çıkar.

Üst düzey bir yönetici yeniden bireysel commit sayıları istediğinde, mühendislik etkinliği başkanı SPACE ve DevEx araştırmasını açıklar ve koşullar panosunu önerir. Karar, bireysel etkinliğin değerlendirmelerde asla kullanılmayacağını belirten gizlilik kurallarıyla birlikte kaydedilir. Bir takım, sağlık kontrolü sonuçlarının bu çeyrekte liderlik için özetlenmemesini ister ve talep kabul edilir. İlgili takımlardaki işten ayrılmalar sonraki yıl içinde azalır; başkan bağlantıyı kanıtlayamayacağını ve iddia etmeyeceğini not eder.

## Sektör mercekleri

**Girişim (startup).** Herkes herkesi tanır, bu yüzden konuşmalar anketlerden daha iyidir. Başlıca geri bildirim döngülerinin süresini ölçün, derlemeleri hızlı tutun ve sürdürülemez tempo işaretlerine dikkat edin; çünkü birkaç kişi çok yük taşır. Büyük bir anket programı ithal etmeyin.

**Küçük işletme.** Küçük bir takım, hem geliştiren hem destek veren bir ya da iki kişi olabilir. Başlıca riskleri kesinti ve bireylere bağımlılıktır. Basit bir engel listesi tutun, yokluklar için yedek sağlayın ve birbirinize düzenli olarak neyin yolunuza çıktığını sorun. Bireysel düzeydeki veriler doğası gereği kimliği belli eder, bu yüzden konuşmaya dayanın.

**Büyük kurum.** Ölçek çeşitlilik ve karşılaştırma cazibesi getirir. Takımlar sağlık kontrollerine sahip çıkarken ortak bir araç seti (nabız soruları, döngü süreleri) sağlayın. Dikkatle toplulaştırın, takımlar arasında örüntüleri paylaşarak düzeltmeleri yayın ve sıralamaları dışarıda tutun. Varsa iş konseylerini ya da çalışan temsilcilerini dahil edin.

**Kamu sektörü.** Tedarik, güvenlik kuralları ve onay zincirleri geri bildirim döngülerini uzatır ve çalışanların izlemeye karşı güçlü korumaları olabilir. Döngüleri ölçün, veri kurallarını belirlerken temsilcileri dahil edin ve bulguları süreçleri sadeleştirmek için kullanın. Hizmet değeriyle motive olan kamu görevlileri, engellerin görünür biçimde kaldırılmasından yarar sağlar (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler şunlardır: sağlık kontrolleri ve nabızlar için takımların zamanı, boru hatlarının ve inceleme araçlarının biraz enstrümantasyonu, sonuçları yorumlamaya ve kolaylaştırmaya yardım edecek bir analist ya da koç ve engelleri kaldırmak için mühendislik zamanı. Bu maliyetlerin çoğu, birçok insanla çarpılan yavaş döngülerin maliyetine kıyasla küçüktür.

Getiri, geri kazanılan zamandan, daha az yeniden işten, daha iyi elde tutmadan ve daha hızlı öğrenmeden gelir. Bunu kendi verilerinizden tahmin edin: grup genelinde derlemeleri ve incelemeleri beklemekle kaybedilen haftalık saatler, ayrılanların yerine işe alma ve işe alıştırma maliyeti ve aşırı yüklü takımlara bağlı olay ya da kusur örüntüleri. Dakikaları paraya çevirirken temkinli olun ve varsayımları belirtin. Yöntemini ve uygunluğunu izleyemediğiniz sürece, yayımlanmış çalışmalardaki verimlilik kazançlarına dair iddialardan kaçının. Yanlış yapmanın maliyetini unutmayın: gözetim olarak görülen bir program güveni ve sonraki her anketin kalitesini zedeler (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Bireysel verimlilik panoları.** Etkinliği ölçerler, oyunlaştırmaya davet çıkarırlar ve güveni zedelerler. Koşulları takım düzeyinde ölçün.
- **Takımları karşılaştırmak için sağlık kontrolü puanlarını kullanmak.** Takımlar o zaman puanı yönetir. Takımların sonuçlarına sahip olmasına izin verin.
- **Eylemsiz anketler.** İnsanlar yanıtlamayı bırakır. Her döngüde görünür bir şeyi düzeltin.
- **Çevrim içi süreyi veya varlığı ölçmek.** Görünürlüğü ödüllendirir, odaklanmayı cezalandırır. Döngüleri ve engelleri ölçün.
- **Her şey için tek bir ölçüm.** Resmin çoğunu kaçırır. Birkaç boyutu kapsayın.
- **Kuyruğu yok saymak.** Medyanlar zarar veren yavaş döngüleri gizler. Yüzdelikleri raporlayın.
- **Sistem sorunları için insanları suçlamak.** Engeller genellikle yapısaldır. Yapıyı düzeltin.
- **Yüksek tempoyu normal saymak.** Kalıcı acillik insanları tüketir. Süregelen aşırı yükü bir planlama başarısızlığı olarak görün.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Koşulları anlamak | Anekdot | Ara sıra anket | Geri bildirim döngüleri, yük ve akış üzerine düzenli konuşmalar ve nabızlar | Algı ve iş akışı verileri takım düzeyinde eğilimlerle birleştirilmiş | Takımlar ve tedarikçiler arasında koşulların ortak görünümü; takımlar ölçümleri birlikte tasarlar |
| Sahiplik ve etik | Yönetim her şeyi okur | Gayriresmî özen | Takımın sahip olduğu sağlık kontrolleri; yazılı gizlilik kuralları | Kurallar temsilcilerle gözden geçirilir; bireysel kullanım yasağı uygulanır | Kurallar ve uygulamalar bağımsız olarak denetlenir; takımlar veri paylaşımını kontrol eder |
| Eylem | Şikâyetler ele alınmaz | Gelişigüzel düzeltmeler | Sahipli engel listesi; döngü başına bir ya da iki düzeltme | Düzeltmeler izlenir ve sonuçlara bağlanır; sürdürülebilir tempo izlenir | Engel kaldırma planlamaya yerleşiktir; öğrenme geniş biçimde paylaşılır |

## Kontrol listesi

- [ ] Takımlar, onları neyin yavaşlattığını kendi sözleriyle söyledi.
- [ ] Geri bildirim döngülerinin, bilişsel yükün ve akışın her birini en az bir algı sorusu ve bir sistem ölçümü kapsıyor.
- [ ] Ölçümler en az üç SPACE boyutundan geliyor.
- [ ] Her takım kendi sağlık kontrolüne sahip ve sonuçları önce o okuyor.
- [ ] Geri bildirim döngüsü süreleri medyan ve 85. yüzdelik olarak raporlanıyor.
- [ ] Görünür bir engel listesinin sahipleri var ve çözüm süresi izleniyor.
- [ ] Sonuçlar, asgari grup büyüklüğüyle takım düzeyinde raporlanıyor.
- [ ] Yazılı gizlilik kuralları, bireysel verilerin değerlendirmelerde kullanılmayacağını belirtiyor.
- [ ] Etkinlik sayımları verimlilik olarak raporlanmıyor.
- [ ] Takım her döngüde en az bir düzeltme görüyor.

## Yapay zekâ istemleri

**Üç DevEx boyutu için nabız soruları taslağı hazırlayın.**

```text
[takım türü] için geri bildirim döngülerini, bilişsel yükü ve akış durumunu
kapsayan, altı soruyu geçmeyen kısa bir nabız taslağı hazırla. Tarafsız bir
dil, tutarlı bir ölçek ve bir açık yorum alanı kullan. Her soru için,
karşılaştırabileceğimiz eşleşen bir sistem ölçümü öner. Araştırma sonuçları
uydurma. Varsayımlarını ve soruların yanlış anlaşılabileceği yolları listele.
```

**Engel listesi örüntülerini analiz edin.**

```text
Takımın son [dönem] için engel listesi, dile getirilme tarihleri, çözüm
tarihleri ve kısa açıklamalarla şöyle: [temizlenmiş olarak yapıştırın].
Engelleri nedene göre grupla, uzun süredir bekleyen kalemleri ve örüntüleri
belirt, hangi bir ya da ikisiyle önce ilgilenilmesi gerektiğini ve nedenini
öner. Niyet çıkarma ve kişi adı verme. Varsayımlarını ve takımın neleri
doğrulaması gerektiğini listele.
```

**Takım sağlığı programı için gizlilik kuralları yazın.**

```text
[kurum türü] içindeki bir takım sağlığı ve geliştirici deneyimi programı için
tek sayfalık bir kural seti taslağı hazırla. Neyin toplandığını, amacı, kimin
neyi gördüğünü, asgari grup büyüklüğünü, saklama süresini, bireysel verilerin
performans değerlendirmelerinde kullanılmayacağı sözünü ve çalışanların
kaygılarını nasıl iletebileceğini kapsa. Hukuk, gizlilik ve çalışan
temsilcileriyle gözden geçirmem gereken her şeyi işaretle. Hukuki sonuç verme.
Varsayımlarını listele.
```

**Koşulları sonuçlarla karşılaştırın.**

```text
[sayı] takım için koşul ölçümlerimiz (geri bildirim döngüsü süreleri, bilişsel
yük dereceleri, odaklanma süresi) ve sonuç ölçümlerimiz (çevrim süresi,
değişiklik başarısızlık oranı, olaylar) var: [tabloyu yapıştırın]. Örüntüleri
tanımla, verinin sonuç çıkarmak için çok seyrek olduğu yerleri belirt ve
takımlarla sınanacak hipotezler öner. Nedensellik iddia etme. Varsayımlarını ve
uyarılarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir takım sağlığı veya geliştirici deneyimi metriği için eşleştirilmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): insanlarla ilgili bir metrik girdisinin oyunlaştırma yolunu, koruma önlemini ve gizlilik kurallarını taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- İnsanların çalıştığı koşulları ölçün: geri bildirim döngüleri, bilişsel yük ve akış.
- İnsanların söylediklerini sistemlerin kaydettikleriyle birleştirin ve uyuşmazlıklara bakın.
- Takımların sağlık kontrollerine sahip olmasına izin verin, takım düzeyinde raporlayın ve verileri asla bireylere karşı kullanmayın.
- Etkinlik sayımlarını verimliliğin yerine koymaktan kaçının.
- Bir seferde bir ya da iki engel üzerinde görünür biçimde eyleme geçin ve engellerin çözülmesinin ne kadar sürdüğünü izleyin.
- Takımın süresiz olarak sürdürebileceği bir tempoyu koruyun.

## Kaynaklar ve ileri okuma

1. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
2. Noda, A., Storey, M.-A., Forsgren, N., and Greiler, M., "DevEx: What Actually Drives Productivity," *ACM Queue*, 21(2), 2023.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Edmondson, A. C., "Psychological safety and learning behavior in work teams," *Administrative Science Quarterly*, 44(2), 1999.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Productivity](https://en.wikipedia.org/wiki/Productivity).
7. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
8. Wikipedia, [Developer experience](https://en.wikipedia.org/wiki/Developer_experience).
9. Wikipedia, [Cognitive load](https://en.wikipedia.org/wiki/Cognitive_load).
10. Wikipedia, [Flow (psychology)](https://en.wikipedia.org/wiki/Flow_(psychology)).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
