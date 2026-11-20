# SLI, SLO ve hata bütçeleri

**Hizmet düzeyi hedefi, “yeterince güvenilir” ifadesini kullanıcıların, ürün ekiplerinin ve operasyon ekiplerinin hepsinin görebildiği bir sayıya dönüştürür; geride bıraktığı hata bütçesi ise bu sayıyı, suçlama tartışması yerine risk hakkında ortak ve harcanabilir bir karara çevirir.**

## Genel bakış ve motivasyon

Her hizmetin, ölçülmüş olsun olmasın, zaten bir güvenilirlik düzeyi vardır. Kimse bunu söylemezse kullanıcılar bir düzey varsayar, ürün ekibi bir başkasını varsayar, operasyon ekibi ise üçüncüsünü savunur. Fark, bir kesinti sırasında keşfedilir. Bu konu, [site güvenilirliği mühendisliğinin (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) bu boşluğu kapatmak için kullandığı birbirine bağlı üç fikri ele alır: hizmet düzeyi göstergesi, hizmet düzeyi hedefi ve hata bütçesi.

[Hizmet düzeyi göstergesi (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator), hizmetin kullanıcıların deneyimlediği haliyle bir yönünün ölçümüdür. Tipik yönler şunlardır: bir isteğin başarılı olup olmadığı, ne kadar sürdüğü, dönen verinin güncel olup olmadığı ve doğru olup olmadığı. İyi bir SLI bir oran olarak ifade edilir: tanımlı bir pencere boyunca iyi olayların sayısı bölü geçerli olayların sayısı. [Hizmet düzeyi hedefi (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), bu oran için bir dönemdeki hedeftir; örneğin “geçerli ödeme isteklerinin yüzde 99,9'u kayan 28 gün boyunca başarılı olur.” **Hata bütçesi**, hedefin ters gitmesine izin verdiği miktardır: yüzde 100 eksi SLO. Yüzde 99,9'da bütçe, geçerli olayların yüzde 0,1'idir.

Hata bütçesi konuşmayı değiştirir. Hizmet bütçesinin az bir kısmını harcadıysa ekibin daha hızlı yayın yapmak, riskli değişiklikleri denemek ve deneyler yürütmek için payı vardır. Bütçe neredeyse bittiyse aynı ekip özellik çalışmasını yavaşlatır ve bütçe toparlanana kadar güvenilirliğe çaba harcar. Karar önceden üzerinde uzlaşılmış bir sayıdan gelir; bu yüzden toplantıda kimin daha kıdemli ya da daha ikna edici olduğuna bağlı değildir.

**Yanma hızı**, bütçenin, pencerenin sonunda tam olarak tamamını harcayacak hıza göre ne kadar hızlı harcandığıdır. 1'lik bir yanma hızı, bütçenin tam olarak pencerenin sonunda biteceği anlamına gelir. 10'luk bir yanma hızı, pencerenin onda birinde biteceği anlamına gelir. Yanma hızı, SLO'dan uyarılara uzanan köprüdür; çünkü bir sorunun ne kadar acil olduğunu, hedefe neye mal olduğu cinsinden söyler.

Çevik ve ITIL bakış açıları burada buluşur ve ilişkili fikirler için farklı bir sözcük dağarcığı kullanır. ITIL 4'te hizmet düzeyi yönetimi, hizmet düzeylerini belirleyen, ölçen ve raporlayan uygulamadır; [hizmet düzeyi anlaşması (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) ise bir sağlayıcı ile bir müşteri arasındaki belgelenmiş anlaşmadır (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”). SLO, genellikle SLA'dan daha sıkı olan ve hizmeti işleten ekibe ait olan iç bir hedeftir. SLA, kredi ya da ceza gibi sonuçlar taşır. SLO ise bir karar kuralı taşır. Hizmetlerinin sahibi olan çevik ekipler (“onu siz yaparsınız, siz işletirsiniz”) güvenilirliğin maliyetini özelliklerle aynı birikim listesinde görünür kılmak için SLO'ları kullanır. ITIL uygulamasını izleyen ekipler SLI'ları müşterilerin ihtiyaç duyduklarını söylediği şeyin ölçülebilir biçimi, SLO'yu ise SLA'yı güvende tutan çalışma hedefi olarak ele alabilir.

[Kullanılabilirlik](https://en.wikipedia.org/wiki/Availability) en tanıdık SLI'dır ve başka yerde ayrıntılı olarak ele alınır (bkz. Konu 5.3 “Kullanılabilirlik metrikleri”). Gecikme, doğruluk, güncellik ve işlem hacmi de adaydır. Beceri, göstergeleri toplaması kolay olandan değil, kullanıcıların önemsediği şeyden seçmektir. Bir sunucudaki CPU kullanımını toplamak kolaydır ve müşterinin ödeme yapıp yapamadığı hakkında çok az şey söyler. İki saniye içinde tamamlanan ödeme isteklerinin payı ise çok şey söyler. Gecikme için ortalamaları değil [yüzdelik dilimleri](https://en.wikipedia.org/wiki/Percentile) raporlayın; çünkü ortalama, kullanıcıların fark ettiği yavaş kuyruğu gizler (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı” ve Konu 5.4 “Kapasite ve performans metrikleri”).

## Temel ilkeler

- **Sunucudan değil, kullanıcıdan başlayın.** Bir insanın tanıyacağı bir deneyimi, örneğin “ödemem gerçekleşti” ifadesini tanımlayan göstergeler seçin ve nelerin ölçüleceğine geriye doğru çalışarak ulaşın.
- **Yüzde 100'ün altındaki bir hedef bir karardır, bir itiraf değil.** Kusursuz güvenilirlik ulaşılamaz ve karşılanamazdır; kullanıcılar bir noktadan sonra genellikle farkı ayırt edemez. Bütçe bu dengeyi açık hale getirir.
- **Hedefi ona bağımlı olan insanlarla belirleyin.** SLO, ürün, operasyon ve müşteriler arasında müzakere edilmiş bir anlaşmadır; tek bir ekibin seçtiği bir sayı değildir.
- **Sonuçlar üzerinde bütçe bitmeden uzlaşın.** Sakin bir haftada yazılan hata bütçesi politikası, stresli bir haftada izlenir. Bir kesinti sırasında icat edilen politika ise tartışılır.
- **Her küçük dalgalanmada değil, yanmada uyarın.** Bir insanı yalnızca bütçe hedefi tehdit edecek kadar hızlı tüketildiğinde çağırın ve daha yavaş yanmayı kayıtlara yönlendirin.
- **SLO'lar hizmetleri tanımlar, insanları asla.** Bütçe bir hizmete ve ekibine aittir. Bir mühendis için bir puan değildir.

## Metrik tanımları

Aşağıdaki metrikler bir hizmetin SLO sistemini tanımlar. İlk dördü uygulamanın çekirdeğidir; son ikisi uygulamanın kendisinin ne kadar sağlıklı olduğunu tanımlar. Her saat ve sınır formül sütununda belirtilmiştir. “Geçerli olaylar”, SLO belgesinde üzerinde uzlaşılan istisnalardan sonra SLI'ya sayılan olaylardır; örneğin ekibin kendi yük testlerinden gelen istekler hariç tutulur.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılık | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SLI karşılama | Bir hizmetin bir göstergesi için iyi olan geçerli olayların payı | iyi olaylar / geçerli olaylar; raporlama döneminin başından sonuna kadar olan pencere için; SLO belgesinin hariç tuttuğu olaylar (yük testleri, SLO öyle diyorsa önceden duyurulan planlı bakım) hem paydan hem paydadan çıkarılır | yüzde | Yük dengeleyici, uygulama ya da sentetik prob telemetrisi; izleme ya da gözlemlenebilirlik platformu | Hizmet düzeyi yönetimi; izleme ve olay yönetimi | İşletilebilirlik için bitti tanımı; hizmet sağlığının paydaş gözden geçirmesi | Sürekli, günlük ve pencere başına raporlanır |
| SLO uyumu | SLI'nın SLO penceresi boyunca hedefi karşılayıp karşılamadığı ve kaç yakın pencere için karşıladığı | SLI karşılamasının hedefte ya da üzerinde olduğu pencereler / değerlendirilen pencereler, son 12 ay boyunca; hâlâ açık olan pencere hariç tutulur | pencerelerin yüzdesi | SLI karşılama geçmişi | Hizmet düzeyi yönetimi; sürekli iyileştirme | Güvenilirlik üzerine ekip hedefi ya da çalışma anlaşması | Aylık, üç aylık bir eğilimle |
| Kalan hata bütçesi | Mevcut pencerede henüz harcanmamış bütçe payı | 1 - (şimdiye kadarki kötü olaylar / tüm pencere için izin verilen kötü olaylar), burada izin verilen kötü olaylar = (1 - SLO) x tüm pencere için beklenen geçerli olaylar; saat pencere başlangıcında başlar ve pencere sonunda durur | bütçenin yüzdesi | SLI karşılama ve hacim tahmini | Hizmet düzeyi yönetimi; risk yönetimi | Yayın hazırlık kontrolü; planlı iş girdisi | Günlük, haftalık gözden geçirilir |
| Yanma hızı | Bütçenin eşit harcama hızına göre harcanma hızı | (geriye dönük bir dönem boyunca kötü olaylar / geçerli olaylar) / (1 - SLO); geriye dönük dönem belirtilir, örneğin 1 saat ya da 6 saat | oran (1 tam olarak bütçe dahilinde demektir) | İnce zaman çözünürlüğünde SLI telemetrisi | İzleme ve olay yönetimi; olay yönetimi | Nöbet uyarı kuralları; ekip seferberliği tetikleyicisi | Sürekli, uyarı kurallarında değerlendirilir |
| Bütçe politikasına uyum | Hata bütçesi politikasındaki bir tetikleyiciye ulaşıldığında üzerinde uzlaşılan sonucun ne sıklıkla uygulandığı | dönemde politika eyleminin üzerinde uzlaşılan süre içinde alındığı tetikleyiciler / dönemde ulaşılan tetikleyiciler; kayıtlı bir gerekçeyle resmen feragat edilen tetikleyiciler çıkarılmaz, ayrıca sayılır | yüzde | Politika belgesi, karar günlüğü ve birikim listesi geçmişi | Hizmet düzeyi yönetimi; değişiklik yetkilendirme | Çalışma anlaşması; retrospektif takibi | Üç aylık |
| SLO kapsamı | Kapsamdaki kritik kullanıcı yolculuklarının ya da hizmetlerin güncel bir SLO'su ve çalışan bir SLI'sı olanlarının payı | SLI verisi son 7 günde gelen en az bir SLO'su olan kapsamdaki hizmetler ya da yolculuklar / kapsamdaki hizmetler ya da yolculuklar; “kapsamda” olanlar hizmet kataloğunda listelenir (ITIL terimleriyle service catalogue) | yüzde | Hizmet kataloğu, SLO sicili ve izleme yapılandırması | Hizmet kataloğu yönetimi; hizmet düzeyi yönetimi | Ekibin hizmet sahipliği listesi | Üç aylık |

Yanma hızının geriye dönük dönemi ve SLO penceresi birer tercihtir. Kayan 28 günlük bir pencere tam haftaları kapsar. Tercihi SLO belgesinde belirtin ve sabit tutun; aksi halde eğilim yanıltır.

## Öneriler

### Göstergeleri kullanıcıların önemsediği şeylerden seçin

**1. Kritik kullanıcı yolculuklarıyla başlayın.** Hizmetin kullanmaya değer olması için bir kullanıcının yapabilmesi gereken üç ila altı şeyi, örneğin oturum açmak, aramak, ödeme yapmak ve ekstre indirmek, listeleyin. Her birini kullanıcı tarafından bir cümle olarak yazın. Sonra o cümlenin doğru olup olmadığını gösteren SLI'yı seçin. Bu, SLO'ları az tutar ve kimsenin okumadığı bir teknik gösterge kataloğunu önler.

**2. Her SLI'yı iyi olaylar bölü geçerli olaylar olarak ifade edin.** Bir oranı açıklamak kolaydır, toplulaştırmak kolaydır ve bütçeye dönüştürmek kolaydır. “İyi”yi kullanıcıların kabul edeceği bir eşikle tanımlayın ve “geçerli”yi, makul biçimde sunamayacağınız trafik, örneğin kötüye kullanım nedeniyle engellenen istekler, belgelenmiş bir biçimde hariç tutulacak şekilde tanımlayın. İki tanımı da SLO belgesine yazın; çünkü anlaşmazlıkların çoğu paydada saklanır.

**3. Kullanıcıya pratik olduğu kadar yakın ölçün.** Bir ağ ya da istemci sorunu hizmeti kullanılamaz kılarken sunucu tarafı başarı oranı kusursuz olabilir. Yük dengeleyicide ya da kenarda ölçün ve en önemli yolculuklar için bir sentetik prob ya da istemci tarafı ölçüm ekleyin. Her ölçüm noktasının bir maliyeti ve bir kör noktası vardır; bu yüzden her SLI'nın hangisini kullandığını kaydedin (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

**4. Gecikme için bir eşikle birlikte yüzdelik dilimler kullanın.** “Arama isteklerinin yüzde 95'i 800 milisaniyenin altında tamamlanır” bir SLI'dır. “Ortalama gecikme” değildir; çünkü birkaç hızlı istek çok sayıda yavaş isteği dengeleyebilir. Yararlı olduğunda, hizmetin nasıl hissettirdiğini yavaş kuyruk belirlediği için medyan ve 99. yüzdelik dilim gibi iki eşik kullanın (bkz. Konu 5.4 “Kapasite ve performans metrikleri”).

### İnsanların savunabileceği hedefler belirleyin

**5. İlk SLO'yu mevcut performanstan ve kullanıcı ihtiyacından belirleyin, sonra sıkılaştırın.** SLI'yı birkaç hafta ölçün, kullanıcılara ve destek personeline hangi düzeyi fark ettiklerini sorun ve hizmetin bugün biraz pay bırakarak karşılayabileceği bir hedef belirleyin. Mevcut performansın çok üzerinde belirlenmiş bir hedef kalıcı bir ihlaldir ve insanlar ona bakmayı bırakır. Kullanıcıların elde ettiğinin çok altında belirlenmiş bir hedef ise kalitenin görünmeden çürümesine izin verir. Bir çeyrek sonra yeniden gözden geçirin.

**6. SLO'yu SLA'dan daha sıkı tutun ve ikisini ayrı tutun.** Bir müşteri anlaşması yüzde 99,5 vaat ediyorsa ekibin hedefi yüzde 99,9 olabilir; böylece bütçe, sözleşme çizgisi aşılmadan önce tükenir. SLO ile SLA'yı aynı sayı yapmayın ve birini diğeri olarak raporlamayın. Anlaşma ticari ve hukuki bir belgedir; hedef ise bir mühendislik karar kuralıdır (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

**7. Bağımlılıkları hesaba katın.** Bir hizmet, zarifçe düşük işlevle çalışmadığı sürece, bağlı olduğu şeyden daha güvenilir olamaz. Tedarikçiler dahil temel bağımlılıkları listeleyin ve onların gerçek performansının sizin hedefiniz için ne anlama geldiğini sorun.

### Bütçeyi bir karar aracı olarak işletin

**8. Hata bütçesi politikasını ihtiyaç duymadan önce yazın.** Politika, tanımlı tüketim düzeylerinde ne olacağını söyler. Basit bir sürüm üç adımdan oluşur: bütçe kaldığı sürece normal işleyiş, belirtilen bir pay harcandığında riskli değişikliklerin ek gözden geçirilmesi ve güvenilirlik çalışmasına öncelik verilmesi ve bütçe tükendiğinde, toparlanana kadar zorunlu olmayan özellik yayınlarının durdurulması. İstisnayı kimin verebileceğini ve bunun nasıl kaydedileceğini belirtin. Ürün ve operasyon liderlerinin ikisi de imzalamalıdır; böylece politika her iki tarafa eşit uygulanır.

**9. Bütçeyi bilerek harcayın.** Hiç dokunulmayan bir bütçe, hedefin çok sıkı olduğunu ya da ekibin çok temkinli olduğunu düşündürür. Boşta kalan bütçeyi deneyler, daha hızlı yayın ritmi, kanarya dağıtımları ve sınırlı maruziyetle üretimde test etmenize olanak tanıyan [özellik anahtarları](https://en.wikipedia.org/wiki/Feature_toggle) için kullanın; ayrıca kullanıcıların yalnızca küçük bir payı etkilenirken sorunları yakalamak için [kanarya yayınlarını](https://en.wikipedia.org/wiki/Canary_release) kullanın. Sürekli dokunulmayan bir bütçeyi, hedefin kullanıcıların ihtiyacıyla örtüşüp örtüşmediğini sormak için bir uyarı olarak değerlendirin (bkz. Konu 4.5 “Yayın ve dağıtım metrikleri”).

**10. Birden çok yanma hızında uyarın.** Bir saat içinde bütçenin büyük bir payını harcayacak kadar yüksek bir hız gibi hızlı bir yanma bir insanı çağırır. Günler içinde bütçeyi yine de tüketecek mütevazı bir hız gibi yavaş bir yanma, mesai saatleri için bir kayıt oluşturur. İki ya da daha fazla geriye dönük pencere kullanmak hem ani arızaları hem yavaş sızıntıları yakalar ve az bütçeye mal olan kısa dalgalanmalar için çağrıları azaltır. Site Reliability Workbook'un SLO'lara dayalı uyarı bölümü bu örüntüyü açıklar ve eşikler kopyalanmak yerine hizmetinize göre ayarlanmalıdır (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”).

**11. Olayları, sorunları ve öğrenmeyi bütçeye bağlayın.** Bir olaydan sonra, süresi ve etkisinin yanında ne kadar bütçe tükettiğini kaydedin. Bu sayıyı sorun kaydına ve takip eylemlerine öncelik vermek için kullanın (bkz. Konu 4.1 “Sorun yönetimi metrikleri” ve Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”). Bütçe maliyeti ayrıca büyük olay incelemelerine, çok farklı arızaları karşılaştırmak için ortak bir birim verir (bkz. Konu 3.4 “Büyük olay metrikleri”).

### Uygulamayı dürüst ve canlı tutun

**12. SLO'ları her çeyrekte gerçeklikle karşılaştırın.** SLO'yu destek temasları, şikâyetler ve memnuniyet sonuçlarıyla karşılaştırın. SLO yeşilken kullanıcılar mutsuzsa SLI yanlıştır ya da hedef çok gevşektir. SLO kırmızıyken kimse şikâyet etmiyorsa hedef çok sıkı olabilir. Her değişikliği ve gerekçesini kaydedin ve değişikliği eğilim grafiğinde gösterin (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş korkuluk metriği ya da uygulaması |
| --- | --- | --- |
| SLI karşılama | Arızalar düşene kadar “geçerli” olayları daraltmak; örneğin yeniden denenen istekleri ya da bütün hata sınıflarını hariç tutmak; yalnızca en sağlıklı bileşeni ölçmek; yalnızca elverişli bir konumdan prob yapmak | SLI tanımını ve istisnaları bir değişiklik günlüğüyle SLO belgesinde yayımlamak; SLI'yı destek temasları ve kullanıcı şikâyetleriyle karşılaştırmak; hariç tutulan olayların ve hacimlerinin düzenli gözden geçirilmesi |
| SLO uyumu | Hedefi her zaman geçecek kadar düşük belirlemek; kötü bir dönemden sonra pencere uzunluğunu değiştirmek; bir ihlali bakım dönemi olarak yeniden tanımlamak | Kullanıcı girdisiyle belirlenen ve bir takvimle gözden geçirilen hedef; belgede sabitlenmiş pencere; uyumun yanında raporlanan istisna sayısı ve pencerede plansız değişiklikler |
| Kalan hata bütçesi | Kötü olayları hariç tutulmuş olarak yeniden sınıflandırmak; izin verilen kötü sayısı daha büyük görünsün diye beklenen hacmi şişirmek; pencereyi erken sıfırlamak | İzin verilen kötü olayları pencere sonunda gerçek hacimden hesaplamak; bütçenin yanında gösterilen hariç tutulan olay hacmi; önceden sabitlenmiş pencere tarihleri |
| Yanma hızı | Yanma hiç tetiklenmesin diye uyarı eşiklerini ayarlamak; hızlı yanmaların ortalamada kaybolacağı kadar uzun bir geriye dönük dönem kullanmak | Geçmiş olaylar kullanılarak uyarı kapsamı testi (“bu kural çağrı yapar mıydı?”); eyleme dönüştürülebilir uyarı oranı ve kaçırılan algılama sayısı (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”) |
| Bütçe politikasına uyum | Rutin olarak istisna vermek; hiç ulaşılamayacak tetikleyicilerle bir politika yazmak; göstermelik bir güvenilirlik kaydını politika eylemi olarak saymak | İstisnaların ayrıca sayılıp gözden geçirilmesi; dönemdeki istisnaların payı; tamamlanan güvenilirlik çalışması (bkz. Konu 4.1 “Sorun yönetimi metrikleri”) |
| SLO kapsamı | Yüzdeyi yükseltmek için her hizmete önemsiz bir SLO eklemek; veri akmıyorken bir yolculuğu kapsanmış saymak | SLI verisi güncellik kontrolü (veri son 7 günde geldi); SLO'nun ikincil bir uç nokta değil, kritik bir yolculuğu kapsayıp kapsamadığının gözden geçirilmesi |

Sağlıklı bir okuma şunu gösterir: kullanıcıların bildirdiğini izleyen bir SLI, bazen kaçırılan ve bazen rahatça karşılanan bir hedef ve bilerek harcanan bir bütçe. Politika tetikleyicisine ulaşıldığında uygulanır, istisnalar nadirdir ve kaydedilir, her tanım değişikliği grafikte görünür. Her zaman bütçesinin yüzde 100'ü kalan bir hizmet ya da her zaman ihlal edilen bir hizmet, övgü ya da suçlama değil, hedef hakkında bir konuşmayı hak eder. Herhangi bir tek rakamın bir soruya işaret ettiğini unutmayın (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Kullanıcı yolculuğu SLI'ları | Kullanıcıların hissettiğiyle örtüşür; sayıca azdır; mühendis olmayanlara açıklaması kolaydır | Uçtan uca enstrümantasyon çaba gerektirir; henüz kullanıcılara ulaşmamış iç hataları kaçırabilir |
| Bileşen ya da kaynak SLI'ları (CPU, bellek, kuyruk derinliği) | Toplaması ucuzdur; tanı ve kapasite için yararlıdır | Kullanıcı deneyimi için zayıf vekillerdir; önemi olmayan çok sayıda uyarı üretir |
| Kayan pencere | Pürüzsüzdür; ay sonunda uçurum yoktur; her zaman günceldir | Yöneticilere takvim ayından daha zor açıklanır; kötü bir gün tüm pencere boyunca kalır |
| Yanma hızı uyarısı | Hedef gerçekten risk altındayken çağırır; daha az yanlış alarm | Yapılandırması ve test edilmesi daha karmaşıktır; eşikler hizmet başına ayarlama gerektirir |

Az sayıda SLI seçin, bunları kullanıcılarla belirleyin ve değişimin hızına bütçenin karar vermesine izin verin. Doğru sıkılık, kullanıcıları yine de memnun tutan en gevşek hedeftir; çünkü her ek dokuz bir öncekinden daha pahalıdır.

## Takımınızla tartışılacak sorular

**1. Bu hizmetin bir kullanıcısı neyi yapabilmelidir ve yapamadığını nasıl anlarız?**
Her kişiden hiçbir panoya bakmadan, bir kullanıcının hizmetle yaptığı en önemli üç şeyi yazmasını isteyin. Listeleri karşılaştırın ve ürün, operasyon ve destek arasındaki farkları not edin. Sonra bu yolculuklardan hangisinin şu anda bir SLI'sı olduğunu sorun. Kolaylaştırıcı, ölçümü olmayan önemli yolculukları ve hiçbir yolculuğu tanımlamayan ölçümleri aramalıdır.

**2. SLO'muz yüzde 99,9 olsaydı ve onu karşılasaydık kullanıcılar mutlu olur muydu ve bunu nasıl bilirdik?**
Mevcut SLO'yu son çeyreğin destek temasları, şikâyetleri ve memnuniyet sonuçlarının yanına koyun. Örtüşüp örtüşmediğini sorun. SLO yeşil ve kullanıcılar mutsuzsa SLI ya da hedefin üzerinde çalışılması gerekir. Kullanıcılar mutlu ve SLO kırmızıysa hedef, kimsenin ihtiyaç duyduğundan daha sıkı olabilir. Hedefi ve deneyimi bir araya getirecek tek bir eylem üzerinde uzlaşın.

**3. Hata bütçesi tükenirse gerçekte neyi farklı yapardık?**
Mevcut hata bütçesi politikasını yüksek sesle okuyun ya da yoksa birlikte bir taslak hazırlayın. Kimin neyi durduracağını ve istisna verme yetkisinin kimde olduğunu sorun. Kolaylaştırıcı, genel niyetler yerine zorunlu olmayan yayınları durdurmak ve adı belli kişileri güvenilirlik çalışmasına almak gibi somut eylemler için ısrar etmelidir. Kimsenin izleneceğine inanmadığı bir politika, hiç politika olmamasından daha kötüdür.

**4. En son ne zaman bütçemiz fazlayken bir risk aldık?**
Ekibin bütçesini kullanıp kullanmadığını yoksa yalnızca koruyup korumadığını tartışın. Son çeyreğe bakın: yayınlar yavaşken bütçenin neredeyse hiç dokunulmadığı bir dönem oldu mu? Ekibin bunu yapmanın güvenli olduğunu bilseydi neyi deneyeceğini sorun. Bu soru aşırı temkinliliği ortaya çıkarır ve yanıt çoğu zaman, ekibin bütçesini iyi kullanmasını sağlayacak bir kanarya yayınına, bir anahtara ya da daha hızlı bir boru hattına işaret eder.

**5. Son kötü olayımız için hangi uyarılarımız zamanında tetiklenirdi ve hangileri boşuna tetiklenirdi?**
Son önemli olayı alın ve uyarı geçmişini ona karşı yeniden oynatın. Gelen çağrıları, etki başladıktan ne kadar sonra geldiklerini ve neredeyse hiç bütçeye mal olmayan olaylar için kaç çağrı geldiğini sayın. Yanma hızı uyarılarının daha iyisini yapıp yapmayacağını tartışın. Hedef, her birinin sahibi olan kısa bir uyarı değişikliği listesidir; nöbetçinin kim olduğuna dair bir suçlama tartışması değil.

**6. Her SLO'nun sahibi kim ve birini en son ne zaman bilerek değiştirdik?**
SLO'ları listeleyin ve her birinin yanına sahibini, bir ekip ya da rol olarak yazın. Her birinin en son ne zaman gözden geçirildiğini ve neyin değiştiğini sorun. Bir yıldır kimsenin dokunmadığı bir SLO, artık kararlara bilgi vermediğinin işaretidir. Her biri için bir gözden geçirme tarihi üzerinde ve yararlı olmaktan çıkmış bir SLO'yu emekliye ayırma hakkının kimde olduğu üzerinde uzlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri ne kadar hızlı hareket edecekleri konusunda net bir kural kazanır. Bütçe kaldığında daha sık yayın yapabilir ve daha cesur değişiklikler deneyebilirler. Bütçe düşük olduğunda, uzun bir pazarlık olmadan güvenilirlik çalışmasını birikim listesine koyarlar. Hangi yolculukların önemli olduğunu bildikleri için göstergelerin seçimine yardım etmeli ve yeni özellikleri en baştan SLI düşünülerek enstrümante etmelidirler (bkz. Konu 2.8 “DORA metrikleri”). Bütçe, planlama yapılacak bir ekip kaynağıdır; saklanacak bir sayı asla.

### Hizmet ve operasyon takımları

Operasyon ekipleri, neyin çağrıyı hak ettiğine ve neyin sabaha kadar bekleyebileceğine karar vermek için SLO'ları kullanır. Yanma hızı uyarıları gürültüyü azaltır ve nöbet çalışmasını kullanıcıların hissettiğine bağlar (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”). SLI tanımlarını dürüst tutar, arkalarındaki telemetriyi sürdürür ve bütçe maliyetini olay ve sorun kayıtlarına işlerler.

### Liderlik ve yönetişim

Liderler üç soru sormalıdır: hedef nedir, ne kadar bütçe kaldı ve tükenirse ne yapacağız? Hata bütçesi politikasını imzalar ve politika yavaşlamayı söylediğinde ekibin arkasında dururlar. SLO uyumunu bir prim metriğine dönüştürmekten kaçınırlar; bu, tanımları daraltmayı ve yumuşak hedefler belirlemeyi davet eder.

### Müşteriler ve kullanıcılar

Müşteriler, hedef ihtiyaçlarını yansıttığında ve hizmetin buna karşı nasıl performans gösterdiğini görebildiklerinde yarar sağlar. Hedef belirlenirken danışılmalıdırlar; çünkü yavaşlığa ya da kesintiye toleransları göreve ve günün saatine göre değişir. Memnuniyet ve çaba gibi deneyim ölçümleri, SLO'nun hissettiklerini yakalayıp yakalamadığını denetler (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendecinin bir ödeme ekibi, bir platform ekibi ve bir hizmet masası vardır. Ödeme hizmeti iş için kritiktir. Bu örnekteki tüm sayılar açıklayıcıdır.

Ekip, “bir siparişi ödemek” yolculuğu için tek bir SLI tanımlar: yük dengeleyicide ölçülen, 2 saniye içinde başarı döndüren geçerli ödeme isteklerinin payı. Geçerli istekler, ekibin kendi yük testlerini ve dolandırıcılık hizmetinin tasarım gereği reddettiği istekleri hariç tutar. SLO, kayan 28 gün boyunca yüzde 99,9'dur. Pencere 12.000.000 geçerli istek beklediği için bütçe 12.000 kötü istektir (yüzde 0,1). Ürün başkanı ve platform başkanı tarafından imzalanan hata bütçesi politikasının üç düzeyi vardır: bütçenin yüzde 50'si harcandığında riskli değişiklikler için ikinci bir gözden geçiren ve kanarya yayını gerekir; yüzde 75'te, bir sonraki planlama konuşmasında güvenilirlik çalışması öncelik kazanır; yüzde 100'de bütçe toparlanana kadar zorunlu olmayan özellik yayınları durur.

Pencerenin 10. gününde ekip, şimdiye kadar beklenen yaklaşık 4.285.714 istek içinde 7.800 kötü istek görür; bu da yaklaşık yüzde 99,82 SLI karşılaması, bütçenin yüzde 65'inin harcanması ve yalnızca yüzde 36'sı geçmiş bir pencere demektir. Dönem boyunca yanma hızı yaklaşık 1,8'dir; yani bu hızla bütçe yaklaşık 15. günde biter. Kötü bir dağıtım, arızaların 5.000'ini oluşturmuştur. Olay kaydı arızanın 22 dakika sürdüğünü gösterir, büyük olay incelemesi boru hattında eksik bir kontrol tespit eder ve olayın bütçe maliyeti sorun kaydına işlenir (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

Ekip politikayı izler. İkinci düzey eylem hemen uygulanır; riskli değişiklikler için kanarya yayını gerekir ve planlama toplantısı boru hattı kontrolünü iş kuyruğunun en üstüne taşır. Ürün sahibi, acil olmayan bir promosyon özelliğinin durdurulmasını kabul eder. 28. güne gelindiğinde bütçenin yüzde 94'ü harcanmıştır ve ekip pencereyi hedef içinde tamamlar.

Oyunlaştırma riski gözden geçirmede ortaya çıkar. Perakendecinin arama hizmetini işleten farklı bir ekip, çeyrek için yüzde 99,95 raporlamış, hizmet masası ise “arama çalışmıyor” temaslarında bir artış kaydetmiştir. Araştıran platform ekibi, arama ekibinin “geçerli”yi 5 saniye içinde yeniden denenen istekleri hariç tutacak biçimde yeniden tanımladığını ve bunun birçok gerçek arızayı ortadan kaldırdığını bulur. Gözden geçirme özgün tanımı yeniden getirir, çeyreği yeniden ifade eder ve iki korkuluk ekler: bir tanımdaki her değişiklik gerekçesiyle SLO belgesine kaydedilir ve SLI karşılaması her ay destek temaslarıyla karşılaştırılır. Kimse yalan söylememiştir, çünkü değişiklik gürültüyü azaltmak için yapılmıştır; bu yüzden düzeltme bir azar değil, daha net bir tanım olmuştur.

## Sektör mercekleri

**Girişim.** En önemli yolculuk için, kenarda ölçülen tek bir SLO ile ve bir sayfaya sığan basit bir politikayla başlayın. Düzinelerce SLO için bir platform kurmayın. Bütçe, küçük bir ekibin bir Cuma günü yayın yapıp yapmayacağı konusunda daha az tartışmasına yardım eder.

**Küçük işletme.** Küçük bir işletme çoğu zaman barındırılan araçlara ve tedarikçilere güvenir; bu yüzden SLI, bir tedarikçinin durum verisinden ya da basit bir dış probdan gelebilir. Tedarikçinin hizmet düzeylerini yazılı olarak okuyun ve kendi ihtiyaçlarınıza karşı kontrol edin.

**Kurumsal.** Çok sayıda hizmet, ekip ve tedarikçi tutarlılığın önemini artırır. Liderlerin tanımlar konusunda tartışmadan karşılaştırma ve toplulaştırma yapabilmesi için SLO belgeleri için ortak bir şablon, ortak bir sicil ve karşılamayı ile bütçeyi hesaplamanın standart bir yolunu sağlayın. SLO'yu hizmet ekibinin sahipliğinde, sicili ise merkezi olarak yönetilen halde tutun.

**Kamu sektörü.** Hizmetler çoğu zaman yasal ya da yayımlanmış hedefleri karşılamak zorundadır ve bir arıza kamuoyuna bildirilebilir. Sözleşmesel ya da yasal taahhüdü iç hedeften ayrı tutun ve iç SLO'nun daha sıkı olduğundan emin olun. Denetim için SLI tanımını, istisnaları ve veri kökenini belgeleyin ve erişilebilirlik ile alternatif bir sağlayıcı seçemeyen kullanıcılar için plan yapın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon, güvenilirlik konusunda daha az tartışma ve daha iyi kararlardır. Bir hedef olmadan güvenilirlik çalışması, özelliklerle en yüksek sesle tartışanın gücü üzerinden yarışır. Bir hedef ve bir bütçeyle denge görünür ve önceden üzerinde uzlaşılmıştır; kullanıcılar ihtiyaç duydukları kadar güvenilir bir hizmet alır ve ekip bu noktanın ötesinde güvenilirliğin bedelini ödemez.

Maliyetin dört bölümü vardır. Birincisi tasarımdır: yolculukları, göstergeleri ve hedefleri seçmek ve politikayı yazmak için atölyeler. İkincisi enstrümantasyondur: doğru yerde telemetri, problar ve olayları karşılamaya ve bütçeye dönüştüren boru hattı (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”). Üçüncüsü işletimdir: uyarı kuralları, bir pano, üç aylık bir gözden geçirme ve tanımları güncel tutma zamanı. Dördüncüsü, politika özellik çalışmasını durdurduğunda ortaya çıkan fırsat maliyetidir; bu, anlaşmaya saygı göstermenin maliyetidir ve anlaşmayı baskı gelmeden önce yapmanın nedenidir.

Getiri, bir ekibin kendisi için izleyebileceği örüntülerde ortaya çıkar: eylem gerektirmeyen daha az çağrı, yayın yapıp yapmama konusunda daha kısa tartışmalar, büyük bir olaydan sonra değil bütçe bitmeden önce planlanan güvenilirlik çalışması ve müşteriler için daha az sürpriz. Yararı, ekibin öncesi ve sonrası kendi rakamlarını, örneğin rotasyon başına çağrıları ve en büyük olayın tükettiği bütçe payını, karşılaştırarak tanımlayın.

## Anti-desenler ve tuzaklar

- **Çok fazla SLO.** Düzinelerce hedef dikkati dağıtır ve hangisinin önemli olduğunu kimse söyleyemez. Kritik kullanıcı yolculuklarıyla başlayın ve gerisini emekliye ayırın.
- **SLO eşittir SLA.** Bir sayıyı ikisi olarak raporlamak güvenlik payını ortadan kaldırır ve bir mühendislik kuralını ticari bir vaatle karıştırır. Hedefi anlaşmadan daha sıkı tutun.
- **Hiç uygulanmayan bir politika.** Bütçe biter ve hiçbir şey değişmezse uygulama itibarını kaybeder. Liderlerin politikayı imzalamasını sağlayın ve her istisnayı gerekçesiyle kaydedin.
- **Bütçeyi insanlar için bir puan kartı olarak kullanmak.** Mühendisleri ya da nöbetçileri harcanan bütçeye göre sıralamak, insanların olayları gizlemesine ve tanımları daraltmasına yol açar. Bütçeyi hizmete atfedin ve nedenleri sistem düzeyinde tartışın (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).
- **Her düşüşte uyarmak.** Ham belirtilerde çağrı yapmak uyarı yorgunluğu yaratır ve insanlara çağrıları görmezden gelmeyi öğretir. Yanma hızında çağrı yapın ve yavaş yanmaları kayıtlara gönderin.
- **Kurup unutmak.** Kimsenin gözden geçirmediği bir SLO, kullanıcıların ihtiyacından uzaklaşır. Üç aylık bir gözden geçirme planlayın ve neyin neden değiştiğini kaydedin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Göstergeler ve hedefler | Güvenilirlik sözcüklerle tanımlanır; sunucuların çalışma süresi raporlanır | Bazı ekipler SLI tanımlar; hedefler değişkendir ve nadiren gözden geçirilir | Kritik kullanıcı yolculuklarının ortak bir şablonda belgelenmiş SLI'ları ve SLO'ları vardır | SLO'lar eğilim olarak izlenir, kullanıcı geri bildirimine karşı kontrol edilir ve kanıtla sıkılaştırılır ya da gevşetilir | SLO'lar müşteriler ve tedarikçilerle uzlaşılır ve bağımlı hizmetlere ve sözleşmelere hizalanır |
| Hata bütçesi ve politika | Bütçe yok; güvenilirlik ile özellikler arasındaki seçim tartışmayla belirlenir | Birkaç hizmet için bir bütçe hesaplanır; üzerinde uzlaşılmış sonuçlar yok | Ürün ve operasyon tarafından imzalanan, tanımlı tetikleyicilere sahip yazılı bir politika | Politikaya uyum ölçülür, istisnalar gözden geçirilir, bütçe yayın planlamasına bilgi verir | Bütçe kararları ortak bağımlılıkları paylaşan ekipler arasında koordine edilir; politika koşullar değiştikçe gözden geçirilir |
| Uyarı ve yanıt | Ham kaynaklar üzerinde eşik uyarıları; çok sayıda çağrı | Bazı yanma hızı uyarıları; eşikler örneklerden kopyalanmış | Temel SLO'lar için çok pencereli yanma hızı uyarıları, yavaş yanma için kayıtlar | Uyarı kalitesi ölçülür ve geçmiş olaylar kullanılarak ayarlanır | Uyarılar hizmet zincirleri boyunca hizalanır ve iyileştirme ortak gözden geçirmelerle yönlendirilir |

## Kontrol listesi

- [ ] Hizmet için kritik kullanıcı yolculukları listelenmiştir; her biri kullanıcı tarafından yazılmıştır.
- [ ] Her SLI, iyi olaylar bölü geçerli olaylar olarak tanımlanmıştır ve istisnalar yazılmıştır.
- [ ] Gecikme SLI'ları ortalamaları değil, yüzdelik dilimleri ve belirtilmiş bir eşiği kullanır.
- [ ] Her SLO hedefini, penceresini ve SLI'nın nerede ölçüldüğünü belirtir.
- [ ] SLO, herhangi bir SLA'dan daha sıkıdır ve ikisi ayrı raporlanır.
- [ ] Bir hata bütçesi politikası vardır, ürün ve operasyon liderleri tarafından imzalanmıştır ve istisnaları kimin verebileceğini belirtir.
- [ ] Yanma hızı uyarıları en az iki geriye dönük dönem kullanır ve yavaş yanmalar çağrı değil kayıt oluşturur.
- [ ] Her olay kaydı, tükettiği bütçeyi gösterir.
- [ ] SLI karşılaması her ay destek temasları ve memnuniyet sonuçlarıyla karşılaştırılır.
- [ ] Her SLO'nun bir sahibi (bir ekip ya da rol) ve bir gözden geçirme tarihi vardır; değişiklikler gerekçeleriyle günlüğe kaydedilir.
- [ ] Hiçbir SLO sonucu bireyleri sıralamak ya da ödüllendirmek için kullanılmaz.

## Yapay zekâ istemleri

**Kullanıcı yolculuklarından aday SLI'lar taslağı hazırlayın.**

```text
[hizmet adı] hizmetini işletiyorum; [kullanıcı türü] tarafından [kritik kullanıcı
yolculukları listesi] için kullanılıyor. [ölçüm noktaları listesi, örneğin yük
dengeleyici, uygulama günlükleri, sentetik prob] noktalarında ölçüm yapabiliyoruz.
Her yolculuk için, iyi olaylar bölü geçerli olaylar olarak yazılmış bir ya da iki
aday SLI öner; “iyi”, “geçerli” ve istisnalar için önerilen bir tanım ver. Her
ölçüm noktasının güçlü yönlerini ve kör noktalarını not et. Hedef değerler ya da
kıyaslamalar uydurma; kullanıcıların neye tahammül ettiğini bana sor. Varsayımlarını
listele.
```

**Bir hata bütçesi politikası taslağı hazırlayın.**

```text
[hizmet adı] için, [pencere] boyunca [hedef] SLO'suna sahip bir hata bütçesi
politikası taslağı hazırlamama yardım et. Paydaşlar [ürün rolü] ve [operasyon rolü].
Tetikleyici düzeylerini, her düzeydeki eylemi, istisnayı kimin verebileceğini ve
bunun nasıl kaydedileceğini ve politikanın nasıl gözden geçirileceğini öner. Bir
sayfada tut ve bir insan sponsor gerektiren kararları işaretle. Diğer
kuruluşlardan eşikler uydurma; seçenekleri ve ödünleşimleri sun. Varsayımlarını
listele.
```

**Bir SLO'yu oyunlaştırma riski açısından gözden geçirin.**

```text
[hizmet adı] için SLO belgemiz şu: [SLI tanımını, istisnaları, hedefi, pencereyi
ve değişiklik günlüğünü yapıştırın]. SLI'nın daraltılabileceği, pencerenin ya da
hedefin değiştirilebileceği veya olayların sonuçları kullanıcı deneyiminden daha
iyi gösterecek biçimde hariç tutulabileceği yolları belirle. Her risk için bir
korkuluk metriği ya da uygulaması öner. Niyet varsayma. Varsayımlarını ve
yanıtlamam gereken soruları listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): kullanılabilirlik, uyarı kalitesi ve büyük olaylar gibi ilgili konuları ve her SLO ölçümünün yanında bulunması gereken korkuluğu bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konudaki düzenlemelerin oyunlaştırma tablosundaki her metriği ve başlıklı her çapraz başvuruyu koruduğunu denetlemek için kullanın.

## Temel çıkarımlar

- Kullanıcıların yaptığı şeylerden az sayıda SLI seçin ve her birini iyi olaylar bölü geçerli olaylar olarak ifade edin.
- Yüzde 100'ün altındaki bir SLO risk hakkında bir karardır ve hata bütçesi, bu kararın değişime bıraktığı paydır.
- Hata bütçesi politikasını önceden yazın, liderlik düzeyinde imzalayın ve her istisnayı kaydedin.
- Çağrıların hedefe yönelik gerçek riski yansıtması için birden fazla geriye dönük pencereyle yanma hızında uyarın.
- Tanımları koruyun: her değişikliği günlüğe kaydedin ve SLI sonuçlarını kullanıcıların bildirdikleriyle karşılaştırın.
- Bütçeyi hizmetlere ve ekiplere atfedin, bireylere asla ve her SLO'yu en az üç ayda bir gözden geçirin.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
