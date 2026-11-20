# Bölüm 2 Girişi: Akış ve Sürekli Teslimat Metrikleri

**Akış metrikleri, hizmet geliştiren ve işleten bir takımda işin gerçekte nasıl ilerlediğini gösterir. Böylece işin nerede beklediğini bulabilir, neyi değiştireceğinize karar verebilir ve değişikliğin işe yarayıp yaramadığını denetleyebilirsiniz.**

Hizmetleri aynı zamanda işleten çevik takımlar karışık bir iş akışını yönetir: planlanmış özellikler, hata düzeltmeleri, hizmet talepleri ve canlı olaylardan gelen kesintiler. Bunların hepsi aynı insanlar ve aynı dikkat için yarışır. Akış metrikleri bu akışı iş öğesinin bakış açısından tanımlar. Kaç öğenin sürmekte olduğunu, ne kadar sürdüklerini, ne kadar yaşlandıklarını ve bir dönemde kaçının tamamlandığını sorarlar.

Bu bakış açısı yararlıdır, çünkü gecikmenin büyük bölümü çalışmaktan değil beklemekten kaynaklanır. Bir talep, bir kuyrukta, bir incelemede ya da bir onayda, kimsenin ona ayırdığı süreden çok daha uzun bekleyebilir. Kişinin emeği yerine öğenin saatini ölçmek bu boşlukları görünür kılar ve takıma iyileştirme için ortak, olgusal bir başlangıç noktası verir. Ayrıca iki dünyaya da uyar. Çevik uygulama çevrim süresinden ve çıktı hızından (throughput) söz eder, ITIL uygulaması ise değer akışlarından ve hizmet performansından. İkisi de işin aynı hareketini anlatır.

Akış verileri çarpıktır ve kötüye kullanılması kolaydır. Süre ölçümleri, Bölüm 1’de ortaya konduğu gibi yüzdelikler kullanılarak dağılımlar olarak okunmalıdır (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”). Bu bölümdeki her metrik bir takımı, bir hizmeti ya da bir sistemi tanımlar. Hiçbiri bir bireyi sıralamaz ve hiçbiri tek başına yukarı ya da aşağı itilecek bir hedef değildir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Bu bölümdeki konular

- **2.1 Akış ölçümleri**: proje ve hizmet işine uygulanan devam eden iş, çıktı hızı, iş öğesi yaşı ve çevrim süresi.
- **2.2 Teslim süresi, çevrim süresi ve akış verimliliği**: takımlar arasında geçerliliğini koruyan tanımlar, saatlerin nerede başlayıp durduğu ve bekleme süresinin nasıl görünür kılınacağı.
- **2.3 Devam eden iş ve kuyruklar**: Little yasası, kullanım oranı ve kuyruk büyümesi, devam eden iş (WIP) sınırları ve tamamen meşgul bir hizmet takımının neden yavaş olduğu.
- **2.4 Değer akışı metrikleri**: değer akışı haritalama ölçümleri, işlem süresi, bekleme süresi, tamamlanmış ve doğru yüzdesi ve ITIL değer akışları.
- **2.5 Teslimat tahmini ve planlama metrikleri**: hikâye puanları ve hız (velocity), teslimat hedefi başarısı, tahmin doğruluğu ve hızın takımlar arasında neden asla karşılaştırılmaması gerektiği.
- **2.6 Birikim listesi ve iyileştirme metrikleri**: birikim listesi boyutu ve yaşı, hazır iş, iyileştirme kapsamı ve ürün ile hizmet birikim listelerinin nasıl farklılaştığı.
- **2.7 Çekme isteği ve kod inceleme metrikleri**: akış sinyalleri olarak inceleme süresi, çekme isteği boyutu ve yeniden iş, bunları izleyen oyunlaştırma vektörleriyle birlikte.
- **2.8 DORA metrikleri**: değişiklik teslim süresi, dağıtım sıklığı, başarısız dağıtımdan kurtarma süresi, değişiklik başarısızlık oranı ve dağıtım yeniden iş oranı, araştırmanın kendi uyarılarıyla birlikte.
- **2.9 Operasyonel iş ve plansız iş**: planlı ve plansız iş, kesinti yükü, hızlandırma şeritleri ve değişiklik ile işletim işi arasında kapasite dağılımı.

## Bu konular birbiriyle nasıl ilişkilenir

İlk dört konu bölümün çekirdeğini oluşturur. Konu 2.1 (bkz. Konu 2.1 “Akış ölçümleri”) temel nicelikleri tanımlar: devam eden iş, çıktı hızı, iş öğesi yaşı ve çevrim süresi. Konu 2.2 (bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”) saatlerin nerede başlayıp durduğunu sabitler; her karşılaştırma buna dayanır. Konu 2.3 (bkz. Konu 2.3 “Devam eden iş ve kuyruklar”) bu niceliklerin neden birlikte hareket ettiğini açıklar, Konu 2.4 (bkz. Konu 2.4 “Değer akışı metrikleri”) ise görüşü tek bir takımın panosundan, taleple değer arasındaki bütün yola genişletir.

Birkaç konu başkaları için koruma çizgisi işlevi görür. Çıktı hızı ve hız ölçümleri, işi daha küçük parçalara bölerek ya da aceleye getirerek şişirilebilir; bu nedenle yeniden iş ve kalite sinyalleriyle birlikte okunmalıdır. Konu 2.7’deki (bkz. Konu 2.7 “Çekme isteği ve kod inceleme metrikleri”) çekme isteği boyutu ve inceleme süresi, gecikmenin ve yeniden işin erken göstergeleridir. Konu 2.8’deki (bkz. Konu 2.8 “DORA metrikleri”) teslimat sonuçları, hız ölçümlerini kararlılık ölçümleriyle eşleştirir; böylece daha hızlı teslimat daha fazla başarısızlıkla satın alınmaz. Konu 2.5’teki (bkz. Konu 2.5 “Teslimat tahmini ve planlama metrikleri”) hız, tek bir takım için planlama aracıdır; çıktı olarak okunmak yerine tahmin doğruluğu ve akış ölçümleriyle karşılaştırılmalıdır.

Kalan konular işin akış koşullarını tanımlar. Uzun, eski ya da kötü iyileştirilmiş bir birikim listesi kötü akışı besler; bu, Konu 2.6’nın (bkz. Konu 2.6 “Birikim listesi ve iyileştirme metrikleri”) konusudur. Konu 2.9’da (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”) ele alınan plansız iş ve kesintiler, çevrim sürelerinin uzamasının ve tahminlerin tutmamasının çoğu zaman gizli nedenidir. Bunları Konu 2.3’teki devam eden iş ve kuyruklarla yan yana okumak, boş kapasitesi olmayan bir takımın neden bir olayı diğer her şeyi geciktirmeden karşılayamadığını açıklar.

Sonraki bölümler bu ölçümlerin üzerine kurulur. Bölüm 3 ve 4’teki olay, değişiklik ve yayın metrikleri, destek ve değişiklik işine uygulanan aynı saatleri ve aynı dağılım düşüncesini kullanır. Birlikte ele alındığında akış bakışı, çevik ve ITIL takımlarının tek bir ortak iş sistemi hakkında konuşmasını sağlar.
