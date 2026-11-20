# Metrigau hunanwasanaeth ac awtomeiddio

**Mesurwch hunanwasanaeth yn ôl a gafodd pobl yr hyn yr oedd ei angen arnynt heb gymorth, a mesurwch awtomeiddio yn ôl y gwaith y mae'n ei ddileu a'r methiannau y mae'n eu creu, oherwydd dim ond llwyddiant yw cyswllt na chyrhaeddodd erioed os datryswyd y broblem.**

## Crynodeb a chymhelliant

Hunanwasanaeth ac awtomeiddio yw'r ddwy brif ffordd y mae sefydliad gwasanaeth yn cymryd gwaith rheolaidd oddi ar ei bobl. Mae [hunanwasanaeth](https://en.wikipedia.org/wiki/Self-service_software) yn gadael i ddefnyddiwr ddatrys problem neu gael rhywbeth ar ei ben ei hun, drwy borth, erthygl wybodaeth, tudalen ailosod cyfrinair, neu [sgwrsfot](https://en.wikipedia.org/wiki/Chatbot). Mae [awtomeiddio](https://en.wikipedia.org/wiki/Automation) yn gadael i system gyflawni'r camau yr arferai person eu cyflawni, megis creu cyfrif, ailgychwyn gwasanaeth, neu gau tocyn unwaith y bydd monitor yn cadarnhau adferiad. Mae'r ddau yn anelu at yr un canlyniad: llai o dasgau ailadroddus i bobl, canlyniadau cyflymach i ddefnyddwyr, a mwy o amser ar gyfer y gwaith sydd angen barn.

