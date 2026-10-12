# Metrigau FinOps a chostau cwmwl

**Mae peirianwyr yn penderfynu gwariant cwmwl bob dydd, felly rhowch y data cost, y cyd-destun, a'r awdurdod i weithredu arno i'r bobl sy'n adeiladu ac yn rhedeg gwasanaethau, a mesurwch wastraff, dyrannu, a chost uned gyda'r un gofal ag a roddwch i ddibynadwyedd.**

## Crynodeb a chymhelliant

Mewn canolfan ddata, penderfynir gwariant gan archebion prynu ac mae'n cyrraedd fel ychydig o gamau mawr. Yn y cwmwl, gall datblygwr ymrwymo'r sefydliad i dâl cylchol gydag ychydig linellau o ffurfweddiad, a gall amgylchedd prawf a anghofiwyd gostio arian am fisoedd. Mae [cyfrifiadura cwmwl](https://en.wikipedia.org/wiki/Cloud_computing) yn cynnig mynediad ar alw i adnoddau cyfrifiadurol, ac mae'r model [talu wrth fynd](https://en.wikipedia.org/wiki/Pay_as_you_go) sy'n dod gydag ef yn golygu bod y bil yn dilyn defnydd. Mae hynny'n bwerus ac yn beryglus. Mae'r un hyblygrwydd sy'n gadael i dîm raddio mewn munudau yn gadael i gost dyfu'n gyflymach nag y sylwa neb.

Mae FinOps, cyfuniad o gyllid a gweithrediadau, yn arfer ac yn ddiwylliant ar gyfer rheoli cost cwmwl. Mae Sefydliad FinOps yn ei ddisgrifio fel fframwaith gweithredol lle mae timau peirianneg, cyllid, caffael, a busnes yn cydweithio ar benderfyniadau gwariant sy'n seiliedig ar ddata. Ei syniad canolog yw y dylai'r bobl sy'n defnyddio adnoddau cwmwl weld a bod yn berchen ar eu costau, tra bo cyllid yn darparu'r strwythur, y rhagolygon, a'r ymrwymiadau. Mae hyn yn cyd-fynd â nodau ystwyth cydweithio parhaus ymhlith rhanddeiliaid a thimau sy'n berchen ar eu gwasanaethau, ac mae'n cyd-fynd â phryder ITIL â rheoli ariannol gwasanaeth. Mae'r pwnc hwn yn cwmpasu'r mesurau sy'n gwneud yr arfer hwnnw'n gonfensiynol. Mae'n adeiladu ar y syniadau costio cyffredinol yn y pwnc blaenorol (gweler pwnc 7.5, Cost gwasanaeth ac economeg uned).

Mae gan gost cwmwl nodweddion sydd angen eu mesurau eu hunain.

- **Elastigedd.** Mae [awtoraddio](https://en.wikipedia.org/wiki/Autoscaling) yn addasu adnoddau i'r galw, sy'n gwneud cost yn newidiol ac weithiau'n syndod. Mae [cyfrifiadura di-weinydd](https://en.wikipedia.org/wiki/Serverless_computing) yn codi tâl fesul gweithrediad, ac yn symud sylw o weinyddion i geisiadau.
- **Llawer o benderfyniadau bach.** Mae pob dewis o faint enghraifft, haen storfa, rhanbarth, a phensaernïaeth yn newid cost. Mae gwariant wedi'i ddosbarthu ar draws cannoedd o benderfyniadau a wneir gan lawer o bobl, ac mae'n anodd ei weld heb dagiau ac adrodd da.
- **Modelau prisio.** Mae prisiau ar alw yn hyblyg a'r uchaf. Mae ymrwymiadau yn gyfnewid am [ddisgownt cyfaint](https://en.wikipedia.org/wiki/Volume_discount), megis capasiti wedi'i gadw neu gynlluniau arbed, yn gostwng pris uned yn gyfnewid am addewid o ddefnydd. Mae capasiti spot neu ragataliadwy yn rhad a gellir ei adfachu. Mae gan bob model risg, ac mae'r cymysgedd cywir yn dibynnu ar ba mor rhagweladwy yw'r llwyth gwaith. Mae'r union delerau yn wahanol rhwng darparwyr ac yn newid yn aml, felly gwiriwch ddogfennaeth gyfredol y darparwr cyn dibynnu ar unrhyw fanylyn.
- **Cost a rennir a heb dag.** Ni ellir priodoli adnoddau heb dag perchennog neu bwrpas. Mae llwyfannau a rennir yn lledaenu cost ar draws timau sy'n eu bwyta'n wahanol.
- **Cost amgylcheddol.** Mae llwythi gwaith cwmwl yn bwyta ynni ac yn achosi allyriadau, ac mae [ôl troed carbon](https://en.wikipedia.org/wiki/Carbon_footprint) llwyth gwaith yn gynyddol yn ofyniad i adrodd arno. Mae dulliau amcangyfrif yn dal i ddatblygu, a dylai rhifau ddod gyda'u dull.

Mae mesurau cost yn y cwmwl yn hawdd eu hennill drwy lwybrau byr. Mae torri gwariant drwy ddiffodd monitro neu drwy grebachu adnoddau nes bod y gwasanaeth yn methu yn dangos bil is a gwasanaeth gwaeth. Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol: mae pob mesur cost yma yn eistedd wrth ymyl mesur dibynadwyedd neu ansawdd, ac ni raddir yr un tîm yn ôl ei fil (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Egwyddorion allweddol

- **Metrig peirianneg yw cost.** Mae timau sy'n adeiladu ac yn rhedeg gwasanaeth yn gweld ac yn berchen ar ei gost.
- **Dyrannwch i berchnogion.** Dylai pob doler fapio i dîm neu gronfa a rennir ddatganedig.
- **Pârwch gost ag ansawdd a dibynadwyedd.** Nid yw arbedion sy'n torri'r gwasanaeth yn arbedion.
- **Optimeiddiwch yn barhaus, mewn camau bach.** Adolygwch wastraff yn rheolaidd a gweithredwch fel rhan o waith arferol.
- **Rhagolygwch gydag amrediadau.** Mae galw newidiol yn gwneud rhagolygon un rhif yn fregus.
- **Cydweithiwch ar draws swyddogaethau.** Mae peirianneg, cyllid, caffael, a'r busnes yn penderfynu gyda'i gilydd.
- **Peidiwch â graddio timau yn ôl eu bil.** Mae gwasanaethau'n wahanol, ac nid yw twf yn wastraff.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cwmpas dyrannu | Cyfran gwariant cwmwl a briodolir i dîm sy'n berchen neu gronfa a rennir ddatganedig | gwariant gyda pherchennog a thag gwasanaeth dilys, neu mewn cronfa a rennir ddatganedig / cyfanswm gwariant cwmwl | canran | Allforio bilio cwmwl, polisi tagiau | Rheoli ariannol gwasanaeth; rheoli asedau TG | Perchnogaeth tîm ar yr hyn y mae'n ei redeg | Wythnosol |
| Cost uned cwmwl | Cost adnoddau cwmwl fesul uned o rywbeth y mae defnyddwyr yn ei werthfawrogi | cost cwmwl ar gyfer y gwasanaeth yn y cyfnod / unedau a gyflawnwyd yn y cyfnod | arian fesul uned | Data bilio wedi'i uno â chyfaint gwasanaeth | Rheoli ariannol gwasanaeth; rheoli lefel gwasanaeth | Cost i wasanaethu fesul canlyniad | Misol |
| Cyfradd gwastraff | Cyfran gwariant ar adnoddau sy'n segur neu'n amlwg yn rhy fawr | gwariant ar adnoddau segur neu rhy fawr, yn ôl rheolau y cytunwyd arnynt / cyfanswm gwariant ar yr adnoddau o fewn cwmpas | canran | Metrigau defnydd a bilio | Rheoli capasiti a pherfformiad; rheoli ariannol | Lleihau gwastraff yn y gadwyn offer | Wythnosol |
| Cwmpas ymrwymiad | Cyfran y defnydd cyson cymwys a gwmpesir gan ymrwymiadau gyda disgownt | defnydd cymwys a gwmpesir gan ymrwymiadau / defnydd cymwys | canran | Adroddiadau bilio ac ymrwymiad | Rheoli ariannol gwasanaeth; rheoli cyflenwyr | Cynllunio ar gyfer galw rhagweladwy | Misol |
| Defnydd ymrwymiad | Cyfran yr ymrwymiadau a brynwyd a ddefnyddiwyd | oriau ymrwymiad a ddefnyddiwyd / oriau ymrwymiad a brynwyd | canran | Adroddiadau ymrwymiad | Rheoli ariannol gwasanaeth; rheoli cyflenwyr | Gwerth o fuddsoddiad cynlluniedig | Misol |
| Amrywiant rhagolwg | Y gwahaniaeth rhwng rhagolwg a gwariant cwmwl gwirioneddol, fesul tîm ac yn gyfan gwbl | (gwirioneddol llai rhagolwg) / rhagolwg | canran | Log rhagolygon a data bilio | Rheoli ariannol gwasanaeth | Cywirdeb rhagolygon | Misol |
| Amser cydnabod anghysondeb | Yr amser o rybudd anghysondeb cost i benderfyniad a gofnodwyd gan y perchennog | canolrif ac 85fed canradd oriau o'r rhybudd i ymateb y perchennog | oriau | Rhybuddion anghysondeb a chofnodion tocynnau | Monitro a rheoli digwyddiadau; rheoli digwyddiadau | Ymatebolrwydd i signal cynhyrchu | Misol |

Diffiniwch gwmpas yr adnoddau, y rheolau tagiau, a beth sy'n cyfrif fel segur neu rhy fawr, a'u cofnodi. Cyfrifir cwmpas ymrwymiad yn erbyn defnydd llinell sylfaen gyson yn unig, nid uchafbwyntiau. Mae cost uned yn defnyddio uned y cytunwyd arni gyda pherchennog y gwasanaeth ac sy'n sefydlog ar gyfer y duedd. Dylai data cost ddweud a yw'n cynnwys credydau, disgowntiau, trethi, a thaliadau cymorth, a pha arian ac ba gyfradd cyfnewid sy'n berthnasol.

## Argymhellion

### Gwnewch gost yn weladwy ac yn eiddo i rywun

**1. Gorfodwch set fach, orfodol o dagiau.** Mynnwch fod pob adnodd yn cario tag perchennog, gwasanaeth, ac amgylchedd, wedi'i orfodi gan bolisi wrth ei greu, nid gan lanhau wedyn. Mae cwmpas dyrannu yn mesur pa mor dda y mae hyn yn gweithio. Gellir rhwystro adnoddau na chaiff eu tagio, neu eu fflagio o fewn diwrnod i berchennog y cyfrif. Cadwch y set tagiau yn fach fel bod pobl yn cydymffurfio.

**2. Rhowch eu golwg cost eu hunain i dimau.** Darparwch i bob tîm olwg ddyddiol neu wythnosol o'i wariant yn ôl gwasanaeth ac amgylchedd, gyda thueddiadau ac anghysonderau. Mae pobl yn ymateb i ddata y gallant ei weld a'i ddeall. Ychydig a newidia adroddiad sy'n cyrraedd yn fisol ac yn mynd at gyllid yn unig.

**3. Diffiniwch gronfeydd cost a rennir a'u gyrwyr.** Mae angen rheol ar lwyfannau a rennir, rhwydweithio, a thaliadau cymorth ar gyfer sut y cânt eu lledaenu (gweler pwnc 7.5, Cost gwasanaeth ac economeg uned). Cyhoeddwch y rheol, adolygwch hi gyda'r timau, a chadwch y gronfa'n fach. Mae rheol y gall pobl ei dilyn yn ennill mwy o ymddiriedaeth nag un deg nad oes neb yn ei deall.

**4. Cynhaliwch sgwrs gost fer reolaidd.** Dewch â pheirianneg, cyllid, a pherchnogion cynnyrch at ei gilydd ar gyflymder cyson, yn wythnosol neu bob pythefnos ar gyfer gwariwyr mawr ac yn fisol i eraill, am dri deg munud. Adolygwch y duedd, yr anghysonderau, a'r ôl-groniad optimeiddio. Cydweithio parhaus yw hwn ar waith, ac mae'n cadw cost ar yr agenda heb broses drom.

### Mesurwch werth, nid gwariant yn unig

**5. Mynegwch gost fesul uned.** Mae cyfanswm gwariant cwmwl yn codi gyda llwyddiant. Yr hyn sy'n bwysig yw cost fesul cwsmer gweithredol, fesul trafodiad, neu fesul adeiladu. Dewiswch uned sy'n ystyrlon ar gyfer y gwasanaeth, olrheiniwch hi dros amser, ac anodwch newidiadau. Mae cost uned sy'n disgyn gyda chyfanswm gwariant sy'n codi yn batrwm iach, ac mae cost uned sy'n codi gyda defnydd gwastad yn anogwr i ymchwilio.

**6. Dangoswch ddibynadwyedd ac ansawdd wrth ymyl cost.** Dangoswch gost gydag argaeledd, oedi, a chyfradd gwallau ar gyfer yr un gwasanaeth (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau). Mae arbedion sy'n codi cyfraddau gwallau yn drosglwyddiad cost i ddefnyddwyr. Gall dull cyllideb gwallau wneud y cyfaddawd yn eglur: gwariwch lai pan fo'r gwasanaeth ymhell yn well nag sydd ei angen, a buddsoddwch pan nad yw.

**7. Olrheiniwch wastraff gyda rheolau eglur.** Diffiniwch segur (er enghraifft, dim defnydd ystyrlon dros gyfnod) a rhy fawr (er enghraifft, defnydd yn gyson ymhell islaw'r capasiti a ddarparwyd), ac adroddwch y gwariant ar bob un. Mae angen gofal gyda rheolau: mae system wrth gefn ar gyfer gwydnwch yn edrych yn segur o ddyluniad, a dylid ei heithrio a'i labelu. Ailedrychwch ar y rheolau pan fyddant yn cynhyrchu positifau ffug.

### Gweithredwch ar yr hyn a ganfyddwch

**8. Maint cywir a glanhau mewn gwaith arferol.** Gwnewch dynnu gwastraff yn eitem sefydlog yn ôl-groniad y tîm, a mynd i'r afael ag ef mewn camau bach fel rhan o welliant parhaus. Trefnwch i amgylcheddau nad ydynt yn gynhyrchu stopio y tu allan i oriau gwaith, dilëwch storfa heb ei hatodi, dewiswch haenau storfa priodol, ac adolygwch yr eitemau llinell mwyaf yn gyntaf. Mae newidiadau bach rheolaidd yn perfformio'n well na glanhau arwrol prin, sy'n tueddu i gael eu hanghofio pan fo pwysau'n codi.

**9. Cydweddwch y model prisio â'r llwyth gwaith.** Defnyddiwch ymrwymiadau ar gyfer defnydd llinell sylfaen gyson, ar alw ar gyfer llwyth newidiol, a chapasiti ymyrradwy ar gyfer gwaith sy'n goddef ymyrraeth. Ymrwymwch yn gynyddol, mewn symiau bach, ac olrheiniwch gwmpas a defnydd. Mae gor-ymrwymo yn gwastraffu arian ac mae tan-ymrwymo yn talu premiwm. Cynhwyswch gyllid a chaffael, ac ail-wiriwch y telerau gyda'r darparwr gan eu bod yn newid.

**10. Canfyddwch anghysonderau ac ymatebwch.** Defnyddiwch ganfod anghysonderau ar wariant, sy'n fflagio newidiadau sydyn o'u cymharu â llinell sylfaen. Mae offer [canfod anghysonderau](https://en.wikipedia.org/wiki/Anomaly_detection) yn amrywio o drothwyon syml i fodelau ystadegol. Rhybuddiwch y tîm sy'n berchen, a mesurwch am ba hyd y mae'n ei gymryd i gydnabod a phenderfynu. Gall swydd wedi'i chamffurfweddu redeg bil mawr i fyny mewn oriau, felly mae cyflymder yn bwysig (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion).

### Rhagolygwch a chynlluniwch

**11. Rhagolygwch gydag amrediadau a gyrwyr.** Adeiladwch ragolygon o yrwyr galw, megis defnyddwyr neu drafodion disgwyliedig, ynghyd â chost uned. Defnyddiwch [ddadansoddi amrywiant](https://en.wikipedia.org/wiki/Variance_analysis) i esbonio gwahaniaethau rhwng rhagolwg a gwirioneddol, a gwahanwch y rhai oherwydd cyfaint, pris, a chymysgedd. Rhowch amrediad a nodwch y rhagdybiaethau. Dylai amrywiant rhagolwg grebachu wrth i'r model wella.

**12. Cynhwyswch gynaliadwyedd yn y darlun.** Amcangyfrifwch yr allyriadau sy'n gysylltiedig â phrif lwythi gwaith gan ddefnyddio dull dogfennedig, megis adroddiadau darparwyr neu fethodolegau cyhoeddedig, a nodwch derfynau'r amcangyfrif. Cymharwch ddewisiadau rhanbarth, math o enghraifft, ac amserlen ar gost ac allyriadau. Trinwch allyriadau fesul uned fel cydymaith i gost fesul uned, a pheidiwch â honni manylder na all y dull ei gefnogi.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cwmpas dyrannu | Tagio popeth i berchennog dal-y-cyfan; datgan symiau mawr fel rhai a rennir | Cyfran gwariant sy'n eiddo i ddal-y-cyfan; maint ac adolygiad cronfa a rennir; sampl cadarnhau perchennog |
| Cost uned cwmwl | Dewis uned sy'n tyfu'n rhad; torri dibynadwyedd i dorri cost | Diffiniad uned sefydlog; cymdeithion dibynadwyedd ac ansawdd |
| Cyfradd gwastraff | Culhau'r diffiniad o segur; symud gwastraff i gyfrif y tu allan i'r cwmpas | Rheolau yn y gofrestr; sganio pob cyfrif; samplu adnoddau y mae'r rheolau yn eu heithrio |
| Cwmpas ymrwymiad | Ymrwymo i linellau sylfaen chwyddedig i fynd ar ôl canran uchel | Defnydd ymrwymiad; gwirio'r llinell sylfaen yn erbyn hanes defnydd |
| Defnydd ymrwymiad | Ychwanegu defnydd cymwys nad oes ei angen i lenwi ymrwymiadau | Cymharu â thwf mewn galw gwirioneddol; cost uned |
| Amrywiant rhagolwg | Padio rhagolygon; eu diwygio'n hwyr | Logio'r rhagolwg ar y dechrau; olrhain lled yr amrediad a'r gyfradd taro |
| Amser cydnabod anghysondeb | Cydnabod rhybuddion heb edrych; cau rhybuddion yn awtomatig | Cofnodi penderfyniad a chanlyniad; samplu rhybuddion am ansawdd yr ymateb |

Mae darlleniad iach yn bron pob gwariant yn eiddo ac yn weladwy, cost uned sy'n symud am resymau esboniedig, gwastraff sy'n crebachu heb doriadau, ymrwymiadau a ddefnyddir, a rhagolygon y mae eu gwall yn culhau dros amser.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Tîm cwmwl canolog yn rheoli gwariant | Cysondeb a grym negodi | Araf; pell o'r penderfyniadau peirianneg |
| Timau'n berchen ar eu cost cwmwl | Penderfyniadau cyflym, gwybodus | Angen data, hyfforddiant, a rheiliau gwarchod |
| Ar alw yn unig | Hyblyg | Pris uned uchaf |
| Ymrwymiadau trwm | Pris uned is | Cloi i mewn a gwastraff os yw galw'n disgyn |
| Terfynau cyllideb caeth | Atal gorwario | Gall achosi toriadau neu rwystro gwaith dilys |
| Rhybuddion ac adolygu | Cadw cyflymder | Yn dibynnu ar ymateb amserol |
| Maint cywir ymosodol | Arbed arian | Risg i berfformiad os gorwneir |
| Maint cywir wedi'i fesur gyda SLOau | Cytbwys | Angen data dibynadwyedd a gofal |

Yr ateb pragmatig yw rhoi data a pherchnogaeth i dimau, gosod rheiliau gwarchod megis rhybuddion a chyllidebau yn lle atalfeydd caled lle mae'r gwasanaeth yn hanfodol, ymrwymo'n raddol i'r llinell sylfaen gyson, a phâru cost â dibynadwyedd bob amser.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Faint o'n bil cwmwl y gallwn ei briodoli i berchennog heddiw, a phwy na ellir dod o hyd iddynt?**
Edrychwch ar gyfran y gwariant gyda thagiau dilys a'r eitemau heb dag mwyaf. Gofynnwch pwy fyddai'n berchen ar bob un. Dylai'r hwylusydd nodi faint o eitemau nad oes neb yn eu hawlio. Cytunwch ar un cam polisi tagiau i'w orfodi wrth greu.

**2. Beth wnaeth ein cost fesul uned dros y chwe mis diwethaf, a pham?**
Plotiwch gost uned ac anodwch newidiadau mewn pensaernïaeth, pris, a chyfaint. Gofynnwch pa newidiadau oedd yn fwriadol. Os yw'r duedd yn syndod, trafodwch ba ddata sydd ar goll. Ychwanegwch fesur ansawdd at y siart.

**3. Pa rai o'n hadnoddau y byddem yn eu diffodd yfory pe baem yn meiddio?**
Rhestrwch ymgeiswyr: amgylcheddau segur, cronfeydd data rhy fawr, storfa a anghofiwyd. Ar gyfer pob un, gofynnwch beth yw'r risg a phwy sy'n penderfynu. Cytunwch ar ffordd ddiogel o brofi dileu un, megis trefnu neu dynnu ciplun yn gyntaf.

**4. Sut byddem yn gwybod o fewn diwrnod pe bai swydd yn dechrau costio deg gwaith yn fwy?**
Cerddwch drwy'r llwybr rhybuddio o'r bil i'r perchennog. Profwch ef gydag enghraifft o'r gorffennol. Dylai'r sgwrs ddatgelu oediadau a bylchau mewn perchnogaeth. Cytunwch ar amser targed i gydnabod a phenderfynu, a phwy sydd ar y blaen.

**5. Faint o'n defnydd llinell sylfaen y gallem ymrwymo iddo'n ddiogel, a beth fyddai'n ein gwneud yn anghywir?**
Archwiliwch hanes defnydd am lawr cyson a'r risgiau iddo: newidiadau cynnyrch, mudo, newidiadau pris. Penderfynwch ar ymrwymiad cyntaf cymedrol a dyddiad adolygu. Cynhwyswch gyllid yn y drafodaeth.

**6. Pa gyfaddawd rhwng cost a dibynadwyedd yr ydym yn ei wneud ar ddamwain?**
Adolygwch arbedion a digwyddiadau diweddar. A oedd unrhyw rai'n gysylltiedig? Trafodwch sut i wneud y cyfaddawd yn eglur, er enghraifft drwy gysylltu adolygiadau cost â chyllidebau gwallau. Penderfynwch pwy all gymeradwyo toriad sy'n effeithio ar ddibynadwyedd.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn gwneud y penderfyniadau sy'n gyrru cost ac maent yn y sefyllfa orau i'w lleihau. Dylent dagio wrth greu, gwirio eu golwg cost yn rheolaidd, adeiladu cost i mewn i drafodaethau dylunio, a thrin lleihau gwastraff fel gwaith arferol. Dylent allu gweld effaith newid ar gost yn fuan ar ôl ei wneud, sy'n cefnogi dysgu cyflym.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau a llwyfan yn rhedeg gwasanaethau a rennir, yn gorfodi polisi, ac yn gweithredu rhybuddion anghysondeb. Dylent gadw cydymffurfiaeth tagiau yn syml, darparu adroddiadau hunanwasanaeth, a chyhoeddi rheolau clir ar gyfer cost a rennir. Dylent wylio cost a dibynadwyedd y llwyfannau y maent yn eu darparu, a helpu timau i weithredu heb ddod yn glwyd.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr a chyllid eisiau gwariant rhagweladwy a gwerth da. Dylent ariannu'r offer a'r amser ar gyfer gwaith cost, derbyn amrediadau mewn rhagolygon, osgoi tablau cynghrair o dimau, a gofyn am gost uned wrth ymyl ansawdd. Dylai llywodraethu wirio bod ymrwymiadau'n cael eu gwneud gyda data, a bod hawliadau cynaliadwyedd yn datgan eu dull.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn teimlo cost cwmwl yn anuniongyrchol, drwy brisiau, nodweddion, neu sefydlogrwydd y gwasanaeth. Maent yn elwa pan fo arbedion yn ariannu gwelliannau ac yn dioddef pan fo toriadau'n lleihau ansawdd. Lle codir tâl ar ddefnyddwyr am ddefnydd, maent eisiau biliau clir a'r gallu i ddylanwadu arnynt.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein rhanbarthol yn rhedeg ei siop a'i lwyfan archebion ar gwmwl cyhoeddus, gyda chwe thîm peirianneg. Mae'r rhifau isod yn enghreifftiol.

Cododd gwariant cwmwl yn gyson dros flwyddyn, ac mae'r cyfarwyddwr cyllid yn gofyn am doriad. Mae'r arweinydd FinOps yn tynnu'r data bilio. Cwmpas dyrannu yw 68 y cant, gyda thraean o'r gwariant heb dag mewn cyfrifon prawf. Cost fesul archeb gyflawn yw US$0.31, i fyny o US$0.27 chwe mis ynghynt, tra tyfodd cyfaint archebion 15 y cant. Cyfradd gwastraff o dan reolau'r tîm yw 14 y cant o'r gwariant o fewn cwmpas, amgylcheddau nad ydynt yn gynhyrchu yn rhedeg dros nos ac ar benwythnosau gan mwyaf ac ychydig o gronfeydd data rhy fawr. Cwmpas ymrwymiad yw 20 y cant o'r llinell sylfaen gyson, gyda 97 y cant o ddefnydd ar yr hyn a brynwyd. Dilynodd amrywiant rhagolwg o ynghyd 18 y cant yn y chwarter diwethaf ymgyrch farchnata nad oedd neb wedi dweud wrth y tîm llwyfan amdani. Rhedodd swydd ddata ar ffo mewn un cyfrif am ddeuddydd cyn i neb sylwi.

Mae'r arweinydd yn cytuno ar bedwar newid gyda'r timau peirianneg. Mae polisi tagiau yn rhwystro adnoddau newydd heb dagiau perchennog a gwasanaeth, gyda chyfnod gras o bythefnos. Mae pob tîm yn cael golwg cost wythnosol a slot byr yn y sgwrs gost bob pythefnos. Trefnir i amgylcheddau nad ydynt yn gynhyrchu stopio y tu allan i oriau gwaith, ac ailfeintir y tair cronfa ddata rhy fawr ar ôl gwirio eu perfformiad yn erbyn y amcanion lefel gwasanaeth. Mae ymrwymiad cyntaf yn cwmpasu 60 y cant o'r llinell sylfaen gyson, gydag adolygiad ymhen tri mis. Mae rhybudd anghysondeb yn mynd at y tîm sy'n berchen gyda disgwyliad o benderfyniad a gofnodir o fewn pedair awr, ac mae'r calendr cynllunio bellach yn cynnwys ymgyrchoedd marchnata.

Ar ôl chwarter, cwmpas dyrannu yw 93 y cant, mae'r gyfradd gwastraff yn disgyn i 6 y cant, mae cost fesul archeb yn disgyn i US$0.26 heb unrhyw newid mewn oedi talu na chyfradd gwallau, ac amrywiant rhagolwg yw ynghyd 5 y cant. Cwmpas ymrwymiad yw 55 y cant gyda 96 y cant o ddefnydd. Amser cydnabod anghysondeb canolrifol yw 2 awr, gyda'r 85fed canradd ar 6. Mae'r cyfarwyddwr cyllid yn gofyn am dabl cynghrair yn dangos cost fesul tîm. Mae'r arweinydd FinOps yn gwrthod, gan esbonio bod y timau'n rhedeg gwasanaethau gwahanol gyda thwf gwahanol, ac yn cynnig yn lle hynny dueddiad cost uned pob tîm gyda'i fesurau dibynadwyedd. Cofnodir y penderfyniad, a gosodir dyddiad yr adolygiad nesaf.

## Y golwg fesul sector

**Busnes newydd.** Gall credydau a biliau isel guddio arferion drwg sy'n dod yn ddrud ar raddfa. Tagiwch o'r diwrnod cyntaf, trefnwch adnoddau nad ydynt yn gynhyrchu, ac olrheiniwch gost fesul cwsmer yn gynnar. Ymrwymwch dim ond pan fo galw'n rhagweladwy.

**Busnes bach.** Mae un cyfrif ac ychydig o wasanaethau yn gwneud tagio ac adolygu yn syml. Adolygwch y bil yn fisol gyda'r person sy'n adeiladu'r system, dilëwch adnoddau a anghofiwyd, a byddwch yn wyliadwrus o ymrwymiadau hir. Rhybudd cyllideb yw'r rheolaeth unigol fwyaf gwerthfawr.

**Menter fawr.** Mae llawer o gyfrifon, timau, a darparwyr yn galw am swyddogaeth FinOps ganolog sy'n galluogi timau yn lle eu rheoli. Safonwch dagiau ac allforion bilio ar draws darparwyr, negodwch ymrwymiadau'n ganolog, a rhowch eu data i dimau. Cynlluniwch ar gyfer gwahaniaethau adrodd aml-gwmwl.

**Llywodraeth a'r sector cyhoeddus.** Mae fframweithiau caffael, preswylfa data, a chyllidebau blynyddol sefydlog yn cyfyngu ar ddewisiadau. Dogfennwch benderfyniadau cost a rhanbarth, modelwch effaith gwariant newidiol ar briodoliadau, a chadwch lwybrau archwilio. Gall ymrwymiadau cyhoeddus ar gynaliadwyedd fynnu allyriadau a adroddir gyda dulliau (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Costau arfer FinOps yw amser ychydig o bobl i redeg adrodd, polisi tagio, a'r sgwrs reolaidd; offer, y gellir eu darparu gan y llwyfan cwmwl neu eu prynu; ac amser peirianneg i weithredu ar ganfyddiadau. Gall arfer bach ddechrau gydag allforio bilio a thaenlen.

Daw'r enillion o wastraff llai, prisiau gwell drwy ymrwymiadau, llai o syrpreisys, a phenderfyniadau gwell am bensaernïaeth. Adeiladwch yr achos o'ch rhifau eich hun: y gyfradd gwastraff a'i chost yn yr adolygiad cyntaf, yr arbedion o drefnu amgylcheddau nad ydynt yn gynhyrchu, y disgownt ymrwymiad ar y rhan a ymrwymwyd, a chost osgoedig anghysonderau a ddaliwyd yn gynnar. Osgowch ddyfynnu canrannau gwastraff neu ffigurau arbedion ledled y diwydiant heb ffynhonnell a dull y gellir eu holrhain. Cynhwyswch gost yr arfer a risg gor-ymrwymo. Mae'r achos ariannol ar gyfer gwelliannau yn gyffredinol yn cael ei gwmpasu yn y pwnc nesaf (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Tîm canolog sy'n dweud na.** Mae'n arafu gwaith ac mae timau'n gweithio o'i gwmpas. Galluogwch dimau gyda data a rheiliau gwarchod.
- **Torri cost heb wylio dibynadwyedd.** Mae'r arbedion yn dychwelyd fel digwyddiadau. Pârwch gost â mesurau lefel gwasanaeth.
- **Mynd ar ôl cwmpas ymrwymiad.** Gwastraff yw canran uchel gyda defnydd isel. Olrheiniwch y ddau.
- **Adroddiadau misol i gyllid yn unig.** Nid yw peirianwyr byth yn eu gweld. Rhowch olygon dyddiol neu wythnosol i dimau.
- **Tagio fel prosiect glanhau.** Mae'n pydru. Gorfodwch dagiau wrth greu.
- **Graddio timau yn ôl gwariant.** Mae twf yn edrych fel gwastraff. Dangoswch dueddiadau cost uned gyda chyd-destun.
- **Rhagolygu un rhif.** Mae galw newidiol yn ei dorri. Defnyddiwch amrediadau a gyrwyr.
- **Honni allyriadau manwl.** Mae dulliau amcangyfrif yn ansicr. Nodwch y dull a'r terfynau.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Gwelededd a pherchnogaeth | Bil misol wedi'i adolygu gan gyllid | Tagiau'n cael eu defnyddio gan rai timau | Tagiau gorfodol; timau'n gweld golygon cost wythnosol | Cwmpas dyrannu wedi'i reoli; cronfeydd a rennir wedi'u hadolygu | Data cost yn llifo i benderfyniadau cynnyrch bron mewn amser real ar draws darparwyr |
| Optimeiddio | Glanhau achlysurol | Amserlenni a maint cywir gan rai timau | Rheolau gwastraff ac ôl-groniad sefydlog o optimeiddiadau | Gwastraff, ymrwymiadau, a chost uned wedi'u rheoli gyda chymdeithion dibynadwyedd | Optimeiddio parhaus, awtomataidd gyda goruchwyliaeth ddynol a dysgu a rennir |
| Cynllunio | Cyllideb flynyddol | Rhagolygon bras | Rhagolygon ar sail gyrwyr gydag amrediadau | Amrywiant wedi'i ddadansoddi a'i fwydo yn ôl; ymrwymiadau wedi'u rheoli'n gynyddol | Rhagolygu ar y cyd â'r busnes, cyflenwyr, a nodau cynaliadwyedd |

## Rhestr wirio

- [ ] Gorfodir set fach orfodol o dagiau (perchennog, gwasanaeth, amgylchedd) wrth greu adnoddau.
- [ ] Adroddir cwmpas dyrannu bob wythnos, gyda'r eitemau heb dag mwyaf wedi'u rhestru.
- [ ] Mae gan bob tîm olwg cost wythnosol gyda thueddiadau ac anghysonderau.
- [ ] Mae sgwrs gost reolaidd rhwng peirianneg a chyllid ar y calendr.
- [ ] Olrheinir cost uned cwmwl wrth ymyl argaeledd, oedi, a chyfradd gwallau.
- [ ] Ysgrifennir rheolau gwastraff a'u cymhwyso, gydag eithriadau wedi'u labelu.
- [ ] Gwneir ymrwymiadau'n gynyddol yn erbyn defnydd llinell sylfaen gyson, gyda chwmpas a defnydd wedi'u holrhain.
- [ ] Mae rhagolygon yn defnyddio gyrwyr ac amrediadau, a dadansoddir amrywiant.
- [ ] Mae rhybuddion anghysondeb yn cyrraedd perchnogion gydag amser disgwyliedig i benderfynu.
- [ ] Os adroddir amcangyfrifon allyriadau, maent yn nodi eu dull a'u terfynau.

## Anogwyr AI

**Dadansoddwch duedd cost.**

```text
Dyma grynodeb o'n cost a'n defnydd cwmwl ar gyfer [gwasanaeth] dros [cyfnod]:
[gludwch gost fisol, cyfaint, ac unrhyw newidiadau hysbys]. Dadansoddwch y
newid mewn cost yn effeithiau cyfaint, pris, a chymysgedd cyn belled ag y mae'r
data'n caniatáu, awgrymwch beth i'w wirio nesaf, a chynigiwch gost uned gyda
chydymaith ansawdd. Peidiwch â dyfeisio prisiau na disgowntiau. Rhestrwch eich
rhagdybiaethau a'r data y byddai ei angen arnoch i fod yn fwy sicr.
```

**Drafftiwch bolisi tagiau.**

```text
Drafftiwch bolisi tagiau ar gyfer [math o sefydliad] gan ddefnyddio [darparwr(wyr)
cwmwl]. Cynhwyswch set leiaf o dagiau gorfodol, gwerthoedd a ganiateir, sut y
cânt eu gorfodi wrth greu, sut yr adroddir troseddau i berchnogion, a chyfnod
gras. Cadwch ef yn ddigon byr i beirianwyr ei ddilyn. Rhestrwch eich rhagdybiaethau
ac unrhyw beth sy'n dibynnu ar nodweddion darparwr y dylwn eu gwirio mewn
dogfennaeth gyfredol.
```

**Diffiniwch reolau gwastraff.**

```text
Cynigiwch reolau ar gyfer dosbarthu adnoddau cwmwl fel segur neu rhy fawr mewn
[math o amgylchedd], gan gynnwys y metrigau a ddefnyddir, ffenestri amser,
eithriadau (er enghraifft systemau wrth gefn ar gyfer gwydnwch), a phroses
adolygu ar gyfer positifau ffug. Disgrifiwch sut i osgoi niweidio dibynadwyedd.
Peidiwch â gosod trothwyon rhifol heb ddweud sut y dylem eu graddnodi o'n data
ein hunain. Rhestrwch eich rhagdybiaethau.
```

**Cynlluniwch ymrwymiad cyntaf.**

```text
Ein defnydd llinell sylfaen gyson dros y [cyfnod] diwethaf yw [crynodeb] a
risgiau galw yw [rhestr]. Amlinellwch gynllun gofalus ar gyfer ymrwymiad cyntaf:
sut i amcangyfrif y llinell sylfaen, faint i ymrwymo, sut i adolygu defnydd, a
beth fyddai'n peri i ni stopio. Peidiwch â thybio disgowntiau neu delerau
darparwr penodol. Rhestrwch eich rhagdybiaethau a chwestiynau i gyllid a
chaffael.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig cost cwmwl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig cost cwmwl yn cario ei ffordd o chwarae'r system, ei reilen warchod, a'i gydymaith dibynadwyedd.

## Pwyntiau allweddol

- Gwnewch gost yn weladwy ac yn eiddo i rywun: gorfodwch dagiau wrth greu a rhowch ei golwg wythnosol ei hun i bob tîm.
- Mesurwch gost fesul uned wrth ymyl dibynadwyedd ac ansawdd, byth ar ei phen ei hun.
- Tynnwch wastraff fel rhan o waith arferol, wedi'i arwain gan reolau ysgrifenedig.
- Ymrwymwch yn raddol i'r llinell sylfaen gyson ac olrheiniwch gwmpas a defnydd.
- Rhagolygwch gyda gyrwyr ac amrediadau, a gwyliwch am anghysonderau gydag ymateb cyflym.
- Peidiwch â graddio timau yn ôl gwariant, a nodwch ddull a therfynau unrhyw amcangyfrif allyriadau.

## Cyfeiriadau a darllen pellach

1. Storment, J. R., and Fuller, M., *Cloud FinOps*, 2nd ed., O'Reilly, 2023.
2. FinOps Foundation, *FinOps Framework*, https://www.finops.org/framework/.
3. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Cloud computing](https://en.wikipedia.org/wiki/Cloud_computing).
7. Wikipedia, [Pay as you go](https://en.wikipedia.org/wiki/Pay_as_you_go).
8. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
9. Wikipedia, [Serverless computing](https://en.wikipedia.org/wiki/Serverless_computing).
10. Wikipedia, [Volume discount](https://en.wikipedia.org/wiki/Volume_discount).
11. Wikipedia, [Carbon footprint](https://en.wikipedia.org/wiki/Carbon_footprint).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Anomaly detection](https://en.wikipedia.org/wiki/Anomaly_detection).
14. Wikipedia, [Variance analysis](https://en.wikipedia.org/wiki/Variance_analysis).
