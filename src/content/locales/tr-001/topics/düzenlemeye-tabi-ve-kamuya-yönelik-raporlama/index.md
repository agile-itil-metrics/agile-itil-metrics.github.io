# Düzenlemeye tabi ve kamuya yönelik raporlama

**Zorunlu raporlama, etrafında tasarım yapılması gereken sabit bir gerekliliktir; bu yüzden onu hizmeti işletmekte kullandığınız kayıtlardan üretin, raporlama görünümünü öğrenme görünümünden ayrı tutun ve işi yapan insanları onu çarpıtan hedeflerden koruyun.**

## Genel bakış ve motivasyon

Birçok kuruluş, istese de istemese de hizmetleri hakkında rapor vermek zorundadır. Düzenleyiciler olay bildirimleri, kullanılabilirlik rakamları ve kontrol kanıtı ister. Hükümetler kurumların performans verilerini, harcamalarını ve erişilebilirlik beyanlarını yayımlamasını şart koşar. Fon sağlayıcılar ve gözetim organları, taahhütlere karşı sonuçları sorar. Sözleşmeler hizmet raporları gerektirir. Bu ortamlarda raporlama bir iç yönetim tercihi değildir. Bir son tarihi, bir tanımı ve bazen bir cezası olan bir yükümlülüktür.

[Kamu sektörünün](https://en.wikipedia.org/wiki/Public_sector) kendine özgü nitelikleri vardır. Vatandaşlara ve seçilmiş organlara karşı [hesap verebilirlik](https://en.wikipedia.org/wiki/Accountability) temel bir görevdir ve denetim, mevzuat, [bilgi edinme özgürlüğü yasaları](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country) ve yayımlanan sonuçlar aracılığıyla yerine getirilir. [Açık hükümet](https://en.wikipedia.org/wiki/Open_government) ve [açık veri](https://en.wikipedia.org/wiki/Open_data) uygulamaları, bilgiyi incelemeye ve yeniden kullanıma açar. [Kamu alımları](https://en.wikipedia.org/wiki/Public_procurement) kuralları neyin ve nasıl satın alınabileceğini şekillendirir; [kayıt yönetimi](https://en.wikipedia.org/wiki/Records_management) yükümlülükleri bilginin ne kadar süre saklanacağını belirler. [Paranın karşılığı](https://en.wikipedia.org/wiki/Value_for_money), kamu harcamalarının yaygın bir sınavıdır ve bağımsız organlar bunu incelemek için [performans denetimleri](https://en.wikipedia.org/wiki/Performance_audit) yürütür. Ayrıntılar ülkeye, hükümet düzeyine ve sektöre göre değişir; bu konu yasal gereklilikleri değil, ölçüm uygulamasını betimler. Hukuk, uyum ve kayıt iş arkadaşlarınızla çalışın.

Finans, sağlık, enerji ve telekomünikasyon gibi düzenlemeye tabi özel sektör kuruluşları bu niteliklerin çoğunu paylaşır. Olay bildirim yükümlülükleri, dayanıklılık raporlaması ve gözetim incelemeleriyle karşılaşırlar. Ortak nokta, neyin ne zamana kadar raporlanması gerektiğini teslimat takımının dışındaki birinin tanımlamasıdır.

Sürekli teslimat ve ITIL uygulamasının ikisinin de sunacağı bir şey vardır. Paydaşlarla sürekli iş birliği yapmayı hedefleyen çevik amaç, meşru ihtiyaçları olan paydaşlar olan gözetim organlarına da uzanır ve ne gerektirdikleri konusunda yapılan erken konuşmalar yeniden işi önleyebilir. Küçük, çalışan artımları sürekli teslim etme çevik alışkanlığı raporlamaya uygundur: kayıt sistemlerinden otomatik üretilen raporlar, her çeyrekte elle derlenenlerden daha doğru ve daha ucuzdur. ITIL'in ölçüm ve raporlama uygulaması ile hizmet düzeyi yönetimi, neyin ölçüldüğünü ve paylaşıldığını tanımlamak için sözcük dağarcığını sağlar.

Raporlama yükümlülükleri üç bilinen tehlike yaratır.

- **Hedeflerle çarpıtma.** Raporlanan bir rakamın bir sonucu olduğunda iş rakama doğru eğilir. John Seddon'ın kamu sektöründe sistem düşüncesi üzerine yazıları ve Jerry Muller'ın metrik saplantısı çözümlemesi dahil olmak üzere kamu sektörü hedef yazını, hedefi tutturmakla halka hizmet etmenin birbirinden ayrıştığı birçok durumu betimler. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law)ndan çıkan koruma önlemi tüm gücüyle geçerlidir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).
- **İki takım sayı.** Bir rakamın yasal tanımı çoğu zaman takımın iç kullanımdaki tanımından farklıdır. Takım birine göre yönetip diğerini raporlarsa kimse hiçbirine güvenmez. İkisini de görünür tutun, uzlaştırın ve farkları açıklayın.
- **Yük olarak raporlama.** Elle yapılan, tekrarlanan, tutarsız talepler yetenekli insanları tüketir. Raporlama kahramanca tablo hesaplama çalışmasına ne kadar bağımlıysa hata ve gecikme o kadar sızar.

