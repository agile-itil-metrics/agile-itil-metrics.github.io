# Korku yaratmadan metrikleri devreye almak

**Ölçüm, insanlar sayıların işlerini kendilerine yardım etmek için betimlediğine inandığında işe yarar; bu yüzden şeffaflıkla, takım sahipliğiyle, kullanıma dair yazılı sözlerle ve bireylerin sıralama tablolarının hiç olmamasıyla devreye alın.**

## Genel bakış ve motivasyon

Bir metrik programı güven üzerinde başarılı olur ya da başarısız olur. Aynı ölçüm kümesi bir kurumda yararlı bir ayna, bir başkasında korku kaynağı olabilir. Fark nadiren ölçümlerdedir. Fark, insanların sayılar yüzünden başlarına ne geleceğine inandığıdır. Sayıların kendilerini sıralamak, suçlamak veya azaltmak için kullanılacağına inanıyorlarsa makul tepki kendilerini korumaktır: iyi puan alan işi seçmek, sorunları bildirmeyi geciktirmek, tanımlar üzerinde tartışmak ve kaydedileni sessizce ayarlamak. Veri o zaman işi betimlemeyi bırakır ve program, sunmak üzere kurulduğu şeyi kaybeder.

Bu desen eski ve iyi bilinen bir desendir. [Hawthorne etkisi](https://en.wikipedia.org/wiki/Hawthorne_effect), insanların gözlemlendiklerini bildiklerinde davranışlarını değiştirmesini betimler. [Campbell yasası](https://en.wikipedia.org/wiki/Campbell%27s_law), nicel bir göstergenin karar vermede ne kadar çok kullanılırsa o kadar çok bozulma baskısına maruz kalacağını ve izlemesi amaçlanan süreci o kadar çok çarpıtacağını söyler. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) hedefler hakkında benzer bir noktaya değinir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Bunların hiçbiri ölçümden kaçınmak için bir gerekçe değildir. Bunlar, çarpıtma teşviklerinin düşük, doğruyu söyleme nedenlerinin yüksek olacağı biçimde devreye almayı tasarlamak için gerekçelerdir.

[Psikolojik güvenlik](https://en.wikipedia.org/wiki/Psychological_safety), bir takımın bir hatayı kabul etmek, bir soru sormak veya kötü haberi bildirmek gibi kişilerarası risk almak için güvenli olduğuna dair ortak bir inançtır. Metrik programları hem ona bağlıdır hem de onu aşındırabilir. Başarısızlık, yeniden iş ve gecikme ölçümleri ancak insanlar bunları bildirmekte kendini güvende hissettiğinde dürüsttür (bkz. Konu 9.2 “Memnuniyet ve iyi oluş metrikleri” ve Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”). Ölçülen kişilerle ölçümleri kullanan kişiler arasındaki [güven](https://en.wikipedia.org/wiki/Trust_(social_science)) temel varlıktır ve yavaş inşa edilir, hızla harcanır.

[Değişim yönetimi](https://en.wikipedia.org/wiki/Change_management), insanları değişime hazırlama ve değişim boyunca destekleme disiplinidir. Metrikleri devreye almak kurumsal bir değişikliktir ve yeni bir süreç veya araçla aynı özeni hak eder (bkz. Konu 9.6 “Kurumsal değişim ve benimseme metrikleri”). [Teknoloji benimseme yaşam döngüsü](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle), yeniliklerin meraklılardan çoğunluğa nasıl yayıldığını betimler; bu, istekli takımlarla yürütülen saygın bir pilotun bir zorunluluktan daha fazlasını başardığının hatırlatıcısıdır. [Pilot proje](https://en.wikipedia.org/wiki/Pilot_project), daha geniş bir taahhütten önce bir yaklaşımı sınayan küçük ölçekli bir denemedir. [Bilgi radyatörü](https://en.wikipedia.org/wiki/Information_radiator), insanların sormadan bir bakışta okuyabileceği görünür bir bilgi ekranıdır; takım verisini sahibi olan takıma gösterdiğinde şeffaflığa uyar.

Çevik hedefler, devreye almaya biçimini verir. Sürekli paydaş katılımı, ölçülen kişilerin ölçümlerin ve kullanımlarına ilişkin kuralların seçimine yardım etmesi demektir. Sürekli iyileştirme, programın kendisinin insanların söylediklerine yanıt olarak değiştirilmesi demektir. Süregelen evrim, ölçümlerin değişmesinin beklenmesi demektir; bu da herhangi birinin riskini düşürür. Sürdürülebilir tempo, programın işi sıkıştıracak raporlama eklememesi demektir. Motivasyonu yüksek bireyler etrafında inşa etmek, insanlara izlenecek kaynaklar olarak değil, kendi işlerini iyileştirmek için veriyi kullanabilecek yetkin yetişkinler olarak davranmak demektir. Pratik duruş basittir: sistemi ölçün, veriyi içindeki insanlarla paylaşın ve iyileştirmeye onların öncülük etmesine izin verin.

Konu, pano yönergesiyle (bkz. Konu 11.1 “Hizmet metrikleri panosu tasarlamak”) ve ölçümlerin yönetişimiyle (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”) birlikte çalışır.

## Temel ilkeler

- **Verinin ne için olduğunu ve ne için olmadığını söyleyin.** İkisini de yazın ve onlara bağlı kalın.
- **Takımlar ölçümlerine sahip çıkar.** İşi yapanlar, onunla ilgili sayıları tanımlamaya, görmeye ve yorumlamaya yardım eder.
- **Sistemleri ölçün, bireyleri değil.** Sıralama tablosu yok, kişi başına puan yok, veriyi bireysel performans değerlendirmelerinde kullanmak yok.
- **Şeffaf olun.** Tanımları, veri kaynaklarını ve kimin neyi görebildiğini paylaşın. Sürprizler şüphe doğurur.
- **Gönüllülerle başlayın.** İstekli bir pilot, daha geniş devreye almadan önce hikâyeler ve düzeltmeler üretir.
- **Kullanımı gösterin.** Sayıların suçlamaya değil, bir engeli kaldırmak gibi yardıma yol açtığını gösterin.
- **İtiraza izin verin.** İnsanlar bir sayıyı sorgulayabilir ve düzeltmeler hızlı ve görünür biçimde yapılır.
- **Sürdürülebilir tempoda ilerleyin.** Bir seferde birkaç ölçüm, öğrenmek için zamanla.

## Metrik tanımları

Aşağıdaki ölçümler, program takımına devreye almanın güven inşa edip etmediğini veya harcayıp harcamadığını söyler. Bireyleri değil, takımları ve programı betimlerler. Birkaçı anketlere ve davranış gözlemine dayanır ve en iyi, üzerinde konuşulacak sinyaller olarak okunur.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kullanım tüzüğü kapsamı | Ölçümlerinin ne için kullanıldığını ve asla ne için kullanılmadığını belirten yazılı bir bildirimi kabul etmiş katılımcı takımların payı | üzerinde anlaşılmış tüzüğü olan takımlar / katılımcı takımlar | yüzde | Programda tutulan tüzükler | Yönetişim; kurumsal değişim yönetimi | Çalışma anlaşmaları | Üç aylık |
| Takım sahipliği payı | Tanımlarını takımın yazmaya yardım ettiği veya onayladığı, takıma gösterilen ölçümlerin payı | takım onaylı ölçümler / takıma gösterilen ölçümler | yüzde | Metrik kataloğu; onay kayıtları | Sürekli iyileştirme | Kendi kendini örgütleyen takımlar | Üç aylık |
| Açıklık sinyali | Sorunların ve ramak kala olayların bildirilmesinin, ölçümler getirildikten sonra sabit kalıp kalmadığı veya artıp artmadığı | takım başına üç ayda ramak kala veya sorun bildirimleri, öncesi ve sonrası; eğilim | bildirim | Olay, ramak kala ve olay sonrası inceleme kayıtları | Olay yönetimi; sürekli iyileştirme | Suçlamasız yansıtma | Üç aylık |
| İtiraz yanıt süresi | Bir kişinin veya takımın bir sayıya itiraz etmesinden, kendilerine görünür bir çözüme kadar geçen süre | itirazdan çözüme gün sayısının medyanı ve 85. yüzdeliği | gün | İtiraz günlüğü | Sürekli iyileştirme; bilgi yönetimi | Geri bildirime yanıt vermek | Üç aylık |
| Ölçümün algılanan güvenliği (anket) | "Çalışmamıza dair veri bize yardım etmek için kullanılıyor" gibi ifadelere takım düzeyinde anket katılımı | takım anketinde katılanların yüzdesi; yanıt oranı gösterilir | yüzde | Anonim takım anketi, toplulaştırılmış | Kurumsal değişim yönetimi | Güven ve motivasyonu yüksek bireyler | Yılda iki kez |
| Bireysel kullanım olayları | Tüzüğe aykırı olarak verinin bireyleri sıralamak veya değerlendirmek için gösterildiği veya kullanıldığı durumlar | sonuçlarıyla birlikte üç ayda bildirilen örnek sayısı | sayı | Programa yapılan bildirimler; panoların ve değerlendirmelerin gözden geçirilmesi | Yönetişim | İnsanlara saygı | Üç aylık |
| Gönüllü benimseme | Herhangi bir zorunluluktan önce, dönem içinde programa katılmayı seçen uygun takımların payı | katılmayı tercih eden takımlar / davet edilen uygun takımlar | yüzde | Program kayıtları | Kurumsal değişim yönetimi | Pilotlar ve öğrenme | Üç aylık |

Algılanan güvenlik anketi, hiçbir bireyin belirlenememesi için raporlamada asgari bir grup büyüklüğüne ihtiyaç duyar ve anonim olmalıdır. Açıklık sinyali dikkatle okunmalıdır: bildirimlerdeki artış daha fazla sorun veya bunları bildirmeye daha fazla istek anlamına gelebilir; sağlıklı bir programın başlangıçta ürettiği şey genellikle ikincisidir. Bireysel kullanım olayları saklanacak bir sayı değildir. Amaç, her örneğin bildirilmesi, ele alınması ve düzeltilmesidir; bildirilen az sayıda örnek, programın başarısızlığının değil, işleyen bir bildirim yolunun işaretidir. Gönüllü benimseme yalnızca herhangi bir zorunluluktan önceki dönem için sayılır.

## Öneriler

### Önce temel kuralları belirleyin

**1. Sözleri yazın ve yayımlayın.** İlk sayı gösterilmeden önce kısa bir tüzük yazın. İyi bir tüzük, ölçümlerin takımları, hizmetleri ve sistemleri betimlediğini ve bireyleri sıralamak için veya bireysel performans değerlendirmelerinde asla kullanılmadığını söyler. Kimin neyi görebildiğini, verinin ne kadar süre saklandığını, insanların bir sayıya nasıl itiraz edebileceğini ve kurallar çiğnenirse ne olacağını söyler. Üst düzey liderler imzalar. Tüzük, insanların savunmalarını gevşetmesini sağlayan bir taahhüttür ve bulması ve okuması kolay olmalıdır.

**2. İyileştirme için ölçümü, yargı için ölçümden ayırın.** Takımlar ölçümlerini kendi işlerini iyileştirmek için kullanır. Liderler desteği ve yatırımı yönlendirmek için toplulaştırılmış görünümleri kullanır. İki kullanım da bir kişiyi değerlendirmekle ilgili değildir. Bir kurumun bireyleri değerlendirmesi gerekiyorsa bunu sohbet, kanıt ve bağlam aracılığıyla yapmalı, asla bir panodan okuyarak yapmamalıdır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

**3. Ödünleşimler konusunda açık olun.** İnsanlara her ölçümün manipüle edilebileceğini, hangi yollarla edilebileceğini bildiğinizi ve her birinin bir koruma önlemiyle geldiğini söyleyin. Manipülasyon yollarını ve koruma önlemlerini bu kitabın tarzında gösterin. Riskleri açıkça adlandırmak iyi niyeti gösterir ve gözden kaçırdığınız yolları insanların göstermesini davet eder.

### Takımları sahip yapın

**4. Takımların seçmesine ve tanımlamasına izin verin.** Bir ölçüm menüsü sunun ve her takımın başlamak için birkaç tane seçmesine, tanımları belirtilmiş bir gerekçeyle uyarlamasına ve kendi ölçümlerini eklemesine izin verin. Ölçümlerini kendisi seçen takımların bunları dürüstçe kullanma olasılığı daha yüksektir. Hizmetlerin, karşılaştırmanın geçerli olduğu düzeyde karşılaştırılabilmesi için küçük bir ortak çekirdek tutun (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

**5. Takımlara önce verilerini gösterin.** Her takıma, başkası görmeden önce sayılarını; kontrol etmek, düzeltmek ve bağlam eklemek için zamanla birlikte verin. Hikâyeye takım sahip çıkar. Veri daha sonra liderlere gösterildiğinde takım onu sunar veya not düşer. Bu, sürprizleri önler ve yorumun işe en yakın insanlardan geldiğinden emin olur.

**6. Görünümleri doğru düzeyde tutun.** Takım düzeyinde ve hizmet düzeyinde görünümler gösterin. Kişi başına dökümler göstermeyin ve bunları yapan araç özelliklerini kapatın. Tek bir olayın geçmişi gibi bir soruşturma için ayrıntılı bir görünüm gerekliyse erişimi sınırlandırın, nedenini açıklayın ve gözden geçirme sohbetlerinin dışında tutun (bkz. Konu 11.2 “Araç manzarası”).

### Güven kazanmak için devreye alın

**7. Gönüllülerle pilot yapın.** Meraklı ve saygın iki veya üç takımı davet edin. Ölçümler ve kurallar üzerinde onlarla çalışın. Kendi hikâyelerini akranlarına anlatmalarına izin verin. Düzeltmeleri ve itirazları programı iyileştirecek ve onayları herhangi bir duyurudan daha fazla ağırlık taşıyacaktır. Daha geniş devreye almadan önce neyi değiştireceklerini sorun ve değiştirin.

**8. Değeri erken ve görünür biçimde sunun.** İlk haftalar içinde veriyi, takımı rahatsız eden bir şeyi kaldırmak için kullanın: hep bekleyen bir kuyruk, amacı olmayan bir onay adımı, kimsenin okumadığı bir rapor. İnsanlar sayıların yardıma yol açtığını gördüklerinde daha dürüst veri sunarlar. Sayıların kendileri hakkında sorulara yol açtığını gördüklerinde daha az sunarlar.

**9. İtirazlara hızla yanıt verin.** Biri bir sayının yanlış olduğunu söylediğinde ciddiye alın. Kontrol edin, tanımı veya veriyi düzeltin ve ne yapıldığını herkese açıkça söyleyin. Hızlı, saygılı bir düzeltme güven inşa eder; savunmacı bir yanıt onu harcar. Bir itiraz günlüğü tutun ve tekrarlanan itirazları ölçümün üzerinde çalışılması gerektiğinin sinyalleri olarak ele alın.

### Güveni zaman içinde koruyun

**10. Korkunun işaretlerini izleyin.** İşaretler arasında sonuçlardan kaçınmak için tanımlar üzerinde tartışan takımlar, diğer sinyallerle uyuşmayan ani iyileşmeler, daha az bildirilen sorun, iyi görünmek için seçilen iş ve verileri kimin görebildiğini soran insanlar bulunur. Bunları kötü davranış olarak değil, program hakkında bilgi olarak ele alın. Takımlara sorun, dinleyin ve ayarlayın.

**11. Liderleri tüzüğe bağlı tutun.** Liderler karşılaştırma, sıralama ve açıklama baskısı altındadır. Onlara meşru olarak kullanabilecekleri şeyi verin: takım ve hizmet düzeyinde eğilimler, dağılımlar ve sonuç ölçümleri. Tüzüğün ihlalini bildirmeyi kolaylaştırın, her bildirime yanıt verin ve bildirimi yapan bireylerin adlarını vermeden sonucu yayımlayın. Tek bir görünür ihlal aylarca süren çalışmayı bozabilir ve görünür bir düzeltme onu yeniden inşa edebilir.

**12. Programı içindeki insanlarla gözden geçirin.** Her çeyrek, takımlara ölçümlerin neye yardım ettiğini, neyi çarpıttığını ve neyi bırakacaklarını sorun. Sınavı geçemeyen ölçümleri emekliye ayırın. Gözden geçirmenin sonuçlarını paylaşın. Programı iyileştirmeye yönelik sürekli ve görünür bir taahhüt, programın takımlara hizmet etmek için var olduğunun en güçlü sinyalidir (bkz. Konu 9.5 “Sürekli iyileştirme metrikleri”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Kullanım tüzüğü kapsamı | Tüzükleri formalite olarak imzalamak; liderlerin onları göz ardı etmesi | Tüzüğün uygulamada kullanımını kontrol edin; bireysel kullanım olaylarını raporlayın; tüzükleri takımlarla gözden geçirin |
| Takım sahipliği payı | Takımların okumadıkları tanımları onaylaması; programın imza için bitmiş tanımlar sunması | Tanımların nasıl geliştirildiğini örnekleyin; takımların istediği ve yapılan değişiklikleri izleyin |
| Açıklık sinyali | Takımlara daha fazla veya daha az sorun bildirmesi için baskı yapmak; kategorileri yeniden adlandırmak | Önem derecesiyle ve olay sonrası incelemelerin içeriğiyle birlikte okuyun; müşterinin bildirdiği sorunlarla karşılaştırın |
| İtiraz yanıt süresi | İtirazları görünür bir çözüm olmadan kapatmak; itirazı caydırmak | Görünür bir yanıt şart koşun; itiraz edenleri anketleyin; tekrarlanan itirazları izleyin |
| Ölçümün algılanan güvenliği (anket) | Yanıtlayanlara telkinde bulunmak; mutsuz takımları gizleyen düşük yanıt oranları | Anonimlik ve asgari grup büyüklüğü; yanıt oranlarını gösterin; takımlarla doğrudan konuşun |
| Bireysel kullanım olayları | Bildirmemek; olayları başka bir şey olarak yeniden sınıflandırmak; bildirenleri suçlamak | Kolay anonim bildirim; bildirenlerin korunması; değerlendirmelerin ve panoların bireysel veri açısından gözden geçirilmesi |
| Gönüllü benimseme | Davet gibi sunulan baskı; incelemeden kaçınmak için katılan takımları saymak | Takımlara neden katıldıklarını sorun; uygulamada kullanımı kontrol edin; dönemi zorunluluktan uzak tutun |

Sağlıklı bir okuma, takımların gerçekten başvurduğu tüzükleri, takımların şekillendirmeye yardım ettiği ölçümleri, sabit veya artan sorun bildirimlerini, hızla yanıtlanan itirazları, insanların verinin kendilerine yardım ettiğine inandığını gösteren bir anketi, açıkça ele alınan birkaç bildirilmiş ihlali ve katılmak istedikleri için katılan takımları gösterir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Tüm takımlara aynı anda zorunlu devreye alma | Hızlı ve tutarlı | İnanç olmadan uyum; manipülasyon ve kırgınlık |
| Gönüllü pilotlar, sonra yayma | Hikâyeler ve güven inşa eder | Daha yavaş; eşitsiz kapsam |
| Takımlar tüm ölçümlerini seçer | Yüksek sahiplenme | Karşılaştırması zor; kapsamda boşluklar |
| Ortak çekirdek artı takım seçimi | Karşılaştırma ve sahiplenme dengesi | Yönetişim gerektirir |
| Takımlar arasında açık panolar | Şeffaflık; ortak öğrenme | Karşılaştırma ve sıralama riski |
| Yalnızca takıma özel görünümler, toplulaştırmalar paylaşılır | Dürüst yansıtma için güvenli alan | Liderler kör hissedebilir |
| Yazılı tüzük | Açık sözler; itiraz için temel | Göz ardı edilirse değersiz |
| Gayriresmî güvenceler | Hızlı | Unutulur; başvuru yolu yok |

Düzyazıyla yanıt şudur: istekli takımlarla başlayın, onlara sahiplik verin, toplulaştırmaları takımın onayı ve bağlamıyla yukarı paylaşın ve sözleri, liderlerin bağlı tutulduğu bir tüzükle destekleyin.

## Takımınızla tartışılacak sorular

**1. Bu sayılarla ne olacağına inanıyoruz ve geçmişte ne olduğunu gördük?**
İyi ve kötü kullanılmış ölçümlere dair dürüst hikâyeleri davet edin. Kolaylaştırıcı korkuları tartışmadan kaydetmelidir. En çok fark yaratacak sözlerin hangileri olduğu konusunda anlaşın.

**2. Verilerimizin asla ne için kullanılmayacağını söyleyen bir tüzüğe ne yazardık?**
Birlikte sade sözcüklerle taslak hazırlayın. Endişe buysa bireysel performans değerlendirmelerini, sıralamaları ve işten çıkarmaları ekleyin. İmzalaması gereken liderlere götürün.

**3. Önerilen ölçümlerden hangilerini seçerdik, hangilerini bırakırdık?**
Her kişinin özel olarak oy vermesine ve karşılaştırmasına izin verin. Bazılarının neden tehdit edici göründüğünü tartışın. Bir çeyrek boyunca denenecek kısa bir küme üzerinde anlaşın.

**4. İnsanların sorunları saklamaya başladığını nasıl anlardık?**
İşaretleri listeleyin: daha az bildirim, yumuşatılmış dil, kaçınılan iş. Kimin izleyeceği ve bunu suçlamadan nasıl gündeme getireceğimiz konusunda anlaşın.

**5. Takımımızın sayılarını kim, hangi biçimde ve ne zaman görmeli?**
Yalnızca takıma özel, liderlik toplulaştırmaları ve takımlar arası karşılaştırmayı tartışın. Neyin paylaşılacağına ve kimin sunacağına karar verin. Kuralı yazın.

**6. Hakkımızdaki bir sayı yanlışsa nasıl düzelttireceğiz?**
Fark etmekten düzeltmeye giden yolu izleyin. Gecikmeleri ve kimin karar verdiğini belirleyin. Basit bir itiraz yolu ve süre beklentisi üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Takımlar ölçülme riskini taşır ve sayıların ne anlama geldiğine dair bilgiyi elinde tutar. Ölçümlerin seçimine ve tanımlanmasına katılmalı, veriyi kendi gözden geçirmelerinde kullanmalı ve bir sayı yanılttığında sesini yükseltmelidir. Veriyi önce görürlerse ve ölçüm engelleri kaldırmaya yardım ederse yararlanırlar.

### Hizmet ve operasyon takımları

Operasyon takımları çoğu zaman en zengin veriyi ve en ağır nöbet ve olay yüklerini taşır. Sessizliği ödüllendiren veya yükseltmeyi cezalandıran ölçümlere karşı temkinli olmalı, olayların ve ramak kala olayların bildirilmesini korumalı ve nöbet verisinin insanları sıralamak için kullanılmadığını izlemelidirler (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”).

### Liderlik ve yönetişim

Liderler kullanım kültürünü belirler. Tüzüğü imzalamalı ve izlemeli, takım ve hizmet görünümleri istemeli, ihlallere açıkça yanıt vermeli ve sıralama istemekten kaçınmalıdır. Programı, sağladığı iyileştirmeyle ve koruduğu açıklıkla yargılamalıdırlar; pano sayısıyla değil.

### Müşteriler ve kullanıcılar

Müşteriler ve kullanıcılar, takımlar sorunları dürüstçe bildirdiğinde ve nedenleri düzelttiğinde yarar görür. Ayrıca veri toplamanın konusu da olabilirler. Kendileri hakkında neyin toplandığı ve nasıl kullanıldığı konusunda açıklık hak ederler ve hangi ölçümlerin kendilerine değer gösterdiğine karar vermede ortak olabilirler (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Bir sağlık hizmetleri sağlayıcısının teknoloji bölümü, 15 teslimat ve destek takımı genelinde metrikleri devreye alır. Üç yıl önceki bir girişim, takımların kapattığı bilet sayısına göre bir sıralamasını yayımlamış ve düşük değerli biletlerin kapatılmasında bir sıçrama ve bildirilen olaylarda bir düşüşle sonuçlanmıştı. Aşağıdaki rakamlar açıklayıcı örnektir.

Yeni hizmet yönetimi başkanı, altı takım liderine neyi hatırladıklarını sorarak başlar. Sıralamayı ve sonuçlarını anlatırlar. Onlarla birlikte bir tüzük taslağı hazırlar: ölçümler takımları ve hizmetleri betimler, asla bireyleri değil; bireysel görünümler araçlarda kapatılmıştır; veri asla bireysel değerlendirmelerde kullanılmaz; takımlar önce verilerini görür; herhangi bir kişi bir sayıya itiraz edebilir ve on iş günü içinde yanıt alır; ilgisiz bir ihlal programa bildirilir ve açıkça gözden geçirilir. Teknoloji direktörü imzalar ve tüzük program sayfasında yayımlanır.

Üç takım pilot için gönüllü olur. Her biri bir menüden dört ölçüm seçer ve iki tanımı yeniden yazar. Bir takım “çözüm süresi”nin bir müşteriyi beklemekle geçen süreyi dışarıda bırakmasında, bir başkası ise değişiklik başarısızlığının yalnızca geri almayla değil, kullanıcı etkisiyle tanımlanmasında ısrar eder. Pilot ilk yararını üçüncü haftada gösterir: bir takım işinin bir onay kuyruğunda beklediğini görür ve kimsenin gerekçelendiremediği bir adımı kaldırır. Takım hikâyesini bir bölüm toplantısında sunar. Yedi takım daha katılmak ister. Gönüllü benimseme iki çeyrek içinde 15 takımdan 10'una ulaşır ve kalan beş takım sonradan, zorunluluk olmadan katılır.

Program korkuyu izler. Takım başına ramak kala bildirimleri ilk çeyrekte artar; başkan bunu bildirmeye daha fazla istek olarak okur ve bir örneklemi okuyarak doğrular. Asgari grup büyüklüğü olan bir takım anketi, yanıtlayanların “çalışmamıza dair veri bize yardım etmek için kullanılıyor” ifadesine ikinci çeyreğin başında yüzde 58'inin, dördüncü çeyreğin başında yüzde 76'sının katıldığını gösterir. İtiraz yanıt süresinin medyanı dört iş günüdür. Sonra bir direktör, bir bütçe gerekçesi hazırlarken takımları dağıtım sayısına göre sıralayan bir tablo ister. Program yöneticisi ona bunun tüzüğün dışında olduğunu söyler, takım yorumlarıyla birlikte hizmete göre eğilimlerin bir görünümünü sunar ve talebi, sonucuyla birlikte bildirilen bir bireysel kullanım ramak kala olayı olarak kaydeder. Direktör kabul eder. İki çeyrek sonra bireysel kullanım olayları birdir; bildirilmiş, ele alınmış ve adsız olarak yayımlanmıştır.

## Sektör mercekleri

**Girişim (startup).** Takım küçüktür ve güven kişiseldir. Sayıların ne için olduğunu yüksek sesle söyleyin, tüm takımın izlenecek birkaç ölçümü seçmesine izin verin ve bunları herhangi bir bireysel sohbetin dışında tutun. Risk, bir kurucunun bir sayı hakkındaki geçici bir yorumunun davranışı bir gecede yeniden şekillendirmesidir. Sözü, birkaç satırda bile olsa yazın.

**Küçük işletme.** Personel, sayıların iş kesintisiyle ilgili olduğundan şüphelenebilir. Neden ölçtüğünüz, neye bakacağınız ve neye bakmayacağınız konusunda açıkça konuşun. İnsanları ölçümleri seçmeye dahil edin, bulduklarınızı paylaşın ve erken bir aşamada onlara yardım eden bir iyileştirmeyi gösterin.

**Büyük kurum.** Ölçek güveni zorlaştırır; çünkü liderlerin çoğu takımlardan uzaktır. Üst düzeyde imzalanmış bir tüzük, küçük bir ortak çekirdeğe sahip takım sahipliğindeki ölçümler, bireysel görünümleri engelleyen araç yapılandırması ve ihlalleri bildirmek için bağımsız bir yol kullanın. Pilot yapın, öğrenin ve akranlar aracılığıyla yayın; tek bir küresel devreye alma tarihinden kaçının.

**Devlet ve kamu sektörü.** İstihdam kuralları, sendikalar ve kamusal inceleme kısıtlamalar ve beklentiler ekler. Personel temsilcilerine erken danışın, tüzüğü onlarla kararlaştırın ve iyileştirme verisi ile herhangi bir resmî performans süreci arasındaki çizgi konusunda net olun. Kamuya raporlama gereksinimleri, iç iyileştirme ölçümlerinden ayrı tutulmalıdır (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler çoğunlukla insanların zamanıdır: tüzüğü hazırlamak, pilotları yürütmek, takımlarla çalıştaylar, itirazları ele almak, anketleri yürütmek ve liderlerin kurallara bağlı kalmak için harcadığı zaman. Bir fırsat maliyeti de vardır; çünkü özenli bir devreye alma bir zorunluluktan daha yavaştır. Bu maliyetler, verinin çarpıtıldığı, güvenin harcandığı ve programın terk edildiği başarısız bir devreye almanın maliyetinin yanında küçüktür.

Getiriler, gerçeği yansıtan veri, sorunların dürüstçe bildirilmesi ve iyileştirmek için ölçümleri kullanan takımlardır. Bunlar sorunların daha erken tespiti, sayılar üzerine daha az anlaşmazlık ve zorlama olmadan daha yüksek benimseme olarak ortaya çıkar. İş gerekçesini kendi geçmişinizden kurun: ölçümler daha önce dayatıldığında ne oldu, bu sefer kaç takım gönüllü olarak benimsedi ve sorun bildirimi nasıl değişti. Katılım veya güven üzerine yayımlanmış rakamları, izlenebilir bir kaynak ve sizin ortamınızla ilgisi olmadan aktarmaktan kaçının (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Sürpriz sıralama tablosu.** Sıralamalar bir liderlik slaydında belirir. Güven biter. Sıralamaları programın dışında tutun.
- **Performans değerlendirmelerinde ölçümler.** Bir anma bile her yerde davranışı değiştirir. Yazılı olarak dışarıda tutun.
- **Önce zorunlu kıl, sonra açıkla.** İnanç olmadan uyum. Gönüllülerle pilot yapın ve nedenleri açıklayın.
- **Kimsenin uygulamadığı bir tüzük.** Eylemsiz sözler hiç olmamasından daha kötüdür. Liderleri ona bağlı tutun ve sonuçları yayımlayın.
- **Varsayılan olarak gözetim.** Araçlar yapabildikleri için bireysel etkinliği açığa çıkarır. Bu özellikleri kapatın.
- **İtirazlara savunmacı yanıtlar.** İnsanlar hataları göstermeyi bırakır. Hızlı ve saygılı yanıt verin.
- **Çok sayıda ölçüme acele etmek.** Aşırı yük ve kafa karışıklığı. Birkaçıyla başlayın ve büyüyün.
- **Sessizliği başarı olarak okumak.** Daha az bildirim korku anlamına gelebilir. Açıklık sinyallerini izleyin ve insanlarla konuşun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Sözler ve kullanım | Yazılı değil; kullanım yöneticiye göre değişir | Sözlü güvenceler; bazı takım anlaşmaları | Liderlerce imzalanmış yazılı tüzük; bireysel görünümler devre dışı | İhlaller bildirilir ve gözden geçirilir; tüzük kullanımı denetlenir | Tüzük personel ve ortaklarla birlikte sahiplenilir; deneyimden gözden geçirilir |
| Sahiplik ve şeffaflık | Dayatılan ölçümler | Bazı takımlara danışılır | Takımlar ölçümleri seçer ve tanımlar, veriyi önce görür | Sahiplik payı ve itiraz yanıt süresi yönetilir | Takımlar, tedarikçiler ve müşteriler anlaşmayla görünümleri paylaşır; sahiplik rutindir |
| Güven ve açıklık | Korku veya kayıtsızlık | Gönüllülerle pilot | Güvenlik anketi ve ramak kala eğilimleri takımlarla gözden geçirilir | Sinyaller planlı eylemi tetikler; gönüllü benimseme izlenir | Açıklık rutindir; programın iyileştirilmesi herkesten gelir |

## Kontrol listesi

- [ ] Yazılı bir tüzük verinin ne için olduğunu ve asla ne için olmadığını belirtir ve liderler imzalamıştır.
- [ ] Bireysel düzeydeki görünümler ve sıralamalar araçlarda kapatılmıştır veya politikayla kısıtlanmıştır.
- [ ] Takımlar ölçümlerini seçer veya onaylar ve verilerini başkalarından önce görür.
- [ ] Daha geniş bir devreye almadan önce gönüllü takımlarla bir pilot yapılır.
- [ ] Verinin ilk kullanımı takıma görünür bir yardım sağlar.
- [ ] Belirtilmiş bir yanıt süresi ve bir günlükle bir itiraz yolu vardır.
- [ ] Tüzüğün ihlalleri için bir bildirim yolu vardır ve sonuçlar adsız olarak yayımlanır.
- [ ] Takım düzeyindeki güvenlik ve açıklık sinyalleri izlenir ve takımlarla tartışılır.
- [ ] Manipülasyon yolları ve koruma önlemleri takımlarla açıkça paylaşılır.
- [ ] Program her çeyrek takımlarla gözden geçirilir ve ölçümler yardımcı olmayı bıraktığında emekliye ayrılır.

## Yapay zekâ istemleri

**Bir metrik tüzüğü taslağı hazırlayın.**

```text
[kurum türü] için metrik programının tek sayfalık bir tüzük taslağını hazırlayın.
Verinin ne için olduğunu, asla ne için kullanılmayacağını (bireysel sıralamalar ve
performans değerlendirmeleri dahil), kimin neyi görebildiğini, verinin ne kadar süre
saklandığını, bir kişinin bir sayıya nasıl itiraz edebileceğini, ihlallerin nasıl
bildirildiğini ve kimin imzaladığını belirtsin. Sade sözcükler kullanın. Hukuki
tavsiye vermeyin. Varsayımlarınızı ve insan kaynakları ile hukuk uzmanlarıyla
doğrulanacak noktaları listeleyin.
```

**Bir pilot planlayın.**

```text
[bağlam] içinde iki ila üç gönüllü takımla bir metrik programının altı haftalık
pilotunu planlayın. Takımların nasıl davet edileceğini, hangi ölçümlerin sunulacağını,
kuralların nasıl belirleneceğini, verinin hangi erken yardımı sağlaması gerektiğini,
sonunda takımlara ne sorulacağını ve daha geniş devreye alma konusunda nasıl karar
verileceğini ekleyin. Sonucu varsaymayın. Varsayımlarınızı ve risklerinizi listeleyin.
```

**Bir ölçümü korku açısından gözden geçirin.**

```text
Şu, önerilen bir ölçüm ve nasıl kullanılacağıdır: [yapıştırın]. Şüpheci bir takım
üyesi gibi davranın. Nasıl bir tehdit olarak algılanabileceğini, insanların iyi
görünmek için davranışlarını nasıl değiştirebileceğini ve hangi dürüst bildirimi
caydırabileceğini açıklayın. Riski düşürecek tanım, görüntüleme veya kullanım
kurallarında değişiklikler önerin. Varsayımlarınızı listeleyin.
```

**Bir itirazı yanıtlayın.**

```text
Bir takım şu sayıya itiraz etti: [kişisel veri olmadan açıklayın]. Endişeyi kabul
eden, sayının nasıl hesaplandığını açıklayan, nasıl kontrol edileceğini öneren,
yanıt için bir tarih belirleyen ve sayı yanlışsa neyin değişeceğini söyleyen saygılı
bir yanıt taslağı hazırlayın. Savunmacı olmayın. Henüz bilmediklerinizi listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): önerilen bir ölçüm için takımlarla açıkça paylaşılacak manipülasyon yolunu ve koruma önlemini bulmak amacıyla kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir devreye alma planının ölçümleri takım ve hizmet düzeyinde tuttuğunu ve bireyleri asla sıralamadığını denetlemek amacıyla kullanın.

## Temel çıkarımlar

- Güven asıl varlıktır. Verinin ne için olduğunu ve asla ne için olmadığını yazın ve sözü tutun.
- Takımları, hizmetleri ve sistemleri ölçün ve bireyleri açığa çıkaran görünümleri kapatın.
- Takımların seçmesine, tanımlamasına, verilerini önce görmesine ve anlattığı hikâyeye sahip çıkmasına izin verin.
- Gönüllülerle pilot yapın, erken görünür yardım sunun ve akranlar aracılığıyla yayın.
- İtirazlara hızla yanıt verin ve korku işaretlerini program hakkında bilgi olarak ele alın.
- Liderleri tüzüğe bağlı tutun ve programı içindeki insanlarla gözden geçirin.

## Kaynaklar ve ileri okuma

1. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 1999.
2. Campbell, D., "Assessing the Impact of Planned Social Change," *Evaluation and Program Planning*, 1979.
3. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. Kotter, J., *Leading Change*, Harvard Business School Press, 1996.
5. Westrum, R., "A Typology of Organisational Cultures," *BMJ Quality and Safety*, 2004.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
12. Wikipedia, [Trust (social science)](https://en.wikipedia.org/wiki/Trust_(social_science)).
13. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
14. Wikipedia, [Technology adoption life cycle](https://en.wikipedia.org/wiki/Technology_adoption_life_cycle).
15. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
16. Wikipedia, [Information radiator](https://en.wikipedia.org/wiki/Information_radiator).
