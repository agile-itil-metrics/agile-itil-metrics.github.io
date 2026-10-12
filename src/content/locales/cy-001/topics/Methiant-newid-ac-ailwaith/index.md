# Methiant newid ac ailwaith

**Diffiniwch "newid a fethodd" unwaith, yn ysgrifenedig, cysylltwch bob methiant yn ôl â'r newid a'i hachosodd, a darllenwch fethiant ac ailwaith gyda chyflymder fel bod rhif is yn golygu newid mwy diogel a byth dim ond llai o adroddiadau.**

## Crynodeb a chymhelliant

Mae pob newid i wasanaeth byw yn cario rhywfaint o siawns o wneud pethau'n waeth. Y cwestiynau ymarferol yw pa mor aml y mae hynny'n digwydd, faint o waith anghynlluniedig y mae'n ei greu, a pha mor gyflym y mae'r tîm yn adfer. Mae'r pwnc hwn yn ymdrin â'r mesurau sy'n eu hateb: cyfran y newidiadau sy'n methu, cyfran y rhai sydd angen y llwybr brys, cyfraddau dychwelyd a chlytiau brys, a'r ailwaith sy'n dilyn newid gwael. Mae hefyd yn ymdrin â rhan leiaf hudolus y pwnc, sef cytuno beth sy'n cyfrif fel methiant o gwbl.

