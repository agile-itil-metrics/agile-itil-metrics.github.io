# SLA, OLA ve XLA metrikleri

**Hizmet düzeyi anlaşması müşteriye ne vaat edildiğini, operasyonel düzey anlaşması iç ekiplerin birbirine ne borçlu olduğunu, deneyim düzeyi anlaşması ise hizmeti kullanan insanların gerçekten daha iyi durumda olup olmadığını söyler. Bu yüzden üçüne de ihtiyacınız vardır ve bunları yeşil bir duvar yerine dürüstçe raporlamanız gerekir.**

## Genel bakış ve motivasyon

[Hizmet düzeyi anlaşması (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), bir hizmet sağlayıcı ile bir müşteri arasında hizmetin neyi sunacağına dair belgelenmiş bir taahhüttür: çalışma saatleri, kullanılabilirlik, sağlayıcının olaylara ne kadar çabuk yanıt verip bunları çözdüğü ve taleplerin ne kadar hızlı karşılandığı. ITIL 4'te (çerçevenin sahibi tarafından, bugünkü adıyla PeopleCert bünyesindeki AXELOS tarafından yayımlanan 2019 sürümü) [hizmet düzeyi yönetimi](https://en.wikipedia.org/wiki/ITIL) uygulaması bu hedefleri tanımlar, izler ve raporlar. [Operasyonel düzey anlaşması (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) ise iç karşılığıdır: aynı kuruluştaki ekipler arasında, örneğin hizmet masası ile ağ ekibi arasında, müşteriye dönük SLA'nın karşılanabilmesi için her birinin ne yapacağına ve ne kadar hızlı yapacağına dair bir anlaşmadır. Dış tedarikçi için aynı rolü bir alt yapı sözleşmesi oynar (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

Deneyim düzeyi anlaşması (XLA) üçünün en yenisidir. Üzerinde uzlaşılan bir sonucu, insanların hizmeti nasıl deneyimlediği cinsinden kaydeder: işlerini ne kadar kolay yaptıkları, etkileşim hakkında ne hissettikleri ve hizmetin hedeflerine ulaşmalarına yardım edip etmediği. Bu fikir hizmet yönetimi uygulamasında gelişti, çünkü bir SLA karşılanırken kullanıcılar mutsuz olabilir. Bu konu üç anlaşmanın ve bunların raporlanmasının sahibidir. Deneyimin nasıl ölçüleceğine dair derinlik Konu 6.2 “Deneyim düzeyi anlaşmaları” içindedir; hedeflerin mühendislik karşılıkları ise Konu 5.2 “SLI, SLO ve hata bütçeleri” içindedir.

Bu anlaşmaların yanında çevik ve güvenilirlik alanından üç kavram yer alır. [Hizmet düzeyi göstergesi (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator), bir hizmetin ölçülen bir özelliğidir; örneğin başarıyla sunulan isteklerin payı. [Hizmet düzeyi hedefi (SLO)](https://en.wikipedia.org/wiki/Service_level_objective), bir SLI için belirlenen iç hedeftir ve genellikle müşteriye vaat edilen herhangi bir şeyden daha sıkıdır. [Site güvenilirliği mühendisliği (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) uygulaması, SLO'yu ve ondan doğan hata bütçesini, ürün ve operasyon için ortak bir karar aracı olarak ele alır. SLA sözleşmedir; SLO mühendislik hedefidir; SLI ölçümdür. Üçünü birbirinden ayrı tutmak, sözleşmeye bağlı bir ceza maddesinin günlük mühendislik kararlarını yönlendirmek için kullanıldığı yaygın karışıklığı önler.

Bu ailenin karpuz raporlama denen iyi bilinen bir başarısızlığı vardır: dışı yeşil, içi kırmızı bir rapor. Her SLA satırı karşılanmış görünür, ama müşteriler hayal kırıklığı içindedir; çünkü ölçümler müşterinin önemsediği şey için değil sağlayıcının güvenle tutturabileceği şey için seçilmiştir, ya da ortalamalar kötü kuyruğu gizler, ya da saat bekleyişin en kötü kısmında durdurulmuştur. Çare kısmen teknik (yüzdelik dilimler, dürüst saatler, kullanıcı merkezli göstergeler), kısmen toplumsaldır (bir konuşma olarak müzakere edilen, belirli aralıklarla gözden geçirilen ve bir ekip hakkında hüküm olarak değil hizmet hakkında bir soru olarak okunan anlaşmalar). Hedefe dönüşen ölçümlere ilişkin daha geniş uyarı Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi” içindedir.

Çevik ekipler hedefler ve bütçeler cinsinden düşünür; ITIL hizmet düzeyi yöneticileri anlaşmalar ve gözden geçirmeler cinsinden. Bu iki bakış birbirine uyar: anlaşma sonucu belirtir, hedefler ve göstergeler ekibin sözü nasıl tuttuğudur, deneyim ölçümleri ise bunun önemli olduğunu doğrular.

Son bir terim: [yüzdelik dilim](https://en.wikipedia.org/wiki/Percentile), gözlemlerin belirtilen bir payının altında kaldığı değerdir. Çözüm süresinin 85. yüzdelik dilimi, taleplerin yüzde 85'inin çözüldüğü süredir. Çoğu SLA hedefi bir yüzdelik dilim ya da bir pay olarak yazılır; bu yüzden yüzdelik dilimin nasıl hesaplandığı ve içine nelerin dahil edildiği konunun özüdür (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

## Temel ilkeler

- **Sonuçları müşteriyle üzerinde uzlaşın, sonra ölçün.** Anlaşma, müşterinin neye ihtiyaç duyduğuna ve sağlayıcının neyi sürdürebileceğine dair müzakere edilmiş, müşterinin kendi sözcükleriyle yazılmış ve birlikte gözden geçirilen bir ifadedir.
- **Tek bir ortalama değil, dağılımları ve payları raporlayın.** Hedefi karşılayan bir ortalama çözüm süresi, çok geç kalmış işlerden oluşan uzun bir kuyruğun üzerinde durabilir. Yüzdelik dilimi, popülasyonu ve sayıyı belirtin.
- **Saati dürüst tutun.** Her hedefin bir başlangıç olayı, bir bitiş olayı ve bir duraklatma koşulları listesi vardır. Saat kurallarını yayımlayın ve her duraklatmanın ne sıklıkla kullanıldığını raporlayın.
- **Anlaşmaları katmanlayın.** SLA, OLA'ların ve tedarikçi sözleşmelerinin üzerine kurulur; ekibin içinde belirlenen hedefler dışarıya verilen sözlerden daha sıkı olmalıdır. Herhangi bir katmandaki boşluk, en üstte bir ihlal olarak görünür.
- **Her operasyonel ölçümü bir deneyim ölçümüyle eşleştirin.** Karşılanmış bir hedef ile kötü bir deneyim ya da tersi, rapordaki en yararlı sinyaldir.
- **Ramak kalanları sayın.** Sınırın hemen içinde biten iş, sınırın çok içinde biten işten risk hakkında daha fazla şey söyler.
- **Ekipler ve hizmetler hakkında raporlayın, insanlar hakkında asla.** Anlaşmalar, bir hizmetin ya da ekibin neyi taahhüt ettiğini tanımlar. Bireyleri sıralamanın yolu değildirler.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılık | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| SLA karşılama oranı | Dönemde belirtilen bir SLA hedefini karşılayan ölçülmüş kalemlerin (olaylar, talepler ya da zaman pencereleri) payı | Hedefi karşılayan kalemler bölü ölçülen kalemler. Saat, anlaşmada tanımlanan kayıtlı zamanda (örneğin kayıt oluşturma) başlar ve tanımlanan bitiş olayında (örneğin onaylanmış onarım) durur. Hariç tutulanlar: yinelenen olarak iptal edilen kalemler ve planlı bakım gibi üzerinde uzlaşılmış istisnalar içindeki süre. Payın yanında sayıyı da raporlayın | Yüzde, n ile birlikte | ITSM aracı zaman damgaları; zamana dayalı hedefler için izleme verileri | Hizmet düzeyi yönetimi; olay yönetimi; hizmet talebi yönetimi | Kayan bir pencere üzerinde hizmet düzeyi hedefi karşılama (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”) | Aylık, haftalık bir iç görünümle |
| Ramak kalan payı | Hedefi karşılayan ama izin verilen sürenin son onda birinde biten kalemlerin payı | Hedef sürenin yüzde 90'ında ya da daha fazlasında bitmiş ve hâlâ hedef içinde kalan kalemler bölü hedefi karşılayan kalemler. SLA ile aynı saat. Zaman pencereleri için uygulanamaz (yalnızca hedefe ulaşma süresi ölçümlerine uygulanır) | Yüzde | ITSM aracı zaman damgaları | Hizmet düzeyi yönetimi | Bir akış grafiğinde hizmet düzeyi beklentisine yakın işin oranı (bkz. Konu 2.1 “Akış ölçümleri”) | Aylık |
| Saat duraklatma payı | Toplam geçen kayıt süresinin SLA saatini duraklatan durumlarda harcanan payı | Toplam duraklatma süresi bölü kapsamdaki kalemler için başlangıçtan bitişe geçen toplam süre. Hiçbir duraklatma durumu kullanılmamış kalemler hariç tutulur. Duraklatma durumuna göre raporlayın | Yüzde | ITSM aracı durum geçmişi | Hizmet düzeyi yönetimi; olay yönetimi | Bir akış görünümünde engellenmiş süre ve bekleme süresi (bkz. Konu 2.4 “Değer akışı metrikleri”) | Aylık |
| OLA karşılama oranı | İki ekip arasında OLA hedefini karşılayan iç devirlerin payı | OLA hedefi içinde tamamlanan devirler bölü alınan devirler. Saat, alıcı ekip atandığında başlar ve kalemi geri verdiğinde ya da kapattığında durur. Hariç tutulanlar: yanlışlıkla yeniden atanan kalemler, ayrıca sayılır | Yüzde, n ile birlikte | ITSM aracı atama geçmişi | Hizmet düzeyi yönetimi; olay yönetimi | Ekipler arasında devir bekleme süresi ve engellenmiş iş (bkz. Konu 9.3 “İş birliği ve devir teslim metrikleri”) | Aylık |
| Devir bekleme süresi (85. yüzdelik dilim) | Bir kalemin işe başlanmadan önce alıcı ekibin kuyruğunda beklediği süre | Alıcı ekibe atama ile o ekibin ilk kayıtlı eylemi arasındaki sürenin 85. yüzdelik dilimi. Hariç tutulanlar: müşteriyi bekleyen kalemler | Saat veya dakika | ITSM aracı atama ve etkinlik geçmişi | Hizmet düzeyi yönetimi; olay yönetimi | Bir akış görünümünde kuyruk süresi (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”) | Haftalık |
| Yolculuğa göre deneyim puanı | Müşterinin ya da kullanıcının, hizmetin yeni bir dizüstü bilgisayar almak ya da bir kesintiden kurtulmak gibi tanımlı bir yolculuğu nasıl desteklediğine verdiği derecelendirme | Dönemde tamamlanan yolculuklar için sabit bir ölçekteki anket derecelendirmelerinin ortalaması ve dağılımı. Yanıt oranını ve yanıtlayan karışımını raporlayın. Hariç tutulanlar: eksik anketler. Tek bir ortalama değildir, bu yüzden dağılımı gösterin | Derecelendirme ölçeği, yanıt oranıyla birlikte | Kısa etkileşim sonrası anket; ITSM aracındaki yolculuk olayları | Hizmet düzeyi yönetimi; müşteri memnuniyeti uygulamaları (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”) | Müşteri geri bildirimi ve sonuç ölçümleri | Aylık, her dalga gösterilerek |
| Karpuz açığı | SLA karşılanmış görünürken deneyim ölçümünün ya da bir kullanıcı etkisi ölçümünün kötü göründüğü raporlama dönemlerinin ya da hizmetlerin payı | SLA karşılama oranı hedefte ya da üzerinde olup deneyimi üzerinde uzlaşılan düzeyin altında kalan hizmetler (ya da dönemler) bölü SLA karşılama oranı hedefte ya da üzerinde olan hizmetler (ya da dönemler). Deneyim düzeyi, dönem puanlanmadan önce üzerinde uzlaşılmış olmalıdır | Yeşil hizmetlerin yüzdesi | SLA karşılama ve deneyim puanı birlikte | Hizmet düzeyi yönetimi; sürekli iyileştirme | Sonuçlara karşı sonuçların retrospektifi | Üç aylık |
| Anlaşma kapsamı ve güncelliği | SLA'sı, OLA'ları ve tedarikçi sözleşmeleri mevcut olan ve üzerinde uzlaşılan aralık içinde gözden geçirilmiş canlı hizmetlerin payı | Üç katmanı da belgelenmiş ve aralık içinde gözden geçirilmiş hizmetler bölü hizmet kataloğundaki canlı hizmetler. Aralığı kuruluş belirler. Hariç tutulanlar: kullanımdan kaldırılma aşamasındaki hizmetler | Yüzde | Hizmet kataloğu (ITIL'in kendi yazımıyla service catalogue) ve anlaşma sicili | Hizmet düzeyi yönetimi; hizmet kataloğu yönetimi; tedarikçi yönetimi | Düzenli bir ritimde gözden geçirilen çalışma anlaşmaları ve ekip sözleşmeleri | Üç aylık |

## Öneriler

### Anlaşmaları kurun

**1. Her SLA'yı müşterinin diliyle yazın ve tek bir sonuca bağlayın.** Müşterinin neye ihtiyaç duyduğundan, örneğin “hesabı kilitlenen bir çalışan hızla yeniden çalışır hale gelir” ifadesinden başlayın, sonra ölçümü seçin. Anlamlı birkaç hedefli kısa bir anlaşma, kimsenin okumadığı uzun bir anlaşmadan iyidir. Her hedef için saati yazın: başlangıç olayı, bitiş olayı ve duraklatma koşulları (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).

**2. Hedefleri, belirtilmiş bir popülasyonla birlikte yüzdelik dilim ya da pay olarak ifade edin.** “Öncelik 2 olaylarının yüzde 90'ı dört saat içinde onarılır”, “ortalama onarım süresi iki saatin altındadır” ifadesinden daha çok şey söyler. Neyin sayıldığı üzerinde uzlaşın: hangi öncelikler, hangi saatler, hangi talep türleri. Her yüzdenin yanında sayıyı gösterin; böylece sekiz olaylı bir ay, sekiz yüz olaylı bir ay gibi okunmaz.

**3. OLA'ları SLA'dan türetin ve her birine adı belli bir sahip ekip verin.** Müşteri hedefinden geriye doğru çalışın: müşteriye dört saat içinde onarım vaat edildiyse OLA'lar algılama, önceliklendirme, devirler ve düzeltme için yer bırakmalıdır. Her OLA'yı bir alıcı ekip, beklenen bir yanıt süresi ve anlaşmazlıklar için bir yolla kısa karşılıklı bir anlaşma olarak yazın. OLA ekiplerin planlama yapmasına yardım etmek için vardır; bu yüzden ilişkinin izin verdiği kadar hafif tutun.

**4. Hedefleri vaatten daha sıkı tutun.** İç SLO'yu SLA'dan daha sıkı bir düzeye ayarlayın; böylece kötü bir hafta müşteriye görünen bir ihlalden önce fark edilip düzeltilir (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”). SLA'yı finans ve hukukun önemsediği bir taban, SLO'yu ise mühendislerin yön bulduğu sayı olarak ele alın. Hata bütçesini, ürün ve operasyonun özellik çalışması ile güvenilirlik çalışması arasında karar vermesinin yolu olarak kullanın.

### Dürüstçe ölçün

**5. Saat kurallarını yayımlayın ve duraklatmaları raporlayın.** Yeşil bir rapora giden en yaygın yol, sağlayıcının kendisinin beklediği durumda kullanılan “müşteriyi bekliyor” gibi cömert bir duraklatma durumudur. Saat duraklatma payını duraklatma durumuna göre raporlayın, her ay duraklatılmış bazı kayıtlardan örnek alın ve müşterinin saatin durdurulması gerektiği konusunda aynı fikirde olup olmayacağını sorun. İzin verilen duraklatma nedenleri listesini kısa tutun ve anlaşmaya yazın.

**6. Hedefin yanında dağılımın tamamını gösterin.** Medyanı, 85. ya da 95. yüzdelik dilimi ve en kötü onda birlik dilimi karşılama oranının yanına koyun. Sabit yüzde 95'lik bir karşılama, günler süren işlerden oluşan bir kuyruğu gizleyebilir (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**7. Ramak kalanları ve ihlal nedenlerini izleyin.** Ramak kalan payı, yeşil sayıda ne kadar şans olduğunu söyler. Bir ihlal olduğunda neden kategorisini ve bunun kapasite, devir, tedarikçi ya da tanım sorunu olup olmadığını kaydedin. En büyük kategorileri sorun yönetimine bağlayın (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

**8. Yalnızca karşılama oranını değil, OLA kuyruğunu da ölçün.** 85. yüzdelik dilimdeki devir bekleme süresi, bir SLA ihlali ortaya çıkmadan çok önce işin nerede takıldığını gösterir. Bunu hem gönderen hem alıcı ekiple paylaşın ve aralarındaki akışın bir özelliği olarak tanımlayın. Konuşma kuyruk hakkındadır; kuyruktaki insanlar hakkında asla (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”).

### Deneyimi ekleyin ve açığı kapatın

**9. Her SLA'yı aynı yolculuk için bir deneyim ölçümüyle eşleştirin.** Kullanıcılara etkileşimden sonra işin işe yarayıp yaramadığı ve ne kadar zor olduğu hakkında kısa bir soru sorun ve yanıt oranını ile yanıtlayan karışımını raporlayın. Hangi düzeyin yeterince iyi sayılacağı konusunda önceden uzlaşın; böylece bir XLA sonradan uydurulmuş bir sayı değil, müzakere edilmiş bir sonuç olur (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları” ve Konu 6.1 “Müşteri memnuniyeti metrikleri”).

**10. Karpuz açığını raporlayın ve bir bulgu olarak ele alın.** Bir SLA'nın deneyim kötüyken ne sıklıkla karşılandığını izleyin. Yükselen bir açık, SLA ölçümlerinin kullanıcıların önemsediği şeyden uzaklaştığını söyler; doğru yanıt tutarsızlığı açıklamak değil, ölçümü gözden geçirmektir. Bunu üç ayda bir, müşteri temsilcisi hazır bulunarak gözden geçirin.

**11. Anlaşmaları bir takvimle gözden geçirin ve kimsenin kullanmadıklarını emekliye ayırın.** Her anlaşmayı hizmet kataloğuna, tedarikçi sözleşmelerine ve fiili işe karşı kontrol edin. Daha küçük bir canlı anlaşma kümesini raporlamak daha kolaydır ve oyunlaştırmak daha zordur.

**12. Her hizmeti üç katmanı birleştiren tek bir görünümde raporlayın.** Her hizmet için SLA karşılama oranını, dağılımı, OLA devir beklemelerini, deneyim puanını ve açık iyileştirme çalışmasını tek bir sayfada gösterin. Durumu, hizmet sahibinin seçtiği bir renkten değil, verilerden türetin. Sayfayı müşteriye ve ekiplere açık hale getirin (bkz. Konu 11.1 “Hizmet metrikleri panosu tasarlamak”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş korkuluk metriği ya da uygulaması |
| --- | --- | --- |
| SLA karşılama oranı | Hedefin kolay seçilmesi; kayıtları erken kapatıp sonra yeniden açmak; önceliği aşağı yönde yeniden sınıflandırmak; zor vakaları “kapsam dışı” diyerek hariç tutmak | Yeniden açılma oranı ve öncelik yeniden sınıflandırma oranı; müşteriyle birlikte okunan kapatılmış kayıt örneği; her çeyrekte istisna listesinin gözden geçirilmesi |
| Ramak kalan payı | Saati sınırdan bir dakika önce durdurup işe kayıt dışı devam etmek; bir kaydı iki daha kısa kayda bölmek | Son müşteri temasından onaylanmış onarıma kadar geçen süre; olay başına bağlantılı ya da alt kayıt sayısı |
| Saat duraklatma payı | Müşteriyi beklemeyen kayıtlarda duraklatma durumlarını kullanmak; işi sayılmayan bir duruma taşımak | Örnek üzerinde denetlenen duraklatma nedenleri; müşteri tarafından geri alınan duraklatmaların payı; duraklatılmış kayıtlar için deneyim puanı |
| OLA karşılama oranı | Saati yeniden başlatmak için devirleri göndericiye geri reddetmek; işe başlamadan kalemleri kabul edilmiş olarak işaretlemek | Kalem başına geri dönme sayısı ve ekipler arası toplam onarım süresi; uçtan uca SLA sonucu |
| Devir bekleme süresi (85. yüzdelik dilim) | Beklemeyi gizlemek için ekip kuyruğu yerine bir kişiye atama yapmak; göstermelik bir ilk eylem kaydetmek | Örneklenen ilk eylem kalitesi; atamadan müşteriye görünen ilk güncellemeye kadar geçen süre |
| Yolculuğa göre deneyim puanı | Anketleri yalnızca memnun kullanıcılara göndermek; yönlendirici sorular sormak; yanıtlayanları yüksek puan vermeleri için yönlendirmek | Popülasyona karşı yanıtlayan karışımı; puanın yanında gösterilen yanıt oranı; gözden geçirmede okunan açık yorumlar |
| Karpuz açığı | Açık küçük kalsın diye deneyim düzeyini düşük belirlemek; ölçüm düştüğünde deneyim ölçümünü değiştirmek | Önceden üzerinde uzlaşılmış deneyim düzeyi ve gerekçesiyle kaydedilen değişiklikler; dağılımın tamamının eğilimi |
| Anlaşma kapsamı ve güncelliği | Gerçek bir gözden geçirme yapmadan anlaşmayı gözden geçirilmiş olarak işaretlemek; taslak bir belgeyi SLA olarak saymak | Gözden geçirmenin kanıtı (katılımcılar, değişiklikler, kararlar); gerçek içerik ve müşteri onayı açısından okunan anlaşma örneği |

Sağlıklı bir okuma şunları gösterir: anlaşılır nedenlerle hareket eden karşılama oranı, az sayıda ve açıklanmış ramak kalanlar, üzerinde uzlaşılan listenin içinde kalan duraklatmalar, sahibi olan ekiplerce tartışılan devir beklemeleri ve büyük ölçüde SLA ile örtüşen bir deneyim ölçümü. İkisinin ayrıştığı yerde ekibin nedene dair notu ve bir iyileştirme kalemi zaten vardır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Cezalı sözleşmeye bağlı SLA'lar | Açık, uygulanabilir, yasal olarak tanınan | Saat oyunlarını ve savunmacı raporlamayı teşvik eder; cezalar ilişkiyi bozabilir |
| Cezasız, düzenli gözden geçirmeli SLA'lar | Güveni ve dürüst veriyi besler; öğrenmeye odaklanır | Bir tedarikçi hedefleri sürekli kaçırdığında daha az koz bırakır |
| Tüm ekipler arasında ayrıntılı OLA'lar | Açık beklentiler ve daha az anlaşmazlık | Bürokrasi; ekipler müşterinin saati yerine kendi saatleri için optimize eder |
| Ortak uçtan uca hedefli hafif OLA'lar | İş birliğini teşvik eder; daha az evrak işi | Anlaşmazlıkları çözmek için güven ve iyi kuyruk görünürlüğü gerektirir |
| SLA'lara XLA eklemek | Hizmetin insanlara yardımcı olup olmadığını gösterir | Anket verisi daha gürültülü ve yavaştır; ilişkilendirme daha zordur |

Anlaşmayı küçük tutun, dağılımı raporlayın ve operasyonel veriyi doğrulamak için deneyim verisini kullanın. Bir sayı üzerindeki anlaşmazlığın çoğunun doğduğu yer olan saat kurallarına ve devirlere çaba harcayın.

## Takımınızla tartışılacak sorular

**1. SLA raporumuz tamamen yeşilse kullanıcıların hizmet hakkında ne söylemesini beklerdik?**
Gruptan, aylardır yeşil olan bir hizmeti adlandırmasını isteyin, sonra kullanıcıların yorumlarda ve şikâyetlerde gerçekte ne söylediğini toplayın. İkisini karşılaştırın. Kolaylaştırıcı, ölçüm ile yaşanmış deneyim arasındaki boşlukları aramalı ve hangi ölçümlerin tutturması kolay olduğu için seçildiğini not etmelidir.

**2. Saatimiz nerede duruyor ve buna kim karar verdi?**
Önemli bir hedef için başlangıç, bitiş ve duraklatma kurallarını gözden geçirin ve her birini kimin yazdığını sorun. Duraklatma durumundaki kayıtların payına bakın ve müşterilerin aynı fikirde olup olmayacağını sorun. Sıkılaştırılacak ya da netleştirilecek bir kural üzerinde uzlaşın.

**3. OLA'larımızdan hangileri ekiplerin planlama yapmasına yardım ediyor, hangileri yalnızca suçlu arıyor?**
İç anlaşmaları sıralayın ve her birini kimin ne zaman okuduğunu sorun. Kaçırılan bir OLA'dan sonra ne olduğunu tartışın: kuyruk hakkında bir konuşma mı, yoksa kusur arayışı mı. Amaç, tartışmayı ekipler arasındaki iş akışına doğru kaydırmaktır. Basitleştirilecek ya da emekliye ayrılacak bir OLA seçin.

**4. Yeşilimizin ne kadarı şans?**
En önemli hedef için ramak kalan payını gösterin. Gelecek ay birkaç zor vaka daha olsaydı ya da birkaç kişi daha az bulunsaydı ne olacağını tartışın. Ekibin payı olup olmadığını ve bunun nerede durduğunu sorun.

**5. Müşteri, bugün ölçmediğimiz hangi sözü vermemizi isterdi?**
Müşteri temsilcisini ya da bir kullanıcıyı, kendisi için neyin önemli olduğunu kendi sözcükleriyle anlatmaya davet edin; örneğin bir insana ulaşabilmek ya da ilk günden önce bir dizüstü bilgisayar almak. İki ya da üç sonuç yakalayın. Hangilerinin kısa bir anket sorusu ya da verideki mevcut bir olay olabileceğine ve grubun iyi bir düzey üzerinde nasıl uzlaşacağına karar verin.

**6. SLA ölçümlerimiz kullanıcıların önemsediği şeyden uzaklaşmışsa bunu nasıl anlarız?**
Karpuz açığını bir sinyal olarak tartışın ve ona kimin baktığını sorun. Anlaşmaların ne sıklıkla gözden geçirildiğini ve müşterinin katılıp katılmadığını düşünün. Bir gözden geçirme tarihi ve getirilecek kanıtlar üzerinde, kayıt örneği ve en son deneyim sonuçları dahil, uzlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Hizmetlerini kendileri de işleten teslimat ekipleri SLA'yı kendi hedefleri ve hata bütçeleri aracılığıyla karşılar; bir SLA cezası ya da müşteri eskalasyonu planlı işi kestiğinde maliyeti hissederler. SLO'ları SLA'lardan daha sıkı tutmalı ve SLA'yı günlük hedef değil, bir güvenlik tabanı olarak ele almalıdırlar (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”).

### Hizmet ve operasyon takımları

Operasyon ekipleri saatleri taşır. Başlangıç, bitiş ve duraklatma koşulları için net kurallara, alıcı kuyruğu adlandıran ortak OLA'lara ve devir beklemelerinin görünürlüğüne ihtiyaç duyarlar. İhlal nedenlerini açıkça raporlamalı ve bunları sorun ve kapasite çalışmalarına girdi olarak kullanmalıdırlar (bkz. Konu 4.1 “Sorun yönetimi metrikleri”). Nedeni düzeltmek yerine bir sonucu saat üzerinden açıklama baskısına direnmelidirler.

### Liderlik ve yönetişim

Liderler SLA raporlarını, taahhütlerin karşılanıp karşılanmadığını ve nereye yatırım yapılacağını görmek için kullanır. Dağılımları, saat duraklatma payını, ramak kalan payını ve karpuz açığını istemeli; kesintisiz bir yeşil dizisine merakla yaklaşmalıdırlar. Bir ihlal analizinin ardından gelen iyileştirme çalışmasını finanse etmek ve dürüst raporlamayı suçlamadan korumak, hedefin kendisinden daha önemlidir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

### Müşteriler ve kullanıcılar

Müşteriler, anlaşmanın hissettiklerini tanımlamasını ister: sorunun ne kadar çabuk giderildiği, ne sıklıkla tekrarladığı ve yardım edecek birine ulaşıp ulaşamadıkları. Anlaşmaların gözden geçirilmesinin parçası olmalı ve yeşil bir raporun deneyimlerine uymadığını söyleyebilecekleri bir yola sahip olmalıdırlar. Herhangi bir ihlalin nedenleri ve planlanan düzeltmeyle birlikte okunabilir tek sayfalık bir özet, uzun bir karşılama tablosundan daha çok güven kazandırır.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı, servis personelinin kullandığı bir klinik randevu sistemini destekler. Hizmet sahibi, hizmet masası, uygulama ekibi ve altyapı ekibi her ay toplanır. Aşağıdaki tüm sayılar açıklayıcıdır.

SLA, günün yirmi dört saati, haftanın yedi günü sunulan bir hizmette, kayıt oluşturmadan itibaren ölçülmek üzere, öncelik 2 olaylarının (bir servisi etkileyen kısmi işlev kaybı) yüzde 90'ının dört saat içinde onarılacağını vaat eder. Aylık rapor, 36 olayda yüzde 94 karşılama gösterir (açıklayıcı); rahatça yeşil. Her öncelik 2 kapanışından sonra gönderilen deneyim anketinin yanıt oranı yüzde 41'dir (açıklayıcı) ve medyan derecelendirme beş puanlık ölçekte 3'tür; hizmet sahibi ile servis yöneticilerinin XLA olarak uzlaştığı 4 düzeyinin hayli altında. Karpuz açığı üst üste üçüncü ay görünür.

Ekip dağılıma bakar. Medyan onarım 1 saat 40 dakikadır (açıklayıcı), ama 95. yüzdelik dilim 3 saat 50 dakikadır (açıklayıcı) ve ramak kalan payı yüzde 31'dir (açıklayıcı): “karşılanmış” olayların neredeyse üçte biri izin verilen sürenin son onda birinde bitmiştir. Saat duraklatma payına bakarlar ve geçen sürenin yüzde 22'sinin (açıklayıcı) “müşteriyi bekliyor” durumunda harcandığını bulurlar. Duraklatılmış on kayıttan oluşan bir örnek, dördünde servisin yanıt verdiğini ama kaydın bir sonraki vardiyaya kadar duraklatılmış kaldığını, diğer üçünde ise uygulama ekibinin altyapı ekibini beklediğini gösterir. Altyapı kuyruğu için 85. yüzdelik dilimdeki devir bekleme süresi, 30 dakikalık (açıklayıcı) bir OLA'ya karşı 2 saat 10 dakikadır (açıklayıcı) ve bu devir için OLA karşılama oranı yüzde 58'dir (açıklayıcı).

Karar pratiktir. Saat kuralını, “müşteriyi bekliyor” durumu yalnızca müşteriye belgelenmiş bir istekten sonra kullanılabilecek ve saat bir sonraki yanıtta yeniden başlayacak biçimde değiştirirler. Servis saatlerinde altyapı kuyruğu için bir nöbet yolu eklerler ve bir ay sonra gözden geçirmek üzere daha küçük bir OLA üzerinde uzlaşırlar. Deneyim ölçümünü ve karpuz açığını aylık tek sayfalık rapora eklerler ve gözden geçirmeye bir servis yöneticisini davet ederler. Ayrıca iç SLO'yu, olayların yüzde 95'i için daha sıkı bir dört saatlik onarıma düşürürler; böylece ekip SLA risk altına girmeden önce sorunu fark eder.

İkinci ayda bir oyunlaştırma riski ortaya çıkar. Duraklatma kuralı değiştikten sonra karşılama yüzde 89'a düşer (açıklayıcı) ve bir yönetici hizmet masasından “öncelikleri yeniden kontrol etmesini” ister. Ekip, öncelik 2'den öncelik 3'e düşürmelerde bir sıçrama fark eder, karşılamayı yeniden sınıflandırma ve yeniden açılma oranlarıyla eşleştirir ve herhangi bir öncelik değişikliği için kayıtta bir gerekçe zorunlu kılar. Üçüncü ayda karşılama yüzde 91'dir (açıklayıcı), 95. yüzdelik dilim daha düşüktür, ramak kalan payı azalmıştır ve medyan deneyim derecelendirmesi 3,8'e çıkmıştır (açıklayıcı). Açık, iş iyileştiği için daralır ve sayılar inandırıcıdır.

## Sektör mercekleri

**Girişim.** Küçük bir şirketin çoğu zaman hiç resmî SLA'sı yoktur; yalnızca birkaç erken müşteriye verilmiş gayriresmî bir söz vardır. Hizmet saatlerini, bir yanıt hedefini ve yüzdelik dilim olarak belirtilmiş bir onarım hedefini adlandıran tek sayfalık bir belge yazın ve ekibin içinde bir SLO tutun. Müşteri görüşmeleri XLA'nın yerini alır; bu yüzden en önemli üç müşterinin her ay ne söylediğini yazın.

**Küçük işletme.** Küçük bir BT ekibi genellikle dış tedarikçilere büyük ölçüde bağımlıdır; bu yüzden alt yapı sözleşmeleri iç OLA'lardan daha önemlidir. Her tedarikçinin taahhüdünün, kendi kullanıcılarınıza verdiğiniz SLA kadar sıkı olduğunu kontrol edin ve tedarikçinin gerçek performansını izleyin (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”). Karşılama, ramak kalanlar ve kısa bir kullanıcı anketi içeren basit bir aylık sayfa yeterlidir.

**Kurumsal.** Büyük kuruluşların bir anlaşma siciline ve bir kapsam metriğine ihtiyacı vardır. Toplulaştırmaların anlamlı olması için saat kurallarını ve tanımları hizmetler arasında standartlaştırın (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”). Yönetim toplulaştırmalarındaki karpuz etkisine dikkat edin; yüzlerce yeşil satır, ciddi kullanıcı sıkıntısı yaşayan birkaç hizmeti gizleyebilir.

**Kamu sektörü.** Kamu kurumlarının çoğu zaman yasal hizmet standartları, SLA'ları sözleşmelerde sabitleyen satın alma kuralları ve sonuçları yayımlama yükümlülüğü vardır. Yayımlanan ölçümü net ve doğrulanabilir tutun, saat kurallarını ve kanıtları denetim için saklayın ve vatandaşlara gözden geçirmede söz hakkı olan müşteriler olarak davranın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”). Sözleşmenin katı olduğu yerde, sözleşme metnini değiştirmeden yanına bir deneyim ölçümü ekleyin.

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Daha iyi anlaşma metriklerinin gerekçesi, güven ve boşa giden çabadan kaçınma gerekçesidir. Kullanıcıların hissettiğiyle örtüşen raporlar eskalasyonları ve anlaşmazlıkları azaltır, kimin sayısının doğru olduğuna dair aylık tartışmayı kısaltır ve liderlerin önemli olan işi finanse etmesine imkân tanır. Net OLA'lar, uzun onarımlara en büyük katkıyı yapanlardan biri olan devir gecikmelerini azaltır. Erken yakalanan bir karpuz açığı, bir müşteri ilişkisinin ya da sözleşme yenilemesinin ters gitmesinin daha büyük maliyetinden kaçınmayı sağlar.

Maliyetler mütevazıdır: anlaşmaları yazma ve gözden geçirme zamanı, güvenilir saat ve devir verisi (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”), kısa bir anket ve aylık bir gözden geçirme. Toplam maliyet anlaşma sayısıyla birlikte artar; bu yüzden daha az ve daha basit anlaşmaların sahipliği daha ucuzdur.

Getiri, daha az sürpriz ihlal, raporları açıklamaya daha az harcanan zaman ve daha iyi bilgilendirilmiş yatırım tercihleri olarak ortaya çıkar. Bunları bir hesaplama olarak değil, zaman içinde gözlemlenecek ve karşılaştırılacak örüntüler olarak ele alın. Aylık bir gözden geçirmenin çabasını, kendi kuruluşunuzdaki bir eskale olmuş anlaşmazlığın ya da kaybedilmiş bir yenilemenin maliyetiyle kendi verilerinizi kullanarak karşılaştırın (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Yalnızca ortalamaları raporlamak.** Bir ortalama, geç kalmış işlerin uzun kuyruğunu gizler. Yüzdelik dilimleri, ramak kalan payını ve sayıyı raporlayın.
- **SLA'yı tutturması kolay olanın etrafında yazmak.** Rahatlık için seçilmiş bir hedef, hep yeşil bir rapor verir. Müşterinin ihtiyacından başlayın ve açığı açıkça gösterin.
- **Sayıyı iyileştirmek için saati duraklatmak.** Cömert duraklatma durumları SLA'yı kurguya çevirir. Duraklatma kurallarını yayımlayın, örnekleri denetleyin ve duraklatma payını raporlayın.
- **Silah olarak OLA'lar.** Bir sonraki ekibi suçlamak için kullanılan OLA, ekiplere işi geri sektirmeyi öğretir. Kaçırmaları kuyruk hakkında bilgi olarak ele alın ve akışı düzeltin.
- **Ceza güdümlü raporlama.** Ağır cezalar savunmacı sınıflandırmayı ve saat konusunda anlaşmazlıkları teşvik eder. Cezaları idareli kullanın ve yeniden açılma ve yeniden sınıflandırma oranlarıyla eşleştirin.
- **Yanıt oranı olmayan deneyim verisi.** Küçük ve kendi kendini seçmiş bir örneklemden gelen yüksek bir puan yanıltır. Her sonucun yanında yanıt oranını ve yanıtlayan karışımını gösterin.
- **Kimsenin gözden geçirmediği anlaşmalar.** Eskimiş anlaşmalar artık var olmayan bir hizmeti tanımlar. Gözden geçirmeleri takvime bağlayın ve kullanılmayanı emekliye ayırın.
- **Ekip anlaşmalarından bireysel hedefler türetmek.** Bir ekip SLA'sını kişisel kotalara bölmek, aceleyle kapatmalara ve sıralamaya yol açar. Anlaşmayı hizmet ve ekip düzeyinde tutun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Anlaşma tasarımı | Sözlü vaatler ya da kopyalanmış şablonlar; hedefler alışkanlıkla seçilir | Bazı yazılı SLA'lar; OLA'lar seyrek; saatler ekipler arasında farklı | Sonuç temelli hedefler, yüzdelik dilimler ve yazılı saat kuralları içeren kısa bir şablon | Anlaşmalar bir ritimde, müşteriyle birlikte gözden geçirilir ve SLO'lara bağlanır | SLA, OLA, tedarikçi sözleşmesi ve SLO katmanları koşullar değiştikçe birlikte ayarlanır |
| Ölçüm kalitesi | Elle sayımlar; ortalamalar; belgelenmemiş duraklatmalar | Bazı hizmetler için araç tabanlı karşılama; duraklatma kullanımı gözden geçirilmemiş | Tek tanım ve veri kaynağı; dağılımlar ve duraklatma payı gösterilir | Ramak kalanlar, ihlal nedenleri ve devir beklemeleri eğilim olarak izlenir ve örneklenir | Ekipler ve tedarikçiler arası veri uzlaştırılır; tanımlar kararlara bilgi vermeyi bıraktığında gözden geçirilir |
| Deneyim bağlantısı | SLA'ya bağlı kullanıcı geri bildirimi yok | Bazı hizmetler için anlık anketler | Temel yolculuklar için yanıt oranı gösterilen kısa bir anket | Deneyim hedefleri müşterilerle uzlaşılır ve karpuz açığı raporlanır | Deneyim ve operasyonel ölçümler, müşterilerle ortak iyileştirme çalışmasını yönlendirir |
| İyileştirmede kullanım | Şikâyetten sonra raporlanır | İhlaller ekip toplantılarında tartışılır | Sahipler ve eylemlerle aylık gözden geçirme | İhlal nedenleri finanse edilen iyileştirme ve sorun çalışmalarını besler | Müşteriler, tedarikçiler ve ekipler iyileştirmeyi aynı görünümden birlikte planlar |

## Kontrol listesi

- [ ] Her SLA, sonucunu, hedefini yüzdelik dilim ya da pay olarak ve popülasyonunu belirtir.
- [ ] Her hedef için başlangıç olayı, bitiş olayı ve izin verilen duraklatma koşulları yazılıdır.
- [ ] Müşteriye dönük her SLA'nın, içine sığan, her biri adı belli bir sahip ekibe sahip OLA'ları ya da tedarikçi sözleşmeleri vardır.
- [ ] İç hedefler, vaat edilen SLA hedeflerinden daha sıkıdır.
- [ ] Raporlar dağılımı, sayıyı, ramak kalan payını ve saat duraklatma payını gösterir.
- [ ] Duraklatılmış ve kapatılmış kayıtlardan bir örnek her ay okunur.
- [ ] Her temel hizmetin üzerinde uzlaşılmış düzeyde bir deneyim ölçümü vardır ve yanıt oranı gösterilir.
- [ ] Karpuz açığı izlenir ve bir müşteri temsilcisiyle gözden geçirilir.
- [ ] Anlaşmalar bir takvimle gözden geçirilir ve kullanılmadığında emekliye ayrılır.
- [ ] Hiçbir anlaşma metriği bireyleri sıralamak için kullanılmaz.

## Yapay zekâ istemleri

**Bir SLA'yı saat ve ifade sorunları açısından gözden geçirin.**

```text
[hizmet] için SLA metnimiz şu: [anlaşma metnini yapıştırın]. Hedefler
[hedef listesi] ve [araç] içinde ölçülüyor. Başlangıç olayındaki, bitiş
olayındaki ve duraklatma koşullarındaki belirsizlikleri, bir ortalamanın uzun bir
kuyruğu gizleyebileceği yerleri ve bir müşterinin bizden farklı okuyabileceği
ifadeleri belirle. Daha net ifadeler ve müşteriye sormam gereken soruları öner.
Kıyaslama değerleri ya da hukuki sonuçlar uydurma. Varsayımlarını listele.
```

**İki ekip arasında bir OLA taslağı hazırlayın.**

```text
[hizmet] için [SLA hedefi] SLA hedefimizi desteklemek üzere [gönderen ekip] ile
[alıcı ekip] arasında kısa bir operasyonel düzey anlaşmasına ihtiyacım var. Tipik
devir [açıklama] ve kuyruk [kuyruk adı veya araç]. Amacı, beklenen yanıtı, saat
kurallarını, anlaşmazlıkları çözme yolunu ve bir gözden geçirme tarihini içeren
tek sayfalık bir OLA taslağı hazırla. Tonu iş birlikçi tut ve ben istemedikçe
ceza önerme. Hedef değerleri uydurma; bana sor. Varsayımlarını listele.
```

**Verilerimizde bir karpuz açığı arayın.**

```text
[dönem] için [hizmet listesi] hizmetlerine ait SLA karşılama ve bir deneyim
ölçümünün özeti şu: [tabloyu yapıştırın]. SLA'nın karşılanmış, deneyimin kötü
göründüğü hizmetleri belirle ve saat duraklatmaları, öncelik yeniden
sınıflandırması ya da kötü seçilmiş bir ölçüm gibi araştırılacak olası
açıklamalar öner. Her biri için sorular ve okunacak küçük bir kayıt örneği öner.
Nedenleri varsayma ya da eşikler uydurma. Varsayımlarını listele.
```

**XLA için kısa bir deneyim anketi tasarlayın.**

```text
[hedef kitle] için [yolculuk, örneğin yeni bir dizüstü bilgisayar almak]
yolculuğuna bir deneyim ölçümü eklemek istiyoruz. [sayı] tarafsız soru, bunların
ne zaman ve nasıl gönderileceğine dair bir plan ve yanıt oranının ile yanıtlayan
karışımının nasıl raporlanacağını taslak olarak hazırla. Yanıtları yanlı hale
getirebilecek ifadeleri işaretle ve hedef düzeyin [müşteri temsilcisi rolü] ile
nasıl kararlaştırılacağını öner. Kıyaslama puanları uydurma. Varsayımlarını
listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir SLA satırının arkasındaki metriği hangi konunun tanımladığını ve yanında bulunması gereken korkuluğu bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konudaki düzenlemelerin şablonu, saat kurallarını ve oyunlaştırma tablosunu uyumlu tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- SLA müşteriye verilen bir sözdür, OLA ekipler arasındaki bir sözdür ve XLA üzerinde uzlaşılmış bir deneyim sonucudur; her birinin kendi ölçümü ve sahibi olmalıdır.
- Yüzdelik dilimleri, sayıları, ramak kalanları ve saat duraklatma payını raporlayın; çünkü ortalamalar ve sessiz duraklatmalar kötü hizmetin üzerinde yeşil raporlar üretir.
- OLA'ları SLA'dan türetin ve iç hedefleri vaatten daha sıkı tutun.
- Her SLA'yı aynı yolculuk için bir deneyim ölçümüyle eşleştirin ve karpuz açığını harekete geçilecek bir bulgu olarak raporlayın.
- Anlaşmaları müşteri odadayken bir takvimle gözden geçirin ve kimsenin kullanmadıklarını emekliye ayırın.
- Her anlaşma metriğini hizmetler ve ekipler düzeyinde tutun, bireyler düzeyinde asla.

## Kaynaklar ve ileri okuma

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
