# Akış ölçümleri

**Devam eden iş, çıktı hızı, iş öğesi yaşı ve çevrim süresi: bu dört yalın sayım ve saat, her biri proje işi ve hizmet işi için aynı biçimde tanımlanıp ortalama olarak değil dağılım olarak okunduğunda, bir takıma işinin nerede tıkandığını ve neyi vaat edebileceğini söyler.**

## Genel bakış ve motivasyon

Çoğu teslimat ve hizmet panosu geçen ay neyin bittiğini raporlar. Akış ölçümleri, iş hâlâ hareket halindeyken önem taşıyan görünümü ekler: şu anda ne kadarının sürmekte olduğu, her öğenin ne kadar yaşlandığı, öğelerin ne hızla bittiği ve ne kadar sürdüğü. Akış yazını bu dört ölçüme kesin tanımlar verir. Kanban Kılavuzu (kanbanguides.org, Ekim 2026 itibarıyla güncel sürüm) açık kaynaklardan biridir: bunları bir takımın iş akışını denetlemek ve uyarlamak için kullandığı ölçümler olarak adlandırır; bu konu da belirli bir yöntem ya da pano gerektirmeden bu tanımları izler.

Dört tanım kısadır. **Devam eden iş (WIP)**, başlamış ama bitmemiş iş öğelerinin sayısıdır. **Çıktı hızı (throughput)**, birim zamanda bitirilen iş öğelerinin sayısıdır. **İş öğesi yaşı**, bir iş öğesinin başladığı an ile şimdiki zaman arasında geçen süredir; bu nedenle yalnızca devam eden öğeler için geçerlidir. **Çevrim süresi**, bir iş öğesinin başladığı an ile bittiği an arasında geçen süredir; Kılavuz’un ifadesinde her iki gün de dahil sayılır. **İş öğesi**, takımın tek bir şey olarak izlemeyi seçtiği iş birimidir; örneğin bir kullanıcı hikâyesi, bir olay, bir hizmet talebi ya da bir değişiklik. **İş akışı**, “başladı” ile “bitti” arasındaki durumlar kümesidir ve takımın yazılı **iş akışı tanımı** bu durumların hangileri olduğunu söyler.

Dördünden ikisi sistemin bütününe (WIP ve çıktı hızı), ikisi ise tek tek öğelere (yaş ve çevrim süresi) ilişkindir. Biten öğeler için çift çıktı hızı ve çevrim süresidir. Bitmemiş öğeler için çift WIP ve yaştır. Bu ayrım önemlidir, çünkü biten öğe ölçümleri geriden gelir: işlerin nasıl gittiğini söyler. Bitmemiş öğe ölçümleri ise öncüdür: henüz harekete geçmek için vakit varken ne olmak üzere olduğunu söyler. İş öğesi yaşı dördü arasında en az kullanılanıdır ve bir panoya eklenmesi gereken ilk ölçümdür.

