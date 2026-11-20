# Kullanılabilirlik metrikleri

**Kullanılabilirlik, bir hizmetin kullanıcılarının ihtiyaç duyduğunu yaptığı sürenin ya da kullanıcı isteklerinin payıdır. Yalnızca “ayakta” ifadesini kullanıcı tarafından tanımladığınızda, planlı ve plansız kesintileri ayrı saydığınızda ve bir dokuzluk vaat etmeden önce dokuzların aritmetiğini okuduğunuzda doğruyu söyler.**

## Genel bakış ve motivasyon

Kullanılabilirlik, hizmet yönetiminde en çok alıntılanan sayıdır ve en az kesin tanımlananlardan biridir. “Hizmet geçen ay yüzde 99,9 kullanılabilirdi” gibi bir ifade kesin görünür, ama en az dört kararı gizler: neyin hizmet sayıldığı, neyin “kullanılabilir” sayıldığı, hangi saatlerin kapsamda olduğu ve hangi kesintilerin hariç tutulduğu. İki ekip aynı hizmeti aynı ay için raporlayıp, ikisi de aritmetik hata yapmadan, bir büyüklük mertebesi farklı rakamlar yayımlayabilir.

Bu konu bu kararları açık hale getirir. Çalışma süresi ve kesinti süresi hesabını, kullanıcı ağırlıklı kullanılabilirliği, planlı ve plansız kesintiyi ve dokuzların aritmetiğini kapsar. Hizmet düzeyi göstergeleri (SLI), hizmet düzeyi hedefleri (SLO) ve hata bütçeleri (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”) ile hizmet düzeylerinin sözleşmesel görünümü (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”) üzerine kuruludur. Bu konular bir hedefin nasıl seçileceğini söyler. Bu konu ise hedefin karşılaştırıldığı sayının nasıl hesaplanacağını söyler.

### Bu konuda kullanılan terimler

