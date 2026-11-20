# Llythrennedd ystadegol ar gyfer metrigau gwasanaeth

**Mae data tocynnau a llif yn gam, yn sypiog ac yn aml yn denau, felly adroddwch ganolrifau a chanraddau uchel yn hytrach na chyfartaleddau, dywedwch faint o eitemau sydd y tu ôl i bob cyfradd, a gwahanwch amrywiad arferol oddi wrth newid go iawn cyn i unrhyw un ymateb.**

## Crynodeb a chymhelliant

Mae'r rhan fwyaf o fetrigau gwasanaeth yn cyrraedd fel un rhif ar ddangosfwrdd: amser datrys cyfartalog, canran y digwyddiadau a ddatryswyd o fewn y nod, tocynnau a gaewyd yr wythnos hon. Mae un rhif yn teimlo'n fanwl gywir. Fel arfer mae'n grynodeb cywasgedig o gasgliad anniben o ddigwyddiadau, ac mae'r cywasgu'n penderfynu beth y mae'r darllenydd yn ei weld. Llythrennedd ystadegol, at ddibenion y llyfr hwn, yw'r set fach o arferion sy'n cadw'r crynodeb yn onest: dewis crynodeb sy'n gweddu i siâp y data, gwybod faint o ddata sydd y tu ôl iddo, a gwahaniaethu newid go iawn oddi wrth sŵn.

