# Operasyonel iş ve plansız iş

**Bir hizmeti geliştiren ve işleten bir takımın tek bir kapasite havuzu vardır; bu yüzden planlı değişiklik ile operasyonel iş arasındaki ayrımı görünür kılın, onu kesinti ve hızlandırma için açık kurallarla koruyun ve plansız işin payını insanlar hakkında bir hüküm olarak değil sistem hakkında bir sinyal olarak okuyun.**

## Genel bakış ve motivasyon

Bir hizmeti geliştiren ve işleten her takım zamanını iki geniş iş türüne harcar. **Değişiklik işi** hizmeti ileri taşır: yeni özellikler, planlı iyileştirmeler, geçişler ve bilinen zayıflıkların giderilmesi. **İşletim işi**, operasyonel iş de denir, hizmeti ayakta tutar: olaylara ve taleplere yanıt vermek, uyarılara karşılık vermek, rutin yamaları uygulamak, erişimi geri getirmek ve hizmetin hâlâ talep ettiği elle yapılan görevleri ele almak. İkisi de meşrudur ve kullanıcıları olan bir hizmetin ikisine de ihtiyacı vardır. Sorun, kimse takımın her birinden ne kadar yaptığını söyleyemediğinde başlar; çünkü plan o zaman işletim işinin zaten tükettiği kapasiteyi sessizce varsayar.

İş, öngörülüp öngörülmediğine göre de sınıflandırılabilir. **Planlı iş**, dönem başlamadan önce, örneğin planlı çalışma sırasında ya da üç aylık bir taahhütle seçilmiş işidir. **Plansız iş**, dönem içinde gelir ve bütçelenmemiş dikkat talep eder: bir üretim olayı, üst düzey bir paydaştan acil bir talep, bir güvenlik düzeltmesi ya da bir müşteriyi engelleyen bir hata. İki eksen çakışır ama aynı değildir. İşletim işinin çoğu, hacmi öngörülebilir olsa bile zamanlaması bakımından plansızdır ve zamanlanmış bir sertifika yenilemesi gibi bazı işletim işleri tamamen planlıdır. Değişiklik işi de plansız olabilir; örneğin bir düzenleme değiştiğinde ve bir takım haftalar içinde yanıt vermesi gerektiğinde.

Çevik ve ITIL bakış açıları aynı baskıyı farklı sözcüklerle anlatır. Zaman kutulu planlamada bir taahhüt kapasite tahminidir ve dönem ortasında gelen iş ya bir şeyin yerini alır ya da ertelenir. Bir akış panosunda devam eden iş açık sınırlara sahiptir ve çoğu zaman acil öğeler için ayrılmış bir şerit vardır; soru, akış çökmeden önce sistemin kaç acil öğeyi karşılayabileceğidir (bkz. Konu 2.1 “Akış ölçümleri”). ITIL 4’te (2019’da yayımlanan sürüm) olay yönetimi, hizmet talebi yönetimi ve sorun yönetimi işletim işinin nasıl alındığını, önceliklendirildiğini ve çözüldüğünü tanımlarken, değişiklik yetkilendirme ve yazılım geliştirme ve yönetimi uygulaması planlı değişikliği yönetir. Uygulamalar iş akışlarını tanımlar. Tek bir takımın saatlerini bunlar arasında nasıl paylaşacağını nadiren söylerler ve bu konu bu boşlukta çalışır.

