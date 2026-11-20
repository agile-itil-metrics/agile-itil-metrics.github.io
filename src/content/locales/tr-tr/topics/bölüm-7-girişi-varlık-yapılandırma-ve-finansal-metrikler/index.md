# Bölüm 7 Girişi: Varlık, Yapılandırma ve Finansal Metrikler

**Neye sahip olduğunuzu, bunların birbirine nasıl bağlandığını ve neye mal olduğunu bilmek, diğer her hizmet kararının dayandığı temeldir; en iyi, ayrı bir angarya olarak değil, işin bir yan ürünü olarak güncel tutulur.**

Hizmetleri teslim eden ve işleten takımlar, haftada yüzlerce karar verir ve bu kararlar şeylere ilişkin olgulara dayanır: Bu değişiklik hangi sunuculara dokunuyor, hangi lisanslar gelecek ay sona eriyor, bu bulut hesabının sahibi kim, bu hizmet müşteri başına ne kadara mal oluyor? Bu olgular yanlış ya da eksik olduğunda kararlar tahmine dönüşür. Varlık, yapılandırma ve finans kayıtları tahminleri bilinçli seçimlere çevirmek için vardır; bu bölümdeki metrikler de bu kayıtların ne kadar iyi olduğunu ve ne kadar iyi kullanıldığını sorar.

Çevik pratik ve ITIL bu alana farklı yönlerden yaklaşır ve birlikte daha güçlüdürler. ITIL; kayıtlar, sahipler, yaşam döngüleri ve hizmet maliyetlendirmesi disiplinini getirir. Çevik pratik ve DevOps ise değişikliği sürekli teslim etme alışkanlığını, kod olarak tanımlanan altyapıyı ve oluşturduklarını kaydedebilen işlem hatlarını getirir. En iyi sonuçlar, teslimat işlem hatları kayıtları otomatik olarak beslediğinde ve satın alma, finans, güvenlik, operasyon ve mühendislik tek bir ortak resim etrafında sürekli iş birliği yaptığında ortaya çıkar. Hizmetlerinin sahibi olan, güvenilen ve ihtiyaç duyduğu bilgi verilen takımlar, kayıtlar yanlış olduğunda bedelini kendileri ödedikleri için kayıtları doğru tutar.

Bu kayıtlar şişirmeye de açıktır. Bir envanter, yalnızca zaten bilinenleri listelediği için kusursuz görünebilir. Bir maliyet rakamı, ortak maliyetler başka yere dağıtıldığı için düşük görünebilir. Bir iş gerekçesi, faydalar cömert hesaplandığı için güçlü görünebilir. Bu nedenle bu bölümdeki her metrik, nasıl oyunlandığıyla ve onu kendisiyle değil bağımsız kanıtla karşılaştıran bir koruma önlemiyle birlikte gelir (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Bu ölçümlerin hiçbiri insanları ya da takımları sıralamaz. Varlık envanterlerini, hizmetleri ve kararları betimlerler.

## Bu bölümdeki konular

- **7.1 BT varlık yönetimi metrikleri**: envanter doğruluğu, keşif kapsamı, mutabakat, sahiplik ve yaşam döngüsü bütünlüğü; kayıtlar iş yapılırken yakalanır.
- **7.2 Yazılım varlığı ve lisans metrikleri**: lisans konumu, kullanım oranı, atıl lisans (shelfware), yayılma, yenilemeye hazırlık ve yazılım malzeme listeleri.
- **7.3 Donanım varlığı yaşam döngüsü metrikleri**: yaş profili, arıza oranı, değiştirme süresi, kullanım, güvenli imha ve yeniden kullanım.
- **7.4 Yapılandırma ve CMDB kalitesi metrikleri**: bütünlük, doğruluk, bağımlılık kapsamı, etki tahmini ve yapılandırma kaydının kullanımı.
- **7.5 Hizmet maliyeti ve birim ekonomisi**: hizmet başına maliyet, birim maliyet, dağıtım, maliyet görünürlüğü (showback) ve kalıcı takımların finanse edilmesi.
- **7.6 FinOps ve bulut maliyeti metrikleri**: etikete göre dağıtım, israf, taahhütler, anomaliler, tahmin sapması ve emisyonlar.
- **7.7 Yatırım getirisi ve iş gerekçesi**: toplam sahip olma maliyeti, getiri, geri ödeme süresi, net bugünkü değer ve geçmiş tahminlerin doğruluğu.

## Bu konular birbiriyle nasıl ilişkilidir

İlk dört konu şeylerin kendisini betimler. Varlık kayıtları (bkz. Konu 7.1 “BT varlık yönetimi metrikleri”) neyin var olduğunu ve sahibinin kim olduğunu söyler. Yazılım ve donanım konuları (bkz. Konu 7.2 “Yazılım varlığı ve lisans metrikleri” ve Konu 7.3 “Donanım varlığı yaşam döngüsü metrikleri”) her sınıfın kendine özgü yaşam döngülerini ve yükümlülüklerini ekler. Yapılandırma konusu (bkz. Konu 7.4 “Yapılandırma ve CMDB kalitesi metrikleri”) ilişkileri ekler; böylece neyin neye bağlı olduğunu söyleyebilirsiniz. Ortak bir yöntemleri vardır: değişiklik anında yakalamak, bağımsız kanıta karşı her iki yönde de denetlemek ve kaydı doğru tutulabilecek kadar küçük tutmak.

Son üç konu, şeylerin neye mal olduğunu ve bu maliyetin değip değmediğini betimler. Hizmet maliyetlendirmesi (bkz. Konu 7.5 “Hizmet maliyeti ve birim ekonomisi”) harcamayı hizmet başına ve birim başına maliyete çevirir; bu, maliyeti adil biçimde yüklemek için varlık ve yapılandırma kayıtlarına dayanır. Bulut maliyeti pratiği (bkz. Konu 7.6 “FinOps ve bulut maliyeti metrikleri”) aynı fikirleri harcamanın saat saat değiştiği ve etiketlerin bir ücret ile bir sahip arasındaki bağ olduğu yerde uygular. İş gerekçesi konusu (bkz. Konu 7.7 “Yatırım getirisi ve iş gerekçesi”) bunların hepsini yatırım seçimleri yapmak için kullanır ve bu seçimleri gerçekte olanlarla karşılaştırmanızı ister.

Birkaç koruma önlemi çifti izler. Envanter doğruluğu rakamı, boşluk listesi ve sahipsiz varlık payıyla birlikte okunmalıdır. Lisans kullanım oranı, lisans geri alınırken insanlar hayal kırıklığına uğramasın diye kullanıcı erişim deneyimiyle birlikte okunmalıdır. Bir maliyet ölçümü, tasarruflar daha kötü bir hizmetle satın alınmasın diye her zaman bir güvenilirlik ya da memnuniyet ölçümünün yanında durmalıdır (bkz. Konu 5.2 “SLI, SLO ve hata bütçeleri”). Bir iş gerekçesi, önceki tahminlerin sicil kaydıyla birlikte okunmalıdır.

Bu bölüm hem ileriye hem geriye bağlanır. Bölüm 6’daki fayda kanıtları (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”) iş gerekçesini besler. Bölüm 8’deki risk, denetim ve tedarikçi ölçümleri, burada anlatılan varlık ve sözleşme kayıtlarına dayanır. Bölüm 9 ise tüm bunları ayakta tutan insanlara ve kayıtları zamanla iyileştiren sürekli iyileştirme alışkanlıklarına yönelir.
