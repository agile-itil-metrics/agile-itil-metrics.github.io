# Cytundebau lefel profiad

**Mae cytundeb lefel profiad yn ychwanegu'r cwestiwn "sut oedd hi i'w ddefnyddio?" at y cwestiwn "a fodlonodd y gwasanaeth ei darged?", a dim ond pan ddewisir y mesurau profiad gyda defnyddwyr a'u cadw wrth ymyl y rhai gweithredol y mae'n gweithio.**

## Crynodeb a chymhelliant

Mae [cytundeb lefel gwasanaeth](https://en.wikipedia.org/wiki/Service-level_agreement) (SLA) yn cofnodi'r hyn y mae darparwr yn ymrwymo i'w gyflenwi, fel arfer mewn termau y gall y darparwr eu cyfrif: argaeledd, amser ymateb, amser datrys. Mae'r mesurau hynny'n ddefnyddiol ac maent hefyd yn anghyflawn. Gall tîm fodloni pob targed ar y dangosfwrdd tra bo defnyddwyr yn treulio eu hwythnos yn gweithio o gwmpas mewngofnodi araf, yn ailadrodd eu hunain wrth ddesg gwasanaeth, ac yn aros am gymeradwyaethau. Weithiau gelwir y bwlch hwn rhwng adrodd gwyrdd a defnyddwyr anhapus yn effaith watermelon: gwyrdd ar y tu allan, coch ar y tu mewn (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

**Cytundeb lefel profiad (XLA)** yw cytundeb, rhwng darparwr a'r bobl sy'n defnyddio gwasanaeth, am y profiad y dylai'r gwasanaeth ei roi. Mae'n datgan canlyniadau a theimladau dymunol, megis "gallaf ddechrau gweithio o fewn ychydig funudau i gyrraedd" neu "rwy'n ymddiried y caiff fy nghais ei drin," ac mae'n enwi'r mesurau a fydd yn dangos a ydynt yn cael eu bodloni. Defnyddir y term ar draws y gymuned rheoli gwasanaethau TG (ITSM), ac mae ei union ddiffiniad yn amrywio rhwng awduron a gwerthwyr. Gwiriwch gyhoeddiadau cyfredol perchennog y fframwaith cyn disgrifio XLA fel rhan o ITIL, a nodwch pa ddefnydd yr ydych yn ei ddilyn. Mae'r pwnc hwn yn trin yr XLA fel syniad ymarferol: cytundeb sy'n gosod mesurau profiad wrth ymyl rhai gweithredol.

Mae gwreiddiau'r syniad y tu allan i TG. [Profiad defnyddiwr](https://en.wikipedia.org/wiki/User_experience) yw profiad cyffredinol person sy'n defnyddio cynnyrch, system, neu wasanaeth, a [phrofiad cwsmer](https://en.wikipedia.org/wiki/Customer_experience) yw cyfanswm rhyngweithiadau cwsmer â sefydliad dros amser. Mae [defnyddioldeb](https://en.wikipedia.org/wiki/Usability) yn ymwneud â pha mor effeithiol, effeithlon, a boddhaol y gall pobl gyrraedd eu nodau. Mae timau ystwyth yn adnabod y tir hwn o feddwl dylunio ac ymchwil defnyddwyr, ac o adolygiadau rhanddeiliaid lle mae defnyddwyr yn ymateb i feddalwedd weithio. Mae XLA yn dod â'r un sylw i wasanaeth amser rhedeg.

Mae profiad yn anodd ei fesur ac yn hawdd ei ystumio. Bydd arolwg sy'n cyrraedd defnyddwyr hapus yn unig, sgôr teimlad wedi'i diwnio i godi, neu un "mynegai profiad" na all neb ei esbonio yn camarwain mor sicr ag amser tocyn a chwaraewyd. Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol yn llawn: dechreuwyr sgwrs yw mesurau profiad, nid cwotâu (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae'r pwnc hwn yn adeiladu ar y mesurau arolwg yn y pwnc blaenorol (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid) ac yn ychwanegu mesurau ymddygiadol ac ar sail taith nad ydynt yn dibynnu ar ofyn.

## Egwyddorion allweddol

- **Dechreuwch â chanlyniadau y mae pobl yn poeni amdanynt.** Gofynnwch i ddefnyddwyr sut mae diwrnod da yn edrych, ac ysgrifennwch gytundebau yn eu geiriau hwy.
- **Parwch brofiad â gweithrediadau.** Mae XLA yn eistedd wrth ymyl SLA, nid yn ei le.
- **Defnyddiwch ychydig o fesurau o wahanol onglau.** Cyfunwch yr hyn y mae pobl yn ei ddweud, yr hyn y maent yn ei wneud, a'r hyn y mae'r system yn ei gofnodi.
- **Mesurwch deithiau yn ogystal â phwyntiau cyffwrdd.** Y llwybr cyfan o angen i ganlyniad yw profiad.
- **Byddwch yn onest am ansicrwydd.** Mae data profiad yn swnllyd, ac mae angen gwarchod grwpiau bach.
- **Cytunwch ar dargedau gyda defnyddwyr, a'u diwygio.** Cytundeb byw yw XLA, a adolygir gyda'r bobl y mae'n eu disgrifio.
- **Peidiwch byth â defnyddio data profiad i raddio unigolion.**

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Sgôr profiad | Sgôr gyfartalog datganiad profiad y cytunwyd arno, ar gyfer gwasanaeth a chynulleidfa | sgôr gymedrig ar draws ymatebion dilys i un datganiad ar raddfa sefydlog | pwyntiau graddfa | Arolwg pwls byr, a anfonir ar amserlen | Rheoli lefel gwasanaeth; gwelliant parhaus | Adborth adolygiad rhanddeiliaid; adolygiad canlyniad cynnyrch | Misol |
| Tuedd teimlad | Cyfeiriad y naws mewn sylwadau testun rhydd ar gyfer gwasanaeth | cyfran y sylwadau a godwyd yn gadarnhaol llai cyfran a godwyd yn negyddol, fesul cyfnod | pwyntiau canran | Sylwadau arolwg a sylwadau tocynnau wedi'u codio | Gwelliant parhaus | Themâu ôl-sylliad | Misol |
| Digwyddiadau ffrithiant fesul defnyddiwr | Cyfrif signalau bod defnyddiwr wedi taro trafferth, wedi'i normaleiddio yn ôl defnyddwyr gweithredol | (cysylltiadau dro ar ôl tro + eitemau a ailagorwyd + mewngofnodi a fethodd y tu hwnt i nifer penodol + ceisiadau a adawyd) / defnyddwyr gweithredol | digwyddiadau fesul defnyddiwr | System docynnau, logiau hunaniaeth, porth ceisiadau | Desg gwasanaeth; rheoli digwyddiadau | Diffygion a ganfuwyd wrth eu defnyddio | Misol |
| Amser a gollir i broblemau TG | Amser amcangyfrifedig y mae defnyddwyr yn ei golli i broblemau gwasanaeth mewn cyfnod | munudau a gollwyd wedi'u hunan-adrodd fesul defnyddiwr, neu amser a fesurwyd mewn cyflwr diraddiedig wedi'i bwyso gan ddefnyddwyr yr effeithir arnynt | munudau fesul defnyddiwr | Arolwg pwls; monitro wedi'i uno â chyfrifon defnyddwyr | Rheoli argaeledd; rheoli digwyddiadau | Amser cylch a gollir i rwystrau | Chwarterol |
| Cyfradd cwblhau taith | Cyfran y defnyddwyr sy'n gorffen taith ddiffiniedig heb ei gadael na cheisio cymorth | defnyddwyr yn cwblhau'r daith heb gyswllt cymorth / defnyddwyr yn dechrau'r daith | canran | Dadansoddeg porth; dolenni tocynnau | Rheoli ceisiadau gwasanaeth; rheoli catalog gwasanaethau | Llwyddiant tasg mewn profion defnyddioldeb | Misol |
| Cyrraedd XLA | Cyfran y targedau profiad y cytunwyd arnynt a fodlonwyd yn y cyfnod | targedau a fodlonwyd / targedau y cytunwyd arnynt | canran | Cofrestr yr XLA | Rheoli lefel gwasanaeth | Cyflawni nod cyflawni | Chwarterol |
| Bwlch profiad | Y gwahaniaeth rhwng cyrraedd SLA a sgôr profiad ar gyfer yr un gwasanaeth | rheng cyrraedd SLA llai rheng sgôr profiad ar draws gwasanaethau, neu gymhariaeth ysgrifenedig | gwahaniaeth rheng neu nodyn | Adroddiadau SLA ac arolwg pwls | Rheoli lefel gwasanaeth | Diffiniad o orffen yn erbyn adborth defnyddwyr | Chwarterol |

Diffiniwch y gynulleidfa a'r cyfnod ar gyfer pob mesur. Nodwch sut y gwarchodir grwpiau bach: er enghraifft, ni ddangosir unrhyw ganlyniad ar gyfer unrhyw grŵp o lai na deg o bobl. Mae digwyddiadau ffrithiant yn cyfrif signalau, nid bai, felly mae digwyddiad ynghlwm wrth wasanaeth a grŵp defnyddwyr, byth wrth adolygiad perfformiad person a enwir.

## Argymhellion

### Dyluniwch y cytundeb gyda defnyddwyr

**1. Cyfwelwch cyn i chi fesur.** Treuliwch amser gyda sampl o ddefnyddwyr o bob grŵp pwysig a gofynnwch: Sut mae diwrnod da gyda'r gwasanaeth hwn yn edrych? Ble mae'n gwastraffu eich amser? Beth fyddech chi'n rhoi'r gorau i'w wneud pe bai'n gweithio? Defnyddiwch arferion [dylunio sy'n canolbwyntio ar bobl](https://en.wikipedia.org/wiki/Human-centered_design): arsylwch waith go iawn, ac ysgrifennwch yr hyn a glywch yng ngeiriau'r defnyddiwr. Mae'r datganiadau a ddeillia yn dod yn nodau profiad y cytundeb.

**2. Ysgrifennwch ddatganiadau profiad fel canlyniadau.** Mae "gallaf gael dechreuwr newydd yn gynhyrchiol ar eu bore cyntaf" yn dweud mwy na "cais mynediad dechreuwr newydd wedi'i ddatrys mewn dau ddiwrnod." Cadwch bob datganiad yn fyr, yn y person cyntaf, ac wedi'i glymu ag un gwasanaeth. Anelwch at dri i bump datganiad fesul gwasanaeth fel y gall pobl eu cofio.

**3. Dewiswch fesurau o dair ongl.** Ar gyfer pob datganiad, dewiswch un mesur o'r hyn y mae pobl yn ei ddweud (cwestiwn pwls neu thema sylwadau), un o'r hyn y mae pobl yn ei wneud (cwblhau taith, cysylltiadau dro ar ôl tro, ceisiadau a adawyd), ac, lle bo modd, un o'r hyn y mae'r system yn ei gofnodi (latency ar gyfer camau'r daith). Pan fo'r tri yn anghytuno, rydych wedi dod o hyd i rywbeth i ymchwilio iddo.

**4. Cytunwch ar dargedau'n ysgafn.** Yn gynnar, gosodwch gyfeiriad ("lleihau amser a gollir") a dyddiad adolygu yn lle rhif caled. Mae targedau caled ar gyfer mesurau profiad newydd yn gwahodd chwarae'r system cyn deall y mesur. Pan fo targed yn ymddangos, gwnewch ef yn amrediad, a dywedwch pwy a gytunodd iddo.

### Casglwch a darllenwch y data

**5. Defnyddiwch gwestiynau pwls byr, rheolaidd.** Mae un cwestiwn am un datganiad, a ofynnir ar gyfwng rheolaidd, yn haws i'w ateb nag arolwg hir blynyddol. Cylchdrowch y datganiadau, cadwch y geiriad yn sefydlog, ac osgowch ofyn i'r un person fwy nag unwaith mewn cyfnod penodol. Cysylltwch ddyluniad y pwls ag egwyddorion yr arolwg yn y pwnc blaenorol (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

**6. Darllenwch sylwadau gyda dull.** Gall offer [dadansoddi teimlad](https://en.wikipedia.org/wiki/Sentiment_analysis) ddidoli cyfeintiau mawr o destun, ac maent yn camddarllen coegni, jargon, a chyd-destun. Trinwch allbwn yr offeryn fel tocyn cyntaf, gofynnwch i berson wirio sampl bob mis, a chadwch restr fer o themâu a godir â llaw. Pwynt y dadansoddiad yw dod o hyd i bynciau i siarad amdanynt gyda defnyddwyr, nid cynhyrchu sgôr.

**7. Ychwanegwch signalau ymddygiadol o'r daith.** Offerynnwch y teithiau y mae defnyddwyr yn poeni amdanynt, gyda'u gwybodaeth: ble maent yn dechrau, ble maent yn gollwng, a ble maent yn gofyn am gymorth? Mae [monitro defnyddwyr go iawn](https://en.wikipedia.org/wiki/Real_user_monitoring) o amseroedd llwytho tudalennau, gwallau, a chamau yn rhoi golwg na all arolygon ei rhoi. Dywedwch wrth ddefnyddwyr beth a gesglir, cadwch ef i'r hyn sydd ei angen arnoch, a'i gyfanredu cyn ei rannu.

**8. Gwarchodwch grwpiau bach ac unigolion.** Gall data profiad ddatgelu pwy sy'n cael trafferth. Cyfanredwch ganlyniadau, mygwch grwpiau o dan faint y cytunwyd arno, a pheidiwch byth â defnyddio'r data mewn adolygiadau perfformiad. Penderfynwch pwy gaiff weld sylwadau crai, a'u storio yn unol â hynny. Mewn lleoliadau rheoledig, gwiriwch gydag arbenigwyr preifatrwydd cyn casglu data ymddygiadol.

### Defnyddiwch y cytundeb

**9. Dangoswch SLA ac XLA ochr yn ochr.** Ar yr un dudalen, dangoswch gyrraedd gweithredol a'r mesurau profiad ar gyfer pob gwasanaeth. Y paru yw'r pwynt: mae SLA gwyrdd gyda sgôr profiad sy'n disgyn yn anogwr am sgwrs, ac mae sgôr profiad gwyrdd gyda SLAau'n methu yn haeddu golwg ar yr hyn nad yw defnyddwyr yn cael gwybod.

**10. Cynhaliwch adolygiad profiad rheolaidd gyda defnyddwyr.** Cyfarfod yn chwarterol gyda chynrychiolwyr y grwpiau defnyddwyr, dangoswch y data, gofynnwch beth mae'n ei olygu, a chytunwch ar un neu ddau welliant i'w trio. Cynhwyswch y ddesg gwasanaeth a'r tîm cynnyrch, gan fod achos profiad gwael yn aml yn eistedd yn y cynnyrch, nid yn y cymorth.

**11. Ariennwch yr atgyweiriadau.** Mae cytundeb sy'n adnabod ffrithiant ac yna'n ei adael yn ei le yn dysgu defnyddwyr mai theatr yw'r mesurau. Rhowch y ddwy neu dair problem brofiad uchaf ar yr ôl-groniad gyda pherchnogion a dyddiadau, ac adroddwch arnynt yn yr adolygiad nesaf. Gweler y metrigau gwelliant parhaus yn ddiweddarach yn y llyfr hwn (gweler pwnc 9.5, Metrigau gwelliant parhaus).

**12. Diwygiwch y cytundeb wrth i wasanaethau a defnyddwyr newid.** Ymddeolwch ddatganiadau nad ydynt yn bwysig mwyach ac ychwanegwch rai newydd. Logiwch y newidiadau a'u marcio ar siartiau tuedd, fel y byddech ar gyfer unrhyw ddiffiniad metrig.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Sgôr profiad | Arolygu defnyddwyr bodlon yn unig; amseru'r arolwg ar ôl digwyddiadau da; ail-eirio'r datganiad fel ei bod yn haws cytuno ag ef | Cyfradd ymateb a chymysgedd ymatebwyr; log geiriad sefydlog; darllen sylwadau |
| Tuedd teimlad | Tiwnio'r offeryn neu'r rhestr themâu nes bod y duedd yn codi; eithrio sianeli negyddol | Gwiriad dynol o sampl fisol; cadw canllaw codio sefydlog a logio newidiadau |
| Digwyddiadau ffrithiant fesul defnyddiwr | Ail-ddiffinio digwyddiadau fel bod llai yn cyfrif; digalonni cysylltiadau dro ar ôl tro drwy wneud y ddesg yn anodd ei chyrraedd | Cyfaint cysylltiadau yn ôl sianel; cyfradd gadael yn y ddesg gwasanaeth (gweler pwnc 3.1, Metrigau desg gwasanaeth) |
| Amser a gollir i broblemau TG | Gofyn mewn ffordd sy'n angori amcangyfrifon isel; cyfrif toriadau mawr yn unig | Cymharu amser hunan-adroddedig ag amser diraddiedig a fesurwyd; adolygu geiriad yr arolwg |
| Cyfradd cwblhau taith | Diffinio'r daith mor gul nes bod methiant y tu allan i'r cwmpas; llywio achosion caled i sianel wahanol | Diffiniad y daith yn y gofrestr; cyfradd cysylltiadau cymorth a dwysáu |
| Cyrraedd XLA | Gosod targedau sydd eisoes wedi'u bodloni; diffinio set fach iawn o dargedau | Adolygu gosod targedau gyda defnyddwyr; dangos cyrraedd gyda thuedd a hanes targedau |
| Bwlch profiad | Dewis y gwasanaethau neu'r cyfnodau sy'n edrych orau; newid pa SLAau a gymherir | Set gymharu sefydlog y cytunwyd arni ymlaen llaw; dangos pob gwasanaeth |

Mae darlleniad iach yn ddarlun profiad sy'n cyfateb i'r sylwadau a'r sgwrs adolygu gyda defnyddwyr, set fach o fesurau sy'n newid yn araf ac am resymau y gall y tîm eu hesbonio, ac ôl-groniad o atgyweiriadau profiad sy'n mynd yn fyrrach.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| SLA yn unig | Clir, cyfrifadwy, cytundebol | Colli'r hyn y mae defnyddwyr yn ei deimlo; gall fod yn wyrdd tra bo defnyddwyr yn anhapus |
| XLA yn unig | Agos at yr hyn y mae defnyddwyr yn ei werthfawrogi | Anoddach ei fesur a'i gymharu; gwan fel sail ar gyfer contractau gyda chyflenwyr |
| SLA gydag XLA | Rhoi'r ddwy olwg a datgelu'r bwlch | Mwy o waith; angen ymddiriedaeth a barn wrth ddarllen anghytundebau |
| Mesurau profiad ar sail arolwg | Llais uniongyrchol defnyddwyr | Rhagfarn ymateb; baich ar ymatebwyr |
| Mesurau ymddygiadol | Dim baich arolwg; gwrthrychol | Angen offeryniaeth a gofal preifatrwydd; dangos beth ddigwyddodd, nid pam |
| Mynegai profiad sengl | Pennawd hawdd | Cuddio manylion; hawdd ei chwarae ac yn anodd ei esbonio |

Yr ateb pragmatig yw defnyddio'r XLA fel ychwanegiad, a gyflwynir ar gyfer ychydig o wasanaethau lle mae'r bwlch rhwng gweithrediadau a phrofiad eisoes yn weladwy. Peidiwch â disodli SLAau cytundebol â mesurau profiad na all cyflenwyr eu rheoli. Cadwch yr ymrwymiadau cyfreithiol a masnachol yn yr SLA, a defnyddiwch yr XLA i yrru gwelliant a sgwrs.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Ar gyfer ein gwasanaeth pwysicaf, sut mae diwrnod da yn edrych i ddefnyddwyr, yn eu geiriau hwy?**
Casglwch ddau neu dri defnyddiwr, neu ailddefnyddiwch gyfweliadau diweddar, ac ysgrifennwch eu datganiadau. Dylai'r hwylusydd wrthsefyll eu hail-eirio i dermau gweithredol. Cymharwch y datganiadau â'r SLA cyfredol a gofynnwch pa ddatganiadau y mae'n eu cwmpasu, a pha rai y mae'n eu hanwybyddu. Mae'r bylchau yn ymgeiswyr ar gyfer mesurau profiad.

**2. Ble mae ein dangosfyrddau gwyrdd a straeon ein defnyddwyr yn anghytuno?**
Gofynnwch i'r tîm am achos diweddar lle bodlonodd gwasanaeth ei dargedau a defnyddwyr yn cwyno. Olrheiniwch yr achos drwy'r data: beth wnaethom ni ei fesur, a beth wnaethom ni ei golli? Mae'r sgwrs yn aml yn dod â cham coll, trosglwyddiad, neu gloc a stopiodd yn gynnar i'r wyneb. Cofnodwch yr achos fel enghraifft ar gyfer yr adolygiad nesaf gyda defnyddwyr.

**3. Pa dri mesur fyddem ni'n eu defnyddio i wybod a yw'r datganiad profiad hwn yn wir?**
Dewiswch un datganiad a dewiswch un mesur o'r hyn y mae pobl yn ei ddweud, un o'r hyn y maent yn ei wneud, ac un o'r hyn y mae'r system yn ei gofnodi. Gofynnwch beth allai pob un ei golli, a sut y gellid ei chwarae. Cytunwch ar y set leiaf a fyddai'n argyhoeddi defnyddiwr amheus.

**4. Beth ydym ni'n ei gasglu am ddefnyddwyr na fyddent efallai'n ei ddisgwyl, ac a fyddent yn gyfforddus ag ef?**
Rhestrwch ffynonellau data ymddygiadol a phwrpas pob un. Gofynnwch i gynrychiolydd defnyddwyr ymateb. Dylai'r hwylusydd drin anghysur fel gwybodaeth am y dyluniad, nid fel rhwystr. Penderfynwch beth i roi'r gorau i'w gasglu, beth i'w gyfanredu, a phwy gaiff weld y data crai.

**5. Beth fyddem ni'n ei wneud pe bai'r sgôr profiad yn disgyn tra bo pob SLA yn aros yn wyrdd?**
Ymarferwch yr ymateb. Pwy sy'n edrych yn gyntaf, beth maent yn ei wirio, ac â phwy maent yn siarad? Penderfynwch a fyddai'r tîm yn ymddiried yn y sgôr profiad neu'n chwilio am ffyrdd i'w ddiystyru. Mae'r ateb yn dangos pa mor ddifrifol y mae'r tîm yn cymryd y cytundeb.

**6. Pa atgyweiriadau profiad yr ydym wedi'u haddo, a beth ddigwyddodd iddynt?**
Adolygwch y ddau gyfarfod adolygu diwethaf gyda defnyddwyr. Ar gyfer pob ymrwymiad, dangoswch y dyddiad, y perchennog, a'r canlyniad. Os yw'r rhestr yn wag neu'n hen, trafodwch pam. Cytunwch ar un atgyweiriad i'w gyflawni cyn yr adolygiad nesaf a ffordd i ddweud wrth ddefnyddwyr ei fod wedi digwydd.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cynnyrch yn dal llawer o achos profiad gwael: sgriniau dryslyd, camau araf, gwallau aneglur. Mae mesurau profiad yn rhoi tystiolaeth iddynt o ddefnydd byw, ac maent yn bwydo mireinio'n uniongyrchol. Dylai timau ddarllen themâu'r sylwadau cyn pob sesiwn gynllunio, a chysylltu mesurau taith â'r ôl-groniad. Ni ddylent drin y sgôr profiad fel targed tîm. Gwybodaeth ydyw am y gwasanaeth y maent yn ei rannu â gweithrediadau.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn gweld y ffrithiant yn gyntaf: cysylltiadau dro ar ôl tro, datrysiadau dros dro, a galwyr blin. Mae mesurau profiad yn rhoi ffordd iddynt ddangos yr hyn y mae'r SLA yn ei guddio, a rheswm i drwsio achosion yn hytrach na chau tocynnau'n gyflymach. Dylent ddal y llinell ar ddiffiniadau a samplu, osgoi llywio defnyddwyr i sianeli sy'n edrych yn well, a darllen y sylwadau anhapus yn llawn (gweler pwnc 3.1, Metrigau desg gwasanaeth).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn dewis a yw XLA yn sgwrs neu'n fwrdd sgorio. Dylent ofyn beth mae'r data profiad yn ei ddweud am ble i fuddsoddi, osgoi clymu tâl â mynegai profiad, a gwarchod preifatrwydd data staff. Dylai llywodraethu ofyn am y diffiniadau, y samplu, a hanes newidiadau, a dylai drin naid anesboniadwy mewn mesur profiad fel rheswm i wirio'r dull.

### Cwsmeriaid a defnyddwyr

Defnyddwyr yw awduron y cytundeb. Dylid eu gwahodd i ddisgrifio sut mae da yn edrych, dangos y canlyniadau iddynt, a dweud wrthynt beth a newidiodd. Dylent wybod beth a gesglir amdanynt a pham, a chael ffordd o ddweud na. Bydd defnyddwyr y gofynnir iddynt yn aml ac nad ydynt yn gweld dim yn gwella yn rhoi'r gorau i ateb, a bydd y tawelwch yn gwneud i'r data edrych yn well na realiti.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae cwmni gwasanaethau proffesiynol o faint canolig yn rhedeg gwasanaeth TG mewnol ar gyfer 1,800 o staff. Mae'r rhifau isod yn enghreifftiol.

Mae'r adroddiad SLA misol yn dangos 99.8 y cant o argaeledd ar gyfer y platfform cydweithio a 96 y cant o ddigwyddiadau wedi'u datrys o fewn y targed. Mae cyfarwyddwr TG yn fodlon, ac eto mae ymgynghorwyr ar safleoedd cleientiaid yn dal i gwyno am fewngofnodi araf. Mae rheolwr y gwasanaeth yn cynnig peilot XLA ar gyfer y platfform cydweithio.

Mewn cyfweliadau gyda 12 ymgynghorydd, daw tri datganiad i'r amlwg: "Gallaf ymuno â galwad cleient o fewn dau funud i benderfynu gwneud hynny," "Nid oes rhaid i mi ffonio TG i gael fy nghyfrif yn ôl," a "pan fo rhywbeth yn torri, rwy'n gwybod beth sy'n digwydd." Mae'r tîm yn dewis mesurau ar gyfer pob un. Ar gyfer y cyntaf, maent yn cymryd sgôr pwls y datganiad a'r amser a fesurwyd o ddechrau mewngofnodi i ymuno â'r alwad o fonitro defnyddwyr go iawn y cleient, wedi'i gyfanredu yn ôl rhanbarth. Ar gyfer yr ail, maent yn cyfrif cysylltiadau ailosod cyfrinair fesul defnyddiwr gweithredol y mis. Ar gyfer y trydydd, maent yn olrhain cyfran y digwyddiadau lle diweddarwyd y neges statws o fewn 30 munud, ac yn gofyn y cwestiwn pwls amdano.

Mae dau fis cyntaf y data yn dangos bod amser canolrifol mewngofnodi i ymuno â galwad yn iawn yn rhanbarth y pencadlys ond yn hir mewn dau arall, a bod cysylltiadau ailosod cyfrinair fesul defnyddiwr deirgwaith yn uwch i staff ar liniaduron a reolir nag eraill. Y sgôr profiad ar gyfer y datganiad cyntaf yw 3.1 allan o 5 yn erbyn 4.2 i staff swyddfa. Mae'r SLA yn wyrdd ar y ddau. Mae rheolwr y gwasanaeth yn mynd â'r canfyddiad i adolygiad y defnyddwyr. Mae'r tîm yn cytuno ar ddau welliant: tiwnio'r cyfluniad mewngofnodi sengl ar gyfer rhanbarthau anghysbell, a newid y gosodiadau adnewyddu tocynnau ar liniaduron a reolir. Dri mis yn ddiweddarach, mae'r amser canolrifol yn disgyn, mae cysylltiadau ailosod fesul defnyddiwr yn disgyn, ac mae'r sgôr profiad yn codi i 3.8. Mae'r cyfarwyddwr yn cytuno i gadw'r XLA ar gyfer y gwasanaeth hwn, i'w ychwanegu at un arall, ac i osod dim targed rhifol tan yr adolygiad nesaf.

## Y golwg fesul sector

**Busnes newydd.** Mae cyswllt agos â defnyddwyr yn gwneud cyfweliadau'n hawdd. Gwrthsefwch adeiladu fframwaith: ysgrifennwch dri datganiad profiad ar gyfer y gwasanaeth craidd, gofynnwch i ddefnyddwyr amdanynt bob mis, ac ychwanegwch un mesur ymddygiadol. Daw cytundebau ffurfiol yn ddiweddarach.

**Busnes bach.** Mae staff yn brin ac yn aml yn rhannu rheolwr gyda TG. Defnyddiwch sgyrsiau a phwls misol byr iawn. Byddwch yn ofalus gyda data ymddygiadol, gan fod grwpiau bach yn hawdd eu hadnabod.

**Menter fawr.** Mae graddfa yn dod â llawer o grwpiau defnyddwyr a chyflenwyr. Diffiniwch ddatganiadau profiad fesul gwasanaeth a phersona, cadwch ddangosfyrddau fesul gwasanaeth, ac osgowch fynegai profiad cwmni-eang sengl. Alinio'r XLA â chontractau cyflenwyr fel y gall cyflenwyr gyfrannu data heb gael eu dal i fesurau na allant ddylanwadu arnynt.

**Llywodraeth a'r sector cyhoeddus.** Yn aml mae gwasanaethau'n wynebu'r cyhoedd yn ogystal â staff, gyda dyletswyddau o gwmpas hygyrchedd, iaith blaen, a mynediad cyfartal. Cynhwyswch hygyrchedd yn y datganiadau profiad a'r mesurau, profwch gyda defnyddwyr sy'n dibynnu ar dechnoleg gynorthwyol, a gwarchodwch ddata personol yn unol â'r gyfraith. Lle mae adrodd cyhoeddus yn ofynnol, adroddwch ddulliau gyda chanlyniadau (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae'r gost yn gymedrol. Mae cyfweliadau defnyddwyr yn cymryd ychydig ddyddiau fesul gwasanaeth. Mae arolwg pwls misol angen offeryn arolwg, y mae llawer o sefydliadau eisoes yn ei gael. Mae mesurau ymddygiadol angen rhywfaint o offeryniaeth, a all ddod o fonitro presennol a dadansoddeg porth. Mae'r adolygiad gyda defnyddwyr yn cymryd ychydig oriau bob chwarter. Mae codio sylwadau yn cymryd awr neu ddwy bob mis.

Mae'r elw'n gorwedd mewn dod o hyd i broblemau nad yw SLAau yn eu dangos, megis teithiau araf mewn rhanbarthau neu ddyfeisiau penodol, ac mewn cyfeirio arian gwella at yr hyn y mae defnyddwyr yn ei werthfawrogi. Gellir troi amser a gollir i broblemau TG yn gost gyda chyfraddau eich staff eich hun os ydych yn ei fesur yn ofalus. Osgowch hawliadau generig am enillion cynhyrchiant. Adeiladwch yr achos o'ch llinell sylfaen eich hun: amser a gollir fesul defnyddiwr, digwyddiadau ffrithiant fesul defnyddiwr, a chysylltiadau dro ar ôl tro, cyn ac ar ôl atgyweiriad. Cyfrwch hefyd gost osgoi datrysiadau dros dro, megis offer cysgodol a fabwysiadwyd oherwydd bod y gwasanaeth swyddogol yn lletchwith.

## Gwrthbatrymau a maglau

- **Disodli SLAau ag XLAau.** Mae contractau angen ymrwymiadau cyfrifadwy. Cadwch y ddau a'u dangos gyda'i gilydd.
- **Un mynegai profiad cyfansawdd.** Mae'n cuddio'r achos ac yn gwahodd chwarae'r system. Dangoswch ychydig o fesurau ar wahân.
- **Diffinio profiad heb ddefnyddwyr.** Mae datganiadau a ysgrifennir mewn ystafell gyfarfod yn disgrifio golwg y darparwr. Cyfwelwch a phrofwch gyda defnyddwyr.
- **Arolygu nes bod pobl yn rhoi'r gorau i ateb.** Cadwch bylsiau'n fyr a chylchdrowch bynciau.
- **Casglu data ymddygiadol heb ddweud wrth neb.** Mae'n torri ymddiriedaeth ac efallai'n torri'r gyfraith. Byddwch yn agored am yr hyn a gesglir a pham.
- **Defnyddio data profiad mewn adolygiadau perfformiad.** Mae'n troi offeryn dysgu yn wyliadwriaeth ac yn dinistrio adrodd gonest.
- **Trwsio'r mesur, nid yr achos.** Peidiwch ag ailgyfeirio defnyddwyr i sianel gyfeillgarach i wella rhif. Trwsiwch y daith.
- **Gadael y canfyddiadau ar sleid.** Ariennwch ac olrheiniwch yr atgyweiriadau profiad.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Nodau profiad | Ymhlyg neu'n absennol | Wedi'u hysgrifennu gan y darparwr ar gyfer rhai gwasanaethau | Datganiadau wedi'u hysgrifennu gyda defnyddwyr ar gyfer gwasanaethau allweddol | Datganiadau wedi'u hadolygu a'u diwygio bob chwarter gyda grwpiau defnyddwyr | Wedi'u rhannu ar draws gwasanaethau a chyflenwyr, ym mherchnogaeth ar y cyd â defnyddwyr |
| Mesur | Arolygon achlysurol | Arolwg pwls ar gyfer un gwasanaeth | Mesurau tair ongl (dweud, gwneud, system) ar gyfer pob datganiad | Mesurau wedi'u tueddu, wedi'u gwarchod ar gyfer grwpiau bach, ac wedi'u cymharu ag SLAau | Data wedi'i gyfuno ar draws darparwyr, gyda dewisiadau preifatrwydd a reolir gan ddefnyddwyr |
| Gweithredu | Cwynion yn cael eu trin fesul un | Atgyweiriadau'n cael eu gwneud ad hoc | Problemau profiad uchaf ar yr ôl-groniad gyda pherchnogion | Atgyweiriadau wedi'u hariannu, eu holrhain, a'u hadrodd yn ôl i ddefnyddwyr | Gwelliant wedi'i gydlynu ar draws timau, cyflenwyr, a defnyddwyr, gyda dysgu wedi'i rannu |

## Rhestr wirio

- [ ] Mae gan bob gwasanaeth XLA dri i bump datganiad profiad wedi'u hysgrifennu gyda defnyddwyr.
- [ ] Mae gan bob datganiad fesurau o o leiaf ddwy ongl (dweud, gwneud, system).
- [ ] Mae SLA a mesurau profiad yn ymddangos ar yr un dudalen ar gyfer pob gwasanaeth.
- [ ] Mae arolygon pwls yn fyr, yn rheolaidd, ac yn sefydlog o ran geiriad.
- [ ] Codir sylwadau gan ganllaw sefydlog ac mae person yn gwirio sampl fisol.
- [ ] Mygir grwpiau o dan faint y cytunwyd arno mewn adroddiadau.
- [ ] Datgelir data ymddygiadol a gesglir i ddefnyddwyr a'i gyfyngu i angen.
- [ ] Ni ddefnyddir unrhyw fesur profiad mewn adolygiadau perfformiad unigol.
- [ ] Mae adolygiad chwarterol gyda chynrychiolwyr defnyddwyr yn y calendr.
- [ ] Mae gan y problemau profiad uchaf berchnogion a dyddiadau ar yr ôl-groniad.

## Anogwyr AI

**Drafftiwch ddatganiadau profiad o nodiadau cyfweliad.**

```text
Dyma nodiadau dienw o [nifer] o gyfweliadau gyda defnyddwyr [gwasanaeth] mewn
[math o sefydliad]: [gludwch nodiadau]. Cynigiwch dri i bump datganiad profiad
yn y person cyntaf, pob un wedi'i glymu ag un canlyniad y mae defnyddwyr yn poeni
amdano, gan ddefnyddio eu geiriad hwy lle bo modd. Ar gyfer pob un, awgrymwch un
mesur o'r hyn y mae pobl yn ei ddweud, un o'r hyn y maent yn ei wneud, ac un o'r
hyn y mae'r system yn ei gofnodi. Peidiwch â dyfeisio ffigurau. Rhestrwch eich
rhagdybiaethau ac unrhyw beth na allech ei ddweud o'r nodiadau.
```

**Dewch o hyd i'r bwlch rhwng SLA a phrofiad.**

```text
Ar gyfer [gwasanaeth] yn [cyfnod], ein canlyniadau SLA oedd: [gludwch
ganlyniadau]. Ein data profiad (sgoriau pwls, themâu sylwadau, cyfrifon
ffrithiant) oedd: [gludwch ddata]. Disgrifiwch ble mae'r ddau yn anghytuno,
cynigiwch dri esboniad posibl ar gyfer pob anghytundeb, ac awgrymwch beth i'w
wirio nesaf. Peidiwch â thybio achos na all y data ei gefnogi. Rhestrwch eich
rhagdybiaethau a pha ddata ychwanegol fyddai'n helpu.
```

**Adolygwch ddull preifatrwydd ar gyfer mesurau ymddygiadol.**

```text
Rydym yn bwriadu casglu'r signalau ymddygiadol hyn ar gyfer mesur profiad:
[rhestr]. Defnyddwyr yw [staff, y cyhoedd, neu'r ddau] yn [awdurdodaeth neu
sector]. Adolygwch y cynllun am risgiau i breifatrwydd, ymddiriedaeth, a
thegwch, ac awgrymwch arferion cyfanredu, cadw, a datgelu isafswm. Nodwch
unrhyw beth y dylwn fynd ag ef at arbenigwr preifatrwydd. Peidiwch â rhoi
casgliadau cyfreithiol. Rhestrwch eich rhagdybiaethau.
```

**Paratowch adolygiad profiad chwarterol gyda defnyddwyr.**

```text
Drafftiwch agenda a chrynodeb un dudalen ar gyfer adolygiad profiad chwarterol
o [gwasanaeth] gyda chynrychiolwyr [grwpiau defnyddwyr]. Cynhwyswch ganlyniadau
SLA a phrofiad ochr yn ochr, y prif themâu sylwadau, ymrwymiadau'r chwarter
diwethaf a'u statws, a dau gwestiwn i ddefnyddwyr. Y data: [gludwch ddata].
Cadwch y naws yn blaen ac osgowch jargon. Rhestrwch eich rhagdybiaethau a
marciwch unrhyw honiad y mae angen ei wirio.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod ar gyfer mesur profiad cyn i chi ei ychwanegu at ddangosfwrdd.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig XLA yn cario ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Mae XLA yn ychwanegu nodau a mesurau profiad at dargedau gweithredol, ac mae'n ategu'r SLA.
- Ysgrifennwch ddatganiadau profiad gyda defnyddwyr, yn eu geiriau hwy, a chlymwch bob un â mesurau o'r hyn y mae pobl yn ei ddweud, yn ei wneud, a'r hyn y mae'r system yn ei gofnodi.
- Dangoswch ganlyniadau SLA a phrofiad gyda'i gilydd, a thrinwch anghytundeb fel anogwr i ymchwilio.
- Gwarchodwch ddefnyddwyr: datgelwch yr hyn a gasglwch, cyfanredwch ef, mygwch grwpiau bach, a'i gadw allan o adolygiadau perfformiad.
- Osgowch un mynegai profiad ac osgowch dargedau caled cyn deall y mesurau.
- Ariennwch yr atgyweiriadau y mae'r data'n eu datgelu, a dywedwch wrth ddefnyddwyr beth a newidiodd.

## Cyfeiriadau a darllen pellach

1. ISO 9241-210, *Ergonomics of human-system interaction: Human-centred design for interactive systems*, International Organization for Standardization.
2. Norman, D. A., *The Design of Everyday Things*, revised and expanded edition, Basic Books, 2013.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
5. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
6. Wikipedia, [User experience](https://en.wikipedia.org/wiki/User_experience).
7. Wikipedia, [Customer experience](https://en.wikipedia.org/wiki/Customer_experience).
8. Wikipedia, [Usability](https://en.wikipedia.org/wiki/Usability).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Human-centered design](https://en.wikipedia.org/wiki/Human-centered_design).
11. Wikipedia, [Sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis).
12. Wikipedia, [Real user monitoring](https://en.wikipedia.org/wiki/Real_user_monitoring).