Bu konu, bu bölümün uyum, risk ve tedarikçi ölçümlerine (bkz. Konu 8.2 “Risk ve kontrol metrikleri”, Konu 8.3 “Uyum ve denetim metrikleri” ve Konu 8.4 “Tedarikçi ve sözleşme metrikleri”) ve ilk bölümdeki veri temellerine (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”) dayanır.

## Temel ilkeler

- **Yükümlülükleri tasarım girdisi olarak ele alın.** Onları tanımları, son tarihleri ve sahipleriyle erkenden listeleyin ve veri toplamayı bunların etrafında tasarlayın.
- **Raporları kayıt sistemlerinden üretin.** Çıkarımı otomatikleştirin ve kökeni görünür tutun.
- **Raporlama görünümünü öğrenme görünümünden ayırın.** Takımların, neyin raporlandığıyla kısıtlanmayan, açık sözlü çalışma ölçümlerine ihtiyacı vardır.
- **Tanımları uzlaştırın.** Yasal rakamların takımın kendi ölçümleriyle nasıl ilişkili olduğunu gösterin.
- **Kötü haberler dahil dürüstçe raporlayın.** Düzeltmeler ve bağlam güven oluşturur.
- **İnsanları sapkın hedeflerden koruyun.** Yasal hedefleri eşlik eden ölçümlerle kullanın ve sınırlarını açıklayın.
- **Yayımlanan veriyi kullanılabilir kılın.** Erişilebilirlik, açıklık ve biçim halk için önemlidir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Raporlama yükümlülüğü kapsamı | Adı belli bir sahibi, belirtilmiş bir tanımı, bir veri kaynağı ve bir takvim girdisi olan raporlama yükümlülüklerinin oranı | dördüne de sahip yükümlülükler / kapsamdaki raporlama yükümlülükleri | yüzde | Yükümlülük kaydı | Ölçüm ve raporlama; yönetişim | Paydaşlarla bilgi ihtiyaçları üzerine çalışma anlaşması | Üç aylık |
| Rapor zamanındalığı | Gereken raporların vade tarihine kadar sunulan oranı | vade tarihinde veya öncesinde sunulan raporlar / dönemde vadesi gelen raporlar | yüzde | Raporlama takvimi ve sunum kayıtları | Ölçüm ve raporlama | Paydaşlara verilen taahhütlerin karşılanması | Aylık |
| Düzeltme (yeniden beyan) oranı | Sunulmuş raporların veya rakamların sonradan düzeltilen oranı | sunulduktan sonra düzeltilen raporlar veya rakamlar / sunulan raporlar veya rakamlar | yüzde | Sunum günlüğü ve düzeltme günlüğü | Ölçüm ve raporlama; sürekli iyileştirme | Kaçan kusurlar | Üç aylık |
| İzlenebilirlik kapsamı | Raporlanan rakamlardan, belgelenmiş adımlarla bir kayıt sistemine kadar izlenebilenlerin oranı | bir kayıt sistemine belgelenmiş kökeni olan rakamlar / raporlanan rakamlar | yüzde | Köken belgeleri, rapor belirtimleri | Ölçüm ve raporlama; bilgi yönetimi | Yeniden üretilebilir derlemeler | Üç aylık |
| Tanım uyumu | Yasal tanımı ile iç tanımı belgelenmiş ve uzlaştırılmış raporlanan ölçümlerin oranı | belgelenmiş uzlaştırması olan ölçümler / yasal tanımı olan raporlanan ölçümler | yüzde | Metrik kaydı | Ölçüm ve raporlama; hizmet düzeyi yönetimi | Paylaşılan bitti tanımı | Üç aylık |
| Raporlama emeği | Yinelenen bir raporu üretmek için harcanan kişi saatleri | rapor döngüsü başına kaydedilen saatler, elle çıkarım ve derlemenin payıyla birlikte | saat | Zaman tahminleri, emek kayıtları | Ölçüm ve raporlama; sürekli iyileştirme | Teslimat dışı işin maliyeti | Rapor döngüsü başına |
| Yayımlanan erişilebilirlik uyumu | Yayımlanan raporların ve veri kümelerinin gereken erişilebilirlik standardını karşılayan oranı | erişilebilirlik denetiminden geçen yayımlanmış öğeler / yayımlanmış öğeler | yüzde | Erişilebilirlik test sonuçları | Ölçüm ve raporlama; bilgi yönetimi | Kapsayıcı bitti tanımı | Üç aylık |

