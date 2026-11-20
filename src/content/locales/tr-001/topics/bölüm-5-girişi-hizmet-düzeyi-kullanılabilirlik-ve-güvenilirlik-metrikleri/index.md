# Bölüm 5 Girişi: Hizmet Düzeyi, Kullanılabilirlik ve Güvenilirlik Metrikleri

**Hizmet düzeyi, kullanılabilirlik ve güvenilirlik metrikleri, kullanıcıların bir hizmetten neyi bekleyebileceğini anlatır. Böylece ekipler yalnızca teslim edebilecekleri sözü verir, sözden saptıklarını erken fark eder ve çabalarını kullanıcıların hissedeceği yere yoğunlaştırır.**

İkinci ile dördüncü bölümler işin nasıl aktığına baktı: ne kadar hızlı aktığına, olayların nasıl ele alındığına ve değişikliğin nasıl güvenle yapıldığına. Bu bölüm ise kullanıcıların gerçekte yaşadığı sonuca yöneliyor. Sık teslimat yapan ve olayları hızla çözen bir hizmet yine de yavaş, yanlış anlarda erişilemez ya da öngörülemez olabilir. Kullanıcılar hizmeti, ekibin kendini nasıl örgütlediğine göre değil, ihtiyaç duyduklarında çalışıp çalışmadığına göre değerlendirir.

Burada iki gelenek buluşuyor. ITIL uygulaması, sağlayıcı ile müşteriler arasındaki beklentileri belirlemek için uzun zamandır hizmet düzeyi anlaşmalarını, hedefleri ve raporlamayı kullanır. Google'ın *Site Reliability Engineering* kitaplarında anlatılan site güvenilirliği mühendisliği uygulaması ise güvenilirliği, değişimin hızıyla arasında açık bir mühendislik dengesine dönüştürmek için hizmet düzeyi göstergelerini, hedeflerini ve hata bütçelerini kullanır. İkisi uyumludur. İkisi de kullanıcıların önemsediği şeyden yola çıkar, bunu ölçülebilir bir hedef olarak ifade eder ve hedefin ne sıklıkla tutturulduğuna dair dürüst bir döküm ister.

Bölümün tamamında yinelenen bir risk var. Bir güvenilirlik sayısını iyi göstermek kolaydır: uygun bir gösterge seçerek, elverişsiz dönemleri dışarıda bırakarak ya da kullanıcının yolculuğu yerine bileşeni ölçerek. Bu nedenle buradaki her konu ölçümlerinin saatlerini ve sınırlarını adlandırır, zamanı ve gecikmeyi yüzdelik dilimlerle dağılım olarak okur (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”) ve her ölçümü bir korkulukla eşleştirir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Her metrik bir hizmeti, bir ekibi ya da bir sistemi tanımlar. Hiçbiri bir bireyi sıralamaz; özellikle nöbet ölçümleri insanları puanlamak için değil, onları korumak için vardır.

## Bu bölümdeki konular

- **5.1 SLA, OLA ve XLA metrikleri**: hizmet düzeyi anlaşması, operasyonel düzey anlaşması ve deneyim düzeyi anlaşması ölçümleri; karpuz raporlamanın sorunları yeşil panoların ardına nasıl sakladığı ve bundan nasıl kaçınılacağı.
- **5.2 SLI, SLO ve hata bütçeleri**: hizmet düzeyi göstergeleri ve hedefleri, hata bütçesi politikası, yanma hızı ve göstergeleri kullanıcıların önemsediği şeylerden seçmek.
- **5.3 Kullanılabilirlik metrikleri**: çalışma süresi ve kesinti süresi hesabı, kullanıcı ağırlıklı kullanılabilirlik, planlı ve plansız kesinti ve “dokuzlar” aritmetiği.
- **5.4 Kapasite ve performans metrikleri**: kullanım, doygunluk, gecikme yüzdelik dilimleri, tampon kapasite ve talep tahmini.
- **5.5 İzleme ve uyarı kalitesi metrikleri**: uyarı hacmi, eyleme dönüştürülebilir uyarı oranı, yanlış pozitifler, algılama kapsamı ve uyarı yorgunluğu.
- **5.6 Hizmet sürekliliği metrikleri**: testlerde karşılanan kurtarma süresi ve kurtarma noktası hedefleri, test sıklığı, tatbikat günü bulguları ve planın güncelliği.
- **5.7 Angarya ve nöbet metrikleri**: vardiya başına çağrı sayısı, mesai dışı yük, angaryanın zamandaki payı ve sürdürülebilir rotasyon ölçümleri.