Mae'r syniadau'n mapio ar y ddwy draddodiad. Yn [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, mae'r arfer rheoli ceisiadau gwasanaeth yn disgwyl i geisiadau ailadroddadwy, a ddeellir yn dda, gael eu trin drwy lifoedd safonol gyda chymaint o awtomeiddio ag sy'n synhwyrol, ac mae'r arferion rheoli digwyddiadau a rheoli gwybodaeth yn disgwyl i wybodaeth dda fod ar gael i ddefnyddwyr ac i staff cymorth ar y pwynt defnyddiol cynharaf. Mae arfer ystwyth a DevOps yn cyrraedd yr un lle ar lwybr arall: [seilwaith fel cod](https://en.wikipedia.org/wiki/Infrastructure_as_code), piblinellau, a'r ddisgyblaeth o ddileu llafur diwerth, y mae llyfrau peirianneg dibynadwyedd safleoedd Google yn ei ddiffinio fel gwaith â llaw, ailadroddus, y gellir ei awtomeiddio, ac sy'n tyfu gyda'r gwasanaeth. Yn aml gelwir y syniad a rennir yn "shift left": symud datrysiad problem tuag at y defnyddiwr, neu tuag at y pwynt rhataf a chynharaf yn y gadwyn gymorth, ac i ffwrdd o'r ciw arbenigol.

Mae iaith shift left yn gwahodd camgymeriad mesur. Mae timau'n gweld bod cyswllt a osgowyd yn rhad ac yna'n cyfrif cysylltiadau a osgowyd fel llwyddiant. Mae'r cyfrif yn hawdd ei gynhyrchu, oherwydd bod ymweliad porth na ddaeth i ben mewn tocyn yn edrych yn union yr un fath ag ymweliad porth lle rhoddodd y defnyddiwr y gorau iddi. Felly mae'r pwnc hwn yn dechrau o ganlyniad y defnyddiwr. Mae'n diffinio beth mae llwyddiant hunanwasanaeth yn ei olygu, sut i amcangyfrif ailgyfeirio heb hawlio clod am adael, sut i fesur cwmpas awtomeiddio a dibynadwyedd, a sut i weld effaith shift left ar gyfaint a chymhlethdod. Mae'r mesurau cyfaint a blaenoriaeth cysylltiedig ym mhwnc 3.2, Nifer a blaenoriaeth digwyddiadau, mae ochr y ceisiadau ym mhwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth, ac mae ochr y wybodaeth ym mhwnc 3.6, Metrigau rheoli gwybodaeth.

Termau a ddefnyddir yn y pwnc hwn:

- **Lefel 0 (neu haen hunanwasanaeth)**: datrysiad gan y defnyddiwr heb gysylltu â staff. Lefel 1 yw'r llinell gymorth gyntaf, fel arfer y ddesg gwasanaeth, a lefelau 2 a 3 yw'r haenau arbenigol a pheirianneg.
- **Ailgyfeirio**: cyswllt a fyddai fel arall wedi cyrraedd staff ac a ddatryswyd ar lefel 0 yn lle hynny. Ni ellir ei arsylwi'n uniongyrchol, felly amcangyfrif ydyw bob amser.
- **Cwympo drwodd**: defnyddiwr a drodd hunanwasanaeth, na lwyddodd, ac yna a gysylltodd â staff am yr un angen.
- **Llawlyfr gweithredu**: gweithdrefn ddogfenedig ar gyfer tasg weithredol reolaidd. [Llawlyfr gweithredu](https://en.wikipedia.org/wiki/Runbook) yw'r cam cyntaf arferol tuag at ei awtomeiddio.
- **Llafur diwerth**: gwaith â llaw, ailadroddus, y gellir ei awtomeiddio, heb werth parhaol (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad).
- **Catalog gwasanaethau**: y rhestr o wasanaethau a cheisiadau safonol a gynigir i ddefnyddwyr. Mae ITIL yn ei alw'n "service catalogue".

## Egwyddorion allweddol

- **Cyfrwch ganlyniadau, nid cysylltiadau a osgowyd.** Dim ond llwyddiant yw sesiwn porth heb docyn pan fodlonwyd angen y defnyddiwr. Diffiniwch lwyddiant o ochr y defnyddiwr a'i wirio gyda signal dilynol.
- **Amcangyfrif yw ailgyfeirio, felly labelwch ef felly.** Datganwch y dull, y gymhariaeth a ddefnyddiwyd, a'r ansicrwydd. Peidiwch byth â chyflwyno ffigur ailgyfeirio amcangyfrifedig fel ffaith a fesurwyd.
- **Mesurwch y llwybr cwympo drwodd.** Y llwybr o ymgais hunanwasanaeth a fethodd i gyswllt â staff yw lle mae'r rhan fwyaf o fethiant cudd yn byw. Adroddwch ef wrth ymyl pob rhif llwyddiant.
- **Mae gan awtomeiddio ochr cost.** Mae angen cynnal a chadw, monitro a ffordd o fethu'n ddiogel ar bob llif awtomataidd. Mesurwch gwmpas a dibynadwyedd gyda'i gilydd, a chyfrwch yr ymdrech a dreulir yn cadw awtomeiddio'n fyw.
- **Mae shift left yn newid y cymysgedd yn ogystal â'r cyfaint.** Pan fo gwaith hawdd yn gadael y ciw, mae'r gwaith sy'n weddill yn galetach ac yn arafach ar gyfartaledd. Darllenwch amser datrys ac amser trin gyda hynny mewn golwg (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau).
- **Mae metrigau'n disgrifio gwasanaethau a llifoedd.** Adroddwch yn ôl eitem catalog, teulu erthyglau, neu lif awtomeiddio. Peidiwch byth â graddio asiantau yn ôl faint o ddefnyddwyr y gwnaethant eu gwthio i hunanwasanaeth.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd llwyddiant hunanwasanaeth | Cyfran y sesiynau hunanwasanaeth lle bodlonwyd angen y defnyddiwr heb gyswllt â staff | Sesiynau a ddaeth i ben mewn canlyniad cwblhawyd (cais wedi'i gyflwyno a'i gyflawni, erthygl wedi'i marcio'n ddefnyddiol, ailosod wedi'i gwblhau) heb gyswllt â staff am yr un angen o fewn 7 diwrnod, wedi'u rhannu â'r holl sesiynau a ddechreuodd dasg. Mae'r cloc yn dechrau ar y weithred ystyrlon gyntaf yn y porth, yn stopio wrth gwblhau neu roi'r gorau iddi. Eithrir traffig robotiaid, cyfrifon prawf, a phori pur | Canran | Logiau porth a hunaniaeth, system docynnau, dadansoddeg sesiynau | Rheoli ceisiadau gwasanaeth; rheoli gwybodaeth | Dolen adborth cwsmeriaid; meini prawf derbyn ar sail canlyniad | Misol |
| Cyfradd ailgyfeirio amcangyfrifedig | Cyfran amcangyfrifedig y galw a ddatryswyd ar lefel 0 a fyddai fel arall wedi cyrraedd staff | Cymharwch gyfradd cysylltiadau fesul 1,000 o ddefnyddwyr gweithredol ar gyfer gwasanaeth cyn ac ar ôl newid hunanwasanaeth, neu yn erbyn grŵp daliad yn ôl, wedi'i addasu ar gyfer symudiadau galw hysbys. Wedi'i ddatgan fel amcangyfrif gyda'r dull wedi'i enwi. Eithrir cysylltiadau a symudodd i sianel arall | Canran (amcangyfrif) | System docynnau, cyfrifon poblogaeth defnyddwyr, data arbrawf neu garfan | Desg gwasanaeth; rheoli digwyddiadau | Arbrawf gyda grŵp rheoli; prawf A/B | Chwarterol |
| Cyfradd cwympo drwodd | Cyfran yr ymdrechion hunanwasanaeth a fethodd sy'n gorffen mewn cyswllt â staff ar yr un angen | Cysylltiadau staff a agorwyd o fewn 7 diwrnod i sesiwn hunanwasanaeth a roddwyd y gorau iddi neu a fethodd gan yr un defnyddiwr ar yr un pwnc, wedi'u rhannu â sesiynau aflwyddiannus. Mae'r cloc yn dechrau ar ddiwedd y sesiwn. Eithrir cysylltiadau digyswllt | Canran | Logiau porth wedi'u huno â'r system docynnau yn ôl defnyddiwr a phwnc | Desg gwasanaeth; rheoli gwybodaeth | Llwybr dwysáu mewn diffiniad o orffen; adborth gan gymorth | Misol |
| Mabwysiadu hunanwasanaeth (cyfran porth yn gyntaf) | Cyfran y ceisiadau ac adroddiadau digwyddiadau cymwys a godir drwy sianeli hunanwasanaeth | Eitemau a grëwyd drwy borth, bot, neu API, wedi'u rhannu â'r holl eitemau ar gyfer cofnodion catalog sy'n cynnig llwybr hunanwasanaeth. Eithrir eitemau nad oes llwybr hunanwasanaeth ar eu cyfer | Canran | Maes sianel y system docynnau, cyfluniad catalog | Rheoli ceisiadau gwasanaeth; rheoli catalog gwasanaethau | Tracio mabwysiadu ar ôl rhyddhad | Misol |
| Cwmpas awtomeiddio | Cyfran y gwaith ailadroddadwy cymwys a gwblhawyd gan awtomeiddio heb gam â llaw | Eitemau a gwblhawyd gan lif awtomataidd o'r dechrau i'r diwedd, wedi'u rhannu â'r holl eitemau o fathau a farnwyd yn awtomeiddiadwy. Cyfrifir y math fel un awtomeiddiadwy dim ond os yw rhestr ymgeiswyr ysgrifenedig yn ei enwi. Eithrir gwaith un-waith ac eitemau a wrthodwyd gan awtomeiddio | Canran | System docynnau, logiau platfform awtomeiddio, rhestr ymgeiswyr | Rheoli ceisiadau gwasanaeth; rheoli defnyddio | Awtomeiddio'r diffiniad o orffen; piblinell fel cod | Misol |
| Cyfradd methu ac ailwaith awtomeiddio | Cyfran y rhediadau awtomataidd a fethodd, a oedd angen atgyweiriad â llaw, neu a gynhyrchodd ganlyniad a gywirwyd wedyn | Rhediadau awtomataidd a roddodd wall, a ddychwelwyd, neu a ddilynwyd gan atgyweiriad â llaw o fewn 7 diwrnod, wedi'u rhannu â'r holl rediadau awtomataidd. Mae'r cloc yn dechrau ar ddechrau'r rhediad. Eithrir rhediadau prawf wedi'u cynllunio | Canran | Logiau platfform awtomeiddio, system docynnau, cofnodion newid | Galluogi newid; rheoli digwyddiadau | Cyfradd methiant newid; sefydlogrwydd adeiladu a phrofi | Wythnosol |
| Amser cyffwrdd â llaw fesul math o gais | Ymdrech staff a dreulir ar fath o gais sy'n ymgeisydd ar gyfer awtomeiddio | Munudau ymarferol a gofnodwyd gan staff ar eitemau o'r math yn y cyfnod, wedi'u crynhoi fel canolrif a 85fed canradd fesul eitem. Amcangyfrifir drwy samplu lle na logir amser. Eithrir amser aros | Munudau fesul eitem | Samplu amser, logiau gwaith tocynnau | Rheoli ceisiadau gwasanaeth | Tracio llafur diwerth; gwastraff ffrwd gwerth | Chwarterol |
| Dosbarthiad lefel (cyfran shift left) | Ble yn y gadwyn gymorth y caiff eitemau eu datrys | Eitemau a ddatryswyd ar bob lefel (0, 1, 2, 3) wedi'u rhannu â'r holl eitemau a ddatryswyd ar gyfer y cyfnod. Y lefel yw'r haen uchaf a wnaeth waith ymarferol. Eithrir eitemau a ganslwyd cyn prysbennu | Canran fesul lefel | Grŵp datrys y system docynnau a hanes neilltuo | Rheoli digwyddiadau; desg gwasanaeth | Patrymau heidio a dwysáu; timau traws-swyddogaethol | Misol |

Mesurir pob un o'r rhain fesul gwasanaeth, eitem catalog, neu lif, byth fesul person. Dylid dangos mesurau amser fel y canolrif ynghyd â chanradd uchel, fel y mae'r cyflwyniad i'r pwnc ar lythrennedd ystadegol yn esbonio (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

## Argymhellion

### Diffiniwch lwyddiant o ochr y defnyddiwr

**1. Ysgrifennwch beth mae "cael yr hyn yr oedd ei angen arnaf" yn ei olygu ar gyfer pob llwybr hunanwasanaeth.** Ar gyfer ailosod cyfrinair mae'n ailosod wedi'i gwblhau a mewngofnodi llwyddiannus. Ar gyfer cais mae'n gyflawni, nid cyflwyno. Ar gyfer erthygl mae'n ddefnyddiwr na chysylltodd â staff eto am yr un angen. Mae diffiniad sy'n stopio ar "gwelwyd y dudalen" yn mesur traffig.

**2. Unwch sesiynau hunanwasanaeth â chysylltiadau diweddarach.** Y dystiolaeth gryfaf o fethiant yw cyswllt â staff ar yr un pwnc yn fuan ar ôl sesiwn. Cysylltwch y ddau yn ôl defnyddiwr a phwnc lle mae rheolau preifatrwydd yn caniatáu, a lle nad ydynt, defnyddiwch gyfrifon cyfanredol fesul pwnc a diwrnod. Mae'r uniad yn troi stori fodlonrwydd amwys yn gyfradd cwympo drwodd y gallwch ei gwella.

**3. Gofynnwch i ddefnyddwyr gydag un cwestiwn ar y pwynt gadael.** Mae anogwr un cwestiwn megis "A ddatrysodd hyn eich problem?" yn rhoi signal uniongyrchol na all logiau ei roi. Trinwch yr atebion fel sampl, darllenwch y sylwadau testun rhydd, a chymharwch ymatebwyr ag anymatebwyr fel nad yw'r defnyddwyr hapusaf yn diffinio'r canlyniad (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

### Amcangyfrifwch ailgyfeirio'n onest

**4. Ffafriwch gymhariaeth i gownter.** Daw'r amcangyfrif glanaf o grŵp daliad yn ôl, cyflwyno fesul cam, neu olwg cyn ac ar ôl o gysylltiadau fesul 1,000 o ddefnyddwyr gweithredol ar gyfer y gwasanaeth yr effeithiwyd arno. Mae cyfrif "sesiynau na ddaethant yn docynnau" yn gorbwysleisio'r effaith, oherwydd na fu gan lawer o'r defnyddwyr hynny angen y byddai staff wedi'i weld. Datganwch y dull a'r ansicrwydd wrth ymyl y ffigur.

**5. Normaleiddiwch gyfaint yn erbyn defnydd.** Gall gostyngiad yn nifer y tocynnau ddilyn gostyngiad mewn defnyddwyr, cylch rhyddhau tawel, neu newid tymhorol. Rhannwch â defnyddwyr gweithredol neu drafodion cyn dod i gasgliadau (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau). Anodwch y siart gyda rhyddhadau, ymgyrchoedd, a newidiadau porth.

**6. Cadwch ailgyfeirio allan o dargedau.** Mae targed ar gyfer ailgyfeirio yn gwobrwyo cuddio'r llwybr cyswllt, claddu'r rhif ffôn, a chau sesiynau sgwrs yn gynnar. Defnyddiwch ailgyfeirio fel amcangyfrif dysgu a gadewch i'r targed eistedd ar ganlyniadau defnyddwyr, megis cyfradd llwyddiant hunanwasanaeth a'r eitem heb ei datrys hynaf.

### Mesurwch awtomeiddio fel cynnyrch, nid prosiect

**7. Cadwch restr ymgeiswyr a mesurwch gwmpas yn ei herbyn.** Mae cwmpas "yr holl waith" yn fesur gwael, oherwydd nad yw'r rhan fwyaf o waith yn awtomeiddiadwy. Cadwch restr ysgrifenedig fer o fathau o geisiadau a digwyddiadau sy'n ailadroddadwy, wedi'u deall yn dda, ac yn aml, graddiwch hi yn ôl amser cyffwrdd â llaw a chyfaint, ac adroddwch gwmpas yn erbyn y rhestr honno. Adolygwch y rhestr bob chwarter fel bod yr enwadur yn onest.

**8. Parwch gwmpas â dibynadwyedd.** Gall llif awtomataidd sy'n methu un rhediad mewn deg, neu sy'n cynhyrchu'r canlyniad anghywir yn dawel, gostio mwy na'r dasg â llaw a ddisodlodd. Olrheiniwch gyfradd methu ac ailwaith, yr amser i ganfod rhediad a fethodd, a pha mor aml y mae'n rhaid i berson atgyweirio'r canlyniad. Defnyddiwch yr arferion trin gwallau y mae'r gymuned peirianneg dibynadwyedd safleoedd yn eu disgrifio: camau idempotent, rhybuddion clir, a dewis amgen diogel â llaw (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion).

**9. Cyfrwch y gwaith cynnal.** Mae awtomeiddiadau angen perchnogion, rheoli fersiynau, profion, a diweddariadau pan fo'r systemau o'u cwmpas yn newid. Cofnodwch yr amser a dreulir yn cynnal pob llif, a'i gymharu â'r amser cyffwrdd â llaw a ddilëwyd ganddo. Mae awtomeiddio sy'n costio mwy i'w gadw i redeg nag y mae'n ei arbed yn ymgeisydd i'w ymddeol, sy'n ganlyniad arferol, nid methiant.

### Gwyliwch yr effaith shift left

**10. Disgwyliwch i'r gwaith sy'n weddill fod yn galetach.** Pan fo cysylltiadau rheolaidd yn gadael y ddesg gwasanaeth, mae amser trin cyfartalog a datrysiad cyswllt cyntaf ar lefel 1 yn aml yn gwaethygu er bod y gwasanaeth yn well. Adroddwch y dosbarthiad lefel a'r cymysgedd categorïau wrth ymyl y mesurau hynny, a chytunwch ymlaen llaw gyda'r arweinyddiaeth bod disgwyl codiad mewn amser trin ar ôl ailgyfeirio llwyddiannus (gweler pwnc 3.1, Metrigau desg gwasanaeth).

**11. Caewch y ddolen i wybodaeth ac i reoli problemau.** Mae pob cwympo drwodd yn dystiolaeth o erthygl goll neu wael, ffurflen ddryslyd, neu ddiffyg heb ei drwsio. Anfonwch y prif bynciau cwympo drwodd at berchnogion gwybodaeth ac, lle mae'r achos yn ddiffyg, at reoli problemau (gweler pwnc 4.1, Metrigau rheoli problemau). Adolygwch y rhestr yn fisol ac adroddwch faint o eitemau a drwsiwyd.

**12. Rhannwch y capasiti a ryddhewch.** Os yw awtomeiddio a hunanwasanaeth yn dileu gwaith, penderfynwch beth mae'r amser a ryddhawyd yn ei brynu: gwaith gwella, atgyweiriadau rhagweithiol, neu hyfforddiant. Mae timau sy'n gweld dim budd o awtomeiddio yn rhoi'r gorau i'w gynnig. Olrheiniwch y gyfran gynlluniedig o gapasiti ar gyfer gwella dros amser (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfradd llwyddiant hunanwasanaeth | Cyfrif unrhyw ffurflen gyflawn neu unrhyw olwg tudalen fel llwyddiant; dileu'r anogwr "a helpodd hyn" pan fo sgoriau'n disgyn; eithrio pynciau anodd o'r enwadur | Cyfradd cwympo drwodd a sampl o sesiynau caeedig a ddarllenir gan berson; adroddwch reolau'r enwadur |
| Cyfradd ailgyfeirio amcangyfrifedig | Cuddio'r llwybr cyswllt; ychwanegu camau cyn cyswllt; dosbarthu pob tocyn llai fel ailgyfeirio waeth beth fo'r achos | Cysylltiadau fesul 1,000 o ddefnyddwyr gweithredol, bodlonrwydd defnyddwyr ar y gwasanaeth yr effeithiwyd arno, a'r dull wedi'i ysgrifennu wrth ymyl y rhif |
| Cyfradd cwympo drwodd | Diffinio'r ffenestr baru mor fyr nes bod dychweliadau'n syrthio y tu allan iddi; cau'r cyswllt dilynol fel dyblyg | Cyfradd cysylltiadau dro ar ôl tro ar draws pob sianel; adolygu sampl o gysylltiadau a ddychwelodd |
| Mabwysiadu hunanwasanaeth (cyfran porth yn gyntaf) | Gorfodi pob cais i'r porth waeth beth fo'r ffit; ail-labelu tocynnau a grëwyd dros y ffôn fel tocynnau porth | Cyfradd llwyddiant hunanwasanaeth ac ymdrech defnyddwyr; cyfran y ceisiadau nad oes ganddynt lwybr porth gweithredol |
| Cwmpas awtomeiddio | Dewis eitemau hawdd ar gyfer y rhestr ymgeiswyr; tyfu'r enwadur gyda thasgau dibwys; cyfrif llifoedd sy'n rhannol â llaw fel rhai wedi'u hawtomeiddio | Rhestr ymgeiswyr ysgrifenedig wedi'i hadolygu bob chwarter; cyfradd methu ac ailwaith awtomeiddio; amser cyffwrdd â llaw yr eitemau sy'n weddill |
| Cyfradd methu ac ailwaith awtomeiddio | Eithrio atgyweiriadau â llaw o'r cyfrif; gadael i rediadau a fethodd ailgynnig yn dawel nes iddynt lwyddo; labelu methiannau fel "rhediadau prawf wedi'u cynllunio" | Cofnodion digwyddiadau a rhybuddion wedi'u cysylltu â llifoedd; amser i ganfod rhediad a fethodd; archwiliad sampl o ganlyniadau |
| Amser cyffwrdd â llaw fesul math o gais | Peidio â logio amser ar gyfer eitemau sy'n edrych yn â llaw; neilltuo'r amser i gategori arall; samplu dim ond diwrnodau tawel | Cynllun samplu wedi'i ysgrifennu a'i adolygu; cymharu ag amser cylch ac oedran ciw ar gyfer yr un math |
| Dosbarthiad lefel (cyfran shift left) | Codi'r gyfran a ddatryswyd ar lefel 1 drwy ail-ddosbarthu dwysáu, neu drwy gau eitemau ar lefel 1 a'u hailagor ar lefel 2 fel eitemau newydd | Cyfradd ailagor a chyfradd tocynnau cysylltiedig; sampl ansawdd datrysiad; bodlonrwydd cwsmeriaid fesul lefel |

Mae darlleniad iach yn dangos llwyddiant hunanwasanaeth yn codi ynghyd â chyfradd cwympo drwodd sefydlog neu'n disgyn, ailgyfeirio amcangyfrifedig wedi'i ddatgan gyda'i ddull, cwmpas awtomeiddio yn codi yn erbyn rhestr ymgeiswyr a adolygwyd tra bo methu ac ailwaith yn aros yn isel, a dosbarthiad lefel sy'n symud gwaith yn gynharach heb godi cyfraddau ailagor na gostwng bodlonrwydd. Os yw un rhif yn gwella tra bo ei reilen warchod yn gwaethygu, trinwch y gwelliant fel un heb ei brofi.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Hunanwasanaeth yn gyntaf | Canlyniadau uniongyrchol i ddefnyddwyr, cost ymylol is, ar gael ar unrhyw awr | Gall defnyddwyr ag anghenion cymhleth neu anarferol deimlo'n sownd; mae cynnwys gwan yn creu mwy o gysylltiadau nag y mae'n eu dileu |
| Cyswllt â staff yn gyntaf | Cymorth personol, barn, a chyfle i sylwi ar broblemau anarferol | Arafach, costus, ac yn ddibynnol ar argaeledd staff |
| Amcangyfrif ailgyfeirio gyda grŵp daliad yn ôl | Tystiolaeth gredadwy o effaith | Angen gwaith dylunio a goddefgarwch ar gyfer grŵp nad yw'n derbyn y newid |
| Cyfrif sesiynau heb docynnau | Rhad ac ar gael bob amser | Gorbwysleisio llwyddiant; gwahodd chwarae'r system; methu dweud llwyddiant o roi'r gorau iddi |
| Awtomeiddio eang | Cyflawni cyson a llai o lafur diwerth | Baich cynnal a chadw, moddau methu sy'n graddio, a sgiliau a all bylu o'r tîm |
| Awtomeiddio detholus o lifoedd sefydlog | Gwell elw am yr ymdrech a llai o syrpreisys | Gadael rhywfaint o waith â llaw yn ei le, sydd angen ei sylw ei hun |

Yr ateb pragmatig yw awtomeiddio'r hyn sy'n aml, yn sefydlog, ac wedi'i ddeall yn dda, a chadw person ar gael lle mae angen yn aneglur neu'r polion yn uchel. Dylid barnu hunanwasanaeth yn ôl a gafodd pobl eu helpu, gyda'r llwybr staff yn weladwy. Mae arbedion shift left yn real dim ond pan fo canlyniad y defnyddiwr yn dal, felly cyfrwch y ddwy ochr.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pan fo defnyddiwr yn agor y porth ac yn gadael heb godi tocyn, beth ydym ni'n tybio a ddigwyddodd, a sut y byddem yn darganfod?**
Gofynnwch i'r grŵp restru'r straeon posibl: daeth y defnyddiwr o hyd i'r ateb, rhoddodd y gorau iddi, ffoniodd yn lle hynny, neu gofynnodd i gydweithiwr. Edrychwch ar ba ddata fyddai'n eu gwahanu, megis cyswllt dilynol, anogwr gadael, neu sampl o sesiynau. Dylai'r hwylusydd gofnodi pa ragdybiaeth sydd ar y dangosfwrdd ar hyn o bryd a phwy sy'n dibynnu arni. Gorffennwch drwy gytuno ar un newid a fyddai'n disodli rhagdybiaeth â thystiolaeth.

**2. Sut ydym ni'n amcangyfrif ailgyfeirio ar hyn o bryd, ac a fyddem yn amddiffyn y dull i bartner cyllid amheus?**
Cerddwch drwy'r cyfrifiad gam wrth gam, gan gynnwys y grŵp cymharu a'r addasiadau ar gyfer newidiadau galw. Gofynnwch beth arall a newidiodd yn ystod y cyfnod, megis rhyddhadau, toriadau, neu newidiadau staff. Nodwch yr ystod o werthoedd tebygol yn ogystal â'r pennawd. Dylai'r drafodaeth ddod i ben gyda datganiad plaen o'r dull y gellir ei roi wrth ymyl y rhif.

**3. Pa un o'n hawtomeiddiadau fyddem ni'n ei ddiffodd yfory pe baem yn gwybod eu gwir gost?**
Rhestrwch y llifoedd awtomataidd gyda'u perchnogion, dyddiad y newid diwethaf, cyfrif rhediadau, cyfraddau methu, ac ymdrech cynnal a chadw. Gofynnwch pa rai na fyddai neb yn eu colli, a pha rai y mae pobl ofn eu cyffwrdd. Dylai'r hwylusydd drin ymddeol fel canlyniad dilys. Mae'r atebion yn aml yn datgelu llifoedd heb berchennog.

**4. Beth sy'n digwydd i ddefnyddiwr y mae ei ymgais hunanwasanaeth yn methu, a pha mor hir mae'n ei gymryd iddynt gyrraedd person?**
Gofynnwch i rywun gerdded y llwybr fel y byddai defnyddiwr, gan gynnwys dod o hyd i'r llwybr cyswllt. Amserwch ef a nodwch bob cam y gellid ei fyrhau. Cymharwch y profiad â bwriad datganedig y porth. Dylai'r grŵp benderfynu a yw'r llwybr cyn hawsed i ddod o hyd iddo â'r llwybr hunanwasanaeth.

**5. Sut oedd cymysgedd gwaith y ddesg gwasanaeth flwyddyn yn ôl, a sut mae'n edrych nawr?**
Adolygwch y cymysgedd categorïau a'r dosbarthiad lefel dros amser. Trafodwch pam y symudodd amser trin neu ddatrysiad cyswllt cyntaf, ac a yw'n adlewyrchu cymysgedd caletach. Gofynnwch a ddywedwyd wrth yr arweinyddiaeth bod hyn i'w ddisgwyl. Cytunwch sut i gyflwyno'r duedd fel na chaiff codiad mewn amser trin ar ôl shift left llwyddiannus ei ddarllen fel dirywiad.

**6. Beth fyddem ni'n ei wneud â'r capasiti y mae awtomeiddio yn ei ryddhau, a phwy sy'n penderfynu?**
Amcangyfrifwch yr oriau a ddilëwyd o waith â llaw a nodwch beth yr oeddent i fod i'w brynu. Gofynnwch a aeth yr amser i waith gwella neu a gafodd ei amsugno gan alw newydd. Trafodwch sut y byddai'r tîm yn gwybod. Dylai'r hwylusydd wthio am ymrwymiad pendant, megis cyfran o gapasiti wedi'i chadw ar gyfer trwsio'r prif bynciau cwympo drwodd.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn berchen ar lawer o'r hyn sy'n gwneud i hunanwasanaeth lwyddo: negeseuon gwall clir, ffurflenni defnyddiadwy, cymorth yn y cynnyrch, a'r gallu i wneud tasgau heb godi tocyn. Maent hefyd yn berchen ar awtomeiddio sy'n byw mewn piblinellau a chod seilwaith. Eu mesurau defnyddiol yw llwyddiant hunanwasanaeth ar eu nodweddion eu hunain a'r camau â llaw sy'n weddill mewn gwaith rhyddhau ac amgylcheddau, wedi'u trin fel llafur diwerth i'w ddileu (gweler pwnc 2.8, Metrigau DORA). Dylent ddarllen pynciau cwympo drwodd fel ôl-groniad cynnyrch.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn cario'r ystad awtomeiddio a'r dewis amgen staff. Dylent olrhain dibynadwyedd awtomeiddio, y llwyth cynnal a chadw, a'r amser cyffwrdd â llaw sy'n weddill, a dylent wylio'r dosbarthiad lefel heb gael eu cosbi am y gwaith caletach sy'n weddill. Dylid ymgynghori ag asiantau ar ba geisiadau sy'n ymgeiswyr awtomeiddio da, oherwydd eu bod yn gwybod ble mae'r ffrithiant go iawn. Adroddwch yn ôl llif a math o gais, a byth yn ôl asiant.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn cael eu temtio i drin ailgyfeirio fel ffigur arbed costau. Cais gwell yw gofyn am ganlyniad y defnyddiwr, y dull y tu ôl i unrhyw amcangyfrif, a dibynadwyedd yr awtomeiddio. Dylai llywodraethu ddisgwyl rhestr ymgeiswyr, perchennog ar gyfer pob llif awtomataidd, a rheol ar gyfer ymddeol. Dylai arweinwyr hefyd warchod y llwybr staff rhag cael ei guddio i fodloni targed (gweler pwnc 11.3, Cyflwyno metrigau heb fagu ofn).

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr eisiau bwrw ymlaen â'u gwaith. Mae llawer yn ffafrio hunanwasanaeth pan fo'n gweithio, ac mae bron pob un yn casáu cael eu dal ynddo pan nad yw. Y ffordd orau o gipio eu profiad yw cwestiynau ymdrech a chanlyniad ar y pwynt gadael, ac a arweiniodd ymgais a fethodd yn gyflym at berson (gweler pwnc 6.4, Profiad defnyddwyr a gweithwyr). Mae defnyddwyr ag anghenion hygyrchedd neu hyder cyfyngedig yn rhybudd cynnar ar gyfer pyrth sy'n gweithio i'r defnyddiwr cyfartalog yn unig.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG manwerthwr ar-lein o faint canolig yn rhedeg desg gwasanaeth, tîm platfform, a nifer o dimau cynnyrch. Mae'r rhifau yn yr enghraifft hon yn enghreifftiol.

Mae'r adran yn lansio porth wedi'i ailgynllunio gydag ailosod cyfrinair tywysedig, llif cais mynediad meddalwedd, a sgwrsfot ar gyfer cwestiynau cyffredin. Dri mis yn ddiweddarach, mae adroddiad y porth yn dangos bod 62 y cant o sesiynau'n gorffen heb docyn, ac mae rheolwr yn cynnig galw hynny'n "ailgyfeirio" a gosod targed o 70 y cant. Mae arweinydd y ddesg gwasanaeth yn anesmwyth, oherwydd bod asiantau'n adrodd bod pobl sy'n ffonio yn dweud eu bod "wedi trio'r porth yn gyntaf."

Mae'r tîm yn adolygu'r mesurau. Maent yn diffinio llwyddiant hunanwasanaeth fel canlyniad cwblhawyd heb gyswllt â staff ar yr un pwnc o fewn 7 diwrnod. Ar y diffiniad hwnnw y gyfradd llwyddiant yw 48 y cant, nid 62, a chyfradd cwympo drwodd y llif cais mynediad yw 31 y cant. Wrth ddarllen sampl o 40 cyswllt cwympo drwodd, maent yn canfod na allai'r rhan fwyaf o ddefnyddwyr ddweud pa un o ddwy eitem catalog debyg i'w dewis, a bod y sgwrsfot yn ateb cwestiwn am offeryn wedi'i ymddeol.

Mae'r tîm yn gwneud tri phenderfyniad. Yn gyntaf, y mesur pennawd yw llwyddiant hunanwasanaeth, gydag ailgyfeirio amcangyfrifedig wedi'i ddangos fel amcangyfrif chwarterol yn unig yn seiliedig ar gysylltiadau fesul 1,000 o ddefnyddwyr gweithredol, ac ni osodir targed ar ailgyfeirio. Yn ail, caiff y ddwy eitem catalog debyg eu huno, cywirir cynnwys y sgwrsfot, ac ychwanegir y ddau brif bwnc cwympo drwodd at yr ôl-groniad gwella gyda pherchennog. Yn drydydd, ychwanegir proses â llaw ar gyfer creu amgylcheddau prawf, sy'n cymryd canolrif o 25 munud i beirianwyr platfform (enghreifftiol) ac yn digwydd tua 40 gwaith y mis (enghreifftiol), at y rhestr ymgeiswyr awtomeiddio.

Mae'r tîm platfform yn awtomeiddio'r llif amgylcheddau o fewn y chwarter. Mae risg chwarae'r system yn ymddangos yn gyflym: mae ffigur cwmpas y llif yn codi, ond mae'r gyfradd methu ac ailwaith yn dangos bod angen atgyweiriad â llaw ar un rhediad mewn wyth (enghreifftiol) a bod yr atgyweiriadau wedi'u logio fel "cynnal a chadw wedi'i gynllunio." Mae'r tîm yn ychwanegu rhediadau a atgyweiriwyd at y cyfrif methiannau, yn cysylltu rhediadau â'r cofnod digwyddiad, ac yn cytuno i adolygu'r llif yn fisol. Yn yr adolygiad nesaf, mae'r gyfradd llwyddiant wedi codi i 57 y cant (enghreifftiol), mae'r gyfradd cwympo drwodd wedi disgyn, ac mae amser trin y ddesg gwasanaeth wedi codi ychydig oherwydd bod y cysylltiadau sy'n weddill yn galetach. Mae pennaeth TG yn cytuno i gyflwyno amser trin gyda'r dosbarthiad lefel, i osgoi darllen y codiad fel dirywiad.

## Y golwg fesul sector

**Busnes newydd.** Yn aml gall sylfaenwyr drwsio llwybr hunanwasanaeth gwael drwy siarad â'r defnyddiwr. Mesurwch lwyddiant gydag un cwestiwn gadael ac ychydig o ddarlleniadau o sesiynau go iawn, ac awtomeiddiwch y ddwy neu dair tasg sy'n torri ar draws y nifer fwyaf o bobl. Osgowch adeiladu bot cyn bod yr atebion ysgrifenedig yn dda.

**Busnes bach.** Gall un person redeg TG i bawb, felly mae hunanwasanaeth yn bennaf yn golygu canllawiau byr da a ffurflen gais a rennir. Mae awtomeiddio sefydlu cyfrifon ac ailosod cyfrineiriau yn talu ffordd yn gyflym, ar yr amod bod rhywun yn berchen ar bob llif. Cadwch y llwybr staff yn amlwg, oherwydd bydd staff y perchennog ei hun fel arall yn mynd o gwmpas y system.

**Menter fawr.** Mae graddfa yn gwneud y budd a'r chwarae'r system yn fwy. Safonwch ddiffiniadau ar draws unedau busnes, cadwch restr ymgeiswyr ganolog a chofrestr awtomeiddio, ac adroddwch yn ôl gwasanaeth ac eitem catalog. Gochelwch rhag cymharu unedau sy'n gwasanaethu poblogaethau defnyddwyr gwahanol iawn.

**Llywodraeth a'r sector cyhoeddus.** Mae hygyrchedd, mynediad iaith, a'r rhwymedigaeth i wasanaethu pobl na allant ddefnyddio sianeli digidol yn fewnbynnau dylunio, nid ychwanegiadau. Cadwch lwybrau â chymorth ar gael ac wedi'u mesur, dogfennwch benderfyniadau awtomataidd sy'n effeithio ar bobl, a disgwyliwch gwestiynau archwilio ynghylch pwy sy'n berchen ar bob llif awtomataidd (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhellion yw llai o gysylltiadau ailadroddus, canlyniadau cyflymach i ddefnyddwyr, cyflawni mwy cyson o dasgau rheolaidd, a mwy o gapasiti ar gyfer gwaith gwella. Mae ochr y gost yn cynnwys adeiladu a chynnal y porth a'r cynnwys, y gwaith integreiddio a data i uno sesiynau â thocynnau, y platfform awtomeiddio, a'r amser i ysgrifennu, profi, a bod yn berchen ar bob llif awtomataidd. Mae samplau o amser staff ac arolwg gadael byr yn costio ychydig, ac maent yn darparu'r rhan fwyaf o'r dystiolaeth sydd ei hangen arnoch.

Dylid dadlau'r elw o'ch data eich hun. Defnyddiwch amser cyffwrdd â llaw a chyfaint i amcangyfrif yr ymdrech y mae awtomeiddio yn ei dileu, tynnwch y gwaith cynnal a chost methiannau, ac adroddwch y canlyniad fel amrediad gyda'i ragdybiaethau. Ar gyfer hunanwasanaeth, defnyddiwch y gyfradd cwympo drwodd a'r canlyniadau a samplwyd i ddangos cyfran y cysylltiadau a osgowyd am fod defnyddwyr wedi'u helpu, nid dim ond eu troi i ffwrdd. Peidiwch â mewnforio canrannau ailgyfeirio nac arbedion gan werthwyr nac arolygon; mesurwch eich llinell sylfaen eich hun yn gyntaf. Mae cyfanswm cost perchnogaeth awtomeiddio yn cynnwys y newidiadau y bydd eu hangen wrth i'r systemau o'i gwmpas esblygu, felly cyllidebwch ar eu cyfer.

## Gwrthbatrymau a maglau

- **Cyfrif sesiynau heb docynnau fel llwyddiant.** Ni all wahanu cymorth oddi wrth roi'r gorau iddi. Diffiniwch lwyddiant yn ôl canlyniad a'i wirio gyda chwympo drwodd ac adborth gadael.
- **Targedau ar ailgyfeirio.** Maent yn gwobrwyo cuddio'r llwybr cyswllt. Defnyddiwch ailgyfeirio fel amcangyfrif a gosodwch dargedau ar ganlyniadau defnyddwyr.
- **Cuddio'r rhif ffôn neu'r sgwrs.** Mae defnyddwyr na allant gyrraedd person yn codi eu hymdrech ac yn colli ymddiriedaeth. Cadwch y llwybr staff yn weladwy a mesurwch pa mor hir mae'n ei gymryd i'w gyrraedd.
- **Awtomeiddio cyn deall y broses.** Mae'r llif yn amgodio dryswch ar gyflymder. Dogfennwch a symleiddiwch y llawlyfr gweithredu yn gyntaf, yna awtomeiddiwch y fersiwn sefydlog.
- **Awtomeiddio heb berchnogion.** Mae llifoedd heb berchennog yn dadfeilio'n dawel ac yn methu ar adegau gwael. Rhowch berchennog, prawf, monitor, a rheol ymddeol i bob llif.
- **Anwybyddu cost methiant.** Mae ffigur cwmpas uchel gydag ailwaith heb ei fesur yn atebolrwydd cudd. Adroddwch gyfradd methu ac ailwaith gyda chwmpas.
- **Darllen codiad mewn amser trin fel dirywiad.** Ar ôl shift left llwyddiannus mae'r gwaith sy'n weddill yn galetach. Dangoswch y dosbarthiad lefel a'r cymysgedd categorïau wrth ymyl y mesurau amser.
- **Graddio asiantau yn ôl cysylltiadau a ailgyfeiriwyd.** Mae'n cynhyrchu gwthio defnyddwyr i ffwrdd ac yn difetha'r data. Adroddwch yn ôl gwasanaeth a llif yn unig.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Llwyddiant hunanwasanaeth ac ailgyfeirio | Adroddir ymweliadau porth a chyfrifon tocynnau; dim diffiniad canlyniad | Llwyddiant wedi'i ddiffinio ar gyfer rhai llwybrau; ailgyfeirio wedi'i ddyfynnu heb ddull | Un diffiniad llwyddiant ysgrifenedig; cwympo drwodd wedi'i fesur; ailgyfeirio wedi'i labelu fel amcangyfrif | Llwyddiant a chwympo drwodd wedi'u tueddu gydag adborth gadael; ailgyfeirio wedi'i amcangyfrif drwy gymhariaeth | Canlyniadau wedi'u rhannu â thimau cynnyrch a chyflenwyr; pynciau cwympo drwodd yn gyrru atgyweiriadau wedi'u hariannu |
| Cwmpas a dibynadwyedd awtomeiddio | Awtomeiddio ad hoc; dim rhestr o ymgeiswyr | Rhai llifoedd wedi'u hawtomeiddio gan dimau unigol; methiannau'n cael eu trin yn anffurfiol | Rhestr ymgeiswyr, perchnogion, a mesurau methu wedi'u diffinio ar gyfer pob llif awtomataidd | Cwmpas, cyfradd methu, ac ymdrech cynnal wedi'u hadolygu a'u hariannu yn ôl amserlen | Awtomeiddio wedi'i gydlynu ar draws timau a chyflenwyr; llifoedd yn cael eu hymddeol a'u diwygio'n rheolaidd |
| Effaith shift left a defnydd | Cyfaint wedi'i adrodd heb gyd-destun | Dosbarthiad lefel wedi'i draciwr gan ychydig o dimau | Dosbarthiad lefel a chymysgedd categorïau wedi'u hadrodd wrth ymyl amser trin | Capasiti a ryddhawyd wedi'i gynllunio a'i draciwr; arweinyddiaeth yn darllen effeithiau cymysgedd yn gywir | Mae capasiti a dysgu yn llifo'n ôl i wasanaethau a dylunio catalog ar draws y sefydliad |

## Rhestr wirio

- [ ] Diffinnir llwyddiant hunanwasanaeth yn ôl canlyniad, gyda dechrau, stop ac eithriadau ysgrifenedig.
- [ ] Mesurir cyfradd cwympo drwodd ar gyfer y prif lwybrau hunanwasanaeth.
- [ ] Mae unrhyw ffigur ailgyfeirio yn datgan ei ddull ac wedi'i labelu fel amcangyfrif.
- [ ] Ni osodir targed ar ailgyfeirio.
- [ ] Mae anogwr gadael un cwestiwn neu adborth cyfatebol yn bodoli ar gyfer llwybrau allweddol.
- [ ] Mae rhestr ymgeiswyr awtomeiddio ysgrifenedig yn bodoli ac yn cael ei hadolygu bob chwarter.
- [ ] Mae gan bob llif awtomataidd berchennog, monitor, a mesur methu ac ailwaith.
- [ ] Samplir amser cyffwrdd â llaw ar gyfer y prif fathau o gais.
- [ ] Dangosir y dosbarthiad lefel wrth ymyl amser trin a datrysiad cyswllt cyntaf.
- [ ] Mae'r llwybr staff yn weladwy a gwirir ei amser mynediad.
- [ ] Adolygir y prif bynciau cwympo drwodd yn fisol a'u hanfon at berchnogion.
- [ ] Ni adroddir nac y targedir unrhyw fetrig yn y pwnc hwn fesul asiant.

## Anogwyr AI

**Gwiriwch sut yr ydym yn amcangyfrif ailgyfeirio.**

```text
Rydym yn rhedeg [math o wasanaeth] ar gyfer [nifer] o ddefnyddwyr gweithredol.
Rydym yn adrodd ailgyfeirio fel [disgrifiwch y cyfrifiad cyfredol], gan
ddefnyddio data o [offer]. Newidiadau yn y cyfnod: [rhyddhadau, ymgyrchoedd,
toriadau, newidiadau staffio]. Adolygwch y dull ac esboniwch ble y gallai
orbwysleisio neu danbwysleisio'r effaith. Awgrymwch gymhariaeth well, megis
grŵp daliad yn ôl neu gysylltiadau fesul 1,000 o ddefnyddwyr gweithredol, gan
ddefnyddio'r data a ddisgrifiaf yn unig. Peidiwch â dyfeisio gwerthoedd
meincnod na thargedau. Rhestrwch eich rhagdybiaethau a'r data y byddai ei
angen arnoch i gadarnhau'r amcangyfrif.
```

**Dadansoddwch bynciau cwympo drwodd o sampl.**

```text
Isod mae [nifer] o gysylltiadau staff o [gwasanaeth] a ddilynodd ymgais
hunanwasanaeth ar yr un pwnc, gyda'r meysydd [rhestr meysydd] a disgrifiad y
defnyddiwr. Grwpiwch hwy yn ôl achos tebygol (bwlch cynnwys, ffurflen ddryslyd,
diffyg, mynediad ar goll, dewis y defnyddiwr) ac adroddwch batrymau, nid
unigolion. Awgrymwch pa grwpiau achos i'w trosglwyddo i berchnogion gwybodaeth,
timau cynnyrch, neu reoli problemau. Peidiwch â dyfalu y tu hwnt i'r testun a
ddarparwyd. Rhestrwch eich rhagdybiaethau a'r hyn na allech ei farnu.

[gludwch gysylltiadau gyda data personol wedi'i dynnu]
```

**Graddiwch ymgeiswyr awtomeiddio.**

```text
Dyma restr o fathau o geisiadau a digwyddiadau ar gyfer [tîm]: [math, cyfaint
misol, munudau â llaw canolrifol, amrywioldeb, risg os yw'n anghywir]. Cynigiwch
raddio ar gyfer ymgeiswyr awtomeiddio ac esboniwch y rhesymu ar gyfer pob un,
gan gynnwys y baich cynnal a'r effaith methu. Nodwch eitemau a ddylai aros â
llaw. Defnyddiwch y rhifau a ddarparais yn unig a pheidiwch â dyfeisio ffigurau
arbedion. Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb cyn
ymrwymo.
```

**Dyluniwch y rheiliau gwarchod ar gyfer llif awtomataidd.**

```text
Rydym yn awtomeiddio [enw'r llif] ar gyfer [gwasanaeth]. Proses â llaw
gyfredol: [camau]. Offer: [platfform awtomeiddio]. Cynigiwch y metrigau i'w
holrhain (cwmpas, methu ac ailwaith, amser i ganfod rhediad a fethodd, ymdrech
cynnal), ffordd y gellid chwarae pob un, a rheilen warchod ar gyfer pob un.
Cynhwyswch ddewis amgen diogel â llaw a maen prawf ymddeol. Peidiwch â dyfeisio
trothwyon na meincnodau. Rhestrwch eich rhagdybiaethau ac unrhyw beth y mae
angen i mi ei wybod am ein hamgylchedd.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc cysylltiedig a'r rheilen warchod ar gyfer metrig hunanwasanaeth neu awtomeiddio yr ydych yn bwriadu ei gyflwyno.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod golygiadau i'r pwnc hwn yn cadw pob metrig wedi'i baru â ffordd o chwarae'r system a rheilen warchod.

## Pwyntiau allweddol

- Canlyniad defnyddiwr yw llwyddiant hunanwasanaeth, felly diffiniwch ef o ochr y defnyddiwr a'i wirio gyda chwympo drwodd ac adborth gadael.
- Amcangyfrif yw ailgyfeirio, felly datganwch y dull a'i gadw allan o dargedau.
- Ychydig o ystyr sydd gan gwmpas awtomeiddio heb ddibynadwyedd, gwaith cynnal, a rhestr ymgeiswyr a adolygwyd.
- Mae shift left yn codi anhawster y gwaith sy'n weddill, felly darllenwch amser trin gyda'r dosbarthiad lefel a'r cymysgedd categorïau.
- Mesurwch lifoedd, gwasanaethau ac eitemau catalog, byth asiantau, a chadwch y llwybr staff yn weladwy.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016 (chapter on eliminating toil).
2. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Request Management*, 2020.
6. Wikipedia, [Self-service software](https://en.wikipedia.org/wiki/Self-service_software).
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Automation](https://en.wikipedia.org/wiki/Automation).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
