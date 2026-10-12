# Metrigau adolygu ôl-ddigwyddiad a dysgu

**Nid yw adolygiad sydd wedi'i ysgrifennu, ei ffeilio a'i anghofio wedi dysgu dim i neb, felly mesurwch a yw adolygiadau'n digwydd, a ydynt yn dda, a yw eu camau'n gorffen, ac a yw'r un achosion yn rhoi'r gorau i ddychwelyd, a chadwch yr arfer cyfan yn ddi-fai fel y bydd pobl yn parhau i ddweud y gwir.**

## Crynodeb a chymhelliant

Mae pob gwasanaeth yn methu weithiau. Yr hyn sy'n gwahanu tîm sy'n gwella'n gyson oddi wrth dîm sy'n ailadrodd ei wythnos waethaf yw'r hyn sy'n digwydd yn y dyddiau ar ôl y methiant. Mae [ôl-farwolaeth](https://en.wikipedia.org/wiki/Postmortem_documentation) yn gyfrif ysgrifenedig o ddigwyddiad neu bron â digwydd: beth ddigwyddodd, sut y'i canfuwyd ac y'i trinwyd, pa amodau a'i gwnaeth yn bosibl, a beth fydd y tîm yn ei newid. Mae ITIL yn galw'r gweithgaredd yn adolygiad ôl-ddigwyddiad, ac mae'r pwnc hwn yn defnyddio'r ddau enw yn gyfnewidiol. Perthynas agos yw myfyrio tîm rheolaidd sy'n edrych ar waith cyffredin yn lle toriad.

Mae'r pwnc hwn yn ymdrin â'r mesurau sy'n dweud wrthych a yw'r ddolen ddysgu honno'n gweithio. Mae'n gofyn pedwar cwestiwn. A yw'r adolygiadau a ddylai ddigwydd yn digwydd mewn gwirionedd? A ydynt yn ddigon da i ddod o hyd i rywbeth go iawn? A yw'r camau y maent yn eu cynhyrchu yn cael eu gorffen? Ac a yw'r un achos yn dal i ddychwelyd beth bynnag? Mae pumed cwestiwn yn rhedeg o dan y lleill: a yw pobl yn teimlo'n ddigon diogel i ddisgrifio'r hyn a ddigwyddodd mewn gwirionedd?

Mae'r pwnc yn eistedd rhwng dau gymydog ac yn osgoi eu hailadrodd. Mae metrigau digwyddiadau mawr (gweler pwnc 3.4, Metrigau digwyddiadau mawr) yn mesur amseroldeb yr adolygiad a dilyniant ei gamau ar gyfer digwyddiadau mawr a ddatganwyd, a nhw yw cartref y ddau fesur hynny yn y lleoliad cul hwnnw. Mae metrigau rheoli problemau (gweler pwnc 4.1, Metrigau rheoli problemau) yn berchen ar y cofnod problem, y gwall hysbys, a'r amser i atgyweiriad parhaol. Mae'r pwnc hwn yn ehangu'r olwg i bob lefel o ddifrifoldeb digwyddiad, i bethau a fu bron â digwydd, ac i ôl-sylliadau tîm, ac mae'n berchen ar ansawdd y dysgu ei hun: cwmpas, dyfnder, cau camau ar draws pob ffynhonnell, ailadrodd achosion, a'r signalau di-fai sy'n cadw'r data'n onest.

### Termau a ddefnyddir yn y pwnc hwn

- **Ôl-farwolaeth neu adolygiad ôl-ddigwyddiad:** archwiliad strwythuredig, di-fai o ddigwyddiad ar ôl adfer gwasanaeth, yn gorffen mewn cofnod ysgrifenedig.
- **Bron â digwydd:** digwyddiad a allai fod wedi achosi digwyddiad neu niwed ond na wnaeth, er enghraifft defnyddio a fethodd a ddaliwyd mewn amgylchedd prawf neu rybudd a daniodd funudau cyn i ddefnyddwyr sylwi.
- **Eitem weithredu:** newid penodol gyda thîm perchnogol a enwir, dyddiad dyledus, a ffordd o ddweud pryd mae wedi'i wneud.
- **Ffactor cyfrannol:** cyflwr a wnaeth y digwyddiad yn bosibl neu'n waeth. Mae gan y rhan fwyaf o ddigwyddiadau sawl un. Yn aml mae "gwraidd achos" sengl yn symleiddio, a'r driniaeth orau o [ddadansoddi gwraidd achos](https://en.wikipedia.org/wiki/Root_cause_analysis) yw chwilio am amodau, nid troseddwr.
- **Dosbarth achos:** label sefydlog o restr fer y cytunwyd arni (er enghraifft "terfyn capasiti," "drifft cyfluniad," "monitro ar goll," "perchnogaeth aneglur") a ddefnyddir i weld ailadrodd. Mae'n disgrifio cyflwr system, byth berson.
- **Di-fai:** arddull adolygu sy'n gofyn sut y caniataodd y system i berson rhesymol weithredu fel y gwnaeth, ac nad yw'n gofyn pwy i'w gosbi. Mae'n arfer, ac mae wedi'i glymu â'r syniad o [ddiwylliant teg](https://en.wikipedia.org/wiki/Just_culture), lle caiff camgymeriadau gonest eu trin fel dysgu a chaiff gweithredoedd esgeulus eu trin ar wahân o hyd.
- **Information Technology Infrastructure Library (ITIL):** y fframwaith a ddefnyddir yn eang ar gyfer rheoli gwasanaethau TG (ITSM). Mae'r pwnc hwn yn cyfeirio at arferion fel y'u disgrifir yn ITIL 4 (2019), ac mae'r llyfr yn ei gyfanrwydd wedi'i ddyddio ym mis Hydref 2026. Gweler [ITIL](https://en.wikipedia.org/wiki/ITIL).

### Sut mae'r golygon ystwyth ac ITIL yn wahanol

Mae ITIL yn cyfrannu strwythur. Yn ITIL 4, mae rheoli digwyddiadau yn adfer gwasanaeth, mae rheoli problemau yn lleihau tebygolrwydd ac effaith digwyddiadau drwy ddod o hyd i achosion a'u rheoli, ac mae gwelliant parhaus yn troi'r hyn a ddysgir yn newid wedi'i ariannu. Yr adolygiad yw'r colyn rhwng y ddau gyntaf a'r trydydd. Mae ITIL yn tueddu i ofyn a gynhaliwyd yr adolygiad, a agorwyd cofnod problem lle'r oedd un yn haeddiannol, ac a gofrestrwyd y gwelliant.

Mae'r traddodiadau ystwyth a [pheirianneg dibynadwyedd safleoedd (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) yn cyfrannu arferion. Mae adolygiadau yn ddi-fai, yn fyr, wedi'u hysgrifennu ar gyfer darllenwyr y tu hwnt i'r tîm, ac yn cael eu rhannu'n eang. Mae myfyrio tîm rheolaidd, arferiad o welliant parhaus, yn gofyn beth i'w newid nesaf, ac mae'r dewis [ystwyth](https://en.wikipedia.org/wiki/Agile_software_development) am addasu bach, mynych yn disodli'r rhaglen wella fawr sengl. Mae llyfr *Site Reliability Engineering* Google yn neilltuo pennod i ddiwylliant ôl-farwolaeth ac yn dadlau nad yw proses adolygu ond cystal â'r diwylliant o'i chwmpas.

Wrth eu defnyddio gyda'i gilydd, mae'r ddwy olwg yn gryf. Mae ITIL yn rhoi rheolau cwmpas a lle i'r cam fyw. Mae'r arferion ystwyth a SRE yn rhoi gonestrwydd a chyflymder. Wedi'u mesur gyda'i gilydd, maent yn dangos a yw'r ddolen yn cau.

## Egwyddorion allweddol

- **Dysgu yw'r cynnyrch, nid y ddogfen.** Mae adolygiad wedi llwyddo pan fo rhywbeth yn newid yn y system, y broses, neu'r ddealltwriaeth a rennir. Cyfrwch y newid, nid y gwaith papur.
- **Mae di-fai yn rhagamod ar gyfer data da.** Os yw pobl yn ofni bai, bydd yr amserlen yn denau, bydd y ffactorau cyfrannol yn dwt, a bydd yr un digwyddiad yn dychwelyd. Gwarchodwch didwylledd cyn i chi fesur unrhyw beth arall.
- **Mesurwch ddilyniant ac ailadrodd, nid cyfaint.** Mae nifer yr adolygiadau yn dweud ychydig. Mae cyfran y camau a orffennwyd a chyfran yr achosion sy'n aros wedi mynd yn dweud llawer.
- **Cadwch y metrigau ar lefel tîm a system.** Mae adolygiad yn ymwneud ag amodau. Peidiwch byth â chyfrif adolygiadau, camau, na gwallau fesul person, a pheidiwch byth â defnyddio'r rhifau hyn mewn sgyrsiau perfformiad.
- **Maint yr adolygiad yn briodol.** Nid yw pob digwyddiad yn haeddu dogfen hir. Gosodwch sbardunau yn ôl effaith a gwerth dysgu, a gadewch i ddigwyddiad bach gael adolygiad byr.
- **Gadewch i gamau gystadlu'n onest.** Mae eitem weithredu yn waith. Mae'n perthyn yn yr un ôl-groniad â gwaith arall, wedi'i raddio yn ei erbyn, a gellir ei gwrthod gyda rheswm a gofnodwyd.
- **Darllenwch yr adolygiadau.** Mae rhifau'n lleoli'r broblem. Mae person yn darllen sampl yn dweud wrthych a yw'r adolygiadau'n dda.

## Diffiniadau metrigau

Mae'r metrigau isod yn disgrifio'r ddolen ddysgu ar gyfer gwasanaeth neu grŵp o dimau. Mae pob un yn nodi'r hyn a gyfrifir, ble mae clociau'n dechrau ac yn stopio, a'r hyn a eithrir. Dylid dangos mesurau amser fel canolrif a chanradd uchel (er enghraifft yr 85fed) gydag oedran yr eitem agored hynaf, nid fel cyfartaledd (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cwmpas adolygu | Cyfran y digwyddiadau cymwys a gafodd adolygiad cyflawn | Digwyddiadau cymwys gydag adolygiad a gyhoeddwyd o fewn y ffenestr y cytunwyd arni / digwyddiadau cymwys a gaewyd yn y cyfnod. Digwyddiadau cymwys yw'r rhai sy'n bodloni'r sbardunau ysgrifenedig. Eithrir digwyddiadau y tu mewn i'r ffenestr sy'n dal ar agor ar ddiwedd y cyfnod. | canran | Cofnodion digwyddiadau offeryn ITSM wedi'u huno â'r ystorfa adolygiadau | Rheoli digwyddiadau; rheoli problemau | Myfyrio tîm rheolaidd; cytundebau gweithio tîm | Misol |
| Sgôr ansawdd adolygu | A yw adolygiad a gyhoeddwyd yn bodloni safon ysgrifenedig fer | Adolygiadau mewn sampl sy'n bodloni o leiaf [nifer y cytunwyd arno] o'r eitemau rhestr wirio / adolygiadau yn y sampl. Mae'r sampl yn nifer sefydlog o adolygiadau a dynnir ar hap bob chwarter, wedi'u sgorio gan rywun y tu allan i'r tîm perchnogol. | canran | Sampl chwarterol o'r ystorfa adolygiadau gyda dalen sgorio | Gwelliant parhaus; rheoli problemau | Diffiniad o orffen ar gyfer adolygiad | Chwarterol |
| Cyfradd cau camau | Cyfran y camau adolygu a gwblhawyd erbyn eu dyddiad dyledus | Camau a gwblhawyd neu a wrthodwyd yn ffurfiol (gyda rheswm) erbyn y dyddiad dyledus / camau sy'n ddyledus yn y cyfnod. Mae'r cloc yn dechrau pan gyhoeddir yr adolygiad ac yn stopio pan fo'r tîm perchnogol yn marcio'r cam fel un wedi'i wneud ac adolygydd yn cadarnhau. Cyfrifir camau a gaewyd fel "ni wneir" ar wahân ac fe'u hadroddir. | canran | Ôl-groniad tîm neu gofrestr gwelliant ITSM, wedi'i gysylltu â'r adolygiad | Gwelliant parhaus; rheoli problemau | Ôl-groniad tîm; camau gwella | Misol |
| Oedran camau agored | Oedran camau adolygu sy'n dal ar agor | Ar gyfer pob cam agored, heddiw llai dyddiad cyhoeddi ei adolygiad. Adroddwch y canolrif, yr 85fed canradd, a'r hynaf. | diwrnodau | Ôl-groniad tîm neu gofrestr gwelliant | Gwelliant parhaus | Oedran eitem waith; gwaith ar y gweill sy'n heneiddio | Misol |
| Cyfradd ailadrodd achosion | Cyfran y digwyddiadau y mae eu dosbarth achos yn cyfateb i ddigwyddiad cynharach ar gyfer yr un gwasanaeth | Digwyddiadau yn y cyfnod y mae eu dosbarth achos cynradd yn cyfateb i adolygiad a gaewyd yn y deuddeg mis blaenorol ar gyfer yr un gwasanaeth / digwyddiadau â dosbarth achos a gofnodwyd yn y cyfnod. Eithrir digwyddiadau heb ddosbarth achos a gofnodwyd a'u cyfrif ar wahân. | canran | Maes dosbarth achos yr ystorfa adolygiadau wedi'i uno â chofnodion digwyddiadau | Rheoli problemau; rheoli digwyddiadau | Dadansoddi diffygion a ddihangodd; themâu ôl-sylliad | Chwarterol |
| Cyfradd adrodd bron â digwydd | Cyfaint pethau a fu bron â digwydd a signalau gwan y mae pobl yn dewis eu hadrodd | Pethau a fu bron â digwydd a logiwyd yn y cyfnod / gwasanaethau gweithredol, wedi'u dangos fel tuedd fesul gwasanaeth a byth fesul person. Y bwriad yw i'r gyfradd godi'n gynnar mewn rhaglen iach ac yna wastatau. | cyfrif fesul gwasanaeth | Log bron â digwydd, neu faes wedi'i dagio yn y traciwr materion | Rheoli digwyddiadau; rheoli risg | Gwiriad iechyd tîm; bwrdd rhwystrau | Misol |
| Cyrhaeddiad dysgu | Pa mor bell y mae adolygiad yn teithio y tu hwnt i'r tîm a'i hysgrifennodd | Adolygiadau a gyflwynwyd neu a drafodwyd y tu allan i'r tîm perchnogol (fforwm a rennir, sesiwn traws-dîm, neu ddarlleniad dogfenedig gan dîm dibynnol) o fewn [nifer y cytunwyd arno] diwrnod i'w cyhoeddi / adolygiadau a gyhoeddwyd yn y cyfnod | canran | Cofnodion fforwm neu gyfarfod a'r ystorfa adolygiadau | Gwelliant parhaus; rheoli gwybodaeth | Adolygiad rhanddeiliaid; cymunedau ymarfer | Chwarterol |
| Cario drosodd camau ôl-sylliad | Cyfran camau ôl-sylliad y tîm a orffennwyd erbyn yr ôl-sylliad nesaf | Camau ôl-sylliad a gwblhawyd cyn yr ôl-sylliad nesaf / camau ôl-sylliad y cytunwyd arnynt yn yr un blaenorol. Tynnir camau a ollyngwyd yn fwriadol gyda rheswm o'r ddau gyfrif. | canran | Nodiadau neu fwrdd ôl-sylliad, wedi'u cadw yn ôl-groniad y tîm | Gwelliant parhaus | Myfyrio tîm rheolaidd | Fesul cyfnod adolygu, wedi'i adolygu'n chwarterol |
| Pwls diogel i siarad | A yw pobl yn credu y gallant ddisgrifio camgymeriadau heb fai | Cyfran yr ymatebion ar neu uwchlaw [lefel y cytunwyd arni] ar set fer ddienw o gwestiynau (er enghraifft "Gallaf ddisgrifio camgymeriad mewn adolygiad heb ofn bai") / ymatebion a dderbyniwyd. Adroddir y pwls dim ond ar gyfer grwpiau sy'n ddigon mawr i warchod dienwogrwydd. | canran | Arolwg pwls dienw | Gwelliant parhaus; newid sefydliadol | Gwiriad iechyd tîm; gwiriad diogelwch seicolegol | Chwarterol |

Mae adolygiad wedi'i "gyhoeddi" pan fo'n weladwy i'r darllenwyr a fwriedir, nid wedi'i gadw fel drafft. Cofnodir dosbarth achos gan y grŵp adolygu o'r adolygiad ei hun, o restr fer y cytunwyd arni, byth gan bwy bynnag a gaeodd y tocyn.

## Argymhellion

### Penderfynwch beth sy'n haeddu adolygiad

**1. Ysgrifennwch y sbardunau a'u cyhoeddi.** Mae rheol fel "pob digwyddiad mawr, pob digwyddiad o'r ddwy lefel difrifoldeb uchaf, unrhyw ddigwyddiad sy'n colli data cwsmeriaid, ac unrhyw beth a fu bron â digwydd y mae'r tîm yn ei farnu'n addysgiadol" yn dileu dadl ac yn gwneud cwmpas yn fesuradwy. Heb sbardunau ysgrifenedig, mae adolygiadau'n dilyn hwyliau a llwyth gwaith, ac mae'r ffigur cwmpas yn golygu dim.

**2. Mesurwch yr adolygiad i'r digwyddiad.** Gall digwyddiad bach gael adolygiad hanner tudalen a ysgrifennir mewn tri deg munud, tra gall digwyddiad mawr haeddu amserlen lawn a sesiwn wedi'i hwyluso. Mae trac ysgafn yn cadw cwmpas yn uchel heb wneud yr arfer yn faich.

### Barnwch ansawdd drwy ddarllen

**3. Samplwch a darllenwch adolygiadau bob chwarter.** Tynnwch sampl fach ar hap, a gofynnwch i rywun y tu allan i'r tîm perchnogol ddarllen pob un yn erbyn rhestr wirio fer. Mae eitemau defnyddiol yn cynnwys amserlen sy'n dangos penderfyniadau a'r wybodaeth oedd ar gael pan wnaed hwy, mwy nag un ffactor cyfrannol, disgrifiad o'r hyn aeth yn dda, camau gyda pherchnogion a dyddiadau, ac iaith sy'n disgrifio'r system ac nid yr unigolyn. Adroddwch gyfran y rhai sy'n bodloni'r safon, a bwydwch y canfyddiadau yn ôl i'r ysgrifenwyr fel hyfforddi.

**4. Dysgwch y sgil o adolygu.** Mae [rhagfarn edrych yn ôl](https://en.wikipedia.org/wiki/Hindsight_bias) yn gwneud i ddigwyddiadau edrych yn amlwg ar ôl y ffaith ac yn gwthio awduron tuag at "dylai rhywun fod wedi sylwi." Gofynnwch i hwyluswyr ail-greu'r hyn yr oedd pobl yn ei wybod ar bob eiliad, a defnyddiwch y [pum pam](https://en.wikipedia.org/wiki/Five_whys) fel anogwr ar gyfer cwestiynau, nid rysáit ar gyfer ateb sengl.

### Gwnewch i gamau orffen

**5. Rhowch gamau yn yr ôl-groniad go iawn.** Mae cam sy'n byw mewn dogfen adolygu yn unig yn anweledig i gynllunio. Crëwch eitem waith yn nhraciwr y tîm perchnogol, cysylltwch hi â'r adolygiad, a gadewch iddi gystadlu am gapasiti fel unrhyw waith arall. Adroddwch gau yn ôl tîm ac yn ôl gwasanaeth fel bod cam wedi'i rwystro yn dod yn weladwy i'r bobl a all ei ddadflocio.

**6. Caniatewch "ni wneir" gonest, a chofnodwch pam.** Mae rhai camau yn troi allan i fod yn rhy gostus neu ddim yn berthnasol mwyach. Mae eu cau gyda rheswm a nodwyd yn iachach na'u gadael ar agor am flwyddyn neu eu marcio fel rhai wedi'u gwneud heb eu gwneud. Adroddwch y gyfran a wrthodwyd, oherwydd bod cyfran uchel iawn yn awgrymu bod y broses adolygu yn cynnig camau na fydd neb yn eu hariannu.

**7. Olrheiniwch oedran camau agored, yn ogystal â'r gyfradd cau.** Mae'r 85fed canradd o oedran camau agored a'r cam agored hynaf yn dangos beth sy'n sownd. Adolygwch yr hynaf yn y cyfarfod sy'n adolygu dibynadwyedd y gwasanaeth.

### Gwyliwch am ailadroddiadau

**8. Cadwch restr fer o ddosbarthiadau achos, a thagiwch bob adolygiad.** Mae rhestr o wyth i bymtheg dosbarth yn ddigon. Adolygwch y rhestr pan fo mwy na chyfran fach o ddigwyddiadau yn glanio mewn dosbarth "arall". Mae tagio yn gadael i chi ateb y cwestiwn "ydym ni wedi gweld hyn o'r blaen?" gyda data, ac mae'n bwydo rheoli problemau gyda phatrymau na all unrhyw adolygiad unigol eu dangos (gweler pwnc 4.1, Metrigau rheoli problemau, a phwnc 4.6, Dyled dechnegol a gwallau hysbys).

**9. Trinwch ailadrodd fel signal am y cam, nid y bobl.** Pan fo dosbarth achos yn dychwelyd, gofynnwch a orffennwyd y camau cynharach, ai nhw oedd y camau cywir, ac a yw'r dosbarth yn rhy eang. Mae ailadrodd ar ôl i bob cam gau yn golygu na weithiodd y camau, sy'n newyddion defnyddiol.

### Gwarchodwch onestrwydd

**10. Cadwch adolygiadau'n ddi-fai a gwnewch hynny'n weladwy.** Nodwch yn y templed fod yr adolygiad yn disgrifio amodau a phenderfyniadau ac nad yw'n neilltuo bai, a gofynnwch i arweinwyr ddiolch i awduron am eu didwylledd. [Diogelwch seicolegol](https://en.wikipedia.org/wiki/Psychological_safety), yn ymchwil Amy Edmondson ar dimau gwaith, yw'r gred a rennir bod y tîm yn ddiogel ar gyfer cymryd risgiau rhyngbersonol (gweler pwnc 9.2, Metrigau boddhad a lles).

**11. Gwobrwywch adroddiadau bron â digwydd, a darllenwch gyfrif cynyddol fel newyddion da ar y dechrau.** Bydd tîm sy'n dechrau adrodd pethau a fu bron â digwydd yn gweld y cyfrif yn dringo, oherwydd bod y digwyddiadau wedi bod yn digwydd erioed. Dywedwch hynny ymlaen llaw, olrheiniwch gyfran y pethau a fu bron â digwydd a gynhyrchodd newid, a chyhoeddwch y straeon gyda chaniatâd y tîm.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cwmpas adolygu | Culhau'r sbardunau; israddio difrifoldeb fel bod digwyddiadau'n syrthio y tu allan iddynt; ffeilio "adolygiad" un llinell i dicio'r blwch | Sgôr ansawdd adolygu; cymharu cyfrifon difrifoldeb digwyddiadau ag effaith a adroddir gan gwsmeriaid; archwilio israddio |
| Sgôr ansawdd adolygu | Ysgrifennu i'r rhestr wirio gyda geiriad safonol; sgorio gan y tîm perchnogol; sampl ragweladwy | Sgorydd allanol; sampl ar hap; darllen dau adolygiad yn uchel bob chwarter; olrhain a yw camau o adolygiadau sgôr uchel yn gorffen |
| Cyfradd cau camau | Gosod dyddiadau dyledus ymhell i ffwrdd; hollti camau yn ddarnau dibwys; cau camau heb wirio; datgan "ni wneir" i glirio'r rhestr | Oedran camau agored; cyfran a wrthodwyd gyda rhesymau; adolygydd yn cadarnhau bod y newid yn gweithio; cyfradd ailadrodd achosion |
| Oedran camau agored | Cau ac ailagor neu ail-greu cam i ailosod ei oedran; symud camau i restr "syniadau" ar wahân | Cysylltu camau newydd â'r adolygiad gwreiddiol a chadw'r dyddiad cyntaf; cyfrif camau a symudwyd i syniadau |
| Cyfradd ailadrodd achosion | Cofnodi dosbarthiadau achos amwys neu sy'n newid yn barhaus fel nad oes dim yn cyfateb; defnyddio dosbarth "arall" eang; cysylltu ailadrodd â dosbarth gwahanol | Cyfran y digwyddiadau yn "arall"; ail-ddarllen adolygiadau yn ôl dosbarth o bryd i'w gilydd; adolygu'r rhestr dosbarthiadau ei hun |
| Cyfradd adrodd bron â digwydd | Gofyn am adroddiadau er mwyn taro rhif; logio digwyddiadau dibwys; neu, i'r cyfeiriad arall, darllen y rhif fel methiant a mygu adroddiadau | Cyfran y pethau a fu bron â digwydd a arweiniodd at newid; dim targedau ar y cyfrif; adborth o'r pwls diogel i siarad |
| Cyrhaeddiad dysgu | Ychwanegu enwau at restr ddosbarthu; cyflwyno mewn sesiynau sydd ag ychydig o bresenoldeb; cyfrif cyswllt fel darlleniad | Presenoldeb neu nodiadau trafodaeth go iawn; gofyn i dimau dibynnol beth a newidiwyd ganddynt ar ôl yr adolygiad diwethaf |
| Cario drosodd camau ôl-sylliad | Cytuno ar gamau dibwys sy'n hawdd eu gorffen yn unig; hepgor yr ôl-sylliad; marcio eitemau fel rhai cyflawn | Effaith y camau fel y'i barnwyd gan y tîm; cyfradd cynnal ôl-sylliad; a yw'r un thema yn ymddangos am sawl wythnos |
| Pwls diogel i siarad | Pwyso ar ymatebwyr; arolygu'r hyderus yn unig; adrodd cyfartaledd sy'n cuddio grŵp sgôr isel | Cyfradd ymateb a chymysgedd ymatebwyr; maint grŵp lleiaf; sylwadau agored wedi'u darllen yn llawn; a yw iaith adolygiadau'n newid |

Mae darlleniad iach yn dangos adolygiadau ar gyfer y digwyddiadau sy'n bwysig, safon ansawdd y mae'r rhan fwyaf yn ei bodloni, camau sy'n gorffen neu'n cael eu gwrthod yn onest, llond llaw o hen gamau y gall arweinwyr eu henwi, dosbarthiadau achos sy'n disgyn mewn amlder ar ôl iddynt gael sylw, a chyfrif bron â digwydd a gododd ac yna a sefydlogodd. Mae'r pwls yn aros yn gyson neu'n gwella pan fo digwyddiad caled yn digwydd. Mae patrwm sy'n rhy lân yn arwydd ynddo'i hun i ddarllen sampl.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Adolygu pob digwyddiad | Cwmpas cyflawn; dim dadl am sbardunau | Trwm; mae adolygiadau'n dod yn arwynebol; mae timau'n digio wrth y broses |
| Adolygu yn ôl sbardunau ysgrifenedig | Canolbwyntio ymdrech ar effaith a gwerth dysgu | Mae sbardunau angen cynnal a chadw; mae digwyddiadau ar y ffin yn llithro drwodd |
| Tagio dosbarth achos | Dod o hyd i batrymau ar draws adolygiadau | Mae dosbarthiadau'n symleiddio; mae gwir achosion yn aml yn sawl peth ar unwaith |
| Pwls dienw ar ddiogelwch | Signal gonest ar gwestiwn sensitif | Bras; gall timau bach fod yn adnabyddadwy; blinder arolwg |

Yr ateb pragmatig yw cadw'r ddolen yn fyr a'r rhifau'n brin: sbardunau ysgrifenedig, sampl ansawdd fach, un traciwr camau, a rhestr dosbarthiadau achos, gyda'r pwls diogelwch yn cael ei ychwanegu unwaith y bydd y tîm yn ymddiried yn y gweddill. Nid yw'r un mesur yma yn profi bod dysgu wedi digwydd. Gyda'i gilydd maent yn dangos a yw'r amodau ar ei gyfer yn bresennol.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa un o'n pum digwyddiad diwethaf a gafodd adolygiad, ac a newidiodd unrhyw un unrhyw beth o'i herwydd?**
Dechreuwch o'r rhestr digwyddiadau, nid o'r ffolder adolygiadau, fel bod adolygiadau coll yn dod yn weladwy. Ar gyfer pob adolygiad, gofynnwch beth sy'n wahanol yn y system neu'r broses heddiw. Os yw'r ateb yn "dim byd," gofynnwch pam y cynhaliwyd yr adolygiad a phwy a'i darllenodd. Dylai'r hwylusydd gofnodi'r atebion heb farnu, oherwydd eu bod yn dangos a yw'r arfer yn cynhyrchu newid neu waith papur.

**2. Beth fyddai'n ei gwneud yn anoddach i rywun ddweud y gwir mewn adolygiad yma?**
Gofynnwch am enghreifftiau penodol: ymateb rheolwr, adolygiad perfformiad, dwysáu gan gwsmer, tôn mewn e-bost. Gwahoddwch bobl i ysgrifennu atebion yn ddienw yn gyntaf. Chwiliwch am amodau y gellir eu newid, megis pwy sy'n mynychu, pwy sy'n darllen, a'r hyn y mae arweinwyr yn ei ddweud yn uchel. Dyma'r sgwrs sy'n gwarchod pob rhif arall yn y pwnc.

**3. Pa eitemau gweithredu sydd wedi bod ar agor hiraf, a beth sy'n eu rhwystro?**
Dangoswch y pump hynaf. Ar gyfer pob un, gofynnwch a yw'r cam yn dal yn gywir, a oes gan y perchennog gapasiti, ac a ddylid ei wneud, ei aildrefnu, neu ei wrthod. Cadwch y ffocws ar system y gwaith ac nid ar y perchennog. Cytunwch ar benderfyniad ar gyfer pob un cyn diwedd y sesiwn.

**4. Pryd y dychwelodd yr un math o broblem, a beth mae hynny'n ei ddweud am yr atgyweiriad cynharach?**
Defnyddiwch dagiau dosbarth achos i ddod o hyd i ailadroddiad, a darllenwch yr adolygiad cynharach a'i gamau. Gofynnwch a orffennwyd y camau, a aethant i'r afael â'r ffactorau cyfrannol, ac a dynnwyd y dosbarth yn rhy eang. Y nod yw cam gwell, nid esboniad.

**5. A ydym yn adrodd pethau a fu bron â digwydd, a beth sy'n digwydd pan fydd rhywun yn gwneud hynny?**
Gofynnwch am enghraifft ddiweddar a thraciwch yr hyn a ddilynodd. Os na ddilynodd dim, gofynnwch pam y byddai pobl yn adrodd eto. Os yw'r cyfrif yn isel, gofynnwch beth mae pobl yn ei ofni. Dylai'r hwylusydd esbonio bod cyfrif cynyddol i'w ddisgwyl ar y dechrau, a chytuno sut y bydd y tîm yn ymateb i'r adroddiad nesaf fel bod adrodd yn teimlo'n werth chweil.

**6. Sut fyddem ni'n gwybod bod adolygiad yn dda pe na allem edrych ar unrhyw rifau?**
Mae hyn yn gofyn i'r tîm ddisgrifio ansawdd yn ei eiriau ei hun. Mae atebion cyffredin yn cynnwys "dysgodd rhywun y tu allan i'r tîm rywbeth," "daliodd yr atgyweiriad," ac "nid oedd yr awdur yn ofnus." Trowch yr atebion yn rhestr wirio ar gyfer y sampl chwarterol, ac ailedrychwch arni ar ôl dau chwarter.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn ysgrifennu llawer o adolygiadau ac yn cario'r rhan fwyaf o'r camau, felly maent yn teimlo cost proses lletchwith yn gyntaf. Maent yn elwa o dempledi byr, rheol sbardun glir, a chyswllt gweladwy rhwng cam ac eitem ôl-groniad tîm. Mae myfyrio tîm rheolaidd yn haeddu'r un ddisgyblaeth dilyniant ag adolygiad digwyddiad, ac mae tîm sy'n gorffen ei gamau ôl-sylliad yn ymarfer yr un arfer ar raddfa lai. Gwarchodwch rhag cael eu gwasgu allan gan bwysau nodweddion, a dygwch y cyfaddawd hwnnw at y perchennog cynnyrch yn agored (gweler pwnc 2.5, Metrigau rhagweld a chynllunio cyflawni).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn dal y dystiolaeth (amserlenni, rhybuddion, logiau sgwrs) ac maent yn y sefyllfa orau i dagio dosbarthiadau achos yn gyson ac i sylwi ar ailadroddiad cyn iddo ddod yn doriad. Maent angen amser gwarchodedig i ysgrifennu, gan fod adolygiadau a ysgrifennir ar ddiwedd sifft hir yn denau. Cysylltwch bob adolygiad ag unrhyw gofnod problem y mae'n ei fwydo (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod naws pob adolygiad yn ôl yr hyn y maent yn ei ofyn wedyn. Mae "Pwy wnaeth hyn?" yn dod ag adolygiadau gonest i ben, ac mae "beth ddysgon ni, a beth ydym ni'n ei newid?" yn eu gwahodd. Dylai cyrff llywodraethu ddisgwyl cwmpas, ansawdd, oedran camau, ac ailadrodd yn yr adolygiad dibynadwyedd, ariannu'r camau sydd angen buddsoddiad, a pheidio byth â chymharu timau yn ôl faint o ddigwyddiadau neu adolygiadau sydd ganddynt.

### Cwsmeriaid a defnyddwyr

Anaml y gwelir yr adolygiad gan gwsmeriaid, ond maent yn teimlo ei ganlyniad: yr un nam yn rhoi'r gorau i ddychwelyd, ac adroddiad gonest pan fydd yn dychwelyd. Lle mae contractau'n caniatáu, cyhoeddwch grynodeb iaith blaen ar ôl digwyddiad sylweddol (gweler pwnc 3.4, Metrigau digwyddiadau mawr). Cyswllt dro ar ôl tro ar yr un mater yw'r signal ochr cwsmer nad yw dysgu wedi glanio (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg blaen siop sy'n wynebu cwsmeriaid, gwasanaeth taliadau, a llwyfan stocrestr mewnol. Mae pum tîm cynnyrch yn adeiladu ac yn rhedeg y gwasanaethau hyn, ac mae grŵp rheoli gwasanaeth bach yn cadw'r broses digwyddiadau a phroblemau. Mae'r rhifau yn yr enghraifft hon yn enghreifftiol.

Mewn un chwarter mae gan y manwerthwr 41 o ddigwyddiadau yn y ddwy lefel difrifoldeb uchaf. Mae sbardunau ysgrifenedig yn gwneud pob un yn gymwys i gael adolygiad, a chyhoeddir 36 adolygiad o fewn deg diwrnod gwaith, felly mae cwmpas adolygu tua 88 y cant. Mae'r arweinyddiaeth yn falch. Mae'r grŵp rheoli gwasanaeth yn tynnu sampl ar hap o wyth adolygiad, yn gofyn i dîm o faes cynnyrch arall eu sgorio, ac yn canfod mai dim ond tri sy'n bodloni'r safon y cytunwyd arni. Y bwlch cyffredin yw bod yr amserlen yn rhestru'r hyn a ddigwyddodd ond nid yr hyn yr oedd pobl yn ei wybod pan wnaethant bob penderfyniad, ac mae'r adran ffactorau cyfrannol yn enwi un achos.

Mae'r un sampl yn dangos, o'r 74 cam a oedd yn ddyledus yn y chwarter, y cwblhawyd 51 erbyn eu dyddiad dyledus, sef cyfradd cau o tua 69 y cant. Y cam agored hynaf, 210 diwrnod oed, yw trothwy rhybudd capasiti ar gronfa ddata'r taliadau, a ohiriwyd mewn chwe wythnos olynol. Mae tagio achosion yn dangos "terfyn capasiti" mewn 9 o'r 36 adolygiad, 4 ohonynt ar gyfer y gwasanaeth taliadau. Mae'r pwls dienw, a atebwyd gan 58 o'r 70 person a wahoddwyd, yn is yn y grŵp ar alwad, lle mae sawl sylw yn dweud bod uwch reolwyr yn gofyn cwestiynau pigog am unigolion a enwir.

Mae'r tîm yn gwneud tri phenderfyniad. Yn gyntaf, maent yn cynnal sesiwn fer gyda'r uwch reolwyr sy'n mynychu adolygiadau ac yn cytuno ar reol: mae cwestiynau yn yr ystafell yn ymwneud ag amodau a phenderfyniadau, ac mae unrhyw ddilyniant am berson yn mynd drwy arweinydd y tîm. Yn ail, maent yn rhoi'r cam capasiti hynaf ar frig rownd gynllunio nesaf y tîm taliadau, wedi'i raddio yn erbyn gwaith nodweddion gan y perchennog cynnyrch, ac yn adrodd y canlyniad yn yr adolygiad dibynadwyedd. Yn drydydd, maent yn ychwanegu dwy eitem rhestr wirio at dempled yr adolygiad (yr hyn yr oedd pobl yn ei wybod ar bob penderfyniad, ac o leiaf ddau ffactor cyfrannol) ac yn cynnal sesiwn hyfforddi i ysgrifenwyr gan ddefnyddio un adolygiad dienw.

Mae'r risg chwarae'r system yn ymddangos yn y chwarter canlynol. Mae cwmpas adolygu yn codi i 97 y cant, ond mae cyfran yr adolygiadau o dan 300 gair yn dyblu, ac mae ychydig o dimau wedi israddio digwyddiadau o ddifrifoldeb dau i dri ychydig islaw'r sbardun. Mae'r sampl ansawdd ac archwiliad o newidiadau difrifoldeb yn ei ddal. Mae'r grŵp yn gofyn pam y digwyddodd yr israddio, yn dysgu bod timau'n teimlo bod adolygiad yn cosbi, ac yn llacio'r disgwyliad hyd ar gyfer digwyddiadau bach tra'n cadw'r sbardun difrifoldeb dau.

## Y golwg fesul sector

**Busnes newydd.** Gall tîm bach ddysgu'n gyflym oherwydd bod pawb wedi mynychu'r digwyddiad. Y risg yw na ysgrifennir dim i lawr ac y bydd y wers yn cerdded allan gyda'r cyflogai nesaf. Cadwch dempled un dudalen, cynhaliwch adolygiad ar gyfer unrhyw beth sy'n deffro rhywun yn y nos, ac olrheiniwch dim ond cau camau ac achosion sy'n ailadrodd. Gwarchodwch didwylledd drwy i sylfaenwyr ddarllen adolygiadau heb sylwebaeth ar unigolion.

**Busnes bach.** Yn aml y person a drwsiodd y broblem yw'r unig un sy'n ei deall. Defnyddiwch dempled byr ac adolygwch y cam agored hynaf yn fisol.

**Menter fawr.** Safonwch y templed, y sbardun, a'r rhestr dosbarthiadau achos, a gadewch i dimau deilwra dyfnder. Darparwch le chwiliadwy ar gyfer adolygiadau, fforwm traws-dîm, a sgorydd allanol. Gochelwch rhag tablau cynghrair o dimau yn ôl cyfrifon digwyddiadau neu adolygiadau, gan eu bod yn cosbi tryloywder.

**Llywodraeth a'r sector cyhoeddus.** Gall adolygiadau wynebu dyletswyddau statudol, archwilio, neu geisiadau rhyddid gwybodaeth, sy'n gwneud awduron yn ofalus. Gwahanwch yr adolygiad dysgu oddi wrth unrhyw adroddiad ffurfiol i oruchwylwyr, a chofnodwch gamau wedi'u rhwystro gyda'u dibyniaeth (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Amser yw cost yr arfer hwn yn bennaf. Mae awduron yn treulio oriau ar bob adolygiad ac mae llawer o bobl yn treulio awr mewn sesiwn. Mae sampl ansawdd chwarterol yn cymryd ychydig oriau darllenydd allanol. Mae tagio achosion ac olrhain camau angen ychydig o offer, a all fod yn daenlen a maes yn yr offer tocynnau ac ôl-groniad presennol. Mae cost fwy, llai gweladwy yn ymddygiad arweinyddiaeth, oherwydd bod y rhaglen yn methu os yw arweinwyr yn ymateb yn wael i adolygiadau didwyll.

Daw'r elw o achosion sy'n rhoi'r gorau i ailadrodd ac o ddigwyddiadau sy'n fyrrach oherwydd bod y tîm wedi gweld rhywbeth tebyg. Mae llai o ddigwyddiadau sy'n ailadrodd yn rhyddhau capasiti peirianneg a gweithrediadau, yn lleihau dwysáu, ac yn gostwng cost tarfu ar gwsmeriaid. Mae llyfrgell a rennir o adolygiadau yn byrhau cromlin ddysgu staff newydd ac yn lleihau dibyniaeth ar ychydig o bobl brofiadol. Peidiwch â dyfynnu canran o sefydliad arall. Mesurwch eich llinell sylfaen eich hun ar gyfer ailadrodd achosion, oedran camau agored, a chyswllt dro ar ôl tro cyn i chi ddechrau, a chymharwch ar ôl dau neu dri chwarter.

Y terfyn gonest yw ei bod yn anodd priodoli dysgu: gall gostyngiad mewn ailadrodd ddod o adolygiad gwell, newid pensaernïaeth digyswllt, neu lwc. I gael triniaeth ehangach gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes.

## Gwrthbatrymau a maglau

- **Theatr adolygu.** Mae adolygiadau yn bodloni rheol ac nid oes neb yn eu darllen. Yn lle hynny, samplwch a darllenwch adolygiadau, a'u barnu yn ôl y newid a gynhyrchwyd ganddynt.
- **Chwilio am y gwraidd achos fel person.** Mae'r adolygiad yn enwi camgymeriad unigolyn ac yn stopio. Yn lle hynny, gofynnwch beth wnaeth y camgymeriad yn debygol, a rhestrwch sawl ffactor cyfrannol.
- **Chwyddiant camau.** Mae adolygiadau yn cynhyrchu rhestrau hir na all y tîm eu hariannu. Yn lle hynny, cyfyngwch bob adolygiad i ychydig o gamau wedi'u graddio a gwrthodwch y gweddill gyda rheswm.
- **Camau y tu allan i'r ôl-groniad.** Maent yn byw mewn dogfen ac ni chânt eu cynllunio byth. Yn lle hynny, crëwch eitemau gwaith yn nhraciwr y tîm perchnogol a'u cysylltu â'r adolygiad.
- **Cau heb wirio.** Mae'r cam wedi'i farcio fel un wedi'i wneud ac mae'r achos yn dychwelyd. Yn lle hynny, gofynnwch i adolygydd gadarnhau bod y newid yn gweithio a gwyliwch y dosbarth achos am ailadrodd.
- **Defnyddio cyfrifon i gymharu timau.** Mae tîm â mwy o adolygiadau neu bethau a fu bron â digwydd yn edrych yn waeth. Yn lle hynny, darllenwch gyfrif uchel fel agoredrwydd, a chymharwch bob tîm â'i hanes ei hun.
- **Cosbi'r negesydd.** Mae arweinydd yn holi person ar ôl adolygiad didwyll. Yn lle hynny, cytunwch ar norm ar gyfer sut mae arweinwyr yn ymateb, a gwiriwch y pwls ar ôl digwyddiadau caled.
- **Trin y metrigau fel prawf o ddysgu.** Cymerir dangosfwrdd glân fel tystiolaeth bod y sefydliad yn dysgu. Yn lle hynny, parhewch i ddarllen sampl o adolygiadau a gofyn i'r bobl a'u hysgrifennodd.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Sbardunau a chwmpas | Mae adolygiadau yn dibynnu ar bwy sydd ar gael a pha mor ddrwg yr oedd yn teimlo | Mae rhai timau yn cynnal adolygiadau ar gyfer digwyddiadau difrifol | Sbardunau ysgrifenedig a thempled cyffredin; cwmpas wedi'i gyfrif yn ôl difrifoldeb | Cwmpas wedi'i dueddu a'i archwilio yn erbyn israddio; traciau ysgafn a llawn | Sbardunau wedi'u haddasu gyda chwsmeriaid a chyflenwyr; adolygiadau a rennir ar gyfer digwyddiadau ar y cyd |
| Ansawdd a gonestrwydd | Mae adolygiadau yn enwi person neu un achos | Mae rhai timau yn ysgrifennu adolygiadau di-fai | Safon rhestr wirio; disgwylir iaith ddi-fai | Sampl allanol chwarterol; pwls wedi'i adolygu; hyfforddi ysgrifenwyr | Adolygiadau wedi'u cyd-ysgrifennu gyda chyflenwyr a defnyddwyr; mae darllen ar draws timau yn arferol |
| Camau ac ailadrodd | Mae camau yn byw mewn dogfennau ac anaml y'u gorffennir | Camau wedi'u holrhain gan rai timau; mae cau yn amrywio | Camau yn yr ôl-groniad go iawn gyda pherchnogion, dyddiadau, a gwrthod gonest | Cau, oedran, ac ailadrodd achosion wedi'u hadolygu, gyda gwelliant wedi'i ariannu | Camau wedi'u cydlynu ar draws timau a chyflenwyr; dosbarthiadau achos wedi'u diwygio wrth i batrymau symud |
| Rhannu a dysgu | Mae gwersi'n aros gyda'r tîm | Adolygiadau wedi'u postio ar gyfer y tîm | Adolygiadau chwiliadwy ac wedi'u rhannu mewn fforwm rheolaidd | Cyrhaeddiad wedi'i fesur; timau dibynnol yn adrodd newidiadau a wnaed | Mae dysgu yn llifo i ddylunio, ymsefydlu, a chontractau cyflenwyr |

## Rhestr wirio

- [ ] Mae sbardunau ysgrifenedig yn dweud pa ddigwyddiadau sy'n cael adolygiad, gan gynnwys pethau a fu bron â digwydd o werth dysgu uchel.
- [ ] Mae templed byr yn bodoli, gyda thrac ysgafn ar gyfer digwyddiadau bach.
- [ ] Mae adolygiadau yn ddi-fai yn ôl templed ac yn ôl ymddygiad arweinyddiaeth.
- [ ] Mae pob cam yn eitem waith yn ôl-groniad y tîm perchnogol, gyda pherchennog a dyddiad.
- [ ] Gellir gwrthod camau, ac mae'r rheswm yn cael ei gofnodi a'i adrodd.
- [ ] Mae rhestr fer o ddosbarthiadau achos yn bodoli, a thagir pob adolygiad.
- [ ] Mae darllenydd allanol yn sgorio sampl ar hap o adolygiadau bob chwarter.
- [ ] Adolygir y camau agored hynaf ochr yn ochr â dibynadwyedd gwasanaeth.
- [ ] Adroddir oedran camau agored fel canolrif, canradd uchel, a'r hynaf.
- [ ] Mae llwybr bron â digwydd yn bodoli, ac mae'r tîm yn gwybod beth sy'n digwydd ar ôl adroddiad.
- [ ] Ni adroddir nac y defnyddir unrhyw fetrig yn y pwnc hwn fesul person.
- [ ] Mae pwls diogel i siarad yn rhedeg dim ond ar gyfer grwpiau sy'n ddigon mawr i warchod dienwogrwydd.

## Anogwyr AI

**Adolygwch ddrafft ôl-farwolaeth am ansawdd.**

```text
Dyma ddrafft ôl-farwolaeth ar gyfer [disgrifiad o'r digwyddiad] ar [gwasanaeth].
Gwiriwch ef yn erbyn y safon hon: [gludwch eich rhestr wirio adolygu]. Ar gyfer
pob eitem, dywedwch a yw'r drafft yn ei bodloni, dyfynnwch y llinellau sy'n
cefnogi eich barn, a phwyntiwch at iaith sy'n neilltuo bai i berson yn lle
disgrifio amodau. Peidiwch ag ychwanegu ffeithiau nad ydynt yn y testun.
Rhestrwch eich rhagdybiaethau ac unrhyw beth na allech ei farnu o'r hyn a
ddarparais.

[gludwch y drafft, gyda data personol wedi'i dynnu]
```

**Cynigiwch ddosbarthiadau achos o adolygiadau'r gorffennol.**

```text
Isod mae crynodebau o [nifer] o adolygiadau'r gorffennol ar gyfer [gwasanaeth neu
grŵp o wasanaethau]. Cynigiwch restr fer o ddosbarthiadau achos, rhwng [lleiafswm]
a [uchafswm], sy'n disgrifio amodau system a byth bobl. Ar gyfer pob dosbarth
rhowch ddiffiniad un llinell, yr adolygiadau sy'n ffitio, ac adolygiadau sy'n
amwys. Peidiwch â dyfeisio achosion nad ydynt wedi'u cefnogi gan y testun.
Rhestrwch eich rhagdybiaethau a'r adolygiadau na allech eu dosbarthu.

[gludwch grynodebau]
```

**Dadansoddwch eitemau gweithredu agored am batrymau sefyll yn eu hunfan.**

```text
Dyma allforiad o gamau adolygu ar gyfer [tîm neu wasanaeth]: tîm perchnogol,
dyddiad creu, dyddiad dyledus, statws, a disgrifiad un llinell. Adroddwch y
canolrif, yr 85fed canradd, a'r oedran uchaf o gamau agored, yna grwpiwch y
camau hynaf yn ôl rheswm tebygol dros sefyll yn eu hunfan (er enghraifft cwmpas
aneglur, dibyniaeth ar dîm arall, dim capasiti, neu werth isel). Adroddwch
batrymau yn ôl tîm a gwasanaeth, byth yn ôl person. Peidiwch â dyfalu rhesymau
nad yw'r data yn eu cefnogi. Rhestrwch eich rhagdybiaethau a'r meysydd
ychwanegol a fyddai'n helpu.

[gludwch allforiad gyda data personol wedi'i dynnu]
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc cyfatebol, y diffiniadau, a'r rheilen warchod pâr ar gyfer metrig adolygu neu ddysgu yr ydych ar fin ei adrodd.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod metrig dysgu a ddiwygiwyd yn dal i gario ei glociau, ei ffordd o chwarae'r system, a'i reilen warchod.

## Pwyntiau allweddol

- Mae adolygiad yn werth yr hyn y mae'n ei newid, felly mesurwch gwmpas, ansawdd, cau camau, ac ailadrodd achosion, a darllenwch sampl o'r adolygiadau eu hunain.
- Di-fai yw'r rhagamod ar gyfer data gonest, ac mae arweinwyr yn ei warchod yn ôl sut y maent yn ymateb i adolygiad didwyll.
- Rhowch gamau yn yr ôl-groniad go iawn, cyfyngwch eu nifer, caniatewch wrthod gonest, a gwyliwch oedran yr hynaf.
- Tagiwch adolygiadau gyda rhestr fer o ddosbarthiadau achos fel bod achosion sy'n ailadrodd yn dod yn weladwy ac yn bwydo rheoli problemau.
- Darllenwch gyfrif bron â digwydd cynyddol fel arwydd o agoredrwydd yn gynnar, a pheidiwch byth â graddio pobl na thimau yn ôl cyfaint adolygiadau.
- Parwch bob rhif yma â rheilen warchod, oherwydd bod y ddolen ddysgu ei hun yn darged y gellir ei chwarae.

## Cyfeiriadau a darllen pellach

1. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Edmondson, A., "Psychological Safety and Learning Behavior in Work Teams," *Administrative Science Quarterly*, 44(2), 1999.
4. Dekker, S., *The Field Guide to Understanding 'Human Error'*, Ashgate, 2006.
5. Reason, J., *Human Error*, Cambridge University Press, 1990.
6. Derby, E., and Larsen, D., *Agile Retrospectives: Making Good Teams Great*, Pragmatic Bookshelf, 2006.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Just culture](https://en.wikipedia.org/wiki/Just_culture).
13. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
14. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
15. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
16. Wikipedia, [Hindsight bias](https://en.wikipedia.org/wiki/Hindsight_bias).
17. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
18. Wikipedia, [Psychological safety](https://en.wikipedia.org/wiki/Psychological_safety).
