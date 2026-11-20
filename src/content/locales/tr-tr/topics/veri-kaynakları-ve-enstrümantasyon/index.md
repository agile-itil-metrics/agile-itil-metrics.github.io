# Veri kaynakları ve enstrümantasyon

**Bir metrik, altındaki olaylar kadar güvenilirdir; bu yüzden her sayı için kayıt sistemini adlandırın, olayları gerçekleştikleri anda otomatik olarak yakalayın ve veri hattını grafiği test ettiğiniz kadar özenle test edin.**

## Genel bakış ve motivasyon

Çoğu metrik programı çabasını panolara harcar ve onları besleyen borulara neredeyse hiç harcamaz. Bu tersine bir yaklaşımdır. Tutarsız zaman damgaları, kimsenin güncellemediği bir durum alanı ya da geçen ay sessizce duran bir entegrasyon üzerine kurulmuş parlak bir grafik, yanlış olduğu halde yetkili görünür. Bu konu, kitabın geri kalanı için gösterişsiz temeli ele alır: hizmet ve teslimat verisinin nereden geldiğini, her kaynağın ne kadar güvenilir olduğunu ve hangi veri kalitesi başarısızlıklarının, kimse fark etmeden bir metriği geçersiz kıldığını.

Kaynaklar birkaç aileye ayrılır. Bir [BT hizmet yönetimi (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) aracı, [ITIL](https://en.wikipedia.org/wiki/ITIL)'in hizmet operasyonunun çekirdek kayıtları olarak ele aldığı olayları, talepleri, sorunları ve değişiklikleri kaydeder. Bir [iş takip sistemi](https://en.wikipedia.org/wiki/Issue_tracking_system) çevik ekipler için birikim listesini ve iş öğelerinin hareketini kaydeder. [Sürüm kontrolü](https://en.wikipedia.org/wiki/Version_control) commit'leri, dalları ve birleştirmeleri kaydeder. Bir [sürekli entegrasyon ve sürekli teslimat (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) hattı derlemeleri, test sonuçlarını ve dağıtımları kaydeder. İzleme ve [gözlemlenebilirlik](https://en.wikipedia.org/wiki/Observability_(software)) platformları telemetri yayar: çalışan sistemlerden metrikler, günlükler ve izler. Bir [yapılandırma yönetim veritabanı (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database), şeylerin ilişkili olduğu hizmetleri ve bileşenleri kaydeder. Anketler, memnuniyet ve efor gibi hiçbir sistemin gözlemleyemeyeceği şeyleri kaydeder.

Bir hat tarafından yazılan bir dağıtım olayı nesneldir ve sahtesi zordur, işten saatler sonra değiştirilen bir bildirim durumu bir hatırlamadır ve bir anket yanıtı bir algıdır. Bir sayının arkasında hangi tür kaydın durduğunu bilmek, önce hangi başarısızlığı arayacağınızı söyler.

Çevik ve ITIL görüşleri aynı veride buluşur: ikisi de zaman damgalı durum makineleridir; bu yüzden her durum değişikliğini güvenilir bir zamanla bir olay olarak kaydedin ve metrikleri olaylardan türetin.

Bu konuda üç terim tekrar eder. **Kayıt sistemi (system of record)**, bir olgu için yetkili olan tek kaynaktır; örneğin “bir dağıtım gerçekleşti” için hat. **Enstrümantasyon**, bir metriğin kimse elle girmeden hesaplanabilmesi için olayların kod, yapılandırma ya da araç entegrasyonuyla bilinçli olarak yakalanmasıdır. **Durum modeli**, bir iş öğesinin ya da kaydın içinde bulunabileceği durumlar kümesi ve bunlar arasındaki izin verilen geçişlerdir. Durum modeli, hangi saatlerin hesaplanabileceğini belirler.

Kurumsal ve kamu sektörü ölçeğinde sorun katlanır. Veri bağlayıcılardan, [çıkar, dönüştür, yükle (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) işlerinden ve raporlama katmanlarından geçer ve her sıçrama anlamın kayması için bir fırsattır. Kaynakta bir şey ifade eden bir alan, ambarda ince biçimde farklı bir şey ifade edebilir ve sayı yine de makul görünür. Çare, olay ile pano arasındaki mesafeyi kısaltmak ve veri hattını bir takvimle denetlemektir.

## Temel ilkeler

- **Özetleri değil, olayları yakalayın.** Ham durum değişikliklerini zaman damgalarıyla saklayın ve metrikleri onlardan hesaplayın; böylece bir tanım geçmiş kaybedilmeden değişebilir.
- **Gözlemi öz bildirime tercih edin.** Bir sistem olayı görebiliyorsa onu kullanın; insanların bildirimlerini yalnızca insanların söyleyebileceği şeylere ayırın.
- **Olgu başına bir kayıt sistemi adlandırın.** Yinelenen kaynaklar çelişir ve çelişki her ikisine duyulan güveni aşındırır.
- **Durum modelini metrikten önce tasarlayın.** Var olmayan ya da farklı ekiplerde farklı anlamlara gelen durumlardan bir saat hesaplanamaz.
- **Veri hattını bir ürün olarak ele alın.** Sahipleri, testleri, izlemesi ve bir değişiklik günlüğü vardır, çünkü veri kalitesi sessizce çürür.
- **Köken göstergesini gösterin.** Bir panodaki her sayı bir iki tıklamayla kaynak kayıtlarına götürmelidir.
- **Yalnızca kullanacağınızı toplayın ve koruyun.** Her alan bir maliyettir ve insanlarla ilgiliyse bir gizlilik yükümlülüğüdür.

## Metrik tanımları

Aşağıdaki metrikler veri arzının kendi sağlığını ölçer. Enstrümanlar için enstrüman panelidir.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Kaynak kapsamı | Olayları metrik deposuna otomatik ulaşan kapsam içi hizmetlerin ve ekiplerin payı | otomatik besleme olan hizmetler ya da ekipler / kapsamdaki hizmetler ya da ekipler; “kapsam içi” olanlar metrik kaydında listelenir | yüzde | Metrik kaydı ve hat yapılandırması | Ölçüm ve raporlama; hizmet yapılandırma yönetimi | Araçlara dair ekip çalışma anlaşması | Üç aylık |
| Zaman damgası bütünlüğü | Kapatılmış iş öğeleri içinde, metriğin saatleri için gereken her zaman damgasını taşıyanların payı | gereken tüm durum değişikliği zaman damgalarına sahip kapatılmış öğeler / dönemde kapatılan öğeler; hâlâ açık olan öğeler hariç | yüzde | ITSM aracı ya da iş takip sistemi geçmişi | Olay yönetimi; hizmet talebi yönetimi | Pano ya da iş akışı geçmişi | Aylık |
| Geriye tarihleme oranı | Olay zamanı ile girildiği zaman arasındaki boşlukla ölçülen, olaydan sonra kaydedilen durum değişikliklerinin payı | olay zamanından 24 saatten fazla sonra girilen durum değişiklikleri / dönemdeki durum değişiklikleri; saat olayda başlar, girişte durur | yüzde | İzleyicinin denetim izi ya da hat olay zamanı ile giriş zamanı | Değişiklik yetkilendirme; olay yönetimi | Bitti tanımı | Aylık |
| Veri tazeliği | Bir panodaki en yeni verinin görüntülendiği anda ne kadar eski olduğu | görüntüleme zamanı eksi yüklenen en yeni olay zamanı; medyanı ve 95. yüzdeliği raporlayın | saat | Hat çalıştırma günlüğü ve pano yükleme günlüğü | Ölçüm ve raporlama | Paydaş gözden geçirmesi hazırlığı | Haftalık |
| Uzlaştırma varyansı | Aynı sayım için iki kaynak arasındaki uyumsuzluk | sabit bir dönem ve kapsam için iki sayım arasındaki mutlak fark / kayıt kaynağı sayımı | yüzde | Kayıt kaynağı ve raporlama katmanı | Hizmet düzeyi yönetimi; finansal yönetim | Sürüm raporu denetimleri | Aylık |
| Durum modeli kayması | Kullanımdaki farklı durum adlarının ya da geçişlerinin sayısının belgelenmiş modelle karşılaştırması | dönemde gözlenen belgelenmemiş durumlar ya da geçişler (sayı); belgelenmiş olanlar hariç | sayı | İzleyici iş akışı yapılandırması ve olay geçmişi | Sürekli iyileştirme | İş akışına dair çalışma anlaşmaları | Üç aylık |
| Anket yanıt oranı | Davet edilen insanlar içinde bir anketi tamamlayanların payı | tamamlanan yanıtlar / ulaştırılan davetler; geri dönen davetler hariç | yüzde | Anket aracı | Hizmet düzeyi yönetimi; müşteri deneyimi | Paydaş gözden geçirmesi ve iyileştirme geri bildirimi | Anket dalgası başına |

Zaman damgası bütünlüğü yalnızca kapatılmış öğeleri sayar; böylece eski açık öğelerin bir birikimi bir boşluğu gizleyemez. Geriye tarihleme oranı örnek olarak 24 saatlik bir eşik kullanır; bir ekip işine uyan bir eşik seçer ve bunu yazar.

## Öneriler

### Her metriği kaynağına eşleyin

**1. Bir pano kurmadan önce bir kaynak haritası çıkarın.** Her metrik için kayıt sistemini, saati başlatan olayı, saati durduran olayı, kaynağın sahibini ve bilinen başarısızlık biçimini kaydedin. Sistemi adlandıramıyorsanız, sayının nereden geldiğini henüz bilmiyorsunuz demektir. Haritayı metrik kaydında tutun (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”).

**2. Olgu başına bir kayıt sistemi seçin.** Bir dağıtım hat tarafından, bir olay ITSM aracı tarafından, bir kod değişikliği sürüm kontrolü tarafından, bir hizmet ilişkisi CMDB tarafından kaydedilir. İki aracın aynı olguyu tuttuğu yerde, hangisinin geçerli olduğuna karar verin ve diğerinin ondan okumasını sağlayın. Uzlaştırma o zaman bir tartışma değil, bir denetim olur.

### Olayları gerçekleştikleri anda yakalayın

**3. Raporu değil, olayı enstrümante edin.** Dağıtımı hat, birleştirmeyi sürüm kontrol ana makinesi ve uyarıyı izleme sistemi kaydetsin. Birinin bir alanı güncellemeyi hatırlamasına bağlı veri, olaydan uzaklıkla ve iş yüküyle bozulur. Otomatik bir olay varsa, aynı olgu için insanın girdiği bir vekile tercih edin (bkz. Konu 2.8 “DORA metrikleri”).

**4. Durum değişikliklerini işin bir yan etkisi yapın.** Bir dal birleştirmesi iş öğesini “incelemede”ye ya da bir dağıtım “yayımlandı”ya taşıyorsa, kimsenin hatırlaması gerekmez. Sürüm kontrolü, hat ve izleyici arasındaki entegrasyonlar geriye tarihlemenin çoğunu ortadan kaldırır.

**5. Ham olayları tutun ve değişmez tutun.** Her durum değişikliğini olay zamanı, giriş zamanı ve aktör türüyle (kişi ya da otomasyon) saklayın. Düzeltmeleri üzerine yazma olarak değil yeni olaylar olarak yazın; böylece düzeltmenin geçmişi de veri olur.

### Zamanı doğru kullanın

**6. Zamanı tek bir standartta kaydedin.** Zaman damgalarını [Eş Güdümlü Evrensel Zaman (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) cinsinden, ISO 8601 ve RFC 3339'un tanımladığı gibi belirsizliği olmayan bir biçimde saklayın ve yalnızca gösterim için yerel saate çevirin. Karışık saat dilimleri ve yaz saati değişiklikleri sessizce negatif süreler ve bir saat kaymış saatler üretir.

**7. Saat kurallarını verinin yaşadığı yere yazın.** Her zaman ölçüsü için hangi olayın saati başlattığını, hangisinin durdurduğunu ve hangi durumların duraklattığını belirtin. Bir duraklatma durumu bir tasarım kararıdır. Her duraklatma durumunun ne sıklıkla kullanıldığını raporlayın, çünkü saat, hizmet verisinin en sık biçimlendirildiği yerdir (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).

### Durum modelini tasarlayın

**8. Durum modelini küçük, ortak ve belgelenmiş tutun.** Her ek durum, her ekibin farklı bir yorumunu davet eder. Her durumun ne anlama geldiğini tek bir cümleyle, işi içine kimin taşıyabileceğini ve hangi geçişlere izin verildiğini tanımlayın. İş öğesi yaşı ve akış ölçüleri bu modele bağlıdır (bkz. Konu 2.1 “Akış ölçümleri”) ve ekipler arası karşılaştırma, ekiplerin aynı durumlar için aynı sözcükleri kullanmasına bağlıdır. Veri sizi şaşırttığında, önce iş akışından şüphelenin: bir iş akışı ya da alandaki her değişikliği tarihi ve nedeniyle günlüğe alın ve belgelenmemiş durumları bir kayma sinyali olarak sayın.

### Veri hattını dürüst tutun

**9. Veri hattını yazılım gibi test edin.** Satır sayılarını kaynakla karşılaştırın, gerekli alanların bulunduğunu denetleyin, yinelenenleri kontrol edin ve bir besleme durduğunda uyarı verin. İzleyicilerin verinin ne kadar eski olduğunu görebilmesi için her panoya bir tazelik göstergesi ekleyin. Geçen ayın sayılarını ekranda bırakan sessiz bir bağlayıcı başarısızlığı, bu alandaki en yaygın ve en zarar verici başarısızlıklardandır (bkz. Konu 11.1 “Hizmet metrikleri panosu tasarlamak”).

**10. Bir takvimle uzlaştırın ve elle örnek alın.** Raporlama katmanındaki bir sayımı sabit bir dönem için kaynakla karşılaştırın ve farkı araştırın. Sonra az sayıda ham kayıttan bir örnek okuyun. On beş dakikalık bir örnek, beklenmedik biçimde kullanılan bir durum gibi, otomatik denetimlerin bulamadığını çoğu zaman bulur.

### İnsanları ve anketleri dikkatle ele alın

**11. Anketleri yalnızca bir kişinin söyleyebileceği şeylere ayırın.** Memnuniyet, efor, güven ve iyi oluş sistem verisinden gözlemlenemez. Doğrudan sorun, anketleri kısa tutun, zamanlamayı değiştirin ve yanıt oranını ve kimin yanıtladığını raporlayın, çünkü yanıtlayan insanlar yanıtlamayanlardan farklıdır; bu bir [seçilim yanlılığı](https://en.wikipedia.org/wiki/Selection_bias) biçimidir. Açık yorumları tam olarak okuyun (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

**12. Kişisel verileri koruyun ve veriyi ekip düzeyinde tutun.** İşe dair olay verisi, commit yazarlığı, atanan alanları ve sohbet kayıtları yoluyla bireyleri tanımlayabilir. Metriğin ihtiyaç duyduğu düzeyde toplayın, ekiplere ve hizmetlere toplulaştırın ve yargı bölgenizin ve kurumunuzun gizlilik kurallarını uygulayın. Bireysel düzeydeki veri bir kez toplandığında sıralama için kullanılma eğilimindedir; bu da kaynağı bozar (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Kaynak kapsamı | Bir besleme bağlandıktan sonra neredeyse hiç olay taşımasa bile bir hizmeti kapsanmış saymak; zor hizmetleri kapsam dışında bırakmak | Kapsanan hizmet başına olay hacmini bilinen etkinliğiyle karşılaştırın; kapsam listesini hizmet kataloğuna karşı gözden geçirin |
| Zaman damgası bütünlüğü | Doğrulamayı karşılamak için gerekli zaman damgalarını kapanış zamanıyla doldurmak | Ardışık durumlar arasındaki boşlukların dağılımı; zamanların makul olup olmadığını görmek için kapatılmış öğelerden örnek alın |
| Geriye tarihleme oranı | Değişiklikleri eşiğin hemen içinde girmek; eşiği genişletmek; tüm değişiklikleri tek bir toplu güncellemeyle kaydetmek | Saate göre giriş zamanı örüntüsü; otomasyonla yapılan değişikliklerin elle yapılanlara payı; toplu düzenlemelerin denetimi |
| Veri tazeliği | En yeni olayın zamanı yerine son yenileme zamanını göstermek | Panoda gösterilen en yeni olay zamanı; bir besleme yeni olay teslim etmediğinde uyarı |
| Uzlaştırma varyansı | Uzlaşan dönemi ya da kapsamı seçmek; nedeni bulmadan raporlama katmanını kaynakla eşleşecek biçimde ayarlamak | Kapsamı ve dönemi önceden sabitleyin; bulunan her nedeni kaydedin ve nedenleri her çeyrek gözden geçirin |
| Durum modeli kayması | İşaretlenmemek için mevcut bir durumu yeni bir anlam için yeniden kullanmak; durumları günlüğe almadan eklemek | Her gözden geçirmede iş akışı yapılandırmasını kayıtla karşılaştırın; alışılmadık durumlardaki öğelerden bir örnek okuyun |
| Anket yanıt oranı | Yalnızca yanıt vermesi olası insanları davet etmek; memnun kullanıcılara hatırlatma göndermek; yanıtları yanlı kılan ödüller sunmak | Yanıtlayan karışımının kullanıcı nüfusuyla karşılaştırılması; yanıtların dalga başına dağılımı; açık yorumların gözden geçirmede okunması |

Sağlıklı bir okuma, sıkıcı sayılardan oluşan bir kümedir: kapsam yüksek, geriye tarihleme düşük ve azalıyor, tazelik belirtilen taahhüdü içinde ve uzlaştırma varyansı sıfır olmadığında bilinen bir neden vardır. Bir sayı hareket ettiğinde, işin mi yoksa enstrümanın mı değiştiğini birisi söyleyebilir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Otomatik olay yakalama | Nesnel, zamanında, bir kez kurulduğunda düşük efor | Yalnızca enstrümante edileni kapsar; araçlar değiştiğinde sessizce bozulur |
| Elle giriş ve durum güncellemeleri | Bağlamı ve muhakemeyi yakalar; entegrasyon olmadan çalışır | Geç, tutarsız ve manipülasyona açık |
| Tek bir merkezî metrik deposu | Bir tanım, test edip yönetmek için tek bir yer | Finansman ve sahiplik gerektirir; bir darboğaz haline gelebilir |
| Her ekip kendi verisini tutar | Yerel işe uyar; başlaması hızlı | Tanımlar ayrışır; toplulaştırmalar güvenilmez |
| Ham olaylar uzun süre tutulur | Tanımlar değişebilir ve geçmiş yeniden hesaplanabilir | Depolama ve gizlilik maliyeti; güvenceye alınacak daha fazla şey |

Gözlemlenebileni otomatikleştirin, gözlemlenemeyeni insanlara sorun ve ham kaydı tutun. Önce, akla gelebilecek her sayı için bir veri platformuna değil, ekibin gerçekten kullandığı iki ya da üç metriğin ardındaki kaynaklara yatırım yapın.

## Takımınızla tartışılacak sorular

**1. En önemli metriğimiz için kayıt sistemi hangisidir ve bunu nasıl biliyoruz?**
Gruptan sayıyı panodan ilk olaya kadar izlemesini isteyin. Bir kişinin ya da bir dönüşümün veriye dokunduğu her yeri not edin. Kolaylaştırıcı kimsenin açıklayamadığı adımları aramalıdır, çünkü ilk araştırma oradan başlamalıdır.

**2. Zaman damgalarımızdan hangileri bir sistem tarafından yazılıyor, hangileri bir kişi tarafından giriliyor?**
Kullanımdaki saatleri, örneğin yanıt süresi, çözüm süresi ve çevrim süresi, listeleyin. Her başlangıç ve duruşu otomatik ya da elle olarak işaretleyin. Elle yapılanlar için girişin genellikle olaydan ne kadar sonra yapıldığını sorun. Tartışma çoğu zaman en çok tartışılan metriğin en az güvenilir zaman damgasına dayandığını gösterir.

**3. Durumlarımız ne anlama geliyor ve tüm ekipler aynı şeyi mi kastediyor?**
İş akışını bir tahtaya koyun ve farklı ekiplerden insanlardan her durumu kendi sözleriyle açıklamalarını isteyin. Açıklamaları karşılaştırın. Saatin durakladığı durumları sayın ve onları kimin neden kullanabileceğini sorun. Belirsizliği ortadan kaldırmak için bir değişiklik üzerinde uzlaşın ve nedeniyle günlüğe alın.

**4. Bir besleme sessizce dursa bunu nasıl öğrenirdik?**
Panodaki verinin güncel olduğunu en son ne zaman birinin kontrol ettiğini sorun. Hangi uyarı ya da tazelik göstergesinin durmuş bir bağlayıcıyı bir gün içinde yakalayacağını tartışın. Kolaylaştırıcı, dikkatli olma yönünde genel bir niyet değil, adı konmuş bir sahip ve somut bir denetim için ısrar etmelidir.

**5. Hiç kullanmadığımız neyi topluyoruz ve iyi toplamadığımız neyi kullanıyoruz?**
Alan listesini ve metrik listesini yan yana alın. Hiçbir kararı beslemeyen alanları ve zayıf alanlara dayanan metrikleri işaretleyin. Bu çeyrek toplamayı bırakacağınız bir alana ve iyileştireceğiniz bir alana karar verin.

**6. Anketlerimizi kim yanıtlıyor, kim yanıtlamıyor?**
Yanıtlayanları kullanıcı ya da ekip üyesi nüfusuyla karşılaştırın. Yanıt oranlarına gruba ve günün ya da haftanın saatine göre bakın. Sessizliğin ne anlama gelebileceğini ve sessiz gruplara baskı yapmadan nasıl ulaşılacağını tartışın. Yanıt oranının her anket sonucunun yanında nasıl gösterileceği üzerinde uzlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri nesnel verinin çoğunu üretir: commit'ler, incelemeler, derlemeler ve dağıtımlar. Durum değişikliklerini işin bir yan etkisi yapan enstrümantasyondan yarar sağlarlar; böylece pano ekstra çaba olmadan dürüst kalır. İş akışını küçük tutmalı ve sürüm kontrolü etkinliğini bir efor ölçüsü olarak kullanmaya karşı dikkatli olmalıdırlar (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”).

### Hizmet ve operasyon takımları

Hizmet ekipleri, çoğu zaman bir olay sırasında, baskı altındaki insanlar tarafından oluşturulan kayıtlara bağlıdır. Saat kuralları, duraklatma durumları ve öncelik alanları kaymanın olduğu yerlerdir. Operasyon ekipleri, uyarı zamanı ve onay zamanı gibi anahtar zamanların yakalanmasını mümkün olduğunda otomatik yapmalı, duraklatma durumu kullanımını denetlemeli ve izleme verisini bildirim kaydından ayrı tutmalıdır; böylece her biri diğerini denetleyebilir (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”).

### Liderlik ve yönetişim

Liderler veri temellerine ne kadar yatırım yapılacağına karar verir ve verinin dürüst kalıp kalmadığını belirleyen teşvikleri koyar. Bir sayının neden hareket ettiğini sormadan önce nereden geldiğini sormalı, veri hattı sahipliğini süregelen iş olarak finanse etmeli ve her raporda bir tazelik tarihi ve bir tanım beklemelidirler. Yönetişim organları, bir kaynaktaki ya da bir tanımdaki belgelenmiş bir değişikliği başarısızlık değil, olağan bir olay olarak ele almalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar, deneyim hakkında en önemli veriyi, genellikle anketleri yanıtlayarak, etkileşimleri derecelendirerek ya da sorunları bildirerek sağlar. Neyin toplandığını, nedenini ve sonuç olarak neyin değişeceğini bilmeleri gerekir. Kısa anketler ve görünür takip, yanıt oranını sağlıklı tutar. Müşteriye dönük hizmet düzeyi raporları kaynaklarını ve tanımlarını belirtmelidir (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendecinin bir platform ekibi, üç ürün ekibi ve bir hizmet masası vardır. Bu örnekteki tüm sayılar örnekleyicidir.

Liderlik, ürün ekipleri çalışma biçimlerinde bir değişiklik bildirmezken, aylık rapordaki değişiklik teslim süresinin neden bir çeyrekte 9 günlük bir medyandan 3 güne düştüğünü sorar. Platform mühendisliği başkanı enstrümandan şüphelenir ve metriğin bir kaynak haritasını ister.

Harita, teslim süresinin ITSM aracında bir değişiklik kaydı oluşturulduğunda başladığını ve durumu “uygulandı” olarak ayarlandığında durduğunu gösterir. İki ürün ekibi kaydı iş hazır olduktan sonra oluşturmaya başlamıştır; bu yüzden saat geç başlamıştır. 40 kayıtlık bir örnek, 12'sinin dağıtımla aynı gün oluşturulduğunu bulur. Hattaki dağıtım olayı ile “uygulandı” durumunun girişi arasındaki boşlukla ölçülen geriye tarihleme oranı, ekibin belirlediği 24 saatlik eşiğin üzerinde yüzde 31'dir.

Ekip üç değişiklik yapar. Birincisi, saatin başlangıcı sürüm kontrolünden alınan, değişikliğe bağlı ilk commit'e ve durması hat tarafından yazılan dağıtım olayına taşınır. İkincisi, ITSM aracı durumu hattan alır; böylece “uygulandı” artık elle girilmez. Üçüncüsü, pano bir tazelik göstergesi ve hat ile ITSM aracı arasındaki değişiklik sayılarının bir uzlaştırma denetimini kazanır.

Yeni tanım altında medyan teslim süresi 7 gün ve 95. yüzdelik 21 gündür ve geriye tarihleme oranı yüzde 4'e düşer. Liderlik önce 7 günü daha kötü bir sonuç olarak okur. Platform başkanı eski sayının geç kayıt oluşturmanın bir yapaylığı olduğunu açıklar. Karar günlüğüne yazılan karar, önceki iki çeyreği ham olaylardan yeniden ifade etmek ve tanım değişikliğini grafik üzerinde işaretlemektir. Ekibin yakaladığı manipülasyon riski ince bir risktir: kimse bir sayıyı tahrif etmedi, ama geç kayıt oluşturma gurur okşayıcı bir rakam üretti. Uzlaştırma varyansı şimdi koruyucu önlem işlevi görür ve ham kayıtlardan örnek her çeyrek gözden geçirilir.

## Sektör mercekleri

**Girişim (startup).** Veri az, güven yüksek; bu yardımcı olur. Ek çaba gerektirmediği için ana kaynak olarak hattı ve sürüm kontrolünü kullanın ve durum modelini bir avuç durumda tutun. Her tanımı ve kaynağını tek bir sayfaya yazın ve ekip iki katına çıktığında yeniden ele alın.

**Küçük işletme.** Çoğu zaman bir kişi, barındırılan bir hizmet masasında BT'yi yönetir. Aracın raporlarını kullanın, tedarikçiden tanımlarını yazılı olarak isteyin ve kilitlenmeyi önlemek için ham veriyi düzenli olarak dışa aktarın.

**Kurumsal.** Çok sayıda araç, çok sayıda ekip ve entegrasyon katmanları, tanım kayması açısından en büyük riski yaratır. Ortak bir olay modeline, adı konmuş sahipleri olan merkezî bir metrik deposuna ve otomatik uzlaştırma ile tazelik denetimlerine yatırım yapın. Kurum genelinde küçük bir durum sözlüğü üzerinde uzlaşın ve ekiplerin yerel durumları yalnızca ona belirtilmiş bir eşlemeyle eklemesine izin verin.

**Kamu sektörü ve hükümet.** Kayıtlar saklama, denetim, erişim ve gizlilik yasasına tabi olabilir ve tedarik araçları ve veri biçimlerini kilitleyebilir. Bunları tasarım girdisi olarak ele alın: bir denetim izi tutun, olaydan rapora kadar soy ağacını belgeleyin ve sözleşmelerde veri dışa aktarma haklarını müzakere edin. Raporlama yükümlülükleri belgelenmiş tanımları vazgeçilmez kılar (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Bu konunun maliyeti üç parçalıdır. Birincisi inşa eforudur: entegrasyonlar, bir metrik deposu ve bir durum modeli temizliği. İkincisi çalıştırma eforudur: veri hattı için bir sahip, beslemelerin izlenmesi ve üç aylık bir uzlaştırma ve örnekleme rutini. Üçüncüsü, tuttuğunuz veri için gizlilik ve güvenlik denetimlerinin maliyetidir.

Getiri, göründükleri anlama gelen sayılara dayalı kararlardan gelir. Zayıf veri yanlış yatırımlara, kimin rakamının doğru olduğu üzerine tartışmalara ve güveni zedeleyen yeniden ifade edilmiş sonuçlara yol açar. Faydayı kendiniz ölçebileceğiniz örüntülerle anlatın: aylık raporu üretmek için harcanan süre önce ve sonra, çeyrek başına uzlaştırma anlaşmazlıklarının sayısı ve zaman içinde geriye tarihleme oranı ile zaman damgası bütünlüğü. Toplam sahip olma maliyetine insanlar egemendir; bu yüzden veri hattı sahibinin saatlerini sayın.

## Anti-desenler ve tuzaklar

- **Kaynak haritasından önce pano kurmak.** Grafik, anlamı bilinmezken bitmiş görünür. Önce kaynağı, saatleri ve sahibi eşleyin.
- **Zaman ölçüleri için elle durum güncellemelerine güvenmek.** Geç giriş saatleri kurgu haline getirir. Geçişleri, var oldukları her yerde hat ve sürüm kontrolü olaylarından otomatikleştirin.
- **Bir olgu için birkaç kayıt sistemi.** Anlaşmazlıklar izler. Birini seçin ve diğerlerinin ondan okumasını sağlayın.
- **Sessiz tanım değişiklikleri.** Eğilim çizgisi anlamsızlaşır. Her değişikliği nedeniyle günlüğe alın ve grafikte işaretleyin.
- **Eksik verinin ortalamaları.** Eksik zaman damgaları rastlantısal değildir, çünkü atlanan öğeler çoğu zaman zahmetli olanlardır. Zaman damgası bütünlüğünü sonucun yanında raporlayın.
- **Yararlı olabilir diye her şeyi toplamak.** Hiçbir karara hizmet etmeden maliyet ve gizlilik riski artar. Adı konmuş bir sorunun ihtiyaç duyduğunu toplayın.
- **Tazelik göstergesi yok.** Bayat bir pano güncel olanla aynı görünür. Her görünümde en yeni olayın yaşını gösterin.
- **Amaçsız bireysel düzeydeki veri.** Sıralamaya özendirir ve kaynağa zarar verir. Ekip ve hizmet düzeyinde toplulaştırın ve erişimi kısıtlayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Kaynaklar ve yakalama | Dışa aktarımlardan elle derlenen sayılar | Bazı araçlar bir raporu otomatik besler; diğerleri beslemez | Her metriğin adı konmuş tek bir kayıt sistemi vardır ve bir olay olan yerde otomatik yakalama | Kapsam ve bütünlük ölçülür ve eğilim olarak izlenir | Olaylar, ekipler ve tedarikçiler arasında üzerinde anlaşılan arayüzlerle, dışa aktarma sözleşmeleriyle paylaşılır |
| Zaman ve durum modelleri | Her kişi zamanı farklı kaydeder ve okur | Bazı ekipler iş akışlarını belgeler | Tek bir zaman standardı ve yazılı saat kurallarıyla ortak bir durum sözlüğü | Kayma ve geriye tarihleme izlenir ve değişiklikler nedenleriyle günlüğe alınır | Modeller, kararları bilgilendirmeyi bıraktıklarında tedarikçiler ve müşterilerle birlikte revize edilir |
| Veri hattı kalitesi | Başarısızlıklar biri şikâyet ettiğinde bulunur | Ara sıra elle denetimler | Her panoda satır sayıları, yinelenen denetimleri ve bir tazelik göstergesi | Uzlaştırma planlanır ve nedenler gözden geçirilir; veri hattının bir sahibi vardır | Veri hattı sağlığı bir hizmet gibi raporlanır, iyileştirme finanse edilir |
| Anket ve gizlilik uygulaması | Plansız anketler; gizlilik incelemesi yok | Bazı ekiplerde standart sorular | Yanıt oranı gösterilen kısa düzenli anketler; veri ekip düzeyinde tutulur | Yanıtlayan karışımı gözden geçirilir ve üzerinde harekete geçilir | Anket sonuçları ve gizlilik uygulaması kullanıcılarla açıkça paylaşılır |

## Kontrol listesi

- [ ] Her raporlanan metriğin adı konmuş bir kayıt sistemi ve adı konmuş bir kaynak sahibi vardır.
- [ ] Kaynak haritası metrik kaydında saklanır.
- [ ] Her zaman ölçüsü, saatinin nerede başlayıp durduğunu ve duraklatıldığını belirtir.
- [ ] Zaman damgaları UTC'de, belirsizliği olmayan bir biçimde saklanır ve sunucu saatleri eşitlenmiştir.
- [ ] Durum değişiklikleri, bir olay olan her yerde otomasyonla üretilir.
- [ ] Ham olaylar olay zamanı ve giriş zamanıyla tutulur ve düzeltmeler yeni olaylardır.
- [ ] Durum modeli belgelenmiştir ve her değişiklik nedeniyle günlüğe alınır.
- [ ] Her pano en yeni verisinin yaşını gösterir.
- [ ] Sayımlar bir takvimle kaynakla uzlaştırılır ve nedenler kaydedilir.
- [ ] Her çeyrek ham kayıtlardan bir örnek okunur.
- [ ] Anket yanıt oranı ve yanıtlayan karışımı her anket sonucuyla birlikte gösterilir.
- [ ] Kişisel veri en aza indirilir ve ekip ve hizmet düzeyinde toplulaştırılır.

## Yapay zekâ istemleri

**Bir metrik için kaynak haritası oluşturun.**

```text
Şu metriğin ardındaki veriyi belgeliyorum: [metrik adı], tanımı [tanım].
Araçlarımız: [araç listesi, örneğin izleyici, ITSM aracı, hat, izleme]. Şu
alanlarla bir kaynak haritası taslağı hazırla: saati başlatan olay, saati
durduran olay, her biri için kayıt sistemi, olayı kimin ya da neyin oluşturduğu
(kişi ya da otomasyon), olası başarısızlık biçimleri ve her başarısızlığı
tespit edecek denetimler. Araç özellikleri ya da kıyaslama değerleri uydurma.
Varsayımlarını ve haritayı tamamlamak için yanıtlamam gereken soruları listele.
```

**Bir durum modelini belirsizlik açısından gözden geçirin.**

```text
[Ekip ya da hizmet] için iş akışı şu: [durumlar ve izin verilen geçişler
listesi, biliniyorsa her biri için tek satırlık bir anlam]. Bundan
hesapladığımız saatler: [saatleri listele]. Belirsiz durumları, bir saatin
yanıltıcı biçimde durabileceği ya da duraklayabileceği durumları ve iki ekibin
aynı sözcüğü farklı okuyabileceği yerleri belirle. Saatleri yine de destekleyen
daha küçük bir model öner ve neyin kaybedileceğini söyle. Aracımızın nasıl
yapılandırıldığını tahmin etme. Varsayımlarını listele.
```

**Bir besleme için veri kalitesi denetimleri tasarlayın.**

```text
[Kaynak sistem] sisteminden [hedef] hedefine her [takvim] [veri türü, örneğin
değişiklik kayıtları] yüklüyoruz. Gerekli alanlar: [alanları listele]. Bütünlük,
yinelenenler, tazelik ve kaynağa karşı uzlaştırma için, her biri için önerilen
bir uyarı ve bir sahip rolüyle birlikte, pratik bir denetim kümesi öner. Kümeyi
[ekip büyüklüğü] kişilik bir ekibin sürdürebileceği kadar küçük tut. Eşik
uydurma; ihtiyaç duyduklarını benden iste. Varsayımlarını listele.
```

**Kısa bir anket ve yanıt oranı için bir plan taslağı hazırlayın.**

```text
[Hedef kitle] için [deneyim konusu, örneğin bir talebin karşılanması için
gereken efor] ölçmek istiyorum. [Sayı] tarafsız soru, bunların ne zaman ve nasıl
gönderileceğine dair bir plan ve yanıt oranının ve yanıtlayan karışımının nasıl
raporlanacağı için taslak hazırla. Yanıtları yanlı kılabilecek ifadeleri
işaretle ve verinin [araç ya da konum] içinde tutulacağı göz önüne alınarak
gizlilik hususlarını not et. Kıyaslama yanıt oranları uydurma. Varsayımlarını
listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): enstrümante ettiğiniz metriği hangi konunun tanımladığını ve yanında durması gereken koruyucu önlemi bulmak için kullanın.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): yeni ya da düzenlenmiş bir metrik konusunun veri kaynağını ve saatlerini adlandırdığını denetlemek için kullanın.

## Temel çıkarımlar

- Her metrik adı konmuş bir kayıt sistemine bağlıdır; bu yüzden grafiği kurmadan önce kaynağı eşleyin.
- Olayları gerçekleştikleri anda otomatik olarak yakalayın ve tanımlar geçmiş kaybedilmeden değişebilsin diye ham olayları tutun.
- Zaman da veridir: tek bir standart kullanın, saat kurallarını yazın ve geriye tarihlemeyi izleyin.
- Durum modelini küçük, ortak ve belgelenmiş tutun ve her değişikliği günlüğe alın.
- Veri hattını bir sahibi, testleri, bir tazelik göstergesi ve planlı uzlaştırması olan bir ürün olarak ele alın.
- Anketleri yalnızca insanların söyleyebileceği şeyler için kullanın, yanıt oranını gösterin ve kişisel veriyi ekip düzeyinde tutun.

## Kaynaklar ve ileri okuma

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
