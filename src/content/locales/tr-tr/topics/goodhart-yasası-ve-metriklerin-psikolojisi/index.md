# Goodhart yasası ve metriklerin psikolojisi

**Ödüllendirdiğiniz, sıraladığınız ya da tehdit ettiğiniz her sayı, tarif etmesi beklenen işi değiştirmeye başlayacaktır; bu yüzden bu kitaptaki her metrik, bir ekibin tartışacağı bir soru olarak kullanılır ve manipülasyonunu yakalayan bir koruyucu önlemle eşleştirilir.**

## Genel bakış ve motivasyon

[Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) ölçümdeki en eski uyarıdır. İktisatçı Charles Goodhart, 1975'te İngiliz para politikası üzerine yazarken, yetkililer bir istatistiksel düzenliliğe kontrol amacıyla baskı uyguladığında onun çökme eğiliminde olduğunu fark etti. Yaygın ifade daha sonra geldi. Antropolog Marilyn Strathern bunu 1997'de şöyle dile getirdi: “Bir ölçü hedef haline geldiğinde, iyi bir ölçü olmaktan çıkar.” İki cümle aynı şeyi söyler: bir sayı insanları yönlendirmek için kullanıldığı anda, insanlar sayıyı yönlendirir.

Aynı fikrin başka adları da vardır. Sosyal bilimci Donald Campbell'dan gelen [Campbell yasası](https://en.wikipedia.org/wiki/Campbell%27s_law), nicel bir göstergenin kararlar için ne kadar çok kullanılırsa, yozlaşma baskılarına o kadar maruz kaldığını ve izlemesi beklenen süreçleri o kadar çok çarpıttığını söyler. [Kobra etkisi](https://en.wikipedia.org/wiki/Cobra_effect), ortadan kaldırması beklenen şeyden daha fazlasını üreten bir ödülün hikâyesidir. Her biri bir [sapkın teşvik](https://en.wikipedia.org/wiki/Perverse_incentive) örneğidir: davranışı ödül verenin istediğinden uzağa iten bir ödül.

