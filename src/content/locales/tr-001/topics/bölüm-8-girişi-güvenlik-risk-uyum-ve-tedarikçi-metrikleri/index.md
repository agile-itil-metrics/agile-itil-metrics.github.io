# Bölüm 8 Girişi: Güvenlik, Risk, Uyum ve Tedarikçi Metrikleri

**Bir hizmete duyulan güven, o hizmetin tehditleri, riskleri, yükümlülükleri ve arkasındaki üçüncü tarafları nasıl ele aldığına dayanır; bu güvenin en iyi kanıtı da işin kendisinden çıkar ve açıkça paylaşılır.**

Bir hizmet hızlı, ucuz ve sevilen olabilir; yine de yamalanmamış bir zayıflık, incelenmemiş bir risk, kimsenin izlemediği bir yükümlülük ya da teslimatı bırakan bir tedarikçi yüzünden kendisine güvenen insanları yarı yolda bırakabilir. Bu bölümdeki ölçümler, bu başarısızlıklara karşı koruyan koşulları betimler: zayıflıkların ne kadar süre açık kaldığı, kontrollerin çalışıp çalışmadığı, biri istediğinde kanıtın var olup olmadığı ve neye bağımlı olduğunuzu bilip gerektiğinde ayrılıp ayrılamayacağınız.

Çevik uygulamalar da ITIL de bu kaygıları ciddiye alır, ancak farklı açılardan. ITIL, bilgi güvenliği yönetimi, risk yönetimi, tedarikçi yönetimi ve yönetişim konularına; politika, sahiplik ve kayıtlara verdiği önemle katkıda bulunur. Çevik ve DevOps uygulamaları ise güvenlik ve kontrolün sürekli teslimatın içinde yer alması gerektiği fikrini getirir: küçük değişiklikler, hızlı geri bildirim, otomatik denetimler ve geliştirme, güvenlik, operasyon ve güvence arasında paylaşılan sorumluluk. En etkili kuruluşlar ikisini birleştirir; böylece kontroller işlem hattına yerleştirilir, kanıt teslimatın yan ürünü olur, denetçiler, düzenleyiciler ve tedarikçiler de ara sıra karşılaşılan hasımlar yerine süregelen bir konuşmanın ortakları haline gelir.

Bu ölçümler aynı zamanda çarpıtma riskinin en yüksek olduğu ölçümlerdir. Bulgular, kırmızı riskler veya ihlaller için konan hedefler, insanlara görmezden gelmeyi, yeniden derecelendirmeyi ya da saklamayı öğretir. Şüpheli etkinlik bildirimleri gibi insan davranışına dokunan ölçümler gözetime ya da suçlamaya kayabilir. Bu nedenle bu bölümdeki her metrik, nasıl manipüle edildiğiyle ve bir koruma önlemiyle birlikte gelir; bölüm, güvenli bildirimi ve suçlamasız öğrenmeyi başlı başına birer kontrol olarak ele alır. Hiçbir ölçüm bireyleri sıralamaz. Sistemleri, hizmetleri ve ilişkileri betimlerler (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Bu bölümdeki konular

- **8.1 Güvenlik olayı ve zafiyet metrikleri**: maruz kalma pencereleri, yama uyumu, tarama kapsamı, sınırlama süresi, istisnalar ve sinyallerin akmasını sağlayan bildirim kültürü.
- **8.2 Risk ve kontrol metrikleri**: kısa ve sahipli bir risk kaydı, kontrol testleri, temel risk göstergeleri ve riske dayalı değişiklik onayı.
- **8.3 Uyum ve denetim metrikleri**: yükümlülük kapsamı, kanıt otomasyonu, bulguların kapatılması ve tekrarı, denetçilerle çalışma.
- **8.4 Tedarikçi ve sözleşme metrikleri**: deneyime karşı tedarikçi performansı, yoğunlaşma, durum tespiti, ortak incelemeler ve test edilmiş çıkış planları.
- **8.5 Düzenlemeye tabi ve kamuya yönelik raporlama**: tasarım girdisi olarak raporlama yükümlülükleri, izlenebilir raporlar, uzlaştırılmış tanımlar ve kullanışlı kamu bilgisi.

## Bu konular birbirleriyle nasıl ilişkilidir

Güvenlik ölçümleri (bkz. Konu 8.1 “Güvenlik olayı ve zafiyet metrikleri”) tehditleri ve zayıflıkları somut terimlerle betimler ve risk kaydı için en güçlü temel risk göstergelerinden bazılarını sağlar. Risk ve kontrol ölçümleri (bkz. Konu 8.2 “Risk ve kontrol metrikleri”) bu göstergeleri bağlama oturtur, hangi kontrollerin önemli olduğuna karar verir ve bunların çalıştığını sınar. Uyum ve denetim ölçümleri (bkz. Konu 8.3 “Uyum ve denetim metrikleri”) aynı kontrolleri ve testleri dışarıdakiler için kanıta dönüştürür ve bu kanıtın ne kadarının iş tarafından kendiliğinden üretildiğini gösterir.

Tedarikçi ölçümleri (bkz. Konu 8.4 “Tedarikçi ve sözleşme metrikleri”) bunların her birini kuruluşun sınırının ötesine taşır. Bir tedarikçinin zafiyetleri, riskleri ve uyum durumu sizin olur; sözleşme de kontrollerden biridir. Raporlama konusu (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”) bölümü, kime neyin söylenmesi gerektiğini ve bunun, raporlama görünümünün betimlediği işi çarpıtmasına izin vermeden nasıl doğru biçimde söyleneceğini sorarak kapatır.

Birkaç koruma önlemi çifti izler. Maruz kalma penceresi tarama kapsamıyla birlikte okunmalıdır; böylece temiz bir rakam yalnızca dar bir tarama olmaz. Kontrol etkinliği oranı, başarısızlıkların takibiyle birlikte okunmalıdır, çünkü kusursuz bir oran zayıf testten kaynaklanabilir. Denetim bulgularının sayısı, tekrar oranı ve kapatma doğrulamasıyla birlikte okunmalıdır. Bir tedarikçi hizmet düzeyi, kullanıcı deneyimiyle birlikte okunmalıdır (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”). Yasal bir rakam, eşlik eden ölçümleriyle ve iç tanımla yapılan bir uzlaştırmayla birlikte okunmalıdır.

Bölüm, önceki bölümlere dayanır. Varlık, yapılandırma ve maliyet kayıtları (bkz. Konu 7.1 “BT varlık yönetimi metrikleri” ve Konu 7.4 “Yapılandırma ve CMDB kalitesi metrikleri”) tarama, bağımlılık eşleme ve tedarikçi analizini mümkün kılan kayıtlardır. 4. Bölümün olay sonrası inceleme ve değişiklik ölçümleri, bu çalışmayı dürüst tutan öğrenme döngülerini sağlar. 9. Bölüm ise bütün bunların arkasındaki insanlara döner: sağlıkları, iş birlikleri ve tüm sistemi zamanla daha iyi kılan iyileştirme alışkanlıkları.
