# AI mewn mesur rheoli gwasanaethau

**Cyn i AI newid y gwaith, ysgrifennwch sut mae'r gwaith yn edrych heddiw, yna mesurwch bob defnydd o AI yn erbyn y llinell sylfaen honno ac yn erbyn gwaith cymaradwy a wneir hebddo, oherwydd bydd yr hawliadau'n fawr a'r dystiolaeth fel arfer yn fach.**

## Crynodeb a chymhelliant

Mae deallusrwydd artiffisial bellach yn eistedd y tu mewn i lawer o'r offer y mae timau'n eu defnyddio i adeiladu a rhedeg gwasanaethau. [Deallusrwydd artiffisial](https://en.wikipedia.org/wiki/Artificial_intelligence) (AI) yw gallu systemau cyfrifiadurol i gyflawni tasgau sy'n gysylltiedig â deallusrwydd dynol. O'i fewn, mae systemau [dysgu peirianyddol](https://en.wikipedia.org/wiki/Machine_learning) yn dysgu patrymau o ddata, ac mae systemau [AI cynhyrchiol](https://en.wikipedia.org/wiki/Generative_artificial_intelligence), a adeiledir yn aml ar [fodelau iaith mawr](https://en.wikipedia.org/wiki/Large_language_model), yn cynhyrchu testun, cod, a chynnwys arall mewn ymateb i anogwyr. Mewn rheoli gwasanaethau TG (ITSM) mae'r galluoedd hyn yn ymddangos mewn prysbennu tocynnau, crynhoi digwyddiadau, drafftio erthyglau gwybodaeth, ymatebion a awgrymir ar gyfer y ddesg gwasanaeth, cwblhau ac adolygu cod mewn piblinellau cyflawni, canfod anghysonderau mewn monitro, a chynorthwywyr sgwrsio ar gyfer defnyddwyr. [AIOps](https://en.wikipedia.org/wiki/AIOps) yw'r enw a roddir yn aml ar gymhwyso AI i ddata gweithrediadau TG.

Mae'r hawliadau a wneir dros yr offer hyn yn fawr, ac mae'r dystiolaeth mewn unrhyw sefydliad penodol fel arfer yn fach. Mae gwerthwyr yn adrodd amser a arbedwyd. Mae mabwysiadwyr cynnar yn adrodd brwdfrydedd. Mae gweithredwyr yn gofyn am yr enillion effeithlonrwydd a addawyd. Yn y cyfamser mae timau'n adrodd bod angen gwirio'r allbwn, bod rhai awgrymiadau yn gyfeiliornus yn hyderus, a bod y gwaith yn teimlo'n wahanol. Mesur yw sut mae sefydliad yn darganfod pa un o'r rhain sy'n wir am ei waith ei hun. Mae'r rhan hon o'r llyfr yn cymryd AI o ddifrif fel rhywbeth i'w fesur, gyda'r un rheiliau gwarchod ag unrhyw deulu metrigau arall.

Mae AI yn newid y broblem fesur mewn pedair ffordd.

- **Mae cyfaint a chyflymder yn codi tra bo ansawdd yn dod yn anoddach i'w weld.** Gall AI gynhyrchu tocynnau, atebion, cod, a dogfennau yn gyflym, felly mae mesurau allbwn yn codi. Mae a yw'r allbwn yn dda yn gwestiwn ar wahân (gweler pwnc 10.4, Chwyddiant metrigau a gwanhau ansawdd).
- **Mae llinellau sylfaen yn diflannu.** Unwaith y bo AI mewn defnydd dyddiol, ni allwch adfer sut yr oedd y gwaith yn edrych hebddo. Rhaid cipio llinell sylfaen cyn y newid, neu rhaid i grŵp cymharu fodoli.
- **Mae bodau dynol yn aros yn y ddolen, gyda chanlyniadau.** Mae dyluniadau [dynol-yn-y-ddolen](https://en.wikipedia.org/wiki/Human-in-the-loop) yn cadw person yn gyfrifol am y canlyniad. Gall pobl sy'n adolygu allbwn peiriant ildio iddo'n rhy hawdd, patrwm a elwir yn [duedd awtomeiddio](https://en.wikipedia.org/wiki/Automation_bias), neu gallant dreulio mwy o amser yn gwirio nag a arbedwyd ganddynt.
- **Gall allbynnau fod yn rhugl ac yn anghywir.** Mae [rhithweledigaeth](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)) yn allbwn hyderus nad yw'n cael ei gefnogi gan y mewnbwn nac gan ffaith. Rhaid i fesurau gynnwys gwiriad ar gywirdeb, wedi'i samplu gan berson.

Mae ffyrdd gweithio ystwyth ac ITIL ill dau yn rhoi safbwynt tuag at hyn. Mae nodau ystwyth cyflawni parhaus, gwelliant parhaus, ac esblygiad parhaus yn awgrymu trin pob defnydd o AI fel arbrawf bach: nodwch y budd disgwyliedig, rhowch gynnig arno gydag ychydig o bobl barod, cymharwch, a phenderfynwch. Mae egwyddor arweiniol ITIL o symud ymlaen yn ailadroddol gydag adborth yn pwyntio'r un ffordd, ac mae ei phwyslais ar werth yn gofyn pa ganlyniad sy'n gwella i ddefnyddwyr a'r busnes, nid faint o destun a gynhyrchir. Mae'r nod o bobl gymhellol yn cael ei wasanaethu pan fo AI yn lleddfu gwaith diflas ac yn parchu eu barn, ac nid yw'n cael ei wasanaethu pan ddaw AI yn ffordd o gynyddu cyflymder neu o fonitro'r bobl sy'n ei ddefnyddio. Mae cyflymder cynaliadwy yn golygu na ddylid trosi amser a arbedir yn dawel yn fwy o alw.

Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol i AI yn ei ffurf fwyaf miniog. Os daw "mabwysiadu AI" neu "gyfran y cod a gynhyrchir gan AI" yn darged, bydd pobl yn defnyddio'r offeryn lle nad yw'n helpu, a bydd ansawdd yn talu am y rhif (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae'r pwnc hwn yn cwmpasu'r sylfeini: ble mae AI yn dod i mewn i'r gwaith, pa linellau sylfaen i'w cipio, a pha fesurau sy'n dangos a yw defnydd o AI yn helpu. Mae'r pynciau nesaf yn mynd yn ddyfnach ar waith â chymorth, ar asiantau a sgwrsfotiau, ar chwyddiant a gwanhau, ac ar lywodraethu. Mae ffeithiau am gynhyrchion a rheolau AI yn newid yn gyflym, ac mae datganiadau am offer neu reoliadau penodol yn y rhan hon wedi'u dyddio ym mis Hydref 2026 ac y dylid eu hailwirio.

## Egwyddorion allweddol

- **Cipiwch linell sylfaen cyn cyflwyno AI.** Heb un, barn yw pob hawliad budd.
- **Trinwch bob defnydd fel arbrawf gyda chymhariaeth.** Cymharwch â gwaith tebyg a wneir heb AI, dros yr un cyfnod.
- **Mesurwch ansawdd drwy samplu, gyda phobl.** Nid yw allbwn rhugl yn allbwn cywir.
- **Cyfrwch y gost lawn.** Cynhwyswch amser adolygu, ail-wneud, trwyddedau, a chostau casglu.
- **Cadwch bobl yn atebol ac yn wybodus.** Mae'r person sy'n defnyddio AI yn ateb am y canlyniad.
- **Peidiwch â gadael i AI ddod yn gynnydd cyflymder na monitor.** Mae amser a arbedir yn ddewis ynghylch sut i ddefnyddio'r amser.
- **Dechreuwch gyda phobl barod a phroblemau go iawn.** Mae gorchmynion yn cynhyrchu defnydd heb werth.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyflawnrwydd llinell sylfaen | Cyfran yr achosion defnydd AI arfaethedig gyda llinell sylfaen cyn-mabwysiadu wedi'i chofnodi ar gyfer eu prif ddangosyddion | achosion defnydd gyda llinell sylfaen wedi'i dyddio / achosion defnydd arfaethedig | canran | Cofrestr achosion defnydd | Gwelliant parhaus; mesur ac adrodd | Llinell sylfaen cyn arbrawf | Chwarterol |
| Cwmpas defnydd AI | Cyfran yr eitemau gwaith neu dasgau cymwys lle defnyddiwyd AI, yn ôl achos defnydd | eitemau lle defnyddiwyd cymorth AI / eitemau cymwys, o logiau offer neu dagiau defnyddwyr, ar lefel tîm | canran | Logiau defnydd offer, tagiau | Desg gwasanaeth; rheoli digwyddiadau; rheoli rhyddhau a defnyddio | Mabwysiadu offeryn gan dimau parod | Misol |
| Cyfradd derbyn a gwrthwneud awgrymiadau | Cyfran yr awgrymiadau AI a dderbyniwyd fel y maent, a olygwyd, neu a wrthodwyd | awgrymiadau ym mhob categori / awgrymiadau a gynigiwyd | canran | Logiau offer wedi'u cyfanredu yn ôl tîm | Desg gwasanaeth; rheoli gwybodaeth | Adolygu awgrymiadau peiriant | Misol |
| Cywirdeb allbwn a adolygwyd | Cyfran yr allbynnau AI a samplwyd a farnwyd yn gywir ac yn addas i'r diben gan adolygydd cymwys | allbynnau a farnwyd yn gywir / allbynnau a samplwyd | canran | Cofnodion adolygu a samplwyd | Sicrwydd ansawdd; rheoli gwybodaeth | Diffiniad o orffen ar gyfer yr allbwn | Misol |
| Amser tasg yn erbyn llinell sylfaen | Yr amser i gwblhau tasg ddiffiniedig gydag AI o'i gymharu â'r llinell sylfaen neu grŵp cymharu | canolrif ac 85fed canradd amser tasg gydag AI llai'r un peth ar gyfer y llinell sylfaen neu'r gymhariaeth | munudau neu oriau | Tasgau wedi'u hamseru, stampiau amser tocynnau | Desg gwasanaeth; rheoli digwyddiadau | Amser beicio ar gyfer tasg | Chwarterol |
| Cost fesul tasg â chymorth AI | Cyfanswm cost gwaith â chymorth AI fesul tasg, gan gynnwys adolygu ac ail-wneud | (cost trwydded a defnydd + cost amser adolygu ac ail-wneud) / tasgau a gwblhawyd gydag AI | arian fesul tasg | Anfonebau gwerthwyr, amcangyfrifon amser, traciwr gwaith | Rheoli ariannol gwasanaeth | Cost i wasanaethu fesul canlyniad | Chwarterol |
| Symudiad canlyniad yn erbyn cymhariaeth | Newid yn y dangosydd canlyniad ar gyfer gwaith â chymorth AI o'i gymharu â gwaith tebyg heb gymorth | newid yn y dangosydd ar gyfer y grŵp â chymorth AI llai newid ar gyfer y grŵp cymharu | unedau dangosydd | Mesurau canlyniad fesul achos defnydd (ansawdd, boddhad, cyfradd ailagor, diffygion) | Gwelliant parhaus | Dysgu o arbrofion | Chwarterol |

Diffiniwch bob achos defnydd yn ôl y dasg, y defnyddwyr, a'r dangosyddion canlyniad, a'u cofnodi yn y gofrestr. Mesur disgrifiadol yw cwmpas defnydd AI ac nid targed. Barnir cywirdeb allbwn a adolygwyd yn erbyn safon ysgrifenedig gan rywun cymwys na chynhyrchodd yr allbwn. Mae amser tasg yn cynnwys yr amser i annog, adolygu, a chywiro yn ogystal â chynhyrchu. Mae cost fesul tasg yn cyfrif amser pobl a dreuliwyd yn gwirio ac yn trwsio. Mae symudiad canlyniad yn gofyn am gymhariaeth a ddewiswyd ymlaen llaw a nodyn ar newidiadau eraill yn ystod y cyfnod.

## Argymhellion

### Penderfynwch ble mae AI yn perthyn

**1. Rhestrwch y tasgau a'r broblem y mae pob defnydd o AI yn mynd i'r afael â hi.** Dechreuwch o boen, nid o'r offeryn: drafftio dro ar ôl tro, prysbennu araf, gwybodaeth wasgaredig, adolygiadau hir, rhybuddion swnllyd. Ar gyfer pob defnydd ymgeisiol, ysgrifennwch y broblem, pwy sy'n ei theimlo, y canlyniad a ddylai wella, a'r risgiau. Hepgorwch ddefnyddiau heb broblem glir. Dyma'r gofrestr y mae'r llinell sylfaen a'r mesurau yn hongian oddi arni.

**2. Dosbarthwch risg pob defnydd.** Mae offeryn sy'n drafftio nodiadau mewnol yn cario risg wahanol i un sy'n newid systemau cynhyrchu, yn ateb cwsmeriaid, neu'n gwneud penderfyniadau am bobl. Dosbarthwch ddefnyddiau yn ôl y niwed os yw'r allbwn yn anghywir, pwy yr effeithir arno, a pha un a yw person yn ei adolygu cyn iddo ddod i rym. Mae defnyddiau risg uwch angen mesurau cryfach, samplu, a llywodraethu (gweler pwnc 10.5, Metrigau llywodraethu a risg AI).

**3. Dechreuwch gyda phobl barod a thasgau cyfyngedig.** Cynhaliwch beilot gyda gwirfoddolwyr ar dasg gyffredin y gellir ei gwirio. Mae gwirfoddolwyr yn rhoi adborth gonest ac yn addasu'r offeryn i'w gwaith. Mae tasg gyfyngedig yn gwneud llinellau sylfaen a chymariaethau yn ymarferol. Osgowch ddechrau gyda'r gwaith mwyaf sensitif.

### Cipiwch linellau sylfaen a sefydlwch gymariaethau

**4. Cofnodwch y llinell sylfaen cyn y defnydd cyntaf.** Ar gyfer pob achos defnydd, cipiwch gyflwr presennol y dangosyddion: amser i gwblhau, cyfradd ansawdd neu ddiffygion, ail-wneud, boddhad defnyddwyr, a chost. Cymerwch ddigon o arsylwadau i weld yr amrywiad arferol (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Dyddiwch y llinell sylfaen a'i chadw. Mae llinell sylfaen a gymerir ar ôl cyflwyno yn gofnod o'r byd newydd.

**5. Adeiladwch gymhariaeth.** Lle bo modd, cadwch grŵp tebyg neu set o dasgau nad ydynt yn defnyddio AI ar gyfer cyfnod y peilot, neu newidiwch ddefnydd yn ôl wythnos neu fath o dasg mewn ffordd deg. Mae hapnodi yn ddelfrydol ac yn aml yn anymarferol. Nodwch yn blaen beth arall a newidiodd. Heb gymhariaeth, bydd gwelliannau oherwydd tymhorau, staffio, neu ddysgu yn cael eu credydu i'r offeryn.

**6. Mesurwch amser yn onest.** Anaml mai amser i ddrafft cyntaf yw'r mesur cywir. Mesurwch amser i ganlyniad gorffenedig, wedi'i wirio, gan gynnwys annog, adolygu, a chywiro. Mae pobl yn aml yn adrodd amser a arbedwyd ar sail y cam cynhyrchu, ac mae'r cam adolygu yn bwyta rhywfaint neu'r cyfan ohono. Mae astudiaethau amser ar sampl o dasgau yn werth yr ymdrech.

### Mesurwch ansawdd a chost

**7. Samplwch allbynnau i'w hadolygu gan bobl gymwys.** Bob mis, tynnwch sampl ar hap o allbynnau â chymorth AI a gofynnwch i berson cymwys eu barnu yn erbyn safon ysgrifenedig. Adroddwch gywirdeb, y mathau o wallau a ganfuwyd, a thueddiadau. Dyma'r prif amddiffyniad rhag camgymeriadau rhugl yn lledaenu. Cadwch yr adolygydd yn annibynnol ar y cynhyrchydd, a chylchdroi adolygwyr.

**8. Gwyliwch batrymau derbyn a gwrthwneud.** Gall cyfradd derbyn uchel iawn arwyddo tuedd awtomeiddio, lle mae pobl yn derbyn heb wirio. Gall cyfradd isel iawn arwyddo offeryn nad yw'n ddefnyddiol. Defnyddiwch y cyfraddau fel anogwyr ar gyfer sgwrs gyda'r tîm a gofynnwch beth mae'r rhifau yn ei olygu yn eu profiad. Peidiwch â gosod targedau ar gyfer derbyn.

**9. Cyfrwch y gost lawn fesul tasg.** Cynhwyswch ffioedd trwydded, taliadau ar sail defnydd, yr amser a dreulir yn annog, adolygu, a chywiro, hyfforddiant, ac ymdrech llywodraethu. Cymharwch â chost y llinell sylfaen. Gall offeryn sy'n gwneud drafftiau'n gyflym ac sydd angen cywiro trwm gostio mwy na'r hen ffordd. Cynhwyswch gost camgymeriadau sy'n cyrraedd defnyddwyr.

### Cadwch yr ochr ddynol yn iawn

**10. Amddiffynwch bobl rhag monitro ac ymlusgo cyflymder.** Cyfanredwch ddata defnydd AI ar lefel tîm a pheidiwch â'i ddefnyddio i raddio unigolion. Peidiwch â defnyddio defnydd fel mesur perfformiad. Cytunwch ymlaen llaw na fydd amser a arbedir yn dod yn llwyth gwaith ychwanegol yn awtomatig, a phenderfynwch gyda'r tîm beth i'w wneud ag ef: ansawdd, dysgu, gwelliant, neu waith arall. Mae cyflymder cyson yn nod dylunio (gweler pwnc 9.2, Metrigau boddhad a lles).

**11. Gofynnwch i'r bobl sy'n ei ddefnyddio.** Mae pylsiau byr a sgyrsiau yn datgelu'r hyn y mae'r rhifau yn ei golli: ble mae'r offeryn yn helpu, ble mae'n rhwystredig, ble mae'n symud y gwaith o greu i wirio, ac a yw'n newid boddhad y swydd. Trinwch bryderon am sgiliau, ansawdd, a diogelwch swydd gyda pharch.

**12. Penderfynwch, cyhoeddwch, ac ailedrychwch.** Ar ddiwedd pob peilot, penderfynwch raddio, addasu, neu stopio, a chofnodwch y dystiolaeth. Rhannwch ganlyniadau'n onest, gan gynnwys rhai di-rym a negyddol. Ailedrychwch ar benderfyniadau wrth i'r offer newid, sy'n digwydd yn gyflym. Efallai y bydd defnydd na helpodd y llynedd yn helpu nawr, a'r gwrthwyneb.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyflawnrwydd llinell sylfaen | Cofnodi llinellau sylfaen wedyn; defnyddio dangosyddion cyfleus | Llinellau sylfaen wedi'u stampio â dyddiad; adolygiad annibynnol o ddull y llinell sylfaen |
| Cwmpas defnydd AI | Gorchymyn defnydd; cyfrif galwadau dibwys neu awtomatig | Byth yn darged; cymharu â symudiad canlyniad; cyfrif defnydd ystyrlon |
| Cyfradd derbyn a gwrthwneud awgrymiadau | Gwobrwyo derbyn; gwneud gwrthod yn feichus | Dim targedau; cywirdeb allbwn a adolygwyd; gofyn i ddefnyddwyr am eu profiad |
| Cywirdeb allbwn a adolygwyd | Samplu allbynnau hawdd; adolygwyr trugarog | Sampl ar hap gan adolygwyr annibynnol; safon ysgrifenedig; cylchdroi adolygwyr |
| Amser tasg yn erbyn llinell sylfaen | Amseru cynhyrchu yn unig; dewis tasgau hawdd | Amser i ganlyniad wedi'i wirio; samplu tasgau ar hap; cynnwys adolygu ac ail-wneud |
| Cost fesul tasg â chymorth AI | Gadael amser adolygu neu gost llywodraethu allan | Rhestr wirio cost lawn; cymharu ag astudiaethau amser |
| Symudiad canlyniad yn erbyn cymhariaeth | Dewis grwpiau neu gyfnodau ffafriol; anwybyddu newidiadau eraill | Cymhariaeth a chyfnod a gytunwyd ymlaen llaw; rhestr o newidiadau eraill |

Mae darlleniad iach yn llinellau sylfaen ar gyfer pob peilot, amser wedi'i fesur i ganlyniadau gorffenedig, cywirdeb wedi'i wirio gan bobl gymwys, costau sy'n cynnwys adolygu, canlyniadau wedi'u cymharu'n deg, a thimau sy'n dweud bod yr offeryn yn gwasanaethu eu barn.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Peilot gyda gwirfoddolwyr | Adborth gonest; risg isel | Mae gwirfoddolwyr yn selogion; efallai na fydd canlyniadau'n cyffredinoli |
| Cyflwyno gorfodol | Cwmpas cyflym | Defnydd heb werth; drwgdeimlad; chwarae'r system |
| Cymhariaeth reoledig | Tystiolaeth gredadwy | Ymdrech; nid bob amser yn bosibl |
| Cyn-ac-ar-ôl yn unig | Syml | Wedi'i ddrysu gan newidiadau eraill |
| Arbedion a adroddir gan werthwyr | Hawdd eu cael | Optimistaidd; di-gyd-destun |
| Tasgau wedi'u hamseru eich hun | Wedi'u seilio ar eich gwaith | Yn cymryd amser; samplau bach |
| Adolygu pob allbwn yn drwm | Diogel | Yn tynnu'r budd |
| Adolygu wedi'i samplu | Yn graddio | Mae rhai gwallau'n llithro drwodd |

Yr ateb pragmatig yw rhedeg peilotiaid bach gyda llinellau sylfaen a chymariaethau, samplu allbynnau am ansawdd, cyfrif cost lawn, a phenderfynu ar sail tystiolaeth. Defnyddiwch ffigurau gwerthwyr fel damcaniaethau i'w profi.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Ble ydym ni'n disgwyl i AI ein helpu, a beth fyddem ni'n ei weld pe bai'n gwneud?**
Rhestrwch ddefnyddiau ymgeisiol ac, ar gyfer pob un, y dangosydd a'r llinell sylfaen sydd gennym heddiw. Dylai'r hwylusydd wthio am fanylion: pa dasg, pa fesur, pa faint o newid fyddai'n bwysig. Dewiswch un defnydd i'w brofi a chytunwch ar y llinell sylfaen.

**2. Beth fyddai'n gwneud i ni ymddiried neu beidio ag ymddiried mewn awgrym AI, a sut y byddem yn gwybod ein bod yn anghywir?**
Trafodwch achosion lle'r oedd yr allbwn yn anghywir a sut y sylwyd arno. Ystyriwch sut mae adolygu yn gweithio'n ymarferol ac a yw pwysau yn arwain at ei hepgor. Cytunwch ar ddull samplu y bydd rhywun annibynnol yn ei redeg.

**3. Faint o'r amser a arbedwn fyddai'n cael ei wario ar wirio?**
Amserwch un dasg go iawn gyda'r offeryn a hebddo, gan gynnwys annog ac adolygu. Cymharwch â'r hyn y mae pobl yn ei ddisgwyl. Mae'r sgwrs yn aml yn datgelu ble mae'r budd a ble nad oes.

**4. Beth ddylem ni ei wneud â'r amser a arbedwn?**
Penderfynwch ymlaen llaw. Mae opsiynau yn cynnwys gwaith ansawdd, dysgu, gwelliant, neu lai o bwysau. Trafodwch sut i atal yr amser rhag cael ei amsugno'n dawel i fwy o alw. Cytunwch gydag arweinwyr sut y bydd y tîm yn ei warchod.

**5. Beth na fyddem ni eisiau i AI ei wneud yma, a pham?**
Rhestrwch dasgau sydd angen barn ddynol, empathi, neu atebolrwydd. Trafodwch risgiau i ddefnyddwyr ac i sgiliau. Dylai'r hwylusydd gofnodi ffiniau fel mewnbynnau i lywodraethu.

**6. Sut y byddwn ni'n gwybod pryd i stopio?**
Diffiniwch y dystiolaeth a fyddai'n dod â'r peilot neu'r defnydd i ben. Cytunwch pwy sy'n penderfynu a phryd. Mae peilot heb feini prawf gadael yn dod yn nodwedd barhaol.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn defnyddio AI ar gyfer cod, profion, adolygiadau, a dogfennaeth. Dylent fesur amser i ganlyniad wedi'i adolygu, sy'n gweithio, gwylio ansawdd a diffygion, a chadw adolygiad dynol yn ystyrlon. Dylent wrthsefyll metrigau sy'n cyfrif llinellau a gynhyrchir neu dderbyn, a mynnu mesurau canlyniad megis diffygion a sefydlogrwydd.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau a'r ddesg gwasanaeth yn defnyddio AI ar gyfer prysbennu, crynodebau, awgrymiadau, a monitro. Dylent gymharu ansawdd trin a datrys â llinellau sylfaen, samplu allbynnau, a gwylio am effeithiau ar ddefnyddwyr ac ar gysylltiadau dro ar ôl tro. Dylid ymgynghori â hwy cyn gosod AI o flaen defnyddwyr.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn noddi rhaglenni AI ac yn wynebu pwysau i ddangos enillion. Dylent fynnu llinellau sylfaen a chymariaethau, ariannu'r gwaith adolygu, osgoi targedau defnydd, ac amddiffyn pobl rhag monitro ac ymlusgo cyflymder. Dylai llywodraethu fynnu dosbarthu risg a thystiolaeth cyn graddio.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn cwrdd ag AI mewn atebion, awgrymiadau, a gweithredoedd awtomataidd. Maent eisiau cymorth cywir, dealladwy a'r gallu i gyrraedd person. Dylid dweud wrthynt pan fyddant yn rhyngweithio ag AI lle bo'n briodol, ac mae eu hadborth yn dystiolaeth allweddol o a yw'n helpu (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae grŵp technoleg yswiriwr o faint canolig yn rhedeg desg gwasanaeth fewnol ar gyfer 4,000 o staff a sawl tîm cynnyrch. Mae arweinyddiaeth yn prynu trwyddedau ar gyfer cynorthwyydd AI ac yn gofyn am adroddiad o amser a arbedwyd ar ôl tri mis. Mae'r rhifau isod yn enghreifftiol.

Mae pennaeth rheoli gwasanaethau yn mynnu llinell sylfaen. Ar gyfer tasg fwyaf cyffredin y ddesg gwasanaeth, drafftio atebion i geisiadau mynediad a chyfrinair, mae hi'n amseru 120 o docynnau diweddar: amser trin canolrifol o 11 munud, 85fed canradd o 24, cyfradd ailagor o 6 y cant, a sgôr boddhad o'r arolwg sy'n sefydlog. Mae hi'n dewis dau dîm i brofi'r cynorthwyydd ac yn cadw dau dîm tebyg fel cymhariaeth. Gwirfoddolwyr yw'r timau peilot.

Ar ôl wyth wythnos, amser trin canolrifol y timau peilot yw 8 munud a'r 85fed canradd yw 19, o'i gymharu ag 11 a 23 yn y timau cymharu. Mae'r logiau offer yn dangos bod asiantau yn derbyn awgrymiadau fel y'u hysgrifennwyd mewn 52 y cant o achosion, yn eu golygu mewn 38 y cant, ac yn eu gwrthod mewn 10 y cant. Mae sampl ar hap misol o 80 o atebion, a adolygir gan asiant uwch nad yw yn y peilot, yn canfod bod 91 y cant yn gwbl gywir, gyda gwallau wedi'u crynhoi mewn gweithdrefn a ddefnyddir yn anaml lle rhoddodd y cynorthwyydd gamau hen. Mae'r gyfradd ailagor yn y timau peilot yn codi ychydig i 7 y cant, o fewn yr amrywiad arferol. Mae cost fesul tocyn yn disgyn yn gymedrol unwaith y cyfrifir trwyddedau ac amser adolygu. Mae arolwg yn dangos bod asiantau yn gwerthfawrogi'r drafftiau ac yn casáu'r gwirio ychwanegol o atebion hir. Mae dau asiant yn dweud eu bod yn teimlo pwysau i drin mwy o docynnau yr awr.

Mae pennaeth rheoli gwasanaethau yn adrodd arbediad amser o tua chwarter ar y canolrif ac yn nodi'r rhybuddion: dau dîm, wyth wythnos, gwirfoddolwyr, a chyfradd ailagor y mae angen ei gwylio. Mae hi'n cytuno gydag arweinwyr y bydd yr amser a arbedir yn mynd i'r sylfaen wybodaeth ac i achosion cymhleth, ac na fydd unrhyw dargedau tocynnau yn codi. Cywirir y weithdrefn hen yn y sylfaen wybodaeth. Mae uwch reolwr yn gofyn am ddefnydd gorfodol ledled y cwmni a tharged o 80 y cant o dderbyn. Mae hi'n gwrthod y targed, gan esbonio y byddai targed derbyn yn gwobrwyo peidio â gwirio, ac yn cynnig ymestyn y peilot i ddau dîm arall gyda'r un mesurau. Cofnodir y penderfyniad.

## Y golwg fesul sector

**Busnes newydd.** Mabwysiedir offer yn gyflym ac yn aml yn anffurfiol. Cipiwch linell sylfaen syml o amser a diffygion ar gyfer y prif ddefnydd, cadwch adolygiad dynol o unrhyw beth sy'n wynebu cwsmeriaid, ac osgowch gloi i mewn i un gwerthwr yn gynnar. Gwyliwch am ddiogelwch ac amlygiad data pan fo staff yn defnyddio offer cyhoeddus.

**Busnes bach.** Gall cynorthwywyr parod gynnig cymorth go iawn ar gyfer drafftio a thasgau arferol. Mesurwch ar raddfa fach: amser ar gyfer ychydig o dasgau go iawn a chyfradd y cywiriadau. Byddwch yn ofalus gyda data cyfrinachol, a gwiriwch delerau'r gwerthwr ar sut y defnyddir data.

**Menter fawr.** Mae graddfa yn galw am lywodraethu, safonau caffael, a dull mesur cyffredin. Rhedwch beilotiaid gyda chymhariaeth, cyhoeddwch ganlyniadau'n fewnol, a rhannwch linellau sylfaen a dulliau ar draws timau. Gochelwch rhag rhaglenni sy'n adrodd defnydd fel llwyddiant.

**Llywodraeth a'r sector cyhoeddus.** Gall penderfyniadau sy'n effeithio ar ddinasyddion fod yn destun dyletswyddau cyfreithiol ar dryloywder, tegwch, ac adolygiad dynol. Dosbarthwch ddefnyddiau yn ôl risg, cadwch gofnodion o sut y defnyddiwyd AI mewn penderfyniadau, a byddwch yn agored yn ei gylch. Mae caffael a diogelu data yn berthnasol, ac mae gan rai awdurdodaethau gyfreithiau AI penodol y dylid eu gwirio fel y maent heddiw (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y costau yw trwyddedau neu daliadau defnydd, integreiddio, hyfforddiant, yr amser i gipio llinellau sylfaen a rhedeg cymariaethau, yr amser pobl a dreulir yn adolygu a chywiro allbynnau, ac ymdrech llywodraethu. Gall costau raddio gyda defnydd a newid gyda phrisiau gwerthwyr, felly modelwch amrediad.

Yr enillion posibl yw amser a adferir ar dasgau ailadroddus, drafftio a chwilio cyflymach, gwell cwmpas gwybodaeth, a rhyddhad i staff rhag gwaith diflas. Posibiliadau i'w profi yw'r rhain, nid rhagdybiaethau i'w bancio. Adeiladwch yr achos o'ch peilotiaid eich hun: amser tasg wedi'i fesur i ganlyniad wedi'i wirio, cywirdeb a adolygwyd, ail-wneud, a chost lawn fesul tasg, yn erbyn llinell sylfaen a chymhariaeth. Osgowch ddyfynnu canrannau cynhyrchiant o ffynonellau gwerthwyr neu arolygon oni allwch olrhain y dull a'r ffit i'ch gwaith. Cynhwyswch risg camgymeriadau sy'n cyrraedd defnyddwyr a chost llywodraethu'r offer (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Cyflwyno AI heb linell sylfaen.** Ni allwch ddweud beth newidiodd. Cipiwch hi'n gyntaf.
- **Mesur cyflymder cynhyrchu.** Gall yr arbediad ddiflannu mewn adolygu. Amser i ganlyniad wedi'i wirio.
- **Targedau mabwysiadu.** Maent yn cynhyrchu defnydd heb werth. Trinwch gwmpas fel un disgrifiadol.
- **Ymddiried mewn hawliadau gwerthwyr.** Damcaniaethau ydyn nhw. Profwch hwy ar eich gwaith.
- **Adolygu nad yw'n real.** Mae tuedd awtomeiddio yn troi adolygu yn stamp rwber. Samplwch a gwiriwch yn annibynnol.
- **Trosi amser a arbedir yn fwy o alw.** Mae'n erydu ymddiriedaeth a chyflymder cynaliadwy. Penderfynwch ymlaen llaw beth yw pwrpas yr amser.
- **Monitro defnydd unigol.** Mae'n magu ofn. Cyfanredwch i lefel tîm.
- **Peilotiaid heb ddiwedd.** Maent yn dod yn barhaol yn ddiofyn. Gosodwch feini prawf gadael.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diben a llinellau sylfaen | Offer wedi'u mabwysiadu gan frwdfrydedd | Achosion defnydd wedi'u rhestru | Cofrestr gyda phroblem, dosbarth risg, llinell sylfaen, a dangosydd ar gyfer pob defnydd | Llinellau sylfaen a chymariaethau yn ofynnol cyn graddio; canlyniadau wedi'u cyhoeddi | Llinellau sylfaen a dulliau a rennir ar draws timau a phartneriaid; defnyddiau wedi'u hymddeol pan fo tystiolaeth yn pylu |
| Tystiolaeth o fudd | Hanesion a hawliadau gwerthwyr | Amcangyfrifon amser anffurfiol | Tasgau wedi'u hamseru; cywirdeb wedi'i samplu; cost lawn fesul tasg | Symudiad canlyniad yn erbyn cymhariaeth wedi'i adrodd gyda therfynau | Golwg portffolio o ble mae AI yn helpu, gyda dysgu wedi'i rannu'n eang |
| Pobl a chyflymder | Gorchmynion; monitro | Gofal anffurfiol | Data lefel tîm yn unig; amser a arbedir wedi'i ddyrannu trwy gytundeb | Pryderon wedi'u holrhain; sgiliau a boddhad wedi'u mesur | Cyd-ddylunio defnydd AI gyda defnyddwyr a staff; cyflymder cynaliadwy wedi'i warchod |

## Rhestr wirio

- [ ] Mae gan bob defnydd o AI broblem ysgrifenedig, dosbarth risg, perchennog, a meini prawf gadael.
- [ ] Mae llinell sylfaen wedi'i dyddio yn bodoli ar gyfer pob peilot cyn y defnydd cyntaf.
- [ ] Diffinnir grŵp cymharu neu dasgau cymharu ymlaen llaw.
- [ ] Mesurir amser i ganlyniad gorffenedig, wedi'i wirio.
- [ ] Samplir allbynnau'n fisol a'u hadolygu gan bobl gymwys, annibynnol.
- [ ] Mae cost lawn fesul tasg yn cynnwys adolygu ac ail-wneud.
- [ ] Cyfanredir data defnydd ar lefel tîm ac ni chaiff ei ddefnyddio ar gyfer unigolion.
- [ ] Mae'r tîm wedi cytuno beth i'w wneud ag amser a arbedir.
- [ ] Gofynnir i ddefnyddwyr am eu profiad o'r offeryn.
- [ ] Mae peilotiaid yn gorffen mewn penderfyniad a gofnodwyd i raddio, addasu, neu stopio.

## Anogwyr AI

**Drafftiwch gofnod achos defnydd.**

```text
Rydym yn ystyried defnyddio AI ar gyfer [tasg] yn [tîm a gwasanaeth]. Drafftiwch
gofnod cofrestr achos defnydd: y broblem a phwy sy'n ei theimlo, y canlyniad a
ddylai wella, dosbarthiad risg a pham, y cam adolygu dynol, dangosyddion llinell
sylfaen i'w cipio nawr, dull cymharu, cydrannau cost i'w holrhain, meini prawf
gadael, a chwestiynau i'r tîm. Peidiwch â thybio nodweddion gwerthwr penodol na
honni buddion. Rhestrwch eich rhagdybiaethau.
```

**Dyluniwch astudiaeth tasg wedi'i hamseru.**

```text
Dyluniwch astudiaeth fach i fesur effaith cynorthwyydd AI ar [tasg]. Cynigiwch
sut i ddewis tasgau, sut i gymharu â'r offeryn a hebddo yn deg, beth i'w amseru
(gan gynnwys annog, adolygu, a chywiro), sut i farnu ansawdd allbwn, a sut i
osgoi tuedd. Cadwch ef yn ymarferol ar gyfer tîm o [nifer] o bobl. Peidiwch â
nodi canlyniadau disgwyliedig. Rhestrwch eich rhagdybiaethau a therfynau'r dyluniad.
```

**Cynlluniwch samplu allbynnau.**

```text
Mae ein hallbynnau â chymorth AI y mis tua [nifer] o fathau [rhestr]. Dyluniwch
broses samplu ac adolygu ar hap fisol: maint sampl a dull dewis (gyda'r
rhesymu, gan osgoi gorddatgan manylder), pwy sy'n adolygu, y safon ysgrifenedig,
categorïau gwallau, sut i adrodd, a sut i ddefnyddio canfyddiadau. Rhestrwch eich
rhagdybiaethau a risgiau.
```

**Penderfynwch beth i'w wneud ag amser a arbedir.**

```text
Arbedodd ein peilot ganolrif o [gwerth] fesul tasg ar gyfer [nifer] o dasgau yr
wythnos yn [tîm]. Awgrymwch opsiynau ar gyfer defnyddio'r amser sy'n cefnogi
ansawdd, dysgu, a chyflymder cynaliadwy, gyda chyfaddawdau a risgiau pob un, a
ffordd o gytuno ar y dewis gyda'r tîm ac arweinwyr. Peidiwch â thybio y bydd yr
arbedion yn parhau. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig sy'n gysylltiedig ag AI cyn ei adrodd.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig AI yn cofnodi ei linell sylfaen, ei gymhariaeth, ei ffordd o chwarae'r system, a'i reilen warchod.

## Pwyntiau allweddol

- Cipiwch linell sylfaen wedi'i dyddio cyn defnyddio AI, a chymharwch â gwaith tebyg a wneir hebddo.
- Mesurwch amser i ganlyniad gorffenedig, wedi'i wirio, a samplwch allbynnau am gywirdeb gydag adolygwyr annibynnol.
- Cyfrwch gost lawn, gan gynnwys adolygu ac ail-wneud.
- Trinwch ddefnydd a derbyn fel rhai disgrifiadol, byth fel targedau.
- Penderfynwch ymlaen llaw beth i'w wneud ag amser a arbedir, a chadwch gyflymder cynaliadwy.
- Cadwch ddata defnydd ar lefel tîm, a gorffennwch bob peilot gyda phenderfyniad a gofnodwyd.

## Cyfeiriadau a darllen pellach

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
4. Bender, E. M., Gebru, T., McMillan-Major, A., and Shmitchell, S., "On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?" *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, 2021.
5. Russell, S., and Norvig, P., *Artificial Intelligence: A Modern Approach*, 4th ed., Pearson, 2020.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Artificial intelligence](https://en.wikipedia.org/wiki/Artificial_intelligence).
8. Wikipedia, [Machine learning](https://en.wikipedia.org/wiki/Machine_learning).
9. Wikipedia, [Generative artificial intelligence](https://en.wikipedia.org/wiki/Generative_artificial_intelligence).
10. Wikipedia, [Large language model](https://en.wikipedia.org/wiki/Large_language_model).
11. Wikipedia, [AIOps](https://en.wikipedia.org/wiki/AIOps).
12. Wikipedia, [Human-in-the-loop](https://en.wikipedia.org/wiki/Human-in-the-loop).
13. Wikipedia, [Automation bias](https://en.wikipedia.org/wiki/Automation_bias).
14. Wikipedia, [Hallucination (artificial intelligence)](https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
