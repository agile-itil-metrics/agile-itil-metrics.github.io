# Olay hacmi ve önceliği

**Olayları, onları üreten kullanıma göre sayın, önceliği bir puan olarak değil bir karışım olarak okuyun ve tekrarları izleyin; çünkü olay talebinin biçimi, tek bir çözüm süresinden çok önce nereye yatırım yapılacağını söyler.**

## Genel bakış ve motivasyon

[ITIL](https://en.wikipedia.org/wiki/ITIL) 4 terimleriyle olay (incident), bir hizmette plansız bir kesinti ya da hizmet kalitesinde bir düşüştür. [Olay yönetimi](https://en.wikipedia.org/wiki/Incident_management), normal hizmet işleyişini pratik olarak mümkün olan en kısa sürede geri getiren ve işe verilen zararı sınırlayan uygulamadır. Her olay aynı zamanda bir sinyaldir: hizmette, değişikliklerinde, kullanıcılarında ya da izlemesinde bir şey beklendiği gibi çalışmamıştır. Bu nedenle olayların sayısı ve niteliği, bir operasyon takımının elindeki en bilgilendirici talep ölçümlerinden biridir.

Hacim tek başına zayıf bir rehberdir. Olaylardaki bir artış, hizmetin kötüleştiğini, daha çok insanın onu kullandığını ya da izlemenin iyileşip eskiden bildirilmeyen arızaları artık gördüğünü gösterebilir. Bir düşüş, güvenilirlik çalışmasının karşılığını verdiğini ya da kullanıcıların bildirmekten vazgeçtiğini gösterebilir. Bu konu, hacmi bu hikâyeleri birbirinden ayırmaya yetecek bağlamla okumakla ilgilidir: kullanıma göre normalleştirmek, kategoriye ve hizmete göre bölmek, öncelik karışımını ve tekrar oranını izlemek.

Öncelik, konunun ikinci yarısıdır. ITIL uygulaması önceliği genellikle iki girdiden türetir: etki (işin ne kadarının etkilendiği) ve aciliyet (işin düzeltmeye ne kadar çabuk ihtiyaç duyduğu). Bu çift, beklenen yanıtı belirleyen bir öncelik düzeyine eşlenir. Çevik takımların bir birikim listesini önceliklendirme biçiminde yakın bir karşılığı vardır: kusurlardaki ciddiyet ve aciliyet etiketleri ve bir akış panosunda neyin kuyruğu atlayacağına karar veren bir “hizmet sınıfı”. Sözcükler farklıdır; soru aynıdır: önce neyle ilgilenilmeli ve neden.

ITIL görüşü olayları, kategorileri, öncelikleri ve hizmet düzeyi hedefleri olan, bir hizmet masasının ve çözümleyici grupların sahip olduğu kayıtlar olarak ele alır. Çevik görüş plansız işi, planlı işle rekabet eden ve akışı kesintiye uğratan bir şey olarak ele alır (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”). Ölçümler, içindeki insanları değil sistemi tanımlıyorsa, her iki görüş de aynı ölçümlerden yarar sağlar. [Hizmet masası](https://en.wikipedia.org/wiki/Help_desk_software), kayıtların çoğunun başladığı yerdir ve kendi metrikleri ayrıca ele alınmıştır (bkz. Konu 3.1 “Hizmet masası metrikleri”). Olaylara ne kadar hızlı yanıt verildiği ve bunların ne kadar hızlı çözüldüğü Konu 3.3'te ele alınır (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”). Büyük olayların kendi ölçümleri vardır (bkz. Konu 3.4 “Büyük olay metrikleri”).

Aşağıda birkaç terim tekrar eder. **Yüzdelik dilim** (percentile), gözlemlerin belirtilen bir payının altında kaldığı değerdir; yani 85. yüzdelik dilim, gözlemlerin yüzde 85'inin aşmadığı değerdir. **Hizmet düzeyi anlaşması (SLA)**, bir sağlayıcı ile bir müşteri arasındaki belgelenmiş bir taahhüttür. **Yapılandırma kalemi (CI)**, bir hizmetin sunulması için yönetilmesi gereken bir bileşendir. **Poisson süreci**, bağımsız olarak ve ortalama bir hızla gelen olayları tanımlar ve olay gelişleri için yararlı bir ilk modeldir (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

Konu 1.2'deki uyarı (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”) burada çoğu yerden daha fazla geçerlidir. Olay sayıları ve öncelikleri, çoğu zaman baskı altındaki insanlar tarafından girilir ve bir kayda eklenen sayı, kaydın yazılma biçimini değiştirerek değiştirilebilir. Aşağıdaki her metriğin bir manipülasyon vektörü vardır ve koruma önlemleri tanımın bir parçasıdır.

## Temel ilkeler

- **Karşılaştırmadan önce normalleştirin.** Bir sayı, geldiği kullanım, kullanıcı tabanı ya da işlem hacmi olmadan çok az şey ifade eder. Dönemler ve hizmetler arasında oranları karşılaştırın ve ham sayıyı yanlarında gösterin.
- **Tek bir sayıyı değil, karışımı okuyun.** Öncelik dağılımı, kategori dağılımı ve tekrarların payı birlikte, herhangi bir toplamdan daha çok şey söyler.
- **Öncelik bir kuraldır, bir ruh hali değil.** Önceliği yazılı bir matrisle etki ve aciliyetten türetin ve sonradan ne sıklıkla değiştirildiğini ölçün.
- **Olayları taleplerden ayırın.** Normal bir şey için yapılan talep bir arıza değildir. İkisini birlikte saymak olay hacmini şişirir ve hizmet masasının zamanını nereye harcadığını gizler (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”).
- **Tekrarlar en değerli sinyaldir.** Geri dönen bir olay, henüz çözülmemiş bir soruna işaret eder (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).
- **Hizmetleri ve takımları ölçün, temsilcileri asla.** Kişi başına sayılar sıralamayı davet eder ve sıralama veriyi bozar (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).
- **Hacmin kalite dışındaki nedenlerle de hareket etmesini bekleyin.** Yayınlar, mevsimler, kampanyalar ve bildirim kanallarındaki değişiklikler sayıları kaydırır. Grafiği açıklamalarla işaretleyin.

## Metrik tanımları

Tablo bu konudaki metrikleri listeler. Saatler ve sınırlar formül sütununda belirtilmiştir. “Kapatılan” ve “açılan”, olay kaydındaki zaman damgalarına işaret eder; açılış zamanı kaydın oluşturulduğu ya da izleme sisteminin oluşturduğu zamandır, kapanış zamanı ise olayın çözüldüğünün doğrulanıp kapatıldığı zamandır.

| Metrik | Tanım | Formül | Birim | Veri kaynağı | ITIL uygulaması | Çevik karşılığı | Sıklık |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hizmete göre olay hacmi | Bir dönemde bir hizmet için açılan olayların sayısı | Açılış zamanı dönem içinde olan ve etkilenen hizmete atfedilen olaylar; hizmet talepleri, ana kayda birleştirilen yinelenenler ve hatalı açıldığı için iptal edilen kayıtlar hariç tutulur | sayı | ITSM aracı olay kayıtları | Olay yönetimi | Takım başına üretim kusurları ya da plansız iş kalemleri | Haftalık, aylık gözden geçirilir |
| Normalleştirilmiş olay oranı | Olayların hizmetin kullanımına oranı | Dönemde açılan olaylar / aynı dönem ve kapsam için kullanım ölçümü (etkin kullanıcılar, oturumlar ya da işlemler; hizmet başına seçilir ve kaydedilir) x 1.000; kullanım ölçümü olay aracı dışında bir kaynaktan gelmelidir | 1.000 kullanım birimi başına olay | ITSM aracı ve analitik ya da izlemeden kullanım verisi | Olay yönetimi; hizmet düzeyi yönetimi | Yayın başına ya da kullanıcı başına kusur yoğunluğu | Aylık |
| Öncelik karışımı | Açılan olayların her öncelik düzeyindeki payı | Açılışta kaydedilen önceliğe göre olaylar / dönemde açılan tüm olaylar, her düzey için gösterilir; yeniden sınıflandırılan olaylar açılış önceliğinde sayılır ve kapanış önceliğinde yeniden gösterilir | düzeye göre yüzde | ITSM aracı, öncelik değişikliği geçmişi dahil | Olay yönetimi | Kusurların ciddiyet dağılımı; hizmet sınıfı karışımı | Aylık |
| Öncelik yeniden sınıflandırma oranı | Önceliği açılış ile kapanış arasında değişen olayların payı | Dönemde kapatılan ve kapanış önceliği açılış önceliğinden farklı olan olaylar / dönemde kapatılan olaylar | yüzde | ITSM aracı denetim izi | Olay yönetimi | Kusur birikim listesinde yeniden önceliklendirme oranı | Aylık |
| Kategori yoğunlaşması | Olay hacminin en büyük kategorilerde toplanan payı | Sayıya göre ilk beş kategorideki olaylar / dönemdeki tüm kategorize edilmiş olaylar; kategorize edilmemiş olaylar kendi payları olarak ayrıca raporlanır | yüzde | ITSM aracı kategori ve hizmet alanları | Olay yönetimi; sorun yönetimi | Bileşene ya da epiğe göre kusur kümeleri | Aylık |
| Tekrarlayan olay oranı | Aynı hizmet, yapılandırma kalemi ve kategori için belirtilen bir pencere içinde yinelenen olayların payı | Dönemde, aynı hizmet, CI ve kategori için önceki pencerede (örneğin 30 gün; bir kez belirlenir ve kaydedilir) daha önce kapatılmış bir olayı olan olaylar / dönemde açılan olaylar; yeniden açılan bir kayıt tekrar değil, yeniden açma sayılır | yüzde | ITSM aracı ve CMDB bağlantıları | Olay yönetimi; sorun yönetimi | Gerileme ya da kaçan kusur oranı | Aylık |
| Yeniden açılma oranı | Yeniden açılan kapatılmış olayların payı | Dönemde kapatılan ve belirtilen bir pencere içinde (örneğin 7 gün) sonradan yeniden açılan olaylar / dönemde kapatılan olaylar | yüzde | ITSM aracı durum geçmişi | Olay yönetimi | Yeniden açılan kusurlar; yeniden iş | Aylık |
| İzlemeyle tespit edilen pay | Bir kullanıcı bildirmeden önce izleme tarafından ilk kez yükseltilen olayların payı | İlk olayı otomatik bir uyarı olan olaylar / dönemde açılan tüm olaylar; bir uyarıdan hareketle bir kişi tarafından açılan olaylar uyarı zamanına göre sayılır | yüzde | ITSM aracı, izleme entegrasyonu | İzleme ve olay yönetimi; olay yönetimi | Uyarıyla tetiklenen ve müşterinin bildirdiği kusurlar | Aylık |

Tanımlara ilişkin iki not. Birincisi, bu tablodaki “öncelik”in, kaydın taşıdığı öncelik olduğudur; bu öncelik, insanların işin yapılmasını istediği sıradan değil, etki ve aciliyet matrisinden gelmelidir. İkincisi, bir dönem için raporlanan hacmin bir açılış sayısı olduğu, belirli bir günde açık olan olay sayısı olmadığıdır. Herhangi bir anda açık olan sayı bir birikim ölçümüdür ve yaşlandırmayla birlikte ele alınır (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”).

## Öneriler

### Dikkatle sayın

**1. Bir olayın ne olduğunu ve ne olmadığını yazın.** Birçok araç olayları, talepleri, uyarıları ve sorunları tek bir tabloda tutar. Hangi kayıt türlerinin sayıldığına karar verin, filtreyi belgeleyin ve her seferinde uygulayın. Filtredeki bir değişiklik eğilimi değiştirir, bu yüzden değişiklikleri tarih ve gerekçeyle kaydedin (bkz. Konu 1.5 “Veri kaynakları ve enstrümantasyon”).

**2. Raporlamadan önce yinelenenleri ayıklayın.** Tek bir arıza elli talep kaydı ürettiğinde, ana olay olaydır ve çocuk kayıtlar etki alanının bir ölçüsüdür. İki sayıyı da raporlayın: kaç arıza olduğu için ana olayları, kaç kişinin bunu hissettiği için bağlı kayıtları. İkisini karıştırmak, büyük bir kesintiyi bir aylık rutin iş gibi gösterir.

**3. Olayları takımlara olduğu kadar hizmetlere de atfedin.** Hizmet, işin satın aldığı ve anladığı şeydir. Listeyi tanımlamak için hizmet kataloğunu (ITIL'in “service catalogue”u) kullanın ve hizmetler değiştiğinde CI'lardan eşlemeyi gözden geçirin. Hizmeti olmayan bir olay, düzeltilmesi gereken bir veri kalitesi sorunudur ve bu tür kayıtların payını raporlamaya değer.

### Hacmi normalleştirin ve yorumlayın

**4. Farklı bir kaynaktan gelen bir kullanım ölçümüne göre normalleştirin.** Olay aracından değil, analitikten ya da izlemeden alınan etkin kullanıcılara, oturumlara ya da işlemlere bölün. Kullanıcılarını ve olaylarını ikiye katlayan bir hizmet kötüleşmiş değildir; kullanımı sabitken olayları ikiye katlanan bir hizmet kötüleşmiştir. Kimsenin paydanın bir şeyi gizlediğine inanmaması için ham sayıyı oranın yanında gösterin.

**5. Bir eğilim oku yerine bir kontrol grafiği kullanın.** Hiçbir şey değişmediğinde bile olay sayıları haftadan haftaya değişir. Bir [kontrol grafiği](https://en.wikipedia.org/wiki/Control_chart), olağan değişim aralığını gösterir; böylece takım bir sinyale tepki verir ve gürültüyü rahat bırakır. Sınırlar içinde hareket eden haftalık sayılar haber değildir; ortalamanın bir tarafında süren bir seri ise haberdir. Çeyrek sonu, tatiller ve yayın döngüleri gibi [mevsimselliği](https://en.wikipedia.org/wiki/Seasonality), benzer dönemleri karşılaştırarak düzeltin.

**6. Grafiği olaylarla işaretleyin.** Yayınları, geçişleri, kampanyaları, bağımlılıkların kesintilerini ve bildirim kanalındaki değişiklikleri işaretleyin. Yeni bir self servis formu ya da daha görünür bir “sorun bildir” düğmesi, hizmet aynı kalırken hacmi artırabilir. Grafik o hafta ne olduğunu gösterdiğinde hacim tartışmalarının çoğu hızla biter.

### Önceliği kurallarla yönetin

**7. Önceliği, yayımlanmış bir matrisle etki ve aciliyetten türetin.** Etkiyi etkilenen kullanıcılar ve iş işlevleri cinsinden, aciliyeti ise zararın ne kadar çabuk büyüyeceği cinsinden tanımlayın. Matrisi, temsilcilerin değerleri seçtiği sayfada, hücre başına iki ya da üç somut örnekle yayımlayın. Serbest seçimli öncelik alanlarından kaçının; bunlar pazarlığa dönüşür ve “öncelik 1” olay sayısı bir ikna ölçüsü olur.

**8. Karışımı ve yeniden sınıflandırma oranını birlikte raporlayın.** Sağlıklı bir karışımda en yüksek öncelikli az sayıda olay ve düşük öncelikli geniş bir taban bulunur. En üst düzey büyüyorsa, zararın mı büyüdüğünü yoksa müşterilerin “kritik”in ilgi gördüğünü mü öğrendiğini sorun. Yeniden sınıflandırma oranı matrisin ne kadar iyi uyduğunu gösterir: kapanışta sık değişiklik, kuralın belirsiz olduğu ya da ilk değerlendirmenin aceleye geldiği anlamına gelir. Her ay, yeniden sınıflandırılan kayıtlardan bir örneklemi matrisin sahibi olan grupta gözden geçirin.

**9. Önceliği ve çevik hizmet sınıfını uyumlu tutun.** Teslimat takımları olay kaynaklı iş aldığında aynı sözcükleri ve aynı matrisi kullanın ya da net bir eşleme yayımlayın. Bir kusura “yüksek” diyen bir takım ile aynı kusura “orta” diyen bir operasyon, çeviri için zaman kaybeder. Kesintinin akış ölçümlerinde görünür olması için hızlandırılmış iş için açık bir pay ayırın (bkz. Konu 2.1 “Akış ölçümleri”).

### Tekrarları ve örüntüleri arayın

**10. Tekrarları ve yeniden açılmaları ayrı sinyaller olarak izleyin.** Yeniden açılma, ilk düzeltmenin tutmadığı anlamına gelir; tekrar, aynı türden arızanın düzgün bir düzeltmeden sonra geri döndüğü anlamına gelir. Birincisi çözüm kalitesine, ikincisi çözülmemiş bir nedene işaret eder. Tekrarlayan kümeleri sorun kayıtlarına bağlayın ve geri gelmesi muhtemel bir olayı düzeltilmiş saymayı bırakın (bkz. Konu 4.1 “Sorun yönetimi metrikleri”).

**11. Nereye bakacağınıza karar vermek için [Pareto ilkesini](https://en.wikipedia.org/wiki/Pareto_principle) kullanın.** Kategorileri ve hizmetleri olay sayısına göre sıralayın ve hacmin çoğunu ne kadar azının oluşturduğuna bakın. Geri kalanı için yeni raporlar oluşturmadan önce ilk birkaçını inceleyin. Bu biçim bir sonuç değil, [kök neden analizi](https://en.wikipedia.org/wiki/Root_cause_analysis) için bir ipucudur; çünkü sayısı yüksek bir kategori, yalnızca kategorize edilmesi kolay olan olabilir.

**12. Bulguları teslimata ve hizmet masasına geri besleyin.** Kategori ve tekrar görünümlerini, hizmetleri geliştiren ve değiştiren takımlarla bir rapor yerine düzenli bir konuşmada paylaşın. Her yinelenen kümeyi bir sahip, bir sonraki adım ve bir tarihle eşleştirin ve işi diğer önceliklerle aynı birikim listesine koyun (bkz. Konu 2.6 “Birikim listesi ve iyileştirme metrikleri”). Nedenler ortadan kalktığında hacim düşer ve bunun için planlı kapasite gerekir.

## Manipülasyon yolları ve koruma önlemleri

| Metrik | Nasıl manipüle edilir | Eşleştirilen koruma metriği ya da uygulaması |
| --- | --- | --- |
| Hizmete göre olay hacmi | Olayları talep olarak kaydetmek, ilgisiz talep kayıtlarını birleştirmek, kullanıcıları bildirmekten caydırmak ya da yinelenenleri “arıza bulunamadı” olarak kapatmak | Olay hacminin yanında kullanıcı kaynaklı iletişim hacmi ve talep hacmi; hizmet masasından memnuniyet ve terk; arıza gibi okunan taleplerin örneklemesi |
| Normalleştirilmiş olay oranı | En iyi rakamı veren paydayı seçmek ya da kullanım tanımını dönemler arasında değiştirmek | Kayıt defterinde tutulan, hizmet başına sabit bir kullanım ölçümü; ham sayıların oranın yanında gösterilmesi |
| Öncelik karışımı | Sakin görünmek için öncelikleri düşürmek ya da ilgi çekmek için yükseltmek; bir yanıt hedefinden kaçınmak için düşük öncelik atamak | Öncelik yeniden sınıflandırma oranı; etki ve aciliyet matrisine karşı aylık örneklem gözden geçirmesi; müşterinin bildirdiği etki |
| Öncelik yeniden sınıflandırma oranı | Değişmesi gerektiğinde önceliği değiştirmemek, böylece oran kararlı görünür; yalnızca kapanışta hedefe uydurmak için değiştirmek | Olay sırasında etkisi değişen kayıtların örneklemesi; olay zaman çizelgelerinin gözden geçirilmesi |
| Kategori yoğunlaşması | Her şeyi kapsayan bir kategori kullanmak ya da yoğunlaşmayı gizlemek için büyük bir kategoriyi birkaça bölmek | Kategorize edilmemiş ve “diğer” kayıtların payı; kategori listesinin düzenli gözden geçirilmesi; kategorilerin çözüm notlarına karşı kontrolü |
| Tekrarlayan olay oranı | Bağlantıdan kaçınmak için farklı ifade ya da CI ile yeni bir olay açmak; yeniden açmaktan kaçınmak için erken kapatmak | Neredeyse yinelenen kayıtların metne ve hizmete göre gözden geçirilmesi; yeniden açılma oranı; sorun kayıtlarına bağlantı oranı |
| Yeniden açılma oranı | Kullanıcılardan yeniden açmak yerine yeni bir talep kaydı açmalarını istemek; yeniden açmalardan kaçınmak için talep kayıtlarını geç kapatmak | Yakın zamanda kapatılmış bir kayda başvuran yeni talep kayıtlarının sayısı; müşterinin çözümü onaylaması; kapanma süresi dağılımı |
| İzlemeyle tespit edilen pay | Olayları otomatik olarak açan gürültülü uyarılar oluşturmak ya da insanların kullanıcı bildirimlerini uyarı olarak yeniden etiketlemesine izin vermek | Eyleme dönüştürülebilir uyarı payı gibi uyarı kalitesi ölçümleri (bkz. Konu 5.5 “İzleme ve uyarı kalitesi metrikleri”); olay kaynağı denetimi |

Sağlıklı bir okuma sıkıcı ve açıklanabilirdir. Normalleştirilmiş oranlar kararlı hizmetlerde sabit ya da düşüktür ve kullanım ya da değişiklik, grafiğin gösterdiği bir nedenle arttığında yükselir. Öncelik karışımı kararlıdır, yeniden sınıflandırma düşüktür ve küçük bir kategori kümesi bilinçli ilgi görür. Planlı sorun çalışmasından sonra tekrarlar ve yeniden açılmalar düşer ve herhangi bir metrikteki bir hareketin, birinin rakamı savunmadan verebileceği bir açıklaması vardır.

## Ödünleşimler: artılar ve eksiler

| Yaklaşım | Güçlü yan | Zayıf yan |
| --- | --- | --- |
| Ham olay sayıları | Basit, açıklaması kolay, her zaman mevcut | Kullanımı, kaliteyi ve bildirim davranışını tek bir sayıda karıştırır |
| Kullanıma göre oranlar | Dönemler ve hizmetler arasında adil karşılaştırmaya izin verir | Güvenilir bir kullanım kaynağı gerektirir; paydalar tartışılabilir |
| Sabit etki ve aciliyet matrisi | Takımlar arasında tutarlı öncelik; denetlenebilir | Katı hissettirebilir; uç durumlar yargı ve bir geçersiz kılma yolu gerektirir |
| Serbest seçimli öncelik | Deneyimli temsilciler için hızlı ve esnek | Tutarsız, baskıya açık, zaman içinde karşılaştırması zor |
| Ayrıntılı kategori ağacı | Talebin nereden geldiğini gösterir | Baskı altında kullanması zor; insanlar ilk eşleşmeyi ya da “diğer”i seçer |
| Etiketli kısa kategori listesi | Uygulaması hızlı ve tutarlı | Daha az ayrıntı; metin analizi gerektiren örüntüleri gizleyebilir |
| CI ve kategoriye göre tekrar oranı | Çözülmemiş nedenlere işaret eder | İyi CI verisine bağlıdır; hem yanlış bağlantılar hem de kaçırmalar olur |

Tek bir ölçümün doğru olmadığını kabul edin. Kapasite planlaması için ham sayıları, sağlık için oranları, risk için öncelik karışımını ve iyileştirme için tekrarları kullanın ve her birini olduğu şey olarak gösterin. Kategori listesini, insanların kullanacağı kadar kısa tutun ve ağacı yalnızca bir karar daha ince ayrıntıya ihtiyaç duyduğunda geliştirin.

## Takımınızla tartışılacak sorular

**1. Burada neyin olay sayıldığı ve herkes kuralı aynı biçimde uyguluyor mu?**
On yakın tarihli kaydı alın ve her kişiden bunları olay, talep ya da başka bir şey olarak etiketlemesini isteyin. Yanıtları karşılaştırın ve anlaşmazlıkları tartışın. Kolaylaştırıcı, kıdemli bir kişiden gelen her talep kaydını olay saymak gibi alışkanlıklara bakmalı ve sonra örneklerle birlikte tek bir yazılı kural üzerinde anlaşmalıdır. Sonraki eğilimlerin doğru okunabilmesi için tarihi kaydedin.

**2. Geçen çeyrekte olay hacmi arttığında, o sırada kullanım ve değişiklik hakkında ne biliyorduk?**
Grafiği, yayınların, kampanyaların ve kullanım rakamlarının bir zaman çizelgesinin yanına koyun. Hangi artışın açıklandığını ve hangisinin açıklanmadığını sorun. Tartışma, paydanın sayfada ne kadar nadir bulunduğunu gösterme eğilimindedir. Bundan sonra her hizmetin hangi kullanım ölçümünü taşıyacağı üzerinde anlaşın.

**3. Öncelik nasıl belirleniyor ve bizi en son ne zaman şaşırttı?**
Etki ve aciliyet matrisini, her öncelik düzeyinden yakın tarihli bir örnekle gözden geçirin. Temsilcilerin nerede tahmin yürüttüğünü ve müşterilerin ya da yöneticilerin nerede baskı yaptığını sorun. Birkaç kaydın açılış önceliğini ve kapanış önceliğini karşılaştırın. Tartışmayı azaltan, matriste ya da örneklerinde yapılacak tek bir değişikliğe karar verin.

**4. Hangi üç kategori olay hacmimizin çoğunu alıyor ve nedeni ortadan kaldırmak için kim çalışıyor?**
En çok olay üreten kategorileri ve her biri için altta yatan nedenin sahibini listeleyin. Yanıt “hiç kimse” ise bu bir bulgudur. Kategorinin gerçek bir küme mi yoksa bir etiketleme alışkanlığı mı olduğunu sorun. Bu çeyrekte teslimat takımıyla birlikte incelenecek bir küme seçin.

**5. Bir tekrarı bir yeniden açmadan nasıl ayırıyoruz ve her biri hakkında ne yapıyoruz?**
Takıma iki ya da üç kayıt çifti gösterin ve hangilerinin tekrar olduğunu sorun. Bir yeniden açmanın ilk düzeltmenin kalitesi hakkında, bir tekrarın ise neden hakkında ne söylediğini tartışın. Kolaylaştırıcı, grubu tekrarlayan kümeleri tek tek kapatmak yerine sorun kayıtlarına bağlamaya yönlendirmelidir. Bunları kimin ve ne sıklıkla gözden geçireceği üzerinde anlaşın.

**6. Olay sayımız her hafta üst düzey liderler tarafından gözden geçirilseydi neyi değiştirmeye cazip olurduk?**
Gruptan sayıyı bir duvarda hayal etmesini isteyin. Hangi alışkanlıklar kayardı: işlerin nasıl kaydedildiği, talep kayıtlarının nasıl birleştirildiği, önceliklerin nasıl belirlendiği? Baskıyı açıkça ve suçlamadan adlandırın. Hangi koruma önleminin kaymayı göstereceği ve kimin ona bakacağı üzerinde anlaşın.

## Dört bakış açısı

### Ürün ve teslimat takımları

Teslimat takımları bu konunun çıktısını talep olarak alır. Kategori ve tekrar görünümleri ürünün hangi bölümlerinin en çok soruna yol açtığını, öncelik karışımı ise ne kadar kesinti işi planlanacağını gösterir. Takımlar olay kaynaklı işi kapasitelerinin bir parçası olarak ele almalı, akış ölçümlerinde görünür tutmalı ve birikim listesindeki güvenilirlik çalışmasını gerekçelendirmek için tekrar kümelerini kullanmalıdır (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”). Yayın başına olayları saymak yararlı bir eğilimdir, ancak asla bireysel geliştiriciler için bir suçlama ölçüsüne dönüşmemelidir.

### Hizmet ve operasyon takımları

Hizmet ve operasyon takımları kayıtları oluşturur ve öncelik çevresindeki baskıyı hisseder. Net bir matristen, kısa bir kategori listesinden ve yinelenenleri bağlamanın hızlı yollarından yarar sağlarlar. Başkaları yapmadan önce, kategorize edilmemiş kayıtların payı ve yeniden sınıflandırma oranı gibi, kendi araçlarındaki verileri kendileri kontrol etmelidir. Operasyon takımları aylık örneklem gözden geçirmesini yürütmek ve tekrarlayan kümeleri sorun yönetimine beslemek için iyi bir konumdadır.

### Liderlik ve yönetişim

Liderler hizmetin iyileşip iyileşmediğini ve nereye yatırım yapılacağını bilmek ister. Normalleştirilmiş oranları, öncelik karışımını ve tekrar görünümünü açıklamalarla birlikte istemeli ve tek bir hacim rakamına direnmelidir. “Daha az olay” hedefleri bastırmayı davet eder; bu yüzden beklentileri bunun yerine müşteri etkisi ve tekrarların azaltılması gibi sonuçlar üzerinden belirleyin. Yönetişim, öncelik matrisinin sahibi olmalı ve değişiklikleri, eğilim çizgileri üzerindeki etki not edilerek onaylamalıdır.

### Müşteriler ve kullanıcılar

Müşteriler olayları kategoriler olarak değil, kesintiye uğramış iş olarak deneyimler. Bir arızayı bildirmenin kolay bir yoluna, kendi etkilerine dayalı adil bir önceliğe ve dürüst güncellemelere ihtiyaçları vardır. Bildirimler caydırılırsa ya da öncelikler keyfi hissettirirse hacim düşer ve güven de onunla birlikte düşer. Ana bulguları kullanıcıların tanıdığı terimlerle paylaşın; örneğin iyileştirilen hizmetler ve ortadan kaldırılan sorunlar (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”).

## Uygulamada: çevik bir ITIL örneği

Bölgesel bir hastanenin BT departmanı, bir hasta kayıt sistemini, bir randevu sistemini ve bir personel mesajlaşma aracını destekler. Bu örnekteki tüm sayılar örnek niteliğindedir.

Aylık rapor, çeyreğin son ayında bir önceki aydaki 520'ye karşılık 640 olay gösterir. Liderlik bir kurtarma planı ister. Sayısı en çok artan randevu sisteminin hizmet sahibi, hizmetin kötüleştiği konusunda hemfikir olmadan önce verilere bakmak ister.

Üç olgu ortaya çıkar. Birincisi, randevu sistemi o ay yeni bir klinik grubu kazanmıştır ve etkin kullanıcılar yaklaşık yüzde 30 (örnek) artmıştır. Normalleştirildiğinde, 1.000 oturum başına olay oranı kabaca sabittir. İkincisi, fazladan kayıtlardan 90'ı tek bir ana olaya, bir laboratuvar sistemiyle arayüzün başarısızlığına bağlıdır; dolayısıyla ayrı arızaların sayısı yalnızca bir avuç artmıştır. Üçüncüsü, öncelik karışımı kaymıştır: en yüksek önceliğin payı bir önceki ay yüzde 2 iken şimdi yüzde 7'dir. Yeniden sınıflandırma oranı da iki katına çıkmıştır ve 20 kayıtlık bir örneklem, yüksek önceliklerin yaklaşık yarısının kapanışta düşürüldüğünü göstermiştir.

Takım üç karar alır. Ana olayları ve bağlı kayıtları ayrı raporlarlar. Raporda payda olarak etkin oturumları eklerler. Hizmet masası ve klinik liderlerle yarım saatlik bir oturum yaparak etki ve aciliyet matrisini örneklenen kayıtlara uygularlar; bu oturum, “bir klinik hastalara randevu veremiyor” durumunun bazı temsilciler tarafından orta, bazıları tarafından yüksek olarak ele alındığını gösterir. Matrise her hücre için iki klinik örnek eklenir.

Yakaladıkları manipülasyon riski sessizdir. Bir yönetici, her biri bir gözden geçirmeyi tetiklediği için temsilcilerden randevu sistemi için öncelik 1'den kaçınmalarını istemiştir; bu yüzden kayıtlar daha düşük öncelikle açılıyor ve sonradan yükseltiliyor ya da hiç yükseltilmiyordu. Yeniden sınıflandırma oranı ve örneklem gözden geçirmesi örüntüyü ortaya çıkardı. Takım, gözden geçirmelerin öğrenmek için olduğu konusunda anlaşır, bu ifadeyi yayımlar ve bir koruma önlemi olarak kapanış önceliğinin altında açılan olayların payını izler. Kategori yoğunlaşması da arayüz arızasını listenin başında gösterir; bu nedenle bir sorun kaydı açılır ve arayüz takımıyla bir düzeltme planlanır.

## Sektör mercekleri

**Girişim.** Hacim küçüktür ve takım her olayı bilir, bu yüzden oranlar ve matrisler ağır hissettirebilir. Hizmete göre basit bir sayım ve kısa bir kategori listesi tutun ve neyin olay sayıldığını tek bir sayfada yazın. Tekrarlara dikkat edin; çünkü küçük bir takım tekrarlayan bir arızayı hızla ortadan kaldırıp zaman kazanabilir.

**Küçük işletme.** Hizmet masası, barındırılan bir aracı kullanan tek bir kişi olabilir. Aracın standart raporlarını kullanın, önceliği sade bir etki ve aciliyet kuralıyla birkaç düzeyde tutun ve taleplerin olay olarak sayılmadığını kontrol edin. Yeni personel ya da yeni yazılım gibi değişikliklere ilişkin notlarla ay ay karşılaştırın.

**Büyük kurum.** Birçok hizmet, tedarikçi ve masa, tutarlılığı ana sorun haline getirir. Tek bir etki ve aciliyet matrisi, sınırlı derinlikte tek bir kategori şeması ve yinelenenleri ayıklamak için tek bir kural üzerinde anlaşın ve yerel takımların paylaşılan şemayı değiştirmeden etiket eklemesine izin verin. Hizmete göre normalleştirin ve eğilimleri kontrol grafikleri ve açıklamalarla gözden geçirin. Tedarikçi kaynaklı olaylar sözleşmelerde ortak bir tanıma ihtiyaç duyar (bkz. Konu 5.1 “SLA, OLA ve XLA metrikleri”).

**Devlet ve kamu sektörü.** Olaylar, özellikle hizmetlerin vatandaşların haklarını ya da güvenliğini etkilediği durumlarda, raporlama yükümlülükleri, denetim ihtiyaçları ve kamu yararı taşıyabilir. Öncelik matrisini ve kategori şemasını belgeleyin, öncelik değişikliklerinin denetim izini tutun ve yayımlanan her sayıya karşı dikkatli olun; çünkü kamuya raporlama, kayıtların nasıl yazıldığı üzerinde güçlü bir baskı yaratabilir. Kullanım verisi gizlilik kurallarıyla sınırlı olabilir, bu yüzden meşru biçimde kullanabileceğiniz paydayı belirtin (bkz. Konu 8.5 “Düzenlemeye tabi ve kamuya yönelik raporlama”).

## İş gerekçesi: motivasyonlar, yatırım getirisi ve toplam sahip olma maliyeti

Motivasyon talep yönetimidir. Olaylar nitelikli zamanı tüketir, planlı işi böler ve kullanıcıları aksatır. Hacmi, önceliği ve tekrarları anlamak, bir kurumun nedenleri ortadan kaldırmasını, personeli gerçek talebe göre planlamasını ve liderlere güvenilirlik çalışmasının nerede karşılığını vereceğini göstermesini sağlar.

Maliyetin üç parçası vardır. Kurulum; olay ve talebin tanımlanmasını, öncelik matrisi ve kategori şeması üzerinde anlaşmayı ve kullanım verisini hizmetlere bağlamayı kapsar. İşletme maliyeti, kayıtları temiz tutma emeği, aylık bir örneklem gözden geçirmesi ve raporu sürdüren bir kişidir. Üçüncü maliyet, getirinin çoğunun geldiği yer olan bulgular üzerinde harekete geçme zamanıdır; bu yüzden bunun için kapasite planlayın.

Getiri en iyi, kendiniz ölçebileceğiniz örüntüler olarak tanımlanır. Bunlar arasında sorun çalışmasından sonra daha az tekrar, öncelik anlaşmazlıklarında harcanan daha az zaman, daha az sürpriz yükseltme ve personel ile talep arasında daha iyi bir uyum bulunur. Olaylarda yüzde olarak bir azalma vaat etmekten kaçının; bu hizmete, başlangıç noktasına ve yapılan işe bağlıdır. Toplam sahip olma maliyetinin çoğu insanların zamanıdır, o yüzden onu sayın ve tekrarlayan olayların şu anda tükettiği zamanla karşılaştırın.

## Anti-desenler ve tuzaklar

- **Ham bir sayıyı sağlık puanı olarak raporlamak.** Kullanım, değişiklik ve bildirim davranışı, hepsi onu hareket ettirir. Normalleştirilmiş oranları, ham sayıları ve açıklamaları birlikte gösterin.
- **Daha az olay için hedefler.** Bastırmayı ve yanlış etiketlemeyi ödüllendirirler. Tekrarların azaltılması ve müşteri etkisi için hedefler belirleyin ve olay sayısını bilgi olarak tutun.
- **Talepleri olay olarak saymak.** Hacim artar ve hizmet olduğundan daha kötü görünür. Kayıt türlerini ayırın ve her birini raporlayın.
- **Serbest seçimli öncelik.** Öncelik pazarlığa dönüşür ve karışım anlamsızlaşır. Yayımlanmış bir matris kullanın ve tutarlılık için örnekleyin.
- **Kimsenin kullanmadığı bir kategori ağacı.** İnsanlar ilk eşleşmeyi seçer ve “diğer” büyür. Kısa tutun, “diğer”i her ay gözden geçirin ve kullanılmayanı budayın.
- **Bağlı her talep kaydını ayrı bir arıza olarak saymak.** Tek bir kesinti ayı domine eder. Ana olayları ve bağlı kayıt sayısını raporlayın.
- **Temsilcileri ya da takımları olay sayılarına göre sıralamak.** Kişi başına sayılar iş dağılımını ve talep kaydı alışkanlıklarını yansıtır. Hizmetlere göre toplayın ve kişileri değil, örüntüleri gözden geçirin.
- **Tekrarları göz ardı etmek.** Aynı arıza defalarca düzeltilir ve nedenin sahibi yoktur. Tekrarları sorun kayıtlarına bağlayın ve bir sahip atayın.

## Olgunluk modeli

| Boyut | 1 Başlatma | 2 Geliştirme | 3 Standartlaştırma | 4 Yönetme | 5 Orkestrasyon |
| --- | --- | --- | --- | --- | --- |
| Tanımlar ve sayım | İnsanlar bir olayın ne olduğu konusunda anlaşamaz; sayılar anlık dışa aktarımlardan gelir | Bazı takımlar talepleri olaylardan ayıklar; kurallar farklıdır | Tüm takımlar için tek yazılı tanım, filtre ve yinelenenleri ayıklama kuralı | Tanım değişiklikleri kaydedilir ve eğilim grafiklerinde gösterilir; kategorize edilmemiş kayıtların payı izlenir | Tanımlar tedarikçiler ve müşterilerle gözden geçirilir ve kararlara bilgi vermeyi bıraktıklarında yeniden düzenlenir |
| Normalleştirme ve yorumlama | Yalnızca ham sayılar | Kullanım verisi birkaç hizmette kullanılır | Ayrı bir kaynaktan, hizmet başına adlandırılmış bir kullanım ölçümü | Gözden geçirmelerde açıklamalı kontrol grafikleri kullanılır | Talebi açıklamak için kullanım, değişiklik ve olay verisi takımlar ve tedarikçiler arasında bağlanır |
| Öncelik uygulaması | Öncelik hisle seçilir | Bazı takımlarda matris vardır | Örneklerle tek bir matris, önceliğin seçildiği yerde gösterilir | Karışım ve yeniden sınıflandırma oranı her ay gözden geçirilir ve örneklenir | Koşullar değiştikçe matris müşteriler ve klinik ya da iş sahipleriyle ayarlanır |
| Tekrarlar ve örüntüler | Tekrarlar bellekten fark edilir | Kategori listeleri ara sıra gözden geçirilir | Tekrar ve yeniden açılma oranları belirtilmiş bir pencereyle aylık raporlanır | Tekrarlayan kümeler, sahipleri ve tarihleriyle sorun kayıtlarına bağlanır | Takımlar ve tedarikçiler arası neden ortadan kaldırma fonlanır ve azalan talebe kadar izlenir |

## Kontrol listesi

- [ ] Yazılı bir tanım, olayları taleplerden, uyarılardan ve sorunlardan ayırır.
- [ ] Ana olaylar ve bağlı kayıtlar ayrı raporlanır.
- [ ] Her olay, hizmet kataloğundaki bir hizmete atfedilir.
- [ ] Her hizmetin, olay aracı dışında bir kaynaktan adlandırılmış bir kullanım ölçümü vardır.
- [ ] Raporlar ham sayıyı, normalleştirilmiş oranı ve yayınlar ile kampanyalar için açıklamaları gösterir.
- [ ] Haftalık hacimdeki bir değişikliğe herhangi biri tepki vermeden önce bir kontrol grafiği kullanılır.
- [ ] Öncelik, örneklerle yayımlanmış bir etki ve aciliyet matrisinden türetilir.
- [ ] Öncelik karışımı ve yeniden sınıflandırma oranı her ay birlikte gözden geçirilir.
- [ ] Kategori listesi kısadır ve “diğer” ile kategorize edilmemiş kayıtların payı izlenir.
- [ ] Tekrar ve yeniden açılma oranları belirtilmiş pencereler kullanır ve ayrı raporlanır.
- [ ] Tekrarlayan kümeler bir sahiple birlikte sorun kayıtlarına bağlanır.
- [ ] Hiçbir rapor bireysel temsilcileri olay sayılarına göre sıralamaz.

## Yapay zekâ istemleri

**Olay hacmi tanımını belirsizlik açısından kontrol edin.**

```text
[ITSM aracı] içinden [hizmet ya da takım] için olay hacmini sayıyoruz. Mevcut
filtremiz [kayıt türlerini, durumları ve hariç tutulanları tanımlayın] ve
dönemimiz [dönem]. Taleplerin, yinelenenlerin, birleştirilmiş talep kayıtlarının
ve iptal edilmiş kayıtların nasıl ele alındığı dahil, tanımı belirsizlik
açısından gözden geçir. Anlaşmazlıkları çözecek net bir yazılı kural ve kısa bir
örnek listesi öner. Kıyaslama değerleri uydurma. Tanımı tamamlamak için
yanıtlamam gereken soruları ve varsayımlarını listele.
```

**Normalleştirilmiş bir olay oranı tasarlayın.**

```text
[hizmet adı] hizmeti için kullanıma göre normalleştirilmiş bir olay oranı
istiyorum. Mevcut kullanım ölçümleri [liste, örneğin etkin kullanıcılar,
oturumlar, işlemler] ve kaynak [kaynak]. Seçenekleri karşılaştır, hangisinin en
iyi uyduğunu ve nedenini söyle ve her birini neyin çarpıtabileceğini anlat. Ham
sayıyı, oranı ve [yayınlar ya da kampanyalar gibi olaylar] için açıklamaları
tek bir grafikte nasıl göstereceğimi öner. Rakam ya da eşik uydurma.
Varsayımlarını listele.
```

**Bir etki ve aciliyet matrisini gözden geçirin.**

```text
İşte öncelik matrisimiz: [etki düzeylerini, aciliyet düzeylerini ve ortaya çıkan
öncelikleri yapıştırın] ve işte [sayı] adet anonimleştirilmiş örnek olay:
[kısa açıklamaları yapıştırın]. Matrisi her örneğe uygula, iki okuyucunun
farklı önceliklere ulaşabileceği yerleri belirt ve anlaşmazlığı azaltacak
ifadeler ya da örnekler öner. Matrisin manipüle edilebileceği yolları belirle.
Yanıt hedefleri ya da kıyaslama değerleri uydurma. Varsayımlarını listele.
```

**Kategorileri ve tekrarları iyileştirme adayları için analiz edin.**

```text
[dönem] için şu alanlara sahip olay kayıtlarım var: [alanları listeleyin,
örneğin hizmet, kategori, CI, açılış zamanı, kapanış zamanı, yeniden açılma
bayrağı]. En çok olay üreten kategorileri bulmak, [pencere] penceresi kullanarak
yeniden açılmaları tekrarlardan ayırmak ve sorun incelemesi için [sayı] aday
seçmek amacıyla bir yöntem anlat. Her şeyi kapsayan kategorilerin ve neredeyse
yinelenen kayıtların nasıl kontrol edileceğini açıkla. Sana göstermediğim
verilerde örüntüler uydurma. Varsayımlarını listele.
```

## Yapay zekâ becerileri

- [Agile ITIL Metrics becerisi](../../../../skills/agile-itil-metrics-skill/SKILL.md): ilgili bir metriği tanımlayan konuyu ve onun yanında yer alması gereken koruma önlemini bulmak için kullanın.
- [Agile ITIL Metrics bakım becerisi](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): düzenlenmiş bir metrik konusunun saatlerini, manipülasyon vektörlerini ve koruma önlemlerini eksiksiz tutup tutmadığını kontrol etmek için kullanın.

## Temel çıkarımlar

- Olay hacmi kaliteyi olduğu kadar kullanımı, değişikliği ve bildirim davranışını da yansıtır, bu yüzden onu normalleştirin ve açıklamalarla işaretleyin.
- Önceliği bir karışım olarak okuyun, yayımlanmış bir etki ve aciliyet matrisinden türetin ve yeniden sınıflandırma oranını izleyin.
- Ana olayları ve bağlı kayıtları ayrı raporlayın; böylece tek bir kesinti bir aylık rutin iş gibi görünmez.
- Tekrarlar ve yeniden açılmalar en yararlı sinyallerdir; çünkü nedenlere ve tutmayan düzeltmelere işaret ederler.
- Hizmetlere ve takımlara göre toplayın, bireysel temsilcilere göre asla toplamayın ve her metriği bir koruma önlemiyle eşleştirin.
- Nereye bakacağınıza karar vermek için kontrol grafiklerini ve Pareto görünümlerini kullanın, sonra her kümeye bir sahip ve kapasite verin.

## Kaynaklar ve ileri okuma

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
