# Metrigau DORA

**Mae'r metrigau DORA yn disgrifio pa mor gyflym ac mor ddiogel y mae newidiadau meddalwedd tîm yn cyrraedd cynhyrchu, felly darllenwch y mesurau cyflymder a'r mesurau sefydlogrwydd gyda'i gilydd, cyfrifwch hwy o ddigwyddiadau piblinell a digwyddiadau, a'u defnyddio i ddechrau sgyrsiau am system gyflawni, byth i raddio timau na phobl.**

## Crynodeb a chymhelliant

Daw'r metrigau DORA o raglen ymchwil [DevOps Research and Assessment (DORA)](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment), astudiaeth hirdymor o sut mae arferion cyflawni meddalwedd yn cysylltu â chanlyniadau tîm a sefydliad. Cyflwynodd Nicole Forsgren, Jez Humble a Gene Kim y canfyddiadau cynnar yn y llyfr [Accelerate](https://en.wikipedia.org/wiki/Accelerate_(book)) yn 2018, ac mae'r rhaglen wedi parhau o dan Google Cloud gydag adroddiad blynyddol. Gofynnodd yr ymchwil pa agweddau mesuradwy ar gyflawni sy'n rhagfynegi canlyniadau da, a setlo ar set fach o fesurau perfformiad cyflawni meddalwedd y gellir eu cyfrifo o'r biblinell gyflawni a'r cofnod digwyddiadau.

Ym mis Hydref 2026, mae gwefan DORA yn disgrifio pum metrig perfformiad cyflawni meddalwedd, wedi'u rhannu'n ddau grŵp. Mae tri yn disgrifio **trwybwn**, sef pa mor gyflym y mae newidiadau'n symud: amser arweiniol newid, amlder defnyddio, ac amser adfer defnyddio a fethodd. Mae dau yn disgrifio **ansefydlogrwydd**, sef pa mor aml y mae rhyddhad yn achosi trafferth: cyfradd methu newid a chyfradd ailwaith defnyddio. Roedd cyhoeddiadau cynharach yn disgrifio pedwar metrig, gydag "amser i adfer gwasanaeth" yn lle amser adfer defnyddio a fethodd a heb y gyfradd ailwaith. Mae diffiniadau wedi'u mireinio dros y blynyddoedd, felly nodwch bob amser pa argraffiad o'r arweiniad rydych yn ei ddilyn a'r dyddiad y gwiriwyd ef ddiwethaf.

