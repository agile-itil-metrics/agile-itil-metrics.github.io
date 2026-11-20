# Birikim listesi ve iyileştirme metrikleri

**Birikim listesi bir söz kuyruğudur; bu yüzden kaç sözün beklediğini, ne kadar bekledikleri ve işin sonraki diliminin ne kadarının gerçekten hazır olduğunu ölçün ve büyüyen bir eski öğe yığınını henüz vermediğiniz bir karar olarak ele alın.**

## Genel bakış ve motivasyon

Hizmet geliştiren ya da işleten her takım, ele almayı kabul ettiği işlerin bir listesini tutar. Çevik uygulamada bu liste, ürünü iyileştirmek için neler yapılabileceğini tanımlayan sıralı bir öğe kümesi olan [ürün birikim listesidir](https://en.wikipedia.org/wiki/Product_backlog). Bir akış panosunda karşılığı, başlamış sütunların soluna bekleyen öğelerin kümesidir. [ITIL](https://en.wikipedia.org/wiki/ITIL)’in tanımladığı BT hizmet yönetiminde (ITSM) karşılıkları, bir kuyrukta bekleyen açık olaylar, hizmet talepleri, sorunlar ve değişikliklerdir. Bunların hepsi birikim listesidir. Onları kimin doldurduğu, öğelerin ne kadar hızlı ayrılması gerektiği ve bir öğenin beklemesinin ne anlama geldiği bakımından farklılaşırlar.

Verilerin çoğu bir [sorun izleme sisteminden](https://en.wikipedia.org/wiki/Issue_tracking_system) ya da bir ITSM aracından gelir. Birikim listesi metrikleri yalın bir soruyu yanıtlar: söz verilmiş işin miktarı yapma kapasitesiyle orantılı mı ve söz verilmiş iş hâlâ yapılmaya değer mi? Sınırsız büyüyen bir birikim listesi bir planı tanımlamaz. Bir dilek listesini tanımlar ve onu okuyan herkes, ürün sahibinden bir öğeyi dile getiren müşteriye kadar, ne zaman yapılacağına dair kendi fikrini oluşturur. Dürüst yanıt çoğu zaman “asla”dır ve bunu söylememenin bedeli güvenle, eski öğeleri yeniden okumakla harcanan zamanla ve bayatlamış bilgiyle verilen kararlarla ödenir.

İyileştirme (refinement), bir birikim listesini yararlı tutan etkinliktir. Çevik uygulamada ürün birikim listesi iyileştirmesi, öğelerin başlatılmaya hazır olması için onlara ayrıntı, tahmin ve sıra eklemenin süregiden işidir. Kapasite boşaldıkça iş çeken takımlar aynı etkinliğe çoğu zaman yeniden doldurma (replenishment) ya da birikim listesi bakımı (grooming) der. ITSM’de bu, triyaj, kategorilendirme ve bilinen hata ya da sorun listesinin bakımı olarak görünür. Bu konudaki metrikler birikim listesinin boyutunu ve yaşını, ne kadar işin hazır olduğunu ve iyileştirmenin takımın önünde hazır iş penceresini ne kadar iyi tuttuğunu ölçer.

Dört terim tekrarlanır. **Öğe**, bir birikim listesindeki tek bir girdidir; örneğin bir [kullanıcı hikâyesi](https://en.wikipedia.org/wiki/User_story), bir hata, bir hizmet talebi ya da bir sorun kaydı. **Öğe yaşı**, öğenin birikim listesine girdiğinden bu yana geçen süredir; bu, saatin iş başladığında başladığı akış ölçümündeki iş öğesi yaşından farklıdır (bkz. Konu 2.1 “Akış ölçümleri”). **Hazır**, bir öğenin takımın yazılı hazır olma tanımını karşıladığı, böylece takımın onu başlatabileceği ve bir hizmet düzeyi penceresi içinde bitirmeyi bekleyebileceği anlamına gelir. **İyileştirme**, öğeleri hazır hâle getirme ve hiç yapılmayacak öğeleri çıkarma işidir.

Ürün ve hizmet birikim listeleri farklı davranır ve ikisini karıştırmak bu alandaki en yaygın hatadır. Ürün birikim listesi, öğelerin ürün sahibi sıralarına karar verene kadar bilinçli olarak tutulduğu bir yerdir. Beklemek normal bir durumdur ve eski bir öğe, hâlâ önemli olup olmadığını sormak için bir nedendir. Olayların ve taleplerin bir hizmet birikim listesi ise bir söz iliştirilmiş bir kuyruktur: müşteri bir süre içinde yanıt bekler. Orada beklemek, ilk dakikadan itibaren müşteri için bir maliyettir. Bir ürün birikim listesi budanmalı; bir hizmet birikim listesi boşaltılmalıdır. İkisini tek bir grafiğe koyarsanız grafik yanıltır.

Çevik görüş birikim listesini bir ürün sahibinin sahip olduğu, anlaşılabilecek kadar kısa tutulan ve değere göre sıralanan yaşayan bir ürün olarak ele alır. ITIL görüşü açık kayıtları, bir uygulamanın sahip olduğu üzerinde anlaşılmış bir hizmet düzeyine karşı devam eden iş olarak ele alır. İki görüş de kuyruk kuramından bir olguyu paylaşır: öğeleri bıraktığından hızlı alan bir kuyruk büyür ve bir öğenin beklediği süre kuyrukla birlikte büyür (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”). [Little yasası](https://en.wikipedia.org/wiki/Little%27s_law), kuyruğun boyutunu, öğelerin ayrılma hızını ve bir öğenin sistemde geçirdiği ortalama süreyi birbirine bağlar ve birikim listesi boyutunun ile yaşının aynı şeyin iki görünümü olmasının nedeni budur.

Son bir ayrım konuyu dürüst tutar. Birikim listesi bir üretkenlik ölçüsü ya da bir takımın ne kadar meşgul olduğunun ölçüsü değildir. Büyük bir birikim listesi popüler bir ürün, kötü budanmış bir liste ya da yetersiz kaynaklı bir takım anlamına gelebilir ve yalnızca sayı hangisi olduğunu söyleyemez.

## Temel ilkeler

- **Yaşı da boyut kadar ölçün.** Boyut size ne kadarının beklediğini söyler; yaş ne kadar süredir beklediğini söyler ve en eski öğeler kararların nerede kaçınıldığını gösterir.
- **Ürün ve hizmet birikim listelerini ayrı tutun.** Tutulan bir fikir ve bekleyen bir müşteri farklı şeylerdir ve her biri kendi okumasını gerektirir.
- **Uzun bir liste değil, hazır iş hedefleyin.** Birkaç haftalık, hazır ve iyi sıralanmış iş, kimsenin bakmadığı bin öğeden daha değerlidir.
- **Budama bir özelliktir.** Hiç yapmayacağınız bir öğeyi çıkarmak dürüst bir iştir ve hiçbir zaman sıfırın üzerine çıkmayan bir eleme oranı bir uyarıdır.
- **Dağılımları kullanın.** Öğe yaşının medyanını ve 85. yüzdeliğini raporlayın ve en eski öğeyi gösterin, çünkü ortalamalar kuyruğu gizler.
- **Takımı ve sistemi tanımlayın.** Birikim listesi metrikleri işin bir takıma nasıl ulaştığını ve nasıl ele alındığını gösterir, asla bir bireyin nasıl performans gösterdiğini değil.
- **Her sayıyı bir karara bağlayın.** Bir birikim listesi grafiği bundan sonra ne yapacağınızı değiştirmeyecekse emekliye ayırın.

## Metrik tanımları

Aşağıdaki metrikler bir seferde tek bir birikim listesine uygulanır. Önce birikim listesini seçin (bir ürün birikim listesi, bir olay kuyruğu, bir hizmet talebi kuyruğu, bir sorun listesi) ve her metriği birikim listesi başına raporlayın. Yüzdelikler, Konu 1.6’da (“Hizmet metrikleri için istatistik okuryazarlığı”) belirtilen [yüzdelik](https://en.wikipedia.org/wiki/Percentile) yöntemini kullanır.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Birikim listesi boyutu | Adlandırılmış bir birikim listesinde belirli bir anda açık öğelerin sayısı | Anlık görüntü tarihinde açık ya da hazır durumundaki öğelerin sayısı; devam eden öğeler ve kapatılmış öğeler hariç | öğe | Sorun izleyici ya da ITSM aracı anlık görüntüsü | Olay yönetimi; hizmet talebi yönetimi; sorun yönetimi | Ürün birikim listesi; giriş kuyruğu | Haftalık |
| Birikim listesi yaşı | Açık öğelerin ne kadar süredir beklediğinin dağılımı | Her açık öğe için anlık görüntü tarihi eksi birikim listesine girdiği tarih; medyanı, 85. yüzdeliği ve en eski öğeyi raporlayın | gün | Sorun izleyici ya da ITSM oluşturma ve durum geçmişi | Olay yönetimi; sorun yönetimi; sürekli iyileştirme | Birikim listesi sağlığı; yaşlanmış öğe incelemesi | Haftalık |
| Hazır iş derinliği | Takımın hazır işinin ne kadar ileride olduğu | Hazır olma tanımını karşılayan öğeler / son altı dönemde haftada ortalama biten öğeler | hafta | Sorun izleyici hazır bayrağı ve çıktı hızı geçmişi | İş analizi; hizmet talebi yönetimi | Hazır olma tanımı; iyileştirme | Planlama dönemi başına |
| İyileştirme kapsamı | Yakın dönem penceresinin hazır olan payı | Beklenen işin sonraki iki iki haftalık döneminde (ya da sıraya göre ilk N’de) hazır olma tanımını karşılayan öğeler / o penceredeki öğeler | yüzde | Sorun izleyici sırası, hazır bayrağı ve planlı iş | İş analizi; değişiklik yetkilendirme (planlı değişiklik için) | Ürün birikim listesi iyileştirmesi | Planlama dönemi başına |
| Birikim listesi giriş-çıkış oranı | Öğelerin ayrıldıklarından hızlı gelip gelmediği | Dönemde eklenen öğeler / aynı dönemde tamamlanarak ya da elenerek birikim listesinden çıkarılan öğeler; 1’in üzerindeki oran büyüme anlamına gelir | oran | Sorun izleyici ya da ITSM oluşturma ve çözme olayları | Olay yönetimi; hizmet talebi yönetimi; kapasite ve performans yönetimi | Varış ve çıkış hızları | Haftalık |
| Birikim listesi eleme oranı | Teslim edilmeden çıkarılarak ayrılan öğelerin payı | Yapılmayacak, kopya ya da eskimiş olarak kapatılan öğeler / dönemde birikim listesinden ayrılan bütün öğeler; yapıldı olarak kapatılan öğeler hariç | yüzde | Sorun izleyici çözüm alanı | Sürekli iyileştirme; sorun yönetimi (bilinen hata incelemesi) | Birikim listesi budama; ürün sahibi sıralaması | Aylık |
| Hedefi aşmış hizmet birikim listesi | Üzerinde anlaşılmış yanıt ya da çözüm penceresinden yaşlı açık hizmet öğelerinin payı | Geçen süresi hizmet hedefini aşan açık öğeler / kuyruktaki bütün açık öğeler; saat kayıttan itibaren işler ve yalnızca yazılı tanımın izin verdiği durumlarda duraklar | yüzde | Hizmet düzeyi saati olan ITSM aracı | Hizmet düzeyi yönetimi; olay yönetimi; hizmet talebi yönetimi | Hızlandırma şeridi; hizmet düzeyi beklentisi | Günlük ya da haftalık |

Üç saat açıkça belirtilmelidir. Birikim listesi yaşı, öğe birikim listesinde oluşturulduğunda başlar ve tamamlanarak ya da elenerek ayrıldığında durur; bu yüzden yeniden açılan bir öğe yeni bir yaş başlatır. Hazır iş derinliği yalnızca tamamlanan öğelerden gelen çıktı hızını kullanır, asla planlanan hızı değil, çünkü planlanan hız bir tahmindir. Hedefi aşmış hizmet birikim listesi, izin verilen duraklatmalar nedeniyle birikim listesi yaşından farklı olabilen hizmet düzeyi saatini kullanır (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

## Öneriler

### Birikim listesini ölçülebilir olacak biçimde kurun

**1. Her birikim listesini ve sahibini adlandırın.** Kapsamdaki her birikim listesinin bir sahibi, bir amacı ve bir öğe türü listesi vardır. Bir ürün birikim listesi bir ürün sahibine aittir; bir olay kuyruğu hizmet masasına ya da çözücü gruba aittir. Adlandırılmış bir sahip olmadan eski bir öğenin ne zaman gitmesi gerektiğine kimse karar vermez.

**2. Tutulan öğeleri kuyruğa alınmış sözlerden ayırın.** Her öğeyi ya takımın sıralamak için tuttuğu bir fikir ya da birinin beklediği bir taahhüt olarak etiketleyin. Birikim listesi boyutunu ve yaşını her biri için ayrı raporlayın. Bir ürün birikim listesinde duran bir destek talebi yanlış yerde kuyruğa alınmış bir sözdür ve bir hizmet saatini hak eder.

**3. Hazır olma tanımını yazın ve kısa tutun.** Hazır olma tanımı, bir takımın başlamadan önce bilmesi gereken birkaç şeyi sıralar: aranan sonuç, kaba bir boyut, kabul koşulları ve herhangi bir bağımlılık. Bir avuç satırda tutun ve düzgün işi öngörmeyi bıraktığında gözden geçirin. Uzun bir kontrol listesi iyileştirmeyi evrak işine çevirir ve kutucuk işaretlemeyi davet eder.

**4. Giriş tarihini ve ayrılma nedenini kaydedin.** Yaş ve eleme oranı iki alana bağlıdır: bir öğenin girdiği tarih ve ayrılma nedeni. İkisini de araçta zorunlu yapın ve yapıldı, kopya, eskimiş ve yapılmayacak gibi denetlenen bir ayrılma nedenleri listesi ekleyin. Eksik tarihler, kullanılamaz birikim listesi yaşının en yaygın nedenidir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

### Boyutu ve yaşı birlikte okuyun

**5. Birikim listesi yaşını bir dağılım olarak raporlayın.** Medyanı, 85. yüzdeliği ve en eski öğeyi, ayrıca 30 günün altı, 30 ila 90, 90 ila 180 ve 180’in üzeri gibi yaş bantlarına göre bir histogramı gösterin. Sabit bir ortalama yaş, büyüyen bir kadim öğe yığınını gizleyebilir, çünkü yeni öğeler ortalamayı aşağı çeker. En eski öğe görünümünü gizlemek en zor olanıdır.

**6. Büyümeyi erken görmek için giriş-çıkış oranını kullanın.** Sürekli 1’in üzerindeki bir oran, mevcut boyut ne olursa olsun birikim listesinin büyüyeceği anlamına gelir. Tatilleri ve yayın haftalarını yumuşatmak için bunu kayan dört haftalık bir rakam olarak çizin. Büyümenin artan talepten mi yoksa azalan çıktıdan mı geldiğini takım görebilsin diye çıktı hızıyla eşleyin (bkz. Konu 2.1 “Akış ölçümleri”).

**7. Boyutu çıktı hızıyla zamana çevirin.** Birikim listesi boyutunu dönem başına biten ortalama öğeye bölerek, bekleyen kaba bir dönem sayısı elde edin; bu, Little yasasının doğrudan bir kullanımıdır. Bunun bir ortalama olduğunu, söz olmadığını açıkça belirtin ve son dönemlerden daha düşük ve daha yüksek bir çıktı hızı kullanarak aralığı gösterin. Bir yıllık işe eşit yüz öğelik bir ürün birikim listesi bir takvim değil, kapsam hakkında bir konuşmadır.

### İyileştirmeyi akışta tutun

**8. Birikim listesinin tamamının değil, hazır iş penceresinin hedefini koyun.** İşin sonraki bir ila üç haftası için yeterince iyileştirin, daha fazlasını değil. Altı ay boyunca başlamayacak bir öğeye eklenen ayrıntı genellikle bayatlar; bu yüzden hazır iş derinliğini ölçün ve takımın seçtiği ve yeniden ele aldığı, bir ila üç haftalık iş gibi bir hedef bant içinde dalgalanmasına izin verin. Bandın çok üzerindeki bir derinlik israftır; bir haftalık işin altındaki bir derinlik boşta kalma ya da aceleye getirilmiş planlama riskidir.

**9. İyileştirme kapsamını başlamak üzere olan öğeler üzerinde ölçün.** İyileştirme kapsamı yalnızca sıranın tepesine bakar. Planlama toplantısının soracağı soruyu yanıtlar: şimdi başlasak sonraki öğeler hazır mı olurdu? Bir aksaklık hâlâ düzeltilebilirken, yani sonra değil, planlamadan hemen önce raporlayın.

**10. İyileştirmeyi düzenli, kısa bir etkinlik yapın.** Scrum Kılavuzu dahil çevik rehberlik, iyileştirmeyi süregiden bir etkinlik olarak tanımlar ve biçimini takıma bırakır. Birçok takım kısa, sık bir oturumun tek bir uzun toplantıdan daha iyi çalıştığını bulur.

### Budayın ve gözden geçirin

**11. Bir takvimle budayın ve eleme oranını raporlayın.** En eski öğeleri her ay gözden geçirin ve her biri için sorun: bunu önümüzdeki altı ayda yapacak mıyız, yapmayacaksak neden tutuyoruz? Bir öğeyi belirtilmiş bir nedenle kapatmak başarısızlık değildir. Hiç elemeyen bir takım muhtemelen istif ediyordur; aldığının çoğunu eleyen bir takım ise muhtemelen kapıda reddetmesi gereken işi kabul ediyordur.

**12. Hizmet birikim listelerini budayarak değil boşaltarak yönetin.** Olay ve talep kuyrukları için ilk soru, öğelerin hizmet pencereleri içinde olup olmadığıdır. Hedefi aşan payı ve en eski açık öğeyi izleyin ve bekleyemeyecek öğeler için hızlandırma şeridini tutun. Sorun ve bilinen hata listeleri iki dünya arasında durur: bir düzeltme finanse edilene kadar tutulurlar; bu yüzden onları, her girdi için belirtilmiş bir inceleme tarihiyle bir ürün birikim listesi gibi gözden geçirin (bkz. Konu 4.6 “Teknik borç ve bilinen hatalar”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşlenen koruma çizgisi metriği ya da uygulaması |
| --- | --- | --- |
| Birikim listesi boyutu | Öğeleri toplu olarak eskimiş diye kapatmak, meşgul görünmek için öğeleri bölmek ya da işi yan listelerde ve elektronik tablolarda gizlemek | Ayrılma nedenleriyle birikim listesi eleme oranı; aracın gerçek talepler listesiyle düzenli karşılaştırılması; bırakılan öğelere ilişkin müşteri geri bildirimi |
| Birikim listesi yaşı | Eski öğeleri klonlayarak ya da yeniden oluşturarak giriş tarihini sıfırlamak; öğeleri birikim listeleri arasında taşımak; saati değiştirmek için yeniden dile getirmek yerine yeniden açmak | Klonlanmış ve taşınmış öğelerin denetimi; en eski öğe incelemesi; yaşın bağlı kayıtlar boyunca ilk oluşturulmadan ölçülmesi |
| Hazır iş derinliği | Öğeleri denetlemeden hazır işaretlemek; düşük değerli iş için ayrıntılı öğeler yazarak derinliği şişirmek | Hazır öğelerden bir örneğin tanıma karşı okunması; iş başladığında yeniden iş ya da iyileştirmeye iade oranı |
| İyileştirme kapsamı | Sayıyı tutturmak için hazır bayrağını işaretlemek; daha az öğenin sayılması için pencereyi daraltmak | Planlamadan sonra geri gönderilen öğelerin sayısı; teslimat hedefi başarısı ve dönem ortası kapsam değişikliği (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”) |
| Birikim listesi giriş-çıkış oranı | Çıkışı itmek için kolay öğeleri hızla kapatmak ya da girişi aşağıda tutmak için yeni öğeleri kapıda reddetmek | En eski öğelerin yaşı; eleme oranı; nedensiz reddedilen taleplerin payı; müşterinin bildirdiği karşılanmamış ihtiyaçlar |
| Birikim listesi eleme oranı | Boyutu küçültmek için kullanıcıların hâlâ istediği öğeleri elemek; ya da sayı yumuşak görünsün diye elemelerden kaçınmak | Elenen öğelerden bir örneğin talep edenle birlikte incelenmesi; elenen öğeler için yeniden açma ve yeniden dile getirme oranı |
| Hedefi aşmış hizmet birikim listesi | Saati müşteriyi bekleme durumuyla duraklatmak, önceliği düşürmek ya da pencereyi sıfırlamak için kapatıp yeniden açmak | Duraklatma durumlarında geçen sürenin payı; yeniden açma oranı (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”); kapatılan kayıtlarda kullanıcı memnuniyeti |

Sağlıklı bir okuma, boyutu sabit ya da yavaş düşen, en eski öğeleri az olan ve her birinin bir sahibi ve belirtilmiş bir nedeni bulunan, yakın dönem penceresi çoğunlukla hazır olan bir birikim listesi gösterir. Giriş-çıkış oranı 1 civarında dolaşır, eleme oranı ne sıfırdır ne baskındır ve iyileştirme kapsamı planlı işi daha kırılgan hâle getirmeden yükselir. Sayılar iyi göründüğü hâlde müşteriler taleplerine hiçbir şey olmadığını bildirmeyi sürdürüyorsa müşterilere güvenin ve veriyi denetleyin.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Küçük, agresif budanmış ürün birikim listesi | Anlaşılması ve sıralı tutulması kolay; kapasite konusunda dürüst | Sonradan önemli olacak fikirleri eleme riski; talep edenler yok sayıldığını hissedebilir |
| Büyük, korunan birikim listesi | Her fikri ve talebi korur; yararlı geçmiş | Okuması maliyetli; bayat öğeler planlamayı yanıltır ve gerçek öncelikleri gizler |
| Derin hazır pencere (birçok haftalık iyileştirilmiş) | Düzgün planlama; iş başladığında daha az sürpriz | İyileştirilmiş ayrıntı bayatlar; hiç başlamayabilecek işe emek harcanır |
| Sığ hazır pencere (yaklaşık bir hafta) | Az boşa giden ayrıntı; esnek kalır | Birkaç öğe hazır değilse planlama tıkanabilir; bağımlılıkları görmek için daha az hazırlık süresi |
| Katı hazır olma tanımı | Daha az belirsiz başlangıç; öngörülebilir iş | Akışı yavaşlatan ve kutucuk doldurmayı teşvik eden bir kapıya dönüşebilir |
| Hafif hazır olma tanımı | Hızlı; takıma güvenir | İş sırasında daha çok keşif; dönem ortasında daha çok değişiklik |

Pratik yanıt, birikim listesini tek oturuşta okunabilecek kadar küçük tutmak, yaklaşık bir ila üç haftalık işin hazır penceresini korumak ve hazır olma tanımının insanların hatırlayacağı kadar kısa kalmasına izin vermektir. Hizmet kuyrukları tam tersi bir duruş gerektirir: küçük olmak bir hedef değildir, üzerinde anlaşılmış pencerede bitirmek hedeftir. Her satırda bağlamınıza uyan hücreyi seçin ve nedenini yazın.

## Takımınızla tartışılacak sorular

**1. Bugün öğe eklemeyi bıraksak, son çıktı hızımızda birikim listesini temizlemek ne kadar sürerdi ve bu sayı inandırıcı geliyor mu?**
Birikim listesi boyutunu dönem başına biten tipik öğe sayısına bölerek başlayın ve en iyi ve en kötü son dönemleri kullanarak aralığı gösterin. Takımın sonuca inanıp inanmadığını ve zamanın gerçekte nereye gideceğini sorun. Sayı bir ürün birikim listesi için bir yıldan uzunsa hangi öğelerin kimse fark etmeden çıkarılabileceğini sorun.

**2. En eski beş öğe hangileri ve hâlâ burada olmaları gerektiğine kim karar verdi?**
En eski beş öğeyi giriş tarihleriyle yüksek sesle okuyun. Her biri için adlandırılmış bir sahip ve bir bağımlılık beklemek, bilinçli bir erteleme ya da ihmal gibi kalma nedeni isteyin. Her biri için bir eylem üzerinde anlaşın: planlamak, elemek ya da neden kaldığını ve ne zaman yeniden bakılacağını yazmak.

**3. Burada “hazır” ne demek ve son sürprizlerimiz hazır olmayan öğelerden mi geldi?**
Her kişiden hazır olma tanımını kendi sözcükleriyle yazmasını isteyin, sonra karşılaştırın. Farklar ilk bulgudur. Dönem ortasında sorulara ya da yeniden işe yol açan öğelere geri bakın ve neyin onları hazır kılacağını sorun. Kolaylaştırıcı her sürpriz için kontrol listesi öğesi eklemeye direnmeli, bunun yerine en çok acıyı önleyecek bir ya da ikisini seçmelidir.

**4. Birikim listelerimizden hangileri fikir, hangileri birine verilmiş sözler tutuyor?**
Her birikim listesini sıralayın ve öğelerini iki türe ayırın. Destek talepleri, olaylar ve taahhüt edilmiş müşteri öğeleri sözdür ve bir hizmet saati gerektirir; fikirler ve geliştirmeler sıralama için tutulur. İkisinin nerede karıştığını ve bunun yaş grafiğine ne yaptığını tartışın. Sonuç, her birinin kendi başına raporlanmasına izin veren bir etiket ve bir filtre kadar basit olabilir.

**5. Öğeleri en son ne zaman bilerek çıkardık ve talep edenler nasıl tepki verdi?**
Budama çoğu zaman riskli hissettirir; bu yüzden kanıta bakın. Eleme oranını denetleyin ve elenen birkaç öğeden örnek alın. Talep edenin bilgilendirilip bilgilendirilmediğini ve herhangi birinin bir öğenin geri getirilmesini isteyip istemediğini sorun. Kolaylaştırıcı, grubun talep edenler için basit bir mesaj üzerinde anlaşmasına yardım etmelidir (“bunu yapmayı planlamıyoruz; nedeni şu; koşullar değişirse yeniden dile getirin”); böylece budama rutin ve saygılı hâle gelir.

**6. Birikim listesi grafiklerimizin kimseye yardım etmeden daha iyi görünmesini isteseydik ne yapardık?**
Konu 1.2’deki oyunlaştırma incelemesini her birikim listesi metriğinde çalıştırın. Olası yanıtlar arasında eski öğeleri toplu kapatmak, yaşı sıfırlamak için öğeleri klonlamak, öğeleri erken hazır işaretlemek ve kapsamın saydığı pencereyi daraltmak yer alır. Her yanıt için yukarıdaki tablodaki koruma çizgisinin onu yakalayıp yakalamayacağını denetleyin. Gözden kaçacak olanları kaydedin ve gelecek çeyrekte deneyeceğiniz yeni bir denetim seçin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları planlamayı sakin tutmak için birikim listesi metriklerini kullanır. Hazır iş derinliği ve iyileştirme kapsamı takıma bir sonraki planlama oturumunun düzgün geçip geçmeyeceğini söyler; birikim listesi yaşı ise hangi sözlerin sessizce çürüdüğünü gösterir. İyi bir alışkanlık, her iyileştirme oturumunda yaşı, giriş-çıkışı ve hazır derinliği birkaç dakika gözden geçirmek, sonra bir şey üzerinde harekete geçmektir. Takımlar dışarıya küçük, kararlı bir küme yayımlamalı ve ayrıntılı yaş bantlarını kendi kullanımları için tutmalıdır (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”).

### Hizmet ve operasyon takımları

Operasyon takımları saatleri olan kuyruklar işletir. Merkezî okumaları, önceliğe ve duraklatma durumuna göre bölünmüş, hedefi aşmış açık öğelerin payı ile en eski açık öğedir. Sorun ve bilinen hata listeleri, tutulan öğelerin kalıcı olmaması için her girdide bir inceleme tarihine ihtiyaç duyar. Takımlar ayrıca olay kuyruğu için giriş-çıkış oranını izlemelidir, çünkü birkaç hafta boyunca 1’in üzerindeki bir oran, yetersiz kadronun ya da yinelenen bir nedenin erken işaretidir (bkz. Konu 3.2 “Olay hacmi ve önceliği”).

### Liderlik ve yönetişim

Liderler bir birikim listesini bir niyet beyanı olarak görür. Çok büyük bir birikim listesi onlara kuruluşun teslim edebileceğinden fazlasını vaat ettiğini söyler; hızla küçülen bir liste ise budama ya da azalmış talep anlamına gelebilir. Sayının hangi kararı bilgilendirdiğini sorun. Ham birikim listesi boyutu üzerinde hedeflerden kaçının, iyileştirme ve budama için zaman finanse edin ve bir boyut rakamı sunulduğunda yaş dağılımını ve eleme nedenlerini isteyin (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”).

### Müşteriler ve kullanıcılar

Müşteriler birikim listesini sessizlik olarak deneyimler. Altı ay önce dile getirilmiş ve yanıt almamış bir öğe, her grafikten çok şey söyler. Kullanıcılar gerçeğin söylenmesine değer verir: planlandı, planlanmadı ve nedeni şu ya da bir bağımlılığı bekliyor. Talep edenlere öğelerinin durumunu görmenin bir yolunu verin ve elenen öğeleri bir veri temizleme değil bir iletişim görevi olarak ele alın (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bölgesel bir sigortacı, bir ürün takımı ve ayrı bir hizmet masasıyla bir dahili hasar uygulaması işletir. Bu örnekteki sayılar örnekleyicidir.

Ürün takımının birikim listesinde 412 öğe vardır. Medyan yaş 138 gün, 85. yüzdelik 410 gün ve en eski öğe 29 aylıktır. Takım iki haftada yaklaşık 14 öğe bitirir; dolayısıyla birikim listesi son çıktı hızında kabaca 29 iki haftalık dönemlik iştir. Sonraki iki iki haftalık dönem için iyileştirme kapsamı yüzde 55’tir ve takım eksik ayrıntıları keşfettikçe planlama çoğu zaman uzar. Hizmet masası farklı bir tablo gösterir: 63 açık talep, bunların yüzde 9’u hedefi aşmış ve giriş-çıkış oranı 1’e yakın.

Bir ürün sahibi daha küçük bir sayı ister ve çeyrek sonuna kadar 200 öğenin altı için bir hedef önerir. Takım bunu kendi başına bir hedef olarak ele almak istemez. Bunun yerine bir inceleme yapar. Öğeleri tutulan fikirler ya da söz verilmiş iş olarak etiketler ve 412’nin 38’inin müşterilere ele alınacağı söylenen destek talepleri olduğunu bulur. Bunları bir hizmet saatiyle hizmet kuyruğuna taşırlar. En eski 40 öğeyi okurlar ve 22’sinin eskimiş ya da kopya olduğunu bulurlar. Bunları ayrılma nedenleriyle kapatır ve talep edenlere bildirirler. Bir ila iki iki haftalık dönemlik bir hazır bant belirler ve sıranın yalnızca tepesini iyileştirmek için haftalık kısa bir oturum yaparlar.

Üç iki haftalık dönem boyunca birikim listesi boyutu 301’e düşer ve ay için eleme oranı yüzde 31’dir; bu bilerek yüksektir ve incelemede işaretlenir. İyileştirme kapsamı yüzde 88’e yükselir. Verilere hızlı bir bakış bir oyunlaştırma riskini ortaya çıkarır: boyut beklenenden hızlı düşmüştür, çünkü iki takım üyesi eski öğe listesinden kaçınmak için bir avuç yaşlanmış öğeyi taze olanlara klonlamıştır. Takım bunu, en eski öğe grafiği eleme örneğiyle artık uyuşmadığında yakalar. Yaşı bağlı kayıtlar boyunca ilk oluşturulmadan ölçmeyi ve klonları her budama oturumunda gözden geçirmeyi kararlaştırırlar. Liderlik için kaydedilen karar, boyut hedefini bırakmak ve bunun yerine yaş dağılımını, hazır pencereyi ve eleme nedenlerini her çeyrek raporlamaktır.

## Sektör mercekleri

**Girişim (startup).** Birikim listesi çoğu zaman kurucunun kafasındaki tek bir liste ya da basit bir panodur. Yalnızca en eski öğelerin yaşını ve işin bir sonraki parçasının hazır olup olmadığını izleyin. Sert ve sık budayın, çünkü üç aylık bir fikir için doğru yanıt çoğu zaman onu unutmaktır.

**Küçük işletme.** Ürün ve hizmet işi genellikle bir takımı paylaşır; bu yüzden birikim listesi tutulan fikirleri ve müşteri sözlerini karıştırır. Bunları erkenden bir etiketle ayırın. Kısa bir toplantıda haftalık okunan tek bir liste, ayrıntılı metriklerden iyidir. Önce müşteriye dönük öğelerin yaşını izleyin, çünkü unutulmuş tek bir talep bir ilişkiye mal olabilir.

**Büyük kurum.** Çok sayıda takım ve çok sayıda kuyruk, bir birikim listesini yanlış okumanın yollarını çoğaltır. Metrikleri saatleri ve ayrılma nedenleriyle bir kez tanımlayın ve ürün birikim listesi boyutunu tek bir portföy rakamına katmaktan kaçının. Bir takımı kendi geçmişiyle karşılaştırın, asla farklı işi olan başka bir takımla değil (bkz. Konu 2.4 “Değer akışı metrikleri”). Sorun ve bilinen hata listeleri kendi inceleme ritimlerini hak eder.

**Devlet ve kamu sektörü.** Vatandaşlara verilen taahhütler, yasal yanıt süreleri ve denetim izleri hizmet kuyruklarını biçimlendirir. Yasal saatleri sabit girdiler olarak ele alın ve hedefi aşan payı kullanılan tanımlarla raporlayın. Ürün birikim listeleri finansman turları ve satın almayla kısıtlanabilir; bu nedenle hazır pencerenin ticari bir takımdakinden daha uzun olması gerekebilir. Eleme nedenlerini görünür tutun, çünkü kamusal hesap verebilirlik sessiz bırakmayı riskli kılar.

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bu metriklerin maliyeti mütevazıdır. Verilerin çoğu zaten sorun izleyicide ya da ITSM aracında durur. Maliyetler, zorunlu bir giriş tarihi ve ayrılma nedeni, her ay kısa bir budama oturumu, iyileştirmede yaş ve hazır grafiklerine bakmak için birkaç dakika ve ürün ile hizmet birikim listelerini ayırmak için biraz emektir. Başlamak için bir elektronik tablo ya da aracın yerleşik raporları yeterlidir ve yeni bir ürün satın almak gerekmez.

Getiri, önlenen israftan ve daha net sözlerden gelir. Hazır pencere tutan takımlar, bir öğenin ne anlama geldiğini yeniden keşfetmeye daha az planlama zamanı harcar ve budayan takımlar hiç yapılmayacak öğeleri yeniden okumayı bırakır. Müşteriler dürüst yanıtları daha erken alır; bu da tekrarlanan teması ve yükseltmeleri azaltır. Faydayı takımın kendi başına denetleyebileceği örüntülerle anlatın: daha kısa planlama oturumları, iş başladıktan sonra iyileştirmeye iade edilen daha az öğe, eski talepler hakkında daha az hatırlatma ve liderlik hattaki işin ne olduğunu sorduğunda daha az sürpriz. Bu konu bir yüzde sunmaz, çünkü kaynak olmadan hiçbiri verilemez. Bir çeyrek boyunca kendi başlangıç çizginizi ölçün ve karşılaştırın.

## Anti-desenler ve tuzaklar

- **Birikim listesi boyutunu bir üretkenlik ya da performans puanı saymak.** Boyut talebe, kapsama ve budama alışkanlıklarına bağlıdır. Boyutu yaş ve eleme nedenleriyle raporlayın ve takımları onun üzerinden asla karşılaştırmayın.
- **Tutulan fikirleri ve müşteri sözlerini tek listede karıştırmak.** Yaş grafiği o zaman ihmal gibi okunur ve hizmet saati eksiktir. Onları bir etiketle ayırın ve her birini ayrı raporlayın.
- **Her şeyi iyileştirmek.** Aylarca başlamayacak ayrıntılı öğeler bayatlar. Bir hazır pencere tutun ve yalnızca ihtiyacın hemen öncesinde iyileştirin.
- **Hiç elememek.** Durmadan büyüyen bir liste, kapsam hakkındaki her ifadeyi yanlış yapar. Bir takvimle budayın ve her seferinde nedeni kaydedin.
- **Öğeleri klonlayarak ya da taşıyarak yaşı sıfırlamak.** Grafiğe yaranır ve geçmişi kaybettirir. Yaşı bağlı kayıtlar boyunca ilk oluşturulmadan ölçün ve klonları denetleyin.
- **Kapı olarak kullanılan bir hazır olma tanımı.** Takımın güvenle başlatabileceği işi engelliyorsa akışı yavaşlatır. Kısa tutun ve takımın belirtilmiş bir nedenle onu aşmasına izin verin.
- **Ham boyutta hedefler.** N öğeden az bir hedef toplu kapatmayı davet eder. Hedefi en eski öğelerin yaşına ya da hizmet hedefini aşan paya, bir koruma çizgisiyle birlikte koyun.
- **Ortalama yaşı kullanmak.** Eskiler yığılırken yeni öğeler ortalamayı aşağı çeker. Medyanı, 85. yüzdeliği ve en eski öğeyi gösterin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve veri | Giriş tarihleri ve ayrılma nedenleri eksik ya da tutarsız | Bazı takımlar tarih kaydeder; hazır olma tanımları farklıdır | Hazır olma ve birikim listesi yaşı için tek yazılı tanım; zorunlu giriş tarihi ve ayrılma nedeni | Veri kalitesi örneklenir; yaş klonlar ve taşımalar boyunca ölçülür | Tanımlar takımlar ve tedarikçiler arasında paylaşılır ve kararları bilgilendirmeyi bıraktıklarında gözden geçirilir |
| Birikim listesi sağlığı | Birikim listesi fark edilmeden büyür; budama yok | Liste yönetilemez hâle geldiğinde ara sıra temizlik | Zamanlanmış budama; ürün ve hizmet birikim listeleri ayrılmış | Boyut, yaş, giriş-çıkış ve eleme oranı koruma çizgisiyle izlenir ve gözden geçirilir | Birikim listesi politikası takımlar arasında talebe ve kapasiteye göre ayarlanır; müşteriler öğelerinin durumunu görür |
| İyileştirme | Planlamada özel ayrıntı eklenir | Bazı takımlar için düzenli oturumlar | Üzerinde anlaşılmış hazır pencereyle kısa, düzenli iyileştirme | Kapsam ve hazır derinlik gözden geçirilir ve teslimat sonuçlarına bağlanır | İyileştirme takımlar ve bağımlılıklar arasında paylaşılır; pencere koşullara uyum sağlar |
| Kararlarda kullanım | Sayılar yalnızca bir şeyler ters gittiğinde gösterilir | Tartışma olmadan liderliğe raporlanır | Takım iyileştirmede yaşı ve hazır derinliği gözden geçirir | Finanse edilen iyileştirme işi incelemeyi izler | Birikim listesi kanıtı kuruluş genelinde portföy ve kapasite kararlarını bilgilendirir |

## Kontrol listesi

- [ ] Her birikim listesinin adlandırılmış bir sahibi ve belirtilmiş bir amacı vardır.
- [ ] Tutulan fikirler ve müşteri sözleri etiketlenir ve ayrı raporlanır.
- [ ] Her öğenin zorunlu bir giriş tarihi ve denetlenen bir listeden bir ayrılma nedeni vardır.
- [ ] Takımın kısa, yazılı bir hazır olma tanımı vardır.
- [ ] Birikim listesi yaşı medyan, 85. yüzdelik ve en eski öğe olarak raporlanır.
- [ ] Giriş-çıkış oranı, çıktı hızının yanında kayan bir rakam olarak gösterilir.
- [ ] Bir hazır pencere üzerinde anlaşılmıştır ve hazır iş derinliği ona karşı raporlanır.
- [ ] İyileştirme kapsamı sonra değil, planlamadan önce raporlanır.
- [ ] Takvimde aylık bir budama oturumu vardır ve eleme oranı raporlanır.
- [ ] Hizmet kuyrukları hedefi aşan payı ve duraklatma durumu kullanımını gösterir.
- [ ] Birikim listesi metrikleri için oyunlaştırma incelemesi bu çeyrek çalıştırılmıştır.

## Yapay zekâ istemleri

**Bir birikim listesinin sağlığını değerlendirin.**

```text
[Birikim listesi türü, örneğin bir ürün birikim listesi ya da olay kuyruğu]
sahibi olan [takım adı] ile çalışıyorum. Birikim listesinin özeti şöyle:
[öğe sayısı] öğe, yaş dağılımı [medyan, 85. yüzdelik, en eski öğe], [hafta]
başına biten öğeler [sayılar], [hafta] başına eklenen öğeler [sayılar] ve
eleme nedenleri [sayılar]. Hazır olma tanımımız: [tanım].

Bu rakam bileşiminin ne anlama gelebileceğini, en az üç farklı açıklama
listeleyerek anlatın ve hangi ek verinin bunları birbirinden ayıracağını önerin.
Kıyaslama değerleri ya da hedefler uydurmayın. Varsayımlarınızı ve verdiklerimden
belirleyemediğiniz her şeyi listeleyin.
```

**Bir hazır olma tanımı taslağı hazırlayın.**

```text
[İş türü] üzerinde çalışan [takım adı] için kısa bir hazır olma tanımı taslağı
hazırlamama yardım edin. Hazır olmayan öğelerle şu anki sorunlarımız: [sorunların
listesi]. En fazla altı ölçüt önerin, her ölçütün hangi soruna yönelik olduğunu
söyleyin ve takımın her birini bir dakikadan kısa sürede nasıl denetleyebileceğini
anlatın. Ayrıca takımın tanımı karşılamayan bir öğeyi ne zaman başlatmasına izin
verilmesi gerektiğini önerin. Hiçbir çerçeve metnini kopyalamayın. Varsayımlarınızı
listeleyin.
```

**Bir birikim listesi budama oturumu planlayın.**

```text
[Takım adı] birikim listesi için [süre] süreli bir budama oturumu planlayın.
Birikim listesinde [sayı] öğe var ve en eskiler [yaş] yaşında. Kullandığımız
ayrılma nedenleri: [liste]. Bir gündem, her eski öğe hakkında sorulacak sorular,
öğeleri çıkarılan talep edenlere gönderilecek basit bir mesaj ve sonrasında
kaydedilecek veriyi önerin. Oturumun oyunlaştırılabileceği yolları ve bunların
nasıl yakalanacağını belirtin. İstatistik uydurmayın. Varsayımlarınızı listeleyin.
```

**Karma bir birikim listesinde ürün ve hizmet işini ayırın.**

```text
[Araç adı] içindeki birleşik birikim listemizden [alan listesi] alanlarıyla
[sayı] öğelik bir örnek var. Her öğeyi tutulan bir fikir, hizmet beklentisi olan
bir müşteri sözü ya da belirsiz olarak sınıflandırın ve gerekçenizi açıklayın.
Sonra etiketler ve gelecekteki öğeleri yönlendirmek için basit bir kural önerin.
Bireyleri değil örüntüleri raporlayın ve veride bulunmayan olgular hakkında
tahmin yürütmeyin. Varsayımlarınızı ve sınıflandıramadığınız öğeleri listeleyin.

[kişisel veriler çıkarılmış öğeleri yapıştırın]
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): kullanıma almak üzere olduğunuz bir birikim listesi metriği için eşlenen koruma çizgisini ve komşu konuları bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gözden geçirilmiş bir birikim listesi konusunun oyunlaştırma vektörlerini, koruma çizgilerini ve çapraz başvurularını tutarlı tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- Birikim listesi bir söz kuyruğudur; bu yüzden boyutu ve yaşı birlikte okuyun ve en eski öğeleri gösterin.
- Tutulan fikirleri ve müşteri sözlerini ayrı görünümlerde tutun, çünkü beklemek her birinde farklı bir anlama gelir.
- Kısa bir hazır iş penceresi hedefleyin ve iyileştirme kapsamını başlamak üzere olan öğeler üzerinde ölçün.
- Bir takvimle budayın, öğelerin neden ayrıldığını kaydedin ve sıfır eleme oranını bir uyarı olarak ele alın.
- Ham boyutu değil yaşı ve hizmet pencerelerini hedefleyin ve her birikim listesi metriğini bir koruma çizgisiyle eşleyin.
- Birikim listesi metrikleri işin bir takıma nasıl ulaştığını ve nasıl ele alındığını tanımlar ve asla insanları sıralamaz.

## Kaynaklar ve ileri okuma

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
