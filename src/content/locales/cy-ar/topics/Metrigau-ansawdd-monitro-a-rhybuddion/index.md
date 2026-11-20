# Metrigau ansawdd monitro a rhybuddion

**Cais am sylw person yw rhybudd, felly mesurwch fonitro yn ôl pa mor aml yr oedd y cais hwnnw'n werth ei wneud, faint o'r trafferth go iawn a ddaliodd, a faint o gwsg ac ymddiriedaeth a gostiodd.**

## Crynodeb a chymhelliant

Monitro yw casglu, prosesu, a dangos data amser real am system. Mae [monitro systemau](https://en.wikipedia.org/wiki/System_monitoring) yn ateb y cwestiwn "a yw'r gwasanaeth yn gweithio fel y mae ei angen ar ddefnyddwyr?" Rhybudd yw'r pwynt lle mae'r data hwnnw yn gofyn i berson wneud rhywbeth. Mae'r rhan fwyaf o dimau'n mesur y gweithgaredd cyntaf yn wael neu ddim o gwbl, ac yn mesur yr ail dim ond drwy gwynion. Mae'r pwnc hwn yn rhoi set fach o fesurau i chi ar gyfer y ddau: a yw'r monitro yn gweld y methiannau sy'n bwysig, ac a yw'r rhybuddion y mae'n eu codi yn haeddu'r sylw y maent yn ei fynnu.

Rhai termau yn gyntaf. Yng ngeirfa ITIL 4, mae digwyddiad (event) yn newid cyflwr sydd ag arwyddocâd ar gyfer rheoli gwasanaeth, a rheoli digwyddiadau yw'r arfer o ganfod digwyddiadau, penderfynu pa rai sy'n bwysig, a dewis yr ymateb. Hysbysiad i berson yw rhybudd, a ddanfonir fel galwad, neges, neu docyn. Rhybudd sy'n ymyrryd â rhywun ar unwaith yw galwad. Positif ffug yw rhybudd a daniodd pan nad oedd angen sylw ar ddim, a negatif ffug yw methiant na adroddodd unrhyw rybudd amdano; daw'r ddau derm o iaith [positifau ffug a negatifau ffug](https://en.wikipedia.org/wiki/False_positives_and_false_negatives). Rhybudd gweithredadwy yw un lle'r oedd gan berson weithred ddefnyddiol i'w chymryd, ac a'i cymerodd neu a ddewisodd yn fwriadol beidio am reswm a gofnodwyd.

Mae dwy ochr monitro yn tynnu yn erbyn ei gilydd. Mae ychwanegu rhybuddion ar ôl pob digwyddiad yn adeiladu mur o sŵn; mae eu torri i'w dawelu yn peryglu tawelwch yn ystod y methiant sy'n bwysig. Mae iaith [manylder ac adalw](https://en.wikipedia.org/wiki/Precision_and_recall) yn ffitio'n dda. Mae manylder yn gofyn pa gyfran o'r rhybuddion a godwyd oedd yn werth eu codi. Mae adalw yn gofyn pa gyfran o'r problemau go iawn a ddaliodd y rhybuddion. Cydbwysedd rhwng y ddau yw ansawdd rhybuddion, ac mae metrig sy'n gwylio dim ond un yn gwahodd y tîm i aberthu'r llall. Mae'r [gymhareb signal-i-sŵn](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) yn cipio'r un tensiwn.

Y gost ddynol yw'r rheswm y mae hyn yn perthyn mewn llyfr metrigau gwasanaeth. [Blinder larwm](https://en.wikipedia.org/wiki/Alarm_fatigue) yw'r tueddiad a ddogfennwyd yn dda mewn pobl sy'n agored i lawer o larymau, y rhan fwyaf ohonynt yn ddibwys, i ddod yn ansensitif ac yn araf i ymateb i'r rhai sy'n bwysig. Astudiwyd ef gyntaf mewn lleoliadau clinigol ac mae'n berthnasol i unrhyw gylchdro [ar alwad](https://en.wikipedia.org/wiki/On-call) sy'n cael galwadau'n rhy aml gan rybuddion nad ydynt yn arwain i unman. Mae ymatebwyr blinedig yn colli digwyddiadau go iawn ac yn y pen draw yn gadael y cylchdro.

Mae'r golygon yn wahanol ar draws y ddwy draddodiad y mae'r llyfr hwn yn eu huno. Mae ITIL 4 yn gosod y gwaith hwn yn yr arfer monitro a rheoli hysbysiadau, gyda chysylltiadau â rheoli digwyddiadau a rheoli lefel gwasanaeth. Ei bryder yw bod digwyddiadau'n cael eu canfod, eu dosbarthu, a'u llwybro fel bod digwyddiadau'n cael eu canfod yn gynnar a'u trin yn gyson. Mae [peirianneg dibynadwyedd safleoedd (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) yn dod ato o'r pen arall: mae llyfr *Site Reliability Engineering* Google yn dadlau y dylai galwadau fod yn frys, yn bwysig, yn weithredadwy, ac yn real, a bod popeth arall yn perthyn mewn tocyn neu ddangosfwrdd. Mae timau ystwyth yn cwrdd ag ef fel cytundeb gweithio: pwy a ddeffrir, am beth, a phwy sy'n trwsio rhybudd anghywir. Mae'r metrigau isod yn benthyg o'r tri ac yn cadw un rheol: mae metrig yn disgrifio cylchdro, gwasanaeth, neu reol rhybuddio, byth unigolyn.

Nid yw'r pwnc hwn yn ailadrodd ei gymdogion. Mae amseriadau digwyddiadau yn perthyn i bwnc 3.3, Amser ymateb a datrys digwyddiadau, digwyddiadau mawr i bwnc 3.4, Metrigau digwyddiadau mawr, amcanion a chyllidebau gwallau i bwnc 5.2, SLIau, SLOau a chyllidebau gwallau, a llwyth dynol i bwnc 5.7, Metrigau llafur diwerth ac ar alwad. Yma'r pwnc yw ansawdd y signal sy'n cychwyn pob un o'r rheini. Ymdrinnir ag offeryniaeth ym mhwnc 1.5, Ffynonellau data ac offeryniaeth.

## Egwyddorion allweddol

- **Galwch ar symptomau y mae defnyddwyr yn eu teimlo; rhowch docyn neu ddangosfwrdd i'r gweddill.** Mae rhybudd ar yr hyn y mae defnyddwyr yn ei brofi (gwallau, arafwch, anhygyrchedd) yn aros yn ddefnyddiol wrth i'r system newid. Mae rhybudd ar achos (disg llawn, CPU prysur) yn ddefnyddiol dim ond pan fo'n rhagfynegi symptom a bod person yn gallu gweithredu cyn iddo gyrraedd.
- **Rhaid i bob rhybudd arwain at weithred.** Os mai gwneud dim yw'r ymateb cywir i rybudd, dylid newid y rhybudd, ei ostwng i docyn, neu ei ddileu. Mesurwch y gyfran sy'n arwain at weithred, a thrinwch y gweddill fel diffygion yn y monitro.
- **Mesurwch fanylder ac adalw.** Mae cyfrif sŵn yn unig yn gwobrwyo tawelwch, ac mae cyfrif cwmpas yn unig yn gwobrwyo cyfaint. Mae'r ddau gyda'i gilydd yn disgrifio ansawdd, ac mae pob un yn gweithredu fel rheilen warchod i'r llall.
- **Trinwch bob rheol rhybuddio fel cynnyrch â pherchennog.** Mae gan reol bwrpas, trothwy, llawlyfr gweithredu, a dyddiad adolygu. Mae rheolau heb berchennog yn cronni, ac mae'r sŵn y maent yn ei gynhyrchu yn perthyn i neb.
- **Adroddwch ar gylchdroeon a gwasanaethau, byth bobl.** Mae llwyth rhybuddion yn briodwedd o sut y dyluniwyd y system a'r cylchdro. Mae enwi unigolion yn troi problem ddylunio yn broblem bai ac yn cuddio'r atgyweiriad go iawn.

## Diffiniadau metrigau

Dewisir y metrigau isod fel set. Mae cyfaint ar ei ben ei hun yn ddiystyr, mae gweithredadwyedd yn dweud wrthych a yw cyfaint yn broblem, ac mae cwmpas ac amser canfod yn dweud wrthych beth mae'r tawelwch yn ei guddio. Cyfrifir pob un ohonynt fesul gwasanaeth neu fesul cylchdro, ac mae pob un yn defnyddio'r cofnod rhybuddion o'r offer monitro a galw wedi'i uno â'r cofnodion digwyddiadau a thocynnau.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfaint rhybuddion | Nifer y rhybuddion a hysbysodd berson, wedi'u rhannu'n alwadau a thocynnau | Cyfrif hysbysiadau gwahanol a ddanfonwyd i gylchdro neu giw yn y cyfnod; grwpir ailadroddiadau o'r un rhybudd agored yn un; eithrir rhybuddion a drinnir yn gyfan gwbl gan awtomeiddio heb hysbysiad dynol; adroddwch fesul cylchdro yr wythnos, a'r gyfran y tu allan i oriau ar wahân | rhybuddion fesul wythnos cylchdro | Offeryn galw a llwybro rhybuddion | Monitro a rheoli hysbysiadau | Cytundeb gweithio tîm ar alwad | Wythnosol |
| Cyfradd rhybuddion gweithredadwy | Cyfran y rhybuddion y cymerodd person weithred ddefnyddiol ar eu hôl | Rhybuddion gyda gweithred a gofnodwyd (atgyweiriad, lliniaru, dwysáu, neu newid i'r rheol rybuddio) / rhybuddion a adolygwyd yn y cyfnod; cyfrifir rhybuddion a ddatryswyd yn awtomatig cyn unrhyw gydnabyddiaeth fel rhai nad ydynt yn weithredadwy; adroddir rhybuddion heb eu hadolygu fel cyfrif ar wahân, heb eu gollwng | canran | Cofnod rhybuddion wedi'i uno â'r label adolygu, tocyn, neu ddigwyddiad | Monitro a rheoli hysbysiadau; rheoli digwyddiadau | Cam gwella tîm ar weithrediadau | Adolygiad wythnosol, tuedd fisol |
| Cyfradd positifau ffug | Cyfran y rhybuddion a daniodd pan nad oedd problem yn bodoli | Rhybuddion a labelwyd yn bositif ffug yn yr adolygiad / rhybuddion a adolygwyd yn y cyfnod; mae "positif ffug" yn golygu nad oedd y cyflwr yn ddiffyg ac na fyddai neb eisiau cael gwybod; nid yw problem go iawn sy'n rhy fach i weithredu arni yn bositif ffug | canran | Labeli adolygu rhybuddion | Monitro a rheoli hysbysiadau | Adolygiad sŵn ôl-sylliad | Misol |
| Cwmpas canfod | Cyfran y gwasanaethau dan sylw sydd ag o leiaf un rhybudd wedi'i brofi ar symptom sy'n wynebu defnyddwyr | Gwasanaethau gyda rhybudd symptom a ymarferwyd gan brawf neu ddigwyddiad go iawn yn y 12 mis diwethaf / gwasanaethau o fewn cwmpas y catalog gwasanaethau; mae'r rhestr o wasanaethau dan sylw wedi'i gosod ar ddechrau'r cyfnod | canran | Catalog gwasanaethau, rhestr rheolau rhybuddio, cofnodion profion | Rheoli cyfluniad gwasanaeth; monitro a rheoli hysbysiadau | Diffiniad o orffen ar gyfer gwasanaeth newydd | Chwarterol |
| Cyfran canfod drwy fonitro | Cyfran y digwyddiadau a ganfu monitro cyn i ddefnyddiwr neu gydweithiwr eu hadrodd | Digwyddiadau a'u signal cyntaf oedd rhybudd / digwyddiadau yn y cyfnod; y cloc yw amser agor y digwyddiad, ac adroddir digwyddiadau heb signal cyntaf a gofnodwyd fel anhysbys, nid fel rhai a ganfuwyd | canran | Cofnod digwyddiad gyda maes signal cyntaf, amserlen rhybuddion | Rheoli digwyddiadau | Adolygiad digwyddiad (dysgu ôl-ddigwyddiad) | Misol |
| Amser i ganfod (TTD) | Yr amser a aeth heibio rhwng dechrau effaith ar ddefnyddwyr a'r rhybudd cyntaf a hysbysodd berson | Amser y rhybudd cyntaf sy'n hysbysu person llai amser dechrau effaith, lle dechrau effaith yw'r amser cynharaf y torrodd y dangosydd lefel gwasanaeth, fel y'i sefydlwyd yn yr adolygiad digwyddiad; adroddwch y canolrif a'r 95fed canradd; eithrir digwyddiadau heb rybudd a'u cyfrif ar wahân | munudau | Adolygiad digwyddiad, amserlen rhybuddion, hanes dangosydd lefel gwasanaeth | Rheoli digwyddiadau; monitro a rheoli hysbysiadau | Adolygiad ôl-ddigwyddiad | Misol, fesul digwyddiad |
| Crynodiad rhybuddion | Cyfran y cyfaint rhybuddion a gynhyrchir gan yr ychydig reolau rhybuddio mwyaf swnllyd | Rhybuddion o'r pum rheol gyda'r mwyaf o rybuddion / yr holl rybuddion yn y cyfnod; grwpir yr un rhybudd unwaith; mae cyfrif rheolau o bump yn gonfensiwn y gall tîm ei newid os yw'n datgan pam | canran | Rhestr rheolau rhybuddio a chofnod galw | Gwelliant parhaus; monitro a rheoli hysbysiadau | Ôl-groniad gwella ôl-sylliad | Misol |
| Cyfredoldeb rheolau rhybuddio | Cyfran y rheolau galw sydd â pherchennog, dolen llawlyfr gweithredu, ac adolygiad o fewn y cyfwng y cytunwyd arno | Rheolau galw sy'n bodloni'r tri amod / pob rheol galw; eithrir rheolau a analluogwyd yn y cyfnod | canran | Rhestr rheolau rhybuddio | Rheoli gwybodaeth; monitro a rheoli hysbysiadau | Cytundeb gweithio ar barodrwydd gweithredol | Chwarterol |

Mae cyfaint rhybuddion angen cyd-destun, felly darllenwch ef wrth ymyl cyfradd rhybuddion gweithredadwy. Mae amser i ganfod yn defnyddio dechrau effaith ar ddefnyddwyr, nid y tocyn, oherwydd bod cloc y tocyn yn dechrau ar ôl canfod; amcangyfrif o'r adolygiad digwyddiad yw dechrau effaith a dylid ei labelu felly. Nid yw cyfradd positifau ffug a chyfradd rhybuddion gweithredadwy yn gyflenwadau, oherwydd gall rhybudd fod yn wir a dal i beidio â bod yn werth amser person.

## Argymhellion

### Penderfynwch beth sy'n haeddu galwad

**1. Ysgrifennwch bolisi galw a'i gadw'n fyr.** Nodwch mewn paragraff beth sy'n ennill galwad (symptom y mae defnyddwyr yn ei deimlo nawr neu a fyddant yn ei deimlo'n fuan, y gall person weithredu arno) a beth nad yw. Mae popeth arall yn mynd i giw tocynnau neu ddangosfwrdd. Mae pennod llyfr SRE Google ar fonitro systemau dosbarthedig yn fan cychwyn da (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau).

**2. Rhybuddiwch ar symptomau, a chadwch achosion ar gyfer diagnosis.** Mae galwad am "gyfradd gwallau uwchlaw'r trothwy y cytunwyd arno" yn alwad am ddefnyddwyr. Mae galwad am "mae CPU yn uchel" yn alwad am ddyfaliad. Cadwch signalau lefel achos ar ddangosfyrddau lle bydd yr ymatebwr yn edrych unwaith y bydd y rhybudd symptom wedi tanio, a dyrchafwch un yn alwad dim ond pan fo'n rhagfynegi symptom yn ddibynadwy gyda digon o rybudd i weithredu.

**3. Clymwch drothwyon galw wrth yr amcan lefel gwasanaeth.** Lle mae gan wasanaeth [amcan lefel gwasanaeth (SLO)](https://en.wikipedia.org/wiki/Service-level_objective), rhybuddiwch ar y gyfradd y mae'r gyllideb gwallau yn cael ei bwyta yn hytrach nag ar drothwyon crai. Mae pennod SRE Workbook ar rybuddio ar SLOau yn disgrifio rhybuddion cyfradd llosgi a'r cyfaddawdau rhwng manylder, adalw, amser canfod, ac amser ailosod. Mae'r dull hwn yn galw ar yr hyn sy'n bygwth yr amcan ac yn aros yn dawel am flipiau byr nad ydynt yn gwneud hynny.

### Adolygwch bob rhybudd ar rythm

**4. Labelwch bob rhybudd mewn adolygiad byr, rheolaidd.** Neilltuwch bymtheg munud bob wythnos i bob cylchdro edrych ar yr hyn a daniodd. Ar gyfer pob rhybudd, cofnodwch un label: gweithredadwy, positif ffug, go iawn ond ddim yn werth galwad, neu ddyblyg. Y labeli yw'r data ar gyfer cyfradd rhybuddion gweithredadwy a chyfradd positifau ffug, a'r adolygiad yw'r lle y trwsir rheolau swnllyd y diwrnod wedyn yn lle'r chwarter wedyn.

**5. Gwnewch i'r adolygiad gynhyrchu newid.** Bob wythnos, dewiswch o leiaf un rheol i'w thiwnio, ei gostwng, ei huno, neu ei dileu, a chofnodwch y newid yn ôl-groniad y tîm fel gwaith cyffredin.

**6. Dilëwch heb ofn.** Mae timau'n cadw rhybuddion oherwydd bod dileu un yn teimlo'n beryglus ac nid oes neb yn cofio pam ei fod yn bodoli. Mynnwch fod gan bob rheol galw bwrpas a pherchennog, a chytunwch fod rheol nad yw erioed wedi arwain at weithred mewn cyfnod a nodwyd yn cael ei thynnu neu ei gostwng, gyda'r newid wedi'i gofnodi fel y gellir ei wrthdroi. Mae'r metrig cyfredoldeb rheolau yn gwneud y ddisgyblaeth yn weladwy.

### Mesurwch yr hyn y mae monitro yn ei golli

**7. Olrheiniwch gyfran y digwyddiadau a ganfu defnyddwyr yn gyntaf.** Ar ôl pob digwyddiad, cofnodwch sut y sylwyd arno gyntaf: rhybudd, cydweithiwr, cwsmer, tocyn cymorth, neu wiriad arferol. Cyfran y rhai a ganfuwyd gan fonitro yw'r mesur ymarferol agosaf o adalw. Nid yw'n gyflawn, oherwydd nad yw digwyddiadau na sylwodd neb arnynt byth yn mynd i'r sampl, felly parwch ef â phrofion cyfnodol o'r rhybuddion eu hunain.

**8. Amcangyfrifwch amser i ganfod yn onest.** Sefydlwch ddechrau effaith ar ddefnyddwyr yn yr adolygiad ôl-ddigwyddiad o hanes y dangosydd lefel gwasanaeth, nid o pan deipiodd rhywun y tocyn. Adroddwch y canolrif a chanradd uchel, a dangoswch y digwyddiadau na chafodd unrhyw rybudd o gwbl fel cyfrif ar wahân. Mae un cyfartaledd yn cuddio'r achos nodweddiadol a'r gynffon wael (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth, a phwnc 3.3, Amser ymateb a datrys digwyddiadau).

**9. Profwch y rhybuddion yr ydych yn dibynnu arnynt.** Dim ond os yw'r rhybudd wedi'i weld yn gweithio y mae cwmpas canfod yn gredadwy. Cynhwyswch wiriad mewn diwrnodau gêm neu ymarferion rhyddhau sy'n achosi symptom yn fwriadol ac yn cadarnhau bod y rhybudd cywir yn tanio, yn cyrraedd y cylchdro cywir, ac yn cysylltu â llawlyfr gweithredu defnyddiadwy. Gobaith yw rhybudd na ymarferwyd erioed, nid rheolaeth (gweler pwnc 5.6, Metrigau parhad gwasanaeth).

### Cadwch lwybr y signal yn iach

**10. Monitrwch y monitro.** Mae methiant tawel y system fonitro yn edrych yn union fel gwasanaeth iach. Ychwanegwch wiriad curiad calon sy'n galw os yw'r biblinell rhybuddion yn rhoi'r gorau i ddanfon, a chofnodwch pa mor aml y mae'r biblinell ei hun yn methu.

**11. Grwpiwch, dad-ddyblygwch, a chysylltwch cyn i chi gyfrif.** Grwpiwch rybuddion cysylltiedig yn un, mygwch ailadroddiadau o rybudd sydd eisoes ar agor, a llwybrwch bob un i'r cylchdro perchnogol. Cysylltwch bob rhybudd â'i lawlyfr gweithredu ac â'r digwyddiad neu'r tocyn a greodd, oherwydd mai'r uniad hwnnw sy'n gadael i chi gyfrifo cyfradd rhybuddion gweithredadwy a chyfran canfod drwy fonitro heb gyfrif â llaw (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfaint rhybuddion | Codi trothwyon, ychwanegu oediadau hir, neu symud rhybuddion o alwadau i giw tawel fel bod y cyfrif yn disgyn tra bo problemau'n mynd heb eu gweld; hollti neu uno rhybuddion i newid y cyfrif | Cyfran canfod drwy fonitro ac amser i ganfod; rheol bod pob gostyngiad yn cael ei gofnodi gyda'i reswm a'i adolygu ar ôl un chwarter |
| Cyfradd rhybuddion gweithredadwy | Labelu rhybuddion yn weithredadwy ar ôl y ffaith, neu gymryd gweithred ddibwys (sylw, cydnabyddiaeth) i gymhwyso; gadael rhybuddion swnllyd heb eu hadolygu fel nad ydynt byth yn mynd i'r enwadur | Cyfrif rhybuddion heb eu hadolygu wedi'i ddangos wrth ymyl y gyfradd; gwiriad sampl gan rywun y tu allan i'r cylchdro; diffiniad o "weithred ddefnyddiol" wedi'i ysgrifennu i lawr |
| Cyfradd positifau ffug | Diffinio positifau ffug yn gul fel bod rhybuddion "go iawn ond diystyr" yn cyfrif fel rhai gwir; cau rhybuddion swnllyd heb label | Cyfradd rhybuddion gweithredadwy a'r label "go iawn ond ddim yn werth galwad" wedi'u holrhain ar wahân; samplu cyfnodol o rybuddion caeedig |
| Cwmpas canfod | Ychwanegu rhybudd dibwys (ping) at bob gwasanaeth i hawlio cwmpas; cyfrif rhybuddion na phrofwyd erioed | Y gofyniad bod y rhybudd yn gwylio symptom sy'n wynebu defnyddwyr ac wedi'i ymarfer yn y 12 mis diwethaf; cyfran canfod drwy fonitro |
| Cyfran canfod drwy fonitro | Cofnodi pob digwyddiad fel "wedi'i ganfod gan fonitro" hyd yn oed pan adroddodd defnyddiwr yn gyntaf; creu rhybudd ar ôl y ffaith ac yna ei ddyfynnu; gadael y maes signal cyntaf yn wag i osgoi rhif gwael | Y cyfrif anhysbys wedi'i ddangos wrth ymyl y gyfran; tystiolaeth signal cyntaf wedi'i chymryd o'r amserlen rhybuddion, nid o'r cof; digwyddiadau a adroddwyd gan gwsmeriaid wedi'u cysylltu o'r cofnod cymorth |
| Amser i ganfod (TTD) | Datgan dechrau'r effaith yn hwyrach nag yr oedd; eithrio digwyddiadau heb rybudd; adrodd y cymedr i guddio'r gynffon | Dechrau effaith wedi'i gymryd o hanes y dangosydd lefel gwasanaeth; y digwyddiadau heb rybudd wedi'u cyfrif a'u dangos; canolrif a 95fed canradd wedi'u hadrodd gyda'i gilydd |
| Crynodiad rhybuddion | Hollti un rheol swnllyd yn sawl un fel nad yw'r un ohonynt yn y pump uchaf; ailenwi rheolau | Adroddwch grynodiad yn ôl y nam sylfaenol neu'r gwasanaeth yn ogystal ag yn ôl rheol; olrheiniwch gyfanswm y cyfaint a'r gyfradd rhybuddion gweithredadwy wrth ei ymyl |
| Cyfredoldeb rheolau rhybuddio | Ychwanegu perchnogion dalfan, dolenni llawlyfr gweithredu gwag, neu adolygiad stamp rwber i fodloni'r amod | Gwiriad man bod y ddolen llawlyfr gweithredu yn datrys ac wedi'i defnyddio mewn ymateb go iawn; yr arfer o brofi'r llawlyfr gweithredu mewn diwrnodau gêm |

Mae darlleniad iach yn dangos sawl peth gyda'i gilydd. Mae cyfaint rhybuddion fesul cylchdro yn sefydlog neu'n disgyn ac o fewn lefel a ddewisodd y tîm fel un gynaliadwy. Mae'r gyfradd rhybuddion gweithredadwy yn codi dros sawl mis wrth i'r rheolau mwyaf swnllyd gael eu tiwnio. Mae cyfran canfod drwy fonitro yn uchel ac amser i ganfod yn fyr ac nid yw'n mynd yn hirach wrth i gyfaint ddisgyn, sy'n profi bod y tawelwch wedi'i ennill yn hytrach na'i brynu. Mae cwmpas canfod yn tyfu am fod gwasanaethau'n cael eu profi, nid am fod rhybuddion dibwys wedi'u hychwanegu. Os yw cyfaint yn disgyn tra bo cyfran canfod neu amser i ganfod yn gwaethygu, mae'r tîm wedi masnachu adalw am heddwch, a'r rheiliau gwarchod sy'n datgelu hynny.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Ychydig o alwadau ar sail symptomau | Nosweithiau tawel, ymddiriedaeth uchel ym mhob galwad, hawdd i'w cadw'n gyfredol | Risg o ganfod hwyr ar gyfer problemau sy'n adeiladu'n araf; angen arferion tocyn a dangosfwrdd da ar gyfer y gweddill |
| Llawer o rybuddion sensitif | Rhybudd cynnar o drafferth lefel achos; llai o ddigwyddiadau a gollwyd | Blinder larwm, cydnabyddiaeth arafach, a cholli staff o gylchdroeon ar alwad |
| Rhybuddion cyfradd llosgi SLO | Galwadau wedi'u clymu â'r hyn sy'n bygwth yr amcan; llai o flipiau | Angen dangosyddion da ac amcan y cytunwyd arno; yn cymryd tiwnio i gydbwyso amser canfod a manylder |
| Adolygiad rhybuddion wythnosol | Adborth cyflym; rheolau swnllyd wedi'u trwsio'n gyflym | Yn costio amser bob wythnos; yn dod yn theatr os nad oes newid yn dilyn |
| Labelu gan bobl | Cipio barn nad oes gan unrhyw offeryn | Goddrychol; mae labeli'n drifftio rhwng adolygwyr a chylchdroeon oni bai bod y diffiniadau wedi'u hysgrifennu |
| Mygu a grwpio awtomataidd | Torri sŵn ar raddfa; lleihau galwadau dro ar ôl tro | Gall guddio signalau go iawn os yw'r rheolau'n anghywir; angen ei fonitro a'i adolygu ei hun |

Mae pob dewis yn cyfaddawdu manylder yn erbyn adalw, a dylid gwneud y cyfaddawd yn fwriadol a'i ysgrifennu i lawr fesul gwasanaeth, oherwydd mai'r cyd-destun yw'r hyn sy'n gadael i unrhyw un ddarllen y rhifau yn deg. Gall gwasanaeth â chanlyniadau difrifol o fethiant a gollwyd dderbyn cyfradd weithredadwy is am rybudd cynharach, gyda haen prysbennu sy'n anfon y rhybuddion ychwanegol i giw tocynnau yn ystod y nos.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth fyddem ni eisiau cael ein deffro ar ei gyfer, a pha rai o alwadau'r mis diwethaf oedd yn bodloni'r safon honno?** Ysgrifennwch y polisi galw mewn brawddeg neu ddwy, yna cymerwch alwadau'r mis diwethaf a phrofwch bob un yn ei erbyn. Mae'r ymarfer yn fwy gwerthfawr na'r ganran y mae'n ei chynhyrchu, oherwydd bod yr anghytundebau'n datgelu ble mae disgwyliadau'r tîm yn wahanol. Cipiwch y rhai diangen fel ymgeiswyr i'w gostwng.

**2. Pe bai'r rheol rybuddio fwyaf swnllyd yn diflannu yfory, beth fyddem yn ei golli?** Gofynnwch y cwestiwn ar gyfer pob un o'r pum rheol uchaf yn ôl cyfaint. Yn aml ni all neb enwi methiant penodol y mae'r rheol erioed wedi'i ddal, ac mae hynny'n arwydd y gellir ei thiwnio neu ei thynnu. Lle gall rhywun, gofynnwch a fyddai'r methiant hefyd yn sbarduno rhybudd symptom.

**3. Sut ydym ni'n darganfod beth a gollodd monitro?** Edrychwch ar yr ychydig ddigwyddiadau diwethaf a gofynnwch pwy a sylwodd gyntaf a pha mor hir y parhaodd yr effaith cyn hynny. Mae'r ateb yn rhoi cyfran canfod drwy fonitro ac amser i ganfod bras i chi heb offer newydd. Trafodwch pa signal fyddai wedi dal pob un yn gynharach.

**4. A yw ein llwyth ar alwad yn gynaliadwy, a sut y byddem yn gwybod?** Cytunwch ar beth mae cynaliadwy yn ei olygu ar gyfer cylchdro, megis terfyn ar alwadau y tu allan i oriau yr wythnos, ac adolygwch y duedd fesul cylchdro, nid fesul person. Os yw'r llwyth uwchlaw'r lefel y cytunwyd arni, trinwch ef fel diffyg gwasanaeth a chynlluniwch waith i'w leihau. Cadwch y mesurau yn gyson â phwnc 5.7, Metrigau llafur diwerth ac ar alwad.

**5. Pa rai o'n rhybuddion nad ydym erioed wedi'u profi, a sut y gallem eu profi'n ddiogel?** Rhestrwch y gwasanaethau sy'n dibynnu ar un rhybudd symptom a gofynnwch a yw rhywun wedi'i weld yn tanio mewn dicter neu mewn ymarfer. Cynlluniwch un prawf a gwiriwch y llwybr cyfan: canfod, llwybro, hysbysu, llawlyfr gweithredu. Ystyriwch a fyddai biblinell rhybuddion sy'n methu yn weladwy o gwbl.

**6. Sut y gellid chwarae'r rhifau hyn yma, a beth fyddem yn sylwi arno?** Gofynnwch i'r tîm ddisgrifio, yn onest, sut y gallent wneud i bob ffigur edrych yn well heb wella dim. Yna cytunwch pa reilen warchod fyddai'n ei ddangos a phwy sy'n edrych arni. Mae enwi'r triciau ymlaen llaw yn eu gwneud yn llai temtiol (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau sy'n adeiladu ac yn rhedeg gwasanaeth yn penderfynu beth mae'n ei adrodd amdano'i hun, felly mae ansawdd rhybuddion yn dechrau yn y diffiniad o orffen. Mae nodwedd newydd sy'n cludo gyda'i dangosydd a'i rhybudd wedi'u profi ei hun yn osgoi monitro a hoeliwyd ymlaen ar ôl y digwyddiad cyntaf. Trinwch diwnio rhybuddion fel gwaith ôl-groniad cyffredin.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn cario'r galwr ac yn teimlo'r gost yn gyntaf, felly maent yn berchen ar rythm yr adolygiad, y labelu, a churiad calon y biblinell. Pan fo rhybudd yn anghywir, mae'r atgyweiriad yn perthyn i berchennog y rheol, nid i bwy bynnag a dderbyniodd yr alwad.

### Arweinyddiaeth a llywodraethu

Gall arweinwyr ofyn am ffigurau canfod a gweithredadwyedd fesul gwasanaeth, ariannu amser tiwnio, a gwrthsefyll targed ar gyfaint rhybuddion sy'n gwobrwyo tawelwch. Dim ond newyddion da yw cyfaint sy'n disgyn os yw cyfran canfod ac amser i ganfod yn dal yn gyson. Mae terfynau ar alwad cynaliadwy yn benderfyniad staffio a dylunio, nid un cymhelliant.

### Cwsmeriaid a defnyddwyr

Nid yw cwsmeriaid byth yn gweld rhybudd; maent yn gweld a fethodd y gwasanaeth a pha mor hir y cymerodd i'w drwsio. Mae monitro da yn ymddangos fel digwyddiadau a drwsiwyd cyn iddynt sylwi, a llai o achosion lle mae cwsmer yn adrodd yn gyntaf. Lle mae'r sefydliad yn defnyddio mesurau profiad (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA), mae cyfran y digwyddiadau a adroddwyd yn gyntaf gan ddefnyddwyr yn ddangosydd uniongyrchol o'r bwlch profiad.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg platfform archebu gyda phedwar tîm cynnyrch ac un tîm platfform sy'n cefnogi'r cylchdro ar alwad. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol. Dros bedair wythnos (enghreifftiol) cafodd y cylchdro 240 o alwadau, 70 ohonynt rhwng 22:00 a 07:00. Mae'r tîm yn adolygu pob galwad gan ddefnyddio pedwar label: gweithredadwy, positif ffug, go iawn ond ddim yn werth galwad, a dyblyg.

Mae'r adolygiad yn dangos cyfradd rhybuddion gweithredadwy o 31 y cant (enghreifftiol) a chyfradd positifau ffug o 22 y cant (enghreifftiol). Cynhyrchodd pum rheol 58 y cant o'r galwadau (enghreifftiol), a'r un fwyaf oedd trothwy disg ar weinydd swp a adferai ei hun bob amser. Cyfran canfod drwy fonitro y chwarter blaenorol oedd 62 y cant (enghreifftiol), a'r amser canolrifol i ganfod oedd 14 munud (enghreifftiol) gyda 95fed canradd o 51 munud (enghreifftiol).

Mae'r tîm yn gostwng tair rheol swnllyd i giw tocynnau, yn uno dyblygion fel bod un nam yn cynhyrchu un alwad, yn disodli'r rhybudd cyfrif gwallau crai ar y til gyda rhybudd cyfradd llosgi cyllideb gwallau (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau), ac yn ychwanegu rhybudd symptom ar gyfer e-byst cadarnhau archebion, bwlch y tu ôl i ddau ddigwyddiad a adroddwyd gan gwsmeriaid. Mae pob newid yn eitem ôl-groniad gyda pherchennog. Bedair wythnos yn ddiweddarach mae galwadau'n disgyn i 96 (enghreifftiol) ac mae'r gyfradd weithredadwy yn codi i 64 y cant (enghreifftiol), tra bo cyfran canfod yn codi i 71 y cant (enghreifftiol) ac mae'r amser canolrifol i ganfod yn dal ar 14 munud. Ymddengys fod y tawelwch wedi'i ennill.

Mae'r risg chwarae'r system yn ymddangos yn y trydydd mis. Mae rheolwr newydd yn gosod nod anffurfiol o lai na 60 o alwadau bob pedair wythnos, ac mae un cylchdro yn ei gyrraedd drwy ymestyn yr oedi ar y rhybudd gwallau til. Mae ei gyfran canfod yn disgyn i 55 y cant (enghreifftiol) ac mae ei 95fed canradd amser i ganfod yn dringo i 80 munud (enghreifftiol). Oherwydd bod y rheiliau gwarchod yn eistedd wrth ymyl cyfaint, mae'r adolygiad yn ei ddal. Mae'r tîm yn tynnu'r targed cyfaint yn ôl, yn adfer y rhybudd, ac yn cofnodi'r achos yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

## Y golwg fesul sector

**Busnes newydd.** Gyda llond llaw o beirianwyr i gyd ar alwad, y flaenoriaeth yw polisi galw byr ac ychydig o rybuddion symptom ar y llwybrau sy'n ennill arian. Mae golwg deg munud ar fore Llun ar yr hyn a ddeffrodd bobl yn ddigon. Y prif risg yw dim rhybuddion o gwbl, fel mai cwsmeriaid yw'r monitro; cyfrwch pa mor aml y dywedodd cwsmer wrthych yn gyntaf.

**Busnes bach.** Mae sefydliadau bach yn aml yn dibynnu ar fonitro cyflenwr. Mesurau defnyddiol yw cwmpas canfod ar gyfer yr ychydig systemau sy'n atal y busnes a'r gyfran o ddigwyddiadau a ganfuwyd gan ddefnyddwyr. Gofynnwch i gyflenwyr am y data rhybuddion y mae eich contract yn rhoi hawl i chi ei gael.

**Menter fawr.** Mae gan sefydliadau mawr lawer o offer a chylchdroeon, a gall pob tîm ddiffinio "gweithredadwy" yn wahanol. Safonwch ddiffiniadau a labeli, adolygwch ar lefel tîm, a chrynhowch yn ôl gwasanaeth yn hytrach nag yn ôl offeryn. Mae llwyfannau cydberthynas digwyddiadau yn lleihau cyfaint ar raddfa ond angen eu gwiriadau adalw eu hunain.

**Llywodraeth a'r sector cyhoeddus.** Mae rhai gwasanaethau'n rhedeg oriau swyddfa ac eraill, megis systemau argyfwng neu fudd-daliadau, yn rhedeg yn barhaus. Mae cwmpas canfod a rhybuddion wedi'u profi yn bwysicaf lle mae methiant yn cario canlyniadau cyfreithiol neu ddiogelwch, a gall cofnodion profion gefnogi archwilio. Adroddwch gwmpas a chanfod i gyrff goruchwylio, nid cyfrifon rhybuddion crai, sy'n hawdd eu camddarllen (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae'r rhesymau dros fuddsoddi yn ymarferol. Mae canfod gwell yn byrhau'r amser yr effeithir ar ddefnyddwyr. Mae llai o alwadau diystyr yn gwarchod cwsg, yn lleihau colli staff o'r cylchdro, ac yn cadw sylw ar gyfer y rhybuddion sy'n bwysig. Mae cost ansawdd rhybuddion gwael yn anodd ei gweld oherwydd ei bod wedi'i lledaenu ar draws cwsg wedi'i dorri, ymatebion araf, a pheirianwyr profiadol yn gadael.

Mae cost casglu'r metrigau hyn yn fach os gellir uno'r offer rhybuddion, galw, a digwyddiadau, ac yn gymedrol os ychwanegir labeli â llaw. Y prif gostau yw amser adolygu wythnosol, gwaith tiwnio a dileu, a phrofion canfod achlysurol. Mae tocio rheolau nas defnyddir hefyd yn trimio costau trwydded a storio monitro, a dylai cyfanswm cost perchnogaeth gynnwys amser pobl.

Mae'r elw'n ymddangos o fewn ychydig fisoedd fel cylchdroeon tawelach, cyfran canfod drwy fonitro sy'n codi, ac amser i ganfod nad yw'n gwaethygu. I droi hyn yn arian, cymharwch gost oriau digwyddiadau a throsiant cylchdro â chost yr adolygiad, gan ddefnyddio eich ffigurau eich hun. Peidiwch â defnyddio cyfartaleddau diwydiant oni allwch ddyfynnu ffynhonnell wiriedig.

## Gwrthbatrymau a maglau

- **Targedu cyfaint rhybuddion.** Mae targed ar y cyfrif yn gwobrwyo tawelwch ac yn gwahodd cuddio rhybuddion. Gosodwch dargedau ar gyfradd rhybuddion gweithredadwy a chyfran canfod, a defnyddiwch gyfaint fel ffigur cyd-destun gyda therfyn cynaliadwyedd a ddewisir gan y tîm.
- **Rhybuddio ar bob achos.** Mae dwsinau o alwadau lefel achos yn cynhyrchu sŵn ac yn dal i golli'r symptom na feddyliodd neb amdano. Rhybuddiwch ar symptomau sy'n wynebu defnyddwyr yn lle hynny.
- **Ychwanegu rhybudd ar ôl pob digwyddiad a byth dynnu un.** Parwch bob rhybudd newydd ag adolygiad o'r rhai y mae'n eu gwneud yn ddiangen.
- **Cyfrif rhybuddion heb eu labelu.** Ni all cyfrif heb farn ar ddefnyddioldeb ddweud cylchdro swnllyd oddi wrth un prysur. Labelwch sampl bob wythnos, hyd yn oed os mai dim ond ychydig funudau sydd ar gael.
- **Trin cwmpas fel cyfrif o rybuddion.** Mae gwasanaeth â hanner cant o rybuddion achos a dim rhybudd symptom wedi'i gwmpasu'n wael. Diffiniwch gwmpas fel canfod symptomau wedi'i brofi.
- **Graddio pobl yn ôl galwadau a drinnir neu a gydnabyddir.** Mae'n cosbi aelodau'r cylchdro sy'n cymryd y sifftiau caled ac yn annog osgoi'r galwr. Adroddwch yn ôl cylchdro a gwasanaeth, ac edrychwch am atgyweiriadau dylunio.
- **Peidio byth â phrofi llwybr y rhybudd.** Rhagdybiaeth yw rhybudd na welwyd erioed yn gweithio. Cynhwyswch brofion rhybuddion mewn diwrnodau gêm, a monitrwch y biblinell ei hun.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Polisi galw a pherchnogaeth rheolau | Rhybuddion wedi'u hychwanegu ad hoc; nid oes neb yn gwybod pam mae llawer yn bodoli | Mae gan rai timau bolisi a pherchnogion ar gyfer eu rheolau | Un polisi galw byr; mae gan bob rheol galw berchennog a llawlyfr gweithredu | Cyfredoldeb rheolau wedi'i olrhain a'i adolygu; rheolau nas defnyddir wedi'u tynnu ar amserlen | Polisi a pherchnogaeth wedi'u haddasu ar draws timau a chyflenwyr wrth i wasanaethau newid |
| Mesur ansawdd rhybuddion | Cwynion am sŵn; dim cyfrifon | Cyfaint wedi'i gyfrif gan rai timau; dim labelu | Adolygiad wythnosol gyda labeli cyffredin; cyfradd rhybuddion gweithredadwy a chyfradd positifau ffug wedi'u hadrodd fesul gwasanaeth | Cyfraddau wedi'u tueddu a'u paru â mesurau canfod; gwaith gwella wedi'i ariannu | Ansawdd wedi'i gysylltu ar draws gwasanaethau a chyflenwyr; diffiniadau wedi'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Canfod a chwmpas | Cwsmeriaid a chydweithwyr sy'n adrodd y rhan fwyaf o broblemau | Rhybuddion symptom ar ychydig o wasanaethau allweddol | Cwmpas canfod wedi'i olrhain gyda rhybuddion wedi'u profi; signal cyntaf wedi'i gofnodi ar gyfer pob digwyddiad | Amser i ganfod a chyfran canfod drwy fonitro wedi'u hadolygu gyda rheilen warchod; bylchau yn dod yn waith cynlluniedig | Canfod wedi'i brofi'n rheolaidd ar draws dibyniaethau a chyflenwyr, gan gynnwys y biblinell rhybuddion |
| Defnydd mewn gwelliant | Atgyweiriadau rhybuddion yn dilyn y noson waethaf | Atgyweiriadau'n dilyn digwyddiadau | Mae pob adolygiad yn cynhyrchu o leiaf un newid | Newidiadau wedi'u holrhain i'w heffaith ar gyfaint, gweithredadwyedd, a chanfod | Llwyth cylchdro, canfod, a chyllidebau gwallau wedi'u hadolygu gyda'i gilydd i lywio buddsoddiad |

## Rhestr wirio

- [ ] Mae gennym bolisi galw ysgrifenedig o ychydig frawddegau sy'n dweud beth sy'n ennill galwad.
- [ ] Mae gan bob rheol galw berchennog, pwrpas, a dolen llawlyfr gweithredu.
- [ ] Mae pob cylchdro yn adolygu'r hyn a daniodd o leiaf yn wythnosol ac yn labelu pob rhybudd.
- [ ] Mae pob adolygiad yn cynhyrchu o leiaf un newid a gofnodwyd i reol.
- [ ] Rydym yn adrodd cyfaint rhybuddion, cyfradd rhybuddion gweithredadwy, a chyfradd positifau ffug fesul cylchdro a gwasanaeth, byth fesul person.
- [ ] Mae pob digwyddiad yn cofnodi sut y'i canfuwyd gyntaf, gydag opsiwn anhysbys.
- [ ] Rydym yn amcangyfrif dechrau effaith o hanes y dangosydd lefel gwasanaeth ac yn adrodd y canolrif a'r 95fed canradd amser i ganfod.
- [ ] Mae gan bob gwasanaeth dan sylw rybudd symptom sydd wedi'i brofi yn y 12 mis diwethaf.
- [ ] Mae gwiriad curiad calon yn ein galw os yw'r biblinell rhybuddion yn stopio.
- [ ] Rydym wedi cytuno ar lwyth y tu allan i oriau cynaliadwy ar gyfer pob cylchdro ac yn ei adolygu.
- [ ] Ni osodir targed ar gyfaint rhybuddion yn unig.

## Anogwyr AI

**Pwrpas: Drafftiwch bolisi galw ar gyfer gwasanaeth o'i ddangosyddion a'i ganlyniadau.**

```text
Helpwch fi i ddrafftio polisi galw ar gyfer y gwasanaeth [enw'r gwasanaeth].
Cyd-destun: defnyddwyr yw [grŵp defnyddwyr]; y symptomau sy'n wynebu defnyddwyr yr ydym yn poeni amdanynt yw [symptomau, er enghraifft gwallau, latency, anhygyrchedd]; canlyniadau methiant a gollwyd yw [canlyniadau]; y cylchdro ar alwad yw [disgrifiad cylchdro, er enghraifft oriau a maint tîm].
Ysgrifennwch bolisi byr (o dan 200 gair) sy'n dweud beth sy'n ennill galwad, beth sy'n mynd i giw tocynnau, a beth sy'n aros ar ddangosfwrdd.
Peidiwch â dyfeisio trothwyon na gwerthoedd meincnod; gadewch ddalfeydd [trothwy] i ni eu gosod o'n data ein hunain.
Rhestrwch y cwestiynau y byddech yn eu gofyn i ni cyn ei gwblhau, a rhestrwch eich rhagdybiaethau.
```

**Pwrpas: Dadansoddwch adolygiad rhybuddion a allforiwyd am batrymau sŵn.**

```text
Byddaf yn gludo tabl o rybuddion o [cyfnod] ar gyfer y cylchdro [enw'r cylchdro] gyda cholofnau: [enwau colofnau, er enghraifft rheol, amser, label, gweithred a gymerwyd, gwasanaeth].
Cyfrifwch y gyfradd rhybuddion gweithredadwy, cyfradd positifau ffug, cyfran y tu allan i oriau, a chyfran y rhybuddion o'r pum rheol fwyaf swnllyd, gan ddefnyddio'r data a gludaf yn unig.
Awgrymwch pa reolau i'w tiwnio, eu huno, eu gostwng, neu eu dileu, gyda rheswm ar gyfer pob un, a marciwch bob awgrym fel damcaniaeth i'w gwirio.
Adroddwch yn ôl rheol, gwasanaeth, a chylchdro, byth yn ôl person. Peidiwch â dyfeisio gwerthoedd meincnod.
Rhestrwch eich rhagdybiaethau ac unrhyw resi a eithriwyd gennych.
```

**Pwrpas: Gwiriwch set o fetrigau rhybuddion am risg chwarae'r system cyn eu cyhoeddi.**

```text
Dyma'r metrigau ansawdd rhybuddion yr ydym yn bwriadu eu cyhoeddi: [rhestr o fetrigau gyda diffiniadau a fformiwlâu].
Ar gyfer pob metrig, disgrifiwch ddwy ffordd y gellid ei chwarae neu ei gamddarllen yn ein cyd-destun ni o [math o sefydliad a gwasanaeth], ac awgrymwch reilen warchod pâr o'r un rhestr neu arfer y gallwn ei fabwysiadu.
Nodwch unrhyw fetrig a ddangosir heb ei reilen warchod.
Peidiwch â dyfeisio ffynonellau na gwerthoedd meincnod.
Rhestrwch eich rhagdybiaethau am sut mae ein hoffer yn cofnodi rhybuddion a digwyddiadau.
```

**Pwrpas: Cynlluniwch brawf o ganfod ar gyfer gwasanaethau â chwmpas gwan.**

```text
Ein gwasanaethau yw [rhestr o wasanaethau], a'r rhybuddion symptom yr ydym yn credu sy'n bodoli yw [rhestr rhybuddion].
Cynigiwch gynllun prawf diogel ar gyfer y [diwrnod gêm neu ymarfer] nesaf sy'n gwirio, ar gyfer pob gwasanaeth, fod symptom bwriadol yn sbarduno'r rhybudd, yn cyrraedd [cylchdro], ac yn cysylltu â llawlyfr gweithredu.
Dywedwch pwy y dylid dweud wrthynt ymlaen llaw a sut i gofnodi canlyniadau ar gyfer cwmpas canfod.
Peidiwch â dyfeisio nodweddion offer; gofynnwch i mi sut mae [offeryn monitro] yn gweithio.
Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n diffinio mesur cysylltiedig a'r rheilen warchod a ddylai eistedd wrth ymyl metrig ansawdd rhybuddion.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod golygiadau i'r pwnc hwn yn cadw'r templed, y tabl chwarae'r system, a'r croesgyfeiriadau yn gyson.

## Pwyntiau allweddol

- Barnwch rybuddion yn ôl a arweiniant at weithred, a barnwch fonitro yn ôl faint o drafferth go iawn a ddaliodd; mae manylder ac adalw yn gwarchod ei gilydd.
- Galwch ar symptomau y mae defnyddwyr yn eu teimlo, clymwch drothwyon wrth yr amcan lefel gwasanaeth lle mae un yn bodoli, a chadwch achosion ar gyfer diagnosis.
- Adolygwch yr hyn a daniodd bob wythnos, labelwch ef, a gwnewch o leiaf un newid bob tro.
- Peidiwch byth â gosod targed ar gyfaint rhybuddion yn unig; darllenwch ef wrth ymyl cyfradd rhybuddion gweithredadwy, cyfran canfod drwy fonitro, ac amser i ganfod.
- Profwch y rhybuddion a'r biblinell rhybuddion, oherwydd bod rhybudd heb ei brofi yn rhagdybiaeth.
- Adroddwch yn ôl cylchdro a gwasanaeth, byth yn ôl person, a thrinwch lwyth cynaliadwy ar alwad fel nod dylunio.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Monitoring Distributed Systems," https://sre.google/sre-book/monitoring-distributed-systems/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, "Practical Alerting from Time-Series Data," https://sre.google/sre-book/practical-alerting/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, "Alerting on SLOs," https://sre.google/workbook/alerting-on-slos/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [System monitoring](https://en.wikipedia.org/wiki/System_monitoring).
7. Wikipedia, [False positives and false negatives](https://en.wikipedia.org/wiki/False_positives_and_false_negatives).
8. Wikipedia, [Precision and recall](https://en.wikipedia.org/wiki/Precision_and_recall).
9. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
