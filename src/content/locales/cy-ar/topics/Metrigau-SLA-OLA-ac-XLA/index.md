# Metrigau SLA, OLA ac XLA

**Mae cytundeb lefel gwasanaeth yn dweud wrth gwsmer beth a addawyd, mae cytundeb lefel gweithredol yn dweud wrth dimau mewnol beth sydd arnynt i'w gilydd, ac mae cytundeb lefel profiad yn dweud wrthych a yw'r bobl sy'n defnyddio'r gwasanaeth yn well eu byd mewn gwirionedd, felly mae angen y tri arnoch ac mae angen eu hadrodd yn onest yn hytrach nag fel mur o wyrdd.**

## Crynodeb a chymhelliant

Ymrwymiad dogfenedig rhwng darparwr gwasanaeth a chwsmer yw [cytundeb lefel gwasanaeth (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) ynghylch yr hyn y bydd y gwasanaeth yn ei gyflawni: ei oriau, ei argaeledd, pa mor gyflym y mae'r darparwr yn ymateb i ddigwyddiadau ac yn eu datrys, a pha mor gyflym y mae'n cyflawni ceisiadau. Yn ITIL 4 (argraffiad 2019 y fframwaith a gyhoeddwyd gan y perchennog, AXELOS bellach o dan PeopleCert), mae'r arfer [rheoli lefel gwasanaeth](https://en.wikipedia.org/wiki/ITIL) yn diffinio'r targedau hyn, yn eu monitro, ac yn adrodd arnynt. [Cytundeb lefel gweithredol (OLA)](https://en.wikipedia.org/wiki/Operational-level_agreement) yw'r cyfatebydd mewnol: cytundeb rhwng timau yn yr un sefydliad, er enghraifft rhwng y ddesg gwasanaeth a'r tîm rhwydwaith, ynghylch yr hyn y bydd pob un yn ei wneud a pha mor gyflym fel y gellir bodloni'r SLA sy'n wynebu cwsmeriaid. Mae contract ategol yn chwarae'r un rôl ar gyfer cyflenwr allanol (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau).

Cytundeb lefel profiad (XLA) yw'r diweddaraf o'r tri. Mae'n cofnodi canlyniad y cytunwyd arno o ran sut mae pobl yn profi'r gwasanaeth, megis pa mor hawdd y cawsant eu gwaith wedi'i wneud, sut y teimlent am y rhyngweithio, ac a helpodd y gwasanaeth hwy i gyrraedd eu nod. Mae'r syniad wedi tyfu mewn arfer rheoli gwasanaethau oherwydd gellir bodloni SLA tra bo defnyddwyr yn anhapus. Mae'r pwnc hwn yn berchen ar y tri chytundeb a'u hadrodd. Mae'r dyfnder ar sut i fesur profiad yn perthyn i bwnc 6.2, Cytundebau lefel profiad, ac mae cyfatebwyr peirianyddol y targedau yn perthyn i bwnc 5.2, SLIau, SLOau a chyllidebau gwallau.

Mae tri chysyniad ystwyth a dibynadwyedd yn eistedd wrth ymyl y cytundebau hyn. Mae [dangosydd lefel gwasanaeth (SLI)](https://en.wikipedia.org/wiki/Service_level_indicator) yn briodwedd fesuredig o wasanaeth, megis cyfran y ceisiadau a wasanaethir yn llwyddiannus. Mae [amcan lefel gwasanaeth (SLO)](https://en.wikipedia.org/wiki/Service_level_objective) yw'r targed mewnol ar gyfer SLI, fel arfer yn fwy caeth nag unrhyw beth a addawyd i gwsmer. Mae arfer [peirianneg dibynadwyedd safleoedd (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) yn trin yr SLO, a'r gyllideb gwallau sy'n deillio ohono, fel offeryn penderfynu a rennir ar gyfer cynnyrch a gweithrediadau. Y contract yw'r SLA; yr nod peirianyddol yw'r SLO; y mesuriad yw'r SLI. Mae cadw'r tri ar wahân yn osgoi dryswch cyffredin lle defnyddir cymal cosb cytundebol i lywio penderfyniadau peirianneg dyddiol.

Mae gan y teulu fethiant adnabyddus o'r enw adrodd watermelon: adroddiad sy'n wyrdd ar y tu allan ac yn goch ar y tu mewn. Mae pob llinell SLA yn dangos fel un wedi'i bodloni, ac eto mae cwsmeriaid yn rhwystredig, oherwydd i'r mesurau gael eu dewis ar gyfer yr hyn y gallai'r darparwr ei gyrraedd yn ddibynadwy yn hytrach nag ar gyfer yr hyn y mae'r cwsmer yn poeni amdano, neu oherwydd bod cyfartaleddau'n cuddio'r gynffon wael, neu oherwydd i'r cloc gael ei oedi drwy'r aros gwaethaf. Mae'r ateb yn dechnegol yn rhannol (canraddau, clociau gonest, dangosyddion sy'n canolbwyntio ar y defnyddiwr) ac yn gymdeithasol yn rhannol (cytundebau a negodir fel sgwrs, a adolygir yn ôl amserlen, ac a ddarllenir fel cwestiwn am y gwasanaeth, nid fel dyfarniad ar dîm). Mae'r rhybudd ehangach am fesurau sy'n troi'n dargedau ym mhwnc 1.2, Cyfraith Goodhart a seicoleg metrigau.

Mae timau ystwyth yn meddwl mewn amcanion a chyllidebau; mae rheolwyr lefel gwasanaeth ITIL yn meddwl mewn cytundebau ac adolygiadau. Mae'r golygon yn ffitio gyda'i gilydd: mae'r cytundeb yn nodi'r canlyniad, yr amcanion a'r dangosyddion yw sut mae'r tîm yn cadw'r addewid, ac mae'r mesurau profiad yn cadarnhau ei fod o bwys.

Un term olaf: [canradd](https://en.wikipedia.org/wiki/Percentile) yw'r gwerth y mae cyfran benodol o arsylwadau'n syrthio islaw iddo. Yr 85fed ganradd o amser datrys yw'r amser y datryswyd 85 y cant o'r tocynnau o'i fewn. Mae'r rhan fwyaf o dargedau SLA wedi'u hysgrifennu fel canradd neu gyfran, felly sut y cyfrifir y ganradd a'r hyn a gynhwysir ynddi yw craidd y pwnc (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

## Egwyddorion allweddol

- **Cytunwch ar ganlyniadau gyda'r cwsmer, yna mesurwch hwy.** Datganiad wedi'i negodi yw cytundeb o'r hyn sydd ei angen ar y cwsmer a'r hyn y gall y darparwr ei gynnal, wedi'i ysgrifennu yng ngeiriau'r cwsmer ac wedi'i adolygu gyda'i gilydd.
- **Adroddwch ddosbarthiadau a chyfrannau, byth un cyfartaledd.** Gall amser datrys cyfartalog sy'n bodloni'r targed eistedd ar ben cynffon hir o waith hwyr iawn. Nodwch y ganradd, y boblogaeth, a'r cyfrif.
- **Gwnewch y cloc yn onest.** Mae gan bob targed ddigwyddiad dechrau, digwyddiad stopio, a rhestr o amodau oedi. Cyhoeddwch reolau'r cloc, ac adroddwch pa mor aml y defnyddir pob oedi.
- **Haenwch y cytundebau.** Mae'r SLA wedi'i adeiladu ar OLAau a chontractau cyflenwyr, a dylai'r amcanion a osodir y tu mewn i'r tîm fod yn dynnach na'r addewidion a wneir y tu allan iddo. Mae bwlch ar unrhyw haen yn ymddangos fel toriad ar y brig.
- **Parwch bob mesur gweithredol â mesur profiad.** Y signal mwyaf defnyddiol yn yr adroddiad yw targed a fodlonwyd a phrofiad gwael, neu'r gwrthwyneb.
- **Cyfrwch y rhai a fu bron â methu.** Mae gwaith a orffennodd ychydig o fewn y terfyn yn dweud mwy wrthych am risg na'r gwaith a orffennodd ymhell o'i fewn.
- **Adroddwch ar dimau a gwasanaethau, byth ar bobl.** Mae cytundebau'n disgrifio'r hyn y mae gwasanaeth neu dîm yn ymrwymo iddo. Nid ydynt yn ffordd o raddio unigolion.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd cyrraedd SLA | Cyfran yr eitemau a fesurwyd (digwyddiadau, ceisiadau, neu ffenestri amser) a fodlonodd darged SLA a nodwyd yn y cyfnod | Eitemau a fodlonodd y targed wedi'u rhannu â'r eitemau a fesurwyd. Mae'r cloc yn dechrau ar yr amser a logiwyd a ddiffinnir yn y cytundeb (er enghraifft creu tocyn) ac yn stopio ar y digwyddiad stopio a ddiffinnir (er enghraifft adfer wedi'i gadarnhau). Eithrir: eitemau a ganslwyd fel dyblygion ac amser o fewn eithriadau y cytunwyd arnynt megis cynnal a chadw wedi'i drefnu. Adroddwch y cyfrif wrth ymyl y gyfran | Canran, gyda n | Stampiau amser offeryn ITSM; data monitro ar gyfer targedau ar sail amser | Rheoli lefel gwasanaeth; rheoli digwyddiadau; rheoli ceisiadau gwasanaeth | Cyrraedd amcan lefel gwasanaeth dros ffenestr dreigl (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau) | Misol, gyda golwg fewnol wythnosol |
| Cyfran bron â methu | Cyfran yr eitemau a fodlonodd y targed ond a orffennodd o fewn degfed olaf yr amser a ganiateir | Eitemau a orffennodd ar 90 y cant neu fwy o amser y targed ac sydd yn dal y tu mewn iddo, wedi'u rhannu ag eitemau a fodlonodd y targed. Yr un cloc â'r SLA. n/a ar gyfer ffenestri amser (mae'n berthnasol i fesurau amser-i-darged yn unig) | Canran | Stampiau amser offeryn ITSM | Rheoli lefel gwasanaeth | Cyfran y gwaith sy'n agos at y disgwyliad lefel gwasanaeth ar siart llif (gweler pwnc 2.1, Mesurau llif) | Misol |
| Cyfran oedi'r cloc | Cyfran cyfanswm amser tocyn a aeth heibio a dreuliwyd mewn cyflyrau sy'n oedi cloc yr SLA | Cyfanswm amser oedi wedi'i rannu â chyfanswm amser a aeth heibio o'r dechrau i'r stop, ar gyfer eitemau dan sylw. Eithrir eitemau heb ddefnyddio cyflwr oedi. Adroddwch yn ôl cyflwr oedi | Canran | Hanes statws offeryn ITSM | Rheoli lefel gwasanaeth; rheoli digwyddiadau | Amser wedi'i rwystro ac amser aros mewn golwg llif (gweler pwnc 2.4, Metrigau ffrwd werth) | Misol |
| Cyfradd cyrraedd OLA | Cyfran y trosglwyddiadau mewnol a fodlonodd darged yr OLA rhwng dau dîm | Trosglwyddiadau a gwblhawyd o fewn targed yr OLA wedi'u rhannu â throsglwyddiadau a dderbyniwyd. Mae'r cloc yn dechrau pan neilltuir y tîm derbyn ac yn stopio pan fo'n dychwelyd neu'n cau'r eitem. Eithrir: eitemau a ailneilltuwyd mewn camgymeriad, wedi'u cyfrif ar wahân | Canran, gyda n | Hanes neilltuo offeryn ITSM | Rheoli lefel gwasanaeth; rheoli digwyddiadau | Amser aros trosglwyddo a gwaith wedi'i rwystro rhwng timau (gweler pwnc 9.3, Metrigau cydweithio a throsglwyddo) | Misol |
| Amser aros trosglwyddo (85fed canradd) | Yr amser y mae eitem yn aros yn ciw tîm derbyn cyn i waith ddechrau | 85fed canradd yr amser rhwng neilltuo i'r tîm derbyn a'r weithred gyntaf a logiwyd gan y tîm hwnnw. Eithrir: eitemau yn aros am y cwsmer | Oriau neu funudau | Hanes neilltuo a gweithgarwch offeryn ITSM | Rheoli lefel gwasanaeth; rheoli digwyddiadau | Amser ciw mewn golwg llif (gweler pwnc 2.3, Gwaith ar y gweill a chiwio) | Wythnosol |
| Sgôr profiad yn ôl taith | Sgôr cwsmer neu ddefnyddiwr o sut y cefnogodd y gwasanaeth daith ddiffiniedig, megis cael gliniadur newydd neu adfer o doriad | Cymedr a dosbarthiad sgoriau arolwg ar raddfa sefydlog ar gyfer teithiau a gwblhawyd yn y cyfnod. Adroddwch y gyfradd ymateb a chymysgedd ymatebwyr. Eithrir: arolygon rhannol. Nid un cyfartaledd, felly dangoswch y dosbarthiad | Graddfa sgorio, gyda chyfradd ymateb | Arolwg byr ar ôl rhyngweithio; digwyddiadau taith o'r offeryn ITSM | Rheoli lefel gwasanaeth; arferion bodlonrwydd cwsmeriaid (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid) | Adborth cwsmeriaid a mesurau canlyniad | Misol, gyda phob ton wedi'i dangos |
| Bwlch watermelon | Cyfran y cyfnodau adrodd neu'r gwasanaethau lle mae'r SLA yn darllen fel un wedi'i fodloni tra bo'r mesur profiad neu fesur effaith ar ddefnyddwyr yn darllen yn wael | Gwasanaethau (neu gyfnodau) gyda chyrraedd SLA ar neu uwchlaw'r targed a phrofiad islaw ei lefel y cytunwyd arni, wedi'u rhannu â gwasanaethau (neu gyfnodau) gyda chyrraedd SLA ar neu uwchlaw'r targed. Rhaid cytuno ar y lefel profiad cyn sgorio'r cyfnod | Canran o wasanaethau gwyrdd | Cyrraedd SLA a sgôr profiad gyda'i gilydd | Rheoli lefel gwasanaeth; gwelliant parhaus | Ôl-sylliad o ganlyniadau yn erbyn canlyniadau | Chwarterol |
| Cwmpas a chyfredoldeb cytundebau | Cyfran y gwasanaethau byw y mae eu SLA, OLAau, a chontractau cyflenwyr yn bodoli ac a adolygwyd o fewn y cyfwng y cytunwyd arno | Gwasanaethau gyda'r tair haen wedi'u dogfennu ac wedi'u hadolygu o fewn y cyfwng, wedi'u rhannu â gwasanaethau byw yn y catalog gwasanaethau. Gosodir y cyfwng gan y sefydliad. Eithrir: gwasanaethau sy'n cael eu hymddeol | Canran | Catalog gwasanaethau (service catalogue yn sillafiad ITIL ei hun) a chofrestr cytundebau | Rheoli lefel gwasanaeth; rheoli catalog gwasanaethau; rheoli cyflenwyr | Cytundebau gweithio a siarteri tîm wedi'u hadolygu ar amserlen reolaidd | Chwarterol |

## Argymhellion

### Sefydlwch y cytundebau

**1. Ysgrifennwch bob SLA yn iaith y cwsmer a'i glymu ag un canlyniad.** Dechreuwch o'r hyn sydd ei angen ar y cwsmer, megis "gweithiwr sydd wedi'i gloi allan yn gweithio eto'n gyflym", ac yna dewiswch y mesur. Mae cytundeb byr gydag ychydig o dargedau ystyrlon yn well nag un hir nad oes neb yn ei ddarllen. Ysgrifennwch y cloc ar gyfer pob targed: y digwyddiad dechrau, y digwyddiad stopio, a'r amodau oedi (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau).

**2. Datganwch dargedau fel canraddau neu gyfrannau, gyda phoblogaeth a nodwyd.** Mae "90 y cant o ddigwyddiadau blaenoriaeth 2 wedi'u hadfer o fewn pedair awr" yn dweud mwy na "adferiad cyfartalog o dan ddwy awr". Cytunwch ar yr hyn sy'n cyfrif: pa flaenoriaethau, pa oriau, pa fathau o gais. Dangoswch y cyfrif gyda phob canran fel nad yw mis ag wyth digwyddiad yn cael ei ddarllen fel mis ag wyth cant.

**3. Deilliwch OLAau o'r SLA, a rhowch dîm perchnogol a enwir i bob un.** Gweithiwch yn ôl o darged y cwsmer: os addewir adferiad o fewn pedair awr i'r cwsmer, rhaid i'r OLAau adael lle ar gyfer canfod, prysbennu, trosglwyddiadau, ac atgyweirio. Ysgrifennwch bob OLA fel cytundeb cydfuddiannol byr gyda thîm derbyn, amser ymateb disgwyliedig, a llwybr ar gyfer anghydfodau. Mae OLA yn bodoli i helpu timau gynllunio, felly cadwch ef mor ysgafn ag y mae'r berthynas yn caniatáu.

**4. Cadwch yr amcanion yn dynnach na'r addewid.** Gosodwch yr SLO mewnol ar lefel fwy caeth na'r SLA fel bod wythnos wael yn cael ei sylwi a'i chywiro cyn toriad sy'n weladwy i gwsmeriaid (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau). Trinwch yr SLA fel llawr y mae cyllid a'r adran gyfreithiol yn poeni amdano a'r SLO fel y rhif y mae peirianwyr yn llywio yn ôl. Defnyddiwch y gyllideb gwallau fel y ffordd y mae cynnyrch a gweithrediadau yn penderfynu rhwng gwaith nodweddion a gwaith dibynadwyedd.

### Mesurwch yn onest

**5. Cyhoeddwch reolau'r cloc ac adroddwch ar oedi.** Y llwybr mwyaf cyffredin i adroddiad gwyrdd yw cyflwr oedi hael, megis "aros am gwsmer" a ddefnyddir pan mai'r darparwr yw'r un sy'n aros. Adroddwch gyfran oedi'r cloc yn ôl cyflwr oedi, samplwch rai tocynnau a oedwyd bob mis, a gofynnwch a fyddai'r cwsmer yn cytuno y dylai'r cloc fod wedi stopio. Cadwch y rhestr o resymau oedi a ganiateir yn fyr ac wedi'i hysgrifennu i'r cytundeb.

**6. Dangoswch y dosbarthiad cyfan wrth ymyl y targed.** Rhowch y canolrif, yr 85fed neu'r 95fed canradd, a'r degfed gwaethaf wrth ymyl y gyfradd cyrraedd. Gall cyrraedd gwastad o 95 y cant guddio cynffon o waith a gymerodd ddyddiau (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

**7. Olrheiniwch y rhai a fu bron â methu ac achosion toriadau.** Mae cyfran bron â methu yn dweud wrthych faint o lwc sydd yn y rhif gwyrdd. Pan fo toriad yn digwydd, cofnodwch y categori achos ac a oedd yn broblem capasiti, trosglwyddo, cyflenwr, neu ddiffiniad. Cysylltwch y categorïau mwyaf â rheoli problemau (gweler pwnc 4.1, Metrigau rheoli problemau).

**8. Mesurwch giw'r OLA, nid dim ond y cyrraedd.** Mae amser aros trosglwyddo ar yr 85fed canradd yn dangos ble mae gwaith yn arafu, ymhell cyn i doriad SLA ymddangos. Rhannwch ef gyda'r tîm anfon a'r tîm derbyn, a'i ddisgrifio fel priodwedd o'r llif rhyngddynt. Mae'r sgwrs yn ymwneud â'r ciw, byth â'r bobl ynddo (gweler pwnc 2.3, Gwaith ar y gweill a chiwio).

### Ychwanegwch brofiad a chaewch y bwlch

**9. Parwch bob SLA â mesur profiad ar gyfer yr un daith.** Gofynnwch gwestiwn byr i ddefnyddwyr ar ôl y rhyngweithio ynghylch a weithiodd ac pa mor galed oedd, ac adroddwch y gyfradd ymateb a chymysgedd ymatebwyr. Cytunwch ymlaen llaw pa lefel sy'n cyfrif fel digon da, fel bod XLA yn ganlyniad wedi'i negodi ac nid rhif a ddyfeisiwyd ar ôl y ffaith (gweler pwnc 6.2, Cytundebau lefel profiad, a phwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

**10. Adroddwch y bwlch watermelon a'i drin fel canfyddiad.** Olrheiniwch pa mor aml y caiff SLA ei fodloni tra bo profiad yn wael. Mae bwlch cynyddol yn dweud wrthych fod mesurau'r SLA yn drifftio oddi wrth yr hyn y mae defnyddwyr yn poeni amdano, a'r ymateb cywir yw diwygio'r mesur, nid esbonio'r anghysondeb. Adolygwch ef yn chwarterol gyda chynrychiolydd y cwsmer yn bresennol.

**11. Adolygwch y cytundebau ar amserlen ac ymddeolwch y rhai nad oes neb yn eu defnyddio.** Gwiriwch bob cytundeb yn erbyn y catalog gwasanaethau, y contractau cyflenwyr, a'r gwaith gwirioneddol. Mae set lai o gytundebau byw yn haws i adrodd arni ac yn anoddach i'w chwarae.

**12. Adroddwch bob gwasanaeth mewn un olwg sy'n cyfuno'r tair haen.** Dangoswch y cyrraedd SLA, y dosbarthiad, aros trosglwyddo OLA, y sgôr profiad, a'r gwaith gwella agored ar gyfer pob gwasanaeth ar un dudalen. Deilliwch y statws o'r data, nid o liw a ddewiswyd gan berchennog y gwasanaeth. Gwnewch y dudalen yn agored i'r cwsmer a'r timau (gweler pwnc 11.1, Dylunio dangosfwrdd metrigau gwasanaeth).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfradd cyrraedd SLA | Dewis y targed i fod yn hawdd; cau tocynnau'n gynnar a'u hailagor yn ddiweddarach; ail-ddosbarthu blaenoriaeth i lawr; eithrio achosion caled fel "y tu allan i'r cwmpas" | Cyfradd ailagor a chyfradd ail-ddosbarthu blaenoriaeth; sampl o docynnau caeedig a ddarllenir gyda'r cwsmer; adolygiad o'r rhestr eithriadau bob chwarter |
| Cyfran bron â methu | Stopio'r cloc funud cyn y terfyn, yna parhau â'r gwaith oddi ar y cofnod; hollti tocyn yn ddau un byrrach | Yr amser o'r cyswllt cwsmer olaf i adfer wedi'i gadarnhau; cyfrif tocynnau cysylltiedig neu blant fesul digwyddiad |
| Cyfran oedi'r cloc | Defnyddio cyflyrau oedi ar docynnau nad ydynt yn aros am y cwsmer; symud gwaith i gyflwr nad yw'n cael ei gyfrif | Rhesymau oedi wedi'u harchwilio ar sampl; cyfran yr oedi a wrthdroir gan y cwsmer; sgôr profiad ar gyfer tocynnau a oedwyd |
| Cyfradd cyrraedd OLA | Gwrthod trosglwyddiadau yn ôl i'r anfonwr i ailgychwyn y cloc; marcio eitemau fel rhai a dderbyniwyd heb ddechrau gwaith | Cyfrif bownsio fesul eitem ac cyfanswm yr amser i adfer ar draws timau; canlyniad yr SLA o'r dechrau i'r diwedd |
| Amser aros trosglwyddo (85fed canradd) | Neilltuo i berson yn hytrach na chiw'r tîm i guddio'r aros; logio gweithred gyntaf symbolaidd | Ansawdd y weithred gyntaf wedi'i samplu; yr amser o neilltuo i'r diweddariad cyntaf sy'n weladwy i'r cwsmer |
| Sgôr profiad yn ôl taith | Anfon arolygon i ddefnyddwyr bodlon yn unig; gofyn cwestiynau arweiniol; hyfforddi ymatebwyr i roi sgoriau uchel | Cymysgedd ymatebwyr yn erbyn y boblogaeth; cyfradd ymateb wedi'i dangos wrth ymyl y sgôr; sylwadau agored wedi'u darllen yn yr adolygiad |
| Bwlch watermelon | Gosod y lefel profiad yn isel fel bod y bwlch yn aros yn fach; newid y mesur profiad pan fo'n gostwng | Lefel profiad y cytunwyd arni ymlaen llaw a newidiadau wedi'u logio gyda rhesymau; tuedd y dosbarthiad cyfan |
| Cwmpas a chyfredoldeb cytundebau | Marcio cytundeb fel un a adolygwyd heb adolygiad go iawn; cyfrif dogfen fonyn fel SLA | Tystiolaeth o'r adolygiad (mynychwyr, newidiadau, penderfyniadau); sampl o gytundebau a ddarllenir am gynnwys gwirioneddol a chymeradwyaeth cwsmer |

Mae darlleniad iach yn dangos cyrraedd sy'n symud am resymau dealladwy, rhai a fu bron â methu sy'n brin ac wedi'u hesbonio, oediadau sy'n aros o fewn y rhestr y cytunwyd arni, amseroedd aros trosglwyddo sy'n cael eu trafod gan y timau sy'n berchen arnynt, a mesur profiad sy'n cytuno i raddau helaeth â'r SLA. Lle mae'r ddau'n anghytuno, mae gan y tîm eisoes nodyn o'r achos ac eitem wella.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| SLAau cytundebol gyda chosbau | Clir, gorfodadwy, cydnabyddedig yn gyfreithiol | Annog gemau cloc ac adrodd amddiffynnol; gall cosbau suro'r berthynas |
| SLAau heb gosbau, gydag adolygiad rheolaidd | Adeiladu ymddiriedaeth a data gonest; canolbwyntio ar ddysgu | Llai o ddylanwad pan fo cyflenwr yn methu targedau yn gyson |
| OLAau manwl rhwng pob tîm | Disgwyliadau clir a llai o anghydfodau | Biwrocratiaeth; mae timau'n optimeiddio ar gyfer eu cloc eu hunain yn lle cloc y cwsmer |
| OLAau ysgafn gyda tharged rhannol o'r dechrau i'r diwedd | Annog cydweithredu; llai o waith papur | Angen ymddiriedaeth a gwelededd ciwiau da i setlo anghydfodau |
| Ychwanegu XLAau at SLAau | Dangos a yw'r gwasanaeth yn helpu pobl | Mae data arolwg yn fwy swnllyd ac yn arafach; mae priodoli'n anoddach |

Cadwch y cytundeb yn fach, adroddwch y dosbarthiad, a defnyddiwch ddata profiad i wirio'r data gweithredol. Gwariwch ymdrech ar reolau'r cloc a'r trosglwyddiadau, lle mae'r rhan fwyaf o anghytundeb am rif yn codi.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Os yw ein hadroddiad SLA yn wyrdd i gyd, beth fyddem yn disgwyl i ddefnyddwyr ei ddweud am y gwasanaeth?**
Gofynnwch i'r grŵp enwi gwasanaeth sydd wedi bod yn wyrdd am sawl mis ac yna casglwch yr hyn y mae defnyddwyr yn ei ddweud mewn gwirionedd mewn sylwadau a chwynion. Cymharwch y ddau. Dylai'r hwylusydd chwilio am fylchau rhwng y mesur a'r profiad byw, a nodi pa fesurau a ddewiswyd am eu bod yn hawdd i'w cyrraedd.

**2. Ble mae ein cloc yn stopio, a phwy a benderfynodd hynny?**
Cerddwch drwy'r rheolau dechrau, stopio ac oedi ar gyfer un targed pwysig a gofynnwch pwy a ysgrifennodd bob un. Edrychwch ar gyfran y tocynnau mewn cyflwr oedi, a gofynnwch a fyddai cwsmeriaid yn cytuno. Cytunwch ar un rheol i'w thynhau neu ei hegluro.

**3. Pa rai o'n hOLAau sy'n helpu timau gynllunio, a pha rai sydd ond yn neilltuo bai?**
Rhestrwch y cytundebau mewnol a gofynnwch pwy sy'n darllen pob un a phryd. Trafodwch beth sy'n digwydd ar ôl OLA a fethwyd: sgwrs am y ciw, neu chwilio am fai. Y nod yw symud y drafodaeth tuag at lif y gwaith rhwng timau. Dewiswch un OLA i'w symleiddio neu ei ymddeol.

**4. Faint o'n gwyrdd sy'n lwc?**
Dangoswch y gyfran bron â methu ar gyfer y targed pwysicaf. Trafodwch beth fyddai'n digwydd pe bai gan y mis nesaf ychydig mwy o achosion caled neu ychydig yn llai o bobl ar gael. Gofynnwch a oes gan y tîm slac, a ble mae'n eistedd.

**5. Beth fyddai'r cwsmer yn hoffi i ni ei addo nad ydym yn ei fesur heddiw?**
Gwahoddwch gynrychiolydd y cwsmer neu ddefnyddiwr i ddisgrifio'r hyn sy'n bwysig iddynt yn eu geiriau eu hunain, megis gallu cyrraedd person neu gael gliniadur cyn y diwrnod cyntaf. Cipiwch ddau neu dri chanlyniad. Penderfynwch pa rai y gellid eu gwneud yn gwestiwn arolwg byr neu'n ddigwyddiad sydd eisoes yn y data, a sut y byddai'r grŵp yn cytuno ar lefel dda.

**6. Sut fyddem ni'n gwybod pe bai ein mesurau SLA wedi drifftio oddi wrth yr hyn y mae defnyddwyr yn poeni amdano?**
Trafodwch y bwlch watermelon fel signal a gofynnwch pwy sy'n edrych arno. Ystyriwch pa mor aml y caiff y cytundebau eu hadolygu ac a yw'r cwsmer yn mynychu. Cytunwch ar ddyddiad adolygu a'r dystiolaeth i'w chyflwyno, gan gynnwys sampl o docynnau a'r canlyniadau profiad diweddaraf.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni sydd hefyd yn rhedeg eu gwasanaethau yn bodloni'r SLA drwy eu hamcanion a'u cyllidebau gwallau eu hunain, ac maent yn teimlo'r gost pan fo cosb SLA neu ddwysáu cwsmer yn ymyrryd â gwaith cynlluniedig. Dylent gadw SLOau yn dynnach nag SLAau a thrin yr SLA fel llawr diogelwch, nid fel y targed dyddiol (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn cario'r clociau. Maent angen rheolau clir ar gyfer amodau dechrau, stopio ac oedi, OLAau a rennir sy'n enwi'r ciw derbyn, a gwelededd o amseroedd aros trosglwyddo. Dylent adrodd achosion toriadau yn blaen a'u defnyddio fel mewnbwn i waith problemau a chapasiti (gweler pwnc 4.1, Metrigau rheoli problemau). Dylent wrthsefyll pwysau i esbonio canlyniad drwy'r cloc yn lle trwsio'r achos.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn defnyddio adroddiadau SLA i weld a yw ymrwymiadau'n cael eu bodloni a ble i fuddsoddi. Dylent ofyn am ddosbarthiadau, cyfran oedi'r cloc, y gyfran bron â methu, a'r bwlch watermelon, a dylent drin rhediad di-dor o wyrdd gyda chwilfrydedd. Mae ariannu'r gwaith gwella sy'n dilyn dadansoddiad toriad, a gwarchod adrodd gonest rhag bai, yn bwysicach na'r targed ei hun (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid eisiau i'r cytundeb ddisgrifio'r hyn y maent yn ei deimlo: pa mor gyflym y trwsir y broblem, pa mor aml y mae'n ailadrodd, ac a allant gyrraedd rhywun sy'n helpu. Dylent fod yn rhan o'r adolygiad o gytundebau a chael ffordd o ddweud pan nad yw adroddiad gwyrdd yn cyfateb i'w profiad. Mae crynodeb un dudalen darllenadwy, gyda'r rhesymau dros unrhyw doriad a'r atgyweiriad cynlluniedig, yn adeiladu mwy o ymddiriedaeth na thabl hir o gyrraedd.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn cefnogi system amserlennu glinigol a ddefnyddir gan staff wardiau. Mae perchennog y gwasanaeth, y ddesg gwasanaeth, y tîm cymhwysiad, a'r tîm seilwaith yn cwrdd yn fisol. Mae'r holl rifau isod yn enghreifftiol.

Mae'r SLA yn addo y caiff 90 y cant o ddigwyddiadau blaenoriaeth 2 (colli swyddogaeth yn rhannol gan effeithio ar ward) eu hadfer o fewn pedair awr, wedi'i fesur o greu'r tocyn, mewn gwasanaeth 24 awr, saith diwrnod. Mae'r adroddiad misol yn dangos cyrraedd o 94 y cant ar 36 digwyddiad (enghreifftiol), yn wyrdd cyfforddus. Mae gan yr arolwg profiad, a anfonir ar ôl pob cau blaenoriaeth 2, gyfradd ymateb o 41 y cant (enghreifftiol) a sgôr canolrifol o 3 ar raddfa pum pwynt, ymhell islaw'r lefel o 4 a gytunwyd gan berchennog y gwasanaeth a rheolwyr wardiau fel yr XLA. Mae'r bwlch watermelon yn weladwy am y trydydd mis yn olynol.

Mae'r tîm yn edrych ar y dosbarthiad. Canolrif yr adferiad yw 1 awr 40 munud (enghreifftiol), ond y 95fed canradd yw 3 awr 50 munud (enghreifftiol), a'r gyfran bron â methu yw 31 y cant (enghreifftiol): gorffennodd bron i draean o'r digwyddiadau a "fodlonwyd" yn degfed olaf yr amser a ganiateir. Maent yn edrych ar gyfran oedi'r cloc ac yn canfod bod 22 y cant (enghreifftiol) o'r amser a aeth heibio yn cael ei dreulio yn y cyflwr "aros am gwsmer". Mae sampl o ddeg tocyn a oedwyd yn dangos pedwar lle'r oedd y ward wedi ateb ac arhosodd y tocyn wedi'i oedi tan y sifft nesaf, ac mewn tri arall roedd y tîm cymhwysiad yn aros am y tîm seilwaith. Mae'r amser aros trosglwyddo ar yr 85fed canradd ar gyfer y ciw seilwaith yn 2 awr 10 munud (enghreifftiol) yn erbyn OLA o 30 munud (enghreifftiol), a chyfradd cyrraedd yr OLA ar gyfer y trosglwyddiad hwnnw yw 58 y cant (enghreifftiol).

Mae'r penderfyniad yn ymarferol. Maent yn newid rheol y cloc fel mai dim ond ar ôl cais dogfenedig i'r cwsmer y gellir defnyddio "aros am gwsmer", ac mae'r cloc yn ailddechrau ar yr ateb nesaf. Maent yn ychwanegu llwybr ar alwad ar gyfer y ciw seilwaith yn ystod oriau wardiau ac yn cytuno ar OLA llai, gydag adolygiad mewn mis. Maent yn ychwanegu'r mesur profiad a'r bwlch watermelon at yr adroddiad un dudalen misol ac yn gwahodd rheolwr ward i'r adolygiad. Maent hefyd yn gostwng yr SLO mewnol i adferiad pedair awr mwy caeth ar gyfer 95 y cant o ddigwyddiadau, fel bod y tîm yn sylwi ar drafferth cyn bod yr SLA mewn perygl.

Mae risg chwarae'r system yn ymddangos yn yr ail fis. Ar ôl i reol yr oedi newid, mae'r cyrraedd yn gostwng i 89 y cant (enghreifftiol), ac mae rheolwr yn gofyn i'r ddesg gwasanaeth "ailwirio blaenoriaethau". Mae'r tîm yn gweld pigyn mewn israddio o flaenoriaeth 2 i flaenoriaeth 3, yn paru cyrraedd â'r cyfraddau ail-ddosbarthu ac ailagor, ac yn mynnu rheswm yn y cofnod ar gyfer unrhyw newid blaenoriaeth. Yn y trydydd mis, mae'r cyrraedd yn 91 y cant (enghreifftiol), mae'r 95fed canradd yn is, mae'r gyfran bron â methu wedi disgyn, ac mae'r sgôr profiad canolrifol wedi codi i 3.8 (enghreifftiol). Mae'r bwlch yn culhau am fod y gwaith wedi gwella, ac mae'r rhifau'n gredadwy.

## Y golwg fesul sector

**Busnes newydd.** Yn aml nid oes gan gwmni bach SLA ffurfiol o gwbl, dim ond addewid anffurfiol i ychydig o gwsmeriaid cynnar. Ysgrifennwch un dudalen sy'n enwi oriau'r gwasanaeth, targed ymateb, a tharged adfer a ddatgenir fel canradd, a chadwch SLO y tu mewn i'r tîm. Mae sgyrsiau cwsmeriaid yn cymryd lle XLA, felly ysgrifennwch i lawr beth mae'r tri chwsmer pwysicaf yn ei ddweud bob mis.

**Busnes bach.** Mae tîm TG bach fel arfer yn dibynnu'n drwm ar gyflenwyr allanol, felly mae'r contractau ategol yn bwysicach nag OLAau mewnol. Gwiriwch fod ymrwymiad pob cyflenwr o leiaf mor gaeth â'r SLA a roddwch i'ch defnyddwyr eich hun, ac olrheiniwch berfformiad gwirioneddol y cyflenwr (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau). Mae tudalen fisol syml, gyda chyrraedd, rhai a fu bron â methu, ac arolwg defnyddwyr byr, yn ddigon.

**Menter fawr.** Mae sefydliadau mawr angen cofrestr o gytundebau a metrig cwmpas. Safonwch y rheolau cloc a'r diffiniadau ar draws gwasanaethau fel bod crynodebau'n ystyrlon (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau). Gochelwch rhag yr effaith watermelon mewn crynodebau rheoli, lle mae cannoedd o linellau gwyrdd yn cuddio ychydig o wasanaethau â phoen defnyddwyr difrifol.

**Llywodraeth a'r sector cyhoeddus.** Yn aml mae gan gyrff cyhoeddus safonau gwasanaeth statudol, rheolau caffael sy'n gosod SLAau mewn contractau, a dyletswydd i gyhoeddi canlyniadau. Cadwch y mesur cyhoeddedig yn glir ac yn wiriadwy, cadwch reolau'r cloc a'r dystiolaeth ar gyfer archwilio, a thrinwch ddinasyddion fel cwsmeriaid â llais yn yr adolygiad (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol). Lle mae'r contract yn anhyblyg, ychwanegwch fesur profiad wrth ei ymyl heb newid geiriad y contract.

## Yr achos busnes: cymhellion, ROI a TCO

Achos dros ymddiriedaeth a dros osgoi ymdrech wastraff yw'r achos dros well metrigau cytundeb. Mae adroddiadau sy'n cyfateb i sut mae defnyddwyr yn teimlo yn lleihau dwysáu ac anghydfodau, yn byrhau'r ddadl fisol am ba un o'r rhifau sy'n iawn, ac yn gadael i arweinwyr ariannu'r gwaith sy'n bwysig. Mae OLAau clir yn lleihau oedi wrth drosglwyddo, sydd ymhlith y cyfranwyr mwyaf at adferiadau hir. Mae bwlch watermelon, a ddaliwyd yn gynnar, yn osgoi'r gost fwy o berthynas cwsmer neu adnewyddiad contract yn mynd o'i le.

Mae'r costau'n gymedrol: amser i ysgrifennu ac adolygu'r cytundebau, data cloc a throsglwyddo dibynadwy (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth), arolwg byr, ac adolygiad misol. Mae cyfanswm y gost yn tyfu gyda nifer y cytundebau, felly mae rhai llai a symlach yn rhatach i'w cadw.

Mae'r elw'n ymddangos fel llai o doriadau sy'n synnu, llai o amser yn esbonio adroddiadau, a dewisiadau buddsoddi gwell eu gwybodaeth. Trinwch y rhain fel patrymau i'w harsylwi a'u cymharu dros amser, nid fel cyfrifiad. Cymharwch ymdrech adolygiad misol â chost un anghydfod wedi'i ddwysáu neu un adnewyddiad a gollwyd yn eich sefydliad eich hun, gan ddefnyddio eich data eich hun (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Adrodd cyfartaleddau yn unig.** Mae cyfartaledd yn cuddio cynffon hir o waith hwyr. Adroddwch ganraddau, y gyfran bron â methu, a'r cyfrif.
- **Ysgrifennu'r SLA o amgylch yr hyn sy'n hawdd ei gyrraedd.** Mae targed a ddewiswyd er cysur yn rhoi adroddiad sydd bob amser yn wyrdd. Dechreuwch o'r hyn sydd ei angen ar y cwsmer a dangoswch y bwlch yn agored.
- **Oedi'r cloc i wella'r rhif.** Mae cyflyrau oedi hael yn troi'r SLA yn ffuglen. Cyhoeddwch y rheolau oedi, archwiliwch samplau, ac adroddwch y gyfran oedi.
- **OLAau fel arf.** Mae OLA a ddefnyddir i feio'r tîm nesaf yn dysgu timau i fownsio gwaith. Trinwch fethiannau fel gwybodaeth am y ciw a thrwsiwch y llif.
- **Adrodd a yrrir gan gosbau.** Mae cosbau trwm yn annog dosbarthu amddiffynnol ac anghydfodau am y cloc. Defnyddiwch gosbau yn gynnil a'u parau â chyfraddau ailagor ac ail-ddosbarthu.
- **Data profiad heb gyfradd ymateb.** Mae sgôr uchel o sampl fach, hunan-ddewisedig yn camarwain. Dangoswch y gyfradd ymateb a chymysgedd ymatebwyr wrth ymyl pob canlyniad.
- **Cytundebau nad oes neb yn eu hadolygu.** Mae cytundebau hen yn disgrifio gwasanaeth nad yw'n bodoli mwyach. Trefnwch adolygiadau ac ymddeolwch yr hyn na ddefnyddir.
- **Targedau unigol o gytundebau tîm.** Mae hollti SLA tîm yn gwotâu personol yn arwain at gau ar frys a graddio. Cadwch y cytundeb ar lefel y gwasanaeth a'r tîm.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Dylunio cytundebau | Addewidion llafar neu dempledi a gopïwyd; targedau a ddewiswyd drwy arfer | Rhai SLAau ysgrifenedig; OLAau yn brin; clociau'n wahanol rhwng timau | Templed byr gyda thargedau ar sail canlyniad, canraddau, a rheolau cloc ysgrifenedig | Cytundebau wedi'u hadolygu ar amserlen, gyda'r cwsmer ac wedi'u clymu ag SLOau | Haenau SLA, OLA, contract cyflenwr, ac SLO wedi'u haddasu gyda'i gilydd wrth i amodau newid |
| Ansawdd mesur | Cyfrifon â llaw; cyfartaleddau; oediadau heb eu dogfennu | Cyrraedd ar sail offer ar gyfer rhai gwasanaethau; defnydd oedi heb ei adolygu | Un diffiniad a ffynhonnell data; dosbarthiadau a chyfran oedi wedi'u dangos | Rhai a fu bron â methu, achosion toriadau, ac amseroedd aros trosglwyddo wedi'u tueddu a'u samplu | Data traws-dîm a chyflenwyr wedi'i gysoni; diffiniadau wedi'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Cysylltiad profiad | Dim adborth defnyddwyr wedi'i glymu â'r SLA | Arolygon ad hoc ar gyfer rhai gwasanaethau | Arolwg byr ar gyfer teithiau allweddol, gyda'r gyfradd ymateb wedi'i dangos | Targedau profiad wedi'u cytuno â chwsmeriaid a'r bwlch watermelon wedi'i adrodd | Mae mesurau profiad a gweithredol yn llywio gwaith gwella a rennir gyda chwsmeriaid |
| Defnydd mewn gwelliant | Adroddir ar ôl cwyn | Trafodir toriadau mewn cyfarfodydd tîm | Adolygiad misol gyda pherchnogion a chamau | Mae achosion toriadau yn bwydo gwelliant a gwaith problemau wedi'i ariannu | Mae cwsmeriaid, cyflenwyr, a thimau yn cynllunio gwelliant gyda'i gilydd o'r un olwg |

## Rhestr wirio

- [ ] Mae pob SLA yn nodi ei ganlyniad, ei darged fel canradd neu gyfran, a'i boblogaeth.
- [ ] Ysgrifennir y digwyddiad dechrau, y digwyddiad stopio, a'r amodau oedi a ganiateir ar gyfer pob targed.
- [ ] Mae gan bob SLA sy'n wynebu cwsmeriaid OLAau neu gontractau cyflenwyr sy'n ffitio o'i fewn, pob un gyda thîm perchnogol a enwir.
- [ ] Mae amcanion mewnol yn fwy caeth na thargedau SLA yr addawyd.
- [ ] Mae adroddiadau'n dangos y dosbarthiad, y cyfrif, y gyfran bron â methu, a chyfran oedi'r cloc.
- [ ] Darllenir sampl o docynnau a oedwyd a chaeedig bob mis.
- [ ] Mae gan bob gwasanaeth allweddol fesur profiad gyda lefel y cytunwyd arni, ac mae'r gyfradd ymateb wedi'i dangos.
- [ ] Olrheinir y bwlch watermelon a'i adolygu gyda chynrychiolydd cwsmer.
- [ ] Adolygir cytundebau ar amserlen a'u hymddeol pan na chânt eu defnyddio.
- [ ] Ni ddefnyddir unrhyw fetrig cytundeb i raddio unigolion.

## Anogwyr AI

**Adolygwch SLA am broblemau cloc a geiriad.**

```text
Dyma destun ein SLA ar gyfer [gwasanaeth]: [gludwch destun y cytundeb]. Y
targedau yw [rhestr targedau], wedi'u mesur yn [offeryn]. Nodwch amwyseddau yn y
digwyddiad dechrau, y digwyddiad stopio, a'r amodau oedi, mannau lle gallai
cyfartaledd guddio cynffon hir, a geiriad y gallai cwsmer ei ddarllen yn
wahanol i ni. Awgrymwch eiriad cliriach a'r cwestiynau y dylwn eu gofyn i'r
cwsmer. Peidiwch â dyfeisio gwerthoedd meincnod na chasgliadau cyfreithiol.
Rhestrwch eich rhagdybiaethau.
```

**Drafftiwch OLA rhwng dau dîm.**

```text
Mae angen cytundeb lefel gweithredol byr arnaf rhwng [tîm anfon] a [tîm derbyn]
i gefnogi ein SLA o [targed SLA] ar gyfer [gwasanaeth]. Y trosglwyddiad
nodweddiadol yw [disgrifiad], a'r ciw yw [enw'r ciw neu'r offeryn]. Drafftiwch
OLA un dudalen gyda'r pwrpas, yr ymateb disgwyliedig, rheolau'r cloc, ffordd o
setlo anghydfodau, a dyddiad adolygu. Cadwch y naws yn gydweithredol a
pheidiwch ag awgrymu cosbau oni ofynnaf. Peidiwch â dyfeisio gwerthoedd
targed; gofynnwch i mi amdanynt. Rhestrwch eich rhagdybiaethau.
```

**Chwiliwch am fwlch watermelon yn ein data.**

```text
Dyma grynodeb o gyrraedd SLA a mesur profiad ar gyfer [rhestr o wasanaethau]
dros [cyfnod]: [gludwch y tabl]. Nodwch wasanaethau lle mae'r SLA yn darllen
fel un wedi'i fodloni a phrofiad yn darllen yn wael, ac awgrymwch esboniadau
posibl i ymchwilio iddynt, megis oediadau cloc, ail-ddosbarthu blaenoriaeth,
neu fesur a ddewiswyd yn wael. Cynigiwch gwestiynau a sampl fach o docynnau i'w
darllen ar gyfer pob un. Peidiwch â thybio achosion na dyfeisio trothwyon.
Rhestrwch eich rhagdybiaethau.
```

**Dyluniwch arolwg profiad byr ar gyfer XLA.**

```text
Rydym eisiau ychwanegu mesur profiad ar gyfer [taith, er enghraifft cael
gliniadur newydd] ar gyfer [cynulleidfa]. Drafftiwch [nifer] o gwestiynau
niwtral, cynllun ar gyfer pryd a sut i'w hanfon, a sut i adrodd y gyfradd
ymateb a chymysgedd ymatebwyr. Nodwch eiriad a allai ogwyddo atebion ac
awgrymwch sut i gytuno ar y lefel darged gyda [rôl cynrychiolydd cwsmer].
Peidiwch â dyfeisio sgoriau meincnod. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i ba bwnc sy'n diffinio'r metrig y tu ôl i linell SLA a'r rheilen warchod a ddylai eistedd wrth ei hymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod golygiadau i'r pwnc hwn yn cadw'r templed, rheolau'r cloc, a'r tabl chwarae'r system mewn cam.

## Pwyntiau allweddol

- Addewid i'r cwsmer yw SLA, addewid rhwng timau yw OLA, a chanlyniad profiad y cytunwyd arno yw XLA; mae angen ei fesur a'i berchennog ei hun ar bob un.
- Adroddwch ganraddau, cyfrifon, rhai a fu bron â methu, a chyfran oedi'r cloc, oherwydd bod cyfartaleddau ac oediadau tawel yn cynhyrchu adroddiadau gwyrdd dros wasanaeth gwael.
- Deilliwch OLAau o'r SLA a chadwch amcanion mewnol yn dynnach na'r addewid.
- Parwch bob SLA â mesur profiad ar gyfer yr un daith, ac adroddwch y bwlch watermelon fel canfyddiad i weithredu arno.
- Adolygwch gytundebau ar amserlen gyda'r cwsmer yn yr ystafell, ac ymddeolwch yr hyn nad oes neb yn ei ddefnyddio.
- Cadwch bob metrig cytundeb ar lefel gwasanaethau a thimau, byth unigolion.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SLOs*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Operational-level agreement](https://en.wikipedia.org/wiki/Operational-level_agreement).
10. Wikipedia, [Service level indicator](https://en.wikipedia.org/wiki/Service_level_indicator).
11. Wikipedia, [Service level objective](https://en.wikipedia.org/wiki/Service_level_objective).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
