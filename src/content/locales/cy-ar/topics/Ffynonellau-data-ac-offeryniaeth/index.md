# Ffynonellau data ac offeryniaeth

**Dim ond cystal â'r digwyddiadau oddi tano yw metrig, felly enwch y system gofnodi ar gyfer pob rhif, cipiwch ddigwyddiadau'n awtomatig ar yr eiliad y maent yn digwydd, a phrofwch y biblinell mor ofalus ag y profwch y siart.**

## Crynodeb a chymhelliant

Mae'r rhan fwyaf o raglenni metrigau yn gwario eu hymdrech ar ddangosfyrddau a bron ddim ar y pibellau sy'n eu bwydo. Mae hynny am yn ôl. Mae siart caboledig a adeiladwyd ar stampiau amser anghyson, maes statws nad oes neb yn ei ddiweddaru, neu integreiddiad a stopiodd yn dawel fis diwethaf yn edrych yn awdurdodol tra'n anghywir. Mae'r pwnc hwn yn ymdrin â'r sylfaen ddi-lol ar gyfer gweddill y llyfr: o ble mae data gwasanaeth a chyflawni yn dod, pa mor ddibynadwy yw pob ffynhonnell, a pha fethiannau ansawdd data sy'n annilysu metrig cyn i neb sylwi.

