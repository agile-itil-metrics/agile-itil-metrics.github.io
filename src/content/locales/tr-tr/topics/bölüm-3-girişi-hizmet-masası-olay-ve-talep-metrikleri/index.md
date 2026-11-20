# Bölüm 3 Girişi: Hizmet Masası, Olay ve Talep Metrikleri

**Hizmet masası, olay ve talep metrikleri, destek ve hizmeti geri getirme çalışmasının hizmetlerinizi kullanan insanlar için ne kadar iyi işlediğini gösterir. Böylece bir raporun görüntüsünü değil, yardım alma deneyimini iyileştirebilirsiniz.**

Bu, kullanıcıların hizmetle tanıştığı bölümdür. Oturum açamayan bir kişi, siparişi başarısız olan bir müşteri ve yeni bir dizüstü bilgisayara ihtiyacı olan bir çalışan, kuruma hizmet masası, bir izleme uyarısı, bir self servis portalı ya da bir sohbet mesajı aracılığıyla ulaşır. Bundan sonra olanlar, hizmetin tamamını nasıl değerlendirecekleri konusunda belirleyicidir. Bu alandaki metrikler söz konusu deneyimi iki yönden anlatır: bir şey bozulduğunda kurumun hizmeti ne kadar hızlı ve ne kadar iyi geri getirdiği ve insanların yaptığı rutin talepleri ne kadar güvenilir biçimde karşıladığı.

ITIL 4'te olay yönetimi ve hizmet talebi yönetimi ayrı uygulamalardır ve hizmet masası her ikisi için de iletişim noktasıdır. Geliştirdiğini kendisi işleten çevik takımlar, aynı işi çoğu zaman nöbet rotasyonları ve ortak kuyruklar üzerinden yürütür. Hangi yol izlenirse izlensin ölçüm sorunları benzerdir. Sayılar, işin nasıl kategorize edildiğine bağlıdır, süreler saatlerin nerede başlayıp nerede durduğuna bağlıdır ve ortalamalar, kullanıcıların hatırladığı uzun gecikmeleri gizler. Bölüm 1'de ortaya konan istatistik alışkanlıkları bölümün tamamında geçerlidir (bkz. Konu 1.6 “Hizmet metrikleri için istatistik okuryazarlığı”).

Destek metriklerini manipüle etmek de alışılmadık ölçüde kolaydır. Bir masa, talepleri erken kapatarak daha hızlı kapatabilir ve arayanları acele ettirerek ele alma süresini düşürebilir. Bir takım, olayları talep olarak yeniden sınıflandırarak olay sayılarını azaltabilir. Bu nedenle bu bölümdeki her konu, bir metriğin ödüllendirdiği davranışı, gizlediği davranışı ve ikisi arasındaki farkı yakalayan koruma önlemini adlandırır (bkz. Konu 1.2 “Goodhart yasası ve metriklerin psikolojisi”). Buradaki her ölçüm bir takımı, bir hizmeti ya da bir sistemi tanımlar. Hiçbiri tek bir temsilciyi ya da müdahale edeni sıralamaz.

## Bu bölümdeki konular

- **3.1 Hizmet masası metrikleri**: iletişim hacmi, ilk temasta çözüm, terk ve ele alma süresi; her birinin neyi ödüllendirdiği ve neyi gizlediği.
- **3.2 Olay hacmi ve önceliği**: olay sayıları, kategoriler, etki ve aciliyet, öncelik karışımı, tekrarlayan olaylar ve hacmi kullanıma göre normalleştirme.
- **3.3 Olaya yanıt ve çözüm süresi**: tespit etme, kabul etme, yanıt verme ve çözme süresi; ortalama süre ölçümleri ve istatistiksel sorunları; bunun yerine yüzdelik dilimler.
- **3.4 Büyük olay metrikleri**: sıklık, süre, müşteri etkisi, iletişimin zamanlaması ve eylemlerin sonuna kadar takibi.
- **3.5 Hizmet talebi karşılama metrikleri**: karşılama süresi, birikim, katalog kalemine göre talep hacmi ve otomasyon payı.
- **3.6 Bilgi yönetimi metrikleri**: makale kullanımı, çözümde yeniden kullanım, bağlantı oranı, güncellik ve Bilgi Merkezli Hizmet (Knowledge-Centered Service, KCS) göstergeleri.
- **3.7 Self servis ve otomasyon metrikleri**: yönlendirmeyle önleme (deflection), self servis başarısı, otomasyon kapsamı ve hacim ile karmaşıklık üzerindeki sola kaydırma (shift-left) etkisi.

