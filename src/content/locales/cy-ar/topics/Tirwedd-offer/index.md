# Tirwedd offer

**Dewiswch offer ar gyfer y cwestiynau y mae angen eu hateb a'r data y gallwch ymddiried ynddo, cadwch y data yn gludadwy, a gwariwch lai ar lwyfannau nag ar yr arferion sy'n gwneud y rhifau yn werth eu darllen.**

## Crynodeb a chymhelliant

Offer yw lle mae rhaglenni metrigau yn mynd o'i le amlaf, mewn dau gyfeiriad croes. Mae rhai sefydliadau yn prynu platfform dadansoddeg mawr yn gyntaf ac yn darganfod yn ddiweddarach nad oes ganddynt unrhyw ddiffiniadau y cytunwyd arnynt, dim data glân, a dim cynulleidfa. Mae eraill yn adeiladu pentwr o sgriptiau a thaenlenni y mae un person yn eu deall, ac mae'r rhaglen yn dod i ben pan fo'r person hwnnw yn symud ymlaen. Mae'r ddau yn dechrau gyda'r offeryn ac yn anwybyddu'r cwestiynau y mae i fod i'w hateb.

Mae'r dirwedd yn orlawn ac yn newid yn gyflym, felly mae'r pwnc hwn yn fwriadol yn niwtral o ran gwerthwr. Mae'n disgrifio'r mathau o offer, y llifoedd data rhyngddynt, y cyfaddawdau rhwng adeiladu a phrynu, a meini prawf ar gyfer dewis. Nid yw'n enwi unrhyw gynhyrchion, oherwydd bod enwau cynhyrchion yn hen yn gyflym a llyfr yn ganllaw gwael i nodweddion a phrisiau cyfredol. Nid yw'r egwyddorion mesur yn newid gyda'r gwerthwr: gwyddoch beth rydych yn ei fesur, o ble mae'r data yn dod, pwy sy'n berchen arno, a sut y caiff ei ddarllen.

