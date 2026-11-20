# Angarya ve nöbet metrikleri

**Bir hizmet, ona bakan rotasyon kadar güvenilirdir; bu yüzden kesintileri, gece yükünü ve tekrarlayan elle işe kaybedilen zaman payını bir bütün olarak rotasyon için ölçün ve rakamları önleme ve otomasyonu finanse etmek için kullanın, insanları karşılaştırmak için asla.**

## Genel bakış ve motivasyon

Güvenilirlik çoğu zaman sistem açısından tanımlanır: kullanılabilirlik, gecikme, hata oranları. Gece yarısı kullanıcıları olan her hizmetin arkasında, sistem arızalandığında yanıt veren bir insan sistemi vardır. Bu insan sisteminin sınırları vardır. Çok sık çağrılan, çok fazla insanı uyandıran ya da haftasının çoğunu elle yapılan, tekrarlayan görevlere harcayan bir rotasyon yavaşlar, daha çok hata yapar ve sonunda insanlarını kaybeder. 5. bölümdeki diğer metrikler, onları bir arada tutan insanların ayrıldığı ana kadar sağlıklı görünebilir.

İki fikir bu konuyu düzenler. Birincisi [nöbet](https://en.wikipedia.org/wiki/On-call) işidir: normal çalışma düzeninin dışında uyarılara yanıt vermeye ulaşılabilir ve hazır insanlardan oluşan bir rotasyon. **Çağrı (page)**, bir yanıtlayıcıyı genellikle bir çağrı cihazı, telefon araması ya da anlık bildirim yoluyla bölen bir uyarıdır. **Vardiya**, nöbet görevinin tek bir dilimidir; örneğin bir gün, bir hafta ya da bir gece. **Rotasyon**, sırayla vardiya alan insan grubudur. İkinci fikir, hizmetleri yazılım mühendisliği yöntemleriyle işletme disiplini olan [site güvenilirliği mühendisliğinden](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE) gelen bir terim olan **angaryadır**. Google'ın *Site Reliability Engineering* kitabında angarya, bir üretim hizmetini işletmeye bağlı, elle yapılan, tekrarlayan, otomatikleştirilebilir, taktik, kalıcı değeri olmayan ve hizmetle birlikte büyüyen operasyonel iştir. Toplantılar gibi genel giderle aynı şey değildir ve basitçe birinin hoşlanmadığı iş de değildir.

ITIL 4'te “angarya yönetimi” denen bir uygulama yoktur. Malzeme birkaç uygulamaya yayılmıştır. [Olay yönetimi](https://en.wikipedia.org/wiki/Incident_management) ile izleme ve olay yönetimi çağrıları üretir. Sorun yönetimi, onları üretmeye devam eden nedenleri ortadan kaldırır. Hizmet talebi yönetimi ve dağıtım yönetimi, tekrarlayan elle işin büyük kısmını üretir. İşgücü ve yetenek yönetimi ile sürekli iyileştirme, insan tarafının sahibidir. Çevik karşılık, ekibin plansız iş ve sürdürülebilir tempo üzerine çalışma anlaşması ve bir hizmeti inşa eden ekibin onun çağrı cihazının bir kısmını da taşıdığı DevOps alışkanlığıdır.

Buradaki ölçümler yük ve sürdürülebilirlik hakkındadır. Olay ele alma diğer konulara aittir (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi” ve Konu 3.4 “Büyük olay metrikleri”), tek tek uyarıların kalitesi de öyle (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”). Bu konu, hizmeti çalışır durumda tutmanın rotasyondaki insanlara neye mal olduğunu ve bu maliyetin sürdürülebilir olup olmadığını sorar.

### Neden bu güvenilirlikle birlikte ele alınır

Yorgunluğun operasyonel sonuçları vardır. [Uyku yoksunluğu](https://en.wikipedia.org/wiki/Sleep_deprivation) muhakemeyi ve tepki süresini bozar; bir olayın başında yorgun olan yanıtlayıcılar onu teşhis etmek için daha uzun süre alır ve ilk hatayı düzeltirken ikinci bir hata yapma olasılıkları daha yüksektir. [Alarm yorgunluğu](https://en.wikipedia.org/wiki/Alarm_fatigue), çok fazla uyarının ilişkili etkisidir: insanlar her birini acil saymayı bırakır. [Mesleki tükenmişlik](https://en.wikipedia.org/wiki/Occupational_burnout), sürekli aşırı yükün uzun vadeli sonucudur ve işten ayrılma, hastalık ve ilgisizlik olarak ortaya çıkar; bunlar yavaş, pahalı ve geri döndürülmesi zordur. Rotasyonunun sürdürülebilirliğini ölçmeden hizmet güvenilirliğini ölçen bir ekip yalnızca etkiyi izliyor, nedenin bir kısmını yok sayıyordur.

Bu konu rotasyonları, vardiyaları ve hizmetleri tanımlar ve bireyleri asla sıralamaz. ITIL görünümü olaydan ve hizmetten, SRE görünümü kişi-zaman maliyetinden, çevik görünüm ise planlı iş kapasitesinden başlar.

## Temel ilkeler

- **Kişiyi değil, rotasyonu ölçün.** Yükü hizmet, vardiya ve rotasyon konumuna göre raporlayın. Bir kişinin çağrı sayısı, çektiği vardiyaya bağlıdır ve bir sıralama tablosu insanlara kesintileri gizlemeyi öğretir.
- **Kesintilerin ne kadar sürdüğünü olduğu kadar ne zaman olduğunu da sayın.** Sabah 03:00'teki beş dakikalık bir çağrı bir gecelik uykuya mal olabilir.
- **Angaryayı dar tanımlayın ve ekibin sınıflandırmasına izin verin.** Angarya belirli bir iş türüdür, insanların hoşlanmadığı işin eş anlamlısı değildir.
- **Yükü yatırım için bir sinyal olarak ele alın.** Yüksek çağrı hacmi ya da angarya payı, bir hizmetin, aracın ya da kadro düzeyinin çalışmaya ihtiyaç duyduğunun kanıtıdır.
- **Her yük ölçümünü bir kalite ölçümüyle eşleştirin.** Daha az çağrı, yalnızca olaylar hâlâ algılanıyorsa iyi haberdir.
- **Dağılımları gösterin ve veriyi önce rotasyonla paylaşın.** Ortalama bir vardiya bir avuç korkunç geceyi gizler ve nöbetteki insanlar, rakamların deneyimleriyle örtüşüp örtüşmediğinin en iyi yargıçlarıdır.

## Metrik tanımları

Tablo çekirdek kümeyi verir. Her zaman ya da sayı ölçümü nerede başlayıp durduğunu ve nelerin hariç tutulduğunu belirtir. “Mesai dışı”, dağıtık bir rotasyondaki insanların farklı yerel saatleri olabileceği için, rotasyon başına, hafta sonları ve resmî tatiller dahil, yerel saatte yazılı bir pencere olarak bir kez tanımlanmalıdır.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılık | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Vardiya başına çağrı | Bir vardiya sırasında bir rotasyona iletilen çağrıların sayısı | Vardiya başlangıcı ile bitişi arasında iletilen çağrıların sayısı, vardiya başına bir sayım, aynı uyarı grubu için 5 dakika içindeki yinelenen çağrılar birleştirildikten sonra (birleştirme penceresi bir ekip ayarıdır). Test çağrıları ve yanlışlıkla gönderilen çağrılar hariç tutulur. Vardiyalar boyunca medyanı ve 90. yüzdelik dilimi, ayrıca en yoğun vardiyayı raporlayın | vardiya başına çağrı | Çağrı aracı; nöbet çizelgesi | Olay yönetimi; izleme ve olay yönetimi | Plansız iş politikası; sürdürülebilir tempo | Haftalık gözden geçirme, aylık eğilim |
| Mesai dışı çağrı payı | Yazılı çalışma penceresinin dışında gelen çağrıların payı | Çalışma penceresinin dışında iletilen çağrılar / dönem boyunca iletilen tüm çağrılar. Pencere rotasyon başına yerel saatte belirlenir; tatiller pencerenin dışında sayılır | yüzde | Çağrı aracı; rotasyon takvimi | Olay yönetimi; izleme ve olay yönetimi | Kullanılabilirlik üzerine çalışma anlaşması | Aylık |
| Gece kesinti oranı | Bir vardiyanın korunan uyku penceresinde en az bir çağrı içerme sıklığı | Korunan uyku penceresinde (örneğin yerel saatle 22:00 ile 07:00 arası, ekip tarafından belirlenir) en az bir çağrısı olan vardiyalar / dönemdeki tüm vardiyalar. İnsan yanıtı olmadan otomatik olarak onaylanan bir çağrı hariç tutulur | vardiyaların yüzdesi | Çağrı aracı; onay günlüğü | Olay yönetimi; işgücü ve yetenek yönetimi | Sürdürülebilir tempo; ekip sağlık kontrolü | Aylık |
| Zamanın angarya payı | Bir rotasyonun çalışma zamanının angaryaya harcanan payı | Rotasyonun angarya olarak sınıflandırılmış işe karşı kaydettiği saatler / rotasyonun kaydettiği toplam çalışma saatleri, bir ay üzerinden. Toplantılar, eğitim ve izin hem paydan hem paydadan hariç tutulur. Sınıflandırma, ekip tarafından uygulanan angaryanın altı özelliğini izler | zamanın yüzdesi | Zaman örneklemesi ya da iş izleyicideki görev etiketleri; ekip sınıflandırma gözden geçirmesi | Sürekli iyileştirme; dağıtım yönetimi; hizmet talebi yönetimi | Plansız iş payı; planlı işte kapasite tahsisi | Aylık, sınıflandırmanın üç aylık gözden geçirmesiyle |
| Kaynağa göre angarya | Angarya saatlerinin elle yeniden başlatmalar, erişim talepleri, sertifika yenilemeleri ve kayıt önceliklendirmesi gibi adı belli kaynaklar arasındaki dağılımı | Her kaynak için angarya saatleri / toplam angarya saatleri; ilk beş kaynak ve bir “diğer” grubu listelenir. Zamanın angarya payıyla aynı istisnalar | kaynağa göre angarya saatlerinin yüzdesi | Zaman örneklemesi ya da iş izleyicideki görev etiketleri | Sorun yönetimi; hizmet talebi yönetimi | İyileştirme kalemleri birikim listesi | Üç aylık |
| Tekrarlayan çağrı oranı | Belirtilmiş bir pencere içinde rotasyonu daha önce çağırmış bir durumun neden olduğu çağrıların payı | 30 gün içinde uyarı grubu ya da neden kodu daha önceki bir çağrıyla eşleşen çağrılar / dönemdeki tüm çağrılar. Neden kodu kapanışta yanıtlayıcı tarafından belirlenir; belirlenmemiş kodlar ayrıca raporlanır | yüzde | Çağrı aracı; olay kaydı neden kodları | Sorun yönetimi; olay yönetimi | Retrospektif eylemler; teknik borç birikim listesi | Aylık |
| Rotasyon derinliği | Doldurulacak rol sayısına kıyasla kaç nitelikli yanıtlayıcının çağrı cihazını paylaştığı | Nöbet hazırlığını tamamlamış ve vardiyalar için müsait olan kişi sayısı / rotasyon döngüsü başına vardiya konumlarının sayısı. İzin ve geçici görevlendirme müsaitliği azaltır. Rotasyon başına bir oran olarak raporlayın, kişi başına asla | oran | Rotasyon çizelgesi; hazırlık kontrol listesi | İşgücü ve yetenek yönetimi | Çok işlevli ekip; beceri matrisi | Üç aylık |
| Giderilen angarya | Bir otomasyon ya da tasarım değişikliğiyle rotasyonun işinden çıkarılan tekrarlayan angarya saatleri | Değişiklikten önce bir kaynağın tahmini aylık angarya saatleri eksi değişiklikten sonra aynısı; tesliminden sonra en az iki döngü boyunca ölçülür. Tek seferlik bir temizlikle kazanılan saatler hariç tutulur | ay başına saat | Öncesinde ve sonrasında zaman örneklemesi; iyileştirme kaydı | Sürekli iyileştirme; sorun yönetimi | Teslim edilen iyileştirme kalemi | Üç aylık |

Bir çağrı sayısı, olayların değil kesintilerin sayısıdır: bir olay bir düzine çağrı üretebilir. Zamanın angarya payı dürüst kayda bağlıdır; bu yüzden onu üzerinde uzlaşılmış bir tahmin olarak ele alın.

## Öneriler

### Saymadan önce terimleri tanımlayın

**1. Neyin çağrı, vardiya ve mesai dışı sayıldığını yazın.** Ekipler aynı sözcüğün altında farklı şeyleri sayar. Bir çağrı herhangi bir bildirim, yalnızca bir insana ulaşanlar ya da yalnızca eylem gerektirenler olabilir. Bir tanım seçin, kopyalar için birleştirme penceresini belirtin ve çalışma penceresini yerel saatte kaydedin. Bu olmadan, bir araç yeniden yapılandırıldığında sayılar değişir ve eğilim yanıltır.

**2. Angaryanın ne olduğu üzerinde, kendi hizmetinizden örneklerle uzlaşın.** SRE kitabındaki altı özellikten başlayın. Takılmış bir işi yeniden başlatmak (angarya), yeni bir kurtarma aracı tasarlamak (mühendislik) ve bir planlama toplantısı (genel gider) gibi kısa bir örnek ve örnek olmayan listesi yazın. Anlaşmazlıklar ortaya çıktığında listeyi gözden geçirin.

**3. Angarya payını nasıl ölçeceğinize karar verin ve sınırlarını kabul edin.** Ucuz seçenekler zaman örneklemesi, iş izleyicideki görev etiketleri ve iki haftada bir kısa bir tahmindir. Hiçbiri kesin değildir; bu yüzden en az yük getireni seçin, bir çeyrek boyunca çalıştırın ve mutlak değerden çok eğilimi yargılayın.

### Rotasyondaki yükü ölçün

**4. Vardiya başına çağrıyı bir dağılım olarak raporlayın.** Ortalama vardiya, rotasyonun hissettiğini gizler. Medyanı, 90. yüzdelik dilimi ve en yoğun vardiyayı gösterin ve o vardiyada ne olduğuna dair bir not ekleyin. Sessiz bir medyan ve korkunç bir kuyruk, birkaç kötü gece demektir; bu, sürekli yoğun bir rotasyondan farklı bir sorundur. Yüzdelik dilimleri okumak için Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”na bakın.

**5. Zamanlamayı hacmin yanına koyun.** Mesai dışı çağrı payı ve gece kesinti oranı yükün ne zaman indiğini gösterir. Mesai saatlerinde beş çağrı bir rahatsızlıktır; gece yarısı ile 05:00 arasında beş çağrı farklı bir maliyettir. İkisini aynı sayfada gösterin.

**6. Kişiler arasında değil, vardiyalar arasındaki dağılıma bakın.** Yinelenen bir vardiyanın (örneğin hafta sonu ya da Pazartesi devri) çağrıların çoğunu topladığı bir rotasyon, yükün eşit olduğu bir rotasyondan farklı bir düzeltme gerektirir. Çağrıların payını vardiya konumuna ve güne göre raporlayın. Veriler adı belli bireylere göre raporlandığında bunların bir sıralama olarak okunmasını bekleyin; bu yüzden o görünümü üretmeyin.

**7. Büyük olay yükünü ayrı sayın.** Bir büyük olay, tek bir gecede normal bir aydan daha fazla kesinti üretebilir. Tek bir olay eğilimi çarpıtmasın diye bunu kendi satırı olarak raporlayın (bkz. Konu 3.4 “Büyük olay metrikleri”).

### Yükü nedenlere ve düzeltmelere bağlayın

**8. Çağrıları sorunlara bağlayın ve tekrarları izleyin.** Tekrarlayan çağrı oranı, yükün ne kadarının zaten bilinen nedenlerden geldiğini gösterir. Yüksek bir tekrar oranı, daha hızlı yanıt için değil, sorun yönetimi için bir savdır. En çok tekrarlayan nedenleri sorun birikim listesine besleyin ve bağlantıyı kaydedin (bkz. Konu 4.1 “Sorun yönetimi metrikleri” ve Konu 4.6 “Teknik borç ve bilinen hatalar”).

**9. Angarya kaynaklarını sıralayın ve en büyüğüne saldırın.** Kaynağa göre angarya saatlerinin bir [Pareto grafiği](https://en.wikipedia.org/wiki/Pareto_chart) genellikle zamanın çoğundan birkaç kaynağın sorumlu olduğunu gösterir. En büyüğünü seçin, tasarımla ortadan kaldırılıp kaldırılamayacağına, otomatikleştirilip otomatikleştirilemeyeceğine ya da nedenin sahibi olan ekibe devredilip devredilemeyeceğine karar verin ve özellik çalışması gibi planlayın. İhtiyacı ortadan kaldırmayı adımı otomatikleştirmeye tercih edin; çünkü otomatikleştirilmiş bir adımın yine de sürdürülmesi gerekir.

**10. Yazılmış otomasyonları değil, giderilen angaryayı ölçün.** Kimsenin kullanmadığı bir otomasyon hiçbir şeyi ortadan kaldırmaz. Angarya saatlerini öncesinde ve sonrasında, en az iki döngü boyunca ölçün ve otomasyonu inşa etme ve sürdürme çabasını kaydedin. Bu dürüst getiridir ve işi ortadan kaldırmadan betik ekleyen bir “otomasyon” programını önler. Kullanıcıların otomasyonu benimsemesi için Konu 3.7 “Self servis ve otomasyon metrikleri”ne bakın.

### Sistemi sürdürülebilir tutun

**11. Rotasyon sınırlarını bir ekip anlaşmasında belirleyin, sonra rotasyon derinliğini izleyin.** Bir kişinin ne sıklıkla nöbette olabileceği, kaç ardışık gecenin kabul edilebilir olduğu ve kötü bir geceden sonra hangi dinlenmenin geldiği konusunda uzlaşın. Rotasyon derinliği, rotasyonun üzerinde uzlaşılan sınır için yeterince nitelikli insana sahip olup olmadığını gösterir. Nominal olarak sekiz kişi, ama diğerleri henüz hazır olmadığı ya da izinde olduğu için fiilen üç kişi olan bir rotasyon, çizelge ne derse desin sınırı karşılamaz.

**12. Rakamları belirli bir şey istemek için kullanın.** Bir yük sayısı bir talebi destekler: bir kadro değişikliği, angaryayı azaltmak için özellik işinden ayrılan zaman, uyarı eşiklerinde bir değişiklik ya da bir kullanımdan kaldırma. Talebi sayının yanına yazın; yoksa insanlar kaydetmeyi bırakır (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş korkuluk metriği ya da uygulaması |
| --- | --- | --- |
| Vardiya başına çağrı | Sayı düşsün diye uyarı eşiklerini yükseltmek ya da uyarıları susturmak; ilgisiz uyarıları tek bir çağrıda birleştirmek; çağrıları kimsenin izlemediği bir kayıt kuyruğuna taşımak | Algılama kapsamı ve izlemenin kaçırdığı, müşterilerce bildirilen olaylar (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”); algılama süresi (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”) |
| Mesai dışı çağrı payı | Çalışma penceresini daha geniş olacak biçimde yeniden tanımlamak; çağrıları azaltmadan mesai saatlerine kaydırmak için işleri ve dağıtımları yeniden planlamak; çağrıları “düşük aciliyet” olarak yeniden sınıflandırmak | Payın yanında toplam çağrı hacmi; değişiklik kontrolü altında yazılı çalışma penceresi; neyin taşındığının gözden geçirilmesi |
| Gece kesinti oranı | Onayı sabaha kadar geciktirmek; çağrıları otomatik onaylamak; yalnızca bir insana ulaşan çağrıları saymak | Saate göre onaylama süresi (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”); insan yanıtı olmayan çağrıların ayrı raporlanması; gece müşteri etkisi |
| Zamanın angarya payı | Angaryayı “mühendislik” ya da “proje işi” olarak yeniden sınıflandırmak; harcanandan az kaydetmek; yalnızca tarifi kolay olanı etiketlemek | Rotasyonun dışındaki biri tarafından sınıflandırılmış kalemlerin dönemsel denetimi; haftanın nasıl hissettirdiğine dair ekibin kendi görüşü; planlı iyileştirme işine harcanan zamanın payı |
| Kaynağa göre angarya | Hiçbiri öne çıkmasın diye büyük bir kaynağı birkaç küçüğe bölmek; bir kaynağı “diğer” içinde adsız bırakmak | “Diğer” grubu için bir sınır (örneğin angarya saatlerinin beşte birinin altında, bir ekip ayarı); her çeyrek “diğer” kalemlerinin örneklenmesi |
| Tekrarlayan çağrı oranı | Eşleşmeler kaçsın diye çağrıları her seferinde yeni bir neden koduyla kapatmak; her şey ayrı olana kadar neden kodlarını genişletmek; pencereyi uzatmak ya da kısaltmak | Bir örnek üzerinde neden kodu denetimi; olaylar arasında aynı uyarı grubunun tekrarı (bkz. Konu 4.1 “Sorun yönetimi metrikleri”) |
| Rotasyon derinliği | Hazırlığı tamamlamamış insanları saymak; nadiren müsait olan insanları saymak; çizelgeyi şişirmek | Nominal havuzun gerçekten karşıladığı vardiyaların payı; konuma göre gerçek vardiya sayısı, isimsiz raporlanır; hazırlık kontrol listesi tamamlama |
| Giderilen angarya | Tek seferlik temizlikleri tekrarlayan tasarruf olarak saymak; otomasyonu inşa etme ve sürdürme çabasını yok saymak; öncesi ve sonrası olmadan tasarruf iddia etmek | İki döngü boyunca ölçülen öncesi ve sonrası saatler; otomasyonun bakım çabası; sonraki çeyreklerde zamanın angarya payı |

Sağlıklı bir okuma, medyan vardiyası sessiz ve en kötü vardiyası nadir olan bir rotasyondur; gece az çağrı, azalan bir tekrarlayan çağrı payı ve yeniden sınıflandırıldığı için değil, kaynaklar giderildiği için düşen bir angarya payı vardır. Oraya ulaşma çabasını da gösterir: planda görünen, finanse edilen ve teslim edilen iyileştirme işi. Müşteriler izlemenin yakalayamadığı daha fazla olay bildirirken çağrı sayıları düşüyorsa, sayılar başka tarafa bakarak iyileşiyordur.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Çağrıları çağrı aracından saymak | Otomatik, ucuz ve tartışması zor | Kesintileri sayar, maliyetlerini değil; uyarıları ayarlamak, yükü değiştirmeden sayıyı değiştirir |
| Angarya için zaman örneklemesi | Mütevazı çaba için makul doğruluk | Disiplin gerektirir; küçük örneklemler gürültülüdür |
| Rotasyon düzeyinde raporlama | İşin nasıl örgütlendiğine uyar; geniş biçimde paylaşmak güvenlidir | Zorlanan bir kişiyi gizleyebilir; yanında destekleyici bir görüşme kanalı gerekir |
| Angarya için sert üst sınır (örneğin SRE kitabının angaryayı zamanın yüzde 50'sinin altında tutma hedefi) | Bir yanıtı tetikleyen net bir sinyal | Bir sayı yeniden sınıflandırmayla karşılanabilir; bir sınır yönetim desteği gerektirir |

Temel gerilim, kabullenme ile yatırım arasındadır. Yüksek yükü önemli bir hizmetin olağan bedeli olarak görüp insanlardan bunu emmelerini istemek kolaydır ve kimsenin uygulama gücüne sahip olmadığı bir sınır koymak kolaydır. Çıkış yolu, her ölçümü bir kararla eşleştirmektir: ekibin durup harekete geçtiği bir eşik, eylem için adı belli bir sahip ve yeniden bakılacak bir tarih. Rotasyon düzeyindeki sayılar güvenlidir ve bazen fazla kabadır. Biri zorlandığında görüşme, o kişiyle ve yöneticisiyle, haftaya dair kendi anlatımı kullanılarak yapılmalıdır.

## Takımınızla tartışılacak sorular

**1. Son çeyreğin en yoğun vardiyamız nasıl hissettirdi ve rakamlar bunun hakkında ne söylüyor?**
Grafikten önce hikâyeyle başlayın. Nöbette olanlardan vardiyayı anlatmalarını isteyin, sonra bunu vardiya başına çağrı ve gece kesinti sayılarıyla karşılaştırın. Rakamlar deneyimi olduğundan az gösteriyorsa neyin eksik olduğunu, örneğin kaydedilmemiş aramaları ya da çağrıdan sonra yapılan işi, öğrenin. Bu listeyi bir sonraki ölçüm iyileştirmesi olarak yakalayın.

**2. Ekibimizde neye angarya derdik ve neye demezdik?**
Panoya beş ya da altı yakın tarihli görev koyun ve her kişiden bunları altı özelliğe karşı angarya, mühendislik ya da genel gider olarak sınıflandırmasını isteyin. Anlaşmazlık bekleyin ve yararlı sayın: anlaşmazlıklar tanımın nerede belirsiz olduğunu gösterir. Bir sonraki çeyrek için bir çalışma tanımı üzerinde uzlaşın ve her biri için iki örnek yazın. İşin keyifli olup olmadığını tartışmaktan kaçının; çünkü soru, işin elle yapılan, tekrarlayan ve otomatikleştirilebilir olup olmadığıdır.

**3. Yapabilseydik önce hangi uyarıyı ya da görevi silerdik?**
Herkesin korktuğu uyarıyı ya da tekrarlayan görevi isteyin, sonra onu kaldırmamızı neyin engellediğini sorun: düzeltme maliyeti, eksik bir sahip ya da gerekli olduğuna dair bir inanç. Kolaylaştırıcı, kaldırması ucuz ve sahibi odada olmayan işi aramalıdır. Bir sonraki planlama turu için bir kalem seçerek bitirin.

**4. Bugün gerçekten kaç kişi vardiya alabilir ve hangi sınırlara bağlı kalmaya hazırız?**
Hazırlığı dürüstçe sayın: kim eğitimli, kim müsait ve kimin kısıtları var. Sonucu nominal rotasyon büyüklüğüyle karşılaştırın. Grubun kabul edilebilir bulduğu nöbet sıklığını ve ardışık gece sayısını sorun, sonra mevcut uygulamanın bunu karşılayıp karşılamadığını kontrol edin.

**5. Çağrı sayımızı gelecek çeyrekte yarıya indirseydik, yalnızca dinlemeyi bırakmadığımızı nasıl bilirdik?**
Bu soru korkulukla ilgilidir. Gruptan hizmet iyileşmeden çağrı sayısının düşebileceği yolları, örneğin eşikleri yükseltmek, uyarıları birleştirmek ya da bir kaynağı yok saymak gibi, listelemesini isteyin. Sonra bu olsaydı müşteri raporlarında ve algılama ölçümlerinde ne görürdük diye sorun. Korkuluk üzerinde uzlaşın ve hacimle aynı sayfaya koyun.

**6. Bu sayıları kim görüyor ve onlardan ne yapmalarını istiyoruz?**
Yük ölçümlerinin rotasyondan yöneticilere ve liderlere giden yolunu izleyin. Her kitlenin neyi sonuçlandırma olasılığı olduğunu ve herhangi bir görünümün bir sıralama olarak okunup okunamayacağını sorun. Yukarı giden biçim üzerinde uzlaşın: rotasyon düzeyinde, bağlamla, bir talep eklenmiş olarak. Bireylerin tanımlanabilir olmasına dair herhangi bir kaygıyı not edin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri yayımladıkları değişikliklerle nöbet yükünün büyük kısmını üretir. İnşa ettiklerini işleten ekipler, bir yayın ile onu izleyen çağrılar arasındaki bağlantıyı görebilir. Angarya ve nöbet işini kapasite planlamasına dahil etmeli, angarya gidermeyi sıradan birikim listesi işi olarak planlamalı ve değişiklik kalitesini hızın yanında izlemelidirler (bkz. Konu 2.8 “DORA metrikleri”).

### Hizmet ve operasyon takımları

Operasyon ekipleri çağrı cihazını en sık taşır ve insani maliyeti ilk görür. Tanımların sahibi olmalı, zaman örneklemesini ya da etiketlemeyi yürütmeli, rotasyon düzeyindeki sayıları yayımlamalı ve en büyük angarya kaynaklarını ve tekrarlayan nedenleri kanıtla sahibi olan ekiplere götürmelidir. Risk, profesyonellikten ötürü yükü sessizce emmektir. Gecelerin ve haftaların sakin, olgusal bir kaydı, bir şikâyetten daha etkili bir yardım talebidir ve kayıtlar yanıt veren insanların bir sıralamasına asla dönüştürülmemelidir.

### Liderlik ve yönetişim

Liderler kadroya, önceliklere ve angarya işinin finanse edilip edilmeyeceğine karar verir. Yüksek bir angarya payını kötü performans olarak okuyan bir lider, ekibe onu yeniden etiketleyerek düşürmeyi öğretir. Onu kuruluşun finanse etmemeyi seçtiği iş için bir fatura olarak okuyan bir lider dürüst veri ve bir plan alır. Yönetişim, rotasyon yükü için bir sınır ve aşıldığında görünür bir yanıt beklemelidir (bkz. Konu 9.2 “Memnuniyet ve iyi oluş metrikleri”).

### Müşteriler ve kullanıcılar

Kullanıcılar rotasyonu görmez ama etkilerini hisseder: yorgun yanıtlayıcılardan daha yavaş teşhis, düzeltilmemiş nedenlerden tekrarlayan olaylar ve hizmeti bilen insanların ayrılması. Kullanıcıların birçok saat dilimine yayıldığı yerde, mesai dışı ihtiyaçları rotasyonu şekillendirir ve onları kapsamanın maliyeti bir hizmet düzeyi görüşmesi için adil bir konudur (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci bir sipariş platformu, bir müşteri hesabı hizmeti ve bir depo entegrasyonu işletir. İki ürün ekibinden ve küçük bir operasyon grubundan altı mühendisin rotasyonu haftalık bir nöbet vardiyasını paylaşır. Bu örnekteki tüm sayılar açıklayıcıdır.

Aylık gözden geçirme, vardiya başına 9 çağrılık bir medyan ve 31'lik bir 90. yüzdelik dilim gösterir. En yoğun vardiyada 58 çağrı vardı. Tüm çağrıların yaklaşık yarısı mesai dışı gelir ve çeyrekteki 8 vardiyanın 6'sı 22:00 ile 07:00 arasında bir çağrı içeriyordu. Zaman örneklemesi, angaryanın çalışma zamanının yüzde 55'ini aldığını gösteriyor.

En yoğun vardiya, depo entegrasyonundaki bir sertifika süresinin dolmasıyla çakıştı ve rotasyonu tek bir gecede 22 kez çağırdı. Bir toplu işlem sunucusundaki tek bir disk alanı uyarısı çağrıların neredeyse dörtte birini oluşturuyor ve çoğu geçici bir dizini elle temizleyerek kapatılmıştı. Tekrarlayan çağrı oranı yüzde 41. Bir Pareto görünümü, elle sertifika yenilemelerinin, disk temizliğinin ve erişim taleplerinin angarya saatlerinin çoğunu aldığını gösterir.

Ekip önümüzdeki dört haftaya üç kalem alır: sertifika yenilemesini otomatikleştirmek, dolu geçici dizinin nedenini düzeltmek ve erişim taleplerini kimlik ekibinin sahip olduğu bir self servis forma taşımak. Bir çalışma anlaşması kişi başına dörtte bir vardiya sınırı ve üç ya da daha fazla çağrılı bir geceden sonra bir dinlenme günü belirler. Rotasyon derinliği, üzerinde uzlaşılan 8 ihtiyaca karşı 6 kişidir; bu yüzden üçüncü bir ekipten iki mühendis hazırlık eğitimine başlar.

Bir oyunlaştırma riski bir sonraki gözden geçirmede ortaya çıkar. Vardiya başına çağrı 4'lük bir medyana ve 90. yüzdelik dilim 12'ye düşmüştür. Bir yönetici memnundur. Bir ekip üyesi, disk uyarısı eşiğinin 20 puan yükseltildiğini ve toplu işlem sunucusunun iki kez çağrı olmadan dolduğunu belirtir. Geciken toplu siparişlerle ilgili müşterilerce bildirilen olaylar artmıştır. Korkuluk, yani izlemenin kaçırdığı, müşterilerce bildirilen olaylar, bunu yakaladı. Eşik değişikliği geri alınır, dizin temizliği bir düzeltme olarak planlanır ve ekip, her eşik değişikliğinin gerekçesiyle kaydedildiği ve bir ay sonra gözden geçirildiği bir kural ekler. Bir sonraki çeyrekte angarya payı yüzde 38'dir (açıklayıcı) ve yanında örnekleme yöntemiyle raporlanır.

## Sektör mercekleri

**Girişim.** Küçük bir ekibin çoğu zaman resmî bir rotasyonu yoktur; bu yüzden herkes her zaman nöbettedir ve maliyet görünmezdir. Çağrıları ve gece uyanmalarını bir elektronik tabloda sayın ve en büyük üç tekrarlayan görevi yazın. Çağrı cihazını kendisi taşıyan kurucular bir iş riskidir, bağlılık rozeti değil.

**Küçük işletme.** Bir ya da iki kişi tüm BT'yi işletiyor olabilir. Araç gerektirmeyeni ölçün: mesai dışı aramalar, tekrarlayan görevler ve kullanılamayan izinler. Yönetilen bir hizmet sağlayıcı, sözleşme yanıt sürelerini ve saatleri belirtiyorsa rotasyonun bir kısmını alabilir. Rotasyon derinliği çoğu zaman birdir; bu da başlıca risktir.

**Kurumsal.** Ölçek, güneşi izleyen rotasyonları, ortak platformları ve birkaç tedarikçiyi getirir. Ölçümleri bir kez tanımlayın, bölge başına yerel çalışma pencereleri belirleyin ve çok farklı hizmetlere sahip rotasyonlar arasında ortalama almaktan kaçının. Bazı ülkelerdeki istihdam kuralları nöbet görevini sınırlar ve dinlenme süreleri gerektirir; bunlar rotasyon sınırlarına aittir.

**Kamu sektörü.** Hizmetler yasayla ya da sözleşmeyle günün yirmi dört saati kapsam gerektirebilir ve kadro satın alma ve derecelendirmeyle bağlıdır. Rotasyon sınırları ve dinlenme kuralları çoğu zaman istihdam anlaşmalarıyla yönetilir; bu yüzden bunlara karşı ölçün ve aşıldığında raporlayın. Kamusal hesap verebilirlik, açık sözlü raporlamayı daha değerli ve daha zor kılar: yük verileri için güvenli bir kanal kurun ve bunun bireyleri değil sistemi ve kadroyu tanımladığını açıkça belirtin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon, hizmet kalitesini korumak ve yetenekli insanları tutmaktır. Yorgun yanıtlayıcılar daha yavaş teşhis eder ve deneyimli insanlar ayrıldığında bilgi onlarla birlikte gider. Bir kişiyi değiştirmenin işe alım, uyum ve öğrenme döneminde azalan çıktı olarak gerçek maliyetleri vardır ve bir kuruluş bu maliyetleri kendi kayıtlarından tahmin edebilir. Angarya ayrıca kapasiteyi iyileştirmeden uzaklaştırır. Zamanının çoğunu elle operasyonlara harcayan bir ekip, bunları yaratan olayları azaltamaz.

Ölçümlerin maliyeti mütevazıdır. Çağrı aracı zaten çağrıları sayar ve zaman örneklemesi iki haftada bir kişi başına birkaç dakikaya mal olur. Daha büyük maliyet, bulgular üzerinde harekete geçmektir: angaryayı gidermek için mühendislik zamanı, sürdürülebilir bir rotasyon için kadro ve gözden geçirme zamanı. Otomasyonun bakımını bir maliyet olarak sayın; çünkü bakımı yapılmayan otomatik bir adım yarının olayı olur.

Getiri, bilinen nedenlerden daha az çağrı, daha az gece kesintisi, iyileştirme işine geri verilen angarya saatleri, rotasyondan daha düşük ayrılma ve daha hızlı teşhis olarak ortaya çıkar. Evrensel bir rakam geçerli değildir; bu yüzden kendinizinkini tahmin edin. Bir angarya kaynağı için aylık saatleri finansla uzlaşılan yüklü bir saatlik maliyetle çarpın, bunu kaldırma çabasıyla karşılaştırın ve iki döngü sonra gözden geçirin. Rotasyon sürdürülebilirliği için rotasyondan ayrılmaları ve uzun devamsızlıkları kaydedin ve bunları zaman içinde yük ölçümleriyle karşılaştırın; bağlantıyı kanıtlanmış bir neden olarak değil, sınanacak bir hipotez olarak ele alın. Bir rakama ihtiyaç duyulan yerde bunu bir tahmin olarak belirtin ve girdileri gösterin (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **İnsanları çağrılara göre sıralamak.** Bir sistem ölçümünü bir performans puanına dönüştürür ve yanıtlayıcılara vardiyalardan kaçınmayı ve kesintileri gizlemeyi öğretir. Rotasyon, vardiya konumu ve hizmet bazında raporlayın.
- **Uyarıları susturarak çağrıları azaltmak.** Sayı düşer ve algılama zayıflar. Hacmi algılama ve müşterilerce bildirilen olaylarla eşleştirin ve her eşik değişikliğini gözden geçirin.
- **Her şeye angarya demek.** Toplantıları ve zor sorunları içerecek kadar geniş bir tanım sinyali yok eder. Altı özelliği kullanın ve bir örnek listesi tutun.
- **Arkasında yetki olmayan bir angarya hedefi.** Bir karar tetikleyemeyen bir sınır, insanların tartıştığı bir sayıya dönüşür. Aşıldığında ne olacağı ve kimin karar vereceği konusunda önceden uzlaşın.
- **Anlamadan otomatikleştirmek.** Otomasyon kötü bir süreci içine gömebilir ve bakım ekleyebilir. Önce ihtiyacın tasarımla ortadan kaldırılıp kaldırılamayacağını sorun ve sonra giderilen angaryayı ölçün.
- **Benzemeyen hizmetler arasında ortalama almak.** Kararlı bir hizmet ve kırılgan bir hizmet arasındaki bir ortalama ikisini de tanımlamaz. Her hizmeti ve rotasyonu ayrı gösterin.
- **Ölçüp harekete geçmemek.** Yanıtsız yük sayıları insanlara verinin önemli olmadığını öğretir. Her bulguya bir karar, bir sahip ve bir gözden geçirme tarihi ekleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve veri | Çağrılar ve angarya hisle tanımlanır; ortak tanım yok | Bazı rotasyonlar çağrıları sayar; angarya tartışılır ama ölçülmez | Çağrı, vardiya, mesai dışı ve angaryanın tek yazılı tanımı; çağrı verisi araçla toplanır | Dağılımlar ve zamanlama eğilim olarak izlenir; angarya her ay örneklenir ve denetlenir | Tanımlar ekipler ve tedarikçiler arasında gözden geçirilir; örnekleme çabası yanıtların değerine göre ayarlanır |
| Rotasyon sürdürülebilirliği | Gayriresmî; aynı birkaç kişi çağrı cihazını emer | Çizelgeler var; sınırlar tartışılır ama yazılı değil | Sıklık ve dinlenmeye dair yazılı sınırlar; rotasyon derinliği bilinir | Sınırlar izlenir ve ihlaller eylemle gözden geçirilir | Rotasyonlar ekipler ve tedarikçiler arasında paylaşılır ve hizmetler değiştikçe yük dengelenir |
| Rakamların kullanımı | Suçlamak için kullanılır ya da göz ardı edilir | Yöneticilere gösterilir | Önce rotasyona, desteklediği kararlarla birlikte gösterilir | Korkuluklarla eşleştirilir ve finanse edilen değişikliğe yol açan bir ritimde gözden geçirilir | Kadro ve hizmet kapsamını planlamak için liderler ve ortaklarla paylaşılır |

## Kontrol listesi

- [ ] Çağrı, vardiya, mesai dışı pencere ve birleştirme penceresi yazılı olarak tanımlanmıştır.
- [ ] Angaryanın, kendi hizmetimizden örnekler ve örnek olmayanlarla yazılı bir tanımı vardır.
- [ ] Vardiya başına çağrı bir medyan, yüksek bir yüzdelik dilim ve en yoğun vardiya olarak raporlanır.
- [ ] Mesai dışı çağrı payı ve gece kesinti oranı hacmin yanında raporlanır.
- [ ] Yük rotasyon, vardiya konumu ve hizmet bazında raporlanır, adı belli kişi bazında asla.
- [ ] Zamanın angarya payı, yöntemi yazılı olarak bir takvimle örneklenir.
- [ ] İlk beş angarya kaynağı ve en çok tekrarlayan çağrı nedenleri iyileştirme birikim listesindedir.
- [ ] Rotasyon sınırları ve dinlenme kuralları bir ekip anlaşmasındadır ve rotasyon derinliği her çeyrek kontrol edilir.
- [ ] Her yük ölçümünün, algılama ve müşterilerce bildirilen olaylar dahil, aynı sayfada bir korkuluğu vardır.
- [ ] Her gözden geçirme bir karar, bir sahip ve bir tarihle biter.
- [ ] Eşik ve uyarı değişiklikleri gerekçesiyle kaydedilir ve bir ay sonra gözden geçirilir.

## Yapay zekâ istemleri

**Bir rotasyonun yükünü gözden geçirin ve örüntüler arayın.**

```text
[hizmet ya da hizmet grubu] için nöbet rotasyonunu yürütmeye yardım ediyorum.
Rotasyonda [sayı] kişi var ve vardiya uzunluğu [uzunluk]. Çalışma pencerelerimiz
[saatler ve saat dilimi] ve korunan uyku pencerelerimiz [saatler]. Aşağıda [dönem]
için, [sütunları listeleyin] sütunlarıyla anonimleştirilmiş çağrı verileri var:

[isimler çıkarılmış veriyi yapıştırın]

Vardiya başına çağrıların dağılımını, mesai dışı çağrıların payını ve gece
kesintisi olan vardiyaların payını açıkla. En yoğun vardiyaları, tekrarlayan uyarı
gruplarını ve güne ya da vardiya konumuna göre herhangi bir örüntüyü belirt.
Yalnızca rotasyon ve hizmet düzeyinde raporla, kişi bazında asla. Kıyaslama
değerleri ya da hedefler uydurma. Varsayımlarını ve veriden belirleyemediğin
şeyleri listele.
```

**Görevleri angarya, mühendislik ya da genel gider olarak sınıflandırın.**

```text
Ekibimiz [hizmet] hizmetini işletiyor. Angaryayı elle yapılan, tekrarlayan,
otomatikleştirilebilir, taktik, kalıcı değeri olmayan ve hizmetle birlikte büyüyen
iş olarak tanımlıyoruz. Yakın tarihli görevlerin yaklaşık saatlerle bir listesi
şu: [listeyi yapıştırın].

Her görev için angaryaya, mühendisliğe ya da genel gidere uyup uymadığını söyle ve
altı özellikten hangisini karşıladığını ya da karşılamadığını adlandır. Sınırda olan
görevleri işaretle ve onları neyin çözeceğini söyle. Her angarya kaynağının
tasarımla nasıl ortadan kaldırılabileceğini, otomatikleştirilebileceğini ya da
sahibi olan bir ekibe devredilebileceğini, tasarruf uydurmadan öner.
Varsayımlarını ve ekip için soruları listele.
```

**Yük metriklerimiz için oyunlaştırma vektörleri ve korkuluklar taslağı hazırlayın.**

```text
[rotasyon adı] için şu nöbet ve angarya metriklerini raporluyoruz: [tanımlarıyla
metrik listesi]. Bunlar [karar] kararını desteklemek için [hedef kitle]
kitlesine gösteriliyor. Verilerimiz [çağrı aracı, iş izleyici, anket] kaynaklarından
geliyor.

Her metrik için, rotasyon daha iyi durumda olmadan iyileşebileceği gerçekçi yolları
listele ve her birini ortaya çıkaracak bir korkuluk metriği ya da uygulaması öner.
Sonra korkuluğun kendisinin nasıl oyunlaştırılabileceğini söyle. Kıyaslama
değerleri uydurma. Varsayımlarını ve sıkılaştırmam gereken tanımları listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir panoya bir nöbet ya da angarya ölçümü eklerken ilgili konuları ve korkulukları bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konudaki düzenlemelerin her metriği bir oyunlaştırma vektörü ve korkulukla eşleştirilmiş tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- Rotasyondaki yükü vardiya, hizmet ve günün saatine göre ölçün ve onun içindeki insanları asla sıralamayın.
- Kesintilerin kaç tane olduğunu olduğu kadar ne zaman olduğunu da sayın; çünkü gece çağrıları mesai saati çağrılarından daha pahalıdır.
- Angaryayı altı özelliğiyle dar tanımlayın, zaman payını basit bir yöntemle tahmin edin ve eğilimi yargılayın.
- Çağrıları ve angarya kaynaklarını sorun çalışmasına ve otomasyon ya da tasarım değişikliklerine bağlayın ve gerçekte giderilen angaryayı ölçün.
- Her yük ölçümünü algılama ve müşterilerce bildirilen olaylar gibi bir korkulukla eşleştirin; böylece daha düşük sayılar başka tarafa bakarak satın alınamaz.
- Ağır bir yükü, bir karar, bir sahip ve bir gözden geçirme tarihiyle bir yatırım talebi olarak ele alın.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