Her raporlanan ölçümün yanına yasal tanımı, kaynağı ve son tarihi yazın. Kabul kaydediliyorsa, bir rapor gönderildiğinde değil, alıcı kurum tarafından kabul edildiğinde “zamanında” sayılır. Bir yeniden beyan, gönüllü ya da zorunlu olsun, daha önce sunulmuş bir rakamda yapılan her düzeltmeyi sayar. Raporlama emeği kuruluş için bir eğilim ölçümüdür ve asla bireylerin ölçümü değildir. Erişilebilirlik uyumu, Web İçeriği Erişilebilirlik Yönergeleri gibi size uygulanan standarda göre kontrol edilir.

## Öneriler

### Yükümlülükleri tasarım girdisi olarak ele alın

**1. Raporlama yükümlülüklerinin bir kaydını tutun.** Her biri için gerekliliği, yasal veya sözleşmesel kaynağı, neyin raporlanacağını, tanımı, son tarihi, alıcı kurumu, iç sahibi ve veri kaynağını kaydedin. Yasalar, sözleşmeler veya düzenleyiciler değiştiğinde gözden geçirin. Erken bilinen yükümlülükler tasarıma katılabilir; geç keşfedilenler elle derlenmek zorundadır.

**2. Gözetim organını erkenden dahil edin.** Düzenleyicilere, denetçilere ve fon sağlayıcılara verilerle ne yapacaklarını ve neye ihtiyaç duyduklarını sorun. Bazıları bir tanımı şekillendirmenize yardımcı olacak ya da zaten ürettiğiniz biçimdeki veriyi kabul edecektir. Çevik uygulama paydaşlarla iş birliğine değer verir ve gözetim organları paydaştır. Bu konuşmaların kayıtlarını tutun ve önemli olan yerde bağımsızlığı koruyun.

