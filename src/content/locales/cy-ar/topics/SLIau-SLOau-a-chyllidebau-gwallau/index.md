# SLIau, SLOau a chyllidebau gwallau

**Mae amcan lefel gwasanaeth yn troi "digon dibynadwy" yn rhif y gall defnyddwyr, timau cynnyrch a thimau gweithrediadau ei weld, ac mae'r gyllideb gwallau y mae'n ei gadael ar ôl yn troi'r rhif hwnnw yn benderfyniad a rennir, y gellir ei wario, am risg yn lle dadl am fai.**

## Crynodeb a chymhelliant

Mae gan bob gwasanaeth lefel o ddibynadwyedd eisoes, pa un a yw rhywun wedi'i mesur ai peidio. Os na ddatgana neb hi, mae defnyddwyr yn tybio un lefel, mae'r tîm cynnyrch yn tybio un arall, ac mae'r tîm gweithrediadau yn amddiffyn trydedd. Darganfyddir y gwahaniaeth yn ystod toriad. Mae'r pwnc hwn yn ymdrin â'r tri syniad cysylltiedig y mae [peirianneg dibynadwyedd safleoedd (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) yn eu defnyddio i gau'r bwlch hwnnw: y dangosydd lefel gwasanaeth, yr amcan lefel gwasanaeth, a'r gyllideb gwallau.

