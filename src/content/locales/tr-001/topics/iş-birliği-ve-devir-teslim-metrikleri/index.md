# İş birliği ve devir teslim metrikleri

**İş, el değiştirdiği her yerde yavaşlar ve kalitesi düşer. Bu yüzden devir teslimleri, aralarındaki beklemeyi ve tek tek kişilere bağımlılığı ölçün ve sayıları, kimin kiminle konuştuğunu saymak için değil, doğru insanları bir araya getirmek için kullanın.**

## Genel bakış ve motivasyon

Çevik Manifesto’nun ilkeleri, iş insanları ile geliştiricilerin proje boyunca her gün birlikte çalışması gerektiğini söyler. Altta yatan gözlem eski ve sağlamdır: bir hizmet kuruluşundaki gecikmenin çoğu, insanların yavaş çalışmasından gelmez. İşin insanlar arasında beklemesinden gelir. Bir talep hizmet masasından ikinci hat takımına, oradan bir uygulama takımına, oradan bir veri tabanı yöneticisine geçer ve her adımda bir kuyruğa katılır, bağlamı kaybeder ve geri gönderilme riskiyle karşılaşır. İlgili insanların her biri hızlı olabilir. Sistem yavaştır.

ITIL’in kodladığı BT hizmet yönetimi (ITSM), desteği uzun zamandır katmanlara ve takımlara ayırır; yükseltme (eskalasyon) ise bir sorunu çözebilecek birine taşımanın mekanizmasıdır. Bu yapının yararları vardır: uzmanlaşma, net sahiplik ve denetimli erişim. Aynı zamanda devir teslimler yaratır ve devir teslimlerin bir maliyeti vardır. Çevik ve DevOps uygulaması buna, işin daha büyük bölümünü uçtan uca taşıyan çapraz işlevli takımlar kurarak ve gerçek zamanlı iş birliğini teşvik ederek yanıt verir. İki gelenek benzer sonuçlara varır: daha az devir teslim, aralarında daha kısa bekleme ve sorunu çözebilecek insanların onun üzerinde birlikte çalışması.

Birkaç fikir ölçüme yardımcı olur.

