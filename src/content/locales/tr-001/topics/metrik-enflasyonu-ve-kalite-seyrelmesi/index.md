# Metrik enflasyonu ve kalite seyrelmesi

**Yapay zekâ hacmi ve hızı ucuzlattığında hacmi ve hızı sayan her metrik şişer. Bu nedenle her birini bir insanın denetlediği bir yararlılık ölçütüyle eşleştirin ve verilerinizdeki sinyalin boğulup boğulmadığını izleyin.**

## Genel bakış ve motivasyon

Bir metrik, üretilmesi zor bir şeyi yansıttığı için işe yarar. Çözülen biletler emeği yansıtır. Yazılan belgeler bilgiyi yansıtır. Eklenen testler özeni yansıtır. Bir araç görünür çıktıyı neredeyse bedava yaptığında, çıktı ile emek arasındaki bağ kopar. Sayılar yükselmeye devam eder ve anlam akıp gider. Bu, metrik enflasyonudur ve eşlikçisi kalite seyrelmesidir: üretilenin yararlı olan payı düşer ve yararlı kısmı bulmak zorlaşır.

Bu yeni bir sorun değildir. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) ve akrabası [Campbell yasası](https://en.wikipedia.org/wiki/Campbell%27s_law), kontrol için kullanılan ölçütlerin nasıl bozulduğunu anlatır. [Gösteriş metriği (vanity metric)](https://en.wikipedia.org/wiki/Vanity_metric) etkileyici görünür ve işin sağlığı hakkında hiçbir şey söylemez. Yapay zekânın değiştirdiği şey, çıktının üretilebildiği hız ve ölçektir; dolayısıyla bu eski başarısızlıkların gerçekleşebildiği hız ve ölçek de değişir. Bir zamanlar bir sayıyı elle şişiren bir takım, bunu artık dakikalar içinde, çoğu kez kasıt olmadan yapabilir.

Hizmet ve teslimat işinde birkaç örüntü tekrar eder.

- **Hacim enflasyonu.** Yapay zekâ daha fazla bilet, daha fazla yanıt, daha fazla yorum, daha fazla test senaryosu, daha fazla belge ve daha fazla kod taslaklar. Bunların sayıları yükselir. Bunları okumak, incelemek ve sürdürmek zorunda olanların iş yükü de yükselir.
- **Hız enflasyonu.** İlk taslağa kadar geçen süre keskin biçimde düşer; bitmiş ve denetlenmiş bir sonuca kadar geçen süre daha az düşer ya da hiç düşmez. Bunlardan ilkini raporlayan bir pano pohpohlayıcı bir hikâye anlatır.
- **Gürültü.** Daha fazla içerik dikkat için rekabet eder. [Bilgi aşırı yüklenmesi](https://en.wikipedia.org/wiki/Information_overload), bir kişinin sunulan bilgi hacmini işleyemediği durumdur; bilgi tabanının, bilet kuyruğunun ya da uyarı akışının [sinyal-gürültü oranı](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) düşer. [Uyarı yorgunluğu](https://en.wikipedia.org/wiki/Alert_fatigue) bunun operasyonel biçimidir (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”).
- **Düşük kaliteli üretilmiş içerik.** Az incelemeyle toplu üretilen içerik, bazen [yapay zekâ çöpü (AI slop)](https://en.wikipedia.org/wiki/AI_slop) olarak adlandırılır; makul ama zayıftır. Böyle makalelerle tohumlanmış bir bilgi tabanı daha az güvenilir hâle gelir ve kullanıcılar ona güvenmemeyi öğrenir.
- **Doğrulama maliyeti.** Bir iddiayı denetlemenin emeği çoğu zaman onu ortaya atmanın emeğinden çok daha büyüktür; bu örüntüye bazen [Brandolini yasası](https://en.wikipedia.org/wiki/Brandolini%27s_law) denir. Üretim ucuz olduğunda doğrulama darboğaz olur.
- **Tüketimi artıran verimlilik.** [Jevons paradoksu](https://en.wikipedia.org/wiki/Jevons_paradox), verimlilik kazançlarının bir kaynağın daha az değil, daha fazla kullanılmasına yol açtığı durumları tanımlar. Bir rapor taslağı yazmak ucuzlarsa daha fazla rapor talep edilir. Bir aracın kazandırdığı zaman, daha düşük değerli daha fazla iş tarafından tüketilebilir.
- **Geri bildirim döngüleri.** Üretilmiş içerik bir sonraki üretim turunu besliyorsa hatalar birikir. Araştırma yazını, kendi çıktıları üzerinde eğitilen modellerde [model çöküşünü](https://en.wikipedia.org/wiki/Model_collapse) tanımlar. Benzer bir döngü, bir asistanın, bir asistan tarafından bir asistanın özetlediği makalelerden yazılmış biletleri özetlemesiyle bir kurum içinde de oluşabilir.
- **Kayan referans değerler.** Verinin dağılımı yapay zekâ nedeniyle değişirse eğilimler ve eşikler artık eskiden ifade ettikleri anlama gelmez. Bu, makine öğrenmesinde girdiler ile sonuçlar arasındaki ilişkinin zaman içinde değiştiği [kavram kaymasına (concept drift)](https://en.wikipedia.org/wiki/Concept_drift) benzer. Bilet hacmindeki bir artış, daha fazla sorunu değil, bilet oluşturmanın kolaylaşmasını yansıtıyor olabilir.

Çevik hedefler burada önemlidir. Sürekli teslimat, sürekli iyileştirme ve sürdürülebilir tempo, sinyalin açık olmasına bağlıdır. Motive olmuş insanlardan makine tarafından üretilmiş gürültüyü eşelemeleri ya da çıktı yığınlarını sürdürülemez bir tempoda doğrulamaları istenmemelidir. Sürekli sürece dâhil olan paydaşlar da en iyi savunmadır: raporların artık yardımcı olmadığını size onlar söyler.

Bu konu, enflasyonu ve seyrelmeyi fark etmek için ölçütleri ve bunları ortaya çıkaran eşleştirmeleri verir. Temellere ve destekli iş ölçütlerine dayanır (bkz. Konu 10.1 “Hizmet yönetimi ölçümünde yapay zekâ” ve Konu 10.2 “Yapay zekâ destekli işi ölçmek”).

## Temel ilkeler

- **Her hacim ya da hız metriğini bir yararlılık denetimiyle eşleştirin.** Çıktının yararlı olup olmadığını bir insan değerlendirir.
- **Bitmiş, doğrulanmış bir sonuca kadar ölçün.** İlk taslak hızı bir tuzaktır.
- **Doğrulama yüküne dikkat edin.** Sessizce büyür ve kazanılan zamanı tüketir.
- **Sinyali koruyun.** Bilgi tabanını, kuyrukları ve uyarıları güvenilecek kadar temiz tutun.
- **Geri bildirim döngülerini kırın.** Üretilmiş içeriğin incelenmeden üretimi beslemesine izin vermeyin.
- **Veri değiştiğinde referans değeri yeniden alın.** Bir teknoloji kaymasını aşan eğilimler dikkat gerektirir.
- **Daha az ve daha iyi çıktıyı tercih edin.** Dikkat sınırlayıcı kaynak olduğunda azı çok olabilir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Çıktı-sonuç oranı | Çıktı hacminin, üretmesi amaçlanan sonuca oranı | çıktı sayısı (biletler, makaleler, değişiklikler) / sonuç ölçütü (çözülen sorunlar, kullanılan makaleler, kalıcı değişiklikler), aynı dönemde, eğilim olarak izlenir | oran | İş izleyici, bilgi tabanı, sonuç ölçütleri | Sürekli iyileştirme; ölçüm ve raporlama | Dokümantasyon hacminden çok çalışan yazılım | Aylık |
| Yararlı öğe payı | Nitelikli bir inceleyici tarafından yararlı bulunan, örneklenmiş öğelerin payı | yararlı bulunan (doğru, ilgili, yinelenmeyen) örneklenmiş öğeler / örneklenen öğeler | yüzde | Rastgele örnek incelemesi | Bilgi yönetimi; kalite güvencesi | İçerik için bitti tanımı | Aylık |
| Doğrulama yükü | Üretilmiş işi denetlemeye ve düzeltmeye çıktı birimi başına harcanan insan zamanı | inceleme ve düzeltme saatleri / çıktı birimleri, eğilim olarak izlenir | birim başına saat | Zaman tahminleri, inceleme aracı verileri | Hizmet finansal yönetimi; sürekli iyileştirme | Kısıt olarak inceleme kapasitesi | Aylık |
| İçerik yinelenme oranı | Başka bir öğeyi çoğaltan ya da büyük ölçüde örtüşen bilgi öğelerinin payı | incelemede ya da eşleştirmeyle yinelenen veya örtüşen olarak işaretlenen öğeler / bilgi tabanındaki öğeler | yüzde | Bilgi tabanı incelemesi, eşleştirme raporları | Bilgi yönetimi | Tek doğruluk kaynağı | Üç ayda bir |
| Üretilmiş bilginin incelenmiş payı | Yayımlanmadan önce nitelikli bir kişi tarafından incelenip onaylanan yapay zekâ üretimi bilgi öğelerinin payı | onaylı incelemeyle yayımlanan üretilmiş öğeler / yayımlanan üretilmiş öğeler | yüzde | Bilgi tabanı üst verisi | Bilgi yönetimi; değişiklik yetkilendirme | Yayından önce inceleme | Aylık |
| Çözüme karşı birikim girişi | Yapay zekâdan etkilenen kuyruklar için, gelen işin büyümesinin çözülen işin büyümesine oranı | (oluşturulan öğelerdeki değişim) / (çözülen öğelerdeki değişim), yapay zekâ öncesi referans değerle karşılaştırılır | oran | Bilet ve izleyici geçmişi | Olay yönetimi; hizmet talebi yönetimi | Akış dengesi | Aylık |
| Metrik kayma işaretleri | Yapay zekâ devreye girdikten sonra tanımı veya dağılımı gözle görülür biçimde kayan, incelenmiş ve not düşülmüş metriklerin sayısı | incelemede işaretlenen metrikler / kayıttaki metrikler | adet; yüzde | Metrik kaydı incelemesi, dağılım denetimleri | Ölçüm ve raporlama | Ölçüm üzerine retrospektif | Üç ayda bir |

“Yararlı”yı yazılı bir değerlendirme ölçeğinde tanımlayın: doğru, gerçek bir ihtiyaçla ilgili, yinelenmeyen ve güncel. Doğrulama yükü, yeniden istem yazma süresi dâhil, insanların harcadığı zamanı sayar ve yalnızca beklemeden ibaret süreyi dışarıda bırakır. İncelenmiş pay bir kontroldür: incelenmemiş üretilmiş bilgi ayrı izlenir ve görünür biçimde etiketli tutulur. Metrik kayma işaretleri tartışmalardır, cezalar değil: bir işaret, bir kişinin tanımı ayarlamaya, eğilime not düşmeye ya da referans değeri yeniden almaya karar verdiği anlamına gelir. Tüm ölçütler bireyleri değil, süreçleri ve içeriği tanımlar.

## Öneriler

### Hacmi yararlılıkla eşleştirin

**1. Her hacim metriğine bir yararlılık denetimi yerleştirin.** Panonuzdaki her hacim ya da hız ölçütü için bir insanın değerlendirdiği bir yararlılık ölçütü adlandırın. Oluşturulan biletleri çözüm kalitesiyle, yazılan makaleleri makale kullanımı ve doğruluğuyla, birleştirilen değişiklikleri kalıcılık ve yeniden işle eşleştirin (bkz. Konu 10.2 “Yapay zekâ destekli işi ölçmek”). Bunları birlikte gösterin ve ayrıştıklarında tartışın.

**2. Düzenli olarak örnekleyin ve değerlendirin.** Her ay yapay zekânın dokunduğu akışlardan rastgele bir öğe örneği çekin ve nitelikli bir kişinin bunları yazılı bir değerlendirme ölçeğine göre değerlendirmesini sağlayın. Yararlı payı ve öğelerin neden başarısız olduğunu kaydedin. İnceleyicileri dönüşümlü çalıştırın ve üreticilerden bağımsız tutun. Örnekleme, yavaş seyrelmeye karşı ana savunmadır.

**3. Çıktılardan önce sonuçları raporlayın.** Liderlik raporlarında sonuçlarla başlayın: çözülen sorunlar, memnun kullanıcılar, önlenen kusurlar. Çıktı sayılarını bağlam olarak sonra koyun. Rapor çıktı sayıları çıkarılsa da değerli kalacaksa, iyi yönlendirilmiştir.

### Doğrulamayı ve gürültüyü kontrol edin

**4. Doğrulama yükünü ölçün.** Üretilmiş işi denetlemeye ve düzeltmeye harcanan zamanı tahmin edin ve çıktı birimi başına bir eğilim olarak izleyin. Çıktı arttıkça artıyorsa net kazanç, üretim sayılarının düşündürdüğünden küçüktür ve inceleyiciler aşırı yüke doğru gidiyor olabilir. Yükü görev başına maliyete dâhil edin (bkz. Konu 10.1 “Hizmet yönetimi ölçümünde yapay zekâ”).

**5. Sisteme girenleri sınırlayın.** Hangi üretilmiş içeriğin otomatik olarak oluşturulup yayımlanabileceğine ve hangisinin inceleme gerektirdiğine karar verin. Tek bir incelemedeki üretilmiş değişikliklerin boyutuna ve sayısına sınır koyun. Hacme hayır demeyi kolaylaştırın. Daha net öğelerle daha küçük bir kuyruk kullanıcılara daha iyi hizmet eder.

**6. Bilgi tabanını bir ürün gibi yönetin.** Üretilmiş içeriği etiketleyin, yayından önce inceleme şart koşun, yinelenenleri ve eskimiş öğeleri emekliye ayırın ve yinelenmeyi ile kullanımı izleyin. Bir bilgi tabanı, kullanıcıların ona ne kadar güvendiği oranında yararlıdır. Kimsenin kullanmadığı ve kimsenin güvence veremediği makaleleri kaldırın (bkz. Konu 3.6 “Bilgi yönetimi metrikleri”).

**7. Uyarı ve bilet akışlarını temiz tutun.** Yapay zekâ uyarılardan ya da özetlerden bilet oluşturuyorsa, yararlı payı ve yinelenenleri ölçün. Agresif biçimde ayarlayın. Düşen bir sinyal-gürültü oranını başlı başına bir olay olarak ele alın, çünkü gerçek bir sorun geldiğinde müdahaleye zarar verir.

### Döngüleri kırın ve referans değere dikkat edin

**8. Üretilmiş içeriğin denetlenmeden kendini beslemesini durdurun.** Bir asistanın bir bilgi tabanından, bilet geçmişinden ya da geçmiş raporlardan yararlandığı yerde, bu kaynaklardaki üretilmiş malzemenin incelendiğinden ya da etiketlenip buna göre ağırlıklandırıldığından emin olun. Zinciri örnekleyin: bir yanıt seçin ve nereden geldiğini görmek için kaynaklarına kadar izini sürün. Denetlenmemiş döngüler hataları güçlendirir.

**9. Veri kaydığında referans değeri yeniden alın.** Yapay zekâyı devreye aldıktan sonra eğilim grafiklerine not düşün ve verinin doğası değiştiği yerde yeni bir referans değerle başlayın. Yalnızca toplamlara değil, dağılımlara da bakın: bilet uzunluğu, kategori karışımı ve oluşturma süresi kayabilir. Metrik kayma işaretleri bu sohbetleri tetikler (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**10. Sıçramayı (rebound) arayın.** Bir görev ucuzladığında, ona olan talebin büyüyüp büyümeyeceğini sorun. Kazanılan zamanın nasıl kullanılacağına önceden karar verin, böylece daha fazla düşük değerli çıktı tarafından yutulmasın. Aynı emekle iki kat fazla rapor üreten bir takım, daha az yararlı iş yapıyor olabilir.

### İnsan dikkatini döngüde tutun

**11. İnceleyicilerin ve kullanıcıların dikkatini koruyun.** İnceleme kapasitesi ve dikkat kıttır. İnsanların okuması gereken malzeme hacmini azaltın, inceleyicilere gerçekçi yükler verin ve onlara neyin zorlaştığını sorun. Sürdürülebilir bir tempo, okuma ve yargılama temposunu da içerir (bkz. Konu 9.2 “Memnuniyet ve iyi oluş metrikleri”).

**12. Kullanıcılara ve paydaşlara sinyalin açık olup olmadığını sorun.** Çıktıları kullananların sürekli dâhil olması en iyi sınavdır. Bilgi tabanının kullanımının kolaylaşıp zorlaşmadığını, raporların ihtiyaç duyduklarını söyleyip söylemediğini, kuyruğun daha net hissettirip hissettirmediğini sorun. Yanıtları ve yorumları sayıların yanında okunmalıdır.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Çıktı-sonuç oranı | Hacimle birlikte yükselen bir sonuç ölçütü seçmek; dönemi değiştirmek | Sonuç kayıtta sabitlenir; memnuniyet ve yeniden açılma oranıyla karşılaştırın |
| Yararlı öğe payı | Kolay öğeleri örneklemek; yumuşak değerlendirme ölçeği; üreticiden etkilenen inceleyiciler | Rastgele örnek; yazılı değerlendirme ölçeği; bağımsız, dönüşümlü inceleyiciler |
| Doğrulama yükü | İnceleme süresini günlüğe kaydetmemek; denetimi aşağı akış takımlarına kaydırmak | Aşağı akış yeniden işini dâhil edin; inceleyicilere yük hakkında sorun |
| İçerik yinelenme oranı | Yinelenenleri kaçıran dar eşleştirme kuralları; ayrı öğeleri birleştirmek | Yinelenenleri elle örnekleyin; birleştirme kurallarını günlüğe kaydedin |
| Üretilmiş bilginin incelenmiş payı | İncelemeyi okumadan tamamlandı olarak işaretlemek; toplu inceleme | İncelemeleri öz bakımından örnekleyin; inceleme başına süre; yayımlanmış öğelerdeki hata oranı |
| Çözüme karşı birikim girişi | Öğeleri otomatik kapatmak; öğeleri bölmek | Çözüm kalitesini denetleyin; yeniden açılma oranı; kapatılan öğeleri örnekleyin |
| Metrik kayma işaretleri | İş çıkmasın diye işaretlememek; her şeyi işaretlemek | Her çeyrek tüm metrikleri gözden geçirin; her işaret için bir karar şart koşun |

Sağlıklı bir okuma şöyledir: hacim büyürken sabit ya da artan bir yararlı öğe payı, bilinen ve karşılanabilir bir doğrulama yükü, düşük yinelenmeli ve incelenmiş üretilmiş içerikli bir bilgi tabanı, net sinyalli kuyruklar ve sonuçlarla başlayan bir liderlik görünümü.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Çıktıları saymak | Kolay, tanıdık | Şişer; hacmi ödüllendirir |
| Sonuçları ölçmek | Değeri yansıtır | Daha yavaş; atfetmesi daha zor |
| Örnekleyip değerlendirmek | Seyrelmeyi saptar | Becerikli inceleyiciler gerektirir; emek |
| Otomatik kalite puanlaması | Ölçeklenir | Başka bir modelin görüşü; aynı kör noktaları paylaşabilir |
| Üretilen her şeyi incelemek | Güvenli | Faydayı ortadan kaldırır; inceleyiciler aşırı yüklenir |
| Bir örneği incelemek | Pratik | Bazı kötü öğeler geçer |
| Açık üretime izin vermek | Hızlı, geniş | Gürültü; güven aşınır |
| Üretimi onaylı kullanımlarla sınırlamak | Daha temiz sinyal | Daha yavaş benimseme; kaçırılan faydalar |

Düzyazı yanıt şudur: sonuçları ölçün, yararlılığı insanlarla örnekleyip değerlendirin, paylaşılan depolara inceleme olmadan girenleri sınırlayın ve referans değerleri yeniden gözden geçirin. Otomatik puanlamayı bir yardımcı olarak kullanın, yargıç olarak değil.

## Takımınızla tartışılacak sorular

**1. Yapay zekâ kullanmaya başladığımızdan beri hangi sayılarımız yükseldi ve bu, hizmet verdiğimiz insanlar için ne yaptı?**
Sayıları listeleyin. Her biri için, yansıtması amaçlanan sonuca bakın. Kolaylaştırıcı, sonucun nerede kıpırdamadığını not etmelidir. Bu sayıları bir yararlılık denetimiyle eşleştirin.

**2. Geçen ay yayımladığımız ya da oluşturduğumuzun ne kadarını satır satır savunmaktan memnun olurduk?**
Rastgele bir örnek alın ve birlikte okuyun. Neyin yararlı, zayıf, yanlış ya da yinelenen olduğunu işaretleyin. Oranı ve nedenleri tartışın. Paylaşılan depolara neyin gireceğine dair bir standart üzerinde anlaşın.

**3. Denetleme nerede bizim darboğazımız oluyor?**
İnceleyicilere sorun. İnceleme kuyruklarına, inceleme derinliğine ve artık taşıdıkları emeğe bakın. İnceleme başına üretilmiş öğelerin boyutuna ya da sayısına bir sınır ve yükü ölçmenin bir yolu üzerinde anlaşın.

**4. Burada hangi üretilmiş içerik başka üretilmiş içeriği besliyor?**
Tipik bir yanıtın izini kaynaklarına kadar sürün. Zincir nerede başladı? Bir kişinin zinciri nerede denetlemesi ya da içeriği etiketlemesi gerektiğini tartışın.

**5. Bir kullanıcı şimdi bilgi tabanımız hakkında, bir yıl öncesine kıyasla ne söylerdi?**
Son yorumları okuyun ve kullanım verilerine bakın. Güvenilir bir yanıt bulmanın kolaylaşıp zorlaşmadığını sorun. Bir temizlik ve yeni içerik için bir kural üzerinde anlaşın.

**6. Hangi eğilimlerimizi yeni bir referans değerle yeniden başlatmalıyız?**
Hacme ya da öğelerin nasıl oluşturulduğuna bağlı metrikleri listeleyin. Yapay zekâ geldiğinden beri biçimdeki değişimlere bakın. Eğilimlere not düşün ve hangilerinin yeni bir referans değere ihtiyaç duyduğuna karar verin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları hacmin büyük bölümünü üretir ve bakımı taşır. Daha küçük, daha net değişiklikleri tercih etmeli, üretilmiş malzemeyi incelenmiş ve etiketli tutmalı ve kalıcılığı ile yeniden işi izlemelidir. Üretilmiş hacme dayalı ölçütleri reddetmeli ve sonuç ölçütleri istemelidir.

### Hizmet ve operasyon takımları

Operasyon takımları, seyrelmenin zarar verdiği kuyrukların, uyarıların ve bilgi tabanının içinde yaşar. Yapay zekânın oluşturduğu biletleri ve uyarıları sinyali güçlü tutmak için ayarlamalı, üretilmiş bilgiyi yayımlanmadan önce incelemeli ve akış gürültüye dönüştüğünde bunu raporlamalıdır. Yararlılığı yargılamak için en uygun konumdadırlar.

### Liderlik ve yönetişim

Liderler, enflasyonun çarpıttığı panoları alır. Önce sonuçları istemeli, hacmin yanında yararlılık denetimleri şart koşmalı, inceleme kapasitesini finanse etmeli ve bazı ölçütlerin referans değerinin yeniden alınması gerektiğini kabul etmelidir. Yönetişim, paylaşılan depolardaki üretilmiş içeriğin incelendiğini ve etiketlendiğini denetlemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar, yanıtlar yanlış olduğunda, makaleler birbiriyle çeliştiğinde ve yanıtlar uzun ve boş olduğunda seyrelmenin bedelini öder. Kısa, doğru ve ilgili yardım isterler. Aldıklarının kalitesine tepkileri, sinyalin sağ kalıp kalmadığının doğrudan sınavıdır.

## Uygulamada: çevik bir ITIL örneği

Küresel bir ilaç şirketinin BT grubu, bilgi makaleleri taslaklamak, biletleri özetlemek ve haftalık durum raporlarını hazırlamak için bir yapay zekâ asistanını etkinleştirir. Bir çeyrek içinde pano mükemmel görünür. Aşağıdaki sayılar açıklayıcıdır.

Oluşturulan bilgi makaleleri ayda 140'tan 610'a çıkar. Biletler ayrıntılı, yapay zekâ tarafından yazılmış özetler taşır. Haftalık raporlar on iki sayfaya ulaşır. Hizmet kalitesi yöneticisi, self servis memnuniyetinin düştüğünü ve hizmet masasının daha fazla “makale yardımcı olmadı” teması bildirdiğini fark eder. İki deneyimli ajanla birlikte yeni makalelerden 100 tanesini örnekler. Yalnızca 54'ü yararlı bulunur: 23'ü mevcut makaleleri çoğaltır, 15'i güncel olmayan ya da hatalı adımlar içerir ve 8'i üzerinde eyleme geçilemeyecek kadar belirsizdir. Yeni makalelerin yüzde 71'i insan incelemesi olmadan yayımlanmıştır. Bilgi tabanı şimdi yaklaşık 3.200 makale barındırır; içerik yinelenme oranını bir yıl önceki yüzde 9'a karşılık yüzde 28 olarak tahmin eder. Ajanlar, güvenilir bir yanıt bulmanın daha uzun sürdüğünü bildirir. Hizmet masasının makale editörleri için doğrulama yükü 12 saatten haftada yaklaşık 40 saate çıkmıştır. Biletlerin yapay zekâ tarafından yazılan özetleri, sonraki yapay zekâ tarafından üretilen yanıtların kimsenin yazmadığı metne dayanmasına yol açar ve beş yanıtın kaynaklarına kadar izinin sürüldüğü bir izlemede ikisi, sorunu yanlış ifade eden bir özete dayanmıştır. Haftalık durum raporları okunduğunda bir öncekinde olmayan çok az şey söyler ve paydaşlar ikinci sayfanın ötesini okumayı bırakmıştır.

Dört değişiklik önerir ve hizmet liderlik takımı ile bilgi sahipleri bunları benimser. Üretilmiş makaleler yayımlanmadan önce adı konmuş bir editör tarafından incelenmelidir ve onaylanana kadar etiketlenir. Konu kümesi başına bir üretilmiş makale sınırı yinelenmeleri önler ve bir tarama, gereksiz öğeleri birleştirir ya da emekliye ayırır. Rapor şablonları, sonuçlarla başlayan iki sayfaya indirilir ve yapay zekâ yalnızca bir insanın sonra düzenlediği bölümleri taslaklamak için kullanılır. Bilet özetleri üretilmiş olarak işaretlenir ve her ay bir örnek denetlenir. Pano makale sayılarının yanında yararlı öğe payını, yinelenme oranını, incelenmiş payı ve doğrulama yükünü raporlar.

İki çeyrek sonra, aylık oluşturulan makaleler 190'a düşer, yararlı öğe payı yüzde 91'e yükselir, yinelenme oranı yüzde 11'e düşer, incelenmiş pay yüzde 100'dür ve doğrulama yükü haftada yaklaşık 16 saatte sabitlenir. Self servis memnuniyeti toparlanır ve “makale yardımcı olmadı” temasları azalır. Paydaşlar iki sayfalık raporu okur. Bir direktör, yapay zekâ programının değerini göstermek için ayda 1.000 makale hedefi ister. Hizmet kalitesi yöneticisi sorunun sayımın kendisi olduğunu açıklar ve yararlılığı ve kullanımı izlemeyi önerir. Karar kaydedilir.

## Sektör mercekleri

**Girişim (startup).** Üretim ucuz, inceleme zamanı kıttır. Dokümantasyonu ve biletleri kısa tutun, müşterilerin okuyacağı şeyi inceleyin ve serbestçe silin. Küçük ve doğru bir makale kümesi, büyük ve şüpheli bir kümeden iyidir.

**Küçük işletme.** İnceleme kapasitesi azdır; bu yüzden aracın ürettiğini sınırlayın. Bir avuç doğrulanmış rehberi ve şablonu tercih edin. Üretilmiş malzemeyi denetlemeden herkese açık sayfalarda yayımlamaktan kaçının.

**Kurumsal.** Ölçek gürültüyü büyütür. Sahipleri, etiketleri ve inceleme kurallarıyla bir içerik yönetişimi kurun, yararlılığı bilgi tabanı genelinde ölçün ve dönemsel temizlikler yürütün. Değerlendirme ölçeklerini takımlar arasında paylaşın ve takımları değil, eğilimleri karşılaştırın.

**Hükûmet ve kamu sektörü.** Kamuya açık içerik doğru ve erişilebilir olmalıdır ve hatalar zarar verebilir. Üretilmiş kamu bilgisinin incelenmesini şart koşun, nasıl üretildiğine dair kayıt tutun ve sade dil ile erişilebilirlik standartlarını uygulayın. Saklama ve kayıt kuralları üretilmiş malzeme için geçerli olabilir (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Enflasyona karşı korunmanın maliyetleri mütevazıdır: örnekleme için inceleme zamanı, üretilmiş içerik için editoryal emek, yinelenme saptama araçları ve eğilimlerin referans değerini yeniden alma emeği. Bunu yapmamanın maliyetleri daha büyük ama dağınıktır: self servise güvenmeyi bırakan kullanıcılar, tükenen inceleyiciler, şişirilmiş sayılara dayanarak alınan kararlar ve temizlik projeleri.

Gerekçeyi kendi verilerinizden kurun: zaman içinde yararlı öğe payı ve doğrulama yükü, yardımcı olmayan içeriğin neden olduğu temas hacmi ve bir bilgi tabanı temizliğinin maliyeti. Üretilmiş içeriğin kalitesine ilişkin yayımlanmış rakamları kullanmaktan kaçının; bunlar araca, göreve ve yönteme göre geniş ölçüde değişir. Yanlış bilgi yayımlamanın itibar zararından kaçınılan maliyeti dâhil edin (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Hacmi kutlamak.** Gürültüyü ödüllendirir. Sonuçları ve yararlılığı kutlayın.
- **Verimlilik hikâyesi olarak ilk taslak hızı.** Tasarruf denetlemede kaybolabilir. Doğrulanmış bir sonuca kadar süre.
- **Üretilmiş içeriği incelemeden yayımlamak.** Güven sessizce aşınır. İnceleyin ve etiketleyin.
- **Üretilmiş içeriğin üretimi beslemesine izin vermek.** Hatalar birikir. Zinciri denetleyin.
- **Değişmeyen referans değerler.** Bir teknoloji kaymasından sonra eğilimler yanıltır. Not düşün ve yeniden referans değer alın.
- **İnceleyicileri aşırı yüklemek.** İnceleme lastik damgaya dönüşür. Hacmi sınırlayın ve yükü ölçün.
- **Her şey için bir yapay zekâ yargıcı kullanmak.** Üreticinin kör noktalarını paylaşabilir. İnsanları döngüde tutun.
- **Sıçramayı yok saymak.** Daha ucuz iş daha fazla iş çeker. Kazanılan zamanın ne için olduğuna karar verin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Eşleştirme ve örnekleme | Hacim tek başına raporlanır | Kaliteye dair gayriresmî izlenimler | Her hacim metriği örneklenmiş bir yararlılık denetimiyle eşleştirilir | Yararlılık, yük ve yinelenme; hacim için değil inceleme için hedeflerle yönetilir | Sinyal kalitesine dair kurumlar arası görünüm; değerlendirme ölçekleri iş ortaklarıyla paylaşılır |
| İçerik ve döngüler | Üretilmiş içerik karışmış durumda | Bir miktar etiketleme | Üretilmiş içerik etiketlenir ve yayından önce incelenir; zincirler örneklenir | Döngüler izlenir; depolar özenle derlenir; yinelenenler bir takvimle emekliye ayrılır | Kaynak izi, araçlar ve tedarikçiler genelinde uçtan uca izlenir |
| Referans değerler ve dikkat | Eğilimler kayma boyunca okunur | Bazı grafiklerde notlar | Veri değiştiğinde referans değerler sıfırlanır; sıçrama göz önünde tutulur | Kayma işaretleri her çeyrek gözden geçirilir; inceleyici yükü yönetilir | Metrik tasarımı, paydaşlarla birlikte teknoloji değişimine sürekli uyum sağlar |

## Kontrol listesi

- [ ] Her hacim ya da hız metriğinin bir insanın değerlendirdiği bir yararlılık eşlikçisi vardır.
- [ ] Yapay zekânın dokunduğu öğelerden rastgele bir örnek, yazılı bir değerlendirme ölçeğine göre her ay incelenir.
- [ ] Doğrulama yükü tahmin edilir ve bir eğilim olarak izlenir.
- [ ] Üretilmiş bilgi etiketlenir ve yayından önce incelenir.
- [ ] Bilgi tabanındaki yinelenme ölçülür ve azaltılır.
- [ ] Uyarı ve bilet akışları, yararlı pay ve yinelenenler bakımından izlenir.
- [ ] Üretilmiş çıktılardan kaynaklarına giden zincirler örneklenir.
- [ ] Yapay zekânın devreye girmesini aşan eğilimlere not düşülür ya da yeniden referans değer alınır.
- [ ] Liderlik raporları sonuçlarla başlar.
- [ ] Kullanıcılara ve paydaşlara sinyalin daha net mi, daha gürültülü mü olduğu sorulur.

## Yapay zekâ istemleri

**Bir yararlılık değerlendirme ölçeği oluşturun.**

```text
[Kurum türü] içinde bir [bilgi makalesinin, bilet özetinin, durum raporunun]
yararlı olup olmadığını yargılamak için kısa bir değerlendirme ölçeği (en fazla
altı ölçüt) taslaklayın. Doğruluk, gerçek bir ihtiyaçla ilgililik, yinelenme,
güncellik ve açıklığı, üç düzeyli bir derecelendirme ve her düzey için örneklerle
ekleyin. İstatistik uydurmayın. Varsayımlarınızı ve inceleyicileri nasıl tutarlı
tutacağımızı listeleyin.
```

**Sinyaldeki düşüşü çözümleyin.**

```text
[Görev] için yapay zekâyı devreye aldığımızdan beri bu rakamlar değişti: [hacimleri,
çözümü, memnuniyeti, yeniden açılma oranını, inceleyici saatlerini yapıştırın].
Örüntünün enflasyon ya da seyrelme hakkında neyi düşündürdüğünü, hangi değişimlerin
daha kolay oluşturmadan kaynaklanabileceğini, sonra neyin örnekleneceğini ve hangi
ölçütlerin yeni bir referans değere ihtiyaç duyabileceğini açıklayın. Verilerin
destekleyemeyeceği nedenleri varsaymayın. Varsayımlarınızı listeleyin.
```

**Bir bilgi tabanı temizliği planlayın.**

```text
Bilgi tabanımızda [sayı] makale var; bunların [sayı] tanesi son [dönem] içinde
üretildi. Bir temizlik planı önerin: yinelenenlerin ve eskimiş öğelerin nasıl
saptanacağı, kullanıma göre nasıl önceliklendirileceği, üretilmiş makalelerin nasıl
inceleneceği, tekrarı önleyecek kurallar ve izlenecek ölçütler. Belirli araçları
varsaymayın. Varsayımlarınızı ve risklerinizi listeleyin.
```

**Üretilmiş içerik zincirinin izini sürün.**

```text
İşte yapay zekâ tarafından üretilmiş bir yanıt ve dayandığı kaynaklar: [yapıştırın].
Her iddianın kaynağını izleyin ve kaynağın insan tarafından yazılmış mı, incelenmiş
üretilmiş içerik mi, yoksa incelenmemiş üretilmiş içerik mi olduğunu işaretleyin.
Bir hatanın nereden girmiş olabileceğini belirleyin ve bir denetim önerin. Metnin
ötesinde olgular varsaymayın. Varsayımlarınızı listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir hacim ya da hız metriğinin yararlılık eşlikçisini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): yapay zekâdan etkilenen bir metriğin hacmi örneklenmiş yararlılıkla eşleştirdiğini ve manipülasyon yolunu ile koruma önlemini taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Yapay zekâ çıktıyı ucuzlattığında hacim ve hız metrikleri şişer ve yararlı olanın payı düşebilir.
- Her hacim ya da hız ölçütünü, örneklenmiş ve bir insanın değerlendirdiği bir yararlılık denetimiyle eşleştirin.
- Doğrulanmış bir sonuca kadar süreyi ve doğrulama yükünü ölçün, çünkü denetleme darboğaz olur.
- Üretilmiş içeriği paylaşılan depolara girmeden önce etiketleyin ve inceleyin ve döngülerin denetlenmeden kendilerini beslemesini önleyin.
- Bir teknoloji kaymasından sonra eğilimlerin referans değerini yeniden alın ve raporlara sonuçlarla başlayın.
- Kazanılan zamanın ne için olduğuna önceden karar verin ve inceleyicilerin ile kullanıcıların dikkatini koruyun.

## Kaynaklar ve ileri okuma

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
