# Metrigau bodlonrwydd cwsmeriaid

**Mae sgoriau bodlonrwydd yn dweud wrthych sut roedd pobl yn teimlo am eiliad o wasanaeth, felly gofynnwch gwestiynau byr, gonest ar yr adeg iawn, darllenwch y sylwadau cyn y rhifau, a pheidiwch byth â gadael i sgôr ddod yn gwota.**

## Crynodeb a chymhelliant

Mae mesurau gweithredol yn dweud beth a wnaeth y gwasanaeth. Mae mesurau bodlonrwydd yn dweud sut brofiad oedd ei dderbyn. Gall tocyn gau o fewn ei amser targed a gadael y defnyddiwr yn sownd o hyd, a gall gwasanaeth a adferwyd deimlo fel wythnos wael o hyd. Mae timau ystwyth yn gofyn yr un peth ar ddiwedd pob cynyddiad: a helpodd hyn y bobl yr oedd ar eu cyfer? Mae rheoli gwasanaethau TG (ITSM), fel y'i codeiddir gan ITIL, yn ei ofyn drwy'r gwerth y mae gwasanaeth yn ei gyd-greu gyda'i gwsmeriaid. Mesur bodlonrwydd yw lle mae'r ddau gwestiwn yn cwrdd.

Mae [bodlonrwydd cwsmeriaid](https://en.wikipedia.org/wiki/Customer_satisfaction) yn fesur o ba mor dda y mae cynnyrch a gwasanaethau yn bodloni neu'n rhagori ar yr hyn y mae cwsmeriaid yn ei ddisgwyl. Mewn gwaith gwasanaeth fe'i casglir fel arfer drwy arolwg, ac mae'n dod mewn tair ffurf gyffredin y mae'r pwnc hwn yn ymdrin â hwy:

- **Sgôr bodlonrwydd cwsmeriaid (CSAT):** sgôr o ryngweithio neu wasanaeth penodol, fel arfer ar raddfa pum pwynt, wedi'i hadrodd fel cyfran yr ymatebion bodlon.
- **Sgôr hyrwyddwr net (NPS):** yn seiliedig ar un cwestiwn am ba mor debygol yw ymatebwr o argymell cwmni, cynnyrch, neu wasanaeth. Hyrwyddwyr yw ymatebwyr sy'n ateb 9 neu 10, beirniaid yw'r rhai sy'n ateb 0 i 6, a'r sgôr yw canran yr hyrwyddwyr llai canran y beirniaid. Poblogeiddiwyd y [sgôr hyrwyddwr net](https://en.wikipedia.org/wiki/Net_promoter_score) gan Fred Reichheld mewn erthygl *Harvard Business Review* yn 2003.
- **Sgôr ymdrech cwsmeriaid (CES):** sgôr o faint o ymdrech y cymerodd i gael rhywbeth wedi'i wneud, neu pa mor hawdd oedd hi. Dadleuodd ei awduron fod lleihau ymdrech yn rhagfynegi teyrngarwch yn well na swyno pobl. Trinwch yr honiad hwnnw fel damcaniaeth i'w phrofi yn eich cyd-destun eich hun, nid fel ffaith wedi'i setlo.

Mewn lleoliad TG mewnol cydweithiwr yw'r "cwsmer", a'r arolwg yw cwestiwn byr ar ôl tocyn neu ryddhad. Mae'r egwyddorion yr un fath, ac mae'r dyletswyddau moesegol yn fwy, oherwydd bod y bobl y gofynnwch iddynt yn gweithio gyda chi yfory.

Mae arolygon yn ffurf ar [fethodoleg arolygon](https://en.wikipedia.org/wiki/Survey_methodology), maes â degawdau o ganfyddiadau am sut mae geiriad cwestiynau, amseru, a samplu yn newid atebion. Mae timau sy'n ei hepgor yn tueddu i gynhyrchu sgoriau sy'n symud am resymau digyswllt ag ansawdd gwasanaeth. Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol gyda grym ychwanegol yma: pan wobrwyir staff am sgôr uchel, maent yn dysgu gofyn amdani (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae'r pwnc hwn yn rhoi'r diffiniadau, y hylendid data, a'r arferion sy'n cadw mesurau bodlonrwydd yn onest. Mae'r pwnc nesaf yn eu hymestyn tuag at olwg lawnach ar brofiad (gweler pwnc 6.2, Cytundebau lefel profiad).

## Egwyddorion allweddol

- **Gofynnwch am eiliad benodol.** Mae arolwg sydd wedi'i glymu â thocyn caeedig neu ryddhad yn rhoi atebion mwy miniog na chwestiwn cyffredinol blynyddol.
- **Cadwch ef yn fyr.** Mae un sgôr ac un sylw agored yn well na deg cwestiwn y mae'r rhan fwyaf o bobl yn eu hepgor.
- **Darllenwch y sylwadau.** Mae'r sgôr yn dweud faint wrthych, ac mae'r geiriau'n dweud pam.
- **Adroddwch pwy a atebodd.** Sïon yw sgôr heb gyfradd ymateb a chymysgedd ymatebwyr.
- **Caewch y ddolen.** Dylai pobl sy'n adrodd profiad gwael glywed yn ôl.
- **Cymharwch â chi eich hun dros amser.** Mae meincnodau traws-gwmni yn cuddio gwahaniaethau mewn dull, cynulleidfa, a diwylliant.
- **Gwarchodwch ymatebwyr.** Casglwch yr hyn sydd ei angen arnoch yn unig, dywedwch sut y bydd yn cael ei ddefnyddio, a pheidiwch â graddio unigolion arno.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| CSAT | Cyfran yr ymatebion sy'n fodlon, ar gyfer math rhyngweithio diffiniedig | ymatebion a sgoriwyd 4 neu 5 ar raddfa pum pwynt / ymatebion dilys | canran | Arolwg ar ôl rhyngweithio wedi'i glymu â'r tocyn neu'r rhyddhad | Desg gwasanaeth; rheoli digwyddiadau; rheoli lefel gwasanaeth | Adborth adolygiad rhanddeiliaid | Wythnosol neu fisol |
| NPS | Hyrwyddwyr llai beirniaid ar gyfer gwasanaeth a chynulleidfa ddiffiniedig | canran sy'n ateb 9 neu 10 llai canran sy'n ateb 0 i 6 | pwyntiau, amrediad -100 i 100 | Arolwg perthynas, a anfonir ar gyfwng sefydlog | Gwelliant parhaus; rheoli lefel gwasanaeth | Adolygiad canlyniad cynnyrch | Chwarterol |
| CES | Sgôr gyfartalog neu gyfran ffafriol o ba mor hawdd oedd cael rhywbeth wedi'i wneud | ymatebion ffafriol / ymatebion dilys, neu sgôr gymedrig | canran neu gymedr | Arolwg ar ôl rhyngweithio wedi'i glymu â'r tocyn, cais, neu ryddhad | Rheoli ceisiadau gwasanaeth; desg gwasanaeth | Adborth defnyddioldeb wrth fireinio | Misol |
| Cyfradd ymateb arolwg | Cyfran y defnyddwyr a wahoddwyd a ymatebodd | ymatebion a dderbyniwyd / arolygon a ddanfonwyd | canran | Offeryn arolwg a system docynnau | Mesur ac adrodd | Cyfranogiad adborth mewn adolygiadau | Misol |
| Cwmpas ymatebwyr | Pa mor agos y mae cymysgedd yr ymatebwyr yn cyfateb i boblogaeth y defnyddwyr ar ddimensiynau y cytunwyd arnynt | cyfran yr ymatebwyr ym mhob grŵp wedi'i chymharu â chyfran y defnyddwyr yn y grŵp hwnnw, fesul grŵp | pwyntiau canran | Offeryn arolwg wedi'i uno â chyfeiriadur defnyddwyr neu ddata tocynnau | Mesur ac adrodd | Map rhanddeiliaid | Chwarterol |
| Cyfran themâu sylwadau | Cyfran y sylwadau testun rhydd a neilltuwyd i bob thema | sylwadau mewn thema / sylwadau a godwyd | canran | Sylwadau arolwg wedi'u codio | Gwelliant parhaus | Themâu ôl-sylliad | Misol |
| Amser dilyn i fyny beirniaid | Yr amser o sgôr isel i gyswllt dogfenedig â'r defnyddiwr | stamp amser y nodyn dilyn i fyny llai stamp amser y sgôr isel, canolrif a 85fed canradd | oriau neu ddiwrnodau | Offeryn arolwg a system docynnau | Rheoli digwyddiadau; gwelliant parhaus | Dolen adborth yn y cytundeb gweithio | Misol |

Mae'r clociau a'r ffiniau yn bwysig. Mae CSAT a CES yn cyfrif dim ond ymatebion i'r rhyngweithio penodol, byth hwyliau cyffredinol. Mae amser dilyn i fyny beirniaid yn dechrau ar y foment y cofnodir y sgôr isel, nid pan fo rhywun yn ei ddarllen gyntaf. Eithrir cofnodion prawf ac ymatebion gan aelodau'r tîm sy'n cael ei fesur.

## Argymhellion

### Dyluniwch yr offeryn

**1. Dewiswch un cwestiwn fesul pwrpas.** Defnyddiwch CSAT ar ôl rhyngweithio i ddysgu sut aeth y rhyngweithio hwnnw, CES ar ôl rhywbeth yr oedd yn rhaid i'r defnyddiwr ei wneud i ddysgu ble mae ffrithiant yn eistedd, ac NPS ar gyfwng rheolaidd i ddysgu am y berthynas gyffredinol. Mae cymysgu'r tri mewn un ffurflen yn gwahodd blinder arolwg a chanlyniadau mwdlyd. Os mai dim ond un y gallwch ei fforddio, dewiswch yr un sy'n cyfateb i'r penderfyniad y mae angen i chi ei wneud.

**2. Ysgrifennwch eiriad niwtral, penodol.** Mae "Pa mor fodlon oeddech chi â sut y trinwyd eich cais?" yn well na "Pa mor wych oedd ein gwasanaeth?" Osgowch gwestiynau dwy-ganon sy'n gofyn am gyflymder a chyfeillgarwch ar unwaith. Cynigiwch raddfa gyson, labelwch ei phennau, a chadwch drefn yr atebion yr un fath bob tro. Mae [graddfa Likert](https://en.wikipedia.org/wiki/Likert_scale) yn ddyluniad cyffredin, a gall newidiadau bach mewn labeli symud canlyniadau, felly peidiwch â'u newid yn ddiofal.

**3. Ychwanegwch un cwestiwn agored.** Mae "Beth yw'r prif reswm dros eich sgôr?" yn costio ychydig i'r ymatebwr ac yn rhoi'r data cyfoethocaf i'r tîm. Mae sylwadau yn esbonio'r sgôr, yn datgelu problemau na all y rhifau eu datgelu, ac yn rhoi rhywbeth i asiantau ddysgu ohono. Darllenwch hwy mewn adolygiad rheolaidd, yn uchel os yn bosibl.

**4. Amserwch yr arolwg yn agos at y digwyddiad.** Anfonwch y cwestiwn yn fuan ar ôl i'r tocyn gael ei ddatrys neu i'r rhyddhad lanio, tra bo'r cof yn ffres. Peidiwch â'i anfon ar foment cau gan asiant sy'n gobeithio am farc uchel. Mae oedi byr, a osodir gan y system, yn dileu'r demtasiwn i hyfforddi'r ateb.

### Gwnewch y rhifau'n ddibynadwy

**5. Adroddwch gyfradd ymateb a chymysgedd ymatebwyr wrth ymyl pob sgôr.** Datganiad am yr ymatebwyr yw sgôr bodlonrwydd gan 4 y cant o ddefnyddwyr. Cymharwch pwy a atebodd â phwy a wahoddwyd, gan ddefnyddio priodoleddau yr ydych eisoes yn eu dal, megis rhanbarth, gwasanaeth, neu fath o gais. Mae bylchau mawr yn golygu bod angen label rhybudd ar y sgôr. Mae cynrychioldeb yn thema graidd ymchwil [rhagfarn ymateb](https://en.wikipedia.org/wiki/Response_bias), a'r pwynt ar gyfer tîm gwasanaeth yw edrych yn syml.

**6. Dangoswch ansicrwydd.** Mae samplau bach yn newid yn wyllt. Mae [ymyl gwall](https://en.wikipedia.org/wiki/Margin_of_error) neu [gyfwng hyder](https://en.wikipedia.org/wiki/Confidence_interval) a ddangosir wrth ymyl CSAT misol yn atal y tîm rhag ymateb i sŵn (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Os oes gan dîm lai nag ychydig ddwsinau o ymatebion mewn cyfnod, adroddwch gyfrifon a darllenwch sylwadau, nid canrannau.

**7. Osgowch ddewis pwy y gofynnir iddynt.** Os yw'r person a gaeodd y tocyn yn penderfynu a anfonir yr arolwg, mae sgoriau'n codi am y rheswm anghywir. Anfonwch yr arolwg yn awtomatig i bob rhyngweithio cymwys, neu i sampl ar hap os yw'r cyfaint yn uchel. Dogfennwch y rheol, gan gynnwys unrhyw eithriadau, yn y gofrestr metrigau.

**8. Gwahanwch fodlonrwydd person oddi wrth berfformiad person.** Mae bodlonrwydd yn dibynnu ar ffactorau nad yw asiant unigol yn eu rheoli: ansawdd y cynnyrch, y ciw, y polisi, hwyliau'r defnyddiwr. Peidiwch â graddio asiantau yn ôl CSAT. Defnyddiwch ef ar lefel tîm a gwasanaeth, a defnyddiwch sylwadau ar gyfer sgyrsiau hyfforddi y mae'r asiant yn eu croesawu.

### Gweithredwch ar yr hyn a glywch

**9. Caewch y ddolen gyda defnyddwyr anhapus.** Cysylltwch â phobl sy'n adrodd profiad gwael, gofynnwch beth fyddai wedi helpu, a chofnodwch yr hyn a ddysgwch. Gosodwch darged ar gyfer yr amser dilyn i fyny a gwnewch y dilyniant yn sgwrs, nid cais i newid y sgôr. Mae newid sgôr ar gais yn ystumiad, felly dylai'r dilyniant anelu at drwsio'r broblem a dysgu.

**10. Codiwch sylwadau yn themâu a'u holrhain.** Cytunwch ar restr fer o themâu, megis "bu'n rhaid i mi ailadrodd fy hun," "ymateb araf," "ni pharhaodd yr atgyweiriad," "cyfathrebu aneglur," a "cyfeillgar a defnyddiol." Codiwch sampl bob mis, â llaw neu gydag offeryn, a gofynnwch i berson wirio'r canlyniadau. Mae tueddiadau mewn themâu yn aml yn dangos problemau cyn i sgôr symud.

**11. Cysylltwch fodlonrwydd â data gweithredol.** Cymharwch CSAT ag amser datrys, cyfradd ailagor, a nifer y cysylltiadau fesul mater. Mae'r parau'n dweud wrthych a yw cyflymder yn prynu bodlonrwydd neu a yw'r tîm yn gyflym ac yn anghywir. Defnyddiwch hwy i ddod o hyd i straeon i ymchwilio iddynt, nid i brofi rheol.

**12. Trinwch feincnodau'n ofalus.** Mae ffigurau cyhoeddedig neu a gyflenwir gan werthwyr ar gyfer sgoriau bodlonrwydd yn dibynnu ar ddull, cynulleidfa, a rhanbarth, a'ch hanes eich hun yw cymharydd gwell. Os defnyddiwch gymhariaeth allanol, nodwch ei ffynhonnell, dull, a dyddiad, a pheidiwch â gosod targed ohoni heb brofi a yw eich dull yn cyfateb. Peidiwch byth â dyfeisio meincnod.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| CSAT | Asiantau yn hyfforddi defnyddwyr i roi marciau uchaf; arolygon yn cael eu hanfon ar ôl tocynnau hawdd yn unig; tocynnau anodd yn cael eu cau heb arolwg | Arolwg awtomatig i bob tocyn cymwys; cyfradd ymateb a chymysgedd ymatebwyr; cyfradd ailagor |
| NPS | Arolygu defnyddwyr cyfeillgar yn unig; amseru'r arolwg ar ôl digwyddiad da; gofyn wyneb yn wyneb; ail-labelu pwyntiau'r raddfa | Cynulleidfa ac amserlen sefydlog yn y gofrestr; cwmpas ymatebwyr; darllen sylwadau beirniaid |
| CES | Dileu camau o'r ffurflen mewn ffordd sy'n symud y gwaith i rywle arall; gofyn dim ond ar ôl ceisiadau llyfn | Cyfrif cysylltiadau fesul mater; amser cyflawni cais ac ailwaith (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth) |
| Cyfradd ymateb arolwg | Gwahodd pobl sy'n debygol o ateb yn unig; anfon yr arolwg i restr wahanol bob tro | Rheol gwahodd wedi'i hysgrifennu i lawr; cymharu gwahoddedigion â phoblogaeth y defnyddwyr |
| Cwmpas ymatebwyr | Gollwng grwpiau anodd eu cyrraedd o'r gymhariaeth; ailbwyso heb ddweud | Cyhoeddi'r dimensiynau a'r dull; dangos y canlyniad heb ei bwyso wrth ymyl yr un wedi'i bwyso |
| Cyfran themâu sylwadau | Codio sylwadau i osgoi themâu drwg; uno themâu fel nad yw'r un yn edrych yn fawr | Ail berson yn codi sampl; cadw'r rhestr themâu yn sefydlog a logio newidiadau |
| Amser dilyn i fyny beirniaid | Logio nodyn heb gysylltu â'r defnyddiwr; cysylltu â'r defnyddiwr i ofyn am sgôr well | Gwirio nodiadau dilyn i fyny am gynnwys; gofyn i'r defnyddiwr yn yr arolwg nesaf a gysylltodd unrhyw un â hwy |

Mae darlleniad iach yn gyfradd ymateb sefydlog, cymysgedd ymatebwyr agos at gymysgedd y defnyddwyr, sgôr sy'n symud gyda'r profiad y mae defnyddwyr yn ei ddisgrifio mewn sylwadau, a defnyddwyr anhapus sy'n dweud bod rhywun wedi cysylltu â hwy.

## Cyfaddawdau: manteision ac anfanteision

| Mesur | Cryfder | Gwendid |
| --- | --- | --- |
| CSAT | Syml, cyflym, wedi'i glymu ag eiliad benodol | Hawdd ei chwyddo; dweud ychydig am y berthynas gyfan |
| NPS | Un cwestiwn, hawdd ei olrhain dros amser | Cuddio'r rhesymau; mae un rhif yn cywasgu dosbarthiad eang; mae gwahaniaethau diwylliannol yn effeithio ar y raddfa |
| CES | Pwyntio'n uniongyrchol at ffrithiant y gall y tîm ei ddileu | Llai o ddealltwriaeth eang; mae'r dystiolaeth yn cael ei dadlau |
| Arolwg hir blynyddol | Cyfoethog, yn cwmpasu llawer o wasanaethau | Araf, ymateb isel, anodd gweithredu arno |
| Sylwadau yn unig | Pendant, cofiadwy | Anodd eu cymharu dros amser; yn agored i'r lleisiau uchaf |
| Signalau ymddygiadol | Dim baich arolwg; gwrthrychol | Ddim yn cipio teimladau; gall gamddarllen achos |

Yr ateb pragmatig yw cyfuno arolwg rhyngweithio byr, arolwg perthynas achlysurol, a'r sylwadau, a darllen y tri gyda'r data gweithredol. Mae mesurau bodlonrwydd yn gweithio fel sgwrs rhwng defnyddwyr a'r tîm. Maent yn methu fel bwrdd sgorio.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth ydym ni'n ei wneud â sgôr isel a sgôr uchel?**
Gofynnwch i'r tîm ddisgrifio, yn ymarferol, y tro diwethaf y arweiniodd sgôr isel at newid. Yna gofynnwch yr un peth am sgôr uchel. Os yw'r atebion yn amwys, mae'r arolwg yn ddefod. Dylai'r hwylusydd chwilio am gyswllt pendant o'r data i weithred, a chytuno ar un lle y cofnodir y cyswllt hwnnw.

**2. Pwy sy'n ateb ein harolygon, a phwy sydd ddim?**
Gofynnwch i'r tîm enwi'r grwpiau o ddefnyddwyr y maent yn clywed lleiaf ganddynt. Cymharwch â'r rhestr wahodd a'r cyfeiriadur defnyddwyr. Mae'r sgwrs yn aml yn datgelu bod gan y defnyddwyr tawelaf y problemau anoddaf. Cytunwch ar un ffordd i gyrraedd grŵp tawel y chwarter hwn, megis galwad fer neu sianel wahanol.

**3. Pryd yn y rhyngweithio ydym ni'n gofyn, a phwy sy'n penderfynu?**
Cerddwch y llwybr o ddatrys i arolwg. Dewch o hyd i bob pwynt lle gall person ddylanwadu ar a anfonir yr arolwg, pryd, neu sut. Cytunwch pa rai o'r pwyntiau hyn y dylid eu hawtomeiddio. Gall yr hwylusydd ofyn beth allai asiant ei wneud i warchod sgôr, fel cwestiwn dylunio ac nid cyhuddiad.

**4. Beth mae beirniad yn ei glywed gennym ni ar ôl iddynt ymateb?**
Edrychwch ar ychydig o sgoriau isel diweddar a darllenwch y nodiadau dilyn i fyny. Gofynnwch a fyddai'r defnyddiwr yn teimlo bod rhywun wedi gwrando arnynt. Trafodwch sut i wneud y dilyniant yn ddefnyddiol heb ofyn am sgôr newidiedig. Penderfynwch pwy sy'n berchen ar y dilyniant a beth yw'r amser targed.

**5. Pa sylwadau o'r mis diwethaf a newidiodd yr hyn a wnaethom?**
Argraffwch neu ddangoswch ddeg sylw ar hap. Gofynnwch i'r tîm pa rai y gweithredwyd arnynt, pa rai na, a pham. Mae hyn yn cadw'r ffocws ar y geiriau ac yn adeiladu arfer o'u darllen. Cytunwch i godio themâu ar gyfer y mis nesaf ac adolygu'r duedd.

**6. Pa ffigur cyhoeddedig sy'n ein temtio i gymharu ein hunain ag ef, ac a yw'r gymhariaeth yn deg?**
Enwch y ffigur, ei ffynhonnell, ei ddull, a'i gynulleidfa, yna cymharwch bob un â'ch un chi. Gofynnwch a fyddai'n newid penderfyniad. Os na, rhowch ef o'r neilltu a defnyddiwch eich tuedd eich hun. Dylai'r hwylusydd gofnodi'r ateb yn y gofrestr metrigau.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cynnyrch yn defnyddio adborth bodlonrwydd i benderfynu beth i'w drwsio neu ei adeiladu nesaf, ac mae arolygon byr ar ôl rhyddhad yn rhoi darlleniad cyflymach na'r adolygiad chwarterol nesaf. Dylai timau cyflawni gysylltu sylwadau ag eitemau ôl-groniad, dangos i ddefnyddwyr beth a newidiodd, ac osgoi trin sgôr fel nod cyflawni. Mae cynnydd mewn sylwadau ymdrech neu ddryswch ar ôl rhyddhad yn signal i edrych ar y rhyddhad, nid ar yr arolwg.

### Timau gwasanaeth a gweithrediadau

Mae desgiau gwasanaeth yn casglu'r rhan fwyaf o'r data rhyngweithio ac yn teimlo pwysau'r sgôr fwyaf. Dylai timau gweithrediadau anfon arolygon yn awtomatig, cyhoeddi'r rheol samplu, a defnyddio sylwadau ar gyfer dysgu tîm. Dylent gadw CSAT wrth ymyl cyfradd ailagor a chysylltiadau dro ar ôl tro, fel nad yw cau cyflym yn edrych fel canlyniadau da (gweler pwnc 3.1, Metrigau desg gwasanaeth).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod yr hinsawdd ar gyfer chwarae'r system. Mae cais am "95 y cant o fodlonrwydd erbyn diwedd y flwyddyn" yn dysgu staff i warchod y rhif. Dylai arweinwyr ofyn am y gyfradd ymateb, cymysgedd ymatebwyr, a'r prif themâu sylwadau, ariannu'r atgyweiriadau y mae sylwadau'n eu datgelu, a chadw bodlonrwydd allan o dâl a graddio unigol. Dylai llywodraethu ddisgwyl dull a nodwyd ar gyfer unrhyw ffigur y mae'n ei adrodd yn allanol.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn rhoi eu hamser a'u didwylledd. Maent yn haeddu arolwg byr, rheswm clir dros ofyn, addewid am sut y defnyddir eu hatebion, ac ateb pan fyddant yn adrodd problem. Lle nad yw'r arolwg yn ddienw, dywedwch hynny. Bydd defnyddwyr sy'n gweld dim yn newid yn rhoi'r gorau i ateb, a bydd y tawelwch yn edrych fel bodlonrwydd.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn rhedeg desg gwasanaeth a thîm bach sy'n adeiladu cymwysiadau clinigol. Mae'r rhifau isod yn enghreifftiol.

CSAT misol y ddesg gwasanaeth yw 92 y cant, wedi'i gyfrifo o 140 o ymatebion allan o tua 3,100 o docynnau caeedig, cyfradd ymateb o 4.5 y cant. Mae'r arweinyddiaeth yn falch. Mae rheolwr y gwasanaeth yn darllen y sylwadau ac yn sylwi bod llawer o ymatebion cadarnhaol yn dod gan staff mewn gweinyddiaeth, tra bo nyrsys ar sifftiau nos prin yn ymddangos. Mae hi'n cymharu cymysgedd yr ymatebwyr â'r cyfeiriadur defnyddwyr ac yn canfod bod staff sifft nos tua 18 y cant o ddefnyddwyr a 3 y cant o ymatebwyr.

Mae'r tîm yn gwneud tri newid. Mae'r arolwg yn dod yn ffurflen dau gwestiwn gyda sgôr a sylw, a anfonir yn awtomatig gan y system docynnau bedair awr ar ôl datrys, i bob tocyn. Cynigir fersiwn neges destun i staff ar sifftiau. Mae'r adroddiad misol bellach yn dangos CSAT gyda'r gyfradd ymateb, y cyfwng hyder, cymysgedd yr ymatebwyr yn erbyn cymysgedd y defnyddwyr, a'r pum prif thema sylwadau.

O fewn dau fis mae'r gyfradd ymateb yn codi i tua 11 y cant ac mae'r CSAT yn gostwng i 84 y cant. Mae'r themâu sylwadau yn dangos "bu'n rhaid ffonio'n ôl" a "ni pharhaodd yr atgyweiriad" fel y ddwy gŵyn uchaf, wedi'u crynhoi yn y systemau clinigol. Mae pennaeth TG yn dweud wrth y bwrdd fod yr hen sgôr yn adlewyrchu pwy a atebodd, a bod y sgôr newydd yn ganllaw gwell. Mae'r tîm cynnyrch yn ychwanegu eitem ôl-groniad i drwsio'r nam sy'n ailadrodd y tu ôl i'r galwadau'n ôl, ac mae'r ddesg gwasanaeth yn dechrau cysylltu â phob defnyddiwr sy'n rhoi sgôr 1 neu 2 o fewn un diwrnod gwaith. Yn y chwarter nesaf, mae'r gyfradd cysylltiadau dro ar ôl tro ar gyfer y systemau clinigol yn disgyn, ac mae cyfran y sylwadau "bu'n rhaid ffonio'n ôl" yn disgyn gyda hi. Mae'r tîm yn cofnodi'r penderfyniad yn ei log ac nid yw'n gosod targed CSAT.

## Y golwg fesul sector

**Busnes newydd.** Mae cyswllt agos â defnyddwyr yn gwneud sgyrsiau byr yn well nag arolygon ar y dechrau. Ychwanegwch arolwg un cwestiwn unwaith y bydd cyfaint yn tyfu, a daliwch ati i ddarllen pob sylw. Gwrthsefwch yr ysfa i gyhoeddi sgôr cyn bod gennych ddigon o ymatebion i olygu rhywbeth.

**Busnes bach.** Gall un cwsmer anhapus fod yn bwysicach na sgôr. Defnyddiwch yr arolwg fel anogwr i siarad â phobl, a chadwch gofnodion o'r dilyniant. Mae adroddiadau bodlonrwydd a gyflenwir gan werthwyr yn haeddu amheuaeth am ddull.

**Menter fawr.** Mae graddfa yn dod â segmentau a'r demtasiwn i grynhoi. Cadwch sgoriau fesul gwasanaeth a chynulleidfa, cyhoeddwch y dull, ac osgowch gyfartaleddu gwasanaethau annhebyg yn un rhif. Defnyddiwch lwyfan arolwg sefydlog gyda gyrru awtomatig, a thrinwch unrhyw raddio traws-dîm yn ofalus.

**Llywodraeth a'r sector cyhoeddus.** Yn aml mae gan gyrff cyhoeddus rwymedigaethau ffurfiol i gasglu adborth defnyddwyr ac i gyhoeddi canlyniadau, ynghyd â dyletswyddau ar hygyrchedd a phreifatrwydd. Cynigiwch sianeli arolwg hygyrch, gwarchodwch hunaniaeth ymatebwyr, a chyhoeddwch ddulliau gyda chanlyniadau. Lle mae ffigur bodlonrwydd yn ymddangos mewn contract neu adroddiad statudol, diffiniwch ef yn union a dangoswch y rheilen warchod wrth ei ymyl (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y costau uniongyrchol yw offer arolwg, y mae llawer o systemau tocynnau eisoes yn ei gynnwys, awr neu ddwy bob mis i adolygu sylwadau a chodio themâu, a'r amser i ddilyn i fyny gyda defnyddwyr anhapus. Y gost fwy yw'r ddisgyblaeth i weithredu ar yr hyn a glywch. Nid oes angen llwyfan newydd i ddechrau.

Mae'r elw'n ymddangos fel atgyweiriadau y mae defnyddwyr yn eu gwerthfawrogi a gwastraff a osgowyd. Mae sylwadau'n dweud wrthych ble mae ffrithiant yn eistedd, fel y gallwch ddileu achosion cysylltiadau dro ar ôl tro ac atgyweiriadau a fethodd yn lle ychwanegu staff i'w trin. Mae gwell golwg ar bwy nad yw'n ateb yn eich gwarchod rhag penderfyniadau yn seiliedig ar ychydig hunan-ddewisedig. Disgrifiwch y budd o ran y problemau a ganfuwyd ac a ddilëwyd, a mesurwch eich llinellau sylfaen eich hun cyn ac ar ôl: cyfradd cysylltiadau dro ar ôl tro, cyfradd ailagor, ac amser i'r ymateb defnyddiol cyntaf. Peidiwch â defnyddio canran wedi'i dyfeisio i gyfiawnhau'r rhaglen. Os oes angen ffigurau arnoch, adeiladwch hwy o'ch data eich hun.

## Gwrthbatrymau a maglau

- **Trin y sgôr fel targed.** Caiff ei bodloni drwy ddewis pwy y gofynnir iddynt neu hyfforddi'r ateb. Defnyddiwch ef fel cwestiwn a'i barau â sylwadau a mesurau gweithredol.
- **Arolygu ar ôl tocynnau hawdd yn unig.** Anfonwch i bob rhyngweithio cymwys, yn awtomatig.
- **Graddio asiantau yn ôl CSAT.** Mae'n cosbi pobl sy'n cymryd achosion caled. Defnyddiwch olygon tîm a gwasanaeth a dysgwch o sylwadau.
- **Gofyn am sgôr well.** Dylai dilyn i fyny ar sgôr isel anelu at drwsio'r broblem. Peidiwch â gofyn am newid.
- **Adrodd sgôr heb gyfradd ymateb.** Dangoswch bob amser pwy a atebodd a faint.
- **Newid y cwestiwn a chadw'r duedd.** Logiwch newidiadau a marciwch y toriad yn y siart.
- **Mewnforio meincnod heb ei ddull.** Cymharwch â'ch hanes eich hun yn gyntaf.
- **Casglu sylwadau a pheidio byth â'u darllen.** Rhowch adolygiad yn y calendr a neilltuwch berchennog.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Offeryn a samplu | Arolwg ad hoc achlysurol | Mae arolwg yn bodoli ar gyfer rhai gwasanaethau, wedi'i anfon â llaw | Arolwg byr wedi'i anfon yn awtomatig i bob rhyngweithio cymwys | Rheol samplu, newidiadau geiriad, ac eithriadau wedi'u logio a'u hadolygu | Offerynnau wedi'u halinio ar draws timau a chyflenwyr, ac wedi'u diwygio gyda defnyddwyr |
| Ansawdd data | Sgôr yn unig | Cyfradd ymateb wedi'i hadrodd | Cyfradd ymateb, cymysgedd ymatebwyr, ac ansicrwydd wedi'u hadrodd | Cwmpas ymatebwyr wedi'i reoli; codio wedi'i wirio gan ail berson | Golwg a rennir o brofiad ar draws gwasanaethau, gyda defnyddwyr yn rhan o ddehongli |
| Gweithredu a dilyn i fyny | Sgoriau wedi'u hadrodd, dim yn newid | Atgyweiriadau achlysurol o sylwadau | Dilyn i fyny beirniaid gydag amser targed; themâu wedi'u holrhain | Themâu yn gyrru gwaith gwella wedi'i ariannu ac wedi'u cysylltu â data gweithredol | Mae'r ddolen gaeedig yn ymestyn ar draws timau a chyflenwyr; defnyddwyr yn gweld beth a newidiodd |

## Rhestr wirio

- [ ] Mae gan bob arolwg un pwrpas a nodwyd ac un penderfyniad y mae'n ei hysbysu.
- [ ] Mae cwestiynau'n fyr, yn niwtral, ac yn cynnwys un sylw agored.
- [ ] Anfonir yr arolwg yn awtomatig i bob rhyngweithio cymwys neu i sampl ar hap ddogfenedig.
- [ ] Dangosir cyfradd ymateb a chymysgedd ymatebwyr wrth ymyl pob sgôr.
- [ ] Dangosir ansicrwydd, ac adroddir samplau bach fel cyfrifon.
- [ ] Ni raddir unrhyw asiant unigol yn ôl bodlonrwydd.
- [ ] Mae person a enwir yn dilyn i fyny gyda sgoriau isel o fewn amser y cytunwyd arno.
- [ ] Codir sylwadau yn rhestr sefydlog o themâu a'u hadolygu'n fisol.
- [ ] Logir newidiadau geiriad a samplu a'u marcio ar siartiau.
- [ ] Dywedir wrth ymatebwyr sut y defnyddir eu hatebion, a gwarchodir data personol.

## Anogwyr AI

**Adolygwch offeryn arolwg.**

```text
Rwy'n rhedeg [gwasanaeth neu dîm] ar gyfer [math o sefydliad]. Rydym yn arolygu
[cynulleidfa] ar ôl [digwyddiad] gan ddefnyddio'r geiriad hwn: [gludwch
gwestiynau a graddfa]. Adolygwch ef am iaith arweiniol, cwestiynau dwy-ganon,
graddfeydd aneglur, a baich ar yr ymatebwr. Awgrymwch fersiwn fyrrach sy'n
cadw un sgôr ac un sylw agored. Peidiwch â dyfeisio gwerthoedd meincnod na
honni canlyniadau ymchwil na allwch eu dyfynnu. Rhestrwch eich rhagdybiaethau
a'r hyn na allech ei farnu o'r testun.
```

**Codiwch sylwadau arolwg yn themâu.**

```text
Dyma [nifer] o sylwadau arolwg dienw ar gyfer [gwasanaeth], o [cyfnod]:
[gludwch sylwadau gyda data personol wedi'i dynnu]. Cynigiwch restr fer o
themâu (dim mwy nag wyth) a neilltuwch bob sylw i un thema, gyda nodyn hyder
lle mae'n amwys. Adroddwch y cyfrif fesul thema a thri dyfyniad cynrychioliadol
fesul thema. Peidiwch ag adnabod unigolion. Dywedwch wrthyf beth ddylai person
ei wirio cyn dibynnu ar y codio hwn, a rhestrwch eich rhagdybiaethau.
```

**Gwiriwch gynrychioldeb.**

```text
Cawsom [ymatebion] o ymatebion o [gwahoddiadau] o wahoddiadau. Ymatebwyr yn
ôl [dimensiwn, er enghraifft rhanbarth neu sifft]: [cyfrifon]. Ein poblogaeth
defnyddwyr yn ôl yr un dimensiwn: [cyfrifon]. Cymharwch y ddau, disgrifiwch ble
mae cymysgedd yr ymatebwyr yn wahanol, a dywedwch pa rybuddion y dylem eu
hatodi at ein sgôr bodlonrwydd. Awgrymwch ddwy ffordd ymarferol o gyrraedd
grwpiau sydd heb gynrychiolaeth ddigonol. Peidiwch â dod i gasgliadau am
achosion y tu hwnt i'r data, a rhestrwch eich rhagdybiaethau.
```

**Cynlluniwch ddilyniant dolen gaeedig.**

```text
Drafftiwch broses fer ar gyfer dilyn i fyny gyda defnyddwyr sy'n rhoi sgôr o
[trothwy] neu is yn [gwasanaeth]. Cynhwyswch pwy sy'n cysylltu â hwy, o fewn
pa amser, beth i'w ddweud, beth i'w gofnodi, a sut i osgoi gofyn am sgôr
newidiedig. Cyd-destun: [maint tîm, offer, oriau]. Rhestrwch eich rhagdybiaethau
ac unrhyw gamau sy'n dibynnu ar offer nas disgrifiais.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig bodlonrwydd cyn i chi ei gyhoeddi.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig arolwg wedi'i ddiwygio yn cadw ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Mae sgoriau bodlonrwydd yn disgrifio sut roedd eiliad o wasanaeth yn teimlo, felly clymwch arolygon wrth ddigwyddiadau penodol a'u cadw'n fyr.
- Adroddwch bob amser gyfradd ymateb, cymysgedd ymatebwyr, ac ansicrwydd gyda'r sgôr.
- Mae sylwadau yn esbonio'r rhifau, felly darllenwch hwy bob mis a'u codio yn themâu.
- Anfonwch arolygon yn awtomatig a pheidiwch byth â gofyn i ddefnyddwyr newid sgôr.
- Defnyddiwch fodlonrwydd ar lefel tîm a gwasanaeth, byth i raddio pobl, a thrinwch feincnodau allanol yn ofalus.
- Caewch y ddolen: dylai pobl sy'n adrodd profiad gwael glywed yn ôl a gweld newid.

## Cyfeiriadau a darllen pellach

1. Reichheld, F. F., "The One Number You Need to Grow," *Harvard Business Review*, 81(12), 2003.
2. Dixon, M., Freeman, K., and Toman, N., "Stop Trying to Delight Your Customers," *Harvard Business Review*, 88(7/8), 2010.
3. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
4. Likert, R., "A technique for the measurement of attitudes," *Archives of Psychology*, 22(140), 1932.
5. Groves, R. M., Fowler, F. J., Couper, M. P., Lepkowski, J. M., Singer, E., and Tourangeau, R., *Survey Methodology*, 2nd ed., Wiley, 2009.
6. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
7. Wikipedia, [Net promoter score](https://en.wikipedia.org/wiki/Net_promoter_score).
8. Wikipedia, [Survey methodology](https://en.wikipedia.org/wiki/Survey_methodology).
9. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
10. Wikipedia, [Likert scale](https://en.wikipedia.org/wiki/Likert_scale).
11. Wikipedia, [Response bias](https://en.wikipedia.org/wiki/Response_bias).
12. Wikipedia, [Margin of error](https://en.wikipedia.org/wiki/Margin_of_error).
13. Wikipedia, [Confidence interval](https://en.wikipedia.org/wiki/Confidence_interval).
