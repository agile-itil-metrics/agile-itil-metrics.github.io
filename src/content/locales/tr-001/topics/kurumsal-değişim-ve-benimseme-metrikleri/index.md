# Kurumsal değişim ve benimseme metrikleri

**Bir değişiklik, insanlar yeni şeyi, yapılması amaçlanan nedenlerle yaptığında ve sonuç iyileştiğinde yerleşmiş demektir. Bu yüzden törenlerin varlığını değil, amacı ve etkiyi ölçün ve değişimin temposunu insanların sürdürebileceği bir düzeyde tutun.**

## Genel bakış ve motivasyon

Kuruluşlar sürekli yeni çalışma biçimleri benimser: yeni bir hizmet yönetimi süreci, bir teslimat boru hattı, farklı bir takım yapısı, bir dizi çevik uygulama, bir olay çerçevesi. Duyurular kolaydır. Asıl soru, günlük davranışta neyin değiştiğidir ve amaçlanan faydanın ardından gelip gelmediği önemli olandır. Birçok program, eğitim verildiği, araçlar kurulduğu ve yeni sözcük dağarcığı kullanıldığı için başarı bildirir; oysa iş aynı görünür ve sonuçlar kıpırdamamıştır.

Çevik Manifesto’nun ilkeleri, en iyi mimarilerin, gereksinimlerin ve tasarımların kendi kendini örgütleyen takımlardan ortaya çıktığını ve değişen gereksinimlerin hoş karşılandığını söyler. Ayrıca projeleri motive olmuş bireyler etrafında kurmayı ve onlara güvenmeyi, sabit bir tempoyu süresiz olarak sürdürmeyi söylerler. Bu ilkeler, uygulamaları yukarıdan dayatmaya ve uyumu ölçmeye karşı kalıcı bir argümandır. Değişime farklı bir yaklaşıma işaret ederler: insanları sürekli dahil edin, çalışma biçiminin evrilmesine izin verin ve onu sonuçlarla yargılayın.

