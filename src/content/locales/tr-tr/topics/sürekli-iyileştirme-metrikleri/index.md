# Sürekli iyileştirme metrikleri

**İyileştirme; fark etme, deneme ve denetleme alışkanlığıdır. Bu yüzden fikirlerin değişikliğe dönüşüp dönüşmediğini, değişikliklerin etki bakımından denetlenip denetlenmediğini ve aynı sorunların geri gelip gelmediğini ölçün ve işi, onu yapan insanların elinde tutun.**

## Genel bakış ve motivasyon

Çevik Manifesto’nun ilkelerinden biri, takımın düzenli aralıklarla daha etkili olmanın yolları üzerine düşündüğünü, ardından davranışını buna göre ayarladığını ve uyarladığını söyler. ITIL aynı inancı yol gösterici ilkelerinde ve sürekli iyileştirme uygulamasında ifade eder: hizmetler ve işletilme biçimleri, kanıta dayanarak, küçük adımlarla her zaman iyileştirilmelidir. İkisi de aynı şeyi ister: ara sıra yapılan bir program değil, kalıcı bir iyileştirme alışkanlığı.

Çoğu kuruluş bunu yaptığına inanır. Birçoğunda bir eylem listesi üreten geriye bakış tarzı bir toplantı, bir iyileştirme fikirleri kaydı ya da yıllık bir iyileştirme planı vardır. Yaygın başarısızlık, listenin büyüyüp çok az şeyin olmasıdır. Eylemler bir toplantıda kararlaştırılır ve unutulur. İyileştirmeler yapılır ve hiç denetlenmez, bu yüzden kimse işe yarayıp yaramadığını bilmez. Aynı sorun başka bir adla geri döner. Sürekli iyileştirme metrikleri, iyileşen bir kuruluşla yalnızca iyileşmekten söz eden bir kuruluş arasındaki farkı anlamanın yoludur.

