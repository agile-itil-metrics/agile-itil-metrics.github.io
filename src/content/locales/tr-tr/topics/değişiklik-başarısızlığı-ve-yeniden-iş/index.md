# Değişiklik başarısızlığı ve yeniden iş

**“Başarısız değişiklik” ifadesini bir kez, yazılı olarak tanımlayın, her başarısızlığı onu doğuran değişikliğe bağlayın ve başarısızlık ile yeniden işi hızla birlikte okuyun. Böylece daha düşük bir sayı, yalnızca daha az bildirim değil, daha güvenli değişiklik anlamına gelir.**

## Genel bakış ve motivasyon

Canlı bir hizmette yapılan her değişiklik, işleri daha kötü hale getirme olasılığı taşır. Pratik sorular, bunun ne sıklıkla olduğu, ne kadar plansız iş yarattığı ve takımın ne kadar hızlı toparlandığıdır. Bu konu bunları yanıtlayan ölçümleri ele alır: başarısız olan değişikliklerin payı, acil yola ihtiyaç duyanların payı, geri alma ve acil yama oranları ve kötü bir değişikliği izleyen yeniden iş. Konunun en az gösterişli kısmını da kapsar: neyin başarısızlık sayıldığı konusunda anlaşmak.

Önce bazı terimler. [ITIL](https://en.wikipedia.org/wiki/ITIL) 4'te değişiklik yetkilendirme denen uygulama, bir hizmeti etkileyebilecek herhangi bir şeyin eklenmesini, değiştirilmesini ya da kaldırılmasını kapsar. Bu nedenle bir **değişiklik** bir kod dağıtımından daha geniştir: bir yapılandırma düzenlemesini, bir sertifika yenilemesini, bir güvenlik duvarı kuralını ya da bir veri tabanı geçişini içerir. **Standart değişiklik** önceden yetkilendirilmiş ve düşük risklidir, **normal değişiklik** değerlendirmeden geçer ve **acil değişiklik** acilen, genellikle bir hizmeti geri getirmek ya da ciddi bir zafiyeti kapatmak için yapılır. **Dağıtım**, bir yazılım sürümünü bir ortama koyma eylemidir, **yayın** ise bir yeteneği kullanıcılara sunar. Bir [özellik anahtarı](https://en.wikipedia.org/wiki/Feature_toggle) kullanan takımlar kodu yayımlamadan dağıtabilir (bkz. Konu 4.5 “Yayın ve dağıtım metrikleri”).

**Değişiklik başarısızlığı**, bozulmuş hizmete yol açan ya da düzeltme gerektiren bir değişikliktir. Düzeltme birkaç biçim alır. Bir [geri alma](https://en.wikipedia.org/wiki/Rollback_(data_management)) sistemi önceki durumuna döndürür. Bir [acil yama](https://en.wikipedia.org/wiki/Hotfix), normal yayın ritminin dışında uygulanan acil bir yamadır. İleriye dönük düzeltme ise bozuk değişikliğin üzerine yeni bir değişiklik gönderir. [Yeniden iş](https://en.wikipedia.org/wiki/Rework), bitmiş olması gereken bir şeyi yeniden yapmaya ya da onarmaya harcanan plansız çabadır. Küçük değişikliklerin sık sık üretime aktığı bir [sürekli teslimat](https://en.wikipedia.org/wiki/Continuous_delivery) ortamında bu ölçümler, hızın istikrara mal olup olmadığına dair ana kanıttır.

İki gelenek aynı olaya farklı bakar. ITIL görüşü değişiklik kaydı etrafında örgütlenir: değişiklik yetkilendirildi mi, başarılı oldu mu ve sonuç kaydedildi mi? Kâğıt üzerinde başarılı olan bir değişiklik yine de bir saat sonra bir olaya yol açabilir. Çevik görüş iş kalemi ve dağıtım etrafında örgütlenir: takımın bitti tanımı tuttu mu ve değişiklik kısa süre sonra plansız işe yol açtı mı? Hiçbir görüş tek başına tam değildir. DORA programının arkasındaki araştırma, değişiklik başarısızlık oranını ve dağıtım yeniden iş oranını verim ölçümlerinin yanında iki “kararsızlık” ölçümü olarak ele alır (bkz. Konu 2.8 “DORA metrikleri”, bunları program düzeyinde tanımlar). Bu konu mekanikler üzerinde daha derine iner: başarısızlık nasıl tanımlanır, olaylar değişikliklere nasıl bağlanır, acil iş nasıl sayılır ve sayılar nasıl manipüle edilir.

Baştan bir uyarı geçerlidir. Bu ölçümler bir takımı, bir hizmeti ya da bir boru hattını tanımlar. Asla bir kişiyi tanımlamaz. Bireysel bir mühendise bağlanan bir değişiklik başarısızlık oranı, insanlara riskli ve değerli işten kaçınmayı, sayılar iyi görünene kadar değişiklikleri bölmeyi ve sorunları bildirmeyi bırakmayı öğretir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) burada sert vurur, çünkü “daha az başarısızlık” daha az başarısızlık kaydederek kolayca elde edilir.

Olay zamanlaması Konu 3.3 “Olaya yanıt ve çözüm süresi” içine, en kötü olaylar Konu 3.4 “Büyük olay metrikleri” içine, onay akışı ve standart değişiklik payı Konu 4.3 “Değişiklik yetkilendirme metrikleri” içine, kök nedenler Konu 4.1 “Sorun yönetimi metrikleri” içine ve yazılı inceleme Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri” içine aittir.

## Temel ilkeler

- **Başarısızlığın tek bir yazılı tanımı olmalıdır.** Duruma göre karar veren takımlar, eğilim olarak izlenemeyen ya da karşılaştırılamayan sayılar üretir ve tanım hakkındaki tartışma iş hakkındaki tartışmanın yerini alır.
- **Bir başarısızlık, değişikliğine kadar izlenebilmelidir.** Bir olay, geri alma ya da acil yama ile onu doğuran değişiklik arasında kayıtlı bir bağ olmadan başarısızlık oranı bir tahmindir.
- **Her düzeltme yolunu sayın.** Geri alma, acil yama, ileriye dönük düzeltme ve elle geçici çözüm, aynı olaya giden dört yoldur. Bunlardan yalnızcasını sayan bir metrik, takımları başka birini seçmeleri için ödüllendirir.
- **Başarısızlığı hız ve geri getirmeyle birlikte okuyun.** Tek başına bir değişiklik başarısızlık oranı, daha az değişiklik yaparak iyileştirilebilir ve bu nadiren amaçtır. Onu teslim süresi, dağıtım sıklığı ve geri getirme süresiyle eşleştirin.
- **Küçük örneklemler yalnızca yüzdeleri değil, sayıları da ister.** Bir ayda sekiz değişikliği ve bir başarısızlığı olan bir takımın yüzde 12,5'lik başarısızlık oranı neredeyse hiçbir şey söylemez. Bu yüzden sayıları gösterin ve daha uzun bir pencere kullanın (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).
- **Acil bir günah değil, bir sinyaldir.** Acil değişikliklerin sabit ve açıklanmış bir payı normaldir. Yükselen bir pay genellikle yukarı akıştaki kalite, planlama ya da tespit sorunlarına işaret eder.

## Metrik tanımları

Başarısızlık ve yeniden iş ölçümleri, değişiklik kaydının, dağıtım günlüğünün ve olay aracının birleştirilmesine dayanır. Aşağıdaki her tanım neyin sayıldığını, nelerin dışarıda bırakıldığını ve saatin nerede başlayıp durduğunu belirtir. Takımlar tanımları metrik sicillerine kopyalamalı ve belirtilmiş bir gerekçeyle uyarlamalıdır.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Değişiklik başarısızlık oranı | Üretime yapılan değişikliklerden bozulmuş hizmete yol açan ya da düzeltme gerektirenlerin payı | başarısızlık penceresi içinde geri alma, acil yama, ileriye dönük düzeltme ya da bağlı bir olay gerektiren değişiklikler / dönemde tamamlanan üretime yapılan tüm değişiklikler; pencere değişikliğin tamamlanmasıyla başlar ve sabit sayıda günden (örneğin 7) sonra durur, metrik sicilinde yazılır; pencere içindeki değişiklikler ayrıca bildirilir ve pencere kapanana kadar orandan dışarıda bırakılır | yüzde | Olay aracı ve acil yama listesiyle birleştirilmiş değişiklik kayıtları ya da dağıtım günlüğü | Değişiklik yetkilendirme; olay yönetimi | Bitti tanımı; kaçan hatalar | Aylık, 90 günlük kayan pencerede |
| Acil değişiklik payı | Acil yoldan yapılan değişikliklerin payı | acil olarak kaydedilen değişiklikler / dönemde tamamlanan tüm değişiklikler; acil, normal değerlendirmenin aciliyet nedeniyle atlandığı ya da kısaltıldığı anlamına gelir ve önceden yetkilendirilmiş standart değişiklikler her iki sayımdan da dışarıda bırakılır | yüzde | Değişiklik kaydı tür alanı | Değişiklik yetkilendirme | Plansız iş ve hızlandırma hizmet sınıfı | Aylık |
| Geri alma oranı | Önceki bir sürüme geri döndürülen değişikliklerin payı | üretime ulaştıktan sonra geri alınan değişiklikler / dönemde üretime yapılan tüm değişiklikler; değişiklik herhangi bir kullanıcıya ulaşmadan önce yapılan bir geri alma (örneğin ilk adımında durdurulan bir kanaryalı yayın) ayrıca sayılır | yüzde | Dağıtım günlüğü ve yayın aracı | Yayın yönetimi; dağıtım yönetimi | Boru hattı ve yayın uygulamaları | Aylık |
| Acil yama oranı | Normal yayın akışının dışında uygulanan acil yamalar olan değişikliklerin payı | acil yama olarak etiketlenen ya da dallanan değişiklikler / dönemde üretime yapılan tüm değişiklikler; payda acil yamaların kendisini içerir | yüzde | Sürüm denetimi dalları ya da etiketleri ve dağıtım günlüğü | Değişiklik yetkilendirme; olay yönetimi | Plansız iş; hızlandırma | Aylık |
| Dağıtım yeniden iş oranı | Önceki bir dağıtımdaki bir soruna plansız düzeltme olan dağıtımların payı | aynı başarısızlık penceresi içinde yakın bir önceki dağıtımdaki bir hatayı ya da başarısızlığı düzelten üretim dağıtımları / dönemdeki tüm üretim dağıtımları; yol haritasından planlı takip işi dışarıda bırakılır | yüzde | “Düzeltir” bağlantısı ya da etiketi olan dağıtım günlüğü ve iş izleyici | Değişiklik yetkilendirme; sürekli iyileştirme | Yeniden iş; kaçan hatalar; başarısızlık talebi | Aylık |
| Değişiklik-olay bağlantı oranı | Çözülen olaylardan, bir değişikliğin onlara neden olup olmadığını ve hangisinin neden olduğunu kaydedenlerin payı | tamamlanmış “değişiklik nedeniyle” alanı olan olaylar (evet ya da hayır, evet ise değişiklik tanımlayıcısı da) / dönemde çözülen olaylar; saat olay kapatıldığında durur | yüzde | Olay aracı ve değişiklik kayıtları | Olay yönetimi; değişiklik yetkilendirme | Olay sonrası inceleme; bitti tanımı | Aylık |
| Başarısızlık tanımı uzlaşması | İki gözden geçirenin bir değişiklik örneklemi için başarısızlık konusundaki uzlaşması | iki bağımsız gözden geçirenin yazılı tanımı kullanarak aynı başarısızlık hükmüne vardığı örneklenen değişiklikler / örneklenen değişiklikler; her çeyrekte rastgele seçilen en az 20 değişiklikten oluşan bir örneklem | yüzde | Metrik siciliyle birlikte tutulan örneklem inceleme tablosu | Sürekli iyileştirme; ölçüm ve raporlama | Retrospektif | Üç aylık |

Tabloya iki not. Başarısızlık oranı ve yeniden iş oranı örtüşür ancak farklıdır: yeni bir dağıtım olmadan geri alınan bir başarısızlık başarısızlık oranında sayılır, yeniden iş oranında sayılmaz. Birim ayrıca olay değil, değişiklik ya da dağıtımdır, çünkü bir değişiklik üç olaya neden olabilir ve bir olay üç değişiklikten gelebilir.

## Öneriler

### Herhangi bir veri toplamadan önce başarısızlığın tanımını yazın

**“Başarısız”ın ne anlama geldiği üzerinde anlaşın ve onu metrik siciline koyun.** Uygulanabilir bir tanım şudur: bir değişiklik, tamamlanmasından sonraki belirtilmiş bir pencere içinde geri alındıysa, acil yama ya da ileriye dönük düzeltme gerektirdiyse ya da belirtilmiş bir ciddiyet düzeyindeki ya da üstündeki bir olaya bağlandıysa başarısız olmuştur. Pencereyi (7 gün yaygındır ve doğru değer hizmetlerinizin sorunları ne kadar çabuk gösterdiğine bağlıdır), olay ciddiyet eşiğini ve tartışmalı bir durumda kimin karar vereceğini belirtin. Hiçbir kesinti olmadan performansı düşüren bir değişiklik gibi zor olanlar dâhil en az beş işlenmiş örnek yazın. Tanımı yılda bir yeniden ele alın ve değişiklikleri gerekçeleriyle kaydedin, böylece kural değişirse bir eğilim çizgisi yeniden ifade edilebilir.

### Başarısızlıkları olay kaydında değişikliklere bağlayın

**Olay kaydına gerekli bir alan ekleyin: bir değişiklik nedeniyle, evet ya da hayır ve evet ise değişiklik tanımlayıcısı.** Alan çözüm sırasında doldurulmalı ve olay sonrası incelemede denetlenmelidir (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”). Bağ oranını kendi metriği olarak izleyin. Olayların yalnızca yarısı alanı taşıyorsa başarısızlık oranı gerçeği bilinmeyen bir miktarda eksik gösterir ve bunu sayının yanında söylemelisiniz. İlk tahmini yapabildiğiniz yerde, örneğin olay başlamadan önceki saatlerde etkilenen hizmette tamamlanan değişiklikleri listeleyerek otomatikleştirin ve bir insanın onaylamasına izin verin.

### Yalnızca birini değil, tüm düzeltme yollarını sayın

**Tek bir başarısızlığı birkaç sinyalden tanımlayın.** Geri almaları dağıtım aracından, acil yamaları sürüm denetiminden ya da yayın günlüğünden, ileriye dönük düzeltmeleri “düzeltir” bağlantısından ve olayları olay aracından çekin, sonra değişikliğe göre tekilleştirin. Yalnızca geri almaları sayan bir takım, ileriye dönük düzeltmeye geçtiği gün başarısızlıkların kaybolduğunu görür. Her yolu ayrı bir döküm olarak da tutun, çünkü karışım bir hikâye anlatır: çok sayıda acil yama ve az sayıda geri alma, geri almanın zor olduğunu düşündürür ve bu kendi başına düzeltmeye değerdir.

### Acil değişiklik payını bir puan değil, bir soru olarak ele alın

**Acil değişiklikleri bir hedef olarak değil, bir grup olarak gözden geçirin.** Her çeyrekte hepsini okuyun ve nedenleri sıralayın: bir hizmeti geri getirme, bir zafiyeti kapatma, geç gelen bir iş talebi, kaçırılmış bir planlama adımı ya da sıradan iş için fazla yavaş bir onay yolu. Son ikisi, insanların onu atlamasına gerek kalmasın diye standart yolu iyileştirerek düzeltilmesi gereken sistem sorunlarıdır (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”). Sıfır bir pay şüphelidir, çünkü gerçek acil durumlar olur. Sürekli yükselen bir pay bir sorun kaydını hak eder (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

### Yeniden işi başarısızlık talebi olarak ölçün

**Yeniden işi, önceki başarısızlığın yarattığı iş olarak izleyin.** Başarısızlık talebi fikri hizmet tasarımından gelir: bir şey ilk seferde doğru yapılmadığı için var olan talep. Teslimat terimleriyle, tek amacı yakın tarihli bir değişikliği düzeltmek olan dağıtımları ve iş kalemlerini sayın. Bu, planlı ve plansız ayrımına doğrudan bağlanır (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”). Yeniden işe harcanan kapasite payını ürün sahibiyle sohbet başlatıcı olarak kullanın, çünkü soyut bir oranı bir sonraki adımda neyle çalışılacağına dair bir takasa çevirir.

### Oranları sayılar, dağılımlar ve bir pencereyle bildirin

**Yüzdelerin yanında sayıları gösterin ve kayan bir pencere kullanın.** On kez dağıtım yapan bir takım için aylık bir başarısızlık oranı gürültülüdür. Kayan 90 günlük bir pencere kullanın, oranın arkasındaki değişiklik ve başarısızlık sayısını gösterin ve belirsizliğe dair kabaca bir gösterge verin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). Geri getirme için, başarısızlıktan geri getirmeye kadar geçen sürenin ortalamasını değil, ortancasını ve 85. yüzdelik dilimini gösterin. Bir hizmetin çok az değişikliği olduğunda hikâyeyi bir oran yerine gerçek başarısızlıkların listesiyle anlatın.

### Başarısızlığı hızla eşleştirin ki iyileşme ikisinden birinde saklanamasın

**Değişiklik başarısızlık oranını her zaman teslim süresi ve dağıtım sıklığının yanında gösterin.** Başarısızlık oranı düşerken dağıtım sıklığı da keskin biçimde düşüyor ve teslim süresi uzuyorsa takım değişiklikleri toplu yapıyor olabilir ve bu her birinin riskini artırır. Hız yükselir ve başarısızlık oranı sabit kalırsa sistem değişiklikte daha iyi hale geliyordur. Eşleştirme, manipülasyona ve daha az dağıtımın daha güvenli dağıtım anlamına geldiğine dair rahat inanca karşı ana savunmadır (bkz. Konu 2.8 “DORA metrikleri”).

### Sayıları değişikliğin kendisini iyileştirmek için kullanın

**Başarısızlık verilerini mühendislik deneylerine çevirin.** Başarısız değişikliklerin ortak özelliklerine bakın: büyüklük, günün saati, tür, ilgili kişi sayısı, ortak bileşenlere dokunup dokunmadıkları ve test kapsamının zayıf olup olmadığı. Ardından küçük, geri döndürülebilir bir deney deneyin: daha küçük partiler, riskli bir alan için otomatik [regresyon testi](https://en.wikipedia.org/wiki/Regression_testing), sonraki riskli değişiklik için bir [kanaryalı yayın](https://en.wikipedia.org/wiki/Canary_release) ya da dağıtımı yayından ayıran bir özellik anahtarı. Tam bir pencereden sonra yeniden ölçün. Amaç daha iyi değişikliktir ve iyileşen bir metrik yalnızca kanıttır.

### Metrikleri suçlamasız bir forumda birlikte gözden geçirin

**Başarısız değişikliklerin aylık bir incelemesini onları yapan insanlarla birlikte yapın.** Gündemin üç maddesi vardır: sayılar ve eğilim, incelenmek üzere seçilen iki ya da üç başarısız değişiklik ve sahibi olan bir iyileştirme eylemi. İnsanların o sırada ne bildiklerini anlatması için suçlamasız inceleme uygulamasını kullanın. İnceleme notlarını metriklerle birlikte yayımlayın. İnsanlar sayıların nasıl kullanıldığı yüzünden başarısızlıkları bildirmekte tereddüt ediyorsa başka bir şeyi değiştirmeden önce bunu düzeltin (bkz. Konu 11.3 “Korku yaratmadan metrikleri devreye almak”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Değişiklik başarısızlık oranı | Başarısızlık penceresini daraltmak; olayları değişikliklere bağlamamak; kötü bir değişikliği “hizmet talebi” ya da “bakım” olarak sınıflandırmak; ileriye dönük düzeltip yeni bir değişiklik olarak adlandırmak; tek bir başarısızlık hepsini kapsasın diye birçok düzenlemeyi tek değişikliğe toplamak | Değişiklik-olay bağlantı oranı; olay listesine karşı üç aylık örneklem denetimi; başarısızlık tanımı uzlaşması; yanında teslim süresi ve dağıtım sıklığı |
| Acil değişiklik payı | Acil işi sahte bir risk derecelendirmesiyle standart yoldan geçirmek; onaydan kaçınmak için sıradan işi acil olarak yönlendirmek; bir acili birkaç normal değişikliğe bölmek | Tüm acil değişikliklerin üç aylık okunması; nedenlerin sıralanması ve gözden geçirilmesi; standart değişiklik payı ve onay teslim süresi (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”) |
| Geri alma oranı | Geri alma kaydetmemek için ileriye dönük düzeltmek; bozuk bir sürümü canlıda tutmak; geri alınacak bir şey kalmasın diye değişiklikleri üretimden uzak tutmak | Yanında acil yama oranı ve yeniden iş oranı; geri getirme süresi dağılımı; olayların dağıtım günlüğüne karşı örneklemi |
| Acil yama oranı | Acil yamaları etiketlememek; onları normal daldan geçirmek; bir acil yamaya “küçük bir iyileştirme” demek | Dağıtım yeniden iş oranı; dal ve etiket denetimi; plansız iş payı (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”) |
| Dağıtım yeniden iş oranı | Düzeltmeleri kaynak dağıtıma bağlamamak; bir düzeltmeyi “planlı” olarak etiketlemek; düzeltmeyi yeni özelliklerle toplu yapmak | Düzeltici dağıtımlarda gerekli “düzeltir” bağlantısı; planlı olarak etiketlenen dağıtımların örneklemli incelemesi; yanında değişiklik başarısızlık oranı |
| Değişiklik-olay bağlantı oranı | Alanı kontrol etmeden “hayır” ile doldurmak; alanın varsayılan olarak “hayır” olmasına izin vermek; yüzdeyi yükseltmek için olayları toplu kapatmak | Olay sonrası incelemede “hayır” yanıtlarının örneklem denetimi; varsayılan değer yok; bir örneklem üzerinde gözden geçiren yorumları |
| Başarısızlık tanımı uzlaşması | Örneklem için kolay örnekler seçmek; ölçülen kişilerin gözden geçiren olması; herkes aynı fikirde olsun diye tanımı gevşetmek | Takımın dışından birinin çektiği rastgele örneklem; sınır vakalarını bilerek eklemek; anlaşmazlıkları yayımlamak ve tanımı düzeltmek |

Sağlıklı bir okuma şöyle görünür: başarısızlık oranı takımın anladığı ve açıkladığı bir aralıkta durur, bağ oranı başarısızlık oranına güvenilebilecek kadar yüksektir, acil değişiklikler az ve açıklanmıştır, geri almalar ve acil yamalar kısa ve prova edilmiştir. Başarısızlıklar hızla bildirilir ve suçlama olmadan tartışılır. Düşük bir bağ oranıyla birlikte doğal olmayan biçimde düşük bir başarısızlık oranı, düşen dağıtım sıklığı ve büyüyen parti boyutları bir başarı değil, bir uyarıdır. Herhangi bir ani iyileşmeyi, kutlamadan önce aracı denetlemek için bir işaret olarak ele alın (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Başarısızlığın sıkı, otomatik tanımı | Tutarlı, tekrarı ucuz, eğilim olarak izlemesi kolay | İnce bozulmayı kaçırır; zararsız geri almaları başarısızlık olarak sayabilir |
| Her değişikliğin yargıya dayalı incelemesi | Bağlamı ve ciddiyeti yakalar | Yavaş, öznel, baskıya ve kaymaya açık |
| Uzun başarısızlık penceresi (haftalar) | Geciken başarısızlıkları yakalar | Neden ve sonucu bulanıklaştırır; yakın tarihli değişiklikler henüz bildirilemez |
| Tüm düzeltme yollarını saymak | Yol değiştirerek manipüle etmesi zor | Birkaç veri kaynağının özenle birleştirilmesini gerektirir |

Temel olarak otomatik bir tanım kullanın, örneklemli bir insan incelemesi ekleyin ve başka bir şey kurmadan önce değişiklikler ile olaylar arasındaki birleştirmeyi iyileştirin.

## Takımınızla tartışılacak sorular

**1. Burada tam olarak neyin başarısız bir değişiklik sayıldığı ve ikimiz aynı değişiklik hakkında anlaşmazlığa düşebilir miyiz?**
Beş yakın tarihli değişiklik alın ve her kişiden başarısız olup olmadıklarına oy vermesini isteyin. Oyları ve nedenleri karşılaştırın. Anlaşmazlıklar yazılı tanımın nerede zayıf olduğunu gösterir. Kesinti olmadan performans düşüşü gibi zor durumlar için bir kural üzerinde anlaşın ve onu bir örnekle yazın.

**2. Hangi olayların bir değişiklikten kaynaklandığını nasıl biliyoruz?**
Bağın bugün nasıl kaydedildiğini ve kimin doldurduğunu sorun. Yakın tarihli on olayı gözden geçirin ve kaçının bir değişikliğe bağlı olduğunu ve kaçının olması gerektiğini görün. Alanın isteğe bağlı olup olmadığını, varsayılan olarak “hayır” olup olmadığını ve kimin denetlediğini tartışın. Kolaylaştırıcı, kayıtta varsayılan değeri olmayan gerekli bir alan gibi somut bir iyileştirmeyi hedeflemelidir.

**3. Hangi düzeltme yollarını kullanıyoruz ve hepsi sayılıyor mu?**
Geri alma, acil yama, ileriye dönük düzeltme, elle geçici çözüm ve özellik anahtarını kapatmayı listeleyin. Her biri için olayın nerede kaydedildiğini ve başarısızlık oranını besleyip beslemediğini sorun. İz bırakmayan yolları fark edin. Tartışma çoğu zaman takımın tercih ettiği yolun metriğin göremediği yol olduğunu ortaya çıkarır.

**4. Son acil değişikliğimiz ne zamandı ve önlenebilir miydi?**
Son üç ya da dört tanesini adım adım gözden geçirin. Her birini neyin acil yaptığını, daha önce neyin bilindiğini ve daha iyi bir standart yolun nasıl görüneceğini sorun. Gerçek acil durumları geç keşiflerden ve yavaş onaylardan ayırın. Acil için tekrarlayan bir nedeni ortadan kaldıracak, sıradan yola ait tek bir düzeltme üzerinde anlaşın.

**5. Haftamızın ne kadarı yakın tarihli değişiklikleri düzeltmeye gidiyor?**
Hafıza yerine izleyiciyi kullanarak son dört haftada yeniden işe harcanan kapasite payını tahmin edin. Tahmini izleyiciyle karşılaştırın. Sayının planlı işte neye mal olduğunu ve ürün sahibinin onu nasıl kullanacağını konuşun. Bir başarısızlık örüntüsü ve onu azaltmak için bir deney seçin.

**6. Başarısızlık oranımız gelecek çeyrekte yarıya düşseydi buna inanır mıydık?**
Manşeti hayal edin ve başka neyin doğru olması gerektiğini sorun: bağ oranı sabit, dağıtım sıklığı sabit, geri getirme hızlı ve yeni “bakım” kategorileri yok. Takımın bu denetimlerden hangilerini zaten yaptığını ve hangilerinin eksik olduğunu tartışın. Ani bir iyileşmenin kutlanmadan önce nasıl araştırılacağı üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları değişikliklere sahiptir, bu yüzden başarısızlığın tanımına ve düzeltmelere de sahiptir. İşten başlayın: başarısız değişikliklere incelemede bakın, ortak özellikleri bulun ve daha küçük partiler, daha iyi testler ya da anahtarlar deneyin. Yeniden işi panonun bir parçası olarak izleyin, böylece plansız düzeltmeler planlı işin yanında görünür olur. Sayıları takımın kendi öğrenmesi için tutun ve bireysel düzeydeki verileri paylaşmaya direnin. Bir metrik liderlere gösteriliyorsa takım içindeki her değişikliği açıklayabilmelidir.

### Hizmet ve operasyon takımları

Operasyon takımları değişikliğin sonuçlarını olay kuyruğunda görür ve olaylar ile değişiklikler arasındaki bağı sürdürmek için en iyi konumdadır. Gerekli alanı ekleyebilir, çözüm adımında denetleyebilir ve sonuçları teslimat takımına suçlama olmadan geri besleyebilirler. Operasyon ayrıca acil yola sahiptir ve kullanımını gözden geçirmelidir. Geri getirme yolları hakkında bilgi paylaşın ve geri almaları teslimat takımlarıyla birlikte prova edin, çünkü başarısızlığın maliyetini azaltmanın en iyi yolu değişikliği geri döndürülebilir kılmanın ortak bir alışkanlığıdır (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).

### Liderlik ve yönetişim

Liderler hizmete göre eğilimleri, iki tür kararsızlık ölçümünü hızla birlikte ve arkalarındaki iyileştirme deneylerini istemelidir. “Başarısızlık oranı yüzde 5'in altında” gibi sabit hedeflerden kaçının, çünkü bunlar yeniden tanımlamaya davet eder ve rakamları bireysel değerlendirmelerde kullanmaktan kaçının. Yönetişim kurulları, kontroller gevşetilirken başarısızlığın ve geri getirmenin sabit kaldığını denetleyerek, daha hafif bir onay yolunun güvenli olup olmadığına dair kanıt olarak verileri kullanabilir. Acil değişikliklerdeki yükselen bir eğilim, nöbetçi mühendisleri suçlamak için değil, planlamaya ve onay tasarımına bakmak için bir sinyaldir.

### Müşteriler ve kullanıcılar

Müşteriler başarısızlık oranını umursamaz. Hizmetin bir güncellemeden sonra bozulup bozulmadığını ve ne kadar çabuk geri geldiğini umursarlar. Başarısızlık verileri dürüst iletişimi destekler: riskli değişikliklerin önceden bildirilmesi, bir değişiklik sorun çıkardığında net durum mesajları ve öğrenmeye dair görünür bir taahhüt. Kullanıcıların kritik görevler için bir hizmete bağımlı olduğu yerlerde bakım pencereleri ve geri alma beklentileri üzerinde onlarla önceden anlaşın (bkz. Konu 3.4 “Büyük olay metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir sağlık hizmeti sağlayıcısının BT departmanı bir hasta randevu hizmeti işletir. Yedi kişilik bir ürün takımı haftada birkaç kez değişiklik yayımlar ve beş kişilik bir operasyon takımı olayları ve değişiklik sürecini yürütür. Bu örnekteki tüm sayılar açıklayıcıdır.

Bir çeyrek boyunca aylık rapor, bir önceki çeyrekte yüzde 11 olan değişiklik başarısızlık oranını yüzde 4 olarak gösterir. Bilgi işlem genel müdürü memnundur. Platform sorumlusu ikna olmamıştır, çünkü nöbetçi takım gecelerinin iyileşmediğini söylemektedir. Takımdan metrik sicilindeki örneklem denetimini çalıştırmasını ister.

Denetim rastgele 30 değişiklik alır ve iki gözden geçiren yazılı tanımı uygular. 30 hükmün 24'ünde uzlaşırlar, yani başarısızlık tanımı uzlaşması yüzde 80'dir (açıklayıcı). Ardından örneklemi olay listesiyle karşılaştırırlar. Çeyrekte çözülen 22 olaydan yalnızca 9'unda “değişiklik nedeniyle” alanı vardır, yani bağ oranı yüzde 41'dir. Diğer 13'ü elle okuyan gözden geçirenler, bir değişikliğin ardından bir gün içinde başlayan 5 tane bulur. Düzeltilmiş sayı başarısızlık oranını yaklaşık yüzde 9'a yükseltir ve denetim sayının neden iyi göründüğünü bulur: düzeltmeleri “bakım” etiketiyle dağıtmaya dair yeni bir alışkanlık ve rapor bunu hem paydan hem de paydadan dışarıda bırakmıştır.

Manipülasyon riski etikettir ve kimse bunu planlamamıştır. Takıma başarısızlıkların bir endişe olduğu söylenmişti ve “bakım” bir konuşmadan kaçınıyordu. Takım üç karar alır. “Değişiklik nedeniyle” alanı varsayılan değeri olmayan gerekli bir alan olur ve olay sonrası inceleme onu denetler. “Bakım” etiketi emekliye ayrılır ve düzeltici dağıtımlar düzelttikleri değişikliğe bir bağ taşımak zorundadır, bu da yeniden iş oranını besler. Başarısızlığın tanımı, hiçbir kesintiye yol açmayan bir yavaş sorgu gerilemesi dâhil altı işlenmiş örnekle yeniden yazılır.

Sonraki çeyrek, yeniden ifade edilmiş yüzde 8'lik bir başarısızlık oranı ve yüzde 90'lık bir bağ oranı gösterir (açıklayıcı). Liderlik raporu artık teslim süresinin yanında sayıları, bağ oranını ve yeniden iş oranını gösterir ve bilgi işlem genel müdürü tek bir yüzde alıntılamayı bırakır.

## Sektör mercekleri

**Girişim.** Değişiklikler küçük ve sıktır ve takım çoğu zaman her başarısızlığı ezbere bilir. Tanımı bir paragrafta tutun, geri almaları ve acil yamaları dağıtım aracında etiketleyin ve başarısızlıkları haftalık retrospektifte gözden geçirin. 20 değişiklik üzerinden bir başarısızlık oranı gürültülüdür, bu yüzden ana kanıt olarak başarısızlıkların bir listesini kullanın. Risk gayriresmîliktir: yazılı bir tanım olmadığında oran, kimin saydığına göre kayar.

**Küçük işletme.** Aynı insanlar dağıtım yapar, işletir ve destek verir, bu yüzden yeniden iş planlı işle doğrudan yarışır. Başarısızlıkları zaten kullandığınız araçta kaydedin, olay kaydına gerekli bir alan ekleyin ve acil değişiklikleri her çeyrekte gözden geçirin. Yalnızca sayıları iyileştirmek için ağır onaydan kaçının. Ortak bir geri alma kontrol listesi bir değişiklik kurulundan daha değerlidir.

**Kurumsal.** Çok sayıda takım, tedarikçi ve araç çok sayıda tanım demektir. Başarısızlık tanımını ve bağ alanını takımlar arasında standartlaştırın, metrik kataloğunda yayımlayın ve toplamadan önce hizmet başına oranları hesaplayın. Sapmayı bulmak için örneklemli denetimler kullanın ve her tedarikçinin değişiklik kayıtlarını kendi kalitesi olan başka bir kaynak olarak ele alın (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”). Toplamaların asla takımların lig tablolarına dönüşmemesine dikkat edin.

**Kamu ve kamu sektörü.** Değişiklik kayıtları denetime ve hesap verebilirliğe hizmet eder ve geri almalar yasa, satın alma ya da ortak platformlarla kısıtlanabilir. Resmî kaydı koruyun ve başarısızlık bağını onun bir parçası olarak ekleyin. Sayıları gözetim kurullarına sayılar ve bağlamla özenle açıklayın, çünkü kritik bir hizmetteki tek bir başarısızlık orantısız biçimde ilgi çekebilir. Verileri, düşük riskli değişiklik için daha hafif yolları, başarısızlığın ve geri getirmenin sabit kaldığına dair kanıtla haklı çıkarmak için kullanın.

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon, başarısız değişikliğin maliyetidir: olay işi, yeniden iş, ertelenen yol haritası kalemleri ve kullanıcı güveninin kaybı. Birçok kurum çabasının ne kadarının yakın tarihli değişiklikleri onarmaya gittiğini söyleyemez ve bir yeniden iş ölçümü ilk dürüst yanıtı sağlar. Dolaylı bir yarar da vardır. Değişikliğin güvenli olduğunu gösterebilen takımlar daha hafif onayı savunabilir ve bu teslim süresini kısaltır. DORA araştırması, ağır dış onay ile zayıf teslimat performansı arasında bir ilişki bildirir (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”) ve başarısızlık verileri, bir takımın bu iddiayı kendi geçmişine karşı sınama biçimidir.

Temel çalışma mevcutsa toplama maliyeti mütevazıdır: olay kaydında gerekli bir alan, etiketlenmiş düzeltici dağıtımlar, üç veri kaynağının birleştirilmesi ve aylık bir inceleme. Daha büyük maliyet dikkattir, çünkü birinin tanıma sahip çıkması, denetimleri yürütmesi ve bulgular üzerinde harekete geçmesi gerekir. Tanım ve bağ elle çalışmadan önce bir araç satın almaktan kaçının.

Getiri, daha az tekrarlanan başarısızlık, daha kısa geri getirme, daha az plansız iş ve yönetişimle daha iyi konuşmalar olarak ortaya çıkar. Bir yüzde vaat etmeyin. Bunun yerine kendi başlangıç değerinizi tahmin edin: bir çeyrek boyunca değişikliğe bağlı yeniden işe ve olay yanıtına harcanan saatleri sayın, normal iç oranınızla fiyatlandırın ve iyileştirmelerden sonra karşılaştırın. Varsayımları belirtin ve sonucu tek bir rakam yerine bir aralık olarak bildirin. Bunu programın maliyetiyle ve kritik bir hizmette tek bir ciddi başarısızlığın maliyetiyle karşılaştırın.

## Anti-desenler ve tuzaklar

- **Başarısızlık oranı için hedef belirlemek.** Yeniden tanımlamaya ve gizli başarısızlıklara davet eder. Bunun yerine öğrenme için bir hedef belirleyin, örneğin her incelemeyi tamamlamak ve her düzeltici eylemi kapatmak, ve oranı eğilimler için izleyin.
- **Takımları ya da insanları başarısızlığa göre sıralamak.** Bildirimi yok eder ve riskli, değerli işi üstlenen takımları cezalandırır. Bir takımı kendi geçmişiyle karşılaştırın ve bağlamı tartışın.
- **Yalnızca olayları başarısızlık olarak saymak.** Erken yakalanan ve geri alınan başarısızlıklar kaybolur. Her düzeltme yolunu dâhil edin ve olayları birkaç sinyalden biri olarak kullanın.
- **Acil değişiklikleri kötü saymak.** Baskı, gizlenmiş acil durumlara yol açar. Onları nedenleri açısından gözden geçirin ve sıradan yolu düzeltin.
- **Olay bağının varsayılan olarak “hayır” olmasına izin vermek.** Varsayılan, gurur okşayan ve yanlış bir sayı üretir. Alanı gerekli yapın ve bir örneklemi denetleyin.
- **Sayılar olmadan bir oran bildirmek.** Küçük örneklemler çılgınca sallanır. Sayıları ve kayan bir pencere gösterin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Başarısızlığın tanımı | Sorulan kişi tarafından duruma göre karar verilir | Bazı takımlar bir tanım yazar; takımlar farklıdır | İşlenmiş örnekler ve belirtilmiş bir pencereyle tek yazılı tanım | Tanım örneklemli denetimlerle sınanır ve uzlaşma ölçülür | Tanım, karar vermeye bilgi sağlamayı bıraktığında tedarikçiler ve müşterilerle gözden geçirilir |
| Değişiklikleri ve olayları bağlama | Bağ varsa insanlar tarafından hatırlanır | İsteğe bağlı alan bazı takımlarca kullanılır | Varsayılan değeri olmayan gerekli alan, olay sonrası incelemede denetlenir | Bağ oranı eğilim olarak izlenir ve gözden geçirilir, boşluklar üzerinde eyleme geçilir | Bağlar, üzerinde anlaşılmış arayüzler üzerinden takımlar ve tedarikçiler arasında paylaşılır |
| Düzeltme ve acil durum yönetimi | Geri almalar ve acil yamalar geçici olarak yönetilir ve kaydedilmez | Geri almalar ve acil yamalar bazı takımlarca etiketlenir | Tüm düzeltme yolları kaydedilir; acil testi yazılmıştır | Acil değişiklikler her çeyrekte gözden geçirilir; geri almalar prova edilir | Geri getirme yolları hizmetlere tasarlanır ve takımlar arasında birlikte sınanır |
| İyileştirmede kullanım | Sayılar takipsiz raporlarda alıntılanır | Başarısızlıklar büyük olaylardan sonra tartışılır | Başarısız değişikliklerin eylemlerle aylık suçlamasız incelemesi | Başarısızlık ve yeniden iş hızla eşleştirilir; deneyler planlanır ve finanse edilir | İyileştirme rutini takımlar arasında paylaşılır, öğrenme yayımlanır |

## Kontrol listesi

- [ ] Belirtilmiş bir pencere ve en az beş işlenmiş örnekle değişiklik başarısızlığının yazılı bir tanımı vardır.
- [ ] Sayım birimi (değişiklik, dağıtım ya da yayın) metrik sicilinde adlandırılmıştır.
- [ ] Olay kaydında varsayılan değeri olmayan gerekli bir “bir değişiklik nedeniyle” alanı vardır.
- [ ] Geri almalar, acil yamalar ve ileriye dönük düzeltmeler dağıtım ya da sürüm denetimi araçlarında etiketlenir.
- [ ] Düzeltici dağıtımlar düzelttikleri değişikliğe bir bağ taşır.
- [ ] Acil değişikliğin kısa bir yazılı testi vardır ve her acil değişiklik belirli bir gün sayısı içinde gözden geçirilir.
- [ ] Oranlar sayılar ve kayan bir pencereyle gösterilir, hiçbir zaman yalın bir yüzde olarak değil.
- [ ] Değişiklik başarısızlık oranı her zaman teslim süresi, dağıtım sıklığı ve geri getirme süresinin yanında gösterilir.
- [ ] Üç aylık bir örneklem denetimi başarısızlık hükümlerini ve olay bağını denetler.
- [ ] Başarısız değişikliklerin suçlamasız aylık bir incelemesi, her eylem için bir sahiple yürütülür.
- [ ] Bu konudaki hiçbir metrik bireyleri sıralamak ya da değerlendirmek için kullanılmaz.

## Yapay zekâ istemleri

**Değişiklik başarısızlığının yazılı bir tanımının taslağını hazırlayın.**

```text
[hizmet ya da ürün türü] hizmetini [takım büyüklüğü] kişiyle işletiyoruz ve
[sıklık, örneğin haftada birkaç kez] yayın yapıyoruz. Araçlarımız [değişiklik
aracı, dağıtım aracı, olay aracı]. Birimi (değişiklik, dağıtım ya da yayın),
başarısızlık penceresini, sayılan düzeltme yollarını (geri alma, acil yama,
ileriye dönük düzeltme, bağlı olay) ve dışarıda bırakılanları belirten, "başarısız
değişiklik" için tek sayfalık bir tanım taslağı hazırlayın. Sınır vakaları dâhil
[sayı] işlenmiş örnek ekleyin. Kıyaslama değerleri ya da eşikler uydurmayın;
ihtiyaç duyduklarınızı benden isteyin. Varsayımlarınızı listeleyin.
```

**Değişiklik-olay bağını tasarlayın.**

```text
İşte olay kaydı şablonumuz: [alanlar]. İşte değişiklik kaydı şablonumuz:
[alanlar]. Hangi değişikliğin hangi olaya neden olduğunun nasıl kaydedileceğini,
gerekli bir alan, izin verilen değerler, kimin dolduracağı ve bir incelemenin onu
nasıl denetleyeceği dâhil olmak üzere önerin. [mevcut veri, örneğin dağıtım
zamanları ve hizmet adları] kullanarak aday değişiklikleri otomatik önermenin bir
yolunu önerin. Araçlarımızın nasıl yapılandırıldığını tahmin etmeyin.
Varsayımlarınızı ve yanıtlamam gereken soruları listeleyin.
```

**Başarısız değişiklik listesini örüntüler açısından çözümleyin.**

```text
Aşağıda [dönem] döneminden [sayı] başarısız değişiklik var, şu alanlarla:
[alanları listeleyin, örneğin büyüklük, tür, gün ve saat, hizmet, düzeltme yolu,
geri getirme süresi]. Örüntüleri ve olası katkıda bulunan etkenleri bulun ve
başarısızlıkları azaltmak için en fazla [sayı] küçük, geri döndürülebilir deney
önerin. Çözümlemeyi takımlar ve hizmetler düzeyinde tutun ve bireyleri
sıralamayın. İstatistikler ya da kıyaslama değerleri uydurmayın. Her örüntünün
örneklem büyüklüğü göz önüne alındığında ne kadar güvenilir olduğunu belirtin ve
varsayımlarınızı listeleyin.
```

**Bir başarısızlık panosunu manipülasyon riskleri açısından denetleyin.**

```text
Panomuz şu tanımlarla [metrik listesi, örneğin değişiklik başarısızlık oranı,
acil pay, geri alma oranı, acil yama oranı, yeniden iş oranı] metriklerini
gösteriyor: [tanımlar]. Her metrik için, sayının hizmet iyileşmeden
iyileşebileceği makul yolları ve her biri için bir koruyucu ölçüt listeleyin.
[takım büyüklüğü] kişilik bir takımın her çeyrekte çalıştırabileceği iki denetim
kontrolü önerin. Kıyaslama değerleri ya da uyum iddiaları uydurmayın.
Varsayımlarınızı listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): teslim süresi ya da olay süresi gibi ilgili bir metriği hangi konunun tanımladığını ve başarısızlık oranının yanına konacak koruyucu ölçütü bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): yeni ya da düzenlenmiş bir başarısızlık metriğinin saatini, kaynağını ve manipülasyon yolunu belirttiğini denetlemek için kullanın.

## Temel çıkarımlar

- Bir değişiklik başarısızlık oranı ancak tanımı kadar iyidir, bu yüzden bir pencere, işlenmiş örnekler ve adlandırılmış bir birimle bir tanım yazın.
- Her başarısızlığı olay kaydındaki gerekli bir alanla değişikliğine bağlayın ve bağ oranını ölçün.
- Geri almaları, acil yamaları, ileriye dönük düzeltmeleri ve bağlı olayları birlikte sayın, böylece takımlar yol değiştirerek metrikten kaçamaz.
- Acil değişiklik payını ve yeniden işi puan olarak değil, planlama ve sıradan yol hakkında sinyaller olarak okuyun.
- Başarısızlığı her zaman hız ve geri getirmenin yanında, sayılar ve kayan bir pencereyle gösterin ve insanları asla sıralamayın.

## Kaynaklar ve ileri okuma

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