Mae'r ffynonellau'n syrthio i ychydig o deuluoedd. Mae offeryn [rheoli gwasanaethau TG (ITSM)](https://en.wikipedia.org/wiki/Information_technology_service_management) yn cofnodi digwyddiadau, ceisiadau, problemau a newidiadau, y mae [ITIL](https://en.wikipedia.org/wiki/ITIL) yn eu trin fel cofnodion craidd gweithrediad gwasanaeth. Mae [system olrhain materion](https://en.wikipedia.org/wiki/Issue_tracking_system) yn cofnodi'r ôl-groniad a symudiad eitemau gwaith ar gyfer timau ystwyth. Mae [rheoli fersiynau](https://en.wikipedia.org/wiki/Version_control) yn cofnodi comisiynau, canghennau ac uniadau. Mae piblinell [integreiddio a chyflawni parhaus (CI/CD)](https://en.wikipedia.org/wiki/CI/CD) yn cofnodi adeiladau, canlyniadau profion a defnyddiadau. Mae llwyfannau monitro ac [arsylwadwyedd](https://en.wikipedia.org/wiki/Observability_(software)) yn allyrru telemetreg: metrigau, logiau ac olion o systemau sy'n rhedeg. Mae [cronfa ddata rheoli cyfluniad (CMDB)](https://en.wikipedia.org/wiki/Configuration_management_database) yn cofnodi'r gwasanaethau a'r cydrannau y mae pethau'n perthyn iddynt. Mae arolygon yn cofnodi'r hyn na all unrhyw system ei arsylwi, megis bodlonrwydd ac ymdrech.

Mae digwyddiad defnyddio a ysgrifennir gan biblinell yn wrthrychol ac yn anodd ei ffugio, mae statws tocyn a newidiwyd oriau ar ôl y gwaith yn atgof, ac mae ateb arolwg yn ganfyddiad. Mae gwybod pa fath o gofnod sydd y tu ôl i rif yn dweud wrthych pa fethiant i chwilio amdano yn gyntaf.

Mae'r golygon ystwyth ac ITIL yn cwrdd wrth yr un data: peiriannau cyflwr â stampiau amser yw'r ddau, felly cofnodwch bob newid cyflwr fel digwyddiad ag amser dibynadwy a deillio'r metrigau o'r digwyddiadau.

Mae tri thymor yn codi dro ar ôl tro yn y pwnc hwn. **System gofnodi** (system of record) yw'r un ffynhonnell sy'n awdurdodol ar gyfer ffaith, er enghraifft y biblinell ar gyfer "digwyddodd defnyddio." **Offeryniaeth** (instrumentation) yw cipio digwyddiadau'n fwriadol, gan god, cyfluniad neu integreiddiad offer, fel y gellir cyfrifo metrig heb i neb ei deipio. **Model statws** yw'r set o gyflyrau y gall eitem waith neu gofnod fod ynddynt a'r symudiadau a ganiateir rhyngddynt. Mae'r model statws yn penderfynu pa glociau y gellir eu cyfrifo o gwbl.

Ar raddfa menter a'r sector cyhoeddus mae'r broblem yn cyfansoddi. Mae data'n pasio drwy gysylltwyr, swyddi [echdynnu, trawsnewid, llwytho (ETL)](https://en.wikipedia.org/wiki/Extract,_transform,_load) ac haenau adrodd, ac mae pob naid yn gyfle i ystyr ddrifftio. Gall maes sy'n golygu un peth yn y ffynhonnell olygu rhywbeth ychydig yn wahanol yn y warws, ac mae'r rhif yn dal i edrych yn gredadwy. Y feddyginiaeth yw byrhau'r pellter rhwng digwyddiad a dangosfwrdd, a gwirio'r biblinell ar amserlen.

## Egwyddorion allweddol

- **Cipiwch ddigwyddiadau, nid crynodebau.** Storiwch y newidiadau cyflwr crai gyda stampiau amser a chyfrifwch fetrigau ohonynt, fel y gall diffiniad newid heb golli hanes.
- **Ffafriwch arsylwi i hunan-adrodd.** Lle gall system weld y digwyddiad, defnyddiwch hynny; cadwch adroddiadau pobl ar gyfer yr hyn na all ond pobl ei ddweud.
- **Enwch un system gofnodi fesul ffaith.** Mae ffynonellau dyblyg yn anghytuno, ac mae'r anghytundeb yn erydu ymddiriedaeth yn y ddwy.
- **Dyluniwch y model statws cyn y metrig.** Ni ellir cyfrifo cloc o gyflyrau nad ydynt yn bodoli neu sy'n golygu pethau gwahanol ar wahanol dimau.
- **Trinwch y biblinell fel cynnyrch.** Mae ganddi berchnogion, profion, monitro a log newidiadau, oherwydd mae ansawdd data'n dirywio'n dawel.
- **Dangoswch darddiad.** Dylai pob rhif ar ddangosfwrdd arwain yn ôl at ei gofnodion ffynhonnell mewn clic neu ddau.
- **Casglwch yr hyn y byddwch yn ei ddefnyddio yn unig, a'i ddiogelu.** Mae pob maes yn gost ac, pan fo'n ymwneud â phobl, yn ddyletswydd preifatrwydd.

## Diffiniadau metrigau

Mae'r metrigau isod yn mesur iechyd y cyflenwad data ei hun. Nhw yw'r panel offerynnau ar gyfer yr offerynnau.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cwmpas ffynonellau | Cyfran y gwasanaethau a'r timau o fewn cwmpas y mae eu digwyddiadau'n cyrraedd y storfa metrigau yn awtomatig | gwasanaethau neu dimau â phorthiant awtomataidd / gwasanaethau neu dimau o fewn cwmpas; rhestrir "o fewn cwmpas" yn y gofrestr metrigau | canran | Cofrestr metrigau a chyfluniad y biblinell | Mesur ac adrodd; rheoli cyfluniad gwasanaeth | Cytundeb gweithio tîm ar offer | Chwarterol |
| Cyflawnrwydd stampiau amser | Cyfran yr eitemau gwaith caeedig sy'n cario pob stamp amser sydd ei angen ar gyfer clociau'r metrig | eitemau caeedig â'r holl stampiau amser newid cyflwr gofynnol / eitemau a gaewyd yn y cyfnod; eithrir eitemau sy'n dal ar agor | canran | Hanes offeryn ITSM neu olrheinydd materion | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth | Hanes bwrdd neu lif gwaith | Misol |
| Cyfradd ôl-ddyddio | Cyfran y newidiadau cyflwr a gofnodwyd ar ôl y ffaith, a fesurir gan y bwlch rhwng amser y digwyddiad a'r amser y'i cofnodwyd | newidiadau cyflwr a gofnodwyd fwy na 24 awr ar ôl amser y digwyddiad / newidiadau cyflwr yn y cyfnod; mae'r cloc yn dechrau wrth y digwyddiad ac yn stopio wrth y cofnodi | canran | Llwybr archwilio'r olrheinydd, neu amser digwyddiad y biblinell yn erbyn amser cofnodi | Galluogi newid; rheoli digwyddiadau | Diffiniad o orffen | Misol |
| Ffresni data | Pa mor hen yw'r data diweddaraf ar ddangosfwrdd pan gaiff ei weld | amser gweld llai amser y digwyddiad diweddaraf a lwythwyd; adroddwch y canolrif a'r 95fed canradd | oriau | Log rhedeg y biblinell a log llwytho'r dangosfwrdd | Mesur ac adrodd | Paratoi adolygiad rhanddeiliaid | Wythnosol |
| Amrywiant cysoni | Anghytundeb rhwng dwy ffynhonnell ar gyfer yr un cyfrif | gwahaniaeth absoliwt rhwng y ddau gyfrif / cyfrif y ffynhonnell gofnodi, ar gyfer cyfnod a chwmpas penodol | canran | Y ffynhonnell gofnodi a'r haen adrodd | Rheoli lefelau gwasanaeth; rheolaeth ariannol | Gwiriadau adroddiad rhyddhau | Misol |
| Drifft model statws | Nifer yr enwau statws neu drawsnewidiadau gwahanol sydd ar waith o'i gymharu â'r model dogfenedig | statysau neu drawsnewidiadau annogfenedig a arsylwyd yn y cyfnod (cyfrif); eithrir y rhai dogfenedig | cyfrif | Cyfluniad llif gwaith yr olrheinydd a hanes digwyddiadau | Gwelliant parhaus | Cytundebau gweithio ar lif gwaith | Chwarterol |
| Cyfradd ymateb arolwg | Cyfran y bobl a wahoddwyd a gwblhaodd arolwg | ymatebion cyflawn / gwahoddiadau a gyflwynwyd; eithrir gwahoddiadau a fowndiodd | canran | Offeryn arolwg | Rheoli lefelau gwasanaeth; profiad cwsmeriaid | Adolygiad rhanddeiliaid ac adborth gwelliant | Fesul ton arolwg |

Mae cyflawnrwydd stampiau amser yn cyfrif eitemau caeedig yn unig, felly ni all ôl-groniad o hen eitemau agored guddio bwlch. Mae'r gyfradd ôl-ddyddio yn defnyddio trothwy 24 awr fel enghraifft; mae tîm yn dewis trothwy sy'n gweddu i'w waith ac yn ei ysgrifennu.

## Argymhellion

### Mapiwch bob metrig i'w ffynhonnell

**1. Adeiladwch fap ffynonellau cyn adeiladu dangosfwrdd.** Ar gyfer pob metrig, cofnodwch y system gofnodi, y digwyddiad sy'n dechrau'r cloc, y digwyddiad sy'n ei stopio, perchennog y ffynhonnell, a'r dull methu hysbys. Os na allwch enwi'r system, nid ydych eto'n gwybod o ble mae'r rhif yn dod. Cadwch y map yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

**2. Dewiswch un system gofnodi fesul ffaith.** Cofnodir defnyddio gan y biblinell, digwyddiad gan yr offeryn ITSM, newid cod gan reoli fersiynau, perthynas gwasanaeth gan y CMDB. Lle mae dau offeryn yn dal yr un ffaith, penderfynwch pa un sy'n ennill a gwnewch i'r llall ddarllen ohono. Mae cysoni wedyn yn dod yn wiriad, nid yn ddadl.

### Cipiwch ddigwyddiadau ar yr eiliad y maent yn digwydd

**3. Offerynnwch y digwyddiad, nid yr adroddiad.** Gadewch i'r biblinell gofnodi'r defnyddio, i'r gwesteiwr rheoli fersiynau gofnodi'r uniad, ac i'r system fonitro gofnodi'r rhybudd. Mae data sy'n dibynnu ar rywun yn cofio diweddaru maes yn dirywio gyda phellter o'r digwyddiad a chyda llwyth gwaith. Lle mae digwyddiad awtomataidd yn bodoli, ffafriwch ef dros ddirprwy a gofnodwyd gan ddyn ar gyfer yr un ffaith (gweler pwnc 2.8, Metrigau DORA).

**4. Gwnewch newidiadau statws yn sgil-effaith y gwaith.** Os yw uno cangen yn symud yr eitem waith i "mewn adolygiad" neu fod defnyddio yn ei symud i "rhyddhawyd," does dim rhaid i neb gofio. Mae integreiddiadau rhwng rheoli fersiynau, piblinell ac olrheinydd yn cael gwared â'r rhan fwyaf o ôl-ddyddio.

**5. Cadwch y digwyddiadau crai, a'u cadw'n ddigyfnewid.** Storiwch bob newid cyflwr gydag amser y digwyddiad, amser y cofnodi, a math yr actor (person neu awtomeiddio). Ysgrifennwch gywiriadau fel digwyddiadau newydd, nid trosysgrifiadau, fel bod hanes y cywiriad ei hun yn ddata.

### Cael amser yn iawn

**6. Cofnodwch amser mewn un safon.** Storiwch stampiau amser yn [Amser Cyffredinol Cyd-drefnedig (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) mewn fformat diamwys fel yr un a ddiffinnir gan ISO 8601 ac RFC 3339, a throsi i amser lleol ar gyfer dangos yn unig. Mae parthau amser cymysg a newidiadau amser haf yn cynhyrchu hyd negyddol a chlociau awr i ffwrdd yn dawel.

**7. Ysgrifennwch reolau cloc lle mae'r data'n byw.** Ar gyfer pob mesur amser, nodwch pa ddigwyddiad sy'n dechrau'r cloc, pa un sy'n ei stopio, a pha statysau sy'n ei oedi. Mae cyflwr oedi yn benderfyniad dylunio. Adroddwch pa mor aml y defnyddir pob cyflwr oedi, oherwydd y cloc yw lle caiff data gwasanaeth ei lunio amlaf (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau).

### Dyluniwch y model statws

**8. Cadwch y model statws yn fach, a rennir a dogfenedig.** Mae pob statws ychwanegol yn gwahodd dehongliad gwahanol gan bob tîm. Diffiniwch beth mae pob cyflwr yn ei olygu mewn un frawddeg, pwy a gaiff symud gwaith iddo, a pha drawsnewidiadau a ganiateir. Mae oedran eitem waith a mesurau llif yn dibynnu ar y model hwn (gweler pwnc 2.1, Mesurau llif), ac mae cymharu rhwng timau'n dibynnu ar dimau'n defnyddio'r un geiriau ar gyfer yr un cyflyrau. Pan fydd y data'n eich synnu, amheuwch y llif gwaith yn gyntaf: logiwch bob newid i lif gwaith neu faes gyda'i ddyddiad a'i reswm, a chyfrifwch statysau annogfenedig fel arwydd drifft.

### Cadwch y biblinell yn onest

**9. Profwch y biblinell fel meddalwedd.** Gwiriwch gyfrifon rhesi yn erbyn y ffynhonnell, gwiriwch fod meysydd gofynnol yn bresennol, gwiriwch am ddyblygion, a rhybuddiwch pan fydd porthiant yn stopio. Ychwanegwch ddangosydd ffresni at bob dangosfwrdd fel y gall gwylwyr weld pa mor hen yw'r data. Mae methiant cysylltydd tawel sy'n gadael rhifau'r mis diwethaf ar y sgrin ymhlith y methiannau mwyaf cyffredin a niweidiol yn y maes hwn (gweler pwnc 11.1, Dylunio dangosfwrdd metrigau gwasanaeth).

**10. Cysonwch ar amserlen a samplwch â llaw.** Cymharwch gyfrif yn yr haen adrodd â'r ffynhonnell ar gyfer cyfnod penodol, ac ymchwiliwch i'r gwahaniaeth. Yna darllenwch sampl fach o gofnodion crai. Mae sampl pymtheg munud yn aml yn canfod yr hyn na all gwiriadau awtomataidd, megis statws a ddefnyddir mewn ffordd annisgwyl.

### Trinwch bobl ac arolygon yn ofalus

**11. Cadwch arolygon ar gyfer yr hyn na all ond person ei ddweud.** Ni ellir arsylwi bodlonrwydd, ymdrech, ymddiriedaeth a lles o ddata system. Gofynnwch yn uniongyrchol, cadwch arolygon yn fyr, amrywiwch yr amseru, ac adroddwch y gyfradd ymateb a phwy a ymatebodd, gan fod y bobl sy'n ateb yn wahanol i'r bobl nad ydynt, math o [duedd dethol](https://en.wikipedia.org/wiki/Selection_bias). Darllenwch y sylwadau agored yn llawn (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

**12. Diogelwch ddata personol a chadwch ddata ar lefel tîm.** Gall data digwyddiadau am waith adnabod unigolion drwy awduraeth comisiynau, meysydd aseinai a chofnodion sgwrs. Casglwch ar y lefel y mae'r metrig ei hangen, cyfanredwch i dimau a gwasanaethau, a chymhwyswch reolau preifatrwydd eich awdurdodaeth a'ch sefydliad. Mae data lefel unigol, unwaith y'i casglwyd, yn tueddu i gael ei ddefnyddio ar gyfer graddio, sy'n llygru'r ffynhonnell (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cwmpas ffynonellau | Cyfrif gwasanaeth fel un dan sylw ar ôl cysylltu porthiant, hyd yn oed os yw'n cario bron dim digwyddiadau; gadael gwasanaethau caled allan o'r cwmpas | Cyfaint digwyddiadau fesul gwasanaeth dan sylw o'i gymharu â'i weithgarwch hysbys; adolygu'r rhestr cwmpas yn erbyn y catalog gwasanaethau |
| Cyflawnrwydd stampiau amser | Llenwi stampiau amser gofynnol ag amser cau i fodloni dilysu | Dosbarthiad y bylchau rhwng cyflyrau olynol; samplo eitemau caeedig i weld a yw'r amseroedd yn gredadwy |
| Cyfradd ôl-ddyddio | Cofnodi newidiadau ychydig y tu mewn i'r trothwy; ehangu'r trothwy; cofnodi pob newid drwy un diweddariad swmp | Patrwm amser cofnodi fesul awr; cyfran y newidiadau gan awtomeiddio o'i gymharu â llaw; archwilio golygiadau swmp |
| Ffresni data | Dangos amser yr adnewyddiad olaf yn lle amser y digwyddiad diweddaraf | Amser y digwyddiad diweddaraf wedi'i ddangos ar y dangosfwrdd; rhybuddio pan fo porthiant yn cyflwyno dim digwyddiadau newydd |
| Amrywiant cysoni | Dewis y cyfnod neu'r cwmpas sy'n cysoni; addasu'r haen adrodd i gyd-fynd â'r ffynhonnell heb ganfod yr achos | Gosod y cwmpas a'r cyfnod ymlaen llaw; cofnodi pob achos a ganfuwyd ac adolygu'r achosion bob chwarter |
| Drifft model statws | Ailddefnyddio statws presennol ar gyfer ystyr newydd i osgoi cael ei nodi; ychwanegu statysau heb eu logio | Cymharu cyfluniad y llif gwaith â'r gofrestr ym mhob adolygiad; darllen sampl o eitemau mewn cyflyrau anarferol |
| Cyfradd ymateb arolwg | Gwahodd pobl sy'n debygol o ymateb yn unig; anfon nodiadau atgoffa at ddefnyddwyr bodlon; cynnig gwobrau sy'n gogwyddo atebion | Cymysgedd ymatebwyr o'i gymharu â'r boblogaeth defnyddwyr; dosbarthiad atebion fesul ton; sylwadau agored wedi'u darllen yn yr adolygiad |

Darlleniad iach yw set o rifau diflas: cwmpas uchel, ôl-ddyddio yn isel ac yn disgyn, ffresni o fewn ei addewid a nodir, ac achos hysbys pryd bynnag nad yw amrywiant cysoni yn sero. Pan fydd rhif yn symud, gall rhywun ddweud a newidiodd y gwaith neu'r offeryn.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Cipio digwyddiadau awtomataidd | Gwrthrychol, amserol, ymdrech isel unwaith y'i hadeiladwyd | Yn cwmpasu'r hyn a offerynnwyd yn unig; yn torri'n dawel pan fydd offer yn newid |
| Mewnbynnu a diweddaru statws â llaw | Yn cipio cyd-destun a barn; yn gweithio heb integreiddio | Yn hwyr, yn anghyson, ac yn agored i chwarae'r system |
| Un storfa metrigau ganolog | Un diffiniad, un lle i brofi a llywodraethu | Angen cyllid a pherchnogaeth; gall ddod yn dagfa |
| Mae pob tîm yn cadw ei ddata ei hun | Yn gweddu i waith lleol; cyflym i ddechrau | Mae diffiniadau'n ymwahanu; mae crynodebau'n annibynadwy |
| Digwyddiadau crai wedi'u cadw yn y tymor hir | Gellir newid diffiniadau ac ailgyfrifo hanes | Cost storio a phreifatrwydd; mwy i'w ddiogelu |

Awtomeiddiwch yr hyn y gellir ei arsylwi, gofynnwch i bobl am yr hyn na ellir, a chadwch y cofnod crai. Buddsoddwch yn gyntaf yn y ffynonellau y tu ôl i'r ddau neu dri metrig y mae'r tîm yn eu defnyddio mewn gwirionedd, nid mewn platfform data ar gyfer pob rhif posibl.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Ar gyfer ein metrig pwysicaf, pa system yw'r ffynhonnell gofnodi, a sut ydym ni'n gwybod?**
Gofynnwch i'r grŵp olrhain y rhif o'r dangosfwrdd yn ôl i'r digwyddiad cyntaf. Nodwch bob lle y mae person neu drawsnewidiad yn cyffwrdd â'r data. Dylai'r hwylusydd chwilio am gamau na all neb eu hesbonio, oherwydd dyna lle dylai'r ymchwiliad cyntaf ddechrau.

**2. Pa rai o'n stampiau amser a ysgrifennir gan system, a pha rai a deipir gan berson?**
Rhestrwch y clociau a ddefnyddir, megis amser i ymateb, amser i ddatrys ac amser cylch. Nodwch bob cychwyn a stop fel awtomatig neu â llaw. Ar gyfer y rhai â llaw, gofynnwch pa mor hir ar ôl y digwyddiad y gwneir y cofnod fel arfer. Mae'r drafodaeth yn aml yn dangos bod y metrig a drafodir fwyaf yn gorwedd ar y stamp amser lleiaf dibynadwy.

**3. Beth mae ein statysau yn ei olygu, ac a yw pob tîm yn golygu'r un peth?**
Rhowch y llif gwaith ar fwrdd a gofynnwch i bobl o wahanol dimau esbonio pob cyflwr yn eu geiriau eu hunain. Cymharwch yr esboniadau. Cyfrifwch gyflyrau lle mae'r cloc yn oedi, a gofynnwch pwy a gaiff eu defnyddio a pham. Cytunwch ar un newid i gael gwared ag amwysedd a'i logio gyda'r rheswm.

**4. Sut fydden ni'n darganfod pe bai porthiant yn stopio'n dawel?**
Gofynnwch pryd y gwiriodd unrhyw un ddiwethaf fod y data ar y dangosfwrdd yn gyfredol. Trafodwch pa rybudd neu ddangosydd ffresni fyddai'n dal cysylltydd a stopiodd o fewn diwrnod. Dylai'r hwylusydd wthio am berchennog a enwir a gwiriad pendant, nid bwriad cyffredinol i fod yn ofalus.

**5. Beth ydym ni'n ei gasglu nad ydym byth yn ei ddefnyddio, a beth ydym ni'n ei ddefnyddio nad ydym yn ei gasglu'n dda?**
Cymerwch y rhestr feysydd a'r rhestr fetrigau ochr yn ochr. Nodwch feysydd nad ydynt yn bwydo unrhyw benderfyniad a metrigau sy'n gorwedd ar feysydd gwael. Penderfynwch ar un maes i roi'r gorau i'w gasglu ac un i'w wella'r chwarter hwn.

**6. Pwy sy'n ateb ein harolygon, a phwy sydd ddim?**
Cymharwch yr ymatebwyr â phoblogaeth y defnyddwyr neu aelodau'r tîm. Edrychwch ar gyfraddau ymateb yn ôl grŵp ac yn ôl amser y dydd neu'r wythnos. Trafodwch beth y gallai'r distawrwydd ei olygu a sut i gyrraedd grwpiau tawel heb bwysau. Cytunwch sut y dangosir y gyfradd ymateb wrth ymyl pob canlyniad arolwg.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n cynhyrchu'r rhan fwyaf o'r data gwrthrychol: comisiynau, adolygiadau, adeiladau a defnyddiadau. Maent yn elwa o offeryniaeth sy'n gwneud newidiadau statws yn sgil-effaith y gwaith, fel bod y bwrdd yn aros yn onest heb ymdrech ychwanegol. Dylent gadw'r llif gwaith yn fach a bod yn ofalus rhag defnyddio gweithgarwch rheoli fersiynau fel mesur o ymdrech (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif).

### Timau gwasanaeth a gweithrediadau

Mae timau gwasanaeth yn dibynnu ar gofnodion a grëir gan bobl dan bwysau, yn aml yn ystod digwyddiad. Y rheolau cloc, cyflyrau oedi a meysydd blaenoriaeth yw lle mae drifft yn digwydd. Dylai timau gweithrediadau wneud cipio amseroedd allweddol yn awtomatig lle bo modd, megis amser rhybudd ac amser cydnabod, archwilio'r defnydd o gyflyrau oedi, a chadw data monitro ar wahân i'r cofnod tocyn fel y gall pob un wirio'r llall (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn penderfynu faint i'w fuddsoddi mewn sylfeini data, ac maent yn gosod y cymhellion sy'n penderfynu a yw'r data'n aros yn onest. Dylent ofyn o ble mae rhif yn dod cyn gofyn pam y symudodd, ariannu perchnogaeth piblinell fel gwaith parhaus, a disgwyl dyddiad ffresni a diffiniad ar bob adroddiad. Dylai cyrff llywodraethu drin newid dogfenedig mewn ffynhonnell neu ddiffiniad fel digwyddiad arferol, nid methiant.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn cyflenwi'r data sydd bwysicaf am brofiad, fel arfer drwy ateb arolygon, graddio rhyngweithiadau, neu adrodd problemau. Mae angen iddynt wybod beth a gesglir, pam, a beth fydd yn newid o ganlyniad. Mae arolygon byr a dilyniant gweladwy yn cadw'r gyfradd ymateb yn iach. Dylai adroddiadau lefel gwasanaeth sy'n wynebu cwsmeriaid nodi eu ffynonellau a'u diffiniadau (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae gan fanwerthwr ar-lein o faint canolig dîm platfform, tri thîm cynnyrch a desg gwasanaeth. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r arweinyddiaeth yn gofyn pam y disgynnodd amser arweiniol newid ar yr adroddiad misol o ganolrif o 9 diwrnod i 3 diwrnod mewn un chwarter, tra bod y timau cynnyrch yn adrodd dim newid yn y ffordd y maent yn gweithio. Mae pennaeth peirianneg platfform yn amau'r offeryn ac yn gofyn am fap ffynonellau o'r metrig.

Mae'r map yn dangos bod yr amser arweiniol yn dechrau pan grëir cofnod newid yn yr offeryn ITSM ac yn stopio pan osodir ei statws i "gweithredwyd." Roedd dau dîm cynnyrch wedi dechrau creu'r cofnod ar ôl bod y gwaith yn barod, felly dechreuodd y cloc yn hwyr. Mae sampl o 40 cofnod yn canfod bod 12 wedi'u creu ar yr un diwrnod â'r defnyddio. Y gyfradd ôl-ddyddio, a fesurwyd fel y bwlch rhwng y digwyddiad defnyddio yn y biblinell a chofnodi'r statws "gweithredwyd," oedd 31 y cant dros y trothwy 24 awr yr oedd y tîm wedi'i osod.

Mae'r tîm yn gwneud tri newid. Yn gyntaf, mae cychwyn y cloc yn symud i'r comisiwn cyntaf sy'n gysylltiedig â'r newid, a gymerir o reoli fersiynau, ac mae'r stop yn symud i'r digwyddiad defnyddio a ysgrifennir gan y biblinell. Yn ail, mae'r offeryn ITSM yn derbyn y statws o'r biblinell, felly nid yw "gweithredwyd" yn cael ei deipio mwyach. Yn drydydd, mae'r dangosfwrdd yn ennill dangosydd ffresni a gwiriad cysoni o gyfrifon newid rhwng y biblinell a'r offeryn ITSM.

O dan y diffiniad newydd, y canolrif amser arweiniol yw 7 diwrnod a'r 95fed canradd yw 21 diwrnod, ac mae'r gyfradd ôl-ddyddio yn disgyn i 4 y cant. Mae'r arweinyddiaeth yn darllen y 7 diwrnod i ddechrau fel canlyniad gwaeth. Mae pennaeth y platfform yn esbonio mai arteffact o greu cofnodion yn hwyr oedd yr hen rif. Y penderfyniad, a ysgrifennir yn y log penderfyniadau, yw ailddatgan y ddau chwarter blaenorol o ddigwyddiadau crai a nodi'r newid diffiniad ar y siart. Roedd y risg chwarae'r system a ddaliwyd gan y tîm yn gynnil: ni ffugiodd neb rif, ac eto cynhyrchodd creu cofnodion yn hwyr ffigur gwenieithus. Mae'r amrywiant cysoni bellach yn gweithredu fel y rheilen warchod, ac adolygir y sampl o gofnodion crai bob chwarter.

## Y golwg fesul sector

**Busnes newydd.** Mae data'n denau ac ymddiriedaeth yn uchel, sy'n helpu. Defnyddiwch y biblinell a rheoli fersiynau fel y prif ffynonellau, gan nad oes angen ymdrech ychwanegol arnynt, a chadwch y model statws i lond llaw o gyflyrau. Ysgrifennwch bob diffiniad a'i ffynhonnell ar un dudalen, ac ailedrychwch arni pan fydd y tîm yn dyblu.

**Busnes bach.** Mae un person yn aml yn rhedeg TG ar ddesg gwasanaeth a gynhelir. Defnyddiwch adroddiadau'r offeryn, gofynnwch i'r cyflenwr am ei ddiffiniadau'n ysgrifenedig, ac allforiwch ddata crai o bryd i'w gilydd i osgoi cloi i mewn.

**Menter fawr.** Mae llawer o offer, llawer o dimau a haenau o integreiddio yn creu'r risg fwyaf o ddrifft diffiniad. Buddsoddwch mewn model digwyddiadau a rennir, storfa metrigau ganolog â pherchnogion a enwir, a gwiriadau cysoni a ffresni awtomataidd. Cytunwch ar eirfa statws fach ledled y fenter, a gadewch i dimau ychwanegu cyflyrau lleol yn unig gyda mapio datganedig iddi.

**Llywodraeth a'r sector cyhoeddus.** Gall cofnodion fod yn destun cyfreithiau cadw, archwilio, mynediad a phreifatrwydd, a gall caffael gloi offer a fformatau data i mewn. Triniwch y rhain fel mewnbynnau dylunio: cadwch lwybr archwilio, dogfennwch yr achau o ddigwyddiad i adroddiad, a negodwch hawliau allforio data mewn contractau. Mae rhwymedigaethau adrodd yn gwneud diffiniadau dogfenedig yn hanfodol (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae gan gost y pwnc hwn dair rhan. Y gyntaf yw ymdrech adeiladu: integreiddiadau, storfa metrigau, a glanhau'r model statws. Yr ail yw ymdrech rhedeg: perchennog ar gyfer y biblinell, monitro'r porthiannau, a threfn cysoni a samplo chwarterol. Y drydedd yw cost rheolaethau preifatrwydd a diogelwch ar gyfer y data a gedwir gennych.

Daw'r elw o benderfyniadau a wneir ar rifau sy'n golygu'r hyn y maent yn ymddangos eu bod yn ei olygu. Mae data gwael yn arwain at fuddsoddiadau anghywir, dadleuon ynghylch pa ffigur sy'n gywir, a chanlyniadau wedi'u hailddatgan sy'n niweidio ymddiriedaeth. Disgrifiwch y budd drwy batrymau y gallwch eu mesur drosoch eich hun: yr amser a gymerir i gynhyrchu adroddiad misol cyn ac ar ôl, nifer y dadleuon cysoni fesul chwarter, a'r gyfradd ôl-ddyddio a chyflawnrwydd stampiau amser dros amser. Pobl sy'n dominyddu cyfanswm cost perchnogaeth, felly cyfrifwch oriau perchennog y biblinell.

## Gwrthbatrymau a maglau

- **Adeiladu'r dangosfwrdd cyn y map ffynonellau.** Mae'r siart yn edrych wedi gorffen tra bo'i ystyr yn anhysbys. Mapiwch y ffynhonnell, y clociau a'r perchennog yn gyntaf.
- **Ymddiried mewn diweddariadau statws â llaw ar gyfer mesurau amser.** Mae cofnodi hwyr yn gwneud y clociau'n ffuglen. Awtomeiddiwch drawsnewidiadau o ddigwyddiadau piblinell a rheoli fersiynau lle bynnag y maent yn bodoli.
- **Sawl system gofnodi ar gyfer un ffaith.** Mae anghydfodau'n dilyn. Dewiswch un a gwnewch i'r lleill ddarllen ohoni.
- **Newidiadau diffiniad tawel.** Mae'r llinell duedd yn dod yn ddiystyr. Logiwch bob newid gyda'i reswm a'i nodi ar y siart.
- **Cyfartaleddau o ddata anghyflawn.** Nid yw stampiau amser coll yn ddi-drefn, gan fod yr eitemau lletchwith yn aml yn cael eu hepgor. Adroddwch gyflawnrwydd stampiau amser wrth ymyl y canlyniad.
- **Casglu popeth rhag ofn y bydd yn ddefnyddiol.** Mae cost a risg preifatrwydd yn codi heb benderfyniad yn cael ei wasanaethu. Casglwch yr hyn y mae cwestiwn a enwir ei angen.
- **Dim dangosydd ffresni.** Mae dangosfwrdd hen yn edrych yr un fath ag un cyfredol. Dangoswch oedran y digwyddiad diweddaraf ar bob golwg.
- **Data lefel unigol heb ddiben.** Mae'n temtio graddio ac yn niweidio'r ffynhonnell. Cyfanredwch i lefel tîm a gwasanaeth, a chyfyngwch fynediad.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Ffynonellau a chipio | Rhifau wedi'u cydosod â llaw o allforion | Mae rhai offer yn bwydo adroddiad yn awtomatig; eraill ddim | Mae gan bob metrig un system gofnodi a enwir a chipio awtomataidd lle mae digwyddiad yn bodoli | Cwmpas a chyflawnrwydd wedi'u mesur a'u tueddu | Digwyddiadau wedi'u rhannu ar draws timau a chyflenwyr drwy ryngwynebau y cytunwyd arnynt, gyda chontractau ar gyfer allforio |
| Modelau amser a statws | Mae pob person yn cofnodi ac yn darllen amser yn wahanol | Mae rhai timau'n dogfennu eu llif gwaith | Un safon amser a geirfa statws a rennir gyda rheolau cloc ysgrifenedig | Drifft ac ôl-ddyddio wedi'u monitro, a newidiadau wedi'u logio gyda rhesymau | Modelau wedi'u diwygio ar y cyd â chyflenwyr a chwsmeriaid pan fyddant yn peidio â hysbysu penderfyniadau |
| Ansawdd y biblinell | Methiannau'n cael eu canfod pan fydd rhywun yn cwyno | Gwiriadau llaw achlysurol | Cyfrifon rhesi, gwiriadau dyblygu a dangosydd ffresni ar bob dangosfwrdd | Cysoni wedi'i drefnu ac achosion wedi'u hadolygu; mae gan y biblinell berchennog | Iechyd y biblinell wedi'i adrodd fel gwasanaeth, gyda gwelliant wedi'i ariannu |
| Arfer arolygon a phreifatrwydd | Arolygon ad hoc; dim adolygiad preifatrwydd | Cwestiynau safonol mewn rhai timau | Arolygon byr rheolaidd gyda'r gyfradd ymateb wedi'i dangos; data wedi'i gadw ar lefel tîm | Cymysgedd ymatebwyr wedi'i adolygu a gweithredu arno | Canlyniadau arolygon ac arfer preifatrwydd wedi'u rhannu'n agored â defnyddwyr |

## Rhestr wirio

- [ ] Mae gan bob metrig a adroddir system gofnodi a enwir a pherchennog ffynhonnell a enwir.
- [ ] Storir y map ffynonellau yn y gofrestr metrigau.
- [ ] Mae pob mesur amser yn nodi ble mae ei gloc yn dechrau, yn stopio ac yn oedi.
- [ ] Storir stampiau amser yn UTC mewn fformat diamwys, ac mae clociau gweinyddwyr wedi'u cydamseru.
- [ ] Cynhyrchir newidiadau statws gan awtomeiddio lle bynnag y mae digwyddiad yn bodoli.
- [ ] Cedwir digwyddiadau crai gydag amser y digwyddiad ac amser y cofnodi, ac mae cywiriadau'n ddigwyddiadau newydd.
- [ ] Dogfennir y model statws, a logir pob newid gyda'i reswm.
- [ ] Mae pob dangosfwrdd yn dangos oedran ei ddata diweddaraf.
- [ ] Cysonir cyfrifon â'r ffynhonnell ar amserlen, a chofnodir yr achosion.
- [ ] Darllenir sampl o gofnodion crai bob chwarter.
- [ ] Dangosir cyfradd ymateb arolwg a chymysgedd ymatebwyr gyda phob canlyniad arolwg.
- [ ] Lleiheir data personol a'i gyfanredu i lefel tîm a gwasanaeth.

## Anogwyr AI

**Adeiladwch fap ffynonellau ar gyfer metrig.**

```text
Rwy'n dogfennu'r data y tu ôl i'r metrig hwn: [enw'r metrig], wedi'i ddiffinio fel
[diffiniad]. Ein hoffer yw [rhestr o offer, er enghraifft olrheinydd, offeryn ITSM,
piblinell, monitro]. Drafftiwch fap ffynonellau gyda'r meysydd hyn: y digwyddiad
sy'n dechrau'r cloc, y digwyddiad sy'n ei stopio, y system gofnodi ar gyfer pob
un, pwy neu beth sy'n creu'r digwyddiad (person neu awtomeiddio), dulliau methu
tebygol, a gwiriadau a fyddai'n canfod pob methiant. Peidiwch â dyfeisio nodweddion
offer na gwerthoedd meincnod. Rhestrwch eich rhagdybiaethau a'r cwestiynau y
dylwn eu hateb i gwblhau'r map.
```

**Adolygwch fodel statws am amwysedd.**

```text
Dyma'r llif gwaith ar gyfer [tîm neu wasanaeth]: [rhestr o statysau a
thrawsnewidiadau a ganiateir, gydag ystyr un llinell i bob un os yw'n hysbys].
Y clociau a gyfrifwn ohono yw [rhestr clociau]. Nodwch statysau sy'n amwys,
cyflyrau lle gallai cloc stopio neu oedi mewn ffordd gamarweiniol, a mannau lle
gallai dau dîm ddarllen yr un gair yn wahanol. Awgrymwch fodel llai sy'n dal i
gefnogi'r clociau, a dywedwch beth a gollid. Peidiwch â dyfalu sut mae ein
hoffer wedi'i gyfluniad. Rhestrwch eich rhagdybiaethau.
```

**Dyluniwch wiriadau ansawdd data ar gyfer porthiant.**

```text
Rydym yn llwytho [math o ddata, er enghraifft cofnodion newid] o [system ffynhonnell]
i [cyrchfan] bob [amserlen]. Y meysydd gofynnol yw [rhestr meysydd]. Cynigiwch
set ymarferol o wiriadau ar gyfer cyflawnrwydd, dyblygion, ffresni a chysoni yn
erbyn y ffynhonnell, gyda rhybudd awgrymedig a rôl perchennog ar gyfer pob un.
Cadwch y set yn ddigon bach i dîm o [maint y tîm] ei chynnal. Peidiwch â
dyfeisio trothwyon; gofynnwch i mi am y rhai sydd eu hangen arnoch. Rhestrwch
eich rhagdybiaethau.
```

**Drafftiwch arolwg byr a chynllun ar gyfer ei gyfradd ymateb.**

```text
Rwyf eisiau mesur [pwnc profiad, er enghraifft ymdrech i gael cais wedi'i gyflawni]
ar gyfer [cynulleidfa]. Drafftiwch [nifer] o gwestiynau niwtral, cynllun ar gyfer
pryd a sut i'w hanfon, a sut i adrodd y gyfradd ymateb a'r cymysgedd ymatebwyr.
Nodwch eiriad a allai ogwyddo atebion, a nodwch ystyriaethau preifatrwydd o
gofio y bydd y data'n cael ei gadw yn [offeryn neu leoliad]. Peidiwch â
dyfeisio cyfraddau ymateb meincnod. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i ba bwnc sy'n diffinio'r metrig yr ydych yn ei offerynnu a'r rheilen warchod a ddylai eistedd wrth ei ymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod pwnc metrig newydd neu wedi'i olygu yn enwi ei ffynhonnell data a'i glociau.

## Pwyntiau allweddol

- Mae pob metrig yn dibynnu ar system gofnodi a enwir, felly mapiwch y ffynhonnell cyn adeiladu'r siart.
- Cipiwch ddigwyddiadau'n awtomatig ar yr eiliad y maent yn digwydd, a chadwch y digwyddiadau crai fel y gall diffiniadau newid heb golli hanes.
- Mae amser yn ddata hefyd: defnyddiwch un safon, ysgrifennwch y rheolau cloc, a gwyliwch am ôl-ddyddio.
- Cadwch y model statws yn fach, a rennir a dogfenedig, a logiwch bob newid.
- Trinwch y biblinell fel cynnyrch gyda pherchennog, profion, dangosydd ffresni a chysoni wedi'i drefnu.
- Defnyddiwch arolygon ar gyfer yr hyn na all ond pobl ei ddweud, dangoswch y gyfradd ymateb, a chadwch ddata personol ar lefel tîm.

## Cyfeiriadau a darllen pellach

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Kleppmann, M., *Designing Data-Intensive Applications*, O'Reilly Media, 2017.
5. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd edition, Technics Publications, 2017.
6. ISO/IEC 25012:2008, *Software engineering: Software product Quality Requirements and Evaluation (SQuaRE): Data quality model*, International Organization for Standardization.
7. ISO 8601, *Date and time: Representations for information interchange*, International Organization for Standardization.
8. Klyne, G., and Newman, C., *RFC 3339: Date and Time on the Internet: Timestamps*, Internet Engineering Task Force, 2002, https://www.rfc-editor.org/rfc/rfc3339
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
13. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
14. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
15. Wikipedia, [Observability (software)](https://en.wikipedia.org/wiki/Observability_(software)).
17. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
18. Wikipedia, [Extract, transform, load](https://en.wikipedia.org/wiki/Extract,_transform,_load).
19. Wikipedia, [Data quality](https://en.wikipedia.org/wiki/Data_quality).
20. Wikipedia, [Coordinated Universal Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time).
22. Wikipedia, [Selection bias](https://en.wikipedia.org/wiki/Selection_bias).
