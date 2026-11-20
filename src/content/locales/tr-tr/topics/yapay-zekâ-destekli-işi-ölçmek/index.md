# Yapay zekâ destekli işi ölçmek

**Yapay zekâ destekli işi ne kadar hızlı ortaya çıktığına göre değil, inceleme, üretim ve kullanıcının bir sonraki temasından sonra neyin ayakta kaldığına göre değerlendirin ve işi yapan insanların hâlâ öğrenip öğrenmediğini izlemeyi sürdürün.**

## Genel bakış ve motivasyon

Bir takım yapay zekâ araçlarını her gün kullanmaya başladığında, temel soru “yapmalı mıyız?” sorusundan “ne elde ediyoruz?” sorusuna dönüşür. Önceki konu temelleri ortaya koydu: referans değerler, karşılaştırmalar ve tam maliyet (bkz. Konu 10.1 “Hizmet yönetimi ölçümünde yapay zekâ”). Bu konu işin kendisine girer. Yapay zekâ destekli kodun, biletlerin, belgelerin ve kararların, yerini aldıkları işten daha iyi, aynı ya da daha kötü olup olmadığını ve bunu yapan insanlara ne olduğunu nasıl anlarsınız?

Yapay zekâ desteği birçok iş türüne dokunur. Yazılım teslimatında araçlar kod, test, işleme (commit) iletileri ve inceleme yorumları önerir ya da üretir. Hizmet operasyonlarında olayları özetler, nedenler önerir, yanıtlar taslaklar ve bilgi makaleleri yazar. Analizde raporlar ve sorgular üretir. Ortak özellik, makul bir ilk sürümü üretmenin ucuzlamasıdır. Maliyetler başka yerlere kayar: çıktıyı okumak ve yargılamak, yanlış olanı düzeltmek, üretileni sürdürmek ve farkı bilecek kadar öğrenmek.

Birkaç etki ölçümü zorlaştırır.

