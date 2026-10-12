# Metrigau llafur diwerth ac ar alwad

**Nid yw gwasanaeth ond mor ddibynadwy â'r cylchdro sy'n gofalu amdano, felly mesurwch yr ymyriadau, y llwyth yn ystod y nos, a chyfran yr amser a gollir i waith â llaw, ailadroddus ar gyfer y cylchdro yn ei gyfanrwydd, a defnyddiwch y rhifau i ariannu atal ac awtomeiddio, byth i gymharu pobl.**

## Crynodeb a chymhelliant

Yn aml disgrifir dibynadwyedd yn nhermau'r system: argaeledd, latency, cyfraddau gwallau. Y tu ôl i bob gwasanaeth sydd â defnyddwyr yng nghanol y nos mae system ddynol sy'n ymateb pan fo'r system yn methu. Mae gan y system ddynol honno derfynau. Bydd cylchdro sy'n cael galwadau'n rhy aml, yn deffro gormod o bobl, neu'n treulio'r rhan fwyaf o'i wythnos ar dasgau â llaw, ailadroddus yn arafu, yn gwneud mwy o gamgymeriadau, ac yn colli pobl yn y pen draw. Gall y metrigau eraill yn Rhan 5 edrych yn iach hyd at y pwynt y mae'r bobl sy'n eu dal at ei gilydd yn gadael.

Mae dau syniad yn trefnu'r pwnc hwn. Y cyntaf yw gwaith [ar alwad](https://en.wikipedia.org/wiki/On-call): cylchdro o bobl sydd ar gael ac yn barod i ymateb i rybuddion y tu allan i batrymau gwaith arferol. **Galwad** yw rhybudd sy'n ymyrryd ag ymatebwr, fel arfer drwy galwr, galwad ffôn, neu hysbysiad gwthio. **Sifft** yw un darn o ddyletswydd ar alwad, er enghraifft diwrnod, wythnos, neu noson. **Cylchdro** yw'r grŵp o bobl sy'n cymryd sifftiau yn eu tro. Yr ail syniad yw **llafur diwerth** (toil), term o [beirianneg dibynadwyedd safleoedd](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), y ddisgyblaeth o redeg gwasanaethau gyda dulliau peirianneg meddalwedd. Yn llyfr *Site Reliability Engineering* Google, llafur diwerth yw gwaith gweithredol sy'n gysylltiedig â rhedeg gwasanaeth cynhyrchu sy'n tueddu i fod â llaw, yn ailadroddus, y gellir ei awtomeiddio, yn dactegol, heb werth parhaol, ac yn tyfu gam wrth gam gyda'r gwasanaeth. Nid yw'r un peth â gorbenion megis cyfarfodydd, ac nid yw'n syml waith nad yw rhywun yn ei hoffi.

