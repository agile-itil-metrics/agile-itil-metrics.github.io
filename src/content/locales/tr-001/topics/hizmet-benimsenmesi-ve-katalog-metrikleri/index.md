# Hizmet benimsenmesi ve katalog metrikleri

**Hiç kimsenin seçmediği, bulmadığı veya talebini tamamlamadığı bir hizmet değer sunmamıştır. Bu yüzden insanların sunduklarınızı nasıl keşfettiğini ve kullandığını ölçün ve kataloğu bir birikim listesi kadar dürüst tutun.**

## Genel bakış ve motivasyon

Takımlar hizmetlere yatırım yapar ve sonra insanların onları kullanmadığını fark eder. Yeni self servis portalı e-postayla atlanır. Yazılım erişimi için özenle tasarlanmış bir katalog kalemi yılda iki talep alırken ayda yüz talep sohbetle gelir. Bir izleme hizmeti devreye alınır ve kendisi için kurulduğu takımların yarısı ona hiç bağlanmaz. Benimsenme, teslimatın eksik yarısıdır: bir hizmet, ancak hedeflenen kullanıcıları onu kullanmaya başladığında, sürdürdüğünde ve bitirdiğinde değerlidir.

**Hizmet kataloğu** (ITIL'in kendi yazımı “service catalogue”), bir kuruluşun sunduğu hizmetlerin ve talep edilebilir kalemlerin, kullanıcılarının anlayabileceği terimlerle tarif edilmiş listesidir. Bir [hizmet kataloğu](https://en.wikipedia.org/wiki/Service_catalog) genellikle bir kullanıcının neyi nasıl isteyebileceğini listeleyen müşteriye dönük bir görünüme ve her hizmetin nasıl inşa edildiğini ve desteklendiğini kaydeden teknik bir görünüme sahiptir. Çevik takımlar biçimi tanıyacaktır: katalog, bir tür tersine [ürün birikim listesidir](https://en.wikipedia.org/wiki/Product_backlog). Bir birikim listesi neyi inşa etmeyi amaçladığınızı sıralar. Bir katalog ise zaten sunduklarınızı sıralar; ikisi de aynı özeni gerektirir: sıralama, budama, açık ifade ve kullanıcılardan sürekli bir geri bildirim akışı (bkz. Konu 2.6 “Birikim listesi ve iyileştirme metrikleri”).

**Benimsenme**, hedeflenen kullanıcıların bir hizmeti ne ölçüde benimseyip kullanmaya devam ettiğidir. Yeni uygulamaların nasıl yayıldığının incelenmesinin uzun bir geçmişi vardır; [yeniliklerin yayılması](https://en.wikipedia.org/wiki/Diffusion_of_innovations) kuramı, benimsenmeyi zaman içinde, erken benimseyenler, bir çoğunluk ve geç kalanlarla gelişen bir süreç olarak tarif eder. Dahili bir hizmet için pratik ders, benimsenmenin nadiren bir duyuru yüzünden gerçekleşmesidir. Hizmet bulunması kolay, kullanımı kolay ve geçici çözümden açıkça daha iyi olduğunda gerçekleşir.

Benimsenme ölçümlerini hedefe dönüştürmek caziptir. Bir kanalı zorunlu kılmak, kullanıcılar buna içerlenip geçici çözümler kurarken kullanım sayısını iyi gösterir. Her talebi bir katalog kalemine itmek, tamamlama düşerken katalog kapsamını yükseltir. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) kaynaklı koruma önlemi geçerlidir; bu nedenle buradaki her ölçüm, yalnızca kullanımın değil gerçek değerin de arttığını kontrol eden bir önlemle eşleştirilmiştir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Bu konu dört şeyi ele alır: insanların bir hizmeti kullanıp kullanmadığı (benimsenme), geldikleri şeyi bulup bitirebilip bitiremedikleri (katalog ve talep akışı), kataloğun güncel ve dürüst olup olmadığı (hijyen) ve kullanımın birkaç kalemde toplanıp toplanmadığı (biçim). Talep verildikten sonra olanları kapsayan talep karşılama (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”) ve self servis (bkz. Konu 3.7 “Self servis ve otomasyon metrikleri”) ile bağlantılıdır.

## Temel ilkeler

- **Benimsenme bir sonuçtur; bu yüzden kullanıcının ne yapmaya çalıştığını sorun.** Sayfa görüntülemelerini değil, tamamlanan hedefleri sayın.
- **Yalnızca toplamı değil, hunisini ölçün.** İnsanların nerede bıraktığı neyi düzelteceğinizi söyler.
- **Alternatifle karşılaştırın.** Bir hizmet; e-posta, sohbet, bir telefon görüşmesi ve bir geçici çözümle rekabet eder.
- **Kataloğu olabildiğince küçük ve güncel tutun.** Bayat kalemler kullanıcılara bakmayı bırakmayı öğretir.
- **Sonuca varmadan önce bölümleyin.** Tüm kullanıcılar üzerindeki ortalamalar, hizmetin işe yaramadığı grupları gizler.
- **Bir sayıyı yükseltmek için kullanımı asla zorlamayın.** Zorunluluklar sayı üretir, benimseme değil.
- **Düşük kullanımı sahibine ve kullanıcılara bir soru olarak ele alın.** Hizmetin gerekli olmadığı anlamına gelebilir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Benimsenme oranı | Dönemde bir hizmeti en az bir kez kullanan uygun kullanıcıların payı | en az bir tamamlanmış kullanımı olan ayrı uygun kullanıcılar / uygun kullanıcılar | yüzde | Kullanıcı dizinine bağlanan hizmet kullanım günlükleri | Hizmet kataloğu yönetimi; hizmet düzeyi yönetimi | Özellik benimsenmesi; ürün sonucu gözden geçirmesi | Aylık |
| Etkin kullanım oranı | Zaman içinde hizmeti kullanmayı sürdüren benimseyenlerin payı | dönemde etkin olan ve önceki dönemde de hizmeti kullanan kullanıcılar / önceki dönemde etkin olan kullanıcılar | yüzde | Kullanım günlükleri; kohort tabloları | Sürekli iyileştirme | Ürün analitiğinde elde tutma | Aylık |
| Katalog kapsamı | Plansız kanallar yerine katalog üzerinden gelen taleplerin payı | katalog üzerinden oluşturulan talepler / tüm kanallardan gelen tüm talepler | yüzde | Talep yönetimi aracı; posta kutusu ve sohbet etiketleri | Hizmet talebi yönetimi; hizmet kataloğu yönetimi | Yazılı bir tanım taşıyan birikim listesi kalemleri | Aylık |
| Talep terk oranı | Başlatılıp kullanıcı tarafından gönderilmeyen taleplerin payı | 24 saat içinde gönderilmeyen başlatılmış talepler / başlatılan talepler | yüzde | Portal analitiği | Hizmet talebi yönetimi | Kullanılabilirlik testlerinde görevi terk | Aylık |
| Arama başarı oranı | Bir talep veya görüntülenen bir yanıtla biten katalog aramalarının payı | oturum içinde bir talep veya bilgi görüntülemesi izleyen aramalar / aramalar | yüzde | Portal arama günlükleri | Bilgi yönetimi; hizmet kataloğu yönetimi | Kullanıcı araştırmasında bulunabilirlik | Aylık |
| Bayat kalem payı | Gözden geçirme tarihini aşmış veya belirli bir dönemde hiç kullanılmamış katalog kalemlerinin payı | gözden geçirmesi gecikmiş veya 12 ayda sıfır talebi olan kalemler / katalogdaki kalemler | yüzde | Katalog sicili | Hizmet kataloğu yönetimi | Birikim listesi yaşı ve budama | Üç aylık |
| Talep yoğunlaşması | En çok talep edilen kalemlerin açıkladığı taleplerin payı | en üstteki beş kalem için talepler / tüm katalog talepleri | yüzde | Talep yönetimi aracı | Hizmet talebi yönetimi | İş türüne göre Pareto | Üç aylık |

Her ölçüm için kullanıcı tabanını belirtin. “Uygun kullanıcılar” ölçmeden önce tanımlanmalıdır; örneğin bir hizmeti kullanabilecek rollerdeki personel ve liste metrik sicilinde kaydedilmelidir. Bir kullanımı yalnızca, teslim edilmiş bir erişim izni gibi, tamamlanmış bir sonuçla bittiğinde sayın; bir sayfa yüklendiğinde değil. Test hesaplarını ve otomatik trafiği dışarıda bırakın.

## Öneriler

### Hizmetlerinizi ve kullanıcılarınızı tanıyın

**1. Her hizmet için hedef kitleyi tanımlayın.** Benimsenmeyi ölçmeden önce hizmetin kimin için olduğunu ve alternatif yerine neden kullanacaklarını yazın. Finans personeli için inşa edilmiş yeni bir analitik hizmeti, yalnızca finans personelinin kullanması amaçlandıysa “düşük benimsenme” değildir. Tanımlı bir hedef kitle olmadan, benimsenme oranı hiç kimse hakkında bir sayıdır.

**2. Alternatifi kaydedin.** Her önemli hizmet için, insanların onu kullanmadıklarında şu anda ne yaptığını listeleyin: bir meslektaşa sormak, e-posta göndermek, bir araç satın almak, bir elektronik tablo çalıştırmak. Alternatifi önemli olan anlamda bir rakip olarak ele alın: hizmetiniz daha zor olduğunda kullanıcılarınızın gittiği yerdir. Tasarım ve gözden geçirme sırasında her iki yolun çabasını karşılaştırın.

**3. Kalemleri kullanıcı diliyle tanımlayın.** “Yazılım erişimi, standart” ve “Dizüstü bilgisayar değişimi, hasarlı” gibi başlıklar, dahili adlardan daha kolay bulunur. Birkaç kullanıcıdan kısa bir senaryodan bir kalemi bulmasını isteyerek başlıkları sınayın. İfade sorunları arama günlüklerinde hızla ortaya çıkar.

**4. Her kalem için bir sahip tutun.** Her katalog kaleminin adı belli bir sahibi, bir gözden geçirme tarihi, hedef kitlenin bir tanımı ve beklenen hacmi vardır. Sahipsiz kalemler sürüklenir. Kimse bir kalemi kimin ve neden kullandığını söyleyemiyorsa, o kalem kaldırılmaya adaydır.

### Yolculuğu ölçün

**5. Huniyi ölçümleyin.** Her önemli hizmet için keşiften tamamlanmış sonuca kadar olan adımları kaydedin: kalemi bulma, talebi başlatma, formu doldurma, gönderme, sonucu alma. Bir [dönüşüm hunisi](https://en.wikipedia.org/wiki/Conversion_funnel) görünümü kullanıcıların nerede ayrıldığını gösterir. Önce en büyük düşüşü düzeltin. Düzeltmelerin yalnızca veriyi güzelleştirmediğini, formu kısalttığını veya netleştirdiğini kontrol edin.

**6. Elde tutmayı görmek için kohortları kullanın.** Bir [kohort analizi](https://en.wikipedia.org/wiki/Cohort_analysis), kullanıcıları hizmeti ilk kullandıkları zamana göre gruplar ve her grubu izler. Kullanıcılarını elinde tutan bir hizmeti, onları bir kez çekip kaybeden bir hizmetten ayırır. Hizmet masası portalı veya bir dağıtım hattı gibi tekrar tekrar kullanılması gereken hizmetler için kullanın.

**7. İnsanların bulamadığı şeyler için arama günlüklerini okuyun.** Sonuçsuz aramalar veya farklı sözcüklerle tekrarlanan aramalar; adlandırmadaki, içerikteki veya kataloğun kendisindeki boşlukları gösterir. En çok yapılan sonuçsuz aramaları her ay gözden geçirin ve her biri için karar verin: bir kalemi yeniden adlandırmak, bir eş anlamlı eklemek, bir makale yazmak veya yeni bir kalem oluşturmak. [Web analitiği](https://en.wikipedia.org/wiki/Web_analytics) araçları bunu sağlayabilir; portalın kendi günlükleri de sağlayabilir.

**8. Gruba göre bölümleyin.** Benimsenmeyi ve terki, bu bilgiye yasal ve etik erişiminiz olan yerlerde rol, konum, cihaz ve erişilebilirlik ihtiyaçlarına göre ayırın. Toplam sağlıklı görünürken gece vardiyası personeli veya mobil cihazlardaki kullanıcılar iki kat oranında başarısız olabilir. İnsanları korumak için küçük grupları bastırın ve önceki konulardaki deneyim ölçümleriyle birleştirin (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”).

### Kataloğu dürüst tutun

**9. Takvimle budayın.** Kataloğu her çeyrek gözden geçirin. Kullanılmayan kalemleri kaldırın veya birleştirin, sonlandırılmış hizmetlerin kalemlerini emekliye ayırın ve yüksek terki olan kalemleri düzeltin. Daha küçük, doğru bir katalog, eksiksiz ama bayat bir kataloğa göre kullanıcılara daha iyi hizmet eder. Kaldırmayı normal sayın ve nedenini kaydedin.

**10. Talebin biçimine bakın.** Çoğu katalogda birkaç kalem taleplerin çoğunu oluşturur; bu örüntü sıklıkla [Pareto ilkesi](https://en.wikipedia.org/wiki/Pareto_principle) üzerinden anlatılır. Tasarım çabasını sık kullanılan kalemlere odaklamak ve rutin olanları otomatikleştirmek için kullanın (bkz. Konu 3.7 “Self servis ve otomasyon metrikleri”). Uzun kuyruğu bakmadan bırakmayın; çünkü nadir kalemler, onlara ihtiyaç duyan insanlar için çok önemli olabilir.

**11. Benimsemeyi zorlamayın.** Bir hizmet gerekliyse, kolaylaştığı anda kullanıcılar gelir. Kuruluş denetim veya kontrol nedenleriyle bir kanal gerektiriyorsa bunu söyleyin ve sayının tercihi değil bir kuralı yansıttığı konusunda açık olun. Telefon numarasını gizlemek veya alternatifi zorlaştırmak gibi [karanlık kalıplardan](https://en.wikipedia.org/wiki/Dark_pattern) kaçının; çünkü kullanımı yükseltir, güveni düşürür.

**12. Sahiplerle ve kullanıcılarla döngüyü kapatın.** Huniyi, arama boşluklarını ve bayat listeyi kalem sahipleriyle her ay paylaşın. Kullanıcılara, ankette ve gözden geçirmelerde, bir hizmeti neden kullandıklarını veya kaçındıklarını sorun (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”). Neyi değiştirdiğinizi sicile kaydedin ve bunun gerçekleştiğini kullanıcılara söyleyin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oynanır | Eşlenen koruma metriği veya uygulaması |
| --- | --- | --- |
| Benimsenme oranı | Kullanımı zorunlu kılmak; oturum açmaları veya sayfa görüntülemelerini kullanım saymak; “uygun kullanıcıları” zaten kullananlara daraltmak | Tamamlanmış sonuç tanımı; memnuniyet ve çaba derecelendirmeleriyle karşılaştırma; uygun kullanıcı kuralını yayımlama |
| Etkin kullanım oranı | Kullanıcılar etkin görünsün diye otomatik kaydetmek; etkinlik sayılan bildirimler göndermek | Yalnızca kullanıcı tarafından başlatılmış tamamlanmış eylemleri sayma; bırakmış kullanıcılarla örnek görüşmeler |
| Katalog kapsamı | Her talebi genel bir katalog kalemine zorlamak; e-posta taleplerini “lütfen portalı kullanın” diyerek kapatmak | Talep terk oranı ve memnuniyet; kaç talebin başka bir kanaldan yeniden açıldığını sayma |
| Talep terk oranı | Gerekli form alanlarını kaldırarak işi karşılamaya kaydırmak; terk edilen talepleri yalnızca uzun bir pencereden sonra saymak | Karşılamada yeniden iş ve açıklama oranı (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”) |
| Arama başarı oranı | Her tıklamayı başarı saymak; her sorguyla eşleşen ilgisiz makaleler eklemek | Sonucun kullanıldığını kontrol etme (talep yapıldı, makale yararlı olarak derecelendirildi); sonuçsuz aramaları okuma |
| Bayat kalem payı | Kalemleri okumadan gözden geçirilmiş işaretlemek; gözden geçirme tarihlerini toplu sıfırlamak | Gözden geçirilen kalemlerin doğruluğundan örnekleme; son gerçek değişiklik tarihini gösterme |
| Talep yoğunlaşması | Popüler kalemleri çoklu kalemlere bölmek; uzun kuyruk talebini gizlemek için ilgisiz kalemleri birleştirmek | Değişiklik günlüğü olan sabit kalem sınıflandırması; kuyruğa kategoriye göre bakma |

Sağlıklı bir okuma şudur: en çok kullanılan kalemlerin iyi çalıştığı ve kolaylaştığı, kullanıcıların hizmeti alternatiften daha iyi olduğu için seçtiği ve bir kalemi emekliye ayırmanın rutin olduğu bir katalog.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Zorunlu kanal | Öngörülebilir hacim, denetlemesi kolay | İçerleme, geçici çözümler, şişirilmiş sayılar |
| Gönüllü benimseme | Değerin dürüst sinyali | Daha yavaş; bazı hizmetler hiç benimsenmeyebilir |
| Büyük katalog | Eksiksiz, nadir ihtiyaçları kapsar | Aranması zor; bayatlar |
| Küçük katalog | Bulması ve bakımı kolay | Nadir ihtiyaçlar dışarıda kalır; kullanıcılar e-postaya başvurur |
| Huni metrikleri | Kullanıcıların nerede bıraktığını belirler | Ölçümleme gerektirir; sonuç pahasına formu optimize etmeyi teşvik edebilir |
| Nedenini soran anket | Davranışı açıklar | Kimin yanıt verdiğine göre yanlı; ölçeklemesi zor |

Pratik yanıt, açık bir kalite avantajıyla desteklenen gönüllü benimsemeyi tercih etmek ve zorunlulukları yalnızca kontrol veya uyum gerektirdiğinde, sayıyı buna göre etiketleyerek kullanmaktır. Kataloğu bakımı yapılabilecek kadar küçük tutun ve kuyruğu yüz yarı kullanılmış kalemde değil, aranabilir bir bilgi tabanında tutun.

## Takımınızla tartışılacak sorular

**1. Ana hizmetlerimizin her biri kimin için ve kullandıklarını nasıl bileceğiz?**
Takımınızın en çok zaman harcadığı beş hizmeti listeleyin ve her biri için hedef kitleyi yazın. Sonra benimsenmenin onlar için nasıl ölçülebileceğini sorun. Kolaylaştırıcı, hedef kitlesini kimsenin adlandıramadığı hizmetlere bakmalıdır; çünkü bunların büyük olasılıkla bir benimsenme planı yoktur.

**2. İnsanlar hizmetimizi kullanmadığında ne yapıyor ve neden?**
Düşük benimsenen bir hizmet için, ondan kaçınan birkaç kullanıcıyla görüşün veya onları anketleyin. Alternatif çoğunlukla açıklayıcıdır: daha hızlı, daha tanıdık veya daha esnek olabilir. Hizmeti iyileştirmeye, alternatifi değiştirmeye veya hizmetin gerekli olmadığını kabul etmeye karar verin.

**3. Kullanıcılar en çok talep edilen kalemimizde nerede bırakıyor?**
En üstteki kalem için huniyi, ilk görüntülemeden gönderime kadar gösterin. Takımdan en büyük düşüşün nerede olduğunu tahmin etmesini isteyin, sonra karşılaştırın. Sınanacak bir değişiklik üzerinde anlaşın ve sorunu başka yere kaydırmadan işe yaradığını nasıl kontrol edeceğinizi söyleyin.

**4. Cesaret edebilsek katalogdan neyi kaldırırdık?**
Bir yılda hiç talebi olmayan kalemlerin listesini yazdırın. Her biri kaybolsa ne olacağını sorun. Konuşma çoğunlukla bir kalemin, birinin bir zamanlar istemesi yüzünden var olduğunu ortaya çıkarır. İlk beşini kaldırmak veya birleştirmek için bir tarih ve kullanıcılara bir not üzerinde anlaşın.

**5. Kullanıcıları nerede dürtüyor veya zorluyoruz ve bu maliyete değer mi?**
Bir kuralın veya tasarımın kullanıcıları bir kanala ittiği her yeri listeleyin. Hangilerinin gerçekten gerekli, hangilerinin alışkanlık olduğunu sorun. Kolaylaştırıcı, kullanıcıların her birini nasıl deneyimlediğini ve ortaya çıkan sayıların liderlerin düşündüğü anlama gelip gelmediğini araştırmalıdır.

**6. İnsanlar bizde olmayan neyi arıyor?**
En çok yapılan sonuçsuz aramaları gözden geçirin. Her biri için bir kalem eklemeye, bir makale yazmaya veya hizmetin var olmadığını açıklamaya karar verin. Bu gözden geçirmenin sahibinin kim olduğunu ve ne sıklıkla yapılacağını sorun.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları, önemli olması için benimsenmeye ihtiyaç duyan hizmetler ve özellikler inşa eder. Başlangıçta hedef kitleyi tanımlamalı, kullanım ölçümlerini hizmete yerleştirmeli ve lansmandan sonra huniyi gözden geçirmelidir. Benimsenme verisi çalışmaya geri bildirimdir ve iyileştirme oturumlarına ve gözden geçirmeye aittir. Takımlar, bir yayın gönderildiğinde bittiğini ilan etmekten kaçınmalıdır. Bitti, hedeflenen kullanıcıların faydayı aldığı anlamına gelir.

### Hizmet ve operasyon takımları

Operasyon takımları kataloğu işletir ve her kanaldan gelen talepleri görür. Kataloğu güncel tutmalı, onu atlayan talepleri etiketlemeli ve nedenini sormalıdır. Bir talebi yönlendirerek kapatmamalıdır; çünkü bu sinyali gizler. Arama boşlukları ve terk, portal için en iyi iyileştirme kaynaklarıdır.

### Liderlik ve yönetişim

Liderler, benimsenmenin bir konuşma mı yoksa bir kota mı olacağına karar verir. Hizmetin ne için olduğunu, kime yardım ettiğini ve insanların neden onu seçtiğini sormalıdırlar. Bireysel takımlar için benimsenme hedefleri belirlemekten kaçınmalı, kullanılmayan hizmetlerin emekliye ayrılmasını desteklemeli ve benimsenmeyi memnuniyet ve çabayla birlikte görmeyi beklemelidir. Bir zorunluluk haklı olduğunda, liderler bunu kullanıcılara açıklamalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar ihtiyaç duyduklarını az çabayla almak ister. Bir portalın aranmasının zor olduğunu, formların kuruluşun zaten bildiği şeyleri istediğini ve eski yolun daha hızlı olduğunu fark ederler. Davranışları ve söyledikleri, en dürüst benimsenme sinyalidir. Bir hizmetten neden kaçındıkları sorulmalı ve sonuç olarak neyin değiştiği kendilerine söylenmelidir.

## Uygulamada: çevik bir ITIL örneği

Ulusal bir ulaştırma kurumunun BT departmanı bir hizmet masası, yaklaşık 140 kalemlik bir kataloğu olan bir self servis portalı ve birkaç ürün takımı işletir. Aşağıdaki sayılar açıklayıcıdır (illustrative).

Portal bir yıl önce açılmıştır ve liderlik, taleplerin yüzde 80'inin portaldan gelmesi hedefini koymuştur. Aylık rapor yüzde 78 kapsam gösterir ve hizmet yönetimi başkanı, kullanıcı anketindeki yorumları okuyana kadar memnundur. Bölge ofislerindeki personel portalın yavaş ve formların uzun olduğunu söyler. Katalog yöneticisinden huniye ve arama günlüklerine bakmasını ister.

“Yeni başlayan ekipmanı” için huni, çeyrekte 1.100 başlatma ve 640 gönderim gösterir; terk oranı yüzde 42'dir. Formun 23 alanı vardır. Arama günlüğü “laptop” teriminin sekiz kalem döndürdüğünü ve en çok aranan terim olmasına rağmen “VPN” teriminin hiçbir şey döndürmediğini gösterir. 140 katalog kaleminden 38'inin 12 ayda hiç talebi olmamıştır ve 21'inin gözden geçirme tarihi geçmiştir. En üstteki beş kalem taleplerin yüzde 61'ini oluşturur ve taleplerin ek yüzde 15'i e-postayla gelir ve elle kaydedilir.

Takım dört değişiklik yapar. Yeni başlayan formunu, İK sisteminin zaten tuttuğu verileri kullanarak dokuz alana indirir. Bir VPN makalesi ve eş anlamlıları olan bir kalem ekler. Sekiz dizüstü bilgisayar kalemini ikiye birleştirir. Ve kullanılmayan kalemlerin 19'unu, sahiplere bir notla emekliye ayırır. Ayrıca aylık raporun okunuşunu değiştirir: kapsam, terk oranı ve “ihtiyacınız olanı almak ne kadar kolaydı?” anket sorusuyla birlikte gösterilir. Üç ay sonra yeni başlayan kaleminin terki yüzde 24'e düşer, portalın kapsamı yüzde 74'tür ve bölge ofislerinden gelen çaba derecelendirmesi yükselir. Direktör kapsamın neden düştüğünü sorar. Hizmet yönetimi başkanı, e-posta taleplerinin daha önce zorla kapatıldığını, düşük sayının daha dürüst olduğunu ve deneyimin daha iyi olduğunu açıklar. Karar günlüğü, hedefin bir yönle değiştirildiğini kaydeder: terki azalt ve çaba derecelendirmesini yükselt; kapsam gözden geçirilir ancak hedeflenmez.

## Sektör mercekleri

**Girişim (startup).** Çoğunlukla katalog yoktur. “X'i nasıl alırım” içeren basit bir sayfa ve paylaşılan bir kanal yeterlidir. İnsanların ne istediğini izleyin ve en üstteki beş talebi kısa kılavuzlara dönüştürün. Dahili araçların benimsenmesini kullanıcılara sorarak ölçün ve resmî hunileri atlayın.

**Küçük işletme.** BT'yi sağlayan kişi azdır ve talepler her kanaldan gelir. 10 ila 20 kalemlik mütevazı bir katalog ihtiyaçların çoğunu karşılar. Kullanıcıları, ele aldığı taleplerden daha pahalıya bakım gerektiren bir portala zorlamayın. Listeyi yılda iki kez gözden geçirin.

**Kurumsal.** Ölçek, yönetişim gerektirecek kadar büyük bir katalog verir: sahipler, gözden geçirme tarihleri ve bir sınıflandırma. Benimsenmeyi iş birimine ve bölgeye göre bölümleyin ve yerel ihtiyaçları göz ardı eden kurumsal çapta zorunluluklardan kaçının. Katalog kalemleri sayılan ama kullanılmayan tedarikçilere dikkat edin.

**Kamu sektörü.** Hizmetler personelin yanı sıra kamuya da ulaşır; erişilebilirlik, dil ve eşit erişim konusunda yükümlülükler vardır. Dijital benimsenmenin dışlanmayı gizlememesi için ölçümlere yardımlı kanalları (telefon, yüz yüze) dahil edin. Yasal veya politika kuralları bir kanal gerektirdiğinde bunu raporlarda belirtin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler mütevazıdır. Kullanım günlükleri ve talep verileri genellikle zaten vardır. Huni ve arama analizi, çoğu platformun sağladığı portal analitiğine erişim gerektirir. Ana zaman maliyeti üç aylık katalog gözden geçirmesi ve arama boşluklarına ve terklere aylık bir bakıştır; her biri birkaç saat. Formları düzeltmek ve kalemleri birleştirmek tasarım ve yapılandırma zamanı maliyeti getirir.

Getiri, kullanılan hizmetlerden, biten taleplerden ve karşılamada daha az israftan gelir. Terki azaltan daha kısa bir form, tekrar temasları ve elle işlemeyi azaltır. Kullanılmayan kalemleri budamak bakımı azaltır. Gerekçeyi kendi sayılarınızdan oluşturun: terk oranı, e-postayla gelen talep başına elle işleme süresi ve değişikliklerden önce ve sonra kullanılmayan bir kalemi bakımda tutmanın maliyeti. Kuruluşa ve yönteme bağlı oldukları için izini sürmediğiniz yayımlanmış portal yatırım getirisi iddialarından kaçının.

## Anti-desenler ve tuzaklar

- **Lansmanları benimseme saymak.** Bir hizmet, hedeflenen kullanıcılar onunla sonuçları tamamladığında benimsenmiştir. Duyuruyu değil, kullanımı ölçün.
- **Bir sayıyı yükseltmek için bir kanalı zorunlu kılmak.** Kullanıcılar etrafından dolanır. Hizmeti iyileştirin ve sayının izlemesine izin verin.
- **Kalem ekleyip hiç kaldırmamak.** Katalog aranamaz hale gelir. Her çeyrek budayın.
- **Yalnızca toplamlara bakmak.** Gruba göre bölümleyin ve huniye bakın.
- **E-postayla gelen talepleri yönlendirmeyle kapatmak.** Talebi gizler ve kullanıcıları rahatsız eder. Talebi ele alın ve rotayı düzeltin.
- **Sayfa görüntülemelerini kullanım saymak.** Tamamlanmış sonuçları sayın.
- **Düşük kullanımı kullanıcıların başarısızlığı saymak.** Hizmetin gerekli ve kullanımı kolay olup olmadığını sorun.
- **Kalem sahiplerinin sahipliği bırakmasına izin vermek.** Her kalem için sahip ve gözden geçirme tarihi atayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Katalog tasarımı | Taleple büyümüş liste | Katalog var, ifade tutarsız | Sahipleri ve gözden geçirme tarihleri olan kullanıcı dilinde kalemler | Üç aylık budama; sınıflandırma yönetiliyor | Takımlar ve tedarikçiler arasında paylaşılan katalog; kullanıcılarla birlikte tasarlanan kalemler |
| Benimsenme ölçümü | Anekdot | Kalem bazında talep sayıları | Uygun kullanıcılar ve tamamlanmış sonuçlarla tanımlanmış benimsenme | Huniler, kohortlar ve bölümler aylık gözden geçiriliyor | Hizmetler arasında deneyim ve sonuçlara bağlı benimsenme |
| İyileştirme | Plansız düzeltmeler | Şikâyetlerden sonra düzeltmeler | Arama boşlukları ve terkler aylık gözden geçiriliyor | Düzeltmeler önceliklendirilip bir birikim listesinde izleniyor | Kullanıcılarla koordine edilen iyileştirme, emekliye ayrılan hizmetler açıkça raporlanıyor |

## Kontrol listesi

- [ ] Her önemli hizmetin yazılı bir hedef kitlesi ve bir alternatif yolu var.
- [ ] Benimsenme, uygun kullanıcıların tamamlanmış sonuçları olarak tanımlanmış.
- [ ] Katalog kalemlerinin sahipleri, kullanıcı dilinde açıklamaları ve gözden geçirme tarihleri var.
- [ ] Huni, en çok talep edilen kalemler için ölçümlenmiş.
- [ ] Sonuçsuz aramalar aylık gözden geçiriliyor.
- [ ] Benimsenme ve terk gruba göre bölümlenmiş, küçük gruplar bastırılmış.
- [ ] Katalog dışından gelen talepler etiketleniyor ve sayılıyor.
- [ ] Katalog her çeyrek budanıyor, nedenleri kaydediliyor.
- [ ] Benimsenme, memnuniyet veya çaba ölçümlerinin yanında gösteriliyor.
- [ ] Bireysel bir takım veya kişi için benimsenme hedefi belirlenmemiş.

## Yapay zekâ istemleri

**Bir talep hunisini analiz edin.**

```text
[kurum türü] içindeki [kalem adı] katalog kalemi için, [dönem] portal
verilerimiz şöyle: görüntüleme [sayı], başlatma [sayı], gönderim [sayı] ve
karşılanan [sayı]. Formun [sayı] alanı var: [liste]. Kullanıcıların büyük
olasılıkla nerede zorlandığını açıklayın, sınanacak üç değişiklik önerin ve her
değişikliğin sorunu karşılamaya kaydırmadan işe yaradığını nasıl
kontrol edeceğimi söyleyin. Kıyas değerleri uydurmayın. Varsayımlarınızı ve
ihtiyaç duyduğunuz ek verileri listeleyin.
```

**Katalog boşlukları için arama günlüklerini gözden geçirin.**

```text
[dönem] için sonuç sayılarıyla en çok yapılan [sayı] katalog araması burada:
[verileri yapıştırın]. Bunları temalara gruplayın, hiçbir şey veya çok fazla
kalem döndüren aramaları işaretleyin ve her birinin yeni bir kaleme, yeniden
adlandırmaya, bir eş anlamlıya veya bir bilgi makalesine ihtiyaç duyup
duymadığını önerin. Sunmayabileceğimiz hizmetler hakkında tahmin yürütmeyin.
Varsayımlarınızı ve kalem sahiplerine sormam gereken soruları listeleyin.
```

**Bir katalog budama gözden geçirmesi planlayın.**

```text
[sayı] kalemlik bir katalog yönetiyorum. Bu kalemlerin her biri için 12 aylık
talep sayılarım, gözden geçirme tarihlerim ve sahiplerim var: [bir özet
yapıştırın]. Bir kalemi kaldırmak, birleştirmek veya tutmak için ölçütler,
sahiplere kısa bir not ve nadir ama kritik kalemleri bırakmaktan kaçınmanın bir
yolunu önerin. Talepleri yalnızca e-postaya kaydırmadığımızı gösteren bir
kontrol ekleyin. Varsayımlarınızı listeleyin.
```

**Bir hizmet için benimsenme tanımı taslağı hazırlayın.**

```text
Hizmet: [ad]. Hedeflenen kullanıcılar: [roller]. Bugünkü alternatif yol:
[şimdi ne yapıyorlar]. Uygun kullanıcıları, neyin tamamlanmış kullanım
sayıldığını, veri kaynağını, test ve otomatik trafiğin nasıl dışlanacağını,
ölçümün nasıl oynanabileceğini ve bir koruma önlemini kapsayan tek sayfalık bir
benimsenme tanımı hazırlayın. Hedef uydurmayın. Varsayımlarınızı ve
onaylamam gereken her şeyi listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir benimsenme veya katalog metriği için eşlenen koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): yeni bir katalog metriği kaydının oynama vektörü ve koruma önlemi taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Benimsenme, hedeflenen kullanıcıların bir hizmetle sonuçları tamamlaması demektir; bu yüzden hedef kitleyi tanımlayın ve tamamlamaları sayın.
- Huniyi, arama boşluklarını ve kullanıcıların elde tutulmasını ölçün ve gruba göre bölümleyin.
- Hizmeti, kullanıcıların bugün sahip olduğu alternatifle karşılaştırın.
- Kataloğu küçük, sahipli ve her çeyrek budanmış tutun.
- Bir sayıyı yükseltmek için kullanımı zorlamayın ve benimsenmeyi memnuniyet ve çabayla eşleştirin.
- Düşük kullanımı kullanıcı başarısızlığı olarak değil, ihtiyaç ve kolaylık hakkında bir soru olarak ele alın.

## Kaynaklar ve ileri okuma

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
