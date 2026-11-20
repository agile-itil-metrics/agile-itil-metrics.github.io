# Dylunio dangosfwrdd metrigau gwasanaeth

**Mae dangosfwrdd da yn ateb ychydig o gwestiynau y mae cynulleidfa a enwyd yn eu gofyn mewn gwirionedd, yn dangos pob rhif gyda'i duedd a'i gyd-destun, ac fe'i hadeiladir gan y bobl a fydd yn ei ddefnyddio.**

## Crynodeb a chymhelliant

Mae [dangosfwrdd](https://en.wikipedia.org/wiki/Dashboard_(business)) yn arddangosfa weledol o'r wybodaeth bwysicaf sydd ei hangen i gyflawni un neu fwy o amcanion, wedi'i threfnu fel y gellir ei monitro ar un olwg. Yn ymarferol, mae'r rhan fwyaf o ddangosfyrddau mewn sefydliadau gwasanaeth yn methu'r diffiniad hwnnw. Maent yn dechrau fel ffordd o ateb cwestiwn go iawn, yna'n tyfu drwy gronni nes eu bod yn dangos popeth y gall yr offeryn ei dynnu. Nid oes neb yn berchen arnynt, nid yw neb yn sicr beth mae'r rhifau yn ei olygu, ac anwybyddir y sgrin ar y wal.

Diben dangosfwrdd metrigau gwasanaeth yw helpu pobl i wneud penderfyniadau ac i gychwyn sgyrsiau da. Mae tîm yn ei ddefnyddio i sylwi bod ei waith yn aros yn hirach nag yr oedd, ac i ofyn pam. Mae perchennog gwasanaeth yn ei ddefnyddio i weld bod gwasanaeth yn agos at ymyl ei darged dibynadwyedd. Mae arweinydd yn ei ddefnyddio i weld a yw buddsoddiad mewn maes yn cynhyrchu'r canlyniad y gobeithiwyd amdano. Addurn yw arddangosfa nad yw'n gwneud yr un o'r rhain, ac mae addurn yn costio arian i'w adeiladu a sylw i'w anwybyddu.

Mae ITIL yn fframio hyn fel cwestiwn o wybodaeth a chyfathrebu: y wybodaeth gywir, i'r bobl gywir, mewn ffurf y gallant ei defnyddio, ar yr adeg gywir. Mae'r nodau ystwyth yn pwyntio at yr un egwyddorion dylunio. Mae cynnwys rhanddeiliaid yn barhaus yn golygu bod y gynulleidfa yn helpu i ddylunio'r olwg, ac yn parhau i helpu wrth i gwestiynau newid. Mae gwelliant parhaus yn golygu bod y dangosfwrdd ei hun yn cael ei adolygu a'i docio. Mae esblygiad parhaus yn golygu bod y set o fesurau yn newid pan fo'r gwasanaethau a'r nodau yn newid. Mae cyflymder cynaliadwy yn golygu nad yw'r dangosfwrdd yn cynhyrchu gorfodaeth ddyddiol i wirio rhifau sy'n symud yn fisol yn unig. Ac mae'r un ymddiriedaeth sy'n cefnogi unigolion cymhellol yn golygu bod timau'n gweld eu data eu hunain yn gyntaf ac yn berchen ar y stori y mae'n ei hadrodd.

Mae tair methiant dylunio yn gyffredin. Y cyntaf yw'r wal o rifau, lle mae cant o deils yn cystadlu ac nid oes yr un yn sefyll allan. Yr ail yw'r arddangosfa targed yn unig, lle dangosir ffigur yn erbyn nod mewn coch neu wyrdd heb duedd na chyd-destun, sy'n gwahodd rheoli yn ôl lliw yn lle yn ôl dealltwriaeth. Y trydydd yw'r arddangosfa heb berchennog, lle mae diffiniadau wedi drifftio, mae'r data yn hen, ac nid oes neb yn gwybod pwy i ofyn. Gwaith dylunio yw osgoi'r rhain.

Mae dylunio gweledol da yn helpu. [Gweledigaeth data](https://en.wikipedia.org/wiki/Data_visualization) yw'r arfer o ddangos data'n graffig fel y gellir gweld a deall patrymau. Mae [llinell-wreichion](https://en.wikipedia.org/wiki/Sparkline) yn siart llinell fach, maint gair, sy'n dangos tuedd heb echelinau na labeli, ac mae'n gweddu'n dda i ddangosfwrdd oherwydd ei bod yn rhoi'r hanes wrth ymyl y gwerth cyfredol. Mae [siart rhedeg](https://en.wikipedia.org/wiki/Run_chart) yn plotio mesur dros amser gyda llinell ganolrifol, ac mae [siart rheoli](https://en.wikipedia.org/wiki/Control_chart) yn ychwanegu terfynau sy'n gwahanu amrywiad arferol oddi wrth signalau sy'n werth ymchwilio iddynt (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). [Sbwriel siart](https://en.wikipedia.org/wiki/Chartjunk) yw'r addurn nad yw'n ychwanegu gwybodaeth, megis llinellau grid trwm, bariau tri dimensiwn, a medryddion addurniadol, ac mae'n werth ei dynnu.

Mae [metrig gwagedd](https://en.wikipedia.org/wiki/Vanity_metric) yn rhif sy'n edrych yn dda ac nad yw'n helpu neb i benderfynu dim, megis cyfrif o docynnau a drinnir neu fewngofnodi i borth a ddangosir heb ganlyniadau. Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol i'r arddangosfa gyfan: pan fo rhif ar y sgrin yn dod yn darged, mae pobl yn rheoli'r rhif (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae'r pwnc hwn yn tynnu ar y fframweithiau mesur (gweler pwnc 1.7, Fframweithiau mesur) ac ar y pynciau data a llywodraethu yn Rhan 1.

## Egwyddorion allweddol

- **Dechreuwch gyda chwestiynau, nid data.** Ysgrifennwch y penderfyniadau a'r cwestiynau sydd gan y gynulleidfa cyn dewis un siart.
- **Dangoswch ychydig o fesurau, wedi'u cydbwyso.** Mae set fach sy'n rhychwantu llif, ansawdd, dibynadwyedd, profiad, a chost yn gwrthsefyll chwarae'r system yn well nag un mesur ar ei ben ei hun.
- **Dangoswch dueddiad a chyd-destun bob amser.** Mae gwerth heb hanes, llinell sylfaen, a nodyn ar yr hyn a newidiodd yn anodd ei ddehongli.
- **Parchwch amrywiad.** Peidiwch ag ymateb i bob siglad. Defnyddiwch siartiau rhedeg neu siartiau rheoli i wahanu signal oddi wrth sŵn.
- **Rhowch ei golwg ei hun i bob cynulleidfa.** Mae timau, perchnogion gwasanaeth, ac arweinyddiaeth yn gofyn cwestiynau gwahanol ac angen manylder gwahanol.
- **Mae timau'n gweld eu data yn gyntaf.** Dylai'r bobl sy'n gwneud y gwaith weld eu rhifau cyn unrhyw un arall, a bod yn berchen ar y dehongli.
- **Diffiniwch bopeth ac enwch berchennog.** Mae gan bob mesur ddiffiniad ysgrifenedig, ffynhonnell data, a pherson i ofyn.
- **Cadwch ef yn ysgafn i'w gynnal.** Bydd dangosfwrdd sy'n cymryd wythnos o waith â llaw bob mis yn marw.

## Diffiniadau metrigau

Mae'r mesurau isod yn ymwneud â'r dangosfwrdd ei hun, nid â gwasanaeth. Maent yn helpu tîm rhaglen i weld a yw ei arddangosfeydd yn iach. Mae rhai yn ddisgrifiadol ac wedi'u marcio felly, oherwydd byddai eu trin fel targedau yn gwahodd yr ystumiadau y mae'r pwnc hwn yn rhybuddio yn eu herbyn.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cwmpas cwestiynau | Cyfran y cwestiynau cynulleidfa a restrir y gall y dangosfwrdd eu hateb gyda mesur diffiniedig | cwestiynau gyda mesur a diffiniad / cwestiynau a restrir gan y gynulleidfa | canran | Rhestr cwestiynau o sesiynau rhanddeiliaid; cardiau metrigau | Gwelliant parhaus; rheoli lefel gwasanaeth | Cynnwys rhanddeiliaid yn barhaus | Chwarterol |
| Cyflawnrwydd diffiniadau | Cyfran y mesurau a ddangosir gyda diffiniad ysgrifenedig cyfredol, ffynhonnell data, perchennog, a therfynau hysbys | mesurau gyda'r pedwar / mesurau a ddangosir | canran | Cardiau metrigau neu gatalog | Rheoli gwybodaeth a thechnoleg; rheoli gwybodaeth | Dealltwriaeth a rennir; gwaith gweladwy | Chwarterol |
| Ffresni data | Cyfran y mesurau a ddangosir a ddiweddarwyd o fewn eu hegwyl ddisgwyliedig | mesurau a ddiweddarwyd mewn pryd / mesurau a ddangosir | canran | Logiau piblinell; metadata dangosfwrdd | Monitro a rheoli digwyddiadau | Adborth cyflym | Wythnosol |
| Cysylltu â phenderfyniad | Cyfran y mesurau a adolygwyd lle arweiniodd adolygiad diweddar at benderfyniad, gweithred, neu ddewis bwriadol i wneud dim a gofnodwyd | mesurau gyda phenderfyniad cysylltiedig yn y cyfnod / mesurau a adolygwyd | canran | Nodiadau adolygu; cofrestr gwelliannau | Gwelliant parhaus | Myfyrio rheolaidd | Chwarterol |
| Maint arddangosfa | Nifer y mesurau ar bob golwg cynulleidfa | cyfrif fesul golwg | mesurau | Cyfluniad dangosfwrdd | Gwelliant parhaus | Symlrwydd | Chwarterol |
| Cyfradd ymddeol | Mesurau a dynnwyd neu a amnewidiwyd yn y cyfnod oherwydd eu bod wedi rhoi'r gorau i hysbysu penderfyniadau | mesurau a ymddeolwyd / mesurau a ddangoswyd ar y dechrau | canran | Log newid y dangosfwrdd | Gwelliant parhaus | Esblygiad parhaus | Blynyddol |
| Cyrhaeddiad cynulleidfa (disgrifiadol) | Cyfran y timau neu rolau bwriadedig a agorodd eu golwg yn y cyfnod | timau neu rolau gwahanol a welodd / timau neu rolau bwriadedig | canran | Logiau mynediad dangosfwrdd, wedi'u cyfanredu i dîm neu rôl | Rheoli gwybodaeth a thechnoleg | Cynnwys rhanddeiliaid yn barhaus | Chwarterol |

Diffiniwch gynulleidfa pob golwg yn ysgrifenedig. Cyfrwch fesurau fesul golwg, nid fesul offeryn, fel na chamgymerir catalog mawr gyda thudalen flaen fach am wasgaru. Casglir ac adroddir logiau mynediad ar lefel tîm neu rôl a byth i olrhain arferion darllen unigolion. Mae cyrhaeddiad cynulleidfa yn ddisgrifiadol a'i ddarllen ochr yn ochr â chysylltu â phenderfyniad, oherwydd ychydig o werth sydd i arddangosfa a welir yn drwm ac nad yw'n newid unrhyw benderfyniad. Mae cysylltu â phenderfyniad yn derbyn "edrychom, a dewiswyd gwneud dim" fel penderfyniad a gofnodwyd, fel nad yw'r mesur yn gwthio pobl i ddyfeisio gweithred.

## Argymhellion

### Dechreuwch o'r gynulleidfa

**1. Rhestrwch y cynulleidfaoedd a'u cwestiynau.** Cynulleidfaoedd nodweddiadol yw'r tîm cyflawni neu gymorth sy'n gwneud y gwaith, y perchennog gwasanaeth sy'n atebol am wasanaeth, a'r arweinwyr sy'n ariannu ac yn cyfarwyddo. Eisteddwch gyda phob un am awr ac ysgrifennwch beth maent yn ei ofyn, pa benderfyniadau y maent yn eu gwneud, a beth hoffent ei wybod. Mae cwestiwn da yn swnio fel "A yw ein gwaith yn aros yn hirach nag y gwnaeth?" neu "A ydym yn agos at ddefnyddio ein cyllideb gwallau i gyd?" Nid yw'n swnio fel "Dangoswch y dangosfwrdd digwyddiadau i mi."

**2. Mapiwch bob cwestiwn i un mesur a chydymaith.** Ar gyfer pob cwestiwn, dewiswch y mesur gorau unigol o rannau cynharach y llyfr hwn, a chydymaith sy'n gwarchod rhag yr ystumiad amlwg. Mae mesur cyflymder yn paru â mesur ansawdd. Mae mesur cyfaint yn paru â chanlyniad. Mae mesur profiad yn paru â mesur ymddygiad. Dyma'r rhesymeg paru sy'n rhedeg drwy'r llyfr cyfan (gweler pwnc 1.3, Canlyniadau yn hytrach nag allbwn: dewis beth i'w fesur).

**3. Cynhwyswch y gynulleidfa yn y dylunio.** Dangoswch fraslun cyn adeiladu dim. Gofynnwch beth sy'n ddryslyd, beth sydd ar goll, a beth y byddent yn ei wneud â phob rhif. Bydd eu hatebion yn torri'r set i lawr, a byddant yn ymddiried yn yr hyn y maent wedi helpu i'w wneud.

### Dewiswch set fach, gytbwys

**4. Cadwch bob golwg i lond llaw o fesurau.** Mae tua phump i naw mesur fesul golwg cynulleidfa yn amrediad gweithio, er bod y nifer cywir yn dibynnu ar y cwestiynau. Mae'r terfyn yn gorfodi dewisiadau. Rhowch fanylion y tu ôl i glic, mewn golwg gefnogol, a chadwch y dudalen flaen i'r hyn sydd ei angen i benderfynu a ddylid edrych ymhellach.

**5. Cydbwyswch y set ar draws dimensiynau.** Mae [cerdyn sgorio cytbwys](https://en.wikipedia.org/wiki/Balanced_scorecard) yn offeryn rheoli strategol sy'n edrych ar sefydliad o sawl persbectif yn lle canlyniadau ariannol yn unig. Mae'r syniad yn trosglwyddo'n dda: ar gyfer gwasanaeth, cydbwyswch lif a chyflymder, ansawdd a sefydlogrwydd, dibynadwyedd, profiad, a chost. Mae set sy'n cynnwys cyflymder yn unig yn annog llwybrau byr, ac mae set sy'n cynnwys ansawdd yn unig yn annog oedi. Mae'r syniad cysylltiedig o [ddangosydd perfformiad allweddol](https://en.wikipedia.org/wiki/Key_performance_indicator) yn ddefnyddiol pan ddewisir y dangosydd am yr hyn y mae'n ei ddatgelu am amcan ac nid am ba mor hawdd yw ei ddangos.

**6. Gwahaniaethwch ddangosyddion oddi wrth ddiagnosteg.** Mae ychydig o ddangosyddion pennawd yn dweud wrthych a yw pethau'n iach. Mae mesurau diagnostig yn eich helpu i ddarganfod pam pan nad ydynt. Cadwch ddiagnosteg un cam i lawr, fel nad yw'r dudalen flaen yn dod yn wal.

### Dangoswch gyd-destun a thuedd

**7. Dangoswch hanes gyda phob gwerth.** Rhowch linell-wreichion neu siart rhedeg fach wrth ymyl pob gwerth cyfredol. Dangoswch ddigon o hanes o leiaf i weld patrymau tymhorol, megis uchafbwyntiau misol neu gylch chwarterol. Marciwch ddigwyddiadau sy'n esbonio newidiadau: rhyddhad, newid polisi, toriad, ad-drefnu tîm. Mae nodyn wrth ymyl y llinell yn arbed cant o gwestiynau.

**8. Defnyddiwch ddosbarthiadau ac amrediadau ar gyfer mesurau amser.** Mae cymedr yn cuddio'r gynffon hir y mae defnyddwyr yn ei theimlo. Dangoswch y canolrif a chanradd uchel megis yr 85fed neu'r 95fed, a dangoswch y gwasgariad. Nodwch faint y sampl pan fo'n fach, a dangoswch pa mor ansicr yw sampl bach (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth, a phwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif).

**9. Byddwch yn ofalus gyda thargedau a lliwiau.** Defnyddiwch linell targed pan fo gan darged sail go iawn, megis amcan lefel gwasanaeth, a'i ddangos fel cyfeiriad, nid dyfarniad. Osgowch deils coch, ambr, a gwyrdd sy'n fflipio ar un pwynt data. Os ydych yn defnyddio lliwiau statws, seiliwch hwy ar reol sy'n ystyried amrywiad arferol, ac esboniwch y rheol ar y dudalen.

### Gwnewch ef yn ddibynadwy ac yn gynaliadwy

**10. Atodwch ddiffiniad a nodyn data i bob mesur.** Dylai un clic o bob rhif arwain at ei ddiffiniad, fformiwla, ffynhonnell data, perchennog, amser adnewyddu, a bylchau hysbys. Mae nodyn byr "sut i ddarllen hwn" yn werth y lle. Mae darllenydd sy'n gweld y terfynau yn llai tebygol o gamddefnyddio'r rhif, a gall tîm sy'n eu gweld eu herio (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau, a phwnc 1.5, Ffynonellau data ac offeryniaeth).

**11. Awtomeiddiwch y data a bod yn berchen ar yr arddangosfa.** Tynnwch ddata o'r systemau cofnod ar amserlen, a dangoswch amser y diweddariad diwethaf. Gall taenlenni â llaw gychwyn sgwrs, ond maent yn fregus. Enwch berchennog ar gyfer pob dangosfwrdd sy'n gyfrifol am ei ddiffiniadau, ffresni, ac ymddeol. Adolygwch y dangosfwrdd ar gyflymder sefydlog gyda'i gynulleidfa, a'i docio.

**12. Cynlluniwch y ffordd allan o'r dechrau.** Dylai fod gan bob mesur reswm a nodwyd dros fodoli ac amod pryd y bydd yn cael ei ymddeol, megis "pan fo'r ôl-groniad o wallau hysbys yn disgyn o dan drothwy am dri mis" neu "pan nad yw'r tîm yn ei ddefnyddio yn ei adolygiad mwyach." Mae ymddeol mesurau yn cadw'r set yn fach ac yn arwyddo bod y rhaglen yn gwasanaethu'r gwaith.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cwmpas cwestiynau | Ysgrifennu cwestiynau cul y mae mesurau presennol eisoes yn eu hateb; gadael cwestiynau caled allan | Cynnwys rhanddeiliaid o'r tu allan i dîm y rhaglen; adolygu cwestiynau heb eu hateb yn benodol |
| Cyflawnrwydd diffiniadau | Llenwi meysydd â geiriad parod; diffiniadau nad oes neb yn eu darllen | Samplu diffiniadau am eglurder gyda rhywun y tu allan i'r tîm; gwirio bod y diffiniad yn cyfateb i'r cyfrifiad gwirioneddol |
| Ffresni data | Adnewyddu ffynhonnell hen gyda data heb ei newid; cyfrif adnewyddu fel llwyddiant pan fethodd bwydo'r ffynhonnell | Gwirio stampiau amser ffynhonnell yn ogystal ag amserau adnewyddu; cymharu â chyfrifon cofnodion a chyfaint disgwyliedig |
| Cysylltu â phenderfyniad | Cofnodi penderfyniadau wedyn i lenwi'r maes; dyfeisio gweithred i osgoi bwlch | Derbyn "dewiswyd gwneud dim" fel penderfyniad a gofnodwyd; samplu cysylltiadau am drafodaeth go iawn ymlaen llaw |
| Maint arddangosfa | Cuddio mesurau ar dabiau eilaidd; hollti un golwg yn llawer | Cyfrif mesurau fesul cynulleidfa ar draws pob tab; gofyn i'r gynulleidfa faint o rifau y maent yn eu defnyddio mewn gwirionedd |
| Cyfradd ymddeol | Ymddeol mesurau anghyfleus sy'n dangos canlyniadau gwael | Adolygu'r rhestr a ymddeolwyd am fesurau gyda thueddiadau anffafriol; mynnu rheswm a nodwyd |
| Cyrhaeddiad cynulleidfa (disgrifiadol) | Agor y dudalen i godi'r cyfrif; gwylio gorfodol mewn cyfarfodydd | Ei gadw'n ddisgrifiadol; darllen gyda chysylltu â phenderfyniad; peidio ag adrodd golygon unigol |

Mae darlleniad iach yn dangos tudalen flaen fer y gall y gynulleidfa ei hesbonio, diffiniadau sy'n cyfateb i gyfrifiadau, data sy'n cyrraedd mewn pryd, adolygiadau sydd weithiau'n arwain at weithred ac weithiau at ddewis bwriadol i aros, a rhestr o fesurau a ymddeolwyd sy'n cynnwys rhai a fu unwaith yn boblogaidd.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Un dangosfwrdd menter i bawb | Ffynhonnell gwirionedd sengl; diffiniadau cyson | Rhy gyffredinol i unrhyw gynulleidfa; yn tyfu'n wal |
| Golygon ar wahân fesul cynulleidfa ar ddata a rennir | Ffitio pob cynulleidfa; diffiniadau cyson | Angen llywodraethu'r diffiniadau a rennir |
| Dangosfyrddau a adeiladwyd gan dimau | Ffitio cwestiynau lleol; perchnogaeth uchel | Diffiniadau'n drifftio; anodd eu rholio i fyny |
| Tîm canolog yn adeiladu pob dangosfwrdd | Cysondeb; sgil dylunio | Araf; efallai na fydd yn ffitio cwestiynau tîm |
| Arddangosfa fyw, amser real | Signalau cyflym ar gyfer gweithrediadau | Annog ymateb i sŵn; costus |
| Pecyn adolygu cyfnodol | Tawel, wedi'i drafod gyda chyd-destun | Oedi; gellir ei hepgor |
| Targedau a lliwiau statws | Sganio cyflym | Gwahodd rheoli yn ôl lliw; cuddio amrywiad |
| Tuedd a dosbarthiad yn unig | Gonest am amrywiad | Anoddach i'w sganio i ddechreuwyr |

Yr ateb pragmatig yw rhannu diffiniadau ar draws y sefydliad, gadael i bob cynulleidfa gael ei golwg fach ei hun, defnyddio arddangosfeydd byw dim ond lle mae ymateb gweithredol eu hangen, a defnyddio adolygiad cyfnodol tawel ar gyfer penderfyniadau gwella.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa benderfyniadau a wnaethom y chwarter diwethaf yr hysbysodd rhif ar sgrin?**
Rhestrwch hwy. Ar gyfer pob un, enwch y rhif a ble y daeth. Sylwch ar ba rifau ar ein sgriniau cyfredol nad ydynt byth yn ymddangos yn y rhestr hon. Dylai'r hwylusydd ofyn a ydynt yn ennill eu lle.

**2. Pe baem yn dangos pum rhif yn unig i'n tîm ein hunain, pa rai fyddent?**
Gofynnwch i bob person ysgrifennu rhestr yn breifat, yna cymharwch. Trafodwch wahaniaethau a beth fyddai pob rhif yn helpu rhywun i'w benderfynu. Cytunwch ar set brawf a dyddiad i'w hadolygu.

**3. Pa rif ar ein dangosfwrdd fyddem ni fwyaf eisiau ei dynnu, a pham?**
Gwrandewch am rifau sy'n achosi dadleuon, yn camarwain, neu na chânt eu darllen byth. Gwiriwch ai'r mesur neu ei gyflwyniad yw'r broblem. Cytunwch i ymddeol, ailddiffinio, neu gadw pob un.

**4. Sut byddai cydweithiwr newydd yn darllen ein dangosfwrdd heb help?**
Gofynnwch i ddechreuwr esbonio'r hyn a welant. Nodwch beth a gamddarllenwyd ganddynt a pham. Ychwanegwch ddiffiniadau, cyd-destun, neu nodiadau lle y baglodd.

**5. Beth newidiodd yn ein gwaith nad yw rhif yn ei ddangos?**
Gall rhyddhau, staffio, polisi, neu newid mewn cwsmeriaid esbonio tuedd. Cytunwch sut y cofnodir digwyddiadau ar yr arddangosfa fel bod gan y darllenydd nesaf y stori.

**6. Pwy sy'n edrych ar ein data heblaw ni, a beth maen nhw'n ei wneud ag ef?**
Olrheiniwch lwybr ein rhifau i gynulleidfaoedd eraill. Gwiriwch fod y dehongliad y maent yn ei roi arnynt yn un y byddem yn ei gymeradwyo. Cytunwch ar yr hyn a rannwn a pha gyd-destun sy'n mynd gydag ef.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau'n gwneud y gwaith a dylent fod y gynulleidfa gyntaf ar gyfer eu data eu hunain. Dylent helpu i ddewis y mesurau, defnyddio'r arddangosfa i ysgogi eu sgyrsiau adolygu eu hunain, a'i hanodi â digwyddiadau. Dylai golwg tîm ateb "sut ydym ni'n gwneud a beth ddylem ni roi cynnig arno?" ac nid "sut ydym ni'n cymharu â'r tîm drws nesaf?"

### Timau gwasanaeth a gweithrediadau

Mae perchnogion gwasanaeth yn atebol am sut mae gwasanaeth yn perfformio dros amser. Mae eu golwg yn dod â dibynadwyedd, digwyddiadau, newidiadau, cost, a phrofiad at ei gilydd ar gyfer un gwasanaeth, gyda thueddiadau a statws gweithredoedd gwella. Dylent ei ddefnyddio i benderfynu ble i fuddsoddi ac i baratoi ar gyfer sgyrsiau gyda chwsmeriaid ac arweinwyr.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr angen golwg fer o ganlyniadau a risgiau ar draws gwasanaethau, gyda digon o gyd-destun i'w ddehongli. Dylent ofyn am dueddiadau a dosbarthiadau yn hytrach na safleoedd, gwrthsefyll gofyn am fesurau newydd heb ymddeol eraill, a defnyddio'r arddangosfa i gyfeirio cwestiynau at systemau a phenderfyniadau, nid at unigolion.

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid a defnyddwyr yn gweld gwybodaeth gwasanaeth drwy dudalennau statws, adroddiadau, a'r mesurau profiad sy'n adlewyrchu eu golwg (gweler pwnc 6.2, Cytundebau lefel profiad). Dylai eu golwg fod yn onest, yn blaen, ac yn gyson â'r hyn y mae'r timau'n ei weld. Dylent allu dweud wrth y sefydliad yr hyn y mae'r rhifau yn methu â'i ddangos.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae cwmni meddalwedd gyda chynnyrch wedi'i westeio a grŵp cymorth cwsmeriaid wedi cronni tri dangosfwrdd: sgrin gweithrediadau gyda 62 o deils, adroddiad cymorth sy'n cael ei e-bostio'n wythnosol, a thudalen gyflawni a gynhelir gan un dadansoddwr. Mae'r tîm arweinyddiaeth yn gofyn am un dangosfwrdd i "weld popeth." Mae'r ffigurau isod yn enghreifftiol.

Mae pennaeth rheoli gwasanaethau yn cynnig dechrau gyda chwestiynau. Mae hi'n cynnal sesiwn awr gyda phob un o dair cynulleidfa: y tîm cymorth, y tîm platfform, a'r grŵp arweinyddiaeth. Mae'r tîm cymorth yn gofyn a yw cwsmeriaid yn aros yn hirach nag yr oeddent am ateb cyntaf defnyddiol a pha un a yw'r un materion yn dod yn ôl. Mae'r tîm platfform yn gofyn a yw'n agos at ddefnyddio ei gyllideb gwallau i gyd a pha un a yw ei broses newid yn ei arafu neu'n ei amddiffyn. Mae arweinyddiaeth yn gofyn a yw cwsmeriaid yn cael gwerth a pha un a yw'r buddsoddiad mewn porth hunanwasanaeth newydd yn talu ar ei ganfed. Gyda'i gilydd rhestrwyd 14 cwestiwn. Gallai'r dangosfyrddau presennol ateb chwech ohonynt gyda mesur diffiniedig, felly cwmpas cwestiynau yw 43 y cant.

Mae'r grŵp yn dylunio tair golwg o ddim mwy na saith mesur yr un, ar ddiffiniadau a rennir. Mae'r golwg cymorth yn dangos y canolrif a'r 85fed canradd amser i ateb cyntaf defnyddiol, cyfran y cysylltiadau sy'n dychwelyd o fewn saith diwrnod, tuedd boddhad gyda maint ei sampl, a datrys hunanwasanaeth wedi'i baru â chysylltiadau dychwelyd. Mae'r golwg platfform yn dangos argaeledd yn erbyn yr amcan gyda llinell llosgi cyllideb gwallau, amser arweiniol newid gyda'r gyfradd methiant newid, a chyfran yr amser a dreulir ar waith heb ei gynllunio. Mae'r golwg arweinyddiaeth yn dangos canlyniadau lefel gwasanaeth, profiad cwsmeriaid, cost fesul cwsmer gweithredol, a statws tair gweithred wella a ariannwyd. Mae gan bob gwerth linell-wreichion, dolen i'w gerdyn diffiniad, a maes nodyn ar gyfer digwyddiadau. Mae lliwiau'n ymddangos ar y gyllideb gwallau yn unig, ar sail rheol a esboniwyd ar y dudalen.

Mae'r adolygiad cyntaf yn dod â syrpreisys. Mae'r tîm cymorth yn sylwi bod ei amser ateb canolrifol wedi gwella tra bo ei 85fed canradd wedi gwaethygu, oherwydd bod cysylltiadau hawdd yn cael eu hateb yn gyflym a rhai caled yn cael eu gadael i aros. Mae'n penderfynu edrych ar ei reolau prysbennu ac yn cofnodi'r penderfyniad. Mae'r tîm platfform yn gweld bod cynnydd diweddar mewn amser arweiniol newid yn cyd-daro â cham cymeradwyo newydd, ac mae'n mynd â'r cwestiwn at y grŵp newid. Mae arweinyddiaeth yn sylwi bod defnydd y porth yn codi tra bo cysylltiadau dychwelyd yn wastad, ac yn gofyn i'r tîm cymorth beth mae'r porth yn methu â'i ateb. Ddau chwarter yn ddiweddarach, cwmpas cwestiynau yw 79 y cant, mae gan bob mesur a ddangosir ddiffiniadau cyflawn, ac mae'r hen sgrin 62-teil wedi'i hymddeol. Mae tri mesur wedi'u gollwng oherwydd nad oedd neb yn eu defnyddio, ac mae un wedi'i ychwanegu. Mae cyfarwyddwr yn gofyn am res crynodeb gwyrdd-ambr-coch. Mae pennaeth rheoli gwasanaethau yn dangos prawf lle trodd un wythnos wael y rhes yn goch ac achosi llu o gwestiynau heb achos. Cytunant ar nodyn ysgrifenedig byr o'r hyn a newidiodd bob mis yn ei le, a chofnodi'r penderfyniad.

## Y golwg fesul sector

**Busnes newydd.** Cadwch ef yn fach iawn: un dudalen gyda thua phum rhif y gall y cwmni cyfan eu darllen, yn adlewyrchu cyflymder cyflawni, sefydlogrwydd, profiad cwsmeriaid, a chost. Defnyddiwch beth bynnag y mae'r offer presennol yn ei ddarparu. Ailedrychwch ar y dudalen pryd bynnag y bo'r cynnyrch neu'r cwsmeriaid yn newid, a gwrthwynebwch adeiladu platfform data cyn bod y cwestiynau'n glir.

**Busnes bach.** Gall dogfen a rennir neu siart taenlen syml wedi'i diweddaru'n fisol fod yn ddigon. Dewiswch lond llaw o fesurau y mae'r perchennog a'r staff yn eu defnyddio mewn gwirionedd, ysgrifennwch beth mae pob un yn ei olygu, a'u trafod mewn cyfarfod rheolaidd. Nid y risg yw gormod o ychydig o offer. Y risg yw mesurau nad oes neb yn ymddiried ynddynt nac yn gweithredu arnynt.

**Menter fawr.** Mae graddfa yn gofyn am ddiffiniadau a rennir, catalog mesurau llywodraethedig, a golygon haenog ar gyfer timau, gwasanaethau, portffolios, a gweithredwyr. Mae'r demtasiwn i rolio popeth i fyny i un rhif yn gryf ac yn niweidiol. Cadwch olygon tîm yn eiddo i dimau, cyhoeddwch ddiffiniadau cyffredin, a mynnwch ddiben a nodwyd ar gyfer unrhyw fesur newydd ar olwg arweinyddiaeth (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

**Llywodraeth a'r sector cyhoeddus.** Mae rhwymedigaethau adrodd ac atebolrwydd cyhoeddus yn aml yn mynnu rhai mesurau. Cadwch y mesurau gorfodol yn weladwy ac wedi'u gwahanu'n glir oddi wrth y rhai y mae'r timau yn eu defnyddio i wella, ac esboniwch i'r cyhoedd ac i gyrff goruchwylio beth y gall ac na all y ffigurau ei ddangos. Mae iaith blaen a hygyrchedd yn bwysig ar gyfer unrhyw arddangosfa a rennir y tu allan i'r sefydliad (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae costau rhaglen dangosfwrdd yn cynnwys amser i gyfweld cynulleidfaoedd, dylunio ac adeiladu, cysylltu a glanhau data, ysgrifennu diffiniadau, hyfforddi a chefnogi defnyddwyr, a chynnal yr arddangosfa dros amser. Y gost gudd fwyaf yw amser pobl sy'n darllen rhifau nad ydynt yn helpu a'r cyfarfodydd a dreulir yn dadlau rhif pwy sy'n gywir. Mae adeiladau rhad, cyflym yn gyffredin, ac mae'r gost go iawn yn cyrraedd yn ddiweddarach mewn cynnal ac mewn diffyg ymddiriedaeth.

Mae'r enillion yn cynnwys adnabod tueddiadau'n gyflymach, llai o ddadleuon am ddiffiniadau, gwaith gwella wedi'i dargedu'n well, ac ymdrech adrodd is pan fo un ffynhonnell lywodraethedig yn disodli sawl adroddiad â llaw. Adeiladwch yr achos o'ch data eich hun: oriau a dreulir ar adroddiadau â llaw cyn ac ar ôl, nifer y fersiynau cystadleuol o'r un ffigur, a phenderfyniadau a hysbyswyd gan yr arddangosfa. Osgowch ddyfynnu ffigurau cyhoeddedig am werth dadansoddeg heb ffynhonnell y gellir ei holrhain a pherthnasedd i'ch cyd-destun. Yr hawliad credadwy yw un cymedrol: llai o fesurau, gwell, y ceir ymddiriedaeth ynddynt ac a ddefnyddir (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Y wal o deils.** Mae pob rhif yn cystadlu am sylw. Torrwch i lond llaw fesul cynulleidfa a rhowch fanylion un cam i lawr.
- **Rheoli yn ôl lliw.** Mae lliwiau statws yn fflipio ar sŵn ac yn gyrru ymatebion. Dangoswch dueddiadau a defnyddiwch reolau sy'n parchu amrywiad.
- **Dim diffiniadau.** Mae dau dîm yn darllen yr un label yn wahanol. Atodwch ddiffiniad a pherchennog i bob mesur.
- **Dangosfyrddau fel gwyliadwriaeth.** Mae golygon lefel unigol yn erydu ymddiriedaeth ac yn ystumio'r data. Dangoswch dimau, gwasanaethau, a systemau.
- **Un rhif i grynhoi popeth.** Mae'n cuddio'r cyfaddawdau yr oedd i fod i'w datgelu. Dangoswch ychydig cytbwys.
- **Adeiladu unwaith, byth adolygu.** Mae'r arddangosfa'n mynd yn hen. Adolygwch gyda'r gynulleidfa ar gyflymder ac ymddeolwch fesurau.
- **Arddangosfeydd gwagedd.** Cyfrifon mawr o weithgarwch heb ganlyniadau. Pârwch bob cyfaint â mesur canlyniad.
- **Yr adroddiad na ofynnodd neb amdano.** Wedi'i adeiladu o'r data sydd ar gael yn lle'r cwestiynau a ofynnwyd. Dechreuwch gyda chwestiynau.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Cynulleidfa a chwestiynau | Wedi'i adeiladu o'r data sydd ar gael | Mae rhai timau yn gofyn am yr hyn sydd ei angen arnynt | Cynulleidfaoedd a chwestiynau wedi'u hysgrifennu; golygon bach fesul cynulleidfa | Cwmpas cwestiynau a chysylltu â phenderfyniad wedi'u hadolygu a'u gweithredu arnynt | Cynulleidfaoedd yn cyd-ddylunio golygon, gan gynnwys cwsmeriaid a chyflenwyr, a chwestiynau'n esblygu gyda'r gwasanaethau |
| Dylunio a chyd-destun | Llawer o deils heb hanes | Rhai tueddiadau a diffiniadau | Ychydig o fesurau fesul golwg gyda thuedd, dosbarthiad, a diffiniad ar bob mesur | Arddangosfeydd sy'n ymwybodol o amrywiad; cymdeithion ar gyfer pob pennawd | Golygon yn addasu i nodau sy'n newid; patrymau a rennir yn cael eu hailddefnyddio ar draws timau |
| Data a chynnal | Â llaw, hen, heb berchennog | Rhywfaint o awtomeiddio; perchnogion anffurfiol | Bwydydd awtomataidd, perchnogion a enwyd, ffresni wedi'i ddangos | Ffresni a chyflawnrwydd diffiniadau wedi'u rheoli; ymddeol yn rheolaidd | Perchnogaeth ffederal gyda diffiniadau a rennir; ymddeol a gwella wedi'u gyrru gan ddefnyddwyr |

## Rhestr wirio

- [ ] Ysgrifennir cwestiynau pob cynulleidfa, ac mae pob golwg yn mapio iddynt.
- [ ] Nid oes gan bob golwg fwy na tua naw mesur, gyda manylion un cam i lawr.
- [ ] Mae'r set wedi'i chydbwyso ar draws llif, ansawdd, dibynadwyedd, profiad, a chost.
- [ ] Mae pob gwerth yn dangos tuedd a chyd-destun, ac mae mesurau amser yn dangos canradd uchel.
- [ ] Mae gan bob mesur ddiffiniad, ffynhonnell, perchennog, ac amser adnewyddu o fewn un clic.
- [ ] Dangosir targedau fel cyfeiriadau, ac mae lliwiau statws yn dilyn rheol a nodwyd.
- [ ] Mae timau'n gweld eu data eu hunain yn gyntaf ac yn berchen ar y dehongli.
- [ ] Nid yw unrhyw olwg yn graddio nac yn olrhain unigolion.
- [ ] Mae gan y dangosfwrdd berchennog a enwyd, cyflymder adolygu, a rheol ar gyfer ymddeol mesurau.
- [ ] Tynnir data yn awtomatig, gydag amser y diweddariad diwethaf yn weladwy.

## Anogwyr AI

**Trowch gwestiynau yn olwg.**

```text
Dyma gwestiynau a ofynnir gan [cynulleidfa]: [rhestr]. Ar gyfer pob un, awgrymwch
un prif fesur ac un mesur cydymaith sy'n gwarchod rhag ei ystumiad mwyaf
tebygol. Grwpiwch hwy yn olwg o ddim mwy na saith mesur, ac ar gyfer pob un
nodwch y diffiniad, math siart a awgrymir, a pha gyd-destun sydd ei angen arno.
Peidiwch â dyfeisio data na meincnodau. Rhestrwch eich rhagdybiaethau a'r
cwestiynau na all y golwg eu hateb.
```

**Adolygwch ddangosfwrdd am eglurder.**

```text
Dyma ddisgrifiad o'n dangosfwrdd, yn rhestru pob teil, ei label, a'i ddiffiniad:
[gludwch]. Gweithredwch fel cydweithiwr newydd yn ei ddarllen am y tro cyntaf.
Rhestrwch pa labeli sy'n amwys, pa rifau sydd heb gyd-destun neu duedd, pa
deils allai wahodd rheoli yn ôl lliw, a pha deils y gellid eu hymddeol. Peidiwch
ag ailysgrifennu'r data. Rhestrwch eich rhagdybiaethau.
```

**Drafftiwch gerdyn metrig.**

```text
Drafftiwch gerdyn metrig ar gyfer [mesur]. Cynhwyswch ddiffiniad plaen, y fformiwla,
uned, ffynhonnell data, perchennog, egwyl adnewyddu, bylchau hysbys, y ffordd
fwyaf tebygol y caiff ei chwarae, y rheilen warchod pâr, a'r penderfyniad y dylai
ei hysbysu. Cadwch ef o dan 200 gair. Peidiwch â dyfeisio ffigurau. Marciwch unrhyw
beth rydych yn ansicr yn ei gylch.
```

**Cynlluniwch adolygiad dangosfwrdd.**

```text
Cynlluniwch adolygiad chwarterol 45 munud o ddangosfwrdd ein [tîm] gyda'i
gynulleidfa. Cynhwyswch sut i wirio bod mesurau wedi'u defnyddio ar gyfer
penderfyniadau, sut i benderfynu pa rai i'w hymddeol, sut i gofnodi digwyddiadau
sy'n esbonio tueddiadau, a sut i osgoi graddio pobl. Rhestrwch y cwestiynau y
dylai'r hwylusydd eu gofyn a'r allbwn i'w gofnodi.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer pob mesur ar olwg arfaethedig.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod gan fanyleb dangosfwrdd ddiffiniadau, perchnogion, a ffyrdd o chwarae'r system ar gyfer pob mesur.

## Pwyntiau allweddol

- Dechreuwch o'r cwestiynau y mae cynulleidfa yn eu gofyn, a rhowch olwg fach ei hun i bob cynulleidfa.
- Cydbwyswch y set, a phârwch bob pennawd â chydymaith sy'n gwarchod rhag ystumio.
- Dangoswch dueddiad, dosbarthiad, a chyd-destun gyda phob gwerth, a pharchwch amrywiad arferol.
- Atodwch ddiffiniad, ffynhonnell, perchennog, ac amser adnewyddu i bob mesur.
- Gadewch i dimau weld a bod yn berchen ar eu data yn gyntaf, a pheidiwch byth â dangos unigolion.
- Adolygwch y dangosfwrdd gyda'i gynulleidfa, ac ymddeolwch fesurau a roddodd y gorau i hysbysu penderfyniadau.

## Cyfeiriadau a darllen pellach

1. Few, S., *Information Dashboard Design: The Effective Visual Communication of Data*, O'Reilly Media, 2006.
2. Tufte, E., *The Visual Display of Quantitative Information*, Graphics Press, 1983.
3. Kaplan, R., and Norton, D., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, 1992.
4. Wheeler, D., *Understanding Variation: The Key to Managing Chaos*, SPC Press, 2000.
5. Axelos, *ITIL 4 Foundation*, 2019.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Dashboard (business)](https://en.wikipedia.org/wiki/Dashboard_(business)).
8. Wikipedia, [Data visualization](https://en.wikipedia.org/wiki/Data_visualization).
9. Wikipedia, [Sparkline](https://en.wikipedia.org/wiki/Sparkline).
10. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
11. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
12. Wikipedia, [Chartjunk](https://en.wikipedia.org/wiki/Chartjunk).
13. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
16. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
