# Çekme isteği ve kod inceleme metrikleri

**İnceleme, biten işin en sık beklediği yerdir; bu yüzden bir değişikliğin biri ona bakmadan önce ne kadar durduğunu, ne kadar büyük olduğunu ve ne sıklıkla geri geldiğini ölçün ve daha hızlının asla özensiz anlamına gelmemesi için her hız sayısını bir kalite sinyaliyle eşleyin.**

## Genel bakış ve motivasyon

[Çekme isteği (pull request)](https://en.wikipedia.org/wiki/Pull_request), bir [sürüm denetimi](https://en.wikipedia.org/wiki/Version_control) deposunun bir dalındaki bir değişiklik kümesinin diğerine birleştirilmesi önerisidir; birleştirilip birleştirilmemesi gerektiğine dair konuşmayla birlikte. Birçok takımda, “yazar çalıştığını düşünüyor” ile “takım yayımlanabileceği konusunda hemfikir” arasındaki resmî kapıdır. Konuşma bir [kod inceleme](https://en.wikipedia.org/wiki/Code_review) biçimidir: yazardan başka bir kişi değişikliği okur, sorular sorar ve onaylar ya da revizyon ister. Bazı platformlar aynı şeye birleştirme isteği (merge request) der; bu konu ikisi için de “çekme isteği” terimini kullanır.

İnceleme basit bir nedenle ölçmeye değerdir. Teslimatın akış görünümünde bir iş öğesi ömrünün çoğunu bekleyerek geçirir ve inceleme, tamamen takımın denetimi içinde olan beklemelerden biridir. Paylaşılan bir platform darboğazı ya da dış bir bağımlılık, başka insanların değişmesini gerektirir. İlk bakışı için iki gün bekleyen bir çekme isteği ise yalnızca takımın kendi alışkanlıklarının değişmesini gerektirir. Bu kitaptaki akış ölçümleri (bkz. Konu 2.1 “Akış ölçümleri” ve Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”) genel sözlüğü sunar. Bu konu çevrimin bir aşamasına yakınlaşır ve ona kendi araçlarını verir.

Çevik ve ITIL bakış açıları burada yararlı bir biçimde buluşur. Çevik açıdan inceleme bir geri bildirim döngüsü ve bir öğretme mekanizmasıdır. Kod tabanının bilgisini yayar, hataları erken yakalar ve takımın çalışma anlaşmalarını ve Bitti Tanımını (Definition of Done) uygular. ITIL açısından aynı etkinlik birkaç uygulamayı destekler. ITIL 4’te yazılım geliştirme ve yönetimi uygulaması yazılımın nasıl inşa edilip denetlendiğini, değişiklik yetkilendirme değişikliklerin nasıl değerlendirilip yetkilendirildiğini, dağıtım yönetimi ise değişikliklerin canlı ortama nasıl ulaştığını kapsar. Meslektaş incelemesinden geçmiş bir çekme isteği, birçok kuruluş için standart bir değişikliğin yayından önce değerlendirildiğinin kanıtıdır. İncelemeyi ölçülen, iyileştirilebilir bir etkinlik olarak ele almak iki görüşe de hizmet eder: çevik takım daha hızlı geri bildirim ister, ITIL uygulaması ise değişikliklerin denetlendiğine dair güvenilir güvence ister.

Boyunca akılda tutulması gereken risk, inceleme hızı ile inceleme kalitesinin kolayca ayrılabilmesidir. Bir takım, her şeyi görür görmez onaylayarak ilk inceleme süresini yarıya indirebilir ve pano bir zafer gösterirken kod tabanı kötüleşir. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) bu metrik ailesine olağandışı bir güçle uygulanır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”), çünkü sayılar toplaması ucuz, herkese görünür ve temsil etmeleri gereken şeyi değiştirmeden oynatması çok kolaydır. Aşağıdaki her öneri bu akılda tutularak yazılmıştır.

