# Bölüm 4 Girişi: Sorun, Değişiklik ve Yayın Metrikleri

**Sorun, değişiklik ve yayın metrikleri, bir takımın hizmetlerini değiştirme ve başarısızlıktan öğrenme biçiminin onları hem daha hızlı iyileştirip hem de daha istikrarlı işlettiğini gösterir.**

Canlı bir hizmette yapılan her değişiklik bir iddiaya girmektir. Değer daha erken teslim edilebilir ya da kullanıcıların güvendiği bir şey bozulabilir. Bölüm 3, işler ters gittiğinde destek ve hizmeti geri getirme çalışmasının ne kadar iyi işlediğini ölçtü (bkz. Konu 3.0 “Bölüm 3 Girişi: Hizmet Masası, Olay ve Talep Metrikleri”). Bu bölüm aynı madalyonun öbür yüzüne bakar: değişiklik ortama nasıl girer, ne sıklıkla sorun çıkarır ve kurum aynı sorunun geri dönmemesi için ne kadar iyi öğrenir.

Sürekli teslimat ile ITIL bu alana farklı yönlerden yaklaşır. Çevik uygulama, yazılımın küçük değişikliklerle sürekli teslim edilmesini yeğler ve hızlı geri bildirimi bir güvenlik önlemi sayar. Sorun yönetimi, değişiklik yetkilendirme ve yayın yönetimi gibi ITIL uygulamaları ise istikrarı korumak ve olayların nedenlerini bulup ortadan kaldırmak için vardır. Bu bölümdeki metrikler, her iki görüşün de aynı kanıta karşı sınanmasını sağlar. Sık değişiklik güvenliyse başarısızlık ve yeniden iş ölçümleri bunu gösterir. Bir kontrol riski azaltmadan teslimatı yavaşlatıyorsa bunu onay ve teslim süresi ölçümleri gösterir.

Bölümün tamamında iki uyarı geçerlidir. Hız ve istikrar birlikte okunmalıdır, çünkü birini iyileştirirken ötekine sessizce zarar veren bir sayı kötü bir takastır. Süre ölçümleri de Bölüm 1'de anlatıldığı gibi yüzdelik dilimlerle dağılım olarak okunmalıdır (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). Buradaki her metrik bir takımı, bir hizmeti ya da bir sistemi tanımlar. Hiçbiri bir bireyi sıralamaz ve hiçbiri tek başına zorlanacak bir hedef değildir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Bu bölümdeki konular

- **4.1 Sorun yönetimi metrikleri**: açılan ve kapatılan sorunlar, bilinen hata yeniden kullanımı, tekrarlama ve kalıcı çözüme kadar geçen süre.
- **4.2 Olay sonrası inceleme ve öğrenme metrikleri**: inceleme tamamlama, eylem maddesi kapatma, nedenlerin tekrarı ve suçlamasız öğrenme sinyalleri.
- **4.3 Değişiklik yetkilendirme metrikleri**: türe göre değişiklik hacmi, onay teslim süresi, standart değişiklik payı ve onayın otomasyonu.
- **4.4 Değişiklik başarısızlığı ve yeniden iş**: değişiklik başarısızlık oranı, acil değişiklik payı, geri alma ve acil yama oranları ile başarısızlığın tutarlı tanımları.
- **4.5 Yayın ve dağıtım metrikleri**: dağıtım sıklığı, yayın sıklığı, özellik bayrağı kullanımı, yayın teslim süresi ve dağıtımı yayından ayırma.
- **4.6 Teknik borç ve bilinen hatalar**: bilinen hata birikim listesi, borç stoku ve faizi ile düzeltmelerin özellik işine karşı önceliklendirilmesi.

## Bu konular birbiriyle nasıl ilişkilidir

