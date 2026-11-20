# Metrik yönetişimi ve sahipliği

**Kimsenin sahiplenmediği, tanımlamadığı, gözden geçirmediği ya da emekliye ayırmadığı bir metrik, tarif ettiği işten uzaklaşacaktır; bu yüzden raporlanan her metriğe adı konmuş bir sahip, yazılı bir tanım, bir gözden geçirme tarihi ve bir çıkış verin.**

## Genel bakış ve motivasyon

Metrik yönetişimi, bir ölçüyü kimin sahiplendiği, ne anlama geldiği, kimin görebileceği, ne sıklıkla gözden geçirildiği ve ne zaman kaldırıldığı hakkındaki hafif kararlar kümesidir. Bir kurumda veri kullanılabilirliğinin, kalitesinin ve güvenliğinin daha geniş yönetimini kapsayan [veri yönetişiminin](https://en.wikipedia.org/wiki/Data_governance) yakın bir akrabasıdır. Metrik yönetişimi aynı disiplini, ekiplerin ve liderlerin hizmet ve teslimat işini yönlendirmek için kullandığı küçük, yüksek görünürlüklü sayılar kümesine uygular.

İhtiyaç, küçük ve tekrarlayan sürtünmeler olarak ortaya çıkar. İki ekip “çözüm süresini” farklı hesaplar ve rakamları uzlaştırmak için bir toplantı harcar. Bir pano kutucuğu, onu kuran kişi iş değiştirdiği için aylarca bayatlar. Bir ekibin akışını teşhis etmesine yardım etmek için tasarlanmış bir ölçü, bir yönlendirme kurulu tarafından performans hedefi olarak benimsenir; bu, önceki konunun uyardığı durumdur (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Bunların hiçbiri istatistiksel bir sorun değildir. Her biri bir sahiplik sorunudur ve her biri önlenmesi ucuz bir sorundur.

Çevik ve ITIL görüşleri vurguda ayrışır ve bu fark yararlıdır. Çevik görüşte bir ekip çalışma ölçülerinin sahibidir ve bunları retrospektiflerde, çalışma anlaşmalarında ve gözden geçirmelerde müzakere eder. ITIL 4'te (AXELOS'tan gelen, şimdi PeopleCert tarafından yayımlanan 2019 sürümü) belgelendiği haliyle ITIL görüşü ölçüm ve raporlamayı genel bir yönetim uygulaması, sürekli iyileştirmeyi ise kendi rolleri, kayıtları ve gözden geçirmesi olan bir uygulama olarak ele alır. ITIL ayrıca hizmet sahiplerinin ve uygulama sahiplerinin sonuçlardan hesap vermesini bekler. İki görüş birbirine uyar: ekip çalışma görünümünün, adı konmuş bir hizmet ya da uygulama sahibi raporlanan görünümün sahibidir ve küçük bir kayıt ikisini birbirine bağlar.

Burada kullanılan birkaç terim. **Metrik sahibi**, bir metriğin tanımı, veri kalitesi ve kullanımı için hesap verebilir tek kişidir. **Metrik kaydı**, kullanımdaki metriklerin, her birinin sahibi, tanımı, veri kaynağı, koruyucu önlemi ve gözden geçirme tarihiyle birlikte tutulan kısa bir kataloğudur. **Metrik tüzüğü**, bir metrik kümesi için amacın, kapsamın, rollerin ve gözden geçirme ritminin tek sayfalık bir ifadesidir. **[Tek doğru kaynak (single source of truth)](https://en.wikipedia.org/wiki/Single_source_of_truth)**, belirli bir rakamın hesaplandığı tek yetkili sistem ya da veri kümesidir. **[Veri sorumlusu (data steward)](https://en.wikipedia.org/wiki/Data_steward)** bir veri alanının kalitesine ve tanımına bakar; küçük bir kurumda metrik sahibi çoğu zaman bu rolü oynar. **[RACI matrisi](https://en.wikipedia.org/wiki/RACI_matrix)** her etkinlik için kimin sorumlu, hesap verebilir, danışılan ve bilgilendirilen olduğunu kaydeder. **[Veri sözlüğü](https://en.wikipedia.org/wiki/Data_dictionary)**, veri öğelerinin ve anlamlarının bir kataloğudur; kaydın tanım sütunu daha büyük ölçekte bu hale gelir. **[En az ayrıcalık ilkesi](https://en.wikipedia.org/wiki/Principle_of_least_privilege)**, insanların ve sistemlerin görevleri için ihtiyaç duydukları erişimi alıp fazlasını almadıklarını söyler. **[Sürekli iyileştirme](https://en.wikipedia.org/wiki/Continual_improvement_process)**, hizmetleri, uygulamaları ve çalışma biçimlerini iyileştirmeye yönelik süregelen çabadır ve hem bir ITIL uygulaması hem de çevik bir alışkanlıktır. SLA hizmet düzeyi anlaşması, ITSM ise BT hizmet yönetimi anlamına gelir.

## Temel ilkeler

- **Raporlanan her metriğin adı konmuş tek bir sahibi vardır.** Bir rol ya da bir kişi; asla “ekip” değil. Ortak sahiplik tanımı bakımsız bırakır.
- **Bir tanım, bir tek doğru kaynak.** Tanımı bir kez yazın, saatin nerede başlayıp durduğunu da ekleyin ve rakamı tek bir yerde hesaplayın.
- **Yönetişimi sonuçla orantılı tutun.** Bir ekibin kendi panosundaki hataları ayıklamak için kullandığı bir metrik bir cümleye ihtiyaç duyar. Bir sözleşmedeki, kamuya açık bir rapordaki ya da bir yönetim kurulu paketindeki bir metrik tüzük girdisine, gözden geçirmeye ve bir denetim izine ihtiyaç duyar.
- **Erişim amacı izler.** Kimin hangi görünümü neden göreceğine karar verin. Bir ekibin çalışma görünümünün varsayılan hedef kitlesi ekiptir.
- **Bir ritimle gözden geçirin ve kanıta dayanarak emekliye ayırın.** Metriklerin yaşam döngüleri vardır. Onları bilinçli olarak benimseyin, gözden geçirin, revize edin ve emekliye ayırın.
- **Yazın ve küçük tutun.** Bir sayfaya sığan bir kayıt okunur. Bir politika el kitabı okunmaz.
- **Yönetişim ölçülen insanlara hizmet eder.** Bir metriğin sahipleri, işi onun tarif ettiği insanları da içerir.

## Metrik tanımları

Bunlar bir hizmetin değil, bir metrik uygulamasının sağlığının ölçüleridir. Bilinçli olarak azdır ve doğrudan kayıttan toplanması ucuzdur. Belirtilmedikçe her dönem bir takvim çeyreğidir.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Ritim |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sahiplik kapsamı | Raporlanan metrikler içinde adı konmuş, güncel bir sahibi olanların payı | dönem sonunda rolü hâlâ elinde tutan bir sahibi olan raporlanan metrikler / dönem sonunda raporlanan metrikler; yalnızca tek bir ekibin özel panosunda kullanılan metrikler hariç | yüzde | Metrik kaydı | Ölçüm ve raporlama | Çalışma anlaşmaları | Üç aylık |
| Tanım güncelliği | Raporlanan metrikler içinde, tanımı üzerinde anlaşılan aralık içinde gözden geçirilenlerin payı | son 6 ay içinde gözden geçirme tarihi olan metrikler / raporlanan metrikler; saat son kayıtlı gözden geçirmede başlar ve dönem sonunda durur | yüzde | Metrik kaydı değişiklik günlüğü | Ölçüm ve raporlama; sürekli iyileştirme | Retrospektif eylemleri | Üç aylık |
| Kaynak uyumu | Raporlanan metrikler içinde tam olarak bir adı konmuş kaynaktan hesaplananların payı | tek bir yetkili kaynağı olan ve bilinen paralel hesaplaması olmayan metrikler / raporlanan metrikler; paralel hesaplamalar panolardan ve raporlardan örnek alınarak bulunur | yüzde | Kayıt artı panolardan ve raporlardan bir örnek | Ölçüm ve raporlama; hizmet düzeyi yönetimi | Bir metrik için bitti tanımı | Üç aylık |
| Emekliye ayırma oranı | Bir dönemde emekliye ayrılan ya da birleştirilen metriklerin, raporlananlara oranı | dönemde emekliye ayrılan ya da birleştirilen metrikler / dönem başında raporlanan metrikler; özel bir ekip görünümüne taşınan bir metrik, raporlanan kümeden emekliye ayrılmış sayılır | yüzde | Metrik kaydı değişiklik günlüğü | Sürekli iyileştirme | Retrospektif eylemleri | Üç aylık |
| Erişim gözden geçirme güncelliği | Hedef kitle listesi aralık içinde gözden geçirilen kısıtlı metrik görünümlerinin payı | son 6 ayda hedef kitle gözden geçirmesi yapılan kısıtlı görünümler / kısıtlı görünümler; tüm kuruma açık görünümler hariç | yüzde | Erişim listesi ya da BI aracı izin dışa aktarımı | Bilgi güvenliği yönetimi; ölçüm ve raporlama | Çalışma anlaşmaları | Altı aylık |
| Karar bağlantısı | Raporlanan metrikler içinde, kayıtta bilgilendirdikleri bir karara bağlananların payı | kayıtlı bir kararı ya da sorusu olan metrikler / raporlanan metrikler; bir bağlantı yalnızca karar son 12 ayda alındıysa sayılır | yüzde | Metrik kaydı ve karar günlüğü | Sürekli iyileştirme | Paydaş gözden geçirmesi ve iyileştirme sonuçları | Üç aylık |

Bunların hiçbiri bir hedef değildir. Bir kayıt tam sahiplik kapsamı gösterebilir ve yine de işe yaramaz metrikleri tarif edebilir; bu yüzden tabloyu aşağıdaki manipülasyon tablosuyla birlikte okuyun.

## Öneriler

### Sahipliği ve kaydı oluşturun

**1. Tek sayfalık bir metrik kaydı tutun.** Her raporlanan metriği sorusu, sahibi, tanımı, formülü ve saatleri, birimi, veri kaynağı, hedef kitlesi, koruyucu önlemi, son gözden geçirme tarihi ve planlanan gözden geçirme tarihiyle listeleyin. Bir elektronik tablo ya da sürüm kontrolündeki bir Markdown dosyası yeterlidir. Kayıt bu konudaki en yararlı tek üründür ve önceki konu zaten onun var olduğunu varsayar (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

**2. Metrik başına bir sahip belirleyin ve rolü kaydedin.** Sahip tanımdan, veri kalitesinden ve garip sonuçların açıklanmasından hesap verebilir. Verilere ve kararlara yakın birini seçin; çoğu zaman hizmet sahibi, bir uygulama sahibi ya da bir ekip lideri. Kişinin yanı sıra rolü de kaydedin; böylece girdi bir iş değişikliğinden sağ çıkar ve bir boşluk kapsam rakamında görünür.

**3. Bir metriğin sahipliğini, onun ölçtüğü işin sahipliğinden ayırın.** Metriğin sahibi onu açıklar ve sürdürür, ama işi yapan ekip sonuçtan sorumlu kalır. Bu iki tuzaktan kaçınır: etkileyemeyeceği bir sayı için suçlanan sahip ve başka biri sürdürdüğü için bir sayıyı sahiplenmeyen ekip. Tüzükteki kısa bir RACI tablosu bunu açık kılar.

**4. Tanımı saatleriyle birlikte, bir kez yazın.** Kayıt yetkili tanımı tutar: neyin sayıldığı, saatin nerede başlayıp durduğu, hangi durumların onu duraklattığı ve neyin hariç tutulduğu. Metriği gösteren her panodan ona bağlantı verin. Bir tanımın değişmesi gerektiğinde, önce kayıtta değiştirin ve değişikliği grafik üzerinde işaretleyin (bir eğilimdeki kırılmanın nasıl gösterileceği için bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

**5. Her metriği tek bir yerde hesaplayın.** ITSM aracı, iş takip sistemi ya da izleme sistemi gibi yetkili kaynağı seçin ve bunu kayıtta belirtin. Rakamı yeniden üreten paralel elektronik tablolar ya ortadan kaldırılmalı ya da kimsenin onları resmi sayı sanmaması için yeniden adlandırılmalıdır. Veri soy ağacı ve araçlar bir sonraki konuya aittir (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

### Ritmi ve değişiklik denetimini belirleyin

**6. Tanımları sonuca uyan bir takvimle gözden geçirin.** Sözleşmelerdeki, düzenlemeye tabi raporlardaki ya da yönetici paketlerindeki metrikler için yılda iki kez ve altta yatan iş akışındaki her değişiklikte gözden geçirin. Ekip düzeyindeki çalışma ölçüleri için gözden geçirme retrospektiftir. Her gözden geçirme üç soru sorar: tanım hâlâ doğru mu, veri hâlâ sağlam mı ve biri sayıyı bir şeye karar vermek için kullandı mı?

**7. Tanım değişikliklerini bir hizmetteki değişiklikler gibi ele alın.** Değişikliği kimin istediğini, nedenini, kime danışıldığını ve yürürlüğe girdiği tarihi kaydedin. Bir durum iş akışındaki küçük bir değişiklik, bir zaman ölçüsünü sessizce büyük bir miktarda kaydırabilir. Tanımlar için hafif değişiklik denetimi, bu fikri törensiz biçimde değişiklik yetkilendirmeden ödünç alır (hizmet değişikliği karşılığı için bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”).

**8. Gözden geçirmeyi sürekli iyileştirmeye bağlayın.** Metrik gözden geçirmeleri iyileştirme işi ya da harekete geçmemeye dair açık bir karar üretmelidir. ITIL, sürekli iyileştirmeyi bir iyileştirme fırsatları kaydı olan bir uygulama olarak ele alır ve çevik ekipler aynı etkiyi retrospektif eylemleriyle elde eder. Bir gözden geçirme eylemsiz ve emekliye ayırmasız bitiyorsa, metriğin herhangi bir iş yapıp yapmadığını sorun (bkz. Konu 9.5 “Sürekli iyileştirme metrikleri”).

**9. Metrikleri bilinçli olarak emekliye ayırın.** Bir emekliye ayırma sınaması tanımlayın; örneğin “iki gözden geçirme döngüsüdür bir kararda anılmadı” ve bunu uygulayın. Tanımı ve son değerleri arşivleyin, varsa metriğin yerini neyin aldığını söyleyin ve hedef kitleye bildirin. Bir emekliye ayırma günlüğü, denetçiler için kanıt ve veriyi elle sürdüren insanlar için bir rahatlamadır.

### Görünümleri ve erişimi denetleyin

**10. Her görünüm için hedef kitleye karar verin.** Çoğu metriğin ekip için bir çalışma görünümü, hizmet sahibi ya da program için bir raporlanan görünümü ve bazen müşteriler, bir düzenleyici ya da bir tedarikçi için bir dış görünümü vardır. Hangi hedef kitlenin hangi görünümü neden aldığını kaydedin. En az ayrıcalık ilkesini rehber alarak, kişisel veri, güvenlik ayrıntısı ya da ticari açıdan hassas tedarikçi rakamları içeren görünümleri kısıtlayın ve geri kalanını açık bırakın; böylece şeffaflık varsayılan olur.

**11. Bireysel düzeydeki veriyi raporlamanın dışında tutun.** Bu kitabın katı kuralı, metriklerin ekipleri, hizmetleri ve sistemleri tarif ettiği, insanları değil olduğudur. Yönetişim bunu, raporlanan ayrıntı düzeyini, örneğin ekip ve hizmet olarak belirleyerek ve herhangi bir kişi düzeyindeki dışa aktarımı veri sorumlusuyla sınırlayarak destekler. Kişi düzeyinde bir döküm talebi geldiğinde, kaydedin, hangi karara hizmet ettiğini sorun ve bir ekip düzeyinde ya da sistem düzeyinde alternatif önerin (bkz. Konu 11.3 “Korku yaratmadan metrikleri devreye almak”).

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilmiş koruyucu metrik ya da uygulama |
| --- | --- | --- |
| Sahiplik kapsamı | Yüzde 100'e ulaşmak için bir yönetici ya da bir posta listesini sahip olarak adlandırmak; metriği açıklayabilecek ya da değiştirebilecek kimse olmadan | Her sahipten sayıdaki yakın tarihli bir hareketi açıklamasını isteyin; bir haftadan uzun süre yanıtsız kalan soruları izleyin |
| Tanım güncelliği | Tanımı okumadan gözden geçirme tarihine dokunmak | Her çeyrek üç girdiden örnek alın ve yazılı tanımı aracın gerçek yapılandırmasıyla karşılaştırın |
| Kaynak uyumu | Elektronik tablolar hâlâ dolaşıp çelişirken bir kaynağı yetkili ilan etmek | Bir rapor örneğinde aynı metrik için bulunan farklı rakamları sayın; farkları gözden geçirmede uzlaştırın |
| Emekliye ayırma oranı | Disiplinli görünmek için önemsiz ya da kullanılmayan metrikleri emekliye ayırmak ya da yeni sayılması için bir metriği yeniden adlandırmak | Neyin kaldırıldığı için emekliye ayırma günlüğünü gözden geçirin; toplam raporlanan sayıyı ve karar bağlantısı rakamını yanında izleyin |
| Erişim gözden geçirme güncelliği | Mevcut hedef kitle listesini okumadan onaylamak | Listeyi mevcut ekip üyeliği ve rollerle karşılaştırın; bulunan kaldırma sayısını raporlayın |
| Karar bağlantısı | Alanı karşılamak için “hizmeti iyileştir” gibi belirsiz bir karar yazmak | Tarihli bir karar ya da soru isteyin ve metriğe gerçekten başvurulup başvurulmadığı için karar günlüğünden örnek alın |

Sağlıklı bir okuma, değişen bir kayıttır. Girdilerin soruları yanıtlayan sahipleri, son altı aya düşen gözden geçirme tarihleri, gerekçeli bir emekliye ayırma günlüğü ve insanlar bilgilendirdikleri kararı adlandırabildiği için hâlâ istenen metriklerden oluşan kısa bir liste vardır. Her alanı dolu ve hiçbir şeyin hiç değişmediği bir kayıt bir uyarı işaretidir.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yön | Zayıf yön |
| --- | --- | --- |
| Merkezi metrik ofisi | Tutarlı tanımlar ve ortak araçlar; denetimi kolaylaştırır | Yavaş, işten uzak ve ekipler arasında farklı olması gereken ölçüleri standartlaştırmaya meyilli |
| Ortak kayıtla federe sahiplik | Sahipler verilere yakındır; kayıt ortak bir asgariyi korur | Ekipler arasında kalite kaymasını önlemek için istikrarlı teşvik gerektirir |
| Yalnızca ekibin sahip olduğu ölçüler | Hızlı ve işe uyar | Tanımlar ayrışır; toplulaştırmalar güvenilmez olur; bilgi insanlarla birlikte gider |
| Varsayılan olarak açık erişim | Güven ve ortak anlayış kurar | Hassas ya da kişi düzeyindeki ayrıntının açığa çıkma riski |
| Kısıtlı erişim | Hassas verileri korur | Yardım edebilecek insanlardan bağlamı gizler ve kuşkuya davet eder |

Denge, uzlaşması gereken ince katmanı, yani kaydı, ortak tanımları ve erişim kurallarını merkezileştirmek ve geri kalan her şeyi federe etmektir.

## Takımınızla tartışılacak sorular

**1. Panomuzdaki en çok anılan sayı yarın yanlış görünse kim yanıt verirdi?**
Gruptan bir grup değil, bir kişi adlandırmasını isteyin. Birkaç isim ya da hiçbiri çıkıyorsa, metriğin pratikte sahibi yoktur. Kolaylaştırıcı metriği, aday sahibi ve sahibin işi yapmak için neye ihtiyaç duyacağını, örneğin veriye okuma erişimi ya da gözden geçirmede zaman, not etmelidir. Sahibi kimin doğrulayacağı ve rolü kayda kimin yazacağı konusunda uzlaşarak bitirin.

**2. Bugün aynı rakamın iki sürümü nerede var?**
Aynı metriği farklı değerlerle gösteren raporları arayın: bir haftalık slayt ile canlı pano ya da bir tedarikçi raporu ile iç rapor. Her biri için farkın nerede ortaya çıktığını, örneğin kapsam, saat ya da hariç tutmalar, sorun. Hangi kaynağın yetkili olduğuna ve diğer sürüme ne olacağına karar verin. Konuşmanın, herkesin paylaşıldığını varsaydığı sözcüklerin farklı çalışma tanımlarını ortaya çıkarmasını bekleyin.

**3. Birini emekliye ayırmak zorunda olsaydık bu çeyrek hangi metriği emekliye ayırırdık?**
Yakın zamanda hiç kimsenin bir kararda anmadığı metrikle başlayın. Ortadan kaybolsa ne olacağını ve kimin fark edeceğini sorun. Yanıt “kimse” ise, onu bir deneme süresi boyunca raporlanan kümeden çıkarın. Kolaylaştırıcı emekliye ayırmayı olağan ve sağlıklı görmeli ve sonucu emekliye ayırma günlüğüne kaydetmelidir.

**4. Metriklerimizi kim görüyor ve bu bilinçli mi?**
Metriklere karşı hedef kitlelerin basit bir ızgarasını çizin: ekip, hizmet sahibi, liderlik, müşteriler, tedarikçiler, düzenleyiciler. Erişimin nerede bir karar olduğunu ve nerede kendiliğinden olduğunu işaretleyin. Bireyleri karşılaştırmak için kullanılabilecek herhangi bir görünümü arayın. En az bir hedef kitle listesinde bir değişiklik üzerinde ve bunu bir sonraki kimin gözden geçireceği üzerinde uzlaşın.

**5. Eğilimi bozmadan bir tanımı nasıl değiştiririz?**
Bir durum iş akışındaki ya da bir öncelik ölçeğindeki yakın tarihli bir değişikliği gözden geçirin. Kime söylendiğini, grafiğin not düşülüp düşülmediğini ve eski ile yeni değerlerin karşılaştırılıp karşılaştırılmadığını sorun. Ekibin gerçekten dolduracağı hafif bir değişiklik girdisi taslağı hazırlayın. Sözleşmelerde ya da dış raporlarda görünen metriklerdeki değişiklikleri kimin onaylayacağı üzerinde uzlaşın.

**6. Yönetişim bir yük haline gelseydi neyi yapmayı bırakırdık?**
Yönetişim bir ritüele dönüşebilir. Kimse denetlemese insanların mevcut yaklaşımın hangi kısımlarını atlayacağını ve nedenini sorun. Yanıtları direniş olarak değil, tasarım geri bildirimi olarak ele alın. Kolaylaştırıcı birbirini yineleyen adımları, kimsenin okumadığı alanları ve hiçbir zaman karar üretmeyen gözden geçirmeleri aramalıdır.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat ekipleri iş öğesi yaşı ve çevrim süresi gibi çalışma ölçülerinin sahibidir ve tanımları çalışma anlaşmalarında uzlaştırmalıdırlar. Bir metrik bir portföy raporuna yükseldiğinde, ekip sahibi, tanımı ve hedef kitleyi bilmelidir. Ekipler en çok her raporlanan ölçü için kısa bir kayıt girdisinden ve artık işin akış biçimine uymayan bir tanıma itiraz etme hakkından yarar sağlar (bkz. Konu 2.1 “Akış ölçümleri”).

### Hizmet ve operasyon takımları

Hizmet ve operasyon ekipleri SLA'larda ve operasyonel gözden geçirmelerde görünen metrikleri taşır; bu yüzden tanımların, saatlerin ve hariç tutmaların sözleşmesel ağırlığı vardır. Buradaki sahipler genellikle hizmet sahipleri ve uygulama sahipleridir. Tanım değişiklikleri için bir kanıt izi tutmalı, raporlanan rakamları ITSM aracına karşı düzenli olarak uzlaştırmalı ve operasyonel kararları bilgilendirmeyi bırakmış bir ölçüyü emekliye ayıran ilk kişi olmalıdırlar (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

### Liderlik ve yönetişim

Liderler koşulları belirler: metriklerin kime ait olduğu, hangi görünümlerin yönetici paketine ulaştığı ve sayıların nasıl kullanıldığı. Kaydı ve emekliye ayırma günlüğünü istemeli, başlık rakamlarının ardındaki tanımları okumalı ve kişi düzeyinde lig tablosu taleplerine direnmelidirler. Yönetişim organları, kaydı gözden geçiren ve kararları kaydeden küçük bir sürekli gündem maddesine ihtiyaç duyar; bu, gözden geçirmeyi bir uyum alıştırmasına dönüştürmeden, hizmet yönetim sistemleri için ISO/IEC 20000-1 beklentileriyle (2018 sürümü itibarıyla) uyumludur (bkz. Konu 8.3 “Uyum ve denetim metrikleri”).

### Müşteriler ve kullanıcılar

Müşteriler ve kullanıcılar kaydı nadiren görür, ama bir hizmet gözden geçirmesindeki bir rakam deneyimlerinden farklı olduğunda onun yokluğunu hisseder. Bir metrik müşteriye dönük bir raporda ya da bir SLA'da göründüğünde, tanım, nelerin hariç tutulduğu dahil, sade bir dille erişilebilir olmalıdır. Müşterilerin bir rakamı sorgulayacak bir yolu olmalı ve sahip bunu yanıtlamalıdır (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Orta ölçekli bir çevrimiçi perakendeci bir hizmet masası, üç ürün ekibi ve bir operasyon grubu işletir. Aşağıdaki tüm sayılar örnekleyicidir.

Aylık hizmet gözden geçirmesi, medyan olay çözüm süresini 5,1 saat olarak gösterir. Ürün ekiplerinin aynı ITSM aracından oluşturulmuş kendi panosu 6,4 saat gösterir. İki rakam bir yıldır dolaşımdadır. Yeni bir hizmet sahibi metriğin sahibinin kim olduğunu sorar ve üç farklı yanıt alır.

Sahip, ekip liderleri ve veri sorumlusuyla birlikte, 14 raporlanan metrikten oluşan ilk bir kayıt için iki oturum harcar. Bunlardan 5'inin sahibi, 4'ünün iki kaynağı yoktur. Çözüm süresi, çift kaynaklı metriklerden biridir. Fark bir duraklatma durumuna dayanır: hizmet gözden geçirmesi “müşteri bekleniyor” durumundaki süreyi hariç tutar, ekip panosu tutmaz. Grup bir tanım üzerinde uzlaşır, hizmet sahibini metrik sahibi olarak adlandırır ve kimse geçmişi kaybetmesin diye bir çeyrek boyunca her iki değeri de tanıma göre etiketlenmiş olarak aynı sayfada yayımlar. Tanımın değiştiği yerde grafiğe not düşerler.

İlk üç aylık gözden geçirmede grup bir emekliye ayırma sınaması uygular ve 14 metrikten 3'ünü, yakın tarihli hiçbir kararın anmadığı aylık bildirim sayısı grafiği dahil, kaldırır. Ayrıca çözüm süresini analiste göre ayıran görünümü kısıtlar, tek sahibi olarak veri sorumlusunu tutar ve bunun yerine bir ekip düzeyinde döküm sunar.

Manipülasyon riski ikinci gözden geçirmede ortaya çıkar. Sahiplik kapsamı yüzde 100'e ulaşır, ama bir örnek, sahiplerden ikisinin bir dağıtım listesi ve veriyi hiç açmamış bir departman başkanı olduğunu gösterir. Grup onları adı konmuş hizmet sahipleriyle değiştirir ve gözden geçirmeye koruyucu önlem sorusunu ekler: “Sahip bu sayıdaki son hareketi açıklayabiliyor mu?” Kapsam bir çeyrek boyunca yüzde 86'ya düşer; grup bunu dürüst bir sonuç olarak kaydeder. Günlüğe alınan karar, koruyucu önlem iki döngü çalışana kadar kapsam hedefini beklemede tutmaktır.

## Sektör mercekleri

**Girişim (startup).** Bir kurucu ya da baş mühendis çoğu zaman varsayılan olarak her metriğin sahibidir. Risk, tanımların tek bir kafada yaşamasıdır. Paylaşılan bir belgede beş ila sekiz metrikten oluşan bir kayıt tutun, her biri için bir sahip adlandırın ve tanımları, bir metrik bir yatırımcı ya da müşteri güncellemesinde ilk göründüğü gün yazın.

**Küçük işletme.** BT'yi yöneten kişi genellikle sahip, sorumlu ve rapor okuyucusudur. Yönetişimi tek bir sayfada tutun, yılda iki kez gözden geçirin ve bir tedarikçinin sağladığı rapor bir metriği sizinkinden farklı tanımladığında ekstra özen gösterin. İşletmede müşteriye dönük her rakamın sahibinin kim olduğunu adlandırın.

**Kurumsal.** Ölçek, ortak katmanı vazgeçilmez kılar. İş akışı olan bir kayıt, üç ayda bir toplanan hafif bir konsey ve her büyük alan için bir veri sorumlusu rolü kullanın. Çalışma ölçüleri için ekip özerkliğini koruyun ve hizmet türleri arasında farklı olması gereken metrikleri standartlaştırmaya karşı koruyun. Kurumda halihazırda var olan veri yönetişimiyle uyumlu çalışmak çaba tasarrufu sağlar.

**Kamu sektörü ve hükümet.** Yasal raporlama, denetim ve tedarik, yazılı tanımları ve değişiklik kayıtlarını bir yükümlülük haline getirir. Kaydı bir denetim ürünü olarak ele alın ve yayımlanan her rakamdan sahibine ve kaynağına açık bir hat tutun. Erişim kararları çoğu zaman hukuki ve gizlilik incelemesini içerir; bu yüzden her kısıtlı görünümün dayanağını kaydedin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Maliyet mütevazıdır ve çoğunlukla zamandır. İlk kaydı oluşturmak için birkaç saat, gözden geçirme için çeyrek başına bir iki saat ve çelişen kaynakları çözmek için veri sorumlusundan biraz efor bekleyin. Araç maliyetleri düşüktür, çünkü başlamak için bir elektronik tablo ya da sürüm kontrollü bir dosya yeterlidir.

Getiri çoğunlukla önlenen israftır. Rakamları uzlaştırmaya harcanan toplantılar ortadan kalkar, denetimler net bir iz bulur ve yeni bir hizmet sahibinin işe alıştırılması, tanımlar yazılı olduğu için daha hızlıdır. Kararlar, her ay aynı anlama gelen sayılara dayandığı için daha iyidir. Kendi verileriniz olmadan bu faydalar için bir yüzde söylemeyin. Bir iş gerekçesi için rakamlara ihtiyacınız varsa, geçen çeyrek çelişen sayıları uzlaştırmak için harcanan saatleri ve kayıtlı sahibi olmayan metriklerin sayısını sayın, sonra iki gözden geçirme döngüsünden sonra tekrar sayın.

## Anti-desenler ve tuzaklar

- **Komite sahipliği.** Bir grup metriğin sahibidir ve kimse soruları yanıtlamaz. Hesap verebilir bir rol ve bir yardımcı adlandırın.
- **Mezarlık olarak kayıt.** Bir kez kurulur ve bir daha dokunulmaz. Gözden geçirme tarihlerini takvime koyun ve tarihi her panoda gösterin.
- **Her şeyi standartlaştırmak.** İşi farklı olan ekiplere dayatılan tek bir tanım, hiçbir yerde anlamı olmayan sayılar üretir. Yalnızca uzlaşması gereken katmanı paylaşın.
- **Sessiz tanım değişiklikleri.** Eğilimler kırılır ve güven bunu izler. Her değişikliği nedeniyle birlikte günlüğe alın ve grafiğe not düşün.
- **Emekliye ayırmasız yönetişim.** Küme yalnızca büyür ve dikkat incelir. Her gözden geçirmede bir emekliye ayırma sınaması uygulayın.
- **Varsayılan olarak gizlilik.** Çalışma görünümlerini ölçülen insanlardan saklamak kuşku doğurur. Yalnızca gerçek risk taşıyanı kısıtlayın ve nedenini açıklayın.
- **Kişi düzeyindeki veriye açık erişim.** Tek bir dışa aktarım günler içinde bir lig tablosuna dönüşebilir. Raporlanan ayrıntı düzeyini ekip ve hizmet olarak belirleyin ve herhangi bir kişi düzeyindeki veriyi sorumlunun elinde tutun.
- **Uyum tiyatrosu.** Alanlar bir kontrol listesini karşılamak için doldurulur. Girdilerden doğruluk için örnek alın ve sahiplerden yakın tarihli hareketleri açıklamalarını isteyin.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Sahiplik ve kayıt | Sahipler belirsiz; metrikler bireysel elektronik tablolarda yaşar | Bazı ekipler sahipli bir liste tutar | Tüm raporlanan metrikler için, her biri adı konmuş bir sahip ve role sahip tek bir kayıt | Kapsam ve güncellik eğilim olarak izlenir; boşluklar kaynaklı çözümlere yol açar | Rakamlar sınırları aştığında kayıt tedarikçiler ve müşterilerle paylaşılır |
| Tanımlar ve değişiklik denetimi | Tanımlar kişiye göre farklıdır | Bazı sözleşme metrikleri için yazılı | Her raporlanan metrik için saatleri olan yazılı tanım ve bir değişiklik günlüğü | Değişiklikler yayından önce eğilimler üzerindeki etki açısından gözden geçirilir | Tanımlar kararları bilgilendirmeyi bıraktıklarında ekipler ve tedarikçiler arasında ortaklaşa revize edilir |
| Gözden geçirme ve emekliye ayırma | Metrikler eklenir, hiç kaldırılmaz | Ara sıra temizlik | Gözden geçirme ritmi ve emekliye ayırma sınaması yazılıdır | Gözden geçirme sonuçları iyileştirme işi olarak izlenir | Emekliye ayırma ve yenileme rutindir, kullanıcılardan ve ekiplerden gelen kanıtla yönlendirilir |
| Erişim ve hedef kitle | Tesadüfen erişim | Hassas veri için kısıtlı görünümler | Metrik başına gerekçeli hedef kitle listesi | Erişim bir ritimle gözden geçirilir; kişi düzeyindeki veriyi sorumlu tutar | Hedef kitle ölçülen insanlarla ve müşterilerle birlikte tasarlanır |

## Kontrol listesi

- [ ] Bir metrik kaydı vardır ve her raporlanan metriği listeler.
- [ ] Her raporlanan metriğin adı konmuş bir sahibi ve kayıtlı bir rolü vardır.
- [ ] Her raporlanan metriğin başlama, durma ve hariç tutma kurallarıyla yazılı bir tanımı vardır.
- [ ] Her metriğin kayıtta adı konmuş tek bir yetkili kaynağı vardır.
- [ ] Her metrik için bir gözden geçirme tarihi ve bir aralık kaydedilmiştir.
- [ ] Tanım değişiklikleri gerekçeyle günlüğe alınır ve grafikte işaretlenir.
- [ ] Bir emekliye ayırma sınaması yazılıdır ve her gözden geçirmede uygulanır.
- [ ] Her görünümün hedef kitlesi, herhangi bir kısıtlama için bir gerekçeyle birlikte kaydedilmiştir.
- [ ] Hiçbir raporlanan görünüm bireyleri sıralamaz ve kişi düzeyindeki veri veri sorumlusunun elindedir.
- [ ] Kayıttan son çeyrekte doğruluk için örnek alınmıştır.

## Yapay zekâ istemleri

**Bir metrik kümesi için metrik tüzüğü taslağı hazırlayın.**

```text
[hizmet ya da teslimat işi türü] sağlayan [ekip ya da hizmet adı] için tek
sayfalık bir metrik tüzüğü taslağı hazırla. Metrik kümesi: [metrik listesi].
Hedef kitleler: [hedef kitleler]. Amaç, açık hedef dışı unsurlar, şu rolleri
kullanarak sahip, veri sorumlusu ve gözden geçirenler için bir RACI tablosu:
[roller], gözden geçirme ritmi ve bir emekliye ayırma sınaması ekle. Taslağı
yalnızca yazdıklarıma dayandır. Metrik, hedef ya da kıyaslama değeri uydurma.
Varsayımlarını ve tüzüğü tamamlamak için yanıtlamam gereken soruları listele.
```

**Bir metriğin iki sürümü arasındaki çatışmaları bulun.**

```text
Aynı metrik olması gereken [metrik adı] için iki açıklama burada. [Kaynak A]
kaynağından A sürümü: [açıklama ve formül]. [Kaynak B] kaynağından B sürümü:
[açıklama ve formül]. Bunları neyin sayıldığı, saatin nerede başlayıp durduğu,
hangi durumların onu duraklattığı ve neyin hariç tutulduğu açısından
karşılaştır. Hangi farkların [A değeri] ile [B değeri] arasındaki boşluğu
açıklayabileceğini anlat ve sahip için sorular öner. Vermediğim değerler
hakkında tahmin yürütme. Varsayımlarını ve belirleyemediğin her şeyi listele.
```

**Bir metrik kaydını boşluklar için gözden geçirin.**

```text
Aşağıda, [alanları listele] alanlarıyla metrik kaydımızdan bir alıntı var.
Bunu eksik sahipler, gözden geçirme tarihi olmayan ya da [aralık] aralığından
eski olan girdiler, birden fazla kaynağı olan metrikler, bağlı kararı olmayan
metrikler ve kişi düzeyindeki verileri açığa çıkarabilecek görünümler
açısından gözden geçir. Örüntüleri bireye göre değil, metriğe göre raporla.
Metriklerimiz hakkında gerçek uydurma. Hangi bulguların metinden kesin
olduğunu ve hangilerinin tahmin olduğunu söyle ve varsayımlarını listele.

[kişisel veriler çıkarılmış kayıt alıntısını yapıştır]
```

**Bir emekliye ayırma gözden geçirmesi planlayın.**

```text
Metrikleri her [aralık] gözden geçiriyoruz. Emekliye ayırma sınamamız: [sınama].
Aşağıdaki metriklerin her biri için, sağladığım notları kullanarak, tek satırlık
bir gerekçe ve sahibe sorulacak bir soruyla birlikte emekliye ayır, tut,
birleştir ya da yeniden tasarla öner: [son anılma tarihi ve sahip rolüyle
metrikler]. Ayrıca her emekliye ayırmayı [hedef kitle] kitlesine nasıl
duyuracağımızı öner. Kullanım verisi uydurma. Varsayımlarını ve önerini
değiştirecek her bilgiyi listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics skill](../../../../skills/agile-itil-metrics-skill/SKILL.md): kayda eklemeden önce bir metrik için konuyu ve eşleştirilmiş koruyucu önlemi bulmak için kullanın.
- [Agile ITIL Metrics maintainer skill](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): bir metrik girdisinin bir sahip, bir manipülasyon vektörü ve bir koruyucu önlem taşıdığını denetlemek için kullanın.

## Temel çıkarımlar

- Yönetişim sayıların zaman içinde aynı anlama gelmesini sağlar ve tek sayfalık bir kayıt bunun çekirdeğidir.
- Her raporlanan metrik için hesap verebilir tek bir sahip adlandırın ve kişinin yanı sıra rolü de kaydedin.
- Saatleriyle birlikte tek bir tanım yazın, onu tek bir yerde hesaplayın ve her değişikliği günlüğe alın.
- Yönetişimin ağırlığını metriğin sonucuna uydurun.
- Kimin hangi görünümü göreceğine bilinçli olarak karar verin, kişi düzeyindeki veriyi raporlamanın dışında tutun ve metrikleri kanıta dayanarak emekliye ayırın.

## Kaynaklar ve ileri okuma

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