Rhai termau yn gyntaf. Yn [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, mae'r arfer a elwir yn alluogi newid yn cwmpasu ychwanegu, addasu, neu ddileu unrhyw beth a allai effeithio ar wasanaeth. Mae **newid** felly yn ehangach na defnyddio cod: mae'n cynnwys golygiad cyfluniad, adnewyddu tystysgrif, rheol mur tân, neu fudo cronfa ddata. Mae **newid safonol** wedi'i ragawdurdodi ac yn risg isel, mae **newid arferol** yn mynd drwy asesiad, ac mae **newid brys** yn cael ei wneud ar frys, fel arfer i adfer gwasanaeth neu gau gwendid difrifol. **Defnyddio** yw'r weithred o roi fersiwn o feddalwedd mewn amgylchedd, tra bod **rhyddhau** yn gwneud gallu ar gael i ddefnyddwyr. Gall timau sy'n defnyddio [toglen nodwedd](https://en.wikipedia.org/wiki/Feature_toggle) ddefnyddio cod heb ei ryddhau (gweler pwnc 4.5, Metrigau rhyddhau a defnyddio).

**Methiant newid** yw newid sy'n arwain at wasanaeth wedi'i ddiraddio neu sydd angen adferiad. Mae adferiad yn cymryd sawl ffurf. Mae [dychwelyd](https://en.wikipedia.org/wiki/Rollback_(data_management)) yn rhoi'r system yn ôl i'w chyflwr cynharach. Clwt brys a roddir y tu allan i rythm rhyddhau arferol yw [clwt brys](https://en.wikipedia.org/wiki/Hotfix). Mae atgyweiriad ymlaen yn cludo newid newydd ar ben yr un toredig. [Ailwaith](https://en.wikipedia.org/wiki/Rework) yw'r ymdrech anghynlluniedig a dreulir yn ail-wneud neu atgyweirio rhywbeth a oedd i fod wedi'i orffen. Mewn lleoliad [cyflawni parhaus](https://en.wikipedia.org/wiki/Continuous_delivery), lle mae newidiadau bach yn llifo i gynhyrchu'n aml, y mesurau hyn yw'r brif dystiolaeth a yw cyflymder yn costio sefydlogrwydd.

Mae'r ddwy draddodiad yn edrych ar yr un digwyddiad yn wahanol. Mae'r olwg ITIL wedi'i threfnu o amgylch y cofnod newid: a awdurdodwyd y newid, a lwyddodd, ac a gofnodwyd y canlyniad? Gall newid sy'n llwyddo ar bapur achosi digwyddiad awr yn ddiweddarach o hyd. Mae'r olwg ystwyth wedi'i threfnu o amgylch yr eitem waith a'r defnydd: a ddaliodd diffiniad y tîm o orffen, ac a achosodd y newid waith anghynlluniedig yn fuan wedyn? Nid yw'r naill olwg na'r llall yn gyflawn ar ei phen ei hun. Mae'r ymchwil y tu ôl i raglen DORA yn trin cyfradd methiant newid a chyfradd ailwaith defnyddio fel y ddau fesur "ansefydlogrwydd" wrth ymyl y mesurau trwybwn (gweler pwnc 2.8, Metrigau DORA, sy'n eu diffinio ar lefel y rhaglen). Mae'r pwnc hwn yn mynd yn ddyfnach ar y mecaneg: sut i ddiffinio methiant, sut i atodi digwyddiadau i newidiadau, sut y cyfrifir gwaith brys, a sut y chwaraeir y rhifau.

Mae rhybudd yn berthnasol o'r dechrau. Mae'r mesurau hyn yn disgrifio tîm, gwasanaeth, neu biblinell. Nid ydynt byth yn disgrifio person. Mae cyfradd methiant newid sydd ynghlwm wrth beiriannydd unigol yn dysgu pobl i osgoi gwaith peryglus a gwerthfawr, i hollti newidiadau nes bod y cyfrifon yn edrych yn dda, ac i roi'r gorau i adrodd problemau (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Mae [cyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn brathu'n galed yma, oherwydd bod "llai o fethiannau" yn hawdd i'w gyflawni drwy gofnodi llai o fethiannau.

Mae amseriad digwyddiadau yn perthyn i bwnc 3.3, Amser ymateb a datrys digwyddiadau, y digwyddiadau gwaethaf i bwnc 3.4, Metrigau digwyddiadau mawr, llif cymeradwyo a chyfran newid safonol i bwnc 4.3, Metrigau galluogi newid, gwraidd achosion i bwnc 4.1, Metrigau rheoli problemau, a'r adolygiad ysgrifenedig i bwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu.

## Egwyddorion allweddol

- **Mae angen un diffiniad ysgrifenedig o fethiant.** Mae timau sy'n penderfynu fesul achos yn cynhyrchu rhifau na ellir eu tueddu na'u cymharu, ac mae'r ddadl am y diffiniad yn disodli'r ddadl am y gwaith.
- **Rhaid gallu olrhain methiant i'w newid.** Heb gyswllt wedi'i gofnodi rhwng digwyddiad, dychweliad, neu glwt brys a'r newid a'i hachosodd, dyfaliad yw'r gyfradd methu.
- **Cyfrwch bob llwybr adferiad.** Mae dychwelyd, clwt brys, atgyweiriad ymlaen, a datrysiad dros dro â llaw yn bedwar llwybr i'r un digwyddiad. Mae metrig sy'n cyfrif un ohonynt yn gwobrwyo timau am ddewis un arall.
- **Darllenwch fethiant wrth ymyl cyflymder ac adferiad.** Gellir gwella cyfradd methiant newid ar ei phen ei hun drwy newid yn llai aml, sy'n anaml y nod. Parwch hi ag amser arweiniol, amlder defnyddio, ac amser adfer.
- **Mae samplau bach angen cyfrifon, nid dim ond canrannau.** Mae gan dîm ag wyth newid mewn mis ac un methiant gyfradd methu o 12.5 y cant sy'n dweud bron ddim, felly dangoswch y cyfrifon a defnyddiwch ffenestr hirach (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).
- **Signal yw brys, nid pechod.** Mae cyfran sefydlog, wedi'i hesbonio o newidiadau brys yn normal. Fel arfer mae cyfran gynyddol yn pwyntio at broblemau ansawdd, cynllunio, neu ganfod i fyny'r afon.

## Diffiniadau metrigau

Mae mesurau methiant ac ailwaith yn dibynnu ar uno'r cofnod newid, y log defnyddio, a'r offeryn digwyddiadau. Mae pob diffiniad isod yn nodi'r hyn a gyfrifir, yr hyn a eithrir, a ble mae'r cloc yn dechrau ac yn stopio. Dylai timau gopïo'r diffiniadau i'w cofrestr metrigau a'u haddasu gyda rheswm a nodwyd.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd methiant newid | Cyfran y newidiadau i gynhyrchu sy'n achosi gwasanaeth wedi'i ddiraddio neu sydd angen adferiad | newidiadau a oedd angen dychweliad, clwt brys, atgyweiriad ymlaen, neu ddigwyddiad cysylltiedig o fewn y ffenestr fethiant / pob newid i gynhyrchu a gwblhawyd yn y cyfnod; mae'r ffenestr yn dechrau wrth gwblhau'r newid ac yn stopio ar ôl nifer sefydlog o ddiwrnodau (er enghraifft 7), wedi'i hysgrifennu yn y gofrestr metrigau; adroddir newidiadau sy'n dal y tu mewn i'r ffenestr ar wahân a'u heithrio o'r gyfradd nes bod y ffenestr yn cau | canran | Cofnodion newid neu log defnyddio wedi'u huno â'r offeryn digwyddiadau a'r rhestr clytiau brys | Galluogi newid; rheoli digwyddiadau | Diffiniad o orffen; diffygion a ddihangodd | Misol, ar ffenestr dreigl o 90 diwrnod |
| Cyfran newid brys | Cyfran y newidiadau a wnaed drwy'r llwybr brys | newidiadau a gofnodwyd fel brys / pob newid a gwblhawyd yn y cyfnod; mae brys yn golygu bod yr asesiad arferol wedi'i osgoi neu ei fyrhau ar frys, ac eithrir newidiadau safonol wedi'u rhagawdurdodi o'r ddau gyfrif | canran | Maes math y cofnod newid | Galluogi newid | Gwaith anghynlluniedig a dosbarth gwasanaeth cyflymu | Misol |
| Cyfradd dychwelyd | Cyfran y newidiadau a wrthdröwyd i fersiwn blaenorol | newidiadau a wrthdröwyd ar ôl cyrraedd cynhyrchu / pob newid i gynhyrchu yn y cyfnod; cyfrifir dychweliad a wnaed cyn i'r newid gyrraedd unrhyw ddefnyddwyr (er enghraifft canari a stopiwyd ar ei gam cyntaf) ar wahân | canran | Log defnyddio ac offeryn rhyddhau | Rheoli rhyddhau; rheoli defnyddio | Arferion piblinell a rhyddhau | Misol |
| Cyfradd clytiau brys | Cyfran y newidiadau sy'n glytiau brys a roddir y tu allan i'r llif rhyddhau arferol | newidiadau a dagiwyd neu a changhennwyd fel clwt brys / pob newid i gynhyrchu yn y cyfnod; mae'r enwadur yn cynnwys y clytiau brys eu hunain | canran | Canghennau neu dagiau rheoli fersiynau a'r log defnyddio | Galluogi newid; rheoli digwyddiadau | Gwaith anghynlluniedig; cyflymu | Misol |
| Cyfradd ailwaith defnyddio | Cyfran y defnyddiadau a oedd yn atgyweiriadau anghynlluniedig ar gyfer problem mewn defnydd cynharach | defnyddiadau i gynhyrchu sy'n trwsio diffyg neu fethiant mewn defnydd cynharach diweddar, o fewn yr un ffenestr fethiant / pob defnydd cynhyrchu yn y cyfnod; eithrir gwaith dilynol wedi'i gynllunio o'r map ffordd | canran | Log defnyddio gyda dolen neu dag "yn trwsio", a'r traciwr gwaith | Galluogi newid; gwelliant parhaus | Ailwaith; diffygion a ddihangodd; galw methiant | Misol |
| Cyfradd cysylltu newid â digwyddiad | Cyfran y digwyddiadau a ddatryswyd sy'n cofnodi a achosodd newid hwy, a pha un | digwyddiadau â maes "achoswyd gan newid" wedi'i gwblhau (ie neu na, ynghyd â dynodydd y newid pan fo'n ie) / digwyddiadau a ddatryswyd yn y cyfnod; mae'r cloc yn stopio pan gaeir y digwyddiad | canran | Offeryn digwyddiadau a chofnodion newid | Rheoli digwyddiadau; galluogi newid | Adolygiad ôl-ddigwyddiad; diffiniad o orffen | Misol |
| Cytundeb diffiniad methiant | Cytundeb rhwng dau adolygydd ynghylch a fethodd sampl o newidiadau | newidiadau a samplwyd lle mae dau adolygydd annibynnol yn cyrraedd yr un dyfarniad methiant gan ddefnyddio'r diffiniad ysgrifenedig / newidiadau a samplwyd; sampl o o leiaf 20 newid a dynnir ar hap bob chwarter | canran | Dalen adolygu sampl a gedwir gyda'r gofrestr metrigau | Gwelliant parhaus; mesur ac adrodd | Ôl-sylliad | Chwarterol |

Dau nodyn ar y tabl. Mae'r gyfradd methu a'r gyfradd ailwaith yn gorgyffwrdd ond yn wahanol: mae methiant a wrthdröwyd heb ddefnydd newydd yn cyfrif yn y gyfradd methu ac nid yn y gyfradd ailwaith. Ac mae'r uned yn newid neu'n ddefnydd, nid yn ddigwyddiad, oherwydd gall un newid achosi tri digwyddiad a gall un digwyddiad ddod o dri newid.

## Argymhellion

### Ysgrifennwch y diffiniad o fethiant cyn casglu unrhyw ddata

**Cytunwch beth mae "wedi methu" yn ei olygu a'i roi yn y gofrestr metrigau.** Diffiniad ymarferol yw bod newid wedi methu os, o fewn ffenestr a nodwyd ar ôl ei gwblhau, y'i dychwelwyd, os oedd angen clwt brys neu atgyweiriad ymlaen, neu os y'i cysylltwyd â digwyddiad o ddifrifoldeb a nodwyd neu uwch. Nodwch y ffenestr (mae 7 diwrnod yn gyffredin, ac mae'r gwerth cywir yn dibynnu ar ba mor gyflym y mae eich gwasanaethau'n dangos problemau), y trothwy difrifoldeb digwyddiad, a phwy sy'n penderfynu mewn achos dadleuol. Ysgrifennwch o leiaf bum enghraifft weithio, gan gynnwys rhai lletchwith megis newid a ddiraddiodd berfformiad heb unrhyw doriad. Ailedrychwch ar y diffiniad yn flynyddol a logiwch newidiadau gyda'u rhesymau, fel y gellir ailddatgan llinell duedd os yw'r rheol yn symud.

### Cysylltwch fethiannau â newidiadau yn y cofnod digwyddiad

**Ychwanegwch faes gofynnol at y cofnod digwyddiad: achoswyd gan newid, ie neu na, a dynodydd y newid pan fo'n ie.** Dylid cwblhau'r maes yn ystod datrys a'i wirio yn yr adolygiad ôl-ddigwyddiad (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu). Olrheiniwch y gyfradd cysylltu fel ei metrig ei hun. Os mai dim ond hanner y digwyddiadau sy'n cario'r maes, mae'r gyfradd methu yn tanddatgan y gwir o swm anhysbys, a dylech ddweud hynny wrth ymyl y rhif. Awtomeiddiwch y dyfaliad cyntaf lle gallwch, er enghraifft drwy restru newidiadau a gwblhawyd ar y gwasanaeth yr effeithiwyd arno yn yr oriau cyn i'r digwyddiad ddechrau, a gadewch i berson ei gadarnhau.

### Cyfrwch bob llwybr adferiad, nid dim ond un

**Diffiniwch un methiant o sawl signal.** Tynnwch ddychweliadau o'r offeryn defnyddio, clytiau brys o reoli fersiynau neu'r log rhyddhau, atgyweiriadau ymlaen o'r ddolen "yn trwsio", a digwyddiadau o'r offeryn digwyddiadau, yna dad-ddyblygwch yn ôl newid. Bydd tîm sy'n cyfrif dychweliadau yn unig yn gweld methiannau'n diflannu'r diwrnod y mae'n newid i drwsio ymlaen. Cadwch bob llwybr fel dadansoddiad ar wahân hefyd, oherwydd bod y cymysgedd yn dweud stori: mae llawer o glytiau brys ac ychydig o ddychweliadau yn awgrymu bod dychwelyd yn anodd, sy'n werth ei drwsio ynddo'i hun.

### Trinwch gyfran newid brys fel cwestiwn, nid sgôr

**Adolygwch newidiadau brys fel grŵp, nid fel targed.** Bob chwarter, darllenwch bob un a threfnwch y rhesymau: adfer gwasanaeth, cau gwendid, cais busnes hwyr, cam cynllunio a fethwyd, neu lwybr cymeradwyo a oedd yn rhy araf ar gyfer gwaith cyffredin. Mae'r ddau olaf yn broblemau system y dylid eu trwsio drwy wella'r llwybr safonol, fel nad oes angen i bobl ei osgoi (gweler pwnc 4.3, Metrigau galluogi newid). Mae cyfran o sero yn amheus, oherwydd bod gwir argyfyngau yn digwydd. Mae cyfran sy'n codi'n gyson yn haeddu cofnod problem (gweler pwnc 4.1, Metrigau rheoli problemau).

### Mesurwch ailwaith fel galw methiant

**Olrheiniwch ailwaith fel y gwaith a grëwyd gan fethiant cynharach.** Daw'r syniad o alw methiant o ddylunio gwasanaethau: galw sy'n bodoli oherwydd na wnaethpwyd rhywbeth yn iawn y tro cyntaf. Mewn termau cyflawni, cyfrwch y defnyddiadau a'r eitemau gwaith y mae eu hunig bwrpas yn cywiro newid diweddar. Mae hyn yn cysylltu'n uniongyrchol â'r rhaniad cynlluniedig ac anghynlluniedig (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio). Defnyddiwch gyfran y capasiti a dreulir ar ailwaith fel dechreuwr sgwrs gyda'r perchennog cynnyrch, oherwydd ei fod yn troi cyfradd haniaethol yn gyfaddawd ynghylch beth i weithio arno nesaf.

### Adroddwch gyfraddau gyda chyfrifon, dosbarthiadau, a ffenestr

**Dangoswch gyfrifon wrth ymyl canrannau, a defnyddiwch ffenestr dreigl.** Mae cyfradd methu fisol ar gyfer tîm sy'n defnyddio ddeg gwaith yn swnllyd. Defnyddiwch ffenestr dreigl o 90 diwrnod, dangoswch nifer y newidiadau a'r methiannau y tu ôl i'r gyfradd, a rhowch arwydd bras o ansicrwydd (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Ar gyfer adferiad, dangoswch y canolrif a'r 85fed canradd o'r amser o fethiant i adfer yn hytrach na chymedr. Pan fo gan wasanaeth ychydig iawn o newidiadau, adroddwch y stori gyda rhestr o'r methiannau gwirioneddol yn lle cyfradd.

### Parwch fethiant â chyflymder fel na all gwelliant guddio yn yr un

**Dangoswch gyfradd methiant newid bob amser wrth ymyl amser arweiniol ac amlder defnyddio.** Os yw'r gyfradd methu yn disgyn tra bo amlder defnyddio hefyd yn disgyn yn sydyn ac amser arweiniol yn tyfu, efallai bod y tîm yn swpio newidiadau, sy'n codi risg pob un. Os yw cyflymder yn codi a'r gyfradd methu yn dal yn gyson, mae'r system yn gwella ar newid. Y paru yw'r prif amddiffyniad yn erbyn chwarae'r system ac yn erbyn y gred gyfforddus bod llai o ddefnyddiadau yn golygu rhai mwy diogel (gweler pwnc 2.8, Metrigau DORA).

### Defnyddiwch y rhifau i wella'r newid ei hun

**Trowch ddata methiant yn arbrofion peirianneg.** Edrychwch ar nodweddion cyffredin newidiadau a fethodd: maint, amser o'r dydd, math, nifer y bobl dan sylw, a gyffyrddwyd â chydrannau a rennir, ac a oedd cwmpas prawf yn denau. Yna rhowch gynnig ar un arbrawf bach, gwrthdroadwy megis sypiau llai, [profi atchweliad](https://en.wikipedia.org/wiki/Regression_testing) awtomataidd ar gyfer maes peryglus, [rhyddhad canari](https://en.wikipedia.org/wiki/Canary_release) ar gyfer y newid peryglus nesaf, neu doglen nodwedd sy'n gwahanu defnyddio oddi wrth ryddhau. Ail-fesurwch ar ôl ffenestr lawn. Y nod yw newid gwell, a metrig gwell yn unig yw tystiolaeth.

### Adolygwch y metrigau gyda'i gilydd mewn fforwm di-fai

**Cynhaliwch adolygiad misol o newidiadau a fethodd gyda'r bobl a'u gwnaeth.** Mae gan yr agenda dair eitem: y cyfrifon a'r duedd, dau neu dri newid a fethodd a ddewiswyd i'w hastudio, ac un cam gwella gyda pherchennog. Defnyddiwch arfer adolygu di-fai, fel bod pobl yn disgrifio'r hyn a wyddent ar y pryd. Cyhoeddwch nodiadau'r adolygiad gyda'r metrigau. Os yw pobl yn oedi cyn adrodd methiannau oherwydd sut mae'r rhifau'n cael eu defnyddio, trwsiwch hynny cyn newid unrhyw beth arall (gweler pwnc 11.3, Cyflwyno metrigau heb fagu ofn).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfradd methiant newid | Culhau'r ffenestr fethiant; peidio â chysylltu digwyddiadau â newidiadau; dosbarthu newid gwael fel "cais gwasanaeth" neu "gynnal a chadw"; trwsio ymlaen a'i alw'n newid newydd; bwndelu llawer o olygiadau i un newid fel bod un methiant yn eu cwmpasu i gyd | Cyfradd cysylltu newid â digwyddiad; archwiliad sampl chwarterol yn erbyn y rhestr digwyddiadau; cytundeb diffiniad methiant; amser arweiniol ac amlder defnyddio wrth ei hymyl |
| Cyfran newid brys | Llwybro gwaith brys drwy'r llwybr safonol gyda sgôr risg ffug; llwybro gwaith cyffredin fel brys i osgoi cymeradwyo; hollti argyfwng yn sawl newid arferol | Darllen pob newid brys bob chwarter; rhesymau wedi'u trefnu a'u hadolygu; cyfran newid safonol ac amser arweiniol cymeradwyo (gweler pwnc 4.3, Metrigau galluogi newid) |
| Cyfradd dychwelyd | Trwsio ymlaen i osgoi cofnodi dychweliad; cadw fersiwn toredig yn fyw; dal newidiadau yn ôl o gynhyrchu fel nad oes dim i'w wrthdroi | Cyfradd clytiau brys a chyfradd ailwaith wrth ei hymyl; dosbarthiad amser adfer; sampl o ddigwyddiadau yn erbyn y log defnyddio |
| Cyfradd clytiau brys | Peidio â thagio clytiau brys; eu gwthio drwy'r gangen arferol; galw clwt brys yn "welliant bach" | Cyfradd ailwaith defnyddio; archwiliad canghennau a thagiau; cyfran gwaith anghynlluniedig (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio) |
| Cyfradd ailwaith defnyddio | Peidio â chysylltu atgyweiriadau â'r defnydd gwreiddiol; labelu atgyweiriad fel "wedi'i gynllunio"; bwndelu'r atgyweiriad gyda nodweddion newydd | Dolen "yn trwsio" gofynnol ar ddefnyddiadau cywirol; adolygiad sampl o ddefnyddiadau a labelwyd yn gynlluniedig; cyfradd methiant newid wrth ei hymyl |
| Cyfradd cysylltu newid â digwyddiad | Cwblhau'r maes gyda "na" heb wirio; gadael i'r maes ragosod i "na"; cau digwyddiadau mewn swmp i godi'r ganran | Gwiriad sampl o atebion "na" yn yr adolygiad ôl-ddigwyddiad; dim gwerth rhagosodedig; sylwadau adolygwyr ar sampl |
| Cytundeb diffiniad methiant | Dewis enghreifftiau hawdd ar gyfer y sampl; adolygwyr sef y bobl sy'n cael eu mesur; llacio'r diffiniad fel bod pawb yn cytuno | Sampl ar hap a dynnir gan rywun y tu allan i'r tîm; cynnwys achosion ar y ffin yn fwriadol; cyhoeddi anghytundebau a thrwsio'r diffiniad |

Mae darlleniad iach yn edrych fel hyn: mae'r gyfradd methu yn eistedd mewn amrediad y mae'r tîm yn ei ddeall ac yn ei esbonio, mae'r gyfradd cysylltu yn ddigon uchel y gellir ymddiried yn y gyfradd methu, mae newidiadau brys yn brin ac wedi'u hesbonio, ac mae dychweliadau a chlytiau brys yn fyr ac wedi'u hymarfer. Adroddir methiannau'n gyflym a'u trafod heb fai. Mae cyfradd methu anarferol o isel gyda chyfradd cysylltu isel, amlder defnyddio sy'n disgyn, a meintiau swp sy'n tyfu yn rhybudd, nid llwyddiant. Trinwch unrhyw welliant sydyn fel anogwr i wirio'r offeryn yn gyntaf (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Diffiniad caeth, awtomataidd o fethiant | Cyson, rhad i'w ailadrodd, hawdd ei dueddu | Colli diraddio cynnil; gall gyfrif dychweliadau diniwed fel methiannau |
| Adolygiad ar sail barn o bob newid | Cipio cyd-destun a difrifoldeb | Araf, goddrychol, agored i bwysau a drifft |
| Ffenestr fethiant hir (wythnosau) | Dal methiannau gohiriedig | Cymylu achos ac effaith; ni ellir adrodd newidiadau diweddar eto |
| Cyfrif pob llwybr adferiad | Anodd ei chwarae drwy newid llwybr | Angen sawl ffynhonnell ddata wedi'u huno'n ofalus |

Defnyddiwch ddiffiniad awtomataidd fel y sylfaen, ychwanegwch adolygiad dynol wedi'i samplu, a gwellwch y cyswllt rhwng newidiadau a digwyddiadau cyn adeiladu unrhyw beth arall.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth yn union sy'n cyfrif fel newid a fethodd yma, ac a allai dau ohonom anghytuno am yr un newid?**
Cymerwch bum newid diweddar a gofynnwch i bob person bleidleisio ar a fethodd. Cymharwch y pleidleisiau a'r rhesymau. Mae'r anghytundebau yn dangos ble mae'r diffiniad ysgrifenedig yn denau. Cytunwch ar reol ar gyfer yr achosion lletchwith, megis gostyngiad perfformiad heb doriad, ac ysgrifennwch hi i lawr gydag enghraifft.

**2. Sut ydym ni'n gwybod pa ddigwyddiadau a achoswyd gan newid?**
Gofynnwch sut y cofnodir y cyswllt heddiw, a phwy sy'n ei lenwi. Adolygwch ddeg digwyddiad diweddar a gweld faint sydd â newid ynghlwm, a faint ddylai fod. Trafodwch a yw'r maes yn ddewisol, a yw'n rhagosod i "na," a phwy sy'n ei wirio. Dylai'r hwylusydd anelu at welliant pendant i'r cofnod, megis maes gofynnol heb ragosodiad.

**3. Pa lwybrau adferiad ydym ni'n eu defnyddio, ac a yw pob un yn cael ei gyfrif?**
Rhestrwch ddychwelyd, clwt brys, atgyweiriad ymlaen, datrysiad dros dro â llaw, a diffodd toglen nodwedd. Ar gyfer pob un, gofynnwch ble y cofnodir y digwyddiad ac a yw'n bwydo'r gyfradd methu. Sylwch ar y llwybrau nad ydynt yn gadael unrhyw ôl. Mae'r drafodaeth yn aml yn datgelu mai llwybr dewisol y tîm yw'r un na all y metrig ei weld.

**4. Pryd oedd ein newid brys diwethaf, ac a ellid fod wedi'i osgoi?**
Cerddwch drwy'r tri neu bedwar diwethaf. Gofynnwch beth wnaeth bob un yn frys, beth oedd yn hysbys yn gynharach, a sut y byddai llwybr safonol gwell wedi edrych. Gwahanwch argyfyngau go iawn oddi wrth ddarganfyddiadau hwyr a chymeradwyaethau araf. Cytunwch ar un atgyweiriad i'r llwybr cyffredin a fyddai'n dileu rheswm sy'n ailadrodd dros argyfwng.

**5. Faint o'n wythnos sy'n mynd ar drwsio newidiadau diweddar?**
Amcangyfrifwch gyfran y capasiti a dreuliwyd ar ailwaith dros y pedair wythnos diwethaf, gan ddefnyddio'r traciwr yn hytrach na chof. Cymharwch yr amcangyfrif â'r traciwr. Siaradwch am yr hyn y mae'r rhif yn ei gostio mewn gwaith cynlluniedig a sut y byddai'r perchennog cynnyrch yn ei ddefnyddio. Dewiswch un patrwm methiant ac un arbrawf i'w leihau.

**6. Pe bai ein cyfradd methu yn haneru'r chwarter nesaf, a fyddem yn ei gredu?**
Dychmygwch y pennawd a gofynnwch beth arall fyddai'n rhaid bod yn wir: cyfradd cysylltu sefydlog, amlder defnyddio cyson, adfer cyflym, a dim categorïau newydd o "gynnal a chadw." Trafodwch pa rai o'r gwiriadau hyn y mae'r tîm eisoes yn eu gwneud a pha rai sydd ar goll. Cytunwch sut yr ymchwilir i welliant sydyn cyn ei ddathlu.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn berchen ar y newidiadau, felly maent yn berchen ar y diffiniad o fethiant a'r atgyweiriadau. Dechreuwch o'r gwaith: edrychwch ar newidiadau a fethodd yn yr adolygiad, dewch o hyd i'r nodweddion cyffredin, a rhowch gynnig ar sypiau llai, profion gwell, neu doglenni. Olrheiniwch ailwaith fel rhan o'r bwrdd, fel bod atgyweiriadau anghynlluniedig yn weladwy wrth ymyl gwaith cynlluniedig. Cadwch y rhifau ar gyfer dysgu'r tîm ei hun, a gwrthsefwch rannu data ar lefel unigol. Os dangosir metrig i arweinwyr, dylai'r tîm allu esbonio pob newid ynddo.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn gweld canlyniadau newid yn y ciw digwyddiadau ac maent yn y sefyllfa orau i gynnal y cyswllt rhwng digwyddiadau a newidiadau. Gallant ychwanegu'r maes gofynnol, ei wirio yn y cam datrys, a bwydo'r canlyniadau yn ôl i'r tîm cyflawni heb fai. Mae gweithrediadau hefyd yn berchen ar y llwybr brys a dylent adolygu ei ddefnydd. Rhannwch wybodaeth am lwybrau adfer ac ymarferwch ddychweliadau gyda thimau cyflawni, gan mai'r ffordd orau o dorri cost methiant yw arfer a rennir o wneud newid yn wrthdroadwy (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau).

### Arweinyddiaeth a llywodraethu

Dylai arweinwyr ofyn am dueddiadau yn ôl gwasanaeth, y ddau fath o fesur ansefydlogrwydd gyda'i gilydd â chyflymder, a'r arbrofion gwella y tu ôl iddynt. Osgowch dargedau sefydlog megis "cyfradd methu o dan 5 y cant," sy'n gwahodd ailddiffinio, ac osgowch ddefnyddio'r ffigurau mewn adolygiadau unigol. Gall cyrff llywodraethu ddefnyddio'r data fel tystiolaeth a yw llwybr cymeradwyo ysgafnach yn ddiogel, drwy wirio bod methiant ac adferiad wedi aros yn gyson wrth i reolaethau gael eu llacio. Mae tuedd gynyddol mewn newidiadau brys yn signal i edrych ar gynllunio a dylunio cymeradwyo, nid i feio'r peirianwyr ar alwad.

### Cwsmeriaid a defnyddwyr

Nid yw cwsmeriaid yn poeni am y gyfradd methu. Maent yn poeni a yw'r gwasanaeth yn torri ar ôl diweddariad a pha mor gyflym y mae'n dod yn ôl. Mae data methiant yn cefnogi cyfathrebu gonest: rhybudd ymlaen llaw o newidiadau peryglus, negeseuon statws clir pan fo newid yn achosi trafferth, ac ymrwymiad gweladwy i ddysgu. Lle mae defnyddwyr yn dibynnu ar wasanaeth ar gyfer tasgau hanfodol, cytunwch ar ffenestri cynnal a chadw a disgwyliadau dychwelyd gyda hwy ymlaen llaw (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG darparwr gofal iechyd rhanbarthol yn rhedeg gwasanaeth amserlennu cleifion. Mae tîm cynnyrch o saith yn rhyddhau newidiadau sawl gwaith yr wythnos, ac mae tîm gweithrediadau o bump yn trin digwyddiadau a'r broses newid. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Dros chwarter, mae'r adroddiad misol yn dangos cyfradd methiant newid o 4 y cant, i lawr o 11 y cant y chwarter blaenorol. Mae'r prif swyddog gwybodaeth yn falch. Nid yw arweinydd y platfform wedi'i argyhoeddi, oherwydd bod y tîm ar alwad yn dweud nad yw eu nosweithiau wedi gwella. Mae hi'n gofyn i'r tîm redeg yr archwiliad sampl o'r gofrestr metrigau.

Mae'r archwiliad yn cymryd 30 o newidiadau ar hap ac mae dau adolygydd yn cymhwyso'r diffiniad ysgrifenedig. Maent yn cytuno ar 24 o'r 30 dyfarniad, felly mae cytundeb diffiniad methiant yn 80 y cant (enghreifftiol). Yna maent yn cymharu'r sampl â'r rhestr digwyddiadau. O'r 22 digwyddiad a ddatryswyd yn y chwarter, dim ond 9 sy'n cario'r maes "achoswyd gan newid", sef cyfradd cysylltu o 41 y cant. Wrth ddarllen y 13 arall â llaw, mae'r adolygwyr yn canfod 5 a ddechreuodd o fewn diwrnod i newid. Mae'r cyfrif cywir yn codi'r gyfradd methu i tua 9 y cant, ac mae'r archwiliad yn canfod pam yr oedd y rhif yn edrych yn dda: arfer newydd o ddefnyddio atgyweiriadau o dan y label "cynnal a chadw," a eithriwyd gan yr adroddiad o'r enwadur a'r rhifiadur fel ei gilydd.

Y label yw'r risg chwarae'r system, ac ni chynlluniodd neb ef. Dywedwyd wrth y tîm bod methiannau'n bryder, ac roedd "cynnal a chadw" yn osgoi sgwrs. Mae'r tîm yn gwneud tri phenderfyniad. Mae'r maes "achoswyd gan newid" yn dod yn ofynnol heb ragosodiad, ac mae'r adolygiad ôl-ddigwyddiad yn ei wirio. Ymddeolir y label "cynnal a chadw," a rhaid i ddefnyddiadau cywirol gario dolen i'r newid y maent yn ei drwsio, sy'n bwydo'r gyfradd ailwaith. Ailysgrifennir y diffiniad o fethiant gyda chwe enghraifft weithio, gan gynnwys atchweliad ymholiad araf na achosodd doriad erioed.

Mae'r chwarter nesaf yn dangos cyfradd methu wedi'i hailddatgan o 8 y cant a chyfradd cysylltu o 90 y cant (enghreifftiol). Mae adroddiad yr arweinyddiaeth bellach yn dangos cyfrifon, y gyfradd cysylltu, a'r gyfradd ailwaith wrth ymyl amser arweiniol, ac mae'r prif swyddog gwybodaeth yn rhoi'r gorau i ddyfynnu un ganran.

## Y golwg fesul sector

**Busnes newydd.** Mae newidiadau yn fach ac yn aml, ac mae'r tîm yn aml yn gwybod pob methiant ar ei gof. Cadwch y diffiniad i un paragraff, tagiwch ddychweliadau a chlytiau brys yn yr offeryn defnyddio, ac adolygwch fethiannau yn yr ôl-sylliad wythnosol. Mae cyfradd methu ar 20 newid yn swnllyd, felly defnyddiwch restr o fethiannau fel y brif dystiolaeth. Y risg yw anffurfioldeb: heb ddiffiniad ysgrifenedig, mae'r gyfradd yn symud gyda phwy bynnag sy'n cyfrif.

**Busnes bach.** Mae'r un bobl yn defnyddio, gweithredu a chefnogi, felly mae ailwaith yn cystadlu'n uniongyrchol â gwaith cynlluniedig. Cofnodwch fethiannau yn ba bynnag offeryn yr ydych eisoes yn ei ddefnyddio, ychwanegwch faes gofynnol at y cofnod digwyddiad, ac adolygwch newidiadau brys bob chwarter. Osgowch gymeradwyo trwm dim ond i wella'r rhifau. Mae rhestr wirio dychwelyd a rennir yn werth mwy na bwrdd newid.

**Menter fawr.** Mae llawer o dimau, cyflenwyr ac offer yn golygu llawer o ddiffiniadau. Safonwch y diffiniad methiant a'r maes cysylltu ar draws timau, cyhoeddwch ef yn y catalog metrigau, a chyfrifwch gyfraddau fesul gwasanaeth cyn crynhoi. Defnyddiwch archwiliadau sampl i ddod o hyd i wahaniaeth, a thrinwch gofnodion newid pob cyflenwr fel ffynhonnell arall â'i hansawdd ei hun (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth). Gofalwch nad yw crynhoi byth yn troi'n dablau cynghrair o dimau.

**Llywodraeth a'r sector cyhoeddus.** Mae cofnodion newid yn gwasanaethu archwilio ac atebolrwydd, a gall dychweliadau gael eu cyfyngu gan statud, caffael, neu lwyfannau a rennir. Cadwch y cofnod ffurfiol ac ychwanegwch y cyswllt methiant fel rhan ohono. Eglurwch y rhifau yn ofalus i gyrff goruchwylio, gyda chyfrifon a chyd-destun, oherwydd gall un methiant mewn gwasanaeth hanfodol ddenu sylw anghymesur. Defnyddiwch y data i gyfiawnhau llwybrau ysgafnach ar gyfer newid risg isel, gyda thystiolaeth bod methiant ac adferiad wedi aros yn gyson.

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw cost newid a fethodd: gwaith digwyddiadau, ailwaith, eitemau map ffordd wedi'u gohirio, a cholli ymddiriedaeth defnyddwyr. Ni all llawer o sefydliadau ddweud faint o'u hymdrech sy'n mynd ar atgyweirio newidiadau diweddar, ac mae mesur ailwaith yn rhoi'r ateb gonest cyntaf. Mae budd anuniongyrchol hefyd. Gall timau sy'n gallu dangos bod newid yn ddiogel amddiffyn cymeradwyo ysgafnach, sy'n byrhau amser arweiniol. Mae ymchwil DORA yn adrodd cysylltiad rhwng cymeradwyo allanol trwm a pherfformiad cyflawni gwannach (gweler pwnc 4.3, Metrigau galluogi newid), a data methiant yw sut mae tîm yn profi'r honiad hwnnw yn erbyn ei hanes ei hun.

Mae'r gost i gasglu yn gymedrol os yw'r sylfaen yn bodoli: maes gofynnol yn y cofnod digwyddiad, defnyddiadau cywirol wedi'u tagio, uniad o dair ffynhonnell ddata, ac adolygiad misol. Y gost fwy yw sylw, oherwydd bod rhaid i rywun fod yn berchen ar y diffiniad, rhedeg yr archwiliadau, a gweithredu ar ganfyddiadau. Osgowch brynu offeryn cyn bod y diffiniad a'r cyswllt yn gweithio â llaw.

Mae'r elw'n ymddangos fel llai o fethiannau dro ar ôl tro, adferiad byrrach, llai o waith anghynlluniedig, a sgyrsiau gwell gyda llywodraethu. Peidiwch â addo canran. Yn lle hynny, amcangyfrifwch eich llinell sylfaen eich hun: cyfrwch yr oriau a dreuliwyd ar ailwaith ac ymateb i ddigwyddiadau sy'n gysylltiedig â newid dros chwarter, prisiwch hwy gan ddefnyddio eich cyfradd fewnol arferol, a chymharwch ar ôl y gwelliannau. Datganwch y rhagdybiaethau, ac adroddwch y canlyniad fel amrediad yn hytrach nag un ffigur. Cymharwch ef â chost y rhaglen a chost un methiant difrifol mewn gwasanaeth hanfodol.

## Gwrthbatrymau a maglau

- **Gosod targed ar gyfer y gyfradd methu.** Mae'n gwahodd ailddiffinio a methiannau cudd. Gosodwch darged ar gyfer dysgu yn lle hynny, megis cwblhau pob adolygiad a chau pob cam cywirol, a gwyliwch y gyfradd am dueddiadau.
- **Graddio timau neu bobl yn ôl methiant.** Mae'n dinistrio adrodd ac yn cosbi'r timau sy'n cymryd gwaith peryglus, gwerthfawr. Cymharwch dîm â'i orffennol ei hun a thrafodwch gyd-destun.
- **Cyfrif digwyddiadau yn unig fel methiannau.** Mae methiannau a ddaliwyd yn gynnar ac a ddychwelwyd yn diflannu. Cynhwyswch bob llwybr adferiad, a defnyddiwch ddigwyddiadau fel un signal ymhlith sawl un.
- **Trin newidiadau brys fel rhai drwg.** Mae'r pwysau yn arwain at argyfyngau cuddiedig. Adolygwch hwy am resymau a thrwsiwch y llwybr cyffredin.
- **Gadael i'r cyswllt digwyddiad ragosod i "na."** Mae'r rhagosodiad yn cynhyrchu rhif gwenieithus ac anghywir. Gwnewch y maes yn ofynnol a gwiriwch sampl.
- **Adrodd cyfradd heb gyfrifon.** Mae samplau bach yn newid yn wyllt. Dangoswch gyfrifon a ffenestr dreigl.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniad o fethiant | Penderfynir fesul achos gan bwy bynnag a ofynnir | Mae rhai timau yn ysgrifennu diffiniad; mae timau'n wahanol | Un diffiniad ysgrifenedig gydag enghreifftiau gweithio a ffenestr a nodwyd | Diffiniad wedi'i brofi gan archwiliadau sampl a chytundeb wedi'i fesur | Diffiniad wedi'i ddiwygio gyda chyflenwyr a chwsmeriaid pan fydd yn peidio â hysbysu penderfyniadau |
| Cysylltu newidiadau a digwyddiadau | Cyswllt a gofir gan bobl os o gwbl | Maes dewisol a ddefnyddir gan rai timau | Maes gofynnol heb ragosodiad, wedi'i wirio yn yr adolygiad ôl-ddigwyddiad | Cyfradd cysylltu wedi'i thueddu a'i hadolygu, gyda bylchau'n cael eu gweithredu arnynt | Cysylltiadau wedi'u rhannu ar draws timau a chyflenwyr drwy ryngwynebau y cytunwyd arnynt |
| Adferiad a thrin gwaith brys | Dychweliadau a chlytiau brys wedi'u trin ad hoc a heb eu cofnodi | Dychweliadau a chlytiau brys wedi'u tagio gan rai timau | Pob llwybr adferiad wedi'i gofnodi; prawf brys wedi'i ysgrifennu | Newidiadau brys wedi'u hadolygu bob chwarter; dychweliadau wedi'u hymarfer | Llwybrau adfer wedi'u dylunio i wasanaethau a'u profi ar y cyd ar draws timau |
| Defnydd mewn gwelliant | Rhifau wedi'u dyfynnu mewn adroddiadau heb ddilyniant | Methiannau wedi'u trafod ar ôl digwyddiadau mawr | Adolygiad di-fai misol o newidiadau a fethodd gyda chamau | Methiant ac ailwaith wedi'u paru â chyflymder; arbrofion wedi'u cynllunio a'u hariannu | Gwelliant yn arferol ac wedi'i rannu ar draws timau, gyda dysgu wedi'i gyhoeddi |

## Rhestr wirio

- [ ] Mae diffiniad ysgrifenedig o fethiant newid yn bodoli, gyda ffenestr a nodwyd ac o leiaf bum enghraifft weithio.
- [ ] Enwir yr uned gyfrif (newid, defnydd, neu ryddhad) yn y gofrestr metrigau.
- [ ] Mae gan y cofnod digwyddiad faes gofynnol "achoswyd gan newid" heb werth rhagosodedig.
- [ ] Tagir dychweliadau, clytiau brys, ac atgyweiriadau ymlaen yn yr offer defnyddio neu reoli fersiynau.
- [ ] Mae defnyddiadau cywirol yn cario dolen i'r newid y maent yn ei drwsio.
- [ ] Mae gan newid brys brawf ysgrifenedig byr, ac adolygir pob newid brys o fewn nifer penodol o ddiwrnodau.
- [ ] Dangosir cyfraddau gyda chyfrifon a ffenestr dreigl, byth fel canran noeth.
- [ ] Dangosir cyfradd methiant newid bob amser wrth ymyl amser arweiniol, amlder defnyddio, ac amser adfer.
- [ ] Mae archwiliad sampl chwarterol yn gwirio'r dyfarniadau methiant a'r cyswllt digwyddiad.
- [ ] Mae adolygiad di-fai misol o newidiadau a fethodd yn rhedeg, gyda pherchennog ar gyfer pob cam.
- [ ] Ni ddefnyddir unrhyw fetrig yn y pwnc hwn i raddio nac adolygu unigolion.

## Anogwyr AI

**Drafftiwch ddiffiniad ysgrifenedig o fethiant newid.**

```text
Rydym yn gweithredu [math o wasanaeth neu gynnyrch] gyda [maint tîm] o bobl ac
yn rhyddhau [amlder, er enghraifft sawl gwaith yr wythnos]. Ein hoffer yw
[offeryn newid, offeryn defnyddio, offeryn digwyddiadau]. Drafftiwch ddiffiniad
un dudalen o "newid a fethodd" sy'n nodi'r uned (newid, defnydd, neu ryddhad), y
ffenestr fethiant, y llwybrau adferiad sy'n cyfrif (dychwelyd, clwt brys,
atgyweiriad ymlaen, digwyddiad cysylltiedig), a'r eithriadau. Cynhwyswch [nifer]
o enghreifftiau gweithio, gan gynnwys achosion ar y ffin. Peidiwch â dyfeisio
gwerthoedd meincnod na throthwyon; gofynnwch i mi am unrhyw rai y mae eu hangen
arnoch. Rhestrwch eich rhagdybiaethau.
```

**Dyluniwch y cyswllt newid â digwyddiad.**

```text
Dyma dempled ein cofnod digwyddiad: [meysydd]. Dyma dempled ein cofnod newid:
[meysydd]. Awgrymwch sut i gofnodi pa newid a achosodd pa ddigwyddiad, gan
gynnwys maes gofynnol, gwerthoedd a ganiateir, pwy sy'n ei gwblhau, a sut y
dylai adolygiad ei wirio. Cynigiwch ffordd o awgrymu newidiadau ymgeisiol yn
awtomatig o [data sydd ar gael, er enghraifft amseroedd defnyddio ac enwau
gwasanaethau]. Peidiwch â dyfalu sut mae ein hoffer wedi'u ffurfweddu.
Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb.
```

**Dadansoddwch restr o newidiadau a fethodd am batrymau.**

```text
Isod mae [nifer] o newidiadau a fethodd o [cyfnod], gyda'r meysydd hyn: [rhestr
meysydd, er enghraifft maint, math, diwrnod ac amser, gwasanaeth, llwybr
adferiad, amser i adfer]. Dewch o hyd i batrymau a ffactorau cyfrannol
posibl, ac awgrymwch hyd at [nifer] o arbrofion bach, gwrthdroadwy i leihau
methiannau. Cadwch y dadansoddiad ar lefel timau a gwasanaethau, a pheidiwch â
graddio unigolion. Peidiwch â dyfeisio ystadegau na gwerthoedd meincnod.
Nodwch pa mor hyderus yw pob patrwm o ystyried maint y sampl, a rhestrwch eich
rhagdybiaethau.
```

**Gwiriwch ddangosfwrdd methiant am risgiau chwarae'r system.**

```text
Mae ein dangosfwrdd yn dangos [rhestr o fetrigau, er enghraifft cyfradd
methiant newid, cyfran brys, cyfradd dychwelyd, cyfradd clytiau brys, cyfradd
ailwaith] gyda'r diffiniadau hyn: [diffiniadau]. Ar gyfer pob metrig, rhestrwch
ffyrdd credadwy y gallai'r rhif wella heb i'r gwasanaeth wella, a rheilen
warchod ar gyfer pob un. Awgrymwch ddau wiriad archwilio y gallai tîm o [maint
tîm] eu rhedeg bob chwarter. Peidiwch â dyfeisio gwerthoedd meincnod na
honiadau cydymffurfio. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i ba bwnc sy'n diffinio metrig cysylltiedig, megis amser arweiniol neu hyd digwyddiad, a'r rheilen warchod i'w gosod wrth ymyl y gyfradd methu.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod metrig methiant newydd neu wedi'i olygu yn datgan ei gloc, ei ffynhonnell, a'i ffordd o chwarae'r system.

## Pwyntiau allweddol

- Dim ond cystal â'i ddiffiniad yw cyfradd methiant newid, felly ysgrifennwch un gyda ffenestr, enghreifftiau gweithio, ac uned a enwir.
- Cysylltwch bob methiant â'i newid drwy faes gofynnol yn y cofnod digwyddiad, a mesurwch y gyfradd cysylltu.
- Cyfrwch ddychweliadau, clytiau brys, atgyweiriadau ymlaen, a digwyddiadau cysylltiedig gyda'i gilydd, fel na all timau osgoi'r metrig drwy newid llwybr.
- Darllenwch gyfran newid brys ac ailwaith fel signalau am gynllunio a'r llwybr cyffredin, nid fel sgoriau.
- Dangoswch fethiant bob amser wrth ymyl cyflymder ac adferiad, gyda chyfrifon a ffenestr dreigl, a pheidiwch byth â graddio pobl.

## Cyfeiriadau a darllen pellach

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
7. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
8. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
9. Wikipedia, [Hotfix](https://en.wikipedia.org/wiki/Hotfix).
10. Wikipedia, [Rework](https://en.wikipedia.org/wiki/Rework).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
14. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