Siâp data gwasanaeth yw'r broblem gyntaf. Mae mesurau amser megis amser datrys, amser cylch ac amser aros wedi'u rhwymo wrth sero ac mae ganddynt gynffon hir ar y dde. Mae'r rhan fwyaf o eitemau'n gorffen yn gyflym, ac mae ychydig yn cymryd amser hir iawn. Mae data fel hyn yn [gam](https://en.wikipedia.org/wiki/Skewness), ac mae'r cymedr rhifyddol yn cael ei dynnu tuag at y gynffon, felly gall un tocyn sownd symud y cyfartaledd yn fwy na chant o rai arferol. Mae'r [canolrif](https://en.wikipedia.org/wiki/Median), y gwerth canol pan ddidolir yr eitemau, yn cael ei effeithio'n llawer llai. Mae [canradd](https://en.wikipedia.org/wiki/Percentile) yn ei gyffredinoli: yr 85fed canradd yw'r gwerth y mae 85 y cant o'r eitemau yn gorffen o'i fewn. Mae hyd o'r fath yn aml yn cael ei fodelu gyda [dosbarthiad log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution), lle mae logarithm y gwerth yn gymesur. Y wers yw bod "nodweddiadol" a "chyfartaledd" yn wahanol ar gyfer data gwyrgam.

Maint y sampl yw'r ail broblem. Mae tîm sy'n datrys 12 digwyddiad blaenoriaeth 1 mewn chwarter ac yn adrodd "83 y cant o fewn y nod" yn disgrifio 10 o 12. Byddai un methiant arall yn symud y ffigur wyth pwynt. Mae'r datganiad gonest yn cynnwys y cyfrif, ac yn aml ystod. Mae [cyfwng hyder](https://en.wikipedia.org/wiki/Confidence_interval) yn ystod a gyfrifir o'r data sy'n mynegi pa mor bell y gallai'r gwir werth eistedd yn gredadwy o'r un a arsylwyd. Mae cyfyngau'n llydan ar gyfer samplau bach ac yn gul ar gyfer rhai mawr, sef y neges gywir ar gyfer chwarter â 12 digwyddiad.

Amrywiad yw'r drydedd broblem. Mae pob proses yn cynhyrchu rhifau sy'n siglo o wythnos i wythnos heb i ddim newid. Gwahanodd Walter Shewhart, yn gweithio ar ansawdd gweithgynhyrchu yn y 1920au, y siglo arferol hwn oddi wrth signalau sy'n haeddu ymchwiliad, a rhoddodd y [siart rheoli](https://en.wikipedia.org/wiki/Control_chart) inni. Gelwir cymhwyso siartiau fel hyn at broses yn [rheoli prosesau ystadegol](https://en.wikipedia.org/wiki/Statistical_process_control). Rhan o'r camgymeriad olaf hwnnw yw [atchweliad tuag at y cymedr](https://en.wikipedia.org/wiki/Regression_toward_the_mean): mae gwerth eithafol yn tueddu i gael ei ddilyn gan un llai eithafol, felly mae'r wythnos ar ôl wythnos ofnadwy yn edrych fel adferiad p'un a wnaeth unrhyw un unrhyw beth ai peidio.

Mae arfer llif ystwyth, megis defnydd Canllaw Kanban o ganraddau amser cylch ac oedran eitem waith, eisoes yn gofyn am ddosbarthiadau a rhagolygon a fynegir fel tebygolrwydd (gweler pwnc 2.1, Mesurau llif). Yn ITIL 4, mae'r arfer mesur ac adrodd a'r arfer gwelliant parhaus ill dau yn dibynnu ar fesurau sy'n golygu'r hyn y maent yn ymddangos eu bod yn ei olygu, ac mae rheoli lefelau gwasanaeth yn dibynnu ar dargedau a osodir yn erbyn amrywiad realistig. Llythrennedd ystadegol yw'r haen a rennir o dan y ddau. Mae hefyd yn cefnogi'r rheilen warchod ym mhwnc 1.2, Cyfraith Goodhart a seicoleg metrigau: mae gan dîm sy'n dangos y dosbarthiad cyfan lai o leoedd i guddio cyfartaledd a drinnir.

Mae amrywiad achos cyffredin wedi'i adeiladu i mewn i broses, ac mae amrywiad achos arbennig yn dod o rywbeth penodol a newidiodd neu a aeth o'i le. Mae cytundeb lefel gwasanaeth (SLA) yn ymrwymiad dogfenedig i gwsmer, ac mae amcan lefel gwasanaeth (SLO) yn nod ar gyfer mesur.

## Egwyddorion allweddol

- **Cydweddwch y crynodeb â'r siâp.** Defnyddiwch ganolrifau a chanraddau ar gyfer hyd, a dangoswch y dosbarthiad llawn pan fydd y penderfyniad yn bwysig. Cadwch y cymedr ar gyfer data sy'n fras gymesur, neu ar gyfer cyfansymiau megis cost.
- **Mae pob cyfradd yn cario ei chyfrif.** Mae canran heb y rhifiadur a'r enwadur yn honiad heb dystiolaeth ynghlwm. O dan isafswm cyfrif a nodir, dangoswch yr eitemau crai yn lle cyfradd.
- **Nid yw amrywiad arferol yn newyddion.** Gwybod ystod arferol mesur cyn ymateb. Ymatebwch i signalau, nid i bob symudiad.
- **Mae ansicrwydd yn rhan o'r ateb.** Mynegwch ragolygon fel tebygolrwydd ("mae 85 y cant o eitemau yn gorffen o fewn 9 diwrnod") ac amcangyfrifon fel ystodau, a gwrthsefyllwch gywirdeb ffug.
- **Dangoswch ddosbarthiadau i'r tîm sy'n berchen ar y gwaith.** Mae eitemau crai a histogramau yn gwneud achosion anarferol yn weladwy, ac yn gwneud trin tawel yn anoddach.
- **Mae cydberthyniad, dethol ac amseru yn esbonio llawer o "welliannau."** Gofynnwch beth arall a newidiodd, pwy a adawyd allan o'r data, ac a oedd y man cychwyn yn anarferol o wael.
- **Cadwch yr ystadegau'n gymesur.** Mae tîm angen llond llaw o dechnegau a ddefnyddir yn gyson, nid cwrs ystadegau. Esboniwch bob siart mewn geiriau plaen.

## Diffiniadau metrigau

Mae'r metrigau isod yn disgrifio ansawdd ystadegol arfer metrigau a dosbarthiad gwaith gwasanaeth. Mae mesurau amser yn defnyddio'r clociau a nodir ym mhob rhes, ac mae'r diffiniadau i fod i gael eu hailddefnyddio gan y pynciau sy'n dilyn (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau, a phwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif).

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Canolrif amser datrys | Amser datrys canol y digwyddiadau a ddatryswyd yn y cyfnod | 50fed canradd o (stamp amser datrys llai stamp amser creu) dros ddigwyddiadau a ddatryswyd yn y cyfnod; mae'r cloc yn dechrau wrth greu'r tocyn ac yn stopio wrth ddatrys; adroddir oedi ar wahân, nid eu tynnu; eithrir tocynnau wedi'u canslo a dyblyg | oriau neu ddiwrnodau | Hanes statws offeryn ITSM | Rheoli digwyddiadau; mesur ac adrodd | Canolrif amser cylch | Wythnosol neu fisol |
| Amser datrys canradd uchel | Yr amser y datrysir y rhan fwyaf o ddigwyddiadau o'i fewn, gyda'r ganradd wedi'i henwi | 85fed (neu 95fed) canradd o'r un amser a aeth heibio ag uchod; cyfrifir dim ond os datryswyd o leiaf 20 eitem, fel arall rhestrir yr eitemau crai | oriau neu ddiwrnodau | Hanes statws offeryn ITSM | Rheoli digwyddiadau; rheoli lefelau gwasanaeth | Rhagolwg canradd amser cylch | Wythnosol neu fisol |
| Oedran yr eitem agored hynaf | Oedran yr eitem hynaf sy'n dal ar agor, ynghyd â chyfrif eitemau sy'n hŷn na'r ganradd uchel | nawr llai stamp amser creu ar gyfer eitemau agored, dim oedi wedi'i dynnu; yn cyfrif pob eitem agored yn ciw'r gwasanaeth gan gynnwys y rhai sy'n aros am y cwsmer | diwrnodau | Offeryn ITSM neu olrheinydd materion | Rheoli digwyddiadau; rheoli problemau | Oedran eitem waith | Wythnosol |
| Cwmpas adrodd cyfraddau | Cyfran y cyfraddau a adroddir sy'n dangos y rhifiadur, yr enwadur a gwiriad isafswm cyfrif | cyfraddau a adroddwyd gyda chyfrifon a baner sampl / cyfraddau a adroddwyd; yn cyfrif dim ond cyfraddau a gyhoeddwyd yn mhecyn adolygu'r cyfnod | canran | Cofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau) | Mesur ac adrodd | Cytundebau gweithio | Chwarterol |
| Cyfradd signalau siart rheoli | Cyfran y pwyntiau ar siart rheoli mesur sy'n arwyddo amrywiad achos arbennig o dan reolau ysgrifenedig y tîm | pwyntiau a nodwyd o dan y rheolau / pwyntiau a blotiwyd, dros y 20 pwynt olaf neu fwy; gosodir y rheolau ymlaen llaw a'u logio | canran | Offeryn siart rheoli neu daenlen | Gwelliant parhaus | Archwiliad ôl-sylliad o'r broses | Misol |
| Lled y cyfwng | Lled yr ystod ansicrwydd a nodir ar gyfradd bennawd | terfyn uchaf llai terfyn isaf y cyfwng, gan ddefnyddio'r dull a enwir yn y gofrestr, ar gyfer cyfradd bennawd y cyfnod | pwyntiau canran | Wedi'i gyfrifo o gyfrifon ITSM | Rheoli lefelau gwasanaeth | Ystod rhagolwg wrth gynllunio | Misol |

Lle mae contract yn enwi cymedr, adroddwch y ffigur cytundebol a dangoswch y canolrif a'r ganradd wrth ei ymyl.

## Argymhellion

### Crynhowch ddata amser yn onest

**1. Diofyn i'r canolrif ac un ganradd uchel a enwir.** Ar gyfer amser datrys, amser cylch ac amser cyflawni, cyhoeddwch y canolrif a'r 85fed neu'r 95fed ganradd gyda'i gilydd, ac ysgrifennwch y ganradd i enw'r metrig. Mae'r canolrif yn dweud beth sy'n nodweddiadol, ac mae'r ganradd uchel yn dweud beth y gellir yn rhesymol ei addo i gwsmer. Os oes rhaid i chi ddewis un rhif ar gyfer ymrwymiad, dewiswch y ganradd.

**2. Dangoswch y siâp yn ogystal â'r crynodeb.** Mae histogram neu graff gwasgariad o amser datrys yn ôl dyddiad cau yn dangos clystyrau, cynffonnau hir a newidiadau sydyn na all unrhyw grynodeb eu dangos. Pan fydd y llun a'r rhif yn anghytuno, credwch y llun ac ymchwiliwch i'r rhif.

**3. Ychwanegwch oedran yr eitem agored hynaf.** Mae canraddau gwaith gorffenedig yn edrych yn ôl ac yn anwybyddu popeth sy'n dal yn sownd. Adroddwch yr eitem agored hynaf a faint o eitemau agored sydd eisoes yn hŷn na'ch canradd uchel (gweler pwnc 2.1, Mesurau llif). Dyma'r cywirydd mwyaf defnyddiol ar gyfer cyfartaleddau sy'n gwella am fod eitemau caled yn cael eu gadael i heneiddio.

### Parchwch samplau bach ac ansicrwydd

**4. Cyhoeddwch y cyfrif gyda phob cyfradd.** Ysgrifennwch "10 o 12 wedi'u datrys o fewn y nod" yn hytrach nag "83 y cant." Ychwanegwch reol bod cyfraddau a seilir ar lai na nifer penodol o eitemau yn cael eu dangos fel cyfrifon neu fel yr eitemau sylfaenol. Barn yw'r trothwy: ysgrifennwch ef, adolygwch ef, a'i gymhwyso ym mhobman.

**5. Defnyddiwch gyfyngau ar gyfer cyfraddau pennawd a rhagolygon.** Ar gyfer cyfrannedd megis cyfran y newidiadau sy'n methu, cyfrifwch gyfwng hyder gyda dull y mae eich tîm yn cytuno arno a nodwch y dull yn y gofrestr. Ar gyfer rhagolygon cyflawni, mae ystod yn seiliedig ar sampl (er enghraifft, "yn debygol rhwng 8 a 14 eitem yr wythnos") yn dweud mwy wrth gynllunwyr nag un ffigur trwybwn. Os yw'r cyfwng yn rhy eang i hysbysu penderfyniad, dywedwch hynny.

### Gwahaniaethwch signal oddi wrth sŵn

**6. Tynnwch siartiau rheoli ar gyfer y mesurau y gweithredwch arnynt.** Mae siart unigolion syml yn plotio pob pwynt mewn trefn amser gyda llinell ganol a therfynau a gyfrifir o'r data, ac yn nodi pwyntiau y tu allan i'r terfynau neu rediadau ar un ochr i'r canol. Dechreuwch â chanolrif amser datrys wythnosol a chyfaint wythnosol. Ysgrifennwch y rheolau signal unwaith (er enghraifft, pwynt tu hwnt i'r terfynau, neu rediad o wyth ar un ochr) a'u cadw'n sefydlog, fel nad yw'r tîm yn addasu'r rheolau nes bod y siart yn cytuno â'i deimladau.

