# Ölçüm çerçeveleri

**Bir ölçüm çerçevesi, hangi sayıların sayfada yer hak ettiğine karar vermenin bir yoludur ve en iyileri hep bir hedefle ve bir soruyla başlar; bu yüzden her metriği bir karara bağlı tutan en hafif çerçeveyi seçin.**

## Genel bakış ve motivasyon

İşini ölçmek isteyen bir ekip erken bir sorunla karşılaşır: binlerce olası sayı vardır ve aralarından seçmek için bir kural yoktur. Bir ölçüm çerçevesi bu kuralı sağlar. Bir başlangıç noktası (bir hedef, bir strateji, bir avuç kritik koşul) adlandırır ve bu başlangıç noktasından insanların okuyup üzerinde harekete geçeceği küçük bir ölçü kümesine nasıl gidileceğini tarif eder. Çerçeveler söz dağarcığında farklılaşır ama tek bir amacı paylaşır: her sayıyı, ona sahip olmanın bir nedenine bağlı tutmak.

Bu konu, hizmet işleten hemen her kurumda görünen beş fikri ele alır. Birincisi, yazılım mühendisliği araştırmacısı [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) ve meslektaşları tarafından geliştirilen Hedef-Soru-Metrik (Goal-Question-Metric, GQM) yaklaşımıdır. Bir hedefle başlar, hedefin karşılanıp karşılanmadığını gösterecek soruları sorar ve ancak ondan sonra metrikleri seçer. İkincisi, Intel'de Andrew Grove tarafından ve daha sonra Google'da John Doerr aracılığıyla yaygınlaştırılan bir hedef belirleme yöntemi olan [hedefler ve anahtar sonuçlardır (OKR)](https://en.wikipedia.org/wiki/OKR). Bir hedef, bir ekibin nereye gitmek istediğini söyler ve bir avuç anahtar sonuç, oraya vardığını nasıl bileceğini söyler. Üçüncüsü, Robert Kaplan ve David Norton tarafından 1992'de tanıtılan [dengeli puan kartıdır](https://en.wikipedia.org/wiki/Balanced_scorecard); kurumlardan finansal sonuçlara, müşterilere, iç süreçlere ve öğrenme ve büyümeye birlikte bakmalarını ister, böylece hiçbir tek görünüm baskın olmaz.

Dördüncü ve beşinci fikirler daha eski ve daha sadedir. [Kritik başarı faktörü](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF), bir hedefe ulaşılması için doğru olması gereken bir koşuldur ve [temel performans göstergesi](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI), bu koşulun ne kadar iyi tutulduğunun bir ölçüsüdür. Axelos ve daha sonra PeopleCert tarafından yayımlanan BT hizmet yönetimi (ITSM) çerçevesi ITIL tam olarak bu eşleştirmeyi kullanır. ITIL 4'te (Ekim 2026 itibarıyla yaygın kullanımdaki sürüm), ölçüm ve raporlama ile sürekli iyileştirme üzerine rehber, uygulayıcılara bir hizmet ya da uygulama için CSF'ler tanımlamalarını, sonra bunlara karşı ilerlemeyi gösteren KPI'ları seçmelerini söyler. Daha geniş [ITIL](https://en.wikipedia.org/wiki/ITIL) yaklaşımı burada çoğaltılmaz, özetlenir.

Çevik ve ITIL görüşleri bu alanda yararlı biçimde buluşur. Çevik uygulama kısa öğrenme döngülerinden yanadır: bir ekip bir hipotez ifade eder, bir şey dener, sonucu inceler ve ayarlar. ITIL uygulaması tanımlı hizmetlerden, üzerinde anlaşılmış hizmet düzeylerinden ve yönetilen bir iyileştirme sürecinden yanadır. GQM gibi bir çerçeve, ekibin neyi öğrenmek istediğini sorma çevik alışkanlığına uyar. Bir dengeli puan kartı, liderlere hizmet sağlığının bütünlüklü bir resmini gösterme ITIL ihtiyacına uyar. OKR'ler ikisi arasında yer alır, çünkü kısa döngülerle gözden geçirilir ama yönetişim organlarının anladığı sonuç diliyle yazılır.

Bu konuda üç terim tekrar eder. Bir **hedef**, adı konmuş bir hedef kitle için amaçlanan bir sonucun ifadesidir. Bir **soru**, hedefin karşılanıp karşılanmadığını söylemek için bilmeniz gereken bir şeydir. Bir **metrik**, bir soruyu yanıtlamaya yardımcı olan, bir şeyi saymanın ya da zamanlamanın tanımlı bir yoludur. Çerçeveler üçüncü terime yaklaşımda ayrışır, ama hepsi onun hedeften ve sorudan sonra, en son geldiğinde ısrar eder. Bu sıralama, bir sayının seçildiği amacın yerini aldığı Goodhart yasasında tarif edilen başarısızlığa karşı en güçlü korumadır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Hiçbir çerçeve kötü bir hedef seçimini düzeltmez ve hiçbiri koruyucu önlemlere duyulan ihtiyacı ortadan kaldırmaz. Bir çerçeveyi bir konuşma için iskele olarak görün ve iş değiştikçe onu değiştirmeyi bekleyin. Özellikle KPI'lar, toplam işlenen bildirimler gibi yalnızca yükselen ve bir kararı asla bilgilendirmeyen sayımlar olan [gösteriş metriklerine](https://en.wikipedia.org/wiki/Vanity_metric) dönüşebilir. Ölçmenin daha geniş nedenleri başka bir yerde ortaya konur (bkz. Konu 1.1 “Çevik ITIL neden ölçülür”).

### Çerçeveler nasıl farklılaşır

Çerçeveler biraz farklı sorulara yanıt verir ve bunları karıştırmak yaygındır. Aşağıdaki tabloyu bir harita olarak kullanın.

| Çerçeve | Başlangıç noktası | Tipik çıktı | En iyi kullanım | Tipik ufuk |
| --- | --- | --- | --- | --- |
| Hedef-Soru-Metrik | Bir ürün, süreç ya da hizmet için belirli bir hedef | Hedeflerden, sorulardan ve metriklerden oluşan bir ağaç | Tek bir ekip ya da hizmet için bir ölçüm programı tasarlamak | Haftalar ile aylar |
| OKR'ler | Bir sonraki dönem için iddialı bir hedef | Her biri ölçülebilir anahtar sonuçlara sahip birkaç hedef | Ekipleri sonuçlar etrafında hizalamak ve çabayı odaklamak | Çeyrek |
| Dengeli puan kartı | Bir kurumun stratejisi | Dört perspektifte hedefler ve ölçüler | Liderlere bütünlüklü bir görünüm göstermek ve stratejiyi operasyonlara bağlamak | Yıl |
| CSF'ler ve KPI'lar | Bir hizmet, uygulama ya da hedef | Geçerli olması gereken birkaç koşul, her biri göstergelerle | Tanımlı bir ITIL uygulamasını işletmek ve sağlığını raporlamak | Süregelen, düzenli gözden geçirilir |

## Temel ilkeler

- **Hedeften, sonra sorudan, sonra metrikten başlayın.** Önce seçilen bir metriğin yararlı olduğuna karar verilmesinin bir yolu yoktur.
- **Hedef kitleyi ve kararı açık yapın.** Her hedef kimin yararlandığını adlandırır ve her metrik kimin onun üzerinde harekete geçeceğini adlandırır.
- **Kümeyi küçük tutun.** Okunan ve güvenilen birkaç ölçü, göz gezdirilen uzun bir listeden iyidir.
- **Görünümü dengeleyin.** Hızı kaliteyle, maliyeti deneyimle ve kısa vadeli çıktıyı uzun vadeli öğrenmeyle eşleştirin; böylece hiçbir çerçeve birini diğerinin pahasına ödüllendirmez.
- **Hedefleri hipotez olarak ele alın.** Bir hedef ve sayıları yanlış olabilecek bir bahistir; bu yüzden onları bir takvimle gözden geçirin ve kayıtlı bir gerekçeyle değiştirin.
- **Çerçeveleri ekipleri ve hizmetleri tarif etmek için kullanın, insanları sıralamak için asla.** Puan kartları, anahtar sonuçlar ve KPI'lar bir ekibe ya da bir hizmete aittir.
- **Çerçeveleri bilerek birleştirin.** Hangi çerçevenin hangi kararın sahibi olduğunu söyleyin; böylece aynı sayı üç farklı biçimde tanımlanmaz.

## Metrik tanımları

Aşağıdaki metrikler bir hizmetin değil, kullanımdaki bir çerçevenin sağlığını ölçer. Hedeflerin ve metriklerin hâlâ bağlı olup olmadığını gösterir ve bir ekibin seçtiği her çerçeve için geçerlidir. Sayımlar ekip ya da hizmete göredir, asla kişiye göre değil.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hedef izlenebilirliği | Raporlanan metrikler içinde yazılı bir hedefe ve soruya kadar izlenebilenlerin payı | kayıtlı bir hedefi ve sorusu olan metrikler / raporlanan metrikler | yüzde | Metrik kaydı (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”) | Ölçüm ve raporlama; sürekli iyileştirme | Teslimat hedefi; ürün hedefi | Üç aylık |
| Anahtar sonuç puan dağılımı | Anahtar sonuçların dönem sonu puanlarının yayılımı, her banttaki pay olarak gösterilir | her puan bandındaki anahtar sonuçlar (örneğin 0,0 ile 0,3, 0,4 ile 0,6, 0,7 ile 1,0) / dönemde puanlanan anahtar sonuçlar; kayıtlı bir gerekçeyle bırakılan anahtar sonuçlar hariç | banta göre yüzde | OKR izleme aracı ya da ekip belgesi | Sürekli iyileştirme; hizmet düzeyi yönetimi | Üç aylık planlama; gözden geçirme | Üç aylık |
| Perspektif kapsamı | Dört dengeli puan kartı perspektifi içinde, güncel bir değeri olan en az bir ölçüsü bulunanların payı | son dönemde bir ölçüsü raporlanan perspektifler / dört | yüzde | Puan kartı ya da pano | Ölçüm ve raporlama; hizmet değer sistemi yönetişimi | Paydaş gözden geçirmesi (müşteri ve öğrenme görünümleri) | Üç aylık |
| Gösterge gözden geçirme yaşı | Her KPI'ın tanımının ve hedefinin en son ne zaman gözden geçirildiğinden bu yana geçen süre | gözden geçirme tarihi eksi son gözden geçirmenin tarihi; saat son kayıtlı gözden geçirmede başlar ve raporlama tarihinde durur; medyanı ve en eskiyi raporlayın | gün | Metrik kaydı değişiklik günlüğü | Sürekli iyileştirme; ölçüm ve raporlama | Retrospektif eylemleri | Üç aylık |
| CSF'den KPI'a kapsam | Şu anda raporlanan en az bir KPI'ı olan kritik başarı faktörlerinin payı | güncel bir KPI'ı olan CSF'ler / hizmet ya da uygulama için tanımlanan CSF'ler | yüzde | Uygulama ya da hizmet belgeleri; metrik kaydı | ITIL uygulama rehberlerinde CSF ve KPI yaklaşımı | Bitti tanımı; çalışma anlaşmaları | Üç aylık |

Hedef izlenebilirliği, bir metriği yalnızca hem hedef hem de soru yazılmışsa ve hedef kitle adlandırılmışsa izlenmiş sayar; yalnızca hedef yeterli değildir. Anahtar sonuç puan dağılımı bir ortalama olarak değil, bir yayılım olarak okunmalıdır, çünkü bir ortalama her şeyi hafife alan bir ekibi ve her şeyde başarısız olan bir ekibi gizler. Gösterge gözden geçirme yaşı, dönemde emekliye ayrılan metrikleri hariç tutar.

## Öneriler

### Çerçeveleri seçin ve birleştirin

**1. İşi yapan en küçük çerçeveyi seçin.** Tek bir iyileştirme sorunu olan tek bir hizmet ekibi nadiren tam bir dengeli puan kartına ihtiyaç duyar. GQM çoğu zaman yeterlidir, çünkü net bir duruş noktası vardır: bir hedeften, birkaç sorudan ve birkaç metrikten oluşan bir ağaç. Yapıyı yalnızca bir karar ihtiyaç duyduğunda ekleyin.

**2. Hedefleri üç parçalı yazın: amaç, konu ve bakış açısı.** GQM hedefleri geleneksel olarak, belirtilen bir bakış açısından belirtilen bir konunun belirtilen bir niteliğini iyileştirmek biçiminde kurulur; örneğin hizmet masasına bağımlı insanlar için olay güncellemelerinin netliğini iyileştirmek. Yapı, kimin yararlandığını söylemenizi zorlar. Bir hedefin bakış açısı yoksa, muhtemelen bir sloganıdır.

**3. Bir kişinin kısa bir hikâyeyle yanıtlayabileceği sorular sorun.** “Kullanıcılar bir sorunu bildirdikten sonra ne kadar çabuk geri dönüş alıyor?” iyi bir sorudur, çünkü bir yanıtı ve arkasındaki kanıtı hayal edebilirsiniz. “Performansımız nedir?” değildir. Hedef başına üç ila beş soruyu hedefleyin ve bazılarının bir sayıyla değil, görüşmelerle ya da örneklerle yanıtlanmasını bekleyin.

**4. Metrikleri en son seçin ve birden fazla seçin.** Her soru için aday metrikleri, veri kaynağını ve manipülasyon vektörünü adlandırın (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”). Diğerleriyle gerilim içinde en az bir metrik ekleyin; örneğin yanıt süresinin yanında yeniden açılma oranı. Bir sorunun uygulanabilir bir metriği yoksa bunu söyleyin ve nitel bir denetim planlayın.

**5. Hangi çerçevenin hangi kararın sahibi olduğuna karar verin.** Yaygın bir düzenleme, liderlerin gözden geçirdiği birkaç ölçüyü dengeli puan kartının ya da eşdeğerinin, bir ekibin bu çeyrek seçtiği iyileştirmeleri OKR'lerin ve bir uygulamanın süregelen sağlığını tarif etmeyi CSF'ler ile KPI'ların tutmasıdır. Her sayının tek bir tanımı ve tek bir sahibi olsun diye bu düzenlemeyi metrik kaydına yazın.

### OKR'leri iyi kullanın

**6. Hedefleri sonuç olarak, anahtar sonuçları kanıt olarak yazın.** “Kullanıcılar sorunlarını bizi kovalamadan çözdürür” gibi bir hedef bir sonuçtur. “Yararlı bir ilk güncellemeye kadar geçen medyan süre [güncel değer] değerinden [hedef değer] değerine düşer” gibi bir anahtar sonuç kanıttır. Görev gibi okunan anahtar sonuçlar (“yeni bir portal başlat”) sonuç değil, etkinliktir. Bir kullanıcı için neyin değişeceğini söyleyemiyorsanız, anahtar sonuç bitmemiştir.

**7. OKR'leri ekip ve hizmet düzeyinde tutun.** Bireyler için belirlemek, onları görev listelerine ve performans değerlendirmesi girdilerine dönüştürme eğilimindedir ve Goodhart yasasının öngördüğü manipülasyona davet eder. Bir ekibin kendi anahtar sonuçlarını açıkta yazmasına izin verin ve ekiplerin birbirinin anahtar sonuçlarını görmesine izin verin. Her düzeyin üstteki düzeyi yeniden ifade etmek zorunda olduğu şelalelerden kaçının.

**8. Puanı bir not değil, bir konuşma olarak ele alın.** Mükemmel puanı hedef sayan ekipler çekingen anahtar sonuçlar yazar. Üstte kümelenen bir puan dağılımı hafife almayı, altta kümelenen ise hedeflerin hayal olduğunu düşündürür. Yayılımı her çeyrek gözden geçirin ve ekibin her kaçırmadan ne öğrendiğini sorun.

### Puan kartlarını, CSF'leri ve KPI'ları iyi kullanın

**9. KPI'lardan önce CSF'leri tanımlayın.** Bir kritik başarı faktörü, “kullanıcılar doğru kendi kendine hizmet makalesini bulup kullanabilir” gibi, neyin doğru olması gerektiğinin bir ifadesidir. Bir KPI sonra bunun doğru olup olmadığını gösterir. KPI ile başlamak, saymanın kolay olanı saymaya davet eder. Her CSF için şunu sorun: “Bu doğru olmaktan çıksaydı, ne kadar çabuk fark ederdik ve neyden?” Yanıt KPI'dır.

**10. Tek taraflı bir görünümü önlemek için puan kartı perspektiflerini kullanın.** Dört klasik perspektif finansal, müşteri, iç süreç ve öğrenme ve büyümedir. Hizmet kurumları çoğu zaman bunları yeniden adlandırır; örneğin maliyet, kullanıcı deneyimi, operasyonel sağlık ve yetkinlik. Önemli olan, her perspektifin güncel bir değeri olan en az bir ölçüsünün olması ve birindeki bir düşüşün diğerlerinin yanında okunmasıdır (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”).

**11. Stratejiyi ölçülere basit bir haritayla bağlayın.** Bir [strateji haritası](https://en.wikipedia.org/wiki/Strategy_map), yetenekten sürece, müşteriye ve finansal sonuçlara oklar çizer. Konuşma için yararlıdır ve hesap makinesi olarak zayıftır. Çizin, oklar üzerinde tartışın ve sonra birkaç ölçü seçin. Diyagramı nicel olarak kesin yapmaya çalışmayın.

**12. Çerçeveleri bir takvimle gözden geçirin.** Ekibin her hedef, anahtar sonuç ve KPI için hâlâ önemli olup olmadığını ve insanları hâlâ doğru eyleme yönlendirip yönlendirmediğini sorduğu üç aylık bir gözden geçirme belirleyin. Artık hizmet etmeyeni emekliye ayırın ve nedenini kaydedin. Hedeflerinden daha uzun yaşayan metrikler gösteriş metriklerine dönüşür.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Hedef izlenebilirliği | Kaydı tam göstermek için metrik zaten varken bir hedef ve soru yazmak; her metriği haklı çıkaran belirsiz hedefler | Her çeyrek beş girdiden örnek alın ve sorunun farklı bir metriğe götürüp götüremeyeceğini sorun; hedef kitlenin ve kararın adlandırıldığını denetleyin |
| Anahtar sonuç puan dağılımı | Puanlar 1,0'a yakın kümelensin diye kolay anahtar sonuçlar yazmak; cömertçe yeniden puanlamak; kötü giden anahtar sonuçları nedenini kaydetmeden bırakmak | Nedenleriyle bırakılan anahtar sonuçların sayısı; anahtar sonuçları önceki dönemin sonuçlarıyla karşılaştırın; medyan iddiayı liderlikle gözden geçirin |
| Perspektif kapsamı | Bir perspektif kapsanmış sayılsın diye ona sembolik bir ölçü eklemek; hareket edemeyen ölçüler seçmek | Her perspektif ölçüsünün son yılda değer değiştirdiğini ve ona yazılı bir kararın eklendiğini denetleyin |
| Gösterge gözden geçirme yaşı | Göstergeyi okumadan bir gözden geçirmeyi kaydetmek; yalnızca tarihi değiştirmek | Her gözden geçirmeyle birlikte yazılı bir sonuç (korundu, değiştirildi, emekliye ayrıldı) isteyin ve günlükten örnek alın |
| CSF'den KPI'a kapsam | Tam kapsama ulaşmak için CSF ile ilgisiz bir KPI atamak; bir başarısızlığı ortaya çıkaramayan bir KPI seçmek | Her çift için hangi okumanın CSF'nin başarısız olduğunu göstereceğini sorun; hiç kırmızı olmamış KPI'ları arayın |

Sağlıklı bir okuma, dünya değiştiğinde hedeflerin değiştiği, birkaç anahtar sonucun belirtilen nedenlerle kaçırıldığı ve raporlanan metrik sayısının büyümek yerine azaldığı ya da sabit kaldığı bir okumadır. Her şey yeşilse, puanlar üstte kümeleniyorsa ve kimse bu yıl emekliye ayrılmış bir metriği adlandıramıyorsa, çerçeve süse dönüşmüştür.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Hedef-Soru-Metrik | Her metriği bir nedene bağlar; açıklaması kolay; ekip ölçeğinde çalışır | Kolaylaştırılmış bir oturum gerektirir; kâğıt üzerinde bir alıştırmaya dönüşebilir; hedefler arasındaki öncelik hakkında az şey söyler |
| OKR'ler | Bir çeyreği birkaç sonuca odaklar; ekipler arasında görünürdür; kısa planlama döngülerine uyar | Anahtar sonuçları görev olarak yazmak kolay; puanlar manipüle edilebilir; bireysel OKR'ler performans değerlendirmesine karışır |
| Dengeli puan kartı | Liderlere bütünlüklü bir görünüm verir; stratejiyi operasyonlara bağlar | Sürdürmesi ağır; perspektifler doldurulacak kutulara dönüşebilir; değişimi yansıtmakta yavaş |
| CSF'ler ve KPI'lar | ITIL uygulamasında tanıdık; çalışan bir hizmeti raporlamaya iyi uyar | Gösteriş KPI'larına kaymak kolay; göstergeler gözden geçirme olmadan bayatlar |
| Çerçeve yok | Çok küçük bir ekip için hafif ve hızlı | Metrikler nedensiz birikir; neyin ölçüleceği üzerine tartışmalar tekrarlanır |
| Birkaç çerçeve birlikte | Her karar kendine uyan aracı alır | Yinelenen tanımlar; hangi sayının yetkili olduğu konusunda karışıklık |

Çerçevenin ağırlığını risklere göre seçin. Küçük bir iç hizmet bir sayfada tutulan bir hedefe, üç soruya ve birkaç metriğe ihtiyaç duyar. Sözleşme kapsamında sunulan bir hizmet, KPI'lara bir hizmet düzeyi anlaşması ayrıntısında ihtiyaç duyabilir (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

## Takımınızla tartışılacak sorular

**1. Raporlanan metriklerimizin her biri hangi hedefe hizmet ediyor ve raporlamayı bıraksak kim fark ederdi?**
Metrikleri bir tahtaya listeleyin ve her birinin yanına hedefi yazın. Hedef eksikse, metriği kimin neden istediğini sorun. Bazıları önceki bir projeden miras kalmış çıkacak ve emekliye ayrılabilir. Kolaylaştırıcı hedefi olmayan bir metriği bir başarısızlık değil, olağan bir keşif olarak ele almalıdır.

**2. Hizmetimiz hakkında yalnızca üç soruyu yanıtlayabilseydik, hangileri olurdu?**
Bu, metriklerden önce soruların sıralanmasını zorlar. Herkesin üç tane yazmasına izin verin, sonra kümeleyin. Kümeyi ekibin şu anda sahip olduğu panoyla karşılaştırın. İkisi arasındaki boşluklar genellikle oturumun en yararlı çıktısıdır.

**3. Anahtar sonuçlarımızdan hangileri kullanıcılar için bir sonucu, hangileri yapmayı planladığımız işi tarif ediyor?**
Her anahtar sonucu yüksek sesle okuyun ve gerçekleştirilse bir kullanıcının fark edip etmeyeceğini sorun. Yanıt hayırsa, onu bir sonuç olarak yeniden yazın ya da plana taşıyın. Kolaylaştırıcı görevlerin sorun olmadığını ama bir birikim listesine ait olduklarını belirtebilir. Bu çeyrek yeniden yazılacak bir anahtar sonuç üzerinde uzlaşarak bitirin.

**4. Dört puan kartı perspektifimiz nerede çelişiyor ve bu bize ne söylüyor?**
Gruptan bir perspektifin iyileşirken bir diğerinin kötüleştiği yakın tarihli bir dönemi, örneğin deneyim düşerken maliyetin düşmesi gibi, aramasını isteyin. Nedeni ve bunu kimsenin önceden görüp görmediğini tartışın. Bu, ölçüleri birlikte okuma alışkanlığını geliştirir. Ölçüsü olmayan herhangi bir perspektifi kaydedin ve bir tane eklemeye ya da bunun kapsam dışı olduğunu açıkça söylemeye karar verin.

**5. Her kritik başarı faktörü için, hangi okuma bize başarısız olduğunu söylerdi?**
İki CSF seçin ve KPI'ı adlandırın, sonra hangi değerin bir konuşmayı tetikleyeceğini sorun. Ekip söyleyemiyorsa, KPI işini yapmıyordur. Hiç renk değiştirmemiş KPI'ları arayın; bunlar genellikle fazla gevşek belirlenmiş bir eşiğe işaret eder. Kolaylaştırıcı KPI'ın manipülasyon vektörünün ne olacağını sormalıdır.

**6. Hangi çerçeve hangi kararın sahibi olmalı ve aynı sayıyı şu anda nerede iki kez tanımlıyoruz?**
Olay çözüm süresi gibi bir metriği göründüğü her rapor boyunca izleyin. Tanımları karşılaştırın. Saatlerdeki ya da hariç tutmalardaki farklar yaygındır ve çoğu zaman ekipler arasındaki tartışmaları açıklar. Bir sahip ve bir tanım üzerinde uzlaşın ve kayıtta kaydedin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri çerçevelerle esas olarak OKR'ler ve, şanslıysa, GQM olarak karşılaşır. Bir ekip, kendi hedeflerini ve anahtar sonuçlarını kullanıcılarının ihtiyaç duyduğuna bağlı yazdığında ve çalışma ölçülerini liderlerin gördüklerinden ayrı tuttuğunda en çok değeri elde eder. Bir ekip, hikâye puanları ya da sürümler gibi çıktıyı ödüllendiren anahtar sonuçlara karşı dikkatli olmalıdır, çünkü çerçevelerin önlemek için tasarlandığı davranışlara davet ederler (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”).

### Hizmet ve operasyon takımları

Operasyon ekipleri çerçevelerle esas olarak ITIL uygulamaları içindeki CSF'ler ve KPI'lar ile müşterilerle üzerinde anlaşılan hizmet düzeyi hedefleri olarak karşılaşır. KPI'ı seçmeden önce CSF'yi sade bir dille tanımlamaktan, zaman ölçüleri için yüzdelikleri raporlamaktan ve hizmet düzeyi göstergeleri ve hedefleri gibi güvenilirlik ölçülerini kullanıcıların deneyiminin yanında tutmaktan yarar sağlarlar (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”). Ayrıca yıllar önce belirlenmiş ve artık hizmetin nasıl kullanıldığıyla ilgisi olmayan KPI'ları tutma cazibesine direnmelidirler.

### Liderlik ve yönetişim

Liderler çerçeveleri seçer, genellikle bir puan kartı ya da OKR'ler isteyerek ve sayılarla ne yaptıkları çerçevelerin nasıl davrandığını belirler. Kaçırılan bir anahtar sonucu cezalandıran bir lider ekiplere kolay olanlar yazmayı öğretir. Ekibin ne öğrendiğini soran bir lider onlara dürüst olanlar yazmayı öğretir. Yönetişim organları bir metrik kaydı, az sayıda raporlanan ölçü ve çerçevenin kendisinin işe yarayıp yaramadığına dair düzenli bir gözden geçirme beklemelidir (bkz. Konu 11.4 “Metrik programları için olgunluk modeli”).

### Müşteriler ve kullanıcılar

Müşteriler ve kullanıcılar çerçeveyi nadiren görür, yalnızca etkilerini görür. İyi tasarlanmış bir çerçeve, istedikleri yönde iyileşen hizmetler ve neyin iyileşmediğine dair dürüst raporlama olarak görünür. Zayıf bir çerçeve, deneyimle uyuşmayan yeşil raporlar olarak görünür. Her hedefe bir kullanıcı bakış açısı ekleyin ve kullanıcı geri bildiriminin puan kartının müşteri perspektifinde operasyonel sayıların yanında yer almasına izin verin (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci, birkaç ürün ekibi ve küçük bir hizmet operasyonları grubuyla bir müşteri destek platformu ve bir self servis portalı işletir. Tüm sayılar örnekleyicidir.

Liderlik bir dengeli puan kartı ve ayrıca üç aylık OKR'ler ister. Bir çeyrek içinde ekibin 31 raporlanan ölçüsü vardır ve hiç kimse yarısının neden var olduğunu söyleyemez. Hizmet sahibi tek bir hedef üzerinde GQM kullanarak yarım günlük bir oturum yapar: “Bir ödemeyi tamamlayamayan müşteriler için yardımın netliğini, müşterinin bakış açısından iyileştir.”

Oturum dört soru üretir. Müşteriler doğru yardım makalesini buluyor mu? Onu okuduktan sonra destekle iletişime geçmeleri gerekiyor mu? İletişime geçtiklerinde bir ödeme sorununun çözülmesi ne kadar sürüyor? Yanıtın net olduğunu hissediyorlar mı? 31 ölçüden dokuzu bu sorulara eşlenir. Üç yenisine ihtiyaç vardır: makale arama başarısı, bir makale görüntülemesinden sonra temas oranı ve çözümden sonra tek soruluk bir anket. Kalan 22'si sahibin onayıyla emekliye ayrılmak üzere işaretlenir.

Çeyreğin OKR'si bir sonuç olarak yazılır. Hedef “Müşteriler ödeme sorunlarını bizi kovalamadan çözer”dir. Üç anahtar sonuç, çözüme kadar geçen medyan ve 90. yüzdelik süre, makale görüntülemelerinden sonra temas oranı ve netlik üzerine anket sonucudur. Puan kartı müşteri perspektifini aynı ölçülere yöneltir; böylece iki değil, bir tanım vardır.

Çeyreğin ortasında bir manipülasyon riski ortaya çıkar. Makale görüntülemelerinden sonra temas oranı keskin biçimde düşer; bu başarı gibi görünür. Bir gözden geçiren 20 oturumdan örnek alır ve bir yeniden tasarımın “bize ulaşın” bağlantısını üç ekran derine taşıdığını bulur. Daha az insan desteğe ulaşmaktadır ve anket daha düşük netlik puanları gösterir. Ekip, arama terk edişini ve anket yorumlarını koruyucu önlem olarak ekler ve bağlantıyı geri yükler.

Çeyreğin sonunda anahtar sonuç puanları 0,6, 0,8 ve 0,5'tir ve ekip bunları olduğu gibi sunar. Liderlik, puanların neden daha yüksek olmadığını değil, ekibin ne öğrendiğini sorar. Karar günlüğüne kaydedilen karar, hedefi ikinci bir çeyrek için korumak, temas oranını ilk ziyarette sorunu çözen müşterilerin payıyla değiştirmek ve altı puan kartı ölçüsünü daha emekliye ayırmaktır.

## Sektör mercekleri

**Girişim (startup).** Bir girişim genellikle bir hedefe, üç soruya ve tek bir sayfada tutulan bir avuç metriğe ihtiyaç duyar. OKR'ler yaygındır ve işi yapacak ekip tarafından yazıldıklarında iyi çalışır. Yatırımcılar ya da müşteriler gerektirene kadar bir puan kartı eklemeye direnin.

**Küçük işletme.** Kaynaklar kıttır; bu yüzden bir çerçeve seçin ve hafifçe kullanın. İşletmenin yanlış yapmayı göze alamayacağı iki ya da üç şey için yazılmış CSF'ler ve KPI'lar çoğu zaman yeterlidir. Ayrıntılı puanlamaya karşı müşterilerden doğrudan geri bildirimi tercih edin.

**Kurumsal.** Genellikle birkaç çerçeve bir arada var olur; bu, tanımların sahipliğini ana zorluk haline getirir. Bir kayıt tutun, hangi çerçevenin hangi sayıyı tuttuğunu belirleyin ve tüm düzenlemenin yıllık bir gözden geçirmesini yapın. Her ekibi kurumsal hedefleri kendi sözcükleriyle yeniden ifade etmeye zorlayan şelalelere dikkat edin.

**Kamu sektörü ve hükümet.** Zorunlu raporlama ve sözleşmeye bağlı hizmet düzeyleri sabit KPI'lar gibi işler. Bunları verili kabul edin ve çevrelerindeki iyileştirme işi için GQM ya da OKR'leri kullanın. Kamusal hesap verebilirlik yanıltıcı bir sayının risklerini artırır; bu yüzden tanımları yayımlayın ve değişiklikler konusunda açık olun (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bir çerçevenin maliyeti çoğunlukla zamandır: ölçüleri tasarlamak için kolaylaştırılmış bir oturum, kısa bir üç aylık gözden geçirme ve bir kaydın bakımı. OKR'ler ya da puan kartları için yazılım mevcuttur, ama küçük ölçekte bir belge ya da elektronik tablo çoğu zaman yeterlidir. Daha büyük maliyet liderliğin dikkatidir, çünkü liderlerin kullanmadığı bir çerçeve, kendi içinde bir raporlamaya dönüşür.

Getiri, daha az ve daha iyi ölçülerden gelir. Her sayının neden var olduğunu söyleyebilen ekipler, kimsenin okumadığı raporları üretmeye daha az zaman harcar, tanımlar üzerine daha az tartışır ve bir ölçünün kararları bilgilendirmeyi bıraktığını daha erken fark eder. Bir rakam alıntılamak yerine kendi temel değerlerinizi ölçün: raporlanan metriklerin sayısı, kayıtlı bir hedefi olanların payı ve yinelenen raporları hazırlamaya harcanan zaman, çerçeveyi benimsemeden önce ve sonra. Yatırım getirisinin daha ayrıntılı bir ele alınışı başka bir yerdedir (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Hedeflerden önce metrikler.** Elinizdeki veriden başlamak, saymanın kolay olanının bir panosunu üretir. Önce hedefi ve soruyu yazın, sonra hangi verinin uyduğuna bakın.
- **Görev listesi olarak OKR'ler.** Etkinlikleri adlandıran anahtar sonuçlar her çeyreği meşgul gösterir ve sonuçlar hakkında hiçbir şey söylemez. Her birini bir kullanıcının fark edeceği kanıt olarak yeniden yazın.
- **Bireysel hedefler olarak OKR'ler ve puan kartları.** Manipülasyona davet eder ve insanlar arasındaki yardımlaşmayı caydırır. Bunları ekip ve hizmet düzeyinde tutun.
- **Boş ya da sembolik perspektifli bir puan kartı.** Her kutuyu bir şeyle doldurmak, bütünü görmekle aynı şey değildir. Her biri için güncel bir değer ve bir karar isteyin.
- **Asla değişmeyen KPI'lar.** Bir gösterge yıllardır yeşilse, eşiği muhtemelen yanlıştır ya da başarısız olabilecek hiçbir şeyi ölçmüyordur. Hangi okumanın bir sorunu göstereceğini sorun, sonra sıfırlayın.
- **Sahipsiz üst üste yığılmış çerçeveler.** Aynı ölçüyü üç farklı biçimde tanımlayan üç çerçeve tartışmalar yaratır. Bir sahip ve tek bir tanım adlandırın.
- **Puanı ödüllendirmek.** Mükemmel bir OKR puanı övgü ya da ücret kazandırıyorsa, ekipler kolay anahtar sonuçlar yazar. Dürüst öğrenmeyi ve iyi soruları ödüllendirin.
- **Tören olarak çerçeve.** Lamine bir poster üreten bir günlük atölye hiçbir şeyi değiştirmez. Çıktıyı kayıtta tutun ve bir takvimle gözden geçirin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Hedefler ve sorular | Metrikler veri var olduğu için seçilir | Bazı ekipler metriklerden önce hedefler yazar | Ortak bir hedef ve soru biçimi; her raporlanan metrik birine kadar izlenir | İzlenebilirlik gözden geçirilir ve boşluklar finanse edilen işe yol açar | Hedefler müşteriler ve tedarikçilerle birlikte yazılır ve koşullar değiştikçe revize edilir |
| Çerçeve kullanımı | Plansız; belirtilmiş çerçeve yok | Ekipler farklı söz dağarcıklarıyla farklı çerçeveler benimser | Yazılı bir düzenleme hangi çerçevenin hangi kararın sahibi olduğunu söyler | Çerçeve sonuçları gözden geçirilir ve kullanılmayan kısımlar bırakılır | Çerçeveler ekipler ve tedarikçiler arasında tek bir tanım kümesiyle hizalanır |
| Göstergeler ve puanlama | KPI'lar bir kez belirlenir ve asla gözden geçirilmez | Bazı KPI'ların sahipleri ve eşikleri vardır | KPI'ların ve anahtar sonuçların sahipleri, tanımları ve koruyucu önlemleri vardır | Puanlar ve göstergeler eğilim olarak izlenir ve her çeyrek manipülasyon açısından gözden geçirilir | Göstergeler rutin olarak emekliye ayrılır ve değiştirilir, değişiklikler sonuçlara bağlıdır |
| Kararlarda kullanım | Raporlar üretilir ve göz ardı edilir | Liderler bir şey ters gittiğinde sayı ister | Gözden geçirmeler sayıların etkilediği kararları kaydeder | Öğrenme soruları standarttır; kaçırılan hedefler suçlama olmadan tartışılır | Ekipler arası iyileştirme planlaması aynı ortak hedefleri ve ölçüleri kullanır |

## Kontrol listesi

- [ ] Her raporlanan metrik yazılı bir hedefe, bir soruya ve adı konmuş bir hedef kitleye kadar izlenir.
- [ ] Bir metrik kaydı, her metriğin hangi çerçevenin sahipliğinde olduğunu ve tek tanımını kaydeder.
- [ ] Hedefler bir amaç, bir konu ve bir bakış açısıyla yazılmıştır.
- [ ] Her anahtar sonuç, bir görevi değil, birinin fark edeceği bir sonucu tarif eder.
- [ ] OKR'ler, puan kartı ölçüleri ve KPI'lar ekiplere ya da hizmetlere aittir, bireylere değil.
- [ ] Her kritik başarı faktörünün en az bir güncel KPI'ı ve başarısızlığı gösterecek belirtilmiş bir okuması vardır.
- [ ] Her puan kartı perspektifinin güncel değeri olan bir ölçüsü vardır.
- [ ] Her metriğin adı konmuş bir manipülasyon vektörü ve koruyucu önlemi vardır.
- [ ] Üç aylık bir gözden geçirme, her hedef, anahtar sonuç ve KPI'ın hâlâ önemli olup olmadığını sorar.
- [ ] Geçen yıl içinde en az bir metrik ya da gösterge, gerekçesi kaydedilerek emekliye ayrılmış ya da yeniden tasarlanmıştır.

## Yapay zekâ istemleri

**Bir hedefi sorulara ve aday metriklere dönüştürün.**

```text
Ekibimiz [ekip adı]; [hedef kitle] için [hizmet ya da teslimat işi türü]
işletiyor. Hedefimiz: [amaç, konu ve bakış açısı olarak ifade edilmiş hedef].
Hedef-Soru-Metrik yaklaşımını kullanarak, bu hedefi karşılayıp karşılamadığımızı
gösterecek üç ila beş soru öner. Her soru için tanımlayabileceğimiz aday
metrikleri, ihtiyaç duyacağımız veri kaynağı türünü, olası manipülasyon
vektörünü ve bir koruyucu önlemi öner. Kıyaslama değerleri ya da istatistik
uydurma. Varsayımlarını ve verdiklerimden belirleyemediğin her şeyi listele.
```

**Taslak OKR'leri gözden geçirin.**

```text
[Dönem] için taslak hedeflerimiz ve anahtar sonuçlarımız burada: [OKR'leri
yapıştır]. Ekibimiz [ekip adı] ve kullanıcılarımız [hedef kitle]. Her anahtar
sonucu gözden geçir ve bana bir sonucu mu yoksa bir etkinliği mi tarif
ettiğini, kullanıcılara yardım etmeden karşılanıp karşılanamayacağını ve bunu
hangi koruyucu önlemin göstereceğini söyle. Gerekli yerlerde, kendi
sağlamamız gereken sayılar için [yer tutucular] kullanarak yeniden yazımlar
öner. Hedef ya da kıyaslama değerleri uydurma. Varsayımlarını ve yanıtlamam
gereken soruları listele.
```

**Kritik başarı faktörlerini KPI'lara eşleyin.**

```text
[Hedef kitle] hizmet veren kurumumuzdaki [uygulama adı] ITIL uygulaması için,
taslağını hazırladığımız kritik başarı faktörleri burada: [CSF'leri listele].
Her biri için [veri kaynakları] kaynaklarından toplanabilecek KPI'lar öner. Her
KPI için, bir zaman ölçüsüyse saatin nerede başlayıp durduğunu, hangi okumanın
faktörün başarısız olduğunu göstereceğini ve nasıl manipüle edilebileceğini
belirt. Kıyaslama değerleri ya da uyum iddiaları belirtme. Varsayımlarını
listele.
```

**Bir puan kartını denge açısından denetleyin.**

```text
Puan kartımızda perspektife göre gruplanmış şu ölçüler var: [ölçüleri
perspektife göre yapıştır]. Biz bir [kurum türü]yüz. İnce kalan perspektifleri,
birbirini yineliyor görünen ölçüleri ve başka bir perspektifteki bir sorunu
gizleyecek biçimde hareket edebilecek ölçüleri belirle. Koruyucu önlemler ve
emekliye ayrılacak ölçüler öner. Rakam ya da kaynak uydurma. Varsayımlarını ve
verdiğim verilerden değerlendiremediğin her şeyi listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir metriği bir çerçeveye yerleştirmeden önce hangi konunun ona sahip olduğunu ve eşleştirilmiş koruyucu önlemi bulmak için kullanın.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): çerçeve temelli bir metrik girdisinin tanımını, manipülasyon vektörünü ve koruyucu önlemini taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Bir çerçeve hangi metriklerin yer hak ettiğine karar verir ve yaygın kural bir hedef ve bir soruyla başlayıp sonra metriği seçmektir.
- Hedef-Soru-Metrik bir ekip için ölçüler tasarlamaya, OKR'ler bir çeyreği odaklamaya, puan kartları bütünlüklü liderlik görünümlerine ve KPI'larla CSF'ler bir ITIL uygulamasını işletmeye uygundur.
- İşe yarayan en hafif çerçeveyi kullanın ve hangisinin hangi sayının sahibi olduğunu söyleyin.
- Her çerçeve manipüle edilebilir; bu yüzden her metriği bir koruyucu önlemle eşleştirin ve kümeyi bir takvimle gözden geçirin.
- Çerçeveleri ekip ve hizmet düzeyinde tutun, asla bireysel hedefler olarak değil.
- Artık kararları bilgilendirmeyen hedefleri, anahtar sonuçları ve göstergeleri emekliye ayırın.

## Kaynaklar ve ileri okuma

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
