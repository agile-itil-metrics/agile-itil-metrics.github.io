# Bölüm 1 Girişi: Ölçümün Temelleri

**Ölçüm, hizmet geliştiren ve işleten bir ekibe yalnızca bir amaç için seçildiğinde, birinin sorumluluğunda olduğunda, güvenilir verilerden beslendiğinde, dikkatle okunduğunda ve tarif ettiği işi çarpıtmasına izin verilmediğinde yardımcı olur.**

Çevik ekipler de BT hizmet yönetimi (ITSM) ekipleri de sürekli bir sayı akışı üretir: kapatılan bildirimler, tamamlanan hikâyeler, yapılan dağıtımlar, çözülen olaylar. Sayıya sahip olmak kolaydır. İnsanların bir şeye karar vermesine yardımcı olan sayılara sahip olmak ise daha zordur ve çoğu metrik programının zorlandığı yer tam olarak bu boşluktur. Bu bölüm, tek tek metrikler tanımlanmadan önce sonraki tüm bölümlerin dayandığı ortak zemini sunar.

Bu zemin altı soruyu sırayla ele alır. Neden ölçüm yapılır ve hiçbir şeyi ya da yanlış şeyleri ölçmenin bedeli nedir? Bir ölçü nasıl hedefe dönüşür ve sonra neden doğruyu söylemeyi bırakır? Öncelikle neyi ölçmeye değer? Her metriği kim tanımlar, sahiplenir ve emekliye ayırır? Veri nereden gelir ve ne kadar güvenilebilir? Bildirim ve akış verilerinin çarpık ve çoğu zaman seyrek olduğu düşünülürse sayılar nasıl okunmalıdır? Son bir konu, yerleşik çerçevelerin bu yanıtları düzenlemeye nasıl yardım ettiğini gösterir.

Kitaba yeniyseniz önce bu bölümü okuyun ve sonraki bir metrik yanlış davranır gibi göründüğünde bu bölüme geri dönün. Sonraki bölümlerdeki metrik başarısızlıklarının çoğu, burada tanıtılan fikirlerden birine dayanır. Bu kitaptaki metrikler ekipleri, hizmetleri ve sistemleri tarif eder. Bireyleri sıralamak için asla kullanılmaz.

## Bu bölümdeki konular

- **1.1 Çevik ITIL neden ölçülür**: hizmet geliştiren ve işleten ekiplerin neden sayılara ihtiyaç duyduğu, çevikliğin ve ITIL'in ölçüme ayrı ayrı ne kattığı, hiçbir şeyi ya da yanlış şeyleri ölçmenin bedeli.
- **1.2 Goodhart yasası ve metriklerin psikolojisi**: diğer her konunun arkasındaki koruyucu önlem; bir ölçünün nasıl hedefe dönüştüğü, bildirim ve teslimat verilerinde manipülasyonun nasıl gerçekleştiği ve bunu önleyen alışkanlıklar.
- **1.3 Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek**: değer, sonuçlar, çıktılar ve etkinlik; öncü ve artçı göstergeler; iyi bir metriğin sınavı olarak ITIL'in birlikte değer yaratması.
- **1.4 Metrik yönetişimi ve sahipliği**: metrik sahipleri, tanımlar, gözden geçirme ritmi, emekliye ayırma ve kimin neyi görebileceği.
- **1.5 Veri kaynakları ve enstrümantasyon**: kaynak olarak ITSM araçları, iş takip sistemleri, sürüm kontrolü, sürekli entegrasyon ve teslimat hatları, izleme, yapılandırma yönetim veritabanı (CMDB) ve anketler; veri kalitesi, zaman damgaları ve durum modellerine özen göstererek.
- **1.6 Hizmet metrikleri için istatistik okuryazarlığı**: ortalamalar yerine yüzdelikler, çarpık dağılımlar, küçük örneklemler, kontrol grafikleri ve bildirim ile akış verileri için dürüst belirsizlik.
- **1.7 Ölçüm çerçeveleri**: Hedef-Soru-Metrik (Goal-Question-Metric), hedefler ve anahtar sonuçlar (OKR), dengeli puan kartı, kritik başarı faktörleri ve temel performans göstergeleri ve bunların ITIL uygulamalarıyla nasıl birleştiği.

## Bu konular birbiriyle nasıl ilişkilidir

Konular bir merdiven değil, bir döngü oluşturur. Konu 1.1 (bkz. Konu 1.1 “Çevik ITIL neden ölçülür”) amacı sağlar, Konu 1.3 (bkz. Konu 1.3 “Çıktıdan çok sonuç: neyi ölçeceğimizi seçmek”) bu amacı neyin ölçüleceğine dair bir seçime dönüştürür. Sonuç odağı nedeniyle seçilmiş bir metrik yine de bir tanıma, bir sahibe ve bir gözden geçirme tarihine ihtiyaç duyar; bu, Konu 1.4'ün (bkz. Konu 1.4 “Metrik yönetişimi ve sahipliği”) işidir. Konu 1.7'de (bkz. Konu 1.7 “Ölçüm çerçeveleri”) ele alınan Hedef-Soru-Metrik gibi çerçeveler, bir hedeften küçük bir ölçü kümesine geçmenin tekrarlanabilir bir yolunu verir; bu yüzden Konu 1.3 ve 1.4 ile doğal biçimde eşleşirler.

Veri ve istatistik ikinci bir çift oluşturur. İyi seçilmiş bir metrik, ardındaki kayıtlar kadar iyidir; Konu 1.5 (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”) zaman damgalarının, durum modellerinin ve araç yapılandırmasının bir sayının ne anlama gelebileceğini nasıl biçimlendirdiğini açıklar. Konu 1.6 (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”) ise bu sayının yüzdelikler, kontrol grafikleri ve belirsizliğe dair açık ifadelerle dürüstçe nasıl okunacağını ele alır. Zayıf veri iyi istatistiği yok eder, zayıf istatistik iyi veriyi boşa harcar; bu yüzden ikisi birlikte okunmalıdır.

Konu 1.2 (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”) diğerlerinin hepsini kesen koruyucu önlem olarak durur. Konu 1.3 kapsamında seçilen, Konu 1.4 kapsamında yönetilen ve Konu 1.5'teki kaynaklardan beslenen herhangi bir metrik, insanlar onunla değerlendirilmeye başlandığında yine de manipüle edilebilir. Yönetişim, kimin neyi göreceğini ve bir metriğin nasıl kullanılacağını sınırlar. Sonuç odaklı seçimler manipülasyonu daha az ödüllendirici kılar. Burada tanıtılan ve kitap boyunca geliştirilen eşleştirilmiş ölçüler, bir sayının diğerini denetlemesine izin verir. Bu nedenle sonraki bölümlerdeki her metrik bir manipülasyon vektörü ve bir koruyucu önlem taşır; bu bölüm bunun nedenini açıklar.
