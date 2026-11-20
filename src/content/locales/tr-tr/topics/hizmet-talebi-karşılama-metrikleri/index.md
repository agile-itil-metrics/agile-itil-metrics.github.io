# Hizmet talebi karşılama metrikleri

**Rutin taleplerin kullanıcının bakış açısından ne kadar sürdüğünü, bu sürenin ne kadarının bekleme olduğunu, hangi katalog kalemlerinin talebi yönlendirdiğini ve işin ne kadarının otomatik olduğunu ölçün; sonra bu resmi, talepleri ele alan insanları zorlamak yerine yaygın talepleri yeniden tasarlamak için kullanın.**

## Genel bakış ve motivasyon

**Hizmet talebi** (service request), bir kullanıcının bir hizmetin sağlamak üzere tasarlandığı bir şey için yaptığı rutin taleptir: bir hesap, bir klasöre erişim, bir dizüstü bilgisayar, bir yazılım lisansı, bir bilgi parçası. **Olaydan** (bir hizmette plansız kesinti; bkz. Konu 3.2 “Olay hacmi ve önceliği”) ve bir hizmeti değiştiren ve riske ilişkin yeni bir yargı gerektiren **değişiklikten** (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”) farklıdır. [ITIL](https://en.wikipedia.org/wiki/ITIL) 4'te bu iş hizmet talebi yönetimi uygulaması kapsamındadır ve iş genellikle tekrarlanabilir bir **talep modeli** olarak tanımlanır: gereken bilgi, onaylar, adımlar ve beklenen süre. ITIL “fulfilment” sözcüğünü bu şekilde yazar; bu konunun metni ise kitabın yazımıyla uyumlu olarak “fulfillment” kullanır.

Talepler metrikler açısından önemlidir, çünkü öngörülebilir taleptir. Olay bir sürprizdir; yeni bir çalışanın dizüstü bilgisayarı talebi her ay gelir ve aynı adımları izler. Bu öngörülebilirlik, talepleri tasarım, standartlaştırma ve [süreç otomasyonu](https://en.wikipedia.org/wiki/Process_automation) için en iyi aday yapar. Ayrıca gecikmelerin nadiren zorluktan kaynaklandığı anlamına gelir. Kuyruklardan, onaylardan ve devirlerden kaynaklanırlar; bu yüzden yararlı soru, kimsenin ne kadar hızlı yazdığı değil, talebin nerede beklediğidir.

Analiz birimi **katalog kalemidir**: bir kullanıcının [hizmet kataloğunda](https://en.wikipedia.org/wiki/Service_catalog) isteyebileceği adı konmuş tek bir şey (ITIL'in terimi “service catalogue”dur; bu konunun geri kalanı “hizmet kataloğu” der). Kalem başına ölçümler, tek bir karışık sayıdan çok daha yararlıdır; çünkü bir parola sıfırlama talebinin ve bir sunucu kurulumu talebinin farklı saatleri, farklı sahipleri ve farklı makul hedefleri vardır. Karışık bir ortalama ikisini de gizler.

Çevik ve ITIL görüşleri burada az sürtünmeyle buluşur. ITIL, hizmetin üzerinde anlaşılan sonucu üzerinde anlaşılan sürede sunup sunmadığını sorar. Çevik akış uygulaması, işin talepten bitmeye kadar ne kadar sürede aktığını, ne kadarının kuyruklarda beklediğini ve aynı anda ne kadar işin sürdüğünü sorar. Bir talep, bir iş akışında ilerleyen bir iş kalemidir; bu yüzden çevrim süresi ve iş kalemi yaşı gibi akış ölçümü araçları doğrudan uygulanır (bkz. Konu 2.1 “Akış ölçümleri”). Sözcük dağarcığı farklıdır. Aritmetik aynıdır.

Üç terim tekrar eder. **Karşılama süresi** (fulfillment time), kullanıcının talebi gönderdiği andan kullanıcının şeyin teslim edildiğini onayladığı ya da sistemin kaydettiği ana kadar geçen süredir. **Eli değmiş süre** (hands-on time), birinin talep üzerinde aktif olarak çalıştığı süredir ve **bekleme süresi**, onaylar ve kullanıcıyı beklemek dahil, geri kalan her şeydir. İkisi arasındaki fark, bir talep modelinin küçültmesi gereken şeydir. **Otomasyon payı**, gönderimden sonra hiçbir kişinin dokunmadan karşılanan taleplerin oranıdır.

Süre ölçümleri özen gerektirir. Karşılama süreleri çarpıktır: talepler çoğunlukla hızla biter ve birkaçı çok uzun sürer. Ortalama birkaç tanesi tarafından oradan oraya çekilir, bu yüzden ortancayı ve 85. ya da 95. gibi yüksek bir [yüzdelik dilimi](https://en.wikipedia.org/wiki/Percentile) raporlayın (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). Bir [hizmet düzeyi anlaşmasındaki (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) gibi müşterilerle üzerinde anlaşılan hedefler de aynı biçimde ifade edilmelidir: “dizüstü bilgisayar taleplerinin yüzde 85'i 5 iş günü içinde karşılandı”, “ortalama 3 gün”den daha çok şey söyler.

Son olarak, ölçüm psikolojisinden bir uyarı. Bir takım talepleri hızla kapatmaya göre değerlendirildiğinde, sayıyı iyileştirmenin en ucuz yolu neyin kapalı sayıldığını değiştirmek ya da saati duraklatmaktır. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) tam olarak geçerlidir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Bu nedenle aşağıdaki her metrik bir koruma önlemiyle eşleştirilmiştir ve hiçbiri bireysel bir temsilciyi tanımlamaz.

## Temel ilkeler

- **Katalog kalemi başına ölçün.** Her kalemin kendi talep modeli, sahibi ve makul hedefi vardır; bu yüzden karışık sayılar yanıltır.
- **Saati kullanıcı istediğinde başlatın ve kullanıcı şeye sahip olduğunda durdurun.** Dahili kilometre taşları yararlı tanılardır, ancak müşterinin deneyimi değildir.
- **Bekleme süresini eli değmiş süreden ayırın.** İkisi arasındaki boşluk yeniden tasarımın nerede karşılık verdiğini gösterir ve bu nadiren işin kendisindedir.
- **Ortalamaları değil, dağılımları raporlayın.** Bir ortanca ve bir 95. yüzdelik dilim, kullanıcıların yaşadığını tanımlar.
- **Talebi bir sinyal olarak ele alın.** Kaleme göre hacim, kullanıcıların neye ihtiyaç duyduğunu, neyin kafa karıştırıcı olduğunu ve neyin otomasyonu ya da self servisi hak ettiğini gösterir.
- **Önce kararlı ve sık olanı otomatikleştirin.** Otomasyon payı iyi talep tasarımının bir sonucudur, kendi başına peşinden koşulacak bir hedef değildir.
- **Takımı ve hizmeti ölçün, kişiyi asla.** Talepler sistemler üzerinden akar ve temsilciler arasındaki değişim çoğunlukla iş karışımını yansıtır.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Talep karşılama süresi | Bir talebi teslim etmek için geçen süre, katalog kalemi başına ortanca ve 95. yüzdelik dilim olarak gösterilir | Saat, kullanıcı talebi gönderdiğinde başlar; kullanıcı teslimatı onayladığında ya da teslimat kaydedildiğinde durur; kullanıcı tarafından iptal edilen talepler hariç tutulur; kullanıcıyı beklemede geçen süre çıkarılmaz, ayrı raporlanır | iş günü ya da saat | ITSM aracı talep geçmişi | Hizmet talebi yönetimi | Takım panosunda çevrim süresi (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”) | Haftalık, aylık eğilim |
| Hedef içinde karşılama | Katalog kalemleri için üzerinde anlaşılan hedef içinde teslim edilen taleplerin payı | Hedef içinde karşılanan talepler / dönemde karşılanan talepler; saat yukarıdaki gibidir, hâlâ açık olan kalemler hariç tutulur ve bunun yerine birikim yaşında sayılır | yüzde | ITSM aracı talep geçmişi; katalog kalemi hedef tablosu | Hizmet düzeyi yönetimi | Hizmet düzeyi beklentisi | Aylık |
| Talep birikimi ve yaşı | Açık taleplerin sayısı ve en eskilerinin ne kadar eski olduğu, katalog kalemine göre | Dönem sonunda açık talepler (sayı); her açık talebin yaşı = rapor tarihi eksi gönderim tarihi; sayıyı, ortanca yaşı ve en eski yaşı raporlayın | sayı ve gün | ITSM aracı açık talep kuyruğu | Hizmet talebi yönetimi | Devam eden iş ve yaşlanan iş kalemleri (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”) | Haftalık |
| Onay bekleme süresi | Bir talebin bir onay için beklediği süre | Saat, onay istendiğinde başlar; verildiğinde ya da reddedildiğinde durur; onay adımı olmayan talepler hariç tutulur | saat | ITSM aracı onay günlüğü | Hizmet talebi yönetimi; değişiklik yetkilendirme | Engellenmiş süre ya da panoda bir “bekliyor” sütunu | Aylık |
| Katalog kalemine göre talep hacmi | Her kalem için gönderilen talep sayısı ve tüm taleplerdeki payı | Dönemde kalem başına gönderilen talepler; tespit edilirse yinelenen olarak yeniden gönderilen talepler hariç tutulur; sayıyı ve toplamdaki payı raporlayın | sayı ve yüzde | ITSM aracı talep kayıtları | Hizmet kataloğu yönetimi | Birikim listesini şekillendirmek için talep analizi | Aylık |
| Otomasyon payı | Gönderimden sonra hiçbir elle adım olmadan karşılanan taleplerin oranı | Otomasyonla uçtan uca karşılanan talepler / dönemde karşılanan talepler; herhangi bir karşılama adımı için bir kişinin dokunduğu talep elle sayılır; politika gerektiriyorsa bir kişi tarafından yapılan onaylar elle karşılama adımı sayılmaz | yüzde | ITSM aracı karşılama kayıtları ve otomasyon platformu günlükleri | Hizmet talebi yönetimi; hizmet değer zincirinde otomasyon | Tamamlanma tanımında otomasyon | Aylık |
| Talep yeniden açılma oranı | Sonuç yanlış ya da eksik olduğu için kullanıcının yeniden açtığı ya da yeniden oluşturduğu karşılanmış taleplerin payı | Karşılamadan sonraki 7 gün içinde aynı kullanıcı tarafından aynı kalem için yeniden açılan ya da yeniden oluşturulan talepler / dönemde karşılanan talepler; 7 günlük pencere, takımın yazdığı bir örnektir | yüzde | ITSM aracı talep geçmişi | Hizmet talebi yönetimi | Yeniden iş oranı; kaçan kusur | Aylık |

Karşılama süresi, yalnızca takım bir takvim üzerinde anlaşıp kaydettiyse çalışma zamanını sayar; aksi halde geçen saatleri kullanın ve bunu söyleyin. Birikim metriği bilerek üç sayı taşır; çünkü tek başına bir sayı beklemeyle ilgili hiçbir şey söylemez. Otomasyon payı tanımı, insan onaylarını “elle” sayımın dışında bırakır; çünkü birçok onay bir karşılama maliyeti değil, bir politika kararıdır; onay bekleme süresi ayrı ölçülür, böylece gecikme görünür kalır.

## Öneriler

### Saatleri ve birimi tanımlayın

**1. Katalog kalemi başına ölçün ve kalem listesini yayımlayın.** Çoğu zaman taleplerin büyük bir payını kapsayan, hacme göre ilk on kalemle başlayın ve veri izin verdikçe kalem ekleyin. Her kaleme bir sahip, belirtilmiş bir hedef ve “teslim edildi”nin tek satırlık bir tanımını verin. Kalem listesi diğer her şey için paydadır, bu yüzden onu metrik kayıt defterinde tutun (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

**2. Her kalem için saatin başlangıcını ve bitişini yazın.** Çoğu kalemde saat gönderimde başlar ve bir talep kaydı kapandığında değil, kullanıcı istediği şeyi kullanabildiğinde durur. Bir dizüstü bilgisayar, kurye ayarlandığında değil, kullanıcının eline geçtiğinde teslim edilmiştir.

**3. Kullanıcıyı beklemenin nasıl ele alınacağına bir kez karar verin.** Bazı talepler, kullanıcı bir soruyu yanıtlamadığı için takılır. Bunun için saati duraklatmak makuldür, ancak aynı zamanda kötüye kullanılması en kolay kaldıraçtır. Duraklatmayı bir gerekçeyle ayrı bir durum olarak kaydedin, duraklatılmış süreyi kendi sayısı olarak raporlayın ve duraklatma oranını kaleme göre gözden geçirin (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

### Kullanıcıların deneyimlediğini raporlayın

**4. Ortancayı ve 95. yüzdelik dilimi bir sayıyla birlikte gösterin.** İkisini de kalem başına tek bir grafiğe, her noktanın arkasındaki talep sayısıyla koyun. İki günlük bir ortanca ile yirmi günlük bir 95. yüzdelik dilim, kullanıcıların çoğuna iyi hizmet verildiğini ve bir kuyruğun incelenmesi gerektiğini söyler; dört günlük bir ortalama bunu gizler. Sayı küçük olduğunda bunu söyleyin ve yüzdelik dilim yerine bireysel talepleri gösterin.

**5. Açık talepler için yaşı görünür kılın.** Karşılama süresi ancak bir talep bittikten sonra bilinir, bu yüzden geriden gelir. Kalem başına en eski açık taleplerin yaşa göre sıralanmış bir listesi, bir takıma bugün nereye bakacağını söyler. Akış açısından bu, kalemin olağan çevrim süresine karşı iş kalemi yaşıdır ve bir talep kuyruğunun sahip olabileceği en uygulanabilir görünümdür.

**6. Geçen süreyi eli değmiş, onay ve kullanıcıyı bekleme süresine bölün.** Bir kalem için karşılanan taleplerden bir örneklem alın ve her birini her durumda harcanan süreye ayırın. Çoğu takım, aktif işin geçen sürenin küçük bir payı olduğunu bulur. Bulgu, iyileştirme konuşmasını “daha hızlı çalışın”dan “adımlar arasındaki kuyruğu kaldırın”a taşır; bu, kuyrukların ve akışın incelenmesinin temel fikridir (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”).

### Hizmeti şekillendirmek için talebi kullanın

**7. Kaleme göre hacmi kullanıcılardan gelen bir ileti olarak okuyun.** Bir kalem için artan hacim, büyüyen bir ihtiyacı, kafa karıştırıcı bir ürünü ya da insanları yeniden sormaya geri gönderen bozuk bir süreç gibi başka bir yerdeki bir başarısızlığı gösterebilir. Çok düşük hacimli bir kalem, kataloğdan çıkarılmak için aday olabilir. Hacmi benimseme verisiyle karşılaştırın (bkz. Konu 6.3 “Hizmet benimsenmesi ve katalog metrikleri”).

**8. Otomasyon adaylarını hacme, kararlılığa ve eli değmiş süreye göre sıralayın.** En iyi ilk adaylar yüksek hacimli olanlar, nadiren değişenler ve fark edilir bir eli değmiş süre taşıyanlardır. Adımları zaten her seferinde aynı olan kalemle, örneğin standart bir gruba erişimle başlayın ve istisnalara dokunmadan önce adımları otomatikleştirin. İlerlemenin görünür olması için kalem başına otomasyon payını izleyin ve self servis ile yönlendirmeyle önleme sorularını kendi konusuna gönderin (bkz. Konu 3.7 “Self servis ve otomasyon metrikleri”).

**9. İnsan eklemeden önce onayları yeniden tasarlayın.** Onay beklemesi çoğu zaman geçen süreye egemendir. Her onay için politikanın bunu gerektirip gerektirmediğini, önceden onaylanmış standart bir talebin işi görüp görmeyeceğini ve onaylayanın tek bir kişi yerine bir vekili olan bir rol olup olamayacağını sorun. Düşük riskli, iyi anlaşılmış talepleri önceden onaylamak, değişiklik yetkilendirmedeki standart değişiklik fikrini yansıtır ve kontrolü kaldırmadan kuyrukları kaldırır.

### Sayıları dürüst tutun

**10. Hızı her seferinde kaliteyle eşleştirin.** Karşılama süresini aynı kalem için yeniden açılma oranı ve bir kullanıcı memnuniyeti sinyaliyle birlikte raporlayın (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”). Yeniden açılarak geri gelen daha hızlı bir talep göründüğünden daha yavaştır. Hız iyileşirken yeniden açılma oranı da yükseliyorsa, hız kazancını kanıtlanmamış sayın.

**11. Talepleri, olayları ve değişiklikleri verilerde ayrı tutun.** Onları karıştırmak üçünü de bozar. Aslında hatalı bir oturum açma hizmetinin belirtisi olan bir parola sıfırlama bir olaydır ve bir hizmetin çalışma biçimini değiştirme talebi bir değişikliktir. Girişte kısa bir kuralla sınıflandırın, yanlış sınıflandırılan kalemleri her çeyrek örnekleyin ve talep ve olay hacimlerini yan yana karşılaştırın (bkz. Konu 3.1 “Hizmet masası metrikleri”).

**12. Kalem tablosunu işi yapan takımla gözden geçirin.** Kalem başına tablonun çevresinde otuz dakikalığına aylık buluşun: hacim, ortanca ve 95. yüzdelik dilim, en eski açık talep, otomasyon payı, yeniden açılma oranı. Bir kalem ve denenecek bir değişiklik seçin ve ne olduğunu görmek için gelecek ay aynı tabloya bakın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruma metriği ya da uygulaması |
| --- | --- | --- |
| Talep karşılama süresi | Neden kullanıcı olsun olmasın saati “kullanıcı bekleniyor” için duraklatmak; talepleri teslimattan önce kapatıp yeni olarak yeniden açmak; bir talebi birkaç küçüğe bölmek | Duraklatma nedenlerinin örnek denetimiyle birlikte kalem başına duraklatılmış süre payı; yeniden açılma oranı; kapanıştan önce kullanıcının teslimatı onaylaması |
| Hedef içinde karşılama | Hedefi daha kolay olacak şekilde yeniden tanımlamak; yalnızca biten talepleri saymak ve eski açık olanları göz ardı etmek; hedef kümesi için hızlı kalemleri seçip ayıklamak | Açık talepler için birikim yaşı; hedeflerdeki değişikliklerin bir gerekçeyle metrik kayıt defterine kaydedilmesi; hedef kümesinin hacme göre tüm kalemleri kapsaması |
| Talep birikimi ve yaşı | Eski talepleri “yanıt yok” ya da “bayat” olarak kapatmak; talepleri sayılan kuyruktan çıksınlar diye farklı bir kuyruğa ya da kategoriye taşımak | Teslimat olmadan kapatılan taleplerin gerekçeye göre sayısı; kategori ve kuyruk aktarımlarının aylık toplantıda gözden geçirilmesi |
| Onay bekleme süresi | Onaylayanların kendi zamanlarını düşük tutmak için okumadan onaylaması; talep edenlerin kaydedilen bekleme kısa olsun diye onaylayanları sistemin dışında kovalaması | Onaylanan taleplerin politikaya karşı örnek gözden geçirmesi; onaylanan kalemler için yeniden açılma oranı ve güvenlik istisnaları; kalem başına onay adımı sayısı |
| Katalog kalemine göre talep hacmi | Kataloğu bulunması zor hale getirerek ya da talepleri caydırarak hacmi azaltmak; talepleri olay ya da “genel sorgu” olarak yeniden sınıflandırmak | Katalog için kullanıcı memnuniyeti; “diğer” olarak sınıflandırılan iletişimlerin payı; hizmet için benimseme verisi (bkz. Konu 6.3 “Hizmet benimsenmesi ve katalog metrikleri”) |
| Otomasyon payı | Yüzdeyi yükseltmek için önemsiz kalemleri otomatikleştirmek; bir kişinin hâlâ elle kontrol ettiği betiklenmiş bir talebi otomatik saymak; elle adımları ayrı bir talep kaydında gizlemek | Hacme ve kaldırılan eli değmiş süreye göre ağırlıklandırılmış pay; başarısız otomasyon ve elle geri dönme oranı; “otomatik” taleplerin uçtan uca izlenen örneklemi |
| Talep yeniden açılma oranı | Yeniden açmayı zorlaştırarak caydırmak; kullanıcılara yeni bir talep açmalarını söylemek ki bu sayacı sıfırlar | Aynı kullanıcıdan aynı kalem için pencere içinde gelen tekrar talepler; kalem bazında kullanıcı memnuniyeti; bildirimden yeniden açmaya izin verilmesi |

Sağlıklı bir okuma şöyle görünür. Ortanca ve 95. yüzdelik dilim birlikte düşer ya da ortanca sabit kalırken 95. yüzdelik dilim düşer. En eski açık talep, karşılanmışların 95. yüzdelik diliminden çok daha eski değildir. Hız iyileşirken yeniden açılma oranı ve memnuniyet sabit kalır ya da iyileşir. Otomasyon payı hacim açısından önemli olan kalemlerde yükselir ve hacmin kendisi takımın açıklayabileceği nedenlerle değişir. Bir sayı keskin biçimde iyileşirken koruma önlemi ters yönde sürükleniyorsa, gidin ve arkasındaki taleplere bakın.

## Ödünleşimler: artılar ve eksiler

| Seçim | Avantajlar | Dezavantajlar |
| --- | --- | --- |
| Kalem başına ölçüm | Hedefler işe uyar; yeniden tasarımın nerede karşılık verdiğini gösterir | Sürdürülecek daha fazla veri; küçük kalemlerin az veri noktası vardır |
| Ortalama yerine ortanca ve 95. yüzdelik dilim | Kullanıcıların yaşadığını anlatır; aykırı değerlere dayanıklı | Tek bir sayıya alışmış yöneticilere açıklaması daha zor; düşük hacimli kalemler için kararsız |
| Kullanıcıyı beklerken saati duraklatmak | Gecikmeye kullanıcı neden olduğunda takıma karşı adil | Kolayca kötüye kullanılır; belirsiz formların ve zayıf iletişimin etkisini gizler |
| Otomasyon payını saymak | Otomasyondaki ilerlemeyi görünür kılar ve maliyete bağlar | Kolay otomasyonları ödüllendirir; başarısızlık oranıyla eşleştirilmedikçe kalite hakkında hiçbir şey söylemez |
| Kullanıcı gönderiminden kullanıcı onayına kadar ölçmek | Müşterinin deneyimiyle örtüşür | Çoğu zaman eksik olan kullanıcı onayına bağlıdır; varsayılan bir kural gerektirir |
| Talepleri olaylardan kesin ayırmak | Daha temiz veri ve daha iyi hedefler | Giriş disiplini ve uç durumlar üzerine tartışmalar gerektirir |

Merkezî ödünleşim, temiz bir sayı ile adil bir sayı arasındadır. Hiç duraklamayan katı bir saat basittir ve manipüle etmesi zordur; yine de kullanıcı yavaş olduğunda takımı cezalandırır. Esnek bir saat daha adildir; yine de denetim gerektirir. Çoğu takım için katı başlamak, bir gerekçeyle bir açık duraklatılmış durum eklemek ve duraklatılmış payı açıkça raporlamak iyi sonuç verir.

## Takımınızla tartışılacak sorular

**1. Hangi üç katalog kalemi kullanıcılarımız için en çok beklemeye neden oluyor ve bunu nereden biliyoruz?**
Hacim, ortanca ve 95. yüzdelik dilim karşılama süresinin kalem başına tablosunu getirin. Gruptan kalemleri ne kadar can sıkıcı hissettirdiklerine göre değil, toplam beklemeye göre (hacim çarpı tipik bekleme) seçmesini isteyin. Yanıtı insanların ilk önsezisiyle karşılaştırın. Kolaylaştırıcı, veri ile önsezinin nerede farklılaştığını not etmelidir.

**2. Saatimiz ne zaman başlıyor ve duruyor ve bir kullanıcı buna katılır mı?**
Yaygın bir kalem seçin ve yolculuğunu kullanıcının gördüğü gibi, ilk tıklamadan sonucu kullanabildiği ana kadar izleyin. Talep kaydı durumumuzun “bitti” dediği yeri ve kullanıcının “bitti” diyeceği yeri işaretleyin. İkisi arasındaki her boşluk görünmez bekleme demektir. Bitiş olayında tek bir değişiklik üzerinde anlaşın ve bunu metrik kayıt defterine yazın.

**3. Geçen sürenin ne kadarı insanların çalışması ve ne kadarı beklemedir?**
Bir kalem için karşılanan on talepten bir örneklem alın ve her birini eli değmiş, onay ve kullanıcıyı bekleme süresine bölün. Sonucu yığılmış bir çubuk olarak gösterin. Beklemenin yarıya inmesi için neyin doğru olması gerektiğini sorun. Bu soru genellikle odayı “daha fazla personele ihtiyacımız var”dan “daha az devire ihtiyacımız var”a taşır.

**4. Hangi onaylar önceden kararlaştırılmış bir kuralla değiştirilebilir?**
En çok kullanılan kalemler için onayları ve her biri için politika nedenini listeleyin. Kimsenin son reddi hatırlayamadığı yerde onay bir ritüel olabilir.

**5. Bir sonraki katalog kalemini otomatikleştirsek sayı doğru nedenle mi yükselirdi?**
Otomasyon payının, kullanıcılar bir fark görmezken kolay ya da düşük hacimli kalemler yoluyla nasıl yükselebileceğini tartışın. Bir otomasyonun yardımcı olduğunu doğrulamak için takımın neyi ölçeceğini sorun: kaldırılan eli değmiş süre, başarısızlık oranı, yeniden açılma oranı ve memnuniyet. Bir sonraki otomatikleştirilecek kalemi yalnızca kolaylığa değil, hacme ve eli değmiş süreye göre seçmeye karar verin.

**6. Bu sayfadaki bir sayı kötüleşirse ne yapardık ve kim suçlanırdı?**
Düşünce deneyini açıkça yürütün. Takımın hizmeti değiştirmeden önce veride neyi değiştirmeye cazip olacağını sorun. Kötüleşen bir sayıya ilk yanıtın, arkasındaki taleplere bakmak olduğu üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Ürün takımları kendi hizmetleri hakkında talepler üretir: ortamlara erişim, yeni iş hatları, test verisi, lisans anahtarları. Bunlar için uzun karşılama süreleri, takımın kendi akışında boşta iş olarak görünür; bu yüzden ölçüm, onların panosunda engellenmiş bir durum olarak yer alır. Bir hizmetin sahibi olan takımlar kendi talep kalemlerini ve hedeflerini yayımlamalı ve tekrarlanan talepleri birikim listesi adayları olarak ele almalıdır (bkz. Konu 2.6 “Birikim listesi ve iyileştirme metrikleri”). Bir talep gerçekte eksik bir platform yeteneğiyse, tekrarlanan talep onu inşa etmenin gerekçesidir.

### Hizmet ve operasyon takımları

Talepleri karşılayan insanlar için kalem başına tablo, emeğin nereye gittiğinin bir haritasıdır. Hangi adımların elle yapıldığını, hangi onayların takıldığını ve hangi formların belirsiz girdi ürettiğini bilirler. Talep modellerinin, otomasyon birikim listesinin ve aylık gözden geçirmenin sahibi olmalı ve veri için ilk hedef kitle olmalıdırlar. Sayılar kuyruğu ve süreci tanımlar; bu yüzden hiç kimsenin sıralanmadığını ve insanlar arasındaki değişimin çoğunlukla üstlendikleri taleplerin karışımını yansıttığını açıkça belirtin.

### Liderlik ve yönetişim

Liderler kısa bir görünüme ihtiyaç duyar: ana kalemler için ortanca ve 95. yüzdelik dilim, hedef içinde karşılanan pay, en eski açık talepler ve otomasyon payının ve talep başına maliyetin eğilimi (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”). Yönetişim görevi kimin yavaş olduğunu değil, neyin değiştiğini sormaktır. Liderler ayrıca onayların politika tarafını da onaylar; yani beklemeyi en çok azaltan kaldıraca sahiptirler.

### Müşteriler ve kullanıcılar

Kullanıcılar üç şeyi önemser: ne kadar süre, ne kadar öngörülebilir ve ne kadar emek. Dahili durumları nadiren umursarlar. Onlara kalem başına sade bir hedef gösterin (“dizüstü bilgisayarlar beş iş gününde”), taleplerinin nerede olduğunu söyleyin ve teslimatı onaylamalarını isteyin. Kapanışta tek soruluk bir memnuniyet sinyali toplayın ve yorumları okuyun.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir üniversitenin BT departmanı (kurgusal bir kurum) bir hizmet masası ve küçük bir platform takımı işletir. Aşağıdaki sayılar örnek niteliğindedir, gerçek bir kurumdan gelmez.

Aylık gözden geçirmede takım kalem başına tabloya bakar. Tüm talepler genelinde ortalama karşılama süresi 3,1 iş günüdür; bu kabul edilebilir görünür ve bir yıldır neredeyse hiç hareket etmemiştir. Kaleme göre tablo farklıdır. “Ortak sürücü erişimi”nin ortancası 0,4 gün ve 95. yüzdelik dilimi 2 gündür. “Bölümsel yazılım lisansı”nın ortancası 2 gün ve 95. yüzdelik dilimi 11 gündür. “Yeni çalışan dizüstü bilgisayarı”nın ortancası 6 gün ve 95. yüzdelik dilimi 15 gündür. Hacme göre ilk üç kalem, tüm taleplerin örnek olarak yüzde 32, 21 ve 9'u paylarıyla ortak sürücü erişimi, lisans talepleri ve yeni çalışan dizüstü bilgisayarlarıdır.

Takım on dizüstü bilgisayar talebinden bir örneklem alır ve süreyi böler. Örnek sonuç: yaklaşık 0,5 gün eli değmiş iş, 2,5 gün bir hat yöneticisinin onayını beklemek, 1,5 gün stok onayını beklemek ve geri kalanı bir kurye kuyruğunda. Onay beklemesi en büyük parçadır.

Karar veriden çıkar. Takım, finans sahibi ve güvenlik sahibiyle birlikte, standart kataloğdaki dizüstü bilgisayarların, yeni çalışanın rolü insan kaynakları tarafından onaylandığında önceden onaylanmasını, yöneticiye sorulmak yerine bildirim yapılmasını önerir. Ayrıca stok kontrolünü envanter sistemine bağlarlar. Deneyi bir çeyrek için belirlerler ve neyin başarı sayılacağı üzerinde anlaşırlar: dizüstü bilgisayarlar için 95. yüzdelik dilim düşer ve yeniden açılma oranı ile memnuniyet puanı aynı düzeyde kalır.

Bir manipülasyon riski ikinci ayda ortaya çıkar. Lisanslar için ortanca 2 günden 1 günün altına keskin biçimde düşer. Gözden geçirme, kalem için “kullanıcı bekleniyor” duraklatılmış süre payının örnek olarak yüzde 5'ten yüzde 40'a sıçradığını ve yeniden açılma oranının yükseldiğini fark eder. Bir örneklem, temsilcilerin bir lisans herhangi bir kontrol gerektirdiği anda talepleri genel bir iletiyle duraklattığını ve bunun saati durdurduğunu gösterir. Takım temsilcileri suçlamaz. Hedefin duraklatmayı cazip kıldığını ve duraklatma nedeni alanının serbest metin olduğunu görürler. Duraklatma nedenini kısa bir listeye çevirirler, kullanıcıya belirli bir soru sorulmasını zorunlu kılarlar ve ortancanın yanına kalıcı bir sütun olarak duraklatılmış süre payını eklerler. Lisans ortancası önceki düzeyine yakın bir değere döner, yeniden açılma oranı düşer ve takım, tasarruf ettiği tartışma süresini belirsiz talepleri üreten lisans formunu yeniden tasarlamak için kullanır.

Çeyrekten sonra (örnek), dizüstü bilgisayar 95. yüzdelik dilimi 15 günden 9 güne düşer ve ortak sürücü erişimi için otomasyon payı yüzde 70'e ulaşır. Takım her iki değişikliği de kaydeder ve bir sonraki deney olarak lisans formunu seçer.

## Sektör mercekleri

**Girişim.** Bir girişimin az talep türü vardır ve resmi bir kataloğu yoktur; aynı insanlar talepleri karşılar ve ürünü geliştirir. Yeni katılanları engelleyen üç ya da dört talebi, hesaplar ve ekipman gibi, ölçün ve en eski açık talebi izleyin. İşe alıma katılımı erken otomatikleştirin; çünkü her işe alım onu tekrarlar.

**Küçük işletme.** Küçük bir işletme çoğu zaman bir BT kişisine ya da dış bir sağlayıcıya dayanır. Her durum için bir sütunu olan basit bir ortak pano kullanın ve talep yaşını ve türe göre hacmi izleyin. Sağlayıcıdan kaleme göre aylık hacmi ve en eski açık talebi isteyin.

**Büyük kurum.** Büyük bir kurumun yüzlerce katalog kalemi, birçok karşılama grubu ve katmanlı onayları vardır. Hacme göre ilk kalemlere ve toplam beklemeye göre en uzun bekleyen kalemlere odaklanın. Karşılama gruplarını karşılaştırmadan önce saat tanımını onlar arasında standartlaştırın ve gruplar arası devirleri ayrı raporlayın (bkz. Konu 9.3 “İş birliği ve devir teslim metrikleri”). Tedarikçi karşılama süreleri aynı görünüme aittir; tedarikçinin teslim almasından değil, müşterinin talebinden ölçülürler.

**Devlet ve kamu sektörü.** Kamu kurumları zorunlu onaylar, satın alma kuralları ve kayıt yükümlülükleri ekler; bu yüzden bazı bekleme süreleri politikadır ve kaldırılacak gecikme olarak sayılmak yerine bu şekilde etiketlenmelidir. Hizmet taahhütleri kamuya açıksa, hedefleri kalem başına sade bir dille yayımlayın. Bir düzenleyicinin ya da bir gözetim kuruluşunun yeniden üretebileceği biçimde, tanımlar yazılı olarak raporlayın.

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Talepler, bir hizmet masasına ulaşan işin büyük ve tekrarlayan bir payıdır; bu yüzden mütevazı bir yeniden tasarım bile geniş bir etki yapar. Ana motivasyonlar kullanıcılar için daha kısa ve daha öngörülebilir beklemeler, talep başına daha düşük ele alma emeği, daha az tekrar iletişim ve sorun ve iyileştirme çalışması için serbest bırakılan kapasitedir.

Maliyet tarafı çoğunlukla tek seferlik ve mütevazıdır. Katalog kalemlerini tanımlamak, saatler üzerinde anlaşmak ve aracın gereken durumları kaydettiğinden emin olmak, grup başına birkaç günlük bir iştir; buna iş hattını doğru tutmak için küçük bir süregiden emek eklenir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”). Otomasyonun kendi geliştirme ve bakım maliyeti vardır; bu maliyet otomasyonları izlemeyi, başarısızlıkları ele almayı ve hedef sistemler değiştiğinde onları güncellemeyi içerir. Bunu, lisansın ya da geliştirme süresinin ötesinde toplam sahip olma maliyetine sayın.

Getiri genel bir kıyaslamadan değil, kendi verinizden tahmin edilmelidir. Bir kalem için aylık hacmi, tasarruf edilen eli değmiş süreyle ve sürenin yüklenmiş maliyetiyle çarpın, sonra değişikliğin geliştirme ve işletme maliyetini çıkarın. Kullanıcılar için kaldırılan bekleme süresinin değerini savunabileceğiniz bir yöntemle ekleyin ve farklı türden bir tahmin olduğu için ayrı gösterin. Bu konudaki hiçbir rakam bir kıyaslama değildir ve örnek sayılar örnek niteliğindedir. Finans verisi varsa iş gerekçesini talep başına birim maliyete bağlayın (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Tüm talepler için tek bir karışık ortalama.** Hem hızlı kazanımları hem de uzun kuyruğu gizler. Kalem başına, bir ortanca ve bir 95. yüzdelik dilimle raporlayın.
- **Talep kaydını kapatıp teslim edildi demek.** Kullanıcının hâlâ hiçbir şeyi olmayabilir. Teslimatı kullanıcı tarafından tanımlayın ve onay isteyin.
- **Serbest biçimli duraklatma durumları.** Gerekçesiz bir “bekliyor” durumu saatin her neden için durdurulmasına izin verir. Kısa bir gerekçe listesi kullanın ve duraklatılmış payı raporlayın.
- **Otomasyonu kalem sayısına göre saymak.** On otomatikleştirilmiş nadir kalem, kimseye yardım etmeden yüzdeyi yükseltebilir. Hacme ve eli değmiş süreye göre ağırlıklandırın.
- **Temsilcileri kapattıkları taleplere göre sıralamak.** Kolay talep kaydı seçip ayıklamayı ödüllendirir ve zor olanları alan insanları cezalandırır. Yalnızca takım ve kalem düzeyinde raporlayın.
- **Verimli görünmek için talebi gizlemek.** Kataloğu kullanımı zor hale getirmek hacmi düşürür ve hayal kırıklığını artırır. Hacmi memnuniyet ve benimseme verisiyle eşleştirin.
- **Onayları dokunulmaz saymak.** Onaylar çoğu zaman en büyük gecikmedir ve nadiren gözden geçirilir. Her birinin neyi koruduğunu ve bir kuralın işi yapıp yapamayacağını sorun.
- **Talepleri olaylarla karıştırmak.** İki sayı kümesini de bozar. Girişte sınıflandırın ve sınıflandırmayı örnekleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve saatler | Talepler talep kaydı olarak sayılır; saatin sonu “kapalı”nın ne anlama geldiğidir | Bazı takımlar kalem başına başlangıç ve bitişi tanımlar; tanımlar farklıdır | Takımlar arasında paylaşılan, katalog kalemi başına tek bir yazılı saat tanımı | Tanımlar düzenli aralıklarla gözden geçirilir ve değişiklikler gerekçeleriyle kaydedilir | Tanımlar tedarikçiler arasında müşterinin görüşünü izler ve kararlara bilgi vermeyi bıraktıklarında yeniden düzenlenir |
| Veri ve raporlama | Sayılar araçtan elle çekilir | Bazı kalemler için ITSM aracından raporlar; ortalama süreler | Tek bir veri kaynağından kalem başına ortanca ve 95. yüzdelik dilim | Eğilimler, birikim yaşı ve duraklatılmış süre payı koruma önlemleriyle gözden geçirilir | Dahili takımlardan ve tedarikçilerden gelen karşılama verisi birleştirilir ve kullanıcı sonuçlarına bağlanır |
| Talep ve otomasyon | Talepler tek tek ele alınır; tekrarlayan talebe bakış yoktur | İlk kalemler gayriresmî olarak belirlenir; birkaç betik | İlk kalemler için belgelenmiş talep modelleri; hacme ve eli değmiş süreye göre sıralanmış otomasyon birikim listesi | Otomasyon payı ve başarısızlık oranı izlenir; onaylar kanıta dayanarak yeniden tasarlanır | Talep, self servis ve otomasyon kurum genelinde birlikte planlanır ve sürekli uyarlanır |
| İyileştirmede kullanım | Sayılar yukarıya raporlanır, kullanılmaz | Şikayetlerden sonra ara sıra düzeltmeler | İşi yapan takım tarafından aylık gözden geçirme | Kalem başına sonuçlara bağlı fonlanan iyileştirmeler | İyileştirme fikirleri takımlardan, kullanıcılardan ve tedarikçilerden gelir ve sonuçlar katalog tasarımına geri beslenir |

## Kontrol listesi

- [ ] Kapsamdaki her katalog kaleminin bir sahibi, “teslim edildi”nin tek satırlık bir tanımı ve belirtilmiş bir hedefi var.
- [ ] Karşılama saatinin başlangıç ve bitiş olayları her kalem için yazılı.
- [ ] Kullanıcıyı beklemek, kısa bir gerekçe listesiyle ayrı bir durumdur ve duraklatılmış süre raporlanıyor.
- [ ] Raporlar, her birinin arkasındaki talep sayısıyla birlikte kalem başına ortancayı ve 95. yüzdelik dilimi gösteriyor.
- [ ] En eski açık talepler her hafta takıma görünür.
- [ ] İlk kalemler için eli değmiş, onay ve bekleme süresi örneklenmiş.
- [ ] Kaleme göre hacim aylık gözden geçiriliyor ve benimseme ya da memnuniyet verisiyle karşılaştırılıyor.
- [ ] Otomasyon payı hacme göre ağırlıklandırılmış ve başarısızlık ile geri dönüş oranlarıyla eşleştirilmiş.
- [ ] Her hız metriği, yeniden açılma oranı ve bir kullanıcı memnuniyeti sinyaliyle eşleştirilmiş.
- [ ] Talepler, olaylar ve değişiklikler girişte sınıflandırılıyor ve sınıflandırma örnekleniyor.
- [ ] Hiçbir rapor bireysel temsilcileri sıralamıyor.

## Yapay zekâ istemleri

**Tek bir katalog kalemi için bir talep modeli ve saat tanımı taslağı hazırlayın.**

```text
Şu katalog kalemi için ölçümü tanımlıyorum: [katalog kalemi adı]. Bugünkü
adımlar [adımları ve her birini kimin yaptığını listeleyin], onaylar [onayları
listeleyin] ve aracımız [ITSM aracı]. Gereken bilgi, karşılama saatinin
başlangıç ve bitiş olayları, saatin duraklatılabileceği durumlar ve izin verilen
gerekçeler ve aracın kaydetmesini istediğim zaman damgalarının bir listesiyle bir
talep modeli taslağı hazırla. Kıyaslama değerleri ya da araç özellikleri
uydurma. Varsayımlarını ve tanımı bitirmek için yanıtlamam gereken soruları
listele.
```

**Geçen süreyi eli değmiş ve bekleme süresine bölün.**

```text
İşte [katalog kalemi] için durum değişikliği zamanlarıyla karşılanmış [sayı]
talebin bir örneklemi: [anonimleştirilmiş durum geçmişini yapıştırın, isim yok].
Her talep ve örneklem için eli değmiş süreyi, onay beklemesini ve kullanıcıyı
bekleme süresini hesapla ve ortancayı ve aralığı göster. En çok zamanı hangi
durumun tuttuğunu ve bu konuda takıma hangi soruları sormam gerektiğini belirt.
Kanıt olmadan neden çıkarsama ve bireysel insanları karşılaştırma. Varsayımlarını
listele.
```

**Otomasyon adaylarını sıralayın.**

```text
İşte aylık hacmi, ortanca eli değmiş süresi, adımlardaki değişimi ve her birinin
dokunduğu sistemleri olan katalog kalemlerinin bir tablosu: [tabloyu yapıştırın].
Hacmi, kararlılığı ve eli değmiş süreyi kullanarak otomasyon adaylarını
sıralamanın bir yolunu öner ve ilk [sayı] kalem için sıralamayı açıkla.
Otomasyonun güvenlik ya da kalite riski yaratabileceği kalemleri işaretle ve
önce [kontrol sahibi rolü] ile neyi doğrulamam gerektiğini listele. Tasarruf
rakamları ya da kıyaslama değerleri uydurma. Varsayımlarını listele.
```

**Bir karşılama panosunu manipülasyon riski açısından gözden geçirin.**

```text
Bu bizim talep karşılama panomuz: [metrikleri, tanımları ve hedefleri anlatın].
Her metrik için nasıl manipüle edilebileceğini ya da yanlış okunabileceğini,
verideki gözlemlenebilir işareti ve eşleştirilmiş bir koruma metriğini ya da
uygulamasını listele. Hiçbir şeyin bireyleri sıralamadığını kontrol et ve
takım üzerindeki baskıyı azaltan ifade değişiklikleri öner. Eşik uydurma;
ihtiyacın olanları benden iste. Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir talep metriğinin tanımını, manipülasyon vektörünü ve koruma önlemini ve onunla eşleşen komşu konuları bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konuda yapılan düzenlemelerin şablonu, saatleri ve koruma önlemi eşleştirmelerini bozulmadan tutup tutmadığını kontrol etmek için kullanın.

## Temel çıkarımlar

- Karşılamayı katalog kalemi başına, kullanıcının gönderiminden kullanıcının onayına kadar ölçün ve ortancayı ve yüksek bir yüzdelik dilimi raporlayın.
- Geçen sürenin çoğu beklemedir; bu yüzden neyin düzeltileceğine karar vermeden önce eli değmiş, onay ve kullanıcıyı bekleme süresini bölün.
- Kaleme göre hacmi kullanıcılardan gelen bir ileti olarak okuyun ve önce sık ve kararlı kalemleri otomatikleştirin.
- Her hız sayısını yeniden açılma oranı ve bir memnuniyet sinyaliyle eşleştirin ve duraklatılmış süreyi açıkça raporlayın.
- Kuyruğu ve süreci tanımlayın, kişiyi asla.

## Kaynaklar ve ileri okuma

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
