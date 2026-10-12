# Metrigau rhagweld a chynllunio cyflawni

**Mae timau sy'n cyflawni meddalwedd yn barhaus ac sydd hefyd yn rhedeg gwasanaethau byw angen rhagolygon gonest, nid ymrwymiadau a wasgwyd o amcangyfrifon, felly cynlluniwch o lif y gwaith gorffenedig, rhowch ystodau yn lle dyddiadau, a chadwch unrhyw rif cynllunio lleol i'r tîm allan o gymariaethau ac allan o dargedau.**

## Crynodeb a chymhelliant

Mae rhanddeiliaid yn gofyn dau gwestiwn i bob tîm cyflawni: "Pryd fydd e wedi'i wneud?" a "Faint allwch chi ei gymryd?" Mae'r ateb ystwyth yn dechrau o'r nodau yn egwyddorion Maniffesto Ystwyth: cyflawni meddalwedd werthfawr yn barhaus, cydweithio â rhanddeiliaid bob dydd, myfyrio a gwella'n rheolaidd, ac adeiladu'r gwaith o amgylch pobl gymhellol y ymddiriedir ynddynt i'w wneud. Sgwrs rhwng rhanddeiliaid am ganlyniadau tebygol a risg yw rhagweld sy'n gwasanaethu'r nodau hynny. Nid addewid a dynnir dan bwysau mohono.

