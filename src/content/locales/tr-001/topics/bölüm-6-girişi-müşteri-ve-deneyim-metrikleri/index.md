# Bölüm 6 Girişi: Müşteri ve Deneyim Metrikleri

**Müşteri ve deneyim metrikleri, bir hizmeti kullanan insanların durumunun daha iyi olup olmadığını sorar. Operasyonel ve teslimat ölçümleri bu soruyu yalnızca dolaylı olarak yanıtlayabilir.**

Bir takım her olayı hedefi içinde kapatabilir, her değişikliği zamanında yayına alabilir ve yine de kullanıcıları hayal kırıklığı içinde bırakabilir. Operasyonel sayılar hizmet kuruluşunun ne yaptığını anlatır. Deneyim sayıları ise kullanıcının ne hissettiğini ve neyi başardığını anlatır. İkisi de gereklidir, çünkü yeşil bir pano ile mutsuz bir müşteri yan yana bulunabilir ve hizmetin değer görüp görmediğine yalnızca ikincisi karar verir.

Çevik uygulama ile ITIL burada doğal olarak buluşur. Çevik uygulama, çalışan yazılımı ve müşteriyle iş birliğini ilerlemenin ölçüsü sayar ve yönünü belirlemek için sık geri bildirimden yararlanır. ITIL 4 ise değerin tüketiciye teslim edilmediğini, tüketiciyle birlikte yaratıldığını anlatır. Dolayısıyla tüketicinin deneyimi ve sonuçları, sonradan yazılan bir raporun konusu değil, hizmetin kendi parçasıdır. Deneyimi ölçmek, bu geri bildirimi bilerek toplamak, dürüstçe okumak ve önemini koruyacak kadar hızlı harekete geçmek anlamına gelir.

Deneyim verisi yanlış okunmaya da elverişlidir. Anket puanları kimin yanıt verdiğine, ne zaman sorulduğuna ve sorunun nasıl ifade edildiğine bağlıdır. Küçük örneklemler geniş aralıkta salınır ve yükselen bir puan yalnızca yanıt verenlerin değiştiğini yansıtıyor olabilir. Bu bölümdeki her ölçümü bir takım, bir hizmet veya bir yolculuk hakkında kanıt olarak okuyun, hiçbir zaman bireylerin sıralaması olarak değil. Her ölçümü bir koruma önlemiyle eşleştirin; böylece hizmeti değil anketi değiştirerek iyileştirilemesin (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

## Bu bölümdeki konular

- **6.1 Müşteri memnuniyeti metrikleri**: müşteri memnuniyeti (CSAT), net tavsiye puanı (NPS), müşteri çaba puanı (CES), anket tasarımı, yanıt yanlılığı ve örneklem büyüklüğü.
- **6.2 Deneyim düzeyi anlaşmaları**: yalnızca operasyonel hedefleri değil deneyimi de ölçmek; duygu, çaba ve yolculuk ölçümlerini kullanmak.
- **6.3 Hizmet benimsenmesi ve katalog metrikleri**: katalog kaleminin kullanımı, benimsenme ve terk etme, talep karışımı ve kataloğa bir ürün birikim listesi gibi yaklaşmak.
- **6.4 Kullanıcı ve çalışan deneyimi**: dijital çalışan deneyimi, sürtünme, BT sorunları nedeniyle kaybedilen zaman ve iç müşteri sonuçları.
- **6.5 Değer gerçekleştirme ve iş sonuçları**: hizmet çalışmasını iş sonuçlarına bağlamak, fayda takibi ve atfın sınırları.

## Bu konular birbiriyle nasıl ilişkilidir

Konu 6.1 (bkz. Konu 6.1 “Müşteri memnuniyeti metrikleri”) temel araçları sunar: anket ölçümlerini ve bunları toplamak için gereken disiplini. Ayrıca bu araçların, bölümdeki diğer tüm konular için geçerli olan sınırlarını, yani yanıt yanlılığını ve örneklem büyüklüğünü ortaya koyar. Önce onu okuyun, çünkü sonraki konular onun ölçümlerini yeniden kullanır ve uyarılarını devralır.

Konu 6.2 (bkz. Konu 6.2 “Deneyim düzeyi anlaşmaları”) bu araçları operasyonel hedefleri tamamlamak için kullanır. Bir hizmet yanıt süresi hedefini karşılayıp yine de kötü bir deneyim üretebilir; bu nedenle bir deneyim düzeyi anlaşması geleneksel hizmet düzeyi anlaşmasının yanında durur, onun yerine geçmez. Eşleşme iki yönde de işler. Operasyonel veri bir deneyim puanının neden değiştiğini açıklar, deneyim verisi ise bir operasyonel hedefin doğru şeye yönelip yönelmediğini gösterir.

Konu 6.3 ve 6.4, görüş yerine davranışa ve sürtünmeye bakar. Konu 6.3'teki benimsenme ve terk etme (bkz. Konu 6.3 “Hizmet benimsenmesi ve katalog metrikleri”) insanların gerçekte ne yaptığını gösterir; bu, bir ankette söylediklerini sınar. Konu 6.4'teki sürtünme ve kaybedilen zaman (bkz. Konu 6.4 “Kullanıcı ve çalışan deneyimi”) kötü hizmetin iç müşteriye maliyetini gösterir. Davranışsal ölçümler anket ölçümlerini nazik veya temsil gücü zayıf yanıtlara karşı korur; anketler ise yalnızca kullanım verisinin açıklayamadığı davranışı açıklar.

Konu 6.5 (bkz. Konu 6.5 “Değer gerçekleştirme ve iş sonuçları”) bölümü, bunların hiçbirinin işletmenin önemsediği bir sonucu değiştirip değiştirmediğini sorarak kapatır. En temkinli konudur, çünkü atıf zordur: bir iş sonucunu pek çok şey etkiler ve bir hizmet takımı yalnızca kanıtının desteklediği kadarını sahiplenmelidir. Bölümün geri kalanını, memnuniyetin kendi amacı için ölçülmesine karşı korur.

Bu yapıdan birkaç koruma önlemi çifti çıkar. Bir memnuniyet puanı yanıt oranı ve örneklem büyüklüğüyle birlikte okunmalıdır. Bir çaba veya duygu ölçümü, arkasındaki operasyonel verilerle birlikte okunmalıdır. Bir benimsenme rakamı terk etmeyle birlikte okunmalıdır; böylece insanların vazgeçtiği popüler bir katalog kalemi başarı sayılmaz. Önceki bölümlerdeki hızlı çözüm ölçümleri memnuniyetle birlikte okunmalıdır; böylece hız, kötü sonuçlarla satın alınmaz (bu hız ölçümlerinin kullandığı saatler için bkz. Konu 2.2 “Teslim süresi, çevrim süresi ve akış verimliliği”).

Sonraki bölümler aynı ipi sürdürür. Bölüm 7 ve 8'deki finansal ve hizmet düzeyi ölçümleri maliyeti ve taahhüdü anlatır; bu bölümdeki deneyim bakışı, maliyet ve taahhüdün kullanıcıların değer verdiği bir şeye yöneltilip yöneltilmediğinin denetimidir.