Mae [dangosydd lefel gwasanaeth (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) yn fesuriad o un agwedd ar y gwasanaeth fel y mae defnyddwyr yn ei brofi. Agweddau nodweddiadol yw a lwyddodd cais, pa mor hir y cymerodd, a oedd y data a ddychwelwyd yn ffres, ac a oedd yn gywir. Mynegir SLI da fel cymhareb: nifer y digwyddiadau da wedi'i rannu â nifer y digwyddiadau dilys, dros ffenestr ddiffiniedig. [Amcan lefel gwasanaeth (SLO)](https://en.wikipedia.org/wiki/Service-level_objective) yw'r targed ar gyfer y gymhareb honno dros gyfnod, er enghraifft "mae 99.9 y cant o geisiadau talu dilys yn llwyddo dros 28 diwrnod treigl." Y **gyllideb gwallau** yw beth bynnag y mae'r amcan yn caniatáu iddo fynd o'i le: 100 y cant llai'r SLO. Ar 99.9 y cant, y gyllideb yw 0.1 y cant o ddigwyddiadau dilys.

Mae'r gyllideb gwallau yn newid y sgwrs. Os yw'r gwasanaeth wedi gwario ychydig o'i gyllideb, mae gan y tîm le i ryddhau'n gyflymach, rhoi cynnig ar newidiadau peryglus, a rhedeg arbrofion. Os yw'r gyllideb bron wedi mynd, mae'r un tîm yn arafu gwaith nodweddion ac yn gwario ymdrech ar ddibynadwyedd nes bod y gyllideb yn adfer. Daw'r penderfyniad o rif y cytunwyd arno ymlaen llaw, felly nid yw'n dibynnu ar bwy yw'r uchaf ei statws neu'r mwyaf perswadiol yn y cyfarfod.

**Cyfradd llosgi** yw pa mor gyflym y mae'r gyllideb yn cael ei gwario, o'i chymharu â'r gyfradd a fyddai'n gwario'r cyfan yn union erbyn diwedd y ffenestr. Mae cyfradd llosgi o 1 yn golygu y bydd y gyllideb wedi mynd yn union ar ddiwedd y ffenestr. Mae cyfradd llosgi o 10 yn golygu y bydd wedi mynd mewn degfed o'r ffenestr. Cyfradd llosgi yw'r bont o'r SLO i rybuddio, oherwydd ei bod yn dweud pa mor frys yw problem o ran yr hyn y mae'n ei gostio i'r amcan.

Mae'r golygon ystwyth ac ITIL yn cwrdd yma, ac maent yn defnyddio geirfa wahanol ar gyfer syniadau cysylltiedig. Yn ITIL 4, rheoli lefel gwasanaeth yw'r arfer sy'n gosod, yn mesur, ac yn adrodd lefelau gwasanaeth, a'r [cytundeb lefel gwasanaeth (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) yw'r cytundeb dogfenedig rhwng darparwr a chwsmer (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA). Mae SLO yn darged mewnol sydd fel arfer yn fwy caeth na'r SLA ac sy'n eiddo i'r tîm sy'n rhedeg y gwasanaeth. Mae SLA yn cario canlyniadau, megis credydau neu gosbau. Mae SLO yn cario rheol benderfynu. Mae timau ystwyth sy'n berchen ar eu gwasanaethau ("rydych chi'n ei adeiladu, rydych chi'n ei redeg") yn defnyddio SLOau i wneud cost dibynadwyedd yn weladwy yn yr un ôl-groniad â nodweddion. Gall timau sy'n dilyn yr arfer ITIL drin SLIau fel ffurf fesuradwy yr hyn y mae cwsmeriaid yn dweud sydd ei angen arnynt, a'r SLO fel y targed gweithio sy'n cadw'r SLA yn ddiogel.

[Argaeledd](https://en.wikipedia.org/wiki/Availability) yw'r SLI mwyaf cyfarwydd ac ymdrinnir ag ef yn fanwl mewn man arall (gweler pwnc 5.3, Metrigau argaeledd). Mae latency, cywirdeb, ffresni, a thrwybwn hefyd yn ymgeiswyr. Y sgil yw dewis dangosyddion o'r hyn y mae defnyddwyr yn poeni amdano, yn hytrach nag o'r hyn sy'n hawdd ei gasglu. Mae defnydd CPU ar weinydd yn hawdd i'w gasglu ac yn dweud ychydig am a allai cwsmer dalu. Mae cyfran y ceisiadau talu sy'n cwblhau o fewn dwy eiliad yn dweud llawer. Ar gyfer latency, adroddwch [ganraddau](https://en.wikipedia.org/wiki/Percentile), nid cyfartaleddau, oherwydd bod cyfartaledd yn cuddio'r gynffon araf y mae defnyddwyr yn sylwi arni (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth, a phwnc 5.4, Metrigau capasiti a pherfformiad).

## Egwyddorion allweddol

- **Dechreuwch o'r defnyddiwr, nid y gweinydd.** Dewiswch ddangosyddion sy'n disgrifio profiad y byddai person yn ei adnabod, megis "aeth fy nhaliad drwodd," a gweithiwch yn ôl i'r hyn i'w fesur.
- **Penderfyniad yw targed o dan 100 y cant, nid cyfaddefiad.** Mae dibynadwyedd perffaith yn anghyraeddadwy ac yn anfforddiadwy, ac fel arfer ni all defnyddwyr ddweud y gwahaniaeth y tu hwnt i bwynt. Mae'r gyllideb yn gwneud y cyfaddawd hwnnw'n eglur.
- **Gosodwch yr amcan gyda'r bobl sy'n dibynnu arno.** Cytundeb wedi'i negodi rhwng cynnyrch, gweithrediadau, a chwsmeriaid yw'r SLO, nid rhif a ddewiswyd gan un tîm yn unig.
- **Cytunwch ar y canlyniadau cyn i'r gyllideb ddod i ben.** Dilynir polisi cyllideb gwallau a ysgrifennwyd mewn wythnos dawel mewn un straenus. Dadlennir polisi a ddyfeisiwyd yn ystod toriad.
- **Rhybuddiwch ar losgi, nid ar bob blip.** Galwch berson dim ond pan fo'r gyllideb yn cael ei bwyta'n ddigon cyflym i fygwth yr amcan, a llwybrwch losgi arafach i docynnau.
- **Mae SLOau'n disgrifio gwasanaethau, byth bobl.** Mae'r gyllideb yn perthyn i wasanaeth a'i dîm. Nid yw byth yn sgôr i beiriannydd.

## Diffiniadau metrigau

Mae'r metrigau isod yn disgrifio'r system SLO ar gyfer gwasanaeth. Y pedwar cyntaf yw craidd yr arfer, ac mae'r ddau olaf yn disgrifio pa mor iach yw'r arfer ei hun. Nodir pob cloc a ffin yn y golofn fformiwla. "Digwyddiadau dilys" yw'r digwyddiadau sy'n cyfrif tuag at yr SLI ar ôl yr eithriadau y cytunwyd arnynt yn nogfen yr SLO, megis ceisiadau o brofion llwyth y tîm ei hun, a eithrir.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyrraedd SLI | Cyfran y digwyddiadau dilys a oedd yn dda, ar gyfer un dangosydd o un gwasanaeth | digwyddiadau da / digwyddiadau dilys, ar gyfer y ffenestr o ddechrau i ddiwedd y cyfnod adrodd; mae digwyddiadau a eithrir gan ddogfen yr SLO (profion llwyth, cynnal a chadw wedi'i gynllunio a gyhoeddwyd ymlaen llaw, os yw'r SLO yn dweud hynny) yn cael eu tynnu o'r rhifiadur a'r enwadur | canran | Telemetreg cydbwyso llwyth, cymhwysiad, neu stiliwr synthetig; y platfform monitro neu arsylwadwyedd | Rheoli lefel gwasanaeth; monitro a rheoli hysbysiadau | Diffiniad o orffen ar gyfer gweithredadwyedd; adolygiad rhanddeiliaid o iechyd gwasanaeth | Parhaus, wedi'i adrodd yn ddyddiol ac fesul ffenestr |
| Cydymffurfio SLO | A fodlonodd yr SLI yr amcan dros ffenestr yr SLO, ac am sawl ffenestr ddiweddar | ffenestri lle'r oedd cyrraedd SLI ar neu uwchlaw'r amcan / ffenestri a werthuswyd, dros y 12 mis diwethaf; eithrir ffenestr sy'n dal ar agor | canran o ffenestri | Hanes cyrraedd SLI | Rheoli lefel gwasanaeth; gwelliant parhaus | Nod tîm neu gytundeb gweithio ar ddibynadwyedd | Misol, gyda thuedd chwarterol |
| Cyllideb gwallau yn weddill | Y rhan o'r gyllideb nad yw wedi'i gwario eto yn y ffenestr gyfredol | 1 - (digwyddiadau drwg hyd yma / digwyddiadau drwg a ganiateir ar gyfer y ffenestr gyfan), lle mae digwyddiadau drwg a ganiateir = (1 - SLO) x digwyddiadau dilys disgwyliedig ar gyfer y ffenestr gyfan; mae'r cloc yn dechrau ar ddechrau'r ffenestr ac yn stopio ar ddiwedd y ffenestr | canran o'r gyllideb | Cyrraedd SLI a'r rhagolwg cyfaint | Rheoli lefel gwasanaeth; rheoli risg | Gwiriad parodrwydd rhyddhau; mewnbwn gwaith cynlluniedig | Dyddiol, wedi'i adolygu'n wythnosol |
| Cyfradd llosgi | Y cyflymder y gwariir y gyllideb o'i gymharu â'r gyfradd gwario cyfartal | (digwyddiadau drwg / digwyddiadau dilys dros gyfnod edrych yn ôl) / (1 - SLO); datgenir y cyfnod edrych yn ôl, er enghraifft 1 awr neu 6 awr | cymhareb (mae 1 yn golygu yn union ar y gyllideb) | Telemetreg SLI ar benderfyniad amser mân | Monitro a rheoli hysbysiadau; rheoli digwyddiadau | Rheolau rhybuddio ar alwad; sbardun heidio | Parhaus, wedi'i werthuso mewn rheolau rhybuddion |
| Cydymffurfio â pholisi'r gyllideb | Pa mor aml y cymhwyswyd y canlyniad y cytunwyd arno pan gyrhaeddwyd sbardun ym mholisi'r gyllideb gwallau | sbardunau yn y cyfnod lle cymerwyd gweithred y polisi o fewn yr amser y cytunwyd arno / sbardunau a gyrhaeddwyd yn y cyfnod; cyfrifir sbardunau a hepgorwyd yn ffurfiol gyda rheswm a gofnodwyd ar wahân, heb eu tynnu | canran | Dogfen y polisi, log penderfyniadau, a hanes yr ôl-groniad | Rheoli lefel gwasanaeth; galluogi newid | Cytundeb gweithio; dilyniant ôl-sylliad | Chwarterol |
| Cwmpas SLO | Cyfran y teithiau defnyddwyr hanfodol, neu'r gwasanaethau dan sylw, sydd ag SLO cyfredol ac SLI sy'n gweithio | gwasanaethau neu deithiau dan sylw gydag o leiaf un SLO y cyrhaeddodd data ei SLI yn y 7 diwrnod diwethaf / gwasanaethau neu deithiau dan sylw; rhestrir "dan sylw" yn y catalog gwasanaethau (service catalogue yn nhermau ITIL) | canran | Catalog gwasanaethau, cofrestr SLO, a chyfluniad monitro | Rheoli catalog gwasanaethau; rheoli lefel gwasanaeth | Rhestr perchnogaeth gwasanaeth y tîm | Chwarterol |

Dewisiadau yw'r cyfnod edrych yn ôl cyfradd llosgi a ffenestr yr SLO. Mae ffenestr dreigl 28 diwrnod yn cwmpasu wythnosau cyfan. Datganwch y dewis yn nogfen yr SLO a'i gadw'n sefydlog, neu bydd y duedd yn camarwain.

## Argymhellion

### Dewiswch ddangosyddion o'r hyn y mae defnyddwyr yn poeni amdano

**1. Dechreuwch gyda theithiau defnyddwyr hanfodol.** Rhestrwch y tri i chwe pheth y mae'n rhaid i ddefnyddiwr allu eu gwneud i'r gwasanaeth fod yn werth ei ddefnyddio, megis mewngofnodi, chwilio, talu, a lawrlwytho datganiad. Ysgrifennwch bob un fel brawddeg o ochr y defnyddiwr. Yna dewiswch yr SLI sy'n dangos a oedd y frawddeg honno'n wir. Mae hyn yn cadw'r SLOau yn ychydig ac yn atal catalog o fesuryddion technegol nad oes neb yn eu darllen.

**2. Mynegwch bob SLI fel digwyddiadau da dros ddigwyddiadau dilys.** Mae cymhareb yn hawdd i'w hesbonio, yn hawdd ei chyfanredu, ac yn hawdd ei throi'n gyllideb. Diffiniwch "da" gyda throthwy y byddai defnyddwyr yn ei dderbyn, a diffiniwch "dilys" fel bod traffig na allwch yn rhesymol ei wasanaethu, megis ceisiadau a rwystrwyd am gamddefnydd, yn cael ei eithrio mewn ffordd ddogfenedig. Ysgrifennwch y ddau ddiffiniad i ddogfen yr SLO, oherwydd mai'r enwadur yw lle mae'r rhan fwyaf o anghytundebau'n cuddio.

**3. Mesurwch mor agos at y defnyddiwr ag sy'n ymarferol.** Gall cyfradd llwyddiant ochr gweinydd fod yn berffaith tra bo problem rhwydwaith neu gleient yn gwneud y gwasanaeth yn annefnyddiadwy. Mesurwch wrth y cydbwysydd llwyth neu'r ymyl, ac ychwanegwch stiliwr synthetig neu fesuriad ochr cleient ar gyfer y teithiau sydd bwysicaf. Mae gan bob pwynt mesur gost a man dall, felly cofnodwch pa un y mae pob SLI yn ei ddefnyddio (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

**4. Defnyddiwch ganraddau ar gyfer latency, gyda throthwy.** Mae "mae 95 y cant o geisiadau chwilio yn cwblhau mewn llai nag 800 milieiliad" yn SLI. Nid yw "latency cyfartalog" oherwydd y gall ychydig o geisiadau cyflym wrthbwyso llawer o rai araf. Lle mae'n helpu, defnyddiwch ddau drothwy, megis canolrif a'r 99fed canradd, gan fod y gynffon araf yn siapio sut mae'r gwasanaeth yn teimlo (gweler pwnc 5.4, Metrigau capasiti a pherfformiad).

### Gosodwch amcanion y gall pobl eu hamddiffyn

**5. Gosodwch yr SLO cyntaf o berfformiad cyfredol ac angen defnyddwyr, yna tynhewch.** Mesurwch yr SLI am ychydig wythnosau, gofynnwch i ddefnyddwyr a staff cymorth pa lefel y maent yn sylwi arni, a gosodwch amcan y gall y gwasanaeth ei fodloni heddiw gyda rhywfaint o le. Mae amcan a osodir ymhell uwchlaw perfformiad cyfredol yn doriad parhaol, ac mae pobl yn rhoi'r gorau i edrych arno. Mae amcan a osodir ymhell islaw'r hyn y mae defnyddwyr yn ei gael yn gadael i ansawdd bydru heb ei weld. Ailedrychwch arno ar ôl chwarter.

**6. Cadwch yr SLO yn fwy caeth na'r SLA, a'u cadw ar wahân.** Os yw cytundeb cwsmer yn addo 99.5 y cant, gallai amcan y tîm fod yn 99.9 y cant, fel bod y gyllideb wedi'i disbyddu cyn croesi'r llinell gytundebol. Peidiwch â gwneud yr SLO a'r SLA yr un rhif, a pheidiwch ag adrodd y naill fel y llall. Dogfen fasnachol a chyfreithiol yw'r cytundeb, a rheol benderfynu peirianyddol yw'r amcan (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

**7. Ystyriwch ddibyniaethau.** Ni all gwasanaeth fod yn fwy dibynadwy na'r hyn y mae'n dibynnu arno, oni bai ei fod yn dirywio'n osgeiddig. Rhestrwch y prif ddibyniaethau, gan gynnwys cyflenwyr, a gofynnwch beth mae eu perfformiad gwirioneddol yn ei awgrymu ar gyfer eich amcan.

### Rhedwch y gyllideb fel offeryn penderfynu

**8. Ysgrifennwch bolisi cyllideb gwallau cyn bod ei angen arnoch.** Mae'r polisi'n dweud beth sy'n digwydd ar lefelau diffiniedig o ddefnydd. Mae gan fersiwn syml dri cham: gweithrediad arferol tra bo cyllideb yn weddill, adolygiad ychwanegol o newidiadau peryglus a blaenoriaeth i waith dibynadwyedd pan fo cyfran a nodwyd wedi'i gwario, ac oedi ar ryddhadau nodweddion nad ydynt yn hanfodol pan fo wedi'i disbyddu nes bod y gyllideb yn adfer. Enwch pwy a gaiff roi eithriad a sut y caiff ei gofnodi. Dylai arweinwyr cynnyrch a gweithrediadau ei lofnodi'r ddau, fel bod y polisi'n berthnasol yn gyfartal i'r ddwy ochr.

**9. Gwariwch y gyllideb yn fwriadol.** Mae cyllideb nas cyffyrddir byth yn awgrymu bod yr amcan yn rhy gaeth neu fod y tîm yn rhy ofalus. Defnyddiwch gyllideb sbâr ar gyfer arbrofion, cyfradd rhyddhau gyflymach, cyflwyniadau canari, a [toglenni nodweddion](https://en.wikipedia.org/wiki/Feature_toggle) sy'n gadael i chi brofi mewn cynhyrchu gydag amlygiad cyfyngedig, a defnyddiwch [ryddhadau canari](https://en.wikipedia.org/wiki/Canary_release) i ddal problemau tra bo cyfran fach yn unig o ddefnyddwyr yr effeithir arnynt. Trinwch gyllideb sy'n gyson heb ei chyffwrdd fel anogwr i ofyn a yw'r amcan yn cyfateb i'r hyn sydd ei angen ar ddefnyddwyr (gweler pwnc 4.5, Metrigau rhyddhau a defnyddio).

**10. Rhybuddiwch ar gyfraddau llosgi lluosog.** Mae llosgi cyflym, megis cyfradd ddigon uchel i wario cyfran fawr o'r gyllideb o fewn awr, yn galw person. Mae llosgi araf, megis cyfradd gymedrol a fyddai'n dal i ddisbyddu'r gyllideb o fewn dyddiau, yn creu tocyn ar gyfer oriau gwaith. Mae defnyddio dwy ffenestr edrych yn ôl neu fwy yn dal methiannau sydyn a gollyngiadau araf, ac yn lleihau galwadau am flipiau byr sy'n costio ychydig o gyllideb. Mae pennod The Site Reliability Workbook ar rybuddio ar SLOau yn esbonio'r patrwm, a dylid tiwnio'r trothwyon i'ch gwasanaeth yn hytrach na'u copïo (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion).

**11. Cysylltwch ddigwyddiadau, problemau, a dysgu â'r gyllideb.** Ar ôl digwyddiad, cofnodwch faint o gyllideb a ddefnyddiodd wrth ymyl ei hyd a'i effaith. Defnyddiwch y rhif hwnnw i flaenoriaethu'r cofnod problem a'r camau dilynol (gweler pwnc 4.1, Metrigau rheoli problemau, a phwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu). Mae cost cyllideb hefyd yn rhoi uned gyffredin i adolygiadau digwyddiadau mawr ar gyfer cymharu methiannau gwahanol iawn (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

### Cadwch yr arfer yn onest ac yn fyw

**12. Adolygwch SLOau yn erbyn realiti bob chwarter.** Cymharwch yr SLO â chysylltiadau cymorth, cwynion, a chanlyniadau bodlonrwydd. Os yw defnyddwyr yn anhapus tra bo'r SLO yn wyrdd, mae'r SLI yn anghywir neu'r targed yn rhy llac. Os yw'r SLO yn goch ac nid oes neb yn cwyno, gall y targed fod yn rhy gaeth. Cofnodwch bob newid a'r rheswm, a dangoswch y newid ar y siart tuedd (gweler pwnc 6.2, Cytundebau lefel profiad).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyrraedd SLI | Culhau digwyddiadau "dilys" nes bod y methiannau'n diflannu, megis eithrio ceisiadau a ailgynnigiwyd neu ddosbarthiadau gwallau cyfan; mesur y gydran iachaf yn unig; stilio o leoliad ffafriol yn unig | Cyhoeddi diffiniad yr SLI a'r eithriadau yn nogfen yr SLO gyda log newid; cymharu'r SLI â chysylltiadau cymorth a chwynion defnyddwyr; adolygiad rheolaidd o ddigwyddiadau a eithriwyd a'u cyfaint |
| Cydymffurfio SLO | Gosod yr amcan yn ddigon isel i basio bob amser; newid hyd y ffenestr ar ôl cyfnod gwael; ail-ddiffinio toriad fel cyfnod cynnal a chadw | Amcan wedi'i osod gyda mewnbwn defnyddwyr ac wedi'i adolygu ar amserlen; ffenestr wedi'i gosod yn y ddogfen; cyfrif eithriadau a newidiadau heb eu cynllunio i'r ffenestr wedi'u hadrodd wrth ymyl cydymffurfio |
| Cyllideb gwallau yn weddill | Ail-ddosbarthu digwyddiadau drwg fel rhai a eithriwyd; chwyddo'r cyfaint disgwyliedig fel bod y cyfrif drwg a ganiateir yn edrych yn fwy; ailosod y ffenestr yn gynnar | Digwyddiadau drwg a ganiateir wedi'u cyfrifo o'r cyfaint gwirioneddol ar ddiwedd y ffenestr; cyfaint digwyddiadau a eithriwyd wedi'i ddangos wrth ymyl y gyllideb; dyddiadau ffenestr wedi'u gosod ymlaen llaw |
| Cyfradd llosgi | Tiwnio trothwyon rhybuddion fel nad yw llosgi byth yn sbarduno; defnyddio edrych yn ôl mor hir nes bod llosgi cyflym yn cyfartaleddu allan | Prawf cwmpas rhybuddion gan ddefnyddio digwyddiadau'r gorffennol ("a fyddai'r rheol hon wedi galw?"); cyfradd rhybuddion gweithredadwy a chyfrif canfod a fethwyd (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion) |
| Cydymffurfio â pholisi'r gyllideb | Rhoi eithriadau'n rheolaidd; ysgrifennu polisi gyda sbardunau na chyrhaeddir byth; cyfrif tocyn dibynadwyedd symbolaidd fel gweithred y polisi | Eithriadau wedi'u cyfrif a'u hadolygu ar wahân; cyfran yr eithriadau yn y cyfnod; gwaith dibynadwyedd wedi'i gwblhau (gweler pwnc 4.1, Metrigau rheoli problemau) |
| Cwmpas SLO | Ychwanegu SLO dibwys at bob gwasanaeth i godi'r ganran; cyfrif taith fel un dan sylw pan nad oes data'n llifo | Gwiriad ffresni data SLI (cyrhaeddodd data yn y 7 diwrnod diwethaf); adolygiad a yw'r SLO yn cwmpasu taith hanfodol, nid pwynt terfyn eilaidd |

Mae darlleniad iach yn dangos SLI sy'n olrhain yr hyn y mae defnyddwyr yn ei adrodd, amcan sy'n cael ei fethu weithiau ac yn cael ei fodloni'n gyfforddus weithiau, a chyllideb a wariwyd yn fwriadol. Cymhwysir y polisi pan gyrhaeddir ei sbardun, mae eithriadau'n brin ac wedi'u cofnodi, ac mae pob newid diffiniad yn weladwy ar y siart. Mae gwasanaeth sydd bob amser ar 100 y cant o gyllideb yn weddill, neu un sydd bob amser wedi'i dorri, yn haeddu sgwrs am yr amcan, nid canmoliaeth na bai. Cofiwch fod unrhyw ffigur unigol yn anogwr am gwestiwn (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| SLIau taith defnyddwyr | Cyfateb i'r hyn y mae defnyddwyr yn ei deimlo; ychydig o ran nifer; hawdd i'w esbonio i bobl nad ydynt yn beirianwyr | Angen ymdrech i offerynnu o'r dechrau i'r diwedd; gall fethu namau mewnol nad ydynt wedi cyrraedd defnyddwyr eto |
| SLIau cydran neu adnodd (CPU, cof, dyfnder ciw) | Rhad i'w casglu; defnyddiol ar gyfer diagnosis a chapasiti | Dirprwyon gwael ar gyfer profiad defnyddwyr; cynhyrchu llawer o rybuddion nad ydynt o bwys |
| Ffenestr dreigl | Llyfn; dim clogwyn ar ddiwedd y mis; bob amser yn gyfredol | Anoddach i'w esbonio i weithredwyr na mis calendr; mae diwrnod gwael yn aros am y ffenestr gyfan |
| Rhybuddio ar gyfradd llosgi | Galw pan fo'r amcan mewn perygl go iawn; llai o larymau ffug | Mwy cymhleth i'w ffurfweddu a'i brofi; mae trothwyon angen tiwnio fesul gwasanaeth |

Dewiswch ychydig o SLIau, gosodwch hwy gyda defnyddwyr, a gadewch i'r gyllideb benderfynu cyflymder newid. Y llymder cywir yw'r amcan llacaf sy'n dal i gadw defnyddwyr yn fodlon, gan fod pob naw ychwanegol yn costio mwy na'r un olaf.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth sydd angen i ddefnyddiwr y gwasanaeth hwn allu ei wneud, a sut y byddem yn gwybod pe na allent?**
Gofynnwch i bob person ysgrifennu'r tri pheth pwysicaf y mae defnyddiwr yn eu gwneud gyda'r gwasanaeth, heb edrych ar unrhyw ddangosfwrdd. Cymharwch y rhestrau a nodwch y gwahaniaethau rhwng cynnyrch, gweithrediadau, a chymorth. Yna gofynnwch pa un o'r teithiau hynny sydd ag SLI ar hyn o bryd. Dylai'r hwylusydd chwilio am deithiau pwysig heb fesuriad ac am fesuriadau nad ydynt yn disgrifio taith.

**2. Pe bai ein SLO yn 99.9 y cant a'n bod yn ei fodloni, a fyddai defnyddwyr yn hapus, a sut ydym ni'n gwybod?**
Rhowch yr SLO presennol wrth ymyl chwarter diwethaf cysylltiadau cymorth, cwynion, a chanlyniadau bodlonrwydd. Gofynnwch a ydynt yn cytuno. Os yw'r SLO yn wyrdd a defnyddwyr yn anhapus, mae angen gwaith ar yr SLI neu'r targed. Os yw defnyddwyr yn hapus a'r SLO yn goch, gall y targed fod yn fwy caeth nag sydd ei angen ar unrhyw un. Cytunwch ar un cam i ddod â'r amcan a'r profiad at ei gilydd.

**3. Beth fyddem ni mewn gwirionedd yn ei wneud yn wahanol pe bai'r gyllideb gwallau yn dod i ben?**
Darllenwch bolisi cyllideb gwallau presennol yn uchel, neu drafftiwch un gyda'ch gilydd os nad oes un. Gofynnwch pwy fyddai'n stopio beth, a phwy sydd â'r awdurdod i roi eithriad. Dylai'r hwylusydd bwyso am gamau pendant, megis oedi rhyddhadau nad ydynt yn hanfodol a symud pobl a enwir i waith dibynadwyedd, yn hytrach na bwriadau cyffredinol. Mae polisi nad oes neb yn credu y caiff ei ddilyn yn waeth na dim polisi.

**4. Pryd gymerasom risg ddiwethaf oherwydd bod gennym gyllideb sbâr?**
Trafodwch a yw'r tîm yn defnyddio ei gyllideb neu ddim ond yn ei gwarchod. Edrychwch ar y chwarter diwethaf: a oedd cyfnod pan oedd y gyllideb bron heb ei chyffwrdd tra bo rhyddhadau'n araf? Gofynnwch beth fyddai'r tîm wedi'i drio pe bai wedi gwybod ei bod yn ddiogel gwneud hynny. Mae'r cwestiwn hwn yn dod â gorofal i'r wyneb, ac mae'r ateb yn aml yn pwyntio at ryddhad canari, toglen, neu biblinell gyflymach a fyddai'n gadael i'r tîm ddefnyddio ei gyllideb yn dda.

**5. Pa rai o'n rhybuddion fyddai wedi tanio mewn pryd ar gyfer ein digwyddiad gwael diwethaf, a pha rai fyddai wedi tanio am ddim?**
Cymerwch y digwyddiad sylweddol diwethaf ac ailchwaraewch hanes y rhybuddion yn ei erbyn. Cyfrwch y galwadau a gyrhaeddodd, pa mor hir ar ôl i'r effaith ddechrau, a faint o alwadau a gyrhaeddodd ar gyfer digwyddiadau a gostiodd bron ddim cyllideb. Trafodwch a fyddai rhybuddion cyfradd llosgi wedi gwneud yn well. Y nod yw rhestr fer o newidiadau rhybuddion, pob un gyda pherchennog, ac nid trafodaeth fai am bwy oedd ar alwad.

**6. Pwy sy'n berchen ar bob SLO, a phryd newidiasom un yn fwriadol ddiwethaf?**
Rhestrwch yr SLOau ac ysgrifennwch y perchennog wrth ymyl pob un, fel tîm neu rôl. Gofynnwch pryd yr adolygwyd pob un ddiwethaf a beth newidiodd. Mae SLO nad oes neb wedi'i gyffwrdd ers blwyddyn yn arwydd nad yw bellach yn hysbysu penderfyniadau. Cytunwch ar ddyddiad adolygu ar gyfer pob un, a chytunwch pwy sydd â'r hawl i ymddeol SLO a beidiodd â bod yn ddefnyddiol.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn ennill rheol glir ar gyfer pa mor gyflym i symud. Pan fo cyllideb yn weddill, gallant ryddhau'n amlach a rhoi cynnig ar newidiadau mwy beiddgar. Pan fo'n isel, maent yn rhoi gwaith dibynadwyedd ar yr ôl-groniad heb drafodaeth hir. Dylent helpu i ddewis y dangosyddion oherwydd eu bod yn gwybod pa deithiau sy'n bwysig, a dylent offerynnu nodweddion newydd gyda'r SLI mewn golwg o'r dechrau (gweler pwnc 2.8, Metrigau DORA). Adnodd tîm i gynllunio ag ef yw'r gyllideb, byth rhif i'w guddio.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn defnyddio SLOau i benderfynu beth sy'n haeddu galwad a beth all aros tan y bore. Mae rhybuddio ar gyfradd llosgi yn lleihau sŵn ac yn clymu gwaith ar alwad wrth yr hyn y mae defnyddwyr yn ei deimlo (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad). Maent yn cadw diffiniadau'r SLI yn onest, yn cynnal y telemetreg y tu ôl iddynt, ac yn cofnodi cost cyllideb mewn cofnodion digwyddiadau a phroblemau.

### Arweinyddiaeth a llywodraethu

Dylai arweinwyr ofyn tri chwestiwn: beth yw'r amcan, faint o gyllideb sy'n weddill, a beth fyddwn ni'n ei wneud os daw i ben? Maent yn llofnodi'r polisi cyllideb gwallau ac yn cefnogi'r tîm pan fo'r polisi'n dweud i arafu. Maent yn osgoi troi cydymffurfio SLO yn fetrig bonws, sy'n gwahodd culhau diffiniadau a gosod targedau meddal.

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn elwa pan fo'r amcan yn adlewyrchu'r hyn sydd ei angen arnynt a phan allant weld sut mae'r gwasanaeth yn perfformio yn ei erbyn. Dylid ymgynghori â hwy pan osodir yr amcan, oherwydd bod eu goddefgarwch am arafwch neu amser i lawr yn amrywio yn ôl tasg ac amser o'r dydd. Mae mesurau profiad, megis bodlonrwydd ac ymdrech, yn gwirio a yw'r SLO yn cipio'r hyn y maent yn ei deimlo (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae gan fanwerthwr ar-lein o faint canolig dîm talu, tîm platfform, a desg gwasanaeth. Mae'r gwasanaeth talu yn hanfodol i'r busnes. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r tîm yn diffinio un SLI ar gyfer y daith "talu am archeb": cyfran y ceisiadau talu dilys sy'n dychwelyd llwyddiant o fewn 2 eiliad, wedi'i fesur wrth y cydbwysydd llwyth. Mae ceisiadau dilys yn eithrio profion llwyth y tîm ei hun a cheisiadau y mae'r gwasanaeth twyll yn eu gwrthod yn ôl dyluniad. Yr SLO yw 99.9 y cant dros 28 diwrnod treigl. Mae'r ffenestr yn cario 12,000,000 o geisiadau dilys disgwyliedig, felly y gyllideb yw 12,000 o geisiadau drwg (0.1 y cant). Mae gan y polisi cyllideb gwallau, a lofnodwyd gan bennaeth cynnyrch a phennaeth platfform, dair lefel: ar 50 y cant o'r gyllideb wedi'i gwario, mae angen ail adolygydd a chyflwyniad canari ar newidiadau peryglus; ar 75 y cant, mae gwaith dibynadwyedd yn cael blaenoriaeth yn y sgwrs gynllunio nesaf; ar 100 y cant, mae rhyddhadau nodweddion nad ydynt yn hanfodol yn oedi nes bod y gyllideb yn adfer.

Ar ddiwrnod 10 y ffenestr mae'r tîm yn gweld 7,800 o geisiadau drwg allan o tua 4,285,714 disgwyliedig hyd yma, sy'n rhoi cyrraedd SLI o tua 99.82 y cant, 65 y cant o'r gyllideb wedi'i gwario, a ffenestr sydd ond 36 y cant wedi mynd heibio. Y gyfradd llosgi dros y cyfnod yw tua 1.8, felly ar y cyflymder hwn bydd y gyllideb wedi mynd tua diwrnod 15. Roedd defnydd gwael yn cyfrif am 5,000 o'r methiannau. Mae'r cofnod digwyddiad yn dangos bod y methiant wedi para 22 munud, mae'r adolygiad digwyddiad mawr yn nodi gwiriad ar goll yn y biblinell, ac mae cost cyllideb y digwyddiad wedi'i chofnodi yn y cofnod problem (gweler pwnc 4.1, Metrigau rheoli problemau).

Mae'r tîm yn dilyn y polisi. Mae gweithred yr ail lefel yn berthnasol ar unwaith, felly mae angen cyflwyniad canari ar newidiadau peryglus, ac mae'r cyfarfod cynllunio yn symud y gwiriad piblinell i frig y ciw gwaith. Mae'r perchennog cynnyrch yn derbyn oedi ar nodwedd hyrwyddo anbrys. Erbyn diwrnod 28 mae'r gyllideb 94 y cant wedi'i gwario, ac mae'r tîm yn gorffen y ffenestr o fewn yr amcan.

Mae'r risg chwarae'r system yn ymddangos yn yr adolygiad. Adroddodd tîm gwahanol, sy'n rhedeg gwasanaeth chwilio'r manwerthwr, 99.95 y cant ar gyfer y chwarter tra bo'r ddesg gwasanaeth wedi logio cynnydd mewn cysylltiadau "chwilio ddim yn gweithio". Wrth ymchwilio, canfu'r tîm platfform fod y tîm chwilio wedi ail-ddiffinio "dilys" i eithrio ceisiadau a ailgynnigiwyd o fewn 5 eiliad, a ddileodd lawer o fethiannau go iawn. Adferodd yr adolygiad y diffiniad gwreiddiol, ailddatganodd y chwarter, ac ychwanegodd ddwy reilen warchod: cofnodir unrhyw newid i ddiffiniad yn nogfen yr SLO gyda rheswm, a chymharir cyrraedd SLI â chysylltiadau cymorth bob mis. Ni ddywedodd neb gelwydd, gan fod y newid wedi'i wneud i leihau sŵn, felly diffiniad cliriach oedd yr atgyweiriad, nid cerydd.

## Y golwg fesul sector

**Busnes newydd.** Dechreuwch ag un SLO ar gyfer y daith bwysicaf, wedi'i fesur ar yr ymyl, gyda pholisi syml sy'n ffitio ar dudalen. Peidiwch ag adeiladu platfform ar gyfer dwsinau o SLOau. Mae'r gyllideb yn helpu tîm bach i ddadlau llai ynghylch a ddylid cludo ar ddydd Gwener.

**Busnes bach.** Mae busnes bach yn aml yn dibynnu ar offer a chyflenwyr a gynhelir, felly gall yr SLI ddod o ddata statws cyflenwr neu stiliwr allanol syml. Darllenwch lefelau gwasanaeth y cyflenwr yn ysgrifenedig a'u gwirio yn erbyn eich anghenion eich hun.

**Menter fawr.** Mae llawer o wasanaethau, timau, a chyflenwyr yn codi'r polion ar gyfer cysondeb. Darparwch dempled a rennir ar gyfer dogfennau SLO, cofrestr gyffredin, a ffordd safonol o gyfrifo cyrraedd a chyllideb, fel y gall arweinwyr gymharu a chrynhoi heb ddadlau am ddiffiniadau. Cadwch yr SLO yn eiddo i dîm y gwasanaeth a'r gofrestr wedi'i churadu'n ganolog.

**Llywodraeth a'r sector cyhoeddus.** Yn aml mae'n rhaid i wasanaethau fodloni targedau statudol neu gyhoeddedig, a gall methiant gael ei adrodd yn gyhoeddus. Cadwch yr ymrwymiad cytundebol neu statudol ar wahân i'r amcan mewnol, a sicrhewch fod yr SLO mewnol yn dynnach. Dogfennwch ddiffiniad yr SLI, eithriadau, a llinach data ar gyfer archwilio, a chynlluniwch ar gyfer hygyrchedd ac ar gyfer defnyddwyr na allant ddewis darparwr arall (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw llai o ddadleuon a phenderfyniadau gwell am ddibynadwyedd. Heb amcan, mae gwaith dibynadwyedd yn cystadlu â nodweddion ar gryfder pwy bynnag sy'n dadlau uchaf. Gydag amcan a chyllideb, mae'r cyfaddawd yn weladwy ac wedi'i gytuno ymlaen llaw, ac mae defnyddwyr yn cael gwasanaeth sydd mor ddibynadwy ag sydd ei angen arnynt, heb i'r tîm dalu am ddibynadwyedd y tu hwnt i'r pwynt hwnnw.

Mae gan y gost bedair rhan. Y gyntaf yw dylunio: gweithdai i ddewis teithiau, dangosyddion, ac amcanion, ac i ysgrifennu'r polisi. Yr ail yw offerynnu: telemetreg yn y lle iawn, stilwyr, a'r biblinell sy'n troi digwyddiadau yn gyrraedd a chyllideb (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth). Y drydedd yw gweithredu: rheolau rhybuddion, dangosfwrdd, adolygiad chwarterol, a'r amser i gadw diffiniadau'n gyfredol. Y bedwaredd yw'r gost cyfle pan fo'r polisi'n oedi gwaith nodweddion, sef cost anrhydeddu'r cytundeb a'r rheswm dros gytuno arno cyn i'r pwysau gyrraedd.

Mae'r elw'n ymddangos mewn patrymau y gall tîm eu holrhain drosto'i hun: llai o alwadau nad oedd angen gweithredu arnynt, trafodaethau byrrach ynghylch a ddylid rhyddhau, gwaith dibynadwyedd wedi'i drefnu cyn i'r gyllideb ddod i ben yn lle ar ôl digwyddiad mawr, a llai o syrpreisys i gwsmeriaid. Disgrifiwch y budd drwy gymharu ffigurau'r tîm ei hun cyn ac ar ôl, megis galwadau fesul cylchdro a chyfran y gyllideb a ddefnyddiwyd gan y digwyddiad mwyaf.

## Gwrthbatrymau a maglau

- **Gormod o SLOau.** Mae dwsinau o amcanion yn gwanhau sylw, ac ni all neb ddweud pa un sy'n bwysig. Dechreuwch â'r teithiau defnyddwyr hanfodol ac ymddeolwch y gweddill.
- **SLO yn hafal i SLA.** Mae adrodd un rhif fel y ddau yn dileu'r ymyl ddiogelwch ac yn cymysgu rheol beirianyddol ag addewid masnachol. Cadwch yr amcan yn fwy caeth na'r cytundeb.
- **Polisi nas gorfodir byth.** Os daw'r gyllideb i ben ac nad yw dim yn newid, mae'r arfer yn colli hygrededd. Gofynnwch i arweinwyr lofnodi'r polisi a chofnodwch bob eithriad gyda'i reswm.
- **Defnyddio'r gyllideb fel cerdyn sgorio ar gyfer pobl.** Mae graddio peirianwyr neu staff ar alwad yn ôl cyllideb a wariwyd yn gwneud i bobl guddio digwyddiadau a chulhau diffiniadau. Priodolwch y gyllideb i'r gwasanaeth a thrafodwch achosion ar lefel y system (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).
- **Rhybuddio ar bob dip.** Mae galw ar symptomau crai yn creu blinder rhybuddion ac yn hyfforddi pobl i anwybyddu galwadau. Galwch ar gyfradd llosgi ac anfonwch losgi araf i docynnau.
- **Gosod ac anghofio.** Mae SLO nad oes neb yn ei adolygu yn drifftio oddi wrth yr hyn sydd ei angen ar ddefnyddwyr. Trefnwch adolygiad chwarterol a chofnodwch beth newidiodd a pham.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Dangosyddion ac amcanion | Dibynadwyedd wedi'i ddisgrifio mewn geiriau; amser i fyny gweinyddion wedi'i adrodd | Mae rhai timau'n diffinio SLIau; mae targedau'n amrywio ac anaml y cânt eu hadolygu | Mae gan deithiau defnyddwyr hanfodol SLIau ac SLOau dogfenedig mewn templed a rennir | Mae SLOau wedi'u tueddu, eu gwirio yn erbyn adborth defnyddwyr, a'u tynhau neu eu llacio gyda thystiolaeth | Mae SLOau wedi'u cytuno â chwsmeriaid a chyflenwyr ac wedi'u halinio â gwasanaethau dibynnol a chontractau |
| Cyllideb gwallau a pholisi | Dim cyllideb; dibynadwyedd yn erbyn nodweddion wedi'i benderfynu drwy ddadl | Cyfrifir cyllideb ar gyfer ychydig o wasanaethau; dim canlyniadau y cytunwyd arnynt | Polisi ysgrifenedig, wedi'i lofnodi gan gynnyrch a gweithrediadau, gyda sbardunau diffiniedig | Cydymffurfio â pholisi wedi'i fesur, eithriadau wedi'u hadolygu, cyllideb yn hysbysu cynllunio rhyddhau | Penderfyniadau cyllideb wedi'u cydlynu ar draws timau sy'n rhannu dibyniaethau; polisi wedi'i ddiwygio wrth i amodau newid |
| Rhybuddio ac ymateb | Rhybuddion trothwy ar adnoddau crai; llawer o alwadau | Rhai rhybuddion cyfradd llosgi; trothwyon wedi'u copïo o enghreifftiau | Rhybuddion cyfradd llosgi aml-ffenestr ar gyfer SLOau allweddol, gyda thocynnau ar gyfer llosgi araf | Ansawdd rhybuddion wedi'i fesur a'i diwnio gan ddefnyddio digwyddiadau'r gorffennol | Rhybuddio wedi'i alinio ar draws cadwyni gwasanaeth, a gwelliant wedi'i yrru gan adolygiadau ar y cyd |

## Rhestr wirio

- [ ] Rhestrir y teithiau defnyddwyr hanfodol ar gyfer y gwasanaeth, pob un wedi'i ysgrifennu o ochr y defnyddiwr.
- [ ] Diffinnir pob SLI fel digwyddiadau da dros ddigwyddiadau dilys, gydag eithriadau wedi'u hysgrifennu.
- [ ] Mae SLIau latency yn defnyddio canraddau a throthwy a nodwyd, nid cyfartaleddau.
- [ ] Mae pob SLO yn nodi ei darged, ei ffenestr, a ble mesurir yr SLI.
- [ ] Mae'r SLO yn fwy caeth nag unrhyw SLA, ac adroddir y ddau ar wahân.
- [ ] Mae polisi cyllideb gwallau yn bodoli, wedi'i lofnodi gan arweinwyr cynnyrch a gweithrediadau, ac yn enwi pwy a gaiff roi eithriadau.
- [ ] Mae rhybuddion cyfradd llosgi yn defnyddio o leiaf ddau gyfnod edrych yn ôl, ac mae llosgi araf yn creu tocynnau yn hytrach na galwadau.
- [ ] Mae pob cofnod digwyddiad yn dangos y gyllideb a ddefnyddiodd.
- [ ] Cymharir cyrraedd SLI â chysylltiadau cymorth a chanlyniadau bodlonrwydd bob mis.
- [ ] Mae gan bob SLO berchennog (tîm neu rôl) a dyddiad adolygu, a logir newidiadau gyda rhesymau.
- [ ] Ni ddefnyddir unrhyw ganlyniad SLO i raddio na gwobrwyo unigolion.

## Anogwyr AI

**Drafftiwch SLIau ymgeisiol o deithiau defnyddwyr.**

```text
Rwy'n rhedeg [enw'r gwasanaeth], a ddefnyddir gan [math o ddefnyddwyr] i wneud
[rhestr o deithiau defnyddwyr hanfodol]. Gallwn fesur yn [rhestr pwyntiau mesur,
er enghraifft cydbwysydd llwyth, logiau cymhwysiad, stiliwr synthetig]. Ar gyfer
pob taith, cynigiwch un neu ddau SLI ymgeisiol wedi'u hysgrifennu fel digwyddiadau
da dros ddigwyddiadau dilys, gyda diffiniad awgrymedig o "da," "dilys," ac
eithriadau. Nodwch gryfderau a mannau dall pob pwynt mesur. Peidiwch â dyfeisio
gwerthoedd targed na meincnodau; gofynnwch i mi beth mae defnyddwyr yn ei
oddef. Rhestrwch eich rhagdybiaethau.
```

**Drafftiwch bolisi cyllideb gwallau.**

```text
Helpwch fi i ddrafftio polisi cyllideb gwallau ar gyfer [enw'r gwasanaeth] gydag
SLO o [targed] dros [ffenestr]. Y rhanddeiliaid yw [rôl cynnyrch] a [rôl
gweithrediadau]. Cynigiwch lefelau sbardun, y weithred ar bob un, pwy a gaiff
roi eithriad a sut y caiff ei gofnodi, a sut yr adolygir y polisi. Cadwch ef i
un dudalen a nodwch benderfyniadau sydd angen noddwr dynol. Peidiwch â
dyfeisio trothwyon o sefydliadau eraill; cyflwynwch opsiynau a chyfaddawdau.
Rhestrwch eich rhagdybiaethau.
```

**Adolygwch SLO am risg chwarae'r system.**

```text
Dyma ein dogfen SLO ar gyfer [enw'r gwasanaeth]: [gludwch ddiffiniad yr SLI,
eithriadau, targed, ffenestr, a log newid]. Nodwch ffyrdd y gellid culhau'r SLI,
newid y ffenestr neu'r targed, neu eithrio digwyddiadau mewn ffordd a fyddai'n
gwneud canlyniadau'n edrych yn well na phrofiad y defnyddiwr. Ar gyfer pob
risg, awgrymwch fetrig neu arfer rheilen warchod. Peidiwch â thybio bwriad.
Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau cysylltiedig, megis argaeledd, ansawdd rhybuddion, a digwyddiadau mawr, a'r rheilen warchod a ddylai eistedd wrth ymyl pob mesur SLO.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod golygiadau i'r pwnc hwn yn cadw pob metrig yn y tabl chwarae'r system a phob croesgyfeiriad â theitl.

## Pwyntiau allweddol

- Dewiswch ychydig o SLIau o'r hyn y mae defnyddwyr yn ei wneud, a mynegwch bob un fel digwyddiadau da dros ddigwyddiadau dilys.
- Penderfyniad am risg yw SLO o dan 100 y cant, a'r gyllideb gwallau yw'r lle y mae'r penderfyniad hwnnw'n ei adael ar gyfer newid.
- Ysgrifennwch y polisi cyllideb gwallau ymlaen llaw, llofnodwch ef ar lefel arweinyddiaeth, a chofnodwch bob eithriad.
- Rhybuddiwch ar gyfradd llosgi gyda mwy nag un ffenestr edrych yn ôl, fel bod galwadau'n adlewyrchu risg go iawn i'r amcan.
- Gwarchodwch y diffiniadau: logiwch bob newid, a chymharwch ganlyniadau SLI â'r hyn y mae defnyddwyr yn ei adrodd.
- Priodolwch gyllideb i wasanaethau a thimau, byth i unigolion, ac adolygwch bob SLO o leiaf yn chwarterol.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Jones, C., Wilkes, J., Murphy, N., and Smith, C., "Service Level Objectives," chapter 4 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/service-level-objectives/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. "Implementing SLOs," chapter 2 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/implementing-slos/
5. "Alerting on SLOs," chapter 5 in *The Site Reliability Workbook*, O'Reilly Media, 2018, https://sre.google/workbook/alerting-on-slos/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
9. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
10. Wikipedia, [Service-level objective](https://en.wikipedia.org/wiki/Service-level_objective).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Availability](https://en.wikipedia.org/wiki/Availability).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
