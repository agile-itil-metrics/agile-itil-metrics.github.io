# Artımlı benimseme yol haritası

**Bulunduğunuz yerden başlayın, ilk ayda bir takıma yararlı bir şey sunun ve programı, her biri bir sonrakini hak eden küçük adımlarla büyütün.**

## Genel bakış ve motivasyon

Metrikler hakkındaki yönergelerin çoğu bir son durumu betimler: eksiksiz bir ölçüm kümesi, temiz bir veri deposu, her hedef kitle için bir pano, bir kanıt kültürü. Çok az kurum oraya bir planla varır. Vardıklarında bunu, her biri bir sonrakinden önce kendi masrafını çıkaran bir dizi küçük yararlı adımla yaparlar. Bu konu o ruhla bir yol haritası sunar: ilk 30 gün, sonraki 60 ve daha sonraki 90; bunlar birlikte kabaca 180 gün eder. Zamanlamalar kabaca bir biçimdir, söz değildir. Küçük bir takım daha hızlı, büyük veya temkinli bir takım daha yavaş ilerleyebilir.

Mantık, kitabın geri kalanında hizmetler için önerilen sürekli teslimat mantığının aynısıdır. İnce, çalışan bir dilimi erken teslim edin. Onu gerçek kullanıcıların önüne koyun. Onunla ne yaptıklarından öğrenin. Yardım edeni genişletin, etmeyeni bırakın. Altı ayını tasarıma harcayan ve şaşıran bir hedef kitleye eksiksiz bir pano sunan bir metrik programı, büyük sürümün eski hatasını tekrarlar: çok emek, geç geri bildirim ve sonucun kötü uyma olasılığının yüksek olması. Değer sunan ve öğrenme üreten bir şeyin en küçük sürümü olan [asgari uygulanabilir ürün](https://en.wikipedia.org/wiki/Minimum_viable_product) fikri, bir ürüne olduğu kadar bir programa da uygulanır.

Çevik hedefler yol haritasını birkaç yönden şekillendirir. Sürekli paydaş katılımı, ilk haftaların arka bir odada değil, sayıları kullanacak ve onlarla ölçülecek insanlarla geçirilmesi demektir. Sürekli iyileştirme, planın kendisinin program öğrendikçe gözden geçirilip değiştirilmesi demektir; bu, herkesin küçük ve istikrarlı iyileştirme uygulaması olan [kaizen](https://en.wikipedia.org/wiki/Kaizen) ruhundadır. Süregelen evrim, hiçbir ölçüm listesinin nihai olmadığı anlamına gelir. Sürdürülebilir tempo, yol haritasının bir takımın zamanından mütevazı bir pay istemesi ve programın yararından ağır basan bir raporlama yükü eklememesi demektir. Motivasyonu yüksek bireyler etrafında inşa etmek ise gönüllülerle ve onların önemsediği sorularla başlamak demektir.

Yol haritası bu bölümün diğer konularına saygı gösterir. Devreye alma konusundaki güven temel kurallarını varsayar (bkz. Konu 11.3 “Korku yaratmadan metrikleri devreye almak”), pano ilkelerini kullanır (bkz. Konu 11.1 “Hizmet metrikleri panosu tasarlamak”), değer kanıtlanana kadar araçları ince tutar (bkz. Konu 11.2 “Araç manzarası”) ve ilerlemeyi programın olgunluk profiliyle izler (bkz. Konu 11.4 “Metrik programları için olgunluk modeli”).

Üç fikir, erken çalışmayı sabitlemeye yardım eder. Birincisi, bir referans değerle başlayın. Birkaç aylık mevcut verinin bir [seyir grafiği](https://en.wikipedia.org/wiki/Run_chart), işlerin nasıl durduğunu gösterir ve sonraki değişikliklere karşılaştırılacak bir şey verir. İkincisi, başlangıçta [veri kalitesini](https://en.wikipedia.org/wiki/Data_quality) kontrol edin; çünkü en değerli erken iyileştirmeler çoğu zaman herhangi bir grafikten değil, işin nasıl kaydedildiğini düzeltmekten gelir. Üçüncüsü, sonuçları görünür kılın: kimse sormadan bir bakışta bilgi gösteren bir ekran olan [bilgi radyatörü](https://en.wikipedia.org/wiki/Information_radiator), bir takımın kendi verisini görmesine ve sohbetler başlatmasına yardım eder. İlk adımlar genellikle istekli katılımcılarla bir [pilot proje](https://en.wikipedia.org/wiki/Pilot_project) biçimini alır; ardından işe yarayanın daha geniş kurumda [değişim yönetimi](https://en.wikipedia.org/wiki/Change_management) olarak yayılması gelir (bkz. Konu 9.6 “Kurumsal değişim ve benimseme metrikleri”).

Hiçbir yol haritası her kuruma uymaz. Aşağıdaki plan, onu hayata geçirecek kişilerce uyarlanacak bir başlangıç noktasıdır.

## Temel ilkeler

- **Bulunduğunuz yerden başlayın.** Elinizdeki verileri, araçları ve alışkanlıkları kullanın. Yeni bir platformu beklemeyin.
- **Gönüllülerle pilot yapın.** Önemsedikleri sorular üzerinde çalışan bir ila üç istekli takım.
- **İlk ayda değer sunun.** Yönetim için bir rapor değil, bir takıma yardım eden bir şey.
- **Bir seferde tek ince dilim.** Bir kaynak, bir görünüm, bir avuç ölçüm; sonra genişletin.
- **Sözleri erkenden yazın.** İlk sayı paylaşılmadan önce kısa bir tüzük.
- **Gözden geçirin ve ayarlayın.** Her aşamanın sonunda neyin yardımcı olduğunu, neyin zarar verdiğini ve neyin değişeceğini kontrol edin.
- **Bazı şeyleri durdurun.** Yenileri geldikçe kimsenin kullanmadığı ölçümleri ve raporları emekliye ayırın.
- **Güveni atlamayın.** Güveni geride bırakarak araçlarda hızlı ilerlemek çarpıtma üretir.

## Metrik tanımları

Aşağıdaki ölçümler benimsemenin kendi ilerlemesini izler. Program takımı ve sponsorlar içindir ve hedef olarak değil, sinyal olarak okunur. Faaliyeti ödüllendirecek pano veya rapor sayılarından kaçınırlar.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| İlk yararlı sonuca geçen süre | Programın başlangıcından, bir pilot takımın bir değişiklik yapmasına yardım ettiğini söylediği ilk ölçüme kadar geçen süre | başlangıçtan ilk takım onaylı yararlı kullanıma kadar gün sayısı | gün | Program günlüğü; takım onayı | Sürekli iyileştirme | Değerin erken ve sürekli teslimi | Bir kez, sonra yeni takım başına |
| Ölçümleri aktif kullanan takımlar | Davet edilen takımlardan, kendi anlatımlarına göre dönemde bir gözden geçirmede ölçümlerini kullananların payı | bir gözden geçirmede ölçüm kullanan takımlar / davet edilen takımlar | yüzde | Takım onayı; gözden geçirme notları | Kurumsal değişim yönetimi | Sürekli paydaş katılımı | Aylık |
| Ölçümlere bağlanan iyileştirmeler | Takımların, gerekçeleriyle birlikte, bir ölçümün gösterdiğine atfettiği yaptıkları değişikliklerin sayısı | bir ölçümle belirtilmiş bağlantısı olan takım bildirimli değişikliklerin sayısı | sayı | İyileştirme kaydı | Sürekli iyileştirme | Kanıta dayalı deneyler | Üç aylık |
| Emekliye ayrılan ölçümler ve raporlar | Karar vermeye bilgi sağlamayı bıraktığı için durdurulan ölçümler veya raporlar | üç ayda emekliye ayrılanların sayısı | sayı | Katalog değişiklik günlüğü | Sürekli iyileştirme | Süregelen evrim | Üç aylık |
| Referans değer kapsamı | Kayıtlı en az birkaç aylık referans değeri olan üzerinde anlaşılmış ölçümlerin payı | referans değeri olan ölçümler / üzerinde anlaşılmış ölçümler | yüzde | Metrik kataloğu | Hizmet düzeyi yönetimi; sürekli iyileştirme | Fikirden çok kanıt | Üç aylık |
| Program emek payı | Katılımcı takımların zamanından ölçüm görevlerine harcanan payı | toplama, raporlama ve gözden geçirmeye harcanan saat / tahmine göre toplam takım saati | yüzde | Takım zaman tahminleri | Sürekli iyileştirme | Sürdürülebilir tempo | Üç aylık |
| Aşama gözden geçirme tamamlanması | Planlanan aşama gözden geçirmelerinden, değişiklikler kaydedilerek takımlarla yapılanların payı | kayıtlı değişikliklerle yapılan gözden geçirmeler / planlanan gözden geçirmeler | yüzde | Program kayıtları | Sürekli iyileştirme | Düzenli yansıtma | Aşama başına |

İlk yararlı sonuca geçen süre, programın değil, pilot takımın kendi anlatımıyla ölçülür. Ölçümleri aktif kullanan takımlar, girişlere göre değil, takımların söylediğine göre sayılır. Ölçümlere bağlanan iyileştirmeler, belirtilmiş bağlantıların sayısıdır, bir hedef değildir; çünkü bir hedef uydurulmuş bağlantılar üretirdi. Program emek payı küçük kalmalıdır ve bir yükseliş bir uyarıdır.

## Öneriler

### 1. ila 30. günler: dinleyin, anlaşın ve yararlı bir şey sunun

**1. Bir sponsor ve birkaç gönüllü bulun.** Üst düzey bir liderden programa sponsor olmasını ve kısa bir tüzük imzalamasını isteyin. Meraklı ve saygın bir ila üç takımı davet edin. Amacın, kendi işlerini görmelerine ve iyileştirmelerine yardım etmek olduğunu ve verinin bireyleri sıralamak veya değerlendirmek için kullanılmayacağını açıklayın (bkz. Konu 11.3 “Korku yaratmadan metrikleri devreye almak”).

**2. Soruları sorun.** Her pilot takımla bir saat görüşün. Onları neyin yavaşlattığını, neyin şaşırttığını ve neyi bilmeyi dilediklerini sorun. Soruları yazın. Bu kitaptan, bu sorulara hitap eden, her biri bir eşlikçi koruma önlemine sahip üç ila beş ölçüm seçin (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”).

**3. Zaten sahip olduğunuz veriye bakın.** Kayıt sistemlerinden birkaç aylık geçmiş çekin ve seyir grafikleri çizin. Veri kalitesini dürüstçe kontrol edin: eksik alanlar, değişen kategoriler, sonradan oluşturulan kayıtlar. Ucuz olduğu yerde yakalamayı kaynağında düzeltin. Bu aşamada basit bir elektronik tablo yeterlidir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

**4. Yararlı bir şey sunun.** İlk ayın sonuna kadar her pilot takıma, her ölçüm için bir tanımla birlikte kendi verisinin küçük bir görünümünü verin ve bir gözden geçirme sohbeti yapın. Verinin önerdiği, bir bekleme adımını kaldırmak gibi bir değişiklik arayın ve takıma denemesi için yardım edin. İlk yararlı sonuç, cilalı bir araçtan daha önemlidir.

### 31. ila 90. günler: öğrenin, genişletin ve rutin hâline getirin

**5. Pilot takımlarla ilk gözden geçirmeyi yapın.** Neyin yardımcı olduğunu, neyin kafa karıştırdığını, neyin riskli hissettirdiğini ve neyi değiştireceklerini sorun. Ölçümleri, tanımları ve tüzüğü gözden geçirin. Özellikle korku veya manipülasyon işaretlerini dinleyin. Neyin değiştiğine dair, takım tarafından anlatılan kısa bir hikâye paylaşın.

**6. İnce yolu otomatikleştirin.** Elle iş yükünün ağır olduğu yerde en önemli bir veya iki beslemeyi, güncellik denetimleri ve kaynakla mutabakatla otomatikleştirin. Tanımları sade, taşınabilir bir katalogda tutun. Deneme mevcut araçların işi yapamayacağını göstermedikçe henüz bir platform satın almayın (bkz. Konu 11.2 “Araç manzarası”).

**7. Bir gözden geçirme ritmi kurun.** Her pilot takımda eğilimlere bakan, kararları kaydeden ve olayları not eden kısa bir aylık gözden geçirme yapın. “Eylem yok” deme şansını da ekleyin. Sponsorlarla, toplulaştırılmış görünümleri ve takım yorumlarını kullanarak, programın tamamına üç aylık bir bakış ekleyin.

**8. Sonraki dalgayı davet edin.** Yaklaşımı, pilot takımların hikâyelerinin öncülüğünde daha fazla takıma sunun. Her yeni takımın ölçümlerini, küçük bir ortak çekirdekle birlikte bir menüden seçmesine izin verin. Tempoyu sürdürülebilir tutun: bir seferde birkaç takım, pilot takımların ve program liderinin desteğiyle.

### 91. ila 180. günler: güçlendirin, dengeleyin ve devre hazırlanın

**9. Hedef kitle görünümlerini tasarlayın.** Hedef kitleyle birlikte, pano konusunda anlatılan hizmet sahibi ve liderlik görünümlerini, ortak tanımları ve takımların yorumlarını kullanarak tasarlayın (bkz. Konu 11.1 “Hizmet metrikleri panosu tasarlamak”). Her görünümü küçük tutun. Yerlerini aldıkları eski raporları emekliye ayırın.

**10. Denge ve sonuç ekleyin.** Pilot ölçümleri, kaliteyi, güvenilirliği, deneyimi ve maliyeti içeren, faaliyetin yanında sonuçların da yer aldığı dengeli bir kümeye genişletin (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”). Her yeni ölçümü, gösterilmeden önce manipülasyon yolu ve koruma önlemi açısından kontrol edin.

**11. Programı değerlendirin.** Olgunluk modeli konusundaki öz değerlendirmeyi her katılımcı takımla yürütün, profili ve temaları raporlayın ve diğerlerini sınırlayan boyutta bir veya iki sonraki adım seçin (bkz. Konu 11.4 “Metrik programları için olgunluk modeli”). Eklediklerinizin yanı sıra emekliye ayırdıklarınızı da sayın.

**12. Sırada ne olduğuna karar verin.** 180. gün gözden geçirmesinde, takımlar ve sponsorlarla birlikte devam edip etmeyeceğinize, ayarlayıp ayarlamayacağınıza veya durdurup durdurmayacağınıza karar verin. Programın ne yaptığını, hangi emekle yaptığını ve hizmetlerde neyin değiştiğini yazın. Sonraki aşamayı seçin: daha fazla takım, daha derin araçlar, finans veya müşteri ölçümlerine bağlantılar ya da pekiştirme. Kararı ve gerekçelerini kaydedin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| İlk yararlı sonuca geçen süre | Önemsiz bir değişikliği yararlı ilan etmek; gösterişli bir işe acele etmek | Takıma neyin değiştiğini sorun; değişikliğin kalıcı olduğunu kontrol edin |
| Ölçümleri aktif kullanan takımlar | Kutucuğu işaretlemek için gözden geçirmeler yapmak; gerçekleşmeyen kullanım iddia etmek | Alınan kararı isteyin; gözden geçirme notlarını örnekleyin; takımlarla konuşun |
| Ölçümlere bağlanan iyileştirmeler | Sayıya ulaşmak için bağlantılar uydurmak; ilgisiz değişikliklerin hakkını talep etmek | Betimleyici tutun; takımdan gerekçeyi isteyin; belirsiz bağlantıları belirsiz olarak kabul edin |
| Emekliye ayrılan ölçümler ve raporlar | Rahatsız edici ölçümleri emekliye ayırmak; emekliye ayırıp yeni adlarla yeniden getirmek | Emekliye ayrılan listeyi olumsuz eğilimler açısından gözden geçirin; belirtilmiş bir neden isteyin |
| Referans değer kapsamı | Geçmişi uydurmak; sonraki sonuçlara yaranan bir dönem kullanmak | Kaynağı ve dönemi kaydedin; ham veriyi tutun; referans değerleri değişikliklerden önce seçin |
| Program emek payı | Emeği olduğundan az göstermek; işi sayımın dışındaki kişilere kaydırmak | İşi yapan kişilere sorun; döngü sonu fazla mesaiyle karşılaştırın |
| Aşama gözden geçirme tamamlanması | Kısa, gelişigüzel gözden geçirmeler; hiç gerçekleşmeyen değişiklikleri kaydetmek | Değişikliklerin uygulandığını kontrol edin; takımlara gözden geçirmenin zamanlarına değip değmediğini sorun |

Sağlıklı bir okuma, ilk bir iki ay içinde ilk yararlı sonucu, yararlı buldukları için ölçümleri kullanan takımları, atfedilen bir avuç değişikliği, yeni olanların yanı sıra emekliye ayrılan raporları, mütevazı ve istikrarlı bir emek payını ve plandaki gerçek değişikliklere yol açan aşama gözden geçirmelerini gösterir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Gönüllülerle pilot | Güven; gerçek hikâyeler | Daha yavaş başlangıç; seçilim yanlılığı |
| Tüm takımlara birlikte devreye alma | Hızlı kapsam | Direnç; çarpıtma |
| Önce elektronik tablolar | Hızlı; düşük maliyet; öğrenme | Kırılgan; elle emek |
| Önce platform | Cila; ölçek | Maliyet; sorular netleşmeden zayıf uyum |
| Takım başına az ölçüm | Odak; düşük yük | Önemli alanları kaçırabilir |
| Aynı anda çok ölçüm | Genişlik | Aşırı yük; başıboş büyüme |
| Sabit 180 günlük plan | Sponsorlar için netlik | Katı; öğrenilenleri göz ardı eder |
| Planı değiştiren aşama gözden geçirmeleri | Öğrenme; uyum | Sponsorlar için daha az öngörülebilir |

Düzyazıyla yanıt şudur: gönüllüler ve elektronik tablolarla başlayın, değer gösterildikçe genişletin, sponsorlara net bir biçim ve gözden geçirme noktaları verin ve planın değişmesine izin verin.

## Takımınızla tartışılacak sorular

**1. Bu ay işimiz hakkında yanıtlayabilmeyi dilediğimiz tek bir soru nedir?**
Herkesten soru toplayın. En önemli olanı ve zaten elimizde olan verilerle yanıtlanabilecek olanı seçin. Yararlı bir yanıtın neye benzeyeceği konusunda anlaşın.

**2. Halihazırda neyi ölçüyoruz ve kim bakıyor?**
Mevcut raporları ve hedef kitlelerini listeleyin. Kimsenin kullanmadığı olanları işaretleyin. Yenilere yer açmak için hangilerinin emekliye ayrılacağına karar verin.

**3. Bunu bir ay denemeye bizi isteklendirecek ne olurdu?**
Koşulları dinleyin: bir tüzük, ölçümlerde söz hakkı, sınırlı zaman. Başlamadan önce bunlar üzerinde sponsorla anlaşın.

**4. İlk veri hangi küçük değişikliği önerebilir?**
Birkaç aylık geçmişe birlikte bakın. Olası bir değişikliği ve beklenen bir sonucu adlandırın. Yardımcı olup olmadığını nasıl anlayacağımız konusunda anlaşın.

**5. İşe zarar vermeden buna zamanımızın ne kadarını verebiliriz?**
Ayda saat cinsinden tahmin edin. Bir sınır üzerinde anlaşın ve ilk aşama gözden geçirmesinde gözden geçirin.

**6. Planı ne zaman durdurmalı veya değiştirmeliyiz?**
İşaretleri betimleyin: yararlı sonuç olmaması, artan korku, ağır emek. Kimin karar vereceği ve kararın nasıl kaydedileceği konusunda anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Pilot takımlar erken riski taşır ve erken kanıtı verir. Tüzüğü istemeli, kendi ölçümlerini seçmeli, ilk görünümleri kendi gözden geçirmelerinde kullanmalı ve neyin yardımcı olduğunu, neyin olmadığını dürüstçe raporlamalıdır. İlk sonuç gerçek bir engeli kaldırdığında yarar görürler.

### Hizmet ve operasyon takımları

Operasyon takımları verinin büyük bölümünü sağlar ve çoğu zaman en büyük yüke sahiptir. Veri kalitesini değerlendirmeye yardım etmeli, bir ölçümün nerede yanlış davranışı ödüllendireceğini göstermeli ve nöbet ile olay işi için zamanı korumalıdır. Sürdürülebilir tempoları plan üzerinde sabit bir kısıttır.

### Liderlik ve yönetişim

Liderler sponsor olur, tüzüğü imzalar ve programı kötüye kullanımdan korur. Mütevazı bir başlangıcı kabul etmeli, pano sayıları yerine sonuçlar ve hikâyeler istemeli, sıralama istemekten kaçınmalı ve planın program öğrendikçe değişmesine izin vermelidir. Programı, iyileşen kararlarla yargılamalıdırlar.

### Müşteriler ve kullanıcılar

Müşteriler ve kullanıcılar, program daha iyi hizmetlere yol açtığında kazanır. Deneyim ölçümlerinin seçimine ve kendileri hakkında neyin toplandığının gözden geçirilmesine katılabilirler. Geri bildirimlerinden kaynaklanan değişiklikleri görmelidirler.

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir toplu taşıma idaresinin dijital hizmetler, operasyon teknolojisi ve bir hizmet masası genelinde 12 takımı vardır. Yeni bir bilgi işlem direktörü “altı ayda bir metrik programı” ister. Daha önceki bir girişim bir platform satın almış ve pek az kişinin açtığı panolar üretmişti. Aşağıdaki rakamlar açıklayıcı örnektir.

Hizmet iyileştirme başkanı, 30., 90. ve 180. günlerde aşama gözden geçirmeleri olan 180 günlük bir yol haritası önerir. İlk hafta, tek sayfalık bir tüzük imzalayan bilgi işlem direktörüyle görüşür ve üç gönüllü takımı davet eder: hizmet masası, bir yolcu bilgilendirme takımı ve bir altyapı operasyonları takımı. Birer saatlik oturumlarda her takım sorularını belirtir. Hizmet masası, aynı müşteri sorunlarının neden geri geldiğini bilmek ister. Yolcu bilgilendirme takımı, değişikliklerinin bir şeyleri bozup bozmadığını bilmek ister. Altyapı takımı, zamanının ne kadarının plansız işe gittiğini bilmek ister.

Her takım için bu kitaptan, koruma önlemleriyle birlikte üç ila beş ölçüm seçer ve önceki beş aylık veriden ortak bir elektronik tabloda seyir grafikleri oluşturur. Veri denetimi, yolcu bilgilendirme takımındaki değişiklik kayıtlarının yüzde 27'sinin dağıtımdan sonra oluşturulduğunu ve hizmet masasının kategorilerinin dönemin ortasında yeniden düzenlendiğini bulur. Girme alışkanlığını düzeltmek ve kategorileri eşlemek iki hafta sürer. 27. güne gelindiğinde hizmet masası, iletişimlerinin yüzde 19'unun bir hafta içindeki geri dönüşler olduğunu ve bunların kafa karıştırıcı bir zaman çizelgesi sayfasına bağlı iki kategoride yoğunlaştığını görür. Takım, sayfayı değiştirmek için yolcu bilgilendirme takımıyla çalışır. Hizmet masası bunu 27. günde ilk yararlı sonuç olarak onaylar.

Otuzuncu gün gözden geçirmesinde takımlar daha kısa tanımlar ve daha az sayıda grafik ister; biri verinin yıllık değerlendirmelerinde kullanılıp kullanılmayacağını sorar. Tüzük, kullanılmayacağını söyleyecek biçimde netleştirilir. 31. ve 90. günler arasında başkan iki beslemeyi otomatikleştirir, her takımda kararları kaydeden aylık bir gözden geçirme kurar ve pilot hikâyelerinin gücüyle dört takımı daha davet eder. Ölçümleri aktif kullanan takımlar, davet edilen 7 takımın 7'sidir. 90. gün gözden geçirmesinde takımlar, ölçümlerine atfettikleri beş değişiklik bildirir. Program üç eski haftalık raporu emekliye ayırmıştır. Emek payının takım zamanının yüzde 3'ü olduğu tahmin edilir. 91. ve 180. günler arasında başkan, bu hedef kitlelerle hizmet sahibi ve liderlik görünümlerini tasarlar, dengeli kümeye deneyim ve maliyet ölçümleri ekler ve öz değerlendirmeyi yürütür: çoğu takım kararlarda kullanımda 2. Düzeyde ve güven ve güvenlikte 3. Düzeydedir ve seçilen sonraki adım her takımda bir karar günlüğüdür. 180. günde bilgi işlem direktörü, 12 takımın tümünün olgunluğuna göre bir sıralamasını ister. Başkan toplulaştırılmış profili ve temaları sunar, tüzüğü açıklar ve talep bırakılır. Sponsorlar, programı önümüzdeki iki çeyrekte, yine gönüllülük esasıyla, kalan beş takıma genişletmeyi kabul eder.

## Sektör mercekleri

**Girişim (startup).** Yol haritasını sıkıştırın. İki hafta içinde üç soru ve iki veya üç ölçüm üzerinde anlaşın ve onlara haftalık veya iki haftalık birlikte bakın. Zaten elinizde olanı kullanın. Bir çeyrek sonra yeniden ele alın. Araç inşa etmeyi bekleyen bir girişim, bakma alışkanlığını kaybeder.

**Küçük işletme.** İlk 30 gün tek bir sohbet, tek sayfalık bir soru listesi, bir elektronik tablo ve bir değişiklik olabilir. Sonraki aşamalar düzenli bir aylık bakışı içerir. Başlıca risk, kuran kişinin onu anlayan tek kişi hâline gelmesidir; bu yüzden her ölçümün ne anlama geldiğini yazın.

**Büyük kurum.** Gönüllü dalgaları, ölçümlere sahip olmayan, destek veren küçük bir merkezî takım, ortak tanımlar ve sponsorlarla aşama gözden geçirmeleri kullanın. Tek bir küresel tarihe direnin. İlk aşamayı veri yakalamayı düzeltmekle geçirmeyi bekleyin ve güvenlik, gizlilik ve var oldukları yerlerde iş konseyleri veya personel temsilcileriyle koordinasyon için plan yapın.

**Devlet ve kamu sektörü.** Personel temsilcileriyle istişare ve gözetim organlarına açık iletişim, erken çalışmanın parçasıdır. Satın alma döngüleri çoğu zaman zaten sahip olunan araçlarla başlamayı tercih eder. Zorunlu raporlamayı iyileştirme ölçümlerinden ayrı tutun ve kararları denetim için belgeleyin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

İlk 180 günün maliyetleri çoğunlukla insanların zamanıdır: program lideri, küçük bir analiz emeği, pilot takımların zamanından bir pay ve sponsor dikkati. Araç maliyetleri ilk aşamalarda düşük veya sıfır olabilir. Daha büyük maliyet, erken adımları yanlış atmanın maliyetidir; örneğin ölçümleri güven olmadan başlatmak.

İlk adım iyi seçilmişse getiriler erken görünür: verinin önerdiği bir değişiklik, emekliye ayrılan raporlar, sayılar üzerine daha az anlaşmazlık ve daha fazlasını isteyen takımlar. İş gerekçesini kendi kaydınızdan kurun: ilk yararlı sonuca kadar geçen günler, takımların ölçümlere atfettiği değişiklikler, emekliye ayrılan raporlardan tasarruf edilen saatler ve harcanan emek. Analitik getirileri hakkında dış rakamları, izlenebilir bir kaynak ve ortamınızla ilgisi olmadan aktarmaktan kaçının. Güvenilir iddia mütevazı ve yereldir (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Büyük patlama lansmanı.** Aylarca tasarım, sonra bir sürpriz. Erken ince bir dilim sunun.
- **Önce platform.** Araçlar sorulardan önce gelir. Elinizdekiyle başlayın.
- **Panoları saymak.** Faaliyet ölçülür, değer göz ardı edilir. Kararları ve değişiklikleri izleyin.
- **Tüzüğü atlamak.** Boşluğu korku doldurur. İlk sayı gösterilmeden önce sözleri yazın.
- **Aynı anda çok fazla takım.** Destek çöker. Küçük dalgalar hâlinde yayın.
- **Hiçbir şeyi durdurmamak.** Eski raporlar yenilerin yanında kalır. Eklerken emekliye ayırın.
- **Kanıta karşı savunulan sabit bir plan.** Plan, öğrendikçe değişmelidir.
- **İlk başarısızlıktan sonra vazgeçmek.** Erken denemeler öğretir. Gözden geçirin, ayarlayın ve yeniden deneyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Başlangıç ve pilot | Plan yok; gelişigüzel raporlar | İlgili takımlar ölçümleri tek başına dener | Tüzük, sponsor ve ilk yararlı sonuçla gönüllü pilotlar | Pilot öğrenmesi dalga planlarını yönlendirir; değere ulaşma süresi izlenir | Takımlar yaklaşımı kendi aralarında yayar; sponsorlar ve ortaklar katılır |
| Genişletme ve ritim | Tek seferlik çabalar | Bazı düzenli gözden geçirmeler | Aylık takım gözden geçirmeleri ve üç aylık program gözden geçirmeleri | Emek payı, emeklilik ve atfedilen değişiklikler yönetilir | Gözden geçirmeler takımlar ve hizmetler arasında bağlanır; ritim ihtiyaca uyum sağlar |
| Öğrenme ve ayarlama | Plan sabit veya yok | Ara sıra dersler paylaşılır | Aşama gözden geçirmeleri planı değiştirir | Yol haritası adımları olgunluk profiline bağlıdır | Program, herkesin katkılarıyla sürekli iyileşir |

## Kontrol listesi

- [ ] Bir sponsor, ilk sayı paylaşılmadan önce kısa bir tüzük imzalamıştır.
- [ ] Bir ila üç gönüllü takım sorularını kendi sözcükleriyle belirtmiştir.
- [ ] Her pilot ölçüm için birkaç aylık veriden oluşan bir referans değer ve bir veri kalitesi denetimi vardır.
- [ ] Her pilot takımın, her ölçüm için tanımı olan küçük bir görünümü vardır.
- [ ] İlk bir iki ay içinde ilk yararlı sonuç sunulmuş ve takım tarafından onaylanmıştır.
- [ ] Her pilot takımda bir gözden geçirme ritmi vardır ve kararları kaydeder.
- [ ] Yeni görünümler yerlerini aldıkça eski raporlar emekliye ayrılır.
- [ ] Programın takımlardan istediği emek tahmin edilmiş ve küçük tutulmuştur.
- [ ] 30., 90. ve 180. günlerdeki aşama gözden geçirmeleri takımlarla yapılır ve plan bunun sonucunda değişir.
- [ ] Sonraki aşamaya takımlar ve sponsorlarla karar verilir ve gerekçeleriyle kaydedilir.

## Yapay zekâ istemleri

**180 günlük bir plan taslağı hazırlayın.**

```text
[kurum türü] içinde [sayı] takımla bir hizmet metrikleri programı başlatmak için 180
günlük bir yol haritası taslağı hazırlayın. 30., 90. ve 180. günlerde aşama gözden
geçirmeleri kullanın. Her aşama için hedefleri, etkinlikleri, ilgili kişileri,
takımlardan istenen zamanı, beklenen ilk yararlı sonucu ve riskleri listeleyin.
Gönüllü pilot takımlar, bir tüzük ve mevcut araçlarla başlayın. Sonuç vaat etmeyin.
Varsayımlarınızı listeleyin.
```

**İlk ölçümleri seçin.**

```text
Bir pilot takım sorunlarını şöyle betimliyor: [yapıştırın]. Başlangıç için üç ila
beş ölçüm önerin; her biri için bir tanım, bir veri kaynağı, en olası manipülasyon
yolu ve bir eşlikçi koruma önlemi verin. Takımın zaten elinde bulunan verileri
tercih edin. Rakam uydurmayın. Varsayımlarınızı ve veri kalitesi açısından nelerin
kontrol edileceğini listeleyin.
```

**Bir veri kalitesi denetimi yürütün.**

```text
Şu, [sistem] kayıtlarımızdaki alanların ve değerlerin örnek bir açıklamasıdır:
[yapıştırın]. Teslim süresini, değişiklik başarısızlığını ve geri dönen iletişimleri
ölçmek için eksik alanlar, değişen kategoriler ve sonradan oluşturulan kayıtlar gibi
olası kalite sorunlarını belirleyin. Kaynakta basit denetimler ve düzeltmeler
önerin. Göremediğiniz içerikler hakkında tahmin yürütmeyin. Varsayımlarınızı
listeleyin.
```

**Bir aşama gözden geçirmesi planlayın.**

```text
Pilot takımlar ve sponsorla [30., 90. veya 180.] gün için 45 dakikalık bir aşama
gözden geçirmesi planlayın. Neyin yardımcı olduğu, neyin riskli hissettirdiği, ne
kadar emek aldığı, neyin durdurulacağı ve planda neyin değiştirileceği hakkındaki
soruları ekleyin. Kararların nasıl kaydedileceğini ve neyin değiştiğine dair kısa bir
hikâyenin nasıl paylaşılacağını ekleyin. Takımları sıralamayın. Varsayımlarınızı
listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir pilot takım için eşleştirilmiş koruma önlemleriyle başlangıç ölçümlerini seçmek amacıyla kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir yol haritasının ölçümleri takım düzeyinde tuttuğunu ve getirilen her ölçüm için bir manipülasyon yolu taşıdığını denetlemek amacıyla kullanın.

## Temel çıkarımlar

- Bulunduğunuz yerden, gönüllülerle, bir tüzükle ve zaten sahip olduğunuz verilerle ve araçlarla başlayın.
- İlk bir iki ay içinde bir takıma tek bir yararlı sonuç sunun.
- Küçük dalgalar hâlinde genişletin ve yeni görünümler yerlerini aldıkça raporları emekliye ayırın.
- Veri kalitesini erkenden kontrol edin ve yakalamayı kaynağında düzeltin.
- Planı değiştiren aşama gözden geçirmeleri yapın ve takımlardan istenen emeği küçük tutun.
- Sonraki aşamaya takımlar ve sponsorlarla karar verin ve gerekçeleri kaydedin.

## Kaynaklar ve ileri okuma

1. Ries, E., *The Lean Startup*, Crown Business, 2011.
2. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Minimum viable product](https://en.wikipedia.org/wiki/Minimum_viable_product).
7. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
8. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
9. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
10. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
11. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
12. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
