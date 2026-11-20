# Cyflwyniad i Ran 8: Metrigau Diogelwch, Risg, Cydymffurfio a Chyflenwyr

**Mae ymddiriedaeth mewn gwasanaeth yn gorwedd ar sut mae'n trin bygythiadau, risgiau, rhwymedigaethau, a'r trydydd partïon y tu ôl iddo, a chaiff y dystiolaeth orau o'r ymddiriedaeth honno ei chynhyrchu gan y gwaith ei hun a'i rhannu'n agored.**

Gall gwasanaeth fod yn gyflym, yn rhad, ac yn boblogaidd a dal i fethu'r bobl sy'n dibynnu arno, oherwydd gwendid heb ei glytio, risg heb ei harchwilio, rhwymedigaeth na wnaeth neb ei holrhain, neu gyflenwr a roddodd y gorau i gyflawni. Mae'r mesurau yn y rhan hon yn disgrifio'r amodau sy'n amddiffyn rhag y methiannau hynny: pa mor hir y mae gwendidau'n aros ar agor, a yw rheolaethau'n gweithio, a oes tystiolaeth pan ofynnir amdani, ac a ydych yn gwybod beth rydych yn dibynnu arno ac a allech ei adael.

Mae arfer ystwyth ac arfer ITIL ill dau yn trin y pryderon hyn o ddifrif, o wahanol onglau. Mae ITIL yn cyfrannu rheoli diogelwch gwybodaeth, rheoli risg, rheoli cyflenwyr, a llywodraethu, gyda'u pwyslais ar bolisi, perchnogaeth, a chofnodion. Mae ystwyth a DevOps yn cyfrannu'r syniad bod diogelwch a rheolaeth yn perthyn y tu mewn i gyflawni parhaus: newidiadau bach, adborth cyflym, gwiriadau awtomataidd, a chyfrifoldeb a rennir rhwng datblygu, diogelwch, gweithrediadau, a sicrwydd. Mae'r sefydliadau mwyaf effeithiol yn cyfuno'r ddau, fel bod rheolaethau wedi'u hadeiladu i mewn i'r biblinell, bod tystiolaeth yn sgil-gynnyrch cyflawni, a bod archwilwyr, rheoleiddwyr, a chyflenwyr yn bartneriaid mewn sgwrs barhaus yn lle gwrthwynebwyr achlysurol.

Mae'r mesurau hyn hefyd yn cario'r polion uchaf ar gyfer ystumio. Mae targedau ar gyfer canfyddiadau, risgiau coch, neu doriadau yn dysgu pobl i edrych i ffwrdd, i ail-raddio, neu i guddio. Gall mesurau sy'n cyffwrdd ag ymddygiad dynol, megis adroddiadau o weithgarwch amheus, lithro i wyliadwriaeth neu fai. Mae pob metrig yn y rhan hon felly yn dod gyda'r ffordd y caiff ei chwarae a rheilen warchod, ac mae'r rhan yn trin adrodd diogel a dysgu di-fai fel rheolaethau yn eu hawl eu hunain. Nid yw'r un o'r mesurau yn graddio unigolion. Maent yn disgrifio systemau, gwasanaethau, a pherthnasoedd (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Pynciau yn y rhan hon

- **8.1 Metrigau digwyddiadau diogelwch a gwendidau**: ffenestri amlygiad, cydymffurfio â chlytiau, cwmpas sganio, amser i gyfyngu, eithriadau, a'r diwylliant adrodd sy'n cadw signalau'n llifo.
- **8.2 Metrigau risg a rheolaethau**: cofrestr risg fer sy'n eiddo i rywun, profi rheolaethau, dangosyddion risg allweddol, a chymeradwyo newid ar sail risg.
- **8.3 Metrigau cydymffurfio ac archwilio**: cwmpas rhwymedigaethau, awtomeiddio tystiolaeth, cau canfyddiadau ac ailadroddiadau, a gweithio gydag archwilwyr.
- **8.4 Metrigau cyflenwyr a chontractau**: perfformiad cyflenwyr yn erbyn profiad, crynodiad, diwydrwydd dyladwy, adolygiadau ar y cyd, a chynlluniau gadael a brofwyd.
- **8.5 Adrodd rheoleiddiedig a llywodraethol**: rhwymedigaethau adrodd fel mewnbynnau dylunio, adroddiadau y gellir eu holrhain, diffiniadau wedi'u cysoni, a gwybodaeth gyhoeddus ddefnyddiadwy.

## Sut mae'r pynciau hyn yn cydberthyn

Mae mesurau diogelwch (gweler pwnc 8.1, Metrigau digwyddiadau diogelwch a gwendidau) yn disgrifio bygythiadau a gwendidau mewn termau pendant, ac maent yn cyflenwi rhai o'r dangosyddion risg allweddol cryfaf ar gyfer y gofrestr risg. Mae mesurau risg a rheolaethau (gweler pwnc 8.2, Metrigau risg a rheolaethau) yn rhoi'r dangosyddion hynny mewn cyd-destun, yn penderfynu pa reolaethau sy'n bwysig, ac yn profi eu bod yn gweithio. Mae mesurau cydymffurfio ac archwilio (gweler pwnc 8.3, Metrigau cydymffurfio ac archwilio) yn troi'r un rheolaethau a phrofion yn dystiolaeth i bobl o'r tu allan, ac maent yn dangos faint o'r dystiolaeth honno y mae'r gwaith yn ei chynhyrchu ei hun.

Mae mesurau cyflenwyr (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau) yn ymestyn pob un o'r rhain ar draws ffin y sefydliad. Mae gwendidau, risgiau, a safle cydymffurfio cyflenwr yn dod yn eiddo i chi, ac mae'r contract yn un o'r rheolaethau. Mae'r pwnc adrodd (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol) yn cau'r rhan drwy ofyn beth sy'n rhaid ei ddweud wrth bwy, a sut i'w ddweud yn gywir heb adael i'r olwg adrodd ystumio'r gwaith y mae'n ei ddisgrifio.

Mae sawl pâr rheilen warchod yn dilyn. Dylid darllen ffenestr amlygiad gyda chwmpas sganio, fel nad yw ffigur glân yn sgan cul yn unig. Dylid darllen cyfradd effeithiolrwydd rheolaeth gyda'r dilyniant i fethiannau, oherwydd gall cyfradd berffaith ddod o brofi gwan. Dylid darllen cyfrif o ganfyddiadau archwilio gyda'r gyfradd ailadrodd a gwirio cau. Dylid darllen lefel gwasanaeth cyflenwr gyda phrofiad defnyddwyr (gweler pwnc 6.2, Cytundebau lefel profiad). Dylid darllen ffigur statudol gyda'i fesurau cydymaith a chysoniad â'r diffiniad mewnol.

Mae'r rhan yn pwyso ar rai cynharach. Asedau, cyfluniad, a chofnodion cost (gweler pwnc 7.1, Metrigau rheoli asedau TG, a phwnc 7.4, Metrigau ansawdd cyfluniad a CMDB) sy'n gwneud sganio, mapio dibyniaethau, a dadansoddi cyflenwyr yn bosibl. Mae mesurau ôl-ddigwyddiad a newid Rhan 4 yn cyflenwi'r dolenni dysgu sy'n cadw'r gwaith hwn yn onest. Mae Rhan 9 yn troi at y bobl y tu ôl i'r cyfan: eu hiechyd, eu cydweithio, ac arferion gwella sy'n gwneud y system gyfan yn well dros amser.
