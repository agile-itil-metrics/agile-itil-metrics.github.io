# Çevik ITIL neden ölçülür

**Hizmet geliştiren ve işleten ekipler, çalışmalarının kullanıcılara yardımcı olup olmadığını ve iyileşip iyileşmediğini görmek için küçük bir dürüst sayı kümesine ihtiyaç duyar; çeviklik ve ITIL bu resmin birbirinden farklı yarılarını sağlar.**

## Genel bakış ve motivasyon

Bir hizmeti geliştiren ve işleten her ekip gün boyu karar verir: sırada hangi işin olduğu, bir sürümün güvenli olup olmadığı, hizmet masasının bir kişiye daha ihtiyaç duyup duymadığı, bir kesintinin tek seferlik mi yoksa bir örüntü mü olduğu. Ölçüm olmadan bu kararlar hafızaya, anekdotlara ve en son kimin konuştuğuna dayanır. Yanlış ölçümle ise daha da kötü olabilirler, çünkü bir sayı, bir görüşün taşımadığı bir otorite taşır. Bu konu, ölçmenin neden çabaya değdiğini, her geleneğin neyi kattığını ve yanlış yapmanın neye mal olduğunu açıklar.

Bu kitapta iki gelenek buluşur. [Çevik yazılım geliştirme](https://en.wikipedia.org/wiki/Agile_software_development), 2001 tarihli Çevik Manifesto'da ifade edilen, çalışan yazılımı, müşterilerle yakın iş birliğini ve değişime yanıt vermeyi tercih eden bir değerler ve uygulamalar kümesidir. Ölçüm alışkanlıkları ampirik ve yereldir: bir ekip kendi akışını inceler, neyi teslim ettiğine bakar ve uyum sağlar. [ITIL](https://en.wikipedia.org/wiki/ITIL), aslen Information Technology Infrastructure Library (Bilgi Teknolojisi Altyapı Kütüphanesi), BT hizmetlerini tasarlama, sunma ve iyileştirme pratiği olan [BT hizmet yönetimi](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM) için bir rehber bütünüdür. Ölçüm alışkanlıkları hizmet odaklı ve ortaktır: üzerinde anlaşılmış hizmet düzeyleri, bir hizmet kataloğu (ITIL'in kendi yazımı “service catalogue”dur) ve bir sürekli iyileştirme disiplini. Çerçevenin 2019 sürümü olan ITIL 4'te ölçüm ve raporlama genel yönetim uygulamalarından biridir; sürekli iyileştirme ise hem bir uygulama hem de bir yol gösterici ilkedir. Çerçeve gelişmeye devam ettiğinden, sürüm ayrıntılarına güvenmeden önce çerçeve sahibinin güncel yayınlarını kontrol edin.

İki bakış yararlı biçimlerde birbirinden ayrılır. Çeviklik şunu sorar: “Doğru şeyi mi geliştiriyoruz ve iş ne kadar akıcı ilerliyor?” ITIL ise şunu sorar: “Hizmet, onu kullanan insanların ihtiyaçlarını karşılıyor mu; güvenilir, desteklenebilir ve karşılanabilir mi?” Yalnızca akışı ölçen bir ekip, kullanıcıların güvenilmez bulduğu bir hizmete hızla yayın yapabilir. Yalnızca hizmet düzeylerini ölçen bir ekip her hedefi tutturabilir, ama değişimi o kadar yavaş sunar ki hizmet geçerliliğini yitirir. [DevOps](https://en.wikipedia.org/wiki/DevOps) hareketi, geliştirmenin ve işletmenin tek bir sistem olduğu ve bu yüzden onu tarif eden sayıların birlikte okunması gerektiği gözleminden doğdu. Google'ın yayımladığı kitaplarda tarif ettiği disiplin olan [site güvenilirliği mühendisliği](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), güvenilirlik hedefleri ile değişim hızı arasına açık bir bağ ekler.

Üç terim kitap boyunca tekrar eder. **Ölçü**, işle ya da hizmetle ilgili bir şeyi tarif eder. **Metrik**, tanımlı bir formülü, birimi ve veri kaynağı olan bir ölçüdür; böylece onu hesaplayan iki kişi aynı yanıta ulaşır. **Koruyucu önlem (guardrail)**, ilki manipüle ediliyorsa hareket eden, önceden seçilmiş ikinci bir ölçü ya da uygulamadır. Koruyucu önlemlerin ardındaki uyarı [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law)dır: bir ölçü hedef haline geldiğinde insanlar işi değil sayıyı yönlendirmeye başlar (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

### Ölçüm ne için var

Ölçüm, dört işten birini yaptığında yerini hak eder.

- **Görmek.** Görünmez işi görünür kılmak: kimsenin bakmadığı kuyruk, üç ekibe yayılan olay örüntüsü, bir zaman aralığı için dokuz gün bekleyen değişiklik.
- **Karar vermek.** İki seçenek arasındaki bir tercihi bilgilendirmek; örneğin bir talep türünü otomatikleştirip otomatikleştirmemek ya da ona yol açan kusuru düzeltmek.
- **Öğrenmek.** Bir inancı sınamak. Ekip yeni bir inceleme uygulamasının yeniden işi azaltacağını düşünüyorsa, bir sayı bunun olup olmadığını söyleyebilir.
- **Hesap vermek.** Kullanıcılara, müşterilere ve liderlere hizmetin ne sunduğuna dair dürüst bir hesap vermek; böylece güven kanıta dayanır.

Bu dört işten hiçbirini yapmayan bir sayı yüktür. Sonraki konular bu sınamayı her metrik ailesi için tekrarlar.

### Hiçbir şeyi ölçmemenin bedeli

Hiçbir şeyi ölçmeyen bir ekip sayılardan arınmış değildir. Örtük sayılarla çalışır: en yüksek sesli şikâyet, en yakın tarihli kesinti, yöneticinin insanların ne kadar meşgul göründüğüne dair hissi. İki bedel doğar.

- **Yavaş geri bildirim.** Bir eğilimin erken göstereceği sorunlar sürpriz olarak gelir. Tekrarlanan temaslardaki sinsi bir artış, kriz haline gelene dek kötü şans gibi görünür.
- **İyileştirme için temel yok.** Bir ekip bir değişikliğin işe yarayıp yaramadığını söyleyemez; dolayısıyla hangi değişiklikleri tekrarlayacağını öğrenemez.

### Yanlış şeyleri ölçmenin bedeli

Yanlış şeyleri ölçmek çoğu zaman hiçbir şeyi ölçmemekten daha kötüdür, çünkü çabayı yanlış bir güvenle yönlendirir. Kapatılan bildirim sayıları, kod satırları, tamamlanan hikâye puanları ve kaydedilen saatlerin her biri toplaması ve grafiğe dökmesi kolay şeylerdir ve her biri kullanıcıya değerin değil etkinliğin ölçüsüdür. SPACE çerçevesinin ardındaki araştırma (Forsgren ve arkadaşları, 2021), üretkenliğin tek bir boyutla yakalanamayacağını ve yalnız başına kullanılan etkinlik sayılarının yanıltıcı olduğunu savunur.

## Temel ilkeler

- **Bir karar için ölçün.** Her metrik yazılı bir soruyu yanıtlar ve adı konmuş bir seçimi bilgilendirir. Kimse hangisi olduğunu söyleyemiyorsa, metriği emekliye ayırın.
- **İki bakışı birleştirin.** Teslimat akışını ve hizmet sağlığını aynı sayfada okuyun; böylece hız asla istikrar pahasına ya da tersi olarak satın alınmaz.
- **Önce sonuçları, sonra etkinliği ölçün.** Kullanıcıların daha iyi durumda olması sınavdır. Etkinlik sayıları hikâyeyi destekler ama anlatmaz (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”).
- **Ekipleri ve hizmetleri tarif edin, asla bireyleri değil.** Bireysel sıralamalar veriyi bozar ve iş birliğine zarar verir.
- **Küçük başlayın ve büyütün.** Elle az yönetilen bir metrik duvarından, güvenilen bir avuç metrik daha iyidir.
- **Önce ekibe gösterin.** İşi yapan insanlar ilk hedef kitledir ve verinin doğru olup olmadığının en iyi denetçisidir.
- **Değişmeyi bekleyin.** Tanımlar, metrikler ve hedefler, kararları bilgilendirmeyi bıraktıklarında gözden geçirilir.

## Metrik tanımları

Aşağıdaki metrikler ölçüm uygulamasının kendi sağlığını tarif eder; “neden ölçülür” sorusunun sınanabilir hale geldiği yer burasıdır. Bunları gösterebilen bir ekip, nedenlerle ölçüm yapıyordur. Zamana ya da sayıma dayalı her formül sınırlarını belirtir.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Karara bağlı metrik payı | Raporlanan metrikler içinde yazılı bir sorusu ve bilgilendirdiği adı konmuş bir kararı olanların payı | kayıtlı bir soru ve kararı olan metrikler / çeyrek sonunda panoda raporlanan metrikler | yüzde | Metrik kaydı (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”) | Ölçüm ve raporlama; sürekli iyileştirme | Retrospektif eylemleri; çalışma anlaşmaları | Üç aylık |
| Temel değer kapsamı | Üzerinde anlaşılan çekirdek ölçülerin her biri için kayıtlı bir başlangıç değeri olan kapsam içi hizmetlerin ve ekiplerin payı | son 12 ayda temel değeri kaydedilmiş hizmet-ölçü çiftleri / tüm kapsam içi hizmet-ölçü çiftleri; katalog dışındaki hizmetler hariç tutulur | yüzde | Hizmet kataloğu ve metrik kaydı | Hizmet düzeyi yönetimi; ölçüm ve raporlama | Paydaş gözden geçirmesi; ekip panoları | Üç aylık |
| Ölçüm eforu | Metrikleri elle toplamak, temizlemek ve raporlamak için harcanan personel zamanı | ay boyunca elle toplama ve raporlamaya kaydedilen saatler; bulgular üzerinde harekete geçmeye harcanan zaman hariç | ekip başına aylık saat | Zaman notları ya da kısa bir ekip anketi | Ölçüm ve raporlama | Retrospektif zaman bütçesi | Üç aylık |
| Gözden geçirmede veri yaşı | Grup bunu tartışmak üzere toplandığında en yeni veri noktasının ne kadar eski olduğu | gözden geçirme toplantısı zaman damgası eksi panodaki en son veri noktasının zaman damgası; metrik başına hesaplanır, medyan ve 85. yüzdelik olarak raporlanır | gün | Pano yenileme günlüğü | Ölçüm ve raporlama | Paydaş gözden geçirmesi | Her gözden geçirmede |
| İyileştirme takibi | Metrik gözden geçirmelerinden doğan iyileştirme eylemlerinden, üzerinde anlaşılan süre içinde tamamlanan ya da bilinçli olarak kapatılanların payı | ortaya çıkarıldıkları tarihten itibaren 90 gün içinde tamamlanan ya da gerekçeyle kapatılan eylemler / dönemde ortaya çıkarılan eylemler, iyileştirme kaydında günlüğe alınan tarihten sayılarak | yüzde | Sürekli iyileştirme kaydı ya da birikim listesi | Sürekli iyileştirme | Retrospektif eylem maddeleri | Üç aylık |

Ölçüm eforu bilinçli olarak yalnızca elle yapılan işi sayar. Veriyi okumaya ve ne yapılacağına karar vermeye harcanan zaman, çalışmanın amacıdır ve hariç tutulur; böylece toplamanın otomatikleştirilmesi ilerleme olarak görünür.

## Öneriler

### Amaçla başlayın

**1. Metrikten önce nedeni yazın.** Önerilen her ölçü için tek bir cümle yazın: “X'i Y'ye karar vermek için ölçüyoruz.” Cümle yazılamıyorsa, ölçü hazır değildir. Bu tek alışkanlık, gösteriş metriklerinin çoğunu bir panoya girmeden ortadan kaldırır.

**2. Hedef kitleyi ve kararı adlandırın.** Aynı sayı bir ekip, bir hizmet sahibi ve bir üst yönetici için farklı anlamlar taşır. Kimin okuyacağını ve hangi seçimi desteklediğini yazın. Bir ekibin çalışma görünümü yirmi ölçü taşıyabilir. Liderliğe giden küçük ve istikrarlı bir küme olmalıdır (bkz. Konu 11.1 “Hizmet metrikleri panosu tasarlamak”).

### Her iki geleneği kullanın

**3. Bir akış ölçüsünü bir hizmet ölçüsüyle eşleştirin.** İşin nasıl hareket ettiğinin en az bir ölçüsünü, örneğin teslim süresi ya da iş öğesi yaşı (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”), ve hizmetin nasıl davrandığının en az bir ölçüsünü, örneğin olay tekrarı ya da bir hizmet düzeyi göstergesi (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”), seçin. Bunları birlikte göstermek, hız ve istikrarın farklı grafiklere bakan farklı gruplarca yönetildiği yaygın başarısızlığı önler.

**4. Teslimatı ve operasyonu tek bir sistem olarak ele alın.** *Accelerate*'te (Forsgren, Humble ve Kim, 2018) özetlenen araştırma, yazılım teslimat performansının verimi ve istikrarı dengeleyen dört ölçüyle tarif edilebileceğini bildirir. Bir ekip hangi kümeyi benimserse benimsesin, değişimle ilgili ve olayla ilgili sayıları birbirine yeterince yakın tutun ki birindeki artış diğerine bakmayı tetiklesin (bkz. Konu 2.8 “DORA metrikleri”).

### Dürüstçe ölçün

**5. Birbirine karşı çeken birkaç ölçüyü tercih edin.** Tek bir sayı aşırı eniyilemeye davet eder; bu yüzden hız ile kalite, hacim ile sonuç, maliyet ile deneyim gibi çiftler seçin. Çiftin bir formül olması gerekmez. Aynı sayfada görünmesi gerekir.

**6. Herhangi bir şeyi değiştirmeden önce bir temel değer kaydedin.** Başlangıç değeri olmadan bir iyileştirme iddiası bir hikâyedir. Önce birkaç haftalık veri toplayın; ortalamanın yanı sıra değerlerin yayılımını da kaydedin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). Temel değerler ekipleri de korur: kötü bir çeyreğin, performanstaki bir düşüşü değil, işin sayılma biçimindeki bir değişikliği izlediğini gösterirler.

### Alışkanlığı oluşturun

**7. Karara uyan bir ritimle gözden geçirin.** Akış ölçüleri haftalık bir konuşmaya ya da sürekli yazılım teslimatının her adımında yapılan bir konuşmaya uygundur. Hizmet düzeyi ve maliyet ölçüleri aylık ya da üç aylık bir konuşmaya uygundur. Yanlış ritimle gözden geçirilen bir metrik ya gürültü yaratır ya da eylemin işe yarayacağı anı kaçırır.

**8. Döngüyü iyileştirme işiyle kapatın.** “İlginç” diyerek biten bir gözden geçirme verisini boşa harcamıştır. Her gözden geçirmeyi bir ya da iki adı konmuş eylemle, bir sahiple ve bir tarihle bitirin ve tamamlanmalarını izleyin. ITIL'in sürekli iyileştirme uygulaması ile çevik retrospektif, aynı disiplinin iki adıdır (bkz. Konu 9.5 “Sürekli iyileştirme metrikleri”).

**9. Sayıları neler için kullanmayacağınızı söyleyin.** Ekip metriklerinin bireyleri sıralamak ya da ödüllendirmek için kullanılmayacağını ve tanımların açıkça değiştirileceğini net biçimde belirtin. İnsanlar, nasıl kullanılacağına güvendiklerinde ölçümle iş birliği yapar (bkz. Konu 11.3 “Korku yaratmadan metrikleri devreye almak”).

## Manipülasyon yolları ve koruma önlemleri

Ölçümle ilgili metrikler bile manipüle edilebilir. Aşağıdaki her satır, metriği, onun genellikle nasıl çarpıtıldığı ile bunu ortaya çıkaracak denetimle eşleştirir.

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Karara bağlı metrik payı | Yüzdeyi yükseltmek için her metrik için sonradan inandırıcı bir soru ve karar yazmak | Karar günlüğünden örnek alın: metrik sayesinde neyin değiştiğini sorun ve girdinin yazıldığı tarihi metriğin ilk göründüğü tarihle karşılaştırın |
| Temel değer kapsamı | Bir temel değeri bir kez kaydedip bir daha yenilememek ya da elverişli sakin bir dönem seçmek | Her temel değerle birlikte belirtilmiş bir tarih aralığı ve örneklem büyüklüğü isteyin; hizmette büyük değişikliklerden sonra temel değerleri gözden geçirin |
| Ölçüm eforu | Toplama işini kayıt dışı yaparak ya da bir tedarikçiye kaydırarak hesap dışına çıkarmak | İnsanların raporlamanın ne kadar sürdüğüne dair söylediklerini ölçen kısa bir anketle karşılaştırın; tedarikçi eforunu gözden geçirmeye dahil edin |
| Gözden geçirmede veri yaşı | Altta yatan kayıtlar hâlâ eskiyken panoyu toplantıdan hemen önce yenilemek | Yenileme zamanının yanı sıra kaynak sistemdeki en yeni kaydın yaşını da raporlayın |
| İyileştirme takibi | Yüzdeyi tutturmak için eylemleri “artık ilgili değil” gerekçesiyle kapatmak ya da eylemleri önemsiz parçalara bölmek | Kapatılan eylemler için verilen gerekçeleri her çeyrek gözden geçirin ve eylemin hedeflediği ölçünün hareket edip etmediğini izleyin |

Sağlıklı bir okuma, gözle görülür biçimde canlı bir uygulamadır. Metrikler yazılı gerekçelerle kayda girer ve kayıttan çıkar, temel değerler günceldir, gözden geçirmelerden gelen eylemler bitirilir ya da dürüstçe bırakılır ve ekip veriyi toplamaktan çok onun üzerinde harekete geçmeye zaman harcar. Her satırda mükemmel bir puan, altta yatan kayıtlardan örnek almak için bir uyarıdır, kutlama nedeni değildir.

## Ödünleşimler: artılar ve eksiler

| Seçim | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Az ölçmek | Düşük maliyet; düşük manipülasyon riski; yüksek güven | Kör noktalar; kararlar anekdotlara dayanır |
| Çok ölçmek | Geniş kapsam; birçok cephede erken uyarı | Dikkat dağılır; yönetişim zayıftır; toplama maliyeti artar |
| Birleşik görünüm | Hız ile istikrarı dengeler; ortak sahipliği destekler | Ekipler arasında üzerinde anlaşılmış tanımlar ve bakılacak ortak bir yer gerektirir |
| Metriklerde hedefler | Yön ve aciliyet verir | Manipülasyona davet eder; eşleştirilmiş bir koruyucu önlem gerektirir |
| Hedefsiz metrikler | Dürüst tartışmayı teşvik eder | Kimsenin harekete geçmediği raporlara kayabilir |

Pratik yanıt, küçük bir birleşik kümedir; hedefler ise yalnızca iyi anlaşılmış ve kullanıcıların talep ettiği durumlar için, örneğin bir hizmet düzeyi hedefi için, idareli kullanılır. Geri kalan her şey tartışılacak bir sorudur. Amaç, kararlardan muhakemeyi çıkarmak değil, ona daha iyi kanıt sağlamaktır.

## Takımınızla tartışılacak sorular

**1. Geçen çeyrekte, bir sayının gerçekten değiştirdiği hangi kararı verdik?**
Gruptan belirli kararları hatırlamasını, ardından hangilerinin (varsa) veriye dayandığını bulmasını isteyin. Liste kısaysa bu yararlı bir bilgidir: mevcut raporlamanın büyük bölümünün yerini hak etmediği anlamına gelir. Kolaylaştırıcı, kararları gerçekten değiştiren metrikleri kaydetmelidir, çünkü bunlar korunmaya adaydır. Ardından hangi kararların içgüdüyle alındığını ve bir sayının yardımcı olup olamayacağını sorun.

**2. Mevcut sayılarımızdan hangileri etkinliği, hangileri kullanıcılara değeri tarif ediyor?**
Mevcut panoyu bir ekrana koyun ve her metriği etkinlik (kapatılan bildirimler, çalıştırılan derlemeler, tamamlanan puanlar) ya da sonuç (çalışabilen kullanıcılar, tekrarlamayan sorunlar) olarak işaretleyin. Sınırdaki durumlar üzerinde uzun uzun tartışmayın. Amaç dengeyi görmektir. Yalnızca etkinlik varsa, etkinliğin hangi sonucu üretmesi gerektiğini ve ekibin bunu nasıl anlayacağını sorun.

**3. Teslimat ve operasyon sayıları bugün nerede duruyor ve ikisine de aynı kişiler mi bakıyor?**
Her ölçü ailesinin nerede saklandığını ve kimin gözden geçirdiğini izleyin. Ekipler çoğu zaman değişiklik verisinin bir grup, olay verisinin başka bir grup tarafından, ortak bir toplantı olmaksızın gözden geçirildiğini görünce şaşırır. İkisi hiç birlikte görülmediği için hangi örüntünün gözden kaçabileceğini sorun. İkisinin buluştuğu tek bir yer ya da tek bir toplantı üzerinde anlaşın.

**4. Neyi ölçmediğimiz için bilmemiş olmaktan pişman oluruz?**
Metrik yerine kaygıları davet edin: “Şunu fark etmeyeceğimizden korkuyorum...” Yanıtlardan aday ölçülere ve ardından bunları gösterecek en ucuz veriye doğru çalışın. Listeyi kısa tutun.

**5. Sayılarımızı liderliğe göstermeden önce onlar hakkında neye inanmamız gerekir?**
Veriyi neyin güvenilir kıldığını tartışın: istikrarlı tanımlar, örneklemeyle doğruluk denetimleri ve hariç tutmalar üzerinde uzlaşma. Ekibin küçük de olsa tüm şüphelerini, örneğin tutarsız kullanılan bir durum gibi, listeleyin. Daha geniş paylaşımdan önce hangi şüphelerin giderilmesi gerektiğine ve hangilerinin sayıyla birlikte açıklanabileceğine karar verin.

**6. Önümüzdeki çeyrek için yalnızca üç metrik tutabilseydik, hangileri olurdu ve neden?**
Kısıt, öncelik belirlemeyi zorlar. Herkesten üç tane yazmasını isteyin, sonra karşılaştırın. Sonuçlarda uzlaşmayı, etkinlik ölçülerinde ayrışmayı arayın. Üçünün her birinin hangi koruyucu önleme ihtiyaç duyduğunu sorun.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri en çok hızlı, yerel geri bildirimden yararlanır: işin ne kadar beklediği, nerede kuyruğa girdiği, değişikliklerin ne sıklıkla sorun çıkardığı. Kendileri için zengin bir çalışma görünümü tutmalı ve dışarıya küçük bir küme yayımlamalıdır. Ekipler, değerin vekili olarak çıktı hacmini ölçme çekimine direnmeli ve hız ölçülerini en baştan kalite ölçüleriyle eşleştirmelidir (bkz. Konu 2.1 “Akış ölçümleri”).

### Hizmet ve operasyon takımları

Operasyon ekipleri zaten sayılarla yaşar: hacimler, yanıt ve çözüm süreleri, kullanılabilirlik. Fırsat, ne olduğunu raporlamaktan nedenini açıklamaya geçmektir; bunu tekrar, kök nedenler ve plansız işin payı üzerinden yaparlar (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”). Ayrıca verilerini teslimat ekipleriyle planlama konuşmalarına taşımalıdırlar; böylece güvenilirlik işi şikâyetle değil kanıtla savunulur.

### Liderlik ve yönetişim

Liderler teşvikleri çoğu zaman tesadüfen, sordukları sorularla belirler. “Bu neden kırmızı?” diye soran bir lider ekiplere kırmızıyı saklamayı öğretir. “Ne öğrendiniz ve neye ihtiyacınız var?” diye soran bir lider ekiplere dürüstçe raporlamayı öğretir. Yönetişim organları sayıların yanı sıra kaydı, koruyucu önlemleri ve iyileştirme eylemlerini de istemeli ve kötü bir sayının ortaya çıkardığı işi finanse etmelidir (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

### Müşteriler ve kullanıcılar

Kullanıcılar hizmeti iç ölçülere göre değil, işe yarayıp yaramadığına ve sorunların giderilip giderilmediğine göre yargılar. Anketlerdeki, şikâyetlerdeki ve yorumlardaki kendi sözleri, ekibin önemli olanı ölçüp ölçmediğine dair bir denetim olarak operasyonel sayıların yanında yer almalıdır (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci; bir hizmet masası, bir operasyon ekibi ve mağaza vitrinini, ödemeleri ve sevkiyat hizmetlerini geliştiren üç ürün ekibi işletir. Aşağıdaki sayılar örnekleyicidir.

Liderlik, teslimat ekipleri her gün yayın yaptıklarını ve operasyon ekibi kullanılabilirliğin yüzde 99,9 olduğunu raporladığı halde müşterilerin neden yavaş ödeme adımından şikâyet ettiğini sorar. Her grup kendi ölçülerine göre haklıdır ve kimse bunlara birlikte bakmamıştır. Hizmet yönetimi başkanı, ekiplerin zaten topladığı verilerden oluşan, ödeme hizmeti için tek sayfalık birleşik bir görünüm önerir.

Görünüm son on iki hafta için dört şey gösterir. Değişiklik teslim süresinin medyanı 2 gün, 85. yüzdeliği 9 gündür. Değişiklik başarısızlık oranı yüzde 8'dir. Ödeme adımındaki olayların sayısı 14'tür ve bunların 6'sı tek bir nedeni, yani yakın tarihli bir sürümle gelen yavaş bir veritabanı sorgusunu paylaşır. Geri kazanma süresinin medyanı 40 dakikadır, ancak 95. yüzdelikteki sayfa yüklenme süresi altı hafta boyunca sinsice artmıştır; hizmet teknik olarak ayakta kaldığı için kullanılabilirlik rakamı bu örüntüyü göstermez.

Grup gizli kalanı görür. Kullanılabilirlik “ödeme adımı yanıt veriyor” olarak ölçülüyordu, kullanıcılar ise “ödeme adımı yeterince hızlı yanıt veriyor” olarak deneyimliyor. Ürün ekibi ve operasyon ekibi, ödeme adımı için, ürün sahibinin müşteri yorumlarını okuduktan sonra belirleyeceği bir hedefle bir gecikme göstergesi eklemeyi, tekrar eden olay nedenini bir sahibi olan bir sorun kaydı olarak ele almayı ve birleşik görünümü iki haftada bir gözden geçirmeyi kabul eder. Bir kararı kaydederler: sorguyu düzeltmek ve yayın hattına bir performans denetimi eklemek için sürekli yazılım teslimatının bir diliminde yeni ödeme özelliklerine ara vermek.

Bir ay içinde bir manipülasyon riski ortaya çıkar. Operasyon ekibi, 14 olaydan ikisinin “hizmet talebi” olarak açıldığını fark eder, çünkü talep kategorisinin çözüm hedefi yoktur. Ekip, olaylar üzerindeki bir hedefin insanları sınırdaki vakaları talep olarak sınıflandırmaya ittiğini anlar. Yeniden sınıflandırılan payı görünüme ekler ve her ay on bildirimden örnek alır. Değişiklikten sonra 95. yüzdelikteki sayfa yüklenme süresi düşer, tekrarlayan olaylar azalır ve ekip görünümü tutar, çünkü o bir kararı değiştirmiştir.

## Sektör mercekleri

**Girişim (startup).** Küçük ekiplerin az süreci ve güçlü güveni vardır; bu yardımcı olur. Risk, ihtiyaç doğmadan büyük bir kurumsal panoyu içeri almaktır. Kurucuların haftalık okuyacağı iki ya da üç ölçüyle başlayın; örneğin değişiklik teslim süresi, basit bir güvenilirlik göstergesi ve doğrudan kullanıcı geri bildirimi; ve tanımlarını yazın.

**Küçük işletme.** BT'yi yöneten kişi çoğu zaman sahibine rapor verir ve tek bir müşteri şikâyeti herhangi bir grafikten daha ağır basabilir. Kümeyi küçük tutun, araçlarınızın zaten ürettiği verileri kullanın ve kullanıcılarla konuşmayı tercih edin. Tedarikçi tarafından sağlanan raporlara biraz dikkatle yaklaşın, çünkü tedarikçilerin kendi teşvikleri vardır.

**Kurumsal.** Ölçek, karşılaştırılabilir sayılara olan talebi ve onları manipüle etme baskısını çoğaltır. Yazılı tanımları olan küçük bir standart küme kullanın, ekip çalışma görünümlerini toplulaştırılmış görünümlerden ayrı tutun ve çok farklı türde hizmetler işleten ekipleri karşılaştırmaktan kaçının. Bir metrik kaydı, ortak tanımlar ve bir gözden geçirme ritmi vazgeçilmez hale gelir.

**Kamu sektörü ve hükümet.** Sözleşmeye bağlı hizmet düzeyleri, denetim gereklilikleri ve kamuya raporlama yükümlülükleri bazı ölçüleri pazarlık dışı kılabilir. Bunları tasarım girdisi olarak ele alın: karşılayın, yanlarında bir koruyucu önlem gösterin ve kullanılan tanımları belirtin. Kamusal hesap verebilirlik kötü haberi saklamanın bedelini artırır; bu nedenle açık sözlü raporlama için güvenli iç kanallar kurun (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Ölçmenin motivasyonu, daha düşük maliyetle daha iyi kararlardır. Ölçüm önceliklendirmeyi destekler, israfın nerede olduğunu gösterir, hizmetteki düşüşe dair erken uyarı verir ve yatırım talepleri için kanıt sağlar.

Maliyetin birkaç bileşeni vardır. Çoğu zaman zaten sahip olunan araçlar vardır: bildirim sistemi, iş takip sistemi, sürüm kontrolü ve izleme. Metrikleri tanımlamak, görünümler oluşturmak ve bir kayıt tutmak için personel zamanı vardır. En büyüğü ve en değerlisi olan, gözden geçirme toplantılarının yinelenen maliyeti vardır. Bir ölçüm uygulamasının toplam sahip olma maliyeti (TCO) aynı zamanda bulgular üzerinde harekete geçmenin maliyetini de içerir, çünkü düzeltme için bütçesi olmayan bir içgörünün getirisi azdır.

Getiriyi evrensel bir rakamla ifade etmek zordur ve bu kitap bir rakam uydurmaz. İş gerekçesini kurmanın yararlı bir yolu, bir değişiklikten önce ve sonra kendi temel değerlerinizi ölçmektir: elle raporlamaya harcanan zaman, tekrarlanan temaslar, verinin yanlış olması nedeniyle geri alınan kararlar ve geç bulunan sürprizler. Beklenecek örüntü daha az sürpriz, daha kısa tartışmalar ve operasyonel sayılarla kullanıcı deneyimi arasında daha iyi uyumdur. Harcanan eforun kazanılan eforla basit bir [yatırım getirisi](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) karşılaştırması makul bir başlangıç noktasıdır ve Konu 7.7 “Yatırım getirisi ve iş gerekçesi” yöntemi ele alır.

## Anti-desenler ve tuzaklar

- **Her şeyin panosu.** Onlarca grafik, sahipsiz, kararsız. Birkaçını seçin, her birinin hangi kararı bilgilendirdiğini adlandırın ve geri kalanı emekliye ayırın.
- **Tek taraflı ölçüm.** İstikrarsız hız ya da ilgisiz istikrar. Bir akış ölçüsünü bir hizmet ölçüsüyle eşleştirin.
- **İnsanları ölçmek.** Bireysel sıralamalar veriyi bozar ve yardımlaşmayı caydırır. Ekipler ve hizmetler düzeyinde raporlayın.
- **Temel değerden önce hedefler.** Başlangıç değeri olmayan bir hedef bir tahmindir. Önce bir temel değer kaydedin ve hedefleri en az bir gözden geçirme döngüsünden sonra belirleyin.
- **Eylemsiz raporlar.** Hiçbir değişiklik üretmeyen bir gözden geçirme insanlara onu görmezden gelmeyi öğretir. Her gözden geçirmeyi adı konmuş bir eylemle, sahiple ve tarihle bitirin.
- **Sessiz tanım değişiklikleri.** Eğilim çizgileri anlamsızlaşır. Her değişikliği nedeniyle birlikte kaydedin ve grafik üzerinde işaretleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Amaç ve seçim | Metrikler, araç sunduğu için seçilir | Bazı metriklerin belirtilmiş bir amacı vardır | Raporlanan her metriğin yazılı bir sorusu ve kararı vardır | Metrik kümesi kararlara göre gözden geçirilir ve kullanılmadığında emekliye ayrılır | Metrikler, kullanıcılar ve tedarikçilerle ortak sonuçlar etrafında birlikte tasarlanır |
| Çevik ve ITIL'in birleşik görünümü | Teslimat ve hizmet verileri ayrı tutulur | Birkaç ekip ikisine birlikte bakar | Hizmet başına akış ve hizmet sağlığının ortak görünümü | Birleşik görünüm eğilim olarak izlenir ve iyileştirme işine bağlanır | Ekipler arası ve tedarikçi görünümleri kullanıcı sonuçlarına bağlanır |
| Temel değerler ve efor | Temel değer yok; elle toplama | Bazı hizmetler için temel değerler; karma toplama | Çekirdek ölçüler için temel değerler kayıtlı; toplama çoğunlukla otomatik | Temel değerler değişikliklerden sonra yenilenir; efor izlenir ve azaltılır | Temel değerler ve tanımlar, hizmetler değiştikçe sürekli ayarlanır |
| İyileştirmede kullanım | Sayılar not edilir ve unutulur | Kötü haftalardan sonra ara sıra eylemler | Her gözden geçirme adı konmuş eylemlerle biter | Eylem takibi ölçülür ve finanse edilir | İyileştirme herkesten gelir ve ekipler arasında görünürdür |

## Kontrol listesi

- [ ] Raporlanan her metriğin yazılı bir sorusu ve bilgilendirdiği adı konmuş bir kararı vardır.
- [ ] Her görünümün hedef kitlesi adlandırılmıştır ve ekip görünümleri liderlik görünümlerinden ayrıdır.
- [ ] En az bir akış ölçüsü ve bir hizmet ölçüsü aynı sayfada görünür.
- [ ] Her çekirdek ölçü için tarih aralığı ve örneklem büyüklüğü olan bir temel değer vardır.
- [ ] Her zaman ölçüsü, saatin nerede başlayıp nerede durduğunu belirtir.
- [ ] Her metriğin yanında gösterilen bir koruyucu önlemi vardır.
- [ ] Elle toplama eforu bilinir ve en büyük elle yapılan iş otomasyon açısından gözden geçirilmiştir.
- [ ] Ekipler kendi verilerini liderlikten önce görür.
- [ ] Hiçbir bireysel sıralama, ücret ya da disiplin bir metriğe bağlanmaz.
- [ ] Her gözden geçirme en az bir adı konmuş iyileştirme eylemi, sahip ve tarihle biter.
- [ ] Geçen yıl içinde en az bir metrik emekliye ayrılmış ya da yeniden tanımlanmıştır.

## Yapay zekâ istemleri

**Her metrik için amaç ifadesini taslak haline getirin.**

```text
Biz [ekip adı] olarak [hizmet ya da ürün] için sorumluyuz. Mevcut panomuz şu
metrikleri gösteriyor: [tanımlarıyla metrik listesi]. Her biri için “X'i Y'ye
karar vermek için ölçüyoruz” biçiminde tek cümlelik bir ifade taslağı hazırla
ve verdiklerimden bir karar çıkaramadığın metrikleri işaretle. Her ifadeyi
tamamlamak için yanıtlamam gereken soruları öner. Kıyaslama değerleri ya da
hedefler uydurma. Varsayımlarını listele.
```

**Teslimat ve hizmet görünümlerini birleştirin.**

```text
[hizmet adı] için teslimat ölçülerimiz [tanımları ve veri kaynaklarıyla liste]
ve hizmet ölçülerimiz [tanımları ve veri kaynaklarıyla liste]. İkisini birlikte
gösteren, her hız ölçüsünü bir istikrar ya da kalite ölçüsüyle eşleştiren ve
her birinin ihtiyaç duyduğu verileri not eden tek sayfalık bir yerleşim öner.
İki küme arasında çelişen tanımları belirle. Değer ya da eşik uydurma.
Varsayımlarını ve belirleyemediğin her şeyi listele.
```

**Bir temel değer planlayın.**

```text
[uygulama ya da araç] değişmeden önce [hizmet ya da ekip] için [metrik adı]
metriğinin temel değerini kaydetmek istiyoruz. Veri [kaynak] kaynağından
geliyor. Verinin ne kadar süre toplanacağını, hangi özet istatistiklerin
(yüzdelikler dahil) kaydedileceğini, neyin neden hariç tutulacağını ve dönem
boyunca işin sayılma biçimindeki değişikliklerin nasıl not edileceğini öner.
Değer varsayma. Varsayımlarını ve gördüğün veri kalitesi risklerini listele.
```

**Eyleme götüren bir gözden geçirme hazırlayın.**

```text
[Hedef kitle] ile [haftalık, aylık ya da üç aylık] olarak [metrik kümesi]
gözden geçirmesi yapıyoruz. Sayıları okumaktan, her biri bir sahip ve bir
tarihle birlikte bir ya da iki iyileştirme eylemi seçmeye geçen bir gündem ve
kısa bir kolaylaştırma soruları kümesi taslağı hazırla. Her metriğin koruyucu
önlemine karşı manipülasyonu denetlemek için bir yönlendirme ekle. Veri
uydurma. Grup ve kültürü hakkındaki varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): düşündüğünüz bir metriği ve eşleştirilmiş koruyucu önlemini kapsayan konuyu bulmak için kullanın.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): yeni ya da gözden geçirilmiş bir metrik konusunun amaç ifadesini, manipülasyon vektörünü ve koruyucu önlemi koruduğunu denetlemek için kullanın.

## Temel çıkarımlar

- Görmek, karar vermek, öğrenmek ve hesap vermek için ölçün; bu işlerin hiçbirini yapmayan bir sayı yüktür.
- Çeviklik akış üzerine hızlı, yerel geri bildirim sağlar; ITIL güvenilirlik ve değerin ortak, hizmet düzeyindeki görünümlerini sağlar. İkisini birlikte okuyun.
- Hiçbir şeyi ölçmemek kararları anekdotlara bırakır, yanlış şeyleri ölçmek ise çabayı yanlış bir güvenle yönlendirir.
- Her biri yazılı bir amaca, bir temel değere ve bir koruyucu önleme sahip birkaç metrikle başlayın.
- Ekipleri ve hizmetleri tarif edin, asla bireyleri değil; ekibin verisini önce kendisinin görmesine izin verin.
- Döngüyü kapatın: eylem üretmeyen bir gözden geçirme veriyi boşa harcar.

## Kaynaklar ve ileri okuma

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
