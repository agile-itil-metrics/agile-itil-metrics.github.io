# Büyük olay metrikleri

**Büyük olayları bir sıralama tablosu olarak değil, öğrenilecek nadir ve pahalı olaylar olarak ölçün: onları sayın, sürelerini dürüstçe ölçün, müşteri etkisinin büyüklüğünü belirleyin, insanlara haber verilip verilmediğini kontrol edin ve takip eylemlerinin gerçekten yapıldığını kanıtlayın.**

## Genel bakış ve motivasyon

Büyük olay (major incident), normal rutinin ötesinde bir yanıt gerektirecek kadar ciddi bir olaydır. BT hizmet yönetiminin en bilinen çerçevesi olan [ITIL](https://en.wikipedia.org/wiki/ITIL), [olay yönetimini](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) normal hizmet işleyişinin mümkün olan en kısa sürede geri getirilmesi olarak tanımlar ve kurumların en ciddi olaylarını ayrı, daha koordineli bir yoldan ele almasını bekler. Bir kurumun bu çizgiyi nasıl çizeceği kendi kararıdır. Yaygın bir seçim, birçok kullanıcıyı ya da kritik bir hizmeti etkileyen ve tek bir koordinatör altında birlikte çalışan birkaç takım gerektiren bir olaydır. Kendi tanımınızı yazın, çünkü bu konudaki her metrik ona bağlıdır.

Büyük olaylar azdır. Bir takım haftada onlarca sıradan olay görebilirken çeyrekte iki ya da üç büyük olay görebilir. Bu, ölçüm biçiminizi değiştirir. Olay hacmi ve çözüm süresinin olağan istatistikleri (bkz. Konu 3.2 “Olay hacmi ve önceliği” ve Konu 3.3 “Olaya yanıt ve çözüm süresi”) çok sayıda olay varsayar ve ortalamaları ödüllendirir. Dönem başına bir avuç büyük olayla ortalamaya tek bir kötü gece egemen olur, bir eğilim çizgisi çoğunlukla gürültüdür ve beş veri noktasında bir [yüzdelik dilim](https://en.wikipedia.org/wiki/Percentile) anlamsızdır (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). Dürüst yaklaşım, her büyük olayı kendi zaman çizelgesiyle kendi satırı olarak göstermek ve yalnızca daha uzun pencereler üzerinde özetlemektir.

Çevik ve ITIL görüşleri burada kitabın herhangi bir yerinden daha doğrudan buluşur. ITIL yapıyı katkı olarak getirir: ilan edilmiş bir büyük olay, adı belli bir koordinatör, etkilenen taraflara tanımlı iletişim ve sonrasında bir gözden geçirme. [Çevik](https://en.wikipedia.org/wiki/Agile_software_development) ve [site güvenilirliği mühendisliği (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) gelenekleri alışkanlıkları katkı olarak getirir: yanıtı yöneten bir [olay komutanı](https://en.wikipedia.org/wiki/Incident_commander), olanların suçlamasız gözden geçirilmesi ve sürekli iyileştirmeyi besleyen bir öğrenme odağı. Google'ın *Site Reliability Engineering* kitabı hem olay komuta kalıbını hem de olay sonrası gözden geçirme uygulamasını anlatır (bkz. Kaynaklar). Bu anlamdaki bir [olay sonrası inceleme](https://en.wikipedia.org/wiki/Postmortem_documentation) (postmortem), bir olayın, nedenlerinin ve ardından gelen eylemlerin yazılı bir anlatımıdır ve terim burada “olay sonrası gözden geçirme” ile birbirinin yerine kullanılır.

Bu konu beş soruyu kapsar. Büyük olaylar ne sıklıkla olur? Ne kadar sürerler ve bu sürenin ne kadarı kimse bir olay ilan etmeden önce geçer? Kaç kullanıcı ve hangi kullanıcılar bunu hissetti? İnsanlar bizden zamanında ve düzenli bir ritimle haber aldı mı? Ve söz verilen takip gerçekleşti mi? İlgili konular çevresindeki alanları ele alır: kullanılabilirlik (bkz. Konu 5.3 “Kullanılabilirlik metrikleri”), yazılı gözden geçirmenin kalitesi (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”), altta yatan nedenler (bkz. Konu 4.1 “Sorun yönetimi metrikleri”) ve çoğu zaman bunları tetikleyen değişiklik (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”).

Bu konuda kullanılan terimler:

- **Büyük olay:** yazılı ilan kriterlerinizi karşılayan ve büyük olay sürecini tetikleyen bir olay.
- **İlan (declaration):** yetkili birinin büyük olay sürecini resmen başlattığı an.
- **Geri getirme süresi:** müşteri etkisinin başlangıcından hizmetin kullanıcılar için geri getirildiği ana kadar geçen süre. Hizmetin geri getirildiği an, [kök nedenin](https://en.wikipedia.org/wiki/Root_cause_analysis) bulunduğu an ile aynı şey değildir.
- **Olay komutanı:** yanıtı koordine eden, görevleri atayan ve karar veren rol. Olayın süresi boyunca üstlenilen bir roldür, bir unvan değildir.
- **Olay sonrası gözden geçirme:** hizmet geri getirildikten sonra bir olayın yapılandırılmış, suçlamasız incelenmesi.
- **Eylem maddesi:** bir gözden geçirmeden çıkan, sahibi ve tarihi olan belirli bir değişiklik.

## Temel ilkeler

- **Önce olayları gösterin, sonra özetleyin.** Nadir olaylar bireysel zaman çizelgelerini hak eder. Her büyük olayı ayrı raporlayın ve özet istatistikleri yalnızca uzun bir pencere üzerinde, yanlarında sayıyla birlikte kullanın.
- **Saati farkındalıkta değil, etkide başlatın.** Birinin fark ettiği anda başlayan süre, çoğu zaman hikâyenin en büyük kısmı olan tespit boşluğunu gizler.
- **Takımın emeğini değil, kullanıcının deneyimini ölçün.** Müşteri etkisi sürecin var olma nedenidir. Müdahale edenlerin emek saatleri izlenecek bir maliyettir, asla bir puan değildir.
- **İletişim geri getirmenin bir parçasıdır.** Kullanıcılar hâlâ tahmin yürütürken geri getirilen bir hizmet yalnızca yarı düzeltilmiştir. Güncellemelerin zamanındalığını yanıtın bir ölçüsü olarak ele alın.
- **Eylemler bitmeden gözden geçirme bitmiş sayılmaz.** Açık eylemleri olan tamamlanmış bir belge hiçbir şeyi değiştirmemiştir. Yalnızca bir gözden geçirmenin varlığını değil, sonuna kadar takibi ölçün.
- **İnsanları asla sıralamayın ve ilan etmeyi asla cezalandırmayın.** Bir büyük olayı ilan etmek, bir raporda ilan edenin takımına zarar veriyorsa daha az olay ilan edilir ve hizmet kötüleşirken metrikler iyileşir.
- **İlan kriterlerini kararlı tutun.** Eşiği kaydırmak bu konudaki her metriği değiştirir. Her değişikliği gerekçesi ve tarihiyle kaydedin.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Büyük olay sayısı | Bir dönemde ilan edilen büyük olaylar, hizmete göre | İlan kriterlerini karşılayan ve dönemde ilan edilen olayların sayısı, ilan zamanına göre; ilk saat içinde düşürülen olaylar ayrı listelenir ve hariç tutulur | çeyrek başına sayı | ITSM aracı olay kayıtları, büyük olay bayrağıyla | Olay yönetimi | Takım ya da hizmet sağlığı gözden geçirmesi | Aylık rapor, üç aylık eğilim |
| Büyük olay süresi | Müşterilerin etkilendiği süre | Olay başına hizmetin geri getirilme zamanı eksi etki başlangıç zamanı. Etki başlangıcı, izlemedeki en erken kanıt ya da ilk kullanıcı bildirimidir, hangisi önceyse. Kısmi geri getirme kendi olayı olarak kaydedilir ve tam geri getirme saati durdurur | dakika, olay başına | İzleme zaman çizelgesi, ITSM aracındaki olay zaman çizelgesi | Olay yönetimi; hizmet düzeyi yönetimi | Teslimat metriklerinde kurtarma süresi (bkz. Konu 2.8 “DORA metrikleri”) | Olay başına; uzun pencerede ortanca ve maksimum üç aylık |
| İlan süresi | Etki başlangıcı ile bir büyük olayın ilanı arasındaki gecikme | Olay başına ilan zamanı eksi etki başlangıç zamanı. Hiç ilan edilmeyen olaylar, sıradan yüksek etkili olayların üç aylık gözden geçirmesiyle bulunur ve n/a (hiç ilan edilmedi) ilan zamanıyla dahil edilir | dakika, olay başına | İzleme zaman çizelgesi, ITSM aracı denetim izi | Olay yönetimi; izleme ve olay yönetimi | Takım çalışma anlaşmalarında yükseltmeye hazır olma tanımı | Olay başına |
| Müşteri etkisi | Kaç kullanıcının ve ne kadar kullanımın etkilendiği | Olay başına etkilenen kullanıcılar (ya da başarısız istekler) çarpı etkilenen dakikalar. Yalnızca etki penceresi sırasında hizmeti kullanmaya çalışan kullanıcıları sayın. Planlı bakım hariç tutulur | kullanıcı-dakika ya da başarısız istek | Hizmet telemetrisi, destek iletişim kayıtları | Hizmet düzeyi yönetimi; olay yönetimi | Kullanıcıya dönük hizmet düzeyi göstergeleri (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”) | Olay başına |
| İletişim zamanındalığı | Etkilenen tarafların zamanında bilgilendirilip bilgilendirilmediği | İlk müşteriye dönük bildirimin ilandan sonra hedef içinde yapıldığı büyük olayların payı ve planlanmış güncellemelerin üzerinde anlaşılan aralık içinde gönderilenlerin payı. Saat ilanla başlar. Yalnızca dahili iletiler hariç tutulur | olayların yüzdesi; güncellemelerin yüzdesi | Durum sayfası geçmişi, ITSM aracındaki iletişim günlüğü | Olay yönetimi; hizmet düzeyi yönetimi | Takım çalışma anlaşmasında paydaş iletişimi | Olay başına; üç aylık özet |
| Gözden geçirme tamamlama zamanındalığı | Bir gözden geçirmenin yararlı olacak kadar erken yapılıp yapılmadığı | Geri getirmeden sonra üzerinde anlaşılan iş günü sayısı içinde yayımlanmış bir gözden geçirmesi olan büyük olayların payı. Saat, ilk taslakta değil, yayımda durur. Hâlâ pencerenin içindeki olaylar hariç tutulur | yüzde | Gözden geçirme deposu, ITSM aracı | Sürekli iyileştirme; sorun yönetimi | İyileştirme takibi | Üç aylık |
| Eylem maddesi takibi | Gözden geçirme eylemlerinin tamamlanıp tamamlanmadığı | Son tarihine kadar tamamlanan gözden geçirme eylemleri / dönemde vadesi gelen gözden geçirme eylemleri. “Yapılmayacak” olarak kapatılan eylemler gizlenmez, bir gerekçeyle ayrıca sayılır | yüzde; geciken sayısı | Gözden geçirmeye bağlı sorun izleyici | Sürekli iyileştirme; sorun yönetimi | Retrospektiflerden gelen birikim listesi kalemleri | Aylık |
| Tekrarlayan büyük olay oranı | Aynı nedenin tekrarı | Dönemde, kaydedilen nedeni önceki on iki ayda yaşanmış bir büyük olayın nedeniyle eşleşen büyük olaylar / dönemdeki büyük olaylar. Eşleştirme neden alanına göredir ve elle gözden geçirilir | yüzde, sayı gösterilerek | Gözden geçirme kayıtları, sorun kayıtları | Sorun yönetimi | Birikim listesinde önleme çalışması | Üç aylık |

Her satırın güvenilmeden önce yazılı bir saat kuralına ihtiyacı vardır. Etki başlangıcı ve geri getirme süresi üzerine anlaşmazlıklar yaygındır ve en iyi önceden çözülür (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

## Öneriler

### Bir olayı neyin büyük yaptığını yazın

**Nöbetteki herkesin uygulayabileceği ilan kriterleri yayımlayın.** Kriterler genellikle etkiyi (etkilenen kullanıcılar, bozulmuş kritik bir hizmet, bir güvenlik ya da yasal risk) bir koordinasyon ihtiyacıyla (birden fazla takımın gerekmesi) birleştirir. Örneklerle kısa bir liste, uzun bir matristen iyidir. Kimin ilan edebileceğini belirtin ve olay küçük çıksa bile iyi niyetle ilan etmenin asla bir hata olmadığını açıkça söyleyin.

**Her olay kaydına kriter sürümünü kaydedin.** Eşik kaydığında eğilimler de onunla birlikte kayar. Her kayıttaki bir sürüm numarası ya da tarih, benzerleri benzerlerle karşılaştırmanıza ve bir kural değişikliğinden gelen sayı sıçramasını açıklamanıza olanak tanır.

### Sayıyı hedefe dönüştürmeden sayın ve sınıflandırın

**Sayıyı bağlamıyla birlikte raporlayın.** Çeyrek başına büyük olay sayısını hizmetin, tetikleyicinin (değişiklik, kapasite, bağımlılık, güvenlik, diğer) ve kriter sürümünün yanında gösterin. Bağlamsız bir sayı, “çeyrekte üçten az” gibi insanlara ilan etmemeyi öğreten hedefleri davet eder. Azalan bir sayıyı yalnızca ilan süresi ve müşteri etkisi kararlı olduğunda iyi haber sayın.

**İlan edilenleri, düşürülenleri ve kaçırılanları ayırın.** İlan edilip düşürülen olayları izleyin, çünkü kriterlerin makul olup olmadığını gösterirler. Her çeyrek, ilan edilmesi gerekmiş olabilecek olaylar için sıradan olayların bir örneklemini gözden geçirin. Kaçırılanlar en bilgilendiricidir.

### Olayın süresini kullanıcı tarafından ölçün

**Saati müşteriler etkilendiğinde başlatın.** Çoğu zaman ilk talep kaydından önce gelen bir izleme sinyali olan en erken güvenilir kanıtı kullanın. Başlangıç belirsiz olduğunda, birinin fark ettiği zamanı değil, tahmini ve kaynağını kaydedin. Etki başlangıcı ile ilan arasındaki boşluk başlı başına bir metriktir ve genellikle iyileştirmesi en ucuz olandır.

**Zaman çizelgesini aşamalara bölün.** Tespit, ilan, tanı, hafifletme ve tam geri getirme, farklı gecikme nedenlerine ve farklı sahiplere sahiptir. Her olay için bir aşama dökümü, bir ortalamaya gerek duymadan zamanın nereye gittiğini gösterir. Hizmeti geçici bir çözümle geri getirmek ve nedeni düzeltmek ayrı olaylardır ve ikincisi sorun yönetimine aittir.

**Uzun pencereler üzerinde ortancayı ve en kötü durumu, sayıyla birlikte kullanın.** Bir yıllık veri için ortancayı ve en uzun süreyi raporlayın ve bunların kaç olaydan geldiğini söyleyin. Büyük olaylar için tek bir ortalama geri getirme süresinden kaçının. Birkaç olayla kararsızdır ve tek bir uzun kesinti tarafından çarpıtılır (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

### Müşteri etkisinin büyüklüğünü kullanıcıların tanıyacağı terimlerle belirleyin

**Sunucu temelli etki yerine kullanıcı temelli etkiyi tercih edin.** Başarısız istekler, etkilenen kullanıcılar ya da etkilenen işlemler insanlara ne olduğunu anlatır. Bir bileşendeki bozulmuş hizmet dakikaları ise bir makineye ne olduğunu anlatır. Hizmet düzeyi göstergeleriniz varsa onları kullanın (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”) ve olayı kullanılabilirlik resmine bağlayın (bkz. Konu 5.3 “Kullanılabilirlik metrikleri”).

**Her kayda sade dille bir etki ifadesi ekleyin.** Kimlerin etkilendiğini ve neyi yapamadıklarını adlandıran bir ya da iki cümle. Destek iletişimleri, sosyal medya anmaları ve müşteri yükseltmeleri ifade için kanıttır; en yükseğe çıkarılacak metrikler değildir.

### İletişimi yanıtın bir parçası olarak ölçün

**İletişim hedeflerini hedef kitleye göre belirleyin.** Etkilenen müşterilerin, dahili paydaşların ve yöneticilerin farklı zamanlarda farklı iletilere ihtiyacı vardır. İlandan sonra ilk bildirim için bir hedef ve güncellemeler için düzenli bir ritim üzerinde anlaşın ve uyumu olay başına ölçün. Ritim içerikten daha önemlidir: “değişiklik yok, bir sonraki güncelleme otuz dakika içinde” diyen ve zamanında gelen bir güncelleme, sessizlikten daha fazla güven oluşturur.

**Yanıtı ve iletişimi ayrı ellerde tutun.** Bir iletişim sorumlusu, olay komutanını tanıya odaklanması için serbest bırakır. Küçük bir takım bunun yerine bir kontrol listesi ve önceden yazılmış bir şablon kullanabilir.

### Öğrenmede döngüyü kapatın

**Gözden geçirmeyi erken yapın ve yayımlayın.** Bellek zayıflar, bu yüzden gözden geçirme için bir pencere belirleyin ve karşılanıp karşılanmadığını ölçün. Gözden geçirmenin tamamlanması, onun neyi değiştirdiğinden daha az önemlidir; bu yüzden onu sonuna kadar takip ile eşleştirin. Google'ın *Site Reliability Engineering* kitabı suçlamasız gözden geçirmenin ve onu yazıya dökmenin gerekçesini ortaya koyar (bkz. Kaynaklar) ve Konu 4.2 (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”) gözden geçirme kalitesini ele alır.

**Eylemleri sonuna kadar izleyin ve dürüst bir “yapılmayacak”a izin verin.** Her eylemi, bir sahip ve tarihle, sahip takımın zaten kullandığı birikim listesine koyun. Reddedilen eylemleri çürümeye bırakmak yerine gerekçesiyle kaydedin. Geciken eylemleri bir operasyon ya da hizmet gözden geçirmesinde ele alın ve onları neyin engellediğini sorun. Gözden geçirme başına eylem sayısını sınırlayın; böylece kalanlar önemli olanlar olur.

**Olaylar arasındaki örüntüleri arayın ve bunları sorun yönetimine gönderin.** Tekrarlayan nedenler, ortak tetikleyiciler ve yinelenen tespit boşlukları, tek tek gözden geçirmelerin kaçırdığı sinyallerdir. Bunları sorun ve bilinen hata sürecine (bkz. Konu 4.1 “Sorun yönetimi metrikleri”) ve hizmetlerin sahibi takımların planlamasına besleyin. Artan bir tekrar oranını bir hüküm olarak değil, bir inceleme ipucu olarak ele alın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruma metriği ya da uygulaması |
| --- | --- | --- |
| Büyük olay sayısı | İlan eşiğini yükseltmek, olayları hiç ilan edilmesinler diye “yüksek” öncelikte tutmak, tek bir olayı birkaç kayda bölmek ya da birkaçını tek kayda birleştirmek | Sabit, sürümlü kriterler; yüksek etkili sıradan olayların üç aylık örneklemi; sayının yanında izlenen müşteri etkisi ve ilan süresi |
| Büyük olay süresi | Saati daha geç bir etki başlangıcına çekmek, kullanıcılar hâlâ başarısız olurken “geri getirildi” ilan etmek ya da kapatıp yeni bir kayıt açmak | İzlemeden alınan etki başlangıcı; kullanıcıya dönük bir göstergeyle doğrulanan geri getirme; yeniden açılan ve bağlı kayıtların tek bir olay olarak sayılması |
| İlan süresi | Hızlı görünmek için her şeyi erken ilan etmek ya da ilanı etki başlangıcına geriye tarihlemek | Sonradan düşürülen ilan edilmiş olayların payı; ilan zamanının denetim izi; zaman çizelgelerinin ham izlemeye karşı örneklemesi |
| Müşteri etkisi | “Etkilenen” tanımını daraltmak, yalnızca talep kaydı açan kullanıcıları saymak ya da ayakta kalan bir bağımlılığı ölçmek | İletişimlerin yanında telemetriden türetilen etki; olay gözden geçirmesinde gözden geçirilen sade dilli bir etki ifadesi |
| İletişim zamanındalığı | Saati başlatmak için belirsiz bir bildirim yayımlamak, içeriksiz güncellemeler göndermek ya da dahili iletileri saymak | Güncelleme örnekleminin içerik kontrolü; açıklık üzerine müşteri geri bildirimi; yalnızca müşteriye dönük bildirimlerin sayılması |
| Gözden geçirme tamamlama zamanındalığı | Tarihi tutturmak için yetersiz bir belge yayımlamak ya da bir gözden geçirmeyi “gerekmiyor” ilan etmek | Bir örneklem üzerinde bir akran tarafından okunan gözden geçirme kalitesi (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”); feragat edilen gözden geçirmelerin payı gösterilir |
| Eylem maddesi takibi | Kapatması kolay belirsiz ya da önemsiz eylemler yazmak, işi yapmadan eylemleri kapatmak ya da “yapılmayacak” olarak yeniden etiketlemek | Eylem kalitesinin örneklenmesi; kapatılan eylemlerin sistem değişikliğine karşı doğrulanması; “yapılmayacak” payı ve gerekçelerinin gözden geçirilmesi |
| Tekrarlayan büyük olay oranı | Farklı ifadeler seçerek her nedeni yeni olarak kaydetmek ya da her şeyi “insan hatası”na atfetmek | Tanımlarıyla birlikte kısa bir neden sınıflandırması; neden alanlarının olayın dışındaki biri tarafından gözden geçirilmesi; bir sistem açıklaması olmadan neden olarak “insan hatası”nın kabul edilmemesi |

Sağlıklı bir okuma, ilan edilen olayların ılımlı ve oldukça kararlı bir sayısıdır; ara sıra bir düşürme ve gözden geçirmede bulunan ara sıra bir kaçırma vardır. İlan süresi kısa ve düşmektedir, olay başına müşteri etkisi anlaşılmıştır ve önleme çalışması yapılan yerlerde düşer ve müşteriye dönük güncellemelerin neredeyse tamamı programa uygundur. Gözden geçirmeler zamanında yayımlanır ve eylemleri çoğunlukla tamamlanır; reddedilen eylemlerin küçük ve dürüst bir kümesi vardır. Her şey mükemmel görünüyorsa, kriterlerin kayıp kaymadığını ya da insanların ilan etmeyi bırakıp bırakmadığını sorun (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). [Charles Goodhart'ın adını taşıyan yasa](https://en.wikipedia.org/wiki/Goodhart%27s_law) burada en kolay görülür, çünkü kötü bir sayının maliyeti alarm verme isteğinin azalmasıdır.

## Ödünleşimler: artılar ve eksiler

| Seçim | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Her olayı bir satır olarak göstermek | Bağlamı korur, küçük sayılarda yanıltıcı ortalamalardan kaçınır | Liderler için özetlemesi daha zor; olay başına kısa bir anlatı gerektirir |
| Büyük olay sayısını raporlamak | Basit, tanıdık, liderliğe görünür | Hedefe dönüştürmesi kolay; kriterlerdeki değişikliklere tepki verir |
| Etki başlangıcından itibaren süre | Kullanıcının deneyimini yansıtır, tespit boşluğunu ortaya çıkarır | Etki başlangıcı bazen belirsizdir ve yargı gerektirir |
| İlandan itibaren süre | Yakalaması ve karşılaştırması kolay | Yavaş tespiti ve yavaş ilanı gizler |
| Etkinin kullanıcı-dakikası | Olaylar ve hizmetler arasında karşılaştırılabilir | Telemetri gerektirir; tüm kullanıcıları ve dakikaları eşit sayar |
| Gözden geçirme tamamlama oranı | Toplaması kolay, alışkanlığı teşvik eder | Öğrenmeyi değil, belgeyi ödüllendirir |
| Eylem takip oranı | Gözden geçirmeyi değişikliğe bağlar | Önemsiz eylemlerle manipüle edilebilir; bir sahip ve bir birikim listesi gerektirir |

Birini optimize etmek yerine, tüm döngüyü (ilan, geri getirme, haber verme, öğrenme, bitirme) kapsayan küçük bir ölçüm kümesi kullanın. Etki ölçümlerini yalnızca telemetri varsa ekleyin. Telemetrinin eksik olduğu yerde, özenli yazılı bir etki ifadesi uydurulmuş bir sayıdan daha iyi hizmet eder.

## Takımınızla tartışılacak sorular

**1. Burada bir olayı tam olarak neyin büyük yaptığı ve nöbetteki herkes buna katılıyor mu?**
Tanım, diğer her sayının temelidir. Üç kişiden aynı yakın tarihli olayı sınıflandırmasını isteyin ve yanıtları karşılaştırın. Anlaşmazlık, kriterlerin nerede belirsiz olduğunu gösterir. Kolaylaştırıcı, yazılı kriterlere eklenecek örnekleri not etmeli ve kimin ilan edebileceği konusunda anlaşmalıdır. Olay sonradan düşürülse bile iyi niyetle ilan etmenin her zaman kabul edilebilir olduğunu doğrulayarak bitirin.

**2. Son büyük olayımızda etki başlangıcı ile ilan arasında ne kadar süre vardı?**
Zaman çizelgesini hafızadan değil, izlemeden yeniden oluşturun. Boşluk çoğu zaman beklenenden büyüktür ve bazen en uzun aşamadır. Hangi sinyalin var olduğunu ve onu kimin gördüğünü, boşluğun belirsiz kriterlerden, eksik bir uyarıdan ya da ilan etme isteksizliğinden gelip gelmediğini sorun. Onu kısaltacak bir değişiklik seçin ve bunu nasıl bileceğinize karar verin.

**3. Kimler etkilendi ve bunu nereden biliyoruz?**
Takımın o sırada inandığı şeyi, telemetrinin ve destek iletişimlerinin sonradan gösterdiğiyle karşılaştırın. Hangi müşterilerin, varsa, diğerlerinden daha fazla etkilendiğini ve bunların işletme için en önemli olanlar mı yoksa baş etme gücü en az olanlar mı olduğunu sorun. Etki ifadesinin bir müşterinin tanıyacağı bir şey olup olmadığını tartışın. Bir sonraki sefer güvenilir biçimde toplayabileceğiniz tek bir etki ölçümü üzerinde anlaşın.

**4. İnsanlar ihtiyaç duyduklarında bizden haber aldı mı ve ileti yararlı mıydı?**
İlk bildirimi ve her güncellemeyi üzerinde anlaşılan ritme karşı kontrol edin. Gerçek iletileri bir müşteri gibi okuyun. Bilinenleri, bilinmeyenleri ve bir sonraki güncellemenin ne zaman geleceğini söyleyip söylemediklerini sorun. Bir olay sırasında iletişimin kime ait olduğunu ve o kişinin bunu yapmaya serbest olup olmadığını tartışın.

**5. Son üç gözden geçirmemizin eylemlerine ne oldu?**
Eylemleri tek bir listeye çekin ve her birini tamamlandı, devam ediyor, gecikti ya da reddedildi olarak işaretleyin. Gecikenler için onları neyin engellediğini sorun: kapasite, sahiplik, öncelik ya da belirsiz kapsam. Geciken eylemlerin bir sonraki operasyon ya da planlama toplantısında nasıl gündeme getirileceğine karar verin.

**6. Büyük olay sayımıza göre ölçülseydik neyi farklı yapardık ve müşteriler daha iyi durumda olur muydu?**
Bu soru manipülasyon vektörlerini ortaya çıkmadan önce ortaya çıkarır. Gruptan neyi değiştirebileceği konusunda açık sözlü olmasını isteyin: eşikler, etiketler, kimin ilan ettiği. Sonra daha iyi hedefin ne olduğunu sorun. İyi bir yanıt, müşteri etkisine, ilan süresine ve sonuna kadar takibe doğru kayar; bunlar kullanıcılara yardım etmeden manipüle etmesi daha zor ölçümlerdir. Yanıtı bir koruma önlemi olarak kaydedin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Ürün takımları büyük olaylarla planlı işin kesintileri olarak ve kendi değişiklikleri hakkında geri bildirim olarak karşılaşır. En çok, net etki sayılarından, kendi olay zaman çizelgelerine hızlı erişimden ve birikim listelerine, yapmaya zaman bırakarak inen gözden geçirme eylemlerinden yararlanırlar. Olay takibi için kapasite ayırın ve eylemleri özelliklerle aynı konumda iş olarak ele alın. Tekrarlayan bir tetikleyicinin uygulamada bir değişikliğe yol açması için neden kategorilerini paylaşın (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

### Hizmet ve operasyon takımları

Operasyon takımları yanıtı yürütür ve gece geç saatlerdeki işin maliyetini taşır. Sabah 3'te uygulayabilecekleri kriterlere, personelle doldurabilecekleri bir komutan ve iletişim rolüne ve zaman çizelgesini sonradan hafızadan değil, olaylar olurken yakalayan araçlara ihtiyaç duyarlar. Büyük olayların küçük bir insan grubuna yüklediği yüke dikkat etmeli (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”) ve bu konudaki metrikleri müdahale edenleri karşılaştırmak için değil, önleme çalışması talep etmek için kullanmalıdırlar.

### Liderlik ve yönetişim

Liderler, insanların hızlı ilan edip etmeyeceğini ve dürüstçe raporlayıp raporlamayacağını belirleyen iklimi oluşturur. Her büyük olayın hikâyesini ve bir yıl boyunca eğilimi istemeli, sayı üzerinde hedeflerden kaçınmalı; müşteri etkisini, tespit boşluklarını ve tamamlanmış eylemleri sormalıdırlar. Gözden geçirmelerin önerdiği önleme çalışmasını fonlayın ve teslimat planlarıyla aynı forumda gözden geçirin. Böylece yönetişim, derslerin değişikliğe dönüşüp dönüşmediğini görebilir (güvenilirliği ve yatırımı bağlamanın bir yolu için bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”).

### Müşteriler ve kullanıcılar

Müşteriler bir büyük olayı, ne kadar süre etkilendiklerine, haberdar edilip edilmediklerine ve tekrar olup olmadığına göre değerlendirir. Erken dürüst bildirimler, geç ve cilalı olanlardan daha iyi hizmet eder. Onlara bir durum kanalı, güvenebilecekleri bir ritim ve sonrasında neler olduğuna ve neyin değişeceğine dair net bir anlatım verin. Sözleşmelerin geçerli olduğu yerlerde hizmet düzeyi anlaşmasında üzerinde anlaşılan terimlerle raporlayın (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”). Bir olaydan sonraki memnuniyeti sormaya değer (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci, her biri bir ürün takımına ait bir mağaza, bir ödeme hizmeti ve bir sipariş yönetimi hizmeti işletir; ortak bir platform takımı nöbet tutar. Küçük bir hizmet yönetimi grubu büyük olay sürecini yürütür. Bu örnekteki tüm sayılar örnek niteliğindedir.

Son iki çeyrekte perakendeci beş büyük olay (örnek) ilan etmiştir. Hizmet yönetimi grubu her birini etki başlangıcı, ilan zamanı, geri getirme zamanı, tahmini başarısız siparişler, ilk müşteri bildiriminin zamanı ve gözden geçirme durumuyla bir satır olarak gösterir. Etki başlangıcı ile ilan arasındaki ortanca boşluğun 38 dakika (örnek) olduğunu, ilandan geri getirmeye kadar geçen ortanca süre olan 52 dakikaya (örnek) neredeyse eşit uzunlukta olduğunu fark ederler. Beş olayla her iki sayıyı da kaba olarak ele alır ve bunun yerine zaman çizelgelerini okurlar. Beşinden üçü, erken tetiklenip ortak bir kanalda kabul edilmeden duran bir izleme uyarısı gösterir.

Takım, o uyarı sınıfını nöbet çağrı cihazına yönlendirmeye ve kriterlere, talep kayıtlarını beklemeden ilan etmek için sürekli bir ödeme sayfası arıza sinyalinin yeterli olduğunu söyleyen bir satır eklemeye karar verir. Ayrıca ilandan sonra 20 dakika içinde ilk müşteri bildirimi için (örnek) bir hedef belirler ve bunu olay başına kontrol eder. Beşte ikisi bunu karşılamıştır. Dağıtım takımı, bir iletişim sorumlusunun baskı altında doldurabileceği bir durum sayfası şablonu ekler.

Aynı gözden geçirme sırasında bir manipülasyon riski bulurlar. Bir ürün takımının yöneticisi “en fazla iki büyük olay” şeklinde üç aylık bir hedef önermiştir. Hizmet yönetimi grubu, bir önceki çeyrekte, müşteriler ödeme sayfasında başarısız olurken dört saat boyunca yüksek öncelikte kalan ve takım sınıra yakın olduğu için hiç ilan edilmeyen bir olay olduğuna dikkat çeker. Hedefi üç ölçümle değiştirirler: ilan süresi, olay başına başarısız siparişler ve zamanında tamamlanan gözden geçirme eylemlerinin payı. Sahip takımın dışındaki biri tarafından okunan yüksek öncelikli olayların üç aylık bir örneklemi koruma önlemini eklerler. Bir sonraki çeyrekte ilan edilen sayı dörde (örnek) yükselir, ortanca ilan süresi düşer ve örnekleme gözden geçirmesi kaçırılmış bir ilan bulmaz.

## Sektör mercekleri

**Girişim.** Bir girişimin resmi bir büyük olay süreci olmayabilir; yalnızca uyanık olan kişi vardır. Tek paragraflık bir tanımla, her olay için adı belli bir koordinatörle ve zaman çizelgesini kaydeden ortak bir belgeyle başlayın. Olayları sayın ve etkiyi bir cümleyle not edin. Gözden geçirme yarım sayfalık bir not olabilir ve takip, takımın birikim listesindeki bir kalemdir.

**Küçük işletme.** Küçük bir işletme çoğu zaman hizmetinin büyük bölümü için tedarikçilere bağlıdır, bu yüzden zaman çizelgesi bir tedarikçiyi beklemeyi içerir. Tedarikçi iletişim ve yanıt sürelerini olay zaman çizelgesine kaydedin; çünkü sürenin büyük bölümünü açıklarlar ve sözleşme görüşmeleri için kanıt sağlarlar. Müşteri iletişimini basit tutun: bir kanal, bir kişi ve belirtilmiş bir güncelleme aralığı.

**Büyük kurum.** Büyük kurumlar birçok hizmeti işletir ve her dönemde birçok olay yaşar; bu yüzden hizmet başına bir sayı ve bir toplama birlikte yararlıdır. Riskler, bölümler arasında tutarsız kriterler ve ilanı yavaşlatacak kadar ağır bir süreçtir. Tanımları uyumlaştırın, süreci ilk on beş dakika için hafif tutun ve etkinin ve iletişimin karşılaştırılabilmesi için ortak bir kayıt biçimi kullanın.

**Devlet ve kamu sektörü.** Kamu kurumlarının, bir düzenleyiciyi ya da kamuyu bilgilendirmek gibi yasal görevleri çoğu zaman vardır ve alternatifi olmayan vatandaşlar için başarısızlığın maliyeti daha yüksektir. Bildirim yükümlülüklerine uyum ve savunmasız gruplar üzerindeki etki için ölçümler ekleyin ve denetime ve kamu bilgi taleplerine dayanabilecek kayıtlar tutun. Satın alma döngüleri eylem maddelerini geciktirebilir, bu yüzden engellenen eylemleri izleyin ve yükseltin.

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Amaç, en çok acıtan olayların maliyetini azaltmaktır: kaybedilen gelir ya da hizmet, zedelenen güven, personelin tükenmişliği ve düzenleyici maruziyet. Küçük, tutarlı bir büyük olay ölçüm kümesi, bu maliyetin nereden geldiğini, tespit ve iletişimin iyileşip iyileşmediğini ve önlemeye yapılan yatırımın karşılığını verip vermediğini gösterir. Bir sayıdan başka bir şey göstermeyen ölçümler maliyeti olayları saklamaya iter.

Veri zaten ITSM aracında, izleme sisteminde ve sorun izleyicide yaşıyorsa toplama maliyetleri mütevazıdır. Başlıca maliyetler tanımlar üzerinde anlaşmak, olay kaydını izlemeye ve eylem birikim listesine bağlamak ve her gözden geçirmeyi yazmak için harcanan zamandır. Metrikler, kaydı tutarlı kılmanın ötesinde az maliyetlidir.

Getiri; daha kısa ilan süresi, daha net iletişim, daha az tekrarlayan olay ve daha az yeniden iş olarak ortaya çıkar. Evrensel bir rakam geçerli değildir, bu yüzden kendinizinkini tahmin edin: son yıldaki büyük olaylarınızı alın, her hizmet için bir saatlik etkinin maliyetini finansla birlikte tahmin edin ve bunu, tekrarlayan nedenleri önlemek için gerekecek takip çalışmasının maliyetiyle karşılaştırın. Toplam sahip olma maliyeti; gözden geçirenlerin zamanını, zaman çizelgeleri ve durum sayfaları için araçları ve takip eylemleri için ayrılan kapasiteyi içerir; çoğu programın yetersiz yatırım yaptığı yer budur.

## Anti-desenler ve tuzaklar

- **Büyük olay sayısı için bir hedef.** İnsanlara ilan etmekten kaçınmayı öğretir. Bunun yerine ilan süresini, etkiyi ve sonuna kadar takibi izleyin ve kaçırılan ilanlar için örnekleyin.
- **Büyük olaylar için tek bir ortalama geri getirme süresi.** Az olayla tek bir uzun kesinti baskın olur. Bunun yerine her olayı gösterin, sonra bir yıl boyunca ortancayı ve en uzun süreyi sayıyla birlikte gösterin.
- **Saati ilanda başlatmak.** Tespit ve ilan gecikmesini gizler. Bunun yerine müşteri etkisinin en erken kanıtında başlayın ve boşluğu ayrı raporlayın.
- **Müdahale edenleri ya da takımları olay metriklerine göre sıralamak.** Açık sözlülüğü yok eder ve gözden geçirmeyi bozar. Bunun yerine hizmete ve sisteme göre raporlayın ve isimleri verinin dışında tutun.
- **Belge yayımlandığında gözden geçirmeyi bitmiş saymak.** Önemli olan değişikliktir. Bunun yerine eylem takibini ölçün ve geciken eylemlere her ay bakın.
- **Sessiz eşik değişiklikleri.** Eğilimler anlamsızlaşır. Bunun yerine kriterleri sürümleyin ve değişiklikleri raporda not edin.
- **Etki olarak yalnızca talep kayıtlarını saymak.** Etkilenen birçok kullanıcı hiç aramaz. Bunun yerine telemetriyi kullanın ve sade dilli bir etki ifadesi ekleyin.
- **Metrikleri suçlama atamak için kullanmak.** İnsanlar o zaman gerçekleri saklar. Bunun yerine gözden geçirmeleri suçlamasız tutun, koşullara ve kararlara odaklanın ve sistem nedenlerini arayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanım ve saatler | Büyük, en yüksek sesle konuşan kişinin dediği şey demektir; süreler bellekten gelir | Bazı takımların kriterleri vardır ve başlangıç ve bitiş zamanlarını yazarlar | Etki başlangıcı, ilan ve geri getirme için saat kurallarıyla tek, sürümlü bir yazılı tanım | Tanım ve saatler izlemeye karşı denetlenir; değişiklikler gerekçeleriyle kaydedilir | Kriterler ve saatler tedarikçiler ve müşterilerle kararlaştırılır, kararlara bilgi vermeyi bıraktıklarında yeniden düzenlenir |
| Etki ve iletişim | Etki anekdotlarla anlatılır; güncellemeler biri hatırladığında gönderilir | Etki bazı olaylar için tahmin edilir; bazı takımlar bir durum sayfası kullanır | Etki, kilit hizmetler için telemetriden ölçülür; güncelleme hedefleri belirlenir ve izlenir | Etki ve iletişim eğilim olarak izlenir ve müşteri geri bildirimine bağlanır | Etki, ortak eylemlerle birlikte müşteriler ve tedarikçilerle ortak bir biçimde paylaşılır |
| Gözden geçirme ve sonuna kadar takip | Gözden geçirmeler nadirdir ve yazılı değildir; eylemler unutulur | Gözden geçirmeler bazı takımlarca yazılır; eylemler kaydedilir ama izlenmez | Her büyük olay zamanında gözden geçirilir; eylemler takım birikim listesinde izlenir | Geciken eylemler ve tekrarlayan nedenler, fonlanan önleme çalışmasıyla düzenli aralıklarla gözden geçirilir | Örüntüler takımlar ve tedarikçiler arasında paylaşılır; öğrenme tasarımı ve planlamayı rutin olarak değiştirir |
| Kararlarda kullanım | Sayılar olaydan sonra anılır | Sayılar liderlere bağlamsız gösterilir | Zaman çizelgeleri ve eğilimler hizmetlerin sahibi takımlara gösterilir | Metrikler koruma önlemleriyle eşleştirilir ve güvenilirlik çalışmasını önceliklendirmek için kullanılır | Güvenilirlik yatırımı, hizmetler genelinde etki ve tekrar kanıtı kullanılarak birlikte kararlaştırılır |

## Kontrol listesi

- [ ] İlan kriterleri yazılı, sürümlü ve nöbetteki herkes tarafından biliniyor.
- [ ] İyi niyetle ilan etmek açıkça güvenli ve sayı üzerinde hiçbir hedef yok.
- [ ] Etki başlangıcı, ilan ve geri getirme zamanları tanımlı ve izlemeden ya da bir denetim izinden alınıyor.
- [ ] Her büyük olay, bir aşama zaman çizelgesiyle kendi satırı olarak gösteriliyor.
- [ ] Müşteri etkisi, mümkün olan yerde telemetriden türetiliyor ve sade dilli bir ifadeyle anlatılıyor.
- [ ] İlk bildirim ve güncelleme ritmi için hedefler belirlenmiş ve olay başına kontrol ediliyor.
- [ ] Üzerinde anlaşılan pencere içinde bir gözden geçirme yayımlanıyor ve eylemleri sahip takımın birikim listesinde.
- [ ] Geciken eylemler ve tekrarlayan nedenler belirli bir programla gözden geçiriliyor.
- [ ] Yüksek etkili sıradan olayların üç aylık bir örneklemi, kaçırılan ilanları kontrol ediyor.
- [ ] Her metriğin adı konmuş bir koruma önlemi var ve hiçbir metrik bireyleri sıralamak için kullanılmıyor.

## Yapay zekâ istemleri

**Gözden geçirme için ilan kriterlerinin taslağını hazırlayın.**

```text
[kurum türü] için bir büyük olayı ilan etme kriterlerinin taslağını
hazırlıyorum. Hizmetlerimiz [hizmetlerin listesi] ve takımlarımız [takımların
listesi]. Kullanıcılar [kullanıcıların açıklaması]. Her biri için iki ya da üç
örnekle kısa bir ilan kriterleri kümesi, bir takımın tartışabileceği belirsizlik
noktalarının bir listesi ve [paydaşlar] ile çözmem gereken soruları öner. Eşik
ya da kıyaslama değerleri uydurma; bir sayı gereken yerde [yer tutucular]
kullan. Varsayımlarını listele.
```

**Bir olay zaman çizelgesini yeniden oluşturun ve eleştirin.**

```text
İşte bir büyük olayın zaman çizelgesi: [zaman damgaları ve kaynaklarla zaman
çizelgesini yapıştırın]. Etki başlangıcını, ilanı, hafifletmeyi ve tam geri
getirmeyi belirle ve hangi zaman damgalarının belirsiz olduğunu ve nedenini
söyle. Süreyi aşamalara böl ve en büyük gecikmelerin nerede olduğunu not et.
Müdahale edenlere sorulacak soruları ve aranacak izleme kanıtlarını öner.
Zaman çizelgesinde olmayan olguları uydurma. Varsayımlarını listele.
```

**Bir dizi olay sonrası eylemi gözden geçirin.**

```text
Aşağıda [hizmet] için [sayı] olay sonrası gözden geçirmenin eylemleri var:
[sahibi, son tarihi ve durumuyla eylemleri yapıştırın]. Bunları temaya göre
grupla, belirsiz, önemsiz ya da sahipsiz olanları işaretle ve [sahip takım] için
bir sorun kaydını ya da bir birikim listesi kalemini düşündüren örüntüleri
belirle. Bireyleri ya da takımları performansa göre sıralama. Neden uydurma.
Varsayımlarını ve analizi iyileştirmek için ihtiyaç duyacağın bilgileri listele.
```

**Önerilen bir metriği manipülasyon açısından sınayın.**

```text
[veri kaynağı] üzerinden ölçülen ve [tanım] olarak tanımlanan [metrik adı]
metriğini izlemeyi planlıyoruz. Bu metriğin [rol] tarafından nasıl manipüle
edilebileceğini, hangi dürüst davranışı caydırabileceğini ve her durumu hangi
eşleştirilmiş koruma metriğinin ya da uygulamasının yakalayacağını anlat.
Önerileri [takım büyüklüğü] kişilik bir takım için pratik tut. Kıyaslama değeri
ya da kaynak uydurma. Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): ilgili konuları ve her büyük olay metriğinin yanında yer alması gereken koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konunun düzenlenmiş bir sürümünün hâlâ şablonu ve kuralları izleyip izlemediğini kontrol etmek için kullanın.

## Temel çıkarımlar

- Büyük olaylar nadirdir; bu yüzden her birini zaman çizelgesiyle gösterin ve yalnızca uzun pencereler üzerinde, rakamın yanında sayıyla birlikte özetleyin.
- Saati müşteri etkisinde başlatın ve ilandan önceki boşluğu kendi ölçümü olarak raporlayın.
- Etkiyi kullanıcılar ve kullanım cinsinden ölçün ve sayıların kaçırdığı şey için sade dilli bir ifade ekleyin.
- İletişimin zamanındalığını, hedef kitleye göre hedefler ve düzenli bir güncelleme ritmiyle yanıtın bir parçası olarak ele alın.
- Bir gözden geçirme, eylemleri bittiğinde biter; bu yüzden sonuna kadar takibi ve tekrarlayan nedenleri izleyin.
- Sayı üzerinde asla hedef koymayın, insanları asla sıralamayın ve ilan etmeyi güvenli tutun.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
