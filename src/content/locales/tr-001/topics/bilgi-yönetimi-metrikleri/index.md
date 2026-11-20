# Bilgi yönetimi metrikleri

**Bilgiyi, ne kadarının var olduğuna göre değil, ihtiyaç anında kullanılıp güvenilip güvenilmediğine göre ölçün: bağlantı oranını, yeniden kullanımı, güncelliği ve bulunabilirliği birlikte izleyin ve her makale sayısını bir puan olarak değil, işe dair bir soru olarak ele alın.**

## Genel bakış ve motivasyon

Bir hizmet takımı her gün bilgi biriktirir: bir hizmetin nasıl geri getirileceği, kafa karıştırıcı bir hata iletisinin gerçekte ne anlama geldiği, geçen sefer hangi geçici çözümün tuttuğu. [Bilgi yönetimi](https://en.wikipedia.org/wiki/Knowledge_management), bu bilgiyi ona ihtiyaç duyacak bir sonraki kişiye sunulabilir kılma disiplinidir. ITIL 4'te (AXELOS tarafından yayımlanan çerçevenin 2019 baskısı ve bu kitabın geniş biçimde belgelenmiş temeli) bilgi yönetimi başlı başına bir uygulamadır ve [ITIL](https://en.wikipedia.org/wiki/ITIL) ayrıca olay ele almayı, sorun ele almayı ve hizmet masasını desteklemesini bekler. Bu konu, bu desteğin gerçek olup olmadığının nasıl anlaşılacağını ele alır.

Bilgi yönetiminin kullanılabilir çıktısının çoğu bir [bilgi tabanında](https://en.wikipedia.org/wiki/Knowledge_base) son bulur: makalelerin, çalışma kitaplarının, bilinen hata kayıtlarının ve kısa nasıl yapılır yanıtlarının deposu. [Çalışma kitabı](https://en.wikipedia.org/wiki/Runbook) (runbook), rutin bir operasyon ya da bir kurtarma için yazılı bir adım kümesidir. Makaleler, bir takımın bildiklerinin açık kısmıdır. Deneyimli insanların [örtük bilgisi](https://en.wikipedia.org/wiki/Tacit_knowledge), örneğin bir alarmın gürültü olduğu hissi, tamamen yazıya dökülemez ve bu konudaki hiçbir metrik onu doğrudan ölçmez.

ITIL görüşünde bilgi, bir yaşam döngüsü olan yönetilen bir varlıktır: oluşturulur, gözden geçirilir, yayımlanır, kullanılır ve emekliye ayrılır. Çevik görüşte belgelerin yerini hak etmesi gerekir, konuşma ve eşli çalışma çok şey taşır ve yazılı bilgi, işi bitirmenin bir yan ürünüdür. Her iki görüş de sınavda uzlaşır: bilgi, birine gerçek bir sorunu onsuz çözebileceğinden daha hızlı ya da daha iyi çözmesi için yardımcı oldu mu?

İki görüşü en doğrudan bağlayan yöntem, Consortium for Service Innovation'ın bir metodolojisi olan [Bilgi Merkezli Hizmettir (Knowledge-Centered Service, KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support). KCS'te bilgi sonradan değil, sorun çözülürken yakalanır ve iyileştirilir. İnsanlar iki döngüde çalışır. Çözme döngüsü çözüm anıdır: var olan bir makaleyi ara, bulunursa yeniden kullan ve iyileştir, bulunamazsa bir tane oluştur. Evrilme döngüsü, bilginin nasıl performans gösterdiğini inceleyen ve çevresindeki sistemi iyileştiren daha uzun döngüdür. KCS ayrıca, çözülen taleplerin makalelere bağlanma oranı gibi kendi göstergelerini de önerir. Bu konu bu fikirleri tedarikçiden bağımsız biçimde özetler; KCS'i resmen benimseyen takımlar Consortium'un kendi uygulama kılavuzunu okumalıdır.

Bir bilgi tabanındaki makale sayısı bir sonuç değil, bir envanterdir ve ihmalle de özenle de aynı kolaylıkla artar. Aşağıdaki metrikler bunun yerine bir kullanım anına bağlıdır: kapatılan bir talep, yapılan bir arama, bir okuyucunun tepkisi. Bunlar bile çarpıtılabilir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

İletişim ve ele alma ölçümleri [hizmet masasında](https://en.wikipedia.org/wiki/Service_desk) yaşar (bkz. Konu 3.1 “Hizmet masası metrikleri”). Hacim ve tekrar örüntüleri olay verisinden gelir (bkz. Konu 3.2 “Olay hacmi ve önceliği”). Kullanıcıların bir temsilci olmadan makaleleri tükettiği self servis başarısı ayrıca ele alınır (bkz. Konu 3.7 “Self servis ve otomasyon metrikleri”). Bu konu, bilginin kendi sağlığıyla ve onu sorunları çözen insanların kullanımıyla ilgilenir.

## Temel ilkeler

- **Kullanımı iş anında ölçün.** Çözülmüş bir talebe bağlanan ya da bir aramayla bulunan bir makale değerin kanıtıdır. Yalnızca var olan bir makale değildir.
- **Bilgiyi iş akışı içinde yakalayın.** Çözüm sırasında yazılan bilgi, ayrı bir belgeleme çabasında yazılandan daha taze ve daha ucuzdur; bu yüzden metrikler yakalamayı işi bitirmenin bir parçası olarak ödüllendirmelidir.
- **Güncelliği kullanımla birlikte okuyun.** Eski, yanlış demek değildir. İnceleme emeği, çoğunlukla okunmayan sayfalardan oluşan bir kataloğa eşit dağıtılmak yerine, sık kullanılan makalelere aittir.
- **İlgililik için örnekleyin.** Bir talep ile bir makale arasındaki bağlantı yalnızca birinin bağlantıyı kurduğunu kanıtlar. Makalenin gerçekten uyup uymadığına dair küçük bir insan örneklemi, bağlantının bir anlam taşıyıp taşımadığını söyler.
- **Takımları ve bilgi alanlarını tanımlayın, bireyleri asla.** Kişi başına katkı sayıları ortak bir varlığı bir yarışmaya dönüştürür ve insanlara çöp yazmayı öğretir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).
- **Her hacim metriğini bir kalite sinyaliyle eşleştirin.** Bağlantı oranını ilgililikle, makale oluşturmayı yinelenenlerle, yeniden kullanımı okuyucu geri bildirimiyle.

## Metrik tanımları

Tablo yedi metriği listeler. Zaman pencereleri (güncellik için inceleme dönemi gibi) bir takımın yaptığı ve yazdığı seçimlerdir; buradaki hiçbir değer bir kıyaslama değildir. Baştan sona “talep” (case), ITSM (BT hizmet yönetimi) aracındaki bir olay ya da hizmet talebi kaydı anlamına gelir ve büyük olaylar, oranları çarpıtmasınlar diye ayrı raporlanır (bkz. Konu 3.4 “Büyük olay metrikleri”).

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bilgi bağlantı oranı | Çözüm anında bağlı en az bir bilgi makalesi olan çözülmüş taleplerin payı | Dönemde çözülen ve en az bir bağlı makalesi olan talepler / dönemde çözülen talepler. Çözüm tarihini sayar; büyük olaylar, yinelenen olarak kapatılan talepler ve hiçbir insan emeği olmadan otomatik kapatılan talepler hariç tutulur | yüzde | ITSM aracı: talep ve makale bağlantı tabloları | Bilgi yönetimi; olay yönetimi | Tamamlanma tanımı, öğrenilenleri yakalamayı içerir | Takım için haftalık; gözden geçirme için aylık |
| Yeniden kullanım oranı | Makale bağlantılarının, o talep sırasında oluşturulana değil, var olan bir makaleye işaret eden payı | Talep açılmadan önce var olan makalelere bağlantılar / dönemde çözülen taleplerde yapılan tüm makale bağlantıları. Talep kapandıktan sonra eklenen bağlantılar hariç tutulur | yüzde | ITSM aracı: makale oluşturma tarihi, talep açılış tarihine karşı | Bilgi yönetimi; sürekli iyileştirme | Yeniden iş yerine yeniden kullanım; kod tabanının ve belgelerinin ortak sahipliği | Aylık |
| Makale güncelliği | Belirtilen bir inceleme penceresi içinde gözden geçirilmiş ya da kullanılıp doğru onaylanmış kullanımdaki makalelerin payı | İnceleme ya da onaylı kullanım tarihi pencere içinde olan kullanımdaki makaleler / kullanımdaki makaleler. Bir makale, son 12 ayda (bir takım seçimi) bir talebe bağlandıysa ya da bir okuyucu tarafından görüntülendiyse kullanımdadır; taslaklar ve emekliye ayrılmış makaleler hariç tutulur | yüzde | Bilgi tabanı meta verisi ve görüntüleme günlüğü | Bilgi yönetimi; hizmet masası | Belgelerin birikim listesi iyileştirmesi; retrospektif eylemleri | Aylık |
| Sıfır sonuçlu arama oranı | Hiçbir makale döndürmeyen bilgi aramalarının payı | Sıfır sonuçlu aramalar / tüm aramalar. Botların ve otomatik kontrollerin aramaları hariç tutulur; bir dakika içinde tekrarlansa bile her arama bir kez sayılır | yüzde | Bilgi tabanı ya da portal arama günlüğü | Bilgi yönetimi; hizmet masası; hizmet talebi yönetimi | Karşılanmamış kullanıcı ihtiyacının keşfi; birikim listesi girdisi | Haftalık |
| Faydalılık oranı | Makalenin yardımcı olduğunu söyleyen okuyucu geri bildiriminin payı, yanıt oranıyla birlikte gösterilir | Faydalı oylar / (faydalı oylar + faydalı değil oyları), dönemdeki makaleler için; yanıt oranı = geri bildirim oyları / makale görüntülemeleri | yüzde, yanıt oranıyla birlikte | Bilgi tabanı geri bildirim aracı ve görüntüleme günlüğü | Bilgi yönetimi; müşteri deneyimi | Belgeler üzerine paydaş gözden geçirme geri bildirimi | Aylık |
| Yayımlama süresi | Bir makale taslağının oluşturulduğu andan, gözden geçirilip hedef kitlesine görünür olduğu ana kadar geçen süre | Saat taslak oluşturulduğunda başlar; yayımda (ya da ilk onaylı görünür durumda) durur. “Beklemede, ürün yayınını bekliyor” durumundaki süre hariç tutulur; ortanca ve 85. yüzdelik dilim olarak raporlanır | gün (ortanca ve 85. yüzdelik dilim) | Bilgi tabanı iş akışı geçmişi | Bilgi yönetimi | Bir iş kaleminin başlangıçtan bitişe teslim süresi (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”) | Aylık |
| Katkı genişliği | Makale oluşturma ve iyileştirmenin takım genelindeki yayılımı, kimse adlandırılmadan ölçülür | Dönemde bir makale oluşturan ya da iyileştiren farklı katkıda bulunanlar / dönemde talep çözen takım üyeleri. Yalnızca bir takım için raporlanır, asla isim listesi olarak değil | yüzde | Takım üyeliğiyle birleştirilmiş bilgi tabanı düzenleme geçmişi | Bilgi yönetimi; sürekli iyileştirme | Ortak sahiplik; eşli çalışma ve sürü halinde çalışma (swarming) | Üç aylık |

Bilgi bağlantı oranının kolayca gözden kaçan bir saati vardır. Bağlantı, bir hafta sonra birinin düzenleme yaptığında değil, talep çözüldüğünde var olmalıdır; çünkü geç bağlama temizliği ölçer ve çözüm sırasındaki kullanım hakkında hiçbir şey söylemez. Yeniden kullanım oranı güvenilir bir makale oluşturma tarihine bağlıdır. Makaleler taşınır ya da toplu içe aktarılırsa oluşturma tarihleri sıfırlanır ve taşıma işaretlenene kadar oran yanıltır.

## Öneriler

### Bilginin ne için olduğuna karar verin

**1. Her bilgi metriğini bir kullanım senaryosuna bağlayın.** Bilginin hizmet verdiği insanları adlandırın: ilk temasta çözen hizmet masası analistleri, bir uyarıyı ele alan nöbetçi mühendisler ya da kendi kendine yardım eden kullanıcılar. Her hedef kitle farklı ölçümlere ihtiyaç duyar. Nöbetçi bir mühendis için bir çalışma kitabı, adımların hizmeti geri getirip getirmediğine göre, bir parola sıfırlama makalesi ise kullanıcının masayla iletişimi bırakıp bırakmadığına göre değerlendirilir. Bunu kayıt defterinize kaydedin (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

**2. Makale sayılarıyla değil, bağlantı oranı ve ilgililikle başlayın.** Bağlantı oranı bilginin çözüm anına girip girmediğini gösterir. Baştan, bir kişinin 20 ya da 30 bağlı talebi okuyup makalenin uyup uymadığını yargıladığı küçük bir aylık örneklemle eşleştirin. Bağlantıların yarısı ilgisiz olan yüzde 70'lik bir bağlantı oranı, dürüst bağlantılarla yüzde 40'lık bir orandan daha kötüdür; çünkü birincisi, ikincisinin açığa çıkardığı bilgi boşluğunu gizler.

**3. “Makale yok” ile “makale var ama bulunamadı”yı ayırın.** Bir talep bağlantısız kapandığında nedenler farklıdır ve çareler de öyle. “Makale yoktu” ve “makale bulunamadı” gibi kısa bir kapanış seçimi ekleyin ve bunları bağlantısız taleplerin payları olarak raporlayın. Birincisi yazılacak içeriğe, ikincisi aramaya, adlandırmaya ve yapıya işaret eder. Seçimi masayı yavaşlatacağı yerde isteğe bağlı tutun ve bunun yerine örnekleyin.

### Bilgiyi iş biterken yakalayın

**4. Yakalamayı tamamlanma tanımının bir parçası yapın.** Çevik bir takımda, bir hizmetin davranışını değiştiren bir iş kalemi, çalışma kitabı, bilinen hata kaydı ya da yardım makalesi güncellenene kadar bitmiş sayılmaz. Hizmet masasında, keşif gerektiren bir talep, keşif yakalanana ya da var olan bir makale iyileştirilene kadar çözülmüş sayılmaz. Bu, KCS'in çözme döngüsünde çalışma fikridir ve yazmanın maliyetini düşük tutar, çünkü yazan kişinin bağlamı tazedir.

**5. Hafif bir taslak durumuna izin verin.** Birçok takım, herkesin görebilmesinden önce her makalenin ağır bir gözden geçirmeden geçmesi gerektiği için bilgiyi kaybeder. KCS tarzı uygulama, takıma görünen devam eden bir makaleyi, daha geniş bir hedef kitleye görünen doğrulanmış bir makaleden ayırır. Yavaş gözden geçirmeler belirsiz bir şikâyet olarak değil bir kuyruk olarak görünsün diye yayımlama süresini her iki aşama için ayrı ayrı, ortanca ve 85. yüzdelik dilim olarak ölçün (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**6. Oluşturmak yerine iyileştirmeyi tercih edin.** Büyüyen bir neredeyse yinelenen makale yığını aramayı kötüleştirir ve güncelliği sürdürmeyi zorlaştırır. Yeniden kullanım oranını oluşturma sayısının yanında izleyin ve oluşturma artarken yeniden kullanım düşüyorsa yinelenenleri arayın. Birleştirmeyi ve emekliye ayırmayı kolay ve görünür kılın ve bir birleştirmeyi olumlu bir katkı olarak sayın.

### Bilgiyi güncel ve bulunabilir tutun

**7. Kullanılan makaleleri gözden geçirin.** İnceleme emeğini kullanımın yüksek olduğu yere yoğunlaştırın. Kullanımdaki makaleleri ne sıklıkta bağlandıklarına ya da görüntülendiklerine göre sıralayın ve en üstteki grup için uzun kuyruktan daha kısa bir inceleme penceresi belirleyin. Kimsenin okumadığı eskimiş bir makale az maliyetlidir; çözümlerin üçte birinde görünen eskimiş bir makale yüzlerce talebi yanıltabilir. Tüm tabanın ortalaması onu gizlemesin diye, yoğun kullanılan grup için güncelliği kendi satırı olarak raporlayın.

**8. Arama başarısızlıklarını birikim listesi kalemleri olarak ele alın.** En sık sıfır sonuçlu aramaları her ay okuyun ve her biri için bir makale yazıp yazmayacağınıza, bir eş anlamlı ekleyip eklemeyeceğinize, bir makaleyi yeniden adlandırıp adlandırmayacağınıza ya da sorunun başka bir yere ait olduğunu kabul edip etmeyeceğinize karar verin. Bu, bir metriği takımın üzerinde çalışabileceği kısa, somut bir listeye dönüştürür. Ayrıca gerçek sözcük dağarcığını da gösterir; çünkü kullanıcılar ve analistler nadiren hizmet kataloğunun (service catalog) kullandığı sözcükleri kullanır.

**9. Oyların ardındaki sözcükleri okuyun.** Faydalılık oranı ucuz ve gürültülüdür. Yanıt oranları genellikle düşüktür ve güçlü görüşlere doğru çarpıktır. Yanıt oranını faydalılık oranının yanında gösterin ve en çok görüntülenen makalelerdeki yazılı yorumları kalıcı bir gözden geçirmede okuyun. “4. adım yeni sürümde artık yok” gibi tek bir yorum, etiketsiz bin oydan daha değerlidir.

**10. Bilgiyi sorunlara ve olay sonrası incelemelere bağlayın.** Aynı makaleyle tekrar tekrar çözülen yinelenen bir olay, altta yatan nedeni arayan ve makaleye duyulan ihtiyacı ortadan kaldırabilecek sorun yönetimi için bir sinyaldir (bkz. Konu 4.1 “Sorun yönetimi metrikleri”). Bilinen hata kayıtları ve olay sonrası inceleme dersleri, kendi yaşam döngüleri olan bilgi varlıklarıdır (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri” ve Konu 4.6 “Teknik borç ve bilinen hatalar”). Her çeyrek en çok bağlanan ilk on makaleye bakın ve nedeni düzelterek hangilerinin emekliye ayrılması gerektiğini sorun.

### Sıralamadan yönetin

**11. Katkıyı takım düzeyinde raporlayın.** Katkı genişliği, bilgi çalışmasının paylaşılıp paylaşılmadığını ya da iki kişide yoğunlaşıp yoğunlaşmadığını söyler. Bu, görülmeye değer bir risktir, çünkü iki kişilik bir [otobüs faktörü](https://en.wikipedia.org/wiki/Bus_factor) ile aynı örüntüdür. Asla yazarların bir liderlik tablosuna dönüşmemelidir; bu, düzenleme miktarını ödüllendirir ve insanlara makaleleri bölmeyi ya da önemsiz değişiklikler yapmayı öğretir. Bir yoğunlaşma ortaya çıkarsa, bunu zaman, destek ve yazma izni hakkında bir takım konuşması olarak ele alın (bkz. Konu 9.4 “Beceri ve öğrenme metrikleri”).

**12. Artık yardımcı olmayan ölçümleri emekliye ayırın.** Kimse bağlantı oranına göre hareket etmiyorsa, dikkati ilgililiğe ya da yoğun kullanılan grubun güncelliğine kaydırın. Tanım değişikliklerini gerekçesiyle kaydedin, çünkü değişen bir formül eğilim çizgisini kırar (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

## Manipülasyon yolları ve koruma önlemleri

Tanımlar tablosundaki her metrik burada yer alır. Bilgi metrikleri özellikle açıktadır; çünkü bağlama ya da gözden geçirme eylemi hızlı bir tıklamadır, gerçek değer ise içeriktedir.

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruma metriği ya da uygulaması |
| --- | --- | --- |
| Bilgi bağlantı oranı | Kapatmadan önce her talebe, çoğu zaman genel ya da çok popüler olan herhangi bir makaleyi eklemek; sonradan toplu bağlamak | Bağlı taleplerin aylık ilgililik örneklemesi; bağlantıların aynı birkaç makaleye giden payı; bağlantı zaman damgasının çözüm zaman damgasına karşı kontrolü |
| Yeniden kullanım oranı | Her talep için yeni bir makale oluşturup sonra bir sonraki seferde yeniden kullanım sayılsın diye hemen bağlamak; ya da oranın mükemmel görünmesi için hiç oluşturmamak | Düzenli bir aramayla bulunan yinelenen makale oranı; “makale yoktu” gerekçesiyle kapatılan taleplerin payı |
| Makale güncelliği | Makaleleri kontrol etmeden gözden geçirilmiş olarak işaretlemek; önemsiz düzenlemelerle inceleme tarihini sıfırlamak; yalnızca gözden geçirmesi kolay makaleleri saymak | Yakın zamanda gözden geçirilmiş makalelerin gerçek hizmete karşı sınanan örneklemi; aynı makaleler için faydalılık oranı ve yazılı yorumlar |
| Sıfır sonuçlu arama oranı | Her sorguyla eşleşen belirsiz ya da her şeyi kapsayan makaleler eklemek; anahtar kelime doldurmak; zahmetli arama terimlerini günlükten hariç tutmak | Tıklamayı kısa bir pencere içinde aynı konuda bir iletişimin izlemesi; faydalılık oranı; en çok aranan terimlerin elle okunması |
| Faydalılık oranı | Yalnızca memnun okuyucuları oy vermeye yönlendirmek; faydalı değil seçeneğini gizlemek; takımın içinden oy vermek | Oranla birlikte gösterilen yanıt oranı ve yanıt verenlerin dağılımı; yazılı yorumlar; makaleyi okuduktan sonra iletişim oranı |
| Yayımlama süresi | Saati durdurmak için yetersiz bir taslak yayımlamak; bir makaleyi parçalara bölmek; taslakları saatin dışarıda bıraktığı bir duruma taşımak | Yakın zamanda yayımlanan makalelerin ilgililiği ve faydalılığı; hariç tutulan durumlardaki taslakların sayısı ve yaşı |
| Katkı genişliği | Herkes katkıda bulunan olarak görünsün diye önemsiz düzenlemeler yapmak; insanlardan bir kotayı karşılamak için bir cümle eklemelerini istemek | Düzenlemelerin boyutunun ve özünün örneklenmesi; katkıda bulunulan makalelerin yeniden kullanımı ve faydalılığı; raporda isim yok |

Sağlıklı bir okuma şunları gösterir: bir insan örnekleminin ilgili olduğunu doğruladığı bağlı makaleler, taban olgunlaştıkça yükselen bir yeniden kullanım oranı, yakın zamanda doğrulanmış incelemeleri olan yoğun kullanılan bir makale kümesi, takımın üzerinden geçtiği kısa bir arama başarısızlığı listesi ve takım genelinde yayılan katkı. Gerçekten yeni oldukları için makalesi olmayan bazı talepler, başarısız bir tabanın değil, dürüst bir tabanın işaretleridir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Yüksek bir bağlantı oranını hedeflemek | Yakalamayı ve yeniden kullanımı günlük rutine iter; anlaması basit | Anlamsız bağlantıları davet eder; makale olmayan boşlukları gizler |
| İlgililik için elle örneklemek | Bağlantıların bir anlam taşıyıp taşımadığını ortaya çıkarır; ortak standartlar oluşturur | Analist zamanı alır; küçük örneklemler gürültülüdür; örnekleyenin yargısına bağlıdır |
| Her şeyi sabit bir programla gözden geçirmek | Planlaması ve denetlemesi kolay; eşit uygulanır | Kimsenin okumadığı makalelere emek harcar; yoğun kullanılanları ihmal eder |
| Kullanıma göre gözden geçirmek | Emeği yanlış bilginin en çok zarar verdiği yere yönlendirir | Güvenilir görüntüleme ve bağlantı verisi gerektirir; uzun kuyruktaki makaleler fark edilmeden çürüyebilir |
| Resmi KCS benimsemesi | Tutarlı, sınanmış bir uygulama ve gösterge kümesi verir | Sürdürülen yatırım, koçluk ve araç desteği gerektirir; çok küçük bir takım için ağır |
| Makaleler yerine konuşma ve eşli çalışma | Yargıyı ve bağlamı aktarır; düşük yük | Vardiyalara, tatillere ve personel devrine ölçeklenmez; bilgi insanlarla birlikte gider |

Bilginin kullanılıp güvenilip güvenilmediğini görmeye yetecek kadar ölçün ve tasarruf ettiğiniz emeği içeriğe harcayın. Küçük bir takım için aylık ilgililik örneklemiyle bir bağlantı oranı ve kısa bir arama başarısızlığı listesi eksiksiz bir programdır. Büyük bir masa için tam küme, yalnızca birisi gözden geçirmenin sahibi olup buna göre hareket ederse kendini amorti eder.

## Takımınızla tartışılacak sorular

**1. En son zor bir talebi çözdüğümüzde bilgi nereden geldi ve sonrasında nereye gitti?**
Gerçek emek gerektiren yakın tarihli bir talep seçin ve öğrenilenlerin yolunu izleyin. Bir makale mi bulundu, bir meslektaşa mı soruldu, yoksa yanıt sıfırdan mı çıkarıldı? Aynı sorunu yaşayan bir sonraki kişinin yanıtı beş dakikadan kısa sürede bulup bulamayacağını sorun. Kolaylaştırıcı, takımın bildikleri ile bilgi tabanının tuttukları arasındaki boşluğa bakmalıdır.

**2. Bağlantı oranımızı gelecek ay belirtilen bir hedefe yükseltseydik, bunu kimseye yardım etmeden nasıl yapabilirdik?**
Manipülasyon listesini açık hale getirin ve bunu bir suçlama olarak değil, tasarım girdisi olarak ele alın. Yaygın yanıtlar genel bir makaleyi bağlamak, kapanışta toplu bağlamak ve en popüler makaleyi seçmektir. Her yanıt için tablodaki hangi koruma önleminin bunu ve ne kadar çabuk yakalayacağını sorun. Kolaylaştırıcı, aylık bir ilgililik örneklemesi gibi en az bir yeni kontrol ve bunun için bir sahiple ayrılmalıdır.

**3. En çok güvendiğimiz beş makale hangileri ve en son ne zaman gerçek hizmete karşı doğrulandılar?**
En çok bağlanan ve en çok görüntülenen makalelere bakın ve bunlardan ikisini birlikte yüksek sesle okuyun. Konuşma çoğu zaman, en çok etkisi olan makalelerin en az özen görenler olduğunu gösterir; bu, kullanıma göre gözden geçirmenin gerekçesidir.

**4. İnsanlar neyi arıyor ve bizde bu yok?**
En çok sıfır sonuçlu aramaları ve bağlantısız talep gerekçelerini getirin. Bunları yazılacak makaleler, eklenecek sözcükler ve başka bir takıma ait sorular olarak gruplayın. Kolaylaştırıcı, sıradaki üç kalemin kısa bir listesini almalı ve bunların özel bir proje içinde değil, olağan iş sırasında nasıl yazılacağını planlamalıdır.

**5. Bilgimizi kim yazıyor ve bunu yapmak onlara neye mal oluyor?**
Yakalamayı dürüstçe tartışın. Yazmak işin bir parçası olarak mı görülüyor, yoksa işten sonra ekstra iş olarak mı? Neyin yavaşlattığını sorun: ağır bir şablon, yavaş bir gözden geçirme, yanlış olma korkusu ya da zor bir vardiyanın sonunda zamansızlık. Kolaylaştırıcı, bireylerin peşine düşmekten uzaklaşıp araçlarda, zamanda ve izinde değişikliklere yönelmelidir.

**6. Makalelerimizden hangilerine ihtiyaç duymayı bırakmalıyız?**
En çok yeniden kullanılan makaleleri alın ve hangi yinelenen nedenin etrafından dolaştıklarını sorun. Ayda 200 kez kullanılan bir sıfırlama prosedürü, üründeki bir kusurun, kafa karıştırıcı bir ekranın ya da eksik bir otomasyonun belirtisi olabilir. Hangi kalemleri sorun yönetimine ya da ürün takımına devredeceğinize ve hangilerini otomatikleştireceğinize karar verin (bkz. Konu 3.7 “Self servis ve otomasyon metrikleri”). Kolaylaştırıcı, iyi bilgi çalışmasının en iyi sonucunun bazen daha az makale olduğunu not etmelidir.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları, bir hizmetin ihtiyaç duyacağı bilginin büyük bölümünü üretir: bir özelliğin nasıl davrandığı, yeni bir hatanın ne anlama geldiği, nasıl geri alınacağı. Bu bilgi yayından önce yakalanmazsa, hizmet masası ve nöbet takımları bunu zor yoldan öğrenir. Çalışma kitabını ve yardım makalesini tamamlanma tanımına dahil edin ve sahip olduğunuz hizmetlerin bağlantı oranını ve arama başarısızlıklarını geri bildirim olarak izleyin. Aynı makale çok sayıda bağlandığında, bunu belgelemenin bir başarısı olarak değil, ürün üzerine bir kusur raporu olarak ele alın.

### Hizmet ve operasyon takımları

Hizmet masası ve operasyon takımları bilgi tabanının ana üreticileri ve tüketicileridir; bu yüzden metrikler çoğunlukla onların kullanımı içindir. Çözme döngüsünü dürüstçe işletin: önce arayın, yeniden kullanın ve iyileştirin, hiçbir şey uymadığında oluşturun. Bağlantı oranını bir ilgililik örneklemiyle kullanın ve sıfır sonuçlu aramaları bir birikim listesi olarak okuyun. Yazarların ya da editörlerin herhangi bir liderlik tablosundan kaçının; çünkü bilgi tabanı ortak bir araçtır ve kişisel sayılar ona zarar verir (bkz. Konu 3.1 “Hizmet masası metrikleri”).

### Liderlik ve yönetişim

Liderler bilgi çalışmasının zaman alıp almayacağına karar verir; bu yüzden bilginin kalitesine karar verirler. Makale sayısını istemeden önce ilgililik örneklemini ve yoğun kullanılan makalelerin güncelliğini isteyin. Koruma önlemi olmadan bağlantı oranı ya da makale oluşturma üzerinde hedeflere direnin ve birleştirilmiş bir yinelenenler kümesi gibi iyi nedenlerle sayılar düştüğünde bunu duymayı bekleyin. Yoğun kullanılan makalelerin gözden geçirilmesini ve makaleleri gereksiz kılan düzeltmeleri fonlayın.

### Müşteriler ve kullanıcılar

Kullanıcılar bilgiyle arama, bir portal, bir sohbet botu ya da bir analistin verdiği yanıt aracılığıyla karşılaşır. Fark ettikleri şey, ilk yanıtın doğru olup olmadığı ve kendilerini tekrar etmek zorunda kalıp kalmadıklarıdır. Makalelere dair kendi geri bildirimleri, boş çıkan aramaları ve tekrar iletişimleri bu konudaki her şey için en iyi koruma önlemleridir. Kullanıcılardan makaleleri derecelendirmeleri isteniyorsa, geri bildirimin ne olduğunu söyleyin ve onun üzerine görünür biçimde harekete geçin (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir sigorta şirketi, birkaç ofisteki personeli destekleyen yaklaşık bir düzine analistten oluşan dahili bir BT hizmet masası işletir. Masa, hasar uygulamasının ve belge portalının sahibi olan iki ürün takımıyla bir bilgi tabanını paylaşır. Bu örnekteki tüm sayılar örnek niteliğindedir.

Liderlik daha iyi bir ilk temasta çözüm (bkz. Konu 3.1 “Hizmet masası metrikleri”) ister ve bilgi bağlantı oranı için örnek olarak yüzde 38'den yüzde 60'a bir hedef koyar. Altı hafta içinde pano yüzde 64 gösterir. Hizmet masası lideri ikna olmamıştır; çünkü analistler hâlâ yanıtları bulamadıklarından şikâyet etmektedir ve bir ürün takımı lideri, sahibi olduğu makalelerden üçünün kapatılan taleplerin çoğunda göründüğünü söyler.

Takım bir manipülasyon gözden geçirmesi ve bir ilgililik örneklemesi yapar. Önceki aydan rastgele seçilmiş 30 bağlı talebi okur ve makalenin talebe uyup uymadığını yargılarlar. Örnek bir sayımda, 30 bağlantının 11'i genel bir “Talep kaydı nasıl açılır” makalesine ya da sorunu ele almayan genel bir ağ özetine yöneliktir. Ayrıca bağlantıların talep kapanmadan birkaç saniye önce yapıldığını da bulurlar; bu, kullanıma değil alışkanlığa işaret eden bir örüntüdür. Masa lideri, yükselmiş olan yeniden kullanım oranına ve “makale yoktu” gerekçesiyle bağlantısız taleplerin, analistler artık en yakın makaleyi seçtiği için neredeyse hiçe düşen payına bakar. Bilgideki boşluk görünmez hale gelmiştir.

Takım üç karar alır. Birincisi, bağlantı oranı hedefi geri çekilir ve yerine ilgililiğe göre düzeltilmiş bir görünüm konur: bağlantı oranı, örneklenen ilgili bağlantı payının yanında raporlanır ve “makale yoktu” kapanış gerekçesi seçilmesi kolay hale getirilir ve bir başarısızlık olarak ele alınmaz. İkincisi, sıfır sonuçlu aramalar her ay okunur ve ilk beşi, masa genelinde paylaşılan bir sonraki yazma görevleri olur. Üçüncüsü, en çok bağlanan 20 makale bir ay içinde güncellik açısından gözden geçirilir, ilgili ürün takımına ait olur ve bir hizmetin taleplerinin dörtte birinden fazlasına bağlanan her makale, kalıcı bir düzeltme adayı olarak sorun yönetimine devredilir (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

İki ay sonra manşet bağlantı oranı örnek olarak yüzde 51'e geri düşmüştür; bu kötü haber gibi hissettirir. Örneklenen ilgililik örnek olarak yüzde 63'ten yüzde 85'e yükselmiştir, sıfır sonuçlu arama oranı düşmüştür ve belge portalıyla ilgili tekrarlayan bir oturum açma sorunu nedeninde düzeltilmiş, bu da üç makaleyi emekliye ayırmıştır. Lider, liderlikten programı ham bağlantı oranına göre değil, ilgililiğe ve emekliye ayrılan geçici çözümlere göre değerlendirmesini ister.

## Sektör mercekleri

**Girişim.** Bilgi birkaç kafada ve sohbet geçmişinde yaşar. Geceleri neyin bozulduğuna dair kısa bir çalışma kitabı listesi yazın ve her olaydan sonra düzeltmeyi kaydedin. İlk çalışma kitaplarının hâlâ çalıştığını kontrol eden aylık bir kontrol yeterli bir ölçümdür.

**Küçük işletme.** Çoğu zaman tek bir kişi hizmet masası, yönetici ve bilginin sahibidir. Risk, otobüs faktörüdür; çünkü kişi giderse bilgi de gider. Basit bir ortak depo kullanın, makaleleri kısa tutun ve bir yükleniciden ya da meslektaştan temel prosedürleri sınamasını isteyin. En çok kullanılan sayfaların düzenli bir baştan sona okunması, herhangi bir panodan daha iyidir.

**Büyük kurum.** Ölçek, yinelenen makaleler ve eşitsiz kalite getirir. Bağlantı oranı, güncellik ve yeniden kullanım için ortak tanımlar kullanın, hizmete ve takıma göre raporlayın ve yoğun kullanılan makaleler için sahipler atayın. Takımları karşılaştırmaktan kaçının; çünkü hizmet karışımı ve tabanın yaşı farklıdır.

**Devlet ve kamu sektörü.** Kayıt kuralları, erişilebilirlik gereksinimleri ve denetim beklentileri bilginin nasıl saklanacağını, gözden geçirileceğini ve emekliye ayrılacağını yönetebilir. Bunları tasarım girdisi olarak ele alın: vatandaşları etkileyen makaleler için bir onay izi tutun ve erişilebilir içerik yayımlayın. Vatandaşlardan gelen geri bildirim ve arama başarısızlıkları özellikle değerlidir (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bilgi metriklerinin maliyetleri mütevazıdır. Araç verisi genellikle ITSM platformunda ve bilgi tabanında zaten vardır. Başlıca maliyetler, ölçümleri tanımlamak için harcanan zaman, ilgililiği kontrol eden küçük aylık örneklem, yoğun kullanılan makaleler için inceleme zamanı ve sorunları çözerken bilgiyi yakalama disiplinidir. Bilgi platformunda kullanılabilir bağlantı ya da arama verisi yoksa, onu enstrümante etmenin maliyeti de dahil edilmelidir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

Getiri bir örüntüdür ve kitap bunun için bir rakam vermez. Analistler doğru bir makaleyi hızla bulduğunda çözüm daha hızlı ve daha tutarlıdır, yeni personel daha erken yararlı hale gelir ve nöbetçi mühendisler birkaç uzmana daha az bağımlı olur. Kullanıcılar yanıtları kendileri bulduğunda masa, bilinen sorular için daha az tekrar iletişim alır. Metrikler, bilginin nerede eksik, eskimiş ya da kullanılmamış olduğunu göstererek yardımcı olur; böylece kıt yazma zamanı önemli makalelere gider.

Toplam sahip olma maliyeti bakımı içerir. Hizmetler değiştikçe makaleler çürür, bu yüzden inceleme zamanı sürekli bir maliyettir ve bunu göz ardı eden bir program faydayı olduğundan büyük gösterir. Kendi takımınız için getiriyi tahmin etmek için, kendi taleplerinizden bir örneklemi öncesi ve sonrası olarak karşılaştırın ve varsayımlarınızı etiketleyin.

## Anti-desenler ve tuzaklar

- **Makale sayısını ya da görüntülemeleri başarı saymak.** Hacim dağınıklıkla artar ve görüntülemeler kafa karışıklığına işaret edebilir. Bunun yerine çözümde kullanımı, ilgililiği ve geri bildirimi ölçün.
- **İlgililik kontrolü olmayan bir bağlantı oranı hedefi.** İnsanlar herhangi bir makaleyi ekler. Bağlı talepleri her ay örnekleyin ve ilgili payı oranın yanında raporlayın.
- **Yazarları ya da editörleri sıralamak.** Kişisel sayımlar ince düzenlemeler ve makale bölmeleri üretir. Katkı genişliğini takım için raporlayın ve bunu bir kapasite sorusu olarak tartışın.
- **Tüm makaleleri tek bir sabit programla gözden geçirmek.** Emek kimsenin okumadığı sayfalara gider. Kullanıma göre gözden geçirin ve kullanılmayanı emekliye ayırın.
- **Saati durdurmak için taslak yayımlamak.** Hızlı, ince bir makale yayımlama süresini boşa çıkarır. Bunu faydalılık ve takip iletişim oranıyla eşleştirin.
- **Başarısız aramaları göz ardı etmek.** Başarısız aramalar karşılanmamış ihtiyacın en net sinyalidir. Bunları her ay okuyun ve ilk kalemleri işe dönüştürün.
- **Bilgiyi işten ayırmak.** Çeyrek sonunda bir belgeleme projesi eskimiş sayfalar üretir. Çözüm sırasında ve tamamlanma tanımında yakalayın.
- **Bilgi tabanını kalıcı saymak.** İçerik çürür. Emekliye ayırmayı ve birleştirmeyi rutin ve takdir edilen bir iş yapın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Yakalama ve bağlama | Bilgi kafalarda ve sohbette yaşar; bağlantılar nadirdir | Bazı takımlar makaleleri taleplere bağlar, uygulama değişir | Bağlama ve yakalama için tek yazılı kural; kapanış gerekçeleri kaydedilir | Bağlantı oranı ve ilgililik örneklemesi aylık gözden geçirilir ve iyileştirmeye bağlanır | Yakalama, masa, operasyon ve ürün takımları genelinde iş akışının bir parçasıdır; tanımlar kararlara bilgi vermeyi bıraktıklarında yeniden düzenlenir |
| Güncellik ve sahiplik | Sahip yok; makaleler fark edilmeden eskir | Kilit hizmetler için sahipler adlandırılmıştır | İnceleme pencereleri belirlenir, yoğun kullanılan makaleler için daha kısa pencerelerle | Yüksek kullanımlı makalelerin güncelliği eğilim olarak izlenir ve fonlanır | İnceleme sorumluluğu tedarikçiler ve ürün takımlarıyla paylaşılır; emekliye ayırma rutindir |
| Bulunabilirlik ve geri bildirim | Arama anlık; arama verisi yok | Arama günlüğü var ama okunmuyor | Sıfır sonuçlu aramalar ve okuyucu geri bildirimi belirli bir sıklıkla gözden geçirilir | Arama başarısızlıkları bir birikim listesini yönlendirir ve iletişim verisiyle eşleştirilir | Kullanıcılar, analistler ve sohbet botları tek bir bilgi kaynağından yararlanır; geri bildirim içeriği görünür biçimde değiştirir |
| İyileştirmede kullanım | Metrikler, varsa, sayılardır | Sayılar takıma gösterilir | Metrikler koruma önlemleriyle eşleştirilir ve önce takıma gösterilir | Yoğun bağlanan makaleler sorun yönetimini ve otomasyon kararlarını besler | Bilgi, sorun ve ürün birikim listeleri takımlar genelinde birlikte yönetilir |

## Kontrol listesi

- [ ] Her bilgi metriği hizmet verdiği hedef kitleyi ve bilgi verdiği kararı adlandırıyor.
- [ ] Bağlantı oranının saat, hariç tutmalar ve büyük olayların ele alınışı dahil yazılı bir tanımı var.
- [ ] Aylık bir örneklem, bağlı makalelerin taleplerle ilgili olduğunu kontrol ediyor.
- [ ] Talep kapanışı “makale yoktu” ve “makale bulunamadı”yı ayrı gerekçeler olarak kaydediyor.
- [ ] Yayımlama süresi, taslak ve yayımlanmış aşamalar ayrılarak ortanca ve yüksek bir yüzdelik dilim olarak raporlanıyor.
- [ ] Kullanımdaki makaleler için, en çok kullanılanlarda daha kısa olan bir inceleme penceresi belirlenmiş.
- [ ] En çok sıfır sonuçlu aramalar her ay okunuyor ve birikim listesi kalemlerine dönüştürülüyor.
- [ ] Okuyucu geri bildirimi yanıt oranıyla birlikte gösteriliyor ve en çok kullanılan makaleler üzerindeki yorumlar okunuyor.
- [ ] Katkı yalnızca takım için, adlandırılmış listeler olmadan raporlanıyor.
- [ ] En çok bağlanan makaleler her çeyrek kalıcı düzeltme adayı olarak gözden geçiriliyor.
- [ ] Tanım değişiklikleri gerekçeleriyle kaydediliyor.

## Yapay zekâ istemleri

**Bağlı makalelerin taleplerine uyup uymadığını kontrol edin.**

```text
[takım adı] için bilgi gözden geçirmeleri yürütüyorum; takım [hizmet türü]
hizmetini destekliyor. Aşağıda her biri özeti, çözüm notları ve bağlı makalenin
başlığı ve metniyle [sayı] çözülmüş talep var. Her çift için makalenin talebe
ilgili bir yanıt, kısmi bir yanıt ya da ilgisiz bir bağlantı olarak uyup
uymadığını yargıla ve tek satırlık bir gerekçe ver. Örüntüleri makaleye ve
hizmete göre raporla. Bireysel analistleri adlandırma ya da sıralama. Hizmet
hakkında olgu uydurma. Varsayımlarını ve metinden yargılayamadığın her şeyi
listele.

[kişisel veriler çıkarılmış talepleri ve makaleleri yapıştırın]
```

**Başarısız aramaları bir yazma birikim listesine dönüştürün.**

```text
İşte [bilgi tabanı ya da portal adı] içinde [dönem] döneminde sonuç
döndürmeyen en sık aramalar: [sayılarıyla arama terimlerinin listesi]. Bunları
temalara grupla. Her tema için yeni bir makaleye mi, var olan bir makalenin
eş anlamlısına ya da yeniden adlandırılmasına mı ([ilgili makale başlıklarının
listesi]), başka bir takıma bir bağlantıya mı yoksa hiçbir eyleme mi ihtiyaç
duyduğunu öner. Makale ya da sistemlerimiz hakkında olgu uydurma. Herhangi bir
şey yazmadan önce yanıtlamam gereken soruları ve varsayımlarını listele.
```

**Hafif bir bilgi ölçümleri kümesi tasarlayın.**

```text
[ITSM aracı] ve [bilgi aracı] kullanan [takım büyüklüğü] kişilik bir takım olan
[takım adı] için küçük bir bilgi yönetimi ölçümleri kümesi tasarla. Ana
hedefimiz [hedef, örneğin daha hızlı ilk temasta çözüm ya da uzmanlara daha az
bağımlılık]. Her ölçüm için tanımı, saati ya da sınırı, veri kaynağını, olası
manipülasyon vektörünü ve bir koruma önlemini ver. Bireysel sıralamalar önerme,
kıyaslama değerleri uydurma ya da kaynak gösterme. Varsayımlarını ve
bahsetmediğim ama ihtiyaç duyacağın veri alanlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): panonuza bir bilgi metriği eklediğinizde ilgili konuları ve eşleştirilmiş koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir bilgi metriğinin manipülasyon vektörünü, koruma önlemini ve çapraz başvurularını doğru biçimde taşıyıp taşımadığını kontrol etmek için kullanın.

## Temel çıkarımlar

- Bilgiyi kullanım anında ölçün: çözümde bağlanmış, aramayla bulunmuş, okuyucular tarafından onaylanmış.
- Bağlantı oranını bir insan ilgililik örneklemiyle eşleştirin; çünkü bir bağlantı yalnızca birinin tıkladığını kanıtlar.
- Güncelliği kullanıma göre gözden geçirin ve emeği, yanlış bir makalenin en çok talebi yanıltacağı yere koyun.
- Başarısız aramaları ve yoğun bağlanan makaleleri yeni içerik, daha iyi adlandırma ya da kalıcı bir düzeltme için sinyal olarak ele alın.
- Katkıyı takım için raporlayın ve yazarları asla sıralamayın.
- Daha az ama daha iyi makaleler çoğu zaman daha büyük bir tabandan daha sağlıklı bir tabanı gösterir.

## Kaynaklar ve ileri okuma

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