Yazılım kültüründen gelen uyarıcı bir fikir, kargo kültüdür. [Kargo kültü programlama](https://en.wikipedia.org/wiki/Cargo_cult_programming), anlaşılmadan başka yerden kopyalanmış, hiçbir amaca hizmet etmeyen kod ya da uygulamaların törensel biçimde dahil edilmesini tanımlar. Richard Feynman’ın “kargo kültü bilimi” konuşması, gerçek şeyin dış biçimine sahip olup özünden yoksun işi tanımlamak için ilgili bir imge kullandı. Çalışma biçimlerine uygulandığında kargo kültü, bütün toplantıları yapan, bütün terimleri kullanan ve bütün panoları dolduran, ancak sürekli teslimat yapmayan, paydaşlarıyla iş birliği yapmayan ya da iyileştirmeyen takımdır. [Kargo kültü](https://en.wikipedia.org/wiki/Cargo_cult) yaklaşımı, bir uygulamanın biçimini amacıyla karıştırır. Bu konudaki metrikler, farkı anlamak için tasarlanmıştır.

Değişim çalışmalarından birkaç fikir yardımcı olur.

- **Değişim, teknik olduğu kadar bir [kurumsal değişim](https://en.wikipedia.org/wiki/Organizational_change) sorunudur.** [Değişim yönetimi](https://en.wikipedia.org/wiki/Change_management) insan tarafını ele alır: farkındalık, istek, bilgi, yetenek ve pekiştirme yaygın kullanılan unsurlar arasındadır. John Kotter’ın sekiz adımı ve Prosci’nin ADKAR’ı gibi modeller sözcük dağarcıkları sunar ve hiçbiri bir güvence değildir.
- **İnsanlar çoğu zaman sağlam nedenlerle değişime direnir.** [Değişime direnç](https://en.wikipedia.org/wiki/Resistance_to_change), öneride gerçek bir soruna, insanların değer verdiği bir şeye yönelik bir tehdide ya da yorgunluğa işaret edebilir. Bunu bilgi olarak ele alın.
- **Benimseme zaman içinde bir süreçtir.** [Yeniliklerin yayılımı](https://en.wikipedia.org/wiki/Diffusion_of_innovations) kuramı, yeni uygulamaların bir toplumsal sistemde, erken benimseyenlerden çoğunluğa, etki ve gözlem yoluyla nasıl yayıldığını tanımlar.
- **Kültür neyin yerleşeceğini şekillendirir.** Bir grubun ortak varsayımları ve davranışları olan [kurum kültürü](https://en.wikipedia.org/wiki/Organizational_culture), hangi değişikliklerin doğal hissettirdiğini ve hangilerinin reddedildiğini belirler.
- **Gözlem davranışı değiştirir.** [Hawthorne etkisi](https://en.wikipedia.org/wiki/Hawthorne_effect), insanların gözlemlendikleri için davranışlarını değiştirme eğilimidir. Yakın ilgi altında harika bir sonuç gösteren bir pilot, ölçekte tutmayabilir.

[Goodhart yasasından](https://en.wikipedia.org/wiki/Goodhart%27s_law) gelen koruma önlemi dönüşüm için özellikle geçerlidir: benimseme bir hedef olduğunda takımlar biçimi benimser. Arkasında bir zorunluluk olan “yeni süreci kullanan takımlar” panosu, yüksek benimseme ve düşük değişim gösterecektir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Bu konu, bir değişikliğin işe yaradığının kanıtı olarak daha önceki sonuç ölçümlerini (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”) ve iyileştirme ölçümlerini (bkz. Konu 9.5 “Sürekli iyileştirme metrikleri”) bir araya getirir.

## Temel ilkeler

- **Bir değişikliği törenleriyle değil, sonucuyla yargılayın.** Benimsemenin kanıtı daha iyi bir sonuçtur.
- **Her uygulamanın amacını açık kılın.** Kimse nedenini söyleyemiyorsa, kargo kültü adayıdır.
- **Etkilenen insanları sürekli dahil edin.** Onlar için değil, onlarla birlikte tasarlayın.
- **Zorunluluklar yerine gönüllü benimsemeyi ve evrimi tercih edin.** Takımlar uygulamaları kendi bağlamlarına uyarlar.
- **Değişim yükünü sınırlayın.** İnsanlar ancak bu kadarını sindirebilir ve sabit bir tempo, değişimi de içerir.
- **Direnci veri olarak ele alın.** Öneri hakkında ne söylediğini dinleyin.
- **Dürüstçe karşılaştırın.** Karşılaştırma grupları kullanın ve yalnızca gözlem altında görünen sonuçlara karşı temkinli olun.

## Metrik tanımları

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Amaç netliği | Bir uygulamanın amacını ve çalışıp çalışmadığını nasıl anlayacaklarını kendi sözcükleriyle ifade edebilen takım üyelerinin payı | kısa, anonim bir denetimde net bir amaç ve gösterge veren üyeler / sorulan üyeler, takım düzeyinde | yüzde | Takım bazında toplulaştırılmış kısa anonim denetim | Kurumsal değişim yönetimi; sürekli iyileştirme | Takımın neden bu şekilde çalıştığına dair anlayışı | Üç aylık |
| Uygulama benimseme genişliği | Tanımlı bir uygulamayı, katılım değil gözlemlenebilir davranışla tanımlandığı şekilde kullanan takımların payı | son dönemde tanımlı davranışı gösteren, takım ve bir gözlemci tarafından doğrulanmış takımlar / kapsamdaki takımlar | yüzde | Gözlemle doğrulanmış takım öz değerlendirmesi | Kurumsal değişim yönetimi | Bir uygulamanın yayılması | Üç aylık |
| Karşılaştırmaya göre sonuç hareketi | Benimseyen takımlar için bir sonuç ölçümündeki değişimin, aynı dönemde benzer benimsemeyen takımlarla karşılaştırılması | benimseyenler için sonuçtaki değişim eksi karşılaştırma takımları için değişim | sonuç birimleri | Takım başına sonuç ölçümleri (akış, kararlılık, deneyim) | Sürekli iyileştirme; ölçüm ve raporlama | Deneylerden öğrenme | Üç aylık |
| Değişim yükü | Bir takımı aynı anda etkileyen önemli değişikliklerin sayısı | dönemde bir takımdan çalışma biçimini değiştirmesini isteyen önemli değişim girişimlerinin takım başına sayısı | sayı | Değişim portföyü ve takım girdisi | Kurumsal değişim yönetimi; değişiklik yetkilendirme | Sürdürülebilir tempo | Üç aylık |
| Paydaş katılım oranı | Etkilenen insanların tasarıma ve gözden geçirmeye katıldığı değişim girişimlerinin payı | etkilenen insanların katılımı kayıtlı girişimler / girişimler | yüzde | Girişim kayıtları ve etkilenen takım onayı | Kurumsal değişim yönetimi; paydaş katılımı | Sürekli paydaş katılımı | Üç aylık |
| Gönüllü benimseme payı | Benimseyen takımlardan, yönlendirilmek yerine uygulamayı seçenlerin payı | uygulamayı seçtiğini bildiren benimseyen takımlar / benimseyen takımlar | yüzde | Takım raporları | Kurumsal değişim yönetimi | Kendi kendini örgütleyen takımlar | Yıllık |
| Geri dönüş oranı | Bir uygulamayı benimsedikten sonraki bir yıl içinde bırakan takımların payı | 12 ay içinde bırakan takımlar / benimseyen takımlar | yüzde | Zaman içinde takım kayıtları | Kurumsal değişim yönetimi; sürekli iyileştirme | Yararsız bulunduğu için terk edilen uygulamalar | Yıllık |

Uygulamayı adıyla değil, takımların ne yaptığıyla ve neyi amaçladığıyla tanımlayın. Benimseme genişliği, bir takımı yalnızca davranışı tanıma uyduğunda ve takım ile bir gözlemci hemfikir olduğunda sayar. Sonuç hareketi, hizmet türü ve başlangıç noktası bakımından önceden benzer seçilmiş karşılaştırma takımlarını kullanır ve başka neyin değiştiğini belirtir. Değişim yükü, takımdan işini değiştirmesini isteyen girişimleri sayar, olağan güncellemeleri saymaz. Tüm ölçümler takım ya da girişim düzeyindedir, asla bireysel değildir.

## Öneriler

### Amaç ve insanlarla başlayın

**1. Uygulamadan önce amacı ve göstergeyi belirtin.** Önerilen her değişiklik için hangi sorunu çözdüğünü, kimin hissettiğini, hangi sonucun iyileşmesi gerektiğini ve bunu nasıl anlayacağınızı yazın. Amaç “çevik olmak” ya da “çerçeveyi benimsemek” ise yeniden sorun. Takımlar, ne için olduğunu gördüklerinde bir uygulamayı daha gönüllü izler. Bu, kargo kültüne karşı en iyi korumadır.

**2. Etkilenen insanları değişikliğin tasarımına dahil edin.** İşi yapanlara neyin acıttığını, neyi deneyeceklerini ve nelerden korktuklarını sorun. Bir kısmıyla birlikte tasarlayın, küçük bir grupla sınayın ve dinleyin. Sürekli paydaş katılımı çevik bir temel amaçtır ve ürünler kadar değişim programları için de geçerlidir. Kimin katıldığını kaydedin.

**3. Direnci dinleyin.** İnsanlar karşı çıktığında, sizin görmediğiniz neyi gördüklerini sorun. Olası yanıtlar arasında önerideki bir kusur, eksik bir yetkinlik, kabul edilmemiş bir maliyet ya da hiç bitirilmemiş önceki bir değişim vardır. Kaygıları ve yanıtları kaydedin ve haklı oldukları yerde değişikliği uyarlayın.

### Değişimi öğrenilebilecek biçimde devreye alın

**4. Karşılaştırmayla pilot yapın.** Değişikliği bir ya da iki gönüllü takımla deneyin ve değişmeyen karşılaştırılabilir bir grubu izleyin. Sonuçları aynı dönemde karşılaştırın. Hawthorne etkisinin farkında olun ve yenilik etkisi sönsün diye pilotu yeterince uzun tutun. [Pilot proje](https://en.wikipedia.org/wiki/Pilot_project) küçük ölçekli bir sınamadır ve değeri, ölçeklemeden önce öğrettiği şeydedir; bu yüzden neyi öğrenmeyi umduğunuzu ve neyin sizi durduracağını önceden belirtin.

**5. Gönüllü benimsemeyi tercih edin ve uygulamaların evrilmesine izin verin.** Takımlar bir uygulamayı onlar için bir sorunu çözdüğü için seçtiğinde, onu uyarlar ve sürdürürler. Dayatıldığında ise onu sahnelerler. Amacı, kanıtı ve desteği sunun ve takımların nasıl uygulayacağına karar vermesine izin verin. Yerel çeşitliliğe izin verin ve ondan öğrenin. Bir uygulamanın doğru nedenlerle yerleşip yerleşmediğini görmek için gönüllü benimsemeyi ve geri dönüşü izleyin.

**6. Örnek ve konuşma yoluyla yayın.** Etki, saygı gören ve görünür insanlar aracılığıyla yayılır. Bir şey deneyen takımların ve ne olduğunun, aksiliklerin de dahil, hikâyelerini paylaşın. Uygulama toplulukları iyi bir kanaldır (bkz. Konu 9.4 “Beceri ve öğrenme metrikleri”). Benimseme sıralama tablolarından kaçının.

### Yüke dikkat edin

**7. Her takımın üzerine düşen değişiklikleri sayın.** Bir takımdan çalışma biçimini değiştirmesini isteyen girişimleri listeleyin: yeni araçlar, yeni süreçler, yeniden yapılanmalar, raporlama gereksinimleri. Aynı anda birçoğuyla karşılaşan bir takım bunları sindiremez ve [değişim yorgunluğu](https://en.wikipedia.org/wiki/Change_fatigue) başlar. Girişimleri sıraya koyun, düşük değerli olanları bırakın ve takımlara bir sonrakinden önce bir değişikliği bitirmeleri için alan verin. Bu, sürdürülebilir tempoyu korumanın parçasıdır (bkz. Konu 9.2 “Memnuniyet ve iyi oluş metrikleri”).

**8. Artık işe yaramayanı emekliye ayırın.** Eklenen her yeni uygulama için nelerin kaldırılabileceğini sorun. Süreç katmanları birikir ve her katmanın bir maliyeti vardır. Bir takımın her çeyrekte yürüttüğü törenleri gözden geçirin ve amacına artık hizmet etmeyenleri bırakın.

### Benimsemeyi önemli olanla ölçün

**9. Benimsemeyi gözlemlenebilir davranış ve amaçla tanımlayın.** Uygulama yerleştiğinde bir takımın farklı olarak ne yaptığını tanımlayın; örneğin “değişiklikler otomatik denetimlerle küçük adımlarla üretime ulaşır ve kullanıcılara her hafta danışılır”. Panolar ya da toplantılar gibi eserleri sayarak değil, gözlem ve konuşmayla değerlendirin. Takım üyelerinden amacı açıklamalarını isteyin.

**10. Uyumu değil, sonuçları karşılaştırın.** Benimseyen takımlar için akış, kararlılık, deneyim ve maliyet ölçümlerine karşılaştırma takımlarına göre bakın (bkz. Konu 2.8 “DORA metrikleri”). Nedensellik konusunda dikkatli olun: benimseyen takımlar, sonuçları da etkileyen biçimlerde farklı olabilir. Karşılaştırmayı sınırlarıyla birlikte raporlayın.

**11. İnsanların deneyimini denetleyin.** Sürtünmeyi artıran ya da özerkliği aşındıran benimseme kendi kendini baltalayabilir. Değişikliğin nasıl hissettirdiğini görmek için takım sağlığı ve iyi oluş nabızlarını kullanın (bkz. Konu 9.1 “Takım sağlığı ve geliştirici deneyimi”). Değişikliğin neyi eklediğini olduğu kadar neyi aldığını da sorun.

**12. Raporlamada dürüst olun.** Benimsemeyi, sonuçları, değişim yükünü ve geri dönüşleri, nelerin öğrenildiği hikâyesiyle birlikte raporlayın. Biçim yayılmışken ve sonuçlar kıpırdamamışken başarı ilan etmekten kaçının. Bir uygulamanın uymadığını kabul edin ve geri çekin. Bir dönüşüm, ne kadar geniş duyurulduğuyla değil, neyi mümkün kıldığıyla yargılanır.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl oyunlaştırılır | Eşleştirilmiş koruma metriği veya uygulaması |
| --- | --- | --- |
| Amaç netliği | İnsanları amacı ezberletmek; yönlendirici sorular sormak | Anonim denetim; nasıl anlayacaklarına dair bir örnek isteyin; sonuç hareketiyle karşılaştırın |
| Uygulama benimseme genişliği | Panoları ve toplantıları saymak; takımların gözlemci için gösteri yapması | Davranış ve amaçla tanımlayın; takım dışından biri tarafından gözlem; sonuç hareketi |
| Karşılaştırmaya göre sonuç hareketi | Elverişli bir karşılaştırma grubu ya da dönem seçmek; diğer değişiklikleri dışarıda bırakmak | Karşılaştırmayı ve dönemi önceden seçin; diğer değişiklikleri listeleyin; belirsizliği gösterin |
| Değişim yükü | Bir girişimi küçük parçalara bölmek; gayriresmî olarak gelen değişiklikleri saymamak | Takımın işi üzerindeki etkiye göre sayın; takımlardan sindirdiklerini listelemelerini isteyin |
| Paydaş katılım oranı | İnsanları bir bilgilendirmeye çağırıp buna katılım demek; yalnızca katılımı kaydetmek | Etkilenen takımın tasarımı etkilediğini onaylaması; yanıt olarak yapılan değişiklikleri kaydedin |
| Gönüllü benimseme payı | Bir zorunluluğu seçim olarak sunmak; takımların mecbur hissettikleri hâlde seçtik demesi | Anonim rapor; reddetselerdi ne olacağını sorun |
| Geri dönüş oranı | Bir uygulamayı bırakmayı maliyetli veya gizli hâle getirmek; bırakılan uygulamayı yeniden adlandırmak | Bırakma nedenlerini gözden geçirin; güvenli geri çekilmeye izin verin |

Sağlıklı bir okuma şöyledir: takımların açıklayıp seçebildiği bir uygulama, davranışla ölçülen benimseme, karşılaştırmaya göre iyileşen sonuçlar, yönetilebilir bir değişim yükü, iyi nedenleri olan birkaç geri dönüş ve sesinin değişikliği şekillendirdiğini söyleyen insanlar.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yönü | Zayıf yönü |
| --- | --- | --- |
| Zorunlu kullanıma sokma | Hızlı, tutarlı | Amaçsız uyum; kırgınlık; kargo kültü |
| Gönüllü benimseme | Motive olmuş benimseyenler; yerel uyum | Daha yavaş; dengesiz; bazı takımlar hiç benimsemez |
| Büyük patlama değişimi | Net bir olay | Yüksek risk; ağır yük; ondan öğrenmesi zor |
| Karşılaştırmalı aşamalı pilotlar | Ölçeklemeden önce öğrenme | Daha yavaş; pilotlar genellenmeyebilir |
| Takımlar arasında standart uygulamalar | Daha kolay koordinasyon ve destek | Bazı takımlar için zayıf uyum |
| Yerel çeşitlilik | Bağlama uyum | Karşılaştırması ve desteklenmesi daha zor |
| Benimseme panoları | Görünür ilerleme | Benimsemenin biçimini ödüllendirir |
| Sonuç karşılaştırması | Dürüst sinyal | Ayrıştırması zor; göstermesi daha yavaş |

Düz yanıt şudur: karşılaştırmayla pilot yapın, uygulamaları amaçlarıyla sunun, takımların seçmesine ve uyarlamasına izin verin, değişim yükünü sayın ve sonuçlarla yargılayın; herhangi bir standardı yalnızca koordinasyonun gerektirdiği yerde kullanın.

## Takımınızla tartışılacak sorular

**1. Hangi uygulamayı izliyoruz ki amacını kimse açıklayamıyor?**
Herkes bir tane söyler. Her biri için hangi sorunu çözmesi amaçlandığını ve hâlâ çözüp çözmediğini tartışın. Kolaylaştırıcı yanıtları savunmacı olmadan kaydetmelidir. Bunlardan ikisini tutmak, değiştirmek ya da bırakmak üzerinde anlaşın.

**2. Şu anda üzerimize hangi değişiklikler iniyor ve hangileri bekleyebilir?**
Bizden çalışma biçimimizi değiştirmemizi isteyen her girişimi listeleyin. Sayın. Hangilerinin değer, hangilerinin yük eklediğini sorun. Sponsorlara bunlardan biri için bir sıralama ya da durdurma önerin.

**3. Son değişiklikte neye hayır dedik ve kimse dinledi mi?**
Direnci ya da kaygıları hatırlayın. Duyuldular mı ve değişiklik uyum sağladı mı? Kaygıları, karşılık bulacak biçimde nasıl dile getireceğinizi tartışın. Takımın bir sonraki değişiklikte nasıl geri bildirim vereceği üzerinde anlaşın.

**4. Bu değişiklik işe yarasaydı sonuçlarımızda ne farklı olurdu ve bunu nasıl anlardık?**
Göstergeyi ve karşılaştırmayı taslaklayın. Aynı anda başka neyin değiştiğini sorun. Kimse söyleyemiyorsa, değişikliğin bir amacı yoktur. Bir başlangıç değeri üzerinde şimdi anlaşın.

**5. Yeni bir uygulamanın yalnızca gösteri için olduğunu nasıl anlardık?**
İşaretleri düşünün: çıktıyı kimse kullanmıyor, toplantının bir kararı yok, pano bir izleyici kitlesi için güncelleniyor. Bunları nasıl denetleyeceğinizi tartışın. Takımın yürüttüğü törenleri gözden geçirmek için bir zaman üzerinde anlaşın.

**6. Hangi uygulamayı bıraktık ve bırakmaktan ne öğrendik?**
Birini hatırlayın. Bırakmanın güvenli olup olmadığını ve yerine neyin geçtiğini tartışın. Yanıtı, takımların uyum sağlayabildiğinin kanıtı olarak ele alın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları değişikliklerle yaşar. Amacı istemeli, tasarıma kendilerini dahil etmeli, küçük deneyler yürütmeli ve bir uygulamanın uymadığını söylemelidir. Çalışma biçimlerini evriltme hakları vardır ve tercihlerini haklı çıkaran sonuçlar teslim etme görevleri vardır.

### Hizmet ve operasyon takımları

Operasyon takımları süreç değişikliklerini birçok yönden, çoğu zaman plansız işin üstüne emer. Değişim yükünü kaydetmeli, sıralama istemeli ve görüşlerinin önemli olduğu pilotlara katılmalıdır. Yeni bir sürecin değer katmadan adım eklediğini fark etmek için iyi konumdadırlar.

### Liderlik ve yönetişim

Liderler değişikliklere sponsor olur ve çoğu zaman dayatır. Amaçları ve göstergeleri belirtmeli, etkilenen insanları dahil etmeli, mümkün olduğunda gönüllü benimsemeyi tercih etmeli, değişim yükünü sınırlamalı ve işe yaramayanı geri çekmeye hazır olmalıdır. Yönetişim, karşılaştırmaya göre sonuçlara, takım başına değişim yüküne ve geri dönüş oranlarına bakmalı ve her yerde yüksek çıkan benimseme rakamlarına güvenmemelidir.

### Müşteriler ve kullanıcılar

Kullanıcılar değişimin etkilerini hizmet kalitesinde, iletişimde ve kararlılıkta yaşar. Kendilerini etkileyen değişikliklerin tasarımına dahil edilebilirler ve geri bildirimleri değişikliğin yardımcı olup olmadığının kanıtıdır. Ayrıca takımları hizmetten uzaklaştıran dönüşümlerin maliyetini de taşırlar.

## Uygulamada: çevik bir ITIL örneği

Çok uluslu bir lojistik şirketinin teknoloji bölümünün 30 takımı vardır. İki yıl önce, standart bir çalışma biçimleri kümesini benimsemek için bir dönüşüm programı başlatmıştır ve program panosu 30 takımın 27’sini “benimsedi” olarak gösterir. Aşağıdaki sayılar örnek niteliğindedir.

Yeni mühendislik uygulamaları başkanından programın işe yarayıp yaramadığı sorulur. Panonun ötesine bakar. Kısa bir anonim denetim, takım üyelerinin yalnızca yüzde 41’inin ana uygulamaların amacını ve çalıştıklarını anlamanın bir yolunu ifade edebildiğini gösterir. Sekiz takımın gözlemi, beşinin öngörülen toplantıları yaptığını ve panoları güncellediğini gösterir ve bu beşin ikisi hâlâ elle onayla üç ayda bir yayın yapmaktadır. Uygulama davranışı en güçlü olan 12 takımla benzer ancak olmayan 12 takım karşılaştırıldığında, medyan çevrim süresi ve değişiklik başarısızlık oranı benzerdir ve çalışma biçiminden memnuniyet, en güçlü uyum altındaki takımlarda daha düşüktür. Ortalama takım, çalışma biçimini değiştirmesini isteyen beş girişimi sindirmektedir ve üç takım sekiz veya daha fazlasıyla karşı karşıyadır. Takımların yüzde 22’si gönüllü olarak benimsemiştir. İki yıl önce bir boru hattı uygulamasını benimseyen takımların yüzde 30’u sessizce bırakmıştır.

Mühendislik uygulamaları başkanı programı takımlarla yeniden çerçeveler. Her uygulamanın amacı sade bir dille bir göstergeyle yazılır ve takımlar benimsemekte, uyarlamakta ya da reddetmekte, nedeni üzerine bir konuşmayla birlikte, özgürdür. Bölüm, takım başına değişim yükünü yayımlar ve sponsorlardan girişimlerini sıraya koymalarını ister; dördü duraklatılır ve ikisi birleştirilir. İstekli takımlar, otomatik denetimli küçük adımlı bir yayın uygulamasını, önceden seçilmiş bir karşılaştırma grubuyla pilotlar ve sonuçlar hikâyeler ve sayılar olarak paylaşılır. İş ve operasyonlardan paydaşlar iki süreç değişikliği için tasarım oturumlarına katılır. Raporlama, benimseme sayılarından sonuç hareketine, değişim yüküne ve geri dönüşe değişir.

Bir yıl sonra takım üyelerinin yüzde 71’i kullandıkları uygulamaların amacını ifade edebilir. Pilot takımlar medyan çevrim süresini, karşılaştırma grubundaki yüzde 6’lık azalmaya karşı yüzde 30 azaltır; Hawthorne etkisi, pilot iki ay daha uzatılarak göz önüne alınmıştır. Ortalama değişim yükü takım başına üç girişime düşer. Gönüllü benimseme yüzde 64’e yükselir ve geri dönüşler, nedenleri kayıtlı olarak yüzde 9’dur. Operasyon direktörü, yıl sonuna kadar yüzde 100 benimseme hedefi ister. Mühendislik uygulamaları başkanı bunun yerine sonuçları ve yükü izlemeyi önerir ve zorunlu bir yüzde 100’ün önceki başarı görünümünü ve önceki geri dönüşü ürettiğini açıklar. Karar kaydedilir ve pano benimseme sayısını bırakır.

## Sektör mercekleri

**Girişim (startup).** Değişim süreklidir ve uygulamalar kurucuların ve ilk işe alınanların elinden gelir. Her uygulamanın amacını açık tutun ve yardımcı olmayan her şeyi bırakın. Büyük bir şirketin sorunlarına sahip olmadan onun sürecini kopyalamaya direnin.

**Küçük işletme.** Çoğu zaman sahibi karar verir ve değişim kişiseldir. Nedenini açıklayın, etkilenen birkaç kişiyi dahil edin, bir seferde bir değişiklik deneyin ve hedeflediği acının hafifleyip hafiflemediğini denetleyin. Takımın sindirme kapasitesini aşan çerçeve satın alımlarından kaçının.

**Büyük kurum.** Ölçek standartları, programları ve danışmanları davet eder ve bunlarla birlikte hacimli kargo kültü riskini. Amaçlarıyla birlikte ortak uygulamalar sunun, gönüllü benimsemeyi destekleyin, değişim portföyünü takım yüküne göre yönetin ve sonuçları dürüstçe karşılaştırın. İşe yarayanı yaymak için uygulama topluluklarını kullanın.

**Kamu sektörü.** Değişim yasama, yeniden yapılanma ve siyasi döngüler tarafından, sınırlı seçenekle yönlendirilebilir. Seçeneğin sınırlı olduğu yerde bu konuda şeffaf olun, amaca ve sonuca odaklanın ve çalışanları ve kullanıcıları erkenden dahil edin. Çalışan korumaları ve danışma yükümlülükleri geçerli olabilir ve kamuya karşı hesap verebilirlik, işe yaramayanın dürüstçe raporlanmasını değerli kılar (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Değişimi iyi ölçmenin maliyetleri küçüktür: kısa denetimler, mevcut ölçümlerden karşılaştırma verisi, gözlem zamanı ve takım bazında bir girişim listesi. Daha büyük maliyet, gözde bir programın işe yaramadığını duymaya istekli olmaktır.

Getiriler, başarısız dönüşümlerin çok büyük maliyetini boşa harcamamaktan gelir: eğitim, danışmanlık, araçlar ve birçok insanın zamanı, artı değişim yorgunluğunun ve kaybedilen güvenin maliyeti. Gerekçeyi kendi geçmişinizden kurun: geçmiş bir programın maliyeti ve hangi sonuçları hareket ettirdiği, her takım için yarışan girişim sayısı ve benimsenen uygulamaların sonradan bırakılan oranı. Kaynağını ve yöntemini izleyemediğiniz sürece dönüşüm başarısızlık oranlarına dair istatistikleri aktarmaktan kaçının. Karşılaştırmalı pilotlarla daha erken rota düzeltmenin faydasını da ekleyin (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”).

## Anti-desenler ve tuzaklar

- **Benimsemeyi başarı olarak raporlamak.** Biçim, öz olmadan yayılabilir. Karşılaştırmaya göre sonuçları raporlayın.
- **Uygulamaları zorunlu kılmak.** Tören ve kırgınlık üretir. Amaçları sunun ve takımların seçmesine izin verin.
- **Başka bir şirketin sürecini kopyalamak.** Biçimi ithal eder, onu işleten koşulları değil. Kendi sorunlarınızdan başlayın.
- **Aynı anda çok fazla değişiklik.** Yük kapasiteyi aşar. Sayın ve sıraya koyun.
- **Direnci küçümsemek.** Bilgi kaybedersiniz. Dinleyin ve uyarlayın.
- **Karşılaştırmasız pilotlar.** Yenilik etkileri yanıltır. Bir karşılaştırma ve daha uzun bir dönem kullanın.
- **Hiçbir şeyi emekliye ayırmamak.** Süreç katmanları birikir. Eklerken kaldırın.
- **Başarı tiyatrosu.** Sayısız hikâyeler ya da hikâyesiz sayılar gerçeği gizler. İkisini de dürüstçe raporlayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Amaç ve katılım | Uygulamalar duyurulur | Amaçlar sunumlarda belirtilir | Her değişiklik için amaç ve gösterge yazılır; etkilenen insanlara danışılır | Katılım ve amaç netliği ölçülür; direnç kaydedilir ve yanıtlanır | Değişim, kurum genelinde ve iş ortaklarıyla kullanıcılar ve takımlarla birlikte tasarlanır |
| Devreye alma ve kanıt | Büyük patlama kullanıma sokmaları | Karşılaştırmasız pilotlar | Karşılaştırma gruplu pilotlar; benimseme davranışla tanımlanır | Sonuç hareketi ve geri dönüş izlenir; kanıtın sınırları raporlanır | Hangi değişikliklerin işe yaradığına dair portföy genelinde öğrenme, açıkça paylaşılır |
| Yük ve sürdürülebilirlik | Değişim yüküne dair görüş yok | Girişimler listelenir | Değişim yükü takım başına sayılır ve sıraya konur | Yük kapasiteyle yönetilir; uygulamalar emekliye ayrılır | Değişim, kapasite, iyi oluş ve teslimat hedefleriyle birlikte planlanır |

## Kontrol listesi

- [ ] Her değişikliğin yazılı bir amacı, adı konmuş bir göstergesi ve bir başlangıç değeri var.
- [ ] Etkilenen insanlar tasarıma katıldı ve girdileri kayıtlı.
- [ ] Kaygılar ve direnç, yanıtlarla birlikte kaydedildi.
- [ ] Pilotların bir karşılaştırma grubu ve yeniliğin sönmesine yetecek uzunlukta bir dönemi var.
- [ ] Benimseme, gözlemlenebilir davranış ve amaçla tanımlanmış.
- [ ] Gönüllü benimseme ve geri dönüş nedenleriyle birlikte izleniyor.
- [ ] Takım başına değişim yükü sayılıyor ve girişimler sıraya konuyor.
- [ ] Uygulamalar en az yılda bir kaldırma açısından gözden geçiriliyor.
- [ ] Sonuç hareketi sınırlarıyla raporlanıyor.
- [ ] Hiçbir hedef, takımların belirli bir yüzdesinin bir uygulamayı benimsemesini gerektirmiyor.

## Yapay zekâ istemleri

**Bir değişiklik için amaç ve gösterge yazın.**

```text
[kurum türü] içinde [takımlar] için [değişiklik] getirmeyi planlıyoruz. Sade
dilde tek paragraflık bir amaç (sorun, kimin hissettiği, iyileşmesi gereken
sonuç), şimdi kaydedilecek bir başlangıç değeri olan bir gösterge, değişmeyen
benzer takımlarla karşılaştırmanın bir yolu ve uygulamanın amaçsız bir törene
dönüştüğünün işaretlerini taslakla. Kanıt uydurma. Varsayımlarını ve etkilenen
takımlar için sorularını listele.
```

**Değişim yükünü sayın ve sıraya koyun.**

```text
[takım veya grup] için önümüzdeki [dönem] içinde çalışma biçimini değiştirmesini
isteyecek girişimlerin listesi şöyle: [sponsorlar, büyüklük ve tarihlerle
yapıştırın]. Takım başına yükü say, çakışmaları ve bağımlılıkları belirle ve işe
ve sürdürülebilir tempoya yer bırakan bir sıra öner. Hangilerinin
birleştirilebileceğini, ertelenebileceğini ya da bırakılabileceğini öner.
Hepsini yapabileceğimizi varsayma. Varsayımlarını listele.
```

**Karşılaştırmalı bir pilot tasarlayın.**

```text
[sayı] gönüllü takımla ve [sayı] benzer takımdan oluşan bir karşılaştırma
grubuyla [değişiklik] pilotu tasarla. Sonuç ölçümlerini ve başlangıç
değerlerini, süreyi (yeniliğin sönmesi için zaman dahil), karşılaştırma
grubunun önceden nasıl seçileceğini, sonucu başka nelerin karıştırabileceğini
ve neyin bizi ölçeklemeye, uyarlamaya ya da durdurmaya götüreceğini öner. Başka
kuruluşlardan sonuç iddia etme. Varsayımlarını listele.
```

**Kargo kültü için denetleyin.**

```text
Takımlarımızın izlediği bir uygulama şöyle: [eserleri ve toplantılarıyla
açıklayın]. Takım üyelerine, amacı anlayıp anlamadıklarını, iyileştirmesi
gereken sonucu adlandırıp adlandıramadıklarını ve onu kendi bağlamlarına
uyarlayıp uyarlamayacaklarını görmek için yöneltebileceğim on soru sor.
Uygulamanın gösteri için yapıldığını düşündüren eserlerdeki işaretleri ekle.
Bireyleri yargılama. Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): bir benimseme veya değişim metriği için eşleştirilmiş koruma önlemini bulmak üzere kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir benimseme metriği girdisinin davranışı ve sonucu ölçtüğünü, oyunlaştırma yolu ve koruma önlemiyle birlikte denetlemek için kullanın.

## Temel çıkarımlar

- Bir değişikliği törenlerinin yayılmasıyla değil, bir karşılaştırmaya göre sonucuyla yargılayın.
- Uygulamadan önce amacı ve göstergeyi yazın ve insanların bunu açıklayıp açıklayamadığını sınayın.
- Etkilenen insanları sürekli dahil edin ve direnci bilgi olarak ele alın.
- Gönüllü benimsemeyi tercih edin, uygulamaların evrilmesine izin verin ve geri dönüşleri izleyin.
- Değişim yükünü her takım için sayın ve sürdürülebilir bir tempo içinde tutun.
- İşe yaramayanlar dahil dürüstçe raporlayın ve artık hizmet etmeyen uygulamaları emekliye ayırın.

## Kaynaklar ve ileri okuma

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Kotter, J. P., *Leading Change*, Harvard Business School Press, 1996.
3. Hiatt, J. M., *ADKAR: A Model for Change in Business, Government and our Community*, Prosci Learning Center Publications, 2006.
4. Schein, E. H., *Organizational Culture and Leadership*, 5th ed., Wiley, 2016.
5. Feynman, R. P., "Cargo Cult Science," Caltech commencement address, 1974, reprinted in *Surely You're Joking, Mr. Feynman!*, W. W. Norton, 1985.
6. Kerr, S., "On the folly of rewarding A, while hoping for B," *Academy of Management Journal*, 18(4), 1975.
7. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
8. Wikipedia, [Cargo cult programming](https://en.wikipedia.org/wiki/Cargo_cult_programming).
9. Wikipedia, [Cargo cult](https://en.wikipedia.org/wiki/Cargo_cult).
10. Wikipedia, [Organizational change](https://en.wikipedia.org/wiki/Organizational_change).
11. Wikipedia, [Change management](https://en.wikipedia.org/wiki/Change_management).
12. Wikipedia, [Resistance to change](https://en.wikipedia.org/wiki/Resistance_to_change).
13. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
14. Wikipedia, [Organizational culture](https://en.wikipedia.org/wiki/Organizational_culture).
15. Wikipedia, [Hawthorne effect](https://en.wikipedia.org/wiki/Hawthorne_effect).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Pilot project](https://en.wikipedia.org/wiki/Pilot_project).
18. Wikipedia, [Change fatigue](https://en.wikipedia.org/wiki/Change_fatigue).