- **Çıktı sayıları yanıltır.** [Kod satırı sayısı](https://en.wikipedia.org/wiki/Lines_of_code) her zaman verimlilik için zayıf bir ölçüt oldu ve üretilmiş kod bunu daha da kötüleştirir. Daha fazla kod, okunacak, test edilecek ve sürdürülecek daha fazla şey demektir. Üretilmiş satırların, kabul edilen önerilerin ya da taslakların sayısı değer hakkında çok az şey söyler.
- **İnceleme darboğaz olur.** [Kod incelemesi](https://en.wikipedia.org/wiki/Code_review) ve diğer üretilmiş işlerin incelenmesi zaman alır; daha büyük ve daha sık değişiklik akışı inceleyicileri aşırı yükleyebilir. Büyük [çekme istekleri](https://en.wikipedia.org/wiki/Pull_request) iyi incelenmesi daha zor olanlardır ve aşırı yüklü bir inceleyicinin anlamadığı şeyi onaylama olasılığı daha yüksektir. Daha önceki inceleme ve akış ölçütleri vazgeçilmez kalır (bkz. Konu 2.7 “Çekme isteği ve kod inceleme metrikleri”).
- **Kalite sorunları geç ortaya çıkar.** Üretilmiş kod bugün testleri geçebilir ve [yinelenen kod](https://en.wikipedia.org/wiki/Duplicate_code), belirsiz yapı ya da bakım maliyeti olarak ortaya çıkan, bir [teknik borç](https://en.wikipedia.org/wiki/Technical_debt) biçimi olan gizli kusurlar taşıyabilir. Oluşturma anında alınan ölçütler bunu kaçırır. İşe sonradan ne olduğuna bakın.
- **Beceriler değişebilir.** Eskiden kişinin kendisinin yaptığı görevler için bir araca güvenmek bir [bilişsel yük aktarımı](https://en.wikipedia.org/wiki/Cognitive_offloading) biçimidir; bu, dikkati daha zor sorunlara serbest bırakabilir ya da altta yatan kavrayış sönerse [beceri kaybına](https://en.wikipedia.org/wiki/Deskilling) yol açabilir. İkisi de mümkündür ve sonuç araçların nasıl kullanıldığına bağlıdır. Bu durum ilgili kişiler için ve takımın aracın başa çıkamadığı durumlarla başa çıkabilmesi için önemlidir.

Yapay zekâ desteğinin verimlilik üzerindeki etkisine dair kanıt hâlâ gelişmektedir ve göreve, kullanıcının deneyimine, araca ve ortama göre değişir. Kodlama görevlerine ilişkin bazı kontrollü çalışmalar iyi tanımlanmış görevlerde daha hızlı tamamlama bulmuştur; diğer çalışmalar ve raporlar ise iyi bildikleri karmaşık sistemlerde çalışan deneyimli kişiler için daha küçük kazançlar, hiç kazanç ya da ek maliyetler bulmuştur. Bu kitap bir sayı sunmaz. Bir takım için sorumlu duruş, kendi işini referans değerler ve karşılaştırmayla ölçmek ve yayımlanmış her rakamı belirli bir bağlamdaki tek bir çalışma olarak ele almaktır.

[Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi burada özellikle önemlidir; çünkü kazanç gösterme baskısı güçtür ve kolay sayılar yanıltıcı olanlardır. Aşağıdaki ölçütler üretilenin değil, ayakta kalanın izini sürer (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Ayakta kalanı ölçün.** Kalıcılık, yeniden iş ve kaçan kusurlar çıktıdan daha çok şey söyler.
- **İncelemeyi izleyin.** Yapay zekâ destekli işin akışı, insanların onu ne kadar iyi okuyabildiğiyle sınırlıdır.
- **Benzeri benzeriyle karşılaştırın.** Destekli ve desteksiz iş tür ve zorluk bakımından benzer olmalıdır.
- **Yalnızca şimdiye değil, sonrasına da bakın.** Kalite sorunları ve bakım maliyetleri oluşturmadan haftalar ya da aylar sonra ortaya çıkar.
- **Kavrayışı döngüde tutun.** İşi teslim eden kişi onu açıklayabilmelidir.
- **Becerileri ve öğrenmeyi koruyun.** İnsanların araç olmadan hâlâ neler yapabildiğini fark edin.
- **Toplulaştırın; bireyleri izlemeyin.** Yapay zekâyı kimin nasıl kullandığına dair veri süreci iyileştirmek içindir, insanları sıralamak için değil.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kalıcılık oranı | Belirli bir süre sonra büyük ölçüde değişmeden kalan yapay zekâ destekli değişikliklerin payı | 30 gün sonra belirli bir paydan azı değiştirilmiş veya geri alınmış yapay zekâ destekli değişiklikler / 30 gün önce birleştirilen yapay zekâ destekli değişiklikler | yüzde | Destek etiketleriyle birleştirilmiş sürüm kontrolü geçmişi, takım düzeyinde | Yayın ve dağıtım yönetimi; değişiklik yetkilendirme | Kalıcı olan iş; düşük yeniden iş | Aylık |
| Birleştirme sonrası yeniden iş | Kısa bir süre içinde takip düzeltmesi gerektiren değişikliklerin, destekli ve karşılaştırma değişiklikleri için payı | 14 gün içinde bağlantılı bir takip düzeltmesi olan değişiklikler / birleştirilen değişiklikler, grup başına | yüzde | Sürüm kontrolü, sorun izleyici, değişiklik kayıtları | Değişiklik yetkilendirme; sorun yönetimi | Kaçan kusurlar; yeniden iş | Aylık |
| İnceleme yükü | Destekli ve karşılaştırma değişiklikleri için değişiklik başına inceleyici emeği | değişiklik başına inceleme süresinin ve inceleme turlarının medyanı ve 85. yüzdeliği, grup başına | saat; tur | İnceleme aracı zaman damgaları, takıma göre toplulaştırılmış | Yayın ve dağıtım yönetimi | Geri bildirim ve öğrenme olarak inceleme | Aylık |
| Kaçan kusur oranı | Destekli ve karşılaştırma değişiklikleri için değişiklik başına üretimde bulunan kusurlar | yayından sonra bulunan ve bir değişikliğe atfedilen kusurlar / yayımlanan değişiklikler, grup başına | değişiklik başına kusur | Değişikliklere bağlı kusur izleyici | Olay yönetimi; sorun yönetimi | Yayımlananın kalitesi | Üç ayda bir |
| Açıklama kontrolü geçme oranı | Yazarı, yaklaşımı ve ödünleşimlerini incelemede açıklayabilen, örneklenmiş yapay zekâ destekli değişikliklerin payı | yazarın inceleyiciyi tatmin edecek biçimde açıkladığı örneklenmiş değişiklikler / örneklenmiş değişiklikler | yüzde | Örneklenmiş inceleme notları | Bilgi yönetimi; değişiklik yetkilendirme | Kod üzerinde ortak kavrayış | Üç ayda bir |
| Destekli destek kalitesi | Yapay zekâ destekli destek yanıtları için, desteksiz olanlarla karşılaştırılan yeniden açılma oranı ve kullanıcı memnuniyeti | yeniden açılan destekli biletler / destekli biletler ve olumlu derecelendirmeler / derecelendirmeler, grup başına | yüzde | ITSM aracı, anket | Hizmet masası; olay yönetimi | Hizmet sonuçlarının kalitesi | Aylık |
| Desteksiz güven derecelendirmesi | Takımın, temel görevleri araç olmadan yapabilme güvenine ilişkin derecelendirmesi | üzerinde anlaşılmış bir ölçekte ortalama derecelendirme ve dağılım, takım başına | ölçek puanı | Anonim takım nabız anketi | İş gücü ve yetenek yönetimi; bilgi yönetimi | Takım yeteneği ve öğrenme | Üç ayda bir |

Yapay zekâ desteğini takım düzeyinde, araç günlükleri ya da hafif bir gelenekle güvenilir biçimde etiketleyin ve karşılaştırma değişikliklerinin nasıl seçildiğini belirtin: boyut, alan ve risk bakımından benzer. Kalıcılık, kayıtta belirlenen bir eşikle büyük ölçüde değişimi ölçer. Birleştirme sonrası yeniden iş, bir takip düzeltmesini belirtilen bir kuralla özgün değişikliğe bağlar. İnceleme yükü yazarın değil, inceleyicinin emeğidir ve ölçülebiliyorsa yalnızca etkin inceleme süresini içerir. Bireysel düzeydeki veriler asla raporlanmaz. Açıklama kontrolü için örnekler rastgele seçilir ve kontrol bir kişiyi sınamak değil, öğrenmeyi desteklemek için yapılan bir sohbettir.

## Öneriler

### İş oluşturulduktan sonra onu izleyin

**1. Destekli işe zaman içinde ne olduğunu izleyin.** Kod için, birleştirmeden sonra değişiklikleri haftalarca izleyin: kalıyorlar mı, düzeltiliyorlar mı, geri alınıyorlar mı? Destek için, yanıttan sonra biletleri izleyin: yeniden açılıyor ya da tekrar temaslarla mı izleniyor? Belgeler için kullanılıp kullanılmadığına, düzeltilip düzeltilmediğine ya da yok sayılıp sayılmadığına bakın. Kalıcılık ve yeniden iş, kalitenin basit ve taklit edilmesi zor sinyalleridir.

**2. Benzer desteksiz işle karşılaştırın.** Aynı dönemden, benzer boyut, risk ve alanda karşılaştırma işi seçin. Zorluk önemlidir: insanlar yapay zekâyı kolay görevlerde kullanabilir ki bu aracı kayırır, ya da zor görevlerde kullanabilir ki bu aracı cezalandırır. Görevlerin nasıl destekli hâle geldiğini belirtin ve buna göre düzeltin ya da çekince koyun. Küçük ve dürüst bir karşılaştırma, büyük ve karışık bir karşılaştırmadan iyidir (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”).

**3. Aşağı akış ölçütlerini standart kümeye dâhil edin.** Herhangi bir hız ölçütünü değişiklik başarısızlık oranı, kaçan kusurlar ve zaten kullanımda olan kararlılık ölçütleriyle eşleştirin (bkz. Konu 2.8 “DORA metrikleri”). Kararlılığın düştüğü bir hız kazancı, maliyetin operasyonlara ve kullanıcılara aktarılmasıdır. Çifti birlikte raporlayın.

### İncelemeyi anlamlı tutun

**4. İnceleme yükünü ve boyutunu izleyin.** Destekli ve desteksiz iş için inceleme süresini, inceleme turlarını ve değişiklik boyutunu ölçün. Destekli değişiklikler daha büyük ya da daha fazlaysa inceleyiciler aşırı yüklenmiş olabilir. Değişiklik boyutu için normlar belirleyin ve tek bir incelemeye girebilecek üretilmiş malzeme miktarını sınırlayın. İnceleme kapasitesi sistemin kapasitesinin bir parçasıdır (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”).

**5. Yazarlardan açıklama isteyin.** Bir değişikliğin yazarının ne yaptığını, neden bu yaklaşımı seçtiğini ve ödünleşimlerin neler olduğunu açıklayabilmesini bir alışkanlık hâline getirin. İncelemede kısa, destekleyici bir sohbet yeterlidir. Kavrayışın çıktıya yetişip yetişmediğini görmek için açıklama kontrollerini üç ayda bir örnekleyin. Yazarların açıklayamadığı yerlerde bunu kişinin bir başarısızlığı olarak değil, yavaşlamak ve öğrenmek için bir sinyal olarak ele alın.

**6. Otomasyon yanlılığına karşı önlem alın.** İnceleyicileri destekli işi diğer her iş kadar eleştirel okumaya teşvik edin. İnceleyicileri dönüşümlü çalıştırın, tespiti denetlemek için ara sıra bir test değişikliğine bilinen sorunlar yerleştirin ve çıktıların bağımsız inceleyicilerce örneklenmesini sürdürün. Artan yeniden işle birlikte çok yüksek bir kabul oranı bir uyarıdır (bkz. Konu 10.1 “Hizmet yönetimi ölçümünde yapay zekâ”).

### Kaliteye ve bakıma özen gösterin

**7. Kodun ve sistemin yapısını izleyin.** Desteğin yoğun olduğu alanlarda yinelenmeyi, karmaşıklığı, test kapsamını ve değişim oranını izleyin. [Yazılım testi](https://en.wikipedia.org/wiki/Software_testing) ve kod sağlığı için zaten sahip olduğunuz ölçütleri kullanın ve eğilimlere bakın. Artan yinelenme ya da düşen test etkinliği, üretilmiş kodun tasarıma entegre edilmeden kabul edildiğine işaret edebilir. [Gerileme testi](https://en.wikipedia.org/wiki/Regression_testing) kapsamı bir güvenlik ağıdır ve değişim hacmi arttığında gücü daha da önemlidir.

**8. Üretilmiş testlere özen gösterin.** Yapay zekâ hızla çok sayıda test yazabilir ve testler anlamlı hiçbir şeyi denetlemeden geçebilir. Üretilmiş testleri değer için örnekleyin ve test etkinliğini, davranış kasıtlı olarak bozulduğunda testlerin başarısız olup olmadığı gibi yöntemlerle ölçün. Yazılan testleri bir kalite ölçütü olarak saymayın.

**9. Destekli desteğin kalitesini izleyin.** Hizmet masası ve operasyonlar için yeniden açılma oranını, tekrar temasları, memnuniyeti ve örneklenen yanıtların doğruluğunu destekli ve desteksiz yanıtlar için ölçün. Kullanıcıyı geri gönderen hızlı bir yanıt, bütünde daha yavaştır. Destekli yanıtlara ilişkin kullanıcı yorumlarını okuyun ve önemli olduğunda kullanıcıların yapay zekâ ile muhatap olduklarını bilip bilmediğine bakın (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

### İnsanları ve becerileri koruyun

**10. İnsanların hâlâ neler yapabildiğini fark edin.** Takımlara temel görevleri araç olmadan yapma konusunda ne kadar güvendiklerini sorun ve eğilimi izleyin. Becerileri canlı tutmak için ara sıra desteksiz uygulama, eşli çalışma ve altta yatan tasarımın incelemelerini kullanın. Özellikle daha yeni takım üyelerinin öğrenmesini koruyun; onlar, deneyimli meslektaşların aracı yargılamak için dayandığı zihinsel modelleri kurmadan önce aracı kullanıyor olabilir (bkz. Konu 9.4 “Beceri ve öğrenme metrikleri”).

**11. İnsanlara ilişkin verileri değerlendirmenin dışında tutun.** Takım düzeyinde toplulaştırın. Yapay zekâyı en çok hangi bireylerin kullandığını raporlamayın ve kullanımı, kabul oranını ya da üretilen hacmi performans değerlendirmelerinde kullanmayın. Kuralları herkese duyurun. Neyin işe yaradığına ve neyin yaramadığına dair dürüst raporlar için güven gerekir.

**12. Düzenli olarak yeniden gözden geçirin.** Araçlar, modeller ve uygulamalar aylar içinde değişir. Araç ya da çalışma biçimi değiştiğinde karşılaştırmayı yeniden yapın. Bulguları, bir aracın burada yardımcı olmadığı da dâhil, paylaşın ve yerini hak etmeyen kullanımları emekliye ayırın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Kalıcılık oranı | Sayıyı yüksek tutmak için gerekli değişikliklerden kaçınmak; yalnızca başarılı değişiklikleri destekli olarak etiketlemek | Yazarın seçimiyle değil, araç günlükleriyle etiketleyin; kaçan kusurlar ve yeniden işle eşleştirin |
| Birleştirme sonrası yeniden iş | Farklı bir biletle ya da bağlantısız yeni bir değişiklikle düzeltmek; düzeltmeleri pencerenin ötesine ertelemek | Kayıtta bağlama kuralı; daha uzun bir pencereye bakın; üretim kusurları |
| İnceleme yükü | Ölçülen süreyi düşüren aceleci incelemeler; yorumsuz onaylar | İnceleme derinliği örneği; kaçan kusurlar; inceleyici anketi |
| Kaçan kusur oranı | Kusurları değişikliklere atfetmemek; kusurları iyileştirme olarak yeniden sınıflandırmak | Atıf kuralı; kusur sınıflandırmasının bağımsız örneği |
| Açıklama kontrolü geçme oranı | Yazarların kontrole prova yapması; yumuşak inceleyiciler | Rastgele, duyurusuz örnekler; inceleyicileri dönüşümlü çalıştırın; tasarım gerekçelerine odaklanın |
| Destekli destek kalitesi | Yalnızca kolay biletlerde destek almak; kullanıcıları yüksek puan vermeye yönlendirmek | Biletleri tür ve zorluğa göre eşleştirin; yanıt oranı ve dağılım; yorumları okuyun |
| Desteksiz güven derecelendirmesi | Denetimden kaçınmak için şişirilmiş puanlar; daha fazla araç savunmak için düşük puanlar | Anonimlik; tatbikatlarda gözlenen uygulamayla karşılaştırın; yorumları okuyun |

Sağlıklı bir okuma şöyledir: desteksiz işle aynı sıklıkta yerinde kalan destekli iş, karşılaştırmaya eşit ya da onu aşan yeniden iş ve kaçan kusur, derin kalan inceleme, teslim ettiklerini açıklayabilen yazarlar, geri dönmeyen destekli destek ve kendi becerilerine güvenini koruyan takımlar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Çıktı hacmini ölçmek | Kolay | Hacmi ödüllendirir; değer hakkında hiçbir şey söylemez |
| Kalıcılığı ve yeniden işi ölçmek | Zaman içindeki kaliteyi yansıtır | Gecikmeli; kayıtların bağlanmasını gerektirir |
| Kontrollü karşılaştırma | İnandırıcı | Emek gerektirir; pratik olmayabilir |
| Gözlemsel karşılaştırma | Ucuz | Görev seçimiyle karışır |
| Zorunlu açıklama kontrolleri | Kavrayışı sürdürür | Sınav gibi hissettirebilir; emek ekler |
| Hafif örneklemeli kontroller | Düşük yük | Örüntüleri kaçırabilir |
| Yapay zekâ kullanımına ağır kısıtlamalar | Riskin kontrolü | Kaybedilen fayda; gölge kullanım |
| Ölçümle açık kullanım | Öğrenme ve fayda | Güven ve disiplin gerektirir |

Düzyazı yanıt şudur: kullanıma açık kurallar çerçevesinde izin verin, ayakta kalanı ölçün, kavrayış için örnekleyin, inceleme kapasitesini ve becerileri koruyun ve insanlara ilişkin verileri değerlendirmenin dışında tutun.

## Takımınızla tartışılacak sorular

**1. Yapay zekânın geçen çeyrekte üretmemize yardım ettiklerinin ne kadarı hâlâ yerinde ve değişmemiş durumda, bunu nasıl biliyoruz?**
Destekli değişiklikler için kalıcılığa ve yeniden işe karşılaştırılabilir bir kümeyle kıyaslayarak bakın. Kolaylaştırıcı, yanıtlamanın ne kadar zor olduğunu kaydetmelidir. Gelecek çeyrekte yanıtın kolay olması için kayıtları nasıl etiketleyip bağlayacağınız üzerinde anlaşın.

**2. İnceleme yetişiyor mu ve yetişmediğinde ne oluyor?**
İnceleme sürelerine, turlarına ve boyutlarına bakın. İnceleyicilere destekli değişiklikler hakkında ne hissettiklerini sorun. Boyut sınırlarını ve yükü paylaşma yollarını tartışın. Denenecek bir norm üzerinde anlaşın.

**3. Her birimiz yapay zekâ yardımıyla teslim ettiğimiz son değişikliği ve ödünleşimlerini açıklayabilir miydik?**
Bunu ikili gruplarda deneyin. Açıklamanın nerede kolay, nerede zor olduğunu fark edin. Bunun aracı kullanımımız hakkında ne söylediğini ve kavrayışı nasıl yüksek tutacağımızı tartışın.

**4. Araç olmadan hâlâ neyi iyi yapabiliyoruz ve hangisinin ustalığını kaybediyoruz?**
Temel görevleri listeleyin, güveninizi dürüstçe derecelendirin ve desteksiz uygulama ya da eşli çalışma planlayın. Sohbet ayrıca insanların işlerinde neye değer verdiğini ve neyi korumak istediğini ortaya çıkarır.

**5. Yapay zekâ bize en çok ve en az nerede yardımcı oldu ve bu yerlerin ortak yanı nedir?**
Örnekleri karşılaştırın. İyi tanımlanmış görevler, iyi testler ya da tanıdık alanlar gibi özellikleri arayın. Bulguları aracın nerede kullanılacağına yön vermek için kullanın.

**6. İlk izlenimlerimize güvenmeseydik neyi ölçerdik?**
Gruptan, araç hakkındaki fikirlerini her iki yönde de değiştirecek kanıtı adlandırmasını isteyin. Yanıtları bir sonraki karşılaştırmayı tanımlamak için kullanın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları günlük deneyime ve kalite sonuçlarına sahiptir. Destekli işi etiketlemeli, kalıcılığı ve yeniden işi izlemeli, incelemeyi anlamlı tutmalı ve kendi kavrayışlarını sürdürmelidir. Üretilen değişiklik hacmi, onu inceleme yeteneklerini aştığında sesini yükseltmelidirler.

### Hizmet ve operasyon takımları

Operasyon takımları yapay zekâyı özetler, tanı ve yanıtlar için kullanır ve kaçan kalite sorunlarını devralır. Çıktıları örneklemeli, yeniden açılma ve tekrar temas oranlarını karşılaştırmalı ve üretimdeki eylemler için insan sorumluluğunu net tutmalıdır. Yapay zekânın bir insan olmadan nerede eylemde bulunmaması gerektiğini tanımlamaya yardım etmelidirler.

### Liderlik ve yönetişim

Liderler kazanç gösterme baskısıyla karşı karşıyadır ve kullanım ile çıktı ölçütlerine kapılabilirler. Hızın yanında kalıcılık, yeniden iş ve kararlılık ölçütlerinde ısrar etmeli, inceleme kapasitesini finanse etmeli, beceri gelişimini korumalı ve insanları sıralamaya direnmelidir. Yönetişim, yapay zekâ fayda raporlarında karşılaştırmalar ve çekinceler beklemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar sonuçları alır: hizmetlerini çalıştıran kod, taleplerine yanıtlar, güvendikleri belgeler. Kalite korunduğunda yarar görür, korunmadığında zarar görürler. Bir insana ulaşabilmeleri gerekir ve destekli etkileşimlere ilişkin geri bildirimleri kalitenin temel kanıtıdır.

## Uygulamada: çevik bir ITIL örneği

Bir Avrupa havayolunun dijital grubunda rezervasyon ve operasyon yazılımı geliştiren ve işleten altı ürün takımı vardır. Takımlar bir yıl önce bir yapay zekâ kodlama asistanı kullanmaya başladı ve grubun panosu birleştirilen satırların yüzde 38'inin yapay zekâ tarafından üretildiğini raporluyor. Aşağıdaki sayılar açıklayıcıdır.

Mühendislik mükemmelliği sorumlusu bu panodan rahatsızdır. Üç takımdan, destekli değişiklikleri yalnızca takım düzeyinde, aracın günlükleri aracılığıyla etiketlemelerini ve boyut ve alan bakımından benzer karşılaştırma değişiklikleri seçmelerini ister. Bir çeyrek boyunca, ilk işlemeden birleştirmeye medyan süre destekli değişiklikler için 2,0 güne karşılık 1,4 gün ile daha kısadır. Destekli değişikliklerin 30 gün sonraki kalıcılık oranı karşılaştırma değişikliklerinde yüzde 90 iken yüzde 81'dir ve destekli değişikliklerin yüzde 12'si 14 gün içinde takip düzeltmesi gerektirmiştir; karşılaştırmada bu oran yüzde 7'dir. İnceleme yükü de aynı hikâyeyi anlatır: değişiklik başına medyan inceleme süresi destekli değişikliklerde yüzde 35 daha yüksektir ve değişiklik boyutunun 85. yüzdeliği büyümüştür. Her 100 değişiklik başına kaçan kusurlar destekli değişikliklerde biraz daha yüksektir, ancak örnek küçüktür ve fark normal değişim içindedir. 40 destekli değişiklikten oluşan bir örnek, 31'inde yazarın yaklaşımı ve ödünleşimlerini iyi açıklayabildiğini, 6'sında kısmen, 3'ünde ise hiç açıklayamadığını, bunların çoğunun yazar için yeni olan kod alanlarında olduğunu gösterir. Hizmet masasında destekli yanıtların yeniden açılma oranı desteksiz olanlar için yüzde 6'ya karşılık yüzde 7'dir ve memnuniyet benzerdir. Bir takım nabız anketinde, daha yeni mühendisler temel özellikleri araç olmadan geliştirme güvenlerini 5 üzerinden 2,6 olarak, grupta üç yıldan fazla çalışan mühendisler ise 4,1 olarak derecelendirir.

Mühendislik mükemmelliği sorumlusu sonuçları takımlara götürür ve onları sıralamaz. Takımlar dört değişiklik üzerinde anlaşır. Değişiklik boyutu sınırları ve bir inceleme nöbet çizelgesi inceleyicileri korur. Yazarlar destekli değişiklikleri incelemede kısaca açıklar. Daha yeni mühendisler temel özellikler için deneyimli olanlarla eşli çalışır ve aylık desteksiz bir alıştırma becerileri uygulamada tutar. Pano üretilmiş satır payını bırakır ve destekli iş ile karşılaştırmayı yan yana, kalıcılık, yeniden iş, inceleme yükü ve kaçan kusurlar olarak gösterir. Üç ay sonra kalıcılık farkı 4 puana daralır, takip düzeltmeleri yüzde 8'e düşer ve açıklama kontrolü iyileşir. Bir başkan yardımcısı, üretilmiş satır payının her takım için bir hedef olmasını ister. Mühendislik mükemmelliği sorumlusu bulguları açıklar ve sonuçları izlemeyi sürdürmeyi önerir; kazançların bazı görevlerde gerçek, bazılarında ise olmadığını ve aracın nerede kullanılacağına takımın karar vereceğini ekler. Karar kaydedilir.

## Sektör mercekleri

**Girişim (startup).** Küçük takımlar destekten çok kazanç sağlayabilir ve aynı zamanda gizli borcu hızla biriktirebilir. Erkenden kalıcılığı ve yeniden işi izleyin, testleri anlamlı tutun ve sistemi sürdürecek kişilerin onu anlamasını sağlayın. Kimsenin açıklayamadığı kodu teslim etmekten kaçının.

**Küçük işletme.** Destek, küçücük bir takımı genişletebilir. Küçük bir örnek üzerinde ölçün: destekli işin sonradan ne sıklıkla düzeltilmesi gerektiği. Yedekleri, testleri ve müşteriye dönük her şeyin insan incelemesini sürdürün ve sahibinin bağımlı olduğu sistemleri anlamasını koruyun.

**Kurumsal.** Ölçek hem kazançları hem sorunları büyütür. Etiketleme, inceleme sınırları ve ölçütler üzerine ortak rehberlik sağlayın, takımlar arasında sıralama yapmadan dikkatle karşılaştırın ve inceleme ile test kapasitesine yatırım yapın. Üretilmiş kodun güvenlik ve lisans incelemesini hatta dâhil edin (bkz. Konu 7.2 “Yazılım varlığı ve lisans metrikleri”).

**Hükûmet ve kamu sektörü.** Kamu sistemlerinin ömrü uzun, hesap verebilirliği katı ve hatanın sonuçları yüksektir. İzlenebilir insan sorumluluğu, dikkatli test ve yapay zekânın nasıl kullanıldığının dokümantasyonunu şart koşun. Destekli işi değişiklik kayıtlarına işleyin ve adalet ile güvenliğe yönelik riskleri değerlendirin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler; araç ve kullanım ücretleri, kayıtları etiketleme ve bağlama emeği, inceleme ve düzeltme süresi, ek test ve eğitimdir. Bir karşılaştırma çalışması zaman alır, ancak ölçeklemeye ya da yasaklamaya dair yanlış bir karara göre ucuzdur.

Getiriler, desteğin kaliteyi düşürmeden emeği azalttığı yerde gerçektir ve emeği inceleme, yeniden iş ve bakıma kaydırdığı yerde kaybolur. Gerekçeyi kendi ölçütlerinizden oluşturun: birleştirilmiş ve kalıcı bir değişikliğe kadar geçen süre, karşılaştırmaya göre yeniden iş ve kaçan kusurlar, inceleme yükü ve kullanıcıların ile çalışanların memnuniyeti. Yayımlanmış verimlilik rakamlarını tahmininiz olarak kullanmaktan kaçının. Gizli maliyetleri unutmayın: azalan kavrayış, beceri kaybı ve teknik borç. Belirsizlik konusunda dürüst olun (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Üretilen satırları ya da kabul edilen önerileri saymak.** Hacmi ödüllendirirler. Ayakta kalanı ölçün.
- **Kolay görevlerdeki destekli işi zor görevlerdeki desteksiz işle karşılaştırmak.** Sonuç aracı kayırır ya da cezalandırır. Görevleri eşleştirin.
- **İnceleme kapasitesinin geride kalmasına izin vermek.** Kalite sessizce düşer. Değişiklik boyutunu sınırlayın ve inceleyicileri koruyun.
- **Aşağı akış ölçütlerini atlamak.** Maliyet sonradan ortaya çıkar. Yeniden işi, kusurları ve kararlılığı izleyin.
- **Üretilmiş testleri kalite saymak.** Hiçbir şeyi denetlemeden geçebilirler. Testleri test edin.
- **Becerileri göz ardı etmek.** Kavrayış fark edilmeden söner. Desteksiz güveni ve uygulamayı izleyin.
- **Bireyleri izlemek.** Korku üretir ve sorunları gizler. Verileri takım düzeyinde tutun.
- **Kısa ve küçük bir çalışmayla zafer ilan etmek.** Araçlar ve uygulamalar değiştikçe yeniden yapın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Ayakta kalanı ölçmek | Çıktı sayıları | Kaliteye dair gayriresmî izlenimler | Destekli iş etiketlenir; kalıcılık ve yeniden iş karşılaştırmaya karşı izlenir | Aşağı akış kusurları, kararlılık ve inceleme yükü birlikte yönetilir | Takımlar arası kanıt, desteğin nerede kullanılacağına yön verir; sonuçlar geniş biçimde paylaşılır |
| İnceleme ve kavrayış | Eskisi gibi inceleme | Aşırı yük konusunda kaygı | Değişiklik boyutu normları; açıklama kontrolleri örneklenir | İnceleme kapasitesi planlanır; otomasyon yanlılığına karşı önlem alınır | İnceleme ve kavrayış, tüm takımların yapay zekâyla çalışma biçimine yerleşir |
| İnsanlar ve beceriler | Dikkate alınmaz | Anekdotlar | Desteksiz güven nabız anketiyle ölçülür; bir miktar uygulama | Beceri gelişimi planlanır; eğilimler yönetilir | Öğrenme ve zanaat kurum genelinde korunur; yapay zekâ kullanımı çalışanlarla birlikte tasarlanır |

## Kontrol listesi

- [ ] Yapay zekâ destekli iş, araç günlükleri ya da hafif bir gelenekle takım düzeyinde etiketlenir.
- [ ] Benzer boyut, alan ve riskte karşılaştırma işi tanımlanmıştır.
- [ ] Kalıcılık ve birleştirme sonrası yeniden iş, destekli ve karşılaştırma işi için izlenir.
- [ ] Kaçan kusurlar ve değişiklik başarısızlık oranı, her hız ölçütünün yanında raporlanır.
- [ ] İnceleme süresi, turları ve değişiklik boyutu, boyut normlarıyla izlenir.
- [ ] Yazarlar destekli değişiklikleri açıklayabilir ve her çeyrek bir örnek denetlenir.
- [ ] Üretilmiş testler değer için örneklenir.
- [ ] Destekli destek, yeniden açılma oranı, tekrar temaslar ve memnuniyet bakımından karşılaştırılır.
- [ ] Desteksiz güven nabız anketiyle ölçülür ve desteksiz uygulama planlanır.
- [ ] Bireysel kullanım ve kabul verileri değerlendirmede kullanılmaz.

## Yapay zekâ istemleri

**Destekli ve desteksiz değişikliklerin karşılaştırmasını planlayın.**

```text
[Takım ve sistem] için yapay zekâ destekli ve desteksiz değişiklikleri karşılaştırmak
istiyoruz. Verilerimiz şunları içeriyor: [alanları listeleyin]. Destekli
değişiklikleri yazarların hafızasına güvenmeden nasıl etiketleyeceğimizi, benzer
boyut ve riskte karşılaştırma değişikliklerini nasıl seçeceğimizi, hangi ölçütlerin
karşılaştırılacağını (kalıcılık, yeniden iş, inceleme yükü, kusurlar), dönemi ve
bulgulara nasıl çekince konacağını önerin. Beklenen sonuçları belirtmeyin.
Varsayımlarınızı ve geçerlilik tehditlerini listeleyin.
```

**Bir açıklama kontrolü tasarlayın.**

```text
[Dil ve alan] içindeki, örneklenmiş yapay zekâ destekli değişiklikler için kısa ve
destekleyici bir açıklama kontrolü tasarlayın. Nasıl örnekleneceğini, inceleyicinin
soracağı soruları, iyi bir açıklamanın neleri kapsadığını, sonuçların takım
düzeyinde nasıl kaydedileceğini ve bulguların insanları notlandırmadan öğrenme için
nasıl kullanılacağını ekleyin. Varsayımlarınızı ve kontrolün risklerini listeleyin.
```

**Aşağı akış ölçütlerini gözden geçirin.**

```text
[Dönem] için ölçütlerimiz şunlar: hız [değerler], kalıcılık [değerler], yeniden iş
[değerler], inceleme yükü [değerler], kaçan kusurlar [değerler]; destekli ve
karşılaştırma işi için. Örüntünün neyi düşündürdüğünü ve neyi düşündürmediğini,
hangi farkların normal değişim içinde kaldığını ve sonra neyin denetleneceğini
açıklayın. Nedensellik iddia etmeyin. Varsayımlarınızı ve eklemem gereken verileri
listeleyin.
```

**Desteksiz uygulamayı planlayın.**

```text
Yapay zekâ araçlarını her gün kullanan bir takım için temel becerileri canlı tutacak
hafif bir program önerin: aylık desteksiz alıştırmalar, daha yeni ve deneyimli üyeler
arasında eşli çalışma ve tasarım tartışmaları. Bunu baskı eklemeden çalışma haftasına
nasıl sığdıracağımızı ve etkisini desteksiz güven nabız anketiyle nasıl izleyeceğimizi
önerin. Varsayımlarınızı ve ödünleşimlerinizi listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): yapay zekâ destekli işe ilişkin bir ölçüt için eşleştirilmiş koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): yapay zekâ destekli işe ilişkin bir metriğin ayakta kalanı ölçtüğünü ve manipülasyon yolunu ile koruma önlemini taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Ayakta kalanı ölçün: kalıcılık, yeniden iş, kaçan kusurlar ve kararlılık; karşılaştırılabilir desteksiz işe karşı.
- İnceleme kapasitesini koruyun ve incelemeyi derin tutun; çünkü destekli işin ne kadar hızlı ve güvenle akabileceğini sınırlar.
- Yazarların teslim ettiklerini açıklayabildiğini denetleyin ve becerilerin gelişip gelişmediğini ya da sönüp sönmediğini fark edin.
- Üretilmiş testleri ve çıktıları gerçek değer için örnekleyin.
- Yayımlanmış verimlilik iddialarını tek tek çalışmalar olarak okuyun ve kendi işinizi ölçün.
- Bireysel kullanım verilerini değerlendirmenin dışında tutun.

## Kaynaklar ve ileri okuma

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
