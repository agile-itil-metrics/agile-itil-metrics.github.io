# Yapay zekâ yönetişimi ve risk metrikleri

**Yapay zekâ kullanımı, canlı bir hizmetteki her değişiklikle aynı disipline ihtiyaç duyar: nerede olduğunu, kimin sahip olduğunu, ne kadar riskli olduğunu, nasıl sınandığını ve değiştirildiğini ve ters gittiğinde ne olacağını bilin; ayrıca insanların gerçekten kullanabileceği bir gözetim sağlayın.**

## Genel bakış ve motivasyon

Yapay zekâ bir kuruma birçok kapıdan girer. Bir takım bir kodlama asistanını benimser. Bir tedarikçi, zaten kullanımda olan bir ürüne üretken bir özellik ekler. Bir çalışan bir belgeyi herkese açık bir araca yapıştırır. Bir departman talepleri puanlayan bir model kurar. Her biri kendi yararları ve riskleri olan bir yapay zekâ kullanımıdır ve pek azı tek bir yerde görünürdür. Yönetişim, bu kullanımları bilinen, hesap verebilir ve yeterince güvenli kılan yapılar, politikalar ve uygulamalar bütünüdür. Risk metrikleri, yönetişimin çalışıp çalışmadığını söyler.

ITIL'in yapı taşları vardır: hizmet değer sisteminin yönetişimi, risk yönetimi, değişiklik yetkilendirme, bilgi güvenliği yönetimi, tedarikçi yönetimi ve sürekli iyileştirme. Çevik ve DevOps çalışma biçimleri, küçük, kontrollü, geri alınabilir değişiklik alışkanlığını ve hatta otomatik denetimler alışkanlığını sağlar. Yapay zekâ yönetişimi ayrı bir evrene ihtiyaç duymaz. Geleneksel yazılımdan farklı davranan şeylere uygulanan bu uygulamalara ihtiyaç duyar.

Yapay zekâda ne farklıdır?

