# Cost gwasanaeth ac economeg uned

**Mae gwybod beth mae gwasanaeth yn ei gostio, a beth mae'n ei gostio fesul uned o rywbeth y mae defnyddwyr yn ei werthfawrogi, yn gadael i dîm wneud dewisiadau gonest am ansawdd, cyflymder, a gwariant, cyn belled â bod y rheolau dyrannu yn deg, yn weladwy, ac na chânt eu defnyddio byth i gosbi'r bobl sy'n rhedeg y gwasanaeth.**

## Crynodeb a chymhelliant

Mae pob gwasanaeth TG yn costio arian: pobl, cwmwl a gwesteio, trwyddedau, caledwedd, cyflenwyr, a'r gyfran o lwyfannau a rennir y mae'n eu defnyddio. Mae arweinwyr yn gofyn beth mae gwasanaeth yn ei gostio, a yw'n werth chweil, a beth sy'n newid os yw galw'n dyblu. Mae timau'n gofyn yr un cwestiynau o'r ochr arall: beth allwn ni ei fforddio i'w wneud, a beth ydym ni'n ei aberthu? Heb rifau, mae'r sgyrsiau hyn yn troi'n ddadleuon ynghylch cyllideb pwy yw pwy.

[Cyfrifyddu costau](https://en.wikipedia.org/wiki/Cost_accounting) yw'r arfer o fesur, cofnodi, a dadansoddi costau. I sefydliad gwasanaeth y tasgau canolog yw priodoli costau i wasanaethau, mynegi cost fesul uned o rywbeth ystyrlon, a rhagweld sut mae cost yn newid gyda chyfaint. Mae arfer rheoli ariannol gwasanaeth ITIL yn cwmpasu'r un tir, ac mae arfer FinOps ar gyfer gwariant cwmwl yn mynd â hi ymhellach (gweler pwnc 7.6, Metrigau FinOps a chostau cwmwl).

Mae golygon ystwyth ac ITIL ar gost yn wahanol, ac mae'r gwahaniaeth yn ddefnyddiol.

- **Yr olwg prosiect** sy'n ariannu ymdrech dros dro gyda chyllideb a dyddiad cyflawni. Cost yw'r hyn a wariodd y prosiect, a llwyddiant yw cyflawni ar amser ac o fewn cyllideb. Mae'r prosiect yn dod i ben, mae'r tîm yn gwasgaru, ac mae'r gwasanaeth a grëodd yn cael ei drosglwyddo i rywun arall.
- **Yr olwg cynnyrch neu wasanaeth** sy'n ariannu tîm parhaus i adeiladu a rhedeg gwasanaeth dros ei oes. Cost yw cost sefydlog y tîm a'i lwyfannau, a'r cwestiwn yw a yw'r gwerth a gyflawnir yn cyfiawnhau'r gwariant hwnnw. Mae hyn yn cyd-fynd â nodau ystwyth cyflawni parhaus ac adeiladu o amgylch pobl gymhellol sy'n adnabod y gwasanaeth. Mae hefyd yn cyd-fynd â phryder ITIL â chost gwasanaeth drwy gydol ei gylch bywyd.

Gall mesurau cost gamarwain mor hawdd ag y maent yn hysbysu. Mae tair problem yn codi dro ar ôl tro.

- **Mae dyrannu yn ddewis.** Rhaid lledaenu costau a rennir, megis rhwydweithiau, diogelwch, a llwyfannau, ar draws gwasanaethau yn ôl rhyw reol, ac mae rheolau gwahanol yn rhoi atebion gwahanol. Dylai [dyrannu costau](https://en.wikipedia.org/wiki/Cost_allocation) ddilyn [gyrrwr cost](https://en.wikipedia.org/wiki/Cost_driver), ffactor sy'n achosi i gost newid, megis defnyddwyr, ceisiadau, neu storfa. Mae [costio ar sail gweithgarwch](https://en.wikipedia.org/wiki/Activity-based_costing) yn ffurfioli hyn drwy olrhain costau i'r gweithgareddau sy'n bwyta adnoddau.
- **Mae costau sefydlog a newidiol yn ymddwyn yn wahanol.** Mae [cost sefydlog](https://en.wikipedia.org/wiki/Fixed_cost) yn aros yr un fath wrth i gyfaint newid o fewn amrediad, ac mae [cost newidiol](https://en.wikipedia.org/wiki/Variable_cost) yn codi gyda chyfaint. Mae [cost uned](https://en.wikipedia.org/wiki/Unit_cost) gwasanaeth yn disgyn wrth i gyfaint dyfu pan fo costau sefydlog yn dominyddu, patrwm sy'n gysylltiedig ag [arbedion maint](https://en.wikipedia.org/wiki/Economies_of_scale). Mae edrych ar gost uned heb wybod pa gostau sy'n sefydlog yn arwain at ragolygon anghywir.
- **Nid gwerth yw cost.** Nid y gwasanaeth rhataf yw'r gorau. Mae cost fesul tocyn yn disgyn os ydych yn cau tocynnau heb ddatrys problemau. Mae angen cydymaith ansawdd neu ganlyniad ar fesurau cost, y mae rhannau cynharach y llyfr hwn yn eu darparu (gweler pwnc 6.5, Sylweddoli gwerth a chanlyniadau busnes).

Mae dosbarthiadau cyfrifyddu yn bwysig hefyd. Mae [gwariant cyfalaf](https://en.wikipedia.org/wiki/Capital_expenditure) yn prynu asedau sy'n para, ac mae treuliau gweithredol yn cwmpasu rhedeg o ddydd i ddydd. Mae gwasanaethau cwmwl a thanysgrifiad yn symud gwariant o'r math cyntaf i'r ail, sy'n newid sut mae cyllidebau'n edrych heb newid yr hyn y mae'r gwasanaethau'n ei gostio. Mae cydweithwyr cyllid yn berchen ar y rheolau hyn, a dylid adeiladu'r metrigau yma gyda hwy.

Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol yn gryf i arian. Mae targed cost yn tueddu i gynhyrchu torri costau lle mae'n haws cuddio'r niwed, megis cynnal a chadw, ansawdd, ac amser dysgu. Mae'r mesurau isod felly wedi'u paru ag dangosyddion iechyd gwasanaeth a gyda datganiad o'r rheolau dyrannu (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Egwyddorion allweddol

- **Gwnewch reolau dyrannu yn eglur ac wedi'u clymu i yrwyr.** Mae pobl yn derbyn rhifau y gallant eu dilyn.
- **Gwahanwch gost sefydlog oddi wrth gost newidiol.** Mae rhagolygon yn dibynnu ar ba un yw pa un.
- **Adroddwch gost uned gyda'i chydymaith ansawdd.** Dim ond os yw'r gwasanaeth yn dal yn dda y mae rhatach yn well.
- **Defnyddiwch amrediadau a thueddiadau, nid manylder ffug.** Mae dyrannu yn cynnwys barn.
- **Ariannwch dimau parhaus o amgylch gwasanaethau lle gallwch.** Mae timau sefydlog yn dysgu ac yn gwella; mae rhai dros dro yn chwalu.
- **Rhannwch gostau gyda'r bobl a all eu newid.** Dim ond bai yw gwelededd heb ddylanwad.
- **Peidiwch byth â graddio pobl neu dimau yn ôl cost.** Mae gwasanaethau'n wahanol, a'u cyfyngiadau hefyd.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cost fesul gwasanaeth | Cost flynyddol lwythog lawn gwasanaeth a enwir, gan ddefnyddio rheolau dyrannu dogfennedig | costau uniongyrchol + costau a rennir a ddyrannwyd i'r gwasanaeth yn y cyfnod | arian y flwyddyn | Cyfriflyfr cyffredinol, data canolfan gost, biliau cwmwl a thrwydded, data amser neu weithgarwch | Rheoli ariannol gwasanaeth; rheoli catalog gwasanaethau | Cost tîm cynnyrch parhaus a'i lwyfannau | Chwarterol |
| Cost uned | Cost fesul uned o rywbeth y mae defnyddwyr yn ei werthfawrogi, megis fesul defnyddiwr gweithredol, fesul trafodiad, neu fesul cais a ddatryswyd | cost fesul gwasanaeth yn y cyfnod / unedau a gyflawnwyd yn y cyfnod | arian fesul uned | Cost fesul gwasanaeth a data cyfaint | Rheoli ariannol gwasanaeth; rheoli lefel gwasanaeth | Cost i wasanaethu fesul canlyniad | Chwarterol |
| Cwmpas dyrannu | Cyfran gwariant TG a briodolir i wasanaeth a enwir neu a ddatgenir fel gorbenion a rennir | gwariant a briodolir i wasanaethau neu orbenion datganedig / cyfanswm gwariant TG | canran | Cyfriflyfr cyffredinol a model dyrannu | Rheoli ariannol gwasanaeth | Cost weladwy gwaith pob tîm | Chwarterol |
| Rhaniad rhedeg, newid, a gwella | Cyfran gwariant neu gapasiti sy'n mynd i redeg gwasanaethau, eu newid, a'u gwella | gwariant neu gapasiti ym mhob categori / cyfanswm | canran | Tagiau cyfriflyfr, mathau gwaith traciwr gwaith | Rheoli ariannol gwasanaeth; gwelliant parhaus | Dyrannu capasiti yn ôl math o waith | Chwarterol |
| Amrywiant rhagolwg | Y gwahaniaeth rhwng rhagolwg a chost wirioneddol, fesul gwasanaeth | (gwirioneddol llai rhagolwg) / rhagolwg | canran | Log rhagolygon a chyfriflyfr | Rheoli ariannol gwasanaeth | Cywirdeb rhagolygon | Misol |
| Cyfradd anghydfod showback | Cyfran yr eitemau llinell showback neu godi tâl yn ôl y bu perchnogion gwasanaeth yn eu herio ac a newidiwyd | eitemau llinell a newidiwyd ar ôl her / eitemau llinell a gyhoeddwyd | canran | System showback a log anghydfodau | Rheoli ariannol gwasanaeth | Ôl-sylliad ar gostau a rennir | Chwarterol |
| Cyfran ariannu tîm parhaus | Cyfran gwariant cyflawni a gweithrediadau a ariennir fel capasiti tîm sefydlog ar gyfer gwasanaeth | gwariant ar dimau gwasanaeth parhaus / cyfanswm gwariant cyflawni a gweithrediadau | canran | Cyfriflyfr a siart sefydliad | Rheoli ariannol gwasanaeth; newid sefydliadol | Timau wedi'u hadeiladu o amgylch gwasanaethau a phobl gymhellol | Blynyddol |

Diffiniwch y cyfnod, yr arian, a'r mathau o gost ar gyfer pob mesur, a chofnodwch y rheolau dyrannu yn y gofrestr metrigau: pa gostau sy'n uniongyrchol, pa rai a rennir, a pha yrrwr sy'n lledaenu pob cost a rennir. Mae cost uned angen uned y mae defnyddwyr a'r tîm ill dau yn ei derbyn, ac mae diffiniad yr uned yn aros yn sefydlog dros y duedd. Mae amrywiant rhagolwg yn cymharu â'r rhagolwg fel yr oedd ar ddechrau'r cyfnod, nid un diwygiedig.

## Argymhellion

### Adeiladwch y darlun cost

**1. Dechreuwch gyda'r cyfriflyfr a'r rhestr gwasanaethau.** Cymerwch gyfanswm gwariant TG o'r cyfriflyfr, rhestrwch y gwasanaethau o'r catalog, a phenderfynwch pa gyfran o bob cost sy'n perthyn i ba wasanaeth. Dechreuwch gyda'r costau uniongyrchol hawdd: y tîm sy'n rhedeg y gwasanaeth, ei drwyddedau, ei westeio. Daw costau a rennir yn ail. Mae darlun bras cyntaf, a rennir gyda'r bobl dan sylw, yn well na un manwl a adeiladwyd yn breifat.

**2. Dewiswch yrwyr cost y gall pobl eu dilyn.** Ar gyfer pob cost a rennir, dewiswch yrrwr sydd wedi'i glymu i'r hyn sy'n ei hachosi mewn gwirionedd: defnyddwyr ar gyfer llwyfan cydweithio, storfa ar gyfer llwyfan data, ceisiadau ar gyfer porth, dyfeisiau ar gyfer rheoli pwyntiau terfyn. Esboniwch y rheol mewn un frawddeg. Mae gyrwyr na all neb eu gwirio yn gwahodd dadleuon, ac mae gyrwyr na all neb ddylanwadu arnynt yn gwneud showback yn ddiystyr.

**3. Gwahanwch gost sefydlog a newidiol.** Ar gyfer pob gwasanaeth, marciwch pa gostau sy'n symud gyda chyfaint a pha rai nad ydynt. Mae gan wasanaeth sy'n gost sefydlog gan mwyaf gost uned sy'n disgyn gyda thwf, ac nid yw un sy'n newidiol gan mwyaf yn gwneud hynny. Y rhaniad hwn yw sail unrhyw ragolwg ac unrhyw sgwrs am raddio.

**4. Dangoswch amrediadau lle mae dyrannu'n cynnwys barn.** Os yw dwy reol ddyrannu resymol yn rhoi canlyniadau sy'n 20 y cant yn wahanol, dangoswch y ddwy neu dangoswch yr amrediad. Mae un rhif manwl o reol fympwyol yn cychwyn ymladd na all'r data ei setlo.

### Mesurwch fesul uned, gydag ansawdd ochr yn ochr

**5. Dewiswch uned sy'n adlewyrchu gwerth.** Gall cost fesul defnyddiwr gweithredol, fesul trafodiad cyflawn, fesul cais a ddatryswyd, neu fesul defnyddio i gyd fod yn ddefnyddiol. Dewiswch yr uned sy'n cysylltu â phwrpas y gwasanaeth, cytunwch arni gyda pherchennog y gwasanaeth, a'i chadw'n sefydlog. Mae cost fesul tocyn yn uned beryglus, oherwydd ei bod yn disgyn pan gaeir tocynnau'n gynnar ac yn codi pan atelir tocynnau gyda hunanwasanaeth da.

**6. Pâr bob cost uned â mesur ansawdd.** Dangoswch gost uned wrth ymyl argaeledd, bodlonrwydd, neu gyfradd ailagor. Mae cost uned sy'n disgyn tra bo ansawdd yn disgyn yn drosglwyddo cost i ddefnyddwyr. Mae cost uned sy'n dal yn gyson tra bo ansawdd yn codi yn ennill. Cyflwynwch hwy gyda'i gilydd neu ddim o gwbl (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

**7. Olrheiniwch y duedd, nid y lefel yn unig.** Mae cost uned dros amser, gyda nodiadau ar yr hyn a newidiodd, yn dweud stori na all un chwarter. Marciwch newidiadau mewn rheolau dyrannu neu unedau ar y siart fel na chaiff tueddiadau eu camddarllen. Cymharwch wasanaeth â'i hanes ei hun cyn ei gymharu ag eraill.

### Rhannwch gost gyda'r bobl a all ei newid

**8. Defnyddiwch showback cyn codi tâl yn ôl.** Mae showback yn adrodd costau i berchnogion gwasanaeth heb eu bilio, ac mae codi tâl yn ôl yn trosglwyddo'r gost i'w cyllidebau. Dechreuwch gyda showback, sy'n adeiladu dealltwriaeth ac ymddiriedaeth, a symudwch i godi tâl yn ôl yn unig lle mae'n newid penderfyniadau a bod y rheolau wedi'u derbyn. Mae'r ddau yn dibynnu ar reolau y mae perchnogion yn helpu i'w siapio.

**9. Gadewch i berchnogion herio'r rhifau.** Mae proses anghydfod yn arwydd o iechyd, cyn belled â'i bod yn gyflym a bod ei chanlyniadau wedi'u logio. Adolygwch y gyfradd anghydfod: mae cyfradd uchel yn dangos rheolau nad oes neb yn ymddiried ynddynt, a gall sero ddangos nad oes neb yn darllen yr adroddiadau. Trwsiwch y rheol, nid yr eitem llinell yn unig.

**10. Adolygwch gost gyda'r tîm gwasanaeth cyfan.** Cynhwyswch beirianwyr a gweithredwyr yn ogystal â rheolwyr mewn adolygiad cost rheolaidd. Mae pobl sy'n rhedeg gwasanaeth yn aml yn gwybod ble mae gwastraff yn cuddio: amgylcheddau segur, adnoddau rhy fawr, offer dyblyg. Trinwch eu canfyddiadau fel gwelliannau i'w rhannu ac nid fel beirniadaeth.

### Ariannwch ar gyfer sefydlogrwydd a dysgu

**11. Ffafriwch dimau parhaus wedi'u hariannu o amgylch gwasanaethau.** Lle bo modd, ariannwch dîm sefydlog i fod yn berchen ar wasanaeth dros amser, yn lle cydosod tîm prosiect a'i chwalu. Mae timau parhaus yn cronni gwybodaeth, yn adeiladu gwell perthnasoedd â defnyddwyr, ac yn cario cost penderfyniadau gwael. Mae hyn yn adlewyrchu'r nod ystwyth o adeiladu o amgylch unigolion cymhellol a phryder ITIL â chylch bywyd gwasanaeth. Mae'r newid mewn ariannu yn benderfyniad sefydliadol sylweddol, felly cynhwyswch gyllid ac arweinyddiaeth yn gynnar. Mae llyfr Mik Kersten, *Project to Product*, yn trafod y newid hwn.

**12. Neilltuwch gapasiti ar gyfer gwella.** Mae angen ariannu gwarchodedig ar gostau sy'n lleihau costau'r dyfodol, megis awtomeiddio, trwsio dibynadwyedd, a chael gwared ag offer dyblyg, neu maent yn colli i waith nodweddion bob tro. Olrheiniwch y gyfran gwella yn y rhaniad rhedeg, newid, a gwella, ac edrychwch ar yr enillion y mae'n eu cynhyrchu (gweler pwnc 4.6, Dyled dechnegol a gwallau hysbys).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cost fesul gwasanaeth | Symud costau i wasanaethau eraill drwy'r rheol ddyrannu; gadael costau anffafriol heb eu dyrannu | Cwmpas dyrannu; rheolau wedi'u cyhoeddi a'u hadolygu gan berchnogion; cymharu cyfansymiau â'r cyfriflyfr |
| Cost uned | Codi'r enwadur gydag unedau gwerth isel; torri ansawdd i dorri cost; newid yr uned | Mesur cydymaith ansawdd; diffiniad uned sefydlog; gwiriadau canlyniad |
| Cwmpas dyrannu | Datgan symiau mawr fel gorbenion a rennir i osgoi priodoli | Adrodd cyfran gorbenion; adolygu'r hyn a ddatgenir fel gorbenion a pham |
| Rhaniad rhedeg, newid, a gwella | Ail-labelu gwaith rhedeg fel gwelliant neu newid; tagio ar ddiwedd y cyfnod | Tagio wrth dderbyn; samplu eitemau am fath; cymharu â data digwyddiadau a cheisiadau |
| Amrywiant rhagolwg | Padio rhagolygon; diwygio'r rhagolwg yn hwyr yn y cyfnod | Logio'r rhagolwg ar y dechrau; cymharu amrediadau rhagolwg â gwirioneddol dros amser |
| Cyfradd anghydfod showback | Annog anghydfodau; newid eitemau llinell heb newid rheol | Adolygu anghydfodau a chanlyniadau; gwirio a newidiodd rheolau ar ôl anghydfodau dro ar ôl tro |
| Cyfran ariannu tîm parhaus | Ailenwi prosiectau fel timau parhaus heb newid ariannu na pherchnogaeth | Gwirio sefydlogrwydd tîm a pherchnogaeth dros amser; mesurau iechyd gwasanaeth |

Mae darlleniad iach yn ddarlun cost y mae perchnogion gwasanaeth yn ei adnabod, costau uned sy'n symud gydag achosion esboniedig tra bo ansawdd yn dal, gwallau rhagolwg sy'n crebachu, a gwaith gwella sy'n ymddangos yn y rhifau.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Ariannu prosiect | Cwmpas a diwedd clir | Timau'n chwalu; gwybodaeth yn cael ei cholli; gwasanaeth yn cael ei drosglwyddo |
| Ariannu tîm parhaus | Dysgu, perchnogaeth, cost sefydlog | Angen ymddiriedaeth a phroses gynllunio aeddfed; gall cwmpas ddrifftio |
| Showback | Adeiladu dealltwriaeth gydag ychydig o ffrithiant | Gellir ei anwybyddu os nad oes neb yn atebol |
| Codi tâl yn ôl | Creu atebolrwydd a signalau pris | Anghydfodau; cymhellion i osgoi gwasanaethau a rennir |
| Rheolau dyrannu syml | Hawdd eu hesbonio | Gallant fod yn fras |
| Dyrannu ar sail gweithgarwch | Mwy cywir | Costus i'w gynnal; manylder ffug |
| Cost fesul uned | Cysylltu cost â gwerth | Sensitif i ddewis uned a chyfaint |
| Cyfanswm cost yn unig | Syml | Cuddio tueddiadau ac effeithlonrwydd |

Yr ateb pragmatig yw dechrau gyda rheolau syml a showback, ychwanegu manylder lle mae penderfyniadau'n dibynnu arno, a symud tuag at ariannu timau parhaus wrth i ymddiriedaeth ac aeddfedrwydd cynllunio dyfu. Cadwch fesur ansawdd wrth ymyl pob mesur cost.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth mae ein prif wasanaeth yn ei gostio bob blwyddyn, a phwy fyddai'n cytuno â'r rhif?**
Gofynnwch i gyllid a pherchennog y gwasanaeth gynhyrchu amcangyfrifon annibynnol. Cymharwch hwy. Dylai'r hwylusydd nodi lle maent yn wahanol a pham: rheolau dyrannu, cwmpas, neu gostau coll. Cytunwch ar un rheol ddogfennedig ar gyfer y chwarter nesaf.

**2. Beth yw'r uned y byddai ein defnyddwyr yn ei hadnabod, a beth mae'n ei gostio?**
Rhestrwch unedau posibl ar gyfer y gwasanaeth a dewiswch un. Cyfrifwch ei chost a thrafodwch beth fyddai'n peri iddi godi neu ddisgyn. Gofynnwch beth mae'r uned yn ei guddio. Ychwanegwch fesur ansawdd i eistedd wrth ei hymyl.

**3. Pa rai o'n costau a rennir sy'n cael eu lledaenu gan reol na all neb ei hesbonio?**
Rhestrwch y costau a rennir a'u gyrwyr. Ar gyfer pob un, gofynnwch a yw'r gyrrwr yn ymwneud â'r hyn sy'n achosi'r gost. Amnewidiwch un nad yw. Trafodwch pwy all ddylanwadu ar y gyrrwr, gan mai bai yn unig yw data cost heb ddylanwad.

**4. Faint o'n capasiti sy'n mynd i redeg, newid, a gwella'r gwasanaeth?**
Adolygwch chwarter o waith gorffenedig yn ôl math, fel yn y pwnc cynllunio (gweler pwnc 2.5, Metrigau rhagweld a chynllunio cyflawni). Cymharwch â'r hyn y mae arweinwyr yn ei feddwl. Penderfynwch beth ddylai'r gyfran gwella fod, a beth fyddai'n ei gwarchod.

**5. Beth fyddai'n newid pe baem yn ariannu tîm parhaus ar gyfer y gwasanaeth hwn?**
Dychmygwch yr ariannu, y berchnogaeth, a'r mesurau. Gofynnwch pa risgiau a manteision y byddai cyllid, y tîm, a defnyddwyr yn eu gweld. Nodwch un cam tuag ato, megis rhestr tîm sefydlog a golwg cyllideb gwasanaeth a rennir.

**6. Pryd achosodd rhif cost ddadl ddiwethaf, a beth a ddysgasom?**
Cofiwch anghydfod showback neu gyllideb. A oedd yn ymwneud â'r rhif neu â'r rheol? Trafodwch sut y byddai rheol gliriach neu broses anghydfod well wedi helpu.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn gweld cost fel pris eu hamser, eu llwyfannau, a'u hoffer. Dylent wybod cost eu gwasanaeth a'i gost uned, gweld gwastraff yn gynnar, a defnyddio'r rhifau i ddadlau dros waith gwella ac ariannu sefydlog. Dylent osgoi optimeiddio'r rhif drwy dorri ansawdd, a dylent herio rheolau dyrannu na allant eu dilyn.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn cario cost rhedeg gwasanaethau ac yn aml yn dal y llwyfannau a rennir. Dylent gyhoeddi sut mae costau a rennir yn cael eu gyrru, ateb cwestiynau showback, a rhannu syniadau arbed costau o brofiad. Dylent ddisgwyl pwysau i dorri costau rhedeg, a dylent ddangos ochr ansawdd a risg unrhyw doriad.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gofyn am gost a gwerth ac yn gosod y model ariannu. Dylent ofyn am gostau uned gyda chydymaith ansawdd, cefnogi ariannu timau parhaus lle mae'n ffitio, ac osgoi graddio timau yn ôl cost. Dylai llywodraethu ddisgwyl i reolau dyrannu gael eu dogfennu, eu hadolygu, a'u cymhwyso'n gyson, a dylai edrych ar y gyfran gwella.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr sy'n talu drwy godi tâl yn ôl eisiau deall y bil a dylanwadu arno. Mae eraill yn gweld cost yn ansawdd ac ystod y gwasanaethau a gynigir. Mae costau uned clir a llais yn y cyfaddawd rhwng pris a gwasanaeth yn gwneud y berthynas yn iachach, ac mae eu hadborth yn rhan o'r cydymaith ansawdd ar gyfer pob cost uned.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ganolog prifysgol o faint canolig yn darparu tua 25 o wasanaethau i 18,000 o fyfyrwyr a staff. Mae'r rhifau isod yn enghreifftiol.

Mae'r swyddfa gyllid eisiau gwybod pam y tyfodd cyllideb TG yn gyflymach na chofrestru. Mae partner cyllid TG yn adeiladu darlun cost gyda'r perchnogion gwasanaeth. O gyfanswm gwariant TG, mae 72 y cant yn uniongyrchol i wasanaethau a enwir, mae 18 y cant yn llwyfannau a rennir (rhwydwaith, hunaniaeth, offer diogelwch) a ddyrennir yn ôl gyrwyr, ac mae 10 y cant yn orbenion datganedig. Cwmpas dyrannu felly yw 90 y cant. Mae'r llwyfan dysgu yn costio'r hyn sy'n cyfateb i US$41 fesul defnyddiwr gweithredol y flwyddyn, i fyny o US$36, tra bo bodlonrwydd ac argaeledd yn gyson. Mae'r ddesg gwasanaeth yn dangos cost fesul cais a ddatryswyd sydd wedi disgyn 12 y cant dros ddwy flynedd. Mae perchennog y gwasanaeth yn nodi bod y gostyngiad wedi cyd-daro â chynnydd mewn tocynnau a ailagorwyd o 4 i 9 y cant, ac mae'r cydymaith ansawdd yn dangos bod yr arbediad yn rhannol yn drosglwyddiad ymdrech i ddefnyddwyr.

Mae'r tîm yn gwneud pedwar newid. Mae'n cyhoeddi'r rheolau dyrannu ar un dudalen, gyda gyrwyr ar gyfer pob cost a rennir a dyddiad yr adolygiad diwethaf. Mae'n amnewid cost fesul cais gyda chost fesul cais a ddatryswyd ar y cyswllt cyntaf, wedi'i dangos wrth ymyl y gyfradd ailagor. Mae'n symud y llwyfan dysgu a'r gwasanaeth hunaniaeth i ariannu fel timau parhaus gyda rhestr sefydlog. Mae'n neilltuo 15 y cant o gapasiti ar gyfer gwaith gwella ar gyfer y ddau wasanaeth mwyaf, ac yn olrhain yr hyn y mae'r gwaith yn ei ddychwelyd.

Flwyddyn yn ddiweddarach, cost uned y llwyfan dysgu yw US$38 wrth i ddefnydd dyfu, mae'r gyfradd ailagor wedi disgyn i 5 y cant, ac mae amrywiant rhagolwg y ddau wasanaeth tîm parhaus o fewn 4 y cant, o'i gymharu ag 11 y cant ar gyfer gwaith a ariannwyd gan brosiect. Mae cyfradd anghydfod showback wedi disgyn o 22 y cant i 8 y cant ar ôl newid dwy reol. Mae'r swyddfa gyllid yn gofyn am darged blynyddol o 5 y cant o ostyngiad cost uned ar gyfer pob gwasanaeth. Mae'r partner cyllid TG yn cynnig targedau dim ond lle mae gan wasanaeth lifer effeithlonrwydd clir, wedi'i ddangos gyda'r cydymaith ansawdd, ac yn esbonio y byddai targed cyffredinol yn gwobrwyo torri cynnal a chadw. Cofnodir y penderfyniad, gydag adolygiad o'r rheolau bob blwyddyn.

## Y golwg fesul sector

**Busnes newydd.** Cwmwl, offer, a chyflogau yw'r gost gan mwyaf. Olrheiniwch y prif wariant cwmwl ac offer fesul gwasanaeth o'r dechrau, tagiwch adnoddau, a chyfrifwch gost fesul cwsmer gweithredol yn gynnar. Gwrthwynebwch ddyrannu cywrain, gan fod y tîm yn fach.

**Busnes bach.** Mae llond llaw o werthwyr ac un neu ddau o bobl yn gwneud y rhan fwyaf o'r costau. Cadwch ddarlun blynyddol syml, cost fesul defnyddiwr ar gyfer y prif offer, a golwg o'r hyn y telir amdano ac na chaiff ei ddefnyddio. Gofynnwch i gyflenwyr am filiau manwl.

**Menter fawr.** Mae graddfa yn dod â llwyfannau a rennir a llawer o unedau busnes. Defnyddiwch fodel dyrannu dogfennedig gyda gyrwyr, proses anghydfod, a phartner cyllid wedi'i fewnosod mewn TG. Gochelwch rhag codi tâl yn ôl sy'n annog peidio â defnyddio gwasanaethau a rennir sydd o fudd i bawb.

**Llywodraeth a'r sector cyhoeddus.** Mae cyllidebau'n flynyddol ac wedi'u priodoli, gyda rheolau ar wariant cyfalaf a gweithredol, a gall tryloywder cost fod yn ofynnol. Alinio costio gwasanaeth â rheolau cyllid cyhoeddus, dogfennwch ddulliau dyrannu ar gyfer archwilio, ac ystyriwch ariannu aml-flwyddyn ar gyfer timau gwasanaeth parhaus lle mae'r gyfraith yn caniatáu. Adroddwch gostau uned gyda mesurau canlyniad (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y costau yw'r ymdrech i adeiladu'r model dyrannu, amser cyllid a pherchnogion gwasanaeth i gytuno ar reolau, a'r gwaith arferol o adrodd misol a thrin anghydfodau. Mae gan y rhan fwyaf o sefydliadau y cyfriflyfr a data bilio cwmwl eisoes. Gall model bach mewn taenlen ddechrau'r gwaith, a daw offer yn ddiweddarach.

Yr enillion yw penderfyniadau gwell a llai o ddadleuon. Mae timau sy'n gweld eu costau yn dod o hyd i wastraff: amgylcheddau segur, trwyddedau nas defnyddir, ac offer dyblyg. Gall arweinwyr gymharu opsiynau gan wybod y gyrwyr cost, cynllunio twf gyda chostau sefydlog a newidiol wedi'u gwahanu, ac ariannu gwelliant gyda thystiolaeth o'i elw. Adeiladwch yr achos o'ch rhifau eich hun: y gwastraff a ganfuwyd yn yr adolygiad cyntaf, yr amser a dreuliwyd mewn anghydfodau cyllideb, a'r amrywiant rhagolwg cyn ac ar ôl. Osgowch hawliadau allanol am wariant TG cyfartalog fel canran o refeniw oni allwch olrhain y ffynhonnell a'r dull, gan fod diffiniadau'n amrywio'n fawr. Mae pwnc olaf y rhan hon yn casglu'r achos ariannol mewn un lle (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Lledaenu cost a rennir yn gyfartal.** Mae'n cosbi defnyddwyr bach ac yn cuddio gyrwyr go iawn. Defnyddiwch yrwyr sy'n adlewyrchu defnydd.
- **Cost fesul tocyn fel targed.** Mae'n gwobrwyo cau tocynnau'n gynnar. Defnyddiwch gost fesul cais a ddatryswyd gyda chydymaith ansawdd.
- **Manylder heb ymddiriedaeth.** Mae model hardd nad yw perchnogion yn ei gredu yn ddiwerth. Adeiladwch reolau gyda hwy.
- **Codi tâl yn ôl yn gyntaf.** Mae'n cychwyn ymladd cyn bod dealltwriaeth. Dechreuwch gyda showback.
- **Torri'r hyn sy'n anodd ei weld.** Torrir gwaith cynnal a chadw, dysgu, a dibynadwyedd yn gyntaf ac mae'n costio mwy yn ddiweddarach. Gwarchodwch gapasiti gwella.
- **Cymharu timau yn ôl cost.** Mae gwasanaethau'n wahanol o ran cyfyngiadau a risg. Cymharwch bob un â'i hanes ei hun.
- **Newid y rheolau a'r duedd ar unwaith.** Marciwch newidiadau rheol ar siartiau ac ailddatganwch hanes lle bo modd.
- **Trin cost fel eiddo cyllid.** Mae'r bobl sy'n rhedeg y gwasanaeth yn gwybod o ble mae cost yn dod. Cynhwyswch hwy.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Darlun cost | Cyllideb yn ôl adran yn unig | Cost fesul gwasanaeth ar gyfer ychydig o wasanaethau, dyrannu bras | Rheolau dyrannu dogfennedig gyda gyrwyr; cwmpas wedi'i olrhain | Costau uned gyda chymdeithion ansawdd; rhaniad sefydlog a newidiol | Costau wedi'u rhannu'n dryloyw â phartneriaid busnes; gyrwyr wedi'u dylanwadu ar y cyd |
| Defnyddio cost | Toriadau cost yn ôl canran | Showback i rai perchnogion | Showback ar gyfer pob gwasanaeth; proses anghydfod | Amrywiant rhagolwg a thueddiadau cost uned yn gyrru penderfyniadau | Cost, ansawdd, a gwerth wedi'u cyfaddawdu'n agored ar draws y portffolio |
| Model ariannu | Cyllidebau prosiect blynyddol | Rhai timau sefydlog | Timau parhaus ar gyfer gwasanaethau allweddol | Ariannu'n dilyn canlyniadau gwasanaeth a dysgu | Ariannu hyblyg ar draws gwasanaethau gyda buddsoddiad llwyfan a rennir |

## Rhestr wirio

- [ ] Priodolir cyfanswm gwariant TG i wasanaethau neu orbenion datganedig, gyda'r cwmpas wedi'i olrhain.
- [ ] Ysgrifennir rheolau dyrannu a gyrwyr a'u hadolygu gyda pherchnogion gwasanaeth.
- [ ] Gwahanir costau sefydlog a newidiol ar gyfer pob prif wasanaeth.
- [ ] Mae costau uned yn defnyddio unedau y cytunwyd arnynt, sefydlog ac yn eistedd wrth ymyl mesurau ansawdd.
- [ ] Logir rhagolygon ar ddechrau'r cyfnod a'u cymharu â gwirioneddol.
- [ ] Mae showback ar gael i bob perchennog gwasanaeth, gyda phroses anghydfod.
- [ ] Adroddir gwariant neu gapasiti rhedeg, newid, a gwella.
- [ ] Gwarchodir cyfran o gapasiti ar gyfer gwella.
- [ ] Marcir newidiadau rheol ac uned ar siartiau tueddiad.
- [ ] Ni raddir unrhyw dîm na pherson yn ôl cost.

## Anogwyr AI

**Cynigiwch yrwyr cost ar gyfer gwasanaethau a rennir.**

```text
Ein gwasanaethau a rennir a'u costau blynyddol yw: [rhestr]. Y gwasanaethau sy'n
eu defnyddio yw: [rhestr], gyda data defnydd ar gael ar gyfer: [rhestr o yrwyr
fel defnyddwyr, ceisiadau, storfa]. Cynigiwch yrrwr cost ar gyfer pob gwasanaeth
a rennir, esboniwch sut i wirio bod y gyrrwr yn adlewyrchu'r hyn sy'n achosi
cost, a disgrifiwch y cyfyngiadau. Peidiwch â dyfeisio costau. Rhestrwch eich
rhagdybiaethau a'r hyn y dylai cyllid ei gadarnhau.
```

**Dyluniwch gost uned a'i chydymaith ansawdd.**

```text
Ar gyfer y gwasanaeth [enw] mewn [math o sefydliad], awgrymwch dair uned bosibl
ar gyfer cost uned (er enghraifft fesul defnyddiwr gweithredol, fesul trafodiad,
fesul cais a ddatryswyd) ac, ar gyfer pob un, mesur ansawdd i'w ddangos wrth ei
hymyl a ffordd y gallai'r pâr gael ei chwarae. Argymhellwch un gyda rhesymau.
Peidiwch â dyfeisio ffigurau. Rhestrwch eich rhagdybiaethau a chwestiynau i
berchennog y gwasanaeth.
```

**Paratowch adolygiad showback.**

```text
Drafftiwch agenda a chrynodeb un dudalen ar gyfer adolygiad showback chwarterol
gyda pherchennog [gwasanaeth]. Data: cost y chwarter hwn [ffigurau], chwarter
blaenorol [ffigurau], cyfaint [ffigurau], mesurau ansawdd [ffigurau], ac
anghydfodau [rhestr]. Cynhwyswch gwestiynau sy'n helpu'r perchennog i ddod o hyd
i wastraff a herio'r dyrannu. Defnyddiwch iaith blaen. Rhestrwch eich
rhagdybiaethau a marciwch unrhyw hawliad sydd angen ei wirio.
```

**Cynlluniwch y newid i ariannu tîm parhaus.**

```text
Ar hyn o bryd rydym yn ariannu gwaith fel prosiectau: [disgrifiwch]. Rydym yn
ystyried ariannu timau parhaus ar gyfer [gwasanaethau]. Amlinellwch y camau, y
wybodaeth y bydd cyllid ac arweinyddiaeth ei heisiau, risgiau, a mesurau i
olrhain a yw'r newid yn helpu (er enghraifft amrywiant rhagolwg, sefydlogrwydd
tîm, cyfran gwella, ac iechyd gwasanaeth). Peidiwch â honni canlyniadau gan
sefydliadau eraill. Rhestrwch eich rhagdybiaethau a phenderfyniadau sydd angen
mewnbwn arweinyddiaeth.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig cost neu economeg uned.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig cost yn datgan ei reol ddyrannu, ei ffordd o chwarae'r system, a'i gydymaith ansawdd.

## Pwyntiau allweddol

- Priodolwch gost i wasanaethau gyda gyrwyr y gall pobl eu dilyn, a dangoswch y rheolau.
- Gwahanwch gost sefydlog oddi wrth gost newidiol, a phârwch bob cost uned â mesur ansawdd.
- Dechreuwch gyda showback a phroses anghydfod, ac ychwanegwch godi tâl yn ôl dim ond os yw'n newid penderfyniadau.
- Ariannwch dimau parhaus o amgylch gwasanaethau lle gallwch, a gwarchodwch gapasiti gwella.
- Adroddwch amrediadau a thueddiadau, a marciwch newidiadau rheol ar y siartiau.
- Peidiwch byth â graddio pobl neu dimau yn ôl cost.

## Cyfeiriadau a darllen pellach

1. Kaplan, R. S., and Anderson, S. R., "Time-Driven Activity-Based Costing," *Harvard Business Review*, 82(11), 2004.
2. Kaplan, R. S., and Cooper, R., *Cost & Effect: Using Integrated Cost Systems to Drive Profitability and Performance*, Harvard Business School Press, 1998.
3. Kersten, M., *Project to Product*, IT Revolution, 2018.
4. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Financial Management*, TSO, 2020.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Cost accounting](https://en.wikipedia.org/wiki/Cost_accounting).
8. Wikipedia, [Cost allocation](https://en.wikipedia.org/wiki/Cost_allocation).
9. Wikipedia, [Cost driver](https://en.wikipedia.org/wiki/Cost_driver).
10. Wikipedia, [Activity-based costing](https://en.wikipedia.org/wiki/Activity-based_costing).
11. Wikipedia, [Fixed cost](https://en.wikipedia.org/wiki/Fixed_cost).
12. Wikipedia, [Variable cost](https://en.wikipedia.org/wiki/Variable_cost).
13. Wikipedia, [Unit cost](https://en.wikipedia.org/wiki/Unit_cost).
14. Wikipedia, [Economies of scale](https://en.wikipedia.org/wiki/Economies_of_scale).
15. Wikipedia, [Capital expenditure](https://en.wikipedia.org/wiki/Capital_expenditure).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
