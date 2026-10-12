# Metrigau rheoli problemau

**Mae metrigau rheoli problemau yn dangos a yw tîm yn dileu achosion ei ddigwyddiadau neu ddim ond yn trwsio eu symptomau, felly mesurwch faint o achosion a ganfuwyd, pa mor gyflym y'u trwsir am byth, ac a yw'r un digwyddiadau'n dychwelyd.**

## Crynodeb a chymhelliant

Gall tîm sy'n adfer gwasanaeth yn gyflym fod yn sownd ar felin draed o hyd. Mae'r un nam yn dychwelyd bob ychydig wythnosau, mae'r un bobl yn cael eu galw, ac mae'r rhifau digwyddiadau'n edrych yn iach am fod pob atgyweiriad yn gyflym. Rheoli problemau yw'r arfer sy'n camu oddi ar y felin draed. Mae'n edrych ar draws digwyddiadau, yn dod o hyd i'r achos sylfaenol, ac yn cael yr achos hwnnw wedi'i ddileu neu ei gyfyngu. Mae'r pwnc hwn yn ymdrin â'r rhifau sy'n dweud wrthych a yw'r gwaith hwnnw'n digwydd ac a yw'n gweithio.

Mae pedwar term yn cario'r pwnc. **Digwyddiad** yw tarfu anghynlluniedig ar wasanaeth neu ostyngiad yn ei ansawdd, fel y mae'r fframwaith [ITIL](https://en.wikipedia.org/wiki/ITIL) yn defnyddio'r gair (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau). **Problem** yw achos sylfaenol, neu achos a amheuir, un neu fwy o ddigwyddiadau. **Gwall hysbys** yw problem y deellir ei hachos ac y cofnodir datrysiad dros dro ar ei chyfer, wedi'i ddal mewn [cronfa ddata gwallau hysbys](https://en.wikipedia.org/wiki/Known_error_database) fel y gall y person nesaf sy'n cwrdd â'r symptom ddod o hyd iddo. Mae [datrysiad dros dro](https://en.wikipedia.org/wiki/Workaround) yn lleihau neu'n osgoi effaith digwyddiad neu broblem heb ddileu ei hachos. Yr atgyweiriad parhaol yw'r newid sy'n dileu'r achos.

Gwaith [dadansoddi gwraidd achos](https://en.wikipedia.org/wiki/Root_cause_analysis) yw dod o hyd i'r achos. Mae technegau cyffredin yn cynnwys y [pum pam](https://en.wikipedia.org/wiki/Five_whys), y [diagram Ishikawa](https://en.wikipedia.org/wiki/Ishikawa_diagram), a'r [siart Pareto](https://en.wikipedia.org/wiki/Pareto_chart), sy'n graddio achosion yn ôl pa mor aml y maent yn digwydd neu faint o niwed y maent yn ei wneud. Yn aml mae gan systemau cymhleth sawl achos cyfrannol a dim un troseddwr, felly mae cofnod problem da yn enwi'r ffactorau a fyddai, o'u dileu, yn atal yr ailadrodd, ac yn dweud pa mor hyderus yw'r tîm.

Mae'r metrigau'n bwysig oherwydd bod gan reoli problemau fagl adrodd adeiledig. Mae agor cofnod problem yn hawdd ac yn teimlo'n gynhyrchiol. Mae cau un yn hawdd hefyd, gan y gellir cau cofnod gyda nodyn. Nid yw'r naill ddigwyddiad na'r llall yn dangos bod unrhyw beth wedi gwella i ddefnyddwyr. Mae'r mesurau sy'n werth eu gwylio yn eistedd ymhellach i lawr yr afon: a yw digwyddiadau sy'n gysylltiedig â phroblem yn rhoi'r gorau i ailadrodd, a yw'r bobl ar alwad yn defnyddio gwallau hysbys mewn gwirionedd, a pha mor hir y mae achos a wnaed diagnosis ohono yn aros am ei atgyweiriad.

Mae'r golygon ITIL ac ystwyth yn cwrdd yma heb lawer o ffrithiant. Yn ITIL 4, mae rheoli problemau yn arfer o fewn y system gwerth gwasanaeth, yn agos at reoli digwyddiadau, galluogi newid, a rheoli gwybodaeth. Ei gyfatebydd ystwyth yw'r ffrwd o atgyweiriadau bach, ar sail tystiolaeth, sy'n llifo drwy [ôl-groniad](https://en.wikipedia.org/wiki/Backlog) tîm, yr ôl-sylliad sy'n gweld patrwm, a'r arferiad o drin gwaith dibynadwyedd fel gwaith cynnyrch cyffredin. Lle mae'r olwg ITIL yn pwysleisio cofnodion, perchnogaeth, a'r gwall hysbys, mae'r olwg ystwyth yn pwysleisio sypiau bach ac adborth cyflym. Mae'r ddau eisiau llai o ddigwyddiadau sy'n ailadrodd, a'r canlyniad hwnnw yw'r mesur i'w gadw o flaen pawb.

Nid yw'r pwnc hwn yn ailadrodd clociau digwyddiadau (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau) na'r mesurau digwyddiadau mawr (gweler pwnc 3.4, Metrigau digwyddiadau mawr), ac mae'n trin dilyniant adolygiadau dim ond lle mae'n bwydo problemau (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu). Ymdrinnir ag ôl-groniad gwallau hysbys a'r syniad ehangach o [ddyled dechnegol](https://en.wikipedia.org/wiki/Technical_debt) ym mhwnc 4.6, Dyled dechnegol a gwallau hysbys. Yma'r ffocws yw'r cofnod problem a'r canlyniadau y mae'n eu cynhyrchu. Mae mesurau adfer a methiant ar sail defnyddio yn byw ym mhwnc 2.8, Metrigau DORA.

## Egwyddorion allweddol

- **Mesurwch ailadrodd, nid gwaith papur.** Prawf rheoli problemau yw bod digwyddiadau cysylltiedig yn rhoi'r gorau i ddod yn ôl. Mae cyfrifon cofnodion a agorwyd ac a gaewyd yn disgrifio gweithgarwch ac yn dweud ychydig am y canlyniad.
- **Gwahanwch dair eiliad.** Mae canfod bod patrwm yn bodoli, nodi ei achos, a dileu'r achos yn ddigwyddiadau gwahanol gyda gwahanol glociau a gwahanol berchnogion. Mae eu huno yn cuddio ble mae'r oedi.
- **Cam yw datrysiad dros dro, nid diweddglo.** Cofnodwch ef, defnyddiwch ef, ac olrheiniwch am ba mor hir y mae'n parhau i fod yr unig amddiffyniad. Mae datrysiad dros dro sy'n byw am flynyddoedd yn ddyled â pherchennog na all neb ei enwi.
- **Rhowch yr atgyweiriad lle mae'r gwaith.** Fel arfer mae atgyweiriad parhaol yn glanio fel newid neu eitem ôl-groniad sy'n eiddo i dîm cynnyrch. Mesurwch ef yn llif y tîm ei hun, a'i ddangos i'r tîm sy'n berchen ar y gwasanaeth.
- **Cysylltwch ddigwyddiadau â phroblemau wrth y ffynhonnell.** Mae pob mesur yma yn dibynnu ar y cyswllt rhwng digwyddiad a phroblem. Os yw'r cyswllt yn wan, mae'r rhifau'n wan.
- **Ffafriwch ddosbarthiadau a charfannau i gyfartaleddau.** Mae hyd problemau yn hir ac yn wyrgam, ac mae ychydig o hen gofnodion yn dominyddu unrhyw gymedr (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).
- **Disgrifiwch dimau a gwasanaethau, byth bobl.** Priodweddau system yw problemau. Mae tabl o broblemau a gaewyd fesul dadansoddwr yn troi ymchwiliad yn gwota.

## Diffiniadau metrigau

Mae pob cloc yn defnyddio stampiau amser y cofnod problem, y cofnodion digwyddiadau cysylltiedig, a'r newid neu eitem ôl-groniad cysylltiedig. Oni bai bod rhes yn dweud fel arall, cyfrifir problemau yn ôl gwasanaeth ac yn ôl y tîm sy'n berchen arnynt, ac eithrir cofnodion wedi'u huno neu ddyblyg. Ffafrir canraddau i gymedrau ar gyfer pob hyd. Mae'r rhifau yn enghraifft y pwnc hwn yn enghreifftiol.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Problemau a agorwyd ac a gaewyd | Llif cofnodion problem i mewn i'r cyflwr agored ac allan ohono, yn ôl gwasanaeth | Cyfrif a agorwyd yn y cyfnod a chyfrif a gaewyd yn y cyfnod, pob un yn ôl cod cau (wedi'i drwsio, risg a dderbyniwyd, dyblyg, methu atgynhyrchu); dangosir dyblygion ond eir eu heithrio o'r cyfrif "wedi'i drwsio" | cyfrif fesul cyfnod | Cofnodion problem ITSM | Rheoli problemau | Cymryd i mewn a thrwybwn yr ôl-groniad | Misol |
| Oedran ôl-groniad problemau | Pa mor hir y mae problemau agored wedi bod yn aros | Ar gyfer pob problem agored, dyddiad y cipolwg llai dyddiad creu'r cofnod; adroddwch ganolrif a 85fed canradd problemau agored a'r hynaf, yn ôl blaenoriaeth | diwrnodau | Cofnodion problem ITSM | Rheoli problemau | Oedran eitem waith ar y bwrdd | Misol |
| Cyfradd cysylltu digwyddiad â phroblem | Cyfran y digwyddiadau sy'n pwyntio at broblem neu wall hysbys lle disgwylir un | Digwyddiadau yn y cyfnod â phroblem neu wall hysbys cysylltiedig / digwyddiadau yn y cyfnod â blaenoriaeth uchel neu uwch, neu a ailagorwyd, neu mewn categori sy'n ailadrodd; eithrir digwyddiadau a gaewyd fel camgymeriad defnyddiwr neu ddyblygion | canran | Cofnodion digwyddiadau a phroblemau ITSM | Rheoli digwyddiadau; rheoli problemau | Gweld patrymau mewn ôl-sylliad | Misol |
| Amser i wraidd achos | Pa mor hir y mae problem y gwnaed diagnosis ohoni yn ei gymryd i gyrraedd achos a gofnodwyd | Mae'r cloc yn dechrau pan grëir y cofnod problem ac yn stopio pan gofnodir yr achos ac ail berson wedi'i adolygu; eithrir problemau a gaewyd heb achos a'u cyfrif ar wahân; adroddwch ganolrif a 85fed canradd | diwrnodau | Cofnodion problem ITSM a'u llwybr archwilio | Rheoli problemau | Amserlen fyr (spike) neu ymchwiliad | Misol |
| Cyfradd ailddefnyddio gwallau hysbys | Pa mor aml y defnyddir gwall hysbys pan fo digwyddiad yn cyrraedd | Digwyddiadau a ddatryswyd gyda gwall hysbys cysylltiedig neu ei ddatrysiad dros dro / digwyddiadau yn y cyfnod y mae eu symptom yn cyfateb i wall hysbys a fodolai ar y pryd; eithrir digwyddiadau heb wall hysbys cyfatebol | canran | Cysylltiadau digwyddiadau ITSM; defnydd erthyglau gwybodaeth | Rheoli gwybodaeth; rheoli problemau | Defnydd llawlyfr gweithredu neu lyfr chwarae'r tîm | Misol |
| Amser i atgyweiriad parhaol | Pa mor hir y mae problem yn agored i niwed o ddiagnosis hyd at redeg yr atgyweiriad mewn cynhyrchu | Mae'r cloc yn dechrau pan gofnodir yr achos ac yn stopio pan weithredir a chadarnheir y newid atgyweirio cysylltiedig; eithrir problemau a gaewyd fel risg a dderbyniwyd a'u cyfrif ar wahân; adroddwch ganolrif a 85fed canradd | diwrnodau | Cofnodion problem; cofnodion newid neu ddigwyddiadau defnyddio piblinell | Rheoli problemau; galluogi newid | Amser cylch yr eitem atgyweirio | Misol |
| Cyfradd ailadrodd ar ôl atgyweirio | Cyfran y problemau a drwsiwyd y dychwelodd eu symptomau cysylltiedig | Problemau a gaewyd fel rhai wedi'u trwsio mewn chwarter carfan gyda digwyddiad cyfatebol newydd o fewn 90 diwrnod i'r atgyweiriad fynd yn fyw / problemau a gaewyd fel rhai wedi'u trwsio yn y chwarter hwnnw; mae'r ffenestr 90 diwrnod yn enghraifft ac fe'i datgenir ar y siart | canran | Cofnodion digwyddiadau a phroblemau ITSM; digwyddiadau defnyddio | Rheoli problemau; gwelliant parhaus | Cyfradd diffygion a ddihangodd neu atchweliad | Chwarterol |
| Cyfran datrysiad dros dro yn unig | Cyfran y problemau hysbys a warchodir gan ddatrysiad dros dro yn unig | Problemau agored yn y cyflwr gwall hysbys heb atgyweiriad wedi'i drefnu / problemau agored yn y cyflwr gwall hysbys; dangosir problemau risg a dderbyniwyd â pherchennog a enwir a dyddiad adolygu fel grŵp ar wahân | canran | Cofnodion problem ITSM | Rheoli problemau; rheoli risg | Cofrestr dyled dechnegol | Misol |

Enghreifftiau yw'r ffenestr 90 diwrnod, y rheol baru ar gyfer symptomau, a'r diffiniad o "disgwylir" yn y gyfradd cysylltu. Mae tîm yn dewis gwerthoedd sy'n ffitio ei wasanaethau ac yn eu hysgrifennu yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau). Mae cyfrif problemau a gaewyd fel "wedi'u trwsio" ar wahân i godau cau eraill yn cadw'r pâr a agorwyd a gaewyd yn onest.

## Argymhellion

### Penderfynwch beth sy'n cyfrif fel problem

**1. Agorwch broblem ar sail tystiolaeth, a dywedwch beth yw'r dystiolaeth.** Sbardunau da yw digwyddiadau sy'n ailadrodd yr un symptom, digwyddiad mawr ag achos anhysbys, tuedd a ganfuwyd mewn adolygiad, neu risg a welwyd cyn unrhyw ddigwyddiad. Ysgrifennwch y sbardun ar y cofnod, er enghraifft "pum digwyddiad mewn chwe wythnos wedi'u cysylltu â'r un gwasanaeth". Os yw pob digwyddiad anarferol yn dod yn gofnod problem, mae'r ôl-groniad yn llenwi â sŵn ac nid oes neb yn ei ddarllen.

**2. Defnyddiwch set fach, a rennir o godau cau.** Mae wedi'i drwsio, risg a dderbyniwyd, dyblyg, methu atgynhyrchu, ac wedi'i uno yn ddigon i'r rhan fwyaf o dimau. Mae gan bob cod ystyr un frawddeg a pherchennog a gaiff ei ddefnyddio. Mae'r cymysgedd o godau cau yn fwy addysgiadol na'r cyfrif a gaewyd, oherwydd ei fod yn dangos faint o waith a ddilëodd achos a faint a ddaeth i ben heb newid.

### Cysylltwch ddigwyddiadau a phroblemau wrth y ffynhonnell

**3. Gwnewch y cyswllt yn gam wrth gau digwyddiad.** Gofynnwch i'r datryswr gysylltu'r digwyddiad â phroblem, gwall hysbys, neu "dim wedi'i ganfod" cyn ei gau. Cynigiwch awgrymiadau paru o'r offeryn pan fo'n gallu, a gadewch i berson benderfynu. Mae cyswllt a wneir wythnosau'n ddiweddarach mewn ymarfer swmp yn annibynadwy (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

**4. Cytunwch sut y paru symptomau.** Mae ailadrodd yn dibynnu ar benderfynu pryd mae dau ddigwyddiad yn "yr un peth". Mae tacsonomeg achos a symptom fer, gyda diffiniadau ac enghreifftiau, yn well na thestun rhydd. Adolygwch sampl o barau bob chwarter, gan fod camgyfateb i'r ddau gyfeiriad yn gogwyddo'r gyfradd ailadrodd.

**5. Gadewch i adolygu patrymau fwydo'r rhestr broblemau.** Mae adolygiad misol o gategorïau digwyddiadau, yn ôl gwasanaeth ac yn ôl [siart Pareto](https://en.wikipedia.org/wiki/Pareto_chart), yn dangos pa ychydig achosion sy'n cynhyrchu'r rhan fwyaf o'r boen. Defnyddiwch yr adolygiad i agor problemau ac i'w blaenoriaethu, ac anfonwch achosion sy'n ailadrodd o adolygiadau digwyddiadau mawr i'r un rhestr (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau).

### Mesurwch y tri oedi

**6. Amserwch y camau ar wahân.** Mesurwch o greu'r cofnod i'r achos a gofnodwyd, ac o'r achos a gofnodwyd i'r atgyweiriad yn rhedeg mewn cynhyrchu. Mae'r oedi cyntaf yn pwyntio at gapasiti ymchwilio, mynediad at ddata, a sgil. Mae'r ail yn pwyntio at flaenoriaethu, y broses newid, a gwaith nodweddion sy'n cystadlu. Mae un "amser i gau problem" yn eu cymysgu ac yn rhoi dim cam gweithredu clir i neb.

**7. Adroddwch yr hen rai.** Dangoswch ganolrif a 85fed canradd oedran problemau agored, a rhestrwch yr hynaf yn ôl gwasanaeth. Bydd ychydig o gofnodion sy'n flynyddoedd oed yn symud cymedr ac yn dweud ychydig wrthych, tra bod y rhestr hynaf yn gwahodd penderfyniad: trwsio, derbyn y risg gyda pherchennog a enwir a dyddiad adolygu, neu gau gyda rheswm.

### Rhowch yr atgyweiriad yn y llif arferol

**8. Trinwch atgyweiriad parhaol fel eitem ôl-groniad gyda pherchennog a dyddiad.** Cysylltwch y broblem â'r newid neu'r eitem waith sy'n cario'r atgyweiriad, a dangoswch yr atgyweiriad ar yr un bwrdd â gwaith nodweddion. Blaenoriaethwch gyda rheol y cytunwyd arni, megis pwyso cost digwyddiadau sy'n ailadrodd yn erbyn yr ymdrech i'w trwsio. Lle mae atgyweiriad angen newid, dylai'r llwybr newid safonol fod yn gyflym ar gyfer cywiriadau risg isel (gweler pwnc 4.3, Metrigau galluogi newid).

**9. Gofynnwch am y datrysiad dros dro a'r dyddiad gadael gyda'i gilydd.** Mae datrysiad dros dro yn prynu amser. Cofnodwch ef fel gwall hysbys, profwch y gall y tîm ar alwad ddod o hyd iddo a'i redeg, a gosodwch ddyddiad adolygu ar gyfer yr atgyweiriad. Mae'r gyfran datrysiad dros dro yn unig wedyn yn dod yn rhestr o benderfyniadau, nid pentwr tawel o ddyled (gweler pwnc 4.6, Dyled dechnegol a gwallau hysbys).

### Gwiriwch fod atgyweiriadau wedi gweithio

**10. Dilynwch bob atgyweiriad gyda ffenestr ailadrodd.** Unwaith y bo atgyweiriad yn fyw, gwyliwch am ddigwyddiadau cyfatebol am ffenestr a nodwyd, ac adroddwch gyfran yr atgyweiriadau a ddaliodd yn ôl carfan chwarterol. Ailadrodd yw'r peth agosaf sydd gan yr arfer hwn at fesur canlyniad. Os yw'n uchel, gofynnwch a ddaethpwyd o hyd i'r achos neu dim ond cyfrannydd, ac ailagorwch y dadansoddiad.

**11. Mesurwch ailddefnyddio gwallau hysbys lle mae ymatebwyr yn gweithio.** Cyfrwch pa mor aml y defnyddir gwall hysbys neu ei ddatrysiad dros dro pan fo digwyddiad cyfatebol yn cyrraedd. Mae cyfradd ailddefnyddio isel gyda llawer o wallau hysbys fel arfer yn golygu bod y cofnodion yn anodd dod o hyd iddynt, wedi dyddio, neu wedi'u hysgrifennu ar gyfer y dadansoddwr yn lle'r ymatebwr. Trwsiwch yr erthygl a'i lleoliad cyn ychwanegu mwy ohonynt (gweler pwnc 3.6, Metrigau rheoli gwybodaeth).

### Cadwch y rhifau'n onest

**12. Dangoswch garfannau a rhybuddion wrth ymyl pob siart.** Cofnodwch y diffiniadau, cymysgedd codau cau, ac unrhyw newid rheol ar y siart ei hun. Mae carfannau chwarterol o broblemau a drwsiwyd yn dangos ailadrodd heb gymysgu gwaith hen a newydd. Parwch bob cyfrif â mesur canlyniad fel nad yw unrhyw rif yn sefyll ar ei ben ei hun (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Problemau a agorwyd ac a gaewyd | Agor llawer o gofnodion dibwys; hollti un broblem yn sawl un; cau cofnodion fel dyblygion neu "methu atgynhyrchu" i glirio'r rhestr | Cymysgedd codau cau; cyfradd ailadrodd ar ôl atgyweirio; sampl o gofnodion caeedig a ddarllenir bob chwarter |
| Oedran ôl-groniad problemau | Cau'r cofnodion hynaf heb atgyweiriad; ailagor fel cofnod newydd i ailosod y cloc; ail-ddosbarthu problem fel cais | Cysylltu cofnodion newydd â'u gwreiddiol ac adrodd oedran o'r cofnod cyntaf; rhestr o gau yn ôl rheswm; adolygu risgiau a dderbyniwyd |
| Cyfradd cysylltu digwyddiad â phroblem | Cysylltu pob digwyddiad â phroblem ddal-y-cyfan amwys i godi'r gyfradd | Cyfran y cysylltiadau sy'n pwyntio at y pum problem fwyaf; sampl o gysylltiadau wedi'u gwirio am gyfatebiaeth go iawn; ailadrodd symptomau cysylltiedig |
| Amser i wraidd achos | Cofnodi achos cyflym, arwynebol i stopio'r cloc; enwi "camgymeriad dynol"; hepgor yr ail adolygydd | Cyfradd ailadrodd ar ôl atgyweirio; y dacsonomeg achos gyda "camgymeriad dynol" heb ei dderbyn ar ei ben ei hun; adolygu sampl o achosion yn erbyn y dystiolaeth |
| Cyfradd ailddefnyddio gwallau hysbys | Cyfrif cyswllt a ychwanegwyd ar ôl i'r digwyddiad gau; ychwanegu gwall hysbys at bob digwyddiad gwasanaeth | Yr amser rhwng cau'r digwyddiad a'r cyswllt; adborth ymatebwyr ar ba un a helpodd y cofnod; adolygu cofnodion na ddefnyddiwyd mewn 90 diwrnod |
| Amser i atgyweiriad parhaol | Marcio'r newid fel un wedi'i weithredu cyn gwirio'r atgyweiriad; cau fel risg a dderbyniwyd i osgoi'r gwaith | Cyfradd ailadrodd ar ôl atgyweirio; rhestr risg a dderbyniwyd gyda pherchennog a dyddiad adolygu; cam gwirio cyn i'r cloc stopio |
| Cyfradd ailadrodd ar ôl atgyweirio | Diffinio symptomau'n gul fel nad yw ailadroddiadau'n cyfateb; ehangu'r ffenestr gau fel bod atgyweiriadau'n syrthio i garfannau cynharach; oedi cysylltu | Tacsonomeg achos wedi'i hadolygu gan rywun y tu allan i'r tîm perchnogol; cyfradd cysylltu digwyddiadau; ffenestr sefydlog wedi'i datgan ymlaen llaw |
| Cyfran datrysiad dros dro yn unig | Trefnu atgyweiriad dalfan heb ddyddiad go iawn; symud problemau i risg a dderbyniwyd; gostwng blaenoriaeth y broblem | Oedran atgyweiriadau wedi'u trefnu sydd wedi llithro; rhestr risgiau a dderbyniwyd wedi'i hadolygu gyda pherchennog gweithredol a enwir; cost digwyddiadau sy'n ailadrodd fesul problem |

Mae darlleniad iach yn edrych yn dawel ac ychydig yn ddiflas. Mae cyfrifon a agorwyd a gaewyd yn fras mewn cam, mae gan y problemau agored hynaf bob un benderfyniad a gofnodwyd, mae cyfran yr atgyweiriadau a ddaliodd yn uchel ac mae llinellau'r carfannau yn gyson, ac mae'r bobl sy'n cwrdd â'r symptomau yn defnyddio gwallau hysbys. Y patrwm rhybudd yw cyfrif caeedig hir, taclus ochr yn ochr â digwyddiadau sy'n dal i ddychwelyd. Pan fo'r rhifau gweithgarwch yn edrych yn ardderchog a defnyddwyr yn dal i gwrdd â'r un nam, ymddiriedwch yn y defnyddwyr.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Cofnodion problem ffurfiol ar gyfer digwyddiadau sy'n ailadrodd ac yn fawr | Perchennog clir, hanes, a chyswllt ag atgyweiriadau; cefnogi archwilio | Gorbenion proses; gall cofnodion fynd yn hen |
| Trwsio achosion o fewn ôl-groniad y tîm heb gofnod problem | Cyflym, ysgafn, agos at y gwaith | Mae patrymau traws-dîm yn mynd heb eu gweld; dim gwall hysbys a rennir |
| Codau cau caeth a charfannau chwarterol | Golwg onest ar ganlyniadau; gwrthsefyll cyfrifon taclus | Arafach i'w ddarllen; angen disgyblaeth wrth fewnbynnu data |
| Cyfrif problemau a gaewyd fel targed | Hawdd ei esbonio a'i siartio | Gwahodd cau er mwyn y cyfrif; gwobrwyo problemau bach |
| Olrhain ailadrodd ar gyfer problemau a drwsiwyd | Y mesur agosaf sydd ar gael a weithiodd | Angen paru symptomau da a ffenestr ddigon hir |
| Olrhain ailddefnyddio ar gyfer gwallau hysbys | Dangos a yw'r wybodaeth yn helpu ymatebwyr | Yn dibynnu ar ymatebwyr yn cysylltu'r cofnod; gellir ei chwarae |

Dylai timau sy'n trwsio achosion yn gyflym o fewn eu hôl-groniad eu hunain barhau i gofnodi'r achos lle gall y sefydliad ehangach ei weld, fel bod tîm arall sy'n cwrdd â'r un symptom yn elwa. Buddsoddwch yn gyntaf yn y cyswllt rhwng digwyddiadau a phroblemau ac yn y ffenestr ailadrodd. Y ddau ddarn hynny sy'n gwneud pob mesur arall yn ddehongladwy.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa dri digwyddiad a atgyweiriwyd gennym amlaf y chwarter diwethaf, a beth a'n rhwystrodd rhag trwsio eu hachos?**
Rhestrwch y digwyddiadau sy'n ailadrodd o'r ddesg gwasanaeth neu'r offeryn digwyddiadau a'u trefnu yn ôl nifer yr achosion. Ar gyfer pob un, gofynnwch beth oedd y rhwystr: dim amser ymchwilio, dim achos y cytunwyd arno, atgyweiriad yn cystadlu â nodweddion, neu atgyweiriad sydd angen tîm arall. Dylai'r hwylusydd chwilio am rwystrau sy'n ailadrodd ar draws y tri, oherwydd eu bod yn pwyntio at atgyweiriad system yn hytrach nag un technegol.

**2. Pan fyddwn yn cysylltu digwyddiad â phroblem, pwy sy'n ei wneud, pryd, a sut ydym ni'n gwybod mai dyma'r broblem gywir?**
Cerddwch drwy un digwyddiad diweddar o'i gau i'r cyswllt. Nodwch a wneir y cyswllt yn ystod y digwyddiad, wrth gau, neu mewn glanhau diweddarach. Adolygwch sampl fach o gysylltiadau gyda'ch gilydd am gyfatebiaethau go iawn. Cytunwch ar un newid sy'n gwneud y cyswllt yn haws neu'n fwy dibynadwy.

**3. Pa mor hir y mae achos a wnaed diagnosis ohono yn aros am ei atgyweiriad, a phwy sy'n penderfynu'r drefn?**
Cymerwch y problemau ag achos a gofnodwyd ac edrychwch ar yr amser ers diagnosis. Gofynnwch pwy sy'n eu blaenoriaethu a pha reol y maent yn ei defnyddio. Mae'r drafodaeth yn aml yn dangos mai ciw o flaen yr ôl-groniad cynnyrch yw'r oedi yn hytrach nag anhawster technegol. Cytunwch sut y cymherir atgyweiriadau problemau â gwaith nodweddion.

**4. Beth yw ein datrysiadau dros dro hynaf, a beth fyddem yn ei golli pe baem yn eu cadw am flwyddyn arall?**
Enwch y tri datrysiad dros dro hiraf eu hoes a beth maent yn ei gostio o ran ymdrech â llaw, risg, a gwybodaeth y bobl sy'n dal i'w cofio. Gofynnwch beth fyddai'n digwydd pe bai'r person sy'n gwybod y datrysiad dros dro i ffwrdd. Penderfynwch ar gyfer pob un a ddylid ei drwsio, derbyn y risg gyda pherchennog a dyddiad adolygu, neu ymddeol y gwasanaeth.

**5. Os yw problem a drwsiwyd yn dod yn ôl, a ydym yn darganfod, a pha mor gyflym?**
Gofynnwch sut y byddai symptom sy'n dychwelyd yn cael ei sylwi a phwy fyddai'n ailagor y dadansoddiad. Trafodwch a yw'r ffenestr ailadrodd yn ddigon hir ar gyfer y math o fethiant dan sylw. Dylai'r hwylusydd helpu'r grŵp i gytuno ar ffenestr a rheol baru, a phenderfynu pa dîm sy'n adolygu'r parau fel nad yw'r tîm perchnogol yn marcio ei waith ei hun.

**6. A yw'r bobl ar alwad yn defnyddio ein gwallau hysbys, a beth fyddai'n gwneud iddynt estyn amdanynt?**
Gofynnwch i ymatebwyr pryd y buont yn chwilio am wall hysbys ddiwethaf a beth a ddaethant o hyd iddo. Edrychwch ar ble mae'r cofnodion yn byw, sut y'u teitlir, ac a ydynt yn dweud beth i'w wneud yn gyntaf. Dewiswch un cofnod i'w ailysgrifennu gydag ymatebwr a'i brofi yn yr wythnos ar alwad nesaf.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn berchen ar y rhan fwyaf o atgyweiriadau parhaol, ac yn teimlo tyniad gwaith nodweddion. Maent yn elwa o weld cost digwyddiad nam sy'n ailadrodd wrth ymyl yr ymdrech i'w drwsio, ac o gael lle clir ar gyfer eitemau atgyweirio yn yr ôl-groniad. Dylent wrthsefyll trin gwaith problemau fel ymyriad a neilltuo cyfran weladwy o gapasiti ar ei gyfer yn lle hynny. Mae'r ôl-sylliad yn lle naturiol i weld patrymau ac agor problemau (gweler pwnc 2.1, Mesurau llif).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn gweld y symptomau sy'n ailadrodd gyntaf ac yn cario'r gost mewn galwadau a gwaith â llaw. Maent yn cadw'r cofnodion problemau a gwallau hysbys, yn rhedeg yr adolygiad patrymau, ac yn gwirio bod cysylltiadau'n cael eu gwneud. Eu risg yw gwario ymdrech ar gofnodion yn lle dileu achosion. Dylent gadw'r codau cau yn fach, gwneud y gwall hysbys y peth cyntaf y mae ymatebwr yn ei weld, a throsglwyddo atgyweiriadau i'r tîm perchnogol gyda'r dystiolaeth ynghlwm.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn penderfynu a yw gwaith dibynadwyedd yn ennill yn erbyn nodweddion, ac yn gosod y cymhellion ar gyfer yr hyn a gofnodir. Dylent ofyn am ailadrodd yn ôl carfan ac am y problemau agored hynaf cyn gofyn am gyfrifon, a thrin risg a dderbyniwyd fel penderfyniad sydd angen perchennog a enwir a dyddiad adolygu. Mae adrodd ôl-groniad sy'n disgyn heb ailadrodd yn gwobrwyo cau. Dylai llywodraethu edrych ar dueddiadau a phenderfyniadau, nid ar dabl cynghrair o dimau (gweler pwnc 4.6, Dyled dechnegol a gwallau hysbys).

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn barnu rheoli problemau yn ôl un peth: a yw'r un peth yn dal i fynd o'i le. Nid ydynt yn gweld cofnodion problemau, ac nid ydynt yn poeni faint a gaewyd. Lle mae cytundebau'n caniatáu, dywedwch wrth gwsmeriaid am broblem hysbys, y datrysiad dros dro, a'r dyddiad y disgwylir atgyweiriad, yna adroddwch yn ôl pan fydd yn glanio. Mae atgyweiriad a gyhoeddir ac a gyflwynir yn adeiladu mwy o ymddiriedaeth nag un tawel.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn cefnogi rhaglen amserlennu glinigol a ddefnyddir gan wardiau a chlinigau cleifion allanol. Mae tîm cynnyrch yn adeiladu ac yn rhedeg y rhaglen, mae tîm seilwaith yn rhedeg y platfform, ac mae desg gwasanaeth yn derbyn galwadau. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mewn adolygiad chwarterol mae pennaeth yr adran yn sylwi bod y dangosfwrdd problemau yn edrych yn ardderchog: 46 problem wedi'u cau yn erbyn 31 wedi'u hagor, a'r broblem agored hynaf yn 140 diwrnod oed. Mae rheolwyr wardiau yn dal i gwyno bod y sgrin amserlennu yn rhewi wrth newid sifft. Mae perchennog y gwasanaeth yn gofyn am y gyfradd cysylltu digwyddiad â phroblem a'r gyfradd ailadrodd ar ôl atgyweirio, nad ydynt ar y dangosfwrdd eto.

Mae'r data yn dweud stori wahanol. Mae cymysgedd y codau cau yn dangos bod 22 o'r 46 cau yn "methu atgynhyrchu" neu'n "ddyblyg". Y gyfradd cysylltu ar gyfer digwyddiadau blaenoriaeth uchel yw 38 y cant. Logiwyd y digwyddiadau rhewi mewn pedwar categori, felly nid oedd patrwm yn weladwy. Unwaith y cysylltwyd sampl o 30 digwyddiad eto â llaw, roedd 17 ohonynt yn pwyntio at un achos: clo cronfa ddata a ddaliwyd gan swydd nosol a oedd yn gor-redeg i sifft y bore. Roedd ailadrodd ar gyfer problemau a drwsiwyd yn y chwarter blaenorol yn 27 y cant, yn uwch nag yr oedd neb yn ei ddisgwyl.

Mae'r tîm yn gwneud tri phenderfyniad. Yn gyntaf, mae'r dacsonomeg achos a symptom yn ennill cofnod "rhewi amserlennu", ac mae cysylltu problem neu "dim wedi'i ganfod" yn dod yn gam gofynnol wrth gau digwyddiad. Yn ail, mae problem y swydd nosol yn symud o ôl-groniad y seilwaith i fwrdd y tîm cynnyrch gyda pherchennog a dyddiad targed, ac mae datrysiad dros dro (ailgychwyn wedi'i drefnu ar ôl y swydd) yn cael ei gofnodi fel gwall hysbys a'i brofi gyda'r ddesg gwasanaeth. Yn drydydd, mae'r dangosfwrdd yn disodli'r cyfrif a gaewyd â thri rhif: cyfran yr atgyweiriadau a ddaliodd ar ôl 90 diwrnod, canolrif a 85fed canradd yr amser o'r achos a gofnodwyd i'r atgyweiriad, a'r problemau agored hynaf gyda'u penderfyniadau.

Wyth wythnos yn ddiweddarach caiff y clo ei ddileu gan newid i'r swydd. Mae digwyddiadau yn y categori rhewi yn disgyn o tua naw y mis i ddau, ac mae ailddefnyddio gwallau hysbys yn codi i 71 y cant ar gyfer y symptomau sy'n weddill, yn bennaf oherwydd bod y ddesg gwasanaeth bellach yn dod o hyd i'r cofnod ailgychwyn. Y risg chwarae'r system a ddaliodd y tîm oedd yn ei hen arfer ei hun: cau cofnodion fel "methu atgynhyrchu" pan fo digwyddiad yn syrthio y tu allan i oriau gwaith. Mae cymysgedd y codau cau, y sampl o gofnodion caeedig a ddarllenir bob chwarter, a'r garfan ailadrodd bellach yn gweithredu fel rheiliau gwarchod. Ni raddir neb, ac mae'r adolygiad yn rhestru gwasanaethau a phenderfyniadau, nid dadansoddwyr.

## Y golwg fesul sector

**Busnes newydd.** Anaml y mae proses broblemau ar wahân. Mae'r tîm yn trwsio achosion yn uniongyrchol, a'r risg yw nad oes neb yn cofio pam. Cadwch restr un dudalen o ddigwyddiadau sy'n ailadrodd a'u hachosion, cysylltwch atgyweiriadau â'r traciwr materion, ac adolygwch y rhestr yn fisol. Mesurwch ailadrodd ac oedran yr eitemau hynaf; hepgorwch godau cau ffurfiol nes bod y tîm yn tyfu.

**Busnes bach.** Gall un person TG neu ddarparwr gwasanaeth a reolir redeg popeth. Gofynnwch i'r darparwr am ei gofnodion problemau a'r categorïau digwyddiadau y tu ôl iddynt, ac am y diffiniad ysgrifenedig o "wedi'i ddatrys". Mae rhestr fer o'r pum mater sy'n ailadrodd uchaf, gyda pherchennog a enwir a dyddiad ar gyfer pob un, yn perfformio'n well nag offeryn trwm. Allforiwch y cofnodion o bryd i'w gilydd i osgoi cloi i mewn.

**Menter fawr.** Mae llawer o wasanaethau a chyflenwyr yn creu'r angen mwyaf am ddiffiniadau a rennir. Cytunwch ar y dacsonomeg achos, y codau cau, a'r ffenestr ailadrodd ar draws timau, enwch berchnogion problemau yn ôl gwasanaeth, ac adroddwch yn ôl gwasanaeth a charfan. Lle mae cyflenwr yn dal atgyweiriad, olrheiniwch ymateb y cyflenwr yn erbyn y cytundeb (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau) a dwyswch drwy lwybr dogfenedig.

**Llywodraeth a'r sector cyhoeddus.** Gall archwilio, rheoli newid a chaffael ymestyn y llwybr o achos i atgyweiriad, felly dylai'r cloc amser-i-atgyweirio ddangos ble mae'r oedi: ymchwilio, cymeradwyo, caffael, neu drefnu. Mae angen perchnogion cofnodedig a dyddiadau adolygu ar risgiau a dderbyniwyd a all wrthsefyll archwiliad. Mae rheolau cadw a phreifatrwydd yn berthnasol i gofnodion digwyddiadau a phroblemau, yn enwedig lle mae data clinigol neu ddinasyddion yn ymddangos ynddynt.

## Yr achos busnes: cymhellion, ROI a TCO

Mae gan y gost dair rhan. Y gyntaf yw amser ymchwilio: pobl â'r sgiliau a'r mynediad i ddadansoddi digwyddiadau, sy'n cystadlu â'u gwaith arall. Yr ail yw'r atgyweiriad ei hun, a gyflwynir drwy'r ôl-groniad a'r broses newid. Y drydedd yw cost cofnodi ac adrodd: cysylltu digwyddiadau, cadw tacsonomeg, rhedeg yr adolygiad patrymau, a chynnal y gronfa ddata gwallau hysbys. Amser pobl yw'r costau hyn gan mwyaf, felly cyfrwch oriau.

Mae'r elw'n ymddangos fel digwyddiadau sy'n rhoi'r gorau i ailadrodd, llai o alwadau a llai o ymdrech datrysiad dros dro â llaw, trin digwyddiadau byrrach am fod ymatebwyr yn dod o hyd i wallau hysbys, a llai o ddwysáu at beirianwyr. Nid oes unrhyw ffigur cyffredinol yn berthnasol, felly amcangyfrifwch eich un eich hun. Ar gyfer digwyddiad sy'n ailadrodd, lluoswch yr achosion y flwyddyn â'r ymdrech drin gyfartalog ac amcangyfrif o effaith busnes fesul achos, yna cymharwch hynny â'r ymdrech i'w drwsio. Adolygwch yr amcangyfrif gyda pherchennog y gwasanaeth, datganwch ef fel amcangyfrif, a'i ailedrych ar ôl i'r ffenestr ailadrodd ddangos beth ddigwyddodd. Mae rheoli problemau yn talu ffordd orau ar yr ychydig achosion sy'n cynhyrchu'r rhan fwyaf o'r llwyth digwyddiadau, y mae'r olwg Pareto yn dod o hyd iddynt yn gyflym.

## Gwrthbatrymau a maglau

- **Cau fel targed.** Mae nod ar gyfer problemau a gaewyd yn gwobrwyo cofnodion dibwys a chau cynnar. Adroddwch fesurau canlyniad yn gyntaf a dangoswch gymysgedd y codau cau.
- **Cofnodion problemau fel mynwent.** Mae cofnodion yn eistedd ar agor heb berchennog, dyddiad, na phenderfyniad. Adolygwch y rhestr hynaf yn ôl amserlen a mynnwch benderfyniad ar gyfer pob eitem.
- **Stopio ar "gamgymeriad dynol".** Mae'n enwi pwy gyffyrddodd â'r system ac nid pam y caniataodd y system y methiant. Derbyniwch achos dim ond pan fo'n enwi cyflwr y gellir ei newid.
- **Peidio â thrwsio dim nes bod y gwraidd achos yn sicr.** Efallai nad oes gan fethiannau cymhleth un achos. Cymhwyswch ddatrysiad dros dro a'r atgyweiriad a gefnogir orau, yna gwyliwch am ailadrodd.
- **Datrysiadau dros dro heb allanfa.** Mae datrysiad dros dro heb ddyddiad adolygu yn dod yn barhaol. Cofnodwch berchennog a dyddiad pan grëir y gwall hysbys.
- **Cysylltiadau digwyddiad gwan.** Mae cysylltiadau coll neu flêr yn gwneud ailadrodd yn anweledig. Gwnewch gysylltu yn rhan o gau digwyddiad a samplwch y cysylltiadau.
- **Gwaith problemau y tu allan i'r ôl-groniad.** Mae atgyweiriadau sy'n byw mewn ciw ar wahân yn aros am byth. Rhowch yr eitem atgyweirio ar fwrdd y tîm perchnogol a'i blaenoriaethu yn erbyn nodweddion.
- **Cymharu dadansoddwyr neu dimau ar gofnodion a gaewyd.** Mae'n gwobrwyo gwasanaethau hawdd ac yn gwahodd chwarae'r system. Cymharwch wasanaethau dros amser yn erbyn eu hanes eu hunain, a darllenwch y carfannau.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Adnabod problemau a chysylltu | Problemau'n cael eu hagor ar ôl toriadau mawr yn unig; dim cysylltiadau digwyddiad | Mae rhai timau'n cysylltu digwyddiadau; mae categorïau'n wahanol rhwng timau | Tacsonomeg a chodau cau a rennir; cyswllt a wneir wrth gau digwyddiad | Cyfradd cysylltu ac ansawdd paru wedi'u samplu a'u hadolygu | Patrymau'n cael eu canfod ar draws timau a chyflenwyr, gyda gwallau hysbys a rennir |
| Gwraidd achos a gwallau hysbys | Achos wedi'i gofnodi mewn testun rhydd, os o gwbl | Gwallau hysbys wedi'u cadw gan rai timau mewn gwahanol leoedd | Un gronfa ddata gwallau hysbys; adolygiad ail berson o achosion | Amser i wraidd achos ac ailddefnyddio gwallau hysbys wedi'u tueddu a'u gweithredu arnynt | Ymatebwyr, cyflenwyr, a chwsmeriaid yn cyfrannu at gofnodion a rennir ac yn eu defnyddio |
| Cyflawni atgyweiriadau | Atgyweiriadau'n digwydd pan fo gan rywun amser | Atgyweiriadau wedi'u holrhain yn rhestr y tîm ei hun | Atgyweiriad wedi'i gysylltu ag eitem ôl-groniad neu newid gyda pherchennog a dyddiad | Amser i atgyweiriad parhaol wedi'i adolygu, gyda chapasiti wedi'i gadw ar ei gyfer | Blaenoriaeth atgyweirio wedi'i gosod ar y cyd â mapiau ffordd cynnyrch a chyflenwyr |
| Canlyniad a dysgu | Cyfrifon cofnodion wedi'u hadrodd | Oedran ôl-groniad wedi'i adrodd mewn rhai adolygiadau | Ailadrodd ar ôl atgyweirio a chyfran datrysiad dros dro yn unig wedi'u hadrodd gyda diffiniadau | Carfannau wedi'u paru â rheiliau gwarchod a'u defnyddio mewn penderfyniadau ariannu | Diffiniadau wedi'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau; gwelliant yn arferol |

## Rhestr wirio

- [ ] Mae'r gofrestr metrigau yn diffinio problem, gwall hysbys, a phob cod cau.
- [ ] Mae cau digwyddiad yn cynnwys cyswllt â phroblem, gwall hysbys, neu "dim wedi'i ganfod".
- [ ] Mae tacsonomeg achos a symptom yn bodoli, gyda diffiniadau ac enghreifftiau.
- [ ] Mae gan bob problem berchennog, sbardun, a dyddiad penderfyniad.
- [ ] Mesurir amser i wraidd achos ac amser i atgyweiriad parhaol ar wahân, gyda chanraddau.
- [ ] Mae pob atgyweiriad parhaol wedi'i gysylltu ag eitem ôl-groniad neu newid gyda pherchennog.
- [ ] Mae gan bob datrysiad dros dro berchennog a dyddiad adolygu.
- [ ] Olrheinir ailadrodd ar ôl atgyweirio yn ôl carfan chwarterol gyda ffenestr a nodwyd.
- [ ] Mesurir ailddefnyddio gwallau hysbys lle mae ymatebwyr yn gweithio.
- [ ] Adolygir y problemau agored hynaf yn ôl amserlen, a chofnodir pob penderfyniad.
- [ ] Darllenir sampl o gofnodion caeedig bob chwarter i wirio codau cau ac achosion.
- [ ] Mae adroddiadau'n disgrifio gwasanaethau a thimau, ac nid oes tabl yn graddio unigolion.

## Anogwyr AI

**Dewch o hyd i broblemau ymgeisiol mewn set o ddigwyddiadau.**

```text
Dyma allforiad o ddigwyddiadau ar gyfer [gwasanaeth neu dîm] o [dyddiad
dechrau] i [dyddiad gorffen]: [gludwch feysydd digwyddiadau megis id, amser
agor, categori, disgrifiad byr, nodyn datrys]. Grwpiwch ddigwyddiadau a allai
rannu achos sylfaenol, esboniwch y dystiolaeth ar gyfer pob grŵp, a graddiwch
grwpiau yn ôl cyfrif achosion ac yn ôl [mesur effaith, er enghraifft oriau o
effaith ar ddefnyddwyr]. Marciwch grwpiau lle mae'r dystiolaeth yn wan.
Peidiwch â dyfeisio achosion, cyfrifon, na gwerthoedd meincnod. Rhestrwch eich
rhagdybiaethau a'r data ychwanegol a fyddai'n codi eich hyder.
```

**Adolygwch godau cau a chofnodion problemau.**

```text
Isod mae [nifer] o gofnodion problemau caeedig ar gyfer [gwasanaeth neu dîm]:
[gludwch id, cod cau, achos a gofnodwyd, cyfeirnod atgyweiriad, dyddiad cau].
Gwiriwch bob cofnod am god cau nad yw'n cyfateb i'w destun, achos sy'n enwi
person yn lle cyflwr, ac atgyweiriad heb gyswllt. Crynhowch batrymau ac
awgrymwch dri chwestiwn ar gyfer adolygydd. Peidiwch â graddio pobl na dyfeisio
ffeithiau am y cofnodion. Rhestrwch eich rhagdybiaethau.
```

**Dyluniwch fesur ailadrodd.**

```text
Rydym eisiau mesur a yw problemau a drwsiwyd yn aros wedi'u trwsio ar gyfer
[gwasanaeth neu dîm]. Ein hoffer yw [offeryn ITSM, offeryn defnyddio], ein
categorïau digwyddiadau yw [rhestr], a'n codau cau yw [rhestr]. Cynigiwch
ddiffiniad, fformiwla, dechrau a stop y cloc, rheol baru ar gyfer symptomau,
ffenestr ailadrodd, ac eithriadau, gyda chynllun siart yn dangos carfannau
chwarterol. Awgrymwch sut y gellid ei chwarae a rheilen warchod ar gyfer pob
achos. Gofynnwch i mi am y trothwyon sydd eu hangen arnoch yn lle eu dyfeisio.
Rhestrwch eich rhagdybiaethau.
```

**Paratowch adolygiad penderfyniad o broblemau hen.**

```text
Dyma'r problemau agored sy'n hŷn na [nifer] diwrnod ar gyfer [gwasanaeth neu
dîm]: [gludwch id, oedran, blaenoriaeth, perchennog, diweddariad olaf, statws
datrysiad dros dro]. Drafftiwch agenda ar gyfer adolygiad [hyd] munud lle mae
pob eitem yn cael un o dri phenderfyniad: trwsio gyda dyddiad, derbyn y risg
gyda pherchennog a enwir a dyddiad adolygu, neu gau gyda rheswm. Awgrymwch y
dystiolaeth i'w chyflwyno ar gyfer pob penderfyniad. Peidiwch â dyfeisio
costau na chanlyniadau. Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn
eu hateb yn gyntaf.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau sy'n diffinio'r mesurau digwyddiad, newid a gwybodaeth y mae metrigau problemau yn dibynnu arnynt, a'r rheilen warchod i'w pharu â phob un.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod metrig problem newydd neu wedi'i olygu yn datgan ei glociau, ei eithriadau, ei ffordd o chwarae'r system, a'i reilen warchod.

## Pwyntiau allweddol

- Mesur rheoli problemau yw ailadrodd: a yw'r digwyddiadau sy'n gysylltiedig â phroblem yn rhoi'r gorau i ddod yn ôl.
- Amserwch y camau ar wahân, o'r cofnod i'r achos a gofnodwyd ac o'r achos i'r atgyweiriad yn rhedeg mewn cynhyrchu.
- Cysylltwch ddigwyddiadau â phroblemau wrth gau, cytunwch sut y paru symptomau, a samplwch y cysylltiadau.
- Cam â pherchennog a dyddiad adolygu yw datrysiad dros dro, ac mae'r gyfran datrysiad dros dro yn unig yn dangos faint o risg a gludir.
- Rhowch atgyweiriadau parhaol yn ôl-groniad y tîm perchnogol, ac adroddwch fesurau canlyniad cyn cyfrifon cofnodion.
- Disgrifiwch wasanaethau, carfannau a phenderfyniadau. Peidiwch byth â graddio dadansoddwyr na thimau yn ôl problemau a gaewyd.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Ohno, T., *Toyota Production System: Beyond Large-Scale Production*, Productivity Press, 1988.
4. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
5. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Known error database](https://en.wikipedia.org/wiki/Known_error_database).
10. Wikipedia, [Workaround](https://en.wikipedia.org/wiki/Workaround).
11. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
12. Wikipedia, [Five whys](https://en.wikipedia.org/wiki/Five_whys).
13. Wikipedia, [Ishikawa diagram](https://en.wikipedia.org/wiki/Ishikawa_diagram).
14. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
15. Wikipedia, [Backlog](https://en.wikipedia.org/wiki/Backlog).
16. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
