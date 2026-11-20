# Hizmet sürekliliği metrikleri

**Bir kurtarma planı, bir tatbikat onu sınayana kadar bir hipotezdir; bu yüzden süreklilik metrikleri gerçekte neyin kurtarıldığını, ne kadar hızlı kurtarıldığını ve ne kadar verinin geri geldiğini saymalı, bir rafta duran planların sayısını asla saymamalıdır.**

## Genel bakış ve motivasyon

Çoğu olay ölçümü sıradan kötü günü tanımlar: başarısız bir dağıtım, doygunluğa ulaşmış bir veritabanı, gürültülü bir komşu. Hizmet sürekliliği ise nadir ve ağır günü tanımlar: bir bölge arızalandığında, bir veri deposu bozulduğunda, bir tedarikçi ortadan kaybolduğunda ya da fidye yazılımı bütün altyapıyı şifrelediğinde. [İş sürekliliği planlaması](https://en.wikipedia.org/wiki/Business_continuity_planning), bir kuruluşu bu tür olaylar boyunca kabul edilebilir düzeylerde hizmet sunmaya devam etmeye hazırlama disiplinidir. ITIL 4'te uygulamaya hizmet sürekliliği yönetimi denir ve bu, o daha büyük amacın BT hizmeti görünümüdür (eşlik eden *Agile ITIL Guide* içindeki ilgili konuya bakın).

İki terim ağırlığın çoğunu taşır. [Kurtarma süresi hedefi](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO), bir kesintiden sonra bir hizmeti geri getirmek için kabul edilebilir süredir. [Kurtarma noktası hedefi](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO), veri kaybının kabul edilebilir miktarıdır ve bir zaman aralığı olarak ifade edilir: bir saatlik RPO, son bir saatlik yazmaların kaybının tolere edilebileceği, daha fazlasının edilemeyeceği anlamına gelir. İkisi de [iş etki analizinden](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), yani en çok hangi etkinliklerin önemli olduğunu, neyin neye bağlı olduğunu ve bir kesintinin neye mal olduğunu belirleme yönteminden gelir. Hedefler, bir fiyatı olan iş kararlarıdır; çünkü daha sıkı hedefler daha fazla yedeklilik, daha fazla otomasyon ve daha fazla tatbikat zamanı gerektirir.

Zorluk, bir hedefin henüz gerçekleşmemiş gelecekteki bir olay hakkında bir söz olmasıdır. Dürüst kanıt bir testtir. Ekip, son tatbikatta hizmeti RTO içinde geri getirdi mi? Geri yüklenen veri RPO'yu karşıladı mı? Plandaki adımlar, ekibin gerçekten attığı adımlar mıydı? Bir süreklilik metriği bu nedenle çoğunlukla tatbikatların bir ölçümüdür ve ölçümün kalitesi tatbikatın ne kadar gerçekçi olduğuna bağlıdır.

Çevik ve site güvenilirliği mühendisliği (SRE) ekipleri buna yararlı alışkanlıklar getirir. Sistemleri haftalık olarak değişir; bu yüzden bir kez yazılıp dosyalanan bir plan aylar içinde eskir. Çevik yanıt, kurtarmayı kod olarak tutmak (örneğin [kod olarak altyapı](https://en.wikipedia.org/wiki/Infrastructure_as_code) ile), sık sık prova yapmak ve her provayı birikim listesi kalemlerinin kaynağı olarak ele almaktır. [Kaos mühendisliği](https://en.wikipedia.org/wiki/Chaos_engineering) ve tatbikat günleri aynı fikri daha küçük ölçekte uygular: bilerek, kontrollü bir biçimde bir arıza yaratın ve ne olduğunu izleyin. SRE görünümü Google'ın *Site Reliability Engineering* kitabında anlatılır ve daha geniş alan [site güvenilirliği mühendisliği](https://en.wikipedia.org/wiki/Site_reliability_engineering) maddesinde özetlenir.

### Görünümler nasıl ayrışır

- **ITIL görünümü.** Hizmet sürekliliği yönetimi, BIA'dan kurtarma hedeflerini belirleyen, planlar tasarlayan ve bunları testlerle kanıtlayan bir uygulamadır. Çıktıları planlar, tatbikat raporları ve kaydedilmiş bulgulardır. [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) standardı bir iş sürekliliği yönetim sistemini anlatır. Ekim 2026 itibarıyla, bir müşteri ya da düzenleyici uyum gerektiriyorsa güncel sürümü doğrudan kontrol edin.
- **Çevik görünüm.** Kurtarma yeteneği, bitti tanımında bir ürün özelliğidir. Bir veri deposu ekleyen bir hikâye, geri yükleme yolu denenene kadar bitmiş değildir.
- **SRE görünümü.** Güvenilirlik çalışması bütçelenir ve ölçülür. Yük devretme, geri yükleme tatbikatları ve tatbikat günleri, sahipleri ve birikim listesine giren bulguları olan planlı işlerdir.

Bu konu yedi ölçümü kapsar: testlerde süre ve veri hedeflerine karşı kurtarma, tatbikat kapsamı ve güncelliği, yedekten geri yüklemeler, bulguların kapatılması ve plan güncelliği. Gerçek kesintiler büyük olay metriklerinde (bkz. Konu 3.4 “Büyük olay metrikleri”) ve kullanılabilirlik metriklerinde (bkz. Konu 5.3 “Kullanılabilirlik metrikleri”) yer alır. Kullanıcıya dönük hedefler olarak ifade edilen hedefler, göstergeler ve bütçeler konusundadır (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”). DORA araştırma programının “başarısız dağıtımı kurtarma süresi” çok daha küçük bir saattir (bkz. Konu 2.8 “DORA metrikleri”). Testlerin ortaya çıkardığı kök nedenler sorun ve öğrenme konularına aittir (bkz. Konu 4.1 “Sorun yönetimi metrikleri” ve Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”).

Bir **kademe**, ne kadar hızlı geri gelmesi gerektiğine göre gruplanmış bir hizmet sınıfıdır. Bir **masa başı tatbikatı**, sistem değişikliği içermeyen, tartışmaya dayalı bir provadır. Bir **tatbikat günü**, bir ekibin bir arızayı yarattığı ya da simüle ettiği ve yanıtı gözlemlediği uygulamalı bir provadır. Bir **bulgu**, plan ile olanlar arasında kaydedilmiş bir boşluktur. **Plan güncelliği**, bir planın hizmeti bugün olduğu haliyle ne kadar iyi yansıttığıdır.

## Temel ilkeler

- **Önce test edin, sonra iddia edin.** Bir RTO ya da RPO yalnızca gerçekten gerçekleştirilmiş ve zamanlanmış bir kurtarmayla doğrulanır. Hedefi ve son gösterilen sonucu yan yana raporlayın.
- **Yalnızca başarıyı değil, gerçekçiliği ölçün.** Dakikalar içinde geçen boş bir test veritabanının geri yüklenmesi, üretim boyutundaki bir geri yükleme hakkında çok az şey söyler. Her tatbikatın kapsamını ve koşullarını sonucun yanına kaydedin.
- **Altyapıyı kademelendirin ve çabayı kademeye göre harcayın.** Kritik hizmetler sık, gerçekçi testler alır. Düşük kademeli hizmetler daha hafif kontroller alır. Her şey için tek bir sıklık hedefi çabayı boşa harcar ya da riski kaçırır.
- **Bulguları bir tatbikatın ürünü olarak ele alın.** Bir tatbikat gününün değerli çıktısı, kapatılmış bir boşluk listesidir. Hiç bulgusu olmayan bir test ya mükemmeldir ya da çok yumuşaktır ve hangisi olduğunu öğrenmelisiniz.
- **Hizmetleri ve rotasyonları tanımlayın, bireyleri asla.** Tatbikat sonuçları sistemi ve planı tanımlar. Kimse bir tatbikatı ne kadar hızlı kurtardığına göre sıralanmaz.
- **Her tatbikatı kendi satırı olarak gösterin.** Hizmet başına yılda az sayıda test vardır; bu yüzden ortalamalar yanıltır (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

## Metrik tanımları

Her metrik saati ya da sayımı, nelerin hariç tutulduğunu ve veri kaynağını listeler. Her satır, güvenilmeden önce yazılı bir kurala ihtiyaç duyar. Aşağıdaki “kademe-1 hizmet”, kendi BIA'nızın tanımladığı en yüksek kurtarma kademesindeki hizmet anlamına gelir.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılık | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| RTO karşılama oranı | Hizmetin belirtilen RTO'su içinde geri getirildiği kurtarma tatbikatlarının payı | geri yükleme süresi <= RTO olan tatbikatlar / yapılan tatbikatlar. Saat, tatbikat arızasının ilan edilen başlangıcında (enjeksiyon zamanı ya da senaryo ilanı) başlar ve hizmet gerçek ya da sentetik kullanıcılar için üzerinde uzlaşılan sağlık kontrolünü geçtiğinde durur. Masa başı tatbikatları ve zamanlanmış geri yüklemesi olmayan tatbikatlar hariç tutulur ve ayrıca sayılır | yüzde, tatbikat sayısı gösterilir | Tatbikat raporu, izlemeden zaman çizelgesi, RTO'lu hizmet sicili | Hizmet sürekliliği yönetimi; kullanılabilirlik yönetimi | Tatbikat günü sonucu; teslimat metriklerinde kurtarma süresi | Tatbikat başına; üç aylık toplulaştırılır |
| RPO karşılama oranı | Veri kaybının belirtilen RPO içinde kaldığı kurtarma tatbikatlarının payı | ölçülen veri kaybı aralığı <= RPO olan tatbikatlar / veri geri yükleyen tatbikatlar. Veri kaybı aralığı, kurtarmadan sonra mevcut olan son yazma ile arıza anı arasındaki süredir. Hiçbir durumu geri yüklemeyen tatbikatlar hariç tutulur | yüzde, tatbikat sayısı gösterilir | Tatbikat raporu, geri yüklenen verinin kaynak ya da yazma günlüğüyle karşılaştırması | Hizmet sürekliliği yönetimi; bilgi güvenliği yönetimi | Bitti tanımının bir parçası olarak geri yükleme tatbikatı | Tatbikat başına; üç aylık toplulaştırılır |
| Test edilmiş kurtarma kapsamı | Kademe-1 ve kademe-2 hizmetlerinden, üzerinde uzlaşılan test aralığı içinde uygulamalı bir kurtarma testi yapılanların payı | aralık içinde nitelikli bir testi olan hizmetler / kapsamdaki hizmetler. Nitelikli bir test uygulamalıdır (yalnızca masa başı değil) ve hizmeti test ya da üretim ortamında geri yükler. Aralık kademe başına belirlenir | yüzde, kademeye göre | Hizmet sicili, tatbikat takvimi ve raporları | Hizmet sürekliliği yönetimi; hizmet kataloğu yönetimi | Tatbikat günü takvimi | Aylık |
| Son başarılı kurtarma testinden bu yana geçen gün | Her kritik hizmet için en son geçen kurtarma testinin yaşı | rapor tarihi eksi hem RTO'yu hem RPO'yu karşılayan en son testin tarihi. Başarısız bir test saati sıfırlamaz. Hiç test edilmemiş hizmetler sıfır olarak değil “hiç” olarak gösterilir | gün, hizmet başına, en eskisi vurgulanarak | Tatbikat raporları, hizmet sicili | Hizmet sürekliliği yönetimi | Tatbikat günü takvimi; iş kalemi yaşı | Aylık |
| Yedekten geri yükleme başarı oranı | Doğrulanmış, kullanılabilir veriyle tamamlanan, yedekten denenen geri yüklemelerin payı | tamamlanan ve bir veri doğrulama kontrolünü geçen geri yüklemeler / denenen geri yüklemeler; otomatik ve elle geri yükleme testleri üzerinden. Yalnızca yedek işi başarısı hariç tutulur; çünkü çalışmış bir iş, işe yarayan bir geri yükleme değildir | yüzde, veri kademesine göre | Yedekleme sistemi günlükleri, otomatik geri yükleme doğrulama sonuçları | Hizmet sürekliliği yönetimi; altyapı ve platform yönetimi | Geri yükleme tatbikatı; bitti tanımındaki işletilebilirlik ölçütleri | Otomatik testler için haftalık; gözden geçirmede aylık |
| Tatbikat bulgusu kapatma oranı | Kurtarma tatbikatlarından gelen bulguların, ciddiyete göre ayrılmış, üzerinde uzlaşılan süre içinde kapatılanlarının payı | hedef içinde kapatılan bulgular / dönemde vadesi gelen bulgular. Saat, bulgu tatbikat raporuna kaydedildiğinde başlar ve doğrulanmış düzeltmede durur; bu, bunu doğrulayan bir yeniden test ya da gözden geçirme demektir. Adı belli bir sahip tarafından risk olarak kabul edilen bulgular ayrıca sayılır | yüzde, gecikmiş bulguların sayısıyla | Tatbikat raporu, sorun izleyici | Hizmet sürekliliği yönetimi; sürekli iyileştirme | Retrospektif eylem kalemleri; birikim listesi kalemi yaşı | Aylık |
| Plan güncelliği | Hizmetlerindeki son önemli değişiklikten sonra ya da gözden geçirme aralığı içinde gözden geçirilen süreklilik planlarının ve çalışma kılavuzlarının payı | gözden geçirme tarihi son önemli değişiklikten sonra olan ve aralık içinde olan planlar / kapsamdaki planlar. Önemli değişiklik, mimariyi, veri depolarını, bağımlılıkları ya da tedarikçileri değiştirdiği işaretlenmiş bir değişiklik kaydı demektir | yüzde, en eski gözden geçirilmemiş plan yaşıyla | Plan deposu (sürüm kontrolü), değişiklik kayıtları, hizmet sicili | Hizmet sürekliliği yönetimi; değişiklik yetkilendirme | Bitti tanımı çalışma kılavuzu güncellemesini içerir | Üç aylık |

Bir tatbikattaki RTO saati, etkide başlayan gerçek bir kesintideki saatten farklıdır (bkz. Konu 3.4 “Büyük olay metrikleri”); bu yüzden tatbikatları tatbikatlarla karşılaştırın. Yakından senaryolanmış bir tatbikat prova hızını ölçer; bu yüzden ne kadar sürpriz içerdiğini kaydedin.

## Öneriler

### Sınanabilir hedefler belirleyin

**1. RTO ve RPO'yu bir iş etki analizinden türetin ve hizmetin yanına yazın.** BIA, işletmeye bir saatlik, bir günlük ve bir haftalık kesintinin neye mal olduğunu ve hangi veriyi kaybetmeyi göze alabileceğini sorar. Yanıtları hizmet siciline kaydedin; böylece her test belirtilmiş bir hedefle karşılaştırılabilir. Yalnızca mühendislerin seçtiği hedefler ya karşılanamaz ya da müşterilerin ihtiyacıyla ilgisiz olma eğilimindedir.

**2. Hizmetleri kademelendirin ve test aralıklarını kademeye göre belirleyin.** Belki üç ya da dört kademe gibi az sayıda kademe, her hizmet için farklı bir kuraldan işletmesi daha kolaydır. En üst kademeye en sık ve en gerçekçi testleri verin ve en alt kademeye, bir örneğin dönemsel geri yüklemesi gibi hafif bir kontrol verin. Aralıkları yazın ve BIA değiştiğinde gözden geçirin.

**3. Hedefin mimariye uyduğunu kontrol edin.** Gecelik yedeklemeyle beş dakikalık bir RPO, bir testin en kötü anda ortaya çıkaracağı bir çelişkidir. İlk tatbikattan önce her hedefi yedekleme, çoğaltma ve yük devretme tasarımıyla karşılaştırın ve her boşluğu bir bulgu olarak kaydedin.

### Bir şeyi ortaya çıkaran biçimlerde test edin

**4. Masa başı tatbikatlarını, geri yükleme tatbikatlarını ve tatbikat günlerini karıştırın.** Masa başı tatbikatı ucuzdur ve roller, iletişim bilgileri ve kararlardaki boşlukları bulur. Uygulamalı bir geri yükleme tatbikatı prosedürlerdeki, izinlerdeki ve verideki boşlukları bulur. Bir arızayı yaratan ve yanıtı izleyen bir tatbikat günü, izleme, çalışma kılavuzları ve koordinasyondaki boşlukları bulur. Her türü ayrı raporlayın ki bir dizi kolay masa başı tatbikatı kurtarmanın kanıtı gibi görünmesin.

**5. Geri yüklemeyi üretim boyutundaki veride zamanlayın.** Küçük bir kopyada çalışan bir geri yükleme, işlem hacmi ya da depolama sınırları nedeniyle gerçek hacimde başarısız olabilir. Tam ölçekli testlerin sık çalıştırılamayacak kadar maliyetli olduğu yerde dönemsel olarak bir tane çalıştırın ve herhangi bir ekstrapolasyonu belirtin. Veri boyutunu sonuçla birlikte kaydedin.

**6. Geri yüklenen verinin kullanılabilir olduğunu doğrulayın.** Geri yüklemeden sonra bir satır sayısı, bir sağlama toplamı ya da bir sentetik işlem gibi otomatik bir kontrol ekleyin. Bir geri yüklemeyi yalnızca bu kontrol geçtiğinde başarılı sayın.

**7. Sürprizi kademeli olarak ekleyin.** İlk tatbikatlar duyurulabilir ve senaryolanabilir. Sonrakiler arızanın ayrıntılarını saklamalı ve süresi dolmuş kimlik bilgileri ya da ulaşılamaz bir tedarikçi gibi bağımlılıkları içermelidir. Sonuçların bağlam içinde okunabilmesi için sürpriz düzeyini kaydedin.

### Bulguları değişime dönüştürün

**8. Her bulguyu bir sahip, bir ciddiyet ve bir vade tarihiyle günlüğe kaydedin.** Bir tatbikat günü bir liste üretir: eksik bir izin, artık araçla uyuşmayan bir çalışma kılavuzu adımı, hiç tetiklenmeyen bir izleyici. Her birini ekibin birikim listesine özellik çalışmasıyla aynı görünürlükle koyun. Açık bulguların yaşını ve zamanında kapatılanların payını izleyin ve kapatmayı mümkün olduğu yerde yeniden testle doğrulayın.

**9. Bulguları sorun yönetimine ve öğrenmeye bağlayın.** Tatbikatlar arasında tekrarlayan bir bulgu ITIL anlamında bir sorundur (bkz. Konu 4.1 “Sorun yönetimi metrikleri”). Her tatbikatı bir olay sonrası inceleme gibi suçlamasız gözden geçirin ve eylemleri kapatmaya kadar izleyin (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”).

### Planları canlı tutun

**10. Planları ve çalışma kılavuzlarını sürüm kontrolünde tutun ve bunları değişime bağlayın.** Bir değişiklik kaydı mimariyi, bir veri deposunu ya da bir tedarikçiyi değiştirdiğinde, sahibi olan planın aynı iş parçasında gözden geçirilmesini isteyin (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”). Plan güncelliğini yalnızca takvime değil, son önemli değişikliğe göre ölçün. Her çeyrek gözden geçirilen ama geçen ayki geçişi yok sayan bir plan yalnızca adıyla günceldir.

**11. Bağımlılık haritasını dürüst tutun.** Kurtarma sırası, kimlik, ad çözümleme ve gizli bilgi depolama gibi ortak hizmetlere bağlıdır. Haritayı yapılandırma kayıtlarına karşı uzlaştırın ve tatbikatların ortaya çıkardığı boşlukları düzeltin (bkz. Konu 7.4 “Yapılandırma ve CMDB kalitesi metrikleri”).

**12. Tedarikçileri dahil edin ve tatbikat görevini rotasyonla yürütün.** Her kritik tedarikçiden kendi test kanıtını isteyin ve ortak adımları nasıl tatbik edeceğiniz konusunda uzlaşın (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”). Tatbikatlar zaman tüketir; bu yüzden görevi bir rotasyonla paylaşın ve operasyonel yük olarak sayın (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”).

## Manipülasyon yolları ve koruma önlemleri

Süreklilik sayılarını pohpohlamak kolaydır; çünkü az kişi bir tatbikata yakından bakar ve gerçek test nadiren gerçekleşir. Tablo, her metriği oyunlaştırılma biçimi ve onu yakalayan kontrolle eşleştirir. Eşleştirmeler Konu 1.2'de ortaya konan biçimi izler (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş korkuluk metriği ya da uygulaması |
| --- | --- | --- |
| RTO karşılama oranı | Küçük bir test veri kümesi, kolay bir senaryo ya da provası yapılmış bir betik seçmek; saati ekip başladıktan sonra, geç başlatmak; “geri yüklendi” daha erken gelsin diye sağlık kontrolünü gevşetmek; her test geçsin diye cömert bir RTO belirlemek | Her sonuçla birlikte veri boyutunu, senaryo sürprizini ve sağlık kontrolü tanımını kaydetmek; RTO'yu BIA ile karşılaştırmak; başarısızlıklar dahil her tatbikatı kendi satırı olarak göstermek |
| RPO karşılama oranı | Kaybı yalnızca birincil tablo için ölçüp tüm durum için ölçmemek; yük çalışmadığı için senkronize olan bir kopyayı test etmek; bir sonucun kaçırılmasından sonra RPO'yu yeniden tanımlamak | Veri kaybını kapsamdaki tüm veri depolarında yazma günlüğüne karşı doğrulamak; gerçekçi yazma yükü altında test etmek; hedeflerin gerekçeli bir değişiklik günlüğünü tutmak |
| Test edilmiş kurtarma kapsamı | Masa başı tartışmalarını test saymak; yüzdeyi yükseltmek için önemsiz derecede küçük bir hizmeti test etmek; hizmetleri daha düşük bir kademeye yeniden sınıflandırarak kapsamdaki listeyi küçültmek | Kademe-1 sayısı için uygulamalı testler istemek; kapsamı hizmet kritikliğine göre ağırlıklandırarak raporlamak; kademe değişikliklerini BIA'ya karşı denetlemek |
| Son başarılı kurtarma testinden bu yana geçen gün | Yaşı sıfırlamak için kolay bir testi yeniden çalıştırmak; kısmi bir testi geçmiş olarak etiketlemek; bir kâğıt üzerinde gözden geçirmeden sonra tarihi sıfırlamak | Son geçen testin kapsamını göstermek; en eski yaşı ve hiç test edilmemiş hizmetleri göstermek; hem RTO'nun hem RPO'nun karşılanmış olmasını istemek |
| Yedekten geri yükleme başarı oranı | Yedek işi başarısını geri yükleme başarısı olarak raporlamak; yalnızca iyi bilinen yedekleri test etmek; başarısız olamayacak bir kontrolle doğrulamak | Rastgele örneklenmiş yedeklerin geri yüklemelerini izlemek; bir veri doğrulama sonucu istemek; kontrolün kendisini her denetimde gözden geçirmek |
| Tatbikat bulgusu kapatma oranı | Bulguları düzeltme olmadan kapatmak; vade tarihini gevşetmek için ciddiyeti düşürmek; bir bulguyu çok sayıda kolay bulguya bölmek; en baştan az bulgu kaydetmek | Kapatmayı yeniden testle doğrulamak; düşen bir sayı daha yumuşak tatbikatlar anlamına gelebileceği için kapatma oranının yanında tatbikat başına bulguları raporlamak; ciddiyet değişikliklerini gözden geçirmek |
| Plan güncelliği | Planı okumadan gözden geçirme tarihini güncellemek; değişiklikleri önemli değil olarak işaretlemek; planı hiç eskimeyen genel metinle doldurmak | Planlardan örnek almak ve onları yazmamış biriyle gözden geçirmek; önemli değişiklik işareti oranını mimari değişiklik geçmişiyle karşılaştırmak; güncelliği test sonuçlarına bağlamak |

Sağlıklı bir okuma, çeyrek başına dürüst bir değişkenlikle bir avuç test gösterir: bazıları ilk denemede geçti, bazıları başarısız oldu ve tekrarlandı ve her birinden gelen bulgular birikim listesinde görünür ve belirtilen süre içinde kapanır. Yıllarca süren kusursuz puanlar, tatbikatların ne kadar zor olduğunu sormak için bir nedendir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Sık küçük otomatik geri yükleme testleri | Ucuz, sürekli kanıt; sessiz yedekleme arızasını erken yakalar | Koordinasyonu, insanları ya da tam ölçekli kurtarmayı test etmez |
| Yıllık tam ölçekli yük devretme tatbikatı | Gerçekçi; insanları, tedarikçileri ve bağımlılıkları birlikte sınar | Pahalı ve seyrek; bir düzeltmeden sonra tekrarlaması zor; üretimde çalıştırılırsa risk taşır |
| Masa başı tatbikatları | Düşük maliyet; rollerdeki ve kararlardaki boşlukları bulur; eğitim için iyi | Teknolojinin çalıştığını kanıtlamaz; hiçbir şey öğrenmeden yürütülmesi kolay |
| Yaratılan arızayla üretim tatbikat günleri | En yüksek gerçekçilik; izlemeyi ve çalışma kılavuzlarını oldukları gibi sınar | Olgun güvenceler ve liderlik desteği gerekir; dikkatsiz yürütülürse müşteriye zarar verebilir |
| Kademeli hedefler | Çabayı riskin olduğu yere harcar | Kademe atamaları kayabilir ve bir sahibe ihtiyaç duyar |

Pratik yanıt katmanlı bir programdır: her zaman ucuz otomatik geri yükleme kontrolleri, her kademe-1 hizmeti için sabit bir aralıkla uygulamalı tatbikatlar, daha uzun bir döngüyle daha büyük bir tatbikat ve kararlar ile iletişim için masa başı tatbikatları. Okuyucunun kanıtın ne kadar yeni olduğunu yargılayabilmesi için aralıkları belirtin.

## Takımınızla tartışılacak sorular

**1. En önemli hizmetimizi en son ne zaman geri yükledik ve tam olarak neyi kanıtladık?**
Tarihi, veri boyutunu, senaryoyu ve sonucu isteyin ve bir tahtaya yazın. Kolaylaştırıcı yargılamaya direnmeli ve iddia ile kanıt arasındaki boşluğa odaklanmalıdır. En büyük boşluğu kapatacak bir test üzerinde uzlaşarak bitirin.

**2. RTO ve RPO'muzu kim seçti ve işletme bugün yine seçer miydi?**
Her hedefi bir iş etki analizine ya da bir karara kadar izleyin. Mimarinin hedefi kâğıt üzerinde karşılayıp karşılayamayacağını ve karşılamanın maliyetinin hiç belirtilip belirtilmediğini sorun. En üst hizmetlerin hedeflerini işletmeyle kimin ve ne zamana kadar teyit edeceği konusunda uzlaşın.

**3. Başarısız bir tatbikat bize itibar olarak neye mal olurdu ve bu, tatbikatlarımızın ne kadar zor olduğunu şekillendiriyor mu?**
Bu soru tatbikatları yumuşak kılan baskıyı ortaya çıkarır. Başarısız bir testin ekibin başarısızlığı mı yoksa tatbikatın başarısı mı sayıldığını sorun.

**4. Son tatbikatımızdan hangi bulgular hâlâ açık ve neden?**
Listeyi yaşları ve sahipleriyle yüksek sesle okuyun. Her gecikmiş kalem için neyin engellediğini sorun: rakip iş, belirsiz sahiplik, maliyet ya da riskin kabul edilebilir olduğuna dair bir inanç. Amaç, hiçbir bulgunun sahipsiz bir durumda durmamasıdır.

**5. Planımız artık doğru olmayan neyi varsayıyor?**
Bir plan seçin ve onu yazmamış biriyle okuyun. Emekliye ayrılmış araçları, yeniden adlandırılmış hesapları ve ayrılmış tedarikçileri arayın. Hizmet değiştiğinde planın nasıl güncelleneceğini ve olmadığında kimin fark edeceğini sorun. Yanıtı değişiklik sürecine bağlayın.

**6. Hangi bağımlılık her şeyi durdururdu ve onsuz hiç test ettik mi?**
Kimlik, ad çözümleme, gizli bilgiler ve çağrı sisteminin kendisi gibi ortak hizmetler yaygın tek hata noktalarıdır. Ekipten bunları adlandırmasını ve her birinin en son ne zaman bilerek kullanılamaz olduğunu anlatmasını isteyin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Ürün ekipleri kurtarmayı mümkün kılan tasarımın sahibidir; bu yüzden süreklilikle kritik hizmetler için bitti tanımının bir parçası olarak karşılaşırlar: bir yedekleme yolu, bir geri yükleme prosedürü ve çalışan bir çalışma kılavuzu. Geri yükleme tatbikatlarını kendi ritimlerinin bir parçası olarak yürütmeli, kurtarma kodunu hizmetle birlikte saklamalı ve başarısız bir tatbikatı bir birikim listesi kalemi olarak ele almalıdırlar.

### Hizmet ve operasyon takımları

Operasyon ekipleri tatbikatların çoğunu yürütür ve hazırlanma yükünü taşır. Tatbikat takvimini tutmalı, tatbikat sürerken zaman çizelgelerini kaydetmeli ve bulguları aynı gün yazmalıdırlar. Sonuçlar hizmeti ve planı tanımlar; kimse bir bireyin bir tatbikatı ne kadar çabuk kurtardığına göre sıralanmaz.

### Liderlik ve yönetişim

Liderler hedefleri işletmeyle belirler ve ne kadar kurtarmanın satın almaya değer olduğuna karar verir. Her hedefin yanında son gösterilen sonucu, kanıtın yaşını ve açık bulguları görmeyi istemeli ve temiz bir sicili ödüllendirmekten kaçınmalıdırlar. Yönetişim organları, risk siciline ve uygulandığı yerde düzenlemeye tabi raporlamaya bağlı, küçük ve kararlı bir süreklilik ölçümü kümesi beklemelidir (bkz. Konu 8.2 “Risk ve kontrol metrikleri” ve Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

### Müşteriler ve kullanıcılar

Müşteriler sürekliliği nadiren, önemli olduğu ana kadar görür ve o zaman tamamen sonuca göre değerlendirir: hizmetsiz ne kadar kaldıkları ve verilerinin hayatta kalıp kalmadığı. Neyin vaat edildiğine dair anlayabilecekleri terimlerle net ifadelerden ve bir olay planı devreye soktuğunda dürüst iletişimden yarar sağlarlar. Sözleşmelerin kurtarma taahhütleri içerdiği yerde, istek üzerine tatbikat kanıtını paylaşın (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı bir hasta randevu sistemi, bir tıbbi görüntüleme arşivi ve bir personel mesajlaşma hizmeti işletir. Sekiz kişilik bir ürün ekibi randevuyu sürdürür ve bir operasyon ekibi platformu işletir. Bu örnekteki tüm sayılar açıklayıcıdır.

Departmanın sicili randevuyu 2 saatlik RTO ve 15 dakikalık RPO ile kademe-1 olarak listeler. Üç aylık raporu “RTO karşılama oranı: 4 tatbikatta yüzde 100” ve “test edilmiş kurtarma kapsamı: yüzde 100” gösterir. Yeni bir operasyon başkanı, sayıların arkasındaki tatbikat raporlarını okur. Dört tatbikatın üçü masa başı tatbikatıydı ve tek uygulamalı geri yükleme, üretim verisinin yaklaşık onda birini tutan bir veritabanı kopyasını kullanmıştı. 14 aydır kimse bir yedeği temiz bir ortama geri yüklememişti.

Ekip, neyin ölçüldüğünü ve test edildiğini değiştirmeye karar verir. Test edilmiş kurtarma kapsamını yalnızca uygulamalı testleri sayacak biçimde yeniden tanımlar; bu, rakamı üç kademe-1 hizmeti genelinde yüzde 33'e düşürür. Randevu için, satır sayılarının otomatik doğrulaması ve bir sentetik rezervasyon işlemiyle üretim boyutunda bir geri yükleme planlar. Çalıştırma, 2 saatlik RTO'ya karşı 3 saat 40 dakika sürer ve geri yüklenen veri, 15 dakikalık RPO'ya karşı arıza noktasının 40 dakika gerisindedir; çünkü günlük aktarımı bir geçiş sırasında duraklatılmış ve hiç devam ettirilmemiştir. Tatbikat günü 9 bulgu üretir: 2 yüksek, 5 orta ve 2 düşük ciddiyet.

Günlüğe kaydedilen karar, bu kaçırmayı yılın en değerli sonucu olarak ele almaktır. Ekip, gecikmesi üzerine bir uyarıyla günlük aktarımını devam ettirmek, geri yüklemeyi paralelleştirmek ve bir veri biriminin daha hızlı depolamaya taşınması için iş açar. RTO 2 saatte kalır ve ekip randevu için belgelenmiş bir elle yedek yol ekler. İlk 60 gün için bulgu kapatma oranı 9 bulgudan 7'sinin zamanında kapanmasıdır; diğer ikisi adı belli sahipler tarafından risk olarak kabul edilmiştir.

Burada yakalanan oyunlaştırma riski incelikliydi. Kimse bir sayıyı tahrif etmedi: cömert bir masa başı tatbikatı sayısı ve küçük bir test veri kümesi raporu yeşil yaptı. İşe yarayan korkuluklar, her sonuçla birlikte veri boyutunu ve tatbikat türünü kaydetmek ve arkasındaki tatbikat raporlarını okuma uygulamasıydı. Bir sonraki raporda ekip her tatbikatı, başarısız çalıştırma dahil, kendi satırı olarak gösterir.

## Sektör mercekleri

**Girişim.** Genellikle tek bir üretim ortamı, küçük bir ekip ve yönetilen bir bulut sağlayıcısı vardır. En değerli ölçüm en basit olandır: üretim veritabanını her ay yedekten temiz bir ortama geri yükleyin, zamanlayın ve sonucu doğrulayın. RTO ve RPO'yu bir sayfaya yazın.

**Küçük işletme.** BT çoğu zaman dış kaynaklıdır ya da barındırılan hizmetler üzerinde bir iki kişi tarafından işletilir. Tedarikçiye yazılı olarak hangi kurtarmayı taahhüt ettiğini ve hangi kanıtı gösterebileceğini sorun ve her çeyrek kendi verinizin bir geri yüklemesini test edin. Ana sistemler kapalıyken okunabilecek bir yerde tek sayfalık bir plan tutun.

**Kurumsal.** Çok sayıda hizmet, çok sayıda tedarikçi ve ortak platformlar kademelendirmeyi ve bir bağımlılık haritasını zorunlu kılar. Hedefleri olan merkezi bir hizmet siciline, bir tatbikat takvimine, otomatik geri yükleme doğrulamasına ve sonuçların ekipler arasında karşılaştırılabilmesi için tutarlı raporlamaya yatırım yapın.

**Kamu sektörü.** Süreklilik görevleri yasadan, denetimden ya da politikadan doğabilir ve bir kamu hizmetinin acil durumlar sırasında çalışmaya devam etmesi gerekebilir. Test kanıtı çoğu zaman dışarıdan gözden geçirilir; bu yüzden tatbikat raporlarını, bulguları ve kapatma kayıtlarını bir denetçinin okuyabileceği biçimde tutun. Satın alma, kurtarma düzenlemelerini kilitleyebilir; bu yüzden sözleşmelere tatbikat haklarını ve kanıtı dahil edin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Yatırım nedenleri, işletmenin kaldırabileceğinden uzun süren ağır bir kesintinin maliyeti, yeniden oluşturulamayan verinin kaybı ve hazırlığın kanıtını isteyen müşterilere, düzenleyicilere ve sigortacılara karşı yükümlülüklerdir. Süreklilik çalışması bir sigortadır; bu yüzden getiri, önlenen kayıp ve karar vericilerin güvenidir ve bir rakam uydurmadan bir sayı olarak ifade etmek zordur. Bunu gözlemleyebileceğiniz örüntüler üzerinden tanımlayın: belirtilen ve gösterilen kurtarma süresi arasındaki fark, gerçek olaylarda değil tatbikatlarda bulunan yüksek ciddiyetli bulguların sayısı ve bir müşterinin ya da denetçinin kanıt talebini yanıtlama süresi.

Maliyetler üç gruba ayrılır: hedeflerin talep ettiği yedeklilik ve araçlar, tatbikatları planlama, yürütme ve gözden geçirme için insanların zamanı ve planları ve bağımlılık haritalarını güncel tutma çabası.

Toplam sahip olma maliyetine insanlar ve daha sıkı kademeler egemendir. 24 saatlik bir RTO'dan 2 saatliğe geçmek tasarımı ve faturayı değiştirir; bu yüzden bu takası işletmeyle açık hale getirin. Küçük, sık, otomatik testler, kusurlar düzeltmesi ucuzken ortaya çıktığı için çoğu zaman tek bir büyük yıllık olaydan daha az maliyetlidir.

## Anti-desenler ve tuzaklar

- **Raftaki plan.** Bir belge hazırlık sayılır ve kimse onu denememiştir. Bunun yerine her hedefin yanında son uygulamalı testin tarihini ve sonucunu raporlayın.
- **Yedek başarısı geri yükleme başarısı olarak.** İşler yeşil raporlar verirken veri geri yüklenemez. Bunun yerine geri yüklemeleri düzenli olarak test edin ve bir başarıyı saymadan önce veriyi doğrulayın.
- **Provası yapılmış tiyatro.** Tatbikat senaryolanmıştır ve planın yazarlarınca yürütülür. Bunun yerine sürprizi kademeli olarak ekleyin.
- **Her şey için tek bir hedef.** Şablon öyle dediği için her hizmetin dört saatlik bir RTO'su vardır. Bunun yerine hizmetleri bir iş etki analizinden kademelendirin ve uyan hedefler belirleyin.
- **Hiç kapanmayan bulgular.** Tatbikat raporu boşlukları listeler ve birikim listesi onları hiç görmez. Bunun yerine her bulguya bir sahip ve bir vade tarihi verin ve kapatmayı yeniden testle doğrulayın.
- **Başarısız testi cezalandırmak.** Kaçırılan bir RTO için suçlanan bir ekip zor testleri yürütmeyi bırakır. Bunun yerine, iyi bulgularla başarısız bir tatbikatın iyi bir sonuç olduğu üzerinde baştan uzlaşın ve suçlamadan gözden geçirin.
- **Hızlı değişimden sonra bayat planlar.** Gözden geçirmeyi takvim yönlendirir ve mimari değişiklikler gözden kaçar. Bunun yerine plan gözden geçirmesini önemli değişiklik kayıtlarına bağlayın ve plan güncelliğini onlara karşı ölçün.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Hedefler ve kademeler | RTO ve RPO yazılı değil ya da bir şablondan kopyalanmış | Hedefler bazı temel hizmetler için yazılmış | Kademeler ve hedefler bir iş etki analizinden gelir ve hizmet sicilinde yer alır | Hedefler gösterilen sonuçlara ve mimariye karşı gözden geçirilir | Hedefler işletme ve tedarikçilerle birlikte uzlaşılır ve hizmetler değiştikçe ayarlanır |
| Test ve kanıt | Kurtarma hiç test edilmemiş ya da bir olaydan sonra bir kez test edilmiş | Bazı ekiplerce rastgele geri yükleme testleri; sonuçlar kişisel notlarda tutulur | Kaydedilmiş kapsam, zaman çizelgesi ve sonuçla kademeli test aralıkları | Sonuçlar eğilim olarak izlenir; masa başı tatbikatları, tatbikatlar ve tatbikat günleri ayrı raporlanır | Sürprizli, riskten planlanan ekipler arası ve tedarikçi tatbikatları |
| Bulgular ve öğrenme | Boşluklar gayriresmî olarak fark edilir | Bazı tatbikatlardan sonra bulgular listelenir | Her bulgunun bir sahibi, ciddiyeti ve vade tarihi vardır | Kapatma oranı ve yaş gözden geçirilir, kapatmayı yeniden test doğrular | Bulgular ortak platformları, tedarikçi sözleşmelerini ve tasarım standartlarını besler |
| Plan güncelliği | Planlar bir kez yazılır | Planlar olaylardan sonra güncellenir | Planlar bir gözden geçirme aralığıyla sürüm kontrolündedir | Gözden geçirme önemli değişikliklere bağlıdır ve ölçülür | Planlar ve çalışma kılavuzları kod olarak test edilir ve mümkün olduğunda hizmet tanımından üretilir |

## Kontrol listesi

- [ ] Her kademe-1 hizmetin bir iş etki analizinden gelen yazılı bir RTO'su ve RPO'su vardır.
- [ ] Hizmet sicili her hizmetin kademesini, hedeflerini ve test aralığını gösterir.
- [ ] RTO ve RPO saatleri, sağlık kontrolü ve istisnalar yazılıdır (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).
- [ ] Uygulamalı kurtarma testleri, masa başı tatbikatları ve tatbikat günleri ayrı türler olarak raporlanır.
- [ ] Her kurtarma testi veri boyutunu, senaryoyu, sürpriz düzeyini ve ölçülen geri yükleme süresi ile veri kaybını kaydeder.
- [ ] Yedekten geri yüklemeler otomatik olarak test edilir ve bir veri doğrulama kontrolü başarıya karar verir.
- [ ] Her tatbikat bulgusunun bir sahibi, bir ciddiyeti, bir vade tarihi ve birikim listesinde bir yeri vardır.
- [ ] Plan gözden geçirmesi önemli değişiklik kayıtlarına bağlıdır ve en eski gözden geçirilmemiş plan görünürdür.
- [ ] Bağımlılık haritası ortak hizmetleri içerir ve en az bir senaryo bunlardan birini ortadan kaldırır.
- [ ] Bu konudaki her metriğin metrik sicilinde adı belli bir korkuluğu ve bir sahibi vardır (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).
- [ ] Tatbikat görevi rotasyonla yürür ve aldığı zaman operasyonel yük olarak sayılır.

## Yapay zekâ istemleri

**Bir kurtarma testi ve beraberindeki ölçümleri tasarlayın.**

```text
[tier] kademesinde, belirtilmiş RTO'su [RTO] ve RPO'su [RPO] olan bir hizmet olan
[hizmet adı] hizmetinin kurtarmasını test etmek istiyorum. Ana bileşenleri [liste:
veri depoları, kuyruklar, hesaplama, ortak hizmetler] ve tedarikçileri [liste].
Gerçekçi bir senaryo, saati başlatan olay, onu durduran sağlık kontrolü, veri
kaybının RPO'ya karşı nasıl ölçüleceği, kullanılacak veri boyutu, neyin
kaydedileceği ve üretime zarar vermeyi önleyecek güvencelerle bir test planı
taslağı hazırla. Kıyaslama süreleri uydurma ya da herhangi bir hedefin
ulaşılabilir olduğunu iddia etme. Varsayımlarını ve planı tamamlamak için
yanıtlamam gereken soruları listele.
```

**Tatbikat raporlarını pohpohlayan kanıt açısından gözden geçirin.**

```text
Son [sayı] kurtarma tatbikatımızın özetleri şunlar: [her biri için yapıştırın: tür,
tarih, kapsam, veri boyutu, geri yükleme süresi, veri kaybı, bulgu sayısı].
Hedeflerimiz [kademe başına RTO ve RPO]. Raporlanan sonuçların gerçek kurtarma
yeteneğini olduğundan fazla gösterebileceği yerleri belirle; örneğin küçük veri
kümeleri, senaryolanmış senaryolar, yalnızca masa başı kapsamı ya da gevşek sağlık
kontrolleri. Hangi ek bilginin kaydedileceğini ve her sonuçla hangi korkuluk
metriklerinin eşleştirileceğini öner. Kıyaslama değerleri uydurma ya da
vermediğim gerçekleri varsayma. Varsayımlarını listele.
```

**Tatbikat günü notlarını bulgulara ve birikim listesi kalemlerine dönüştürün.**

```text
[hizmet] üzerindeki bir tatbikat gününün ham notları şunlar: [notları ve zaman
çizelgesini yapıştırın]. Plan ile olanlar arasındaki her boşluğu kısa bir başlık,
bir açıklama, bu ölçeği kullanan önerilen bir ciddiyet [ciddiyet ölçeği], aday
bir sahip rolü (adı belli bir kişi değil) ve düzeltmeyi nasıl
doğrulayabileceğimiz ile ayrı bir bulgu olarak çıkar. Ortak bir kök nedeni
paylaşabilecek bulguları grupla. Notlarda olmayan olaylar uydurma.
Varsayımlarını ve açıklığa kavuşturulması gereken her şeyi listele.
```

**Bir planı yakın tarihli değişikliğe karşı güncellik açısından kontrol edin.**

```text
[hizmet] için en son [tarih] tarihinde gözden geçirilen süreklilik planı şu:
[planı ya da taslağını yapıştırın]. O tarihten bu yana yapılan önemli değişiklikler
şunlar: [mimari, veri depoları, bağımlılıklar, tedarikçiler ve araçlardaki
değişiklikleri listeleyin]. Değişikliklerin yanlış kılmış olabileceği planın
adımlarını, iletişim bilgilerini, araçlarını ve bağımlılıklarını belirle ve bir
gözden geçirenin sorması gereken soruları listele. Sistemlerimiz hakkında
ayrıntılar uydurma. Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir süreklilik, kurtarma ya da tatbikat metriğini tanımlayan konuyu ve onunla eşleştirilecek korkuluğu bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): düzenlenmiş bir süreklilik metriğinin saatlerini, istisnalarını ve oyunlaştırma vektörünü belirttiğini denetlemek için kullanın.

## Temel çıkarımlar

- Bir kurtarma hedefi bir sözdür ve ancak zamanlanmış, gerçekçi bir tatbikat bunun tutulup tutulamayacağını gösterir.
- Her RTO ve RPO'nun yanında son gösterilen sonucu ve yaşını raporlayın ve her tatbikatı kendi satırı olarak gösterin.
- Yedekleri değil, geri yüklemeleri test edin: bir geri yükleme yalnızca veri kullanılabilir olarak doğrulandığında sayılır.
- Bir tatbikatın ürünü kapatılmış bir bulgu listesidir; bu yüzden yaşlarını izleyin ve kapatmayı yeniden testle doğrulayın.
- Planları sürüm kontrolünde tutun ve gözden geçirmelerini yalnızca takvime değil, önemli değişikliğe bağlayın.
- Hizmetleri ve planları ölçün, insanları asla ve iyi bulgularla başarısız bir tatbikatı güvenli ve saygı gören bir sonuç yapın.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
