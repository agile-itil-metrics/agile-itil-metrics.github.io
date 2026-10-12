# Metrigau digwyddiadau mawr

**Mesurwch ddigwyddiadau mawr fel digwyddiadau prin, drud i ddysgu ohonynt, nid fel tabl cynghrair: cyfrifwch hwy, amserwch hwy yn onest, mesurwch eu heffaith ar gwsmeriaid, gwiriwch fod pobl wedi cael gwybod, a phrofwch fod y camau dilynol wedi'u cwblhau.**

## Crynodeb a chymhelliant

Digwyddiad mawr yw digwyddiad sy'n ddigon difrifol i fod angen ymateb y tu hwnt i'r drefn arferol. Mae [ITIL](https://en.wikipedia.org/wiki/ITIL), y fframwaith mwyaf adnabyddus ar gyfer rheoli gwasanaethau TG, yn disgrifio [rheoli digwyddiadau](https://en.wikipedia.org/wiki/Incident_management_(ITSM)) fel adfer gweithrediad gwasanaeth arferol cyn gynted â phosibl, ac mae'n disgwyl i sefydliadau drin eu digwyddiadau mwyaf difrifol drwy lwybr gwahanol, mwy cydgysylltiedig. Penderfyniad i'r sefydliad ei hun yw sut y tynnir y llinell honno. Dewis cyffredin yw digwyddiad sy'n effeithio ar lawer o ddefnyddwyr neu wasanaeth hanfodol ac sydd angen sawl tîm yn gweithio gyda'i gilydd dan un cydgysylltydd. Ysgrifennwch eich diffiniad eich hun, oherwydd bod pob metrig yn y pwnc hwn yn dibynnu arno.

Prin yw digwyddiadau mawr. Gall tîm weld dwsinau o ddigwyddiadau cyffredin bob wythnos a dau neu dri mawr bob chwarter. Mae hynny'n newid sut y mesurwch. Mae ystadegau arferol nifer ac amser datrys digwyddiadau (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau, a phwnc 3.3, Amser ymateb a datrys digwyddiadau) yn tybio llawer o ddigwyddiadau ac yn gwobrwyo cyfartaleddau. Gyda llond llaw o ddigwyddiadau mawr fesul cyfnod, mae un noson ddrwg yn dominyddu cyfartaledd, mae llinell duedd yn bennaf yn sŵn, ac mae [canradd](https://en.wikipedia.org/wiki/Percentile) yn ddiystyr ar bum pwynt data (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Y dull gonest yw dangos pob digwyddiad mawr fel rhes ei hun, gyda'i amserlen ei hun, a chrynhoi dim ond dros ffenestri hirach.

Mae'r golygon ITIL ac ystwyth yn cwrdd yma yn fwy uniongyrchol nag yn unman arall yn y llyfr. Mae ITIL yn cyfrannu'r strwythur: digwyddiad mawr a ddatganwyd, cydgysylltydd a enwir, cyfathrebu diffiniedig â phartïon yr effeithiwyd arnynt, ac adolygiad wedyn. Mae'r traddodiadau [ystwyth](https://en.wikipedia.org/wiki/Agile_software_development) a [pheirianneg dibynadwyedd safleoedd (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) yn cyfrannu'r arferion: [comander digwyddiad](https://en.wikipedia.org/wiki/Incident_commander) sy'n rhedeg yr ymateb, adolygu di-fai o'r hyn a ddigwyddodd, a ffocws ar ddysgu sy'n bwydo gwelliant parhaus. Mae *Site Reliability Engineering* Google yn disgrifio'r patrwm comander digwyddiad ac arfer adolygu ôl-farwolaeth (gweler y Cyfeiriadau). Mae [ôl-farwolaeth](https://en.wikipedia.org/wiki/Postmortem_documentation) yn yr ystyr hon yn gyfrif ysgrifenedig o ddigwyddiad, ei achosion, a'r camau sy'n dilyn, a defnyddir y term yma yn gyfnewidiol ag "adolygiad ôl-ddigwyddiad."

Mae'r pwnc hwn yn ymdrin â phum cwestiwn. Pa mor aml y mae digwyddiadau mawr yn digwydd? Pa mor hir y maent yn para, a faint o'r amser hwnnw a dreulir cyn bod unrhyw un yn datgan un? Faint o ddefnyddwyr, a pha ddefnyddwyr, a'i teimlodd? A glywodd pobl gennym ni mewn pryd ac mewn rhythm cyson? Ac a ddigwyddodd y camau dilynol a addawyd? Mae'r pynciau cysylltiedig yn ymdrin â'r hyn sydd o'u hamgylch: argaeledd (gweler pwnc 5.3, Metrigau argaeledd), ansawdd yr adolygiad ysgrifenedig (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu), yr achosion sylfaenol (gweler pwnc 4.1, Metrigau rheoli problemau), a'r newid sy'n eu sbarduno'n aml (gweler pwnc 4.4, Methiant newid ac ailwaith).

Termau a ddefnyddir yn y pwnc hwn:

- **Digwyddiad mawr:** digwyddiad sy'n bodloni eich meini prawf datgan ysgrifenedig ac yn sbarduno'r broses digwyddiad mawr.
- **Datgan:** y foment pan fo rhywun ag awdurdod yn galw'r broses digwyddiad mawr yn ffurfiol.
- **Amser i adfer:** yr amser o ddechrau effaith ar gwsmeriaid hyd at y foment y caiff y gwasanaeth ei adfer i ddefnyddwyr. Nid yw'r foment o adfer gwasanaeth yr un peth â dod o hyd i'r [gwraidd achos](https://en.wikipedia.org/wiki/Root_cause_analysis).
- **Comander digwyddiad:** y rôl sy'n cydgysylltu'r ymateb, yn neilltuo tasgau, ac yn penderfynu. Rôl am hyd y digwyddiad ydyw, nid teitl swydd.
- **Adolygiad ôl-ddigwyddiad:** yr archwiliad strwythuredig, di-fai o ddigwyddiad ar ôl adfer gwasanaeth.
- **Eitem weithredu:** newid penodol, â pherchennog a dyddiad, sy'n dilyn o adolygiad.

## Egwyddorion allweddol

- **Dangoswch ddigwyddiadau, yna crynhowch.** Mae digwyddiadau prin yn haeddu amserlenni unigol. Adroddwch bob digwyddiad mawr ar wahân a defnyddiwch ystadegau crynodeb dros ffenestr hir yn unig, gyda'r cyfrif wrth eu hymyl.
- **Dechreuwch y cloc ar effaith, nid ar ymwybyddiaeth.** Mae hyd sy'n dechrau pan fo rhywun yn sylwi yn cuddio'r bwlch canfod, sydd yn aml yn rhan fwyaf y stori.
- **Mesurwch brofiad y defnyddiwr, nid ymdrech y tîm.** Effaith ar gwsmeriaid yw'r rheswm y mae'r broses yn bodoli. Mae oriau ymdrech ymatebwyr yn gost i'w holrhain, byth yn sgôr.
- **Mae cyfathrebu'n rhan o adfer.** Dim ond hanner ei drwsio yw gwasanaeth a adferwyd tra bo defnyddwyr yn dal i ddyfalu. Trinwch brydlondeb diweddariadau fel mesur o'r ymateb.
- **Nid yw'r adolygiad wedi'i orffen nes bod y camau wedi'u gorffen.** Nid yw dogfen gyflawn â chamau agored wedi newid dim. Mesurwch ddilyniant, nid dim ond bodolaeth adolygiad.
- **Peidiwch byth â graddio pobl, a pheidiwch byth â chosbi datgan.** Os yw datgan digwyddiad mawr yn niweidio tîm y datganwr mewn adroddiad, bydd llai o ddigwyddiadau'n cael eu datgan a bydd y metrigau'n gwella tra bo'r gwasanaeth yn gwaethygu.
- **Cadwch y meini prawf datgan yn sefydlog.** Mae symud y trothwy yn newid pob metrig yn y pwnc hwn. Logiwch bob newid gyda'i reswm a'i ddyddiad.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfrif digwyddiadau mawr | Digwyddiadau mawr a ddatganwyd mewn cyfnod, yn ôl gwasanaeth | Cyfrif y digwyddiadau a fodlonodd y meini prawf datgan ac a ddatganwyd yn y cyfnod, yn ôl amser datgan; rhestrir digwyddiadau a israddiwyd o fewn yr awr gyntaf ar wahân a'u heithrio | cyfrif y chwarter | Cofnodion digwyddiadau offeryn ITSM gyda'r faner digwyddiad mawr | Rheoli digwyddiadau | Adolygiad iechyd tîm neu wasanaeth | Adroddiad misol, tuedd chwarterol |
| Hyd digwyddiad mawr | Yr amser yr effeithiwyd ar gwsmeriaid | Amser adfer gwasanaeth llai amser dechrau effaith, fesul digwyddiad. Dechrau effaith yw'r dystiolaeth gynharaf mewn monitro neu'r adroddiad defnyddiwr cyntaf, pa un bynnag sydd gynharaf. Cofnodir adfer rhannol fel digwyddiad ei hun, ac mae'r adfer llawn yn stopio'r cloc | munudau, fesul digwyddiad | Amserlen monitro, amserlen digwyddiad yn yr offeryn ITSM | Rheoli digwyddiadau; rheoli lefelau gwasanaeth | Amser i adfer mewn metrigau cyflawni (gweler pwnc 2.8, Metrigau DORA) | Fesul digwyddiad; canolrif a'r uchafswm ffenestr hir bob chwarter |
| Amser i ddatgan | Yr oedi rhwng dechrau effaith a datgan digwyddiad mawr | Amser datgan llai amser dechrau effaith, fesul digwyddiad. Darganfyddir digwyddiadau na ddatganwyd erioed drwy adolygiad chwarterol o ddigwyddiadau effaith uchel cyffredin a'u cynnwys gydag amser datgan o n/a (heb ei ddatgan erioed) | munudau, fesul digwyddiad | Amserlen monitro, llwybr archwilio offeryn ITSM | Rheoli digwyddiadau; monitro a rheoli hysbysiadau | Diffiniad o barod i ddwysáu mewn cytundebau gweithio tîm | Fesul digwyddiad |
| Effaith ar gwsmeriaid | Faint o ddefnyddwyr a faint o ddefnydd yr effeithiwyd arnynt | Defnyddwyr yr effeithiwyd arnynt (neu geisiadau a fethodd) wedi'u lluosi â munudau yr effeithiwyd arnynt, fesul digwyddiad. Cyfrifwch ddim ond defnyddwyr a geisiodd ddefnyddio'r gwasanaeth yn ystod y ffenestr effaith. Eithrir cynnal a chadw wedi'i gynllunio | munudau defnyddwyr, neu geisiadau a fethodd | Telemetreg gwasanaeth, cofnodion cysylltiadau cymorth | Rheoli lefelau gwasanaeth; rheoli digwyddiadau | Dangosyddion lefel gwasanaeth sy'n wynebu defnyddwyr (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau) | Fesul digwyddiad |
| Prydlondeb cyfathrebu | Pa un a hysbyswyd partïon yr effeithiwyd arnynt mewn pryd | Cyfran y digwyddiadau mawr lle aeth yr hysbysiad cyntaf sy'n wynebu cwsmeriaid allan o fewn y targed ar ôl datgan, a chyfran y diweddariadau trefnedig a anfonwyd o fewn y cyfwng y cytunwyd arno. Mae'r cloc yn dechrau wrth ddatgan. Eithrir negeseuon mewnol yn unig | canran y digwyddiadau; canran y diweddariadau | Hanes tudalen statws, log cyfathrebu yn yr offeryn ITSM | Rheoli digwyddiadau; rheoli lefelau gwasanaeth | Cyfathrebu â rhanddeiliaid yn y cytundeb gweithio tîm | Fesul digwyddiad; crynodeb chwarterol |
| Prydlondeb cwblhau adolygiad | A gynhaliwyd adolygiad yn ddigon buan i fod yn ddefnyddiol | Cyfran y digwyddiadau mawr sydd ag adolygiad a gyhoeddwyd o fewn y nifer o ddiwrnodau gwaith y cytunwyd arno ar ôl adfer. Mae'r cloc yn stopio wrth gyhoeddi, nid ar y drafft cyntaf. Eithrir digwyddiadau sy'n dal y tu mewn i'r ffenestr | canran | Ystorfa adolygiadau, offeryn ITSM | Gwelliant parhaus; rheoli problemau | Dilyniant gwelliant | Chwarterol |
| Dilyniant eitemau gweithredu | A gwblheir camau'r adolygiad | Camau adolygu a gwblhawyd erbyn eu dyddiad dyledus / camau adolygu sy'n ddyledus yn y cyfnod. Cyfrifir camau a gaewyd fel "ni wneir" ar wahân gyda rheswm, heb eu cuddio | canran; cyfrif y rhai hwyr | Traciwr materion wedi'i gysylltu â'r adolygiad | Gwelliant parhaus; rheoli problemau | Eitemau ôl-groniad o ôl-syllau | Misol |
| Cyfradd digwyddiadau mawr dro ar ôl tro | Yr un achos yn dychwelyd | Digwyddiadau mawr yn y cyfnod y mae eu hachos a gofnodwyd yn cyfateb i achos digwyddiad mawr cynharach yn y deuddeg mis blaenorol / digwyddiadau mawr yn y cyfnod. Mae paru yn ôl y maes achos, wedi'i adolygu â llaw | canran, gyda'r cyfrif wedi'i ddangos | Cofnodion adolygu, cofnodion problemau | Rheoli problemau | Gwaith atal yn yr ôl-groniad | Chwarterol |

Mae angen rheol cloc ysgrifenedig ar bob rhes cyn ymddiried ynddi. Mae anghydfodau ynghylch dechrau effaith ac amser adfer yn gyffredin ac mae'n well eu setlo ymlaen llaw (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

## Argymhellion

### Ysgrifennwch beth sy'n gwneud digwyddiad yn fawr

**Cyhoeddwch feini prawf datgan y gall unrhyw un ar alwad eu cymhwyso.** Fel arfer mae meini prawf yn cyfuno effaith (defnyddwyr yr effeithiwyd arnynt, gwasanaeth hanfodol wedi'i ddiraddio, risg diogelwch neu gyfreithiol) ag angen am gydgysylltu (mwy nag un tîm yn ofynnol). Mae rhestr fer gydag enghreifftiau yn well na matrics hir. Nodwch pwy gaiff ddatgan, a gwnewch yn glir nad yw datgan mewn ewyllys da byth yn gamgymeriad, hyd yn oed pan fo'r digwyddiad yn troi allan i fod yn fach.

**Cofnodwch fersiwn y meini prawf ym mhob cofnod digwyddiad.** Pan fo'r trothwy'n symud, mae tueddiadau'n symud gydag ef. Mae rhif fersiwn neu ddyddiad ar bob cofnod yn gadael i chi gymharu tebyg â thebyg ac esbonio naid yn y cyfrif a ddaeth o newid rheol.

### Cyfrifwch a dosbarthwch heb droi'r cyfrif yn darged

**Adroddwch y cyfrif gyda'i gyd-destun.** Dangoswch nifer y digwyddiadau mawr bob chwarter wrth ymyl y gwasanaeth, y sbardun (newid, capasiti, dibyniaeth, diogelwch, arall) a fersiwn y meini prawf. Mae cyfrif heb gyd-destun yn gwahodd targedau megis "llai na thri y chwarter", sy'n dysgu pobl i beidio â datgan. Trinwch gyfrif sy'n disgyn fel newyddion da dim ond pan fo amser i ddatgan ac effaith ar gwsmeriaid yn sefydlog.

**Gwahanwch rai a ddatganwyd, a israddiwyd, a fethwyd.** Olrheiniwch ddigwyddiadau a ddatganwyd ac a israddiwyd, oherwydd eu bod yn dangos a yw'r meini prawf yn synhwyrol. Adolygwch sampl o ddigwyddiadau cyffredin bob chwarter am rai a ddylai fod wedi'u datgan. Y rhai a fethwyd yw'r mwyaf addysgiadol.

### Amserwch y digwyddiad o ochr y defnyddiwr

**Dechreuwch y cloc pan effeithir ar gwsmeriaid.** Defnyddiwch y dystiolaeth ddibynadwy gynharaf, sydd yn aml yn signal monitro sy'n rhagflaenu'r tocyn cyntaf. Pan fo'r dechrau'n ansicr, cofnodwch yr amcangyfrif a'i ffynhonnell yn hytrach na'r amser y sylwodd rhywun. Mae'r bwlch rhwng dechrau effaith a datgan yn fetrig ynddo'i hun ac fel arfer yr un rhataf i'w wella.

**Rhannwch yr amserlen yn gamau.** Mae gan ganfod, datgan, diagnosis, lliniaru ac adfer llawn wahanol achosion oedi a gwahanol berchnogion. Mae dadansoddiad cam ar gyfer pob digwyddiad yn dangos ble aeth yr amser heb fod angen cyfartaledd. Mae adfer gwasanaeth drwy osgoi a thrwsio'r achos yn ddigwyddiadau ar wahân, ac mae'r ail yn perthyn i reoli problemau.

**Defnyddiwch y canolrif a'r achos gwaethaf dros ffenestri hir, gyda'r cyfrif.** Ar gyfer blwyddyn o ddata, adroddwch y canolrif a'r hyd hiraf, a dywedwch o faint o ddigwyddiadau y maent yn dod. Osgowch un amser cymedrig i adfer ar gyfer digwyddiadau mawr. Gydag ychydig o ddigwyddiadau mae'n ansefydlog, ac mae un toriad hir yn ei ystumio (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

### Mesurwch effaith ar gwsmeriaid mewn termau y byddai defnyddwyr yn eu hadnabod

**Ffafriwch effaith ar sail defnyddwyr i effaith ar sail gweinyddion.** Mae ceisiadau a fethodd, defnyddwyr yr effeithiwyd arnynt, neu drafodion yr effeithiwyd arnynt yn disgrifio'r hyn a ddigwyddodd i bobl. Mae munudau o wasanaeth diraddedig ar gydran yn disgrifio'r hyn a ddigwyddodd i beiriant. Lle mae gennych ddangosyddion lefel gwasanaeth, defnyddiwch hwy (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau) a chysylltwch y digwyddiad â'r darlun argaeledd (gweler pwnc 5.3, Metrigau argaeledd).

**Ychwanegwch ddatganiad effaith mewn iaith blaen at bob cofnod.** Un neu ddwy frawddeg yn enwi pwy yr effeithiwyd arnynt a'r hyn na allent ei wneud. Mae cysylltiadau cymorth, sôn ar gyfryngau cymdeithasol, a dwysáu gan gwsmeriaid yn dystiolaeth ar gyfer y datganiad, nid metrigau i'w mwyhau.

### Mesurwch gyfathrebu fel rhan o'r ymateb

**Gosodwch dargedau cyfathrebu yn ôl cynulleidfa.** Mae cwsmeriaid yr effeithiwyd arnynt, rhanddeiliaid mewnol a gweithredwyr angen gwahanol negeseuon ar wahanol adegau. Cytunwch ar darged ar gyfer yr hysbysiad cyntaf ar ôl datgan a rhythm cyson ar gyfer diweddariadau, a mesurwch gydymffurfiaeth fesul digwyddiad. Mae'r rhythm yn bwysicach na'r cynnwys: mae diweddariad sy'n dweud "dim newid, diweddariad nesaf mewn tri deg munud" ac sy'n cyrraedd mewn pryd yn adeiladu mwy o ymddiriedaeth na thawelwch.

**Cadwch ymateb a chyfathrebu mewn dwylo gwahanol.** Mae arweinydd cyfathrebu yn rhyddhau'r comander digwyddiad i ganolbwyntio ar ddiagnosis. Gall tîm bach ddefnyddio rhestr wirio a thempled wedi'i ysgrifennu ymlaen llaw yn lle hynny.

### Caewch y ddolen ar ddysgu

**Cynhaliwch yr adolygiad yn fuan, a chyhoeddwch ef.** Mae cof yn pylu, felly gosodwch ffenestr ar gyfer yr adolygiad a mesurwch a gafodd ei bodloni. Mae cwblhau adolygiad yn bwysig yn llai na'r hyn y mae'r adolygiad yn ei newid, felly parwch ef â dilyniant. Mae *Site Reliability Engineering* Google yn gwneud yr achos dros adolygu di-fai a'i ysgrifennu i lawr (gweler y Cyfeiriadau), ac mae pwnc 4.2 (Metrigau adolygu ôl-ddigwyddiad a dysgu) yn ymdrin ag ansawdd adolygiad.

**Olrheiniwch gamau hyd at y diwedd, a chaniatewch "ni wneir" gonest.** Rhowch bob cam yn yr ôl-groniad y mae'r tîm perchnogol eisoes yn ei ddefnyddio, gyda pherchennog a dyddiad. Cofnodwch gamau a wrthodir, gyda'r rheswm, yn hytrach na gadael iddynt bydru. Adolygwch gamau hwyr mewn adolygiad gweithrediadau neu wasanaeth, a gofynnwch beth sy'n eu rhwystro. Cyfyngwch nifer y camau ym mhob adolygiad fel mai'r rhai sy'n weddill yw'r rhai sy'n bwysig.

**Chwiliwch am batrymau ar draws digwyddiadau, a'u hanfon i reoli problemau.** Mae achosion sy'n ailadrodd, sbardunau cyffredin, a bylchau canfod sy'n digwydd dro ar ôl tro yn signalau y mae adolygiadau unigol yn eu methu. Bwydwch hwy i'r broses problemau a gwallau hysbys (gweler pwnc 4.1, Metrigau rheoli problemau) ac i gynllunio'r timau sy'n berchen ar y gwasanaethau. Trinwch gyfradd ailadrodd gynyddol fel anogwr i ymchwilio, nid dyfarniad.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfrif digwyddiadau mawr | Codi'r trothwy datgan, cadw digwyddiadau ar flaenoriaeth "uchel" fel na chânt eu datgan byth, hollti un digwyddiad yn sawl cofnod, neu uno sawl un yn un | Meini prawf sefydlog, wedi'u fersiynu; sampl chwarterol o ddigwyddiadau cyffredin effaith uchel; effaith ar gwsmeriaid ac amser i ddatgan wedi'u holrhain wrth ymyl y cyfrif |
| Hyd digwyddiad mawr | Symud y cloc i ddechrau effaith hwyrach, datgan "wedi'i adfer" tra bo defnyddwyr yn dal i fethu, neu gau ac ailagor cofnod newydd | Dechrau effaith wedi'i gymryd o fonitro; adfer wedi'i gadarnhau gan ddangosydd sy'n wynebu defnyddwyr; cofnodion a ailagorwyd a'u cysylltu wedi'u cyfrif fel un digwyddiad |
| Amser i ddatgan | Datgan yn gynnar ar bopeth i edrych yn gyflym, neu ôl-ddyddio'r datganiad i ddechrau effaith | Cyfran y digwyddiadau a ddatganwyd a israddiwyd yn ddiweddarach; llwybr archwilio amser y datganiad; sampl o amserlenni yn erbyn monitro crai |
| Effaith ar gwsmeriaid | Culhau'r diffiniad o "effeithiwyd arnynt", cyfrif dim ond defnyddwyr a gododd docyn, neu fesur dibyniaeth a arhosodd i fyny | Effaith wedi'i deillio o delemetreg yn ogystal â chysylltiadau; datganiad effaith mewn iaith blaen wedi'i adolygu yn yr adolygiad digwyddiad |
| Prydlondeb cyfathrebu | Postio hysbysiad amwys i ddechrau'r cloc, anfon diweddariadau heb gynnwys, neu gyfrif negeseuon mewnol | Gwiriad cynnwys sampl o ddiweddariadau; adborth cwsmeriaid ar eglurder; cyfrif hysbysiadau sy'n wynebu cwsmeriaid yn unig |
| Prydlondeb cwblhau adolygiad | Cyhoeddi dogfen denau i fodloni'r dyddiad, neu ddatgan nad oes "angen" adolygiad | Ansawdd adolygiad wedi'i ddarllen gan gymar ar sampl (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu); dangosir cyfran yr adolygiadau a hepgorwyd |
| Dilyniant eitemau gweithredu | Ysgrifennu camau amwys neu ddibwys sy'n hawdd eu cau, cau camau heb wneud y gwaith, neu ail-labelu fel "ni wneir" | Ansawdd camau wedi'i samplu; camau caeedig wedi'u gwirio yn erbyn y newid system; cyfran ac achosion "ni wneir" wedi'u hadolygu |
| Cyfradd digwyddiadau mawr dro ar ôl tro | Cofnodi pob achos fel un newydd drwy ddewis geiriad gwahanol, neu briodoli popeth i "gamgymeriad dynol" | Tacsonomeg achos byr gyda diffiniadau; meysydd achos wedi'u hadolygu gan rywun y tu allan i'r digwyddiad; "camgymeriad dynol" fel achos heb ei dderbyn heb esboniad system |

Darlleniad iach yw cyfrif cymedrol a gweddol sefydlog o ddigwyddiadau a ddatganwyd, gydag israddiad achlysurol ac un a fethwyd achlysurol a ddarganfyddir mewn adolygiad. Mae amser i ddatgan yn fyr ac yn disgyn, mae effaith ar gwsmeriaid fesul digwyddiad yn cael ei deall ac yn disgyn lle gwnaed gwaith atal, ac mae bron pob diweddariad sy'n wynebu cwsmeriaid ar amserlen. Cyhoeddir adolygiadau mewn pryd ac mae eu camau wedi'u gorffen gan mwyaf, gyda set fach, onest o gamau a wrthodwyd. Os yw popeth yn edrych yn berffaith, gofynnwch a yw'r meini prawf wedi drifftio neu a yw pobl wedi rhoi'r gorau i ddatgan (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Mae'r [gyfraith a enwyd ar ôl Charles Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn haws ei gweld yma, oherwydd mai cost rhif drwg yw llai o barodrwydd i godi'r larwm.

## Cyfaddawdau: manteision ac anfanteision

| Dewis | Cryfder | Gwendid |
| --- | --- | --- |
| Dangos pob digwyddiad fel rhes | Cadw cyd-destun, osgoi cyfartaleddau camarweiniol ar gyfrifon bach | Anoddach ei grynhoi i arweinwyr; angen naratif byr fesul digwyddiad |
| Adrodd cyfrif o ddigwyddiadau mawr | Syml, cyfarwydd, gweladwy i'r arweinyddiaeth | Hawdd ei droi'n darged; yn ymateb i newidiadau mewn meini prawf |
| Amser o ddechrau effaith | Adlewyrchu profiad y defnyddiwr, datgelu'r bwlch canfod | Mae dechrau effaith weithiau'n ansicr ac angen barn |
| Amser o ddatganiad | Hawdd ei gipio a'i gymharu | Cuddio canfod araf a datgan araf |
| Munudau defnyddwyr o effaith | Cymaradwy ar draws digwyddiadau a gwasanaethau | Angen telemetreg; trin pob defnyddiwr a munud fel rhai cyfartal |
| Cyfradd cwblhau adolygiad | Hawdd ei gasglu, yn procio'r arfer | Gwobrwyo'r ddogfen, nid y dysgu |
| Cyfradd dilyniant camau | Cysylltu adolygiad â newid | Gellir ei chwarae gyda chamau dibwys; angen perchennog ac ôl-groniad |

Defnyddiwch set fach o fesurau sy'n cwmpasu'r cylch cyfan (datgan, adfer, hysbysu, dysgu, gorffen) yn lle optimeiddio un. Ychwanegwch fesurau effaith dim ond pan fo'r telemetreg yn bodoli. Lle mae telemetreg ar goll, mae datganiad effaith ysgrifenedig gofalus yn gwasanaethu'n well na rhif a ddyfeisiwyd.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth yn union sy'n gwneud digwyddiad yn fawr yma, ac a yw pawb ar alwad yn cytuno?**
Y diffiniad yw'r sylfaen ar gyfer pob rhif arall. Gofynnwch i dri pherson ddosbarthu'r un digwyddiad diweddar a chymharwch yr atebion. Mae anghytundeb yn dangos ble mae'r meini prawf yn amwys. Dylai'r hwylusydd nodi enghreifftiau i'w hychwanegu at y meini prawf ysgrifenedig a chytuno pwy gaiff ddatgan. Gorffennwch drwy gadarnhau bod datgan mewn ewyllys da bob amser yn dderbyniol, hyd yn oed os caiff y digwyddiad ei israddio'n ddiweddarach.

**2. Yn ein digwyddiad mawr diwethaf, pa mor hir oedd hi rhwng dechrau effaith a datgan?**
Ail-greuwch yr amserlen o fonitro, nid cof. Mae'r bwlch yn aml yn fwy na'r disgwyl ac weithiau dyma'r cam hiraf. Gofynnwch pa signal oedd yn bodoli a phwy a'i gwelodd, ac a ddaeth y bwlch o feini prawf aneglur, rhybudd ar goll, neu amharodrwydd i ddatgan. Dewiswch un newid a fyddai'n ei fyrhau, a phenderfynwch sut y byddwch yn gwybod.

**3. Pwy yr effeithiwyd arnynt, a sut ydym ni'n gwybod?**
Cymharwch yr hyn yr oedd y tîm yn ei gredu ar y pryd â'r hyn y mae telemetreg a chysylltiadau cymorth yn ei ddangos wedyn. Gofynnwch pa gwsmeriaid, os o gwbl, yr effeithiwyd arnynt yn fwy nag eraill, ac ai nhw oedd y rhai pwysicaf i'r busnes neu'r rhai lleiaf abl i ymdopi. Trafodwch a yw'r datganiad effaith yn rhywbeth y byddai cwsmer yn ei adnabod. Cytunwch ar un mesur effaith y gallwch ei gasglu'n ddibynadwy y tro nesaf.

**4. A glywodd pobl gennym ni pan oedd angen, ac a oedd y neges yn ddefnyddiol?**
Gwiriwch yr hysbysiad cyntaf a phob diweddariad yn erbyn y rhythm y cytunwyd arno. Darllenwch y negeseuon gwirioneddol fel y byddai cwsmer. Gofynnwch a oeddent yn dweud yr hyn a wyddid, yr hyn nas gwyddid, a phryd y deuai'r diweddariad nesaf. Trafodwch pwy sy'n berchen ar gyfathrebu yn ystod digwyddiad ac a yw'r person hwnnw'n rhydd i'w wneud.

**5. Beth ddigwyddodd i gamau ein tri adolygiad diwethaf?**
Tynnwch y camau i un rhestr a marciwch bob un fel wedi'i wneud, ar y gweill, yn hwyr, neu wedi'i wrthod. Ar gyfer y rhai hwyr, gofynnwch beth sy'n eu rhwystro: capasiti, perchnogaeth, blaenoriaeth, neu gwmpas aneglur. Penderfynwch sut y codir camau hwyr yn y cyfarfod gweithrediadau neu gynllunio nesaf.

**6. Pe baem yn cael ein mesur ar nifer y digwyddiadau mawr, beth fyddem yn ei wneud yn wahanol, ac a fyddai cwsmeriaid yn well eu byd?**
Mae'r cwestiwn hwn yn dod â'r ffyrdd o chwarae'r system i'r wyneb cyn iddynt ddigwydd. Gofynnwch i'r grŵp fod yn onest am yr hyn y gallent ei newid: trothwyon, labeli, pwy sy'n datgan. Yna gofynnwch beth yw'r targed gwell. Mae ateb da yn symud tuag at effaith ar gwsmeriaid, amser i ddatgan, a dilyniant, sy'n anoddach eu chwarae heb helpu defnyddwyr. Cofnodwch yr ateb fel rheilen warchod.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cynnyrch yn cwrdd â digwyddiadau mawr fel ymyriadau i waith wedi'i gynllunio ac fel adborth ar eu newidiadau eu hunain. Maent yn elwa fwyaf o rifau effaith clir, mynediad cyflym at amserlenni eu digwyddiadau eu hunain, a chamau adolygu sy'n glanio yn eu hôl-groniad gyda lle i'w gwneud. Neilltuwch gapasiti ar gyfer dilyniant digwyddiadau, a thrinwch gamau fel gwaith â'r un statws â nodweddion. Rhannwch gategorïau achos fel bod sbardun sy'n ailadrodd yn arwain at newid arfer (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn rhedeg yr ymateb ac yn cario cost y gwaith hwyr y nos. Maent angen meini prawf y gallant eu cymhwyso am 3 y bore, rôl comander a chyfathrebu y gallant eu staffio, ac offer sy'n cipio'r amserlen wrth i ddigwyddiadau ddigwydd yn lle o'r cof wedyn. Dylent wylio'r llwyth y mae digwyddiadau mawr yn ei roi ar grŵp bach o bobl (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad) a defnyddio'r metrigau yn y pwnc hwn i ofyn am waith atal, nid i gymharu ymatebwyr.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod yr hinsawdd sy'n penderfynu a yw pobl yn datgan yn gyflym ac yn adrodd yn onest. Dylent ofyn am hanes pob digwyddiad mawr a'r duedd dros flwyddyn, osgoi targedau ar y cyfrif, a gofyn am effaith ar gwsmeriaid, bylchau canfod, a chamau a orffennwyd. Ariennir y gwaith atal y mae adolygiadau'n ei argymell, a'i adolygu yn yr un fforwm â chynlluniau cyflawni. Gall llywodraethu wedyn weld a yw gwersi'n troi'n newid (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau, am ffordd o gysylltu dibynadwyedd a buddsoddiad).

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn barnu digwyddiad mawr yn ôl pa mor hir yr effeithiwyd arnynt, a hysbyswyd hwy, ac a yw'n digwydd eto. Mae hysbysiadau cynnar, gonest yn eu gwasanaethu'n well na rhai hwyr, caboledig. Rhowch iddynt sianel statws, rhythm y gallant ddibynnu arno, ac adroddiad clir wedyn o'r hyn a ddigwyddodd a'r hyn a newidir. Lle mae contractau'n berthnasol, adroddwch yn y termau y cytunwyd arnynt yn y cytundeb lefel gwasanaeth (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA). Mae'n werth gofyn am fodlonrwydd ar ôl digwyddiad (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg blaen siop, gwasanaeth taliadau, a gwasanaeth rheoli archebion, pob un yn eiddo i dîm cynnyrch, gyda thîm platfform a rennir ar alwad. Mae grŵp rheoli gwasanaeth bach yn rhedeg y broses digwyddiad mawr. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Yn y ddau chwarter diwethaf, datganodd y manwerthwr bum digwyddiad mawr (enghreifftiol). Mae'r grŵp rheoli gwasanaeth yn dangos pob un fel rhes gyda dechrau effaith, amser datgan, amser adfer, archebion a fethodd amcangyfrifedig, amser yr hysbysiad cyntaf i gwsmeriaid, a statws yr adolygiad. Maent yn sylwi bod y bwlch canolrifol rhwng dechrau effaith a datgan yn 38 munud (enghreifftiol), bron cyhyd â'r amser canolrifol o ddatgan i adfer, sef 52 munud (enghreifftiol). Gyda phum digwyddiad maent yn trin y ddau rif fel bras ac yn darllen yr amserlenni yn lle hynny. Mae tri o'r pump yn dangos rhybudd monitro a daniodd yn gynnar ac a eisteddodd heb ei gydnabod mewn sianel a rennir.

Mae'r tîm yn penderfynu llwybro'r dosbarth rhybudd hwnnw i'r galwr ar alwad ac ychwanegu llinell at y meini prawf yn dweud bod signal methiant tâl parhaus yn ddigon i ddatgan, heb aros am docynnau. Maent hefyd yn gosod targed ar gyfer yr hysbysiad cwsmer cyntaf o fewn 20 munud i ddatgan (enghreifftiol), ac yn ei wirio fesul digwyddiad. Bodlonodd dau o'r pump ef. Mae'r tîm defnyddio yn ychwanegu templed tudalen statws y gall arweinydd cyfathrebu ei lenwi dan bwysau.

Yn ystod yr un adolygiad maent yn dod o hyd i risg chwarae'r system. Roedd rheolwr un tîm cynnyrch wedi cynnig nod chwarterol o "dim mwy na dau ddigwyddiad mawr". Mae'r grŵp rheoli gwasanaeth yn tynnu sylw at y ffaith bod y chwarter blaenorol wedi cael un digwyddiad a arhosodd ar flaenoriaeth uchel am bedair awr gyda chwsmeriaid yn methu wrth y til, na ddatganwyd erioed am fod y tîm yn agos at y terfyn. Maent yn disodli'r nod gyda thri mesur: amser i ddatgan, archebion a fethodd fesul digwyddiad, a chyfran y camau adolygu a gwblhawyd mewn pryd. Maent yn ychwanegu'r rheilen warchod o sampl chwarterol o ddigwyddiadau blaenoriaeth uchel a ddarllenir gan rywun y tu allan i'r tîm perchnogol. Y chwarter nesaf mae'r cyfrif a ddatganwyd yn codi i bedwar (enghreifftiol), mae'r amser canolrifol i ddatgan yn disgyn, ac nid yw'r adolygiad sampl yn dod o hyd i unrhyw ddatganiadau a fethwyd.

## Y golwg fesul sector

**Busnes newydd.** Efallai nad oes proses digwyddiad mawr ffurfiol gan fusnes newydd, dim ond pwy bynnag sy'n effro. Dechreuwch â diffiniad un paragraff, cydgysylltydd a enwir ar gyfer pob digwyddiad, a dogfen a rennir sy'n cofnodi'r amserlen. Cyfrifwch ddigwyddiadau a nodwch effaith mewn brawddeg. Gall yr adolygiad fod yn nodyn hanner tudalen, a'r dilyniant yw eitem yn ôl-groniad y tîm.

**Busnes bach.** Mae busnes bach yn aml yn dibynnu ar gyflenwyr am lawer o'i wasanaeth, felly mae'r amserlen yn cynnwys aros am gyflenwr. Cofnodwch amseroedd cysylltu ac ymateb y cyflenwr yn yr amserlen digwyddiad, oherwydd eu bod yn esbonio llawer o'r hyd ac yn rhoi tystiolaeth ar gyfer sgyrsiau contract. Cadwch gyfathrebu â chwsmeriaid yn syml: un sianel, un person, a chyfwng diweddaru a nodir.

**Menter fawr.** Mae mentrau'n rhedeg llawer o wasanaethau ac mae ganddynt lawer o ddigwyddiadau ym mhob cyfnod, felly mae cyfrif fesul gwasanaeth a chrynodeb cyfanredol ill dau yn ddefnyddiol. Y risgiau yw meini prawf anghyson rhwng adrannau a phroses sy'n ddigon trwm i arafu datgan. Alinio diffiniadau, cadwch y broses yn ysgafn am y pymtheg munud cyntaf, a defnyddiwch fformat cofnod cyffredin fel y gellir cymharu effaith a chyfathrebu.

**Llywodraeth a'r sector cyhoeddus.** Yn aml mae gan gyrff cyhoeddus ddyletswyddau statudol, megis hysbysu rheoleiddiwr neu'r cyhoedd, a chost methiant uwch i ddinasyddion nad oes ganddynt ddewis arall. Ychwanegwch fesurau ar gyfer cydymffurfio â dyletswyddau hysbysu ac ar gyfer effaith ar grwpiau agored i niwed, a chadwch gofnodion a all wrthsefyll archwiliad a cheisiadau am wybodaeth gyhoeddus. Gall cylchoedd caffael oedi eitemau gweithredu, felly olrheiniwch gamau wedi'u rhwystro a'u dwysáu.

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw lleihau cost y digwyddiadau sy'n brifo fwyaf: refeniw neu wasanaeth a gollwyd, ymddiriedaeth wedi'i niweidio, llosgi staff allan, ac amlygiad rheoleiddiol. Mae set fach, gyson o fesurau digwyddiadau mawr yn dangos o ble mae'r gost honno'n dod, a yw canfod a chyfathrebu yn gwella, ac a yw'r buddsoddiad mewn atal yn glanio. Mae mesurau sy'n dangos dim ond cyfrif yn gwthio cost i guddio digwyddiadau.

Mae costau casglu yn gymedrol os yw'r data eisoes yn byw yn yr offeryn ITSM, y system fonitro, a'r traciwr materion. Y prif gostau yw cytuno ar ddiffiniadau, cysylltu'r cofnod digwyddiad â monitro ac â'r ôl-groniad camau, a'r amser a gymerir i ysgrifennu pob adolygiad. Mae'r metrigau'n costio ychydig y tu hwnt i wneud y cofnod yn gyson.

Mae'r elw'n ymddangos fel amser byrrach i ddatgan, cyfathrebu cliriach, llai o ddigwyddiadau sy'n ailadrodd, a llai o ailwaith. Nid oes unrhyw ffigur cyffredinol yn berthnasol, felly amcangyfrifwch eich un eich hun: cymerwch eich blwyddyn ddiwethaf o ddigwyddiadau mawr, amcangyfrifwch gost awr o effaith ar gyfer pob gwasanaeth gyda chyllid, a'i gymharu â chost y gwaith dilynol y byddai ei angen arnoch i atal yr achosion sy'n ailadrodd. Mae cyfanswm cost perchnogaeth yn cynnwys amser adolygwyr, yr offer ar gyfer amserlenni a thudalennau statws, a'r capasiti a neilltuir ar gyfer camau dilynol, sef lle mae'r rhan fwyaf o raglenni'n tanfuddsoddi.

## Gwrthbatrymau a maglau

- **Targed ar gyfer nifer y digwyddiadau mawr.** Mae'n dysgu pobl i osgoi datgan. Yn lle hynny, olrheiniwch amser i ddatgan, effaith, a dilyniant, a samplwch am ddatganiadau a fethwyd.
- **Un amser cymedrig i adfer ar gyfer digwyddiadau mawr.** Gydag ychydig o ddigwyddiadau, mae un toriad hir yn dominyddu. Yn lle hynny, dangoswch bob digwyddiad, yna'r canolrif a'r hiraf dros flwyddyn gyda'r cyfrif.
- **Dechrau'r cloc wrth ddatgan.** Mae'n cuddio oedi canfod a datgan. Yn lle hynny, dechreuwch ar y dystiolaeth gynharaf o effaith ar gwsmeriaid, ac adroddwch y bwlch ar wahân.
- **Graddio ymatebwyr neu dimau yn ôl metrigau digwyddiadau.** Mae'n dinistrio didwylledd ac yn torri'r adolygiad. Yn lle hynny, adroddwch yn ôl gwasanaeth a system, a chadwch enwau allan o'r data.
- **Trin yr adolygiad fel un wedi'i wneud pan gyhoeddir y ddogfen.** Y newid yw'r pwynt. Yn lle hynny, mesurwch ddilyniant camau ac edrychwch ar gamau hwyr bob mis.
- **Newidiadau trothwy tawel.** Mae tueddiadau'n dod yn ddiystyr. Yn lle hynny, fersiynwch y meini prawf a nodwch newidiadau yn yr adroddiad.
- **Cyfrif tocynnau yn unig fel effaith.** Nid yw llawer o ddefnyddwyr yr effeithiwyd arnynt byth yn ffonio. Yn lle hynny, defnyddiwch delemetreg ac ychwanegwch ddatganiad effaith mewn iaith blaen.
- **Defnyddio'r metrigau i roi bai.** Mae pobl wedyn yn cuddio ffeithiau. Yn lle hynny, cadwch adolygiadau'n ddi-fai, canolbwyntiwch ar amodau a phenderfyniadau, a chwiliwch am achosion system.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniad a chlociau | Mae mawr yn golygu beth bynnag y mae'r person uchaf ei gloch yn ei ddweud; daw amseroedd o'r cof | Mae gan rai timau feini prawf ac maent yn ysgrifennu amseroedd dechrau a diwedd | Un diffiniad ysgrifenedig, wedi'i fersiynu, gyda rheolau cloc ar gyfer dechrau effaith, datgan, ac adfer | Diffiniad a chlociau wedi'u harchwilio yn erbyn monitro; newidiadau wedi'u logio gyda rhesymau | Meini prawf a chlociau wedi'u cytuno â chyflenwyr a chwsmeriaid, wedi'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Effaith a chyfathrebu | Effaith wedi'i disgrifio mewn hanesion; diweddariadau'n cael eu hanfon pan fo rhywun yn cofio | Effaith wedi'i hamcangyfrif ar gyfer rhai digwyddiadau; mae rhai timau'n defnyddio tudalen statws | Effaith wedi'i mesur o delemetreg ar gyfer gwasanaethau allweddol; targedau diweddaru wedi'u gosod a'u holrhain | Effaith a chyfathrebu wedi'u tueddu a'u cysylltu ag adborth cwsmeriaid | Effaith wedi'i rhannu â chwsmeriaid a chyflenwyr mewn fformat cyffredin, gyda chamau gwella ar y cyd |
| Adolygu a dilyniant | Adolygiadau'n brin ac heb eu hysgrifennu; camau wedi'u hanghofio | Adolygiadau wedi'u hysgrifennu gan rai timau; camau wedi'u cofnodi ond heb eu holrhain | Pob digwyddiad mawr wedi'i adolygu mewn pryd; camau wedi'u holrhain yn ôl-groniad y tîm | Camau hwyr ac achosion sy'n ailadrodd wedi'u hadolygu yn ôl amserlen, gyda gwaith atal wedi'i ariannu | Patrymau wedi'u rhannu ar draws timau a chyflenwyr; dysgu'n newid dylunio a chynllunio yn rheolaidd |
| Defnydd mewn penderfyniadau | Rhifau wedi'u dyfynnu ar ôl y ffaith | Cyfrifon wedi'u dangos i arweinwyr heb gyd-destun | Amserlenni a thueddiadau wedi'u dangos i'r timau sy'n berchen ar y gwasanaethau | Metrigau wedi'u paru â rheiliau gwarchod a'u defnyddio i flaenoriaethu gwaith dibynadwyedd | Buddsoddiad dibynadwyedd wedi'i benderfynu ar y cyd gan ddefnyddio tystiolaeth effaith ac ailadrodd ar draws gwasanaethau |

## Rhestr wirio

- [ ] Mae meini prawf datgan wedi'u hysgrifennu, eu fersiynu, ac yn hysbys i bawb ar alwad.
- [ ] Mae datgan mewn ewyllys da yn ddiogel yn benodol, ac nid oes targed ar y cyfrif.
- [ ] Mae amseroedd dechrau effaith, datgan ac adfer wedi'u diffinio a'u cymryd o fonitro neu lwybr archwilio.
- [ ] Dangosir pob digwyddiad mawr fel ei res ei hun gydag amserlen gamau.
- [ ] Deillir effaith ar gwsmeriaid o delemetreg lle mae'n bodoli a'i disgrifio mewn datganiad iaith blaen.
- [ ] Gosodir targedau ar gyfer yr hysbysiad cyntaf a'r rhythm diweddaru a'u gwirio fesul digwyddiad.
- [ ] Cyhoeddir adolygiad o fewn y ffenestr y cytunwyd arni ac mae ei gamau yn ôl-groniad y tîm perchnogol.
- [ ] Adolygir camau hwyr ac achosion sy'n ailadrodd yn ôl amserlen.
- [ ] Mae sampl chwarterol o ddigwyddiadau cyffredin effaith uchel yn gwirio am ddatganiadau a fethwyd.
- [ ] Mae gan bob metrig reilen warchod a enwir ac nid yw unrhyw fetrig yn cael ei ddefnyddio i raddio unigolion.

## Anogwyr AI

**Drafftiwch feini prawf datgan i'w hadolygu.**

```text
Rwy'n drafftio meini prawf ar gyfer datgan digwyddiad mawr yn [math o
sefydliad]. Ein gwasanaethau yw [rhestr gwasanaethau] a'n timau yw [rhestr
timau]. Mae defnyddwyr yn [disgrifiad o ddefnyddwyr]. Cynigiwch set fer o
feini prawf datgan gyda dwy neu dair enghraifft ar gyfer pob un, rhestr o
amwyseddau y gallai tîm ddadlau yn eu cylch, a chwestiynau y dylwn eu setlo
gyda [rhanddeiliaid]. Peidiwch â dyfeisio trothwyon na gwerthoedd meincnod;
defnyddiwch [dalfeydd lle] lle mae angen rhif. Rhestrwch eich rhagdybiaethau.
```

**Ail-greu a beirniadu amserlen digwyddiad.**

```text
Dyma amserlen digwyddiad mawr: [gludwch amserlen gyda stampiau amser a
ffynonellau]. Nodwch y dechrau effaith, y datganiad, y lliniaru, a'r adfer
llawn, a dywedwch pa stampiau amser sy'n ansicr a pham. Rhannwch y hyd yn
gamau a nodwch ble roedd yr oedi mwyaf. Awgrymwch gwestiynau i'w gofyn i'r
ymatebwyr a thystiolaeth monitro i chwilio amdani. Peidiwch â dyfeisio ffeithiau
nad ydynt yn yr amserlen. Rhestrwch eich rhagdybiaethau.
```

**Adolygu set o gamau ôl-ddigwyddiad.**

```text
Isod mae'r camau o [nifer] o adolygiadau ôl-ddigwyddiad ar gyfer [gwasanaeth]:
[gludwch gamau gyda pherchennog, dyddiad dyledus, a statws]. Grwpiwch hwy yn
ôl thema, nodwch unrhyw rai sy'n amwys, yn ddibwys, neu heb berchennog, a
nodwch batrymau sy'n awgrymu cofnod problem neu eitem ôl-groniad ar gyfer
[tîm perchnogol]. Peidiwch â graddio unigolion na thimau yn ôl perfformiad.
Peidiwch â dyfeisio achosion. Rhestrwch eich rhagdybiaethau a'r wybodaeth y
byddai ei hangen arnoch i wella'r dadansoddiad.
```

**Profi metrig arfaethedig am chwarae'r system.**

```text
Rydym yn bwriadu olrhain [enw'r metrig], wedi'i ddiffinio fel [diffiniad] ac
wedi'i fesur o [ffynhonnell data]. Disgrifiwch sut y gallai [rôl] chwarae'r
metrig hwn, pa ymddygiad gonest y gallai ei ddigalonni, a pha fetrig neu arfer
rheilen warchod pâr fyddai'n dal pob achos. Cadwch yr awgrymiadau yn ymarferol
ar gyfer tîm o [maint tîm]. Peidiwch â dyfeisio gwerthoedd meincnod na
ffynonellau. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau cysylltiedig a'r rheilen warchod a ddylai eistedd wrth ymyl pob metrig digwyddiad mawr.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod fersiwn wedi'i golygu o'r pwnc hwn yn dal i ddilyn y templed a'r confensiynau.

## Pwyntiau allweddol

- Mae digwyddiadau mawr yn brin, felly dangoswch bob un gyda'i amserlen a chrynhowch dim ond dros ffenestri hir gyda'r cyfrif wrth ymyl y ffigur.
- Dechreuwch y cloc ar effaith ar gwsmeriaid, ac adroddwch y bwlch cyn datgan fel ei fesur ei hun.
- Mesurwch effaith o ran defnyddwyr a defnydd, ac ychwanegwch ddatganiad iaith blaen am yr hyn y mae rhifau'n ei fethu.
- Trinwch brydlondeb cyfathrebu fel rhan o'r ymateb, gyda thargedau yn ôl cynulleidfa a rhythm diweddaru cyson.
- Mae adolygiad wedi'i orffen pan fo'i gamau wedi'u gorffen, felly olrheiniwch ddilyniant ac achosion sy'n ailadrodd.
- Peidiwch byth â gosod targed ar y cyfrif, peidiwch byth â graddio pobl, a chadwch ddatgan yn ddiogel.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Lunney, L., and Lueder, S., "Postmortem Culture: Learning from Failure," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/postmortem-culture/
3. Beyer, B., et al. (eds.), "Managing Incidents," in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/managing-incidents/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
7. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
8. Wikipedia, [Incident management (ITSM)](https://en.wikipedia.org/wiki/Incident_management_(ITSM)).
9. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
10. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Incident commander](https://en.wikipedia.org/wiki/Incident_commander).
13. Wikipedia, [Postmortem documentation](https://en.wikipedia.org/wiki/Postmortem_documentation).
14. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
