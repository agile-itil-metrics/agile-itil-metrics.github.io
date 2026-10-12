# Llywodraethu a pherchnogaeth metrigau

**Bydd metrig nad oes neb yn berchen arno, yn ei ddiffinio, yn ei adolygu nac yn ei ymddeol yn drifftio oddi wrth y gwaith y mae'n ei ddisgrifio, felly rhowch berchennog a enwir, diffiniad ysgrifenedig, dyddiad adolygu a ffordd allan i bob metrig a adroddir.**

## Crynodeb a chymhelliant

Llywodraethu metrigau yw'r set o benderfyniadau ysgafn ynglŷn â phwy sy'n berchen ar fesur, beth y mae'n ei olygu, pwy a gaiff ei weld, pa mor aml y caiff ei adolygu, a phryd y caiff ei dynnu. Mae'n gyfnither agos i [lywodraethu data](https://en.wikipedia.org/wiki/Data_governance), sy'n ymdrin â rheoli ehangach argaeledd, ansawdd a diogelwch data mewn sefydliad. Mae llywodraethu metrigau yn cymhwyso'r un ddisgyblaeth i'r set fach, hynod weladwy o rifau y mae timau ac arweinwyr yn eu defnyddio i lywio gwaith gwasanaeth a chyflawni.

Mae'r angen yn ymddangos fel ffrithiannau bach, ailadroddus. Mae dau dîm yn cyfrifo "amser datrys" yn wahanol ac yn treulio cyfarfod yn cysoni'r ffigurau. Mae teilsen dangosfwrdd yn mynd yn hen am fisoedd oherwydd bod y person a'i hadeiladodd wedi newid swydd. Mae mesur a gynlluniwyd i helpu un tîm i ddiagnosio ei lif yn cael ei fabwysiadu gan grŵp llywio fel nod perfformiad, sef y sefyllfa y mae'r pwnc blaenorol yn rhybuddio amdani (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Nid problem ystadegol yw'r un o'r rhain. Problem perchnogaeth yw pob un, ac mae pob un yn rhad i'w hatal.

Mae'r olygon ystwyth ac ITIL yn wahanol o ran pwyslais, ac mae'r gwahaniaeth yn ddefnyddiol. Yn yr olwg ystwyth, mae tîm yn berchen ar ei fesurau gweithio ac yn eu negodi mewn ôl-sylliadau, cytundebau gweithio ac adolygiadau. Mae'r olwg ITIL, fel y'i dogfennir yn ITIL 4 (argraffiad 2019 gan AXELOS, a gyhoeddir bellach gan PeopleCert), yn trin mesur ac adrodd fel arfer rheoli cyffredinol a gwelliant parhaus fel arfer â'i rolau, cofnodion ac adolygiad ei hun. Mae ITIL hefyd yn disgwyl i berchnogion gwasanaeth a pherchnogion arferion fod yn atebol am ganlyniadau. Mae'r ddwy olwg yn gweddu gyda'i gilydd: mae'r tîm yn berchen ar y golwg gweithio, mae perchennog gwasanaeth neu arfer a enwir yn berchen ar y golwg a adroddir, ac mae cofrestr fach yn cysylltu'r ddau.

Ychydig o dermau a ddefnyddir yma. **Perchennog metrig** yw'r un person atebol am ddiffiniad, ansawdd data a defnydd metrig. **Cofrestr metrigau** yw catalog byr o'r metrigau a ddefnyddir, gyda phob un â'i berchennog, diffiniad, ffynhonnell data, rheilen warchod a dyddiad adolygu. **Siarter metrigau** yw datganiad un dudalen o ddiben, cwmpas, rolau a rhythm adolygu ar gyfer set o fetrigau. **[Ffynhonnell unigol o wirionedd](https://en.wikipedia.org/wiki/Single_source_of_truth)** yw'r un system neu set ddata awdurdodol y cyfrifir ffigur penodol ohoni. Mae **[stiward data](https://en.wikipedia.org/wiki/Data_steward)** yn gofalu am ansawdd a diffiniad parth data, ac mewn sefydliad bach mae perchennog y metrig yn aml yn chwarae'r rôl hon. Mae **[matrics RACI](https://en.wikipedia.org/wiki/RACI_matrix)** yn cofnodi pwy sy'n gyfrifol, yn atebol, yn cael ei ymgynghori ac yn cael ei hysbysu am bob gweithgarwch. Mae **[geiriadur data](https://en.wikipedia.org/wiki/Data_dictionary)** yn gatalog o elfennau data a'u hystyron, sef yr hyn y daw colofn diffiniad y gofrestr ar raddfa fwy. Mae'r **[egwyddor o'r braint lleiaf](https://en.wikipedia.org/wiki/Principle_of_least_privilege)** yn dweud bod pobl a systemau yn cael y mynediad sydd ei angen arnynt ar gyfer eu tasg a dim mwy. **[Gwelliant parhaus](https://en.wikipedia.org/wiki/Continual_improvement_process)** yw'r ymdrech barhaus i wella gwasanaethau, arferion a ffyrdd o weithio, ac mae'n arfer ITIL ac yn arferiad ystwyth. Ystyr SLA yw cytundeb lefel gwasanaeth, ac ystyr ITSM yw rheoli gwasanaethau TG.

## Egwyddorion allweddol

- **Mae gan bob metrig a adroddir un perchennog a enwir.** Rôl neu berson, byth "y tîm." Mae perchnogaeth a rennir yn gadael y diffiniad heb ei gynnal.
- **Un diffiniad, un ffynhonnell o wirionedd.** Ysgrifennwch y diffiniad unwaith, gan gynnwys ble mae'r cloc yn dechrau ac yn stopio, a chyfrifwch y ffigur mewn un lle.
- **Llywodraethwch yn gymesur â'r canlyniad.** Mae metrig y mae tîm yn ei ddefnyddio i ddadfygio ei fwrdd ei hun angen brawddeg. Mae metrig mewn contract, adroddiad cyhoeddus neu becyn bwrdd angen cofnod siarter, adolygiad a llwybr archwilio.
- **Mae mynediad yn dilyn diben.** Penderfynwch pwy sy'n gweld pa olwg a pham. Y gynulleidfa ddiofyn ar gyfer golwg gweithio tîm yw'r tîm.
- **Adolygwch ar rythm ac ymddeolwch ar dystiolaeth.** Mae gan fetrigau gylchoedd oes. Mabwysiadwch, adolygwch, diwygiwch ac ymddeolwch hwy yn fwriadol.
- **Ysgrifennwch ef a'i gadw'n fach.** Mae cofrestr sy'n ffitio ar dudalen yn cael ei darllen. Nid yw llawlyfr polisi.
- **Mae llywodraethu'n gwasanaethu'r bobl a fesurir.** Mae perchnogion metrig yn cynnwys y bobl y mae eu gwaith yn cael ei ddisgrifio ganddo.

## Diffiniadau metrigau

Mesurau o iechyd arfer metrigau yw'r rhain, nid o wasanaeth. Maent yn ychydig yn fwriadol ac yn rhad i'w casglu o'r gofrestr ei hun. Chwarter calendr yw pob cyfnod oni nodir yn wahanol.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cwmpas perchnogaeth | Cyfran y metrigau a adroddir â pherchennog cyfredol a enwir | metrigau a adroddwyd â pherchennog sy'n dal i ddal y rôl ar ddiwedd y cyfnod / metrigau a adroddwyd ar ddiwedd y cyfnod; yn eithrio metrigau a ddefnyddir yn unig y tu mewn i fwrdd preifat un tîm | canran | Cofrestr metrigau | Mesur ac adrodd | Cytundebau gweithio | Chwarterol |
| Cyfredoldeb diffiniad | Cyfran y metrigau a adroddir yr adolygwyd eu diffiniad o fewn yr egwyl y cytunwyd arni | metrigau â dyddiad adolygu o fewn y 6 mis diwethaf / metrigau a adroddwyd; mae'r cloc yn dechrau ar yr adolygiad diwethaf a gofnodwyd ac yn stopio ar ddiwedd y cyfnod | canran | Log newidiadau'r gofrestr metrigau | Mesur ac adrodd; gwelliant parhaus | Camau gweithredu ôl-sylliad | Chwarterol |
| Cydffurfiaeth ffynhonnell | Cyfran y metrigau a adroddir a gyfrifir o un ffynhonnell a enwir yn unig | metrigau ag un ffynhonnell awdurdodol a dim cyfrifiad cyfochrog hysbys / metrigau a adroddwyd; canfyddir cyfrifiadau cyfochrog drwy samplo dangosfyrddau ac adroddiadau | canran | Cofrestr ynghyd â sampl o ddangosfyrddau ac adroddiadau | Mesur ac adrodd; rheoli lefelau gwasanaeth | Diffiniad o orffen ar gyfer metrig | Chwarterol |
| Cyfradd ymddeol | Nifer y metrigau a ymddeolwyd neu a unwyd mewn cyfnod o'i gymharu â'r rhai a adroddwyd | metrigau a ymddeolwyd neu a unwyd yn y cyfnod / metrigau a adroddwyd ar ddechrau'r cyfnod; mae metrig a symudwyd i olwg tîm preifat yn cyfrif fel un wedi'i ymddeol o'r set a adroddir | canran | Log newidiadau'r gofrestr metrigau | Gwelliant parhaus | Camau gweithredu ôl-sylliad | Chwarterol |
| Cyfredoldeb adolygu mynediad | Cyfran y golygon metrig cyfyngedig yr adolygwyd rhestr eu cynulleidfa o fewn yr egwyl | golygon cyfyngedig ag adolygiad cynulleidfa yn y 6 mis diwethaf / golygon cyfyngedig; eithrir golygon sy'n agored i'r sefydliad cyfan | canran | Rhestr mynediad neu allforio caniatâd offeryn BI | Rheoli diogelwch gwybodaeth; mesur ac adrodd | Cytundebau gweithio | Chwemisol |
| Cysylltiad penderfyniad | Cyfran y metrigau a adroddir sydd wedi'u cysylltu yn y gofrestr â phenderfyniad y maent yn ei hysbysu | metrigau â phenderfyniad neu gwestiwn wedi'i gofnodi / metrigau a adroddwyd; dim ond os cymerwyd y penderfyniad yn y 12 mis diwethaf y mae cyswllt yn cyfrif | canran | Cofrestr metrigau a log penderfyniadau | Gwelliant parhaus | Adolygiad rhanddeiliaid a chanlyniadau gwelliant | Chwarterol |

Nid yw'r un o'r rhain yn nod. Gall cofrestr ddangos cwmpas perchnogaeth llawn a dal i ddisgrifio metrigau diwerth, felly darllenwch y tabl gyda'r tabl chwarae'r system isod.

## Argymhellion

### Sefydlwch berchnogaeth a'r gofrestr

**1. Cadwch gofrestr metrigau un dudalen.** Rhestrwch bob metrig a adroddir gyda'i gwestiwn, perchennog, diffiniad, fformiwla a chlociau, uned, ffynhonnell data, cynulleidfa, rheilen warchod, dyddiad adolygu diwethaf, a dyddiad adolygu arfaethedig. Mae taenlen neu ffeil Markdown mewn rheoli fersiynau yn ddigon. Y gofrestr yw'r arteffact mwyaf defnyddiol yn y pwnc hwn, ac mae'r pwnc blaenorol eisoes yn tybio ei bod yn bodoli (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

**2. Enwch un perchennog fesul metrig, a chofnodwch y rôl.** Mae'r perchennog yn atebol am y diffiniad, ansawdd y data, ac esboniad canlyniadau od. Dewiswch rywun sy'n agos at y data a'r penderfyniadau, yn aml perchennog y gwasanaeth, perchennog arfer neu arweinydd tîm. Cofnodwch y rôl yn ogystal â'r person, fel bod y cofnod yn goroesi newid swydd ac y bydd swydd wag yn ymddangos yn y ffigur cwmpas.

**3. Gwahanwch berchnogi metrig oddi wrth berchnogi'r gwaith y mae'n ei fesur.** Mae perchennog metrig yn ei esbonio ac yn ei gynnal, ond mae'r tîm sy'n gwneud y gwaith yn parhau'n gyfrifol am y canlyniad. Mae hyn yn osgoi dau fagl: y perchennog a feiir am rif na all ddylanwadu arno, a'r tîm sy'n gwadu rhif oherwydd bod rhywun arall yn ei gynnal. Mae tabl RACI byr yn y siarter yn gwneud hyn yn eglur.

**4. Ysgrifennwch y diffiniad gyda'i glociau, unwaith.** Mae'r gofrestr yn dal y diffiniad awdurdodol: beth a gyfrifir, ble mae'r cloc yn dechrau ac yn stopio, pa gyflyrau sy'n ei oedi, a beth a eithrir. Cysylltwch ag ef o bob dangosfwrdd sy'n dangos y metrig. Pan fydd angen newid diffiniad, newidiwch ef yn y gofrestr yn gyntaf a nodwch y newid ar y siart (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth, am sut i ddangos toriad mewn tuedd).

**5. Cyfrifwch bob metrig mewn un lle.** Dewiswch y ffynhonnell awdurdodol, megis yr offeryn ITSM, yr olrheinydd materion neu'r system fonitro, a dywedwch hynny yn y gofrestr. Dylid naill ai ymddeol taenlenni cyfochrog sy'n atgynhyrchu'r ffigur neu eu hailenwi fel na fydd neb yn eu camgymryd am y rhif swyddogol. Mae tarddiad data ac offer yn perthyn i'r pwnc nesaf (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

### Gosodwch rythm a rheolaeth newid

**6. Adolygwch ddiffiniadau ar amserlen sy'n cyd-fynd â'r canlyniad.** Ar gyfer metrigau mewn contractau, adroddiadau rheoleiddiedig neu becynnau gweithredol, adolygwch ddwywaith y flwyddyn ac ar unrhyw newid i'r llif gwaith sylfaenol. Ar gyfer mesurau gweithio lefel tîm, yr ôl-sylliad yw'r adolygiad. Mae pob adolygiad yn gofyn tri chwestiwn: a yw'r diffiniad yn dal yn gywir, a yw'r data'n dal yn gadarn, ac a ddefnyddiodd unrhyw un y rhif i benderfynu rhywbeth?

**7. Trinwch newidiadau diffiniad fel newidiadau i wasanaeth.** Cofnodwch bwy a ofynnodd am y newid, pam, pwy yr ymgynghorwyd â hwy, a'r dyddiad y daw i rym. Gall newid bach i lif gwaith statws symud mesur amser yn dawel o swm mawr. Mae rheoli newid ysgafn ar gyfer diffiniadau yn benthyca'r syniad o alluogi newid heb y seremoni (gweler pwnc 4.3, Metrigau galluogi newid, am y cymar newid gwasanaeth).

**8. Clymwch yr adolygiad wrth welliant parhaus.** Dylai adolygiadau metrigau gynhyrchu gwaith gwella, neu benderfyniad penodol i beidio â gweithredu. Mae ITIL yn trin gwelliant parhaus fel arfer â chofrestr o gyfleoedd gwella, ac mae timau ystwyth yn cael yr un effaith drwy gamau gweithredu ôl-sylliad. Os yw adolygiad yn gorffen heb weithred a heb ymddeol, gofynnwch a yw'r metrig yn gwneud unrhyw waith (gweler pwnc 9.5, Metrigau gwelliant parhaus).

**9. Ymddeolwch fetrigau'n fwriadol.** Diffiniwch brawf ymddeol, er enghraifft "heb ei grybwyll mewn penderfyniad ers dau gylch adolygu," a'i gymhwyso. Archifwch y diffiniad a'r gwerthoedd terfynol, dywedwch beth a'i disodlodd os o gwbl, a dywedwch wrth y gynulleidfa. Mae log ymddeol yn dystiolaeth i archwilwyr ac yn rhyddhad i bobl a gynhaliodd y data â llaw.

### Rheolwch olygon a mynediad

**10. Penderfynwch ar y gynulleidfa ar gyfer pob golwg.** Mae gan y rhan fwyaf o fetrigau olwg gweithio ar gyfer y tîm, golwg a adroddir ar gyfer perchennog y gwasanaeth neu'r rhaglen, ac weithiau golwg allanol ar gyfer cwsmeriaid, rheoleiddiwr neu gyflenwr. Cofnodwch pa gynulleidfa sy'n cael pa olwg a pham. Gan ddefnyddio egwyddor y braint lleiaf fel canllaw, cyfyngwch ar olygon sy'n cynnwys data personol, manylion diogelwch neu ffigurau cyflenwyr sy'n sensitif yn fasnachol, a gadewch y gweddill ar agor fel mai tryloywder yw'r diofyn.

**11. Cadwch ddata lefel unigol allan o adrodd.** Rheol galed y llyfr hwn yw bod metrigau'n disgrifio timau, gwasanaethau a systemau, nid pobl. Mae llywodraethu'n ategu hyn drwy osod y gronynnedd a adroddir, er enghraifft tîm a gwasanaeth, a thrwy gyfyngu unrhyw echdyniad lefel person i'r stiward data. Os daw cais am ddadansoddiad lefel person, cofnodwch ef, gofynnwch pa benderfyniad y mae'n ei wasanaethu, a chynigiwch ddewis arall lefel tîm neu lefel system (gweler pwnc 11.3, Cyflwyno metrigau heb fagu ofn).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cwmpas perchnogaeth | Enwi rheolwr neu restr bostio fel perchennog i gyrraedd 100 y cant, heb neb a all esbonio neu newid y metrig | Gofyn i bob perchennog esbonio un symudiad diweddar yn y rhif; olrhain cwestiynau na atebwyd am fwy nag wythnos |
| Cyfredoldeb diffiniad | Cyffwrdd â'r dyddiad adolygu heb ddarllen y diffiniad | Samplo tri chofnod bob chwarter a chymharu'r diffiniad ysgrifenedig â chyfluniad gwirioneddol yr offeryn |
| Cydffurfiaeth ffynhonnell | Datgan ffynhonnell yn awdurdodol tra bod taenlenni'n dal i gylchredeg ac anghytuno | Cyfrif ffigurau gwahanol ar gyfer yr un metrig a ganfuwyd mewn sampl o adroddiadau; cysoni gwahaniaethau yn yr adolygiad |
| Cyfradd ymddeol | Ymddeol metrigau dibwys neu ddiangen i edrych yn ddisgybledig, neu ailenwi metrig fel ei fod yn cyfrif fel un newydd | Adolygu'r log ymddeol am yr hyn a dynnwyd; olrhain cyfanswm y cyfrif a adroddir a'r ffigur cysylltiad penderfyniad ochr yn ochr |
| Cyfredoldeb adolygu mynediad | Cymeradwyo'r rhestr gynulleidfa bresennol heb ei darllen | Cymharu'r rhestr ag aelodaeth a rolau tîm cyfredol; adrodd nifer y dileadau a ganfuwyd |
| Cysylltiad penderfyniad | Ysgrifennu penderfyniad amwys megis "gwella gwasanaeth" i fodloni'r maes | Gofyn am benderfyniad neu gwestiwn wedi'i ddyddio, a samplo'r log penderfyniadau i weld a ymgynghorwyd â'r metrig mewn gwirionedd |

Darlleniad iach yw cofrestr sy'n newid. Mae gan gofnodion berchnogion sy'n ateb cwestiynau, dyddiadau adolygu sy'n syrthio yn y chwe mis diwethaf, log ymddeol gyda rhesymau, a rhestr fer o fetrigau sy'n dal i gael eu dymuno am fod pobl yn gallu enwi'r penderfyniad y maent yn ei hysbysu. Mae cofrestr â phob maes yn llawn ac heb newid byth yn arwydd rhybudd.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Swyddfa fetrigau ganolog | Diffiniadau cyson ac offer a rennir; archwilio haws | Araf, pell o'r gwaith, ac yn cael ei demtio i safoni mesurau a ddylai fod yn wahanol rhwng timau |
| Perchnogaeth ffederal gyda chofrestr a rennir | Mae perchnogion yn eistedd yn agos at y data; mae'r gofrestr yn cadw lleiafswm cyffredin | Angen anogaeth gyson i osgoi drifft mewn ansawdd rhwng timau |
| Mesurau a berchnogir gan dimau yn unig | Cyflym ac yn gweddu i'r gwaith | Mae diffiniadau'n ymwahanu; mae crynodebau'n dod yn annibynadwy; mae gwybodaeth yn gadael gyda phobl |
| Mynediad agored yn ddiofyn | Meithrin ymddiriedaeth a dealltwriaeth a rennir | Risg o ddatgelu manylion sensitif neu lefel person |
| Mynediad cyfyngedig | Diogelu data sensitif | Cuddio cyd-destun rhag pobl a allai helpu, a gwahodd amheuaeth |

Y cydbwysedd yw canoli'r haen denau y mae'n rhaid iddi gytuno, sef y gofrestr, diffiniadau a rennir a rheolau mynediad, a ffederaleiddio popeth arall.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pwy fyddai'n ateb pe bai'r rhif a nodir amlaf ar ein dangosfwrdd yn edrych yn anghywir yfory?**
Gofynnwch i'r grŵp enwi person, nid grŵp. Os daw sawl enw, neu ddim un, nid oes gan y metrig berchennog yn ymarferol. Dylai'r hwylusydd nodi'r metrig, y perchennog ymgeisiol, a'r hyn y byddai ei angen ar y perchennog i wneud y gwaith, megis mynediad darllen at y data neu amser yn yr adolygiad. Caewch drwy gytuno pwy fydd yn cadarnhau'r perchennog ac yn cofnodi'r rôl yn y gofrestr.

**2. Ble mae dau fersiwn o'r un ffigur yn bodoli heddiw?**
Chwiliwch am adroddiadau sy'n dangos yr un metrig â gwerthoedd gwahanol: sleid wythnosol yn erbyn dangosfwrdd byw, neu adroddiad cyflenwr yn erbyn yr un mewnol. Ar gyfer pob un, gofynnwch ble mae'r gwahaniaeth yn codi, megis cwmpas, cloc neu eithriadau. Penderfynwch pa ffynhonnell sy'n awdurdodol a beth sy'n digwydd i'r fersiwn arall. Disgwyliwch i'r sgwrs ddatgelu diffiniadau gweithio gwahanol o eiriau yr oedd pawb yn tybio eu bod yn gyffredin.

**3. Pa fetrig fyddem ni'n ei ymddeol y chwarter hwn pe bai'n rhaid i ni ymddeol un?**
Dechreuwch â'r metrig na chyfeiriodd neb ato mewn penderfyniad yn ddiweddar. Gofynnwch beth fyddai'n digwydd pe bai'n diflannu, a phwy fyddai'n sylwi. Os yw'r ateb yn "neb," symudwch ef allan o'r set a adroddir am gyfnod treial. Dylai'r hwylusydd drin ymddeol fel peth arferol ac iach, a chofnodi'r canlyniad yn y log ymddeol.

**4. Pwy sy'n gweld pa rai o'n metrigau ni, ac a yw hynny'n fwriadol?**
Tynnwch grid syml o fetrigau yn erbyn cynulleidfaoedd: tîm, perchennog gwasanaeth, arweinyddiaeth, cwsmeriaid, cyflenwyr, rheoleiddwyr. Nodwch lle'r oedd mynediad yn benderfyniad a lle digwyddodd yn syml. Chwiliwch am unrhyw olwg y gellid ei defnyddio i gymharu unigolion. Cytunwch ar newid i o leiaf un rhestr gynulleidfa, ac ar bwy sy'n ei hadolygu nesaf.

**5. Sut ydym ni'n newid diffiniad heb dorri'r duedd?**
Cerddwch drwy newid diweddar i lif gwaith statws neu raddfa flaenoriaeth. Gofynnwch pwy a hysbyswyd, a anodwyd y siart, ac a gymharodd unrhyw un y gwerthoedd hen a newydd. Drafftiwch gofnod newid ysgafn y byddai'r tîm yn ei lenwi mewn gwirionedd. Cytunwch ar bwy sy'n cymeradwyo newidiadau i fetrigau sy'n ymddangos mewn contractau neu adroddiadau allanol.

**6. Beth fyddem ni'n rhoi'r gorau i'w wneud pe bai llywodraethu'n dod yn faich?**
Gall llywodraethu droi'n ddefod. Gofynnwch pa rannau o'r dull presennol y byddai pobl yn eu hepgor pe na bai neb yn gwirio, a pham. Trinwch yr atebion fel adborth dylunio yn hytrach na gwrthwynebiad. Dylai'r hwylusydd chwilio am gamau sy'n dyblygu ei gilydd, meysydd nad oes neb yn eu darllen, ac adolygiadau nad ydynt byth yn cynhyrchu penderfyniad.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n berchen ar fesurau gweithio megis oedran eitem waith ac amser cylch, a dylent gytuno ar y diffiniadau yn eu cytundebau gweithio. Pan fydd metrig yn symud i fyny i adroddiad portffolio, dylai'r tîm wybod y perchennog, y diffiniad a'r gynulleidfa. Mae timau'n cael y gwerth mwyaf o gofnod cofrestr byr ar gyfer pob mesur a adroddir, ac o'r hawl i herio diffiniad nad yw bellach yn cyd-fynd â sut mae'r gwaith yn llifo (gweler pwnc 2.1, Mesurau llif).

### Timau gwasanaeth a gweithrediadau

Mae timau gwasanaeth a gweithrediadau yn cario'r metrigau sy'n ymddangos mewn SLAau ac adolygiadau gweithredol, felly mae gan ddiffiniadau, clociau ac eithriadau bwys cytundebol. Fel arfer perchnogion gwasanaeth a pherchnogion arferion yw'r perchnogion yma. Dylent gadw llwybr tystiolaeth ar gyfer newidiadau diffiniad, cysoni ffigurau a adroddir yn erbyn yr offeryn ITSM yn rheolaidd, a bod y cyntaf i ymddeol mesur sydd wedi peidio â hysbysu penderfyniadau gweithredol (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod yr amodau: pwy sy'n berchen ar fetrigau, pa olygon sy'n cyrraedd y pecyn gweithredol, a sut y defnyddir y rhifau. Dylent ofyn am y gofrestr a'r log ymddeol, darllen y diffiniadau y tu ôl i'r ffigurau pennawd, a gwrthsefyll ceisiadau am dablau cynghrair lefel person. Mae angen eitem sefydlog fach ar gyrff llywodraethu sy'n adolygu'r gofrestr ac yn cofnodi penderfyniadau, yn unol â disgwyliadau ISO/IEC 20000-1 ar gyfer systemau rheoli gwasanaethau (o'i argraffiad 2018) heb droi'r adolygiad yn ymarfer cydymffurfio (gweler pwnc 8.3, Metrigau cydymffurfio ac archwilio).

### Cwsmeriaid a defnyddwyr

Anaml y gwelir y gofrestr gan gwsmeriaid a defnyddwyr, ond maent yn teimlo ei habsenoldeb pan fo ffigur mewn adolygiad gwasanaeth yn wahanol i'w profiad. Lle mae metrig yn ymddangos mewn adroddiad sy'n wynebu cwsmeriaid neu SLA, dylai'r diffiniad fod ar gael mewn iaith blaen, gan gynnwys yr hyn a eithrir. Dylai fod gan gwsmeriaid lwybr i gwestiynu ffigur, a dylai'r perchennog ei ateb (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg desg gwasanaeth, tri thîm cynnyrch a grŵp gweithrediadau. Mae'r holl rifau isod yn enghreifftiol.

Mae'r adolygiad gwasanaeth misol yn dangos amser datrys digwyddiadau o 5.1 awr ar gyfer y canolrif. Mae dangosfwrdd y timau cynnyrch eu hunain, a adeiladwyd o'r un offeryn ITSM, yn dangos 6.4 awr. Mae'r ddau ffigur wedi bod mewn cylchrediad am flwyddyn. Mae perchennog gwasanaeth newydd yn gofyn pwy sy'n berchen ar y metrig ac yn cael tri ateb gwahanol.

Mae'r perchennog, gydag arweinwyr y timau a'r stiward data, yn treulio dwy sesiwn ar gofrestr gyntaf o 14 metrig a adroddir. O'r rheini, nid oedd gan 5 berchennog ac roedd gan 4 ddwy ffynhonnell. Mae amser datrys yn un o'r metrigau dwy ffynhonnell. Mae'r gwahaniaeth yn olrhain i gyflwr oedi: mae'r adolygiad gwasanaeth yn eithrio amser yn "aros am y cwsmer," ac nid yw dangosfwrdd y tîm yn gwneud hynny. Mae'r grŵp yn cytuno ar un diffiniad, yn enwi perchennog y gwasanaeth fel perchennog y metrig, ac yn cyhoeddi'r ddau werth ar yr un dudalen am un chwarter, wedi'u labelu yn ôl diffiniad, fel na fydd neb yn colli'r hanes. Maent yn anodi'r siart lle mae'r diffiniad yn newid.

Yn yr adolygiad chwarterol cyntaf, mae'r grŵp yn cymhwyso prawf ymddeol ac yn tynnu 3 o'r 14 metrig, gan gynnwys siart cyfrif tocynnau misol nad oedd unrhyw benderfyniad diweddar wedi cyfeirio ato. Maent hefyd yn cyfyngu'r golwg sy'n dadansoddi amser datrys fesul dadansoddwr, gan gadw'r stiward data fel yr unig ddeiliad, ac maent yn cynnig dadansoddiad lefel tîm yn lle hynny.

Mae risg chwarae'r system yn ymddangos yn yr ail adolygiad. Mae cwmpas perchnogaeth yn cyrraedd 100 y cant, ond mae sampl yn dangos bod dau o'r perchnogion yn rhestr ddosbarthu ac yn bennaeth adran na agorodd y data erioed. Mae'r grŵp yn eu disodli â pherchnogion gwasanaeth a enwir ac yn ychwanegu'r cwestiwn rheilen warchod at yr adolygiad: "A all y perchennog esbonio symudiad diwethaf y rhif hwn?" Mae'r cwmpas yn disgyn i 86 y cant am chwarter, y mae'r grŵp yn ei gofnodi fel canlyniad gonest. Y penderfyniad a logiwyd yw dal y nod ar gyfer cwmpas nes bod y rheilen warchod wedi rhedeg am ddau gylch.

## Y golwg fesul sector

**Busnes newydd.** Mae sylfaenydd neu brif beiriannydd yn aml yn berchen ar bob metrig yn ddiofyn. Y risg yw bod diffiniadau'n byw mewn un pen. Cadwch gofrestr o bump i wyth metrig mewn dogfen a rennir, enwch berchennog ar gyfer pob un, ac ysgrifennwch y diffiniadau'r diwrnod y mae metrig yn ymddangos gyntaf mewn diweddariad i fuddsoddwr neu gwsmer.

**Busnes bach.** Fel arfer y person sy'n rhedeg TG yw'r perchennog, y stiward a'r darllenydd adroddiadau. Cadwch lywodraethu i un dudalen, adolygwch ddwywaith y flwyddyn, a chymerwch ofal ychwanegol pan fydd adroddiad a gyflenwir gan werthwr yn diffinio metrig yn wahanol i'ch un chi. Enwch pwy yn y busnes sy'n berchen ar bob ffigur sy'n wynebu cwsmeriaid.

**Menter fawr.** Mae graddfa yn gwneud yr haen a rennir yn hanfodol. Defnyddiwch gofrestr gyda llif gwaith, cyngor ysgafn sy'n cyfarfod bob chwarter, a rôl stiward data ar gyfer pob prif barth. Cadwch ymreolaeth timau ar gyfer mesurau gweithio ac amddiffynnwch rhag safoni metrigau a ddylai fod yn wahanol rhwng mathau o wasanaethau. Mae alinio â'r llywodraethu data sydd eisoes yn y sefydliad yn arbed ymdrech.

**Llywodraeth a'r sector cyhoeddus.** Mae adrodd statudol, archwilio a chaffael yn gwneud diffiniadau ysgrifenedig a chofnodion newid yn rhwymedigaeth. Triniwch y gofrestr fel arteffact archwilio, a chadwch linell glir o bob ffigur cyhoeddedig i'w berchennog a'i ffynhonnell. Mae penderfyniadau mynediad yn aml yn cynnwys adolygiad cyfreithiol a phreifatrwydd, felly cofnodwch y sail ar gyfer pob golwg gyfyngedig (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae'r gost yn gymedrol ac yn bennaf yn amser. Disgwyliwch ychydig oriau i adeiladu cofrestr gyntaf, awr neu ddwy y chwarter ar gyfer yr adolygiad, a rhywfaint o ymdrech gan y stiward data i ddatrys ffynonellau sy'n gwrthdaro. Mae costau offer yn isel oherwydd bod taenlen neu ffeil dan reolaeth fersiynau yn ddigon i ddechrau.

Yr elw yn bennaf yw gwastraff a osgowyd. Mae cyfarfodydd a dreulir yn cysoni ffigurau'n diflannu, mae archwilwyr yn canfod llwybr clir, ac mae croesawu perchennog gwasanaeth newydd yn gyflymach oherwydd bod y diffiniadau wedi'u hysgrifennu. Mae penderfyniadau'n well oherwydd eu bod yn gorffwys ar rifau sy'n golygu'r un peth bob mis. Peidiwch â dyfynnu canran ar gyfer y buddion hyn heb eich data eich hun. Os oes angen ffigurau arnoch ar gyfer achos busnes, cyfrifwch yr oriau a dreuliwyd y chwarter diwethaf yn cysoni rhifau sy'n gwrthdaro a nifer y metrigau heb berchennog wedi'i gofnodi, yna cyfrifwch hwy eto ar ôl dau gylch adolygu.

## Gwrthbatrymau a maglau

- **Perchnogaeth gan bwyllgor.** Mae grŵp yn berchen ar y metrig ac nid oes neb yn ateb cwestiynau. Enwch un rôl atebol a dirprwy.
- **Y gofrestr fel mynwent.** Fe'i hadeiladir unwaith ac ni chyffyrddir â hi byth. Rhowch ddyddiadau adolygu yn y calendr a dangoswch y dyddiad ar bob dangosfwrdd.
- **Safoni popeth.** Mae un diffiniad a orfodir ar dimau y mae eu gwaith yn wahanol yn cynhyrchu rhifau sy'n golygu dim yn unman. Rhannwch yn unig yr haen y mae'n rhaid iddi gytuno.
- **Newidiadau diffiniad tawel.** Mae tueddiadau'n torri ac ymddiriedaeth yn dilyn. Logiwch bob newid gyda'i reswm ac anodwch y siart.
- **Llywodraethu heb ymddeol.** Dim ond tyfu y mae'r set a sylw yn teneuo. Cymhwyswch brawf ymddeol ym mhob adolygiad.
- **Cyfrinachedd yn ddiofyn.** Mae cuddio golygon gweithio rhag y bobl a fesurir yn magu amheuaeth. Cyfyngwch yn unig yr hyn sy'n cario risg go iawn ac esboniwch pam.
- **Mynediad agored i ddata lefel person.** Gall un echdyniad ddod yn dabl cynghrair o fewn dyddiau. Gosodwch y gronynnedd a adroddir ar dîm a gwasanaeth, a daliwch unrhyw ddata lefel person o dan y stiward.
- **Theatr cydymffurfio.** Llenwir meysydd i fodloni rhestr wirio. Samplwch gofnodion am wirionedd, a gofynnwch i berchnogion esbonio symudiadau diweddar.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Perchnogaeth a'r gofrestr | Perchnogion aneglur; mae metrigau'n byw mewn taenlenni unigol | Mae rhai timau'n cadw rhestr gyda pherchnogion | Un gofrestr ar gyfer pob metrig a adroddir, pob un â pherchennog a rôl a enwir | Cwmpas a chyfredoldeb wedi'u tueddu; mae bylchau'n arwain at atebion wedi'u hadnoddu | Cofrestr wedi'i rhannu â chyflenwyr a chwsmeriaid lle mae ffigurau'n croesi ffiniau |
| Diffiniadau a rheolaeth newid | Mae diffiniadau'n wahanol yn ôl person | Wedi'u hysgrifennu ar gyfer rhai metrigau contract | Diffiniad ysgrifenedig gyda chlociau a log newidiadau ar gyfer pob metrig a adroddir | Newidiadau wedi'u hadolygu am effaith ar dueddiadau cyn eu rhyddhau | Diffiniadau'n cael eu diwygio ar y cyd ar draws timau a chyflenwyr pan fyddant yn peidio â hysbysu penderfyniadau |
| Adolygu ac ymddeol | Metrigau'n cael eu hychwanegu, byth eu tynnu | Glanhau achlysurol | Rhythm adolygu a phrawf ymddeol wedi'u hysgrifennu | Canlyniadau adolygu wedi'u holrhain fel gwaith gwella | Mae ymddeol ac adnewyddu yn rheolaidd, wedi'u gyrru gan dystiolaeth gan ddefnyddwyr a thimau |
| Mynediad a chynulleidfa | Mynediad ar ddamwain | Golygon cyfyngedig ar gyfer data sensitif | Cynulleidfa wedi'i rhestru fesul metrig, gyda rheswm | Mynediad wedi'i adolygu ar rythm; data lefel person yn cael ei ddal gan y stiward | Cynulleidfa wedi'i dylunio gyda'r bobl a fesurir a chyda chwsmeriaid |

## Rhestr wirio

- [ ] Mae cofrestr metrigau yn bodoli ac yn rhestru pob metrig a adroddir.
- [ ] Mae gan bob metrig a adroddir berchennog a enwir a rôl a gofnodwyd.
- [ ] Mae gan bob metrig a adroddir ddiffiniad ysgrifenedig â rheolau dechrau, stopio ac eithrio.
- [ ] Mae gan bob metrig un ffynhonnell awdurdodol a enwir yn y gofrestr.
- [ ] Cofnodir dyddiad adolygu ac egwyl ar gyfer pob metrig.
- [ ] Logir newidiadau diffiniad gyda rheswm a'u nodi ar y siart.
- [ ] Mae prawf ymddeol wedi'i ysgrifennu ac yn cael ei gymhwyso ym mhob adolygiad.
- [ ] Cofnodir y gynulleidfa ar gyfer pob golwg, gyda rheswm am unrhyw gyfyngiad.
- [ ] Nid yw unrhyw olwg a adroddir yn graddio unigolion, ac mae data lefel person gyda'r stiward data.
- [ ] Samplwyd y gofrestr am wirionedd yn y chwarter diwethaf.

## Anogwyr AI

**Drafftiwch siarter metrigau ar gyfer set o fetrigau.**

```text
Drafftiwch siarter metrigau un dudalen ar gyfer [enw'r tîm neu'r gwasanaeth], sy'n
darparu [math o wasanaeth neu waith cyflawni]. Y set o fetrigau yw: [rhestr o
fetrigau]. Y cynulleidfaoedd yw [cynulleidfaoedd]. Cynhwyswch ddiben, anodau
penodol, tabl RACI ar gyfer perchennog, stiward data ac adolygwyr gan ddefnyddio'r
rolau hyn: [rolau], rhythm adolygu, a phrawf ymddeol. Seiliwch y drafft ar yr hyn
a ysgrifennais yn unig. Peidiwch â dyfeisio metrigau, targedau na gwerthoedd
meincnod. Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb i gwblhau'r siarter.
```

**Dewch o hyd i wrthdaro rhwng dau fersiwn o fetrig.**

```text
Dyma ddau ddisgrifiad o'r hyn a ddylai fod yr un metrig, [enw'r metrig]. Fersiwn
A, o [ffynhonnell A]: [disgrifiad a fformiwla]. Fersiwn B, o [ffynhonnell B]:
[disgrifiad a fformiwla]. Cymharwch hwy ar yr hyn a gyfrifir, ble mae'r cloc yn
dechrau ac yn stopio, pa gyflyrau sy'n ei oedi, a beth a eithrir. Esboniwch pa
wahaniaethau a allai gyfrif am y bwlch rhwng [gwerth A] a [gwerth B], ac
awgrymwch gwestiynau i'r perchennog. Peidiwch â dyfalu gwerthoedd nad wyf wedi'u
rhoi. Rhestrwch eich rhagdybiaethau a'r hyn na allech ei benderfynu.
```

**Adolygwch gofrestr metrigau am fylchau.**

```text
Isod mae dyfyniad o'n cofrestr metrigau gyda meysydd [rhestr meysydd]. Adolygwch
ef am berchnogion coll, cofnodion heb ddyddiad adolygu neu un hŷn na [egwyl],
metrigau â mwy nag un ffynhonnell, metrigau heb benderfyniad cysylltiedig, a
golygon a allai ddatgelu data lefel person. Adroddwch batrymau fesul metrig,
nid fesul unigolyn. Peidiwch â dyfeisio ffeithiau am ein metrigau. Dywedwch
wrthyf pa ganfyddiadau sy'n sicr o'r testun a pha rai sy'n ddyfaliadau, a
rhestrwch eich rhagdybiaethau.

[gludwch ddyfyniad o'r gofrestr, gyda data personol wedi'i dynnu]
```

**Cynlluniwch adolygiad ymddeol.**

```text
Rydym yn adolygu metrigau bob [egwyl]. Ein prawf ymddeol yw: [prawf]. Ar gyfer
pob un o'r metrigau isod, gan ddefnyddio'r nodiadau a roddaf, cynigiwch ymddeol,
cadw, uno neu ailgynllunio, gyda rheswm un llinell a chwestiwn i'w ofyn i'r
perchennog: [metrigau gyda dyddiad diweddaraf eu crybwyll a rôl y perchennog].
Awgrymwch hefyd sut i gyhoeddi pob ymddeoliad i [cynulleidfa]. Peidiwch â
dyfeisio data defnydd. Rhestrwch eich rhagdybiaethau ac unrhyw wybodaeth a
fyddai'n newid eich argymhelliad.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc a'r rheilen warchod pâr ar gyfer metrig cyn ei ychwanegu at y gofrestr.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig yn cario perchennog, ffordd o chwarae'r system a rheilen warchod.

## Pwyntiau allweddol

- Mae llywodraethu'n cadw rhifau'n golygu'r un peth dros amser, a chofrestr un dudalen yw ei chraidd.
- Enwch un perchennog atebol ar gyfer pob metrig a adroddir, a chofnodwch y rôl yn ogystal â'r person.
- Ysgrifennwch un diffiniad gyda'i glociau, cyfrifwch ef mewn un lle, a logiwch bob newid.
- Cydweddwch bwysau llywodraethu â chanlyniad y metrig.
- Penderfynwch yn fwriadol pwy sy'n gweld pa olwg, cadwch ddata lefel person allan o adrodd, ac ymddeolwch fetrigau ar dystiolaeth.

## Cyfeiriadau a darllen pellach

1. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
2. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
3. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
4. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
5. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
6. ISO/IEC 20000-1:2018, *Information technology, Service management, Part 1: Service management system requirements*, International Organization for Standardization.
7. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
8. Wikipedia, [Single source of truth](https://en.wikipedia.org/wiki/Single_source_of_truth).
9. Wikipedia, [Data steward](https://en.wikipedia.org/wiki/Data_steward).
10. Wikipedia, [RACI matrix](https://en.wikipedia.org/wiki/RACI_matrix).
11. Wikipedia, [Data dictionary](https://en.wikipedia.org/wiki/Data_dictionary).
12. Wikipedia, [Principle of least privilege](https://en.wikipedia.org/wiki/Principle_of_least_privilege).
13. Wikipedia, [Continual improvement process](https://en.wikipedia.org/wiki/Continual_improvement_process).