Çekme isteğini **yazar** açmıştır ve bir **inceleyici** onu değerlendirir. **İnceleme turu**, “yazar iter, inceleyici yanıtlar” döngüsünün bir tekrarıdır. **Yeniden iş**, bir inceleme yorumundan sonra ya da birleştirmeden sonra, ilk sürümün yanlış yaptığı bir şeyi düzeltmek için yapılan değişikliktir. **Sürekli tümleştirme (CI)**, çalışmayı sık sık paylaşılan bir hatta birleştirme ve her birleştirmeyi otomatik denetleme uygulamasıdır; bkz. [sürekli tümleştirme](https://en.wikipedia.org/wiki/Continuous_integration).

Bu konudaki bütün metrikler takımları ve depoları tanımlar. İnceleyicileri ya da yazarları asla sıralamazlar. Bireysel düzeyde inceleme sayıları çıkarması kolaydır ve kullanmaya yatkındır; bunu yapmak bir iş birliği uygulamasını bir yarışmaya çevirir (bkz. Konu 9.1 “Takım sağlığı ve geliştirici deneyimi”).

## Temel ilkeler

- **Bekleme, incelemeye egemendir.** Çoğu takımda inceleme süresinin en büyük kısmı, bir inceleyici başladıktan sonraki tartışma değil, çekme isteğinin okunmadan durmasıdır. Konuşmayı ölçmeden önce beklemeyi ölçün.
- **Küçük değişiklikler daha hızlı ve daha iyi incelenir.** Boyut, hem hızı hem de titizliği aynı anda iyileştiren az sayıdaki kaldıraçtan biridir, çünkü bir inceleyici küçük bir değişikliği kafasında tutabilir.
- **İnceleme olmadan hız bir iyileşme değildir.** Bu konudaki her hız metriğinin bir kalite karşılığı gerekir ve çift birlikte okunur.
- **İnceleme bir takım kapasitesidir, kişisel değil.** Yük takım içinde yayılmalıdır. Yoğunlaşmayı gösteren bir metrik, övülecek ya da suçlanacak bir kişiye değil, takımdaki bir tasarım sorununa işaret eder.
- **Dağılımlar ortalamalardan iyidir.** İnceleme sürelerinin takılı kalmış çekme isteklerinden oluşan uzun bir kuyruğu vardır; bu yüzden medyanı ve yüksek bir yüzdeliği raporlayın (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).
- **Saati tanımlayın, sonra dokunmayın.** Saatin ne zaman başlayıp durduğunu, hangi olayların onu duraklattığını ve hangi otomatik etkinliğin hariç tutulduğunu belirtin ve bunu verinin yaşadığı yere yazın (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).
- **İnceleme metrikleri işin sahibi takıma hizmet eder.** Takımın kendi retrospektifine bir girdidir, başkası için bir puan kartı değil.

## Metrik tanımları

Aşağıdaki saatler, sürüm denetimi platformunun açma, inceleme isteği, yorum, onay, itme ve birleştirme için olay zamanlarını kaydettiğini varsayar. Bir satır aksini söylemedikçe taslaklar, botlar tarafından açılan çekme istekleri ve birleştirilmeden kapatılan çekme istekleri hariç tutulur. “Çalışma saatleri”, takımın beyan ettiği çalışma saatleri anlamına gelir; böylece Cuma akşamı açılan bir çekme isteği bir hafta sonu beklemeyle sayılmaz.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| İlk incelemeye kadar süre | Bir çekme isteğinin incelemeye hazır olması ile ilk esaslı insan yanıtı arasındaki bekleme | Saat, çekme isteği taslak durumundan çıktığında ya da hazır açıldığında başlar, yazar dışındaki biri tarafından ilk inceleme yorumunda, değişiklik isteğinde ya da onayda durur; bot ve yazar yorumları ve salt etiket değişiklikleri hariç tutulur. Medyanı ve 85. yüzdeliği çalışma saati olarak raporlayın | çalışma saati | Sürüm denetimi platformu olay geçmişi | Yazılım geliştirme ve yönetimi; değişiklik yetkilendirme | İnceleme duyarlılığı üzerine çalışma anlaşması; devam eden işin akışı | Haftalık |
| İnceleme çevrim süresi | İncelemeye hazır olmaktan birleştirmeye toplam süre | Saat, çekme isteği incelemeye hazır olduğunda başlar, birleştirmede durur; birleştirilmeden kapatılan çekme istekleri hariç tutulur ve ayrıca sayılır. Medyanı ve 85. yüzdeliği çalışma saati olarak raporlayın | çalışma saati | Sürüm denetimi platformu olay geçmişi | Dağıtım yönetimi; değişiklik yetkilendirme | Takım panosunda inceleme aşamasının çevrim süresi | Haftalık |
| Çekme isteği boyutu | Bir çekme isteğindeki değişiklik miktarı | Eklenen satırlar artı silinen satırlar; deponun yok sayma kurallarında listelenen üretilmiş dosyalar, kilit dosyaları, dışarıdan alınmış kod ve salt yeniden adlandırmalar hariç. Birleştirilen çekme isteği başına medyanı ve 85. yüzdeliği raporlayın | değişen satır | Sürüm denetimi platformu fark istatistikleri | Yazılım geliştirme ve yönetimi | Küçük parti boyutu; hikâyelerin dilimlenmesi | Haftalık |
| İnceleme turları | Birleştirmeden önce yazar itmesi ve inceleyici yanıtı döngülerinin sayısı | Birleştirilen çekme isteği başına ayrı “değişiklik istendi” ya da yorum-sonra-itme çevrimlerinin sayısı; ilk gönderim sıfırıncı turdur ve otomatik denetim başarısızlıkları hariç tutulur. Medyanı ve 85. yüzdeliği raporlayın | sayı | Sürüm denetimi platformu inceleme ve itme olayları | Sürekli iyileştirme; yazılım geliştirme ve yönetimi | İnceleme aşamasında yeniden iş sinyali; Bitti Tanımı | Haftalık |
| İnceleme yükü yoğunlaşması | İnceleme işinin bir takım içinde ne kadar dengesiz yayıldığı | Kayan 4 hafta boyunca takımın tamamlanan incelemelerinin en meşgul iki inceleyici tarafından ele alınan payı; kişinin kendi çekme isteğinin incelemeleri ve bot incelemeleri hariç tutulur. Takım için raporlanır, asla isme göre değil | yüzde | Takıma toplulaştırılmış sürüm denetimi platformu inceleme olayları | Sürekli iyileştirme; bilgi yönetimi | Paylaşılan kod sahipliği; ortak sahiplik | Aylık |
| Bayat çekme isteği sayısı | Takımın üzerinde anlaşılmış sınırından daha uzun süredir açık olan çekme istekleri | Hâlâ açık ve taslak olmayan, incelemeye hazır olduğundan beri yaşı takım sınırını aşan çekme istekleri, anlık görüntü zamanında sayılır; taslaklar hariç | sayı | Sürüm denetimi platformu açık çekme isteği listesi | Değişiklik yetkilendirme; sürekli iyileştirme | İş öğesi yaşı; WIP sınırı | Haftalık |
| Birleştirme sonrası düzeltme oranı | Kısa süre sonra düzeltici bir değişiklik izleyen birleştirilmiş çekme isteklerinin payı | Birleştirmeden sonra 14 gün içinde aynı değişikliğe bağlı bir düzeltme, geri alma ya da acil düzeltme izleyen birleştirilmiş çekme istekleri / dönemdeki birleştirilmiş çekme istekleri; bu şekilde etiketlenen planlı takip işi hariç | yüzde | Sürüm denetimi geçmişi, bağlı sorunlar ve olay ya da değişiklik kayıtları | Değişiklik yetkilendirme; olay yönetimi | Kalite içeriye yerleştirilmiş; Bitti Tanımı | Aylık |

İlk incelemeye kadar süre en büyük kaldıraçtır ve çoğu takımın başlaması gereken metriktir. İnceleme çevrim süresi onun sonuç ölçümüdür ve Konu 2.2’de tartışılan daha uzun teslim sürelerinin bir bileşenidir. 14 günlük pencere ve bayat sınırı örneklerdir; her takım yayın ritmine uyan değerleri seçer ve yazar. Sayıların daha geniş teslimat resmine beslendiği yerde DORA ailesi (bkz. Konu 2.8 “DORA metrikleri”) ve değişiklik başarısızlığı ölçümleri (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”) devralır.

## Öneriler

### İşten önce beklemeyi ölçün

**1. İlk incelemeye kadar süreyle başlayın.** Bu genellikle inceleme süresine en büyük katkıdır ve iyileştirmesi en ucuz olanıdır. Kimsenin bir şey girmesi gerekmesin diye platformun olay geçmişinden enstrümante edin. Medyanı ve yüksek bir yüzdeliği raporlayın; çünkü üç saatlik bir medyanla dört günlük 95. yüzdelik, bazı değişikliklerin unutulduğu anlamına gelir.

**2. Botları ve taslakları saatten hariç tutun ve bunu söyleyin.** Otomatik denetimler, bağımlılık güncelleme botları ve biçimlendirme araçları saniyeler içinde yorum oluşturur ve onları saymak beklemeyi mükemmel gösterir. Saati dal ilk itildiğinde değil, yazar değişikliği hazır işaretlediğinde başlatın. Bu kuralları grafiğin yanında yayımlayın.

**3. Çalışma saatlerini kullanın ve takımın takvimini yazın.** Cuma geç saatte açılan bir çekme isteği bir hafta sonu beklemeyle sayılmamalıdır. Saat dilimlerine yayılmış bir takım, kimin saatlerinin sayılacağı için bir kurala ihtiyaç duyar ve çoğu zaman dürüst yanıt, dilimler arasındaki devir teslim maliyetinin görülmeye değer şey olduğudur. Seçimi belirtin ve sabit tutun.

### İşi incelenebilir olacak biçimde şekillendirin

**4. Çekme isteklerini küçük tutun ve boyutu bir takım alışkanlığı olarak ele alın.** Boyutun medyanını ve 85. yüzdeliğini izleyin ve büyük olanlara bireysel başarısızlıklar olarak değil bir küme olarak bakın. Takımlar genellikle büyük değişikliklerin birkaç nedenden geldiğini bulur: yeterince ince dilimlenmemiş iş, yeniden düzenlemeyi yeni davranışla karıştırmak ya da birleştirmeyi çok geciktirmek. İşi, her çekme isteği tek bir şey yapacak biçimde dilimleyin; bu aynı zamanda [gövde tabanlı geliştirmenin](https://en.wikipedia.org/wiki/Trunk-based_development) ve sık dağıtımın arkasındaki küçük parti ilkesiyle örtüşür.

**5. Sert bir boyut sınırını hedef olarak koymayın.** “400 satırdan fazla olmasın” gibi bir sınır, bir değişikliği tek başına okunamayan ya da tek başına birleştirildiğinde derlemeyi bozan yapay parçalara bölmeyi davet eder. Boyutu retrospektifte sohbet başlatıcı olarak kullanın ve takıma özellik anahtarları, kendi çekme isteğinde hazırlayıcı yeniden düzenleme ve bir bayrağın arkasında birleştirme gibi dilimleme teknikleri verin.

**6. İnceleme talebini açık yapın.** İnceleyici adlandırmayan bir çekme isteği bir gönüllüyü bekler ve gönüllüler azdır. Kimden istendiği, takımın nasıl bilgilendirildiği ve yanıt beklentisinin ne olduğu konusunda çalışma anlaşmasında anlaşın. Paylaşılan bir inceleme nöbet çizelgesi ya da günlük bir inceleme aralığı, çoğu zaman beklemeyi herhangi bir araç ayarından daha fazla azaltır.

### Yükü ve bilgiyi yayın

**7. Yük yoğunlaşmasını takım düzeyinde bir risk olarak izleyin.** İncelemelerin çoğunu iki kişi ele alıyorsa, onların uygunluğu takımın akışını sınırlar ve yokluğu onu durdurur. Yoğunlaşma ölçümünü aylık gözden geçirin ve takımın tasarımı yoluyla harekete geçin: varsayılan inceleyiciyi döndürün, yeni üyeleri deneyimli olanlarla eşleştirin ve kodun yalnızca bir kişinin inceleyebildiği alanlarını yazın. Kişi başına bir lider tablosu yayımlamayın.

**8. İncelemeyi bilgi paylaşmak için kullanın ve bu amacı koruyun.** İncelemenin uzun vadeli değeri, hata tespitinin yanı sıra öğrenmeyi, paylaşılan sahipliği ve tutarlı stili de içerir. [Eşli programlama](https://en.wikipedia.org/wiki/Pair_programming) ve topluluk programlaması bu alışverişin bir kısmını sürecin daha erken bir aşamasına taşır; bir çiftin üzerinde zaten çalıştığı bir değişiklik için daha hafif bir inceleme makuldür. Seçimi çalışma anlaşmasında yazılı bir takım kararı yapın; böylece “eşli çalışıldı, o yüzden hafif incelendi” bir mazeret değil, görünür bir kural olur.

### İncelemenin kendisini denetleyin

**9. Otomasyonun iyi yaptığı şeyi otomasyona bırakın.** Biçimlendirme, lint ve temel denetimler iş hattına aittir; böylece insan dikkati tasarıma, doğruluğa ve riske gider. [Statik program çözümlemesi](https://en.wikipedia.org/wiki/Static_program_analysis) ve otomatik testler önemsiz inceleme turlarının sayısını azaltır. Kalan turlar o zaman stil anlaşmazlıkları hakkında daha az, tasarım konuşması hakkında daha çok şey söyler.

**10. İnceleme turlarını bir kusur sayısı olarak değil, netlik hakkında bir sinyal olarak okuyun.** Çok sayıda tur, gereksinimin belirsiz olduğu, yazarın bağlamdan yoksun olduğu, inceleyicinin zevk değişiklikleri istediği ya da değişikliğin büyük olduğu anlamına gelebilir. Her çekme isteğinde sıfır tur ya mükemmel iş ya da kimsenin bakmadığı anlamına gelebilir. Alışılmadık çok ya da alışılmadık az turlu bir avuç çekme isteğinden örnek alın ve bunları bir takım olarak birlikte okuyun.

### Hızı kaliteyle eşleyin ve zamanı görünür tutun

**11. İnceleme hızının yanında her zaman bir kalite karşılığı gösterin.** Birleştirme sonrası düzeltme oranı, son değişikliklere bağlı olaylar ve yayından sonra bulunan hataların payı doğal ortaklardır (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”). Düzeltme oranı kötüleşirken inceleme süresi iyileşiyorsa takım güvenceyi hızla takas etmiştir ve çözüm bir hedef değil bir konuşmadır. İkisini aynı grafikte gösterin.

**12. İncelemeyi akış resmine ve plansız işe bağlayın.** Daha hızlı bir inceleme, yalnızca sonraki aşama işi öylece kuyruğa almıyorsa yardımcı olur (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”). Planlı işi kesen acil inceleme istekleri kendi maliyetini taşır (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşlenen koruma çizgisi metriği ya da uygulaması |
| --- | --- | --- |
| İlk incelemeye kadar süre | İlk yanıt olarak hızlı bir “iyi görünüyor” ya da bir emoji göndermek; bir bot ya da dost bir inceleyici atamak; bir çekme isteğini yalnızca birisi bakmayı önceden kabul ettikten sonra hazır işaretlemek | Birleştirme sonrası düzeltme oranı; yorumsuz onaylardan örnek; çalışma anlaşmasında ilk yanıtların esaslı olmasını gerektirmek |
| İnceleme çevrim süresi | İncelemeyi beklemeden birleştirmek; daha hızlı geçmek için bir değişikliği küçük parçalara bölmek; saati sıfırlamak için bir çekme isteğini kapatıp yeniden açmak | Kapatılıp yeniden açılan çekme isteklerinin sayısı; inceleme turları; birleştirme sonrası düzeltme oranı; onay gerektiren korumalı dal kuralları |
| Çekme isteği boyutu | Dosyaları sayımdan hariç tutmak; tek bir değişikliği ayrı ayrı anlaşılamayan parçalara bölmek; boyutu üretilmiş kodla şişirmek | Yok sayma kurallarını her çeyrek gözden geçirmek; bölünmüş parçaların tek başına derlendiğini ve testleri geçtiğini denetlemek; en küçüklerden ve en büyüklerden bir örnek okumak |
| İnceleme turları | Sayıyı düşük tutmak için ilk geçişte onaylamak; tartışmayı iz bırakmadan sohbete taşımak; yazarların turları gizlemek için tek bir işlemede çok sayıda düzeltme itmesi | Birleştirme sonrası düzeltme oranı; sıfır turlu çekme isteklerinden örnek; tartışmayı çekme isteğinin içinde tutmak |
| İnceleme yükü yoğunlaşması | Sayıyı yaymak için incelemeleri çok sayıda küçük onaya bölmek; incelemeleri boş zamanı olan ama bilgisi olmayanlara atamak | Riskli alanlar için inceleyicinin bilgisini gözden geçirmek; alana göre birleştirme sonrası düzeltme oranını izlemek; metriği takım düzeyinde tutmak |
| Bayat çekme isteği sayısı | Bayat çekme isteklerini birleştirmeden kapatmak; onları gizlemek için taslağa dönüştürmek; bayat sınırını yükseltmek | Birleştirilmeden kapatılan çekme isteklerinin sayısı; uzun süredir devam eden taslakların sayısı; sınırı takımla her çeyrek gözden geçirmek |
| Birleştirme sonrası düzeltme oranı | Düzeltmeleri bağlantısız yeni bir iş öğesi altında kaydetmek; düzeltici işi planlı takip olarak etiketlemek; düzeltmeyi pencerenin ötesine geciktirerek metrikten kaçınmak | Olay ve değişiklik başarısızlığı verileriyle karşılaştırmak; takip öğelerinden örnek; kullanılan etiketlerin denetimi |

Sağlıklı bir okuma sakin bir okumadır. İlk incelemeye kadar süre kısadır ve kuyruk da kısadır; bu yüzden hiçbir çekme isteği günlerce beklemez. Boyut, takımın okumayı kolay bulduğu bir aralıktadır ve takımın açıklayabildiği birkaç büyük değişiklik vardır. İnceleme turları düşüktür ama sıfır değildir, yük yoğunlaşması ılımlıdır, bayat sayısı küçüktür ve birleştirme sonrası düzeltme oranı kararlıdır. Bir sayı keskin biçimde iyileştiğinde, birinin eşlenen koruma çizgisinin yanlış yöne hareket etmediğini denetlemesi gerekir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Katı yanıt beklentileriyle hızlı inceleme | Kısa geri bildirim döngüleri; yazar için daha az bağlam kaybı; daha düşük devam eden iş | Hızlı onaylama baskısı; odaklı işi böler |
| Yavaş, kapsamlı inceleme | Tasarımın ve riskin dikkatli okunması; daha güçlü bilgi aktarımı | Daha uzun çevrim süresi; daha büyük partiler birikir; yazarlar ilerler ve bağlamı yitirir |
| Küçük çekme istekleri | Okuması ve geri alması daha kolay; daha düzgün akış | Değişiklik başına daha fazla yük; bir özelliği kafa karıştırıcı adımlara parçalayabilir |
| Büyük çekme istekleri | Daha az devir teslim; bütün özellik bir arada görünür | İncelemeler yüzeysel olur; geri alması zor; uzun beklemeler |
| Adlandırılmış bir sahipten gerekli onay | Riskli alanlar için net hesap verebilirlik; değişiklik yetkilendirmeyi destekler | Bir darboğaz ve tek bir hata noktası yaratır |
| İnsan incelemesinden önce otomatik denetimler | İnsanları tasarım ve risk için serbest bırakır; tutarlı | Yanlış güven yaratabilir; bakım gerektirir |

Hiçbir politika tek başına kazanmaz. Amaç titizliği korurken beklemeyi kısaltmaktır ve olağan yol daha küçük değişiklikler, net inceleme beklentileri, rutin denetimler için güçlü otomasyon ve iyi bir incelemenin neye benzediği konusunda bir takım anlaşmasıdır. İnceleme metrikleri en çok bir retrospektif için sorular olarak yararlı, hedef olarak en az yararlıdır.

## Takımınızla tartışılacak sorular

**1. Bir çekme isteği ömrünün çoğunu nerede geçiriyor, beklemekte mi yoksa incelenmekte mi?**
Takımdan veriye bakmadan önce tahmin etmesini isteyin, sonra ilk incelemeye kadar süre ile birleştirmeye kadar kalan süre arasındaki ayrımı gösterin. Çoğu grup, ne kadarının bekleme olduğuna şaşırır. Kolaylaştırıcı hangi tahminlerin yanlış olduğunu not etmeli ve her yanlış tahminin takımın incelemeyi nasıl deneyimlediği hakkında ne söylediğini sormalıdır. En büyük beklemeye saldıran tek bir değişiklikle bitirin.

**2. Bu takımda iyi bir inceleme neye benziyor ve dışarıdan biri bunu nasıl anlardı?**
Takımın değer verdiği davranışları, örneğin tasarım hakkında soru sormak, testleri denetlemek ve bir isteğin nedenini açıklamak gibi, sıralayın. Sonra bunlardan hangilerinin çekme isteğinde görünür bir iz bıraktığını sorun. Bireyleri denetlemeden esaslı bir ilk yanıtı simgesel olandan nasıl ayırt edeceğinizi tartışın. Çalışma anlaşmasına koymak için kısa bir yazılı tanım üzerinde anlaşın.

**3. Bizim için ne kadar büyük çok büyük ve iş gerçekten büyük olduğunda ne yapıyoruz?**
Boyut dağılımına bakın ve en büyük birkaç çekme isteğini seçin. Her birinin neden büyük olduğunu ve dilimlenip dilimlenemeyeceğini sorun. Özellik anahtarları, hazırlayıcı yeniden düzenleme ve bir bayrağın arkasında birleştirme gibi teknikleri tartışın. Kolaylaştırıcı sayısal bir sınır koymaya direnmeli, bunun yerine takımın bir ay deneyeceği bir alışkanlık üzerinde anlaşmalıdır.

**4. En riskli kodumuzu kim inceliyor ve onlar yokken ne oluyor?**
Kodun alanlarını onları iyi inceleyebilecek insanlara eşleyin. Yük yoğunlaşmasına ve tek nitelikli inceleyicisi olan alanlara bakın. Eşleştirme ya da dönüşümlü atamalarla her birinde ikinci bir inceleyici yetiştirmeyi tartışın. Konuşmayı, herhangi bir kişinin iş yükü sıralaması hakkında değil, takımın dayanıklılığı hakkında tutun.

**5. İnceleme hızımız yarın iki katına çıksa, kalite hakkında neyin doğru olmasını isterdik?**
Gruptan izleyecekleri kalite sinyallerini, örneğin birleştirme sonrası düzeltmeleri, son değişikliklere bağlı olayları ya da geri alma sayısını adlandırmasını isteyin. Bu sinyallerin şu anda hız grafiğinin yanında görünür olup olmadığını denetleyin. Hızın titizlik pahasına satın alındığının erken bir işaretinin ne olacağını tartışın. Panoda hangi karşılığın gösterileceği konusunda anlaşın.

**6. Hangi inceleme sayılarını yardımcı olmayacak bir biçimde iyileştirmeye yatkın olurduk?**
Her metriği gözden geçirin ve baskı altındaki birinin hiçbir şeyi daha iyi yapmadan onu nasıl daha iyi gösterebileceğini sorun. Yanıtları yukarıdaki oyunlaştırma tablosuyla karşılaştırın ve takımın kendi fikirlerini ekleyin. Amaç, riski olmadan önce adlandırmaktır. Her metriğin yanında hangi koruma çizgisinin gözden geçirileceği konusunda anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları inceleme sürecinin sahibidir ve metriklerinin de sahibi olmalıdır. En çok beklemeyi basit anlaşmalarla kısaltmaktan yararlanırlar: günlük bir inceleme aralığı, net bir talep süreci ve küçük değişiklikler. Sayıları retrospektiflerde kullanmalı, devam eden işi düşük tutmalı ve tek bir grafiği eniyileme dürtüsüne direnmelidirler. İnceleme aynı zamanda yeni üyelerin kod tabanını öğrendiği yerdir; bu amacı koruyun.

### Hizmet ve operasyon takımları

Operasyon takımları incelemeyle altyapı kodunun, yapılandırmanın ve çalışma kitabı otomasyonunun çekme istekleri yoluyla değiştirildiği yerde karşılaşır. Onlar için inceleme çoğu zaman bir standart değişikliğin onaylanmasının ve belgelenmesinin parçasıdır (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”). Hangi değişikliklerin ikinci bir kişi tarafından incelenmesi gerektiği, acil düzeltmelerin ne kadar çabuk incelendiği ve acil değişikliklerin sonradan nasıl incelendiği konusunda anlaşmalıdırlar; böylece aceleyle yapılan bir düzeltme yine de incelenir. Riskli bir değişiklik üzerindeki ince bir inceleme, sonradan bir olay olarak ortaya çıkar.

### Liderlik ve yönetişim

Liderler inceleme metriklerini üretkenlik puanları olarak değil, takım sağlığı ve akış hakkında sinyaller olarak ele almalıdır. Bir hız sayısı raporlandığında eşlenen kalite ölçümünü istemeli, dikkatli incelemenin aldığı zamanı desteklemeli ve depolar ile riskler farklı olduğundan takımları ham inceleme süresiyle karşılaştırmaktan kaçınmalıdır. Yönetişim organları, belgelenmiş, örneklenen bir inceleme sürecinin onay sayımından daha güçlü olduğunu kabul etmeleri koşuluyla, inceleme kanıtını değişiklik güvencesinin parçası olarak kullanabilir.

### Müşteriler ve kullanıcılar

Müşteriler çekme isteklerini görmez, ancak sonuçları hisseder: bir düzeltmenin ne kadar çabuk geldiğini ve bir yayının ne sıklıkla yeni bir hata getirdiğini. Kısa inceleme beklemeleri acil düzeltmelerin onlara daha çabuk ulaşmasına yardım eder ve düşünceli inceleme arızaları onlardan uzak tutmaya yardımcı olur. Bir hizmetin yayımlanmış bir yayın ya da hata geçmişi olduğunda müşteriler, takımın zaman içinde daha az geri almayı ve daha az tekrarlanan düzeltmeyi göstermesinden yararlanır.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı, yedi kişilik bir ürün takımının geliştirdiği ve küçük bir site güvenilirliği grubuyla işlettiği bir hasta randevu web hizmeti işletir. Bu örnekteki bütün sayılar örnekleyicidir.

Üç aylık bir incelemede takım, inceleme çevrim süresinin medyanının 26 çalışma saati ve 85. yüzdeliğinin 71 çalışma saati olduğunu bulur (örnekleyici). Çevrimi bölmek, ilk incelemeye kadar medyan sürenin 19 çalışma saati olduğunu gösterir; yani gecikmenin çoğu beklemedir. Çekme isteği boyutunun medyanı 180 satır ve 85. yüzdeliği 900 satırdır (örnekleyici) ve en meşgul iki inceleyici incelemelerin yüzde 68’ini ele alır (örnekleyici). Birleştirme sonrası düzeltme oranı yüzde 9’dadır (örnekleyici).

Takım üç anlaşma yapar. Günlük 30 dakikalık bir inceleme aralığı koyar, bir çalışma günü içinde ilk yanıt beklentisini çalışma anlaşmasına yazar ve her hafta “önce incelemeyi yap” görevini döndürür. Ayrıca büyük iş için, kısmi özelliklerin güvenle birleştirilebilmesi amacıyla özellik anahtarlarını kullanan bir dilimleme alışkanlığı benimser. Bir boyut sınırı ya da ilk incelemeye kadar süre için bir hedef koymaz.

İki ay sonra ilk incelemeye kadar medyan süre 6 çalışma saatine ve inceleme çevrim süresinin 85. yüzdeliği 34 çalışma saatine düşer (örnekleyici). Yük yoğunlaşması yüzde 52’ye düşer (örnekleyici) ve birleştirme sonrası düzeltme oranı yüzde 9’da kalır.

Takım sonra bir oyunlaştırma riskini yakalar. Onaylardan alınan bir örnek, randevu hatırlatma mantığına dokunan değişikliklerde ilk yanıtların yaklaşık üçte birinin dakikalar içinde geldiğini ve yalnızca “LGTM” yazdığını gösterir. Hız kazancı kısmen gerçek, kısmen bir lastik damgaydı. Birleştirme sonrası düzeltme oranı henüz kımıldamamıştı, çünkü etkilenen kod aylık bir çevrimde çalışır. Takım çalışma anlaşmasını, ilk yanıtın bir soru, değişikliğin belirli bir kısmı hakkında bir yorum ya da neyin denetlendiğine dair açık bir not içermesini gerektirecek biçimde değiştirir ve inceleme grafiğine yorumsuz onayların örneklenen payını ekler. Ayrıca hastaya dönük hatırlatma mantığındaki değişikliklerin, biri operasyon grubundan olmak üzere iki inceleyici gerektirdiği konusunda anlaşır. Karar, nedenleriyle birlikte takımın karar günlüğüne girer.

## Sektör mercekleri

**Girişim (startup).** Küçük bir takım, herkes kodu bildiği için dakikalar içinde inceleyebilir ve ana risk, zaman azken incelemeyi atlamaktır. Metrikleri az tutun: ilk incelemeye kadar süre ve boyut yeterlidir. Küçük değişiklik alışkanlığını erken oluşturun, çünkü kod tabanı ve takım büyüdükten sonra getirmek çok daha zordur.

**Küçük işletme.** Yazılımı çoğu zaman bir ya da iki geliştirici ya da dış bir tedarikçi sürdürür. İnceleme tek bir meslektaş ya da tedarikçinin kendi personeli tarafından yapılabilir. Tedarikçilere nasıl inceledikleri ve çekme isteği verisinin paylaşılıp paylaşılamayacağını sorun ve hangi değişikliklerin kim tarafından incelendiğine dair basit bir kayıt tutun, çünkü küçük bir takımda hatalara karşı ana denetim incelemedir.

**Büyük kurum.** Çok sayıda takım, depo ve onay kuralı geniş bir değişkenlik yaratır. Platform verisinin karşılaştırılabilir olması için saatlerin tanımlarını ve hariç tutmaları standartlaştırın, ancak risk ve kod tabanı farklı olduğundan takımları ham inceleme süresine göre sıralamayın. Denetim için dayatılan ve titizlik eklemeden bekleme ekleyen inceleme gereksinimlerine dikkat edin ve elle onayları otomatik denetimler ve örneklenen incelemeyle değiştirme fırsatlarına bakın.

**Devlet ve kamu sektörü.** Görevlerin ayrılığı, denetim izleri ve satın alma kuralları çoğu zaman değişiklikler için bağımsız onay gerektirir. Bu kuralları tasarım girdisi olarak ele alın: kimin neyi ne zaman onayladığını kaydedin ve yarattıkları beklemeyi ölçün. Kodu tedarikçiler yazıyorsa sözleşmede inceleme kanıtını ve veri erişimini belirtin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon, meslektaş incelemesinin yararlarını, yani daha az hatayı, paylaşılan bilgiyi ve bir denetim izini korurken teslimatın hem yavaş hem denetlenebilir olan kısmını kısaltmaktır. Bekleyen çekme istekleri biten işi kullanıcılardan alıkoyar, yazarlar için bağlam değiştirme maliyetini artırır ve dallar yaşlandıkça birleştirme çakışmalarını daha olası kılar. Beklemeyi azaltmak bu yüzden daha hızlı teslimat, daha az yeniden iş ve daha az hayal kırıklığı olarak karşılığını verir.

Sürüm denetimi platformu olay geçmişi ve bir API sağladığında bu metrikleri toplamanın maliyeti düşüktür. Başlıca maliyetler saatleri ve hariç tutmaları tanımlamak, raporu kurmak ya da yapılandırmak ve sayıları düzenli gözden geçirmek için harcanan zamandır. Daha büyük maliyet davranışsaldır: insanların hızla incelemeye ayırdığı, diğer işle yarışan zaman. Bu zaman gerçek yatırımdır ve bedava sayılmak yerine bütçelenmelidir.

Getiri, daha kısa inceleme çevrim süresi, daha az bayat çekme isteği ve kararlı ya da düşen bir birleştirme sonrası düzeltme oranı olarak ortaya çıkar. Sonuçlar başlangıç noktasına ve takıma bağlı olduğundan, önceden belirli bir yüzde iyileşmeyi iddia etmekten kaçının. İnandırıcı bir gerekçe, diğer kuruluşlardan rakam aktarmak yerine takımın kendi önce ve sonra dağılımlarını kalite karşılığıyla birlikte karşılaştırır. 2018 tarihli *Accelerate* kitabı teknik ve kültürel uygulamaları teslimat performansına bağlayan araştırmayı aktarır ve genel argüman için makul bir kaynaktır; ancak takımınızın sayıları kendi verinizden gelir.

## Anti-desenler ve tuzaklar

- **İnceleyicileri ya da yazarları sıralamak.** Tamamlanan inceleme ya da değişen satır sayısı üzerinden bireysel lider tabloları iş birliğini bozar. Takım düzeyinde raporlayın ve sayıları takımın alışkanlıklarını ayarlamak için kullanın.
- **Kalite karşılığı olmadan ilk incelemeye kadar süreyi hedeflemek.** Sonuç lastik damgadır. Her hız grafiğinin yanında birleştirme sonrası düzeltme oranını ve yorumsuz onaylardan bir örneği gösterin.
- **Sert bir boyut sınırı koymak.** Takımlar uymak için işi yapay biçimde böler. Boyutu bir sohbet olarak kullanın ve bunun yerine dilimleme tekniklerini öğretin.
- **Sıfır yorumu başarı saymak.** İncelenmemiş bir onay güveni ya da dikkatsizliği yansıtabilir. Bu tür çekme isteklerinden örnek alın ve birlikte okuyun.
- **Bot etkinliğini inceleme saymak.** Otomatik yorumlar beklemeyi kısa gösterir. Botları saatten ve yük ölçümlerinden hariç tutun.
- **Saat dilimlerini ve takvimleri yok saymak.** Ham saat zamanı, hafta sonu ve bölgeler arası beklemeleri yavaş inceleme gibi gösterir. Çalışma saatlerini kullanın ve takvimi adlandırın.
- **Bayat listenin büyümesine izin vermek.** Eski çekme istekleri birleştirme çakışmaları biriktirir ve bağlamı yitirir. Listeyi her hafta gözden geçirin ve her öğeyi ya birleştirin, yeniden işleyin ya da bir nedenle kapatın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanım ve saatler | İnceleme süresi tahmin edilir ya da hisle raporlanır | Bazı takımlar platformdan süreleri kendi kurallarıyla dışa aktarır | Botlar, taslaklar ve takvimler için hariç tutmalarla her saatin tek yazılı tanımı | Tanımlar bir ritimle gözden geçirilir; değişiklikler nedenleriyle kaydedilir | Tanımlar takımlar ve tedarikçiler arasında hizalanır ve kararları bilgilendirmeyi bıraktıklarında gözden geçirilir |
| İnceleme uygulaması | İncelemeler birisi fark ettiğinde olur | Bazı takımlarda gayriresmî normlar | Talepler, yanıt beklentileri ve bir incelemenin neyi kapsadığı üzerine yazılı çalışma anlaşması | Normlar veriden ayarlanır; bilgi paylaşımı ve risk alanları izlenir | İnceleme uygulaması, rutin denetimleri otomasyonun yürüttüğü takımlar ve tedarikçiler arasında eşgüdümlenir |
| Kalite karşılığı | İnceleme ile hatalar arasında bağ yok | Birleştirme sonrası düzeltmelere ara sıra bakış | Birleştirme sonrası düzeltme oranı inceleme hızının yanında gösterilir | Koruma çizgileri düzenli gözden geçirilir; örneklenen onaylar okunur | İnceleme kanıtı, hizmetler genelinde değişiklik güvencesine ve olaydan öğrenmeye bağlanır |
| İyileştirmede kullanım | Sayılar kullanılmaz | Bazı retrospektiflerde gösterilir | Sahibi takım tarafından sabit bir ritimle gözden geçirilir | Boşluklar planlı, kaynaklı iyileştirme işine yol açar | İyileştirme fikirleri takımlardan ortak uygulamaya ve geri akar |

## Kontrol listesi

- [ ] İlk incelemeye kadar süre ve inceleme çevrim süresi için saatler başlangıç, bitiş ve hariç tutmalarla yazılmıştır.
- [ ] Botlar, taslaklar ve birleştirilmeden kapatılan çekme istekleri hariç tutulur ya da ayrıca sayılır ve kurallar görünürdür.
- [ ] Süreler, çalışma saati olarak medyan ve yüksek bir yüzdelik şeklinde raporlanır.
- [ ] Çekme isteği boyutu, üretilmiş ve dışarıdan alınmış dosyalar için üzerinde anlaşılmış bir yok sayma listesiyle ölçülür.
- [ ] Takımın, incelemelerin nasıl isteneceği ve ilk yanıtın ne kadar çabuk beklendiği konusunda yazılı bir anlaşması vardır.
- [ ] İnceleme yükü yoğunlaşması yalnızca takım düzeyinde raporlanır.
- [ ] Birleştirme sonrası düzeltme oranı ya da başka bir kalite karşılığı, inceleme hızıyla aynı grafikte gösterilir.
- [ ] Yorumsuz ve çok hızlı onaylardan bir örnek her ay okunur.
- [ ] Bayat çekme isteği listesi her hafta gözden geçirilir.
- [ ] İnceleme verisi retrospektiflerde kullanılır, bireysel değerlendirmede değil.
- [ ] Tek nitelikli inceleyicisi olan kod alanları listelenmiştir ve bir planı vardır.

## Yapay zekâ istemleri

**İnceleme metrikleri için saat tanımları taslağı hazırlayın.**

```text
[Takım ya da depo] için inceleme metriklerini tanımlamak istiyorum. Platformumuz
[sürüm denetimi platformu] ve iş akışımız [açıklayın: taslak çekme istekleri,
gerekli onaylar, birleştirme kuralları, kullanılan botlar]. İlk incelemeye kadar
süre ve inceleme çevrim süresi için kesin tanımlar taslağı hazırlayın: her saati
başlatan ve durduran olayı, nelerin hariç tutulduğunu (botlar, taslaklar,
birleştirilmeden kapatılanlar), çalışma saatlerinin [saat dilimleri ve çalışma
takvimi] için nasıl ele alındığını ve hangi yüzdeliklerin raporlanacağını
belirtin. Kıyaslama değerleri ya da araç özellikleri uydurmayın. Varsayımlarınızı
ve tanımları tamamlamak için yanıtlamam gereken soruları listeleyin.
```

**Bir inceleme verisi dışa aktarımını çözümleyin.**

```text
[Takım] için [dönem] boyunca birleştirilmiş çekme isteklerinin anonimleştirilmiş
bir dışa aktarımı burada; sütunlar [sütunları sıralayın, örneğin hazır olma zamanı,
ilk inceleme zamanı, birleştirme zamanı, değişen satırlar, inceleme turları, bağlı
düzeltme bayrağı]: [veriyi ya da özeti yapıştırın]. Her süre ölçümü ve boyut için
medyanı ve 85. yüzdeliği hesaplayın, inceleme çevrimini bekleme ve inceleme olarak
bölün ve bir konuşmayı hak eden örüntüleri belirtin. Bireyleri sıralamayın ve
dışarıdaki kıyaslamalarla karşılaştırmayın. Varsayımlarınızı ve fark ettiğiniz veri
kalitesi sorunlarını listeleyin.
```

**İnceleme metriklerimizdeki oyunlaştırma risklerini bulun.**

```text
Takımımız şu inceleme metriklerini raporluyor: [metrikleri ve her birinin nasıl
hesaplandığını listeleyin]. Üzerimizdeki baskılar [örneğin bir yayın son tarihi,
bir liderlik hedefi, bir tedarikçi sözleşmesi]. Her metrik için, incelemeyi
iyileştirmeden iyileştirilebileceği makul yolları, her birinin erken işaretlerini
ve onu yakalayacak eşlenen bir koruma çizgisi metriğini ya da uygulamasını
anlatın. İstatistik uydurmayın. Varsayımlarınızı ve riskleri sıralamak için neyi
bilmem gerektiğini söyleyin.
```

**İnceleme akışı üzerine bir retrospektif hazırlayın.**

```text
[Takım] için inceleme akışı üzerine 45 dakikalık bir retrospektif gündemi
hazırlayın. Girdiler: ilk incelemeye kadar süre [değer], inceleme çevrim süresi
[değer], medyan boyut [değer], yük yoğunlaşması [değer] ve birleştirme sonrası
düzeltme oranı [değer]; hepsi tanımlarıyla etiketlenmiş. Nedenleri yüzeye çıkaran
sorular, takımın [süre] boyunca yürütebileceği küçük bir deney ve deney sırasında
izlenecek kalite sinyalini önerin. Neden ya da hedef uydurmayın. Varsayımlarınızı
ve getirmem gereken veriyi listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): ilgili bir akış ya da kalite metriğini tanımlayan konuyu ve bir inceleme metriğinin yanında yer alması gereken koruma çizgisini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konuda yapılan düzenlemelerin şablonu, oyunlaştırma tablosunu ve çapraz başvuruları tutarlı tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- İnceleme gecikmesinin çoğu bekleme olduğundan, ilk incelemeye kadar süreyi ve inceleme çevrim süresini çalışma saati cinsinden dağılımlar olarak ölçün.
- Daha küçük çekme istekleri daha hızlı ve daha dikkatli incelenir; bir boyut sınırı dayatmak yerine dilimlemeyi öğretin.
- Her hız ölçümünü, birleştirme sonrası düzeltme oranı gibi bir kalite karşılığıyla eşleyin ve ikisini birlikte okuyun.
- İnceleme yükünü bir takım kapasitesi olarak ele alın ve yoğunlaşmayı takım düzeyinde raporlayın, asla insanların sıralaması olarak değil.
- İnceleme metrikleri bir retrospektif için sorulardır ve işin sahibi takıma hizmet eder.

## Kaynaklar ve ileri okuma

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