Nid oes gan ITIL 4 arfer o'r enw "rheoli llafur diwerth." Mae'r deunydd yn eistedd ar draws sawl arfer. Mae [rheoli digwyddiadau](https://en.wikipedia.org/wiki/Incident_management) a monitro a rheoli hysbysiadau yn cynhyrchu'r galwadau. Mae rheoli problemau yn dileu'r achosion sy'n dal i'w cynhyrchu. Mae rheoli ceisiadau gwasanaeth a rheoli defnyddio yn cynhyrchu llawer o'r gwaith â llaw ailadroddus. Mae rheoli gweithlu a thalent, a gwelliant parhaus, yn berchen ar ochr y bobl. Y cyfatebydd ystwyth yw cytundeb gweithio'r tîm am waith anghynlluniedig a chyflymder cynaliadwy, ac arferiad DevOps bod y tîm sy'n adeiladu gwasanaeth hefyd yn cario rhan o'r galwr ar ei gyfer.

Mae'r mesurau yma'n ymwneud â llwyth a chynaliadwyedd. Mae trin digwyddiadau yn perthyn i bynciau eraill (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau, a phwnc 3.4, Metrigau digwyddiadau mawr), fel y mae ansawdd rhybuddion unigol (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion). Mae'r pwnc hwn yn gofyn beth mae'n ei gostio i'r bobl yn y cylchdro i gadw'r gwasanaeth i redeg, ac a yw'r gost honno'n gynaliadwy.

### Pam mae hyn yn perthyn gyda dibynadwyedd

Mae gan flinder ganlyniadau gweithredol. Mae [amddifadedd cwsg](https://en.wikipedia.org/wiki/Sleep_deprivation) yn diraddio barn ac amser ymateb, ac mae ymatebwyr sy'n flinedig ar ddechrau digwyddiad yn cymryd yn hirach i'w ddiagnosio ac yn fwy tebygol o wneud ail gamgymeriad wrth drwsio'r cyntaf. [Blinder larwm](https://en.wikipedia.org/wiki/Alarm_fatigue) yw'r effaith gysylltiedig o ormod o rybuddion: mae pobl yn rhoi'r gorau i drin pob un fel un brys. [Gorflinder galwedigaethol](https://en.wikipedia.org/wiki/Occupational_burnout) yw canlyniad tymor hir gorlwytho parhaus, ac mae'n ymddangos fel colli staff, salwch, a datgysylltu, sy'n araf, yn ddrud, ac yn anodd eu gwrthdroi. Dim ond yr effaith y mae tîm sy'n mesur dibynadwyedd gwasanaeth heb fesur cynaliadwyedd ei gylchdro yn ei gwylio, gan anwybyddu rhan o'r achos.

Mae'r pwnc hwn yn disgrifio cylchdroeon, sifftiau, a gwasanaethau, ac nid yw byth yn graddio unigolion. Mae'r olwg ITIL yn dechrau o'r digwyddiad a'r gwasanaeth, yr olwg SRE o'r gost amser-person, a'r olwg ystwyth o'r capasiti ar gyfer gwaith cynlluniedig.

## Egwyddorion allweddol

- **Mesurwch y cylchdro, nid y person.** Adroddwch lwyth yn ôl gwasanaeth, sifft, a safle cylchdro. Mae cyfrif galwadau person yn dibynnu ar y sifft a dynnodd, ac mae tabl cynghrair yn dysgu pobl i guddio ymyriadau.
- **Cyfrwch pryd mae ymyriadau'n digwydd yn ogystal â pha mor hir y maent yn para.** Gall galwad pum munud am 03:00 gostio noson o gwsg.
- **Diffiniwch lafur diwerth yn gul a gadewch i'r tîm ei ddosbarthu.** Math penodol o waith yw llafur diwerth, nid cyfystyr am waith nad yw pobl yn ei hoffi.
- **Trinwch lwyth fel signal ar gyfer buddsoddi.** Mae cyfaint galwadau uchel neu gyfran llafur diwerth yn dystiolaeth bod angen gwaith ar wasanaeth, offeryn, neu lefel staffio.
- **Parwch bob mesur llwyth â mesur ansawdd.** Dim ond newyddion da yw llai o alwadau os yw digwyddiadau'n dal i gael eu canfod.
- **Dangoswch ddosbarthiadau a rhannwch y data gyda'r cylchdro yn gyntaf.** Mae sifft gyfartalog yn cuddio llond llaw o nosweithiau ofnadwy, a'r bobl ar alwad yw'r beirniaid gorau o ba un a yw'r rhifau'n cyfateb i'w profiad.

## Diffiniadau metrigau

Mae'r tabl yn rhoi'r set graidd. Mae pob mesur amser neu gyfrif yn nodi ble mae'n dechrau ac yn stopio a'r hyn a eithrir. Rhaid diffinio "y tu allan i oriau" unwaith fesul cylchdro fel ffenestr ysgrifenedig mewn amser lleol, gan gynnwys penwythnosau a gwyliau cyhoeddus, oherwydd gall pobl mewn cylchdro dosbarthedig gael oriau lleol gwahanol.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Galwadau fesul sifft | Nifer y galwadau a ddanfonwyd i gylchdro yn ystod un sifft | Cyfrif galwadau a ddanfonwyd rhwng dechrau a diwedd y sifft, un cyfrif fesul sifft, ar ôl uno galwadau dyblyg ar gyfer yr un grŵp rhybuddion o fewn 5 munud (mae'r ffenestr uno yn osodiad tîm). Eithrir galwadau prawf a galwadau a anfonwyd mewn camgymeriad. Adroddwch y canolrif a'r 90fed canradd ar draws sifftiau, ynghyd â'r sifft brysuraf | galwadau fesul sifft | Offeryn galw; amserlen ar alwad | Rheoli digwyddiadau; monitro a rheoli hysbysiadau | Polisi gwaith anghynlluniedig; cyflymder cynaliadwy | Adolygiad wythnosol, tuedd fisol |
| Cyfran galwadau y tu allan i oriau | Cyfran y galwadau sy'n cyrraedd y tu allan i'r ffenestr waith ysgrifenedig | Galwadau a ddanfonwyd y tu allan i'r ffenestr waith / pob galwad a ddanfonwyd, dros y cyfnod. Gosodir y ffenestr fesul cylchdro mewn amser lleol; mae gwyliau'n cyfrif fel y tu allan i'r ffenestr | canran | Offeryn galw; calendr cylchdro | Rheoli digwyddiadau; monitro a rheoli hysbysiadau | Cytundeb gweithio ar argaeledd | Misol |
| Cyfradd ymyrraeth nos | Pa mor aml y mae sifft yn cynnwys o leiaf un alwad yn y ffenestr gwsg warchodedig | Sifftiau gydag o leiaf un alwad yn y ffenestr gwsg warchodedig (er enghraifft 22:00 i 07:00 lleol, wedi'i gosod gan y tîm) / pob sifft yn y cyfnod. Eithrir galwad a gydnabyddir yn awtomatig heb ymateb dynol | canran o sifftiau | Offeryn galw; log cydnabyddiaeth | Rheoli digwyddiadau; rheoli gweithlu a thalent | Cyflymder cynaliadwy; gwiriad iechyd tîm | Misol |
| Cyfran llafur diwerth o amser | Cyfran amser gwaith cylchdro a dreulir ar lafur diwerth | Oriau y mae'r cylchdro yn eu cofnodi yn erbyn gwaith a ddosbarthwyd fel llafur diwerth / cyfanswm oriau gwaith a gofnodwyd gan y cylchdro, dros fis. Eithrir cyfarfodydd, hyfforddiant, a gwyliau o'r rhifiadur a'r enwadur. Mae dosbarthu'n dilyn chwe nodwedd llafur diwerth, a gymhwysir gan y tîm | canran o amser | Samplu amser neu labeli tasgau yn y traciwr gwaith; adolygiad dosbarthu tîm | Gwelliant parhaus; rheoli defnyddio; rheoli ceisiadau gwasanaeth | Cyfran gwaith anghynlluniedig; dyrannu capasiti mewn gwaith cynlluniedig | Misol, gydag adolygiad chwarterol o'r dosbarthu |
| Llafur diwerth yn ôl ffynhonnell | Dosbarthiad oriau llafur diwerth ar draws ffynonellau a enwir megis ailgychwyniadau â llaw, ceisiadau mynediad, adnewyddu tystysgrifau, a phrysbennu tocynnau | Oriau llafur diwerth ar gyfer pob ffynhonnell / cyfanswm oriau llafur diwerth, gan restru'r pum ffynhonnell uchaf a grŵp "arall". Yr un eithriadau â chyfran llafur diwerth o amser | canran o oriau llafur diwerth yn ôl ffynhonnell | Samplu amser neu labeli tasgau yn y traciwr gwaith | Rheoli problemau; rheoli ceisiadau gwasanaeth | Ôl-groniad eitemau gwella | Chwarterol |
| Cyfradd galwadau dro ar ôl tro | Cyfran y galwadau a achoswyd gan gyflwr sydd wedi galw'r cylchdro o'r blaen o fewn ffenestr a nodwyd | Galwadau y mae eu grŵp rhybuddion neu god achos yn cyfateb i alwad gynharach o fewn 30 diwrnod / pob galwad yn y cyfnod. Gosodir cod achos gan yr ymatebwr wrth gau; adroddir codau heb eu gosod ar wahân | canran | Offeryn galw; codau achos cofnodion digwyddiadau | Rheoli problemau; rheoli digwyddiadau | Camau gweithredu ôl-sylliad; ôl-groniad dyled dechnegol | Misol |
| Dyfnder cylchdro | Sawl ymatebwr cymwys sy'n rhannu'r galwr o'i gymharu â nifer y rolau i'w llenwi | Nifer y bobl a gwblhaodd barodrwydd ar alwad ac sydd ar gael ar gyfer sifftiau / nifer y safleoedd sifft fesul cylch cylchdro. Mae gwyliau a secondiad yn lleihau argaeledd. Adroddwch fel cymhareb fesul cylchdro, byth fesul person | cymhareb | Amserlen cylchdro; rhestr wirio parodrwydd | Rheoli gweithlu a thalent | Tîm traws-swyddogaethol; matrics sgiliau | Chwarterol |
| Llafur diwerth a ddilëwyd | Oriau llafur diwerth cylchol a dynnwyd o waith y cylchdro gan awtomeiddio neu newid dylunio | Oriau llafur diwerth misol amcangyfrifedig ffynhonnell cyn y newid llai'r un ar ôl y newid, wedi'u mesur dros o leiaf ddau gylch ar ôl eu cyflwyno. Eithrir oriau a arbedwyd gan lanhau un-waith | oriau y mis | Samplu amser cyn ac ar ôl; tocyn gwella | Gwelliant parhaus; rheoli problemau | Eitem wella wedi'i chyflwyno | Chwarterol |

Cyfrif o ymyriadau yw cyfrif galwadau, nid o ddigwyddiadau: gall un digwyddiad gynhyrchu dwsin o alwadau. Mae cyfran llafur diwerth o amser yn dibynnu ar gofnodi gonest, felly trinwch ef fel amcangyfrif y cytunwyd arno.

## Argymhellion

### Diffiniwch y termau cyn i chi gyfrif

**1. Ysgrifennwch i lawr beth sy'n cyfrif fel galwad, sifft, a'r tu allan i oriau.** Mae timau'n cyfrif gwahanol bethau o dan yr un gair. Gallai galwad fod yn unrhyw hysbysiad, dim ond y rhai sy'n cyrraedd person, neu ddim ond y rhai sydd angen gweithredu. Dewiswch un diffiniad, nodwch y ffenestr uno ar gyfer dyblygion, a chofnodwch y ffenestr waith mewn amser lleol. Hebddo, bydd y rhifau'n newid pan ailgyflunir offeryn, a bydd y duedd yn camarwain.

**2. Cytunwch beth yw llafur diwerth, gydag enghreifftiau o'ch gwasanaeth eich hun.** Dechreuwch o'r chwe nodwedd yn llyfr SRE. Ysgrifennwch restr fer o enghreifftiau ac anenghreifftiau, megis ailgychwyn swydd sownd (llafur diwerth), dylunio offeryn adfer newydd (peirianneg), a chyfarfod cynllunio (gorbenion). Adolygwch y rhestr pan fo anghytundebau'n ymddangos.

**3. Dewiswch sut y byddwch yn mesur cyfran llafur diwerth, a derbyniwch ei derfynau.** Yr opsiynau rhad yw samplu amser, labeli tasgau yn y traciwr gwaith, ac amcangyfrif byr bob pythefnos. Nid oes yr un yn union, felly dewiswch yr un â'r lleiaf o orbenion, rhedwch ef am chwarter, a barnwch y duedd yn fwy na'r gwerth absoliwt.

### Mesurwch y llwyth ar y cylchdro

**4. Adroddwch alwadau fesul sifft fel dosbarthiad.** Mae'r sifft gyfartalog yn cuddio'r hyn y mae'r cylchdro yn ei deimlo. Dangoswch y canolrif, y 90fed canradd, a'r sifft brysuraf, ac ychwanegwch nodyn ar beth ddigwyddodd yn y sifft honno. Mae canolrif tawel gyda chynffon ofnadwy yn golygu ychydig o nosweithiau drwg, sy'n broblem wahanol i gylchdro sy'n brysur yn gyson. Gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth, ar gyfer darllen canraddau.

**5. Rhowch amseru wrth ymyl cyfaint.** Mae cyfran galwadau y tu allan i oriau a chyfradd ymyrraeth nos yn dangos pryd mae'r llwyth yn glanio. Poendod yw pum galwad yn oriau swyddfa; mae pump rhwng hanner nos a 05:00 yn gost wahanol. Dangoswch y ddau ar yr un dudalen.

**6. Edrychwch ar y lledaeniad ar draws sifftiau, nid ar draws pobl.** Mae cylchdro lle mae un sifft sy'n digwydd dro ar ôl tro (er enghraifft y penwythnos neu drosglwyddiad dydd Llun) yn casglu'r rhan fwyaf o'r galwadau angen atgyweiriad gwahanol i un lle mae'r llwyth yn gyfartal. Adroddwch gyfran y galwadau yn ôl safle sifft a diwrnod. Pan adroddir y data yn ôl unigolyn a enwir, disgwyliwch iddynt gael eu darllen fel graddio, felly peidiwch â chynhyrchu'r olwg honno.

**7. Cyfrwch lwyth digwyddiadau mawr ar wahân.** Gall digwyddiad mawr gynhyrchu mwy o ymyriadau mewn un noson na mis arferol. Adroddwch ef fel ei linell ei hun fel nad yw un digwyddiad yn ystumio'r duedd (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

### Cysylltwch lwyth ag achosion ac ag atgyweiriadau

**8. Cysylltwch alwadau â phroblemau, ac olrheiniwch ailadroddiadau.** Mae cyfradd galwadau dro ar ôl tro yn dangos faint o'r llwyth sy'n dod o achosion sydd eisoes yn hysbys. Mae cyfradd ailadrodd uchel yn ddadl dros reoli problemau, nid dros ymateb cyflymach. Bwydwch y prif achosion sy'n ailadrodd i'r ôl-groniad problemau a chofnodwch y cyswllt (gweler pwnc 4.1, Metrigau rheoli problemau, a phwnc 4.6, Dyled dechnegol a gwallau hysbys).

**9. Graddiwch ffynonellau llafur diwerth ac ymosodwch ar y mwyaf.** Mae [siart Pareto](https://en.wikipedia.org/wiki/Pareto_chart) o oriau llafur diwerth yn ôl ffynhonnell fel arfer yn dangos ychydig o ffynonellau sy'n gyfrifol am y rhan fwyaf o'r amser. Dewiswch y mwyaf, penderfynwch a ellir ei ddylunio i ffwrdd, ei awtomeiddio, neu ei drosglwyddo i'r tîm sy'n berchen ar yr achos, a'i drefnu fel gwaith nodweddion. Ffafriwch ddileu'r angen i awtomeiddio'r cam, oherwydd bod cam awtomataidd yn dal angen ei gynnal.

**10. Mesurwch lafur diwerth a ddilëwyd, nid awtomeiddiadau a ysgrifennwyd.** Nid yw awtomeiddio nad oes neb yn ei ddefnyddio yn dileu dim. Mesurwch yr oriau llafur diwerth cyn ac ar ôl, dros o leiaf ddau gylch, a chofnodwch yr ymdrech i adeiladu a chynnal yr awtomeiddio. Dyma'r elw gonest, ac mae'n atal rhaglen o "awtomeiddio" sy'n ychwanegu sgriptiau heb ddileu gwaith. Gweler pwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio, ar gyfer mabwysiadu awtomeiddio gan ddefnyddwyr.

### Cadwch y system yn gynaliadwy

**11. Gosodwch derfynau cylchdro mewn cytundeb tîm, yna gwyliwch ddyfnder y cylchdro.** Cytunwch pa mor aml y gall person fod ar alwad, faint o nosweithiau olynol sy'n dderbyniol, a pha orffwys sy'n dilyn noson wael. Mae dyfnder cylchdro yn dangos a oes gan y cylchdro ddigon o bobl gymwys ar gyfer y terfyn y cytunwyd arno. Nid yw cylchdro sy'n wyth o bobl yn enwol ond yn dri mewn gwirionedd, oherwydd nad yw'r lleill yn barod eto neu ar wyliau, yn bodloni'r terfyn, beth bynnag a ddywed y rhestr.

**12. Defnyddiwch y rhifau i ofyn am rywbeth penodol.** Mae rhif llwyth yn cefnogi cais: newid staffio, amser wedi'i gerfio o waith nodweddion i dalu llafur diwerth i lawr, newid i drothwyon rhybuddion, neu ddirwyn i ben. Nodwch y cais wrth ymyl y rhif, neu bydd pobl yn rhoi'r gorau i gofnodi (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Galwadau fesul sifft | Codi trothwyon rhybuddion neu dawelu rhybuddion fel bod y cyfrif yn disgyn; uno rhybuddion digyswllt yn un alwad; symud galwadau i giw tocynnau nad oes neb yn ei wylio | Cwmpas canfod a digwyddiadau a adroddwyd gan gwsmeriaid a gollodd y monitro (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion); amser i ganfod (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau) |
| Cyfran galwadau y tu allan i oriau | Ailddiffinio'r ffenestr waith i fod yn ehangach; aildrefnu swyddi a defnyddiadau fel bod galwadau'n symud i oriau swyddfa heb eu lleihau; ail-ddosbarthu galwadau fel rhai "brys isel" | Cyfanswm cyfaint galwadau wrth ymyl y gyfran; ffenestr waith ysgrifenedig dan reolaeth newid; adolygiad o'r hyn a symudodd |
| Cyfradd ymyrraeth nos | Oedi cydnabyddiaeth tan y bore; cydnabod galwadau'n awtomatig; cyfrif galwadau a gyrhaeddodd berson yn unig | Amser i gydnabod yn ôl awr (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau); galwadau heb ymateb dynol wedi'u hadrodd ar wahân; effaith ar gwsmeriaid yn y nos |
| Cyfran llafur diwerth o amser | Ail-ddosbarthu llafur diwerth fel "peirianneg" neu "waith prosiect"; cofnodi llai nag a dreuliwyd; labelu dim ond yr hyn sy'n hawdd ei ddisgrifio | Archwiliad cyfnodol o eitemau a ddosbarthwyd gan rywun y tu allan i'r cylchdro; barn y tîm ei hun ar sut y teimlai'r wythnos; cyfran yr amser a dreulir ar waith gwella cynlluniedig |
| Llafur diwerth yn ôl ffynhonnell | Hollti ffynhonnell fawr yn sawl un bach fel nad yw'r un yn sefyll allan; gadael ffynhonnell heb ei henwi yn "arall" | Cap ar y grŵp "arall" (er enghraifft o dan un rhan o bump o oriau llafur diwerth, gosodiad tîm); samplu'r eitemau "arall" bob chwarter |
| Cyfradd galwadau dro ar ôl tro | Cau galwadau gyda chod achos newydd bob tro fel bod paru'n cael ei golli; ehangu codau achos nes bod popeth yn wahanol; ymestyn neu fyrhau'r ffenestr | Archwiliad cod achos ar sampl; ailadrodd yr un grŵp rhybuddion ar draws digwyddiadau (gweler pwnc 4.1, Metrigau rheoli problemau) |
| Dyfnder cylchdro | Cyfrif pobl nad ydynt wedi cwblhau parodrwydd; cyfrif pobl sydd anaml ar gael; padio'r rhestr | Cyfran y sifftiau a gwmpesir mewn gwirionedd gan y gronfa enwol; cyfrif sifftiau gwirioneddol yn ôl safle, wedi'i adrodd heb enwau; cwblhau'r rhestr wirio parodrwydd |
| Llafur diwerth a ddilëwyd | Cyfrif glanhau un-waith fel arbedion cylchol; anwybyddu'r ymdrech i adeiladu a chynnal yr awtomeiddio; hawlio arbedion heb gymhariaeth cyn ac ar ôl | Oriau cyn ac ar ôl wedi'u mesur dros ddau gylch; ymdrech cynnal yr awtomeiddio; cyfran llafur diwerth o amser dros y chwarteri canlynol |

Mae darlleniad iach yn gylchdro y mae ei sifft ganolrifol yn dawel a'i sifft waethaf yn brin, gydag ychydig o alwadau yn y nos, cyfran sy'n lleihau o alwadau sy'n ailadrodd, a chyfran llafur diwerth sy'n disgyn oherwydd bod ffynonellau wedi'u dileu, nid oherwydd eu bod wedi'u hail-ddosbarthu. Mae hefyd yn dangos yr ymdrech i gyrraedd yno: gwaith gwella yn ymddangos yn y cynllun, wedi'i ariannu, ac wedi'i gyflwyno. Os yw cyfrif galwadau yn disgyn tra bo cwsmeriaid yn adrodd mwy o ddigwyddiadau na ddaliodd y monitro, mae'r rhifau'n gwella drwy edrych i ffwrdd.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Cyfrif galwadau o'r offeryn galw | Awtomatig, rhad, ac anodd ei ddadlau | Yn cyfrif ymyriadau, nid eu cost; mae tiwnio rhybuddion yn newid y cyfrif heb newid y llwyth |
| Samplu amser ar gyfer llafur diwerth | Cywirdeb rhesymol am ymdrech gymedrol | Angen disgyblaeth; mae samplau bach yn swnllyd |
| Adrodd ar lefel cylchdro | Yn cyfateb i sut mae'r gwaith wedi'i drefnu; diogel i'w rannu'n eang | Gall guddio person sy'n cael trafferth; angen sianel sgwrs gefnogol wrth ei ymyl |
| Cap caled ar lafur diwerth (er enghraifft nod llyfr SRE o gadw llafur diwerth o dan 50 y cant o amser) | Signal clir sy'n sbarduno ymateb | Gellir bodloni rhif drwy ail-ddosbarthu; mae cap angen cefnogaeth rheolwyr |

Y tensiwn canolog yw rhwng derbyn a buddsoddi. Mae'n hawdd trin llwyth uchel fel pris arferol gwasanaeth pwysig a gofyn i bobl ei amsugno, ac mae'n hawdd gosod cap nad oes gan neb y pŵer i'w orfodi. Y ffordd drwodd yw parau pob mesur â phenderfyniad: trothwy y mae'r tîm yn stopio ac yn gweithredu arno, perchennog a enwir ar gyfer y weithred, a dyddiad i edrych eto. Mae rhifau ar lefel cylchdro yn ddiogel ac weithiau'n rhy fras. Pan fo rhywun yn cael trafferth, mae'r sgwrs yn perthyn gyda'r person hwnnw a'i reolwr, gan ddefnyddio eu cyfrif eu hunain o'r wythnos.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Sut oedd ein sifft brysuraf y chwarter diwethaf yn teimlo, a beth mae'r rhifau yn ei ddweud amdani?**
Dechreuwch gyda'r stori cyn y siart. Gofynnwch i'r bobl a oedd ar alwad ddisgrifio'r sifft, yna cymharwch hi â rhifau galwadau fesul sifft ac ymyrraeth nos. Os yw'r rhifau'n tanddatgan y profiad, darganfyddwch beth sydd ar goll, megis galwadau heb eu cofnodi neu waith a wnaed ar ôl yr alwad. Cipiwch y rhestr honno fel y gwelliant mesur nesaf.

**2. Beth fyddem ni'n ei ddweud sy'n llafur diwerth ar ein tîm, a beth fyddem yn ei ddweud nad ydyw?**
Rhowch bump neu chwech o dasgau diweddar ar fwrdd a gofynnwch i bob person eu dosbarthu fel llafur diwerth, peirianneg, neu orbenion yn erbyn y chwe nodwedd. Disgwyliwch anghytundeb, a'i drin fel defnyddiol: mae'r anghytundebau'n dangos ble mae'r diffiniad yn amwys. Cytunwch ar ddiffiniad gweithio ar gyfer y chwarter nesaf ac ysgrifennwch ddwy enghraifft o bob un. Osgowch ddadlau a yw'r gwaith yn bleserus, oherwydd mai'r cwestiwn yw a yw'n â llaw, yn ailadroddus, ac yn awtomeiddiadwy.

**3. Pa rybudd neu dasg fyddem ni'n ei ddileu gyntaf pe gallem?**
Gofynnwch am y rhybudd neu'r dasg gylchol y mae pawb yn ei hofni, yna gofynnwch beth sy'n ein rhwystro rhag ei ddileu: y gost i'w drwsio, perchennog coll, neu gred ei fod yn ofynnol. Dylai'r hwylusydd chwilio am waith sy'n rhad i'w ddileu ac nad yw ei berchennog yn yr ystafell. Gorffennwch drwy ddewis un eitem ar gyfer y rownd gynllunio nesaf.

**4. Faint o bobl all gymryd sifft heddiw mewn gwirionedd, a pha derfynau ydym ni'n barod i ymrwymo iddynt?**
Cyfrwch barodrwydd yn onest: pwy sydd wedi'i hyfforddi, pwy sydd ar gael, a phwy sydd â chyfyngiadau. Cymharwch y canlyniad â maint enwol y cylchdro. Gofynnwch pa amlder o fod ar alwad a pha nifer o nosweithiau olynol y mae'r grŵp yn eu hystyried yn dderbyniol, yna gwiriwch a yw'r arfer cyfredol yn ei fodloni.

**5. Pe baem yn haneru ein cyfrif galwadau erbyn y chwarter nesaf, sut y byddem yn gwybod nad oeddem wedi rhoi'r gorau i wrando yn unig?**
Mae'r cwestiwn hwn yn ymwneud â'r rheilen warchod. Gofynnwch i'r grŵp restru ffyrdd y gallai'r cyfrif galwadau ddisgyn heb i'r gwasanaeth wella, megis codi trothwyon, uno rhybuddion, neu anwybyddu ffynhonnell. Yna gofynnwch beth fyddem yn ei weld mewn adroddiadau cwsmeriaid ac mewn mesurau canfod pe bai hynny wedi digwydd. Cytunwch ar y rheilen warchod a'i rhoi ar yr un dudalen â'r cyfaint.

**6. Pwy sy'n gweld y rhifau hyn, a beth ydym ni eisiau iddynt ei wneud â hwy?**
Olrheiniwch lwybr y mesurau llwyth o'r cylchdro i reolwyr ac arweinwyr. Gofynnwch beth mae pob cynulleidfa yn debygol o'i gasglu, ac a ellid darllen unrhyw olwg fel graddio. Cytunwch ar y ffurf sy'n mynd i fyny: ar lefel cylchdro, gyda chyd-destun, gyda chais ynghlwm. Nodwch unrhyw bryder am unigolion yn adnabyddadwy.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn cynhyrchu llawer o'r llwyth ar alwad drwy'r newidiadau y maent yn eu rhyddhau. Gall timau sy'n rhedeg yr hyn y maent yn ei adeiladu weld y cyswllt rhwng rhyddhad a'r galwadau sy'n dilyn. Dylent gynnwys llafur diwerth a gwaith ar alwad mewn cynllunio capasiti, trefnu dileu llafur diwerth fel gwaith ôl-groniad cyffredin, a gwylio ansawdd newid wrth ymyl cyflymder (gweler pwnc 2.8, Metrigau DORA).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn cario'r galwr amlaf ac yn gweld y gost ddynol yn gyntaf. Dylent fod yn berchen ar y diffiniadau, rhedeg y samplu amser neu labelu, cyhoeddi'r rhifau ar lefel cylchdro, a dod â'r prif ffynonellau llafur diwerth ac achosion sy'n ailadrodd at y timau perchnogol gyda thystiolaeth. Eu risg yw amsugno'r llwyth yn dawel o broffesiynoldeb. Mae cofnod tawel, ffeithiol o nosweithiau ac wythnosau yn gais mwy effeithiol am gymorth na chwyn, ac ni ddylid byth droi'r cofnodion yn raddio o'r bobl a ymatebodd.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn penderfynu staffio, blaenoriaethau, ac a yw gwaith llafur diwerth yn cael ei ariannu. Mae arweinydd sy'n darllen cyfran llafur diwerth uchel fel perfformiad gwael yn dysgu'r tîm i'w ostwng drwy ail-labelu. Mae arweinydd sy'n ei ddarllen fel bil am waith a ddewisodd y sefydliad beidio â'i ariannu yn cael data gonest a chynllun. Dylai llywodraethu ddisgwyl terfyn ar lwyth cylchdro ac ymateb gweladwy pan fo'n cael ei ragori (gweler pwnc 9.2, Metrigau boddhad a lles).

### Cwsmeriaid a defnyddwyr

Nid yw defnyddwyr yn gweld y cylchdro, ond maent yn teimlo ei effeithiau: diagnosis arafach gan ymatebwyr blinedig, digwyddiadau dro ar ôl tro o achosion heb eu trwsio, a ymadawiad pobl a oedd yn adnabod y gwasanaeth. Lle mae defnyddwyr yn ymestyn ar draws llawer o barthau amser, mae eu hanghenion y tu allan i oriau yn siapio'r cylchdro, ac mae cost eu cwmpasu yn bwnc teg ar gyfer sgwrs lefel gwasanaeth (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg platfform archebion, gwasanaeth cyfrifon cwsmeriaid, ac integreiddiad warws. Mae cylchdro o chwe pheiriannydd o ddau dîm cynnyrch a grŵp gweithrediadau bach yn rhannu sifft wythnosol ar alwad. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r adolygiad misol yn dangos canolrif o 9 galwad fesul sifft a 90fed canradd o 31. Roedd gan y sifft brysuraf 58 galwad. Mae tua hanner yr holl alwadau yn cyrraedd y tu allan i oriau, ac roedd 6 o'r 8 sifft yn y chwarter yn cynnwys galwad rhwng 22:00 a 07:00. Mae samplu amser yn awgrymu bod llafur diwerth yn cymryd 55 y cant o amser gwaith.

Roedd y sifft brysuraf yn cyd-daro â thystysgrif yn dod i ben ar yr integreiddiad warws a alwodd y cylchdro 22 gwaith mewn un noson. Mae un rhybudd gofod disg ar weinydd swp yn cyfrif am bron i chwarter o'r galwadau, a chaewyd y rhan fwyaf drwy glirio cyfeiriadur dros dro â llaw. Cyfradd galwadau dro ar ôl tro yw 41 y cant. Mae golwg Pareto yn dangos mai adnewyddu tystysgrifau â llaw, glanhau disg, a cheisiadau mynediad sy'n cymryd y rhan fwyaf o oriau llafur diwerth.

Mae'r tîm yn cymryd tair eitem i'r pedair wythnos nesaf: awtomeiddio adnewyddu tystysgrifau, trwsio achos y cyfeiriadur dros dro llawn, a symud ceisiadau mynediad i ffurflen hunanwasanaeth sy'n eiddo i'r tîm hunaniaeth. Mae cytundeb gweithio yn gosod terfyn o un sifft ym mhob pedair i bob person a diwrnod gorffwys ar ôl noson gyda thair galwad neu fwy. Dyfnder y cylchdro yw 6 pherson ar gyfer angen y cytunwyd arno o 8, felly mae dau beiriannydd o drydydd tîm yn dechrau hyfforddiant parodrwydd.

Mae risg chwarae'r system yn ymddangos yn yr adolygiad nesaf. Mae galwadau fesul sifft wedi disgyn i ganolrif o 4, a'r 90fed canradd i 12. Mae un rheolwr yn falch. Mae aelod o'r tîm yn tynnu sylw bod trothwy rhybudd y ddisg wedi'i godi 20 pwynt a bod y gweinydd swp wedi llenwi ddwywaith heb unrhyw alwad. Cododd digwyddiadau a adroddwyd gan gwsmeriaid am archebion swp wedi'u hoedi. Daliodd y rheilen warchod, digwyddiadau a adroddwyd gan gwsmeriaid a gollodd y monitro, ef. Gwrthdrôdd y newid trothwy, trefnir glanhau'r cyfeiriadur fel atgyweiriad, ac mae'r tîm yn ychwanegu rheol bod unrhyw newid trothwy yn cael ei gofnodi gyda'i reswm a'i adolygu ar ôl mis. Cyfran llafur diwerth y chwarter nesaf yw 38 y cant (enghreifftiol) ac fe'i hadroddir gyda'r dull samplu wrth ei hymyl.

## Y golwg fesul sector

**Busnes newydd.** Yn aml nid oes gan dîm bach gylchdro ffurfiol, felly mae pawb ar alwad drwy'r amser ac mae'r gost yn anweledig. Cyfrwch alwadau a deffroadau nos mewn taenlen ac ysgrifennwch y tair tasg ailadroddus fwyaf. Mae sylfaenwyr sy'n cario'r galwr eu hunain yn risg busnes, nid bathodyn ymrwymiad.

**Busnes bach.** Gall un neu ddau o bobl redeg yr holl TG. Mesurwch yr hyn nad oes angen offer arno: galwadau y tu allan i oriau, tasgau sy'n ailadrodd, a gwyliau na ellir eu cymryd. Gall darparwr gwasanaeth a reolir gymryd rhan o'r cylchdro os yw'r contract yn nodi amseroedd ymateb ac oriau. Yn aml un yw dyfnder y cylchdro, sef y prif risg.

**Menter fawr.** Mae graddfa yn dod â chylchdroeon dilyn-yr-haul, llwyfannau a rennir, a sawl cyflenwr. Diffiniwch y mesurau unwaith, gosodwch ffenestri gwaith lleol fesul rhanbarth, ac osgowch gyfartaleddu ar draws cylchdroeon â gwasanaethau gwahanol iawn. Mae rheolau cyflogaeth mewn rhai gwledydd yn cyfyngu dyletswydd ar alwad ac yn mynnu cyfnodau gorffwys, ac mae'r rhain yn perthyn yn y terfynau cylchdro.

**Llywodraeth a'r sector cyhoeddus.** Efallai y bydd angen cwmpas rownd y cloc ar wasanaethau yn ôl statud neu gontract, ac mae staffio'n rhwym wrth gaffael a graddio. Yn aml llywodraethir terfynau cylchdro a rheolau gorffwys gan gytundebau cyflogaeth, felly mesurwch yn eu herbyn ac adroddwch pan ragorir arnynt. Mae atebolrwydd cyhoeddus yn gwneud adrodd didwyll yn fwy gwerthfawr ac yn anoddach: adeiladwch sianel ddiogel ar gyfer data llwyth, a byddwch yn eglur ei fod yn disgrifio'r system a'r staffio, nid unigolion (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw gwarchod ansawdd gwasanaeth a chadw pobl fedrus. Mae ymatebwyr blinedig yn diagnosio'n arafach, a phan fo pobl brofiadol yn gadael, mae'r wybodaeth yn mynd gyda hwy. Mae gan ddisodli person gostau go iawn mewn recriwtio, ymsefydlu, ac allbwn llai yn ystod y cyfnod dysgu, a gall sefydliad amcangyfrif y costau hynny o'i gofnodion ei hun. Mae llafur diwerth hefyd yn cymryd capasiti oddi wrth wella. Ni all tîm sy'n treulio'r rhan fwyaf o'i amser ar weithrediadau â llaw leihau'r digwyddiadau sy'n eu hachosi.

Mae cost y mesurau yn gymedrol. Mae'r offeryn galw eisoes yn cyfrif galwadau, ac mae samplu amser yn costio ychydig funudau y person bob pythefnos. Y gost fwy yw gweithredu ar y canfyddiadau: amser peirianneg i ddileu llafur diwerth, staffio ar gyfer cylchdro cynaliadwy, ac amser adolygu. Cyfrwch gynnal a chadw'r awtomeiddio fel cost, oherwydd bod cam awtomataidd heb ei gynnal yn dod yn ddigwyddiad yfory.

Mae'r elw'n ymddangos fel llai o alwadau o achosion hysbys, llai o ymyriadau nos, oriau o lafur diwerth wedi'u rhoi yn ôl i waith gwella, llai o golli staff o'r cylchdro, a diagnosis cyflymach. Nid oes unrhyw ffigur cyffredinol yn berthnasol, felly amcangyfrifwch eich un eich hun. Ar gyfer ffynhonnell llafur diwerth, lluoswch yr oriau misol â chost fesul awr lwythog y cytunwyd arni gyda chyllid, cymharwch hynny â'r ymdrech i'w ddileu, ac adolygwch ar ôl dau gylch. Ar gyfer cynaliadwyedd cylchdro, cofnodwch ymadawiadau ac absenoldebau hir o'r cylchdro a'u cymharu â mesurau llwyth dros amser, gan drin y cysylltiad fel damcaniaeth i'w phrofi, nid achos a brofwyd. Lle mae angen ffigur, datganwch ef fel amcangyfrif a dangoswch y mewnbynnau (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Graddio pobl yn ôl galwadau.** Mae'n troi mesur system yn sgôr perfformiad ac yn dysgu ymatebwyr i osgoi sifftiau a chuddio ymyriadau. Adroddwch yn ôl cylchdro, safle sifft, a gwasanaeth.
- **Torri galwadau drwy dawelu rhybuddion.** Mae'r cyfrif yn disgyn a chanfod yn gwanhau. Parwch gyfaint â chanfod a digwyddiadau a adroddwyd gan gwsmeriaid, ac adolygwch bob newid trothwy.
- **Galw popeth yn llafur diwerth.** Mae diffiniad mor eang nes ei fod yn cynnwys cyfarfodydd a phroblemau anodd yn dinistrio'r signal. Defnyddiwch y chwe nodwedd a chadwch restr o enghreifftiau.
- **Targed llafur diwerth heb awdurdod y tu ôl iddo.** Mae cap na all sbarduno penderfyniad yn dod yn rhif y mae pobl yn dadlau amdano. Cytunwch ymlaen llaw beth sy'n digwydd pan ragorir arno a phwy sy'n penderfynu.
- **Awtomeiddio cyn deall.** Gall awtomeiddio ymgorffori proses wael ac ychwanegu cynnal a chadw. Gofynnwch yn gyntaf a ellir dylunio'r angen i ffwrdd, a mesurwch lafur diwerth a ddilëwyd wedyn.
- **Cyfartaleddu ar draws gwasanaethau annhebyg.** Nid yw cymedr ar draws gwasanaeth sefydlog ac un bregus yn disgrifio'r naill na'r llall. Dangoswch bob gwasanaeth a chylchdro ar wahân.
- **Mesur a pheidio â gweithredu.** Mae rhifau llwyth heb ymateb yn dysgu pobl nad yw'r data'n bwysig. Atodwch benderfyniad, perchennog, a dyddiad adolygu i bob canfyddiad.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a data | Disgrifir galwadau a llafur diwerth yn ôl teimlad; dim diffiniad cyffredin | Mae rhai cylchdroeon yn cyfrif galwadau; trafodir llafur diwerth ond ni chaiff ei fesur | Un diffiniad ysgrifenedig o alwad, sifft, y tu allan i oriau, a llafur diwerth; data galw wedi'i gasglu gan offeryn | Dosbarthiadau ac amseru wedi'u tueddu; llafur diwerth wedi'i samplu'n fisol ac wedi'i archwilio | Diffiniadau wedi'u hadolygu ar draws timau a chyflenwyr; ymdrech samplu wedi'i haddasu i werth yr atebion |
| Cynaliadwyedd cylchdro | Anffurfiol; yr un ychydig bobl yn amsugno'r galwr | Mae rhestrau'n bodoli; trafodir terfynau ond heb eu hysgrifennu | Terfynau ysgrifenedig ar amlder a gorffwys; dyfnder cylchdro yn hysbys | Terfynau wedi'u monitro a thorri wedi'u hadolygu gyda gweithredu | Cylchdroeon wedi'u rhannu ar draws timau a chyflenwyr, a llwyth wedi'i gydbwyso wrth i wasanaethau newid |
| Defnyddio'r rhifau | Wedi'u defnyddio i feio neu eu hanwybyddu | Wedi'u dangos i reolwyr | Wedi'u dangos i'r cylchdro yn gyntaf, gyda'r penderfyniadau y maent yn eu cefnogi | Wedi'u paru â rheiliau gwarchod ac wedi'u hadolygu ar rythm sy'n arwain at newid wedi'i ariannu | Wedi'u rhannu ag arweinwyr a phartneriaid i gynllunio staffio a chwmpas gwasanaeth |

## Rhestr wirio

- [ ] Diffinnir galwad, sifft, ffenestr y tu allan i oriau, a ffenestr uno yn ysgrifenedig.
- [ ] Mae gan lafur diwerth ddiffiniad ysgrifenedig gydag enghreifftiau ac anenghreifftiau o'n gwasanaeth ein hunain.
- [ ] Adroddir galwadau fesul sifft fel canolrif, canradd uchel, a'r sifft brysuraf.
- [ ] Adroddir cyfran galwadau y tu allan i oriau a chyfradd ymyrraeth nos wrth ymyl cyfaint.
- [ ] Adroddir llwyth yn ôl cylchdro, safle sifft, a gwasanaeth, byth yn ôl person a enwir.
- [ ] Samplir cyfran llafur diwerth o amser ar amserlen, gyda'r dull wedi'i ysgrifennu i lawr.
- [ ] Mae'r pum prif ffynhonnell llafur diwerth a'r prif achosion galwadau sy'n ailadrodd ar yr ôl-groniad gwella.
- [ ] Mae terfynau cylchdro a rheolau gorffwys mewn cytundeb tîm, a gwirir dyfnder cylchdro bob chwarter.
- [ ] Mae gan bob mesur llwyth reilen warchod ar yr un dudalen, gan gynnwys canfod a digwyddiadau a adroddwyd gan gwsmeriaid.
- [ ] Mae pob adolygiad yn gorffen gyda phenderfyniad, perchennog, a dyddiad.
- [ ] Logir newidiadau trothwy a rhybuddion gyda rheswm a'u hadolygu ar ôl mis.

## Anogwyr AI

**Adolygwch lwyth cylchdro a chwiliwch am batrymau.**

```text
Rwy'n helpu i redeg y cylchdro ar alwad ar gyfer [gwasanaeth neu grŵp o
wasanaethau]. Mae gan y cylchdro [nifer] o bobl a hyd sifft o [hyd]. Ein
ffenestr waith yw [oriau a pharth amser], a'n ffenestr gwsg warchodedig yw
[oriau]. Isod mae data galw dienw ar gyfer [cyfnod], gyda cholofnau [rhestr
colofnau]:

[gludwch ddata gydag enwau wedi'u tynnu]

Disgrifiwch ddosbarthiad galwadau fesul sifft, cyfran y galwadau y tu allan i
oriau, a chyfran y sifftiau gydag ymyrraeth nos. Nodwch y sifftiau brysuraf,
grwpiau rhybuddion sy'n ailadrodd, ac unrhyw batrwm yn ôl diwrnod neu safle
sifft. Adroddwch ar lefel cylchdro a gwasanaeth yn unig, byth yn ôl person.
Peidiwch â dyfeisio gwerthoedd meincnod na thargedau. Rhestrwch eich
rhagdybiaethau a'r hyn na allech ei benderfynu o'r data.
```

**Dosbarthwch dasgau fel llafur diwerth, peirianneg, neu orbenion.**

```text
Mae ein tîm yn rhedeg [gwasanaeth]. Rydym yn diffinio llafur diwerth fel gwaith
sy'n â llaw, yn ailadroddus, yn awtomeiddiadwy, yn dactegol, heb werth parhaol,
ac yn tyfu gyda'r gwasanaeth. Dyma restr o dasgau diweddar gydag oriau bras:
[gludwch restr].

Ar gyfer pob tasg, dywedwch a yw'n ffitio llafur diwerth, peirianneg, neu
orbenion, ac enwch pa rai o'r chwe nodwedd y mae'n eu bodloni neu'n eu methu.
Nodwch dasgau sydd ar y ffin a dywedwch pa wybodaeth ychwanegol fyddai'n eu
setlo. Awgrymwch sut y gellid dileu pob ffynhonnell llafur diwerth drwy
ddylunio, ei awtomeiddio, neu ei throsglwyddo i dîm perchnogol, heb ddyfeisio
arbedion. Rhestrwch eich rhagdybiaethau a chwestiynau i'r tîm.
```

**Drafftiwch ffyrdd o chwarae'r system a rheiliau gwarchod ar gyfer ein metrigau llwyth.**

```text
Rydym yn adrodd y metrigau ar alwad a llafur diwerth hyn ar gyfer [enw'r
cylchdro]: [rhestr metrigau gyda diffiniadau]. Fe'u dangosir i [cynulleidfa] i
gefnogi [penderfyniad]. Daw ein data o [offeryn galw, traciwr gwaith, arolwg].

Ar gyfer pob metrig, rhestrwch ffyrdd realistig y gallai wella heb i'r cylchdro
fod yn well eu byd, a chynigiwch fetrig neu arfer rheilen warchod a fyddai'n
datgelu pob un. Yna dywedwch sut y gellid chwarae'r rheilen warchod ei hun.
Peidiwch â dyfeisio gwerthoedd meincnod. Rhestrwch eich rhagdybiaethau ac unrhyw
ddiffiniadau y dylwn eu tynhau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau cysylltiedig a'r rheiliau gwarchod pan ychwanegwch fesur ar alwad neu lafur diwerth at ddangosfwrdd.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod golygiadau i'r pwnc hwn yn cadw pob metrig wedi'i baru â ffordd o chwarae'r system a rheilen warchod.

## Pwyntiau allweddol

- Mesurwch y llwyth ar y cylchdro, yn ôl sifft, gwasanaeth, ac amser o'r dydd, a pheidiwch byth â graddio'r bobl arno.
- Cyfrwch pryd mae ymyriadau'n digwydd yn ogystal â faint, oherwydd bod galwadau nos yn costio mwy na rhai oriau swyddfa.
- Diffiniwch lafur diwerth yn gul gan ddefnyddio ei chwe nodwedd, amcangyfrifwch ei gyfran o amser gyda dull syml, a barnwch y duedd.
- Cysylltwch alwadau a ffynonellau llafur diwerth â gwaith problemau ac â newidiadau awtomeiddio neu ddylunio, a mesurwch y llafur diwerth a ddilëwyd mewn gwirionedd.
- Parwch bob mesur llwyth â rheilen warchod megis canfod a digwyddiadau a adroddwyd gan gwsmeriaid, fel na ellir prynu rhifau is drwy edrych i ffwrdd.
- Trinwch lwyth trwm fel cais am fuddsoddiad, gyda phenderfyniad, perchennog, a dyddiad adolygu.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Eliminating Toil", https://sre.google/sre-book/eliminating-toil/
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016. Chapter "Being On-Call", https://sre.google/sre-book/being-on-call/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018. Chapter "Eliminating Toil", https://sre.google/workbook/eliminating-toil/
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Wikipedia, [On-call](https://en.wikipedia.org/wiki/On-call).
7. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
8. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
9. Wikipedia, [Sleep deprivation](https://en.wikipedia.org/wiki/Sleep_deprivation).
10. Wikipedia, [Alarm fatigue](https://en.wikipedia.org/wiki/Alarm_fatigue).
11. Wikipedia, [Occupational burnout](https://en.wikipedia.org/wiki/Occupational_burnout).
12. Wikipedia, [Pareto chart](https://en.wikipedia.org/wiki/Pareto_chart).
