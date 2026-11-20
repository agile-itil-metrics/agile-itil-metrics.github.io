# Metrik programları için olgunluk modeli

**Ortak beş düzeyli ölçeği, bir metrik programının nerede olduğunu betimlemek ve bir sonraki küçük adımı seçmek için kullanın; asla sergilenecek, karşılaştırılacak veya belgelendirilecek bir puan olarak kullanmayın.**

## Genel bakış ve motivasyon

Bu kitaptaki her diğer konu, kendi konusu için küçük bir olgunluk tablosuyla biter. Bu konu aynı ölçeği bir bütün olarak metrik programına uygular. Soru, bir takımın olay sürelerinin ne kadar iyi olduğu değildir. Soru, kurumun ölçümleri hiç toplama, okuma ve onlara göre hareket etme biçiminin ne kadar iyi olduğudur: tanımların paylaşılıp paylaşılmadığı, verinin güvenilip güvenilmediği, sayıların kararlara yol açıp açmadığı ve ölçülen kişilerin programı yardım olarak görüp görmediği.

Olgunluk modeli, bir uygulama geliştikçe bir kurumun geçebileceği aşamaların betimlemesidir. Yazılımdaki en bilinen örnek, Yazılım Mühendisliği Enstitüsü'ndeki çalışmalardan doğan ve yaygın biçimde yayılan [Yetkinlik Olgunluk Modeli'dir](https://en.wikipedia.org/wiki/Capability_Maturity_Model). Etkisi büyüktü ve ardından gelen eleştiri de öyleydi. Kurumlar yetkinliği değil düzeyi kovaladı, denetçiler evrakı puanladı ve model bir rozet olarak kullanılır hâle geldi. Herhangi bir olgunluk modelinin sorumlu kullanımı üç uyarıyı gözden uzak tutmaz. Ölçek bir sohbet aracıdır, bir belgelendirme değildir. Yüksek olan her zaman daha iyi değildir; çünkü doğru düzey bağlama bağlıdır. Ve model sonuçların yerini tutmaz: hizmetleri iyileştirmeyen olgun bir program çok derli toplu bir başarısızlıktır ve rozet olarak gösterilen bir düzey, iyi görünen ve hiçbir kararı bilgilendirmeyen bir sayı olan [gösteriş metriğine](https://en.wikipedia.org/wiki/Vanity_metric) çok benzer.

Burada kullanılan ölçek, kitap ve *Agile ITIL Guide* boyunca paylaşılan ölçektir: Başlangıç, Geliştirme, Standartlaştırma, Yönetim ve Uyumlama (bkz. belirtimdeki ortak olgunluk modeli). Bu ölçek, ITIL'deki, ISO/IEC 33000'deki veya Yetkinlik Olgunluk Modeli'ndeki süreç olgunluk ölçeklerinden bilinçli olarak farklıdır ve bir takım, bu ölçeğe dayanarak o çerçevelerden herhangi birinde bir puan iddia etmemelidir.

Çevik hedefler, onu nasıl kullanacağınızı gösterir. Sürekli iyileştirme, modelin bir sonraki adımı bulmak için olduğu, nihai bir duruma ulaşmak için olmadığı anlamına gelir. Süregelen evrim, geçen yıl Uyumlama düzeyine ulaşan bir programın insanlar ayrılırsa veya öncelikler kayarsa gerileyebileceği anlamına gelir; bu yüzden öz değerlendirme tekrarlanır. Sürekli paydaş katılımı, değerlendirmenin takımların üzerinde değil, onlarla birlikte yapılması demektir. Sürdürülebilir tempo, programın bir seferde bir adım atması ve bir çeyrekte üç düzey atlamaya çalışmaması demektir. Motivasyonu yüksek bireyler etrafında inşa etmek ise programın kendilerine yardım edip etmediğine işi yapan kişilerin karar vermesi demektir. Bu, ITIL'deki sürekli iyileştirme uygulamasıyla aynı mantıktır: kurum mevcut durumu denetler, bir yön belirler ve küçük adımlarla iyileştirir; bu, herkesin sürekli iyileştirmesi anlamına gelen Japon fikri [kaizen](https://en.wikipedia.org/wiki/Kaizen) ile yakın bir alışkanlıktır. Daha genel fikir [sürekli iyileştirme sürecidir](https://en.wikipedia.org/wiki/Continual_improvement_process) (bkz. Konu 9.5 “Sürekli iyileştirme metrikleri”).

Modelin metrikler bağlamında özel bir tuzağı vardır. Kendi metrikleriyle değerlendirilen bir program, uyardığı çarpıtmayı davet eder. “Tanımı olan ölçüm sayısı” bir hedef hâline gelirse tanımlar çoğalır. Bu nedenle bu konudaki yaklaşım, sayımlara ek olarak işten gelen kanıtı (hangi kararların değiştiği, takımların ne söylediği) kullanır ve değerlendirmeyi, onu şişirmekten en az çıkarı olan takımların sahipliğinde tutar (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Takımlar için bir eşlik eden değerlendirme formu eklerde yer alır (bkz. Konu 12.5 “Olgunluk öz değerlendirmesi”).

## Temel ilkeler

- **Ölçek bir sohbet aracıdır.** İnsanların bugünü betimlemesine ve bir sonraki adımı seçmesine yardım eder; puanlamak, sıralamak veya belgelendirmek için değildir.
- **Takımlarla birlikte değerlendirin.** Açıkça tartışılan öz değerlendirme, dışarıdan puanlamadan daha doğrudur.
- **Kanıta göre yargılayın.** Hangi belgelerin bulunduğunun yanı sıra hangi kararların değiştiğini, insanların ne söylediğini ve verinin ne gösterdiğini sorun.
- **Boyutlar farklılaşabilir.** Bir program araçlarda güçlü, güvende zayıf olabilir. Tek bir sayıyı değil, profili raporlayın.
- **Bir seferde bir adım atın.** Her şey için aynı anda değil, bir veya iki boyutta bir sonraki düzeyi hedefleyin.
- **Yüksek olan her zaman daha iyi değildir.** Kurumun büyüklüğüne, riskine ve ihtiyaçlarına uyan düzeyi seçin.
- **Gerilemeyi bekleyin.** Personel devri, yeniden yapılanma ve baskı programı geri itebilir. Düzenli olarak yeniden değerlendirin.
- **Takımların sıralama tablosunu asla yayımlamayın.** Program için toplulaştırın ve takım sonuçlarını yalnızca takımla paylaşın.

## Metrik tanımları

Aşağıdaki ölçümler programın sağlığını ve değerlendirmesini betimler. Program takımı ve sponsorlar içindir ve tartışma için sinyaller olarak okunur.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Değerlendirme katılımı | Kendi tartışmasıyla birlikte bir öz değerlendirmeyi tamamlayan katılımcı takımların payı | tamamlayıp tartışan takımlar / katılımcı takımlar | yüzde | Değerlendirme kayıtları | Sürekli iyileştirme | Yansıtma ve retrospektifler | Yılda iki kez |
| Boyuta göre profil | Takımların her boyutta öz değerlendirdiği düzeylerin, tek bir puan olarak değil aralık olarak gösterilen dağılımı | boyut başına her düzeydeki takım sayısı | düzey başına takım | Öz değerlendirmeler, toplulaştırılmış | Sürekli iyileştirme; yönetişim | Görünür iş | Yılda iki kez |
| Değerlendirmelerden gelen iyileştirme eylemleri | Üzerinde anlaşılmış sonraki adımlardan tamamlananların, gerekçeyle bırakılanların veya devam edenlerin payı | kapatılan veya gerekçelendirilen eylemler / üzerinde anlaşılan eylemler | yüzde | İyileştirme kaydı | Sürekli iyileştirme | Küçük deneyler | Üç aylık |
| Karar kanıtı | Takımın, son çeyrekte ölçümün bilgi verdiği bir karar veya bilinçli tercih adlandırabildiği örneklenmiş ölçümlerin payı | adlandırılmış kararı olan ölçümler / örneklenen ölçümler | yüzde | Takım görüşmeleri; gözden geçirme notları | Sürekli iyileştirme | Törenden çok kanıt | Üç aylık |
| Tanım ve veri güveni | Tanımların açık ve verinin doğru olduğuna dair takım düzeyinde katılım | kısa bir takım anketinde katılanların yüzdesi; yanıt oranı gösterilir | yüzde | Anonim takım anketi | Bilgi yönetimi; enformasyon yönetimi | Ortak anlayış | Yılda iki kez |
| Sonraki düzeye geçme süresi (betimleyici) | Bir takımın seçtiği bir boyutu bir düzey yukarı taşıması için geçen süre | üzerinde anlaşılmış adımdan takımın yeniden değerlendirmesine kadar geçen ayların medyanı | ay | Değerlendirme geçmişi | Sürekli iyileştirme | Sürdürülebilir tempo | Yıllık |
| Değerlendirme yükü | Değerlendirmenin takım başına aldığı saat | takım başına medyan saat | saat | Takımlardan zaman tahminleri | Sürekli iyileştirme | Sürdürülebilir tempo | Yılda iki kez |

Katılım, tartışmayla tamamlanma olarak ölçülür; çünkü yalnız başına doldurulan bir form çok az şey söyler. Profil bir aralıktır ve asla tek bir olgunluk sayısında ortalaması alınmaz. Sonraki düzeye geçme süresi betimleyicidir: hızlı bir yükseliş şişirilmiş öz puanlamayı, yavaş bir yükseliş ise uygun bir özeni yansıtabilir. Değerlendirme yükü, takım başına bir iki saati geçmemesi gereken değerlendirmenin kendisinin bir denetimidir.

## Öneriler

### Ölçeği iyi kullanın

**1. Bir metrik programının boyutlarını tanımlayın.** Çalışabilir bir küme altı boyuttan oluşur: (a) sorular ve amaç, ölçümlerin hedef kitlelerin sorduğu soruları yanıtlayıp yanıtlamadığı; (b) tanımlar ve sahiplik, ölçümlerin yazılı tanımları ve sahipleri olup olmadığı; (c) veri ve araçlar, verinin doğru, zamanında ve taşınabilir olup olmadığı; (d) kararlarda kullanım, sayıların seçimlere bilgi sağlayıp sağlamadığı; (e) güven ve güvenlik, insanların verinin kendilerine yardım ettiğine inanıp inanmadığı; ve (f) gözden geçirme ve evrim, programın kendini budayıp budamadığı. Altı, yararlı olacak kadar çok ve bir saatte tartışılabilecek kadar azdır.

**2. Her düzeyin neye benzediğini betimleyin.** Aşağıdaki “Olgunluk modeli” bölümündeki tablo, her boyut için her düzeyde kısa betimlemeler verir. Bunları ipuçları olarak ele alın. Bir takım ifadeyi kendi bağlamına uyarlamalı ve kendi örneklerini yazmalıdır.

**3. Ortalama almayın.** Tek bir genel puan, önemli olan deseni gizler. Yüksek araç olgunluğuna ve düşük güvene sahip bir program, tersine sahip olandan farklı bir durumdadır ve bir sonraki adım farklıdır. Profili gösterin.

### Takımların üzerinde değil, onlarla birlikte değerlendirin

**4. Bunu bir saatlik bir sohbet yapın.** Bir takımı tabloyla bir araya getirin. Her kişiden takımın her boyutta nerede olduğunu düşündüğünü özel olarak işaretlemesini ve sonra karşılaştırmasını isteyin. Farkları tartışın; çünkü aynı programın farklı deneyimlerini ortaya çıkarırlar. Bir takım görüşü üzerinde anlaşın, arkasındaki kanıtı kaydedin ve bir veya iki sonraki adımı seçin.

**5. Kanıt isteyin.** İddia edilen her düzey için bir örnek isteyin. “Sayıları kararlarda kullanıyoruz” ifadesi “Geçen çeyrek hangi kararlarda?” sorusunu davet eder. Kontrol etmek için örneklenmiş ölçümleri ve görüşmeleri kullanın. Bu, insanlara saygı gösterir ve değerlendirmenin temenniye kaymasını önler.

**6. Sonuçları takımla birlikte tutun.** Bir takımın profili takıma aittir. Program, toplulaştırılmış aralıkları ve ortak temaları paylaşır, sıralamayı değil. Değerlendirmenin finansmanı, konumu veya değerlendirmeleri etkilemediğini açıkça belirtin. Etkilerse takımlar onu şişirir ve değer kaybolur (bkz. Konu 11.3 “Korku yaratmadan metrikleri devreye almak”).

### Sonraki adımları seçin

**7. Diğerlerini sınırlayan boyutu seçin.** Güven ve güvenlik çoğu zaman diğer her şeyi sınırlar: onsuz veri çarpıtılır ve kararlar şüphelidir. Tanımlar ve sahiplik çoğu zaman veriyi ve kullanımı sınırlar. Yaygın bir desen, önce güveni ve tanımları, sonra veriyi, sonra kullanımı ve gözden geçirmeyi güçlendirmektir. Küçük bir iyileşmenin diğerlerinin kilidini açacağı boyutu arayın.

**8. Küçük, somut bir adım belirleyin.** Bir sonraki adım, bir takımın bir çeyrekte tamamlayabileceği ve tanıyabileceği bir adım olmalıdır: “bir tüzük üzerinde anlaşın”, “dört ölçümümüzün tanımlarını yazın”, “iki beslemeyi otomatikleştirin”, “kararları kaydettiğimiz aylık bir gözden geçirme yapın”. “4. Düzeye ulaşın” gibi adımlardan kaçının. Düzeyler bir durumu betimler; adımlar işi betimler.

**9. Adımları iyileştirme kaydına bağlayın.** Eylemleri diğer iyileştirme işleriyle aynı yere, sahipleri ve tarihleriyle birlikte koyun ve ilerlemeyi düzenli iyileştirme sohbetinde gözden geçirin (bkz. Konu 9.5 “Sürekli iyileştirme metrikleri”). Finanse edilmeyen veya planlanmayan bir adım gerçekleşmez.

### Dürüst ve hafif tutun

**10. Takımları sıralamadan takımlar arasında kalibre edin.** Takımların bir boyutta 3. Düzey olarak adlandırdıkları şeylere dair örnekleri paylaştığı kısa bir oturum düzenleyin. Standartlardaki farkları tartışın. Amaç eşit puanlar değil, ortak bir anlayıştır. Kolaylaştırıcıyı dönüşümlü seçin ve ifadeye itiraz etmek için program dışından bir takımı davet edin.

**11. Bir ritimle ve olaylara yanıt olarak yeniden değerlendirin.** Çoğu program için yılda iki kez yeterlidir. Bir yeniden yapılanmadan, bir araç değişikliğinden veya tüzüğün bir ihlalinden sonra yeniden değerlendirin; çünkü bunlar güveni her iki yönde de hareket ettirebilir. Gerilemeyi izleyin ve onu başarısızlık değil bilgi olarak ele alın.

**12. Modelin kendisini emekliye ayırın veya gözden geçirin.** Her yıl takımlara boyutların ve düzey betimlemelerinin hâlâ uyup uymadığını sorun. Kafa karıştıran ifadeyi yeniden yazın ve kimsenin kullanmadığını kaldırın. Beş yıldır değişmemiş bir model, artık var olmayan bir programı betimliyor olabilir.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Değerlendirme katılımı | Kotayı karşılamak için form doldurmak; takım adına tek bir kişinin doldurması | Bir takım tartışması şart koşun; her iddianın arkasındaki kanıtı isteyin |
| Boyuta göre profil | İyi görünmek için düzeyleri şişirmek; yardım almak için düzeyleri düşük göstermek | Finansmana veya konuma bağlamayın; kanıt isteyin; açıkça kalibre edin |
| Değerlendirmelerden gelen iyileştirme eylemleri | Kapatmak için önemsiz adımlar seçmek; yapmadan kapatmak | Adım büyüklüğünü ve değerini gözden geçirin; sonuçları bir sonraki değerlendirmede kontrol edin |
| Karar kanıtı | Kararları sonradan uydurmak; sonuçsuz kararları listelemek | Tarihi ve ilgili kişileri isteyin; “hiçbir şey yapmamayı seçtik” ifadesini karar olarak kabul edin |
| Tanım ve veri güveni | Yanıtlayanlara telkinde bulunmak; hoşnutsuzluğu gizleyen düşük yanıt | Anonimlik ve asgari grup büyüklüğü; yanıt oranlarını gösterin; takımlarla doğrudan konuşun |
| Sonraki düzeye geçme süresi (betimleyici) | İlerleme iddialarına acele etmek; gerilemeyi gizlemek | Betimleyici tutun; kanıtla birlikte okuyun; gerilemeleri ceza olmadan kaydedin |
| Değerlendirme yükü | Saatleri kısaltmak için tartışmayı atlamak | Saatleri katılım ve kanıt kalitesiyle birlikte izleyin |

Sağlıklı bir okuma, düzeylerin bir karışımına sahip bir profili, araçlardan ve cilalamadan önce yükselen güveni ve tanımları, küçük ve tamamlanmış sonraki adımları, takımların adlandırabildiği kararları ve ara sıra yaşanan gerilemenin dürüst bir kaydını gösterir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Takım öz değerlendirmesi | Dürüst, sahiplenilmiş, hızlı | Öznel; kalibrasyon gerekir |
| Dış değerlendirme | Tutarlı; bağımsız | Maliyetli; değerlendirici için gösteri yapmayı davet eder |
| Tek genel puan | İletmesi kolay | Deseni gizler; hedefleri davet eder |
| Boyuta göre profil | Nerede harekete geçileceğini gösterir | Özetlemesi daha zor |
| Yıllık değerlendirme | Hafif | Gerilemeyi fark etmesi yavaş |
| Olay tetikleyicileriyle yılda iki kez | Duyarlı | Daha fazla emek |
| Finansmana bağlı | Dikkat çeker | Şişirme ve manipülasyon |
| Finansmandan ayrı tutulan | Dürüst veri | Destek kazanmak için başka yollar gerekir |

Düzyazıyla yanıt şudur: kanıtlı hafif bir öz değerlendirme yürütün, profilleri ve aralıkları raporlayın, sonuçları takımlarla birlikte tutun ve sonraki adımları finansmana veya konuma değil, iyileştirme kaydına bağlayın.

## Takımınızla tartışılacak sorular

**1. Altı boyuttan hangisinin en zayıf olduğunu söylerdik ve bunu söylememizi sağlayan nedir?**
Her kişi özel olarak birini seçsin, sonra paylaşsın. Kolaylaştırıcı yakın tarihli bir örnek istemelidir. Desenlere bakın ve hangi boyutun diğerlerini sınırladığı konusunda anlaşın.

**2. Geçen çeyrekten bir ölçümün değiştirdiği bir kararı adlandırabilir miyiz?**
Bunları listeleyin. Liste kısaysa nedenini sorun. Sorunun ölçümlerde mi, veride mi yoksa bakma alışkanlığında mı olduğunu tartışın.

**3. Güven ve güvenlikte kendimizi nereye yerleştirirdik ve bunu nereden biliyoruz?**
Ramak kala bildirimlerine, itirazlara ve anket sonuçlarına bakın. İnsanların uygulamada nasıl konuştuğuyla karşılaştırın. Liderlerin onu hareket ettirmek için yapabileceği bir şey üzerinde anlaşın.

**4. En zayıf boyutumuz için küçük, somut bir sonraki adım neye benzerdi?**
Bir sahibi ve bir tarihiyle bir cümleyle taslağını hazırlayın. Bir çeyrekte bitirilebildiğini kontrol edin. İşe yaradığını nasıl anlayacağımız konusunda anlaşın.

**5. Bu değerlendirmeyi bir tehdit gibi hissettirecek olan nedir ve bunu nasıl önleriz?**
İnsanların korkacağı sonuç kullanımlarını tartışın. Sonuçların asla ne için kullanılmayacağını yazın. Program liderinin katıldığını kontrol edin.

**6. Ulaşmamız gerekmeyen bir düzey var mı?**
Büyüklüğümüzü, risklerimizi ve hedeflerimizi düşünün. Şimdilik yeterince iyi bir düzeyi ve yeniden ele almamız gerektiğini söyleyecek bir sinyali betimleyin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Takımlar kendilerini değerlendirir, bir sonraki adımı seçer ve sonuçlarını kendilerinde tutar. Sohbeti deneyimdeki farkları ortaya çıkarmak, kanıt istemek ve adımları bitirilebilecek kadar küçük belirlemek için kullanmalıdır. Profili bir sıralamaya dönüştürme girişimlerine karşı çıkmalıdırlar.

### Hizmet ve operasyon takımları

Operasyon takımları ağır veri ve olay yüklerini taşır ve programın onları nerede desteklediğini veya yüklediğini görebilir. Araçların veya tanımların işlerini nerede engellediğini not etmeli, nöbet ve olay verisinin özenle ele alınmasını istemeli ve değerlendirme yüküne dair açık geri bildirim vermelidirler.

### Liderlik ve yönetişim

Liderler programa sponsor olur ve toplulaştırılmış tabloyu alır. Profilleri ve ortak temaları istemeli, tek bir puan istemeye direnmeli, takımların seçtiği sonraki adımları finanse etmeli ve finansmanı veya konumu değerlendirmeye bağlamamalıdır. Ayrıca, metriklerin bilgi verdiği kararları betimleyerek davranışa örnek olmalıdırlar.

### Müşteriler ve kullanıcılar

Müşteriler ve kullanıcılar, program hizmetleri iyileştirdiğinde ve geri bildirimleri ölçümlerin bir parçası olduğunda yarar görür. Ortak oldukları yerde, kendilerini ilgilendiren ölçümlerin, örneğin memnuniyet anketlerinin yararlılığının değerlendirilmesine ve verilerinin nasıl kullanıldığının gözden geçirilmesine katılabilirler.

## Uygulamada: çevik bir ITIL örneği

Ulusal bir sigorta grubunun 20 teslimat ve destek takımı ve 18 aydır yürüyen bir metrik programı vardır. Sponsor, yatırımı yönlendirmek için “her takım için bir olgunluk puanı” ister. Program lideri, önceki bir denetim tarzı puanlamanın takımların belge dosyaları hazırlamasına yol açtığını hatırlayarak temkinlidir. Aşağıdaki rakamlar açıklayıcı örnektir.

Program lideri bunun yerine, takım dışından bir kolaylaştırıcıyla bir saatlik sohbette takımlar tarafından değerlendirilen ve sonuçları takımda kalan, altı boyutlu bir profil önerir. Sponsora programın aralıkları ve ortak temaları raporlayacağını ve hiçbir takımın profilinin finansmana bağlanmayacağını söyler. Sponsor kabul eder ve karar kaydedilir.

20 takımdan on dokuzu değerlendirmeyi bir tartışmayla tamamlar; dolayısıyla katılım yüzde 95'tir. Profil bir aralık gösterir: sorular ve amaçta çoğu takım 2. veya 3. Düzeydedir; tanımlar ve sahiplikte 1'den 4'e bir yayılım vardır; veri ve araçlarda çoğunlukla 3; kararlarda kullanımda çoğunlukla 2; güven ve güvenlikte 2 ile 4 arasında bir bölünme; ve gözden geçirme ve evrimde çoğunlukla 1 veya 2. Kanıt denetimleri açıklayıcıdır. On bir takım kararlarda kullanım için 3. Düzeyi iddia etmiştir, ancak son çeyrekte bir ölçümün bilgi verdiği bir kararı adlandırmaları istendiğinde yalnızca altısı adlandırabilmiştir. Program lideri bunu yargılamadan not eder ve bu bir tema olur: takımların panoları vardır ve nadiren karar kaydeden gözden geçirmeler yapar.

Sonraki adımlar küçüktür. Sekiz takım karar günlüğü olan aylık bir gözden geçirme seçer. Dört takım ölçümlerinin tanımlarını yazmayı seçer. Üç takım bir tüzük üzerinde anlaşmayı seçer. Altı ay sonra üzerinde anlaşılan 17 adımdan 14'ü tamamlanmış, biri bir gerekçeyle bırakılmış ve ikisi devam etmektedir. Tekrarlanan bir değerlendirme, karar kanıtının örneklenen ölçümlerin yüzde 38'inden yüzde 71'ine yükseldiğini ve güven anketinin yüzde 54'ten yüzde 67 katılıma çıktığını gösterir. Bir takım bir yeniden yapılanmadan sonra güvende geriler ve kolaylaştırıcı bunu başarısızlık değil, bilgi olarak kaydeder. Bir yıl sonra sponsor yıllık rapor için yeniden tek bir puan ister. Program lideri aralıklar, üç tema ve tamamlanan iyileştirme adımlarıyla tek sayfalık bir profil sunar. Sponsor kabul eder ve rapor ölçeğin bir sohbet aracı olduğunu açıkça belirtir.

## Sektör mercekleri

**Girişim (startup).** Resmî bir değerlendirme muhtemelen aşırıdır. Altı boyut üzerinde yılda iki kez yapılan kısa bir sohbet ve bir veya iki küçük adım yeterlidir. Ölçümlerin yargı için kullanılacağı korkusuna dikkat edin; çünkü küçük takımlar bunu keskin biçimde hisseder.

**Küçük işletme.** Boyutları, sahip ve personelle bir konuşma için kontrol listesi olarak kullanın. Tuttuğunuz birkaç ölçümün gerçek soruları yanıtlayıp yanıtlamadığını, insanların ne anlama geldiklerini bilip bilmediğini ve kullanılıp kullanılmadığını sorun. Bir adım seçin. Bir saatten fazla harcamayın.

**Büyük kurum.** Ölçek hafif, tutarlı bir süreç gerektirir: aynı boyutlar, bir kolaylaştırıcıyla öz değerlendirme, kalibrasyon oturumları ve toplulaştırılmış profiller. Merkezî bir puanlama ofisine direnin. Sonraki adımları iyileştirme kayıtlarına bağlayın ve sponsorlara aralıkları ve temaları raporlayın. Ölçeğin bir uyum alıştırmasına dönüşmesine karşı korunun.

**Devlet ve kamu sektörü.** Denetim ve gözetim organları olgunluk puanları isteyebilir. Bu iç sohbet aracı ile herhangi bir resmî çerçeve arasındaki farkı net tutun. Takım sonuçlarını takımlarda tutun, gözetim için toplulaştırmalar sağlayın ve ölçeğin ne olduğu ve ne olmadığı konusunda şeffaf olun (bkz. Konu 8.3 “Uyum ve denetim metrikleri”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler küçüktür: yılda iki kez takım başına bir iki saat, bir kolaylaştırıcı, biraz analiz ve iyileştirme adımlarını gerçekleştirme emeği. Daha büyük maliyetler, model danışmanlar, puanlama ofisleri ve kanıt dosyalarıyla kötüye kullanıldığında ortaya çıkar.

Getiriler, emeğin daha iyi hedeflenmesinden gelir. Yatırımı tüm boyutlara yaymak yerine program, sınırlayıcı boyutu bulur ve onu ele alır. Diğer getiriler arasında gerilemenin daha erken fark edilmesi, takımlar arasında ortak dil ve takımların seçtiği ve sahip çıktığı iyileştirme adımları bulunur. İş gerekçesini kendi verilerinizden kurun: tamamlanan iyileştirme adımları, karar kanıtındaki ve güven anketi sonuçlarındaki değişiklikler ve değerlendirmenin aldığı emek. Olgunluk iyileştirmesinin getirilerine dair yayımlanmış iddiaları, izlenebilir bir kaynak ve sizin bağlamınızla ilgisi olmadan aktarmaktan kaçının (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Olgunluk rozeti.** Düzey hedef olur. Onu kanıtla bir sohbet olarak kullanın.
- **Tek genel sayı.** Desen kaybolur ve hedefler ortaya çıkar. Profili gösterin.
- **Denetçilerin puanlaması.** Takımlar gösteri için belge hazırlar. Bir kolaylaştırıcıyla öz değerlendirme kullanın.
- **Puanı finansmana bağlamak.** Şişirme izler. Değerlendirmeyi ayrı tutun.
- **En üst düzeyin peşinde koşmak.** Her program Uyumlama düzeyine ihtiyaç duymaz. Uyanı seçin.
- **Değerlendir ve unut.** Hiçbir adım izlemez. Adımları iyileştirme kaydına bağlayın.
- **Aşırı uzun değerlendirme.** Yük artar ve kalite düşer. Bir saatle sınırlayın.
- **Gerilemeyi göz ardı etmek.** Programlar değişimden sonra kayar. Bir ritimle ve olaylardan sonra yeniden değerlendirin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Sorular ve amaç | Veri var olduğu için toplanan ölçümler | Bazı takımlar sordukları soruları belirtir | Hedef kitleler ve sorular yazılıdır; ölçümler bunlarla eşlenmiştir | Soru kapsamı gözden geçirilir; yanıtlanmamış sorular yeni ölçümleri yönlendirir | Müşteriler ve tedarikçiler dahil hedef kitleler ölçümleri şekillendirir; sorular hizmetlerle birlikte evrilir |
| Tanımlar ve sahiplik | Tanımlar kişiye göre değişir | Bazıları yazılı; gayriresmî sahipler | Her ölçüm için tanım, kaynak, sahip ve sınırları olan katalog | Tanım bütünlüğü ve itirazlar yönetilir | Tanımlar takımlar ve tedarikçiler arasında ortak sahiplenilir; kararlara bilgi sağlamayı bıraktıklarında gözden geçirilir |
| Veri ve araçlar | Elle ve kırılgan | Bazı otomatik beslemeler | Test edilmiş veri hatları, ortak depo, taşınabilir veri | Güvenilirlik, mutabakat ve çıkışa hazırlık yönetilir | Ortak sözleşmelerle birleşik veri hatları; kaynaklar geri bildirimden iyileştirilir |
| Kararlarda kullanım | Sayılar gösterilir, nadiren kullanılır | Bazı gözden geçirmelerde kullanılır | Kararları kaydeden düzenli gözden geçirmeler | Karar kanıtı izlenir ve üzerinde harekete geçilir | Kararlar takımlar arasında sonuçlara bağlanır; öğrenme paylaşılır |
| Güven ve güvenlik | Korku veya kayıtsızlık | Sözlü güvenceler | Yazılı tüzük; bireysel görünümler kapalı; güvenlik anketi | İhlaller açıkça gözden geçirilir; açıklık sinyalleri yönetilir | Güven rutindir; program personel ve ortaklarca şekillendirilir |
| Gözden geçirme ve evrim | Yok | Ara sıra temizlik | Takımlarla dönemsel gözden geçirme; emeklilik kuralı | Değerlendirme adımları finanse edilir ve tamamlanır | Program, herkesten gelen değişikliklerle sürekli iyileşir |

## Kontrol listesi

- [ ] Altı boyut üzerinde anlaşılmıştır ve düzey betimlemeleri bağlamımıza uyarlanmıştır.
- [ ] Her takım, bir kolaylaştırıcıyla yaklaşık bir saatlik bir tartışmada kendini değerlendirir.
- [ ] İddia edilen her düzey bir örnekle veya örneklenmiş bir denetimle desteklenir.
- [ ] Sonuçlar profiller ve aralıklar olarak gösterilir; asla tek bir ortalama puan veya sıralama olarak gösterilmez.
- [ ] Bir takımın sonuçları takımda kalır ve toplulaştırma sponsorlarla paylaşılır.
- [ ] Değerlendirme finansmana, konuma veya performans değerlendirmelerine bağlı değildir ve bu yazılıdır.
- [ ] Her takım, bir sahibi ve bir tarihiyle bir veya iki küçük sonraki adım üzerinde anlaşır.
- [ ] Sonraki adımlar iyileştirme kaydında izlenir.
- [ ] Yeniden değerlendirme yılda en az iki kez ve büyük olaylardan sonra yapılır.
- [ ] Modelin kendisi her yıl takımlarla gözden geçirilir.

## Yapay zekâ istemleri

**Bir öz değerlendirme sohbeti hazırlayın.**

```text
Bir takımın metrik programına ilişkin öz değerlendirmesi için bir saatlik bir
kolaylaştırma planı hazırlayın; altı boyut şunlardır: sorular ve amaç, tanımlar ve
sahiplik, veri ve araçlar, kararlarda kullanım, güven ve güvenlik, gözden geçirme ve
evrim. Beş düzey kullanın: Başlangıç, Geliştirme, Standartlaştırma, Yönetim,
Uyumlama. Özel işaretlemeyi, karşılaştırmayı, kanıt sorularını ve bir veya iki küçük
sonraki adım üzerinde anlaşmayı ekleyin. Puan üretmeyin. Varsayımlarınızı listeleyin.
```

**Zayıf bir boyutu adımlara dönüştürün.**

```text
Takımımız metrik programının [boyut] boyutunda kendisini [n]. Düzeyde
değerlendiriyor. Kanıt: [yapıştırın]. Bizi [n+1]. Düzeye doğru taşıyabilecek, her
biri bir çeyrekte bitirilebilir üç küçük adım önerin. Her adım için sahibi, emeği,
olası yararı ve işe yaradığını nasıl anlayacağımızı betimleyin. Sonuç vaat etmeyin.
Varsayımlarınızı ve risklerinizi listeleyin.
```

**İddia edilen bir düzey için kanıtı kontrol edin.**

```text
Bir takım [boyut] boyutunda [n]. Düzeyi iddia ediyor ve şu kanıtı veriyor:
[yapıştırın]. Meraklı bir meslektaş gibi davranın. Kanıtın iddiayı destekleyip
desteklemediğini sınamak için soruları, hangi örneklerin ikna edici olacağını ve
hangi işaretlerin iddianın iyimser olduğunu düşündüreceğini listeleyin. Takımı
yargılamayın. Varsayımlarınızı listeleyin.
```

**Sıralama yapmadan profilleri özetleyin.**

```text
Şunlar her boyut için her düzeydeki takımların toplulaştırılmış sayılarıdır:
[yapıştırın]. Sponsorlar için aralığı, üç ortak temayı ve takımların seçtiği
iyileştirme adımlarını betimleyen yarım sayfalık bir özet yazın. Takımları
sıralamayın, tek bir puan üretmeyin veya kanıt olmadan nedenler iddia etmeyin.
Öz değerlendirmeye ilişkin çekinceleri listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): program ölçümlerini olgunluk boyutlarına ve eşleştirilmiş koruma önlemlerine eşlemek amacıyla kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir olgunluk değerlendirmesinin profilleri raporladığını, sonuçları takımlarda tuttuğunu ve tek bir puandan kaçındığını denetlemek amacıyla kullanın.

## Temel çıkarımlar

- Ortak beş düzeyli ölçeği bir sohbet aracı olarak kullanın; asla rozet, sıralama veya belgelendirme olarak kullanmayın.
- Tek bir ortalama puanı değil, altı boyutlu bir profili raporlayın.
- Takımlarla birlikte değerlendirin, kanıt isteyin ve her takımın sonuçlarını takımda tutun.
- Diğerlerini sınırlayan boyutta, çoğu zaman güven ve tanımlarda, küçük sonraki adımlar seçin.
- Adımları iyileştirme kaydında izleyin ve programlar gerilediği için düzenli olarak yeniden değerlendirin.
- Yüksek olan her zaman daha iyi değildir ve sonuçlar düzeylerden daha önemlidir.

## Kaynaklar ve ileri okuma

1. Paulk, M., et al., *Capability Maturity Model for Software, Version 1.1*, Software Engineering Institute, Carnegie Mellon University, 1993.
2. Axelos, *ITIL 4: Direct, Plan and Improve*, 2020.
3. ISO/IEC 33001, *Information technology: Process assessment: Concepts and terminology*, International Organization for Standardization, 2015.
4. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
5. Muller, J., *The Tyranny of Metrics*, Princeton University Press, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Capability Maturity Model](https://en.wikipedia.org/wiki/Capability_Maturity_Model).
8. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
9. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
10. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
11. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
