# Teslimat tahmini ve planlama metrikleri

**Yazılımı sürekli teslim eden ve aynı zamanda canlı hizmetleri işleten takımlar, tahminlerden sıkıştırılmış taahhütlere değil dürüst öngörülere ihtiyaç duyar; bu yüzden planı biten işin akışından yapın, tarih yerine aralık verin ve takıma özgü hiçbir planlama sayısını karşılaştırmalara ve hedeflere sokmayın.**

## Genel bakış ve motivasyon

Paydaşlar her teslimat takımına iki soru sorar: “Ne zaman biter?” ve “Ne kadarını üstlenebilirsiniz?” Çevik yanıt, Çevik Manifesto ilkelerindeki amaçlardan başlar: değerli yazılımı sürekli teslim etmek, paydaşlarla her gün iş birliği yapmak, düzenli olarak düşünüp iyileşmek ve işi, işi yapmaları için güvenilen motive bireylerin etrafında kurmak. Bu amaçlara hizmet eden tahmin, paydaşlar arasında olası sonuçlar ve risk üzerine bir konuşmadır. Baskı altında koparılan bir söz değildir.

Canlı hizmetleri işleten takımların ek bir güçlüğü vardır. Kapasiteleri planlı değişiklik, plansız olay işi, hizmet talepleri ve iyileştirme arasında paylaşılır. Operasyonel yükü yok sayan bir plan, kimsenin planlamadığı nedenlerle başarısız olur (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”). ITIL’in kodladığı BT hizmet yönetimi (ITSM) bunu bir kapasite ve talep sorusu olarak ele alır. [Kapasite planlaması](https://en.wikipedia.org/wiki/Capacity_planning), bir kuruluşun değişen talebi karşılamak için ihtiyaç duyduğu kapasiteyi belirleme sürecidir. Takımın gerçekten bitirebileceğine göre planlama yapma çevik uygulaması, takım düzeyinde aynı fikirdir.

Teslimatı tahmin etmenin iki geniş yolu vardır:

- **Tahminlerden.** Takım öğeleri bir birimle boyutlandırır, boyutları toplar ve bir hıza böler. Çoğu takım [hikâye puanları](https://en.wikipedia.org/wiki/Story_point) gibi göreli boyutlandırma kullanır ve hıza [hız (velocity)](https://en.wikipedia.org/wiki/Velocity_(software_development)) denir. Başlaması hızlıdır, takımın tahmin alışkanlıklarına bağlıdır ve yalnızca tek bir takımın içinde anlamlıdır.
- **Akış verisinden.** Takım kendi bitirilmiş iş kaydını kullanır: haftada kaç öğe tamamladığı (çıktı hızı) ve öğelerin başlangıçtan bitişe ne kadar sürdüğü (çevrim süresi). Bunlar görüş değil sayım ve geçen süre olduğundan kaymaya direnir ve bir sonuçlar aralığı vermek için benzetimle birleştirilebilir. Bu yaklaşım, Kanban Kılavuzu’nu da içeren akış geleneğinden gelir ve sabit bir planlama dönemi olmadan sürekli teslim eden takımlar dahil, işi düzenlemenin her biçimiyle çalışır.

Bu konu ikinci yaklaşıma yaslanır, çünkü sürekli yazılım teslimi, akış verisinin doğrudan tanımladığı istikrarlı bir biten öğe akışı üretir (bkz. Konu 2.1 “Akış ölçümleri” ve Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”). Yine de birincisini de kapsar, çünkü çoğu takım tahmin kullanır ve hızın kötüye kullanılması teslimat metriklerinin en sık yanlış gittiği yollardan biridir.

Tahminler, belirsiz bir geleceğin [öngörüsüdür](https://en.wikipedia.org/wiki/Forecasting) ve belirsizlik işin kendisidir. [Belirsizlik konisi](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) fikri, erken tahminlerin en az kesin olanlar olduğunu söyler. [Planlama yanılgısı](https://en.wikipedia.org/wiki/Planning_fallacy), insanların benzer planların gecikmiş olduğunu bilseler bile kendi planlarının ne kadar süreceğini olduğundan az tahmin ettiğini söyler. İyi tahmin ölçümü bunu adlandırır ve tahminlerin ne sıklıkla tuttuğunu ölçer.

[Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma çizgisi burada önemlidir, çünkü tahminler ve planlar kolayca söze, sonra hedefe dönüşür. Bir takım bir tarihi tutturmaya göre yargılandığında riski gizler, kaliteden kırpar ya da tahmini şişirir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Biten işten tahmin edin.** Takımın teslim ettiği, herkesin teslim edeceğine inandığından daha iyi bir kanıttır.
- **Olasılıkla bir aralık verin.** “Muhtemelen gelecek ayın sonunda, çok muhtemelen ondan sonraki ayın sonunda” tek bir tarihten iyidir.
- **Gerçek kapasiteye göre planlayın.** Operasyonel işi dahil edin, iyileştirme için zaman bırakın ve tam kullanıma göre planlamayın.
- **Tahminleri yerel tutun.** Herhangi bir boyutlandırma birimi tek bir takım için özel bir planlama aracıdır, asla karşılaştırma temeli değil.
- **Yalnızca teslimatı değil, tahmin kalitesini de ölçün.** Yanlış nedenlerle doğru olan bir tahmin şanstır.
- **Tahmini paylaşılan bir şey olarak ele alın.** Paydaşlar ve takım onu birlikte kurar ve olgular değiştiğinde gözden geçirir.
- **Takıma güvenin.** Güvenilen ve desteklenen insanlar dürüst tahminler verir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tahmin isabet oranı | Gerçek sonucun belirtilen aralığın içine düştüğü tahminlerin payı | Gerçek sonucu belirtilen aralığın içinde olan tahminler / yapılan tahminler | yüzde | Tahmin günlüğü ve teslimat kayıtları | Kapasite ve performans yönetimi; sürekli iyileştirme | Planlama konuşmalarında tahmin doğruluğu | Aylık |
| Tahmin aralığı genişliği | Belirtilen aralığın medyan tahmine göre ne kadar geniş olduğu | (üst sınır eksi alt sınır) / medyan tahmin | oran | Tahmin günlüğü | Kapasite ve performans yönetimi | Belirsizlik konisinin daralması | Aylık |
| Teslimat hedefi başarısı | Dönem için belirtilen teslimat hedeflerinin, sonuca göre yargılanarak karşılanan payı | Karşılanan hedefler / belirlenen hedefler | yüzde | Paydaşlarla üzerinde anlaşılmış hedef kayıtları | Hizmet düzeyi yönetimi; sürekli iyileştirme | Paydaşlarla sonuç incelemesi | Aylık ya da bir hedefin her yayınında |
| Kapsam değişim oranı | Tahmin yapıldıktan sonra eklenen, çıkarılan ya da yeniden boyutlandırılan taahhüt edilmiş işin payı | Tahminden sonra eklenen ya da çıkarılan öğeler / özgün tahmindeki öğeler | yüzde | İş izleyicisi değişiklik geçmişi | Değişiklik yetkilendirme; hizmet düzeyi yönetimi | Birikim listesinin geri bildirime uyarlanması | Aylık |
| Kapasite dağılımı | Takım kapasitesinin değişikliğe, operasyonel işe ve iyileştirmeye harcanan payı | Her kategoride tamamlanan öğeler ya da saatler / bütün tamamlanan öğeler ya da saatler | yüzde | İş türü olan iş izleyicisi | Kapasite ve performans yönetimi; olay yönetimi | İş türü dağılımı | Aylık |
| Çıktı hızı kararlılığı | Haftalık çıktı hızındaki değişim | Haftalık çıktı hızının standart sapması / haftalık çıktı hızının ortalaması | oran | İş izleyicisi | Kapasite ve performans yönetimi | Akışın öngörülebilirliği | Aylık |
| Yerel hız | Tek bir takımın bir planlama döneminde kendi boyutlandırma biriminde bitirdiği iş | Dönemde bitti tanımını karşılayan öğelerin tahminlerinin toplamı | takımın tanımladığı puan | İş izleyicisi | Kapasite ve performans yönetimi | Takım kapasite planlama aracı | Planlama dönemi başına |

Saatleri tanımlayın. Bir tahmin, kaydedilip paydaşlarla paylaşıldığında “yapılmış”, sonuç yayımlanıp kullanımda olduğunda, kod birleştirildiğinde değil, “tutmuş” olur. Çıktı hızı, bitti tanımını karşılayan öğeleri sayar; farklı türden öğeler, boyutları çok farklıysa ayrı serilerde sayılır. Yerel hız yalnızca sahibi olan takıma gösterilir.

## Öneriler

### Akıştan tahmin edin

**1. Tahmini çıktı hızından ve çevrim süresinden kurun.** Son 12 ila 26 hafta boyunca her hafta biten öğeleri sayın. Bu geçmişi, belirli bir tarihe kadar kaç öğenin biteceğini ya da bir öğe kümesinin ne zaman bitmesinin olası olduğunu tahmin etmek için kullanın. Takımın kendi geçmişinden binlerce kez örnek alan bir [Monte Carlo yöntemi](https://en.wikipedia.org/wiki/Monte_Carlo_method) benzetimi, geçmişi bir olasılık aralığına dönüştürür. Basit elektronik tablolar ya da küçük betikler bunu iyi yapar. Geçmiş penceresini ve tahminin tarihini belirtin.

**2. Sonuçların yüzdeliklerini raporlayın.** “14 Mart’a kadar yüzde 50, 4 Nisan’a kadar yüzde 85, 18 Nisan’a kadar yüzde 95 olasılıkla” deyin. Her yüzdelik riskin dürüst bir ifadesidir ve paydaşlar ne kadar paya ihtiyaç duyduklarını seçebilir. Tek bir tarih bu seçimi gizler (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**3. Tek tek öğeler için çevrim süresi yüzdeliklerini kullanın.** Tek bir öğe için geçmiş çevrim sürelerinin 85. yüzdeliği, “bu ne kadar sürebilir?” sorusunu herhangi bir tahminden daha iyi yanıtlar. Bunu panoda, devam eden öğelerin yaşıyla karşılaştırılabilecek bir çizgi olarak gösterin (bkz. Konu 2.1 “Akış ölçümleri”).

**4. Öğe boyutlarını kabaca eşit tutun.** Çıktı hızına dayalı tahmin, öğeler küçük ve sayılabilecek kadar benzer olduğunda en iyi çalışır. Takımlar işi hâlâ değer sunan en küçük parçaya dilimleyerek oraya ulaşır; bu, kendi başına sürekli yazılım teslimi alışkanlığıdır. Öğeler çok değişiyorsa farklı iş türleri için ayrı seriler izleyin.

**5. Olgular değiştikçe tahmini tazeleyin.** Tahmin yaşayan bir görünümdür. Kapsam değiştiğinde, takım büyüklüğü değiştiğinde ya da büyük bir olay bir haftayı tükettiğinde yeniden çalıştırın ve paydaşlara söyleyin. Tahminleri sonradan yargılayabilmek için sürümleyin.

### Gerçek kapasiteye göre planlayın

**6. Kapasiteyi iş türüne göre dağıtın.** Takımın biten işinin ne kadarının planlı değişiklik, plansız operasyonel iş, hizmet talepleri ve iyileştirme olduğunu kaydedin. İdeale değil, deneyimin gösterdiği paya göre planlayın. Canlı hizmetleri işleten takımlar çoğu zaman kapasitelerinin üçte birinin ya da fazlasının operasyonel işe gittiğini bulur ve bu rakamı ödünç almak değil ölçmek takımın işidir (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

**7. İyileştirme için kapasite ayırın.** Sürekli iyileştirme işin kalıcı bir parçasıdır; bu yüzden dağılımda ona zaman planlayın ve koruyun. Her yoğun dönemde onu sıkıştırıp çıkaran takımlar operasyonel yüklerinin arttığını görür ve bu onu daha da sıkıştırır. İyileştirme payını ve iyileştirmelerin operasyonel pay üzerindeki etkisini izleyin.

**8. Tam kullanıma göre planlamayın.** Yüzde 100 planlanmış bir takımın değişime yeri yoktur ve kullanım sınıra yaklaştıkça kuyruklar büyür (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”). Beklenmedik için boşluk bırakın ve bunu israf değil bir tasarım tercihi olarak ele alın.

### Tahmin kullanıyorsanız dikkatli kullanın

**9. Hızı yerel bir planlama aracı olarak ele alın.** Bir takım işi hikâye puanlarıyla boyutlandırıyorsa hızı, bir sonraki planlama konuşmasında ne kadarını üstleneceğine karar vermesine yardım edebilir ve yalnızca aynı takımın yakın geçmişiyle karşılaştırılmalıdır. Takımları asla karşılaştırmayın, bir hız hedefi koymayın ya da hızı üretkenlik ölçüsü olarak yukarıya raporlamayın. Puanların takımlar arasında ortak bir birimi yoktur ve sayıyı yükseltme baskısı, daha fazlasını teslim etmeden tahminleri şişirir.

**10. Tahminleri zaman zaman gerçek çevrim süreleriyle karşılaştırın.** Tahminleri öğelerin ne kadar sürdüğüne karşı çizin. Büyük tahminler küçüklerden uzun sürmüyorsa tahmin çabası pek bir şey satın almıyordur ve öğeleri saymak takıma aynı derecede hizmet edebilir. İlişkililerse tahminler tutmaya değer bilgi taşır. Kararı takımın veriyle vermesine bırakın.

### İşe yarayıp yaramadığını ölçün

**11. Her tahmini günlüğe kaydedin ve puanlayın.** Tahmini, aralığı ve gerçek sonucu kaydedin, sonra isabet oranını hesaplayın. İyi kalibre edilmiş bir 85. yüzdelik tahmini zamanın yaklaşık yüzde 85’inde gerçekleşmelidir. İsabetler çok üstündeyse ya da altındaysa yöntemi ayarlayın. Günlüğü paydaşlarla paylaşın, çünkü tahmine güven bir geçmiş kaydından kurulur.

**12. Teslimat hedeflerini sonuca göre yargılayın.** “Müşteriler faturayla ödeme yapabilir” gibi bir hedef, görevler kapandığında değil müşteriler bunu yapabildiğinde karşılanmıştır. Hedefler üzerinde paydaşlarla sade sözlerle anlaşın, birlikte gözden geçirin ve sonucu kaydedin. Bu, planlamayı sürekli iş birliğine bağlı tutar ve kimsenin kullanmadığı işin teslim edilmesini caydırır (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşlenen koruma çizgisi metriği ya da uygulaması |
| --- | --- | --- |
| Tahmin isabet oranı | Her tahmin tutsun diye çok geniş aralıklar belirtmek; olaydan sonra yeniden tahmin etmek | Tahmin aralığı genişliği; özgün tahmini günlükte tutmak; aralıkları emsallerin geçmişiyle karşılaştırmak |
| Tahmin aralığı genişliği | Kendinden emin görünmek için aralıkları daraltmak | Tahmin isabet oranı; aralığın kaydedilmiş geçmişten kurulmasını gerektirmek |
| Teslimat hedefi başarısı | Kolay hedefler koymak; olaydan sonra hedefi yeniden tanımlamak; çıktıyı sonuç saymak | Paydaşların sonucu yargılaması; hedef ifadesinin günlükte tutulması; teslim edilen değişiklik için kullanım verisini denetlemek |
| Kapsam değişim oranı | Geçerli değişiklikleri reddederek kapsamı dondurmak; öğeleri yeniden boyutlandırarak kapsam değişimini gizlemek | Paydaşların duyarlılıktan memnuniyeti; değişiklik nedenlerinin kaydedilmesi |
| Kapasite dağılımı | Operasyonel işi iyileştirme olarak yanlış etiketlemek; panonun dışında çalışarak operasyonel yükü gizlemek | Olay ve talep kayıtlarıyla mutabık kılmak; öğeleri tür için örneklemek |
| Çıktı hızı kararlılığı | Sayıyı yükseltmek için öğeleri önemsiz parçalara bölmek; öğeleri bitirmeden kapatmak | Öğe boyutu dağılımı; yeniden açılma oranı; sunulan değer için örnekleme |
| Yerel hız | Tahminleri şişirmek; puan talep etmek için hikâyeleri bölmek; takımları karşılaştırmak | Takıma özel tutmak; çıktı hızı ve çevrim süresiyle karşılaştırmak; asla hedef koymamak |

Sağlıklı bir okuma, belirtilen oranda gerçekleşen tahminler, paydaşların karşılandığını kabul ettiği hedefler, takımın yaşadığıyla örtüşen bir kapasite resmi ve varsa takım tarafından kullanılan, başkasının kullanmadığı bir hız sayısıdır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Akışa dayalı tahmin | Gerçek veri kullanır, şişirmeye direnir, aralıklar verir | İstikrarlı geçmiş ve benzer boyutlu öğeler gerektirir |
| Tahmine dayalı öngörü | Başlaması hızlıdır, işin tartışılmasını teşvik eder | Öznel, baskı altında şişer, takımlar arasında karşılaştırılamaz |
| Tek tarihli taahhüt | İletmesi basit | Riski gizler; dürüstlüğü cezalandırır |
| Olasılıklı aralık | Belirsizlik konusunda dürüst | Bazı paydaşlar için başta okuması daha zor |
| Tam kullanımda planlama | Verimli görünür | Kuyruklar büyür; olaylara ve öğrenmeye yer yok |
| Planlı boşluk | Değişimi karşılar ve iyileştirmeyi destekler | İkna olmamışlara boş kapasite gibi görünür |

Düzyazı yanıt, akış verisinden başlamak, tahminleri yalnızca takıma yardım ettikleri yerde eklemek ve aralıklarla konuşmaktır. Bir sözleşme tarih talep ettiğinde, 85. ya da 95. yüzdeliğin desteklediği tarihi verin ve neyin onu değiştireceğini söyleyin.

## Takımınızla tartışılacak sorular

**1. Bir paydaş “ne zaman biter” diye sorsa ve dürüst bir yanıt istese ne derdik?**
Takımdan gerçek bir iş parçası için önce tek bir tarihle, sonra bir aralıkla yanıt vermesini isteyin. Her yanıtın ne kadar rahat hissettirdiğindeki farkı fark edin. Kolaylaştırıcı, takımın aralığı dürüstçe verebilmesi için neyi bilmesi gerektiğini, örneğin geçmişi, öğe boyutunu ve bilinen riskleri, yakalamalıdır.

**2. Kapasitemizin gerçekten ne kadarı planlı değişikliğe gidiyor ve bunu nasıl biliyoruz?**
Son üç ayın biten işine türe göre bakın. Takımın yaptığı planla karşılaştırın. Konuşma çoğu zaman operasyonel işin planlanandan büyük, iyileştirme işinin ise küçük olduğunu ortaya çıkarır. Dağılımın ne olması gerektiği ve hangi kararın onu değiştireceği konusunda anlaşın.

**3. Tahminlerimiz nerede bize yardım ediyor, nerede yalnızca zaman kaybettiriyor?**
Bir tahmin örneğini gerçek çevrim süreleriyle karşılaştırarak çizin. Daha büyük tahminlerin gerçekten daha yavaş olup olmadığını tartışın. Bağlantı zayıfsa takımın yalnızca öğeleri sayarsa neyi farklı yapacağını sorun. Bir deneme dönemi için tahmin etmeyi sürdürmeye, basitleştirmeye ya da bırakmaya karar verin.

**4. Takım düzeyindeki planlama sayılarımızı kim görüyor ve onlara ne oluyor?**
Her planlama sayısını takımdan hedef kitlesine kadar izleyin. Kimsenin onunla takımları karşılaştırıp karşılaştırmadığını ya da hedefler koyup koymadığını sorun. Öyleyse bunun nasıl durdurulacağını ve onun yerine ne sunulacağını tartışın. Kolaylaştırıcı, yerel sayıların yolculuk ettiklerinde değerlerini yitirdiğini açıklamaya hazır olmalıdır.

**5. Tahminlerimizden biri ne zaman tutmadı ve ne öğrendik?**
Bir kaçırmayı seçin ve izleyin. Kapsam değişikliği miydi, büyük bir olay mıydı, bir bağımlılık mıydı yoksa yanlış bir varsayım mıydı? Onu daha erken ne işaretlerdi? Tahmin uygulamasında bir değişiklik üzerinde anlaşın; örneğin bağımlılıkları kaydetmek ya da tahmini her hafta tazelemek.

**6. Geçen çeyrek hangi hedefleri karşıladık ve bunu kim söyledi?**
Teslimat hedeflerini ve her birini kimin yargıladığını sıralayın. Takım kendi hedeflerini kendisi yargıladıysa paydaşları nasıl dahil edeceğinizi tartışın. Konuşma sürekli iş birliğini destekler ve hedeflerin görevlerle mi yoksa sonuçlarla mı ilgili olduğunu gösterir.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları tahminin ve onu destekleyen akış verisinin sahibidir. Aralıklar yayımlamalı, öğeleri küçük tutmalı ve olgular değiştiğinde yeniden tahmin etmelidirler. İşi puanlarla boyutlandırmayı seçen takımlar sayıları takımın içinde tutmalıdır. Amaç, istikrarlı bir bitmiş ve değerli iş akışı ve bir geçmiş kaydı olduğu için paydaşların güvendiği bir tahmindir.

### Hizmet ve operasyon takımları

Operasyon takımları planları bozan talebi taşır. Olay ve talep yükünü teslimat takımlarıyla paylaşmalıdırlar; böylece kapasite planları gerçek sayılarla başlar. Aynı zamanda değişiklik teslim eden operasyon takımları, kendi işleri için aynı akışa dayalı tahmini kullanabilir. Değişiklik ve işletim işinin ortak planlanması, iki grup arasında sürekli iş birliği için iyi bir yerdir.

### Liderlik ve yönetişim

Liderler bir tahminin risk ifadesi mi yoksa söz mü olduğuna karar verir. Aralık istemeli, boşluğu ve iyileştirmeyi finanse etmeli ve takımları karşılaştırmak için hızı ya da çıktı hızını kullanmaya direnmelidirler. Yönetişim organları zaman içinde tahmin isabet oranına ve hedef sonuçlarına bakmalı ve tekrarlanan kaçırmaları insanlar hakkında değil, bağımlılıklar ve operasyonel yük gibi sistem hakkında bir sinyal olarak ele almalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar değişikliği ne zaman göreceklerini ve yardımcı olup olmayacağını önemser. Belirtilmiş bir güvenle bir aralık, kayan bir tarihten onlara daha iyi hizmet eder. Hedeflerin karşılanıp karşılanmadığının yargılanmasına dahil edilmelidirler, çünkü sonucu hisseden onlardır. Bir tahmin değiştiğinde kullanıcılara ne zaman ve neden değiştiğini söylemek, onlara iş birlikçi olarak davranmanın parçasıdır.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir enerji şirketinin dijital takımı bir müşteri faturalama portalı kurar ve üretimde işletir. Aşağıdaki sayılar örnekleyicidir.

Paydaşları takımdan, 22 öğeden oluşan yeni bir ödeme planı özelliği için bir tarih istemiştir. Geçen çeyrek takım, tahminlerine dayanarak kesin bir tarih verdi, iki büyük olay yüzünden beş hafta kaçırdı ve paydaş güvenini yitirdi. Bu sefer teslimat lideri son 20 haftanın çıktı hızını çeker; haftada 3 ile 9 öğe arasında değişmektedir ve medyan 6’dır; ayrıca operasyonel işin biten öğelerin yaklaşık yüzde 35’ini aldığını not eder.

Geçmişten bir benzetim çalıştırır. 22 öğenin zamanın yaklaşık yarısında 4 hafta içinde, yaklaşık yüzde 85’inde 6 hafta içinde ve yaklaşık yüzde 95’inde 8 hafta içinde bittiğini gösterir. Bu üç tarihi paydaşlara varsayımlarla birlikte sunar: takım büyüklüğü değişmedi, operasyonel yük son 20 haftaya benziyor ve yeni kapsam yok. Bir ürün sahibi, sekiz hafta sonraki belirli bir faturalama tarihi için yayına çıkmayı sorar. Takım ve paydaşlar yüzde 85 tarihine göre planlamaya, son iki haftayı tampon olarak tutmaya ve yeniden tahmin etmek için iki haftada bir kontrol noktası koymaya karar verir.

İlk kontrol noktasında ödeme geçidindeki bir arıza üç gün almıştır ve benzetim yüzde 85 tarihini bir hafta kaydırır. Takım aynı gün, nedeniyle birlikte paydaşlara bildirir ve onlar düşük değerli bir öğeyi çıkarmayı kabul eder. Özellik tampon tarihinde canlıya çıkar. “Müşteriler arama yapmadan bir ödeme planı kurabilir” teslimat hedefi, üç hafta sonra ürün sahibi ve bir müşteri paneli tarafından yargılanır. Müşterilerin çoğu için karşılanmıştır ve bir yorum teması, birikim listesine katılan bir ekran konusundaki kafa karışıklığını gösterir. Takım, çeyrek için tahmin isabet oranının beşte dört olduğunu kaydeder. Paydaşlar teslimat liderinden bir sonraki planlama oturumuna tahmin aralıkları getirmesini ister ve takım, öğeleri saymak aynı yanıtı verdiği için hikâye puanı kullanmayı bırakır.

## Sektör mercekleri

**Girişim (startup).** Öncelikler hızla değişir; bu yüzden tahminleri kısa ve kaba tutun. Hiçbir maliyeti olmadığı için çıktı hızını baştan itibaren izleyin ve kurucu ortaklara aralıklar verin. Büyük takımlar için kurulmuş bir planlama sistemini içeri almaya direnin.

**Küçük işletme.** Bir ya da iki kişi değişiklik ve işletim işini boş kapasite olmadan birlikte yapıyor olabilir. Ayrım konusunda açık olun ve bir olay bir tarihi iteceğinde sahibine söyleyin. Biten öğelerin basit bir haftalık sayımı yeterlidir.

**Büyük kurum.** Çok sayıda takım ve bağımlılık, tahminleri diğer takımların akışına bağlı kılar. Her takımı kendi verisinden tahmin edin, bağımlılıkları görünür kılın ve aralıkları dikkatle birleştirin; çünkü en iyi durumları toplamak yanıltıcı bir toplam verir. Takımları hızla karşılaştıran toplulaştırmalardan kaçının.

**Devlet ve kamu sektörü.** Sabit bütçeler, satın alma ve yasal tarihler, tek tarihli taahhütler için baskı yaratır. Seçilen yüzdeliğin desteklediği tarihi belirtin, varsayımları açıklayın ve kapsam ödünleşimlerini açıkça kaydedin. Zorunlu bir tarih varsa kapsamı ona sığacak biçimde planlayın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyet düşüktür. Çıktı hızı ve çevrim süresi verisi genellikle takımın iş izleyicisinde zaten bulunur. Bir tahmin elektronik tablosu ya da küçük bir betik bir günde kurulur ve bir tahmin dakikalar içinde güncellenir. Yinelenen maliyet, tahminleri ve sonuçları kaydetme ve paydaşlarla kısa bir kontrol noktası konuşması yapma zamanıdır.

Getiri, daha az sürpriz ve daha iyi kararlardan gelir. Riski anlayan paydaşlar bir tampon seçebilir, kapsamı ayarlayabilir ya da işi erken yeniden sıralayabilir. Öğeleri saymak aynı derecede işe yarıyorsa takımlar tahmin törenlerine daha az zaman harcar. Kaçırılan tarih çatışmaları ve onların kışkırttığı kalite kısayolları azalır. Gerekçeyi kendi kaydınızdan kurun: tutan tahminlerin payı, tahmine harcanan zaman ve geç değil erken yapılan kapsam değişiklikleri. Öngörülebilirlik rakamlarını diğer kuruluşlardan ödünç almayın.

## Anti-desenler ve tuzaklar

- **Bir tahmini taahhüt saymak.** Tahmini hedefe çevirir ve dürüstlük pahalı hâle gelir. Aralıklar sunun ve gözden geçirin.
- **Takımları hıza göre karşılaştırmak.** Puanlar yereldir ve karşılaştırma onları şişirir. Bir takımı yalnızca kendi geçmişiyle karşılaştırın.
- **Tam kullanımda planlamak.** Değişim gecikmeye dönüşür. Boşluk bırakın.
- **Operasyonel işi yok saymak.** Planlar kimsenin planlamadığı yükte çöker. Dağılımı ölçün ve planlayın.
- **Her şey için tek bir tarih kullanmak.** Yüzdelikleri kullanın ve hangisini seçtiğinizi söyleyin.
- **Verinin desteklediğinden daha kesin tahmin etmek.** Uzak iş için ayrıntılı tahminler en az güvenilir olanlardır. Uzak işi kaba biçimde tahmin edin.
- **Bir hız ya da çıktı hızı hedefi koymak.** Sayı yükselir ve değer yükselmez.
- **Tahminleri hiç puanlamamak.** Bir geçmiş kaydı olmadan güven büyüyemez.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tahmin yöntemi | Tek tarihli tahminler | Elle toplanan tahminler | Yüzdeliklerle akışa dayalı aralıklar | Tahminler kaydedilir ve puanlanır; yöntem isabet oranından ayarlanır | Tahminler takımlar ve bağımlılıklar arasında birleşir, paydaşlarla canlı paylaşılır |
| Kapasite planlaması | Planlar operasyonel işi yok sayar | Operasyonel yük kabaca bilinir | Kapasite veriden iş türüne göre dağıtılır | Dağılım sonuçlara karşı gözden geçirilir; iyileştirme zamanı korunur | Kapasite, hizmetler genelinde tedarikçiler ve operasyonlarla birlikte planlanır |
| Hedefler ve sayıların kullanımı | Hedefler görev listeleridir | Hedefler yazıya dökülür | Hedefler paydaşlarla sonuca göre yargılanır | Kaçırmalar sistem sinyali olarak çözümlenir; yerel sayılar özel tutulur | Hedefler kullanıcılarla iş birliği içinde belirlenir ve yargılanır; öğrenme takımlar arasında paylaşılır |

## Kontrol listesi

- [ ] Tahminler takımın kendi çıktı hızı ve çevrim süresi geçmişinden kurulur.
- [ ] Tahminler yüzdeliklerle aralıklar olarak, varsayımlar belirtilerek verilir.
- [ ] Her tahmin, aralığı ve gerçek sonucuyla günlüğe kaydedilir.
- [ ] Tahmin isabet oranı ve aralık genişliği aylık gözden geçirilir.
- [ ] Kapasite, operasyonel iş ve iyileştirme dahil, iş türüne göre dağıtılır.
- [ ] Planlı kullanım, değişim ve olaylar için boşluk bırakır.
- [ ] Herhangi bir boyutlandırma birimi ya da hız takıma özeldir ve hedef taşımaz.
- [ ] Teslimat hedefleri sonuç olarak yazılır ve paydaşlarla yargılanır.
- [ ] Kapsam değişiklikleri nedenleriyle kaydedilir.
- [ ] Olgular değiştiğinde tahminler tazelenir ve paydaşlara söylenir.

## Yapay zekâ istemleri

**Çıktı hızına dayalı bir tahmin kurun.**

```text
Takımımız son [sayı] haftanın her birinde şu sayıda öğe bitirdi:
[haftalık sayıları yapıştırın]. [Sayı] öğenin ne zaman bitmesinin olası
olduğunu bilmek istiyoruz. Kendi geçmişimizi kullanarak bir olasılık aralığının
nasıl üretileceğini açıklayın, basit bir benzetim yönteminin çalışılmış bir
örneğini verin ve hangi varsayımları yaptığını anlatın. Geçmiş ya da kıyaslama
değerleri uydurmayın. Varsayımlarınızı ve tahminin uygulanmayacağı koşulları
listeleyin.
```

**Tahmin kullanımımızı gözden geçirin.**

```text
Öğeleri [birim] olarak boyutlandırıyoruz ve planlamak için [uygulama] kullanıyoruz.
Tahminleri ve gün cinsinden gerçek çevrim süreleri olan [sayı] biten öğelik bir
örnek: [veriyi yapıştırın]. Bu örnekte tahminlerin çevrim süresini öngörüp
öngörmediğini, bunun tahmin etmenin ne kadar emeği hak ettiği konusunda neyi
ima ettiğini ve onun yerine neyi deneyebileceğimizi açıklayın. Verinin ötesinde
sonuçlar iddia etmeyin. Varsayımlarınızı listeleyin.
```

**Değişiklik ve işletim işi arasında kapasite planlayın.**

```text
Son [dönem] boyunca takımımız şu türlerde [sayılar] öğe bitirdi:
[planlı değişiklik, olaylar, talepler, iyileştirme]. Bir sonraki [dönem] için
boşluk bırakan bir kapasite dağılımı önerin ve bunu paydaşlara nasıl açıklayacağımı
anlatın. Operasyonel işin yanlış etiketlenip etiketlenmediğinin nasıl
saptanabileceğini önerin. Sektör oranları uydurmayın. Varsayımlarınızı listeleyin.
```

**Paydaşlarla bir tahmin incelemesi taslağı hazırlayın.**

```text
[İş parçası] için bir tahmin kontrol noktası için bir gündem ve tek sayfalık bir
özet taslağı hazırlayın. Veri: özgün tahmin [aralık], mevcut durum [açıklama],
son kontrol noktasından bu yana değişiklikler [liste]. Güncellenmiş aralığı,
neyin değiştirdiğini, kapsam ya da zamanlama seçeneklerini ve paydaşların
yanıtlamasını istediğimiz soruları ekleyin. Sade bir dil kullanın. Varsayımlarınızı
listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir tahmin ya da planlama metriği için eşlenen koruma çizgisini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gözden geçirilmiş bir planlama metriği girdisinin oyunlaştırma vektörünü ve koruma çizgisini koruduğunu denetlemek için kullanın.

## Temel çıkarımlar

- Biten işin akışından tahmin edin ve tek tarih yerine olasılıklı aralıklar verin.
- Operasyonel iş, iyileştirme zamanı ve boşluk dahil, gerçek kapasiteye göre planlayın.
- Herhangi bir tahmin birimini ya da hızı bir takım için özel bir yardımcı olarak ele alın, asla hedef ya da karşılaştırma olarak değil.
- Tahminlerinizi puanlayın: isabet oranı güven kurar.
- Teslimat hedeflerini sonuca göre, paydaşlar ve kullanıcılarla birlikte yargılayın.
- Takıma güvenin ve destek olun: dürüst tahminler, belirsizlik yüzünden cezalandırılmayan insanlardan gelir.

## Kaynaklar ve ileri okuma

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