Mae'r rhan fwyaf o'r data sydd ei angen ar raglen metrigau gwasanaeth yn bodoli eisoes mewn systemau cofnod. Mae offer [rheoli gwasanaethau TG](https://en.wikipedia.org/wiki/IT_service_management) yn dal digwyddiadau, ceisiadau, problemau, newidiadau, a chofnodion cyfluniad. Mae systemau rheoli ffynhonnell, adeiladu, profi, a defnyddio yn dal hanes gwaith peirianneg. Mae systemau monitro ac [arsylwadwyedd](https://en.wikipedia.org/wiki/Observability_(software)) yn dal data argaeledd, oedi, a gwallau. Mae offer arolwg, systemau cyllid, systemau adnoddau dynol, a storfeydd contractau yn dal y gweddill. Mae rhaglen metrigau yn uno'r ffynonellau hyn heb darfu ar y gwaith a wneir ynddynt (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

[Piblinell ddata](https://en.wikipedia.org/wiki/Data_pipeline) yw symudiad data o ffynonellau i fan lle gellir ei ddadansoddi, a'r patrwm clasurol yw [echdynnu, trawsnewid, llwytho](https://en.wikipedia.org/wiki/Extract,_transform,_load): darllen o ffynonellau, ail-lunio a glanhau, ac ysgrifennu i storfa. Gall y storfa fod yn [warws data](https://en.wikipedia.org/wiki/Data_warehouse), storfa integredig o ddata o sawl system wedi'i threfnu ar gyfer dadansoddi. Mae rhaglenni yn cyrraedd y systemau hyn drwy [ryngwyneb rhaglennu cymwysiadau](https://en.wikipedia.org/wiki/Application_programming_interface), sef sut mae un darn o feddalwedd yn gofyn i un arall am ddata mewn ffordd ddiffiniedig. Mae ansawdd yr hyn sy'n llifo drwodd yn penderfynu ansawdd pob siart. Mae [ansawdd data](https://en.wikipedia.org/wiki/Data_quality) yn cwmpasu cywirdeb, cyflawnrwydd, cysondeb, ac amseroldeb, a'r ddisgyblaeth sy'n ei gynnal yw [llywodraethu data](https://en.wikipedia.org/wiki/Data_governance).

Mae'r ochr ariannol yn haeddu gofal. Mae [cyfanswm cost perchnogaeth](https://en.wikipedia.org/wiki/Total_cost_of_ownership) offeryn yn cynnwys trwyddedau, seilwaith, integreiddio, hyfforddiant, gweinyddu, a chost ei adael. Mae [cloi i mewn gwerthwr](https://en.wikipedia.org/wiki/Vendor_lock-in) yn sefyllfa lle mae newid cyflenwyr mor gostus nes bod y cwsmer wedi'i rwymo i bob pwrpas. Mae rhaglenni metrigau yn arbennig o agored, oherwydd bod diffiniadau, hanes, a dangosfyrddau yn cronni y tu mewn i offeryn, ac mae eu tynnu allan yn ddiweddarach yn anodd.

Mae'r nodau ystwyth yn siapio'r dull. Mae cyflawni parhaus yn berthnasol i'r rhaglen: sefydlwch y llwybr gweithio teneuaf o un ffynhonnell i un golwg i un tîm, dysgwch o'i ddefnyddio, ac ymestynnwch. Mae cynnwys rhanddeiliaid yn barhaus yn golygu bod y bobl a fydd yn defnyddio'r rhifau yn cymryd rhan mewn dewisiadau offer. Mae gwelliant parhaus ac esblygiad parhaus yn golygu y disgwylir i'r offer newid, felly mae cludadwyedd yn bwysicach na pherffeithrwydd. Mae cyflymder cynaliadwy yn golygu nad yw'r rhaglen yn dod yn brosiect peirianneg data sy'n llwgu'r gwaith y mae'n ei fesur. Ac mae unigolion cymhellol yn gwneud gwell gwaith gydag offer y buont yn helpu i'w dewis ac yn eu deall nag ag offer a osodir oddi uchod, yn enwedig offer sy'n teimlo fel gwyliadwriaeth (gweler pwnc 11.3, Cyflwyno metrigau heb fagu ofn).

Mae'r pwnc yn pwyso ar yr arweiniad dylunio dangosfwrdd (gweler pwnc 11.1, Dylunio dangosfwrdd metrigau gwasanaeth) a'r pynciau llywodraethu yn Rhan 1.

## Egwyddorion allweddol

- **Cwestiynau cyn offer.** Ysgrifennwch y cwestiynau a'r mesurau yn gyntaf, yna gwelwch pa offer sydd eu hangen arnynt.
- **Defnyddiwch y systemau cofnod.** Cymerwch ddata o ble mae'r gwaith yn digwydd, ac osgowch ofyn i bobl ei gofnodi ddwywaith.
- **Cadwch ddiffiniadau y tu allan i'r offeryn.** Cynhaliwch ddiffiniadau metrigau mewn ffurf blaen, gludadwy sy'n goroesi newid platfform.
- **Ffafriwch ddata cludadwy.** Storiwch ddata mewn fformatau agored, gyda rhyngwynebau dogfennedig, a chadwch lwybr allan.
- **Dechreuwch yn denau a thyfwch.** Un ffynhonnell, un golwg, un tîm, yna ymestynnwch.
- **Cyfrwch y gost lawn.** Ffracsiwn o gost integreiddio, glanhau data, a chynnal yw trwyddedau.
- **Diogelwch bobl.** Dylai offer gyfanredu i dimau a gwasanaethau, gorfodi rheolau mynediad, a gwneud gwyliadwriaeth yn anodd.
- **Trinwch y biblinell fel gwasanaeth.** Mae angen perchennog, monitro, profion, a ffordd o drin methiant arni.

## Diffiniadau metrigau

Mae'r mesurau isod yn disgrifio iechyd offer metrigau a'u cyflenwad data. Maent ar gyfer tîm y rhaglen, i gadw'r seilwaith yn onest, ac ni ddylid eu defnyddio i raddio pobl.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cwmpas ffynonellau | Cyfran y systemau cofnod sydd eu hangen ar gyfer y mesurau y cytunwyd arnynt sy'n bwydo'r storfa metrigau yn awtomatig | ffynonellau wedi'u cysylltu a'u profi / ffynonellau sydd eu hangen ar gyfer mesurau y cytunwyd arnynt | canran | Rhestr ffynonellau; cyfluniad piblinell | Rheoli gwybodaeth a thechnoleg; rheoli cyfluniad gwasanaeth | Cyflawni'r biblinell yn barhaus | Chwarterol |
| Dibynadwyedd piblinell | Cyfran y llwythi data a drefnwyd sy'n cwblhau mewn pryd gyda gwiriadau'n pasio | llwythi mewn pryd gyda gwiriadau'n pasio / llwythi a drefnwyd | canran | Logiau piblinell a chanlyniadau profion | Monitro a rheoli digwyddiadau | Profion awtomataidd ac adborth cyflym | Wythnosol |
| Amser i fesur newydd | Amser treigl o gais cymeradwy am fesur newydd i'w argaeledd gyda cherdyn diffiniad | diwrnodau o gymeradwyo i gyhoeddi, canolrif ac 85fed canradd | diwrnodau | Cofnodion cais a rhyddhau | Rheoli ceisiadau gwasanaeth; galluogi newid | Cynyddiadau bach o werth | Chwarterol |
| Cyfradd cysoni | Cyfran y ffigurau allweddol sy'n cyfateb rhwng y storfa metrigau a'r system ffynhonnell ar wiriad wedi'i samplu | ffigurau'n cyfateb o fewn goddefiant / ffigurau a wiriwyd | canran | Gwiriadau cysoni | Rheoli gwybodaeth a thechnoleg | Adborth dibynadwy | Misol |
| Cyfran ymdrech â llaw | Cyfran yr ymdrech ar adroddiadau cylchol a dreulir ar gasglu a glanhau â llaw | oriau ar gamau â llaw / cyfanswm oriau ar adroddiadau cylchol | canran | Amcangyfrifon amser; arolwg tîm | Gwelliant parhaus | Dileu llafur diwerth | Chwarterol |
| Parodrwydd gadael | A ellir allforio'r diffiniadau, yr hanes, a'r dangosfyrddau mewn ffurf ddogfennedig, ddefnyddiadwy | allforion wedi'u profi a'u cwblhau / profion allforio a gynlluniwyd | canran | Cofnodion profi allforio | Rheoli cyflenwyr; rheoli parhad gwasanaeth | Dewisiadau cynaliadwy | Blynyddol |
| Cost offer fesul tîm a gefnogir | Cost flynyddol lawn offer y rhaglen wedi'i rhannu â'r timau y mae'n eu gwasanaethu | (trwyddedau + seilwaith + ymdrech cynnal) / timau a wasanaethir | arian fesul tîm | Cofnodion cyllid ac ymdrech | Rheoli ariannol gwasanaeth | Cyflymder cynaliadwy | Blynyddol |

Cyfrwch ffynonellau yn ôl yr hyn y mae'r mesurau y cytunwyd arnynt ei angen ac nid yr hyn sy'n bodoli, fel nad yw cwmpas yn cael ei godi drwy gysylltu systemau amherthnasol. Mae cysoni yn gofyn am ddewis sampl ymlaen llaw a goddefiant. Mae cost offer fesul tîm a gefnogir yn ffigur disgrifiadol a ddefnyddir i gymharu opsiynau, nid yn darged i'w wthio i lawr. Mae'n cynnwys ymdrech y bobl sy'n cynnal y biblinell.

## Argymhellion

### Penderfynwch beth sydd ei angen arnoch

**1. Ysgrifennwch y gofynion fel cwestiynau a mesurau.** Rhestrwch y mesurau y mae'r rhaglen wedi cytuno i'w cyhoeddi (gweler pwnc 11.1, Dylunio dangosfwrdd metrigau gwasanaeth), y ffynonellau sydd eu hangen ar bob un, pa mor ffres y mae'n rhaid i bob un fod, pwy gaiff ei weld, ac am ba hyd y mae'n rhaid cadw hanes. Gwahaniaethwch rhwng yr hanfodol a'r dewisiadau. Mae dogfen fer o ddwy dudalen yn well na chais hir am gynigion.

**2. Gwnewch restr o'r hyn rydych eisoes yn berchen arno.** Mae gan lawer o sefydliadau nodweddion dadansoddeg yn eu hoffer rheoli gwasanaethau, peirianneg, a monitro nas defnyddir. Mae gan lawer daenlenni, sgriptiau, ac adroddiadau sydd eisoes yn ateb rhan o'r angen. Dechreuwch drwy weld beth all y rhain ei wneud. Yr offeryn rhataf yw'r un y talwyd amdano eisoes ac a ddeallir eisoes.

**3. Cymerwch stoc o'r data cyn yr offeryn.** Ar gyfer pob ffynhonnell, gwiriwch a yw'r data yn gyflawn, wedi'i gofnodi'n gyson, ac yn hygyrch drwy ryngwyneb. Ni all offeryn drwsio categorïau digwyddiadau nad oes neb yn eu defnyddio, cofnodion newid a grëwyd ar ôl y ffaith, na stampiau amser a drosysgrifir. Mae peth o'r gwaith cynnar mwyaf gwerthfawr yn trwsio'r casglu data wrth y ffynhonnell (gweler pwnc 7.4, Metrigau ansawdd cyfluniad a CMDB).

### Adeiladu, prynu, neu gyfuno

**4. Cymharwch adeiladu a phrynu ar gost lawn a ffit.** Mae prynu platfform dadansoddeg neu gynnyrch dadansoddeg peirianneg wedi'i becynnu yn dod â chysylltwyr parod, siartiau, a chymorth, am bris trwyddedau, model sefydlog o'r byd, a dibyniaeth. Mae adeiladu piblinell a golygon yn dod â ffit a rheolaeth, am bris amser peirianneg a chynnal. Mae'r rhan fwyaf o sefydliadau yn gorffen drwy gyfuno: defnyddio adrodd adeiledig lle mae'n ddigon da, defnyddio offeryn dadansoddi cyffredinol ar gyfer golygon, ac adeiladu cysylltwyr tenau lle nad oes dim arall yn ffitio.

**5. Profwch brototeip gyda data go iawn.** Cyn ymrwymo, rhedwch dreial cyfyngedig o ran amser gyda dau neu dri o'ch mesurau eich hun, gan ddefnyddio data go iawn a defnyddwyr go iawn. Gwiriwch pa mor hir y cymerodd cysylltiadau, pa mor dda y trinodd yr offeryn eich diffiniadau, a allai ddangos dosbarthiadau a chanraddau, a sut y rheolodd fynediad. Mae arddangosiadau marchnata yn defnyddio data glân, ac nid yw eich un chi.

**6. Cynlluniwch y gadael cyn mynd i mewn.** Gofynnwch sut y gellir allforio diffiniadau, hanes, a dangosfyrddau, a phrofwch hynny. Ffafriwch offer gyda rhyngwynebau agored a fformatau safonol, a chadwch eich copi eich hun o'r diffiniadau metrigau a'r data glân. Mae cost gadael yn rhan o gost aros, ac mae gadael credadwy yn gwella eich safle negodi (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau).

### Dewiswch gyda meini prawf clir

**7. Defnyddiwch feini prawf dethol niwtral o ran gwerthwr.** Mae meini prawf defnyddiol yn cynnwys y canlynol. A oes gan y ffynonellau data sydd eu hangen arnoch gysylltwyr a gynhelir? A ellir ysgrifennu, fersiynu, ac adolygu diffiniadau? A all yr offeryn ddangos dosbarthiadau, canraddau, a thueddiadau yn ogystal â chyfartaleddau a chyfrifon? A yw'n cyfanredu i dimau a gwasanaethau ac yn gadael i chi gyfyngu golygon lefel unigol? A yw'n cefnogi mynediad ar sail rôl ac archwilio? A ellir allforio data mewn fformatau agored? Sut mae'r gwerthwr yn trin newidiadau, toriadau, a digwyddiadau diogelwch? Beth mae'n ei gostio ar y raddfa y disgwyliwch mewn tair blynedd?

**8. Byddwch yn ofalus o sgorio adeiledig.** Mae rhai offer yn cynnig sgorau cyfansawdd, safleoedd pobl, neu fynegeion "cynhyrchiant" yn syth o'r bocs. Mae'r rhain yn hawdd eu mabwysiadu ac yn anodd eu hamddiffyn (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Gwiriwch a ellir diffodd nodweddion o'r fath, a gosodwch y polisi cyn troi unrhyw beth ymlaen.

**9. Cynhwyswch y bobl a fydd yn ei ddefnyddio.** Gofynnwch i'r timau roi cynnig ar yr opsiynau ar y rhestr fer gyda'u data. Bydd eu cwestiynau yn datgelu terfynau nad oedd dogfen ofynion yn eu datgelu. Cynhwyswch ddiogelwch, preifatrwydd, cyllid, a chaffael yn gynnar (gweler pwnc 8.1, Metrigau digwyddiadau diogelwch a gwendidau).

### Rhedwch y biblinell fel gwasanaeth

**10. Awtomeiddiwch, profwch, a monitrwch y biblinell.** Trinwch lwythi data fel unrhyw wasanaeth cynhyrchu arall. Rhedwch wiriadau awtomataidd ar gyfrifon, amrediadau, dyblygion, a ffresni. Rhybuddiwch ar fethiant, a dangoswch statws ansawdd data ar y dangosfwrdd. Fersiynwch y rhesymeg trawsnewid ac adolygwch newidiadau iddi fel cod (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion).

**11. Cadwch gatalog o ddiffiniadau.** Cynhaliwch gatalog a rennir gyda diffiniad, fformiwla, ffynhonnell, perchennog, a therfynau pob mesur. Gall fod yn storfa o ffeiliau testun plaen, offeryn catalog data, neu wici. Yr hyn sy'n bwysig yw mai dyma'r ffynhonnell gwirionedd ar gyfer ystyr, a bod dangosfyrddau yn darllen ohoni neu'n cysylltu â hi (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

**12. Adolygwch yr offer yn flynyddol.** Bob blwyddyn, gwiriwch beth mae'r offer yn ei gostio, pa rannau y mae'r rhaglen yn eu defnyddio, ble mae ymdrech â llaw yn parhau, a pha opsiynau newydd sy'n bodoli. Ymddeolwch yr hyn nad oes neb yn ei ddefnyddio. Ailystyriwch y cydbwysedd adeiladu neu brynu wrth i'r rhaglen aeddfedu. Cynlluniwch ar gyfer newid fel rhan arferol o'r gwaith.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cwmpas ffynonellau | Cysylltu ffynonellau hawdd neu amherthnasol; cyfrif cysylltiad nad yw'n cario data defnyddiadwy | Cyfrif yn ôl mesurau y cytunwyd arnynt; gwirio cyflawnrwydd data fesul ffynhonnell |
| Dibynadwyedd piblinell | Llacio gwiriadau fel bod llwythi bob amser yn pasio; trefnu llai o lwythi | Adolygu'r gwiriadau am gryfder; olrhain cysoni a chyfrifon rhesi ffynhonnell |
| Amser i fesur newydd | Cyhoeddi heb ddiffiniadau na phrofion; culhau'r hyn sy'n cyfrif fel mesur newydd | Mynnu'r cerdyn diffiniad a gwiriad cysoni ar gyfer cwblhau |
| Cyfradd cysoni | Dewis ffigurau hawdd i'w gwirio; ehangu'r goddefiant ar ôl methiant | Dewis samplau cyn y gwiriad; gosod goddefiant ymlaen llaw; cynnwys ffigurau anodd |
| Cyfran ymdrech â llaw | Tanddatgan gwaith â llaw; cuddio ymdrech mewn cyllidebau eraill | Gofyn i'r bobl sy'n gwneud y gwaith; cymharu ag amser a dreuliwyd yn hwyr ym mhob cylch adrodd |
| Parodrwydd gadael | Profi allforiad rhannol; cyfrif cynllun dogfennedig fel parodrwydd | Rhedeg adferiad llawn i offeryn gwahanol ar sampl; gwirio diffiniadau a hanes |
| Cost offer fesul tîm a gefnogir | Eithrio ymdrech cynnal; ychwanegu timau ar bapur | Cynnwys amser staff; cyfrif timau sy'n defnyddio eu golygon yn weithredol |

Mae darlleniad iach yn dangos data sy'n cyrraedd mewn pryd ac yn cysoni â'r ffynhonnell, mesurau newydd sy'n cael eu cyhoeddi gyda diffiniadau, ymdrech â llaw sy'n disgyn, a gadael sydd wedi'i brofi o leiaf unwaith.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Adrodd adeiledig pob offeryn | Rhad; eisoes yno; wedi'i ddeall | Seilos; diffiniadau anghyson ar draws offer |
| Un gyfres gan un gwerthwr | Integredig; un contract | Cloi i mewn; yn ffitio model y gwerthwr, nid eich un chi |
| Cynnyrch dadansoddeg peirianneg wedi'i becynnu | Dechrau cyflym; cysylltwyr parod | Model sefydlog; risg sgorio lefel unigol; cost ar raddfa |
| Offeryn dadansoddi a gweledigaeth cyffredinol | Hyblyg; sgiliau eang ar gael | Angen cyflenwad data a sgil dylunio |
| Warws gyda haen trawsnewid | Rheolaeth gref; uno ar draws ffynonellau | Ymdrech peirianneg; angen perchnogaeth |
| Taenlenni a sgriptiau | Cyflym i ddechrau; dim trwydded | Bregus; yn dibynnu ar unigolion; anodd eu harchwilio |
| Pentwr ffynhonnell agored | Rheolaeth; dim cost trwydded | Ymdrech cynnal; cymorth yn dibynnu arnoch chi |
| Metrigau a gesglir â llaw | Yn gweithio heb unrhyw offer | Araf; yn dueddol o wallau; anodd eu cynnal |

Yr ateb pragmatig yw dechrau gyda'r hyn sydd gennych eisoes, ychwanegu'r cysylltiad teneuaf sy'n ateb cwestiynau go iawn, cadw diffiniadau a data yn gludadwy, a symud i offer trymach dim ond pan fo'r rhai ysgafnach yn cyfyngu penderfyniadau'n amlwg.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa rifau ydym ni'n eu cynhyrchu â llaw bob mis, a beth fyddai'n ei gymryd i stopio?**
Rhestrwch yr adroddiadau â llaw a'r oriau y maent yn eu cymryd. Darganfyddwch ffynhonnell pob un ac a oes ganddi ryngwyneb. Dylai'r hwylusydd ofyn pa adroddiadau y gellid eu gollwng yn syml. Cytunwch ar un i'w awtomeiddio ac un i'w ymddeol.

**2. Pe bai ein hofferyn adrodd cyfredol yn diflannu yfory, beth fyddem ni'n ei golli?**
Enwch y diffiniadau, hanes, a dangosfyrddau sy'n bodoli y tu mewn iddo yn unig. Gwiriwch pa rai ohonynt y gellir eu hallforio. Cytunwch ble i gadw copi.

**3. Pa ddata yn ein systemau ydym ni'n ymddiried leiaf ynddo, a pham?**
Edrychwch ar arferion mewnbynnu, rhagosodiadau, a meysydd a drosysgrifir. Amcangyfrifwch pa mor bell mae pob ystumiad yn effeithio ar y mesurau a gyhoeddwn. Cytunwch pa atgyweiriad ffynhonnell fyddai'n ychwanegu'r mwyaf o ymddiriedaeth am yr ymdrech leiaf.

**4. Beth mae'r offeryn yn gadael i bobl ei weld na fyddem ni eisiau iddo?**
Gwiriwch olygon lefel unigol, logiau gweithgarwch, a safleoedd. Penderfynwch beth i'w gyfyngu neu ei ddiffodd, ac ysgrifennwch y rheol cyn i neb ddefnyddio'r nodwedd.

**5. Pa mor hir mae'n ei gymryd i ni ychwanegu mesur newydd, a beth sy'n ein harafu?**
Olrheiniwch gais diweddar o gymeradwyo i argaeledd. Marciwch yr aros. Cytunwch beth i'w dynnu, megis cymeradwyaethau, diffiniadau coll, neu lanhau â llaw.

**6. Beth yw cost lawn yr offeryn hwn i un tîm am un flwyddyn?**
Ychwanegwch drwyddedau, seilwaith, integreiddio, hyfforddiant, ac amser y bobl sy'n ei gynnal. Cymharwch â'r penderfyniadau y gwellodd. Trafodwch beth fyddem ni'n rhoi'r gorau i dalu amdano.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau eisiau data sy'n dod o'r gwaith heb gofnodi ychwanegol, a golygon sy'n ateb eu cwestiynau. Dylent helpu i ddewis a phrofi offer, bod yn berchen ar ddiffiniadau eu mesurau eu hunain, a gwrthod nodweddion sy'n graddio unigolion. Eu hamser yw'r mewnbwn prinnaf, a bydd offer sy'n gofyn iddynt logio gwaith ddwywaith yn cael eu gwrthsefyll.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn rhedeg y ffynonellau ac yn aml y biblinell. Dylent drin y biblinell fel gwasanaeth gyda monitro a phrofion, cadw meysydd data ffynhonnell yn ddibynadwy, a fflagio newidiadau mewn systemau cofnod a fydd yn torri cysylltwyr. Hwy yw'r cyntaf i weld pan fo rhif yn anghywir.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn ariannu'r rhaglen ac yn gosod disgwyliadau. Dylent ofyn am gyfanswm cost, nid pris trwydded, mynnu cludadwyedd a ffordd allan, gwrthsefyll prynu platfform i ddatrys problem diffiniadau, a mynnu rheolau preifatrwydd a mynediad. Dylent dderbyn dechrau cymedrol a'i farnu yn ôl y penderfyniadau y mae'n eu gwella.

### Cwsmeriaid a defnyddwyr

Anaml y mae cwsmeriaid a defnyddwyr yn gweld yr offer, ac maent yn byw gyda'i ganlyniadau: mae data amdanynt yn cael ei storio, ei gyfuno, a'i ddadansoddi. Maent yn haeddu rheolau clir ar yr hyn a gesglir, am ba hyd y caiff ei gadw, pwy sy'n ei weld, a sut y caiff ei ddiogelu. Lle mae mesurau yn tynnu ar eu hadborth, dylai'r offer barchu cydsyniad ac anhysbysrwydd.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae gan gwmni logisteg rhanbarthol offeryn rheoli gwasanaethau, system rheoli ffynhonnell a defnyddio, platfform monitro, ac offeryn arolwg, ac mae pob un yn cynhyrchu ei adroddiadau ei hun. Mae pennaeth rheoli gwasanaethau eisiau un golwg o iechyd gwasanaeth ar gyfer 12 tîm. Mae gwerthwr yn cynnig platfform dadansoddeg popeth-mewn-un gyda chontract tair blynedd. Mae'r ffigurau isod yn enghreifftiol.

Mae pennaeth rheoli gwasanaethau yn ysgrifennu'r cwestiynau a'r 14 mesur y cytunodd y timau a'r arweinwyr arnynt yn y sesiynau dangosfwrdd yn gyntaf. Mae hi'n gwneud rhestr o'r hyn sy'n bodoli: gall yr offeryn rheoli gwasanaethau allforio data digwyddiadau a newid drwy ei ryngwyneb, mae'r system defnyddio yn darparu stampiau amser defnyddio, ac mae'r platfform monitro yn adrodd argaeledd yn erbyn amcanion. Mae hi'n gofyn i grŵp bach o gynrychiolwyr tîm brofi dau opsiwn ar dri mesur gyda data go iawn: platfform y gwerthwr a chyfuniad o offeryn gweledigaeth cyffredinol gyda storfa ddata fach a chysylltwyr tenau.

Mae'r treial yn datgelu gwahaniaethau. Cysylltodd y platfform â'r holl ffynonellau mewn dau ddiwrnod, ond cyfrifodd amser arweiniol fel cymedr ac ni allai ddangos canradd uchel, roedd ganddo "sgôr cynhyrchiant tîm" adeiledig na ellid ei ddiffodd, a chynhyrchodd allforio diffiniadau dangosfwrdd ffeil na allai unrhyw offeryn arall ei darllen. Cymerodd y cyfuniad 11 diwrnod i'w gysylltu, ond dangosodd gyfartaleddau a chanraddau, cadwodd ddiffiniadau fel testun plaen mewn storfa, a chyfyngodd feysydd lefel unigol yn y storfa ddata. Mae'r grŵp hefyd yn darganfod bod 30 y cant o gofnodion newid wedi'u creu ar ôl defnyddio, felly roedd amser arweiniol yn anghywir waeth pa offeryn a'i darllenodd. Daw trwsio'r arferiad mewnbynnu wrth y ffynhonnell yn ddarn cyntaf o waith.

Mae'r cwmni'n dewis y cyfuniad. Mae cwmpas ffynonellau yn codi o 3 o 8 ffynhonnell sydd eu hangen i 7 o 8 dros ddau chwarter. Mae dibynadwyedd piblinell yn dechrau ar 71 y cant o lwythi mewn pryd gyda gwiriadau'n pasio, ac yn cyrraedd 96 y cant ar ôl i'r tîm ychwanegu profion a rhybuddion methiant. Mae amser i fesur newydd yn disgyn o ganolrif o 31 diwrnod i 9. Mae ymdrech â llaw ar yr adroddiad misol yn disgyn o tua 40 awr i 6. Mae cyfarwyddwr yn gofyn a ellid ychwanegu sgôr cynhyrchiant platfform y gwerthwr i roi un safle o dimau. Mae pennaeth rheoli gwasanaethau yn esbonio'r dadansoddiad ym mhwnc 1.2, yn dangos beth ddigwyddodd pan ddefnyddiwyd sgôr debyg mewn mannau eraill yn y cwmni, ac yn cynnig yr olwg gytbwys gyfredol. Cofnodir y penderfyniad, ac mae'r nodwedd sgôr yn cael ei diffodd mewn unrhyw offeryn sydd ag un.

## Y golwg fesul sector

**Busnes newydd.** Defnyddiwch yr hyn y mae'r cynnyrch a'r offer presennol yn ei ddarparu eisoes. Gall taenlen ac adroddiadau adeiledig yr offer a ddefnyddiwch ateb y rhan fwyaf o gwestiynau cynnar. Gwrthwynebwch blatfform data nes bod y cwestiynau yn sefydlog a'r ymdrech â llaw yn brifo. Cadwch ddiffiniadau metrigau wedi'u hysgrifennu fel bod symud yn ddiweddarach yn hawdd.

**Busnes bach.** Mae ychydig o fesurau ac ychydig o systemau yn golygu offer syml. Mae adroddiadau adeiledig a thaenlen yn aml yn ddigon. Y prif risgiau yw data a gedwir ym mhen un person yn unig ac mewn offer heb allforio. Dewiswch gynhyrchion y gallwch eu gadael, ac ysgrifennwch y diffiniadau.

**Menter fawr.** Mae llawer o systemau, llawer o dimau, a llawer o ddiffiniadau yn dadlau dros storfa ddata lywodraethedig, catalog o ddiffiniadau, a golygon haenog. Mae perchnogaeth ffederal yn gweithio'n well na thîm canolog sy'n adeiladu pob adroddiad. Rhowch sylw i gloi i mewn, rheoli mynediad, preifatrwydd, ac asesu cyflenwyr, ac ystyriwch dîm platfform bach sy'n darparu'r biblinell fel gwasanaeth.

**Llywodraeth a'r sector cyhoeddus.** Mae rheolau caffael, sofraniaeth data, a hygyrchedd yn effeithio ar ddewisiadau offer. Mae safonau agored a chludadwyedd yn werthfawr oherwydd bod contractau'n hir a gweinyddiaethau'n newid. Cynlluniwch ar gyfer asesiadau diogelwch, cadw cofnodion, a rheolau datgelu cyhoeddus, a gwiriwch arweiniad cyfredol ar westeio a chaffael (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae'r costau'n cynnwys trwyddedau neu danysgrifiadau, seilwaith, gwaith integreiddio a chysylltwyr, glanhau data, gwaith diffiniadau a chatalog, hyfforddiant, cymorth, a'r ymdrech gylchol o gadw'r biblinell yn iach. Mae opsiynau adeiladu yn cario costau peirianneg sy'n hawdd eu tanddatgan, ac mae opsiynau prynu yn cario ffioedd sy'n tyfu gyda graddfa a chost gadael.

Daw'r enillion o ymdrech adrodd a arbedwyd, atebion cyflymach, llai o anghydfodau am rifau, a gwell penderfyniadau o ddata y ceir ymddiriedaeth ynddo. Adeiladwch yr achos o'ch data eich hun: oriau a dreulir ar adroddiadau â llaw nawr, nifer y fersiynau cystadleuol o un ffigur, yr oedi rhwng cwestiwn ac ateb, a chostau offer sy'n gorgyffwrdd. Osgowch ddyfynnu ffigurau dadansoddwyr am enillion dadansoddeg heb ffynhonnell y gellir ei holrhain a pherthnasedd i'ch cyd-destun. Mae cymhariaeth deg yn cyfrif cost lawn pob opsiwn dros dair blynedd, gan gynnwys gadael (gweler pwnc 7.5, Cost gwasanaeth ac economeg uned, a phwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Offeryn yn gyntaf, cwestiynau wedyn.** Mae'r platfform yn cyrraedd, ac nid oes neb yn gwybod beth i'w ofyn iddo. Ysgrifennwch y mesurau yn gyntaf.
- **Prynu i ddatrys problem diffiniadau.** Mae anghytundeb am ystyr yn parhau mewn unrhyw offeryn. Setlwch y diffiniadau.
- **Sgorau unigol adeiledig.** Maent yn temtio ac yn ystumio. Diffoddwch hwy a gosodwch y polisi yn gyntaf.
- **Dim gadael.** Mae hanes a diffiniadau yn gaeth. Profwch allforio a chadwch gopi.
- **Y biblinell un person.** Mae'n stopio pan fo'r person hwnnw'n gadael. Dogfennwch hi, profwch hi, a rhannwch berchnogaeth.
- **Cofnodi dwbl.** Mae pobl yn logio'r un gwaith ddwywaith, ac mae ansawdd y ddau yn disgyn. Cymerwch ddata o'r systemau cofnod.
- **Gor-beiriannu yn gynnar.** Mae platfform data yn cyrraedd cyn bod un golwg wedi profi ei werth. Dechreuwch yn denau.
- **Anwybyddu ansawdd data.** Mae siartiau glân ar ddata brwnt yn camarwain yn fwy argyhoeddiadol. Trwsiwch gasglu wrth y ffynhonnell.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Cyflenwad data | Casglu â llaw; taenlenni | Rhai bwydydd awtomataidd; sgriptiau unigol | Ffynonellau y cytunwyd arnynt yn bwydo storfa a rennir drwy biblinellau wedi'u profi | Dibynadwyedd, cysoni, a ffresni wedi'u rheoli a'u gwneud yn weladwy | Piblinellau ffederal gyda chontractau a rennir ar draws timau a chyflenwyr; ffynonellau wedi'u gwella o adborth |
| Diffiniadau a chatalog | Ym mhennau pobl | Rhai wedi'u dogfennu | Un catalog o ddiffiniadau gyda pherchnogion, wedi'i fersiynu a'i adolygu | Catalog yn gyrru dangosfyrddau; newidiadau wedi'u hadolygu gyda defnyddwyr | Diffiniadau wedi'u cyd-berchnogi ar draws timau a chyflenwyr; wedi'u hymddeol pan fyddant yn rhoi'r gorau i hysbysu penderfyniadau |
| Dewis a chost | Pryniannau ad hoc | Offer sy'n gorgyffwrdd | Meini prawf wedi'u hysgrifennu; gadael wedi'i brofi; cost lawn wedi'i chyfrif | Cost fesul tîm a gefnogir ac ymdrech â llaw wedi'u rheoli | Dewisiadau offer wedi'u hadolygu'n rheolaidd gyda defnyddwyr ac wedi'u haddasu wrth i anghenion newid |

## Rhestr wirio

- [ ] Ysgrifennir y mesurau y cytunwyd arnynt a'u cwestiynau cyn cymharu offer.
- [ ] Gwnaed rhestr o'r offer a'r adroddiadau presennol a'u profi yn gyntaf.
- [ ] Gwiriwyd ansawdd data yn y prif ffynonellau a thrwsiwyd y bylchau gwaethaf.
- [ ] Ysgrifennir meini prawf dethol ac maent yn cynnwys dosbarthiadau, rheoli mynediad, ac allforio.
- [ ] Gwnaed treial cyfyngedig o ran amser gyda data go iawn a defnyddwyr go iawn cyn unrhyw ymrwymiad.
- [ ] Diffoddir neu gyfyngir nodweddion sgorio a safle lefel unigol gan bolisi.
- [ ] Cedwir diffiniadau mewn catalog cludadwy y tu allan i unrhyw un offeryn.
- [ ] Mae gan y biblinell berchennog, gwiriadau awtomataidd, monitro, a rhybudd methiant.
- [ ] Profwyd allforio diffiniadau a hanes.
- [ ] Cyfrifwyd cost lawn dros dair blynedd, gan gynnwys gadael.

## Anogwyr AI

**Ysgrifennwch ofynion o gwestiynau.**

```text
Dyma'r cwestiynau y mae ein cynulleidfaoedd yn eu gofyn a'r mesurau yr ydym yn
bwriadu eu cyhoeddi: [gludwch]. Drafftiwch ddogfen ofynion dwy dudalen ar gyfer
offeryn neu biblinell metrigau. Cwmpaswch ffynonellau data, ffresni, rheoli
mynediad, cadw, dosbarthiadau a chanraddau, allforio a chludadwyedd, a rhestr o'r
hanfodol yn erbyn dewisiadau. Peidiwch ag enwi cynhyrchion. Rhestrwch eich
rhagdybiaethau a'r pwyntiau i'w cadarnhau gyda'r timau.
```

**Cynlluniwch dreial offeryn.**

```text
Rydym yn cymharu [opsiynau] ar gyfer ein rhaglen metrigau. Dyluniwch dreial
pythefnos gan ddefnyddio tri o'n mesurau a data go iawn. Nodwch beth i'w brofi, sut
i sgorio'r opsiynau yn erbyn meini prawf ysgrifenedig, pwy ddylai gymryd rhan, sut i
wirio rheoli mynediad ac allforio, a pha dystiolaeth y byddwn yn ei chofnodi.
Peidiwch â honni canlyniadau am gynhyrchion penodol. Rhestrwch eich rhagdybiaethau
a risgiau.
```

**Adolygwch biblinell ddata.**

```text
Dyma ddisgrifiad o sut mae data'n llifo o [ffynonellau] i'n dangosfyrddau:
[gludwch]. Nodwch bwyntiau lle gallai data fod yn hwyr, wedi'i ddyblygu, ei
drosysgrifo, neu ei golli, ac awgrymwch wiriadau awtomataidd ar gyfer pob un.
Cynigiwch ffordd i gysoni ffigurau allweddol â'r ffynhonnell. Peidiwch â dyfeisio
ymddygiad system. Rhestrwch eich rhagdybiaethau a'r hyn na allech ei ddweud o'r
disgrifiad.
```

**Cymharwch gost lawn.**

```text
Helpwch fi i gymharu cost lawn tair blynedd adeiladu, prynu, a chyfuno offer ar
gyfer ein rhaglen metrigau. Rhestrwch y categorïau cost ar gyfer pob opsiwn, gan
gynnwys trwyddedau, seilwaith, integreiddio, glanhau data, hyfforddiant, cynnal, a
gadael. Rhowch dabl gyda mannau gwag ar gyfer ein ffigurau ein hunain. Peidiwch â
rhoi prisiau. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r ffynhonnell data a'r rheilen warchod ar gyfer pob mesur wrth ysgrifennu gofynion.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod penderfyniad offer yn cario diffiniadau, ffynonellau data, a rheiliau gwarchod.

## Pwyntiau allweddol

- Ysgrifennwch y cwestiynau a'r mesurau yn gyntaf, a dewiswch offer i'w gwasanaethu.
- Defnyddiwch y systemau cofnod, trwsiwch gasglu data wrth y ffynhonnell, a phrofwch gysoni.
- Cadwch ddiffiniadau a data yn gludadwy, a phrofwch y gadael cyn ymrwymo.
- Diffoddwch sgorio a safleoedd lefel unigol, a gosodwch y polisi cyn troi unrhyw nodwedd ymlaen.
- Rhedwch y biblinell fel gwasanaeth gyda pherchennog, profion, a monitro.
- Cyfrwch y gost lawn dros sawl blwyddyn, a dechreuwch gyda'r llwybr teneuaf sy'n ateb cwestiynau go iawn.

## Cyfeiriadau a darllen pellach

1. Kimball, R., and Ross, M., *The Data Warehouse Toolkit*, Wiley, 3rd edition, 2013.
2. Redman, T., *Data Driven: Profiting from Your Most Important Business Asset*, Harvard Business Press, 2008.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution Press, 2018.
4. Axelos, *ITIL 4 Foundation*, 2019.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
7. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
8. Wikipedia, [Data pipeline](https://en.wikipedia.org/wiki/Data_pipeline).
9. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
10. Wikipedia, [Data warehouse](https://en.wikipedia.org/wiki/Data_warehouse).
11. Wikipedia, [Application programming interface](https://en.wikipedia.org/wiki/Application_programming_interface).
12. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
13. Wikipedia, [Data governance](https://en.wikipedia.org/wiki/Data_governance).
14. Wikipedia, [Total cost of ownership](https://en.wikipedia.org/wiki/Total_cost_of_ownership).
15. Wikipedia, [Vendor lock-in](https://en.wikipedia.org/wiki/Vendor_lock-in).
