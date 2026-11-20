# İzleme ve uyarı kalitesi metrikleri

**Bir uyarı, bir insanın dikkatine yapılan bir istektir; bu yüzden izlemeyi, bu isteğin ne sıklıkla yapmaya değer olduğuna, gerçek sorunun ne kadarını yakaladığına ve ne kadar uykuya ve güvene mal olduğuna göre ölçün.**

## Genel bakış ve motivasyon

İzleme, bir sistem hakkındaki gerçek zamanlı verilerin toplanması, işlenmesi ve görüntülenmesidir. [Sistem izleme](https://en.wikipedia.org/wiki/System_monitoring), “hizmet kullanıcıların ihtiyaç duyduğu şekilde çalışıyor mu?” sorusunu yanıtlar. Uyarı ise bu verinin bir insandan bir şey yapmasını istediği noktadır. Çoğu ekip birinci etkinliği kötü ölçer ya da hiç ölçmez, ikincisini ise yalnızca şikâyetler aracılığıyla ölçer. Bu konu, ikisi için de küçük bir ölçüm kümesi sunar: izlemenin önemli arızaları görüp görmediği ve ürettiği uyarıların talep ettikleri dikkati hak edip etmediği.

Önce bazı terimler. ITIL 4 sözcük dağarcığında olay (event), bir hizmeti yönetmek için anlamı olan bir durum değişikliğidir ve olay yönetimi (event management), olayları algılama, hangilerinin önemli olduğuna karar verme ve yanıtı seçme uygulamasıdır. Uyarı, bir insana yapılan, çağrı, mesaj ya da kayıt olarak iletilen bir bildirimdir. Çağrı (page), birinin hemen bölünmesine yol açan bir uyarıdır. Yanlış pozitif, dikkat gerektiren hiçbir şey yokken tetiklenen bir uyarıdır; yanlış negatif ise hiçbir uyarının raporlamadığı bir arızadır; iki terim de [yanlış pozitifler ve yanlış negatifler](https://en.wikipedia.org/wiki/False_positives_and_false_negatives) dilinden gelir. Eyleme dönüştürülebilir uyarı, bir kişinin yapabileceği yararlı bir eylemi olduğu ve onu yaptığı ya da kayıtlı bir nedenle yapmamayı bilerek seçtiği uyarıdır.

İzlemenin iki yanı birbirine ters yönde çeker. Her olaydan sonra uyarı eklemek bir gürültü duvarı inşa eder; onu susturmak için kesmek ise önemli olan arıza sırasında sessizlik riskini doğurur. [Kesinlik ve duyarlılık](https://en.wikipedia.org/wiki/Precision_and_recall) dili buna iyi uyar. Kesinlik, üretilen uyarıların ne kadarının üretmeye değer olduğunu sorar. Duyarlılık, gerçek sorunların ne kadarının uyarılarca yakalandığını sorar. Uyarı kalitesi ikisi arasındaki dengedir ve yalnızca birini izleyen bir metrik, ekibi diğerinden fedakârlık etmeye davet eder. [Sinyal-gürültü oranı](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) aynı gerilimi yakalar.

İnsani maliyet, bunun bir hizmet metrikleri kitabına ait olmasının nedenidir. [Alarm yorgunluğu](https://en.wikipedia.org/wiki/Alarm_fatigue), çoğu önemsiz çok sayıda alarma maruz kalan insanların duyarsızlaşma ve önemli olanlara yavaş yanıt verme eğiliminin iyi belgelenmiş halidir. İlk olarak klinik ortamlarda incelenmiştir ve hiçbir yere varmayan uyarılarla çok sık çağrılan herhangi bir [nöbet](https://en.wikipedia.org/wiki/On-call) rotasyonu için geçerlidir. Yorgun yanıtlayıcılar gerçek olayları kaçırır ve sonunda rotasyondan ayrılır.

Bu kitabın birleştirdiği iki gelenekte görüşler farklıdır. ITIL 4, bu işi izleme ve olay yönetimi uygulamasına, olay yönetimi ve hizmet düzeyi yönetimine bağlantılarla yerleştirir. Kaygısı, olayların algılanması, sınıflandırılması ve yönlendirilmesidir; böylece olaylar erken bulunur ve tutarlı biçimde ele alınır. [Site güvenilirliği mühendisliği (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) konuya öbür uçtan yaklaşır: Google'ın *Site Reliability Engineering* kitabı, çağrıların acil, önemli, eyleme dönüştürülebilir ve gerçek olması gerektiğini, geri kalan her şeyin bir kayda ya da panoya ait olduğunu savunur. Çevik ekipler bununla bir çalışma anlaşması olarak karşılaşır: kim, ne için uyandırılır ve yanlış bir uyarıyı kim düzeltir. Aşağıdaki metrikler üçünden de ödünç alır ve tek bir kuralı korur: bir metrik bir rotasyonu, bir hizmeti ya da bir uyarı kuralını tanımlar, bir bireyi asla.

Bu konu komşularını tekrar etmez. Olay zamanlamaları Konu 3.3 “Olaya yanıt ve çözüm süresi”ne, büyük olaylar Konu 3.4 “Büyük olay metrikleri”ne, hedefler ve hata bütçeleri Konu 5.2 “SLI, SLO ve hata bütçeleri”ne ve insani yük Konu 5.7 “Angarya ve nöbet metrikleri”ne aittir. Burada konu, bunların hepsini başlatan sinyalin kalitesidir. Enstrümantasyon Konu 1.5 “Veri kaynakları ve enstrümantasyon” içinde ele alınır.

## Temel ilkeler

- **Kullanıcıların hissettiği belirtiler için çağrı yapın; gerisi için kayıt ya da pano kullanın.** Kullanıcıların yaşadığı şeye (hatalar, yavaşlık, kullanılamama) ilişkin bir uyarı, sistem değiştikçe yararlı kalır. Bir nedene (dolu bir disk, meşgul bir CPU) ilişkin uyarı yalnızca bir belirtiyi öngördüğünde ve bir insan o gelmeden önce harekete geçebildiğinde yararlıdır.
- **Her uyarı bir eyleme yol açmalıdır.** Bir uyarıya doğru yanıt hiçbir şey yapmamaksa uyarı değiştirilmeli, bir kayda indirilmeli ya da silinmelidir. Eyleme yol açanların payını ölçün ve gerisini izlemedeki kusurlar olarak ele alın.
- **Hem kesinliği hem duyarlılığı ölçün.** Yalnızca gürültüyü saymak sessizliği, yalnızca kapsamı saymak hacmi ödüllendirir. İkisi birlikte kaliteyi tanımlar ve her biri diğerinin korkuluğu olarak işlev görür.
- **Her uyarı kuralını sahibi olan bir ürün olarak ele alın.** Bir kuralın bir amacı, bir eşiği, bir çalışma kılavuzu ve bir gözden geçirme tarihi vardır. Sahipsiz kurallar birikir ve ürettikleri gürültü kimseye ait değildir.
- **Rotasyonları ve hizmetleri raporlayın, insanları asla.** Uyarı yükü, sistemin ve rotasyonun nasıl tasarlandığının bir özelliğidir. Bireyleri adlandırmak bir tasarım sorununu suçlama sorununa dönüştürür ve gerçek düzeltmeyi gizler.

## Metrik tanımları

Aşağıdaki metrikler bir küme olarak seçilmiştir. Hacim tek başına anlamsızdır, eyleme dönüştürülebilirlik hacmin bir sorun olup olmadığını söyler, kapsam ve algılama süresi ise sessizliğin ne gizlediğini söyler. Hepsi hizmet ya da rotasyon başına hesaplanır ve hepsi, olay ve kayıt kayıtlarına birleştirilmiş izleme ve çağrı araçlarından gelen uyarı kaydını kullanır.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılık | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Uyarı hacmi | Bir insanı bilgilendiren uyarıların sayısı, çağrılar ve kayıtlar olarak ayrılmış | Dönemde bir rotasyona ya da kuyruğa iletilen ayrı bildirimlerin sayısı; aynı açık uyarının tekrarları bire gruplanır; hiçbir insan bildirimi olmadan tümüyle otomasyonla ele alınan uyarılar hariç tutulur; rotasyon başına hafta başına ve mesai dışı payı ayrıca raporlayın | rotasyon-haftası başına uyarı | Çağrı ve uyarı yönlendirme aracı | İzleme ve olay yönetimi | Nöbet üzerine ekip çalışma anlaşması | Haftalık |
| Eyleme dönüştürülebilir uyarı oranı | Ardından bir kişinin yararlı bir eylem yaptığı uyarıların payı | Kaydedilmiş bir eylemi (düzeltme, hafifletme, eskalasyon ya da uyarı kuralında bir değişiklik) olan uyarılar / dönemde gözden geçirilen uyarılar; herhangi bir onaydan önce kendiliğinden çözülen uyarılar eyleme dönüştürülebilir değil olarak sayılır; gözden geçirilmeyen uyarılar atılmaz, ayrı bir sayı olarak raporlanır | yüzde | Gözden geçirme etiketine, kayda ya da olaya birleştirilmiş uyarı kaydı | İzleme ve olay yönetimi; olay yönetimi | Operasyonlar üzerine ekip iyileştirme eylemi | Haftalık gözden geçirme, aylık eğilim |
| Yanlış pozitif oranı | Hiçbir sorun yokken tetiklenen uyarıların payı | Dönemde gözden geçirmede yanlış pozitif olarak etiketlenen uyarılar / gözden geçirilen uyarılar; “yanlış pozitif”, durumun bir arıza olmadığı ve kimsenin bilgilendirilmek istemeyeceği anlamına gelir; üzerinde harekete geçilemeyecek kadar küçük gerçek bir sorun yanlış pozitif değildir | yüzde | Uyarı gözden geçirme etiketleri | İzleme ve olay yönetimi | Retrospektif gürültü gözden geçirmesi | Aylık |
| Algılama kapsamı | En az bir sınanmış, kullanıcıya dönük belirti uyarısı olan kapsamdaki hizmetlerin payı | Son 12 ayda bir test ya da gerçek bir olayla sınanmış belirti uyarısı olan hizmetler / hizmet kataloğu kapsamındaki hizmetler; kapsamdaki hizmetlerin listesi dönemin başında sabitlenir | yüzde | Hizmet kataloğu, uyarı kuralı envanteri, test kayıtları | Hizmet yapılandırma yönetimi; izleme ve olay yönetimi | Yeni bir hizmet için bitti tanımı | Üç aylık |
| İzlemeyle algılanan pay | Bir kullanıcı ya da meslektaş bildirmeden önce izlemenin algıladığı olayların payı | İlk sinyali bir uyarı olan olaylar / dönemdeki olaylar; saat olayın açılış zamanıdır ve kayıtlı ilk sinyali olmayan olaylar algılanmış olarak değil bilinmiyor olarak raporlanır | yüzde | İlk sinyal alanlı olay kaydı, uyarı zaman çizelgesi | Olay yönetimi | Olay incelemesi (olay sonrası öğrenme) | Aylık |
| Algılama süresi (TTD) | Kullanıcı etkisinin başlangıcı ile bir insanı bilgilendiren ilk uyarı arasında geçen süre | İnsanı bilgilendiren ilk uyarı zamanı eksi etki başlangıç zamanı; burada etki başlangıcı, olay incelemesinde belirlendiği gibi hizmet düzeyi göstergesinin ilk ihlal edildiği en erken zamandır; medyanı ve 95. yüzdelik dilimi raporlayın; uyarısı olmayan olaylar hariç tutulur ve ayrıca sayılır | dakika | Olay incelemesi, uyarı zaman çizelgesi, hizmet düzeyi göstergesi geçmişi | Olay yönetimi; izleme ve olay yönetimi | Olay sonrası inceleme | Aylık, olay başına |
| Uyarı yoğunlaşması | Uyarı hacminin en gürültülü birkaç uyarı kuralı tarafından üretilen payı | En çok uyarı üreten beş kuraldan gelen uyarılar / dönemdeki tüm uyarılar; aynı uyarı bir kez gruplanır; beş kural sayısı, nedenini belirtmek koşuluyla bir ekibin değiştirebileceği bir kuraldır | yüzde | Uyarı kuralı envanteri ve çağrı kaydı | Sürekli iyileştirme; izleme ve olay yönetimi | Retrospektif iyileştirme birikim listesi | Aylık |
| Uyarı kuralı güncelliği | Bir sahibi, bir çalışma kılavuzu bağlantısı ve üzerinde uzlaşılan aralık içinde bir gözden geçirmesi olan çağrı kurallarının payı | Üç koşulun hepsini karşılayan çağrı kuralları / tüm çağrı kuralları; dönemde devre dışı bırakılan kurallar hariç tutulur | yüzde | Uyarı kuralı envanteri | Bilgi yönetimi; izleme ve olay yönetimi | Operasyonel hazırlık üzerine çalışma anlaşması | Üç aylık |

Uyarı hacmi bağlam gerektirir; bu yüzden eyleme dönüştürülebilir uyarı oranının yanında okuyun. Algılama süresi kaydın değil, kullanıcı etkisinin başlangıcını kullanır; çünkü kayıt saati algılamadan sonra başlar; etki başlangıcı olay incelemesinden bir tahmindir ve böyle etiketlenmelidir. Yanlış pozitif oranı ve eyleme dönüştürülebilir uyarı oranı birbirinin tümleyeni değildir; çünkü bir uyarı doğru olabilir ve yine de bir insanın zamanına değmeyebilir.

## Öneriler

### Neyin çağrıyı hak ettiğine karar verin

**1. Bir çağrı politikası yazın ve kısa tutun.** Neyin çağrıyı hak ettiğini (kullanıcıların şimdi ya da yakında hissedeceği ve bir insanın harekete geçebileceği bir belirti) ve neyin etmediğini bir paragrafta belirtin. Geri kalan her şey bir kayıt kuyruğuna ya da bir panoya gider. Google SRE kitabının dağıtık sistemlerin izlenmesine ilişkin bölümü iyi bir başlangıç noktasıdır (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”).

**2. Belirtilerde uyarın ve nedenleri tanı için saklayın.** “Hata oranı üzerinde uzlaşılan eşiğin üstünde” için bir çağrı, kullanıcılar hakkında bir çağrıdır. “CPU yüksek” için bir çağrı, bir tahmin hakkında bir çağrıdır. Neden düzeyindeki sinyalleri, belirti uyarısı tetiklendiğinde yanıtlayıcının bakacağı panolarda tutun ve birini yalnızca harekete geçmek için yeterli uyarıyla bir belirtiyi güvenilir biçimde öngördüğünde bir çağrıya yükseltin.

**3. Çağrı eşiklerini hizmet düzeyi hedefine bağlayın.** Bir hizmetin [hizmet düzeyi hedefi (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) olduğu yerde, ham eşikler yerine hata bütçesinin tüketilme hızı üzerinde uyarın. SRE Workbook'un SLO'lara dayalı uyarı bölümü, yanma hızı uyarılarını ve kesinlik, duyarlılık, algılama süresi ve sıfırlama süresi arasındaki ödünleşimleri anlatır. Bu yaklaşım, hedefi tehdit eden şey için çağrı yapar ve olmayan kısa dalgalanmalar konusunda sessiz kalır.

### Her uyarıyı bir ritimle gözden geçirin

**4. Her uyarıyı kısa, düzenli bir gözden geçirmede etiketleyin.** Her rotasyon için ne tetiklendiğine bakmak üzere her hafta on beş dakika ayırın. Her uyarı için tek bir etiket kaydedin: eyleme dönüştürülebilir, yanlış pozitif, gerçek ama çağrıya değmez ya da kopya. Etiketler, eyleme dönüştürülebilir uyarı oranı ve yanlış pozitif oranı için veridir ve gözden geçirme, gürültülü kuralların bir sonraki çeyrekte değil ertesi gün düzeltildiği yerdir.

**5. Gözden geçirmenin bir değişiklik üretmesini sağlayın.** Her hafta ayarlanacak, indirilecek, birleştirilecek ya da silinecek en az bir kural seçin ve değişikliği ekibin birikim listesine sıradan iş olarak kaydedin.

**6. Korkmadan silin.** Ekipler uyarıları tutar; çünkü birini silmek riskli hissettirir ve kimse neden var olduğunu hatırlamaz. Her çağrı kuralının bir amaç ve bir sahip taşımasını isteyin ve belirtilmiş bir dönemde hiç eyleme yol açmamış bir kuralın, geri alınabilmesi için değişiklik kaydedilerek, kaldırılacağı ya da indirileceği konusunda uzlaşın. Kural güncelliği metriği bu disiplini görünür kılar.

### İzlemenin kaçırdıklarını ölçün

**7. Kullanıcıların önce bulduğu olayların payını izleyin.** Her olaydan sonra ilk nasıl fark edildiğini kaydedin: bir uyarı, bir meslektaş, bir müşteri, bir destek kaydı ya da rutin bir kontrol. İzlemenin bulduğu pay, duyarlılığın en yakın pratik ölçümüdür. Eksiktir; çünkü kimsenin fark etmediği olaylar örnekleme hiç girmez; bu yüzden uyarıların kendilerinin dönemsel testleriyle eşleştirin.

**8. Algılama süresini dürüstçe tahmin edin.** Kullanıcı etkisinin başlangıcını, birinin kaydı yazdığı andan değil, olay sonrası incelemede hizmet düzeyi göstergesi geçmişinden belirleyin. Medyanı ve yüksek bir yüzdelik dilimi raporlayın ve hiç uyarısı olmayan olayları ayrı bir sayı olarak gösterin. Tek bir ortalama hem tipik durumu hem kötü kuyruğu gizler (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı” ve Konu 3.3 “Olaya yanıt ve çözüm süresi”).

**9. Bağımlı olduğunuz uyarıları test edin.** Algılama kapsamı yalnızca uyarının çalıştığı görüldüğünde güvenilirdir. Tatbikat günlerine ya da yayın provalarına, bilerek bir belirti yaratan ve doğru uyarının tetiklendiğini, doğru rotasyona ulaştığını ve kullanılabilir bir çalışma kılavuzuna bağlandığını doğrulayan bir kontrol ekleyin. Hiç sınanmamış bir uyarı bir umuttur, bir kontrol değil (bkz. Konu 5.6 “Hizmet sürekliliği metrikleri”).

### Sinyal yolunu sağlıklı tutun

**10. İzlemeyi izleyin.** İzleme sisteminin sessiz bir arızası, sağlıklı bir hizmetle tıpatıp aynı görünür. Uyarı boru hattı iletmeyi bırakırsa çağrı yapan bir kalp atışı kontrolü ekleyin ve boru hattının kendisinin ne sıklıkla arızalandığını kaydedin.

**11. Saymadan önce gruplayın, tekilleştirin ve bağlayın.** İlişkili uyarıları bire gruplayın, zaten açık olan bir uyarının tekrarlarını bastırın ve her birini sahibi olan rotasyona yönlendirin. Her uyarıyı çalışma kılavuzuna ve oluşturduğu olaya ya da kayda bağlayın; çünkü bu birleştirme, eyleme dönüştürülebilir uyarı oranını ve izlemeyle algılanan payı elle saymadan hesaplamanıza olanak tanıyan şeydir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş korkuluk metriği ya da uygulaması |
| --- | --- | --- |
| Uyarı hacmi | Sayı düşerken sorunlar görünmez kalsın diye eşikleri yükseltmek, uzun gecikmeler eklemek ya da uyarıları çağrılardan sessiz bir kuyruğa taşımak; sayıyı değiştirmek için uyarıları bölmek ya da birleştirmek | İzlemeyle algılanan pay ve algılama süresi; her indirmenin gerekçesiyle kaydedilmesi ve bir çeyrek sonra gözden geçirilmesi kuralı |
| Eyleme dönüştürülebilir uyarı oranı | Uyarıları sonradan eyleme dönüştürülebilir olarak etiketlemek ya da nitelik kazanmak için önemsiz bir eylem (bir yorum, bir onay) yapmak; gürültülü uyarıları gözden geçirilmeden bırakıp paydaya hiç girmemelerini sağlamak | Oranın yanında gösterilen gözden geçirilmemiş uyarıların sayısı; rotasyonun dışındaki biri tarafından örnek kontrolü; yazılı bir “yararlı eylem” tanımı |
| Yanlış pozitif oranı | “Gerçek ama anlamsız” uyarılar doğru sayılsın diye yanlış pozitifleri dar tanımlamak; gürültülü uyarıları etiketsiz kapatmak | Ayrı izlenen eyleme dönüştürülebilir uyarı oranı ve “gerçek ama çağrıya değmez” etiketi; kapatılmış uyarıların dönemsel örneklenmesi |
| Algılama kapsamı | Kapsam iddia etmek için her hizmete önemsiz bir uyarı (bir ping) eklemek; hiç sınanmamış uyarıları saymak | Uyarının kullanıcıya dönük bir belirtiyi izlemesi ve son 12 ayda sınanmış olması şartı; izlemeyle algılanan pay |
| İzlemeyle algılanan pay | Bir kullanıcı önce bildirmiş olsa bile her olayı “izlemeyle algılandı” olarak kaydetmek; sonradan bir uyarı oluşturup ona atıfta bulunmak; kötü bir sayıdan kaçınmak için ilk sinyal alanını boş bırakmak | Payın yanında gösterilen bilinmeyen sayısı; hafızadan değil uyarı zaman çizelgesinden alınan ilk sinyal kanıtı; destek kaydından bağlanan müşteri tarafından bildirilen olaylar |
| Algılama süresi (TTD) | Etki başlangıcını olduğundan daha geç ilan etmek; uyarısı olmayan olayları hariç tutmak; kuyruğu gizlemek için ortalamayı raporlamak | Hizmet düzeyi göstergesi geçmişinden alınan etki başlangıcı; sayılan ve gösterilen uyarısız olaylar; birlikte raporlanan medyan ve 95. yüzdelik dilim |
| Uyarı yoğunlaşması | Hiçbiri ilk beşte olmasın diye gürültülü bir kuralı birkaçına bölmek; kuralları yeniden adlandırmak | Yoğunlaşmayı kural bazında olduğu kadar altta yatan arıza ya da hizmet bazında da raporlamak; yanında toplam hacmi ve eyleme dönüştürülebilir uyarı oranını izlemek |
| Uyarı kuralı güncelliği | Koşulu karşılamak için yer tutucu sahipler, boş çalışma kılavuzu bağlantıları ya da lastik damga gözden geçirme eklemek | Çalışma kılavuzu bağlantısının çözüldüğünün ve gerçek bir yanıtta kullanıldığının örnek kontrolü; çalışma kılavuzunu tatbikat günlerinde test etme uygulaması |

Sağlıklı bir okuma birkaç şeyi birlikte gösterir. Rotasyon başına uyarı hacmi sabit ya da düşüyordur ve ekibin sürdürülebilir olarak seçtiği bir düzeyin içindedir. Eyleme dönüştürülebilir uyarı oranı, en gürültülü kurallar ayarlandıkça birkaç ay boyunca yükselir. İzlemeyle algılanan pay yüksektir ve algılama süresi kısadır ve hacim düşerken uzamaz; bu, sessizliğin satın alınmadığını, hak edildiğini kanıtlar. Algılama kapsamı, önemsiz uyarılar eklendiği için değil, hizmetler sınandığı için büyür. Hacim düşerken algılama payı ya da algılama süresi kötüleşiyorsa ekip duyarlılığı huzurla takas etmiştir ve bunu ortaya çıkaran korkuluklardır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Az sayıda, belirti tabanlı çağrılar | Sakin geceler, her çağrıya yüksek güven, güncel tutması kolay | Yavaş oluşan sorunlar için geç algılama riski; gerisi için iyi kayıt ve pano alışkanlıkları gerekir |
| Çok sayıda hassas uyarı | Neden düzeyindeki sorunlara erken uyarı; daha az kaçırılan olay | Alarm yorgunluğu, daha yavaş onay ve nöbet rotasyonlarından ayrılma |
| SLO yanma hızı uyarıları | Hedefi tehdit edene bağlı çağrılar; daha az dalgalanma | İyi göstergeler ve üzerinde uzlaşılmış bir hedef gerekir; algılama süresi ve kesinliği dengelemek için ayar gerekir |
| Haftalık uyarı gözden geçirmesi | Hızlı geri bildirim; gürültülü kurallar çabuk düzeltilir | Her hafta zamana mal olur; değişiklik gelmezse gösteriye dönüşür |
| İnsanlarca etiketleme | Hiçbir aracın sahip olmadığı yargıyı yakalar | Öznel; tanımlar yazılmazsa etiketler gözden geçirenler ve rotasyonlar arasında kayar |
| Otomatik bastırma ve gruplama | Gürültüyü ölçekte keser; tekrarlanan çağrıları azaltır | Kurallar yanlışsa gerçek sinyalleri gizleyebilir; kendi izlemesine ve gözden geçirmesine ihtiyaç duyar |

Her seçim kesinliği duyarlılıkla takas eder ve bu takas bilerek yapılmalı ve hizmet başına yazılmalıdır; çünkü rakamları herkesin adil okumasını sağlayan bağlamdır. Kaçırılan bir arızanın ciddi sonuçları olan bir hizmet, gece fazladan uyarıları bir kayıt kuyruğuna gönderen bir önceliklendirme katmanıyla, daha erken uyarı için daha düşük bir eyleme dönüştürülebilir orana razı olabilir.

## Takımınızla tartışılacak sorular

**1. Neden uyandırılmak isterdik ve geçen ayın çağrılarından hangileri bu standardı karşıladı?** Çağrı politikasını bir ya da iki cümleyle yazın, sonra geçen ayın çağrılarını alıp her birini ona karşı sınayın. Alıştırma ürettiği yüzdeden daha değerlidir; çünkü anlaşmazlıklar ekibin beklentilerinin nerede farklılaştığını ortaya koyar. Gereksiz olanları indirilecek adaylar olarak yakalayın.

**2. En gürültülü uyarı kuralı yarın ortadan kalksa neyi kaybederdik?** Soruyu hacme göre ilk beş kural için sorun. Çoğu zaman kimse kuralın şimdiye kadar yakaladığı belirli bir arızayı adlandıramaz ve bu, kuralın ayarlanabileceğinin ya da kaldırılabileceğinin işaretidir. Birinin adlandırabildiği yerde, arızanın bir belirti uyarısını da tetikleyip tetiklemeyeceğini sorun.

**3. İzlemenin neyi kaçırdığını nasıl öğreniriz?** Son birkaç olaya bakın ve kimin önce fark ettiğini ve ondan önce etkinin ne kadar sürdüğünü sorun. Yanıt, yeni araç olmadan izlemeyle algılanan payı ve kabaca bir algılama süresi verir. Hangi sinyalin her birini daha erken yakalayacağını tartışın.

**4. Nöbet yükümüz sürdürülebilir mi ve bunu nasıl bileceğiz?** Bir rotasyon için sürdürülebilirin ne demek olduğunu, örneğin haftada mesai dışı çağrılar için bir sınır gibi, uzlaşın ve eğilimi kişi başına değil rotasyon başına gözden geçirin. Yük uzlaşılan düzeyin üzerindeyse bunu bir hizmet kusuru olarak ele alın ve azaltmak için iş planlayın. Ölçümleri Konu 5.7 “Angarya ve nöbet metrikleri” ile tutarlı tutun.

**5. Hangi uyarılarımızı hiç sınamadık ve bunları nasıl güvenle sınayabiliriz?** Tek bir belirti uyarısına bağlı hizmetleri listeleyin ve birinin onun gerçekte ya da bir provada tetiklendiğini görüp görmediğini sorun. Bir test planlayın ve tüm yolu kontrol edin: algılama, yönlendirme, bildirim, çalışma kılavuzu. Arızalanan bir uyarı boru hattının hiç görünür olup olmayacağını düşünün.

**6. Bu sayılar burada nasıl oyunlaştırılabilir ve neyi fark ederdik?** Ekipten, hiçbir şeyi iyileştirmeden her rakamı nasıl daha iyi gösterebileceklerini dürüstçe anlatmalarını isteyin. Sonra hangi korkuluğun bunu göstereceği ve ona kimin baktığı konusunda uzlaşın. Hileleri önceden adlandırmak onları daha az cazip kılar (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Dört bakış açısı

### Ürün ve teslimat takımları

Bir hizmeti inşa eden ve işleten ekipler, hizmetin kendisi hakkında ne raporladığına karar verir; bu yüzden uyarı kalitesi bitti tanımında başlar. Kendi sınanmış göstergesi ve uyarısıyla yayımlanan yeni bir özellik, ilk olaydan sonra sonradan eklenen izlemeden kaçınır. Uyarı ayarını sıradan birikim listesi işi olarak ele alın.

### Hizmet ve operasyon takımları

Operasyon ekipleri çağrı cihazını taşır ve maliyeti ilk hisseder; bu yüzden gözden geçirme ritminin, etiketlemenin ve boru hattı kalp atışının sahibidir. Bir uyarı yanlış olduğunda düzeltme, çağrıyı alana değil, kuralın sahibine aittir.

### Liderlik ve yönetişim

Liderler hizmet başına algılama ve eyleme dönüştürülebilirlik rakamları isteyebilir, ayar zamanını finanse edebilir ve sessizliği ödüllendiren uyarı hacmi hedefine direnebilir. Düşen hacim yalnızca algılama payı ve algılama süresi sabit kaldığında iyi haberdir. Sürdürülebilir nöbet sınırları bir kadro ve tasarım kararıdır, bir motivasyon kararı değil.

### Müşteriler ve kullanıcılar

Müşteriler bir uyarıyı asla görmez; hizmetin arızalanıp arızalanmadığını ve düzeltilmesinin ne kadar sürdüğünü görürler. İyi izleme, onlar fark etmeden düzeltilen olaylar ve bir müşterinin önce bildirdiği daha az vaka olarak ortaya çıkar. Kuruluşun deneyim ölçümleri kullandığı yerde (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”), ilk olarak kullanıcılar tarafından bildirilen olayların payı, deneyim açığının doğrudan bir göstergesidir.

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci, dört ürün ekibi ve nöbet rotasyonunu destekleyen bir platform ekibiyle bir sipariş platformu işletir. Bu örnekteki tüm sayılar açıklayıcıdır. Dört hafta boyunca (açıklayıcı) rotasyon 240 çağrı aldı; bunlardan 70'i 22:00 ile 07:00 arasındaydı. Ekip her çağrıyı dört etiketle gözden geçirir: eyleme dönüştürülebilir, yanlış pozitif, gerçek ama çağrıya değmez ve kopya.

Gözden geçirme yüzde 31 eyleme dönüştürülebilir uyarı oranı (açıklayıcı) ve yüzde 22 yanlış pozitif oranı (açıklayıcı) gösterir. Beş kural çağrıların yüzde 58'ini (açıklayıcı) üretmiştir ve en büyüğü, her zaman kendiliğinden toparlanan bir toplu işlem sunucusundaki disk eşiğiydi. Önceki çeyreğin izlemeyle algılanan payı yüzde 62'ydi (açıklayıcı) ve medyan algılama süresi 14 dakika (açıklayıcı), 95. yüzdelik dilim ise 51 dakikaydı (açıklayıcı).

Ekip üç gürültülü kuralı bir kayıt kuyruğuna indirir, bir arızanın bir çağrı üretmesi için kopyaları birleştirir, ödemedeki ham hata sayısı uyarısını bir hata bütçesi yanma hızı uyarısıyla değiştirir (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”) ve müşterinin bildirdiği iki olayın ardındaki bir boşluk olan sipariş onay e-postaları için bir belirti uyarısı ekler. Her değişiklik, sahibi olan bir birikim listesi kalemidir. Dört hafta sonra çağrılar 96'ya düşer (açıklayıcı) ve eyleme dönüştürülebilir oran yüzde 64'e yükselir (açıklayıcı); algılama payı yüzde 71'e çıkar (açıklayıcı) ve medyan algılama süresi 14 dakikada sabit kalır. Sessizlik hak edilmiş görünür.

Oyunlaştırma riski üçüncü ayda ortaya çıkar. Yeni bir yönetici dört haftada 60'tan az çağrı gibi gayriresmî bir hedef koyar ve bir rotasyon bunu ödeme hatası uyarısındaki gecikmeyi uzatarak başarır. Algılama payı yüzde 55'e düşer (açıklayıcı) ve 95. yüzdelik dilim algılama süresi 80 dakikaya çıkar (açıklayıcı). Korkuluklar hacmin yanında durduğu için gözden geçirme bunu yakalar. Ekip hacim hedefini geri çeker, uyarıyı eski haline getirir ve vakayı metrik siciline kaydeder (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

## Sektör mercekleri

**Girişim.** Bir avuç mühendisin hepsi nöbetteyken öncelik, kısa bir çağrı politikası ve para kazanan yollarda birkaç belirti uyarısıdır. İnsanları neyin uyandırdığına bir pazartesi on dakikalık bir bakış yeterlidir. Başlıca risk hiç uyarı olmamasıdır; böylece izleme müşterilerdir; bir müşterinin size ilk kez ne sıklıkla söylediğini sayın.

**Küçük işletme.** Küçük kuruluşlar çoğu zaman bir tedarikçinin izlemesine güvenir. Yararlı ölçümler, işi durduran birkaç sistem için algılama kapsamı ve kullanıcılarca bulunan olayların payıdır. Tedarikçilerden sözleşmenizin hak ettirdiği uyarı verisini isteyin.

**Kurumsal.** Büyük kuruluşların çok sayıda aracı ve rotasyonu vardır ve her ekip “eyleme dönüştürülebilir”i farklı tanımlayabilir. Tanımları ve etiketleri standartlaştırın, ekip düzeyinde gözden geçirin ve araç yerine hizmet bazında toplulaştırın. Olay ilişkilendirme platformları hacmi ölçekte azaltır ama kendi duyarlılık kontrollerine ihtiyaç duyar.

**Kamu sektörü.** Bazı hizmetler mesai saatlerinde çalışır, acil durum ya da yardım sistemleri gibi diğerleri ise sürekli çalışır. Algılama kapsamı ve sınanmış uyarılar, arızanın yasal ya da güvenlik sonuçları taşıdığı yerde en çok önemlidir ve test kayıtları denetimi destekleyebilir. Denetim organlarına, yanlış okunması kolay ham uyarı sayılarını değil, kapsamı ve algılamayı raporlayın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Yatırım nedenleri pratiktir. Daha iyi algılama, kullanıcıların etkilendiği süreyi kısaltır. Daha az anlamsız çağrı uykuyu korur, rotasyondan ayrılmayı azaltır ve dikkati önemli olan uyarılara saklar. Kötü uyarı kalitesinin maliyetini görmek zordur; çünkü bölünmüş uykuya, yavaş yanıtlara ve deneyimli mühendislerin ayrılmasına yayılmıştır.

Uyarı, çağrı ve olay araçları birleştirilebiliyorsa bu metrikleri toplamanın maliyeti küçüktür, etiketler elle ekleniyorsa ılımlıdır. Başlıca maliyetler haftalık gözden geçirme zamanı, ayar ve silme işi ve ara sıra yapılan algılama testleridir. Kullanılmayan kuralları budamak ayrıca izleme lisansı ve depolama maliyetlerini azaltır ve toplam sahip olma maliyeti insan zamanını içermelidir.

Getiri birkaç ay içinde daha sakin rotasyonlar, yükselen bir izlemeyle algılanan pay ve kötüleşmeyen bir algılama süresi olarak ortaya çıkar. Bunu paraya çevirmek için olay saatlerinin ve rotasyon devrinin maliyetini gözden geçirmenin maliyetiyle, kendi rakamlarınızı kullanarak karşılaştırın. Doğrulanmış bir kaynağa atıf yapamıyorsanız sektör ortalamalarını kullanmayın.

## Anti-desenler ve tuzaklar

- **Uyarı hacmini hedeflemek.** Sayıya konan bir hedef sessizliği ödüllendirir ve uyarıları gizlemeyi davet eder. Hedefleri eyleme dönüştürülebilir uyarı oranına ve algılama payına koyun ve hacmi, ekibin seçtiği bir sürdürülebilirlik sınırıyla bağlam rakamı olarak kullanın.
- **Her nedende uyarmak.** Düzinelerce neden düzeyinde çağrı gürültü üretir ve yine de kimsenin düşünmediği belirtiyi kaçırır. Bunun yerine kullanıcıya dönük belirtilerde uyarın.
- **Her olaydan sonra uyarı eklemek ve hiç kaldırmamak.** Her yeni uyarıyı, gereksiz kıldığı uyarıların gözden geçirilmesiyle eşleştirin.
- **Etiketlemeden uyarıları saymak.** Yararlılık yargısı olmayan bir sayı, gürültülü bir rotasyonu meşgul olandan ayıramaz. Yalnızca birkaç dakika varsa bile her hafta bir örneği etiketleyin.
- **Kapsamı uyarı sayısı olarak görmek.** Elli neden uyarısı olan ve belirti uyarısı olmayan bir hizmet kötü kapsanmıştır. Kapsamı sınanmış belirti algılama olarak tanımlayın.
- **İnsanları ele alınan ya da onaylanan çağrılara göre sıralamak.** Zor vardiyaları alan rotasyon üyelerini cezalandırır ve çağrı cihazından kaçınmayı teşvik eder. Rotasyon ve hizmet bazında raporlayın ve tasarım düzeltmeleri arayın.
- **Uyarı yolunu hiç test etmemek.** Çalıştığı görülmemiş bir uyarı bir varsayımdır. Uyarı testlerini tatbikat günlerine dahil edin ve boru hattının kendisini izleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Çağrı politikası ve kural sahipliği | Uyarılar rastgele eklenir; birçoğunun neden var olduğunu kimse bilmez | Bazı ekiplerin kuralları için bir politikası ve sahipleri vardır | Tek kısa çağrı politikası; her çağrı kuralının bir sahibi ve bir çalışma kılavuzu vardır | Kural güncelliği izlenir ve gözden geçirilir; kullanılmayan kurallar bir takvimle kaldırılır | Politika ve sahiplik, hizmetler değiştikçe ekipler ve tedarikçiler arasında uyarlanır |
| Uyarı kalitesi ölçümü | Gürültü hakkında şikâyetler; sayım yok | Hacim bazı ekiplerce sayılır; etiketleme yok | Ortak etiketlerle haftalık gözden geçirme; hizmet başına raporlanan eyleme dönüştürülebilir uyarı oranı ve yanlış pozitif oranı | Oranlar eğilim olarak izlenir ve algılama ölçümleriyle eşleştirilir; iyileştirme çalışması finanse edilir | Kalite hizmetler ve tedarikçiler arasında bağlanır; tanımlar kararlara bilgi vermeyi bıraktığında gözden geçirilir |
| Algılama ve kapsam | Sorunların çoğunu müşteriler ve meslektaşlar bildirir | Birkaç temel hizmette belirti uyarıları | Sınanmış uyarılarla izlenen algılama kapsamı; her olay için kaydedilen ilk sinyal | Algılama süresi ve izlemeyle algılanan pay bir korkuluğa sahip olarak gözden geçirilir; boşluklar planlı işe dönüşür | Algılama, uyarı boru hattı dahil bağımlılıklar ve tedarikçiler arasında rutin olarak sınanır |
| İyileştirmede kullanım | Uyarı düzeltmeleri en kötü geceyi izler | Düzeltmeler olayları izler | Her gözden geçirme en az bir değişiklik üretir | Değişiklikler, hacim, eyleme dönüştürülebilirlik ve algılama üzerindeki etkilerine kadar izlenir | Rotasyon yükü, algılama ve hata bütçeleri yatırımı yönlendirmek için birlikte gözden geçirilir |

## Kontrol listesi

- [ ] Neyin çağrıyı hak ettiğini söyleyen birkaç cümlelik yazılı bir çağrı politikamız var.
- [ ] Her çağrı kuralının bir sahibi, bir amacı ve bir çalışma kılavuzu bağlantısı var.
- [ ] Her rotasyon en az haftada bir tetiklenenleri gözden geçirir ve her uyarıyı etiketler.
- [ ] Her gözden geçirme bir kuralda en az bir kayıtlı değişiklik üretir.
- [ ] Uyarı hacmini, eyleme dönüştürülebilir uyarı oranını ve yanlış pozitif oranını rotasyon ve hizmet bazında raporluyoruz, asla kişi bazında değil.
- [ ] Her olay, bilinmiyor seçeneğiyle birlikte ilk nasıl algılandığını kaydeder.
- [ ] Etki başlangıcını hizmet düzeyi göstergesi geçmişinden tahmin ediyor ve medyan ile 95. yüzdelik dilim algılama süresini raporluyoruz.
- [ ] Kapsamdaki her hizmetin son 12 ayda sınanmış bir belirti uyarısı var.
- [ ] Uyarı boru hattı durursa bir kalp atışı kontrolü bizi çağırır.
- [ ] Her rotasyon için sürdürülebilir bir mesai dışı yük üzerinde uzlaştık ve bunu gözden geçiriyoruz.
- [ ] Yalnızca uyarı hacmi üzerine hiçbir hedef konmamıştır.

## Yapay zekâ istemleri

**Amaç: Bir hizmet için göstergelerinden ve sonuçlarından bir çağrı politikası taslağı hazırlayın.**

```text
[hizmet adı] hizmeti için bir çağrı politikası taslağı hazırlamama yardım et.
Bağlam: kullanıcılar [kullanıcı grubu]; önemsediğimiz kullanıcıya dönük belirtiler
[belirtiler, örneğin hatalar, gecikme, kullanılamama]; kaçırılan bir arızanın
sonuçları [sonuçlar]; nöbet rotasyonu [rotasyon açıklaması, örneğin saatler ve ekip
büyüklüğü].
Neyin çağrıyı hak ettiğini, neyin bir kayıt kuyruğuna gittiğini ve neyin bir panoda
kaldığını söyleyen kısa bir politika yaz (200 sözcükten az).
Eşikler ya da kıyaslama değerleri uydurma; kendi verilerimizden belirlememiz için
[eşik] yer tutucuları bırak.
Sonlandırmadan önce bize soracağın soruları ve varsayımlarını listele.
```

**Amaç: Dışa aktarılmış bir uyarı gözden geçirmesini gürültü örüntüleri için analiz edin.**

```text
[dönem] için [rotasyon adı] rotasyonuna ait uyarıların bir tablosunu şu sütunlarla
yapıştıracağım: [sütun adları, örneğin kural, zaman, etiket, yapılan eylem, hizmet].
Yalnızca yapıştırdığım veriyi kullanarak eyleme dönüştürülebilir uyarı oranını,
yanlış pozitif oranını, mesai dışı payı ve en gürültülü beş kuraldan gelen
uyarıların payını hesapla.
Hangi kuralların ayarlanacağını, birleştirileceğini, indirileceğini ya da
silineceğini, her biri için bir gerekçeyle öner ve her öneriyi kontrol edilecek bir
hipotez olarak işaretle.
Kural, hizmet ve rotasyon bazında raporla, kişi bazında asla. Kıyaslama değerleri
uydurma.
Varsayımlarını ve hariç tuttuğun satırları listele.
```

**Amaç: Yayımlamadan önce bir uyarı metrikleri kümesini oyunlaştırma riski açısından kontrol edin.**

```text
Yayımlamayı planladığımız uyarı kalitesi metrikleri şunlar: [tanımları ve
formülleriyle metrik listesi].
Her metrik için, [kuruluş türü ve hizmet] bağlamımızda oyunlaştırılabileceği ya da
yanlış okunabileceği iki yolu açıkla ve aynı listeden eşleştirilmiş bir korkuluk ya
da benimseyebileceğimiz bir uygulama öner.
Korkuluğu olmadan gösterilen herhangi bir metriği belirt.
Kaynaklar ya da kıyaslama değerleri uydurma.
Araçlarımızın uyarıları ve olayları nasıl kaydettiğine dair varsayımlarını listele.
```

**Amaç: Zayıf kapsamlı hizmetler için bir algılama testi planlayın.**

```text
Hizmetlerimiz [hizmet listesi] ve var olduğuna inandığımız belirti uyarıları
[uyarı listesi].
Bir sonraki [tatbikat günü ya da prova] için, her hizmet için bilerek yaratılan bir
belirtinin uyarıyı tetiklediğini, [rotasyon] rotasyonuna ulaştığını ve bir çalışma
kılavuzuna bağlandığını kontrol eden güvenli bir test planı öner.
Kimlere önceden bilgi verilmesi gerektiğini ve sonuçların algılama kapsamı için
nasıl kaydedileceğini söyle.
Araç özellikleri uydurma; [izleme aracı] aracının nasıl çalıştığını bana sor.
Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): ilgili bir ölçümü tanımlayan konuyu ve bir uyarı kalitesi metriğinin yanında bulunması gereken korkuluğu bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konudaki düzenlemelerin şablonu, oyunlaştırma tablosunu ve çapraz başvuruları tutarlı tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- Uyarıları eyleme yol açıp açmadıklarına, izlemeyi ise ne kadar gerçek sorunu yakaladığına göre değerlendirin; kesinlik ve duyarlılık birbirini korur.
- Kullanıcıların hissettiği belirtiler için çağrı yapın, varsa eşikleri hizmet düzeyi hedefine bağlayın ve nedenleri tanı için saklayın.
- Her hafta tetiklenenleri gözden geçirin, etiketleyin ve her seferinde en az bir değişiklik yapın.
- Yalnızca uyarı hacmi üzerine asla hedef koymayın; eyleme dönüştürülebilir uyarı oranı, izlemeyle algılanan pay ve algılama süresinin yanında okuyun.
- Uyarıları ve uyarı boru hattını test edin; çünkü sınanmamış bir uyarı bir varsayımdır.
- Rotasyon ve hizmet bazında raporlayın, kişi bazında asla ve sürdürülebilir nöbet yükünü bir tasarım hedefi olarak ele alın.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