Birkaç terim burada tekrarlanır. **Kesinti**, planlama çevriminin dışında gelen ve bir kişiyi üzerinde çalıştığı öğeden uzaklaştıran her taleptir. **Kesinti yükü**, bu taleplerin bir dönem boyunca bir takım üzerindeki toplam etkisidir; sayı, saat ya da tükettikleri kapasite payı olarak ölçülür. **Hızlandırma (expedite)**, genellikle [gecikme maliyeti](https://en.wikipedia.org/wiki/Cost_of_delay) yüksek ve acil olduğu için kuyruğu atlamasına izin verilen bir iş öğesidir. **Hızlandırma şeridi**, aynı anda kaç hızlandırmanın devam edebileceğini sınırlayan, çoğu zaman bir panodaki ayrılmış bir satır olan bir kuraldır. **Kapasite dağılımı**, bir takımın kapasitesinin iş türleri arasında açıkça bölünmesidir; örneğin planlı değişiklik için belirtilmiş bir pay, işletim işi için bir pay ve iyileştirme için bir pay.

Plansız iş, planlı teslimat üzerindeki en büyük gizli vergidir: her kesinti kendi süresini artı [görev değiştirmede](https://en.wikipedia.org/wiki/Task_switching_(psychology)) kaybedilen toparlanma süresini maliyet olarak taşır ve kesintiye uğrayan iş üzerine bir araştırma (Mark, Gudith ve Klocke, 2008), insanların daha fazla stres bedeliyle daha hızlı çalışarak telafi ettiğini buldu. Yön üzerine bir not. Yüksek bir plansız iş payı kendi başına bir kusur değildir. Yeni yayımlanmış bir hizmet, süren bir kesinti ya da düzenlemeye tabi bir olay, bir süre boyunca bir takımın kapasitesinin çoğunu meşru olarak tüketebilir. Amaç plansız işi sıfıra indirmek ya da gizlemek değil; onu görmek, fiyatlandırmak ve takımın ne kadarını emeceğine ve kuruluşun ne kadarını yukarı akışta düzeltmesi gerektiğine bilinçli karar vermektir. Aynı nedenle yinelenen plansız işi bulmak en yararlı olanıdır; çünkü bir sorun kaydına, bir izleme boşluğuna ya da ödemeyi sürdürmekten ortadan kaldırması daha ucuz olan bir [teknik borç](https://en.wikipedia.org/wiki/Technical_debt) öğesine işaret eder.

## Temel ilkeler

- **Kapasite sınırlı ve paylaşılan bir şeydir.** İşletim işine ya da bir hızlandırmaya verilen her saat planlı değişikliğe verilmeyen bir saattir; bu yüzden ayrımı, en çok bağıranın belirlemesine bırakmak yerine açık ve görünür kılın.
- **İşi geldiğinde sınıflandırın, sonradan değil.** Her öğeyi sisteme girdiği anda planlı ya da plansız ve değişiklik ya da işletim olarak etiketleyin; çünkü dönem sonunda yeniden sınıflandırma bir gözlem değil bir hatırlamadır.
- **Kesintilerin bedeli süreleriyle sınırlı değildir.** Harcanan dakikaların yanı sıra değiştirmenin toparlanma maliyetini de sayın ve kesintileri toplulaştıran ya da adlandırılmış bir kişiye yönlendiren tasarımları tercih edin.
- **Hızlandırmayı sıraya göre değil kurala göre yapın.** Sınırı ve giriş sınavı olan bir hızlandırma şeridi akışı korur; kıdeme göre sınırsız hızlandırma onu ortadan kaldırır.
- **Kapasiteyi bilerek ayırın.** Planlı bir tampon, hiçbirini varsaymayan bir plandan daha dürüsttür.
- **Yinelenen plansız işi sistemde bir kusur olarak ele alın.** Haftalık bir tekrar, bir sorun kaydı ya da bir otomasyon için adaydır.
- **Takımları ve hizmetleri ölçün, asla bireyleri.** Kesintilerin çoğunu yanıtlayan kişi genellikle en çok bilen kişidir; onları sıralamak yanlış şeyi cezalandırır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Metrik tanımları

Yedi metrik, kapasitenin nasıl bölündüğünü ve bozulduğunu tanımlar. Her biri yazılı bir sınıflandırma kuralı gerektirir, çünkü hepsi öğelerin nasıl etiketlendiğine bağlıdır. Her formüldeki dönem, takım için aynı sabit penceredir; örneğin bir hafta, bir ay ya da bir çeyrek.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Plansız iş oranı | Dönem başında planda olmayan tamamlanmış iş öğelerinin, sayıya göre, payı | Dönemde tamamlanan ve dönem başladıktan sonra panoya ya da birikim listesine giren öğeler / dönemde tamamlanan bütün öğeler; saat planlama etkinliğinde başlar ve dönemin sonunda durur; iptal edilen ve hâlâ açık öğeler hariç tutulur | yüzde | Öğe oluşturma zamanı ve planlama anlık görüntüsü olan sorun izleyici | Olay yönetimi; hizmet talebi yönetimi | Kapsam değişikliği; iş öğesi türleri | Aylık |
| Kapasite dağılımı uyumu | Gerçek emeğin, değişiklik işi, işletim işi ve iyileştirme işi arasında belirtilmiş ayrımla ne kadar yakından eşleştiği | Her kategori için gerçek pay ile üzerinde anlaşılmış pay arasındaki mutlak fark, toplanıp ikiye bölünür; gerçek pay, o kategorideki tamamlanan öğeler (ya da takımın kaydettiği yerde kaydedilen emek) / bütün tamamlanan öğeler; kategorisi olmayan öğeler ayrıca raporlanır ve atılmaz | yüzde puan | Sorun izleyici iş türü alanı ve varsa süre kayıtları | Sürekli iyileştirme; kapasite ve performans yönetimi | Kapasite dağılımı ya da kapasite planlaması | Aylık |
| Kesinti oranı | Plan dışı taleplerin takıma ve planlı iş yapan insanlara ne sıklıkla ulaştığı | Dönemde takıma ulaşan kesintiler / dönemdeki iş günleri; burada kesinti, takımın giriş kanalına kaydedilen ve zaten planda olmayan her kayıt, çağrı, mesaj isteği ya da taleptir; aynı temel talebin kopyaları bir kez sayılır | iş günü başına kesinti | Giriş kanalı günlüğü, ITSM kuyruğu, uyarı sistemi ve takım kesinti günlüğü | Olay yönetimi; hizmet talebi yönetimi; izleme ve olay yönetimi | Kesinti günlüğü ya da takım çalışma anlaşması | Haftalık |
| Hızlandırma oranı | Hızlandırma şeridini kullanan tamamlanmış öğelerin payı | Dönemde hızlandırma şeridine giren tamamlanan öğeler / dönemde tamamlanan bütün öğeler; saat öğe hızlandırma işaretlendiğinde başlar ve tamamlandığında durur; iş başlamadan önce şeritten çıkarılan öğeler ayrıca sayılır | yüzde | Pano şeridi geçmişi ya da öncelik alanı geçmişi | Olay yönetimi; değişiklik yetkilendirme (acil değişiklik) | Hızlandırma hizmet sınıfı | Aylık |
| Planlı iş yer değiştirmesi | Plansız işe yer açmak için dışarı itilen ya da terk edilen planlı öğelerin sayısı | Dönemde “plansız iş tarafından yerinden edildi” nedeniyle dönemden çıkarılan, ertelenen ya da bitmemiş bırakılan planlı öğeler (sayı); hedef değiştiği için çıkarılan öğeler hariç | öğe sayısı | Neden alanıyla pano değişiklik geçmişi | Değişiklik yetkilendirme; sürekli iyileştirme | Teslimat hedefi koruması; kapsam müzakeresi | Aylık |
| Yinelenen plansız iş payı | Nedeni, geriye bakış penceresindeki daha önceki bir plansız öğeyle eşleşen plansız öğelerin payı | Dönemde tamamlanan ve geriye bakış penceresi (örneğin 90 gün) içinde daha önceki bir öğeyle aynı sorun kaydına, uyarı kuralına ya da neden etiketine bağlanan plansız öğeler / dönemde tamamlanan bütün plansız öğeler; neden etiketi olmayan öğeler ayrı bir sınıflandırılmamış sayı olarak raporlanır | yüzde | ITSM olay ve sorun kayıtları, izleyici neden etiketleri | Sorun yönetimi; bilinen hata yönetimi | Retrospektif eylem öğeleri; yinelenen hata etiketleri | Aylık |
| Planlı taahhüt güvenilirliği | Takımın dönem için planladığı öğelerin, dönem içinde bitirdiği payı | Dönemde biten planlı öğeler / dönem başında planlı öğeler; başlangıçtan sonra eklenen öğeler iki sayımdan da hariç tutulur | yüzde | Planlama anlık görüntüsü ve izleyici tamamlanma geçmişi | Hizmet düzeyi yönetimi; değişiklik yetkilendirme | Tahmin güvenilirliği | Aylık |

Bu konudaki bir hızlandırma öğesinin yaşı gibi süre ölçümleri, tek bir uzun olay bir ortalamayı bozduğundan ortalama olarak değil yüzdelikler (örneğin medyan ve 85. yüzdelik) olarak gösterilmelidir (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

## Öneriler

### Ayrımı görünür kılın

**1. Her öğeyi girişte iki alanla etiketleyin.** İzleyicinin ya da ITSM aracının giriş formuna bir iş türü (değişiklik, işletim, iyileştirme) ve bir planlı bayrağı (planlı, plansız) ekleyin ve ikisini de zorunlu yapın. Etiketler oluşturulduğunda ayarlandıklarında ucuzdur, sonradan yeniden kurulduklarında güvenilmezdir. Her değerin tanımını takım çalışma anlaşmasında tek bir cümleyle yazın ve etiketler işi tanımlamayı bıraktığında gözden geçirin (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

**2. Bir planlama anlık görüntüsünü dondurun.** “Plansız” yalnızca bir plana göre anlam taşır; bu yüzden dönemin başındaki öğe listesini yakalayın ve saklayın. Tamamlanan işi, dönem sonunda panonun neye benzediğine değil anlık görüntüye karşı karşılaştırın.

### Kapasiteyi bilerek dağıtın

**3. Bir kapasite dağılımı üzerinde anlaşın ve onu bir hipotez olarak ele alın.** Bir takım olarak ve ürün sahibi ya da hizmet sahibiyle, kabaca ne kadarının planlı değişikliğe, işletim işine ve iyileştirmeye gittiğine karar verin. Verinin takımın son birkaç dönemde gerçekte ne yaptığını gösterdiğinden başlayın, sonra istediğiniz yöne giden bir hedef seçin. Dağılımı her planlama çevriminde yeniden ele alın; başka bir takımın slaytından kopyalanmış sabit bir yüzde bir karar değil bir tahmindir.

**4. Kendi geçmişinizden boyutlandırılmış bir tampon ayırın.** Plansız iş için bir tamponu boyutlandırmak amacıyla takımın kendi kesinti kaydını kullanın; örneğin son dönemlerde haftalık plansız payın orta ve üst aralığına bakarak ve yalnızca geriye kalan kapasiteyi planlayın. Düzenli olarak kullanılmayan bir tampon küçülebilir; düzenli olarak tükenen bir tampon daha büyük bir dağılım ya da ortadan kaldırılan bir neden gerektirir. Bir kuyrukta yük ile gecikme arasındaki ilişki ([Little yasasına](https://en.wikipedia.org/wiki/Little%27s_law) ve Konu 2.3 “Devam eden iş ve kuyruklar”a bakın), tam kullanımda çalıştırılan bir sistemin bir sürprizi karşılayacak yerinin neden olmadığını açıklar.

### Kesinti yolunu tasarlayın

**5. Kesintileri adlandırılmış bir role yönlendirin.** Gelen talepleri bir gün ya da bir hafta karşılamak üzere, çoğu zaman kesinti işleyicisi, nöbetçi mühendis ya da kalkan denen tek bir kişiyi döndürün; diğerleri odağını korusun. Rolün yazılı bir kapsamı, bir devir notu ve yükün adil paylaşılması için sürekliliğinin ne kadar süreceğine dair bir sınırı vardır. Rotasyondaki takımlar bunu nöbet uygulamasına bağlamalıdır (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”).

**6. Kapıda triyaj yapın.** Kesintiler aciliyet bakımından çok farklıdır. Girişte üç soru soran kısa bir [triyaj](https://en.wikipedia.org/wiki/Triage) kuralı uygulayın: bir hizmet çalışmıyor mu ya da bir kullanıcı engellenmiş mi, taşınamayacak bir tarih var mı ve talep bir sonraki planlama etkinliğini bekleyebilir mi? Üçünü de geçemeyen öğeler birikim listesine gider ve diğer işler gibi planlanır. ITIL 4 terimleriyle bu, takımın kendi girişine uygulanan olay yönetiminin ve hizmet talebi yönetiminin önceliklendirme adımıdır.

### Hızlandırma şeridini yönetin

**7. Hızlandırma şeridine bir sınır ve bir giriş sınavı verin.** Şerit bir seferde en fazla bir ya da iki öğe tutar ve bir öğe yalnızca gecikme maliyeti yüksek ve acilse ve talep eden bunu belirtebiliyorsa girer. Belirtilmiş bir sınav, takımın yalnızca gürültülü olan talebe hayır demesini sağlar. Şerit her zaman doluysa bir istisna olmaktan çıkmıştır ve takım giriş sınavını ve yukarı akıştaki nedenleri gözden geçirmelidir. Şerit, kendi kuralları olan bir [hizmet sınıfıdır](https://en.wikipedia.org/wiki/Class_of_service); temel fikir için Kanban yazınına bakın (Anderson, 2010).

### Kaynakları ortadan kaldırın

**8. Plansız öğeleri bir nedene bağlayın ve tekrarları gözden geçirin.** Her plansız öğeye bir neden etiketi ya da bir sorun kaydına bağlantı ekleyin. Ayda bir tekrarlayan nedenleri listeleyin ve ilk birkaçını sorun yönetimine, teknik borç öğeleri olarak birikim listesine ya da izleme iyileştirmelerine gönderin (bkz. Konu 4.1 “Sorun yönetimi metrikleri” ve Konu 4.6 “Teknik borç ve bilinen hatalar”). Yinelenen plansız iş payı, bu düzeltmelerin yerine ulaşıp ulaşmadığını söyler. Örüntü, tekrarlayan elle operasyonel işin mühendislikle ortadan kaldırılacak bir şey olarak ele alındığı Google SRE kitabında açıklanan angaryanın ortadan kaldırılmasına benzer; kitap bunu bir mühendisin zamanının bir payının altında tutmayı önerir (Beyer ve diğerleri, 2016); her takımın benimsemek yerine kendi verisine karşı sınaması gereken bir kılavuzdur, hedef olarak değil.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşlenen koruma çizgisi metriği ya da uygulaması |
| --- | --- | --- |
| Plansız iş oranı | Planlı sayılmaları için öğeleri planlama anlık görüntüsüne geç eklemek; acil işi izlenmeden bırakıp hiç sayılmamasını sağlamak; kaçırılan bir planı mazur göstermek için planlı öğeleri plansız etiketlemek | Zaman damgalı dondurulmuş planlama anlık görüntüsü; sınıflandırılmamış sayı; etiketi olanla karşılaştırmak için her çeyrek okunan kapatılmış öğelerden bir örnek |
| Kapasite dağılımı uyumu | Üzerinde anlaşılmış dağılımla eşleşmek için öğeleri kategoriler arasında taşımak; payları kaydırmak için bir öğeyi çoğa bölmek; takımın zaten tutturduğu bir dağılım seçmek | Çalışma anlaşmasında yazılı sabit kategori tanımları; öğe açıklamalarından kategorilerine karşı bir örnek; planlı taahhüt güvenilirliği |
| Kesinti oranı | Kesintileri günlüğe hiç ulaşmayan sessiz iyiliklere dönüştürmek; birkaç talebi tek bir girdide birleştirmek; insanları sormaktan caydırmak | Günlüğü giriş kanalı trafiği ve uyarı geçmişiyle karşılaştırmak; retrospektifte takıma günlüğün deneyimleriyle örtüşüp örtüşmediğini sormak |
| Hızlandırma oranı | Disiplinli görünmek için acil işi şeridin dışında tutmak ya da hız için her şeyi ona koymak; hızlandırmayı “önemli” anlamına gelecek biçimde yeniden tanımlamak | Giriş sınavıyla şerit sınırı; incelemede sınavı karşılayan hızlandırma öğelerinin payı; planlı iş yer değiştirmesi |
| Planlı iş yer değiştirmesi | Yer değiştirmeyi bilerek bir kapsam değişikliği olarak kaydetmek; planlı öğelerin nedensiz sessizce başarısız olmasına izin vermek; yer değiştirilmesi olası planlı öğelerden kaçınmak | Çıkarılan ya da bitmemiş her öğede zorunlu neden alanı; planlı taahhüt güvenilirliği; nedenlerin retrospektifte gözden geçirilmesi |
| Yinelenen plansız iş payı | Tekrarların gizlenmesi için kaba bir neden etiketi ya da hiçbir şeyin tekrarlanmaması için ince bir etiket kullanmak; bağlantıyı kaldırmak için sorun kaydını kapatmak | Her çeyrek gözden geçirilen neden etiketi sınıflandırması; sınıflandırılmamış sayı; bir sorun kaydı kapandıktan sonra tekrar denetimi |
| Planlı taahhüt güvenilirliği | Hepsini bitirmek için küçük planlamak; tahminleri şişirmek; kısmi bir öğeyi bitti saymak; zor öğeleri dönem başlamadan önce düşürmek | Zaman içinde planlanan öğelerin boyutunun ve değerinin karşılaştırılması; teslimat hedefinde sonuç denetimi; plansız iş oranı, böylece plan çekingen olduğunda yüksek bir değer sağlık olarak okunmaz |

Sağlıklı bir okuma, takımın açıklayabildiği bir plansız iş oranı, nadiren dolu olan bir hızlandırma şeridi ve düzeltmelerden sonra düşen bir tekrar payıdır. Şüpheli biçimde mükemmel bir okuma, araştırılması gereken şeydir. Sıfır plansız iş raporlayan bir takımın ya çok sakin bir hizmeti ya da izlenmeyen bir hizmeti vardır ve ayırt etmenin yolu günlüğü uyarı ve kayıt geçmişiyle karşılaştırmaktır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Sabit kapasite dağılımı (belirtilmiş yüzdeler) | Açıklaması kolay; iyileştirme işini aç bırakılmaktan korur | Gerçek değişkenliği yok sayar; yeniden etiketlemeyle oyunlaştırılabilir |
| Geçmişten boyutlandırılmış ayrılmış tampon | Planı gerçek kesinti yüküne eşler | Birkaç dönem güvenilir veri gerektirir; kronik bir nedeni gizleyebilir |
| Dönen kesinti işleyicisi | Takımın çoğunun odağını korur; yükü adil yayar | İşleyicinin kendi planlı işi durur; rol devir teslime ve desteğe ihtiyaç duyar |
| Sıkı hızlandırma sınırı | Akışı öngörülebilir tutar; belirtilmiş bir gecikme maliyetini zorlar | Talep edenler etrafından dolaşabilir; gerçek bir acil durum engellenmiş hissedebilir |
| Emek yerine öğeleri saymak | Basit ve şişirmesi zor | Çok farklı boyutları aynı biçimde ele alır |

Çoğu takım için pratik duruş, önce öğeleri saymak, öğe sayımlarının yanılttığı yerde emeği eklemek, küçük bir tamponu ve küçük bir hızlandırma şeridini korumak ve neden etiketini en büyük tekrara saldırmak için kullanmaktır.

## Takımınızla tartışılacak sorular

**1. Son dönemde tamamladığımız işin hangi payı plansızdı ve bunu nasıl biliyoruz?**
Planlama anlık görüntüsünü tamamlanan öğelerin listesinin yanında açın ve planda olmayan öğeleri sayın. Sonucu her kişinin dönem hakkındaki hissiyle karşılaştırın; ikisi çoğu zaman farklıdır. Kolaylaştırıcı kaç öğenin hiç günlüğe kaydedilmediğini sormalıdır, çünkü dürüst yanıt diğer her sayıyı şekillendirir.

**2. Bize en çok maliyet getiren üç kesinti kaynağı hangileri ve kim onları kaldırabilir?**
Kaynakları sayıya ve emdikleri emeğe göre sıralayın; örneğin uyarılar, tekrarlanan talepler, yükseltmeler ve paydaşlardan gelen gelişigüzel istekler. Her birini kaldırılabilir, yönlendirilebilir ya da kaçınılamaz olarak işaretleyin. Kolaylaştırıcı, takımın kendi başına düzeltemediği her kaynak için takımın dışında adlandırılmış bir sahip için ısrar etmelidir.

**3. Gerçekte değişiklik, işletim ve iyileştirme işi arasında hangi dağılımı istiyoruz?**
Verinin gösterdiği dağılımı, insanların sahip olduklarına inandıkları dağılımla ve liderliğin beklediği dağılımla karşılaştırın. Takımın baskı altında hangi iş türlerini önce bırakacağını tartışın, çünkü bu gerçek öncelikleri ortaya çıkarır. Gelecek dönem için bir hedef ve onu denetlemenin bir yolunu seçin.

**4. Hızlandırma şeridi için kuralımız nedir ve kim karar verir?**
Mevcut kuralı yüksek sesle okuyun ya da hiç olmadığını not edin. Son üç hızlandırmayı sorun ve her birini belirtilmiş bir gecikme maliyetine karşı sınayın. Üst düzey biri sınavı geçemeyen bir atlama istediğinde takımın ne yaptığını ve kararı kimin desteklediğini tartışın.

**5. Kesintiye uğradığımızda, kesinti bittikten sonra bize ne kadara mal oluyor?**
İnsanlardan tipik bir kesintiden sonra bir görevdeki yerlerini yeniden bulmanın ne kadar sürdüğünü anlatmasını isteyin.

**6. Hangi plansız öğe birden fazla kez geri geldi ve onu ne durdururdu?**
Son çeyreğin plansız öğelerini alın ve nedene göre tekrarları arayın. En yüksek toplam emeğe sahip olanı seçin ve neden tekrarladığını izleyin: eksik bir uyarı, düzeltilmemiş bir hata, elle yapılan bir adım ya da bir tedarikçi sorunu. Bir sorun kaydına, birikim listesine ya da bir tedarikçi konuşmasına gidip gitmeyeceğine karar verin.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları plansız işi bozulmuş planlar ve kayan tahminler olarak hisseder. Girişte etiketlemeden, dondurulmuş bir planlama anlık görüntüsünden ve geçmişe dayalı bir tampondan kurulmuş bir tahminden yararlanırlar (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”). Yer değiştirme kaydı, ürün sahiplerine her geç talebin neye mal olduğunu gösterir.

### Hizmet ve operasyon takımları

Operasyon takımları işletim işinin çoğunu taşır. Adlandırılmış bir kesinti işleyicisine, bir triyaj kuralına ve yinelenen taleplerden ve uyarılardan düzeltmelere giden bir yola ihtiyaç duyarlar (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”). Tekrar payı, sorun yönetimine yatırım için en güçlü savlarıdır.

### Liderlik ve yönetişim

Liderler gerçek dağılımı yaptıkları talepler ve kabul ettikleri son tarihler yoluyla belirler. Oranı ve nedenlerini istemeli, tekrarlayan kesintileri ortadan kaldıran iyileştirme işini finanse etmeli ve işlerin normal yapılış biçimi olarak hızlandırmayı kullanmaktan kaçınmalıdırlar.

### Müşteriler ve kullanıcılar

Müşteriler plansız işi kesintiler, yavaş yanıtlar ve gecikmiş özellikler olarak görür. Takım nedenleri düzeltmek için yer bulduğunda kazanırlar ve aciliyeti dile getirmek için adil bir yola ihtiyaç duyarlar. Hizmet düzeyi anlaşmaları ([hizmet düzeyi anlaşmasına](https://en.wikipedia.org/wiki/Service-level_agreement) bakın) takımın taşıdığı kesinti yükünü yansıtmalıdır (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir sağlık sigortacısının BT departmanı, yedi kişilik bir ürün takımı ve paylaşılan bir hizmet masasıyla bir hasar platformu işletir. Takım yeni özellikler geliştirir ve ayrıca platformu üretimde destekler. Bu örnekteki bütün sayılar örnekleyicidir.

Altı hafta boyunca takımın planlı taahhüt güvenilirliği yaklaşık yüzde 85’ten yüzde 55’e düştü ve ürün sahibi takımın tahminlerini sorgulamaya başladı. Takım lideri izleyici geçmişini çeker. Dondurulmuş planlama anlık görüntülerini kullanarak plansız iş oranı en son dönemde sayıya göre yüzde 41’dir; takımın hatırası ise “belki beşte biri” idi. Sınıflandırılmamış sayı yüzde 9’dur; dolayısıyla oran makul biçimde güvenilirdir.

Plansız öğeleri nedene göre bölmek, 24’ün 14’ünün işletim işi olduğunu ve bunların 9’unun, bir ortağın veri biçimi değişikliğinden sonra başarısız olan ve her seferinde elle yeniden başlatılan tek bir hasar gönderim toplu işine dayandığını gösterir. Yinelenen plansız iş payı yüzde 58’dir. Kesinti oranı iş günü başına 6’dır ve bunların 4’ü planlı işi yapan mühendislere ulaşır, çünkü hizmet masası doğrudan ilk yanıtlayan kişiye yükseltir. Hızlandırma şeridi çoğu gün aynı anda iki öğe tutar ve hızlandırma oranı yüzde 23’tür. Planlı iş yer değiştirmesi dönemde 7 öğedir; bunların 5’i “plansız iş tarafından yerinden edildi” nedenini taşır.

Takım ürün sahibi ve hizmet sahibiyle dört karar alır. Birincisi, bir seferde bir mühendis yazılı bir kapsam ve bir devir notuyla kesinti işleyicisi olur ve yükseltmeler yalnızca o kişiye gider. İkincisi, hızlandırma şeridi bir öğeyle sınırlandırılır, belirtilmiş bir gecikme maliyeti gerektiren bir giriş sınavı vardır ve her hızlandırma yerinden ettiği öğeyi kaydeder. Üçüncüsü, toplu iş hatası bir sorun kaydı olarak ele alınır; düzeltme ve ortakla konuşma, takımın iyileştirmeye ilk dağılımı olarak seçtiği pay olan kapasitenin yüzde 15’ini kullanarak iyileştirme işi olarak birikim listesine konur. Dördüncüsü, takım gelecek dönemin işini tam yük ile değil, yakın zamandaki plansız payının üst aralığından boyutlandırılmış bir tamponla planlar.

Altı hafta sonra plansız iş oranı yüzde 27, tekrar payı yüzde 22, planlı işçilere ulaşan kesinti oranı günde 1,5 ve planlı taahhüt güvenilirliği yaklaşık yüzde 78’dir (hepsi örnekleyici). Takım önceki yüzde 85’ine ulaşmamıştır ve bunu söyler.

Takımın yakaladığı oyunlaştırma riski: yeni düzenlemenin altındaki ikinci dönemde kesinti oranı keskin biçimde düşer ve takım lideri insanların işleyiciye doğrudan mesaj attığını, bu yüzden iyiliklerin günlüğe hiç ulaşmadığını fark eder. Günlüğü giriş kanalı ve uyarı geçmişiyle karşılaştırmak, gerçek hacmin değişmediğini gösterir. Takım, işleyicinin doğrudan mesajları giriş kanalına yönlendirmesi konusunda anlaşır. Kusur yolun tasarımındaydı, herhangi bir kişide değil.

## Sektör mercekleri

**Girişim (startup).** Hemen hemen bütün iş acil hissedilir ve değişiklik ve işletim işini aynı birkaç kişi yapar. Sınıflandırmayı iki etiketle sınırlı tutun ve hızlandırmalara açık bir sınır koyun. Plansız oran, “yol haritasını ya da destek yükünü yapabiliriz, ikisini birden değil” demenin kanıtıdır.

**Küçük işletme.** Bir yönetici ya da küçük bir takım çoğu zaman her talebi ele alır. Sınıflandırma olarak aracın kayıt türlerini kullanın, örüntüyü öğrenmek için kesintileri bir ay günlüğe kaydedin ve planlı iş için sabit bir günlük blok ayırın. Tedarikçilerden hacim ve tekrarlayan neden raporlarını isteyin.

**Büyük kurum.** Bir takım için plansız iş çoğu zaman başka bir takım için planlı iştir. Ortak tanımlar üzerinde anlaşın, takım ve hizmet başına raporlayın ve düzeltmeleri nedenin bulunduğu düzeyde finanse edin (bkz. Konu 9.3 “İş birliği ve devir teslim metrikleri”).

**Devlet ve kamu sektörü.** Kapasite kadro tavanlarıyla sabitlenebilir ve işletim işi yasa ya da denetim bulgularıyla belirlenebilir. Bunları dağılımın parçası yapın, sınıflandırma kurallarını belgeleyin ve bir denetim izi tutun (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon öngörülebilir teslimattır: kesinti yükünü yok sayan bir plan defalarca kaçırılır ve görünür plansız iş, takıma nedenleri ortadan kaldırmak için zaman istediğinde daha güçlü bir ses verir.

Etiketler ve planlama anlık görüntüsü olağan iş akışının parçası olduğunda bu ölçümleri toplamanın maliyeti mütevazıdır. Başlıca maliyetler tanımlar üzerinde anlaşma zamanı, girişte etiketleme disiplini, izleyici ve ITSM verisini birleştirmek için az miktarda araç (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”) ve kendi planlı işi yavaşlayan kesinti işleyicisinin saatleridir. Saat düzeyinde süre kayıtları eklemek hayli daha pahalıdır ve çoğu zaman hoşnutsuzlukla karşılanır; bu yüzden onları yalnızca öğe sayıları yanıltıcı çıktığında ekleyin. Toplam sahip olma maliyetine insanların zamanı egemendir; bu yüzden onu sayın.

Getiri, varsayılan bir rakamda değil, takımın kendi başına ölçebileceği örüntülerde ortaya çıkar. Sorun düzeltmelerinden sonra düşen bir yinelenen plansız iş payı, yükselen planlı taahhüt güvenilirliği, daha az yerinden edilmiş planlı öğe ve planlı işte çalışanlara ulaşan daha az kesinti arayın. Saatlerin bilindiği yerde, ortadan kaldırılan tekrarlayan bir nedenden geri kazanılan emek takımın kendi saat başı maliyetiyle fiyatlandırılabilir ve düzeltmenin emeğine karşı konabilir (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi” ve Konu 7.7 “Yatırım getirisi ve iş gerekçesi”). Plansız iş için sektör yüzdeleri ödünç almayın; başka bir kuruluştan hiçbir rakam kendi geçmişinizin yerini tutmaz.

## Anti-desenler ve tuzaklar

- **Bütün plansız işi başarısızlık saymak.** Bir kısmı hizmetin işini yapmasıdır ve sıfır hedefi işi günlüğün dışına iter. Bunun yerine hangi kısmın beklendiğini, hangisinin önlenebilir olduğunu sorun ve birincisi için bir tampon belirleyin.
- **Kahraman kültürü.** Her acil durumu kurtaran kişi vazgeçilmez, yorgun ve tek bir hata noktası olur. Bunun yerine kesinti rolünü rotasyonla paylaşın ve nedenlerin giderilmesini ödüllendirin.
- **Her şey bir hızlandırma.** Hep dolu olan bir şerit yalnızca ikinci bir kuyruktur. Bunun yerine bir sınır koyun, belirtilmiş bir gecikme maliyeti isteyin ve giriş sınavını aylık gözden geçirin.
- **Tam kullanımda planlamak.** Boşluğu olmayan bir plan her sürprizin bir şeyin yerini almasını garanti eder. Bunun yerine kendi kesinti geçmişinizden bir tampon boyutlandırın ve kalan kapasiteyi planlayın.
- **Sonradan sınıflandırmak.** Dönem sonunda eklenen etiketler hafızayı ve ruh hâlini yansıtır. Bunun yerine etiketleri girişte zorunlu kılın ve planlama anlık görüntüsünü dondurun.
- **Talebi sessizce emmek.** Günlüğe hiç ulaşmayan iyilikler yükü görünmez ve planlamayı yanlış yapar. Bunun yerine tek bir giriş yolunu kural yapın ve yan kanal isteklerini ona yönlendirin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Sınıflandırma ve görünürlük | İş etiketlenmez; plansız iş hissedilir, sayılmaz | Bazı takımlar planlı ve plansız işi kendi sözcükleriyle etiketler | İş türleri ve planlı bayrağın bir planlama anlık görüntüsüyle girişte uygulanan tek yazılı tanımı | Plansız oran ve sınıflandırılmamış sayı her dönem eğilim olarak izlenir ve gözden geçirilir | Tanımlar takımlar ve tedarikçiler arasında paylaşılır ve kararları bilgilendirmeyi bıraktıklarında gözden geçirilir |
| Kapasite dağılımı | Kapasitenin planlı iş için tamamen kullanılabilir olduğu varsayılır | Bazı takımlar kaba bir tampon uygular | Geçmişten boyutlandırılmış bir tamponla değişiklik, işletim ve iyileştirme arasında üzerinde anlaşılmış bir ayrım | Uyum gözden geçirilir ve ayrım ürün ve hizmet sahipleriyle ayarlanır | Dağılım, platformları, hizmetleri ve insanları paylaşan takımlar arasında müzakere edilir |
| Kesinti ve hızlandırma yönetimi | Herkes herkesi böler; aciliyet kıdemle belirlenir | Bazı takımlarda nöbetçi kişi ya da acil satır alışkanlığı vardır | Adlandırılmış bir kesinti rolü, bir triyaj kuralı ve sınırı ve giriş sınavı olan bir hızlandırma şeridi | Hızlandırma oranı, yer değiştirme ve kesinti oranı bir koruma çizgisine karşı gözden geçirilir | Kesinti yönlendirmesi ve hızlandırma kuralları, paylaşılan nöbet ve yükseltme yollarıyla takımlar arasında eşgüdümlenir |
| Nedenlerin ortadan kaldırılması | Aynı sorunlar tekrarlar ve kahramanlıkla düzeltilir | Bazı tekrarlar fark edilir ve retrospektiflerde tartışılır | Plansız öğeler bir neden etiketi taşır ve en çok tekrarlayanlar sorun yönetimine gider | Tekrar payı izlenir ve düzeltmeler planlı iyileştirme işi olarak finanse edilir | Nedenler takımlar, tedarikçiler ve müşteriler arasında izlenir ve iyileştirme rutindir |

## Kontrol listesi

- [ ] Her iş öğesi, girişte ayarlanmış bir iş türü (değişiklik, işletim, iyileştirme) ve bir planlı bayrağı taşır.
- [ ] Planlı, plansız, değişiklik ve işletim tanımları takım çalışma anlaşmasında yazılıdır.
- [ ] Her dönemin başında bir planlama anlık görüntüsü dondurulur ve saklanır.
- [ ] Plansız iş oranı, sınıflandırılmamış sayının yanında bir eğilim olarak raporlanır.
- [ ] Takım ve sahipleri bir kapasite dağılımı üzerinde anlaşmış ve son çeyrekte gözden geçirmiştir.
- [ ] Tek bir giriş yolu vardır ve yan kanal istekleri ona yönlendirilir.
- [ ] Yazılı kapsamı olan bir kesinti rolü takım içinde döner.
- [ ] Hızlandırma şeridinin bir sınırı, bir giriş sınavı ve her hızlandırmanın neyi yerinden ettiğine dair bir kaydı vardır.
- [ ] Plansız öğeler bir neden etiketi ya da bir sorun kaydı bağlantısı taşır ve tekrarlar aylık gözden geçirilir.
- [ ] Ölçümler takım ve hizmet düzeyinde raporlanır ve bireyleri sıralamak için asla kullanılmaz.

## Yapay zekâ istemleri

**Giriş için bir iş sınıflandırması tasarlayın.**

```text
Takımımız [takım açıklaması, örneğin bir iç hizmeti geliştiren ve destekleyen
altı kişilik bir platform takımı]. [İzleyici ya da ITSM aracı] kullanıyoruz.
Her öğeyi girişte değişiklik, işletim ya da iyileştirme olarak ve planlı ya da
plansız olarak etiketlemek istiyoruz. Her değer için net, tek cümlelik tanımlar,
insanların tartışacağı üç sınır durumu ve her biri için önerilen bir karar ve
kısa bir giriş formu taslağı hazırlayın. Aracımızın özelliklerini ya da
kıyaslama değerlerini uydurmayın. Varsayımlarınızı ve tanımları inceltmek için
yanıtlamam gereken soruları listeleyin.
```

**Bir kesinti günlüğünü örüntüler için çözümleyin.**

```text
[Dönem] boyunca kesintilerimizin özeti burada: [kaynağa, güne ve türe göre
anonimleştirilmiş sayıları yapıştırın, bireylerin adı olmadan]. Bunları
kaldırılabilecek, tek bir kişiye yönlendirilebilecek, toplulaştırılabilecek ya da
kabul edilecek kaynaklar olarak gruplayın. Her grup için bir deney ve işe yarayıp
yaramadığını gösterecek bir ölçüm önerin. Kıyaslama değerleri uydurmayın ya da
bizi başka kuruluşlarla karşılaştırmayın. Varsayımlarınızı ve daha emin olmak
için ihtiyaç duyacağınız veriyi listeleyin.
```

**Bir hızlandırma şeridi politikası taslağı hazırlayın.**

```text
[Takım büyüklüğü] kişilik bir takımla [akış panosu, zaman kutulu planlama,
sürekli akış ya da bir melez] işletiyoruz ve hizmet düzeyimiz [varsa hizmet
düzeyleri]. Belirtilmiş bir gecikme maliyetine dayalı bir giriş sınavı, şeritteki
öğeler için bir sınır, yerinden edilen öğeye ne olacağına dair bir kural ve
aylık gözden geçirme soruları listesi içeren tek sayfalık bir hızlandırma
politikası taslağı hazırlayın. Dili tarafsız tutun ve bireylerin adını anmaktan
kaçının. Eşik uydurmayın; benim seçmem gerekenleri işaretleyin. Varsayımlarınızı
listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): olay hacmi ya da angarya gibi ilgili bir metriğin sahibi olan konuyu ve yanında yer alması gereken koruma çizgisini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bu konunun düzenlenmiş bir sürümünün saatlerini, sınıflandırma kurallarını ve oyunlaştırma tablosunu tutarlı tuttuğunu denetlemek için kullanın.

## Temel çıkarımlar

- Planlı ve plansız iş ile değişiklik ve işletim işi tek bir kapasite havuzunu paylaşır; bu yüzden ayrımı görünür kılın ve bilinçle üzerinde anlaşın.
- İşi girişte etiketleyin ve bir planlama anlık görüntüsünü dondurun, çünkü “plansız” yalnızca kaydedilmiş bir plana karşı anlam taşır.
- Kesintiler dakikaların yanı sıra toparlanma süresine mal olur; bu yüzden onları adlandırılmış bir role yönlendirin ve kapıda triyaj yapın.
- Bir hızlandırma şeridi bir sınıra, bir giriş sınavına ve her hızlandırmanın neyi yerinden ettiğine dair bir kayda ihtiyaç duyar.
- Yinelenen plansız iş, sorun yönetimi ve iyileştirme işi için en güçlü sinyaldir ve tekrarların payı düzeltmelerin yerine ulaşıp ulaşmadığını gösterir.
- Takım ve hizmet düzeyinde raporlayın, bir takımı kendi geçmişiyle karşılaştırın ve bireyleri asla sıralamayın.

## Kaynaklar ve ileri okuma

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
