# Donanım varlığı yaşam döngüsü metrikleri

**Aygıtlar, motive olmuş insanların günlük araçlarıdır ve aynı zamanda bir maliyet, risk ve israf akışıdır. Bu yüzden yenilemeyi dönemsel bir sarsıntı yerine düzenli bir akış olarak planlayın, yaşı ve arızayı kendi verilerinizden ölçün ve güvenli imhayı ve yeniden kullanımı işin parçası sayın.**

## Genel bakış ve motivasyon

Her hizmetin ardında fiziksel şeyler vardır: dizüstü bilgisayarlar, telefonlar, sunucular, ağ ekipmanı, yazıcılar ve bunları bir arada tutan kablolar ile raflar. Donanımın, yazılımın sahip olmadığı bir yaşam döngüsü vardır. Satın alınır, sevk edilir, imaj yüklenir, dağıtılır, onarılır, taşınır, emekliye ayrılır, silinir ve geri dönüştürülür; her adımın bir maliyeti ve bir riski vardır. Bir müşteri görüşmesinde arızalanan bir dizüstü bilgisayar, kendisinden daha pahalıya mal olur. Disklerinde veri varken binadan çıkan emekli bir sunucu, yeniden satış değerinden çok daha pahalıya mal olur. Bir çekmece dolusu kullanılmayan telefon, hiçbir şey yapmayan sermayedir.

Projeleri, ihtiyaç duydukları ortam ve destekle motive olmuş bireyler etrafında kurma çevik amacı doğrudan geçerlidir. İnsanlar yavaş, arızalı ya da eksik bir aygıtta en iyi işlerini yapamaz. ITIL geleneği yaşam döngüsü bakışını ve beraberindeki kayıtları sağlar; bunlar daha önceki BT varlık yönetimi konusunda ele alınmıştır (bkz. Konu 7.1 “BT varlık yönetimi metrikleri”). Bu konu, fiziksel ekipmana özgü ölçümleri ekler: ne kadar eski olduğu, ne sıklıkla arızalandığı, ne kadar iyi kullanıldığı ve nasıl ayrıldığı.

Donanım planlaması çoğunlukla büyük döngülerle yapılır: birkaç yılda bir her şeyi tek büyük satın almayla değiştirmek, sonra sonuçlarıyla yaşamak. Sürekli teslimat anlayışında daha dengeli bir alternatif, ortamın bir kesrini sürekli yenilemektir. Bu, harcamayı yumuşatır, imaj yükleme ve devir teslim iş yükünü yayar ve bir sonrakini satın almadan önce her partiden öğrenmenize olanak verir. Aynı zamanda her aygıtın ne zaman gitmesi gerektiğine karar vermek için yaş ve arıza verisine ihtiyacınız olduğu anlamına gelir.

Üç fikir ölçümleri düzenler.

