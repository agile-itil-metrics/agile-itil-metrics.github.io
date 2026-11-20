# Yapılandırma ve CMDB kalitesi metrikleri

**Bir yapılandırma veri tabanı, ancak insanlar bir değişiklikte ya da olayda kullanacak kadar ona güvendiğinde değerini kanıtlar. Bu yüzden kalitesini gerçek soruları ne kadar iyi yanıtladığıyla ölçün ve hizmetlerin sahibi olan takımların kendi kayıtlarını güncel tutmasına izin verin.**

## Genel bakış ve motivasyon

Bir veri tabanı sunucusu gece üçte arızalandığında, biri hangi hizmetlerin ona bağımlı olduğunu sorar. Bir takım bir değişiklik planladığında, biri başka neyin bozulabileceğini sorar. Yanıtlar, hizmetlerinizi oluşturan şeylerin ve bunların nasıl bağlandığının bir kaydından gelmelidir. Bu kayıt yapılandırma yönetiminin konusudur ve arkasındaki veri tabanı, genellikle CMDB olarak kısaltılan yapılandırma yönetim veri tabanıdır.

Bir [yapılandırma öğesi](https://en.wikipedia.org/wiki/Configuration_item) (CI), bir BT hizmetini sunmak için yönetilmesi gereken herhangi bir bileşendir: bir sunucu, bir uygulama, bir veri tabanı, bir ağ aygıtı, bir bulut hesabı, bir sözleşme. [Yapılandırma yönetim veri tabanı](https://en.wikipedia.org/wiki/Configuration_management_database), CI'lar, öznitelikleri ve aralarındaki ilişkiler hakkında bilgi depolar. Varlık yönetimi neye sahip olduğunuzu, sahibinin kim olduğunu ve neye mal olduğunu sorarken (bkz. Konu 7.1 “BT varlık yönetimi metrikleri”), yapılandırma yönetimi parçaların nasıl bir araya geldiğini ve neyin neye bağlı olduğunu sorar.

CMDB'lerin karışık bir itibarı vardır ve bu itibar hak edilmiştir. Çoğu, kapsamlı haritalar olarak kuruldu, kimsenin düzeltebileceğinden daha hızlı çürüyen verilerle dolduruldu ve sonra terk edildi. Çevik ve DevOps gelenekleri daha iyi bir başlangıç noktası sunar. Altyapılarını kod olarak tanımlayan takımların, çalıştırdıkları şeyin yetkili, sürümlenmiş bir tanımı vardır ve bunu ortak kayda otomatik olarak yayımlayabilirler. [Kod olarak altyapı](https://en.wikipedia.org/wiki/Infrastructure_as_code), kaydı teslimatın bir yan ürününe dönüştürür. ITIL 4 bu pratiği hizmet yapılandırma yönetimi olarak betimler ve kendi başına bir eksiksizlik yerine kararları desteklemek için gereken bilgiyi vurgular.

Bir yapılandırma kaydındaki kalitenin birkaç parçası vardır ve bunlar [veri bütünlüğü](https://en.wikipedia.org/wiki/Data_integrity) fikriyle örtüşür:

- **Bütünlük (eksiksizlik):** önemli olan CI'lar ve öznitelikler mevcuttur.
- **Doğruluk:** kaydın söylediği gerçeklikle örtüşür.
- **Güncellik:** değişiklikler yararlı olacak kadar çabuk kayda yansır.
- **Tutarlılık:** aynı şey farklı adlar altında iki kez kaydedilmez. Aynı şeye atıfta bulunan kayıtları eşleştirmek [varlık çözümleme](https://en.wikipedia.org/wiki/Entity_resolution) sorunudur.
- **İlişki kalitesi:** CI'lar arasındaki bağımlılıklar mevcuttur ve doğrudur. En çok değerin ve en çok çürümenin yaşandığı yer burasıdır.

Bir CMDB'nin en derin sınavı kullanımdır. İnsanların olaylar ve değişiklikler sırasında başvurduğu ve yanlış olduğunda düzelttiği bir kayıt sağlıklıdır. Yalnızca denetlenen bir kayıt değildir. Bu yüzden aşağıdaki ölçümler kalite ölçümlerini kullanım ölçümleriyle eşler.

[Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi bir ek nüansla geçerlidir: eksiksizlik, varsayılan değerlerle kolayca şişirilebilir ve doğruluk, denetlenmeden kolayca iddia edilebilir. Bağımsız kanıtta ve kullanım ölçümlerinde ısrar edin (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Sorularla başlayın.** Kaydın neyi yanıtlamasını istediğinize karar verin ve yalnızca onu kurun.
- **Daha küçük, güvenilir bir kaydı daha büyük, kuşkulu bir kayda tercih edin.** Kapsam, güven kazanıldıkça büyür.
- **Doğruluk kaynağının kaydı beslemesine izin verin.** Kaydı elektronik tablolu insanlar değil, işlem hatları, bulut API'leri ve keşif yazmalıdır.
- **Hizmet takımlarının kendi hizmetlerinin kayıtlarına sahip çıkmasına izin verin.** Bağımlılıklarını bilirler ve hataların bedelini hissederler.
- **Kaliteyle olduğu kadar kullanımla da ölçün.** İyi bir kayda başvurulur.
- **Gerçekliğe karşı denetleyin.** Kaydı, olanları öngörüp öngörmediğini sorarak sınayın.
- **Kaynağında düzeltin.** Yanlış bir kayıt bir belirtidir. Kaymaya izin veren süreci bulun.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL pratiği | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CI bütünlüğü | Gerekli tüm öznitelikleri geçerli değerlerle doldurulmuş kapsamdaki CI'ların payı | her gerekli özniteliği geçerli olan kapsamdaki CI'lar / kapsamdaki CI'lar | yüzde | CMDB, öznitelik kuralları | Hizmet yapılandırma yönetimi; BT varlık yönetimi | Bitti tanımı, hizmet betimlemesini içerir | Aylık |
| CI doğruluğu | Kaydı gerekli özniteliklerde kanıtla eşleşen örneklenmiş CI'ların payı | tüm gerekli özniteliklerde eşleşen örneklenmiş CI'lar / örneklenen CI'lar | yüzde | Canlı sistemle karşılaştırılan denetim örneği | Hizmet yapılandırma yönetimi | Kod olarak altyapı durumu gerçeklikle örtüşür | Üç aylık |
| Bağımlılık kapsamı | Yukarı ve aşağı akış bağımlılıkları eşlenmiş ve gözden geçirilmiş kritik hizmetlerin payı | son 90 günde gözden geçirilmiş bağımlılık haritası olan kritik hizmetler / kritik hizmetler | yüzde | CMDB ilişkileri ve inceleme kayıtları | Hizmet yapılandırma yönetimi; kullanılabilirlik yönetimi | Mimari ve hizmet sahipliği incelemesi | Üç aylık |
| Etki tahmini isabet oranı | Gerçekte etkilenen hizmetlerin CMDB'nin öngördüğü etki içinde olduğu olay ve değişikliklerin payı | etkilenen tüm hizmetlerin öngörüldüğü olaylar ya da değişiklikler / gözden geçirilen olaylar ya da değişiklikler | yüzde | CMDB sorgularıyla karşılaştırılan olay sonrası incelemeler ve değişiklik kayıtları | Olay yönetimi; değişiklik yetkilendirme | Eksik bağımlılıklara ilişkin suçlamasız inceleme bulgusu | Üç aylık |
| Yinelenen CI oranı | Başka bir CI'ın yinelemesi olan CI'ların payı | eşleştirme kurallarıyla yinelenen olarak işaretlenen ve incelemede doğrulanan CI'lar / kapsamdaki CI'lar | yüzde | CMDB eşleştirme raporu ve inceleme örneği | Hizmet yapılandırma yönetimi | Tek doğruluk kaynağı | Aylık |
| Güncelleme gecikmesi | Gerçek dünyadaki bir CI değişikliği ile CMDB'deki güncellemesi arasındaki gecikme | değişiklik olayından CMDB güncellemesine kadar geçen saat ya da gün sayısının medyanı ve 85. yüzdeliği | saat ya da gün | CMDB zaman damgalarıyla karşılaştırılan değişiklik olayları ve işlem hattı olayları | Hizmet yapılandırma yönetimi; değişiklik yetkilendirme | İşlem hattında otomatik kayıt | Aylık |
| CMDB kullanım oranı | CI'lara atıfta bulunan olay ve değişikliklerin payı ve bunlardan kullanıcıların kaydın yardımcı olduğunu bildirdiği olanların payı | geçerli bir CI'a atıfta bulunan kayıtlar / dönemdeki olaylar ve değişiklikler; ayrıca CI verisinin yardımcı olduğu, gözden geçirilmiş kayıtların payı | yüzde | ITSM aracı, kısa geri bildirim istemi | Olay yönetimi; değişiklik yetkilendirme | Takımların ortak kaydı işlerinde kullanması | Aylık |

“Kapsamdaki CI” kapsamını sınıf ve kritiklik bazında tanımlayın ve kaydedin. Bir CI yalnızca gerekli olarak adlandırdığınız özniteliklerde doğrudur. Güncelleme gecikmesi gerçek olayla (bir dağıtım ya da bir satın alma gibi) başlar ve CMDB bunu yansıttığında durur. Etki tahmini isabet oranı, gerçekte hangi hizmetlerin etkilendiğini kaydeden bir inceleme adımı gerektirir ve yalnızca o inceleme kadar güvenilirdir.

## Öneriler

### Kaydın ne için olduğuna karar verin

**1. CMDB'nin yanıtlaması gereken soruları yazın.** Tipik olanlar şunlardır: bu bileşene ne bağımlı, bu hizmetin sahibi kim, yakın zamanda ne değişti, buradaki bir arıza neyi etkiler ve hangisi destek dışı. Her soru için gereken CI sınıflarını, özniteliklerini ve ilişkilerini adlandırın. Bir soruyu yanıtlamak için gerekli olmayan her şey, dışarıda bırakılma adayıdır.

**2. En önemli hizmetlerle başlayın.** Kritik hizmetlerden bir avuç seçin, bunları uçtan uca eşleyin ve daha fazlasını eklemeden önce bunu doğru yapın. On hizmetin güvenilir bir haritası, bin hizmetin kuşkulu bir haritasından daha çok yardımcı olur. Güven ve kullanım arttıkça genişletin.

**3. Sınıfları, öznitelikleri ve ilişki türlerini sade biçimde tanımlayın.** Kısa bir CI sınıfı listesi (hizmet, uygulama, veri tabanı, ana makine, ağ, bulut kaynağı) ve ilişki türleri (şuna bağlıdır, şunun üzerinde çalışır, şuna bağlanır, şunun sahibidir) ihtiyaçların çoğunu karşılar. Her şeyi yakalamaya çalışan bir modeli doldurmak zor, sorgulamak daha da zordur. Yazılı bir model tutun ve onu bilinçli biçimde değiştirin.

### Kaydı kaynağından besleyin

**4. İşlem hatlarından ve koddan yayımlayın.** Altyapının ve uygulamaların kodla tanımlandığı yerde, teslimat işlem hattının her değişiklikte CI'ları oluşturmasını, güncellemesini ve emekliye ayırmasını sağlayın; buna kodun yanında bildirilen sahiplik ve bağımlılık bilgisi de dahildir. Bildirimi bir hizmetin bitti tanımının parçası olarak ele alın. Bu, güncelleme gecikmesini sıfıra yakın tutar ve kaydı çalışan şeyle hizalı tutar.

**5. Keşfi ikinci bir görüş olarak kullanın.** Ağ ve bulut [hizmet keşfi](https://en.wikipedia.org/wiki/Service_discovery), gerçekte neyin çalıştığını ve nasıl bağlandığını bulur. Bunu bildirilmiş kayıtla karşılaştırın. Farklar bulgudur: ya bildirimde bir şey eksiktir ya da olmaması gereken bir şey çalışmaktadır. Yalnızca keşif, sahiplik olmadan gürültülü veri üretir; bu yüzden onu yazmak için değil denetlemek için kullanın.

**6. Kararlı tanımlayıcılar ve eşleştirme kuralları kullanın.** Yinelemeler, farklı kaynaklar aynı şeyi farklı adlandırdığında ortaya çıkar. Her CI sınıfı için benzersiz bir tanımlayıcı üzerinde anlaşın, kaynak tanımlayıcılarını kaydedin ve yinelemeleri bulup birleştirmek için eşleştirme kuralları çalıştırın. Otomatik birleştirme farklı şeyleri birleştirebileceğinden eşleşmeleri bir örnek üzerinden elle gözden geçirin.

**7. Her hizmet takımına kendi diliminin sahipliğini verin.** Bir hizmeti geliştiren ve işleten takım, bağımlılıklarını bilmek ve hataları fark etmek için en uygun konumdadır. Bunu onlar için kolaylaştırın: bir şablon, planlamada kısa bir inceleme ve verileri kullanıldığında geri bildirim. Merkezî takımlar modele, araçlara ve denetimlere sahip olur, her kayda değil.

### Kaliteyi ve kullanımı ölçün

**8. Doğruluğu örnekleyerek denetleyin.** Her çeyrekte rastgele bir CI örneği çekin ve canlı sistemlere karşı denetleyin; ayrıca canlı sistemlerden ikinci bir örnek çekin ve kayıtta göründüklerini denetleyin. Doğruluğu sınıf bazında raporlayın ve ana hata kaynaklarını gösterin. Eğilimler anlamlı olsun diye örnekleme yöntemini sabit tutun.

**9. Haritayı olaylara karşı sınayın.** Önemli bir olay ya da değişiklikten sonra, gerçekte etkilenen hizmetleri CMDB'nin öngördüğüyle karşılaştırın. Kaçırılanları kaydedin ve eksik bağımlılıkları düzeltin. Bu, en anlamlı doğruluk sınavıdır; çünkü kaydı olaylara karşı denetler ve harita düzeltildikçe isabet oranı iyileşir. İnsanlar kaçırılanları kolayca bildirsin diye suçlamasız incelemeler kullanın (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”).

**10. Kullanımı izleyin ve yardımcı olup olmadığını sorun.** Olayların ve değişikliklerin CI'lara ne sıklıkla atıfta bulunduğunu sayın ve müdahale edenlere ve onaylayanlara kaydın yardımcı olup olmadığına dair kısa bir soru sorun. Olumlu yanıtlarla yükselen bir kullanım oranı, değerin en net işaretidir. Düşük bir kullanım oranı, insanların kayda güvenmediği ya da var olduğunu bilmediği anlamına gelir ve her ikisi de düzeltilebilir.

**11. Bağımlılık haritalarını sahiplerle düzenli gözden geçirin.** Yazılım evrildikçe bağımlılıklar değişir. Kritik hizmetlerin sahiplerinden haritalarını her çeyrekte, ideal olarak bir planlama ya da mimari konuşmasının parçası olarak, doğrulamalarını isteyin. Doğrulama tarihini bir öznitelik olarak kullanın ve gecikmiş haritaları gösterin.

### Dürüst ve orantılı tutun

**12. Kimsenin kullanmadığını emekliye ayırın.** Hiçbir sorunun gerektirmediği ve kimsenin başvurmadığı CI sınıflarını ve özniteliklerini kaldırın. Daha az ve daha iyi alanlar doğruluğu artırır. Modeli yılda bir gözden geçirin ve neyin neden kaldırıldığını kaydedin. Daha küçük bir kaydı doğru tutmak daha azdır ve kalite ölçümlerini dürüstçe karşılamayı kolaylaştırır.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlanır | Eşlenmiş koruma metriği ya da pratiği |
| --- | --- | --- |
| CI bütünlüğü | Gerekli öznitelikleri varsayılan değerler ya da yer tutucularla doldurmak; gerekli listeyi daraltmak | Varsayılan ve yer tutucu değerleri saymak; sabit gerekli liste; doğruluk örneği |
| CI doğruluğu | Kolay sınıfları örneklemek; bir temizlikten sonra denetlemek | Her iki yönden bağımsız çekilen rastgele örnek; sabit yöntem |
| Bağımlılık kapsamı | Haritaları okumadan gözden geçirilmiş işaretlemek; yalnızca önemsiz bağımlılıkları eşlemek | Etki tahmini isabet oranı; bir haritayı canlı trafiğe karşı rastgele denetlemek |
| Etki tahmini isabet oranı | İyi giden olayları seçmek; etkilenen hizmetleri dar kaydetmek | Tüm önemli olayları incelemek; sahip takım dışından gözden geçirenler |
| Yinelenen CI oranı | Oranı düşürmek için farklı CI'ları birleştirmek; eşleştirme kurallarını gevşetmek | Birleştirmelerin doğruluğunu örneklemek; birleştirme kurallarını günlüğe kaydetmek |
| Güncelleme gecikmesi | Değişiklik olaylarını geriye tarihlemek; yalnızca otomatik güncellemeleri saymak | Kaynak sistemlerden olay ve güncelleme zaman damgalarını karşılaştırmak; denetim izi |
| CMDB kullanım oranı | CI atıflarını biçimsel olarak eklemek; alanı herhangi bir değerle zorunlu kılmak | Atıf yapılan CI'ların ilgili olduğunu denetlemek; yararlılık üzerine geri bildirim sorusu |

Sağlıklı bir okuma; yüksek ölçülmüş doğruluğa sahip daha küçük bir kayıt, gerçek olayları öngören bağımlılık haritaları, otomatik sınıflar için sıfıra yakın güncelleme gecikmesi ve yardımcı olduğu için kaydı kullandığını söyleyen insanlardır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Kapsamlı CMDB | Geniş görünüm; birçok kullanım durumunu destekler | Doğru tutmak pahalı; çürür |
| Asgari, soru güdümlü CMDB | Güvenilir ve ucuz | Boşluklar; büyüme disiplini gerektirir |
| Keşif güdümlü doldurma | Bilinmeyeni bulur; düşük elle emek | Gürültülü; sahiplik ve amaçtan yoksun |
| İşlem hattı güdümlü doldurma | Doğru; düşük gecikme | İşlem hatları aracılığıyla kurulanlarla sınırlı |
| Kayıtların merkezî sahipliği | Tutarlılık | Yavaş; bilgiden uzak |
| Kayıtların takım sahipliği | Doğru ve hızlı | Değişkenlik; şablonlar ve denetimler gerektirir |
| Çizge tarzı model | İlişki ve etki sorguları için doğal | Beceri ve araç gerektirir |
| İlişkisel tablo modeli | Tanıdık ve basit | Derin bağımlılık sorguları için kullanışsız |

Düz yazıyla yanıt şudur: küçük ve soru güdümlü başlayın, işlem hatlarından doldurun ve keşfi ikinci görüş olarak kullanın, kayıtların sorumluluğunu hizmet takımlarına verin. [Çizge veri tabanı](https://en.wikipedia.org/wiki/Graph_database), bağımlılık sorularını sormayı doğal kılabilir; model basit tutulursa geleneksel bir veri tabanı da işe yarar.

## Takımınızla tartışılacak sorular

**1. CMDB'nin yanıtlamasını en son neyi dilemiştik ve yanıtlayabildi mi?**
Birinin bağımlılık araştırdığı yakın tarihli bir olayı ya da değişikliği hatırlayın. Ne buldular ve bunun yerine ne yaptılar? Kolaylaştırıcı, soruyu ve kayda başvurulup başvurulmadığını kaydetmelidir. Sonuç, kaydın amacı için ilk adaydır.

**2. En önemli hizmetimiz şimdi arızalansa öngörülen etkiye ne kadar güveniyoruz?**
CMDB'den öngörülen etkiyi isteyin ve hizmeti bilen insanların inandıklarıyla karşılaştırın. Farkları not edin. Önce hangi bağımlılığın doğrulanacağı ve bunu kimin denetleyeceği üzerinde anlaşın.

**3. Her hizmet için kaydın sahibi kim ve bunu biliyorlar mı?**
Kritik hizmetleri ve CMDB girdilerinin sahiplerini listeleyin. Sahiplerin bildiğini ve yakın zamanda gözden geçirdiğini sorun. Sahibin “CMDB takımı” olduğu yerde, sahipliği hizmet takımına nasıl taşıyacağınızı tartışın.

**4. Zorunlu bir alanı tatmin etmek için neyi uyduruyoruz?**
Varsayılan değerleri ve yer tutucuları arayın. Bunlar, modelin kimsenin bildiğinden fazlasını nerede istediğini gösterir. Alanı kaldırmaya, otomatikleştirmeye ya da gerçek kaynağı bulmaya karar verin.

**5. Kaydımız çalışan şeyle nerede çelişiyor?**
Bir hizmet için keşif çıktısını kayıtla karşılaştırın. Her fark için kaydın mı yoksa gerçekliğin mi değişmesi gerektiğini sorun. Konuşma, hem bayat veriyi hem de yetkisiz bileşenleri bulma eğilimindedir.

**6. Neyi kaydetmeyi bırakırdık?**
Altı aydır kimsenin kullanmadığı sınıfları, öznitelikleri ve ilişkileri listeleyin. Her biri ortadan kalksa ne olacağını sorun. İkisini kaldırmak ve kimsenin fark edip etmediğini gözlemlemek üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları hizmetlerinin neye bağlı olduğuna dair bilgiyi elinde tutar ve kaydı doğru tutmak için en uygun konumdadır. Sahipliği ve bağımlılıkları kodlarının yanında bildirmeli, tasarım değiştiğinde bunları gözden geçirmeli ve değişiklik planlarken kaydı kullanmalıdır. Hizmet betimlemesinin güncellenmesini içeren bir bitti tanımı, kaydı işe yakın tutar.

### Hizmet ve operasyon takımları

Operasyon takımları olaylar ve değişiklikler sırasında kayda başvurur; bu yüzden hatalarını ilk onlar hisseder. İncelemelerde kaçırılanları bildirmeli, keşif denetimleri yürütmeli, eşleştirme kurallarını sürdürmeli ve sahiplere geri bildirim vermelidir. Ayrıca araçları ve denetim örneklerini işletirler.

### Liderlik ve yönetişim

Liderler etkinin ve riskin görünür olmasını ister ve çoğu zaman hayal kırıklığı yaratan büyük CMDB programlarını destekler. Kayıt sayıları yerine kullanım ve doğruluk kanıtı istemeli, işlem hattı entegrasyonunu finanse etmeli ve iyi yapılmış daha küçük bir kapsamı kabul etmelidir. Yönetişim, etki tahmini isabet oranını ve boşluk listesini görmeyi beklemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar, olaylar daha hızlı teşhis edildiğinde ve değişiklikler bağımlı hizmetleri bozma olasılığı azaldığında yarar görür. CMDB'yi nadiren görürler; ancak etkilerini, etkilenen hizmetleri doğru adlandıran iletişimde ve değişikliklerden sonra daha az sürprizde görürler. Olaylardan sonraki geri bildirimleri, etki resminin doğru olup olmadığını gösterir.

## Uygulamada: çevik bir ITIL örneği

Ulusal bir havayolunun teknoloji grubu yaklaşık 300 uygulama ve bir müşteri rezervasyon platformu işletir. Aşağıdaki sayılar açıklayıcıdır.

CMDB 180.000 CI barındırır ve beş yıl önce bir keşif aracıyla dolduruldu. Hizmet yönetimi başkanı, bunu tutmaya değip değmediğini bilmek ister. Küçük bir takımdan bunu sınamasını ister. Kalite için 150 örneklenmiş CI'ı denetlerler ve beş gerekli özniteliğe göre yüzde 71 doğru bulurlar. Harita için son 20 önemli olayı gözden geçirip gerçekte etkilenen hizmetleri CMDB'nin öngördüğüyle karşılaştırırlar: 20'nin 6'sında etkilenen tüm hizmetleri öngörmüştür; isabet oranı yüzde 30'dur. Kullanım için, son çeyrekteki olayların yüzde 12'si bir CI'a atıfta bulunmuştur ve müdahale edenlere yapılan kısa bir ankette çoğu ayrı bir wiki sayfasına güvendiğini söylemiştir. Yinelenen CI'lar toplamın yüzde 9'udur.

Takım, hizmet sahipleriyle dört karar alır. Kapsamı, en çok müşteri taşıyan 40 hizmete, beş CI sınıfı ve dört ilişki türüyle daraltır. Her hizmet takımından sahibini, bağımlılıklarını ve çalışma konumunu kodlarıyla birlikte tutulan kısa bir dosyada bildirmesini ister; işlem hattı bunu her yayında CMDB'ye yayımlar. Keşfi haftalık çalıştırır ve farkları sahiplere raporlar. Olay incelemesine bir alan ekler: “CMDB öngörüsü doğru muydu?” ve her kaçırmayı iki hafta içinde düzeltir.

İki çeyrek sonra, kapsamı daraltılmış CMDB 14.000 CI barındırır, örneklenen kümede doğruluk yüzde 92'dir, işlem hattındaki hizmetler için yayından kayda güncelleme gecikmesi bir saatin altındadır ve son 12 olayda isabet oranı yüzde 75'tir. Olaylarda CMDB kullanımı yüzde 58'e yükselmiştir ve müdahale edenler wiki sayfasına artık gerek olmadığını söyler. Baş operasyon sorumlusu, diğer 260 uygulamayı bir anda dahil etme planı ister. Hizmet yönetimi başkanı, her üç ayda on hizmet eklemeyi, her birinin bir test olayında kararlaştırılan düzeyin üzerinde isabet oranı kazanmasının ardından yapmayı önerir ve önceki geniş kayda hiç güvenilmediğini açıklar. Karar kaydedilir ve her çeyrekte bir inceleme yapılır.

## Sektör mercekleri

**Girişim (startup).** Bir hizmet kataloğu ve altyapı kodunun ötesinde CMDB'ye az ihtiyaç vardır. Hizmet sahiplerini ve bağımlılıkları depoda tutun ve ondan bir harita üretin. Bir veri tabanını yalnızca sorular dosyaları aştığında ekleyin.

**Küçük işletme.** Basit bir diyagram ve sahipleri ve tedarikçileriyle bir sistem listesi yeterli olabilir. Her önemli değişiklikten sonra güncelleyin. Küçük bir ortam için platform satın almaya direnin, ama diyagramı güncel tutun; kesintide paha biçilemezdir.

**Büyük işletme.** Ölçek bir model, federe sahiplik ve satın almalar dahil birkaç kaynakla entegrasyon gerektirir. Tanımlayıcıları ve çekirdek modeli standartlaştırın, takımların bunu kurallar içinde genişletmesine izin verin ve kullanımı ve doğruluğu alan bazında ölçün. Kalıcı bir eşleştirme ve temizleme işlevi yürütmeyi bekleyin.

**Kamu sektörü.** Hizmetler çoğu zaman uzun ömürlü sistemlere, yüklenicilere ve paylaşımlı altyapıya dayanır ve olay etkisi kamuyu etkileyebilir. Tedarikçilere ve paylaşımlı platformlara olan bağımlılıkları açıkça eşleyin, denetimler için kayıt tutun ve süreklilik planlamasıyla hizalanın (bkz. Konu 5.6 “Hizmet sürekliliği metrikleri”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler; modelleme ve yönetişim emeği, işlem hatlarının ve keşfin entegrasyonu, bir miktar araç ve denetim ile düzeltme emeğidir. Pek çok kurum platforma zaten sahiptir. İşlem hattı aracılığıyla doldurma, şablon bir kez hazır olduğunda ucuzdur. Her şeyi bir anda doldurmaya yönelik büyük programlar pahalı olmuştur ve çoğu zaman başarısız olmuştur.

Getiriler daha kısa olaylar, daha güvenli değişiklikler ve bilgi aramak için daha az harcanan zamandır. Gerekçeyi kendi kanıtlarınızdan kurun: müdahale edenlerin tipik bir olayda bağımlılıkları bulmaya harcadığı zaman, eksik bağımlılık bilgisinin teşhisi geciktirdiği olayların payı ve beklenmedik etkiye yol açan değişiklikler. Etki tahmini isabet oranı, kaydın yardımcı olup olmayacağının doğrudan bir ölçüsüdür. Kaynağını izleyemediğiniz sürece, olayların ne kadarının değişiklikten kaynaklandığına ya da kesintilerin maliyetine dair yayımlanmış iddiaları aktarmaktan kaçının. Büyük, kuşkulu bir kaydı tutmanın maliyetini küçük, güvenilir bir kaydın değeriyle karşılaştırın.

## Anti-desenler ve tuzaklar

- **Önce her şeyi doldurmak.** Dev, bayat bir kayıt güveni yok eder. Kritik hizmetlerle başlayın.
- **Tek kaynak olarak keşif.** Bir şeyin neden var olduğunu ya da sahibinin kim olduğunu söyleyemez. Bildirimlerle birleştirin.
- **Bütünlüğü denetleyip buna kalite demek.** Eksiksiz ama yanlış, eksik ama doğrudan kötüdür. Doğruluk için örnekleyin.
- **Tüm verinin sahibi olan merkezî takımlar.** Onu bilmezler. Sahipliği hizmet takımlarına verin.
- **Varsayılan değerli zorunlu alanlar.** Eksiksiz görünürler ve bilgi taşımazlar. Kaldırın ya da otomatikleştirin.
- **CI sayısıyla ölçmek.** Daha fazlası daha iyi değildir. Doğruluğu, isabet oranını ve kullanımı ölçün.
- **İlişkileri göz ardı etmek.** Bağımlılıklar olmadan bir CMDB bir envanterdir. Kritik hizmetlerin haritasına yatırım yapın.
- **İnsanları kaçırmalar için suçlamak.** Bildirmeyi bırakırlar. Kaçırılan bir bağımlılığı bulgu olarak ele alın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Kapsam ve model | Keşfin bulduğu her şey | Model tanımlı; geniş kapsam | Soru güdümlü model; kritik hizmetler eşlenmiş | Kapsam, isabet oranı ve kullanım gerektirdikçe büyür | Takımlar ve tedarikçiler arasında federe model; paylaşılan tanımlayıcılar |
| Doldurma ve kalite | Elle ya da tek seferlik yükleme | Zamanlanmış keşif ve içe aktarmalar | İşlem hatları koddan yayımlar; denetim olarak keşif; örnekleme denetimleri | Doğruluk, gecikme ve yinelemeler ölçülür ve eğilimleri izlenir | Otomatik mutabakat ve sahip doğrulamasıyla gerçek zamanlı beslemeler |
| Kullanım | Nadiren başvurulur | Birkaç takım kullanır | Olaylarda ve değişikliklerde standart pratik olarak atıf yapılır | Etki tahmini olaylara karşı sınanır; kullanım ve yararlılık izlenir | Kayıt otomatik kararları ve paylaşılan tedarikçi haritalarını bilgilendirir |

## Kontrol listesi

- [ ] CMDB'nin yanıtlaması gereken sorular yazılıdır.
- [ ] Kapsam, tanımlı bir büyüme kuralıyla kritik hizmetlerle sınırlıdır.
- [ ] Modelin küçük bir sınıf, öznitelik ve ilişki türü kümesi vardır.
- [ ] Her kritik hizmetin, kaydını son çeyrekte doğrulamış bir sahibi vardır.
- [ ] İşlem hatları, kod olarak kurulan hizmetler için CI değişikliklerini yayımlar.
- [ ] Keşif sonuçları kayıtla karşılaştırılır ve farklar gözden geçirilir.
- [ ] Her çeyrekte her iki yönde rastgele bir doğruluk örneği denetlenir.
- [ ] Olay incelemeleri, öngörülen etkinin doğru olup olmadığını kaydeder.
- [ ] Olaylarda ve değişikliklerde CMDB kullanımı, bir yararlılık sorusuyla izlenir.
- [ ] Kullanılmayan sınıflar ve öznitelikler bir takvime göre emekliye ayrılır.

## Yapay zekâ istemleri

**Soruları ve kapsamı tanımlayın.**

```text
[kurum türü ve hizmetler] işletiyoruz. Yapılandırma bilgisine ihtiyaç
duyduğumuz tipik durumlar: [olayları, değişiklikleri, denetimleri listeleyin].
CMDB'mizin yanıtlaması gereken soruların, her biri için gereken CI sınıflarının,
özniteliklerin ve ilişkilerin bir listesini ve en kritik hizmetlerin asgari bir
başlangıç kapsamını taslak olarak hazırla. Araç uydurma. Varsayımlarını ve
hizmet sahipleriyle doğrulanacakları listele.
```

**Bir etki tahmini kaçırmasını çözümleyin.**

```text
[tanım] olayından sonra CMDB şu etkilenen hizmetleri öngördü: [liste] ve gerçekte
etkilenen hizmetler şunlardı: [liste]. Her farkın olası nedenlerini (eksik
bağımlılık, yanlış ilişki, bayat veri, dolaylı bağımlılık) açıkla, her birinin
nasıl doğrulanacağını öner ve kaynakta bir düzeltme öner. Bilginin
desteklemediği nedenleri varsayma. Varsayımlarını listele.
```

**Hizmet takımları için bir bildirim dosyası tasarlayın.**

```text
Bir hizmet takımının, hizmeti CMDB için betimlemek üzere kodunun yanında
tuttuğu kısa, insan tarafından okunabilir bir bildirim öner: sahip, destek
irtibatı, katman, bağımlılıklar, çalışma konumu ve veri sınıflandırması.
İşlem hattının uygulayabileceği doğrulama kurallarını ve [hizmet türü] için
asgari bir örneği ekle. Bunu [soruları yapıştırın] içindeki soruların
gerektirdikleriyle sınırlı tut. Varsayımlarını ve güvenlikle gözden
geçirilecek alanları listele.
```

**Üç aylık bir doğruluk denetimi planlayın.**

```text
CMDB'mizde şu sınıflarda [sayı] CI var: [liste]. Her iki yönde (CMDB'den
gerçekliğe ve gerçeklikten CMDB'ye) çekilen rastgele örneklerle üç aylık bir
denetim tasarla; her sınıf için neyin denetleneceğini, doğruluğun ve hata
kaynaklarının dürüstçe nasıl raporlanacağını ve kendi ödevimizi
notlandırmaktan nasıl kaçınılacağını söyle. İstatistiksel kesinliği abartma.
Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir yapılandırma kalitesi metriği için eşlenmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir CMDB metriği girdisinin oyunlama yolunu, koruma önlemini ve bağımsız kanıt kuralını taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- CMDB'yi en önemli hizmetler hakkında adlandırılmış soruları yanıtlamak için kurun ve güven büyüdükçe büyütün.
- Onu işlem hatlarından ve koddan doldurun, keşfi ikinci görüş olarak kullanın ve hizmet takımlarının kendi kayıtlarına sahip çıkmasına izin verin.
- Kaliteyi olaylara karşı sınayın: öngörülen etkiyi olaylarda gerçekte olanla karşılaştırın.
- CI sayısını değil, kullanımı ve yararlılığı ölçün.
- Doğruluk için her iki yönde bağımsız kanıttan örnekleyin.
- Kimsenin kullanmadığını emekliye ayırın ve hataları kaynağında düzeltin.

## Kaynaklar ve ileri okuma

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
