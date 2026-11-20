# Müşteri memnuniyeti metrikleri

**Memnuniyet puanları, insanların bir hizmet anını nasıl hissettiğini anlatır. Bu yüzden doğru zamanda kısa ve dürüst sorular sorun, sayılardan önce yorumları okuyun ve hiçbir puanın kotaya dönüşmesine izin vermeyin.**

## Genel bakış ve motivasyon

Operasyonel ölçümler hizmetin ne yaptığını söyler. Memnuniyet ölçümleri ise hizmeti almanın nasıl bir deneyim olduğunu söyler. Bir kayıt hedef süresi içinde kapanabilir ve kullanıcıyı yine de çıkmazda bırakabilir; geri getirilmiş bir hizmet de yine kötü bir hafta gibi hissettirebilir. Çevik takımlar her artımın sonunda aynı soruyu sorar: Bu, kendisi için yapıldığı insanlara yardımcı oldu mu? ITIL'in kodlaştırdığı BT hizmet yönetimi (ITSM) aynı soruyu, bir hizmetin müşterileriyle birlikte yarattığı değer üzerinden sorar. Memnuniyet ölçümü, bu iki sorunun buluştuğu yerdir.

[Müşteri memnuniyeti](https://en.wikipedia.org/wiki/Customer_satisfaction), ürün ve hizmetlerin müşteri beklentilerini ne ölçüde karşıladığının veya aştığının ölçüsüdür. Hizmet işinde genellikle anketle toplanır ve bu konunun ele aldığı üç yaygın biçimi vardır:

- **Müşteri memnuniyeti puanı (CSAT):** belirli bir etkileşimin veya hizmetin, genellikle beş basamaklı bir ölçekte verilmiş derecelendirmesidir; memnun yanıtların payı olarak raporlanır.
- **Net tavsiye puanı (NPS):** yanıt verenin bir şirketi, ürünü veya hizmeti tavsiye etme olasılığına ilişkin tek bir soruya dayanır. 9 veya 10 yanıtı verenler destekçi, 0 ile 6 arasında yanıt verenler eleştirmendir; puan, destekçi yüzdesi eksi eleştirmen yüzdesidir. [Net tavsiye puanı](https://en.wikipedia.org/wiki/Net_promoter_score), Fred Reichheld'in 2003 tarihli bir *Harvard Business Review* makalesiyle yaygınlaşmıştır.
- **Müşteri çaba puanı (CES):** bir işi tamamlamak için ne kadar çaba gerektiğinin veya işin ne kadar kolay olduğunun derecelendirmesidir. Yazarları, çabayı azaltmanın sadakati, insanları memnun etmekten daha iyi öngördüğünü savunmuştur. Bu savı kendi bağlamınızda sınanacak bir hipotez olarak ele alın, kesinleşmiş bir olgu olarak değil.

Kurum içi BT ortamında “müşteri” bir meslektaştır ve anket, bir kayıttan veya yayından sonra sorulan kısa bir sorudur. İlkeler aynıdır, etik yükümlülükler ise daha büyüktür; çünkü sorduğunuz insanlar yarın sizinle çalışacaktır.

Anketler, [anket metodolojisi](https://en.wikipedia.org/wiki/Survey_methodology) alanının bir biçimidir. Bu alan, soru ifadesinin, zamanlamanın ve örneklemenin yanıtları nasıl değiştirdiğine dair onlarca yıllık bulgulara sahiptir. Bunu atlayan takımlar, hizmet kalitesiyle ilgisiz nedenlerle oynayan puanlar üretme eğilimindedir. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law) kaynaklı koruma önlemi burada daha da güçlü geçerlidir: personel yüksek puan için ödüllendirildiğinde, o puanı istemeyi öğrenir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Bu konu size tanımları, veri hijyenini ve memnuniyet ölçümlerini dürüst tutan alışkanlıkları sunar. Sonraki konu bunları deneyimin daha bütünlüklü bir görünümüne doğru genişletir (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”).

## Temel ilkeler

- **Belirli bir ana ilişkin sorun.** Kapanmış bir kayda veya bir yayına bağlı anket, genel bir yıllık sorudan daha keskin yanıtlar verir.
- **Kısa tutun.** Bir derecelendirme ve bir açık yorum, çoğu insanın atladığı on sorudan daha iyidir.
- **Yorumları okuyun.** Puan ne kadar olduğunu, sözcükler ise nedenini söyler.
- **Kimin yanıt verdiğini raporlayın.** Yanıt oranı ve yanıtlayıcı karışımı olmayan bir puan, söylentidir.
- **Döngüyü kapatın.** Kötü deneyim bildiren insanlar geri dönüş almalıdır.
- **Zaman içinde kendinizle karşılaştırın.** Şirketler arası kıyas ölçütleri yöntem, hedef kitle ve kültür farklarını gizler.
- **Yanıtlayanları koruyun.** Yalnızca ihtiyacınız olanı toplayın, nasıl kullanılacağını söyleyin ve bireyleri bu puanlara göre sıralamayın.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Tanımlı bir etkileşim türü için memnun yanıtların payı | beş basamaklı ölçekte 4 veya 5 verilen yanıtlar / geçerli yanıtlar | yüzde | Kayda veya yayına bağlı etkileşim sonrası anket | Hizmet masası; olay yönetimi; hizmet düzeyi yönetimi | Paydaş gözden geçirme geri bildirimi | Haftalık veya aylık |
| NPS | Tanımlı bir hizmet ve hedef kitle için destekçiler eksi eleştirmenler | 9 veya 10 yanıtı verenlerin yüzdesi eksi 0 ile 6 arasında yanıt verenlerin yüzdesi | puan, aralık -100 ile 100 | Sabit aralıkla gönderilen ilişki anketi | Sürekli iyileştirme; hizmet düzeyi yönetimi | Ürün sonucu gözden geçirmesi | Üç aylık |
| CES | Bir işi yapmanın ne kadar kolay olduğuna ilişkin ortalama veya olumlu pay derecelendirmesi | olumlu yanıtlar / geçerli yanıtlar veya ortalama derece | yüzde veya ortalama | Kayda, talebe veya yayına bağlı etkileşim sonrası anket | Hizmet talebi yönetimi; hizmet masası | İyileştirme oturumlarında kullanılabilirlik geri bildirimi | Aylık |
| Anket yanıt oranı | Davet edilen kullanıcılardan yanıt verenlerin payı | alınan yanıtlar / teslim edilen anketler | yüzde | Anket aracı ve kayıt sistemi | Ölçüm ve raporlama | Gözden geçirmelerde geri bildirime katılım | Aylık |
| Yanıtlayan kapsamı | Yanıtlayanların karışımının, kullanıcı nüfusuna kabul edilen boyutlarda ne kadar yakın olduğu | her gruptaki yanıtlayanların payı ile o gruptaki kullanıcıların payının, grup başına karşılaştırması | yüzde puanı | Kullanıcı dizinine veya kayıt verisine bağlanan anket aracı | Ölçüm ve raporlama | Paydaş haritası | Üç aylık |
| Yorum tema payı | Serbest metin yorumlarının her temaya atanan payı | temadaki yorumlar / kodlanan yorumlar | yüzde | Kodlanmış anket yorumları | Sürekli iyileştirme | Geriye dönük değerlendirme temaları | Aylık |
| Eleştirmen takip süresi | Düşük bir derecelendirmeden kullanıcıyla belgelenmiş bir iletişime kadar geçen süre | takip notunun zaman damgası eksi düşük derecelendirmenin zaman damgası, medyan ve 85. yüzdelik | saat veya gün | Anket aracı ve kayıt sistemi | Olay yönetimi; sürekli iyileştirme | Çalışma anlaşmasındaki geri bildirim döngüsü | Aylık |

Saatler ve sınırlar önemlidir. CSAT ve CES yalnızca belirli etkileşime verilen yanıtları sayar, genel ruh halini asla. Eleştirmen takip süresi, düşük derecelendirmenin kaydedildiği anda başlar, birinin onu ilk okuduğu anda değil. Test kayıtlarını ve ölçülen takımın üyelerinden gelen yanıtları dışarıda bırakın.

## Öneriler

### Aracı tasarlayın

**1. Her amaç için tek bir soru seçin.** Bir etkileşimin nasıl geçtiğini öğrenmek için etkileşimden sonra CSAT, kullanıcının yapmak zorunda kaldığı bir işin ardından sürtünmenin nerede olduğunu öğrenmek için CES, genel ilişkiyi öğrenmek için düzenli aralıklarla NPS kullanın. Üçünü tek bir formda karıştırmak anket yorgunluğuna ve bulanık sonuçlara yol açar. Yalnızca birini karşılayabiliyorsanız, vermeniz gereken karara uyanı seçin.

**2. Tarafsız ve belirli bir ifade yazın.** “İsteğiniz ne kadar iyi ele alındı, memnun kaldınız mı?” sorusu, “Hizmetimiz ne kadar harikaydı?” sorusundan iyidir. Hız ve güler yüzlülüğü aynı anda soran çift namlulu sorulardan kaçının. Tutarlı bir ölçek sunun, uçlarını etiketleyin ve yanıtların sırasını her seferinde aynı tutun. [Likert ölçeği](https://en.wikipedia.org/wiki/Likert_scale) yaygın bir tasarımdır ve etiketlerdeki küçük değişiklikler sonuçları kaydırabilir; bu yüzden onları gelişigüzel değiştirmeyin.

**3. Bir açık soru ekleyin.** “Derecelendirmenizin başlıca nedeni nedir?” sorusu yanıtlayana az maliyetlidir ve takıma en zengin veriyi verir. Yorumlar puanı açıklar, sayıların gösteremediği sorunları ortaya çıkarır ve çalışanlara öğrenecek bir şey sunar. Onları düzenli bir gözden geçirmede, mümkünse sesli okuyun.

**4. Anketi olaya yakın zamanlayın.** Soruyu, kayıt çözüldükten veya yayın yapıldıktan kısa süre sonra, hafıza tazeyken gönderin. Yüksek not umut eden bir çalışanın kapanış anında göndermesine izin vermeyin. Sistem tarafından belirlenen kısa bir gecikme, yanıtı yönlendirme cazibesini ortadan kaldırır.

### Sayıları güvenilir kılın

**5. Her puanın yanında yanıt oranını ve yanıtlayıcı karışımını raporlayın.** Kullanıcıların yüzde 4'ünden gelen bir memnuniyet puanı, yalnızca yanıt verenler hakkında bir ifadedir. Kimin yanıt verdiğini kimin davet edildiğiyle, bölge, hizmet veya talep türü gibi elinizde zaten bulunan özellikleri kullanarak karşılaştırın. Büyük farklar, puanın bir uyarı etiketine ihtiyaç duyduğu anlamına gelir. Temsil gücü, [yanıt yanlılığı](https://en.wikipedia.org/wiki/Response_bias) araştırmalarının temel temasıdır; bir hizmet takımı için mesele yalnızca bakmaktır.

**6. Belirsizliği gösterin.** Küçük örneklemler geniş aralıkta salınır. Aylık CSAT'ın yanında gösterilen bir [hata payı](https://en.wikipedia.org/wiki/Margin_of_error) veya [güven aralığı](https://en.wikipedia.org/wiki/Confidence_interval), takımın gürültüye tepki vermesini önler (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). Bir takımın bir dönemde birkaç düzineden az yanıtı varsa yüzde değil sayı raporlayın ve yorumları okuyun.

**7. Kimin sorulacağını seçmekten kaçının.** Kaydı kapatan kişi anketin gönderilip gönderilmeyeceğine karar veriyorsa, puanlar yanlış nedenle yükselir. Anketi uygun her etkileşime otomatik olarak, hacim yüksekse rastgele bir örnekleme gönderin. Kuralı, olası dışlamalarla birlikte metrik sicilinde belgeleyin.

**8. Bir kişinin memnuniyetini, bir kişinin performansından ayırın.** Memnuniyet, tek bir çalışanın denetlemediği etkenlere bağlıdır: ürünün kalitesi, kuyruk, politika, kullanıcının ruh hali. Çalışanları CSAT'a göre sıralamayın. Onu takım ve hizmet düzeyinde kullanın; yorumları ise çalışanın memnuniyetle karşıladığı koçluk görüşmeleri için kullanın.

### Duyduklarınıza göre harekete geçin

**9. Mutsuz kullanıcılarla döngüyü kapatın.** Kötü deneyim bildiren insanlarla iletişime geçin, neyin yardımcı olacağını sorun ve öğrendiklerinizi kaydedin. Takip süresi için bir hedef belirleyin ve takibi, puanı değiştirme talebi olarak değil, bir görüşme olarak yürütün. İstek üzerine puan değiştirmek bir çarpıtmadır; bu nedenle takip, sorunu çözmeyi ve öğrenmeyi amaçlamalıdır.

**10. Yorumları temalara kodlayın ve izleyin.** “Kendimi tekrar etmek zorunda kaldım”, “yavaş yanıt”, “çözüm kalıcı olmadı”, “belirsiz iletişim” ve “güler yüzlü ve yardımsever” gibi kısa bir tema listesi üzerinde anlaşın. Her ay bir örneklemi elle veya bir araçla kodlayın ve sonuçları bir kişiye kontrol ettirin. Temalardaki eğilimler, bir puan değişmeden önce sorunları sıklıkla gösterir.

**11. Memnuniyeti operasyonel verilerle ilişkilendirin.** CSAT'ı çözüm süresi, yeniden açılma oranı ve sorun başına temas sayısıyla karşılaştırın. Bu çiftler, hızın memnuniyet satın alıp almadığını veya takımın hızlı ama yanlış olup olmadığını söyler. Onları bir kuralı kanıtlamak için değil, araştırılacak hikâyeleri bulmak için kullanın.

**12. Kıyas ölçütlerine dikkatle yaklaşın.** Memnuniyet puanları için yayımlanmış veya satıcı tarafından sağlanan rakamlar yönteme, hedef kitleye ve bölgeye bağlıdır; kendi geçmişiniz daha iyi bir karşılaştırma ölçütüdür. Harici bir karşılaştırma kullanırsanız kaynağını, yöntemini ve tarihini belirtin; yönteminizle uyuşup uyuşmadığını sınamadan ondan bir hedef belirlemeyin. Asla bir kıyas ölçütü uydurmayın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oynanır | Eşlenen koruma metriği veya uygulaması |
| --- | --- | --- |
| CSAT | Çalışanlar kullanıcıları en yüksek notu vermeye yönlendirir; anketler yalnızca kolay kayıtlardan sonra gönderilir; zor kayıtlar anketsiz kapatılır | Uygun her kayda otomatik anket; yanıt oranı ve yanıtlayıcı karışımı; yeniden açılma oranı |
| NPS | Yalnızca dost kullanıcıları anketlemek; anketi iyi bir olaydan sonraya zamanlamak; yüz yüze sormak; ölçek noktalarını yeniden etiketlemek | Sicilde sabit hedef kitle ve takvim; yanıtlayan kapsamı; eleştirmenlerin yorumlarını okuma |
| CES | İşi başka yere kaydıracak biçimde formdan adım çıkarmak; yalnızca sorunsuz taleplerden sonra sormak | Sorun başına temas sayısı; talep karşılama süresi ve yeniden iş (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”) |
| Anket yanıt oranı | Yalnızca yanıt vermesi olası kişileri davet etmek; anketi her seferinde farklı bir listeye göndermek | Yazılı davet kuralı; davetlileri kullanıcı nüfusuyla karşılaştırma |
| Yanıtlayan kapsamı | Ulaşılması zor grupları karşılaştırmadan çıkarmak; söylemeden yeniden ağırlıklandırmak | Boyutları ve yöntemi yayımlama; ağırlıklandırılmamış sonucu ağırlıklandırılmışın yanında gösterme |
| Yorum tema payı | Kötü temalardan kaçınmak için yorumları kodlamak; hiçbiri büyük görünmesin diye temaları birleştirmek | Bir örneği ikinci bir kişinin kodlaması; tema listesini kararlı tutma ve değişiklikleri kaydetme |
| Eleştirmen takip süresi | Kullanıcıyla iletişime geçmeden not girmek; daha iyi bir puan istemek için kullanıcıyla iletişime geçmek | Takip notlarının içeriğini kontrol etme; sonraki ankette kullanıcıya biri onlarla iletişime geçti mi diye sorma |

Sağlıklı bir okuma şudur: kararlı bir yanıt oranı, kullanıcı karışımına yakın bir yanıtlayıcı karışımı, kullanıcıların yorumlarda anlattığı deneyimle birlikte hareket eden bir puan ve birinin kendilerine geri döndüğünü söyleyen mutsuz kullanıcılar.

## Ödünleşimler: artılar ve eksiler

| Ölçüm | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| CSAT | Basit, hızlı, belirli bir ana bağlı | Kolayca şişirilir; tüm ilişki hakkında az şey söyler |
| NPS | Tek soru, zaman içinde izlemesi kolay | Nedenleri gizler; tek sayı geniş bir dağılımı sıkıştırır; kültürel farklar ölçeği etkiler |
| CES | Takımın giderebileceği sürtünmeyi doğrudan gösterir | Daha az bilinir; kanıtlar tartışmalıdır |
| Yıllık uzun anket | Zengin, birçok hizmeti kapsar | Yavaş, düşük yanıt, harekete geçmesi zor |
| Yalnızca yorumlar | Somut, akılda kalıcı | Zaman içinde karşılaştırması zor; en gür seslere açık |
| Davranışsal sinyaller | Anket yükü yok; nesnel | Duyguları yakalamaz; nedeni yanlış okuyabilir |

Pratik yanıt, kısa bir etkileşim anketini, ara sıra yapılan bir ilişki anketini ve yorumları birleştirmek ve üçünü de operasyonel verilerle birlikte okumaktır. Memnuniyet ölçümleri, kullanıcılarla takım arasında bir konuşma olarak işe yarar. Bir skor tablosu olarak başarısız olur.

## Takımınızla tartışılacak sorular

**1. Düşük bir puanla ve yüksek bir puanla ne yapıyoruz?**
Takımdan, düşük bir puanın en son ne zaman bir değişikliğe yol açtığını uygulamada anlatmasını isteyin. Sonra aynısını yüksek bir puan için sorun. Yanıtlar belirsizse anket bir ritüeldir. Kolaylaştırıcı, veriden bir eyleme somut bir bağ aramalı ve bu bağın kaydedileceği tek bir yer üzerinde anlaşmalıdır.

**2. Anketlerimizi kim yanıtlıyor, kim yanıtlamıyor?**
Takımdan, kendilerinden en az haber aldıkları kullanıcı gruplarını adlandırmasını isteyin. Davet listesi ve kullanıcı dizini ile karşılaştırın. Konuşma, çoğunlukla en sessiz kullanıcıların en zor sorunlara sahip olduğunu ortaya çıkarır. Bu çeyrekte sessiz bir gruba ulaşmanın tek bir yolu üzerinde anlaşın; örneğin kısa bir görüşme veya farklı bir kanal.

**3. Etkileşimin hangi aşamasında soruyoruz ve kim karar veriyor?**
Çözümden ankete uzanan yolu adım adım izleyin. Bir kişinin anketin gönderilip gönderilmeyeceğini, ne zaman veya nasıl gönderileceğini etkileyebildiği her noktayı bulun. Bu noktalardan hangilerinin otomatikleştirileceği üzerinde anlaşın. Kolaylaştırıcı, bir çalışanın puanı korumak için ne yapabileceğini suçlama olarak değil, bir tasarım sorusu olarak sorabilir.

**4. Bir eleştirmen yanıt verdikten sonra bizden ne duyuyor?**
Yakın zamandaki birkaç düşük derecelendirmeye bakın ve takip notlarını okuyun. Kullanıcının kendini dinlenmiş hissedip hissetmeyeceğini sorun. Değiştirilmiş bir derecelendirme istemeden takibin nasıl yararlı kılınacağını tartışın. Takibin sahibini ve hedef süresini belirleyin.

**5. Geçen aydan hangi yorumlar yaptıklarımızı değiştirdi?**
Rastgele on yorumu yazdırın veya gösterin. Takıma hangilerine göre hareket edildiğini, hangilerine edilmediğini ve nedenini sorun. Bu, odağı sözcüklerde tutar ve onları okuma alışkanlığı oluşturur. Gelecek ay için temaları kodlamak ve eğilimi gözden geçirmek üzerinde anlaşın.

**6. Kendimizi hangi yayımlanmış rakamla karşılaştırmaya meyilliyiz ve bu karşılaştırma adil mi?**
Rakamı, kaynağını, yöntemini ve hedef kitlesini adlandırın, sonra her birini kendinizinkiyle karşılaştırın. Bunun bir kararı değiştirip değiştirmeyeceğini sorun. Değiştirmeyecekse kenara bırakın ve kendi eğiliminizi kullanın. Kolaylaştırıcı yanıtı metrik siciline kaydetmelidir.

## Dört bakış açısı

### Ürün ve teslimat takımları

Ürün takımları, neyi düzelteceklerine veya sırada neyi geliştireceklerine karar vermek için memnuniyet geri bildirimini kullanır; bir yayından sonraki kısa anketler, bir sonraki üç aylık gözden geçirmeden daha hızlı bir okuma verir. Teslimat takımları yorumları birikim listesi kalemlerine bağlamalı, kullanıcılara neyin değiştiğini göstermeli ve puanı bir teslimat hedefi olarak görmekten kaçınmalıdır. Bir yayından sonra çaba veya kafa karışıklığı yorumlarındaki artış, ankete değil yayına bakmak için bir sinyaldir.

### Hizmet ve operasyon takımları

Hizmet masaları etkileşim verisinin çoğunu toplar ve puanın baskısını en çok onlar hisseder. Operasyon takımları anketleri otomatik göndermeli, örnekleme kuralını yayımlamalı ve yorumları takım öğrenmesi için kullanmalıdır. CSAT'ı yeniden açılma oranının ve tekrarlanan temasların yanında tutmalıdır; böylece hızlı kapanışlar iyi sonuç gibi görünmez (bkz. Konu 3.1 “Hizmet masası metrikleri”).

### Liderlik ve yönetişim

Liderler oynama iklimini belirler. “Yıl sonuna kadar yüzde 95 memnuniyet” talebi, personele sayıyı korumayı öğretir. Liderler yanıt oranını, yanıtlayıcı karışımını ve başlıca yorum temalarını istemeli, yorumların ortaya çıkardığı düzeltmeleri finanse etmeli ve memnuniyeti bireysel ücretten ve sıralamadan uzak tutmalıdır. Yönetişim, dışarıya raporladığı her rakam için belirtilmiş bir yöntem beklemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar zamanlarını ve içtenliklerini verir. Kısa bir ankete, sormanın açık bir gerekçesine, yanıtlarının nasıl kullanılacağına dair bir söze ve bir sorun bildirdiklerinde bir yanıta layıktırlar. Anket anonim değilse bunu söyleyin. Hiçbir şeyin değişmediğini gören kullanıcılar yanıt vermeyi bırakır ve bu sessizlik memnuniyet gibi görünür.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı bir hizmet masası ve klinik uygulamalar geliştiren küçük bir takım işletir. Aşağıdaki sayılar açıklayıcıdır (illustrative).

Hizmet masasının aylık CSAT değeri yüzde 92'dir ve yaklaşık 3.100 kapatılan kayıttan 140 yanıta göre hesaplanmıştır; yanıt oranı yüzde 4,5'tir. Liderlik memnundur. Hizmet yöneticisi yorumları okur ve olumlu yanıtların çoğunun idari personelden geldiğini, gece vardiyasındaki hemşirelerin ise neredeyse hiç görünmediğini fark eder. Yanıtlayıcı karışımını kullanıcı dizini ile karşılaştırır ve gece vardiyası personelinin kullanıcıların yaklaşık yüzde 18'ini, yanıtlayanların ise yüzde 3'ünü oluşturduğunu bulur.

Takım üç değişiklik yapar. Anket, bir derecelendirme ve bir yorumdan oluşan iki soruluk bir forma dönüşür ve kayıt sistemi tarafından, her kayıt için çözümden dört saat sonra otomatik gönderilir. Vardiyalı çalışanlara kısa mesaj sürümü sunulur. Aylık rapor artık CSAT'ı yanıt oranı, güven aralığı, kullanıcı karışımına karşı yanıtlayıcı karışımı ve en önemli beş yorum temasıyla birlikte gösterir.

İki ay içinde yanıt oranı yaklaşık yüzde 11'e yükselir ve CSAT yüzde 84'e düşer. Yorum temaları, klinik sistemlerde yoğunlaşan en büyük iki şikâyet olarak “geri aramak zorunda kaldım” ve “çözüm kalıcı olmadı” konularını gösterir. BT başkanı yönetim kuruluna eski puanın kimin yanıt verdiğini yansıttığını, yeni puanın daha iyi bir rehber olduğunu söyler. Ürün takımı, geri aramaların ardındaki yinelenen arızayı gidermek için birikim listesine bir kalem ekler ve hizmet masası 1 veya 2 puan veren her kullanıcıyla bir iş günü içinde iletişime geçmeye başlar. Sonraki çeyrekte klinik sistemler için tekrar temas oranı düşer ve “geri aramak zorunda kaldım” yorumlarının payı da onunla birlikte düşer. Takım kararı günlüğüne kaydeder ve bir CSAT hedefi belirlemez.

## Sektör mercekleri

**Girişim (startup).** Kullanıcılarla yakın temas, başlangıçta kısa görüşmeleri anketlerden daha iyi kılar. Hacim büyüdüğünde tek soruluk bir anket ekleyin ve her yorumu okumaya devam edin. Anlamlı olacak kadar yanıtınız olmadan bir puan yayımlama dürtüsüne direnin.

**Küçük işletme.** Tek bir mutsuz müşteri bir puandan daha önemli olabilir. Anketi insanlarla konuşmak için bir vesile olarak kullanın ve takiplerin kayıtlarını tutun. Satıcının sağladığı memnuniyet raporları, yöntem konusunda kuşkuyu hak eder.

**Kurumsal.** Ölçek, segmentleri ve toplulaştırma cazibesini getirir. Puanları hizmete ve hedef kitleye göre ayrı tutun, yöntemi yayımlayın ve birbirine benzemeyen hizmetleri tek bir sayıda ortalamaktan kaçının. Otomatik göndermesi olan kararlı bir anket platformu kullanın ve takımlar arası her sıralamaya dikkatle yaklaşın.

**Kamu sektörü.** Kamu kurumlarının kullanıcı geri bildirimi toplama ve sonuçları yayımlama konusunda çoğunlukla resmî yükümlülükleri vardır; erişilebilirlik ve gizlilik yükümlülükleri de buna eşlik eder. Erişilebilir anket kanalları sunun, yanıtlayanların kimliğini koruyun ve yöntemleri sonuçlarla birlikte yayımlayın. Bir memnuniyet rakamı bir sözleşmede veya yasal bir raporda yer aldığında, onu tam olarak tanımlayın ve yanında koruma önlemini gösterin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Doğrudan maliyetler, birçok kayıt sisteminin zaten içerdiği anket araçları, yorumları gözden geçirmek ve temaları kodlamak için ayda bir iki saat ve mutsuz kullanıcılarla takip için harcanan zamandır. Daha büyük maliyet, duyduklarınıza göre harekete geçme disiplinidir. Başlamak için yeni bir platforma gerek yoktur.

Getiri, kullanıcıların değer verdiği düzeltmeler ve önlenen israf olarak ortaya çıkar. Yorumlar sürtünmenin nerede olduğunu söyler; böylece onları yönetmek için personel eklemek yerine tekrarlanan temasların ve başarısız düzeltmelerin nedenlerini giderebilirsiniz. Kimin yanıt vermediğine dair daha iyi bir görünüm, sizi kendi kendini seçmiş birkaç kişiye dayalı kararlardan korur. Faydayı bulunan ve giderilen sorunlar cinsinden anlatın ve öncesinde ve sonrasında kendi başlangıç değerlerinizi ölçün: tekrar temas oranı, yeniden açılma oranı ve ilk yararlı yanıta kadar geçen süre. Programı gerekçelendirmek için uydurma bir yüzde kullanmayın. Rakamlara ihtiyacınız varsa, onları kendi verilerinizden oluşturun.

## Anti-desenler ve tuzaklar

- **Puanı hedef olarak görmek.** Kimin sorulacağını seçerek veya yanıtı yönlendirerek karşılanır. Onu bir soru olarak kullanın ve yorumlarla ve operasyonel ölçümlerle eşleştirin.
- **Yalnızca kolay kayıtlardan sonra anket yapmak.** Uygun her etkileşime otomatik olarak gönderin.
- **Çalışanları CSAT'a göre sıralamak.** Zor vakaları üstlenenleri cezalandırır. Takım ve hizmet görünümlerini kullanın ve yorumlardan öğrenin.
- **Daha iyi bir puan istemek.** Düşük bir derecelendirmenin takibi sorunu çözmeyi amaçlamalıdır. Değişiklik talep etmeyin.
- **Yanıt oranı olmadan puan raporlamak.** Her zaman kimin ve kaç kişinin yanıt verdiğini gösterin.
- **Soruyu değiştirip eğilimi korumak.** Değişiklikleri kaydedin ve grafikte kırılmayı işaretleyin.
- **Yöntemi olmadan kıyas ölçütü içe aktarmak.** Önce kendi geçmişinizle karşılaştırın.
- **Yorumları toplayıp hiç okumamak.** Takvime bir gözden geçirme koyun ve bir sahip atayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Araç ve örnekleme | Ara sıra, planlanmamış anket | Bazı hizmetler için anket var, elle gönderiliyor | Uygun tüm etkileşimlere otomatik gönderilen kısa anket | Örnekleme kuralı, ifade değişiklikleri ve dışlamalar kaydedilip gözden geçiriliyor | Araçlar takımlar ve tedarikçiler arasında hizalanmış ve kullanıcılarla birlikte gözden geçiriliyor |
| Veri kalitesi | Yalnızca puan | Yanıt oranı raporlanıyor | Yanıt oranı, yanıtlayıcı karışımı ve belirsizlik raporlanıyor | Yanıtlayan kapsamı yönetiliyor; kodlama ikinci bir kişi tarafından kontrol ediliyor | Hizmetler arasında paylaşılan deneyim görünümü, yorumlamada kullanıcıların katılımıyla |
| Eylem ve takip | Puanlar raporlanıyor, hiçbir şey değişmiyor | Yorumlardan ara sıra düzeltmeler | Hedef süreli eleştirmen takibi; temalar izleniyor | Temalar finanse edilmiş iyileştirme çalışmasını yönlendiriyor ve operasyonel verilere bağlı | Kapalı döngü takımları ve tedarikçileri kapsıyor; kullanıcılar neyin değiştiğini görüyor |

## Kontrol listesi

- [ ] Her anketin belirtilmiş tek bir amacı ve beslediği tek bir kararı var.
- [ ] Sorular kısa, tarafsız ve bir açık yorum içeriyor.
- [ ] Anket, uygun her etkileşime veya belgelenmiş rastgele bir örnekleme otomatik olarak gönderiliyor.
- [ ] Yanıt oranı ve yanıtlayıcı karışımı her puanın yanında gösteriliyor.
- [ ] Belirsizlik gösteriliyor ve küçük örneklemler sayı olarak raporlanıyor.
- [ ] Hiçbir çalışan memnuniyete göre sıralanmıyor.
- [ ] Adı belli bir kişi, düşük derecelendirmeleri kararlaştırılan süre içinde takip ediyor.
- [ ] Yorumlar kararlı bir tema listesine kodlanıyor ve aylık gözden geçiriliyor.
- [ ] İfade ve örnekleme değişiklikleri kaydediliyor ve grafiklerde işaretleniyor.
- [ ] Yanıtlayanlara yanıtlarının nasıl kullanıldığı söyleniyor ve kişisel veriler korunuyor.

## Yapay zekâ istemleri

**Bir anket aracını gözden geçirin.**

```text
[kurum türü] için [hizmet veya takım] yönetiyorum. [olay] sonrasında [hedef
kitle] kullanıcılarını şu ifadeyle anketliyoruz: [soruları ve ölçeği yapıştırın].
Bunu yönlendirici dil, çift namlulu sorular, belirsiz ölçekler ve yanıtlayana
getirdiği yük açısından gözden geçirin. Bir derecelendirme ve bir açık yorumu
koruyan daha kısa bir sürüm önerin. Kıyas değerleri uydurmayın ve atıf
yapamayacağınız araştırma sonuçlarını iddia etmeyin. Varsayımlarınızı ve
metinden yargılayamadığınız şeyleri listeleyin.
```

**Anket yorumlarını temalara kodlayın.**

```text
[dönem] için [hizmet] ile ilgili, anonimleştirilmiş [sayı] anket yorumu burada:
[kişisel veriler çıkarılmış yorumları yapıştırın]. Kısa bir tema listesi (en
fazla sekiz) önerin ve her yorumu bir temaya atayın; belirsiz olduğu yerlerde
güven notu ekleyin. Tema başına sayıyı ve tema başına üç temsili alıntıyı
raporlayın. Bireyleri tanımlamayın. Bu kodlamaya güvenmeden önce bir kişinin
neleri kontrol etmesi gerektiğini söyleyin ve varsayımlarınızı listeleyin.
```

**Temsil gücünü kontrol edin.**

```text
[davetli] davetten [yanıt] yanıt aldık. [boyut, örneğin bölge veya vardiya]
bazında yanıtlayanlar: [sayılar]. Aynı boyutta kullanıcı nüfusumuz: [sayılar].
İkisini karşılaştırın, yanıtlayıcı karışımının nerede farklılaştığını açıklayın
ve memnuniyet puanımıza hangi uyarıları eklememiz gerektiğini söyleyin.
Yeterince temsil edilmeyen gruplara ulaşmak için iki pratik yol önerin. Verinin
ötesinde nedenler çıkarımı yapmayın ve varsayımlarınızı listeleyin.
```

**Kapalı döngü bir takip planlayın.**

```text
[hizmet] içinde [eşik] veya daha düşük derecelendirme veren kullanıcıları takip
etmek için kısa bir süreç taslağı hazırlayın. Kimin onlarla iletişime
geçeceğini, ne kadar süre içinde, ne söyleneceğini, neyin kaydedileceğini ve
değiştirilmiş bir derecelendirme istemekten nasıl kaçınılacağını ekleyin.
Bağlam: [takım büyüklüğü, araçlar, çalışma saatleri]. Varsayımlarınızı ve
tanımlamadığım araçlara bağlı adımları listeleyin.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir memnuniyet metriğini yayımlamadan önce eşlenen koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakımcı becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): gözden geçirilmiş bir anket metriği kaydının oynama vektörünü ve koruma önlemini koruduğunu denetlemek için kullanın.

## Temel çıkarımlar

- Memnuniyet puanları bir hizmet anının nasıl hissettirdiğini anlatır; bu yüzden anketleri belirli olaylara bağlayın ve kısa tutun.
- Puanla birlikte her zaman yanıt oranını, yanıtlayıcı karışımını ve belirsizliği raporlayın.
- Yorumlar sayıları açıklar; bu yüzden onları her ay okuyun ve temalara kodlayın.
- Anketleri otomatik gönderin ve kullanıcılardan hiçbir zaman bir derecelendirmeyi değiştirmelerini istemeyin.
- Memnuniyeti takım ve hizmet düzeyinde kullanın, insanları sıralamak için asla; dış kıyas ölçütlerine dikkatle yaklaşın.
- Döngüyü kapatın: kötü deneyim bildiren insanlar geri dönüş almalı ve değişimi görmelidir.

## Kaynaklar ve ileri okuma

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
