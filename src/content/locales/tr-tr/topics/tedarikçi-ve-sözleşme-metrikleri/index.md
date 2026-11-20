# Tedarikçi ve sözleşme metrikleri

**Tedarikçiler hizmetinizin bir parçasıdır; bu yüzden neyi teslim ettiklerini, onlara ne kadar bağımlı olduğunuzu ve ayrılıp ayrılamayacağınızı ölçün, ilişkiyi cezalar ve sürprizler etrafında değil, ortak sonuçlar ve düzenli konuşma etrafında kurun.**

## Genel bakış ve motivasyon

Neredeyse hiçbir hizmet yalnızca tek bir takım tarafından kurulup işletilmez. Bulut sağlayıcıları onu barındırır, satıcılar yazılımı sağlar, yüklenicilerin personeli hizmet masasında çalışır, bir telekomünikasyon şirketi trafiği taşır ve bir ödeme ortağı parayı hareket ettirir. Bunlardan biri başarısız olduğunda kullanıcılarınız sizin başarısızlığınızla onlarınki arasında ayrım yapmaz. [Satıcı yönetimi](https://en.wikipedia.org/wiki/Vendor_management), tedarikçileri seçme, onlarla sözleşme yapma, izleme ve gerektiğinde onlardan çıkma disiplinidir. ITIL'in tedarikçi yönetimi uygulaması bunu, tedarikçilerin ve performanslarının hizmet sunumunu boşluk bırakmadan destekleyecek biçimde uygun şekilde yönetilmesini sağlamak olarak tarif eder.

[Dış kaynak kullanımı](https://en.wikipedia.org/wiki/Outsourcing) işi dış bir tarafa taşır, hesap verebilirliği taşımaz: kuruluş müşterilerine ve düzenleyicilerine karşı sorumlu olmaya devam eder. Bu nedenle sözleşmeler, sorumluluğun devri değil, eşgüdüm ve risk paylaşımı araçlarıdır. Çok sayıda tedarikçi söz konusu olduğunda [çoklu kaynak kullanımı](https://en.wikipedia.org/wiki/Multisourcing) ve [hizmet entegrasyonu ve yönetimi](https://en.wikipedia.org/wiki/Service_integration_and_management) (SIAM) uygulaması, kullanıcının tek bir hizmet görmesi için onları eşgüdümler. Bu konudaki ölçümler, o ağın sağlığını betimler.

Çevik değerler yararlı bir yönelim sunar. Çevik Manifesto, sözleşme pazarlığı yerine müşteri iş birliğini tercih ettiğini belirtir. Bu, gerçek risk ve para paylaştıran sözleşmeleri yok saymak anlamına gelmez. Tedarikçi ile müşterinin aynı sonuçlar üzerinde çalıştığı, bilgiyi erkenden paylaştığı ve öğrendikçe uyum sağladığı ilişkiler kurmak anlamına gelir. Ortak olarak görülen tedarikçiler size sorunları daha erken bildirir. Cezalardan korkan tedarikçiler onları saklar. Ölçüm, birinci örüntüyü desteklemelidir.

Tedarikçi ölçümünde dört sorun yinelenir.

- **Yeşil raporlar ve mutsuz kullanıcılar.** Bir tedarikçi sözleşmedeki her hizmet düzeyini karşılayıp yine de kötü bir deneyim sunabilir; hizmet düzeyi anlaşmalarına ilişkin önceki konu bu örüntüye karpuz etkisi der (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”). Sözleşme yazdığını ölçer, kullanıcılar ise daha geniş bir şey deneyimler.
- **Yoğunlaşma ve kilitlenme.** Tek bir tedarikçiye yoğun biçimde bağımlı olmak, o başarısız olana ya da fiyatlarını artırana kadar verimlidir. [Satıcıya kilitlenme](https://en.wikipedia.org/wiki/Vendor_lock-in) değişikliği pahalı kılar ve maliyet her entegrasyonla sessizce büyür.
- **Gizli bağımlılıklar.** Tedarikçilerinizin de tedarikçileri vardır. Bir [tedarik zinciri saldırısı](https://en.wikipedia.org/wiki/Supply_chain_attack), müşterilerine ulaşmak için güvenilen bir satıcıyı hedef alır ve bir alt yüklenicideki arıza, doğrudan tedarikçinizden hiçbir iletişim gelmeden size ulaşabilir.
- **Sonradan düşünülen çıkış.** Pek çok sözleşme, onları bitirmek için hiçbir plan olmadan imzalanır. Hiç test edilmemiş bir [çıkış stratejisi](https://en.wikipedia.org/wiki/Exit_strategy), gerektiğinde çalışmayabilir.

Bir diğer husus sözleşmenin biçimidir. [Performansa dayalı sözleşme](https://en.wikipedia.org/wiki/Performance-based_contracting) ödemeyi sonuçlara bağlar ve sonuçlar net ve ölçülebilir olduğunda çıkarları hizalayabilir. Ölçümler dar olduğunda manipülasyona da davetiye çıkarabilir. [Goodhart yasası](https://en.wikipedia.org/wiki/Goodhart%27s_law)ndan çıkan koruma önlemi her iki yönde de geçerlidir: tedarikçiler ölçülen hizmet düzeyini en iyiler, alıcılar ise raporladıkları tasarrufu en iyiler (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Bu konu önceki bölümün kayıtlarına, özellikle yazılım ve finansal verilere dayanır (bkz. Konu 7.2 “Yazılım varlığı ve lisans metrikleri” ve Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”) ve kamu kurumlarına sıklıkla düşen raporlama görevlerine hazırlık yapar (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## Temel ilkeler

- **Sorumlu olmaya devam edersiniz.** Sözleşmeler risk ve para paylaştırır; kullanıcılara ve düzenleyicilere karşı sorumluluğu devretmez.
- **Sözleşme koşullarının yanı sıra sonuçları ve deneyimi de ölçün.** Yeşil bir sözleşme raporu kötü bir hizmeti gizleyebilir.
- **Bağımlılıklarınızı bilin.** Kritik tedarikçileri, onların kilit alt yüklenicilerini ve onlara dayanan hizmetleri eşleyin.
- **Çıkışı imzalamadan önce planlayın.** Test edilmemiş bir çıkış planı bir umuttur.
- **Düzenli iş birliği yapın.** Sık ve açık yürekli ortak incelemeler, yıllık kriz toplantılarından iyidir.
- **Veriyi açıkça paylaşın.** Her iki taraf da aynı sayılardan yararlanır.
- **Tedarikçileri kritikliğe göre ayırt edin.** Yönetim emeğini, başarısızlığın en çok acıtacağı yere harcayın.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Tedarikçi hizmet düzeyi gerçekleşmesi | Bir tedarikçinin karşıladığı sözleşmeli hizmet düzeyi ölçümlerinin oranı, aynı hizmet için bir deneyim ölçümüyle eşlenmiş | dönemde karşılanan ölçümler / sözleşmeli ölçümler; hizmetin kullanıcı deneyimi puanının yanında raporlanır | yüzde | Tedarikçi raporları, kendi izlemeniz, anket verileri | Tedarikçi yönetimi; hizmet düzeyi yönetimi | Bir ortağın hedeflere katkısının incelenmesi | Aylık |
| Tedarikçiye atfedilen olay süresi | Bir tedarikçinin bileşenine veya eylemine atfedilen hizmet etkisi saatleri | bir tedarikçinin arızasının doğrulanmış neden olduğu olayların etki saatleri toplamı | saat | Neden analizli olay kayıtları, tedarikçi olay raporları | Olay yönetimi; tedarikçi yönetimi | Dış engellerde kaybedilen zaman | Aylık |
| Sözleşme kaydı kapsamı | Güncel bir sözleşmesi, adı belli bir iç sahibi ve planlanmış bir incelemesi olan tedarikçilerin oranı | üçüne de sahip tedarikçiler / kapsamdaki tedarikçiler | yüzde | Sözleşme kaydı, satın alma kayıtları | Tedarikçi yönetimi; finansal yönetim | Dış bağımlılıkların net sahipliği | Üç aylık |
| Durum tespiti güncelliği | Risk değerlendirmesi inceleme döngüsü içinde olan kritik tedarikçilerin oranı | döngü içinde değerlendirilen kritik tedarikçiler / kritik tedarikçiler | yüzde | Tedarikçi risk değerlendirmeleri | Tedarikçi yönetimi; risk yönetimi; bilgi güvenliği yönetimi | Risklerin düzenli incelenmesi | Üç aylık |
| Çıkış hazırlığı | Kararlaştırılan süre içinde test edilmiş, belgelenmiş bir çıkış planı olan kritik tedarikçilerin oranı | test edilmiş çıkış planı olan kritik tedarikçiler / kritik tedarikçiler | yüzde | Çıkış planları ve test kayıtları | Tedarikçi yönetimi; hizmet sürekliliği yönetimi | Bir bağımlılıktan toparlanmanın uygulanması | Yıllık |
| Yoğunlaşma | Test edilmiş alternatifi olmayan tek bir tedarikçiye bağımlı kritik hizmetlerin oranı | tek tedarikçi bağımlılığı olan ve test edilmiş alternatifi bulunmayan kritik hizmetler / kritik hizmetler | yüzde | Bağımlılık haritası, tedarikçi kaydı | Tedarikçi yönetimi; risk yönetimi | Tek hata noktasından kaçınma | Üç aylık |
| Ortak eylem kapatma oranı | Tedarikçilerle yapılan ortak incelemelerde kararlaştırılan eylemlerin vadesine kadar kapatılanlarının oranı | tarihine kadar kapatılan ortak eylemler / vadesi gelen ortak eylemler | yüzde | İnceleme tutanakları ve eylem izleyici | Tedarikçi yönetimi; sürekli iyileştirme | Teslim edilen retrospektif eylemleri | Üç aylık |

Kritikliği kayıtta ölçütleriyle birlikte tanımlayın ve tutarlı biçimde uygulayın. Bir hizmet düzeyi ölçümü sözleşmede tanımlandığı şekilde “karşılanmış” sayılır ve deneyim ölçümü, aynı hizmet için sizin seçtiğiniz ölçümdür. Tedarikçiye atfedilen olay süresi yalnızca doğrulanmış nedenleri sayar ve atfetme yöntemi mümkün olduğunda tedarikçiyle kararlaştırılır. Çıkış hazırlığı, bir planı ancak dönem içinde bir adım adım gözden geçirme veya tatbikat kaydedildiğinde test edilmiş sayar.

## Öneriler

### Tedarikçilerinizi ve onlara neyin bağlı olduğunu tanıyın

**1. Sahipleri ve kritikliğiyle bir tedarikçi kaydı tutun.** Sözleşmesi olan her tedarikçiyi, neyi sağladığını, iç sahibini, sözleşme tarihlerini ve kritikliği ile birlikte listeleyin. Takımlarınızın dayandığı ücretsiz veya gayri resmi hizmetleri de ekleyin. Kritiklik, tedarikçi başarısız olursa doğacak zarara dair bir yargıdır ve ilişkinin ne kadar yönetim ilgisi göreceğine karar verir.

**2. Kritik hizmetler için bağımlılık zincirini eşleyin.** Her kritik hizmet için, bağımlı olduğu tedarikçileri ve mümkünse onların kilit alt yüklenicilerini ve paylaşılan platformlarını listeleyin. İç bağlantılar için yapılandırma kayıtlarını kullanın ve tedarikçilerden kritik bağımlılıklarını isteyin (bkz. Konu 7.4 “Yapılandırma ve CMDB kalitesi metrikleri”). Harita, yoğunlaşma riskini gösterir ve başka bir yerdeki bir kesintinin size nerede ulaşacağını söyler.

**3. Riski orantılı biçimde değerlendirin.** Düşük riskli tedarikçiler için kısa, standart bir değerlendirme, kritik olanlar için güvenlik, dayanıklılık, mali istikrar ve uyumu kapsayan daha derin bir değerlendirme kullanın. Bir döngüyle ve bir şey değiştiğinde yeniden değerlendirin. Sonuçları tedarikçiyle paylaşın ve eylemler üzerinde anlaşın. ISO/IEC 27036 gibi standartlar, tedarikçi ilişkilerinde bilgi güvenliği konusunda rehberlik sunar.

### Sözleşmeleri sonuçlar ve iş birliği için yazın

**4. Kullanıcıların deneyimlediğini yansıtan hizmet düzeyleri tanımlayın.** Bileşen kullanılabilirliğinin yanı sıra, kullanıcıya dönük eylemin hızı gibi kullanıcı sonuçlarıyla ilişkili sözleşmeli ölçümleri ekleyin. Bunları kendiniz denetlemek için veriyi isteyin. Kimsenin doğrulayamadığı ya da kullanıcıların hissettiğiyle örtüşmeyen ölçümlerle yazılmış bir [hizmet düzeyi anlaşması](https://en.wikipedia.org/wiki/Service-level_agreement) karpuz etkisini üretir.

**5. Yalnızca cezalar yerine ortak hedefleri tercih edin.** Kaçırılan hedefler için kredi vermek yaygındır ve yeri vardır; ancak ağırlıklı olarak cezalar üzerine kurulu bir sözleşme ilişkiyi husumetli ve veriyi daha az dürüst kılar. Mümkün olduğunda ortak hedefleri, düzenli ortak incelemeleri ve iyileştirmeler için kazanç paylaşımını ekleyin. Teşviki, doğurabileceği yan etkiler açısından gözden geçirin.

**6. Çıkışı sözleşmede planlayın.** Kullanılabilir biçimlerde veri dışa aktarımını, geçiş sırasında desteği, makul bir bildirim süresini ve fikri mülkiyet ile yapılandırmaların sahipliği konusunda netliği ekleyin. Ayrılmanın neye mal olacağını sorun ve bunu yazın. Çıkış koşulu olmayan bir sözleşme sizi baskı altında pazarlık yapmaya bırakır.

### İlişkiyi yönetin

**7. Düzenli ortak incelemeler yapın.** Kritikliğe uygun bir ritimle buluşun; kısa ve standart bir gündemle: sonuçlar, olaylar, riskler, yaklaşan değişiklikler ve eylemler. Kendi ölçümlerinizi tedarikçiyle paylaşın ve onlarınkini isteyin. Eylemleri ve kapanışı izleyin. Toplantıya ortaklar arasında bir çalışma oturumu olarak yaklaşın ve işi yapan insanları davet edin.

**8. Olay bilgisini hızlı ve açıkça paylaşın.** Her tarafın diğerini nasıl ve ne kadar hızlı bilgilendireceği konusunda anlaşın ve önemli olayları ortaklaşa, suçlamasız biçimde inceleyin (bkz. Konu 3.4 “Büyük olay metrikleri”). En büyük etkinin nerede olduğunu görmek için tedarikçiye atfedilen olay süresini ölçün ve bunu bir sopa olarak değil, konuşmada kullanın.

**9. Sözleşme verisini kullanıcı deneyimiyle birleştirin.** Her kritik tedarikçi hizmeti için, sözleşmeli ölçümleri kullanıcılardan gelen memnuniyet veya çaba ölçümlerinin yanına koyun (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”). İkisi arasındaki uyumsuzluk, bir tartışmanın başlangıç noktasıdır.

**10. Tedarikçileri tek bir hizmet haline getirin.** Birkaç tedarikçi tek bir hizmete katkıda bulunduğunda, uçtan uca sonucun kimde olduğu, devir tesliminlerin nasıl işlediği ve kullanıcılarla kimin iletişim kurduğu konusunda anlaşın. SIAM uygulamaları bunu resmileştirir. Tedarikçiler arasındaki devir teslim gecikmesini ve tekrarlanan yükseltmeleri ölçün (bkz. Konu 9.3 “İş birliği ve devir teslim metrikleri”).

### Yoğunlaşmayı azaltın ve ayrılmaya hazırlanın

**11. Yoğunlaşmayı ölçün ve bilinçli karar verin.** Test edilmiş alternatifi olmayan tek bir tedarikçiye bağımlı kritik hizmetlerin oranını raporlayın. Yoğunlaşma bazen doğru seçimdir, çünkü sadelik ve pazarlık gücü getirir. Onu bir kaza değil, bir sahibi, bir maliyeti ve bir inceleme tarihi olan bir karar haline getirin.

**12. Çıkışı test edin.** Kritik tedarikçiler için çıkış planını tanımlı bir dönemde en az bir kez adım adım gözden geçirin: veriyi dışa aktarabilir misiniz, alternatif var mı, ne kadar sürer, ne bozulur? Bir masa başı tatbikatı boşlukları ucuza ortaya çıkarır. Sonuçları kaydedin ve boşlukları kapatın; mimari değiştiğinde planı güncelleyin.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşlenen koruma önlemi metriği veya uygulaması |
| --- | --- | --- |
| Tedarikçi hizmet düzeyi gerçekleşmesi | Tedarikçi olayları ölçümden dışlar; saat durdurulur; dar tanımlar | Kendi izlemeniz; deneyim ölçümü; dışlamaların denetimi |
| Tedarikçiye atfedilen olay süresi | Atfetmeye itiraz etmek; tedarikçi arızalarını müşteri tarafı olarak sınıflandırmak | Ortak neden incelemesi; anlaşmazlıklar için tarafsız gözden geçirici; itiraz edilen payı izlemek |
| Sözleşme kaydı kapsamı | Bilmeyen sahipleri adlandırmak; tarihsiz sözleşmeleri listelemek | Sahip doğrulaması; inceleme toplantılarının yapıldığını kontrol etmek |
| Durum tespiti güncelliği | Yalnızca anketle yapılan değerlendirmeler; tedarikçilerin kendi kendini belgelendirmesi | Kritik tedarikçiler için kanıt şartı; örnek doğrulama |
| Çıkış hazırlığı | Bir plan yazıp test edilmiş saymak; gerçek adımları olmayan tatbikatlar | Neyin uygulandığını kaydetmek; tatbikatın bağımsız incelenmesi |
| Yoğunlaşma | Bir tedarikçiyi kâğıt üzerinde birkaç tüzel kişiliğe bölmek | Nihai sağlayıcıya kadar bağımlılık haritası; paylaşılan platformları gözden geçirmek |
| Ortak eylem kapatma oranı | Kolay eylemler belirlemek; etkisi olmadan kapatmak | Eylem kalitesini gözden geçirmek; amaçlanan sorunun iyileştiğini kontrol etmek |

Sağlıklı bir okuma şudur: aktif sahipleri olan bir tedarikçi kaydı, kullanıcı deneyimiyle örtüşen hizmet düzeyleri, açıkça tartışılan olaylar, bilinçli seçilmiş yoğunlaşma ve uygulanmış çıkış planları.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yanı | Zayıf yanı |
| --- | --- | --- |
| Tek tedarikçi | Sadelik, pazarlık gücü, entegrasyon | Yoğunlaşma riski, kilitlenme |
| Birden çok tedarikçi | Dayanıklılık, seçenek | Entegrasyon maliyeti, eşgüdüm yükü |
| Ceza ağırlıklı sözleşme | Net çareler | Husumetli; sorunları gizler |
| Ortak hedeflerle ortaklık | Dürüst veri, daha hızlı öğrenme | Güven ve olgunluk gerektirir; daha az net çareler |
| Sonuca dayalı ödeme | Teşvikleri hizalar | Sonuçları tanımlamak ve ölçmek zor; manipülasyon |
| Girdiye dayalı ödeme | Basit, öngörülebilir | Emeği ödüllendirir, sonucu değil |
| Sık ortak incelemeler | Erken uyarı | Zaman maliyeti |
| Yalnızca yıllık incelemeler | Düşük maliyet | Sorunları yakalamada yavaş |

Düz yazıyla yanıt şudur: sözleşme çarelerini ciddi durumlar için saklayın, gündelik ilişkileri ortak sonuçlar ve açık veri etrafında kurun ve yoğunlaşmayı bilerek seçin. Yönetimin yoğunluğunu tedarikçinin kritikliğine uydurun.

## Takımınızla tartışılacak sorular

**1. Hangi tedarikçi arızası kullanıcılarımızı en çok incitirdi ve planımız nedir?**
En önemli üç bağımlılığı adlandırın. Her biri için, uzun süreli bir kesintide ne olacağını ve planın ne olduğunu sorun. Kolaylaştırıcı, planı, sahibi veya test edilmiş alternatifi olmayan bağımlılıkları aramalıdır. Önce üzerinde çalışılacak birini kararlaştırın.

**2. Yeşil bir sözleşme raporu, kullanıcıların bize söylediğiyle nerede çelişiyor?**
Bir tedarikçi hizmetini alın ve sözleşme ölçümlerini kullanıcı geri bildirimiyle karşılaştırın. Hangisinin daha güvenilir olduğunu ve nedenini sorun. Konuşma çoğu zaman yanlış şeyi ölçen bir hizmet düzeyi bulur. Bunu bir sonraki ortak incelemede gündeme getirmeyi kararlaştırın.

**3. Takımda her kritik tedarikçi ilişkisinin sahibi kim ve ne sıklıkla buluşuyorlar?**
Kaydı kontrol edin. Bir sahip aylardır tedarikçiyle buluşmadıysa nedenini sorun. En kritik olanlar için bir ritim ve standart bir gündem kararlaştırın.

**4. En büyük tedarikçimizden ayrılmak için ne gerekir?**
Çıkışın süresini, maliyetini ve riskini tahmin edin. Hangi verilerin, entegrasyonların ve becerilerin sizi bağladığını sorun. Bağımlılığın bilinçli bir seçim olup olmadığına ve neyin bunu değiştireceğine karar verin.

**5. Bir tedarikçinin olayını nasıl öğreniyoruz ve ne kadar hızlı?**
Son iki tedarikçi olayını ve başlangıçlarından sizin haberdar olmanıza kadar geçen süreyi gözden geçirin. Bildirim koşullarını kontrol edin. Paylaşılan durum akışları veya adı belli bir iletişim kişisi gibi iyileştirmeler üzerinde anlaşın.

**6. Tedarikçilerimizle neyi paylaşıyoruz ve onlar bizimle neyi paylaşıyor?**
Her tarafın sağladığı verileri listeleyin. Talep tahminleri ya da değişikliklerin önceden bildirilmesi gibi hangi ek paylaşımın yardımcı olacağını tartışın. Gizliliği göz önünde bulundurun ve başlamak için bir değişim üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları platformlar, bileşenler ve hizmetler için tedarikçilere bağımlıdır ve tedarikçi değişikliklerini doğrudan hisseder. Bağımlılıkları tasarımda görünür tutmalı, tedarikçilere talep değişikliklerini erkenden bildirmeli ve ortak incelemelere katılmalıdır. Hizmetlerine, örneğin geri dönüş çözümleriyle, dayanıklılık kazandırabilirler; böylece tek bir tedarikçi arızası her şeyi durdurmaz.

### Hizmet ve operasyon takımları

Operasyon takımları günlük ilişkiyi yönetir: olayları açar, performansı izler ve devir tesliminleri eşgüdümler. Tedarikçiye atfedilen etkiye ve her tedarikçiyle çalışma deneyimine dair kanıtı onlar tutar. Atfetmeyi dikkatle kaydetmeli, bildirim kanallarını çalışır tutmalı ve çıkış tatbikatlarına katılmalıdır.

### Liderlik ve yönetişim

Liderler sözleşmeleri imzalar ve riski kabul eder. Kritiklik, yoğunlaşma ve çıkış hazırlığı raporlarını istemeli, ortaklık beklentilerini belirlemeli ve tedarikçileri yalnızca fiyata göre seçmekten kaçınmalıdır. Yönetişim, kritikliğe orantılı durum tespitini ve çıkış planlarının test edildiğine dair kanıtı şart koşmalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar tedarikçi ağının birleşik sonucunu deneyimler. Bir tedarikçi sorunu onları etkilediğinde açık iletişime ve hangi tarafın kusurlu olduğundan bağımsız olarak tutarlı desteğe ihtiyaç duyarlar. Geri bildirimleri, raporlandığı biçimiyle tedarikçi performansının gerçeğe uyup uymadığının denetimidir.

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastane grubunun BT departmanı, bir barındırma sağlayıcısı, bir elektronik kayıt satıcısı, bir ağ operatörü ve yönetilen bir hizmet masası dahil yaklaşık 60 tedarikçiyle klinik sistemleri destekliyor. Aşağıdaki rakamlar açıklayıcıdır.

Kayıt sisteminin uzun bir kesintisinden sonra yönetim kurulu, bu tür kaç bağımlılık olduğunu soruyor. Satıcı yönetimi başkanı resmi çiziyor. Tedarikçi kaydı, bilinen 60 tedarikçinin 47'sini güncel bir sözleşme, bir sahip ve bir inceleme tarihiyle kapsıyor; yani yüzde 78 kapsam. Durum tespiti 14 kritik tedarikçinin 6'sı için güncel. 22 kritik hizmetin 9'u, test edilmiş alternatifi olmayan tek bir tedarikçiye bağımlı; yani yüzde 41 yoğunlaşma ve bu tedarikçilerden ikisi aynı barındırma platformunu paylaşıyor. Yönetilen hizmet masası yüzde 98 hizmet düzeyi gerçekleşmesi bildiriyor, oysa klinik personelin masadan memnuniyeti düşüyor ve aylık rapor, tedarikçinin ikinci hattını bekleyen olayların ölçülen yanıt süresinden dışlandığını gösteriyor. Son çeyrekte tedarikçiye atfedilen olay süresi toplam 53 saat; bunun dörtte üçü iki tedarikçiden geliyor. Kayıt satıcısı için çıkış planı kâğıt üzerinde var ve hiç uygulanmamış.

Satıcı yönetimi başkanı değişiklikler üzerinde klinik sistem sahipleri ve tedarikçilerle anlaşıyor. Kritik tedarikçiler, ortak bir gündem ve her iki taraftan verilerle üç ayda bir ortak inceleme alıyor. Hizmet masası sözleşmesi, çözüm süresini kullanıcının bakış açısından ölçecek şekilde değiştiriliyor ve tedarikçi kuyruk verilerini paylaşmayı kabul ediyor. Sözleşme ölçümlerinin yanına kısa bir deneyim anketi ekleniyor. Kritik tedarikçiler için durum tespiti, kanıt talepleriyle yıllık bir döngüye taşınıyor. Takım, kayıt satıcısı için bir masa başı çıkış tatbikatı yapıyor; bu tatbikat, veri dışa aktarım biçiminin denetim izini içermediğini ve alternatifin hazırlanmasının aylar süreceğini ortaya çıkarıyor. Bulgu bir sonraki sözleşme müzakeresine giriyor. Grup ayrıca tek tedarikçili dokuz bağımlılıktan hangilerinin bilerek kabul edileceğine, hangilerinin azaltılacağına karar veriyor.

Bir yıl sonra kayıt kapsamı yüzde 96, durum tespiti 14 kritik tedarikçinin 13'ü için güncel ve yoğunlaşma yüzde 27; kalan her durum kabul edilmiş bir karar olarak kaydedilmiş. Tedarikçiye atfedilen olay süresi çeyrekte 22 saate düşüyor. Hizmet masasının sözleşme ölçümü ve klinik memnuniyet puanı artık birlikte hareket ediyor. Finans direktörü, tüm tedarikçilerde kaçırılan her hizmet düzeyi için mali ceza getiren bir madde istiyor. Satıcı yönetimi başkanı, cezaların yalnızca kritik, güvenlikle ilgili ölçümler için, geri kalanı için ise ortak hedefler uygulanmasını öneriyor; genel cezaların tedarikçileri olayları saklamaya ve ölçüm üzerine tartışmaya ittiğini açıklıyor. Karar kaydediliyor ve sözleşme şablonu güncelleniyor.

## Sektör mercekleri

**Girişim.** Tedarikçiler çoğunlukla bulut ve hizmet olarak yazılım araçlarıdır. Sahipleri ve yenileme tarihleriyle bir liste tutun, her birinin hangi veriyi tuttuğunu bilin ve kritik verinin bir dışa aktarımını saklayın. Net dışa aktarım yolları olan tedarikçileri seçin, çünkü erken kilitlenme yaratması ucuz, geri almak ise pahalıdır.

**Küçük işletme.** Birkaç tedarikçi işi taşır ve sahibi çoğu zaman onları doğrudan yönetir. İletişim bilgilerini ve sözleşme koşullarını tek bir yerde tutun, durum ve olay güncellemeleri isteyin ve tedarikçinin dışında tutulan yedeklerden geri yüklemeyi test edin. Tedarikçideki tek bir kişiye bağımlılığı azaltın.

**Büyük kuruluş.** Çok sayıda tedarikçi ve katman; bir tedarikçi yönetimi işlevi, kritiklik katmanları ve güvenlik, dayanıklılık ve çıkış için standart sözleşme koşulları gerektirir. Tedarikçilerin birlikte çalışması gereken yerlerde SIAM tarzı eşgüdüm kullanın. Merkezi bir bağımlılık haritası tutun ve bunu risk ve süreklilik takımlarıyla paylaşın.

**Kamu sektörü.** Kamu alımları hukuku, rekabet kuralları ve şeffaflık gereksinimleri, tedarikçilerin nasıl seçildiğini ve yönetildiğini şekillendirir. Sözleşmeler uzun olabilir; kamuya raporlama görevleri ile egemenlik, erişilebilirlik ve çıkış gereksinimleri içerebilir. Kararları belgeleyin, tedarikçi performansını gerektiği gibi raporlayın ve yeniden ihale için plan yapın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler, tedarikçi sahiplerinin zamanı ve küçük bir eşgüdüm işlevi, bir kayıt ve bağımlılık verisi, değerlendirme emeği ve ortak incelemelerdir. Çıkış tatbikatları kritik tedarikçi başına birkaç saat ile birkaç gün arasında maliyetlidir. Araçlar, paylaşılan bir kayıt kadar basit olabilir.

Getiriler, tedarikçi kaynaklı daha az ve daha kısa olay, bilgili müzakereden daha iyi ticari koşullar, kaçınılan kilitlenme maliyetleri ve bir tedarikçi başarısız olduğunda daha hızlı ve daha sakin bir yanıttır. Gerekçeyi kendi verinizden kurun: tedarikçiye atfedilen olay saatleri ve maliyeti, geçmiş tedarikçi geçişlerinin maliyeti ve süresi ve sözleşmeli hizmet düzeyleri ile kullanıcıların bildirdiği deneyim arasındaki fark. Kaynağını ve yöntemini izleyemiyorsanız sektörün dış kaynak kullanımı başarısızlık oranlarını alıntılamaktan kaçının. İkinci bir seçeneği hazır tutmanın maliyetini dahil edin ve onu azalttığı maruz kalmayla karşılaştırın (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **İmzalayıp unutmak.** Sözleşmeler gerçeklikten uzaklaşır. Sahipler ve verilerle düzenli incelemeler yapın.
- **Yalnızca tedarikçinin raporuna güvenmek.** Tedarikçinin seçtiğini ölçer. Bağımsız izleyin ve kullanıcı deneyimiyle karşılaştırın.
- **Yalnızca cezaya dayalı ilişkiler.** Dürüstlüğü azaltır. Çarelerin yanında ortak hedefler kurun.
- **Çıkış planının olmaması.** Ayrılmak bir krize dönüşür. Planı ihtiyaç duyulmadan önce yazın ve test edin.
- **Gizli yoğunlaşma.** Birkaç tedarikçi aynı platformu paylaşıyor olabilir. Nihai sağlayıcıya kadar eşleyin.
- **Ortak incelemelerde suçlama.** Tedarikçiler olayları gizler. Olayları suçlamasız inceleyin.
- **Tüm tedarikçileri tek tip yönetmek.** Küçüklere emek harcatır, kritik olanları ihmal eder. Kritikliğe göre katmanlandırın.
- **Alt yüklenicileri göz ardı etmek.** Riskiniz onlarınkini de içerir. Kritik bağımlılıklarını sorun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tedarikçileri tanıma | Dağınık sözleşmeler | Ana tedarikçiler için kayıt | Sahipleri, kritikliği ve inceleme tarihleriyle kayıt | Alt yüklenicilere uzanan bağımlılık haritası; kapsam ve güncellik izlenir | Tedarikçiler ve müşterilerle paylaşılan bağımlılık görünümü |
| Performans ve ilişki | Tepkisel; anlaşmazlıklar | Tedarikçilerden aylık raporlar | Sözleşme ve deneyim ölçümleri karşılaştırılır; düzenli ortak incelemeler | Eylemler izlenir; olaylar ortaklaşa incelenir; atfetme üzerinde anlaşılmıştır | Tedarikçiler, ortak hedefler ve açık veriyle ortak olarak bütünleşmiştir |
| Dayanıklılık ve çıkış | Yok | Bazı sözleşmelerde çıkış koşulları | Kritik tedarikçiler için çıkış planları | Çıkış planları uygulanır; yoğunlaşma bilinçli kararlaştırılır | Alternatifler hazır tutulur; tatbikatlar tedarikçilerle ortaktır |

## Kontrol listesi

- [ ] Bir tedarikçi kaydı, her tedarikçiyi sahibi, kritikliği ve sözleşme tarihleriyle listeliyor.
- [ ] Kritik hizmetlerin, kilit alt yüklenicilere ulaşan bir bağımlılık haritası var.
- [ ] Sözleşme hizmet düzeyleri bir kullanıcı deneyimi ölçümüyle eşleniyor.
- [ ] Kritik tedarikçilerle ortak incelemeler, standart bir gündemle bir ritimde yapılıyor.
- [ ] Kritik tedarikçiler için durum tespiti güncel ve kanıta dayalı.
- [ ] Olay bildirim koşulları ve kanalları kararlaştırılmış ve test edilmiş.
- [ ] Tedarikçiye atfedilen olay süresi, üzerinde anlaşılmış atfetmeyle kaydediliyor.
- [ ] Yoğunlaşma ölçülüyor ve her tek tedarikçi bağımlılığı kaydedilmiş bir karar.
- [ ] Kritik tedarikçiler için çıkış planları var ve dönem içinde uygulandı.
- [ ] Sözleşme koşulları veri dışa aktarımını, geçiş desteğini ve yapılandırmaların sahipliğini içeriyor.

## Yapay zekâ istemleri

**Bir tedarikçi kritiklik değerlendirmesi oluşturun.**

```text
Şu tedarikçilerimiz var: [her birinin ne sağladığıyla birlikte listeleyin].
Kritik hizmetlerimiz şunlar: [listeleyin]. Tedarikçi kritikliğini derecelendirmek
için ölçütler önerin (örneğin kullanılamaz olduğunda zarar, tutulan veri,
yerine koyma kolaylığı), her tedarikçiyi gerekçeleriyle bu ölçütlere göre
puanlayın ve katmana göre yönetim yoğunluğunu önerin. Tedarikçiler hakkında
gerçek uydurmayın. Varsayımlarınızı ve hizmet sahipleriyle neyi
doğrulamam gerektiğini listeleyin.
```

**Sözleşme ölçümlerini kullanıcı deneyimiyle karşılaştırın.**

```text
[ad] tedarikçi hizmeti için son [dönem] sözleşme ölçümleri ve sonuçları şöyle:
[yapıştırın]. Aynı hizmet için kullanıcı deneyimi verisi şöyle: [anket
puanlarını veya yorum temalarını yapıştırın]. Nerede uyuştuklarını ve
uyuşmadıklarını betimleyin, her uyuşmazlık için makul açıklamalar verin ve bir
sonraki ortak inceleme için sorular önerin. Tedarikçinin niyetini varsaymayın.
Varsayımlarınızı listeleyin.
```

**Bir çıkış tatbikatı tasarlayın.**

```text
[hizmet] için [tedarikçi] tedarikçisinden ayrılma üzerine yarım günlük bir masa
başı tatbikatı tasarlayın. Senaryoyu, katılımcıları, adım adım geçilecek adımları
(veri dışa aktarımı, alternatif, geçiş, iletişim), kaydedilecekleri (süre,
boşluklar, kararlar) ve bulguların eylemlere ve sözleşme değişikliklerine nasıl
dönüştürüleceğini ekleyin. Belirli ürünleri varsaymayın. Varsayımlarınızı ve
tatbikattaki riskleri listeleyin.
```

**Bir ortak inceleme gündemi taslağı hazırlayın.**

```text
[hizmet] hakkında [tedarikçi] ile üç ayda bir yapılacak ortak inceleme için bir
gündem ve tek sayfalık bir veri paketi taslağı hazırlayın. Sözleşmeli
ölçümlere ve kullanıcı deneyimine karşı sonuçları, olayları ve öğrenmeyi,
riskleri, her iki taraftaki yaklaşan değişiklikleri ve eylem incelemesini
ekleyin. Üslubu iş birlikçi tutun. Şu girdileri kullanın: [yapıştırın].
Varsayımlarınızı ve hukuki inceleme gerektiren öğeleri listeleyin.
```

## Yapay zekâ becerileri

- [Çevik ITIL Metrikleri becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir tedarikçi veya sözleşme metriği için eşlenen koruma önlemini bulmak üzere kullanın.
- [Çevik ITIL Metrikleri bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir tedarikçi metriği girdisinin manipülasyon yöntemini, koruma önlemini ve atfetme kuralını taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Dış kaynak kullandığınız hizmetlerden sorumlu olmaya devam edersiniz; bu yüzden tedarikçileri kendi hizmetinizin parçası olarak yönetin.
- Sözleşme ölçümlerini kullanıcı deneyimiyle eşleyin ve tedarikçinin raporundan bağımsız olarak izleyin.
- Bağımlılıkları alt yüklenicilere kadar eşleyin ve yoğunlaşmayı bilinçli bir karar olarak ele alın.
- İlişkileri ortak sonuçlar ve düzenli ortak incelemeler etrafında kurun, çareleri ciddi durumlar için saklayın.
- Çıkışı imzalamadan önce planlayın ve kritik tedarikçiler için test edin.
- Olayları tedarikçilerle suçlamasız biçimde inceleyin ve veriyi açıkça paylaşın.

## Kaynaklar ve ileri okuma

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Supplier Management*, TSO, 2020.
2. ISO/IEC 27036, *Information technology: Security techniques: Information security for supplier relationships*, International Organization for Standardization.
3. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
6. Wikipedia, [Vendor management](https://en.wikipedia.org/wiki/Vendor_management).
7. Wikipedia, [Outsourcing](https://en.wikipedia.org/wiki/Outsourcing).
8. Wikipedia, [Multisourcing](https://en.wikipedia.org/wiki/Multisourcing).
9. Wikipedia, [Service integration and management](https://en.wikipedia.org/wiki/Service_integration_and_management).
10. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
11. Wikipedia, [Supply chain attack](https://en.wikipedia.org/wiki/Supply_chain_attack).
12. Wikipedia, [Exit strategy](https://en.wikipedia.org/wiki/Exit_strategy).
13. Wikipedia, [Performance-based contracting](https://en.wikipedia.org/wiki/Performance-based_contracting).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
