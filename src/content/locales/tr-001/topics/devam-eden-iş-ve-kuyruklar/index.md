# Devam eden iş ve kuyruklar

**Tamamen meşgul bir takım, işi bekleyen bir takımdır; bu yüzden ne kadar işin devam ettiğini, ne kadar kuyrukta beklediğini ve takımın kapasiteye ne kadar yakın çalıştığını ölçün ve gecikmeler gelmeden önce sınırları belirlemek için kuyrukların aritmetiğini kullanın.**

## Genel bakış ve motivasyon

Her hizmet takımının, kelimeyi kullansın kullanmasın bir kuyruğu vardır. Olaylar triyaj için, talepler onay için, değişiklikler bir inceleme aralığı için, birikim listesi öğeleri ise birinin kendilerini çekmesi için bekler. Bu sistemlerde geçen sürenin çoğu çalışarak değil, bekleyerek harcanır. Bu konudaki ölçümler beklemenin neden büyüdüğünü, nasıl erken görülebileceğini ve bir takımın bu konuda neler yapabileceğini açıklar.

Merkezî nicelik, başlamış ve henüz bitmemiş öğelerin sayısı olan [devam eden iş](https://en.wikipedia.org/wiki/Work_in_process)tir (WIP). Akışı yöneten çevik takımlar WIP’i bir panoda görünür kılar ve bir WIP sınırıyla tavanlar. ITIL kapsamındaki hizmet operasyonları açık olayları, talepleri ve değişiklikleri sayar ve bu kümeye kayıtların kuyruğu ya da birikim listesi der. İki bakış aynı şeyi tanımlar: henüz teslim edilmemiş, bir sistemin içindeki öğeler. Bu konu ikisi için de “devam eden iş” terimini kullanır ve her seferinde sınırı belirtir (hangi durumların “devam ediyor” sayıldığı ve hangilerinin sayılmadığı), çünkü sonraki her sayıyı bu sınır belirler.

Matematik, bekleme hatlarının incelenmesi olan [kuyruk kuramından](https://en.wikipedia.org/wiki/Queueing_theory) gelir. Bir hizmet takımı için en yararlı sonucu, John Little tarafından 1961’de kanıtlanan [Little yasasıdır](https://en.wikipedia.org/wiki/Little%27s_law). Kararlı bir sistemde sistemdeki ortalama öğe sayısı, ortalama varış hızı ile bir öğenin sistemde geçirdiği ortalama sürenin çarpımına eşittir. Teslimat terimleriyle ortalama WIP, ortalama çıktı hızı ile ortalama çevrim süresinin çarpımına eşittir. Yasa, öğelerin hangi sırayla hizmet gördüğünden bağımsız olarak geçerlidir; bu da onu herhangi bir akış metrikleri kümesi üzerinde ucuz bir akıl sağlığı denetimi yapar (bkz. Konu 2.1 “Akış ölçümleri” ve Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”).

İkinci sonuç daha az rahatlatıcıdır. Paylaşılan bir kaynak tam kullanıma yaklaştıkça bekleme süresi gittikçe hızlı artar. İlgili bir yaklaşım olan [Kingman formülü](https://en.wikipedia.org/wiki/Kingman%27s_formula), kuyruk gecikmesinin kullanım oranıyla, kullanım oranının kalan boş kesre oranıyla orantılı olarak büyüdüğünü ve ayrıca varışların ve hizmet sürelerinin değişkenliğiyle de büyüdüğünü gösterir. Destek ve operasyon işi doğası gereği değişkendir; olaylar öbekler hâlinde gelir ve öğe başına emek çok değişir. Yüzde 100 meşgul olmayı planlayan bir takım bu nedenle uzun beklemeleri planlamıştır ve ilk büyük olay, uzun beklemeleri temizlenmesi haftalar süren bir birikime dönüştürür.

Bu konuda kullanılan terimler:

- **Varış hızı**, birim zamanda sisteme giren öğelerin sayısıdır.
- **Çıktı hızı** (ya da çıkış hızı), birim zamanda bitmiş olarak sistemden çıkan öğelerin sayısıdır.
- **Çevrim süresi**, bir öğenin sistem sınırına girdiği andan ondan ayrıldığı ana geçen süredir. Bu konu, Konu 2.2’deki saatin aynısını kullanır.
- **Kuyruk süresi**, geçen sürenin, bir öğenin beklediği ve kimsenin üzerinde çalışmadığı kısmıdır.
- **Kullanım oranı**, mevcut kapasitenin kullanılan kesridir. Bir takım için kapasite, iş saatleri ya da paralel ele alınabilen öğe sayısı olarak ifade edilir. Kullanım oranı bir takımın ya da bir kaynak havuzunun özelliğidir, asla bir bireyin değil.
- **WIP sınırı**, bir aşamadaki ya da bütün sistemdeki öğeler için üzerinde anlaşılmış azami sayıdır. Sınıra ulaşıldığında yeni öğe başlatılmaz.
- **Darboğaz**, talebe göre en az kapasiteye sahip aşamadır. Bütün zincirin hızını belirler; bu, [kısıtlar kuramı](https://en.wikipedia.org/wiki/Theory_of_constraints) ve onun [darboğaz](https://en.wikipedia.org/wiki/Bottleneck_(production)) fikri tarafından geliştirilen bir noktadır.

Çevik ve ITIL bakış açıları burada buluşur: ITIL 4 (2019) kapasite ve performans yönetimini, olay yönetimini ve hizmet talebi yönetimini kapasiteyi talebe eşleştirmeye bağlı uygulamalar olarak ele alır; çevik yöntemler aynı fikri devam eden işi sınırlamak ve başlamadan önce bitirmek olarak ifade eder. [Yalın yazılım geliştirme](https://en.wikipedia.org/wiki/Lean_software_development), bitmemiş işi taşıma maliyeti ve riski olan envanter olarak ele alır.

## Temel ilkeler

- **Bekleme, geçen süreye egemendir.** Çoğu hizmet ve teslimat sisteminde öğeler, üzerlerinde çalışılandan çok daha uzun bekler; bu yüzden beklemeyi azaltmak daha hızlı çalışmaktan daha büyük bir kaldıraçtır.
- **Little yasası üç akış sayısını birbirine bağlar.** Ortalama WIP, çıktı hızı ve çevrim süresi bağımsız belirlenemez. Aynı çıktı hızında daha kısa çevrim süresi istiyorsanız WIP’i düşürmelisiniz.
- **Gecikme tam kullanıma yakın dik biçimde büyür.** Boşluk, duyarlılığın bedelidir. Boş kapasitesi olmayan bir takım, her şeyi geciktirmeden bir ani yükü ya da acil bir öğeyi karşılayamaz.
- **Değişkenlik kuyrukları büyütür.** Dengesiz varışlar ve dengesiz öğe boyutları, ortalama yük kabul edilebilir göründüğünde bile kuyrukları uzatır. Değişkenliği azaltabildiğiniz yerde azaltın, azaltamadığınız yerde tamponlayın.
- **WIP’i meşgul görünmek için değil, işi bitirmek için sınırlayın.** WIP sınırı, engellenmiş iş ve kapasite hakkında bir konuşmanın tetikleyicisidir; bir uyum kuralı değildir.
- **Sistem düzeyinde ölçün.** WIP, kuyruk uzunluğu ve kullanım oranı takımları ve hizmetleri tanımlar, asla içlerindeki insanları değil.
- **Ortalama değil dağılım raporlayın.** Kuyruk süreleri uzun kuyrukludur; bu yüzden medyanı ve 85. ya da 95. gibi yüksek bir yüzdeliği gösterin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

## Metrik tanımları

Yedi ölçüm konuyu kapsar. Her biri, takımın metrik siciline yazdığı adlandırılmış bir sınır için tanımlanır (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Devam eden iş | Üzerinde anlaşılmış sınır içinde başlamış ve bitmemiş öğelerin sayısı | Anlık görüntü zamanında “devam ediyor” durumlarındaki öğelerin sayısı; ilk çalışma durumundan önce birikim listesindeki ya da “hazır” kuyruğundaki öğeler ve zaten bitmiş öğeler hariç tutulur | öğe | Sorun izleyici ya da ITSM aracı durum geçmişi | Olay yönetimi; hizmet talebi yönetimi | Panoda WIP sayısı | Günlük anlık görüntü, haftalık incelenir |
| Kuyruk uzunluğu | Çalışmanın başlamasını ya da aşamalar arasında beklemeyi bekleyen öğelerin sayısı | Anlık görüntü zamanında bekleme durumlarındaki (örneğin “yeni”, “triyaj bekleniyor”, “inceleme bekleniyor”) öğelerin sayısı; engellenmiş öğeler eklenmez, ayrıca raporlanır | öğe | İzleyici ya da ITSM durum geçmişi | Olay yönetimi; değişiklik yetkilendirme | Panoda hazır sütunu ve kuyruk sütunları | Günlük anlık görüntü, haftalık incelenir |
| Kuyruk süresi | Bir öğenin, aşama başına, işin başlamasından önce beklediği süre | Saat öğe bir bekleme durumuna girdiğinde başlar ve bir sonraki etkin duruma girdiğinde durur; “müşteri tarafından engellendi” olarak işaretlenmiş durumdaki süre hariç tutulur ve ayrı bir rakam olarak raporlanır; medyanı ve 85. yüzdeliği raporlayın | saat ya da gün | İzleyicideki ya da ITSM aracındaki durum geçiş zaman damgaları | Hizmet masası; olay yönetimi; değişiklik yetkilendirme | Değer akışında bekleme süresi; kuyruk sütunlarında geçen süre | Haftalık |
| Varış ve çıkış hızı | Dönem başına sisteme giren ve ayrılan öğeler ve aralarındaki fark olarak net kuyruk büyümesi | Varışlar = dönemde sınıra giren öğeler; çıkışlar = dönemde tamamlanan öğeler; net büyüme = varışlar eksi çıkışlar; yeniden açılan öğeler, takım öyle tanımlamadıkça varış sayılmaz | haftada öğe | İzleyici ya da ITSM oluşturma ve çözme zaman damgaları | İzleme ve olay yönetimi; olay yönetimi | Çıktı hızı ve kümülatif akış diyagramı | Haftalık |
| Takım yük oranı | Planlı ve beklenen işin tüketeceği takım kapasitesinin payı | Dönemde beklenen talep saatleri (varışlar çarpı öğe başına ortalama emek) / izin ve sabit taahhütlerden sonra kullanılabilir kapasite saatleri; takım emeği nasıl tahmin ettiğini belirtir; bireyler asla raporlanmaz | yüzde | Kapasite planı, izleyici emek geçmişi, nöbet çizelgesi | Kapasite ve performans yönetimi; iş gücü ve yetenek yönetimi | Planlı işte takım kapasitesi | Aylık ve her planlama etkinliğinde |
| WIP sınırı aşım oranı | Bir aşamanın ya da sistemin üzerinde anlaşılmış WIP sınırını aştığı günlerin payı | WIP’in sınırın üzerinde olduğu günler / dönemdeki iş günleri; takımın bir nedenle bilinçli bir istisna kaydettiği günler ayrıca raporlanır | günlerin yüzdesi | Günlük WIP anlık görüntüleri ve istisna günlüğü | Sürekli iyileştirme; olay yönetimi | WIP sınırı çalışma anlaşması | Haftalık |
| Little yasası tutarlılık oranı | Üç akış sayısının birbiriyle uyumlu olup olmadığının denetimi | Dönem boyunca ortalama WIP / (günlük çıkışlar çarpı gün cinsinden ortalama çevrim süresi), aynı sınır ve dönem için; 1’e yakın bir oran tanımların tutarlı olduğunu, 1’den uzak bir oran bir sınırın ya da saatin tutarsız olduğunu gösterir | oran | Diğer akış metrikleriyle aynı izleyici verisi | Ölçme ve raporlama | Retrospektifte akış metriği akıl sağlığı denetimi | Aylık |

## Öneriler

### Önce sınırı tanımlayın

**1. Herhangi bir şeyi saymadan önce sistem sınırını yazın.** Hangi durumun “devam ediyor”u başlattığını ve hangisinin bitirdiğini, hangi öğelerin hariç tutulduğunu (örneğin planlı bakım ya da müşteri bekleyen öğeler) belirtin. WIP’i farklı sayan iki takım karşılaştırılamayan sayılar üretir ve sessizce kayan bir sınır Little yasası denetimini bozar. Sınırı metrik siciline kaydedin ve yalnızca kayıtlı bir nedenle değiştirin.

**2. Durum modelinde beklemeyi çalışmadan ayırın.** Tek bir durum hem “inceleme için kuyrukta” hem “inceleniyor” anlamına geliyorsa kuyruk süresi görünmezdir. Bekleme durumlarına, Konu 1.5’te (“Veri kaynakları ve enstrümantasyon”) açıklandığı gibi kendi adlarını verin; böylece geçiş zaman damgaları gecikmeyi ortaya çıkarır. Bir ek durumun maliyeti, öğelerin nerede durduğunu görmenin değerine kıyasla küçüktür.

### Little yasasını tutarlılık denetimi olarak kullanın

**3. Little yasası denetimini her ay çalıştırın.** Aynı dönem ve sınır için ortalama WIP’i, çıktı hızını ve ortalama çevrim süresini hesaplayın ve kabaca uyuşup uyuşmadıklarına bakın. Büyük bir uyuşmazlık genellikle öğelerin sayılmadan sisteme girdiği ya da sistemden çıktığı ya da eski öğelerin ilgilenilmeyen bir durumda park edildiği anlamına gelir. Herhangi bir eğilimi yorumlamadan önce veriyi düzeltin. Yasa kararlı sistemler hakkında bir teoremdir; bu yüzden kuyruğun çarpıcı biçimde büyümediği ya da küçülmediği dönemlere uygulayın.

### Kullanım oranını ve kuyruk büyümesini izleyin

**4. Değişkenliğin yüksek olduğu yerde boşluk planlayın.** Olay ele alma, nöbet işi ve rastgele talep tarafından beslenen her kuyruk için tam kapasitenin altında planlayın; böylece bir ani yük birikime dönüşmez. Takımlar sıklıkla, kâğıt üzerinde rahat görünen bir yük oranının kesintiler sayıldığında zaten çok yüksek olduğunu görür (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”). Hedef aralık üzerinde işi yapan insanlarla anlaşın ve her büyük olaydan sonra gözden geçirin.

**5. Kuyruk boyutunun yanı sıra net kuyruk büyümesini de izleyin.** Küçülen 40 öğelik bir kuyruk sağlıklıdır; haftada 5 öğe büyüyen 15 öğelik bir kuyruk değildir. Varışları ve çıkışları her hafta karşılaştırın ve eğilimi, bir aşama için genişleyen bandın orada büyüyen WIP’e işaret ettiği bir [kümülatif akış diyagramıyla](https://en.wikipedia.org/wiki/Cumulative_flow_diagram) grafiğe dökün. Varışlar birkaç hafta boyunca çıkışları aştığında kuyruk sınırsız büyüyordur ve bir karar zamanı gelmiştir: kapasite eklemek, talebi azaltmak ya da kabul edilenleri değiştirmek.

**6. Darboğazı bulmak için kuyruk süresini aşamaya göre okuyun.** Geçen süreyi aşama başına bekleme dönemlerine ayırın. En uzun kuyruk süresine ve en çok bekleyen öğeye sahip aşama, olası bir darboğazdır. Başka herhangi bir aşamayı iyileştirmek bütün sistemi kısaltmaz; bu yüzden iyileştirme çabasını kısıta yöneltin ve sonrasında yeniden denetleyin, çünkü kısıt yer değiştirir.

### WIP’i işe yarayacak biçimde sınırlayın

**7. İlk WIP sınırını gözlemden belirleyin, sonra ayarlayın.** Mevcut ortalama WIP’e yakın ya da biraz altında başlayın ve çevrim süresine ve engellenmiş öğelere ne olduğunu gözlemleyin. Takım hâlâ her kişiyi işi bitirmede üretken tutabildiği sürece sınırı adım adım düşürün. Evrensel bir doğru sayı yoktur ve başka bir takımdan ödünç alınmış bir rakam sizinki için hiçbir kanıt taşımaz.

**8. Bir aşımı ihlal değil, bir uyarıcı olarak ele alın.** WIP sınırı aştığında neyin tamamlanmayı engellediğini ve kimin üzerine yoğunlaşabileceğini sorun. Acil bir üretim düzeltmesi gibi bir nedenle kaydedilmiş bir aşım bilgidir. Aşımlar rutin hâline gelirse sınır yanlıştır ya da sistem aşırı yüklüdür ve yanıt bir azar değil, bir kapasite konuşmasıdır.

**9. Sınırları tek bir sütuna değil bütün değer akışına uygulayın.** Yalnızca “devam ediyor” üzerindeki bir sınır, işin inceleme, test ve onay kuyruklarında birikmesine izin verir. Sistemdeki öğe sayısını uçtan uca sınırlayın ve belirli bir kuyruk büyümeyi sürdürdüğünde aşama sınırları ekleyin. Bir değişiklik danışma incelemesi ya da bir test ortamı gibi paylaşılan aşamalar, kendi görünür sınırlarını ve kendi kuyruk sürelerini hak eder.

### Acil ve değişken işi bilinçli ele alın

**10. Hızlandırılmış işe bir politika verin.** Politika olmadan acil öğeler sessizce her sınırı aşar ve takım planlı yükü plansız yükten ayıramaz. Neyin nitelikli sayıldığını, aynı anda kaç hızlandırılmış öğenin yürüyebileceğini ve hangi işin duracağını tanımlayın. Hızlandırılmış öğeleri ve bunların kuyruk süresi üzerindeki etkisini sayın; böylece aciliyetin maliyeti onu talep edenlere görünür olur (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşlenen koruma çizgisi metriği ya da uygulaması |
| --- | --- | --- |
| Devam eden iş | Sınırın altında kalmak için öğeleri “park edilmiş” ya da “beklemede” durumuna taşımak; daha küçük görünmek için öğeleri bölmek; işe panonun dışında başlamak | Park edilmiş durumlardaki öğelerin sayısı ve yaşı; panoyu gerçek işe karşı örneklemek; devam eden en yaşlı öğeyi raporlamak |
| Kuyruk uzunluğu | Öğeleri kapatıp yeniden açmak; yeni öğeleri kapıda reddetmek; bekleme durumlarını sayımın dışında kalacak biçimde yeniden adlandırmak | Kuyruk uzunluğunun yanında yeniden açılma oranı ve reddetme oranı; her metrik incelemesinde durum tanımlarının gözden geçirilmesi |
| Kuyruk süresi | İş hazır olduktan sonra kaydı oluşturarak saati geç başlatmak; saati engellenmiş ya da müşteri bekleme durumlarından geçirerek duraklatmak; yalnızca açılmış bir öğeyi devam ediyor diye işaretlemek | Engellenmiş ve duraklatma durumlarındaki sürenin dağılımı; başladıktan sonra oluşturulan öğelerin payı; kısa bir anketten talep edenin bildirdiği bekleme |
| Varış ve çıkış hızı | Çıkışları artırmak için öğeleri hızla kapatmak; her iki sayıyı artırmak için bir talebi çoklu talebe bölmek; kopyaları varış saymak | Kapatılan öğelerde kalite ve yeniden açılma ölçümleri (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”); öğelerin boyut dağılımı; müşteri sonucu denetimi |
| Takım yük oranı | Boş kapasite göstermek için emeği düşük tahmin etmek ya da kadroyu gerekçelendirmek için talebi abartmak; elverişli bir dönem için oran raporlamak | Öğe başına tahmin edilen ve gerçekleşen emeği karşılaştırmak; oranı eğilimi ve kesinti payıyla göstermek; tahmin yönteminin akran incelemesi |
| WIP sınırı aşım oranı | Aşımları durdurmak için sınırı yükseltmek; öğeleri panodan çıkararak aşımları gizlemek; istisnaları gelişigüzel vermek | İstisnaların sayısı ve nedenleri; sınır değişikliklerinin tarihli geçmişi; aşım oranının yanında çevrim süresi yüzdeliği |
| Little yasası tutarlılık oranı | Oran 1’e yaklaşana kadar sınırı ya da dönemi ayarlamak; uzun ömürlü öğeleri aykırı değer diye dışlamak | Sınırı ve dönemi önceden sabitlemek; dışlanan öğeleri ve sayılarını yayımlamak; sınır değişikliklerini bir nedenle gözden geçirmek |

Sağlıklı bir okuma, WIP’i kararlı ya da düşen, kuyruk süresi yüzdelikleri düz ya da iyileşen, varışları ve çıkışları kabaca dengeli ve aşımları eyleme yol açan nedenlerle gelen bir takımdır. Little yasası oranı, birisi onu ayarladığı için değil veri tutarlı olduğu için 1 civarında dolaşır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Sıkı WIP sınırları | Daha kısa çevrim süresi, sorunların daha erken keşfi, daha çok bitirme | Bir aşamada boşta kalma süresi görülebilir; disiplin ve bir miktar çapraz beceri gerektirir; işin başlamasını isteyen paydaşları hayal kırıklığına uğratabilir |
| Gevşek ya da hiç WIP sınırı olmaması | Herkes meşgul görünür ve talepler hızla kabul edilir | Uzun kuyruklar, yavaş teslimat, gizli tıkanıklıklar, yoğun bağlam değiştirme |
| Planlı boşluk kapasitesi | Ani yükleri ve acil işi karşılar; yanıt sürelerini kısa tutar | Bir kullanım raporunda israf gibi görünür; liderliğin daha düşük görünür verimliliği kabul etmesini gerektirir |
| Yüksek planlı kullanım | Verimli ve saat başına ucuz görünür | Yük kapasiteye yaklaştıkça bekleme dik biçimde büyür; herhangi bir aksama karşısında kırılgandır |
| Planlama için Little yasasını kullanmak | Basit, genel ve uygulaması hızlı | Yalnızca kararlı sistemler ve ortalamalar için geçerlidir; tek bir öğe hakkında hiçbir şey söylemez |

Değişkenliğin ve gecikme maliyetinin yüksek olduğu yerde WIP’i sınırlayın ve boşluğu koruyun; iş kararlı ve bağımsız olduğunda daha gevşek sınırları kabul edin.

Rastgele varışlı ve hizmet süreli tek bir sunucunun en basit ders kitabı modelinde (bir M/M/1 kuyruğu), sistemde ortalama süre, hizmet süresinin bir eksi kullanım oranına bölümüdür: yüzde 50’de 2 katı, yüzde 80’de 5 katı, yüzde 90’da 10 katı ve yüzde 95’te 20 katı. Gerçek takımlar tek sunucu değildir; bu yüzden bu rakamları bir tahmin olarak değil, eğrinin biçimi olarak ele alın.

## Takımınızla tartışılacak sorular

**1. Bizim için “devam ediyor” ne sayılır ve hepimiz aynı şekilde mi sayıyoruz?**
Her kişiden bir öğeyi WIP’in parçası yapan ilk ve son durumu adlandırmasını isteyin, sonra yanıtları karşılaştırın. Bazı kişilerin saydığı ve bazılarının saymadığı “beklemede” ya da “müşteri bekleniyor” gibi durumlara bakın. Tek bir sınır üzerinde anlaşın ve yazın. Kolaylaştırıcı, yanıtların WIP sayısını nasıl değiştireceğini not etmelidir, çünkü bu, metriğin tanıma ne kadar duyarlı olduğunu gösterir.

**2. Öğelerimiz en uzun nerede bekliyor ve o kuyruğun sahibi kim?**
Varıştan bitişe akışı çizin ve bekleme noktalarını işaretleyin. Yakın zamandaki bir ayın verisini kullanarak her noktadaki medyan ve 85. yüzdelik beklemeyi tahmin edin. Bir onay adımı ya da paylaşılan bir test ortamı gibi kimsenin sahiplenmediği kuyruğu tartışın. Ayrıntılı inceleyeceğiniz bir kuyruk ve gelecek sefer veriyi getirecek bir kişi üzerinde anlaşın.

**3. Yaptığımız iş türü için ne kadar meşgul olmak fazla meşgul olmaktır?**
Planlı yükü, kesintilere ve acil öğelere gerçekte harcanan zaman payıyla karşılaştırın. Talep son ani yükte olduğunda kuyruğa ne olduğunu sorun. Boş kapasitesi olmayan bir takımın hızlı yanıt veremeyeceği fikrini tartışın. Kolaylaştırıcı, konuşmayı tek bir sayıya değil yük oranı için bir hedef aralığa ve aralık aşıldığında ne olacağına dair bir plana yöneltmelidir.

**4. Kuyruğumuz büyüyor, küçülüyor ya da sabit mi ve bunu nasıl biliyoruz?**
Son sekiz haftanın varışlarına ve çıkışlarına bakın. Basit bir grafik yeterlidir. Yavaş bir artışın sorun olmadan önce fark edilip edilmeyeceğini ve hangi sinyalin eylemi tetikleyeceğini sorun. Çıkışlar üst üste üç hafta varışların gerisinde kaldığında takımın ne yapması gerektiği üzerinde anlaşın.

**5. WIP sınırımızı bir düşürsek ne olurdu?**
İnsanlardan hangi öğelerin bekleyeceğini, hangilerinin daha erken biteceğini ve yeni bir şeye başlayamadıklarında ne yapacaklarını öngörmelerini isteyin. Boşta görünmek gibi korkuları yüzeye çıkarın.

**6. Sayılarımız birbiriyle uyuşuyor mu?**
Bir aylık veriyi alın ve ortalama WIP’i, çıktı hızını ve ortalama çevrim süresini hesaplayın. WIP’in kabaca çıktı hızı çarpı çevrim süresi olup olmadığını denetleyin. Değilse nedenini, örneğin bitirilmiş ama kapatılmamış öğeleri ya da başlanmadan kapatılmış öğeleri arayın. Kolaylaştırıcı bir uyuşmazlığı bir hediye olarak görmelidir: aksi hâlde diğer her akış metriğini bozacak bir veri ya da tanım sorununa işaret eder.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları aşırı WIP’in etkilerini bağlam değiştirme, geç geri bildirim ve çürüyen bitmemiş iş olarak hisseder. En çok görünür WIP sınırlarından, küçük öğelerden ve başlamadan önce bitirme alışkanlığından yararlanırlar. Bir takım, inceleme beklemek gibi aşamalar arasındaki kendi kuyruk sürelerine bakmalıdır, çünkü bu gecikmeler genellikle kodlamaya harcanan süreden büyüktür (bkz. Konu 2.7 “Çekme isteği ve kod inceleme metrikleri”).

### Hizmet ve operasyon takımları

Operasyon takımları rastgele talebe karşı karşıyadır; bu yüzden kuyruk etkileri güçlüdür. Bir hizmet masası, bir nöbet rotasyonu ve bir değişiklik inceleme kurulu, her biri değişken varışlı bir kuyruk gibi davranır. Bu takımlar açık boşluğa, net öncelik kurallarına ve hızlandırılmış iş için bir politikaya ihtiyaç duyar; böylece acil öğeler sessizce diğer her şeyin yerini almaz (bkz. Konu 3.1 “Hizmet masası metrikleri” ve Konu 5.7 “Angarya ve nöbet metrikleri”). Kuyruk süresini her devir teslimde ölçün ve gruplar arasında seken işi izleyin (bkz. Konu 9.3 “İş birliği ve devir teslim metrikleri”).

### Liderlik ve yönetişim

Liderler, kabul ettikleri talep ve ödüllendirdikleri kullanım oranı yoluyla kuyrukları etkiler. Kullanım oranının yanı sıra kuyruk süresi yüzdeliklerini ve net kuyruk büyümesini istemeli ve sağlıklı bir hizmetin tam kapasitenin altında çalıştığını beklemelidir. Zaten sınırında olan bir takıma daha fazla proje eklemek talebi, herkesin çevrim süresini uzatma kararıdır ve yönetişim bu ödünleşimi açık kılmalıdır. Genel verimlilik sürüşleri yerine kısıt için kapasiteyi finanse edin (bkz. Konu 5.4 “Kapasite ve performans metrikleri”).

### Müşteriler ve kullanıcılar

Müşteriler kuyruklanmayı bir yanıt için beklemek olarak deneyimler ve takımın ne kadar meşgul olduğunu nadiren önemserler. Geçmiş beklemelerin dağılımına dayalı dürüst beklentilere, taleplerinin durumunu görmenin bir yoluna ve acil ihtiyaçlar için bir yükseltme yoluna ihtiyaç duyarlar. WIP’i sınırlamak, yeni taleplerin daha yavaş kabul edilmesi ve kabul edilenlerin daha hızlı tamamlanması anlamına gelebilir ve bu seçim onlara açıklanmalıdır (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanında bir hizmet masası, bir altyapı takımı ve bir uygulamalar takımı vardır. Bu örnekteki bütün sayılar örnekleyicidir.

Uygulamalar takımı klinik sistemler için hizmet taleplerini ve küçük değişiklikleri ele alır. Bir çeyrek boyunca panosu, medyan çevrim süresinin 6 iş gününden 11’e çıktığını gösterirken takım “tam gaz” olduğunu bildirir. Takımın çeyrek için hesapladığı yük oranı yüzde 98’dir. “Klinik onay bekleniyor” aşaması için kuyruk süresinin 85. yüzdeliği 9 iş günüdür ve panodaki ortalama WIP, iş günü başına 4 öğelik çıktı hızına karşı 44 öğedir. Little yasası uygulandığında 44’ün 4’e bölümü 11 iş günlük örtük bir ortalama çevrim süresi verir; bu, ölçülen rakamla uyuşur, dolayısıyla veri tutarlıdır ve takım ona güvenir.

Departman başkanı önce bir yüklenici işe almayı önerir. Takım lideri aşama dökümüne işaret eder: 11 günün çoğunu klinik onaydan önceki kuyruk ve dağıtımdan önceki kuyruk oluşturur, etkin iş ise küçük bir paydır. Çeyrek boyunca varışlar çıkışları haftada yaklaşık 2 öğe aşmış, dolayısıyla kuyruk istikrarlı biçimde büyümüştür. Takım ayrıca her acil talebi kabul etmektedir ve hızlandırılmış öğelerin bir politikası yoktur.

Takım, karar günlüğüne kaydedilen dört değişikliğe karar verir. Onay kuyruğunda aşama sınırı 8 olmak üzere, sistem genelinde 30 öğelik bir WIP sınırı koyar. Beklenen kesintiler sığsın diye yaklaşık yüzde 80’lik bir yük oranı planlar. Aynı anda en fazla iki acil öğeye izin veren bir hızlandırma politikası yazar. Klinik onay grubundan haftalık bir toplantı yerine kısa bir günlük inceleme aralığı düzenlemesini ister. Sekiz hafta sonra takım, 7 iş günlük bir medyan çevrim süresi, onayda 3 iş günlük bir 85. yüzdelik kuyruk süresi ve nedenleri kaydedilmiş, günlerin yüzde 10’luk bir aşım oranı raporlar.

Takım ikinci ayda bir oyunlaştırma riskini yakalar. Aşım oranı mükemmel görünür; ancak panodan alınan bir örnek, WIP sayımının dışında kalan “beklemede” adlı yeni bir durumda birkaç öğe gösterir ve park edilmiş durum sayısı koruma çizgisi yukarı doğru eğilim göstermektedir. Takım durumu kaldırır, öğeleri sayımın içine geri taşır ve her yeni durumun bir tanımla siciline eklenmesini zorunlu kılar. Aşım oranı birkaç hafta yüzde 18’e çıkar; takım bunu dürüst rakam olarak kabul eder ve engellenmiş öğeler çözüldükçe düşer.

## Sektör mercekleri

**Girişim (startup).** Talep düzensizdir ve her şeyi başlatma isteği vardır. Görünür bir WIP sınırı olan basit bir pano ve devam eden en yaşlı öğenin haftalık denetimi yeterlidir. Üretim sorunları için boşluk bırakın, çünkü tek bir kesinti bütün takımı tüketebilir.

**Küçük işletme.** Bir ya da iki kişi çoğu zaman destek, projeler ve yönetimle ilgilenir ve gelen kutusu kuyruktur. Planlı işi tepkisel işten ayırın, başlatılan görevlerde günlük bir sınır koyun ve müşterilere her tür talep için olağan beklemeyi söyleyin.

**Büyük kurum.** Çok sayıda takım, değişiklik onayı, güvenlik incelemesi ve test ortamları gibi aşamaları paylaşır ve paylaşılan kuyruklar çoğu zaman en uzun olanlardır. Paylaşılan aşamalarda kuyruk süresini ölçün ve yayımlayın, her paylaşılan aşamaya bir sahip verin ve kullanım oranını hedef olarak raporlamaktan kaçının. Araçlar WIP’i takımlar arasında farklı sayabilir; bu yüzden toplulaştırmadan önce ortak bir sınır ve ortak bir durum sözlüğü üzerinde anlaşın (bkz. Konu 2.4 “Değer akışı metrikleri”).

**Devlet ve kamu sektörü.** Yasal süreler, satın alma adımları ve resmî onaylar, takımların denetlemediği uzun kuyruklar yaratır. Takımın denetlediği süreyi diğer kurumları beklemekle geçen süreden ayırın ve ikisini de raporlayın. Hizmet hedeflerinin yasa ya da düzenlemeyle belirlendiği yerde saat kurallarını ve her duraklatmayı belgeleyin ve denetim izini koruyun (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon, personel eklemeden daha hızlı ve daha öngörülebilir teslimattır; çünkü bekleme geçen süreye egemendir ve WIP’te ya da uzun bir onay kuyruğunda mütevazı bir kesinti, sonrasında gelen her öğenin çevrim süresini kısaltır. Planlı boşluk ayrıca bir takımın başka işlerin haftalarını kaybetmeden büyük bir olayı karşılamasını sağlar.

Maliyetler mütevazıdır ve çoğunlukla insanlara aittir: sınırları ve durumları tanımlamak, mevcut araç verisinden günlük bir WIP anlık görüntüsü ve kuyruk süresi raporu kurmak ve kısa bir haftalık inceleme yapmak için emek. WIP’i sınırlamak ayrıca bazı taleplere henüz değil demek anlamına gelir; bu, paydaşların onayını gerektirir ve boşta kapasite, liderlerin gecikmeye karşı bir sigorta olarak anlaması gereken görünür bir maliyettir.

Getiri, ödünç alınmış yüzdeler yerine kuruluşun kendi başına ölçebileceği örüntülerle anlatılmalıdır. Sınırlardan önce ve sonra çevrim süresinin medyanını ve 85. yüzdeliğini, üzerinde anlaşılmış eşiği aşan yaşlı öğe sayısını, aşım oranını ve nedenlerini ve acil işe harcanan zaman payını izleyin. İş gerekçesi, kuyruk süresini işletmenin zaten hissettiği bir şeye, örneğin yeni bir çalışanın erişimi, bir klinik sistem değişikliği ya da bir müşteri düzeltmesi için beklemeye bağladığında en güçlüdür. Toplam sahip olma maliyetine, sayıları gözden geçiren ve onlara göre eylemde bulunan insanların zamanı egemendir; bu yüzden bu süreyi ortadan kaldırdığı gecikmeye karşı sayın. Bir takım kendi başlangıç çizgisini oluşturmalıdır, çünkü burada hiçbir kıyaslama değeri anılmaz.

## Anti-desenler ve tuzaklar

- **Yüzde 100 kullanımı hedeflemek.** Uzun beklemeleri ve kırılgan teslimatı garanti eder. Boşluklu bir yük oranı planlayın ve aksamalardan sonra gözden geçirin.
- **Yalnızca “devam ediyor” sütununu sınırlamak.** İş o zaman sınırın dışındaki kuyruklarda birikir. Sistemi uçtan uca sınırlayın ve kuyruklar büyüdüğünde aşama sınırları ekleyin.
- **WIP sınırını uygulanacak bir kural saymak.** İnsanlar uymak için işi gizler. Bir aşımı neyin engellendiğini sormak için uyarıcı olarak kullanın ve nedeni kaydedin.
- **Öğeleri sınırsız durumlarda park etmek.** İş görünmeden beklerken sayı düşük kalır. Park edilmiş durumları görünür bir sayıma dahil edin ve yaşlarını gözden geçirin.
- **Bireylerin kullanım oranını ölçmek.** Meşgul görünmeyi ödüllendirir ve sıralamayı davet eder. Takımı ya da kaynak havuzunu ölçün ve kişi başına rakam asla yayımlamayın.
- **Varış tarafını yok saymak.** Takımlar talep büyümeyi sürdürürken çıkışlar üzerinde çalışır. Varışları izleyin ve kapasiteyi aştıklarında neyin kabul edileceği konusunda açık bir karar verin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve sınırlar | Her kişi WIP’i kişisel bir biçimde sayar | Bazı takımlar panoları için bir sınır yazar | Bekleme durumları çalışma durumlarından ayrılmış, tek yazılı sınır ve durum sözlüğü | Sınır değişiklikleri kaydedilir ve Little yasası denetimi aylık çalıştırılır | Sınırlar tedarikçiler ve ortak takımlarla hizalanır ve kararları bilgilendirmeyi bıraktıklarında gözden geçirilir |
| WIP sınırları ve boşluk | Sınır yok; herkes meşgul | Tek bir sütunda gayriresmî sınırlar | Aşım günlüğü ve belirtilmiş bir yük aralığıyla sistem genelinde ve aşama sınırları | Sınırlar çevrim süresi ve kuyruk kanıtlarına göre bir ritimle ayarlanır | Sınırlar ve kapasite, aşamaları paylaşan takımlar arasında eşgüdümlenir |
| Kuyruk görünürlüğü | Bekleme yalnızca şikâyetlerle görülür | Kuyruk uzunluğu bazı panolarda sayılır | Aşama bazında kuyruk süresi yüzdelikleri sahibi takıma gösterilir | Net kuyruk büyümesi koruma çizgileriyle izlenir ve finanse edilen işte harekete geçilir | Paylaşılan ve dış aşamalarda kuyruk süresi müşterilere ve tedarikçilere açıkça raporlanır |
| Kararlarda kullanım | Kapasite talepleri anekdotla tartışılır | Kadroyu gerekçelendirmek için kullanım oranı anılır | Planlamada kuyruk ve çevrim süresi kanıtı kullanılır | Talep ve kapasite ödünleşimleri yönetişim incelemelerinde veriyle kararlaştırılır | Talep, bekleme süresi dağılımları kullanılarak müşterilerle birlikte şekillendirilir |

## Kontrol listesi

- [ ] WIP için sistem sınırı, başlangıç ve bitiş durumları ve hariç tutmalarla birlikte yazılmıştır.
- [ ] Bekleme durumları ve çalışma durumları iş akışında ayrı durumlardır.
- [ ] Günlük bir WIP ve kuyruk anlık görüntüsü alınır ve saklanır.
- [ ] Kuyruk süresi, aşama bazında medyan ve yüksek bir yüzdelik olarak raporlanır.
- [ ] Varışlar ve çıkışlar her hafta bir kümülatif akış diyagramıyla grafiğe dökülür.
- [ ] Sistem için ve büyüyen bir kuyruğa sahip her aşama için bir WIP sınırı vardır.
- [ ] Sınır aşımları bir nedenle kaydedilir ve haftalık gözden geçirilir.
- [ ] Bir politika hızlandırılmış işi tanımlar ve aynı anda yürüyen sayıyı sınırlar.
- [ ] Takım yük oranı, yöntemi belirtilerek, takım düzeyinde, asla kişi başına değil, tahmin edilir.
- [ ] Little yasası denetimi aylık çalıştırılır ve uyuşmazlıklar araştırılır.
- [ ] Park edilmiş ve engellenmiş durumlar sayılır ve yaşları gözden geçirilir.
- [ ] Bir sınırdaki, durumdaki ya da limitteki her değişiklik tarihi ve nedeniyle kaydedilir.

## Yapay zekâ istemleri

**Bir WIP sayısının ardındaki sınırı ve durumları denetleyin.**

```text
[Takım ya da hizmet] için devam eden işi tanımlamak istiyorum. İş akışı
durumlarımız şunlardır: [her biri için tek satırlık anlamla durumların listesi]
ve şu öğeler hariç tutulur: [hariç tutmalar]. Hangi durumların devam ediyor
sayıldığı, hangilerinin bekleme ve hangilerinin engellenmiş olduğu konusundaki
belirsizlikleri belirleyin. Bir sınır ve daha temiz bir durum listesi önerin ve
değişikliğin WIP sayısına ne yapacağını söyleyin. Aracımızın nasıl yapılandırıldığını
tahmin etmeyin ve kıyaslama değerleri uydurmayın. Varsayımlarınızı ve yanıtlamam
gereken soruları listeleyin.
```

**Bir Little yasası tutarlılık denetimi yapın.**

```text
[Dönem] boyunca [takım ya da hizmet] için veriler şöyle: ortalama WIP [değer],
günlük çıkışlar [değer] ve gün cinsinden ortalama çevrim süresi [değer]; sınır:
[sınır tanımı]. Ortalama WIP’in, çıkışlar çarpı çevrim süresine oranını hesaplayın
ve bu sınır göz önüne alındığında bir uyuşmazlığın, örneğin park edilmiş öğeler,
başlanmadan kapatılmış öğeler ya da kararsız bir dönem gibi, neyi ifade
edebileceğini açıklayın. [İzleyici ya da ITSM aracı] içinde yapabileceğim
denetimleri önerin. Rakam ya da eşik uydurmayın. Varsayımlarınızı listeleyin.
```

**İlk WIP sınırı deneyini planlayın.**

```text
Takımımız [takım büyüklüğü ve roller] ve [iş türü] üzerinde çalışıyor. Mevcut
ortalama WIP [değer], aşamalar [aşamaların listesi] ve en uzun kuyruk [aşama].
Bir WIP sınırı getirmek için süre sınırlı bir deney taslağı hazırlayın: bir
hipotez, denenecek sınır ve nedeni, izlenecek ölçümler (en az bir koruma çizgisi
dahil), neyin istisna sayıldığı ve bir gözden geçirme tarihi. Evrensel doğru bir
sınır ya da kıyaslama değerleri belirtmeyin. Varsayımlarınızı ve riskleri
listeleyin.
```

**Aşama verisinden olası darboğazı bulun.**

```text
[Takım ya da hizmet] için, [dönem] boyunca aşama bazında kuyruk süresi ve WIP şöyle:
[aşama, medyan kuyruk süresi, 85. yüzdelik kuyruk süresi, bekleyen öğeler ve
kapasite notlarından oluşan tablo]. Aşamaları kısıt adayı olarak sıralayın,
gerekçeyi sade bir dille açıklayın ve en üstteki aday için düşük maliyetli bir
deney ve işe yaradığını gösterecek bir ölçüm önerin. Veri ya da kıyaslama
uydurmayın. Varsayımlarınızı ve hangi ek verinin sıralamayı değiştireceğini
listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): eklediğiniz bir akış ya da kapasite ölçümünü hangi konunun tanımladığını ve yanında yer alması gereken koruma çizgisini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): düzenlenmiş bir metriğin saatlerini, sınırını, oyunlaştırma vektörünü ve koruma çizgisini adlandırdığını denetlemek için kullanın.

## Temel çıkarımlar

- Bekleme geçen süreye egemendir; bu yüzden WIP’i, kuyruk uzunluğunu ve kuyruk süresini aşama bazında ölçün ve medyanları ve yüksek yüzdelikleri raporlayın.
- Little yasası ortalama WIP’i, çıktı hızını ve çevrim süresini birbirine bağlar; bu da onu tanımlarınızın tutarlı olup olmadığına dair hızlı bir sınav yapar.
- Gecikme, kullanım oranı tam kapasiteye yaklaştıkça dik biçimde artar; bu yüzden talebin değişken olduğu yerde boşluk planlayın.
- WIP’i bütün sistem için sınırlayın, aşımları konuşma için uyarıcı olarak ele alın ve sınırın altında kalmak için işi yeniden etiketlemeye karşı korunun.
- Varışları ve çıkışları izleyin, çünkü hafta hafta büyüyen bir kuyruk, kapasite ya da talep hakkında bir karar gerektirir.
- Takımları ve hizmetleri ölçün, asla bireyleri; ve sayıları karşılaştırmadan önce tek bir yazılı sınır üzerinde anlaşın.

## Kaynaklar ve ileri okuma

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