- **Yaş ve arıza.** Bir aygıt popülasyonunun [arıza oranı](https://en.wikipedia.org/wiki/Failure_rate) ömrü boyunca değişir ve [arızalar arası ortalama süre](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF), onarılabilir öğeler için yaygın bir özettir. Ortalamalar çok şey gizler: hatalı bir bileşenli parti erken arızalanırken geri kalanlar iyi olabilir. Arızaya model, parti ve yaş bandı bazında bakın ve planlama için üreticilerin rakamlarını değil kendi geçmişinizi kullanın.
- **Kullanım.** Kimsenin kullanmadığı bir aygıt israftır, aşırı yüklenmiş bir aygıt ise sürtünme kaynağıdır. Ekipmanın kullanılıp kullanılmadığını ve işe uyup uymadığını ölçün.
- **Sorumlu çıkış.** Emekli ekipman hassas veri tutabilir, değerli ve tehlikeli malzemeler içerebilir ve elektronik atığa katkıda bulunabilir. [Elektronik atık](https://en.wikipedia.org/wiki/Electronic_waste) büyüyen bir çevre sorunudur ve birçok yargı alanı bunun nasıl ele alınması gerektiğini düzenler. Güvenli [veri silme](https://en.wikipedia.org/wiki/Data_erasure) ve sertifikalı yeniden kullanım ya da geri dönüşüm yaşam döngüsünün sonudur, sonradan akla gelen bir şey değildir. [Döngüsel ekonomi](https://en.wikipedia.org/wiki/Circular_economy) yaklaşımı, ürünleri ve malzemeleri olabildiğince uzun süre kullanımda tutar.

Donanım metrikleri tanıdık bir çarpıtmaya açıktır. Düşük ortalama aygıt yaşı için ödüllendirilen bir takım, iyi durumdaki aygıtları yenileyebilir. Düşük harcama için ödüllendirilen bir takım, arızalar insanları aksatana kadar ömürleri uzatabilir. [Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi geçerlidir; bu yüzden her ölçüm, yalnızca rakamın değil insanların ve gezegenin de daha iyi durumda olduğunu denetleyen bir kontrolle eşlenir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **Düzenli bir akış planlayın.** Her dönem ortamın bir payını yenileyin ve her partiden öğrenin.
- **Kanıta dayanarak karar verin.** Ne zaman değiştirileceğini seçmek için kendi arıza, yaş ve kullanım verilerinizi kullanın.
- **Dağılıma bakın.** Ortalamalar, eski, arızalı ve atıl kuyruğu gizler.
- **Toplam maliyeti sayın.** Satın alma fiyatı, bir aygıtın ömrü boyunca maliyetinin yalnızca bir parçasıdır (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”).
- **Veriyi sonuna kadar koruyun.** Bir aygıt, verisi gidene ve kanıt kaydedilene kadar emekliye ayrılmış sayılmaz.
- **Yeniden kullanımı ve onarımı tercih edin.** Ekipmanı, insanlara iyi hizmet ettiği sürece kullanımda tutun.
- **Ekipmanı çalışma ortamının parçası sayın.** İnsanların çalışan aygıtlara ihtiyacı vardır.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL pratiği | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Yaş profili | Sınıf bazında aygıt yaşının dağılımı ve planlanan ömrü aşanların payı | medyan yaş ve 85. yüzdelik yaş; sınıf için planlanan ömürden eski aygıtların payı | yıl; yüzde | Varlık sicilindeki satın alma ve devreye alma tarihleri | BT varlık yönetimi; kapasite ve performans yönetimi | Teknik sağlık incelemesi | Üç aylık |
| Zamanında yenileme oranı | Planlanan değiştirmeye ulaşanlardan planlanan pencere içinde değiştirilenlerin payı | pencere içinde değiştirilen aygıtlar / dönemde planlanan değiştirmeye ulaşan aygıtlar | yüzde | Varlık sicili ve yenileme planı | BT varlık yönetimi; hizmet talebi yönetimi | Çalışma ortamının planlı bakımı | Üç aylık |
| Modele göre arıza oranı | Model ve yaş bandı bazında, yıllık 100 aygıt başına arızalar | dönemdeki donanım arızaları / hizmetteki ortalama aygıt sayısı, yıla ölçeklenmiş, çarpı 100 | yıllık 100 aygıt başına arıza | Siciliyle birleştirilmiş olay ve onarım kayıtları | Olay yönetimi; BT varlık yönetimi | Çalışma ortamındaki kusurlar | Üç aylık |
| Atıl aygıt payı | Belirli bir dönemde etkinliği olmayan verilmiş aygıtların payı | 60 günde oturum açma ya da ağ etkinliği olmayan aygıtlar / verilmiş aygıtlar | yüzde | Sınıf bazında toplanmış uç nokta yönetim günlükleri | BT varlık yönetimi; finansal yönetim | İsrafın azaltılması | Aylık |
| Değiştirme teslim süresi | Arızalı ya da kayıp bir aygıtın çalışan biriyle değiştirilme süresi | bildirimden kullanıcının çalışan bir aygıta sahip olmasına kadar geçen saat ya da gün sayısının medyanı ve 85. yüzdeliği | gün | Olay ve talep kayıtları | Olay yönetimi; hizmet talebi yönetimi | Bir takım üyesinin önünü açma süresi | Aylık |
| Güvenli imha tamamlanması | Verinin silindiğine ya da imha edildiğine dair kaydedilmiş kanıtı olan emekli aygıtların payı | silme ya da imha kanıtı olan emekli aygıtlar / emekli edilen aygıtlar | yüzde | İmha kayıtları ve silme sertifikaları | Bilgi güvenliği yönetimi; BT varlık yönetimi | Ekipmanı emekliye ayırmak için bitti tanımı | Aylık |
| Yeniden kullanım ve geri dönüşüm oranı | Emekli aygıtlardan onaylı bir kanal aracılığıyla yeniden kullanılan, yenilenen ya da geri dönüştürülenlerin payı | onaylı kanal aracılığıyla yeniden kullanılan, yenilenen ya da geri dönüştürülen aygıtlar / emekli edilen aygıtlar | yüzde | İmha ve iş ortağı kayıtları | BT varlık yönetimi; tedarikçi yönetimi | Planlamada sürdürülebilirlik hedefi | Üç aylık |

Aygıt sınıflarını (örneğin standart dizüstü bilgisayar, geliştirici iş istasyonu, cep telefonu, sunucu, ağ anahtarı) ve her birinin planlanan ömrünü tanımlayın. Arıza oranı yalnızca donanım arızalarını sayar; yazılım arızalarını, ayrıca kodlanan kullanıcı hasarını ve kaybı hariç tutar. Değiştirme teslim süresinin saati bildirimle başlar ve bir aygıt sevk edildiğinde değil, kullanıcı çalışan bir aygıtı onayladığında durur. Atıl aygıt payı, kasıtlı olarak yedek tutulan aygıtları hariç tutar; bunlar ayrı bir sınıf olarak sayılır.

## Öneriler

### Akışı planlayın

**1. Her sınıf için planlanan bir ömür belirleyin ve onu bir hipotez olarak ele alın.** Tedarikçinin garantisinden ve kendi deneyiminizden başlayın ve veri geldikçe gözden geçirin. Dizüstü bilgisayarlar için birkaç yıllık, ağ ekipmanı için daha uzun, yoğun kullanılan aygıtlar için daha kısa bir planlanan ömür tipiktir; ancak ortamınız için doğru rakam kendi arıza ve kullanım verilerinizden gelir. Gerekçeyi sicile yazın.

**2. Küçük partilerle sürekli yenileyin.** Her ay ya da çeyrekte aygıtların düzenli bir payını yaş, arıza geçmişi ve ihtiyaca göre sıralayarak değiştirin. Küçük partiler maliyeti yumuşatır, imaj yükleme ve devir teslim işini yayar ve taahhüt etmeden önce yeni bir modeli birkaç kullanıcıyla denemenize izin verir. Birkaç yılda bir yapılan tek bir büyük yenileme riski ve emeği yoğunlaştırır.

**3. Ölçülü bir yedek tamponu tutun.** Küçük bir hazır aygıt havuzu; arızalar, kayıplar ve yeni başlayanlar için değiştirme teslim süresini kısaltır. Tamponun büyüklüğünü kendi arıza ve işe alım geçmişinizden belirleyin ve üç ayda bir gözden geçirin. Yedekleri kendi sınıfı olarak sayın ki kullanım ölçümünü bozmasınlar.

**4. Finansla birlikte planlayın, onların karşısında değil.** Aygıtların nasıl aktifleştirildiği ve amortismana tabi tutulduğu ve düzenli bir yenilemenin bütçede nasıl göründüğü üzerinde anlaşın. [Amortisman](https://en.wikipedia.org/wiki/Depreciation) kuralları, bir değiştirmenin kâğıt üzerinde ne zaman en ucuz olduğunu etkiler ve insanlara hâlâ iyi hizmet eden aygıtların değiştirilmesini yönlendirmemelidir. Plan ve varsayımları üzerine ortak bir görünüm tutun.

### Kendi verilerinizden öğrenin

**5. Arızayı model, parti ve yaşa göre inceleyin.** Onarım ve olay kayıtlarını sicille birleştirin ve model ve yaş bandı bazında yıllık 100 aygıt başına arızalara bakın. Erken arızalanan partileri, belirli bir biçimde arızalanan modelleri ve arızaların artmaya başladığı yaşı arayın. Bulguları modelleri seçmek ve değiştirmenin zamanlamasını belirlemek için kullanın. Küçük örneklemler konusunda ihtiyatlı olun ve bir modelin yargılamak için çok az aygıtı olduğunda bunu söyleyin (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**6. Garantiyi ve onarımı akılcı kullanın.** [Garantinin](https://en.wikipedia.org/wiki/Warranty) neyi ve ne kadar süre kapsadığını bilin, talepleri kaydedin ve onarımın maliyetini değiştirmeyle karşılaştırın. Onarım ekipmanı kullanımda ve atık akışının dışında tutar; parçalar ve bilgiler için onarım hakkı birkaç yerde etkin bir politika konusudur. Diğer şeyler eşitken onarılabilen ve yükseltilebilen modelleri tercih edin.

**7. Neyin atıl, neyin zorlanmış olduğunu bulmak için kullanımı ölçün.** Etkinlik verilerini sınıf bazında toplayın ve hiç kullanılmayan aygıtları ve sürekli sınıra dayanan aygıtları arayın. Atıl aygıtlar yeniden atanabilir ya da emekliye ayrılabilir. Zorlanan aygıtlar sürtünmedir ve kullanıcılar bunu hisseder (bkz. Konu 6.4 “Kullanıcı ve çalışan deneyimi”). Gizliliğe saygı gösterin: asla kişi bazında değil sınıf ve grup bazında raporlayın ve en az veriyi kullanın.

**8. Değiştirme teslim süresini bir hizmet olarak izleyin.** Bir arıza ya da kayıptan sonra bir kişinin çalışan bir aygıta ulaşmasının ne kadar sürdüğünü ölçün ve adımları dahil edin: bildirim, onay, stok, imaj yükleme, teslimat ve devir teslim. 85. yüzdelik, şanssız vakaların ne kadar kötü olduğunu söyler. Önce en yavaş adımı düzeltin.

### Aygıtları iyi yönetin

**9. Aygıtları merkezî ve tutarlı biçimde yönetin.** [Mobil aygıt yönetimi](https://en.wikipedia.org/wiki/Mobile_device_management) ve benzeri araçlar, aygıtları uzaktan kaydetmenize, yapılandırmanıza, güncellemenize ve silmenize olanak verir; bu da elle emeği ve riski azaltır. Bunları sicili doğru tutmak, güncellemeleri insanların odağına özen göstererek itmek ve kayıp aygıt müdahalesini desteklemek için kullanın.

**10. Güvenli imhayı tanımlı bir süreç yapın.** Ortam temizleme için, Amerika Birleşik Devletleri Ulusal Standartlar ve Teknoloji Enstitüsü'nün yayımladığı kılavuz gibi tanınmış bir standardı ya da kendi yargı alanınızdaki karşılığını izleyin. Her aygıt için yöntemi, tarihi ve kanıtı kaydedin ve imha ve geri dönüşüm için sertifikalı iş ortakları kullanın. Kanıtı olmayan bir imha adımı bir boşluktur.

**11. Önce yeniden kullanımı, sonra geri dönüşümü tercih edin.** Aygıtlar hâlâ çalışıyorsa bunları kurum içinde yeniden dağıtın, onaylı bir iş ortağı aracılığıyla bağışlayın ya da sildikten sonra yeniden satın. Geri kalanlar için sertifikalı geri dönüşümcüler kullanın. Emekli aygıtların her kanala giden payını ve doğrudan atığa gidenlerin nedenlerini ölçün. Elektronik atıkla ilgili düzenlemeler yargı alanına göre değişir ve uygulanır; bu yüzden hukuk ve sürdürülebilirlik meslektaşlarınızı işe katın.

**12. Yaşam döngüsünü onu kullananlarla gözden geçirin.** Üç ayda bir finans, güvenlik, satın alma, hizmet masası ve birkaç kullanıcıyı bir araya getirip yaşa, arızaya, teslim süresine ve imhaya bakın. Neyin işe yaradığını ve neyin insanları rahatsız ettiğini sorun. Bu, çalışma ortamı etrafında sürekli iş birliğidir ve planı gerçekçi tutar.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlanır | Eşlenmiş koruma metriği ya da pratiği |
| --- | --- | --- |
| Yaş profili | Ortalamayı düşürmek için sağlıklı aygıtları değiştirmek; eski aygıtları yedek olarak yeniden sınıflandırıp hariç tutmak | Yaş bandına göre arıza oranı; atıl aygıt payı; yeniden sınıflandırmanın incelenmesi |
| Zamanında yenileme oranı | Planlanan pencereyi genişletmek; planı düzenleyerek planlanan tarihleri ertelemek | Gerekçeleriyle günlüğe kaydedilen plan değişiklikleri; arıza ve kullanıcı geri bildirimiyle karşılaştırmak |
| Modele göre arıza oranı | Arızaları kullanıcı hasarı ya da yazılım arızası olarak kodlamak; onarım kayıtlarını geciktirmek | Arıza kodlamasından örnek almak; onarım kayıtlarını olay kayıtlarıyla karşılaştırmak |
| Atıl aygıt payı | Zamanlanmış arka plan etkinliğini kullanım saymak; atıl aygıtları hayalet kullanıcılara yeniden atamak | Etkinlik sinyali olarak insan oturum açmasını kullanmak; atamaları rastgele denetlemek |
| Değiştirme teslim süresi | Saati sevkte durdurmak; kullanıcı çalışan bir aygıta sahip olmadan talebi kapatmak | Saat kullanıcı onayında biter; son değiştirmelerin anketi |
| Güvenli imha tamamlanması | Kanıtsız silme kaydetmek; seri numaralarıyla eşleşmeyen sertifikalar | Sertifikaları seri numaralarıyla eşleştirmek; imha iş ortağıyla bir örneği denetlemek |
| Yeniden kullanım ve geri dönüşüm oranı | Sonraki işlemi bilinmeyen bir komisyoncuya gönderilen aygıtları geri dönüştürülmüş saymak | Sertifikalı iş ortakları ve sonraki işlem raporlaması zorunluluğu; örnek denetimler |

Sağlıklı bir okuma; ince bir eski kuyruğu olan yaş profili, satın almayı yönlendiren arıza oranları, kısa değiştirme süreleri, eksiksiz imha kanıtı ve atığa giden ekipman payında bir düşüştür.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Sabit döngülü yenileme | Öngörülebilir bütçe ve basit kurallar | İyi durumdaki aygıtları değiştirir; büyük bir iş yükü tepesi yaratır |
| Partiler hâlinde sürekli yenileme | Yumuşak maliyet ve iş yükü; partiler arasında öğrenme | İyi veri ve disiplin gerektirir |
| Arızalanana kadar çalıştırma | En düşük satın alma maliyeti | İnsanları aksatır; plansız maliyet; eski sistemlerin güvenlik riski |
| Kısa planlanan ömür | Daha yeni, daha hızlı, daha iyi desteklenen | Daha yüksek maliyet ve daha fazla atık |
| Uzun planlanan ömür | Daha düşük maliyet ve daha az atık | Kuyrukta daha fazla arıza ve güvenlik maruziyeti |
| Kurum içi onarım ve yeniden kullanım | Aygıtları kullanımda tutar; daha az atık | Beceri ve parça gerektirir |
| Dış kaynaklı imha | Uzman ele alma | Aşağı akış zincirinin gözetimini gerektirir |

Düz yazıyla yanıt şudur: yaşa, arızaya ve ihtiyaca dayanarak küçük partilerle sürekli yenileyin, insanlara hizmet ettiği yerde onarın ve yeniden kullanın ve imha zincirini kanıtlayabileceğiniz bir standarda bağlı tutun.

## Takımınızla tartışılacak sorular

**1. Aygıtlarımızın yaş ve arıza tablosu nasıl görünüyor ve en eski olanlar kimde?**
Yaş dağılımını ve banda göre arıza oranını gösterin. En eski aygıtların kimde olduğuna ve bunların güvenilir ekipmana en çok ihtiyaç duyan kişiler olup olmadığına bakın. Kolaylaştırıcı, takımın bu tabloya dayanarak yenileme sırası hakkında neyi değiştireceğini sormalıdır.

**2. Birinin aygıtı bozulduktan sonra çalışan bir aygıt alması ne kadar sürüyor?**
Son üç değiştirmeyi bildirimden çalışan bir aygıta kadar izleyin. Beklemeleri not edin. Hangi adımın kaldırılabileceğini ya da otomatikleştirilebileceğini sorun. Bir değişiklik ve etkisini ölçmenin bir yolu üzerinde anlaşın.

**3. Hangi modeller bize en çok sorun çıkarıyor ve bunu nereden biliyoruz?**
En yüksek arıza ya da bilet oranına sahip modelleri listeleyin. Örneklemin yargılamaya yetecek kadar büyük olup olmadığını denetleyin. Bulguların bir sonraki satın almayı nasıl etkilediğini sorun. Etkilemiyorlarsa bunları satın almaya nasıl geri besleyeceğinize karar verin.

**4. Emekli edilmiş bir aygıt üzerinde veriyle ortaya çıksa ne yapardık?**
İmha yolunu ve her adımda tutulan kanıtı gözden geçirin. En zayıf halkanın nerede olduğunu ve aşağı akıştaki iş ortağını kimin doğruladığını sorun. Gelecek çeyrek için imha kanıtının rastgele bir denetimi üzerinde anlaşın.

**5. Ekipmanımız nerede atıl ve neden?**
60 günde kullanımı olmayan aygıtlara ve yedeklere bakın. Bunların yeniden atanıp atanmayacağını, emekliye ayrılıp ayrılmayacağını ya da tutulup tutulmayacağını sorun. Konuşma, insanlara verilenle ihtiyaç duyulan arasındaki uyumsuzlukları da ortaya çıkarır.

**6. Emekliye ayırdıklarımızın daha fazlasını yeniden kullanmak ya da onarmak için neler gerekir?**
Engelleri listeleyin: beceriler, parçalar, politika ya da iş ortakları. Tek bir aygıt sınıfıyla yapılacak bir pilotun nasıl görüneceğini ve nasıl ölçüleceğini sorun. Sürdürülebilirlik ve finans bakış açılarını dahil edin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları güvenilir makinelere ve test aygıtlarına bağımlıdır ve yavaş derlemeleri ve arızalı dizüstü bilgisayarları doğrudan hisseder. Kendilerini yavaşlatan ekipmanı bildirmeli, rolleri için model seçimine katılmalı ve hızlı bir değiştirme yolu beklemelidir. Telefonlar gibi fiziksel aygıtlarda test yapan takımlar, bu aygıtları sahipleri ve yenileme planı olan varlıklar olarak ele almalıdır.

### Hizmet ve operasyon takımları

Operasyon takımları tedarik zincirini yürütür: satın alma, teslim alma, imaj yükleme, dağıtım, onarım ve imha. Kayıtları güncel tutmalı, arıza örüntülerini izlemeli, makul bir yedek havuzu bulundurmalı ve imha kanıtını saklamalıdır. Fiziksel işi taşırlar ve kapasiteleri yenilemenin ne kadar hızlı gidebileceğini sınırlar.

### Liderlik ve yönetişim

Liderler öngörülebilir maliyet, düşük risk ve bir sürdürülebilirlik hikâyesi ister. Düzenli yenilemeyi finanse etmeli, çıplak ortalama yaş yerine yaş ve arıza verisi istemeli ve imha kanıtını zorunlu kılmalıdır. Yönetişim, çevresel ve veri koruma yükümlülüklerinin karşılandığını ve koşullar değiştikçe planın yeniden ele alındığını denetlemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar çalışan bir aygıt ister; çalışmadığında hızla değiştirilmesini ister. Sonucun bir kısmına da onlar sahiptir: sorunları erken bildirmek, ekipmanı iade etmek ve taşındıklarında BT'ye haber vermek. Ekipmana ve değiştirme sürecine dair görüşleri, elde edilebilecek en doğrudan geri bildirimdir. Onları, işleri için model seçiminde dahil edin.

## Uygulamada: çevik bir ITIL örneği

Bir il yönetiminin BT departmanı, 40 sahada 3.800 çalışanı destekler; ofis, saha ve paylaşımlı aygıtlardan oluşan bir karışım vardır. Aşağıdaki sayılar açıklayıcıdır.

İl, dört yılda bir tüm dizüstü bilgisayarları tek bir satın almayla değiştiriyordu ve son döngü, değiştirmeden önceki yıl arızalarda bir sıçrama ve değiştirme yılında aylarca imaj yükleme işiyle sona erdi. Varlık yöneticisi düzenli bir yenileme önerir ve sicilden ve onarım kayıtlarından bir tablo oluşturur. Medyan dizüstü bilgisayar yaşı 3,2 yıl ve 85. yüzdelik 5,1 yıldır. Yılda 100 dizüstü bilgisayar başına arızalar, üç yaşın altındaki aygıtlar için yaklaşık 6'dan beş yaşın üzerindeki aygıtlar için yaklaşık 19'a yükselir. Tek bir partide satın alınan bir model, iki yaşında yılda 100 başına 24 arıza gösterir; nedeni bir batarya hatasıdır. Medyan değiştirme teslim süresi 5 gündür ve 85. yüzdelik 12 gündür; çoğunlukla imaj yüklemeyi beklemektir. Atıl aygıt payı yüzde 7'dir; çoğunlukla yedekler ve uzun izindeki çalışanların aygıtlarıdır. Geçen yıl emekli edilen 410 dizüstü bilgisayardan 366'sının kayıtlı bir silme sertifikası vardır; yani tamamlanma oranı yüzde 89'dur ve yüzde 12'si aşağı akış raporlaması olmayan bir geri dönüşümcüye gitmiştir.

Takım dört değişiklik yapar. Dizüstü bilgisayarların yaklaşık yüzde 6'sını üç ayda bir yaş ve arıza geçmişine göre sıralayarak, önce saha çalışanları ve en eski aygıtlarla yenilemeye geçer. Hatalı parti için garanti kapsamında tedarikçiyle pazarlık eder. Standart imajla önceden yüklenmiş, ortamın yüzde 2'si büyüklüğünde bir yedek havuzu tutar; bu, imaj yükleme beklemesini keser. İmha edilen her aygıt için seri numarasıyla eşleşen bir sertifika şart koşar ve aşağı akış işlemini raporlayan bir geri dönüşümcüye geçer. Ayrıca dört yaşın altındaki aygıtları yenileyip yeniden dağıtmak için küçük bir pilot başlatır.

İki çeyrek sonra 85. yüzdelik değiştirme teslim süresi 4 gündür, beş yaşın üzerindeki aygıt payı yüzde 22'den yüzde 13'e düşmüştür, imha kanıtı tamamlanma oranı yüzde 99'dur ve onaylı kanallar üzerinden yeniden kullanım ve geri dönüşüm oranı yüzde 94'tür. Maliye ofisi ortalama aygıt yaşı için tek bir hedef ister ve varlık yöneticisi, düşük bir ortalama yaşın sağlıklı aygıtları değiştirerek satın alınabileceğini açıklayarak yaş profilini ve arıza oranını birlikte izlemeyi önerir. Karar, altı ay sonra yapılacak bir incelemeyle birlikte karar günlüğüne kaydedilir.

## Sektör mercekleri

**Girişim (startup).** Aygıtlar gerektikçe ve çoğu zaman onu kullanacak kişi tarafından satın alınır. Satın alma tarihleriyle basit bir liste tutun, ayrılışta aygıtları silin ve gereğinden fazla almaktan kaçının. Yönetilen bir kayıt aracını erken kullanın; sonradan eklemekten daha ucuzdur.

**Küçük işletme.** Arızalı bir aygıtın maliyeti birkaç kişiye düşer. Bir ya da iki yedek tutun, garanti tarihlerini kaydedin ve silme ve imha için bir rutininiz olsun. Yerel geri dönüşümcüler ve yenileyiciler iyi iş ortakları olabilir. Üç satırlık bir imha kontrol listesi, hiç olmamasından iyidir.

**Büyük işletme.** Ölçek, parti davranışını ve tedarikçi yönetimini önemli kılar. Tedarikçilerle pazarlık etmek için arıza verilerini kullanın, sınıf başına birkaç modeli standartlaştırın ve lojistik desteğiyle sürekli yenileme yürütün. Sürdürülebilirlik raporlamasıyla hizalanın; çünkü donanım çoğunlukla BT'nin ayak izine hâkimdir.

**Kamu sektörü.** Satın alma kuralları, kayıt saklama ve sıkı veri koruma yaşam döngüsünü şekillendirir. Temizlemeyi tanınmış bir standarda göre belgeleyin, imha kanıtını gereken süre boyunca saklayın ve sürdürülebilirlik ve onarım konusunda kamusal taahhütleri göz önünde bulundurun. Kamu kurumlarından e-atığı raporlamaları istenebilir (bkz. Konu 8.3 “Uyum ve denetim metrikleri”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler; sicil, onarım ve uç nokta verilerini birleştirme emeği; henüz yoksa aygıt yönetimi için bir miktar araç; yedek havuzu; ve kanıtlı imha için süreç çalışmasıdır. Tasarruflar ve faydalar, daha az aksatıcı arıza, daha yumuşak bir bütçe, daha az boşa giden ekipman ve daha düşük bir veri olayı riski olarak ortaya çıkar.

Gerekçeyi kendi verilerinizden kurun. Bir aygıtı planlanan ömrünün ötesinde çalıştırmanın maliyetini, destek emeği ve arıza başına kaybedilen çalışma süresiyle birlikte, daha erken değiştirmenin maliyetiyle karşılaştırın. Yedek havuzunun maliyetini, arıza başına kurtarılan iş günü kaybıyla karşılaştırın. Silme kanıtı olmayan emekli aygıtların sayısını ve bunun ardından gelecek tek bir veri olayının maliyetini sayın. Yayımlanmış kaynaklardan ortalama aygıt ömürlerini ya da e-atık rakamlarını yöntemlerini ve tarihlerini denetlemeden aktarmaktan kaçının. Toplam sahip olma maliyeti bu parçaları bir araya getirir (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”) ve bir aygıtın tam [toplam sahip olma maliyeti](https://en.wikipedia.org/wiki/Total_cost_of_ownership) satın almayı, desteği, enerjiyi, aksamayı ve imhayı içerir.

## Anti-desenler ve tuzaklar

- **Her şeyi takvime göre değiştirmek.** Çalışan aygıtları israf eder ve bir iş yükü sıçraması yaratır. Yaşı, arızayı ve ihtiyacı kullanın.
- **Arızalanana kadar çalıştırmak.** Plansız maliyet ve aksama tasarrufu aşar. Yaş kuyruğunu izleyin.
- **Ortalama yaşı hedef olarak kullanmak.** Sağlıklı aygıtlar değiştirilerek tutturulabilir. Profili ve arıza oranını gösterin.
- **Üreticilerin güvenilirlik rakamlarına güvenmek.** Sizin kullanımınız farklıdır. Kendi arıza verinizi kullanın.
- **Kanıtsız imha etmek.** Kaydedilmemiş bir silme, yönettiğinizi gösteremeyeceğiniz bir risktir.
- **Aygıtları en ucuz geri dönüşümcüye göndermek.** Aşağı akış işlemi önemlidir. Sertifikalı iş ortakları kullanın.
- **İnsanları aygıtları üzerinden izlemek.** Sınıf ve grup bazında raporlayın, asla bireyler bazında değil.
- **Onarımı ve yeniden kullanımı göz ardı etmek.** Ekipmanı kullanımda tutmak daha ucuzdur ve çevreye daha iyidir.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Planlama | Bozulunca satın al | Takvime göre dönemsel yenileme | Sınıf başına planlanan ömür; partiler hâlinde düzenli yenileme | Yenileme yaş, arıza ve ihtiyaca göre zamanlanır; yedekler veriden boyutlandırılır | Yenileme, sahalar genelinde tedarikçiler, finans ve sürdürülebilirlik hedefleriyle koordine edilir |
| Verilerden öğrenme | Arıza kaydı yok | Onarım kayıtları tutulur | Modele ve yaşa göre arıza oranı izlenir | Bulgular satın almayı ve zamanlamayı değiştirir; teslim süresi yönetilir | Arıza ve kullanım verileri, tasarımı ve koşulları iyileştirmek için tedarikçilerle paylaşılır |
| Çıkış | Aygıtlar kaybolur | Gayriresmî silme | Her aygıt için kanıtlı imha süreci | Kanıt denetlenir; yeniden kullanım ve geri dönüşüm izlenir | Sertifikalı iş ortaklarıyla ve kamuya açık raporlamayla döngüsel pratikler |

## Kontrol listesi

- [ ] Aygıt sınıfları ve planlanan ömürler, gerekçesi kaydedilerek tanımlanmıştır.
- [ ] Düzenli bir yenileme planı vardır ve finansla gözden geçirilir.
- [ ] Yaş profili, modele göre arıza oranı ve değiştirme teslim süresi raporlanır.
- [ ] Bir yedek havuzu, arıza ve işe alım verisinden boyutlandırılmıştır.
- [ ] Atıl aygıtlar, gizlilik kurallarıyla birlikte sınıf bazında belirlenir.
- [ ] Garanti talepleri ve onarımlar kaydedilir ve satın alma kararlarında kullanılır.
- [ ] Her emekli aygıtın kayıtlı bir temizleme yöntemi ve kanıtı vardır.
- [ ] İmha iş ortakları sertifikalıdır ve aşağı akış işlemini raporlar.
- [ ] Yeniden kullanım ve geri dönüşüm oranları izlenir.
- [ ] Üç aylık bir inceleme finans, güvenlik, satın alma, hizmet masası ve kullanıcıları içerir.

## Yapay zekâ istemleri

**Arıza verisini model ve yaşa göre çözümleyin.**

```text
[dönem] boyunca [aygıt sınıfı] için donanım arızalarının bir özeti: model,
hizmetteki sayı, yaş bandı ve arıza sayısı: [tabloyu yapıştırın]. Örüntüleri
model ve yaşa göre betimle, olağandışı görünen partileri ya da modelleri
işaretle, örneklemin yargılamak için çok küçük olduğu yerleri söyle ve
sonraki denetimi öner. Üretici rakamlarını uygulama ve kıyaslama değerleri
uydurma. Varsayımlarını listele.
```

**Sürekli bir yenileme planı tasarlayın.**

```text
Şu sınıflarda [sayı] aygıtımız var: [yaş profiliyle liste]. Arıza ve onarım
verileri: [özet]. Bütçe kısıtları: [özet]. Düzenli bir payı değiştiren,
değiştirmeleri yaşa, arıza geçmişine ve kullanıcı ihtiyacına göre sıralayan ve
bir yedek havuzu tutan üç aylık bir yenileme planı öner. Sabit döngülü
yenilemeye karşı ödünleşimleri ve neyin ölçüleceğini açıkla. Fiyat uydurma.
Varsayımlarını listele.
```

**Bir imha sürecini gözden geçirin.**

```text
Emekli [aygıt türleri] için imha sürecimiz: [adımları, iş ortaklarını ve
kayıtları betimleyin]. Süreci veri temizleme, kanıt, gözetim zinciri ve çevresel
ele alma açısından boşluklar bakımından gözden geçir ve iyileştirmeler ile
rastgele denetimler öner. Gereksinimlerin yargı alanına göre değiştiğini ve
hukuk ile güvenlik uzmanlarıyla denetlenmesi gerektiğini belirt. Hukuki sonuç
verme. Varsayımlarını listele.
```

**Değiştirme teslim süresini azaltın.**

```text
Arızalı bir aygıtı değiştirmek şu anda şu adımları ve tipik beklemeleri
gerektiriyor: [liste]. En yavaş adımları belirle, değişiklikler öner (örneğin
önceden yüklenmiş yedekler, uzaktan kayıt ya da basitleştirilmiş onay) ve
medyan ile 85. yüzdelik üzerindeki etkinin nasıl ölçüleceğini betimle.
Betimlemediğimiz araçlara sahip olduğumuzu varsayma. Varsayımlarını ve
risklerini listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir donanım yaşam döngüsü metriği için eşlenmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir donanım metriği girdisinin oyunlama yolunu, koruma önlemini ve kanıt kuralını taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Kendi yaş, arıza ve kullanım verilerinizi kullanarak aygıtların düzenli bir payını sürekli yenileyin.
- Ortalamaya değil, yaş dağılımına ve modele göre arızaya bakın.
- Değiştirmeyi bir yedek havuzu ve kısa, ölçülen bir yolla hızlı tutun.
- Kanıtlı güvenli imhayı yaşam döngüsünün sonu sayın ve onarımı, yeniden kullanımı ve sertifikalı geri dönüşümü tercih edin.
- Aygıt sınıfı ve grup bazında raporlayın ve bireyleri asla ekipmanları üzerinden izlemeyin.
- Yaşam döngüsünü finans, güvenlik, satın alma ve kullanıcılarla birlikte gözden geçirin.

## Kaynaklar ve ileri okuma

1. National Institute of Standards and Technology, *Guidelines for Media Sanitization*, NIST Special Publication 800-88 Revision 1, 2014.
2. European Parliament and Council, *Directive 2012/19/EU on waste electrical and electronic equipment (WEEE)*, 2012.
3. Baldé, C. P., et al., *The Global E-waste Monitor*, United Nations University, International Telecommunication Union, and International Solid Waste Association (latest edition).
4. ISO/IEC 19770-1, *Information technology: IT asset management: Part 1: IT asset management systems: Requirements*, International Organization for Standardization.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Failure rate](https://en.wikipedia.org/wiki/Failure_rate).
8. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
9. Wikipedia, [Electronic waste](https://en.wikipedia.org/wiki/Electronic_waste).
10. Wikipedia, [Data erasure](https://en.wikipedia.org/wiki/Data_erasure).
11. Wikipedia, [Circular economy](https://en.wikipedia.org/wiki/Circular_economy).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Depreciation](https://en.wikipedia.org/wiki/Depreciation).
14. Wikipedia, [Warranty](https://en.wikipedia.org/wiki/Warranty).
15. Wikipedia, [Mobile device management](https://en.wikipedia.org/wiki/Mobile_device_management).
16. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
