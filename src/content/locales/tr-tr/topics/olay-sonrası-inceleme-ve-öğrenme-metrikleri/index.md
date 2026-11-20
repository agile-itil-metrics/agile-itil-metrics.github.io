# Olay sonrası inceleme ve öğrenme metrikleri

**Yazılıp, dosyalanıp unutulan bir inceleme kimseye bir şey öğretmemiştir. Bu yüzden incelemelerin yapılıp yapılmadığını, iyi olup olmadığını, eylemlerinin bitip bitmediğini ve aynı nedenlerin geri gelmeyi bırakıp bırakmadığını ölçün ve insanlar doğruyu söylemeye devam etsin diye tüm uygulamayı suçlamasız tutun.**

## Genel bakış ve motivasyon

Her hizmet bazen başarısız olur. Sürekli daha iyi hale gelen bir takımı en kötü haftasını tekrarlayan bir takımdan ayıran şey, başarısızlıktan sonraki günlerde olanlardır. Bir [olay sonrası inceleme](https://en.wikipedia.org/wiki/Postmortem_documentation), bir olayın ya da ramak kalanın yazılı anlatımıdır: ne olduğu, nasıl tespit edilip ele alındığı, onu mümkün kılan koşulların neler olduğu ve takımın neyi değiştireceği. ITIL bu etkinliğe olay sonrası inceleme der ve bu konu iki adı birbirinin yerine kullanır. Düzenli bir takım yansıtması, bir kesinti yerine sıradan işe bakan yakın bir akrabadır.

Bu konu, bu öğrenme döngüsünün işleyip işlemediğini söyleyen ölçümleri ele alır. Dört soru sorar. Yapılması gereken incelemeler gerçekten yapılıyor mu? Gerçek bir şey bulacak kadar iyiler mi? Ürettikleri eylemler bitiyor mu? Ve aynı neden yine de geri geliyor mu? Diğerlerinin altından beşinci bir soru geçer: insanlar gerçekte ne olduğunu anlatacak kadar güvende hissediyor mu?

Konu iki komşunun arasında yer alır ve onları yinelemekten kaçınır. Büyük olay metrikleri (bkz. Konu 3.4 “Büyük olay metrikleri”), ilan edilmiş büyük olaylar için incelemenin zamanlamasını ve eylemlerinin takibini ölçer ve bu iki ölçümün bu dar bağlamdaki yeri orasıdır. Sorun yönetimi metrikleri (bkz. Konu 4.1 “Sorun yönetimi metrikleri”), sorun kaydına, bilinen hataya ve kalıcı çözüme kadar geçen süreye sahiptir. Bu konu görüşü olayların her ciddiyet düzeyine, ramak kalanlara ve takım retrospektiflerine genişletir ve öğrenmenin kendi kalitesine sahip çıkar: kapsam, derinlik, tüm kaynaklarda eylem kapatma, nedenlerin tekrarı ve verileri dürüst tutan suçlamasız sinyaller.

### Bu konuda kullanılan terimler

- **Olay sonrası inceleme:** hizmet geri getirildikten sonra bir olayın yapılandırılmış, suçlamasız bir incelemesi, yazılı bir kayıtla sona erer.
- **Ramak kala:** bir olaya ya da zarara yol açabilecek ancak açmayan bir olay, örneğin bir test ortamında yakalanan başarısız bir dağıtım ya da kullanıcılar fark etmeden dakikalar önce çalan bir uyarı.
- **Eylem maddesi:** adlandırılmış bir sahip takımı, bir bitiş tarihi ve ne zaman tamamlandığını anlamanın bir yolu olan belirli bir değişiklik.
- **Katkıda bulunan etken:** olayı mümkün kılan ya da daha kötü hale getiren bir koşul. Çoğu olayın birkaç tanesi vardır. Tek bir “kök neden” çoğu zaman bir basitleştirmedir ve [kök neden analizi](https://en.wikipedia.org/wiki/Root_cause_analysis) en iyi, bir suçlu için değil, koşullar için yapılan bir arama olarak ele alınır.
- **Neden sınıfı:** tekrarı fark etmek için kullanılan, kısa ve üzerinde anlaşılmış bir listeden kararlı bir etiket (örneğin “kapasite sınırı”, “yapılandırma kayması”, “eksik izleme”, “belirsiz sahiplik”). Bir sistem koşulunu tanımlar, asla bir kişiyi değil.
- **Suçlamasız:** makul bir kişinin neden öyle davranmasına sistemin nasıl izin verdiğini soran ve kimin cezalandırılacağını sormayan bir inceleme tarzı. Bu bir uygulamadır ve dürüst hataların öğrenme sayıldığı, pervasız davranışların ise ayrıca ele alındığı [adil kültür](https://en.wikipedia.org/wiki/Just_culture) fikrine bağlıdır.
- **Bilgi Teknolojisi Altyapı Kitaplığı (ITIL):** BT hizmet yönetimi (ITSM) için yaygın kullanılan çerçeve. Bu konu, uygulamalara ITIL 4 (2019) içinde anlatıldığı gibi atıfta bulunur ve kitabın tamamı Ekim 2026 itibarıyla tarihlendirilmiştir. Bkz. [ITIL](https://en.wikipedia.org/wiki/ITIL).

### Çevik ve ITIL görüşleri nasıl ayrışır

ITIL yapı katkısı sağlar. ITIL 4'te olay yönetimi hizmeti geri getirir, sorun yönetimi nedenleri bulup yöneterek olayların olasılığını ve etkisini azaltır ve sürekli iyileştirme öğrenilenleri finanse edilen değişikliğe çevirir. İnceleme, ilk ikisi ile üçüncü arasındaki menteşedir. ITIL, incelemenin yapılıp yapılmadığını, gerekli yerde bir sorun kaydının açılıp açılmadığını ve iyileştirmenin kaydedilip kaydedilmediğini sorma eğilimindedir.

Çevik ve [site güvenilirliği mühendisliği (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) gelenekleri alışkanlıklar katar. İncelemeler suçlamasızdır, kısadır, takımın ötesindeki okurlar için yazılır ve geniş biçimde paylaşılır. Bir sürekli iyileştirme alışkanlığı olan düzenli takım yansıtması, bir sonraki adımda neyin değişeceğini sorar ve küçük, sık ayarlamaya yönelik [çevik](https://en.wikipedia.org/wiki/Agile_software_development) tercih, tek ve büyük bir iyileştirme programının yerini alır. Google'ın *Site Reliability Engineering* kitabı olay sonrası inceleme kültürüne bir bölüm ayırır ve bir inceleme sürecinin ancak çevresindeki kültür kadar iyi olduğunu savunur.

Birlikte kullanıldığında iki görüş güçlüdür. ITIL size kapsam kuralları ve eylemin yaşayacağı bir yer verir. Çevik ve SRE alışkanlıkları size dürüstlük ve hız verir. Birlikte ölçüldüklerinde döngünün kapanıp kapanmadığını gösterirler.

## Temel ilkeler

- **Ürün belge değil, öğrenmedir.** Bir inceleme, sistemde, süreçte ya da ortak anlayışta bir şey değiştiğinde başarılı olmuştur. Evrakı değil, değişikliği sayın.
- **Suçlamasızlık, iyi veri için bir ön koşuldur.** İnsanlar suçlanmaktan korkarsa zaman çizelgesi zayıf kalır, katkıda bulunan etkenler derli toplu görünür ve aynı olay geri döner. Başka bir şeyi ölçmeden önce açık sözlülüğü koruyun.
- **Hacmi değil, takibi ve tekrarı ölçün.** İnceleme sayısı çok az şey söyler. Bitirilen eylemlerin payı ve gitmiş kalan nedenlerin payı çok şey söyler.
- **Metrikleri takım ve sistem düzeyinde tutun.** Bir inceleme koşullarla ilgilidir. İncelemeleri, eylemleri ya da hataları asla kişi başına saymayın ve bu sayıları performans görüşmelerinde asla kullanmayın.
- **İncelemeyi boyutlandırın.** Her olay uzun bir belgeyi hak etmez. Tetikleyicileri etkiye ve öğrenme değerine göre belirleyin ve küçük bir olay kısa bir inceleme alsın.
- **Eylemlerin dürüstçe yarışmasına izin verin.** Bir eylem maddesi iştir. Diğer işlerle aynı birikim listesine aittir, onlara karşı sıralanır ve kaydedilmiş bir gerekçeyle reddedilebilir.
- **İncelemeleri okuyun.** Sayılar sorunun yerini bulur. Bir örneklemi okuyan insan, incelemelerin iyi olup olmadığını söyler.

## Metrik tanımları

Aşağıdaki metrikler, bir hizmet ya da bir takım grubu için öğrenme döngüsünü tanımlar. Her biri neyin sayıldığını, saatlerin nerede başlayıp durduğunu ve nelerin dışarıda bırakıldığını belirtir. Süre ölçümleri ortalama olarak değil, bir ortanca ve yüksek bir yüzdelik dilim (örneğin 85.) ile en eski açık kalemin yaşı olarak gösterilmelidir (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| İnceleme kapsamı | Nitelikli olaylardan tamamlanmış bir inceleme alanların payı | Üzerinde anlaşılmış pencere içinde yayımlanmış incelemesi olan nitelikli olaylar / dönemde kapatılan nitelikli olaylar. Nitelikli olaylar yazılı tetikleyicileri karşılayanlardır. Dönem sonunda hâlâ açık olan, pencere içindeki olaylar dışarıda bırakılır. | yüzde | İnceleme deposuyla birleştirilmiş ITSM aracı olay kayıtları | Olay yönetimi; sorun yönetimi | Düzenli takım yansıtması; takım çalışma anlaşmaları | Aylık |
| İnceleme kalite puanı | Yayımlanmış bir incelemenin kısa yazılı bir standardı karşılayıp karşılamadığı | Kontrol listesi maddelerinin en az [üzerinde anlaşılmış sayı] kadarını karşılayan örneklemdeki incelemeler / örneklemdeki incelemeler. Örneklem, her çeyrekte rastgele seçilen sabit sayıda incelemedir ve sahip takımın dışından biri tarafından puanlanır. | yüzde | İnceleme deposundan puanlama tablosuyla üç aylık örneklem | Sürekli iyileştirme; sorun yönetimi | Bir inceleme için bitti tanımı | Üç aylık |
| Eylem kapatma oranı | İnceleme eylemlerinden bitiş tarihine kadar tamamlananların payı | Bitiş tarihine kadar tamamlanan ya da (gerekçeyle) resmen reddedilen eylemler / dönemde bitiş tarihi gelen eylemler. Saat, inceleme yayımlandığında başlar ve sahip takım eylemi bitti olarak işaretleyip bir gözden geçiren bunu onayladığında durur. “Yapılmayacak” olarak kapatılan eylemler ayrıca sayılır ve bildirilir. | yüzde | İncelemeye bağlı takım birikim listesi ya da ITSM iyileştirme sicili | Sürekli iyileştirme; sorun yönetimi | Takım birikim listesi; iyileştirme eylemleri | Aylık |
| Açık eylem yaşı | Hâlâ açık olan inceleme eylemlerinin yaşı | Her açık eylem için, bugün eksi incelemesinin yayımlanma tarihi. Ortancayı, 85. yüzdelik dilimi ve en eskiyi bildirin. | gün | Takım birikim listesi ya da iyileştirme sicili | Sürekli iyileştirme | İş kalemi yaşı; yaşlanan devam eden iş | Aylık |
| Neden tekrar oranı | Birincil neden sınıfı aynı hizmetin daha önceki bir olayıyla eşleşen olayların payı | Birincil neden sınıfı, aynı hizmet için önceki on iki ayda kapatılmış bir incelemeyle eşleşen dönemdeki olaylar / dönemde kaydedilmiş bir neden sınıfı olan olaylar. Neden sınıfı kaydedilmemiş olaylar dışarıda bırakılır ve ayrıca sayılır. | yüzde | Olay kayıtlarıyla birleştirilmiş inceleme deposu neden sınıfı alanı | Sorun yönetimi; olay yönetimi | Kaçan hata analizi; retrospektif temaları | Üç aylık |
| Ramak kala bildirim oranı | İnsanların bildirmeyi seçtiği ramak kalaların ve zayıf sinyallerin hacmi | Dönemde kaydedilen ramak kalalar / etkin hizmetler; hizmet başına bir eğilim olarak gösterilir, asla kişi başına değil. Oranın sağlıklı bir programın başında artması ve sonra dengelenmesi amaçlanır. | hizmet başına sayı | Ramak kala kaydı ya da sorun izleyicide etiketli bir alan | Olay yönetimi; risk yönetimi | Takım sağlık kontrolü; engel panosu | Aylık |
| Öğrenme erişimi | Bir incelemenin onu yazan takımın ötesine ne kadar ulaştığı | Yayımlanmasından sonraki [üzerinde anlaşılmış sayı] gün içinde sahip takımın dışında sunulan ya da tartışılan (ortak bir forum, takımlar arası bir oturum ya da bağımlı bir takımın belgelenmiş okuması) incelemeler / dönemde yayımlanan incelemeler | yüzde | Forum ya da toplantı kayıtları ve inceleme deposu | Sürekli iyileştirme; bilgi yönetimi | Paydaş incelemesi; uygulama toplulukları | Üç aylık |
| Retrospektif eylem devri | Takım retrospektif eylemlerinden bir sonraki retrospektife kadar bitirilenlerin payı | Bir sonraki retrospektiften önce tamamlanan retrospektif eylemleri / bir öncekinde kararlaştırılan retrospektif eylemleri. Bir gerekçeyle bilerek bırakılan eylemler her iki sayıdan da çıkarılır. | yüzde | Takım birikim listesinde tutulan retrospektif notları ya da panosu | Sürekli iyileştirme | Düzenli takım yansıtması | İnceleme dönemi başına, üç ayda bir gözden geçirilir |
| Konuşmaya güvenli hissetme nabzı | İnsanların hataları suçlanmadan anlatabileceklerine inanıp inanmadığı | Kısa ve anonim bir soru kümesinde (örneğin “Bir incelemede suçlanma korkusu olmadan bir hatayı anlatabilirim”) [üzerinde anlaşılmış düzey] ya da üzerindeki yanıtların payı / alınan yanıtlar. Nabız yalnızca anonimliği korumaya yetecek büyüklükteki gruplar için bildirilir. | yüzde | Anonim nabız anketi | Sürekli iyileştirme; kurumsal değişim | Takım sağlık kontrolü; psikolojik güvenlik kontrolü | Üç aylık |

Bir inceleme, taslak olarak kaydedilmiş değil, hedeflenen okurlara görünür olduğunda “yayımlanmıştır”. Bir neden sınıfı, bileti kapatan kişi tarafından değil, inceleme grubu tarafından, incelemenin kendisinden ve kısa, üzerinde anlaşılmış bir listeden kaydedilir.

## Öneriler

### Neyin incelemeyi hak ettiğine karar verin

**1. Tetikleyicileri yazın ve yayımlayın.** “Her büyük olay, en üst iki ciddiyet düzeyindeki her olay, müşteri verisi kaybı olan her olay ve takımın öğretici bulduğu her ramak kala” gibi bir kural tartışmayı ortadan kaldırır ve kapsamı ölçülebilir kılar. Yazılı tetikleyiciler olmadan incelemeler ruh haline ve iş yüküne göre yapılır ve kapsam rakamı hiçbir anlam taşımaz.

**2. İncelemeyi olaya göre ölçeklendirin.** Küçük bir olay için otuz dakikada yazılmış yarım sayfalık bir inceleme olabilir, büyük bir olay ise tam bir zaman çizelgesini ve kolaylaştırılmış bir oturumu hak edebilir. Hafif bir yol, uygulamayı bir yük haline getirmeden kapsamı yüksek tutar.

### Kaliteyi okuyarak yargılayın

**3. Her çeyrekte incelemelerden örneklem alın ve okuyun.** Küçük bir rastgele örneklem seçin ve sahip takımın dışından birinin her birini kısa bir kontrol listesine karşı okumasını sağlayın. Yararlı maddeler arasında, kararları ve verildikleri andaki mevcut bilgiyi gösteren bir zaman çizelgesi, birden fazla katkıda bulunan etken, iyi giden şeylerin bir tanımı, sahipleri ve tarihleri olan eylemler ve bireyi değil sistemi anlatan bir dil vardır. Standardı karşılayanların payını bildirin ve bulguları yazarlara koçluk olarak geri besleyin.

**4. İnceleme becerisini öğretin.** [Geriye dönük yanlılık](https://en.wikipedia.org/wiki/Hindsight_bias), olayların sonradan bariz görünmesine yol açar ve yazarları “birinin fark etmesi gerekirdi” yargısına doğru iter. Kolaylaştırıcılardan her anda insanların ne bildiğini yeniden kurmalarını isteyin ve [beş neden](https://en.wikipedia.org/wiki/Five_whys) yöntemini tek bir yanıt için bir reçete olarak değil, sorular için bir yönlendirme olarak kullanın.

### Eylemlerin bitmesini sağlayın

**5. Eylemleri gerçek birikim listesine koyun.** Yalnızca bir inceleme belgesinde yaşayan bir eylem planlamaya görünmezdir. Sahip takımın izleyicisinde bir iş kalemi oluşturun, onu incelemeye bağlayın ve diğer işler gibi kapasite için yarışmasına izin verin. Takılmış bir eylem, onu çözebilecek kişilere görünür olsun diye kapatmayı takıma ve hizmete göre bildirin.

**6. Dürüst bir “yapılmayacak” kararına izin verin ve nedenini kaydedin.** Bazı eylemlerin fazla maliyetli ya da artık ilgisiz olduğu ortaya çıkar. Bunları belirtilmiş bir gerekçeyle kapatmak, bir yıl açık bırakmaktan ya da yapmadan bitti olarak işaretlemekten daha sağlıklıdır. Reddedilenlerin payını bildirin, çünkü çok yüksek bir pay, inceleme sürecinin kimsenin finanse etmeyeceği eylemler önerdiğini düşündürür.

**7. Kapatma oranının yanında açık eylemlerin yaşını da izleyin.** Açık eylem yaşının 85. yüzdelik dilimi ve en eski açık eylem neyin takıldığını gösterir. En eskiyi, hizmetin güvenilirliğini gözden geçiren toplantıda ele alın.

### Tekrarlara dikkat edin

**8. Kısa bir neden sınıfı listesi tutun ve her incelemeyi etiketleyin.** Sekiz ila on beş sınıflık bir liste yeterlidir. Olayların küçük bir paydan fazlası “diğer” sınıfa düştüğünde listeyi gözden geçirin. Etiketleme, “bunu daha önce gördük mü?” sorusunu veriyle yanıtlamanızı sağlar ve sorun yönetimini hiçbir tek incelemenin göstermediği örüntülerle besler (bkz. Konu 4.1 “Sorun yönetimi metrikleri” ve Konu 4.6 “Teknik borç ve bilinen hatalar”).

**9. Tekrarı insanlar hakkında değil, eylem hakkında bir sinyal olarak ele alın.** Bir neden sınıfı geri geldiğinde, önceki eylemlerin bitirilip bitirilmediğini, doğru eylemler olup olmadığını ve sınıfın fazla geniş olup olmadığını sorun. Tüm eylemler kapandıktan sonra gelen tekrar, eylemlerin işe yaramadığı anlamına gelir ve bu yararlı bir haberdir.

### Dürüstlüğü koruyun

**10. İncelemeleri suçlamasız tutun ve bunu görünür kılın.** Şablonda incelemenin koşulları ve kararları anlattığını ve kusur atfetmediğini belirtin ve liderlerin yazarlara açık sözlülükleri için teşekkür etmesini sağlayın. Amy Edmondson'ın çalışma takımları üzerine araştırmasındaki [psikolojik güvenlik](https://en.wikipedia.org/wiki/Psychological_safety), takımın kişilerarası risk almak için güvenli olduğuna dair ortak inançtır (bkz. Konu 9.2 “Memnuniyet ve iyi oluş metrikleri”).

**11. Ramak kala bildirimlerini ödüllendirin ve artan bir sayıyı başlangıçta iyi haber olarak okuyun.** Ramak kala bildirmeye başlayan bir takım sayının tırmandığını görür, çünkü olaylar hep oluyordu. Bunu önceden söyleyin, değişikliğe yol açan ramak kalaların payını izleyin ve hikâyeleri takımın onayıyla yayımlayın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruyucu metrik ya da uygulama |
| --- | --- | --- |
| İnceleme kapsamı | Tetikleyicileri daraltmak; olayların tetikleyicilerin dışında kalması için ciddiyeti düşürmek; kutuyu işaretlemek için tek satırlık bir “inceleme” dosyalamak | İnceleme kalite puanı; olay ciddiyet sayılarını müşterinin bildirdiği etkiyle karşılaştırmak; ciddiyet düşürmelerini denetlemek |
| İnceleme kalite puanı | Kontrol listesine kalıp metinle yazmak; sahip takımın puanlaması; öngörülebilir bir örneklem | Dışarıdan puanlayıcı; rastgele örneklem; her çeyrekte iki incelemeyi sesli okumak; yüksek puanlı incelemelerden gelen eylemlerin bitip bitmediğini izlemek |
| Eylem kapatma oranı | Bitiş tarihlerini çok uzağa koymak; eylemleri önemsiz parçalara bölmek; eylemleri doğrulamadan kapatmak; listeyi temizlemek için “yapılmayacak” ilan etmek | Açık eylem yaşı; gerekçeli reddedilen payı; değişikliğin işe yaradığına dair gözden geçiren onayı; neden tekrar oranı |
| Açık eylem yaşı | Yaşı sıfırlamak için bir eylemi kapatıp yeniden açmak ya da yeniden oluşturmak; eylemleri ayrı bir “fikirler” listesine taşımak | Yeni eylemleri kaynak incelemeye bağlamak ve ilk tarihi korumak; fikirlere taşınan eylemlerin sayısı |
| Neden tekrar oranı | Hiçbir şeyin eşleşmemesi için belirsiz ya da sürekli değişen neden sınıfları kaydetmek; geniş bir “diğer” sınıfı kullanmak; bir tekrarı farklı bir sınıfa bağlamak | “Diğer” sınıfındaki olayların payı; incelemelerin sınıfa göre dönemsel olarak yeniden okunması; sınıf listesinin kendisinin gözden geçirilmesi |
| Ramak kala bildirim oranı | Bir sayıya ulaşmak için bildirim istemek; önemsiz olayları kaydetmek; ya da tersine, sayıyı bir başarısızlık olarak okuyup bildirimleri bastırmak | Değişikliğe yol açan ramak kalaların payı; sayı üzerinde hedef olmaması; konuşmaya güvenli hissetme nabzından geri bildirim |
| Öğrenme erişimi | Bir dağıtım listesine isim eklemek; az katılımlı oturumlarda sunum yapmak; bir bağlantıyı okuma saymak | Katılım ya da gerçek tartışma notları; bağımlı takımlara son incelemeden sonra neyi değiştirdiklerini sormak |
| Retrospektif eylem devri | Yalnızca bitirmesi kolay önemsiz eylemler üzerinde anlaşmak; retrospektifi atlamak; kalemleri tamamlandı olarak işaretlemek | Eylemlerin takım tarafından yargılanan etkisi; retrospektif yapılma oranı; aynı temanın birkaç hafta boyunca görünüp görünmediği |
| Konuşmaya güvenli hissetme nabzı | Yanıtlayanlara baskı yapmak; yalnızca kendine güvenenleri anketlemek; düşük puanlı bir grubu gizleyen bir ortalama bildirmek | Yanıt oranı ve yanıtlayan karışımı; en az grup büyüklüğü; açık yorumların tam okunması; inceleme dilinin değişip değişmediği |

Sağlıklı bir okuma şunları gösterir: önemli olaylar için incelemeler, çoğunun karşıladığı bir kalite standardı, biten ya da dürüstçe reddedilen eylemler, liderlerin adlandırabileceği bir avuç eski eylem, ele alındıktan sonra sıklığı düşen neden sınıfları ve önce yükselip sonra durulan bir ramak kala sayısı. Zor bir olay yaşandığında nabız sabit kalır ya da iyileşir. Fazla temiz bir örüntü, kendi başına bir örneklem okumak için bir işarettir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Her olayı incelemek | Tam kapsam; tetikleyiciler hakkında tartışma yok | Ağır; incelemeler yüzeyselleşir; takımlar süreçten hoşlanmaz hale gelir |
| Yazılı tetikleyicilere göre incelemek | Çabayı etkiye ve öğrenme değerine odaklar | Tetikleyicilerin bakıma ihtiyacı vardır; sınırdaki olaylar gözden kaçar |
| Neden sınıfı etiketleme | İncelemeler arasında örüntüler bulur | Sınıflar bir basitleştirmedir; gerçek nedenler çoğu zaman aynı anda birkaç şeydir |
| Güvenlik üzerine anonim nabız | Hassas bir soruda dürüst sinyal | Kaba; küçük takımlar tanınabilir; anket yorgunluğu |

Düz yanıt, döngüyü kısa ve sayıları az tutmaktır: yazılı tetikleyiciler, küçük bir kalite örneklemi, tek bir eylem izleyicisi ve bir neden sınıfı listesi; güvenlik nabzı ise takım geri kalanına güvendikten sonra eklenir. Buradaki hiçbir ölçüm öğrenmenin gerçekleştiğini kanıtlamaz. Birlikte, öğrenmenin koşullarının mevcut olup olmadığını gösterirler.

## Takımınızla tartışılacak sorular

**1. Son beş olayımızdan hangisi bir inceleme aldı ve bu inceleme yüzünden kimse bir şeyi değiştirdi mi?**
Eksik incelemeler görünür olsun diye inceleme klasöründen değil, olay listesinden başlayın. Her inceleme için bugün sistemde ya da süreçte neyin farklı olduğunu sorun. Yanıt “hiçbir şey” ise incelemenin neden yapıldığını ve onu kimin okuduğunu sorun. Kolaylaştırıcı yanıtları yargılamadan kaydetmelidir, çünkü bunlar uygulamanın değişiklik mi yoksa evrak mı ürettiğini gösterir.

**2. Burada birinin bir incelemede doğruyu söylemesini ne zorlaştırır?**
Somut örnekler isteyin: bir yöneticinin tepkisi, bir performans değerlendirmesi, bir müşteri yükseltmesi, bir e-postadaki ton. İnsanları önce yanıtları anonim olarak yazmaya davet edin. Kimin katıldığı, kimin okuduğu ve liderlerin yüksek sesle ne söylediği gibi değiştirilebilir koşullara bakın. Bu, konudaki diğer her sayıyı koruyan konuşmadır.

**3. Hangi eylem maddeleri en uzun süredir açık ve onları ne engelliyor?**
En eski beşini gösterin. Her biri için eylemin hâlâ doğru olup olmadığını, kapasitesi olan bir sahibinin olup olmadığını ve yapılması, yeniden planlanması ya da reddedilmesi gerekip gerekmediğini sorun. Odağı sahibe değil, iş sistemine tutun. Oturum bitmeden her biri için bir karar üzerinde anlaşın.

**4. Aynı tür sorun ne zaman geri döndü ve bu, önceki düzeltme hakkında ne söylüyor?**
Bir tekrarı bulmak için neden sınıfı etiketlerini kullanın ve önceki incelemeyi ve eylemlerini okuyun. Eylemlerin bitirilip bitirilmediğini, katkıda bulunan etkenleri ele alıp almadığını ve sınıfın fazla geniş çizilip çizilmediğini sorun. Amaç bir açıklama değil, daha iyi bir eylemdir.

**5. Ramak kalaları bildiriyor muyuz ve biri bildirdiğinde ne oluyor?**
Yakın tarihli bir örnek isteyin ve ardından ne olduğunu izleyin. Hiçbir şey olmadıysa insanların neden yeniden bildirmesi gerektiğini sorun. Sayı düşükse insanların neyden korktuğunu sorun. Kolaylaştırıcı, başlangıçta artan bir sayının beklendiğini açıklamalı ve bildirimin değerli hissettirmesi için takımın bir sonraki bildirime nasıl yanıt vereceği üzerinde anlaşmalıdır.

**6. Hiçbir sayıya bakamıyor olsaydık bir incelemenin iyi olduğunu nasıl anlardık?**
Bu, takımdan kaliteyi kendi sözcükleriyle anlatmasını ister. Yaygın yanıtlar arasında “takımın dışından biri bir şey öğrendi”, “düzeltme tuttu” ve “yazar korkmadı” vardır. Yanıtları üç aylık örneklemin kontrol listesine dönüştürün ve iki çeyrek sonra yeniden ele alın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları çok sayıda inceleme yazar ve eylemlerin çoğunu taşır, bu yüzden beceriksiz bir sürecin maliyetini ilk onlar hisseder. Kısa şablonlardan, net bir tetikleyici kuralından ve bir eylemle bir takım birikim listesi kalemi arasında görünür bir bağdan yararlanırlar. Düzenli takım yansıtması bir olay incelemesiyle aynı takip disiplinini hak eder ve retrospektif eylemlerini bitiren bir takım aynı alışkanlığı daha küçük ölçekte uygulamaktadır. Eylemlerin özellik baskısıyla sıkışmasına karşı dikkatli olun ve bu takası ürün sahibine açıkça getirin (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”).

### Hizmet ve operasyon takımları

Operasyon takımları kanıtı (zaman çizelgeleri, uyarılar, sohbet kayıtları) elinde tutar ve neden sınıflarını tutarlı biçimde etiketlemek ve bir tekrarı kesintiye dönüşmeden fark etmek için en iyi konumdadır. Yazmak için korunan zamana ihtiyaçları vardır, çünkü uzun bir vardiyanın sonunda yazılan incelemeler zayıf olur. Her incelemeyi beslediği her sorun kaydına bağlayın (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).

### Liderlik ve yönetişim

Liderler her incelemenin tonunu sonrasında sordukları şeylerle belirler. “Bunu kim yaptı?” dürüst incelemeleri bitirir, “ne öğrendik ve neyi değiştiriyoruz?” onları davet eder. Yönetişim kurulları güvenilirlik incelemesinde kapsamı, kaliteyi, eylem yaşını ve tekrarı beklemeli, yatırım gerektiren eylemleri finanse etmeli ve takımları kaç olayları ya da incelemeleri olduğuna göre asla karşılaştırmamalıdır.

### Müşteriler ve kullanıcılar

Müşteriler incelemeyi nadiren görür, ancak sonucunu hisseder: geri dönmeyi bırakan aynı arıza ve geri döndüğünde dürüst bir anlatım. Sözleşmeler izin veriyorsa önemli bir olaydan sonra sade bir dille özet yayımlayın (bkz. Konu 3.4 “Büyük olay metrikleri”). Aynı konuda tekrarlanan temas, öğrenmenin yerine oturmadığının müşteri tarafındaki sinyalidir (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci, müşteriye dönük bir mağaza vitrini, bir ödeme hizmeti ve bir iç envanter platformu işletir. Beş ürün takımı bu hizmetleri geliştirir ve işletir, küçük bir hizmet yönetimi grubu da olay ve sorun sürecini yürütür. Bu örnekteki sayılar açıklayıcıdır.

Bir çeyrekte perakendecinin en üst iki ciddiyet düzeyinde 41 olayı olur. Yazılı tetikleyiciler hepsini bir inceleme için nitelikli kılar ve on iş günü içinde 36 inceleme yayımlanır, yani inceleme kapsamı yaklaşık yüzde 88'dir. Liderlik memnundur. Hizmet yönetimi grubu sekiz incelemelik rastgele bir örneklem seçer, başka bir ürün alanından bir takımdan bunları puanlamasını ister ve yalnızca üçünün üzerinde anlaşılan standardı karşıladığını görür. Yaygın eksik, zaman çizelgesinin ne olduğunu listelemesi, ancak insanların her kararı verdiklerinde ne bildiklerini listelememesidir ve katkıda bulunan etken bölümü tek bir neden adlandırır.

Aynı örneklem, çeyrekte bitiş tarihi gelen 74 eylemden 51'inin bitiş tarihine kadar tamamlandığını, yani yaklaşık yüzde 69'luk bir kapatma oranı olduğunu gösterir. En eski açık eylem, 210 günlük, ödeme veri tabanındaki bir kapasite uyarı eşiğidir ve art arda altı hafta ertelenmiştir. Neden etiketleme, 36 incelemenin 9'unda “kapasite sınırı” olduğunu, bunların 4'ünün ödeme hizmetine ait olduğunu gösterir. Davet edilen 70 kişiden 58'inin yanıtladığı anonim nabız, nöbet grubunda daha düşüktür ve birkaç yorum, üst düzey yöneticilerin adı geçen kişiler hakkında sivri sorular sorduğunu söyler.

Takım üç karar alır. Birincisi, incelemelere katılan üst düzey yöneticilerle kısa bir oturum yapar ve bir kural üzerinde anlaşır: odadaki sorular koşullar ve kararlar hakkında olur ve bir kişi hakkındaki her takip takım liderinden geçer. İkincisi, en eski kapasite eylemini ödeme takımının bir sonraki planlama turunun en başına koyar, ürün sahibi tarafından özellik işine karşı sıralanır ve sonucu güvenilirlik incelemesinde bildirir. Üçüncüsü, inceleme şablonuna iki kontrol listesi maddesi ekler (insanların her kararda ne bildiği ve en az iki katkıda bulunan etken) ve yazarlar için anonimleştirilmiş bir incelemeyi kullanarak bir koçluk oturumu yürütür.

Manipülasyon riski sonraki çeyrekte ortaya çıkar. İnceleme kapsamı yüzde 97'ye yükselir, ancak 300 sözcükten kısa incelemelerin payı ikiye katlanır ve birkaç takım olayları ciddiyet ikiden tetikleyicinin hemen altındaki üçe düşürür. Kalite örneklemi ve ciddiyet değişikliklerinin denetimi bunu yakalar. Grup düşürmelerin neden olduğunu sorar, takımların bir incelemeyi cezalandırıcı hissettiğini öğrenir ve ciddiyet iki tetikleyicisini korurken küçük olaylar için uzunluk beklentisini gevşetir.

## Sektör mercekleri

**Girişim.** Küçük bir takım hızlı öğrenebilir, çünkü herkes olaya katılmıştır. Risk, hiçbir şeyin yazılmaması ve dersin bir sonraki işe alınanla birlikte çıkıp gitmesidir. Tek sayfalık bir şablon tutun, geceleyin birini uyandıran her şey için inceleme yapın ve yalnızca eylem kapatmayı ve tekrarlayan nedenleri izleyin. Kurucuların incelemeleri bireyler hakkında yorum yapmadan okumasını sağlayarak açık sözlülüğü koruyun.

**Küçük işletme.** Sorunu düzelten kişi çoğu zaman onu anlayan tek kişidir. Kısa bir şablon kullanın ve en eski açık eylemi aylık gözden geçirin.

**Kurumsal.** Şablonu, tetikleyiciyi ve neden sınıfı listesini standartlaştırın ve takımların derinliği uyarlamasına izin verin. İncelemeler için aranabilir bir yer, takımlar arası bir forum ve dışarıdan bir puanlayıcı sağlayın. Takımların olay ya da inceleme sayılarına göre lig tablolarına karşı dikkatli olun, çünkü bunlar şeffaflığı cezalandırır.

**Kamu ve kamu sektörü.** İncelemeler yasal yükümlülüklerle, denetimle ya da bilgi edinme taleplerle karşılaşabilir ve bu yazarları ihtiyatlı yapar. Öğrenme incelemesini gözetim için hazırlanan her resmi rapordan ayırın ve engellenmiş eylemleri bağımlılığıyla birlikte kaydedin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bu uygulamanın maliyeti çoğunlukla zamandır. Yazarlar her inceleme için saatler harcar ve çok sayıda kişi bir oturumda bir saat geçirir. Üç aylık bir kalite örneklemi, dışarıdan bir okurun birkaç saatini alır. Neden etiketleme ve eylem izleme biraz araç gerektirir, bu bir hesap tablosu ve mevcut bilet ile birikim listesi araçlarındaki bir alan olabilir. Liderlik davranışında daha büyük ve daha az görünür bir maliyet vardır, çünkü liderler açık sözlü incelemelere kötü tepki verirse program başarısız olur.

Getiri, tekrarı durmuş nedenlerden ve takımın benzerlerini görmüş olması nedeniyle kısalan olaylardan gelir. Daha az tekrarlayan olay, mühendislik ve operasyon kapasitesini serbest bırakır, yükseltmeleri azaltır ve müşterilere yönelik aksama maliyetini düşürür. Paylaşılan bir inceleme kitaplığı yeni çalışanların öğrenme eğrisini kısaltır ve birkaç deneyimli kişiye bağımlılığı azaltır. Başka bir kurumdan bir yüzde alıntılamayın. Başlamadan önce neden tekrarı, açık eylem yaşı ve tekrarlanan temas için kendi başlangıç değerinizi ölçün ve iki ya da üç çeyrek sonra karşılaştırın.

Dürüst sınır, öğrenmenin atfedilmesinin zor olmasıdır: tekrardaki düşüş daha iyi bir incelemeden, ilgisiz bir mimari değişiklikten ya da şanstan gelebilir. Daha geniş bir ele alış için bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”.

## Anti-desenler ve tuzaklar

- **İnceleme tiyatrosu.** İncelemeler bir kuralı karşılar ve kimse onları okumaz. Bunun yerine incelemelerden örneklem alıp okuyun ve ürettikleri değişikliğe göre yargılayın.
- **Kök nedeni bir kişi olarak aramak.** İnceleme bireysel bir hatayı adlandırır ve durur. Bunun yerine hatayı neyin olası kıldığını sorun ve birkaç katkıda bulunan etken listeleyin.
- **Eylem enflasyonu.** İncelemeler takımın finanse edemeyeceği uzun listeler üretir. Bunun yerine her incelemeyi sıralanmış birkaç eylemle sınırlayın ve kalanı bir gerekçeyle reddedin.
- **Birikim listesi dışındaki eylemler.** Bir belgede yaşarlar ve asla planlanmazlar. Bunun yerine sahip takımın izleyicisinde iş kalemleri oluşturun ve bunları incelemeye bağlayın.
- **Doğrulamasız kapatma.** Eylem bitti olarak işaretlenir ve neden geri döner. Bunun yerine bir gözden geçirenin değişikliğin işe yaradığını onaylamasını sağlayın ve neden sınıfını tekrar için izleyin.
- **Takımları karşılaştırmak için sayıları kullanmak.** Daha fazla incelemesi ya da ramak kalası olan bir takım daha kötü görünür. Bunun yerine yüksek bir sayıyı açıklık olarak okuyun ve her takımı kendi geçmişiyle karşılaştırın.
- **Haberciyi cezalandırmak.** Bir lider açık sözlü bir incelemeden sonra bir kişiyi sorgular. Bunun yerine liderlerin nasıl yanıt vereceğine dair bir norm üzerinde anlaşın ve zor olaylardan sonra nabzı denetleyin.
- **Metrikleri öğrenmenin kanıtı saymak.** Temiz bir pano, kurumun öğrendiğinin kanıtı olarak alınır. Bunun yerine incelemelerden bir örneklemi okumaya ve onları yazan insanlara sormaya devam edin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tetikleyiciler ve kapsam | İncelemeler kimin müsait olduğuna ve olayın ne kadar kötü hissettirdiğine bağlıdır | Bazı takımlar ciddi olaylar için inceleme yapar | Yazılı tetikleyiciler ve ortak şablon; kapsam ciddiyete göre sayılır | Kapsam eğilim olarak izlenir ve ciddiyet düşürmelerine karşı denetlenir; hafif ve tam yollar | Tetikleyiciler müşteriler ve tedarikçilerle uyarlanır; ortak olaylar için paylaşılan incelemeler |
| Kalite ve dürüstlük | İncelemeler bir kişiyi ya da tek bir nedeni adlandırır | Bazı takımlar suçlamasız incelemeler yazar | Kontrol listesi standardı; suçlamasız dil beklenir | Dışarıdan üç aylık örneklem; nabız gözden geçirilir; yazarlar için koçluk | İncelemeler tedarikçiler ve kullanıcılarla birlikte yazılır; takımlar arası okuma rutindir |
| Eylemler ve tekrar | Eylemler belgelerde yaşar ve nadiren bitirilir | Eylemler bazı takımlarca izlenir; kapatma değişkendir | Eylemler sahipleri, tarihleri ve dürüst reddetme ile gerçek birikim listesindedir | Kapatma, yaş ve neden tekrarı gözden geçirilir, finanse edilen iyileştirme ile | Takımlar ve tedarikçiler arasındaki eylemler koordine edilir; örüntüler değiştikçe neden sınıfları gözden geçirilir |
| Paylaşım ve öğrenme | Dersler takımda kalır | İncelemeler takım için yayımlanır | İncelemeler aranabilir ve düzenli bir forumda paylaşılır | Erişim ölçülür; bağımlı takımlar yaptıkları değişiklikleri bildirir | Öğrenme tasarıma, işe alıştırmaya ve tedarikçi sözleşmelerine akar |

## Kontrol listesi

- [ ] Yazılı tetikleyiciler, yüksek öğrenme değeri olan ramak kalalar dâhil, hangi olayların inceleme alacağını söyler.
- [ ] Küçük olaylar için hafif bir yolu olan kısa bir şablon vardır.
- [ ] İncelemeler şablon ve liderlik davranışı bakımından suçlamasızdır.
- [ ] Her eylem, sahibi ve tarihi olan, sahip takımın birikim listesinde bir iş kalemidir.
- [ ] Eylemler reddedilebilir ve gerekçe kaydedilir ve bildirilir.
- [ ] Kısa bir neden sınıfı listesi vardır ve her inceleme etiketlenir.
- [ ] Dışarıdan bir okur her çeyrekte incelemelerin rastgele bir örneklemini puanlar.
- [ ] En eski açık eylemler, hizmet güvenilirliğiyle birlikte gözden geçirilir.
- [ ] Açık eylem yaşı bir ortanca, yüksek bir yüzdelik dilim ve en eski olarak bildirilir.
- [ ] Bir ramak kala yolu vardır ve takım bir bildirimden sonra ne olacağını bilir.
- [ ] Bu konudaki hiçbir metrik kişi başına bildirilmez ya da kullanılmaz.
- [ ] Konuşmaya güvenli hissetme nabzı yalnızca anonimliği korumaya yetecek büyüklükteki gruplar için çalıştırılır.

## Yapay zekâ istemleri

**Bir olay sonrası inceleme taslağını kalite açısından gözden geçirin.**

```text
[hizmet] üzerindeki [olay açıklaması] için bir olay sonrası inceleme taslağı
burada. Bunu şu standarda göre denetleyin: [inceleme kontrol listenizi
yapıştırın]. Her madde için taslağın onu karşılayıp karşılamadığını söyleyin,
yargınızı destekleyen satırları alıntılayın ve koşulları anlatmak yerine bir
kişiye kusur atfeden dile işaret edin. Metinde olmayan olgular eklemeyin.
Varsayımlarınızı ve sağladıklarımdan yargılayamadığınız her şeyi listeleyin.

[kişisel veriler çıkarılmış taslağı yapıştırın]
```

**Geçmiş incelemelerden neden sınıfları önerin.**

```text
Aşağıda [hizmet ya da hizmet grubu] için [sayı] geçmiş incelemenin özetleri var.
[en az] ile [en çok] arasında, sistem koşullarını tanımlayan ve asla kişileri
tanımlamayan kısa bir neden sınıfı listesi önerin. Her sınıf için tek satırlık
bir tanım, ona uyan incelemeler ve belirsiz olan incelemeler verin. Metin
tarafından desteklenmeyen nedenler uydurmayın. Varsayımlarınızı ve
sınıflandıramadığınız incelemeleri listeleyin.

[özetleri yapıştırın]
```

**Açık eylem maddelerini takılma örüntüleri açısından çözümleyin.**

```text
[takım ya da hizmet] için inceleme eylemlerinin bir dışa aktarımı burada: sahip
takım, oluşturulma tarihi, bitiş tarihi, durum ve tek satırlık bir açıklama.
Açık eylemlerin yaşının ortancasını, 85. yüzdelik dilimini ve en yüksek değerini
bildirin, ardından en eski eylemleri olası takılma nedenine göre gruplayın
(örneğin belirsiz kapsam, başka bir takıma bağımlılık, kapasite yokluğu ya da
düşük değer). Örüntüleri takım ve hizmete göre bildirin, asla kişiye göre
değil. Verilerin desteklemediği nedenler hakkında tahmin yürütmeyin.
Varsayımlarınızı ve yardımcı olacak ek alanları listeleyin.

[kişisel veriler çıkarılmış dışa aktarımı yapıştırın]
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bildirmek üzere olduğunuz bir inceleme ya da öğrenme metriği için eşleşen konuyu, tanımları ve eşleştirilmiş koruyucu ölçütü bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gözden geçirilmiş bir öğrenme metriğinin hâlâ saatlerini, manipülasyon yolunu ve koruyucu ölçütünü taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Bir inceleme, değiştirdiği şey kadar değerlidir. Bu yüzden kapsamı, kaliteyi, eylem kapatmayı ve nedenlerin tekrarını ölçün ve incelemelerin kendilerinden bir örneklemi okuyun.
- Suçlamasızlık dürüst veri için ön koşuldur ve liderler onu, açık sözlü bir incelemeye nasıl yanıt verdikleriyle korur.
- Eylemleri gerçek birikim listesine koyun, sayılarını sınırlayın, dürüst reddetmeye izin verin ve en eskilerin yaşını izleyin.
- Tekrarlayan nedenler görünür olsun ve sorun yönetimini beslesin diye incelemeleri kısa bir neden sınıfı listesiyle etiketleyin.
- Artan bir ramak kala sayısını başlangıçta açıklığın işareti olarak okuyun ve insanları ya da takımları inceleme hacmine göre asla sıralamayın.
- Buradaki her sayıyı bir koruyucu ölçütle eşleştirin, çünkü öğrenme döngüsü kendi başına manipüle edilebilecek bir hedeftir.

## Kaynaklar ve ileri okuma

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