Y canfyddiad ymchwil a wnaeth y metrigau'n enwog yw bod cyflymder a sefydlogrwydd yn tueddu i symud gyda'i gilydd ar draws timau. Nid oedd timau a ddefnyddiodd yn aml ac a oedd ag amseroedd arweiniol byr, ar gyfartaledd, yn talu amdano â mwy o fethiannau. Mae hyn yn gwrthdroi'r hen dybiaeth bod mynd yn gyflymach yn golygu torri mwy. Patrwm mewn data arolwg a phiblinell ydyw, nid cyfraith, ac mae'n dal i dimau sydd wedi buddsoddi mewn arferion megis [cyflawni parhaus](https://en.wikipedia.org/wiki/Continuous_delivery), sypiau bach, profi awtomataidd ac adborth cyflym. Signalau o'r galluoedd sylfaenol hynny yw'r metrigau. Nid y galluoedd eu hunain ydynt.

Mae'r termau isod yn codi dro ar ôl tro yn y pwnc hwn.

- Mae **defnyddio** (deployment) yn weithred o roi fersiwn o'r meddalwedd mewn amgylchedd penodol. Mae'r pwnc hwn yn golygu cynhyrchu oni ddywed yn wahanol.
- Mae **newid** yn set o addasiadau i'r meddalwedd, fel arfer un neu fwy o gomisiynau sy'n cludo gyda'i gilydd. Yn ITIL 4 mae gan y gair ystyr ehangach, yn cwmpasu unrhyw ychwanegiad, addasiad neu dynnu a allai effeithio ar wasanaethau, a'r arfer [ITIL](https://en.wikipedia.org/wiki/ITIL) sy'n ei lywodraethu yw galluogi newid.
- Mae **defnyddio a fethodd** yn ddefnyddio sy'n achosi gwasanaeth diraddedig neu doriad mewn cynhyrchu ac sydd angen adferiad, megis atgyweiriad poeth, dychwelyd neu glwt. Mae eich tîm yn ysgrifennu'r rheol union, oherwydd bod yr ymchwil yn ei gadael i ddiffiniad lleol.
- Mae **dychwelyd** (rollback) yn weithred o ddychwelyd cynhyrchu i'r fersiwn dda hysbys flaenorol.
- Mae **canradd** yn werth y mae cyfran benodol o arsylwadau'n syrthio islaw iddo. Yr 85fed ganradd o amser arweiniol yw'r rhif y mae 85 y cant o newidiadau yn ei guro.

Mae'r golygon ystwyth ac ITIL yn cwrdd ar y tir hwn. Mae tîm ystwyth yn gweld y rhifau hyn fel adborth ar ei arfer peirianneg a'i gytundebau gweithio. Mae ymarferydd ITIL yn eu gweld fel tystiolaeth canlyniad ar gyfer galluogi newid, rheoli rhyddhau, rheoli defnyddio a rheoli digwyddiadau. Fel arfer mae'r tensiwn yn ymwneud â rheolaeth. Mae bwrdd cymeradwyo newid traddodiadol yn ceisio lleihau methiant drwy archwilio pob newid cyn iddo gludo. Canfu ymchwil DORA nad oedd cymeradwyo allanol trwm yn gysylltiedig â gwell sefydlogrwydd, a bod adolygu gan gymheiriaid, profi awtomataidd a newidiadau bach yn. Yn ITIL 4, mae galluogi newid yn caniatáu hyn drwy wahanu newidiadau safonol, normal a brys a thrwy adael i newidiadau risg isel gael eu rhag-awdurdodi (gweler pwnc 4.3, Metrigau galluogi newid).

Mae gan y metrigau hefyd gyfyngiadau y mae'r ymchwil ei hun yn eu datgan, ac mae'r cyngor ymarferol yn y pwnc hwn yn adeiladu arnynt. Maent yn disgrifio system gyflawni ar gyfer un cymhwysiad neu wasanaeth, maent i fod ar gyfer sgyrsiau gwella, ac maent yn dweud dim am a yw'r gwaith a gludir yn werthfawr. Gall tîm gyhoeddi rhifau ardderchog wrth gludo'r peth anghywir. Am y rheswm hwnnw mae'r pwnc hwn yn eistedd wrth ymyl, ac nid uwchlaw, y mesurau llif (gweler pwnc 2.1, Mesurau llif), y mesurau dibynadwyedd gwasanaeth (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau) a'r mesurau canlyniad (gweler pwnc 1.3, Canlyniadau yn hytrach nag allbwn: dewis beth i'w fesur).

Yn olaf, mae'r metrigau'n gwahodd [cyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) y funud y maent yn ymddangos ar ddangosfwrdd arweinyddiaeth. Amlder defnyddio yw'r hawsaf i'w chwyddo a chyfrifon defnyddio a fethodd yw'r hawsaf i'w cuddio. Mae pob argymhelliad isod felly yn paru mesur â gwiriad ar sut y gellid ei blygu (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Egwyddorion allweddol

- **Cyfrifwch o ddigwyddiadau, nid o'r cof.** Daw defnyddiadau o'r biblinell, methiannau ac adferiadau o'r cofnod digwyddiadau, ac amser arweiniol o reoli fersiynau wedi'i uno â'r biblinell (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).
- **Darllenwch gyflymder a sefydlogrwydd fel un darlun.** Mae tîm cyflym â methiannau cynyddol, neu dîm sefydlog sy'n cludo bob chwarter, yn dweud rhywbeth wrthych na all yr un hanner ei ddangos ar ei ben ei hun.
- **Mesurwch wasanaeth neu gymhwysiad, nid person.** Yr uned ddadansoddi yw system gyflawni. Nid yw unigolion yn defnyddio ar eu pen eu hunain, ac mae eu graddio yn dinistrio'r data.
- **Cymharwch dîm â'i orffennol ei hun, nid â thîm arall.** Mae cyd-destun yn wahanol iawn rhwng gwasanaeth taliadau, platfform data a chymhwysiad symudol, ac mae'r ymchwil ei hun yn rhybuddio yn erbyn defnyddio'r metrigau fel tabl cynghrair.
- **Defnyddiwch ddosbarthiadau ar gyfer amseroedd.** Mae gan amser arweiniol ac amser adfer gynffonnau hir, felly adroddwch y canolrif a chanradd uchel (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).
- **Trinwch y metrigau fel symptomau.** Pan fydd rhif yn symud, chwiliwch am yr achos yn y galluoedd oddi tano, megis maint swp, awtomeiddio profion, arfer adolygu a phensaernïaeth, ac yna rhedwch arbrawf.
- **Ysgrifennwch y diffiniadau.** Mae methiant, defnyddio a "dechrau gwaith" yn farnau. Cofnodwch y dewis a'i gadw'n sefydlog fel bod y duedd yn golygu rhywbeth.

## Diffiniadau metrigau

Mae'r pum metrig isod yn dilyn arweiniad DORA ym mis Hydref 2026. Mae'r fformiwlâu'n nodi'r clociau a'r eithriadau y dylai eich tîm eu hysgrifennu. Lle mae'r ymchwil yn gadael ffin yn agored, mae'r tabl yn dangos diofyn synhwyrol ac mae'r argymhellion yn esbonio'r dewis.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Amser arweiniol newid | Yr amser i newid ymrwymedig gyrraedd cynhyrchu | Mae'r cloc yn dechrau ar gomisiwn cyntaf y newid (neu ei uno â'r brif gangen, os nodir yn y diffiniad) ac yn stopio pan fo'r defnyddio i gynhyrchu yn cwblhau'n llwyddiannus; adroddwch y canolrif a'r 85fed canradd o newidiadau a ddefnyddiwyd yn y cyfnod; eithrir newidiadau na ddefnyddiwyd byth a'u hadrodd ar wahân fel gwaith ar y gweill | Oriau neu ddiwrnodau | Rheoli fersiynau wedi'i uno â'r biblinell ddefnyddio | Rheoli defnyddio; rheoli rhyddhau; galluogi newid | Amser cylch; amser arweiniol i gynhyrchu | Wythnosol neu fesul rhyddhad, wedi'i adolygu'n fisol |
| Amlder defnyddio | Pa mor aml y mae tîm yn defnyddio i gynhyrchu | Cyfrif defnyddiadau cynhyrchu llwyddiannus y cymhwysiad yn y cyfnod / diwrnodau yn y cyfnod; eithrir defnyddiadau a fethodd neu a ddychwelwyd o'r cyfrif llwyddiant; eithrir defnyddiadau i amgylcheddau prawf | Defnyddiadau y diwrnod neu'r wythnos | Log digwyddiadau'r biblinell ddefnyddio | Rheoli defnyddio; rheoli rhyddhau | Cyflawni parhaus; rhyddhau ar ddiwedd pob cynyddiad | Wythnosol |
| Amser adfer defnyddio a fethodd | Pa mor hir y mae'n ei gymryd i adfer pan fo defnyddio yn achosi methiant cynhyrchu | Mae'r cloc yn dechrau pan ganfyddir neu adroddir y methiant (yr un rheol bob tro) ac yn stopio pan adferir y gwasanaeth i ddefnyddwyr; adroddwch y canolrif a'r 85fed canradd ar gyfer defnyddiadau a fethodd yn y cyfnod; eithrir digwyddiadau na achoswyd gan ddefnyddio | Munudau neu oriau | Cofnod digwyddiadau wedi'i uno â digwyddiadau defnyddio a rhybuddion monitro | Rheoli digwyddiadau; rheoli parhad gwasanaeth | Amser i adfer; gwaith adfer | Fesul methiant, wedi'i adolygu'n fisol |
| Cyfradd methu newid | Cyfran y defnyddiadau cynhyrchu sy'n achosi methiant sydd angen adferiad | Defnyddiadau a oedd angen atgyweiriad poeth, dychwelyd, clwt neu ymateb digwyddiad / pob defnyddio cynhyrchu yn y cyfnod; mae'r rheol sy'n cysylltu methiant â'i ddefnyddio wedi'i hysgrifennu a'i chymhwyso yn yr un ffordd bob tro | Canran | Digwyddiadau defnyddio wedi'u huno â digwyddiadau, dychweliadau ac atgyweiriadau poeth | Galluogi newid; rheoli digwyddiadau | Diffiniad o orffen; diffygion a ddihangodd | Misol |
| Cyfradd ailwaith defnyddio | Cyfran y defnyddiadau cynhyrchu a oedd heb eu cynllunio ac a wnaed i drwsio problem sy'n wynebu defnyddwyr | Defnyddiadau heb eu cynllunio a wnaed mewn ymateb i broblem cynhyrchu / pob defnyddio cynhyrchu yn y cyfnod; eithrir defnyddiadau wedi'u cynllunio sy'n digwydd cynnwys atgyweiriad; mae'r rheol ar gyfer "heb ei gynllunio" wedi'i hysgrifennu | Canran | Log piblinell wedi'i dagio yn ôl rheswm defnyddio, wedi'i gysylltu â chofnodion digwyddiadau neu ddiffygion | Galluogi newid; rheoli problemau | Gwaith heb ei gynllunio; atgyweiriad nam a ryddhawyd y tu allan i'r cynllun | Misol |

Dau nodyn ar y tabl. Yn gyntaf, mae cyfradd methu newid a chyfradd ailwaith defnyddio yn gorgyffwrdd ac nid ydynt yr un peth: mae methiant y mae'r tîm yn sylwi arno ac yn ei ddychwelyd heb unrhyw ddefnyddio newydd yn cyfrif yng nghyfradd methu newid ond nid yn y gyfradd ailwaith, tra nad yw atgyweiriad wedi'i gynllunio y mae'r tîm yn ei drefnu yn cyfrif yn yr un. Yn ail, mae'r ymchwil yn trin **defnyddio** fel yr uned ac yn cyfrif fesul cymhwysiad, felly mae gan blatfform â hanner cant o wasanaethau hanner cant o setiau o rifau, nid un.

## Argymhellion

### Dechreuwch â diffiniadau a chlociau

**1. Ysgrifennwch ddiffiniad un dudalen ar gyfer pob metrig cyn ei siartio.** Nodwch beth sy'n cyfrif fel defnyddio, pa amgylchedd yw cynhyrchu, ble mae'r cloc yn dechrau ar gyfer amser arweiniol, a sut y caiff methiant ei gysylltu â defnyddio. Rhowch y dudalen yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau). Bydd diffiniad sy'n byw ym mhen rhywun yn unig yn drifftio y tro cyntaf y bydd yr offeryn neu'r tîm yn newid.

**2. Dewiswch ddechrau amser arweiniol a glynwch ag ef.** Y dewisiadau mwyaf cyffredin yw'r comisiwn cyntaf ar y newid, yr uno i'r brif gangen, a chreu tocyn. Mae'r comisiwn cyntaf yn mesur y system gyflawni ac yn anwybyddu amser yr eisteddodd y gwaith mewn ôl-groniad. Mae dechrau'r tocyn yn mesur mwy o aros y cwsmer ond yn cymysgu blaenoriaethu i mewn (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif). Defnyddiwch un yn gyson a dywedwch pa un ym mhob siart.

**3. Priodolwch fethiannau gyda rheol a nodir.** Mae methiant yn perthyn i ddefnyddio pan fo, er enghraifft, digwyddiad yn agor o fewn ffenestr a nodir ar ôl y defnyddio a bod ei ddadansoddiad achos yn pwyntio at y newid hwnnw, neu pan fo dychwelyd neu atgyweiriad poeth wedi'i dagio iddo. Dewiswch reol y gall pobl ei chymhwyso heb ddadl, adolygwch sampl o achosion bob chwarter, a chadwch y rheol yr un fath yn ddigon hir i weld tuedd.

### Offerynnwch o'r biblinell

**4. Cymerwch ddigwyddiadau defnyddio o'r biblinell, nid o daenlen.** Mae system [CI/CD](https://en.wikipedia.org/wiki/CI/CD) sy'n cofnodi pob defnyddio cynhyrchu gyda stamp amser, fersiwn a chanlyniad yn rhoi amlder defnyddio a stop cloc amser arweiniol i chi heb unrhyw fewnbwn dynol. Mae cyfrifon a fewnbynnir â llaw yn hwyr ac yn anghyson, ac maent yn gwahodd y problemau ôl-ddyddio a ddisgrifir ym mhwnc 1.5, Ffynonellau data ac offeryniaeth. Mae prosiect ffynhonnell agored Four Keys gan dîm DORA yn un enghraifft weithredol o gasglu'r digwyddiadau hyn, er y bydd unrhyw biblinell gyfwerth o'ch eiddo eich hun yn gwneud y tro.

**5. Unwch y cofnod digwyddiadau â defnyddiadau.** Mae mesurau methiant ac adfer angen dwy ffynhonnell: y log defnyddio a'r offeryn digwyddiadau. Ychwanegwch faes at y cofnod digwyddiad ar gyfer "a achoswyd gan ddefnyddio" a'r dynodydd defnyddio, wedi'i lenwi yn ystod datrys a'i wirio yn yr adolygiad ôl-ddigwyddiad (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu). Heb yr uniad, mae cyfradd methu newid yn ddyfaliad.

**6. Tagiwch y rheswm dros bob defnyddio.** Mae cyfradd ailwaith angen gwahanu defnyddiadau wedi'u cynllunio oddi wrth atgyweiriadau heb eu cynllunio. Mae label syml ar y rhediad piblinell, megis "newid wedi'i gynllunio" neu "atgyweiriad ar gyfer problem cynhyrchu," yn ddigon. Cadwch y rhestr labeli yn fyr, fel nad oes rhaid i bobl feddwl dan bwysau.

### Adroddwch y rhifau'n onest

**7. Adroddwch ddosbarthiadau a chyfrifon, nid un cyfartaledd.** Dangoswch y canolrif a'r 85fed ganradd ar gyfer amser arweiniol ac amser adfer, gyda nifer yr arsylwadau y tu ôl i bob un. Mae gan wythnos â dau ddefnyddio ac un methiant gyfradd methu newid o 50 y cant sy'n golygu ychydig iawn, felly dangoswch y cyfrifon wrth ymyl y ganran a ffafriwch ffenestr hirach ar gyfer cyfraddau (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

**8. Dangoswch y grwpiau trwybwn ac ansefydlogrwydd ochr yn ochr.** Rhowch y tri metrig trwybwn a'r ddau fetrig ansefydlogrwydd ar un golwg, fesul gwasanaeth, gyda'r duedd dros o leiaf chwarter. Peidiwch byth â chyhoeddi amlder defnyddio heb y mesurau methiant wrth ei ymyl. Os yw arweinydd yn gofyn am un rhif, esboniwch nad oes un sgôr DORA, a chynigiwch yr olwg dau grŵp yn lle hynny.

**9. Cadwch gymariaethau o fewn hanes y tîm ei hun.** Mae tîm sy'n symud ei ganolrif amser arweiniol o naw diwrnod i bump wedi dysgu rhywbeth. Mae ei raddio yn erbyn tîm arall â phensaernïaeth, llwyth rheoleiddiol neu drên rhyddhau gwahanol yn profi ychydig, ac mae'n dysgu'r ddau dîm i amddiffyn eu rhifau. Pan fo'n rhaid i chi gyfanrhedeg ar gyfer llywodraethu, dangoswch yr ymlediad ar draws gwasanaethau a'r duedd gwella, nid tabl cynghrair (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

### Gwellwch y system y mae'r rhifau'n ei disgrifio

**10. Lleihewch faint swp yn gyntaf.** Mae newidiadau bach yn byrhau amser arweiniol, yn gwneud methiannau'n haws i'w diagnosio, ac yn gostwng cost dychwelyd. Mae technegau'n cynnwys [toglau nodwedd](https://en.wikipedia.org/wiki/Feature_toggle), gweithio ar sail cefnffordd, a hollti gwaith fel y gall pob cynyddiad gludo ar ei ben ei hun (gweler pwnc 2.7, Metrigau ceisiadau tynnu ac adolygu cod). Olrheiniwch ganolrif maint newidiadau wrth ymyl amser arweiniol fel y gallwch weld a yw'r swp yn crebachu mewn gwirionedd.

**11. Buddsoddwch mewn canfod cyflym a gwrthdroi cyflym.** Mae amser adfer yn disgyn pan all y tîm weld methiant o fewn munudau, a phan all [ddychwelyd](https://en.wikipedia.org/wiki/Rollback_(data_management)) neu ddiffodd newid heb adeiladu newydd. Mae [rhyddhad caneri](https://en.wikipedia.org/wiki/Canary_release), togl nodwedd a dychwelyd awtomataidd i gyd yn byrhau'r egwyl rhwng methiant ac adfer. Mesurwch yr amser o ddefnyddio i ganfod ar wahân, oherwydd bod canfod araf yn cuddio y tu mewn i rif amser adfer (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau).

**12. Defnyddiwch y rhifau i ddewis galluogrwydd i'w wella.** Dewiswch un metrig gwan, gofynnwch pam ei fod yn wan, a dewiswch arfer o restr galluoedd yr ymchwil sy'n mynd i'r afael â'r achos, megis awtomeiddio profion, pensaernïaeth wedi'i chysylltu'n llac, neu gymeradwyo newid ysgafn. Rhedwch y newid am chwarter ac edrychwch ar y duedd. Paru'r arbrawf â phwnc ôl-sylliad fel bod y tîm yn berchen ar y gwelliant (gweler pwnc 9.5, Metrigau gwelliant parhaus).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Amser arweiniol newid | Symud dechrau'r cloc yn hwyrach, megis dechrau wrth uno yn lle'r comisiwn cyntaf; uno'n gynnar i gangen hirdymor; eithrio newidiadau caled fel "nid cod"; cludo newidiadau dibwys drwy'r biblinell i lusgo'r canolrif i lawr | Canradd ac oedran gwaith ar y gweill; dechrau cloc sefydlog ysgrifenedig; sampl o'r 10 y cant arafaf o newidiadau bob chwarter; dosbarthiad maint newidiadau |
| Amlder defnyddio | Hollti un newid yn llawer o ddefnyddiadau dibwys; ailddefnyddio adeiladau heb eu newid; cyfrif defnyddiadau i lwyfannu neu newidiadau cyfluniad gwag | Maint newid fesul defnyddio; cyfran y defnyddiadau sy'n cynnwys newid sy'n weladwy i ddefnyddwyr; cyfradd methu newid a chyfradd ailwaith wrth ei ymyl |
| Amser adfer defnyddio a fethodd | Dechrau'r cloc yn hwyr neu gau digwyddiadau'n gynnar; ail-ddosbarthu methiant fel digwyddiad newydd ar ôl atgyweiriad rhannol; codi'r trothwy difrifoldeb ar gyfer "methiant" | Ailadrodd yr un digwyddiad o fewn ffenestr a nodir; dechrau cloc wedi'i gymryd o rybuddion monitro; hyd effaith a adroddir gan gwsmeriaid |
| Cyfradd methu newid | Peidio â chysylltu digwyddiadau â defnyddiadau; cyfrif dim ond methiannau sy'n achosi toriad llawn; ehangu'r ffenestr fel bod methiannau'n syrthio y tu allan iddi; trwsio ymlaen a'i alw'n newid newydd | Adolygu sampl o ddigwyddiadau yn erbyn y log defnyddio bob chwarter; olrhain cyfran y digwyddiadau â chyswllt defnyddio wedi'i gofnodi; cyfradd ailwaith defnyddio |
| Cyfradd ailwaith defnyddio | Labelu atgyweiriadau fel gwaith wedi'i gynllunio; bwndelu atgyweiriad i ryddhad wedi'i drefnu; osgoi defnyddiadau atgyweirio drwy oedi'r atgyweiriad | Cyfrifon diffygion a diffygion a ddihangodd o'r tracker; oedran diffygion cynhyrchu agored; yr archwiliad tag ar sampl o ddefnyddiadau |

Mae darlleniad iach yn dangos amser arweiniol ac amser adfer yn crebachu neu'n gyson ar lefel isel, amlder defnyddio yn sefydlog neu'n codi gyda newidiadau bach, a chyfraddau methiant ac ailwaith yn wastad neu'n disgyn, gyda chyfrifon yn ddigon mawr i ymddiried ynddynt. Mae darlleniadau amheus yn cynnwys naid sydyn yn amlder defnyddio heb newid yn y gwaith, cyfradd methiant sy'n disgyn i sero o fewn mis, ac amser adfer sy'n gostwng tra bo cwynion cwsmeriaid yn aros yr un fath. Mae pob un yn galw am olwg ar yr offeryn cyn dathlu.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Defnyddio'r pum metrig DORA fesul gwasanaeth | Ar sail ymchwil, yn cydbwyso cyflymder yn erbyn sefydlogrwydd, wedi'i gyfrifo o ddigwyddiadau gwrthrychol | Angen piblinell a chofnod digwyddiadau sy'n uno'n lân; yn dawel ar a oedd y gwaith yn werthfawr |
| Adrodd dim ond amlder defnyddio ac amser arweiniol | Hawdd eu casglu o'r biblinell | Gwobrwyo cyflymder yn unig a gwahodd yr union chwarae'r system y mae mesurau sefydlogrwydd yn ei ddal |
| Defnyddio diffiniadau lleol fesul tîm | Gweddu i bensaernïaeth ac arddull rhyddhau'r tîm | Ni ellir cymharu timau, ac mae crynodebau'n annibynadwy |
| Defnyddio un diffiniad ledled y sefydliad | Adrodd cyson; llywodraethu syml | Yn gweddu'n wael i rai systemau, megis prif fframiau â ffenestri swp neu ryddhadau rheoleiddiedig |
| Cymharu timau yn erbyn bandiau perfformiad cyhoeddedig | Rhoi ymdeimlad cyflym o safle i arweinwyr | Anwybyddu cyd-destun, ac mae'r ymchwil yn rhybuddio nad yw'r bandiau'n dargedau i bob tîm |
| Defnyddio'r metrigau ar gyfer hunan-wella'r tîm | Meithrin perchnogaeth; cefnogi data gonest | Cynnig llai o gysur i arweinwyr sydd eisiau un sgôr |

Y tensiwn canolog yw rhwng cymaroldeb a gonestrwydd. Po fwyaf y defnyddir rhif i farnu timau, y mwyaf y mae'r data'n plygu, a'r lleiaf y mae'n helpu'r tîm sy'n berchen arno. Defnyddiwch y metrigau i gefnogi gwelliant yn gyntaf, derbyniwch gymaroldeb amherffaith, a chadwch olygon lefel arweinydd i dueddiadau ac ymlediad. Lle mae adrodd rheoleiddiedig angen diffiniad safonol, dogfennwch ef a chadwch y golwg gwella lefel tîm ar wahân.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa rai o'n pum rhif DORA sy'n dod o ddigwyddiadau, a pha rai sy'n dod o atgof rhywun?**
Olrheiniwch bob metrig yn ôl at ei ffynhonnell. Nodwch ble mae person yn teipio dyddiad neu'n penderfynu a yw rhywbeth yn cyfrif fel methiant. Dylai'r hwylusydd helpu'r grŵp i raddio'r camau â llaw yn ôl faint y gallent ystumio'r rhif, a chytuno pa un i'w awtomeiddio yn gyntaf.

**2. Ble yn union mae ein cloc amser arweiniol yn dechrau ac yn stopio, ac a yw pawb yn cytuno?**
Gofynnwch i dri pherson ddisgrifio dechrau a stop y cloc ar gyfer y newid diwethaf a gludodd. Cymharwch yr atebion. Mae gwahaniaethau fel arfer yn ymddangos o amgylch y comisiwn cyntaf, yr uno, tocyn a'r cam cymeradwyo. Cytunwch ar un diffiniad a'i ysgrifennu, a thrafodwch pa amser aros y mae'r diffiniad a ddewiswyd yn ei guddio.

**3. Beth sy'n cyfrif fel defnyddio a fethodd i ni, a phwy sy'n penderfynu?**
Cerddwch drwy'r pum digwyddiad cynhyrchu diwethaf a gofynnwch a yw pob un yn perthyn i ddefnyddio. Mae anghytundebau'n dangos lle mae'r rheol yn aneglur. Trafodwch beth sy'n digwydd i fethiant a drwsir gyda newid cyfluniad, dychwelyd neu glwt cyflym, a phenderfynwch sut y caiff pob un ei gofnodi.

**4. Pe bai amlder defnyddio yn dyblu'r chwarter nesaf, beth fyddem ni'n ei wirio cyn ei alw'n newyddion da?**
Gwahoddwch y grŵp i enwi'r ffyrdd y gallai'r rhif godi heb gyflawni mwy o werth. Edrychwch ar faint newid, cyfran y defnyddiadau gyda newid sy'n weladwy i ddefnyddwyr, a'r cyfraddau methiant ac ailwaith. Dylai'r hwylusydd nodi pa wiriadau sydd eisoes ar y dangosfwrdd a pha rai y mae angen eu hychwanegu.

**5. Sut mae pobl y tu allan i'r tîm yn defnyddio'r rhifau hyn?**
Gofynnwch pwy sy'n eu gweld, ar ba ffurf, a beth y maent yn ei wneud â hwy. Gwrandewch am gymharu â thimau eraill, targedau a osodir o'r tu allan, a defnydd mewn adolygiadau unigol. Trafodwch beth y byddai angen i'r tîm ei weld yn newid yn y defnydd hwnnw cyn y gallai ymddiried yn ei ddata ei hun, a phwy sydd â'r statws i wneud y newid.

**6. Pa un galluogrwydd fyddai'n gwella ein rhif gwannaf fwyaf, a beth yw arbrawf bach i'w drio?**
Dewiswch y metrig gwannaf a siaradwch drwy ei achosion tebygol, megis sypiau mawr, adolygu araf, profion bregus, neu gam rhyddhau â llaw. Dewiswch un achos a dyluniwch arbrawf pedair i chwe wythnos gyda ffordd o weld yr effaith. Cytunwch ar ddyddiad i adolygu'r canlyniad a phwy fydd yn dod â'r data.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n berchen ar y galluoedd sy'n gyrru'r rhifau hyn: newidiadau bach, profion awtomataidd, piblinell gyflym, ac arferiad o adolygu gwaith ei gilydd. Dylent ddefnyddio'r metrigau fel drych ar gyfer eu harfer peirianneg eu hunain, gosod eu nodau gwella eu hunain, a gwrthsefyll pwysau i adrodd un rhif i fyny. Maent hefyd yn penderfynu'r diffiniadau, felly maent yn cario'r ddyletswydd i'w cadw'n onest (gweler pwnc 2.7, Metrigau ceisiadau tynnu ac adolygu cod).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau'n dal y cofnod digwyddiadau y mae mesurau methiant ac adfer yn dibynnu arno. Maent yn helpu'r tîm cyflawni drwy dagio digwyddiadau gyda'r defnyddio a'u hachosodd, drwy gyflenwi monitro sy'n canfod methiannau'n gyflym, ac drwy ymuno ag adolygiad pob defnyddio a fethodd. Dylent wylio nad yw cyflymder cyflawni yn prynu ansefydlogrwydd y maent yn ei amsugno fel llwyth ar alwad (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad), a gofyn am y buddsoddiadau dychwelyd a chanfod sy'n lleihau amser adfer.

### Arweinyddiaeth a llywodraethu

Dylai arweinwyr ofyn am dueddiadau ac ymlediad ar draws gwasanaethau, y ddau grŵp o fetrigau gyda'i gilydd, a'r arbrofion gwella y tu ôl iddynt. Dylent osgoi targedau sy'n cloi rhif i mewn, megis "defnyddio'n ddyddiol," ac osgoi defnyddio'r metrigau mewn adolygiadau unigol. Gall cyrff llywodraethu ddefnyddio'r rhifau fel tystiolaeth bod llwybr cymeradwyo newid ysgafnach yn ddiogel, neu fel rheswm i'w ailystyried, drwy ddangos a arhosodd sefydlogrwydd yn gyson wrth i'r broses newid (gweler pwnc 4.4, Methiant newid ac ailwaith).

### Cwsmeriaid a defnyddwyr

Anaml y mae cwsmeriaid yn poeni am gyfrifon defnyddio. Maent yn poeni pa mor gyflym y mae atgyweiriad neu nodwedd yn eu cyrraedd, pa mor anaml y mae rhyddhad yn torri rhywbeth y maent yn dibynnu arno, a pha mor gyflym y mae'r gwasanaeth yn dychwelyd pan fydd yn gwneud hynny. Defnyddiwch fetrigau DORA fel tystiolaeth fewnol bod y canlyniadau hyn yn debygol, a'u hategu â mesurau sy'n wynebu cwsmeriaid megis argaeledd a bodlonrwydd (gweler pwnc 5.3, Metrigau argaeledd, a phwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg gwasanaeth desg dalu sy'n eiddo i un tîm cynnyrch, a gefnogir gan dîm platfform a'r ddesg gwasanaeth. Mae'r holl rifau isod yn enghreifftiol.

Mae'r tîm wedi bod yn defnyddio i gynhyrchu tua dwywaith yr wythnos, gydag amser arweiniol (comisiwn cyntaf i gynhyrchu) o ganolrif 11 diwrnod ac 85fed canradd o 26 diwrnod. Dros y chwarter blaenorol, dilynwyd 6 o 24 defnyddio (25 y cant, enghreifftiol) gan ddychwelyd neu ddigwyddiad. Canolrif yr amser adfer ar gyfer y methiannau hynny oedd 3 awr. Mae'r bwrdd cymeradwyo newid yn cyfarfod yn wythnosol ac yn adolygu pob newid i'r gwasanaeth desg dalu.

Mae'r tîm yn cynnig cynllun. Bydd yn hollti newidiadau mawr, yn ychwanegu gwiriadau awtomataidd yn y biblinell, yn rhoi ymddygiad newydd y tu ôl i doglau nodwedd, ac yn gofyn i'r bwrdd rag-awdurdodi newidiadau risg isel sy'n pasio'r gwiriadau fel newidiadau safonol. Mae'r rheolwr newid yn wyliadwrus, felly mae'r tîm yn cytuno i adrodd y pum metrig yn fisol a stopio'r arbrawf os yw'r gyfradd methiant yn codi am ddau fis yn olynol.

Ar ôl chwarter, y rhifau (enghreifftiol) yw 19 defnyddio y mis, canolrif amser arweiniol o 3 diwrnod gydag 85fed canradd o 8 diwrnod, cyfradd methu newid o 8 y cant, canolrif amser adfer o 40 munud, a chyfradd ailwaith o 5 y cant. Mae'r tîm yn falch, ac mae rheolwr rhanbarthol yn gofyn i gymharu amlder defnyddio'r tîm desg dalu â thimau cynnyrch eraill a gosod targed cyffredin.

Mae arweinydd y tîm yn dod â dadansoddiad ailwaith a methiant i'r adolygiad ac yn sylwi ar risg chwarae'r system. Mae amlder defnyddio wedi'i helpu gan nifer o ddefnyddiadau cyfluniad bach y mae'r biblinell yn eu cyfrif, ac mae canolrif maint y newid yn crebachu'n gyflymach na'r gwaith gwirioneddol. Yn waeth, trwsiwyd dau ddigwyddiad y mis diwethaf gan newid cyfluniad a logiwyd gan y biblinell fel defnyddio arferol wedi'i dagio "wedi'i gynllunio," felly tanddatganwyd y gyfradd ailwaith. Roedd y gyfradd methu newid yn edrych yn dda yn rhannol oherwydd nad oedd y ddau ddigwyddiad hynny wedi'u cysylltu â'u defnyddio gwreiddiol.

Mae gan y penderfyniad, a gofnodir yn y log penderfyniadau, bedair rhan. Cyfrifir defnyddiadau cyfluniad yn unig ar wahân a'u dangos wrth ymyl y prif rif. Archwilir y tag rheswm defnyddio'n fisol ar sampl o 10 defnyddio. Mae'r offeryn digwyddiadau bellach yn mynnu'r dynodydd defnyddio pan fo'r achos yn newid. Ac mae'r tîm yn gwrthod y targed amlder defnyddio cyffredin, gan gynnig yn lle hynny olwg a rennir sy'n dangos tuedd pob gwasanaeth a'i gyfradd methiant. Mae'r rheolwr newid yn cytuno i gadw'r rhag-awdurdodi ar gyfer newidiadau safonol, gydag adolygiad ar ddiwedd y chwarter nesaf.

## Y golwg fesul sector

**Busnes newydd.** Mae tîm bach yn aml yn defnyddio sawl gwaith y dydd ac mae ganddo gofnodion digwyddiadau tenau, felly mae amlder defnyddio ac amser arweiniol yn hawdd ond mae data methiant yn anghyflawn. Dechreuwch drwy dagio pob dychwelyd ac atgyweiriad poeth yn y biblinell, a chadw log digwyddiadau syml gyda'r dynodydd defnyddio. Peidiwch â gadael i amlder uchel eich argyhoeddi bod sefydlogrwydd yn iawn heb wirio'r gyfradd methiant.

**Busnes bach.** Efallai mai dim ond yn fisol y bydd platfform a gynhelir neu ddatblygwr allanol yn defnyddio, gydag ychydig o offer. Cyfrifwch yr hyn a allwch â llaw am ychydig fisoedd, gofynnwch i'r cyflenwr am ddyddiadau defnyddio a digwyddiadau yn ysgrifenedig, a chanolbwyntiwch ar amser arweiniol a chyfradd methiant. Defnyddiwch y rhifau i benderfynu a fyddai newidiadau llai a gyflwynir yn barhaus yn lleihau risg, nid i fynd ar ôl band.

**Menter fawr.** Mae llawer o dimau, sawl arddull rhyddhau, a chymysgedd o systemau modern ac etifeddol yn gwneud diffiniadau cyson yn anodd. Cytunwch ar ddiffiniad lleiafswm cyffredin ar gyfer pob metrig, cyhoeddwch ef, a chaniatewch i dîm ychwanegu rhai lleol llymach gyda rheswm a nodir. Cyfanredwch drwy ddangos yr ymlediad a'r duedd fesul gwasanaeth yn hytrach na chyfartaledd, a chadwch fanylion lefel tîm yn weladwy i'r tîm sy'n berchen arnynt a'i grwpiau cefnogi yn unig.

**Llywodraeth a'r sector cyhoeddus.** Mae ffenestri rhyddhau, rheolau archwilio a chontractau caffael yn llunio'r hyn sy'n bosibl, ac mae rhai systemau'n cael eu rhedeg gan gyflenwyr. Cynhwyswch hawliau data cyflawni a digwyddiadau mewn contractau fel y gellir cyfrifo'r metrigau. Defnyddiwch y rhifau fel tystiolaeth bod rhaglen foderneiddio yn byrhau amseroedd arweiniol heb godi cyfraddau methiant, ac adroddwch yr holl fetrigau gyda'i gilydd fel nad yw'r canlyniadau'n cael eu dewis (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw byrhau'r amser rhwng syniad a'i ddefnydd wrth gadw cynhyrchu'n sefydlog. Mae gan gost y rhaglen dair rhan: offeryniaeth (digwyddiadau piblinell, tagiau defnyddio, a'r uniad digwyddiadau), y drefn adolygu (golwg fisol ar y tueddiadau a sampl chwarterol o achosion methiant ac ailwaith), a'r gwaith gwella y mae'r rhifau'n pwyntio ato, megis awtomeiddio profion neu biblinell gyflymach. Mae'r ddwy gyntaf yn gymedrol. Y drydedd yw lle mae'r gwir gost, ac fe'i gwariir ar alluogrwydd peirianneg, nid ar fesur.

Daw'r elw o benderfyniadau y mae'r rhifau'n eu gwneud yn haws. Gall tîm ddangos i fwrdd newid fod newidiadau bach yn ddiogel, ac felly ymddeol cam cymeradwyo. Gall grŵp platfform weld pa wasanaethau sydd â phiblinellau araf neu ddychwelyd gwael a gosod ei fuddsoddiad yn unol â hynny. Gall tîm gweithrediadau ddadlau o ddata dros offeryn canfod gwell. Disgrifiwch yr elw drwy batrymau y gallwch eu harsylwi drosoch eich hun, megis yr amser o gomisiwn i gynhyrchu, cyfran y rhyddhadau sydd angen atgyweiriad, a'r llwyth ar alwad fesul rhyddhad, cyn ac ar ôl newid. Osgowch ddyfynnu ffigurau meincnod o sefydliadau eraill fel elw disgwyliedig, gan y bydd eich cyd-destun yn wahanol. Pobl sy'n dominyddu cyfanswm cost perchnogaeth, felly cadwch y set metrigau yn fach ac awtomeiddiwch ei chasglu (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Trin y metrigau fel cerdyn sgorio perfformiad ar gyfer unigolion.** Mae'n torri sail yr ymchwil ac yn llygru'r data. Adroddwch ar lefel gwasanaeth a thîm yn unig.
- **Gosod targedau megis "defnyddio'n ddyddiol" neu "amser arweiniol o dan un diwrnod."** Mae'r targed yn disodli'r nod. Gosodwch gyfeiriad gwelliant ac arbrawf, a chadwch y rhif fel signal.
- **Graddio timau yn erbyn ei gilydd neu yn erbyn bandiau cyhoeddedig.** Mae cyd-destun yn wahanol ac mae chwarae'r system yn dilyn. Cymharwch dîm â'i duedd ei hun, a defnyddiwch fandiau fel cyfeiriadedd rhydd yn unig.
- **Adrodd cyflymder heb sefydlogrwydd.** Y pâr yw'r pwynt. Dangoswch y grwpiau trwybwn ac ansefydlogrwydd gyda'i gilydd bob amser.
- **Gadael i ddiffiniadau drifftio.** Mae methiant, defnyddio a dechrau amser arweiniol yn newid yn dawel gyda'r offeryn. Logiwch bob newid i ddiffiniad gyda'i reswm, a'i nodi ar y siart.
- **Cyfrif defnyddiadau o unrhyw beth.** Mae gwthiadau cyfluniad, rhyddhadau amgylchedd prawf ac ailddefnyddiadau o'r un adeiladu yn chwyddo'r cyfrif. Diffiniwch ddefnyddio cynhyrchu, a dangoswch fathau eraill ar wahân.
- **Anwybyddu'r hyn a gludir.** Gall rhifau cryf guddio gwaith nad yw'n bwysig. Darllenwch hwy wrth ymyl mesurau llif a chanlyniad (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).
- **Mynd ar ôl y metrig yn lle'r galluogrwydd.** Mae amser arweiniol yn disgyn yn fwyaf dibynadwy pan fo sypiau'n crebachu a phrofion yn mynd yn gyflymach. Gwellwch yr arfer a gadewch i'r rhif ddilyn.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a chlociau | Mae pob person yn diffinio defnyddio a methiant yn wahanol | Mae ychydig o dimau'n dogfennu eu diffiniadau | Un diffiniad ysgrifenedig fesul metrig, gyda chlociau ac eithriadau, yn y gofrestr metrigau | Newidiadau diffiniad wedi'u logio a'u nodi ar siartiau; samplau wedi'u gwirio bob chwarter | Diffiniadau wedi'u diwygio ar y cyd â chyflenwyr a llywodraethu pan fyddant yn peidio â hysbysu penderfyniadau |
| Cipio data | Cyfrifon wedi'u cydosod â llaw o docynnau | Data piblinell ar gyfer rhai gwasanaethau; digwyddiadau wedi'u cysylltu â llaw | Defnyddiadau, rhesymau a chysylltiadau digwyddiadau wedi'u cipio'n awtomatig ar gyfer y rhan fwyaf o wasanaethau | Ansawdd data (cyfradd cyswllt, archwiliad tag) wedi'i fesur a'i dueddu | Digwyddiadau wedi'u rhannu ar draws timau a chyflenwyr drwy ryngwynebau y cytunwyd arnynt |
| Defnydd o'r rhifau | Wedi'u hadrodd i fyny fel un sgôr | Mae timau'n edrych ar eu siartiau eu hunain yn achlysurol | Grwpiau trwybwn ac ansefydlogrwydd wedi'u hadolygu gyda'i gilydd yn fisol gan y tîm sy'n berchen arnynt | Tueddiadau'n bwydo arbrofion gwella wedi'u hariannu gyda rheilen warchod | Ymlediad a thueddiadau yn hysbysu buddsoddiad platfform a pholisi newid ar draws y sefydliad |
| Rheiliau gwarchod yn erbyn chwarae'r system | Dim | Ymwybyddiaeth anffurfiol | Rheiliau gwarchod pâr wedi'u rhestru ar gyfer pob metrig | Rheiliau gwarchod a samplau wedi'u hadolygu, gydag achosion chwarae'r system wedi'u cofnodi | Rheiliau gwarchod wedi'u tiwnio'n barhaus wrth i dimau ac offer newid |

## Rhestr wirio

- [ ] Mae'r pum metrig wedi'u diffinio'n ysgrifenedig, gyda chlociau, eithriadau, a dyddiad ac argraffiad arweiniad DORA a ddilynir.
- [ ] Cofnodir defnyddiadau cynhyrchu gan y biblinell gyda stamp amser, fersiwn a chanlyniad.
- [ ] Mae dechrau amser arweiniol (comisiwn cyntaf, uno, neu arall) wedi'i nodi a'i gymhwyso'n gyson.
- [ ] Mae gan ddigwyddiadau faes ar gyfer y defnyddio a'u hachosodd, wedi'i lenwi yn ystod datrys.
- [ ] Mae gan bob defnyddio dag rheswm, ac archwilir sampl yn fisol.
- [ ] Adroddir amseroedd fel y canolrif a chanradd uchel, gyda chyfrifon.
- [ ] Dangosir metrigau trwybwn ac ansefydlogrwydd gyda'i gilydd ar gyfer pob gwasanaeth.
- [ ] Olrheinir maint newid wrth ymyl amlder defnyddio ac amser arweiniol.
- [ ] Ni ddefnyddir y rhifau mewn adolygiadau unigol nac i raddio timau.
- [ ] Mae perchennog a enwir yn adolygu'r metrigau'n fisol ac yn logio unrhyw newid i ddiffiniad.
- [ ] Mae un arbrawf gwella, wedi'i glymu wrth y metrig gwannaf, yn rhedeg gyda dyddiad adolygu.

## Anogwyr AI

**Ysgrifennwch set diffiniadau un dudalen ar gyfer y pum metrig.**

```text
Rwy'n diffinio metrigau cyflawni meddalwedd DORA ar gyfer [enw'r gwasanaeth neu'r
cymhwysiad]. Ein hoffer yw [gwesteiwr rheoli fersiynau, system CI/CD, offeryn
digwyddiadau, offeryn ITSM]. Ein harddull rhyddhau yw [parhaus, wythnosol,
misol, neu arall]. Ar gyfer amser arweiniol newid, amlder defnyddio, amser adfer
defnyddio a fethodd, cyfradd methu newid a chyfradd ailwaith defnyddio, drafftiwch
ddiffiniad gyda ble mae'r cloc yn dechrau ac yn stopio, beth a gyfrifir ac a
eithrir, y ffynhonnell data, ac un risg o amwysedd. Peidiwch â dyfeisio gwerthoedd
meincnod na honni bod ein harfer yn cyfateb i unrhyw fand perfformiad cyhoeddedig.
Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb i orffen y diffiniadau.
```

**Gwiriwch set metrigau am risgiau chwarae'r system.**

```text
Dyma sut yr ydym ar hyn o bryd yn cyfrifo ein metrigau cyflawni: [disgrifiad o bob
metrig, ei ffynhonnell data, a sut yr adroddir]. Y gynulleidfa yw [tîm,
arweinyddiaeth, neu gorff llywodraethu]. Ar gyfer pob metrig, rhestrwch ffyrdd
credadwy y gellid chwyddo, cuddio neu ystumio'r rhif heb welliant go iawn, ac
awgrymwch fetrig neu arfer rheilen warchod pâr a fyddai'n ei ddal. Peidiwch â
dyfeisio ystadegau. Rhestrwch eich rhagdybiaethau ac unrhyw wybodaeth y byddai
ei hangen arnoch i fod yn fwy manwl gywir.
```

**Dadansoddwch allforio data o ddefnyddiadau a digwyddiadau.**

```text
Byddaf yn gludo allforio bach o [nifer] o ddefnyddiadau cynhyrchu a [nifer] o
ddigwyddiadau gyda'r meysydd hyn: [rhestr meysydd, er enghraifft id defnyddio,
stamp amser, canlyniad, tag rheswm, id digwyddiad, amser agor, amser datrys,
cyswllt defnyddio]. Cyfrifwch ganolrif a 85fed canradd amser adfer, y gyfradd methu
newid, a'r gyfradd ailwaith, gan ddangos y cyfrifon y tu ôl i bob un. Nodwch
gofnodion gyda chysylltiadau coll neu stampiau amser amheus. Peidiwch ag
allosod y tu hwnt i'r data na chymharu'r canlyniad â meincnodau allanol.
Rhestrwch eich rhagdybiaethau a'r materion ansawdd data sy'n cyfyngu'r casgliadau.
```

**Cynlluniwch arbrawf gwella.**

```text
Ein metrig cyflawni gwannaf yw [enw'r metrig], ar hyn o bryd [gwerth fel yr adroddwyd,
gydag ystod dyddiadau a chyfrifon]. Achosion tebygol y mae'r tîm wedi'u trafod yw
[rhestr]. Ein cyfyngiadau yw [cyfyngiadau, er enghraifft rhyddhadau rheoleiddiedig,
amgylchedd prawf a rennir]. Cynigiwch dri arbrawf bach o bedair i chwe wythnos, pob
un â damcaniaeth, ffordd o arsylwi'r effaith, metrig rheilen warchod, a risg.
Peidiwch â dyfeisio ffigurau gwelliant disgwyliedig. Rhestrwch eich rhagdybiaethau
a'r hyn y dylem ei wirio cyn dechrau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau newid, rhyddhau a digwyddiadau cysylltiedig a'r rheilen warchod a ddylai eistedd wrth ymyl pob metrig DORA.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod fersiwn ddiwygiedig o'r pwnc hwn yn cadw ei glociau, ei ffyrdd o chwarae'r system a'i chroesgyfeiriadau yn gyson.

## Pwyntiau allweddol

- Pum mesur cyflawni meddalwedd yw'r metrigau DORA, tri o drwybwn a dau o ansefydlogrwydd, ac maent yn fwyaf defnyddiol pan ddarllenir hwy gyda'i gilydd ar gyfer un gwasanaeth.
- Cyfrifwch hwy o ddigwyddiadau piblinell a digwyddiadau gyda diffiniadau ysgrifenedig, oherwydd bod methiant a dechrau amser arweiniol yn farnau.
- Defnyddiwch hwy i ddysgu am system gyflawni a chymharu tîm â'i hanes ei hun, byth i raddio pobl na thimau.
- Adroddwch ganolrifau, canraddau uchel a chyfrifon, a pharwch bob metrig â rheilen warchod sy'n dal ei chwarae.
- Gwellwch y galluoedd sylfaenol, megis sypiau bach, canfod cyflym a dychwelyd hawdd, a gadewch i'r rhifau ddilyn.
- Nodwch argraffiad a dyddiad yr arweiniad a ddilynwch, gan fod y diffiniadau wedi'u mireinio dros amser.

## Cyfeiriadau a darllen pellach

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
3. DORA, *DORA research program*, Google Cloud, https://dora.dev/research/
4. DORA, *Four Keys project*, https://github.com/dora-team/fourkeys
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
6. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [DevOps Research and Assessment](https://en.wikipedia.org/wiki/DevOps_Research_and_Assessment).
9. Wikipedia, [Accelerate (book)](https://en.wikipedia.org/wiki/Accelerate_(book)).
10. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
11. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [CI/CD](https://en.wikipedia.org/wiki/CI/CD).
14. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
15. Wikipedia, [Rollback (data management)](https://en.wikipedia.org/wiki/Rollback_(data_management)).
16. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
