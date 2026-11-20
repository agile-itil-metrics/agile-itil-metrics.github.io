# Hizmet metrikleri panosu tasarlamak

**İyi bir pano, adı konmuş bir hedef kitlenin gerçekten sorduğu birkaç soruyu yanıtlar, her sayıyı eğilimi ve bağlamıyla gösterir ve onu kullanacak kişiler tarafından inşa edilir.**

## Genel bakış ve motivasyon

[Pano](https://en.wikipedia.org/wiki/Dashboard_(business)), bir veya daha fazla hedefe ulaşmak için gereken en önemli bilgilerin, bir bakışta izlenebilecek biçimde düzenlendiği görsel bir ekrandır. Uygulamada hizmet kuruluşlarındaki panoların çoğu bu tanıma uymaz. Gerçek bir soruyu yanıtlamak için başlarlar, sonra aracın çizebildiği her şeyi gösterene kadar üst üste eklenerek büyürler. Kimse onlara sahip çıkmaz, kimse sayıların ne anlama geldiğinden emin değildir ve duvardaki ekran göz ardı edilir.

Bir hizmet metrikleri panosunun amacı, insanların karar vermesine yardım etmek ve iyi sohbetler başlatmaktır. Bir takım onu, işinin eskisinden daha uzun beklediğini fark etmek ve nedenini sormak için kullanır. Bir hizmet sahibi onu, bir hizmetin güvenilirlik hedefinin sınırına yaklaştığını görmek için kullanır. Bir lider onu, bir alana yapılan yatırımın umulan sonucu üretip üretmediğini görmek için kullanır. Bunların hiçbirini yapmayan bir ekran süstür; süsün inşası para, göz ardı edilmesi ise dikkat harcatır.

ITIL bunu bir bilgi ve iletişim sorusu olarak çerçeveler: doğru bilgi, doğru kişilere, kullanabilecekleri bir biçimde ve doğru zamanda. Çevik hedefler aynı tasarım ilkelerine işaret eder. Sürekli paydaş katılımı, hedef kitlenin görünümü tasarlamaya yardım etmesi ve sorular değiştikçe yardıma devam etmesi demektir. Sürekli iyileştirme, panonun kendisinin gözden geçirilip budanması demektir. Süregelen evrim, hizmetler ve hedefler değiştiğinde ölçüm kümesinin de değişmesi demektir. Sürdürülebilir tempo, panonun yalnızca aylık değişen sayıları her gün kontrol etme zorlantısı yaratmaması demektir. Motivasyonu yüksek bireyleri destekleyen aynı güven ise takımların önce kendi verilerini görmesi ve anlattığı hikâyeye sahip çıkması demektir.

Üç tasarım hatası yaygındır. Birincisi sayı duvarıdır; yüz kutucuk birbiriyle yarışır ve hiçbiri öne çıkmaz. İkincisi yalnızca hedef gösteren ekrandır; bir rakam, eğilim ve bağlam olmadan kırmızı veya yeşil bir hedefle gösterilir ve bu, anlayışla değil renkle yönetimi davet eder. Üçüncüsü sahipsiz ekrandır; tanımlar kaymıştır, veri eskimiştir ve kime soracağını kimse bilmez. Tasarım çalışması bunlardan kaçınmaktır.

İyi görsel tasarım yardımcı olur. [Veri görselleştirme](https://en.wikipedia.org/wiki/Data_visualization), verinin desenlerin görülüp anlaşılabilmesi için grafiksel olarak gösterilmesi uygulamasıdır. [Sparkline](https://en.wikipedia.org/wiki/Sparkline), eksen veya etiket olmadan bir eğilimi gösteren, kelime boyutunda küçük bir çizgi grafiktir ve geçmişi güncel değerin yanına koyduğu için panoya iyi uyar. [Seyir grafiği](https://en.wikipedia.org/wiki/Run_chart) bir ölçümü zaman içinde bir medyan çizgisiyle gösterir; [kontrol grafiği](https://en.wikipedia.org/wiki/Control_chart) ise olağan değişimi, araştırmaya değer sinyallerden ayıran sınırlar ekler (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). [Grafik süsü](https://en.wikipedia.org/wiki/Chartjunk), ağır ızgara çizgileri, üç boyutlu çubuklar ve süslü göstergeler gibi hiçbir bilgi eklemeyen dekorasyondur ve kaldırılmaya değerdir.

[Gösteriş metriği](https://en.wikipedia.org/wiki/Vanity_metric), iyi görünen ama kimsenin bir şeye karar vermesine yardım etmeyen bir sayıdır; sonuçlar olmadan gösterilen ele alınan bilet sayısı veya bir portala yapılan girişler gibi. [Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi ekranın tamamı için geçerlidir: ekrandaki bir sayı hedef hâline geldiğinde insanlar sayıyı yönetir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Bu konu, ölçüm çerçevelerinden (bkz. Konu 1.7 “Ölçüm çerçeveleri”) ve 1. bölümdeki veri ve yönetişim konularından yararlanır.

## Temel ilkeler

- **Veriyle değil, sorularla başlayın.** Tek bir grafik seçmeden önce hedef kitlenin vermesi gereken kararları ve sorularını yazın.
- **Az sayıda, dengeli ölçüm gösterin.** Akışı, kaliteyi, güvenilirliği, deneyimi ve maliyeti kapsayan küçük bir küme, tek bir ölçümden daha iyi manipülasyona direnir.
- **Her zaman eğilimi ve bağlamı gösterin.** Geçmişi, bir referans değeri ve neyin değiştiğine dair bir notu olmayan bir değeri yorumlamak zordur.
- **Değişkenliğe saygı gösterin.** Her dalgalanmaya tepki vermeyin. Sinyali gürültüden ayırmak için seyir veya kontrol grafikleri kullanın.
- **Her hedef kitleye kendi görünümünü verin.** Takımlar, hizmet sahipleri ve liderlik farklı sorular sorar ve farklı ayrıntıya ihtiyaç duyar.
- **Takımlar önce kendi verilerini görsün.** İşi yapanlar, sayılarını başkasından önce görmeli ve yorumuna sahip çıkmalıdır.
- **Her şeyi tanımlayın ve bir sahip belirleyin.** Her ölçümün yazılı bir tanımı, bir veri kaynağı ve sorulabilecek bir kişisi vardır.
- **Bakımını hafif tutun.** Her ay bir haftalık elle çalışma gerektiren bir pano ölür.

## Metrik tanımları

Aşağıdaki ölçümler bir hizmetle değil, panonun kendisiyle ilgilidir. Bir program takımının ekranlarının sağlıklı olup olmadığını görmesine yardım ederler. Bazıları betimleyicidir ve öyle işaretlenmiştir; çünkü onları hedef gibi ele almak, bu konunun uyardığı çarpıtmaları davet ederdi.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Soru kapsamı | Listelenen hedef kitle sorularından panonun tanımlı bir ölçümle yanıtlayabildiklerinin payı | ölçümü ve tanımı olan sorular / hedef kitlenin listelediği sorular | yüzde | Paydaş oturumlarından soru listesi; metrik kartları | Sürekli iyileştirme; hizmet düzeyi yönetimi | Sürekli paydaş katılımı | Üç aylık |
| Tanım bütünlüğü | Güncel yazılı tanımı, veri kaynağı, sahibi ve bilinen sınırları olan gösterilen ölçümlerin payı | dördüne de sahip ölçümler / gösterilen ölçümler | yüzde | Metrik kartları veya katalog | Bilgi ve teknoloji yönetimi; bilgi yönetimi | Ortak anlayış; görünür iş | Üç aylık |
| Veri güncelliği | Beklenen aralıkta güncellenen gösterilen ölçümlerin payı | zamanında güncellenen ölçümler / gösterilen ölçümler | yüzde | Veri hattı günlükleri; pano üst verisi | İzleme ve olay yönetimi | Hızlı geri bildirim | Haftalık |
| Karar bağlantısı | Yakın tarihli bir gözden geçirmenin kayda geçmiş bir karara, eyleme veya bilinçli olarak hiçbir şey yapmama tercihine yol açtığı, gözden geçirilen ölçümlerin payı | dönemde bağlantılı bir kararı olan ölçümler / gözden geçirilen ölçümler | yüzde | Gözden geçirme notları; iyileştirme kaydı | Sürekli iyileştirme | Düzenli yansıtma | Üç aylık |
| Ekran boyutu | Her hedef kitle görünümündeki ölçüm sayısı | görünüm başına sayı | ölçüm | Pano yapılandırması | Sürekli iyileştirme | Sadelik | Üç aylık |
| Emeklilik oranı | Karar vermeye bilgi sağlamayı bıraktığı için dönemde kaldırılan veya değiştirilen ölçümler | emekliye ayrılan ölçümler / başlangıçta gösterilen ölçümler | yüzde | Panonun değişiklik günlüğü | Sürekli iyileştirme | Süregelen evrim | Yıllık |
| Hedef kitle erişimi (betimleyici) | Hedeflenen takımların veya rollerin dönemde kendi görünümünü açanlarının payı | görüntüleyen ayrık takımlar veya roller / hedeflenen takımlar veya roller | yüzde | Takım veya role göre toplulaştırılmış pano erişim günlükleri | Bilgi ve teknoloji yönetimi | Sürekli paydaş katılımı | Üç aylık |

Her görünümün hedef kitlesini yazılı olarak tanımlayın. Ölçümleri araç başına değil görünüm başına sayın; böylece küçük bir ön sayfası olan büyük bir katalog, başıboş büyüme sanılmaz. Erişim günlükleri takım veya rol düzeyinde toplanır ve raporlanır; bireylerin okuma alışkanlıklarını izlemek için asla kullanılmaz. Hedef kitle erişimi betimleyicidir ve karar bağlantısıyla birlikte okunur; çünkü çok görüntülenen ama hiçbir kararı değiştirmeyen bir ekranın değeri azdır. Karar bağlantısı, “baktık ve hiçbir şey yapmamayı seçtik” ifadesini kayda geçmiş bir karar olarak kabul eder; böylece ölçüm insanları eylem uydurmaya itmez.

## Öneriler

### Hedef kitleden başlayın

**1. Hedef kitleleri ve sorularını listeleyin.** Tipik hedef kitleler işi yapan teslimat veya destek takımı, bir hizmetten sorumlu olan hizmet sahibi ve finanse edip yön veren liderlerdir. Her biriyle bir saat oturun ve neyi sorduklarını, hangi kararları verdiklerini ve neyi bilmeyi diledikleri yazın. İyi bir soru “İşimiz eskisinden daha uzun mu bekliyor?” veya “Hata bütçemizi tüketmeye yakın mıyız?” gibi duyulur. “Bana olay panosunu gösterin” gibi duyulmaz.

**2. Her soruyu bir ölçüme ve bir eşlikçiye eşleyin.** Her soru için bu kitabın önceki bölümlerinden tek en iyi ölçümü ve bariz çarpıtmaya karşı koruyan bir eşlikçiyi seçin. Bir hız ölçümü bir kalite ölçümüyle eşleşir. Bir hacim ölçümü bir sonuçla eşleşir. Bir deneyim ölçümü bir davranış ölçümüyle eşleşir. Bu, bütün kitap boyunca süren eşleştirme mantığıdır (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”).

**3. Hedef kitleyi tasarıma dahil edin.** Bir şey inşa etmeden önce eskizleri gösterin. Neyin kafa karıştırıcı olduğunu, neyin eksik olduğunu ve her sayıyla ne yapacaklarını sorun. Yanıtları kümeyi küçültecek ve yapımına yardım ettikleri şeye güveneceklerdir.

### Küçük ve dengeli bir küme seçin

**4. Her görünümü bir avuç ölçümle sınırlayın.** Hedef kitle görünümü başına yaklaşık beş ila dokuz ölçüm makul bir aralıktır; yine de doğru sayı sorulara bağlıdır. Sınır seçim yapmaya zorlar. Ayrıntıyı bir tık ötede, destekleyici bir görünümde tutun ve ön sayfayı, daha fazla bakıp bakmamaya karar vermek için gerekenle sınırlayın.

**5. Kümeyi boyutlar arasında dengeleyin.** [Dengeli puan kartı](https://en.wikipedia.org/wiki/Balanced_scorecard), bir kuruma yalnızca mali sonuçlarla değil, birkaç bakış açısından bakan stratejik bir yönetim aracıdır. Fikir iyi aktarılır: bir hizmet için akışı ve hızı, kaliteyi ve kararlılığı, güvenilirliği, deneyimi ve maliyeti dengeleyin. Yalnızca hız içeren bir küme kestirmeleri, yalnızca kalite içeren bir küme gecikmeyi teşvik eder. İlgili [anahtar performans göstergesi](https://en.wikipedia.org/wiki/Key_performance_indicator) fikri, gösterge göstermesi kolay olduğu için değil, bir hedef hakkında ortaya koyduğu için seçildiğinde yararlıdır.

**6. Göstergeleri tanılardan ayırın.** Birkaç ana gösterge işlerin sağlıklı olup olmadığını söyler. Tanı ölçümleri ise sağlıklı olmadıklarında nedenini bulmanıza yardım eder. Tanıları bir adım aşağıda tutun; böylece ön sayfa bir duvara dönüşmez.

### Bağlamı ve eğilimi gösterin

**7. Her değerle birlikte geçmişi gösterin.** Her güncel değerin yanına bir sparkline veya küçük bir seyir grafiği koyun. Aylık zirveler veya üç aylık bir döngü gibi mevsimsel desenleri görmeye yetecek kadar geçmiş gösterin. Değişiklikleri açıklayan olayları işaretleyin: bir yayın, bir politika değişikliği, bir kesinti, bir takım yeniden yapılanması. Çizginin yanındaki bir not yüz soruyu önler.

**8. Zaman ölçümleri için dağılımları ve aralıkları kullanın.** Ortalama, kullanıcıların hissettiği uzun kuyruğu gizler. Medyanı ve 85. veya 95. gibi yüksek bir yüzdelik dilimi gösterin, yayılımı gösterin. Örneklem küçükse örneklem boyutunu belirtin ve küçük bir örneklemin ne kadar belirsiz olduğunu gösterin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı” ve Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”).

**9. Hedeflere ve renklere dikkat edin.** Hedef çizgisini, hizmet düzeyi hedefi gibi gerçek bir dayanağı olduğunda kullanın ve bir hüküm olarak değil, bir referans olarak gösterin. Tek bir veri noktasında renk değiştiren kırmızı, sarı ve yeşil kutucuklardan kaçının. Durum renkleri kullanırsanız bunları normal değişkenliği hesaba katan bir kurala dayandırın ve kuralı sayfada açıklayın.

### Güvenilir ve sürdürülebilir kılın

**10. Her ölçüme bir tanım ve bir veri notu ekleyin.** Her sayıdan bir tık ötede tanımına, formülüne, veri kaynağına, sahibine, yenilenme zamanına ve bilinen boşluklarına ulaşılmalıdır. Kısa bir “Bunu nasıl okumalı” notu ayrılan yere değer. Sınırları görebilen bir okuyucunun sayıyı yanlış kullanma olasılığı daha düşüktür ve onları görebilen bir takım onlara itiraz edebilir (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği” ve Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

**11. Veriyi otomatikleştirin ve ekrana sahip çıkın.** Veriyi kayıt sistemlerinden bir takvimle çekin ve son güncellemenin zamanını gösterin. Elle hazırlanan elektronik tablolar bir sohbeti başlatabilir, ama kırılgandırlar. Her pano için tanımlarından, güncelliğinden ve emekliye ayrılmasından sorumlu bir sahip belirleyin. Panoyu hedef kitlesiyle sabit bir ritimde gözden geçirin ve budayın.

**12. Çıkışı baştan planlayın.** Her ölçümün, var olmasının belirtilmiş bir nedeni ve emekliye ayrılacağı bir koşulu olmalıdır; örneğin “bilinen hataların birikimi üç ay boyunca bir eşiğin altına düştüğünde” veya “takım artık bunu gözden geçirmesinde kullanmadığında”. Ölçümleri emekliye ayırmak kümeyi küçük tutar ve programın işe hizmet ettiğinin işaretidir.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Soru kapsamı | Mevcut ölçümlerin zaten yanıtladığı dar sorular yazmak; zor soruları dışarıda bırakmak | Program takımı dışından paydaşları dahil edin; yanıtlanmamış soruları açıkça gözden geçirin |
| Tanım bütünlüğü | Alanları kalıp metinle doldurmak; kimsenin okumadığı tanımlar | Tanımların anlaşılırlığını takım dışından biriyle örnekleyin; tanımın gerçek hesaplamayla uyuştuğunu kontrol edin |
| Veri güncelliği | Eskimiş bir kaynağı değişmemiş veriyle yenilemek; kaynak beslemesi başarısız olduğunda bir yenilemeyi başarı saymak | Yenileme zamanlarının yanı sıra kaynak zaman damgalarını da kontrol edin; kayıt sayıları ve beklenen hacimle karşılaştırın |
| Karar bağlantısı | Alanı doldurmak için kararları sonradan kaydetmek; boş bırakmamak için eylem uydurmak | “Hiçbir şey yapmamayı seçtik” ifadesini kayda geçmiş karar olarak kabul edin; bağlantıları gerçek bir önceki tartışma için örnekleyin |
| Ekran boyutu | Ölçümleri ikincil sekmelerde gizlemek; bir görünümü birçok görünüme bölmek | Ölçümleri tüm sekmelerde hedef kitle başına sayın; hedef kitleye gerçekte kaç sayı kullandığını sorun |
| Emeklilik oranı | Kötü sonuç gösteren rahatsız edici ölçümleri emekliye ayırmak | Emekliye ayrılan listeyi olumsuz eğilimli ölçümler açısından gözden geçirin; belirtilmiş bir neden isteyin |
| Hedef kitle erişimi (betimleyici) | Sayıyı yükseltmek için sayfayı açmak; toplantılarda zorunlu görüntüleme | Betimleyici tutun; karar bağlantısıyla birlikte okuyun; bireysel görüntülemeleri raporlamayın |

Sağlıklı bir okuma, hedef kitlenin açıklayabildiği kısa bir ön sayfa, hesaplamalarla uyuşan tanımlar, zamanında gelen veri, bazen eyleme ve bazen beklemeye yönelik bilinçli bir tercihe yol açan gözden geçirmeler ve bir zamanlar popüler olmuş bazı ölçümleri de içeren bir emekliye ayrılmış ölçümler listesi gösterir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Herkes için tek bir kurumsal pano | Tek doğruluk kaynağı; tutarlı tanımlar | Hiçbir hedef kitle için yeterince özel değil; bir duvara dönüşür |
| Ortak veri üzerinde hedef kitle başına ayrı görünümler | Her hedef kitleye uyar; tutarlı tanımlar | Ortak tanımların yönetişimini gerektirir |
| Takımların kendi inşa ettiği panolar | Yerel sorulara uyar; yüksek sahiplenme | Tanımlar kayar; yukarı toplamak zordur |
| Merkezî takım tüm panoları inşa eder | Tutarlılık; tasarım becerisi | Yavaş; takım sorularına uymayabilir |
| Canlı, gerçek zamanlı ekran | Operasyon için hızlı sinyaller | Gürültüye tepki vermeyi teşvik eder; maliyetli |
| Dönemsel gözden geçirme paketi | Sakin, bağlamla tartışılır | Gecikme; atlanabilir |
| Hedefler ve durum renkleri | Hızlı tarama | Renkle yönetimi davet eder; değişkenliği gizler |
| Yalnızca eğilim ve dağılım | Değişkenlik konusunda dürüst | Yeni gelenlerin taraması daha zor |

Düzyazıyla yanıt şudur: tanımları kurum genelinde paylaşın, her hedef kitlenin kendi küçük görünümü olsun, canlı ekranları yalnızca operasyonel yanıtın gerektirdiği yerlerde kullanın ve iyileştirme kararları için sakin bir dönemsel gözden geçirme kullanın.

## Takımınızla tartışılacak sorular

**1. Geçen çeyrekte, ekrandaki bir sayının bilgi verdiği hangi kararları aldık?**
Bunları listeleyin. Her biri için sayıyı ve nereden geldiğini belirtin. Mevcut ekranlarımızdaki hangi sayıların bu listede hiç görünmediğine dikkat edin. Kolaylaştırıcı, bunların yerlerini hak edip etmediklerini sormalıdır.

**2. Kendi takımımıza yalnızca beş sayı gösterebilseydik hangileri olurdu?**
Her kişi özel olarak bir liste yazsın, sonra karşılaştırın. Farklılıkları ve her sayının birinin neye karar vermesine yardım edeceğini tartışın. Deneme amaçlı bir küme ve onu gözden geçirmek için bir tarih üzerinde anlaşın.

**3. Panomuzdaki hangi sayıyı en çok kaldırmak isterdik ve neden?**
Tartışmaya yol açan, yanıltan veya hiç okunmayan sayıları dinleyin. Sorunun ölçümde mi yoksa sunumunda mı olduğunu kontrol edin. Her birini emekliye ayırmak, yeniden tanımlamak veya korumak konusunda anlaşın.

**4. Yeni bir meslektaş panomuzu yardımsız nasıl okurdu?**
Yeni gelenden ne gördüğünü açıklamasını isteyin. Neyi yanlış okuduğunu ve nedenini not edin. Tökezlediği yerlere tanımlar, bağlam veya notlar ekleyin.

**5. İşimizde bir sayının göstermediği ne değişti?**
Yayınlar, kadro, politika veya müşterilerdeki bir değişiklik bir eğilimi açıklayabilir. Bir sonraki okuyucunun hikâyeye sahip olması için olayların ekranda nasıl kaydedileceği konusunda anlaşın.

**6. Bizim dışımızda verilerimize kim bakıyor ve onlarla ne yapıyor?**
Sayılarımızın diğer hedef kitlelere giden yolunu izleyin. Onlara yükledikleri yorumun bizim onaylayacağımız bir yorum olduğunu kontrol edin. Neyi paylaşacağımız ve yanında hangi bağlamın gideceği konusunda anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Takımlar işi yapar ve kendi verilerinin ilk hedef kitlesi olmalıdır. Ölçümlerin seçimine yardım etmeli, ekranı kendi gözden geçirme sohbetlerini tetiklemek için kullanmalı ve olaylarla not düşmelidir. Bir takım görünümü “Nasıl gidiyoruz ve ne denemeliyiz?” sorusunu yanıtlamalıdır, “Yan taraftaki takımla nasıl karşılaştırılıyoruz?” sorusunu değil.

### Hizmet ve operasyon takımları

Hizmet sahipleri, bir hizmetin zaman içindeki performansından sorumludur. Görünümleri, tek bir hizmet için güvenilirliği, olayları, değişiklikleri, maliyeti ve deneyimi; eğilimleri ve iyileştirme eylemlerinin durumuyla birlikte bir araya getirir. Bunu, nereye yatırım yapacaklarına karar vermek ve müşterilerle ve liderlerle yapacakları sohbetlere hazırlanmak için kullanmalıdırlar.

### Liderlik ve yönetişim

Liderler, hizmetler genelinde sonuçların ve risklerin, yorumlamaya yetecek bağlamla birlikte kısa bir görünümüne ihtiyaç duyar. Sıralamalar yerine eğilimleri ve dağılımları istemeli, başkalarını emekliye ayırmadan yeni ölçüm istememeli ve ekranı sorularını bireylere değil sistemlere ve kararlara yöneltmek için kullanmalıdır.

### Müşteriler ve kullanıcılar

Müşteriler ve kullanıcılar hizmet bilgisini durum sayfaları, raporlar ve kendi bakış açılarını yansıtan deneyim ölçümleri aracılığıyla görür (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”). Görünümleri dürüst, sade ve takımların gördüğüyle tutarlı olmalıdır. Sayıların neyi göstermekte başarısız olduğunu kuruma söyleyebilmelidirler.

## Uygulamada: çevik bir ITIL örneği

Barındırılan bir ürünü ve bir müşteri destek grubu olan bir yazılım şirketinde üç pano birikmiştir: 62 kutucuklu bir operasyon ekranı, her hafta e-postayla gönderilen bir destek raporu ve tek bir analistin sürdürdüğü bir teslimat sayfası. Liderlik takımı “her şeyi görmek” için tek bir pano ister. Aşağıdaki rakamlar açıklayıcı örnektir.

Hizmet yönetimi başkanı sorularla başlamayı önerir. Üç hedef kitlenin her biriyle bir saatlik oturum yapar: destek takımı, platform takımı ve liderlik grubu. Destek takımı, müşterilerin ilk yararlı yanıt için eskisinden daha uzun bekleyip beklemediğini ve aynı sorunların geri gelip gelmediğini sorar. Platform takımı, hata bütçesini tüketmeye yakın olup olmadığını ve değişiklik sürecinin onu yavaşlatıp yavaşlatmadığını ya da koruyup korumadığını sorar. Liderlik, müşterilerin değer alıp almadığını ve yeni bir self servis portalına yapılan yatırımın karşılığını verip vermediğini sorar. Birlikte 14 soru listelerler. Mevcut panolar bunlardan altısını tanımlı bir ölçümle yanıtlayabilmektedir; dolayısıyla soru kapsamı yüzde 43'tür.

Grup, ortak tanımlar üzerinde, her biri en fazla yedi ölçümlü üç görünüm tasarlar. Destek görünümü, yararlı bir ilk yanıt için medyan ve 85. yüzdelik süreyi, yedi gün içinde geri dönen iletişimlerin payını, örneklem boyutuyla birlikte bir memnuniyet eğilimini ve geri dönen iletişimlerle eşleştirilmiş self servis çözümünü gösterir. Platform görünümü, hata bütçesi tüketim çizgisiyle birlikte hedefe karşı kullanılabilirliği, değişiklik başarısızlık oranıyla birlikte değişiklik teslim süresini ve plansız işe harcanan zamanın payını gösterir. Liderlik görünümü hizmet düzeyi sonuçlarını, müşteri deneyimini, aktif müşteri başına maliyeti ve finanse edilmiş üç iyileştirme eyleminin durumunu gösterir. Her değerin bir sparkline'ı, tanım kartına bir bağlantısı ve olaylar için bir not alanı vardır. Renkler yalnızca hata bütçesinde, sayfada açıklanan bir kurala dayanarak görünür.

İlk gözden geçirme sürprizler getirir. Destek takımı, medyan yanıt süresinin iyileştiğini ama 85. yüzdeliğin kötüleştiğini fark eder; çünkü kolay iletişimler hızla yanıtlanmakta, zor olanlar bekletilmektedir. Triyaj kurallarına bakmaya karar verir ve kararı kaydeder. Platform takımı, değişiklik teslim süresindeki yakın tarihli artışın yeni bir onay adımıyla çakıştığını görür ve soruyu değişiklik grubuna götürür. Liderlik, portal kullanımının artarken geri dönen iletişimlerin sabit kaldığını fark eder ve destek takımına portalın neyi yanıtlamakta başarısız olduğunu sorar. İki çeyrek sonra soru kapsamı yüzde 79'dur, gösterilen tüm ölçümlerin tanımları eksiksizdir ve eski 62 kutucuklu ekran emekliye ayrılmıştır. Üç ölçüm kimse kullanmadığı için bırakılmış, biri eklenmiştir. Bir direktör yeşil-sarı-kırmızı bir özet satırı ister. Hizmet yönetimi başkanı, tek bir kötü haftanın satırı kırmızıya çevirdiği ve nedensiz bir soru yağmuruna yol açtığı bir deneme gösterir. Bunun yerine her ay neyin değiştiğine dair kısa bir yazılı not konusunda anlaşırlar ve kararı kaydederler.

## Sektör mercekleri

**Girişim (startup).** Çok küçük tutun: bütün şirketin okuyabileceği, teslimat hızını, kararlılığı, müşteri deneyimini ve maliyeti yansıtan belki beş sayılık tek bir sayfa. Mevcut araçların sunduğunu kullanın. Ürün veya müşteriler değiştiğinde sayfayı yeniden ele alın ve sorular netleşmeden bir veri platformu kurmaya direnin.

**Küçük işletme.** Aylık güncellenen ortak bir belge veya basit bir elektronik tablo grafiği yeterli olabilir. Sahibin ve çalışanların gerçekten kullandığı bir avuç ölçüm seçin, her birinin ne anlama geldiğini yazın ve düzenli bir toplantıda tartışın. Risk, çok az araç değildir. Risk, kimsenin güvenmediği veya üzerinde harekete geçmediği ölçümlerdir.

**Büyük kurum.** Ölçek, ortak tanımlar, yönetilen bir ölçüm kataloğu ve takımlar, hizmetler, portföyler ve yöneticiler için katmanlı görünümler gerektirir. Her şeyi tek bir sayıda toplama cazibesi güçlü ve zararlıdır. Takım görünümlerini takımların sahipliğinde tutun, ortak tanımlar yayımlayın ve liderlik görünümündeki her yeni ölçüm için belirtilmiş bir amaç isteyin (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

**Devlet ve kamu sektörü.** Raporlama yükümlülükleri ve kamusal hesap verebilirlik çoğu zaman belirli ölçümleri dayatır. Zorunlu ölçümleri görünür tutun ve takımların iyileştirme için kullandıklarından açıkça ayırın; rakamların neyi gösterip neyi gösteremeyeceğini kamuya ve denetim organlarına açıklayın. Kurum dışında paylaşılan her ekran için sade dil ve erişilebilirlik önemlidir (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bir pano programının maliyetleri arasında hedef kitlelerle görüşme, tasarım ve inşa, veri bağlama ve temizleme, tanım yazma, kullanıcı eğitimi ve desteği ve ekranın zaman içinde bakımı için harcanan zaman bulunur. En büyük gizli maliyet, işe yaramayan sayıları okuyan kişilerin zamanı ve kimin sayısının doğru olduğunu tartışarak geçirilen toplantılardır. Ucuz ve hızlı yapımlar yaygındır ve gerçek maliyet daha sonra bakımda ve güvensizlikte ortaya çıkar.

Getiriler arasında eğilimlerin daha hızlı fark edilmesi, tanımlar üzerine daha az tartışma, daha iyi hedeflenmiş iyileştirme çalışması ve tek bir yönetilen kaynak birkaç elle hazırlanan raporun yerini aldığında azalan raporlama emeği bulunur. İş gerekçesini kendi verilerinizden kurun: elle hazırlanan raporlara harcanan saatler öncesinde ve sonrasında, aynı rakamın rakip sürümlerinin sayısı ve ekranın bilgi verdiği kararlar. Analitiğin değerine ilişkin yayımlanmış rakamları, izlenebilir bir kaynak ve sizin bağlamınızla ilgisi olmadan aktarmaktan kaçının. Güvenilir iddia mütevazıdır: daha az ama daha iyi ölçüm, güvenilen ve kullanılan (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Kutucuk duvarı.** Her sayı dikkat için yarışır. Hedef kitle başına bir avuca indirin ve ayrıntıyı bir adım aşağıya koyun.
- **Renkle yönetim.** Durum renkleri gürültüde değişir ve tepkilere yol açar. Eğilimleri gösterin ve değişkenliğe saygı gösteren kurallar kullanın.
- **Tanım yok.** İki takım aynı etiketi farklı okur. Her ölçüme bir tanım ve bir sahip ekleyin.
- **Gözetim olarak panolar.** Bireysel düzeydeki görünümler güveni aşındırır ve veriyi çarpıtır. Takımları, hizmetleri ve sistemleri gösterin.
- **Her şeyi özetleyen tek bir sayı.** Açığa çıkarmak için tasarlandığı ödünleşimleri gizler. Dengeli birkaç ölçüm gösterin.
- **Bir kez inşa et, bir daha gözden geçirme.** Ekran eskir. Hedef kitleyle bir ritimle gözden geçirin ve ölçümleri emekliye ayırın.
- **Gösteriş ekranları.** Sonuç olmadan büyük etkinlik sayıları. Her hacmi bir sonuç ölçümüyle eşleştirin.
- **Kimsenin istemediği rapor.** Sorulan sorulardan değil, mevcut veriden inşa edilmiştir. Sorularla başlayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Hedef kitle ve sorular | Mevcut veriden inşa edilir | Bazı takımlar ihtiyaç duyduklarını sorar | Hedef kitleler ve sorular yazılıdır; hedef kitle başına küçük görünümler | Soru kapsamı ve karar bağlantısı gözden geçirilir ve üzerlerinde harekete geçilir | Hedef kitleler, müşteriler ve tedarikçiler dahil görünümleri birlikte tasarlar ve sorular hizmetlerle birlikte evrilir |
| Tasarım ve bağlam | Geçmişi olmayan çok sayıda kutucuk | Bazı eğilimler ve tanımlar | Görünüm başına az sayıda ölçüm; her ölçümde eğilim, dağılım ve tanım | Değişkenliğe duyarlı ekranlar; her ana gösterge için eşlikçi ölçümler | Görünümler değişen hedeflere uyum sağlar; ortak desenler takımlar arasında yeniden kullanılır |
| Veri ve bakım | Elle, eski, sahipsiz | Bir miktar otomasyon; gayriresmî sahipler | Otomatik beslemeler, adı konmuş sahipler, güncellik gösterilir | Güncellik ve tanım bütünlüğü yönetilir; emeklilik rutindir | Ortak tanımlarla birleşik sahiplik; emeklilik ve iyileştirme kullanıcılar tarafından yönlendirilir |

## Kontrol listesi

- [ ] Her hedef kitlenin soruları yazılıdır ve her görünüm bunlarla eşleşir.
- [ ] Her görünümde yaklaşık dokuzu aşmayan sayıda ölçüm vardır; ayrıntı bir adım aşağıdadır.
- [ ] Küme akış, kalite, güvenilirlik, deneyim ve maliyet arasında dengelidir.
- [ ] Her değer eğilimi ve bağlamı gösterir; zaman ölçümleri yüksek bir yüzdelik dilim gösterir.
- [ ] Her ölçümün tanımı, kaynağı, sahibi ve yenilenme zamanı bir tık ötededir.
- [ ] Hedefler referans olarak gösterilir ve durum renkleri belirtilmiş bir kuralı izler.
- [ ] Takımlar önce kendi verilerini görür ve yorumuna sahip çıkar.
- [ ] Hiçbir görünüm bireyleri sıralamaz veya izlemez.
- [ ] Panonun adı konmuş bir sahibi, bir gözden geçirme ritmi ve ölçümleri emekliye ayırma kuralı vardır.
- [ ] Veri otomatik olarak çekilir ve son güncelleme zamanı görünürdür.

## Yapay zekâ istemleri

**Soruları bir görünüme dönüştürün.**

```text
Şunlar [hedef kitle] tarafından sorulan sorulardır: [liste]. Her biri için bir
birincil ölçüm ve en olası çarpıtmasına karşı koruyan bir eşlikçi ölçüm önerin.
Bunları en fazla yedi ölçümlük bir görünümde gruplayın ve her biri için tanımı,
önerilen bir grafik türünü ve hangi bağlama ihtiyaç duyduğunu belirtin. Veri veya
kıyaslama değeri uydurmayın. Varsayımlarınızı ve görünümün yanıtlayamadığı soruları
listeleyin.
```

**Bir panoyu açıklık açısından gözden geçirin.**

```text
Şu, her kutucuğu, etiketini ve tanımını listeleyen panomuzun bir açıklamasıdır:
[yapıştırın]. İlk kez okuyan yeni bir meslektaş gibi davranın. Hangi etiketlerin
belirsiz olduğunu, hangi sayılarda bağlam veya eğilim eksik olduğunu, hangi
kutucukların renkle yönetimi davet edebileceğini ve hangi kutucukların emekliye
ayrılabileceğini listeleyin. Veriyi yeniden yazmayın. Varsayımlarınızı listeleyin.
```

**Bir metrik kartı taslağı hazırlayın.**

```text
[ölçüm] için bir metrik kartı taslağı hazırlayın. Sade bir tanım, formül, birim,
veri kaynağı, sahip, yenilenme aralığı, bilinen boşluklar, en olası manipülasyon
yolu, eşleştirilmiş koruma önlemi ve bilgi vermesi gereken kararı ekleyin. 200
kelimenin altında tutun. Rakam uydurmayın. Emin olmadığınız her şeyi işaretleyin.
```

**Bir pano gözden geçirmesi planlayın.**

```text
[takım] panomuzun hedef kitleyle 45 dakikalık üç aylık bir gözden geçirmesini
planlayın. Ölçümlerin kararlar için kullanıldığını nasıl kontrol edeceğimizi,
hangilerinin emekliye ayrılacağına nasıl karar vereceğimizi, eğilimleri açıklayan
olayları nasıl kaydedeceğimizi ve insanları sıralamaktan nasıl kaçınacağımızı
ekleyin. Kolaylaştırıcının sorması gereken soruları ve kaydedilecek çıktıyı listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): önerilen bir görünümdeki her ölçüm için eşleştirilmiş koruma önlemini bulmak amacıyla kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir pano belirtiminin her ölçüm için tanımları, sahipleri ve manipülasyon yollarını içerdiğini denetlemek amacıyla kullanın.

## Temel çıkarımlar

- Bir hedef kitlenin sorduğu sorulardan başlayın ve her hedef kitleye kendi küçük görünümünü verin.
- Kümeyi dengeleyin ve her ana göstergeyi çarpıtmaya karşı koruyan bir eşlikçiyle eşleştirin.
- Her değerle birlikte eğilimi, dağılımı ve bağlamı gösterin ve normal değişkenliğe saygı gösterin.
- Her ölçüme bir tanım, kaynak, sahip ve yenilenme zamanı ekleyin.
- Takımların verilerini önce görmesine ve sahip çıkmasına izin verin ve bireyleri asla göstermeyin.
- Panoyu hedef kitlesiyle gözden geçirin ve kararlara bilgi sağlamayı bırakan ölçümleri emekliye ayırın.

## Kaynaklar ve ileri okuma

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Data visualization](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
