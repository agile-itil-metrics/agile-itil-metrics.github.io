# Yazılım varlığı ve lisans metrikleri

**Yazılım satın alınır, abone olunur, geliştirilir ve ödünç alınır; her yol yükümlülükler ve maliyetler doğurur. Bu yüzden hangi haklara sahip olduğunuzu, gerçekte neyi kullandığınızı ve neye bağımlı olduğunuzu ölçün ve takımların sonradan sürprizler yaratmadan araç seçmesini kolaylaştırın.**

## Genel bakış ve motivasyon

Yazılım, en hızlı değişen ve görülmesi en zor varlık sınıfıdır. Bir geliştirici dakikalar içinde bir kütüphane ekler. Bir takım, şirket kartıyla bir hizmet olarak yazılım (SaaS) aracına kaydolur. Bir tedarikçi, yenilemeler arasında fiyatlandırma modelini değiştirir. Bir sözleşme 500 kullanıcıya izin verir, 700 kişinin hesabı vardır. [Yazılım varlık yönetimi](https://en.wikipedia.org/wiki/Software_asset_management) (SAM), bir kurum içinde yazılımın satın alınmasını, dağıtımını, bakımını, kullanımını ve imhasını yönetme ve iyileştirme iş pratiğidir. Daha geniş BT varlık yönetimi pratiğinin içinde yer alır (bkz. Konu 7.1 “BT varlık yönetimi metrikleri”) ve onun kayıt, sahip ve yaşam döngüsü disiplinini paylaşır.

Sürekli teslimat ile yazılım varlık yönetimi, hız konusunda farklı yönlere çeker. Sürekli teslim eden takımlar araçları hızla seçmek ve benimsemek zorundadır ve yüzlerce açık kaynak bileşen üzerine inşa ederler. Yazılım varlık yönetimi ise neyin hangi koşullarla, hangi maliyetle ve hangi riskle kullanıldığını bilmek ister. İkisi de haklıdır. Çıkış yolu; takımlar, satın alma, hukuk, güvenlik ve finans arasındaki sürekli iş birliğidir: onaylı yolu hızlı yapın, onaylı araçlar kataloğunu bulunması kolay kılın ve denetimleri otomatik hâle getirin. Takımları uzun bir onay süreciyle yavaşlatmak, herkesin istediği görünürlüğün tam tersi olan [gölge BT](https://en.wikipedia.org/wiki/Shadow_IT) üretir.

Dört tür yazılım önemlidir ve metrikler bunlar arasında farklılaşır.

- **Lisanslı yazılım**: aygıtlara ya da sunuculara kurulan ve kimin, kaç kişinin ve hangi koşullarda kullanabileceğini söyleyen bir [yazılım lisansıyla](https://en.wikipedia.org/wiki/Software_license) yönetilen yazılım. Haklar kullanıcı, aygıt, çekirdek ya da site başına olabilir ve birim nasıl sayacağınızı belirler.
- **Hizmet olarak yazılım.** [Hizmet olarak yazılım](https://en.wikipedia.org/wiki/Software_as_a_service) (SaaS), bir ağ üzerinden erişilir ve çoğunlukla koltuk ya da kullanım başına abonelikle ödenir. Benimsemesi kolay, unutması kolaydır. Çakışan araçlar ve kullanılmayan koltuklar birikir.
- **Açık kaynak bileşenler.** [Açık kaynak yazılım](https://en.wikipedia.org/wiki/Open-source_software), koşullarla birlikte geniş haklar tanıyan lisanslar altında sunulur. [Copyleft](https://en.wikipedia.org/wiki/Copyleft) olarak adlandırılan bazı lisanslar, türev çalışmaların aynı koşullarla paylaşılmasını şart koşar. Uyum, bir bileşenin nasıl kullanıldığına ve dağıtıldığına bağlıdır ve bir lisansın yorumu hukuki bir sorudur.
- **Geliştirdiğiniz yazılım.** Kendi kodunuz bir varlıktır ve birçok bileşene bağımlıdır. [Yazılım malzeme listesi](https://en.wikipedia.org/wiki/Software_bill_of_materials) (SBOM), bir yazılım parçasındaki bileşenlerin listesidir. Bir zafiyet ya da lisans sorunu ortaya çıktığında hizmetlerinizden hangilerinin belirli bir kütüphaneyi kullandığını yanıtlamanıza yardımcı olur.

Yazılım varlık metrikleri olağan çarpıtmaya açıktır. Envanter eksik olduğu için lisans konumu sağlıklı görünebilir. Sözleşmeler incelemeden önce kısaltıldığı için atıl lisans (shelfware) maliyeti düşük görünebilir. [Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi geçerlidir; bu yüzden buradaki her ölçüm bağımsız bir denetimle eşlenir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Hukuk konusunda bir uyarı: lisans koşulları ve denetim hakları hukuki konulardır. Bu konu ölçüm pratiğini betimler. Hiçbir lisansı yorumlamaz ve durumunuz ile yargı alanınız için nitelikli hukuk danışmanlığının yerini tutmaz.

## Temel ilkeler

- **Hakkı kullanımla karşılaştırarak ölçün.** Neyi kullanabileceğinizi ve neyi gerçekten kullandığınızı bilmek temel karşılaştırmadır.
- **Lisansın kullandığı birimle sayın.** Kullanıcılar, aygıtlar, çekirdekler ve abonelikler farklıdır ve bunları karıştırmak yanıtı gizler.
- **Onaylı yolu hızlı yol yapın.** Görünür bir katalog ve hızlı onay, gölge benimsemeyi azaltır.
- **Ürünlerin yanı sıra bileşenleri de dahil edin.** Açık kaynak kütüphaneler ve lisansları envanterin parçasıdır.
- **Yenilemeden önce gözden geçirin.** İsrafı kesmenin en iyi zamanı sözleşme tarihinden öncedir.
- **Hukuku sürecin içinde tutun.** Yorum, bunu yapmaya nitelikli kişilere aittir.
- **Tabloyu takımlarla paylaşın.** Kendi kullanımını ve maliyetini gören takımlar daha iyi seçimler yapar.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL pratiği | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Etkin lisans konumu | Ürün başına, lisansın kendi sayım biriminde, sahip olunan hakların bulunan kullanımla karşılaştırılması | sahip olunan haklar eksi bulunan dağıtımlar ya da kullanıcılar, ürün başına | birim (fazla pozitif, açık negatif) | Hak kayıtları, keşif aracı, kimlik sistemi | BT varlık yönetimi; tedarikçi yönetimi | Takımlar için görünür katalog ve kullanım verileri | Kilit ürünler için aylık; diğerleri için üç aylık |
| Lisans kullanım oranı | Ödenmiş hakların aktif kullanımda olanlarının payı | son 90 günde etkinliği olan haklar / ödenmiş haklar | yüzde | Tedarikçi kullanım raporları, kimlik günlükleri, hak kayıtları | BT varlık yönetimi; finansal yönetim | Aracın değeri üzerine retrospektif | Aylık |
| Atıl lisans (shelfware) maliyeti | Ödenmiş ve kullanılmayan hakların yıllık maliyeti | (kullanılmayan haklar çarpı birim maliyet) toplamı | para birimi/yıl | Hak kayıtları, kullanım verileri, faturalar | BT varlık yönetimi; finansal yönetim | Araç zincirinde israfın azaltılması | Üç aylık |
| Onaysız uygulama sayısı | Onaylı katalogda olmayan, kullanımdaki yazılım uygulamalarının sayısı | harcama verilerinde, çoklu oturum açma (SSO) günlüklerinde ya da ağ verilerinde görülen ve katalogda olmayan uygulamalar | sayı | Harcama raporları, kimlik sağlayıcı, ağ ve uç nokta verileri | BT varlık yönetimi; bilgi güvenliği yönetimi | Takımların görünür destekle araç seçmesi | Aylık |
| Yenileme hazırlığı | Bildirim tarihinden önce kullanım incelemesi yapılan yenilemelerin payı | bildirim tarihinden en az 90 gün önce tamamlanmış kullanım incelemesi olan yenilemeler / dönemde vadesi gelen yenilemeler | yüzde | Sözleşme sicili ve inceleme kayıtları | Tedarikçi yönetimi; finansal yönetim | Değişiklik için önceden planlama | Üç aylık |
| SBOM kapsamı | Güncel yazılım malzeme listesi olan üretim hizmetlerinin payı | son yayın döngüsünde SBOM üretilmiş hizmetler / üretim hizmetleri | yüzde | Derleme işlem hattı çıktıları, hizmet kataloğu | BT varlık yönetimi; bilgi güvenliği yönetimi | Bitti tanımı, bağımlılık görünürlüğünü içerir | Aylık |
| Açık kaynak inceleme kapsamı | Üretimdeki bileşenlerden lisans tanımı ve politika kararı kayıtlı olanların payı | lisansı ve kararı kayıtlı bileşenler / SBOM'larda bulunan bileşenler | yüzde | Yazılım bileşen analizi aracı, politika sicili | BT varlık yönetimi; tedarikçi yönetimi | İşlem hattında bağımlılık incelemesi | Aylık |

Sicilde her ürün için sayım birimini belirtin. Kullanım, oturum açma gibi tanımlı bir olaydan ve belirtilmiş bir pencereden itibaren etkinliği sayar. Servis hesaplarını ve test hesaplarını kullanıcı sayımlarından yalnızca lisans koşulları izin veriyorsa hariç tutun ve kuralı kaydedin. Maliyet, kararlaştırılan indirimler düşüldükten sonraki sözleşme birim fiyatıdır ve fiyatın tarihi kaydedilir.

## Öneriler

### Neye sahip olduğunuzu ve neyi kullandığınızı bilin

**1. Para tutan ya da yükümlülük taşıyan her ürün için bir hak kaydı tutun.** Kayıt; tedarikçiyi, ürünü, lisans türünü, sayım birimini, miktarı, süreyi, fiyatı, yenileme ve bildirim tarihlerini, kısıtlamaları ve sahibi içermelidir. Sözleşmeyi ya da ona bir bağlantıyı saklayın. Metrik bu kayda dayanır ve satın alma dışında alınan abonelikler için kayıt çoğu zaman yoktur.

**2. Kullanımı tedarikçinin birimiyle ölçün.** Koltuk lisansları adlandırılmış kullanıcıları, işlemci lisansları çekirdekleri sayar. Yanlış birime karşı kullanım hesabı sahte bir rahatlık verir. Koşulların karmaşık olduğu yerde satın alma ve hukuktan sayım kuralını bir kez sade dille tanımlamalarını isteyin ve kaydedin.

**3. Kullanım verisinin üç kaynağını birleştirin.** Tedarikçinin yönetim konsolu, kimlik sağlayıcınızın oturum açma günlükleri ve keşif araçlarınız, her biri bir parçayı görür. Birbirleriyle uyuşmadıklarında nedenini bulun. Atanmış ama hiç kullanılmamış bir koltuk geri alma adayıdır ve bir günlükte görünüp diğerinde görünmeyen bir kullanıcı veri sorunu olabilir.

**4. Kullanılmayan koltukları varsayılan olarak geri alın.** Bir kural koyun; örneğin 90 gün kullanılmayan erişimi kaldırmak ve talep üzerine geri vermek. Geri vermeyi kolaylaştırın ki kural insanları hayal kırıklığına uğratmasın. Geri alma bir proje değil sürekli bir pratiktir ve otomatik olduğunda ve duyurulduğunda en iyi sonucu verir.

### Doğru yolu kolay yol yapın

**5. Onaylı araçların bir kataloğunu yayımlayın.** Takımların neleri kullanabileceğini, maliyetini, kimin desteklediğini ve erişimin nasıl talep edileceğini listeleyin. Yeni bir araç önermek için güvenlik, gizlilik ve maliyet açısından kısa bir incelemeyle hızlı bir yol ekleyin. İnsanların mevcut aracı bulmasına yardım eden bir katalog, mükerrer satın almaları önler (bkz. Konu 6.3 “Hizmet benimsenmesi ve katalog metrikleri”).

**6. Yayılmayı cezalandırmadan izleyin.** Katalogda olmayan uygulamaları bulmak için harcama verilerini, çoklu oturum açma günlüklerini ve ağ verilerini kullanın. Her birini bir sohbet olarak ele alın: takım neye ihtiyaç duyuyor ve onaylı bir araç karşılayabilir mi? Onaysız uygulamaları sayın ve eğilimi izleyin; amaç yararlı olanları yönetim altına almaktır, ezmek değil.

**7. Takımlara kendi kullanımlarını ve maliyetlerini gösterin.** Takım bazında koltukların, kullanımın ve maliyetin aylık görünümü, takımların kendi aboneliklerini temizlemesine olanak verir. Görünürlük, polislikten daha iyi işler ve çevik pratiğin, ihtiyaç duyduğu bilgiye sahip kendi kendini örgütleyen takımlar tercihine saygı gösterir.

### Yenilemeleri planlayın ve bağımlılığı yönetin

**8. Her önemli yenilemeden önce kullanımı gözden geçirin.** Bildirim tarihinden 90 ila 120 gün önce, sahip, satın alma ve finansla bir inceleme belirleyin. Kullanımı, atıl lisans maliyetini, alternatifleri ve takımın geri bildirimini getirin. Yenileme hazırlığı, bu incelemeye zamanında ulaşan yenilemelerin payıdır. Kaçırılan bir bildirim tarihi, nedeni olan bir maliyettir.

**9. Tedarikçiye kilitlenmeye dikkat edin.** [Tedarikçiye kilitlenme](https://en.wikipedia.org/wiki/Vendor_lock-in), tedarikçi değiştirmeyi pahalı kılar. Önemli ürünler için çıkış yolunu kaydedin: veri dışa aktarım biçimleri, fesih konusunda sözleşme koşulları ve değiştirme emeği. Bağımlılıktan kaçınmak zorunda değilsiniz ama bedelini bilmelisiniz.

**10. Her yayında bir SBOM üretin.** Derleme araçları, işlem hattının bir parçası olarak otomatik biçimde SBOM üretebilir; böylece bilgi süregelen emek olmadan güncel kalır. Yayınla birlikte saklayın ve hangi hizmetlerin bir bileşeni kullandığını yanıtlayabilmeniz için aranabilir kılın. Bu hem lisanslamayı hem de güvenlik müdahalesini destekler.

**11. Açık kaynak lisanslarını işlem hattında gözden geçirin.** [Yazılım bileşen analizi](https://en.wikipedia.org/wiki/Software_composition_analysis) araçları bileşenleri ve lisanslarını belirler. Hukukla, hangi lisansların onaylı olduğu, hangilerinin inceleme gerektirdiği ve hangilerinin kullanımınız için izin verilmediği konusunda kısa bir politikada anlaşın ve işlem hattının istisnaları işaretlemesini sağlayın. Politika kararlarını bir sicilde tutun. Araç lisansları belirler, zor vakalara ise bunları yorumlamaya nitelikli bir kişi karar verir.

### Denetimlere sakin hazırlanın

**12. Kanıtı hazır tutun, telaşa kapılmayın.** Bir tedarikçinin ya da düzenleyicinin yaptığı [yazılım denetimi](https://en.wikipedia.org/wiki/Software_audit), kullanımınızın haklarınızla örtüştüğünü kanıtlamanızı ister. Hak kayıtları ve kullanım verileri her ay zaten mutabık kılınıyorsa, bir denetim rutin bir taleptir. Hukuku ve satın almayı erkenden işe katın, tek bir kanaldan yanıt verin ve onlarla gözden geçirmediğiniz sonuçları kendiliğinizden bildirmeyin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlanır | Eşlenmiş koruma metriği ya da pratiği |
| --- | --- | --- |
| Etkin lisans konumu | Elverişli bir birimde saymak; gölge dağıtımları keşfin dışında bırakmak | Lisansın kendi biriminde saymak; harcama ve kimlik verileriyle karşılaştırmak; sayım kuralının hukuki incelemesi |
| Lisans kullanım oranı | Etkinlik penceresini kısaltmak; botların ya da servis hesaplarının oturum açmalarını kullanım saymak | Sicilde sabit pencere; insan olmayan hesapları hariç tutmak; tedarikçi kullanım raporuyla karşılaştırmak |
| Atıl lisans (shelfware) maliyeti | Rakamı düşürmek için incelemeden hemen önce yeniden pazarlık yapmak ya da iptal etmek; kartlardaki abonelikleri yok saymak | Tüm harcama kaynaklarını dahil etmek; maliyeti bildirim penceresinin başında izlemek |
| Onaysız uygulama sayısı | Sayıyı azaltmak için her şeyi kataloğa onaylamak; kişisel hesaplar kullanarak kullanımı gizlemek | Katalog inceleme ölçütleri; harcama ve kimlik verilerine bakmak; takımlara neye ihtiyaç duyduklarını sormak |
| Yenileme hazırlığı | Göstermelik bir inceleme yapmak; bildirim tarihini daha geç belirlemek | Gerekli girdileri olan inceleme kontrol listesi; sözleşme tarihlerinin satın almada tutulması |
| SBOM kapsamı | Geçişli bağımlılıkları dışarıda bırakan SBOM'lar üretmek; yayımlanmayan derleme çıktısını saymak | Derinliği sicilde tanımlamak; bir SBOM'u dağıtılmış yapıtla rastgele denetlemek |
| Açık kaynak inceleme kapsamı | Bileşenleri karar olmadan incelenmiş işaretlemek; “bilinmeyen” lisansları kabul etmek | Lisansı bilinmeyen bileşenleri saymak; kararlardan bir örneği incelemek |

Sağlıklı bir okuma; bağımsız kanıtla örtüşen bir lisans konumu, tanım değiştiği için değil koltuklar geri alındığı için yükselen bir kullanım oranı, katalog iyileştikçe düşen bir onaysız uygulama sayısı ve inceleme eşliğinde gelen yenilemelerdir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Tüm araçların merkezî onayı | Güçlü denetim, tek görünüm | Yavaş; gölge BT'yi teşvik eder |
| Koruma önlemleri içinde takım seçimi | Hızlı; takım ihtiyaçlarına uyar | Daha fazla çeşitlilik; görünürlük ve inceleme gerektirir |
| Agresif koltuk geri alma | Maliyetten tasarruf sağlar | Geri verme yavaşsa kullanıcıları hayal kırıklığına uğratabilir |
| Cömert koltuk sağlama | Düşük sürtünme | İsraf birikir |
| Kurumsal sözleşmeler | Daha düşük birim maliyet, daha basit | Kilitlenme; gereksiz genişliğe ödeme |
| Kullandığın kadar öde | Maliyeti kullanıma uydurur | Öngörülemeyen faturalar |
| Otomatik lisans taraması | Tutarlı ve hızlı | Uç vakalarda insan yargısı gerektirir |
| Bileşenlerin elle incelenmesi | Dikkatli | Büyük bağımlılık ağaçları için ölçeklenmez |

Düz yazıyla yanıt şudur: takımlara net koruma önlemleri içinde seçim hakkı verin, denetimleri otomatikleştirin ve insan dikkatini büyük sözleşmelere ve zor lisans sorularına harcayın. Yeni araçlar için hızlı bir yol ve geri alınmış erişimi geri vermek için kolay bir yol tutun.

## Takımınızla tartışılacak sorular

**1. Bize en çok maliyet getiren üç ürün hangileri ve kaç kişinin kullandığını biliyor muyuz?**
En büyük sözleşmeleri ve her biri için sayım birimini listeleyin. Kullanım verileriyle karşılaştırın. Kolaylaştırıcı, birimini kimsenin bilmediği ya da kullanım verisinin bulunmadığı ürünleri aramalıdır. Bir sonraki yenilemeden önce birinin verisini toplamak üzerinde anlaşın.

**2. Burada yeni bir araç nasıl benimseniyor ve ne kadar sürüyor?**
Yakın tarihli bir örneği talepten erişime kadar izleyin. Kaç takımın yolu atladığını ve nedenini sorun. Yanıt, onaylı yolun hızlı olup olmadığını gösterir. Yola dair bir iyileştirme ve işe yarayıp yaramadığını öğrenmenin bir yolu üzerinde anlaşın.

**3. Bir tedarikçi gelecek ay lisans konumumuzu kanıtlamamızı isterse ne olur?**
Kimin yanıt vereceğini, hangi kayıtların bulunduğunu ve hangi boşlukların olduğunu gözden geçirin. Konuşma hukuki sonuçlara varmayı değil, yalnızca eksik kayıtları belirlemeyi amaçlamalıdır. Hukuk ve satın almadan sürece dahil olacak kişileri ve takımın onlara nasıl ulaşacağını adlandırın.

**4. Kullanılmayan koltukları nerede geri alıyoruz, nerede almıyoruz?**
En önemli ürünler için geri alma kurallarını gözden geçirin. Bir kural geri kalanlara uygulansa ne olacağını sorun. Erişimin geri verilmesini nasıl sorunsuz hâle getireceğinizi tartışın; kuralı kabul edilebilir kılan budur.

**5. Hizmetlerimizden hangilerinin belirli bir açık kaynak kütüphaneyi kullandığını söyleyebilir miyiz?**
İyi bilinen bir kütüphane seçin ve yanıtlamayı deneyin. Birkaç dakikadan uzun sürüyorsa nedenini tartışın. Hangi işlem hattı adımının bir SBOM üretebileceği ve sonuçların nerede saklanabileceği üzerinde anlaşın.

**6. Neye bağımlıyız ve ondan ayrılmak zor olurdu?**
Verisi ya da iş akışı bir tedarikçiye derinden bağlı ürünleri listeleyin. Ayrılmanın neye mal olacağını ve nasıl başlayacağınızı sorun. Kolaylaştırıcı yanıtı yenileme planlamasına girdi olarak kaydedebilir.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları her gün araç ve kütüphane seçer. Onaylı katalog işlerine yaradığında onu kullanmalı, eklemeleri kısa bir notla önermeli ve işlem hattının SBOM üretmesine ve lisans sorunlarını işaretlemesine izin vermelidir. Hızlı yanıtlara ihtiyaç duyarlar: yaygın lisanslar üzerine net bir politika ve alışılmadık olanları sormak için bir yol. Kendi koltuk ve harcama verisini gören bir takım, söylenmeden bunu temizler.

### Hizmet ve operasyon takımları

Operasyon takımları keşfi yürütür, erişimi yönetir ve yenilemeleri ve denetimleri karşılar. Kullanım verilerini haklarla mutabık kılmalı, kullanılmayan koltukları bir takvimle geri almalı ve sözleşme sicilini güncel tutmalıdır. Yönetilmeyen araçların destek yükünü de taşırlar; bu, yararlı olanları yönetim altına almak için iyi bir nedendir.

### Liderlik ve yönetişim

Liderler, takımları yavaşlatmadan plansız maliyetten ve hukuki maruziyetten kaçınmak ister. Otomasyonu finanse etmeli, lisans konumu iddialarının ardındaki bağımsız kanıtı istemeli ve hukuku ile satın almayı sürecin içinde tutmalıdır. Yönetişim, yenilemelerin zamanında incelenmesini ve açık kaynak politikasının işlem hattında uygulanmasını beklemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar, ihtiyaç duydukları aracın uzun beklemeden ilk seferde çalışmasını ister. Erişim uyarısız ortadan kalktığında ya da iki araç aynı işi yaptığında bunu fark ederler. Koltukların ne zaman geri alınacağı kendilerine söylenmeli, erişim istemek için kolay bir yol verilmeli ve bir araç değiştirilirken görüşleri alınmalıdır.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir haber kuruluşunun teknoloji grubu 900 çalışanı destekler ve yaklaşık 40 hizmetli bir yayıncılık platformu işletir. Aşağıdaki sayılar açıklayıcıdır.

Finans direktörü, yazılım maliyetlerinin neden kadro sayısından daha hızlı büyüdüğünü sorar. Yazılım varlık yöneticisi verileri toplar. Hak kayıtları 61 ürünü kapsar. Oturum açma günlükleri ve tedarikçi raporları, tasarım paketinin 220 koltuğu olduğunu ve son 90 günde 140 aktif kullanıcısı bulunduğunu, yani yüzde 64 kullanım oranı olduğunu gösterir; kullanılmayan koltukların maliyeti yaklaşık bir mühendisin maaşına denktir. Harcama verileri, katalogda olmayan 37 uygulama gösterir; bunların çoğu takımların satın aldığı iş birliği ve analitik araçlarıdır. En büyük yenilemelerden üçünün bildirim tarihleri, kullanım incelemesi yapılmadan geçmiştir.

Takım, ürün takımlarıyla dört değişiklik yapar. Bir koltuk geri alma kuralı, 90 gün kullanılmayan erişimi kaldırır ve geri vermek için tek tıklamalık bir talep sunar. Bir katalog sayfası onaylı araçları, maliyetlerini ve bir sahibi listeler ve yeni bir araç önermek için iki günlük bir yol sunar. Yenileme incelemeleri bildirim tarihinden 100 gün önce başlar; kullanım, alternatifler ve takım geri bildiriminin yer aldığı bir kontrol listesi vardır. Yayıncılık platformunun derleme işlem hattı artık her yayında bir SBOM üretir ve bir lisans taraması, lisansı bilinmeyen ya da kısıtlı bileşenleri hukukun incelemesi için işaretler.

Üç ay sonra tasarım paketinin kullanım oranı, 60 koltuk geri alındıktan sonra yüzde 86'dır ve bir yenileme daha düşük koltuk sayısına yeniden pazarlık edilmiştir. Takım kataloğa dört yararlı araç ekleyip mükerrerleri emekliye ayırdığı için onaysız uygulama sayısı 37'den 24'e düşer. SBOM kapsamı üretim hizmetlerinin yüzde 70'idir. Tarama, nadiren kullanılan bir hizmette lisansı bilinmeyen bir bileşen bulur; hukuk bunu inceler ve takım bileşeni değiştirir. Bir tedarikçi başka bir ürün için lisans doğrulaması ister ve denetim için üretilen kayıtlar bir düzeltmeyle birlikte örtüşür. Direktör yüzde 100 kullanım sözü ister; yönetici, sağlıklı bir rakamın yeni başlayanlar ve değişiklikler için bir miktar pay bıraktığını açıklar ve hedef olarak değil kılavuz olarak bir aralık önerir. Karar kaydedilir.

## Sektör mercekleri

**Girişim (startup).** Araçlar hızla seçilir ve kartla ödenir. Sahipler ve yenileme tarihleriyle tek sayfalık bir abonelik listesi tutun, üç ayda bir gözden geçirin ve ücretsiz katmanları bilinçli kullanın. Yazılım dağıtmadan ya da yatırım almadan önce açık kaynak lisanslarına dikkat edin; yatırımcılar sorabilir.

**Küçük işletme.** Birkaç ürün maliyetin çoğunu taşır. Koltuk sayılarını elle izleyin, yenilemeler için takvim hatırlatıcıları kurun ve tedarikçilerden kullanım raporları isteyin. Kendiliğinden yenilenen aboneliklere ve ayrılmış bir kişiye bağlı lisanslara dikkat edin.

**Büyük işletme.** Karmaşık sözleşmeler, birleşmeler ve çok sayıda iş birimi hak kayıtlarını zorlaştırır. Sayım birimlerini tutan bir veri modeline yatırım yapın, keşif ve kimlik beslemelerini otomatikleştirin ve hukuk ile satın almaya açık kaynak politikası için işlem hattında bir yer verin. Tedarikçi denetimleri bekleyin ve kanıtı önceden hazırlayın.

**Kamu sektörü.** Satın alma kuralları, kamu yararına lisanslama ve egemenlik gereksinimleri seçimleri şekillendirir. Satın alma gerekçelerini belgeleyin, sözleşme kayıtlarını gereken süre boyunca saklayın ve açık standartları ve çıkış yollarını gereksinim olarak değerlendirin. Yazılım harcamalarında şeffaflık yasal bir görev olabilir (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler; hak kaydını oluşturma zamanı, kullanım ve bileşen analizi araçları ve yenilemeleri inceleme emeğidir. Bazı araçlar zaten kimlik ya da uç nokta platformlarının bir parçası olarak lisanslıdır. Rutin maliyet, küçük bir ortam için ayda birkaç saat, büyük bir ortam için daha fazladır. Geri almayı ve SBOM üretimini otomatikleştirmek bunu düşürür.

Getiri, önlenen harcamadan ve önlenen sürprizden gelir. Kullanılmayan koltuklar, yenilemede doğrudan tasarruftur. Erken yenileme incelemeleri bilgiyle pazarlık etmenizi sağlar. Bağımlılıklarınızı bilmek, zafiyetlere ve lisans sorularına yanıtı kısaltır. İzini sürebileceğiniz olmayan sektör tasarruf yüzdelerini aktarmaktan kaçının. Kendi başlangıç değerinizi ölçün: kullanılmayan koltuklar çarpı birim maliyet, geç incelenen yenilemelerin sayısı, “hangi hizmetler bu bileşeni kullanıyor” sorusunu yanıtlama süresi ve geçmiş bir denetim bulgusunun maliyeti. Programın kendi maliyetini dahil edin ve önlenen hukuki maruziyeti yalnızca azalttığınız belirli bir riski tanımlayabildiğiniz yerde sayın. Maliyete dair sonraki konular finansal bakışı daha da ilerletir (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”).

## Anti-desenler ve tuzaklar

- **Yanlış birimle saymak.** Çekirdek başına satılan bir lisans için koltuk sayısı yanıltır. Birimi kaydedin.
- **Tedarikçi raporunu gerçeğin tamamı saymak.** Onu kendi günlüklerinizle birleştirin.
- **Araçları varsayılan olarak engellemek.** Takımlar engeli dolaşır. Onaylı yolu hızlı yapın.
- **Geri dönüş yolu olmadan geri almak.** Kullanıcılar güvenini kaybeder. Geri vermeyi kolay ve hızlı yapın.
- **Yenilemeleri bildirim tarihinden sonra incelemek.** Pazarlık gücü gitmiştir. Erken başlayın.
- **Lisansları taramak ve sonuçları yok saymak.** Politikası ve karar sahibi olmayan bir tarama gürültüdür.
- **Lisansları teslimat takımında yorumlamak.** Zor vakalar hukuka aittir.
- **SBOM'ları evrak işi saymak.** Kimse sorgulamazsa çürürler. Müdahale tatbikatlarında kullanın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Haklar ve kullanım | Sözleşmeler e-postada; kullanım verisi yok | Ana ürünler için kayıtlar; ara sıra kullanım denetimleri | Sayım birimli hak kayıtları; kimlik ve tedarikçi verilerinden kullanım | Lisans konumu ve kullanım aylık gözden geçirilir; koltuklar otomatik geri alınır | Kullanım ve harcama takımlarla paylaşılır; satın alma ve kullanım verileri tedarikçiler ile kurum arasında akar |
| Benimseme yolu | Takımlar beğendiklerini satın alır | Onaylı araçların listesi | Sahipleri ve inceleme ölçütleri olan hızlı katalog yolu | Onaysız uygulamalar izlenir ve içselleştirilir ya da emekliye ayrılır | Araç seçimi takımlarla birlikte tasarlanır; ortak hizmetler kurum genelinde yeniden kullanılır |
| Bileşenler ve bağımlılıklar | Bilinmiyor | Bazı hizmetler için elle bileşen listeleri | Yayında SBOM üretilir; lisans politikası hukukla kararlaştırılır | Kapsam izlenir; istisnalar incelenir; müdahale tatbikatları yapılır | SBOM'lar ve politika tedarikçiler ve müşterilerle paylaşılır; çıkış yolları planlanır |

## Kontrol listesi

- [ ] Ücretli ya da yükümlülük taşıyan her ürünün birim, miktar, süre ve sahip içeren bir hak kaydı vardır.
- [ ] Kullanım en az iki kaynaktan gelir ve kilit ürünler için aylık karşılaştırılır.
- [ ] Koltuk geri almanın bir kuralı, bir bildirimi ve kolay bir geri dönüş yolu vardır.
- [ ] Yeni bir araç önermek için hızlı bir yolu olan onaylı araç kataloğu mevcuttur.
- [ ] Harcama ve kimlik verileri onaysız uygulamalar için denetlenir.
- [ ] Yenileme incelemeleri bildirim tarihinden en az 90 gün önce başlar.
- [ ] Üretim hizmetlerinin her yayını için SBOM'lar üretilir ve saklanır.
- [ ] Hukukla kararlaştırılan bir lisans politikası istisnaları işlem hattında işaretler.
- [ ] Önemli ürünler için tedarikçi çıkış yolları kaydedilmiştir.
- [ ] Denetimler için hukuk ve satın alma irtibatları adlandırılmıştır ve takımlar tarafından bilinir.

## Yapay zekâ istemleri

**Bir hak kaydı şablonu oluşturun.**

```text
[kurum türü] için yazılım haklarını kaydetmeye yönelik bir şablon hazırla;
şu ürün türlerini kapsasın: [lisanslı, SaaS, açık kaynak, geliştirilen].
Alanlar sayım birimini, miktarı, süreyi, fiyatı, bildirim tarihini,
kısıtlamaları, sahibi, kullanım kaynağını ve çıkış notlarını içersin. Her
alanın mevcut kaynaklardan nasıl doldurulabileceğini öner: [liste]. Hiçbir
lisans koşulunu yorumlama. Varsayımlarını ve hukuk ya da satın alma girdisi
gerektiren alanları listele.
```

**Bir yenileme incelemesi hazırlayın.**

```text
[ürün] için bildirim tarihi [tarih] olan bir yenilememiz var. Olgular: hak
sahibi olunan [sayı] [birim], son 90 günde aktif kullanım [sayı], yıllık
maliyet [tutar] ve takım geri bildirimi [özet]. Sorulacak soruları,
seçenekleri (olduğu gibi yenilemek, azaltmak, değiştirmek, yeniden pazarlık
etmek) ve hâlâ ihtiyaç duyduğumuz bilgileri içeren tek sayfalık bir yenileme
incelemesi taslağı hazırla. Piyasa fiyatı uydurma. Varsayımlarını listele.
```

**Bir koltuk geri alma kuralı tasarlayın.**

```text
[kurum türü] içinde [sayı] kişinin kullandığı [ürün] için bir koltuk geri alma
politikası öner. Hareketsizlik penceresini, kullanıcılara bildirimi, erişimin
nasıl geri verileceğini, istisnaları (örneğin izin ya da mevsimlik kullanım) ve
kullanıcıları rahatsız etmeden yararlı olup olmadığının nasıl ölçüleceğini
ekle. Bağlam: [mevcut araçlar]. Varsayımlarını ve risklerini listele.
```

**Bir lisans tarama sonucunu önceliklendirin.**

```text
[hizmet] taramamız şu bileşenleri ve lisansları buldu: [lisans tanımlayıcılı
listeyi yapıştırın]. Politikamız: onaylı [liste], inceleme gerekli [liste],
izin verilmeyen [liste]. Bileşenleri bu üç gruba ayır, bilinmeyen ya da belirsiz
vakaları işaretle ve işaretlenen her öğe için hukuka ne sorulacağını öner.
Hukuki sonuç verme. Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir yazılım varlığı ya da lisans metriği için eşlenmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir yazılım metriği girdisinin sayım birimini, oyunlama yolunu ve koruma önlemini belirttiğini denetlemek için kullanın.

## Temel çıkarımlar

- Hakları, lisansın kendi biriminde sayılan gerçek kullanımla karşılaştırın.
- Onaylı yolu hızlı yol yapın; böylece takımların kullandıklarını saklamasına gerek kalmasın.
- Yenileme bildirim tarihlerinden önce kullanımı gözden geçirin ve kullanılmayan koltukları görünür bir kuralla geri alın.
- İşlem hattında SBOM üretin ve lisansları hukukla kararlaştırılan bir politikaya karşı işaretleyin.
- Hukuku ve satın almayı yorum ve denetimlerin içinde tutun.
- Takımlara kendi kullanımlarını ve maliyetlerini gösterin.

## Kaynaklar ve ileri okuma

1. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
2. ISO/IEC 19770-3, *Information technology: IT asset management: Part 3: Entitlement schema*, International Organization for Standardization.
3. National Telecommunications and Information Administration, *The Minimum Elements For a Software Bill of Materials (SBOM)*, United States Department of Commerce, 2021.
4. ISO/IEC 5962, *Information technology: SPDX Specification*, International Organization for Standardization, 2021.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Software asset management](https://en.wikipedia.org/wiki/Software_asset_management).
8. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
9. Wikipedia, [Software license](https://en.wikipedia.org/wiki/Software_license).
10. Wikipedia, [Software as a service](https://en.wikipedia.org/wiki/Software_as_a_service).
11. Wikipedia, [Open-source software](https://en.wikipedia.org/wiki/Open-source_software).
12. Wikipedia, [Copyleft](https://en.wikipedia.org/wiki/Copyleft).
13. Wikipedia, [Software bill of materials](https://en.wikipedia.org/wiki/Software_bill_of_materials).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
16. Wikipedia, [Software composition analysis](https://en.wikipedia.org/wiki/Software_composition_analysis).
17. Wikipedia, [Software audit](https://en.wikipedia.org/wiki/Software_audit).
