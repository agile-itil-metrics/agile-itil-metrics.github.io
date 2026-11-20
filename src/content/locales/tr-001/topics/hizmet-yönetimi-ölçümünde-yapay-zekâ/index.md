# Hizmet yönetimi ölçümünde yapay zekâ

**Yapay zekâ işi değiştirmeden önce işin bugün nasıl göründüğünü yazıya dökün. Ardından yapay zekânın her kullanımını bu referans değere ve onsuz yapılan karşılaştırılabilir işe göre ölçün; çünkü iddialar büyük, kanıt ise genellikle küçüktür.**

## Genel bakış ve motivasyon

Yapay zekâ artık takımların hizmet kurmak ve işletmek için kullandığı araçların çoğunun içinde yer alıyor. [Yapay zekâ](https://en.wikipedia.org/wiki/Artificial_intelligence) (AI), hesaplamalı sistemlerin insan zekâsıyla ilişkilendirilen görevleri yerine getirme yeteneğidir. Bunun içinde [makine öğrenmesi](https://en.wikipedia.org/wiki/Machine_learning) sistemleri verilerden örüntüler öğrenir; çoğu kez [büyük dil modelleri](https://en.wikipedia.org/wiki/Large_language_model) üzerine kurulu [üretken yapay zekâ](https://en.wikipedia.org/wiki/Generative_artificial_intelligence) sistemleri ise istemlere yanıt olarak metin, kod ve başka içerik üretir. BT hizmet yönetiminde (ITSM) bu yetenekler bilet önceliklendirmede (triyaj), olayların özetlenmesinde, bilgi makalelerinin taslaklanmasında, hizmet masası için önerilen yanıtlarda, teslimat hatlarında kod tamamlama ve incelemede, izlemede anomali tespitinde ve kullanıcılar için konuşmalı asistanlarda karşımıza çıkar. [AIOps](https://en.wikipedia.org/wiki/AIOps), yapay zekânın BT operasyon verilerine uygulanmasına çoğunlukla verilen addır.

Bu araçlar için öne sürülen iddialar büyüktür, herhangi bir kurumdaki kanıt ise genellikle küçüktür. Tedarikçiler kazanılan zamanı bildirir. Erken benimseyenler heyecanlarını bildirir. Yöneticiler vaat edilen verimlilik kazancını ister. Takımlar ise çıktının denetlenmesi gerektiğini, bazı önerilerin kendinden emin biçimde yanlış olduğunu ve işin farklı hissettirdiğini bildirir. Bunlardan hangisinin kendi işi için doğru olduğunu bir kurum ölçümle öğrenir. Kitabın bu bölümü yapay zekâyı, diğer metrik aileleriyle aynı koruma önlemleriyle, ölçülmesi gereken bir şey olarak ciddiye alır.

Yapay zekâ ölçüm sorununu dört biçimde değiştirir.

- **Hacim ve hız artar, kalitenin görülmesi ise zorlaşır.** Yapay zekâ bilet, yanıt, kod ve belge üretimini hızlandırır; dolayısıyla çıktı ölçütleri yükselir. Çıktının iyi olup olmadığı ayrı bir sorudur (bkz. Konu 10.4 “Metrik enflasyonu ve kalite seyrelmesi”).
- **Referans değerler kaybolur.** Yapay zekâ günlük kullanıma girdikten sonra, işin onsuz nasıl göründüğünü geri getiremezsiniz. Referans değer değişiklikten önce alınmalı ya da bir karşılaştırma grubu bulunmalıdır.
- **İnsanlar döngüde kalır ve bunun sonuçları vardır.** [Döngüde insan](https://en.wikipedia.org/wiki/Human-in-the-loop) (human-in-the-loop) tasarımları sonuçtan bir kişiyi sorumlu tutar. Makine çıktısını inceleyen insanlar ona fazla kolay boyun eğebilir; bu örüntü [otomasyon yanlılığı](https://en.wikipedia.org/wiki/Automation_bias) olarak bilinir. Ya da kazandıklarından daha fazla zamanı denetlemeye harcayabilirler.
- **Çıktılar akıcı ve yanlış olabilir.** [Halüsinasyon](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)), girdi ya da olgularla desteklenmeyen, kendinden emin bir çıktıdır. Ölçütler, bir insan tarafından örneklenen bir doğruluk denetimini içermelidir.

Çevik ve ITIL çalışma biçimleri bu konuya karşı bir duruş sağlar. Sürekli teslimat, sürekli iyileştirme ve süregelen evrim hedefleri yapay zekânın her kullanımını küçük bir deney olarak ele almayı önerir: beklenen faydayı belirtin, birkaç istekli kişiyle deneyin, karşılaştırın ve karar verin. ITIL'in geri bildirimle yinelemeli ilerleme yönündeki yol gösterici ilkesi aynı yönü işaret eder; değere vurgusu da ne kadar metin üretildiğini değil, kullanıcılar ve iş için hangi sonucun iyileştiğini sorar. Motive olmuş insanlar hedefi, yapay zekâ sıkıcı işi hafiflettiğinde ve insanların yargısına saygı gösterdiğinde karşılanır; yapay zekâ tempoyu artırmanın ya da onu kullananları izlemenin bir yolu olduğunda karşılanmaz. Sürdürülebilir tempo, kazanılan zamanın sessizce daha fazla talebe dönüştürülmemesi demektir.

[Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi yapay zekâya en keskin biçimiyle uygulanır. “Yapay zekâ benimsenmesi” ya da “yapay zekâ tarafından üretilen kod payı” bir hedef olursa, insanlar aracı işe yaramadığı yerde de kullanır ve kalite bu sayının bedelini öder (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Bu konu temelleri ele alır: yapay zekânın işe girdiği yerler, hangi referans değerlerin alınacağı ve yapay zekânın bir kullanımının işe yarayıp yaramadığını hangi ölçütlerin gösterdiği. Sonraki konular destekli işe, ajanlara ve sohbet botlarına, enflasyon ve seyrelmeye ve yönetişime daha derinlemesine girer. Yapay zekâ ürünlerine ve kurallarına ilişkin olgular hızla değişir; bu bölümde belirli araçlar ya da düzenlemeler hakkındaki ifadeler Ekim 2026 itibarıyla tarihlendirilmiştir ve yeniden denetlenmelidir.

## Temel ilkeler

- **Yapay zekâyı devreye almadan önce bir referans değer alın.** Bunsuz her fayda iddiası bir görüştür.
- **Her kullanımı bir karşılaştırmayla birlikte bir deney olarak ele alın.** Aynı dönemde yapay zekâ olmadan yapılan benzer işle karşılaştırın.
- **Kaliteyi örnekleme yoluyla, insanlarla birlikte ölçün.** Akıcı çıktı doğru çıktı değildir.
- **Tam maliyeti sayın.** İnceleme süresini, yeniden işi, lisansları ve çıkarım (inference) maliyetlerini dâhil edin.
- **İnsanları sorumlu ve bilgili tutun.** Yapay zekâyı kullanan kişi sonuçtan sorumludur.
- **Yapay zekânın bir tempo artışına ya da bir izleme aracına dönüşmesine izin vermeyin.** Kazanılan zaman, o zamanın nasıl kullanılacağına dair bir tercihtir.
- **İstekli insanlarla ve gerçek sorunlarla başlayın.** Zorunluluklar değersiz kullanım üretir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Referans değer bütünlüğü | Ana göstergeleri için benimseme öncesi kayıtlı referans değeri bulunan planlanmış yapay zekâ kullanım senaryolarının payı | tarihli referans değeri olan kullanım senaryoları / planlanan kullanım senaryoları | yüzde | Kullanım senaryosu kaydı | Sürekli iyileştirme; ölçüm ve raporlama | Bir deneyden önce referans değer | Üç ayda bir |
| Yapay zekâ kullanım kapsamı | Kullanım senaryosuna göre, yapay zekânın kullanıldığı uygun iş öğelerinin veya görevlerin payı | yapay zekâ desteğinin kullanıldığı öğeler / uygun öğeler, araç günlüklerinden veya kullanıcı etiketlerinden, takım düzeyinde | yüzde | Araç kullanım günlükleri, etiketler | Hizmet masası; olay yönetimi; yayın ve dağıtım yönetimi | İstekli takımların bir aracı benimsemesi | Aylık |
| Öneri kabul ve geçersiz kılma oranı | Yapay zekâ önerilerinin olduğu gibi kabul edilen, düzenlenen veya reddedilen payı | her kategorideki öneriler / sunulan öneriler | yüzde | Takıma göre toplulaştırılmış araç günlükleri | Hizmet masası; bilgi yönetimi | Makine önerilerinin incelenmesi | Aylık |
| İncelenmiş çıktı doğruluğu | Nitelikli bir inceleyici tarafından doğru ve amaca uygun bulunan, örneklenmiş yapay zekâ çıktılarının payı | doğru bulunan çıktılar / örneklenen çıktılar | yüzde | Örneklenmiş inceleme kayıtları | Kalite güvencesi; bilgi yönetimi | Çıktı için bitti tanımı | Aylık |
| Referans değere göre görev süresi | Tanımlı bir görevin yapay zekâ ile tamamlanma süresinin referans değerle veya bir karşılaştırma grubuyla kıyaslanması | yapay zekâ ile görev süresinin medyanı ve 85. yüzdeliği eksi referans değer veya karşılaştırma grubundaki aynı değerler | dakika veya saat | Zamanlanmış görevler, bilet zaman damgaları | Hizmet masası; olay yönetimi | Bir görev için çevrim süresi | Üç ayda bir |
| Yapay zekâ destekli görev başına maliyet | İnceleme ve yeniden iş dâhil, yapay zekâ destekli işin görev başına toplam maliyeti | (lisans ve kullanım maliyeti + inceleme ve yeniden iş zaman maliyeti) / yapay zekâ ile tamamlanan görevler | görev başına para birimi | Tedarikçi faturaları, zaman tahminleri, iş izleyici | Hizmet finansal yönetimi | Sonuç başına hizmet maliyeti | Üç ayda bir |
| Karşılaştırmaya göre sonuç hareketi | Yapay zekâ destekli iş için sonuç göstergesindeki değişimin, benzer destekli olmayan işle karşılaştırılması | yapay zekâ destekli grup için gösterge değişimi eksi karşılaştırma grubu için değişim | gösterge birimleri | Kullanım senaryosu başına sonuç ölçütleri (kalite, memnuniyet, yeniden açılma oranı, kusurlar) | Sürekli iyileştirme | Deneylerden öğrenme | Üç ayda bir |

Her kullanım senaryosunu görev, kullanıcılar ve sonuç göstergeleriyle tanımlayın ve kayda işleyin. Yapay zekâ kullanım kapsamı betimleyici bir ölçüttür, hedef değildir. İncelenmiş çıktı doğruluğu, çıktıyı üretmemiş nitelikli bir kişi tarafından yazılı bir standarda göre değerlendirilir. Görev süresi, üretimin yanı sıra istem yazma, inceleme ve düzeltme süresini de içerir. Görev başına maliyet, denetlemeye ve düzeltmeye harcanan insan zamanını sayar. Sonuç hareketi, önceden seçilmiş bir karşılaştırma ve dönem boyunca yaşanan diğer değişikliklere dair bir not gerektirir.

## Öneriler

### Yapay zekânın nereye ait olduğuna karar verin

**1. Görevleri ve yapay zekânın her kullanımının ele aldığı sorunu listeleyin.** Araçtan değil, sorundan başlayın: tekrarlanan taslak yazımı, yavaş önceliklendirme, dağınık bilgi, uzun incelemeler, gürültülü uyarılar. Her aday kullanım için sorunu, bunu kimin yaşadığını, iyileşmesi gereken sonucu ve riskleri yazın. Net bir sorunu olmayan kullanımları atlayın. Referans değerin ve ölçütlerin dayandığı kayıt budur.

**2. Her kullanımın riskini sınıflandırın.** Dâhilî notları taslaklayan bir aracın riski, üretim sistemlerini değiştiren, müşterilere yanıt veren ya da insanlar hakkında karar veren bir aracın riskinden farklıdır. Kullanımları, çıktı yanlış olduğunda doğacak zarara, kimin etkilendiğine ve etkili olmadan önce bir kişinin inceleyip incelemediğine göre sınıflandırın. Daha yüksek riskli kullanımlar daha güçlü ölçütlere, örneklemeye ve yönetişime ihtiyaç duyar (bkz. Konu 10.5 “Yapay zekâ yönetişimi ve risk metrikleri”).

**3. İstekli insanlarla ve sınırlandırılmış görevlerle başlayın.** Yaygın ve denetlenebilir bir görevde gönüllülerle pilot yapın. Gönüllüler dürüst geri bildirim verir ve aracı işlerine uyarlar. Sınırlandırılmış bir görev, referans değerleri ve karşılaştırmaları uygulanabilir kılar. En hassas işle başlamaktan kaçının.

### Referans değerleri alın ve karşılaştırmaları kurun

**4. İlk kullanımdan önce referans değeri kaydedin.** Her kullanım senaryosu için göstergelerin mevcut durumunu alın: tamamlama süresi, kalite veya kusur oranı, yeniden iş, kullanıcı memnuniyeti ve maliyet. Normal değişimi görmeye yetecek kadar gözlem alın (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). Referans değeri tarihleyin ve saklayın. Yaygınlaştırmadan sonra alınan bir referans değer, yeni dünyanın kaydıdır.

**5. Bir karşılaştırma kurun.** Mümkün olduğunda, pilot dönem boyunca yapay zekâ kullanmayan benzer bir grubu ya da görev kümesini ayrı tutun; ya da kullanımı hafta veya görev türü bazında adil bir biçimde dönüşümlü yapın. Rastgeleleştirme idealdir ve çoğu kez pratik değildir. Başka neyin değiştiğini açıkça belirtin. Karşılaştırma olmadan, mevsimsellik, kadro ya da öğrenme kaynaklı iyileşmeler araca yazılır.

**6. Zamanı dürüstçe ölçün.** İlk taslağa kadar geçen süre nadiren doğru ölçüttür. İstem yazma, inceleme ve düzeltme dâhil, bitmiş ve denetlenmiş bir sonuca kadar geçen süreyi ölçün. İnsanlar çoğu zaman kazanılan zamanı üretim adımına dayanarak bildirir ve inceleme adımı bunun bir kısmını ya da tamamını yer. Bir görev örneği üzerinde yapılan zaman çalışmaları emeğe değer.

### Kaliteyi ve maliyeti ölçün

**7. Çıktıları nitelikli kişilerce incelenmek üzere örnekleyin.** Her ay yapay zekâ destekli çıktılardan rastgele bir örnek çekin ve nitelikli bir kişinin bunları yazılı bir standarda göre değerlendirmesini sağlayın. Doğruluğu, bulunan hata türlerini ve eğilimleri raporlayın. Bu, akıcı hataların yayılmasına karşı ana korumadır. İncelemeciyi üreticiden bağımsız tutun ve incelemecileri değiştirerek dönüşümlü çalıştırın.

**8. Kabul ve geçersiz kılma örüntülerini izleyin.** Çok yüksek bir kabul oranı, insanların denetlemeden kabul ettiği bir otomasyon yanlılığına işaret edebilir. Çok düşük bir oran, yararlı olmayan bir araca işaret edebilir. Oranları takımla sohbet için bir vesile olarak kullanın ve sayıların onların deneyiminde ne anlama geldiğini sorun. Kabul için hedef koymayın.

**9. Görev başına tam maliyeti sayın.** Lisans ücretlerini, kullanıma dayalı ücretleri, istem yazmaya, incelemeye ve düzeltmeye harcanan zamanı, eğitimi ve yönetişim emeğini dâhil edin. Referans maliyetle karşılaştırın. Taslakları hızlı üreten ama ağır düzeltme gerektiren bir araç eski yoldan daha pahalıya mal olabilir. Kullanıcılara ulaşan hataların maliyetini de ekleyin.

### İnsan yönünü doğru tutun

**10. İnsanları izlemeden ve tempo kaymasından koruyun.** Yapay zekâ kullanım verilerini takım düzeyinde toplulaştırın ve bireyleri değerlendirmek için kullanmayın. Kullanımı bir performans ölçütü olarak kullanmayın. Kazanılan zamanın otomatik olarak ek iş yüküne dönüşmeyeceği konusunda önceden anlaşın ve onunla ne yapılacağına takımla birlikte karar verin: kalite, öğrenme, iyileştirme ya da başka işler. Sabit bir tempo bir tasarım hedefidir (bkz. Konu 9.2 “Memnuniyet ve iyi oluş metrikleri”).

**11. Kullananlara sorun.** Kısa nabız anketleri ve sohbetler sayıların kaçırdığını ortaya çıkarır: aracın nerede yardımcı olduğunu, nerede sinir bozduğunu, işi üretmekten denetlemeye nerede kaydırdığını ve işin hoşnutluğunu değiştirip değiştirmediğini. Beceriler, kalite ve iş güvencesi ile ilgili kaygılara saygıyla yaklaşın.

**12. Karar verin, yayımlayın ve yeniden ele alın.** Her pilotun sonunda ölçeklemeye, uyarlamaya ya da durdurmaya karar verin ve kanıtı kaydedin. Sonuçları, sonuçsuz ve olumsuz olanlar dâhil, dürüstçe paylaşın. Araçlar hızla değiştikçe kararları yeniden gözden geçirin. Geçen yıl işe yaramayan bir kullanım şimdi yarayabilir, tersi de geçerlidir.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Referans değer bütünlüğü | Referans değerleri sonradan kaydetmek; elverişli göstergeleri seçmek | Tarih damgalı referans değerler; referans değer yönteminin bağımsız incelemesi |
| Yapay zekâ kullanım kapsamı | Kullanımı zorunlu kılmak; önemsiz ya da otomatik çağrıları saymak | Asla hedef olmasın; sonuç hareketiyle karşılaştırın; anlamlı kullanımı sayın |
| Öneri kabul ve geçersiz kılma oranı | Kabulü ödüllendirmek; reddetmeyi zahmetli kılmak | Hedef olmasın; incelenmiş çıktı doğruluğu; kullanıcılara deneyimlerini sorun |
| İncelenmiş çıktı doğruluğu | Kolay çıktıları örneklemek; yumuşak inceleyiciler | Bağımsız inceleyicilerle rastgele örnek; yazılı standart; inceleyici rotasyonu |
| Referans değere göre görev süresi | Yalnızca üretimi zamanlamak; kolay görevleri seçmek | Denetlenmiş sonuca kadar süre; görevleri rastgele örnekleyin; inceleme ve yeniden işi dâhil edin |
| Yapay zekâ destekli görev başına maliyet | İnceleme süresini ya da yönetişim maliyetini dışarıda bırakmak | Tam maliyet kontrol listesi; zaman çalışmalarıyla karşılaştırma |
| Karşılaştırmaya göre sonuç hareketi | Elverişli grupları veya dönemleri seçmek; diğer değişiklikleri yok saymak | Önceden üzerinde anlaşılmış karşılaştırma ve dönem; diğer değişikliklerin listesi |

Sağlıklı bir okuma şöyledir: her pilot için referans değerler, bitmiş sonuçlara kadar ölçülen süre, nitelikli kişilerce denetlenen doğruluk, incelemeyi içeren maliyetler, adil biçimde karşılaştırılan sonuçlar ve aracın yargılarına hizmet ettiğini söyleyen takımlar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Gönüllülerle pilot | Dürüst geri bildirim; düşük risk | Gönüllüler hevesli kişilerdir; sonuçlar genellenemeyebilir |
| Zorunlu yaygınlaştırma | Hızlı kapsama | Değersiz kullanım; kırgınlık; manipülasyon |
| Kontrollü karşılaştırma | İnandırıcı kanıt | Emek gerektirir; her zaman mümkün değildir |
| Yalnızca öncesi-sonrası | Basit | Diğer değişikliklerle karışır |
| Tedarikçinin bildirdiği tasarruflar | Elde etmesi kolay | İyimser; bağlamdan bağımsız |
| Kendi zamanlanmış görevleriniz | İşinize dayanır | Zaman alıcı; küçük örnekler |
| Her çıktının ağır incelenmesi | Güvenli | Faydayı ortadan kaldırır |
| Örneklemeli inceleme | Ölçeklenir | Bazı hatalar gözden kaçar |

Düzyazı yanıt şudur: referans değerler ve karşılaştırmalarla küçük pilotlar yürütün, kaliteyi çıktıları örnekleyerek ölçün, tam maliyeti sayın ve kararı kanıta göre verin. Tedarikçi rakamlarını sınanacak hipotezler olarak kullanın.

## Takımınızla tartışılacak sorular

**1. Yapay zekânın bize nerede yardımcı olmasını bekliyoruz ve yardımcı olsaydı ne görürdük?**
Aday kullanımları listeleyin ve her biri için göstergeyi ve bugün elimizdeki referans değeri belirtin. Kolaylaştırıcı ayrıntı için ısrar etmelidir: hangi görev, hangi ölçüt, ne büyüklükte bir değişim önemli olur. Pilot yapılacak bir kullanım seçin ve referans değer üzerinde anlaşın.

**2. Bir yapay zekâ önerisine güvenmemizi ya da güvenmemizi neyin sağlayacağı ve yanıldığımızı nasıl anlayacağız?**
Çıktının yanlış olduğu durumları ve bunun nasıl fark edildiğini tartışın. İncelemenin pratikte nasıl işlediğini ve baskının onu atlamaya yol açıp açmadığını ele alın. Bağımsız birinin yürüteceği bir örnekleme yöntemi üzerinde anlaşın.

**3. Kazandığımız zamanın ne kadarını denetlemeye harcayacağız?**
Gerçek bir görevi, istem yazma ve inceleme dâhil, araçla ve araçsız zamanlayın. İnsanların beklentisiyle karşılaştırın. Sohbet çoğu kez kazancın nerede olduğunu ve nerede olmadığını ortaya çıkarır.

**4. Kazandığımız zamanla ne yapmalıyız?**
Önceden karar verin. Seçenekler arasında kalite işi, öğrenme, iyileştirme ya da daha az baskı bulunur. Zamanın sessizce daha fazla talebe karışmasının nasıl önleneceğini tartışın. Takımın bunu nasıl koruyacağı konusunda liderlerle anlaşın.

**5. Yapay zekânın burada neyi yapmasını istemezdik ve neden?**
İnsan yargısı, empati ya da hesap verebilirlik gerektiren görevleri listeleyin. Kullanıcılara ve becerilere yönelik riskleri tartışın. Kolaylaştırıcı sınırları yönetişim için girdi olarak kaydetmelidir.

**6. Ne zaman duracağımızı nasıl bileceğiz?**
Pilotu ya da kullanımı sona erdirecek kanıtı tanımlayın. Kimin ve ne zaman karar vereceği üzerinde anlaşın. Çıkış ölçütü olmayan bir pilot kalıcı bir unsura dönüşür.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları yapay zekâyı kod, test, inceleme ve dokümantasyon için kullanır. İncelenmiş, çalışan bir sonuca kadar geçen süreyi ölçmeli, kaliteyi ve kusurları izlemeli ve insan incelemesini anlamlı tutmalıdır. Üretilen satırları ya da kabulü sayan ölçütlere direnmeli ve kusurlar ile kararlılık gibi sonuç ölçütlerinde ısrar etmelidir.

### Hizmet ve operasyon takımları

Operasyon ve hizmet masası takımları yapay zekâyı önceliklendirme, özetler, öneriler ve izleme için kullanır. Ele alma ve çözüm kalitesini referans değerlerle karşılaştırmalı, çıktıları örneklemeli ve kullanıcılar ile tekrar eden temaslar üzerindeki etkilere dikkat etmelidir. Yapay zekâ kullanıcıların karşısına konmadan önce danışılmalıdır.

### Liderlik ve yönetişim

Liderler yapay zekâ programlarına sponsor olur ve kazanç göstermek için baskı hisseder. Referans değerlerde ve karşılaştırmalarda ısrar etmeli, inceleme işini finanse etmeli, kullanım hedeflerinden kaçınmalı ve insanları izlemeden ve tempo kaymasından korumalıdır. Yönetişim, ölçeklemeden önce risk sınıflandırması ve kanıt talep etmelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar yapay zekâyla yanıtlarda, önerilerde ve otomatik eylemlerde karşılaşır. Doğru, anlaşılır yardım ve bir insana ulaşabilme imkânı isterler. Uygun olduğunda yapay zekâyla etkileşimde olduklarından haberdar edilmelidirler ve geri bildirimleri yardımcı olup olmadığının temel kanıtıdır (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir sigortacının teknoloji grubu, 4.000 çalışan ve birkaç ürün takımı için dâhilî bir hizmet masası işletiyor. Liderlik bir yapay zekâ asistanı için lisanslar satın alıyor ve üç ay sonra kazanılan zamana ilişkin bir rapor istiyor. Aşağıdaki sayılar açıklayıcıdır.

Hizmet yönetimi başkanı bir referans değerde ısrar eder. Hizmet masasının en yaygın görevi olan erişim ve parola taleplerine yanıt taslaklama için son 120 bileti zamanlar: medyan ele alma süresi 11 dakika, 85. yüzdelik 24 dakika, yeniden açılma oranı yüzde 6 ve ankette kararlı bir memnuniyet puanı. Asistanı pilot etmek için iki takım seçer ve karşılaştırma olarak benzer iki takımı olduğu gibi bırakır. Pilot takımlar gönüllüdür.

Sekiz hafta sonra pilot takımların medyan ele alma süresi 8 dakika ve 85. yüzdelik 19 dakikadır; karşılaştırma takımlarında ise bu değerler 11 ve 23'tür. Araç günlükleri, ajanların önerileri vakaların yüzde 52'sinde yazıldığı gibi kabul ettiğini, yüzde 38'inde düzenlediğini ve yüzde 10'unda reddettiğini gösterir. Pilota dâhil olmayan kıdemli bir ajanın incelediği, 80 yanıtlık aylık bir rastgele örnek yüzde 91'inin tamamen doğru olduğunu bulur; hatalar, asistanın güncel olmayan adımlar verdiği ve nadiren kullanılan bir prosedürde yoğunlaşmıştır. Pilot takımlardaki yeniden açılma oranı hafifçe yüzde 7'ye çıkar, bu normal değişim içindedir. Lisanslar ve inceleme süresi hesaba katıldığında bilet başına maliyet mütevazı biçimde düşer. Bir anket, ajanların taslakları takdir ettiğini ve uzun yanıtların ek denetimini sevmediğini gösterir. İki ajan saat başına daha fazla bilet ele alma baskısı hissettiklerini söyler.

Hizmet yönetimi başkanı, medyanda yaklaşık dörtte birlik bir zaman tasarrufunu raporlar ve çekinceleri belirtir: iki takım, sekiz hafta, gönüllüler ve izlenmesi gereken bir yeniden açılma oranı. Liderlerle, kazanılan zamanın bilgi tabanına ve karmaşık vakalara gideceği ve hiçbir bilet hedefinin yükselmeyeceği konusunda anlaşır. Güncel olmayan prosedür bilgi tabanında düzeltilir. Kıdemli bir yönetici şirket genelinde zorunlu kullanım ve yüzde 80 kabul hedefi ister. Başkan hedefi reddeder, bir kabul hedefinin denetlememeyi ödüllendireceğini açıklar ve pilotu aynı ölçütlerle iki takım daha ekleyerek genişletmeyi önerir. Karar kaydedilir.

## Sektör mercekleri

**Girişim (startup).** Araçlar hızla ve çoğu zaman gayriresmî biçimde benimsenir. Ana kullanım için zaman ve kusurların basit bir referans değerini alın, müşteriye dönük her şeyde insan incelemesini sürdürün ve erkenden tek bir tedarikçiye kilitlenmekten kaçının. Çalışanlar herkese açık araçlar kullandığında güvenlik ve veri ifşasına dikkat edin.

**Küçük işletme.** Hazır asistanlar taslak yazımı ve rutin görevlerde gerçek yardım sunabilir. Küçük ölçekte ölçün: birkaç gerçek görev için süre ve düzeltme oranı. Gizli verilerde dikkatli olun ve tedarikçinin verileri nasıl kullandığına dair koşullarını denetleyin.

**Kurumsal.** Ölçek; yönetişimi, satın alma standartlarını ve ortak bir ölçüm yaklaşımını gerektirir. Pilotları karşılaştırmayla yürütün, sonuçları dâhilî olarak yayımlayın ve referans değerleri ile yöntemleri takımlar arasında paylaşın. Kullanımı başarı diye raporlayan programlara karşı dikkatli olun.

**Hükûmet ve kamu sektörü.** Vatandaşları etkileyen kararlar şeffaflık, adalet ve insan incelemesi konusunda yasal yükümlülüklere tabi olabilir. Kullanımları riske göre sınıflandırın, kararlarda yapay zekânın nasıl kullanıldığına dair kayıt tutun ve bu konuda açık olun. Satın alma kuralları ve veri koruma geçerlidir; bazı yargı bölgelerinin bugün itibarıyla denetlenmesi gereken özel yapay zekâ yasaları vardır (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler; lisanslar veya kullanım ücretleri, entegrasyon, eğitim, referans değerleri almak ve karşılaştırmaları yürütmek için harcanan zaman, çıktıları incelemeye ve düzeltmeye harcanan insan zamanı ve yönetişim emeğidir. Maliyetler kullanımla ölçeklenebilir ve tedarikçi fiyatlandırmasıyla değişebilir; bu nedenle bir aralığı modelleyin.

Olası getiriler; tekrarlayan görevlerde geri kazanılan zaman, daha hızlı taslak yazımı ve arama, bilginin daha iyi kapsanması ve çalışanlar için sıkıcı işten rahatlamadır. Bunlar sınanacak olasılıklardır, bankaya yatırılacak varsayımlar değildir. Gerekçeyi kendi pilotlarınızdan inşa edin: referans değer ve karşılaştırmaya karşı, denetlenmiş sonuca kadar ölçülen görev süresi, incelenmiş doğruluk, yeniden iş ve görev başına tam maliyet. Yöntemini izleyemediğiniz ve işinize uyup uymadığını bilemediğiniz tedarikçi ya da anket kaynaklı verimlilik yüzdelerini aktarmaktan kaçının. Kullanıcılara ulaşan hataların riskini ve araçları yönetmenin maliyetini dâhil edin (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Referans değer olmadan yapay zekâyı devreye almak.** Neyin değiştiğini söyleyemezsiniz. Önce referans değeri alın.
- **Üretim hızını ölçmek.** Tasarruf incelemede kaybolabilir. Denetlenmiş sonuca kadar süreyi ölçün.
- **Benimseme hedefleri.** Değersiz kullanım üretirler. Kapsamı betimleyici olarak ele alın.
- **Tedarikçi iddialarına güvenmek.** Bunlar hipotezlerdir. İşinizde sınayın.
- **Gerçek olmayan inceleme.** Otomasyon yanlılığı incelemeyi lastik damgaya çevirir. Örnekleyin ve bağımsız olarak denetleyin.
- **Kazanılan zamanı daha fazla talebe dönüştürmek.** Güveni ve sürdürülebilir tempoyu aşındırır. Zamanın ne için olduğuna önceden karar verin.
- **Bireysel kullanımı izlemek.** Korku üretir. Takım düzeyinde toplulaştırın.
- **Sonu olmayan pilotlar.** Varsayılan olarak kalıcı hâle gelirler. Çıkış ölçütleri belirleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Amaç ve referans değerler | Araçlar hevesle benimsenir | Kullanım senaryoları listelenir | Her kullanım için sorunu, risk sınıfını, referans değeri ve göstergeyi içeren kayıt | Ölçeklemeden önce referans değerler ve karşılaştırmalar zorunludur; sonuçlar yayımlanır | Takımlar ve iş ortakları arasında paylaşılan referans değerler ve yöntemler; kanıt zayıfladığında kullanımlar emekliye ayrılır |
| Fayda kanıtı | Anekdotlar ve tedarikçi iddiaları | Gayriresmî zaman tahminleri | Zamanlanmış görevler; örneklenmiş doğruluk; görev başına tam maliyet | Karşılaştırmaya göre sonuç hareketi sınırlarıyla raporlanır | Yapay zekânın nerede yardımcı olduğuna dair portföy görünümü; öğrenme geniş biçimde paylaşılır |
| İnsanlar ve tempo | Zorunluluklar; izleme | Gayriresmî özen | Yalnızca takım düzeyi veri; kazanılan zaman anlaşmayla tahsis edilir | Kaygılar izlenir; beceriler ve memnuniyet ölçülür | Yapay zekâ kullanımının kullanıcılar ve çalışanlarla birlikte tasarlanması; sürdürülebilir tempo korunur |

## Kontrol listesi

- [ ] Yapay zekânın her kullanımının yazılı bir sorunu, risk sınıfı, sahibi ve çıkış ölçütleri vardır.
- [ ] Her pilot için ilk kullanımdan önce tarihli bir referans değer vardır.
- [ ] Bir karşılaştırma grubu ya da karşılaştırma görevleri önceden tanımlanmıştır.
- [ ] Süre, bitmiş ve denetlenmiş bir sonuca kadar ölçülür.
- [ ] Çıktılar aylık olarak örneklenir ve nitelikli, bağımsız kişilerce incelenir.
- [ ] Görev başına tam maliyet inceleme ve yeniden işi içerir.
- [ ] Kullanım verileri takım düzeyinde toplulaştırılır ve bireyler için kullanılmaz.
- [ ] Takım, kazanılan zamanla ne yapılacağı konusunda anlaşmıştır.
- [ ] Kullanıcılara aracı deneyimlerine ilişkin sorular sorulur.
- [ ] Pilotlar, ölçekleme, uyarlama ya da durdurma yönünde kayda geçmiş bir kararla sona erer.

## Yapay zekâ istemleri

**Bir kullanım senaryosu girdisi taslaklayın.**

```text
[Takım ve hizmet] içinde [görev] için yapay zekâ kullanmayı düşünüyoruz. Bir
kullanım senaryosu kaydı girdisi taslaklayın: sorun ve bunu kimin yaşadığı,
iyileşmesi gereken sonuç, risk sınıflandırması ve nedeni, insan inceleme adımı,
şimdi alınacak referans değer göstergeleri, bir karşılaştırma yaklaşımı, izlenecek
maliyet bileşenleri, çıkış ölçütleri ve takım için sorular. Belirli tedarikçi
özelliklerini varsaymayın ve fayda iddia etmeyin. Varsayımlarınızı listeleyin.
```

**Zamanlanmış görev çalışması tasarlayın.**

```text
Bir yapay zekâ asistanının [görev] üzerindeki etkisini ölçmek için küçük bir
çalışma tasarlayın. Görevlerin nasıl seçileceğini, araçlı ve araçsız durumun adil
biçimde nasıl karşılaştırılacağını, neyin zamanlanacağını (istem yazma, inceleme
ve düzeltme dâhil), çıktı kalitesinin nasıl değerlendirileceğini ve yanlılığın
nasıl önleneceğini önerin. [kişi sayısı] kişilik bir takım için pratik tutun.
Beklenen sonuçları belirtmeyin. Varsayımlarınızı ve tasarımın sınırlarını listeleyin.
```

**Çıktı örneklemesini planlayın.**

```text
Aylık yapay zekâ destekli çıktılarımız yaklaşık [sayı] adet olup türleri
[liste]. Aylık bir rastgele örnekleme ve inceleme süreci tasarlayın: örneklem
büyüklüğü ve seçim yöntemi (gerekçesiyle, kesinliği olduğundan fazla göstermeden),
kimin inceleyeceği, yazılı standart, hata kategorileri, nasıl raporlanacağı ve
bulguların nasıl kullanılacağı. Varsayımlarınızı ve risklerinizi listeleyin.
```

**Kazanılan zamanla ne yapılacağına karar verin.**

```text
Pilotumuz [takım] içinde haftada [sayı] görev için görev başına medyan [değer]
tasarruf sağladı. Kaliteyi, öğrenmeyi ve sürdürülebilir bir tempoyu destekleyen,
zamanı kullanma seçenekleri önerin; her birinin ödünleşimlerini ve risklerini ve
seçimin takım ile liderlerle nasıl kararlaştırılacağını belirtin. Tasarrufların
süreceğini varsaymayın. Varsayımlarınızı listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): yapay zekâyla ilgili bir metriği raporlamadan önce eşleştirilmiş koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir yapay zekâ metrik girdisinin referans değerini, karşılaştırmasını, manipülasyon yolunu ve koruma önlemini kaydedip kaydetmediğini denetlemek için kullanın.

## Temel çıkarımlar

- Yapay zekâ kullanılmadan önce tarihli bir referans değer alın ve onsuz yapılan benzer işle karşılaştırın.
- Bitmiş ve denetlenmiş bir sonuca kadar geçen süreyi ölçün ve çıktıları doğruluk için bağımsız inceleyicilerle örnekleyin.
- İnceleme ve yeniden iş dâhil tam maliyeti sayın.
- Kullanımı ve kabulü betimleyici olarak ele alın, asla hedef olarak değil.
- Kazanılan zamanla ne yapılacağına önceden karar verin ve sürdürülebilir bir tempoyu koruyun.
- Kullanım verilerini takım düzeyinde tutun ve her pilotu kayda geçmiş bir kararla bitirin.

## Kaynaklar ve ileri okuma

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
