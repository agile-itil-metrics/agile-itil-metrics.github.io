# Hizmet masası metrikleri

**Hizmet masasını, insanların işlerine ne kadar iyi geri döndüğüne ve kurumun geri kalanına ne kadar şey öğrettiğine göre ölçün. Çağrı sayıları ve telefonda geçen dakikalar, her ikisinin pahasına hızı ve hacmi ödüllendirir.**

## Genel bakış ve motivasyon

Çoğu kullanıcı için hizmet masası hizmetin kendisidir. Mühendislerle nadiren karşılaşırlar, iş hattını görmezler; bir şey ters gittiğinde kim yanıt veriyorsa onunla karşılaşırlar. [Yardım masası](https://en.wikipedia.org/wiki/Help_desk) (help desk), genellikle bilgisayar sorunlarına ilişkin yardım ve bilgi veren departman ya da kişidir. [BT hizmet yönetimi (ITSM)](https://en.wikipedia.org/wiki/IT_service_management) kullanımında hizmet masası, sağlayıcı ile kullanıcıları arasındaki tek iletişim noktasıdır ve hem olayları (bir hizmette plansız aksaklıkları ya da olası aksaklıkları) hem de hizmet taleplerini (hizmetin normalde sağladığı bir şey için rutin talepleri) ele alır. [ITIL](https://en.wikipedia.org/wiki/ITIL) 4'te hizmet masası uygulaması, olay yönetimi ve hizmet talebi yönetiminin yanında yer alır ve sabit bir ölçüm listesiyle değil, amacı ve çıktılarıyla tanımlanır. Bu nedenle bu konu bir çerçeve gereksinimi değil, pratik rehberlik sunar.

Masanın çevresinde gelişen ölçümler büyük ölçüde [çağrı merkezi](https://en.wikipedia.org/wiki/Call_centre) geleneğinden gelir: kaç iletişim geldi, insanlar ne kadar bekledi, kaçı vazgeçti, her iletişim ne kadar sürdü ve kaçı ilk denemede çözüldü. Bu ölçümler yararlı ve ucuzdur; aynı zamanda kitaptaki, hizmete zarar veren hedeflere dönüştürülmesi en kolay ölçümlerdir. Kısa çağrılar, aynı kullanıcı üç kez geri arayana kadar verimli görünür. Düşük terk oranı, temsilciler hızlı yanıt verip hiçbir şeyi çözmediğinde özenli görünür. Bu konunun görevi her ölçümü anlatmak, saatlerini belirtmek ve neyi ödüllendirdiğini, neyi gizlediğini söylemektir.

Çevik bakış ikinci bir amaç ekler. Her iletişim, kullanıcıların neyi kafa karıştırıcı bulduğuna, neyin bozulduğuna ve hizmetin ne yapmasını diledikleri konusunda bir kanıttır. Sık yayın yapan çevik bir takım bu kanıta hızlı ve bir talep düzeyinde değil, bir hizmet düzeyinde ihtiyaç duyar. Bu yüzden masa iki kez ölçülür: insanlara iyi yanıt veren bir operasyon olarak ve birikim listesini besleyen bir sensör olarak. Hacim ikisi arasındaki köprüdür. Artan bir sayı büyümeyi, kötü bir yayını, eksik bir makaleyi ya da yeni bir kanalı gösteriyor olabilir ve metrik tek başına hangisi olduğunu söyleyemez (sayıların kategori ve önceliğe göre nasıl okunacağı için bkz. Konu 3.2 “Olay hacmi ve önceliği”).

Temel terimler: [ilk temasta çözüm](https://en.wikipedia.org/wiki/First_call_resolution) (first-call resolution), ilk iletişimde çözülen iletişimlerin payıdır; [otomatik çağrı dağıtıcısı](https://en.wikipedia.org/wiki/Automatic_call_distributor) (automatic call distributor), gelen çağrıları uygun personele yönlendirir; [hizmet düzeyi anlaşması (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), sağlayıcı ile müşteri arasındaki bir taahhüttür; [yüzdelik dilim](https://en.wikipedia.org/wiki/Percentile) (percentile), gözlemlerin belirli bir payının altında kaldığı değerdir; yani ele alma süresinin 85. yüzdelik dilimi, iletişimlerin yüzde 85'inin içinde tamamlandığı süredir; [müşteri memnuniyeti](https://en.wikipedia.org/wiki/Customer_satisfaction) (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”) ise bir hizmetin kullanıcıların beklentilerini ne kadar karşıladığıdır.

“İletişim” ve “talep kaydı” terimleri aynı şey değildir. İletişim, bir kişinin telefon, sohbet, e-posta, portal, yüz yüze ya da mesajlaşma gibi bir kanal aracılığıyla masaya ulaşma girişimidir. Talep kaydı (ticket, kayıt olarak da adlandırılır), ITSM aracının işi izlemek için oluşturduğu şeydir. Bir talep kaydı birçok iletişimi kapsayabilir ve yerinde yanıtlanan bir parola sıfırlama gibi bazı iletişimler yalnızca kayıt için bir talep kaydı oluşturabilir. İkisini karıştırmak masa raporlamasındaki en yaygın karışıklık kaynağıdır, bu yüzden aşağıdaki tanımlar bunları ayrı sayar.

## Temel ilkeler

- **İletişimleri ve talep kayıtlarını ayrı sayın ve ikisini de tanımlayın.** İletişim, masaya ulaşma girişimidir; talep kaydı bir iş kaydıdır. İkisini karıştıran raporlar mutabakata bağlanamaz.
- **Süreleri dağılım olarak raporlayın.** Yalnızca ortalamayı değil, ortancayı ve 85. ya da 95. gibi yüksek bir yüzdelik dilimi gösterin; çünkü birkaç çok uzun ya da çok kısa iletişim ortalamayı çarpıtır.
- **Her hız ölçümünü bir sonuç ölçümüyle eşleştirin.** Yanıtlama hızı, terk ve ele alma süresi çabayı anlatır. Çözüm ve yeniden iletişim ise kullanıcıya yardım edilip edilmediğini anlatır.
- **Hacmi kullanıma göre normalleştirin.** Kullanıcı tabanı büyüdüğü için artan bir sayı, kullanıcı başına artan bir sayıdan farklı bir hikâyedir.
- **Kanalları ve hizmetleri ölçün, kişileri değil.** Bu metrikler bir masayı, bir kuyruğu, bir hizmeti ve bir kanalı tanımlar. Bireysel temsilcileri sıralamak ya da disipline etmek için asla kullanılmaz.
- **Masayı bir sensör olarak görün.** Her metrik, teslimat takımlarına yukarı akışta neyin düzeltileceği, belgeleneceği ya da otomatikleştirileceği konusunda bir soruya yol açmalıdır.

## Metrik tanımları

Tablo, çoğu hizmet masasının telefon altyapısından ve ITSM aracından toplayabileceği yedi ölçümü listeler. Eşikleri ve hedefleri her masa kendisi belirler ve yazıya döker; bu konu hiçbir kıyaslama değeri vermez.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| İletişim hacmi | Masaya ulaşan iletişimlerin sayısı, kanala ve döneme göre | Dönemde oluşturulan iletişim sayısı, kanala göre; dahili test iletişimleri, yinelenen e-posta otomatik yanıtları ve masanın yaptığı giden aramalar hariç tutulur | sayı | Telefon ya da sohbet platformu günlüğü; ITSM aracı iletişim kayıtları | Hizmet masası | Birikim listesi iyileştirmesinde talep sinyali | Haftalık |
| İletişim oranı | Büyüme bir sorun sanılmasın diye, iletişimlerin hizmet verilen nüfusun büyüklüğüne oranı | Dönemdeki iletişim sayısı / dönemdeki etkin kullanıcı ya da hesap sayısı, 100 kullanıcıya ölçeklenmiş; kullanıcı sayısı aynı dönemden alınır ve “etkin” tanımı yazılıdır | 100 kullanıcı başına iletişim | İletişim kayıtları ve kimlik ya da lisans sistemi | Hizmet masası; hizmet düzeyi yönetimi | Ürün değerlendirmesinde kullanıma göre düzeltilmiş talep | Aylık |
| Yanıtlama süresi | İletişimin kuyruğa girdiği andan bir kişinin ya da otomatik bir yanıt motorunun devreye girdiği ana kadar geçen bekleme | Saat, iletişim kuyruğa alındığında başlar ve ilk insan yanıtında durur; terk edilen iletişimler bu ölçümün dışında tutulur ve terk oranında sayılır; ortanca ve 85. yüzdelik dilim raporlanır | saniye (telefon, sohbet); dakika ya da saat (e-posta, portal) | Telefon platformu; sohbet platformu; ITSM aracı zaman damgaları | Hizmet masası | Duyarlılık çalışma anlaşması | Gözden geçirme pencerelerinde günlük, eğilimde haftalık |
| Terk oranı | Kullanıcı tarafından, kimse devreye girmeden sonlandırılan iletişimlerin payı | İlk insan yanıtından önce kullanıcı tarafından sonlandırılan iletişimler / kuyruğa alınan iletişimler; kısa bir hoşgörü süresi (tanımda belirtilir, örneğin beş saniye) içinde sonlandırılan iletişimler kazara sayılıp hariç tutulur | yüzde | Telefon platformu; sohbet platformu | Hizmet masası | Hizmet değerlendirmesinde gecikme maliyeti sinyali | Haftalık |
| Ele alma süresi | Masanın bir iletişime harcadığı süre | Saat, bir kişi devreye girdiğinde başlar ve iletişimi bitirdiğinde durur; iletişim sonrası belgeleme çalışması dahildir; kullanıcıyı beklemek yalnızca tanım öyle diyorsa dahildir; ortanca ve 85. yüzdelik dilim, iletişim türüne göre bölünerek raporlanır | dakika | Telefon platformu; sohbet platformu; ITSM aracı iş günlüğü | Hizmet masası; olay yönetimi | İyileştirmede ve kapasite planlamasında efor sinyali | Haftalık |
| İlk temasta çözüm oranı | İlk temasta çözülen ve aynı konuda sonradan başka iletişim olmayan iletişimlerin payı | İletişim sırasında çözülen ve yeniden iletişim penceresi içinde aynı kullanıcı tarafından aynı sorunda yeniden iletişimle izlenmeyen iletişimler / uygun iletişimler; yalnızca yönlendirme gereken çağrılar ve masanın çözmesi beklenmeyen çağrılar hariç tutulur | yüzde | ITSM aracı çözüm ve bağlantı alanları; toplandığında kullanıcı onayı | Hizmet masası; olay yönetimi | Tamamlanma tanımı kontrolü, ilk dokunuşta çözüldü | Aylık |
| Yeniden iletişim oranı | Çözülmüş iletişimlerden sonra aynı konuda yeni bir iletişimin izlediği iletişimlerin payı | Yeniden iletişim penceresi içinde (örneğin tanımda belirlenen yedi gün) aynı kullanıcıdan aynı hizmet ya da sorun hakkında başka bir iletişimin izlediği iletişimler / önceki dönemde çözülen iletişimler; yeni bir sorun hakkındaki iletişimler hariç tutulur | yüzde | ITSM aracı bağlantı ve yeniden açma geçmişi; iletişim kayıtları | Hizmet masası; olay yönetimi | Kaçan hata oranı | Aylık |

İlk temasta çözümün savunulabilir birden fazla tanımı vardır, bu yüzden tanım metriğin bir parçasıdır. Bazı masalar, temsilci görüşme sırasında talep kaydını kapattığında bir iletişimi çözülmüş sayar. Diğerleri yalnızca kullanıcı bir pencere içinde geri dönmediğinde sayar. İkincisini toplamak daha zordur, manipüle etmek de daha zordur ve burada kullanılan odur. Pencereyi belirtin, “aynı konu”nun ne sayıldığını belirtin ve ikisini de her dönemde aynı şekilde uygulayın.

## Öneriler

### İletişimleri baştan talep kayıtlarından ayırın

**İletişimlere ve talep kayıtlarına kendi tanımlarını, tanımlayıcılarını ve sayılarını verin.** İletişim, masaya ulaşma girişiminin kaydıdır; talep kaydı ise bir iş kaydıdır. Aynı konudaki bir yeniden iletişimin görünür olması için bunları araçta birbirine bağlayın. İkisini karıştıran raporlar, telefon platformuyla mutabakata bağlanamayan bir hacim rakamı verir.

### Hacmi kanala, kategoriye ve normalleştirilmiş orana göre raporlayın

**Toplam hacmi, kanala göre hacmi, kategoriye göre hacmi ve 100 kullanıcı başına iletişim oranını gösterin.** Yalnızca toplamlar büyümeyi sorunla karıştırır. Telefon hacmindeki bir düşüş sohbete geçiş olabilir, portal iletişimlerindeki bir artış ise self servisin bilinçli bir başarısı olabilir. Dönem başları ve mali yıl sonları gibi mevsimselliğin görünmesi için seriyi en az bir yıl boyunca çizin.

### Her süre ölçümü için dağılımları kullanın

**Yanıtlama süresi ve ele alma süresi için ortancayı ve yüksek bir yüzdelik dilimi raporlayın.** Çarpık bir dağılımın ortalaması neredeyse hiç kimsenin deneyimini anlatmaz. Ortanca tipik iletişimi, 85. ya da 95. yüzdelik dilim ise yavaş kuyruğun ne kadar kötü olduğunu gösterir. Rakamın kaç iletişime dayandığını söyleyin ve bir kuyruk dönemde yalnızca bir avuç iletişim ele aldığında okumayı güvenilmez olarak işaretleyin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

### Terki talep ve personel planlaması sinyali olarak ele alın

**Terki, yanıtlama süresi ve geliş örüntüleriyle birlikte okuyun.** İnsanlar bekleme beklediklerinden uzun olduğunda vazgeçer; bu yüzden oran bekleme ile birlikte yükselir ve gelişler kapasiteyi aştığında bekleme yükselir. [Kuyruk kuramı](https://en.wikipedia.org/wiki/Queueing_theory), bir kuyruk tam kullanıma yaklaştıkça bekleme süresinin neden keskin biçimde arttığını açıklar; yüzde 100'e yakın doluluğa göre işletilen bir masada bekleme hep uzun, terk hep yüksektir. Personeli aylık ortalamaya göre değil, saat ve güne göre geliş örüntülerine göre planlayın ve terki günün saatine göre gösterin (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”).

### İlk temasta çözümü dikkatle tanımlayın, sonra kullanıcı tarafından ölçün

**Yeniden iletişime dayalı bir tanım kullanın ve bunu kullanıcılara sorulan kısa bir soruyla doğrulayın.** Yalnızca belirtilen pencere içinde geri dönmeyen iletişimleri saymak, kapanışta temsilcinin koyduğu bir bayraktan daha zor şişirilir. “Sorununuz çözüldü mü?” gibi tek soruluk bir kontrol ekleyin ve bunu yeniden iletişim rakamıyla karşılaştırın. İkisi uyuşmadığında kullanıcının yanıtı daha iyi bir rehberdir ve aradaki fark kapanışın nerede erken yapıldığını gösterir.

### Ele alma süresini planlama için kullanın, hedef için değil

**Ele alma süresini bir kapasite girdisi ve bir tanı aracı olarak görün ve temsilcilerin aşması gereken bir hedef belirlemeyin.** Ele alma süresine konan hedef, acele etmeyi, erken devirleri ve yetersiz belgelemeyi ödüllendirir. İletişim türüne göre dağılımı, personel planlaması için ve benzerlerinden çok daha uzun süren iletişimleri bulmak için kullanın; bunlar çoğu zaman eksik bir makaleye, hantal bir araca ya da belirsiz bir sürece işaret eder. Temsilcileri değil, sistem nedenlerini hedefleyin.

### Masa metriklerini teslimat işine bağlayın

**En çok iletişim üreten kategorileri, hizmetlerin sahibi takımlarla birlikte gözden geçirin.** Her ay, 100 kullanıcı başına en çok iletişim üreten beş kategoriyi alın ve yukarı akışta hangi değişikliğin bunları ortadan kaldıracağını sorun: bir düzeltme, bir makale, daha iyi bir hata iletisi ya da bir self servis yolu. Yanıtları sahip takımın birikim listesine kaydedin. Bu, masanın sayılarını iyileştirme işine dönüştürür ve verinin en net çevik kullanımıdır (bkz. Konu 3.6 “Bilgi yönetimi metrikleri” ve Konu 3.7 “Self servis ve otomasyon metrikleri”).

### Her kanalı aynı tanımlara dahil edin

**Telefon, sohbet, e-posta, portal, yüz yüze ve mesajlaşma için aynı saat ve sayım kurallarını uygulayın.** Eşzamansız kanalların canlı bir kuyruğu yoktur, bu yüzden yanıtlama süresi her birinde farklı bir anlam taşır. Saati kanal başına tanımlayın ve birleştirmeden önce her birini ayrı raporlayın. Yalnızca en iyi kanalını yayımlayan bir masa, diğer herkesin deneyimini gizler.

### Metrikleri kullanıcının deneyimine bağlayın

**Operasyonel ölçümleri, iletişim sonrası bir memnuniyet sorusu ve serbest metinli bir istemle eşleştirin.** Kaba ya da yardımcı olmayan bir iletişime hızlı yanıt verilmesi kötü bir sonuçtur ve saatler bunu göremez. Yanıt oranını ve yanıt verenlerin dağılımını puanın yanında gösterin; çünkü kullanıcıların yalnızca kendiliğinden seçilmiş bir kısmı yanıt verir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”). Yorumları, iletişimlere yanıt veren kişilerle birlikte, bir takım ortamında okuyun.

### Metrikleri takım ve kuyruk düzeyinde tutun

**Kuyruğa, kanala, hizmete ve takıma göre raporlayın; temsilci düzeyindeki veriyi temsilcinin katıldığı koçluk görüşmeleri için saklayın.** Bireysel temsilcileri ele alma süresine ya da çözüm oranına göre sıralamak, kolay iletişimlerin seçilmesini ve zor olanlardan kaçınılmasını teşvik eder. Ayrıca veriye duyulan güveni zedeler ve kullanıcılar sonucu yardımın kalitesinde hisseder. Sistemin neye ihtiyaç duyduğunu sormak için takım düzeyindeki sayıları kullanın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruma metriği ya da uygulaması |
| --- | --- | --- |
| İletişim hacmi | Temsilciler, kullanıcıları sayılmayan kanallara yönlendirerek kaydı caydırır ya da bir kuyruğun meşgul görünmesi için tek iletişimi birkaça böler; yöneticiler daha düşük bir hacmi hedefler | 100 kullanıcı başına iletişim oranı ve telefon sayılarının talep kaydı sayılarıyla düzenli mutabakatı; her kanalın sayıldığına dair sabit bir kural |
| İletişim oranı | Payda sonradan seçilir (örneğin “etkin”in geniş bir tanımı), böylece oran daha iyi görünür | “Etkin kullanıcılar”ın yazılı ve tarihli bir tanımı ve ham sayıların oranın yanında gösterilmesi |
| Yanıtlama süresi | İletişimler otomatik bir karşılama mesajıyla ya da sessiz bir kuyruğa devirle yanıtlanır ya da çağrı açılıp beklemeye alınır; e-postaya yanıt sayılan otomatik bir yanıt verilir | Saati ilk insan yanıtı olarak tanımlayın ve yanında terki ve yeniden iletişimi izleyin |
| Terk oranı | Arayanlar kuyruğa alınmadan düşürülür, hoşgörü süresi uzatılır ya da geri arama teklifi yanıtlanmış iletişim olarak sayılır | Yanıtlama süresi yüzdelik dilimleri, geri arama tamamlama oranı ve yayımlanmış bir hoşgörü süresi |
| Ele alma süresi | Çağrılar aceleye getirilir, erken devredilir ya da sorun çözülmeden sonlandırılır; notlar yetersiz bırakılır; iş, saatin dışarıda bıraktığı iletişim sonrası zamana kaydırılır | İlk temasta çözüm, yeniden iletişim oranı ve belgeleme kalitesinin takım tarafından örneklemeyle gözden geçirilmesi |
| İlk temasta çözüm oranı | Talep kayıtları sonuca bakılmaksızın görüşme sırasında kapatılır, “aynı konu” dar okunur ya da zor iletişimler “çözülmesi beklenmeyen” olarak sınıflandırılır | Yeniden iletişim oranı, tek soruluk bir kullanıcı onayı ve hariç tutmaların takım tarafından düzenli denetimi |
| Yeniden iletişim oranı | Kullanıcılardan takip için yeni bir talep kaydı açmaları istenir ya da takipler bağlanmasın diye farklı bir kategori altında kaydedilir | Araçtaki bağlantı kuralları, bağlanmamış tekrar iletişimlerin örneklemeyle denetimi ve kullanıcının bildirdiği çözüm |

Sağlıklı bir okuma, birbirleriyle uyumlu rakamlar kümesidir. Yanıtlama süresi ve terk birlikte hareket eder, ele alma süresi günün hedefine göre değil iletişim türüne göre değişir, ilk temasta çözüm ve yeniden iletişim tavanlarına yakın bir toplam veren ayna görüntüleridir ve kullanıcının “Sorununuz çözüldü mü?” sorusuna yanıtı yeniden iletişim rakamıyla örtüşür. Diğerleri yerinde saylarken keskin biçimde iyileşen tek bir rakam, kutlamadan önce nasıl toplandığına bakmak için bir nedendir. Manipüle edilen bir masa belirtilerini genellikle yeniden iletişimde, hacimdeki tekrarlayan kategorilerde ve artan şikâyetlerde gösterir.

## Ödünleşimler: artılar ve eksiler

| Seçim | Avantaj | Maliyet ya da risk |
| --- | --- | --- |
| Manşet olarak ortalama ele alma süresi | Basit, her platformda mevcut, açıklaması kolay | Acele etmeyi ödüllendirir, kuyruğu gizler ve çözüme zarar veren hedefleri davet eder |
| Süreler için ortanca ve 85. yüzdelik dilim | Tipik durumu ve yavaş kuyruğu anlatır | Kararlı olması için yeterli iletişim sayısı ve biraz daha fazla açıklama gerektirir |
| Temsilcinin kapanış bayrağına göre ilk temasta çözüm | Toplaması kolay | Şişirmesi kolay, masalar arasında karşılaştırması zor |
| Yeniden iletişim penceresine göre ilk temasta çözüm | Manipüle etmesi zor ve kullanıcının deneyimine daha yakın | Araçta iyi bağlantı gerektirir ve raporlanabilmesi için pencerenin geçmesini bekler |
| Hoşgörü süreli terk | Kazara kapatmaları ayıklar | Hoşgörü süresi rakamı güzel göstermek için uzatılabilir |
| 100 kullanıcı başına iletişim oranı | Büyümeyi sorundan ayırır | Güvenilir bir kullanıcı sayısına ve “etkin”in açık bir tanımına bağlıdır |
| İletişim sonrası anket | Saatlerin yakalayamadığını yakalar | Düşük ve dengesiz yanıt oranları ve güçlü duyguları olan kullanıcılara yönelik yanlılık |
| Yalnızca takım ve kuyruk bazında raporlama | Güveni korur ve sisteme odaklanır | Bireysel koçluk için daha az ayrıntı verir; bunun için farklı, özel bir süreç gerekir |

Hiçbir ölçüm kümesi hız ile özen arasındaki gerilimi ortadan kaldırmaz. Her iletişime saniyeler içinde yanıt verip az şey çözen bir masanın kuyruğu iyi, hizmeti kötüdür; düzgün çözmek için zaman alan bir masa ise daha uzun ele alma süreleri ve bekleme gösterecektir. Çıkış yolu, bu çeyrekte hangi sonucun en önemli olduğu üzerinde anlaşmak, takası açık hale getirmek ve onu dengede tutan metrik çiftini gözden geçirmektir. Daha hızlı olmak, yalnızca çözüm korunduğu sürece daha iyidir.

## Takımınızla tartışılacak sorular

**1. Burada “iletişim” ne demek ve sayımız, telefon platformunun ve ITSM aracının ayrı ayrı bildirdikleriyle örtüşüyor mu?**
Gruptan, bir günlük iletişimi her kanal üzerinden izlemesini ve iki sistemin sayılarını karşılaştırmasını isteyin. Hiç talep kaydına dönüşmeyen iletişimleri ve hiç iletişim olarak başlamayan talep kayıtlarını not edin. Bir kolaylaştırıcı başlangıçta bir fark beklemeli ve bunu insanlardaki bir hata olarak değil, tanımlarla ilgili bir bulgu olarak ele almalıdır. Bir sonraki rapor için bir kural ve bunun sahibi üzerinde anlaşın.

**2. Bir iletişimin ilk temasta çözüldüğünü söylediğimizde, kullanıcının buna katılacağını nereden biliyoruz?**
İlk temasta çözüm olarak işaretlenmiş on yakın tarihli iletişimi gözden geçirin ve kullanıcılardan herhangi birinin aynı konuda geri dönüp dönmediğini kontrol edin. Geri dönenlerde temsilcinin neyi farklı yapabileceğini sorun. Tartışma genellikle kapanışın kullanıcı hazır olmadan nerede gerçekleştiğini gösterir. Tek soruluk bir onay eklenip eklenmeyeceğine ve yeniden iletişim penceresinin ne olması gerektiğine karar verin.

**3. Beklemedeki kişiye ne olur ve ne zaman vazgeçer?**
Beklenen süreye göre terk eğrisine bakın. Çoğu masa, ötesinde insanların büyük sayılarda ayrıldığı bir nokta bulur ve bu nokta kuyruğun pratik sınırıdır. Hangi geri arama, sohbet ya da otomatik yanıtların sunulduğunu ve bunlardan herhangi birinin sorun çözülmediğinde yanıtlanmış sayılıp sayılmadığını sorun. Kolaylaştırıcı bunu, personel planlamasının aya göre değil, saate göre yapılması konusunda bir tartışma açmak için kullanabilir.

**4. İletişim sonrası işe ve beklemeye dikkat etseydik, ele alma süresi rakamlarımızdan hangisi değişirdi?**
Saatin neyi içerdiğini ve neyi dışarıda bıraktığını listeleyin. Çağrıları kısaltma baskısı hisseden olup olmadığını ve ne yaptıklarını sorun. Bu soruyu bir raporda yanıtlamak yerine bir takım içinde yanıtlamak daha kolaydır, bu yüzden insanlara kimliklerini belirtmeden konuşma fırsatı verin. Bir tanım üzerinde ve ele alma süresinin yalnızca planlama için kullanılıp kullanılmayacağı üzerinde anlaşın.

**5. Geçen çeyrekte 100 kullanıcı başına en çok iletişim üreten beş kategori hangileriydi ve her birinin düzeltmesi kimin sorumluluğunda?**
Kategori verisini ve altta yatan hizmetlerin sahiplerini aynı masaya getirin. Her kategori için en iyi yanıtın bir düzeltme, bir makale, daha iyi bir ileti ya da bir self servis yolu olup olmadığını sorun. Amaç, birikim listesine girmiş maddelerle ve adı konmuş sahiplerle ayrılmaktır. Hangilerinin ilerlediğini görmek için listeye bir sonraki çeyrekte yeniden bakın.

**6. Bunu takım ve kuyruk düzeyinde mi raporluyoruz ve herhangi biri bireyleri karşılaştırmak için kullanıyor mu?**
Gruba doğrudan, bu rakamlardan herhangi birinin bir kişiyi yargılamak için kullanılıp kullanılmadığını ve bunun ne etkisi olduğunu sorun. Bireysel karşılaştırma sona erse masanın neyi yapmayı bırakacağını ve neyi yapmaya başlayacağını tartışın. Kolaylaştırıcı örnekleri kaydetmeli ve politika kararı için metrik sahibine götürmelidir. Amaç, verinin sistemi anlattığına dair yazılı bir taahhüttür.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları kendi hizmetlerinin en iyi görünümünü masadan alır. Bir yayından sonra 100 kullanıcı başına iletişim sayısı, bir değişikliğin insanları şaşırtıp şaşırtmadığını hızla gösterir ve kategoriler sırada neyin düzeltileceğini gösterir. Takımlar, en çok iletişim üreten kategorilerin aylık bir gözden geçirmesini beklemeli ve bunları birikim listesi girdisi olarak ele almalıdır; kullanıcıların söylediklerini bildirdiği için masaya hiçbir suçlama yüklenmemelidir. Masadan yalnızca sayıları değil, iletişim örneklerini de isteyin, çünkü kullanıcıların kullandığı sözcükler çoğu zaman bir etiketleme ya da tasarım sorununu ortaya çıkarır.

### Hizmet ve operasyon takımları

Masa personeli ve liderleri, hedefe dönüşmeden planlamalarına ve iyileştirmelerine yardımcı olan rakamlara ihtiyaç duyar. Geliş örüntülerinden saate göre personel planlaması, yeniden iletişim gözden geçirmeleri ve makale talepleri en yararlı çıktılardır. Personelin, metriklerin nasıl tanımlanacağı konusunda söz hakkı olmalıdır, çünkü saatlerin nerede yanılttığını bilirler. Önce kendi takımlarının rakamlarını görmeli ve bunlara itiraz edebilmelidirler.

### Liderlik ve yönetişim

Liderler birbiriyle uyumlu kısa bir rakam kümesine ihtiyaç duyar: hacim ve iletişim oranı, yanıtlama süresi ve terk, ilk temasta çözüm ve yeniden iletişim ve yanıt oranıyla birlikte bir kullanıcı memnuniyeti puanı. Dağılımları ve tanım değişikliklerine ilişkin notları istemeli, ele alma süresi ya da hacim üzerinde tek bir hedef belirlemeye direnmelidirler. Yalnızca hıza konan hedefler yukarıda anlatılan manipülasyonu davet eder. Yönetişim, her tanımın sahibini kaydetmelidir (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

### Müşteriler ve kullanıcılar

Kullanıcılar bağlanıp bağlanamadıklarına, iyi muamele görüp görmediklerine ve sorunun düzeltilmiş kalıp kalmadığına bakar. Ele alma süresi umurlarında değildir. Onlara masanın neyi ölçtüğünü anlatmak ve geri bildirimlerine göre harekete geçmek güven oluşturur; tercih ettikleri kanalların ölçüldüğünden ve personelle desteklendiğinden emin olmak da öyle. Hizmeti satın alan müşterilere, bir SLA'daki ya da bir deneyim anlaşmasındaki net taahhütler hizmet eder (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri” ve Konu 6.2 “Deneyim düzeyi anlaşmaları”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı, yaklaşık 4.000 klinik ve idari kullanıcı için yaklaşık bir düzine personelden oluşan bir hizmet masası işletir. Aşağıdaki sayılar örnek niteliğindedir ve gerçek bir kurumdan gelmez.

Takımın haftalık görünümü 1.900 iletişim (örnek) gösterir; bu, 100 kullanıcı başına 47,5 iletişimlik (örnek) bir iletişim oranıdır. Telefon yanıtlama süresinin ortancası 40 saniye, 85. yüzdelik dilimi 6 dakikadır (örnek). Terk yüzde 14'tür (örnek) ve hafta içi sabahları 08:00 ile 09:30 arasında keskin biçimde yükselir. Ortanca ele alma süresi 7 dakikadır ve 85. yüzdelik dilim 22 dakikadır (örnek). Yeniden iletişim penceresine göre ilk temasta çözüm yüzde 61 (örnek) ve yedi günlük yeniden iletişim oranı yüzde 19'dur (örnek).

Aylık gözden geçirmede masa lideri ve klinik uygulamalar takımı kategorilere bakar. Giriş ve rozet sorunları sabah iletişimlerinin büyük bir bölümünü oluşturur ve klinik uygulamanın oturum açma ekranında yakın zamanda yapılan bir değişiklik, aynı hata iletisi hakkındaki iletişimlerde bir sıçrama üretmiştir. Masa ve uygulamalar takımı üç şey yapmaya karar verir. Hata iletisini değiştirecek ve makaleye bir bağlantı ekleyecekler, sabah yoğunluğu için bir geri arama seçeneği ekleyecekler ve 08:00 geliş örüntüsünü karşılamak için bir vardiyanın başlangıcını bir saat öne alacaklar. Dört hafta sonra o kategori için terki, yeniden iletişimi ve iletişim oranını gözden geçirecekler.

Çeyreğin ortasında bir yönetici, kuyruğu azaltmak için 5 dakikalık bir ele alma süresi hedefi önerir. Takım, 85. yüzdelik dilimdeki iletişimlerin en çok önem taşıyan yavaş iletişimler olduğunu ve bir hedefin temsilcileri çağrıları erken bitirmeye iteceğini gösterir. Ayrıca ilk temasta çözüm rakamının bir haftada yüzde 78'e (örnek) yükseldiğini, yeniden iletişim oranının ise yüzde 27'ye (örnek) çıktığını fark ederler. Bir gözden geçirme, birkaç vardiyanın, kullanıcıya geri araması için bir not bırakarak talep kayıtlarını görüşme sırasında kapatmaya başladığını ortaya koyar; bu da ilk temasta çözüm olarak sayılmıştır. Takım yeniden iletişime dayalı tanımı geri getirir, kullanıcı onay sorusunu ekler ve ele alma süresi hedefini bırakır. O günden sonra terk, yanıtlama süresi ve yeniden iletişim birlikte raporlanır.

## Sektör mercekleri

**Girişim.** Masa çoğu zaman ortak bir gelen kutusu ya da kim boştaysa onun ilgilendiği bir sohbet kanalıdır. İletişimleri kanala göre sayın, kategoriyi etiketleyin ve ürünü geliştiren insanlarla birlikte her ay ilk beş kategoriye bakın. Hacim haklı çıkarmadan önce bir çağrı merkezi platformu satın almayın ve tüm iletişimlere iki kişi yanıt verirken hız için hedefler koymayın.

**Küçük işletme.** Barındırılan bir hizmet masasını genellikle bir kişi ya da dış kaynaklı bir sağlayıcı işletir. Aracın standart raporlarını kullanın, tedarikçiden iletişim, çözüm ve terk tanımlarını yazılı olarak isteyin ve zaman zaman ham veriyi dışa aktarın. Kullanıcılara sorulan kısa ve yinelenen bir soru, örneğin “sorununuz çözüldü mü?”, uzun bir panodan daha fazla içgörü verir.

**Büyük kurum.** Birçok kuyruk, dil, araç ve tedarikçi aynı sözcüğün farklı tanımlarına yol açar. İletişim, ilk temasta çözüm ve yeniden iletişim için ortak bir tanım ve ortak bir kanal kümesi üzerinde anlaşın. Kuyruğa ve hizmete göre raporlayın, liderlik için standart bir görünüm sunun ve personeli geliş örüntülerine göre planlamak için iş gücü yönetimi verilerini kullanın. Kuyrukları yalnızca aynı tanımları kullandıklarını kontrol ettikten sonra karşılaştırın.

**Devlet ve kamu sektörü.** Kayıtların saklama, erişim, denetim ve gizlilik yükümlülükleri olabilir ve bir sözleşme, dış kaynaklı bir masa için metrikleri ve hedefleri sabitleyebilir. Sözleşme metriklerini eleştirel okuyun ve gerekli olmasalar bile koruma ölçümlerini raporlamaya ekleyin. Tanım değişikliklerinin denetim izini tutun ve gerekmeyen kişisel verileri toplamaktan kaçının. Kamu hizmetleri çoğu zaman kanal seçimi sınırlı kullanıcılara hizmet eder; bu yüzden her kanalın erişilebilirliği resmin bir parçasıdır (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Daha iyi masa metriklerinin motivasyonu daha ucuz ve daha iyi bir hizmettir ve getiri üç yerde ortaya çıkar. Birincisi, daha az tekrar iletişim: her yeniden iletişim, masanın yapması gerekmeyen bir iş ve kullanıcının harcamak istemediği bir zamandır. İkincisi, yukarı akış düzeltmeleri: teslimat takımları harekete geçtiğinde masanın kategori verisi tüm iletişim sınıflarını ortadan kaldırabilir. Üçüncüsü, daha iyi personel planlaması: geliş örüntüsü verisi yöneticilerin insanları kullanıcıların onlara ihtiyaç duyduğu yere yerleştirmesini sağlar ve bu, terki ve boşta kalan zamanı aynı anda azaltır.

Telefon platformu ve ITSM aracı olayları zaten kaydediyorsa toplama maliyeti mütevazıdır. Başlıca maliyetler; tanımlar üzerinde anlaşmak, iletişimler ile talep kayıtları arasındaki bağlantıyı düzeltmek, kısa bir iletişim sonrası soru eklemek ve veriyi teslimat takımlarıyla gözden geçirmek için harcanan zamandır.

Burada bir getiri rakamı sunulmaz, çünkü yayımlanmış rakamlar kuruma ve yönteme göre değişir ve hiçbiri bu konu için doğrulanmamıştır. Getiriyi kendi verilerinizden tahmin edin. Yeniden iletişim sayısını ve ölçülmüş bir ele alma süresini alın, bir temsilci saatinin maliyetiyle çarpın ve bunu düzeltmenin maliyetiyle karşılaştırın. Sonucu varsayımlarıyla birlikte bir tahmin olarak tanımlayın ve değişiklikten sonra yeniden gözden geçirin (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Ortalama ele alma süresini hedeflemek.** Acele etmeyi ve erken devirleri ödüllendirir. Planlama için iletişim türüne göre dağılımı kullanın ve bunu ilk temasta çözüm ve yeniden iletişimle eşleştirin.
- **Temsilcinin koyduğu bir kapanış bayrağını ilk temasta çözüm olarak saymak.** Sonuçtan bağımsız olarak koyulabilir. Bir yeniden iletişim penceresi ve bir kullanıcı onayı kullanın.
- **Bireysel temsilcileri sıralamak.** Kolayları seçmeyi ve savunmacı davranışı teşvik eder. Takıma ve kuyruğa göre raporlayın, bireysel görüşmeleri özel ve destekleyici tutun.
- **En zayıf kanalı gizleyen, tüm kanalların ortalamasını raporlamak.** Telefon, sohbet ve e-posta farklı davranır. Birleştirmeden önce her kanalı ayrı raporlayın.
- **Hacmi paydasız okumak.** Bir artış büyüme olabilir. 100 kullanıcı başına iletişimi ve kategori karışımını gösterin.
- **Masayı teslimat kararlarının dışında bırakmak.** Bir panoya raporlanıp ürün takımıyla hiç tartışılmayan sayılar boşa gider. En çok iletişim üreten kategorilerin sahipleriyle aylık bir gözden geçirmesini yapın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve saatler | Herkes iletişimleri farklı sayar | Bazı kuyruklar için birkaç tanım yazılmıştır | Saatin başlangıcı ve bitişi ile hariç tutmalar dahil, metrik başına bir yazılı tanım | Tanım değişiklikleri kaydedilir ve düzenli aralıklarla gözden geçirilir | Tanımlar tedarikçiler ve müşterilerle paylaşılır ve kararlara bilgi vermeyi bıraktıklarında yeniden gözden geçirilir |
| Veri yakalama ve kalitesi | Sayılar dışa aktarımlardan elle derlenir | Telefon ve ITSM verileri ayrı raporlanır | İletişimler ve talep kayıtları bağlıdır, kanallar arasında otomatik yakalama vardır | Bağlantı, bütünlük ve mutabakat ölçülür ve eğilimi izlenir | İletişim verisi, üzerinde anlaşılmış arayüzler aracılığıyla takımlar ve tedarikçiler arasında paylaşılır |
| İyileştirmede kullanım | Sayılar raporlanır ama nadiren tartışılır | Yoğun dönemlerin ara sıra gözden geçirilmesi | En çok iletişim üreten kategorilerin hizmet sahipleriyle aylık gözden geçirilmesi | İyileştirmeler planlanır, finanse edilir ve yeniden iletişim ve hacme karşı kontrol edilir | Masa verisi, ürün takımları ve tedarikçiler genelinde birikim listesi önceliklerini yönlendirir |
| Koruma önlemleri ve güven | Bireylere hız hedefleri uygulanır | Manipülasyona dair bir miktar farkındalık | Eşleştirilmiş ölçümler birlikte raporlanır ve bireyler sıralanmaz | Manipülasyon kontrolleri takım tarafından denetlenir ve kullanıcı onayı kullanımdadır | Kullanıcılar ve personel ölçümlerin belirlenmesine yardım eder ve sonuçları görür |

## Kontrol listesi

- [ ] İletişimler ve talep kayıtları ayrı tanımlanıp sayılıyor ve sayılar mutabakata bağlanıyor.
- [ ] Her kanalın yanıtlama süresi için yazılı bir saati ve otomatik yanıtların nasıl ele alınacağına dair belirtilmiş bir yolu var.
- [ ] Süre ölçümleri, örneklem büyüklüğüyle birlikte ortanca ve yüksek bir yüzdelik dilim olarak raporlanıyor.
- [ ] Terkin yazılı bir hoşgörü süresi var ve yanıtlama süresiyle birlikte gösteriliyor.
- [ ] İlk temasta çözüm bir yeniden iletişim penceresi ve “aynı konu”nun belirtilmiş bir anlamını kullanıyor.
- [ ] Yanıt oranı gösterilerek tek soruluk bir kullanıcı onayı toplanıyor.
- [ ] 100 kullanıcı başına iletişim oranı, “etkin kullanıcı”nın yazılı bir tanımıyla birlikte raporlanıyor.
- [ ] Temsilciler için ele alma süresi hedefi belirlenmiyor ve hiçbir metrik bireyleri sıralamıyor.
- [ ] En çok iletişim üreten kategoriler sahip takımlarla aylık gözden geçiriliyor ve eylemler bir birikim listesine gidiyor.
- [ ] Tanımlar sürüm kontrolü altında ve her değişiklik tarihli.

## Yapay zekâ istemleri

**Masanın temel ölçümleri için kesin tanımlar taslağı hazırlayın.**

```text
Şu hizmet masası ölçümleri için tanımlar yazıyorum: [ölçümlerin listesi,
örneğin iletişim hacmi, yanıtlama süresi, terk, ele alma süresi, ilk temasta
çözüm, yeniden iletişim]. Kanallarımız [kanalların listesi] ve araçlarımız
[telefon ya da sohbet platformu ve ITSM aracı]. Her ölçüm için tanımı, formülü,
saatin başlangıcını ve bitişini, dahil edilenleri ve hariç tutulanları, birimi
ve veri kaynağını taslak olarak hazırla. Baştan sona aynı terimleri kullan ve
kıyaslama değerleri ya da hedefler uydurma. Varsayımlarını ve tamamlamak için
yanıtlamam gereken soruları listele.
```

**Bir rakam kümesini manipülasyon belirtileri açısından gözden geçirin.**

```text
[dönem] için hizmet masası rakamlarımız burada: [hacim, yanıtlama süresi
yüzdelik dilimleri, terk, ele alma süresi yüzdelik dilimleri, ilk temasta
çözüm, yeniden iletişim gibi rakamları yapıştırın]. Tanımlarımız: [tanımları
yapıştırın]. Bir rakamın hizmet iyileştiği için değil, toplanma biçimi
nedeniyle iyileşmiş göründüğünü düşündüren örüntüleri ara ve her biri için
verilerde neyin kontrol edileceğini öner. Bireyleri suçlama ve eşik uydurma.
Varsayımlarını ve verilen verilerden belirleyemediğin şeyleri listele.
```

**En çok iletişim üreten kategorilerin aylık gözden geçirmesine hazırlanın.**

```text
[hizmet ya da takım] için hizmet masası iletişim kategorilerinin aylık bir
gözden geçirmesine hazırlanıyorum. Elimde [son üç ayın kategori sayıları ve
100 kullanıcı başına iletişim] var. Bir gündem, kısa bir tablo şablonu ve her
hizmet sahibine nedenler, düzeltmeler, makaleler ve self servis seçenekleri
hakkında sorulacak soruların bir listesini taslak olarak hazırla. Eylemlerin
bir birikim listesine nasıl kaydedileceğini öner. Sayı ya da neden uydurma.
Varsayımlarını ve getirmem gereken verileri listele.
```

**Kısa bir iletişim sonrası anket tasarlayın.**

```text
Kullanıcıların [kanal] aracılığıyla [hizmet masası adı] ile iletişime
geçtikten sonra yardım görüp görmediklerini ölçmek istiyorum. Sorunun çözülüp
çözülmediğine dair bir soru da dahil [sayı] tarafsız soru, bunların ne zaman
gönderileceğine dair bir plan ve yanıt oranının ve yanıt verenlerin dağılımının
nasıl raporlanacağını taslak olarak hazırla. Yanıtlara yanlılık katabilecek
ifadeleri işaretle ve veriler [araç] içinde tutulacağından gizlilik
hususlarını not et. Kıyaslama yanıt oranları uydurma. Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): ilgili bir metriği hangi konunun tanımladığını ve bir masa ölçümünün yanında yer alması gereken koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konuda yapılan düzenlemelerin her metriği bir manipülasyon vektörü ve bir koruma önlemiyle eşleştirilmiş tutup tutmadığını kontrol etmek için kullanın.

## Temel çıkarımlar

- İletişimleri ve talep kayıtlarını ayrı sayın, ikisini de tanımlayın ve hacmi kullanıcı tabanının büyüklüğüne göre normalleştirin.
- Süreleri ortanca ve yüksek bir yüzdelik dilim olarak raporlayın ve her rakamın kaç iletişime dayandığını söyleyin.
- Yanıtlama hızını, terki ve ele alma süresini çabanın işaretleri olarak okuyun ve bunları sonucun işaretleri olarak ilk temasta çözüm ve yeniden iletişimle eşleştirin.
- İlk temasta çözümü kullanıcının geri dönüp dönmediğine göre tanımlayın ve tek soruluk bir kontrolle doğrulayın.
- Masayı bir sensör olarak kullanın: en çok iletişim üreten kategorileri, hizmetlerin sahibi takımlarla aylık gözden geçirin.
- Kuyrukları, kanalları ve hizmetleri ölçün; bireysel temsilcileri asla sıralamayın.

## Kaynaklar ve ileri okuma

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
