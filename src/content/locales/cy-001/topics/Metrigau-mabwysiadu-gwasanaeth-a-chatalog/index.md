# Metrigau mabwysiadu gwasanaeth a chatalog

**Nid yw gwasanaeth nad oes neb yn ei ddewis, yn dod o hyd iddo, nac yn cwblhau cais amdano wedi cyflwyno gwerth, felly mesurwch sut mae pobl yn darganfod ac yn defnyddio'r hyn a gynigiwch, a chadwch y catalog mor onest ag ôl-groniad.**

## Crynodeb a chymhelliant

Mae timau'n buddsoddi mewn gwasanaethau ac yna'n darganfod nad yw pobl yn eu defnyddio. Mae'r porth hunanwasanaeth newydd yn cael ei osgoi gan e-bost. Mae eitem gatalog wedi'i dylunio'n ofalus ar gyfer mynediad meddalwedd yn cael dau gais y flwyddyn tra bo cant y mis yn cyrraedd drwy sgwrs. Mae gwasanaeth monitro yn lansio ac nid yw hanner y timau y'i hadeiladwyd ar eu cyfer byth yn cysylltu ag ef. Mabwysiadu yw hanner coll cyflawni: dim ond pan fo'r defnyddwyr bwriadedig yn dechrau, yn parhau, ac yn gorffen ei ddefnyddio y mae gwasanaeth yn werthfawr.

