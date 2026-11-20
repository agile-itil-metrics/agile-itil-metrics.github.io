# Self servis ve otomasyon metrikleri

**Self servisi, insanların yardım almadan ihtiyaç duyduklarını elde edip etmediğine göre; otomasyonu ise ortadan kaldırdığı işe ve yarattığı başarısızlıklara göre ölçün. Çünkü hiç gelmeyen bir iletişim, ancak sorun çözülmüşse bir başarıdır.**

## Genel bakış ve motivasyon

Self servis ve otomasyon, bir hizmet kurumunun rutin işi insanların üzerinden alma biçimindeki iki ana yoldur. [Self servis](https://en.wikipedia.org/wiki/Self-service_software), bir kullanıcının bir portal, bir bilgi makalesi, bir parola sıfırlama sayfası ya da bir [sohbet botu](https://en.wikipedia.org/wiki/Chatbot) aracılığıyla bir sorunu tek başına çözmesine ya da bir şey elde etmesine olanak tanır. [Otomasyon](https://en.wikipedia.org/wiki/Automation), bir sistemin eskiden bir kişinin yaptığı adımları, bir hesap oluşturmak, bir hizmeti yeniden başlatmak ya da bir izleme aracı kurtarmayı doğruladığında bir talep kaydını kapatmak gibi, yürütmesine olanak tanır. İkisi de aynı sonucu hedefler: insanlar için daha az tekrarlayan görev, kullanıcılar için daha hızlı sonuçlar ve yargı gerektiren işe daha fazla zaman.

Fikirler her iki geleneğe de eşlenir. [ITIL](https://en.wikipedia.org/wiki/ITIL) 4'te hizmet talebi yönetimi uygulaması, iyi anlaşılmış, tekrarlanabilir taleplerin standart akışlarla ve makul olduğu kadar otomasyonla ele alınmasını bekler; olay yönetimi ve bilgi yönetimi uygulamaları ise iyi bilginin kullanıcılara ve destek personeline mümkün olan en erken yararlı noktada sunulabilir olmasını bekler. Çevik ve DevOps uygulaması aynı yere başka bir yoldan ulaşır: [kod olarak altyapı](https://en.wikipedia.org/wiki/Infrastructure_as_code), iş hatları ve Google site güvenilirliği mühendisliği kitaplarının hizmetle birlikte büyüyen elle yapılan, tekrarlayan, otomatikleştirilebilir iş olarak tanımladığı angaryayı ortadan kaldırma disiplini. Ortak fikre çoğu zaman “sola kaydırma” (shift left) denir: bir sorunun çözümünü kullanıcıya doğru ya da destek zincirindeki en ucuz ve en erken noktaya doğru, uzman kuyruğundan uzağa taşımak.

Sola kaydırma dili bir ölçüm hatasını davet eder. Takımlar kaçınılan bir iletişimin ucuz olduğunu görür ve ardından kaçınılan iletişimleri başarı olarak sayar. Sayıyı üretmek kolaydır; çünkü talep kaydıyla sonuçlanmayan bir portal ziyareti, kullanıcının pes ettiği bir portal ziyaretiyle aynı görünür. Bu nedenle bu konu kullanıcının sonucundan başlar. Self servis başarısının ne anlama geldiğini, terkin kredisini almadan yönlendirmeyle önlemenin (deflection) nasıl tahmin edileceğini, otomasyon kapsamının ve güvenilirliğinin nasıl ölçüleceğini ve sola kaydırmanın hacim ve karmaşıklık üzerindeki etkisinin nasıl görüleceğini tanımlar. İlgili hacim ve öncelik ölçümleri Konu 3.2'dedir (bkz. Konu 3.2 “Olay hacmi ve önceliği”), talep tarafı Konu 3.5'tedir (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”) ve bilgi tarafı Konu 3.6'dadır (bkz. Konu 3.6 “Bilgi yönetimi metrikleri”).

Bu konuda kullanılan terimler:

- **Seviye 0 (ya da self servis katmanı)**: kullanıcının personelle iletişime geçmeden çözümü. Seviye 1 destekin ilk hattıdır, genellikle hizmet masasıdır; seviye 2 ve 3 uzman ve mühendislik katmanlarıdır.
- **Yönlendirmeyle önleme (deflection)**: aksi halde personele ulaşacak olan ve bunun yerine seviye 0'da çözülen bir iletişim. Doğrudan gözlemlenemez, bu yüzden her zaman bir tahmindir.
- **Düşme (fall-through)**: self servisi deneyen, başarılı olamayan ve ardından aynı ihtiyaç hakkında personelle iletişime geçen bir kullanıcı.
- **Çalışma kitabı (runbook)**: rutin bir operasyonel görev için belgelenmiş bir prosedür. Bir [çalışma kitabı](https://en.wikipedia.org/wiki/Runbook), onu otomatikleştirmenin olağan ilk adımıdır.
- **Angarya (toil)**: kalıcı bir değeri olmayan, elle yapılan, tekrarlayan, otomatikleştirilebilir iş (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”).
- **Hizmet kataloğu**: kullanıcılara sunulan hizmetlerin ve standart taleplerin listesi. ITIL buna “service catalogue” der.

## Temel ilkeler

- **Kaçınılan iletişimleri değil, sonuçları sayın.** Talep kaydı olmayan bir portal oturumu, yalnızca kullanıcının ihtiyacı karşılandığında bir başarıdır. Başarıyı kullanıcı tarafından tanımlayın ve bir takip sinyaliyle doğrulayın.
- **Yönlendirmeyle önleme bir tahmindir, bu yüzden öyle etiketleyin.** Yöntemi, kullanılan karşılaştırmayı ve belirsizliği belirtin. Tahmini bir yönlendirmeyle önleme rakamını asla ölçülmüş bir olgu olarak sunmayın.
- **Düşme yolunu ölçün.** Başarısız bir self servis girişiminden personelli bir iletişime giden yol, gizli başarısızlığın çoğunun yaşadığı yerdir. Bunu her başarı sayısının yanında raporlayın.
- **Otomasyonun bir maliyet tarafı vardır.** Her otomatikleştirilmiş akış bakıma, izlemeye ve güvenli biçimde başarısız olmanın bir yoluna ihtiyaç duyar. Kapsamı ve güvenilirliği birlikte ölçün ve otomasyonu canlı tutmaya harcanan emeği sayın.
- **Sola kaydırma hacmi olduğu kadar karışımı da değiştirir.** Kolay iş kuyruktan çıktığında, kalan iş ortalamada daha zor ve daha yavaştır. Çözüm süresini ve ele alma süresini bunu akılda tutarak okuyun (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).
- **Metrikler hizmetleri ve akışları tanımlar.** Katalog kalemine, makale ailesine ya da otomasyon akışına göre raporlayın. Temsilcileri kaç kullanıcıyı self servise ittiklerine göre asla sıralamayın.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Self servis başarı oranı | Kullanıcının ihtiyacının personelle iletişim olmadan karşılandığı self servis oturumlarının payı | Tamamlanmış bir sonuçla biten (talep gönderildi ve karşılandı, makale faydalı işaretlendi, sıfırlama tamamlandı) ve 7 gün içinde aynı ihtiyaç hakkında personelli bir iletişim olmayan oturumlar, bir görevi başlatan tüm oturumlara bölünür. Saat portaldaki ilk anlamlı eylemde başlar, tamamlanmada ya da terkte durur. Bot trafiği, test hesapları ve salt gezinme hariç tutulur | Yüzde | Portal ve kimlik günlükleri, talep kaydı sistemi, oturum analitiği | Hizmet talebi yönetimi; bilgi yönetimi | Müşteri geri bildirim döngüsü; sonuç tabanlı kabul ölçütleri | Aylık |
| Tahmini yönlendirmeyle önleme oranı | Aksi halde personele ulaşacak olan ve seviye 0'da çözülen talebin tahmini payı | Bir hizmet için self servis değişikliğinden önce ve sonra ya da bir kontrol grubuna karşı, bilinen talep kaymaları için düzeltilmiş olarak, 1.000 etkin kullanıcı başına iletişim oranını karşılaştırın. Yöntem adlandırılarak bir tahmin olarak belirtilir. Başka bir kanala geçen iletişimler hariç tutulur | Yüzde (tahmin) | Talep kaydı sistemi, kullanıcı nüfusu sayıları, deney ya da kohort verisi | Hizmet masası; olay yönetimi | Kontrol gruplu deney; A/B testi | Üç aylık |
| Düşme oranı | Başarısız self servis girişimlerinin aynı ihtiyaç hakkında personelli bir iletişimle biten payı | Aynı kullanıcının aynı konuda terk ettiği ya da başarısız olduğu bir self servis oturumundan sonraki 7 gün içinde açılan personelli iletişimler, başarısız oturumlara bölünür. Saat oturumun bitişinde başlar. İlgisiz iletişimler hariç tutulur | Yüzde | Kullanıcı ve konu üzerinden talep kaydı sistemine bağlanan portal günlükleri | Hizmet masası; bilgi yönetimi | Tamamlanma tanımında yükseltme yolu; destekten geri bildirim | Aylık |
| Self servis benimsenmesi (önce portal payı) | Self servis kanalları üzerinden açılan uygun taleplerin ve olay bildirimlerinin payı | Portal, bot ya da API üzerinden oluşturulan kalemler, bir self servis yolu sunan katalog girişleri için tüm kalemlere bölünür. Hiçbir self servis yolu olmayan kalemler hariç tutulur | Yüzde | Talep kaydı sistemi kanal alanı, katalog yapılandırması | Hizmet talebi yönetimi; hizmet kataloğu yönetimi | Bir yayından sonra benimseme takibi | Aylık |
| Otomasyon kapsamı | Hiçbir elle adım olmadan otomasyonla tamamlanan uygun tekrarlanabilir işin payı | Otomatikleştirilmiş bir akışla uçtan uca tamamlanan kalemler, otomatikleştirilebilir sayılan türlerin tüm kalemlerine bölünür. Bir tür yalnızca yazılı bir aday listesi onu adlandırırsa otomatikleştirilebilir sayılır. Tek seferlik iş ve otomasyonun reddettiği kalemler hariç tutulur | Yüzde | Talep kaydı sistemi, otomasyon platformu günlükleri, aday listesi | Hizmet talebi yönetimi; dağıtım yönetimi | Tamamlanma tanımının otomasyonu; kod olarak iş hattı | Aylık |
| Otomasyon başarısızlık ve yeniden iş oranı | Başarısız olan, elle onarım gerektiren ya da sonucu sonradan düzeltilen otomatik çalıştırmaların payı | Hata veren, geri alınan ya da 7 gün içinde elle bir düzeltmeyle izlenen otomatik çalıştırmalar, tüm otomatik çalıştırmalara bölünür. Saat çalıştırma başlangıcında başlar. Planlı deneme çalıştırmaları hariç tutulur | Yüzde | Otomasyon platformu günlükleri, talep kaydı sistemi, değişiklik kayıtları | Değişiklik yetkilendirme; olay yönetimi | Değişiklik başarısızlık oranı; derleme ve test kararlılığı | Haftalık |
| Talep türü başına elle dokunma süresi | Otomasyon için aday olan bir talep türüne harcanan personel emeği | Dönemde türün kalemleri üzerinde personel tarafından kaydedilen eli değmiş dakikalar, kalem başına ortanca ve 85. yüzdelik dilim olarak özetlenir. Zamanın kaydedilmediği yerlerde örneklemeyle tahmin edilir. Bekleme süresi hariç tutulur | Kalem başına dakika | Zaman örnekleme, talep kaydı iş günlükleri | Hizmet talebi yönetimi | Angarya takibi; değer akışı israfı | Üç aylık |
| Seviye dağılımı (sola kaydırma payı) | Kalemlerin destek zincirinde nerede çözüldüğü | Her seviyede (0, 1, 2, 3) çözülen kalemler, dönemdeki tüm çözülen kalemlere bölünür. Seviye, eli değmiş iş yapan en yüksek katmandır. Triyajdan önce iptal edilen kalemler hariç tutulur | Seviyeye göre yüzde | Talep kaydı sistemi çözümleyici grup ve atama geçmişi | Olay yönetimi; hizmet masası | Sürü halinde çalışma ve yükseltme örüntüleri; çapraz işlevli takımlar | Aylık |

Bunların hepsi hizmet, katalog kalemi ya da akış başına ölçülür, asla kişi başına değil. Süre ölçümleri, istatistik okuryazarlığı konusunun girişinin açıkladığı gibi ortanca artı yüksek bir yüzdelik dilim olarak gösterilmelidir (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

## Öneriler

### Başarıyı kullanıcı tarafından tanımlayın

**1. Her self servis yolu için “ihtiyacımı elde ettim”in ne anlama geldiğini yazın.** Bir parola sıfırlama için bu, tamamlanmış bir sıfırlama ve başarılı bir oturum açmadır. Bir talep için gönderim değil, karşılamadır. Bir makale için aynı ihtiyaç hakkında personelle yeniden iletişime geçmeyen bir kullanıcıdır. “Sayfayı görüntüledi”de duran bir tanım trafiği ölçer.

**2. Self servis oturumlarını sonraki iletişimlere bağlayın.** Başarısızlığın en güçlü kanıtı, bir oturumdan kısa süre sonra aynı konuda yapılan personelli bir iletişimdir. Gizlilik kuralları izin verdiği yerde ikisini kullanıcı ve konu üzerinden bağlayın; vermediği yerde konu ve güne göre toplu sayıları kullanın. Bağlama, belirsiz bir memnuniyet hikâyesini iyileştirebileceğiniz bir düşme oranına dönüştürür.

**3. Çıkış noktasında kullanıcılara tek bir soru sorun.** “Bu sorununuzu çözdü mü?” gibi tek soruluk bir istem, günlüklerin sağlayamayacağı doğrudan bir sinyal verir. Yanıtları bir örneklem olarak ele alın, serbest metin yorumlarını okuyun ve en memnun kullanıcılar sonucu tanımlamasın diye yanıt verenleri yanıt vermeyenlerle karşılaştırın (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

### Yönlendirmeyle önlemeyi dürüstçe tahmin edin

**4. Sayaç yerine bir karşılaştırmayı tercih edin.** En temiz tahmin, bir kontrol grubundan (holdout), aşamalı bir devreye almadan ya da etkilenen hizmet için 1.000 etkin kullanıcı başına iletişimlerin öncesi ve sonrası görünümünden gelir. “Talep kaydına dönüşmeyen oturumları” saymak etkiyi olduğundan büyük gösterir; çünkü bu kullanıcıların çoğunun personelin göreceği bir ihtiyacı hiç yoktu. Yöntemi ve belirsizliği rakamın yanında belirtin.

**5. Hacmi kullanıma göre normalleştirin.** Talep kaydı sayısındaki bir düşüş, kullanıcılardaki bir düşüşü, sakin bir yayın döngüsünü ya da mevsimsel bir değişikliği izleyebilir. Sonuç çıkarmadan önce etkin kullanıcılara ya da işlemlere bölün (bkz. Konu 3.2 “Olay hacmi ve önceliği”). Grafiği yayınlar, kampanyalar ve portal değişiklikleriyle işaretleyin.

**6. Yönlendirmeyle önlemeyi hedeflerin dışında tutun.** Yönlendirmeyle önleme hedefi, iletişim yolunu gizlemeyi, telefon numarasını gömmeyi ve sohbet oturumlarını erken kapatmayı ödüllendirir. Yönlendirmeyle önlemeyi bir öğrenme tahmini olarak kullanın ve hedefi self servis başarı oranı ve en eski çözülmemiş kalem gibi kullanıcı sonuçlarına koyun.

### Otomasyonu bir proje olarak değil, bir ürün olarak ölçün

**7. Bir aday listesi tutun ve kapsamı ona karşı ölçün.** “Tüm iş”in kapsamı zayıf bir ölçümdür; çünkü işin çoğu otomatikleştirilebilir değildir. Tekrarlanabilir, iyi anlaşılmış ve sık olan talep ve olay türlerinin kısa, yazılı bir listesini tutun, bunu elle dokunma süresine ve hacme göre sıralayın ve kapsamı o listeye karşı raporlayın. Payda dürüst olsun diye listeyi her çeyrek gözden geçirin.

**8. Kapsamı güvenilirlikle eşleştirin.** Her on çalıştırmanın birinde başarısız olan ya da sessizce yanlış sonuç üreten otomatikleştirilmiş bir akış, yerini aldığı elle yapılan görevden daha pahalıya mal olabilir. Başarısızlık ve yeniden iş oranını, başarısız bir çalıştırmayı tespit etme süresini ve bir kişinin sonucu ne sıklıkla onarması gerektiğini izleyin. Site güvenilirliği mühendisliği topluluğunun anlattığı hata ele alma uygulamalarını kullanın: eşgüçlü (idempotent) adımlar, net uyarılar ve güvenli bir elle geri dönüş (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”).

**9. Bakımı sayın.** Otomasyonların sahiplere, sürüm kontrolüne, testlere ve çevrelerindeki sistemler değiştiğinde güncellemelere ihtiyacı vardır. Her akışı sürdürmeye harcanan zamanı kaydedin ve kaldırdığı elle dokunma süresiyle karşılaştırın. Çalışır halde tutması, tasarruf ettiğinden daha pahalıya mal olan bir otomasyon, emekliye ayrılmak için bir adaydır; bu bir başarısızlık değil, normal bir sonuçtur.

### Sola kaydırma etkisini izleyin

**10. Kalan işin daha zor olmasını bekleyin.** Rutin iletişimler hizmet masasından çıktığında, hizmet daha iyi olsa bile ortalama ele alma süresi ve seviye 1'de ilk temasta çözüm çoğu zaman kötüleşir. Seviye dağılımını ve kategori karışımını bu ölçümlerin yanında raporlayın ve başarılı bir yönlendirmeyle önlemeden sonra ele alma süresindeki bir artışın beklendiği konusunda liderlikle önceden anlaşın (bkz. Konu 3.1 “Hizmet masası metrikleri”).

**11. Döngüyü bilgiye ve sorun yönetimine kapatın.** Her düşme, eksik ya da zayıf bir makalenin, kafa karıştırıcı bir formun ya da düzeltilmemiş bir kusurun kanıtıdır. En çok düşme konularını bilgi sahiplerine ve neden bir kusursa sorun yönetimine yönlendirin (bkz. Konu 4.1 “Sorun yönetimi metrikleri”). Listeyi aylık gözden geçirin ve kaç kalemin düzeltildiğini raporlayın.

**12. Serbest bıraktığınız kapasiteyi paylaşın.** Otomasyon ve self servis işi ortadan kaldırıyorsa, serbest kalan zamanın neyi satın aldığına karar verin: iyileştirme çalışması, proaktif düzeltmeler ya da eğitim. Otomasyondan hiçbir yarar görmeyen takımlar onu önermeyi bırakır. İyileştirme için planlanmış kapasite payını zaman içinde izleyin (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruma metriği ya da uygulaması |
| --- | --- | --- |
| Self servis başarı oranı | Tamamlanmış herhangi bir formu ya da herhangi bir sayfa görüntülemesini başarı saymak; puanlar düştüğünde “bu yardımcı oldu mu” istemini kaldırmak; zor konuları paydadan hariç tutmak | Düşme oranı ve bir kişi tarafından okunan kapatılmış oturumların örneklemesi; payda kurallarını raporlayın |
| Tahmini yönlendirmeyle önleme oranı | İletişim yolunu gizlemek; iletişimden önce adımlar eklemek; nedenden bağımsız olarak daha az olan her talep kaydını yönlendirmeyle önleme olarak sınıflandırmak | 1.000 etkin kullanıcı başına iletişim, etkilenen hizmette kullanıcı memnuniyeti ve rakamın yanında yazılı yöntem |
| Düşme oranı | Eşleştirme penceresini, geri dönüşler dışarıda kalacak kadar kısa tanımlamak; takip iletişimini yinelenen olarak kapatmak | Tüm kanallar arasında tekrar iletişim oranı; geri dönen iletişimlerin bir örneklemesinin gözden geçirilmesi |
| Self servis benimsenmesi (önce portal payı) | Uygunluğa bakmadan tüm talepleri portala zorlamak; telefonla oluşturulan talep kayıtlarını portal talep kayıtları olarak yeniden etiketlemek | Self servis başarı oranı ve kullanıcı emeği; çalışabilir bir portal yolu olmayan taleplerin payı |
| Otomasyon kapsamı | Aday listesi için kolay kalemleri seçmek; paydayı önemsiz görevlerle büyütmek; kısmen elle yapılan akışları otomatikleştirilmiş saymak | Her çeyrek gözden geçirilen yazılı aday listesi; otomasyon başarısızlık ve yeniden iş oranı; kalan kalemlerin elle dokunma süresi |
| Otomasyon başarısızlık ve yeniden iş oranı | Elle onarımları sayımın dışında bırakmak; başarısız çalıştırmaların başarılı olana kadar sessizce yeniden denenmesine izin vermek; başarısızlıkları “planlı deneme çalıştırması” olarak etiketlemek | Akışlara bağlı olay ve uyarı kayıtları; başarısız bir çalıştırmayı tespit etme süresi; sonuçların örneklenmiş denetimi |
| Talep türü başına elle dokunma süresi | Elle görünen kalemler için zamanı kaydetmemek; zamanı başka bir kategoriye atamak; yalnızca sakin günleri örneklemek | Yazılı ve gözden geçirilmiş örnekleme planı; aynı tür için çevrim süresi ve kuyruk yaşıyla karşılaştırma |
| Seviye dağılımı (sola kaydırma payı) | Yükseltmeleri yeniden sınıflandırarak ya da kalemleri seviye 1'de kapatıp seviye 2'de yeni kalem olarak yeniden açarak seviye 1'de çözülen payı yükseltmek | Yeniden açılma oranı ve bağlı talep kaydı oranı; çözüm kalitesi örneklemesi; seviyeye göre müşteri memnuniyeti |

Sağlıklı bir okuma şunları gösterir: sabit ya da düşen bir düşme oranıyla birlikte yükselen self servis başarısı, yöntemiyle belirtilmiş tahmini yönlendirmeyle önleme, başarısızlık ve yeniden iş düşük kalırken gözden geçirilmiş bir aday listesine karşı yükselen otomasyon kapsamı ve yeniden açılma oranlarını yükseltmeden ya da memnuniyeti düşürmeden işi daha erkene taşıyan bir seviye dağılımı. Bir sayı iyileşirken koruma önlemi kötüleşiyorsa, iyileşmeyi kanıtlanmamış sayın.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Önce self servis | Kullanıcılar için anında sonuçlar, daha düşük marjinal maliyet, her saatte erişilebilir | Karmaşık ya da olağandışı ihtiyaçları olan kullanıcılar mahsur kalmış hissedebilir; zayıf içerik, kaldırdığından daha fazla iletişim yaratır |
| Önce personelli iletişim | Kişisel yardım, yargı ve olağandışı sorunları fark etme şansı | Daha yavaş, maliyetli ve personelin müsaitliğine bağlı |
| Yönlendirmeyle önlemeyi bir kontrol grubuyla tahmin etmek | Etkinin inandırıcı kanıtı | Tasarım çalışması ve değişikliği almayan bir gruba tolerans gerektirir |
| Talep kaydı olmayan oturumları saymak | Ucuz ve her zaman mevcut | Başarıyı olduğundan büyük gösterir; manipülasyonu davet eder; başarıyı terkten ayıramaz |
| Geniş otomasyon | Tutarlı yürütme ve daha az angarya | Bakım yükü, ölçeklenen başarısızlık biçimleri ve takımda sönebilecek beceriler |
| Kararlı akışların seçici otomasyonu | Emeğe göre daha iyi getiri ve daha az sürpriz | Bazı elle işi yerinde bırakır ve bunun kendi dikkatine ihtiyacı vardır |

Pratik yanıt, sık, kararlı ve iyi anlaşılmış olanı otomatikleştirmek ve ihtiyacın belirsiz ya da riskin yüksek olduğu yerde bir kişiyi erişilebilir tutmaktır. Self servis, insanlara yardım edilip edilmediğine göre değerlendirilmeli ve personelli yol görünür tutulmalıdır. Sola kaydırma tasarrufları yalnızca kullanıcı sonucu korunduğunda gerçektir; bu yüzden iki tarafı da sayın.

## Takımınızla tartışılacak sorular

**1. Bir kullanıcı portalı açıp talep kaydı oluşturmadan ayrıldığında ne olduğunu varsayıyoruz ve bunu nasıl öğrenirdik?**
Gruptan olası hikâyeleri listelemesini isteyin: kullanıcı yanıtı buldu, pes etti, bunun yerine aradı ya da bir meslektaşa sordu. Bunları neyin ayıracağına bakın; örneğin bir takip iletişimi, bir çıkış istemi ya da bir oturum örneklemi. Kolaylaştırıcı, panoda şu anda hangi varsayımın bulunduğunu ve buna kimin güvendiğini kaydetmelidir. Bir varsayımı kanıtla değiştirecek tek bir değişiklik üzerinde anlaşarak bitirin.

**2. Yönlendirmeyle önlemeyi şu anda nasıl tahmin ediyoruz ve yöntemi şüpheci bir finans ortağına karşı savunur muyduk?**
Hesaplamayı, karşılaştırma grubu ve talep değişiklikleri için düzeltmeler dahil, adım adım gözden geçirin. Dönem boyunca başka neyin değiştiğini sorun; yayınlar, kesintiler ya da personel değişiklikleri gibi. Manşetin yanında makul değerlerin aralığını da not edin. Tartışma, rakamın yanında durabilecek yöntemin sade bir ifadesiyle bitmelidir.

**3. Gerçek maliyetlerini bilseydik yarın hangi otomasyonlarımızı kapatırdık?**
Otomatikleştirilmiş akışları sahipleri, son değişiklik tarihi, çalıştırma sayıları, başarısızlık oranları ve bakım emeğiyle listeleyin. Hangilerinin kaybının fark edilmeyeceğini ve hangilerine dokunmaktan insanların korktuğunu sorun. Kolaylaştırıcı, emekliye ayırmayı meşru bir sonuç olarak ele almalıdır. Yanıtlar çoğu zaman sahibi olmayan akışları ortaya çıkarır.

**4. Self servis girişimi başarısız olan bir kullanıcıya ne olur ve bir kişiye ulaşmaları ne kadar sürer?**
Birinden yolu bir kullanıcı gibi yürümesini isteyin; iletişim yolunu bulmak dahil. Süreyi ölçün ve kısaltılabilecek her adımı not edin. Deneyimi portalın belirtilen amacıyla karşılaştırın. Grup, yolun self servis yolu kadar kolay bulunup bulunmadığına karar vermelidir.

**5. Hizmet masasının iş karışımı bir yıl önce nasıl görünüyordu ve şimdi nasıl görünüyor?**
Kategori karışımını ve seviye dağılımını zaman içinde gözden geçirin. Ele alma süresinin ya da ilk temasta çözümün neden hareket ettiğini ve bunun daha zor bir karışımı yansıtıp yansıtmadığını tartışın. Liderliğe bunun beklenen bir şey olduğunun söylenip söylenmediğini sorun. Başarılı bir sola kaydırmadan sonra ele alma süresindeki bir artışın bir düşüş olarak okunmaması için eğilimi nasıl sunacağınız üzerinde anlaşın.

**6. Otomasyonun serbest bıraktığı kapasiteyle ne yapardık ve kim karar verir?**
Elle işten kaldırılan saatleri tahmin edin ve neyi satın almaları gerektiğini adlandırın. Zamanın iyileştirme çalışmasına mı gittiğini yoksa yeni talep tarafından mı emildiğini sorun. Takımın bunu nasıl bileceğini tartışın. Kolaylaştırıcı, en çok düşme konularını düzeltmek için ayrılan bir kapasite payı gibi somut bir taahhüt için ısrar etmelidir.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları, self servisi neyin başarılı kıldığının büyük bölümünün sahibidir: net hata iletileri, kullanılabilir formlar, ürün içi yardım ve görevleri talep kaydı açmadan yapabilme yeteneği. Ayrıca iş hatlarında ve altyapı kodunda yaşayan otomasyonun da sahibidirler. Yararlı ölçümleri, kendi özelliklerindeki self servis başarısı ve yayın ve ortam çalışmasında geriye kalan, kaldırılacak angarya olarak ele alınan elle adımlardır (bkz. Konu 2.8 “DORA metrikleri”). Düşme konularını bir ürün birikim listesi olarak okumalıdırlar.

### Hizmet ve operasyon takımları

Operasyon takımları otomasyon varlığını ve personelli geri dönüşü taşır. Otomasyon güvenilirliğini, bakım yükünü ve kalan elle dokunma süresini izlemeli ve geriye kalan daha zor iş için cezalandırılmadan seviye dağılımını izlemelidir. Hangi taleplerin iyi otomasyon adayları olduğu konusunda temsilcilere danışılmalıdır; çünkü gerçek sürtünmenin nerede olduğunu bilirler. Temsilciye göre değil, akışa ve talep türüne göre raporlayın.

### Liderlik ve yönetişim

Liderler yönlendirmeyle önlemeyi bir maliyet tasarrufu rakamı olarak ele almaya meyillidir. Daha iyi bir talep, kullanıcı sonucu, herhangi bir tahminin arkasındaki yöntem ve otomasyonun güvenilirliği için olandır. Yönetişim bir aday listesi, her otomatikleştirilmiş akış için bir sahip ve emekliye ayırma için bir kural beklemelidir. Liderler ayrıca personelli yolu bir hedefi karşılamak için gizlenmekten korumalıdır (bkz. Konu 11.3 “Korku yaratmadan metrikleri devreye almak”).

### Müşteriler ve kullanıcılar

Kullanıcılar işlerine devam etmek ister. Çoğu, işe yaradığında self servisi tercih eder ve neredeyse tamamı işe yaramadığında içinde sıkışıp kalmaktan hoşlanmaz. Deneyimleri en iyi, çıkış noktasında emek ve sonuç soruları ve başarısız bir girişimin hızla bir kişiye yol açıp açmadığı ile yakalanır (bkz. Konu 6.4 “Kullanıcı ve çalışan deneyimi”). Erişilebilirlik ihtiyaçları ya da sınırlı güveni olan kullanıcılar, yalnızca ortalama kullanıcı için çalışan portallar için bir erken uyarıdır.

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendecinin BT departmanı bir hizmet masası, bir platform takımı ve birkaç ürün takımı işletir. Bu örnekteki sayılar örnek niteliğindedir.

Departman, yönlendirmeli parola sıfırlama, bir yazılım erişim talebi akışı ve yaygın sorular için bir sohbet botu içeren yeniden tasarlanmış bir portal başlatır. Üç ay sonra portal raporu, oturumların yüzde 62'sinin talep kaydı olmadan bittiğini gösterir ve bir yönetici buna “yönlendirmeyle önleme” demeyi ve yüzde 70'lik bir hedef belirlemeyi önerir. Hizmet masası lideri rahatsızdır; çünkü temsilciler, arayan insanların “önce portalı denediklerini” söylediklerini bildirmektedir.

Takım ölçümleri gözden geçirir. Self servis başarısını, aynı konuda 7 gün içinde personelli iletişim olmayan tamamlanmış bir sonuç olarak tanımlarlar. Bu tanıma göre başarı oranı yüzde 62 değil yüzde 48'dir ve erişim talebi akışı için düşme oranı yüzde 31'dir. 40 düşme iletişiminden bir örneklemi okuyarak, kullanıcıların çoğunun iki benzer katalog kaleminden hangisini seçeceğini söyleyemediğini ve sohbet botunun emekliye ayrılmış bir araç hakkındaki bir soruyu yanıtladığını bulurlar.

Takım üç karar alır. Birincisi, manşet ölçüm self servis başarısı olur; tahmini yönlendirmeyle önleme yalnızca 1.000 etkin kullanıcı başına iletişimlere dayanan üç aylık bir tahmin olarak gösterilir ve yönlendirmeyle önleme üzerinde hiçbir hedef belirlenmez. İkincisi, iki benzer katalog kalemi birleştirilir, sohbet botu içeriği düzeltilir ve en çok düşme konularından ikisi bir sahiple iyileştirme birikim listesine eklenir. Üçüncüsü, platform mühendislerinin ortanca 25 dakikasını (örnek) alan ve ayda yaklaşık 40 kez (örnek) olan test ortamları oluşturma için elle bir süreç otomasyon aday listesine eklenir.

Platform takımı ortam akışını çeyrek içinde otomatikleştirir. Bir manipülasyon riski hızla ortaya çıkar: akışın kapsam rakamı yükselir, ancak başarısızlık ve yeniden iş oranı, her sekiz çalıştırmadan birinin (örnek) elle onarım gerektirdiğini ve onarımların “planlı bakım” olarak kaydedildiğini gösterir. Takım onarılan çalıştırmaları başarısızlık sayımına ekler, çalıştırmaları olay kaydına bağlar ve akışı aylık gözden geçirmeyi kabul eder. Bir sonraki gözden geçirmede başarı oranı yüzde 57'ye (örnek) yükselmiştir, düşme oranı düşmüştür ve kalan iletişimler daha zor olduğu için hizmet masası ele alma süresi biraz yükselmiştir. BT başkanı, artışı bir düşüş olarak okumamak için ele alma süresini seviye dağılımıyla birlikte sunmayı kabul eder.

## Sektör mercekleri

**Girişim.** Kurucular, zayıf bir self servis yolunu çoğu zaman kullanıcıyla konuşarak düzeltebilir. Başarıyı tek bir çıkış sorusuyla ve gerçek oturumların birkaç okumasıyla ölçün ve en çok insanı kesintiye uğratan iki ya da üç görevi otomatikleştirin. Yazılı yanıtlar iyi olmadan bir bot inşa etmekten kaçının.

**Küçük işletme.** Herkes için BT'yi tek bir kişi yürütüyor olabilir, bu yüzden self servis çoğunlukla iyi kısa kılavuzlar ve ortak bir talep formu anlamına gelir. Hesap kurulumunun ve parola sıfırlamaların otomasyonu, birisi her akışın sahibi olduğu sürece hızla karşılığını verir. Personelli yolu belirgin tutun; çünkü işletme sahibinin kendi personeli aksi halde sistemin etrafından dolaşacaktır.

**Büyük kurum.** Ölçek hem yararı hem de manipülasyonu büyütür. Tanımları iş birimleri arasında standartlaştırın, merkezi bir aday listesi ve otomasyon kayıt defteri tutun ve hizmete ve katalog kalemine göre raporlayın. Çok farklı kullanıcı nüfuslarına hizmet eden birimleri karşılaştırmaktan kaçının.

**Devlet ve kamu sektörü.** Erişilebilirlik, dil erişimi ve dijital kanalları kullanamayan insanlara hizmet etme yükümlülüğü ekstra değil, tasarım girdisidir. Yardımlı yolları erişilebilir ve ölçülmüş tutun, insanları etkileyen otomatik kararları belgeleyin ve her otomatikleştirilmiş akışın sahibi hakkında denetim soruları bekleyin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyonlar daha az tekrarlayan iletişim, kullanıcılar için daha hızlı sonuçlar, rutin görevlerin daha istikrarlı yürütülmesi ve iyileştirme çalışması için daha fazla kapasitedir. Maliyet tarafı portalı ve içeriği oluşturmayı ve sürdürmeyi, oturumları talep kayıtlarına bağlamak için entegrasyon ve veri çalışmasını, otomasyon platformunu ve her otomatikleştirilmiş akışı yazmak, test etmek ve sahiplenmek için harcanan zamanı içerir. Personel zamanı örnekleri ve kısa bir çıkış anketi az maliyetlidir ve ihtiyaç duyduğunuz kanıtın çoğunu sağlar.

Getiri kendi verilerinizden savunulmalıdır. Bir otomasyonun kaldırdığı emeği tahmin etmek için elle dokunma süresini ve hacmi kullanın, bakımı ve başarısızlıkların maliyetini çıkarın ve sonucu varsayımlarıyla birlikte bir aralık olarak raporlayın. Self servis için, kaçınılan iletişimlerin payını, kullanıcıların yalnızca geri çevrildiği için değil, yardım gördüğü için göstermek amacıyla düşme oranını ve örneklenen sonuçları kullanın. Yönlendirmeyle önleme ya da tasarruf yüzdelerini tedarikçilerden ya da anketlerden içe aktarmayın; önce kendi başlangıç değerinizi ölçün. Bir otomasyonun toplam sahip olma maliyeti, çevresindeki sistemler evrildikçe ihtiyaç duyacağı değişiklikleri içerir; bu yüzden onlar için bütçe ayırın.

## Anti-desenler ve tuzaklar

- **Talep kaydı olmayan oturumları başarı saymak.** Yardımı terkten ayıramaz. Başarıyı sonuçla tanımlayın ve düşme ve çıkış geri bildirimiyle doğrulayın.
- **Yönlendirmeyle önleme hedefleri.** İletişim yolunu gizlemeyi ödüllendirir. Yönlendirmeyle önlemeyi bir tahmin olarak kullanın ve hedefleri kullanıcı sonuçlarına koyun.
- **Telefon numarasını ya da sohbeti gizlemek.** Bir kişiye ulaşamayan kullanıcılar emeklerini artırır ve güven kaybeder. Personelli yolu görünür tutun ve ona ulaşmanın ne kadar sürdüğünü ölçün.
- **Süreci anlamadan otomatikleştirmek.** Akış, karışıklığı hızla kodlar. Önce çalışma kitabını belgeleyin ve sadeleştirin, sonra kararlı sürümü otomatikleştirin.
- **Sahipsiz otomasyon.** Sahipsiz akışlar sessizce çürür ve kötü anlarda başarısız olur. Her akışa bir sahip, bir test, bir izleme ve bir emekliye ayırma kuralı verin.
- **Başarısızlığın maliyetini göz ardı etmek.** Ölçülmemiş yeniden işi olan yüksek bir kapsam rakamı gizli bir yükümlülüktür. Başarısızlık ve yeniden iş oranını kapsamla birlikte raporlayın.
- **Ele alma süresindeki artışı düşüş olarak okumak.** Başarılı bir sola kaydırmadan sonra kalan iş daha zordur. Seviye dağılımını ve kategori karışımını süre ölçümlerinin yanında gösterin.
- **Temsilcileri yönlendirmeyle önlenen iletişimlere göre sıralamak.** Kullanıcıları uzaklaştırmayı üretir ve veriyi bozar. Yalnızca hizmete ve akışa göre raporlayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Self servis başarısı ve yönlendirmeyle önleme | Portal ziyaretleri ve talep kaydı sayıları raporlanır; sonuç tanımı yok | Başarı bazı yollar için tanımlanır; yönlendirmeyle önleme yöntemsiz belirtilir | Tek bir yazılı başarı tanımı; düşme ölçülür; yönlendirmeyle önleme bir tahmin olarak etiketlenir | Başarı ve düşme çıkış geri bildirimiyle eğilim olarak izlenir; yönlendirmeyle önleme karşılaştırmayla tahmin edilir | Sonuçlar ürün takımları ve tedarikçilerle paylaşılır; düşme konuları fonlanan düzeltmeleri yönlendirir |
| Otomasyon kapsamı ve güvenilirliği | Otomasyon anlık; aday listesi yok | Bazı akışlar tek tek takımlarca otomatikleştirilmiştir; başarısızlıklar gayriresmî ele alınır | Her otomatikleştirilmiş akış için aday listesi, sahipler ve başarısızlık ölçümleri tanımlanmıştır | Kapsam, başarısızlık oranı ve bakım emeği düzenli aralıklarla gözden geçirilir ve fonlanır | Otomasyon takımlar ve tedarikçiler arasında koordine edilir; akışlar rutin olarak emekliye ayrılır ve gözden geçirilir |
| Sola kaydırma etkisi ve kullanımı | Hacim bağlamsız raporlanır | Seviye dağılımı birkaç takımca izlenir | Seviye dağılımı ve kategori karışımı ele alma süresinin yanında raporlanır | Serbest kalan kapasite planlanır ve izlenir; liderlik karışım etkilerini doğru okur | Kapasite ve öğrenme, kurum genelinde hizmetlere ve katalog tasarımına geri akar |

## Kontrol listesi

- [ ] Self servis başarısı, yazılı bir başlangıç, bitiş ve hariç tutmalarla sonuca göre tanımlanıyor.
- [ ] Düşme oranı, ilk self servis yolları için ölçülüyor.
- [ ] Herhangi bir yönlendirmeyle önleme rakamı yöntemini belirtiyor ve bir tahmin olarak etiketleniyor.
- [ ] Yönlendirmeyle önleme üzerinde hiçbir hedef belirlenmiyor.
- [ ] Kilit yollar için tek soruluk bir çıkış istemi ya da eşdeğer geri bildirim var.
- [ ] Yazılı bir otomasyon aday listesi var ve her çeyrek gözden geçiriliyor.
- [ ] Her otomatikleştirilmiş akışın bir sahibi, bir izlemesi ve bir başarısızlık ve yeniden iş ölçümü var.
- [ ] İlk talep türleri için elle dokunma süresi örnekleniyor.
- [ ] Seviye dağılımı, ele alma süresi ve ilk temasta çözümün yanında gösteriliyor.
- [ ] Personelli yol görünür ve erişim süresi kontrol ediliyor.
- [ ] En çok düşme konuları aylık gözden geçiriliyor ve sahiplere yönlendiriliyor.
- [ ] Bu konudaki hiçbir metrik temsilci başına raporlanmıyor ya da hedeflenmiyor.

## Yapay zekâ istemleri

**Yönlendirmeyle önlemeyi nasıl tahmin ettiğimizi kontrol edin.**

```text
[sayı] etkin kullanıcı için [hizmet türü] işletiyoruz. Yönlendirmeyle önlemeyi
[mevcut hesaplamayı anlatın] olarak raporluyoruz ve [araçlar] verilerini
kullanıyoruz. Dönemdeki değişiklikler: [yayınlar, kampanyalar, kesintiler,
personel değişiklikleri]. Yöntemi gözden geçir ve etkiyi nerede olduğundan büyük
ya da küçük gösterebileceğini açıkla. Yalnızca anlattığım verileri kullanarak,
bir kontrol grubu ya da 1.000 etkin kullanıcı başına iletişim gibi daha iyi bir
karşılaştırma öner. Kıyaslama değerleri ya da hedefler uydurma. Varsayımlarını
ve tahmini sağlamlaştırmak için ihtiyaç duyacağın verileri listele.
```

**Bir örneklemden düşme konularını analiz edin.**

```text
Aşağıda [hizmet] hizmetinden, aynı konuda bir self servis girişimini izleyen,
[alanları listeleyin] alanlarına ve kullanıcının açıklamasına sahip [sayı]
personelli iletişim var. Bunları olası nedene göre grupla (içerik boşluğu,
kafa karıştırıcı form, kusur, eksik erişim, kullanıcı tercihi) ve bireyleri
değil, örüntüleri raporla. Hangi neden gruplarının bilgi sahiplerine, ürün
takımlarına ya da sorun yönetimine devredileceğini öner. Verilen metnin ötesinde
tahmin yürütme. Varsayımlarını ve yargılayamadığın şeyleri listele.

[kişisel veriler çıkarılmış iletişimleri yapıştırın]
```

**Otomasyon adaylarını sıralayın.**

```text
İşte [takım] için talep ve olay türlerinin bir listesi: [tür, aylık hacim,
ortanca elle dakika, değişkenlik, yanlış olursa risk]. Otomasyon adayları için
bir sıralama öner ve her biri için, bakım yükü ve başarısızlık etkisi dahil,
gerekçeyi açıkla. Elle kalması gereken kalemleri işaretle. Yalnızca verdiğim
sayıları kullan ve tasarruf rakamları uydurma. Varsayımlarını ve taahhüt
etmeden önce yanıtlamam gereken soruları listele.
```

**Otomatikleştirilmiş bir akış için koruma önlemleri tasarlayın.**

```text
[hizmet] için [akış adı] akışını otomatikleştiriyoruz. Mevcut elle süreç:
[adımlar]. Araçlar: [otomasyon platformu]. İzlenecek metrikleri (kapsam,
başarısızlık ve yeniden iş, başarısız bir çalıştırmayı tespit etme süresi,
bakım emeği), her birinin nasıl manipüle edilebileceğini ve her biri için bir
koruma önlemini öner. Güvenli bir elle geri dönüş ve bir emekliye ayırma ölçütü
ekle. Eşik ya da kıyaslama uydurma. Varsayımlarını ve ortamımız hakkında bilmen
gereken her şeyi listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): başlatmayı planladığınız bir self servis ya da otomasyon metriği için ilgili konuyu ve koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konuda yapılan düzenlemelerin her metriği bir manipülasyon vektörü ve bir koruma önlemiyle eşleştirilmiş tutup tutmadığını kontrol etmek için kullanın.

## Temel çıkarımlar

- Self servis başarısı bir kullanıcı sonucudur; bu yüzden onu kullanıcı tarafından tanımlayın ve düşme ve çıkış geri bildirimiyle doğrulayın.
- Yönlendirmeyle önleme bir tahmindir; bu yüzden yöntemi belirtin ve hedeflerin dışında tutun.
- Otomasyon kapsamı, güvenilirlik, bakım ve gözden geçirilmiş bir aday listesi olmadan az şey ifade eder.
- Sola kaydırma, kalan işin zorluğunu artırır; bu yüzden ele alma süresini seviye dağılımı ve kategori karışımıyla birlikte okuyun.
- Akışları, hizmetleri ve katalog kalemlerini ölçün, temsilcileri asla ve personelli yolu görünür tutun.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
