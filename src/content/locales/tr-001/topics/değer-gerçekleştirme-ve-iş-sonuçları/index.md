# Değer gerçekleştirme ve iş sonuçları

**Bir değişikliği teslim etmek, kuruluşun ondan fayda görmesi anlamına gelmez. Bu yüzden beklenen faydayı inşa etmeden önce yazın, yayından sonra kazanması beklenen insanlarla birlikte kontrol edin ve bir iyileşmenin ne kadarını çalışmanıza atfedebileceğiniz konusunda dürüst olun.**

## Genel bakış ve motivasyon

Çevik çalışma biçimleri çalışan yazılıma öncelik verir ve paydaşları baştan sona iş birliği içinde tutar; böylece yayına çıkan şey insanların ihtiyaç duyduğu şey olur. ITIL'in kodlaştırdığı BT hizmet yönetimi (ITSM) aynı kaygıyı değer olarak çerçeveler: bir hizmet, müşterilerin istediği sonuçlara, kabul ettikleri maliyet ve risklerle ulaşmasına yardımcı olduğunda değerlidir. Her iki gelenek de tek bir rahatsız edici soruda buluşur. Bir yıl sonra, bu takımın inşa ettiği ve işlettiği şey yüzünden insanlar ve kuruluş daha iyi durumda mı?

Bunu yanıtlamak, teslim edileni saymaktan daha zordur. Özellikler yayına çıkar ve kimse onları kullanmaz. Olaylar takımın çalışmasıyla ilgisiz nedenlerle azalır. Bir maliyet tasarrufu bir slaytta görünür ve geldiği bütçe başka yerde harcanır. Bu konu bu boşluğu kapatmakla ilgilidir ve kitabın başında tanıtılan sonuç odağına doğrudan bağlanır (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”).

Konuyu dört fikir düzenler.