**7. Gweithredwch ar signalau a gadewch amrywiad achos cyffredin yn llonydd.** Pan fo pwynt y tu mewn i'r terfynau, gwrthsefyllwch esboniad amdano; y broses yn ymddwyn fel y mae fel arfer ydyw. Pan fydd signal yn ymddangos, gofynnwch beth a newidiodd yr wythnos honno: rhyddhad, bwlch staffio, toriad cyflenwr, categori newydd. Os yw'r broses yn sefydlog ond yn anfoddhaol, newid i'r system yw'r gwelliant, nid sgwrs â phwy bynnag a gafodd yr wythnos goch.

**8. Disgwyliwch atchweliad tuag at y cymedr ar ôl cyfnod eithafol.** Os lansiwch fenter ym mis gwaethaf y flwyddyn, bydd rhywfaint o welliant yn dilyn ar hap. Cymharwch yn erbyn llinell sylfaen hirach, yn erbyn gwasanaeth tebyg na newidiodd, neu yn erbyn y terfynau rheoli, cyn rhoi clod i'r fenter. Pâr cyn-ac-ar-ôl o ddau bwynt yw'r ffurf wannaf o dystiolaeth.

### Rhesymwch yn ofalus ynghylch achos a dethol

**9. Gofynnwch beth sydd ar goll o'r data.** Daw ymatebion arolwg gan bobl a ddewisodd ateb. Mae tocynnau caeedig yn eithrio'r rhai sy'n dal ar agor. Cyn dod i gasgliad, rhestrwch pwy neu beth sy'n absennol a sut y gallai hynny ogwyddo'r canlyniad.