- **Davranış istatistikseldir ve bir kod değişikliği olmadan değişebilir.** Bir model, bir tedarikçi güncellemesinden, girdilerindeki bir değişimden ya da istemdeki bir değişimden sonra farklı davranabilir. Üretimde gördüğü veri, sınandığı veriden sapabilir; makine öğrenmesinde bu olgu kayma (drift) olarak bilinir. Bir sistem sessizce bozulabilir.
- **Çıktılar tamamen öngörülebilir değildir.** Test her girdiyi kapsayamaz; bu yüzden değerlendirme kanıtla değil, örnekleme ve hedefli testlerle yapılır. Sistemler, yapıcılarının öngörmediği biçimlerde başarısız olabilir.
- **Zararlar dağınık ve eşitsiz olabilir.** [Algoritmik yanlılık](https://en.wikipedia.org/wiki/Algorithmic_bias), bazı gruplar için haksız sonuçlara yol açan sistematik hatadır. Veriden, tasarımdan ya da kullanımdan doğabilir ve genel doğruluk rakamlarında görünmeyebilir.
- **Yeni saldırı yüzeyleri ortaya çıkar.** [İstem enjeksiyonu (prompt injection)](https://en.wikipedia.org/wiki/Prompt_injection), girdi verilerine gizlenmiş talimatların bir dil modelini istenmeyen davranışa yönlendirdiği bir saldırıdır. Modeller, sahiplerinin amaçlamadığı verileri ifşa etmeye ya da eylemler yapmaya yönlendirilebilir.
- **Tedarikçilere bağımlılık derindir.** Birçok yapay zekâ yeteneği, nasıl inşa edildiğine ya da değiştirildiğine dair sınırlı görünürlükle dış sağlayıcılardan gelir. Tedarikçi ölçütleri daha da önemlidir (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).
- **Kurallar oluşmaktadır ve yere göre farklılaşır.** Yapay zekâya ilişkin yasalar, standartlar ve rehberlik hızla gelişmektedir. Avrupa Birliği'nin [Yapay Zekâ Yasası](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) risk tabanlı bir yaklaşım benimser ve yükümlülükler aşamalı olarak uygulanır; diğer yargı bölgeleri farklı yollar izlemektedir. Yapay zekâ yönetim sistemlerine ilişkin ISO/IEC 42001 ve NIST Yapay Zekâ Risk Yönetimi Çerçevesi gibi standartlar yapılar sunar. Bu konuda belirli kurallara dair ifadeler Ekim 2026 itibarıyla tarihlendirilmiştir ve yeniden denetlenmelidir; yükümlülüklerinize hukuki danışmanlık yön vermelidir. Daha geniş alan çeşitli biçimlerde [sorumlu yapay zekâ](https://en.wikipedia.org/wiki/Responsible_AI) ya da güvenilir yapay zekâ olarak tanımlanır; hukukun yapay zekâya nasıl yaklaşması gerektiği sorusu ise [yapay zekânın düzenlenmesinin](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence) konusudur.

Yönetişim iki zıt biçimde başarısız olabilir. Takımların ondan kaçınacağı kadar ağır olabilir ve yapay zekâ kullanımı [gölge BT](https://en.wikipedia.org/wiki/Shadow_IT) olarak yer altına iner. Ya da pratiği yansıtmayan bir politika ve kayıtla birlikte bir kâğıt alıştırması olabilir. Çevik hedefler orta yolu önerir: kuralları koymada paydaşların sürekli katılımı, düşük riskli kullanımlar için küçük ve hızlı onaylar, zararın mümkün olduğu yerde daha derin inceleme ve deneyim arttıkça kontrollerin sürekli iyileştirilmesi. Net sınırları olan ve bu sınırlar içinde yargılarını kullanmaları için güvenilen motive insanlar sorunları bildirir. Cezadan korkan insanlar bildirmez.

[Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi yönetişim ölçütlerine uygulanır: “kayıtlı yapay zekâ kullanımı yüzdesi” bir hedef olduğunda, kayıtlar kimsenin okumadığı girdilerle dolar ve gerçek kullanımlar gözden uzak kalır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Bu konu, Bölüm 8'deki risk, uyum ve güvenlik konularına ve bu bölümdeki önceki konulara dayanır.

## Temel ilkeler

- **Yapay zekânın nerede kullanıldığını bilin.** Ürünlere gömülü olanlar ve çalışanların kendi başlarına benimsedikleri dâhil, bir kullanımlar kaydı temeldir.
- **İncelemeyi riske uydurun.** Düşük riskli kullanımlar için hafif, sonuçları ağır olanlar için daha derin.
- **Model ve istem değişikliklerini değişiklik olarak ele alın.** Teste, riskle orantılı onaya ve geri alma yeteneğine ihtiyaç duyarlar.
- **Kullanımdan önce ve kullanım sırasında değerlendirin.** Gerçekçi senaryolarla test edin ve üretimde de test etmeyi sürdürün.
- **Anlamlı insan gözetimini koruyun.** Bir kişi anlayabilmeli, sorgulayabilmeli ve geçersiz kılabilmeli ve bunu yapacak zamana ve yetkiye sahip olmalıdır.
- **Olaylardan suçlamadan öğrenin.** Yapay zekâ başarısızlıkları yenidir ve bildirim, kurumun öğrenme yoludur.
- **Güvenli durumlar için onayı hızlı yapın.** Yavaş yönetişim kullanımı gözden uzağa iter.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Yapay zekâ kullanımı kayıt kapsamı | Bağımsız yollarla bulunan yapay zekâ kullanımlarından, bir sahibi ve risk sınıfıyla kayıtta yer alanların payı | sahibi ve risk sınıfı olan kayıtlı kullanımlar / bağımsız keşifle (satın alma, masraf, kimlik, ağ ve çalışan bildirimleri) bulunan kullanımlar | yüzde | Kayıt, satın alma ve masraf verileri, kimlik günlükleri, anketler | Yönetişim; BT varlık yönetimi; risk yönetimi | Görünür iş ve net sahiplik | Üç ayda bir |
| Risk değerlendirmesi güncelliği | Orta ve yüksek riskli kullanımlardan, gereken döngü içinde risk değerlendirmesi yapılmış olanların payı | döngü içinde değerlendirilen kullanımlar / orta ve yüksek riskli kullanımlar | yüzde | Risk değerlendirmeleri | Risk yönetimi; bilgi güvenliği yönetimi | Riskler üzerine düzenli yansıtma | Üç ayda bir |
| Değişiklik kontrolü kapsamı | Üretimdeki modellerde, istemlerde, araçlarda ve veri kaynaklarında yapılan değişikliklerden, gereken testlerle değişiklik kontrolünden geçenlerin payı | değişiklik kaydı, testleri ve riskle orantılı onayı olan değişiklikler / saptanan değişiklikler | yüzde | Sürüm geçmişi ve tedarikçi yayın notlarıyla karşılaştırılan değişiklik kayıtları | Değişiklik yetkilendirme; yayın ve dağıtım yönetimi | Küçük, kontrollü, geri alınabilir değişiklikler | Aylık |
| Değerlendirme güncelliği | Güncel bir değerlendirmesi (ilgili olduğunda doğruluk, güvenlik ve adalet) ve tolerans içinde sonuçları olan üretim kullanımlarının payı | döngü içinde değerlendirmesi olan ve sonuçları kabul edilebilir kullanımlar / kapsamdaki üretim kullanımları | yüzde | Değerlendirme kayıtları | Kalite güvencesi; risk yönetimi | Davranış için bitti tanımı | Üç ayda bir |
| İnsan gözetimi kanıt oranı | Kayda geçmiş, öz bakımından anlamlı bir insan incelemesi bulunan örneklenmiş sonuç doğuran çıktıların veya kararların payı | sonucu değiştirebilecek belgelenmiş incelemesi olan örneklenmiş öğeler / örneklenen öğeler | yüzde | Örneklenmiş karar kayıtları | Risk yönetimi; yönetişim | Yayından önce inceleme | Aylık |
| Yapay zekâ olay oranı ve sınırlama süresi | Yapay zekâyı içeren olayların (zararlı çıktı, veri ifşası, güvensiz eylem) kullanım başına sayısı ve bunları sınırlama süresi | çeyrekte üretim kullanımı başına olaylar; tespit edilmeden sınırlamaya kadar geçen saatlerin medyanı ve 85. yüzdeliği | olay; saat | Yapay zekâ etiketli olay kayıtları | Olay yönetimi; bilgi güvenliği yönetimi | Suçlamasız müdahale ve öğrenme | Üç ayda bir |
| Tedarikçi yapay zekâ durum tespiti güncelliği | Kritik hizmetlerde yapay zekâ özellikleri sunan tedarikçilerden, yapay zekâya özgü değerlendirmesi güncel olanların payı | güncel yapay zekâ değerlendirmesi olan tedarikçiler / yapay zekâ özellikleri olan kritik tedarikçiler | yüzde | Tedarikçi değerlendirmeleri | Tedarikçi yönetimi; risk yönetimi | Bağımlılıkların düzenli gözden geçirilmesi | Üç ayda bir |

Kayıtta “yapay zekâ kullanımı”nı geniş tanımlayın: kendi inşa ettiğiniz modeller, satın aldığınız hizmetler, ürünlerin içindeki özellikler ve çalışanların kullandığı araçlar. Risk sınıfları ve döngüleri politikada belirlenir. Kayıt kapsamı kaydın kendisine karşı değil, bağımsız keşfe karşı ölçülür. Değişiklik kontrolü kapsamı, değişiklikleri saptamanın bir yolunu gerektirir: sürüm kontrolü, tedarikçi bildirimleri, yapılandırma izleme. İnsan gözetimi kanıtı, bir düğmeye tıklanmasını değil, incelemenin sonucu değiştirebilmiş olmasını gerektirir. Olay oranları kullanımları ve sistemleri tanımlar ve insanları değerlendirmek için kullanılmaz.

## Öneriler

### Bilin ve sınıflandırın

**1. Kaydı sorarak olduğu kadar bularak da oluşturun.** Bir anket ve bir politikayla başlayın, ardından satın alma ve masraf kayıtlarına, kimlik ve erişim günlüklerine, ağ ve bulut faturalama verilerine ve tedarikçi ürün güncellemelerine karşı denetleyin. Zaten sahip olduğunuz araçlara gömülü yapay zekâ özelliklerini de ekleyin. Sürprizler bekleyin: insanlar onaylamadığınız araçları, çoğu zaman iyi nedenlerle kullanır. Bunları bilgi olarak ele alın (bkz. Konu 7.2 “Yazılım varlığı ve lisans metrikleri”).

**2. Her kullanıma bir sahip ve bir risk sınıfı atayın.** Sahip, kullanımdan ve sonuçlarından sorumlu kişidir. Risk sınıfı, sistem başarısız olursa doğacak zararı yansıtır: kimin etkilendiği, insanlar hakkında kararların söz konusu olup olmadığı, kendi başına eylemde bulunup bulunmadığı, hangi verilere dokunduğu ve etkilerin ne kadar geri alınabilir olduğu. Net kurallarla az sayıda sınıf kullanın. NIST Yapay Zekâ Risk Yönetimi Çerçevesi, ISO/IEC 42001 ve geçerli yasa gibi tanınmış çerçevelerden yararlanın ve bunları bağlamınıza uyarlayın.

**3. Onayı orantılı yapın.** Düşük riskli kullanımlar için birkaç soruluk hızlı bir self servis kayıt yeterlidir. Sonuçları ağır kullanımlar için bir risk değerlendirmesi, değerlendirme sonuçları, tanımlı bir insan gözetimi tasarımı ve onay isteyin. Güvenli çoğunluk için hızlı bir yol insanları sistemin içinde tutar; tehlikeli azınlık için daha yavaş bir yol onlara gereken incelemeyi verir.

### Değişikliği sınayın ve kontrol edin

**4. Kullanımdan önce ve kullanım sırasında gerçekçi senaryolarla değerlendirin.** Zor ve saldırgan olanlar dâhil, gerçek girdileri yansıtan bir test senaryoları kümesi oluşturun ve çıktıları yazılı ölçütlere göre puanlayın. İnsanların etkilenebileceği yerlerde güvenlik ve adalet denetimlerini ekleyin. Değerlendirmeleri bir takvimle ve model, istem ya da veri her değiştiğinde yeniden çalıştırın. Zayıflıkları bulmak için sistemi kasıtlı olarak yoklayan bir grup olan kırmızı takım, daha yüksek riskli kullanımlar için yararlı bir uygulamadır. Destekli iş için örnekleme uygulamalarına bakın (bkz. Konu 10.2 “Yapay zekâ destekli işi ölçmek”).

**5. Modelleri, istemleri ve araçları değişiklik kontrolü altına alın.** İstemleri ve yapılandırmaları kod gibi sürümleyin. Değişiklikler için riskle orantılı testleri ve onayı şart koşun, kaydedin ve geri alma yeteneğini koruyun. Davranışı haber vermeden değiştirebilen tedarikçi kaynaklı model güncellemelerini izleyin ve size nasıl bildirileceği konusunda tedarikçilerle anlaşın. Bir model yükseltmesini kontrol gerektiren bir değişiklik olarak ele alın (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

**6. Üretimde izleyin.** Girdilerde ve çıktılarda kaymaya, artan hata ve geçersiz kılma oranlarına ve olağandışı örüntülere dikkat edin. İncelemeyi tetikleyen eşikler belirleyin. Eylemde bulunan sistemler için eylem günlüklerini izleyin. İzleme, testin kaçırdığı sorunları bulma yoludur.

### İnsan gözetimini gerçek tutun

**7. Çalışabilecek bir gözetim tasarlayın.** Hızlı bir sistemin her çıktısını inceleyen bir kişi yetişemez ve anlayamadığı şeyi onaylaması istenen bir kişi gözetim sağlamıyordur. İnsanın ne yaptığını, hangi bilgiye sahip olduğunu, ne kadar zamanı olduğunu ve geçersiz kılma yetkisinin ne olduğunu tanımlayın. İncelemelerin öz bakımından anlamlı olduğunu denetlemek için örnekleyin. Makine çıktısını kabul etme eğilimi olan otomasyon yanlılığına karşı tetikte olun (bkz. Konu 10.1 “Hizmet yönetimi ölçümünde yapay zekâ”).

**8. Denetim izlerini tutun.** Girdileri, çıktıları, sürümleri, kararları ve eylemleri, gizlilik kuralları ve saklama sınırları çerçevesinde, soruşturmayı destekleyecek biçimde kaydedin. Bir [denetim izi](https://en.wikipedia.org/wiki/Audit_trail), ne olduğunu ve nedenini yanıtlamanızı sağlar. İnsanlar hakkındaki sonuçları ağır kararlar için, hangi açıklamayı verebileceğinizi ve hangi itiraz yolunun bulunduğunu düşünün (bkz. Konu 8.3 “Uyum ve denetim metrikleri”).

**9. Verileri koruyun ve manipülasyona direnin.** Yapay zekâ sistemlerinin hangi verileri görebileceğini ve dışarı gönderebileceğini kontrol edin. İstem enjeksiyonunu ve veri sızıntısını, özellikle harici içeriği okuyan ya da araçlara erişimi olan sistemler için sınayın. Eylemde bulunan ajanlar için kullanılan en az ayrıcalık ilkelerini uygulayın (bkz. Konu 10.3 “Yapay zekâ ajanı ve sohbet botu metrikleri” ve Konu 8.1 “Güvenlik olayı ve zafiyet metrikleri”). Gizliliği tasarım aşamasında düşünün ve veri koruma uzmanlarını dâhil edin.

### Yanıt verin ve öğrenin

**10. Yapay zekâ olaylarını olay olarak ele alın.** Neyin sayıldığını tanımlayın: zararlı ya da yanlı çıktılar, veri ifşası, güvensiz eylemler, kullanıcılara ulaşan önemli hatalar. Normal olay sürecinizi yapay zekâ etiketiyle kullanın, suçlamadan inceleyin ve dersleri değerlendirmelere ve kontrollere aktarın. Bildirmeyi çalışanlar ve kullanıcılar için kolay kılın. Sınırlama süresi, her olay için olduğu kadar önemlidir (bkz. Konu 3.4 “Büyük olay metrikleri”).

**11. Tedarikçilerin yapay zekâsını yönetin.** Tedarikçilere hangi yapay zekâ özelliklerini kullandıklarını, bunların nasıl sınandığını ve değiştirildiğini, verilerin nasıl ele alındığını ve olayların nasıl bildirildiğini sorun. Önemli olduğu yerde sözleşmelere, önemli model değişikliklerinin bildirimi dâhil, yapay zekâya özgü hükümler ekleyin. Kritik tedarikçileri bir döngüyle yeniden değerlendirin (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

**12. Yönetişimin kendisini gözden geçirin.** Her çeyrek ölçütlerin ne gösterdiğini denetleyin: hangi kullanımların kayıtsız kaldığını, hangi onayların çok yavaş olduğunu, hangi kontrollerin sorunları yakalamadığını. Politikayı ve yolları ayarlayın. Çalışanları ve kullanıcıları incelemeye dâhil edin. Kuralları kısa, net ve güncel tutun ve maliyetini hak etmeyen kontrolleri emekliye ayırın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Yapay zekâ kullanımı kayıt kapsamı | Yüzdeyi yükseltmek için önemsiz kullanımları kaydetmek; paydaları kayıtlı olanla sınırlamak | Payda için bağımsız keşif; kayıt girdilerini kalite için örnekleyin; kayıtsız kullanımlar için af |
| Risk değerlendirmesi güncelliği | Her zaman geçen hafif değerlendirmeler; düşük riskli kullanımları değerlendirmek | Değerlendirme derinliğini gözden geçirin; risk sınıfının ölçütlerle eşleştiğini denetleyin |
| Değişiklik kontrolü kapsamı | Tedarikçi değişikliklerini saptamamak; değişiklikleri sonradan kaydetmek | Sürüm geçmişi ve tedarikçi bildirimleriyle saptama; yayından önce zaman damgalı değişiklik kayıtları |
| Değerlendirme güncelliği | Kolay senaryolarda değerlendirme; sonuçları gördükten sonra toleransları seçmek | Bağımsız tarafça gözden geçirilen test kümeleri; önceden belirlenen eşikler |
| İnsan gözetimi kanıt oranı | Okumadan onayla tıklamak; sonucu değiştiremeyecek incelemeyi belgelemek | İncelemeleri öz bakımından örnekleyin; tohumlanmış bilinen hatalar; inceleyici yükü |
| Yapay zekâ olay oranı ve sınırlama süresi | Olayları bildirmemek; tanımı daraltmak | Kolay, suçlamasız bildirim; kullanıcı şikâyetleri ve denetim bulgularıyla karşılaştırın |
| Tedarikçi yapay zekâ durum tespiti güncelliği | Pazarlama tarafından yanıtlanan anketler; kanıtsız değerlendirmeler | Kritik tedarikçiler için kanıt gereklilikleri; bağımsız doğrulama |

Sağlıklı bir okuma şöyledir: bağımsız keşfin doğruladığı bir kayıt, riske uyan değerlendirmeler, kontrolden geçen değişiklikler, güncel tutulan değerlendirmeler, gerçek hataları bulan gözetim, kolayca bildirilen ve hızla sınırlanan olaylar ve neyi değiştirdiklerini paylaşan tedarikçiler.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Her yapay zekâ kullanımı için merkezî onay | Kontrol, tutarlılık | Yavaş; kullanımı yer altına iter |
| Risk kademeli self servis kayıt | Güvenli çoğunluk için hızlı | İyi ölçütler ve rastgele denetimler gerektirir |
| Herkese açık araçlara yasak | Veri ifşasını azaltır | Gölge kullanım; kaybedilen faydalar |
| Rehberlikle onaylı araçlar | Görünür ve yönetilebilir kullanım | Tedarik ve destek gerektirir |
| Ağır dokümantasyon | Denetim için kanıt | Yük; pratiği yansıtmayabilir |
| Hatta otomatik değerlendirme | Sürekli, tutarlı | İyi test kümeleri gerektirir; yeni başarısızlıkları kaçırabilir |
| Her şeyin insan incelemesi | Güvenlik | Ölçeklenmez; yorgunluk |
| Risk tabanlı örnekleme | Pratik | Bazı başarısızlıklar gözden kaçar |

Düzyazı yanıt şudur: onaylı araçlar ve düşük riskli kullanımlar için hızlı bir yol sağlayın, incelemeyi sonuçları ağır olanlarda yoğunlaştırın, değerlendirmeyi ve izlemeyi otomatikleştirin ve insan gözetimini gerçekten çalışabileceği yerde tutun.

## Takımınızla tartışılacak sorular

**1. Bugün yapay zekâyı hiçbir listede olmayan nerelerde kullanıyoruz?**
Takıma dürüstçe sorun ve af sunun. Taslak yazma, özetleme, kodlama ve analiz için kullanılan araçlara, ürünlerin içindekiler dâhil, bakın. Kolaylaştırıcı kullanımları yargılamadan kaydetmelidir. Bunları kimin kaydedeceği ve hangilerine daha yakından bakılması gerektiği üzerinde anlaşın.

**2. En sonuçsal yapay zekâ kullanımımız zararlı bir hata yapsaydı bunu nasıl öğrenirdik ve ne yapardık?**
Tespit, sınırlama, iletişim ve öğrenme boyunca ilerleyin. İzleme, sahiplik ve onu kapatma yetkisindeki boşlukları not edin. Bir iyileştirme üzerinde anlaşın.

**3. Hiç kimse onaylamadan altımızda neler değişebilir?**
Modelleri, istemleri, veri kaynaklarını ve tedarikçi güncellemelerini listeleyin. Her biri için, değiştiğini nasıl bileceğimizi ve nasıl test edeceğimizi sorun. Saptama ya da test eklemek için nerede anlaşacağınıza karar verin.

**4. Sürecimizde yapay zekâ çıktısını inceleyen kişi gerçekçi olarak ciddi bir hatayı yakalayabilir mi?**
Hacme, bilgiye, zamana ve yetkiye bakın. Tohumlanmış bir hatayla sınayın. İnceleme çalışamıyorsa, daha fazla yapay zekâ eklemeden önce süreci yeniden tasarlayın.

**5. Kurallarımızdan hangilerini meşgul bir iş arkadaşı izlemesi kolay bulur ve hangilerinin etrafından dolaşır?**
Mevcut kuralları listeleyin ve gerçek iş akışlarına karşı sınayın. Kuralların neden atlandığını tartışın. Güvenli yolu kolay yol yapan değişiklikler üzerinde anlaşın.

**6. Tedarikçilerimiz bize yapay zekâları hakkında ne söyledi ve neyi sormadık?**
Son anketleri ve sözleşmeleri denetleyin. Yapay zekâ özellikleri olan kritik tedarikçileri ve bilgi boşluklarını belirleyin. Bir sonraki inceleme için sorular üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları yapay zekâ özellikleri inşa eder ve benimser; yönetişimi sürtünme ya da yardım olarak hissederler. Kullanımları erken kaydetmeli, gerçekçi senaryolarla sınamalı, istemleri ve modelleri sürüm kontrolü altına almalı ve çalışan bir gözetim tasarlamalıdır. Düşük riskli kullanımlar için hızlı onaydan yararlanırlar.

### Hizmet ve operasyon takımları

Operasyon takımları yapay zekâyı üretimde çalıştırır ve olaylarına yanıt verir. Kaymayı izlemeli, eylem günlüklerini tutmalı, yapay zekâ olaylarını etiketlemeli ve bir sistemi kapatma yetkisine ve imkânına sahip olmalıdır. Kendileri de yapay zekâ kullanır ve aynı kurallara uymalıdır.

### Liderlik ve yönetişim

Liderler risk iştahını belirler ve sonuçlardan hesap verir. Kaydı, değerlendirmeyi ve izlemeyi finanse etmeli, bazı yapay zekâ kullanımlarının geçemeyeceğini kabul etmeli, kullanımların bağımsız keşfini istemeli ve olayları ile sınırlama süresini izlemelidir. Yönetişim organları kuralları kısa tutmalı, düzenli olarak gözden geçirmeli ve çalışanların ve kullanıcıların söz hakkı olmasını sağlamalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar, çoğu zaman bilmeden, yapay zekâ kararlarından ve çıktılarından etkilenir. Kendilerini etkileyen konularda yapay zekânın devrede olduğunu bilmeyi, bir insana ulaşmayı ve kararlara itiraz etmeyi hak ederler. Şikâyetler ve itirazlar, yönetişimin pratikte nasıl işlediğine dair temel kanıtlardır.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir bankanın teknoloji ve operasyon bölümü, bir çalışanın müşteri ayrıntılarını herkese açık bir araca yapıştırmasının ardından bir yapay zekâ politikası benimser. Uyum takımı bir kayıt yayımlar ve her kullanımın listelenmesini bekler. Aşağıdaki sayılar açıklayıcıdır.

Üç ay sonra kayıt 38 yapay zekâ kullanımını listeler. Teknoloji riski başkanı bağımsız yollarla denetler: satın alma ve masraf verileri, yapay zekâ hizmetlerine girişleri gösteren kimlik günlükleri, ağ verileri ve anonim bir çalışan anketi. Keşif 94 kullanım bulur; dolayısıyla kayıt kapsamı yüzde 40'tır. On yedisi bankanın zaten lisanslı olduğu araçların içindeki özellikler ve on ikisi çalışanların kullandığı herkese açık araçlardır. Kayıtlı 38 kullanımdan yalnızca 14'ünün risk sınıfı vardır ve en yüksek riskli üçünün, yani sahtecilik uyarılarını puanlayan bir modelin, müşteriler için bir sohbet botunun ve şikâyetleri özetleyen bir aracın, son bir yılda değerlendirmesi yoktur. Sahtecilik modelinin yapılandırmasındaki ve sohbet botunun istemlerindeki değişiklikler takımlarca doğrudan yapılır ve son çeyrek için değişiklik kayıtları, sürüm geçmişinde bulunan değişikliklerin yüzde 21'ini kapsar. Model tarafından reddedilen 60 sahtecilik uyarısından oluşan bir örnek, bunların 52'si için insan incelemesinin kaydedildiğini gösterir; ancak bilinen beş kaçırmanın tohumlandığı bir küme yalnızca bir inceleyici tarafından yakalanmıştır, çünkü inceleyicilerin her biri günde birkaç yüz uyarıyı ele alır. Sohbet botunun müşterilere güncel olmayan bir ücret tutarı verdiği bir olay bir şikâyetle fark edilmiştir ve kimsenin onu kapatma yetkisi olmadığı için sınırlanması altı gün sürmüştür.

Teknoloji riski başkanı yönetişimi takımlarla birlikte yeniden tasarlar. Beş soruluk kısa bir self servis kayıt, düşük riskli kullanımları dakikalar içinde kayda yerleştirir ve bir af dönemi çalışanları kullandıkları araçları listelemeye teşvik eder. Risk sınıfları zarara, veriye ve özerkliğe dayanır. Daha yüksek riskli kullanımlar bir değerlendirme, gerçekçi ve saldırgan senaryolara karşı bir değerlendirme ve tanımlı bir gözetim tasarımı gerektirir. Modeller, istemler ve araçlar riskle orantılı testlerle değişiklik kontrolü altına alınır ve sohbet botunun istemleri geri alma ile sürümlenir. Sahtecilik uyarısı süreci, inceleyicilerin daha az ve daha iyi önceliklendirilmiş uyarıyı ele alacağı biçimde yeniden tasarlanır ve tohumlanmış hatalar tespitlerini sınar. Her yüksek riskli kullanım için adı konmuş bir sahibin onu kapatma yetkisi vardır ve olay müdahalesi yapay zekâyı kapsar. Bankanın bulut ve yapay zekâ tedarikçilerine hangi yapay zekâ özelliklerini kullandıkları ve değişikliklerin nasıl bildirildiği sorulur.

İki çeyrek sonra, bağımsız keşfe göre kayıt kapsamı yüzde 88'dir, tüm yüksek riskli kullanımlar döngü içinde değerlendirilmiş ve ölçülmüştür, değişiklik kontrolü kapsamı yüzde 84'tür, inceleyicilerin tohumlanmış hata tespiti 5'te 4'e yükselmiştir ve bir yapay zekâ olayını sınırlamanın medyan süresi 3 saattir. Çalışanlar görevlerin çoğu için onaylı araçları kullanır. Üst düzey bir yönetici yüzde 100 kayıt kapsamı hedefi ister. Teknoloji riski başkanı; bağımsız keşfe karşı kapsamı, değerlendirme güncelliğini ve olay ele almayı izlemeyi önerir ve keşfi olmayan bir kaydın yüzde 100'e ulaşıp yine de riski kaçırabileceğini açıklar. Karar kaydedilir.

## Sektör mercekleri

**Girişim (startup).** Hız önemlidir ve riskler çoğunlukla veri ifşası ve güvenilmez çıktılardır. Sahipleri olan kısa bir araç ve kullanım listesi tutun, hangi verilerin nerede kullanılabileceğine dair birkaç net kural belirleyin ve istemleri sürümleyin. Müşterilerin güvence talepleri büyüdükçe yeniden gözden geçirin.

**Küçük işletme.** Çalışanlar herkese açık araçları kullanacaktır. Onaylı bir seçenek sağlayın, veriye dair tek sayfalık bir kural yazın ve araçların nasıl kullanıldığını gözden geçirin. Tedarikçilere yapay zekâ özelliklerini sorun ve yapay zekânın müşteriler ya da çalışanlar hakkında karar verdiği yerlerin kaydını tutun.

**Kurumsal.** Ölçek bir işletim modeli gerektirir: mevcut risk ve güvenlik işlevleriyle bütünleşik kayıt, risk kademeleri, değerlendirme standartları, değişiklik kontrolü ve olay süreci. Bağımsız keşif kullanın, değerlendirmeyi hatlarda otomatikleştirin ve standartlarla uyumlu olun. Takımlara hızlı bir yol verin.

**Hükûmet ve kamu sektörü.** Vatandaşları etkileyen kararlar şeffaflık, adalet ve itiraz yükümlülükleri getirir ve neyin izin verildiğini satın alma ve hukuki çerçeveler şekillendirir. Gereken yerde yüksek etkili kullanımların kamuya açık kayıtlarını tutun, haklara etkiyi değerlendirin, insanları anlamlı biçimde döngüde tutun ve güncel yasa ile rehberliği denetleyin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler; kaydı oluşturma ve sürdürme emeğini, keşif araçlarını ya da analizini, risk değerlendirmelerini, değerlendirme kümelerini ve çalıştırmalarını, istemler ve modeller için değişiklik kontrolünü, izlemeyi, eğitimi ve olay müdahale kapasitesini içerir. Yönetişim ayrıca daha yüksek riskli kullanımlar için bir miktar gecikme ekler. Bu maliyetler kullanımların sayısı ve riskiyle ölçeklenir; bu da düşük riskli onayı hafif tutmanın bir nedenidir.

Getiriler; önlenen zarar ve ifşa, denetimlerde ve düzenleyici incelemelerde daha az sürpriz, net kurallar sayesinde daha hızlı güvenli benimseme ve müşterilerin ile çalışanların güvenini içerir. Gerekçeyi kendi verilerinizden kurun: kayıt dışında bulunan kullanımların sayısı ve dokundukları veri, olaylar ve maliyetleri, öncesinde ve sonrasında geçici onaylarda harcanan zaman ve denetimlerdeki bulgular. Yapay zekâ olayları ya da cezaları hakkındaki yayımlanmış istatistikleri, izlenebilir bir kaynak ve bağlamınızla ilgililik olmadan anmaktan kaçının. Yönetmemenin maliyetini, önemli yasal ve itibar zararı olasılığını da dâhil ederek hesaba katın (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Kimsenin denetlemediği bir kayıt.** Kapsam yüksek görünür ve gerçek kullanımları kaçırır. Bağımsız keşif kullanın.
- **Topyekûn yasaklar.** Kullanımı yer altına iter. Onaylı araçlar ve hızlı bir yol sağlayın.
- **İstemleri ve modelleri kimsenin sahip olmadığı yapılandırma olarak ele almak.** Davranış fark edilmeden değişir. Bunları değişiklik kontrolü altına alın.
- **Bir kez değerlendirmek.** Sistemler kayar ve değişir. Bir takvimle ve değişiklikte yeniden çalıştırın.
- **Sadece adı olan gözetim.** İnceleyiciler göremediklerini yakalayamaz. Tohumlanmış hatalarla sınayın ve yükü düzeltin.
- **Kapatma yetkisi yok.** Sınırlama günler alır. Bir sistemi durdurma gücü olan sahipler atayın.
- **Tedarikçilerin yapay zekâsını yok saymak.** Riskiniz onlarınkini de içerir. Sorun, sözleşmeyle bağlayın ve yeniden değerlendirin.
- **Kimsenin izleyemediği kurallar.** Atlanırlar. Kısa tutun ve güvenli yolu kolay yapın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Bilmek ve sınıflandırmak | Yapay zekâ kullanımına dair görünüm yok | Politika ve kısmi bir liste | Sahibi ve risk sınıfı olan kayıt; kapsam için bağımsız keşif kullanılır | Kapsam, değerlendirme güncelliği ve onay süreleri yönetilir | İş birimleri ve tedarikçiler arasında paylaşılan kayıt görünümü; sınıflar düzenleyicilerle ve kullanıcılarla gözden geçirilir |
| Test ve değişiklik | Plansız | Bazı kullanımlar için bir miktar değerlendirme | Gerçekçi senaryolarla değerlendirme; istemler ve modeller değişiklik kontrolü altında | Sürekli değerlendirme ve kayma izleme; kapsam yönetilir | Hatlarda otomatik, risk tabanlı değerlendirme ve değişiklik; bağımsız olarak denetlenir |
| Gözetim ve öğrenme | Güvene dayanma | İnceleme ilkesel olarak mevcut | Gözetim tasarlanır ve örneklenir; yapay zekâ olayları etiketlenir ve suçlamadan incelenir | Tohumlanmış hata testleri, sınırlama süresi ve tedarikçi değerlendirmeleri yönetilir | Gözetim, olaylardan öğrenme ve politika; çalışanlar, kullanıcılar ve iş ortaklarıyla birlikte geliştirilir |

## Kontrol listesi

- [ ] Bir kayıt, yapay zekâ kullanımlarını bir sahip ve bir risk sınıfıyla listeler ve bağımsız keşfe karşı denetlenir.
- [ ] Düşük riskli kullanımlar için hızlı bir yol, sonuçları ağır olanlar için daha derin bir yol vardır.
- [ ] Daha yüksek riskli kullanımların güncel bir risk değerlendirmesi ve tanımlı bir gözetim tasarımı vardır.
- [ ] Gerçekçi ve saldırgan senaryolardaki değerlendirmeler günceldir ve değişiklikte yeniden çalıştırılır.
- [ ] İstemler, modeller, araçlar ve veri kaynakları sürümlenir ve değişiklik kontrolü altındadır.
- [ ] Üretim izleme; kaymayı, hataları, geçersiz kılmaları ve olağandışı eylemleri gözler.
- [ ] Gözetim tohumlanmış hatalarla sınanır ve inceleyici yükü gerçekçidir.
- [ ] Denetim izleri gizlilik ve saklama kuralları çerçevesinde soruşturmayı destekler.
- [ ] Yapay zekâ olayları etiketlenir, suçlamadan incelenir ve sahipler sistemleri kapatabilir.
- [ ] Yapay zekâ özellikleri olan tedarikçiler değerlendirilir ve önemli değişiklikleri bildirmeye bağlanır.

## Yapay zekâ istemleri

**Yapay zekâ kullanımları için bir risk sınıflandırması taslaklayın.**

```text
[Kurum türü] içindeki yapay zekâ kullanımları için; yanlış olduğunda zarara, kimin
etkilendiğine, insanlar hakkındaki kararların dâhil olup olmadığına, eylemlerin
özerkliğine, veri hassasiyetine ve geri alınabilirliğe dayanan basit bir risk
sınıflandırması (üç ya da dört düzey) önerin. Her düzey için örnek kullanımları,
gereken onayları ve kanıtı ve gözden geçirme döngüsünü belirtin. Hukuki sonuçlar
belirtmeyin. Varsayımlarınızı ve hukuk, risk ve güvenlik uzmanlarıyla
doğrulanacak noktaları listeleyin.
```

**Bir kayıt formu tasarlayın.**

```text
Yeni yapay zekâ kullanımları için, sekizden fazla soru içermeyen, başlangıç risk
sınıfını otomatik atayan ve daha yüksek riskli kullanımları incelemeye yönlendiren
kısa bir self servis kayıt formu tasarlayın. Amaç, veri, etkilenen kullanıcılar,
özerklik, tedarikçi ve sahibi kapsayın. Düşük riskli durumlar için nasıl hızlı
tutulacağını açıklayın. Varsayımlarınızı ve yanlış sınıflandırma risklerini
listeleyin.
```

**Bir değerlendirme kümesi planlayın.**

```text
[Süreç] içinde [görev] için yapay zekâ kullanıyoruz. Bir değerlendirme kümesi
tasarlamama yardımcı olun: gerçekçi senaryo türleri, zor ve saldırgan senaryolar,
doğru ve güvenli çıktılar için yazılı ölçütler, insanların etkilendiği yerlerde
adalet denetimleri, ne büyüklükte bir kümenin pratik olduğu, ne sıklıkla yeniden
çalıştırılacağı ve hangi değişikliklerin yeniden çalıştırmayı tetiklemesi
gerektiği. Bir kümenin yeterli olduğunu iddia etmeyin. Varsayımlarınızı ve
sınırlarınızı listeleyin.
```

**Bir yapay zekâ olayını inceleyin.**

```text
İşte yapay zekâyla ilgili bir olayın tanımı: [kişisel veri olmadan yapıştırın].
Suçlamasız bir inceleme taslaklayın: zaman çizelgesi, nasıl tespit edildiği,
katkıda bulunan etkenler (veri, istem, model, gözetim, tedarikçi, süreç), etki,
neyin sınırladığı ve sahipleriyle eylemler. Değerlendirme, izleme ve değişiklik
kontrolünde değişiklikler önerin. Bireylere suç atfetmeyin. Varsayımlarınızı ve
açık soruları listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir yapay zekâ yönetişimi ya da risk metriği için eşleştirilmiş koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir yapay zekâ yönetişimi metrik girdisinin bağımsız kanıt kullandığını ve manipülasyon yolunu ile koruma önlemini taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Yapay zekâ kaydını bağımsız keşifle oluşturun ve incelemeyi, güvenli kullanımlar için hızlı bir yolla riske uydurun.
- Modelleri, istemleri, araçları ve veri kaynaklarını test, onay ve geri alma gerektiren değişiklikler olarak ele alın.
- Kullanımdan önce ve kullanım sırasında, gerçekçi ve saldırgan senaryolarla değerlendirin.
- Çalışabilecek bir insan gözetimi tasarlayın ve tohumlanmış hatalarla sınayın.
- Yapay zekâ olaylarını diğer olaylar gibi, suçlamasız incelemeyle ele alın ve sahiplere sistemleri kapatma gücü verin.
- Tedarikçilere yapay zekâları hakkında sorun, kuralları kısa ve güvenli yolu kolay tutun.

## Kaynaklar ve ileri okuma

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