- **Fayda.** Fayda, bir paydaşın değer verdiği ölçülebilir bir iyileşmedir; örneğin bir görevde harcanan sürenin azalması, daha az hata, daha fazla müşteriye hizmet veya daha düşük risk. Bir özellik fayda değildir. Bir araçtır. [Fayda gerçekleştirme yönetimi](https://en.wikipedia.org/wiki/Benefits_realisation_management), faydaları belirleme, sahip atama ve gelip gelmediklerini kontrol etme disiplinidir.
- **Değer hipotezi.** İnşa etmeden önce takım neyin, kimin için, ne kadar değişmesini beklediğini ve bunu nasıl anlayacağını yazar. Bu sınanabilir bir iddiadır ve yanlış olabilir. Bir [değişim kuramı](https://en.wikipedia.org/wiki/Theory_of_change) veya bir [mantık modeli](https://en.wikipedia.org/wiki/Logic_model), etkinliklerden çıktılara ve sonuçlara uzanan zinciri ortaya koyar; bu da hipotezi açık hale getirmeye yardımcı olur.
- **Öncü ve gecikmeli göstergeler.** [Öncü gösterge](https://en.wikipedia.org/wiki/Leading_indicator) erken hareket eder ve bir sonucu öngörür; örneğin yeni bir sürecin benimsenmesi. [Gecikmeli gösterge](https://en.wikipedia.org/wiki/Lagging_indicator) sonucu sonradan doğrular; örneğin işlem başına maliyetin düşmesi. İkisini de kullanın: öncü göstergeler rotayı düzeltmenize, gecikmeli göstergeler ise işe yarayıp yaramadığını anlamanıza olanak verir.
- **Atıf.** Birçok şey aynı anda değişir. Çalışmanızın bir iyileşmeye neden olduğunu söylemek için bir karşılaştırmaya ihtiyacınız vardır: bir başlangıç değeri, bir karşılaştırma grubu veya diğer değişiklikleri hesaba katan bir öncesi-sonrası tasarımı. Bunlar olmadan değer iddiaları hikâyedir. Dürüst konum çoğunlukla “neden olduğu” değil, “ile ilişkili” demektir.

[Hedefler ve anahtar sonuçlar](https://en.wikipedia.org/wiki/Objectives_and_key_results) (OKR) gibi hedef çerçeveleri takım çalışmasını iş sonuçlarına bağlayabilir ve ölçüm çerçevelerine ilişkin önceki konu bunları ayrıntılı ele alır (bkz. Konu 1.7 “Ölçüm çerçeveleri”). Her çerçevenin riski [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) tarafından adlandırılandır: bir fayda sayısı hedef haline geldiğinde, insanlar faydayı üretmeden sayıyı üretmenin yollarını bulur (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Konu ayrıca paraya bir köprü kurar. Sonraki bölümdeki yatırım getirisi ve iş gerekçesi konusu, mali görünümü derinlemesine ele alır (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”). Burada odak, o gerekçeyi besleyen sonuç kanıtıdır.

## Temel ilkeler

- **Beklenen faydayı inşa etmeden önce yazın.** Sonradan kontrol edilemeyen bir iddiadan öğrenilemez.
- **Her fayda için bir sahip adlandırın.** Sahip, teslimat takımı değil, değişikliği görecek bir paydaştır.
- **Yayından sonra, kullanıcılarda ölçün.** Teslimat kontrolün sonu değil başlangıcıdır.
- **Yönlendirmek için öncü, doğrulamak için gecikmeli göstergeler kullanın.**
- **Atıf konusunda dürüst olun.** Başka neyin değiştiğini söyleyin ve kanıtın destekleyemeyeceği iddialardan kaçının.
- **Gelmeyen faydaları sayın.** Başarısız bir hipotezden öğrenmek, bu biçimde çalışmanın bir faydasıdır.
- **İş birliğini sürdürün.** Paydaşlar ve takım kanıtı birlikte, düzenli olarak gözden geçirir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Fayda gerçekleşme oranı | Kararlaştırılan gözden geçirme tarihinde gözlemlenen beklenen faydaların payı | ölçülen sonucu kararlaştırılan eşikte veya üzerinde olan faydalar / dönemde gözden geçirme tarihi olan beklenen faydalar | yüzde | Sahipleri, başlangıç değerleri ve gözden geçirme tarihleri olan fayda sicili | Sürekli iyileştirme; hizmet değer sistemi yönetişimi | Paydaşlarla sonuç gözden geçirmesi | Üç aylık |
| İlk değere kadar geçen süre | Çalışmanın başlangıcından kullanıcılar için ilk ölçülebilir faydaya kadar geçen süre | ilk çalışmanın başladığı günden fayda göstergesinin beklendiği gibi hareket ettiği ilk tarihe kadar geçen günler | gün | İş izleyici ve fayda göstergesi | Hizmet tasarımı; yayın ve dağıtım yönetimi | Değerin sürekli teslimi | Girişim başına |
| Hipotez kontrol oranı | Belirtilen değer hipotezi yayından sonra kontrol edilen yayımlanmış değişikliklerin payı | kayıtlı yayın sonrası kontrolü olan değişiklikler / hipotez taşıyan yayımlanmış değişiklikler | yüzde | Yayın kayıtlarına bağlı hipotez günlüğü | Sürekli iyileştirme; değişiklik yetkilendirme | Yayımlanmış işten öğrenme | Aylık |
| Kanıt kalitesi payı | Bir başlangıç değeri ve belirtilmiş bir karşılaştırma yöntemi olan iddia edilen faydaların payı | başlangıç değeri ve yöntemi olan fayda iddiaları / raporlanan fayda iddiaları | yüzde | Fayda sicili gözden geçirmesi | Ölçüm ve raporlama | Sonuçların dürüst raporlanması | Üç aylık |
| Sonuç göstergesi hareketi | Seçilen bir sonuç göstergesinin başlangıç değerine ve mümkünse bir karşılaştırmaya göre değişimi | (sonrasındaki gösterge eksi öncesindeki gösterge), karşılaştırma grubunun değişimi yanında raporlanır | gösterge birimleri | Ürün analitiği, hizmet verisi, finans | Hizmet düzeyi yönetimi; sürekli iyileştirme | Anahtar sonuç ilerlemesi | Aylık |
| İş etkisi saatleri | Bir iş sürecinin hizmet sorunları nedeniyle bozulduğu veya durduğu saatler | süreç sahiplerinin BT hizmet nedenlerine atfettiği bozulmuş veya durmuş süreç saatleri | saat | Süreç sahibi onayıyla birleştirilen olay kayıtları | Olay yönetimi; kullanılabilirlik yönetimi | İş etkisi gözden geçirmesi | Aylık |
| Sonuca bağlı kapasite payı | Belirtilmiş bir sonuca bağlı işe harcanan takım kapasitesinin payı | kayıtlı bir sonuca bağlı kalemlerdeki kapasite / toplam kapasite | yüzde | Sonuç alanı olan iş izleyici | Hizmet değer sistemi; portföy yönetişimi | Ürün hedefiyle hizalanmış iş | Üç aylık |

Her faydanın gözden geçirme tarihini ve eşiğini sonradan değil, kaydedildiği anda tanımlayın. İlk değere kadar geçen süre iş başladığında başlar ve gösterge ilk kez belirtilen miktarda beklenen yönde hareket ettiğinde durur; bu, yayından epey sonra olabilir. İş etkisi saatlerinin atfı süreç sahibiyle kararlaştırılır ve anlaşmazlıklar kaydedilir.

## Öneriler

### İnşa etmeden önce: iddiayı kontrol edilebilir kılın

**1. Her önemli değişiklik için bir değer hipotezi yazın.** Sade bir biçim kullanın: “[Değişiklik] işinin, [kim]in [ne yapmasına] yardımcı olacağına ve böylece [ölçülebilir iyileşme] sağlanacağına inanıyoruz. [Gösterge]nin [başlangıç değerinden] [beklenen değere] hareket etmesiyle, [tarih] tarihinde yapılacak gözden geçirmede bileceğiz.” Panodaki bir karta sığacak kadar kısa tutun. Boşlukları dolduramayan takımlar çoğu zaman sorunu henüz anlamamıştır.

**2. Bir başlangıç değeri kaydedin.** Öncesi olmadan sonrası olmaz. Göstergenin mevcut değerini, nasıl ölçüldüğünü ve ne kadar değiştiğini kaydedin. Gösterge gürültülüyse tek bir sayı yanıltıcıdır; bu yüzden birkaç haftalık bir aralık kaydedin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**3. Öncü ve gecikmeli göstergeleri seçin.** Yeni bir self servis talebi için öncü gösterge, kaç uygun kullanıcının onu tamamladığıdır; gecikmeli gösterge ise elle işleme saatlerindeki düşüştür (bkz. Konu 6.3 “Hizmet benimsenmesi ve katalog metrikleri”). Hangi göstergenin ne zaman kontrol edileceği üzerinde anlaşın. Öncü göstergeler, çeyreğin bitmesini beklemeden rota ortasında düzeltmeye olanak verir.

**4. Teslimat takımının dışında bir fayda sahibi adlandırın.** Sahip, iyileşmeyi kendi alanında görecek ve onu yargılayabilecek paydaştır. Teslimat takımı ölçüme destek verir ama kendi ödevini notlandırmaz. Bu, uygulamada sürekli iş birliğidir: sonucu isteyen kişi, doğrulanana kadar sürece dahil kalır.

### Yayından sonra: dürüstçe kontrol edin

**5. Hipotezi kararlaştırılan tarihte gözden geçirin.** Sahip ve takımla kısa bir gözden geçirme yapın. Göstergeye, başlangıç değerine ve karşılaştırmaya bakın. Sonucu sicile kaydedin: karşılandı, kısmen karşılandı, karşılanmadı veya anlaşılamıyor. “Anlaşılamıyor” meşru bir sonuçtur ve ölçümü iyileştirmek için bir uyarıdır.

**6. Mümkün olduğunda bir karşılaştırma kullanın.** En güçlü karşılaştırma kontrollü bir deneydir. [A/B testi](https://en.wikipedia.org/wiki/A/B_testing), kullanıcılar rastgele atanarak iki sürümü karşılaştırır ve yeterli trafiği olan dijital hizmetler için iyi çalışır. Rastgeleleştirmenin mümkün olmadığı yerlerde, kademeli bir yayın, değişikliği almış ve almamış grupları karşılaştırmanıza olanak verir. [Farkların farkı](https://en.wikipedia.org/wiki/Difference_in_differences) yaklaşımı, aynı dönemde muamele gören bir grubun değişimini muamele görmeyen bir grubun değişimiyle karşılaştırır ve ortak eğilimleri ortadan kaldırır. Uyan en basit tasarımı kullanın.

**7. Karıştırıcıları arayın.** [Karıştırıcı](https://en.wikipedia.org/wiki/Confounding) bir etken, değişmiş ve sonucu açıklayabilecek başka bir şeydir: mevsimsel bir örüntü, yeni bir politika, farklı bir talep karışımı. Bir etki iddia etmeden önce makul olanları listeleyin. Onları dışlayamıyorsanız, kanıtın neyi desteklediğini ve fazlasını söylemeyin.

**8. Olumsuz ve boş sonuçları raporlayın.** Bir değişiklik yardımcı olmadığında bunu söyleyin ve ne öğrenildiğini kaydedin. Yalnızca başarılara bakma alışkanlığı olan [hayatta kalma yanlılığı](https://en.wikipedia.org/wiki/Survivorship_bias), programları olduğundan daha iyi gösterir. Yalnızca zaferleri içeren bir sicil dürüstçe tutulmamıştır.

### Programı dürüst tutun

**9. Kanıt kalitesini faydadan ayırın.** Bir başlangıç değeri ve belirtilmiş bir yöntemi olan iddiaların payını izleyin. Zayıf kanıtlı büyük bir iddia öyle okunmalıdır. Sağlıklı bir sicil, güçlü kanıtlı mütevazı iddiaları ve birkaç dürüst “anlaşılamıyor” kaydını gösterir.

**10. Kapasiteyi sonuçlara gevşekçe bağlayın.** Takımın işinin ne kadarının belirtilmiş bir sonuca bağlı olduğunu sorun ve kalanına bakın. Güvenlik düzeltmeleri veya hizmeti ayakta tutmak gibi bazı işlerin yeni bir faydası yoktur ve adlandırıldığı sürece bu sorun değildir. Amaç, kaymayı fark etmektir; her görevi bir fayda hikâyesine zorlamak değil.

**11. Kullandığınız hedef çerçevesine bağlayın.** OKR kullanıyorsanız anahtar sonuçları sonuç göstergeleri yapın ve paydaşlarla gözden geçirin. Anahtar sonuçları görevler hakkında değil sonuçlar hakkında tutun ve tam olarak karşılanmayabilecek iddialı hedeflere yer bırakın. Anahtar sonuçları bireysel hedefler yapmayın (bkz. Konu 1.7 “Ölçüm çerçeveleri”).

**12. Yalnızca projeyi değil, portföyü de gözden geçirin.** Üç ayda bir girişimler genelinde hangi faydaların geldiğine, hangilerinin gelmediğine ve örüntünün takımın işi nasıl tahmin ettiği ve seçtiği hakkında ne söylediğine bakın. Bunu takımları sıralamak için değil, hipotezlerin yazılma biçimini iyileştirmek için kullanın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oynanır | Eşlenen koruma metriği veya uygulaması |
| --- | --- | --- |
| Fayda gerçekleşme oranı | Düşük eşikler belirlemek; gözden geçirme tarihini kaydırmak; faydayı sonradan yeniden tanımlamak | Onayda sabitlenen eşik ve tarih; kanıt kalitesi payı; teslimat takımı dışında sahip |
| İlk değere kadar geçen süre | Yanlış nedenle hareket eden erken bir gösterge seçmek; saati geç başlatmak | Sicilde tanımlı gösterge ve saat; fayda sahibiyle doğrulama |
| Hipotez kontrol oranı | Her zaman geçen belirsiz hipotezler yazmak; yalnızca başarılı değişiklikleri kontrol etmek | Hipotezlerden sınanabilirlik için örnekleme; gözden geçirmeye boş ve başarısız sonuçları dahil etme |
| Kanıt kalitesi payı | Başlangıç değerlerini sonradan doldurmak; herhangi bir karşılaştırmayı yöntem olarak tanımlamak | Değişiklikten önce tarihlenmiş başlangıç değeri; takım dışından birinin gözden geçirmesi |
| Sonuç göstergesi hareketi | Elverişli bir dönem veya grup seçmek; karıştırıcıları yok saymak | Önceden kaydedilmiş dönem ve grup; dikkate alınan karıştırıcıların listesi |
| İş etkisi saatleri | Süreç sahiplerinin atıfları şişirmesi veya küçültmesi; atıftan kaçınmak için olayları yeniden sınıflandırmak | Yazılı ve kayıtlı atıf kuralları; olay ve kullanılabilirlik kayıtlarıyla karşılaştırma |
| Sonuca bağlı kapasite payı | Tüm işi genel bir sonuçla etiketlemek; rutin iş için sonuç icat etmek | Paydaşlarla gözden geçirilen sonuç listesi; bağlantı kalitesi için kalemlerden örnekleme |

Sağlıklı bir okuma şudur: bazı faydaların karşılandığı, bazılarının karşılanmadığı, birkaçının belirsiz olduğu ve her kaydın bir başlangıç değeri, bir sahibi ve belirtilmiş bir yöntemi olduğu bir sicil. Tekdüze başarıdan oluşan bir sicile kuşkuyla yaklaşılmalıdır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Resmî fayda sicili | Hesap verebilirlik, girişimler arası öğrenme | Her küçük değişikliğe uygulanırsa bürokrasi |
| Her kartta hafif hipotez | Ucuz, alışkanlık kurar | Belirsiz yazması kolay |
| Kontrollü deney | Nedenin güçlü kanıtı | Trafik, zaman ve hizmete uyan bir tasarım gerektirir |
| Yalnızca öncesi-sonrası | Basit, hızlı | Diğer değişiklikler tarafından karıştırılır |
| Paydaş yargısı | Metriklerin kaçırdığı değeri yakalar | İyimserliğe ve politikaya açık |
| Öncü göstergeler | Erken rota düzeltmesi | Gerçek sonucu öngörmeyebilir |
| Gecikmeli göstergeler | Gerçek sonuçları doğrular | Geç gelir; birçok neden |

Pratik yanıt, kanıtın ağırlığını değişikliğin büyüklüğüne ve riskine uydurmaktır. Küçük değişiklikler için hafif bir hipotez ve basit bir öncesi-sonrası, büyükler için bir deney veya kademeli yayın kullanın. Her zaman neyi beklediğinizi, ne olduğunu ve ne kadar emin olduğunuzu kaydedin.

## Takımınızla tartışılacak sorular

**1. Son çeyrekte ne yayına aldık ve yardım etmeyi amaçladığımız insanlar için ne değişti?**
Ana değişiklikleri listeleyin ve her biri için bir farkı fark edecek kişiyi adlandırın. Ne diyeceklerini sorun. Kolaylaştırıcı, kimsenin yanıtlayamadığı değişiklikleri not etmelidir; çünkü bunlar yayın sonrası bir kontrol için adaylardır. Bir ay içinde sahibiyle gözden geçirilecek bir değişiklik üzerinde anlaşın.

**2. Bir sonraki önemli değişikliğimiz için değer hipotezi nedir ve nasıl bileceğiz?**
Hipotez formunu birlikte doldurun. Belirsiz sözcüklere ve eksik başlangıç değerlerine itiraz edin. Hangi sonucun takımın planlarını değiştirmesine neden olacağını sorun. Grup bir ölçümde anlaşamıyorsa, bu inşa etmeden önce bir keşif görevidir.

**3. Faydanın sahibi kim ve odada mı?**
Her faydanın teslimat takımı dışında bir sahibi olduğunu kontrol edin. Sahibin kanıtı ne sıklıkla gördüğünü sorun. Sahibin takımın kendisi olduğu yerlerde, yargıyı başka kimin paylaşması gerektiğini tartışın. Konuşma, paydaşlar arasında sürekli iş birliğini destekler.

**4. Sayılar iyileştiğinde başka ne değişti?**
Yakın tarihli iddia edilmiş bir iyileşmeyi alın ve aynı dönemdeki diğer değişiklikleri listeleyin: politika, mevsimsellik, personel, başka bir takımın yayını. Hangilerinin sonucu açıklayabileceğini sorun. İyileşmeyi değişikliğin neden olduğu, onunla ilişkili veya belirsiz olarak tanımlayıp tanımlamayacağınıza karar verin.

**5. Geçmiş hipotezlerimizden hangileri yanlış çıktı ve bu konuda ne yaptık?**
Başarısız bir beklentinin hikâyesini isteyin. Hızla bir hikâye gelmezse takım kontrol etmiyor olabilir veya bunun hakkında konuşmuyor olabilir. Boş bir sonucu raporlamayı güvenli ve yararlı kılmanın yollarını tartışın.

**6. Kapasitemizin ne kadarı bir sonuca bağlı ve bu doğru geliyor mu?**
Bir aylık bitmiş işi gözden geçirin ve her kalemi bir sonuçla veya “hizmeti çalışır tutmak” ile etiketleyin. Dağılımın liderlerin düşündüğüyle uyuşup uyuşmadığını sorun. Sonucu olmayan işi ve sürüp sürmemesi gerektiğini tartışın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları hipotezin ve ölçüm planının sahibidir ve kanıtın erken gelmesi için değişiklikleri küçük adımlarla teslim etmelidir. Göstergeyi değişikliğe yerleştirmeli, örneğin ihtiyaç duydukları olayları günlüğe kaydederek, ve fayda sahibinden gördüklerini doğrulamasını istemelidirler. Takımlar başarısız hipotezleri bilgi olarak karşılamalıdır; çünkü erken öğrenme, yanlış şeyin fazlasını inşa etme maliyetinden tasarruf sağlar.

### Hizmet ve operasyon takımları

Operasyon takımları değişikliklerin olaylar, talepler ve kapasite üzerindeki gerçek etkisini görür. Elle işleme saatleri ve tekrar temaslar gibi gecikmeli göstergeler için verinin büyük kısmını tutarlar ve değişikliği sindirmenin yanı sıra hipotezlerin kontrol edilmesine de yardımcı olmalıdırlar. Kâğıt üzerinde iddia edilen faydalar hizmet masasının gördüğüyle uyuşmadığında sesini çıkarmalıdırlar.

### Liderlik ve yönetişim

Liderler, faydaların bir öğrenme aracı mı yoksa bir satış konuşması mı olacağını seçer. Başlangıç değerlerini ve yöntemleri istemeli, dürüst “karşılanmadı” sonuçlarını memnuniyetle karşılamalı ve takımları, gerçekler bilinmeden belirlenmiş fayda sayılarına bağlı tutmaktan kaçınmalıdır. Yönetişim sicili bir portföy olarak gözden geçirmeli, ölçümü finanse etmeli ve hipotezi başarısız olmuş işi durdurmaya istekli olmalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar bir değişikliğin yardımcı olup olmadığını bilir ve çoğu faydanın en iyi yargıçlarıdır. Kendilerine sorulmalı, sonuçlar gösterilmeli ve bir değişiklik umulanı sağlamadığında bu söylenmelidir. Yorumları kendi başlarına kanıttır. Sayıların gösterdiği ve kullanıcıların hissetmediği bir fayda, daha yakından bakılmayı hak eder.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir sağlık sigortacısının BT grubu, sağlayıcılar için bir talep portalı oluşturur ve işletir. Aşağıdaki sayılar açıklayıcıdır (illustrative).

Grup, talep gönderimine otomatik uygunluk kontrolleri eklemeyi planlar. Talep operasyonları yöneticisiyle birlikte yazılan hipotez şöyledir: “Otomatik uygunluk kontrollerinin, sağlayıcıların faturalama personelinin talepleri ilk seferde doğru göndermesine yardımcı olacağına ve böylece düzeltme için iade edilen taleplerin üç ay içinde yüzde 18'den yüzde 12'ye düşeceğine inanıyoruz. İade edilen talep oranından, 1 Mart tarihinde yapılacak gözden geçirmede bileceğiz.” Başlangıç değeri son 12 haftanın ortalamasıdır: yüzde 18, haftalık aralık yüzde 15 ile 21. Öncü gösterge, ilk ayda kontrolün kullanımıdır. Talep operasyonları yöneticisi fayda sahibidir.

Takım, kontrolün önce bir bölgede kullanıma sunulduğu küçük adımlarla yayına alır. Üç hafta sonra o bölgede kontrolün kullanımı yüzde 64'tür. Gözden geçirme tarihinde iade edilen talepler, kontrolün olduğu bölgede yüzde 13'e, olmayan bölgelerde yüzde 17'ye düşer. Talep yöneticisi, dönemde bir faturalama koduna ilişkin bir politika değişikliğinin de yürürlüğe girdiğine dikkat çeker. Takım bunu bir karıştırıcı olarak listeler ve o koda sahip talepleri her iki gruptan da çıkarır; geriye yüzde 17,5'e karşı yüzde 14 kalır. Fayda gerçekleşmesi “kısmen karşılandı” olarak kaydedilir: başlangıç değerinden açık bir farkla daha iyi, yüzde 12'lik hedefin altında. Takım sicile dürüstçe, kanıtın bir çeyrek boyunca kademeli bir yayından geldiğini ve etkinin diğer sağlayıcılar için farklı olabileceğini yazar.

Ardından kontrolü tüm bölgelere yaymayı, üç ay sonra yeniden kontrol etme planıyla birlikte yaparlar ve sağlayıcıların yorumları mesajın belirsiz olduğunu söylediğinden hata mesajını iyileştirmek için bir görev eklerler. Mali direktör yönetim kurulu için tek bir sayı ister. BT başkanı aralığı ve yöntemi sunar ve kanıtın izin verdiğinden daha fazla kesinlikle bir rakam belirtmeyi reddeder. Karar, bir sonraki gözden geçirme tarihiyle birlikte kaydedilir.

## Sektör mercekleri

**Girişim (startup).** Faydalar gelire ve elde tutmaya yakındır ve öğrenme hızı önemlidir. Kartlara tek satırlık hipotezler yazın, onları hızla kontrol edin ve ağır sicillerden kaçının. Basit karşılaştırmalar kullanın ve küçük örneklemlerin neyi iddia edebileceğinizi sınırladığını kabul edin.

**Küçük işletme.** Sahip, fayda sahibidir ve etkiler görünürdür. Beklenen etkileriyle birlikte kısa bir değişiklik listesi tutun ve her çeyrek gözden geçirin. Küçük kazanımları büyük rakamlara şişirmekten kaçının ve değişikliğin maliyetiyle karşılaştırın.

**Kurumsal.** Portföyler, finansman döngüleri ve birçok paydaş bir fayda sicilini yararlı kılar. Küçük değişiklikler için hafif, büyükler için titiz tutun, sahipleri iş birimlerine yerleştirin ve portföy genelinde gözden geçirin. Sayıların farklı tanımlarla toplulaştırılmasına karşı dikkatli olun.

**Kamu sektörü.** Sonuçlar çoğunlukla erişim, adalet ve güvenlik gibi gelire indirgenemeyen kamusal iyilerdir. Sonuçları hizmet verilen insanlarla tanımlayın, karma kanıt kullanın ve yöntemleri açıkça raporlayın. Resmî iş gerekçeleri ve fayda gözden geçirmeleri gerekli olabilir ve dürüst boş sonuçlar kamusal hesap verebilirlik için önemlidir (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyet esas olarak dikkattir. Bir hipotez yazmak dakikalar, bir başlangıç değeri bir ila birkaç saat, bir gözden geçirme kısa bir toplantı sürer. Deneyler ve kademeli yayınlar tasarım çabası ve biraz araç gerektirir. Bir fayda sicili bir elektronik tablo veya iş izleyicisindeki bir alan olabilir.

Getiri daha iyi yatırım kararlarıdır. Hipotezlerini kontrol eden bir takım, yardımcı olmayan şeyleri inşa etmeyi bırakır, işe yarayanları ölçekler ve ne kadar iyi öngördüğünü öğrenir. Bu, kullanılmayan özelliklerin ve başarısız programların maliyetinden tasarruf sağlar. Gerekçeyi kendi verilerinizden oluşturun: hipotez taşıyan değişikliklerin payı, kontrol edilenlerin payı ve sonradan terk edilen veya geri alınan işin maliyeti. BT projelerinin başarısızlık oranına ilişkin yayımlanmış rakamlardan, kaynaklarını ve yöntemlerini izleyemediğiniz sürece kaçının; çünkü büyük ölçüde değişirler ve çoğunlukla bağlamsız aktarılırlar. Mali ele alış sonraki bölümdedir (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Teslimatı değer saymak.** Yayına alınan bir özellik bir araçtır. İnsanlar üzerindeki etkiyi kontrol edin.
- **Başarısız olamayan hipotezler.** Onları bir sayı ve bir tarihle belirli yapın.
- **Kendi ödevini notlandırmak.** Sonucu takım dışındaki fayda sahibinin yargılamasını sağlayın.
- **Öncesi-sonrasından neden iddia etmek.** Karıştırıcıları listeleyin ve mümkün olduğunda bir karşılaştırma kullanın.
- **Yalnızca zaferleri raporlamak.** Boş ve olumsuz sonuçları kaydedin. Yalnızca başarılardan oluşan bir sicil dürüst değildir.
- **Bireyler için fayda hedefleri belirlemek.** İnsanlara bağlı hedefler şişirilmiş iddiaları davet eder. Faydaları takım ve girişim düzeyinde tutun.
- **Aşırı kesinlik.** Tek bir ondalık sayı değil, aralıkları ve yöntemi raporlayın.
- **Yeni faydası olmayan işi göz ardı etmek.** Onu adlandırın ve onun için bir fayda hikâyesi uydurmayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Değeri belirtme | Faydalar yalnızca iş gerekçelerinde iddia ediliyor | Bazı değişiklikler için hipotezler yazılıyor | Her önemli değişiklik için kısa bir hipotez, başlangıç değeri ve sahip | Hipotezler ve eşikler onayda sabitleniyor; öncü ve gecikmeli göstergeler tanımlı | Hipotezler takımlar ve tedarikçiler arasında paylaşılıyor; sonuçlar kullanıcılarla tanımlanıyor |
| Değeri kontrol etme | Yayın sonrası kontrol yok | Teslimat takımının ara sıra kontrolü | Bağımsız bir sahiple planlı gözden geçirme | Karşılaştırmalar ve karıştırıcılar belgelenmiş; kanıt kalitesi izleniyor | Portföy düzeyinde kanıt finansmana yön veriyor; takımlar arasında paylaşılan deneyler |
| Öğrenme | Zaferler kutlanıyor, başarısızlıklar unutuluyor | Bazı dersler kaydediliyor | Boş sonuçlar kaydedilip gözden geçiriliyor | Kaçırılan hipotezlerdeki örüntüler seçimi ve boyutlandırmayı iyileştiriyor | Öğrenme, kuruluş genelinde ve ortaklarla planlamayı besliyor |

## Kontrol listesi

- [ ] Her önemli değişikliğin başlangıç değeri, göstergesi ve gözden geçirme tarihiyle yazılı bir değer hipotezi var.
- [ ] Her faydanın teslimat takımı dışında bir sahibi var.
- [ ] Öncü ve gecikmeli göstergeler tanımlanmış ve izleniyor.
- [ ] Gözden geçirmeler kararlaştırılan tarihte sahibiyle yapılıyor.
- [ ] Mümkün olan yerlerde karşılaştırmalar veya kademeli yayınlar kullanılıyor.
- [ ] İddia edilen her sonuç için karıştırıcılar listeleniyor.
- [ ] Boş ve olumsuz sonuçlar kaydediliyor ve paylaşılıyor.
- [ ] Kanıt kalitesi fayda iddialarının yanında izleniyor.
- [ ] Hiçbir bireyin kişisel fayda hedefi yok.
- [ ] Üç aylık bir portföy gözden geçirmesi, karşılanan ve kaçırılan hipotezlerdeki örüntülere bakıyor.

## Yapay zekâ istemleri

**Bir değer hipotezi yazın.**

```text
[kurum türü] içinde [kullanıcılar veya paydaşlar] için [değişikliği
tanımlayın] yapmayı planlıyoruz. Bugünkü sorun: [tanımlayın]. “[Değişiklik]
işinin, [kim]in [ne yapmasına] yardımcı olacağına ve böylece [ölçülebilir
iyileşme] sağlanacağına inanıyoruz. [Gösterge] ile bileceğiz...” biçiminde bir
değer hipotezi taslağı hazırlayın. Bir öncü ve bir gecikmeli gösterge, hangi
başlangıç değerine ihtiyaç duyduğumuzu ve bir gözden geçirme tarihi mantığı
önerin. Hedef değerleri uydurmayın; onları bizim için yer tutucu olarak
bırakın. Varsayımlarınızı ve öğrenmemiz gerekenleri listeleyin.
```

**İddia edilen bir sonuç için karıştırıcıları listeleyin.**

```text
[tarihler] arasında [değişikliğin] [göstergeyi] [öncesinden] [sonrasına]
iyileştirdiğini iddia ediyoruz. Dönemde olan diğer şeyler: [liste]. Makul
karıştırıcı etkenleri, her birinin sonucu nasıl açıklayabileceğini ve hangi veri
veya karşılaştırmanın bunu dışlamaya yardımcı olacağını listeleyin. Kanıtın neyi
desteklediğini belirten bir ifade önerin. Verinin destekleyemeyeceği bir neden
varsaymayın. Varsayımlarınızı listeleyin.
```

**Kademeli bir yayın karşılaştırması tasarlayın.**

```text
[değişikliği], farklı zamanlarda [sayı] gruba yayımlayabiliriz: [grupları ve
kısıtları tanımlayın]. Değişikliği almış ve almamış grupları karşılaştırmamıza
olanak veren kademeli bir yayın önerin, hangi göstergenin ve dönemin
kullanılacağını, karşılaştırmayı neyin yanıltabileceğini ve farklı sonuçlardan
ne çıkaracağımızı söyleyin. Etki büyüklüğü uydurmayın. Varsayımlarınızı ve
riskleri listeleyin.
```

**Bir fayda sicili kaydını gözden geçirin.**

```text
[girişim] için bu fayda sicili kaydını gözden geçirin: [iddia, başlangıç değeri,
yöntem, sahip ve gözden geçirme tarihi dahil kaydı yapıştırın]. Eksik bilgileri,
belirsiz ifadeleri, kanıtın desteklemediği iddiaları ve sonucun nasıl
oynanabileceğini belirtin. Gerçekte ölçtüğümüze uyan daha güçlü bir ifade
önerin. Varsayımlarınızı ve sahibe soracağım soruları listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir değer veya sonuç metriğini raporlamadan önce eşlenen koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir fayda metriği kaydının oynama vektörünü, koruma önlemini ve kanıt standardını taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- İnşa etmeden önce, bir başlangıç değeri, takım dışında bir sahip ve bir gözden geçirme tarihiyle kontrol edilebilir bir değer hipotezi yazın.
- Yönlendirmek için öncü, doğrulamak için gecikmeli göstergeler kullanın.
- Mümkün olan yerde karşılaştırın, karıştırıcıları listeleyin ve yalnızca kanıtın desteklediğini iddia edin.
- Boş ve olumsuz sonuçları kaydedin; tekdüze başarıdan oluşan bir sicil dürüst değildir.
- Kanıtın kalitesini iddianın büyüklüğünün yanında izleyin.
- Sonuç doğrulanana kadar paydaşların ve kullanıcıların iş birliğini sürdürün.

## Kaynaklar ve ileri okuma

1. Ward, J., and Daniel, E., *Benefits Management: How to Increase the Business Value of Your IT Projects*, 2nd ed., Wiley, 2012.
2. Doerr, J., *Measure What Matters*, Portfolio/Penguin, 2018.
3. Kohavi, R., Tang, D., and Xu, Y., *Trustworthy Online Controlled Experiments*, Cambridge University Press, 2020.
4. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd ed., Wiley, 2014.
5. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Benefits realisation management](https://en.wikipedia.org/wiki/Benefits_realisation_management).
8. Wikipedia, [Theory of change](https://en.wikipedia.org/wiki/Theory_of_change).
9. Wikipedia, [Logic model](https://en.wikipedia.org/wiki/Logic_model).
10. Wikipedia, [Leading indicator](https://en.wikipedia.org/wiki/Leading_indicator).
11. Wikipedia, [Lagging indicator](https://en.wikipedia.org/wiki/Lagging_indicator).
12. Wikipedia, [Objectives and key results](https://en.wikipedia.org/wiki/Objectives_and_key_results).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
14. Wikipedia, [A/B testing](https://en.wikipedia.org/wiki/A/B_testing).
15. Wikipedia, [Difference in differences](https://en.wikipedia.org/wiki/Difference_in_differences).
16. Wikipedia, [Confounding](https://en.wikipedia.org/wiki/Confounding).
17. Wikipedia, [Survivorship bias](https://en.wikipedia.org/wiki/Survivorship_bias).
