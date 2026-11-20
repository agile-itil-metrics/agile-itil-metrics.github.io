# Gwaith ar y gweill a chiwio

**Tîm sy'n hollol brysur yw tîm y mae ei waith yn aros, felly mesurwch faint o waith sydd ar y gweill, pa mor hir y mae'n ciwio, a pha mor agos y mae'r tîm yn rhedeg at gapasiti, a defnyddiwch rifyddeg ciwiau i osod terfynau cyn i'r oediadau gyrraedd.**

## Crynodeb a chymhelliant

Mae gan bob tîm gwasanaeth giw, p'un a yw'n defnyddio'r gair ai peidio. Mae digwyddiadau'n aros am brysbennu, ceisiadau'n aros am gymeradwyaeth, newidiadau'n aros am slot adolygu, ac eitemau ôl-groniad yn aros i rywun eu tynnu. Treulir y rhan fwyaf o'r amser a aeth heibio yn y systemau hyn yn aros, nid yn gweithio. Mae'r mesurau yn y pwnc hwn yn esbonio pam mae'r aros yn tyfu, sut i'w weld yn gynnar, a beth all tîm ei wneud yn ei gylch.

Y maint canolog yw [gwaith ar y gweill](https://en.wikipedia.org/wiki/Work_in_process) (WIP), nifer yr eitemau a ddechreuwyd ac na orffennwyd eto. Mae timau ystwyth sy'n rheoli llif yn gwneud WIP yn weladwy ar fwrdd ac yn ei gapio gyda therfyn WIP. Mae gweithrediadau gwasanaeth o dan ITIL yn cyfrif digwyddiadau, ceisiadau a newidiadau agored, ac yn galw'r casgliad yn giw neu'n ôl-groniad o gofnodion. Mae'r ddau olwg yn disgrifio'r un peth: eitemau y tu mewn i system nad yw wedi'u cyflwyno eto. Mae'r pwnc hwn yn defnyddio "gwaith ar y gweill" ar gyfer y ddau, ac yn nodi'r ffin bob tro (pa statysau sy'n cyfrif fel "ar y gweill" a pha rai sydd ddim), oherwydd bod y ffin honno'n penderfynu pob rhif sy'n dilyn.

Daw'r fathemateg o [ddamcaniaeth ciwio](https://en.wikipedia.org/wiki/Queueing_theory), astudiaeth llinellau aros. Ei chanlyniad mwyaf defnyddiol i dîm gwasanaeth yw [cyfraith Little](https://en.wikipedia.org/wiki/Little%27s_law), a brofwyd gan John Little ym 1961. Ar gyfer system sefydlog, mae nifer cyfartalog yr eitemau yn y system yn hafal i'r gyfradd cyrraedd gyfartalog wedi'i lluosi â'r amser cyfartalog y mae eitem yn ei dreulio yn y system. Yn nhermau cyflawni, mae WIP cyfartalog yn hafal i drwybwn cyfartalog wedi'i luosi ag amser cylch cyfartalog. Mae'r gyfraith yn dal ni waeth beth fo'r drefn y gwasanaethir eitemau ynddi, sy'n ei gwneud yn wiriad call rhad ar unrhyw set o fetrigau llif (gweler pwnc 2.1, Mesurau llif, a phwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif).

Mae'r ail ganlyniad yn llai cyfforddus. Wrth i adnodd a rennir nesáu at ddefnydd llawn, mae amser aros yn codi'n gyflymach ac yn gyflymach. Mae brasamcan cysylltiedig, [fformiwla Kingman](https://en.wikipedia.org/wiki/Kingman%27s_formula), yn dangos bod oedi ciw yn tyfu gyda defnyddio yn gymesur â'r gymhareb defnyddio i'r ffracsiwn segur sy'n weddill, ac yn tyfu hefyd gydag amrywioldeb cyrraedd ac amseroedd gwasanaeth. Mae gwaith cymorth a gweithrediadau'n amrywiol o ran natur, gan fod digwyddiadau'n cyrraedd mewn byrstiau a bod yr ymdrech fesul eitem yn wahanol iawn. Mae tîm sy'n cynllunio i fod yn 100 y cant prysur felly wedi cynllunio ar gyfer aros hir, ac mae'r digwyddiad mawr cyntaf yn troi aros hir yn ôl-groniad sy'n cymryd wythnosau i'w glirio.

Termau a ddefnyddir yn y pwnc hwn:

- **Cyfradd cyrraedd** yw nifer yr eitemau sy'n mynd i mewn i'r system fesul uned o amser.
- **Trwybwn** (neu gyfradd gadael) yw nifer yr eitemau sy'n gadael y system wedi gorffen, fesul uned o amser.
- **Amser cylch** yw'r amser a aeth heibio o'r funud y mae eitem yn mynd i mewn i ffin y system i'r funud y mae'n ei gadael. Mae'r pwnc hwn yn defnyddio'r un cloc ag ym mhwnc 2.2.
- **Amser ciw** yw'r rhan o'r amser a aeth heibio pan fo eitem yn aros ac nid oes neb yn gweithio arni.
- **Defnyddio** yw'r ffracsiwn o'r capasiti sydd ar gael sydd yn cael ei ddefnyddio. Ar gyfer tîm, mynegir capasiti mewn oriau gwaith neu mewn cyfrif eitemau y gellir eu trin yn gyfochrog. Priodwedd tîm neu gronfa adnoddau yw defnyddio, byth unigolyn.
- **Terfyn WIP** yw uchafswm nifer yr eitemau y cytunwyd arno mewn cam neu yn y system gyfan. Ni ddechreuir eitem newydd pan gyrhaeddir y terfyn.
- **Tagfa** yw'r cam â'r capasiti lleiaf o'i gymharu â'r galw. Mae'n gosod cyflymder y gadwyn gyfan, pwynt a ddatblygir gan [ddamcaniaeth cyfyngiadau](https://en.wikipedia.org/wiki/Theory_of_constraints) a'i syniad o'r [dagfa](https://en.wikipedia.org/wiki/Bottleneck_(production)).

Mae'r golygon ystwyth ac ITIL yn cwrdd yma: mae ITIL 4 (2019) yn trin rheoli capasiti a pherfformiad, rheoli digwyddiadau a rheoli ceisiadau gwasanaeth fel arferion sy'n dibynnu ar gydweddu capasiti â galw, ac mae dulliau ystwyth yn mynegi'r un syniad â chyfyngu gwaith ar y gweill a gorffen cyn dechrau. Mae [datblygu meddalwedd main](https://en.wikipedia.org/wiki/Lean_software_development) yn trin gwaith heb ei orffen fel stoc â chost cario a risg.

## Egwyddorion allweddol

- **Aros sy'n dominyddu amser a aeth heibio.** Yn y rhan fwyaf o systemau gwasanaeth a chyflawni, mae eitemau'n aros yn llawer hirach nag y mae neb yn gweithio arnynt, felly mae lleihau aros yn lifer mwy na gweithio'n gyflymach.
- **Mae cyfraith Little yn cysylltu'r tri rhif llif.** Ni ellir gosod WIP cyfartalog, trwybwn ac amser cylch yn annibynnol. Os ydych eisiau amser cylch byrrach ar yr un trwybwn, rhaid i chi ostwng WIP.
- **Mae oedi'n tyfu'n serth ger defnyddio llawn.** Slac yw pris ymatebolrwydd. Ni all tîm heb gapasiti sbâr amsugno byrst nac eitem frys heb wneud popeth arall yn hwyr.
- **Mae amrywioldeb yn mwyhau ciwiau.** Mae cyrraedd anwastad a meintiau eitemau anwastad yn hirhau ciwiau hyd yn oed pan fo'r llwyth cyfartalog yn edrych yn dderbyniol. Lleihewch amrywioldeb lle gallwch a'i glustogi lle na allwch.
- **Cyfyngwch WIP i orffen gwaith, nid i edrych yn brysur.** Sbardun ar gyfer sgwrs am waith wedi'i rwystro a chapasiti yw terfyn WIP, nid rheol cydymffurfio.
- **Mesurwch ar lefel y system.** Mae WIP, hyd ciw a defnyddio yn disgrifio timau a gwasanaethau, byth y bobl ynddynt.
- **Adroddwch ddosbarthiadau, nid cyfartaleddau.** Mae amseroedd ciw yn gynffon hir, felly dangoswch y canolrif a chanradd uchel megis yr 85fed neu'r 95fed (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

## Diffiniadau metrigau

Mae saith mesur yn ymdrin â'r pwnc. Diffinnir pob un ar gyfer ffin a enwir y mae'r tîm yn ei hysgrifennu yn ei gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Gwaith ar y gweill | Nifer yr eitemau a ddechreuwyd ac na orffennwyd y tu mewn i'r ffin y cytunwyd arni | Cyfrif eitemau mewn statysau "ar y gweill" ar adeg y ciplun; eithrir eitemau yn yr ôl-groniad neu'r ciw "parod" cyn y statws gwaith cyntaf ac eitemau sydd eisoes wedi'u gwneud | eitemau | Hanes statws olrheinydd materion neu offeryn ITSM | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth | Cyfrif WIP ar y bwrdd | Ciplun dyddiol, wedi'i adolygu'n wythnosol |
| Hyd ciw | Nifer yr eitemau sy'n aros i waith ddechrau neu'n aros rhwng camau | Cyfrif eitemau mewn statysau aros (er enghraifft "newydd," "aros am brysbennu," "aros am adolygiad") ar adeg y ciplun; adroddir eitemau wedi'u rhwystro ar wahân, nid eu hychwanegu | eitemau | Hanes statws tracker neu ITSM | Rheoli digwyddiadau; galluogi newid | Colofn parod a cholofnau ciw ar fwrdd | Ciplun dyddiol, wedi'i adolygu'n wythnosol |
| Amser ciw | Yr amser a aeth heibio y mae eitem yn ei dreulio yn aros cyn i waith ddechrau, fesul cam | Mae'r cloc yn dechrau pan fo'r eitem yn mynd i statws aros ac yn stopio pan fo'n mynd i'r statws gweithredol nesaf; eithrir amser mewn statws wedi'i farcio "wedi'i rwystro ar gwsmer" a'i adrodd fel ei ffigur ei hun; adroddwch y canolrif a'r 85fed canradd | oriau neu ddiwrnodau | Stampiau amser trawsnewid statws yn y tracker neu'r offeryn ITSM | Desg gwasanaeth; rheoli digwyddiadau; galluogi newid | Amser aros mewn ffrwd werth; amser mewn colofnau ciw | Wythnosol |
| Cyfradd cyrraedd a gadael | Eitemau'n mynd i mewn ac yn gadael y system fesul cyfnod, a'u gwahaniaeth fel twf ciw net | Cyrraedd = eitemau sy'n mynd i mewn i'r ffin yn y cyfnod; gadael = eitemau sy'n cwblhau yn y cyfnod; twf net = cyrraedd llai gadael; mae eitemau a ailagorwyd yn cyfrif fel cyrraedd dim ond os yw'r tîm yn eu diffinio felly | eitemau yr wythnos | Stampiau amser creu a datrys tracker neu ITSM | Monitro a rheoli hysbysiadau; rheoli digwyddiadau | Trwybwn a diagram llif cronnus | Wythnosol |
| Cymhareb llwyth tîm | Cyfran capasiti'r tîm y byddai gwaith wedi'i gynllunio a disgwyliedig yn ei defnyddio | Oriau o alw disgwyliedig yn y cyfnod (cyrraedd wedi'i luosi â'r ymdrech gyfartalog fesul eitem) / oriau o gapasiti sydd ar gael ar ôl gwyliau ac ymrwymiadau sefydlog; mae'r tîm yn nodi sut mae'n amcangyfrif ymdrech; ni adroddir unigolion byth | canran | Cynllun capasiti, hanes ymdrech tracker, rota | Rheoli capasiti a pherfformiad; rheoli gweithlu a thalent | Capasiti tîm mewn gwaith wedi'i gynllunio | Misol, ac ym mhob digwyddiad cynllunio |
| Cyfradd torri terfyn WIP | Cyfran y diwrnodau pan fo cam neu'r system yn mynd dros ei derfyn WIP y cytunwyd arno | Diwrnodau gyda WIP uwchlaw'r terfyn / diwrnodau gwaith yn y cyfnod; adroddir diwrnodau pan gofnododd y tîm eithriad bwriadol gyda rheswm ar wahân | canran o ddiwrnodau | Cipluniau WIP dyddiol a'r log eithriadau | Gwelliant parhaus; rheoli digwyddiadau | Cytundeb gweithio terfyn WIP | Wythnosol |
| Cymhareb cysondeb cyfraith Little | Gwiriad bod y tri rhif llif yn cytuno â'i gilydd | WIP cyfartalog dros y cyfnod / (gadael y diwrnod wedi'i luosi ag amser cylch cymedrig mewn diwrnodau) ar gyfer yr un ffin a chyfnod; mae cymhareb ger 1 yn golygu bod y diffiniadau'n gyson, mae cymhareb ymhell o 1 yn golygu bod ffin neu gloc yn anghyson | cymhareb | Yr un data tracker â'r metrigau llif eraill | Mesur ac adrodd | Gwiriad call metrig llif mewn ôl-sylliad | Misol |

## Argymhellion

### Diffiniwch y ffin yn gyntaf

**1. Ysgrifennwch ffin y system cyn i chi gyfrif unrhyw beth.** Nodwch pa statws sy'n dechrau "ar y gweill" a pha un sy'n ei ddiweddu, a pha eitemau a eithrir (er enghraifft cynnal a chadw wedi'i drefnu, neu eitemau sy'n aros am gwsmer). Bydd dau dîm sy'n cyfrif WIP yn wahanol yn cynhyrchu rhifau na ellir eu cymharu, a bydd ffin sy'n symud yn dawel yn torri gwiriad cyfraith Little. Cofnodwch y ffin yn y gofrestr metrigau a'i newid yn unig gyda rheswm wedi'i logio.

**2. Gwahanwch aros oddi wrth weithio yn y model statws.** Os yw un statws yn ymdrin â "mewn ciw ar gyfer adolygu" ac "yn cael ei adolygu," mae amser ciw yn anweledig. Rhowch eu henwau eu hunain i gyflyrau aros, fel y disgrifir ym mhwnc 1.5, Ffynonellau data ac offeryniaeth, fel bod y stampiau amser trawsnewid yn datgelu'r oedi. Mae cost un statws ychwanegol yn fach o'i chymharu â gwerth gweld ble mae eitemau'n eistedd.

### Defnyddiwch gyfraith Little fel gwiriad cysondeb

**3. Rhedwch wiriad cyfraith Little bob mis.** Cyfrifwch WIP cyfartalog, trwybwn ac amser cylch cymedrig ar gyfer yr un cyfnod a ffin, a gweld a ydynt yn cytuno'n fras. Mae anghydweddiad mawr fel arfer yn golygu bod eitemau'n mynd i mewn i'r system neu'n ei gadael heb gael eu cyfrif, neu fod hen eitemau wedi'u parcio mewn statws heb oruchwyliaeth. Trwsiwch y data cyn i chi ddehongli unrhyw duedd. Theorem am systemau sefydlog yw'r gyfraith, felly cymhwyswch hi i gyfnodau pan na thyfodd na chrebachodd y ciw yn ddramatig.

### Gwyliwch ddefnyddio a thwf ciw

**4. Cynlluniwch ar gyfer slac lle mae amrywioldeb yn uchel.** Ar gyfer trin digwyddiadau, gwaith ar alwad, ac unrhyw giw a fwydir gan alw ar hap, cynlluniwch islaw capasiti llawn fel nad yw byrst yn dod yn ôl-groniad. Mae timau'n aml yn canfod bod cymhareb llwyth sy'n edrych yn gyfforddus ar bapur eisoes yn rhy uchel unwaith y cyfrifir tarfu (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio). Cytunwch ar yr ystod darged gyda'r bobl sy'n gwneud y gwaith a'i hadolygu ar ôl unrhyw ddigwyddiad mawr.

**5. Olrheiniwch dwf ciw net yn ogystal â maint y ciw.** Mae ciw o 40 eitem sy'n crebachu yn iach, ac nid yw ciw o 15 sy'n tyfu 5 eitem yr wythnos. Cymharwch gyrraedd a gadael bob wythnos, a siartiwch y duedd gyda [diagram llif cronnus](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), lle mae band sy'n ehangu ar gyfer cam yn arwydd o WIP cynyddol yno. Pan fo cyrraedd yn fwy na gadael am sawl wythnos, mae'r ciw yn tyfu heb derfyn ac mae penderfyniad yn ddyledus: ychwanegu capasiti, lleihau galw, neu newid yr hyn a dderbynnir.

**6. Darllenwch amser ciw yn ôl cam i ddod o hyd i'r dagfa.** Torrwch yr amser a aeth heibio yn gyfnodau aros fesul cam. Y cam â'r amser ciw hiraf a'r mwyaf o eitemau'n aros yw ymgeisydd tagfa. Ni fydd gwella unrhyw gam arall yn byrhau'r system gyfan, felly cyfeiriwch ymdrech gwella at y cyfyngiad, ac ail-wiriwch wedyn oherwydd bod y cyfyngiad yn symud.

### Cyfyngwch WIP mewn ffordd sy'n gweithio

**7. Gosodwch y terfyn WIP cyntaf o arsylwi, yna addaswch.** Dechreuwch ger y WIP cyfartalog presennol, neu ychydig o'i dan, ac arsylwch beth sy'n digwydd i amser cylch ac i eitemau wedi'u rhwystro. Gostyngwch y terfyn gam wrth gam tra gall y tîm gadw pob person yn gynhyrchiol ar orffen gwaith. Nid oes rhif cywir cyffredinol, ac nid yw ffigur a fenthycwyd gan dîm arall yn cario tystiolaeth ar gyfer eich un chi.

**8. Trinwch dorri terfyn fel anogwr, nid trosedd.** Pan fo WIP yn mynd dros y terfyn, gofynnwch beth sy'n rhwystro cwblhau a phwy all heidio arno. Mae torri a gofnodir gyda rheswm, megis atgyweiriad cynhyrchu brys, yn wybodaeth. Os daw torri yn arferol, mae'r terfyn yn anghywir neu mae'r system wedi'i gorlwytho, a'r ymateb yw sgwrs capasiti yn hytrach na cherydd.

**9. Cymhwyswch derfynau i'r ffrwd werth gyfan, nid un golofn.** Mae terfyn ar "ar y gweill" yn unig yn gadael i waith bentyrru mewn ciwiau adolygu, profi a chymeradwyo. Cyfyngwch nifer yr eitemau yn y system o'r dechrau i'r diwedd, ac ychwanegwch derfynau cam lle mae ciw penodol yn dal i dyfu. Mae camau a rennir megis adolygiad cynghori newid neu amgylchedd prawf yn haeddu eu terfyn gweladwy eu hunain a'u hamser ciw eu hunain.

### Trinwch waith brys ac amrywiol yn fwriadol

**10. Rhowch bolisi i waith cyflymedig.** Hebddo, mae eitemau brys yn tawel ragori ar bob terfyn ac ni all y tîm wahaniaethu llwyth wedi'i gynllunio oddi wrth lwyth heb ei gynllunio. Diffiniwch beth sy'n gymwys, faint o eitemau cyflymedig a gaiff fod ar y gweill, a pha waith sy'n oedi. Cyfrifwch eitemau cyflymedig a'u heffaith ar amser ciw, fel bod cost brys yn weladwy i'r rhai sy'n gofyn amdano (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Gwaith ar y gweill | Symud eitemau i statws "wedi'i barcio" neu "ar ddal" i aros dan y terfyn; hollti eitemau i edrych yn llai; dechrau gwaith oddi ar y bwrdd | Cyfrif eitemau mewn statysau wedi'u parcio a'u hoedran; samplo'r bwrdd yn erbyn y gwaith go iawn; adrodd yr eitem hynaf ar y gweill |
| Hyd ciw | Cau ac ailagor eitemau; gwrthod eitemau newydd wrth y drws; ailenwi statysau aros fel eu bod yn syrthio y tu allan i'r cyfrif | Cyfradd ailagor a chyfradd gwrthod wrth ymyl hyd ciw; adolygu diffiniadau statws ym mhob adolygiad metrigau |
| Amser ciw | Dechrau'r cloc yn hwyr drwy greu'r cofnod ar ôl bod y gwaith yn barod; oedi'r cloc drwy statysau wedi'u rhwystro neu aros-am-gwsmer; marcio eitem fel ar y gweill pan fo wedi'i hagor yn unig | Dosbarthiad amser mewn statysau wedi'u rhwystro ac oedi; cyfran yr eitemau a grëwyd ar ôl iddynt gael eu dechrau; aros a adroddir gan geisydd o arolwg byr |
| Cyfradd cyrraedd a gadael | Cau eitemau'n gyflym i godi gadael; hollti un cais yn llawer i godi'r ddau gyfrif; cyfrif dyblygion fel cyrraedd | Mesurau ansawdd ac ailagor ar eitemau caeedig (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau); dosbarthiad maint eitemau; gwiriad canlyniad cwsmer |
| Cymhareb llwyth tîm | Tanamcangyfrif ymdrech i ddangos capasiti sbâr, neu orddatgan galw i gyfiawnhau nifer staff; adrodd cymhareb ar gyfer cyfnod ffafriol | Cymharu ymdrech amcangyfrifedig a gwirioneddol fesul eitem; dangos y gymhareb gyda'i thuedd a chyfran y tarfu; adolygiad cymheiriaid o'r dull amcangyfrif |
| Cyfradd torri terfyn WIP | Codi'r terfyn i atal toriadau; cuddio toriadau drwy symud eitemau oddi ar y bwrdd; rhoi eithriadau'n rhydd | Nifer a rhesymau eithriadau; hanes newidiadau terfyn gyda dyddiadau; canradd amser cylch ochr yn ochr â'r gyfradd torri |
| Cymhareb cysondeb cyfraith Little | Addasu'r ffin neu'r cyfnod nes bod y gymhareb yn nesáu at 1; eithrio eitemau hirhoedlog fel allanolion | Gosod ffin a chyfnod ymlaen llaw; cyhoeddi'r eitemau a eithrir a'u cyfrif; adolygu newidiadau i'r ffin gyda rheswm |

Darlleniad iach yw tîm y mae ei WIP yn sefydlog neu'n disgyn, y mae ei ganraddau amser ciw yn wastad neu'n gwella, y mae ei gyrraedd a'i adael yn fras gytbwys, ac y mae ei doriadau'n dod â rhesymau sy'n arwain at weithredu. Mae cymhareb cyfraith Little yn hofran ger 1 am fod y data'n gyson, nid am fod rhywun wedi'i diwnio.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Terfynau WIP tynn | Amser cylch byrrach, darganfod problemau'n gynharach, mwy o orffen | Gall amser segur ymddangos mewn cam; angen disgyblaeth a rhywfaint o groes-sgilio; gall rwystro rhanddeiliaid sydd eisiau dechrau gwaith |
| Terfynau WIP llac neu ddim | Mae pawb yn edrych yn brysur a derbynnir ceisiadau'n gyflym | Ciwiau hir, cyflawni araf, rhwystrau cudd, newid cyd-destun trwm |
| Capasiti slac wedi'i gynllunio | Amsugno byrstiau a gwaith brys; cadw amseroedd ymateb yn fyr | Yn edrych fel gwastraff ar adroddiad defnyddio; angen i'r arweinyddiaeth dderbyn effeithlonrwydd ymddangosiadol is |
| Defnyddio uchel wedi'i gynllunio | Yn ymddangos yn effeithlon ac yn rhad yr awr | Mae aros yn tyfu'n serth wrth i lwyth nesáu at gapasiti; bregus o dan unrhyw amharu |
| Defnyddio cyfraith Little ar gyfer cynllunio | Syml, cyffredinol a chyflym i'w gymhwyso | Dilys dim ond ar gyfer systemau sefydlog ac ar gyfer cyfartaleddau; dweud dim am un eitem |

Cyfyngwch WIP a chadwch slac lle mae amrywioldeb a chost oedi yn uchel, a derbyniwch derfynau llacach lle mae gwaith yn gyson ac yn annibynnol.

Yn y model gwerslyfr symlaf o un gweinydd gyda chyrraedd ac amseroedd gwasanaeth ar hap (ciw M/M/1), yr amser cyfartalog yn y system yw'r amser gwasanaeth wedi'i rannu ag un llai'r defnyddio: 2 waith ar 50 y cant, 5 gwaith ar 80 y cant, 10 gwaith ar 90 y cant, ac 20 gwaith ar 95 y cant. Nid gweinyddion unigol yw timau go iawn, felly trinwch y ffigurau hyn fel siâp y gromlin, nid rhagolwg.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth sy'n cyfrif fel "ar y gweill" i ni, ac a ydym i gyd yn ei gyfrif yn yr un ffordd?**
Gofynnwch i bob person enwi'r statws cyntaf a'r olaf sy'n gwneud eitem yn rhan o WIP, yna cymharwch atebion. Chwiliwch am statysau megis "ar ddal" neu "aros am gwsmer" y mae rhai pobl yn eu cyfrif ac eraill ddim. Cytunwch ar un ffin a'i hysgrifennu. Dylai'r hwylusydd nodi sut y byddai'r atebion yn newid y rhif WIP, oherwydd bod hynny'n dangos pa mor sensitif yw'r metrig i ddiffiniad.

**2. Ble mae ein heitemau'n aros hiraf, a phwy sy'n berchen ar y ciw hwnnw?**
Tynnwch y llif o gyrraedd i wedi'i wneud a marciwch y pwyntiau aros. Gan ddefnyddio mis diweddar o ddata, amcangyfrifwch y canolrif a'r aros 85fed canradd ym mhob pwynt. Trafodwch pa giw nad oes neb yn berchen arno, megis cam cymeradwyo neu amgylchedd prawf a rennir. Cytunwch ar un ciw i'w archwilio'n fanwl a pherson i ddod â'r data y tro nesaf.

**3. Pa mor brysur sy'n rhy brysur ar gyfer y math o waith yr ydym yn ei wneud?**
Cymharwch y llwyth wedi'i gynllunio â'r gyfran o amser a dreulir mewn gwirionedd ar darfu ac eitemau brys. Gofynnwch beth ddigwyddodd i'r ciw y tro diwethaf y cododd y galw. Trafodwch y syniad na all tîm heb gapasiti sbâr ymateb yn gyflym. Dylai'r hwylusydd lywio tuag at ystod darged ar gyfer y gymhareb llwyth, nid un rhif, a chynllun ar gyfer beth sy'n digwydd pan eir dros yr ystod.

**4. A yw ein ciw yn tyfu, yn crebachu neu'n gyson, a sut ydym ni'n gwybod?**
Edrychwch ar gyrraedd a gadael am yr wyth wythnos ddiwethaf. Mae siart syml yn ddigon. Gofynnwch a fyddai unrhyw un wedi sylwi ar gynnydd araf cyn iddo ddod yn broblem, a pha signal fyddai'n sbarduno gweithredu. Cytunwch beth ddylai tîm ei wneud pan fo gadael yn llusgo y tu ôl i gyrraedd am dair wythnos yn olynol.

**5. Beth fyddai'n digwydd pe baem yn gostwng ein terfyn WIP o un?**
Gofynnwch i bobl ragfynegi pa eitemau fyddai'n aros, pa rai fyddai'n gorffen yn gynt, a beth fyddent yn ei wneud pan na allant ddechrau rhywbeth newydd. Codwch ofnau megis cael eu gweld yn segur.

**6. A yw ein rhifau yn cytuno â'i gilydd?**
Cymerwch fis o ddata a chyfrifwch WIP cyfartalog, trwybwn ac amser cylch cymedrig. Gwiriwch a yw WIP yn fras yn drwybwn wedi'i luosi ag amser cylch. Os na, chwiliwch am yr achos, megis eitemau wedi'u gorffen ond heb eu cau, neu eitemau wedi'u cau heb gael eu dechrau. Dylai'r hwylusydd drin anghydweddiad fel rhodd: mae'n pwyntio at broblem data neu ddiffiniad a fyddai fel arall yn ystumio pob metrig llif arall.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n teimlo effeithiau WIP gormodol fel newid cyd-destun, adborth hwyr, a gwaith heb ei orffen sy'n pydru. Maent yn elwa fwyaf o derfynau WIP gweladwy, eitemau bach, ac arferiad o orffen cyn dechrau. Dylai tîm edrych ar ei amseroedd ciw ei hun rhwng camau, megis aros am adolygiad, oherwydd bod yr oediadau hyn fel arfer yn fwy na'r amser a dreulir yn codio (gweler pwnc 2.7, Metrigau ceisiadau tynnu ac adolygu cod).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau'n wynebu galw ar hap, felly mae effeithiau ciwio'n gryf. Mae desg gwasanaeth, rota ar alwad a bwrdd adolygu newid i gyd yn ymddwyn fel ciw gyda chyrraedd amrywiol. Mae'r timau hyn angen slac penodol, rheolau blaenoriaeth clir, a pholisi ar gyfer gwaith cyflymedig fel nad yw eitemau brys yn dadleoli popeth arall yn dawel (gweler pwnc 3.1, Metrigau desg gwasanaeth, a phwnc 5.7, Metrigau llafur diwerth ac ar alwad). Mesurwch amser ciw ym mhob trosglwyddiad, a gwyliwch am waith sy'n bownsio rhwng grwpiau (gweler pwnc 9.3, Metrigau cydweithio a throsglwyddo).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn dylanwadu ar giwiau drwy'r galw y maent yn ei dderbyn a'r defnyddio y maent yn ei wobrwyo. Dylent ofyn am ganraddau amser ciw a thwf ciw net yn ogystal â defnyddio, a disgwyl bod gwasanaeth iach yn rhedeg islaw capasiti llawn. Mae cais i ychwanegu mwy o brosiectau at dîm sydd eisoes ar ei derfyn yn benderfyniad i hirhau amser cylch pawb, a dylai llywodraethu wneud y cyfaddawd hwnnw'n eglur. Ariennwch gapasiti ar gyfer y cyfyngiad yn lle ymgyrchoedd effeithlonrwydd cyffredinol (gweler pwnc 5.4, Metrigau capasiti a pherfformiad).

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn profi ciwio fel aros am ymateb, ac anaml y maent yn poeni pa mor brysur yw'r tîm. Maent angen disgwyliadau gonest yn seiliedig ar ddosbarthiad aros y gorffennol, ffordd o weld statws eu cais, a llwybr dwysáu ar gyfer anghenion brys. Gall cyfyngu WIP olygu derbyn ceisiadau newydd yn arafach a chwblhau rhai a dderbyniwyd yn gyflymach, a dylid esbonio'r dewis hwnnw iddynt (gweler pwnc 6.2, Cytundebau lefel profiad).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae gan adran TG ysbyty rhanbarthol ddesg gwasanaeth, tîm seilwaith a thîm cymwysiadau. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r tîm cymwysiadau'n trin ceisiadau gwasanaeth a newidiadau bach ar gyfer systemau clinigol. Dros chwarter, mae ei ddangosfwrdd yn dangos canolrif amser cylch a gododd o 6 diwrnod gwaith i 11, tra bod y tîm yn adrodd ei fod "ar ei eithaf." Y gymhareb llwyth y mae'r tîm yn ei chyfrifo ar gyfer y chwarter yw 98 y cant. 85fed canradd amser ciw ar gyfer y cam "aros am gymeradwyaeth glinigol" yw 9 diwrnod gwaith, ac mae WIP cyfartalog ar y bwrdd yn 44 eitem yn erbyn trwybwn o 4 eitem y diwrnod gwaith. Wrth gymhwyso cyfraith Little, mae 44 wedi'i rannu â 4 yn rhoi amser cylch cymedrig ymhlyg o 11 diwrnod gwaith, sy'n cytuno â'r ffigur a fesurwyd, felly mae'r data'n gyson ac mae'r tîm yn ymddiried ynddo.

Mae pennaeth yr adran yn awgrymu cyflogi contractwr yn gyntaf. Mae arweinydd y tîm yn pwyntio at ddadansoddiad y camau: o'r 11 diwrnod, mae'r ciw cyn cymeradwyaeth glinigol a'r ciw cyn defnyddio'n cyfrif am y rhan fwyaf o'r amser a aeth heibio, ac mae gwaith gweithredol yn gyfran fach. Roedd cyrraedd dros y chwarter yn fwy na gadael o tua 2 eitem yr wythnos, felly tyfodd y ciw yn gyson. Mae'r tîm hefyd wedi bod yn derbyn pob cais brys, ac nid oes gan yr eitemau cyflymedig bolisi.

Mae'r tîm yn penderfynu ar bedwar newid, a gofnodir yn y log penderfyniadau. Mae'n gosod terfyn WIP ledled y system o 30 eitem, gyda therfyn cam o 8 ar y ciw cymeradwyo. Mae'n cynllunio ar gyfer cymhareb llwyth o tua 80 y cant fel bod tarfu disgwyliedig yn ffitio. Mae'n ysgrifennu polisi cyflymu sy'n caniatáu dim mwy na dwy eitem frys ar y gweill. Ac mae'n gofyn i'r grŵp cymeradwyo clinigol gynnal slot adolygu dyddiol byr yn hytrach na chyfarfod wythnosol. Ar ôl wyth wythnos, mae'r tîm yn adrodd canolrif amser cylch o 7 diwrnod gwaith, 85fed canradd amser ciw wrth gymeradwyo o 3 diwrnod gwaith, a chyfradd torri o 10 y cant o ddiwrnodau, gyda'r rhesymau wedi'u logio.

Mae'r tîm yn dal risg chwarae'r system yn yr ail fis. Mae'r gyfradd torri yn edrych yn ardderchog, ac eto mae sampl o'r bwrdd yn dangos sawl eitem mewn statws newydd o'r enw "yn yr arfaeth," sy'n eistedd y tu allan i'r cyfrif WIP, ac roedd y rheilen warchod cyfrif statws wedi'i barcio wedi bod yn tueddu i fyny. Mae'r tîm yn tynnu'r statws, yn symud yr eitemau yn ôl i'r cyfrif, ac yn mynnu bod pob statws newydd yn cael ei ychwanegu at y gofrestr gyda diffiniad. Mae'r gyfradd torri yn codi i 18 y cant am rai wythnosau, y mae'r tîm yn ei derbyn fel y ffigur gonest, ac yna'n disgyn wrth i eitemau wedi'u rhwystro gael eu datrys.

## Y golwg fesul sector

**Busnes newydd.** Mae galw'n anwastad a'r demtasiwn yw dechrau popeth. Mae bwrdd syml gyda therfyn WIP gweladwy a gwiriad wythnosol o'r eitem hynaf ar y gweill yn ddigon. Cadwch slac ar gyfer problemau cynhyrchu, gan y gall un toriad ddefnyddio'r tîm cyfan.

**Busnes bach.** Mae un neu ddau o bobl yn aml yn trin cymorth, prosiectau a gweinyddu, a'r blwch derbyn yw'r ciw. Gwahanwch waith wedi'i gynllunio oddi wrth waith adweithiol, gosodwch derfyn dyddiol ar dasgau a ddechreuir, a dywedwch wrth gwsmeriaid am yr aros arferol ar gyfer pob math o gais.

**Menter fawr.** Mae llawer o dimau'n rhannu camau megis cymeradwyo newid, adolygu diogelwch ac amgylcheddau prawf, a'r ciwiau a rennir yn aml yw'r hiraf. Mesurwch amser ciw ar gamau a rennir a'i gyhoeddi, rhowch berchennog i bob cam a rennir, ac osgowch adrodd defnyddio fel targed. Gall offer gyfrif WIP yn wahanol ar draws timau, felly cytunwch ar ffin gyffredin ac eirfa statws gyffredin cyn crynhoi (gweler pwnc 2.4, Metrigau ffrwd werth).

**Llywodraeth a'r sector cyhoeddus.** Mae amserlenni statudol, camau caffael a chymeradwyaethau ffurfiol yn creu ciwiau hir nad yw timau'n eu rheoli. Gwahanwch yr amser y mae tîm yn ei reoli oddi wrth yr amser a dreulir yn aros ar gyrff eraill, ac adroddwch y ddau. Lle gosodir targedau gwasanaeth mewn cyfraith neu reoliad, dogfennwch y rheolau cloc ac unrhyw oediadau, a chadwch y llwybr archwilio (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw cyflawni cyflymach, mwy rhagweladwy heb ychwanegu staff, oherwydd bod aros yn dominyddu amser a aeth heibio ac mae toriad cymedrol mewn WIP neu mewn ciw cymeradwyo hir yn byrhau amser cylch ar gyfer pob eitem sy'n dilyn. Mae slac wedi'i gynllunio hefyd yn gadael i dîm amsugno digwyddiad mawr heb golli wythnosau o waith arall.

Mae'r costau'n gymedrol ac yn bennaf yn bobl: ymdrech i ddiffinio ffiniau a statysau, i adeiladu ciplun WIP dyddiol ac adroddiad amser ciw o ddata offer presennol, ac i gynnal adolygiad wythnosol byr. Mae cyfyngu WIP hefyd yn golygu dweud nid eto wrth rai ceisiadau, sydd angen cytundeb rhanddeiliaid, ac mae capasiti segur yn gost ymddangosiadol y mae angen i arweinwyr ei ddeall fel yswiriant yn erbyn oedi.

Dylid disgrifio'r elw drwy batrymau y gall y sefydliad eu mesur drosto'i hun yn hytrach na thrwy ganrannau a fenthycwyd. Olrheiniwch y canolrif a'r 85fed ganradd o amser cylch cyn ac ar ôl terfynau, nifer yr eitemau a heneiddiodd y tu hwnt i drothwy y cytunwyd arno, y gyfradd torri a'i rhesymau, a chyfran yr amser a dreulir ar waith brys. Mae'r achos busnes ar ei gryfaf pan fydd yn clymu amser ciw wrth rywbeth y mae'r busnes eisoes yn ei deimlo, megis yr aros am fynediad gweithiwr newydd, newid system glinigol neu atgyweiriad cwsmer. Pobl sy'n dominyddu cyfanswm cost perchnogaeth, sef amser y bobl sy'n adolygu ac yn gweithredu ar y rhifau, felly cyfrifwch yr amser hwnnw yn erbyn yr oedi y mae'n ei dynnu. Dylai tîm adeiladu ei linell sylfaen ei hun, gan nad ydym yn dyfynnu gwerthoedd meincnod yma.

## Gwrthbatrymau a maglau

- **Targedu defnyddio 100 y cant.** Mae'n gwarantu aros hir a chyflawni bregus. Cynlluniwch gymhareb llwyth gyda slac a'i hadolygu ar ôl amharu.
- **Cyfyngu'r golofn "ar y gweill" yn unig.** Mae gwaith wedyn yn pentyrru mewn ciwiau y tu allan i'r terfyn. Cyfyngwch y system o'r dechrau i'r diwedd ac ychwanegwch derfynau cam lle mae ciwiau'n tyfu.
- **Trin y terfyn WIP fel rheol i'w gorfodi.** Mae pobl yn cuddio gwaith i gydymffurfio. Defnyddiwch dorri fel anogwr i ofyn beth sydd wedi'i rwystro, a logiwch y rheswm.
- **Parcio eitemau mewn statysau diderfyn.** Mae'r cyfrif yn aros yn isel tra bo gwaith yn aros heb ei weld. Cynhwyswch statysau wedi'u parcio mewn cyfrif gweladwy ac adolygwch eu hoedran.
- **Mesur defnyddio unigolion.** Mae'n gwobrwyo edrych yn brysur ac yn gwahodd graddio. Mesurwch y tîm neu'r gronfa adnoddau, a pheidiwch byth â chyhoeddi ffigur fesul person.
- **Anwybyddu ochr cyrraedd.** Mae timau'n gweithio ar adael tra bo galw'n parhau i dyfu. Olrheiniwch gyrraedd, a phan fo'n fwy na chapasiti, gwnewch benderfyniad penodol am yr hyn i'w dderbyn.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a ffiniau | Mae pob person yn cyfrif WIP mewn ffordd bersonol | Mae rhai timau'n ysgrifennu ffin ar gyfer eu bwrdd | Un ffin ysgrifenedig ac eirfa statws, gyda chyflyrau aros wedi'u gwahanu oddi wrth gyflyrau gweithio | Newidiadau ffin wedi'u logio a gwiriad cyfraith Little wedi'i redeg yn fisol | Ffiniau wedi'u halinio â chyflenwyr a thimau partner, a'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Terfynau WIP a slac | Dim terfynau; pawb yn brysur | Terfynau anffurfiol ar un golofn | Terfynau ledled y system a cham, gyda log torri ac ystod llwyth a nodir | Terfynau wedi'u haddasu o dystiolaeth amser cylch ac amser ciw ar rythm | Terfynau a chapasiti wedi'u cydgysylltu ar draws timau sy'n rhannu camau |
| Gwelededd ciwiau | Aros a welir drwy gwynion yn unig | Hyd ciw wedi'i gyfrif ar rai byrddau | Canraddau amser ciw fesul cam wedi'u dangos i'r tîm sy'n berchen arnynt | Twf ciw net wedi'i dueddu gyda rheiliau gwarchod ac y gweithredir arno mewn gwaith wedi'i ariannu | Amser ciw ar gamau a rennir ac allanol wedi'i adrodd yn agored i gwsmeriaid a chyflenwyr |
| Defnydd mewn penderfyniadau | Ceisiadau capasiti wedi'u dadlau drwy hanesion | Defnyddio wedi'i ddyfynnu i gyfiawnhau nifer staff | Tystiolaeth ciw ac amser cylch wedi'i defnyddio wrth gynllunio | Cyfaddawdau galw a chapasiti wedi'u penderfynu gyda data mewn adolygiadau llywodraethu | Galw wedi'i lunio ar y cyd â chwsmeriaid gan ddefnyddio dosbarthiadau amser aros |

## Rhestr wirio

- [ ] Mae ffin y system ar gyfer WIP wedi'i hysgrifennu, gyda'r statysau cychwyn a gorffen a'r eithriadau.
- [ ] Mae cyflyrau aros a chyflyrau gweithio yn statysau ar wahân yn y llif gwaith.
- [ ] Cipir a chedwir ciplun WIP a chiw dyddiol.
- [ ] Adroddir amser ciw fel canolrif a chanradd uchel, fesul cam.
- [ ] Siartir cyrraedd a gadael yn wythnosol, gyda diagram llif cronnus.
- [ ] Mae terfyn WIP yn bodoli ar gyfer y system ac ar gyfer unrhyw gam â chiw sy'n tyfu.
- [ ] Logir toriadau terfyn gyda rheswm a'u hadolygu'n wythnosol.
- [ ] Mae polisi yn diffinio gwaith cyflymedig ac yn capio'r nifer ar y gweill.
- [ ] Amcangyfrifir cymhareb llwyth y tîm ar lefel tîm, byth fesul person, gyda'r dull wedi'i nodi.
- [ ] Rhedir gwiriad cyfraith Little yn fisol ac ymchwilir i anghydweddiadau.
- [ ] Cyfrifir statysau wedi'u parcio ac wedi'u rhwystro ac adolygir eu hoedran.
- [ ] Logir pob newid i ffin, statws neu derfyn gyda'i ddyddiad a'i reswm.

## Anogwyr AI

**Gwiriwch y ffin a'r statysau y tu ôl i gyfrif WIP.**

```text
Rwyf eisiau diffinio gwaith ar y gweill ar gyfer [tîm neu wasanaeth]. Statysau ein
llif gwaith yw [rhestr o statysau gydag ystyr un llinell i bob un], ac eithrir yr
eitemau hyn: [eithriadau]. Nodwch amwyseddau ynghylch pa statysau sy'n cyfrif fel
ar y gweill, pa rai sy'n aros, a pha rai sydd wedi'u rhwystro. Awgrymwch ffin a
rhestr statysau lanach, a dywedwch beth fyddai'r newid yn ei wneud i'r rhif WIP.
Peidiwch â dyfalu sut mae ein hoffer wedi'i gyfluniad a pheidiwch â dyfeisio
gwerthoedd meincnod. Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb.
```

**Rhedwch wiriad cysondeb cyfraith Little.**

```text
Dyma ddata ar gyfer [tîm neu wasanaeth] dros [cyfnod]: WIP cyfartalog [gwerth],
gadael y diwrnod [gwerth], ac amser cylch cymedrig mewn diwrnodau [gwerth], gan
ddefnyddio'r ffin [disgrifiad o'r ffin]. Cyfrifwch gymhareb WIP cyfartalog i
adael wedi'i luosi ag amser cylch, ac esboniwch beth allai anghydweddiad ei olygu
o ystyried y ffin hon, megis eitemau wedi'u parcio, eitemau wedi'u cau heb gael
eu dechrau, neu gyfnod ansefydlog. Awgrymwch wiriadau y gallaf eu gwneud yn
[tracker neu offeryn ITSM]. Peidiwch â dyfeisio ffigurau na throthwyon.
Rhestrwch eich rhagdybiaethau.
```

**Cynlluniwch arbrawf terfyn WIP cyntaf.**

```text
Ein tîm yw [maint y tîm a rolau], yn gweithio ar [math o waith]. WIP cyfartalog
cyfredol yw [gwerth], gyda chamau [rhestr camau], a'r ciw hiraf yw [cam].
Drafftiwch arbrawf wedi'i gyfyngu gan amser i gyflwyno terfyn WIP: damcaniaeth, y
terfyn i roi cynnig arno a pham, y mesurau i'w gwylio (gan gynnwys o leiaf un
rheilen warchod), beth sy'n cyfrif fel eithriad, a dyddiad adolygu. Peidiwch â
nodi terfyn cywir cyffredinol na gwerthoedd meincnod. Rhestrwch eich
rhagdybiaethau a'r risgiau.
```

**Dewch o hyd i'r dagfa debygol o ddata cam.**

```text
Ar gyfer [tîm neu wasanaeth], dyma amser ciw a WIP fesul cam dros [cyfnod]:
[tabl o gam, canolrif amser ciw, 85fed canradd amser ciw, eitemau'n aros, a
nodiadau capasiti]. Graddiwch y camau fel ymgeiswyr ar gyfer y cyfyngiad,
esboniwch y rhesymu mewn iaith blaen, ac awgrymwch un arbrawf cost isel ar gyfer
yr ymgeisydd gorau ac un mesur a fyddai'n dangos iddo weithio. Peidiwch â dyfeisio
data na meincnodau. Rhestrwch eich rhagdybiaethau a pha ddata ychwanegol a
fyddai'n newid y safle.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i ba bwnc sy'n diffinio mesur llif neu gapasiti yr ydych yn ei ychwanegu a'r rheilen warchod a ddylai eistedd wrth ei ymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod metrig wedi'i olygu yn enwi ei glociau, ei ffin, ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Aros sy'n dominyddu amser a aeth heibio, felly mesurwch WIP, hyd ciw ac amser ciw fesul cam, ac adroddwch ganolrifau a chanraddau uchel.
- Mae cyfraith Little yn clymu WIP cyfartalog, trwybwn ac amser cylch gyda'i gilydd, sy'n ei gwneud yn brawf cyflym a yw eich diffiniadau'n gyson.
- Mae oedi'n codi'n serth wrth i ddefnyddio nesáu at gapasiti llawn, felly cynlluniwch slac lle mae galw'n amrywiol.
- Cyfyngwch WIP ar gyfer y system gyfan, trinwch dorri fel anogwyr sgwrs, ac amddiffynnwch rhag ail-labelu gwaith i aros dan y terfyn.
- Gwyliwch gyrraedd a gadael, gan fod ciw sy'n tyfu wythnos ar ôl wythnos angen penderfyniad am gapasiti neu alw.
- Mesurwch dimau a gwasanaethau, byth unigolion, a chytunwch ar un ffin ysgrifenedig cyn cymharu rhifau.

## Cyfeiriadau a darllen pellach

1. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
2. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
3. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
6. Hopp, W. J., and Spearman, M. L., *Factory Physics*, 3rd edition, Waveland Press, 2011.
7. Kleinrock, L., *Queueing Systems, Volume 1: Theory*, Wiley, 1975.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
10. Wikipedia, [Work in process](https://en.wikipedia.org/wiki/Work_in_process).
11. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
12. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
13. Wikipedia, [Kingman's formula](https://en.wikipedia.org/wiki/Kingman%27s_formula).
14. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
15. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
16. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
17. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