**3. Veri toplamayı baştan raporlama için tasarlayın.** Bir hizmet kurarken, gerekli raporların ihtiyaç duyacağı olayları ve alanları ekleyin: olay zaman damgaları, etki, kategoriler, kullanıcı sayıları. Bunları sonradan eklemek maliyetlidir. Onları bir kez tanımlayın ve tanımı takımlar arasında, tanım için tek bir sahiple paylaşın (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

### Raporları kayıt sistemlerinden üretin

**4. Kayıttan rapora boru hattını otomatikleştirin.** Olay, değişiklik ve hizmet sistemlerinden betiklenmiş sorgularla çıkarım yapın, belgelenmiş dönüşümler uygulayın ve raporu gözden geçirilmiş bir şablonla üretin. Otomatik raporlar elle hazırlananlara göre tekrarlanabilir, daha hızlı ve denetlemesi daha kolaydır. Geçmiş bir raporun yeniden üretilebilmesi için sorguları ve şablonları sürümleyin.

**5. Kökeni belgeleyin.** Her raporlanan rakam için nereden geldiğini, nasıl hesaplandığını ve kimin kontrol ettiğini not edin. İzlenebilirlik kapsamı bunun ne kadar iyi yapıldığını ölçer. “Bu sayı nereden geliyor?” diye soran bir denetçi ya da gazeteci dakikalar içinde net bir yanıt almalıdır.

**6. Sunumdan önce bağımsız bir okuyucuyla gözden geçirin.** Raporu üreten takımın dışından birinin tanımları, aritmetiği ve anlatıyı kontrol etmesini sağlayın. İncelemeler hataları ve desteksiz iddiaları yakalar. İncelemeyi kaydedin. Sorumlu kişiden kısa bir onay, sahipliği netleştirir.

**7. Açıkça düzeltin.** Sunumdan sonra bir hata bulunduğunda onu hızla düzeltin, neyin değiştiğini açıklayın ve nedeni not edin. Veri karmaşıksa sıfıra yakın bir düzeltme oranı şüphelidir. Görünür, hızlı bir düzeltme, yerinde bırakılmış bir rakamdan daha fazla güven oluşturur.

### Raporlama ile öğrenmeyi ayrı tutun

**8. Takım için bir çalışma görünümü sürdürün.** Takımların, yüzdelikler, en eski öğelerin yaşı ve kalite eşlikçileri gibi, iyileşmelerine yardımcı olan ölçümlere ihtiyacı vardır. Bunlar nadiren yasal rakamlarla aynıdır. Çalışma görünümünü raporlananlarla sınırlamayın ve yalnızca raporlanan rakama göre yönetmeyin.

**9. Yasal ve iç tanımları uzlaştırın.** Gereken bir ölçüm takımınkinden farklı olduğunda, farkları belgeleyin ve ikisini de gösterin. Örneğin bir düzenleyicinin kullanılabilirlik rakamı planlı bakımı dışlayabilirken, kullanıcılar onu kesinti olarak yaşar. Uzlaştırmayı metrik kaydında ve rapor notlarında gösterin. Bu, “iki takım sayı” sorununa karşı korur.

**10. Yasal hedefleri eşlikçilerle eşleyin.** Bir hedef dayatılırsa, çarpıtmayı ortaya çıkaracak ölçümler ekleyin: kalite, kullanıcı deneyimi ve dışarıda bırakılan iş. Örneğin ilk yanıt süresi hedefini bir çözüm ölçümü ve tekrarlayan başvuru ölçümüyle eşleyin (bkz. Konu 3.1 “Hizmet masası metrikleri”). Raporda rakamın nasıl okunması gerektiğini açıklayın.

### Kamu için yayımlayın

**11. Yayımlanan bilgiyi kullanılabilir kılın.** Yasanın ve gizliliğin izin verdiği yerlerde açık, makine tarafından okunabilir biçimlerde, açık açıklamalar, tanımlar ve tarihlerle yayımlayın. Belgeler ve web sayfaları için erişilebilirlik standartlarını karşılayın. Veriyi insanların okuyamayacağı ya da yeniden kullanamayacağı biçimde yayımlamak lafzı yerine getirir, amacı boşa çıkarır. Yardımcı teknoloji kullananlar dahil gerçek kullanıcılarla test edin (bkz. Konu 6.4 “Kullanıcı ve çalışan deneyimi”).

**12. Yayımladığınız şeyde gizliliği ve güvenliği koruyun.** İnsanları tanımlayabilecek küçük sayıları toplulaştırın ve bastırın, saldırganlara yardımcı olacak ayrıntıları yayımlamaktan kaçının ve ifşa kurallarını uzmanlarla denetleyin. Aynı özeni bilgi edinme özgürlüğü yasaları kapsamındaki yanıtlara da gösterin. Karartmaya dair kararları ve gerekçelerini kaydedin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşlenen koruma önlemi metriği veya uygulaması |
| --- | --- | --- |
| Raporlama yükümlülüğü kapsamı | Yükümlülükleri dar ele almak; anlaşma olmadan sahibi listelemek | Kaydın uyum veya iç denetim tarafından gözden geçirilmesi; sahiplerden doğrulama |
| Rapor zamanındalığı | Tarihe yetişmek için eksik raporlar sunmak; taslakları sunum saymak | Sunumda bütünlük kontrolü; yalnızca kabul edilen raporları saymak; düzeltme oranı |
| Düzeltme (yeniden beyan) oranı | Düzeltmeleri bastırmak; düzeltmeleri sessizce yapmak | Düzeltme günlüğünün bağımsız bir okuyucu tarafından gözden geçirilmesi; düşük bir oranın izlenebilirlikle birlikte okunması |
| İzlenebilirlik kapsamı | Kökeni yüzeysel belgelemek; yalnızca basit rakamları dahil etmek | Bir hesaplamayı kaynaktan yeniden gerçekleştirerek kökeni örneklemek |
| Tanım uyumu | Uzlaştırma yapmadan tanımları uyumlu ilan etmek; yasal tanımı yalnızca raporda benimsemek | Uzlaştırma belgesinin gözden geçirilmesi; her iki rakamı yan yana göstermek |
| Raporlama emeği | Saatleri kaydetmemek; işi başka takımlara kaydırmak | Takım geri bildirimiyle karşılaştırmak; tahmine tüm katkıda bulunanları dahil etmek |
| Yayımlanan erişilebilirlik uyumu | Yalnızca bazı sorunları bulan bir denetleyici çalıştırmak; geride kalan ayrı bir erişilebilir sürüm yayımlamak | Yardımcı teknolojiyle elle test; sürümler arasında eşitliği kontrol etmek |

Sağlıklı bir okuma şudur: sahipli her yükümlülük, zamanında ve doğru, düzeltmeleri görünür raporlar, kayıt sistemlerine izlenebilir rakamlar, uzlaştırılmış yasal ve iç tanımlar, azalan raporlama emeği ve halkın kullanabildiği yayımlanmış bilgi.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yanı | Zayıf yanı |
| --- | --- | --- |
| Raporların elle derlenmesi | Esnek; her veriyle çalışır | Yavaş, hataya açık, bireylere bağımlı |
| Otomatik raporlama | Tekrarlanabilir, denetlenebilir, işletmesi ucuz | Kurulum emeği; kötü bir tanımı yerleştirebilir |
| Her şey için tek ölçüm kümesi | Basit | İşi çarpıtır; yasal rakamlar nadiren takım ihtiyaçlarına uyar |
| Ayrı raporlama ve öğrenme görünümleri | Açık sözlü öğrenme; dürüst raporlama | Uzlaştırma ve disiplin gerektirir |
| Sert yasal hedefler | Net hesap verebilirlik | Sapkın etkiler; manipülasyon |
| Eşlikçi ve bağlamlı hedefler | Çarpıtmayı ortaya çıkarır | Açıklanacak daha çok şey |
| Düzenleyicilerle erken ilişki | Daha az sürpriz | Zaman; sürdürülecek sınırlar |
| Yalnızca kol mesafesinde ilişki | Net bağımsızlık | Geç geri bildirim; yeniden iş |

Düz yazıyla yanıt şudur: raporları kayıt sistemlerinden otomatikleştirin, takım çalışma görünümünü raporlama görünümünden ayrı tutun, tanımları açıkça uzlaştırın ve gözetim organlarını bağımsızlıklarını koruyarak erkenden devreye alın.

## Takımınızla tartışılacak sorular

**1. Hangi raporları, kime, ne zamana kadar borçluyuz ve her birinin sahibi kim?**
Listeyi odada derleyin ve kayıtla karşılaştırın. Genellikle boşluklar çıkar: sözleşmeler uyarınca, fon sağlayıcılara ya da az kişinin bildiği kurallar uyarınca borçlu olunan raporlar. Kolaylaştırıcı yeni öğeleri kaydetmeli ve sahipler atamalıdır.

**2. Hangi raporlanan rakamı, raporlanmasaydı farklı yönetirdik?**
Yasal ya da sözleşmesel bir ölçüm seçin ve kimse onu ölçmeseydi takımın ne yapacağını sorun. Yanıt, rakam ile amacın nerede ayrıştığını ortaya çıkarır. Farkı hangi eşlikçi ölçümün göstereceğini tartışın.

**3. Geçen çeyreğin raporunu bugün kaynaktan yeniden üretebilir miyiz?**
Bir rapor üzerinde deneyin. Neyin elle yapıldığını, belgelenmediğini ya da kaybolduğunu not edin. Otomatikleştirmek ya da belgelemek için ilk adımı ve bunu kimin yapacağını kararlaştırın.

**4. Sunumdan sonra bulunan bir hatayı nasıl ele alıyoruz?**
Süreci ve son örneği gözden geçirin. Düzeltme hızlı ve açık mıydı? Birinin bunu dile getirmekten korktuğu oldu mu? Düzeltmeyi neyin olağan hale getireceği üzerinde anlaşın.

**5. Yardımcı teknoloji kullanan biri yayımlanan raporumuzu okurken ne deneyimler?**
Yayımlanmış bir öğeyi birlikte test edin ya da yakın tarihli bir erişilebilirlik denetimini gözden geçirin. Yayımlanan belgeler için erişilebilirliğin kimde olduğunu sorun. Bir düzeltme ve tekrarını önleyecek bir süreç üzerinde anlaşın.

**6. Düzenleyici ya da gözetim organı verilerimizle gerçekte ne yapıyor?**
Birçok takım bunu bilmez. Bunu öğrenmek ve farklı bir biçimin onlara aynı ölçüde hizmet edip etmeyeceğini sormak için bir konuşma planlayın. Kolaylaştırıcı bağımsızlık sınırlarını not etmelidir.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları raporların bağımlı olduğu olayları ve alanları kurar ve yasal hedeflerin baskısını hisseder. Raporlama ihtiyaçlarını bitti tanımına dahil etmeli, açık sözlü bir çalışma görünümü tutmalı ve bir hedef işi çarpıttığında bunu belirtmelidir. Raporlamayı yapanlarla yapılan erken konuşmalar yeniden işi önlemeye yardımcı olur.

### Hizmet ve operasyon takımları

Operasyon takımları temel verinin çoğunu üretir ve çoğu zaman raporları hazırlar. Kökeni belgelemeli, çıkarımı otomatikleştirmeli ve bir düzeltme günlüğü tutmalıdır. Bir rakamın nasıl okunması gerektiğini açıklamak ve yanıltıcı olduğunda uyarmak için iyi bir konumdadırlar.

### Liderlik ve yönetişim

Liderler raporlananın doğruluğundan ve dürüstlüğünden sorumludur. İzlenebilirlik ve uzlaştırma istemeli, yasal rakamları bireysel hedeflere dönüştürmeye direnmeli, hataları dile getiren insanları korumalı ve gözetim organlarıyla ilişkiyi desteklemelidir. Yönetişim, yükümlülük kaydını ve düzeltme geçmişini gözden geçirmelidir.

### Müşteriler ve kullanıcılar

Halk ve müşteriler, hizmetleri hesap vermeye çağırmak için yayımlanan bilgiye dayanır. Bulabilecekleri, okuyabilecekleri ve yeniden kullanabilecekleri, erişilebilir biçimlerde, ne anlama geldiğine dair net açıklamalarla verilere ihtiyaçları vardır. Kurallar gerektirdiğinde, kendilerini etkileyen bir olay konusunda hızlı bildirimi de hak ederler.

## Uygulamada: çevik bir ITIL örneği

Ulusal bir kurum, yılda birkaç milyon kişinin kullandığı çevrimiçi ruhsatlandırma hizmetleri sunuyor. Bir bakanlığa aylık rapor vermesi, yıllık performans verilerini yayımlaması ve düzenleyicisine büyük hizmet olaylarını sabit bir süre içinde bildirmesi gerekiyor. Aşağıdaki rakamlar açıklayıcıdır.

İç inceleme, kurumun farklı türde 31 rapor borçlu olduğunu ve yalnızca 22'sinin adı belli bir sahip ve bir tanımla yükümlülük kaydında bulunduğunu, yani yüzde 71 kapsam olduğunu ortaya koyuyor. Aylık rakamlar, çoğunlukla üç sistemden bir tabloya veri çekilerek yaklaşık 60 saatte elle derleniyor. İzlenebilirlik zayıf: ana rakam olan kullanılabilirlik için kimse geçen yılın sayısını yeniden üretemiyor. Bakanlığın kullanılabilirlik tanımı planlı bakımı dışlıyor, kurumun kendi çalışma görünümü ise onu sayıyor; bu, kullanıcıların ve bakanlığın neden farklı resimler gördüğünü açıklıyor. Kurum her ay ilk yanıt süresi hedefini tutturdu ve hizmet masası bunu yakalamak için talepleri otomatik olarak onaylamaya başladı, oysa çözüm süresi arttı. Yayımlanan iki rapor, ekran okuyucuyla kontrol edildiğinde erişilebilirlik testinden kaldı.

Kurumun hizmet performansı başkanı, bakanlık ile teslimat ve operasyon takımlarıyla değişiklikler üzerinde anlaşıyor. Yükümlülük kaydı sahipleri, tanımları ve tarihleriyle eksiksiz hale geliyor. Aylık rakamlar, olay ve izleme sistemlerinin betiklenmiş sorgularından, belgelenmiş bir dönüşüm ve gözden geçirilmiş bir şablonla geliyor; bu, emeği yaklaşık 8 saate indiriyor. Bir uzlaştırma notu, yasal ve iç kullanılabilirlik tanımlarını ortaya koyuyor ve her iki rakam da raporda gösteriliyor. İlk yanıt hedefi, çalışma görünümünde çözüm süresi ve tekrarlayan başvurularla eşleniyor ve bakanlık eşlikçi ölçümleri görmeyi kabul ediyor. Kurum ayrıca bir önceki çeyreğin kullanılabilirlik rakamını düzeltiyor, nedenini açıklıyor ve düzeltmeyi yayımlıyor. Yayımlanan raporlar erişilebilir bir şablonda üretiliyor ve yayın kontrol listesine bir ekran okuyucu testi ekleniyor.

Bir yıl sonra yükümlülük kapsamı yüzde 100, raporlar zamanında, düzeltme oranı düşük ve her düzeltme açıklanmış, izlenebilirlik tüm ana rakamları kapsıyor ve raporlama emeği kabaca yüzde 85 azalmış. Bakanlık, kurumun liderlerinin sorumlu olduğu yüzde 99,95 kullanılabilirlik için yeni bir hedef istiyor. Hizmet performansı başkanı yasal rakam ile kullanıcıların deneyimlediği rakam arasındaki farkı açıklıyor ve eşlikçi ölçümler ve bir inceleme tarihi olan bir hedef öneriyor. Karar kaydediliyor ve bakanlık, bir sonraki raporlama yılından önce tanımın ortak incelenmesini kabul ediyor.

## Sektör mercekleri

**Girişim.** Raporlama görevleri ilk kurumsal müşteriyle ya da bir düzenleyiciyle gelebilir. Kısa bir yükümlülük listesiyle başlayın, raporları kendi sistemlerinizden üretin ve ayrı bir raporlama süreci kurmaktan kaçının. Sözleşmelerde hizmet düzeyi vaat ederken dikkatli olun.

**Küçük işletme.** Yükümlülükler çoğu zaman sözleşmeseldir ya da tek bir düzenleyiciye bağlıdır. Bir takvim tutun, şablonlar kullanın ve sayıların nasıl üretildiğini belgeleyin. Küçük, doğru bir rapor, büyük ve aceleyle hazırlanmış olandan iyidir.

**Büyük kuruluş.** Bölgeler ve rejimler arasındaki çok sayıda yükümlülük, merkezi bir kayıt, ortak tanımlar ve paylaşılan çıkarım araçları gerektirir. Aynı takımlara yinelenen taleplere dikkat edin. Olay ve hizmet verileri için tek bir doğruluk kaynağı kullanın ve her rejim için görünümler oluşturun.

**Kamu sektörü.** Bu, konunun ana yurdudur. Mevzuata, bakanlık taleplerine, denetime, bilgi edinme taleplerine ve kamusal incelemeye hazırlanın. Yasanın izin verdiği yerde veriyi açıkça yayımlayın, erişilebilirlik görevlerini yerine getirin, kayıtları gereken süre boyunca saklayın ve kararları belgeleyin. Yasal rakamları bireysel performans hedeflerine dönüştürmeye direnin ve hedeflerin vatandaşlar ve personel üzerindeki etkilerini göz önünde bulundurun.

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler, yükümlülük kaydını kurma ve sürdürme emeği, otomatik çıkarımın ve şablonların mühendisliği, inceleme zamanı ve erişilebilirlik testidir. Elle derlemeyle karşılaştırıldığında otomasyon, emeği tekrarlanan işten tek seferlik bir kuruluma ve hafif bakıma kaydırır.

Getiriler, daha az hata ve düzeltme, derlemeye harcanan daha az personel zamanı, gözetim taleplerine daha hızlı yanıt ve düzenleyiciler ile halkla daha fazla güvendir. Gerekçeyi kendi verinizden kurun: önceki ve sonraki rapor başına saatler, düzeltmelerin sayısı ve etkisi, bir gözetim sorusunu yanıtlama süresi ve kaçınılan herhangi bir cezanın ya da kritik denetim bulgusunun maliyeti. Kaynağını ve yöntemini izleyemiyorsanız uyum yükü tahminlerini alıntılamaktan kaçının. Gözetim organlarıyla süren ilişkinin maliyetini dahil edin ve bunu sürprizlerin maliyetiyle karşılaştırın (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Yalnızca yasal rakama göre yönetmek.** İşi çarpıtır. Eşlikçi ölçümlerle bir çalışma görünümü tutun.
- **Uzlaştırılmamış iki takım sayı.** Güven çöker. Farkları belgeleyin ve gösterin.
- **Sistem olarak elle yapılmış tablolar.** Bozulurlar ve bireylere bağımlıdırlar. Kayıt sistemlerinden otomatikleştirin.
- **Tarihe yetişmek için eksik rapor sunmak.** Bir başarısızlığı diğeriyle takas eder. Uzatma konusunda anlaşın ya da açık çekincelerle sunun.
- **Sessiz düzeltmeler.** Güveni zedeler. Açıkça düzeltin ve açıklayın.
- **Yasal rakamlardan bireysel hedefler türetmek.** Manipülasyonu ödüllendirir ve dürüst personeli cezalandırır. Rakamları hizmet düzeyinde tutun.
- **Okunamayan yayınlar.** Biçimde uyum, amacı boşa çıkarır. Kullanılabilir, erişilebilir veri yayımlayın.
- **Yayımlamada gizliliği göz ardı etmek.** Küçük sayılar insanları tanımlayabilir. Toplulaştırın ve ifşayı gözden geçirin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Yükümlülükler ve tanımlar | Birkaç kişi tarafından bilinir | Kısmi liste | Sahipleri, tanımları ve tarihleriyle kayıt; yasal ve iç tanımlar uzlaştırılmış | Kayıt, yasadaki değişikliklere karşı gözden geçirilir; uzlaştırma sürdürülür | Tanımlar gözetim organlarıyla birlikte geliştirilir; kurumlar arasında paylaşılır |
| Üretim ve kalite | Elle derleme | Şablonlar, bazı betikler | Köken ve bağımsız incelemeyle kayıt sistemlerinden otomatik üretim | Düzeltmeler analiz edilir; emek ve zamanındalık yönetilir | Raporlar sürekli üretilir; gözetim organları veriye doğrudan erişir |
| Kullanım ve yayımlama | Talebi karşılamak için rapor | Talep üzerine yayımlanır | Çalışma görünümü raporlama görünümünden ayrı; erişilebilir, yeniden kullanılabilir yayımlama | Hedefli eşlikçi ölçümler; yayınların kullanıcı testi | Tasarıma halkın katıldığı açık, bağlantılı veri |

## Kontrol listesi

- [ ] Bir kayıt, her raporlama yükümlülüğünü sahibi, tanımı, kaynağı, son tarihi ve alıcı kurumuyla listeliyor.
- [ ] Gereken alanlar ve olaylar hizmetlere baştan yerleştirilmiş.
- [ ] Raporlar, sürümlenmiş sorgular ve şablonlarla kayıt sistemlerinden üretiliyor.
- [ ] Her raporlanan rakamın belgelenmiş bir kökeni ve adı belli bir kontrol edeni var.
- [ ] Bağımsız bir okuyucu raporları sunumdan önce gözden geçiriyor.
- [ ] Yasal ve iç tanımlar uzlaştırılmış ve her ikisi de gösteriliyor.
- [ ] Düzeltmeler kaydediliyor, açıklanıyor ve hızla yayımlanıyor.
- [ ] Yasal hedeflerin eşlikçi ölçümleri var ve raporda bağlamları veriliyor.
- [ ] Yayımlanan raporlar ve veri kümeleri geçerli erişilebilirlik standardını ve gizlilik incelemesini karşılıyor.
- [ ] Her büyük gözetim organıyla ihtiyaçları hakkında bir konuşma takvimde.

## Yapay zekâ istemleri

**Bir yükümlülük kaydı oluşturun.**

```text
Borçlu olduğumuza inandığımız raporların, bildirimlerin ve yayınların listesi
şöyle: [kaynaklarıyla birlikte sade bir dille yapıştırın]. Bunları gereklilik,
kaynak, tanım, veri kaynağı, son tarih, alıcı kurum ve sahip rolü alanlarına
sahip bir kayıt halinde yapılandırın. Eksik bilgileri ve takımlar arasında
yinelenmiş görünen yükümlülükleri işaretleyin. Hukuki sonuç vermeyin.
Varsayımlarınızı ve hukuk ile uyum için sorularınızı listeleyin.
```

**İki tanımı uzlaştırın.**

```text
[ölçüm] için yasal tanım şöyle: [metin]. İç tanımımız şöyle: [metin]. Veri
alanlarımız şunlar: [listeleyin]. Farkları açıklayın, her birinin sayıyı nasıl
etkilediğini betimleyin, ikisinin bir raporda nasıl gösterileceğini önerin ve
okuyuculara farkı açıklayan kısa bir not önerin. Verilmeyen olguları
varsaymayın. Varsayımlarınızı listeleyin.
```

**Rapor otomasyonunu planlayın.**

```text
[rapor] raporunu aylık olarak şu elle yapılan adımlar ve kaynaklarla
üretiyoruz: [saatlerle listeleyin]. Bunu kayıt sistemlerinden otomatikleştirmek
için, belgelenmiş sorgular, bir dönüşüm adımı, köken notları, inceleme ve
geçmiş raporların yeniden üretilebilirliğini içeren bir plan önerin. Nelerin
elle kalacağını ve nedenini önerin. Belirli araçları varsaymayın.
Varsayımlarınızı ve riskleri listeleyin.
```

**Yayımlanan bir raporu kullanılabilirlik açısından inceleyin.**

```text
Yayımlamayı planladığımız bir raporun metin yapısı şöyle: [başlıkları ve örnek
tabloları, hassas içerik olmadan yapıştırın]. Bunu sade dil, tanımlar,
rakamlar için bağlam, tabloların ve grafiklerin erişilebilirliği ve küçük
sayılardan doğan gizlilik riskleri açısından inceleyin. İyileştirmeler önerin.
Bana yardımcı teknolojiyle test etmeyi ve ifşa kurallarını uzmanlarla
denetlemeyi hatırlatın. Varsayımlarınızı listeleyin.
```

## Yapay zekâ becerileri

- [Çevik ITIL Metrikleri becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): yasal veya düzenlemeye tabi bir raporlama metriği için eşlenen koruma önlemini bulmak üzere kullanın.
- [Çevik ITIL Metrikleri bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir raporlama metriği girdisinin tanımını, uzlaştırmasını, manipülasyon yöntemini ve koruma önlemini gösterdiğini denetlemek için kullanın.

## Temel çıkarımlar

- Raporlama yükümlülüklerini, sahipleri, tanımları ve son tarihleriyle listelenmiş tasarım girdileri olarak ele alın.
- Raporları, köken ve bağımsız incelemeyle kayıt sistemlerinden üretin.
- Açık sözlü bir çalışma görünümünü raporlama görünümünden ayrı tutun ve tanımları açıkça uzlaştırın.
- Yasal hedefleri eşlikçi ölçümlerle eşleyin ve onları asla bireysel hedeflere dönüştürmeyin.
- Hataları açıkça ve hızla düzeltin.
- Halkın bulabileceği, okuyabileceği ve yeniden kullanabileceği bilgiyi, gizlilik korunarak yayımlayın.

## Kaynaklar ve ileri okuma

1. Seddon, J., *Systems Thinking in the Public Sector*, Triarchy Press, 2008.
2. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
3. World Wide Web Consortium, *Web Content Accessibility Guidelines (WCAG) 2.2*, 2023, https://www.w3.org/TR/WCAG22/.
4. European Parliament and Council, *Directive (EU) 2016/2102 on the accessibility of the websites and mobile applications of public sector bodies*, 2016.
5. Government Digital Service, *Service Standard*, United Kingdom, https://www.gov.uk/service-manual/service-standard.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Public sector](https://en.wikipedia.org/wiki/Public_sector).
9. Wikipedia, [Accountability](https://en.wikipedia.org/wiki/Accountability).
10. Wikipedia, [Freedom of information laws by country](https://en.wikipedia.org/wiki/Freedom_of_information_laws_by_country).
11. Wikipedia, [Open government](https://en.wikipedia.org/wiki/Open_government).
12. Wikipedia, [Open data](https://en.wikipedia.org/wiki/Open_data).
13. Wikipedia, [Public procurement](https://en.wikipedia.org/wiki/Public_procurement).
14. Wikipedia, [Records management](https://en.wikipedia.org/wiki/Records_management).
15. Wikipedia, [Value for money](https://en.wikipedia.org/wiki/Value_for_money).
16. Wikipedia, [Performance audit](https://en.wikipedia.org/wiki/Performance_audit).
17. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
