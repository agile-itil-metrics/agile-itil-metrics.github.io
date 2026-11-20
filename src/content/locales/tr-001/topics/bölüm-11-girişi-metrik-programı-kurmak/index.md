# Bölüm 11 Girişi: Metrik Programı Kurmak

**Bir metrik programı kendi başına uzun ömürlü bir hizmettir: bir hedef kitleye, küçük bir ölçüm kümesine, dürüst araçlara, ölçülen kişilerin güvenine ve adım adım büyüyen bir yola ihtiyaç duyar.**

Bölüm 2 ile Bölüm 10 neyin ölçüleceğini anlatır. Bu bölüm ise bu ölçümlerin kalıcı bir alışkanlığa nasıl dönüştürüleceğini anlatır. Birçok kurum ölçümü bir proje olarak ele alır: bir araç seçer, bir pano kurar, bir hedef kümesi duyurur ve işine devam eder. Bir yıl sonra pano eskimiştir, hedefler davranışı kimsenin istemediği biçimlerde eğmiştir ve ölçülen kişiler bütün çabaya güvenmemeyi öğrenmiştir. Program ise farklıdır. Sahipleri, bir amacı, bir gözden geçirme ritmi ve işe yaramaz hâle gelen ölçümleri emekliye ayırmanın bir yolu vardır. Programın kendisi de bir hizmettir ve her hizmet gibi ölçülüp iyileştirilebilir.

Çevik hedefler, programa da diğer her iş gibi uygulanır. Sürekli paydaş katılımı, ölçülecek kişilerin ve sonuçları kullanacak kişilerin ölçümlerin seçimine en başından yardım etmesi anlamına gelir. Sürekli iyileştirme, programın kendisini gözden geçirmesi ve maliyetini karşılamayanı bırakması demektir. Süregelen evrim, hizmetler değiştikçe ölçüm kümesinin de değişmesi anlamına gelir. Sürdürülebilir tempo, programın aydınlatmayı amaçladığı işi sıkıştıracak bir raporlama yükü eklememesi demektir. Motivasyonu yüksek bireyler etrafında inşa etmek ise ölçümlerin, işlerine sahip çıkan takımlara yardım olarak sunulması, gözetim olarak dayatılmaması anlamına gelir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

İki sessiz başarısızlık her programın peşini bırakmaz. Birincisi korkudur. İnsanlar sayıların kendilerini sıralamak, suçlamak veya işten çıkarmak için kullanılacağına inanırsa işi değil sayıları yönetir ve veri doğruluğunu yitirir. İkincisi başıboş büyümedir. Her paydaş bir ölçüm daha ister, her araç elli grafik daha sunar ve çok geçmeden hangi sayıların önemli olduğunu kimse söyleyemez. Bu bölümdeki konuların çoğu bu iki başarısızlıktan kaçınmakla ilgilidir: kümeyi küçük tutmak, takımların sahipliğinde tutmak ve kullanımını görünür ve zararsız tutmak.

## Bu bölümdeki konular

- **11.1 Hizmet metrikleri panosu tasarlamak**: hedef kitleler, küçük ve dengeli bir küme, bağlam ve eğilim, takımlar, hizmetler ve liderlik için görünümler.
- **11.2 Araç manzarası**: oluşturma ve satın alma, platform türleri, veri hatları ve satıcıdan bağımsız seçim ölçütleri.
- **11.3 Korku yaratmadan metrikleri devreye almak**: şeffaflık, takım sahipliği, bireyleri sıralayan tablolar olmaması ve güven kazanan bir devreye alma.
- **11.4 Metrik programları için olgunluk modeli**: ortak beş düzeyli ölçeğin programın kendisine uygulanması.
- **11.5 Artımlı benimseme yol haritası**: bulunduğunuz yerden başlayan ilk 30, 90 ve 180 gün için bir plan.

## Bu konular birbiriyle nasıl ilişkilidir

İnsanların gördüğü şey pano olsa da, önem sırasında korkusuz devreye alma önce gelir (bkz. Konu 11.3 “Korku yaratmadan metrikleri devreye almak”). Verinin sahibinin kim olduğu, onu kimin göreceği ve hiçbir zaman ne için kullanılmayacağı konusundaki anlaşmalar, herhangi bir panonun doğru sayılar taşıyıp taşımayacağını belirler. Pano konusu (bkz. Konu 11.1 “Hizmet metrikleri panosu tasarlamak”) bu anlaşmaları bir tasarıma dönüştürür: küçük kümeler, bağlam, eğilim ve her hedef kitleye uygun görünümler. Araç konusu (bkz. Konu 11.2 “Araç manzarası”) ise hangi platformların ve veri hatlarının, yararından büyük bir projeye dönüşmeden veriyi sağlayabileceğini sorar.

Olgunluk modeli (bkz. Konu 11.4 “Metrik programları için olgunluk modeli”) programa, her konuda kullanılan aynı ölçeği kullanarak nerede olduğunu ve bir sonraki adımın ne olabileceğini anlatma yolu verir. Yol haritası (bkz. Konu 11.5 “Artımlı benimseme yol haritası”) bunu küçük adımlardan oluşan bir plana çevirir; her adım, bir sonrakisi başlamadan önce ölçülen kişilere biraz değer sunar. Bu, kitabın geri kalanında hizmetler için önerilen sürekli teslimat mantığının aynısıdır: yararlı bir şeyi erken teslim edin, kullanımından öğrenin ve iyileştirin.

Birkaç eşleştirme programı dürüst tutar. Sonuç panosu, verinin nasıl toplandığının ve bilinen boşluklarının kaydıyla birlikte okunmalıdır. Bir devreye alma planı, verinin ne için kullanılmayacağına dair bir sözle birlikte okunmalıdır. Bir araç seçimi, ondan ayrılmanın maliyetiyle birlikte okunmalıdır. Bir olgunluk puanı sohbeti başlatan bir şey olarak ele alınmalı, hiçbir zaman hedef olarak ele alınmamalıdır.

Bölüm, 1. bölümdeki temellerden, özellikle metrik yönetişiminden (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”) ve veri kaynaklarından (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”), ayrıca 9. bölümdeki iyileştirme ve değişim ölçümlerinden (bkz. Konu 9.5 “Sürekli iyileştirme metrikleri” ve Konu 9.6 “Kurumsal değişim ve benimseme metrikleri”) yararlanır. 12. bölümdeki ekler, bir program takımının günlük işinde kullanacağı kontrol listelerini, şablonları ve birleştirilmiş başvuruları sunar.