- **Kullanılabilirlik**, bir hizmetin kullanıcıların ihtiyaç duyduğunu ihtiyaç duydukları anda yapabilme yeteneğidir ve genellikle bir dönem üzerinden yüzde olarak ifade edilir. Genel kavram [yüksek kullanılabilirlik](https://en.wikipedia.org/wiki/High_availability) maddesinde anlatılır.
- **[Kesinti süresi](https://en.wikipedia.org/wiki/Downtime)**, bir hizmetin kullanılamadığı dönemdir. Bu konu, kesinti süresinin tek bir sürekli bölümü için **kesinti**, hizmetin çalıştığı ama üzerinde uzlaşılan kalitenin altında kaldığı dönem için **bozulma** terimini kullanır.
- **Çalışma süresi**, ölçüm penceresi içinde kesinti süresinin tümleyenidir. Zamana dayalı kullanılabilirlik, çalışma süresinin kapsamdaki toplam süreye bölünmesidir.
- **İstek tabanlı kullanılabilirlik**, başarılı olan geçerli isteklerin payıdır; bu yüzden bir saat boyunca isteklerin yüzde 5'ini etkileyen bir arıza, tam bir saatlik kesinti değil, bir saatlik trafiğin yüzde 5'i olarak sayılır.
- **Kullanıcı ağırlıklı kullanılabilirlik**, istek tabanlı görünümü, arızaları etkilenen kullanıcıların sayısına ya da önemine göre ağırlıklandırarak genişletir; örneğin ham istekler yerine başarısız oturumları ya da başarısız yolculukları sayarak.
- **Hizmet düzeyi anlaşması (SLA)** bir müşteriye verilen taahhüttür; **hizmet düzeyi hedefi (SLO)** ise bir gösterge için iç hedeftir. [Hizmet düzeyi anlaşması](https://en.wikipedia.org/wiki/Service-level_agreement) ve [hizmet düzeyi hedefi](https://en.wikipedia.org/wiki/Service-level_objective) maddeleri genel tanımları verir.
- **Planlı kesinti süresi**, önceden duyurulan ve değişiklik yetkilendirme yoluyla onaylanan bir kesintidir. **Plansız kesinti süresi** ise geri kalan her şeydir. İkisi arasındaki sınır, kullanılabilirlik raporlamasında en çok tartışılan çizgilerden biridir.
- **[Arızalar arası ortalama süre](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF)**, kesintiler arasındaki ortalama işletim süresidir; **[ortalama onarım süresi](https://en.wikipedia.org/wiki/Mean_time_to_repair)** ise onarmak için ortalama süredir. İkisi de ortalamadır; bu yüzden bu kitap onları dağılımlar olarak okur (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).
- **[Sentetik izleme](https://en.wikipedia.org/wiki/Synthetic_monitoring)**, bir kullanıcı gibi davranan ve başarı ya da başarısızlığı raporlayan betiklenmiş problar kullanır. **[Gerçek kullanıcı izleme](https://en.wikipedia.org/wiki/Real_user_monitoring)**, gerçek kullanıcıların hizmeti kullanırken yaşadığı deneyimi kaydeder.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)**, BT hizmet yönetimi için en bilinen çerçevedir. ITIL 4'te kullanılabilirlik yönetimi uygulaması, hizmetlerin üzerinde uzlaşılan kullanılabilirlik düzeylerini sunmasını sağlamakla ilgilenir ve izleme ve olay yönetimi, olay yönetimi ve hizmet sürekliliği yönetimiyle yakın çalışır.

### Neden tek bir sayı asla yeterli değildir

Her biri dört dakikalık on kesinti ile kırk dakikalık bir kesinti aynı toplam kesinti süresini üretir; ama kullanıcılara farklı hissettirirler ve farklı yanıtlar gerektirirler. İlk örüntü kırılgan bir hizmete işaret eder. İkincisi yavaş algılamaya ya da kurtarmaya işaret eder. Bu nedenle buradaki metrikler, her biri bir korkulukla birlikte küçük bir küme olarak gelir; böylece bir ekip en çok dokuz için yarışmadan kullanılabilirliği dürüstçe tartışabilir.

### ITIL ile çevik bakış açıları nasıl ayrışır

ITIL'de kullanılabilirlik, bir hizmetin yönetilen bir niteliğidir; müşteriyle üzerinde uzlaşılır ve hizmet düzeyi yönetimi tarafından, net hizmet saatleri ve planlı bakım gibi istisnalarla birlikte belirtilen bir hedefe karşı raporlanır.

Çevik ve site güvenilirliği mühendisliği (SRE) uygulamasında kullanılabilirlik, bir SLO ile karşılaştırılan birkaç SLI'dan biridir. Google'ın *Site Reliability Engineering* kitabı, zamana dayalı kullanılabilirliğin tek bir sisteme uyduğunu, istek başarı oranının ise her zaman kısmen ayakta olan dağıtık hizmetlere uyduğunu söyler. Ayrıca, her ek dokuzun maliyeti dik biçimde arttığı için yüzde 100'ün neredeyse hiçbir zaman doğru hedef olmadığını söyler.

Paydayı tanımlamak için ITIL'in üzerinde uzlaşılan kapsam, saat ve istisna disiplinini kullanın. Payı tanımlamak ve sonuçla ne yapılacağına karar vermek için SRE'nin kullanıcı merkezli göstergeler ve hata bütçeleri disiplinini kullanın.

## Temel ilkeler

- **“Kullanılabilir”i kullanıcı tarafından tanımlayın.** Kullanıcılar oturum açamazken sağlık kontrollerine yanıt veren bir hizmet, önemli olan insanlar için kapalıdır.
- **Paydayı yazın.** Herhangi bir şeyi hesaplamadan önce hizmet sınırını, kapsamdaki saatleri, saat dilimini ve ölçüm penceresini belirtin.
- **Planlı ve plansız kesintileri ayrı sayın.** İkisini birlikte raporlayın ve birinin diğerinin içinde saklanmasına asla izin vermeyin.
- **Dağıtık hizmetler için istek tabanlı ve kullanıcı ağırlıklı ölçümleri tercih edin.** Kısmi bir arıza ne tam çalışma süresi ne de tam kesinti süresidir.
- **Dokuzları dakikalara çevirin.** Bir hedef, ancak insanlar ayda kaç dakikalık arızaya izin verdiğini söyleyebildiğinde anlaşılır.
- **Kullanıcıların ihtiyaç duyduğu sayıda dokuz seçin.** Bu noktanın ötesinde, her ek dokuz getirdiğinden daha pahalıya mal olur.
- **Hizmetleri tanımlayın, insanları asla.** Kullanılabilirlik bir hizmete ve onu işleten ekiplere aittir; hiçbir zaman bir bireyin puanı değildir.

## Metrik tanımları

Her satır kendi saatlerini ve sınırlarını belirtir. Bir satır başka türlü söylemedikçe takvim zamanı kullanılır. Bir ölçüm bir dağılım kullandığında medyanı ve 95. yüzdelik dilimi raporlayın ve pencereyi adlandırın.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılık | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Zamana dayalı kullanılabilirlik | Hizmetin “ayakta” için yazılı tanımı karşıladığı kapsamdaki sürenin payı | (penceredeki kapsam dakikaları eksi plansız kesinti dakikaları) / penceredeki kapsam dakikaları. Saat, daha sonra kullanıcı etkisi olarak doğrulanan ilk başarısız probda ya da olay incelemesinde kaydedilen doğrulanmış etki başlangıcında başlar; hizmet yeniden tanımı karşıladığında durur. Üzerinde uzlaşılan hizmet saatleri içindeki planlı kesinti süresi ayrıca gösterilir ve üzerinde uzlaşılan hizmet saatleri dışındaki süre paydadan çıkarılır | yüzde | Sentetik izleme sonuçları; etki başlangıcı ve onarım zaman damgalarıyla olay kaydı | Kullanılabilirlik yönetimi; hizmet düzeyi yönetimi | Tek bir sistem için zamana dayalı SLI (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”) | Aylık |
| İstek tabanlı kullanılabilirlik | Başarılı olan geçerli isteklerin payı | penceredeki başarılı geçerli istekler / toplam geçerli istekler. Geçerli istekler, hatalı biçimlendirilmiş istekleri ve çağıranın neden olduğu istemci hatalarını hariç tutar; hizmetin neden olduğu arızalar, zaman aşımları dahil, arıza olarak sayılır. Hizmet başına ve kullanıcı yolculuğu başına raporlanır | yüzde | Yük dengeleyici, ağ geçidi ya da uygulama günlükleri ve metrikleri | Kullanılabilirlik yönetimi; izleme ve olay yönetimi | SLO ve hata bütçeli başarı oranı SLI'sı (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”) | Günlük eğilim, aylık rapor |
| Kullanıcı ağırlıklı kullanılabilirlik | Etkilenen kullanıcılara ya da yolculuklara göre ağırlıklandırılmış kullanılabilirlik; böylece yoğun saatteki bir kesinti, gece yarısındakinden daha fazla sayılır | 1 eksi (penceredeki başarısız kullanıcı oturumları ya da başarısız yolculuklar / toplam kullanıcı oturumları ya da yolculukları). Tanımlı kritik bir adım başarısız olduysa bir oturum başarısız sayılır; kısmi başarı, içine katılmadan ayrı bir bozulma payı olarak raporlanır | yüzde | Gerçek kullanıcı izleme; uygulama oturum günlükleri; analitik olaylar | Kullanılabilirlik yönetimi; hizmet düzeyi yönetimi | Yolculuk temelli SLI ve Konu 6.2'deki deneyim ölçümleri (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”) | Aylık |
| Plansız kesinti süresi | Hizmetin önceden onaylı bildirim olmadan kullanılamadığı dakikalar | Penceredeki, başlamadan önce değişiklik yetkilendirme yoluyla duyurulmamış ve onaylanmamış kesintiler için, doğrulanmış etki başlangıcından doğrulanmış onarıma kadar kesinti sürelerinin toplamı. Aynı hizmet üzerinde çakışan kesintiler toplanmaz, birleştirilir. Toplam dakika, kesinti sayısı ve kesinti süresinin medyanı ile 95. yüzdelik dilimi olarak raporlanır | dakika | Etki başlangıcı ve onarım zaman damgalarıyla olay kaydı | Olay yönetimi; kullanılabilirlik yönetimi | Bir dağılım olarak okunan onarım süresi (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”) | Aylık |
| Planlı kesinti süresi payı | Önceden duyurulmuş ve onaylanmış tüm kesinti süresinin oranı | penceredeki planlı kesinti dakikaları / (planlı artı plansız kesinti dakikaları). Bir kesinti, yalnızca başlamadan önce bir değişiklik kaydı üzerinden onaylandıysa ve başlangıç ve bitiş zamanları kullanıcılara iletildiyse planlı sayılır; onaylı pencerenin ötesine taşan bir aşım, pencerenin sona erdiği andan itibaren plansız olarak yeniden sınıflandırılır | yüzde | Onaylı pencereli değişiklik kaydı; olay kaydı; durum sayfası geçmişi | Değişiklik yetkilendirme; kullanılabilirlik yönetimi | Sıfır kesintili dağıtımı tercih eden yayın ve bakım uygulamaları (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”) | Aylık |
| Kesinti sıklığı ve aralığı | Kesintilerin ne sıklıkla başladığı ve hizmetin aralarında ne kadar çalıştığı | Pencerede başlayan kesintilerin sayısı; ve ardışık her kesinti çifti için, birincinin onarımı ile ikincinin başlangıcı arasındaki çalışma süresi dakikaları, medyan ve 5. yüzdelik dilim olarak özetlenir. On aralıktan azı varsa tek bir ortalama olarak raporlanmaz | sayı; dakika | Olay kaydı; izleme geçmişi | Olay yönetimi; sorun yönetimi | Değişiklik başarısızlık oranının yanında bir kararlılık sinyali (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”) | Aylık |
| Bozulma payı | Hizmetin çalıştığı ama üzerinde uzlaşılan kalitenin altında kaldığı süre | Gecikme, hata ya da doğruluk göstergesinin eşiğini aştığı, kesinti süresi olarak zaten sayılmış dakikalar hariç dakikalar / kapsamdaki dakikalar. Eşik hizmet başına belirtilir, örneğin SLO'da | yüzde | İzleme ve SLI ölçümleri | Kullanılabilirlik yönetimi; kapasite ve performans yönetimi | Gecikme SLI'sı (bkz. Konu 5.4 “Kapasite ve performans metrikleri”) | Aylık |
| Ölçüm kapsamı | Kullanılabilirlik ölçümünün hizmetin kullanıcıya dönük davranışının ne kadarını gerçekten gözlemlediği | Etkin bir prob ya da gerçek kullanıcı ölçümü olan kritik kullanıcı yolculukları / hizmet tanımında listelenen kritik kullanıcı yolculukları | yüzde | Hizmet tanımı; izleme yapılandırması | İzleme ve olay yönetimi; kullanılabilirlik yönetimi | Gözlemlenebilirlik kapsamı ve uyarı kalitesi (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”) | Üç aylık |

Veri hakkında iki not. Beş dakikada bir kontrol eden bir prob, iki dakikalık bir kesintiyi çözümleyemez; bu yüzden prob aralığını rakamın yanına kaydedin ve olay kaydındaki etki başlangıcı alanını kullanın (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”). “Ayakta” tanımı ne zaman değişirse eğilim grafiğinde işaretleyin.

## Öneriler

### Ölçümü tanımlayın

**1. Yüzdeden önce hizmet tanımını yazın.** Hizmet sınırını, kritik kullanıcı yolculuklarını, kapsamdaki saatleri, saat dilimini ve pencereyi (bir takvim ayı olağandır) listeleyin. Hangi bağımlılıkların sayıldığını söyleyin: bir ödeme sağlayıcısı arızalanır ve kullanıcılar ödeme yapamazsa bu sizin kesintiniz midir? Yanıtı metrik siciline kaydedin (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”). Kullanılabilirlik hakkındaki anlaşmazlıkların çoğu bu sayfa hakkındaki anlaşmazlıklardır ve bunları önceden çözmek, bir kesintiden sonra çözmekten çok daha ucuzdur.

**2. “Ayakta”yı bir sunucu durumu değil, bir kullanıcı sonucu olarak tanımlayın.** Oturum açma bozukken başarı döndüren bir sağlık kontrolü yanlış şeyi ölçer. “bir öğeyi ara ve görüntüle”, “oturum aç” ya da “bir talep gönder” gibi az sayıda kritik yolculuk seçin ve her biri için başarıyı kullanıcıların tanıyacağı terimlerle tanımlayın. Yolculuğu uçtan uca probe edin ve üzerinde uzlaşılan bir eşiğin ötesindeki yavaş yanıtı ayakta değil, bozulmuş olarak ele alın.

**3. Dağıtık hizmetler için istek tabanlı ölçümleri, hizmetin gerçekten açık ya da kapalı olduğu yerlerde ise zamana dayalı ölçümleri kullanın.** Küresel bir hizmet nadiren tamamen kapalıdır; bu yüzden toplam arıza dakikalarını saymak gerçek arızaların çoğunu yok sayar. Mümkünse ikisini de raporlayın ve hangisinin başlık olduğunu ve nedenini söyleyin.

**4. Yükün eşit olmadığı yerde kullanıcı ağırlıklandırması ekleyin.** Sabah 4'teki on dakikalık bir kesinti ile bir ticaret gününün başındaki on dakikalık kesinti aynı süreye ve çok farklı bir maliyete sahiptir. Arıza dakikasındaki oturumlara ya da işlemlere göre ağırlıklandırın ya da yoğun saat kesinti dakikalarını ayrı bir rakam olarak raporlayın.

**5. Arıza alanının dışından ölçün.** Hizmetle aynı ağ ya da bölge içindeki bir prob onunla birlikte arızalanır ya da kullanıcıların izlediği yol bozukken başarı raporlamaya devam eder. Sentetik probları en az iki bağımsız konumdan çalıştırın ve gerçek kullanıcı verisiyle çapraz kontrol edin.

### Planlı ve plansız kesintilere dürüstçe yaklaşın

**6. Planlı ve plansız kesinti süresini yan yana raporlayın.** Birçok anlaşma planlı bakımı hariç tutar ki bu makuldür. Kullanıcılar yine de bunu kesinti olarak yaşar; bu yüzden hariç tutulan dakikaları ve planlı payı başlığın yanında gösterin (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

**7. Planlı etiketini kazanmayı zorlaştırın.** Planlıyı, kesinti başlamadan önce bir değişiklik kaydıyla onaylanmış, başlangıç ve bitiş zamanları kullanıcılara önceden iletilmiş olarak tanımlayın. Başladıktan sonra duyurulan bir kesinti plansızdır. Onaylı pencerenin ötesindeki bir aşım, pencerenin bittiği andan itibaren plansızdır. Bu üç kural, etiketin arızaları yeniden etiketlemenin bir yolu haline gelmesini engeller.

**8. Planlı kesinti süresini küçültmek için çalışın.** Kademeli dağıtımlar, özellik bayrakları, kilitsiz şema geçişleri ve mavi-yeşil yayınlar, ekiplerin bir hizmeti kapatmadan değiştirmesine olanak tanır. Planlı kesinti dakikalarını bir eğilim olarak izleyin ve onları sıfıra yaklaştırmak için ne gerektiğini sorun.

### Sayıları iyi okuyun

**9. Dokuzları dakikalara çevirin ve gösterin.** Aşağıdaki tablo, 30 günlük bir ay (43.200 dakika) ve 365 günlük bir yıl (525.600 dakika) için aritmetiği verir. İzin verilen dakikaları panoda hedefin yanına koyun ve pencerede şimdiye kadar kullanılan dakikaları gösterin. İnsanlar “üç dokuz” yerine “ayda 43 dakika” hakkında daha iyi kararlar verir.

| Kullanılabilirlik hedefi | 30 günlük bir ayda izin verilen kesinti süresi | 365 günlük bir yılda izin verilen kesinti süresi |
| --- | --- | --- |
| yüzde 99 | 432 dakika (7,2 saat) | 5.256 dakika (87,6 saat) |
| yüzde 99,5 | 216 dakika (3,6 saat) | 2.628 dakika (43,8 saat) |
| yüzde 99,9 | 43,2 dakika | 525,6 dakika (8,76 saat) |
| yüzde 99,95 | 21,6 dakika | 262,8 dakika (4,38 saat) |
| yüzde 99,99 | 4,32 dakika | 52,56 dakika |
| yüzde 99,999 | yaklaşık 26 saniye | yaklaşık 5,26 dakika |

Değerler, saatin pencerenin tamamı boyunca işlediğini varsayar. Yalnızca üzerinde uzlaşılan hizmet saatlerini ölçerseniz izin verilen dakikalar orantılı olarak küçülür ve bunu söylemelisiniz.

**10. Her ek dokuzun maliyetine ve bağımlılıklarınızın sınırlarına saygı gösterin.** SRE kitabı, güvenilirlik maliyetlerinin her ek dokuzla dik biçimde arttığını ve hedefin kullanıcıların neye ihtiyaç duyduğunu ve işletmenin neyi ödeyeceğini yansıtması gerektiğini not eder. Bir hizmet, ihtiyaç duyduğu ve seri bağlı bağımlılıklarından nadiren daha kullanılabilir olabilir. Üç temel bileşenin her biri yüzde 99,9'a ulaşıyorsa ve bir isteğin üçüne de ihtiyacı varsa, birleşim için beklenen en iyi kullanılabilirlik kabaca yüzde 99,7'dir; çünkü bileşenler bağımsız olduğunda arıza olasılıkları toplanır. Bir rakam vaat etmeden önce çarpmayı yapın.

**11. Yalnızca toplama değil, aralığa ve biçime de bakın.** Sık sık gelen kısa kesintiler, nadir ve uzun tek bir kesintiden farklı bir yanıt gerektirir. Uzun kesintileri algılama ve onarıma (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”) ve büyük olay görünümüne (bkz. Konu 3.4 “Büyük olay metrikleri”) bağlayın.

**12. Döngüyü hata bütçesi ve sorun kaydıyla kapatın.** Bir kullanılabilirlik hedefi, ekibin yaptığı şeyi değiştirdiğinde yararlıdır. Aylık izin verilen kesinti bütçesi neredeyse bittiğinde, hata bütçesi politikasında anlatıldığı gibi riskli değişikliği yavaşlatın ve çabayı güvenilirlik çalışmasına kaydırın (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”). Aynı neden tekrarlandığında bir sorun kaydı açın ve bir düzeltmeye kadar izleyin (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş korkuluk metriği ya da uygulaması |
| --- | --- | --- |
| Zamana dayalı kullanılabilirlik | Gerçek yolculuk arızalanırken ayakta kalan önemsiz bir sayfayı probe etmek; kısa kesintiler kontroller arasına düşsün diye prob aralığını uzatmak; kapsamdaki saatleri küçültmek; kesintileri bozulma olarak saymak | Kullanıcı ağırlıklı kullanılabilirlik ve gerçek kullanıcı izleme; rakamın yanında belirtilen prob aralığı; olayları izleme kaydına karşı örneklemek |
| İstek tabanlı kullanılabilirlik | Arızaları seyreltmek için paydada kolay istekleri (sağlık kontrolleri, önbelleğe alınmış varlıklar) saymak; sunucu hatalarını istemci hatası olarak sınıflandırmak; kullanıcıların arıza olarak yaşadığı yeniden denemeleri hariç tutmak | İstek başına değil, kritik yolculuk başına başarı oranı; istisna listesinin gözden geçirilmesi; kullanıcıların bildirdiği olaylarla karşılaştırma |
| Kullanıcı ağırlıklı kullanılabilirlik | Yoğun saat arızaları az önemli olsun diye ağırlıklandırmayı seçmek; bozuk adımlar yine geçsin diye “başarılı” bir oturumu çok gevşek tanımlamak | Ağırlıklandırma kuralını ve yolculuk listesini yayımlamak; kesintiler sırasında şikâyet hacmi ve destek temaslarıyla karşılaştırmak |
| Plansız kesinti süresi | Kesintileri sonradan planlı olarak yeniden sınıflandırmak; doğrulanmış etki başlangıcını geciktirmek; bir kesintiyi daha kısa görünsün diye ikiye bölmek | Başladıktan sonra duyurulan bir kesintinin plansız olduğu kuralıyla planlı kesinti süresi payı; etki başlangıcını izleme verisiyle karşılaştırmak |
| Planlı kesinti süresi payı | Aşımlar ve arızalar planlı sayılsın diye değişiklikleri onaylı pencereler olarak kaydetmek; gereksiz bakım planlayarak planlı payı şişirmek | Plansız olarak yeniden sınıflandırılan aşım dakikaları; değişiklik başarısızlık oranı ve acil değişiklik payı (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”) |
| Kesinti sıklığı ve aralığı | Sayıyı düşük tutmak için olayları birleştirmek ya da yalnızca uzun bir aradan sonra yeni olay açmak; kısa kesintiler kaydedilmesin diye uyarıları bastırmak | Ham izleme olaylarına karşı uyarı ve olay örneklemesi; izleme kapsamı ve uyarı kalitesi (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”) |
| Bozulma payı | Yavaş hizmet eşiği hiç aşmasın diye eşiği çok gevşek belirlemek; bozulmuş süreyi ayakta olarak ilan etmek | Rakamın yanında gözden geçirilen gecikme yüzdelik dilimleri ve kullanıcıların bildirdiği yavaşlık (bkz. Konu 5.4 “Kapasite ve performans metrikleri”) |
| Ölçüm kapsamı | Kapsam yüzde 100 görünsün diye yalnızca probe etmesi kolay yolculukları listelemek; hiç çalışmayan bir probla bir yolculuğu kapsanmış saymak | Hizmet sahibi ve kullanıcılarla uzlaşılan yolculuk listesi; her çeyrekte örneklenen prob çalışma geçmişi |

Sağlıklı bir okuma, ekibin açıklayabileceği nedenlerle hareket eden rakamlar, hem planlı hem plansız kesinti süresinin görünür olması ve başlığa yakın bir kullanıcı ağırlıklı rakam gösterir. Şikâyetlerle birlikte gelen kusursuz bir aydan şüphelenin. Ara sıra yaşanan dürüst bir düşüş, kayıt sisteminin çalıştığını gösterir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Zamana dayalı kullanılabilirlik | Basit, yaygın olarak anlaşılır, sözleşmelerle karşılaştırması kolay | Kısmi arızayı ya hep ya hiç olarak ele alır; ne zaman ve kimin etkilendiğini yok sayar |
| İstek tabanlı kullanılabilirlik | Kısmi arızayı yansıtır; dağıtık hizmetlere ölçeklenir | Geçerli bir isteğin sağlam tanımına bağlıdır; kolay trafikle seyreltilebilir |
| Kullanıcı ağırlıklı kullanılabilirlik | Kullanıcıların yaşadığına yakın; yoğun zamandaki arızanın maliyetini gösterir | Oturum ya da yolculuk verisi gerektirir; açıklaması daha çok çaba ister |
| Planlı kesinti süresini hariç tutmak | Birçok anlaşmayla örtüşür; önceden bildirimi ödüllendirir | Gerçek etkiyi gizleyebilir; yeniden etiketlemeyi davet eder |
| Hata bütçeli ılımlı hedefler | Güvenilirlik ile teslimat hızını dengeler | Bütçe harcandığında harekete geçmek için disiplin gerektirir |

Düzyazı yanıt şudur: hizmete uyan en basit ölçümü seçin, yükün eşit olmadığı yerde kullanıcı ağırlıklandırması ekleyin ve her istisna konusunda açık olun. Herkesin anladığı biraz daha az zarif bir ölçüm, kimsenin güvenmediği sofistike bir ölçümden daha çok yarar sağlar.

## Takımınızla tartışılacak sorular

**1. En önemli hizmetimiz için “kullanılabilir” ne anlama gelir ve bir kullanıcı aynı fikirde olur muydu?**
Her kişiden, hizmetin ayakta sayılması için bir kullanıcının neyi yapabilmesi gerektiğini tek cümleyle anlatmasını isteyin. Yanıtları yazılı tanımla ve panoyu besleyen probla karşılaştırın. Kolaylaştırıcı, oturum açma, arama ya da ödemenin probda çalışıp pratikte arızalanması gibi boşluklara kulak vermelidir. Tanımın hangi kullanıcı yolculuklarını adlandırması gerektiği konusunda uzlaşarak bitirin.

**2. Son çeyrekteki hangi kesintileri hesabımız hariç tutardı ve bu adil miydi?**
Kesintileri listeleyin ve her birini planlı, plansız ya da hariç tutulmuş olarak işaretleyin. Her kararı kimin ve ne zaman verdiğini sorun. Kolaylaştırıcı, kullanıcıların etikete katılmayacağı vakaları kaydetmeli ve bunları kuralları sıkılaştırmak için kullanmalıdır.

**3. Hedefimiz kaç dakika kesintiye izin veriyor ve bu pencerede kaçını kullandık?**
Hedefi bir beyaz tahtada ay ve yıl için dakikalara çevirin. Şimdiye kadar kullanılan dakikalarla karşılaştırın. Bütçenin yalnızca yüzde 20'si kalsaydı ekibin neyi farklı yapacağını sorun. Bu, soyut hedefi somutlaştırır ve sayıyı hata bütçesi politikasına bağlar.

**4. Ölçümümüz, kullanıcıların hissedeceği bir arızayı nerede kaçırabilir?**
Prob konumlarını, aralığı, kapsanan yolculukları ve bağımlılıkları gözden geçirin. Hangi arızanın her probu geçip yine de hizmeti kullanıcılar için bozacağını sorun. Eklenecek bir yeni prob ya da bir gerçek kullanıcı ölçümü üzerinde uzlaşın.

**5. Kaçınabileceğimiz kesintileri mi planlıyoruz?**
Altı aylık planlı kesinti süresine bakın ve her kesintiyi neyin zorunlu kıldığını sorun. Bazıları, bir tedarikçi gereksinimi gibi, kaçınılmazdır. Diğerleri değişebilecek bir yayın ya da geçiş yaklaşımından kaynaklanır. En büyük kaynağı ortadan kaldırmak için ne gerektiğini ve bu işin sahibinin kim olduğunu sorun.

**6. Başlık sayısı kusursuz görünüyorsa bizi neyin şüphelendirmesi gerekir?**
Panoyla çelişecek sinyalleri adlandırın: şikâyet hacmi, destek temasları ya da nöbetçi ekibin anımsadıkları. Şu anda herhangi birinin olup olmadığını kontrol edin. Panoya konulacak tek bir karşılaştırma üzerinde uzlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri bir hizmeti her değiştirdiklerinde kullanılabilirliği etkiler. Sıfır kesintili dağıtım için tasarım yapabilir, etki alanını sınırlamak için özellik bayrakları kullanabilir ve hata bütçesini yayın kararlarına bir girdi olarak ele alabilirler; kullanılabilirliği dağıtım ölçümlerinin yanında okurlar (bkz. Konu 2.8 “DORA metrikleri”).

### Hizmet ve operasyon takımları

Operasyon ekipleri, veriyi üreten probların, olay kayıtlarının ve rotasyonların sahibidir. Tanımı ve istisna listesini güncel tutmalı, etki başlangıcını dürüstçe kaydetmeli ve izlemeyi gerçek olaylara karşı gözden geçirmelidirler. Kullanılabilirlik hizmete ve rotasyonuna aittir, nöbetteki tek bir mühendise asla (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”).

### Liderlik ve yönetişim

Liderler, kullanılabilirlik verisinin açık sözlü olup olmayacağını belirleyen teşvikleri koyar. “Neden bir dokuzu kaybettiniz?” diye soran bir gözden geçirme, ekiplere kesintileri istisnalarda saklamayı öğretir. Ekibin ne öğrendiğini ve hangi yatırımın kesintileri azaltacağını sorun ve kullanıcıların fark edeceğinden daha fazla dokuz istemeyin (tedarikçi taahhütleri için bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

### Müşteriler ve kullanıcılar

Kullanıcılar, kullanılabilirliği gelmiş oldukları işi yapıp yapamadıklarına göre değerlendirir. İşaretlenmiş bir bakım penceresine, sürprize olduğundan çok daha iyi tahammül ederler. Onlara dürüst başlangıç ve bitiş zamanlarını içeren bir durum sayfası verin ve geri bildirimlerini sayıların yanında okuyun (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci bir mağaza vitrini, bir ödeme hizmeti ve bir sipariş takip hizmeti işletir. Bu örnekteki sayılar açıklayıcıdır.

Ödeme ekibi ay için yüzde 99,95 zamana dayalı kullanılabilirlik raporlar; bu, 21,6 dakika plansız kesinti süresine izin verir ve pano yüzde 99,96 gösterir. Müşteri desteği başkanı huzursuzdur; çünkü başarısız ödemelerle ilgili destek temasları aynı ay içinde artmıştır. Ekipten ölçümü gözden geçirmesini ister.

Ekip üç sorun bulur. Prob, tam ödeme yolculuğunu değil, beş dakikada bir “ödeme erişilebilir” sayfasını kontrol etmektedir. İstek tabanlı veri, iki akşam boyunca bir ödeme sağlayıcısının zaman aşımının, ödeme denemelerinin yaklaşık yüzde 4'ünün her seferinde kabaca 50 dakika boyunca başarısız olmasına neden olduğunu gösterir ve prob bunu hiç fark etmemiştir; çünkü sayfanın kendisi yüklenmiştir. Ayrıca, onaylı penceresini 18 dakika aşan bir veritabanı geçişi tamamen planlı bakım olarak kaydedilmiştir.

Ekip dört değişiklik yapar. Tam ödeme yolculuğu için iki konumdan bir dakikalık aralıkla bir sentetik prob ekler. Ödeme adımına ulaşan oturumları kullanarak istek tabanlı ve kullanıcı ağırlıklı rakamlar ekler. Aşım dakikalarını plansız olarak yeniden sınıflandırır. Ve raporlara planlı kesinti süresi payını ve ölçüm kapsamını ekler.

Düzeltilmiş temelde ay, yüzde 99,93 zamana dayalı kullanılabilirlik, yüzde 99,90 istek tabanlı kullanılabilirlik ve yüzde 99,84 kullanıcı ağırlıklı kullanılabilirlik gösterir; çünkü arızalar akşam yoğunluğuna denk gelmiştir. Üçü de yüzde 99,95 hedefini kaçırır ki bu rahatsız edicidir. Ekip ve destek başkanı önceki sayının fazla cömert olduğu konusunda hemfikirdir. Düzeltilmiş tanımı metrik siciline yazarlar ve hata bütçesi politikasını yürürlüğe sokarlar: gelecek ay boyunca ödeme üzerindeki riskli değişiklikler bütçe toparlanana kadar bekler ve ekip ödeme sağlayıcısı zaman aşımları için bir sorun kaydı açar (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

Yakaladıkları oyunlaştırma riski yeniden etiketlemedir. Bir yönetici hedefi korumak için aşımı “uzatılmış bakım” olarak adlandırmayı önermiştir. Aşımların plansız olacağı kuralıyla birlikte planlı kesinti süresi payı, yeniden sınıflandırmayı görünür kılmış ve ekip dürüst rakamı korumuştur.

## Sektör mercekleri

**Girişim.** Küçük bir ekibin çoğu zaman tek bir hizmeti ve az izlemesi vardır. En önemli yolculukta tek bir probla ve “ayakta” için tek paragraflık bir tanımla başlayın. Mütevazı bir hedef seçin, dakikalara çevirin ve ekibin henüz ölçemediği dokuzları vaat etmekten kaçının.

**Küçük işletme.** Hizmet çoğu zaman barındırılan araçlar artı birkaç özel sistemdir ve kullanılabilirlik tedarikçilere bağlıdır. Tedarikçi kesintilerini kullanıcılarınızı etkiledikleri ölçüde kaydedin, tedarikçinin raporladıklarıyla karşılaştırın ve kümeyi iki ya da üç rakamla sınırlı tutun.

**Kurumsal.** Çok sayıda hizmet, ekip ve tedarikçi, kullanımdaki tanımları çoğaltır. İzin verilen varyasyonların kısa bir listesiyle tek bir standart kullanılabilirlik tanımı yayımlayın, metrik sicilini güncel tutun ve ekipleri karşılaştırmadan önce planlı ve plansız kuralların ekipler arasında aynı olduğundan emin olun. Hizmetler yük ve kritiklik açısından farklılaştığı için ekip sıralama tabloları yerine hizmet düzeyinde raporlamayı tercih edin.

**Kamu sektörü.** Kamu hizmetlerinin çoğu zaman yasal hizmet saatleri, yayımlanmış taahhütleri ve resmî kredilerle sözleşmeleri vardır. Bunlara yazıldıkları gibi karşı raporlayın, yanlarında kullanıcı ağırlıklı görünümü gösterin ve istisnalar konusunda açık olun (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Başlıca maliyetler, hizmet tanımını ve sicili yazma zamanı, kritik yolculukları arıza alanının dışından probe eden izleme ve planlı ile plansız kesinti süresinin ayrılabilmesi için olay, değişiklik ve izleme verilerini birleştirme çabasıdır. Gerçek kullanıcı izleme araç ve depolama maliyetleri ekler. Çoğu kuruluş verinin bir kısmına zaten sahiptir; bu yüzden ilk yatırım genellikle tanımlara yapılır.

Getiri, daha iyi kararlardan ve daha az anlaşmazlıktan gelir. Kullanıcı tarafından ölçüm yapan ekipler, sağlık kontrollerinin kaçırdığı arızaları bulur, anlaşmalar tek tanımla daha kolay yönetilir ve ek bir dokuzun maliyeti, kullanıcılar için değerine karşı tartılabilir. Yararı anlaşma gözden geçirmelerinde daha az sürpriz gibi bir örüntü olarak tanımlayın ve başlık ile kullanıcı ağırlıklı rakamlar arasındaki fark gibi kendi referans değerlerinizi ölçün. Başka kuruluşlardan rakam ödünç almayın.

## Anti-desenler ve tuzaklar

- **Dakikalar olmadan dokuzları dile getirmek.** Kimsenin izin verilen kesinti süresine çeviremediği bir hedef kararlara yol gösteremez. Her hedefin yanında izin verilen ve kullanılan dakikaları gösterin.
- **Yolculuk yerine sunucuyu ölçmek.** Yeşil bir sağlık kontrolü, bozuk bir oturum açmanın yanında durabilir. Kritik yolculukları uçtan uca probe edin ve gerçek kullanıcı verisiyle karşılaştırın.
- **Planlı etiketinin arızaları emmesine izin vermek.** Kolayca talep edilen bir planlı kategori plansız rakamı boşaltır. Kesinti öncesinde onay isteyin, iletin ve aşımları yeniden sınıflandırın.
- **Hizmetler ve saatler arasında ortalama almak.** Harmanlanmış bir rakam kritik hizmeti ve yoğun saati gizler. Hizmet başına raporlayın ve kullanıcı ağırlıklı bir görünüm ekleyin.
- **Bağımlılıkların izin verdiğinden fazla dokuz vaat etmek.** Seri bileşenler birleşik kullanılabilirliklerini aşamaz. Vaat etmeden önce çarpın ve tedarikçilerden ölçülmüş rakamlarını isteyin.
- **Yüzde 100'ü hedef olarak görmek.** Maliyet dik biçimde tırmanır ve değişim yavaşlar. Hedefi kullanıcı ihtiyacından seçin ve hata bütçesini kullanın.
- **Ekipleri ya da insanları dokuzlarına göre sıralamak.** Hizmetler yük ve kritiklik açısından farklıdır ve bir sıralama tablosu ekiplere kesintileri gizlemeyi öğretir. Her hizmete kendi eğilimini gösterin ve onu kendi hedefiyle karşılaştırın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanım ve saatler | “Ayakta”, izleme aracının gösterdiği şey demektir; kesinti zamanları sonradan tahmin edilir | Bazı hizmetler için yazılı; prob ve olay zamanları uyuşmuyor | Yolculuklar, saatler, istisnalar ve saat kurallarıyla hizmet başına tek yazılı tanım | Tanımlar bir ritimde gözden geçirilir; değişiklikler günlüğe kaydedilir ve grafiklerde işaretlenir | Tanımlar tedarikçiler ve müşterilerle hizalanır ve kararlara bilgi vermeyi bıraktıklarında gözden geçirilir |
| Ölçüm kalitesi | Elle raporlar ya da tek bir sağlık kontrolü | Bazı hizmetler için problar; bazı günlüklerde istek verisi | Kritik yolculuklarda dıştan içe problar ve standart bir kaynaktan istek tabanlı rakamlar | Gerçek kullanıcı verisinden kullanıcı ağırlıklı rakamlar; kapsam izlenir ve örneklenir | Ölçümler ekipler ve tedarikçiler arasında paylaşılır ve otomatik olarak uzlaştırılır |
| Planlı ve plansız yönetimi | Ayrım yok; bakım rastgele sayılır | Planlı etiketi bazı ekiplerce kullanılır, kurallar farklıdır | Tek kural: kesintiden önce onaylı ve iletilmiş, aşımlar yeniden sınıflandırılır | Planlı pay, azaltma hedefiyle eğilim olarak izlenir | Sıfır kesintili değişim varsayılandır ve planlı kesinti süresi nadirdir ve müzakere edilir |
| Kararlarda kullanım | Şikâyetten sonra raporlanır | Operasyon tarafından aylık gözden geçirilir | Hedefler dakika olarak gösterilir | Hata bütçesi politikası işi finansmanla değiştirir | Kullanılabilirlik, maliyet ve deneyim birlikte ödünleştirilir |

## Kontrol listesi

- [ ] Her hizmetin, kritik kullanıcı yolculuklarını adlandıran yazılı bir “kullanılabilir” tanımı vardır.
- [ ] Ölçüm penceresi, kapsamdaki saatler ve saat dilimi her rakam için belirtilmiştir.
- [ ] İstisna listesi yazılı, gözden geçirilmiş ve başlığın yanında gösterilmiştir.
- [ ] Planlı kesinti süresi onaylı bir değişiklik ve önceden bildirim gerektirir; aşımlar plansız sayılır.
- [ ] Problar arıza alanının dışından, belirtilen bir aralıkla, kritik yolculuklarda çalışır.
- [ ] İstek tabanlı ya da kullanıcı ağırlıklı bir rakam, zamana dayalı rakamın yanında durur.
- [ ] Her hedef, mevcut pencerede izin verilen dakikalar ve kullanılan dakikalar olarak gösterilir.
- [ ] Yalnızca toplam değil, kesinti sayısı ve süre yüzdelik dilimleri raporlanır.
- [ ] Bağımlılık kullanılabilirliği, bir hedef vaat edilmeden önce çarpılır.
- [ ] Tanım değişiklikleri günlüğe kaydedilir ve eğilim grafiğinde işaretlenir.
- [ ] Kullanılabilirlik hizmet başına raporlanır, kişi başına asla.

## Yapay zekâ istemleri

**Bir hizmet kullanılabilirlik tanımı taslağı hazırlayın.**

```text
[hizmet adı] için bir kullanılabilirlik tanımı yazıyorum; bu, [kullanıcı grupları]
tarafından kullanılan bir [hizmet türü]. Kritik kullanıcı yolculukları [yolculukları
listeleyin]. Üzerinde uzlaşılan hizmet saatleri [saatler ve saat dilimi]. Bilinen
bağımlılıklar [liste]. İzlememiz [problar, günlükler, gerçek kullanıcı verisi]
içeriyor.

Şunları kapsayan tek sayfalık bir tanım taslağı hazırla: her yolculuk için neyin
ayakta sayıldığı, ölçüm penceresi, kapsamdaki saatler, istisnalar, planlı ve
plansız kesinti süresi kuralı, bir kesinti için saatin başlangıcı ve bitişi ve
raporlanacak metrikler. Hedefler ya da kıyaslama değerleri uydurma. Varsayımlarını
ve tanımı tamamlamak için yanıtlamam gereken soruları listele.
```

**Bir hedefi izin verilen kesinti süresine çevirin ve sınayın.**

```text
[hizmet adı] için hedefimiz [pencere, örneğin 30 günlük bir ay] üzerinden
[kullanılabilirlik yüzdesi]. Kapsamdaki süre [saatler]. Temel bağımlılıklarımız ve
belirtilen ya da ölçülen kullanılabilirlikleri [liste ya da “bilinmiyor”].

Bu hedefin pencere ve bir yıl için izin verdiği kesinti süresini, kapsamdaki
saatleri kullanarak dakika cinsinden hesapla. Sonra bağımlılıklar seri halde
gerekliyse ve bağımsız arızalanıyorsa en iyi birleşik kullanılabilirliği tahmin et
ve kullandığın formülü açıkla. Girdilerimin bir sonuca varmak için çok belirsiz
olduğu yerleri işaretle. Sana vermediğim hiçbir bağımlılık için kullanılabilirlik
rakamı sağlama. Varsayımlarını listele.
```

**Bir aylık kesintileri sınıflandırma sorunları açısından gözden geçirin.**

```text
[ay] için [hizmet adı] hizmetinin kesinti kayıtları şunlar: [etki başlangıcı,
onarım zamanı, planlı ya da plansız etiketi, onay zamanı ve notlarla birlikte
kayıtları yapıştırın, kişisel veriler çıkarılmış olarak].

Her kesinti için planlı ya da plansız etiketinin şu kuralı izleyip izlemediğini
kontrol et: [kuralınızı yapıştırın]. Etki başlangıcının geç göründüğü, bir
kesintinin bölünmüş ya da birleştirilmiş göründüğü ve bir aşımın yeniden
sınıflandırılması gereken kayıtları belirle. Örüntüleri hizmete ve nedene göre
özetle, kişiye göre asla. Veriden neyi değerlendiremediğini söyle. Varsayımlarını
listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): raporlamak üzere olduğunuz bir kullanılabilirlik ölçümü için ilgili konuları ve eşleştirilmiş korkuluğu bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konunun bir revizyonunun her metriği bir oyunlaştırma vektörü ve korkulukla eşleştirilmiş tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- Kullanılabilirlik, “ayakta”, hizmet sınırı, saatler ve istisnalar kullanıcı tarafından yazıldığında anlamlı olur.
- İstek tabanlı ve kullanıcı ağırlıklı ölçümler, dağıtık hizmetleri ve eşit olmayan yükü toplam arıza dakikalarından daha iyi tanımlar.
- Planlı ve plansız kesinti süresini birlikte raporlayın ve planlı etiketini kazanmayı zorlaştırın.
- Her hedefi dakikalara çevirin ve bir dokuz sayısı vaat etmeden önce seri bağımlılıkları çarpın.
- Her ek dokuz bir öncekinden daha pahalıdır; bu yüzden hedefi kullanıcıların ihtiyaç duyduğundan seçin ve onun üzerinde harekete geçmek için hata bütçesini kullanın.
- Hizmetleri ve rotasyonları tanımlayın, insanları asla ve her başlık rakamını kullanıcıların deneyimine karşı sınayın.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