## Bu konular birbiriyle nasıl ilişkilidir

İlk dört konu bir aksaklığın yaşam döngüsünü izler. İletişimler masaya ulaşır; bu, Konu 3.1'in ilgi alanıdır (bkz. Konu 3.1 “Hizmet masası metrikleri”). Bir arızayı bildirenler olay olur ve Konu 3.2 (bkz. Konu 3.2 “Olay hacmi ve önceliği”) bunları sayar ve etki ile aciliyete göre sınıflandırır. Ardından Konu 3.3 (bkz. Konu 3.3 “Olaya yanıt ve çözüm süresi”) her aşamanın ne kadar sürdüğünü ölçer. Ciddi zarara yol açan az sayıdaki olay, Konu 3.4'te ayrıca ele alınır (bkz. Konu 3.4 “Büyük olay metrikleri”), çünkü nadir olmaları ve büyüklükleri sıradan ortalamaları yanıltıcı kılar.

Bu ölçümlerin birçoğunun dürüst kalması için bir eşe ihtiyacı vardır. Konu 3.1'deki ele alma süresi gibi masadaki hız, ilk temasta çözümün ve bunun doğurduğu tekrar eden iletişimlerin yanında okunmalıdır. Böylece hızlı görüşmeler çözülmüş sorunlarla karıştırılmaz. Konu 3.3'teki çözüm süresi, Konu 3.2'deki tekrarlayan olaylarla birlikte değerlendirilmelidir, çünkü bir hafta sonra yeniden başarısız olan hızlı bir geri getirme, kullanıcıya yardımcı olmamıştır. Konu 3.2'deki öncelik karışımı, her süre ölçümüne bağlam kazandırır: ortanca çözüm süresindeki artış, takımın yanıt verme biçimindeki bir değişikliği değil, gelen olayların türündeki bir değişikliği yansıtıyor olabilir.

Talepler ve olaylar yan yana ölçülmeli, ancak asla birleştirilmemelidir. Konu 3.5 (bkz. Konu 3.5 “Hizmet talebi karşılama metrikleri”), karşılamanın öngörülebilir, tekrarlanabilir işini ele alır; burada amaç, talep başına düzenli ve azalan bir emektir. Olay işi öngörülemezdir ve amacı hızlı ve kalıcı bir geri getirmedir. İkisini tek bir kuyruk ortalamasında birleştirmek her ikisinin sorunlarını da gizler. Bölüm 2'deki akış ölçümleri, iki akışın birbirini aç bırakmasını önleyen ortak saatleri ve devam eden iş sınırlarını sağlar (bkz. Konu 2.9 “Operasyonel iş ve plansız iş”).

Son iki konu, diğerlerinin ölçtüğü hacim üzerinde etkili olur. Konu 3.6'daki bilgi (bkz. Konu 3.6 “Bilgi yönetimi metrikleri”), bir önceki kişinin öğrendiğini sonrakinin yeniden kullanmasına izin vererek çözümü kısaltır ve Konu 3.7'de ölçülen self servis içeriğini besler (bkz. Konu 3.7 “Self servis ve otomasyon metrikleri”). Yönlendirmeyle önleme ve otomasyon, masaya ulaşan basit iletişimleri azaltır; bu da geriye kalan kişilere daha zor bir iş karışımı bırakır. Bu kayma beklenmelidir ve sonuç olarak ele alma süresi yükselebilir. Bu nedenle bir performans düşüşü olarak değil, bir karışım değişikliği olarak okunmalıdır.

Tekrarlayan olaylar, Bölüm 4'te sorun yönetimine girdi olur.