**10. Newidiwch ddiffiniadau'n fwriadol, a'u nodi ar y siart.** Mae model statws newydd, matrics blaenoriaeth newydd, neu restr categorïau newydd yn newid y data heb newid y gwaith. Anodwch bob newid ar y siart ac ailgychwynnwch y terfynau rheoli ar ei ôl (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Canolrif amser datrys | Cau tocynnau cyflym yn gyntaf a gadael rhai caled ar agor; hollti tocyn yn sawl un hawdd; oedi'r cloc mewn cyflwr aros-am-gwsmer | Amser datrys canradd uchel ac oedran yr eitem agored hynaf; cyfran yr amser mewn cyflyrau oedi; cyfradd tocynnau cysylltiedig |
| Amser datrys canradd uchel | Dewis canradd sy'n gwenieithu'r canlyniad, neu ei newid rhwng adroddiadau; eithrio achosion hir fel "allanolion" neu eu hail-ddosbarthu | Canradd wedi'i gosod yn y gofrestr; rhestr o eitemau a eithrir gyda rhesymau; oedran yr eitem agored hynaf |
| Oedran yr eitem agored hynaf | Cau neu uno'r eitem hynaf heb ei datrys; ei symud i giw neu gategori gwahanol | Cyfradd ailagor; archwiliad sampl o'r eitemau caeedig hynaf; cyfrif trosglwyddo ciwiau |
| Cwmpas adrodd cyfraddau | Atodi cyfrif mewn print mân tra bod y penawdau'n dal i arwain â'r ganran; gosod yr isafswm cyfrif mor isel fel na chaiff ei sbarduno byth | Adolygu'r dangosfwrdd gwirioneddol, nid y gofrestr; adolygu'r isafswm cyfrif gyda lled y cyfwng |
| Cyfradd signalau siart rheoli | Ehangu'r terfynau, ychwanegu rheolau, neu ailgychwyn y llinell sylfaen fel bod signalau'n diflannu; symud pwyntiau drwy newid y mesur | Rheolau a therfynau wedi'u storio yn y gofrestr gyda hanes newidiadau; cymharu yn erbyn yr histogram crai |
| Lled y cyfwng | Dewis dull neu ffenestr sy'n cynhyrchu ystod gul; cyfuno gwasanaethau annhebyg i chwyddo'r sampl | Dull wedi'i enwi yn y gofrestr; dadansoddiad fesul gwasanaeth ar gael ar gais; cymharu canlyniadau cyfun a heb eu cyfuno |

Mae darlleniad iach yn dangos canolrifau a chanraddau sy'n symud i'r un cyfeiriad â phrofiad defnyddwyr, rhestr fer o hen eitemau sy'n crebachu heb gael eu hail-ddosbarthu'n dawel, a chyfraddau sy'n ymddangos gyda'u cyfrifon. Dylai cyfradd signalau'r siart rheoli fod yn isel ac nid yn sero: efallai na all siart sydd byth yn arwyddo wneud hynny, ac mae un sydd bob amser yn arwyddo yn adlewyrchu proses ansefydlog neu reolau a ddewiswyd yn wael.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Cymedr amser datrys | Syml, yn cyfateb i lawer o gontractau, yn hawdd i'w gyfanswm | Wedi'i ddominyddu gan y gynffon; yn cuddio'r hyn y mae cwsmeriaid yn ei brofi fel arfer |
| Canolrif ynghyd â chanradd uchel | Gwrthsefyll allanolion; yn cefnogi addewidion i gwsmeriaid | Angen ychydig o esboniad; mae angen digon o eitemau ar ganraddau i fod yn sefydlog |
| Cyfraddau crai heb gyfrifon | Cryno a chyfarwydd | Yn cuddio samplau bach ac yn gwahodd gor-ddarllen |
| Cyfraddau gyda chyfrifon a chyfyngau | Yn onest am ansicrwydd; yn digalonni gorymateb | Yn edrych yn llai pendant; mae angen cytuno ar ddulliau cyfwng |
| Siartiau rheoli | Gwahanu signal oddi wrth sŵn; arwain pryd i weithredu | Angen digon o bwyntiau a diffiniadau sefydlog; gellir camddarllen neu drin terfynau |
| Cymhariaeth cyn-ac-ar-ôl | Cyflym ac yn hawdd ei chyfleu | Tueddol i atchweliad i'r cymedr ac i newidiadau cyd-ddigwydd |

Ar gyfer gwasanaeth ag ychydig o ddigwyddiadau y flwyddyn, nid oes unrhyw ystadegyn yn sefydlog, a'r dull cywir yw darllen pob digwyddiad. Ar gyfer desg cyfaint uchel, mae mesurau sy'n ymwybodol o ddosbarthiad yn rhad ac yn amlwg yn well. Dewiswch yn ôl cyfaint ac yn ôl y fantol yn y penderfyniad.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa rai o rifau ein dangosfwrdd presennol sy'n gyfartaledd o rywbeth gwyrgam, a beth fyddai'r canolrif a'r 95fed ganradd yn ei ddangos?**
Dewiswch y mesur amser a wylir fwyaf a chyfrifwch y tri ar yr un set o eitemau cyn y cyfarfod. Gofynnwch a yw'r stori y mae'r cyfartaledd yn ei hadrodd yn cyfateb i'r hyn y mae defnyddwyr yn ei ddweud. Caewch drwy gytuno pa grynodeb sy'n dod yn bennawd a ble bydd y lleill yn ymddangos.

**2. Faint o eitemau sydd y tu ôl i'n canran a ddyfynnir amlaf, ac a fyddem yn dal i'w dyfynnu pe baem yn ysgrifennu'r cyfrifon?**
Rhestrwch y tair canran y mae'r arweinyddiaeth yn eu darllen fwyaf. Wrth ymyl pob un, ysgrifennwch y rhifiadur a'r enwadur ar gyfer y cyfnod diwethaf. Gofynnwch beth fyddai un llwyddiant neu fethiant ychwanegol yn ei wneud i'r ffigur. Cytunwch ar isafswm cyfrif y mae'r tîm yn dangos yr eitemau yn lle cyfradd oddi tano.

**3. Pryd y gwnaethom ddiwethaf glodfori menter am welliant, a beth arall oedd yn wir ar y pryd?**
Dewiswch stori lwyddiant ddiweddar. Gofynnwch pryd roedd y mesur ar ei waethaf, sut mae'r hanes hirach yn edrych, ac a wellodd gwasanaeth cymharol hefyd. Cadwch y naws yn chwilfrydig.

**4. Beth yw ystod arferol ein mesurau allweddol, a phwy fyddai'n gallu dweud bod wythnos benodol yn anarferol?**
Plotiwch y 20 gwerth wythnosol olaf neu fwy ar gyfer un mesur a thynnwch y canol a'r terfynau, neu eu cyfrifo'n fras. Gofynnwch pa wythnosau yr ymatebodd y tîm iddynt a oedd y tu mewn i'r ystod. Cytunwch pwy sy'n berchen ar y siart a ble mae'r rheolau signal wedi'u hysgrifennu.

**5. Pwy neu beth sydd ar goll o'n data?**
Rhestrwch ffynonellau'r mesur: tocynnau caeedig, ymatebion arolwg, gwasanaethau a fonitrir, offer â stampiau amser. Ar gyfer pob un, gofynnwch pwy sy'n cael ei eithrio a pham. Cipiwch bob bwlch fel atgyweiriad neu rybudd.

**6. Sut fydden ni'n esbonio ystod eang neu "nid ydym yn gwybod eto" i'r arweinyddiaeth heb iddo swnio fel esgus?**
Ymarferwch y geiriad ar enghraifft go iawn: "Rhwng 70 a 95 y cant, ar 12 digwyddiad; disgwyliwn gulhau hyn ar ôl y chwarter nesaf." Gofynnwch beth sydd ei angen ar y gynulleidfa i benderfynu ac a yw'r ystod yn newid y penderfyniad. Ysgrifennwch sgript fer yn y cyfarfod.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n defnyddio amser cylch a thrwybwn i ragweld, ac maent yn elwa fwyaf o ragolygon ar sail canraddau yn hytrach na chyfartaleddau (gweler pwnc 2.1, Mesurau llif). Mae rhagolwg a ddatganir fel ystod gyda thebygolrwydd yn haws ei amddiffyn na dyddiad. Gwrthsefyllwch ddarllen newid un cyfnod fel tuedd (gweler pwnc 2.5, Metrigau rhagweld a chynllunio cyflawni).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau'n berchen ar ddata'r tocynnau a chlociau'r digwyddiadau, felly nhw sydd yn y sefyllfa orau i gyhoeddi canolrifau, canraddau a'r eitem agored hynaf, ac i esbonio'r rheolau oedi. Dylent siartio cyfaint wythnosol ac amser datrys gyda therfynau rheoli fel y gwahaniaethir symudiad go iawn, megis rhyddhad diffygiol, oddi wrth wythnos wael. Pan fo gan wasanaeth ychydig o ddigwyddiadau, dylent adolygu pob un yn hytrach na chyfrifo cyfraddau (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gofyn y cwestiynau sy'n llunio'r hyn y mae timau'n ei ddangos. Mae gofyn "pam y cododd hwn?" am bob siglen yn hyfforddi'r sefydliad i esbonio sŵn ac i'w guddio. Dylai arweinwyr ofyn a yw symudiad y tu mewn i'r ystod arferol, faint o eitemau sydd y tu ôl i ffigur, a beth sydd wedi newid yn y broses. Gall cyrff llywodraethu fynnu cyfrifon ar gyfraddau pennawd.

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn profi achosion unigol, nid cyfartaleddau. Maent yn cofio'r un cais a gymerodd bum wythnos, ac nid yw cyfartaledd o ddau ddiwrnod yn atgyweirio'r cof hwnnw. Mae ymrwymiadau canradd ("naw o bob deg cais o fewn tri diwrnod gwaith") yn cyd-fynd yn well â model meddyliol y cwsmer nag amseroedd cymedrig. Dylid dangos canlyniadau arolwg gyda chyfrifon ymateb, a dylid darllen sylwadau agored ochr yn ochr â'r rhifau (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae gan fanwerthwr ar-lein o faint canolig ddesg gwasanaeth a thîm gweithrediadau sy'n cefnogi ei siop we. Mae'r ffigurau isod yn enghreifftiol.

Mae'r arweinyddiaeth yn gweld pennawd misol: "disgynnodd amser datrys digwyddiadau cyfartalog o 9.1 awr i 7.4 awr." Gofynnir i'r arweinydd gweithrediadau ei gadarnhau a chyflwyno'r cynllun ar gyfer y nod nesaf, 6 awr. Cyn cytuno, mae'n gofyn i'r dadansoddwr dynnu'r eitemau sylfaenol a'u plotio. O'r 240 digwyddiad yn y mis (enghreifftiol), y canolrif yw 2.5 awr, yr 85fed ganradd yw 14 awr, ac mae 9 digwyddiad yn hŷn na 5 diwrnod ac yn dal ar agor. Y mis cynt, y canolrif oedd 2.6 awr. Disgynnodd y cyfartaledd oherwydd bod tri digwyddiad hir iawn o'r mis blaenorol, un ohonynt yn 11 diwrnod oed, wedi digwydd datrys yn gynharach yn y cyfnod, ac oherwydd bod swp o docynnau ailosod cyfrinair wedi'u hail-gategoreiddio i fath cais sy'n cau'n gyflym.

Mae'r tîm yn siartio'r canolrif wythnosol am y 26 wythnos diwethaf. Mae'r llinell ganol yn eistedd ger 2.6 awr, ac mae pob pwynt o'r ddau fis diwethaf y tu mewn i'r terfynau. Nid signal yw'r gostyngiad pennawd. Newidiodd yr ail-gategoreiddio yn yr ail wythnos y diffiniad hanner ffordd drwy'r siart, felly mae'r tîm yn ei nodi ac yn ailgychwyn y terfynau o'r pwynt hwnnw.

Maent yn penderfynu ar dri newid. Bydd yr adroddiad misol yn dangos y canolrif, yr 85fed ganradd a'r eitem agored hynaf, gyda nifer y digwyddiadau y tu ôl i bob un. Caiff y nod cyfartaledd 6 awr arfaethedig ei ddisodli gan sgwrs am amcan canradd, i'w osod ar ôl chwarter o ddata o dan y diffiniad newydd. Bydd y tîm hefyd yn rhestru'r 9 hen ddigwyddiad gyda pherchennog a cham nesaf ar gyfer pob un.

Daw'r risg chwarae'r system y maent yn ei dal ar yr adolygiad nesaf. Mae rheolwr yn cynnig cau'r 9 digwyddiad hynaf fel "ddim yn atgynhyrchadwy mwyach" i wneud i ffigur yr eitem hynaf edrych yn iach. Oherwydd bod y gofrestr yn paru oedran yr eitem agored hynaf â chyfradd ailagor ac archwiliad wedi'i samplo o hen gau, mae'r tîm yn darllen tri o'r cau arfaethedig, yn canfod bod dau yn dal yn fyw, ac yn eu cadw ar agor. Mae ffigur yr eitem hynaf yn aros yn anghyfforddus am fis arall. Dyna'r ymddygiad bwriadedig.

## Y golwg fesul sector

**Busnes newydd.** Mae cyfeintiau'n fach, felly mae'r rhan fwyaf o gyfraddau'n cynnwys ychydig o eitemau ac mae cyfyngau'n llydan. Darllenwch bob digwyddiad yn lle cyfrifo ystadegau, cadwch siart wythnosol syml o un neu ddau fesur, ac osgowch ddatgan tueddiadau o dri phwynt. Wrth i gyfaint dyfu, symudwch at ganolrifau a chanraddau yn gynnar fel bod yr arferion eisoes yn eu lle.

**Busnes bach.** Mae'r person sy'n rhedeg TG hefyd yn berchen ar y data, ac mae'r sampl fel arfer yn fach. Adroddwch gyfrifon, nid canrannau, ar gyfer digwyddiadau prin, a chymharwch yn erbyn eich hanes hirach eich hun. Gwiriwch beth mae cloc "amser ymateb" gwerthwr yn ei fesur mewn gwirionedd.

**Menter fawr.** Mae cyfaint yn gwneud dosbarthiadau'n ystyrlon, ac mae hefyd yn annog crynodebau sy'n cymysgu gwasanaethau annhebyg. Cymharwch debyg â thebyg, cyhoeddwch y diffiniadau a'r ganradd a ddefnyddiwyd, a chadwch lyfrgell a rennir o reolau siartiau a chyfrifiadau fel nad yw timau'n cyfrifo'r un mesur mewn tair ffordd.

**Llywodraeth a'r sector cyhoeddus.** Mae contractau ac adrodd statudol yn aml yn gosod cymedr neu ganran trothwy, ac nid yw'r diffiniadau hynny'n drafodadwy. Adroddwch y ffigur gofynnol yn union fel y'i diffinnir, a dangoswch y canolrif, y ganradd a'r cyfrifon wrth ei ymyl fel bod cyrff goruchwylio yn gweld y darlun cyfan. Mae craffu cyhoeddus yn gwneud ansicrwydd gonest yn fwy gwerthfawr, oherwydd mae rhif gorhyderus yn ddrud i'w dynnu'n ôl (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae'n cymryd ychydig oriau i gytuno ar reolau crynodeb, adeiladu histogram a siart rheoli o allforio, ac ychwanegu cyfrifon at dempled adroddiad, ynghyd ag ychydig funudau bob cylch i'w cadw'n gyfredol. Mae'r rhan fwyaf o offer eisoes yn cyfrifo canraddau. Cost fwy yw sgwrs â phobl sy'n gyfarwydd ag un rhif cysurus.

Yr elw yw gwell penderfyniadau a llai o ymateb gwastraffus. Mae timau'n rhoi'r gorau i ad-drefnu ar ôl wythnos wael, yn rhoi'r gorau i glodfori mentrau am welliannau ar hap, ac yn rhoi'r gorau i addo cyfartaleddau nad yw hanner eu cwsmeriaid yn eu profi. Peidiwch â benthyg ffigur: cyfrifwch pa mor aml y gwrthdrowyd penderfyniadau'r llynedd a faint o "welliannau" a ddiflannodd y cyfnod nesaf, a defnyddiwch y cyfrifon hynny i faint yr achos.

## Gwrthbatrymau a maglau

- **Cyfartaleddu hyd gwyrgam.** Mae'r gynffon yn llusgo'r cymedr ac yn cuddio'r hyn y mae defnyddwyr yn ei deimlo. Adroddwch y canolrif a chanradd uchel a enwir, a dangoswch yr eitem agored hynaf.
- **Canrannau o samplau bach iawn.** Hanesyn yw "100 y cant" o dair eitem. Dangoswch gyfrifon a chymhwyswch reol isafswm cyfrif.
- **Ymateb i bob siglen.** Mae mynd ar ôl pob wythnos goch yn gwastraffu ymdrech ac yn dysgu timau i esbonio sŵn. Defnyddiwch derfynau rheoli a rheolau signal ysgrifenedig.
- **Prawf cyn-ac-ar-ôl.** Ni all dau bwynt wahanu ymyriad oddi wrth siawns neu atchweliad tuag at y cymedr. Defnyddiwch linell sylfaen hirach a chymhariaeth.
- **Symud y pyst gôl ar y siart.** Mae newid terfynau, rheolau neu ddiffiniadau ar ôl y ffaith yn gwneud i unrhyw siart gytuno â'r stori. Gosodwch y rheolau, logiwch newidiadau, a'u hanodi.
- **Eithrio allanolion yn ddiofyn.** Yr achosion hiraf fel arfer yw'r rhai y mae cwsmeriaid yn eu cofio. Eithriwch yn unig gyda rheswm ysgrifenedig, a rhestrwch yr hyn a eithriwyd.
- **Cywirdeb ffug.** Mae adrodd 83.3 y cant o 12 eitem yn awgrymu gwybodaeth nad oes gan y data. Talgrynnwch yn onest a dangoswch ystod.
- **Cyfuno gwaith annhebyg.** Nid yw amser cymysg ar gyfer ailosod cyfrineiriau a methiannau canolfan ddata yn disgrifio'r naill na'r llall. Segmentwch yn gyntaf.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Crynodebau o ddata amser | Cyfartaleddau yn unig | Mae rhai timau'n dangos canolrifau | Mae canolrif ynghyd â chanradd a enwir ac eitem agored hynaf yn safonol | Dosbarthiadau wedi'u hadolygu gyda rheilen warchod a'u tueddu | Ymrwymiadau canradd wedi'u cytuno gyda chwsmeriaid a chyflenwyr, a'u diwygio wrth i'r data newid |
| Maint sampl ac ansicrwydd | Cyfraddau wedi'u dyfynnu heb gyfrifon | Cyfrifon wedi'u dangos mewn rhai adroddiadau | Cyfrifon a rheol isafswm cyfrif ar bob cyfradd | Cyfyngau ar gyfraddau pennawd, dull yn y gofrestr | Ansicrwydd wedi'i rannu'n agored â chwsmeriaid a'i ddefnyddio wrth gynllunio ar draws timau |
| Amrywiad ac achosiaeth | Esbonnir pob newid | Ychydig o siartiau gyda therfynau | Siartiau rheoli gyda rheolau ysgrifenedig ar gyfer mesurau allweddol | Mae signalau'n sbarduno ymchwiliad wedi'i gynllunio; mentrau wedi'u gwirio yn erbyn llinell sylfaen | Llyfrgelloedd siartiau a rennir ar draws gwasanaethau; llinellau sylfaen wedi'u cymharu rhwng timau heb eu graddio |

## Rhestr wirio

- [ ] Mae pob mesur amser yn adrodd canolrif a chanradd uchel a enwir, yn hytrach na chymedr yn unig.
- [ ] Adroddir oedran yr eitem agored hynaf a nifer yr eitemau y tu hwnt i'r ganradd uchel.
- [ ] Mae pob cyfradd a adroddir yn dangos ei rhifiadur a'i henwadur.
- [ ] Mae rheol isafswm cyfrif wedi'i hysgrifennu ac yn cael ei chymhwyso i bob cyfradd.
- [ ] Mae cyfraddau pennawd a rhagolygon yn dangos ystod, gyda'r dull wedi'i enwi yn y gofrestr.
- [ ] Mae siartiau rheoli yn bodoli ar gyfer y tri mesur y mae'r tîm yn gweithredu arnynt, gyda rheolau signal ysgrifenedig.
- [ ] Nodir newidiadau diffiniad ar siartiau a'u logio yn y gofrestr.
- [ ] Rhestrir eitemau a eithrir gyda rhesymau.
- [ ] Gwirir honiadau gwelliant yn erbyn llinell sylfaen hirach cyn eu hailadrodd.
- [ ] Mae ffordd chwarae'r system a rheilen warchod pob metrig yn y gofrestr (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

## Anogwyr AI

**Gwiriwch a yw crynodeb yn gweddu i'r data.**

```text
Mae gennyf [nifer] o werthoedd [mesur, megis amser datrys digwyddiadau] ar gyfer
[gwasanaeth] dros [cyfnod]. Mae'r cloc yn dechrau ar [digwyddiad cychwyn] ac yn
stopio ar [digwyddiad stopio]. Mae oedi [yn cael eu trin fel hyn]. Mae'r gwerthoedd
wedi'u gludo isod.

Disgrifiwch siâp y dosbarthiad, cyfrifwch y cymedr, y canolrif, a'r [canradd,
megis 85fed] a'r [ail ganradd, megis 95fed], a dywedwch wrthyf pa grynodeb sy'n
cynrychioli achos nodweddiadol orau a pha un sy'n cefnogi addewid i gwsmeriaid.
Nodwch unrhyw werthoedd sy'n edrych fel gwallau data, ond peidiwch â'u tynnu.
Peidiwch â dyfeisio gwerthoedd meincnod. Rhestrwch eich rhagdybiaethau a'r hyn
na allech ei benderfynu o'r data.

[gludwch werthoedd, gyda data personol wedi'i dynnu]
```

**Mynegwch gyfradd gyda'i hansicrwydd.**

```text
Mae ein tîm yn adrodd [enw'r gyfradd] fel [rhifiadur] allan o [enwadur] ar gyfer
[cyfnod] a [gwasanaeth]. Dangoswch sut i gyflwyno hyn gyda'r cyfrifon, esboniwch
mewn geiriau plaen faint y byddai un llwyddiant yn fwy neu'n llai yn ei newid,
a chyfrifwch gyfwng hyder gan ddefnyddio [dull, neu "dull a argymhellwch ac a
enwir gennych"]. Awgrymwch eiriad y gall arweinydd annhechnegol ei ddeall a
rheol isafswm cyfrif ar gyfer pryd i ddangos eitemau yn lle cyfradd. Peidiwch
â dyfeisio ffigurau cymharu. Rhestrwch eich rhagdybiaethau, gan gynnwys y dull
ac unrhyw amodau data y mae eu hangen arno.
```

**Barnwch a yw newid yn signal neu'n sŵn.**

```text
Dyma [nifer] o werthoedd [wythnosol neu fisol] olynol o [mesur] ar gyfer
[gwasanaeth]. Digwyddodd newid yn [cyfnod]: [disgrifiwch yr ymyriad, y
rhyddhad neu'r newid diffiniad]. Plotiwch neu ddisgrifiwch siart rheoli gyda
llinell ganol a therfynau, cymhwyswch y rheolau signal hyn: [rhestr rheolau,
megis un pwynt tu hwnt i'r terfynau neu rediad o wyth ar un ochr], a dywedwch
wrthyf pa bwyntiau sy'n arwyddo. Dywedwch a ellir gwahaniaethu'r newid oddi wrth
amrywiad arferol, a pha esboniadau eraill, megis atchweliad tuag at y cymedr
neu newid diffiniad, y dylwn eu diystyru. Peidiwch â hawlio achosiaeth.
Rhestrwch eich rhagdybiaethau a'r data ychwanegol a fyddai'n helpu.

[gludwch werthoedd]
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc a'r rheilen warchod pâr ar gyfer metrig amser neu gyfradd cyn i chi ei gyhoeddi.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod gan fesur ystadegol a ychwanegir at bwnc ei ddiffiniad, ei glociau, ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Mae hyd gwasanaeth yn gam, felly adroddwch y canolrif a chanradd uchel a enwir, ac ychwanegwch oedran yr eitem agored hynaf.
- Mae pob cyfradd yn cario ei chyfrif, a dangosir samplau bach fel eitemau neu gydag ystod, nid fel canran hyderus.
- Gwybod ystod arferol mesur gyda siart rheoli cyn ymateb i un wythnos.
- Byddwch yn amheus o welliannau a fesurir gan ddau bwynt: mae atchweliad tuag at y cymedr a newidiadau diffiniad yn esbonio llawer ohonynt.
- Mae ansicrwydd gonest yn gryfder mewn adroddiad, ac mae'n rheilen warchod yn erbyn chwarae'r system yn null Goodhart (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).
- Cadwch y dechneg yn gymesur: mae ychydig o ddulliau cyson, wedi'u hesbonio mewn geiriau plaen, yn gwasanaethu tîm yn well na llawer heb eu hesbonio.

## Cyfeiriadau a darllen pellach

1. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
2. Shewhart, W. A., *Economic Control of Quality of Manufactured Product*, D. Van Nostrand, 1931.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
5. Hubbard, D. W., *How to Measure Anything: Finding the Value of Intangibles in Business*, 3rd edition, Wiley, 2014.
6. Kahneman, D., *Thinking, Fast and Slow*, Farrar, Straus and Giroux, 2011.
7. Tufte, E. R., *The Visual Display of Quantitative Information*, 2nd edition, Graphics Press, 2001.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Wikipedia, [Skewness](https://en.wikipedia.org/wiki/Skewness).
10. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
11. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
12. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
14. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
15. Wikipedia, [Statistical process control](https://en.wikipedia.org/wiki/Statistical_process_control).
16. Wikipedia, [Regression toward the mean](https://en.wikipedia.org/wiki/Regression_toward_the_mean).
