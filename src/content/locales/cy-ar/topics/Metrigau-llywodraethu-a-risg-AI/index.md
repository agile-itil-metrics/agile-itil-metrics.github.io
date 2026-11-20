# Metrigau llywodraethu a risg AI

**Mae defnyddio AI angen yr un ddisgyblaeth ag unrhyw newid i wasanaeth byw: gwybod ble mae, pwy sy'n berchen arno, pa mor beryglus ydyw, sut y caiff ei brofi a'i newid, a beth sy'n digwydd pan fo'n mynd o'i le, gyda goruchwyliaeth y gall pobl ei harfer mewn gwirionedd.**

## Crynodeb a chymhelliant

Mae AI yn cyrraedd sefydliad drwy lawer o ddrysau. Mae tîm yn mabwysiadu cynorthwyydd codio. Mae gwerthwr yn ychwanegu nodwedd gynhyrchiol at gynnyrch sydd eisoes mewn defnydd. Mae aelod o staff yn gludo dogfen i offeryn cyhoeddus. Mae adran yn adeiladu model i sgorio ceisiadau. Mae pob un yn ddefnydd o AI gyda'i fuddion a'i risgiau ei hun, ac ychydig sy'n weladwy mewn un lle. Llywodraethu yw'r set o strwythurau, polisïau, ac arferion sy'n gwneud y defnyddiau hynny yn hysbys, yn atebol, ac yn ddigon diogel. Mae metrigau risg yn dweud wrthych a yw'r llywodraethu'n gweithio.

Mae gan ITIL y blociau adeiladu: llywodraethu'r system gwerth gwasanaeth, rheoli risg, galluogi newid, rheoli diogelwch gwybodaeth, rheoli cyflenwyr, a gwelliant parhaus. Mae ffyrdd gweithio ystwyth a DevOps yn cyflenwi'r arferiad o newid bach, rheoledig, gwrthdroadwy, a gwiriadau awtomataidd yn y biblinell. Nid oes angen bydysawd ar wahân ar lywodraethu AI. Mae angen yr arferion hyn wedi'u cymhwyso i bethau sy'n ymddwyn yn wahanol i feddalwedd gonfensiynol.

Beth sy'n wahanol am AI?

