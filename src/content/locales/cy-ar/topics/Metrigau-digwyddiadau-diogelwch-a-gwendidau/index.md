# Metrigau digwyddiadau diogelwch a gwendidau

**Mae diogelwch yn rhan o gyflawni a rhedeg gwasanaeth yn barhaus, felly mesurwch am ba hyd y mae pobl yn aros yn agored, pa mor gyflym y cyfyngwch yr hyn sy'n mynd o'i le, a pha mor barod yw cydweithwyr i godi llaw, a pheidiwch byth â throi camgymeriad yn rheswm dros fai.**

## Crynodeb a chymhelliant

Mae pob gwasanaeth yn cario gwendidau, a bydd rhai ohonynt yn cael eu defnyddio yn ei erbyn. Mae [gwendid](https://en.wikipedia.org/wiki/Vulnerability_(computing)) yn wendid mewn meddalwedd, caledwedd, cyfluniad, neu broses y gellir ei ecsbloetio i niweidio cyfrinachedd, cyfanrwydd, neu argaeledd system. Digwyddiad lle mae'r niwed hwnnw'n digwydd neu'n cael ei fygwth yn gredadwy yw digwyddiad diogelwch. Mae metrigau yn y maes hwn yn ceisio ateb dau gwestiwn. Pa mor agored ydym ni, a pha mor gyflym y byddwn yn dod o hyd i broblemau, yn eu trwsio, ac yn adfer ohonynt?

Mae'r traddodiad ystwyth a DevOps yn trin diogelwch fel eiddo cyflawni parhaus, nid fel clwyd ar ei ddiwedd. Mae [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps) yn ymestyn syniad DevOps drwy adeiladu gwiriadau diogelwch i mewn i'r biblinell a rhannu cyfrifoldeb rhwng datblygu, diogelwch, a gweithrediadau. Mae ITIL, drwy ei arfer rheoli diogelwch gwybodaeth, yn cyfrannu polisi, meddwl ar sail risg, a'r cysylltiad â rheoli digwyddiadau, newid, ac asedau. Mae'r ddau yn cwrdd yn y gwaith dyddiol: mae diweddariadau dibyniaeth yn cyrraedd fel newidiadau cyffredin, mae canfyddiadau gwendid yn dod yn eitemau ôl-groniad gyda pherchnogion, a thrinnir digwyddiadau gyda'r un adolygiadau di-fai ag unrhyw un arall (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu).

Mae metrigau diogelwch yn agored i ystumiadau penodol.

- **Mae cyfrif canfyddiadau yn gwobrwyo peidio ag edrych.** Mae tîm sy'n sganio llai yn dod o hyd i lai. Gall cyfrif crai o wendidau ddisgyn oherwydd bod sganiwr wedi colli mynediad, nid oherwydd bod unrhyw beth wedi gwella.
- **Mae sgorau difrifoldeb yn fewnbynnau, nid gwirioneddau.** Mae'r [System Sgorio Gwendidau Cyffredin](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System) (CVSS) yn rhoi sgôr difrifoldeb i wendid yn haniaethol, ac mae cofrestrau megis [Gwendidau ac Amlygiadau Cyffredin](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures) (CVE) yn rhoi dynodwyr iddynt. Mae a yw gwendid yn bwysig i chi yn dibynnu ar a ellir ei gyrraedd yn eich amgylchedd, a yw ecsbloetiad yn cael ei ddefnyddio, a faint o werth sydd i'r ased yr effeithir arno. Mae sgôr difrifoldeb crai a ddefnyddir ar ei ben ei hun yn anfon ymdrech i'r mannau anghywir.
- **Mae bai yn atal adroddiadau.** Os cosbir pobl am glicio dolen neu am adrodd digwyddiad a achoswyd ganddynt, mae adroddiadau'n stopio, ac mae amlygiad yn tyfu'n anweledig. Mae diogelwch seicolegol yn rheolaeth ddiogelwch.
- **Mae mesurau amser yn cuddio'r gynffon.** Gall amser canolrifol i glytio edrych yn iach tra bo llond llaw o systemau critigol yn eistedd yn agored am fisoedd.

Mae'r pwnc hwn yn rhoi'r prif fesurau, gyda'u diffiniadau, eu ffyrdd o chwarae'r system, a rheiliau gwarchod. Mae'n adeiladu ar y cofnodion asedau a chyfluniad o'r rhan flaenorol, oherwydd ni allwch glytio na sganio'r hyn na allwch ddod o hyd iddo (gweler pwnc 7.1, Metrigau rheoli asedau TG, a phwnc 7.4, Metrigau ansawdd cyfluniad a CMDB). Rhybudd: canllaw mesur yw hwn, nid llawlyfr diogelwch. Dewiswch reolaethau gyda gweithwyr diogelwch proffesiynol cymwys, a dilynwch y safonau a'r dyletswyddau cyfreithiol sy'n berthnasol i chi, megis ISO/IEC 27001 a chanllawiau asiantaethau cenedlaethol.

Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol yn sydyn i ddiogelwch. Pan fo metrig yn dod yn darged, mae pobl yn ail-ddosbarthu canfyddiadau, yn eithrio asedau o sganiau, ac yn cau tocynnau heb drwsio'r achos (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Egwyddorion allweddol

- **Mesurwch amser amlygiad yn ogystal â chyfrifon.** Mae pa mor hir y mae gwendid yn aros ar agor yn bwysicach na faint a ganfyddir.
- **Blaenoriaethwch yn ôl cyd-destun.** Cyfunwch ddifrifoldeb, ecsbloetiadwyedd, hygyrchedd, a gwerth ased.
- **Gwiriwch gwmpas yn gyntaf.** Cysur ffug yw adroddiad glân o sgan a fethodd hanner yr ystad.
- **Adeiladwch ddiogelwch i mewn i'r biblinell.** Gwnewch ddewisiadau diogel yn rhagosodiad hawdd, a rhowch adborth cyflym.
- **Cydweithiwch ar draws disgyblaethau.** Mae diogelwch, datblygu, a gweithrediadau yn berchen ar ganlyniadau gyda'i gilydd.
- **Gwnewch adrodd yn ddiogel.** Mae trin camgymeriadau'n ddi-fai yn cadw'r signalau'n llifo.
- **Cyfanredwch ddata ymddygiad dynol.** Adroddwch batrymau grŵp a pheidiwch byth ag enwi na graddio unigolion.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Ffenestr amlygiad | Yr amser y mae gwendid hysbys yn aros ar agor ar asedau o fewn cwmpas, yn ôl band blaenoriaeth | canolrif ac 85fed canradd diwrnodau o'r dyddiad y gwyddys ei fod yn berthnasol i'r ased i'r dyddiad y gwirir atgyweiriad neu liniaru a dderbyniwyd | diwrnodau | Sganiwr gwendidau, system tocynnau, cofnodion newid | Rheoli diogelwch gwybodaeth; rheoli problemau | Amser i drwsio diffyg yn yr ôl-groniad | Wythnosol |
| Cydymffurfio â chlytiau | Cyfran yr asedau o fewn cwmpas sy'n bodloni ffenestr y polisi clytio ar gyfer eu dosbarth | asedau a glytiwyd o fewn ffenestr y polisi / asedau o fewn cwmpas yr oedd angen clytiau arnynt yn y cyfnod | canran | Offer rheoli pwyntiau terfyn a gweinyddion, cofrestr asedau | Rheoli diogelwch gwybodaeth; rheoli rhyddhau a defnyddio | Dibyniaethau'n cael eu cadw'n gyfredol yn y biblinell | Wythnosol |
| Canfyddiadau critigol hwyr | Cyfrif ac oedran canfyddiadau blaenoriaeth critigol sydd wedi mynd heibio eu terfyn polisi | nifer y canfyddiadau critigol y tu hwnt i'r terfyn; oedran yr hynaf | cyfrif; diwrnodau | System rheoli gwendidau | Rheoli diogelwch gwybodaeth; rheoli risg | Diffygion diogelwch yn mynd y tu hwnt i'r terfyn y cytunwyd arno | Wythnosol |
| Cwmpas sganio | Cyfran yr asedau o fewn cwmpas a aseswyd o fewn yr egwyl ofynnol | asedau a sganiwyd yn llwyddiannus yn yr egwyl ddiwethaf / asedau o fewn cwmpas | canran | Adroddiadau sganiwr wedi'u huno â'r gofrestr asedau | Rheoli diogelwch gwybodaeth; rheoli asedau TG | Gwiriadau piblinell yn rhedeg ar bob adeiladu | Wythnosol |
| Amser i gyfyngu | Yr amser o ganfod digwyddiad diogelwch a gadarnhawyd i gyfyngu | canolrif ac 85fed canradd oriau o ganfod i gyfyngu | oriau | Cofnodion digwyddiadau | Rheoli digwyddiadau; rheoli diogelwch gwybodaeth | Amser i adfer gwasanaeth ar ôl methiant | Fesul digwyddiad, wedi'i adolygu'n fisol |
| Oedran eithriad risg | Oedran eithriadau risg a dderbyniwyd, a'r gyfran sydd wedi mynd heibio eu dyddiad adolygu | diwrnodau ers cymeradwyo; eithriadau wedi mynd heibio'r dyddiad adolygu / eithriadau agored | diwrnodau; canran | Cofrestr eithriadau | Rheoli risg; rheoli diogelwch gwybodaeth | Adolygu dyled dechnegol | Misol |
| Cyfradd adroddiadau diogelwch | Cyfran y digwyddiadau amheus a adroddwyd gan staff o'u cymharu â digwyddiadau diogelwch a gadarnhawyd, fel dangosydd o ddiwylliant adrodd | adroddiadau gan staff yn y cyfnod / digwyddiadau amheus a gadarnhawyd yn y cyfnod, gyda thuedd ar lefel grŵp | cymhareb | Blwch post diogelwch, cofnodion digwyddiadau | Rheoli diogelwch gwybodaeth; rheoli digwyddiadau | Codi rhwystrau'n agored | Misol |

Nodwch y bandiau blaenoriaeth a'r ffenestri polisi yn y gofrestr. Mae ffenestr amlygiad yn dechrau pan wyddys bod y gwendid yn berthnasol i'r ased, sef yr hwyraf o ddatgelu a'r amser y gwyddys bod yr ased yn rhedeg y gydran yr effeithir arni, ac mae'n stopio ar adferiad wedi'i wirio neu liniaru dogfennedig, cyfyngedig o ran amser. Mae amser i gyfyngu yn dechrau ar ganfod, nid ar y rhybudd cyntaf na ddarllenodd neb. Eithriwch ganfyddiadau prawf a phositifau ffug dim ond ar ôl adolygu. Mae cyfradd adroddiadau diogelwch yn disgrifio grwpiau a thueddiadau, byth unigolion.

## Argymhellion

### Gwybyddwch eich ystad a'ch amlygiad

**1. Dechreuwch o'r cofnodion asedau a dibyniaethau.** Mae sganiau, clytio, a pherchnogaeth i gyd yn dibynnu ar wybod beth sy'n bodoli. Cysylltwch bob canfyddiad ag ased, perchennog, a gwasanaeth, a mesurwch gwmpas sganio yn erbyn y gofrestr. Lle mae'r cwmpas yn isel, trwsiwch hynny cyn darllen y canfyddiadau. Mae ased heb ei sganio yn anhysbys, sy'n waeth na gwendid hysbys.

**2. Lleihewch yr [arwyneb ymosod](https://en.wikipedia.org/wiki/Attack_surface) yn gyntaf.** Tynnwch yr hyn nad oes ei angen: gwasanaethau nas defnyddir, porthladdoedd agored, hen gyfrifon, amgylcheddau a anghofiwyd. Mae popeth a ymddeolwch yn rhywbeth nad oes rhaid i chi ei glytio. Olrheiniwch gyfrif gwasanaethau sy'n wynebu'r rhyngrwyd a chyfrifon segur fel dangosyddion syml, ac adolygwch hwy gyda pherchnogion.

**3. Cynhwyswch eich cadwyn gyflenwi meddalwedd.** Mae gwasanaethau modern yn dibynnu ar lawer o gydrannau. Mae'r [gadwyn gyflenwi meddalwedd](https://en.wikipedia.org/wiki/Software_supply_chain) yn cynnwys llyfrgelloedd, offer adeiladu, delweddau cynhwysydd, a'r cyflenwyr y tu ôl iddynt. Defnyddiwch y biliau deunyddiau meddalwedd a ddisgrifiwyd yn gynharach i ddod o hyd i ble defnyddir cydran agored i niwed (gweler pwnc 7.2, Metrigau asedau meddalwedd a thrwyddedau), a chynhwyswch ganfyddiadau dibyniaeth yn yr un mesurau â chanfyddiadau seilwaith.

### Blaenoriaethwch a thrwsiwch

**4. Trefnwch yn ôl cyd-destun, nid sgôr difrifoldeb yn unig.** Cyfunwch ddifrifoldeb CVSS â pha un a wyddys bod ecsbloetiad yn cael ei ddefnyddio, a ellir cyrraedd y gydran agored i niwed, a phwysigrwydd yr ased. Mae rhestrau cyhoeddus o wendidau y gwyddys eu bod yn cael eu hecsbloetio yn helpu gyda'r ffactor cyntaf. Ysgrifennwch y rheolau trefnu, adolygwch hwy, a chofnodwch y rheswm pan gaiff eitem difrifoldeb uchel ei blaenoriaethu'n is.

**5. Gosodwch ffenestri polisi yn ôl band ac adroddwch yn eu herbyn.** Ar gyfer pob band blaenoriaeth, cytunwch ar amser targed i adfer neu liniaru. Adroddwch y gyfran o fewn y ffenestr, y canolrif a'r 85fed canradd o amlygiad, a'r eitem agored hynaf. Targedau ar gyfer sgwrs yw ffenestri, ac mae'r eitemau hynaf yn haeddu sylw gan eu bod yn dangos ble mae'r broses yn methu (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

**6. Trinwch glytio fel newid cyffredin, mynych.** Y broses glytio fwyaf diogel yw un sy'n rhedeg yn aml ac sy'n ddiflas. Mae diweddariadau bach, mynych yn haws i'w profi a'u gwrthdroi na rhai mawr, prin, a gall piblinellau awtomataidd eu cymhwyso'n barhaus. Defnyddiwch y dull galluogi newid ar gyfer cymeradwyo ar sail risg, a chadwch lwybr brys ar gyfer atgyweiriadau brys (gweler pwnc 4.3, Metrigau galluogi newid).

**7. Gwnewch eithriadau yn weladwy ac yn fyrhoedlog.** Weithiau nid yw atgyweiriad yn bosibl. Cofnodwch eithriad gyda rheswm, rheolaeth gydadferol, perchennog, a dyddiad adolygu, ac adroddwch oedran eithriadau. Mae eithriadau heb ddyddiadau adolygu yn dod yn barhaol, ac eithriadau parhaol yw'r gofrestr risg wirioneddol.

### Ymatebwch a dysgwch

**8. Ymarferwch ymateb i ddigwyddiadau.** Mae [rheoli digwyddiadau diogelwch cyfrifiadurol](https://en.wikipedia.org/wiki/Computer_security_incident_management) yn cwmpasu paratoi, canfod, cyfyngu, dileu, adfer, a gwersi a ddysgwyd. Ymarferwch gydag ymarferion, cofnodwch amser i gyfyngu o ganfod, ac adolygwch bob digwyddiad sylweddol yn ddi-fai. Mae strwythur trin digwyddiadau diogelwch yn debyg i un trin digwyddiadau mawr (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

**9. Mesurwch gyfyngu, nid canfod yn unig.** Mae offer canfod yn cynhyrchu rhybuddion, ac mae'r gwerth yn gorwedd yn yr hyn sy'n digwydd nesaf. Olrheiniwch am ba hyd y mae digwyddiadau a gadarnhawyd yn cymryd i gyfyngu ac adfer, a pha gyfran a ganfuwyd gan eich monitro eich hun yn erbyn y rhai a adroddwyd gan bobl o'r tu allan. Mae cyfran gynyddol o ddigwyddiadau a ganfyddir yn fewnol yn arwydd o welededd gwell.

**10. Dysgwch o fethiannau agos.** Mae e-bost gwe-rwydo a adroddwyd ac a rwystrwyd, neu wendid a ganfuwyd gan gydweithiwr cyn ymosodwr, yn wers am ddim. Cofnodwch ac adolygwch y rhain fel y byddech yn ei wneud i ddigwyddiad, a diolchwch i'r person a adroddodd. Mae cyfradd adroddiadau diogelwch yn ddangosydd iechyd o'r diwylliant hwnnw, a dylai godi gydag ymddiriedaeth.

### Adeiladwch y diwylliant a'r biblinell

**11. Rhowch wiriadau lle mae datblygwyr yn gweithio.** Rhedwch ddadansoddiad dibyniaeth a statig yn yr adeiladu, rhowch adborth yn y cais tynnu, a methwch adeiladau dim ond ar faterion y mae'r tîm yn cytuno eu bod yn rhwystrau. Mae adborth cyflym, perthnasol yn cael ei drwsio. Mae llifogydd o ganfyddiadau gwerth isel yn cael ei anwybyddu. Olrheiniwch yr amser trwsio ar gyfer canfyddiadau piblinell, a thiwniwch y rheolau gyda'r timau (gweler pwnc 2.7, Metrigau ceisiadau tynnu ac adolygu cod).

**12. Hyfforddwch a phrofwch heb gywilyddio.** Gall ymarferion ymwybyddiaeth, megis gwe-rwydo efelychiedig, adeiladu sgiliau, a gallant hefyd niweidio ymddiriedaeth pan ddefnyddir canlyniadau i enwi neu ddisgyblu unigolion. Adroddwch ganlyniadau cyfanredol yn unig, canolbwyntiwch ar faint sy'n adrodd negeseuon amheus, ac esboniwch y diben. Os yw ymarfer yn gwneud i staff deimlo eu bod wedi'u twyllo, newidiwch ef.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Ffenestr amlygiad | Cau canfyddiadau heb wirio; newid y dyddiad dechrau; ail-ddosbarthu difrifoldeb | Cam gwirio gan rywun y tu allan i'r tîm trwsio; rheol dyddiad dechrau yn y gofrestr; log newid difrifoldeb |
| Cydymffurfio â chlytiau | Eithrio asedau anodd eu clytio o'r cwmpas; cyfrif clwt fel un a gymhwyswyd pan na ailgychwynnwyd y system | Logio newidiadau cwmpas; gwirio'r fersiwn a osodwyd o'r ased, nid y tocyn |
| Canfyddiadau critigol hwyr | Hollti canfyddiadau neu eu huno; israddio difrifoldeb | Cyfrif yn ôl gwendid ac ased unigryw; adolygu pob newid difrifoldeb |
| Cwmpas sganio | Sganio set gulach; cyfrif sgan a fethodd ddilysu | Cwmpas yn erbyn y gofrestr asedau; ansawdd sgan (wedi'i ddilysu, cyflawn) |
| Amser i gyfyngu | Dechrau'r cloc yn hwyrach; datgan cyfyngu'n gynnar | Cloc yn dechrau ar y signal canfod cyntaf; gwirio cyfyngu gyda thystiolaeth |
| Oedran eithriad risg | Adnewyddu eithriadau'n awtomatig; hollti eithriadau i leihau oedran | Adolygu adnewyddiadau eithriad gyda rheswm; cyfyngu adnewyddiadau heb dystiolaeth newydd |
| Cyfradd adroddiadau diogelwch | Annog adroddiadau gwerth isel; atal adroddiadau i wella rhifau eraill | Ansawdd adroddiadau; darllen y sylwadau; arolwg ar a yw pobl yn teimlo'n ddiogel yn adrodd |

Mae darlleniad iach yn gwmpas sganio uchel, cynffon amlygiad fer sy'n crebachu, eithriadau gonest gyda dyddiadau adolygu, digwyddiadau'n cael eu cyfyngu'n gyflym a'u canfod yn fewnol yn amlach, a staff sy'n dweud wrthych am ddigwyddiadau amheus heb ofn.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Blaenoriaethu ar sgôr difrifoldeb yn unig | Syml, cyson | Anwybyddu cyd-destun; anfon ymdrech i'r mannau anghywir |
| Blaenoriaethu ar sail cyd-destun | Canolbwyntio ar risg wirioneddol | Angen data a barn |
| Ffenestri clytio sefydlog | Disgwyliadau clir | Gall orfodi newidiadau brysiog, peryglus |
| Ffenestri ar sail risg | Ffitio'r sefyllfa | Anoddach eu harchwilio |
| Clytio awtomataidd mynych | Newidiadau bach, llai o amlygiad | Angen profion da a gwrthdroi |
| Cylchoedd clytio mawr prin | Cyfarwydd | Amlygiad hirach, risg fwy fesul newid |
| Efelychu gwe-rwydo | Adeiladu ymwybyddiaeth | Gall erydu ymddiriedaeth os caiff ei gamddefnyddio |
| Ffocws ar ddiwylliant adrodd | Dod â phroblemau i'r wyneb yn gynnar | Anodd ei fesur yn uniongyrchol |

Yr ateb pragmatig yw trefnu yn ôl cyd-destun, clytio'n aml mewn camau bach gyda gwrthdroi da, cofnodi eithriadau gyda therfynau amser, a buddsoddi mewn diwylliant adrodd fel rheolaeth.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Faint o'n hystad y mae ein sganiau yn ei weld mewn gwirionedd?**
Cymharwch yr asedau a sganiwyd â'r gofrestr asedau. Gofynnwch beth sydd ar goll a pham. Dylai'r hwylusydd chwilio am gategorïau sydd heb eu sganio'n systematig, megis cynwysyddion, dyfeisiau o bell, neu systemau trydydd parti. Cytunwch ar un bwlch i'w gau y chwarter hwn.

**2. Beth yw ein canfyddiad critigol agored hynaf, a pham mae'n dal ar agor?**
Edrychwch ar y gynffon, nid y cyfartaledd. Olrheiniwch yr ychydig hynaf: pwy sy'n berchen arnynt, beth sy'n eu rhwystro, a beth yw'r rheolaeth gydadferol. Dylai'r hwylusydd ofyn a gofnodir yr eithriad. Cytunwch pwy fydd yn dadflocio'r hynaf.

**3. Pryd achosodd atgyweiriad diogelwch doriad ddiwethaf, a beth newidiodd wedyn?**
Cofiwch enghraifft. Ai atgyweiriad brysiog oedd yr achos neu brawf coll? Trafodwch sut i wneud clytio yn arferol ac yn ddiogel. Cysylltwch yr ateb ag arfer newid a rhyddhau.

**4. Pe bai cydweithiwr yn adrodd e-bost amheus heddiw, beth fyddai'n digwydd iddynt?**
Disgrifiwch y llwybr go iawn o adroddiad i ymateb, gan gynnwys sut y diolchir i'r adroddwr. Gofynnwch a oes unrhyw un wedi cael ei gywilyddio am adrodd neu am glicio. Mae'r sgwrs yn ymwneud ag ymddiriedaeth. Cytunwch ar newid bach sy'n gwneud adrodd yn haws neu'n fwy diogel.

**5. Pa rai o'n rhifau diogelwch a allai godi tra byddwn yn mynd yn llai diogel?**
Rhestrwch y mesurau a meddyliwch sut y gallai pob un gael ei wella drwy gulhau cwmpas neu ail-labelu. Neilltuwch reilen warchod i bob un. Mae'r ymarfer hwn yn adeiladu'r cofnod cofrestr ar gyfer yr adolygiad nesaf.

**6. Pa mor gyflym y gallwn gyfyngu digwyddiad a gadarnhawyd, a sut ydym ni'n gwybod?**
Adolygwch y ddau ddigwyddiad diwethaf ac olrheiniwch o ganfod i gyfyngu. Nodwch oediadau. Gofynnwch pa ymarferion yr ydym wedi'u rhedeg. Cytunwch i redeg un cyn yr adolygiad nesaf.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn gwneud y rhan fwyaf o'r atgyweiriadau ac yn cyflwyno llawer o'r gwendidau. Dylent gadw dibyniaethau'n gyfredol fel rhan o lif arferol, trin canfyddiadau diogelwch fel eitemau ôl-groniad gyda pherchnogion a dyddiadau, a defnyddio gwiriadau piblinell sy'n rhoi adborth cyflym, perthnasol. Maent angen blaenoriaethau clir a'r amser i weithredu arnynt, a dylent allu codi pryderon yn rhydd.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn rhedeg y sganwyr, yn cymhwyso clytiau, ac yn ymateb i ddigwyddiadau. Dylent gadw'r cysylltiadau asedau yn gyfredol, adrodd cwmpas yn onest, a thrin eithriadau gyda therfynau amser. Maent hefyd angen amser gwarchodedig i ymarfer ymateb i ddigwyddiadau, a diwylliant di-fai pan fo camgymeriadau'n digwydd.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod yr awydd am risg ac yn penderfynu a ariennir diogelwch fel gweithgaredd parhaus neu fel prosiect. Dylent ofyn am ffenestri amlygiad a'r eitemau agored hynaf yn hytrach na chyfansymiau, gwarchod y diwylliant adrodd, a derbyn y bydd rhifau'n codi pan fo gwelededd yn gwella. Dylai llywodraethu fynnu tystiolaeth ar gyfer eithriadau ac ar gyfer dysgu o ddigwyddiadau.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn fuddiolwyr ac yn llinell amddiffyn. Maent eisiau gwasanaethau sy'n amddiffyn eu data, ac maent eisiau arweiniad clir, teg. Dylid dweud wrthynt yn brydlon pan fo digwyddiad yn effeithio arnynt, eu trin yn barchus pan fyddant yn adrodd problemau, a rhoi mesurau diogelwch iddynt nad ydynt yn gwneud eu gwaith yn anoddach nag sy'n angenrheidiol (gweler pwnc 6.4, Profiad defnyddwyr a gweithwyr).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae undeb credyd rhanbarthol yn rhedeg bancio ar-lein, ap symudol, a systemau cangen gyda thîm peirianneg bach a gwasanaeth gweithrediadau diogelwch allanoledig. Mae'r rhifau isod yn enghreifftiol.

Mae'r bwrdd yn gofyn am ddangosfwrdd diogelwch. Mae drafft cyntaf y dadansoddwr diogelwch yn dangos 4,200 o wendidau agored ac yn disgyn, a 96 y cant o gydymffurfio â chlytiau. Mae pennaeth peirianneg yn gofyn am gwmpas sganio. Wrth uno allbwn y sganiwr â'r gofrestr asedau, mae'r dadansoddwr yn canfod nad oedd 31 y cant o weinyddion a bron pob cynhwysydd wedi'u sganio yn y 30 diwrnod diwethaf, oherwydd bod y sganiwr wedi colli ei gymwysterau ar ôl mudo. Ymhlith yr asedau a sganiwyd, ffenestr amlygiad canolrifol ar gyfer gwendidau critigol yw 9 diwrnod, a'r 85fed canradd yw 41 diwrnod. Y canfyddiad critigol hynaf yw 212 diwrnod oed, ar system etifeddol gydag eithriad a ddaeth i ben bedwar mis ynghynt. Cyfrifwyd y cydymffurfio â chlytiau o 96 y cant ar yr asedau a adroddwyd gan yr offeryn clytio yn unig.

Mae'r tîm yn gwneud pedwar newid gyda pheirianneg a gweithrediadau. Daw cwmpas sganio yn llinell gyntaf y dangosfwrdd, gyda tharged i gyrraedd cwmpas llawn y gofrestr, ac mae'r dilysu sgan yn cael ei atgyweirio a'i fonitro. Mae blaenoriaethu yn ychwanegu statws ecsbloetio a phwysigrwydd ased at y sgôr difrifoldeb, felly mae'r 4,200 o ganfyddiadau yn lleihau i restr fer o tua 60 sy'n bwysig nawr. Mae diweddariadau dibyniaeth yn symud i'r biblinell fel newidiadau bach mynych gyda phrofion awtomataidd. Mae eithriadau yn cael perchennog, rheolaeth gydadferol, a dyddiad adolygu, ac mae'r un a ddaeth i ben yn cael ei adolygu gan y pwyllgor risg. Mae'r dadansoddwr diogelwch hefyd yn newid sut yr adroddir canlyniadau gwe-rwydo efelychiedig: dim ond y gyfradd adroddiadau ar lefel grŵp a ddangosir, ac mae'r dadansoddwr yn diolch yn bersonol i'r cydweithwyr sy'n adrodd.

Ddau fis yn ddiweddarach cwmpas sganio yw 97 y cant, ffenestr amlygiad yr 85fed canradd ar gyfer eitemau critigol yw 14 diwrnod, a'r canfyddiad critigol hynaf yw eithriad wedi'i liniaru gyda 60 diwrnod tan ei adolygiad. Mae gweithiwr cangen yn adrodd e-bost cais talu amheus o fewn munudau, ac mae'r digwyddiad yn cael ei gyfyngu mewn llai na dwy awr. Mae'r bwrdd yn gofyn i'r cyfrif gwendidau agored gael ei haneru erbyn diwedd y flwyddyn. Mae pennaeth peirianneg yn awgrymu adrodd ffenestr amlygiad a chanfyddiadau critigol hwyr yn lle hynny, gan esbonio y gall cyfrif ddisgyn drwy sganio llai. Cofnodir y penderfyniad, ac mae'r bwrdd yn cytuno i adolygu'r mesurau newydd yn y cyfarfod nesaf.

## Y golwg fesul sector

**Busnes newydd.** Fel arfer nid oes tîm diogelwch pwrpasol, felly adeiladwch y pethau sylfaenol i mewn i'r biblinell: diweddariadau dibyniaeth, sganio cyfrinachau, dilysu aml-ffactor, a'r fraint leiaf. Olrheiniwch ffenestr amlygiad ar gyfer rhestr fer o systemau critigol a chael cynllun digwyddiad syml. Gwrthwynebwch brynu pecyn offer mawr cyn i chi wybod eich ystad.

**Busnes bach.** Mae gwasanaethau allanoledig ac offer cwmwl yn cario'r rhan fwyaf o'r risg. Cadwch restr eiddo, trowch ddilysu aml-ffactor ymlaen ym mhobman, cadwch systemau wedi'u diweddaru'n awtomatig, a gwyddoch pwy i'w ffonio mewn digwyddiad. Mesurwch gydymffurfio â chlytiau ac amser i adfer copïau wrth gefn. Osgowch gywilyddio staff sy'n adrodd camgymeriadau.

**Menter fawr.** Mae graddfa angen data cyson ar draws llawer o dimau ac offer. Diffiniwch fandiau blaenoriaeth a ffenestri'n ganolog, gadewch i dimau fod yn berchen ar eu canfyddiadau, adroddwch amlygiad yn ôl gwasanaeth busnes, a rhedwch ymarferion rheolaidd. Cydlynwch â thimau diogelwch cyflenwyr a phrofwch y trosglwyddiadau.

**Llywodraeth a'r sector cyhoeddus.** Mae sectorau'n aml yn wynebu cyfarwyddebau gorfodol gyda therfynau amser ar gyfer gwendidau penodol, dyletswyddau adrodd digwyddiadau ffurfiol, a gofynion archwilio. Trinwch y rhain fel mewnbynnau dylunio: olrheiniwch gydymffurfio â therfynau amser cyfarwyddebau, cadwch dystiolaeth, ac adroddwch ddigwyddiadau fel sy'n ofynnol tra'n diogelu preifatrwydd unigolion (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y costau yw offer sganio a monitro, a all fod yn eiddo eisoes; yr amser i gynnal y cysylltiadau asedau; amser peirianneg i drwsio canfyddiadau a diweddaru dibyniaethau; paratoi ac ymarferion ymateb i ddigwyddiadau; a hyfforddiant. Mae gwiriadau piblinell yn costio amser sefydlu ac ychydig o amser adeiladu. Mae gan fonitro allanoledig ffi gwasanaeth.

Yr enillion yw tebygolrwydd is ac effaith is digwyddiadau, amlygiad byrrach, a llai o newidiadau brys brysiog. Mae'r buddion hyn yn real ac yn anodd eu meintioli, oherwydd bod y digwyddiad na ddigwyddodd yn gadael dim cofnod. Osgowch ddyfynnu costau toriadau cyfartalog y diwydiant neu amlderau digwyddiadau oni allwch olrhain y ffynhonnell a'i pherthnasedd. Adeiladwch yr achos o'ch data eich hun: tuedd y ffenestr amlygiad, nifer y newidiadau brys a achoswyd gan glytio hwyr, yr amser a dreuliwyd ar waith clytio â llaw a ddilewyd gan awtomeiddio, a chost eich digwyddiadau yn y gorffennol gan gynnwys amser staff ac effaith ar gwsmeriaid. Disgrifiwch leihau risg o ran senarios penodol, fel y mae'r pwnc cynharach ar achosion busnes yn awgrymu (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Adrodd cyfrifon gwendidau.** Mae cyfrifon yn disgyn pan fo sganiau'n colli pethau. Adroddwch ffenestr amlygiad, eitemau hwyr, a chwmpas.
- **Blaenoriaethu yn ôl sgôr difrifoldeb yn unig.** Mae'n anwybyddu hygyrchedd ac ecsbloetio. Ychwanegwch gyd-destun.
- **Trin y sgan fel y gwir.** Gwiriwch gwmpas ac ansawdd sgan yn erbyn y gofrestr asedau.
- **Eithriadau parhaol.** Maent yn dod yn risg gudd. Rhowch berchennog a dyddiad adolygu i bob eithriad.
- **Cywilyddio pobl am gamgymeriadau.** Mae adroddiadau'n stopio. Defnyddiwch adolygiad di-fai a chanlyniadau cyfanredol.
- **Diogelwch fel clwyd ar y diwedd.** Mae'n arafu cyflawni ac yn gwahodd ffyrdd o'i osgoi. Adeiladwch wiriadau i mewn i'r biblinell.
- **Cylchoedd clytio mawr.** Maent yn beryglus ac yn araf. Clytiwch yn aml mewn newidiadau bach.
- **Anwybyddu cyflenwyr.** Eu gwendidau nhw yw eich gwendidau chi. Olrheiniwch rwymedigaethau a digwyddiadau diogelwch cyflenwyr.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Gwelededd | Sganiau achlysurol o rai systemau | Sganiau rheolaidd o'r prif systemau | Cwmpas sganio wedi'i olrhain yn erbyn y gofrestr asedau; canfyddiadau wedi'u cysylltu â pherchnogion | Cwmpas, ffenestri amlygiad, ac eithriadau wedi'u rheoli a'u holrhain | Golwg a rennir ar draws timau a chyflenwyr, gan gynnwys dibyniaethau |
| Blaenoriaethu a thrwsio | Trwsio yn ôl y cais uchaf ei gloch | Rhestrau ar sail difrifoldeb | Trefnu ar sail cyd-destun; ffenestri polisi yn ôl band; clytiau bach mynych | Ffenestri a'r gynffon wedi'u hadolygu; gwiriadau piblinell wedi'u tiwnio gyda thimau | Adfer awtomataidd, ar sail risg gyda goruchwyliaeth ddynol |
| Ymateb a diwylliant | Ymateb ad hoc; bai | Cynllun sylfaenol, anaml wedi'i brofi | Cynllun wedi'i ymarfer; adolygiad di-fai; adrodd yn cael ei werthfawrogi | Amser cyfyngu a chyfradd canfod mewnol wedi'u rheoli; diwylliant adrodd wedi'i fesur | Ymarferion ar y cyd gyda chyflenwyr a chwsmeriaid; dysgu wedi'i rannu'n eang |

## Rhestr wirio

- [ ] Mesurir cwmpas sganio yn erbyn y gofrestr asedau.
- [ ] Mae canfyddiadau yn cysylltu ag ased, perchennog, a gwasanaeth.
- [ ] Mae bandiau blaenoriaeth yn cyfuno difrifoldeb, ecsbloetio, hygyrchedd, a phwysigrwydd ased.
- [ ] Cytunir ar ffenestri polisi yn ôl band, ac adroddir ffenestr amlygiad a'r eitem agored hynaf.
- [ ] Mae gwiriadau dibyniaeth a phiblinell yn rhedeg ar bob adeiladu, gyda rhwystrau y cytunwyd arnynt.
- [ ] Mae clytio yn rhedeg fel newidiadau mynych, bach, wedi'u profi gyda llwybr brys.
- [ ] Mae gan eithriadau berchennog, rheolaeth gydadferol, a dyddiad adolygu.
- [ ] Ymarferir ymateb i ddigwyddiadau, a mesurir amser i gyfyngu o ganfod.
- [ ] Adroddir data ymddygiad dynol mewn cyfanred yn unig, a diolchir am adrodd.
- [ ] Olrheinir rhwymedigaethau a digwyddiadau diogelwch cyflenwyr.

## Anogwyr AI

**Adolygwch reol blaenoriaethu gwendidau.**

```text
Ein rheol gyfredol ar gyfer blaenoriaethu gwendidau yw: [disgrifiwch]. Mae ein
meysydd data yn cynnwys: [rhestr, er enghraifft sgôr difrifoldeb, statws
ecsbloetio, pwysigrwydd ased, amlygiad i'r rhyngrwyd]. Adolygwch y rheol am
smotiau dall a ffyrdd y gellid ei chwarae, a chynigiwch drefn ar sail cyd-destun
gyda bandiau clir a ffenestri polisi. Peidiwch â datgan rhifau penodol fel
safonau diwydiant. Rhestrwch eich rhagdybiaethau a'r hyn y dylai arbenigwr
diogelwch ei gadarnhau.
```

**Gwiriwch gwmpas sganio.**

```text
Dyma grynodeb o'n cofrestr asedau yn ôl dosbarth a'r asedau a welwyd gan ein
sganiwr yn yr [egwyl] ddiwethaf: [gludwch gyfrifon neu restrau wedi'u glanhau].
Nodwch ddosbarthiadau gyda chwmpas isel, rhesymau tebygol dros fylchau, a'r
gwiriadau cyflymaf i gadarnhau pob rheswm. Awgrymwch sut i adrodd cwmpas fel
nad yw sgan a fethodd neu rannol yn edrych fel llwyddiant. Rhestrwch eich
rhagdybiaethau.
```

**Cynlluniwch ymarfer bwrdd.**

```text
Dyluniwch ymarfer bwrdd 90 munud ar gyfer [math o sefydliad] ar y senario hwn:
[disgrifiwch, er enghraifft tystlythyr cyflenwr dan fygythiad]. Cynhwyswch rolau,
llinell amser o chwistrelliadau, penderfyniadau i'w sbarduno, beth i'w gofnodi
(gan gynnwys amser i ganfod a chyfyngu), a chwestiynau ar gyfer dadfriffio
di-fai. Peidiwch â chynnwys enwau na systemau go iawn. Rhestrwch eich
rhagdybiaethau a'r hyn i'w addasu i'n cyd-destun.
```

**Ysgrifennwch neges ddi-fai ar gyfer camgymeriad a adroddwyd.**

```text
Adroddodd cydweithiwr eu bod wedi [disgrifiwch, er enghraifft clicio dolen mewn
e-bost gwe-rwydo]. Drafftiwch ateb byr, caredig gan y tîm diogelwch sy'n diolch
iddynt, yn esbonio beth fyddwn yn ei wneud, ac yn gofyn am fanylion sydd eu
hangen arnom. Yna drafftiwch nodyn cyfanredol ar gyfer y diweddariad wythnosol
sy'n rhannu'r wers heb enwi neb. Rhestrwch eich rhagdybiaethau ac unrhyw ddewisiadau
tôn y dylwn eu hadolygu.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig diogelwch neu wendid.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig diogelwch yn cario ei ffordd o chwarae'r system, ei reilen warchod, a'i reolau preifatrwydd.

## Pwyntiau allweddol

- Mesurwch amser amlygiad, yr eitemau agored hynaf, a chwmpas sganio, nid cyfrifon crai o ganfyddiadau.
- Blaenoriaethwch yn ôl cyd-destun: difrifoldeb, ecsbloetio, hygyrchedd, a phwysigrwydd ased.
- Clytiwch yn aml mewn newidiadau bach, wedi'u profi, a rhowch berchennog a dyddiad adolygu i bob eithriad.
- Cyfyngwch ddigwyddiadau'n gyflym, dysgwch yn ddi-fai, ac olrheiniwch ganfod mewnol.
- Trinwch ddiwylliant adrodd fel rheolaeth: diolchwch i bobl sy'n adrodd, a pheidiwch byth â graddio unigolion.
- Adeiladwch wiriadau diogelwch i mewn i'r biblinell fel mai'r dewisiadau diogel yw'r rhai hawdd.

## Cyfeiriadau a darllen pellach

1. National Institute of Standards and Technology, *Guide to Enterprise Patch Management Planning: Preventive Maintenance for Technology*, NIST Special Publication 800-40 Revision 4, 2022.
2. National Institute of Standards and Technology, *Computer Security Incident Handling Guide*, NIST Special Publication 800-61 (latest revision).
3. Forum of Incident Response and Security Teams, *Common Vulnerability Scoring System*, specification (latest version), https://www.first.org/cvss/.
4. Cybersecurity and Infrastructure Security Agency, *Known Exploited Vulnerabilities Catalog*, https://www.cisa.gov/known-exploited-vulnerabilities-catalog.
5. ISO/IEC 27001, *Information security, cybersecurity and privacy protection: Information security management systems: Requirements*, International Organization for Standardization.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Vulnerability (computing)](https://en.wikipedia.org/wiki/Vulnerability_(computing)).
9. Wikipedia, [DevSecOps](https://en.wikipedia.org/wiki/DevSecOps).
10. Wikipedia, [Common Vulnerability Scoring System](https://en.wikipedia.org/wiki/Common_Vulnerability_Scoring_System).
11. Wikipedia, [Common Vulnerabilities and Exposures](https://en.wikipedia.org/wiki/Common_Vulnerabilities_and_Exposures).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Attack surface](https://en.wikipedia.org/wiki/Attack_surface).
14. Wikipedia, [Software supply chain](https://en.wikipedia.org/wiki/Software_supply_chain).
15. Wikipedia, [Computer security incident management](https://en.wikipedia.org/wiki/Computer_security_incident_management).
