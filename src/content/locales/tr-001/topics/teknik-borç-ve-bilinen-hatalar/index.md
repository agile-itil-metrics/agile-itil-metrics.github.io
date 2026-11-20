# Teknik borç ve bilinen hatalar

**Bilinen hataları ve teknik borcu, ertelenmiş düzeltmelerin tek ve görünür bir defteri olarak ele alın, her kalemin açık kaldığı her ay size neye mal olduğunu ölçün ve kapasitenin korunan bir payını en yüksek faizli kalemlere harcayın.**

## Genel bakış ve motivasyon

Her takım bir miktar onarımı erteler. Bir hata anlaşılmıştır ama düzeltilmemiştir, bir tarihi yakalamak için bir kısayol alınmıştır, bir bileşen yaşlanmaya bırakılmıştır ve bir geçici çözüm bir çalışma kılavuzuna yazılmıştır. Her erteleme, yapıldığı anda makul bir karardır. Sorun, ertelemeler gözden uzak biriktiğinde başlar, çünkü onları taşımanın maliyeti daha sonra olaylar, yavaş teslimat ve yorgun insanlar olarak ortaya çıkar ve hiçbir raporda maliyeti nedene bağlayan bir satır bulunmaz.

İki söz dağarcığı aynı örüntüyü anlatır. [ITIL](https://en.wikipedia.org/wiki/ITIL) içinde **bilinen hata**, kök nedeni anlaşılmış ve bir geçici çözümü ya da henüz uygulanmamış kalıcı bir çözümü bulunan bir sorundur. Bilinen hatalar, hizmet masası ve operasyon çalışanları tekrarlayan olayları hızla çözebilsin diye kaydedilir ve kayıt, bir düzeltme yayımlanana kadar açık kalır. Çevik yazılım işinde **[teknik borç](https://en.wikipedia.org/wiki/Technical_debt)**, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) tarafından 1992'de ortaya atılan, gelecekteki değişikliği zorlaştıran tasarım ve uygulama seçimleri için kullanılan bir benzetmedir. Benzetme, ölçüm için önemli olan iki fikir taşır: borcu ortadan kaldırmak için gereken çaba olan **anapara** ve borç sürdüğü sürece her dönem ödediğiniz ek çaba ya da risk olan **faiz**.

İki görüş baktıkları yerde ayrışır. Bilinen hatalar operasyon aracılığıyla keşfedilir: bir olay ya da bir sorun araştırması bir neden bulur. Teknik borç genellikle teslimat aracılığıyla keşfedilir: bir geliştirici bir değişikliğin olması gerekenden daha zor olduğunu fark eder. Bilinen bir hata çoğu zaman müşterilere zarar vermeye başlamış teknik borçtur. Teknik borç çoğu zaman olmayı bekleyen bilinen bir hatadır. Birini ITSM aracında, birini bir birikim listesinde ya da wikide olmak üzere ayrı listeler tutmak bağlantıyı gizler ve aynı kıt kapasite için iki rakip argüman üretir.

Bu konu, birleşik defter için küçük bir ölçüm kümesi verir. Bütün bir kurumun borcu için tek bir parasal rakamdan kaçınır, çünkü hiçbir yöntem bunu güvenilir biçimde üretmez ve gözlemleyebildiğinizi ölçer: açık kalemler, beklenen süre, neden olunan olaylar, eklenen iş ve onarıma harcanan kapasite. Defter daha sonra ürün ile operasyon arasındaki bir önceliklendirme konuşmasını besler (sorun kayıtları ve kalıcı çözümler için bkz. Konu 4.1 “Sorun yönetimi metrikleri” ve borcun yarattığı kesinti yükü için bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

Bu konuda kullanılan terimler:

- **Geçici çözüm**, nedeni ortadan kaldırmadan hizmeti geri getirmenin ya da bir başarısızlıktan kaçınmanın bir yoludur.
- **Kalıcı çözüm** nedeni ortadan kaldırır. [Kök neden analizi](https://en.wikipedia.org/wiki/Root_cause_analysis) onu bulan iştir.
- **[Kod yeniden düzenleme](https://en.wikipedia.org/wiki/Code_refactoring)**, kodu dış davranışını değiştirmeden yeniden yapılandırır. Tasarım borcunu ödemenin olağan yoludur.
- **[Kod kokusu](https://en.wikipedia.org/wiki/Code_smell)**, koddaki ve çoğu zaman daha derin bir soruna işaret eden yüzeysel bir işarettir. Bir hüküm değil, bir bakış için bir uyarıdır.
- **[Fırsat maliyeti](https://en.wikipedia.org/wiki/Opportunity_cost)**, zamanın bir kullanımını diğerine tercih ederek vazgeçtiğiniz en iyi alternatifin değeridir. Her düzeltme bir özellikle yarışır ve karşılaştırma gerçek karardır.
- **[Gecikme maliyeti](https://en.wikipedia.org/wiki/Cost_of_delay)**, bir işin ertelenmesinden doğan ekonomik kayıptır. Bir borç kaleminin faizini fiyatlamanın arkasındaki fikirdir.
- **[Yazılım hatası](https://en.wikipedia.org/wiki/Software_bug)**, yazılımdaki bir kusurdur. Bilinen bir hata bir yazılım hatası, bir yapılandırma zayıflığı, bir tasarım sınırı ya da bir tedarikçi kusuru olabilir.
- **[Statik program analizi](https://en.wikipedia.org/wiki/Static_program_analysis)**, kodu çalıştırmadan inceler. Uyarıları ve karmaşıklık puanları olası borcun göstergeleridir ve olay geçmişinden daha zayıf kanıttır.

Tüm borç bir hata değildir. Martin Fowler'ın dörtlüsü, kasıtlı olanı kasıtsız olandan ve pervasız olanı ihtiyatlı olandan ayırır (bkz. kaynak listesi). Geri ödeme planı olan ihtiyatlı bir kısayol sağlam bir kredidir ve pervasız borç, önlenmesi gereken türdür. Buradaki metrikler kökeni yargılamaz. Bakiyeyi gösterir.

## Temel ilkeler

- **Tek defter, iki kapı.** Operasyondan gelen bilinen hatalar ve teslimattan gelen borç kalemleri, aynı nedeni anlatan kayıtlar arasında bir bağ olacak biçimde aynı görünür listeye girer.
- **Faizi de, anaparayı da ölçün.** Onarımın büyüklüğü, açık kalemin olaylarda, geçici çözümlerde ve yavaşlayan değişiklikte her ay size neye mal olduğundan daha az önemlidir. Onarım çabası birimi başına faize göre sıralayın.
- **Ertelemeyi sahibi olan bir karar haline getirin.** Her kalemin bir sahibi, beklemek için belirtilmiş bir gerekçesi ve bir gözden geçirme tarihi vardır. Kimsenin ertelemeyi seçmediği bir kalem ihmaldir ve öyle sayılır.
- **Kapasiteyi ihtiyaç duymadan önce koruyun.** Önceden kararlaştırılmış, onarım işi için ayrılmış belirtilmiş bir kapasite payı, kötü bir çeyrekten sonraki kahramanca bir temizlikten iyidir.
- **Geçici çözümü dürüst tutun.** Geçici çözüm, kendi maliyeti, sahibi ve başarısızlık kipleri olan bir hizmettir. Ne sıklıkla kullanıldığını ve ne sıklıkla başarısız olduğunu ölçün.
- **Sistemleri tanımlayın, kişileri asla.** Borç bir hizmete ya da bir bileşene aittir. Onu asla bir yazara atfetmeyin ve mühendisleri dokundukları borca göre asla sıralamayın.
- **Kabaca tahmin edin.** “Saat”, “gün” ve “hafta” boyutları yeterlidir. Bunun ötesindeki kesinlik uydurmadır.

## Metrik tanımları

Aşağıdaki metrikler ertelenmiş onarımların defterini tanımlar. Saatler ve sınırlar her formülde belirtilmiştir. Süre ölçümleri tek bir ortalama olarak değil, dağılımlar (ortanca ve 85. ya da 95. yüzdelik dilim) olarak bildirilir.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Bilinen hata birikim listesi yaşı | Açık bilinen hataların kalıcı bir çözüm için ne kadar beklediği | Saat, sorun kaydı “bilinen hata” olarak işaretlendiğinde başlar; kalıcı çözüm üretime yayımlandığında durur; “kabul edilen risk” olarak kapatılan kalemler ayrıca bildirilir ve dışarıda bırakılır. Hizmete göre sayıyı, ortanca yaşı ve 85. yüzdelik dilim yaşı bildirin | gün (dağılım) | ITSM aracı sorun ve bilinen hata kayıtları, yayın kayıtları | Sorun yönetimi | Yaşlanan iş kalemi grafiği; hata birikim listesi yaşı | Aylık |
| Geçici çözüm kapsamı | Açık bilinen hatalardan bir görevlinin izleyebileceği belgelenmiş, test edilmiş bir geçici çözümü olanların payı | son 6 ayda gözden geçirilmiş bir geçici çözümü olan açık bilinen hatalar / açık bilinen hatalar; kapatılmış ve kabul edilen risk kalemleri dışarıda bırakılır | yüzde | Bilinen hata kayıtlarına bağlı bilgi tabanı | Sorun yönetimi; bilgi yönetimi | Çalışma kılavuzu ya da işletilebilirlik için bitti tanımı | Aylık |
| Açık bilinen hatalara bağlı olaylar | Nedeni açık bir bilinen hata olan olaylar, hizmet kesintisinde ödenen faizin doğrudan bir ölçüsü | dönemde olay başladığında açık olan bir bilinen hataya bağlı olaylar / dönemdeki tüm olaylar; neden bağı olmayan olaylar bağsız olarak bildirilir, sayılmaz | yüzde, artı sayı | ITSM aracı olay-sorun bağlantıları | Olay yönetimi; sorun yönetimi | Kaçan hatalar; üretim hatası girişi | Aylık |
| Borç stoku | Açık kalan kayıtlı teknik borç kalemlerinin sayısı ve tahmini büyüklüğü | dönem sonunda borç sicilindeki açık kalemler; büyüklük, kayıt sırasında atanan kaba çaba bantlarının (saat, gün, hafta) toplamıdır; kaydedilmemiş ya da şüphelenilen borç dışarıda bırakılır | sayı ve çaba bantları | İzleyicideki borç sicili, hizmete göre etiketlenmiş | Sürekli iyileştirme; hizmet tasarımı | Borç olarak etiketlenmiş ürün birikim listesi kalemleri | Aylık |
| Borç faizi | Açık borcun ve bilinen hataların neden olduğu, takım zamanı cinsinden ek iş | dönemde bir borç ya da bilinen hata referansıyla etiketlenmiş iş kalemlerine karşı kaydedilen saatler (geçici çözümler, elle adımlar, yeniden iş ve etkilenen değişikliklerde ek çaba) / dönemdeki toplam takım çalışma saatleri; onarım işinin kendisi dışarıda bırakılır ve kapasite payı altında sayılır | çalışma süresinin yüzdesi | İş kalemlerindeki zaman ya da çaba etiketleri, takım düzeyinde tutulur | Sürekli iyileştirme; sorun yönetimi | Plansız iş ve yeniden iş payı | Aylık |
| Borç kapasite payı | Teslimat kapasitesinin borcu ve bilinen hataları kapatmaya harcanan payı | borç onarımı ya da bilinen hata düzeltmesi olarak etiketlenmiş tamamlanan iş kalemlerinin kapasitesi (kalem sayısı ya da çaba) / dönemde tamamlanan tüm iş kalemleri; etiketi olmayan kalemler dışarıda bırakılır | yüzde | İzleyici, etikete göre tamamlanan kalemler | Sürekli iyileştirme; değişiklik yetkilendirme | Kapasite tahsisi | Planlama dönemi başına, aylık gözden geçirilir |
| Borç net değişimi | Defterin büyüyüp büyümediği ya da küçülüp küçülmediği | dönemde kaydedilen borç ve bilinen hata kalemleri eksi dönemde çözülen kalemler; çözülmüş, düzeltmenin yayımlandığı anlamına gelir, birleştirildiği değil; “düzeltilmeyecek” olarak kapatılan kalemler ayrı bir satırda sayılır | sayı (işaretli) | Borç sicili ve bilinen hata kayıtları | Sürekli iyileştirme | Kategoriye göre birikim listesi değişimi | Aylık |

Kabul edilen risk, bir bilinen hatayı kapatmanın meşru bir yoludur, çünkü bazı sorunların düzeltilmeye değeri yoktur. Kalemleri kapatmanın yaş rakamını sessizce iyileştirmemesi için ayrı listelenir. Geçici çözüm kapsamındaki 6 aylık gözden geçirme penceresi bir örnektir. Takım pencereyi sistemlerinin değişme hızına uyacak biçimde belirler ve metrik siciline yazar.

## Öneriler

### Defteri oluşturun

**1. Bilinen hata listesini ve borç listesini tek bir defterde birleştirin.** Köken (operasyon ya da teslimat), hizmet, sahip, boyut bandı ve ilgili kayıtlara bağlantı için bir alanı olan tek bir sicil tutun. ITSM aracı ya da izleyici, her sistem diğerine bağlandığı sürece onu tutabilir. Tek bir görünüm olmadan, operasyondaki bilinen bir hata, teslimattaki görünmeyen bir borç kalemiyle aynı mühendisler için yarışır.

**2. Borcu oluştuğu ya da keşfedildiği anda kaydedin.** Kasıtlı olarak alınan bir kısayol, belirtilmiş bir gerekçe ve bir gözden geçirme tarihiyle aynı çekme isteğinde ya da değişiklik kaydında sicile girer. Daha sonra bulunan borç, onu bulan kişi tarafından kaydedilir. Ucuz, tek satırlık bir yakalama kuralı, dönemsel bir denetimden daha iyi çalışır, çünkü insanlar geçen çeyrek bildiklerini unutur.

### Faizi ölçün

**3. Olayları her seferinde bilinen hatalara bağlayın.** Bir olay ile bilinen hatası arasındaki bağ, faiz konusunda elinizdeki en güçlü veridir ve çözüm sırasında birkaç saniyeye mal olur. Neden bilindiğinde bağı gerekli bir alan yapın ve bir boşluk iyi haber gibi görünmesin diye bağsız payı bildirin (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”). Aynı neden birkaç olayda göründüğünde, sorun kaydı düzeltme için kanıtı taşır.

**4. Borcun yarattığı işi etiketleyin.** Mühendislerin, bilinen bir zayıflık nedeniyle bir geçici çözüm, elle bir adım ya da ek yeniden iş gerektiğinde bir iş kalemini işaretlemesine ve defter kalemine bağlamasına izin verin. Etiket az maliyetlidir ve size takım düzeyinde borç faizi rakamını verir. Sonucu geniş hata payı olan bir tahmin olarak ele alın, muhasebe için değil, kalemleri sıralamak ve bir eğilimi izlemek için yararlıdır.

**5. Her kalemi iki sayıyla fiyatlayın: onarım çabası ve aylık faiz.** Çaba için saat, gün, hafta gibi kaba bantlar ve bağlı olaylardan, etiketlenmiş işten ve kurumunuzun zaten tahmin ettiği her kesinti maliyetinden elde edilen kabaca bir aylık maliyet kullanın. Faizi çabaya bölmek basit bir geri ödeme süresi verir. Kesinlik uydurmayın: bir bant ve belirtilmiş bir varsayım, bariz kazançları bekleyebilecek kalemlerden ayırmak için yeterlidir.

### Kapasiteyi koruyun ve karar verin

**6. Kalıcı bir kapasite payı ayırın ve bildirin.** Ürün sahibiyle her döngünün onarım işi için bir payını, defterdeki eğilime göre belirleyerek ve her çeyrek yeniden ele alarak kararlaştırın. Borç kapasite payını planlı iş rakamlarının yanında bildirin, böylece liderler onarım işini bilinçli bir yatırım olarak görür. Ayrılmış bir pay ayrıca takımı, özellik birikim listesinin genellikle kazandığı, her planlama konuşmasındaki bir takas tartışmasından korur.

**7. Onarımı özelliklere karşı tek bir ortak para birimiyle sıralayın.** Bilinen hataları ve borç kalemlerini, gecikme maliyeti ve geri ödeme süresi olarak ifade edilerek özelliklerle aynı önceliklendirme konuşmasına koyun. Haftalık bir olayı ortadan kaldıran ve çabasını bir çeyrekte geri veren bir düzeltme kendi değeriyle yarışır. Yüksek sese, kıdeme ya da kayıt tarihine göre sıralamak zayıf sonuçlar verir (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”).

**8. Erteleme kararlarında döngüyü kapatın.** Bilinçli olarak açık bırakılan her kalem için riski kimin kabul ettiğini, gözden geçirme tarihini ve onu yukarı taşıyacak tetikleyiciyi, örneğin ikinci bir olayı ya da alanda planlanmış bir değişikliği kaydedin. Kabul edilenler listesini kendi takviminde gözden geçirin. Tetikleyicisiz üç kez ertelenmiş bir kalem, onu yok sayma kararıdır ve defter bunu söylemelidir.

### Sayıları dürüst tutun

**9. Kaydı kapatmadan önce düzeltmeyi yayımlayın.** Bilinen bir hata, kalıcı çözüm üretimde olana ve tekrar belirtilmiş bir pencere boyunca denetlenene kadar açık kalır. “Birleştirildi” ya da “bilet bitti” aşamasında kapatmak yaş ve net değişim rakamlarına gurur okşar ve olayı sonradan yeniden açar (bkz. Konu 4.5 “Yayın ve dağıtım metrikleri”). Kapatma kuralının bir kalite denetimi olarak bilinen hataların yeniden açılma oranını izleyin.

**10. Toplamların ötesinde defterin biçimine bakın.** Sabit bir sayı, çok eski kalemlerden oluşan uzun bir kuyruğu, tek bir hizmetteki büyüyen bir kalem payını ya da her şeyi “düzeltilmeyecek” olarak kapatarak küçük tutulan bir defteri gizleyebilir. Yaş dağılımını, hizmete göre ayrımı ve kabul edilen risk listesini tek bir sayfada gösterin. Bunu hizmetlerin sahipleriyle, bir sonraki çeyreğin işini planlayan aynı toplantıda gözden geçirin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Bilinen hata birikim listesi yaşı | Eski kayıtları “kabul edilen risk” ya da “düzeltilmeyecek” olarak kapatmak; bir eski kaydı yeni genç kayıtlara bölmek; yeniden kaydederek saati sıfırlamak | Aynı sayfada bildirilen kabul edilen risk sayısı ve yaşı; kapatmaların sahip takımın dışından biri tarafından gözden geçirilmesi; kayıt soyağacının tutulması |
| Geçici çözüm kapsamı | Alanı karşılamak için belirsiz bir geçici çözüm yazmak; hiçbir görevlinin denemediği bir geçici çözümü saymak | Bağlı olaylarda geçici çözüm kullanımı ve başarısızlık oranı; bir geçici çözüm örneklemi için dönemsel test |
| Açık bilinen hatalara bağlı olaylar | Pay düşsün diye olayları bağsız bırakmak ya da farklı bir nedene bağlamak | Yanında bildirilen bağsız olay payı; kaçırılan bağlar için kapatılmış olayların örneklem incelemesi |
| Borç stoku | Stok küçük görünsün diye borcu kaydetmemek; birçok kalemi tek büyük bir kalemde birleştirmek; özenli görünmek için önemsiz şeyleri kaydetmek | Sicilin kod incelemeleri ve olay sonrası incelemelerden bir örneklemle gözden geçirilmesi; kalem büyüklüğü ve özgüllük denetimleri |
| Borç faizi | İncelemeden kaçınmak için işi eksik etiketlemek ya da bir onarım bütçesi kazanmak için fazla etiketlemek; rakamı bir takımın derecelendirmesi olarak okumak | Etiketlenmiş ve etiketlenmemiş kalemlerin örneklem denetimi; yalnızca takım düzeyinde görünüm, takımlar arasında karşılaştırma yok; faizin olay bağlarıyla birlikte okunması |
| Borç kapasite payı | Sıradan özellik işini onarım olarak etiketlemek; payı doldurmak için kolay kozmetik kalemleri seçmek | Sonuç denetimi: en eski yüksek faizli kalemlerin yaşı ve düşen olay bağları; neyin düzeltildiğinin sıralamaya karşı incelemesi |
| Borç net değişimi | Birkaç büyük kalemi dengelemek için çok sayıda minik kalemi çözmek; sayı düşsün diye kalemleri “düzeltilmeyecek” olarak kapatmak | Boyut bandına ve faize göre gösterilen net değişim; bildirilen “düzeltilmeyecek” satırı; çözülen kalemlerde tekrar denetimi |

Sağlıklı bir okuma, görünür, belirli ve takımın seçtiği yönde ilerleyen bir defteri gösterir. En eski yüksek faizli kalemlerin sayısı düşmektedir. Açık bilinen hatalara bağlı olaylar azalma eğilimindedir ve bağsız pay küçüktür. Borç kapasite payı, bir krizden sonra sıçrayıp sonra kaybolmak yerine kararlaştırılan düzeyde sabittir. Kabul edilen risk listesi kısadır ve gözden geçirilmiştir. Herhangi bir sayı mükemmel görünürken diğerleri kıpırdamıyorsa kutlamadan önce tanımdan şüphelenin.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Bilinen hataların ve borcun tek birleşik defteri | Tek önceliklendirme; operasyon ve teslimat aynı maliyetleri görür | Ortak araç ya da bağlantılar gerektirir; iki işlev arasındaki sahiplik çözülmelidir |
| Onarım için kalıcı bir kapasite payı | Öngörülebilir; onarım işini özellik baskısından korur | Sıralama zayıfsa düşük değerli kalemlere harcanabilir |
| Onarım işinin yalnızca öncelik tartışmasını kazandığında planlanması | Esnek; mevcut önceliğe yanıt verir | Özellikler neredeyse her zaman kazanır; defter bir krize kadar büyür |
| Olaylardan ve etiketlenmiş işten tahmin edilen faiz | Borcu gözlemlenebilir maliyete bağlar; sıralamayı destekler | Kaba sayılar; dürüst etiketlemeye ve olay bağlarına bağlıdır |
| Özel bir onarım hamlesi ya da “borç haftası” | Odak ve görünür ilerleme | Dönemsel; defter etkinlikler arasında yeniden dolar; planlı taahhütleri kesintiye uğratır |

Oldukça yüksek faizli en eski kalemleri hareket ettiren en hafif düzeni seçin. Küçük bir takım defteri bir etiket ve aylık bir incelemeyle tek bir panoda yürütebilir. Daha büyük kurumlar araçlar arasında bağlantılara ve üzerinde anlaşılmış bir sıralama yöntemine ihtiyaç duyar. Amaç, boş bir liste değil, her kalem hakkında bilinçli bir karardır.

## Takımınızla tartışılacak sorular

**1. Hangi üç açık kalem bize her ay en çok maliyet getiriyor ve bunu nasıl biliyoruz?**
İnsanlardan adayları hafızadan adlandırmasını isteyin, sonra bunları olay bağlarına ve etiketlenmiş işe karşı denetleyin. Hatırlanan listeyi ölçülen listeyle karşılaştırın ve boşlukları not edin. Sıralama kanıtının bundan sonra nasıl toplanacağı üzerinde anlaşın.

**2. Bir düzeltmeyi ertelediğimizde kim karar veriyor ve ne zaman yeniden bakıyoruz?**
Son beş ertelemeyi adım adım gözden geçirin ve riski kimin kabul ettiğini ve hangi gözden geçirme tarihinin belirlendiğini sorun. Kimsenin karar vermediği yerde kalem ertelenmemiş, ihmal edilmiştir. Her ertelemenin bir sahibi, bir gerekçesi ve bir tetikleyicisi taşıdığına dair bir kural üzerinde anlaşın. Kabul edilen risk listesinin nasıl ve kimin tarafından gözden geçirileceğini tartışın.

**3. Onarım için ne kadar kapasite ayırmalıyız ve payı ne değiştirirdi?**
Defter eğilimini ve mevcut borç kapasite payını gösterin. Takımın onu yükseltmek için nelerden vazgeçmeye razı olacağını ve hangi kanıtın düşmesine izin vereceğini sorun. Sayıyı, gerekçeyi ve yeniden ele alınacak tarihi kaydedin.

**4. Geçici çözümlerimiz gerçek mi ve yeni bir görevli onları izleyebilir mi?**
Rastgele bir geçici çözüm seçin ve onu yazmamış birinden izlemesini isteyin. En yüksek etkili hataları kapsayan geçici çözümler için bir test rutini üzerinde anlaşın.

**5. Neyin düzeltilmiş sayıldığı ve kaydı kapatmadan önce ne kadar süre izlediğimiz?**
Operasyonun, teslimatın ve ürün sahibinin kullandığı kapatma kurallarını karşılaştırın. Hizmete uyan bir tekrar penceresini ve kapatılmış bir kalem yeniden açıldığında takımın ne yapacağını tartışın. Tek bir tanım üzerinde anlaşın ve metrik siciline yazın.

**6. Borç sayılarımız bize nerede rahat bir hikâye anlatıyor olabilir?**
Her sayının gurur okşanabileceği yolları isteyin: kaydedilmemiş borç, önce düzeltilen kolay kalemler, düzeltilmeyecek olarak kapatılan kalemler. Bağsız olay payına ve kabul edilen risk listesine bakın. Bu çeyrek eklenecek bir koruyucu ölçüt seçin ve kimin denetleyeceğini adlandırın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları borcu ilk görür, genellikle kodu değiştirirken. Eklemesi kolay bir sicilden ve kapasitenin korunan bir payından yararlanırlar, böylece onarım işi her planlama konuşmasında bir tartışmayı kazanmaya bağlı kalmaz. Kısayolları aldıklarında kaydetmeli, zayıf noktaların neden olduğu işi etiketlemeli ve borcu yapmak istemedikleri herhangi bir iş için bir etiket olarak kullanmaktan kaçınmalıdırlar (borcun teslim süresi üzerindeki etkileri için bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”).

### Hizmet ve operasyon takımları

Operasyon takımları faizi görür: tekrarlayan olaylar, elle adımlar, kırılgan geçici çözümler ve ardından gelen nöbet yükü. Bilinen hata kayıtlarına ve geçici çözüm belgelerine sahiptirler ve faizi fiyatlayan olay verisine sahiptirler. Her olayı bilinen hatasına bağlamalı, geçici çözümleri test etmeli ve planlama konuşmasına bir şikâyet listesi yerine sıralanmış kanıt getirmelidirler (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”).

### Liderlik ve yönetişim

Liderler onarım işinin ne kadar kapasite alacağına karar verir ve belirledikleri teşvikler defterin dürüst kalıp kalmayacağını belirler. Tek bir borç puanı değil, yaş dağılımını, faiz rakamlarını ve kabul edilen risk listesini istemelidirler. Defteri bir takımın derecelendirmesi olarak okumak kaydı cezalandırır ve borcu yeraltına iter. Bir yönetişim forumu risk kabulünü bir sahibi ve bir gözden geçirme tarihi olan bir karar olarak ele almalıdır.

### Müşteriler ve kullanıcılar

Müşteriler borcu tekrarlayan başarısızlıklar ve izlemeleri gereken geçici çözümler olarak hisseder. Bir geçici çözüm kullanıcıları etkilediğinde, bir düzeltmenin ne zaman beklendiğine dair sade bir notla birlikte yayımlayın ve tarihe uyun ya da değişikliği açıklayın. Daha az tekrarlayan olay ve bilinen sorunlar üzerine dürüst durum, hatasızlık vaadinden daha fazla güven oluşturur (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı, bir ürün takımı ve bir operasyon grubu tarafından desteklenen bir hasta randevu hizmeti işletir. Bu örnekteki tüm sayılar açıklayıcıdır.

Operasyon grubu ITSM aracında 23 bilinen hata tutar. Ürün takımı panosunda 41 borç kaleminin ayrı bir listesini tutar. Üç aylık bir inceleme, bilinen hatalardan 9'unun ve borç kalemlerinden 7'sinin aynı beş nedeni anlattığını bulur. En eski bilinen hata 14 aylıktır, ortanca bilinen hata yaşı 5 aydır ve 85. yüzdelik dilim 11 aydır. Geçici çözüm kapsamı yüzde 61'dir. Açık bilinen hatalara bağlı olaylar çeyreğin olaylarının yüzde 18'idir ve olayların yüzde 22'si bağsızdır, bu yüzden gerçek pay daha yüksek olabilir.

Takım iki listeyi 55 ayrı kalemden oluşan tek bir defterde birleştirir. En çok bağlı olayı olan on kalem için bantlarla bir onarım çabası ve saat cinsinden aylık faiz tahmin eder. Bir kalem öne çıkar: gece çalışan bir randevu eşitleme işi yaklaşık iki haftada bir sessizce başarısız olur ve nöbetçi çalışanlarca elle yeniden başlatılması gerekir. Onarımının iki hafta sürdüğü tahmin edilmektedir. Bağlı olaylardan ve etiketlenmiş işten gelen faizi ayda yaklaşık 10 saattir ve her başarısızlık sabah klinik listelerini geciktirir. Geri ödeme süresi yaklaşık dört aydır ve bu, o sırada planda olan herhangi bir özellikten daha hızlıdır.

Karar günlüğüne kaydedilen karar, ürün takımının kapasitesinin yüzde 15'ini onarım işi için ayırmak, bunu birim çaba başına faize göre sıralamak ve önce eşitleme işini düzeltmektir. Operasyon başkanı ayrıca her olayı varsa bir bilinen hataya bağlamayı ve en çok kullanılan beş geçici çözümü test etmeyi kabul eder.

İki çeyrek sonra ortanca bilinen hata yaşı 4 ay ve 85. yüzdelik dilim 9 aydır. Açık bilinen hatalara bağlı olaylar yüzde 11'e düşer. Bağsız pay yüzde 8'e düşer ve bu, takıma rakam konusunda daha fazla güven verir. Sonra takım bir manipülasyon riskini yakalar. Borç net değişimi satırı bir çeyrekte çözülen 12 kalem gösterir, ancak bunların 6'sı düzeltilmeyecek olarak kapatılmıştır ve ikisi en eski yüksek faizli kalemlerdir. Takımın dışından bir gözden geçiren kayıtları okur ve kapatmaların yaş rakamını iyileştirmek için yapıldığını bulur. Kalemler yeniden açılır, kapatma gerekçesi adlandırılmış bir onaylayıcıyla gerekli bir alan olur ve kabul edilen risk kalemleri artık yaş dağılımıyla aynı sayfada görünür.

## Sektör mercekleri

**Girişim.** Borç genellikle kasıtlıdır ve çoğu zaman doğrudur, çünkü ilk müşteriye hız en çok önemlidir. Panoda bir etiketle tek bir liste tutun, kısayolları aldıkça kaydedin ve “sonra”nın bir anlamı olması için bir gözden geçirme tarihi belirleyin. Faiz olaylarda görünmeye başladığında onarım payını yükseltin.

**Küçük işletme.** Tek bir yönetici ya da küçük bir takım çoğu zaman hem operasyonu hem teslimatı taşır, bu yüzden iki liste doğal olarak tektir. Bilinen hataları ve geçici çözümlerini ortak bir belgede kaydedin ve her kalemin hangi tedarikçiye ya da sözleşmeye bağlı olduğunu not edin. Tedarikçiye ait bir kusur kendi başınıza düzeltemeyeceğiniz bilinen bir hatadır, bu yüzden tedarikçinin taahhüt ettiği tarihi ve geçici çözümünüzü izleyin.

**Kurumsal.** Çok sayıda takım, çok sayıda hizmet ve çok sayıda tedarikçi birkaç rakip liste ve “bitti”nin birkaç tanımını yaratır. Tek bir defter yapısı, tek bir kapatma kuralı ve tek bir sıralama yöntemi üzerinde anlaşın ve takımların belirtilmiş bir eşlemeyle yerel alanlar eklemesine izin verin.

**Kamu ve kamu sektörü.** Eski sistemler, uzun satın alma döngüleri ve sabit bütçeler bazı borçların geri ödenmesini maliyetli ve bazı değiştirme kararlarını yavaş kılar. Bir düzeltmeyi engelleyen yasal, saklama ve denetim kısıtlamalarını kaydedin, çünkü ertelemeyi açıklarlar. Defteri risk raporlamasının bir parçası olarak gösterin ve onarımı plansız bir maliyet olarak ele almak yerine bütçe döngüsünde planlayın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon, göremediğiniz faizi ödemeyi bırakmaktır. Tekrarlayan olaylar, elle geçici çözümler ve yavaş, riskli değişiklikler görünür maliyetlerdir ve normalde ayrı bütçelerde ayrı sorunlar olarak kaydedilirler. Birleşik bir defter bunları, onarım maliyeti ile borcu taşıma maliyeti arasında tek bir karşılaştırmaya çevirir.

Uygulamanın maliyetinin üç parçası vardır. Birincisi kurulumdur: bir sicil, ITSM aracı ile izleyici arasındaki bağlantılar ve bir etiketleme kuralı. İkincisi işletme çabasıdır: olayı bağlamak için olay başına birkaç saniye, etiketlemek için iş kalemi başına birkaç saniye ve hizmet başına bir ya da iki saatlik aylık bir inceleme. Üçüncüsü, en büyük kalem olan ve bir genel gider değil, bilinçli bir yatırım olan onarım kapasitesinin kendisidir.

Getiri, kendiniz ölçebileceğiniz örüntülerden gelir. Bir bilinen hataya bağlı olayları düzeltmesinden önce ve sonra, etkilenen değişikliklerdeki etiketli iş saatlerini önce ve sonra ve önlenen nöbet kesintilerini karşılaştırın. Kurumunuz zaten tahmin ediyorsa kesinti maliyetini ekleyin. Borcun maliyeti için bir sektör rakamı ödünç almayın: konu üzerindeki araştırma yazını gerçektir, ancak rakamlar bağlama bağlıdır ve kendi olay ve zaman verileriniz daha iyi kanıttır. *Accelerate* araştırması teslimat performansını kurumsal performansa bağlar (bkz. Konu 2.8 “DORA metrikleri”), ancak defteriniz için bir fiyat vermez. Maliyet ve getirinin daha geniş ele alınışı için bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”.

## Anti-desenler ve tuzaklar

- **Hiç buluşmayan iki liste.** Operasyon ve teslimat, aynı kapasite için farklı kanıtlarla tartışır. Listeleri birleştirin ya da her ortak nedeni bağlayın.
- **Kurum için tek bir borç puanı.** Maliyetin nerede olduğunu gizler ve takımların sıralanmasına davet eder. Defteri hizmete göre, yaş, faiz ve sahiplikle bildirin.
- **Tek onarım olarak büyük yeniden yazım.** Büyük temizlikler durur ve onlar sürerken defter yeniden dolar. Kalemleri küçük adımlarla, geri ödeme süresine göre sıralayarak emekliye ayırın.
- **Hedef olarak sıfır borç.** Bunu kovalamak önemsiz kapatmaları ödüllendirir ve dürüst kaydı caydırır. En eski yüksek faizli kalemlerin hareket ettiği bir defteri hedefleyin.
- **Bilinen hataları “birleştirildi” aşamasında kapatmak.** Düzeltme kullanıcılara ulaşmamıştır ve olay geri döner. Yayında kapatın, sonra belirtilmiş bir pencere boyunca tekrarı izleyin.
- **Ertelemeyi “düzeltilmeyecek” içinde gizlemek.** Yaş rakamı iyileşir ve risk kalır. Kabul edilen riski, bir sahip ve bir gözden geçirme tarihiyle ayrı sayın.
- **Statik analizi gerçek saymak.** Puanlar kodun biçimini yansıtır, maliyeti değil. Adayları bulmak için kullanın, sonra olay bağları ve değişiklik geçmişiyle doğrulayın.
- **Borcu yazarlara atfetmek.** İnsanlara kısayolları gizlemeyi ve zor bileşenlerden kaçınmayı öğretir. Her ölçümü hizmet ve takım düzeyinde tutun (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Defter ve tanımlar | Bilinen hatalar ve borç insanların kafasında ya da dağınık notlarda yaşar | Operasyon ve teslimat her biri farklı kurallarla bir liste tutar | Her kalem için yazılı bir tanım, bir sahip ve bir kapatma kuralıyla tek defter | Yaş, kabul edilen risk ve net değişim yazılı tanımlara karşı gözden geçirilir | Tanımlar, karar vermeye bilgi sağlamayı bıraktığında tedarikçiler ve müşterilerle gözden geçirilir |
| Faizi ölçme | Olaylar ile nedenler arasında bağ yok | Bazı olaylar elle bilinen hatalara bağlanır | Neden bilindiğinde olay bağları gerekli; iş takım düzeyinde etiketlenir | Faiz ve geri ödeme süresi en üstteki kalemler için tahmin edilir ve eğilim olarak izlenir | Faiz hizmet sonuçlarına bağlanır ve takımlar ve tedarikçiler arasında paylaşılır |
| Kapasite ve önceliklendirme | Onarım bir krizde gerçekleşir | Bazı takımlarca ayrılan gayriresmî zaman | Üzerinde anlaşılmış bir kapasite payı ve ortak bir sıralama yöntemi | Pay defter eğilimine göre ayarlanır ve planlı iş olarak finanse edilir | Onarım kapasitesi ortak platformlar ve tedarikçiler arasında koordine edilir |
| Geçici çözümler ve kapatma | Geçici çözümler belgelenmemiş ya da tek kişide | Bazı hatalar için belgelenmiş, test edilmemiş | Geçici çözümler bilgi tabanında, yayında bir kapatma kuralıyla | Geçici çözüm kullanımı, başarısızlığı ve kapatma sonrası tekrar ölçülür | Geçici çözümler düzeltmeler yayımlandıkça otomatik emekliye ayrılır, kullanıcılardan geri bildirimle |

## Kontrol listesi

- [ ] Bilinen hatalar ve borç kalemleri tek bir defterdedir ya da kalem kalem bağlanmıştır.
- [ ] Her kalemin bir sahibi, bir boyut bandı, bir hizmeti ve bir gözden geçirme tarihi vardır.
- [ ] Kasıtlı kısayollar alındıklarında bir gerekçeyle kaydedilir.
- [ ] Neden bilindiğinde olaylar bilinen hatalara bağlanır ve bağsız pay bildirilir.
- [ ] Zayıf noktaların neden olduğu iş takım düzeyinde etiketlenir ve etiketleme örneklemle denetlenir.
- [ ] En üstteki kalemlerin her birinin bir onarım çaba bandı ve bir aylık faiz tahmini vardır.
- [ ] Onarım işi için bir kapasite payı kararlaştırılır, bildirilir ve her çeyrek gözden geçirilir.
- [ ] Bilinen hatalar, belirtilmiş bir tekrar penceresiyle, düzeltmenin yayımlanmasıyla kapanır.
- [ ] Kabul edilen risk kapatmaları, bir onaylayıcı ve bir gözden geçirme tarihiyle ayrı listelenir.
- [ ] En yüksek etkili hatalar için geçici çözümler bir takvime göre test edilir.
- [ ] Yaş dağılımı ve hizmete göre ayrım toplamlarla birlikte gösterilir.
- [ ] Hiçbir borç ölçümü bireyleri karşılaştırmak ya da sıralamak için kullanılmaz.

## Yapay zekâ istemleri

**İki listeyi tek bir defterde birleştirin.**

```text
İki ertelenmiş onarım listem var. A Listesi [operasyon aracı ya da kaynak]
kaynağından geliyor ve [sayı] bilinen hata içeriyor. B Listesi [teslimat izleyici
ya da kaynak] kaynağından geliyor ve [sayı] teknik borç kalemi içeriyor. İşte
girdiler: [başlık, hizmet, kayıt tarihi ve tek satırlık bir açıklamayla girdileri
yapıştırın]. Aynı nedeni anlatıyor görünen girdileri gruplayın, her grup için tek
bir defter girdisi önerin ve eşleşmeyi onaylamak için bir insana ihtiyaç duyan
girdileri işaretleyin. Nedenler, hizmetler ya da tarihler uydurmayın.
Varsayımlarınızı ve birleştirmeden önce yanıtlamam gereken soruları listeleyin.
```

**En üstteki kalemler için çaba bantlarını ve aylık faizi tahmin edin.**

```text
[hizmet] üzerindeki [kalem başlığı] defter kalemi için şu kanıtım var: bağlı
olaylar [tarihler ve sürelerle liste], etiketlenmiş iş [saat ya da kalem
sayıları] ve takımın [tahmin] onarım tahmini. Kaba çaba ve aylık faiz bantlarını,
basit bir geri ödeme süresini ve her rakam için güven düzeyini yazmama yardım
edin. Aritmetiğinizi gösterin. Maliyetler, kıyaslama değerleri ya da sektör
rakamları uydurmayın. Bir rakam eksikse benden isteyin. Varsayımlarınızı
listeleyin.
```

**Kapatma ve manipülasyon risklerini gözden geçirin.**

```text
İşte bilinen hata ve borç defterimiz için tanımlar ve son çeyreğin verileri:
[yaş, geçici çözüm kapsamı, borç net değişimi ve kapatma kuralının tanımları] ve
[kapatma gerekçeleriyle kapatılan kalemlerin özeti]. Bu ölçümlerin gurur
okşanabileceği yolları, verilerde bunun olduğunu düşündüren kanıtı ve her biri
için bir koruyucu ölçütü belirleyin. Bunu insanların değil, aracın bir incelemesi
olarak ele alın. Kimseyi suçlamayın ve veri uydurmayın. Varsayımlarınızı
listeleyin.
```

**Ürün sahibiyle bir önceliklendirme konuşması hazırlayın.**

```text
Gelecek çeyrek için [takım] kapasitesinin özellikler ve onarım işi arasında nasıl
bölüneceğini önermem gerekiyor. Defter şunu gösteriyor: [defter özeti: sayılar,
yaş dağılımı, çaba ve faiz bantlarıyla en üstteki kalemler]. Özellik planı
şunları içeriyor: [ürün sahibinin sağladığı gibi planlanan özelliklerin ve
beklenen değerlerinin özeti]. Onarım payı için seçenekleri karşılaştıran, ana
onarım kalemlerinin gecikme maliyetini belirten ve takasları adlandıran tek
sayfalık bir öneri taslağı hazırlayın. Değer tahminleri ya da kıyaslama payları
uydurmayın. Varsayımlarınızı ve ürün sahibinin vermesi gereken kararları
listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): tekrar ya da değişiklik başarısızlığı gibi ilgili bir metriği tanımlayan konuyu ve yanında yer alması gereken koruyucu ölçütü bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): düzenlenmiş bir metriğin saatlerini, manipülasyon yolunu ve koruyucu ölçütünü adlandırdığını denetlemek için kullanın.

## Temel çıkarımlar

- Bilinen hatalar ve teknik borç, ertelenmiş onarımların tek bir defterinin iki görünümüdür, bu yüzden onları bir arada ya da bağlı tutun.
- Her kalemin her ay olaylarda, geçici çözümlerde ve yavaşlayan değişiklikte neye mal olduğu olan faizi ölçün ve onarımı geri ödeme süresine göre sıralayın.
- Her ertelemeyi bir sahibi, bir gerekçesi ve bir gözden geçirme tarihi olan bir karar haline getirin ve kabul edilen riski ayrı bildirin.
- Onarım işi için kararlaştırılmış bir kapasite payı ayırın ve planlı işin yanında bildirin.
- Bir bilinen hatayı düzeltmenin yayımlanmasıyla kapatın, sonra sonuca güvenmeden önce tekrarı izleyin.
- Her ölçümü hizmet ve takım düzeyinde tutun ve daha iyi bir sayının daha iyi bir sistem anlamına gelmesi için koruyucu ölçütler kullanın.

## Kaynaklar ve ileri okuma

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
