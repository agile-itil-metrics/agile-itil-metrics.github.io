# Hizmet metrikleri için istatistik okuryazarlığı

**Bildirim ve akış verileri çarpık, topaklı ve çoğu zaman inceldir; bu yüzden ortalamalar yerine medyanları ve yüksek yüzdelikleri raporlayın, her oranın arkasında kaç öğe durduğunu söyleyin ve kimse tepki vermeden önce olağan değişkenliği gerçek değişimden ayırın.**

## Genel bakış ve motivasyon

Çoğu hizmet metriği panoda tek bir sayı olarak gelir: ortalama çözüm süresi, hedef içinde çözülen olayların yüzdesi, bu hafta kapatılan bildirimler. Tek bir sayı kesin hissettirir. Genellikle dağınık bir olaylar topluluğunun sıkıştırılmış bir özetidir ve sıkıştırma, okuyucunun ne göreceğini belirler. Bu kitabın amaçları bakımından istatistik okuryazarlığı, özeti dürüst tutan küçük bir alışkanlıklar kümesidir: verinin biçimine uyan bir özet seçmek, arkasında ne kadar veri olduğunu bilmek ve gerçek bir değişimi gürültüden ayırmak.

Hizmet verisinin biçimi ilk sorundur. Çözüm süresi, çevrim süresi ve bekleme süresi gibi zaman ölçüleri sıfırla sınırlıdır ve sağda uzun bir kuyruğa sahiptir. Çoğu öğe hızla biter ve birkaçı çok uzun sürer. Bu türden veri [çarpıktır](https://en.wikipedia.org/wiki/Skewness) ve aritmetik ortalama kuyruğa doğru çekilir; bu yüzden sıkışmış tek bir bildirim, yüz rutin bildirimden daha fazla ortalamayı oynatabilir. Öğeler sıralandığında ortadaki değer olan [medyan](https://en.wikipedia.org/wiki/Median) çok daha az etkilenir. Bir [yüzdelik](https://en.wikipedia.org/wiki/Percentile) bunu genelleştirir: 85. yüzdelik, öğelerin yüzde 85'inin içinde bittiği değerdir. Bu tür süreler çoğu zaman, değerin logaritmasının simetrik olduğu bir [log-normal dağılımla](https://en.wikipedia.org/wiki/Log-normal_distribution) modellenir. Ders şudur: çarpık veri için “tipik” ile “ortalama” farklıdır.

Örneklem büyüklüğü ikinci sorundur. Bir çeyrekte 12 öncelik 1 olayını çözen ve “yüzde 83 hedef içinde” raporlayan bir ekip, 12'den 10'unu tarif etmektedir. Bir kaçırma daha rakamı sekiz puan oynatırdı. Dürüst ifade sayıyı ve çoğu zaman bir aralığı içerir. [Güven aralığı](https://en.wikipedia.org/wiki/Confidence_interval), gerçek değerin gözlenen değerden ne kadar uzakta olabileceğini ifade eden, veriden hesaplanan bir aralıktır. Aralıklar küçük örneklemler için geniş, büyük örneklemler için dardır; bu, 12 olaylı bir çeyrek için doğru mesajdır.

Değişkenlik üçüncü sorundur. Her süreç, hiçbir şey değişmeden haftadan haftaya salınan sayılar üretir. Walter Shewhart, 1920'lerde üretim kalitesi üzerinde çalışırken bu rutin salınımı araştırmayı hak eden sinyallerden ayırdı ve bize [kontrol grafiğini](https://en.wikipedia.org/wiki/Control_chart) verdi. Bu tür grafikleri bir sürece uygulamaya [istatistiksel süreç kontrolü](https://en.wikipedia.org/wiki/Statistical_process_control) denir. Bu son hatanın bir kısmı [ortalamaya dönüş (regression toward the mean)](https://en.wikipedia.org/wiki/Regression_toward_the_mean): uç bir değeri daha az uç bir değer izleme eğilimindedir; bu yüzden korkunç bir haftadan sonraki hafta, kimse bir şey yapmış olsun ya da olmasın, bir toparlanma gibi görünür.

Kanban Kılavuzu'nun çevrim süresi yüzdeliklerini ve iş öğesi yaşını kullanması gibi çevik akış uygulaması, dağılımları ve olasılık olarak ifade edilmiş tahminleri zaten ister (bkz. Konu 2.1 “Akış ölçümleri”). ITIL 4'te ölçüm ve raporlama uygulaması ile sürekli iyileştirme uygulaması, göründükleri anlama gelen ölçülere dayanır ve hizmet düzeyi yönetimi gerçekçi değişkenliğe karşı belirlenmiş hedeflere dayanır. İstatistik okuryazarlığı ikisinin altındaki ortak katmandır. Ayrıca Konu 1.2'deki “Goodhart yasası ve metriklerin psikolojisi” koruyucu önlemini de destekler: tüm dağılımı gösteren bir ekibin manipüle edilmiş bir ortalamayı saklayacak daha az yeri vardır.

Ortak neden değişkenliği bir sürecin içine yerleşiktir ve özel neden değişkenliği, değişen ya da ters giden belirli bir şeyden gelir. Hizmet düzeyi anlaşması (SLA) bir müşteriye verilen belgelenmiş bir taahhüttür ve hizmet düzeyi hedefi (SLO) bir ölçü için bir hedeftir.

## Temel ilkeler

- **Özeti biçime uydurun.** Süreler için medyanları ve yüzdelikleri kullanın ve karar önemli olduğunda tüm dağılımı gösterin. Ortalamayı yaklaşık simetrik veri için ya da maliyet gibi toplamlar için ayırın.
- **Her oran sayısını taşır.** Pay ve paydası olmayan bir yüzde, kanıtı eklenmemiş bir iddiadır. Belirtilmiş bir asgari sayının altında, oran yerine ham öğeleri gösterin.
- **Olağan değişkenlik haber değildir.** Tepki vermeden önce bir ölçünün normal aralığını bilin. Her harekete değil, sinyallere yanıt verin.
- **Belirsizlik yanıtın bir parçasıdır.** Tahminleri olasılık olarak (“öğelerin yüzde 85'i 9 gün içinde biter”) ve kestirimleri aralık olarak ifade edin ve sahte kesinliğe direnin.
- **Dağılımları işin sahibi olan ekibe gösterin.** Ham öğeler ve histogramlar olağandışı durumları görünür kılar ve sessiz manipülasyonu zorlaştırır.
- **Korelasyon, seçilim ve zamanlama birçok “iyileşmeyi” açıklar.** Başka neyin değiştiğini, kimin veri dışında bırakıldığını ve başlangıç noktasının olağandışı kötü olup olmadığını sorun.
- **İstatistiği orantılı tutun.** Bir ekip, bir istatistik dersine değil, tutarlı biçimde kullanılan bir avuç tekniğe ihtiyaç duyar. Her grafiği sade sözcüklerle açıklayın.

## Metrik tanımları

Aşağıdaki metrikler bir metrik uygulamasının istatistiksel kalitesini ve hizmet işinin dağılımını tarif eder. Zaman ölçüleri her satırda belirtilen saatleri kullanır ve tanımların takip eden konular tarafından yeniden kullanılması amaçlanmıştır (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi” ve Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”).

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Medyan çözüm süresi | Dönemde çözülen olayların ortadaki çözüm süresi | dönemde çözülen olaylar üzerinde (çözüldü zaman damgası eksi oluşturuldu zaman damgası) değerinin 50. yüzdeliği; saat bildirim oluşturulduğunda başlar ve çözümde durur; duraklatmalar ayrı raporlanır, çıkarılmaz; iptal edilen ve yinelenen bildirimler hariç tutulur | saat ya da gün | ITSM aracı durum geçmişi | Olay yönetimi; ölçüm ve raporlama | Medyan çevrim süresi | Haftalık ya da aylık |
| Yüksek yüzdelikte çözüm süresi | Olayların çoğunun içinde çözüldüğü süre; yüzdelik adıyla belirtilir | yukarıdakiyle aynı geçen sürenin 85. (ya da 95.) yüzdeliği; yalnızca en az 20 öğe çözüldüyse hesaplanır, aksi halde ham öğeler listelenir | saat ya da gün | ITSM aracı durum geçmişi | Olay yönetimi; hizmet düzeyi yönetimi | Çevrim süresi yüzdelik tahmini | Haftalık ya da aylık |
| En eski açık öğe yaşı | Hâlâ açık olan en eski öğenin yaşı, artı yüksek yüzdelikten eski öğelerin sayısı | açık öğeler için şimdi eksi oluşturuldu zaman damgası, hiçbir duraklatma çıkarılmaz; müşteri bekleyenler dahil hizmet kuyruğundaki tüm açık öğeleri sayar | gün | ITSM aracı ya da iş takip sistemi | Olay yönetimi; sorun yönetimi | İş öğesi yaşı | Haftalık |
| Oran raporlama kapsamı | Raporlanan oranlar içinde payı, paydayı ve asgari sayı denetimini gösterenlerin payı | sayılar ve bir örneklem bayrağıyla raporlanan oranlar / raporlanan oranlar; yalnızca dönemin gözden geçirme paketinde yayımlanan oranları sayar | yüzde | Metrik kaydı (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”) | Ölçüm ve raporlama | Çalışma anlaşmaları | Üç aylık |
| Kontrol grafiği sinyal oranı | Bir ölçünün kontrol grafiğindeki noktalar içinde, ekibin yazılı kuralları altında özel neden değişkenliği sinyali verenlerin payı | kurallar altında işaretlenen noktalar / çizilen noktalar, son 20 ya da daha fazla nokta üzerinde; kurallar önceden sabitlenir ve günlüğe alınır | yüzde | Kontrol grafiği aracı ya da elektronik tablo | Sürekli iyileştirme | Sürecin retrospektif incelemesi | Aylık |
| Aralık genişliği | Bir başlık oranı üzerindeki belirtilen belirsizlik aralığının genişliği | dönemin başlık oranı için, kayıtta adı konan yöntemle aralığın üst sınırı eksi alt sınırı | yüzde puan | ITSM sayımlarından hesaplanır | Hizmet düzeyi yönetimi | Planlamada tahmin aralığı | Aylık |

Bir sözleşme bir ortalama adlandırdığında, sözleşmedeki rakamı raporlayın ve yanında medyanı ve yüzdeliği gösterin.

## Öneriler

### Zaman verisini dürüstçe özetleyin

**1. Varsayılan olarak medyanı ve adı konmuş bir yüksek yüzdeliği kullanın.** Çözüm süresi, çevrim süresi ve karşılama süresi için medyanı ve 85. ya da 95. yüzdeliği birlikte yayımlayın ve yüzdeliği metrik adına yazın. Medyan neyin tipik olduğunu, yüksek yüzdelik ise bir müşteriye makul biçimde neyin vaat edilebileceğini söyler. Bir taahhüt için tek bir sayı seçmeniz gerekiyorsa, yüzdeliği seçin.

**2. Özetin yanı sıra biçimi de gösterin.** Kapanış tarihine göre çözüm süresinin bir histogramı ya da dağılım grafiği, hiçbir özetin göstermediği kümeleri, uzun kuyrukları ve ani kaymaları gösterir. Resim ve sayı uyuşmadığında resme inanın ve sayıyı araştırın.

**3. En eski açık öğenin yaşını ekleyin.** Bitmiş işin yüzdelikleri geriye bakar ve hâlâ sıkışmış her şeyi göz ardı eder. En eski açık öğeyi ve kaç açık öğenin zaten yüksek yüzdeliğinizden eski olduğunu raporlayın (bkz. Konu 2.1 “Akış ölçümleri”). Bu, zor öğeler yaşlanmaya bırakıldığı için iyileşen ortalamalar için en yararlı tek düzeltmedir.

### Küçük örneklemlere ve belirsizliğe saygı gösterin

**4. Her oranla birlikte sayıyı yayımlayın.** “Yüzde 83” yerine “12'den 10'u hedef içinde çözüldü” yazın. Belirtilen bir sayıdan az öğeye dayanan oranların sayı olarak ya da altta yatan öğeler olarak gösterilmesi için bir kural ekleyin. Eşik bir muhakemedir: yazın, gözden geçirin ve her yerde uygulayın.

**5. Başlık oranları ve tahminler için aralıkları kullanın.** Başarısız olan değişikliklerin payı gibi bir oran için, ekibinizin üzerinde anlaştığı bir yöntemle bir güven aralığı hesaplayın ve yöntemi kayıtta not edin. Teslimat tahminleri için, örneklem temelli bir aralık (örneğin “haftada büyük olasılıkla 8 ile 14 öğe arasında”) planlayıcılara tek bir verim rakamından daha fazlasını söyler. Aralık bir kararı bilgilendirmek için çok genişse, bunu söyleyin.

### Sinyali gürültüden ayırın

**6. Üzerinde harekete geçtiğiniz ölçüler için kontrol grafikleri çizin.** Basit bir bireyler grafiği her noktayı zaman sırasıyla, veriden hesaplanan bir merkez çizgisi ve sınırlarla çizer ve sınırların dışındaki ya da merkezin bir tarafındaki dizileri işaretler. Haftalık medyan çözüm süresi ve haftalık hacimle başlayın. Sinyal kurallarını bir kez yazın (örneğin sınırların ötesinde bir nokta ya da merkezin bir tarafında sekizli bir dizi) ve sabit tutun; böylece ekip, grafik duygularıyla uyuşana dek kuralları ayarlamaz.

**7. Sinyaller üzerinde harekete geçin ve ortak neden değişkenliğini rahat bırakın.** Bir nokta sınırların içindeyse, ona bir açıklama aramaya direnin; süreç normalde davrandığı gibi davranmaktadır. Bir sinyal ortaya çıktığında, o hafta neyin değiştiğini sorun: bir sürüm, bir personel boşluğu, bir tedarikçi kesintisi, yeni bir kategori. Süreç istikrarlı ama tatmin edici değilse, iyileştirme kırmızı haftayı yaşayan kişiyle bir konuşma değil, sistemde bir değişikliktir.

**8. Uç bir dönemden sonra ortalamaya dönüş bekleyin.** Bir girişimi yılın en kötü ayında başlatırsanız, tesadüfen bir miktar iyileşme izleyecektir. Girişime kredi vermeden önce daha uzun bir temel değerle, değişmemiş benzer bir hizmetle ya da kontrol sınırlarıyla karşılaştırın. İki noktalık bir öncesi ve sonrası çifti, kanıtın en zayıf biçimidir.

### Neden ve seçilim hakkında dikkatle akıl yürütün

**9. Verilerde neyin eksik olduğunu sorun.** Anket yanıtları yanıtlamayı seçen insanlardan gelir. Kapatılmış bildirimler hâlâ açık olanları dışarıda bırakır. Bir sonuca varmadan önce kimin ya da neyin eksik olduğunu ve bunun sonucu nasıl eğebileceğini listeleyin.

**10. Tanımları bilerek değiştirin ve grafik üzerinde işaretleyin.** Yeni bir durum modeli, yeni bir öncelik matrisi ya da yeni bir kategori listesi işi değiştirmeden veriyi değiştirir. Her değişikliği grafik üzerinde işaretleyin ve ondan sonra kontrol sınırlarını yeniden başlatın (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Medyan çözüm süresi | Önce hızlı bildirimleri kapatıp zor olanları açık bırakmak; bir bildirimi birkaç kolay bildirime bölmek; müşteri bekleme durumunda saati duraklatmak | Yüksek yüzdelikte çözüm süresi ve en eski açık öğe yaşı; duraklatma durumlarında geçen sürenin payı; bağlantılı bildirim oranı |
| Yüksek yüzdelikte çözüm süresi | Sonucu yüceltecek bir yüzdelik seçmek ya da raporlar arasında değiştirmek; uzun vakaları “aykırı değer” diye hariç tutmak ya da yeniden sınıflandırmak | Kayıtta sabitlenmiş yüzdelik; nedenleriyle hariç tutulan öğelerin listesi; en eski açık öğe yaşı |
| En eski açık öğe yaşı | En eski öğeyi çözmeden kapatmak ya da birleştirmek; başka bir kuyruğa ya da kategoriye taşımak | Yeniden açılma oranı; en eski kapatılmış öğelerin örneklemeyle denetimi; kuyruk aktarım sayısı |
| Oran raporlama kapsamı | Başlıklar hâlâ yüzdeyle başlarken bir sayıyı küçük puntoyla eklemek; asgari sayıyı hiç tetiklenmeyecek kadar düşük belirlemek | Kaydı değil, gerçek panoyu gözden geçirin; asgari sayıyı aralık genişliğiyle birlikte gözden geçirin |
| Kontrol grafiği sinyal oranı | Sinyaller kaybolsun diye sınırları genişletmek, kural eklemek ya da temel değeri yeniden başlatmak; ölçüyü değiştirerek noktaları oynatmak | Kayıtta değişiklik geçmişiyle saklanan kurallar ve sınırlar; ham histogramla karşılaştırın |
| Aralık genişliği | Dar bir aralık üreten bir yöntem ya da pencere seçmek; örneklemi büyütmek için benzemeyen hizmetleri birleştirmek | Kayıtta adı konmuş yöntem; talep üzerine hizmete göre döküm; birleştirilmiş ve birleştirilmemiş sonuçların karşılaştırılması |

Sağlıklı bir okuma, kullanıcıların deneyimiyle aynı yönde hareket eden medyanlar ve yüzdelikler, sessizce yeniden sınıflandırılmadan küçülen kısa bir eski öğeler listesi ve sayılarıyla birlikte görünen oranlar gösterir. Kontrol grafiği sinyal oranı düşük ve sıfır olmayan olmalıdır: hiç sinyal vermeyen bir grafik veremiyor olabilir ve her zaman sinyal veren bir grafik, kararsız bir süreci ya da kötü seçilmiş kuralları yansıtır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Ortalama çözüm süresi | Basit, birçok sözleşmeyle uyumlu, toplaması kolay | Kuyruğun egemenliğinde; müşterilerin tipik olarak ne deneyimlediğini gizler |
| Medyan artı yüksek yüzdelik | Aykırı değerlere dayanıklı; müşterilere verilen vaatleri destekler | Biraz açıklama gerektirir; yüzdeliklerin istikrarlı olması için yeterli öğe gerekir |
| Sayısız ham oranlar | Derli toplu ve tanıdık | Küçük örneklemleri gizler ve aşırı okumaya davet eder |
| Sayılı ve aralıklı oranlar | Belirsizlik konusunda dürüst; aşırı tepkiyi caydırır | Daha az kararlı görünür; aralık yöntemleri uzlaşma gerektirir |
| Kontrol grafikleri | Sinyali gürültüden ayırır; ne zaman harekete geçileceğini yönlendirir | Yeterli nokta ve istikrarlı tanımlar gerektirir; sınırlar yanlış okunabilir ya da manipüle edilebilir |
| Öncesi ve sonrası karşılaştırması | Hızlı ve iletmesi kolay | Ortalamaya dönüşe ve eşzamanlı değişikliklere yatkın |

Yılda bir avuç olayı olan bir hizmet için hiçbir istatistik istikrarlı değildir ve doğru yöntem her olayı okumaktır. Yüksek hacimli bir masa için dağılıma duyarlı ölçüler ucuzdur ve açıkça üstündür. Hacme ve kararın risklerine göre seçin.

## Takımınızla tartışılacak sorular

**1. Mevcut pano sayılarımızdan hangisi çarpık bir şeyin ortalamasıdır ve medyan ile 95. yüzdelik ne gösterirdi?**
En çok izlenen zaman ölçüsünü seçin ve toplantıdan önce üçünü de aynı öğe kümesi üzerinde hesaplayın. Ortalamanın anlattığı hikâyenin kullanıcıların söylediğiyle uyuşup uyuşmadığını sorun. Hangi özetin başlık olacağı ve diğerlerinin nerede görüneceği üzerinde uzlaşarak bitirin.

**2. En çok alıntılanan yüzdemizin arkasında kaç öğe duruyor ve sayıları yazsaydık yine de alıntılar mıydık?**
Liderliğin en çok okuduğu üç yüzdeyi listeleyin. Her birinin yanına son dönem için payı ve paydayı yazın. Bir ek başarı ya da başarısızlığın rakama ne yapacağını sorun. Altında ekibin oran yerine öğeleri göstereceği bir asgari sayı üzerinde uzlaşın.

**3. Bir iyileşmeyi en son ne zaman bir girişime bağladık ve o sırada başka ne doğruydu?**
Yakın tarihli bir başarı hikâyesi seçin. Ölçünün en kötü olduğu zamanın ne zaman olduğunu, daha uzun geçmişin nasıl göründüğünü ve karşılaştırılabilir bir hizmetin de iyileşip iyileşmediğini sorun. Tonu meraklı tutun.

**4. Temel ölçülerimizin normal aralığı nedir ve belirli bir haftanın olağandışı olduğunu kim söyleyebilir?**
Bir ölçü için son 20 ya da daha fazla haftalık değeri çizin ve merkezi ve sınırları çizin ya da kabaca hesaplayın. Ekibin aralığın içinde kalan hangi haftalara tepki verdiğini sorun. Grafiğin sahibinin kim olduğu ve sinyal kurallarının nerede yazıldığı üzerinde uzlaşın.

**5. Verimizden kim ya da ne eksik?**
Ölçünün kaynaklarını listeleyin: kapatılmış bildirimler, anket yanıtları, izlenen hizmetler, zaman damgalı araçlar. Her biri için kimin neden dışlandığını sorun. Her boşluğu bir düzeltme ya da bir not olarak yakalayın.

**6. Geniş bir aralığı ya da “henüz bilmiyoruz” ifadesini, bir bahane gibi ses çıkarmadan liderliğe nasıl açıklarız?**
İfadeyi gerçek bir örnek üzerinde prova edin: “12 olayda yüzde 70 ile 95 arasında; bir sonraki çeyrekten sonra bunu daraltmayı bekliyoruz.” Hedef kitlenin neye karar vermesi gerektiğini ve aralığın kararı değiştirip değiştirmediğini sorun. Toplantıda kısa bir senaryo yazın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri tahmin etmek için çevrim süresini ve verimi kullanır ve ortalamalar yerine yüzdelik temelli tahminlerden en çok yararı sağlar (bkz. Konu 2.1 “Akış ölçümleri”). Bir olasılıkla bir aralık olarak ifade edilmiş bir tahmin, bir tarihten daha kolay savunulur. Bir dönemin değişimini bir eğilim olarak okumaya direnin (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”).

### Hizmet ve operasyon takımları

Operasyon ekipleri bildirim verisinin ve olay saatlerinin sahibidir; bu yüzden medyanları, yüzdelikleri ve en eski açık öğeyi yayımlamak ve duraklatma kurallarını açıklamak için en iyi konumdadırlar. Hatalı bir sürüm gibi gerçek bir kaymanın kötü bir haftadan ayırt edilebilmesi için haftalık hacmi ve çözüm süresini kontrol sınırlarıyla grafiğe dökmelidirler. Bir hizmetin az olayı olduğunda, oranları hesaplamak yerine her birini gözden geçirmelidirler (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).

### Liderlik ve yönetişim

Liderler, ekiplerin ne göstereceğini biçimlendiren soruları sorar. Her salınım için “bu neden yükseldi?” sormak, kuruma gürültüyü açıklamayı ve onu saklamayı öğretir. Liderler bir hareketin normal aralığın içinde olup olmadığını, bir rakamın arkasında kaç öğe olduğunu ve süreçte neyin değiştiğini sormalıdır. Yönetişim organları başlık oranlarında sayıları zorunlu kılabilir.

### Müşteriler ve kullanıcılar

Müşteriler ortalamaları değil, tek tek vakaları deneyimler. Beş hafta süren o tek talebi hatırlarlar ve iki günlük bir ortalama bu hatırayı onarmaz. Yüzdelik taahhütleri (“taleplerin on dokuzu üç iş günü içinde”) müşterinin zihinsel modeline ortalama sürelerden daha iyi uyar. Anket sonuçları yanıt sayılarıyla gösterilmeli ve açık yorumlar sayılarla birlikte okunmalıdır (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendecinin bir hizmet masası ve web mağazasını destekleyen bir operasyon ekibi vardır. Aşağıdaki rakamlar örnekleyicidir.

Liderlik aylık bir başlık görür: “ortalama olay çözüm süresi 9,1 saatten 7,4 saate düştü.” Operasyon liderinden bunu doğrulaması ve bir sonraki hedef olan 6 saat için planı sunması istenir. Kabul etmeden önce analistten altta yatan öğeleri çekmesini ve çizmesini ister. Ayda 240 olaydan (örnekleyici) medyan 2,5 saat, 85. yüzdelik 14 saattir ve 9 olay 5 günden eskidir ve hâlâ açıktır. Bir önceki ay medyan 2,6 saatti. Ortalama düştü, çünkü bir önceki aydan, biri 11 günlük olmak üzere üç çok uzun olay dönemde daha erken çözüldü ve bir grup parola sıfırlama bildirimi hızlı kapanan bir talep türüne yeniden kategorize edildi.

Ekip son 26 haftanın haftalık medyanını grafiğe döker. Merkez çizgisi 2,6 saat civarındadır ve son iki aydaki her nokta sınırların içindedir. Başlıktaki düşüş bir sinyal değildir. İkinci haftadaki yeniden kategorizasyon tanımı grafiğin ortasında değiştirmiştir; bu yüzden ekip bunu işaretler ve sınırları o noktadan yeniden başlatır.

Üç değişikliğe karar verirler. Aylık rapor, her birinin arkasındaki olay sayısıyla medyanı, 85. yüzdeliği ve en eski açık öğeyi gösterecektir. Önerilen 6 saatlik ortalama hedef, yeni tanım altında bir çeyreklik verinin ardından belirlenecek bir yüzdelik hedefi konuşmasıyla değiştirilir. Ekip ayrıca 9 eski olayı, her birine bir sahip ve bir sonraki adımla listeleyecektir.

Yakaladıkları manipülasyon riski bir sonraki gözden geçirmede ortaya çıkar. Bir yönetici, en eski öğe rakamı sağlıklı görünsün diye en eski 9 olayı “artık yeniden üretilemiyor” olarak kapatmayı önerir. Kayıt, en eski açık öğe yaşını yeniden açılma oranı ve eski kapanışların örneklemeyle denetimiyle eşleştirdiği için, ekip önerilen kapanışlardan üçünü okur, ikisinin hâlâ canlı olduğunu bulur ve açık tutar. En eski öğe rakamı bir ay daha rahatsız edici kalır. Amaçlanan davranış budur.

## Sektör mercekleri

**Girişim (startup).** Hacimler küçüktür; bu yüzden çoğu oran birkaç öğeden oluşur ve aralıklar geniştir. İstatistik hesaplamak yerine her olayı okuyun, bir ya da iki ölçünün basit bir haftalık grafiğini tutun ve üç noktadan eğilim ilan etmekten kaçının. Hacim büyüdükçe, alışkanlıklar zaten yerleşmiş olsun diye medyanlara ve yüzdeliklere erken geçin.

**Küçük işletme.** BT'yi yöneten kişi aynı zamanda verinin sahibidir ve örneklem genellikle küçüktür. Nadir olaylar için yüzdeleri değil, sayıları raporlayın ve kendi daha uzun geçmişinizle karşılaştırın. Bir tedarikçinin “yanıt süresi” saatinin gerçekte neyi ölçtüğünü denetleyin.

**Kurumsal.** Hacim, dağılımları anlamlı kılar ve ayrıca benzemeyen hizmetleri karıştıran toplulaştırmaları teşvik eder. Benzerleri benzerlerle karşılaştırın, tanımları ve kullanılan yüzdeliği yayımlayın ve ekiplerin aynı ölçüyü üç farklı biçimde hesaplamaması için ortak bir grafik ve hesaplama kuralları kitaplığı tutun.

**Kamu sektörü ve hükümet.** Sözleşmeler ve yasal raporlama çoğu zaman bir ortalamayı ya da bir eşik yüzdesini sabitler ve bu tanımlar pazarlık dışıdır. Gereken rakamı tam olarak tanımlandığı gibi raporlayın ve gözetim organlarının resmin tamamını görmesi için yanında medyanı, yüzdeliği ve sayıları gösterin. Kamusal inceleme dürüst belirsizliği daha değerli kılar, çünkü aşırı kendinden emin bir sayıyı geri çekmek pahalıdır (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Özet kuralları üzerinde uzlaşmak, bir dışa aktarımdan bir histogram ve bir kontrol grafiği oluşturmak ve bir rapor şablonuna sayılar eklemek birkaç saat sürer; bunları güncel tutmak için her döngüde birkaç dakika gerekir. Çoğu araç yüzdelikleri zaten hesaplar. Daha büyük maliyet, tek bir teselli edici sayıya alışkın insanlarla yapılan bir konuşmadır.

Getiri, daha iyi kararlar ve daha az boşa giden tepkidir. Ekipler kötü bir haftadan sonra yeniden örgütlenmeyi, girişimlere tesadüfi iyileşmeler için kredi vermeyi ve müşterilerinin yarısının deneyimlemediği ortalamaları vaat etmeyi bırakır. Bir rakam ödünç almayın: geçen yılın kararlarının ne sıklıkla geri alındığını ve kaç “iyileşmenin” sonraki dönemde kaybolduğunu sayın ve bu sayıları gerekçeyi boyutlandırmak için kullanın.

## Anti-desenler ve tuzaklar

- **Çarpık süreleri ortalamak.** Ortalama kuyruğa doğru çekilir ve kullanıcıların hissettiğini gizler. Medyanı ve adı konmuş bir yüksek yüzdeliği raporlayın ve en eski açık öğeyi gösterin.
- **Minik örneklemlerden yüzdeler.** Üç öğeden “yüzde 100” bir anekdottur. Sayıları gösterin ve bir asgari sayı kuralı uygulayın.
- **Her salınıma tepki vermek.** Her kırmızı haftanın peşinden koşmak çabayı boşa harcar ve ekiplere gürültüyü açıklamayı öğretir. Kontrol sınırlarını ve yazılı sinyal kurallarını kullanın.
- **Öncesi ve sonrası kanıtı.** İki nokta bir müdahaleyi tesadüften ya da ortalamaya dönüşten ayıramaz. Daha uzun bir temel değer ve bir karşılaştırma kullanın.
- **Grafikte hedef tahtasını kaydırmak.** Sınırları, kuralları ya da tanımları sonradan değiştirmek her grafiği hikâyeyle uyumlu kılar. Kuralları sabitleyin, değişiklikleri günlüğe alın ve işaretleyin.
- **Aykırı değerleri varsayılan olarak hariç tutmak.** En uzun vakalar genellikle müşterilerin hatırladığı vakalardır. Yalnızca yazılı bir gerekçeyle hariç tutun ve nelerin hariç tutulduğunu listeleyin.
- **Sahte kesinlik.** 12 öğeden yüzde 83,3 raporlamak, verinin sahip olmadığı bir bilgiyi ima eder. Dürüstçe yuvarlayın ve bir aralık gösterin.
- **Benzemeyen işi birleştirmek.** Parola sıfırlamaları ile veri merkezi arızaları için harmanlanmış bir süre hiçbirini tarif etmez. Önce bölümleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Zaman verisinin özetleri | Yalnızca ortalamalar | Bazı ekipler medyanları gösterir | Medyan artı adı konmuş bir yüzdelik ve en eski açık öğe standarttır | Dağılımlar bir koruyucu önlemle gözden geçirilir ve eğilim olarak izlenir | Yüzdelik taahhütleri müşteriler ve tedarikçilerle üzerinde anlaşılır ve veri değiştikçe revize edilir |
| Örneklem büyüklüğü ve belirsizlik | Oranlar sayısız alıntılanır | Bazı raporlarda sayılar gösterilir | Her oranda sayılar ve bir asgari sayı kuralı | Başlık oranlarında aralıklar, yöntem kayıtta | Belirsizlik müşterilerle açıkça paylaşılır ve ekipler arası planlamada kullanılır |
| Değişkenlik ve nedensellik | Her değişiklik açıklanır | Sınırlı birkaç grafik | Temel ölçüler için yazılı kurallarla kontrol grafikleri | Sinyaller planlı araştırmayı tetikler; girişimler temel değere karşı denetlenir | Hizmetler arasında ortak grafik kitaplıkları; temel değerler sıralama olmadan ekipler arasında karşılaştırılır |

## Kontrol listesi

- [ ] Her zaman ölçüsü, yalnızca bir ortalama yerine bir medyan ve adı konmuş bir yüksek yüzdelik raporlar.
- [ ] En eski açık öğenin yaşı ve yüksek yüzdeliğin ötesindeki öğelerin sayısı raporlanır.
- [ ] Her raporlanan oran payını ve paydasını gösterir.
- [ ] Bir asgari sayı kuralı yazılıdır ve tüm oranlara uygulanır.
- [ ] Başlık oranları ve tahminler, yöntemi kayıtta adı konmuş bir aralık gösterir.
- [ ] Ekibin harekete geçtiği üç ölçü için, yazılı sinyal kurallarıyla kontrol grafikleri vardır.
- [ ] Tanım değişiklikleri grafiklerde işaretlenir ve kayıtta günlüğe alınır.
- [ ] Hariç tutulan öğeler gerekçeleriyle listelenir.
- [ ] İyileşme iddiaları tekrarlanmadan önce daha uzun bir temel değere karşı denetlenir.
- [ ] Her metriğin manipülasyon vektörü ve koruyucu önlemi kayıttadır (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

## Yapay zekâ istemleri

**Bir özetin veriye uyup uymadığını denetleyin.**

```text
[Hizmet] için [dönem] boyunca [ölçü, örneğin olay çözüm süresi] ölçüsünün
[sayı] değeri var. Saat [başlangıç olayı] olayında başlar ve [bitiş olayı]
olayında durur. Duraklatmalar [nasıl ele alınıyor]. Değerler aşağıya
yapıştırılmış.

Dağılımın biçimini anlat, ortalamayı, medyanı ve [yüzdelik, örneğin 85.] ile
[ikinci yüzdelik, örneğin 95.] yüzdeliklerini hesapla ve hangi özetin tipik bir
vakayı en iyi temsil ettiğini ve hangisinin müşterilere verilen bir vaadi
desteklediğini söyle. Veri hatası gibi görünen değerleri belirt ama
kaldırma. Kıyaslama değerleri uydurma. Varsayımlarını ve veriden
belirleyemediğin her şeyi listele.

[kişisel veriler çıkarılmış değerleri yapıştır]
```

**Bir oranı belirsizliğiyle ifade edin.**

```text
Ekibimiz [oran adı] oranını [dönem] ve [hizmet] için [payda] içinden [pay]
olarak raporluyor. Bunu sayılarla nasıl sunacağımızı göster, bir başarının
daha fazla ya da daha az olmasının onu ne kadar değiştireceğini sade
sözcüklerle açıkla ve [yöntem ya da “önerdiğin ve adlandırdığın bir yöntem”]
kullanarak bir güven aralığı hesapla. Teknik olmayan bir liderin
anlayabileceği bir ifade ve bir oran yerine öğelerin ne zaman gösterileceğine
dair bir asgari sayı kuralı öner. Karşılaştırma rakamları uydurma.
Varsayımlarını, yöntem ve gerektirdiği veri koşulları dahil, listele.
```

**Bir değişikliğin sinyal mi gürültü mü olduğuna karar verin.**

```text
[Hizmet] için [ölçü] ölçüsünün art arda [sayı] [haftalık ya da aylık] değeri
burada. [Dönem] döneminde bir değişiklik oldu: [müdahaleyi, sürümü ya da tanım
değişikliğini anlat]. Merkez çizgisi ve sınırlarla bir kontrol grafiğini çiz ya
da anlat, şu sinyal kurallarını uygula: [kuralları listele, örneğin sınırların
ötesinde bir nokta ya da bir tarafta sekizli bir dizi] ve hangi noktaların
sinyal verdiğini söyle. Değişikliğin olağan değişkenlikten ayırt edilip
edilemediğini ve ortalamaya dönüş ya da bir tanım değişikliği gibi başka hangi
açıklamaları dışlamam gerektiğini söyle. Nedensellik iddia etme.
Varsayımlarını ve yardımcı olacak ek verileri listele.

[değerleri yapıştır]
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): yayımlamadan önce bir zaman ya da oran metriği için konuyu ve eşleştirilmiş koruyucu önlemi bulmak için kullanın.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir konuya eklenen istatistiksel bir ölçünün tanımını, saatlerini, manipülasyon vektörünü ve koruyucu önlemini taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Hizmet süreleri çarpıktır; bu yüzden medyanı ve adı konmuş bir yüksek yüzdeliği raporlayın ve en eski açık öğenin yaşını ekleyin.
- Her oran sayısını taşır ve küçük örneklemler, kendinden emin bir yüzde olarak değil, öğeler olarak ya da bir aralıkla gösterilir.
- Tek bir haftaya tepki vermeden önce bir ölçünün normal aralığını bir kontrol grafiğiyle bilin.
- İki noktayla ölçülen iyileşmelerden kuşkulanın: ortalamaya dönüş ve tanım değişiklikleri birçoğunu açıklar.
- Dürüst belirsizlik bir raporda bir güçtür ve Goodhart tarzı manipülasyona karşı bir koruyucu önlemdir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).
- Tekniği orantılı tutun: sade sözcüklerle açıklanan birkaç tutarlı yöntem, bir ekibe açıklanmamış çok sayıda yöntemden daha iyi hizmet eder.

## Kaynaklar ve ileri okuma

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