[Sürekli iyileştirme süreci](https://en.wikipedia.org/wiki/Continual_improvement_process), kalite yönetiminde derin köklere sahiptir. W. Edwards Deming ve Walter Shewhart ile anılan [Planla-Uygula-Kontrol Et-Önlem Al](https://en.wikipedia.org/wiki/PDCA) (PDCA) döngüsü, iyileştirmeyi tekrarlanan küçük deneyler olarak tanımlar: bir değişiklik planlayın, deneyin, sonucu kontrol edin ve öğrendiklerinize göre harekete geçin. [Kaizen](https://en.wikipedia.org/wiki/Kaizen), herkesin katılımıyla çalışma uygulamalarının sürekli iyileştirilmesi için kullanılan Japonca terimdir. Her ikisi de [yalın üretimden](https://en.wikipedia.org/wiki/Lean_manufacturing) ve Toyota Üretim Sisteminden gelir ve ikisi de artık hizmet ve yazılım işinde standart sözcük dağarcığıdır. ITIL 4, adımları şunları soran bir sürekli iyileştirme modeli sunar: vizyon nedir, şimdi neredesiniz, nerede olmak istiyorsunuz, oraya nasıl varacaksınız, harekete geçin, oraya vardınız mı ve ivmeyi nasıl koruyacaksınız. Bu, mekanik biçimde izlenecek bir prosedür değil, bir konuşma istemidir.

Birkaç fikir yardımcı olur.

- **Kısıtı iyileştirin.** Eliyahu Goldratt’ın geliştirdiği [kısıtlar kuramı](https://en.wikipedia.org/wiki/Theory_of_constraints), bir sistemin çıktı hızının en yavaş parçası tarafından sınırlandığını ve bu yüzden başka yerlerdeki iyileştirmelerin çok az şey kattığını söyler. Kitabın daha önceki bölümlerindeki akış ölçümlerini kullanarak kısıtı bulun ve önce onu iyileştirin (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”).
- **Belirtileri değil, nedenleri bulun.** [Kök neden analizi](https://en.wikipedia.org/wiki/Root_cause_analysis), bir sorunun altında yatan nedenleri arar; böylece onları düzeltmek sorunun dönüşünü durdurur. Basit yöntemlerin aşırı kullanımı, sorunların birkaç nedeni olduğunda yanıltabilir; bu yüzden katkıda bulunan etkenleri inceleyin.
- **Varsayımları sorgulayın.** Chris Argyris ve Donald Schön’den gelen bir terim olan [çift döngülü öğrenme](https://en.wikipedia.org/wiki/Double-loop_learning), eylemi düzeltmenin ötesine geçerek ona yol açan inançları ve kuralları inceler. Yalnızca belirtileri düzelten takımlar (tek döngülü öğrenme) aynı sorunlarla yeniden karşılaşma eğilimindedir.
- **İyileştirme kapasite ister.** Tam gerginlikte olan bir takımın iyileştirmeye yeri yoktur. Korunan kapasite bir ön koşuldur ve sürdürülebilir bir tempo, iyileştirmeyi mümkün kılan şeyin parçasıdır (bkz. Konu 9.2 “Memnuniyet ve iyi oluş metrikleri”).

İyileştirme metrikleri kendi oyunlaştırmalarını da davet eder. Tamamlanan eylem sayısı hedef olursa takımlar önemsiz eylemler üzerinde anlaşır. İyileştirmelerden elde edilen tasarruflar hedef olursa iddialar şişer. Gönderilen fikir sayısı hedef olursa fikirler sele döner ve hiçbiri üzerinde eyleme geçilmez. [Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi geçerlidir: iyileştirme programının ne kadar meşgul göründüğünü değil, iyileştirmelerin işe yarayıp yaramadığını ölçün (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Temel ilkeler

- **İyileştirme, işi yapan insanlara aittir.** Sorunları ve olası düzeltmeleri ilk onlar görür.
- **Küçük adımlarla çalışın ve her birini denetleyin.** Küçük deneyler riski azaltır ve öğrenmeyi hızlandırır.
- **Etkinliği değil, takibi ve etkiyi ölçün.** Tamamlanan eylemler ve doğrulanan etkiler, üretilen fikirlerden daha önemlidir.
- **Önce kısıtı iyileştirin.** Darboğazın dışındaki çaba çok az şey katar.
- **Nedenleri düzeltin.** Katkıda bulunan etkenleri arayın ve arkasındaki varsayımları sorgulayın.
- **İyileştirme için kapasiteyi koruyun.** Var olmayan boş zamanda gerçekleşmeyecektir.
- **Öğrenmeyi, başarısız deneylerden öğrenmeyi de dahil, kutlayın.** İşe yaramayan denenmiş bir fikir bilgidir.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Eylem takip oranı | Gözden geçirmelerde kararlaştırılan iyileştirme eylemlerinden, kararlaştırılan tarihe kadar tamamlananların payı | tarihe kadar tamamlanan eylemler / dönemde vadesi gelen eylemler | yüzde | İyileştirme kaydı veya takım biriktirme listesi | Sürekli iyileştirme | Teslim edilen değerlendirme eylemleri | Aylık |
| İyileştirme birikim listesi yaşı | Açık iyileştirme öğelerinin yaşı, en eskilere dikkat edilerek | açık öğelerin gün cinsinden medyan ve 85. yüzdelik yaşı; en eski öğenin yaşı | gün | İyileştirme kaydı | Sürekli iyileştirme | Birikim listesi yaşı | Aylık |
| Etki denetimi oranı | Etkisi bir başlangıç değerine karşı denetlenen tamamlanmış iyileştirmelerin payı | kayıtlı öncesi ve sonrası denetimi olan tamamlanmış iyileştirmeler / tamamlanmış iyileştirmeler | yüzde | Başlangıç değeri ve sonuç alanları olan iyileştirme kaydı | Sürekli iyileştirme; ölçüm ve raporlama | Deneylerden öğrenme | Üç aylık |
| Fikirden denemeye kadar geçen süre | Bir iyileştirme fikrinin dile getirilmesinden gerçek işteki ilk denemeye kadar geçen süre | dile getirilmeden ilk denemeye kadar geçen günlerin medyanı ve 85. yüzdeliği | gün | İyileştirme kaydı | Sürekli iyileştirme | Değişikliklerde hızlı geri bildirim | Aylık |
| Sahadaki fikir payı | İyileştirme fikirlerinden, işi yapan insanlar tarafından ortaya konanların payı, takım düzeyinde sayılır | işi yapan takım üyelerinin ortaya koyduğu fikirler / ortaya konan fikirler | yüzde | İyileştirme kaydı | Sürekli iyileştirme | Kendi kendini örgütleyen takımlar | Üç aylık |
| Tekrarlayan sorun oranı | Nedenini ortadan kaldırmayı amaçlayan bir iyileştirmeden sonra yeniden ortaya çıkan sorunların payı | ilgili bir iyileştirme kapandıktan sonra belirtilen dönem içinde tekrarlayan sorunlar / ilgili nedene sahip olarak kapatılan iyileştirmeler | yüzde | Nedene göre ilişkilendirilmiş olay, sorun ve iyileştirme kayıtları | Sorun yönetimi; sürekli iyileştirme | Bir düzeltmeden sonra kaçan kusur | Üç aylık |
| İyileştirme kapasitesi payı | Takım kapasitesinin iyileştirme işine harcanan payı | iyileştirme olarak etiketlenmiş kapasite veya tamamlanan öğeler / toplam kapasite veya tamamlanan öğeler | yüzde | İş izleyicisi iş türleri | Sürekli iyileştirme; kapasite ve performans yönetimi | Değerlendirme ve teknik mükemmellik için zaman | Aylık |

“İyileştirme öğesini” kayıtta tanımlayın ve onu olağan biriktirme listesi işinden ve düzeltici onarımlardan ayrı tutun. Takip saati, eylem bir sahip ve bir tarihle kararlaştırıldığında başlar. Bir etki denetimi, değişiklikten önce kaydedilmiş bir başlangıç değeri ve tanımlı bir gösterge gerektirir ve sonuç “etki yok” ya da “anlaşılamıyor” olabilir. Tekrarlayan sorun oranı kayıtlı bir nedene bağlıdır ve eşleştirme kuralı kayıtta yazılıdır. Tüm ölçümler takımları ve sistemi tanımlar, bireyleri değil.

## Öneriler

### İyileştirmeyi görünür ve sahipli kılın

**1. Takım başına görünür bir iyileştirme listesi tutun.** İyileştirme öğelerini takımın zaten baktığı yere, örneğin panosuna veya biriktirme listesine koyun ve etiketleyin. Her öğenin bir sahibi, belirtilmiş bir sorunu, beklenen bir etkisi, bir göstergesi ve bir tarihi vardır. Ayrı bir araçta ya da kimsenin açmadığı bir dokümanda yaşayan bir liste çürür. En eski öğeleri gösterin ki liste saklanamasın.

**2. Düzenli, kısa değerlendirmeler yapın.** Takım, sabit bir sıklıkla neyin iyi gittiğini, neyin yolunu kestiğini ve sonra neyin deneneceğini sorar. Kısa ve belirli tutun ve sahipleri olan az sayıda eylemle bitirin. Takımınız bunun için bir geriye bakış toplantısı gibi adlandırılmış bir biçim kullanmayı seçerse, bu takımın tercihidir. İlke, düzenli alışkanlıktır.

**3. Daha az eylem üzerinde anlaşın ve bitirin.** Tamamlanan iki ya da üç eylem, tamamlanmayan bir düzineden daha çok şey öğretir. Takip oranını denetleyin. Eylemler sürekli kayıyorsa nedenini sorun: belirsiz sahiplik, kapasite yokluğu ya da fazla büyük eylemler. Büyük olanları küçük adımlara bölün.

**4. Kapasiteyi koruyun.** Kapasitenin bir payını iyileştirmeye ayırın ve diğer işler gibi planlayın (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”). Takım aşırı yüklendiğinde iyileştirmeyi iptal etmek yerine yeni iş girişini azaltın; çünkü aşırı yükü çoğu zaman azaltan iyileştirmedir. Kullanılan payı izleyin.

### Önemli olanı bulun

**5. Kısıtı arayın.** İşin nerede beklediğini ve çıktı hızını neyin sınırladığını bulmak için akış verilerini kullanın. Kısıttaki iyileştirmeler tüm sistemin çıktısını artırır. Başka yerlerdeki iyileştirmeler yalnızca iş yığınını taşıyabilir. Aynı bakışı olay ele almaya, değişiklik onayına ve talep karşılamaya uygulayın.

**6. Seçmek için kanıt kullanın.** İyileştirmeleri verilerden ve acıya en yakın insanlardan seçin: tekrarlayan olaylar, uzun beklemeler, yeniden iş, kullanıcı şikâyetleri, engel listeleri. Her iyileştirmeyi kayıtlı bir soruna bağlayın. Bu, iyileştirme kaydını sorun yönetimine bağlar (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

**7. Nedenleri ve katkıda bulunan etkenleri arayın.** Tekrarlayan sorunlar için birden fazla kez neden diye sorun ve tetikleyicilerin yanı sıra koşullara da bakın. İlk makul nedende ya da bir kişide durmaktan sakının. Varsayımları sorgulayın: neden böyle çalışıyoruz ve kural hâlâ gerekli mi? Çift döngülü öğrenmenin karşılığını verdiği yer burasıdır.

### Önce küçük deneyin, sonra denetleyin

**8. Bir başlangıç değeriyle küçük deneyler yürütün.** Değişikliği, beklenen etkiyi ve göstergeyi belirtin. Değişiklikten önce başlangıç değerini kaydedin. Küçük ölçekte, kısa bir süre deneyin, sonra karşılaştırın. Planla-Uygula-Kontrol Et-Önlem Al döngüsü basit bir çerçevedir. Fikirden denemeye kadar geçen süre ne kadar kısa olursa, öğrenme o kadar hızlıdır.

**9. Etkiyi denetleyin ve dürüstçe kaydedin.** Bir değişiklikten sonra göstergeyi başlangıç değeriyle ve başka neyin değiştiğiyle karşılaştırın. Etkinin görüldüğünü, görülmediğini ya da belirsiz olduğunu kaydedin. Hiç “etki yok” bulmayan takımlar muhtemelen dikkatle denetlemiyordur (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”).

**10. İşe yarayanı tutun, yaramayanı bırakın.** İşe yarayan iyileştirmeleri uygun oldukları yerde diğer takımlara yayın ve fayda olmaksızın maliyet ekleyen değişiklikleri emekliye ayırın. Koşullar değiştiği için eski değişikliklere yeniden bakın. Standartlar, takım öğrendikçe gelişmelidir.

### Alışkanlığı canlı tutun

**11. Önermeyi ve durdurmayı güvenli kılın.** İnsanlar, önceki fikirleri duyulduğunda ve üzerinde eyleme geçildiğinde fikir ortaya koyar. Fikirler ortadan kaybolduğunda ya da öneren için ek iş getirdiğinde sessiz kalırlar. Her fikre, yanıt “şimdi değil” olsa bile, bir gerekçeyle yanıt verin. Takımların işe yaramayan iyileştirmeleri durdurmasına izin verin.

**12. İyileştirmeyi bir hedefe dönüştürmeyin.** Fikir sayısı, kapatılan eylem sayısı ya da iddia edilen tasarruflar için hedef koymayın. Takibi, etki denetimlerini, tekrar oranını ve bazı hikâyeleri raporlayın. Her takımı kendi geçmişiyle karşılaştırın ve iyi fikirleri sıralamadan takımlar arasında paylaşın.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Eylem takip oranı | Önemsiz eylemler üzerinde anlaşmak; vade tarihlerini kaydırmak; yapmadan kapatmak | Eylemlerin büyüklüğünü ve değerini gözden geçirin; tarih değişiklikleri kaydedilir; etki denetimi oranı |
| İyileştirme birikim listesi yaşı | Eski öğeleri karar olmadan “yapılmayacak” diye kapatmak; yaşı sıfırlamak için öğeleri bölmek | Kapatma gerekçelerini kaydedin; eylemsiz kapatılan öğeleri izleyin; en eskileri gözden geçirin |
| Etki denetimi oranı | Başlangıç değeri olmadan denetim kaydetmek; yalnızca başarıları denetlemek | Başlangıç değeri değişiklikten önce tarihlenmiş; boş ve olumsuz sonuçları dahil edin |
| Fikirden denemeye kadar geçen süre | Bir plana deneme demek; önemsiz varyasyonları denemek | Bir denemeyi gerçek işteki bir değişiklik olarak tanımlayın; denenen fikirlerin önemine bakın |
| Sahadaki fikir payı | Yöneticilerin fikirleri çalışanların adı altında girmesi; zorunlu fikir kotaları | Yazara göre fikirler takım düzeyinde kaydedilir; kota yok; takıma sorun |
| Tekrarlayan sorun oranı | Aynı sorun için farklı nedenler kaydetmek; önceki kaydı başka bir tür altında kapatmak | Kayıtlı bir kuralla nedene göre eşleştirin; takım dışından biri tarafından gözden geçirin |
| İyileştirme kapasitesi payı | Olağan işi iyileştirme olarak etiketlemek; sonra teslimat için kullanılan zamanı planlamak | Tür için öğelerden örnek alın; fiilen harcanan zamanla karşılaştırın |

Sağlıklı bir okuma şöyledir: biten eylemlerle kısa bir liste, günler ya da haftalar içinde denemeye ulaşan fikirler, denetlenen ve bazen hayal kırıklığı yaratan etkiler, azalan tekrarlayan sorunlar ve kullanılan korunmuş kapasite.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yönü | Zayıf yönü |
| --- | --- | --- |
| Büyük iyileştirme programları | Görünür; büyük sorunları ele alabilir | Yavaş; günlük işten kopuk |
| Küçük sürekli deneyler | Hızlı öğrenme, düşük risk | Yapısal sorunları kaçırabilir |
| Merkezî iyileştirme takımı | Beceri ve tutarlılık | İşten uzak; fikirler durur |
| Takımın sahip olduğu iyileştirme | İlgili ve motive edici | Değişken kalite; destek gerektirir |
| Ödüllü fikir programları | Hacim üretir | Kotalar ve oyunlaştırma; düşük kalite |
| Kanıta dayalı seçim | Gerçek sorunlara odaklanır | Veri ve zaman gerektirir |
| Resmî etki denetimleri | Dürüst öğrenme | Çaba; ağır olursa bürokratik hissettirebilir |
| Denetim yok | Hızlı | Neyin işe yaradığı hakkında öğrenme yok |

Düz yanıt şudur: iyileştirmeyi takımlara yakın tutun, hafif etki denetimleriyle küçük deneylerde yürütün; veri ve yöntemde yardım eden birkaç kişi ve kapasiteyi koruyan, sonuçları dinleyen liderler tarafından destekleyin.

## Takımınızla tartışılacak sorular

**1. Son gözden geçirmemizde hangi iyileştirme üzerinde anlaştık ve gerçekleşti mi?**
Eylemlere bakın. Her biri için tamamlanıp tamamlanmadığını, terk edilip edilmediğini ya da unutulup unutulmadığını ve nedenini sorun. Kolaylaştırıcı nedenleri not etmelidir. Takımın gerçekten kaç eylemi bitirebileceği üzerinde anlaşın ve bir sonraki listeyi buna göre kısaltın.

**2. Son zamanlarda yaptığımız hangi değişikliğin işe yaradığını biliyoruz ve bunu nasıl biliyoruz?**
Yakın tarihli bir değişiklik seçin ve başlangıç değerini ve sonucu arayın. Yoksa, bir dahaki sefere nasıl denetleneceğini tartışın. Bir sonraki deney için basit bir gösterge belirleyin.

**3. Kaç kez düzeltirsek düzeltelim hangi şey geri gelip duruyor?**
Tekrarlayan sorunları listeleyin. Biri için, neden geri geldiğini ve mevcut yaklaşımın ardında hangi varsayımın yattığını sorun. Düzeltmenin bir belirtiyi tedavi edip etmediğini düşünün. Daha derin bir bakış için tekrarlayan bir sorun seçin.

**4. İş en uzun nerede bekliyor ve kısıt nedir?**
Akış verilerini kullanın. Takımın üzerinde çalıştığı iyileştirmelerin kısıta dokunup dokunmadığını sorun. Dokunmuyorsa odağı değiştirip değiştirmemeyi tartışın.

**5. Haftamızın ne kadarı iyileştirmeye gidiyor ve onu ne koruyor?**
Planı gerçekle karşılaştırın. Zamanı neyin aldığını tartışın. Küçük bir payı koruyacak bir kural ve takım aşırı yüklendiğinde neyin kesileceği üzerinde anlaşın.

**6. Birinin önerdiği son fikre ne oldu ve bunu nasıl öğrendi?**
Bir fikri izleyin. Yanıtlandı mı, denendi mi yoksa kayboldu mu? Her fikrin bir yanıt ve gerekçe almasını nasıl sağlayacağınızı tartışın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları iyileştirme fikirlerinin başlıca kaynağı ve işe yarayıp yaramadıklarının en iyi yargıçlarıdır. Görünür bir liste tutmalı, her döngüde birkaç eylemi bitirmeli, etkileri denetlemeli ve öğrendiklerini paylaşmalıdır. Korunan kapasiteye ve yanıt veren liderlere ihtiyaç duyarlar.

### Hizmet ve operasyon takımları

Operasyon takımları tekrarlayan olayları, yavaş onayları ve elle yapılan angaryayı her gün görür. İyileştirmeleri kayıtlı sorunlara bağlamalı, tekrarlayan sorunları izlemeli ve kendi yüklerini azaltan düzeltmeler için zaman ayırmalıdır. Geri bildirimleri, iyileştirmelerin kullanıcıya ulaşıp ulaşmadığını gösterir.

### Liderlik ve yönetişim

Liderler koşulları yaratır: korunan kapasite, önermek ve durdurmak için güvenlik ve sonuçlara dikkat. Takibi ve etki denetimlerini istemeli, dürüst “etki yok” bulgularını kabul etmeli, kotalardan kaçınmalı ve yatırım gerektiren iyileştirmeleri finanse etmelidir. Yönetişim, yapısal eylem gerektiren örüntüler için takımlar arasındaki iyileştirme kaydına bakmalıdır.

### Müşteriler ve kullanıcılar

Kullanıcılar, sürekli daha iyi olan hizmetlerden yarar sağlar ve zengin bir fikir kaynağıdır. Onlara sorulmalı, neyin değiştiği söylenmeli ve etkiyi denetlemeye davet edilmelidir. Aynı konudaki tekrarlayan şikâyetler, iyileştirmenin nedene ulaşmadığının işaretidir.

## Uygulamada: çevik bir ITIL örneği

Ulusal bir vergi idaresinin dijital hizmetler grubu, sekiz takımla bir beyanname portalı, bir ödeme sistemi ve bir çağrı merkezi platformu işletir. Her takım bir iyileştirme listesi tutar ve grup her çeyrekte tamamlanan iyileştirme sayısını raporlar. Aşağıdaki sayılar örnek niteliğindedir.

Hizmet iyileştirme başkanı, raporlanan sayının artarken aynı sorunların sürdüğünü fark eder. Listeleri gözden geçirir. Grup genelinde 212 iyileştirme öğesi açıktır; medyan yaş 7 aydır ve en eskisi 26 aydır. Son çeyreğin gözden geçirmelerinde kararlaştırılan eylemlerin yüzde 38’i tarihine kadar tamamlanmıştır. Geçen yıl tamamlanan 64 iyileştirmenin yalnızca 9’unun kayıtlı bir başlangıç değeri ve sonucu vardır; bu, yüzde 14’lük bir etki denetimi oranıdır ve bu 9’un 3’ü etki göstermemiştir. Tekrarlayan sorunlar yaygındır: nedenlerini ortadan kaldırmayı amaçlayan iyileştirmelere bağlı 25 olaydan 11’i altı ay içinde tekrarlamıştır; bu yüzde 44’lük bir tekrar oranıdır. İyileştirme işi kapasitenin yaklaşık yüzde 4’ünü alır.

Grup, takımlarla dört değişiklik üzerinde anlaşır. Her takım listesini önümüzdeki iki ayda ele alabileceği öğelere kısaltır ve geri kalanı neden park ettiğini ya da kapattığını belirtir. Takımlar, adı belli sahiplerle, bir seferde üçten fazla eylem üzerinde anlaşmaz. Her iyileştirme için değişiklikten önce bir başlangıç değeri ve bir gösterge kaydedilir ve sonuç, “etki yok” dahil, sonra kaydedilir. Üç aylık bir gözden geçirme, takımlar arasındaki tekrarlayan sorunlara bakar ve daha derin bir neden analizi için ikisini seçer; çağrı merkezi ve ödeme takımları ortak bir nedeni birlikte araştırır. Her takım kapasitenin yüzde 10’unu iyileştirmeye ayırır ve bu, iptalin takım liderinin onayını ve bir günlük kaydını gerektirdiği bir kuralla korunur. Liderlere raporlama, tamamlanan iyileştirme sayısından takibe, etki denetimlerine ve tekrarlayan sorunlara değişir.

İki çeyrek sonra açık öğeler 74’e düşer ve medyan yaş 2 aydır. Takip yüzde 81’e, etki denetimi oranı yüzde 70’e yükselir; denetlenen 36 iyileştirmeden 9’u etki göstermemiş ve bırakılmıştır. Tekrarlayan sorun oranı yüzde 20’ye düşer ve fikirden denemeye kadar geçen sürenin medyanı 9 gündür. Müdür yardımcısı, çeyrek başına 100 tamamlanmış iyileştirme hedefi ister. Hizmet iyileştirme başkanı, önceki sayıların yanıltıcı olmasının nedeninin sayım olduğunu açıklar ve takibi, etkiyi ve tekrar oranını izlemeyi önerir. Karar kaydedilir ve bir takımın onay süreci üzerinde dört haftalık bir deney yürütme talebi onaylanır.

## Sektör mercekleri

**Girişim (startup).** İyileştirme sürekli ve gayriresmî olarak gerçekleşir. Kısa bir liste tutun, beklenen etkileri yazın ve denetleyin ve zamanın küçük bir dilimini koruyun. Ağır süreçten kaçının ve iyileştirmenin büyüme tarafından tümüyle dışarı itilmesine dikkat edin.

**Küçük işletme.** Bir ya da iki kişi her şeyi yapar ve iyileştirme yangın söndürmeyle yarışır. Her çeyrekte tekrarlayan bir sorun seçin, nedenini düzeltin ve etkiyi denetleyin. Kullanıcılara neyin canlarını sıktığını sorun ve bir şey için harekete geçin.

**Büyük kurum.** Ölçek iyileştirmeyi dengesiz kılar ve fikirlerin paylaşılmasını zorlaştırır. Ortak bir kayıt biçimi ve hafif koçluk sağlayın, takımların listelerine sahip olmasına izin verin ve işe yarayanı yaymak ve ortak kısıtları ele almak için takımlar arası bir forum kullanın. Merkezî kotalardan kaçının.

**Kamu sektörü.** İyileştirme; tedarik, mevzuat ve onay zincirleriyle kısıtlanabilir ve kamuoyu tarafından incelenir. Deneyleri ve sonuçlarını belgeleyin, iyileştirmeleri seçmeye ve denetlemeye kullanıcıları dahil edin ve işe yaramayanlar dahil etkiler hakkında dürüstçe raporlayın. Vatandaşlardan yük kaldıran iyileştirmeleri arayın (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyetler şunlardır: ana maliyet olan korunan kapasite, başlangıç değerlerini ve sonuçları kaydetme çabası ve biraz koçluk ya da kolaylaştırma. Araçlar, takımın mevcut panosu kadar basit olabilir.

Getiriler, daha az tekrarlanan sorun, daha düşük angarya, daha kısa beklemeler ve fikirlerinin değişikliğe dönüştüğünü gören takımlarda daha iyi moraldir. Gerekçeyi kendi verilerinizden kurun: tekrarlayan olayların maliyeti ve iyileştirmelerle ortadan kaldırılan pay, etkisi denetlenen iyileştirmelerle kazanılan zaman ve yapılan ve işe yaramayan iyileştirmelerin maliyeti, ki denetim artık bunların tekrarını önler. Kaynağını ve yöntemini izleyemediğiniz sürece iyileştirme programlarının yayımlanmış getirilerini aktarmaktan kaçının. Kapasitenin fırsat maliyetini de sayın (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Tamamlanan iyileştirmeleri saymak.** Takımlar önemsiz değişiklikler üzerinde anlaşır. Takibi ve etkiyi ölçün.
- **Fikir kotaları.** Hacim ve gürültü üretirler. Gelen fikirlere yanıt verin.
- **Başlangıç değeri olmaması.** Hiçbir şeyin işe yarayıp yaramadığını kimse bilmez. Öncesini ve sonrasını kaydedin.
- **Yalnızca başarıların kaydedilmesi.** Başarısızlıktan öğrenme kaybolur. Boş sonuçları kaydedin.
- **Budama olmayan uzun listeler.** Liste güvenilirliğini kaybeder. Takımın yapacağı kadarına kısaltın.
- **Boş zamanda iyileştirme.** Boş zaman yoktur. Kapasiteyi koruyun.
- **Belirtileri düzeltmek.** Sorun geri döner. Birden fazla kez neden diye sorun ve varsayımları sorgulayın.
- **Uzaktaki bir takım tarafından iyileştirme.** Fikirler durur. Onu işi yapan insanlarda tutun.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Alışkanlık ve sahiplik | İyileştirme ara sıra | Değerlendirme olur; eylemler çoğu zaman kaybolur | Sahipli görünür takım listesi; az sayıda eylem biter | Takip ve fikirden denemeye süre yönetilir; kapasite korunur | İyileştirme rutindir ve takımlar, tedarikçiler ve kullanıcılar arasında paylaşılır |
| Kanıt ve etki | Görüşler | Değişikliklerden sonra bazı ölçümler | Her iyileştirme için başlangıç değeri ve sonuç kaydedilir | Etki denetimleri boş sonuçları içerir; tekrarlayan sorunlar nedene göre izlenir | Portföy düzeyinde öğrenme, iş ortaklarıyla bir sonraki iyileştirme yerini yönlendirir |
| Derinlik | Belirtilere düzeltmeler | Bazı neden analizleri | Tekrarlayan sorunlar için neden analizi | Kısıtlar akış verisinden belirlenir; varsayımlar sorgulanır | Değer akışı boyunca, ortak yönetişimle sistemik iyileştirmeler |

## Kontrol listesi

- [ ] Her takımın sahipleri, beklenen etkileri ve tarihleri olan görünür bir iyileştirme listesi var.
- [ ] Düzenli, kısa değerlendirme, sahipli az sayıda eylemle bitiyor.
- [ ] Eylem takibi ve en eski öğelerin yaşı aylık olarak gözden geçiriliyor.
- [ ] İyileştirme için kapasite planlanmış, korunuyor ve izleniyor.
- [ ] İyileştirmeler kayıtlı sorunlara veya kanıta bağlı.
- [ ] Her değişiklikten önce bir başlangıç değeri ve gösterge kaydediliyor.
- [ ] Etkiler, etki yokluğu dahil, denetleniyor ve kaydediliyor.
- [ ] Tekrarlayan sorunlar, iyileştirmelerden sonra nedene göre izleniyor.
- [ ] Her fikir bir gerekçeli yanıt alıyor.
- [ ] Fikirler, eylemler veya tasarruflar için kota ya da hedef yok.

## Yapay zekâ istemleri

**İyileştirmeleri kanıttan seçin.**

```text
Tekrarlayan sorunlarımız ve engellerimiz yaklaşık sayıları ve etkisiyle şöyle:
[yapıştırın]. İşin nerede beklediğine dair akış verimiz: [yapıştırın]. Hangi
iki ya da üç iyileştirmenin en olası şekilde önemli olduğunu, nedenini ve hangi
kanıtın bunu doğrulayacağını ya da çürüteceğini öner. Her biri için bir
başlangıç değeri ve bir göstergeyle küçük bir deney öner. Rakam uydurma.
Varsayımlarını listele.
```

**Küçük bir deney tasarlayın.**

```text
[takım ve süreç] içindeki [sorun] sorununu ele almak için [değişiklik]
denemek istiyoruz. Küçük bir deney tasarla: beklenen etki, şimdi kaydedilecek
başlangıç değeri, gösterge ve nasıl ölçüleceği, deneme süresi, başka
değişikliklerin sonucu karıştırıp karıştırmadığının nasıl anlaşılacağı ve etki
olmazsa ne yapacağımız. Hafif tut. Varsayımlarını ve risklerini listele.
```

**Bir iyileştirme listesini gözden geçirin.**

```text
İyileştirme listemiz, her öğe için yaş, sahip ve beklenen etkiyle şöyle:
[yapıştırın]. Fazla belirsiz, fazla büyük veya bayatlamış öğeleri belirle,
takımın iki ayda bitirebileceği daha kısa bir liste öner ve park ettiğimiz
öğeleri ve nedenini açıklayan bir not öner. Bireyleri yargılama. Varsayımlarını
listele.
```

**Tekrarlayan bir sorunu analiz edin.**

```text
Sorun: [açıklayın]. Geçmiş düzeltmeler ve ne zaman tekrarladığı: [yapıştırın].
İlk makul nedenin ötesinde katkıda bulunan etkenleri, sorgulanacak varsayımları
(çift döngülü öğrenme) ve her hipotezi ucuza sınamanın birkaç yolunu öner. Tek
bir kök neden varsayma. Varsayımlarını ve takım için sorularını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir iyileştirme metriği için eşleştirilmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir iyileştirme metriği girdisinin takibi ve etkiyi ölçtüğünü, oyunlaştırma yolu ve koruma önlemiyle birlikte denetlemek için kullanın.

## Temel çıkarımlar

- Takım başına görünür bir iyileştirme listesi tutun, bir seferde sahipli birkaç eylemle ve onları bitirin.
- Her değişiklikten önce bir başlangıç değeri kaydedin, sonra etkiyi denetleyin ve boş sonuçları kaydedin.
- Takibi, etki denetimlerini, tekrarlayan sorunları ve en eski öğelerin yaşını izleyin.
- Önce kısıtı iyileştirin ve nedenleri ve arkasındaki varsayımları arayın.
- İyileştirme için kapasiteyi sürdürülebilir bir tempo içinde koruyun.
- Fikirler, eylemler veya tasarruflar için kota koymayın.

## Kaynaklar ve ileri okuma

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Continual Improvement*, TSO, 2020.
2. Deming, W. E., *Out of the Crisis*, MIT Center for Advanced Engineering Study, 1982 (MIT Press edition, 2000).
3. Imai, M., *Kaizen: The Key to Japan's Competitive Success*, McGraw-Hill, 1986.
4. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
5. Argyris, C., "Teaching smart people how to learn," *Harvard Business Review*, 69(3), 1991.
6. Rother, M., *Toyota Kata: Managing People for Improvement, Adaptiveness, and Superior Results*, McGraw-Hill, 2009.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
9. Wikipedia, [PDCA](https://en.wikipedia.org/wiki/PDCA).
10. Wikipedia, [Kaizen](https://en.wikipedia.org/wiki/Kaizen).
11. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
12. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Double-loop learning](https://en.wikipedia.org/wiki/Double-loop_learning).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
