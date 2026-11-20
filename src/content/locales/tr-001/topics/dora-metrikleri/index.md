# DORA metrikleri

**DORA metrikleri, bir takımın yazılım değişikliklerinin üretime ne kadar hızlı ve ne kadar güvenli ulaştığını tanımlar; bu yüzden hız ölçümlerini ve kararlılık ölçümlerini birlikte okuyun, bunları iş hattı ve olay olaylarından hesaplayın ve bir teslimat sistemi hakkında konuşmaları başlatmak için kullanın, takımları ya da insanları sıralamak için asla.**

## Genel bakış ve motivasyon

DORA metrikleri, yazılım teslimat uygulamalarının takım ve kuruluş sonuçlarıyla nasıl ilişkili olduğuna dair uzun süredir devam eden bir çalışma olan [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment) araştırma programından gelir. Nicole Forsgren, Jez Humble ve Gene Kim erken bulguları 2018’de [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) kitabında sundu ve program yıllık bir raporla Google Cloud altında sürdü. Araştırma, teslimatın hangi ölçülebilir yönlerinin iyi sonuçları öngördüğünü sordu ve teslimat iş hattından ve olay kaydından hesaplanabilen küçük bir yazılım teslimat performansı ölçümleri kümesinde karar kıldı.

Ekim 2026 itibarıyla DORA web sitesi, iki gruba ayrılmış beş yazılım teslimat performansı metriği tanımlar. Üçü **çıktı hızını**, yani değişikliklerin ne kadar hızlı hareket ettiğini tanımlar: değişiklik teslim süresi, dağıtım sıklığı ve başarısız dağıtımdan kurtarma süresi. İkisi **kararsızlığı**, yani bir yayının ne sıklıkla sorun çıkardığını tanımlar: değişiklik başarısızlık oranı ve dağıtım yeniden iş oranı. Daha önceki yayınlar dört metrik tanımlıyordu; başarısız dağıtımdan kurtarma süresi yerine “hizmeti geri getirme süresi” ve yeniden iş oranı olmaksızın. Tanımlar yıllar içinde inceltilmiştir; bu yüzden hangi sürümdeki rehberliği izlediğinizi ve en son ne zaman denetlediğinizi her zaman belirtin.

