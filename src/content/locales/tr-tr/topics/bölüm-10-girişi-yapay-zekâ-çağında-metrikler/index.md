# Bölüm 10 Girişi: Yapay Zekâ Çağında Metrikler

**Yapay zekâ çıktıyı ucuz ve akıcı hâle getirerek üretilen şey ile sahip olmaya değer olan şey arasındaki eski bağı koparır. Bu nedenle neyin kalıcı olduğunu, neyin işe yaradığını ve neyin kontrol altında kaldığını ölçün.**

Bu kitaptaki her metrik, sayılan şeyi üretmenin gerçek bir emek gerektirdiği varsayımına dayanır. Çözülen bir bilet emeği yansıtırdı. Yazılmış bir makale bilgiyi yansıtırdı. Birleştirilmiş bir değişiklik özeni yansıtırdı. Üretken yapay zekâ bu varsayımı zayıflatır. Bir yanıtı, bir makaleyi, bir testi ya da bir kod bloğunu saniyeler içinde taslak olarak yazabilir. Yazdığı şey çoğu zaman makul görünür, bazen de yanlıştır. Sayılar artar. Hizmet verilen insanların daha iyi durumda olup olmadığı ise sayıların yanıtlayamayacağı ayrı bir sorudur.

Yapay zekâ ayrıca ölçülecek yeni şeyler de ekler. Konuşmalı asistanların ve kullanıcı adına eylemde bulunan ajanların çözüm, devir ve yanlış eylemlerin zararı için ölçütlere ihtiyacı vardır. Modellerin, istemlerin ve tedarikçilerin yönetişimi kapsam, kontrol ve olay ele alma ölçütlerini gerektirir. Bu araçların yanında çalışan insanların ise becerilerinin, kavrayışlarının ve sürdürülebilir çalışma temposunun korunması gerekir. Bu bölümdeki ölçütler kitabın geri kalanından yararlanır, çünkü koruma önlemleri aynıdır: her metriği, neyi gizleyebileceğini denetleyen bir ölçütle eşleştirin, bir referans değerle karşılaştırın, insanlarla birlikte örnekleme yapın ve insanlara ilişkin verileri değerlendirmenin dışında tutun (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”).

Çevik ve ITIL çalışma biçimleri tüm bunlara karşı makul bir duruş sunar. Yapay zekânın her kullanımını küçük bir deney olarak ele alın. Beklenen faydayı belirtin, isteyen kişilerle deneyin, onsuz yapılan benzer işle karşılaştırın ve kararı kanıta göre verin. Paydaşları sürekli sürece dâhil edin, çünkü sinyal bozulduğunda bunu ilk fark edenler onlardır. Sürdürülebilir bir tempoyu hedefleyin; böylece kazanılan zaman, talepte otomatik bir artış değil, kalite ve öğrenme hakkında bir tercih olur. Motive olmuş bireyler etrafında inşa etme hedefini de unutmayın: yapay zekâ sıkıcı işi hafifletmeli ve insanların yargısına saygı göstermeli, onları izlemenin bir yolu hâline gelmemelidir.

Yapay zekâ araçlarına, ürünlerine ve kurallarına ilişkin olgular hızla değişir. Bu bölümde belirli düzenlemeler, standartlar ve araçlar hakkındaki ifadeler Ekim 2026 itibarıyla tarihlendirilmiştir ve okurun bunları yeniden denetlemesi gerekir. Ölçüm ilkeleri, tanımladıkları teknolojilerin herhangi birinden daha kalıcıdır.

## Bu bölümdeki konular

- **10.1 Hizmet yönetimi ölçümünde yapay zekâ**: yapay zekânın işe girdiği yerler, benimsemeden önceki referans değerler, karşılaştırmalar, denetlenmiş bir sonuca ulaşma süresi ve tam maliyet.
- **10.2 Yapay zekâ destekli işi ölçmek**: kalıcılık, yeniden iş, inceleme yükü, kaçan kusurlar, kavrayış ve beceriler.
- **10.3 Yapay zekâ ajanı ve sohbet botu metrikleri**: doğrulanmış çözüm, geri dönen temaslar, devirler, bir insana ulaşma süresi, yanıt doğruluğu ve ajan eylemlerinin geri alınması.
- **10.4 Metrik enflasyonu ve kalite seyrelmesi**: hacim ve hızın nasıl şiştiği, yararlılık örneklemesi, doğrulama yükü ve geri bildirim döngülerinin kırılması.
- **10.5 Yapay zekâ yönetişimi ve risk metrikleri**: kullanımlar kaydı, risk sınıfları, modeller ve istemler için değişiklik kontrolü, değerlendirme, gözetim ve olaylar.

## Bu konular birbirleriyle nasıl ilişkilidir

Temeller konusu (bkz. Konu 10.1 “Hizmet yönetimi ölçümünde yapay zekâ”) yöntemi belirler: referans değer, karşılaştırma, örnekleme ve tam maliyet. Bu yöntem bölümdeki diğer tüm konulara uygulanır. Destekli iş konusu (bkz. Konu 10.2 “Yapay zekâ destekli işi ölçmek”) bu yöntemi insanların yanlarında yapay zekâ ile yaptığı işe uygular ve neyin kalıcı olduğuna, kavrayışa ne olduğuna bakar. Sohbet botu ve ajan konusu (bkz. Konu 10.3 “Yapay zekâ ajanı ve sohbet botu metrikleri”) yöntemi doğrudan kullanıcılarla karşılaşan ya da onlar adına eylemde bulunan sistemlere uygular; burada yanlış bir yanıtın ya da eylemin bedelini başkası öder.

Enflasyon ve seyrelme (bkz. Konu 10.4 “Metrik enflasyonu ve kalite seyrelmesi”) bunların hepsinin uyarıcı eşlikçisidir. Kolay sayıların neden yükseldiğini ve onlarla neyin eşleştirilmesi gerektiğini açıklar; diğer konulardaki yararlılık denetimleriyle bağlantılıdır. Yönetişim (bkz. Konu 10.5 “Yapay zekâ yönetişimi ve risk metrikleri”) geri kalanı yerinde tutan yapıdır: neyin ölçüleceğini söyleyen kaydı, ne kadar derinlemesine ölçüleceğini söyleyen risk sınıflarını, davranışın fark edilmeden kaymasını önleyen değişiklik kontrolünü ve bir şey ters gittiğinde işleyen olay sürecini sağlar.

Birkaç koruma çifti izler. Bir hız ölçütü, denetlenmiş bir sonuca ulaşma süresi ve doğrulama yüküyle birlikte okunmalıdır. Bir kapsama ya da yönlendirme (deflection) rakamı, doğrulanmış çözüm ve geri dönen temaslarla birlikte okunmalıdır. Kayıtlı kullanım sayısı bağımsız keşifle karşılaştırılarak okunmalıdır. Bir yapay zekâ aracının benimsenme rakamı betimleyici kabul edilmelidir; ağırlığı karşılaştırmaya karşı elde edilen sonuçlar taşır.

Bu bölüm daha önceki bölümlere bağlanır: Bölüm 2'nin inceleme ve akış ölçütleri, Bölüm 3'ün bilgi ve self servis ölçütleri, Bölüm 8'in güvenlik ve risk ölçütleri ve Bölüm 9'un insan ölçütleri. Ardından, metrik programının kendisini kurmayı konu alan son içerik bölümüne geçer; çünkü ölçümü özen göstermeden devreye alan bir program, bu bölümün anlattığı çarpıklıklara uğrar.
