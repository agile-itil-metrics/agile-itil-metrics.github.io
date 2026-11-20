# Metrigau risg a rheolaethau

**Sgwrs barhaus yw gwaith risg am yr hyn a allai fynd o'i le a'r hyn yr ydym yn ei wneud yn ei gylch, felly cadwch y gofrestr yn fyr ac yn fyw, profwch y rheolaethau sy'n bwysig, ac amheuwch unrhyw rif sy'n gwneud i ansicrwydd edrych yn daclus.**

## Crynodeb a chymhelliant

Mae pob newid i wasanaeth yn cario risg, ac felly hefyd ei adael yn llonydd. [Rheoli risg](https://en.wikipedia.org/wiki/Risk_management) yw adnabod, gwerthuso, a blaenoriaethu risgiau, ac yna gweithredu cydlynol i'w lleihau, eu derbyn, eu trosglwyddo, neu eu hosgoi. Mae ITIL yn trin risg fel edefyn sy'n rhedeg drwy bob arfer: mae galluogi newid yn penderfynu faint o graffu sydd ei angen ar newid, mae parhad gwasanaeth yn cynllunio ar gyfer tarfu, ac mae diogelwch gwybodaeth yn amddiffyn rhag bygythiadau. Mae ffyrdd gweithio ystwyth a DevOps yn lleihau risg mewn ffordd wahanol. Mae newidiadau bach a gyflawnir yn barhaus, gydag adborth cyflym a'r gallu i wrthdroi, yn gwneud pob newid yn llai peryglus ac yn gwneud problemau'n weladwy yn gynt.

Mae'r ddwy olwg yn cwrdd yn y metrigau. Mae tîm sy'n cyflawni'n barhaus yn dal angen gwybod ei brif risgiau, pwy sy'n berchen arnynt, ac a yw'r rheolaethau y mae'n dibynnu arnynt yn gweithio. Mae swyddogaeth risg sy'n mynnu cymeradwyaeth drom yn dal angen tystiolaeth bod ei rheolaethau yn lleihau niwed ac nad ydynt yn arafu pobl yn unig. Mae'r pwnc hwn yn rhoi'r mesurau ar gyfer y ddau, ac mae'n adeiladu ar yr arferion a ddisgrifir yn y pynciau cyfagos ar ddiogelwch ac archwilio (gweler pwnc 8.1, Metrigau digwyddiadau diogelwch a gwendidau, a phwnc 8.3, Metrigau cydymffurfio ac archwilio).

Mae pedwar term yn ailadrodd.

- **Risg:** digwyddiad neu gyflwr ansicr sydd, os yw'n digwydd, yn effeithio ar amcanion. Mae ganddo achos, digwyddiad, a chanlyniad, a thebygolrwydd ac effaith a amcangyfrifir fel arfer, nas gwyddys.
- **Cofrestr risg:** y rhestr o risgiau a adnabuwyd gyda pherchnogion, graddfeydd, ac ymatebion. Mae [cofrestr risg](https://en.wikipedia.org/wiki/Risk_register) yn offeryn gwaith pan fo'n gyfredol ac yn cael ei darllen, ac yn arteffact cydymffurfio pan nad yw.
- **Rheolaeth:** gweithred neu fecanwaith sy'n lleihau risg, megis adolygiad, prawf awtomataidd, cymeradwyaeth, gwahanu dyletswyddau, neu rybudd monitro. Y set o reolaethau y mae sefydliad yn dibynnu arnynt yw ei system [rheolaeth fewnol](https://en.wikipedia.org/wiki/Internal_control).
- **Dangosydd risg allweddol (KRI):** mesur sy'n arwyddo newid yn lefel risg cyn i'r golled ddigwydd. Mae [dangosydd risg allweddol](https://en.wikipedia.org/wiki/Key_risk_indicator) yn ddefnyddiol pan fo'n arwain digwyddiad a phan fo rhywun yn gweithredu arno.

Mae gan feintioli risg wendidau adnabyddus. Mae [matrics risg](https://en.wikipedia.org/wiki/Risk_matrix), sy'n plotio tebygolrwydd yn erbyn effaith ar grid o gelloedd lliw, yn cael ei ddefnyddio'n eang ac yn cael ei feirniadu'n eang: mae graddfeydd yn oddrychol, gall risgiau gwahanol lanio yn yr un gell am resymau gwahanol, ac nid oes sail gadarn i rifyddeg lluosi sgorau trefnol. Mae digwyddiadau prin, difrifol, a ddisgrifir weithiau drwy [ddamcaniaeth alarch du](https://en.wikipedia.org/wiki/Black_swan_theory), yn arbennig o anodd eu graddio. Yr ymateb gonest yw defnyddio'r matrics fel cymorth sgwrs, dangos amrediadau, a'i gefnogi â thystiolaeth am reolaethau a digwyddiadau. Mae fframwaith y tair llinell amddiffyn, sy'n gwahanu'r timau sy'n berchen ar risg, y timau sy'n ei goruchwylio, a sicrwydd annibynnol, yn cynnig strwythur ar gyfer rolau, ac mae'n gweithio orau pan fo'r llinell gyntaf, y timau cyflawni a gweithrediadau, yn berchen ar ei risgiau mewn gwirionedd.

Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol i adrodd risg mewn ffordd benodol. Pan fo graddfa goch yn dod â chraffu, mae pobl yn graddio risgiau fel ambr. Pan fo risg a gaewyd yn llwyddiant, mae pobl yn cau risgiau heb eu trin (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Egwyddorion allweddol

- **Cadwch y gofrestr yn fyr ac yn gyfredol.** Mae ychydig o risgiau sy'n eiddo i rywun ac a adolygir yn well na channoedd nad ydynt.
- **Gwnewch i'r llinell gyntaf fod yn berchen ar ei risgiau.** Y bobl agosaf at y gwaith sy'n ei adnabod orau.
- **Profwch y rheolaethau y dibynnwch arnynt.** Gobaith yw rheolaeth nad yw erioed wedi'i phrofi.
- **Ffafriwch ddangosyddion arweiniol y mae rhywun yn gweithredu arnynt.** Addurn yw dangosydd heb gynllun ymateb.
- **Dangoswch amrediadau a thystiolaeth, nid manylder ffug.** Amcangyfrifon yw graddfeydd.
- **Lleihewch risg drwy wneud newid yn fach ac yn wrthdroadwy.** Mae cyflawni parhaus gyda gwrthdroi cyflym yn rheolaeth.
- **Siaradwch am risg heb fai.** Adrodd gonest yw deunydd crai yr arfer cyfan.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfredoldeb adolygu risg | Cyfran y risgiau agored a adolygwyd gan eu perchennog o fewn yr egwyl y cytunwyd arni | risgiau a adolygwyd o fewn yr egwyl / risgiau agored | canran | Dyddiadau adolygu cofrestr risg | Rheoli risg; gwelliant parhaus | Risgiau'n cael eu hadolygu mewn sgyrsiau cynllunio ac adolygu | Misol |
| Cwmpas perchnogaeth | Cyfran y risgiau agored gyda pherchennog cyfredol a enwyd a dderbyniodd berchnogaeth | risgiau gyda pherchennog cyfredol a gadarnhawyd / risgiau agored | canran | Cofrestr risg wedi'i huno â'r cyfeiriadur pobl | Rheoli risg | Risgiau sy'n eiddo i dîm ar yr ôl-groniad | Misol |
| Cwmpas profi rheolaethau | Cyfran y rheolaethau allweddol a brofwyd am weithrediad o fewn y cylch gofynnol | rheolaethau allweddol a brofwyd yn y cylch / rheolaethau allweddol | canran | Cofrestr rheolaethau a chofnodion profi | Rheoli risg; rheoli diogelwch gwybodaeth | Gwiriadau awtomataidd yn y biblinell | Chwarterol |
| Cyfradd effeithiolrwydd rheolaethau | Cyfran y rheolaethau a brofwyd a ganfuwyd yn gweithredu fel y'u cynlluniwyd | rheolaethau a ganfuwyd yn effeithiol / rheolaethau a brofwyd | canran | Canlyniadau profion | Rheoli risg; gwelliant parhaus | Profion awtomataidd yn pasio am y rhesymau cywir | Chwarterol |
| Amser ymateb i dorri KRI | Yr amser o ddangosydd risg allweddol yn croesi ei drothwy i benderfyniad a gofnodwyd | canolrif ac 85fed canradd oriau neu ddiwrnodau o'r torri i'r penderfyniad | oriau neu ddiwrnodau | Monitro KRI a log penderfyniadau | Rheoli risg; monitro a rheoli digwyddiadau | Ymateb i signal cynhyrchu | Misol |
| Amseroldeb cynllun trin | Cyfran y triniaethau risg a gwblhawyd erbyn eu dyddiad ymrwymedig | triniaethau a gwblhawyd erbyn y dyddiad / triniaethau sy'n ddyledus yn y cyfnod | canran | Cofrestr risg a thraciwr gweithredoedd | Rheoli risg; gwelliant parhaus | Gweithredoedd gwella wedi'u cyflawni | Chwarterol |
| Cyfran newid ar sail risg | Cyfran y newidiadau a gymeradwywyd drwy lwybrau ar sail risg gyda'r dystiolaeth reolaeth wedi'i hatodi | newidiadau a gymeradwywyd drwy lwybr ar sail risg gyda'r dystiolaeth ofynnol / newidiadau yn y cyfnod | canran | Cofnodion newid | Galluogi newid; rheoli risg | Newidiadau'n cael eu cyflawni'n barhaus gyda gwiriadau awtomataidd | Misol |

Diffiniwch yr egwyl adolygu a'r rhestr rheolaethau allweddol yn y gofrestr. Dim ond pan fo'r prawf yn archwilio tystiolaeth o weithrediad, nid y dyluniad yn unig, y mae rheolaeth wedi'i "phrofi". Mae cloc y KRI yn dechrau pan fo'r dangosydd yn croesi ei drothwy, fel y cofnodir gan y system fonitro, ac yn stopio ar benderfyniad a ysgrifennir i lawr, a all fod i weithredu, i dderbyn, neu i newid y trothwy. Eithriwch risgiau sy'n cael eu hymddeol o'r enwadur dim ond ar ôl penderfyniad cau a gofnodwyd.

## Argymhellion

### Cadwch y sgwrs risg yn fyw

**1. Cadwch y gofrestr yn fyr ac ysgrifennwch bob risg ar ffurf safonol.** Defnyddiwch frawddeg o'r ffurf "Oherwydd [achos], gall [digwyddiad] ddigwydd, gan arwain at [canlyniad]." Cyfyngwch y gofrestr i'r risgiau a fyddai'n newid penderfyniad neu gynllun. Unwch ddyblygion, holltwch rai amwys, ac ymddeolwch risgiau sydd wedi mynd heibio. Mae rhestr o ychydig ddwsinau o risgiau y mae pobl yn eu trafod yn werth mwy na mil nad oes neb yn eu darllen.

**2. Neilltuwch bob risg i berchennog a all weithredu.** Y perchennog yw'r person ag awdurdod dros yr ymateb, fel arfer yn y tîm cyflawni neu weithrediadau, nid y swyddogaeth risg. Cadarnhewch berchnogaeth gyda'r person, ac adolygwch hi pan fo pobl yn newid rolau. Mae cwmpas perchnogaeth yn mesur hyn, ac mae risg heb berchennog yn ganfyddiad.

**3. Adolygwch risgiau yn y sgyrsiau sydd eisoes yn digwydd.** Codwch y prif risgiau mewn cynllunio, adolygu, ac adolygiadau digwyddiadau, yn lle creu cyfarfod ar wahân. Mae'r arfer ystwyth o fyfyrio'n rheolaidd ar sut i ddod yn fwy effeithiol yn gartref naturiol i'r cwestiwn "beth allai ein brifo nesaf?" Cofnodwch y canlyniad yn y gofrestr.

**4. Pârwch raddfeydd â thystiolaeth ac amrediadau.** Ar gyfer pob risg bwysig, cofnodwch beth sy'n gwneud i chi feddwl ei bod yn debygol neu'n ddifrifol: digwyddiadau, methiannau agos, canlyniadau profion, hanes cyflenwyr. Rhowch amrediad ar gyfer tebygolrwydd ac effaith lle gallwch, a dywedwch pa mor ansicr ydych. Peidiwch â chyfuno sgorau trefnol yn un rhif a'i drin fel mesuriad. Os defnyddiwch fatrics, defnyddiwch ef i gychwyn trafodaeth (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

### Profwch y rheolaethau

**5. Enwch y rheolaethau allweddol a beth yw pwrpas pob un.** Ar gyfer pob risg fawr, rhestrwch yr ychydig reolaethau y dibynnwch arnynt, a sut y byddai methiant pob un yn edrych. Mae cofrestr rheolaethau sy'n rhestru cannoedd o weithgareddau bach yn cuddio'r rhai sy'n bwysig. Cynhwyswch reolaethau awtomataidd yn y biblinell, megis profion, gwiriadau polisi, a chlwydi cymeradwyo.

**6. Profwch weithrediad, nid dyluniad yn unig.** Mae adolygiad dylunio yn gofyn a fyddai'r rheolaeth yn gweithio pe bai'n cael ei gweithredu. Mae prawf gweithredu yn gofyn a gafodd ei gweithredu a'i bod yn gweithio yn y cyfnod, drwy archwilio samplau o dystiolaeth. Cynlluniwch brofion ar gylch sy'n cyfateb i'r risg, cofnodwch y canlyniadau, a dilynwch fethiannau. Lle bo modd, awtomeiddiwch y dystiolaeth, fel bod profi yn digwydd yn barhaus.

**7. Trinwch fethiannau rheolaeth fel gwybodaeth.** Prawf a fethodd yw'r system reolaeth yn gweithio. Cofnodwch y methiant, gofynnwch pam, a thrwsiwch yr achos. Dylid darllen y gyfradd effeithiolrwydd rheolaethau gyda'r dilyniant: mae methiannau a ganfuwyd ac a drwsiwyd yn gyflym yn iachach na chyfradd berffaith sy'n dod o brofi gwan.

**8. Defnyddiwch sicrwydd annibynnol lle mae'n ychwanegu gwerth.** Gall archwilio mewnol neu adolygydd annibynnol brofi'r rheolaethau y mae'r llinell gyntaf yn berchen arnynt a'r ail linell yn eu goruchwylio. Mae annibyniaeth yn amddiffyn rhag graddio eich gwaith eich hun. Cydlynwch fel na chaiff timau eu profi gan dri grŵp am yr un peth.

### Defnyddiwch ddangosyddion a phenderfyniadau'n dda

**9. Dewiswch ychydig o ddangosyddion arweiniol fesul risg fawr.** Dylai dangosydd risg allweddol fod yn rhad i'w fesur, wedi'i gysylltu ag achos, ac wedi'i baru â throthwy ac ymateb. Er enghraifft, mae oedran y gwendid critigol hynaf yn arwyddo risg diogelwch, ac mae cyfran y newidiadau sydd angen triniaeth frys yn arwyddo risg newid. Diffiniwch pwy sy'n edrych ar y dangosydd a beth y byddant yn ei wneud wrth y trothwy (gweler pwnc 8.1, Metrigau digwyddiadau diogelwch a gwendidau).

**10. Cofnodwch y penderfyniad ar bob torri.** Pan fo dangosydd yn croesi trothwy, mae rhywun yn penderfynu: gweithredu, derbyn, neu addasu'r trothwy. Ysgrifennwch y penderfyniad a'r rheswm. Mae hyn yn adeiladu hanes sy'n dangos a yw trothwyon wedi'u gosod yn dda ac a yw'r ymateb yn amserol.

**11. Gwnewch gymeradwyo ar sail risg yn rhagosodiad ar gyfer newid.** Mewn lleoliad cyflawni parhaus, amnewidiwch fyrddau cymeradwyo cyffredinol â llwybrau ar sail risg: gwiriadau awtomataidd ac adolygiad cymheiriaid ar gyfer newidiadau safonol, risg isel, ac adolygiad llawnach ar gyfer yr ychydig newidiadau risg uchel (gweler pwnc 4.3, Metrigau galluogi newid). Atodwch y dystiolaeth bod y rheolaethau wedi rhedeg. Mae hyn yn lleihau risg ac oedi gyda'i gilydd, oherwydd bod newidiadau bach gyda thystiolaeth awtomataidd yn fwy diogel na rhai mawr gydag arwydd llaw.

**12. Dysgwch o golledion a methiannau agos.** Ar ôl digwyddiadau a phethau agos, diweddarwch y gofrestr: a oedd y risg yno, a gafodd ei graddio'n dda, a weithiodd y rheolaeth? Defnyddiwch yr atebion i wella'r ddau. Y ddolen rhwng digwyddiadau a'r gofrestr sy'n cadw'r gofrestr yn onest (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfredoldeb adolygu risg | Marcio risgiau fel rhai a adolygwyd heb drafodaeth; newid yr egwyl | Samplu adolygiadau am sylwedd; egwyl sefydlog yn y gofrestr |
| Cwmpas perchnogaeth | Neilltuo perchnogion heb eu gwybodaeth; enwi person uwch heb awdurdod | Cadarnhau perchennog; gwirio y gall perchnogion weithredu ar yr ymateb |
| Cwmpas profi rheolaethau | Profi'r rheolaethau hawdd; cyfrif adolygiadau dylunio fel profion gweithredu | Rhestr rheolaethau allweddol wedi'i gosod gan ail barti; cofnodi math y prawf |
| Cyfradd effeithiolrwydd rheolaethau | Profi samplau bach; dewis samplau sy'n pasio | Dull samplu annibynnol ar y perchennog; cofnodi maint y sampl |
| Amser ymateb i dorri KRI | Newid y trothwy ar ôl torri; cofnodi penderfyniad heb gynnwys | Log newid trothwy; samplu cynnwys penderfyniadau |
| Amseroldeb cynllun trin | Gosod dyddiadau hawdd; ailddiffinio cwblhau | Dyddiadau y cytunwyd arnynt gyda'r perchennog wrth gymeradwyo; gwirio bod y raddfa risg wedi symud |
| Cyfran newid ar sail risg | Dosbarthu newidiadau fel risg isel i osgoi adolygu; atodi tystiolaeth na chynhyrchwyd gan reolaethau | Samplu dosbarthiad yn erbyn rheolau; tystiolaeth awtomataidd o'r biblinell |

Mae darlleniad iach yn gofrestr fer y mae pobl yn dadlau yn ei chylch, perchnogion sy'n adnabod eu risgiau, rheolaethau a brofwyd gyda rhai methiannau wedi'u canfod a'u trwsio, dangosyddion sy'n arwain penderfyniadau go iawn, a llai o gymeradwyaethau trwm ar gyfer newidiadau bach.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Matrics risg | Cyflym, gweledol, dechreuwr sgwrs | Goddrychol; manylder ffug; rhifyddeg drefnol |
| Amrediadau meintiol | Mwy gonest am ansicrwydd | Angen data a sgil; ymdrech |
| Byrddau cymeradwyo trwm | Rheolaeth weladwy | Araf; annog swpio newid |
| Gwiriadau awtomataidd ar sail risg | Cyflym a chyson | Angen peirianneg; gall gwiriadau awtomataidd fod yn anghywir |
| Swyddogaeth risg ganolog yn berchen ar risgiau | Cysondeb | Pell o'r gwaith; perchnogion heb ymgysylltu |
| Perchnogaeth llinell gyntaf | Gwybodaeth ac atebolrwydd | Ansawdd amrywiol; angen goruchwyliaeth |
| Profi rheolaethau cyfnodol | Effeithlon ar gyfer rheolaethau sefydlog | Colli drifft rhwng profion |
| Monitro rheolaethau parhaus | Tystiolaeth amserol | Ymdrech offer; sŵn |

Yr ateb pragmatig yw rhoi perchnogaeth i'r timau, cymhwyso goruchwyliaeth ganolog ysgafn a phrofi annibynnol, awtomeiddio tystiolaeth lle bo modd, a defnyddio graddfeydd fel anogwyr ar gyfer sgwrs.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth yw'r tair risg sydd fwyaf tebygol o niweidio'r gwasanaeth hwn yn y flwyddyn nesaf, a phwy sy'n berchen ar bob un?**
Gofynnwch i bob aelod ysgrifennu tair risg yn breifat, yna cymharwch. Mae'r gorgyffwrdd a'r gwahaniaethau ill dau yn llawn gwybodaeth. Dylai'r hwylusydd gofnodi pwy fyddai'n gweithredu ar bob risg. Cytunwch ar y tair uchaf a chadarnhewch berchnogion.

**2. Pa reolaeth yr ydym yn dibynnu fwyaf arni, a phryd wnaethon ni wirio ddiwethaf ei bod yn gweithio?**
Dewiswch reolaeth, megis rheol adolygu cod, copi wrth gefn, neu gam cymeradwyo. Olrheiniwch y tro diwethaf yr archwiliwyd tystiolaeth o'i gweithrediad. Os nad oes neb yn gwybod, cynlluniwch brawf. Mae'r sgwrs yn dangos y gwahaniaeth rhwng dyluniad a gweithrediad.

**3. Beth fyddai'n peri i ni newid graddfa o ambr i goch, a phwy fyddai'n sylwi?**
Trafodwch y dangosyddion a'r trothwyon. Gofynnwch a yw'r tîm erioed wedi israddio graddfa i osgoi sylw, a pha bwysau a achosodd hynny. Cytunwch pa dystiolaeth fyddai'n cyfiawnhau newid, a sut i wneud coch yn rhywbeth diogel i'w ddweud.

**4. Pa gymeradwyaethau sy'n arafu ein newidiadau heb leihau risg?**
Rhestrwch y cymeradwyaethau sydd eu hangen ar newid nodweddiadol, ac ar gyfer pob un gofynnwch pa risg y mae'n mynd i'r afael â hi ac a yw erioed wedi atal newid. Cynigiwch amnewid un gyda gwiriad awtomataidd. Cytunwch pa dystiolaeth fyddai'n dangos bod y newid yn ddiogel.

**5. Pan fethodd rheolaeth, sut y gwnaethom ddarganfod, a beth wnaethom?**
Cofiwch fethiant diweddar. A gafodd ei ganfod drwy brofi, drwy ddigwyddiad, neu gan archwilydd? Trafodwch sut mae dolen gryfach yn edrych. Cynhwyswch sut y trinnir y person a'i darganfu.

**6. Pa risgiau yr ydym wedi'u derbyn, a phryd ydym ni'n adolygu'r penderfyniad hwnnw?**
Rhestrwch risgiau a dderbyniwyd a'r dyddiadau adolygu. Gwiriwch fod gan bob un berchennog a rheswm. Risg a dderbyniwyd heb ddyddiad adolygu yw risg nad oes neb yn ei gwylio.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn berchen ar y rhan fwyaf o risg gweithredol. Dylent gynnal rhestr fer o'u risgiau eu hunain, eu trafod mewn cynllunio ac adolygu, ac adeiladu rheolaethau i mewn i'r biblinell fel bod tystiolaeth yn awtomatig. Maent yn elwa o lwybrau newid ar sail risg sy'n gadael i newidiadau risg isel lifo, a dylent fod yn onest am yr hyn a allai fynd o'i le.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn rhedeg y rheolaethau: copïau wrth gefn, monitro, adolygiadau mynediad, a phrofion adfer. Dylent gadw tystiolaeth o weithrediad, profi rheolaethau ar gylch rheolaidd, a chodi toriadau dangosydd yn gynnar. Maent yn dwyn cost rheolaethau trwm a dylent ddweud pa rai sy'n ychwanegu ychydig.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod yr awydd am risg ac yn penderfynu faint o ffrithiant sy'n dderbyniol. Dylent ofyn am restr fer o'r prif risgiau gyda pherchnogion a thystiolaeth, croesawu graddfeydd coch, ariannu profi rheolaethau, a chefnogi sicrwydd annibynnol. Dylai llywodraethu wirio bod y gofrestr yn adlewyrchu digwyddiadau a methiannau agos, ac ni ddylai wobrwyo adroddiadau sy'n edrych yn daclus.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn dwyn canlyniadau risgiau sy'n ymwireddu, ac yn aml yn gwybod amdanynt cyn y gofrestr. Dylai fod ganddynt ffordd i fflagio pryderon, a chael gwybod am risgiau sy'n effeithio arnynt, o fewn cyfyngiadau cyfrinachedd. Mae eu profiad o ddigwyddiadau a newidiadau yn dystiolaeth ar gyfer adolygiadau risg.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae grŵp digidol cwmni ynni cenedlaethol yn rhedeg bilio cwsmeriaid, ap symudol, ac integreiddiadau â gweithrediadau'r grid. Mae'r rhifau isod yn enghreifftiol.

Mae gan gofrestr risg y grŵp 340 o gofnodion, a lanhawyd ddiwethaf dair blynedd yn ôl. Cyfredoldeb adolygu risg yw 22 y cant, ac mae gan 61 o risgiau berchnogion sydd wedi gadael. Mae'r matrics yn dangos 85 o risgiau mewn coch, ac nid oes neb yn darllen yr adroddiad. Mae pennaeth newydd sicrwydd gwasanaeth yn cynnig ailosod. Gyda'r timau cyflawni mae hi'n torri'r gofrestr i'r risgiau a fyddai'n newid penderfyniad, gan orffen gyda 38. Mae hi'n neilltuo pob un i berchennog a enwyd yn y tîm a all weithredu, ac maent yn cadarnhau. Mae hi'n dewis 12 rheolaeth allweddol ac yn profi gweithrediad ar gyfer pob un, yn lle adolygu dyluniad. Mae pump yn methu: nid oedd dau adferiad copi wrth gefn erioed wedi'u profi, roedd un adolygiad mynediad wedi'i hepgor, a llofnodwyd dwy gymeradwyaeth newid heb dystiolaeth o brofi.

Mae'r tîm yn trwsio'r methiannau ac yn amnewid y bwrdd cymeradwyo newid ar gyfer newidiadau safonol â llwybrau ar sail risg. Profion awtomataidd ac adolygiad cymheiriaid yw'r rheolaethau, ac mae'r biblinell yn atodi'r dystiolaeth i'r cofnod newid. Mae pob risg fawr yn cael un neu ddau o ddangosyddion arweiniol gyda throthwyon ac ymatebion. Ar gyfer y risg o doriad bilio estynedig, y dangosyddion yw oedran y gwendid critigol hynaf a nifer yr adferiadau copi wrth gefn a fethodd yn y chwarter. Mae'r chwarter cyntaf yn dangos perchnogion yn cadarnhau pob un o'r 38 risg, cyfredoldeb adolygu o 91 y cant, cyfradd effeithiolrwydd rheolaethau o 7 o 12 ar y prawf cyntaf a 12 o 12 ar ôl trwsio, ac amser ymateb canolrifol i dorri KRI o 2 ddiwrnod. Cyfran y newidiadau drwy lwybrau ar sail risg yw 64 y cant.

Mae'r prif swyddog risg yn gofyn i nifer y risgiau coch ostwng hanner o fewn blwyddyn. Mae pennaeth sicrwydd gwasanaeth yn cynnig olrhain amseroldeb cynlluniau trin ac effeithiolrwydd rheolaethau, ac yn esbonio y gall cyfrif risgiau coch ostwng drwy ail-raddio, ac y byddai'n well ganddi weld graddfeydd coch gonest. Cofnodir y penderfyniad, ac mae adroddiad y chwarter nesaf yn cynnwys y penderfyniadau a samplwyd y tu ôl i bob israddio.

## Y golwg fesul sector

**Busnes newydd.** Mae risgiau yn ymwneud gan mwyaf â rhedeg allan o arian, colli pobl allweddol, a thoriad mawr. Cadwch restr un dudalen o'r pump uchaf, adolygwch hi'n fisol, a phrofwch gopïau wrth gefn ac adferiadau. Adeiladwch reolaethau i mewn i'r biblinell o'r dechrau, gan eu bod yn rhatach na'u hôl-osod.

**Busnes bach.** Mae llond llaw o risgiau yn dominyddu: dibyniaeth ar berson allweddol, un cyflenwr, ransomware, a cholli data. Cadwch restr fer gyda pherchnogion, profwch adferiadau, a chadwch yswiriant a manylion cyswllt yn gyfredol. Gwrthwynebwch fframweithiau trwm, a benthyciwch oddi wrthynt yr hyn sy'n ffitio.

**Menter fawr.** Mae graddfa yn galw am dacsonomi cyffredin, offer cofrestr ysgafn, a'r tair llinell amddiffyn ar waith. Gwnewch i'r llinell gyntaf fod yn berchen ar ei risgiau, cadwch yr ail linell yn fach ac yn gynghorol, a gwnewch brofi annibynnol yn effeithlon. Osgowch brofion dyblyg ar draws archwilio, risg, a chydymffurfio.

**Llywodraeth a'r sector cyhoeddus.** Mae rheoli risg yn aml yn ddyletswydd ffurfiol gyda fframweithiau safonol, pwyllgorau archwilio, ac adrodd cyhoeddus. Alinio â'r fframwaith gofynnol, dogfennwch ddatganiadau awydd am risg, a chadwch dystiolaeth. Mae atebolrwydd cyhoeddus yn gwneud graddfeydd coch gonest yn fwy gwerthfawr, a hefyd yn anoddach (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y costau yw amser perchnogion i adolygu risgiau, yr ymdrech i ddiffinio rheolaethau allweddol a'u profi, offer ar gyfer y gofrestr a monitro dangosyddion os nad yw'n bresennol eisoes, a chost sicrwydd annibynnol. Mae awtomeiddio casglu tystiolaeth yn cymryd ymdrech peirianneg ac yna'n lleihau cost gylchol.

Yr enillion yw llai o syrpreisys, cymeradwyo newid cyflymach ac ysgafnach, a sicrwydd mwy credadwy. Mae cofrestr wedi'i thocio a llwybrau newid ar sail risg yn arbed amser y byddai cyrff cymeradwyo mawr wedi'i fwyta. Mae profion rheolaeth a fethodd a ganfuwyd cyn digwyddiad yn atal colledion sy'n anodd eu prisio. Adeiladwch yr achos o'ch data eich hun: yr amser a dreulir fesul cymeradwyaeth newid cyn ac ar ôl, nifer y methiannau rheolaeth a ganfuwyd drwy brofi o'i gymharu â'r rhai a ganfuwyd gan ddigwyddiadau neu archwilwyr, a chost digwyddiadau'r gorffennol y byddai rheolaeth wedi'u hatal. Osgowch ddyfynnu ystadegau colled diwydiant heb ffynhonnell a dull y gellir eu holrhain.

## Gwrthbatrymau a maglau

- **Cofrestr sy'n tyfu am byth.** Nid oes neb yn ei darllen. Tociwch hi i'r risgiau sy'n bwysig.
- **Graddfeydd heb dystiolaeth.** Barn mewn lliw ydyn nhw. Atodwch dystiolaeth ac amrediadau.
- **Perchnogion mewn enw yn unig.** Mae'r risg yn eistedd gyda rhywun na all weithredu. Cadarnhewch berchnogaeth gyda'r bobl iawn.
- **Profi dyluniad a'i alw'n sicrwydd.** Efallai na weithiodd rheolaeth a allai weithio. Profwch weithrediad.
- **Adrodd cyfrif risgiau coch yn unig.** Mae cyfrifon yn disgyn drwy ail-raddio. Edrychwch ar driniaethau a chanlyniadau rheolaethau.
- **Byrddau cymeradwyo ar gyfer pob newid.** Maent yn arafu newidiadau bach ac yn dysgu swpio. Defnyddiwch lwybrau ar sail risg.
- **Cosbi graddfeydd coch.** Yna cuddir risgiau. Gwobrwywch rybudd cynnar.
- **Diwylliannau risg a chyflawni ar wahân.** Mae gwaith risg a wneir i dimau, nid gyda hwy, yn cynhyrchu theatr gydymffurfio.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Cofrestr a pherchnogaeth | Rhestr hir, hen | Cofrestr yn bodoli, wedi'i pherchnogi'n rhannol | Cofrestr fer gyda pherchnogion llinell gyntaf wedi'u cadarnhau a dyddiadau adolygu | Adolygiadau mewn sgyrsiau tîm; tystiolaeth ac amrediadau wedi'u hatodi | Risgiau wedi'u rhannu ar draws timau a chyflenwyr gyda chyd-berchnogion |
| Rheolaethau | Tybir eu bod yn gweithio | Dyluniad wedi'i ddogfennu | Rheolaethau allweddol wedi'u henwi; profion gweithredu ar gylch | Methiannau wedi'u dilyn; tystiolaeth wedi'i hawtomeiddio lle bo modd | Monitro rheolaethau parhaus gyda goruchwyliaeth ddynol a sicrwydd annibynnol |
| Penderfyniadau a newid | Cymeradwyaethau gan bwyllgor | Rhai newidiadau safonol wedi'u rhag-gymeradwyo | Llwybrau ar sail risg gyda thystiolaeth wedi'i hatodi | Dangosyddion gyda throthwyon a phenderfyniadau a gofnodwyd; llwybrau wedi'u tiwnio o ganlyniadau | Penderfyniadau risg wedi'u mewnosod mewn piblinellau ar draws y sefydliad a'r gadwyn gyflenwi |

## Rhestr wirio

- [ ] Mae'r gofrestr yn fyr, gyda risgiau wedi'u hysgrifennu ar ffurf achos, digwyddiad, a chanlyniad.
- [ ] Mae gan bob risg berchennog llinell gyntaf a gadarnhawyd a all weithredu.
- [ ] Adolygir risgiau o fewn sgyrsiau rheolaidd y tîm.
- [ ] Enwir rheolaethau allweddol a'u profi am weithrediad ar gylch a nodwyd.
- [ ] Logir methiannau rheolaeth, eu hesbonio, a'u trwsio.
- [ ] Mae gan bob risg fawr un neu ddau o ddangosyddion arweiniol gyda throthwyon ac ymatebion.
- [ ] Cofnodir penderfyniadau wrth dorri dangosyddion.
- [ ] Mae llwybrau newid ar sail risg yn bodoli, gyda thystiolaeth wedi'i hatodi'n awtomatig lle bo modd.
- [ ] Mae gan risgiau a dderbyniwyd berchennog, rheswm, a dyddiad adolygu.
- [ ] Mae digwyddiadau a methiannau agos yn diweddaru'r gofrestr.

## Anogwyr AI

**Ailysgrifennwch risgiau ar ffurf safonol.**

```text
Dyma [nifer] o gofnodion o'n cofrestr risg: [gludwch, gyda manylion sensitif
wedi'u tynnu]. Ailysgrifennwch bob un ar y ffurf "Oherwydd [achos], gall
[digwyddiad] ddigwydd, gan arwain at [canlyniad]." Fflagiwch gofnodion sy'n
amwys, wedi'u dyblygu, neu'n faterion sydd eisoes wedi digwydd mewn gwirionedd.
Awgrymwch pa rai y gellid eu huno neu eu hymddeol. Peidiwch â'u graddio.
Rhestrwch eich rhagdybiaethau a'r hyn i'w gadarnhau gyda'r perchnogion.
```

**Dyluniwch brawf rheolaeth.**

```text
Ar gyfer y rheolaeth [disgrifiwch, er enghraifft adolygiad mynediad chwarterol
ar gyfer y system filio], dyluniwch brawf gweithredu. Cynhwyswch pa dystiolaeth
i'w harchwilio, sut i ddewis sampl heb duedd, beth sy'n cyfrif fel pasio neu
fethu, sut i gofnodi canlyniadau, a sut i awtomeiddio casglu tystiolaeth dros
amser. Peidiwch â thybio offer penodol. Rhestrwch eich rhagdybiaethau a risgiau
yn nyluniad y prawf.
```

**Cynigiwch ddangosyddion arweiniol ar gyfer risg.**

```text
Risg: [disgrifiwch ar ffurf achos, digwyddiad, canlyniad]. Cynigiwch hyd at dri
dangosydd arweiniol sy'n rhad i'w mesur ac wedi'u cysylltu â'r achos, gydag
ymateb a awgrymir i dorri trothwy a'r ffordd y gallai pob dangosydd gamarwain.
Peidiwch â dyfeisio gwerthoedd trothwy; disgrifiwch sut y dylem eu graddnodi o'n
data ein hunain. Rhestrwch eich rhagdybiaethau.
```

**Adolygwch broses gymeradwyo newid.**

```text
Ein proses gymeradwyo newid ar gyfer [math o newid] yw: [disgrifiwch gamau,
cymeradwywyr, ac oediadau nodweddiadol]. Nodwch gamau sy'n ychwanegu oedi heb
leihau risg, cynigiwch ddewis amgen ar sail risg gyda gwiriadau a thystiolaeth
awtomataidd, a dywedwch beth ddylem ei fesur i wybod a aeth risg i fyny neu i
lawr. Peidiwch â honni canlyniadau ymchwil. Rhestrwch eich rhagdybiaethau a
phenderfyniadau sydd angen mewnbwn arweinyddiaeth.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig risg neu reolaeth.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig risg yn cario ei ffordd o chwarae'r system, ei reilen warchod, a'i reol tystiolaeth.

## Pwyntiau allweddol

- Cadwch y gofrestr risg yn fyr, yn eiddo i'r timau a all weithredu, ac yn cael ei hadolygu mewn sgyrsiau sy'n bodoli eisoes.
- Profwch fod rheolaethau allweddol yn gweithredu, trinwch fethiannau fel gwybodaeth ddefnyddiol, ac awtomeiddiwch y dystiolaeth.
- Defnyddiwch ychydig o ddangosyddion arweiniol gyda throthwyon, ymatebion, a phenderfyniadau a gofnodwyd.
- Amnewidiwch gymeradwyo cyffredinol â llwybrau newid ar sail risg a gefnogir gan dystiolaeth awtomataidd.
- Dangoswch amrediadau a thystiolaeth yn lle manylder ffug, a defnyddiwch fatricsau i gychwyn sgyrsiau.
- Gwnewch graddfeydd coch yn ddiogel i'w rhoi, a dysgwch o golledion a methiannau agos.

## Cyfeiriadau a darllen pellach

1. ISO 31000, *Risk management: Guidelines*, International Organization for Standardization.
2. Committee of Sponsoring Organizations of the Treadway Commission, *Enterprise Risk Management: Integrating with Strategy and Performance*, 2017.
3. Hubbard, D. W., *The Failure of Risk Management: Why It's Broken and How to Fix It*, 2nd ed., Wiley, 2020.
4. Cox, L. A., "What's wrong with risk matrices?" *Risk Analysis*, 28(2), 2008.
5. Taleb, N. N., *The Black Swan: The Impact of the Highly Improbable*, Random House, 2007.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Risk management](https://en.wikipedia.org/wiki/Risk_management).
9. Wikipedia, [Risk register](https://en.wikipedia.org/wiki/Risk_register).
10. Wikipedia, [Internal control](https://en.wikipedia.org/wiki/Internal_control).
11. Wikipedia, [Key risk indicator](https://en.wikipedia.org/wiki/Key_risk_indicator).
12. Wikipedia, [Risk matrix](https://en.wikipedia.org/wiki/Risk_matrix).
13. Wikipedia, [Black swan theory](https://en.wikipedia.org/wiki/Black_swan_theory).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