Y **catalog gwasanaethau** (sillafiad ITIL ei hun yw "service catalogue") yw'r rhestr o wasanaethau ac eitemau y gellir gofyn amdanynt y mae sefydliad yn eu cynnig, wedi'u disgrifio mewn termau y gall ei ddefnyddwyr eu deall. Fel arfer mae gan [gatalog gwasanaethau](https://en.wikipedia.org/wiki/Service_catalog) olwg sy'n wynebu cwsmeriaid, sy'n rhestru'r hyn y gall defnyddiwr ofyn amdano a sut, ac olwg dechnegol, sy'n cofnodi sut mae pob gwasanaeth wedi'i adeiladu a'i gefnogi. Bydd timau ystwyth yn adnabod y siâp: mae catalog yn fath o [ôl-groniad cynnyrch](https://en.wikipedia.org/wiki/Product_backlog) i'r gwrthwyneb. Mae ôl-groniad yn rhestru'r hyn yr ydych yn bwriadu ei adeiladu. Mae catalog yn rhestru'r hyn yr ydych eisoes yn ei gynnig, ac mae angen yr un gofal ar y ddau: trefnu, tocio, geiriad clir, a ffrwd gyson o adborth gan ddefnyddwyr (gweler pwnc 2.6, Metrigau ôl-groniad a mireinio).

**Mabwysiadu** yw'r graddau y mae'r defnyddwyr bwriadedig yn cymryd i fyny ac yn parhau i ddefnyddio gwasanaeth. Mae gan astudiaeth sut mae arferion newydd yn lledaenu hanes hir; mae damcaniaeth [tryledu arloesiadau](https://en.wikipedia.org/wiki/Diffusion_of_innovations) yn disgrifio mabwysiadu fel proses dros amser, gyda mabwysiadwyr cynnar, mwyafrif, a rhai hwyr. Ar gyfer gwasanaeth mewnol, y wers ymarferol yw anaml y mae mabwysiadu'n digwydd oherwydd cyhoeddiad. Mae'n digwydd pan fo'r gwasanaeth yn hawdd dod o hyd iddo, yn hawdd ei ddefnyddio, ac yn amlwg yn well na'r datrysiad dros dro.

Mae mesurau mabwysiadu yn demtasiwn i'w troi'n dargedau. Mae gorfodi sianel yn gwneud i rif defnydd edrych yn dda tra bo defnyddwyr yn digio ac yn adeiladu datrysiadau dros dro. Mae gwthio pob cais i eitem gatalog yn codi cwmpas y catalog tra bo cwblhau'n disgyn. Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol, felly mae pob mesur yma wedi'i baru â gwiriad bod gwerth go iawn, nid defnydd yn unig, yn codi (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae'r pwnc hwn yn ymdrin â phedwar peth: a yw pobl yn defnyddio gwasanaeth (mabwysiadu), a allant ddod o hyd i'r hyn y daethant amdano a'i gwblhau (catalog a llif ceisiadau), a yw'r catalog yn gyfredol ac yn onest (hylendid), ac a yw defnydd wedi'i grynhoi mewn ychydig o eitemau (siâp). Mae'n cysylltu â chyflawni ceisiadau (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth) a hunanwasanaeth (gweler pwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio), sy'n ymdrin â'r hyn sy'n digwydd ar ôl gwneud y cais.

## Egwyddorion allweddol

- **Canlyniad yw mabwysiadu, felly gofynnwch beth yr oedd y defnyddiwr yn ceisio ei wneud.** Cyfrwch nodau a gwblhawyd, nid golygon tudalennau.
- **Mesurwch y twmffat, nid dim ond y cyfanswm.** Mae ble mae pobl yn gollwng yn dweud wrthych beth i'w drwsio.
- **Cymharwch â'r dewis amgen.** Mae gwasanaeth yn cystadlu ag e-bost, sgwrs, galwad ffôn, a datrysiad dros dro.
- **Cadwch y catalog mor fach ac mor gyfredol ag y gall fod.** Mae eitemau hen yn dysgu defnyddwyr i roi'r gorau i edrych.
- **Segmentwch cyn dod i gasgliad.** Mae cyfartaleddau ar draws pob defnyddiwr yn cuddio'r grwpiau nad yw'r gwasanaeth yn gweithio iddynt.
- **Peidiwch byth â gorfodi defnydd i godi rhif.** Mae gorfodaeth yn cynhyrchu rhifau, nid mabwysiadu.
- **Trinwch ddefnydd isel fel cwestiwn i'r perchennog a'r defnyddwyr.** Gall olygu nad oes angen y gwasanaeth.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd mabwysiadu | Cyfran y defnyddwyr cymwys a ddefnyddiodd wasanaeth o leiaf unwaith yn y cyfnod | defnyddwyr cymwys gwahanol gydag o leiaf un defnydd a gwblhawyd / defnyddwyr cymwys | canran | Logiau defnydd gwasanaeth wedi'u huno â'r cyfeiriadur defnyddwyr | Rheoli catalog gwasanaethau; rheoli lefel gwasanaeth | Mabwysiadu nodwedd; adolygiad canlyniad cynnyrch | Misol |
| Cyfradd defnydd gweithredol | Cyfran y mabwysiadwyr sy'n dal i ddefnyddio'r gwasanaeth dros amser | defnyddwyr gweithredol yn y cyfnod a ddefnyddiodd y gwasanaeth hefyd yn y cyfnod blaenorol / defnyddwyr gweithredol yn y cyfnod blaenorol | canran | Logiau defnydd; tablau carfannau | Gwelliant parhaus | Cadw mewn dadansoddeg cynnyrch | Misol |
| Cwmpas y catalog | Cyfran y ceisiadau sy'n cyrraedd drwy'r catalog yn lle sianeli ad hoc | ceisiadau a grëwyd drwy'r catalog / pob cais, o bob sianel | canran | Offeryn rheoli ceisiadau; tagiau post a sgwrs | Rheoli ceisiadau gwasanaeth; rheoli catalog gwasanaethau | Eitemau ôl-groniad sy'n cario diffiniad ysgrifenedig | Misol |
| Cyfradd gadael ceisiadau | Cyfran y ceisiadau a ddechreuwyd nad yw'r defnyddiwr yn eu cyflwyno | ceisiadau a ddechreuwyd ond heb eu cyflwyno o fewn 24 awr / ceisiadau a ddechreuwyd | canran | Dadansoddeg porth | Rheoli ceisiadau gwasanaeth | Gadael tasg mewn profion defnyddioldeb | Misol |
| Cyfradd llwyddiant chwilio | Cyfran y chwiliadau catalog sy'n gorffen mewn cais neu ateb a welwyd | chwiliadau a ddilynwyd gan gais neu olwg gwybodaeth o fewn y sesiwn / chwiliadau | canran | Logiau chwilio porth | Rheoli gwybodaeth; rheoli catalog gwasanaethau | Dod o hyd iddo mewn ymchwil defnyddwyr | Misol |
| Cyfran eitemau hen | Cyfran yr eitemau catalog sydd wedi mynd heibio eu dyddiad adolygu neu heb ddefnydd mewn cyfnod penodol | eitemau sy'n hwyr i'w hadolygu neu heb unrhyw geisiadau mewn 12 mis / eitemau yn y catalog | canran | Cofrestr y catalog | Rheoli catalog gwasanaethau | Oedran ôl-groniad a thocio | Chwarterol |
| Crynodiad ceisiadau | Cyfran y ceisiadau a gyfrifir gan yr eitemau y gofynnir amdanynt fwyaf | ceisiadau am y pum eitem uchaf / pob cais catalog | canran | Offeryn rheoli ceisiadau | Rheoli ceisiadau gwasanaeth | Pareto gwaith yn ôl math | Chwarterol |

Nodwch y sylfaen defnyddwyr ar gyfer pob mesur. Rhaid diffinio "defnyddwyr cymwys" cyn i chi fesur, er enghraifft staff yn y rolau a allai ddefnyddio gwasanaeth, a chofnodi'r rhestr yn y gofrestr metrigau. Cyfrwch ddefnydd dim ond pan fo'n gorffen mewn canlyniad a gwblhawyd, megis mynediad a ddarparwyd, ac nid pan fo tudalen yn llwytho. Eithrir cyfrifon prawf a thraffig awtomataidd.

## Argymhellion

### Adnabyddwch eich gwasanaethau a'ch defnyddwyr

**1. Diffiniwch y gynulleidfa fwriadedig ar gyfer pob gwasanaeth.** Cyn mesur mabwysiadu, ysgrifennwch i lawr pwy yw'r gwasanaeth ar ei gyfer, a pham y byddent yn ei ddefnyddio yn lle'r dewis amgen. Nid yw gwasanaeth dadansoddeg newydd a adeiladwyd ar gyfer staff cyllid yn "fabwysiadu isel" os mai dim ond staff cyllid oedd i fod i'w ddefnyddio. Heb gynulleidfa ddiffiniedig, mae cyfradd mabwysiadu yn rhif am neb.

**2. Cofnodwch y dewis amgen.** Ar gyfer pob prif wasanaeth, rhestrwch beth mae pobl yn ei wneud nawr pan na fyddant yn ei ddefnyddio: gofyn i gydweithiwr, anfon e-bost, prynu offeryn, rhedeg taenlen. Trinwch y dewis amgen fel cystadleuydd yn yr ystyr sy'n bwysig: dyna lle mae eich defnyddwyr yn mynd pan fo eich gwasanaeth yn anoddach. Cymharwch ymdrech y ddau lwybr yn ystod dylunio ac adolygu.

**3. Disgrifiwch eitemau yn iaith y defnyddiwr.** Mae teitlau fel "Mynediad meddalwedd, safonol" ac "Amnewid gliniadur, wedi'i ddifrodi" yn haws dod o hyd iddynt nag enwau mewnol. Profwch deitlau drwy ofyn i ychydig o ddefnyddwyr ddod o hyd i eitem o senario byr. Mae problemau geiriad yn ymddangos yn gyflym yn y logiau chwilio.

**4. Cadwch berchennog ar gyfer pob eitem.** Mae gan bob eitem gatalog berchennog a enwir, dyddiad adolygu, disgrifiad o'r gynulleidfa, a'r cyfaint disgwyliedig. Mae eitemau heb berchnogion yn drifftio. Os na all neb ddweud pwy sy'n defnyddio eitem a pham, mae'n ymgeisydd i'w dileu.

### Mesurwch y daith

**5. Offerynnwch y twmffat.** Ar gyfer pob gwasanaeth pwysig, cofnodwch y camau o ddarganfod i ganlyniad a gwblhawyd: dod o hyd i'r eitem, dechrau'r cais, llenwi'r ffurflen, cyflwyno, derbyn y canlyniad. Mae golwg [twmffat trosi](https://en.wikipedia.org/wiki/Conversion_funnel) yn dangos ble mae defnyddwyr yn gadael. Trwsiwch y gostyngiad mwyaf yn gyntaf. Gwiriwch fod yr atgyweiriadau yn gwneud y ffurflen yn fyrrach neu'n gliriach, nid dim ond y data yn bertach.

**6. Defnyddiwch garfannau i weld cadw.** Mae [dadansoddi carfannau](https://en.wikipedia.org/wiki/Cohort_analysis) yn grwpio defnyddwyr yn ôl pryd y defnyddiasant y gwasanaeth gyntaf ac yn dilyn pob grŵp. Mae'n gwahanu gwasanaeth sy'n cadw ei ddefnyddwyr oddi wrth un sy'n eu denu unwaith ac yn eu colli. Defnyddiwch ef ar gyfer gwasanaethau y dylid eu defnyddio dro ar ôl tro, megis porth y ddesg gwasanaeth neu biblinell defnyddio.

**7. Darllenwch logiau chwilio am yr hyn na all pobl ddod o hyd iddo.** Mae chwiliadau heb ganlyniad, neu chwiliadau a ailadroddir â geiriau gwahanol, yn pwyntio at fylchau mewn enwi, mewn cynnwys, neu yn y catalog ei hun. Adolygwch y prif chwiliadau di-ganlyniad bob mis a phenderfynwch ar gyfer pob un: ailenwi eitem, ychwanegu cyfystyr, ysgrifennu erthygl, neu greu eitem newydd. Gall offer [dadansoddeg gwe](https://en.wikipedia.org/wiki/Web_analytics) ddarparu hyn, ac felly hefyd logiau'r porth ei hun.

**8. Segmentwch yn ôl grŵp.** Dadansoddwch fabwysiadu a gadael yn ôl rôl, lleoliad, dyfais, ac anghenion hygyrchedd lle mae gennych fynediad cyfreithlon a moesegol at yr wybodaeth honno. Gall y cyfanred edrych yn iach tra bo staff sifft nos neu ddefnyddwyr ar ddyfeisiau symudol yn methu ar ddwywaith y gyfradd. Mygwch grwpiau bach i warchod pobl, a chyfunwch â'r mesurau profiad yn y pynciau blaenorol (gweler pwnc 6.2, Cytundebau lefel profiad).

### Cadwch y catalog yn onest

**9. Tociwch ar amserlen.** Adolygwch y catalog bob chwarter. Dilëwch neu unwch eitemau heb ddefnydd, ymddeolwch eitemau ar gyfer gwasanaethau a derfynwyd, a thrwsiwch eitemau gyda gadael uchel. Mae catalog llai, cywir yn gwasanaethu defnyddwyr yn well na un cyflawn, hen. Trinwch ddileu fel peth arferol a chofnodwch y rheswm.

**10. Edrychwch ar siâp galw.** Yn y rhan fwyaf o gatalogau mae ychydig o eitemau yn cyfrif am y rhan fwyaf o'r ceisiadau, patrwm a ddisgrifir yn aml drwy'r [egwyddor Pareto](https://en.wikipedia.org/wiki/Pareto_principle). Defnyddiwch ef i ganolbwyntio ymdrech ddylunio ar yr eitemau mynych ac i awtomeiddio'r rhai sy'n arferol (gweler pwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio). Peidiwch â gollwng y gynffon hir heb edrych, gan y gall eitemau prin fod yn bwysig iawn i'r bobl sydd eu hangen.

**11. Peidiwch â gorfodi mabwysiadu.** Os oes angen gwasanaeth, bydd defnyddwyr yn dod unwaith y bydd yn hawdd. Lle mae'r sefydliad yn mynnu sianel am resymau rheolaeth neu archwilio, dywedwch hynny, a byddwch yn agored bod y rhif yn adlewyrchu rheol, nid dewis. Osgowch [batrymau tywyll](https://en.wikipedia.org/wiki/Dark_pattern), megis cuddio'r rhif ffôn neu wneud y dewis amgen yn anoddach, gan eu bod yn codi defnydd ac yn gostwng ymddiriedaeth.

**12. Caewch y ddolen gyda pherchnogion a defnyddwyr.** Rhannwch y twmffat, y bylchau chwilio, a'r rhestr hen gyda pherchnogion eitemau bob mis. Gofynnwch i ddefnyddwyr, yn yr arolwg ac mewn adolygiadau, pam y maent yn defnyddio neu'n osgoi gwasanaeth (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid). Cofnodwch yr hyn a newidiasoch yn y gofrestr a dywedwch wrth ddefnyddwyr ei fod wedi digwydd.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfradd mabwysiadu | Gorfodi defnydd; cyfrif mewngofnodi neu olygon tudalennau fel defnydd; culhau "defnyddwyr cymwys" i'r rhai sydd eisoes yn ei ddefnyddio | Diffiniad canlyniad a gwblhawyd; cymharu â sgoriau bodlonrwydd ac ymdrech; cyhoeddi'r rheol defnyddwyr cymwys |
| Cyfradd defnydd gweithredol | Cofrestru defnyddwyr yn awtomatig fel eu bod yn ymddangos yn weithredol; anfon hysbysiadau sy'n cyfrif fel gweithgarwch | Cyfrwch weithredoedd a gwblhawyd a gychwynnwyd gan ddefnyddwyr yn unig; cyfweliadau sampl gyda defnyddwyr a ddaeth i ben |
| Cwmpas y catalog | Gorfodi pob cais i eitem gatalog generig; cau ceisiadau e-bost gyda "defnyddiwch y porth os gwelwch yn dda" | Cyfradd gadael ceisiadau a bodlonrwydd; cyfrif faint o geisiadau sy'n cael eu hail-godi gan sianel arall |
| Cyfradd gadael ceisiadau | Dileu meysydd ffurflen sydd eu hangen, sy'n symud gwaith i gyflawni; cyfrif ceisiadau a adawyd dim ond ar ôl ffenestr hir | Cyfradd ailwaith ac eglurhad wrth gyflawni (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth) |
| Cyfradd llwyddiant chwilio | Cyfrif unrhyw glic fel llwyddiant; ychwanegu erthyglau amherthnasol sy'n cyfateb i bob ymholiad | Gwirio bod y canlyniad wedi'i ddefnyddio (cais wedi'i wneud, erthygl wedi'i graddio'n ddefnyddiol); darllen chwiliadau di-ganlyniad |
| Cyfran eitemau hen | Marcio eitemau fel rhai a adolygwyd heb eu darllen; ailosod dyddiadau adolygu mewn swmp | Samplu eitemau a adolygwyd am gywirdeb; dangos dyddiad newid go iawn diwethaf |
| Crynodiad ceisiadau | Hollti eitemau poblogaidd yn llawer; uno eitemau digyswllt i guddio galw cynffon hir | Tacsonomeg eitemau sefydlog gyda log newid; edrych ar y gynffon yn ôl categori |

Mae darlleniad iach yn gatalog lle mae'r eitemau a ddefnyddir fwyaf yn gweithio'n dda ac yn dod yn haws, lle mae defnyddwyr yn dewis y gwasanaeth oherwydd ei fod yn well na'r dewis amgen, a lle mae ymddeol eitem yn arferol.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Sianel wedi'i gorfodi | Cyfaint rhagweladwy, hawdd ei archwilio | Dicter, datrysiadau dros dro, rhifau chwyddedig |
| Mabwysiadu gwirfoddol | Signal gonest o werth | Arafach; efallai na chaiff rhai gwasanaethau eu mabwysiadu byth |
| Catalog mawr | Cyflawn, yn cwmpasu anghenion prin | Anodd chwilio; yn mynd yn hen |
| Catalog bach | Hawdd dod o hyd iddo a'i gynnal | Mae anghenion prin yn syrthio y tu allan; mae defnyddwyr yn troi at e-bost |
| Mesurau twmffat | Pwyntio at ble mae defnyddwyr yn gollwng | Angen offeryniaeth; gall annog optimeiddio'r ffurflen ar draul y canlyniad |
| Arolwg ar pam | Esbonio ymddygiad | Wedi'i ogwyddo gan bwy sy'n ateb; anodd ei raddio |

Yr ateb pragmatig yw ffafrio mabwysiadu gwirfoddol gyda mantais ansawdd glir, a defnyddio gorfodaeth dim ond lle mae rheolaeth neu gydymffurfio yn gofyn amdani, gyda'r rhif wedi'i labelu yn unol â hynny. Cadwch y catalog yn ddigon bach i'w gynnal, a rhowch y gynffon mewn cronfa wybodaeth chwiliadwy, nid mewn cant o eitemau hanner-defnyddiedig.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pwy yw pob un o'n prif wasanaethau ar ei gyfer, a sut y byddem yn gwybod eu bod yn ei ddefnyddio?**
Rhestrwch y pum gwasanaeth y mae eich tîm yn treulio'r mwyaf o amser arnynt ac ysgrifennwch y gynulleidfa fwriadedig ar gyfer pob un. Yna gofynnwch sut y gellid mesur mabwysiadu ar eu cyfer. Dylai'r hwylusydd chwilio am wasanaethau lle na all neb enwi'r gynulleidfa, gan fod y rheini'n debygol o fod heb gynllun mabwysiadu.

**2. Beth mae pobl yn ei wneud pan na fyddant yn defnyddio ein gwasanaeth, a pham?**
Ar gyfer un gwasanaeth mabwysiadu isel, cyfwelwch neu arolygwch ychydig o ddefnyddwyr sy'n ei osgoi. Mae'r dewis amgen fel arfer yn dadlennol: gall fod yn gyflymach, yn fwy cyfarwydd, neu'n fwy hyblyg. Penderfynwch a ddylid gwella'r gwasanaeth, newid y dewis amgen, neu dderbyn nad oes angen y gwasanaeth.

**3. Ble mae defnyddwyr yn gollwng yn ein heitem y gofynnir amdani fwyaf?**
Dangoswch y twmffat ar gyfer yr eitem uchaf, o'r olwg gyntaf i'r cyflwyniad. Gofynnwch i'r tîm ddyfalu ble mae'r gostyngiad mwyaf, yna cymharwch. Cytunwch ar un newid i'w brofi, a dywedwch sut y byddwch yn gwirio ei fod wedi helpu heb symud y broblem i rywle arall.

**4. Beth fyddem ni'n ei ddileu o'r catalog pe baem yn meiddio?**
Argraffwch y rhestr o eitemau heb geisiadau mewn blwyddyn. Gofynnwch beth fyddai'n digwydd pe bai pob un yn diflannu. Mae'r sgwrs yn aml yn canfod bod eitem yn bodoli oherwydd bod rhywun wedi gofyn amdani unwaith. Cytunwch ar ddyddiad i ddileu neu uno'r pump cyntaf, a nodyn i ddefnyddwyr.

**5. Ble ydym ni'n gwthio neu'n gorfodi defnyddwyr, ac a yw'n werth y gost?**
Rhestrwch bob man lle mae rheol neu ddyluniad yn gwthio defnyddwyr i sianel. Gofynnwch pa rai sydd eu hangen mewn gwirionedd a pha rai sy'n arfer. Dylai'r hwylusydd archwilio sut mae defnyddwyr yn profi pob un, ac a yw'r rhifau sy'n deillio ohono yn golygu'r hyn y mae arweinwyr yn credu eu bod yn ei olygu.

**6. Beth mae pobl yn chwilio amdano nad oes gennym ni?**
Adolygwch y prif chwiliadau di-ganlyniad. Ar gyfer pob un, penderfynwch a ddylid ychwanegu eitem, ysgrifennu erthygl, neu egluro nad yw'r gwasanaeth yn bodoli. Gofynnwch pwy sy'n berchen ar yr adolygiad hwn a pha mor aml y bydd yn digwydd.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn adeiladu gwasanaethau a nodweddion sydd angen mabwysiadu i fod o bwys. Dylent ddiffinio'r gynulleidfa ar y dechrau, adeiladu mesurau defnydd i'r gwasanaeth, ac adolygu'r twmffat ar ôl lansio. Mae data mabwysiadu yn adborth ar y gwaith, ac mae'n perthyn mewn mireinio ac adolygu. Dylai timau osgoi datgan rhyddhad wedi'i orffen pan fo'n cludo. Mae gorffen yn golygu bod y defnyddwyr bwriadedig yn cael y budd.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn rhedeg y catalog ac yn gweld y ceisiadau sy'n cyrraedd drwy bob sianel. Dylent gadw'r catalog yn gyfredol, tagio ceisiadau sy'n ei osgoi, a gofyn pam. Ni ddylent gau cais drwy ei ailgyfeirio, gan fod hynny'n cuddio'r signal. Bylchau chwilio a gadael yw eu ffynhonnell orau o welliannau i'r porth.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn penderfynu a yw mabwysiadu yn sgwrs neu'n gwota. Dylent ofyn beth yw pwrpas y gwasanaeth, pwy y mae'n ei helpu, a pham y mae pobl yn ei ddewis. Dylent osgoi gosod targedau mabwysiadu ar gyfer timau unigol, cefnogi ymddeol gwasanaethau nas defnyddir, a disgwyl gweld mabwysiadu ochr yn ochr â bodlonrwydd ac ymdrech. Lle mae gorfodaeth yn gyfiawn, dylai arweinwyr ei hesbonio i ddefnyddwyr.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr eisiau cael yr hyn sydd ei angen arnynt gydag ychydig o ymdrech. Maent yn sylwi pan fo porth yn anodd ei chwilio, pan fo ffurflenni yn gofyn am bethau y mae'r sefydliad eisoes yn eu gwybod, a phan fo'r hen ffordd yn gyflymach. Eu hymddygiad, a'r hyn y maent yn ei ddweud, yw'r signal mabwysiadu mwyaf gonest. Dylid gofyn iddynt pam y maent yn osgoi gwasanaeth, a dweud wrthynt beth a newidiodd o ganlyniad.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG asiantaeth drafnidiaeth genedlaethol yn rhedeg desg gwasanaeth, porth hunanwasanaeth gyda chatalog o tua 140 o eitemau, a sawl tîm cynnyrch. Mae'r rhifau isod yn enghreifftiol.

Lansiwyd y porth flwyddyn yn ôl, a gosododd yr arweinyddiaeth nod o 80 y cant o geisiadau drwyddo. Mae'r adroddiad misol yn dangos cwmpas o 78 y cant, ac mae pennaeth rheoli gwasanaeth yn falch nes iddi ddarllen y sylwadau o'r arolwg defnyddwyr. Mae staff mewn swyddfeydd rhanbarthol yn dweud bod y porth yn araf a'r ffurflenni yn hir. Mae hi'n gofyn i reolwr y catalog edrych ar y twmffat a'r logiau chwilio.

Mae'r twmffat ar gyfer "Offer dechreuwr newydd" yn dangos 1,100 o ddechreuadau y chwarter a 640 o gyflwyniadau, cyfradd gadael o 42 y cant. Mae gan y ffurflen 23 o feysydd. Mae'r log chwilio yn dangos y term "gliniadur" yn dychwelyd wyth eitem, a'r term "VPN" yn dychwelyd dim, er mai dyma'r term a chwilir amlaf. O'r 140 eitem gatalog, nid oedd gan 38 gais mewn 12 mis ac mae 21 wedi mynd heibio eu dyddiad adolygu. Mae'r pum eitem uchaf yn cyfrif am 61 y cant o geisiadau, ac mae 15 y cant arall o geisiadau yn cyrraedd drwy e-bost ac yn cael eu logio â llaw.

Mae'r tîm yn gwneud pedwar newid. Mae'n torri'r ffurflen dechreuwr newydd i naw maes drwy ddefnyddio data y mae'r system AD eisoes yn ei ddal. Mae'n ychwanegu erthygl VPN ac eitem gyda chyfystyron. Mae'n uno'r wyth eitem gliniadur yn ddwy. Ac mae'n ymddeol 19 o'r eitemau nas defnyddir gyda nodyn i berchnogion. Mae hefyd yn newid sut y darllenir yr adroddiad misol: dangosir cwmpas gyda'r gyfradd gadael a'r cwestiwn arolwg "pa mor hawdd oedd cael yr hyn yr oedd ei angen arnoch?" Dri mis yn ddiweddarach, mae gadael yr eitem dechreuwr newydd yn disgyn i 24 y cant, cwmpas y porth yw 74 y cant, ac mae'r sgôr ymdrech o swyddfeydd rhanbarthol yn codi. Mae'r cyfarwyddwr yn gofyn pam y disgynnodd y cwmpas. Mae pennaeth rheoli gwasanaeth yn esbonio bod ceisiadau e-bost wedi'u cau'n rymus yn flaenorol, a bod y rhif is yn fwy gonest a'r profiad yn well. Mae'r log penderfyniadau yn cofnodi bod y targed yn cael ei ddisodli gan gyfeiriad: lleihau gadael a chodi'r sgôr ymdrech, gyda chwmpas yn cael ei adolygu ond heb ei dargedu.

## Y golwg fesul sector

**Busnes newydd.** Yn aml nid oes catalog. Mae tudalen syml o "sut i gael X" a sianel a rennir yn ddigon. Gwyliwch beth mae pobl yn gofyn amdano a throwch y pum cais uchaf yn ganllawiau byr. Mesurwch fabwysiadu offer mewnol drwy ofyn i ddefnyddwyr, a hepgorwch dwmffatiau ffurfiol.

**Busnes bach.** Ychydig o bobl sy'n darparu TG, ac mae ceisiadau'n cyrraedd drwy bob sianel. Mae catalog cymedrol o 10 i 20 eitem yn cwmpasu'r rhan fwyaf o anghenion. Peidiwch â gorfodi defnyddwyr i borth sy'n costio mwy i'w gynnal na'r ceisiadau y mae'n eu trin. Adolygwch y rhestr ddwywaith y flwyddyn.

**Menter fawr.** Mae graddfa yn rhoi catalog i chi sy'n ddigon mawr i fod angen llywodraethu: perchnogion, dyddiadau adolygu, a thacsonomeg. Segmentwch fabwysiadu yn ôl uned fusnes a rhanbarth, ac osgowch orfodaethau menter-eang sy'n anwybyddu anghenion lleol. Gwyliwch am gyflenwyr y cyfrifir eu heitemau catalog ond na chânt eu defnyddio.

**Llywodraeth a'r sector cyhoeddus.** Mae gwasanaethau'n cyrraedd y cyhoedd yn ogystal â staff, gyda dyletswyddau ar hygyrchedd, iaith, a mynediad cyfartal. Cynhwyswch sianeli â chymorth (ffôn, wyneb yn wyneb) yn y mesurau fel nad yw mabwysiadu digidol yn cuddio gwahardd. Lle mae rheolau cyfreithiol neu bolisi yn gofyn am sianel, nodwch hynny mewn adroddiadau (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae'r costau'n gymedrol. Mae logiau defnydd a data ceisiadau fel arfer eisoes yn bodoli. Mae dadansoddi twmffat a chwilio angen mynediad at ddadansoddeg porth, y mae'r rhan fwyaf o lwyfannau yn ei ddarparu. Y prif gost amser yw'r adolygiad catalog chwarterol ac edrychiad misol ar fylchau chwilio a gadael, ychydig oriau yr un. Mae trwsio ffurflenni ac uno eitemau yn costio amser dylunio a chyfluniad.

Daw'r elw o wasanaethau a ddefnyddir, ceisiadau sy'n gorffen, a llai o wastraff wrth gyflawni. Mae ffurflen fyrrach sy'n torri gadael yn lleihau cysylltiadau dro ar ôl tro a thrin â llaw. Mae tocio eitemau nas defnyddir yn lleihau cynnal a chadw. Adeiladwch yr achos o'ch rhifau eich hun: cyfradd gadael, amser trin â llaw fesul cais e-bost, a chost cynnal eitem nas defnyddir, cyn ac ar ôl newidiadau. Osgowch hawliadau cyhoeddedig am ROI porth na allwch eu holrhain, gan eu bod yn dibynnu ar sefydliad a dull.

## Gwrthbatrymau a maglau

- **Cyfrif lansiadau fel mabwysiadu.** Mabwysiedir gwasanaeth pan fo defnyddwyr bwriadedig yn cwblhau canlyniadau gydag ef. Mesurwch y defnydd, nid y cyhoeddiad.
- **Gorfodi sianel i godi rhif.** Bydd defnyddwyr yn gweithio o'i chwmpas. Gwellwch y gwasanaeth a gadewch i'r rhif ddilyn.
- **Ychwanegu eitemau a byth ddileu rhai.** Mae'r catalog yn dod yn anchwiliadwy. Tociwch bob chwarter.
- **Edrych ar gyfansymiau yn unig.** Segmentwch yn ôl grŵp ac edrychwch ar y twmffat.
- **Cau ceisiadau e-bost gydag ailgyfeirio.** Mae'n cuddio galw ac yn cythruddo defnyddwyr. Trinwch y cais a thrwsiwch y llwybr.
- **Defnyddio golygon tudalennau fel defnydd.** Cyfrwch ganlyniadau a gwblhawyd.
- **Trin defnydd isel fel methiant defnyddwyr.** Gofynnwch a oes angen y gwasanaeth ac a yw'n hawdd ei ddefnyddio.
- **Gadael i berchnogion eitemau lapsio.** Neilltuwch berchnogion a dyddiadau adolygu ar gyfer pob eitem.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Dylunio'r catalog | Rhestr a dyfodd drwy gais | Mae catalog yn bodoli, geiriad yn anghyson | Eitemau yn iaith y defnyddiwr gyda pherchnogion a dyddiadau adolygu | Tocio chwarterol; tacsonomeg wedi'i rheoli | Catalog wedi'i rannu ar draws timau a chyflenwyr; eitemau wedi'u cyd-ddylunio gyda defnyddwyr |
| Mesur mabwysiadu | Hanesyn | Cyfrifon ceisiadau yn ôl eitem | Mabwysiadu wedi'i ddiffinio gan ddefnyddwyr cymwys a chanlyniadau a gwblhawyd | Twmffatiau, carfannau, a segmentau wedi'u hadolygu'n fisol | Mabwysiadu wedi'i gysylltu â phrofiad a chanlyniadau ar draws gwasanaethau |
| Gwelliant | Atgyweiriadau ad hoc | Atgyweiriadau ar ôl cwynion | Bylchau chwilio a gadael wedi'u hadolygu'n fisol | Atgyweiriadau wedi'u blaenoriaethu a'u holrhain ar ôl-groniad | Gwelliant wedi'i gydlynu gyda defnyddwyr, gyda gwasanaethau wedi'u hymddeol yn cael eu hadrodd yn agored |

## Rhestr wirio

- [ ] Mae gan bob prif wasanaeth gynulleidfa fwriadedig ysgrifenedig a llwybr amgen.
- [ ] Diffinnir mabwysiadu fel canlyniadau a gwblhawyd gan ddefnyddwyr cymwys.
- [ ] Mae gan eitemau catalog berchnogion, disgrifiadau yn iaith y defnyddiwr, a dyddiadau adolygu.
- [ ] Offerynnir y twmffat ar gyfer yr eitemau y gofynnir amdanynt fwyaf.
- [ ] Adolygir chwiliadau di-ganlyniad yn fisol.
- [ ] Segmentir mabwysiadu a gadael yn ôl grŵp, gyda grwpiau bach wedi'u mygu.
- [ ] Tagir a chyfrifir ceisiadau sy'n cyrraedd y tu allan i'r catalog.
- [ ] Tociwyd y catalog bob chwarter, gyda rhesymau wedi'u cofnodi.
- [ ] Dangosir mabwysiadu wrth ymyl mesurau bodlonrwydd neu ymdrech.
- [ ] Ni osodir unrhyw darged mabwysiadu ar gyfer tîm neu berson unigol.

## Anogwyr AI

**Dadansoddwch dwmffat ceisiadau.**

```text
Ar gyfer yr eitem gatalog [enw'r eitem] mewn [math o sefydliad], ein data porth
ar gyfer [cyfnod] yw: golygon [nifer], dechreuadau [nifer], cyflwyniadau
[nifer], a chyflawnwyd [nifer]. Mae gan y ffurflen [nifer] o feysydd: [rhestr].
Disgrifiwch ble mae defnyddwyr yn debygol o gael trafferth, awgrymwch dri
newid i'w profi, a dywedwch sut y byddwn yn gwirio bod pob newid wedi helpu heb
symud y broblem i gyflawni. Peidiwch â dyfeisio gwerthoedd meincnod. Rhestrwch
eich rhagdybiaethau a pha ddata ychwanegol sydd ei angen arnoch.
```

**Adolygwch logiau chwilio am fylchau catalog.**

```text
Dyma'r [nifer] chwiliad catalog uchaf o [cyfnod] gyda chyfrifon canlyniadau:
[gludwch ddata]. Grwpiwch hwy yn themâu, nodwch chwiliadau sy'n dychwelyd dim
neu ormod o eitemau, ac awgrymwch a oes angen eitem newydd, ailenwi, cyfystyr,
neu erthygl wybodaeth ar bob un. Peidiwch â dyfalu am wasanaethau y gallem eu
cynnig. Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu gofyn i
berchnogion yr eitemau.
```

**Cynlluniwch adolygiad tocio catalog.**

```text
Rwy'n rheoli catalog o [nifer] o eitemau. Ar gyfer pob un o'r eitemau hyn mae
gennyf gyfrifon ceisiadau am 12 mis, dyddiadau adolygu, a pherchnogion:
[gludwch grynodeb]. Cynigiwch feini prawf ar gyfer dileu, uno, neu gadw eitem,
nodyn byr i berchnogion, a ffordd o osgoi gollwng eitemau prin ond hanfodol.
Cynhwyswch wiriad nad ydym yn symud ceisiadau i e-bost yn syml. Rhestrwch eich
rhagdybiaethau.
```

**Drafftiwch ddiffiniad mabwysiadu ar gyfer gwasanaeth.**

```text
Gwasanaeth: [enw]. Defnyddwyr bwriadedig: [rolau]. Llwybr amgen heddiw: [beth
maent yn ei wneud nawr]. Drafftiwch ddiffiniad mabwysiadu un dudalen yn
cwmpasu defnyddwyr cymwys, beth sy'n cyfrif fel defnydd a gwblhawyd, y ffynhonnell
data, sut i eithrio traffig prawf ac awtomataidd, sut y gellid chwarae'r mesur,
a rheilen warchod. Peidiwch â dyfeisio targedau. Rhestrwch eich rhagdybiaethau
ac unrhyw beth y mae angen i mi ei gadarnhau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig mabwysiadu neu gatalog.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod gan gofnod metrig catalog newydd ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Mae mabwysiadu yn golygu bod defnyddwyr bwriadedig yn cwblhau canlyniadau gyda gwasanaeth, felly diffiniwch y gynulleidfa a chyfrwch gwblhau.
- Mesurwch y twmffat, y bylchau chwilio, a chadw defnyddwyr, a segmentwch yn ôl grŵp.
- Cymharwch y gwasanaeth â'r dewis amgen sydd gan ddefnyddwyr heddiw.
- Cadwch y catalog yn fach, â pherchennog, ac wedi'i docio bob chwarter.
- Peidiwch â gorfodi defnydd i godi rhif, a pharwch fabwysiadu â bodlonrwydd ac ymdrech.
- Trinwch ddefnydd isel fel cwestiwn am angen a rhwyddineb, nid fel methiant defnyddwyr.

## Cyfeiriadau a darllen pellach

1. Rogers, E. M., *Diffusion of Innovations*, 5th ed., Free Press, 2003.
2. Hunnebeck, L., *ITIL Service Design* (service catalogue management), The Stationery Office, 2011.
3. Hunt, A. and Thomas, D., *The Pragmatic Programmer*, Addison-Wesley, for the habit of removing what is no longer useful.
4. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
5. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
6. Wikipedia, [Diffusion of innovations](https://en.wikipedia.org/wiki/Diffusion_of_innovations).
7. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
8. Wikipedia, [Conversion funnel](https://en.wikipedia.org/wiki/Conversion_funnel).
9. Wikipedia, [Cohort analysis](https://en.wikipedia.org/wiki/Cohort_analysis).
10. Wikipedia, [Web analytics](https://en.wikipedia.org/wiki/Web_analytics).
11. Wikipedia, [Pareto principle](https://en.wikipedia.org/wiki/Pareto_principle).
12. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