- **Mae ymddygiad yn ystadegol a gall newid heb newid cod.** Gall model ymddwyn yn wahanol ar ôl diweddariad gwerthwr, newid yn ei fewnbynnau, neu newid yn yr anogwr. Gall y data y mae'n ei weld mewn cynhyrchu ddrifftio oddi wrth y data y'i profwyd arno, ffenomen a elwir mewn dysgu peirianyddol yn ddrifft. Gall system ddirywio'n dawel.
- **Nid yw allbynnau yn gwbl ragweladwy.** Ni all profi gwmpasu pob mewnbwn, felly mae gwerthuso yn ôl samplu ac yn ôl profion targedig, nid prawf. Gall systemau fethu mewn ffyrdd na ragwelodd eu hadeiladwyr.
- **Gall niwed fod yn wasgaredig ac yn anghyfartal.** Mae [tuedd algorithmig](https://en.wikipedia.org/wiki/Algorithmic_bias) yn wall systematig sy'n arwain at ganlyniadau annheg i rai grwpiau. Gall godi o ddata, dylunio, neu ddefnydd, ac efallai na fydd yn dangos mewn ffigurau cywirdeb cyffredinol.
- **Mae arwynebau ymosod newydd yn ymddangos.** Mae [chwistrellu anogwr](https://en.wikipedia.org/wiki/Prompt_injection) yn ymosodiad lle mae cyfarwyddiadau cudd mewn data mewnbwn yn trin model iaith i ymddygiad anfwriadol. Gellir cymell modelau i ddatgelu data neu gymryd gweithredoedd na fwriadwyd gan eu perchnogion.
- **Mae'r ddibyniaeth ar gyflenwyr yn ddwfn.** Daw llawer o alluoedd AI gan ddarparwyr allanol, gyda gwelededd cyfyngedig i sut y cânt eu hadeiladu neu eu newid. Mae mesurau cyflenwyr yn bwysicach (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau).
- **Mae rheolau yn dod i'r amlwg ac yn wahanol yn ôl lle.** Mae cyfreithiau, safonau, ac arweiniad ar AI yn datblygu'n gyflym. Mae [Deddf Deallusrwydd Artiffisial](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act) yr Undeb Ewropeaidd yn cymryd dull ar sail risg gyda rhwymedigaethau sy'n berthnasol fesul cam, ac mae awdurdodaethau eraill yn cymryd llwybrau gwahanol. Mae safonau megis ISO/IEC 42001 ar systemau rheoli AI a Fframwaith Rheoli Risg AI NIST yn cynnig strwythurau. Mae datganiadau am reolau penodol yn y pwnc hwn wedi'u dyddio ym mis Hydref 2026 ac y dylid eu hailwirio, a dylai cyngor cyfreithiol arwain eich rhwymedigaethau. Disgrifir y maes ehangach mewn ffyrdd amrywiol fel [AI cyfrifol](https://en.wikipedia.org/wiki/Responsible_AI) neu AI y gellir ymddiried ynddo, a'r cwestiwn o sut y dylai'r gyfraith drin AI yw pwnc [rheoleiddio deallusrwydd artiffisial](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).

Gall llywodraethu fethu mewn dwy ffordd groes. Gall fod mor drwm nes bod timau'n ei osgoi, ac mae defnyddio AI yn mynd o dan y ddaear fel [TG gysgodol](https://en.wikipedia.org/wiki/Shadow_IT). Neu gall fod yn ymarfer papur, gyda pholisi a chofrestr nad ydynt yn adlewyrchu arfer. Mae'r nodau ystwyth yn awgrymu'r llwybr canol: cynnwys rhanddeiliaid yn barhaus wrth osod y rheolau, cymeradwyaethau bach a chyflym ar gyfer defnyddiau risg isel, craffu dyfnach lle mae niwed yn bosibl, a gwelliant parhaus y rheolaethau wrth i brofiad dyfu. Bydd pobl gymhellol gyda ffiniau clir, yr ymddiriedir ynddynt i ddefnyddio barn y tu mewn iddynt, yn adrodd problemau. Ni fydd pobl sy'n ofni cosb.

Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol i fesurau llywodraethu: pan fo "canran y defnyddiau AI sydd wedi'u cofrestru" yn darged, mae cofrestri'n llenwi â chofnodion nad oes neb yn eu darllen, ac mae'r defnyddiau gwirioneddol yn aros allan o'r golwg (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae'r pwnc hwn yn adeiladu ar y pynciau ar risg, cydymffurfio, a diogelwch yn Rhan 8, ac ar y pynciau cynharach yn y rhan hon.

## Egwyddorion allweddol

- **Gwyddoch ble defnyddir AI.** Cofrestr o ddefnyddiau, gan gynnwys y rhai sydd wedi'u hymgorffori mewn cynhyrchion a'r rhai y mae staff yn eu mabwysiadu eu hunain, yw'r sylfaen.
- **Cydweddwch graffu â risg.** Ysgafn ar gyfer defnyddiau risg isel, dyfnach ar gyfer rhai canlyniadol.
- **Trinwch newidiadau model ac anogwr fel newidiadau.** Maent angen profi, cymeradwyaeth gymesur â risg, a'r gallu i wrthdroi.
- **Gwerthuswch cyn ac yn ystod defnydd.** Profwch ar achosion realistig, a daliwch i brofi mewn cynhyrchu.
- **Cadwch oruchwyliaeth ddynol ystyrlon.** Rhaid i berson allu deall, cwestiynu, a gwrthweithio, a chael yr amser a'r awdurdod i wneud hynny.
- **Dysgwch o ddigwyddiadau heb fai.** Mae methiannau AI yn newydd, ac adrodd yw sut mae'r sefydliad yn dysgu.
- **Gwnewch gymeradwyaeth yn gyflym ar gyfer yr achosion diogel.** Mae llywodraethu araf yn gyrru defnydd o'r golwg.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cwmpas cofrestr defnyddiau AI | Cyfran y defnyddiau AI a ganfuwyd drwy ddulliau annibynnol sydd ar y gofrestr gyda pherchennog a dosbarth risg | defnyddiau ar y gofrestr gyda pherchennog a dosbarth risg / defnyddiau a ganfuwyd gan ddarganfod annibynnol (caffael, treuliau, hunaniaeth, rhwydwaith, ac adroddiadau staff) | canran | Cofrestr, data caffael a threuliau, logiau hunaniaeth, arolygon | Llywodraethu; rheoli asedau TG; rheoli risg | Gwaith gweladwy a pherchnogaeth glir | Chwarterol |
| Cyfredoldeb asesu risg | Cyfran y defnyddiau risg ganolig ac uchel gydag asesiad risg o fewn y cylch gofynnol | defnyddiau a aseswyd o fewn y cylch / defnyddiau risg ganolig ac uchel | canran | Asesiadau risg | Rheoli risg; rheoli diogelwch gwybodaeth | Myfyrio rheolaidd ar risgiau | Chwarterol |
| Cwmpas rheoli newid | Cyfran y newidiadau i fodelau, anogwyr, offer, a ffynonellau data mewn cynhyrchu a aeth drwy reoli newid gyda'r profion gofynnol | newidiadau gyda chofnod newid, profion, a chymeradwyaeth gymesur â risg / newidiadau a ganfuwyd | canran | Cofnodion newid wedi'u cymharu â hanes fersiwn a nodiadau rhyddhau gwerthwyr | Galluogi newid; rheoli rhyddhau a defnyddio | Newidiadau bach, rheoledig, gwrthdroadwy | Misol |
| Cyfredoldeb gwerthuso | Cyfran y defnyddiau cynhyrchu gyda gwerthusiad cyfredol (cywirdeb, diogelwch, a thegwch lle'n berthnasol) a chanlyniadau o fewn goddefiant | defnyddiau gyda gwerthusiad o fewn y cylch a chanlyniadau derbyniol / defnyddiau cynhyrchu o fewn cwmpas | canran | Cofnodion gwerthuso | Sicrwydd ansawdd; rheoli risg | Diffiniad o orffen ar gyfer ymddygiad | Chwarterol |
| Cyfradd tystiolaeth goruchwylio dynol | Cyfran yr allbynnau neu benderfyniadau canlyniadol a samplwyd gydag adolygiad dynol sylweddol wedi'i gofnodi | eitemau a samplwyd gydag adolygiad dogfennedig a allai fod wedi newid y canlyniad / eitemau a samplwyd | canran | Cofnodion penderfyniadau a samplwyd | Rheoli risg; llywodraethu | Adolygu cyn rhyddhau | Misol |
| Cyfradd digwyddiadau AI ac amser i gyfyngu | Digwyddiadau sy'n cynnwys AI (allbwn niweidiol, amlygiad data, gweithred anniogel) fesul defnydd a'r amser i'w cyfyngu | digwyddiadau fesul defnydd cynhyrchu y chwarter; canolrif ac 85fed canradd oriau o ganfod i gyfyngu | digwyddiadau; oriau | Cofnodion digwyddiadau wedi'u tagio AI | Rheoli digwyddiadau; rheoli diogelwch gwybodaeth | Ymateb a dysgu di-fai | Chwarterol |
| Cyfredoldeb diwydrwydd dyladwy AI cyflenwyr | Cyfran y cyflenwyr sy'n darparu nodweddion AI mewn gwasanaethau critigol y mae eu hasesiad sy'n benodol i AI yn gyfredol | cyflenwyr gydag asesiad AI cyfredol / cyflenwyr critigol gyda nodweddion AI | canran | Asesiadau cyflenwyr | Rheoli cyflenwyr; rheoli risg | Adolygu dibyniaethau'n rheolaidd | Chwarterol |

Diffiniwch "defnydd AI" yn eang yn y gofrestr: modelau a adeiladwch, gwasanaethau a brynwch, nodweddion y tu mewn i gynhyrchion, ac offer y mae staff yn eu defnyddio. Gosodir y dosbarthiadau risg a'r cylchoedd yn y polisi. Mesurir cwmpas y gofrestr yn erbyn darganfod annibynnol, nid yn erbyn y gofrestr ei hun. Mae cwmpas rheoli newid yn gofyn am ffordd o ganfod newidiadau: rheoli fersiwn, hysbysiadau gwerthwyr, monitro cyfluniad. Mae tystiolaeth goruchwylio dynol yn gofyn y gallai'r adolygiad fod wedi newid y canlyniad, nid bod botwm wedi'i glicio. Mae cyfraddau digwyddiadau yn disgrifio defnyddiau a systemau ac ni chânt eu defnyddio i raddio pobl.

## Argymhellion

### Gwybyddwch a dosbarthwch

**1. Adeiladwch y gofrestr drwy ddod o hyd i bethau yn ogystal â gofyn.** Dechreuwch gydag arolwg a pholisi, yna gwiriwch yn erbyn cofnodion caffael a threuliau, logiau hunaniaeth a mynediad, data bilio rhwydwaith a chwmwl, a diweddariadau cynnyrch gwerthwyr. Cynhwyswch nodweddion AI sydd wedi'u hymgorffori mewn offer rydych eisoes yn berchen arnynt. Disgwyliwch syrpreisys: mae pobl yn defnyddio offer nas cymeradwywyd gennych, yn aml am resymau da. Trinwch hwy fel gwybodaeth (gweler pwnc 7.2, Metrigau asedau meddalwedd a thrwyddedau).

**2. Neilltuwch berchennog a dosbarth risg i bob defnydd.** Y perchennog yw'r person sy'n atebol am y defnydd a'i ganlyniadau. Mae'r dosbarth risg yn adlewyrchu'r niwed os yw'r system yn methu: pwy yr effeithir arno, a yw penderfyniadau am bobl yn gysylltiedig, a yw'n gweithredu ar ei ben ei hun, pa ddata y mae'n ei gyffwrdd, a pha mor wrthdroadwy yw'r effeithiau. Defnyddiwch ychydig o ddosbarthiadau gyda rheolau clir. Tynnwch ar fframweithiau cydnabyddedig, megis Fframwaith Rheoli Risg AI NIST, ISO/IEC 42001, a'r gyfraith berthnasol, a'u haddasu i'ch cyd-destun.

**3. Gwnewch gymeradwyaeth yn gymesur.** Ar gyfer defnyddiau risg isel, mae cofrestriad hunanwasanaeth cyflym gydag ychydig o gwestiynau yn ddigon. Ar gyfer defnyddiau canlynol, mynnwch asesiad risg, canlyniadau gwerthuso, dyluniad goruchwylio dynol diffiniedig, ac arwyddo. Mae llwybr cyflym ar gyfer y mwyafrif diogel yn cadw pobl y tu mewn i'r system, ac mae llwybr arafach ar gyfer yr ychydig beryglus yn rhoi craffu priodol iddynt.

### Profwch a rheolwch newid

**4. Gwerthuswch ar achosion realistig, cyn ac yn ystod defnydd.** Adeiladwch set o achosion prawf sy'n adlewyrchu mewnbynnau go iawn, gan gynnwys rhai anodd a gwrthwynebus, a sgoriwch yr allbynnau yn erbyn meini prawf ysgrifenedig. Cynhwyswch wiriadau ar gyfer diogelwch a thegwch lle gallai pobl gael eu heffeithio. Ail-redwch y gwerthusiadau ar amserlen a phryd bynnag y bo'r model, yr anogwr, neu'r data yn newid. Mae tîm coch, grŵp sy'n ymosod ar y system yn fwriadol i ddod o hyd i wendidau, yn arfer defnyddiol ar gyfer defnyddiau risg uwch. Gweler yr arferion samplu ar gyfer gwaith â chymorth (gweler pwnc 10.2, Mesur gwaith â chymorth AI).

**5. Rhowch fodelau, anogwyr, ac offer o dan reoli newid.** Fersiynwch anogwyr a chyfluniadau fel cod. Mynnwch brofion a chymeradwyaeth gymesur â risg ar gyfer newidiadau, cofnodwch hwy, a chadwch y gallu i wrthdroi. Olrheiniwch ddiweddariadau model a yrrir gan werthwyr, a all newid ymddygiad heb rybudd, a chytunwch gyda chyflenwyr sut y dywedir wrthych. Trinwch uwchraddio model fel newid sydd angen rheolaeth (gweler pwnc 4.3, Metrigau galluogi newid).

**6. Monitrwch mewn cynhyrchu.** Gwyliwch am ddrifft mewn mewnbynnau ac allbynnau, am gyfraddau gwall a gwrthweithio sy'n codi, ac am batrymau anarferol. Gosodwch drothwyon sy'n sbarduno adolygiad. Ar gyfer systemau sy'n cymryd gweithredoedd, monitrwch y logiau gweithredoedd. Monitro yw sut rydych yn dod o hyd i'r problemau a gollodd profi.

### Cadwch oruchwyliaeth ddynol yn real

**7. Dyluniwch oruchwyliaeth a all weithio.** Ni all person sy'n adolygu pob allbwn system gyflym gadw i fyny, ac nid yw person y gofynnir iddo gymeradwyo'r hyn na all ei ddeall yn darparu goruchwyliaeth. Diffiniwch beth mae'r person yn ei wneud, pa wybodaeth sydd ganddo, faint o amser, a pha awdurdod i wrthweithio. Samplwch adolygiadau i wirio eu bod yn sylweddol. Byddwch yn effro i dueddiad awtomeiddio, y duedd i dderbyn allbwn peiriant (gweler pwnc 10.1, AI mewn mesur rheoli gwasanaethau).

**8. Cadwch lwybrau archwilio.** Cofnodwch fewnbynnau, allbynnau, fersiynau, penderfyniadau, a gweithredoedd mewn ffordd sy'n cefnogi ymchwiliad, yn amodol ar reolau preifatrwydd a therfynau cadw. Mae [llwybr archwilio](https://en.wikipedia.org/wiki/Audit_trail) yn gadael i chi ateb beth ddigwyddodd a pham. Ar gyfer penderfyniadau canlyniadol am bobl, ystyriwch pa esboniad y gallwch ei roi a pha lwybr apêl sy'n bodoli (gweler pwnc 8.3, Metrigau cydymffurfio ac archwilio).

**9. Diogelwch ddata a gwrthsefyllwch drin.** Rheolwch pa ddata y gall systemau AI ei weld a'i anfon allan. Profwch am chwistrellu anogwr a gollwng data, yn enwedig ar gyfer systemau sy'n darllen cynnwys allanol neu sydd â mynediad at offer. Cymhwyswch yr egwyddorion braint leiaf a ddefnyddir ar gyfer asiantau sy'n gweithredu (gweler pwnc 10.3, Metrigau asiantau AI a sgwrsfotiau, a phwnc 8.1, Metrigau digwyddiadau diogelwch a gwendidau). Ystyriwch breifatrwydd adeg dylunio, a chynhwyswch arbenigwyr diogelu data.

### Ymatebwch a dysgwch

**10. Trinwch ddigwyddiadau AI fel digwyddiadau.** Diffiniwch beth sy'n cyfrif: allbynnau niweidiol neu rhagfarnllyd, amlygiad data, gweithredoedd anniogel, gwallau sylweddol sy'n cyrraedd defnyddwyr. Defnyddiwch eich proses digwyddiadau arferol gyda'r tag AI, adolygwch yn ddi-fai, a bwydwch wersi i werthusiadau a rheolaethau. Gwnewch adrodd yn hawdd i staff a defnyddwyr. Mae amser i gyfyngu yn bwysig cymaint ag ar gyfer unrhyw ddigwyddiad (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

**11. Rheolwch AI cyflenwyr.** Gofynnwch i gyflenwyr pa nodweddion AI y maent yn eu defnyddio, sut y cânt eu profi a'u newid, sut y trinnir data, a sut yr adroddir digwyddiadau. Ychwanegwch delerau penodol i AI at gontractau lle mae'n bwysig, gan gynnwys hysbysiad o newidiadau model sylweddol. Ailaseswch gyflenwyr critigol ar gylch (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau).

**12. Adolygwch lywodraethu ei hun.** Bob chwarter, gwiriwch beth mae'r mesurau yn ei ddangos: ble aeth defnyddiau heb eu cofrestru, pa gymeradwyaethau oedd yn rhy araf, pa reolaethau na ddaliodd broblemau. Addaswch y polisi a'r llwybrau. Cynhwyswch staff a defnyddwyr yn yr adolygiad. Cadwch y rheolau'n fyr, yn glir, ac yn gyfredol, ac ymddeolwch reolaethau nad ydynt yn ennill eu cost.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cwmpas cofrestr defnyddiau AI | Cofrestru defnyddiau dibwys i godi'r ganran; enwadyddion wedi'u cyfyngu i'r hyn sydd wedi'i gofrestru | Darganfod annibynnol ar gyfer yr enwadur; samplu cofnodion cofrestr am ansawdd; amnest ar gyfer defnyddiau heb eu cofrestru |
| Cyfredoldeb asesu risg | Asesiadau cyffyrddiad ysgafn sydd bob amser yn pasio; asesu defnyddiau risg isel | Adolygu dyfnder asesu; gwirio bod y dosbarth risg yn cyfateb i'r meini prawf |
| Cwmpas rheoli newid | Peidio â chanfod newidiadau gwerthwyr; cofnodi newidiadau wedyn | Canfod drwy hanes fersiwn a hysbysiadau gwerthwyr; cofnodion newid wedi'u stampio cyn rhyddhau |
| Cyfredoldeb gwerthuso | Gwerthusiadau ar achosion hawdd; dewis goddefiannau ar ôl gweld canlyniadau | Setiau prawf wedi'u hadolygu gan barti annibynnol; trothwyon wedi'u gosod ymlaen llaw |
| Cyfradd tystiolaeth goruchwylio dynol | Clicio cymeradwyo heb ddarllen; dogfennu adolygu na allai newid y canlyniad | Samplu adolygiadau am sylwedd; gwallau hysbys wedi'u hadu; llwyth adolygwyr |
| Cyfradd digwyddiadau AI ac amser i gyfyngu | Peidio ag adrodd digwyddiadau; culhau'r diffiniad | Adrodd hawdd, di-fai; cymharu â chwynion defnyddwyr a chanfyddiadau archwilio |
| Cyfredoldeb diwydrwydd dyladwy AI cyflenwyr | Holiaduron wedi'u hateb gan farchnata; asesiadau heb dystiolaeth | Gofynion tystiolaeth ar gyfer cyflenwyr critigol; gwirio annibynnol |

Mae darlleniad iach yn gofrestr y mae darganfod annibynnol yn ei chadarnhau, asesiadau sy'n cyfateb i'r risg, newidiadau sy'n mynd drwy reolaeth, gwerthusiadau a gedwir yn gyfredol, goruchwyliaeth sy'n dod o hyd i wallau go iawn, digwyddiadau a adroddir yn rhwydd ac a gyfyngir yn gyflym, a chyflenwyr sy'n rhannu'r hyn y maent yn ei newid.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Cymeradwyaeth ganolog ar gyfer pob defnydd AI | Rheolaeth, cysondeb | Araf; gyrru defnydd o dan y ddaear |
| Cofrestru hunanwasanaeth gyda haenau risg | Cyflym i'r mwyafrif diogel | Angen meini prawf da a gwiriadau man |
| Gwahardd offer cyhoeddus | Lleihau amlygiad data | Defnydd cysgodol; buddion a gollwyd |
| Offer cymeradwy gydag arweiniad | Defnydd gweladwy a hylaw | Angen darparu a chefnogi |
| Dogfennaeth drwm | Tystiolaeth i archwilio | Baich; efallai na fydd yn adlewyrchu arfer |
| Gwerthuso awtomataidd yn y biblinell | Parhaus, cyson | Angen setiau prawf da; gall golli methiannau newydd |
| Adolygu dynol o bopeth | Diogelwch | Ddim yn raddadwy; blinder |
| Samplu ar sail risg | Ymarferol | Mae rhai methiannau yn llithro drwodd |

Yr ateb pragmatig yw darparu offer cymeradwy a llwybr cyflym ar gyfer defnyddiau risg isel, canolbwyntio craffu ar rai canlyniadol, awtomeiddio gwerthuso a monitro, a chadw goruchwyliaeth ddynol lle gall weithio mewn gwirionedd.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Ble ydym ni'n defnyddio AI heddiw nad yw ar unrhyw restr?**
Gofynnwch i'r tîm yn onest, a chynigiwch amnest. Edrychwch ar offer a ddefnyddir ar gyfer drafftio, crynhoi, codio, a dadansoddi, gan gynnwys y rhai y tu mewn i gynhyrchion. Dylai'r hwylusydd gofnodi defnyddiau heb farnu. Cytunwch pwy fydd yn eu cofrestru a pha rai sydd angen golwg agosach.

**2. Pe bai ein defnydd AI mwyaf canlyniadol yn gwneud camgymeriad niweidiol, sut y byddem yn darganfod a beth fyddem yn ei wneud?**
Cerddwch drwy ganfod, cyfyngu, cyfathrebu, a dysgu. Nodwch fylchau mewn monitro, perchnogaeth, ac awdurdod i'w ddiffodd. Cytunwch ar un gwelliant.

**3. Beth all newid oddi tanom heb i neb ei gymeradwyo?**
Rhestrwch fodelau, anogwyr, ffynonellau data, a diweddariadau gwerthwyr. Ar gyfer pob un, gofynnwch sut y byddem yn gwybod ei fod wedi newid a sut y byddem yn ei brofi. Cytunwch ble i ychwanegu canfod neu brawf.

**4. A allai'r person sy'n adolygu allbwn AI yn ein proses ddal gwall difrifol yn realistig?**
Edrychwch ar y cyfaint, y wybodaeth, yr amser, a'r awdurdod. Profwch gyda gwall wedi'i hadu. Os na all adolygu weithio, ailgynlluniwch y broses cyn ychwanegu mwy o AI.

**5. Pa rai o'n rheolau y byddai cydweithiwr prysur yn eu cael yn hawdd i'w dilyn, a pha rai y byddent yn gweithio o'u cwmpas?**
Rhestrwch y rheolau presennol a'u profi yn erbyn llifoedd gwaith go iawn. Trafodwch pam mae rheolau'n cael eu hosgoi. Cytunwch ar newidiadau sy'n gwneud y llwybr diogel yn llwybr hawdd.

**6. Beth mae ein cyflenwyr wedi'i ddweud wrthym am eu hAI, a beth nad ydym ni wedi'i ofyn?**
Gwiriwch holiaduron a chontractau diweddar. Nodwch gyflenwyr critigol gyda nodweddion AI a'r bylchau gwybodaeth. Cytunwch ar gwestiynau ar gyfer yr adolygiad nesaf.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn adeiladu ac yn mabwysiadu nodweddion AI, ac maent yn teimlo llywodraethu fel ffrithiant neu fel help. Dylent gofrestru defnyddiau'n gynnar, profi ar achosion realistig, rhoi anogwyr a modelau o dan reoli fersiwn, a dylunio goruchwyliaeth sy'n gweithio. Maent yn elwa o gymeradwyaeth gyflym ar gyfer defnyddiau risg isel.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn rhedeg AI mewn cynhyrchu ac yn ymateb i'w ddigwyddiadau. Dylent fonitro am ddrifft, cadw logiau gweithredoedd, tagio digwyddiadau AI, a chael yr awdurdod a'r modd i ddiffodd system. Maent hefyd yn defnyddio AI eu hunain a dylent ddilyn yr un rheolau.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod awydd am risg ac maent yn atebol am ganlyniadau. Dylent ariannu'r gofrestr, gwerthuso, a monitro, derbyn na fydd rhai defnyddiau AI yn pasio, gofyn am ddarganfod defnyddiau'n annibynnol, ac olrhain digwyddiadau ac amser i gyfyngu. Dylai cyrff llywodraethu gadw rheolau'n fyr, eu hadolygu'n rheolaidd, a sicrhau bod gan staff a defnyddwyr lais.

### Cwsmeriaid a defnyddwyr

Effeithir ar ddefnyddwyr gan benderfyniadau ac allbynnau AI, yn aml heb wybod. Maent yn haeddu gwybod pan fo AI yn gysylltiedig â materion sy'n effeithio arnynt, gallu cyrraedd person, a herio penderfyniadau. Mae cwynion ac apeliadau yn dystiolaeth hanfodol am sut mae llywodraethu'n gweithio'n ymarferol.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran technoleg a gweithrediadau banc rhanbarthol yn mabwysiadu polisi AI ar ôl i aelod o staff gludo manylion cwsmeriaid i offeryn cyhoeddus. Mae'r tîm cydymffurfio yn cyhoeddi cofrestr ac yn disgwyl i bob defnydd gael ei restru. Mae'r rhifau isod yn enghreifftiol.

Dri mis yn ddiweddarach mae'r gofrestr yn rhestru 38 o ddefnyddiau AI. Mae pennaeth risg technoleg yn gwirio drwy ddulliau annibynnol: data caffael a threuliau, logiau hunaniaeth yn dangos mewngofnodi i wasanaethau AI, data rhwydwaith, ac arolwg staff dienw. Mae'r darganfod yn canfod 94 o ddefnyddiau, felly cwmpas y gofrestr yw 40 y cant. Mae dau ar bymtheg yn nodweddion y tu mewn i offer y mae'r banc eisoes wedi'u trwyddedu, ac mae deuddeg yn offer cyhoeddus a ddefnyddir gan staff. O'r 38 defnydd cofrestredig, dim ond 14 sydd â dosbarth risg, ac nid oes gan y tri risg uchaf, model sy'n sgorio rhybuddion twyll, sgwrsfot i gwsmeriaid, ac offeryn sy'n crynhoi cwynion, unrhyw werthusiad yn y flwyddyn ddiwethaf. Mae'r timau'n gwneud newidiadau i gyfluniad y model twyll ac anogwyr y sgwrsfot yn uniongyrchol, ac mae'r cofnodion newid ar gyfer y chwarter diwethaf yn cwmpasu 21 y cant o'r newidiadau a ganfuwyd yn hanes y fersiwn. Mae sampl o 60 o rybuddion twyll a ddiystyrwyd gan y model yn dangos adolygiad dynol wedi'i gofnodi ar gyfer 52 ohonynt, ond dim ond un adolygydd a ddaliodd set hadedig o bum methiant hysbys, oherwydd bod adolygwyr bob un yn trin sawl cant o rybuddion y dydd. Canfuwyd un digwyddiad, lle rhoddodd y sgwrsfot swm ffi hen i gwsmeriaid, gan gŵyn, a chymerodd chwe diwrnod i'w gyfyngu oherwydd nad oedd gan neb awdurdod i'w ddiffodd.

Mae pennaeth risg technoleg yn ailgynllunio llywodraethu gyda'r timau. Mae cofrestriad hunanwasanaeth byr gyda phum cwestiwn yn gosod defnyddiau risg isel yn y gofrestr o fewn munudau, ac mae cyfnod amnest yn annog staff i restru'r offer y maent yn eu defnyddio. Mae dosbarthiadau risg yn seiliedig ar niwed, data, ac ymreolaeth. Mae defnyddiau risg uwch angen asesiad, gwerthusiad yn erbyn achosion realistig a gwrthwynebus, a dyluniad goruchwylio diffiniedig. Rhoddir modelau, anogwyr, ac offer o dan reoli newid gyda phrofion cymesur â risg, ac mae anogwyr y sgwrsfot wedi'u fersiynu gyda gwrthdroi. Ailgynlluniwyd y broses rhybuddion twyll fel bod adolygwyr yn trin llai o rybuddion, wedi'u blaenoriaethu'n well, ac mae gwallau hadedig yn profi eu canfod. Mae gan berchennog a enwyd ar gyfer pob defnydd risg uchel yr awdurdod i'w ddiffodd, ac mae ymateb digwyddiadau yn cwmpasu AI. Gofynnir i gyflenwyr cwmwl ac AI y banc pa nodweddion AI y maent yn eu defnyddio a sut yr hysbysir newidiadau.

Ddau chwarter yn ddiweddarach, cwmpas y gofrestr yn ôl darganfod annibynnol yw 88 y cant, aseswyd a gwerthuswyd pob defnydd risg uchel o fewn y cylch, cwmpas rheoli newid yw 84 y cant, mae canfod gwallau hadedig gan adolygwyr yn codi i 4 o 5, ac amser canolrifol i gyfyngu digwyddiad AI yw 3 awr. Mae staff yn defnyddio offer cymeradwy ar gyfer y rhan fwyaf o dasgau. Mae uwch weithredwr yn gofyn am nod o 100 y cant o gwmpas y gofrestr. Mae pennaeth risg technoleg yn cynnig olrhain cwmpas yn erbyn darganfod annibynnol, cyfredoldeb asesu, a thrin digwyddiadau, ac yn esbonio y gall cofrestr heb ddarganfod gyrraedd 100 y cant a dal i golli'r risg. Cofnodir y penderfyniad.

## Y golwg fesul sector

**Busnes newydd.** Mae cyflymder yn bwysig ac mae'r risgiau yn bennaf yn amlygiad data ac allbynnau annibynadwy. Cadwch restr fer o offer a defnyddiau gyda pherchnogion, gosodwch ychydig o reolau clir am ba ddata y gellir ei ddefnyddio ble, a fersiynwch anogwyr. Ailedrychwch wrth i alwadau cwsmeriaid am sicrwydd dyfu.

**Busnes bach.** Bydd staff yn defnyddio offer cyhoeddus. Darparwch opsiwn cymeradwy, ysgrifennwch reol un dudalen ar ddata, ac adolygwch sut y defnyddir offer. Gofynnwch i gyflenwyr am eu nodweddion AI, a chadwch gofnod o ble mae AI yn gwneud penderfyniadau am gwsmeriaid neu staff.

**Menter fawr.** Mae graddfa angen model gweithredu: cofrestr, haenau risg, safonau gwerthuso, rheoli newid, a phroses digwyddiadau, wedi'u hintegreiddio â swyddogaethau risg a diogelwch presennol. Defnyddiwch ddarganfod annibynnol, awtomeiddiwch werthuso mewn piblinellau, ac alinio â safonau. Rhowch lwybr cyflym i dimau.

**Llywodraeth a'r sector cyhoeddus.** Mae penderfyniadau sy'n effeithio ar ddinasyddion yn dod â dyletswyddau tryloywder, tegwch, ac apêl, ac mae fframweithiau caffael a chyfreithiol yn siapio'r hyn a ganiateir. Cynhaliwch gofnodion cyhoeddus o ddefnyddiau effaith uchel lle'n ofynnol, aseswch effaith ar hawliau, cadwch bobl yn y ddolen yn ystyrlon, a gwiriwch gyfraith ac arweiniad cyfredol (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae'r costau'n cynnwys yr ymdrech i adeiladu a chynnal y gofrestr, offer darganfod neu ddadansoddi, asesiadau risg, setiau gwerthuso a rhediadau, rheoli newid ar gyfer anogwyr a modelau, monitro, hyfforddiant, a chapasiti ymateb digwyddiadau. Mae llywodraethu hefyd yn ychwanegu rhywfaint o oedi ar gyfer defnyddiau risg uwch. Mae'r costau hyn yn graddio gyda nifer a risg defnyddiau, sy'n rheswm dros gadw cymeradwyaeth risg isel yn ysgafn.

Mae'r enillion yn cynnwys niwed ac amlygiad osgoedig, llai o syrpreisys mewn archwiliadau ac adolygiadau rheoleiddiol, mabwysiadu diogel cyflymach drwy reolau clir, ac ymddiriedaeth gan gwsmeriaid a staff. Adeiladwch yr achos o'ch data eich hun: nifer y defnyddiau a ganfuwyd y tu allan i'r gofrestr a'r data y maent yn ei gyffwrdd, digwyddiadau a'u cost, amser a dreulir mewn cymeradwyaethau ad hoc cyn ac ar ôl, a chanfyddiadau mewn archwiliadau. Osgowch ddyfynnu ystadegau cyhoeddedig am ddigwyddiadau AI neu ddirwyon heb ffynhonnell y gellir ei holrhain a pherthnasedd i'ch cyd-destun. Cynhwyswch gost peidio â llywodraethu, sy'n cynnwys y posibilrwydd o niwed cyfreithiol ac enw da sylweddol (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Cofrestr nad oes neb yn ei gwirio.** Mae'r cwmpas yn edrych yn uchel ac yn colli'r defnyddiau go iawn. Defnyddiwch ddarganfod annibynnol.
- **Gwaharddiadau cyffredinol.** Maent yn gyrru defnydd o dan y ddaear. Darparwch offer cymeradwy a llwybr cyflym.
- **Trin anogwyr a modelau fel cyfluniad nad oes neb yn berchen arno.** Mae ymddygiad yn newid heb i neb sylwi. Rhowch hwy o dan reoli newid.
- **Gwerthuso unwaith.** Mae systemau'n drifftio ac yn newid. Ail-redwch ar amserlen ac ar newid.
- **Goruchwyliaeth mewn enw yn unig.** Ni all adolygwyr ddal yr hyn na allant ei weld. Profwch gyda gwallau hadedig a thrwsiwch y llwyth.
- **Dim awdurdod i ddiffodd.** Mae cyfyngu yn cymryd dyddiau. Enwch berchnogion gyda'r grym i atal system.
- **Anwybyddu AI cyflenwyr.** Mae eich risg yn cynnwys eu risg nhw. Gofynnwch, contractiwch, ac ailaseswch.
- **Rheolau na all neb eu dilyn.** Cânt eu hosgoi. Cadwch hwy'n fyr a gwnewch y llwybr diogel yn hawdd.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Gwybod a dosbarthu | Dim golwg ar ddefnydd AI | Polisi a rhestr rannol | Cofrestr gyda pherchennog a dosbarth risg; darganfod annibynnol wedi'i ddefnyddio ar gyfer cwmpas | Cwmpas, cyfredoldeb asesu, ac amserau cymeradwyo wedi'u rheoli | Golwg gofrestr a rennir ar draws unedau busnes a chyflenwyr; dosbarthiadau wedi'u hadolygu gyda rheoleiddwyr a defnyddwyr |
| Profi a newid | Ad hoc | Rhywfaint o werthuso ar gyfer rhai defnyddiau | Gwerthuso ar achosion realistig; anogwyr a modelau o dan reoli newid | Gwerthuso parhaus a monitro drifft; cwmpas wedi'i reoli | Gwerthuso a newid awtomataidd, ar sail risg mewn piblinellau, wedi'u harchwilio'n annibynnol |
| Goruchwylio a dysgu | Dibynnu ar ymddiriedaeth | Adolygu yn bodoli mewn egwyddor | Goruchwyliaeth wedi'i dylunio a'i samplu; digwyddiadau AI wedi'u tagio a'u hadolygu'n ddi-fai | Profion gwall hadedig, amser i gyfyngu, ac asesiadau cyflenwyr wedi'u rheoli | Goruchwylio, dysgu o ddigwyddiadau, a pholisi wedi'u cyd-ddatblygu gyda staff, defnyddwyr, a phartneriaid |

## Rhestr wirio

- [ ] Mae cofrestr yn rhestru defnyddiau AI gyda pherchennog a dosbarth risg, wedi'i gwirio yn erbyn darganfod annibynnol.
- [ ] Mae llwybr cyflym yn bodoli ar gyfer defnyddiau risg isel, a llwybr dyfnach ar gyfer rhai canlyniadol.
- [ ] Mae gan ddefnyddiau risg uwch asesiad risg cyfredol a dyluniad goruchwylio diffiniedig.
- [ ] Mae gwerthusiadau ar achosion realistig a gwrthwynebus yn gyfredol ac yn cael eu hail-redeg ar newid.
- [ ] Mae anogwyr, modelau, offer, a ffynonellau data wedi'u fersiynu ac o dan reoli newid.
- [ ] Mae monitro cynhyrchu yn gwylio am ddrifft, gwallau, gwrthweithio, a gweithredoedd anarferol.
- [ ] Profir goruchwyliaeth gyda gwallau hadedig, ac mae llwyth adolygwyr yn realistig.
- [ ] Mae llwybrau archwilio yn cefnogi ymchwiliad o fewn rheolau preifatrwydd a chadw.
- [ ] Tagir digwyddiadau AI, eu hadolygu'n ddi-fai, a gall perchnogion ddiffodd systemau.
- [ ] Aseswyd cyflenwyr gyda nodweddion AI ac maent wedi'u rhwymo i hysbysu am newidiadau sylweddol.

## Anogwyr AI

**Drafftiwch ddosbarthiad risg ar gyfer defnyddiau AI.**

```text
Cynigiwch ddosbarthiad risg syml (tair neu bedair lefel) ar gyfer defnyddiau AI mewn
[math o sefydliad] ar sail niwed os yw'n anghywir, pwy yr effeithir arno,
cynnwys penderfyniadau am bobl, ymreolaeth gweithredoedd, sensitifrwydd data, a
gwrthdroadwyedd. Ar gyfer pob lefel, nodwch ddefnyddiau enghreifftiol, y
cymeradwyaethau a'r dystiolaeth sydd eu hangen, a'r cylch adolygu. Peidiwch â
nodi casgliadau cyfreithiol. Rhestrwch eich rhagdybiaethau a phwyntiau i'w
cadarnhau gydag arbenigwyr cyfreithiol, risg, a diogelwch.
```

**Dyluniwch ffurflen gofrestru.**

```text
Dyluniwch ffurflen gofrestru hunanwasanaeth fer ar gyfer defnyddiau AI newydd,
gyda dim mwy nag wyth cwestiwn, sy'n neilltuo dosbarth risg cychwynnol yn
awtomatig ac yn cyfeirio defnyddiau risg uwch i adolygiad. Cynhwyswch ddiben,
data, defnyddwyr yr effeithir arnynt, ymreolaeth, gwerthwr, a pherchennog.
Esboniwch sut i'w gadw'n gyflym ar gyfer achosion risg isel. Rhestrwch eich
rhagdybiaethau a risgiau camddosbarthu.
```

**Cynlluniwch set werthuso.**

```text
Rydym yn defnyddio AI ar gyfer [tasg] yn [proses]. Helpwch i ddylunio set
werthuso: mathau o achosion realistig, achosion anodd a gwrthwynebus, meini prawf
ysgrifenedig ar gyfer allbynnau cywir a diogel, gwiriadau am degwch lle mae pobl
yn cael eu heffeithio, pa mor fawr yw set ymarferol, pa mor aml i'w hail-redeg, a
pha newidiadau ddylai sbarduno ailrediad. Peidiwch â honni bod set yn ddigonol.
Rhestrwch eich rhagdybiaethau a therfynau.
```

**Adolygwch ddigwyddiad AI.**

```text
Dyma ddisgrifiad o ddigwyddiad sy'n gysylltiedig ag AI: [gludwch, heb ddata
personol]. Drafftiwch adolygiad di-fai: llinell amser, sut y'i canfuwyd, ffactorau
cyfrannol (data, anogwr, model, goruchwyliaeth, cyflenwr, proses), effaith, beth a'i
cyfyngodd, a gweithredoedd gyda pherchnogion. Awgrymwch newidiadau i werthuso,
monitro, a rheoli newid. Peidiwch â neilltuo bai i unigolion. Rhestrwch eich
rhagdybiaethau a chwestiynau agored.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig llywodraethu neu risg AI.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig llywodraethu AI yn defnyddio tystiolaeth annibynnol ac yn cario ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Adeiladwch y gofrestr AI drwy ddarganfod annibynnol, a chydweddwch graffu â risg gyda llwybr cyflym ar gyfer defnyddiau diogel.
- Trinwch fodelau, anogwyr, offer, a ffynonellau data fel newidiadau sydd angen profi, cymeradwyaeth, a gwrthdroi.
- Gwerthuswch cyn defnydd ac yn ystod defnydd, ar achosion realistig a gwrthwynebus.
- Dyluniwch oruchwyliaeth ddynol a all weithio, a'i phrofi gyda gwallau hadedig.
- Trinwch ddigwyddiadau AI fel digwyddiadau eraill, gydag adolygu di-fai, a rhowch y grym i berchnogion ddiffodd systemau.
- Gofynnwch i gyflenwyr am eu AI, a chadwch y rheolau'n fyr a'r llwybr diogel yn hawdd.

## Cyfeiriadau a darllen pellach

1. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
2. ISO/IEC 42001, *Information technology: Artificial intelligence: Management system*, International Organization for Standardization, 2023.
3. ISO/IEC 23894, *Information technology: Artificial intelligence: Guidance on risk management*, International Organization for Standardization, 2023.
4. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
5. Organisation for Economic Co-operation and Development, *OECD AI Principles*, 2019 (updated 2024).
6. Mitchell, M., et al., "Model Cards for Model Reporting," *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 2019.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Algorithmic bias](https://en.wikipedia.org/wiki/Algorithmic_bias).
9. Wikipedia, [Prompt injection](https://en.wikipedia.org/wiki/Prompt_injection).
10. Wikipedia, [Artificial Intelligence Act](https://en.wikipedia.org/wiki/Artificial_Intelligence_Act).
11. Wikipedia, [Responsible AI](https://en.wikipedia.org/wiki/Responsible_AI).
12. Wikipedia, [Regulation of artificial intelligence](https://en.wikipedia.org/wiki/Regulation_of_artificial_intelligence).
13. Wikipedia, [Shadow IT](https://en.wikipedia.org/wiki/Shadow_IT).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
