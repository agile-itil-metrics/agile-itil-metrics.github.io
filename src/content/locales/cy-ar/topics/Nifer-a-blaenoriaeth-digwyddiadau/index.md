# Nifer a blaenoriaeth digwyddiadau

**Cyfrifwch ddigwyddiadau yn erbyn y defnydd a'u cynhyrchodd, darllenwch flaenoriaeth fel cymysgedd yn hytrach na sgôr, a gwyliwch ailadroddiadau, oherwydd bod siâp galw digwyddiadau yn dweud wrthych ble i fuddsoddi ymhell cyn i unrhyw amser datrys unigol wneud hynny.**

## Crynodeb a chymhelliant

Digwyddiad, yn nhermau [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, yw tarfu anghynlluniedig ar wasanaeth neu ostyngiad yn ei ansawdd. [Rheoli digwyddiadau](https://en.wikipedia.org/wiki/Incident_management) yw'r arfer sy'n adfer gweithrediad gwasanaeth arferol cyn gynted ag y bo'n ymarferol ac yn cyfyngu ar y niwed i'r busnes. Mae pob digwyddiad hefyd yn signal: ni weithiodd rhywbeth yn y gwasanaeth, ei newidiadau, ei ddefnyddwyr neu ei fonitro fel y disgwylid. Mae cyfrif a chymeriad digwyddiadau felly yn un o'r mesurau galw mwyaf addysgiadol sydd gan dîm gweithrediadau.

Mae cyfaint ar ei ben ei hun yn arweinydd gwael. Gall cynnydd mewn digwyddiadau olygu bod y gwasanaeth wedi gwaethygu, neu fod mwy o bobl yn ei ddefnyddio, neu fod monitro wedi gwella ac yn awr yn gweld namau a arferai fynd heb eu hadrodd. Gall gostyngiad olygu bod gwaith dibynadwyedd wedi talu ffordd, neu fod defnyddwyr wedi rhoi'r gorau i drafferthu adrodd. Mae'r pwnc hwn yn ymwneud â darllen cyfaint gyda digon o gyd-destun i wahaniaethu'r straeon hynny: normaleiddio yn erbyn defnydd, hollti yn ôl categori a gwasanaeth, a gwylio'r cymysgedd blaenoriaethau a chyfradd ailadroddiadau.

Blaenoriaeth yw ail hanner y pwnc. Mae arfer ITIL yn cyffredin yn deillio blaenoriaeth o ddau fewnbwn: effaith (faint o'r busnes yr effeithir arno) a brys (pa mor gyflym y mae'r busnes angen yr atgyweiriad). Mapir y pâr i lefel blaenoriaeth sy'n gosod yr ymateb disgwyliedig. Mae gan dimau ystwyth gyfatebydd agos yn y ffordd y maent yn prysbennu ôl-groniad: labeli difrifoldeb a brys ar ddiffygion, a "dosbarth gwasanaeth" ar fwrdd llif sy'n penderfynu beth sy'n neidio'r ciw. Mae'r geiriau'n wahanol; yr un yw'r cwestiwn: beth sy'n rhaid ei drin yn gyntaf, a pham.

Mae'r olwg ITIL yn trin digwyddiadau fel cofnodion sy'n eiddo i ddesg gwasanaeth a grwpiau datrys, gyda chategorïau, blaenoriaethau a thargedau lefel gwasanaeth. Mae'r olwg ystwyth yn trin gwaith heb ei gynllunio fel tarfu ar lif sy'n cystadlu â gwaith wedi'i gynllunio (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio). Mae'r ddwy olwg yn elwa o'r un mesurau, os yw'r mesurau yn disgrifio'r system ac nid y bobl y tu mewn iddi. Y [ddesg gwasanaeth](https://en.wikipedia.org/wiki/Help_desk_software) yw lle mae'r rhan fwyaf o gofnodion yn dechrau, ac ymdrinnir â'i metrigau ei hun ar wahân (gweler pwnc 3.1, Metrigau desg gwasanaeth). Ymdrinnir â pha mor gyflym yr ymatebir i ddigwyddiadau ac y'u datrysir ym mhwnc 3.3, Amser ymateb a datrys digwyddiadau. Mae gan ddigwyddiadau mawr eu mesurau eu hunain (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

Mae sawl tymor yn codi dro ar ôl tro isod. **Canradd** yw'r gwerth y mae cyfran benodol o arsylwadau'n syrthio islaw iddo, felly'r 85fed ganradd yw'r gwerth nad yw 85 y cant o arsylwadau yn ei ragori. **Cytundeb lefel gwasanaeth (SLA)** yw ymrwymiad dogfenedig rhwng darparwr a chwsmer. **Eitem gyfluniad (CI)** yw cydran y mae angen ei rheoli i gyflwyno gwasanaeth. Mae **proses Poisson** yn disgrifio digwyddiadau sy'n cyrraedd yn annibynnol ar gyfradd gyfartalog, sy'n fodel cyntaf defnyddiol ar gyfer cyrraedd digwyddiadau (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

Mae'r rhybudd o bwnc 1.2 (Cyfraith Goodhart a seicoleg metrigau) yn berthnasol yma yn fwy nag yn y rhan fwyaf o leoedd. Mae pobl yn mewnbynnu cyfrifon digwyddiadau a blaenoriaethau, yn aml dan bwysau, a gellir newid y rhif sydd ynghlwm wrth gofnod drwy newid sut yr ysgrifennir y cofnod. Mae gan bob metrig isod ffordd o chwarae'r system, ac mae'r rheiliau gwarchod yn rhan o'r diffiniad.

## Egwyddorion allweddol

- **Normaleiddiwch cyn cymharu.** Mae cyfrif yn golygu ychydig heb y defnydd, y sylfaen defnyddwyr neu'r cyfaint trafodion y daeth ohono. Cymharwch gyfraddau rhwng cyfnodau a gwasanaethau, a dangoswch y cyfrif crai wrth eu hymyl.
- **Darllenwch y cymysgedd, nid un rhif.** Mae dosbarthiad blaenoriaethau, dosbarthiad categorïau a chyfran yr ailadroddiadau yn dweud mwy gyda'i gilydd nag unrhyw gyfanswm.
- **Rheol yw blaenoriaeth, nid hwyliau.** Deilliwch hi o effaith a brys gan ddefnyddio matrics ysgrifenedig, a mesurwch pa mor aml y caiff ei newid ar ôl y ffaith.
- **Gwahanwch ddigwyddiadau oddi wrth geisiadau.** Nid nam yw cais am rywbeth arferol. Mae cyfrif y ddau gyda'i gilydd yn chwyddo cyfaint digwyddiadau ac yn cuddio ar beth mae'r ddesg gwasanaeth yn treulio ei hamser (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth).
- **Ailadroddiadau yw'r signal mwyaf gwerthfawr.** Mae digwyddiad sy'n dod yn ôl yn pwyntio at broblem nad yw wedi'i datrys eto (gweler pwnc 4.1, Metrigau rheoli problemau).
- **Mesurwch wasanaethau a thimau, byth asiantau.** Mae cyfrifon yn ôl person yn gwahodd graddio, ac mae graddio yn llygru'r data (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).
- **Disgwyliwch i gyfaint symud am resymau nad ydynt yn ansawdd.** Mae rhyddhadau, tymhorau, ymgyrchoedd a newidiadau mewn sianeli adrodd i gyd yn symud cyfrifon. Anodwch y siart.

## Diffiniadau metrigau

Mae'r tabl yn rhestru'r metrigau yn y pwnc hwn. Nodir clociau a ffiniau yn y golofn fformiwla. Mae "wedi'i gau" ac "wedi'i agor" yn cyfeirio at stampiau amser yn y cofnod digwyddiad; yr amser agor yw pan grëir y cofnod neu pan fo'r system fonitro yn ei greu, a'r amser cau yw pan gadarnheir bod y digwyddiad wedi'i ddatrys ac y'i caeir.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfaint digwyddiadau yn ôl gwasanaeth | Cyfrif y digwyddiadau a agorwyd ar gyfer gwasanaeth mewn cyfnod | digwyddiadau ag amser agor y tu mewn i'r cyfnod, wedi'u priodoli i'r gwasanaeth yr effeithiwyd arno; eithrir ceisiadau gwasanaeth, dyblygion a unwyd i gofnod rhiant, a chofnodion a ganslwyd fel rhai a godwyd ar gam | cyfrif | Cofnodion digwyddiadau offeryn ITSM | Rheoli digwyddiadau | Diffygion cynhyrchu neu eitemau gwaith heb eu cynllunio fesul tîm | Wythnosol, wedi'i adolygu'n fisol |
| Cyfradd digwyddiadau normaleiddiedig | Digwyddiadau o'u cymharu â defnydd y gwasanaeth | digwyddiadau a agorwyd yn y cyfnod / mesur defnydd ar gyfer yr un cyfnod a chwmpas (defnyddwyr gweithredol, sesiynau neu drafodion, a ddewisir ac a gofnodir fesul gwasanaeth) x 1,000; rhaid i'r mesur defnydd ddod o ffynhonnell heblaw'r offeryn digwyddiadau | digwyddiadau fesul 1,000 o unedau defnydd | Offeryn ITSM ynghyd â data defnydd o ddadansoddeg neu fonitro | Rheoli digwyddiadau; rheoli lefelau gwasanaeth | Dwysedd diffygion fesul rhyddhad neu fesul defnyddiwr | Misol |
| Cymysgedd blaenoriaeth | Cyfran y digwyddiadau a agorwyd ar bob lefel blaenoriaeth | digwyddiadau ar y flaenoriaeth a gofnodwyd wrth agor / pob digwyddiad a agorwyd yn y cyfnod, wedi'i ddangos ar gyfer pob lefel; cyfrifir digwyddiadau a ail-ddosbarthwyd ar y flaenoriaeth agor a'u dangos eto ar y flaenoriaeth cau | canran fesul lefel | Offeryn ITSM, gan gynnwys hanes newidiadau blaenoriaeth | Rheoli digwyddiadau | Dosbarthiad difrifoldeb diffygion; cymysgedd dosbarth gwasanaeth | Misol |
| Cyfradd ail-ddosbarthu blaenoriaeth | Cyfran y digwyddiadau y newidiodd eu blaenoriaeth rhwng agor a chau | digwyddiadau a gaewyd yn y cyfnod y mae eu blaenoriaeth cau yn wahanol i'r flaenoriaeth agor / digwyddiadau a gaewyd yn y cyfnod | canran | Llwybr archwilio offeryn ITSM | Rheoli digwyddiadau | Cyfradd ail-brysbennu ar yr ôl-groniad diffygion | Misol |
| Canolbwyntio categorïau | Cyfran cyfaint digwyddiadau a ddelir gan y categorïau mwyaf | digwyddiadau yn y pum categori uchaf yn ôl cyfrif / pob digwyddiad wedi'i gategoreiddio yn y cyfnod; adroddir digwyddiadau heb eu categoreiddio ar wahân fel eu cyfran eu hunain | canran | Meysydd categori a gwasanaeth offeryn ITSM | Rheoli digwyddiadau; rheoli problemau | Clystyrau diffygion yn ôl cydran neu epig | Misol |
| Cyfradd digwyddiadau dro ar ôl tro | Cyfran y digwyddiadau sy'n ailadrodd ar gyfer yr un gwasanaeth, eitem gyfluniad a chategori o fewn ffenestr a nodir | digwyddiadau yn y cyfnod â digwyddiad caeedig cynharach ar gyfer yr un gwasanaeth, CI a chategori yn y ffenestr flaenorol (er enghraifft 30 diwrnod, wedi'i gosod unwaith a'i chofnodi) / digwyddiadau a agorwyd yn y cyfnod; mae cofnod a ailagorwyd yn cyfrif fel ailagor, nid fel ailadrodd | canran | Offeryn ITSM a chysylltiadau CMDB | Rheoli digwyddiadau; rheoli problemau | Cyfradd atchweliad neu ddiffygion a ddihangodd | Misol |
| Cyfradd ailagor | Cyfran y digwyddiadau caeedig a ailagorwyd | digwyddiadau a gaewyd yn y cyfnod a ailagorwyd wedyn o fewn ffenestr a nodir (er enghraifft 7 diwrnod) / digwyddiadau a gaewyd yn y cyfnod | canran | Hanes statws offeryn ITSM | Rheoli digwyddiadau | Diffygion a ailagorwyd; ailwaith | Misol |
| Cyfran a ganfuwyd gan fonitro | Cyfran y digwyddiadau a godwyd gyntaf gan fonitro cyn i ddefnyddiwr adrodd | digwyddiadau y mae eu digwyddiad cyntaf yn rhybudd awtomataidd / pob digwyddiad a agorwyd yn y cyfnod; cyfrifir digwyddiadau a agorwyd gan berson o rybudd yn ôl amser y rhybudd | canran | Offeryn ITSM, integreiddio monitro | Monitro a rheoli hysbysiadau; rheoli digwyddiadau | Diffygion a yrrir gan rybuddion yn erbyn rhai a adroddir gan gwsmeriaid | Misol |

Dau nodyn ar y diffiniadau. Y cyntaf yw mai "blaenoriaeth" yn y tabl hwn yw'r flaenoriaeth y mae'r cofnod yn ei chario, a ddylai ddod o'r matrics effaith a brys ac nid o'r drefn y mae pobl eisiau gwneud gwaith. Yr ail yw bod cyfaint a adroddir ar gyfer cyfnod yn gyfrif o agoriadau, nid cyfrif digwyddiadau agored ar ddiwrnod penodol. Mae'r cyfrif agored ar unrhyw adeg yn fesur ôl-groniad ac yn perthyn gydag heneiddio (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau).

## Argymhellion

### Cyfrifwch yn ofalus

**1. Ysgrifennwch beth yw digwyddiad a beth nad ydyw.** Mae llawer o offer yn dal digwyddiadau, ceisiadau, rhybuddion a phroblemau mewn un tabl. Penderfynwch pa fathau o gofnodion sy'n cyfrif, dogfennwch yr hidlydd, a'i gymhwyso bob tro. Mae newid yn yr hidlydd yn newid y duedd, felly logiwch newidiadau gyda'r dyddiad a'r rheswm (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

**2. Dad-ddyblygwch cyn i chi adrodd.** Pan fo un nam yn cynhyrchu hanner cant o docynnau, y digwyddiad rhiant yw'r digwyddiad a'r plant yw mesur ei gyrhaeddiad. Adroddwch y ddau rif: digwyddiadau rhiant ar gyfer faint o namau a ddigwyddodd, a chofnodion cysylltiedig ar gyfer faint o bobl a'u teimlodd. Mae cymysgu'r ddau yn gwneud i un toriad mawr edrych fel mis o waith arferol.

**3. Priodolwch ddigwyddiadau i wasanaethau yn ogystal â thimau.** Y gwasanaeth yw'r hyn y mae'r busnes yn ei brynu ac yn ei ddeall. Defnyddiwch y catalog gwasanaethau (sillafiad ITIL yn Saesneg yw "service catalogue") i ddiffinio'r rhestr, ac adolygwch y mapio o CIau pan fo gwasanaethau'n newid. Mae digwyddiad heb wasanaeth yn broblem ansawdd data i'w thrwsio, ac mae cyfran cofnodion o'r fath yn werth ei hadrodd.

### Normaleiddiwch a dehonglwch gyfaint

**4. Normaleiddiwch yn erbyn mesur defnydd o ffynhonnell wahanol.** Rhannwch â defnyddwyr gweithredol, sesiynau neu drafodion, a gymerwyd o ddadansoddeg neu fonitro ac nid o'r offeryn digwyddiadau. Nid yw gwasanaeth a ddyblodd ei ddefnyddwyr a'i ddigwyddiadau wedi gwaethygu; mae gwasanaeth y dyblodd ei ddigwyddiadau gyda defnydd gwastad wedi gwneud. Dangoswch y cyfrif crai wrth ymyl y gyfradd fel nad oes neb yn credu bod yr enwadur yn cuddio rhywbeth.

**5. Defnyddiwch siart rheoli, nid saeth tuedd.** Mae cyfrifon digwyddiadau yn amrywio o wythnos i wythnos hyd yn oed pan nad oes dim wedi newid. Mae [siart rheoli](https://en.wikipedia.org/wiki/Control_chart) yn dangos yr ystod arferol o amrywiad, fel y mae'r tîm yn ymateb i signal ac yn gadael sŵn yn llonydd. Nid yw cyfrifon wythnosol sy'n symud y tu mewn i'r terfynau yn newyddion; mae rhediad parhaus ar un ochr i'r cyfartaledd yn newyddion. Addaswch ar gyfer [tymhorolrwydd](https://en.wikipedia.org/wiki/Seasonality) megis diwedd chwarter, gwyliau a chylchoedd rhyddhau drwy gymharu cyfnodau tebyg.

**6. Anodwch y siart gyda digwyddiadau.** Marciwch ryddhadau, ymfudiadau, ymgyrchoedd, toriadau dibyniaethau, a newidiadau i'r sianel adrodd. Gall ffurflen hunanwasanaeth newydd neu fotwm "adrodd problem" mwy gweladwy godi cyfaint tra bo'r gwasanaeth yn aros yr un fath. Mae'r rhan fwyaf o ddadleuon cyfaint yn dod i ben yn gyflym pan fo'r siart yn dangos beth ddigwyddodd yr wythnos honno.

### Rheolwch flaenoriaeth gyda rheolau

**7. Deilliwch flaenoriaeth o effaith a brys gyda matrics cyhoeddedig.** Diffiniwch effaith o ran defnyddwyr a swyddogaethau busnes yr effeithir arnynt, a brys o ran pa mor fuan y mae'r niwed yn tyfu. Cyhoeddwch y matrics ar y dudalen lle mae asiantau'n dewis y gwerthoedd, gyda dwy neu dair enghraifft weithiol fesul cell. Osgowch feysydd blaenoriaeth rhydd eu dewis; maent yn troi'n negodi, ac mae cyfrif digwyddiadau "blaenoriaeth 1" yn dod yn fesur o berswâd.

**8. Adroddwch y cymysgedd a'r gyfradd ail-ddosbarthu gyda'i gilydd.** Mae cymysgedd iach yn cael nifer fach o'r digwyddiadau blaenoriaeth uchaf a sylfaen eang o rai is. Os yw'r lefel uchaf yn tyfu, gofynnwch a dyfodd y niwed neu a ddysgodd cwsmeriaid fod "critigol" yn cael sylw. Mae'r gyfradd ail-ddosbarthu yn dangos pa mor dda y mae'r matrics yn ffitio: mae newidiadau mynych wrth gau yn golygu bod y rheol yn aneglur neu fod yr asesiad cyntaf wedi'i ruthro. Adolygwch sampl o gofnodion a ail-ddosbarthwyd bob mis yn y grŵp sy'n berchen ar y matrics.

**9. Cadwch flaenoriaeth a'r dosbarth gwasanaeth ystwyth wedi'u halinio.** Lle mae timau cyflawni'n derbyn gwaith a yrrir gan ddigwyddiadau, defnyddiwch yr un geiriau a'r un matrics, neu gyhoeddwch fapio clir. Bydd tîm sy'n galw nam yn "uchel" tra bo gweithrediadau yn galw'r un nam yn "ganolig" yn colli amser i gyfieithu. Neilltuwch lwfans penodol ar gyfer gwaith cyflymedig fel bod y tarfu yn weladwy yn y mesurau llif (gweler pwnc 2.1, Mesurau llif).

### Chwiliwch am ailadroddiadau a phatrymau

**10. Olrheiniwch ailadroddiadau ac ailagoriadau fel signalau ar wahân.** Mae ailagor yn golygu na ddaliodd yr atgyweiriad cyntaf; mae ailadrodd yn golygu bod yr un math o nam wedi dychwelyd ar ôl atgyweiriad priodol. Mae'r cyntaf yn pwyntio at ansawdd datrys a'r ail at achos heb ei ddatrys. Cysylltwch glystyrau sy'n ailadrodd â chofnodion problemau, a pheidiwch â chyfrif digwyddiad fel un wedi'i drwsio pan fo'n debygol o ddod yn ôl (gweler pwnc 4.1, Metrigau rheoli problemau).

**11. Defnyddiwch yr [egwyddor Pareto](https://en.wikipedia.org/wiki/Pareto_principle) i ddewis ble i edrych.** Didolwch gategorïau a gwasanaethau yn ôl cyfrif digwyddiadau a gweld pa mor ychydig sy'n cyfrif am y rhan fwyaf o'r cyfaint. Ymchwiliwch i'r ychydig uchaf cyn adeiladu adroddiadau newydd ar gyfer y gweddill. Anogwr ar gyfer [dadansoddi gwraidd achos](https://en.wikipedia.org/wiki/Root_cause_analysis) yw'r siâp, nid casgliad, oherwydd gallai categori â chyfrif uchel fod yn syml yr un sy'n hawdd ei gategoreiddio.

**12. Bwydwch y canfyddiadau yn ôl i gyflawni ac i'r ddesg gwasanaeth.** Rhannwch yr olygon categori ac ailadrodd gyda'r timau sy'n adeiladu ac yn newid y gwasanaethau, mewn sgwrs reolaidd yn hytrach nag adroddiad. Paru pob clwstwr sy'n ailadrodd â pherchennog, cam nesaf a dyddiad, a gosodwch y gwaith ar yr un ôl-groniad â blaenoriaethau eraill (gweler pwnc 2.6, Metrigau ôl-groniad a mireinio). Mae cyfaint yn disgyn pan dynnir achosion, ac mae hynny'n cymryd capasiti wedi'i gynllunio.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfaint digwyddiadau yn ôl gwasanaeth | Logio digwyddiadau fel ceisiadau, uno tocynnau digyswllt, digalonni defnyddwyr rhag adrodd, neu gau dyblygion fel "dim nam wedi'i ganfod" | Cyfaint cysylltiadau a adroddir gan ddefnyddwyr a chyfaint ceisiadau wrth ymyl cyfaint digwyddiadau; bodlonrwydd a gadael o'r ddesg gwasanaeth; sampl o geisiadau sy'n darllen fel namau |
| Cyfradd digwyddiadau normaleiddiedig | Dewis yr enwadur sy'n rhoi'r ffigur gorau, neu newid y diffiniad defnydd rhwng cyfnodau | Mesur defnydd sefydlog fesul gwasanaeth, wedi'i gofnodi yn y gofrestr; cyfrifon crai wedi'u dangos wrth ymyl y gyfradd |
| Cymysgedd blaenoriaeth | Gostwng blaenoriaethau i edrych yn dawel neu eu codi i gael sylw; neilltuo blaenoriaeth isel i osgoi targed ymateb | Cyfradd ail-ddosbarthu blaenoriaeth; adolygu sampl misol yn erbyn y matrics effaith a brys; effaith a adroddir gan gwsmeriaid |
| Cyfradd ail-ddosbarthu blaenoriaeth | Peidio â newid blaenoriaeth pan ddylai newid, fel bod y gyfradd yn edrych yn sefydlog; ei newid dim ond wrth gau i gyd-fynd â'r targed | Sampl o gofnodion lle newidiodd effaith yn ystod y digwyddiad; adolygiadau o amserlenni digwyddiadau |
| Canolbwyntio categorïau | Defnyddio categori dal-y-cyfan, neu hollti categori mawr yn sawl un i guddio canolbwyntio | Cyfran y cofnodion heb eu categoreiddio ac "arall"; adolygiad cyfnodol o'r rhestr categorïau; gwiriadau categorïau yn erbyn nodiadau datrys |
| Cyfradd digwyddiadau dro ar ôl tro | Agor digwyddiad newydd gyda geiriad neu CI gwahanol i osgoi'r cyswllt; cau'n gynnar i osgoi ailagor | Adolygiad o gofnodion bron yn ddyblyg yn ôl testun a gwasanaeth; cyfradd ailagor; cyfradd cysylltu â chofnodion problemau |
| Cyfradd ailagor | Gofyn i ddefnyddwyr agor tocyn newydd yn lle ailagor; cau tocynnau'n hwyr i osgoi ailagor | Cyfrif tocynnau newydd sy'n cyfeirio at un caeedig diweddar; cadarnhad cwsmer o ddatrys; dosbarthiad amser-i-gau |
| Cyfran a ganfuwyd gan fonitro | Creu rhybuddion swnllyd sy'n agor digwyddiadau'n awtomatig, neu adael i bobl ail-labelu adroddiadau defnyddwyr fel rhybuddion | Mesurau ansawdd rhybuddion megis cyfran rhybuddion gweithredadwy (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion); archwiliad ffynhonnell digwyddiadau |

Mae darlleniad iach yn ddiflas ac yn esboniadwy. Mae cyfraddau normaleiddiedig yn gyson neu'n disgyn ar gyfer gwasanaethau sefydlog ac yn codi pan fo defnydd neu newid yn codi am reswm y mae'r siart yn ei ddangos. Mae'r cymysgedd blaenoriaeth yn sefydlog, mae ail-ddosbarthu yn isel, ac mae set fach o gategorïau'n cael sylw bwriadol. Mae ailadroddiadau ac ailagoriadau yn disgyn ar ôl gwaith problem wedi'i gynllunio, ac mae gan symudiad mewn unrhyw fetrig esboniad y gall rhywun ei roi heb amddiffyn y rhif.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Cyfrifon digwyddiadau crai | Syml, hawdd eu hesbonio, ar gael bob amser | Cymysgu defnydd, ansawdd ac ymddygiad adrodd yn un rhif |
| Cyfraddau yn erbyn defnydd | Caniatáu cymharu teg ar draws cyfnodau a gwasanaethau | Angen ffynhonnell defnydd ddibynadwy; gellir dadlau am enwaduron |
| Matrics effaith a brys sefydlog | Blaenoriaeth gyson ar draws timau; archwiliadwy | Gall deimlo'n anhyblyg; mae achosion ar y ffin angen barn a llwybr i ddiystyru |
| Blaenoriaeth rydd ei dewis | Cyflym a hyblyg i asiantau profiadol | Anghyson, agored i bwysau, anodd ei gymharu dros amser |
| Coeden categorïau fanwl | Dangos o ble mae galw'n dod | Anodd ei defnyddio dan bwysau; mae pobl yn dewis y cyfatebiad cyntaf neu "arall" |
| Rhestr categorïau fer gyda thagiau | Cyflym i'w gymhwyso ac yn gyson | Llai o fanylion; gall guddio patrymau sydd angen dadansoddi testun |
| Cyfradd ailadrodd yn ôl CI a chategori | Pwyntio at achosion heb eu datrys | Yn dibynnu ar ddata CI da; mae cysylltiadau ffug a cholli'r ddau yn digwydd |

Derbyniwch nad oes yr un mesur unigol yn iawn. Defnyddiwch gyfrifon crai ar gyfer cynllunio capasiti, cyfraddau ar gyfer iechyd, y cymysgedd blaenoriaeth ar gyfer risg, ac ailadroddiadau ar gyfer gwelliant, a dangoswch bob un am yr hyn ydyw. Cadwch y rhestr categorïau yn ddigon byr i bobl ei defnyddio, a gwellwch y goeden dim ond pan fo penderfyniad angen manylion manylach.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth sy'n cyfrif fel digwyddiad yma, ac a yw pawb yn cymhwyso'r rheol yn yr un ffordd?**
Cymerwch ddeg cofnod diweddar a gofynnwch i bob person eu labelu fel digwyddiad, cais, neu rywbeth arall. Cymharwch yr atebion a thrafodwch anghytundebau. Dylai'r hwylusydd chwilio am arferion megis trin pob tocyn gan berson uchel ei statws fel digwyddiad, ac yna cytuno ar un rheol ysgrifenedig gydag enghreifftiau. Cofnodwch y dyddiad fel y gellir darllen tueddiadau diweddarach yn gywir.

**2. Pan gododd cyfaint digwyddiadau y chwarter diwethaf, beth oeddem ni'n ei wybod am ddefnydd a newid ar y pryd?**
Rhowch y siart wrth ymyl amserlen rhyddhadau, ymgyrchoedd a ffigurau defnydd. Gofynnwch pa godiad a esboniwyd a pha un nas esboniwyd. Mae'r drafodaeth yn tueddu i ddangos pa mor anaml y mae'r enwadur ar y dudalen. Cytunwch pa fesur defnydd y bydd pob gwasanaeth yn ei gario o hyn ymlaen.

**3. Sut y penderfynir blaenoriaeth, a phryd y'n synnodd ddiwethaf?**
Cerddwch drwy'r matrics effaith a brys gydag enghraifft ddiweddar o bob lefel blaenoriaeth. Gofynnwch ble mae asiantau'n dyfalu a ble mae cwsmeriaid neu reolwyr yn gwthio. Cymharwch flaenoriaeth agor a blaenoriaeth cau ychydig o gofnodion. Penderfynwch ar un newid i'r matrics neu ei enghreifftiau sy'n lleihau dadl.

**4. Pa dri chategori sy'n cymryd y rhan fwyaf o'n cyfaint digwyddiadau, a phwy sy'n gweithio ar dynnu'r achos?**
Rhestrwch y prif gategorïau ac, ar gyfer pob un, berchennog yr achos sylfaenol. Os yw'r ateb yn "neb," mae hynny'n ganfyddiad. Gofynnwch a yw'r categori yn glwstwr go iawn neu'n arferiad labelu. Dewiswch un clwstwr i ymchwilio iddo gyda'r tîm cyflawni y chwarter hwn.

**5. Sut ydym ni'n gwahaniaethu ailadrodd oddi wrth ailagor, a beth ydym ni'n ei wneud am bob un?**
Dangoswch ddau neu dri phâr o gofnodion i'r tîm a gofynnwch pa rai sy'n ailadroddiadau. Trafodwch beth mae ailagor yn ei ddweud am ansawdd yr atgyweiriad cyntaf, a beth mae ailadrodd yn ei ddweud am yr achos. Dylai'r hwylusydd lywio'r grŵp tuag at gysylltu clystyrau sy'n ailadrodd â chofnodion problemau yn lle eu cau fesul un. Cytunwch pwy sy'n eu hadolygu a pha mor aml.

**6. Beth fyddem ni'n cael ein temtio i'w newid pe bai uwch arweinwyr yn adolygu ein cyfrif digwyddiadau bob wythnos?**
Gofynnwch i'r grŵp ddychmygu'r rhif ar wal. Pa arferion fyddai'n symud: sut y caiff pethau eu logio, sut y caiff tocynnau eu huno, sut y caiff blaenoriaethau eu gosod? Enwch y pwysau'n agored a heb fai. Cytunwch pa reilen warchod fyddai'n dangos y symudiad, a phwy sy'n edrych arni.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn derbyn allbwn y pwnc hwn fel galw. Mae golygon categori ac ailadrodd yn dangos pa rannau o'r cynnyrch sy'n achosi'r mwyaf o drafferth, ac mae'r cymysgedd blaenoriaeth yn dangos faint o waith tarfu i'w gynllunio ar ei gyfer. Dylai timau drin gwaith a yrrir gan ddigwyddiadau fel rhan o'u capasiti, ei gadw'n weladwy mewn mesurau llif, a defnyddio clystyrau ailadrodd i gyfiawnhau gwaith dibynadwyedd ar yr ôl-groniad (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio). Mae cyfrif digwyddiadau fesul rhyddhad yn duedd ddefnyddiol, er na ddylai fyth ddod yn fesur bai ar gyfer datblygwyr unigol.

### Timau gwasanaeth a gweithrediadau

Mae timau gwasanaeth a gweithrediadau yn creu'r cofnodion ac yn teimlo'r pwysau o amgylch blaenoriaeth. Maent yn elwa o fatrics clir, rhestr categorïau fer, a ffyrdd cyflym o gysylltu dyblygion. Dylent wirio'r data yn eu hoffer eu hunain, megis cyfran y cofnodion heb eu categoreiddio a'r gyfradd ail-ddosbarthu, cyn i eraill wneud hynny. Mae timau gweithrediadau mewn sefyllfa dda i gynnal yr adolygiad sampl misol a bwydo clystyrau sy'n ailadrodd i reoli problemau.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr eisiau gwybod a yw gwasanaeth yn gwella a ble i fuddsoddi. Dylent ofyn am gyfraddau normaleiddiedig, y cymysgedd blaenoriaeth, a'r golwg ailadrodd, gydag anodiadau, a gwrthsefyll un ffigur cyfaint. Mae targedau ar gyfer "llai o ddigwyddiadau" yn gwahodd atal, felly gosodwch ddisgwyliadau ar ganlyniadau megis effaith ar gwsmeriaid a lleihau ailadroddiadau yn lle hynny. Dylai llywodraethu fod yn berchen ar y matrics blaenoriaeth a chymeradwyo newidiadau iddo, gyda'r effaith ar linellau tuedd wedi'i nodi.

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn profi digwyddiadau fel gwaith wedi'i dorri, nid fel categorïau. Maent angen ffordd hawdd i adrodd nam, blaenoriaeth deg ar sail eu heffaith, a diweddariadau gonest. Os yw adroddiadau'n cael eu digalonni neu os yw blaenoriaethau'n teimlo'n fympwyol, bydd cyfaint yn disgyn a bydd ymddiriedaeth yn disgyn gydag ef. Rhannwch y prif ganfyddiadau mewn termau y mae defnyddwyr yn eu hadnabod, megis y gwasanaethau a wellwyd a'r problemau a dynnwyd (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn cefnogi system cofnodion cleifion, system amserlennu ac offeryn negeseua staff. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r adroddiad misol yn dangos 640 o ddigwyddiadau ym mis olaf y chwarter, i fyny o 520 y mis blaenorol. Mae'r arweinyddiaeth yn gofyn am gynllun adfer. Mae perchennog gwasanaeth y system amserlennu, y cododd ei gyfrif fwyaf, yn gofyn i edrych ar y data cyn cytuno bod y gwasanaeth wedi gwaethygu.

Daw tri ffaith i'r amlwg. Yn gyntaf, enillodd y system amserlennu grŵp clinig newydd y mis hwnnw, a chododd defnyddwyr gweithredol tua 30 y cant (enghreifftiol). Wedi'i normaleiddio, roedd y gyfradd digwyddiadau fesul 1,000 o sesiynau yn fras wastad. Yn ail, roedd 90 o'r cofnodion ychwanegol yn gysylltiedig ag un digwyddiad rhiant, rhyngwyneb a fethodd gyda system labordy, felly dim ond llond llaw y cododd nifer y namau gwahanol. Yn drydydd, symudodd y cymysgedd blaenoriaeth: roedd cyfran y flaenoriaeth uchaf yn 2 y cant y mis blaenorol ac yn 7 y cant yn awr. Roedd y gyfradd ail-ddosbarthu hefyd wedi dyblu, ac roedd sampl o 20 cofnod yn dangos bod tua hanner y blaenoriaethau uchel wedi'u gostwng wrth gau.

Mae'r tîm yn gwneud tri phenderfyniad. Maent yn adrodd digwyddiadau rhiant a chofnodion cysylltiedig ar wahân. Maent yn ychwanegu sesiynau gweithredol at yr adroddiad fel yr enwadur. Maent yn cynnal sesiwn hanner awr gyda'r ddesg gwasanaeth ac arweinwyr clinigol i gymhwyso'r matrics effaith a brys i'r cofnodion a samplwyd, sy'n dangos bod "ni all clinig archebu cleifion" wedi cael ei drin fel canolig gan rai asiantau ac fel uchel gan eraill. Mae'r matrics yn cael dwy enghraifft glinigol fesul cell.

Mae'r risg chwarae'r system y maent yn ei dal yn dawel. Roedd rheolwr wedi gofyn i asiantau osgoi blaenoriaeth 1 ar gyfer y system amserlennu am fod pob un yn sbarduno adolygiad, felly agorwyd cofnodion ar flaenoriaeth is a'u codi'n ddiweddarach, neu ddim o gwbl. Datgelodd y gyfradd ail-ddosbarthu a'r adolygiad sampl y patrwm. Mae'r tîm yn cytuno bod adolygiadau am ddysgu, yn cyhoeddi'r datganiad hwnnw, ac yn olrhain cyfran y digwyddiadau a agorwyd islaw'r flaenoriaeth cau fel rheilen warchod. Mae canolbwyntio categorïau hefyd yn dangos y nam rhyngwyneb ar frig y rhestr, felly agorir cofnod problem a threfnir atgyweiriad gyda'r tîm rhyngwyneb.

## Y golwg fesul sector

**Busnes newydd.** Mae cyfaint yn fach ac mae'r tîm yn adnabod pob digwyddiad, felly gall cyfraddau a matricsau deimlo'n drwm. Cadwch gyfrif syml yn ôl gwasanaeth a rhestr fer o gategorïau, ac ysgrifennwch ar un dudalen beth sy'n cyfrif fel digwyddiad. Gwyliwch am ailadroddiadau, oherwydd gall tîm bach ddileu nam sy'n ailadrodd yn gyflym a chael amser yn ôl.

**Busnes bach.** Gall y ddesg gwasanaeth fod yn un person yn defnyddio offeryn a gynhelir. Defnyddiwch adroddiadau safonol yr offeryn, cadwch flaenoriaeth i ychydig o lefelau gyda rheol effaith a brys plaen, a gwiriwch nad yw ceisiadau'n cael eu cyfrif fel digwyddiadau. Cymharwch fis i fis gyda nodiadau am newidiadau, megis staff newydd neu feddalwedd newydd.

**Menter fawr.** Mae llawer o wasanaethau, cyflenwyr a desgiau yn gwneud cysondeb y brif broblem. Cytunwch ar un matrics effaith a brys, un cynllun categorïau gyda dyfnder cyfyngedig, ac un rheol ar gyfer dad-ddyblygu, a gadewch i dimau lleol ychwanegu tagiau heb newid y cynllun a rennir. Normaleiddiwch yn ôl gwasanaeth ac adolygwch dueddiadau gyda siartiau rheoli ac anodiadau. Mae angen diffiniad a rennir mewn contractau ar gyfer digwyddiadau a achosir gan gyflenwyr (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

**Llywodraeth a'r sector cyhoeddus.** Gall digwyddiadau gario dyletswyddau adrodd, anghenion archwilio a budd cyhoeddus, yn enwedig lle mae gwasanaethau yn effeithio ar hawliau neu ddiogelwch dinasyddion. Dogfennwch y matrics blaenoriaeth a'r cynllun categorïau, cadwch lwybr archwilio newidiadau i flaenoriaeth, a byddwch yn ofalus gydag unrhyw gyfrif cyhoeddedig, gan y gall adrodd cyhoeddus greu pwysau cryf ar sut yr ysgrifennir cofnodion. Gall data defnydd gael ei gyfyngu gan reolau preifatrwydd, felly nodwch yr enwadur y gallwch ei ddefnyddio'n gyfreithlon (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw rheoli galw. Mae digwyddiadau yn defnyddio amser medrus, yn torri ar draws gwaith wedi'i gynllunio, ac yn amharu ar ddefnyddwyr. Mae deall cyfaint, blaenoriaeth ac ailadroddiadau yn gadael i sefydliad dynnu achosion, gosod staffio yn erbyn galw go iawn, a dangos i arweinwyr ble byddai gwaith dibynadwyedd yn talu ffordd.

Mae gan y gost dair rhan. Mae'r gosodiad yn cwmpasu diffinio digwyddiad a chais, cytuno ar y matrics blaenoriaeth a'r cynllun categorïau, a chysylltu data defnydd â gwasanaethau. Cost rhedeg yw'r ymdrech o gadw cofnodion yn lân, adolygiad sampl misol, a pherson i gynnal yr adroddiad. Trydedd gost yw'r amser i weithredu ar y canfyddiadau, sef lle mae'r rhan fwyaf o'r elw'n dod, felly cynlluniwch gapasiti ar ei gyfer.

Disgrifir yr elw orau fel patrymau y gallwch eu mesur eich hun. Mae'r rhain yn cynnwys llai o ailadroddiadau ar ôl gwaith problem, llai o amser a dreulir mewn anghydfodau blaenoriaeth, llai o ddwysáu annisgwyl, a gwell cydweddiad rhwng staffio a galw. Osgowch addo gostyngiad canrannol mewn digwyddiadau; mae'n dibynnu ar y gwasanaeth, y man cychwyn a'r gwaith a wnaed. Pobl sy'n dominyddu cyfanswm cost perchnogaeth, felly cyfrifwch ef, a'i gymharu â'r amser y mae digwyddiadau sy'n ailadrodd yn ei ddefnyddio ar hyn o bryd.

## Gwrthbatrymau a maglau

- **Adrodd cyfrif crai fel sgôr iechyd.** Mae defnydd, newid ac ymddygiad adrodd i gyd yn ei symud. Dangoswch gyfraddau normaleiddiedig, cyfrifon crai ac anodiadau gyda'i gilydd.
- **Targedau ar gyfer llai o ddigwyddiadau.** Maent yn gwobrwyo atal a chamlabelu. Gosodwch nodau ar gyfer lleihau ailadroddiadau ac effaith ar gwsmeriaid, a chadwch y cyfrif digwyddiadau fel gwybodaeth.
- **Cyfrif ceisiadau fel digwyddiadau.** Mae cyfaint yn codi ac mae'r gwasanaeth yn edrych yn waeth nag y mae. Gwahanwch y mathau o gofnodion ac adroddwch bob un.
- **Blaenoriaeth rydd ei dewis.** Mae blaenoriaeth yn dod yn negodi ac mae'r cymysgedd yn dod yn ddiystyr. Defnyddiwch fatrics cyhoeddedig a samplwch am gysondeb.
- **Coeden gategorïau nad oes neb yn ei defnyddio.** Mae pobl yn dewis y cyfatebiad cyntaf, ac mae "arall" yn tyfu. Cadwch hi'n fyr, adolygwch "arall" yn fisol, a thociwch yr hyn nas defnyddir.
- **Cyfrif pob tocyn cysylltiedig fel nam ar wahân.** Mae un toriad yn dominyddu'r mis. Adroddwch ddigwyddiadau rhiant a nifer y cofnodion cysylltiedig.
- **Graddio asiantau neu dimau yn ôl cyfrifon digwyddiadau.** Mae cyfrifon yn ôl person yn adlewyrchu dyraniad gwaith ac arferion tocynnau. Cyfanredwch i wasanaethau ac adolygwch batrymau, nid pobl.
- **Anwybyddu ailadroddiadau.** Caiff yr un nam ei drwsio dro ar ôl tro, ac nid oes neb yn berchen ar yr achos. Cysylltwch ailadroddiadau â chofnodion problemau a neilltuwch berchennog.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a chyfrif | Mae pobl yn anghytuno ar beth yw digwyddiad; daw cyfrifon o allforion ad hoc | Mae rhai timau'n hidlo ceisiadau o ddigwyddiadau; mae rheolau'n wahanol | Un diffiniad ysgrifenedig, hidlydd a rheol dad-ddyblygu ar gyfer pob tîm | Newidiadau diffiniad wedi'u logio a'u dangos ar siartiau tuedd; cyfran y cofnodion heb eu categoreiddio wedi'i holrhain | Diffiniadau wedi'u hadolygu gyda chyflenwyr a chwsmeriaid a'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Normaleiddio a dehongli | Cyfrifon crai yn unig | Data defnydd a ddefnyddir gan ychydig o wasanaethau | Mesur defnydd a enwir fesul gwasanaeth o ffynhonnell ar wahân | Siartiau rheoli gydag anodiadau a ddefnyddir mewn adolygiadau | Data defnydd, newid a digwyddiadau wedi'u cysylltu ar draws timau a chyflenwyr i esbonio galw |
| Arfer blaenoriaeth | Blaenoriaeth a ddewisir ar deimlad | Mae matrics yn bodoli mewn rhai timau | Un matrics gydag enghreifftiau, wedi'i ddangos lle dewisir blaenoriaeth | Cymysgedd a chyfradd ail-ddosbarthu wedi'u hadolygu a'u samplo'n fisol | Matrics wedi'i diwnio gyda chwsmeriaid a pherchnogion clinigol neu fusnes wrth i amodau newid |
| Ailadroddiadau a phatrymau | Ailadroddiadau a sylwir arnynt o'r cof | Rhestrau categorïau wedi'u hadolygu'n achlysurol | Cyfraddau ailadrodd ac ailagor wedi'u hadrodd yn fisol gyda ffenestr a nodir | Clystyrau sy'n ailadrodd wedi'u cysylltu â chofnodion problemau gyda pherchnogion a dyddiadau | Tynnu achosion ar draws timau a chyflenwyr wedi'i ariannu a'i olrhain i alw is |

## Rhestr wirio

- [ ] Mae diffiniad ysgrifenedig yn gwahanu digwyddiadau oddi wrth geisiadau, rhybuddion a phroblemau.
- [ ] Adroddir digwyddiadau rhiant a chofnodion cysylltiedig ar wahân.
- [ ] Priodolir pob digwyddiad i wasanaeth o'r catalog gwasanaethau.
- [ ] Mae gan bob gwasanaeth fesur defnydd a enwir o ffynhonnell heblaw'r offeryn digwyddiadau.
- [ ] Mae adroddiadau'n dangos y cyfrif crai, y gyfradd normaleiddiedig ac anodiadau ar gyfer rhyddhadau ac ymgyrchoedd.
- [ ] Defnyddir siart rheoli cyn i neb ymateb i newid mewn cyfaint wythnosol.
- [ ] Deillir blaenoriaeth o fatrics effaith a brys cyhoeddedig gydag enghreifftiau.
- [ ] Adolygir y cymysgedd blaenoriaeth a'r gyfradd ail-ddosbarthu gyda'i gilydd bob mis.
- [ ] Mae'r rhestr categorïau yn fyr, ac olrheinir cyfran y cofnodion "arall" a heb eu categoreiddio.
- [ ] Mae cyfraddau ailadrodd ac ailagor yn defnyddio ffenestri a nodir ac fe'u hadroddir ar wahân.
- [ ] Mae clystyrau sy'n ailadrodd wedi'u cysylltu â chofnodion problemau gyda pherchennog.
- [ ] Nid oes unrhyw adroddiad yn graddio asiantau unigol yn ôl cyfrifon digwyddiadau.

## Anogwyr AI

**Gwiriwch ddiffiniad o gyfaint digwyddiadau am amwysedd.**

```text
Rydym yn cyfrif cyfaint digwyddiadau ar gyfer [gwasanaeth neu dîm] o [offeryn
ITSM]. Ein hidlydd presennol yw [disgrifiwch fathau o gofnodion, statysau ac
eithriadau] a'n cyfnod yw [cyfnod]. Adolygwch y diffiniad am amwysedd, gan
gynnwys sut y caiff ceisiadau, dyblygion, tocynnau wedi'u huno a chofnodion a
ganslwyd eu trin. Awgrymwch reol ysgrifenedig glir a rhestr fer o enghreifftiau
a fyddai'n setlo anghytundebau. Peidiwch â dyfeisio gwerthoedd meincnod.
Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb i gwblhau'r diffiniad.
```

**Dyluniwch gyfradd digwyddiadau normaleiddiedig.**

```text
Ar gyfer y gwasanaeth [enw'r gwasanaeth] rwyf eisiau cyfradd digwyddiadau wedi'i
normaleiddio gan ddefnydd. Y mesurau defnydd sydd ar gael yw [rhestr, er enghraifft
defnyddwyr gweithredol, sesiynau, trafodion] o [ffynhonnell]. Cymharwch yr opsiynau,
dywedwch pa un sy'n gweddu orau a pham, a disgrifiwch beth allai ystumio pob un.
Cynigiwch sut i ddangos y cyfrif crai, y gyfradd ac anodiadau ar gyfer
[digwyddiadau megis rhyddhadau neu ymgyrchoedd] ar un siart. Peidiwch â dyfeisio
ffigurau na throthwyon. Rhestrwch eich rhagdybiaethau.
```

**Adolygwch fatrics effaith a brys.**

```text
Dyma ein matrics blaenoriaeth: [gludwch lefelau effaith, lefelau brys, a'r
blaenoriaethau canlyniadol], a dyma [nifer] o ddigwyddiadau enghreifftiol
dienw: [gludwch ddisgrifiadau byr]. Cymhwyswch y matrics i bob enghraifft, nodwch
ble y gallai dau ddarllenydd gyrraedd blaenoriaethau gwahanol, ac awgrymwch
eiriad neu enghreifftiau sy'n lleihau'r anghytundeb. Nodwch ffyrdd y gellid
chwarae'r matrics. Peidiwch â dyfeisio targedau ymateb na gwerthoedd meincnod.
Rhestrwch eich rhagdybiaethau.
```

**Dadansoddwch gategorïau ac ailadroddiadau am ymgeiswyr gwella.**

```text
Mae gennyf gofnodion digwyddiadau ar gyfer [cyfnod] gyda'r meysydd hyn: [rhestr
meysydd, er enghraifft gwasanaeth, categori, CI, amser agor, amser cau, baner
ailagor]. Disgrifiwch ddull i ddod o hyd i'r prif gategorïau, i wahanu
ailagoriadau oddi wrth ailadroddiadau gan ddefnyddio ffenestr o [ffenestr], ac i
ddewis [nifer] o ymgeiswyr ar gyfer ymchwilio i broblemau. Esboniwch sut i wirio am
gategorïau dal-y-cyfan a chofnodion bron yn ddyblyg. Peidiwch â dyfeisio patrymau
mewn data nad ydych wedi'i weld. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n diffinio metrig cysylltiedig a'r rheilen warchod a ddylai eistedd wrth ei ymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod pwnc metrig wedi'i olygu yn cadw ei glociau, ei ffyrdd o chwarae'r system a'i reiliau gwarchod yn gyflawn.

## Pwyntiau allweddol

- Mae cyfaint digwyddiadau yn adlewyrchu defnydd, newid ac ymddygiad adrodd cymaint ag ansawdd, felly normaleiddiwch ef ac anodwch ef.
- Darllenwch flaenoriaeth fel cymysgedd, deilliwch hi o fatrics effaith a brys cyhoeddedig, a gwyliwch y gyfradd ail-ddosbarthu.
- Adroddwch ddigwyddiadau rhiant a chofnodion cysylltiedig ar wahân fel nad yw un toriad yn edrych fel mis o waith arferol.
- Ailadroddiadau ac ailagoriadau yw'r signalau mwyaf defnyddiol, oherwydd eu bod yn pwyntio at achosion ac atgyweiriadau na ddaliodd.
- Cyfanredwch i wasanaethau a thimau, byth i asiantau unigol, a pharwch bob metrig â rheilen warchod.
- Defnyddiwch siartiau rheoli a golygon Pareto i benderfynu ble i edrych, yna rhowch berchennog a chapasiti i bob clwstwr.

## Cyfeiriadau a darllen pellach

1. Axelos (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Wheeler, D. J., *Understanding Variation: The Key to Managing Chaos*, 2nd edition, SPC Press, 2000.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. ISO/IEC 20000-1, *Information technology: Service management: Service management system requirements*, International Organization for Standardization.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [Help desk software](https://en.wikipedia.org/wiki/Help_desk_software).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
13. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
