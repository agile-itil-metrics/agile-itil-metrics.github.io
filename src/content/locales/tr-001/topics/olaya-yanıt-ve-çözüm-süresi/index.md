# Olaya yanıt ve çözüm süresi

**Olaylara ilişkin süre ölçümleri, kullanıcıların her aşamada ne kadar beklediğini anlatır. Bu yüzden onları, saatleri yazılı olarak, dağılım biçiminde raporlayın, asla tek bir ortalama olarak değil; ve her hız rakamını, düzeltmenin tutup tutmadığına dair bir ölçümle eşleştirin.**

## Genel bakış ve motivasyon

BT hizmet yönetiminde (ITSM) olay (incident), bir hizmette plansız bir kesinti ya da hizmet kalitesinde bir düşüştür. [Olay yönetimi](https://en.wikipedia.org/wiki/Incident_management), normal hizmeti güvenli olabildiğince hızlı geri getiren uygulamadır. ITIL 4'te uygulamanın adı olay yönetimidir ve [ITIL](https://en.wikipedia.org/wiki/ITIL) çerçevesinin hizmet yönetimi uygulamaları arasında yer alır. Çevik karşılıkları, takımın plansız işi birinci sınıf bir iş akışı olarak ele alma alışkanlığı ile servisleri yazılım mühendisliği yöntemleriyle işletme disiplini olan [site güvenilirliği mühendisliğinden](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE) gelen nöbet ve suçlamasız gözden geçirme uygulamalarıdır.

Süre, bir olayı anlatmanın en doğal yoludur ve en sık yanlış kullanılan yoldur. Tek bir olay birkaç aşamadan geçer. Bir şey bozulur, bir izleme aracı ya da bir kullanıcı fark eder, bir kişi uyarıyı kabul eder, biri işe başlar, hizmet kullanıcılar için geri getirilir ve neden ele alındığında ya da ertelendiğinde talep kaydı kapatılır. Bu olaylardan ikisi arasındaki her boşluk ayrı bir ölçümdür; ayrı bir sahibi, ayrı bir gecikme nedeni ve ayrı bir çaresi vardır. Hepsine “çözüm süresi” demek gecikmenin nerede yaşadığını gizler.

Bu konu, bir olayı baştan sona izleyen geçen süre ölçümlerini ele alır: **tespit süresi**, **kabul süresi**, **ilk yanıt süresi**, **geri getirme süresi** ve **çözüm süresi**. Ayrıca açık olayların yaşını, bir olayın el değiştirme sayısını ve en iyi bilinen özetin, ortalama geri getirme ya da çözüm süresinin (MTTR) istatistiksel sorunlarını da ele alır. Sayılar, kategoriler ve öncelik başka yerde ele alınmıştır (bkz. Konu 3.2 “Olay hacmi ve önceliği”). Büyük ve olağandışı olayların kendi ölçümleri vardır (bkz. Konu 3.4 “Büyük olay metrikleri”).

### Bu konuda kullanılan terimler

- **Tespit süresi (Time to detect, TTD).** Arızanın kullanıcıları etkilemeye başladığı andan, kurumun izleme ya da bir kullanıcı bildirimi yoluyla bunu öğrendiği ana kadar geçen süre.
- **Kabul süresi (Time to acknowledge, TTA).** Uyarının ya da talep kaydının oluşturulduğu andan, adı belli bir kişinin ya da takımın sahipliği kabul ettiği ana kadar geçen süre.
- **İlk yanıt süresi.** Olayın kaydedildiği andan, etkilenen kullanıcıya ilk anlamlı eylem ya da iletinin ulaştığı ana kadar geçen süre. Otomatik bir yanıt sayılmaz.
- **Geri getirme süresi.** Kullanıcı etkisinin başladığı andan, altta yatan neden yalnızca bir geçici çözümle atlatılmış olsa bile, kullanıcıların hizmeti yeniden kullanabildiği ana kadar geçen süre.
- **Çözüm süresi.** Olayın kaydedildiği andan, hizmet geri getirildiği ve kullanıcı onayladığı ya da onaylamak için makul bir fırsat bulduğu için olayın kapatıldığı ana kadar geçen süre.
- **Ortalama geri getirme ya da çözüm süresi (MTTR).** Bu sürelerden birinin bir olay kümesi üzerindeki aritmetik ortalaması. R harfi, konuşanın kim olduğuna göre onarım, kurtarma, geri getirme, çözme ya da yanıt olarak okunur ve kısaltmanın ilk sorunu budur. [Ortalama onarım süresine ilişkin Wikipedia makalesi](https://en.wikipedia.org/wiki/Mean_time_to_repair) bu varyantları listeler.
- **Hizmet düzeyi anlaşması (SLA).** [Hizmet düzeyi anlaşması](https://en.wikipedia.org/wiki/Service-level_agreement), bir sağlayıcı ile bir müşteri arasında hizmet düzeyine ilişkin bir taahhüttür ve çoğu zaman önceliğe göre hedef yanıt ve çözüm sürelerini içerir.

### Ortalama neden zayıf bir özettir

Olay süreleri simetrik değildir. Olayların çoğu kısadır, birkaçı çok uzundur ve uzun olanlar her ortalamaya egemen olur. Bu türden süreler çoğu zaman [log-normal dağılım](https://en.wikipedia.org/wiki/Log-normal_distribution) gibi sağa çarpık bir biçimle iyi tanımlanır. Çarpık verilerde ortalama, tipik bir olayın göründüğü düzeyin çok üzerinde olabilir ve tek bir uzun kesinti onu, bir aylık iyileştirmeden daha fazla hareket ettirebilir.

Google'ın SRE takımı bu sorunun bir analizini yayımlamıştır. İncelediği olay veri kümeleri için olay sürelerindeki yayılımın, MTTR'nin gerçek iyileştirmeleri gizleyebileceği ya da gürültü olan değişiklikleri gösterebileceği kadar geniş olduğunu savunur ve bunun yerine dağılımlara bakılmasını önerir (Davidovič, 2021, kaynaklarda listelenmiştir). Gerekçe iyi bilinen istatistiklere dayanır; bu yüzden kimsenin sonucuna güvenmeden kendi verilerinizde kontrol edebilirsiniz: olay sürelerinizi çizin, ortalamayı ve [ortancayı](https://en.wikipedia.org/wiki/Median) hesaplayın ve ikisinin birbirinden ne kadar uzak olduğuna bakın (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

Alternatif [yüzdelik dilimlerdir](https://en.wikipedia.org/wiki/Percentile). Ortanca, tipik bir kullanıcının ne kadar beklediğini söyler. 85. ya da 95. yüzdelik dilim, şanssızların ne kadar beklediğini söyler. Müşteriler ortalamayı değil, uzun beklemeyi hatırlar; bu yüzden “bu önceliğin her on olayından dokuzu belirtilen bir süre içinde geri getirilir” gibi bir yüzdelik dilim taahhüdü, onların deneyimine bir ortalamadan çok daha iyi uyar.

### ITIL ve çevik görüşler nasıl ayrılır

ITIL görüşü bir öncelik ve bir hedeften başlama eğilimindedir. Etki ve aciliyet bir öncelik belirler, öncelik hedef yanıt ve çözüm sürelerini belirler ve bir hizmet düzeyi anlaşması bunların kaçırılmasına sonuçlar bağlayabilir. Bu düzenli ve denetlemesi kolaydır; hedeflerin davet ettiği manipülasyona da yatkındır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Çevik ve SRE görüşü kullanıcı etkisinden ve akıştan başlar. Takımın zararı ne kadar çabuk sınırladığını, bir olayın geçen süresinin ne kadarının aktif iş ve ne kadarının bekleme olduğunu ve takımın ne öğrendiğini sorar. Talep kaydı durumunun ölçümleri yerine etki ölçümlerini (etkilenen kullanıcılar, hizmetin bozulmuş olduğu dakikalar) tercih eder ve talep kaydı saatini kullanışlı ama kusurlu bir vekil olarak ele alır. İki görüş uyumludur. Neyin kim için ölçüleceğine karar vermek için ITIL'in öncelik yapısını, rakamın bir anlam taşıyıp taşımadığına karar vermek için de akış ve etki düşüncesini kullanın.

## Temel ilkeler

- **“Çözüm” yerine aşamayı adlandırın.** Tespit, kabul, yanıt, geri getirme ve çözüm, farklı sahipleri olan farklı sorulardır. Her birini kendi adı altında raporlayın.
- **İki saati de yazın.** Her süre ölçümü hangi olayın onu başlattığını, hangisinin durdurduğunu ve hangi durumların duraklattığını belirtir. Manipülasyonun çoğu bu sınırlarda yaşar.
- **Dağılımları raporlayın.** Ortancayı, yüksek bir yüzdelik dilimi ve en eski açık olayın yaşını gösterin. Çarpık verilerin güvenilmez kıldığı yalnız bir ortalamadan kaçının.
- **Geri getirmeyi kapanıştan ayrı ölçün.** Kullanıcılar hizmetin ne zaman geri geldiğini önemser. Talep kaydı, neden ele alındıktan sonra daha geç kapanabilir.
- **Hızı dayanıklılıkla eşleştirin.** Aynı olayın ertesi gün geri aldığı hızlı bir geri getirme bir iyileştirme değildir. Her süre ölçümünün yanında tekrar ve yeniden açılma oranlarını gösterin.
- **Takımları, hizmetleri ve sistemleri tanımlayın.** Bireysel temsilcileri ya da mühendisleri yanıt ya da çözüm süresine göre asla sıralamayın.
- **Karşılaştırmadan önce bölümleyin.** Benzerleri benzerlerle, öncelik ve hizmete göre karşılaştırın; çünkü karışık bir sayı parola sıfırlamalarını veritabanı arızalarıyla karıştırır.

## Metrik tanımları

Her satır saatlerini belirtir. Takvim zamanı ve iş saati farklıdır: hangisini kullandığınızı söyleyin. Bir ölçümün yüzdelik dilim kullandığı yerlerde tablo 50. ve 95. yüzdelik dilimi verir ve takımlar 85.'yi ekleyebilir.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tespit süresi | Kurum öğrenmeden önce bir arızanın kullanıcıları ne kadar süre etkilediği | Saat, kullanıcı etkisinin ilk anında başlar (izleme verisinden ya da incelemede kaydedilen doğrulanmış etki başlangıcından alınır); ilk uyarıda ya da kullanıcı bildiriminde durur. Hizmet başına ortanca ve 95. yüzdelik dilim olarak raporlanır. Bilinen başlangıcı olmayan olaylar atılmaz; sayılır ve ayrıca raporlanır | dakika | İzleme ve uyarı platformu; etki başlangıcı alanı olan olay kaydı | Olay yönetimi; izleme ve olay yönetimi | Gözlemlenebilirlik ve uyarı kalitesi çalışması (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”) | Aylık |
| Kabul süresi | Oluşturulmuş bir uyarının ya da talep kaydının bir kişi tarafından sahiplenilmeden önce ne kadar beklediği | Saat, uyarı tetiklendiğinde ya da talep kaydı oluşturulduğunda başlar; adı belli bir kişi ya da takım onu kabul ettiğinde durur. Otomatik atama saati durdurmaz. Önceliğe göre ortanca ve 95. yüzdelik dilim olarak raporlanır | dakika | Çağrı aracı; ITSM aracı atama geçmişi | Olay yönetimi; hizmet masası | Bir SRE rotasyonunda nöbet yanıtı | Aylık |
| İlk yanıt süresi | Kullanıcının ilk insan yanıtı ve yararlı bir yanıt için ne kadar beklediği | Saat, olay kaydedildiğinde başlar; bildirimi ele alan ilk insan iletisinde ya da eyleminde durur. Otomatik onaylar ve şablonlu makbuzlar hariç tutulur. İş saati saati belirtilir | dakika ya da iş saati | ITSM aracı iletişim günlüğü | Hizmet masası; olay yönetimi | Bir çalışma anlaşmasında olduğu gibi kullanıcıya zamanında geri bildirim | Haftalık |
| Geri getirme süresi | Kullanıcıların çalışan bir hizmet olmadan ne kadar kaldığı | Saat, kullanıcı etkisinin başında başlar; kullanıcılar, geçici çözüm ya da geri alma yoluyla da olsa hizmeti yeniden kullanabildiğinde durur. Nedenin sonradan düzeltilmesi süreyi uzatmaz. Önceliğe ve hizmete göre ortanca ve 95. yüzdelik dilim olarak raporlanır | dakika ya da saat | Etki başlangıcı ve geri getirme zaman damgaları olan olay kaydı; izleme | Olay yönetimi | DORA terimleriyle ortalama geri getirme süresi, dağılım olarak okunur (bkz. Konu 2.8 “DORA metrikleri”) | Aylık |
| Çözüm süresi | Olay kaydının kapatılana kadar ne kadar açık kaldığı | Saat, olay kaydedildiğinde başlar; geri getirme ve kullanıcı onayı ya da makul bir bekleme sonrasında kapatıldığında durur. “Müşteri bekleniyor” durumunda geçen süre ayrı, raporlanan bir pay olarak gösterilir ve manşetten çıkarılmaz. Önceliğe göre ortanca ve 95. yüzdelik dilim olarak raporlanır | saat ya da iş saati | ITSM aracı durum geçmişi | Olay yönetimi | Plansız iş için çevrim süresi (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”) | Aylık |
| En eski açık olayın yaşı | En uzun süredir açık olan olayın ne kadar süredir açık olduğu | Her açık olay için şimdi eksi kaydedilme zamanı; önceliğe göre en eski birkaçı listelenir. Duraklatma durumları çıkarılmaz | gün | ITSM aracı açık olay listesi | Olay yönetimi | Takım panosunda iş kalemi yaşı (bkz. Konu 2.1 “Akış ölçümleri”) | Haftalık |
| Aktif süre payı | Bir olayın geçen süresinin beklemek yerine aktif işte harcanan oranı | Aktif durumlarda geçen süre toplamı / kaydedilmeden kapatılmaya kadar geçen toplam süre, dönemde kapatılan olaylar için. Aktif durumlar, bir kişinin olay üzerinde çalıştığı durumlardır; bekleme durumları tanımda listelenir | yüzde | ITSM aracı durum geçmişi | Olay yönetimi | Akış verimliliği (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”) | Üç aylık |
| Yeniden atama sayısı | Bir olayın geri getirilmeden önce sahip takımı kaç kez değiştirdiği | Kaydedilmeden geri getirilmeye kadar atama grubu değişikliklerinin sayısı; ortanca ve üç ya da daha fazla değişikliği olan olayların payı olarak özetlenir. Hizmet ve öncelik başına sayılır, asla temsilci başına değil | sayı | ITSM aracı atama geçmişi | Olay yönetimi; hizmet masası | Devir sayısı (bkz. Konu 9.3 “İş birliği ve devir teslim metrikleri”) | Aylık |

Veriye ilişkin iki not. Birincisi, bir geri getirme süresi yalnızca başlangıç zamanı kadar iyidir. Birçok olay kaydı, birinin talep kaydını yazdığı anı yakalar ve bu an gerçek etki başlangıcının saatler gerisinde kalabilir. Aracınızda etki başlangıcı alanı yoksa bir tane ekleyin ve tahmini başlangıçları tahmin olarak ele alın (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”). İkincisi, dönemleri karşılaştırırken aynı öncelik tanımlarını koruyun; aksi halde eğilim çizgisi yeniden sınıflandırmayı yansıtır.

## Öneriler

### Saatleri tanımlayın

**1. Her süre ölçümü için bir saat çizelgesi yazın.** Her aşama için başlangıç olayını, bitiş olayını, saati duraklatan durumları, zaman temelini (takvim ya da iş saati) ve hariç tutmaları listeleyin. Bunu metrik kayıt defterinde tutun (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

**2. Geri getirmeyi kapanıştan ayırın.** Hizmetin kullanıcılar için ne zaman geri geldiğini, talep kaydının ne zaman kapandığından ayrı, kendi zaman damgası olarak kaydedin. Geri getirme kullanıcıların hissettiği şeydir ve kapanış doğrulamayı, belgelemeyi ve neden ele alınmasını içerir. İkisi için tek bir zaman damgası kullanan takımlar, talepleri erken kapattıkları için ödüllendirilir ya da dikkatli takip yaptıkları için cezalandırılır.

**3. Yalnızca kaydedilme zamanını değil, etki başlangıcını kaydedin.** Müdahale edenlerden, mümkün olduğunda izleme verisini kullanarak kullanıcıların etkiyi ilk ne zaman hissettiğini doldurmalarını isteyin. Alan tahmin olduğunda bunu işaretleyin. Tespit süresi onsuz anlamsızdır ve geri getirme süresi onun yokluğuyla çarpılır.

**4. Duraklatma durumlarını sınırlayın ve kullanımlarını raporlayın.** Bir müşteriyi ya da tedarikçiyi beklemek bazen meşrudur. Kısa, adlandırılmış bir duraklatma durumu listesine izin verin, bir gerekçe isteyin ve olay zamanının her birinde harcanan payını gösterin. Artan bir duraklatılmış zaman payı, hızın değil, sürüklenmenin işaretidir.

### Dürüstçe raporlayın

**5. Ortalamayı ortanca ve yüksek bir yüzdelik dilimle değiştirin.** Her aşama için 50. ve 95. yüzdelik dilimi, önceliğe göre, bir zaman serisi olarak gösterin. Her noktanın arkasındaki olay sayısını gösterin, çünkü on olayın yüzdelik dilimi zayıf bir rakamdır. Sayıların küçük olduğu yerlerde bireysel olayları nokta olarak çizin ve özet çizgisini atlayın.

**6. En eski açık olayların yaşını gösterin.** Kapatılmış olay sürelerinin bir grafiği, hâlâ açık olan ve en kötü olan olaylara karşı kördür. Her hafta, önceliğe göre en eski açık olayları listeleyin. İşi bitirmeden bunu iyileştirmek zordur, bu yüzden her çözüm süresi grafiğine yararlı bir eşlikçidir.

**7. Önceliğe ve hizmete göre bölümleyin.** Karışık bir çözüm süresi, her olay türü daha hızlı ele alınsa bile karışım karmaşık olaylara doğru kaydığında yükselir. Bir öncelik içinde ve bir hizmet içinde karşılaştırın ve karışımı sürenin yanında gösterin (bkz. Konu 3.2 “Olay hacmi ve önceliği”). Karışımın değiştiği bir aydan sonuç çıkarmayın.

**8. Sinyali gürültüden ayırmak için kontrol sınırları kullanın.** Olay süreleri hiçbir şey değişmeden haftadan haftaya çok değişir. Kararlı bir dönemden hesaplanan sınırlara sahip bir kontrol grafiği, bir kaymanın açıklanmaya değecek kadar büyük olduğunu gösterir (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

### Hızı dayanıklılıkla eşleştirin

**9. Her süre ölçümünün yanında yeniden açılma ve tekrar oranlarını gösterin.** Yeniden açılma oranı, belirtilen bir pencere içinde yeniden açılan olayların payıdır. Tekrar, aynı hizmetin ve belirtinin bir pencere içinde yeniden ortaya çıkmasıdır. Geri getirme süresi düşerken tekrar yükseliyorsa, takım hızlı yamalar uyguluyordur. Tekrarlayan olayları sorun yönetimine gönderin (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

**10. Zamanın nereye gittiğini bulmak için beklemeyi ve devirleri ölçün.** Çoğu hizmette bir olayın geçen süresinin büyük bölümü çalışmak yerine bir kişiyi, bir kararı ya da bir tedarikçiyi beklemektir. Aktif süre payı ve yeniden atama sayısı nereye bakılacağını gösterir. Uzun bir çözüm süresinin çaresi çoğu zaman daha hızlı yazmak değil, daha net bir yönlendirme kuralı ya da ortak bir nöbettir.

**11. Hedefleri yüzdelik dilimlere koyun ve döngüde bir insan bulundurun.** Bir hedefe ihtiyacınız varsa bunu bir öncelik için bir yüzdelik dilim taahhüdü olarak ifade edin; örneğin “öncelik 2 olaylarının her on tanesinden dokuzu belirtilen bir süre içinde geri getirilir”; ve bunu karşılayacak insanlarla birlikte kararlaştırın. İhlalleri nöbetçi kişinin hataları olarak değil, sistem hakkında sorular olarak ele alın (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

**12. Kullanıcılara deneyimi sorun.** Kapatılmış olayların bir örneklemi üzerinde kısa bir anket ve yorumların okunması, sayının beklemenin hissedilişiyle örtüşüp örtüşmediğini söyler. Kullanıcılar çoğu zaman geri getirmenin tam dakikasından çok zamanında iletişimi önemser (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruma metriği ya da uygulaması |
| --- | --- | --- |
| Tespit süresi | Etki başlangıcını olduğundan daha geç ayarlamak; daha az arızanın olay sayılması için uyarı eşiklerini genişletmek; yalnızca izlemenin yakaladığı olayları saymak | Olayların izleme yerine kullanıcılar tarafından ilk bildirilen payı; etki başlangıcı tahminlerinin izleme verisine karşı düzenli gözden geçirilmesi |
| Kabul süresi | Saati durdurmak için otomatik atamak ya da otomatik kabul etmek; uyarıyı kabul edip sonra hiçbir şey yapmamak | Aynı olaylar için ilk yanıt süresi ve geri getirme süresi; sonrasında hiç etkinliği olmayan kabul edilmiş uyarıların örneklemesi |
| İlk yanıt süresi | Saati durdurmak için şablonlu ya da tek sözcüklü bir yanıt göndermek | İlk yanıtların özlerine göre bir örneklemin gözden geçirilmesi; tekrar iletişim ve anket yorumları |
| Geri getirme süresi | Kullanıcılar hizmeti kullanamadan hizmeti geri getirilmiş ilan etmek; belirtiyi bastırarak geri getirmek; kesintileri planlı bakım olarak kaydetmek | Bir pencere içinde tekrar; geri getirme süresinden sonra kullanıcıların bildirdiği etki; sonradan yeniden etiketlenen olayların payı |
| Çözüm süresi | Talep kayıtlarını “müşteri bekleniyor” ya da “beklemede” durumuna taşımak; tek bir ulaşma girişiminden sonra kapatmak; ana kaydı erken kapatmak için olayı çocuklara bölmek | Duraklatma durumlarında geçen sürenin payı; yeniden açılma oranı; en eski açık olayın yaşı; kapanış notlarından bir örneklemin okunması |
| En eski açık olayın yaşı | En eski talep kaydını kapatıp yeniden oluşturmak; listeden çıkarmak için onu bir sorun ya da talep olarak yeniden sınıflandırmak | Yinelenenleri orijinallerine bağlayın ve bağlı yaşı raporlayın; her dönemde sorunlara ya da taleplere dönüştürülen olayların sayısı |
| Aktif süre payı | Zamanı aktif olarak işaretlemek için kısa, anlamsız iş kaydetmek; emek harcamadan aktif durumlara geçmek | Aktif süreyi geri getirme süresi gibi sonuçlarla karşılaştırmak; iş notlarının örneklemesi |
| Yeniden atama sayısı | Devretmek yerine aynı takım altında yeniden açmak; aracın devir göstermemesi için işi bir yan kanaldan aktarmak | Geri getirme süresi ve kullanıcı memnuniyeti; işin takımlar arasında nasıl hareket ettiğinin düzenli gözlemi |

Sağlıklı bir okuma, birlikte hareket eden ortancaları ve kuyruk yüzdelik dilimlerini, duraklatılmış sürenin küçük ve kararlı bir payını, ilk kez kullanıcılar tarafından bildirilen az sayıda olayı, düşen tekrarı ve talep kaydı verisiyle örtüşen anket yorumlarını gösterir. Tek başına gelen bir manşet iyileşmesini, bir manipülasyon gözden geçirmesi için bir ipucu olarak ele alın.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Ortalama geri getirme süresi | Tanıdık; tek bir sayı; eğilimini izlemesi kolay | Birkaç uzun olaya egemen; gerçek değişimi gizler; küçük örneklemlerde zayıf |
| Ortanca artı yüksek bir yüzdelik dilim | Tipik ve şanssız deneyimi anlatır; aykırı değerlere dayanıklı | Yeterli olay gerektirir; açıklanacak iki sayı |
| Her olayı çizmek | Tam biçimi ve aykırı değerleri gösterir; düşük hacimde dürüst | Yüksek hacimde okuması daha zor; bir kolaylaştırıcı gerektirir |
| Önceliğe göre hedefler | Net beklentiler; sözleşmeleri ve yükseltmeyi destekler | Yeniden sınıflandırmayı ve saat duraklatmayı davet eder; emeği hedef sınırına sürükleyebilir |
| Talep kaydı saati ölçümleri | Ucuz, her ITSM aracında mevcut | Kullanıcının deneyimini değil, talep kaydını ölçer; durum iş akışına duyarlı |
| Etkiye dayalı ölçümler | Kullanıcıların hissettiğine yakın; talep kaydı hilelerine dayanıklı | İzleme verisi ve bir etki başlangıcı alanı gerektirir; denetlemesi daha zor |

Pragmatik yanıt, her araçta bulunduğu için talep kaydı saatini korumak, izlemenin izin verdiği yerde etkiye dayalı bir geri getirme zaman damgası eklemek ve her ikisi için de dağılımları kullanmaktır. Ortalama, benzer olaylardan oluşan tek, kararlı, büyük bir kümenin kaba bir tanımı olarak kabul edilebilir ve asla sayfadaki tek sayı olmamalıdır.

## Takımınızla tartışılacak sorular

**1. Bizim için bir olayın hangi aşaması en uzun sürüyor ve bunu nereden biliyoruz?**
Olay zaman çizelgesini, etki başlangıcından kapanışa kadar aşamalarla bir panoya çizin. Son on olayı alın ve her aşamanın ne kadar sürdüğünü, araç verisini ve müdahale edenlerin hafızasını kullanarak işaretleyin. Kolaylaştırıcı, sürenin kümelendiği aşamaya bakmalıdır; bu çoğu zaman teknik iş değil, bir devri ya da bir kararı beklemektir. Önce hangi aşamanın dikkati hak ettiği üzerinde anlaşın.

**2. Saatimiz nerede başlıyor ve nerede duruyor ve buna kim karar verdi?**
Her kişiden, bir olayın ne zaman “başladığına” ve ne zaman “bittiğine” inandığını söylemesini isteyin. Yanıtlar farklı olacaktır ve farklar bulgudur. Bunları araçtaki alanlarla ve durum iş akışıyla karşılaştırın. Üzerinde anlaşılan tanımları metrik kayıt defterine alın ve aracın henüz bunları desteklemediği yerleri not edin.

**3. Ortancalarımız ve 95. yüzdelik dilimlerimiz, ortalamanın gizlediği neyi gösterirdi?**
Toplantıdan önce, geçen çeyreğin olayları için öncelik bazında ortalamayı, ortancayı ve 95. yüzdelik dilimi hesaplayın. Bunları yan yana gösterin ve süreleri çizin. Takımın her birinden ne sonuç çıkaracağını sorun. Kolaylaştırıcı, bir ya da iki olayın ortalamayı hareket ettirip ettirmediğini fark etmeli ve takımın ortancanın tipik bir kullanıcının beklemesini temsil ettiğine inanıp inanmadığını tartışmalıdır.

**4. Çalışmak yerine beklemekle ne kadar zaman harcıyoruz ve neden?**
Üç uzun olay seçin ve durum geçmişlerini izleyin. Aktif durumlardaki saatleri ve bekleme durumlarındaki saatleri sayın ve kimin ya da neyin beklendiğini not edin. Hangi beklemelerin bir kararla, daha net bir yükseltme yoluyla ya da ortak bir nöbetle kısaltılabileceğini sorun.

**5. Çözüm süresini dörtte bir oranında kısaltmamız istenseydi, bunu kullanıcılara yardım etmeden nasıl yapardık?**
Bu, manipülasyon gözden geçirmesinin küçük bir halidir. Hizmeti iyileştirmeden sayıyı iyileştirecek her hamleyi listeleyin; saati duraklatmak, erken kapatmak ya da öncelikleri yeniden etiketlemek gibi. Her hamle için bir koruma önleminin bunu yakalayıp yakalamayacağını sorun. Liste, manipülasyon vektörü sütununuzun başlangıcıdır ve tanımların nerede sıkılaştırılması gerektiğini gösterir.

**6. Daha hızlı bir geri getirmenin gerçek olduğunu nasıl bileceğiz?**
Kanıt isteyin: tekrar, yeniden açılma, kullanıcı yorumları ve aynı belirtiyle sonradan gelen herhangi bir olay. Yakın tarihli bir iyileştirmeye bakın ve bir ay sonra tutup tutmadığını sorun. Kolaylaştırıcı grubu kalıcı çözümlere yönlendirmelidir. Hangi dayanıklılık ölçümünün panoya katılacağına karar vererek bitirin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Kendi hizmetlerini işleten ürün takımları, olay süresini planlı işin yerini alan plansız işin bir maliyeti olarak görür. Her akış döneminin ne kadarının olaylar tarafından alındığını izleyin ve tekrarlanan olayları sahip takım için birikim listesi kalemleri olarak ele alın. Geri almayı hızlı kılan yayın uygulamaları geri getirmeyi kısaltır; bu yüzden olay süresi kısmen bir teslimat ölçümüdür (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

### Hizmet ve operasyon takımları

Operasyon takımları saatlerin sahibidir ve hedeflerin baskısını hisseder. Saat çizelgesini yayımlamalı, duraklatma durumu kullanımını denetlemeli, önceliğe göre ortancaları ve kuyruk yüzdelik dilimlerini raporlamalı ve en eski açık olayların haftalık bir listesini tutmalıdır. Nöbet yükü ve uyarı kalitesi kabul ve tespit sürelerini şekillendirir; bu yüzden bunlara birlikte bakın (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”).

### Liderlik ve yönetişim

Liderler, bir sayının neden kırmızı olduğunu değil, hangi aşamanın en yavaş olduğunu ve bu konuda ne yapıldığını sormalıdır. Yüzdelik dilim raporlaması, herhangi bir hız ölçümünün yanında bir dayanıklılık ölçümü ve tanımlar değiştiğinde bir açıklama beklemelidirler. İzleme, çalışma kitapları ve sorun çalışması için sağlanan fon çoğu zaman müdahale edenler üzerindeki baskıdan daha fazla karşılığını verir, çünkü müdahale edenlerin kontrol edemediği gecikmeyi azaltır.

### Müşteriler ve kullanıcılar

Kullanıcılar beklemeyi, iletişimin kalitesini ve sorunun geri gelip gelmediğini deneyimler. Aşama adlarını nadiren görürler. Onlara dürüst bir ilk yanıt verin, ne bekleyeceklerini söyleyin ve onları bir program dahilinde güncelleyin. Anket yorumları ve tekrar iletişimleri, talep kaydı saatinin gerçeği söyleyip söylemediğine ilişkin en iyi kontroldür.

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci bir sipariş platformu, bir müşteri hesabı hizmeti ve bir dahili depo sistemi işletir. Ürün takımları kendi hizmetlerinin sahibidir ve küçük bir operasyon grubuyla bir nöbet rotasyonunu paylaşır. Bu örnekteki tüm sayılar örnek niteliğindedir.

Liderlik, öncelik 2 olayları için “ortalama çözüm süresi dört saatin altında” hedefi koyar. İlk çeyrekte pano 3,8 saatlik bir ortalama gösterir ve hedef karşılanmış görünür. Depo personeli bazı kesintilerin bütün gün sürmüş gibi göründüğünü söyler. Operasyon lideri çeyreğin 41 öncelik 2 olayını (örnek) çizer ve 1,5 saatlik bir ortanca ile 11 saatlik bir 95. yüzdelik dilim bulur. Üç olay uzun kuyruğun çoğunu oluşturur.

Üç uzun olayı izler. Her biri zamanının çoğunu “tedarikçi bekleniyor” ya da “müşteri bekleniyor” durumunda geçirmiştir. İkisinde talep kaydı, asıl kayıt “ihlal ettiğinde” kapatılmış ve yeni bir olay olarak yeniden oluşturulmuş, bu da saati sıfırlamıştır. Üçüncüsü, iki gün boyunca takımlar arasında dört yeniden atama içermiştir. Kapanış notlarından bir örneklem, gözden geçirilen 30 talep kaydından 6'sının (örnek) kullanıcıya ulaşmak için yapılan tek bir girişimden sonra kapatıldığını gösterir.

Takım dört değişiklik yapar. Olay formuna bir etki başlangıcı alanı ve bir geri getirme zaman damgası ekler. Önceliğe göre ortancayı, 85. ve 95. yüzdelik dilimleri ve her hafta en eski açık olayları raporlar. Duraklatma durumlarında geçen sürenin payını ve tekrar oranını aynı sayfada gösterir. Ve yaşın aktarılması için yeniden oluşturulan talep kayıtlarını orijinallerine bağlar.

Bir sonraki gözden geçirmede, yeniden oluşturulan talep kayıtları artık tam olarak sayıldığı için manşet ortalaması 4,6 saate yükselmiştir. Takım bu artışı liderliğe bir düzeltme olarak açıklar. 95. yüzdelik dilim ve en eski açık talep kaydı artık üzerinde çalıştıkları sayılardır ve yeniden atama sayısı sipariş hizmeti ile depo sistemi arasındaki bir yönlendirme boşluğuna işaret eder. Ortak bir nöbet takma adı eklemeyi ve hemen yeni bir hedef belirlemek yerine etkisini önümüzdeki çeyrek boyunca gözden geçirmeyi kararlaştırırlar.

## Sektör mercekleri

**Girişim.** Hacim düşüktür, bu yüzden yüzdelik dilimler gürültülüdür ve bir özet yerine her olayın çizimi daha iyidir. Çoğu zaman tek bir kişi tespit eder, yanıt verir ve geri getirir; bu yüzden aşama ayrımı, her olayın yazılı bir zaman çizelgesinden daha az önemlidir. Her olay sonrası yazıya bir etki başlangıcı notu ekleyin ve yeterli olay olduğunda basit ortancaları hesaplayın.

**Küçük işletme.** Olayları yönetilen bir hizmet sağlayıcı ya da tek bir BT genelcisi ele alıyor olabilir ve sağlayıcının sözleşmesi yanıt ve çözüm hedeflerini tanımlayabilir. Sözleşme saatlerini dikkatle okuyun, çünkü çoğu zaman kullanıcılarınızın deneyiminden farklıdırlar. Önemli olaylar için etki başlangıcı ve geri getirmenin kısa bir günlüğünü tutun ve sağlayıcıdan altta yatan kayıtları isteyin; çünkü özet bir rakam saatleri gizler.

**Büyük kurum.** Birçok takım, tedarikçi ve öncelik şeması karşılaştırmayı çekici ve yanıltıcı kılar. Saat tanımlarını ve öncelik anlamlarını kurum genelinde standartlaştırın, ortalamalar yerine dağılımlar yayımlayın ve hizmete göre bölümleyin. Raporlama katmanlarının sayısıyla büyüyen duraklatma durumu sürüklenmesine ve yeniden sınıflandırmaya dikkat edin.

**Devlet ve kamu sektörü.** Sözleşmeler, yasal raporlama ve denetim saatleri ve öncelik tanımlarını sabitleyebilir. Bu yükümlülükleri yazıldığı gibi karşılayın ve yanlarında ikinci, kullanıcı odaklı bir görünüm tutun; böylece uyum kötü bir deneyimi gizlemez. Bir saat kuralı değiştiğinde tanımlar ve düzeltmeler konusunda açık olun (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bu konunun maliyeti çoğunlukla tasarım ve disiplindir. Saat çizelgelerini yazmak birkaç saat, bir etki başlangıcı alanı ve bir geri getirme zaman damgası eklemek biraz yapılandırma ve yüzdelik dilim raporları oluşturmak mütevazı bir emek gerektirir. ITSM aracı ya da bir izleme platformu zaman damgalarını zaten tutuyorsa, çıkarma tek seferlik bir iştir. Yinelenen maliyet aylık bir gözden geçirme ve kapatılmış olayların üç aylık bir örneklemidir.

Getiri daha iyi kararlardan ve daha az yeniden işten gelir. Dağılım raporlaması bir iyileştirmenin işe yarayıp yaramadığını gösterir ve aşama raporlaması emeği devirler, tespit boşlukları ya da tedarikçi beklemeleri gibi gerçek gecikmeye yönlendirir. Dayanıklılık ölçümleri, tekrar eden olaylar olarak geri gelen hızlı yamaların sahte tasarrufunu önler. Bir çeyrek boyunca kendi başlangıç değerinizi ölçün, bir değişiklik yapın ve dağılımları karşılaştırın.

## Anti-desenler ve tuzaklar

- **Yönetici panosunda tek bir MTTR.** Çarpık verinin ortalaması yanıltır. Ortancayı, yüksek bir yüzdelik dilimi ve en eski açık olayı gösterin ve her noktanın arkasında kaç olay olduğunu söyleyin.
- **Öncelikleri ve hizmetleri karıştırmak.** Bir karışım kayması performans değişikliği gibi görünür. Öncelik ve hizmete göre bölümleyin ve karışımı gösterin.
- **Saati duraklatma durumlarıyla durdurmak.** Zaman “bekleniyor” ve “beklemede” içinde kaybolur. İzin verilen durumları listeleyin, gerekçe isteyin ve her birinde geçen sürenin payını raporlayın.
- **Talep kayıtlarını kapatıp yeniden oluşturmak.** Yaşı sıfırlar ve uzun olayı gizler. Yeniden oluşturulan talep kayıtlarını orijinallerine bağlayın ve bağlı yaşı raporlayın.
- **Geri getirme ve kapanış için tek bir zaman damgası kullanmak.** Takımlar o zaman erken kapatma için ödüllendirilir ya da dikkatli takip için cezalandırılır. İkisini de kaydedin ve ikisini de raporlayın.
- **Temsilcileri ya da mühendisleri çözüm süresine göre sıralamak.** Kolay talep kayıtlarını ve seçip ayıklamayı ödüllendirir; yardımı ve yükseltmeyi caydırır. Yalnızca takım ve hizmete göre raporlayın.
- **Dayanıklılık ölçümleri olmayan hedefler.** Yarın başarısız olacak hızlı bir yama başarı gibi görünür. Her hedefin yanında tekrar ve yeniden açılma oranını gösterin.
- **Küçük örneklemleri eğilim saymak.** Bir avuç olaydan gelen bir 95. yüzdelik dilim bir tahmindir. Bireysel olayları çizin ve bir çizgi çekmeden önce daha fazla veri bekleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve saatler | Herkes farklı ölçer; tek bir “çözüm süresi” | Saatler bazı takımlar için yazılmıştır; aşamalar kısmen ayrılmıştır | Duraklatma durumları listelenmiş, tüm aşamalar için tek bir saat çizelgesi | Tanımlar gözden geçirilir ve değişiklikler gerekçeleriyle kaydedilir | Tanımlar tedarikçiler ve müşterilerle uyumlu hale getirilir, kararlara bilgi vermeyi bıraktıklarında yeniden düzenlenir |
| Veri kalitesi | Elle notlar; etki başlangıcı bilinmez | Talep kaydının oluşturulması ve kapatılması için araç zaman damgaları | Öncelikli olaylar için etki başlangıcı ve geri getirme kaydedilir | Veri örneklemeyle denetlenir; tahminler işaretlenir | İzleme ve ITSM verileri otomatik olarak birleştirilir ve takımlar arasında güvenilir kabul edilir |
| İstatistik uygulaması | Yalnızca ortalama | Ortalama ve ortanca gösterilir | Önceliğe ve hizmete göre ortanca ve yüksek bir yüzdelik dilim | Kontrol sınırları kullanılır; dayanıklılık ölçümleri eşleştirilir | Dağılımlar kullanıcı deneyimine bağlanır ve nereye yatırım yapılacağına karar vermek için kullanılır |
| İyileştirmede kullanım | Sayılar bireylerin peşine düşmek için kullanılır | Takım kendi sayılarını görür | Takım aşama sürelerini ve beklemeyi aylık gözden geçirir | Yavaş aşamalar fonlanan iyileştirme çalışmasına yol açar | İyileştirme takımlar ve tedarikçiler arasında paylaşılır ve ölçümler gelişir |

## Kontrol listesi

- [ ] Her aşamanın (tespit, kabul, yanıt, geri getirme, çözüm) yazılı bir başlangıç, bitiş ve duraklatma kuralı var.
- [ ] Etki başlangıcı ve geri getirme zamanı, öncelikli olaylar için ayrı alanlar olarak kaydediliyor.
- [ ] Raporlar ortancayı ve yüksek bir yüzdelik dilimi, öncelik ve hizmete göre gösteriyor.
- [ ] Raporlanan her noktanın arkasındaki olay sayısı gösteriliyor.
- [ ] En eski açık olaylar haftalık listeleniyor.
- [ ] Duraklatma durumları kısa, adlandırılmış bir liste ve zaman payları raporlanıyor.
- [ ] Yeniden açılma oranı ve tekrar, her süre ölçümünün yanında gösteriliyor.
- [ ] Yeniden oluşturulan talep kayıtları, yaş aktarılsın diye orijinallerine bağlanıyor.
- [ ] Hiçbir süre ölçümü bireysel temsilcileri ya da mühendisleri sıralamak için kullanılmıyor.
- [ ] Kapatılmış olayların bir örneklemi dürüstlük için her çeyrek okunuyor.
- [ ] Müşteri anket yorumları talep kaydı verisinin yanında okunuyor.

## Yapay zekâ istemleri

**Olay sürelerimizin ortalamasını ve yüzdelik dilimlerini karşılaştırın.**

```text
[dönem] dönemini kapsayan [hizmet ya da takım] olay kayıtlarını yapıştıracağım.
Alanlar: [kaydedilme zamanı, etki başlangıcı, geri getirme zamanı, kapanış
zamanı, öncelik, durum geçmişi gibi alanları listeleyin]. [aşama adı, örneğin
geri getirme süresi] için [öncelik] bazında ortancayı, 85. yüzdelik dilimi, 95.
yüzdelik dilimi ve ortalamayı hesapla ve her rakamın arkasında kaç olay
olduğunu göster. Ortalamanın ortancadan ne kadar farklı olduğunu ve bu farkı
hangi olayların oluşturduğunu anlat. Veri ya da kıyaslama değeri uydurma.
Varsayımlarını, hariç tuttuğun satırları ve verinin sana söyleyemediği her şeyi
listele.

[kişisel veriler çıkarılmış olay verisini yapıştırın]
```

**Olay süresi ölçümlerimiz için bir saat çizelgesi taslağı hazırlayın.**

```text
[takım adı] için tespit süresi, kabul süresi, ilk yanıt süresi, geri getirme
süresi ve çözüm süresini kapsayan bir saat çizelgesi taslağı hazırla. ITSM
aracımız [araç adı], izlememiz [izleme aracı] ve durum iş akışımız [durumların
listesi]. Her aşama için başlangıç olayını, bitiş olayını, duraklatma durumlarını,
zaman temelini ([takvim ya da iş saati]), hariç tutmaları ve bir koruma
önlemiyle birlikte bir manipülasyon vektörünü ver. Varsaymak zorunda kaldığın
her maddeyi işaretle ve çizelgeyi tamamlamak için yanıtlamam gereken soruları
listele. Hedef uydurma.
```

**Birkaç uzun olayda geçen sürenin nereye gittiğini bulun.**

```text
İşte [hizmet] hizmetinden [sayı] uzun olayın durum geçmişi. Her olay için her
durumda geçen süreyi listele, aktif ve bekleme durumlarını şu kuralı kullanarak
işaretle: [hangi durumların aktif sayıldığı] ve [takımlar ya da gruplar]
arasındaki her yeniden atamayı not et. Bireyleri değil, olaylar arasındaki
örüntüleri raporla ve önce hangi aşamanın dikkati hak ettiğini öner. Verinin
göstermediği nedenler hakkında tahmin yürütme. Varsayımlarını ve hangi ek
alanların yardımcı olacağını listele.

[kişisel veriler çıkarılmış durum geçmişlerini yapıştırın]
```

**Olay süresi hedeflerimiz için bir manipülasyon gözden geçirmesi yapın.**

```text
[öncelik ya da hizmet] için [metrik adı] metriğini raporluyoruz; tanımı
[başlangıç ve bitiş olaylarıyla tanım]. Hedef [hedef] ve hedef kitle [hedef
kitle]. Sayının kullanıcılara yardım etmeden iyileşebileceği gerçekçi yolları
listele; saati duraklatmak, erken kapatmak, yeniden etiketlemek ya da talep
kayıtlarını yeniden oluşturmak gibi. Her yol için bunu açığa çıkaracak bir
koruma ölçümü ya da uygulaması öner ve o koruma önleminin kendisinin nasıl
manipüle edilebileceğini belirt. Kıyaslama ya da istatistik uydurma.
Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): raporlamak üzere olduğunuz bir olay süresi ölçümü için ilgili konuları ve eşleştirilmiş koruma önlemlerini bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konuda yapılan bir değişikliğin şablonu, manipülasyon tablosunu ve çapraz başvuruları tutarlı tutup tutmadığını kontrol etmek için kullanın.

## Temel çıkarımlar

- Bir olayın aşamaları vardır ve her aşamanın kendi saati, sahibi ve çaresi vardır. Ölçtüğünüz aşamayı adlandırın.
- Olay süreleri çarpıktır, bu yüzden ortalama yanıltır. Ortancayı, yüksek bir yüzdelik dilimi ve en eski açık olayın yaşını raporlayın.
- Her saatin nerede başlayıp nerede durduğunu yazın, etki başlangıcını ve geri getirmeyi talep kaydı kapanışından ayrı kaydedin ve duraklatma durumlarını sınırlayın.
- Her hız ölçümünü tekrar ve yeniden açılma oranı gibi bir dayanıklılık ölçümüyle eşleştirin.
- Takımları ve hizmetleri tanımlayın, bireysel temsilcileri asla; sayıların dürüst olduğunu kontrol etmek için kapatılmış olayların bir örneklemini okuyun.

## Kaynaklar ve ileri okuma

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