BT hizmetlerini geliştiren ve işleten ekipler alışılmadık ölçüde risk altındadır. Sürekli teslimat ve [ITIL](https://en.wikipedia.org/wiki/ITIL) tarafından kodlanan BT hizmet yönetimi (ITSM) ikisi de sürekli bir zaman damgası, sayı ve durum akışı üretir. Bir bildirim sistemi bir bildirimin ne zaman açıldığını, ne zaman atandığını, saatin ne zaman durduğunu ve ne zaman kapandığını kaydeder. Bir teslimat aracı işin ne zaman başlayıp bittiğini kaydeder. Bu sayıları toplamak ucuz, grafiğe dökmek kolay ve hedeflere dönüştürmek kolaydır. Kimseye yardımcı olmadan oynatmak da kolaydır.

Üç terim bu konuda ve kitabın geri kalanında tekrar eder. **Ölçü** bir şeyi tarif eder. **Hedef**, birinin tutturması beklenen bir sayıdır. **Koruyucu önlem (guardrail)**, ilk ölçü manipüle ediliyorsa hareket edecek, önceden seçilmiş ikinci bir ölçü ya da uygulamadır. Ölçüden hedefe geçiş, sorunun başladığı yerdir ve koruyucu önlem bunu fark etme yolunuzdur.

Bu konu, diğer her konuyu yöneten kuralı koyar. Kitaptaki her metrik ailesi, manipülasyon vektörü (tipik olarak nasıl manipüle edildiği) ve koruyucu önlemiyle birlikte gelir. Sonraki bir konu bunu atlıyor gibi görünüyorsa, o konuyu bitmemiş sayın.

### İnsanlar sayıları neden manipüle eder

Manipülasyon genellikle sahtekârlık değildir. Yetkin insanların önlerindeki teşviklere verdiği olağan yanıttır. Dört güç iş başındadır.

- **Baskı.** Birinin ikramiyesi, değerlendirmesi, sözleşme yenilemesi ya da itibarı sayıya bağlıdır. Resmi bir bağ olmasa bile, insanlar liderliğin neye önem verdiğini, liderliğin neyi grafiğe döktüğünden çıkarır.
- **Vekilleştirme (surrogation).** [Vekilleştirme](https://en.wikipedia.org/wiki/Surrogation), ölçüyü temsil ettiği şeyin kendisiymiş gibi ele alma eğilimidir. Bunu kurumlarda inceleyen araştırmacılar, bir ölçüye bağlı teşvik ödemesinin bunu daha olası kıldığını bulmuştur. “Kapatılan bildirimler”i izleyen bir ekip, amacın çözülmüş sorunlar değil kapatılmış bildirimler olduğuna inanmaya başlar.
- **Korku.** Kötü bir sayı suçlamaya yol açtığında insanlar kötü haberi saklar. Olayların önceliği düşürülür, kesintiler “planlı bakım” olarak yeniden etiketlenir ve kusurlar özellik talebi olarak kaydedilir.
- **Yerel eniyileme.** Bir ekip, kendisinin değerlendirildiği sistem kısmını iyileştirir ve maliyeti değerlendirilmediği bir kısma iter. Hizmet masası hızlı kapatır ve ikinci hat tekrarları devralır.

Bu güçleri anlamak önemlidir, çünkü çare daha sıkı denetim değildir. Manipülasyonu rasyonel kılan koşulları değiştirmektir.

## Temel ilkeler

- **Yargılamak için değil, öğrenmek için ölçün.** Sayıları önce işi yapan ekibe gösterin ve onlarla soru sormak için kullanın.
- **Her metriği bir koruyucu önlemle eşleştirin.** Hız ile kalite, hacim ile sonuç, maliyet ile deneyim.
- **Ekipleri ve sistemleri tarif edin, insanları asla sıralamayın.** Bireysel lig tabloları, bir veri kaynağını bozmanın en hızlı yoludur.
- **Hedefler yerine sonuçları ve eğilimleri tercih edin.** Bir yön ve bir konuşma, bir eşikten iyidir.
- **Tanımı, saatler dahil, yazın.** Belirsiz tanımlar manipülasyonun saklandığı yerdir.
- **Değişim bekleyin.** Bir metrik kararları bilgilendirmeyi bıraktığında emekliye ayırın ya da yeniden tasarlayın.
- **Kötü haberi güvenli kılın.** Dürüst raporlama cezalandırılırsa, veri yalan söyler.

## Metrik tanımları

Aşağıdaki metrikler hizmet ya da teslimat ölçüleri değildir. Bir metrik uygulamasının kendi sağlığının ölçüleridir ve bu kitaptaki her metrik tablosunun aldığı biçimi gösterir. İlk üçü, sonraki konular boyunca görünen koruyucu önlem örnekleridir.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Koruyucu önlem kapsamı | Raporlanan metrikler içinde adı konmuş, izlenen bir koruyucu önlemi olanların payı | koruyucu önlemi olan metrikler / raporlanan metrikler | yüzde | Metrik kaydı (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”) | Ölçüm ve raporlama; sürekli iyileştirme | Çalışma anlaşmalarının retrospektifi | Üç aylık |
| Yeniden açılma oranı | Belirtilen bir pencere içinde yeniden açılan kapatılmış bildirimlerin ya da iş öğelerinin payı | 14 gün içinde yeniden açılan öğeler / dönemde kapatılan öğeler | yüzde | ITSM aracı ya da iş takip sistemi durum geçmişi | Olay yönetimi; sorun yönetimi | Bitti tanımı; kaçan kusurlar | Aylık |
| Tanım değişikliği sayısı | Bir dönemde, gerekçeleriyle birlikte, metrik tanımlarında ya da durum iş akışlarında yapılan değişikliklerin sayısı | tanım değişikliği günlüğündeki girdi sayısı | sayı | Metrik kaydı değişiklik günlüğü | Ölçüm ve raporlama | Çalışma anlaşmaları | Üç aylık |
| Metrik kullanım oranı | Raporlanan metrikler içinde dönem boyunca bir kararda anılanların payı | kayıtlı bir kararda anılan metrikler / raporlanan metrikler | yüzde | Karar günlüğü ya da gözden geçirme notları | Sürekli iyileştirme | Retrospektif eylemleri | Üç aylık |
| Algı farkı | Aynı hizmet için bir memnuniyet anketi sonucu ile bildirimlerden türetilen hizmet düzeyi arasındaki fark | anketten türetilen oran eksi izleyiciden türetilen oran | yüzde puan | Anket aracı ve ITSM aracı | Hizmet düzeyi yönetimi | Paydaş gözden geçirmesi geri bildirimi | Üç aylık |

Yeniden açılma oranı yalnızca aynı kayıtta yeniden açılan öğeleri sayar. Kapatılıp yeni bir bildirim olarak yeniden açılan bir öğe görünmez. Sonraki bölümün amacının bir kısmı, koruyucu önlemin kendi koruyucu önlemine ihtiyaç duymasıdır; örneğin yinelenen bildirimleri özgün bildirimlerine bağlamak gibi.

## Öneriler

### Ölçüm sistemini tasarlayın

**1. Bir sayıdan değil, bir sorudan başlayın.** Bir metrik eklemeden önce, yanıtladığı soruyu ve bilgilendirdiği kararı yazın. “Kullanıcılar sorunlarını ilk seferde çözdürüyor mu?” bir sorudur. “Ortalama işleme süresini azalt” soru gibi davranan bir hedeftir. Bir kararı olmayan metrik, emekliye ayırma adayıdır.

**2. Gerilim içindeki metrikleri seçin.** Tek bir sayı aşırı eniyilemeye davet eder; bu yüzden birbirine karşı çeken çiftler seçin: teslim süresi ile değişiklik başarısızlık oranı, bildirim kapatma hızı ile yeniden açılma oranı, kullanılabilirlik ile kullanıcıların bildirdiği deneyim. Çiftin bir formül olması gerekmez. Birlikte, aynı sayfada gösterilmesi gerekir.

**3. Saatleri ve hariç tutmaları tanımlayın.** Her zaman ölçüsü için saatin nerede başladığını, nerede durduğunu ve ne zaman duraklayabileceğini yazın. Hizmet verisindeki manipülasyonun çoğu bu sınırlarda yaşar: “müşteri bekleniyor” durumuna alınan bir bildirim hizmet düzeyi saatini durdurur ve yalnızca uygulandıktan sonra kaydedilen bir değişiklik değişiklik teslim süresinden kaçar. Bir duraklatma durumu varsa, ne sıklıkta kullanıldığını raporlayın.

**4. Dağılımları ve yüzdelikleri kullanın.** Bildirim çözüm sürelerinin ortalaması, birkaç kolay bildirim hızla kapatıldığı ve zor olanlar yaşlandığı için iyileşebilir. Medyanı ve yüksek bir yüzdeliği (örneğin 85. ya da 95.) gösterin ve en eski açık öğeleri gösterin. İş öğesi yaşı ve en eski açık bildirim, işi gerçekten bitirmeden manipüle etmesi zor olan ölçülerdir (bkz. Konu 2.1 “Akış ölçümleri”).

**5. Bir metrik kaydı tutun.** Kısa bir kayıt her metriği, sahibini, tanımını, veri kaynağını, manipülasyon vektörünü, koruyucu önlemini ve en son gözden geçirildiği tarihi listeler. Sıkıcıdır ve bu konudaki en etkili tek alışkanlıktır (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

### Metrikleri güvenle devreye alın

**6. Önce ekibe gösterin ve ham veriyi gösterin.** Sayıları liderlikten önce gören ekipler, doğruluklarını sorgulamaya daha istekli olur. Grafikle değil, altta yatan öğelerle başlayın. Veri, onu üreten insanlarla yapılan bir konuşmaya dayanamıyorsa, bir panoya da dayanamaz.

**7. Öğrenme görünümlerini hesap verebilirlik görünümlerinden ayırın.** Bir ekibin çalışma görünümü, çirkin olanlar dahil birçok ölçü içerebilir. Liderliğe giden küçük ve istikrarlı bir küme olmalıdır. Liderlik çalışma görünümünü isterse, çalışma görünümünün daha iyi görünmek için değişmesini bekleyin.

**8. Bireysel ücreti, disiplini ya da sıralamayı bir metriğe bağlamayın.** Ekiplerden sayılarını açıklamaları ve iyileştirmeleri istenebilir. Bildirim sayıları, hikâye puanları ya da commit'ler üzerindeki bireysel hedefler insanlara sayıyı en üst düzeye çıkarmayı öğretir. [Temel performans göstergesi](https://en.wikipedia.org/wiki/Key_performance_indicator) yaklaşımı, göstergeler tüm sistem için seçildiğinde ve düzenli olarak gözden geçirildiğinde işe yarayabilir. Kişi başına bir puan kartına dönüştüğünde başarısız olur.

**9. Dürüst raporlamayı güvenli kılın.** [Psikolojik güvenlik](https://en.wikipedia.org/wiki/Psychological_safety), bir hata ya da bir kaygıyla konuştuğunuzda cezalandırılmayacağınıza dair inançtır. Bir olayın suçlamasız gözden geçirilmesi, bunun uygulamadaki bir örneğidir. Bu olmadan olay sayıları yanlış nedenle düşer: insanlar raporlamayı bırakır.

### Sistemi dürüst tutun

**10. Bir manipülasyon gözden geçirmesi yapın.** Üç ayda bir, ekibe her raporlanan metrik hakkında tek bir soru sorun: “Bu sayının kimseye yardım etmeden iyi görünmesini isteseydik ne yapardık?” Yanıtları yazın, sonra koruyucu önlemin her birini yakalayıp yakalamayacağını kontrol edin. Egzersiz ucuzdur, yararlı fikirler üretir ve konuşmayı kuşkudan tasarıma taşır.

**11. Tanımları gerçeklikle denetleyin.** Az sayıda kapatılmış öğeden örnek alın ve okuyun. Gerçekten çözülmüşler miydi? Öncelik dürüst müydü? “Müşteri bekleniyor” durumu gerçekten müşterinin beklendiği anlamına mı geliyordu? On beş dakikalık bir örnek, çoğu zaman bir aylık panolardan daha fazlasını söyler.

**12. Metrikleri emekliye ayırın.** İki çeyrektir bir kararda anılmayan bir metrik yüktür. Kaldırın ve bunu söyleyin. Her biri güvenilen daha az metrik, çok sayıdakinden iyidir.

## Manipülasyon yolları ve koruma önlemleri

Tablo, yukarıdaki bölümdeki metrikleri kapsar. Sonraki konular aynı biçimi hizmet ve teslimat ölçülerine uygular.

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Koruyucu önlem kapsamı | Kâğıt üzerinde bir koruyucu önlem adlandırıp onu hiç izlememek | Kaydı gözden geçirin: bir koruyucu önlem yalnızca en son değeri aynı panoda görünüyorsa sayılır |
| Yeniden açılma oranı | Bildirimi kapatıp yeniden açmak yerine yeni bir bildirim açmak; yeniden açılmalar pencerenin dışına düşene dek pencereyi uzatmak | Yinelenen ve bağlantılı bildirim oranı; aynı nedenin bildirimler arasında tekrarı |
| Tanım değişikliği sayısı | Sayı düşük kalsın diye değişiklikleri günlüğe almamak; kimseye söylemeden bir iş akışını değiştirmek | Her gözden geçirmede araçtaki durum modelini kayıtla karşılaştırın |
| Metrik kullanım oranı | Bir formalite olarak her metriği bir karar günlüğünde anmak | Alıntı sayesinde neyin değiştiğini sorun; günlükten örnek alın |
| Algı farkı | Yalnızca memnun kullanıcılara anket yapmak; anketleri iyi bir etkileşimden sonraki zamanlara yönlendirmek | Anket yanıt oranı ve yanıtlayan karışımı; açık yorumların bir gözden geçirmede sesli okunması |

Sağlıklı bir okuma, değişen bir metrik uygulamasıdır: tanımlar yazılı gerekçelerle ayarlanır, metrikler gelir ve gider, ekip bir sayının değiştirdiği bir kararın hikâyesini anlatabilir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Hedefsiz ölçüm | Manipülasyonu azaltır; dürüst tartışmayı teşvik eder | Kimsenin harekete geçmediği raporlamaya kayabilir |
| Koruyucu önlemli hedefler | Yön ve aciliyet verir; çift manipülasyonu sınırlar | Sürdürmesi daha fazla iş; koruyucu önlem de zamanla manipüle edilir |
| Bireysel metrikler | Anlaması kolay; adil görünür | Veriyi bozar; iş birliğine zarar verir |
| Ekip ve hizmet metrikleri | İşin gerçekte yürüdüğü biçimle uyumludur | Atfetmesi daha zor; bireysel destek ihtiyaçlarını gizler |
| Az metrik | Güvenmesi ve hatırlaması daha kolay | Kör noktalar; yeni bir sorunu kaçırabilir |
| Çok metrik | Geniş kapsam | Dikkati seyreltir; her metrik zayıf yönetilir |

Düz yanıt, hedefleri idareli kullanmaktır: iyi anlaşılmış ve manipüle edilmesi zor durumlar için, örneğin kullanıcıların talep ettiği bir hizmet düzeyi hedefi gibi. O zaman bile hedefi bir kişinin değerlendirmesine değil hizmete bağlamayı tercih edin. Amaç, sayıları karar vermeden çıkarmak değildir. Sayıları üreten insanları yanınızda tutarak sayıları gerçeğe bağlı tutmaktır.

## Takımınızla tartışılacak sorular

**1. Mevcut panomuzdaki hangi sayıyı, işi iyileştirmeden iyileştirmeye en çok heveslenirdik?**
İnsanların ilk baktığı metrikle başlayın, ardından liderliğin sorduğu metriğe geçin. Belirli hamleleri sorun: baskı altında olsaydık veriye ne yapardık? Kolaylaştırıcı, her yanıtı yargılamadan kaydetmelidir, çünkü liste kayıt için manipülasyon vektörlerine dönüşür. Koruyucu önlemlerimizin hangi hamleleri yakalayacağını ve hangilerini kaçıracağını sorarak bitirin.

**2. En önemli zaman ölçümüzde bir saat nerede başlayıp durur ve buna kim karar verdi?**
Gruptan bildirim ya da iş öğesi yaşam döngüsünü bir beyaz tahtaya çizmesini ve her durumu işaretlemesini isteyin. Zamanın kaybolabileceği durumları arayın; örneğin müşteri bekleniyor ya da beklemede. Her durumun ne sıklıkta ve kimler tarafından kullanıldığını sayın. Konuşma çoğu zaman iki ekibin aynı sözcüğü farklı kullandığını ortaya çıkarır.

**3. Bir sayı bizi en son ne zaman yararsız bir şey yapmaya itti?**
Suçlama değil, hikâyeler isteyin. Yaygın örnekler: doğrulamadan bildirimleri kapatmak, dağıtım sayılarını yükseltmek için değişiklikleri bölmek ya da bir ihlal raporundan kaçınmak için bir olayı yeniden sınıflandırmak. Kolaylaştırıcı kişinin neyi korumaya çalıştığını sormalıdır. Yanıt genellikle değişmesi gereken teşviki gösterir.

**4. Metriklerimizi kim görüyor ve orada onlara ne oluyor?**
Her metriği ekipten hedef kitlesine kadar izleyin. Herhangi bir sürümünün ekipleri ya da kişileri karşılaştırmak için kullanılıp kullanılmadığını sorun. Hedef kitle farklı olsaydı ekibin ne göstereceğini sorun. Ekibin gösterdiği sayıları değiştireceği yerde, hedef kitleyle konuşulması gereken bir güven açığı vardır.

**5. En önemli beş metriğimizin her birinin koruyucu önlemi nedir ve aynı sayfada mı?**
Bir tahtada iki sütunlu bir liste yapın. Bir metriğin koruyucu önlemi yoksa, bir aday ve bir çeyrek boyunca denemek için bir sahip üzerinde uzlaşın. Bir koruyucu önlem varsa ama nadiren görüntüleniyorsa, nedenini tartışın. Yalnızca metriğin tersi olan bir koruyucu önlem seçmekten kaçının, çünkü bu yeni bir şey söylemez.

**6. Bu çeyrek hangi metriği emekliye ayırmalıyız?**
Kanıt isteyin: bir kararda en son ne zaman kullanıldı? Kimse hatırlamıyorsa, bir deneme süresi boyunca emekliye ayırın ve kimsenin fark edip etmediğine bakın. Kolaylaştırıcı emekliye ayırmayı olağan bir olay olarak ele almalıdır. Metrikleri hiç bırakmayan ekipler, kimsenin güvenmediği ya da okumadığı raporlarla sonuçlanır.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri manipülasyonla hız (velocity), verim ve dağıtım sayıları üzerinden karşılaşır. Özellikle [hız (velocity)](https://en.wikipedia.org/wiki/Velocity_(software_development)) bir ekip için bir planlama aracıdır, üretkenlik ölçüsü değildir ve ekipleri onunla karşılaştırmak şişirilmiş tahminlere yol açar. Teslimat ekipleri çalışma ölçülerini kendilerine saklamalı, dışarıya küçük bir küme yayımlamalı ve her hız ölçüsünü bir kalite ölçüsüyle eşleştirmelidir (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”).

### Hizmet ve operasyon takımları

Hizmet ekipleri manipülasyonla çözüm süresi, ilk temasta çözüm ve hizmet düzeyi uyumu üzerinden karşılaşır. Saati durduran durumlar ve öncelik alanları, kaymanın olağan noktalarıdır. Operasyon ekipleri durum geçişlerini düzenli denetlemeli, duraklatma durumlarının kullanımını raporlamalı ve hızın yanında tekrarlanan temaslara ve yeniden açılma oranına bakmalıdır. Nöbetteki ekipler, çağrılmamayı ödüllendiren ölçülerde özellikle dikkatli olmalıdır, çünkü bunlar dürüst uyarıyı cezalandırır (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).

### Liderlik ve yönetişim

Liderler teşvikleri çoğu zaman istemeden belirler. Bir gözden geçirmede sorulan bir soru (“bu neden kırmızı?”) ekibe neyi saklaması gerektiğini öğretir. Liderler, ekibin bir sayıdan ne öğrendiğini sormalı, lig tablolarını odanın dışında tutmalı, açık sözlü raporlamayı korumalı ve kötü bir sayının ortaya çıkardığı iyileştirme işini finanse etmelidir. Yönetişim organları, raporlamanın bir parçası olarak metrik kaydını ve manipülasyon gözden geçirmesini beklemeli ve bir metrikteki tanımlı bir değişikliği olağan saymalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar manipülasyonun etkisini, kâğıt üzerinde iyi görünen ama pratikte kötü hissettiren bir hizmet olarak deneyimler: düzeltilmemiş halde kapatılmış bir bildirim, planlı diye etiketlenmiş bir kesinti, kendilerine hiç ulaşmayan bir anket. Kullanıcılar aynı zamanda en iyi koruyucu önlemdir. Anketler, şikâyetler ve yorumlar biçimindeki geri bildirimleri operasyonel sayıların yanında yer almalı ve bir puana indirgenmeden tam olarak okunmalıdır (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı bir hizmet masası ve klinik uygulamalar geliştiren birkaç ürün ekibi işletir. Bu örnekteki sayılar örnekleyicidir.

Liderlik, olayların yüzde 90'ını üzerinde anlaşılan süre içinde kapatma hedefi koyar. İki ay içinde pano yüzde 94 gösterir. Hizmet operasyonları başkanı memnundur ama huzursuzdur, çünkü klinik personel daha az değil daha çok şikâyet etmektedir. Ekipten metrik üzerinde bir manipülasyon gözden geçirmesi yapmasını ister.

Ekip bildirim yaşam döngüsünü çizer. Bildirimlerin ortalama olarak her biri iki kez “müşteri bekleniyor” durumuna geçtiğini ve bu durumda geçen sürenin arttığını bulur. Kapatılmış 30 bildirimlik bir örnek, 7'sinin bir arama denemesinden sonra “kullanıcıdan yanıt yok” notuyla kapatıldığını gösterir. Ayrıca yeniden açılma oranının yalnızca sorun geri döndüğünde kullanıcılara “yeni bir bildirim açın” denildiği için sabit kaldığını da bulurlar.

Ekip üç değişiklik yapar. Birincisi, çözüm süresi grafiği artık medyanı, 90. yüzdeliği ve en eski açık bildirimi, duraklatma durumlarında geçen sürenin payıyla birlikte gösterir. İkincisi, pano, aynı kullanıcıdan 14 gün içinde aynı hizmet hakkında gelen yeni bildirimlerin payı olarak tanımlanan bir tekrar temas oranı ekler. Üçüncüsü, kapatılmış bildirimlerden rastgele bir örnekleme kısa bir anket gider ve açık yorumları aylık gözden geçirmede okunur.

Üç ay sonra başlık uyum sayısı yüzde 88'e düşer; bu kötü haber gibi hissettirir. Ancak tekrar temas oranı düşmüştür ve çözülmemiş sorunlar hakkındaki anket yorumları seyrekleşmiştir. Operasyon başkanı liderliğe eski sayının şişirilmiş olduğunu ve yeni resmin daha dürüst olduğunu söyler ve düzeltilmiş tanıma dayalı bir hizmet düzeyi hedefini kabul etmelerini ister. Karar günlüğüne kaydedilen karar, hedefi hemen değil, bir çeyrek daha veri sonrasında belirlemektir.

## Sektör mercekleri

**Girişim (startup).** Küçük ekiplerin az metriği ve güçlü güveni vardır; bu yardımcı olur. Tehlike, büyük bir kurumsal panoyu çok erken içeri almaktır. Kurucuların gerçekten kullandığı iki ya da üç ölçüyle başlayın, tanımlarını yazın ve onları bireysel performans konuşmalarından uzak tutun.

**Küçük işletme.** Kaynaklar kıttır ve BT'yi yöneten kişi çoğu zaman doğrudan sahibine rapor verir. Tek bir müşteri şikâyeti herhangi bir panodan daha ağır basabilir. Kümeyi küçük tutun, kullanıcılardan doğrudan geri bildirimi tercih edin ve tedarikçi tarafından sağlanan raporlara biraz dikkatle yaklaşın, çünkü tedarikçinin kendi teşvikleri vardır.

**Kurumsal.** Ölçek, karşılaştırılabilir sayılara olan talebi ve onları manipüle etme baskısını çoğaltır. Yazılı tanımları olan küçük bir standart küme kullanın, ekip çalışma görünümlerini toplulaştırılmış görünümlerden ayrı tutun ve farklı türde hizmetler üzerinde çalışan ekipleri karşılaştırmaktan kaçının. Bir metrik kaydı ve bir gözden geçirme ritmi vazgeçilmez hale gelir.

**Kamu sektörü ve hükümet.** Raporlama yükümlülükleri ve sözleşmeye bağlı hizmet düzeyleri bazı hedefleri pazarlık dışı kılabilir. Bunları tasarım girdisi olarak ele alın: karşılayın, yanlarında koruyucu önlemi gösterin ve kullanılan tanımları raporlayın. Kamusal hesap verebilirlik kötü haberi saklamanın bedelini artırır; bu nedenle güvenli iç kanallar kurun ve düzeltilmiş tanımlar konusunda açık olun (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bu konuyu uygulamanın maliyeti çoğunlukla zamandır: tanımları ve bir kaydı yazmak için birkaç saat, kısa bir üç aylık manipülasyon gözden geçirmesi ve kapatılmış öğelerden ara sıra örnek alma. Araç maliyeti azdır. Daha büyük maliyet liderliğin dikkatidir, çünkü disiplin yalnızca sayıları okuyan insanlar tutarlı davranırsa işe yarar.

Getiri, önlenen israftan ve daha iyi kararlardan gelir. Bozulmuş veriye dayanan kararlar yatırımı yanlış soruna yönlendirebilir; örneğin gerçek sorun bir kusurdan kaynaklanan tekrarlanan temaslarken, bildirimleri daha hızlı kapatmak için bir hizmet masasına personel almak gibi. Manipülasyon ayrıca ekip ile ona güvenen insanlar arasındaki güveni aşındırır ve bunu onarmak zordur. Faydayı uydurma bir yüzdeyle değil, örüntüyle anlatın: kararların daha az geri alınması, denetimlerde daha az sürpriz ve operasyonel sayılarla kullanıcı deneyimi arasında daha iyi uyum. Bir iş gerekçesi için rakamlara ihtiyacınız varsa, değişiklikten önce ve sonra algı farkı ve tekrar temas oranı gibi kendi temel değerlerinizi ölçün.

## Anti-desenler ve tuzaklar

- **Koruyucu önlemsiz hedefler.** Yalnız bir hedef, mevcut her yoldan tutturulur. Hedef duyurulmadan önce eşleştirilmiş bir ölçü ekleyin.
- **İnsanların ya da ekiplerin lig tabloları.** Manipülasyona davet eder ve ekipler arası yardımlaşmayı caydırır. Her ekibe kendi eğilimini bağlamla gösterin.
- **Ceza olarak metrikler.** Suçlama getiren kırmızı bir sayı, gizlemeyle yeşile döner. Bunun yerine ekibin neye ihtiyaç duyduğunu sorun.
- **Çarpık verinin ortalamaları.** Kullanıcıların acı çektiği kuyruğu gizler. Yüzdelikleri ve en eski öğenin yaşını kullanın.
- **Tanımları sessizce değiştirmek.** Eğilim çizgileri anlamsızlaşır. Her değişikliği nedeniyle birlikte kaydedin ve grafik üzerinde işaretleyin.
- **Koruyucu önlemi yeni hedef saymak.** O zaman koruyucu önlem manipüle edilir. İkisini birlikte gözden geçirin ve koruyucu önlemleri etkilerini yitirdiklerinde değiştirin.
- **Gösteriş metrikleri.** Yalnızca artan sayımlar, örneğin işlenen bildirimler ya da yapılan commit'ler, sonuçlar hakkında hiçbir şey söylemez. Yükselebildiği kadar düşebilen ölçüleri tercih edin.
- **Nitel kanıtı görmezden gelmek.** Sayılar tek başına kapatılmış bir bildirimin çözülmemiş hissettirdiğini gösteremez. Yorumları okuyun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve saatler | Gayriresmi; herkes farklı sayar | Bazı metrikler için yazılı | Saatler ve hariç tutmalarla birlikte metrik başına bir yazılı tanım | Tanımlar gözden geçirilir ve değişiklikler gerekçeleriyle günlüğe alınır | Tanımlar ekipler ve tedarikçiler arasında uyumlu; kararları bilgilendirmeyi bıraktıklarında gözden geçirilir |
| Koruyucu önlemler | Yok | Bazı metrikler için adı konmuş | Her raporlanan metriğin aynı sayfada bir koruyucu önlemi var | Koruyucu önlemler her çeyrek manipülasyon açısından gözden geçirilir | Koruyucu önlemler dönüşümlüdür ve ölçülen insanlarla birlikte tasarlanır |
| Kullanım ve güvenlik | Sayılar suçlama için kullanılır | Ekip kendi sayılarını görür | Ekip veriyi önce görür; bireysel sıralama yok | Liderlik öğrenme soruları sorar; raporlama güvenlidir | Müşteriler ve tedarikçiler sayılara dair açık sözlü bir görünümü paylaşır |

## Kontrol listesi

- [ ] Her raporlanan metriğin yazılı bir sorusu ve bilgilendirdiği bir kararı vardır.
- [ ] Her zaman ölçüsünün yazılı bir başlama, durma ve duraklatma kuralı vardır.
- [ ] Her raporlanan metriğin yanında gösterilen, adı konmuş bir koruyucu önlemi vardır.
- [ ] Zaman ölçüleri yüzdelikleri ve en eski açık öğenin yaşını gösterir.
- [ ] Sahip, tanım, manipülasyon vektörü, koruyucu önlem ve gözden geçirme tarihini içeren bir metrik kaydı vardır.
- [ ] Ekip verisini liderlikten önce görür.
- [ ] Hiçbir bireysel sıralama, ücret ya da disiplin bir metriğe bağlanmaz.
- [ ] Takvimde üç aylık bir manipülasyon gözden geçirmesi vardır.
- [ ] Her çeyrek, kapatılmış öğelerden bir örnek dürüstlük açısından okunur.
- [ ] Geçen yıl içinde en az bir metrik emekliye ayrılmış ya da yeniden tasarlanmıştır.

## Yapay zekâ istemleri

**Bir metrik üzerinde manipülasyon gözden geçirmesi yapın.**

```text
[ekip adı] ekibini yönetiyorum; [hizmet ya da teslimat işi türü] işletiyoruz.
Şu metriği raporluyoruz: [metrik adı], tanımı [saatin nerede başlayıp
durduğunu içeren tanım]. [Hedef kitle] tarafından [karar ya da hedef] için
kullanılıyor. Verimiz [araç] aracından geliyor.

Bu metriğin, kullanıcılar için hizmeti iyileştirmeden daha iyi görünmesini
sağlayabilecek gerçekçi yolları listele. Her biri için, onu ortaya çıkaracak
bir koruyucu metrik ya da uygulama öner ve koruyucu önlemin kendi manipülasyon
vektörünün ne olacağını söyle. Kıyaslama değerleri uydurma. Varsayımlarını ve
verdiklerimden belirleyemediğin her şeyi listele.
```

**Bir metrik kaydı girdisi taslağı hazırlayın.**

```text
[ekip adı] için [metrik adı] metriğine dair bir metrik kaydı girdisi taslağı
hazırla. Alanlar: yanıtladığı soru, bilgilendirdiği karar, tanım, formül,
birim, veri kaynağı, sahip rolü, gözden geçirme ritmi, manipülasyon vektörü,
koruyucu önlem ve yanlış olması halinde kullanıcıların ya da müşterilerin bunu
nasıl fark edeceği. Girdiyi yalnızca şu açıklamaya dayandır: [metriği ve
mevcut süreci açıkla]. Varsaymak zorunda kaldığın her alanı işaretle ve girdiyi
tamamlamak için yanıtlamam gereken soruları listele.
```

**Kapatılmış bildirimlerden bir örneği denetleyin.**

```text
[hizmet] hizmetinden [sayı] kapatılmış bildirim, [alanları listele] alanlarıyla
ve çözüm notları aşağıya yapıştırılmış olarak burada. Her birini, bildirimin
sorun çözülmeden kapatıldığına, saati durdurmak için bir duraklatma durumu
kullanıldığına ya da önceliğin veya kategorinin ayarlanmış göründüğüne dair
işaretler açısından incele. Bireyleri değil, örüntüleri raporla. Metinle
desteklenmeyen nedenler hakkında tahmin yürütme. Veriden neyi
değerlendiremediğini ve hangi ek alanların yardımcı olacağını söyle.

[kişisel veriler çıkarılmış bildirimleri yapıştır]
```

**Bir metriği güvenle devreye almayı planlayın.**

```text
[Hedef kitle] için [metrik] metriğini devreye almayı planlıyoruz. Mevcut
bağlam: [ekip büyüklüğü, kültür, metriklerle önceki deneyim]. Verinin önce
kimin göreceğini, amacı nasıl açıklayacağımızı, onu ne için
kullanmayacağımızı, yanında hangi koruyucu önlemi göstereceğimizi ve işe
yarayıp yaramadığını ne zaman gözden geçireceğimizi kapsayan bir devreye alma
planı öner. Manipülasyon ya da korku risklerini işaretle ve bunları nasıl
azaltacağımızı öner. Varsayımlarını listele ve istatistik uydurma.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): devreye almak üzere olduğunuz bir metrik için konuyu ve eşleştirilmiş koruyucu önlemi bulmak için kullanın.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): yeni bir metrik konusunun manipülasyon vektörünü ve koruyucu önlemi taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Hedef haline gelen bir ölçü işi tarif etmeyi bırakır; bu yüzden sayıları soru sormak için kullanın.
- Manipülasyon baskıya ve korkuya verilen olağan bir yanıttır ve denetimle değil, koşulları değiştirerek azaltılır.
- Her metrik, saatleriyle yazılı bir tanıma ve yanında gösterilen bir koruyucu önleme ihtiyaç duyar.
- Ortalamalar yerine yüzdelikleri ve en eski öğenin yaşını tercih edin.
- Ekipleri ve hizmetleri tarif edin, bireyleri asla sıralamayın ve ekibin verisini önce kendisinin görmesine izin verin.
- Her çeyrek manipülasyon açısından gözden geçirin ve artık kararları bilgilendirmeyen metrikleri emekliye ayırın.

## Kaynaklar ve ileri okuma

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
5. Choi, J., Hecht, G. W., and Tayler, W. B., "Lost in translation: The effects of incentive compensation on strategy surrogation," *The Accounting Review*, 87(4), 2012.
6. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Cobra effect](https://en.wikipedia.org/wiki/Cobra_effect).
11. Wikipedia, [Perverse incentive](https://en.wikipedia.org/wiki/Perverse_incentive).
12. Wikipedia, [Surrogation](https://en.wikipedia.org/wiki/Surrogation).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
16. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