Metrikleri ünlü yapan araştırma bulgusu, hız ile kararlılığın takımlar arasında birlikte hareket etme eğiliminde olduğudur. Sık dağıtım yapan ve kısa teslim süreleri olan takımlar, ortalama olarak, bunun bedelini daha fazla başarısızlıkla ödemiyordu. Bu, daha hızlı gitmenin daha çok bozmak demek olduğu yönündeki eski varsayımı alt üst eder. Bu, anket ve iş hattı verisinde bir örüntüdür, bir yasa değil ve [sürekli teslimat](https://en.wikipedia.org/wiki/Continuous_delivery), küçük partiler, otomatik test ve hızlı geri bildirim gibi uygulamalara yatırım yapmış takımlar için geçerlidir. Metrikler bu altta yatan yeteneklerin sinyalleridir. Yeteneklerin kendisi değildir.

Aşağıdaki terimler bu konuda tekrarlanır.

- **Dağıtım**, yazılımın bir sürümünün belirli bir ortama konulmasıdır. Bu konu, aksi söylenmedikçe üretimi kasteder.
- **Değişiklik**, yazılımda yapılan bir değişiklikler kümesidir; genellikle birlikte yayımlanan bir ya da daha fazla işleme (commit). ITIL 4’te sözcüğün daha geniş bir anlamı vardır; hizmetleri etkileyebilecek her ekleme, değiştirme ya da kaldırmayı kapsar ve onu yöneten [ITIL](https://en.wikipedia.org/wiki/ITIL) uygulaması değişiklik yetkilendirmedir.
- **Başarısız dağıtım**, üretimde bir hizmet bozulmasına ya da kesintiye yol açan ve acil düzeltme, geri alma ya da yama gibi bir iyileştirme gerektiren dağıtımdır. Araştırma yerel tanıma bıraktığı için takımınız kesin kuralı yazar.
- **Geri alma**, üretimi bir önceki bilinen iyi sürüme döndürme eylemidir.
- **Yüzdelik**, gözlemlerin belirtilen payının altına düştüğü değerdir. Teslim süresinin 85. yüzdeliği, değişikliklerin yüzde 85’inin geçtiği sayıdır.

Çevik ve ITIL bakış açıları bu zeminde buluşur. Bir çevik takım bu sayıları mühendislik uygulaması ve çalışma anlaşmaları hakkında geri bildirim olarak görür. Bir ITIL uygulayıcısı onları değişiklik yetkilendirme, yayın yönetimi, dağıtım yönetimi ve olay yönetimi için sonuç kanıtı olarak görür. Gerilim genellikle denetim hakkındadır. Geleneksel bir değişiklik onay kurulu, her değişikliği yayımlanmadan önce inceleyerek başarısızlığı azaltmaya çalışır. DORA araştırması, ağır dış onayın daha iyi kararlılıkla ilişkili olmadığını, meslektaş incelemesinin, otomatik testin ve küçük değişikliklerin ise olduğunu buldu. ITIL 4’te değişiklik yetkilendirme, standart, normal ve acil değişiklikleri ayırarak ve düşük riskli değişikliklerin önceden yetkilendirilmesine izin vererek buna imkân tanır (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

Metriklerin, araştırmanın kendisinin belirttiği sınırları da vardır ve bu konudaki pratik öğüt onların üzerine kurulur. Bir uygulama ya da hizmet için bir teslimat sistemini tanımlarlar, iyileştirme konuşmaları için tasarlanmışlardır ve yayımlanan işin değerli olup olmadığı hakkında hiçbir şey söylemezler. Bir takım yanlış şeyi yayımlarken mükemmel sayılar yayımlayabilir. Bu nedenle bu konu, akış ölçümlerinin (bkz. Konu 2.1 “Akış ölçümleri”), hizmet güvenilirliği ölçümlerinin (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”) ve sonuç ölçümlerinin (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”) yanında yer alır, üzerinde değil.

Son olarak metrikler, bir liderlik panosunda göründükleri anda [Goodhart yasasını](https://en.wikipedia.org/wiki/Goodhart%27s_law) davet eder. Dağıtım sıklığını şişirmek en kolayıdır ve başarısız dağıtım sayılarını gizlemek en kolayıdır. Aşağıdaki her öneri bu yüzden bir ölçümü, nasıl eğilebileceğine dair bir denetimle eşler (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Hafızadan değil olaylardan hesaplayın.** Dağıtımlar iş hattından, başarısızlıklar ve kurtarmalar olay kaydından ve teslim süresi iş hattına birleştirilmiş sürüm denetiminden gelir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).
- **Hızı ve kararlılığı tek bir resim olarak okuyun.** Başarısızlıkları artan hızlı bir takım ya da üç ayda bir yayımlayan kararlı bir takım, yarısının tek başına göstermediği bir şey söylüyordur.
- **Bir hizmeti ya da uygulamayı ölçün, bir kişiyi değil.** Analiz birimi bir teslimat sistemidir. Bireyler tek başına dağıtım yapmaz ve onları sıralamak veriyi yok eder.
- **Bir takımı başka bir takımla değil, kendi geçmişiyle karşılaştırın.** Bir ödeme hizmeti, bir veri platformu ve bir mobil uygulama arasında bağlam keskin biçimde farklıdır ve araştırmanın kendisi metrikleri bir lig tablosu olarak kullanmaya karşı uyarır.
- **Süreler için dağılım kullanın.** Teslim süresi ve kurtarma süresi uzun kuyrukludur; bu yüzden medyanı ve yüksek bir yüzdeliği raporlayın (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).
- **Metrikleri belirti olarak ele alın.** Bir sayı hareket ettiğinde nedeni altındaki yeteneklerde arayın; parti boyutu, test otomasyonu, inceleme uygulaması ve mimari gibi, sonra bir deney yürütün.
- **Tanımları yazın.** Başarısızlık, dağıtım ve “işin başlangıcı” yargı kararlarıdır. Seçimi kaydedin ve eğilimin bir anlam taşıması için sabit tutun.

## Metrik tanımları

Aşağıdaki beş metrik, Ekim 2026 itibarıyla DORA rehberliğini izler. Formüller, takımınızın yazması gereken saatleri ve hariç tutmaları belirtir. Araştırmanın bir sınırı açık bıraktığı yerde tablo makul bir varsayılan gösterir ve öneriler seçimi açıklar.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Değişiklik teslim süresi | İşlenmiş bir değişikliğin üretime ulaşma süresi | Saat, değişikliğin ilk işlemesinde (ya da tanımda belirtilmişse ana dala birleştirilmesinde) başlar ve üretime dağıtım başarıyla tamamlandığında durur; dönemde dağıtılan değişikliklerin medyanını ve 85. yüzdeliğini raporlayın; hiç dağıtılmayan değişiklikler hariç tutulur ve devam eden iş olarak ayrıca raporlanır | Saat ya da gün | Dağıtım iş hattına birleştirilmiş sürüm denetimi | Dağıtım yönetimi; yayın yönetimi; değişiklik yetkilendirme | Çevrim süresi; üretime teslim süresi | Haftalık ya da yayın başına, aylık incelenir |
| Dağıtım sıklığı | Bir takımın üretime ne sıklıkla dağıtım yaptığı | Dönemde uygulamanın başarılı üretim dağıtımlarının sayısı / dönemdeki gün sayısı; başarısız ya da geri alınan dağıtımlar başarı sayısından hariç tutulur; test ortamlarına dağıtımlar hariç tutulur | Günde ya da haftada dağıtım | Dağıtım iş hattı olay günlüğü | Dağıtım yönetimi; yayın yönetimi | Sürekli teslimat; her artımın sonunda yayımlama | Haftalık |
| Başarısız dağıtımdan kurtarma süresi | Bir dağıtım üretim başarısızlığına yol açtığında kurtarmanın ne kadar sürdüğü | Saat, başarısızlık saptandığında ya da bildirildiğinde (her seferinde aynı kural) başlar ve hizmet kullanıcılar için geri geldiğinde durur; dönemdeki başarısız dağıtımlar için medyanı ve 85. yüzdeliği raporlayın; bir dağıtımın neden olmadığı olaylar hariç tutulur | Dakika ya da saat | Dağıtım olaylarına ve izleme uyarılarına birleştirilmiş olay kaydı | Olay yönetimi; hizmet sürekliliği yönetimi | Kurtarma süresi; geri getirme işi | Başarısızlık başına, aylık incelenir |
| Değişiklik başarısızlık oranı | Bir iyileştirme gerektiren başarısızlığa yol açan üretim dağıtımlarının payı | Acil düzeltme, geri alma, yama ya da olay müdahalesi gerektiren dağıtımlar / dönemdeki bütün üretim dağıtımları; bir başarısızlığı dağıtımına bağlayan kural yazılıdır ve her seferinde aynı şekilde uygulanır | Yüzde | Olaylara, geri almalara ve acil düzeltme dağıtımlarına birleştirilmiş dağıtım olayları | Değişiklik yetkilendirme; olay yönetimi | Bitti tanımı; kaçak hatalar | Aylık |
| Dağıtım yeniden iş oranı | Plansız olan ve kullanıcıya dönük bir sorunu düzeltmek için yapılan üretim dağıtımlarının payı | Bir üretim sorununa yanıt olarak yapılan plansız dağıtımlar / dönemdeki bütün üretim dağıtımları; bir düzeltme içeren planlı dağıtımlar hariç tutulur; “plansız” kuralı yazılıdır | Yüzde | Dağıtım nedeniyle etiketlenmiş, olay ya da hata kayıtlarına bağlı iş hattı günlüğü | Değişiklik yetkilendirme; sorun yönetimi | Plansız iş; planın dışında yayımlanan hata düzeltmesi | Aylık |

Tablo hakkında iki not. Birincisi, değişiklik başarısızlık oranı ile dağıtım yeniden iş oranı çakışır ve aynı şey değildir: takımın fark ettiği ve hiçbir yeni dağıtım olmadan geri aldığı bir başarısızlık değişiklik başarısızlık oranında sayılır ama yeniden iş oranında sayılmaz; takımın planladığı planlı bir düzeltme ise ikisinde de sayılmaz. İkincisi, araştırma **dağıtımı** birim olarak ele alır ve uygulama başına sayar; dolayısıyla elli hizmeti olan bir platformun bir değil elli sayı kümesi vardır.

## Öneriler

### Tanımlarla ve saatlerle başlayın

**1. Her metriği grafiğe dökmeden önce bir sayfalık tanım yazın.** Neyin dağıtım sayıldığını, hangi ortamın üretim olduğunu, teslim süresi için saatin nerede başladığını ve bir başarısızlığın bir dağıtıma nasıl bağlandığını belirtin. Sayfayı metrik siciline koyun (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”). Yalnızca birinin kafasında yaşayan bir tanım, araç ya da takım ilk değiştiğinde kayar.

**2. Bir teslim süresi başlangıcı seçin ve ona bağlı kalın.** En yaygın seçimler değişikliğin ilk işlemesi, ana dala birleştirme ve bir kaydın oluşturulmasıdır. İlk işleme teslimat sistemini ölçer ve işin bir birikim listesinde durduğu süreyi yok sayar. Kayıt başlangıcı müşterinin beklemesinin daha çoğunu ölçer ama önceliklendirmeyi karıştırır (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”). Birini tutarlı kullanın ve her grafikte hangisi olduğunu söyleyin.

**3. Başarısızlıkları belirtilmiş bir kuralla ilişkilendirin.** Bir başarısızlık, örneğin dağıtımdan sonra belirtilmiş bir pencere içinde bir olay açıldığında ve neden çözümlemesi o değişikliğe işaret ettiğinde ya da bir geri alma veya acil düzeltme ona etiketlendiğinde bir dağıtıma aittir. İnsanların tartışmadan uygulayabileceği bir kural seçin, her çeyrek bir örnek vakayı gözden geçirin ve bir eğilimi görmeye yetecek kadar uzun süre aynı tutun.

### İş hattından enstrümante edin

**4. Dağıtım olaylarını bir elektronik tablodan değil iş hattından alın.** Her üretim dağıtımını bir zaman damgası, bir sürüm ve bir sonuçla kaydeden bir [CI/CD](https://en.wikipedia.org/wiki/CI/CD) sistemi, insan girişi olmadan size dağıtım sıklığını ve teslim süresi saatinin bitişini verir. Elle girilen sayılar geç ve tutarsızdır ve Konu 1.5’te (“Veri kaynakları ve enstrümantasyon”) açıklanan geriye tarihleme sorunlarını davet eder. DORA takımının açık kaynaklı Four Keys projesi bu olayları toplamanın çalışılmış bir örneğidir; ancak kendi eşdeğer herhangi bir iş hattınız da olur.

**5. Olay kaydını dağıtımlara birleştirin.** Başarısızlık ve kurtarma ölçümleri iki kaynağa ihtiyaç duyar: dağıtım günlüğü ve olay aracı. Olay kaydına “dağıtımdan kaynaklandı” için bir alan ve dağıtım tanımlayıcısı ekleyin; çözüm sırasında doldurulsun ve olay sonrası incelemede denetlensin (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”). Birleştirme olmadan değişiklik başarısızlık oranı bir tahmine dönüşür.

**6. Her dağıtımın nedenini etiketleyin.** Yeniden iş oranı, planlı dağıtımları plansız düzeltmelerden ayırmayı gerektirir. İş hattı çalıştırmasında “planlı değişiklik” ya da “üretim sorunu için düzeltme” gibi basit bir etiket yeterlidir. Etiket listesini kısa tutun; böylece insanların baskı altında bunu düşünmesi gerekmez.

### Sayıları dürüstçe raporlayın

**7. Tek bir ortalama değil dağılımları ve sayıları raporlayın.** Teslim süresi ve kurtarma süresi için medyanı ve 85. yüzdeliği, her birinin arkasındaki gözlem sayısıyla birlikte gösterin. İki dağıtım ve bir başarısızlığı olan bir hafta, çok az şey ifade eden yüzde 50’lik bir değişiklik başarısızlık oranına sahiptir; bu yüzden sayıları yüzdenin yanında gösterin ve oranlar için daha uzun bir pencereyi tercih edin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**8. Çıktı hızı ve kararsızlık gruplarını yan yana gösterin.** Üç çıktı hızı metriğini ve iki kararsızlık metriğini hizmet başına, en az bir çeyreklik eğilimle tek bir görünümde koyun. Dağıtım sıklığını yanında başarısızlık ölçümleri olmadan asla yayımlamayın. Bir lider tek bir sayı isterse tek bir DORA puanı olmadığını açıklayın ve bunun yerine iki gruplu görünümü sunun.

**9. Karşılaştırmaları bir takımın kendi geçmişi içinde tutun.** Medyan teslim süresini dokuz günden beşe taşıyan bir takım bir şey öğrenmiştir. Onu farklı bir mimariye, düzenleyici yüke ya da yayın trenine sahip başka bir takımla sıralamak çok az şey kanıtlar ve her iki takıma da sayılarını korumayı öğretir. Yönetişim için toplulaştırmanız gerektiğinde bir lig tablosu değil, hizmetler arasındaki dağılımı ve iyileşme eğilimini gösterin (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

### Sayıların tanımladığı sistemi iyileştirin

**10. Önce parti boyutunu azaltın.** Küçük değişiklikler teslim süresini kısaltır, başarısızlıkların tanısını kolaylaştırır ve bir geri almanın maliyetini düşürür. Teknikler arasında [özellik anahtarları](https://en.wikipedia.org/wiki/Feature_toggle), gövde tabanlı çalışma ve her artımın tek başına yayımlanabilmesi için işi bölme yer alır (bkz. Konu 2.7 “Çekme isteği ve kod inceleme metrikleri”). Partinin gerçekten küçülüp küçülmediğini görebilmek için değişikliklerin medyan boyutunu teslim süresinin yanında izleyin.

**11. Hızlı saptamaya ve hızlı geri çevirmeye yatırım yapın.** Takım bir başarısızlığı dakikalar içinde görebildiğinde ve yeni bir derleme olmadan bir değişikliği [geri alabildiğinde](https://en.wikipedia.org/wiki/Rollback_(data_management)) ya da kapatabildiğinde kurtarma süresi düşer. Bir [kanarya yayını](https://en.wikipedia.org/wiki/Canary_release), bir özellik anahtarı ve otomatik bir geri alma, her biri başarısızlık ile geri getirme arasındaki aralığı kısaltır. Dağıtımdan saptamaya kadar olan süreyi ayrıca ölçün, çünkü yavaş saptama kurtarma süresi sayısının içinde gizlenir (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).

**12. Sayıları, iyileştirilecek bir yeteneği seçmek için kullanın.** Zayıf bir metrik seçin, neden zayıf olduğunu sorun ve nedene değinen bir uygulamayı araştırmanın yetenek listesinden seçin; örneğin test otomasyonu, gevşek bağlı mimari ya da hafif değişiklik onayı. Değişikliği bir çeyrek yürütün ve eğilime bakın. Takımın iyileştirmeye sahip çıkması için deneyi bir retrospektif konusuyla eşleyin (bkz. Konu 9.5 “Sürekli iyileştirme metrikleri”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşlenen koruma çizgisi metriği ya da uygulaması |
| --- | --- | --- |
| Değişiklik teslim süresi | Saatin başlangıcını daha geç taşımak, örneğin ilk işleme yerine birleştirmede başlamak; uzun ömürlü bir dala erken birleştirmek; zor değişiklikleri “kod değil” diye hariç tutmak; medyanı aşağı çekmek için iş hattından önemsiz değişiklikler geçirmek | Devam eden işin yüzdeliği ve yaşı; saatin sabit yazılı başlangıcı; her çeyrek en yavaş yüzde 10 değişiklikten örnek; değişiklik boyutu dağılımı |
| Dağıtım sıklığı | Bir değişikliği çok sayıda önemsiz dağıtıma bölmek; değişmemiş derlemeleri yeniden dağıtmak; hazırlık ortamına dağıtımları ya da boş yapılandırma değişikliklerini saymak | Dağıtım başına değişiklik boyutu; kullanıcıya görünür değişiklik içeren dağıtımların payı; yanında değişiklik başarısızlık oranı ve yeniden iş oranı |
| Başarısız dağıtımdan kurtarma süresi | Saati geç başlatmak ya da olayları erken kapatmak; kısmi bir düzeltmeden sonra bir başarısızlığı yeni bir olay olarak yeniden sınıflandırmak; “başarısızlık” için ciddiyet eşiğini yükseltmek | Aynı olayın belirtilmiş bir pencerede tekrarı; saat başlangıcının izleme uyarılarından alınması; müşterinin bildirdiği etki süresi |
| Değişiklik başarısızlık oranı | Olayları dağıtımlara bağlamamak; yalnızca tam kesinti yaratan başarısızlıkları saymak; başarısızlıkların dışında kalması için pencereyi genişletmek; ileriye doğru düzeltip yeni bir değişiklik demek | Her çeyrek bir olay örneğini dağıtım günlüğüne karşı gözden geçirmek; dağıtım bağlantısı kaydedilmiş olayların oranını izlemek; dağıtım yeniden iş oranı |
| Dağıtım yeniden iş oranı | Düzeltmeleri planlı iş olarak etiketlemek; bir düzeltmeyi planlı bir yayına bağlamak; düzeltmeyi geciktirerek düzeltme dağıtımlarından kaçınmak | İzleyiciden hata ve kaçak hata sayıları; açık üretim hatalarının yaşı; dağıtım örneği üzerinde etiket denetimi |

Sağlıklı bir okuma, düşük bir düzeyde küçülen ya da sabit teslim süresi ve kurtarma süresi, küçük değişikliklerle kararlı ya da yükselen dağıtım sıklığı ve güvenilecek kadar büyük sayılarla düz ya da düşen başarısızlık ve yeniden iş oranları gösterir. Şüpheli okumalar arasında işte hiçbir değişiklik olmadan dağıtım sıklığında ani sıçrama, bir ay içinde sıfıra düşen bir başarısızlık oranı ve müşteri şikâyetleri aynı kalırken düşen bir kurtarma süresi vardır. Her biri bir kutlamadan önce enstrümana bakmayı gerektirir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Hizmet başına beş DORA metriğinin hepsini kullanmak | Araştırmaya dayalı, hızı kararlılıkla dengeler, nesnel olaylardan hesaplanır | Temiz birleşen bir iş hattı ve olay kaydı gerektirir; işin değerli olup olmadığı konusunda sessizdir |
| Yalnızca dağıtım sıklığını ve teslim süresini raporlamak | İş hattından toplaması kolay | Yalnızca hızı ödüllendirir ve kararlılık ölçümlerinin yakaladığı oyunlaştırmayı tam olarak davet eder |
| Takım başına yerel tanımlar kullanmak | Takımın mimarisine ve yayın tarzına uyar | Takımlar karşılaştırılamaz ve toplulaştırmalar güvenilmezdir |
| Kuruluş genelinde tek tanım kullanmak | Tutarlı raporlama; basit yönetişim | Toplu iş pencereli ana bilgisayarlar ya da düzenlemeye tabi yayınlar gibi bazı sistemlere kötü uyar |
| Takımları yayımlanmış performans bantlarına karşı karşılaştırmak | Liderlere konumun hızlı bir hissini verir | Bağlamı yok sayar ve araştırma, bantların her takım için hedef olmadığı konusunda uyarır |
| Metrikleri takım öz iyileştirmesi için kullanmak | Sahiplenmeyi kurar; dürüst veriyi destekler | Tek bir puan isteyen liderlere daha az rahatlık sunar |

Merkezî gerilim karşılaştırılabilirlik ile dürüstlük arasındadır. Bir sayı takımları yargılamak için ne kadar çok kullanılırsa veri o kadar çok eğilir ve onun sahibi takıma o kadar az yardım eder. Metrikleri önce iyileştirmeyi desteklemek için kullanın, kusurlu karşılaştırılabilirliği kabul edin ve lider düzeyi görünümleri eğilimler ve dağılımla sınırlı tutun. Düzenlemeye tabi raporlamanın standart bir tanım gerektirdiği yerde onu belgeleyin ve takım düzeyi iyileştirme görünümünü ayrı tutun.

## Takımınızla tartışılacak sorular

**1. Beş DORA sayımızdan hangileri olaylardan, hangileri birinin hatırlamasından geliyor?**
Her metriği kaynağına kadar izleyin. Bir kişinin tarih yazdığı ya da bir şeyin başarısızlık sayılıp sayılmayacağına karar verdiği yerleri not edin. Kolaylaştırıcı, grubun elle yapılan adımları sayıyı ne kadar bozabileceklerine göre sıralamasına ve hangisinin önce otomatikleştirileceği konusunda anlaşmasına yardım etmelidir.

**2. Teslim süresi saatimiz tam olarak nerede başlıyor ve duruyor ve herkes hemfikir mi?**
Üç kişiden yayımlanan son değişiklik için saatin başlangıcını ve bitişini anlatmasını isteyin. Yanıtları karşılaştırın. Farklar genellikle ilk işleme, birleştirme, bir kayıt ve onay adımı çevresinde ortaya çıkar. Tek bir tanım üzerinde anlaşın ve yazın ve seçilen tanımın hangi bekleme süresini gizlediğini tartışın.

**3. Bizim için başarısız dağıtım ne sayılır ve kim karar verir?**
Son beş üretim olayını gözden geçirin ve her birinin bir dağıtıma ait olup olmadığını sorun. Anlaşmazlıklar kuralın nerede belirsiz olduğunu gösterir. Bir yapılandırma değişikliğiyle, bir geri almayla ya da hızlı bir yamayla düzeltilen bir başarısızlığa ne olduğunu tartışın ve her birinin nasıl kaydedileceğine karar verin.

**4. Dağıtım sıklığı gelecek çeyrek iki katına çıksa, bunu iyi haber saymadan önce neyi denetlerdik?**
Gruptan sayının daha fazla değer sunmadan yükselebileceği yolları adlandırmasını isteyin. Değişiklik boyutuna, kullanıcıya görünür değişiklik içeren dağıtımların payına ve başarısızlık ile yeniden iş oranlarına bakın. Kolaylaştırıcı hangi denetimlerin panoda zaten var olduğunu ve hangilerinin eklenmesi gerektiğini not etmelidir.

**5. Bu sayılar takımın dışındaki insanlar tarafından nasıl kullanılıyor?**
Kimin gördüğünü, hangi biçimde ve onlarla ne yaptığını sorun. Diğer takımlarla karşılaştırmayı, dışarıdan konan hedefleri ve bireysel değerlendirmelerde kullanımı dinleyin. Takımın kendi verisine güvenebilmesi için bu kullanımda neyin değişmesi gerektiğini ve değişikliği yapmaya kimin yetkisi olduğunu tartışın.

**6. Hangi tek yetenek en zayıf sayımızı en çok iyileştirir ve denemek için küçük bir deney nedir?**
En zayıf metriği seçin ve büyük partiler, yavaş inceleme, kararsız testler ya da elle yapılan bir yayın adımı gibi olası nedenleri konuşun. Bir neden seçin ve etkiyi görmenin bir yoluyla dört ila altı haftalık bir deney tasarlayın. Sonucu gözden geçirmek için bir tarih ve veriyi kimin getireceği konusunda anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları bu sayıları süren yeteneklerin sahibidir: küçük değişiklikler, otomatik testler, hızlı bir iş hattı ve birbirlerinin işini inceleme alışkanlığı. Metrikleri kendi mühendislik uygulamaları için bir ayna olarak kullanmalı, kendi iyileştirme hedeflerini belirlemeli ve yukarıya tek bir sayı raporlama baskısına direnmelidir. Tanımlara da onlar karar verir; bu yüzden onları dürüst tutma görevini taşırlar (bkz. Konu 2.7 “Çekme isteği ve kod inceleme metrikleri”).

### Hizmet ve operasyon takımları

Operasyon takımları, başarısızlık ve kurtarma ölçümlerinin bağlı olduğu olay kaydını tutar. Teslimat takımına olayları onlara neden olan dağıtımla etiketleyerek, başarısızlıkları hızla saptayan izleme sağlayarak ve her başarısız dağıtımın incelemesine katılarak yardım ederler. Teslimat hızının, nöbet yükü olarak kendilerinin emdiği kararsızlığı satın almadığını izlemeli (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”) ve kurtarma süresini azaltan geri alma ve saptama yatırımlarını istemelidirler.

### Liderlik ve yönetişim

Liderler hizmetler arasında eğilimleri ve dağılımı, iki metrik grubunu birlikte ve arkasındaki iyileştirme deneylerini istemelidir. “Her gün dağıt” gibi bir sayıyı kilitleyen hedeflerden ve metrikleri bireysel değerlendirmelerde kullanmaktan kaçınmalıdırlar. Yönetişim organları, süreç değiştikçe kararlılığın sabit kalıp kalmadığını göstererek, sayıları daha hafif bir değişiklik onay yolunun güvenli olduğuna kanıt olarak ya da onu yeniden düşünmek için bir neden olarak kullanabilir (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”).

### Müşteriler ve kullanıcılar

Müşteriler nadiren dağıtım sayılarını önemser. Bir düzeltmenin ya da özelliğin kendilerine ne kadar çabuk ulaştığını, bir yayının güvendikleri bir şeyi ne kadar nadir bozduğunu ve bozduğunda hizmetin ne kadar hızlı geri geldiğini önemserler. DORA metriklerini bu sonuçların olası olduğuna dair iç kanıt olarak kullanın ve kullanılabilirlik ve memnuniyet gibi müşteriye dönük ölçümlerle tamamlayın (bkz. Konu 5.3 “Kullanılabilirlik metrikleri” ve Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci, bir platform takımı ve hizmet masası tarafından desteklenen, bir ürün takımına ait bir ödeme hizmeti işletir. Aşağıdaki bütün sayılar örnekleyicidir.

Takım üretime haftada yaklaşık iki kez dağıtım yapmaktadır; teslim süresi (ilk işlemeden üretime) medyan 11 gün ve 85. yüzdelik 26 gündür. Önceki çeyrekte 24 dağıtımdan 6’sını (yüzde 25, örnekleyici) bir geri alma ya da olay izledi. Bu başarısızlıkların medyan kurtarma süresi 3 saatti. Değişiklik onay kurulu haftalık toplanır ve ödeme hizmetine yapılan her değişikliği inceler.

Takım bir plan önerir. Büyük değişiklikleri bölecek, iş hattına otomatik denetimler ekleyecek, yeni davranışı özellik anahtarlarının arkasına koyacak ve kuruldan denetimleri geçen düşük riskli değişiklikleri standart değişiklikler olarak önceden yetkilendirmesini isteyecektir. Değişiklik yöneticisi temkinlidir; bu yüzden takım bütün beş metriği aylık raporlamayı ve başarısızlık oranı art arda iki ay yükselirse deneyi durdurmayı kabul eder.

Bir çeyrek sonra sayılar (örnekleyici) ayda 19 dağıtım, 85. yüzdeliği 8 gün olan medyan 3 günlük teslim süresi, yüzde 8 değişiklik başarısızlık oranı, medyan 40 dakikalık kurtarma süresi ve yüzde 5 yeniden iş oranıdır. Takım memnundur ve bir bölge yöneticisi ödeme takımının dağıtım sıklığını diğer ürün takımlarıyla karşılaştırmak ve ortak bir hedef koymak ister.

Takım lideri yeniden iş ve başarısızlık dökümünü incelemeye getirir ve bir oyunlaştırma riski fark eder. Dağıtım sıklığına, iş hattının saydığı bir dizi küçücük yapılandırma dağıtımı yardımcı olmuştur ve medyan değişiklik boyutu gerçek işten daha hızlı küçülmektedir. Daha kötüsü, geçen aydaki iki olay, iş hattının “planlı” etiketiyle normal bir dağıtım olarak kaydettiği bir yapılandırma değişikliğiyle düzeltilmiştir; bu yüzden yeniden iş oranı olduğundan düşük gösterilmiştir. Değişiklik başarısızlık oranı, kısmen bu iki olay özgün dağıtımlarına bağlanmadığı için iyi görünmüştür.

Karar günlüğüne kaydedilen karar dört bölümlüdür. Yalnızca yapılandırma içeren dağıtımlar ayrı sayılır ve ana sayının yanında gösterilir. Dağıtım nedeni etiketi aylık 10 dağıtımlık bir örnek üzerinde denetlenir. Olay aracı artık neden bir değişiklik olduğunda dağıtım tanımlayıcısını zorunlu kılar. Ve takım ortak dağıtım sıklığı hedefini reddeder, bunun yerine her hizmetin eğilimini ve başarısızlık oranını gösteren ortak bir görünüm sunar. Değişiklik yöneticisi, standart değişiklikler için önceden yetkilendirmeyi, bir sonraki çeyreğin sonunda bir gözden geçirmeyle sürdürmeyi kabul eder.

## Sektör mercekleri

**Girişim (startup).** Küçük bir takım çoğu zaman günde birçok kez dağıtım yapar ve ince olay kayıtları vardır; bu yüzden dağıtım sıklığı ve teslim süresi kolaydır ama başarısızlık verisi yamalıdır. Her geri almayı ve acil düzeltmeyi iş hattında etiketleyerek ve dağıtım tanımlayıcısıyla basit bir olay günlüğü tutarak başlayın. Yüksek bir sıklığın, başarısızlık oranına bakmadan kararlılığın iyi olduğuna sizi ikna etmesine izin vermeyin.

**Küçük işletme.** Barındırılan bir platform ya da dışarıdan sağlanan bir geliştirici yalnızca ayda bir, az araçla dağıtım yapabilir. Birkaç ay boyunca sayabildiğinizi elle sayın, tedarikçiden dağıtım ve olay tarihlerini yazılı isteyin ve teslim süresine ve başarısızlık oranına odaklanın. Sayıları bir banda ulaşmak için değil, sürekli teslim edilen daha küçük değişikliklerin riski azaltıp azaltmayacağına karar vermek için kullanın.

**Büyük kurum.** Çok sayıda takım, çeşitli yayın tarzları ve modern ile eski sistemlerin karışımı, tutarlı tanımları zorlaştırır. Her metrik için ortak bir asgari tanım üzerinde anlaşın, yayımlayın ve bir takımın belirtilmiş bir nedenle daha katı yerel tanımlar eklemesine izin verin. Bir ortalama yerine hizmet başına dağılımı ve eğilimi göstererek toplulaştırın ve takım düzeyi ayrıntıyı yalnızca sahibi takıma ve onu destekleyen gruplara görünür tutun.

**Devlet ve kamu sektörü.** Yayın pencereleri, denetim kuralları ve satın alma sözleşmeleri nelerin mümkün olduğunu biçimlendirir ve bazı sistemleri tedarikçiler işletir. Metriklerin hesaplanabilmesi için sözleşmelere teslimat ve olay verisi haklarını dahil edin. Sayıları, bir modernizasyon programının başarısızlık oranlarını artırmadan teslim sürelerini kısalttığına kanıt olarak kullanın ve sonuçların seçilmemesi için bütün metrikleri birlikte raporlayın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon, bir fikir ile kullanımı arasındaki süreyi kısaltırken üretimi kararlı tutmaktır. Programın maliyetinin üç bölümü vardır: enstrümantasyon (iş hattı olayları, dağıtım etiketleri ve olay birleştirmesi), inceleme rutini (eğilimlere aylık bir bakış ve başarısızlık ve yeniden iş vakalarından üç aylık bir örnek) ve sayıların işaret ettiği iyileştirme işi, örneğin test otomasyonu ya da daha hızlı bir iş hattı. İlk ikisi mütevazıdır. Üçüncüsü gerçek harcamanın yattığı yerdir ve ölçüme değil mühendislik yeteneğine harcanır.

Getiri, sayıların kolaylaştırdığı kararlardan gelir. Bir takım bir değişiklik kuruluna küçük değişikliklerin güvenli olduğunu gösterebilir ve böylece bir onay adımını emekliye ayırabilir. Bir platform grubu hangi hizmetlerin yavaş iş hatları ya da zayıf geri almaları olduğunu görebilir ve yatırımını buna göre yapabilir. Bir operasyon takımı veriyle daha iyi bir saptama aracını savunabilir. Getiriyi, bir değişiklikten önce ve sonra işlemeden üretime süre, bir düzeltme gerektiren yayınların payı ve yayın başına nöbet yükü gibi kendiniz gözlemleyebileceğiniz örüntülerle anlatın. Bağlamınız farklı olacağı için beklenen getiri olarak diğer kuruluşlardan kıyaslama rakamları aktarmaktan kaçının. Toplam sahip olma maliyetine insanların zamanı egemendir; bu yüzden metrik kümesini küçük tutun ve toplamasını otomatikleştirin (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Metrikleri bireyler için bir performans puan kartı olarak ele almak.** Araştırma temelini bozar ve veriyi bozar. Yalnızca hizmet ve takım düzeyinde raporlayın.
- **“Her gün dağıt” ya da “bir günün altında teslim süresi” gibi hedefler koymak.** Hedef amacın yerine geçer. Bir iyileştirme yönü ve bir deney belirleyin ve sayıyı bir sinyal olarak tutun.
- **Takımları birbirine ya da yayımlanmış bantlara karşı sıralamak.** Bağlam farklıdır ve oyunlaştırma izler. Bir takımı kendi eğilimiyle karşılaştırın ve bantları yalnızca gevşek bir yönelim olarak kullanın.
- **Kararlılık olmadan hızı raporlamak.** Çift esastır. Çıktı hızı ve kararsızlık gruplarını her zaman birlikte gösterin.
- **Tanımların kaymasına izin vermek.** Başarısızlık, dağıtım ve teslim süresi başlangıcı araçla birlikte sessizce değişir. Bir tanımdaki her değişikliği nedeniyle kaydedin ve grafikte işaretleyin.
- **Her şeyin dağıtımını saymak.** Yapılandırma itmeleri, test ortamı yayınları ve aynı derlemenin yeniden dağıtımları sayıyı şişirir. Bir üretim dağıtımını tanımlayın ve diğer türleri ayrı gösterin.
- **Neyin yayımlandığını yok saymak.** Güçlü sayılar önemli olmayan işi gizleyebilir. Onları akış ve sonuç ölçümleriyle birlikte okuyun (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).
- **Yetenek yerine metriğin peşinden gitmek.** Teslim süresi en güvenilir biçimde partiler küçüldüğünde ve testler hızlandığında düşer. Uygulamayı iyileştirin ve sayının izlemesine izin verin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve saatler | Her kişi dağıtımı ve başarısızlığı farklı tanımlar | Birkaç takım tanımlarını belgeler | Metrik sicilinde saatler ve hariç tutmalarla metrik başına tek yazılı tanım | Tanım değişiklikleri kaydedilir ve grafiklerde işaretlenir; örnekler her çeyrek denetlenir | Tanımlar kararları bilgilendirmeyi bıraktığında tedarikçiler ve yönetişimle birlikte gözden geçirilir |
| Veri yakalama | Sayılar kayıtlardan elle derlenir | Bazı hizmetler için iş hattı verisi; olaylar elle bağlanır | Dağıtımlar, nedenler ve olay bağlantıları çoğu hizmet için otomatik yakalanır | Veri kalitesi (bağlantı oranı, etiket denetimi) ölçülür ve eğilim olarak izlenir | Olaylar, üzerinde anlaşılmış arayüzlerle takımlar ve tedarikçiler arasında paylaşılır |
| Sayıların kullanımı | Yukarıya tek bir puan olarak raporlanır | Takımlar kendi grafiklerine ara sıra bakar | Çıktı hızı ve kararsızlık grupları sahibi takım tarafından aylık birlikte gözden geçirilir | Eğilimler, koruma çizgisiyle finanse edilen iyileştirme deneylerini besler | Dağılım ve eğilimler kuruluş genelinde platform yatırımını ve değişiklik politikasını bilgilendirir |
| Oyunlaştırmaya karşı koruma çizgileri | Yok | Gayriresmî farkındalık | Her metrik için eşlenen koruma çizgileri listelenmiş | Koruma çizgileri ve örnekler gözden geçirilir, oyunlaştırma vakaları kaydedilir | Takımlar ve araçlar değiştikçe koruma çizgileri sürekli ayarlanır |

## Kontrol listesi

- [ ] Beş metrik; saatler, hariç tutmalar ve izlenen DORA rehberliğinin tarihi ve sürümüyle yazılı olarak tanımlanmıştır.
- [ ] Üretim dağıtımları iş hattı tarafından bir zaman damgası, bir sürüm ve bir sonuçla kaydedilir.
- [ ] Teslim süresi başlangıcı (ilk işleme, birleştirme ya da başka) belirtilmiş ve tutarlı uygulanmıştır.
- [ ] Olaylar, onlara neden olan dağıtım için çözüm sırasında doldurulan bir alan taşır.
- [ ] Her dağıtım bir neden etiketi taşır ve bir örnek aylık denetlenir.
- [ ] Süreler, sayılarla birlikte, medyan ve yüksek bir yüzdelik olarak raporlanır.
- [ ] Çıktı hızı ve kararsızlık metrikleri her hizmet için birlikte gösterilir.
- [ ] Değişiklik boyutu, dağıtım sıklığı ve teslim süresinin yanında izlenir.
- [ ] Sayılar bireysel değerlendirmelerde ya da takımları sıralamak için kullanılmaz.
- [ ] Adlandırılmış bir sahip metrikleri aylık gözden geçirir ve bir tanımdaki her değişikliği kaydeder.
- [ ] En zayıf metriğe bağlı bir iyileştirme deneyi, bir gözden geçirme tarihiyle yürümektedir.

## Yapay zekâ istemleri

**Beş metrik için bir sayfalık tanım kümesi yazın.**

```text
[Hizmet ya da uygulama adı] için DORA yazılım teslimat metriklerini tanımlıyorum.
Araçlarımız [sürüm denetimi barındırıcısı, CI/CD sistemi, olay aracı, ITSM
aracı]. Yayın tarzımız [sürekli, haftalık, aylık ya da başka]. Değişiklik teslim
süresi, dağıtım sıklığı, başarısız dağıtımdan kurtarma süresi, değişiklik
başarısızlık oranı ve dağıtım yeniden iş oranı için, saatin nerede başlayıp
durduğunu, nelerin sayıldığını ve hariç tutulduğunu, veri kaynağını ve bir
belirsizlik riskini içeren bir tanım taslağı hazırlayın. Kıyaslama değerleri
uydurmayın ya da uygulamamızın yayımlanmış herhangi bir performans bandına
uyduğunu iddia etmeyin. Varsayımlarınızı ve tanımları tamamlamak için
yanıtlamam gereken soruları listeleyin.
```

**Bir metrik kümesini oyunlaştırma riskleri için denetleyin.**

```text
Teslimat metriklerimizi şu anda şöyle hesaplıyoruz: [her metriğin, veri
kaynağının ve nasıl raporlandığının açıklaması]. Hedef kitle [takım, liderlik ya
da yönetişim organı]. Her metrik için, sayının gerçek bir iyileşme olmadan
şişirilebileceği, gizlenebileceği ya da bozulabileceği makul yolları listeleyin
ve onu yakalayacak eşlenen bir koruma çizgisi metriği ya da uygulaması önerin.
İstatistik uydurmayın. Varsayımlarınızı ve daha kesin olmak için ihtiyaç
duyacağınız bilgiyi listeleyin.
```

**Dağıtım ve olay veri dışa aktarımını çözümleyin.**

```text
[Sayı] üretim dağıtımının ve [sayı] olayın küçük bir dışa aktarımını şu
alanlarla yapıştıracağım: [alanları sıralayın, örneğin dağıtım kimliği, zaman
damgası, sonuç, neden etiketi, olay kimliği, açılış zamanı, çözülme zamanı,
dağıtım bağlantısı]. Kurtarma süresinin medyanını ve 85. yüzdeliğini, değişiklik
başarısızlık oranını ve yeniden iş oranını, her birinin arkasındaki sayıları
göstererek hesaplayın. Bağlantısı eksik ya da zaman damgası şüpheli kayıtları
işaretleyin. Verinin ötesinde tahmin yürütmeyin ya da sonucu dışarıdaki
kıyaslamalarla karşılaştırmayın. Varsayımlarınızı ve sonuçları sınırlayan veri
kalitesi sorunlarını listeleyin.
```

**Bir iyileştirme deneyi planlayın.**

```text
En zayıf teslimat metriğimiz [metrik adı], şu anda [raporlandığı gibi değer,
tarih aralığı ve sayılarla]. Takımın tartıştığı olası nedenler: [liste].
Kısıtlarımız [kısıtlar, örneğin düzenlemeye tabi yayınlar, paylaşılan test
ortamı]. Her biri bir hipotez, etkiyi gözlemlemenin bir yolu, bir koruma çizgisi
metriği ve bir riskle birlikte, dört ila altı haftalık üç küçük deney önerin.
Beklenen iyileşme rakamları uydurmayın. Varsayımlarınızı ve başlamadan önce neyi
denetlememiz gerektiğini listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): ilgili değişiklik, yayın ve olay konularını ve her DORA metriğinin yanında yer alması gereken koruma çizgisini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konunun gözden geçirilmiş bir sürümünün saatlerini, oyunlaştırma vektörlerini ve çapraz başvurularını tutarlı tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- DORA metrikleri, üçü çıktı hızı ve ikisi kararsızlık olmak üzere yazılım teslimatının beş ölçümüdür ve bir hizmet için birlikte okunduklarında en yararlıdırlar.
- Bunları yazılı tanımlarla iş hattı ve olay olaylarından hesaplayın, çünkü başarısızlık ve teslim süresi başlangıcı yargı kararlarıdır.
- Onları bir teslimat sistemi hakkında öğrenmek ve bir takımı kendi geçmişiyle karşılaştırmak için kullanın, asla insanları ya da takımları sıralamak için değil.
- Medyanları, yüksek yüzdelikleri ve sayıları raporlayın ve her metriği oyunlaştırmasını yakalayan bir koruma çizgisiyle eşleyin.
- Küçük partiler, hızlı saptama ve kolay geri alma gibi altta yatan yetenekleri iyileştirin ve sayıların izlemesine izin verin.
- İzlediğiniz rehberliğin sürümünü ve tarihini belirtin, çünkü tanımlar zaman içinde inceltilmiştir.

## Kaynaklar ve ileri okuma

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
