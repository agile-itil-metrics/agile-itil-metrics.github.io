# Yayın ve dağıtım metrikleri

**Kodu dağıtmak ile onu kullanıcılara yayımlamak, farklı riskleri olan farklı olaylardır. Bu yüzden onları ayrı ayrı ölçün, her birini yazılı bir kurala göre sayın ve herhangi bir tek sayıyı kutlamak yerine sıklığı, teslim süresini, parti büyüklüğünü ve bayrak hijyenini birlikte okuyun.**

## Genel bakış ve motivasyon

Birçok takım “dağıtım” ve “yayın” sözcüklerini aynı anlama geliyormuş gibi kullanır. Aynı şey değildirler ve aradaki fark bu konudaki en yararlı fikirdir. **Dağıtım**, [yazılım dağıtımı](https://en.wikipedia.org/wiki/Software_deployment) makalesinde anlatıldığı gibi, yazılımın bir sürümünü bir ortama, genellikle üretime koyma eylemidir. **Yayın**, bir değişikliğin hedeflenen kullanıcılarına ulaşılabilir hale geldiği andır ve [yayın yönetimi](https://en.wikipedia.org/wiki/Release_management) bu kararı yönetmek için vardır. İkisi birlikte gerçekleştiğinde bir dağıtım bir yayındır ve tek bir sayı ikisini de anlatır. Ayrıldıklarında takım sık ve sessizce dağıtım yapabilir ve bilinçli olarak yayımlayabilir.

Ayrım önemlidir, çünkü iki olay farklı riskler taşır. Bir dağıtım teknik risk taşır: yeni derleme başlamayabilir, bir bağımlılığı bozabilir ya da geri alma gerektirebilir. Bir yayın iş ve kullanıcı riski taşır: değişiklik müşterileri şaşırtabilir ya da üzerinde anlaşılmış bir tarihte devreye girmesi gerekebilir. İki olayı birleştiren takımlar her iki riski aynı anda kabul eder ve bu onları seyrek yayımlanan büyük değişiklik partilerine iter. İkisini ayıran takımlar teknik riski küçük adımlarla, kullanıcı riskini kontrollü adımlarla alır.

Ayırmanın ana aracı, özellik bayrağı olarak da adlandırılan [özellik anahtarıdır](https://en.wikipedia.org/wiki/Feature_toggle): bir davranışı yeni bir dağıtım olmadan açıp kapatan yapılandırmadaki bir anahtar. İlgili teknikler arasında, bir değişikliği önce trafiğin küçük bir payına gösteren [kanaryalı yayın](https://en.wikipedia.org/wiki/Canary_release) ve iki üretim ortamı tutup trafiği aralarında değiştiren [mavi-yeşil dağıtım](https://en.wikipedia.org/wiki/Blue-green_deployment) vardır. Hepsi iki ayrı soruyu yanıtlamanıza izin verir: yeni sürüm güvenle çalışıyor mu ve yeni davranışı kim, ne zaman görmeli.

Aşağıdaki terimler bu konuda yinelenir.

- **Yayın**, kullanıcılara sunulan bir sürüm ya da değişiklik kümesidir.
- **Dağıtım**, bir sürümün bir ortama taşınmasıdır. ITIL 4 bunun için dağıtım yönetimi adında bir uygulama adlandırır.
- **Karanlık lansman**, yeni davranışı kullanıcılar için kapalı olan bir dağıtımdır.
- **Aşamalı yayılım**, maruziyeti aşamalarla genişleten bir yayındır, örneğin yüzde 1, yüzde 10 ve sonra herkes.
- **Parti**, bir dağıtımda ya da yayında birlikte gönderilen değişiklikler kümesidir. Parti büyüklüğü, içindeki değişiklik sayısı ya da değişiklik miktarıdır.
- **Yayın teslim süresi**, belirtilmiş bir başlangıç noktasından değişikliğin kullanıcılarına ulaşılabilir hale gelmesine kadar geçen süredir. Takımınız başlangıç noktasını yazar, çünkü birkaçı yaygın kullanımdadır.
- **Yüzdelik dilim**, gözlemlerin belirtilen bir payının altında kaldığı değerdir. Yayın teslim süresinin 85. yüzdelik dilimi, yayınların yüzde 85'inin geçtiği sayıdır.

Çevik ve ITIL görüşleri burada buluşur. [Sürekli teslimat](https://en.wikipedia.org/wiki/Continuous_delivery) izleyen bir çevik takım, her değişikliğin her an yayımlanabilir olmasını ister ve yayını teknik eylemden ayrı verilen bir iş kararı olarak ele alır. Bir ITIL uygulayıcısı yayın yönetimini, dağıtım yönetimini ve değişiklik yetkilendirmeyi, değişikliğin canlı kullanıma geçişini planlayan, programlayan ve kontrol eden uygulamalar olarak görür. Yayın yönetimi büyük olaylardan oluşan bir takvim olarak anlaşıldığında iki görüş çatışır. Uygulama, kontrolleri boru hattına ve bayraklara yerleştirilmiş olarak talep üzerine güvenle yayımlama yeteneği olarak anlaşıldığında birbirine uyarlar.

Bu konu, DORA araştırma programındaki beş teslimat performansı ölçümünün tanımlarını (bkz. Konu 2.8 “DORA metrikleri”), bir yayından sonraki başarısızlık ve yeniden iş ölçümlerini (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”) ya da değişikliklerin hacmini ve onayını (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”) yinelemez. Bu konuların açık bıraktıklarını ekler: yayınlar dağıtımlardan ayrı olarak nasıl sayılır, bitmiş bir değişiklik kullanıcılar ona ulaşmadan önce ne kadar bekler, partiler ne kadar büyüktür ve ayırmayı mümkün kılan bayraklar düzenli tutuluyor mu.

Son olarak, yayın ve dağıtım sayıları bir liderlik panosu için cazip sayılardır ve [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) hemen uygulanır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Değişiklikler önemsiz parçalara bölündüğünde dağıtım sayısı yükselir. Bir etiket değiştirildiğinde yayın sayısı yükselir. Bu yüzden aşağıdaki her metrik, nasıl büküldüğüyle ve bükülmeyi yakalayan koruyucu ölçütle birlikte gelir.

## Temel ilkeler

- **Dağıtım ve yayın iki olaydır.** Mimarinin izin verdiği her yerde onları ayrı ölçün ve hâlâ tek olay oldukları yeri açıkça söyleyin.
- **Yazılı bir kurala göre sayın.** Bir dağıtım, adlandırılmış bir ortam başarılı bir sonuçla adlandırılmış bir sürüm aldığında sayılır. Bir yayın, hedeflenen kullanıcılar değişikliğe ulaşabildiğinde sayılır. Kuralı bir kez yazın ve her seferinde aynı şekilde uygulayın.
- **Bir hizmeti tanımlayın, bir kişiyi değil.** Sayılar bir hizmete ve takımına aittir, asla bir bireye değil.
- **Yalnızca işi değil, beklemeyi de ölçün.** Yayın teslim süresi çoğu zaman bir pencere, bir onay ya da bir karar için günlerce beklemeyi içerir. İyileştirme genellikle beklemede yaşar.
- **Küçük partiler kaldıraçtır.** Sıklık ve büyüklük, tek bir şeyin iki görünümüdür. Her sayıyı, her yayının ne kadar değişiklik taşıdığının bir ölçüsüyle eşleştirin.
- **Bayraklar, taşıma maliyeti olan envanterdir.** Çok uzun yaşayan bir bayrak ölü koda ve bir başarısızlık kaynağına dönüşür, bu yüzden bayrak yaşını bayrak kapsamı kadar dikkatle izleyin.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Dağıtım sıklığı | Bir hizmetin üretime ne sıklıkla başarılı bir dağıtım aldığı | Dönemde hizmetin başarılı üretim dağıtımlarının sayısı / dönemdeki gün sayısı; test ya da hazırlık ortamlarına dağıtımlar, başarısız ya da geri alınan dağıtımlar ve değişmemiş bir derlemenin yeniden dağıtımları dışarıda bırakılır; yalnızca yapılandırma dağıtımları ayrı bir seride sayılır | Günlük ya da haftalık dağıtım | Dağıtım boru hattı olay günlüğü | Dağıtım yönetimi | Sürekli teslimat; çalışan bir artım göndermek | Haftalık |
| Yayın sıklığı | Kullanıcıların ulaşabileceği bir değişikliği ne sıklıkla aldığı | Dönemdeki yayın olaylarının sayısı / dönemdeki gün sayısı; yayın olayı, bir değişikliğin ya da bir değişiklik grubunun hedeflenen kullanıcılarına ulaşılabilir hale geldiği andır (tüm kullanıcılar için açılan bir bayrak, aşamalı yayılımın son aşaması ya da bayraksız bir değişikliğin dağıtımı); karanlık lansman, kısmi bir aşamada durdurulan yayılım ve yalnızca dahili kullanıcıları etkileyen bir bayrak değişikliği dışarıda bırakılır | Haftalık ya da aylık yayın | Boru hattı günlüğü ve yayın takvimiyle birleştirilmiş bayrak hizmeti denetim günlüğü | Yayın yönetimi | Her artımın sonunda yayımlamak; yayına hazır bir artımın kullanıma sunulması | Haftalık, aylık gözden geçirilir |
| Yayın teslim süresi | Bitmiş bir değişikliğin kullanıcılar ona ulaşabilmeden önce ne kadar beklediği | Saat, değişiklik ana hatta birleştirildiğinde ve otomatik denetimlerini geçtiğinde (ya da takımınız öyle yazıyorsa ilk taahhütte) başlar ve değişiklik yukarıda tanımlandığı gibi yayımlandığında durur; dönemde yayımlanan değişikliklerin ortancasını ve 85. yüzdelik dilimini bildirin; henüz yayımlanmamış değişiklikler dışarıda bırakılır ve bekleyen işin yaşı olarak bildirilir | Saat ya da gün | Boru hattı ve bayrak denetim günlüğüyle birleştirilmiş sürüm denetimi | Yayın yönetimi; dağıtım yönetimi | Bitmişten teslim edilene teslim süresi; müşteriye teslim süresi | Haftalık, aylık gözden geçirilir |
| Dağıtımdan yayına boşluk | Dağıtılmış kodun kullanıcılar ona ulaşabilmeden önce ne kadar süre karanlıkta kaldığı | Saat, değişiklik üretime dağıtıldığında başlar ve yayımlandığında durur; ortancayı ve 85. yüzdelik dilimi bildirin; dağıtım anında yayımlanan değişikliklerin boşluğu sıfırdır ve dâhil edilir; dağıtılıp sonradan yayımlanmadan kaldırılan değişiklikler dışarıda bırakılır ve ayrıca sayılır | Saat ya da gün | Bayrak denetim günlüğüyle birleştirilmiş boru hattı günlüğü | Yayın yönetimi; dağıtım yönetimi | Karanlık lansman; dağıtımı yayından ayırmak | Aylık |
| Yayın parti büyüklüğü | Bir yayında ne kadar değişikliğin birlikte gönderildiği | Dönemde yayın başına birleştirilmiş değişikliklerin (çekme istekleri ya da iş kalemleri) sayısının ortancası ve 85. yüzdelik dilimi; değişiklik birimi yazılır; her değişiklik, onu ulaşılabilir kılan yayında bir kez sayılır | Yayın başına değişiklik | Yayın olayıyla birleştirilmiş sürüm denetimi ve sorun izleyici | Yayın yönetimi; değişiklik yetkilendirme | Küçük partiler; işin dikey dilimleri | Yayın başına, aylık gözden geçirilir |
| Özellik bayrağı kapsamı | Kullanıcıya görünen değişikliklerden bir bayrağın arkasında yayımlananların payı | Dönemde yayımlanan ve yayın sırasında bir bayrağı olan kullanıcıya görünen değişiklikler / dönemde yayımlanan tüm kullanıcıya görünen değişiklikler; bayraklanamayan altyapı değişiklikleri ve hata düzeltmeleri dışarıda bırakılır ve “kullanıcıya görünen” kuralı yazılır | Yüzde | Sorun izleyici ve yayın günlüğüyle birleştirilmiş bayrak hizmeti | Yayın yönetimi; değişiklik yetkilendirme | Aşamalı teslimat; deney güdümlü geliştirme | Aylık |
| Eskimiş bayrak sayısı | Kaç bayrağın amacını aştığı | Koruduğu değişiklik tüm kullanıcılara ulaştıktan sonra belirtilmiş bir gün sayısından fazla süredir kodda ya da yapılandırmada hâlâ bulunan yayın bayraklarının sayısı; kalıcı operasyonel bayraklar (kapatma anahtarları, yetki bayrakları) etiketlenir ve dışarıda bırakılır; yaş sınırı bayrak türüne göre yazılır | Bayraklar ve yayın bayraklarının gün cinsinden ortanca yaşı | Kod aramasıyla birleştirilmiş bayrak hizmeti envanteri | Yayın yönetimi; bilgi yönetimi | Teknik borç temizliği; bir bayrağı kaldırmanın bitti ölçütü | Aylık |

## Öneriler

### Neyin dağıtım ve neyin yayın sayıldığını yazın

**Birini saymadan önce her iki olayı da tanımlayın.** Bir dağıtım, adlandırılmış bir sürüm adlandırılmış bir ortama ulaştığında ve boru hattı başarı bildirdiğinde sayılır. Bir yayın, hedeflenen kullanıcılar değişikliğe ulaşabildiğinde sayılır ve bayraklı bir değişiklik için bu, kodun geldiği an değil, bayrağın onlar için açıldığı andır. Dışarıda bırakılanları aynı cümlede belirtin: test ortamları, geri almalar, değişmemiş bir derlemenin yeniden dağıtımları ve yalnızca dahili maruziyet.

### İki seriyi yan yana bildirin

**Dağıtım sıklığını ve yayın sıklığını tek bir grafikte gösterin.** Çizgilerin çakıştığı yerde hizmet iki olayı hâlâ birleştirmektedir. Dağıtımların yayınların epey önünde olduğu yerde takım onları ayırmaya başlamıştır ve çizgiler arasındaki mesafe yeteneğin bir işaretidir. Tek bir birleşik sayı bunu gizler ve takımın kullanıcıların hiç görmediği yüksek bir sıklık iddia etmesine izin verir.

### Yayın teslim süresini belirtilmiş bir başlangıçtan kullanıcıya kadar ölçün

**Saatin başlangıcını bir kez seçin ve koruyun.** İlk taahhütte başlamak tüm yolculuğu gösterir, ana hatta birleştirmede başlamak ise yayın boru hattını ve onaylarını yalıtır. Grafikte belirtildiği ve sessizce değiştirilmediği sürece ikisi de kabul edilebilir. Saati dağıtımda değil, yayında bitirin, aksi hâlde metrik kullanıcının neyi beklediğini ölçmeyi bırakır.

### Parti büyüklüğünü sıklığın yanında izleyin

**Her sıklığı bir büyüklükle eşleştirin.** Bir takım, bir değişikliği bağımsız olarak yararlı olmayan dilimlere keserek dağıtım sayısını artırabilir ve gerçek akış aynı kalırken sayı yükselir. Parti büyüklüğünün ortancası ve 85. yüzdelik dilimi dilimlerin gerçek olup olmadığını gösterir. Küçük partilerin gözden geçirilmesi, test edilmesi ve geri döndürülmesi daha kolaydır ve sıklığın vekili olduğu yarar budur.

### Aşamalı yayılım aşamalarını olaylar olarak ele alın

**Bir yayılımın her aşamasını bir zaman damgasıyla kaydedin.** Yüzde 1'den yüzde 10'a ve herkese giden bir yayılım üç zaman damgası verir ve her biri durma fırsatıdır. Aşamayı, maruziyet payını ve bir sonraki aşamaya izin veren sağlık denetiminin sonucunu yakalayın. Bu, gerçek bir sinyal nedeniyle duraklatılan bir yayılımı, takılıp kalan bir yayılımdan ayırmanızı sağlar.

### Bir sahibi ve son kullanma tarihi olan bir bayrak envanteri tutun

**Her yayın bayrağına oluşturulurken bir sahip, bir amaç ve planlanmış bir kaldırma tarihi verin.** Bunları bayrak hizmeti ya da sade bir sicil tutabilir. Sicili aylık gözden geçirin ve eskimiş bayrak sayısını hesaplayın. Tam yayılımdan sonra açık bırakılan bir bayrak, hâlâ dallanan ölü koddur. Kaldırmayı değişikliğin bitti tanımının bir parçası olarak ele alın.

### Bayrakları türe göre etiketleyin

**Geçici yayın bayraklarını kalıcı operasyonel bayraklardan ayırın.** Kapatma anahtarları ve yetki bayrakları tasarım gereği kalıcıdır, yayın bayrakları ise tam yayılımdan sonra kaldırılmalıdır. Türleri karıştırmak eskimiş sayısını gürültülü yapar ve takımları bir olay sırasında birinin ihtiyaç duyduğu bir anahtarı silmeye davet eder. Bayrak oluşturulduğunda türü zorunlu kılın.

### Yayınları olay ve değişiklik kayıtlarına bağlayın

**Yayın tanımlayıcısını olaya ve değişikliğe kaydedin.** Bir yayın olayı olay aracından izlenebilir olmalı, böylece bir olayın nedeni, geçen hafta dağıtılmış ya da bu sabah açılmış olsun, yayımlanan değişikliğe bağlanabilsin. Bağ olmadan kararsızlık ölçümleri başarısızlıkları dağıtım tarihine atfeder ve bir bayrak değişikliğinin neden olduğu başarısızlıkları kaçırır. Üretimdeki bayrak değişiklikleri ITIL anlamında değişikliklerdir ve standart değişiklik olarak önceden yetkilendirilmiş olsalar bile değişiklik yetkilendirmeye görünür olmalıdır (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Dağıtım sıklığı | Bir değişikliği önemsiz dağıtımlara bölmek; değişmemiş derlemeleri yeniden dağıtmak; hazırlık ortamına dağıtımları saymak; yalnızca yapılandırma dağıtımlarını ana seriyle saymak | Yayın parti büyüklüğü ve kullanıcıya görünen bir değişikliği olan dağıtımların payı; ayrı yapılandırma serisi; yanında değişiklik başarısızlık oranı |
| Yayın sıklığı | Dağıtımları yayın olarak yeniden etiketlemek; dahili çalışanlar için açılan bir bayrağı yayın saymak; bir hedefi karşılamak için boş ya da kozmetik değişiklikler yayımlamak; bir yayılımın her aşamasını ayrı bir yayın saymak | Yayının yazılı tanımı; her çeyrekte kullanıcıya görünen değişikliklere karşı denetlenen yayın örneklemi; parti büyüklüğü ve müşteriye dönük değişiklik sayıları |
| Yayın teslim süresi | Saati daha geç başlatmak, örneğin birleştirme yerine onayda; uzun bekleyen değişiklikleri “engellenmiş” olarak dışarıda bırakmak; ortancayı aşağı çekmek için önce önemsiz bir değişiklik yayımlamak; saati dağıtımda bitirmek | 85. yüzdelik dilim ve bekleyen en eski değişikliğin yaşı; sabit yazılı başlangıç; değişikliklerin en yavaş yüzde 10'unun üç aylık incelemesi |
| Dağıtımdan yayına boşluk | Yayını erken kaydetmek için sembolik bir kullanıcı için bir bayrağı açmak; uzun süre karanlıkta kalan kodu “yayın değil” diyerek örneklemin dışında bırakmak; uzun bir boşluktan kaçınmak için karanlık kodu silmek | Yayındaki maruziyet payı (neyin yayımlanmış sayıldığına dair bir eşik); dağıtılıp yayımlanmadan kaldırılan değişikliklerin sayısı; eskimiş bayrak sayısı |
| Yayın parti büyüklüğü | İşi yapay çekme isteklerine bölmek; yayın sayısını düşürmek için ilgisiz değişiklikleri tek bir yayında birleştirmek; bir demetteki yalnızca büyük değişikliği saymak | Bağlam ölçüsü olarak satır ya da dosya cinsinden ortanca değişiklik büyüklüğü; ilgisiz demetleme için yayın örneklemi incelemesi; büyüklüğün yanında sıklık |
| Özellik bayrağı kapsamı | Oranı yükseltmek için önemsiz değişikliklere bayrak eklemek; yalnızca güvenli değişiklikleri bayraklayıp riskli olanları bayraksız göndermek; pratikte kapatma yolu olmayan bir bayrak oluşturmak | Bir bayrak örneklemi için bayrak kapalı test sonuçları; eskimiş bayrak sayısı; bayrağı olmayan olay nedenleri |
| Eskimiş bayrak sayısı | Eskimiş sayısından çıkmak için yayın bayraklarını kalıcı olarak yeniden etiketlemek; bayrağı kodda bırakırken bayrak kaydını silmek; son kullanma tarihlerini incelemeden uzatmak | Sicile karşı dönemsel kod araması; her bayrak türü değişikliğinin gözden geçirilmesi; en eski yayın bayrağının yaşı |

Sağlıklı bir okuma, bayrak kullanan hizmetler için yayınların önünde ilerleyen dağıtımları, mütevazı bir boşluğu, küçük ve sabit bir parti büyüklüğünü ve ortancanın çok üzerinde olmayan bir 85. yüzdelik teslim süresini gösterir. Bayrak kapsamı riskli değişiklikler için yüksektir ve eskimiş bayrak sayısı düşüktür ya da düşmektedir. Büyüyen parti büyüklükleriyle birlikte yüksek bir sıklık ya da şişen bir kalıcı bayrak sayısıyla birlikte sıfır eskimiş sayısı gibi fazla iyi görünen bir okuma, herhangi bir kutlamadan önce bir örneklem denetimini hak eder.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Sürekli dağıtmak ve bayrakla yayımlamak | Dağıtım başına küçük teknik risk; yayın zamanlaması bir iş seçimi haline gelir; hızlı kapatma | Bayrak disiplini ve araç gerektirir; test edilmesi ve kaldırılması gereken kod yolları ekler |
| Dağıtım ve yayını birleştirmek | Açıklaması kolay; sayılacak tek olay; bayrak borcu yok | Her yayın hem teknik hem kullanıcı riski taşır, bu da seyrek yayımlanan büyük partileri teşvik eder |
| Zamanlanmış yayın treni | Destek ve düzenleyiciler için öngörülebilir | Değişiklikler bir sonraki tren için bekler; sayı yeteneği değil, takvimi yansıtır |
| Yüzdeye göre aşamalı yayılım | Kötü bir yayının etkisini sınırlar; her aşamada kanıt üretir | İyi telemetri ve bir sağlık denetimi gerektirir; karışık sürümler bir süre yan yana çalışabilir |
| Hem dağıtımları hem yayınları saymak | Ayırmayı ve beklemeyi gösterir | Bir bayrak denetim günlüğü ya da yayın kayıtlarının boru hattıyla birleştirilmesini gerektirir |

Dağıtımı henüz yayından ayıramayan bir hizmet, örneğin bir uygulama mağazası incelemesiyle dağıtılan bir mobil uygulama, yapabildiğini ölçmelidir: yayın sıklığı, yayın teslim süresi ve parti büyüklüğü, mağaza inceleme süresi ise ayrı bir bekleme olarak bildirilir.

## Takımınızla tartışılacak sorular

**1. “Dağıtım” ve “yayın” sözcüklerini aynı olay için mi kullanıyoruz ve bu olanlarla örtüşüyor mu?**
Üç kişiden canlıya çıkan son değişikliği anlatmasını isteyin ve kodun ne zaman geldiğini ve kullanıcıların onu ilk ne zaman kullanabildiğini not edin. Kolaylaştırıcı, grubun her terim için tek bir cümle üzerinde anlaşmasına ve mevcut her pano sayısının iki olaydan hangisini ölçtüğüne karar vermesine yardım etmelidir.

**2. Bitmiş bir değişikliğin yayın için beklediği en uzun süre nedir ve neden?**
Kullanıcıların hâlâ ulaşamadığı en eski birleştirilmiş değişikliği çekin. Yolunu birleştirmeden şimdiye kadar izleyin ve yol boyunca her beklemeyi yazın.

**3. Dağıtım sayımız iki katına çıksa, bunu iyi haber olarak adlandırmadan önce neyi denetlerdik?**
Grubu, kullanıcılara daha fazla değer ulaşmadan sayının yükselebileceği yolları adlandırmaya davet edin. Parti büyüklüğüne, kullanıcıya görünen bir değişikliği olan dağıtımların payına ve başarısızlık ile yeniden iş rakamlarına bakın. Kolaylaştırıcı, bu denetimlerden hangilerinin panoda zaten bulunduğunu ve kimse bir hedef koymadan önce hangilerinin eklenmesi gerektiğini not etmelidir.

**4. Hangi bayrakları silmekten korkardık ve bu bize ne söylüyor?**
Bayrak siciline göz atın ve en eski üçünü seçin. Her birinin sahibini, neyi koruduğunu ve kaldırılırsa ne olacağını sorun. Silme korkusu genellikle eksik bir testi, eksik bir sahibi ya da amacın eksik bir kaydını gösterir. En az biri için bir kaldırma tarihi ve kaldırmayı güvenli kılacak denetim üzerinde anlaşın.

**5. Bir değişikliğin ne zaman yayımlanacağına kim karar veriyor ve ihtiyaç duyduğu bilgiye sahip mi?**
Yayın bir iş seçimi olduğunda, bunu yapan kişinin yayılımın durumunu, sağlık sinyallerini ve destek hazırlığını görmesi gerekir. Bu olguların bugün nerede durduğunu ve karar vericinin bir yayını ne kadar çabuk geri alabildiğini sorun.

**6. Son çeyrekte hangi yayın en kötü gitti ve hangi ölçüm bizi uyarırdı?**
Sorun çıkaran bir yayın seçin ve zaman çizelgesini birlikte okuyun. Partinin büyük olup olmadığını, boşluğun uzun olup olmadığını, yayılımın aşamaları olup olmadığını ve bir bayrağın zararı sınırlayıp sınırlayamayacağını sorun. Bunun sonucunda eklenecek bir ölçüm ya da sıkılaştırılacak bir eşik seçin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları bu ölçümleri boru hatlarının ve bayraklarının gerçekten maruziyet üzerinde kontrol verip vermediğini görmek için kullanır. En yararlı görünümler boşluk, parti büyüklüğü ve bekleyen en eski değişikliğin yaşıdır, çünkü her biri takımın değiştirebileceği bir şeye işaret eder.

### Hizmet ve operasyon takımları

Operasyon ve destek takımları üretimde neyin ve ne zaman değiştiğiyle ilgilenir. Yayın olayları ve bayrak değişiklikleri onlara görünür olmalı, ideal olarak her olayda bir yayın tanımlayıcısıyla. Aşamalı yayılımlar ve hızlı kapatma, tam bir geri getirme gerektiren olayların sayısını azaltır ve ölçümler operasyon takımlarının işlerini daha sakin kılan kontrolleri istemesine yardımcı olur.

### Liderlik ve yönetişim

Liderler her hizmet için eğilimleri ve dağılımı ve basit bir sorunun yanıtını istemelidir: bitmiş bir değişikliğin kullanıcılara ulaşması ne kadar sürer ve ne kadar güvenle. Takımlar arasında dağıtım sıklığı için bir hedef bölmeye ve yeniden etiketlemeye davet eder, bu yüzden teslim süresi dağılımları gibi sonuçlar ve bilinen beklemelerin kaldırılması için hedefleri tercih edin. Bayrak denetim izi eksiksiz olduğu sürece, yönetişim düşük riskli bayraklı değişiklikleri önceden yetkilendirerek yayın onaylarının yükünü azaltabilir (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

### Müşteriler ve kullanıcılar

Müşteriler dağıtımları değil, yayınları görür. Düzeltmelerin yakında gelmesini, yeni davranışın kendilerini şaşırtmamasını ve kötü bir değişikliğin hızla geri alınabilmesini önemserler. İki olayı ayıran bir takım müşterilere bir özelliğe erken erişim verebilir, tutabileceği bir tarih duyurabilir ve gerisini kaybetmeden bir özelliği geri alabilir. Bu ölçümleri müşteriye dönük olanlarla eşleştirin (bkz. Konu 5.3 “Kullanılabilirlik metrikleri” ve Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir çevrimiçi perakendeci, bir platform takımı ve hizmet masası tarafından desteklenen, tek bir ürün takımına ait bir ürün arama hizmeti işletir. Hizmet bir boru hattı üzerinden üretime dağıtılır ve altı ay önce devreye alınmış bir bayrak hizmeti vardır. Aşağıdaki tüm sayılar açıklayıcıdır.

Geçen çeyrekte takım 52 üretim dağıtımı yaptı, haftada yaklaşık dört. Bir değişikliğin hedeflenen tüm kullanıcılara ulaşılabilir hale geldiği anlar olarak sayılan yayın sıklığı aynı çeyrek için 11'di, haftada yaklaşık bir. Birleştirmeden yayına ortanca yayın teslim süresi 9 gündü ve 85. yüzdelik dilim 21 gündü. Ortanca dağıtımdan yayına boşluk 6 gündü. Ortanca yayın parti büyüklüğü 3 değişiklik ve 85. yüzdelik dilim 14'tü. Kullanıcıya görünen değişiklikler için bayrak kapsamı yüzde 58'di ve 17 yayın bayrağı tam yayılımı 30 günden fazla geçmişti.

Manipülasyon riski zaten görünür. Bazı dağıtımlar yalnızca yapılandırmaydı ve boru hattı her birini dağıtım olarak saydı, bu yüzden pano artık ayrı bir yapılandırma serisi gösteriyor ve aylık inceleme kullanıcıya görünen bir değişiklik için 10 dağıtımdan örneklem alıyor. Bir bölge yöneticisi dağıtım sayısını görür ve takımdan onu başka bir takımın rakamıyla eşleşecek biçimde yükseltmesini ister. Takım lideri hedefe direnir ve bunun yerine sayıların tam kümesini aylık incelemeye getirir. İnceleme, boşluğun uzun olduğunu çünkü yayınların haftalık bir pazarlama ve destek brifingini beklediğini, 17 eskimiş bayraktan dördünün kimsenin test etmediği kod yollarını koruduğunu ve parti büyüklüğünün 85. yüzdelik diliminin bir tatil dondurmasından önce ilgisiz değişiklikleri toplayan birkaç yayından geldiğini bulur.

Karar günlüğüne kaydedilen karar dört bölümlüdür. Destek ve pazarlama daha kısa, haftada iki kez yapılan bir brifinge katılacak, böylece yayın kararı artık haftalık aralığı beklemeyecektir. Her yayın bayrağı bir sahip ve kaldırma tarihi alır ve test edilmemiş dört eskimiş bayrak önümüzdeki iki hafta içinde kaldırılır. İlgisiz değişiklikleri toplayan yayınlar, yayın kaydında belirtilmiş bir gerekçe ister. Ve takım ortak dağıtım hedefini reddeder, bunun yerine her hizmetin yayın teslim süresi dağılımının ve bayrak hijyeninin ortak bir görünümünü sunar. Değişiklik yöneticisi, boru hattı denetimlerini geçen bayraklı değişiklikleri standart değişiklik olarak ele almayı ve gelecek çeyrekte bir inceleme yapmayı kabul eder. Sonraki çeyrekte (açıklayıcı) ortanca yayın teslim süresi 5 güne düşer, eskimiş bayrak sayısı 6'ya düşer ve değişiklik başarısızlık oranı sabit kalır, bu yüzden deney sürer.

## Sektör mercekleri

**Girişim.** Bir girişimin çoğu zaman tek bir hizmeti ve kodda bir bayrak kitaplığı vardır, bu yüzden dağıtım ve yayın ucuza ayrılabilir. Son kullanma tarihleri olan bayrakların basit bir siciline sahip olun ve yüzdelik dilimlere güvenmeden önce yeterli hacmi bekleyin.

**Küçük işletme.** Küçük bir işletme, yayını tedarikçinin kontrol ettiği paketlenmiş ya da satın alınmış yazılım çalıştırıyor olabilir. Yararlı ölçümler, tedarikçinin yayını ile işletmenin onu benimsemesi arasındaki süre ve büyük bir sürümle birlikte gelen değişiklikler partisidir. Aradaki beklemenin görünür olması için tedarikçinin yayın tarihlerini ve kendi dağıtım tarihlerinizi kaydedin.

**Kurumsal.** Bir kurum, farklı yayın tarzlarında çok sayıda hizmetle, merkezi bir değişiklik süreciyle ve paylaşılan ortamlarla karşılaşır. Ana iş, dağıtım ve yayın tanımlarını takımlar ve tedarikçiler arasında kararlaştırmak ve farklılıklara saygı gösteren bir toplama tutmaktır. Yönetişim için dağılımı ve eğilimleri kullanın ve bayrak platformunu bir sahibi olan ortak bir hizmet olarak ele alın.

**Kamu ve kamu sektörü.** Yayınlar çoğu zaman sabit tarihlere, mevzuata, satın alma döngülerine ya da güvence kapılarına bağlıdır, bu yüzden yayın sıklığı iyi nedenlerle düşük olabilir. Dağıtım sıklığı ve dağıtımdan yayına boşluk, riskin ne kadarının erken alındığını ve ne kadarının tarihi beklediğini yine de gösterebilir. Dış kapılar için beklemeyi takımın kendi boru hattı süresinden ayrı bildirin.

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bu ölçümlerin motivasyonu, bir değişikliği bitirmek ile değerini teslim etmek arasındaki riski ve gecikmeyi azaltmaktır. Seyrek yayımlanan büyük partiler olay başına daha fazla değişiklik taşır, bu yüzden bir başarısızlığı teşhis etmek ve geri döndürmek daha zordur. Dağıtımı yayından ayırmak, takıma teknik riski erken ve küçük miktarlarda, kullanıcı riskini ise bilinçli olarak alma yolu verir. Ölçümler ayırmanın gerçek olup olmadığını ve değişikliğin nerede beklediğini gösterir.

Maliyetler ölçülüdür. Dağıtım ve yayın olaylarını toplamak, sürüm denetimi ve sorun izleyiciyle birleştirilmiş boru hattı günlüğünü ve bayrak denetim günlüğünü gerektirir, bu bir kerelik bir entegrasyondur ve ardından ara sıra bakım gelir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”). Bayrak uygulamasının kendisinin işletme maliyetleri vardır: platform ya da kitaplık, sicil, bayraklı bir değişikliğin her iki yolunun test edilmesi ve süresi dolan bayrakların temizlenmesi. Ana gizli maliyet, eskimiş bayrak sayısının görünür tuttuğu bayrak borcudur.

Getiri, çoğu takımın kendi verilerinde gözlemleyebileceği bir örüntüyü izler. Daha kısa yayın teslim süresi, bir değişikliğin kullanıcılara yardımcı olup olmadığına dair daha hızlı bir geri bildirim döngüsü demektir. Daha küçük partiler daha kolay teşhis ve daha kolay geri döndürme demektir. Daha kısa bir dağıtımdan yayına boşluk, bitmiş işin gerçekleşmeden beklediği sürenin daha az olması demektir. Değer için bir rakam uydurmayın. Takımın haftalarca karanlıkta kalan değişikliklere dair kendi örneklerini ve kendi ölçümlerinin eğilimini kullanın.

## Anti-desenler ve tuzaklar

- **Her takım için bir dağıtım sıklığı hedefi belirlemek.** Bölmeye ve yeniden etiketlemeye davet eder. Daha dar bir teslim süresi dağılımı gibi sonuç hedefleri belirleyin ve sıklığın onu izlemesine izin verin.
- **Yayın trenini yeteneğin kanıtı saymak.** Sabit bir takvim sabit bir sayı verir ve bekleyen işin yaşını gizler. Kullanıcıların ulaşamadığı birleştirilmiş en eski değişikliğin yaşını izleyin.
- **Yapılandırma değişikliklerini ana seride dağıtım olarak saymak.** Sayıyı şişirir. Ayrı bir seri tutun ve onu ana serinin yanında gösterin.
- **Bayrakları asla kaldırmamak.** Kod, ölü dalları ve test edilmemiş kombinasyonları biriktirir. Her yayın bayrağına bir sahip ve bir kaldırma tarihi verin ve kaldırmayı bitti tanımının bir parçası olarak ele alın.
- **Üretimde bayrakları kayıtsız değiştirmek.** Bir bayrak değişikliği, üretim davranışında bir değişikliktir. Onu denetim günlüğüne gönderin ve değişiklik yetkilendirmeye görünür kılın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve saatler | “Dağıtım” ve “yayın” birbirinin yerine kullanılır; herkes farklı sayar | Birkaç takım kendi tanımlarını yazar | Metrik sicilinde saatler ve dışarıda bırakılanlarla dağıtım ve yayının tek yazılı tanımı | Tanım değişiklikleri kaydedilir ve grafiklerde işaretlenir; örneklemler her çeyrekte denetlenir | Tanımlar, karar vermeye bilgi sağlamayı bıraktığında tedarikçiler ve yönetişimle birlikte gözden geçirilir |
| Dağıtım ve yayının ayrılması | Her dağıtım bir yayındır | Bazı takımlar riskli değişiklikler için bayrak ya da aşamalı yayılım kullanır | Bayraklar ve aşamalı yayılımlar, kaydedilen yayın olaylarıyla standart bir seçenektir | Boşluk, parti büyüklüğü ve yayılım aşamaları eğilim olarak izlenir ve gözden geçirilir | Yayın zamanlaması ilgili hizmetler için takımlar ve tedarikçiler arasında koordine edilir |
| Veri yakalama | Sayılar biletlerden ve sohbetten elle derlenir | Bazı hizmetler için boru hattı verisi; yayınlar elle kaydedilir | Dağıtımlar, yayınlar ve bayrak değişiklikleri çoğu hizmet için otomatik yakalanır | Veri kalitesi (bağ oranı, örnek denetimi) ölçülür ve eğilim olarak izlenir | Olaylar üzerinde anlaşılmış arayüzler üzerinden takımlar ve tedarikçiler arasında paylaşılır |
| Bayrak hijyeni | Envanter yok | Bazı takımlarda gayriresmî liste | Her yayın bayrağı için sahibi, türü ve son kullanma tarihi olan sicil | Eskimiş bayrak sayısı eğilim olarak izlenir; kaldırma bitti tanımının parçasıdır ve denetlenir | Bayrak platformu otomatik son kullanma hatırlatıcılarıyla ortak bir hizmet olarak yönetilir |
| Sayıların kullanımı | Tek bir sayı olarak yukarıya bildirilir | Takımlar zaman zaman kendi grafiklerine bakar | Sahip takım tarafından aylık, başarısızlık ve yeniden iş rakamlarının yanında gözden geçirilir | Eğilimler, bir koruyucu ölçütle finanse edilen iyileştirmeyi besler | Dağılım ve eğilimler kurum genelinde platform yatırımını ve değişiklik politikasını bilgilendirir |

## Kontrol listesi

- [ ] “Dağıtım” ve “yayın”, her biri için saat olayları ve dışarıda bırakılanlarla birlikte yazılı olarak tanımlanmıştır.
- [ ] Üretime dağıtımlar, test ortamları dışarıda bırakılarak boru hattından otomatik yakalanır.
- [ ] Yayın olayları bayrak denetim günlüğünden, yayılım aşamalarından ya da yayın kayıtlarından yakalanır.
- [ ] Yayın teslim süresi belirtilmiş bir saat başlangıcı kullanır ve ortancayı ve 85. yüzdelik dilimi bildirir.
- [ ] Dağıtımdan yayına boşluk ve yayın parti büyüklüğü sıklığın yanında bildirilir.
- [ ] Yalnızca yapılandırma dağıtımları ayrı bir seride görünür.
- [ ] Her yayın bayrağının bir sicilde sahibi, türü ve son kullanma tarihi vardır.
- [ ] Eskimiş bayraklar aylık gözden geçirilir ve kaldırılmaları bitti tanımının parçasıdır.
- [ ] Yayın tanımlayıcıları olay ve değişiklik kayıtlarında görünür.
- [ ] Dağıtım ve yayınlardan bir örneklem her çeyrekte tanımlara karşı denetlenir.
- [ ] En uzun beklemeye bağlı bir iyileştirme deneyi, bir gözden geçirme tarihiyle sürmektedir.

## Yapay zekâ istemleri

**Bir hizmet için dağıtım ve yayın tanımlarının taslağını hazırlayın.**

```text
[hizmet adı] için yayın ve dağıtım metriklerini tanımlıyorum. Araçlarımız
[sürüm denetimi barındırıcısı, CI/CD sistemi, bayrak hizmeti, sorun izleyici,
ITSM aracı]. Yayın tarzımız [sürekli, haftalık tren, aylık, mağaza incelemeli ya
da başka]. Dağıtım sıklığı, yayın sıklığı, yayın teslim süresi, dağıtımdan
yayına boşluk, yayın parti büyüklüğü, özellik bayrağı kapsamı ve eskimiş bayrak
sayısı için, saatin nerede başlayıp durduğunu, neyin sayıldığını ve dışarıda
bırakıldığını, veri kaynağını ve çözülmesi gereken bir belirsizliği belirten bir
tanım taslağı hazırlayın. Kıyaslama değerleri uydurmayın ve uygulamamızın
yayımlanmış herhangi bir performans bandıyla eşleştiğini ileri sürmeyin.
Varsayımlarınızı ve tanımları bitirmek için yanıtlamam gereken soruları
listeleyin.
```

**Bir yayın metrik kümesini manipülasyon riskleri açısından denetleyin.**

```text
Yayın ve dağıtım metriklerimizi şöyle hesaplayıp bildiriyoruz: [her metriğin,
veri kaynağının ve nasıl bildirildiğinin açıklaması]. Hedef kitle [takım,
liderlik ya da yönetişim kurulu] ve varsa hedefler [hedefler ya da yok]. Her
metrik için, sayının gerçek bir iyileşme olmadan şişirilebileceği, gizlenebileceği
ya da çarpıtılabileceği makul yolları listeleyin ve bunu yakalayacak eşleştirilmiş
bir koruyucu metrik ya da uygulama önerin. İstatistik uydurmayın.
Varsayımlarınızı ve daha kesin olmak için ihtiyaç duyacağınız bilgileri
listeleyin.
```

**Dağıtım, yayın ve bayrak dışa aktarımını çözümleyin.**

```text
Şu alanlarla küçük bir dışa aktarım yapıştıracağım: [alanları listeleyin, örneğin
dağıtım kimliği, dağıtım zamanı, sonuç, değişiklik kimlikleri, bayrak adı, bayrak
açılış zamanı, maruziyet payı, yayın zamanı]. [başlangıç tarihi] ile [bitiş
tarihi] arasında [hizmet adı] için [sayı] dağıtımı ve [sayı] bayrağı kapsıyor.
Yayın teslim süresinin ve dağıtımdan yayına boşluğun ortancasını ve 85.
yüzdelik dilimini, parti büyüklüğü dağılımını ve tam yayılımdan beri [yaş sınırı]
günü aşan bayrakların listesini, her birinin arkasındaki sayıları göstererek
hesaplayın. Eksik bağları ya da şüpheli zaman damgaları olan kayıtları
işaretleyin. Verinin ötesinde çıkarım yapmayın ya da sonucu dış kıyaslama
değerleriyle karşılaştırmayın. Varsayımlarınızı ve sonuçları sınırlayan veri
kalitesi sorunlarını listeleyin.
```

**Bir bayrak temizliği ve yayın bekleme deneyi planlayın.**

```text
En uzun yayın beklememiz [tarih aralığı ve sayılarla beklemenin açıklaması] ve
bayrak sicilimiz [sayı] yayın bayrağı içeriyor, bunların [sayı] tanesi son
kullanma tarihini geçti. Kısıtlar [kısıtlar, örneğin düzenlemeye tabi yayınlar,
mağaza incelemesi, paylaşılan test ortamı]. Her biri bir hipotez, etkiyi
gözlemlemenin bir yolu, bir koruyucu metrik ve bir riskle birlikte dört ila altı
haftalık üç küçük deney önerin. Beklenen iyileşme rakamları uydurmayın.
Varsayımlarınızı ve başlamadan önce neyi denetlememiz gerektiğini listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): ilgili değişiklik, yayın ve olay konularını ve her yayın metriğinin yanında yer alması gereken koruyucu ölçütü bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konunun gözden geçirilmiş bir sürümünün saatlerini, manipülasyon yollarını ve çapraz başvurularını tutarlı tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- Bir dağıtım bir sürümü bir ortama koyar ve bir yayın bir değişikliği kullanıcılara ulaşılabilir kılar. Yapabildiğiniz her yerde ikisini ayrı ölçün.
- Yayın teslim süresi, belirtilmiş bir başlangıçla yayında bitmeli ve bir ortanca ve bir 85. yüzdelik dilim olarak bildirilmelidir.
- Dağıtımdan yayına boşluk ve parti büyüklüğü, ayırmanın gerçek olup olmadığını gösterir ve sıklığı bölmeye ve yeniden etiketlemeye karşı korur.
- Özellik bayrakları ayırmayı mümkün kılar ve bir maliyet taşır, bu yüzden kapsamı ve eskimiş bayrakları sahipler ve son kullanma tarihleriyle izleyin.
- Yazılı kurallara göre sayın, yayınları olaylara ve değişikliklere bağlayın ve bir hizmeti diğer takımlarla değil, kendi geçmişiyle karşılaştırın.

## Kaynaklar ve ileri okuma

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
