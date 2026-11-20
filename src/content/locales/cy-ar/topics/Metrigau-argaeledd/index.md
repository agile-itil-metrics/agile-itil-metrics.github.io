# Metrigau argaeledd

**Argaeledd yw cyfran yr amser, neu o geisiadau defnyddwyr, y gwnaeth gwasanaeth yr hyn yr oedd ei angen ar ei ddefnyddwyr, a dim ond yn dweud y gwir pan ddiffiniwch beth mae "i fyny" yn ei olygu o ochr y defnyddiwr, cyfrif toriadau cynlluniedig ac anghynlluniedig ar wahân, a darllen rhifyddeg y nawiau cyn i chi addo un.**

## Crynodeb a chymhelliant

Argaeledd yw'r rhif a ddyfynnir fwyaf mewn rheoli gwasanaethau ac un o'r rhai lleiaf manwl ei ddiffiniad. Mae datganiad megis "roedd y gwasanaeth 99.9 y cant ar gael y mis diwethaf" yn swnio'n union, ac eto mae'n cuddio o leiaf bedwar penderfyniad: beth oedd yn cyfrif fel y gwasanaeth, beth oedd yn cyfrif fel "ar gael", pa oriau oedd dan sylw, a pha doriadau a eithriwyd. Gall dau dîm adrodd ar yr un gwasanaeth yn yr un mis a chyhoeddi ffigurau sy'n wahanol o ran trefn maint heb i'r naill na'r llall wneud camgymeriad rhifyddol.

Mae'r pwnc hwn yn gwneud y penderfyniadau hynny'n eglur. Mae'n ymdrin â chyfrifo amser i fyny ac amser i lawr, argaeledd wedi'i bwysoli gan ddefnyddwyr, toriad cynlluniedig yn erbyn anghynlluniedig, a rhifyddeg y nawiau. Mae'n adeiladu ar ddangosyddion lefel gwasanaeth (SLIau), amcanion lefel gwasanaeth (SLOau), a chyllidebau gwallau (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau) ac ar yr olwg gytundebol o lefelau gwasanaeth (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA). Mae'r pynciau hynny'n dweud sut i ddewis targed. Mae hwn yn dweud sut i gyfrifo'r rhif y cymherir y targed ag ef.

### Termau a ddefnyddir yn y pwnc hwn