Mae gan dimau sy'n rhedeg gwasanaethau byw anhawster ychwanegol. Rhennir eu capasiti rhwng newid wedi'i gynllunio, gwaith digwyddiadau heb ei gynllunio, ceisiadau gwasanaeth a gwelliant. Bydd cynllun sy'n anwybyddu'r llwyth gweithredol yn methu am resymau nad oedd neb wedi'u cynllunio (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio). Mae rheoli gwasanaethau TG (ITSM), fel y'i codeiddiwyd gan ITIL, yn trin hyn fel cwestiwn o gapasiti a galw. [Cynllunio capasiti](https://en.wikipedia.org/wiki/Capacity_planning) yw'r broses o benderfynu ar y capasiti sydd ei angen ar sefydliad i fodloni galw sy'n newid. Mae'r arfer ystwyth o gynllunio yn erbyn yr hyn y gall y tîm ei orffen mewn gwirionedd yr un syniad ar lefel tîm.

Mae dwy ffordd eang o ragweld cyflawni:

- **O amcangyfrifon.** Mae'r tîm yn maint eitemau mewn rhyw uned, yn adio'r meintiau, ac yn rhannu â chyfradd. Mae llawer o dimau'n defnyddio maint cymharol megis [pwyntiau stori](https://en.wikipedia.org/wiki/Story_point), a gelwir y gyfradd yn [fuanedd](https://en.wikipedia.org/wiki/Velocity_(software_development)). Mae'n gyflym i ddechrau, yn dibynnu ar arferion amcangyfrif y tîm, ac yn ystyrlon dim ond y tu mewn i un tîm.
- **O ddata llif.** Mae'r tîm yn defnyddio ei gofnod ei hun o waith gorffenedig: faint o eitemau y mae'n eu cwblhau yr wythnos (trwybwn) a pha mor hir y mae eitemau'n ei gymryd o ddechrau i orffen (amser cylch). Gan eu bod yn gyfrifon ac yn amseroedd a aeth heibio, nid barnau, maent yn gwrthsefyll drifft a gellir eu cyfuno ag efelychu i roi ystod o ganlyniadau. Daw'r dull hwn o'r traddodiad llif, sy'n cynnwys Canllaw Kanban, ac mae'n gweithio gydag unrhyw ffordd o drefnu gwaith, gan gynnwys timau sy'n cyflawni'n barhaus heb gyfnod cynllunio sefydlog.

Mae'r pwnc hwn yn pwyso tuag at yr ail ddull, oherwydd bod cyflawni meddalwedd parhaus yn cynhyrchu llif cyson o eitemau gorffenedig y mae data llif yn eu disgrifio'n uniongyrchol (gweler pwnc 2.1, Mesurau llif, a phwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif). Mae'n dal i drafod y cyntaf, oherwydd bod llawer o dimau'n defnyddio amcangyfrifon, ac oherwydd bod camddefnyddio buanedd ymhlith y ffyrdd mwyaf cyffredin y mae metrigau cyflawni'n mynd o chwith.

[Rhagweld](https://en.wikipedia.org/wiki/Forecasting) dyfodol ansicr yw rhagolygon, ac ansicrwydd yw'r pwynt. Mae syniad y [côn ansicrwydd](https://en.wikipedia.org/wiki/Cone_of_Uncertainty) yn dweud mai amcangyfrifon cynnar yw'r lleiaf sicr. Mae'r [gwall cynllunio](https://en.wikipedia.org/wiki/Planning_fallacy) yn dweud bod pobl yn tanamcangyfrif pa mor hir y bydd eu cynlluniau eu hunain yn ei gymryd hyd yn oed pan wyddant fod cynlluniau tebyg wedi rhedeg yn hwyr. Mae mesurau rhagweld da yn enwi hyn ac yn mesur pa mor aml y mae rhagolygon yn taro.

Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn bwysig yma, oherwydd bod rhagolygon a chynlluniau'n hawdd yn dod yn addewidion ac yna'n dargedau. Unwaith y caiff tîm ei farnu ar daro dyddiad, mae'n cuddio risg, yn tocio ansawdd, neu'n sandbagio'r amcangyfrif (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Egwyddorion allweddol

- **Rhagwelwch o waith gorffenedig.** Mae'r hyn y mae'r tîm wedi'i gyflawni yn dystiolaeth well na'r hyn y mae neb yn credu y bydd yn ei gyflawni.
- **Rhowch ystod gyda thebygolrwydd.** Mae "yn debygol erbyn diwedd y mis nesaf, yn debygol iawn erbyn diwedd yr un wedyn" yn well nag un dyddiad.
- **Cynlluniwch yn erbyn capasiti go iawn.** Cynhwyswch waith gweithredol, gadewch amser ar gyfer gwelliant, a pheidiwch â chynllunio i ddefnyddio llawn.
- **Cadwch amcangyfrifon yn lleol.** Offeryn cynllunio preifat ar gyfer un tîm yw unrhyw uned maint, byth sail ar gyfer cymharu.
- **Mesurwch ansawdd rhagolygon, nid cyflawni yn unig.** Mae rhagolwg sy'n gywir am y rhesymau anghywir yn lwc.
- **Trinwch y rhagolwg fel un a rennir.** Mae rhanddeiliaid a'r tîm yn ei adeiladu gyda'i gilydd ac yn ei ddiwygio pan fydd ffeithiau'n newid.
- **Ymddiriedwch yn y tîm.** Mae pobl y ymddiriedir ynddynt ac a gefnogir yn rhoi rhagolygon gonest.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd taro rhagolwg | Cyfran y rhagolygon lle syrthiodd y canlyniad gwirioneddol y tu mewn i'r ystod a nodwyd | rhagolygon y bu eu canlyniad gwirioneddol o fewn yr ystod a nodwyd / rhagolygon a wnaed | canran | Log rhagolygon a chofnodion cyflawni | Rheoli capasiti a pherfformiad; gwelliant parhaus | Cywirdeb rhagweld mewn sgyrsiau cynllunio | Misol |
| Lled ystod rhagolwg | Pa mor eang oedd yr ystod a nodwyd, o'i chymharu â'r rhagolwg canolrif | (terfyn uchaf llai terfyn isaf) / rhagolwg canolrif | cymhareb | Log rhagolygon | Rheoli capasiti a pherfformiad | Culhau'r côn ansicrwydd | Misol |
| Llwyddiant nod cyflawni | Cyfran y nodau cyflawni a nodwyd a fodlonwyd ar gyfer y cyfnod, a farnwyd yn ôl canlyniad | nodau a fodlonwyd / nodau a osodwyd | canran | Cofnodion nodau y cytunwyd arnynt gyda rhanddeiliaid | Rheoli lefelau gwasanaeth; gwelliant parhaus | Adolygiad canlyniad gyda rhanddeiliaid | Misol neu fesul rhyddhad nod |
| Cyfradd newid cwmpas | Cyfran y gwaith ymrwymedig a ychwanegwyd, a dynnwyd neu a ailfaint ar ôl gwneud y rhagolwg | eitemau a ychwanegwyd neu a dynnwyd ar ôl rhagolwg / eitemau yn y rhagolwg gwreiddiol | canran | Hanes newidiadau tracker gwaith | Galluogi newid; rheoli lefelau gwasanaeth | Addasu'r ôl-groniad i adborth | Misol |
| Dyraniad capasiti | Cyfran capasiti'r tîm a dreulir ar newid, gwaith gweithredol a gwelliant | eitemau neu oriau wedi'u cwblhau ym mhob categori / pob eitem neu awr wedi'i chwblhau | canran | Tracker gwaith gyda math o waith | Rheoli capasiti a pherfformiad; rheoli digwyddiadau | Dosbarthiad mathau o waith | Misol |
| Sefydlogrwydd trwybwn | Amrywiad mewn trwybwn wythnosol | gwyriad safonol trwybwn wythnosol / cymedr trwybwn wythnosol | cymhareb | Tracker gwaith | Rheoli capasiti a pherfformiad | Rhagweladwyedd llif | Misol |
| Buanedd lleol | Gwaith gorffenedig un tîm yn ei uned maint ei hun fesul cyfnod cynllunio | swm amcangyfrifon ar gyfer eitemau sy'n bodloni'r diffiniad o orffen yn y cyfnod | pwyntiau a ddiffinnir gan y tîm | Tracker gwaith | Rheoli capasiti a pherfformiad | Cymorth cynllunio capasiti tîm | Fesul cyfnod cynllunio |

Diffiniwch y clociau. Caiff rhagolwg ei "wneud" pan gaiff ei gofnodi a'i rannu â rhanddeiliaid, a'i "fodloni" pan ryddheir y canlyniad ac y mae'n cael ei ddefnyddio, nid pan uniri'r cod. Mae trwybwn yn cyfrif eitemau sy'n bodloni'r diffiniad o orffen, gydag eitemau o wahanol fathau yn cael eu cyfrif mewn cyfresi ar wahân os yw eu maint yn wahanol iawn. Dangosir buanedd lleol dim ond i'r tîm sy'n berchen arno.

## Argymhellion

### Rhagwelwch o lif

**1. Adeiladwch y rhagolwg o drwybwn ac amser cylch.** Cyfrifwch yr eitemau a orffennwyd bob wythnos am y 12 i 26 wythnos diwethaf. Defnyddiwch yr hanes hwnnw i ragweld faint o eitemau fydd wedi gorffen erbyn dyddiad penodol, neu pryd mae set o eitemau'n debygol o orffen. Mae efelychiad [dull Monte Carlo](https://en.wikipedia.org/wiki/Monte_Carlo_method), sy'n samplo o hanes y tîm ei hun filoedd o weithiau, yn troi'r hanes yn ystod tebygolrwydd. Mae taenlenni syml neu sgriptiau bach yn gwneud hyn yn dda. Nodwch ffenestr yr hanes a dyddiad y rhagolwg.

**2. Adroddwch ganraddau canlyniadau.** Dywedwch "50 y cant yn debygol erbyn 14 Mawrth, 85 y cant yn debygol erbyn 4 Ebrill, 95 y cant yn debygol erbyn 18 Ebrill." Mae pob canradd yn ddatganiad gonest o risg, a gall rhanddeiliaid ddewis faint o ymyl sydd ei angen arnynt. Mae un dyddiad yn cuddio'r dewis hwnnw (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

**3. Defnyddiwch ganraddau amser cylch ar gyfer eitemau unigol.** Ar gyfer un eitem, mae'r 85fed ganradd o amseroedd cylch y gorffennol yn ateb "pa mor hir y gallai hyn ei gymryd?" yn well nag unrhyw amcangyfrif. Dangoswch ef ar y bwrdd, fel llinell y gellir cymharu oedran eitemau ar y gweill yn ei herbyn (gweler pwnc 2.1, Mesurau llif).

**4. Cadwch feintiau eitemau yn fras gyfartal.** Mae rhagweld ar sail trwybwn yn gweithio orau pan fo eitemau'n fach a digon tebyg i'w cyfrif. Mae timau'n cyrraedd yno drwy dorri gwaith yn y darn lleiaf sy'n dal i gyflwyno gwerth, arferiad o gyflawni meddalwedd parhaus ynddo'i hun. Os yw eitemau'n amrywio'n fawr, olrheiniwch gyfresi ar wahân ar gyfer gwahanol fathau o waith.

**5. Adnewyddwch y rhagolwg pryd bynnag y bydd ffeithiau'n newid.** Mae rhagolwg yn olwg fyw. Pan fydd y cwmpas yn newid, maint y tîm yn newid, neu ddigwyddiad mawr yn bwyta wythnos, ailredwch ef a dywedwch wrth y rhanddeiliaid. Fersiynwch y rhagolygon fel y gallwch eu barnu'n ddiweddarach.

### Cynlluniwch yn erbyn capasiti go iawn

**6. Dyrannwch gapasiti yn ôl math o waith.** Cofnodwch pa gyfran o waith gorffenedig y tîm oedd newid wedi'i gynllunio, gwaith gweithredol heb ei gynllunio, ceisiadau gwasanaeth a gwelliant. Cynlluniwch ar gyfer y gyfran y mae profiad yn ei dangos, nid ar gyfer delfryd. Mae timau sy'n rhedeg gwasanaethau byw yn aml yn canfod bod traean neu fwy o'u capasiti yn mynd i waith gweithredol, a'r ffigur yw eu hunain i'w fesur, nid i'w fenthyg (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).

**7. Neilltuwch gapasiti ar gyfer gwelliant.** Mae gwelliant parhaus yn rhan sefydlog o'r gwaith, felly cynlluniwch amser ar ei gyfer yn y dyraniad, a'i ddiogelu. Mae timau sy'n ei wasgu allan ym mhob cyfnod prysur yn canfod bod eu llwyth gweithredol yn codi, sy'n ei wasgu ymhellach. Olrheiniwch y gyfran gwelliant ac effaith y gwelliannau ar y gyfran weithredol.

**8. Peidiwch â chynllunio i ddefnyddio llawn.** Nid oes gan dîm a gynlluniwyd ar 100 y cant le i amrywiad, ac mae ciwiau'n tyfu wrth i ddefnyddio nesáu at y terfyn (gweler pwnc 2.3, Gwaith ar y gweill a chiwio). Gadewch slac ar gyfer yr annisgwyl, a'i drin fel dewis dylunio ac nid fel gwastraff.

### Defnyddiwch amcangyfrifon yn ofalus os ydych yn eu defnyddio

**9. Trinwch fuanedd fel cymorth cynllunio lleol.** Os yw tîm yn maint gwaith mewn pwyntiau stori, gall ei fuanedd ei helpu i benderfynu faint i'w gymryd yn ei sgwrs gynllunio nesaf, a dim ond â gorffennol diweddar yr un tîm hwnnw y dylid ei gymharu. Peidiwch byth â chymharu timau, gosod targed buanedd, nac adrodd buanedd i fyny fel mesur cynhyrchiant. Nid oes uned gyffredin gan bwyntiau ar draws timau, ac mae'r pwysau i godi'r rhif yn chwyddo'r amcangyfrifon heb gyflawni mwy.

**10. Cymharwch amcangyfrifon ag amseroedd cylch gwirioneddol yn achlysurol.** Plotiwch amcangyfrifon yn erbyn pa mor hir y cymerodd eitemau. Os nad yw amcangyfrifon mawr yn cymryd yn hirach na rhai bach, nid yw'r ymdrech amcangyfrif yn prynu llawer, a gall cyfrif eitemau wasanaethu'r tîm yr un mor dda. Os ydynt yn cydberthyn, mae'r amcangyfrifon yn cario gwybodaeth sy'n werth ei chadw. Gadewch i'r tîm benderfynu gyda'r data.

### Mesurwch a yw'n gweithio

**11. Logiwch bob rhagolwg a'i sgorio.** Cofnodwch y rhagolwg, yr ystod a'r canlyniad gwirioneddol, yna cyfrifwch y gyfradd taro. Dylai rhagolwg 85fed canradd wedi'i galibro'n dda ddod yn wir tua 85 y cant o'r amser. Os yw'r tarro ymhell uwchlaw neu islaw, addaswch y dull. Rhannwch y log gyda rhanddeiliaid, oherwydd bod ymddiriedaeth yn y rhagolwg yn cael ei hadeiladu o hanes.

**12. Barnwch nodau cyflawni yn ôl canlyniad.** Mae nod megis "gall cwsmeriaid dalu drwy anfoneb" yn cael ei fodloni pan all cwsmeriaid wneud hynny, nid pan gaeir y tasgau. Cytunwch ar nodau gyda rhanddeiliaid mewn geiriau plaen, adolygwch hwy gyda'ch gilydd, a chofnodwch y canlyniad. Mae hyn yn cadw cynllunio wedi'i glymu wrth gydweithio parhaus, ac mae'n digalonni cludo gwaith nad oes neb yn ei ddefnyddio (gweler pwnc 1.3, Canlyniadau yn hytrach nag allbwn: dewis beth i'w fesur).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfradd taro rhagolwg | Datgan ystodau eang iawn fel bod pob rhagolwg yn taro; ail-ragweld ar ôl y ffaith | Lled ystod rhagolwg; cadw'r rhagolwg gwreiddiol yn y log; cymharu ystodau â hanes cymheiriaid |
| Lled ystod rhagolwg | Culhau ystodau i edrych yn hyderus | Cyfradd taro rhagolwg; mynnu bod yr ystod yn cael ei hadeiladu o hanes wedi'i gofnodi |
| Llwyddiant nod cyflawni | Gosod nodau hawdd; ailddiffinio nod ar ôl y ffaith; cyfrif allbwn fel canlyniad | Rhanddeiliaid yn barnu'r canlyniad; geiriad nodau wedi'i gadw mewn log; gwirio data defnydd ar gyfer y newid a gyflwynwyd |
| Cyfradd newid cwmpas | Rhewi cwmpas drwy wrthod newidiadau dilys; cuddio newid cwmpas drwy ailfaint eitemau | Bodlonrwydd rhanddeiliaid ag ymatebolrwydd; rhesymau newid wedi'u cofnodi |
| Dyraniad capasiti | Camlabelu gwaith gweithredol fel gwelliant; cuddio llwyth gweithredol drwy weithio oddi ar y bwrdd | Cysoni â chofnodion digwyddiadau a cheisiadau; samplo eitemau am fath |
| Sefydlogrwydd trwybwn | Hollti eitemau yn ddarnau dibwys i godi'r cyfrif; cau eitemau heb eu gorffen | Dosbarthiad maint eitemau; cyfradd ailagor; sampl am werth a gyflwynwyd |
| Buanedd lleol | Chwyddo amcangyfrifon; hollti straeon i hawlio pwyntiau; cymharu timau | Ei gadw'n breifat i'r tîm; cymharu â thrwybwn ac amser cylch; peidio byth â gosod targed |

Darlleniad iach yw rhagolygon sy'n dod yn wir ar y gyfradd a nodir tua, nodau y mae rhanddeiliaid yn cytuno iddynt gael eu bodloni, darlun capasiti sy'n cyfateb i'r hyn y mae'r tîm yn byw, a rhif buanedd, os yw'n bodoli, a ddefnyddir gan y tîm a neb arall.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Rhagweld ar sail llif | Defnyddio data go iawn, gwrthsefyll chwyddo, rhoi ystodau | Angen hanes cyson ac eitemau o faint tebyg |
| Rhagweld ar sail amcangyfrif | Cyflym i ddechrau, annog trafodaeth am y gwaith | Goddrychol, yn chwyddo dan bwysau, ddim yn gymaradwy ar draws timau |
| Ymrwymiad un dyddiad | Syml i'w gyfleu | Cuddio risg; cosbi gonestrwydd |
| Ystod gyda thebygolrwydd | Gonest am ansicrwydd | Anoddach i rai rhanddeiliaid ei ddarllen i ddechrau |
| Cynllunio ar ddefnyddio llawn | Edrych yn effeithlon | Ciwiau'n tyfu; dim lle ar gyfer digwyddiadau na dysgu |
| Slac wedi'i gynllunio | Amsugno amrywiad a chefnogi gwelliant | Edrych fel capasiti segur i'r anghrediniol |

Yr ateb mewn rhyddiaith yw dechrau o ddata llif, ychwanegu amcangyfrifon yn unig lle maent yn helpu'r tîm, a siarad mewn ystodau. Lle mae contract yn mynnu dyddiad, rhowch y dyddiad y mae'r 85fed neu'r 95fed ganradd yn ei gefnogi a dywedwch beth fyddai'n ei newid.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth fyddem yn ei ddweud pe bai rhanddeiliad yn gofyn "pryd fydd e wedi'i wneud" ac eisiau ateb gonest?**
Gofynnwch i'r tîm ateb ar gyfer darn go iawn o waith, yn gyntaf gydag un dyddiad ac yna gydag ystod. Sylwch ar y gwahaniaeth yn pa mor gyfforddus y mae pob ateb yn teimlo. Dylai'r hwylusydd gipio'r hyn y byddai'r tîm angen ei wybod i roi'r ystod yn onest, megis hanes, maint eitemau a risgiau hysbys.

**2. Faint o'n capasiti sydd mewn gwirionedd yn mynd i newid wedi'i gynllunio, a sut ydym ni'n gwybod?**
Edrychwch ar dri mis diwethaf o waith gorffenedig yn ôl math. Cymharwch â'r cynllun a wnaeth y tîm. Mae'r sgwrs yn aml yn datgelu bod gwaith gweithredol yn fwy na'r cynlluniwyd a bod gwaith gwella'n llai. Cytunwch beth ddylai'r dyraniad fod, a pha benderfyniad fyddai'n ei newid.

**3. Ble mae ein hamcangyfrifon yn ein helpu, a ble maent ond yn costio amser?**
Plotiwch sampl o amcangyfrifon yn erbyn amseroedd cylch gwirioneddol. Trafodwch a oedd amcangyfrifon mwy yn wirioneddol arafach. Os yw'r cyswllt yn wan, gofynnwch beth fyddai'r tîm yn ei wneud yn wahanol pe bai ond yn cyfrif eitemau. Penderfynwch a ddylid parhau, symleiddio, neu roi'r gorau i amcangyfrif am gyfnod treial.

**4. Pwy sy'n gweld ein rhifau cynllunio lefel tîm, a beth sy'n digwydd iddynt?**
Olrheiniwch bob rhif cynllunio o'r tîm i'w gynulleidfa. Gofynnwch a yw unrhyw un yn cymharu timau ag ef neu'n gosod targedau. Os felly, trafodwch sut i atal hynny a beth i'w gynnig yn lle hynny. Dylai'r hwylusydd fod yn barod i esbonio bod rhifau lleol yn colli eu gwerth pan fyddant yn teithio.

**5. Pryd y methodd un o'n rhagolygon, a beth ddysgon ni?**
Dewiswch un methiant a'i olrhain. Ai newid cwmpas ydoedd, digwyddiad mawr, dibyniaeth, neu dybiaeth anghywir? Beth fyddai wedi ei nodi'n gynt? Cytunwch ar un newid i'r arfer rhagweld, megis cofnodi'r dibyniaethau neu adnewyddu'r rhagolwg yn wythnosol.

**6. Pa nodau a fodlonwyd gennym y chwarter diwethaf, a phwy a ddywedodd hynny?**
Rhestrwch y nodau cyflawni a phwy a farnodd bob un. Os barnodd y tîm ei nodau ei hun, trafodwch sut i ddod â rhanddeiliaid i mewn. Mae'r sgwrs yn cefnogi cydweithio parhaus, ac mae'n dangos a yw nodau am ganlyniadau neu am dasgau.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n berchen ar y rhagolwg a'r data llif sy'n ei gefnogi. Dylent gyhoeddi ystodau, cadw eitemau'n fach, ac ail-ragweld pan fydd ffeithiau'n newid. Dylai timau sy'n dewis maint gwaith mewn pwyntiau gadw'r rhifau y tu mewn i'r tîm. Y nod yw llif cyson o waith gorffenedig, gwerthfawr, a rhagolwg y mae rhanddeiliaid yn ymddiried ynddo am fod ganddo hanes.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau'n cario'r galw sy'n amharu ar gynlluniau. Dylent rannu llwyth digwyddiadau a cheisiadau gyda thimau cyflawni, fel bod cynlluniau capasiti'n dechrau o rifau go iawn. Gall timau gweithrediadau sydd hefyd yn cyflawni newid ddefnyddio'r un rhagweld ar sail llif ar gyfer eu gwaith eu hunain. Mae cynllunio ar y cyd o waith newid a gwaith rhedeg yn lle da ar gyfer cydweithio parhaus ar draws y ddau grŵp.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn penderfynu a yw rhagolwg yn ddatganiad risg neu'n addewid. Dylent ofyn am ystodau, ariannu slac a gwelliant, a gwrthsefyll defnyddio buanedd neu drwybwn i gymharu timau. Dylai cyrff llywodraethu edrych ar y gyfradd taro rhagolwg dros amser ac ar ganlyniadau nodau, a thrin methiannau ailadroddus fel signal am y system, megis dibyniaethau a llwyth gweithredol, nid am y bobl.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn poeni pryd y gwelant y newid ac a fydd yn helpu. Mae ystod gyda hyder a nodir yn eu gwasanaethu'n well na dyddiad sy'n llithro. Dylent fod yn rhan o farnu a fodlonwyd nodau, gan mai nhw sy'n teimlo'r canlyniad. Mae dweud wrth ddefnyddwyr pan fydd rhagolwg yn newid, a pham, yn rhan o'u trin fel cydweithwyr.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae tîm digidol cwmni ynni rhanbarthol yn adeiladu porth bilio cwsmeriaid ac yn ei redeg mewn cynhyrchu. Mae'r rhifau isod yn enghreifftiol.

Mae rhanddeiliaid wedi gofyn i'r tîm am ddyddiad ar gyfer nodwedd cynllun talu newydd sy'n cynnwys 22 eitem. Y chwarter diwethaf rhoddodd y tîm ddyddiad pendant yn seiliedig ar ei amcangyfrifon, ei fethu o bum wythnos oherwydd dau ddigwyddiad mawr, a cholli hyder rhanddeiliaid. Y tro hwn mae'r arweinydd cyflawni'n tynnu'r trwybwn am y 20 wythnos diwethaf, sy'n amrywio o 3 i 9 eitem yr wythnos gyda chanolrif o 6, ac yn nodi bod gwaith gweithredol wedi cymryd tua 35 y cant o'r eitemau gorffenedig.

Mae'n rhedeg efelychiad o'r hanes. Mae'n dangos bod 22 eitem yn gorffen o fewn 4 wythnos tua hanner yr amser, o fewn 6 wythnos tua 85 y cant o'r amser, ac o fewn 8 wythnos tua 95 y cant o'r amser. Mae'n cyflwyno'r tri dyddiad hyn i'r rhanddeiliaid, ynghyd â'r rhagdybiaethau: maint tîm heb newid, llwyth gweithredol fel y 20 wythnos diwethaf, a dim cwmpas newydd. Mae perchennog cynnyrch yn gofyn am lansio ar gyfer dyddiad bilio penodol wyth wythnos i ffwrdd. Mae'r tîm a'r rhanddeiliaid yn cytuno i gynllunio ar gyfer y dyddiad 85 y cant, cadw'r ddwy wythnos olaf fel byffer, a gosod pwynt gwirio bob pythefnos i ail-ragweld.

Yn y pwynt gwirio cyntaf, mae nam yn y porth talu wedi cymryd tri diwrnod ac mae'r efelychiad yn symud y dyddiad 85 y cant o wythnos. Mae'r tîm yn dweud wrth y rhanddeiliaid yr un diwrnod, gyda'r rheswm, ac maent yn cytuno i symud un eitem gwerth isel allan. Mae'r nodwedd yn mynd yn fyw ar ddyddiad y byffer. Caiff y nod cyflawni, "gall cwsmeriaid sefydlu cynllun talu heb ffonio," ei farnu gan y perchennog cynnyrch a phanel cwsmeriaid ar ôl tair wythnos. Fe'i bodlonir i'r rhan fwyaf o gwsmeriaid, ac mae thema sylwadau'n dangos dryswch am un sgrin, sy'n ymuno â'r ôl-groniad. Mae'r tîm yn cofnodi bod ei gyfradd taro rhagolwg ar gyfer y chwarter yn bedwar o bump. Mae'r rhanddeiliaid yn gofyn i'r arweinydd cyflawni ddod ag ystodau rhagolwg i'r sesiwn gynllunio nesaf, ac mae'r tîm yn rhoi'r gorau i ddefnyddio pwyntiau stori oherwydd bod cyfrif eitemau wedi rhoi'r un ateb.

## Y golwg fesul sector

**Busnes newydd.** Mae blaenoriaethau'n newid yn gyflym, felly cadwch ragolygon yn fyr ac yn fras. Olrheiniwch drwybwn o'r dechrau, gan nad yw'n costio dim, a rhowch ystodau i'r sylfaenwyr. Gwrthsefyllwch fewnforio system gynllunio a adeiladwyd ar gyfer timau mawr.

**Busnes bach.** Gall un neu ddau o bobl wneud gwaith newid a gwaith rhedeg gyda'i gilydd, heb gapasiti sbâr. Byddwch yn benodol am yr hollt, a dywedwch wrth y perchennog pan fydd digwyddiad yn gwthio dyddiad. Mae cyfrif wythnosol syml o eitemau gorffenedig yn ddigon.

**Menter fawr.** Mae llawer o dimau a dibyniaethau yn gwneud rhagolygon yn dibynnu ar lif timau eraill. Rhagwelwch bob tîm o'i ddata ei hun, gwnewch ddibyniaethau'n weladwy, a chyfunwch ystodau'n ofalus, gan fod adio'r achosion gorau yn rhoi cyfanswm camarweiniol. Osgowch grynodebau sy'n cymharu timau yn ôl buanedd.

**Llywodraeth a'r sector cyhoeddus.** Mae cyllidebau sefydlog, caffael a dyddiadau statudol yn creu pwysau am ymrwymiadau un dyddiad. Dywedwch y dyddiad a gefnogir gan y ganradd a ddewiswyd, esboniwch y rhagdybiaethau, a chofnodwch gyfaddawdau cwmpas yn agored. Lle mae dyddiad gorfodol yn bodoli, cynlluniwch y cwmpas i'w ffitio (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae'r gost yn isel. Mae data trwybwn ac amser cylch fel arfer yn bodoli yn nhracker gwaith y tîm. Mae taenlen rhagweld neu sgript fach yn cymryd diwrnod i'w hadeiladu, ac mae rhagolwg yn cymryd munudau i'w ddiweddaru. Y gost gylchol yw'r amser i logio rhagolygon a chanlyniadau, ac i gynnal sgwrs pwynt gwirio fer gyda rhanddeiliaid.

Daw'r elw o lai o syrpreisys a gwell penderfyniadau. Gall rhanddeiliaid sy'n deall y risg ddewis byffer, addasu cwmpas, neu ad-drefnu gwaith yn gynnar. Mae timau'n treulio llai o amser ar seremonïau amcangyfrif os yw cyfrif eitemau yn gwasanaethu cystal. Mae gwrthdaro dyddiadau a fethwyd a'r llwybrau byr ansawdd y maent yn eu hysgogi yn disgyn. Adeiladwch yr achos o'ch cofnod eich hun: cyfran y rhagolygon a ddaliodd, yr amser a dreuliwyd yn amcangyfrif, a'r newidiadau cwmpas a wnaed yn gynnar yn hytrach nag yn hwyr. Peidiwch â benthyg ffigurau rhagweladwyedd o sefydliadau eraill.

## Gwrthbatrymau a maglau

- **Trin rhagolwg fel ymrwymiad.** Mae'n troi'r rhagolwg yn darged, ac mae gonestrwydd yn dod yn ddrud. Cyflwynwch ystodau a'u diwygio.
- **Cymharu timau yn ôl buanedd.** Mae pwyntiau'n lleol, ac mae cymharu yn eu chwyddo. Cymharwch dîm â'i orffennol ei hun yn unig.
- **Cynllunio ar ddefnyddio llawn.** Mae amrywiad yn troi'n oedi. Gadewch slac.
- **Anwybyddu gwaith gweithredol.** Mae cynlluniau'n methu ar y llwyth nad oedd neb wedi'i gynllunio. Mesurwch a chynlluniwch y dyraniad.
- **Defnyddio un dyddiad ar gyfer popeth.** Defnyddiwch ganraddau a dywedwch pa un a ddewisoch.
- **Amcangyfrif yn fwy manwl nag y mae'r data'n ei gefnogi.** Amcangyfrifon manwl ar gyfer gwaith pell yw'r lleiaf dibynadwy. Rhagwelwch waith pell yn fras.
- **Gosod targed buanedd neu drwybwn.** Bydd y rhif yn codi ac ni fydd y gwerth.
- **Peidio byth â sgorio rhagolygon.** Heb hanes, ni all ymddiriedaeth dyfu.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Dull rhagweld | Dyfaliadau un dyddiad | Amcangyfrifon wedi'u hadio â llaw | Ystodau ar sail llif gyda chanraddau | Rhagolygon wedi'u logio a'u sgorio; dull wedi'i diwnio o'r gyfradd taro | Rhagolygon yn cyfuno ar draws timau a dibyniaethau, wedi'u rhannu â rhanddeiliaid yn fyw |
| Cynllunio capasiti | Cynlluniau'n anwybyddu gwaith gweithredol | Llwyth gweithredol yn hysbys yn fras | Capasiti wedi'i ddyrannu yn ôl math o waith o ddata | Dyraniad wedi'i adolygu yn erbyn canlyniadau; amser gwelliant wedi'i ddiogelu | Capasiti wedi'i gynllunio ar y cyd â chyflenwyr a gweithrediadau ar draws gwasanaethau |
| Nodau a defnydd o rifau | Nodau yw rhestrau tasgau | Nodau wedi'u hysgrifennu | Nodau wedi'u barnu yn ôl canlyniad gyda rhanddeiliaid | Methiannau wedi'u dadansoddi fel signalau system; rhifau lleol wedi'u cadw'n breifat | Nodau wedi'u gosod a'u barnu ar y cyd â defnyddwyr; dysgu wedi'i rannu ar draws timau |

## Rhestr wirio

- [ ] Adeiladir rhagolygon o hanes trwybwn ac amser cylch y tîm ei hun.
- [ ] Rhoddir rhagolygon fel ystodau gyda chanraddau, gyda rhagdybiaethau wedi'u nodi.
- [ ] Logir pob rhagolwg gyda'i ystod a'r canlyniad gwirioneddol.
- [ ] Adolygir cyfradd taro rhagolwg a lled yr ystod yn fisol.
- [ ] Dyrennir capasiti yn ôl math o waith, gan gynnwys gwaith gweithredol a gwelliant.
- [ ] Mae defnyddio wedi'i gynllunio yn gadael slac ar gyfer amrywiad a digwyddiadau.
- [ ] Mae unrhyw uned maint neu fuanedd yn breifat i'r tîm ac nid yw'n cario targed.
- [ ] Ysgrifennir nodau cyflawni fel canlyniadau a'u barnu gyda rhanddeiliaid.
- [ ] Cofnodir newidiadau cwmpas gyda rhesymau.
- [ ] Adnewyddir rhagolygon pan fydd ffeithiau'n newid, a dywedir wrth randdeiliaid.

## Anogwyr AI

**Adeiladwch ragolwg ar sail trwybwn.**

```text
Gorffennodd ein tîm y niferoedd hyn o eitemau ym mhob un o'r [nifer] wythnos
ddiwethaf: [gludwch gyfrifon wythnosol]. Rydym eisiau gwybod pryd mae [nifer]
o eitemau'n debygol o fod wedi gorffen. Esboniwch sut i gynhyrchu ystod
tebygolrwydd gan ddefnyddio ein hanes ein hunain, rhowch enghraifft weithiol o
ddull efelychu syml, a disgrifiwch pa ragdybiaethau y mae'n eu gwneud. Peidiwch
â dyfeisio hanes na gwerthoedd meincnod. Rhestrwch eich rhagdybiaethau a'r
amodau lle na fyddai'r rhagolwg yn berthnasol.
```

**Adolygwch sut rydym yn defnyddio amcangyfrifon.**

```text
Rydym yn maint eitemau fel [uned] ac yn defnyddio [arfer] i gynllunio. Dyma sampl
o [nifer] o eitemau gorffenedig gydag amcangyfrifon ac amseroedd cylch gwirioneddol
mewn diwrnodau: [gludwch ddata]. Disgrifiwch a yw amcangyfrifon yn rhagfynegi
amser cylch yn y sampl hon, beth mae hynny'n ei awgrymu am faint o ymdrech y mae
amcangyfrif yn ei haeddu, a beth y gallem roi cynnig arno yn lle hynny. Peidiwch
â hawlio canlyniadau y tu hwnt i'r data. Rhestrwch eich rhagdybiaethau.
```

**Cynlluniwch gapasiti ar draws gwaith newid a gwaith rhedeg.**

```text
Dros y [cyfnod] diwethaf, gorffennodd ein tîm [cyfrifon] o eitemau o'r mathau hyn:
[newid wedi'i gynllunio, digwyddiadau, ceisiadau, gwelliant]. Cynigiwch ddyraniad
capasiti ar gyfer y [cyfnod] nesaf sy'n gadael slac, a disgrifiwch sut i'w
esbonio i randdeiliaid. Awgrymwch sut i ganfod a yw gwaith gweithredol yn cael ei
gamlabelu. Peidiwch â dyfeisio cymarebau diwydiant. Rhestrwch eich rhagdybiaethau.
```

**Drafftiwch adolygiad rhagolwg gyda rhanddeiliaid.**

```text
Drafftiwch agenda a chrynodeb un dudalen ar gyfer pwynt gwirio rhagolwg ar
[darn o waith]. Data: rhagolwg gwreiddiol [ystod], statws cyfredol [disgrifiad],
newidiadau ers y pwynt gwirio diwethaf [rhestr]. Cynhwyswch yr ystod ddiweddaredig,
beth a'i newidiodd, opsiynau ar gyfer cwmpas neu amseru, a'r cwestiynau y mae
angen i randdeiliaid eu hateb. Defnyddiwch iaith blaen. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig rhagweld neu gynllunio.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig cynllunio diwygiedig yn cadw ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Rhagwelwch o lif gwaith gorffenedig, a rhowch ystodau â thebygolrwyddau yn lle dyddiadau unigol.
- Cynlluniwch yn erbyn capasiti go iawn, gan gynnwys gwaith gweithredol, amser gwelliant a slac.
- Trinwch unrhyw uned amcangyfrif neu fuanedd fel cymorth preifat i un tîm, byth fel targed neu gymhariaeth.
- Sgoriwch eich rhagolygon: mae'r gyfradd taro yn adeiladu ymddiriedaeth.
- Barnwch nodau cyflawni yn ôl canlyniad, gyda'ch gilydd â rhanddeiliaid a defnyddwyr.
- Ymddiriedwch yn y tîm a'i gefnogi: daw rhagolygon gonest gan bobl nad ydynt yn cael eu cosbi am ansicrwydd.

## Cyfeiriadau a darllen pellach

1. Beck, K., et al., *Manifesto for Agile Software Development* and *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org.
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Humble, J., and Farley, D., *Continuous Delivery*, Addison-Wesley, 2010.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Cohn, M., *Agile Estimating and Planning*, Prentice Hall, 2005.
6. Kahneman, D., and Tversky, A., "Intuitive prediction: biases and corrective procedures," *TIMS Studies in Management Science*, 12, 1979.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
9. Wikipedia, [Story point](https://en.wikipedia.org/wiki/Story_point).
10. Wikipedia, [Velocity (software development)](https://en.wikipedia.org/wiki/Velocity_(software_development)).
11. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
12. Wikipedia, [Cone of Uncertainty](https://en.wikipedia.org/wiki/Cone_of_Uncertainty).
13. Wikipedia, [Planning fallacy](https://en.wikipedia.org/wiki/Planning_fallacy).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Monte Carlo method](https://en.wikipedia.org/wiki/Monte_Carlo_method).