İlk üçü arasındaki ilişki rastlantısal değildir. [Little yasası](https://en.wikipedia.org/wiki/Little%27s_law), [kuyruk kuramından](https://en.wikipedia.org/wiki/Queueing_theory) bir sonuç olarak, kararlı bir sistemde sistemdeki ortalama öğe sayısının, ortalama varış hızı ile her öğenin orada geçirdiği ortalama sürenin çarpımına eşit olduğunu söyler. Akış terimleriyle ortalama WIP, ortalama çıktı hızına ve ortalama çevrim süresine bağlıdır. Yasa yalnızca, bu konunun Öneriler bölümünde yeniden değindiği koşullar altında geçerlidir (tam ele alış için bkz. Konu 2.3 “Devam eden iş ve kuyruklar”). Pratik sonuç basittir: çıktı hızı kabaca sabit kalırsa, daha fazla devam eden iş daha uzun çevrim süreleri demektir.

Çevik ve ITIL bakış açıları burada farklı sözlüklerle buluşur. Çevik uygulamada akış ölçümleri takımın panosuna aittir; paydaşlarla düzenli bir incelemede ve takımın nasıl iyileşeceğine dair kendi düşünümünde kullanılır. ITIL 4’te aynı sayılar, olay yönetiminin, hizmet talebi yönetiminin ve değişiklik yetkilendirmenin kayıtları durumlar arasında nasıl hareket ettirdiğini tanımlar; ayrıca ölçme ve raporlama uygulamasını ve hizmet düzeyi yönetimini besler. Bir olay bir iş öğesidir. Bir hizmet talebi bir iş öğesidir. İkisinin de bir başlangıcı, bir bitişi ve arada bir yaşı vardır. ITIL hizmet masası ile teslimat takımı, ölçüm açısından aynı türden işi yapar: öğeler gelir, bekler, üzerinde çalışılır ve ayrılır.

Ölçümler ayrıca beklemeyi başlıca israf kaynağı sayan [yalın yazılım geliştirmeye](https://en.wikipedia.org/wiki/Lean_software_development) ve birikimli varış ve çıkışları gösteren, WIP’i, çıktı hızını ve çevrim süresini tek bakışta sunan bir grafik olan [kümülatif akış diyagramına](https://en.wikipedia.org/wiki/Cumulative_flow_diagram) bağlanır. Grafik isteğe bağlıdır. Dört ölçüm, her biri iki tarihli bir öğe tablosundan hesaplanabilir.

Çevrim süresi ve yaş, uzun sağ kuyruğu olan süreler olduğundan tek bir ortalama yanıltır. 85. gibi bir [yüzdelik](https://en.wikipedia.org/wiki/Percentile), takıma “öğelerin yüzde 85’i şu kadar gün içinde biter” der; bu, kullanılabilir bir tahmin ve kullanılabilir bir vaattir (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). Akış yazını böyle bir vaada **hizmet düzeyi beklentisi (SLE)** der: tipik bir öğenin ne kadar sürmesi gerektiği, bir süre ve bir olasılık olarak ifade edilir. SLE, takımın kendi tahminidir. Müşteriyle müzakere edilmiş bir taahhüt olan [hizmet düzeyi anlaşması](https://en.wikipedia.org/wiki/Service-level_agreement) değildir (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

## Temel ilkeler

- **Başlandı ve bitti için tek bir tanıma uyan bütün öğeleri sayın.** Bir sayıyı iyileştirmek için öğeleri bölmek ya da birleştirmek karşılaştırılabilirliği yok eder. İş öğesinin ne olduğu üzerinde anlaşın ve tanımı sabit tutun.
- **Veriyi toplamadan önce saatleri tanımlayın.** Çevrim süresi ve yaş, hangi durumun “başladı”, hangisinin “bitti” anlamına geldiğine bağlıdır. İkisini de yazın ve her değişikliği kaydedin (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).
- **Önce bitmemiş işe bakın.** Yaş ve WIP, sonucu hâlâ değiştirebilecek tek ölçümlerdir. Çıktı hızı ve çevrim süresi olmuş olanı doğrular.
- **Ortalama değil dağılım raporlayın.** Çevrim süresi ve yaş için yüzdelikleri, çıktı hızı için haftalık sayıların bir dizisini gösterin; böylece değişimin biçimi görünür olur.
- **Ölçümleri insanları değil iş akışını yönetmek için kullanın.** Analiz birimi takımın iş akışıdır. Bireyleri bitirdikleri öğe sayısına ya da çevrim süresine göre asla sıralamayın.
- **Akışı öngörülebilir kılmak için WIP’i sınırlayın.** WIP sınırı bir politikadır, hedef değildir. Sınır, kuyrukları görünür kılmak ve çevrim süresini kısaltmak için vardır.
- **Akış süresini planlama doğruluğundan ayırın.** Akış ölçümleri işin nasıl hareket ettiğini tanımlar. Doğru işin seçilip seçilmediği hakkında tek başlarına bir şey söylemezler (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”).

## Metrik tanımları

Her satır, tek bir takımın iş akışındaki öğeleri sayar. Devam eden öğeler çevrim süresi ve çıktı hızından, biten öğeler yaş ve WIP’ten hariç tutulur.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Devam eden iş (WIP) | Başlamış ama bitmemiş iş öğeleri | Başlangıç zaman damgası atanmış ve bitiş zaman damgası boş olan öğelerin, belirtilen bir anda (örneğin her günün sonunda) sayısı; henüz başlamamış birikim listesi öğeleri ve biten öğeler hariç tutulur | öğe | Sorun izleyici ya da ITSM aracı durum geçmişi | Olay yönetimi; hizmet talebi yönetimi; değişiklik yetkilendirme | WIP sınırı; devam eden takım birikim listesi | Günlük anlık görüntü, haftalık incelenir |
| Çıktı hızı | Birim zamanda bitirilen iş öğeleri | Bitiş zaman damgası dönem içine (örneğin pazartesiden pazara bir takvim haftası) düşen öğelerin sayısı; bitirilip yeniden açılan öğeler yalnızca yeni öğeyse yeniden sayılır | haftada öğe | Sorun izleyici ya da ITSM aracı durum geçmişi | Olay yönetimi; hizmet talebi karşılama | Çıktı hızı; tamamlanan öğeler | Haftalık |
| İş öğesi yaşı | Bitmemiş bir öğenin devam ettiği süre | Hâlâ devam eden öğeler için şimdiki zaman eksi başlangıç zaman damgası; saat engellenmiş süre boyunca işler; henüz başlamamış öğeler hariç tutulur | gün | Sorun izleyici ya da ITSM aracı durum geçmişi | Olay yönetimi; sorun yönetimi | İş öğesi yaşı; günlük takım toplantısı | Günlük, her takım toplantısında incelenir |
| Çevrim süresi | Biten bir öğenin başlangıcından bitişine geçen süre | Bitiş zaman damgası eksi başlangıç zaman damgası, takvim günü olarak, dahil; saat, başlamış bir duruma ilk geçişte başlar ve bitmiş bir duruma geçişte durur; medyanı ve 85. ile 95. yüzdelikleri raporlayın | gün | Sorun izleyici ya da ITSM aracı durum geçmişi | Olay yönetimi; hizmet talebi karşılama; değişiklik yetkilendirme | Çevrim süresi; öğe süresi | Haftalık, kayan 8 ila 12 haftalık pencereyle |
| SLE tutturma | Takımın hizmet düzeyi beklentisini karşılayan biten öğelerin payı | Çevrim süresi SLE’ye eşit ya da altında olan biten öğeler / penceredeki bütün biten öğeler; hâlâ açık öğeler hariç tutulur | yüzde | Çevrim süresinden türetilir | Hizmet düzeyi yönetimi | Hizmet düzeyi beklentisi | Aylık |
| Engellenmiş süre payı | Öğelerin engellenmiş olarak işaretli geçirdiği devam eden günlerin payı | Engellenmiş durumdaki öğe-günler / devam eden öğe-günler, pencere boyunca; ikisi için de saat başlangıç zaman damgasında başlar | yüzde | Sorun izleyici bayrakları ya da ITSM aracında bir engellenmiş durumu | Olay yönetimi; sorun yönetimi; tedarikçi yönetimi | Engeller; günlük takım toplantılarında dile getirilen aksaklıklar | Haftalık |

Buradaki çevrim süresi akış yazınındaki tanımı izler. Genellikle bir kaydın açıldığı andan ölçülen ve bekletme süresini hariç tutabilen ITIL çözüm süresi fikrinden farklıdır. İkisini karşılaştırmak isteyen bir takım bunları etiketlemelidir; Konu 2.2 saatleri ayrıntılı ele alır (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”). SLE tutturma ve engellenmiş süre payı dört çekirdek ölçümden türetilir ve bir takımın bu ölçümleri günlük işinde nasıl kullandığını gösterdikleri için dahil edilmiştir.

## Öneriler

### İş akışını ve öğeleri tanımlayın

**1. Herhangi bir şeyi grafiğe dökmeden önce iş akışı tanımını yazın.** Durumları sıralayın, hangisinin “başladı”, hangisinin “bitti” anlamına geldiğini belirtin ve bir öğeyi aralarında kimin taşıyabileceğini yazın. Akış yazını buna iş akışı tanımı der ve bu konudaki her ölçüm ona bağlıdır. İki takım “başladı”yı farklı tanımlıyorsa çevrim süreleri karşılaştırılamaz.

**2. Takımın aylar değil günler içinde bitirebileceği bir iş öğesi boyutu seçin.** İş öğesi, takımın tek birim olarak izlediği her şeydir: bir hikâye, bir olay, bir talep. Çok büyük öğeler kendi yaşlarını gizler ve çıktı hızını topaklı yapar. “Bir öğe, bir müşterinin ya da kullanıcının fark edebileceği tek bir şeydir” gibi sabit bir kural kullanın ve yalnızca bir sayıyı iyileştirmek için öğeleri bölmekten kaçının.

**3. Proje işini ve hizmet işini, farklı varış örüntüleriyle aynı türden akış olarak ele alın.** Proje işi, takımın çektiği planlı bir birikim listesi olarak gelir. Olay ve talep gibi hizmet işi öngörülemez biçimde gelir ve planlı işin önüne geçebilir. İkisini aynı panoda ya da aynı tablolarda, türe göre etiketleyerek ölçün; böylece kesintilerin planlı işi nasıl etkilediğini görebilirsiniz (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

### Bitmemiş işi ölçün

**4. Panoda iş öğesi yaşıyla başlayın.** Her kartı gün cinsinden yaşıyla işaretleyin ve takımın kendi çevrim süresi geçmişinden alınan yüzdelik bantlarına göre sıralayın ya da vurgulayın. Geçmiş çevrim sürelerinin 85. yüzdeliğinden yaşlı bir öğe, bugün onu neyin engellediğini sormak için bir sinyaldir. Bu, geriden gelen bir ölçümü günlük bir uyarıcıya dönüştürür.

**5. WIP’i dürüstçe sayın ve savunabileceğiniz bir sınır koyun.** İnceleme ya da tedarikçi bekleyen iş dahil, başlamış ve bitmemiş her öğeyi sayın. Başlangıç sınırını takımın mevcut ortalama WIP’inden seçin ve adım adım düşürün; çevrim süresinde ve yaşta neyin değiştiğini not edin. Sınırı takımın denetlediği bir politika olarak ele alın ve Little yasasını yalnızca ortalamalar üzerinde bir akıl sağlığı denetimi olarak kullanın (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”).

**6. Engellenmiş işi bayrak olarak değil süre olarak gösterin.** Kimsenin saymadığı bir engel bayrağı bahaneye dönüşür. Bir öğenin ne zaman engellendiğini ve ne zaman serbest kaldığını kaydedin ve engellenmiş süre payını raporlayın. Öğenin saatini engel boyunca işletmeye devam edin, çünkü müşterinin beklemesi durmaz (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”; ITIL bekletme durumları aynı soruyu doğurur).

### Biten işi ölçün

**7. Çevrim süresini yüzdeliklerle bir dağılım olarak raporlayın.** Medyanı, 85. yüzdeliği ve 95. yüzdeliği gösterin ve her biten öğeyi zaman üzerinde bir nokta olarak çizin (serpilme grafiği); böylece takım kümeleri ve aykırı değerleri görebilir. Pencereyi belirtin, örneğin son 10 hafta. Ortalama, müşterilerin hissettiği uzun kuyruğu gizler.

**8. Çıktı hızını tek bir toplam olarak değil haftalık bir dizi olarak raporlayın.** Haftada biten öğe sayısını bir [çalışma grafiği](https://en.wikipedia.org/wiki/Run_chart) ya da [kontrol grafiği](https://en.wikipedia.org/wiki/Control_chart) olarak çizin. Haftalık sayılar doğal olarak değişir; bu yüzden tepki vermeden önce değişiklikleri bu değişkenliğe göre okuyun ve öğe boyutları ile tanımlar farklı olduğundan iki takımın çıktı hızını asla performans sıralaması olarak karşılaştırmayın (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”).

**9. Kendi verinizden bir hizmet düzeyi beklentisi belirleyin ve gözden geçirin.** Takımın son birkaç haftaki çevrim sürelerini alın, takımın kabul edebileceği bir olasılık seçin ve gün sayısını yüzdelikten okuyun. Bunu, kendi verinizdeki gerçek değerleri kullanarak “öğelerin yüzde 85’i 9 gün ya da daha kısa sürede biter” olarak yayımlayın. İş akışı değiştiğinde yeniden ele alın. SLE, takımın kendisi hakkında yaptığı bir tahmindir; bu yüzden sözleşmesel hedeflerden ayrı tutun.

### Ölçümleri kullanın

**10. Dördünü birlikte kullanın ve her takım toplantısında aynı dört soruyu sorun.** Neler devam ediyor ve sınırın içinde mi? En yaşlı öğeler hangileri ve neler onları serbest bırakır? Kaç tane bitirdik ve bu olağan aralıkta mı? Son bitenler beklentimize kıyasla ne kadar sürdü? Bu dört soru bir durum raporunun yerini alır ve birkaç dakika sürer.

**11. Aynı ölçümleri hizmet kuyruklarına, saat için net bir sınırla uygulayın.** Olaylar ve talepler için “başladı”, bir kişiye ya da takıma ilk atama olabilirken ITIL çözüm saati kayıt anında başlar. İkisi de geçerlidir ve farklı soruları yanıtlar: girişin ne kadar duyarlı olduğu ve işin kendisinin ne kadar sürdüğü. Her saati adlandırın ve bunları aynı grafikte karıştırmayın (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”).

**12. İş akışını değiştirin, yeniden ölçün ve geçmişi koruyun.** Takım bir WIP sınırını, bir durumu ya da bir politikayı değiştirdiğinde tarihi ve nedeni kaydedin ve değişikliği grafiklerde işaretleyin. Bir değişiklikten sonra çevrim süresindeki kayma, etkisinin kanıtıdır. Kayıtlı bir değişiklik olmadan görülen kayma, enstrümandan şüphelenmek için bir nedendir (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşlenen koruma çizgisi metriği ya da uygulaması |
| --- | --- | --- |
| Devam eden iş (WIP) | Öğeleri son ana kadar birikim listesinde ya da “hazır” sütununda tutarak başlamış sayılmamalarını sağlamak; öğeleri kapatıp yeniden açmak; işi panonun dışında gizlemek | Pano öğelerini alınan taleplerle mutabık kılmak; panoyu takımın gerçek işine karşı örneklemek; ilk sütundaki öğelerin yaşını izlemek |
| Çıktı hızı | Öğeleri küçücük parçalara bölmek; öğeleri bitmeden kapatmak; önce kolay öğeleri seçmek | Öğe boyutu dağılımına ve yeniden açılma oranına bakmak; son öğelere bağlı kaçak hataları ve olayları saymak; bitirilen iş türlerinin karışımını incelemek |
| İş öğesi yaşı | Saati sıfırlamak için eskimiş bir öğeyi “bitti”ye ya da yeni bir duruma taşımak; eski öğeleri sessizce iptal etmek; eski bir öğenin yeni bir kopyasını oluşturmak | Geriye doğru durum geçişlerini ve iptal edilen öğeleri denetlemek; iptal edilen öğeleri ve yaşlarını raporlamak; yaş sınırına yakın oluşturulan kopyaları denetlemek |
| Çevrim süresi | Öğeleri yalnızca iş neredeyse bittiğinde “devam ediyor”a taşıyarak saati geç başlatmak; öğeleri inceleme ya da yayından önce bitti işaretleyerek saati erken bitirmek | Başlangıç zamanını ilk işleme (commit) ya da ilk etkinlikle karşılaştırmak; “bitti” ile yayın arasındaki süreyi raporlamak; biten öğeleri gerçek tamamlanma için örneklemek |
| SLE tutturma | Cömert bir SLE belirlemek; zor öğeleri “özel” diyerek dışlamak; sınırın altında kalmak için öğeleri kapatmak | SLE’yi geçmiş verinin bir yüzdeliğinde tutmak ve her çeyrek gözden geçirmek; dışlanan öğeleri ve nedeni raporlamak; 95. yüzdeliği ve en yaşlı açık öğeleri okumak |
| Engellenmiş süre payı | Payın düşük görünmesi için engelleri hiç işaretlememek; gecikmeyi açıklamak için her şeyi engellenmiş olarak işaretlemek | Engellenmiş payı devam eden öğelerin yaşıyla karşılaştırmak; engel nedenlerini kategoriye göre incelemek; her nedeni denetlemek için engellenmiş öğeleri örneklemek |

Sağlıklı bir okuma, WIP’in günlerin çoğunda sınırda ya da altında olduğunu, yaşın çoğunlukla geçmiş çevrim sürelerinin 85. yüzdeliğinin altında kaldığını ve çıktı hızının haftadan haftaya kararlı bir aralıkta değiştiğini gösterir. Çevrim süresi yüzdelikleri sabit ya da düşüyordur, SLE tutturma takımın seçtiği olasılığa yakındır ve engellenmiş sürenin, birinin üzerinde çalıştığı adlandırılmış nedenleri vardır. Bir sayı fazla iyi göründüğünde, kutlamadan önce saatin kaymadığını ya da tanımın değişmediğini sorgulayın.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Akış ölçümleri (WIP, çıktı hızı, yaş, çevrim süresi) | Basit, araçtan bağımsız, sayılara ve tarihlere dayanır; olasılıksal tahmini destekler | Tutarlı tanımlara ve temiz zaman damgalarına ihtiyaç duyar; değer ya da kalite hakkında bir şey söylemez |
| Hikâye puanı gibi tahmine dayalı ölçümler | Emek ve karmaşıklık görüşü içerir; planlı işe uyar | Öznel ve takıma özgüdür; takımlar arasında karşılaştırılamaz |
| Ortalama çözüm süresi gibi ortalamaya dayalı hizmet metrikleri | Hesaplaması ve açıklaması kolaydır | Aykırı değerler ve çarpıklıkla bozulur; uzun kuyruğu gizler |
| Yüzdeliğe dayalı çevrim süresi ve SLE | Müşterilerin deneyimlediğini yansıtır; net bir vaadi destekler | Yeterli geçmiş gerektirir; ortalamaya alışkın insanlara açıklaması daha zordur |
| “Başladı” ve “bitti” için kurum genelinde tek tanım | Toplulaştırmaya ve karşılaştırmaya izin verir | Bazı takımlara kötü uyar; takımları yapay durumlara itebilir |

Eldeki karara hizmet eden en basit ölçümü seçin. Akış ölçümleri, iş çeken ve öğeleri günler içinde bitirebilen bir takım için iyi çalışır. Öğeler aylar sürdüğünde, bir öğe boyutta çok değiştiğinde ya da değerin çoğu teslimatta değil keşifte yattığında daha az uyar.

## Takımınızla tartışılacak sorular

**1. Bizim için hangi durum “başladı”, hangisi “bitti” anlamına geliyor ve herkes aynı fikirde mi?**
Panoyu ekrana getirin ve her kişiden saatin ilk ve son durumunu göstermesini isteyin. Anlaşmazlıkları not edin, çünkü bunlar güvenilmez çevrim sürelerinin en büyük kaynağıdır. Özellikle incelemede, yayın kuyruğunda ya da bir tedarikçinin elinde bekleyen öğelere bakın. Yazılı bir iş akışı tanımı ve yürürlüğe gireceği bir tarih üzerinde anlaşın.

**2. Şu anda ne kadar devam eden işimiz var ve bir hafta boyunca yeni öğe başlatmayı bıraksak ne olurdu?**
Kartları, durmuş işler dahil sayın. Takımın neyi bitireceğini ve neyin hâlâ tıkalı kalacağını sorun. Kolaylaştırıcı, konuşmayı suçlamadan uzak tutup, boş kalma korkusu ya da paydaş baskısı gibi erken başlama nedenlerine yöneltmelidir. İlk bir WIP sınırı ve gözden geçirmek için bir tarih önerin.

**3. Panodaki en yaşlı öğeler hangileri ve her birini ne durduruyor?**
Yaşa göre sıralayın ve en yaşlı üç öğe hakkında konuşun. Her biri için engeli, onu kaldırabilecek kişiyi ve sonraki eylemi adlandırın. En yaşlı yaşları geçmiş çevrim sürelerinin 85. yüzdeliğiyle karşılaştırın. Bu soruyu her toplantıda sormayı alışkanlık hâline getirin, çünkü yaş, bir sonucu hâlâ değiştirebilen tek ölçümdür.

**4. Çevrim süresi dağılımımız neye benziyor ve ondan hangi vaadi verebiliriz?**
Son 8 ila 12 haftadaki biten öğelerin serpilme grafiğini gösterin. Medyanı, 85. ve 95. yüzdeliği okuyun. Takımın 85. yüzdelikte bir SLE belirtmekten rahat olup olmadığını ve aykırı değerlerin neyi ortak taşıdığını tartışın. Kolaylaştırıcı, grubun medyan ile kuyruk arasındaki farkı anladığını denetlemelidir.

**5. Olaylar ve talepler, birikim listesinden çektiğimiz planlı işi nasıl etkiliyor?**
Biten öğeleri türe göre etiketleyin ve çevrim sürelerini ve çıktı hızını türe göre karşılaştırın. Bir olay geldiği için planlı bir öğenin kaç kez durduğunu sorun. Bir hızlandırma politikasının ya da ayrılmış kapasitenin yardımcı olup olmayacağına ve kullanımının nasıl görünür tutulacağına karar verin (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”). Kesintiler iki katına çıksa takımın neyi yapmayı bırakacağını tartışın.

**6. Bu ölçümlerden hangilerini oyunlaştırabiliriz ve bunu nasıl fark ederdik?**
Her ölçümü ele alın ve baskı altındaki birinin akışı iyileştirmeden onu nasıl daha iyi gösterebileceğini sorun. Her yanıtı tablodaki bir koruma çizgisiyle eşleştirin. Kolaylaştırıcı bunu bir suçlama olarak değil, enstrüman üzerinde bir tasarım alıştırması olarak ele almalıdır. Bu çeyrek eklenecek bir koruma çizgisi seçin ve bir sahip adlandırın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları akış ölçümlerini kendi sistemlerini görmek için kullanır. En çok devam eden öğelerin yaşından ve çevrim süresi dağılımından yararlanırlar; bunlar neye yoğunlaşılacağını ve neyin vaat edileceğini söyler. Çıktı hızını hedefe dönüştürmekten ve sayılarını diğer takımlarınkiyle karşılaştırmaktan kaçınmalıdırlar (takım akışının üzerinde duran teslimat düzeyi ölçümleri için bkz. Konu 2.8 “DORA metrikleri”).

### Hizmet ve operasyon takımları

Hizmet takımları denetlemedikleri varışlarla ilgilenir. Akış ölçümleri, kesintilerin, devir tesliminin ve başkalarını beklemenin bitirme süresini nasıl uzattığını gösterir. Olaylar, talepler ve planlı değişiklik için ayrı görünümlerden ve nedene göre raporlanan engellenmiş süreden yararlanırlar. Takımı yönetmek için akış saatlerini kullanırken sözleşmelerin gerektirdiği ITIL saatlerini korumalıdırlar.

### Liderlik ve yönetişim

Liderler tek bir rakam değil dağılımı ve eğilimi istemeli, değişiklikleri yanlarında kayıtlı iş akışı değişiklikleriyle okumalıdır. Riski erken görmek için SLE tutturmayı ve yaş profillerini kullanabilirler. Öğe tanımları farklı olduğundan çıktı hızını takımlar arasında toplulaştırmaya direnmeli ve güvenilir akış verisinin gerektirdiği durum modellerinin ve zaman damgalarının temizlenmesini finanse etmelidirler.

### Müşteriler ve kullanıcılar

Müşteriler çevrim süresini ve özellikle kuyruğunu hisseder. “Bu türdeki taleplerin çoğu belirtilen gün sayısı içinde biter” gibi bir ifade, onlara etrafında plan yapabilecekleri bir şey verir; takım beklentisinin dışında kaldığında dürüst bir not güven kurar. WIP ya da çıktı hızı sayılarına ihtiyaç duymazlar, ancak bu ölçümler beklemeyi azalttığında yararlanırlar.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı, son kullanıcı hizmet taleplerini ve klinik sistemler için küçük bir planlı iyileştirme akışını yöneten birleşik bir takım işletir. Bu örnekteki bütün sayılar örnekleyicidir.

Takımın panosunda Hazır, Devam ediyor, Başkalarını bekliyor, İnceleme ve Bitti durumları vardır. Yönetici, aylık raporun 46 öğenin bittiğini, yani bir önceki ayla aynı düzeyde olduğunu gösterdiğini, buna rağmen klinik personelin taleplerin “sonsuza dek” sürdüğünden şikâyet ettiğini fark eder. İzleyici geçmişinin incelenmesi, “başladı”nın bir kart ilk kez triyaj edildiğinde atandığını ve çevrim süresinin bu yüzden kuyrukta geçen günleri içerdiğini gösterir.

Takım iş akışı tanımını yeniden yazar: “başladı”, Devam ediyor’a ilk geçiştir, “bitti”, Bitti’ye geçiştir ve Başkalarını bekliyor devam eden sayılır, kendi engellenmiş süresiyle. Yeni saatlerle son 10 haftanın medyan çevrim süresi 4 gün, 85. yüzdelik 11 gün ve 95. yüzdelik 24 gündür. 6 kişilik bir takım için ortalama WIP 19 öğedir. İş öğesi yaşı, 11 günden yaşlı yedi kartı gösterir ve bunların beşi dış bir tedarikçiyi beklemektedir.

Takım üç şeye karar verir. “Öğelerin yüzde 85’i 11 gün ya da daha kısa sürede biter” biçiminde bir SLE belirler. 12’lik bir WIP sınırı koyar ve sınıra ulaşıldığında yeni planlı öğe başlatmayı durdurmayı kabul eder. Ayrıca en yaşlı beş öğenin haftalık on dakikalık bir incelemesini ekler. Tedarikçi öğeleri, bekledikleri tarihlerle birlikte tedarikçi yönetimi aracılığıyla iletilir.

Altı hafta sonra çevrim süresinin 85. yüzdeliği 8 gün, WIP ortalaması 12’dir. Çıktı hızı birkaç hafta boyunca, önceki düzeye yakın olan haftada 44 öğedir. Sonra takım olası bir oyunlaştırma riski görür: bir hafta medyan çevrim süresi 2 güne düşer, ama haftada biten öğe sayısı keskin biçimde artar ve bir hafta içinde yeniden açılan öğelerin payı yükselir. Kartlardan alınan bir örnek, büyük taleplerin çıktı hızını artırmak ve çevrim süresini kısaltmak için tek satırlık birkaç karta bölündüğünü gösterir. Koruma çizgileri bunu yakalamıştır: öğe boyutu karışımı ve yeniden açılma oranı. Takım neyin tek öğe sayılacağına dair bir kural kararlaştırır, bölünmüş kartları raporlarda birleştirir ve SLE’yi ve yaş listesini yayımlamayı sürdürür.

## Sektör mercekleri

**Girişim (startup).** Küçük bir takım, fiziksel ya da dijital bir panoyla ve başlangıç ile bitiş tarihlerinin bulunduğu bir elektronik tabloyla başlayabilir. Geçmiş gerektirmedikleri için yaş ve WIP ile başlayın ve yaklaşık on haftalık veriden sonra çevrim süresi yüzdeliklerini ekleyin. Planlı iş ve acil düzeltmeler için, türe göre etiketlenmiş tek bir pano tutun; böylece kesintiler görünür olur.

**Küçük işletme.** İş çoğu zaman e-posta ya da barındırılan bir yardım masası yoluyla gelir. Aracın kendi oluşturulma, başlangıç ve çözülme tarihlerini kullanın, “başladı”nın birinin çalışmaya başladığı anlamına geldiğini denetleyin ve veriyi düzenli olarak dışa aktarın. En yaşlı açık öğelere yapılan basit bir haftalık bakış, ayrıntılı bir panodan daha çok yarar sağlar.

**Büyük kurum.** Çok sayıda takım, araç ve iş akışı, tutarlı tanımları başlıca zorluk yapar. Başladı ve bitti için küçük bir ortak sözlük üzerinde anlaşın, takımların yerel durumlarını ona eşlemesine izin verin ve takım düzeyi akış verisini takım düzeyinde tutun. Ölçümleri takımları karşılaştırmak için değil, paylaşılan onay adımları ya da paylaşılan ortamlar gibi sistemik kuyrukları saptamak için kullanın.

**Devlet ve kamu sektörü.** Yasal süreler, denetim gereksinimleri ve satın alma kuralları saatleri biçimlendirir. Yasal saati takımın akış saatinden ayrı tutun ve ikisini de belgeleyin. Tedarikçi denetimindeki adımlar çoğu zaman çevrim süresine egemen olur; bu yüzden onları engellenmiş süre olarak kaydedin ve veriyi sözleşme görüşmelerinde kullanın (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Akış ölçümlerinin maliyeti araçlarda düşük, disiplinde ise orta düzeydedir. Bir takımın güvenilir durum değişikliklerine sahip bir panoya, iş akışı tanımını yazmak için birkaç saate, kısa bir yinelenen incelemeye ve grafikleri bakımda tutacak birine ihtiyacı vardır. Zaman damgaları izleyiciden ya da ITSM aracından geliyorsa toplama neredeyse bedavadır. Daha büyük maliyet, tanımları hizalamaya ve sınıra ulaşıldığında yeni iş başlatmayı durdurmak gibi alışkanlıkları değiştirmeye harcanan zamandır.

Getiri, öngörülebilirlikte ve daha az sürprizde ortaya çıkar. Kendi verisinden bir SLE belirtebilen takım, tahminleri şişirmeden “ne zaman biter?” sorusunu yanıtlayabilir ve durmuş işi erken görebilir. Faydayı kendiniz gözlemleyebileceğiniz ölçümlerle anlatın: 85. yüzdelikten yaşlı öğelerin payı, medyan ile 95. yüzdelik arasındaki farkın genişliği ve durum toplantılarında harcanan zaman, öncesi ve sonrası. Burada hiçbir kıyaslama değeri sunulmaz, çünkü yayımlanmış sayılar iş akışı ve öğe tanımlarına bağlıdır. Toplam sahip olma maliyeti çoğunlukla insanların zamanıdır; bu yüzden onu sayın ve görünmeden bekleyen işin maliyetiyle karşılaştırın.

## Anti-desenler ve tuzaklar

- **Hiç başlamamış öğeleri saymak.** Birikim listesi kartları WIP’i ve yaşı şişirir ve panoyu okunmaz hâle getirir. Yalnızca başlamış öğeleri sayın ve birikim listesini kendi yerinde tutun (bkz. Konu 2.6 “Birikim listesi ve iyileştirme metrikleri”).
- **WIP sınırını tutturulacak bir hedef saymak.** Sınır, kuyrukları görünür kılan bir tavandır. Sınırın işini yapıp yapmadığını gözden geçirin ve takım başarabildiğinde düşürün.
- **Yalnızca ortalamaları raporlamak.** Ortalama çevrim süresi, müşterilerin hissettiği uzun kuyruğu gizler. Medyanı ve 85. ile 95. yüzdelikleri raporlayın.
- **Beklerken saati durdurmak.** Bir öğe engellendiğinde saati durdurmak çevrim süresini daha iyi gösterir ve gecikmeyi gizler. Saati işletmeye devam edin ve engellenmiş süreyi ayrıca raporlayın.
- **Çıktı hızını takımlar arasında karşılaştırmak.** Öğe tanımları ve boyutları farklıdır. Her takımı kendi geçmişiyle karşılaştırın.
- **Akış ölçümlerini bireyleri yargılamak için kullanmak.** Kişi başına bitirilen öğe, oyunlaştırmayı davet eder ve paylaşılan işi yok sayar. Her ölçümü takım düzeyinde tutun.
- **İş akışını kaydetmeden değiştirmek.** Bir durum adındaki ya da politikadaki değişiklik eğilimi sessizce bozar. Tarihi ve nedeni kaydedin ve her grafikte işaretleyin.
- **Olayları, talepleri ve planlı işi tek dağılımda karıştırmak.** Çevrim süreleri doğaları gereği farklıdır. Türe göre etiketleyin ve her dağılımı kendi başına okuyun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve saatler | “Başladı” ve “bitti” farklı insanlar için farklı şeyler demektir | Bazı takımlar iş akışı durumlarını yazıya döker | Takım başına, engellenmiş süre için saat kurallarıyla birlikte tek yazılı iş akışı tanımı | Tanım değişiklikleri kaydedilir ve grafiklerde işaretlenir; saatler kayma için gözden geçirilir | Tanımlar, işin sınırları aştığı yerlerde takımlar ve tedarikçiler arasında hizalanır ve kararları bilgilendirmeyi bıraktıklarında gözden geçirilir |
| Bitmemiş işi ölçme | Durum toplantılarda sözlü anlatılır | Kartlar bazı takımlar için yaşı ya da WIP’i gösterir | WIP günlük sayılır ve yaş her kartta gösterilir, yazılı bir sınırla | Geçmiş yüzdeliklerden alınan yaş bantları günlük eylemi yönlendirir | Takımlar arası kuyruklar ve devir teslimler birlikte izlenir; yaş tedarikçilerle paylaşılır |
| Biten işi ölçme | Aylık kapatılan kayıt sayıları | Bazı takımlar ortalama çevrim süresi raporlar | Tek veri kaynağından çevrim süresi yüzdelikleri ve haftalık çıktı hızı | Eğilimler kayıtlı değişikliklere karşı incelenir; SLE tutturma izlenir | Akış verisinden tahminler, takımlar arasında planlamayı ve hizmet taahhütlerini bilgilendirir |
| Kullanım ve koruma çizgileri | Sayılar insanları kovalamak için kullanılır | Oyunlaştırmaya dair gayriresmî farkındalık | Her ölçüm bir koruma çizgisiyle eşleşir ve takımla gözden geçirilir | Koruma çizgisi uyarıları finanse edilen iyileştirme işine yol açar | Ölçümler ve koruma çizgileri müşteriler ve tedarikçilerle birlikte gözden geçirilir |

## Kontrol listesi

- [ ] İş akışı tanımı, “başladı” ve “bitti” durumları adlandırılarak yazılmıştır.
- [ ] Bir iş öğesi, öğeleri bölme ve birleştirme kuralıyla birlikte tanımlanmıştır.
- [ ] WIP araç verisinden günlük sayılır ve bir WIP sınırı yazılmıştır.
- [ ] Devam eden her kart yaşını gün olarak gösterir.
- [ ] Çevrim süresi, belirtilen bir pencere üzerinden medyan, 85. yüzdelik ve 95. yüzdelik olarak raporlanır.
- [ ] Çıktı hızı, penceresiyle birlikte haftalık bir çalışma grafiği olarak raporlanır.
- [ ] Takımın kendi verisinden bir hizmet düzeyi beklentisi belirtilmiş ve her çeyrek gözden geçirilmektedir.
- [ ] Engellenmiş süre başlangıç, bitiş ve nedenle kaydedilir ve öğe saati işlemeye devam eder.
- [ ] Olaylar, talepler ve planlı iş, her biri kendi başına okunabilsin diye etiketlenmiştir.
- [ ] Bir durumdaki ya da politikadaki her değişiklik tarihi ve nedeniyle kaydedilir.
- [ ] Her ölçüm, oyunlaştırma tablosundan bir koruma çizgisiyle eşlenmiştir.
- [ ] Hiçbir ölçüm bireyleri sıralamak ya da takımları karşılaştırmak için kullanılmaz.

## Yapay zekâ istemleri

**Bir iş akışı tanımını saat sorunları için denetleyin.**

```text
[Takım ya da hizmet] için iş akışı şöyledir: [durumların ve geçişlerin listesi,
biliniyorsa her biri için tek satırlık anlam]. Devam eden işi, çıktı hızını, iş
öğesi yaşını ve çevrim süresini akış yazınındaki tanımlarla hesaplamak istiyoruz.
Saati hangi durumun başlatması ve hangisinin durdurması gerektiğini, saatin
duraklatılabileceği ya da yanlış okunabileceği her durumu ve iki takımın farklı
yorumlayabileceği her durumu belirleyin. Aracımızın nasıl yapılandırıldığını
tahmin etmeyin. Varsayımlarınızı ve tanımı kesinleştirmek için yanıtlamam gereken
soruları listeleyin.
```

**Bir iş öğesi dışa aktarımını çözümleyin.**

```text
[Araç] aracından, şu alanlara sahip [sayı] biten iş öğesinin dışa aktarımı
elimde: [alan adları, örneğin kimlik, tür, başlangıç tarihi, bitiş tarihi,
engellenmiş dönemler]. Bu alanlardan çevrim süresi yüzdeliklerinin, haftalık
çıktı hızının ve günlük devam eden işin nasıl hesaplanacağını ve eksik tarihlerin,
yeniden açılan öğelerin ve [türler] türündeki öğelerin nasıl ele alınacağını
açıklayın. Adımları ve [dil] dilinde kısa bir betik taslağı verin ve hiçbir değer
varsaymayın. Varsayımlarınızı ve önce çalıştırmam gereken veri kalitesi
denetimlerini listeleyin.
```

**Bir hizmet düzeyi beklentisi ifadesi taslağı hazırlayın.**

```text
Takımımız [iş türü] ile ilgileniyor ve son [sayı] haftanın çevrim süresi
verisine sahip: medyan [değer], 85. yüzdelik [değer] ve 95. yüzdelik [değer].
Tek cümlelik bir hizmet düzeyi beklentisi ve bunu [hedef kitle, örneğin müşteriler
ya da hizmet sahibi] için açıklayan, neyi vaat etmediğini de içeren kısa bir not
taslağı hazırlayın. Hedef değerler ya da kıyaslamalar uydurmayın. Varsayımlarınızı
ve örneklem büyüklüğüne ilişkin çekinceleri listeleyin.
```

**Akış ölçümlerimiz için oyunlaştırma risklerini gözden geçirin.**

```text
[Takım ya da hizmet] için [akış ölçümlerinin listesi] izliyoruz. Takım
[baskı, örneğin kayıt yaşını azaltmak] baskısı altında. Her ölçüm için, akışı
iyileştirmeden daha iyi görünmesini sağlayacak gerçekçi yolları, her birini
ortaya çıkaracak verimizdeki sinyali ve eşlenen bir koruma çizgisini listeleyin.
İstatistik uydurmayın ya da çalışma anmayın. Varsayımlarınızı ve her riski test
etmek için ihtiyaç duyacağım veriyi listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir akış ölçümünü tanımlayan konuyu ve yanında yer alması gereken koruma çizgisini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konuda yapılan düzenlemelerin şablonu, tanımlar tablosunu ve oyunlaştırma tablosunu uyumlu tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- Akışı dört ölçüm tanımlar: devam eden iş, çıktı hızı, iş öğesi yaşı ve çevrim süresi; her birinin kısa bir tanımı ve yazılması gereken bir saati vardır.
- İş öğesi yaşı ve WIP öncü ölçümlerdir; çıktı hızı ve çevrim süresi olmuş olanı doğrular.
- Çevrim süresini ve yaşı yüzdelikler olarak raporlayın ve kendi verinizden bir hizmet düzeyi beklentisi belirtin.
- Aynı ölçümler, iş türlerini etiketleyip her saati adlandırdığınız sürece hem proje işine hem hizmet işine uyar.
- Her ölçüm, saati kaydırarak, öğeleri bölerek ya da işi gizleyerek oyunlaştırılabilir; bu yüzden her birini bir koruma çizgisiyle eşleyin.
- Ölçümleri takım düzeyinde tutun ve iş akışını iyileştirmek için kullanın, insanları sıralamak için asla.

## Kaynaklar ve ileri okuma

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
