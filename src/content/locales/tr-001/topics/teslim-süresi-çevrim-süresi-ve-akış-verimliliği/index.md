# Teslim süresi, çevrim süresi ve akış verimliliği

**Teslim süresi, çevrim süresi ve akış verimliliği, ancak her birinin yazılı bir başlangıcı ve bitişi, ortalama yerine bir dağılımı ve geçen sürenin çoğunu dolduran beklemeye dair bir görünümü olduğunda anlam taşır.**

## Genel bakış ve motivasyon

Hemen her takım işin ne kadar sürdüğünü bilmek ister. Soru basit görünür ve tartışma doğurur, çünkü “ne kadar” kimin sorduğuna ve kronometreyi nereden başlattığına bağlıdır. Müşteri, talep ettiği andan başlayarak sayar. Geliştirici, işi eline aldığı andan başlayarak sayar. Operasyon yöneticisi, kaydın bir kuyruğa atandığı andan başlayarak sayar. Üçü de kendi saatleri konusunda haklıdır ve aynı iş parçası için üç farklı sayı verir.

[Teslim süresi](https://en.wikipedia.org/wiki/Lead_time), bir talebin gelişi ile talebin karşılanması arasında geçen süredir; talep edenin gözünden görülür. [Çevrim süresi](https://en.wikipedia.org/wiki/Cycle_time), takımın bir iş parçasını üstlendiği an ile işin bittiği an arasında geçen süredir; işi yapan takımın gözünden görülür. İkisi arasındaki fark, talebin takım başlamadan önce beklediği süredir. Akış verimliliği, geçen sürenin, öğenin beklemesi yerine birinin gerçekten onun üzerinde çalıştığı payıdır. Bir öğe başlangıçtan bitişe 10 gün sürdüyse ve 1 gün üzerinde çalışıldıysa akış verimliliği yüzde 10’dur. Dokunma süresi çalışılan kısımdır. Bekleme süresi geri kalan her şeydir.

[Yalın yazılım geliştirme](https://en.wikipedia.org/wiki/Lean_software_development) ve Kanban Kılavuzu bu fikirleri imalattan bilgi işine taşıdı. ITIL uygulamaları çözüm süresinden, karşılama süresinden ve hizmet düzeyi hedeflerinden söz eder; çevik takımlar ise çevrim süresinden ve iş öğelerinden. Bu konu, bir olay, bir talep, bir değişiklik ve bir hikâye aynı toplantıyı paylaştığında geçerliliğini koruyan tek bir tanımlar kümesi sunar.

Geçen sürenin, insanları ilk ölçtüklerinde şaşırtan bir özelliği vardır. Bilgi işinin ve hizmet işinin çoğunda öğe ömrünün çoğunluğunu bekleyerek geçirir: bir karar, bir inceleyici, bir ortam, bir tedarikçi, bir bakım penceresi ya da basitçe başka bir işle meşgul bir kişi için. Bu beklemeyi görünür kılmak, bu metriklerin yaptığı en yararlı şeydir. Bekleme süresini göremeyen bir takım, daha hızlı çalışarak iyileşmeye çalışır; oysa geçen sürenin yüzde 90’ının kuyruklarda harcandığı bir sistemde bunun etkisi azdır. Kuyruk davranışı Konu 2.3’te (“Devam eden iş ve kuyruklar”) ayrıntılı ele alınır; tam değer akışı görünümü ise Konu 2.4’tedir (“Değer akışı metrikleri”).

Süre ölçümleri, Konu 1.6’daki (“Hizmet metrikleri için istatistik okuryazarlığı”) nedenlerle, medyan ve 85. ya da 95. [yüzdelik](https://en.wikipedia.org/wiki/Percentile) gibi yüzdeliklerle raporlanır. Ham zaman damgaları Konu 1.5’teki (“Veri kaynakları ve enstrümantasyon”) kaynaklardan gelir. Devam eden iş, çıktı hızı ve iş öğesi yaşı akış ölçümleri Konu 2.1’dedir (“Akış ölçümleri”); değişiklik teslim süresi DORA ölçümü ise Konu 2.8’dedir (“DORA metrikleri”). Bu konu süre ölçümlerinin kendisini ele alır: karşılaştırılabilir olmaları için nasıl tanımlanacakları, saatlerinin nerede başlayıp durduğu ve içlerindeki beklemenin nasıl görünür kılınacağı.

## Temel ilkeler

- **Sayıyı okumadan önce saati adlandırın.** Her süre ölçümünün bir başlangıç olayı, bir bitiş olayı ve bir dışlamalar listesi vardır. Bunlar olmadan bir rakam bir görüştür.
- **Teslim süresi müşteriye, çevrim süresi takıma aittir.** İkisini de tutun ve bir grafiğin hangisini gösterdiğini her zaman etiketleyin, çünkü aralarındaki fark kendi başına bir sinyaldir.
- **Dağılım raporlayın, asla yalnızca bir ortalama değil.** Medyan tipik öğeyi tanımlar. Yüksek bir yüzdelik, müşterinin gerçekten taşıdığı riski tanımlar.
- **Bekleme ana bulgudur.** Akış verimliliği genellikle düşüktür ve yanıt, insanlardan acele etmelerini istemek değil, kuyrukları ve devir teslimleri kaldırmaktır.
- **Duraklatma durumları tasarım kararlarıdır.** Bir öğeyi “bekleniyor” durumuna taşıyarak saat durdurulabiliyorsa bu durum kullanılacaktır; bu yüzden ne sıklıkla ve kimin tarafından kullanıldığını sayın.
- **Bir öğeyi kendi türüyle karşılaştırın.** Bir olay, standart bir talep, bir değişiklik ve bir özellik farklı biçimlere sahiptir. Herhangi bir şeyi karşılaştırmadan önce iş türüne göre bölümleyin.
- **Sistemleri ölçün, insanları değil.** Süre ölçümleri, işin bir takım ya da hizmet içinden nasıl aktığını tanımlar. Asla bireylerin sıralaması değildir.

## Metrik tanımları

Aşağıdaki tablo, çevik iş öğeleri ve ITIL kayıtları için tek bir sözlük kullanır. “İş öğesi”, bir iş akışından geçen her kaydı ifade eder: bir hikâye, bir görev, bir olay, bir hizmet talebi, bir değişiklik ya da bir sorun kaydı. Aksi belirtilmedikçe bütün süreler geçen takvim zamanıdır ve her biri medyan ve yüksek bir yüzdelik olarak raporlanır.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Teslim süresi | Bir talebin gelişinden talep edene teslimine geçen süre | Teslim zaman damgası eksi talep geliş zaman damgası, iş öğesi başına; saat talep kaydedildiğinde başlar, talep eden sonucu kullanabildiğinde durur; hâlâ açık öğeler ve teslimden önce iptal edilen öğeler hariç tutulur ve ayrıca sayılır | gün ya da saat | ITSM aracı ya da sorun izleyici geçmişi | Hizmet talebi yönetimi; olay yönetimi; değişiklik yetkilendirme | Takım panosunda teslim süresi; talepten yayına süre | Haftalık, aylık incelenir |
| Çevrim süresi | Takımın işe başladığı andan işin bittiği ana geçen süre | Bitiş zaman damgası eksi başlangıç zaman damgası, iş öğesi başına; saat etkin bir çalışma durumuna ilk geçişte başlar, bitti durumuna ilk geçişte durur; başlangıçtan önceki ve bitti durumundan sonraki süre hariç tutulur | gün ya da saat | İzleyici ya da pano durum geçmişi | Olay yönetimi; hizmet talebi yönetimi; değişiklik yetkilendirme | Çevrim süresi (bkz. Konu 2.1 “Akış ölçümleri”) | Haftalık |
| Dokunma süresi | Bir kişinin ya da bir otomasyonun öğe üzerinde etkin biçimde çalıştığı süre | Öğenin, etkin iş olarak sınıflandırılan durumlarda geçirdiği aralıkların toplamı; bekleme, engellenmiş ve kuyruk durumları hariç tutulur | saat | İzleyici durum geçmişi, her durum etkin ya da bekleme olarak sınıflandırılmış | Olay yönetimi; hizmet talebi yönetimi | Değer akışı haritasında işlem süresi | Aylık örnek |
| Bekleme süresi | Öğenin bir kuyrukta olduğu, engellendiği ya da duraklatıldığı süre | Çevrim süresi eksi dokunma süresi, iş öğesi başına; kayıtlı başlangıcı olmayan öğeler için yok | gün ya da saat | İzleyici durum geçmişi | Olay yönetimi; hizmet düzeyi yönetimi | Panoda bekleme süresi ya da engellenmiş süre | Aylık |
| Akış verimliliği | Çevrim süresinin etkin işte geçen payı | Dönemde biten öğeler için dokunma sürelerinin toplamı / çevrim sürelerinin toplamı; durum geçmişi eksik öğeler hariç tutulur ve ayrıca sayılır | yüzde | İzleyici durum geçmişi | Sürekli iyileştirme; hizmet talebi yönetimi | Yalın uygulamadan akış verimliliği | Aylık |
| Saat duraklatma payı | Resmî hizmet saatinin duraklatıldığı çevrim süresi payı | Dönemde biten öğeler için duraklatma sürelerinin toplamı / çevrim sürelerinin toplamı; duraklatmalar, yazılı saat kurallarında tanımlanan durumlardır | yüzde | ITSM aracı durum geçmişi | Hizmet düzeyi yönetimi; olay yönetimi | Engellenmiş ya da beklemede sütun süresi | Aylık |

Çevrim süresi saatinin başlangıcı, yazıya dökülmesi gereken bir takım kararıdır. Bir hizmet düzeyi anlaşmasındaki (SLA) resmî saat çoğu zaman bir öğe müşteriyi beklerken durur; bu nedenle bu konu o süreyi atmak yerine duraklatma payını raporlar. Dokunma süresi durumlardan çıkarsanır; dolayısıyla doğruluğu, durumların işi ne kadar iyi tanımladığına bağlıdır.

## Öneriler

### Saatleri tanımlayın

**1. Her saatin başlangıcını ve bitişini yazın.** Teslim süresi için başlangıç, talep edenin dokunduğu ilk sistemin kaydettiği talebin gelişidir; bitiş, talep edenin sonucu kullanabildiği andır. Çevrim süresi için başlangıç etkin bir duruma ilk geçiştir, bitiş bitti durumuna ilk geçiştir. İkisini de metrik siciline yazın (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”) ve tanımı her grafiğin altında gösterin.

**2. Her iş türü için “bitti”nin ne demek olduğunda anlaşın.** Bir değişiklik, kod birleştirildiğinde değil, üretimde çalışıp doğrulandığında bitmiştir. Bir olay, kayıt Cuma günü toplu bir işle kapatıldığında değil, hizmet kullanıcı için geri geldiğinde bitmiştir. Bir talep, talep eden ona sahip olduğunda bitmiştir. “Bitti” takıma göre değişiyorsa çevrim süreleri takımlar arasında karşılaştırılamaz.

**3. Hem teslim süresini hem çevrim süresini tutun ve aradaki farka bakın.** Aralarındaki fark taahhüt beklemesidir: bir talebin takım başlamadan önce beklediği süre. Uzun bir teslim süresinin yanında kısa bir çevrim süresi, takımın başladığı işte verimli çalıştığını ve darboğazın giriş olduğunu söyler. Kısa bir teslim süresinin yanında uzun bir çevrim süresi, taleplerin hızlıca kabul edilip sonra takım içinde durduğunu söyler.

### Zamanı dürüstçe raporlayın

**4. Yüzdelikleri kullanın ve hangileri olduğunu söyleyin.** Medyanı ve 85. ya da 95. yüzdeliği raporlayın; örneğin “öğelerin yarısı 4 gün içinde, yüzde 85’i 11 gün içinde bitti.” Bu ifade aynı zamanda bir tahmindir: sistem aynı kalırsa yeni bir öğenin 11 gün içinde bitme olasılığı yaklaşık yüzde 85’tir. Ortalama size bu cümleyi veremez ve tek bir aykırı değer çıktığında çok uzağa kayar (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**5. Yalnızca özeti değil, her öğeyi çizin.** Bitiş tarihine karşı çevrim süresinin serpilme grafiği, sistemin biçimini bir bakışta gösterir: kümeler, yukarı doğru yavaş bir kayma, bir süreç değişikliğinden sonra ani bir basamak. Özet sayılar grafiğin yanında yer almalıdır. Yalnızca bir ortalama çizgisi sunan bir araç, takımın en çok ihtiyaç duyduğu bilgiyi ortadan kaldırır.

**6. İş türüne ve hizmet sınıfına göre bölümleyin.** Acil bir olay, standart bir talep, planlı bir değişiklik ve bir araştırma hikâyesi farklı beklenen sürelere sahiptir. Örüntü aramadan önce veriyi türe ve önceliğin işin ele alınışını değiştirdiği yerlerde önceliğe göre ayırın. Karışık popülasyonlar kimsenin deneyimini tanımlamayan geniş bir dağılım üretir.

### Beklemeyi görünür kılın

**7. Her durumu etkin, bekleme ya da bitti olarak sınıflandırın.** Akış verimliliğini mümkün kılan iş budur. “Geliştirmede” ve “bir inceleyicinin çalıştığı incelemede” etkindir. “İnceleme bekleniyor”, “onay bekleniyor”, “engellendi” ve “müşteri bekleniyor” bekleme durumlarıdır. Sınıflandırmayı takımla gözden geçirin, çünkü bir iş akışındaki etiketler nadiren bütün gerçeği söyler ve “devam ediyor” denen bir durum çoğu zaman bir haftadır kimsenin dokunmadığı bir öğeyi gizler.

**8. Akış verimliliğini hedef olarak değil, tanı aracı olarak hesaplayın.** Bir örnek üzerinde ya da bütün biten öğeler üzerinde hesaplayın ve beklemenin nerede yaşadığını bulmak için kullanın: hangi durum öğeleri en uzun tutuyor ve ondan önce hangi devir teslim var. Düşük sayılar bekleyin ve “yüzde 40’a ulaşmak” gibi bir hedef koymayın. Bekleme durumlarını etkin olarak yeniden etiketleyerek sayıyı yükseltmek kolay ve yararsızdır; gerçek kazanımlar kuyruğun kendisini kaldırmaktan gelir (bkz. Konu 2.4 “Değer akışı metrikleri”).

**9. Engellenmiş ve duraklatılmış süreyi ayrı sayın.** Öğelerin engellenmiş ya da duraklatılmış duruma ne sıklıkla girdiğini, orada ne kadar kaldığını ve nedeninin ne olduğunu izleyin. Bir onay, bir ortam ya da bir tedarikçi bekleme gibi yinelenen engel nedenlerinin kısa bir listesi, neyi düzeltmeniz gerektiğini ve kiminle konuşacağınızı söyler. Duraklatılmış süreyi hariç tutan her hizmet düzeyi sonucunun yanında duraklatma payını raporlayın (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).

### Sayıları iyi kullanın

**10. Süreyi denetlemek için kuyruğu denetleyin.** Bir sistemden geçiş süresi, devam eden iş arttıkça artar; bu ilişki, sistemdeki ortalama öğe sayısını, varış ya da tamamlanma hızını ve her öğenin orada geçirdiği ortalama süreyi ilişkilendiren [Little yasasında](https://en.wikipedia.org/wiki/Little%27s_law) ortaya konur. Bu nedenle devam eden işi sınırlamak çevrim süresi üzerindeki en doğrudan kaldıraçtır (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”). Kuyruğu değiştirmeden metrik hedefini değiştirmek, yalnızca yanlış raporlama teşvikini değiştirir.

**11. Çevrim süresi dağılımlarını tahminler ve hizmet düzeyi hedefleri için kullanın.** Standart talepler için 85. yüzdelik çevrim süresi 6 gün ise 5 günlük bir taahhüt sık sık kaçırılır, 8 günlük bir taahhüt ise payla karşılanır. İç hedefi sistemin yaptığına dayandırın, sonra dağılımı kaydırmak için sistem üzerinde çalışın (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri” ve Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

**12. Değişen bir tanımı bir olay olarak ele alın.** Bir saatin başlangıcı ya da bitişi değişirse bunu her grafikte işaretleyin ve mümkün olduğunda geçmişi ham olaylardan yeniden ifade edin. Bu disiplin olmadan bir eğilim çizgisi, tanım değişikliğinin etkisini bir iyileşme ya da gerileme gibi gösterir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşlenen koruma çizgisi metriği ya da uygulaması |
| --- | --- | --- |
| Teslim süresi | Saatin geç başlaması için talep kaydının oluşturulmasını geciktirmek; saati yeniden başlatmak için öğeleri kapatıp yeniden açmak; bir talebi çok sayıda küçük talebe bölmek | Bir örnek üzerinde talep kayıtlarını e-postadaki ya da sohbetteki ilk temasla karşılaştırmak; yeniden açılma oranını izlemek; talep başına öğe boyutunu ve sayısını izlemek |
| Çevrim süresi | Öğeleri yalnızca sonda “devam ediyor”a taşıyarak saati geç başlatmak; öğeleri neredeyse bitene kadar panonun dışında tutmak; işi kendi başına değer sunmayan parçalara bölmek | Açık öğeler için iş öğesi yaşı (bkz. Konu 2.1 “Akış ölçümleri”); biten öğelerin talep eden tarafından kullanılabilir olduğunu denetlemek; teslim süresini çevrim süresiyle karşılaştırmak |
| Dokunma süresi | Bekleme durumlarını etkin olarak sınıflandırmak ya da meşgul görünmek için etkinlik kaydetmek | Durum sınıflandırmasını her çeyrek takımla gözden geçirmek; öğeleri örnekleyip kayıtlı etkinliği işlemeler (commit), yorumlar ve takvimlerle karşılaştırmak |
| Bekleme süresi | Bekleme süresinin ölçülmeyen bir boşluğa düşmesi için yeni durumlar yaratmak; bekleyen öğeleri iş akışının dışındaki bir duruma taşımak | Belgelenmemiş durumları ve geçişleri saymak (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”); bir örnek üzerinde çevrim süresinin dokunma süresi artı bekleme süresine eşit olduğunu doğrulamak |
| Akış verimliliği | Beklemeyi etkin olarak yeniden sınıflandırmak; örnek için yalnızca hızlı öğeleri seçmek; oranı yükseltmek için önce kolay öğeleri bitirmek | Değişiklik günlüğüyle sabit durum sınıflandırması; bütün biten öğeler üzerinde hesaplamak; 85. yüzdelik çevrim süresi ve açık öğelerin yaşıyla birlikte raporlamak |
| Saat duraklatma payı | SLA’yı karşılamak için resmî hizmet saatini, iç devir teslimler gibi müşteriye bağlı olmayan nedenlerle duraklatmak | Bir örnek üzerinde duraklatma nedenlerini denetlemek; geçen süreyi ve SLA süresini yan yana raporlamak; müşterinin kendi çözüm süresi görüşünü gözden geçirmek (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”) |

Sağlıklı bir okuma, birlikte hareket eden bir teslim süresi ve çevrim süresi, takımın açıklayabildiği bir aralarındaki fark, medyanın kararlı bir katı olan bir 85. yüzdelik ve düşük ama belirli kuyruklar kaldırıldıkça yükselen bir akış verimliliği gösterir. Uyarı işaretleri, yüksek yüzdelik kötüleşirken iyileşen bir medyan, her ayın sonunda büyüyen bir duraklatma payı ve işin yapılışında hiçbir değişiklik olmadan sıçrayan bir akış verimliliğidir. Bir sayı iyileştiğinde, birinin onu açıklayan iş değişikliğini gösterebilmesi gerekir. Oyunlaştırmaya dayalı bir iyileşme bu sınavda genellikle başarısız olur. Daha geniş psikoloji Konu 1.2’de (“Goodhart yasası ve metriklerin psikolojisi”) ele alınır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Talep edenin bakışından teslim süresi | Müşterinin hissettiğiyle örtüşür; iç etiketleri değiştirerek iyileştirmesi zordur | Başlangıç olayı takımın denetimi dışındadır ve kötü kaydedilmiş olabilir |
| Takımın taahhüdünden çevrim süresi | Takımın denetimindedir; pano geçmişinden hesaplaması kolaydır | Giriş gecikmesini yok sayar; talepler beklerken takım hızlı görünebilir |
| Geçen süre (takvim saati) | Basit, karşılaştırılabilir ve müşterinin deneyimiyle örtüşür | Geceleri ve hafta sonlarını içerir; farklı çalışma saatleri olan takımlar için yanıltıcı olabilir |
| Mesai saati takvimi | Personel gerektiren hizmet düzeylerine ve nöbet örüntülerine uyar | Takım başına bir takvim gerektirir; müşterinin yaşadığı gerçek beklemeyi gizler |
| Oran olarak akış verimliliği | Beklemenin ne kadarının bekleme olduğunu tek, sezgisel bir sayıyla gösterir | Durum sınıflandırmasına bağlıdır; şişirmesi kolaydır; hedef olarak yanlış okunabilir |
| Yüzdelik raporlama | Riski gösterir ve tahminleri destekler | Dönem başına yeterli öğe gerektirir; bazı kitleler için ortalamadan okuması daha zordur |

Pratik öneri, geçen süreyle başlamak, mesai saati görünümünü yalnızca bir hizmet düzeyi gerektirdiğinde eklemek ve hem teslim süresini hem çevrim süresini yüksek bir yüzdelikte raporlamaktır. Akış verimliliğini, durum sınıflandırması masadayken bir gözden geçirmede sohbet başlatıcı olarak kullanın ve bir puan kartına koymaktan kaçının.

## Takımınızla tartışılacak sorular

**1. Teslim süresi saatimiz nerede başlıyor ve müşteri nerede başladığını düşünüyor?**
Yakın zamandan üç talebi alın ve ilk temastan teslime kadar izleyin. Talebin kayıt sisteminde kaydedildiği anı işaretleyin. İlk temas ile kayıt oluşturma arasındaki farkı karşılaştırın. Kolaylaştırıcı, e-postada, sohbette ya da paylaşılan bir gelen kutusunda, hiçbir metrikte görünmeyen gizli kuyrukları aramalıdır.

**2. Ele aldığımız her iş türü için “bitti” ne demek?**
İş türlerini, örneğin olayları, talepleri, değişiklikleri ve hikâyeleri sıralayın ve her birinin bitiş olayını sorun. Talep edenin o anda işin bittiği konusunda hemfikir olup olmayacağını sorun. Görüş ayrılıkları, çok erken duran bir saate işaret eder. Tür başına tek bir bitiş olayı üzerinde anlaşın ve yazın.

**3. Durumlarımızdan hangileri bekleme durumu ve öğeler onlarda ne kadar kalıyor?**
İş akışını bir duvara asın ve her durumu etkin ya da bekleme olarak işaretleyin. Son ayın verisinden her bekleme durumundaki tipik süreyi sorun. En büyük bekleme durumu genellikle birisi için sürprizdir. Gelecek ay daha yakından inceleyeceğiniz bir kuyruk seçin.

**4. Hangi yüzdeliği vaat ediyoruz ve sistem gerçekte ne yaptı?**
Son çeyreğin çevrim süresi dağılımını medyan, 85. yüzdelik ve 95. yüzdelikle gösterin. Takımın şu anda müşterilere hangi taahhüdü verdiğini ve bunun dağılımın neresine düştüğünü sorun. Sistemin sunduğundan daha hızlı bir süre vaat etmenin maliyetini tartışın. Takımın kendi gerekçeleriyle karşılayabileceği bir taahhüde karar verin.

**5. Saati kimin duraklatmasına izin var ve neden?**
Duraklatma ve beklemeye alma durumlarını, bunları kullanabilen kişileri ve belirtilen nedenleri sıralayın. Duraklatılmış öğelerin bir örneğini okuyun ve nedenin gerçekten müşteri olup olmadığını sorun. Duraklatma payı SLA sonucuyla aynı grafikte gösterilseydi ne olacağını tartışın. Kolaylaştırıcı tonu merakla dolu tutmalıdır, çünkü duraklatma durumları çoğu zaman hiç yazılmamış meşru nedenlerle vardır.

**6. Gelecek çeyrek akış verimliliği iki katına çıksa, işin hareket biçiminde neyi değiştirmiş olurduk?**
Gruptan değişmesi gereken belirli kuyrukları, devir teslimleri, onayları ya da parti boyutlarını adlandırmasını isteyin. Yanıtlar “daha çok çalışın” ya da “daha iyi iletişim kurun” gibi genelse, sayı henüz hiçbir eyleme bağlanmamıştır. Somut bir değişiklik seçin, adlandırılmış bir durumun bekleme süresi üzerindeki etkisini öngörün ve ne zaman denetleneceği konusunda anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları çevrim süresi saatine sahiptir ve ayrıntısını panoda görür. En çok durumları dürüstçe sınıflandırarak, devam eden işi sınırlayarak ve serpilme grafiğini kendi retrospektiflerinde okuyarak kazanırlar. İşi, hızlı biten ama hiçbir şey sunmayan yapay biçimde küçük parçalara bölme baskısına direnmeli ve açık öğelerin yaşını tamamlanmış çevrim sürelerinin yanında göstermelidirler (bkz. Konu 2.1 “Akış ölçümleri”).

### Hizmet ve operasyon takımları

Hizmet takımları resmî hizmet düzeyi saatleri taşıyan kayıtlarla çalışır ve duraklatma durumları, geçen süre ile SLA süresinin ayrıştığı yerdir. İki saati de raporlamalı, türe ve önceliğe göre bölümlemeli ve her duraklatmanın nedenini kaydetmelidirler. Operasyon takımları ayrıca onaylar, bakım pencereleri ve tedarikçi yanıtları için kuyrukların doğal sahipleridir; bunlar çoğu zaman ürün takımlarının gördüğü bekleme süresine egemen olur (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”).

### Liderlik ve yönetişim

Liderler teslim süresini ister, çünkü müşterinin deneyimine en yakın sayıdır. Her rakamla birlikte bir tanım, bir dağılım ve bir bölümleme beklemeli ve insanların neden yavaş olduğunu sormadan önce beklemenin nerede olduğunu sormalıdırlar. Bu ölçümler için hedefler, adlandırılmış bir sahibi olan bir hizmete ya da değer akışına uygulandığında ve sistemin sunduğundan belirlendiğinde en iyi çalışır. Bir ortalamaya uygulanan hedef, yeniden sınıflandırmayı ve saat oyunlarını davet eder.

### Müşteriler ve kullanıcılar

Müşteriler, işin başlamasından önceki bütün beklemeyi ve takımın bittiğini düşündüğü andan sonraki bütün beklemeyi de içeren teslim süresini deneyimler. Bir aralık olarak ifade edilen dürüst bir tahmine ihtiyaç duyarlar; örneğin “bunun gibi taleplerin çoğu bir hafta içinde, hemen hepsi iki hafta içinde biter”; ve bir duraklatmanın takım onları beklediği için uygulandığını bilmeleri gerekir. Müşterilere yönelik raporlar hangi saati kullandıklarını belirtmelidir (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı bir hizmet masası, bir altyapı takımı ve klinik personeli destekleyen bir uygulamalar takımı işletir. Bu örnekteki bütün sayılar örnekleyicidir.

Hizmet masası, standart erişim taleplerinin 5 iş günü hedefini yüzde 94 oranında karşıladığını raporlar; ancak servis yöneticileri erişimin “yaklaşık iki hafta” sürdüğünden şikâyet etmeyi sürdürür. Hizmet operasyonları başkanı takımdan, bir çeyrek boyunca bu talepler için teslim süresini ve çevrim süresini, SLA zamanlayıcısı yerine ham durum geçmişinden geçen takvim günleriyle ölçmesini ister.

400 talep için sonuç (örnekleyici), 3 günlük medyan çevrim süresi ve 9 günlük 85. yüzdeliktir. Yöneticinin paylaşılan posta kutusuna ilk e-posta attığı andan ölçülen teslim süresinin medyanı 8 gün, 85. yüzdeliği 16 gündür. İki bulgu aradaki farkı açıklar. Birincisi, talepler biri kayıt oluşturmadan önce posta kutusunda ortalama 3 gün bekler; bu SLA’ya görünmezdir. İkincisi, çevrim süresinin çoğunu “onay bekleniyor” durumu oluşturur: 9 günlük 85. yüzdeliğin yaklaşık 6 günü bir bölüm başkanının onayını beklemekle geçer. 30 talepten oluşan bir örnekte dokunma süresi yaklaşık yarım gündür; dolayısıyla akış verimliliği kabaca yüzde 8’dir (örnekleyici). SLA sonucu yüksektir, çünkü zamanlayıcı “onay bekleniyor” ve “müşteri bekleniyor” sırasında durur; bu nedenle saat duraklatma payı çevrim süresinin yüzde 52’sidir.

Takım üç karar alır. İlk temasta kaydı oluşturan bir web formu ekler; böylece teslim süresi saati müşterininkiyle aynı yerde başlar. Bölüm başkanlarıyla, tanımlı bir standart rol listesi için onayların, talep başına onay yerine çeyreklik denetimle önceden yetkilendirilmesi konusunda anlaşır. Ve aylık hizmet incelemesine, SLA sonucunun yanına duraklatma payını ve teslim süresini ekler. Bir çeyrek sonra medyan teslim süresi 4 güne ve 85. yüzdelik 8 güne düşer (örnekleyici); SLA sonucu ise neredeyse hiç kıpırdamaz.

İnceleme sırasında takım bir oyunlaştırma riskini yakalar. Bir teknisyen, durumun amacı bu olmadığı hâlde, bir onay e-postası gönderilir gönderilmez kayıtları “müşteri bekleniyor”a taşımaya başlamıştır. O grup için duraklatma payı yükselir, duraklatılmış kayıtlardan alınan bir örneğin denetimi örüntüyü gösterir ve takım, yalnızca talep edenden gelen bir bilgi isteğinin saati duraklatabileceği biçiminde saat kurallarını yeniden yazar. Sorunu yakalayan koruma çizgisi, duraklatma payını SLA sonucunun yanında raporlamaktı; bu, bu konuda önerilen eşlemedir.

## Sektör mercekleri

**Girişim (startup).** Küçük bir takım ve az sayıda devir teslimle çevrim süresini panodan ölçmek kolaydır ve teslim süresi çevrim süresine yakındır. İkisini de ilk günden, basit bir durum sınıflandırmasıyla izleyin ve serpilme grafiğine her hafta bakın. Küçük görevler için akış verimliliği genellikle zaten yüksektir; bu yüzden asıl tehlike, talepleri sohbette gizleyen gayriresmî bir giriştir.

**Küçük işletme.** Tek bir kişi hem talep eden, hem onaylayan, hem yapan rolünü oynayabilir ve barındırılan hizmet masası yalnızca bir SLA zamanlayıcısı sunabilir. Ham durum geçmişini dışa aktarın, geçen süreyi kendiniz hesaplayın ve her saat için tek bir tanım tutun. En yararlı bulgu genellikle taleplerin tedarikçi ya da satıcı yanıtlarını ne kadar beklediğidir.

**Büyük kurum.** Takımlar, tedarikçiler ve onay kurulları arasındaki çok sayıda devir teslim, bekleme süresini büyük ve kuruluşlar arasında yayılmış hâle getirir. Başlangıç, bitiş ve duraklatma için ortak bir sözlük üzerinde anlaşın, durumları ITSM ve mühendislik araçları arasında tutarlı biçimde sınıflandırın ve iş türüne ve hizmet sınıfına göre bölümleyin. Takımlar arası karşılaştırmalar yalnızca tanımlar hizalandıktan sonra anlamlıdır ve bir toplulaştırma, takım ortalamalarının ortalaması alınarak değil, dağılımlardan kurulmalıdır.

**Devlet ve kamu sektörü.** Yasal yanıt süreleri, satın alma kuralları ve onay zincirleri, takımın tek başına kaldıramayacağı beklemeyi yaratır. Dışarıdan dayatılan saatleri iç saatlerden ayrı kaydedin; böylece gecikmenin kuruluşun denetlediği kısmı görülebilir ve iyileştirilebilir. Teslim süresinin sade tanımlarla kamuya raporlanması güven kurar ve politikanın yarattığı kuyrukları görünür kılar (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Ana motivasyon, süre ölçümlerinin belirsiz bir şikâyeti (“sonsuza dek sürüyor”) konumlandırılmış bir soruna (“talepler onay için altı gün bekliyor”) dönüştürmesidir. Aynı veri takımlara dürüst bir tahmin verir; böylece müşterilere verilen taahhütler umuda değil, geçmiş işin dağılımına dayanır. Ayrıca otomasyona, onaylara ya da kadrolamaya yapılacak yatırımın geçen süreyi nerede kısaltacağını da gösterir; bu çoğu zaman insanların beklediğinden farklı bir yerdir.

Araçlar zaten durum değişikliklerini kaydediyorsa maliyetler mütevazıdır. Kurulum, tanımlar üzerinde anlaşmayı, durumları sınıflandırmayı ve dağılımın ve serpilme grafiğinin bir görünümünü kurmayı içerir. İşletme maliyetleri, durum sınıflandırmasını sürdürme, duraklatma nedenlerini bir örnek üzerinde denetleme ve aylık incelemeyi yapma zamanıdır. Durum geçmişinin eksik ya da güvenilmez olduğu yerlerde ilk yatırım, Konu 1.5’te (“Veri kaynakları ve enstrümantasyon”) açıklanan enstrümantasyona yapılır.

Getiri, bir takımın kendi başına ölçebileceği örüntülerde ortaya çıkar: bir iş türü için daha kısa bir yüksek yüzdelik çevrim süresi, geciken öğeler hakkında daha az yükseltme, hangi saatin doğru olduğu üzerine daha az anlaşmazlık ve teslim süresi ile çevrim süresi arasında daha küçük bir fark. Bir kıyaslamadan belirli bir kazanç beklemeyin. Yalın ve akış yazarları düşük akış verimliliğinin yaygın olduğunu anlatır, ancak kendi verileriniz olmadan hiçbir yayımlanmış rakam kendi işiniz için hedef olarak benimsenmemelidir. Toplam sahip olma maliyetine insanların zamanı egemendir; bu yüzden metrik sahibinin ve inceleyicilerin saatlerini sayın.

## Anti-desenler ve tuzaklar

- **Ortalamayı raporlamak.** Tek bir uzun aykırı değer ortalamayı çeker ve tipik öğe yanlış tanımlanır. Medyanı ve yüksek bir yüzdeliği raporlayın ve öğeleri çizin.
- **Bütün iş için tek bir sayı.** Olayları, talepleri ve özellikleri karıştırmak hiçbir şeyi tanımlamayan bir dağılım üretir. Önce iş türüne ve hizmet sınıfına göre bölümleyin.
- **Yalnızca SLA saatini ölçmek.** Bekleme durumlarında duran bir zamanlayıcı, müşterinin hiç deneyimlemediği bir sonuç raporlar. Geçen teslim süresini ve yanında duraklatma payını raporlayın.
- **Akış verimliliği hedefi koymak.** İnsanlar durumları yeniden etiketleyerek oranı yükseltir. Onu tanı aracı olarak kullanın ve başarıyı adlandırılmış kuyrukların bekleme süresiyle yargılayın.
- **Saati yanlış yerde başlatmak.** Atamada ya da ilk işte başlayan bir saat giriş kuyruğunu gizler. Teslim süresini talepte, çevrim süresini taahhütte başlatın ve ikisini de yayımlayın.
- **Takımları çevrim süresiyle karşılaştırmak.** Farklı iş, farklı durumlar ve farklı tanımlar sıralamaları anlamsız kılar ve oyunlaştırmayı davet eder. Bir takımı kendi geçmişiyle karşılaştırın; hizmetleri yalnızca tanımlar hizalandıktan sonra karşılaştırın.
- **Açık öğeleri yok saymak.** Çevrim süresi yalnızca biten işi sayar; dolayısıyla tıkanmış bir öğe bitene kadar görünmezdir. Hâlâ devam eden öğelerin yaşını izleyin (bkz. Konu 2.1 “Akış ölçümleri”).
- **Tanımları sessizce değiştirmek.** Eğilim, o zaman enstrümandaki bir değişikliği kaydeder. Her değişikliği kaydedin ve grafikte işaretleyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve saatler | İnsanlar süreleri hafızadan aktarır; her kişi saati farklı başlatır | Bazı takımlar çevrim süresini panolarında tanımlar; ITSM takımları SLA süresini aktarır | Bütün takımların kullandığı, teslim süresi, çevrim süresi ve duraklatmalar için tek bir yazılı tanım | Tanım değişiklikleri kaydedilir ve geçmiş ham olaylardan yeniden ifade edilir | Tanımlar tedarikçiler ve müşterilerle hizalanır ve kararları bilgilendirmeyi bıraktıklarında gözden geçirilir |
| Raporlama ve çözümleme | Bir slayttaki ortalamalar, elle derlenmiş | Bazı takımlar medyanları ya da araçtan bir grafik gösterir | Medyan ve yüksek bir yüzdelik, serpilme grafiğiyle, iş türüne göre bölümlenmiş | Dağılımlar bir ritimle eğilim olarak izlenir ve incelenir; tahminler onlardan çıkarılır | Takımlar ve tedarikçiler arasındaki akış verisi, uçtan uca taahhütleri tahmin etmek için birleştirilir |
| Bekleme ve akış verimliliği | Bekleme çalışmadan ayırt edilmez | Bazı panolarda engellenmiş sütunlar vardır | Her durum etkin ya da bekleme olarak sınıflandırılmıştır; akış verimliliği bütün biten öğeler üzerinde hesaplanır | En büyük kuyruklar incelenir ve iyileştirme için finanse edilir; duraklatma nedenleri denetlenir | Kuyruklar, onaylar ve devir teslimler, onları yaratan takımlar ve tedarikçilerle birlikte yeniden tasarlanır |
| Kararlarda kullanım | Sayılar çeyreklik bir incelemede gösterilir ve üzerlerinde eylemde bulunulmaz | Takımlar çevrim süresini retrospektiflerde tartışır | Hizmet hedefleri gözlenen dağılımdan belirlenir | Hedefler koruma çizgileriyle eşlenir ve oyunlaştırma için gözden geçirilir | Müşteriler dürüst aralıklar görür ve iyileştirme fikirleri işe dokunan herkesten gelir |

## Kontrol listesi

- [ ] Her süre ölçümünün metrik sicilinde yazılı bir başlangıç olayı, bitiş olayı ve dışlamalar listesi vardır.
- [ ] Hem teslim süresi hem çevrim süresi raporlanır ve her grafik hangisini gösterdiğiyle etiketlenir.
- [ ] “Bitti” her iş türü için tanımlanmış ve talep edenle üzerinde anlaşılmıştır.
- [ ] Sonuçlar medyan ve yüksek bir yüzdelik olarak raporlanır ve öğeler çizilir.
- [ ] Veri iş türüne ve ilgili olduğu yerlerde hizmet sınıfına göre bölümlenir.
- [ ] Her durum etkin, bekleme ya da bitti olarak sınıflandırılmıştır ve sınıflandırma her çeyrek gözden geçirilir.
- [ ] Duraklatma durumları, kimin kullanabileceği ve nedenleri yazılıdır ve bir örnek üzerinde denetlenir.
- [ ] Geçen süre ve SLA süresi, duraklatma payıyla birlikte yan yana gösterilir.
- [ ] Akış verimliliği tanı aracı olarak kullanılır ve bir puan kartında yer almaz.
- [ ] Tanım değişiklikleri kaydedilir ve grafiklerde işaretlenir.
- [ ] Açık öğelerin yaşı, tamamlanmış çevrim süreleriyle birlikte gözden geçirilir.

## Yapay zekâ istemleri

**Bir iş türü için saat kuralları taslağı hazırlayın.**

```text
[Araç ya da araçlar] içinde [iş türü, örneğin standart erişim talepleri] ile
ilgileniyoruz. İş akışı durumları şunlardır: [durumların listesi]. Teslim süresi
ve çevrim süresi için yazılı saat kuralları taslağı hazırlayın: her saati
başlatan olay, durduran olay, hangi durumların süreyi duraklattığı ya da dışladığı
ve iptal edilen ve yeniden açılan öğelere ne olduğu. Anlamı belirsiz durumları ve
kurallar kesinleşmeden önce yanıtlamam gereken soruları belirtin. Aracımızın
özelliklerini ya da kıyaslama değerlerini uydurmayın. Varsayımlarınızı listeleyin.
```

**Durumları etkin ya da bekleme olarak sınıflandırın.**

```text
[Takım ya da hizmet] için iş akışı şöyledir: [her biri için tek satırlık anlamla
durumlar]. Her durum için, etkin iş mi, bekleme mi yoksa bitti mi olduğunu önerin
ve nedenini açıklayın. Çalışmayı ve beklemeyi karıştıran durumları işaretleyin ve
iş akışında en küçük değişiklikle nasıl bölüneceklerini önerin. Sınıflandırmanın
akış verimliliği hesabını nasıl değiştireceğini söyleyin. Öğelerin her durumda ne
kadar kaldığını varsaymayın. Varsayımlarınızı listeleyin.
```

**Bir çevrim süreleri kümesini çözümleyin.**

```text
Aşağıda [iş türü] türünde [sayı] biten öğe için [birim] cinsinden çevrim süreleri
ve bitiş tarihleri var: [veri]. Dağılımı medyan ve [yüzdelik, örneğin 85.] yüzdelik
ile tanımlayın, kümeleri ya da zaman içindeki kaymayı belirleyin ve yavaş öğeler
hakkında takıma sorulacak soruları önerin. Yüzdeliklerin güvenilir olması için kaç
öğeye ihtiyaç duyduğumu önerin ve gerekçesini açıklayın. Kıyaslama değerleri
uydurmayın ya da başka kuruluşlarla karşılaştırmayın. Varsayımlarınızı listeleyin.
```

**Bir metriği oyunlaştırma açısından gözden geçirin.**

```text
[Takım ya da hizmet] için, [tanım ve saatler] olarak tanımlanan [metrik, örneğin
akış verimliliği] raporluyoruz. İnsanlar bunu [varsa bilinen davranışlar] ile
etkileyebiliyor. Sayının oyunlaştırılabileceği ya da yanlış okunabileceği makul
yolları, her biri için eşlenen bir koruma çizgisi metriğini ya da uygulamasını ve
denetlemek için elle okumam gereken bir kayıt örneğini listeleyin. Oyunlaştırmanın
ne sıklıkla görüldüğüne dair istatistik uydurmayın. Varsayımlarınızı listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir süre ölçümünü tanımlayan konuyu ve yanında yer alması gereken koruma çizgisini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): düzenlenmiş bir süre ölçümünün saatlerini, dışlamalarını ve oyunlaştırma vektörünü belirttiğini denetlemek için kullanın.

## Temel çıkarımlar

- Teslim süresi müşterinin beklemesi, çevrim süresi takımın beklemesidir; bu yüzden ikisini de tutun ve aradaki farkı inceleyin.
- Her saat için başlangıç, bitiş ve duraklatma kurallarını yazın ve tanım değişikliğini bir olay olarak ele alın.
- Medyanı ve yüksek bir yüzdeliği raporlayın, öğeleri çizin ve herhangi bir şeyi karşılaştırmadan önce iş türüne göre bölümleyin.
- Akış verimliliği genellikle düşüktür, çünkü geçen sürenin çoğu bekleme; bu yüzden kuyrukları konumlandırmak için kullanın ve hedef yapmaktan kaçının.
- Duraklatılmış süreyi hariç tutan her hizmet düzeyi sonucunun yanında duraklatma payını gösterin.
- Süreyi kısaltmak için devam eden işi azaltın ve devir teslimleri kaldırın, çünkü insanlara acele etmelerini söylemek kuyrukları değiştirmez.

## Kaynaklar ve ileri okuma

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