- **Argaeledd** yw gallu gwasanaeth i wneud yr hyn sydd ei angen ar ddefnyddwyr pan fo'i angen arnynt, a fynegir fel arfer fel canran dros gyfnod. Disgrifir y cysyniad cyffredinol yn yr erthygl ar [argaeledd uchel](https://en.wikipedia.org/wiki/High_availability).
- **[Amser i lawr](https://en.wikipedia.org/wiki/Downtime)** yw cyfnod pan fo gwasanaeth ddim ar gael. Mae'r pwnc hwn yn defnyddio **toriad** ar gyfer un bennod barhaus o amser i lawr a **diraddio** ar gyfer cyfnod pan fo'r gwasanaeth yn gweithio ond islaw ansawdd y cytunwyd arno.
- **Amser i fyny** yw cyflenwad amser i lawr o fewn y ffenestr fesur. Argaeledd ar sail amser yw amser i fyny wedi'i rannu â chyfanswm yr amser dan sylw.
- **Argaeledd ar sail ceisiadau** yw cyfran y ceisiadau dilys a lwyddodd, felly mae methiant sy'n effeithio ar 5 y cant o geisiadau am awr yn cyfrif fel 5 y cant o draffig awr, nid fel awr lawn o amser i lawr.
- **Mae argaeledd wedi'i bwysoli gan ddefnyddwyr** yn ymestyn yr olwg ar sail ceisiadau drwy bwyso methiannau yn ôl nifer neu bwysigrwydd y defnyddwyr yr effeithir arnynt, er enghraifft drwy gyfrif sesiynau neu deithiau a fethodd yn lle ceisiadau crai.
- Mae **cytundeb lefel gwasanaeth (SLA)** yn ymrwymiad i gwsmer, ac mae **amcan lefel gwasanaeth (SLO)** yn darged mewnol ar gyfer dangosydd. Mae'r erthyglau ar y [cytundeb lefel gwasanaeth](https://en.wikipedia.org/wiki/Service-level_agreement) a'r [amcan lefel gwasanaeth](https://en.wikipedia.org/wiki/Service-level_objective) yn rhoi diffiniadau cyffredinol.
- Mae **amser i lawr cynlluniedig** yn doriad a gyhoeddir ymlaen llaw ac a gymeradwyir drwy alluogi newid. **Amser i lawr anghynlluniedig** yw popeth arall. Mae'r ffin rhyngddynt yn un o'r llinellau mwyaf dadleuol mewn adrodd argaeledd.
- **[Amser cymedrig rhwng methiannau](https://en.wikipedia.org/wiki/Mean_time_between_failures) (MTBF)** yw'r amser gweithredu cyfartalog rhwng toriadau, ac **[amser cymedrig i atgyweirio](https://en.wikipedia.org/wiki/Mean_time_to_repair)** yw'r amser cyfartalog i adfer. Cyfartaleddau yw'r ddau, felly mae'r llyfr hwn yn eu darllen fel dosbarthiadau (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).
- Mae **[monitro synthetig](https://en.wikipedia.org/wiki/Synthetic_monitoring)** yn defnyddio stilwyr sgriptiedig sy'n ymddwyn fel defnyddiwr ac yn adrodd llwyddiant neu fethiant. Mae **[monitro defnyddwyr go iawn](https://en.wikipedia.org/wiki/Real_user_monitoring)** yn cofnodi profiad defnyddwyr gwirioneddol wrth iddynt ddefnyddio'r gwasanaeth.
- **[ITIL](https://en.wikipedia.org/wiki/ITIL)** yw'r fframwaith mwyaf adnabyddus ar gyfer rheoli gwasanaethau TG. Yn ITIL 4, mae'r arfer rheoli argaeledd yn ymwneud â sicrhau bod gwasanaethau'n cyflawni lefelau argaeledd y cytunwyd arnynt, ac mae'n gweithio'n agos gyda monitro a rheoli hysbysiadau, rheoli digwyddiadau, a rheoli parhad gwasanaeth.

### Pam nad yw un rhif byth yn ddigon

Mae deg toriad o bedwar munud yr un ac un toriad o ddeugain munud yn cynhyrchu'r un cyfanswm amser i lawr, ac eto maent yn teimlo'n wahanol i ddefnyddwyr ac yn galw am ymatebion gwahanol. Mae'r patrwm cyntaf yn pwyntio at wasanaeth bregus. Mae'r ail yn pwyntio at ganfod neu adfer araf. Am y rheswm hwnnw daw'r metrigau yma fel set fach, pob un gyda rheilen warchod, fel y gall tîm drafod argaeledd yn onest heb gystadlu am y nifer fwyaf o nawiau.

### Sut mae'r golygon ITIL ac ystwyth yn wahanol

Yn ITIL, mae argaeledd yn briodwedd a reolir o wasanaeth, y cytunir arni gyda'r cwsmer ac yr adroddir arni gan reoli lefel gwasanaeth yn erbyn targed a nodwyd, gydag oriau gwasanaeth clir ac eithriadau megis cynnal a chadw wedi'i gynllunio.

Mewn arfer ystwyth a pheirianneg dibynadwyedd safleoedd (SRE), mae argaeledd yn un SLI ymhlith sawl un, wedi'i gymharu ag SLO. Mae llyfr *Site Reliability Engineering* Google yn dweud bod argaeledd ar sail amser yn addas ar gyfer un system, tra bo cyfradd llwyddiant ceisiadau yn addas ar gyfer gwasanaethau dosbarthedig sydd yn rhannol i fyny bob amser. Mae hefyd yn dweud bod 100 y cant bron byth yn darged cywir, oherwydd bod cost pob naw ychwanegol yn codi'n serth.

Defnyddiwch ddisgyblaeth ITIL cwmpas, oriau, ac eithriadau y cytunwyd arnynt i ddiffinio'r enwadur. Defnyddiwch ddisgyblaeth SRE dangosyddion sy'n canolbwyntio ar y defnyddiwr a chyllidebau gwallau i ddiffinio'r rhifiadur ac i benderfynu beth i'w wneud â'r canlyniad.

## Egwyddorion allweddol

- **Diffiniwch "ar gael" o ochr y defnyddiwr.** Mae gwasanaeth sy'n ateb gwiriadau iechyd tra na all defnyddwyr fewngofnodi i lawr ar gyfer y bobl sy'n bwysig.
- **Ysgrifennwch yr enwadur i lawr.** Nodwch ffin y gwasanaeth, yr oriau dan sylw, y parth amser, a'r ffenestr fesur cyn i chi gyfrifo unrhyw beth.
- **Cyfrwch doriadau cynlluniedig ac anghynlluniedig ar wahân.** Adroddwch y ddau, gyda'i gilydd, a pheidiwch byth â gadael i un guddio y tu mewn i'r llall.
- **Ffafriwch fesurau ar sail ceisiadau ac wedi'u pwyso gan ddefnyddwyr ar gyfer gwasanaethau dosbarthedig.** Nid yw methiant rhannol yn amser i fyny llawn nac yn amser i lawr llawn.
- **Trowch nawiau yn funudau.** Dim ond pan all pobl ddweud faint o funudau o fethiant y mis y mae'n eu caniatáu y deellir targed.
- **Dewiswch y nifer o nawiau sydd eu hangen ar ddefnyddwyr.** Y tu hwnt i'r pwynt hwnnw, mae pob naw ychwanegol yn costio mwy nag y mae'n ei ddychwelyd.
- **Disgrifiwch wasanaethau, byth bobl.** Mae argaeledd yn perthyn i wasanaeth a'r timau sy'n ei redeg, ac nid yw byth yn sgôr unigolyn.

## Diffiniadau metrigau

Mae pob rhes yn nodi ei chlociau a'i ffiniau. Defnyddir amser calendr oni bai bod rhes yn dweud fel arall. Lle mae mesur yn defnyddio dosbarthiad, adroddwch y canolrif a'r 95fed canradd, ac enwch y ffenestr.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Argaeledd ar sail amser | Cyfran yr amser dan sylw y bodlonodd y gwasanaeth y diffiniad ysgrifenedig o "i fyny" ynddi | (munudau dan sylw yn y ffenestr llai munudau amser i lawr anghynlluniedig) / munudau dan sylw yn y ffenestr. Mae'r cloc yn dechrau ar y stiliwr cyntaf a fethodd a gadarnheir yn ddiweddarach fel effaith ar ddefnyddwyr, neu ar ddechrau'r effaith a gadarnhawyd a gofnodwyd yn yr adolygiad digwyddiad; yn stopio pan fo'r gwasanaeth yn bodloni'r diffiniad eto. Dangosir amser i lawr cynlluniedig o fewn oriau gwasanaeth y cytunwyd arnynt ar wahân, ac eithrir amser y tu allan i oriau gwasanaeth y cytunwyd arnynt o'r enwadur | canran | Canlyniadau monitro synthetig; cofnod digwyddiad gyda stampiau amser dechrau effaith ac adfer | Rheoli argaeledd; rheoli lefel gwasanaeth | SLI ar sail amser ar gyfer un system (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau) | Misol |
| Argaeledd ar sail ceisiadau | Cyfran y ceisiadau dilys a lwyddodd | ceisiadau dilys llwyddiannus / cyfanswm ceisiadau dilys yn y ffenestr. Mae ceisiadau dilys yn eithrio ceisiadau camffurfiedig a gwallau cleient a achosir gan y galwr; cyfrifir methiannau a achosir gan y gwasanaeth, gan gynnwys terfynau amser, fel methiannau. Adroddir fesul gwasanaeth a fesul taith defnyddiwr | canran | Logiau a metrigau cydbwysydd llwyth, porth, neu gymhwysiad | Rheoli argaeledd; monitro a rheoli hysbysiadau | SLI cyfradd llwyddiant gydag SLO a chyllideb gwallau (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau) | Tuedd ddyddiol, adroddiad misol |
| Argaeledd wedi'i bwysoli gan ddefnyddwyr | Argaeledd wedi'i bwyso gan y defnyddwyr neu'r teithiau yr effeithir arnynt, fel bod toriad ar anterth yn cyfrif am fwy nag un dros nos | 1 llai (sesiynau defnyddwyr neu deithiau a fethodd / cyfanswm sesiynau defnyddwyr neu deithiau) yn y ffenestr. Mae sesiwn yn cyfrif fel un a fethodd os methodd cam hanfodol diffiniedig; adroddir llwyddiant rhannol fel cyfran diraddio ar wahân, heb ei blygu i mewn | canran | Monitro defnyddwyr go iawn; logiau sesiwn cymhwysiad; digwyddiadau dadansoddeg | Rheoli argaeledd; rheoli lefel gwasanaeth | SLI ar sail taith a'r mesurau profiad ym mhwnc 6.2 (gweler pwnc 6.2, Cytundebau lefel profiad) | Misol |
| Amser i lawr anghynlluniedig | Munudau pan oedd y gwasanaeth ddim ar gael heb rybudd cymeradwy ymlaen llaw | Swm hydoedd toriadau yn y ffenestr, o ddechrau effaith wedi'i gadarnhau i adfer wedi'i gadarnhau, ar gyfer toriadau na chyhoeddwyd ac na chymeradwywyd drwy alluogi newid cyn iddynt ddechrau. Mae toriadau sy'n gorgyffwrdd ar yr un gwasanaeth yn cael eu huno, nid eu crynhoi. Adroddir fel cyfanswm munudau, cyfrif toriadau, a chanolrif a 95fed canradd hyd toriadau | munudau | Cofnod digwyddiad gyda stampiau amser dechrau effaith ac adfer | Rheoli digwyddiadau; rheoli argaeledd | Amser i adfer wedi'i ddarllen fel dosbarthiad (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau) | Misol |
| Cyfran amser i lawr cynlluniedig | Cyfran yr holl amser i lawr a gyhoeddwyd ac a gymeradwywyd ymlaen llaw | munudau amser i lawr cynlluniedig / (munudau amser i lawr cynlluniedig ac anghynlluniedig) yn y ffenestr. Mae toriad yn cyfrif fel un cynlluniedig dim ond os cymeradwywyd ef drwy gofnod newid cyn iddo ddechrau a chyfathrebwyd ei amseroedd dechrau a diwedd i ddefnyddwyr; caiff gor-redeg y tu hwnt i'r ffenestr a gymeradwywyd ei ail-ddosbarthu fel un anghynlluniedig o'r foment y daeth y ffenestr i ben | canran | Cofnod newid gyda ffenestr a gymeradwywyd; cofnod digwyddiad; hanes tudalen statws | Galluogi newid; rheoli argaeledd | Arferion rhyddhau a chynnal a chadw sy'n ffafrio defnyddio dim amser i lawr (gweler pwnc 4.3, Metrigau galluogi newid) | Misol |
| Amlder a bylchau toriadau | Pa mor aml y mae toriadau'n dechrau a pha mor hir y mae'r gwasanaeth yn rhedeg rhyngddynt | Cyfrif toriadau sy'n dechrau yn y ffenestr; ac ar gyfer pob pâr o doriadau olynol, y munudau o amser i fyny rhwng adfer y cyntaf a dechrau'r ail, wedi'u crynhoi fel y canolrif a'r 5ed canradd. Heb ei adrodd fel un cymedr pan fo llai na deg cyfwng yn bodoli | cyfrif; munudau | Cofnod digwyddiad; hanes monitro | Rheoli digwyddiadau; rheoli problemau | Signal sefydlogrwydd ochr yn ochr â chyfradd methiant newid (gweler pwnc 4.4, Methiant newid ac ailwaith) | Misol |
| Cyfran diraddio | Amser pan weithiodd y gwasanaeth ond islaw ansawdd y cytunwyd arno | Munudau pan dorrodd y dangosydd latency, gwall, neu gywirdeb ei drothwy, gan eithrio munudau a gyfrifwyd eisoes fel amser i lawr / munudau dan sylw. Datgenir trothwy fesul gwasanaeth, er enghraifft yn yr SLO | canran | Monitro a mesuriadau SLI | Rheoli argaeledd; rheoli capasiti a pherfformiad | SLI latency (gweler pwnc 5.4, Metrigau capasiti a pherfformiad) | Misol |
| Cwmpas mesur | Faint o ymddygiad sy'n wynebu defnyddwyr y gwasanaeth y mae'r mesur argaeledd yn ei arsylwi mewn gwirionedd | Teithiau defnyddwyr hanfodol gyda stiliwr gweithredol neu fesuriad defnyddwyr go iawn / teithiau defnyddwyr hanfodol a restrir yn niffiniad y gwasanaeth | canran | Diffiniad gwasanaeth; cyfluniad monitro | Monitro a rheoli hysbysiadau; rheoli argaeledd | Cwmpas arsylwadwyedd ac ansawdd rhybuddion (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion) | Chwarterol |

Dau nodyn ar ddata. Ni all stiliwr sy'n gwirio bob pum munud ddatrys toriad o ddau funud, felly cofnodwch y cyfwng stilio wrth ymyl y ffigur, a defnyddiwch y maes dechrau effaith yn y cofnod digwyddiad (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth). Pryd bynnag y bydd y diffiniad o "i fyny" yn newid, marciwch ef ar y siart tuedd.

## Argymhellion

### Diffiniwch y mesuriad

**1. Ysgrifennwch ddiffiniad y gwasanaeth cyn y ganran.** Rhestrwch ffin y gwasanaeth, y teithiau defnyddwyr hanfodol, yr oriau dan sylw, y parth amser, a'r ffenestr (mae mis calendr yn arferol). Dywedwch pa ddibyniaethau sy'n cyfrif: os yw darparwr taliadau yn methu ac na all defnyddwyr dalu, ai eich toriad chi yw hynny? Cofnodwch yr ateb yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau). Anghydfodau am y dudalen hon yw'r rhan fwyaf o anghydfodau am argaeledd, ac mae eu setlo ymlaen llaw yn llawer rhatach na'u setlo ar ôl toriad.

**2. Diffiniwch "i fyny" fel canlyniad defnyddiwr, nid cyflwr gweinydd.** Mae gwiriad iechyd sy'n dychwelyd llwyddiant tra bo mewngofnodi wedi torri yn mesur y peth anghywir. Dewiswch nifer fach o deithiau hanfodol, megis "chwilio a gweld eitem", "mewngofnodi", neu "gyflwyno hawliad", a diffiniwch lwyddiant ar gyfer pob un mewn termau y byddai defnyddwyr yn eu hadnabod. Stiliwch y daith o'r dechrau i'r diwedd, a thrinwch ymateb araf y tu hwnt i drothwy y cytunwyd arno fel un wedi'i ddiraddio, nid i fyny.

**3. Defnyddiwch fesurau ar sail ceisiadau ar gyfer gwasanaethau dosbarthedig a mesurau ar sail amser lle mae'r gwasanaeth yn wirioneddol ymlaen neu i ffwrdd.** Anaml y mae gwasanaeth byd-eang i lawr yn gyfan gwbl, felly mae cyfrif munudau o fethiant llwyr yn anwybyddu'r rhan fwyaf o fethiannau go iawn. Adroddwch y ddau pan allwch, a dywedwch pa un yw'r pennawd a pham.

**4. Ychwanegwch bwysoli defnyddwyr lle mae llwyth yn anwastad.** Mae toriad deng munud am 4 y bore ac un ar ddechrau diwrnod masnachu yr un hyd ac yn wahanol iawn o ran cost. Pwyswch yn ôl sesiynau neu drafodion yn y funud o fethiant, neu adroddwch funudau toriad awr anterth fel ffigur ar wahân.

**5. Mesurwch o'r tu allan i'r parth methiant.** Mae stiliwr y tu mewn i'r un rhwydwaith neu ranbarth â'r gwasanaeth yn methu gydag ef, neu'n dal i adrodd llwyddiant tra bo'r llwybr y mae defnyddwyr yn ei gymryd wedi torri. Rhedwch stilwyr synthetig o o leiaf ddau leoliad annibynnol a'u croesgyfeirio yn erbyn data defnyddwyr go iawn.

### Trinwch doriadau cynlluniedig ac anghynlluniedig yn onest

**6. Adroddwch amser i lawr cynlluniedig ac anghynlluniedig ochr yn ochr.** Mae llawer o gytundebau yn eithrio cynnal a chadw wedi'i gynllunio, sy'n rhesymol. Mae defnyddwyr yn dal i'w brofi fel amser i lawr, felly dangoswch y munudau a eithriwyd a'r gyfran gynlluniedig wrth ymyl y pennawd (gweler pwnc 4.3, Metrigau galluogi newid).

**7. Gwnewch y label cynlluniedig yn anodd ei ennill.** Diffiniwch gynlluniedig fel un a gymeradwywyd drwy gofnod newid cyn i'r toriad ddechrau, gyda'r amseroedd dechrau a diwedd wedi'u cyfathrebu i ddefnyddwyr ymlaen llaw. Mae toriad a gyhoeddwyd ar ôl iddo ddechrau yn anghynlluniedig. Mae gor-redeg y tu hwnt i'r ffenestr a gymeradwywyd yn anghynlluniedig o'r foment y daeth y ffenestr i ben. Mae'r tair rheol hyn yn atal y label rhag dod yn ffordd o ail-labelu methiannau.

**8. Gweithiwch i grebachu amser i lawr cynlluniedig.** Mae defnyddiadau treigl, baneri nodweddion, mudo sgema heb gloi, a rhyddhadau glas-gwyrdd yn gadael i dimau newid gwasanaeth heb ei ddwyn i lawr. Olrheiniwch funudau amser i lawr cynlluniedig fel tuedd a gofynnwch beth fyddai ei angen i'w dwyn tuag at sero.

### Darllenwch y rhifau'n dda

**9. Trowch y nawiau yn funudau a'u dangos.** Mae'r tabl isod yn rhoi'r rhifyddeg ar gyfer mis 30 diwrnod (43,200 munud) a blwyddyn 365 diwrnod (525,600 munud). Rhowch y munudau a ganiateir ar y dangosfwrdd wrth ymyl y targed, a dangoswch y munudau a ddefnyddiwyd hyd yma yn y ffenestr. Mae pobl yn gwneud penderfyniadau gwell am "43 munud y mis" nag am "tri naw".

| Targed argaeledd | Amser i lawr a ganiateir mewn mis 30 diwrnod | Amser i lawr a ganiateir mewn blwyddyn 365 diwrnod |
| --- | --- | --- |
| 99 y cant | 432 munud (7.2 awr) | 5,256 munud (87.6 awr) |
| 99.5 y cant | 216 munud (3.6 awr) | 2,628 munud (43.8 awr) |
| 99.9 y cant | 43.2 munud | 525.6 munud (8.76 awr) |
| 99.95 y cant | 21.6 munud | 262.8 munud (4.38 awr) |
| 99.99 y cant | 4.32 munud | 52.56 munud |
| 99.999 y cant | tua 26 eiliad | tua 5.26 munud |

Mae'r gwerthoedd yn tybio bod y cloc yn rhedeg am y ffenestr gyfan. Os mai dim ond oriau gwasanaeth y cytunwyd arnynt a fesurwch, mae'r munudau a ganiateir yn crebachu yn gymesur, a dylech ddweud hynny.

**10. Parchwch gost pob naw ychwanegol a therfynau eich dibyniaethau.** Mae llyfr SRE yn nodi bod costau dibynadwyedd yn codi'n serth gyda phob naw ychwanegol, ac y dylai'r targed adlewyrchu'r hyn sydd ei angen ar ddefnyddwyr a'r hyn y bydd y busnes yn talu amdano. Anaml y gall gwasanaeth fod yn fwy hygyrch na'r dibyniaethau sydd eu hangen arno mewn cyfres. Os yw tair cydran hanfodol yn cyflawni 99.9 y cant yr un ac mae cais angen pob un o'r tair, yr argaeledd disgwyliedig gorau ar gyfer y cyfuniad yw tua 99.7 y cant, oherwydd bod y tebygolrwyddau methiant yn adio pan fo'r cydrannau'n annibynnol. Gwnewch y lluosi cyn i chi addo ffigur.

**11. Edrychwch ar y bylchau a'r siâp, ac nid dim ond y cyfanswm.** Mae toriadau byr mynych angen ymateb gwahanol i un toriad hir prin. Cysylltwch doriadau hir â chanfod ac adfer (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau) ac â'r olwg digwyddiadau mawr (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

**12. Caewch y ddolen gyda'r gyllideb gwallau a'r cofnod problem.** Mae targed argaeledd yn ddefnyddiol pan fo'n newid yr hyn y mae'r tîm yn ei wneud. Pan fo cyllideb fisol amser i lawr a ganiateir bron wedi'i gwario, arafwch newid peryglus a symudwch ymdrech i waith dibynadwyedd, fel y disgrifir yn y polisi cyllideb gwallau (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau). Pan fo'r un achos yn ailadrodd, agorwch gofnod problem a'i olrhain hyd at atgyweiriad (gweler pwnc 4.1, Metrigau rheoli problemau).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Argaeledd ar sail amser | Stilio tudalen ddibwys sy'n aros i fyny tra bo'r daith go iawn yn methu; ymestyn y cyfwng stilio fel bod toriadau byr yn syrthio rhwng gwiriadau; crebachu'r oriau dan sylw; cyfrif toriadau fel diraddio | Argaeledd wedi'i bwysoli gan ddefnyddwyr a monitro defnyddwyr go iawn; cyfwng stilio wedi'i nodi wrth ymyl y ffigur; sampl o ddigwyddiadau yn erbyn y cofnod monitro |
| Argaeledd ar sail ceisiadau | Cyfrif ceisiadau hawdd (gwiriadau iechyd, asedau wedi'u storio) yn yr enwadur i wanhau methiannau; dosbarthu gwallau gweinydd fel gwallau cleient; eithrio ailgynnigion a brofodd defnyddwyr fel methiannau | Cyfradd llwyddiant fesul taith hanfodol, nid fesul cais; adolygu'r rhestr eithriadau; cymharu â digwyddiadau a adroddwyd gan ddefnyddwyr |
| Argaeledd wedi'i bwysoli gan ddefnyddwyr | Dewis y pwysoli fel nad yw methiannau anterth yn cyfrif llawer; diffinio sesiwn "lwyddiannus" mor llac nes bod camau toredig yn dal i basio | Cyhoeddi'r rheol bwysoli a'r rhestr teithiau; cymharu â chyfaint cwynion a chysylltiadau cymorth yn ystod toriadau |
| Amser i lawr anghynlluniedig | Ail-ddosbarthu toriadau fel rhai cynlluniedig ar ôl y ffaith; oedi'r dechrau effaith a gadarnhawyd; hollti un toriad yn ddau i edrych yn fyrrach | Cyfran amser i lawr cynlluniedig, gyda'r rheol bod toriad a gyhoeddwyd ar ôl iddo ddechrau yn anghynlluniedig; cymharu dechrau effaith â data monitro |
| Cyfran amser i lawr cynlluniedig | Archebu newidiadau fel ffenestri a gymeradwywyd fel bod gor-redeg a methiannau'n cyfrif fel rhai cynlluniedig; chwyddo'r gyfran gynlluniedig drwy amserlennu cynnal a chadw diangen | Munudau gor-redeg wedi'u hail-ddosbarthu fel rhai anghynlluniedig; cyfradd methiant newid a chyfran newid brys (gweler pwnc 4.4, Methiant newid ac ailwaith) |
| Amlder a bylchau toriadau | Uno digwyddiadau, neu agor digwyddiad newydd dim ond ar ôl bwlch hir, i gadw'r cyfrif yn isel; mygu rhybuddion fel nad yw toriadau byr yn cael eu cofnodi | Samplu rhybuddion a digwyddiadau yn erbyn digwyddiadau monitro crai; cwmpas monitro ac ansawdd rhybuddion (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion) |
| Cyfran diraddio | Gosod y trothwy mor llac nes na all gwasanaeth araf byth ei dorri; datgan amser diraddiedig fel i fyny | Canraddau latency ac arafwch a adroddir gan ddefnyddwyr wedi'u hadolygu wrth ymyl y ffigur (gweler pwnc 5.4, Metrigau capasiti a pherfformiad) |
| Cwmpas mesur | Rhestru dim ond y teithiau sy'n hawdd eu stilio, fel bod cwmpas yn darllen fel 100 y cant; cyfrif taith fel un dan sylw gan stiliwr nad yw byth yn rhedeg | Rhestr teithiau y cytunwyd arni gyda pherchennog y gwasanaeth a defnyddwyr; hanes rhediadau stilwyr wedi'i samplu bob chwarter |

Mae darlleniad iach yn dangos ffigurau sy'n symud am resymau y gall y tîm eu hesbonio, gyda amser i lawr cynlluniedig ac anghynlluniedig ill dau yn weladwy a ffigur wedi'i bwysoli gan ddefnyddwyr yn agos at y pennawd. Byddwch yn amheus o fis perffaith sy'n dod gyda chwynion. Mae gostyngiad gonest achlysurol yn dangos bod y system gofnodi yn gweithio.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Argaeledd ar sail amser | Syml, wedi'i ddeall yn eang, hawdd ei gymharu â chontractau | Yn trin methiant rhannol fel popeth neu ddim; anwybyddu pryd a phwy |
| Argaeledd ar sail ceisiadau | Adlewyrchu methiant rhannol; graddio i wasanaethau dosbarthedig | Yn dibynnu ar ddiffiniad cadarn o gais dilys; gellir ei wanhau gan draffig hawdd |
| Argaeledd wedi'i bwysoli gan ddefnyddwyr | Agos at yr hyn a brofodd defnyddwyr; dangos cost methiant amser anterth | Angen data sesiwn neu daith; mwy o ymdrech i'w esbonio |
| Eithrio amser i lawr cynlluniedig | Cyfateb llawer o gytundebau; gwobrwyo rhybudd ymlaen llaw | Gall guddio effaith go iawn; gwahodd ail-labelu |
| Targedau cymedrol gyda chyllidebau gwallau | Cydbwyso dibynadwyedd a chyflymder cyflawni | Angen disgyblaeth i weithredu pan fo'r gyllideb wedi'i gwario |

Yr ateb pragmatig yw dewis y mesur symlaf sy'n ffitio'r gwasanaeth, ychwanegu pwysoli defnyddwyr lle mae llwyth yn anwastad, a bod yn eglur am bob eithriad. Mae mesur ychydig yn llai cain y mae pawb yn ei ddeall yn gwneud mwy o les na un soffistigedig nad oes neb yn ymddiried ynddo.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth mae "ar gael" yn ei olygu ar gyfer ein gwasanaeth pwysicaf, ac a fyddai defnyddiwr yn cytuno?**
Gofynnwch i bob person ddisgrifio, mewn un frawddeg, beth mae'n rhaid i ddefnyddiwr allu ei wneud i'r gwasanaeth gyfrif fel un i fyny. Cymharwch yr atebion â'r diffiniad ysgrifenedig a'r stiliwr sy'n bwydo'r dangosfwrdd. Dylai'r hwylusydd wrando am fylchau megis mewngofnodi, chwilio, neu daliad yn gweithio yn y stiliwr ond yn methu yn ymarferol. Gorffennwch drwy gytuno pa deithiau defnyddwyr y mae'n rhaid i'r diffiniad eu henwi.

**2. Pa doriadau o'r chwarter diwethaf fyddai ein cyfrifiad wedi'u heithrio, ac a oedd hynny'n deg?**
Rhestrwch y toriadau a marciwch bob un fel un cynlluniedig, anghynlluniedig, neu wedi'i eithrio. Gofynnwch pwy a wnaeth bob penderfyniad a phryd. Dylai'r hwylusydd gofnodi achosion lle byddai defnyddwyr wedi anghytuno â'r label, a'u defnyddio i dynhau'r rheolau.

**3. Faint o funudau o amser i lawr y mae ein targed yn eu caniatáu, a faint ydym ni wedi'u defnyddio yn y ffenestr hon?**
Trowch y targed yn funudau ar gyfer y mis a'r flwyddyn ar fwrdd gwyn. Cymharwch â'r munudau a ddefnyddiwyd hyd yma. Gofynnwch beth fyddai'r tîm yn ei wneud yn wahanol pe bai dim ond 20 y cant o'r gyllideb ar ôl. Mae hyn yn gwneud y targed haniaethol yn bendant ac yn cysylltu'r rhif â'r polisi cyllideb gwallau.

**4. Ble allai ein mesuriad golli methiant y byddai defnyddwyr yn ei deimlo?**
Cerddwch drwy leoliadau stilwyr, cyfwng, teithiau a gwmpesir, a dibyniaethau. Gofynnwch pa fethiant fyddai'n pasio pob stiliwr ac yn dal i dorri'r gwasanaeth i ddefnyddwyr. Cytunwch ar un stiliwr newydd neu un mesur defnyddwyr go iawn i'w ychwanegu.

**5. A ydym yn cynllunio toriadau y gallem eu hosgoi?**
Edrychwch ar amser i lawr cynlluniedig dros chwe mis a gofynnwch beth a orfododd bob toriad. Mae rhai yn anochel, megis gofyniad gwerthwr. Daw eraill o ddull rhyddhau neu fudo y gellid ei newid. Gofynnwch beth fyddai ei angen i ddileu'r ffynhonnell fwyaf, a phwy sy'n berchen ar y gwaith hwnnw.

**6. Os yw'r rhif pennawd yn edrych yn berffaith, beth fyddai'n gwneud i ni amau?**
Enwch y signalau a fyddai'n gwrth-ddweud y dangosfwrdd: cyfaint cwynion, cysylltiadau cymorth, neu atgofion y tîm ar alwad. Gwiriwch a oes rhai'n bodoli ar hyn o bryd. Cytunwch ar un gymhariaeth i'w rhoi ar y dangosfwrdd.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn effeithio ar argaeledd bob tro y maent yn newid gwasanaeth. Gallant ddylunio ar gyfer defnyddio dim amser i lawr, defnyddio baneri nodweddion i gyfyngu radiws y ffrwydrad, a thrin y gyllideb gwallau fel mewnbwn i benderfyniadau rhyddhau, gan ddarllen argaeledd wrth ymyl mesurau defnyddio (gweler pwnc 2.8, Metrigau DORA).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn berchen ar y stilwyr, y cofnodion digwyddiadau, a'r cylchdroeon sy'n cynhyrchu'r data. Dylent gadw'r diffiniad a'r rhestr eithriadau yn gyfredol, cofnodi dechrau effaith yn onest, ac adolygu monitro yn erbyn digwyddiadau go iawn. Mae argaeledd yn perthyn i'r gwasanaeth a'i gylchdro, byth i un peiriannydd ar alwad (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod y cymhellion sy'n penderfynu a yw data argaeledd yn ddidwyll. Mae adolygiad sy'n gofyn "pam wnaethoch chi golli naw?" yn dysgu timau i guddio toriadau yn yr eithriadau. Gofynnwch beth ddysgodd y tîm a pha fuddsoddiad fyddai'n lleihau toriadau, a pheidiwch â gofyn am fwy o nawiau nag y bydd defnyddwyr yn sylwi arnynt (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau, ar gyfer ymrwymiadau cyflenwyr).

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn barnu argaeledd yn ôl a allent wneud yr hyn y daethant i'w wneud. Maent yn goddef ffenestr cynnal a chadw wedi'i harwyddo yn llawer gwell na syrpreis. Rhowch dudalen statws iddynt gydag amseroedd dechrau a diwedd gonest, a darllenwch eu hadborth wrth ymyl y rhifau (gweler pwnc 6.2, Cytundebau lefel profiad).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg blaen siop, gwasanaeth til, a gwasanaeth olrhain archebion. Mae'r rhifau yn yr enghraifft hon yn enghreifftiol.

Mae'r tîm til yn adrodd 99.95 y cant o argaeledd ar sail amser am y mis, sy'n caniatáu 21.6 munud o amser i lawr anghynlluniedig, ac mae'r dangosfwrdd yn dangos 99.96 y cant. Nid yw pennaeth cymorth cwsmeriaid wedi ymlacio, oherwydd bod cysylltiadau cymorth am daliadau a fethodd wedi codi yn yr un mis. Mae hi'n gofyn i'r tîm adolygu'r mesuriad.

Mae'r tîm yn canfod tair problem. Mae'r stiliwr yn gwirio tudalen "mae'r til yn gyraeddadwy" bob pum munud, nid y daith dalu lawn. Mae data ar sail ceisiadau yn dangos bod terfyn amser darparwr taliadau wedi achosi i tua 4 y cant o ymdrechion talu fethu am tua 50 munud ar ddau noson, ac ni sylwodd y stiliwr oherwydd bod y dudalen ei hun wedi llwytho. Ac roedd mudo cronfa ddata a oedd wedi gor-redeg ei ffenestr a gymeradwywyd o 18 munud wedi'i gofnodi'n gyfan gwbl fel cynnal a chadw wedi'i gynllunio.

Mae'r tîm yn gwneud pedwar newid. Mae'n ychwanegu stiliwr synthetig ar gyfer y daith dalu lawn o ddau leoliad ar gyfwng un munud. Mae'n ychwanegu ffigurau ar sail ceisiadau ac wedi'u pwyso gan ddefnyddwyr, gan ddefnyddio sesiynau a gyrhaeddodd y cam talu. Mae'n ail-ddosbarthu'r munudau gor-redeg fel rhai anghynlluniedig. Ac mae'n ychwanegu'r gyfran amser i lawr cynlluniedig a chwmpas mesur at yr adroddiad.

Ar y sail gywiredig, mae'r mis yn dangos argaeledd ar sail amser o 99.93 y cant, argaeledd ar sail ceisiadau o 99.90 y cant, ac argaeledd wedi'i bwysoli gan ddefnyddwyr o 99.84 y cant, oherwydd bod y methiannau wedi syrthio yn anterth y nos. Mae'r tri yn methu'r targed o 99.95 y cant, sy'n anghyfforddus. Mae'r tîm a phennaeth cymorth yn cytuno bod y rhif cynharach yn rhy hael. Maent yn ysgrifennu'r diffiniad cywiredig i'r gofrestr metrigau ac yn rhoi'r polisi cyllideb gwallau ar waith: am y mis nesaf, mae newidiadau peryglus i'r til yn aros nes bod y gyllideb yn adfer, ac mae'r tîm yn agor cofnod problem ar gyfer terfynau amser y darparwr taliadau (gweler pwnc 4.1, Metrigau rheoli problemau).

Y risg chwarae'r system a ddaliant yw ail-labelu. Awgrymodd rheolwr alw'r gor-redeg yn "gynnal a chadw estynedig" i warchod y targed. Gwnaeth y gyfran amser i lawr cynlluniedig, gyda'i rheol bod gor-redeg yn dod yn anghynlluniedig, yr ail-ddosbarthu yn weladwy, a chadwodd y tîm y ffigur gonest.

## Y golwg fesul sector

**Busnes newydd.** Yn aml mae gan dîm bach un gwasanaeth ac ychydig o fonitro. Dechreuwch ag un stiliwr ar y daith bwysicaf a diffiniad un paragraff o "i fyny". Dewiswch darged cymedrol, trowch ef yn funudau, ac osgowch addo nawiau na all y tîm eu mesur eto.

**Busnes bach.** Yn aml offer a gynhelir ynghyd ag ychydig o systemau pwrpasol yw'r gwasanaeth, ac mae argaeledd yn dibynnu ar gyflenwyr. Cofnodwch doriadau cyflenwyr wrth iddynt effeithio ar eich defnyddwyr, cymharwch â'r hyn y mae'r cyflenwr yn ei adrodd, a chadwch y set i ddau neu dri ffigur.

**Menter fawr.** Mae llawer o wasanaethau, llawer o dimau, a llawer o gyflenwyr yn lluosi'r diffiniadau a ddefnyddir. Cyhoeddwch un diffiniad safonol o argaeledd gyda rhestr fer o amrywiadau a ganiateir, cadwch y gofrestr metrigau yn gyfredol, a sicrhewch fod y rheolau cynlluniedig ac anghynlluniedig yr un fath ar draws timau cyn eu cymharu. Ffafriwch adrodd ar lefel gwasanaeth dros dablau cynghrair timau, gan fod gwasanaethau'n wahanol o ran llwyth a phwysigrwydd.

**Llywodraeth a'r sector cyhoeddus.** Yn aml mae gan wasanaethau cyhoeddus oriau gwasanaeth statudol, ymrwymiadau cyhoeddedig, a chontractau gyda chredydau ffurfiol. Adroddwch yn eu herbyn fel y'u hysgrifennwyd, dangoswch yr olwg wedi'i phwysoli gan ddefnyddwyr wrth eu hymyl, a byddwch yn agored am eithriadau (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y prif gostau yw'r amser i ysgrifennu diffiniad y gwasanaeth a'r gofrestr, monitro sy'n stilio teithiau hanfodol o'r tu allan i'r parth methiant, a'r ymdrech i uno data digwyddiadau, newid, a monitro fel y gellir gwahanu amser i lawr cynlluniedig ac anghynlluniedig. Mae monitro defnyddwyr go iawn yn ychwanegu costau offer a storio. Mae'r rhan fwyaf o sefydliadau eisoes yn berchen ar rywfaint o'r data, felly fel arfer mae'r buddsoddiad cyntaf mewn diffiniadau.

Daw'r elw o well penderfyniadau a llai o anghydfodau. Mae timau sy'n mesur o ochr y defnyddiwr yn dod o hyd i fethiannau y mae gwiriadau iechyd yn eu colli, mae cytundebau'n haws i'w rheoli gydag un diffiniad, a gellir gosod cost naw ychwanegol yn erbyn ei werth i ddefnyddwyr. Disgrifiwch y budd fel patrwm, megis llai o syrpreisys mewn adolygiadau cytundeb, a mesurwch eich llinellau sylfaen eich hun, megis y bwlch rhwng y pennawd a'r ffigurau wedi'u pwyso gan ddefnyddwyr. Peidiwch â benthyg ffigurau gan sefydliadau eraill.

## Gwrthbatrymau a maglau

- **Dyfynnu'r nawiau heb y munudau.** Ni all targed na all neb ei drosi yn amser i lawr a ganiateir arwain penderfyniadau. Dangoswch y munudau a ganiateir a ddefnyddiwyd wrth ymyl pob targed.
- **Mesur y gweinydd yn lle'r daith.** Gall gwiriad iechyd gwyrdd eistedd wrth ymyl mewngofnodi toredig. Stiliwch deithiau hanfodol o'r dechrau i'r diwedd a chymharwch â data defnyddwyr go iawn.
- **Gadael i'r label cynlluniedig amsugno methiannau.** Mae categori cynlluniedig sy'n hawdd ei hawlio yn gwagio'r ffigur anghynlluniedig. Mynnwch gymeradwyaeth cyn y toriad, cyfathrebwch ef, ac ail-ddosbarthwch gor-redeg.
- **Cyfartaleddu ar draws gwasanaethau ac oriau.** Mae ffigur cymysg yn cuddio'r gwasanaeth hanfodol a'r awr brysur. Adroddwch fesul gwasanaeth, ac ychwanegwch olwg wedi'i phwysoli gan ddefnyddwyr.
- **Addo mwy o nawiau nag y mae'r dibyniaethau'n eu caniatáu.** Ni all cydrannau mewn cyfres ragori ar eu hargaeledd cyfun. Lluoswch cyn i chi addo, a gofynnwch i gyflenwyr am eu ffigurau a fesurwyd.
- **Trin 100 y cant fel y nod.** Mae'r gost yn dringo'n serth ac mae newid yn arafu. Dewiswch y targed o angen defnyddwyr a defnyddiwch y gyllideb gwallau.
- **Graddio timau neu bobl yn ôl eu nawiau.** Mae gwasanaethau'n wahanol o ran llwyth a phwysigrwydd, ac mae tabl cynghrair yn dysgu timau i guddio toriadau. Dangoswch i bob gwasanaeth ei duedd ei hun a'i gymharu â'i darged ei hun.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniad a chlociau | Mae "i fyny" yn golygu beth bynnag y mae'r offeryn monitro yn ei ddangos; amseroedd toriadau wedi'u hamcangyfrif wedyn | Wedi'i ysgrifennu ar gyfer rhai gwasanaethau; amseroedd stilwyr a digwyddiadau yn anghytuno | Un diffiniad ysgrifenedig fesul gwasanaeth gyda theithiau, oriau, eithriadau, a rheolau cloc | Diffiniadau wedi'u hadolygu ar amserlen; newidiadau wedi'u logio a'u marcio ar siartiau | Diffiniadau wedi'u halinio â chyflenwyr a chwsmeriaid ac wedi'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Ansawdd mesur | Adroddiadau â llaw neu un gwiriad iechyd | Stilwyr ar gyfer rhai gwasanaethau; data ceisiadau mewn rhai logiau | Stilwyr o'r tu allan i mewn ar deithiau hanfodol ynghyd â ffigurau ar sail ceisiadau o ffynhonnell safonol | Ffigurau wedi'u pwyso gan ddefnyddwyr o ddata defnyddwyr go iawn; cwmpas wedi'i olrhain a'i samplu | Mesuriadau wedi'u rhannu ar draws timau a chyflenwyr ac wedi'u cysoni'n awtomatig |
| Trin cynlluniedig ac anghynlluniedig | Dim gwahaniaeth; cynnal a chadw wedi'i gyfrif ad hoc | Label cynlluniedig a ddefnyddir gan rai timau, rheolau'n wahanol | Un rheol: wedi'i gymeradwyo cyn y toriad ac wedi'i gyfathrebu, gor-redeg wedi'i ail-ddosbarthu | Cyfran gynlluniedig wedi'i thueddu gyda nod i'w lleihau | Newid dim amser i lawr yw'r rhagosodiad, ac mae amser i lawr cynlluniedig yn brin ac wedi'i negodi |
| Defnydd mewn penderfyniadau | Adroddir ar ôl cwyn | Adolygir yn fisol gan weithrediadau | Targedau wedi'u dangos mewn munudau | Mae'r polisi cyllideb gwallau yn newid gwaith, gydag ariannu | Argaeledd, cost, a phrofiad wedi'u cyfaddawdu ar y cyd | 

## Rhestr wirio

- [ ] Mae gan bob gwasanaeth ddiffiniad ysgrifenedig o "ar gael" sy'n enwi ei deithiau defnyddwyr hanfodol.
- [ ] Datgenir y ffenestr fesur, yr oriau dan sylw, a'r parth amser ar gyfer pob ffigur.
- [ ] Mae'r rhestr eithriadau wedi'i hysgrifennu, ei hadolygu, a'i dangos wrth ymyl y pennawd.
- [ ] Mae amser i lawr cynlluniedig yn gofyn am newid a gymeradwywyd a rhybudd ymlaen llaw; mae gor-redeg yn cyfrif fel anghynlluniedig.
- [ ] Mae stilwyr yn rhedeg o'r tu allan i'r parth methiant, ar gyfwng a nodwyd, ar deithiau hanfodol.
- [ ] Mae ffigur ar sail ceisiadau neu wedi'i bwysoli gan ddefnyddwyr yn eistedd wrth ymyl y ffigur ar sail amser.
- [ ] Dangosir pob targed fel munudau a ganiateir a munudau a ddefnyddiwyd yn y ffenestr gyfredol.
- [ ] Adroddir cyfrif toriadau a chanraddau hyd, ac nid dim ond y cyfanswm.
- [ ] Lluosir argaeledd dibyniaethau drwodd cyn addo targed.
- [ ] Logir newidiadau diffiniad a'u marcio ar y siart tuedd.
- [ ] Adroddir argaeledd fesul gwasanaeth a byth fesul person.

## Anogwyr AI

**Drafftiwch ddiffiniad argaeledd gwasanaeth.**

```text
Rwy'n ysgrifennu diffiniad argaeledd ar gyfer [enw'r gwasanaeth], [math o
wasanaeth] a ddefnyddir gan [grwpiau defnyddwyr]. Ei deithiau defnyddwyr
hanfodol yw [rhestr teithiau]. Oriau gwasanaeth y cytunwyd arnynt yw [oriau a
pharth amser]. Dibyniaethau hysbys yw [rhestr]. Mae ein monitro yn cynnwys
[stilwyr, logiau, data defnyddwyr go iawn].

Drafftiwch ddiffiniad un dudalen yn cwmpasu: beth sy'n cyfrif fel i fyny ar
gyfer pob taith, y ffenestr fesur, yr oriau dan sylw, yr eithriadau, y rheol
ar gyfer amser i lawr cynlluniedig yn erbyn anghynlluniedig, dechrau a stop y
cloc ar gyfer toriad, a'r metrigau i'w hadrodd. Peidiwch â dyfeisio targedau
na gwerthoedd meincnod. Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn
eu hateb i orffen y diffiniad.
```

**Trowch darged yn amser i lawr a ganiateir a'i brofi.**

```text
Ein targed ar gyfer [enw'r gwasanaeth] yw [canran argaeledd] dros [ffenestr, er
enghraifft mis 30 diwrnod]. Yr amser dan sylw yw [oriau]. Ein dibyniaethau
hanfodol a'u hargaeledd a nodwyd neu a fesurwyd yw [rhestr, neu "anhysbys"].

Cyfrifwch yr amser i lawr y mae'r targed hwn yn ei ganiatáu mewn munudau ar
gyfer y ffenestr ac ar gyfer blwyddyn, gan ddefnyddio'r oriau dan sylw. Yna
amcangyfrifwch yr argaeledd cyfun gorau os oes angen y dibyniaethau mewn cyfres
a'u bod yn methu'n annibynnol, ac esboniwch y fformiwla a ddefnyddiwyd gennych.
Nodwch ble mae fy mewnbynnau yn rhy ansicr i ddod i unrhyw gasgliad. Peidiwch â
darparu ffigurau argaeledd ar gyfer unrhyw ddibyniaeth na roddais i chi.
Rhestrwch eich rhagdybiaethau.
```

**Adolygwch fis o doriadau am broblemau dosbarthu.**

```text
Dyma'r cofnodion toriadau ar gyfer [enw'r gwasanaeth] ar gyfer [mis]: [gludwch
gofnodion gyda dechrau effaith, amser adfer, label cynlluniedig neu
anghynlluniedig, amser cymeradwyo, a nodiadau, gyda data personol wedi'i dynnu].

Ar gyfer pob toriad, gwiriwch a yw'r label cynlluniedig neu anghynlluniedig yn
dilyn y rheol hon: [gludwch eich rheol]. Nodwch gofnodion lle mae'r dechrau
effaith yn edrych yn hwyr, lle mae'n ymddangos bod un toriad wedi'i hollti neu
ei uno, a lle dylid fod wedi ail-ddosbarthu gor-redeg. Crynhowch batrymau yn
ôl gwasanaeth ac achos, byth yn ôl person. Dywedwch wrthyf beth na allech ei
farnu o'r data. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau cysylltiedig a'r rheilen warchod pâr ar gyfer mesur argaeledd yr ydych ar fin ei adrodd.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod diwygiad i'r pwnc hwn yn cadw pob metrig wedi'i baru â ffordd o chwarae'r system a rheilen warchod.

## Pwyntiau allweddol

- Dim ond ystyrlon yw argaeledd unwaith y bydd "i fyny", ffin y gwasanaeth, yr oriau, a'r eithriadau wedi'u hysgrifennu o ochr y defnyddiwr.
- Mae mesurau ar sail ceisiadau ac wedi'u pwyso gan ddefnyddwyr yn disgrifio gwasanaethau dosbarthedig a llwyth anwastad yn well na munudau o fethiant llwyr.
- Adroddwch amser i lawr cynlluniedig ac anghynlluniedig gyda'i gilydd, a gwnewch y label cynlluniedig yn anodd ei ennill.
- Trowch bob targed yn funudau, a lluoswch ddibyniaethau mewn cyfres cyn addo nifer o nawiau.
- Mae pob naw ychwanegol yn costio mwy na'r un olaf, felly dewiswch y targed o'r hyn sydd ei angen ar ddefnyddwyr a defnyddiwch y gyllideb gwallau i weithredu arno.
- Disgrifiwch wasanaethau a chylchdroeon, byth bobl, a phrofwch bob ffigur pennawd yn erbyn profiad defnyddwyr.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Embracing Risk", https://sre.google/sre-book/embracing-risk/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, chapter "Service Level Objectives", https://sre.google/sre-book/service-level-objectives/.
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, chapter "Implementing SLOs", https://sre.google/workbook/implementing-slos/.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [High availability](https://en.wikipedia.org/wiki/High_availability).
7. Wikipedia, [Downtime](https://en.wikipedia.org/wiki/Downtime).
8. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
9. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
10. Wikipedia, [Mean time between failures](https://en.wikipedia.org/wiki/Mean_time_between_failures).
11. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
12. Wikipedia, [Synthetic monitoring](https://en.wikipedia.org/wiki/Synthetic_monitoring).
13. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
14. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