- **Devir teslimler ve kuyruklar.** İş bir takımdan diğerine her geçtiğinde genellikle bir kuyrukta bekler. Bekleyerek geçen süre çoğu zaman çalışarak geçen süreden çok daha büyüktür. Daha önce tanıtılan akış verimliliğinin genellikle düşük olmasının nedeni budur (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”). [Darboğaz](https://en.wikipedia.org/wiki/Bottleneck_(production)), bir süreçte sınırlı kapasiteli noktadır ve bütünün çıktı hızını belirler.
- **Yapı iletişimi şekillendirir.** [Conway yasası](https://en.wikipedia.org/wiki/Conway%27s_law), kuruluşların kendi iletişim yapılarını yansıtan sistemler tasarladığını söyler. Tersi de pratiktir: daha az bağımlılığı olan bir sistem istiyorsanız, takımları aralarındaki bağımlılıkları azaltacak biçimde düzenleyin. Takım sınırları devir teslimler yaratır ve devir teslimler mimariyi şekillendirir.
- **Bağımlılıklar.** [Bağımlılık](https://en.wikipedia.org/wiki/Dependency_(project_management)), bir iş parçasının bir diğeri bitmeden ilerleyemediği ilişkidir. Takımlar arasındaki bağımlılıklar büyük bir gecikme kaynağıdır ve haritalanabilir, sayılabilir ve azaltılabilir.
- **Koordinasyon maliyetleri insan sayısıyla artar.** Frederick Brooks’un yazılım projeleri üzerine denemelerinden gelen [Brooks yasası](https://en.wikipedia.org/wiki/Brooks%27s_law), geciken bir projeye insan eklemenin, kısmen artan iletişim yükü nedeniyle onu daha da geciktirebileceğini gözlemler. Bir konuşmada daha çok insan olması kendiliğinden daha iyi değildir.
- **Bireylere bağımlılık.** [Otobüs faktörü](https://en.wikipedia.org/wiki/Bus_factor), bir projeyi durdurmak için ulaşılamaz olması gereken kişi sayısıdır ve genellikle bilgi tek bir kafadayken riske dikkat çekmek için kullanılır. Bilgi dağılımının bir özelliğidir, herhangi bir kişinin derecelendirmesi değildir.

İş birliği ölçümlerinin karanlık bir yüzü vardır. İş birliğinin ölçüsü olarak mesajları, toplantıları ya da ağ bağlantılarını saymak kolaydır ve cazip gelir; hızla insanların iletişimini izlemeye kayar. [Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi gruba ve gizliliğe uygulanır: “iş birliği” bir hedef hâline geldiğinde insanlar görünür etkinlik üretir, gözetime dönüştüğünde ise açıkça konuşmayı bırakır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Bu yüzden buradaki ölçümler iş öğelerine, devir teslimlere ve bağımlılıklara ve takım düzeyindeki örüntülere bakar. Mesajları okumazlar ve bireyleri sıralamazlar.

Bu konu, Bölüm 2’nin akış ölçümlerine, Bölüm 3’ün olay ve talep ölçümlerine ve önceki bölümün tedarikçi devir teslimlerine bağlanır (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

## Temel ilkeler

- **Konuşmaları değil, işi ölçün.** Devir teslimler, beklemeler ve bağımlılıklar iş öğelerinin ve takımların özellikleridir.
- **Daha az devir teslim, daha hızlı devir teslimi yener.** En iyi devir teslim, hiç olmayandır.
- **İnsanları bir araya getirin.** Gerçek zamanlı iş birliği çoğu zaman koca bir bekleme zincirini ortadan kaldırır.
- **Bağımlılıkları görünür kılın ve azaltın.** Haritalayın, sayın ve en çok zarar verdikleri yerde takım sınırlarını ya da mimariyi değiştirin.
- **Bilgiyi bilinçli olarak yayın.** Tek bilgi noktaları risktir ve paylaşmak bir tasarım faaliyetidir.
- **Odaklanmayı koruyun.** Her saati toplantıyla dolduran iş birliği, işi yapacak zamanı yok eder.
- **Paydaşları sürekli dahil edin.** Saatler içinde yanıtlanan sorular, haftalık toplantılarda toplanan yanıtlardan daha iyi hizmet eder.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Devir teslim sayısı | Bir iş öğesinin tamamlanmadan önce sahip takımı değiştirme sayısı | öğe türüne göre, tamamlanan öğe başına takımdan takıma aktarmaların medyanı ve 85. yüzdeliği | öğe başına aktarma | ITSM veya izleyici atama geçmişi, takım bazında toplulaştırılmış | Olay yönetimi; hizmet talebi yönetimi; değişiklik yetkilendirme | İşi uçtan uca taşıyan çapraz işlevli takımlar | Aylık |
| Devir teslim bekleme payı | Bir öğenin geçen süresinin, iş yeniden başlamadan önce bir devir teslimden sonra beklemeyle geçen payı | devir teslim ile alan takımın ilk eylemi arasındaki süre / toplam geçen süre, öğeler genelinde medyan | yüzde | Atama ve etkinlik zaman damgaları | Olay yönetimi; hizmet talebi yönetimi | Akış verimliliği; kuyruk süresi | Aylık |
| Yeniden atama oranı | Takımlar arasında ikiden fazla kez aktarılan ya da önceki takıma geri gönderilen öğelerin payı | ikiden fazla kez yeniden atanan veya geri gönderilen öğeler / tamamlanan öğeler | yüzde | Atama geçmişi | Olay yönetimi; sorun yönetimi | Yeniden iş ve sekip duran iş | Aylık |
| Bağımlılık gecikmesi | Öğelerin başka bir takımı bekleyerek engelli kaldığı süre | bağımlılık adı belirtilerek, “başka takım tarafından engellenmiş” durumda geçen günlerin medyanı ve 85. yüzdeliği | gün | İzleyicideki engelli durumu ve bağımlılık alanı | Değişiklik yetkilendirme; yayın ve dağıtım yönetimi | Engellenmiş iş öğesinin yaşı | Aylık |
| Ortak çözüm oranı | Sıralı yükseltme olmaksızın, birkaç takımdan insanın gerçek zamanlı birlikte çalışarak çözdüğü olayların payı | kayıtlı gerçek zamanlı iş birliği (örneğin ortak bir kanal ya da çağrı) olup başka devir teslim olmadan çözülen olaylar / uygun öncelikteki olaylar | yüzde | İş birliği etiketli olay kayıtları | Olay yönetimi; büyük olay yönetimi | Sorunlar üzerinde sürü hâlinde çalışma (swarming) | Aylık |
| Bilgi kapsamı | Kritik bileşenlerin, işletmeye ve değiştirmeye muktedir en az belirli sayıda takım üyesine sahip olanlarının payı | işletmeye ve değiştirmeye muktedir en az hedef sayıda kişisi olan kritik bileşenler / kritik bileşenler | yüzde | Takımın tuttuğu beceri ve sahiplik haritası | Bilgi yönetimi; hizmet sürekliliği yönetimi | Ortak sahiplik ve ortak kod sahipliği | Üç aylık |
| Paydaş yanıt süresi | Bir takımın paydaşa sorusundan kullanılabilir bir yanıta kadar geçen süre | sorunun kaydedilmesinden yanıtın kaydedilmesine kadar geçen saatlerin medyanı ve 85. yüzdeliği | saat | Açık sorular için soru günlüğü veya izleyici alanı | Hizmet düzeyi yönetimi; iş ilişkileri yönetimi | Sürekli paydaş katılımı | Aylık |

Takım, kuyruk veya hizmet düzeyinde toplulaştırın ve asla bireye göre raporlamayın. Devir teslim sayısı, sahip takımı değiştirmeyen otomatik atamaları hariç tutar. Bekleme payı, öğe alan takıma atandığında başlar ve onların ilk kayıtlı eyleminde biter. Bilgi kapsamı, bir bileşeni kimin işletebileceğine dair takımın kendi yargısını kullanır, takımla birlikte gözden geçirilir ve bireyleri asla sıralamaz. İş birliği verileri mesajları okumaktan değil, öğe etiketlerinden ve kayıtlardan gelir.

## Öneriler

### Devir teslimleri haritalayın

**1. Tipik bir öğenin yolunu çizin.** Yaygın bir talep ya da olay türü seçin ve yolunu ilk temastan çözüme kadar izleyin: her takım, her kuyruk, her bekleme. Resmî süreç diyagramını değil, gerçek örnekler için izleyici geçmişini kullanın. Harita, işin nerede beklediğini ve nerede sekip durduğunu gösterir. Bunu ilgili takımlarla paylaşın ve gördükleri israfı belirlemelerini isteyin.

**2. Devir teslimleri ve beklemeleri iş öğesi geçmişinden ölçün.** Her öğe türü için devir teslim sayısını, bekleme payını ve yeniden atama oranını hesaplamak üzere atama ve etkinlik zaman damgalarını kullanın. Dağılıma bakın: öğelerin çoğu bir kez geçebilirken uzun bir kuyruk çok kez sekebilir. En büyük gecikmeler ve en çok hayal kırıklığı kuyruktadır.

**3. Veriyi işi yapan insanlarla birlikte okuyun.** Yüksek bir yeniden atama oranı, belirsiz sahipliği, eksik bilgiyi ya da meşru triyajı yansıtabilir. Sonuca varmadan önce takımlara sorun. Öğelerin neden sektiğini ve neyin bunu durduracağını onlar bilir.

### Devir teslimleri ve beklemeyi azaltın

**4. Yetkinliği işe taşıyın.** Birçok öğe basit bir eylem için ikinci bir takıma gidiyorsa, birinci takıma bunu yapacak bilginin, erişimin ya da otomasyonun verilip verilemeyeceğini sorun. Self servis ve çalıştırma kılavuzları (runbook) koca devir teslimleri ortadan kaldırabilir (bkz. Konu 3.7 “Self servis ve otomasyon metrikleri”). İşi taşımanın sadece birinci takımı aşırı yüklemediğine dikkat edin.

**5. Sıralı yükseltme yerine iş birliğini kullanın.** Karmaşık ya da acil olaylar için bileti katmanlardan geçirmek yerine, ilgili insanları bir koordinatörle gerçek zamanlı bir araya getirin. Çoğunlukla sürü hâlinde çalışma (swarming) olarak anılan bu uygulama, katmanlı yükseltmenin yarattığı beklemeleri ve bağlam kaybını ortadan kaldırır. Ortak çözüm oranını izleyin ve sonuçların ve memnuniyetin iyileşip iyileşmediğine bakın (bkz. Konu 3.4 “Büyük olay metrikleri”).

**6. Sınırlarda sahipliği netleştirin.** Her hizmet ve bileşen için, kimin sahip olduğunu, ona nasıl ulaşılacağını ve bir devir teslimde neye ihtiyaç duyduğunu belirtin. Alan takımla kararlaştırılmış, gerekli bilgilere dair kısa bir şablon, eksik ayrıntılar yüzünden geri gönderimleri azaltır. Sahiplik boşluklarını bulmak için yeniden atama vakalarını gözden geçirin.

**7. Bağımlılıkları en çok zarar verdikleri yerde azaltın.** Takımlar arasındaki bağımlılıkları haritalayın, her birinin ne sıklıkla gecikmeye yol açtığını sayın ve en kötüsüyle ilgilenin. Seçenekler arasında mimariyi değiştirmek, bir takıma sürekli beklediği yetkinliği vermek ya da takımları hizmetler etrafında yeniden düzenlemek vardır. Bir hizmeti baştan sona teslim etmek için gereken becerileri içeren [çapraz işlevli takımlar](https://en.wikipedia.org/wiki/Cross-functional_team) bağımlılıkları en aza indirir ve sürekli iş birliğini yapıya taşır. Conway yasası, yapının ve tasarımın birlikte değiştirilmesi gerektiğini düşündürür.

### Bilgiyi ve katılımı yayın

**8. Bilgi kapsamını görünür kılın ve iyileştirin.** Kritik bileşenlerin ve her birini işletmeye ve değiştirmeye muktedir kişilerin basit bir haritasını tutun. Tek kişinin bildiği bileşenleri arayın ve bilgiyi yaymak için eşli çalışma, dokümantasyon ve rotasyon planlayın. Sonucu sisteme yönelik bir risk olarak ele alın. Amaç, dayanıklılık ve en çok bilen insanlar için sürdürülebilir bir tempodur; çünkü tek uzman olan kişi izne çıkamaz.

**9. Paydaşları sürekli döngüde tutun.** Paydaşlara sorularla nasıl ulaşılacağı ve yanıtların ne kadar hızlı gelmesi gerektiği konusunda anlaşın. Bir ayrıntı üzerine karar için bir hafta bekleyen bir takım, paydaşı bekliyordur ve maliyet gerçektir. Soruları ve yanıtları kaydedin, yanıt süresini ölçün ve bunu paydaşlarla katılımları üzerine yapılan konuşmalarda kullanın.

**10. Odaklanmış iş için zaman koruyun.** İş birliği amaçlı olmalıdır. Takvimi dolduran toplantıları gözden geçirin ve her biri için hangi kararı desteklediğini sorun. Brooks yasası doğrultusunda, gerek duymayan konuşmalardaki insan sayısını azaltın. Bunu, takım sağlığına ilişkin önceki konudaki odaklanma ölçümleriyle eşleştirin (bkz. Konu 9.1 “Takım sağlığı ve geliştirici deneyimi”).

### Dürüst kalın

**11. İletişim hacmini ölçmeyin.** Mesajları, toplantıları ya da ağ bağlantılarını saymak, insanların birlikte iyi çalışıp çalışmadığı hakkında çok az şey söyler ve bireylerin izlenmesine davet çıkarır. Takımınız bilginin nasıl aktığını anlamak için sosyal ağ analizini kullanmayı seçerse, bunu onayla, grup düzeyinde ve takımın kendi öğrenmesi için yapın, bireyleri derecelendirmek için asla.

**12. Devir teslim ölçümlerini takımlarla ve tedarikçilerle gözden geçirin.** Örüntüleri ilgili takımlar ve tedarikçiler arasında paylaşın ve bir ya da iki ortak iyileştirme üzerinde anlaşın. Devir teslim sayılarının ve beklemelerin düşüp düşmediğini izleyin. Tedarikçi sınırları için ölçümleri ortak gözden geçirmelere dahil edin (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Devir teslim sayısı | İşi başkaları yaparken öğeleri tek bir takıma atanmış tutmak; saymamak için ortak bir kuyruğa yeniden atamak | Takım bazında gerçek etkinliği kontrol edin; devir teslimleri yalnızca atamaya göre değil, etkinliğe göre sayın |
| Devir teslim bekleme payı | Yalnızca bir onaylamadan ibaret ilk eylemi kaydetmek; doğru takıma geç atamak | “İlk eylemi” esaslı bir adım olarak tanımlayın; memnuniyet ve çözüm süresiyle karşılaştırın |
| Yeniden atama oranı | Yanlış olsa bile yeniden atamayı reddetmek; öğeleri başka bir takım altında kapatıp yeniden açmak | Çözüm kalitesi ve yeniden açılma oranı; sekip duran öğelerden örnek alın |
| Bağımlılık gecikmesi | Engelli durumu kaydetmemek; yanlış bağımlılığı adlandırmak | Çevrim süresi ve öğe yaşıyla karşılaştırın; bağımlılık alanını takımlarla gözden geçirin |
| Ortak çözüm oranı | Her olayı ortak olarak etiketlemek; gerçek iş olmayan ortak kanallar oluşturmak | Çağrının veya kanalın çözen insanları içerdiğini kontrol edin; çözüm süresi ve sonuçlar |
| Bilgi kapsamı | Kuramsal olarak yapabilecek insanları listelemek; haritayı şişirmek | Eşli çalışma veya tatbikat kanıtı; son değişikliği fiilen kimin yaptığını sorun |
| Paydaş yanıt süresi | Soruları geç kaydetmek; kullanılabilir olmayan bir yanıtı alınmış olarak işaretlemek | Paydaş yanıtın kullanılabilir olduğunu onaylar; sorulardan örnek alın |

Sağlıklı bir okuma şöyledir: yaygın öğeler için daha az devir teslim, kalan sınırlarda daha kısa beklemeler, daha az sekip duran öğe, küçülen bağımlılıklar, birlikte çalışan insanlarca çözülen daha çok olay, birkaç kişi tarafından bilinen kritik bileşenler ve saatler içinde yanıt veren paydaşlar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yönü | Zayıf yönü |
| --- | --- | --- |
| Yükseltmeli katmanlı destek | Uzmanlaşma, erişim denetimi | Devir teslimler, bekleme, bağlam kaybı |
| Çapraz işlevli takımlar | Daha az devir teslim, ortak sahiplik | Geniş beceri gerektirir; uzmanları çoğaltabilir |
| Ortak çözüm | Daha hızlı, daha iyi öğrenme | Aynı anda birkaç kişiyi çeker; koordinasyon gerektirir |
| Sıralı yükseltme | Uzmanların verimli kullanımı | Karmaşık sorunlar için daha yavaş |
| Merkezî uzman takımlar | Uzmanlık derinliği, tutarlı standartlar | Darboğazlar, kuyruklar |
| Gömülü uzmanlar | Hızlı erişim | Yalıtım; dengesiz standartlar |
| Yoğun toplantı kültürü | Ortak farkındalık | Odaklanmayı yer; işi yavaşlatır |
| Eşzamansız yazılı iletişim | Odaklanmayı korur; kararları kaydeder | Acil ya da belirsiz konular için daha yavaş |

Düz yanıt şudur: uzmanları derinliğin önemli olduğu yerde tutun, karmaşık ya da acil sorunlar için insanları gerçek zamanlı bir araya getirin, yetkinlik ve net sahiplikle devir teslimleri azaltın ve toplantıları korunan odaklanmayla dengeleyin.

## Takımınızla tartışılacak sorular

**1. Takımlar arasında sekip duran son olayı ya da talebi izleyin. Nerede ve neden bekledi?**
Öğenin geçmişini kullanın. Her devir teslimi ve beklemeyi işaretleyin. Kolaylaştırıcı eksik bilgiyi, belirsiz sahipliği ve kimsenin izlemediği kuyrukları aramalıdır. Sekmeyi durduracak bir değişiklik üzerinde anlaşın.

**2. En sık hangi takımı bekliyoruz ve daha hızlı olmaları için bizden neye ihtiyaç duyuyorlar?**
Bağımlılıkları ve yol açtıkları gecikmeleri listeleyin. Diğer takımı konuşmaya davet edin ya da onlar için sorular hazırlayın. Devir teslim şablonunda ya da çalışma anlaşmasında bir değişiklik üzerinde anlaşın.

**3. Yalnızca birimiz ya da ikimiz neyi nasıl yapacağını biliyor ve onlar yokken ne olur?**
Bileşenleri ya da görevleri adlandırın. Bilgiyi hangi planın yayacağını sorun: eşli çalışma, dokümantasyon, rotasyon. Kolaylaştırıcı bunu sisteme yönelik bir risk ve uzmanlar için bir iş yükü meselesi olarak ele almaya dikkat etmelidir.

**4. Bir sorunu gerçek zamanlı birlikte çözmek ne zaman onu başkasına aktarmaktan daha iyi çalıştı?**
Bir örneği hatırlayın. Onu çalıştıran neydi: doğru insanlar, bir koordinatör, ortak bir görünüm? Bu yaklaşımın ne zaman kullanılacağını ve nasıl mümkün kılınacağını tartışın; örneğin kalıcı bir kanal ve kimin katılacağına dair kurallar.

**5. Paydaşlarımızdan yanıt için ne kadar bekliyoruz ve bunun maliyeti nedir?**
Açık sorulara ve yaşlarına bakın. Yanıtları neyin yavaşlattığını tartışın: müsaitlik, belirsiz sorular ya da belirsiz yetki. Paydaşlarla bir beklenti ve bunu izlemenin bir yolu üzerinde anlaşın.

**6. Toplantılarımızdan hangileri yazılı bir not ya da bir kararla değiştirilebilir?**
Düzenli toplantıları listeleyin ve her biri için hangi kararı desteklediğini ve kimin orada olması gerektiğini sorun. Birini iptal edin ya da kısaltın. Toplantısız bir zaman bloğunu korumak üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları bağımlılıkların çoğunu elinde tutar ve beklemeyi hisseder. Bağımlılıklarını haritalamalı, sürekli beklediği yetkinlikleri talep etmeli, tek noktalardan kaçınmak için bilgi paylaşmalı ve paydaşları yakında tutmalıdır. Çapraz işlevli bir bileşim çoğu zaman en büyük gecikmeleri ortadan kaldırır.

### Hizmet ve operasyon takımları

Operasyon ve destek takımları devir teslimlerin merkezindedir: alır, yönlendirir ve çözerler. Net sahiplik bilgisini sürdürmeli, zor sorunlar için gerçek zamanlı iş birliğini kullanmalı ve devir teslimleri doğru kaydetmelidir. Hangi sınırların en çok acı çektirdiğini bilirler ve hangi bilginin geri gönderimleri önleyeceğini söyleyebilirler.

### Liderlik ve yönetişim

Liderler devir teslimleri yaratan yapıyı şekillendirir. Takımları ve finansmanı tasarlarken devir teslim ve bağımlılık verilerine bakmalı, yardımcı oldukları yerlerde çapraz işlevli takımları desteklemeli ve iletişim hacmi ölçümlerinden kaçınmalıdır. Yönetişim, tek bir sınırdaki tekrarlayan gecikmeleri düzeltilecek yapısal bir mesele olarak ele almalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar devir teslimleri, oradan oraya aktarılmak, kendilerini tekrarlamak ve beklemek olarak hisseder. Sorunlarının kimde olduğu söylenmeli ve bilgilendirilmeleri sağlanmalıdır. Sektirilme deneyimleri, iş birliğinin ne kadar iyi çalıştığının doğrudan bir ölçüsüdür ve geri bildirimleri sayılarla birlikte okunmalıdır (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Ulusal bir perakendecinin BT grubu bir hizmet masası, bir altyapı takımı, bir uygulama platformu takımı ve birkaç ürün takımı işletir. Kullanıcılar, satış noktası sistemine ilişkin taleplerin çok uzun sürdüğünü bildirir. Aşağıdaki sayılar örnek niteliğindedir.

Hizmet yöneticisi yakın zamandaki 60 talebi izler. Medyan talep 3 takımdan, 85. yüzdelik ise 6 takımdan geçer. Medyan durumda, geçen sürenin yüzde 71’i, alan takım harekete geçmeden önce bir devir teslimden sonra beklemekle geçer. Taleplerin yüzde 22’si ikiden fazla kez yeniden atanır; çoğunlukla altyapı ve platform takımları arasında, ki her biri sorunun sahibinin diğeri olduğuna inanır. Başka bir takımı bekleyerek engelli geçen sürenin medyanı, sertifika içeren talepler için 3 gün, 85. yüzdelikte ise 8 gündür. Platformun sertifika yenileme bilgisi tek bir mühendisin elindedir ve diğer iki kritik bileşen yalnızca birer kişi tarafından bilinir. Mağaza operasyonlarındaki paydaşlar, teslimat takımının sorularını yanıtlamak için medyan 26 saat harcar.

Grup, takımlarla dört değişiklik üzerinde anlaşır. Kısa bir sahiplik tablosu, satış noktası hizmetinin her bileşenine hangi takımın sahip olduğunu ve bir devir teslimin hangi bilgiyi içermesi gerektiğini belirtir. Hizmet masası, sertifika yenilemeleri için çalıştırma kılavuzu erişimi ve otomasyon alır; bu, yaygın bir devir teslimi ortadan kaldırır. Öncelikli olaylar için grup, kalıcı bir kanal ve olay koordinatörünün katmanlara göre yükseltmek yerine ilgili insanları hemen devreye alacağı bir kural oluşturur. Platform takımı, sertifika sürecinde ikinci ve üçüncü bir kişiyi eşleştirir ve diğer iki bileşen için de planda korunan zamanla benzer bir eşleştirme planlar. Teslimat takımı ve mağaza operasyonları, engelleyen sorular için aynı gün yanıt üzerinde anlaşır ve bu bir soru günlüğünde izlenir.

Üç ay sonra medyan talep 2 takımdan geçer, bekleme payı yüzde 38’e ve yeniden atama oranı yüzde 9’a düşer. Sertifikayla ilgili taleplerin medyan engelli süresi bir günün altındadır. Kritik bileşenlerde bilgi kapsamı yüzde 52’den yüzde 81’e çıkar. Mağaza operasyonlarının medyan yanıt süresi 7 saate düşer. BT başkanından, takımların ne kadar iletişim kurduğuna dair bir ölçüm istenir. Hizmet yöneticisi, mesaj hacminin işin akıp akmadığı hakkında çok az şey söylediğini ve izlemenin güveni zedeleyebileceğini açıklar ve bunun yerine devir teslim ve bekleme ölçümlerini önerir. Karar kaydedilir ve sahiplik tablosu hizmet tanımına eklenir.

## Sektör mercekleri

**Girişim (startup).** Küçük takımlar doğal olarak iş birliği yapar ve devir teslimler uzmanlar ortaya çıktığında görünür. Takımları mümkün olduğunca uzun süre çapraz işlevli tutun, sahipliği hafifçe belgeleyin ve tek kişide tutulan bilgiye dikkat edin. Katmanlı desteği çok erken ithal etmeyin.

**Küçük işletme.** Bir ya da iki kişi her şeyi üstlenebilir ve en büyük risk onlara bağımlılıktır. Bilgiyi basit çalıştırma kılavuzlarıyla paylaşın ve yokluklar için yedek sağlayın. Tedarikçilere devir teslimler başlıca sınırdır, bu yüzden net iletişim noktaları ve yükseltme yolları tutun.

**Büyük kurum.** Ölçek birçok takım, katman ve tedarikçi yaratır ve devir teslimler çoğalır. En yaygın öğe yollarını haritalayın, takım sınırlarını hizmetler etrafında tasarlayın ve takımlar arası olaylar için koordinasyon rolleri kullanın. Sınırlar ortak dikkat görsün diye devir teslim verilerini takımlar arasında paylaşın.

**Kamu sektörü.** Sorumluluk çoğu zaman kurumlar, yükleniciler ve yasal sınırlar arasında bölünür ve devir teslimler tedarik ve resmî onay içerir. Sahiplik tablosunu açık yapın, yüklenicilerle ortak gözden geçirmeler kullanın ve sınırları aşan olaylar için ortak kanallar kullanın (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler şunlardır: atama geçmişini çıkarma ve analiz etme çabası, takımların yolları izlemesi ve sahiplik üzerinde anlaşması için zaman, çapraz eğitim maliyeti ve gerçek zamanlı iş birliği için her türlü araç. Takımları yeniden yapılandırmak, kendi maliyetleri olan daha büyük bir karardır.

Getiriler, çözüm ve teslimat sürelerinin kısalması, sekip duran öğelerden doğan daha az yeniden iş, tek bilgi noktalarından doğan daha düşük risk ve daha sakin bir çalışma ortamıdır. Gerekçeyi kendi verilerinizden kurun: geçen sürenin beklemeyle geçen payı, sekip duran öğe sayısı, en kötü sınırdaki gecikmelerin maliyeti ve kilit kişilerin yokluğunun geçmiş olaylar üzerindeki etkisi. Kaynağı ve bağlamı izleyemediğiniz sürece devir teslim maliyetine dair yayımlanmış rakamları anmaktan kaçının. Değişikliklerin maliyetini sayın ve ortadan kaldırılan gecikmeyle karşılaştırın (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Mesajları veya toplantıları saymak.** Gürültüyü ödüllendirir ve gözetime davet çıkarır. İşin akışını ölçün.
- **Her devir teslimin hızını optimize etmek.** Amaç daha az devir teslimdir. Yapabildiğiniz yerde ortadan kaldırın.
- **Beklemeler için alan takımı suçlamak.** Neden çoğu zaman kuyruk ve yapıdır. Sisteme bakın.
- **Varsayılan olarak yükseltmek.** Sıralı katmanlar bekleme ekler. Karmaşık sorunlar için insanları bir araya getirin.
- **Belirsiz sahiplik.** Öğeler sekip durur. Bir sahiplik tablosu yayımlayın ve güncel tutun.
- **Kahraman uzmanlar.** Tek bilgi noktaları hem risk hem yüktür. Bilgiyi bilinçli olarak yayın.
- **İş birliği olarak toplantılar.** İşi dışarı itebilirler. Onları kararlara göre gözden geçirin.
- **Bilgi kapsamını bireysel bir derecelendirme saymak.** Bir sıralamaya dönüşür. Bir sistem ölçümü olarak tutun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Devir teslimlerin görünürlüğü | Anekdotlar | Birkaç hizmet için çizilmiş yollar | Devir teslim sayısı, bekleme payı ve yeniden atamalar geçmişten ölçülür | Ölçümler takımlarla gözden geçirilir ve sonuçlara bağlanır | Takımlar ve tedarikçiler arasında ortak görünüm; sınırlar veriden yeniden tasarlanır |
| Devir teslimleri azaltmak | Varsayılan olarak yükselt | Bazı çalıştırma kılavuzları ve şablonlar | Sahiplik tabloları; yetkinlik ilk takıma taşınmış; zor sorunlar için iş birliği | Bağımlılıklar haritalanır ve azaltılır; ortak çözüm izlenir | Kurum genelinde, aralarında asgari bağımlılık olan, hizmetler etrafında örgütlenmiş takımlar |
| Bilgi ve paydaşlar | Uzmanlar her şeyi taşır | Gayriresmî paylaşım | Bilgi kapsamı haritalanmış; paydaş soruları kaydedilmiş | Kapsam ve yanıt süreleri yönetilir; eşli çalışma planlanır | Bilgi ve kararlar takımlar, tedarikçiler ve paydaşlar arasında serbestçe akar |

## Kontrol listesi

- [ ] Tipik bir öğenin yolu gerçek izleyici geçmişinden izlendi.
- [ ] Devir teslim sayısı, bekleme payı ve yeniden atama oranı öğe türü başına ölçülüyor.
- [ ] Her hizmet ve bileşenin sahipliği yayımlanmış ve güncel.
- [ ] Bir devir teslim şablonu, alan takımın ihtiyaç duyduğu bilgiyi belirtiyor.
- [ ] Karmaşık veya acil olaylar, bir koordinatörle gerçek zamanlı iş birliğini kullanıyor.
- [ ] Takımlar arası bağımlılıklar haritalandı ve en kötüleri azaltılıyor.
- [ ] Kritik bileşenlerin bilgi kapsamı haritalandı ve yayma planı var.
- [ ] Paydaş soruları kaydediliyor ve yanıt süreleri gözden geçiriliyor.
- [ ] Hiçbir ölçüm mesajları, toplantıları veya bireysel iletişimi saymıyor.
- [ ] Sonuçlar ilgili takımlar ve tedarikçilerle paylaşılıyor.

## Yapay zekâ istemleri

**Bir iş öğesi yolunu analiz edin.**

```text
[sayı] adet [öğe türü] için anonimleştirilmiş atama geçmişleri şöyle: öğe,
takım dizisi, atama ve ilk eylem zaman damgaları: [yapıştırın]. Devir teslim
sayılarını ve beklemeleri hesapla veya betimle, yaygın yolları ve uzun
kuyruğu belirle ve beklemenin ve sekmenin olası nedenlerini, takımlara
sorulacak sorularla birlikte öner. Bireyler hakkında hiçbir çıkarım yapma.
Varsayımlarını listele.
```

**Bir sahiplik tablosu taslağı hazırlayın.**

```text
[ad] hizmeti için şu bileşenler ve takımlarla bir sahiplik tablosu taslağı
hazırla: [liste]. Her bileşen için sahip takımı, ona nasıl ulaşılacağını,
bir devir teslimin neyi içermesi gerektiğini ve yükseltme yolunu ekle.
Sahipliğin belirsiz veya ortak göründüğü bileşenleri işaretle. Tek sayfayla
sınırla. Varsayımlarını ve takımlara yönelik soruları listele.
```

**Bilgi yayma planı yapın.**

```text
Kritik bileşenlerimiz ve her birini işletmeye muktedir kişi sayısı şöyle:
[yapıştırın]. [sayı] kişiden az kişi tarafından bilinen bileşenler için
bilgiyi yayacak bir plan öner: eşli çalışma, dokümantasyon, tatbikatlar ve
rotasyon. Plan sırasında uzmanların iş yükünü nasıl koruyacağımızı ve
bireyleri sıralamadan ilerlemeyi nasıl izleyeceğimizi öner. Varsayımlarını ve
risklerini listele.
```

**İş birliğine dayalı bir olay yaklaşımı tasarlayın.**

```text
[takımlar] ile [kurum türü] içinde öncelikli olayların gerçek zamanlı ortak
çözümü için hafif bir yaklaşım tasarla. Ortak bir alanın nasıl açılacağını,
kimin koordine edeceğini, kimin davet edileceğini, neyin kaydedileceğini ve
çok fazla kişinin devreye girmesinden nasıl kaçınılacağını ekle. Yaklaşımın
işe yarayıp yaramadığını anlamak için ölçümleri ekle. Varsayımlarını ve
uyarılarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir devir teslim veya iş birliği metriği için eşleştirilmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir iş birliği metriği girdisinin bireyleri değil işi ölçtüğünü, oyunlaştırma yolu ve koruma önlemiyle birlikte denetlemek için kullanın.

## Temel çıkarımlar

- Gecikmenin çoğu devir teslimler arasındaki beklemelerdedir; bu yüzden devir teslim sayısını, bekleme payını ve yeniden atamaları iş öğesi geçmişinden ölçün.
- Yetkinliği işe taşıyarak, sahipliği netleştirerek ve bağımlılıkları haritalayıp keserek devir teslimleri azaltın.
- Karmaşık veya acil sorunlar için doğru insanları gerçek zamanlı bir araya getirin.
- Kritik bileşenlerin bilgisini yayın ve tek bilgi noktalarını bir sistem riski olarak ele alın.
- Paydaşları, engelleyen sorulara hızlı yanıtlarla sürekli dahil edin.
- İletişim hacmini asla ölçmeyin ve bireyleri iş birliği konusunda derecelendirmeyin.

## Kaynaklar ve ileri okuma

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