## Bu konular birbirleriyle nasıl ilişkilidir

İlk üç konu bölümün çekirdeğini oluşturur, çünkü sözü ve bunun nasıl ölçüldüğünü tanımlarlar. Konu 5.1 (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”), sağlayıcılar, iç ekipler ve müşteriler arasındaki anlaşmaları ve bu anlaşmaları dürüst ya da yanıltıcı kılan raporlama uygulamalarını ele alır. Konu 5.2 (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”) mühendislik tarafındaki karşılığı sunar: kullanıcı deneyiminden türetilen göstergeler, bunlara karşı belirlenen hedefler ve risk için kalan payı görünür kılan bir hata bütçesi. Konu 5.3 (bkz. Konu 5.3 “Kullanılabilirlik metrikleri”), ikisinin de dayandığı aritmetiği sabitler; neyin kesinti sayıldığını ve hangi kullanıcıların etkilendiğini de buna dahildir.

Kapasite ve performans, kullanılabilirliğin hemen ardından gelir. Teknik olarak ayakta olan ama doygunluğa ulaşmış ya da yavaş bir hizmet, basit bir çalışma süresi rakamının gözden kaçırdığı biçimde kullanıcılarını yarı yolda bırakır. Konu 5.4 (bkz. Konu 5.4 “Kapasite ve performans metrikleri”), kullanılabilirliği tamamlayan gecikme yüzdelik dilimlerini ve tampon kapasite ölçümlerini sunar; talep tahminleri ise bir hedef tehdit altına girmeden önce erken uyarı verir.

Algılama ve kurtarma, kullanıcıların bir arızanın ne kadarını yaşayacağını belirler. Konu 5.5 (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”), ekibin sorunları hızlı ve harekete geçmeye değer sinyallerden öğrenip öğrenmediğini sorar; bu, doğrudan 3. bölümdeki algılama ve onarım sürelerine bağlanır. Konu 5.6 (bkz. Konu 5.6 “Hizmet sürekliliği metrikleri”), daha büyük bir şey ters gittiğinde ekibin belirtilen sınırlar içinde toparlanıp toparlanamayacağını sorar ve bu iddiayı varsaymak yerine sınar.

Konu 5.7 (bkz. Konu 5.7 “Angarya ve nöbet metrikleri”), geri kalanın insani korkuluğu işlevini görür. Sıkı hedefler, gürültülü uyarılar ve sık olaylar, çağrı cihazını taşıyan insanların üzerine yıkılır. Vardiya başına çağrı sayısı ve angarya payı, güvenilirliğin ne zaman sürdürülemez bir çabayla satın alındığını ortaya koyar ve 2. bölümdeki plansız iş ölçümlerine geri bağlanır. Konu 5.5'teki uyarı kalitesi ile Konu 5.7'deki nöbet yükü bir çift olarak okunmalıdır, çünkü kötü uyarılar ağır rotasyonların yaygın bir nedenidir.

Son olarak, Konu 5.2'deki hata bütçesi bu bölümü 4. bölümdeki değişikliğe bağlar. Bütçe sağlıklı olduğunda bir ekip daha özgürce yayın yapabilir. Bütçe tükendiğinde değişiklik ile güvenilirlik çalışması yeniden dengelenmelidir. 6. bölüm ise bu bölümdeki hedeflerin karşılanmasının kullanıcıları daha iyi bir duruma getirip getirmediğini denetler; yeşil bir raporun tek başına yanıtlayamayacağı soru budur.
