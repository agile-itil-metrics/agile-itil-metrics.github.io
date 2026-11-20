# Değişiklik yetkilendirme metrikleri

**Değişiklik yetkilendirme metrikleri, kurumunuzun yararlı değişikliklerin güvenli ve hızlı biçimde akmasına izin verip vermediğini gösterir. Bu yüzden değişikliklerin nasıl sınıflandırıldığını, bir karar için ne kadar beklediklerini ve bu kararın ne kadarını boru hattının otomatik verdiğini ölçün ve her hız ölçümünü bir risk görünümüyle eşleştirin.**

## Genel bakış ve motivasyon

Her hizmet değişir. Takımlar özellik ekler, kitaplıklara yama uygular, sertifikaları yeniler, veri tabanlarını yeniden boyutlandırır ve eski bileşenleri emekliye ayırır. [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 çerçevesinde bunu yöneten uygulamaya değişiklik yetkilendirme denir ve belirtilen amacı, risklerin düzgün değerlendirilmesini, değişikliklerin yetkilendirilmesini ve değişiklik takviminin yönetilmesini sağlayarak başarılı hizmet ve ürün değişikliklerinin sayısını en üst düzeye çıkarmaktır. Önceki ITIL sürümleri bu uygulamaya [değişiklik yönetimi](https://en.wikipedia.org/wiki/Change_management_(ITSM)) diyordu ve birçok kurum hâlâ bu adı kullanıyor. Yeni ad vurgudaki bir değişimi işaret eder: uygulama iyi değişikliği engellemek için değil, mümkün kılmak için vardır.

ITIL 4'te bir **değişiklik**, hizmetler üzerinde doğrudan ya da dolaylı bir etkisi olabilecek herhangi bir şeyin eklenmesi, değiştirilmesi ya da kaldırılmasıdır. Bu kapsam bir kod dağıtımından daha geniştir. Yapılandırma düzenlemelerini, altyapı güncellemelerini, erişim değişikliklerini, tedarikçi eylemlerini ve operatörlerin dayandığı belgeleri kapsar. Çevik bir takım değişikliği genellikle yayına giren bir çekme isteği olarak görür. Bir hizmet operasyonları takımı onu bir takvimdeki bir giriş olarak görür. İki görüş de geçerlidir ve bu konudaki metrikler aynı olayı her iki taraftan tanımladıklarında en iyi işler.

ITIL 4 üç değişiklik türünü tanımlar ve bu konudaki metrikler bunlara dayanır. Tam ifadeyi çerçeve sahibinin güncel yayınlarında denetleyin. Bu konu, yaygın biçimde belgelenmiş örüntüyü Ekim 2026 itibarıyla özetler.

- **Standart değişiklik** düşük risklidir ve iyi anlaşılmıştır. Belgelenmiş bir prosedürü izler ve önceden yetkilendirilmiştir, bu yüzden duruma göre onay gerektirmez.
- **Normal değişiklik**, ilerlemeden önce değerlendirme ve yetkilendirme gerektirir. Değerlendirmenin derinliği riske ve etkiye göre ölçeklenir.
- **Acil değişiklik** acilen yapılmalıdır, çoğu zaman hizmeti geri getirmek ya da ciddi bir zafiyeti kapatmak için. Hızlandırılmış bir yolu izler ve daha sonra daha ayrıntılı bir inceleme yapılır.

Başka terimler aşağıda yinelenir. **Değişiklik yetkilisi**, belirli bir türdeki değişikliği onaylama hakkını elinde tutan kişi ya da gruptur. **Değişiklik danışma kurulu (CAB)**, önerilen değişiklikleri inceleyen ve tavsiye veren ya da karar veren bir gruptur. **Onay teslim süresi**, bir değişikliğin yetkilendirme kararı için beklediği süredir. Bir **yüzdelik dilim**, gözlemlerin belirtilen bir payının altında kaldığı değerdir, yani 85. yüzdelik dilim, değişikliklerin yüzde 85'inin geçtiği sayıdır.

Bunların hepsi neden ölçülür? Değişiklik kontrolü hakkında yayımlanmış en güçlü kanıt, DevOps Research and Assessment (DORA) araştırma programından gelir. Rehberi, CAB ya da kıdemli yönetici onayı gibi ağır dış onayın daha kötü yazılım teslimat performansıyla ilişkili olduğunu ve daha resmi dış incelemenin başarısız olan değişikliklerin payını düşürdüğüne dair hiçbir kanıt bulunmadığını bildirir. Bunun yerine akran incelemesini, otomatik testi ve küçük değişiklikleri önerir ve herhangi bir merkezi kurul için stratejik bir rol öngörür. Bunlar anket verilerindeki ilişkiye dair ifadelerdir, yasa değildir ve DORA sayfaları iddia için etki büyüklükleri vermez. Bu yüzden onları, herhangi bir kontrol hakkında bir hüküm olarak değil, kendi verilerinize bakmak için güçlü bir neden olarak ele alın. *Agile ITIL Guide* içindeki değişiklik yetkilendirme materyali aynı araştırmayı özetler.

Çevik ve ITIL görüşleri, kontrolün nerede yaşadığı sorusunda buluşur. Bir teslimat boru hattında değerlendirmenin çoğu sürekli olarak gerçekleşebilir: bir gözden geçiren kodu onaylar, otomatik testler davranışı denetler ve dağıtım aracı kaydı yazar. İnceleme kaydedildiğinde ve yazar kendi işini onaylayamadığında bu, [görevler ayrılığının](https://en.wikipedia.org/wiki/Separation_of_duties) amacını karşılar. Metrikler bunun gerçekten olup olmadığını ya da boru hattının, çoğu değişikliğin yine de bir kuyrukta beklemek için terk ettiği hızlı bir yol olup olmadığını söyler.

Bu konu değişikliğin akış ve kontrol tarafını kapsar: hacim, tür karışımı, bekleme süresi ve otomasyon. Değişikliklerin başarılı olup olmadığını kapsamaz. Değişiklik başarısızlık oranı, acil pay, geri alma ve acil yama ölçümleri Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş” içine aittir ve DORA verim ve kararsızlık ölçümleri Konu 2.8 “DORA metrikleri” içindedir. Dağıtım ve yayın sıklığı Konu 4.5 “Yayın ve dağıtım metrikleri” içindedir. Kötü bir değişikliğin olay tarafı Konu 3.3 “Olaya yanıt ve çözüm süresi” ve Konu 3.4 “Büyük olay metrikleri” içindedir.

Değişiklik metrikleri [Goodhart yasasını](https://en.wikipedia.org/wiki/Goodhart%27s_law) hızla çeker: onay süresi için bir hedef hızlı, boş onayları davet eder ve standart değişiklik payı için bir hedef riskli işin rutin olarak yeniden sınıflandırılmasını davet eder (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Kontrolü riske uydurun.** Amaç orantılı kontroldür: düşük riskli değişiklikler hızlı, önceden yetkilendirilmiş bir yol izler ve yüksek riskli değişiklikler gerçek bir inceleme alır. Her şey için tek bir süreç, değişikliklerin çoğu için yavaş ve tehlikeli olanlar için yüzeyseldir.
- **Yalnızca işi değil, beklemeyi de ölçün.** Onay teslim süresi, bitmiş bir değişikliğin üretime ulaşmadan önce geçirdiği sürenin çoğunu oluşturur. Biri onayın ne zaman istendiğini ve ne zaman verildiğini kaydetmedikçe görünmezdir.
- **Başka bir şeyi saymadan önce türleri sayın.** Hacim, hız ve risk standart, normal ve acil değişiklikler arasında keskin biçimde farklıdır. Üçü üzerinden tek bir ortalama her yararlı sinyali gizler.
- **Toplantılar yerine otomatik, kayıtlı kanıtı tercih edin.** Akran incelemesi, geçen testler ve boru hattı denetimleri takvim aralığı olmadan bir kayıt üretir. Onay kararının ne kadarını boru hattının yakaladığını ölçün.
- **Bir hizmeti ya da takımı tanımlayın, bir kişiyi değil.** Onaylayanlar ve talep edenler bir sistemin içinde çalışır. Bireyleri verilen ya da reddedilen onaylara göre sıralamak insanlara her şeyi ya da hiçbir şeyi onaylamayı öğretir.
- **Hızı güvenlikle eşleştirin.** Daha hızlı onay yalnızca başarısızlık tablosu sabitse iyi haberdir. Bu metrikleri Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş” yanında okuyun.
- **Sınıflandırma kurallarını yazın.** Bir değişikliğin standart, normal ya da acil olması, tekrarlanabilir olması gereken bir yargıdır. Ölçütleri kaydedin ve her çeyrekte bir örneklemi gözden geçirin.

## Metrik tanımları

Tablo, takımınızın yazması gereken saatleri ve dışarıda bırakılanları belirtir. Veriler değişiklik ya da bilet aracından, sürüm denetimi ve boru hattı olaylarından ve onay kayıtlarından gelir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Türe göre değişiklik hacmi | Standart, normal ve acil olarak ayrılmış, tamamlanan değişiklik sayısı | Dönemde uygulandı durumuna ulaşan değişiklik kayıtlarının, onay anındaki türe göre gruplanmış sayısı; iptal edilen ve geri çekilen değişiklikler dışarıda bırakılır ve ayrıca bildirilir; kişi başına değil, hizmet başına bildirin | Türe göre haftalık ya da aylık değişiklik sayısı | Boru hattı dağıtım olaylarıyla birleştirilmiş ITSM aracındaki değişiklik kayıtları | Değişiklik yetkilendirme | Biten iş kalemlerinin verimi; artım başına yayın içeriği | Haftalık, aylık gözden geçirilir |
| Standart değişiklik payı | Tamamlanan değişikliklerden önceden yetkilendirilmiş yolu izleyenlerin payı | Dönemde tamamlanan standart değişiklikler / dönemde tamamlanan tüm değişiklikler; sonradan yeniden sınıflandırılan bir değişiklik nihai türü altında sayılır ve yeniden sınıflandırma kaydedilir | Yüzde | Tür ve yeniden sınıflandırma geçmişi olan değişiklik kayıtları | Değişiklik yetkilendirme | Takımın çalışma anlaşması ve bitti tanımıyla kapsanan rutin iş | Aylık |
| Onay teslim süresi | Bir değişikliğin yetkilendirme kararı için beklediği süre | Saat, talep değerlendirmeye hazır olarak gönderildiğinde başlar ve yetkilendirme kararı kaydedildiğinde durur; talep edenin bilgi sağlamasını beklemekle geçen süre dışarıda bırakılır ve ayrıca gösterilir; dönemdeki normal değişiklikler için ortancayı ve 85. yüzdelik dilimi bildirin; onay adımı olmayan standart değişiklikler dışarıda bırakılır | Saat ya da iş günü | Değişiklik kayıtlarındaki zaman damgaları ya da boru hattındaki onay olayları | Değişiklik yetkilendirme | Bir iş akışındaki bekleme süresi; bir inceleme sütunundaki süre | Haftalık, aylık gözden geçirilir |
| Otomatik onay payı | Yetkilendirme kararlarından boru hattı denetimleri ya da önceden yetkilendirilmiş politika tarafından verilen ve kaydedilenlerin payı | Onayı kayıtlı bir otomatik denetim ya da yazılı bir politika altında kayıtlı akran incelemesi tarafından verilen değişiklikler / dönemde tamamlanan tüm değişiklikler; bir kurul ya da yönetici tarafından elle onay otomatik sayılmaz | Yüzde | Boru hattı günlükleri, kod inceleme kayıtları ve değişiklik kayıtları | Değişiklik yetkilendirme; dağıtım yönetimi | Otomatik kalite kapıları; bitti tanımının parçası olarak akran incelemesi | Aylık |
| Onay kuyruğu yaşı | Bekleyen taleplerin şu anda ne kadar süredir beklediği | Şu anda karar bekleyen her değişikliğin yaşı, gönderimden anlık görüntü anına kadar ölçülür; en eski kalemi ve açık kuyruğun 85. yüzdelik dilimini bildirin; tamamlanmış onaylar dışarıda bırakılır | Saat ya da iş günü | Açık onay durumu olan değişiklik kayıtları | Değişiklik yetkilendirme | İş kalemi yaşı; yaşlanan devam eden iş | Günlük anlık görüntü, haftalık gözden geçirilir |
| Değişiklik kaydı bütünlüğü | Kaydı kim, ne, neden, ne zaman ve hangi hizmet sorularını yanıtlayabilen tamamlanmış değişikliklerin payı | Tüm gerekli alanları doldurulmuş ve etkilenen hizmete ya da yapılandırma öğesine bağlı değişiklikler / dönemde tamamlanan tüm değişiklikler; gerekli alanlar tanımda listelenir; değişiklik uygulandıktan sonra oluşturulan kayıtlar işaretlenir | Yüzde | Değişiklik kayıtları, sürüm denetimi bağlantıları, yapılandırma verisi | Değişiklik yetkilendirme; hizmet yapılandırma yönetimi | Taahhütten bilete ve dağıtıma izlenebilirlik | Aylık |

Onay teslim süresi, beklemesi bitmiş değişikliklere geriye bakar ve takılmış taleplerin yığınını gizleyebilir. Kuyruk yaşı bugün nelerin beklediğine bakar ve daha erken bir uyarıdır. Standart değişiklik payı, en üst düzeye çıkarılacak bir puan değildir: olgun bir boru hattıyla yapılandırmayı değiştiren bir takımın yüksek bir payı olur, eski bir çekirdek sistemdeki bir takımın ise makul biçimde düşük olabilir.

## Öneriler

### Temelleri kurun

**1. Başka bir şeyi ölçmeden önce değişiklikleri türe göre sayın.** Hizmet ve ay başına standart, normal ve acil olarak ayrılmış, tamamlanan değişikliklerin tek bir görünümünü oluşturun. Birçok kurum bu noktada, biletler, boru hattı dağıtımları ve gayriresmî düzeltmeler ayrı sayıldığı için kimsenin toplam üzerinde anlaşamadığını keşfeder. Bu kaynakları uzlaştırmak programın ilk sonucudur (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

**2. Sınıflandırma kurallarını yazın ve örnekleyin.** Bir değişikliği neyin standart yaptığını belirtin: belgelenmiş bir prosedür, bilinen bir risk ve bir geçmiş sicil. Bir değişikliği neyin normal ya da acile ittiğini belirtin. Her çeyrekte yaklaşık yirmi değişiklikten oluşan rastgele bir örneklemi gözden geçirin ve her birinin kuralların söylediği gibi sınıflandırılıp sınıflandırılmadığını sorun. Yanlış sınıflandırma, bu konudaki diğer her sayı için ana tehdittir.

**3. Onay saatini yazılı olarak tanımlayın.** Saatin talep hazır olarak gönderildiğinde başladığını ve karar kaydedildiğinde durduğunu söyleyin ve dışarıda bırakılanları, örneğin talep edenin bir soruyu yanıtlamasını beklemeyi adlandırın. Bu olmadan bir takım bilet oluşturmadan ve bir başkası kurul toplantısından ölçer ve sayılar zaman içinde bile karşılaştırılamaz.

### Beklemeyi kısaltın

**4. Onay teslim süresini bir dağılım olarak bildirin.** Bir ortalama, önemli olan örüntüyü, yani birkaç değişikliğin çok uzun süre beklediğini gizler. Ortancayı ve 85. yüzdelik dilimi, en yavaş birkaç vakayı da kişinin adıyla değil, değişikliğin adıyla gösterin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). 85. yüzdelik dilim ortancanın birçok katıysa neden genellikle bir toplantı döngüsü ya da tek bir aşırı yüklenmiş onaylayıcıdır ve düzeltme yapısaldır.

**5. Yalnızca geçmişe değil, kuyruğa da bakın.** Onay kuyruğu yaşını her hafta akış ölçümlerini gözden geçiren aynı forumda gözden geçirin. Bekleyen en eski kalem, bir kurulun aşırı yüklendiğine, bir tatilin bir imzayı durdurduğuna ya da bir talep edenin takibi sessizce bıraktığına dair en iyi erken uyarıdır. Bir kuyruk görünümü, yaşlanan işe bakma alışkanlığına da uyar (bkz. Konu 2.1 “Akış ölçümleri”).

**6. Bilgi beklemeyi karar beklemekten ayırın.** Bir talep daha fazla ayrıntı için talep edene geri döndüğünde onay saatini durdurun ve farklı bir saat başlatın. Onaylayanlar talep edenin neden olduğu gecikmeler için suçlanır ve talep edenler kuyruktaki gecikmeler için suçlanır. İki saat her tarafa doğru bir tablo ve daha iyi bir talep şablonu gibi somut bir iyileştirme verir.

### Kontrolü boru hattına taşıyın

**7. Tekrarlanabilir, düşük riskli değişiklik türlerini standart değişikliklere dönüştürün.** Hacim görünümünüzdeki en yaygın normal değişikliği seçin, örneğin rutin bir kitaplık güncellemesi ya da bir ölçekleme eylemi. Prosedürünü ve denetimlerini yazın, riski değişiklik yetkilisiyle kararlaştırın ve önceden yetkilendirin. Ardından standart değişiklik payını ve normal değişiklikler için onay teslim süresini birlikte izleyin: pay yükselmeli ve kuyruk kısalmalı, başarısızlıklarda buna denk bir artış olmamalıdır (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”).

**8. Onayı işin yapıldığı yerde kaydedin.** Akran incelemesini [kod inceleme](https://en.wikipedia.org/wiki/Code_review) aracında yakalayın ve boru hattının incelemeyi, test sonucunu ve dağıtımı değişiklik kaydına otomatik bağlamasına izin verin. Kayıt o zaman ayrı bir görev yerine işin yan ürünü olur. Otomatik onay payını ölçün ve kaydedilen incelemenin göstermelik bir onay değil, gerçek bir inceleme olduğunu doğrulamak için bir örneklemi inceleyin (bkz. Konu 2.7 “Çekme isteği ve kod inceleme metrikleri”).

**9. Boru hattını politikayı kodlayacak yer olarak ele alın.** “Bilet olmadan doğrudan üretim erişimi yok”, “testler geçmeli” ve “yazar kendi değişikliğini onaylayamaz” gibi kurallar araçlarla zorlanabilir ve yapılandırma [kod olarak altyapı](https://en.wikipedia.org/wiki/Infrastructure_as_code) uygulamalarıyla kod olarak tutulabilir. Politika kod olduğunda bir denetçiye bir toplantı tutanağı yerine kuralı ve geçmişini gösterebilirsiniz. Boru hattını kaç değişikliğin atladığını ölçün, çünkü her atlama kontrolde bir delik demektir.

### Kontrolü dürüst tutun

**10. Acil değişiklikler için hızlı bir yol tutun ve nasıl kullanıldığını gözden geçirin.** Acil değişiklikler hız gerektirir, bu yüzden onları normal kuyrukla yavaşlatmayın. Her birini sonradan gözden geçirin ve hacimde yukarı doğru bir kaymaya dikkat edin, çünkü normal yoldan daha kolay olan bir acil yol varsayılan hale gelir (bunun ölçümleri Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş” içindedir). Acil hacmi normal hacmin yanında, aynı görünümde bildirin.

**11. Kayıt bütünlüğünü bir takvime göre denetleyin.** Eksiksiz bir kayıt, yanıt verenlerin yakın zamanda neyin değiştiğini sorduğu bir olay sırasında yardımcı olur (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”). Bütünlüğü ölçün, bir örneklemi gözden geçirin ve boşlukları talep edenin bir kusuru olarak değil, formdaki ya da entegrasyondaki bir kusur olarak ele alın. Sonradan hafızadan derlenen bir [denetim izi](https://en.wikipedia.org/wiki/Audit_trail) zayıf bir kanıttır.

**12. Değişiklik yetkilisi modelini en az yılda bir gözden geçirin.** Her tür ve risk düzeyi için onay haklarının kimde olduğuna karar verin ve gördüğü her şeyi onaylayan kurulları emekliye ayırın. Merkezi bir kurulu stratejik bir role kaydırın: takımlar arasında koordinasyon, takvim çatışmalarını çözme ve pazara çıkış süresi ile risk arasındaki takaslar hakkında karar verme. Kararı ve kanıtı metrik siciline kaydedin (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Türe göre değişiklik hacmi | Meşgul görünmek için bir değişikliği birçok küçük kayda bölmek, sakin görünmek için birçoğunu tek kayda birleştirmek ya da gayriresmî değişiklikleri kayıtların dışında bırakmak | Sayıları her ay boru hattı dağıtım olaylarıyla uzlaştırmak; eşleşen değişiklik kaydı olmayan dağıtımların payını izlemek |
| Standart değişiklik payı | Bir hedefe ulaşmak için riskli işi standart olarak yeniden sınıflandırmak ya da her şeyi kapsayan geniş standart prosedürler yazmak | Sınıflandırmanın üç aylık örneklem incelemesi; türe göre değişiklik başarısızlık oranı (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”); yeniden sınıflandırma günlüğü |
| Onay teslim süresi | Saati geç başlatmak, erken durdurmak, sorulması gerekmeyen sorular için duraklatmak ya da okumadan onaylamak | Ortancanın yanında 85. yüzdelik dilim; onayların özü açısından örneklemli incelemesi; bireye göre değil, onaylayan grubuna göre değişiklik başarısızlık oranı |
| Otomatik onay payı | Her zaman geçen otomatik denetimler eklemek ya da yorumsuz bir akran incelemesini güvence saymak | Otomatik ve akran onaylarının örneklemli incelemesi; otomatik onaylanan değişiklikler için kaçan hatalar ve başarısızlık oranı; atlama sayısı |
| Onay kuyruğu yaşı | Kuyruk kısa görünsün diye eski talepleri kapatmak ya da geri çekmek veya onları yeni bir zaman damgasıyla yeni bir talebe taşımak | Geri çekilen ve yeniden gönderilen taleplerin sayısı; talep yaşının ilk gönderimden ölçülmesi |
| Değişiklik kaydı bütünlüğü | Gerekli alanları yer tutucu metinle doldurmak ya da bir raporu karşılamak için değişiklikten sonra kayıt oluşturmak | Uygulamadan sonra oluşturulan kayıtları işaretlemek; serbest metnin örneklemli kalite incelemesi; taahhüde bağlantı oranı |

Sağlıklı bir okuma şunları gösterir: tür karışımı sabit bir başarısızlık tablosuyla yavaşça standart değişikliklere kayar, ortanca onay süresi 85. yüzdelik dilime yakındır, kuyrukta diğerlerinden çok daha eski kalem yoktur ve atlama sayısı sıfıra yakın kalır. Herhangi bir sayıdaki ani sıçramaya şüpheyle yaklaşın. Süreç değişikliği olmadan bir ayda onay teslim süresinin yarıya inmesi genellikle işin değil, saatin kaydığı anlamına gelir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Artılar | Eksiler |
| --- | --- | --- |
| Önceden yetkilendirilmiş standart değişiklikler | Hızlı, tutarlı, denetimi ucuz; değişiklik yetkilisini riskli işe serbest bırakır | Önceden tasarım gerektirir; sınıflandırma kayabilir; geniş prosedürler riski gizler |
| Boru hattında kaydedilen akran incelemesi | Kodu bilen kişilerce inceleme; otomatik kayıt üretir; hacimle ölçeklenir | Kalite inceleme kültürüne bağlıdır; küçük takımlarda bağımsız bir gözden geçiren olmayabilir; bazı düzenleyiciler ayrı bir onaylayıcı bekler |
| Merkezi değişiklik danışma kurulu | Takımlar arası görünürlük; takvim çakışmalarını ve ortak bağımlılık riskini yakalar | Her değişiklikte bir kapı olarak kullanıldığında yavaştır; daha seyrek teslim edilen daha büyük değişiklik partilerini teşvik eder; bir kuyruk yaratır |
| Başlık metriği olarak onay teslim süresi | Açıklaması kolay; gerçek bir gecikme kaynağını açığa çıkarır | Manipülasyonu kolay; onaylayanları acele ettirebilir; kararın kalitesi hakkında hiçbir şey söylemez |
| Hedef olarak otomatik onay payı | Araç ve kayıtlı kanıt yatırımını ödüllendirir | Zayıf otomatik denetimleri ödüllendirebilir; gerçekten insan yargısı gerektiren değişiklikleri dışarıda bırakabilir |

Daha iyi soru nadiren “kurul mu, kurulsuz mu” sorusudur ve genellikle “hangi değişiklikler hangi türden incelemeye ihtiyaç duyar ve bunu nasıl biliriz?” sorusudur.

## Takımınızla tartışılacak sorular

**1. Geçen ay kaç değişiklik yaptık ve tüm kaynaklarımız aynı fikirde mi?**
Her gruptan biletlerden, boru hattı dağıtımlarından ve gayriresmî kanallardan kendi sayısını çıkarmasını isteyin. Toplamları karşılaştırın. Boşluk kendi başına kaydedilmemiş değişiklik hakkında bir bulgudur. Kolaylaştırıcı hangi kaynağın kayıt sistemi olduğu ve diğerlerini kimin uzlaştıracağı üzerinde anlaşmalıdır.

**2. Normal değişikliklerimizden hangileri aslında rutin ve onları standart yapmak için ne gerekir?**
En sık görülen beş normal değişikliği listeleyin. Her biri için prosedürün belgelenip belgelenmediğini, riskin anlaşılıp anlaşılmadığını ve takımın temiz bir geçmiş sicili olup olmadığını sorun. Tartışma çoğu zaman bir ya da iki net aday ortaya çıkarır. Önceden yetkilendirmeyi güvenli kılacak denetimleri yakalayın ve standart prosedürü kimin onaylayacağını adlandırın.

**3. Onay saatimiz nerede başlıyor ve duruyor ve onun içinde ne bekliyor?**
Son üç normal değişikliği alın ve gönderimden karara kadar izleyin. Her devri, toplantıyı ve bilgi talebini not edin. İnsanlar çoğu zaman beklemenin ne kadarının soru turları arasındaki takvim süresi olduğuna şaşırır. Saatin yazılı bir tanımı ve nelerin dışarıda bırakıldığı üzerinde anlaşın.

**4. Onaylarımıza güveniyor muyuz, yoksa yalnızca onları mı topluyoruz?**
Yakın tarihli onaylardan bir örneklem çekin ve incelemeleri okuyun. Saniyeler içinde ya da yorumsuz verilmiş onaylara bakın. Amaç bir suçlu bulmak değil, sürecin gerçekte ne kadar güvence sağladığını öğrenmektir. Bir incelemeyi daha yavaş yapmadan nasıl daha özlü kılacağınızı tartışın.

**5. Değişiklik kurulumuz ne işe yarıyor ve toplanmayı bıraksa neyi kaybederdik?**
Kurulun başka kimsenin karar veremeyeceği neyi karara bağladığını ve yalnızca neyi onayladığını sorun. Bazı kurullar takımlar arasında koordinasyon ve takvim çakışmalarını fark etme gibi değerli işler yapar. Diğerleri kod incelemesinde zaten verilmiş kararları yeniden ifade eder. Hangi işlevlerin tutulmaya değer olduğu ve hangilerinin boru hattına ya da daha hafif bir foruma taşınabileceği üzerinde anlaşın.

**6. Onay süresini yarıya indirseydik, bunun güvenli olduğunu anlamak için ne görmemiz gerekirdi?**
Değişiklikten önce güvenlik sinyallerini adlandırın, örneğin türe göre değişiklikler için başarısızlık oranı, acil pay ve son değişikliklere bağlı olaylar. Bir duraklamayı tetikleyecek eşikler üzerinde anlaşın. Bu konuşma bir hız hedefini durdurma kuralı olan bir deneye çevirir ve bu, yanlış şeyi en iyileştirmeye karşı en iyi savunmadır.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları onay teslim süresini, bitmiş bir değişiklik ile çalışan bir değişiklik arasındaki boş zaman olarak hisseder. Ne zaman toplu yapacaklarına, ne zaman böleceklerine ve ne zaman yeni bir standart değişiklik isteyeceklerine karar verebilmek için kendi sayılarını türe göre, kuyruk görünümüyle birlikte görmek isterler. En iyi katkıları iyi talep şablonları, küçük değişiklikler ve taahhütten değişiklik kaydına temiz bağlantılardır.

### Hizmet ve operasyon takımları

Operasyon takımları değişiklik kaydını ilk olay sorusunu yanıtlamak için kullanır: yakın zamanda ne değişti? Bütünlüğe, doğru hizmet bağlantılarına ve güvenilir bir takvime değer verirler. Ayrıca yanlış giden bir değişikliğin maliyetini taşırlar, bu yüzden sınıflandırma kurallarında ve acil değişikliklerin incelenmesinde meşru bir çıkarları vardır. En iyi hamle, standart değişiklik kataloğuna teslimat takımlarıyla birlikte sahip çıkmaktır, böylece önceden yetkilendirme operasyonel bilgiyi yansıtır.

### Liderlik ve yönetişim

Liderler ve yönetişim kurulları değişikliklerin kontrol altında olduğuna dair güvenceye ve kontrolün kurumu yavaşlatıp yavaşlatmadığını bilmeye ihtiyaç duyar. Bu metrikler ikisini de verir: tür karışımı, bekleme süresi ve kayıtlı kanıtla desteklenen onayların payı. Hizmetler arasında eğilimleri ve dağılımı isteyin, asla bir lig tablosu istemeyin ve bunları başarısızlık ölçümlerinin yanında okuyun (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”). Onayı boru hattına taşıyan otomasyonu finanse etmek genellikle kurula bir gözden geçiren eklemekten daha iyi bir yatırımdır.

### Müşteriler ve kullanıcılar

Müşteriler değişiklik sürecini nadiren görür. Gelen yeni özellikleri, hızla yayına giren düzeltmeleri ve bir yayından sonra daha az kesinti görürler. Yavaş onay, istedikleri düzeltmeleri geciktirir ve zayıf onay, korktukları kesintiyi riske atar. Bir hizmetin planlı bakım pencereleri varsa değişiklik takvimini sade bir dille yayımlayın.

## Uygulamada: çevik bir ITIL örneği

Kurgusal bir bölgesel sigorta şirketi, sekiz teslimat takımı ve haftada iki kez toplanan bir CAB ile bir müşteri portalı işletir. Aşağıdaki tüm sayılar açıklayıcıdır.

Hizmet operasyonları sorumlusu değişikliğin ilk eksiksiz görünümünü oluşturur. Ay için portal, biletlere göre yaklaşık 420 tamamlanmış değişiklik, boru hattına göre 610 üretim dağıtımı ve bilet olmadan yapılan değişiklikler olduğu ortaya çıkan bir boşluk gösterir. 420 biletli değişikliğin yüzde 18'i standart, yüzde 76'sı normal ve yüzde 6'sı acildir (açıklayıcı). Normal değişiklikler için ortanca onay teslim süresi 2 iş günü ve 85. yüzdelik dilim 7 iş günüdür (açıklayıcı). Kuyruktaki en eski talep 12 iş günüdür bekliyor.

Takımlar uzun beklemeye baktıklarında iki neden bulur. Birçok talep rutin olsa bile bir sonraki kurul toplantısına kadar bekler ve diğerleri eksik bilgi nedeniyle talep edene birkaç kez geri döner. Takım iki saati ayırır ve 85. yüzdelik dilim beklemesinin kabaca yarısının talep edeni beklemekle geçen süre olduğunu keşfeder. Önce talep şablonunu düzeltirler. Ardından en yaygın üç normal değişikliği seçerler: testleri geçen bağımlılık güncellemeleri, bir özellik bayrağı aracındaki yapılandırma anahtarları ve uygulama sunucularının ölçeklenmesi. Prosedürleri yazarlar, riski değişiklik yetkilisiyle kararlaştırırlar ve onayı boru hattında kaydedilen standart değişikliklere dönüştürürler.

İki ay sonra standart pay yüzde 41'e yükselir (açıklayıcı), normal değişiklikler için onay teslim süresinin 85. yüzdelik dilimi 4 iş gününe düşer (açıklayıcı) ve türe göre değişiklik başarısızlık oranı, tamamlayıcı ölçümlerde bildirildiği gibi sabit kalır (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”). Kurul, her normal değişikliği incelemekten yüksek riskli değişiklikleri ve aylık takvimi incelemeye geçer.

Üç aylık örneklemde bir manipülasyon riski ortaya çıkar. Bir takım, “yapılandırma değişiklikleri” için önceki prosedür gevşek ifade edildiği için bir veri tabanı şema geçişini standart değişiklik olarak sınıflandırmıştır. Örneklem gözden geçireni geçişin bir geri alma planı olmadığını fark eder. Takım standart değişiklik tanımlarını sıkılaştırır, şema değişikliklerinin her zaman normal olduğuna dair bir kural ekler ve yeniden sınıflandırma günlüğü sürekli bir gündem maddesi olur. Metrik siciline kaydedilen karar, standart değişiklik payını bir hedef olarak değil, bir bağlam ölçüsü olarak tutmaktır.

## Sektör mercekleri

**Girişim.** Bir girişimin genellikle az resmî süreci ve bol boru hattı otomasyonu vardır. Değişiklikler kayıtsız ve hızlı gerçekleşir, bu yüzden bütünlük ve taahhütten dağıtıma bağlantı en çok önem taşır. Üç türün tek sayfalık bir tanımı ve boru hattında kaydedilen inceleme çoğu zaman yeterlidir.

**Küçük işletme.** Küçük bir işletmede çoğu zaman hem değişiklik yazan hem de yayımlayan bir ya da iki kişi bulunur, bu yüzden bağımsız inceleme zordur. Rutin iş için basit bir standart değişiklik listesi kullanın, müşteri verisine ya da paraya dokunan her şey için ikinci bir çift göz isteyin ve değişikliklerin sade bir günlüğünü tutun. İzlemeye değer ölçümler türe göre hacim ve kayıt bütünlüğüdür, çünkü ucuzdurlar ve bir olay sırasında yardımcı olurlar.

**Kurumsal.** Kurumların çok sayıda takımı, ortak platformları ve farklı risk taşıyan eski sistemleri vardır. Bir CAB'leri olma eğilimindedir ve metrikler hangi görevlerinin kalması gerektiğine karar vermeye yardımcı olur. Ana iş tutarlı sınıflandırma, ortak bir standart değişiklik kataloğu ve denetim kanıtını kaydeden bir boru hattıdır. Takım sıralaması değil, hizmet ve risk sınıfına göre toplayın.

**Kamu ve kamu sektörü.** Kamu kurumları çoğu zaman onay, görevler ayrılığı ve kayıt saklama için yasal gerekliliklerle karşılaşır ve satın almaya dayalı yayın pencereleri olabilir. Metrikler hangi kontrollerin zorunlu ve hangilerinin yerel alışkanlık olduğunu belirtmelidir, çünkü birincisi kaldırılamaz ve ikincisi kaldırılabilir. Kayıtlı akran incelemesi ve boru hattı kanıtı çoğu zaman amacı karşılayabilir, ancak buna güvenmeden önce bunu ilgili denetçiyle doğrulayın (bkz. Konu 8.3 “Uyum ve denetim metrikleri”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon genellikle değişikliklerin beklemekte geçirdiği zamandır. Bitmiş iş bir karar için kuyrukta beklediğinde değer gecikir, partiler büyür ve her parti daha fazla risk taşır. İkinci bir motivasyon güvencedir: liderler ve denetçiler değişikliklerin kontrol altında olduğunu bilmek ister ve boru hattındaki kayıtlı kanıt, bir yeniden kurguya göre üretmesi daha ucuz ve daha güvenilirdir. Üçüncüsü olay yanıtıdır, çünkü eksiksiz ve doğru bir değişiklik kaydı bir nedeni aramayı kısaltır.

Değişiklik aracı ve boru hattı zaman damgalarını ve türleri zaten saklıyorsa toplama ucuzdur, onları entegre etmeniz gerekiyorsa orta düzeydedir. Veriler üzerinde harekete geçmek daha fazlaya mal olur: standart değişiklik prosedürleri yazmak, boru hattı denetimleri kurmak ve onaylayanları ve talep edenleri eğitmek. İşin çoğunu ilk çeyrekte ve sonrasında örnekleme ve gözden geçirme için daha düşük, sabit bir maliyet bekleyin.

Getiri, değişiklik başına daha az bekleme süresi, daha az toplantı, denetim kanıtı hazırlamak için daha az çaba ve olaylar sırasında daha hızlı teşhis olarak ortaya çıkar. Bunu kendi verilerinizle tahmin edin: onay bekleme saatlerindeki azalmayı etkilenen değişiklik sayısıyla ve finans ortağınızın kabul ettiği gecikmiş saat başına bir maliyetle çarpın. Başka kurumlardan rakamlar almayın. DORA araştırması argümanın yönünü destekler, ancak sayfaları bir maliyet ya da getiri vermez ve herhangi bir parasal rakam kendi ölçümlerinizden gelmelidir.

## Anti-desenler ve tuzaklar

- **Standart değişiklik payını bir hedef olarak ele almak.** Takımlar sayıya ulaşmak için riskli işi yeniden sınıflandırır. Onu bağlam olarak kullanın, sınıflandırmayı örneklemle gözden geçirin ve türe göre başarısızlık oranlarını izleyin.
- **Yalnızca onay hızını ölçmek.** Hızlı bir göstermelik onay mükemmel görünür ve hiçbir şey sağlamaz. Teslim süresini, onay özünün örneklemli incelemesi ve başarısızlık tablosuyla eşleştirin.
- **Her olaydan sonra onay eklemek.** Her yeni kapı sistemi yavaşlatır ve çoğu zaman daha büyük partileri teşvik eder. Önce başarısızlığın neden olduğuna bakın ve nedeni testte, incelemede ya da boru hattında düzeltin.
- **Onaylayanları ya da talep edenleri sıralamak.** Kişi başına onay ya da ret sayıları insanlara her şeyi ya da hiçbir şeyi onaylamayı öğretir. Hizmete ve değişiklik türüne göre bildirin.
- **Değişiklik türleri arasında ortalama almak.** Tek bir ortalama rutin ve riskli işi karıştırır ve ikisini de gizler. Her zaman türe göre ayırın ve 85. yüzdelik dilimi gösterin.
- **Süreç dışında yapılan değişiklikleri görmezden gelmek.** Atlama gerçek hacmi ve riski gizler. Boru hattı dağıtımlarını değişiklik kayıtlarıyla uzlaştırın ve boşlukları bir sistem kusuru olarak ele alın.
- **Kurulu alışkanlıkla tutmak.** Gördüğü her şeyi onaylayan bir kurul, güvence eklemeden gecikme ekler. Her yıl başka kimsenin karar veremeyeceği neyi karara bağladığını gözden geçirin ve onu yeniden odaklayın.
- **Verileri toplayıp asla karar vermemek.** Her metriği adlandırılmış bir sahibe ve bir gözden geçirme forumuna bağlayın (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Sınıflandırma ve hacim | Türler gayriresmîdir; toplamı kimse bilmez | Bazı takımlar farklı kurallarla türe göre sayar | Tek yazılı sınıflandırma, tek kayıt sistemi | Tür karışımı eğilim olarak izlenir ve doğruluk için örneklenir | Standart değişiklik kataloğu tedarikçilerle paylaşılır ve risk kanıtı değiştikçe gözden geçirilir |
| Onay saati ve kuyruk | Onay beklemeleri hissedilir ancak zamanlanmaz | Bazı takımlar talepleri zaman damgalar | Saatin tek tanımı, ortanca ve yüzdelik dilim gösterilir | Kuyruk yaşı haftalık gözden geçirilir; gecikmeler finanse edilen düzeltmeleri yönlendirir | Onay akışı takımlar ve tedarikçiler arasında başarısızlık ve müşteri sonuçlarına karşı ayarlanır |
| Onayın otomasyonu | Onay bir toplantı ya da e-postadır | Birkaç boru hattı akran incelemesini kaydeder | Kayıtlı inceleme ve denetimler düşük riskli değişiklikler için varsayılandır | Otomatik pay, atlama sayısı ve örneklemli kalite denetimleriyle izlenir | Politika, risk tablosu değiştikçe uyum sağlayan ortak platform kontrollerinde kodlanmıştır |
| Kayıtlar ve kullanım | Kayıtlar zayıftır ya da sonradan yazılır | Kayıtlar vardır ancak kaliteleri farklıdır | Gerekli alanlar üzerinde anlaşılır ve hizmetlere bağlanır | Bütünlük denetlenir ve olay incelemelerinde kullanılır | Değişiklik verileri kurum genelinde olay, sorun ve denetim uygulamalarını besler |

## Kontrol listesi

- [ ] Üç değişiklik türü ve ölçütleri yazılmış ve üzerinde anlaşılmıştır.
- [ ] Boru hattı dağıtımlarıyla uzlaştırılmış, türe göre tamamlanan değişikliklerin tek bir görünümü vardır.
- [ ] Onay saatinin yazılı bir başlangıcı, bitişi ve dışarıda bırakılanlar listesi vardır.
- [ ] Onay teslim süresi bir ortanca ve bir 85. yüzdelik dilim olarak bildirilir.
- [ ] Onay kuyruğu yaşı görünürdür ve haftalık gözden geçirilir.
- [ ] En az bir sık görülen normal değişiklik, belgelenmiş bir prosedürle standart değişikliğe dönüştürülmüştür.
- [ ] Akran incelemesi ve test sonuçları değişiklik kayıtlarına otomatik bağlanır.
- [ ] Üç aylık bir örneklem sınıflandırmayı ve onay kalitesini denetler.
- [ ] Boru hattının atlanması ölçülür ve gözden geçirilir.
- [ ] Her metriğin metrik sicilinde adlandırılmış bir sahibi, bir manipülasyon yolu ve bir koruyucu ölçütü vardır.
- [ ] Hiçbir rapor bireysel onaylayanları ya da talep edenleri sıralamaz.

## Yapay zekâ istemleri

**Üç değişiklik türü için bir sınıflandırma kılavuzu taslağı hazırlayın.**

```text
[kurum türü] içinde çalışıyorum ve [hizmet listesi] hizmetlerini işletiyoruz.
Değişiklik aracımız [araç], boru hattımız [boru hattı aracı] ve düzenleyici
bağlamımız [düzenlemeler ya da yok]. En sık yaptığımız on değişiklik şunlar:
[liste]. Her birinin standart, normal ya da acil değişiklik olup olmadığına karar
vermek için, kullandığınız ölçütlerle ve sınırda bir duruma ait bir örnekle,
sade dilde bir kılavuz taslağı hazırlayın. Kıyaslama değerleri uydurmayın ve
herhangi bir uygulamanın bir denetim gerekliliğini karşıladığını ileri sürmeyin.
Varsayımlarınızı ve kılavuzu benimsemeden önce yanıtlamam gereken soruları
listeleyin.
```

**Onay süresinin nerede harcandığını bulun.**

```text
Gönderim, bilgi talebi ve karar zaman damgalarını içeren değişiklik
kayıtlarından bir döküm burada: [yapıştırılmış veri ya da açıklama]. Onay
sürecimiz [açıklama]. Onay teslim süresinin ortancasını ve 85. yüzdelik dilimini
değişiklik türüne göre hesaplayın, talep edeni beklemekle geçen süreyi karar
beklemekle geçen süreden ayırın ve en uzun vakalar hakkında sorulacak üç soru
önerin. Verilerde olmayan rakamlar uydurmayın ve bireyleri sıralamayın.
Varsayımlarınızı ve fark ettiğiniz veri kalitesi sorunlarını listeleyin.
```

**Metrikleri manipülasyon riskleri açısından denetleyin.**

```text
Şu değişiklik yetkilendirme metriklerini bildiriyoruz: [tanımlarıyla metrik
listesi]. Hedef kitle [takım, liderlik ya da yönetişim kurulu] ve metrikler
[amaç] için kullanılıyor. Her metrik için, gerçek bir iyileşme olmadan
şişirilebileceği, gizlenebileceği ya da çarpıtılabileceği makul yolları listeleyin
ve eşleştirilmiş bir koruyucu ölçüm ya da uygulama önerin. Hedefler ya da
kıyaslama değerleri önermeyin. Varsayımlarınızı ve [hizmet adı] için hangi
manipülasyon risklerinin en önemli olduğunu düşündüğünüzü listeleyin.
```

**Kurul onayından boru hattı onayına geçişi planlayın.**

```text
[değişiklik türü] için mevcut onay yolumuz [açıklama], [sayı] onaylayıcı ve
tipik bekleme [açıklama] olarak tanımlanıyor. Boru hattımız [denetimler,
testler, inceleme araçları] sağlıyor. Düşük riskli değişiklikleri kayıtlı,
boru hattına dayalı onaya taşımak için, tutmamız gereken kanıtı, izlenecek
güvenlik sinyallerini ve bir durdurma kuralını içeren aşamalı bir plan önerin.
Planın herhangi bir düzenlemeyi ya da standardı karşıladığını ileri sürmeyin.
Varsayımlarınızı ve [denetçi, güvenlik sorumlusu, değişiklik yetkilisi] gibi
danışmam gereken kişileri listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): ilgili değişiklik, yayın ve olay konularını ve her değişiklik yetkilendirme metriğinin yanında yer alması gereken koruyucu ölçütü bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konunun gözden geçirilmiş bir sürümünün saatlerini, manipülasyon yollarını ve çapraz başvurularını tutarlı tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- Değişiklik yetkilendirme metrikleri değişikliğin akışını ve kontrolünü ölçer: türe göre hacim, onay için bekleme ve boru hattının otomatik kaydettiği onay miktarı.
- Her şeyi değişiklik türüne göre ayırın, bekleme sürelerini bir ortanca ve bir 85. yüzdelik dilim olarak bildirin ve geçmişin yanında canlı kuyruğu da izleyin.
- Rutin işi standart değişikliklere taşımak ve incelemeyi boru hattında kaydetmek beklemeyi kısaltmanın en doğrudan yoludur ve başarısızlık ölçümlerinin yanında okunmalıdır.
- Standart değişiklik payı ve onay hızı kolay manipüle edilir, bu yüzden sınıflandırmayı ve onay kalitesini örnekleyin ve sayıları bireysel karnelerin dışında tutun.
- Metrikleri bir değişiklik kurulunun ne işe yaradığına karar vermek için kullanın ve daha hafif kontrolü güvenli kılan otomasyonu finanse edin.

## Kaynaklar ve ileri okuma

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Change management (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