Bölüm, birbirine dayanan iki yarıya ayrılır. Konu 4.1 ve 4.2 öğrenmeyle ilgilidir: olaylar nedenlere nasıl bağlanır ve incelemeler nasıl tamamlanan düzeltmelere dönüşür. Konu 4.3, 4.4 ve 4.5 değişiklikle ilgilidir: nasıl onaylanır, ne sıklıkla başarısız olur ve kullanıcılara nasıl ulaşır. Konu 4.6 iki yarıyı birleştirir, çünkü öğrenmenin ortaya çıkardığı borç ve bilinen hatalar, takımın zamanı için yeni özelliklerle yarışan aynı kalemlerdir.

En önemli eşleşme hız ile başarısızlık arasındadır. Konu 4.5'teki dağıtım ve yayın sıklığı (bkz. Konu 4.5 “Yayın ve dağıtım metrikleri”) değişikliğin üretime ne sıklıkla ulaştığını anlatır ve DORA araştırma programı bu tür verim ölçümlerini istikrar ölçümleriyle eşleştirir (bkz. Konu 2.8 “DORA metrikleri”). Konu 4.4 (bkz. Konu 4.4 “Değişiklik başarısızlığı ve yeniden iş”) bu istikrar tarafını sağlar. Başarısızlık ve yeniden iş oranları sabit kalırken ya da düşerken daha sık dağıtım yapan bir takım iyileşmektedir. Sıklığı artarken geri almaları ve acil yamaları da artan bir takım ise maliyeti başka bir yere taşımaktadır.

Değişiklik yetkilendirme ikisinin arasında durur. Konu 4.3 (bkz. Konu 4.3 “Değişiklik yetkilendirme metrikleri”) kontrol tarafını ölçer: onayın ne kadar sürdüğünü, değişikliğin ne kadarının standart olarak önceden yetkilendirildiğini ve onayın ne kadarının otomatik olduğunu. Onay teslim süresi bir kontrolün maliyetidir ve Konu 4.4'teki değişiklik başarısızlık oranı o kontrolün işe yarayıp yaramadığının kanıtıdır. Birlikte okunduklarında, ağır bir onay adımının güvenlik satın alıp almadığını ya da yalnızca gecikme ekleyip eklemediğini, daha hafif ve otomatik onayın başarısızlığı sabit tutup tutmadığını gösterirler.

Öğrenme konuları diğerlerini korur. Konu 4.1'deki sorun yönetimi (bkz. Konu 4.1 “Sorun yönetimi metrikleri”), Bölüm 3'teki olay yönetiminin nedenleri ortadan kaldırıp kaldırmadığının ya da yalnızca hizmeti geri getirip getirmediğinin uzun vadeli sınavı olan tekrarlamayı ve kalıcı çözüme kadar geçen süreyi ölçer. Konu 4.2 (bkz. Konu 4.2 “Olay sonrası inceleme ve öğrenme metrikleri”), incelemelerin gerçekten yapıldığını ve eylemlerinin kapatıldığını denetler, çünkü takibi olmayan tamamlanmış bir inceleme hiçbir şeyi değiştirmez. Gözden geçirilen incelemeleri ya da kapatılan sorunları saymak kolayca manipüle edilebilir. Bu yüzden bu sayılar, sahtesi yapılması daha zor olan aynı nedenlerin tekrarıyla birlikte okunmalıdır.

Son olarak Konu 4.6 (bkz. Konu 4.6 “Teknik borç ve bilinen hatalar”) diğer ölçümlerin neden kaydığını açıklar. Ele alınmamış bilinen hatalar ve birikmiş borç, başarısızlık olasılığını ve sonraki her değişikliğin maliyetini artırır. Bilinen hata birikim listesini değişiklik başarısızlık oranının yanında okumak, düzeltmeleri ertelemenin teslimatı ne zaman yavaşlatmaya başladığını gösterir.

Sonraki bölümler bu ölçümlerin üzerine kurulur. Bölüm 5'teki hizmet düzeyi hedefleri ve hata bütçeleri, değişikliğin hızının karşısında değerlendirilebileceği bir güvenilirlik sınırı verir. Bölüm 11 ise bu ölçümlerin korku yaratmadan nasıl devreye alınacağını gösterir.
