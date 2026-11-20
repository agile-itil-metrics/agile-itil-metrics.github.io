# BT varlık yönetimi metrikleri

**Bulamadığınız şeyi destekleyemez, güvenceye alamaz ya da akılcı biçimde ödeyemezsiniz; bu yüzden varlık kayıtlarınızın ne kadar doğru, eksiksiz ve güncel olduğunu ölçün ve varlıkları yılda bir kez yapılan bir temizlik yerine gündelik işin yan ürünü olarak kaydetme alışkanlığını edinin.**

## Genel bakış ve motivasyon

Her hizmet bir şeylerin üzerinde durur: dizüstü bilgisayarlar, sunucular, lisanslar, bulut hesapları, ağ aygıtları ve bunlara bağlı veriler ile sözleşmeler. [BT varlık yönetimi](https://en.wikipedia.org/wiki/IT_asset_management) (ITAM), BT ortamının yaşam döngüsü yönetimini ve stratejik karar almayı desteklemek için finansal, sözleşmesel ve envanter işlevlerini birleştiren iş uygulamaları bütünüdür. Diğer pratiklerin dayandığı soruları yanıtlar. Neye sahibiz? Nerede? Sorumlusu kim? Maliyeti ne? Ne zaman yenilenmeli, yamalanmalı ya da değiştirilmeli?

Sürekli teslimat ile ITIL bu alanda zahmetli biçimde buluşur. Yazılımı sürekli teslim eden takımlar altyapıyı sürekli oluşturur ve yok eder: kapsayıcılar, sanal makineler, test ortamları ve bulut hesapları dakikalar içinde ortaya çıkar. Üç ayda bir güncellenen bir elektronik tablo buna yetişemez. ITIL geleneğinden gelen ITAM kayıtlarda, sahiplerde ve yaşam döngülerinde ısrar eder ve bu ısrar haklıdır, çünkü yönetilmeyen varlıklar güvenlik açıklarının, boşa giden paranın ve uyum başarısızlıklarının büyüdüğü yerdir. Çevik katkı; satın alma, finans, güvenlik ve operasyon arasında sürekli iş birliği ile varlıkların, işlem hatları ve kod olarak altyapı aracılığıyla oluşturuldukları anda otomatik olarak kaydedilmesi gibi pratik bir alışkanlıktır; böylece kayıt işin bir yan ürünü olur.

Bu konuda üç terim tekrar eder.

- **Varlık:** kuruma değer taşıyan ve bir yaşam döngüsü boyunca yönetilen öğe. ITAM'de donanım, yazılım, bulut kaynakları, abonelikler ve bazen veri bu kapsama girer.
- **Varlık kaydı:** bir varlığı betimleyen girdi: ne olduğu, sahibinin kim olduğu, nerede bulunduğu, hangi durumda olduğu, maliyetinin ne olduğu ve nelere bağlı olduğu.
- **Yaşam döngüsü:** bir varlığın geçtiği aşamalar; tipik olarak talep edilmiş, satın alınmış, teslim alınmış, devreye alınmış, kullanımda, bakımda, emekliye ayrılmış ve imha edilmiş. [Ürün yaşam döngüsü](https://en.wikipedia.org/wiki/Product_lifecycle) düşüncesi her varlık sınıfına uygulanır; bir dizüstü bilgisayarın ve bir bulut aboneliğinin aşamaları farklıdır.

ITAM, değişikliğin etkisini anlayabilmeniz için bileşenler arasındaki ilişkileri izleyen yapılandırma yönetimiyle örtüşür; sonraki konular sırasıyla yazılımı, donanımı ve yapılandırmayı ele alır (bkz. Konu 7.2 “Yazılım varlığı ve lisans metrikleri”, Konu 7.3 “Donanım varlığı yaşam döngüsü metrikleri” ve Konu 7.4 “Yapılandırma ve CMDB kalitesi metrikleri”). Fark amaçtadır: varlık yönetimi sahipliği, maliyeti ve yaşam döngüsünü vurgularken yapılandırma yönetimi yapıyı ve bağımlılığı vurgular. Aynı envanter çoğu zaman her ikisini de besler.

Çoğu ITAM programının andığı standart, BT varlık yönetimi sistemlerine ilişkin bir standartlar ailesi olan ISO/IEC 19770'tir. Onu adıyla ve kapsamıyla anın, herhangi bir ayrıntıya güvenmeden önce standart kuruluşundan okuyun. Bu konu metnini yeniden üretmez.

Varlık metrikleri kolayca hedefe dönüşür ve bu hedefler kâğıt üzerinde kolayca tutturulur. Bir envanter, yalnızca zaten bilinenleri kaydettiği için yüzde 100 doğruluk gösterebilir. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) kaynaklı koruma önlemi burada da geçerlidir: doğruluğu bağımsız kanıta karşı ölçün ve kusursuz bir rakamı daha dikkatli bakmak için bir neden sayın (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Değişiklik anında kaydedin.** Varlıklar, onları oluşturan ya da kaldıran işin bir parçası olarak kayda girmeli ve kayıttan çıkmalıdır.
- **Bağımsız kanıta karşı ölçün.** Doğruluk, kaydın gerçeklikle uyumu demektir ve kaydın kendisinden başka bir yöntemle denetlenir.
- **Her varlığın bir sahibi vardır.** Kimsenin sahip olmadığı bir varlık yamalanmaz, akılcı biçimde ödenmez ya da emekliye ayrılmaz.
- **Kaydı olabildiğince küçük tutun.** Kararların gerektirdiği alanları yakalayın, fazlasını değil.
- **Kaynakları birleştirin.** Keşif araçları, satın alma, kimlik ve bulut faturalaması, envanterin birer parçasını görür.
- **İşlevler arası iş birliği yapın.** Satın alma, finans, güvenlik ve operasyon kaydı ve kalitesini paylaşır.
- **Boşlukları bilgi olarak ele alın.** Hesabı bulunmayan bir varlık, saklanacak bir başarısızlık değil, anlaşılacak bir bulgudur.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL pratiği | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Envanter doğruluğu | Kaydı bulunanla eşleşen örneklenmiş varlıkların payı | üzerinde anlaşılan tüm alanlarda kaydı fiziksel ya da teknik kanıtla eşleşen örneklenmiş varlıklar / örneklenen varlıklar | yüzde | Varlık sicili ve keşif verileriyle karşılaştırılan denetim örneği | BT varlık yönetimi; yapılandırma yönetimi | Bitti tanımı, varlığın kaydedilmesini içerir | Üç aylık |
| Keşif kapsamı | Dönemde keşif tarafından görülen beklenen varlıkların payı | son 30 günde en az bir keşif kaynağı tarafından görülen varlıklar / sicilde bulunan ve keşfin görebildiği varlıklar | yüzde | Siciliyle birleştirilmiş keşif aracı raporları | BT varlık yönetimi; izleme ve olay yönetimi | Kod olarak altyapı durumu gerçeklikle örtüşür | Aylık |
| Mutabakat oranı | Bağımsız kaynaklar arasında eşleşen varlıkların payı | hem sicilde hem de ikinci bir kaynakta (örneğin satın alma, kimlik ya da bulut faturalaması) eşleşen varlıklar / iki kaynaktan herhangi birindeki varlıklar | yüzde | Sicil, satın alma, kimlik, bulut faturalaması dışa aktarımları | BT varlık yönetimi; tedarikçi yönetimi | Ortamlar için tek doğruluk kaynağı | Aylık |
| Sahipsiz varlık payı | Adlandırılmış, geçerli bir sahibi olmayan varlıkların payı | sahibi olmayan ya da sahibi ayrılmış varlıklar / sicildeki varlıklar | yüzde | Kişi dizinine bağlanmış sicil | BT varlık yönetimi; bilgi güvenliği yönetimi | Hizmetlerin ve bileşenlerin net sahipliği | Aylık |
| Yaşam döngüsü aşaması bütünlüğü | Güncel bir yaşam döngüsü aşaması ve o aşamanın gerektirdiği tarihler olan varlıkların payı | aşaması ve gerekli tarihleri kayıtlı varlıklar / sicildeki varlıklar | yüzde | Sicil | BT varlık yönetimi; yayın ve dağıtım yönetimi | Ortam yaşam döngüsü işlem hattında izlenir | Aylık |
| Kayda geçirme süresi | Bir varlık değişikliği ile sicildeki güncellenmesi arasındaki gecikme | değişiklik olayından sicil güncellemesine kadar geçen saat ya da gün sayısının medyanı ve 85. yüzdeliği | gün | Sicil zaman damgalarıyla karşılaştırılan değişiklik, satın alma ya da işlem hattı olayları | BT varlık yönetimi; değişiklik yetkilendirme | İşlem hattında otomatik kayıt | Aylık |
| Hesabı bulunmayan varlık oranı | Denetimde bulunamayan ya da açıklanamayan beklenen varlıkların payı | beklenen ama bulunamayan ve onaylı bir imhayla açıklanmayan varlıklar / beklenen varlıklar | yüzde | Denetim sonuçları | BT varlık yönetimi; bilgi güvenliği yönetimi | Kayıp öğelere ilişkin geriye dönük bulgu | Denetim başına |

Her sınıf için “varlık” kapsamını belirtin. Bir dizüstü bilgisayar, bir sanal makine, bir abonelik ve bir lisans farklı şeylerdir; kayıt alanları ve kanıt da farklıdır. Kayda geçirme süresi, değişikliği doğuran olayla başlar (malın teslim alınması, bir işlem hattı çalışması ya da bir aboneliğin başlaması gibi) ve sicil bunu yansıttığında durur. Kasıtlı olarak kapsam dışı olan varlıkları, örneğin kısa ömürlü test kapsayıcılarını, hariç tutun ve bunları sicilde bir dışlama sınıfı olarak listeleyin.

## Öneriler

### Neyi yönettiğinize karar verin

**1. Önemli olan varlık sınıflarını ve nedenini listeleyin.** Maliyet, risk ya da yasal yükümlülük taşıyanlarla başlayın: son kullanıcı aygıtları, sunucular ve bulut hesapları, ağ ekipmanı, yazılım lisansları ve abonelikleri ile kritik veri depoları. Her sınıf için kaydın desteklemesi gereken kararları yazın: yamalama, yenileme, denetim, yenileme dönemi, imha. Hiçbir kararın ihtiyaç duymadığı sınıfları atlayın.

**2. En az alanları tanımlayın.** Her sınıf için kararların gerektirdiği az sayıda alanı seçin: tanımlayıcı, tür, sahip, konum ya da hesap, durum, edinme ve bitiş tarihleri, maliyet merkezi ve desteklediği hizmete bağlantılar. Doğru olan kısa bir kayıt, eskimiş uzun bir kayıttan daha değerlidir. Tanımı metrik siciline kaydedin.

**3. Her sınıfa ve her varlığa bir sahip atayın.** Sınıf sahibi kaydı ve süreci tasarlar. Varlık sahibi, varlıktan kullanımda sorumlu kişi ya da takımdır. Bir varlık paylaşılıyorsa bireyi değil bir takımı kullanın ve ayrılışlar varlıkları sahipsiz bırakmasın diye dizini güncel tutun.

**4. Varlıkları işlem hattında kaydedin.** Altyapı kodla oluşturulduğunda, işlem hattının oluşturma ve kaldırma sırasında sicile yazmasını sağlayın. Bu, kayda geçirme süresini sıfıra yaklaştırır ve sicilin kodla uyumlu olmasını sağlar. Değişikliği sürekli teslim etme çevik pratiği bunu destekler: her dağıtım kaydı güncelliyorsa kayıt nadiren yanlış olur.

### İş yapılırken varlıkları yakalayın

**5. Satın alma ile sicili bağlayın.** Satın alınan donanım ve yazılım için, satın alma siparişini ya da abonelik oluşturmayı bir kaydın tetikleyicisi, mal kabulünü ya da etkinleştirmeyi ise bir durum değişikliğinin tetikleyicisi yapın. Fiziksel mallar için [envanter yönetimi](https://en.wikipedia.org/wiki/Inventory_management) pratiği, öğeleri teslim alma, depolama ve çıkış için yararlı kalıplar sunar. Satın almaların satın alma birimi dışında gerçekleştiği yerlerde (abonelikler için takım kredi kartları gibi) harcama verilerinin aylık denetimini ekleyin.

**6. Keşfi kayıt olarak değil, denetim olarak kullanın.** Keşif araçları ağları ve bulut hesaplarını tarar ve bulduklarını raporlar. Neyin var olduğunu söylemekte iyidirler, sahibinin kim olduğunu ya da neden var olduğunu söylemekte zayıftırlar. Onları eksik ve bilinmeyen varlıkları saptamak ve sicille karşılaştırmak için kullanın. Bir kaynağı diğeriyle eşleştirme adımı, muhasebecilerin iki kayıt kümesini karşılaştırmak için kullandığı aynı fikir olan [mutabakat](https://en.wikipedia.org/wiki/Reconciliation_(accounting)) biçimidir.

**7. Oluşturma anında etiketleyin.** Her bulut kaynağında bir sahip ve hizmet etiketi, her fiziksel aygıtta bir etiket zorunlu kılın. Barkod ve radyo frekansı etiketleri gibi [varlık izleme](https://en.wikipedia.org/wiki/Asset_tracking) yöntemleri, depolardaki ve ofislerdeki fiziksel öğelere yardımcı olur. Etiketsiz kaynaklar, sahibinin takımı için bulgudur ve operasyonun olağan bir parçası olarak ele alınır.

### Dürüstçe ölçün

**8. Rastgele örnekle denetleyin.** Her çeyrekte sicilden rastgele bir varlık örneği çekin ve kanıta karşı denetleyin: aygıtı bulun, kaynağı inceleyin, sahibi doğrulayın. Ardından diğer yönden, keşif sonuçlarından ve satın alma verilerinden bir örnek çekin ve her birinin sicilde yer aldığını denetleyin. İki yön farklı boşlukları ortaya çıkarır. Doğruluğu her sınıf için ayrı raporlayın.

**9. Veri kalitesini zaman içinde izleyin.** Kayıtların bütünlüğü, doğruluğu ve güncelliği [veri kalitesinin](https://en.wikipedia.org/wiki/Data_quality) yönleridir. Eğilimi alan ve sınıf bazında izleyin ve hangi alanların en hızlı kaydığına bakın. Sahip ve konumdaki kayma normaldir ve nerede otomasyon yapılacağını söyler.

**10. Boşlukları raporlayın.** Başlıktaki doğruluğun yanında hesabı bulunmayan varlıkları, sahipsiz payı ve mutabık kalınmamış öğeleri de gösterin. İstisnalarını saklayan bir rapor, raporun kendisi hakkında bir rapordur. Her boşluk sınıfı için bir sahip ve tarih belirleyin.

### Döngüyü kapatın

**11. Varlıkları oluşturduğunuz kadar bilinçli biçimde emekliye ayırın.** İmha da kayıt gerektirir: tarih, yöntem ve veri tutan aygıtlar için verinin silindiğine dair kanıt. Bir [gözetim zinciri](https://en.wikipedia.org/wiki/Chain_of_custody) kaydı, bir varlığı kimin ne zaman ele aldığını gösterir. Sicilde kalan emekli varlıklar maliyetleri şişirir ve denetimleri bulandırır.

**12. Kaydı gündelik kararlarda kullanın.** Yamalama, yenilemeler, güvenlik müdahalesi ve bütçeleme sicilden okumalıdır. İnsanlar kaydı kullandığında onu düzeltir. Sicil yalnızca denetimler içinse çürür. Sicilin kullanımını ona bağımlı takımlarla gözden geçirin ve önce onların yakındığı alanları düzeltin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlanır | Eşlenmiş koruma metriği ya da pratiği |
| --- | --- | --- |
| Envanter doğruluğu | Kolay varlıkları örneklemek; yalnızca bir temizlikten sonra denetlemek; daha az alanda eşleşmeyi eşleşme saymak | Takım dışından biri tarafından çekilen rastgele örnek; sabit alan listesi; her iki yönden örnek |
| Keşif kapsamı | “Beklenen varlıkları” keşfin görebildiğiyle daraltmak; taranması zor ağları hariç tutmak | Dışlamaları belgelemek; satın alma ve bulut faturalamasıyla karşılaştırmak |
| Mutabakat oranı | Birincisinden türetilmiş bir ikinci kaynak seçmek; zayıf anahtarlarla otomatik eşleştirmek | Gerçekten bağımsız kaynaklar kullanmak; eşleşmeleri elle rastgele denetlemek |
| Sahipsiz varlık payı | Sahip olarak hepsini kapsayan bir takım atamak; yer tutucu bir kişi girmek | Hepsini kapsayan takımların sahip olduğu varlıkların sayısı; sahip doğrulama örneği |
| Yaşam döngüsü aşaması bütünlüğü | Varsayılan tarihleri doldurmak; her varlığı “kullanımda” yapmak | Denetimde aşamayı kanıtla karşılaştırmak; yaş dağılımına bakmak |
| Kayda geçirme süresi | Değişiklik olaylarını geriye tarihlemek; olay zamanını kayıt zamanı olarak kaydetmek | Kaynak sistem zaman damgalarıyla karşılaştırmak; düzenlemelerde denetim izi |
| Hesabı bulunmayan varlık oranı | Varlıkları onaysız silmek; imha edilmiş olarak yeniden sınıflandırmak | İmha onayı ve kanıt oranı; silmeleri finans kayıtlarıyla karşılaştırmak |

Sağlıklı bir okuma; dürüst nedenlerle yüzde 100'ün altında kalan bir doğruluk rakamı, küçülen görünür boşluklar, istendiğinde varlıklarını doğrulayan sahipler ve insanların karar vermek için kullandığı bir kayıttır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Otomatik kayıt | Hızlı, tutarlı, düşük emek | Mühendislik gerektirir; işlem hattı dışındakileri kaçırır |
| Elle kayıt | Esnek, her şey için çalışır | Yavaş, hataya açık, çürür |
| Keşif güdümlü | Bilinmeyeni bulur | Sahiplik ya da amaç sağlayamaz |
| Satın alma güdümlü | Maliyeti ve sözleşmeyi yakalar | Gölge satın almaları ve ücretsiz katmanları kaçırır |
| Satın almalarda sıkı denetim | Güçlü kayıt | Takımları yavaşlatır; geçici çözümleri teşvik eder |
| Denetimlerle hafif kontrol | Hızlı; güvene dayanır | Bulunacak ve düzeltilecek daha çok boşluk |
| Geniş kayıt şeması | Zengin raporlama | Doğru tutması zor |
| Küçük kayıt şeması | Sürdürmesi kolay | Sınırlı analiz |

Düz yazıyla yanıt şudur: altyapının kod olduğu yerde kaydı otomatikleştirin, keşif ve faturalama verilerini bağımsız denetim olarak kullanın ve kaydı küçük tutun. Takımlara ihtiyaç duyduklarını oluşturma konusunda güvenin, onlardan etiketlemelerini isteyin ve örneklemeyle doğrulayın.

## Takımınızla tartışılacak sorular

**1. Yarın en önemli hizmetimize bağlı her varlığı bulmak zorunda kalsak ne kadar sürerdi?**
Bir hizmet seçin ve varlıklarını sicilden ve diğer kaynaklardan izleyin. Alıştırmayı zamanlayın ve boşlukları not edin. Kolaylaştırıcı, hangi kaynakların uyuştuğunu ve hangilerinin uyuşmadığını kaydetmelidir. Sonuç, sicilin çalışan bir araç mı yoksa bir belge mi olduğunu gösterir.

**2. Bu odadaki hiç kimse bilmeden hangi varlıklar oluşturuluyor?**
Bulut hesaplarını, abonelikleri, test ortamlarını ve satın alma dışında alınan aygıtları düşünün. Bunların nasıl görüneceğini sorun. Konuşma sızıntıları bulur. Bu çeyrekte mutabakata eklenecek bir bağımsız kanıt kaynağında anlaşın.

**3. Bugün sahip olduğumuz varlıkların sahibi kim ve hâlâ ortalıkta olduklarını nereden biliyoruz?**
Bir varlık örneği alın ve adı geçen sahiplerden doğrulamalarını isteyin. Kaç sahibin rol değiştirdiğini ya da ayrıldığını not edin. Dizinin ve sicilin nasıl uyumlu kalacağına karar verin; örneğin biri ayrıldığında otomatik bir denetimle.

**4. Kendi ödevimizi notlandırmadan kendi sicilimizi nasıl denetleriz?**
Örneği kimin çektiğini ve kimin denetlediğini tartışın. Sonuç kötü olsaydı ne olacağını sorun. Kolaylaştırıcı, insanların kötü bir rakamı raporlamakta kendini güvende hissedip hissetmediğini araştırmalıdır; çünkü güvensiz bir denetim iyi rakamlar üretir.

**5. Kimsenin kullanmadığı neyi kaydediyoruz?**
Sicildeki alanları listeleyin ve her birini hangi kararların kullandığını sorun. Kullanıcısı olmayan alanlar kaldırma adayıdır. Kullanılan ama güvenilmez olan alanlar otomasyon adayıdır. İki değişiklik üzerinde anlaşın.

**6. Bir varlığa “artık gerekmiyor” ile “gitti” arasında ne oluyor?**
Emekli edilmiş bir aygıtı ya da hizmetten kaldırılmış bir hizmeti izleyin. Verinin silindiğini kim doğruluyor? Kayıt ne zaman kapanıyor? Bu yoldaki boşluklar maliyetin, riskin ve denetim bulgularının biriktiği yerdir.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları yeni varlıkların çoğunu oluşturur ve kayıt tutmayı, otomatik olmadığı sürece sürtünme olarak hisseder. Varlık kaydını bir ortamın bitti tanımının parçası olarak ele almalı, işlem hatlarının oluşturdukları kaynakları kaydetmesine izin vermeli ve kaynakları sahiplerle etiketlemelidir. Maliyetleri bulmaları, yamalamaları ya da bir ortamı emekliye ayırmaları gerektiğinde doğru bir kayıttan yarar sağlarlar.

### Hizmet ve operasyon takımları

Operasyon takımları yamalama, olay müdahalesi ve kapasite için sicile bağımlıdır. Keşfi sicille mutabık kılmalı, sahipsiz varlıkların peşine düşmeli ve boşlukları bulgu olarak raporlamalıdır. Ayrıca fiziksel ele almayı da yürütürler: teslim alma, imaj yükleme, depolama ve gözetim zinciri kayıtlarının önemli olduğu imha.

### Liderlik ve yönetişim

Liderler ve denetçiler maliyet kontrolü, güvenlik güvencesi ve uyum için varlık verilerine güvenir. Yalnızca başlığı değil, doğruluk yöntemini ve boşluk listesini istemeli ve kayıt otomasyonunu finanse etmelidir. Yönetişim, sicilin kararlarda kullanılmasını beklemeli ve raporlanan yüzde 100'e kuşkuyla yaklaşmalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar varlık yönetimini, bir aygıt hazır geldiğinde, ihtiyaç duyulduğunda bir lisans orada olduğunda ve kayıp bir dizüstü bilgisayar iyi ele alındığında deneyimler. İşe başlama ve ekipman konusundaki geri bildirimleri, sürecin pratikte nasıl çalıştığının kanıtıdır (bkz. Konu 6.4 “Kullanıcı ve çalışan deneyimi”). Bir rolleri de vardır: ekipman yer değiştirdiğinde ya da ayrıldığında BT'ye haber vermek.

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir lojistik şirketinin BT departmanı yaklaşık 2.400 çalışanı destekler ve bulut altyapısı üzerinde bir ürün platformu işletir. Aşağıdaki sayılar açıklayıcıdır.

Bir iç denetim, şirketin sahip olduğu aygıt ve bulut kaynağı sayısını ister. Sicil 3.100 son kullanıcı aygıtı ve 1.850 bulut kaynağı gösterir. Varlık yöneticisi, rakamları raporlamadan önce sınamaya karar verir. Sicilden 100 aygıtlık rastgele bir örnek çeker ve üzerinde anlaşılan dört alanın hepsinde eşleşen 87'sini bulur; doğruluk yüzde 87'dir. Diğer yönden, uç nokta yönetim aracından 100 aygıt çeker ve 94'ünü sicilde bulur. Bulut ortamının keşif kapsamı yüzde 82'dir, çünkü proje takımlarının oluşturduğu üç hesap keşif aracına bağlı değildir. Bulut faturalama dışa aktarımını sicille mutabık kılmak, faturalanan kaynakların yüzde 71'ini eşleştirir ve eşleşmeyenler çoğunlukla etiketsiz test ortamlarıdır. Sahipsiz varlık payı yüzde 9'dur ve bunların üçte biri ayrılmış kişilere aittir.

Takım, ürün takımları ve finansla dört değişiklik yapar. İşlem hattı şablonları artık her yeni ortamı kaydeder ve bir sahip ile hizmet etiketi gerektirir. Aylık bulut faturası sicille mutabık kılınır ve etiketsiz kaynaklar hesap sahiplerine raporlanır. Aylık bir denetim kişi dizinini varlık sahipleriyle karşılaştırır ve biri ayrıldığında yöneticilere bir liste gönderir. Depodaki mal kabulü aynı gün sicil güncellemesini tetikler. Raporlama biçimlerini de değiştirirler: denetim özeti, her iki örnek yönünden doğruluğu, boşluk listesini ve sahipsiz payı gösterir.

İki çeyrek sonra, sicil örneğinden doğruluk yüzde 93, bulut ortamının mutabakatı yüzde 90 ve sahipsiz pay yüzde 3'tür. Finans başkanı yönetim kurulu için tek bir “envanter doğruluğu” rakamı ister. Varlık yöneticisi rakamı yöntemi ve boşluk listesiyle birlikte verir ve yüzde 100'lük bir hedef raporlamayı reddeder; amacın boşlukları görünür tutmak ve küçültmek olduğunu açıklar. Karar kaydedilir ve takım, daha iyi bir yöntemden gelen daha düşük rakamın, önceki doğrulanmamış rakamdan daha yararlı olduğunu not eder.

## Sektör mercekleri

**Girişim (startup).** Resmî bir sicil olmayabilir; yalnızca bulut hesapları ve birkaç dizüstü bilgisayar vardır. Sahipli basit bir liste tutun, bulut kaynaklarını baştan etiketleyin ve listeyi aylık gözden geçirin. Hangi soruları yanıtlamanız gerektiğini bilmeden bir platform satın almaktan kaçının.

**Küçük işletme.** Her şeyi tek bir yönetici ele alabilir. Birkaç alanlı bir elektronik tablo, biri onu yılda iki kez satın almalara karşı denetliyorsa işe yarayabilir. Takibini kaybetmenin kolay olduğu lisanslara ve aboneliklere ve veri tutmuş aygıtların imhasına dikkat edin.

**Büyük işletme.** Ölçek otomasyon, net sınıf sahipleri ve birkaç kaynak arasında mutabakat gerektirir. Satın almaların tanımadığınız ortamlar getirmesini bekleyin ve bunları aynı kayıt altına almak için standart bir yol planlayın. Varlık muhasebesi konusunda finansla hizalanın; [sabit varlıkların](https://en.wikipedia.org/wiki/Fixed_asset) nasıl aktifleştirildiği ve amortismana tabi tutulduğu da buna dahildir; BT sicili ile finans defterinin nerede eşleşmesi gerektiği konusunda anlaşın.

**Kamu sektörü.** Kamu kurumları denetim, satın alma kuralları ve kayıt yükümlülükleriyle karşılaşır ve çoğunlukla aygıtlarda hassas veri tutar. İmha için kanıt tutun, gözetim zincirini belgeleyin ve sicili gereken varlık raporlamasıyla hizalayın. Sicili denetimler için kanıtın bir parçası olarak ele alın (bkz. Konu 8.3 “Uyum ve denetim metrikleri”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler arasında kaydı tasarlama zamanı, elinizde yoksa keşif ve mutabakat araçları, varlıkları işlem hatlarında kaydetmek için mühendislik emeği ve örnekleme ile düzeltmenin olağan emeği yer alır. Pek çok kurum zaten keşif ve uç nokta araçlarına sahiptir. Mütevazı bir takım bir programı yürütebilir ve kayıt otomatikleştirildikten sonra süregelen maliyet düşüktür.

Getiriler, önlenen israf ve azalan risktir. Doğru kayıtlar, kullanılmayan abonelikler ve kaynaklar için ödemeyi azaltır, neyin var olduğunu bildiğiniz için olay müdahalesini ve yamalamayı hızlandırır ve denetim emeğini keser. Yayımlanmış çalışmalardan belirli yüzde tasarruflar öne sürmekten kaçının. Kendi başlangıç değerinizi ölçün: sahipsiz bulut kaynaklarının sayısı ve aylık maliyeti, bir denetim sorusunu yanıtlama süresi ve ödenen ama kullanılmayan lisanslar. Riskin maliyetini de sayın: bilinmeyen bir sunucu bir güvenlik açığıdır ve veri taşıyan kayıp bir aygıtın bildirim maliyeti vardır. Maliyetlerin finansal ele alınışı bu bölümün ilerisinde işlenir (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”).

## Anti-desenler ve tuzaklar

- **Yıllık temizlik.** Yılda bir kez yapılan büyük bir çaba haftalar içinde çürür. Sürekli kaydedin ve her çeyrekte örnekleyin.
- **Yalnızca sicili denetlemek.** Sicilin kendisiyle uyumlu olduğunu kanıtlar. Her iki yönden bağımsız kanıttan örnekleyin.
- **Kusursuz puan.** Yüzde 100'lük bir rakam genellikle dar kapsam ya da zayıf kanıt demektir. Nelerin hariç tutulduğuna bakın.
- **Sahip alanlarının hepsini kapsayan bir takımla doldurulması.** Eksiksiz görünür ve işe yaramaz. Hepsini kapsayan sahipliği bir boşluk sayın.
- **Çok fazla alan.** İnsanlar bunları varsayılanlarla doldurur. Kaydı kararların gerektirdiğiyle sınırlı tutun.
- **Önce araç, sonra süreç.** Sahiplik ve yaşam döngüsü kuralları olmayan bir keşif platformu daha büyük bir karmaşa üretir. Önce soruları belirleyin.
- **Takımları boşluklar için cezalandırmak.** Varlıkları saklarlar. Boşlukları bulgu olarak ele alın ve nedeni düzeltin.
- **İmhayı unutmak.** Sicilde kalan ya da silme kaydı olmadan ayrılan emekli varlıklar maliyet ve risk yaratır.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Yakalama | Akla geldikçe güncellenen elektronik tablolar | Ana sınıflar için sicil, çoğunlukla elle | Satın alma ve işlem hatlarına bağlı kayıt | Kayıt otomatik; kayda geçirme süresi ölçülür | Varlıklar takımlar ve tedarikçiler genelinde tek bir olay akışından kaydedilir |
| Doğruluk | Bilinmiyor | Ara sıra sayımlar | Her iki yönde üç aylık bağımsız örnekleme | Doğruluk ve boşluklar sınıf bazında izlenir ve iyileştirmeyi besler | Bağımsız denetimler BT, finans ve güvenlik arasında paylaşılır |
| Kullanım | Sicil yalnızca denetimler için kullanılır | Birkaç takım kullanır | Yamalama, yenileme ve bütçeleme sicilden okur | Kullanım gözden geçirilir; alanlar kararlara göre ayarlanır | Sicil, insan gözetimiyle otomatik kararları yönlendirir |

## Kontrol listesi

- [ ] Varlık sınıfları ve her kaydın desteklediği kararlar listelenmiştir.
- [ ] Sınıf başına en az alanlar tanımlanmış ve metrik siciline kaydedilmiştir.
- [ ] Her sınıfın ve her varlığın, dizine karşı güncel tutulan adlandırılmış bir sahibi vardır.
- [ ] İşlem hatları yeni altyapıyı bir sahip ve hizmet etiketiyle kaydeder.
- [ ] Satın alma ve abonelik oluşturma varlık kayıtlarını tetikler.
- [ ] Keşif ve faturalama verileri sicille aylık olarak mutabık kılınır.
- [ ] Her çeyrekte her iki yönde rastgele bir örnek denetlenir.
- [ ] Sahipli ve tarihli boşluk listeleri doğruluk rakamlarıyla birlikte yayımlanır.
- [ ] İmhanın kayıtlı bir yöntemi ve veri silme kanıtı vardır.
- [ ] Kullanılmayan alanlar kaldırılmıştır; sicil gündelik kararlarda kullanılır.

## Yapay zekâ istemleri

**Asgari bir varlık kaydı tasarlayın.**

```text
[kurum türü] içinde şu BT varlık sınıflarını yönetiyoruz: [liste]. Varlık
verilerimizin desteklemesi gereken kararlar: [liste, örneğin yamalama,
yenileme, denetim, yenileme dönemi, imha]. Her sınıf için kayıtta bulunması
gereken asgari alanları, her alanı hangi kaynağın sağlaması gerektiğini ve her
birinin bağımsız olarak nasıl doğrulanabileceğini öner. Düzenleyici
gereksinimler uydurma. Varsayımlarını ve finans, güvenlik ya da hukukla
doğrulamam gereken her şeyi listele.
```

**İki yönlü bir denetim örneği planlayın.**

```text
Sicilimizde [sınıflar] genelinde [sayı] varlık var. Ayrıca keşif verilerimiz,
satın alma verilerimiz ve bulut faturalama verilerimiz var. Sicilden ve diğer
kaynaklardan çekilen rastgele örneklerle üç aylık bir denetim tasarla; yararlı
bir okuma için her örneğin ne kadar büyük olması gerektiğini söyle (gerekçeyi
kesinliği abartmadan açıkla), neyin kaydedileceğini ve doğruluğun ve
boşlukların dürüstçe nasıl raporlanacağını belirt. Varsayımlarını listele.
```

**Bir mutabakat sonucunu çözümleyin.**

```text
Sicilimizi [kaynak] ile mutabık kıldık ve şunları bulduk: eşleşen [sayı],
yalnızca sicilde [sayı], yalnızca kaynakta [sayı]. İşte her grubun, elimizdeki
alanlarla birlikte örnekleri: [anonimleştirilmiş örnekleri yapıştırın]. Her
uyumsuzluğun olası nedenlerini, hangilerinin hızlı düzeltilebileceğini,
hangilerinin süreç değişikliği gerektirdiğini ve önce neyin denetlenmesi
gerektiğini öner. Verinin desteklemediği nedenleri varsayma. Varsayımlarını
listele.
```

**Ayrılan ve rol değiştirenler için bir denetim taslağı hazırlayın.**

```text
Kişi dizinini ve varlık sicilini kullanarak, sahipleri ayrılmış ya da rol
değiştirmiş varlıkları bulmak için basit bir aylık süreç taslağı hazırla.
Adımları, listeyi kimin alacağını, yeniden atama için tanınan süreyi, kimse
yanıt vermezse ne olacağını ve sonucun nasıl kaydedileceğini ekle. Bağlam:
[araçlar ve takım büyüklüğü]. Varsayımlarını ve denetlemem gereken gizlilik
hususlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir varlık metriğini raporlamadan önce eşlenmiş koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir varlık metriği girdisinin oyunlama yolunu, koruma önlemini ve bağımsız kanıt kuralını taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Varlıkları değişiklik anında, tercihen işlem hatları ve satın alma aracılığıyla kaydedin; böylece sicil işin bir yan ürünü olur.
- Doğruluğu bağımsız kanıta karşı, her iki yönde örnekleyerek ölçün.
- Her varlığın bir sahibi olmalıdır ve sahipsiz varlıklar bulgudur.
- Kaydı küçük tutun ve gündelik kararlarda yararlı kılın.
- Yalnızca başlığı değil boşlukları raporlayın ve kusursuz puana güvenmeyin.
- İmhayı da oluşturma kadar dikkatle planlayın.

## Kaynaklar ve ileri okuma

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: IT Asset Management*, TSO, 2020.
3. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
4. Redman, T. C., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
5. Wikipedia, [IT asset management](https://en.wikipedia.org/wiki/IT_asset_management).
6. Wikipedia, [Product lifecycle](https://en.wikipedia.org/wiki/Product_lifecycle).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Inventory management](https://en.wikipedia.org/wiki/Inventory_management).
9. Wikipedia, [Reconciliation (accounting)](https://en.wikipedia.org/wiki/Reconciliation_(accounting)).
10. Wikipedia, [Asset tracking](https://en.wikipedia.org/wiki/Asset_tracking).
11. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
12. Wikipedia, [Chain of custody](https://en.wikipedia.org/wiki/Chain_of_custody).
13. Wikipedia, [Fixed asset](https://en.wikipedia.org/wiki/Fixed_asset).
