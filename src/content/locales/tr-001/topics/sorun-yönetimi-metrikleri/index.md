# Sorun yönetimi metrikleri

**Sorun yönetimi metrikleri, bir takımın olaylarının nedenlerini mi ortadan kaldırdığını yoksa yalnızca belirtilerini mi onardığını gösterir. Bu yüzden kaç nedenin bulunduğunu, ne kadar hızlı kalıcı olarak düzeltildiğini ve aynı olayların geri dönüp dönmediğini ölçün.**

## Genel bakış ve motivasyon

Hizmeti hızla geri getiren bir takım yine de bir koşu bandında sıkışıp kalabilir. Aynı arıza birkaç haftada bir geri döner, aynı kişilere çağrı gider ve her onarım hızlı olduğu için olay sayıları sağlıklı görünür. Sorun yönetimi bu koşu bandından inmeyi sağlayan uygulamadır. Olayların bütününe bakar, altta yatan nedeni bulur ve o nedenin ortadan kaldırılmasını ya da kontrol altına alınmasını sağlar. Bu konu, bu işin yapılıp yapılmadığını ve işe yarayıp yaramadığını söyleyen sayıları ele alır.

Konuyu dört terim taşır. **Olay**, [ITIL](https://en.wikipedia.org/wiki/ITIL) çerçevesinin sözcüğü kullanma biçimiyle, bir hizmetin planlanmamış kesintisi ya da kalitesindeki düşüştür (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”). **Sorun**, bir ya da daha fazla olayın altında yatan nedendir ya da şüphelenilen nedendir. **Bilinen hata**, nedeni anlaşılmış ve geçici çözümü kaydedilmiş bir sorundur. Belirtiyle karşılaşan bir sonraki kişi onu bulabilsin diye bir [bilinen hata veri tabanında](https://en.wikipedia.org/wiki/Known_error_database) tutulur. Bir [geçici çözüm](https://en.wikipedia.org/wiki/Workaround), bir olayın ya da sorunun etkisini nedenini ortadan kaldırmadan azaltır ya da önler. Kalıcı çözüm ise nedeni ortadan kaldıran değişikliktir.

Nedeni bulmak [kök neden analizinin](https://en.wikipedia.org/wiki/Root_cause_analysis) işidir. Yaygın teknikler arasında [beş neden](https://en.wikipedia.org/wiki/Five_whys), [Ishikawa diyagramı](https://en.wikipedia.org/wiki/Ishikawa_diagram) ve nedenleri ne sıklıkla ortaya çıktıklarına ya da ne kadar zarar verdiklerine göre sıralayan [Pareto grafiği](https://en.wikipedia.org/wiki/Pareto_chart) vardır. Karmaşık sistemlerde çoğu zaman birkaç katkıda bulunan neden bulunur ve tek bir suçlu yoktur. Bu yüzden iyi bir sorun kaydı, ortadan kalktığında tekrarı durduran etkenleri adlandırır ve takımın ne kadar emin olduğunu söyler.

Metrikler önemlidir, çünkü sorun yönetiminin yerleşik bir raporlama tuzağı vardır. Sorun kaydı açmak kolaydır ve verimli hissettirir. Bir kaydı kapatmak da kolaydır, çünkü kayıt bir notla kapatılabilir. İki olay da kullanıcılar için bir şeyin iyileştiğini göstermez. İzlemeye değer ölçümler daha ileride yer alır: bir soruna bağlı olayların tekrarının durup durmadığı, bilinen hataların nöbetteki kişilerce gerçekten kullanılıp kullanılmadığı ve teşhis edilmiş bir nedenin düzeltmesini ne kadar beklediği.

ITIL ve çevik görüşler burada pek sürtünmeden buluşur. ITIL 4'te sorun yönetimi, hizmet değer sistemi içinde olay yönetimine, değişiklik yetkilendirmeye ve bilgi yönetimine yakın bir uygulamadır. Çevik karşılığı, bir takımın [birikim listesinden](https://en.wikipedia.org/wiki/Backlog) akan küçük ve kanıta dayalı düzeltmeler akışı, bir örüntüyü fark eden retrospektif ve güvenilirlik işine sıradan ürün işi gibi davranma alışkanlığıdır. ITIL görüşü kayıtları, sahipliği ve bilinen hatayı vurgularken çevik görüş küçük partileri ve hızlı geri bildirimi vurgular. İkisi de daha az tekrarlayan olay ister ve herkesin gözü önünde tutulması gereken ölçü bu sonuçtur.

Bu konu olay saatlerini (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”) ya da büyük olay ölçümlerini (bkz. Konu 3.4 “Büyük olay metrikleri”) yinelemez ve inceleme takibini yalnızca sorunları beslediği yerde ele alır (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”). Bilinen hataların birikim listesi ve [teknik borç](https://en.wikipedia.org/wiki/Technical_debt) fikrinin daha geniş hali Konu 4.6 “Teknik borç ve bilinen hatalar” içinde ele alınır. Burada odak, sorun kaydı ve onun ürettiği sonuçlardır. Dağıtıma dayalı geri getirme ve başarısızlık ölçümleri Konu 2.8 “DORA metrikleri” içinde yer alır.

## Temel ilkeler

- **Evrak değil, tekrarı ölçün.** Sorun yönetiminin sınavı, bağlı olayların geri gelmemesidir. Açılan ve kapatılan kayıtların sayısı etkinliği anlatır, sonuç hakkında çok az şey söyler.
- **Üç anı birbirinden ayırın.** Bir örüntünün var olduğunu fark etmek, nedenini belirlemek ve nedeni ortadan kaldırmak, farklı saatleri ve farklı sahipleri olan ayrı olaylardır. Bunları birleştirmek gecikmenin nerede olduğunu gizler.
- **Geçici çözüm bir aşamadır, son değil.** Kaydedin, kullanın ve tek koruma olarak ne kadar süre kaldığını izleyin. Yıllarca yaşayan bir geçici çözüm, kimsenin adını koyamadığı bir sahibi olan borçtur.
- **Düzeltmeyi işin olduğu yere koyun.** Kalıcı bir çözüm genellikle bir ürün takımının sahip olduğu bir değişiklik ya da birikim listesi kalemi olarak gerçekleşir. Bunu takımın kendi akışında ölçün ve hizmetin sahibi olan takıma gösterin.
- **Olayları sorunlara kaynağında bağlayın.** Buradaki her ölçüm, bir olay ile bir sorun arasındaki bağa dayanır. Bağ zayıfsa sayılar da zayıftır.
- **Ortalamalar yerine dağılımları ve kohortları tercih edin.** Sorun süreleri uzun ve çarpıktır, birkaç eski kayıt her ortalamaya egemen olur (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).
- **Takımları ve hizmetleri tanımlayın, kişileri değil.** Sorunlar sistem özellikleridir. Çözümleyici başına kapatılan sorunların tablosu bir incelemeyi kotaya çevirir.

## Metrik tanımları

Tüm saatler, sorun kaydının, bağlı olay kayıtlarının ve bağlı değişiklik ya da birikim listesi kaleminin zaman damgalarını kullanır. Bir satır aksini söylemedikçe sorunlar hizmete ve sahip takıma göre sayılır, birleştirilmiş ya da yinelenen kayıtlar dışarıda bırakılır. Her süre için ortalamalar yerine yüzdelik dilimler tercih edilir. Bu konudaki örnekte yer alan sayılar açıklayıcıdır.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Açılan ve kapatılan sorunlar | Sorun kayıtlarının hizmete göre açık duruma giriş ve çıkış akışı | Dönemde açılanların sayısı ve dönemde kapatılanların sayısı, her biri kapatma koduna göre (düzeltildi, kabul edilen risk, yinelenen, yeniden üretilemedi); yinelenenler gösterilir ancak “düzeltildi” sayısının dışında tutulur | dönem başına sayı | ITSM sorun kayıtları | Sorun yönetimi | Birikim listesine giriş ve verim | Aylık |
| Sorun birikim listesi yaşı | Açık sorunların ne kadar süredir beklediği | Her açık sorun için, anlık görüntü tarihi eksi kaydın oluşturulma tarihi; açık sorunların ortancasını ve 85. yüzdelik dilimini ve en eskisini önceliğe göre bildirin | gün | ITSM sorun kayıtları | Sorun yönetimi | Panodaki iş kalemi yaşı | Aylık |
| Olay-sorun bağlantı oranı | Bir sorun ya da bilinen hataya işaret etmesi beklenen olaylardan bunu yapanların payı | Dönemde bağlı bir sorunu ya da bilinen hatası olan olaylar / dönemde önceliği yüksek ya da üstü olan, yeniden açılan ya da tekrar eden bir kategoride yer alan olaylar; kullanıcı hatası ya da yinelenen olarak kapatılan olaylar dışarıda bırakılır | yüzde | ITSM olay ve sorun kayıtları | Olay yönetimi; sorun yönetimi | Retrospektifte örüntü fark etme | Aylık |
| Kök nedene kadar geçen süre | Teşhis edilmiş bir sorunun kaydedilmiş bir nedene ulaşmasının ne kadar sürdüğü | Saat, sorun kaydı oluşturulduğunda başlar; neden kaydedildiğinde ve ikinci bir kişi onu gözden geçirdiğinde durur; nedensiz kapatılan sorunlar dışarıda bırakılır ve ayrıca sayılır; ortancayı ve 85. yüzdelik dilimi bildirin | gün | ITSM sorun kayıtları ve denetim izleri | Sorun yönetimi | Araştırma ya da zaman kutulu inceleme süresi | Aylık |
| Bilinen hata yeniden kullanım oranı | Bir olay geldiğinde bilinen hatanın ne sıklıkla kullanıldığı | Bağlı bir bilinen hata ya da geçici çözümüyle çözülen olaylar / dönemde belirtisi o sırada var olan bir bilinen hatayla eşleşen olaylar; eşleşen bilinen hatası olmayan olaylar dışarıda bırakılır | yüzde | ITSM olay bağlantıları; bilgi makalesi kullanımı | Bilgi yönetimi; sorun yönetimi | Takım çalışma kılavuzu ya da oyun kitabı kullanımı | Aylık |
| Kalıcı çözüme kadar geçen süre | Bir sorunun teşhisten çözümün üretimde çalışmasına kadar ne kadar süre açıkta kaldığı | Saat, neden kaydedildiğinde başlar; bağlı düzeltme değişikliği uygulandığında ve doğrulandığında durur; kabul edilen risk olarak kapatılan sorunlar dışarıda bırakılır ve ayrıca sayılır; ortancayı ve 85. yüzdelik dilimi bildirin | gün | Sorun kayıtları; değişiklik kayıtları ya da boru hattı dağıtım olayları | Sorun yönetimi; değişiklik yetkilendirme | Düzeltme kaleminin çevrim süresi | Aylık |
| Çözüm sonrası tekrar oranı | Düzeltilmiş sorunlardan bağlı belirtileri geri dönenlerin payı | Bir kohort çeyreğinde düzeltildi olarak kapatılan ve çözümün canlıya çıkışından sonraki 90 gün içinde eşleşen yeni bir olayı olan sorunlar / o çeyrekte düzeltildi olarak kapatılan sorunlar; 90 günlük pencere bir örnektir ve grafikte belirtilir | yüzde | ITSM olay ve sorun kayıtları; dağıtım olayları | Sorun yönetimi; sürekli iyileştirme | Kaçan hata ya da gerileme oranı | Üç aylık |
| Yalnızca geçici çözümle korunan sorun payı | Yalnızca bir geçici çözümle korunan bilinen sorunların payı | Bilinen hata durumunda olan ve düzeltmesi planlanmamış açık sorunlar / bilinen hata durumundaki açık sorunlar; adlandırılmış bir sahibi ve gözden geçirme tarihi olan kabul edilmiş risk sorunları ayrı bir grup olarak gösterilir | yüzde | ITSM sorun kayıtları | Sorun yönetimi; risk yönetimi | Teknik borç sicili | Aylık |

90 günlük pencere, belirtiler için eşleştirme kuralı ve bağlantı oranındaki “beklenen” tanımı örneklerdir. Takım, hizmetlerine uyan değerleri seçer ve bunları metrik siciline yazar (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”). “Düzeltildi” olarak kapatılan sorunları diğer kapatma kodlarından ayrı saymak, açılan ve kapatılan çiftini dürüst tutar.

## Öneriler

### Neyin sorun sayılacağına karar verin

**1. Kanıta dayanarak bir sorun açın ve kanıtın ne olduğunu söyleyin.** İyi tetikleyiciler, aynı belirtinin tekrarlayan olayları, nedeni bilinmeyen bir büyük olay, incelemede bulunan bir eğilim ya da herhangi bir olaydan önce fark edilen bir risktir. Tetikleyiciyi kayda yazın, örneğin “altı haftada aynı hizmete bağlı beş olay”. Her olağandışı olay bir sorun kaydına dönüşürse birikim listesi gürültüyle dolar ve kimse onu okumaz.

**2. Küçük ve ortak bir kapatma kodu kümesi kullanın.** Düzeltildi, kabul edilen risk, yinelenen, yeniden üretilemedi ve birleştirildi çoğu takım için yeterlidir. Her kodun tek cümlelik bir anlamı ve onu kullanma yetkisi olan bir sahibi vardır. Kapatma kodlarının dağılımı kapatılan sayısından daha bilgilendiricidir, çünkü işin ne kadarının bir nedeni ortadan kaldırdığını, ne kadarının değişiklik olmadan bittiğini gösterir.

### Olayları ve sorunları kaynağında bağlayın

**3. Bağı olay kapatmanın bir adımı yapın.** Çözümleyiciden olayı kapatmadan önce onu bir soruna, bilinen bir hataya ya da “bulunamadı” seçeneğine bağlamasını isteyin. Araç yapabiliyorsa eşleşme önerileri sunun ve kararı bir kişinin vermesine izin verin. Haftalar sonra toplu bir çalışmada kurulan bağ güvenilir değildir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

**4. Belirtilerin nasıl eşleştirileceği konusunda anlaşın.** Tekrar, iki olayın ne zaman “aynı” olduğuna karar vermeye bağlıdır. Tanımları ve örnekleri olan kısa bir neden ve belirti sınıflandırması serbest metinden daha iyidir. Her çeyrekte bir eşleşme örneklemini gözden geçirin, çünkü her iki yöndeki yanlış eşleşmeler tekrar oranını saptırır.

**5. Örüntü incelemesinin sorun listesini beslemesine izin verin.** Olay kategorilerinin hizmete göre ve [Pareto grafiğiyle](https://en.wikipedia.org/wiki/Pareto_chart) aylık incelenmesi, hangi birkaç nedenin acının çoğunu ürettiğini gösterir. İncelemeyi sorun açmak ve bunları önceliklendirmek için kullanın ve büyük olay incelemelerindeki tekrarlayan nedenleri aynı listeye gönderin (bkz. Konu 3.2 “Olay hacmi ve önceliği”).

### Üç gecikmeyi ölçün

**6. Aşamaları ayrı ayrı zamanlayın.** Kayıt oluşturmadan kaydedilmiş nedene ve kaydedilmiş nedenden çözümün üretimde çalışmasına kadar ölçün. Birinci gecikme, araştırma kapasitesine, veriye erişime ve beceriye işaret eder. İkincisi önceliklendirmeye, değişiklik sürecine ve rekabet eden özellik işine işaret eder. Tek bir “sorunu kapatma süresi” bunları karıştırır ve kimseye net bir eylem vermez.

**7. Eskileri raporlayın.** Açık sorun yaşının ortancasını ve 85. yüzdelik dilimini gösterin ve en eskileri hizmete göre listeleyin. Yılları bulmuş birkaç kayıt bir ortalamayı oynatır ve size çok az şey söyler. En eskiler listesi ise bir karara davet eder: düzelt, adlandırılmış bir sahip ve gözden geçirme tarihiyle riski kabul et ya da bir gerekçeyle kapat.

### Çözümü normal akışa koyun

**8. Kalıcı bir çözümü sahibi ve tarihi olan bir birikim listesi kalemi olarak ele alın.** Sorunu, düzeltmeyi taşıyan değişikliğe ya da iş kalemine bağlayın ve düzeltmeyi özellik işiyle aynı panoda gösterin. Yinelenen olayın maliyetini düzeltme çabasına karşı tartmak gibi üzerinde anlaşılmış bir kuralla önceliklendirin. Bir düzeltme değişiklik gerektirdiğinde, düşük riskli düzeltmeler için standart değişiklik yolu hızlı olmalıdır (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

**9. Geçici çözümü ve çıkış tarihini birlikte isteyin.** Geçici çözüm zaman kazandırır. Onu bilinen hata olarak kaydedin, nöbetçi takımın onu bulup çalıştırabildiğini sınayın ve düzeltme için bir gözden geçirme tarihi belirleyin. Yalnızca geçici çözümle korunan sorun payı o zaman sessiz bir borç yığını değil, bir karar listesi olur (bkz. Konu 4.6 “Teknik borç ve bilinen hatalar”).

### Çözümlerin işe yaradığını denetleyin

**10. Her düzeltmeyi bir tekrar penceresiyle izleyin.** Bir çözüm canlıya çıktıktan sonra belirtilen bir pencere boyunca eşleşen olayları izleyin ve işe yarayan düzeltmelerin payını üç aylık kohortlara göre bildirin. Tekrar, bu uygulamanın bir sonuç ölçüsüne en yakın şeyidir. Yüksekse nedenin bulunup bulunmadığını ya da yalnızca katkıda bulunan bir etkenin bulunup bulunmadığını sorun ve analizi yeniden açın.

**11. Bilinen hata yeniden kullanımını yanıt verenlerin çalıştığı yerde ölçün.** Eşleşen bir olay geldiğinde bilinen bir hatanın ya da geçici çözümünün ne sıklıkla kullanıldığını sayın. Çok sayıda bilinen hata ile birlikte düşük yeniden kullanım oranı genellikle girdilerin bulunmasının zor olduğu, güncelliğini yitirdiği ya da yanıt verenin yerine çözümleyici için yazıldığı anlamına gelir. Daha fazlasını eklemeden önce makaleyi ve yerleşimini düzeltin (bkz. Konu 3.6 “Bilgi yönetimi metrikleri”).

### Sayıları dürüst tutun

**12. Her grafiğin yanında kohortları ve uyarıları gösterin.** Tanımları, kapatma kodu dağılımını ve her kural değişikliğini grafiğin üzerine kaydedin. Düzeltilmiş sorunların üç aylık kohortları, eski ve yeni işi karıştırmadan tekrarı gösterir. Hiçbir sayı tek başına durmasın diye her sayıyı bir sonuç ölçüsüyle eşleştirin (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Açılan ve kapatılan sorunlar | Çok sayıda önemsiz kayıt açmak; bir sorunu birkaça bölmek; listeyi temizlemek için kayıtları yinelenen ya da “yeniden üretilemedi” olarak kapatmak | Kapatma kodu dağılımı; çözüm sonrası tekrar oranı; her çeyrekte okunan kapatılmış kayıt örneklemi |
| Sorun birikim listesi yaşı | En eski kayıtları düzeltme yapmadan kapatmak; saati sıfırlamak için yeni kayıt olarak yeniden açmak; bir sorunu talep olarak yeniden sınıflandırmak | Yeni kayıtları özgün kayıtlarına bağlamak ve yaşı ilk kayıttan bildirmek; nedene göre kapatma listesi; kabul edilen risklerin gözden geçirilmesi |
| Olay-sorun bağlantı oranı | Oranı yükseltmek için her olayı belirsiz bir genel sorunla ilişkilendirmek | En büyük beş soruna işaret eden bağların payı; gerçek eşleşme için denetlenen bağ örneklemi; bağlı belirtilerin tekrarı |
| Kök nedene kadar geçen süre | Saati durdurmak için hızlı ve yüzeysel bir neden kaydetmek; “insan hatası” yazmak; ikinci gözden geçireni atlamak | Çözüm sonrası tekrar oranı; “insan hatası”nın tek başına kabul edilmediği neden sınıflandırması; nedenlerden bir örneklemin kanıta karşı gözden geçirilmesi |
| Bilinen hata yeniden kullanım oranı | Olay kapandıktan sonra eklenen bir bağı saymak; bir hizmetin her olayına bilinen bir hata eklemek | Olay kapanışı ile bağ arasındaki süre; girdinin yardımcı olup olmadığına dair yanıt veren geri bildirimi; 90 gündür kullanılmayan girdilerin gözden geçirilmesi |
| Kalıcı çözüme kadar geçen süre | Düzeltme doğrulanmadan değişikliği uygulandı olarak işaretlemek; işten kaçınmak için kabul edilen risk olarak kapatmak | Çözüm sonrası tekrar oranı; sahibi ve gözden geçirme tarihi olan kabul edilen risk listesi; saat durmadan önce doğrulama adımı |
| Çözüm sonrası tekrar oranı | Tekrarların eşleşmemesi için belirtileri dar tanımlamak; çözümlerin daha erken kohortlara düşmesi için kapatma penceresini genişletmek; bağlamayı geciktirmek | Sahip takımın dışından biri tarafından gözden geçirilen neden sınıflandırması; olay bağlantı oranı; önceden belirtilen sabit pencere |
| Yalnızca geçici çözümle korunan sorun payı | Gerçek tarihi olmayan bir yer tutucu düzeltme planlamak; sorunları kabul edilen riske taşımak; sorunun önceliğini düşürmek | Kayan planlı düzeltmelerin yaşı; adlandırılmış bir yönetici sahiple gözden geçirilen kabul edilen risk listesi; soruna göre tekrarlayan olay maliyeti |

Sağlıklı bir okuma sessiz ve biraz sönük görünür. Açılan ve kapatılan sayıları kabaca uyum içindedir, en eski açık sorunların her birinin kaydedilmiş bir kararı vardır, işe yarayan düzeltmelerin payı yüksektir ve kohort çizgileri sabittir, bilinen hatalar da belirtilerle karşılaşan kişilerce kullanılır. Uyarı örüntüsü, aynı arızayla karşılaşmaya devam eden olayların yanında uzun ve derli toplu bir kapatılan sayısıdır. Etkinlik sayıları mükemmel görünürken kullanıcılar hâlâ aynı arızayla karşılaşıyorsa kullanıcılara güvenin.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Tekrarlayan ve büyük olaylar için resmi sorun kayıtları | Net sahip, geçmiş ve düzeltmelere bağ; denetimi destekler | Süreç yükü; kayıtlar eskiyebilir |
| Sorun kaydı olmadan nedenleri takımın kendi birikim listesinde düzeltmek | Hızlı, hafif, işe yakın | Takımlar arası örüntüler görülmez; ortak bilinen hata yoktur |
| Sıkı kapatma kodları ve üç aylık kohortlar | Dürüst sonuç görünümü; derli toplu sayılara direnir | Okuması daha yavaş; veri girişinde disiplin gerektirir |
| Kapatılan sorunları hedef olarak saymak | Açıklaması ve grafiği kolay | Sayı için kapatmaya davet eder; küçük sorunları ödüllendirir |
| Düzeltilmiş sorunlar için tekrar izleme | İşe yarayıp yaramadığına dair mevcut en yakın ölçü | İyi belirti eşleştirmesi ve yeterince uzun bir pencere gerektirir |
| Bilinen hatalar için yeniden kullanım izleme | Bilginin yanıt verenlere yardım edip etmediğini gösterir | Yanıt verenlerin girdiyi bağlamasına bağlıdır; manipüle edilebilir |

Nedenleri kendi birikim listesi içinde hızla düzelten takımlar, yine de nedeni daha geniş kurumun görebileceği yere kaydetmelidir. Böylece aynı belirtiyle karşılaşan başka bir takım bundan yararlanır. Önce olaylar ile sorunlar arasındaki bağa ve tekrar penceresine yatırım yapın. Bu iki parça, diğer her ölçümü yorumlanabilir kılar.

## Takımınızla tartışılacak sorular

**1. Geçen çeyrekte en sık hangi üç olayı onardık ve nedenlerini düzeltmemizi ne engelledi?**
Tekrarlayan olayları hizmet masasından ya da olay aracından listeleyin ve oluşma sayısına göre sıralayın. Her biri için engelin ne olduğunu sorun: araştırma zamanı yok, üzerinde anlaşılmış bir neden yok, özelliklerle yarışan bir düzeltme ya da başka bir takım gerektiren bir düzeltme. Kolaylaştırıcı, üçünde de tekrar eden engelleri aramalıdır, çünkü bunlar teknik bir düzeltmeye değil, bir sistem düzeltmesine işaret eder.

**2. Bir olayı bir soruna bağladığımızda bunu kim yapıyor, ne zaman yapıyor ve doğru sorun olduğunu nasıl biliyoruz?**
Yakın zamanda yaşanmış bir olayı kapanıştan bağa kadar adım adım izleyin. Bağın olay sırasında mı, kapanışta mı yoksa sonraki bir temizlikte mi kurulduğunu not edin. Gerçek eşleşmeler için küçük bir bağ örneklemini birlikte gözden geçirin. Bağı daha kolay ya da daha güvenilir kılan tek bir değişiklik üzerinde anlaşın.

**3. Teşhis edilmiş bir neden düzeltmesini ne kadar bekliyor ve sırayı kim belirliyor?**
Kaydedilmiş nedeni olan sorunları alın ve teşhisten bu yana geçen süreye bakın. Bunları kimin önceliklendirdiğini ve hangi kuralı kullandığını sorun. Tartışma çoğu zaman gecikmenin teknik bir zorluk değil, ürün birikim listesinin önündeki bir kuyruk olduğunu gösterir. Sorun düzeltmelerinin özellik işiyle nasıl karşılaştırılacağı üzerinde anlaşın.

**4. En eski geçici çözümlerimiz hangileri ve onları bir yıl daha tutarsak neyi kaybederiz?**
En uzun ömürlü üç geçici çözümü ve bunların elle yapılan çaba, risk ve hâlâ onları hatırlayan kişilerin bilgisi açısından maliyetini adlandırın. Geçici çözümü bilen kişi yokken ne olacağını sorun. Her biri için düzeltmeye, riski bir sahip ve gözden geçirme tarihiyle kabul etmeye ya da hizmeti emekli etmeye karar verin.

**5. Düzeltilmiş bir sorun geri gelirse bunu fark ediyor muyuz ve ne kadar hızlı?**
Geri dönen bir belirtinin nasıl fark edileceğini ve analizi kimin yeniden açacağını sorun. Tekrar penceresinin söz konusu arıza türü için yeterince uzun olup olmadığını tartışın. Kolaylaştırıcı, grubun bir pencere ve bir eşleştirme kuralı üzerinde anlaşmasına ve sahip takımın kendi işini işaretlememesi için eşleşmeleri hangi takımın gözden geçireceğine karar vermesine yardım etmelidir.

**6. Nöbetteki kişiler bilinen hatalarımızı kullanıyor mu ve onlara başvurmalarını ne sağlar?**
Yanıt verenlere en son ne zaman bilinen bir hata aradıklarını ve ne bulduklarını sorun. Girdilerin nerede durduğuna, nasıl adlandırıldığına ve önce ne yapılacağını söyleyip söylemediğine bakın. Bir girdiyi bir yanıt verenle birlikte yeniden yazmak üzere seçin ve bir sonraki nöbet haftasında sınayın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları kalıcı düzeltmelerin çoğuna sahiptir ve özellik işinin çekimini hisseder. Tekrarlayan bir arızanın olay maliyetini onu düzeltme çabasının yanında görmekten ve birikim listesinde düzeltme kalemleri için net bir yere sahip olmaktan yararlanırlar. Sorun işine bir kesinti gibi davranmaya direnmeli, bunun yerine kapasitenin görünür bir payını ona ayırmalıdırlar. Retrospektif, örüntüleri fark etmek ve sorun açmak için doğal bir yerdir (bkz. Konu 2.1 “Akış ölçümleri”).

### Hizmet ve operasyon takımları

Operasyon takımları tekrarlayan belirtileri ilk görür ve maliyetini çağrılarda ve elle yapılan işte taşır. Sorun ve bilinen hata kayıtlarını tutar, örüntü incelemesini yürütür ve bağların kurulduğunu denetlerler. Karşılaştıkları risk, nedenleri ortadan kaldırmak yerine kayıtlara çaba harcamaktır. Kapatma kodlarını az tutmalı, bilinen hatayı yanıt verenin ilk gördüğü şey yapmalı ve düzeltmeleri kanıtı ekli olarak sahip takıma devretmelidirler.

### Liderlik ve yönetişim

Liderler güvenilirlik işinin özelliklere karşı kazanıp kazanmayacağına karar verir ve nelerin kaydedileceğine dair teşvikleri belirler. Sayıları istemeden önce kohorta göre tekrarı ve en eski açık sorunları istemeli, kabul edilen riski adlandırılmış bir sahibi ve gözden geçirme tarihi gerektiren bir karar olarak ele almalıdırlar. Tekrarsız, düşen bir birikim listesi raporlamak kapatmayı ödüllendirir. Yönetişim takımların lig tablosuna değil, eğilimlere ve kararlara bakmalıdır (bkz. Konu 4.6 “Teknik borç ve bilinen hatalar”).

### Müşteriler ve kullanıcılar

Kullanıcılar sorun yönetimini tek bir şeye göre değerlendirir: aynı şey yanlış gitmeye devam ediyor mu. Sorun kayıtlarını görmezler ve kaç tanesinin kapatıldığı onları ilgilendirmez. Anlaşmalar izin veriyorsa müşterilere bilinen bir sorunu, geçici çözümü ve düzeltmenin beklendiği tarihi bildirin, ardından düzeltme geldiğinde geri bildirimde bulunun. Duyurulan ve teslim edilen bir düzeltme, sessiz yapılan bir düzeltmeden daha fazla güven oluşturur.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı, servislerin ve ayakta tedavi kliniklerinin kullandığı bir klinik randevu uygulamasını destekler. Bir ürün takımı uygulamayı geliştirir ve işletir, bir altyapı takımı platformu yönetir ve bir hizmet masası çağrıları alır. Bu örnekteki tüm sayılar açıklayıcıdır.

Üç aylık bir incelemede departman başkanı, sorun panosunun mükemmel göründüğünü fark eder: açılan 31 soruna karşılık 46 sorun kapatılmıştır ve en eski açık sorun 140 günlüktür. Servis yöneticileri hâlâ vardiya değişiminde randevu ekranının donduğundan şikâyet etmektedir. Hizmet sahibi, henüz panoda bulunmayan olay-sorun bağlantı oranını ve çözüm sonrası tekrar oranını ister.

Veriler farklı bir hikâye anlatır. Kapatma kodu dağılımı, 46 kapatmanın 22'sinin “yeniden üretilemedi” ya da “yinelenen” olduğunu gösterir. Yüksek öncelikli olaylar için bağlantı oranı yüzde 38'dir. Donma olayları dört kategoride kaydedilmiştir, bu yüzden hiçbir örüntü görünmemiştir. 30 olaylık bir örneklem elle yeniden bağlandığında, bunların 17'si tek bir nedene işaret etmiştir: sabah vardiyasına taşan bir gece işinin tuttuğu bir veri tabanı kilidi. Önceki çeyrekte düzeltilen sorunlar için tekrar yüzde 27 çıkmıştır, bu da kimsenin beklediğinden yüksektir.

Takım üç karar alır. Birincisi, neden ve belirti sınıflandırmasına bir “randevu donması” girdisi eklenir ve bir soruna ya da “bulunamadı” seçeneğine bağlamak, olay kapanışında zorunlu bir adım olur. İkincisi, gece işi sorunu altyapı birikim listesinden ürün takımının panosuna bir sahip ve hedef tarihle taşınır ve bir geçici çözüm (işten sonra zamanlanmış bir yeniden başlatma) bilinen hata olarak kaydedilir ve hizmet masasıyla sınanır. Üçüncüsü, pano kapatılan sayısının yerine üç sayı koyar: 90 gün sonra işe yarayan düzeltmelerin payı, kaydedilmiş nedenden düzeltmeye kadar geçen sürenin ortancası ve 85. yüzdelik dilimi ve en eski açık sorunlar ile kararları.

Sekiz hafta sonra kilit, işte yapılan bir değişiklikle kaldırılır. Donma kategorisindeki olaylar ayda yaklaşık dokuzdan ikiye düşer ve geriye kalan belirtiler için bilinen hata yeniden kullanımı yüzde 71'e çıkar, bunun çoğu nedeni hizmet masasının artık yeniden başlatma girdisini bulmasıdır. Takımın yakaladığı manipülasyon riski kendi eski alışkanlığındaydı: bir olay çalışma saatleri dışında kaldığında kayıtları “yeniden üretilemedi” olarak kapatmak. Kapatma kodu dağılımı, her çeyrekte okunan kapatılmış kayıt örneklemi ve tekrar kohortu artık koruyucu ölçüt işlevi görür. Kimse sıralanmaz ve inceleme çözümleyicileri değil, hizmetleri ve kararları listeler.

## Sektör mercekleri

**Girişim.** Nadiren ayrı bir sorun süreci vardır. Takım nedenleri doğrudan düzeltir ve risk, kimsenin nedenini hatırlamamasıdır. Tekrarlayan olayların ve nedenlerinin tek sayfalık bir listesini tutun, düzeltmeleri sorun izleyiciye bağlayın ve listeyi aylık gözden geçirin. Tekrarı ve en eski kalemlerin yaşını ölçün; takım büyüyene kadar resmi kapatma kodlarını atlayın.

**Küçük işletme.** Her şeyi bir BT çalışanı ya da yönetilen bir hizmet sağlayıcı yürütüyor olabilir. Sağlayıcıdan sorun kayıtlarını ve arkasındaki olay kategorilerini ve “çözüldü”nün yazılı tanımını isteyin. Her biri için adlandırılmış bir sahibi ve tarihi olan, en çok tekrarlanan beş sorunun kısa bir listesi ağır bir araçtan daha iyi sonuç verir. Kilitlenmeyi önlemek için kayıtları düzenli aralıklarla dışa aktarın.

**Kurumsal.** Çok sayıda hizmet ve tedarikçi, ortak tanımlara duyulan en büyük ihtiyacı yaratır. Neden sınıflandırması, kapatma kodları ve tekrar penceresi üzerinde takımlar arasında anlaşın, sorun sahiplerini hizmete göre adlandırın ve hizmete ve kohorta göre raporlayın. Bir düzeltme bir tedarikçideyse tedarikçinin yanıtını anlaşmaya karşı izleyin ve belgelenmiş bir yol üzerinden yükseltin (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

**Kamu ve kamu sektörü.** Denetim, değişiklik kontrolü ve satın alma, nedenden düzeltmeye giden yolu uzatabilir. Bu yüzden düzeltme süresi saati gecikmenin nerede olduğunu göstermelidir: araştırma, onay, satın alma ya da planlama. Kabul edilen risklerin denetime dayanan kayıtlı sahipleri ve gözden geçirme tarihleri olmalıdır. Saklama ve gizlilik kuralları, özellikle klinik ya da vatandaş verisi içerdikleri yerde olay ve sorun kayıtları için geçerlidir.

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetin üç parçası vardır. Birincisi araştırma zamanıdır: olayları analiz etme becerisine ve erişimine sahip, diğer işleriyle rekabet eden kişiler. İkincisi, birikim listesi ve değişiklik süreci aracılığıyla teslim edilen düzeltmenin kendisidir. Üçüncüsü kaydetme ve raporlama maliyetidir: olayları bağlamak, sınıflandırmaları sürdürmek, örüntü incelemesini yürütmek ve bilinen hata veri tabanını bakımda tutmak. Bu maliyetler çoğunlukla insanların zamanıdır, bu yüzden saatleri sayın.

Getiri, tekrarı durmuş olaylarda, daha az çağrıda ve daha az elle geçici çözüm çabasında, yanıt verenlerin bilinen hataları bulması sayesinde kısalan olay yönetiminde ve mühendislere daha az yükseltmede görülür. Evrensel bir rakam geçerli değildir, bu yüzden kendi tahmininizi yapın. Tekrarlayan bir olay için, yıllık oluşma sayısını ortalama ele alma çabasıyla ve oluşma başına iş etkisi tahminiyle çarpın, sonra bunu düzeltme çabasıyla karşılaştırın. Tahmini hizmet sahibiyle gözden geçirin, bir tahmin olarak belirtin ve tekrar penceresi ne olduğunu gösterdikten sonra yeniden ele alın. Sorun yönetimi, olay yükünün çoğunu üreten birkaç nedende en iyi karşılığını verir ve Pareto görünümü bunları hızla bulur.

## Anti-desenler ve tuzaklar

- **Hedef olarak kapatma.** Kapatılan sorunlar için bir hedef, önemsiz kayıtları ve erken kapatmayı ödüllendirir. Önce sonuç ölçülerini bildirin ve kapatma kodu dağılımını gösterin.
- **Mezarlık olarak sorun kayıtları.** Kayıtlar sahipsiz, tarihsiz ve kararsız açık kalır. En eskiler listesini düzenli aralıklarla gözden geçirin ve her kalem için bir karar isteyin.
- **“İnsan hatası”nda durmak.** Sisteme kimin dokunduğunu adlandırır, sistemin başarısızlığa neden izin verdiğini değil. Bir nedeni yalnızca değiştirilebilir bir koşulu adlandırdığında kabul edin.
- **Kök neden kesinleşene kadar hiçbir şeyi düzeltmemek.** Karmaşık arızaların tek bir nedeni olmayabilir. Bir geçici çözüm ve en iyi desteklenen düzeltmeyi uygulayın, sonra tekrarı izleyin.
- **Çıkışı olmayan geçici çözümler.** Gözden geçirme tarihi olmayan bir geçici çözüm kalıcı hale gelir. Bilinen hata oluşturulduğunda bir sahip ve bir tarih kaydedin.
- **Zayıf olay bağları.** Eksik ya da özensiz bağlar tekrarı görünmez kılar. Bağlamayı olay kapanışının bir parçası yapın ve bağları örnekleyin.
- **Birikim listesi dışındaki sorun işi.** Ayrı bir kuyrukta yaşayan düzeltmeler sonsuza dek bekler. Düzeltme kalemini sahip takımın panosuna koyun ve özelliklere karşı önceliklendirin.
- **Çözümleyicileri ya da takımları kapatılan kayıtlara göre karşılaştırmak.** Kolay hizmetleri ödüllendirir ve manipülasyona davet eder. Hizmetleri kendi geçmişlerine karşı zaman içinde karşılaştırın ve kohortları okuyun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Sorun tespiti ve bağlama | Sorunlar yalnızca büyük kesintilerden sonra açılır; olay bağı yok | Bazı takımlar olayları bağlar; kategoriler takıma göre farklıdır | Ortak sınıflandırma ve kapatma kodları; bağ olay kapanışında kurulur | Bağ oranı ve eşleşme kalitesi örneklenir ve gözden geçirilir | Örüntüler takımlar ve tedarikçiler arasında, ortak bilinen hatalarla tespit edilir |
| Kök neden ve bilinen hatalar | Neden varsa serbest metinde kaydedilir | Bilinen hatalar bazı takımlarca farklı yerlerde tutulur | Tek bir bilinen hata veri tabanı; nedenlerin ikinci kişi tarafından gözden geçirilmesi | Kök nedene kadar geçen süre ve bilinen hata yeniden kullanımı eğilim olarak izlenir ve üzerlerinde eyleme geçilir | Yanıt verenler, tedarikçiler ve müşteriler ortak girdilere katkıda bulunur ve onları kullanır |
| Düzeltme teslimi | Düzeltmeler birinin zamanı olduğunda yapılır | Düzeltmeler takımın kendi listesinde izlenir | Düzeltme, sahibi ve tarihi olan bir birikim listesi kalemine ya da değişikliğe bağlanır | Kalıcı çözüme kadar geçen süre gözden geçirilir ve ona kapasite ayrılır | Düzeltme önceliği ürün ve tedarikçi yol haritalarıyla birlikte belirlenir |
| Sonuç ve öğrenme | Kayıt sayıları raporlanır | Birikim listesi yaşı bazı incelemelerde raporlanır | Çözüm sonrası tekrar ve yalnızca geçici çözümle korunan sorun payı tanımlarıyla raporlanır | Kohortlar koruyucu ölçütlerle eşleştirilir ve finansman kararlarında kullanılır | Tanımlar karar vermeye bilgi sağlamayı bıraktığında gözden geçirilir; iyileştirme rutini |

## Kontrol listesi

- [ ] Metrik sicili bir sorunu, bir bilinen hatayı ve her kapatma kodunu tanımlar.
- [ ] Olay kapanışı bir soruna, bir bilinen hataya ya da “bulunamadı” seçeneğine bağ içerir.
- [ ] Tanımları ve örnekleri olan bir neden ve belirti sınıflandırması vardır.
- [ ] Her sorunun bir sahibi, bir tetikleyicisi ve bir karar tarihi vardır.
- [ ] Kök nedene kadar geçen süre ve kalıcı çözüme kadar geçen süre yüzdelik dilimlerle ayrı ayrı ölçülür.
- [ ] Her kalıcı çözüm, bir sahibi olan bir birikim listesi kalemine ya da değişikliğe bağlıdır.
- [ ] Her geçici çözümün bir sahibi ve bir gözden geçirme tarihi vardır.
- [ ] Çözüm sonrası tekrar, belirtilmiş bir pencereyle üç aylık kohorta göre izlenir.
- [ ] Bilinen hata yeniden kullanımı yanıt verenlerin çalıştığı yerde ölçülür.
- [ ] En eski açık sorunlar düzenli aralıklarla gözden geçirilir ve her karar kaydedilir.
- [ ] Kapatma kodlarını ve nedenleri denetlemek için her çeyrekte kapatılmış kayıtlardan bir örneklem okunur.
- [ ] Raporlar hizmetleri ve takımları tanımlar ve hiçbir tablo bireyleri sıralamaz.

## Yapay zekâ istemleri

**Bir olay kümesinde aday sorunları bulun.**

```text
[başlangıç tarihi] ile [bitiş tarihi] arasında [hizmet ya da takım] için olay
dışa aktarımı burada: [kimlik, açılış zamanı, kategori, kısa açıklama, çözüm
notu gibi olay alanlarını yapıştırın]. Ortak bir altta yatan nedeni paylaşıyor
olabilecek olayları gruplayın, her grubun kanıtını açıklayın ve grupları oluşma
sayısına ve [etki ölçüsü, örneğin kullanıcı etkisi saatleri] ölçüsüne göre
sıralayın. Kanıtın zayıf olduğu grupları işaretleyin. Nedenleri, sayıları ya da
kıyaslama değerlerini uydurmayın. Varsayımlarınızı ve güveninizi artıracak ek
verileri listeleyin.
```

**Sorun kapatma kodlarını ve kayıtlarını gözden geçirin.**

```text
Aşağıda [hizmet ya da takım] için [sayı] kapatılmış sorun kaydı var: [kimlik,
kapatma kodu, kaydedilmiş neden, düzeltme referansı, kapanış tarihini
yapıştırın]. Her kaydı, metniyle eşleşmeyen bir kapatma kodu, bir koşul yerine
bir kişiyi adlandıran bir neden ve bağı olmayan bir düzeltme açısından denetleyin.
Örüntüleri özetleyin ve bir gözden geçiren için üç soru önerin. Kişileri
sıralamayın ve kayıtlar hakkında olgular uydurmayın. Varsayımlarınızı listeleyin.
```

**Bir tekrar ölçümü tasarlayın.**

```text
[hizmet ya da takım] için düzeltilmiş sorunların düzeltilmiş kalıp kalmadığını
ölçmek istiyoruz. Araçlarımız [ITSM aracı, dağıtım aracı], olay
kategorilerimiz [liste] ve kapatma kodlarımız [liste]. Bir tanım, formül, saat
başlangıcı ve bitişi, belirtiler için eşleştirme kuralı, tekrar penceresi ve
dışarıda bırakılanları, üç aylık kohortları gösteren bir grafik düzeniyle birlikte
önerin. Nasıl manipüle edilebileceğini ve her durum için bir koruyucu ölçüt
önerin. İhtiyaç duyduğunuz eşikleri uydurmak yerine benden isteyin.
Varsayımlarınızı listeleyin.
```

**Yaşlanmış sorunlar için bir karar incelemesi hazırlayın.**

```text
[hizmet ya da takım] için [sayı] günden eski açık sorunlar burada: [kimlik, yaş,
öncelik, sahip, son güncelleme, geçici çözüm durumunu yapıştırın]. Her kaleme üç
karardan birinin verildiği [süre] dakikalık bir inceleme için gündem taslağı
hazırlayın: tarihle düzelt, adlandırılmış bir sahip ve gözden geçirme tarihiyle
riski kabul et ya da bir gerekçeyle kapat. Her karar için getirilecek kanıtı
önerin. Maliyetleri ya da sonuçları uydurmayın. Varsayımlarınızı ve önce
yanıtlamam gereken soruları listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): sorun metriklerinin dayandığı olay, değişiklik ve bilgi ölçümlerini tanımlayan konuları ve her biriyle eşleştirilecek koruyucu ölçütü bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): yeni ya da düzenlenmiş bir sorun metriğinin saatlerini, dışarıda bırakılanları, manipülasyon yolunu ve koruyucu ölçütünü belirttiğini denetlemek için kullanın.

## Temel çıkarımlar

- Sorun yönetiminin ölçüsü tekrardır: bir soruna bağlı olayların geri gelmemesi.
- Aşamaları ayrı ayrı zamanlayın: kayıttan kaydedilmiş nedene ve nedenden çözümün üretimde çalışmasına.
- Olayları kapanışta sorunlara bağlayın, belirtilerin nasıl eşleştirileceği konusunda anlaşın ve bağları örnekleyin.
- Geçici çözüm, sahibi ve gözden geçirme tarihi olan bir aşamadır ve yalnızca geçici çözümle korunan sorun payı ne kadar riskin taşındığını gösterir.
- Kalıcı çözümleri sahip takımın birikim listesine koyun ve kayıt sayılarından önce sonuç ölçülerini raporlayın.
- Hizmetleri, kohortları ve kararları tanımlayın. Çözümleyicileri ya da takımları kapatılan sorunlara göre asla sıralamayın.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
