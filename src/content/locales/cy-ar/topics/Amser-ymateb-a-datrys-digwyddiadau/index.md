# Amser ymateb a datrys digwyddiadau

**Mae mesurau amser ar gyfer digwyddiadau yn disgrifio pa mor hir y mae defnyddwyr yn aros ym mhob cam, felly adroddwch hwy fel dosbarthiadau gyda'r clociau wedi'u hysgrifennu, byth fel un cymedr, a pharwch bob rhif cyflymder â mesur a ddaliodd yr atgyweiriad.**

## Crynodeb a chymhelliant

Digwyddiad, mewn rheoli gwasanaethau TG (ITSM), yw tarfu anghynlluniedig ar wasanaeth neu ostyngiad yn ei ansawdd. [Rheoli digwyddiadau](https://en.wikipedia.org/wiki/Incident_management) yw'r arfer sy'n adfer gwasanaeth arferol mor gyflym ag y bo'n ddiogel. Yn ITIL 4, gelwir yr arfer yn rheoli digwyddiadau ac mae'n eistedd ymhlith arferion rheoli gwasanaethau fframwaith [ITIL](https://en.wikipedia.org/wiki/ITIL). Ei gyfatebwyr ystwyth yw arferiad y tîm o drin gwaith heb ei gynllunio fel llif gwaith o'r radd flaenaf, a'r arferion ar alwad ac adolygu di-fai sy'n dod o [beirianneg dibynadwyedd safleoedd](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), y ddisgyblaeth o redeg gwasanaethau gyda dulliau peirianneg meddalwedd.

Amser yw'r ffordd fwyaf naturiol o ddisgrifio digwyddiad, a'r un a gamddefnyddir amlaf. Mae un digwyddiad yn mynd drwy sawl cam. Mae rhywbeth yn torri, mae monitor neu ddefnyddiwr yn sylwi, mae person yn cydnabod y rhybudd, mae rhywun yn dechrau gwaith, caiff y gwasanaeth ei adfer i ddefnyddwyr, a chaeir y tocyn unwaith y trinnir yr achos neu y gohirir ef. Mae pob bwlch rhwng dau o'r digwyddiadau hyn yn fesur ar wahân gyda pherchennog ar wahân, achos oedi ar wahân, ac ateb ar wahân. Mae galw'r cyfan yn "amser datrys" yn cuddio ble mae'r oedi'n byw.

Mae'r pwnc hwn yn ymdrin â'r mesurau amser a aeth heibio sy'n dilyn digwyddiad o'r dechrau i'r diwedd: **amser i ganfod**, **amser i gydnabod**, **amser i'r ymateb cyntaf**, **amser i adfer**, ac **amser i ddatrys**. Mae hefyd yn ymdrin ag oedran digwyddiadau agored, nifer y troeon y mae digwyddiad yn newid dwylo, a phroblemau ystadegol y crynodeb mwyaf adnabyddus, amser cymedrig i adfer neu ddatrys (MTTR). Ymdrinnir â chyfrifon, categorïau a blaenoriaeth mewn man arall (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau). Mae gan ddigwyddiadau mawr ac anarferol eu mesurau eu hunain (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

### Termau a ddefnyddir yn y pwnc hwn

- **Amser i ganfod (TTD).** Yr amser a aeth heibio o pryd y dechreuodd nam effeithio ar ddefnyddwyr nes i'r sefydliad wybod amdano, drwy fonitro neu adroddiad defnyddiwr.
- **Amser i gydnabod (TTA).** Yr amser a aeth heibio o godi'r rhybudd neu'r tocyn nes bod person neu dîm a enwir yn derbyn perchnogaeth.
- **Amser i'r ymateb cyntaf.** Yr amser a aeth heibio o logio'r digwyddiad nes y weithred neu'r neges ystyrlon gyntaf i'r defnyddiwr yr effeithiwyd arno. Nid yw ateb awtomatig yn cyfrif.
- **Amser i adfer.** Yr amser a aeth heibio o ddechrau effaith ar ddefnyddwyr nes y gall defnyddwyr ddefnyddio'r gwasanaeth eto, hyd yn oed os mai dim ond ei osgoi y mae'r achos sylfaenol.
- **Amser i ddatrys.** Yr amser a aeth heibio o logio'r digwyddiad nes y caeir ef am fod y gwasanaeth wedi'i adfer a bod y defnyddiwr wedi cadarnhau neu wedi cael cyfle teg i gadarnhau.
- **Amser cymedrig i adfer neu ddatrys (MTTR).** Cymedr rhifyddol un o'r hydoedd hynny dros set o ddigwyddiadau. Darllenir y llythyren R fel atgyweirio, adferiad, adfer, datrys neu ymateb yn dibynnu ar bwy sy'n siarad, sef y broblem gyntaf gyda'r talfyriad. Mae'r [erthygl Wikipedia ar amser cymedrig i atgyweirio](https://en.wikipedia.org/wiki/Mean_time_to_repair) yn rhestru'r amrywiadau.
- **Cytundeb lefel gwasanaeth (SLA).** Ymrwymiad rhwng darparwr a chwsmer am lefel y gwasanaeth yw [cytundeb lefel gwasanaeth](https://en.wikipedia.org/wiki/Service-level_agreement), yn aml yn cynnwys amseroedd ymateb a datrys targed yn ôl blaenoriaeth.

### Pam mae'r cymedr yn grynodeb gwael

Nid yw hyd digwyddiadau yn gymesur. Mae'r rhan fwyaf o ddigwyddiadau'n fyr, mae ychydig yn hir iawn, ac mae'r rhai hir yn dominyddu unrhyw gyfartaledd. Yn aml disgrifir hyd o'r math hwn yn dda gan siâp gwyrgam i'r dde megis y [dosbarthiad log-normal](https://en.wikipedia.org/wiki/Log-normal_distribution). Mewn data gwyrgam gall y cymedr eistedd ymhell uwchlaw'r hyn y mae digwyddiad nodweddiadol yn edrych fel, a gall un toriad hir ei symud yn fwy na mis o welliannau.

Mae tîm SRE Google wedi cyhoeddi dadansoddiad o'r broblem hon. Mae'n dadlau, ar gyfer y setiau data digwyddiadau a astudiodd, fod yr ymlediad mewn hyd digwyddiadau yn ddigon eang i MTTR guddio gwelliannau go iawn neu ddangos newidiadau sy'n sŵn, ac mae'n argymell edrych ar ddosbarthiadau yn lle hynny (Davidovič, 2021, a restrir yn y cyfeiriadau). Mae'r rhesymu'n seiliedig ar ystadegau adnabyddus, felly gallwch ei wirio ar eich data eich hun heb ymddiried yng nghasgliad neb: plotiwch hyd eich digwyddiadau, cyfrifwch y cymedr a'r [canolrif](https://en.wikipedia.org/wiki/Median), a gweld pa mor bell ar wahân ydynt (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

Y dewis arall yw [canraddau](https://en.wikipedia.org/wiki/Percentile). Mae'r canolrif yn dweud am ba hyd yr arhosodd defnyddiwr nodweddiadol. Mae'r 85fed neu'r 95fed ganradd yn dweud am ba hyd yr arhosodd y rhai anlwcus. Mae cwsmeriaid yn cofio'r aros hir, nid y cyfartaledd, felly mae ymrwymiad canradd megis "naw o bob deg digwyddiad o'r flaenoriaeth hon wedi'u hadfer o fewn amser a nodir" yn cyfateb yn llawer gwell i'w profiad na chymedr.

### Sut mae'r golygon ITIL ac ystwyth yn wahanol

Mae'r olwg ITIL yn tueddu i ddechrau o flaenoriaeth a tharged. Mae effaith a brys yn gosod blaenoriaeth, mae'r flaenoriaeth yn gosod amseroedd ymateb a datrys targed, a gall cytundeb lefel gwasanaeth gysylltu canlyniadau â'u methu. Mae hyn yn drefnus ac yn hawdd ei archwilio, ac yn dueddol i'r chwarae'r system y mae targedau'n ei wahodd (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae'r olwg ystwyth a SRE yn dechrau o effaith ar ddefnyddwyr ac o lif. Mae'n gofyn pa mor gyflym y mae'r tîm yn cyfyngu niwed, faint o amser a aeth heibio digwyddiad oedd gwaith gweithredol a faint oedd aros, a beth ddysgodd y tîm. Mae'n ffafrio mesurau effaith (defnyddwyr yr effeithiwyd arnynt, munudau o wasanaeth diraddedig) i fesurau statws tocyn, ac yn trin cloc y tocyn fel dirprwy cyfleus ond amherffaith. Mae'r ddwy olwg yn gydnaws. Defnyddiwch strwythur blaenoriaeth ITIL i benderfynu beth i'w fesur ac ar gyfer pwy, a defnyddiwch feddwl llif ac effaith i benderfynu a yw'r rhif yn golygu unrhyw beth.

## Egwyddorion allweddol

- **Enwch y cam, nid "datrys".** Mae canfod, cydnabod, ymateb, adfer a datrys yn gwestiynau gwahanol gyda pherchnogion gwahanol. Adroddwch bob un o dan ei enw ei hun.
- **Ysgrifennwch y ddau gloc.** Mae pob mesur amser yn nodi pa ddigwyddiad sy'n ei ddechrau, pa un sy'n ei stopio, a pha gyflyrau sy'n ei oedi. Mae'r rhan fwyaf o chwarae'r system yn byw yn y ffiniau hyn.
- **Adroddwch ddosbarthiadau.** Dangoswch y canolrif, canradd uchel, ac oedran y digwyddiad agored hynaf. Osgowch gymedr ar ei ben ei hun, y mae data gwyrgam yn ei wneud yn annibynadwy.
- **Mesurwch adfer ar wahân i gau.** Mae defnyddwyr yn poeni pryd y daeth y gwasanaeth yn ôl. Gall y tocyn gau yn ddiweddarach, ar ôl i'r achos gael ei drin.
- **Paru cyflymder â gwydnwch.** Nid yw adfer cyflym y mae'r un digwyddiad yn ei ddadwneud drannoeth yn welliant. Dangoswch gyfraddau ailadrodd ac ailagor wrth ymyl pob mesur amser.
- **Disgrifiwch dimau, gwasanaethau a systemau.** Peidiwch byth â graddio asiantau na pheirianwyr unigol yn ôl amser ymateb neu ddatrys.
- **Segmentwch cyn cymharu.** Cymharwch debyg â thebyg, yn ôl blaenoriaeth ac yn ôl gwasanaeth, oherwydd bod rhif cymysg yn cymysgu ailosod cyfrineiriau â methiannau cronfa ddata.

## Diffiniadau metrigau

Mae pob rhes yn nodi ei chlociau. Mae amser calendr ac amser busnes yn wahanol: dywedwch pa un a ddefnyddiwch. Lle mae mesur yn defnyddio canraddau, mae'r tabl yn rhoi'r 50fed a'r 95fed, a gall timau ychwanegu'r 85fed.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Amser i ganfod | Pa mor hir yr effeithiodd nam ar ddefnyddwyr cyn i'r sefydliad wybod | Mae'r cloc yn dechrau ar adeg gyntaf effaith ar ddefnyddwyr (a gymerir o ddata monitro neu'r dechrau effaith cadarnhaol a gofnodwyd yn yr adolygiad); yn stopio ar y rhybudd cyntaf neu adroddiad defnyddiwr. Adroddir fel canolrif a 95fed canradd fesul gwasanaeth. Cyfrifir ac adroddir digwyddiadau heb ddechrau hysbys ar wahân, nid eu gollwng | munudau | Platfform monitro a rhybuddio; cofnod digwyddiad gyda maes dechrau effaith | Rheoli digwyddiadau; monitro a rheoli hysbysiadau | Gwaith arsylwadwyedd ac ansawdd rhybuddion (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion) | Misol |
| Amser i gydnabod | Pa mor hir y mae rhybudd neu docyn a godwyd yn aros cyn bod person yn berchen arno | Mae'r cloc yn dechrau pan fo'r rhybudd yn tanio neu pan logir y tocyn; yn stopio pan fo person neu dîm a enwir yn ei dderbyn. Nid yw awto-neilltuo yn stopio'r cloc. Adroddir fel canolrif a 95fed canradd yn ôl blaenoriaeth | munudau | Offeryn galw; hanes neilltuo offeryn ITSM | Rheoli digwyddiadau; desg gwasanaeth | Ymateb ar alwad mewn rota SRE | Misol |
| Amser i'r ymateb cyntaf | Pa mor hir y mae'r defnyddiwr yn aros am ateb dynol, defnyddiol cyntaf | Mae'r cloc yn dechrau pan logir y digwyddiad; yn stopio ar y neges neu'r weithred ddynol gyntaf sy'n mynd i'r afael â'r adroddiad. Eithrir awto-gydnabyddiaethau a derbynebau templed. Nodir cloc oriau busnes | munudau neu oriau busnes | Log cyfathrebu offeryn ITSM | Desg gwasanaeth; rheoli digwyddiadau | Adborth amserol i'r defnyddiwr, fel mewn cytundeb gweithio | Wythnosol |
| Amser i adfer | Pa mor hir yr oedd defnyddwyr heb wasanaeth gweithio | Mae'r cloc yn dechrau ar ddechrau effaith ar ddefnyddwyr; yn stopio pan all defnyddwyr ddefnyddio'r gwasanaeth eto, gan gynnwys drwy osgoi neu ddychwelyd. Nid yw achos a drwsir yn ddiweddarach yn ei ymestyn. Adroddir fel canolrif a 95fed canradd yn ôl blaenoriaeth a gwasanaeth | munudau neu oriau | Cofnod digwyddiad gyda stampiau amser dechrau effaith ac adfer; monitro | Rheoli digwyddiadau | Amser cymedrig i adfer yn nhermau DORA, wedi'i ddarllen fel dosbarthiad (gweler pwnc 2.8, Metrigau DORA) | Misol |
| Amser i ddatrys | Pa mor hir y bu cofnod y digwyddiad ar agor nes ei gau | Mae'r cloc yn dechrau pan logir y digwyddiad; yn stopio pan gaeir ef ar ôl adfer a chadarnhad defnyddiwr neu aros teg. Dangosir amser yn "aros am gwsmer" fel cyfran ar wahân a adroddir ac ni chaiff ei dynnu o'r pennawd. Adroddir fel canolrif a 95fed canradd yn ôl blaenoriaeth | oriau neu oriau busnes | Hanes statws offeryn ITSM | Rheoli digwyddiadau | Amser cylch ar gyfer gwaith heb ei gynllunio (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif) | Misol |
| Oedran y digwyddiad agored hynaf | Pa mor hir y mae'r digwyddiad agored hynaf wedi bod ar agor | Nawr llai'r amser a logiwyd, ar gyfer pob digwyddiad agored, gan restru'r ychydig hynaf yn ôl blaenoriaeth. Nid yw cyflyrau oedi yn cael eu tynnu | diwrnodau | Rhestr digwyddiadau agored offeryn ITSM | Rheoli digwyddiadau | Oedran eitem waith ar fwrdd y tîm (gweler pwnc 2.1, Mesurau llif) | Wythnosol |
| Cyfran amser gweithredol | Cyfran amser a aeth heibio digwyddiad a dreulir mewn gwaith gweithredol yn hytrach nag aros | Swm yr amser mewn cyflyrau gweithredol / cyfanswm yr amser o logio i gau, ar gyfer digwyddiadau a gaewyd yn y cyfnod. Cyflyrau gweithredol yw'r rhai lle mae person yn gweithio'r digwyddiad; rhestrir cyflyrau aros yn y diffiniad | canran | Hanes statws offeryn ITSM | Rheoli digwyddiadau | Effeithlonrwydd llif (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif) | Chwarterol |
| Cyfrif ailneilltuo | Sawl gwaith y mae digwyddiad yn newid y tîm sy'n berchen arno cyn adfer | Cyfrif newidiadau grŵp neilltuo o logio i adfer, wedi'i grynhoi fel y canolrif a chyfran y digwyddiadau â thri neu fwy. Cyfrifir fesul gwasanaeth a blaenoriaeth, byth fesul asiant | cyfrif | Hanes neilltuo offeryn ITSM | Rheoli digwyddiadau; desg gwasanaeth | Cyfrif trosglwyddo (gweler pwnc 9.3, Metrigau cydweithio a throsglwyddo) | Misol |

Dau nodyn ar ddata. Yn gyntaf, dim ond cystal â'i amser dechrau yw amser adfer. Mae llawer o gofnodion digwyddiadau yn cipio pryd y teipiodd rhywun y tocyn, a all fod ar ei hôl hi o oriau y gwir ddechrau effaith. Os nad oes gan eich offeryn faes dechrau effaith, ychwanegwch un, a thrinwch ddechreuadau amcangyfrifedig fel amcangyfrifon (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth). Yn ail, pan gymharwch gyfnodau, cadwch yr un diffiniadau blaenoriaeth, neu bydd y llinell duedd yn adlewyrchu'r ail-ddosbarthu.

## Argymhellion

### Diffiniwch y clociau

**1. Ysgrifennwch ddalen cloc ar gyfer pob mesur amser.** Ar gyfer pob cam, rhestrwch y digwyddiad dechrau, y digwyddiad stopio, y cyflyrau sy'n oedi'r cloc, y sail amser (calendr neu oriau busnes), a'r eithriadau. Cadwch hi yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

**2. Gwahanwch adfer oddi wrth gau.** Cofnodwch pryd y daeth y gwasanaeth yn ôl i ddefnyddwyr fel stamp amser ei hun, ar wahân i pryd y caewyd y tocyn. Adfer yw'r hyn y mae defnyddwyr yn ei deimlo, ac mae cau yn cynnwys gwirio, dogfennu a thrin achosion. Mae timau sy'n defnyddio un stamp amser ar gyfer y ddau yn cael eu gwobrwyo am gau tocynnau'n gynnar neu eu cosbi am ddilyniant gofalus.

**3. Cofnodwch y dechrau effaith, nid dim ond yr amser a logiwyd.** Gofynnwch i ymatebwyr lenwi pryd y teimlodd defnyddwyr yr effaith gyntaf, gan ddefnyddio data monitro lle bo modd. Marciwch y maes fel amcangyfrif pan fo'n un. Mae amser i ganfod yn ddiystyr hebddo, ac mae amser adfer yn cael ei ystumio gan ei absenoldeb.

**4. Cyfyngwch gyflyrau oedi ac adroddwch eu defnydd.** Mae aros am gwsmer neu gyflenwr weithiau'n gyfreithlon. Caniatewch restr fer, a enwir o gyflyrau oedi, mynnwch reswm, a dangoswch gyfran yr amser digwyddiad a dreulir ym mhob un. Mae cyfran gynyddol o amser wedi'i oedi yn arwydd o ddrifft, nid cyflymder.

### Adroddwch yn onest

**5. Amnewidiwch y cymedr gyda'r canolrif a chanradd uchel.** Dangoswch y 50fed a'r 95fed ganradd ar gyfer pob cam, yn ôl blaenoriaeth, fel cyfres amser. Dangoswch gyfrif y digwyddiadau y tu ôl i bob pwynt, oherwydd bod canradd o ddeg digwyddiad yn ffigur gwan. Lle mae cyfrifon yn fach, plotiwch y digwyddiadau unigol fel dotiau a hepgorwch y llinell grynodeb.

**6. Dangoswch oedran y digwyddiadau agored hynaf.** Mae siart o hydoedd digwyddiadau caeedig yn ddall i'r digwyddiadau sy'n dal ar agor, sef y rhai gwaethaf. Rhestrwch y digwyddiadau agored hynaf yn ôl blaenoriaeth bob wythnos. Mae hyn yn anodd ei wella heb orffen y gwaith, felly mae'n gydymaith defnyddiol i unrhyw siart amser datrys.

**7. Segmentwch yn ôl blaenoriaeth ac yn ôl gwasanaeth.** Mae amser datrys cymysg yn codi pan fo'r cymysgedd yn symud tuag at ddigwyddiadau cymhleth, hyd yn oed os caiff pob math o ddigwyddiad ei drin yn gyflymach. Cymharwch o fewn blaenoriaeth ac o fewn gwasanaeth, a dangoswch y cymysgedd wrth ymyl yr amser (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau). Peidiwch â dod i gasgliadau o fis y newidiodd y cymysgedd ynddo.

**8. Defnyddiwch derfynau rheoli i wahanu signal oddi wrth sŵn.** Mae hyd digwyddiadau yn amrywio llawer o wythnos i wythnos heb i ddim newid. Mae siart rheoli, gyda therfynau a gyfrifir o gyfnod sefydlog, yn dangos pryd mae symudiad yn ddigon mawr i fod yn werth ei esbonio (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

### Paru cyflymder â gwydnwch

**9. Dangoswch gyfraddau ailagor ac ailadrodd wrth ymyl pob mesur amser.** Cyfradd ailagor yw cyfran y digwyddiadau a ailagorwyd o fewn ffenestr a nodir. Ailadrodd yw'r un gwasanaeth a symptom yn ymddangos eto o fewn ffenestr. Os yw amser adfer yn disgyn tra bo ailadrodd yn codi, mae'r tîm yn cymhwyso clytiau cyflym. Anfonwch ddigwyddiadau sy'n ailadrodd i reoli problemau (gweler pwnc 4.1, Metrigau rheoli problemau).

**10. Mesurwch aros a throsglwyddiadau, oherwydd dyna lle mae amser yn mynd.** Ar gyfer y rhan fwyaf o wasanaethau, mae llawer o amser a aeth heibio digwyddiad yn aros am berson, penderfyniad neu gyflenwr, yn hytrach na gweithio. Mae cyfran amser gweithredol a chyfrif ailneilltuo yn dangos ble i edrych. Yn aml atgyweiriad ar gyfer amser datrys hir yw rheol llwybro gliriach neu alwad a rennir, nid teipio cyflymach.

**11. Defnyddiwch dargedau ar ganraddau, gyda pherson yn y ddolen.** Os oes angen targed arnoch, datganwch ef fel ymrwymiad canradd ar gyfer blaenoriaeth, megis "naw o bob deg digwyddiad blaenoriaeth 2 wedi'u hadfer o fewn amser a nodir," a chytunwch arno gyda'r bobl a fydd yn ei fodloni. Adolygwch dorri fel cwestiynau am y system, nid fel bai y person ar alwad (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

**12. Gofynnwch i ddefnyddwyr am y profiad.** Bydd arolwg byr ar sampl o ddigwyddiadau caeedig, a darlleniad o'r sylwadau, yn dweud a yw'r rhif yn cyfateb i sut y teimlodd yr aros. Mae defnyddwyr yn aml yn poeni mwy am gyfathrebu amserol nag am funud union yr adfer (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Amser i ganfod | Gosod y dechrau effaith yn hwyrach nag yr oedd; ehangu trothwyon rhybuddion fel bod llai o namau yn cyfrif fel digwyddiadau; cyfrif dim ond digwyddiadau a ddaliodd y monitor | Cyfran y digwyddiadau a adroddwyd gyntaf gan ddefnyddwyr yn hytrach na monitro; adolygiad cyfnodol o amcangyfrifon dechrau effaith yn erbyn data monitro |
| Amser i gydnabod | Awto-neilltuo neu awto-gydnabod i stopio'r cloc; cydnabod y rhybudd ac yna gwneud dim | Amser i'r ymateb cyntaf ac amser i adfer ar gyfer yr un digwyddiadau; sampl o rybuddion a gydnabuwyd heb weithgarwch diweddarach |
| Amser i'r ymateb cyntaf | Anfon ateb templed neu un gair i stopio'r cloc | Adolygu sampl o atebion cyntaf am sylwedd; cysylltiadau dro ar ôl tro a sylwadau arolwg |
| Amser i adfer | Datgan bod gwasanaeth wedi'i adfer cyn y gall defnyddwyr ei ddefnyddio; adfer drwy atal y symptom; logio toriadau fel cynnal a chadw wedi'i gynllunio | Ailadrodd o fewn ffenestr; effaith a adroddir gan ddefnyddwyr ar ôl yr amser adfer; cyfran y digwyddiadau a ail-labelwyd ar ôl y ffaith |
| Amser i ddatrys | Symud tocynnau i "aros am gwsmer" neu "ar ddal"; cau ar ôl un ymgais i gysylltu; hollti digwyddiad yn blant i gau'r rhiant yn gynnar | Cyfran yr amser mewn cyflyrau oedi; cyfradd ailagor; oedran y digwyddiad agored hynaf; darllen sampl o nodiadau cau |
| Oedran y digwyddiad agored hynaf | Cau ac ail-godi'r tocyn hynaf; ei ail-ddosbarthu fel problem neu gais i'w dynnu o'r rhestr | Cysylltu dyblygion â gwreiddiol ac adrodd oedran cysylltiedig; cyfrif digwyddiadau a drawsnewidiwyd yn broblemau neu geisiadau bob cyfnod |
| Cyfran amser gweithredol | Logio gwaith byr, diystyr i farcio amser fel gweithredol; symud i gyflyrau gweithredol heb ymdrech | Cymharu amser gweithredol â chanlyniadau megis amser adfer; sampl o nodiadau gwaith |
| Cyfrif ailneilltuo | Ailagor o dan yr un tîm yn lle trosglwyddo; trosglwyddo gwaith drwy sianel ochr fel nad yw'r offeryn yn dangos trosglwyddiad | Amser i adfer a bodlonrwydd defnyddwyr; arsylwi cyfnodol ar sut mae gwaith yn symud rhwng timau |

Mae darlleniad iach yn dangos canolrifau a chanraddau cynffon sy'n symud gyda'i gilydd, cyfran fach a sefydlog o amser wedi'i oedi, ychydig o ddigwyddiadau a adroddwyd gyntaf gan ddefnyddwyr, ailadrodd yn disgyn, a sylwadau arolwg sy'n cyfateb i ddata'r tocynnau. Trinwch welliant pennawd sy'n cyrraedd ar ei ben ei hun fel anogwr ar gyfer adolygiad chwarae'r system.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Amser cymedrig i adfer | Cyfarwydd; un rhif; hawdd ei dueddu | Wedi'i ddominyddu gan ychydig o ddigwyddiadau hir; cuddio newid go iawn; gwael ar gyfer samplau bach |
| Canolrif ynghyd â chanradd uchel | Disgrifio'r profiad nodweddiadol a'r un anlwcus; gwrthsefyll allanolion | Angen digon o ddigwyddiadau; dau rif i'w hesbonio |
| Plotio pob digwyddiad | Dangos y siâp llawn a'r allanolion; gonest ar gyfaint isel | Anoddach ei ddarllen ar gyfaint uchel; angen hwylusydd |
| Targedau yn ôl blaenoriaeth | Disgwyliadau clir; cefnogi contractau a dwysáu | Gwahodd ail-ddosbarthu ac oedi'r cloc; gall yrru ymdrech at ffin y targed |
| Mesurau cloc tocyn | Rhad, ar gael ym mhob offeryn ITSM | Mesur y tocyn, nid profiad y defnyddiwr; sensitif i lif gwaith statws |
| Mesurau ar sail effaith | Agos at yr hyn y mae defnyddwyr yn ei deimlo; gwrthsefyll triciau tocyn | Angen data monitro a maes dechrau effaith; anoddach i'w archwilio |

Yr ateb pragmatig yw cadw cloc y tocyn am fod gan bob offeryn un, ychwanegu stamp amser adfer ar sail effaith lle mae monitro'n caniatáu, a defnyddio dosbarthiadau ar gyfer y ddau. Mae'r cymedr yn dderbyniol fel disgrifiad bras o un set sefydlog, fawr o ddigwyddiadau tebyg, ac ni ddylai fyth fod yr unig rif ar y dudalen.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa gam o ddigwyddiad sy'n cymryd yr hiraf i ni, a sut ydym ni'n gwybod?**
Tynnwch amserlen y digwyddiad ar fwrdd gyda'r camau o ddechrau effaith i gau. Cymerwch y deg digwyddiad diwethaf a marciwch pa mor hir y cymerodd pob cam, gan ddefnyddio data'r offeryn a chof yr ymatebwyr. Dylai'r hwylusydd chwilio am y cam lle mae'r amser yn clystyru, sy'n aml yn aros am drosglwyddiad neu benderfyniad, nid y gwaith technegol. Cytunwch pa gam sy'n haeddu sylw yn gyntaf.

**2. Ble mae ein cloc yn dechrau ac yn stopio, a phwy a benderfynodd?**
Gofynnwch i bob person ddweud pryd y maent yn credu y "dechreuodd" digwyddiad a phryd y "daeth i ben." Bydd yr atebion yn wahanol, a'r gwahaniaethau yw'r canfyddiad. Cymharwch hwy â'r meysydd yn yr offeryn a'r llif gwaith statws. Cipiwch y diffiniadau y cytunwyd arnynt yn y gofrestr metrigau a nodwch ble na all yr offeryn eu cefnogi eto.

**3. Beth fyddai ein canolrifau a'n 95fed canraddau yn ei ddangos y mae ein cymedr yn ei guddio?**
Cyn y cyfarfod, cyfrifwch y cymedr, y canolrif a'r 95fed ganradd ar gyfer digwyddiadau'r chwarter diwethaf yn ôl blaenoriaeth. Dangoswch hwy ochr yn ochr a phlotiwch yr hydoedd. Gofynnwch beth fyddai'r tîm yn ei gasglu o bob un. Dylai'r hwylusydd sylwi a yw un neu ddau o ddigwyddiadau yn symud y cymedr a thrafod a yw'r tîm yn credu bod y canolrif yn cynrychioli aros defnyddiwr nodweddiadol.

**4. Pa amser ydym ni'n ei dreulio yn aros yn hytrach na gweithio, a pham?**
Dewiswch dri digwyddiad hir a thraciwch eu hanes statws. Cyfrifwch yr oriau mewn cyflyrau gweithredol a'r oriau mewn cyflyrau aros, a nodwch pwy neu beth yr arhosid amdano. Gofynnwch pa aros y gellid ei fyrhau gan benderfyniad, llwybr dwysáu cliriach, neu alwad a rennir.

**5. Pe baem yn cael ein gofyn i dorri amser datrys o chwarter, sut y byddem yn gwneud hynny heb helpu defnyddwyr?**
Dyma'r adolygiad chwarae'r system ar raddfa fach. Rhestrwch bob symudiad a fyddai'n gwella'r rhif heb wella'r gwasanaeth, megis oedi'r cloc, cau'n gynnar, neu ail-labelu blaenoriaethau. Ar gyfer pob symudiad, gofynnwch a fyddai rheilen warchod yn ei ddal. Y rhestr yw dechrau eich colofn ffyrdd o chwarae'r system ac mae'n dangos ble mae angen tynhau diffiniadau.

**6. Sut ydym ni'n gwybod bod adfer cyflymach yn real?**
Gofynnwch am y dystiolaeth: ailadrodd, ailagor, sylwadau defnyddwyr, ac unrhyw ddigwyddiad diweddarach gyda'r un symptom. Edrychwch ar un gwelliant diweddar a gofynnwch a ddaliodd fis yn ddiweddarach. Dylai'r hwylusydd lywio'r grŵp tuag at atgyweiriadau gwydn. Gorffennwch drwy benderfynu pa fesur gwydnwch sy'n ymuno â'r dangosfwrdd.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cynnyrch sy'n rhedeg eu gwasanaethau eu hunain yn gweld amser digwyddiadau fel cost gwaith heb ei gynllunio sy'n dadleoli gwaith wedi'i gynllunio. Olrheiniwch faint o bob cyfnod llif a gymerir gan ddigwyddiadau, a thrinwch ddigwyddiadau sy'n ailadrodd fel eitemau ôl-groniad ar gyfer y tîm sy'n berchen arnynt. Mae arferion rhyddhau sy'n gwneud dychwelyd yn gyflym yn byrhau adfer, felly mae amser digwyddiadau yn rhannol yn fesur cyflawni (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn berchen ar y clociau ac yn teimlo pwysau'r targedau. Dylent gyhoeddi'r ddalen cloc, archwilio'r defnydd o gyflyrau oedi, adrodd canolrifau a chanraddau cynffon yn ôl blaenoriaeth, a chadw rhestr wythnosol o'r digwyddiadau agored hynaf. Mae llwyth ar alwad ac ansawdd rhybuddion yn llunio amseroedd cydnabod a chanfod, felly edrychwch arnynt gyda'i gilydd (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad).

### Arweinyddiaeth a llywodraethu

Dylai arweinwyr ofyn pa gam sydd arafaf a beth sy'n cael ei wneud yn ei gylch, nid pam mae rhif yn goch. Dylent ddisgwyl adrodd canradd, mesur gwydnwch wrth ymyl unrhyw fesur cyflymder, ac esboniad pan fo diffiniadau'n newid. Mae cyllid ar gyfer monitro, llawlyfrau gweithredu a gwaith problemau yn aml yn talu ffordd yn fwy na phwysau ar ymatebwyr, oherwydd ei fod yn lleihau'r oedi na all ymatebwyr ei reoli.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn profi'r aros, ansawdd cyfathrebu, ac a yw'r broblem yn dod yn ôl. Anaml y gwelant enwau'r camau. Rhowch ymateb cyntaf gonest iddynt, dywedwch wrthynt beth i'w ddisgwyl, a'u diweddaru ar amserlen. Eu sylwadau arolwg a'u cysylltiadau dro ar ôl tro yw'r gwiriad gorau ar a yw cloc y tocyn yn dweud y gwir.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg platfform archebion, gwasanaeth cyfrifon cwsmeriaid, a system warws fewnol. Mae timau cynnyrch yn berchen ar eu gwasanaethau ac yn rhannu rota ar alwad gyda grŵp gweithrediadau bach. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r arweinyddiaeth yn gosod nod o "amser datrys cymedrig o dan bedair awr" ar gyfer digwyddiadau blaenoriaeth 2. Yn y chwarter cyntaf, mae'r dangosfwrdd yn dangos cymedr o 3.8 awr, ac mae'n ymddangos bod y nod wedi'i fodloni. Mae staff warws yn dweud bod rhai toriadau yn ymddangos fel pe baent yn para drwy'r dydd. Mae'r arweinydd gweithrediadau yn plotio'r 41 digwyddiad blaenoriaeth 2 (enghreifftiol) ar gyfer y chwarter ac yn canfod canolrif o 1.5 awr a 95fed canradd o 11 awr. Mae tri digwyddiad yn cyfrif am y rhan fwyaf o'r gynffon hir.

Mae'n olrhain y tri digwyddiad hir. Treuliodd pob un y rhan fwyaf o'i amser yn "aros am gyflenwr" neu "aros am gwsmer". Yn ddau ohonynt, roedd y tocyn wedi'i gau a'i ail-godi fel digwyddiad newydd pan "dorrodd" y gwreiddiol, a ailosododd y cloc. Roedd y trydydd yn cynnwys pedwar ailneilltuo rhwng timau dros ddau ddiwrnod. Mae sampl o nodiadau cau yn dangos bod 6 o 30 tocyn a adolygwyd (enghreifftiol) wedi'u cau ar ôl un ymgais i gyrraedd y defnyddiwr.

Mae'r tîm yn gwneud pedwar newid. Maent yn ychwanegu maes dechrau effaith a stamp amser adfer at y ffurflen digwyddiad. Maent yn adrodd canolrif, 85fed a 95fed canradd yn ôl blaenoriaeth, a'r digwyddiadau agored hynaf bob wythnos. Maent yn dangos cyfran yr amser mewn cyflyrau oedi a'r gyfradd ailadrodd ar yr un dudalen. Ac maent yn cysylltu tocynnau a ail-godwyd â'u gwreiddiol fel bod oedran yn cario drosodd.

Yn yr adolygiad nesaf, mae'r cymedr pennawd wedi codi i 4.6 awr oherwydd bod y tocynnau a ail-godwyd bellach yn cyfrif yn llawn. Mae'r tîm yn esbonio'r codiad i'r arweinyddiaeth fel cywiriad. Y 95fed canradd a'r tocyn agored hynaf yw'r rhifau y maent yn gweithio arnynt yn awr, ac mae'r cyfrif ailneilltuo yn pwyntio at fwlch llwybro rhwng y gwasanaeth archebion a'r system warws. Maent yn cytuno i ychwanegu alias galwad a rennir ac adolygu'r effaith dros y chwarter nesaf yn hytrach na gosod targed newydd ar unwaith.

## Y golwg fesul sector

**Busnes newydd.** Mae cyfaint yn isel, felly mae canraddau'n swnllyd ac mae plot o bob digwyddiad yn well na chrynodeb. Mae un person yn aml yn canfod, ymateb ac adfer, felly mae gwahanu camau yn bwysig llai nag amserlen ysgrifenedig o bob digwyddiad. Ychwanegwch nodyn dechrau effaith at bob ysgrifen ôl-ddigwyddiad a chyfrifwch ganolrifau syml unwaith y bydd digon o ddigwyddiadau.

**Busnes bach.** Gall darparwr gwasanaeth a reolir neu un cyffredinolwr TG drin digwyddiadau, a gall contract y darparwr ddiffinio targedau ymateb a datrys. Darllenwch glociau'r contract yn ofalus, oherwydd eu bod yn aml yn wahanol i brofiad eich defnyddwyr. Cadwch log byr o ddechrau effaith ac adfer ar gyfer y digwyddiadau sy'n bwysig, a gofynnwch i'r darparwr am y cofnodion sylfaenol, gan fod ffigur crynodeb yn cuddio'r clociau.

**Menter fawr.** Mae llawer o dimau, cyflenwyr a chynlluniau blaenoriaeth yn gwneud cymharu'n demtasiwn ac yn gamarweiniol. Safonwch ddiffiniadau cloc ac ystyron blaenoriaeth ar draws y sefydliad, cyhoeddwch ddosbarthiadau yn hytrach na chymedrau, a segmentwch yn ôl gwasanaeth. Gwyliwch am ddrifft cyflwr oedi ac ail-ddosbarthu, sy'n tyfu gyda nifer yr haenau adrodd.

**Llywodraeth a'r sector cyhoeddus.** Gall contractau, adrodd statudol ac archwilio osod y clociau a'r diffiniadau blaenoriaeth. Bodlonwch y rhwymedigaethau hynny fel y'u hysgrifennwyd, a chadwch ail olwg, sy'n canolbwyntio ar y defnyddiwr, wrth eu hymyl, fel nad yw cydymffurfio yn cuddio profiad gwael. Byddwch yn agored am ddiffiniadau ac am gywiriadau pan fo rheol cloc yn newid (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Dylunio a disgyblaeth yw cost y pwnc hwn yn bennaf. Mae'n cymryd ychydig oriau i ysgrifennu dalennau cloc, rhywfaint o gyfluniad i ychwanegu maes dechrau effaith a stamp amser adfer, ac ymdrech gymedrol i adeiladu adroddiadau canradd. Lle mae'r offeryn ITSM neu lwyfan monitro eisoes yn dal y stampiau amser, tasg un-waith yw echdynnu. Y gost gylchol yw adolygiad misol a sampl chwarterol o ddigwyddiadau caeedig.

Daw'r elw o well penderfyniadau a llai o ailwaith. Mae adrodd dosbarthiad yn dangos a weithiodd gwelliant, ac mae adrodd cam yn cyfeirio ymdrech at yr oedi go iawn, megis trosglwyddiadau, bylchau canfod neu aros cyflenwyr. Mae mesurau gwydnwch yn atal arbediad ffug clytiau cyflym sy'n dychwelyd fel digwyddiadau ailadroddus. Mesurwch eich llinell sylfaen eich hun am chwarter, gwnewch un newid, a chymharwch ddosbarthiadau.

## Gwrthbatrymau a maglau

- **Un MTTR ar y dangosfwrdd gweithredol.** Mae cymedr data gwyrgam yn camarwain. Dangoswch y canolrif, canradd uchel, a'r digwyddiad agored hynaf, a dywedwch faint o ddigwyddiadau sydd y tu ôl i bob pwynt.
- **Cymysgu blaenoriaethau a gwasanaethau.** Mae symudiad cymysgedd yn edrych fel newid perfformiad. Segmentwch yn ôl blaenoriaeth a gwasanaeth, a dangoswch y cymysgedd.
- **Stopio'r cloc gyda chyflyrau oedi.** Mae amser yn diflannu i "aros" ac "ar ddal". Rhestrwch y cyflyrau a ganiateir, mynnwch resymau, ac adroddwch gyfran yr amser ym mhob un.
- **Cau ac ail-godi tocynnau.** Mae'n ailosod yr oedran ac yn cuddio'r digwyddiad hir. Cysylltwch docynnau a ail-godwyd â'u gwreiddiol ac adroddwch yr oedran cysylltiedig.
- **Defnyddio un stamp amser ar gyfer adfer a chau.** Gwobrwyir timau wedyn am gau cynamserol neu eu cosbi am ddilyniant gofalus. Cofnodwch y ddau ac adroddwch y ddau.
- **Graddio asiantau neu beirianwyr yn ôl amser datrys.** Mae'n gwobrwyo tocynnau hawdd a dewis ceirios, ac yn digalonni cymorth a dwysáu. Adroddwch yn ôl tîm a gwasanaeth yn unig.
- **Targedau heb fesurau gwydnwch.** Mae clwt cyflym sy'n methu yfory yn edrych fel llwyddiant. Dangoswch ailadrodd a chyfradd ailagor wrth ymyl pob targed.
- **Trin samplau bach fel tueddiadau.** Dyfaliad yw 95fed canradd o lond llaw o ddigwyddiadau. Plotiwch ddigwyddiadau unigol ac arhoswch am fwy o ddata cyn tynnu llinell.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a chlociau | Mae pob person yn mesur yn wahanol; un "amser datrys" | Clociau wedi'u hysgrifennu ar gyfer rhai timau; camau wedi'u gwahanu'n rhannol | Un ddalen cloc ar gyfer pob cam, gyda chyflyrau oedi wedi'u rhestru | Diffiniadau wedi'u hadolygu a newidiadau wedi'u logio gyda rhesymau | Diffiniadau wedi'u halinio â chyflenwyr a chwsmeriaid, a'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Ansawdd data | Nodiadau â llaw; dechrau effaith yn anhysbys | Stampiau amser offeryn ar gyfer logio a chau tocyn | Dechrau effaith ac adfer wedi'u cofnodi ar gyfer digwyddiadau blaenoriaeth | Data wedi'i archwilio drwy samplo; amcangyfrifon wedi'u nodi | Data monitro ac ITSM wedi'u huno'n awtomatig ac y ymddiriedir ynddynt ar draws timau |
| Arfer ystadegol | Cymedr yn unig | Cymedr a chanolrif wedi'u dangos | Canolrif a chanradd a enwir yn ôl blaenoriaeth a gwasanaeth | Terfynau rheoli wedi'u defnyddio; mesurau gwydnwch wedi'u paru | Dosbarthiadau wedi'u cysylltu â phrofiad defnyddwyr a'u defnyddio i benderfynu ble i fuddsoddi |
| Defnydd mewn gwelliant | Rhifau'n cael eu defnyddio i erlid unigolion | Mae'r tîm yn gweld ei rifau ei hun | Mae'r tîm yn adolygu amseroedd cam ac aros yn fisol | Mae camau araf yn arwain at waith gwella wedi'i ariannu | Mae gwelliant yn cael ei rannu ar draws timau a chyflenwyr ac mae'r mesurau'n esblygu |

## Rhestr wirio

- [ ] Mae gan bob cam (canfod, cydnabod, ymateb, adfer, datrys) reol dechrau, stopio ac oedi ysgrifenedig.
- [ ] Cofnodir dechrau effaith ac amser adfer fel meysydd ar wahân ar gyfer digwyddiadau blaenoriaeth.
- [ ] Mae adroddiadau'n dangos y canolrif a chanradd uchel, yn ôl blaenoriaeth ac yn ôl gwasanaeth.
- [ ] Dangosir cyfrif y digwyddiadau y tu ôl i bob pwynt a adroddir.
- [ ] Rhestrir y digwyddiadau agored hynaf yn wythnosol.
- [ ] Mae cyflyrau oedi yn rhestr fer, a enwir ac adroddir cyfran eu hamser.
- [ ] Dangosir cyfradd ailagor ac ailadrodd wrth ymyl pob mesur amser.
- [ ] Cysylltir tocynnau a ail-godwyd â'u gwreiddiol fel bod oedran yn cario drosodd.
- [ ] Ni ddefnyddir unrhyw fesur amser i raddio asiantau neu beirianwyr unigol.
- [ ] Darllenir sampl o ddigwyddiadau caeedig bob chwarter am onestrwydd.
- [ ] Darllenir sylwadau arolwg cwsmeriaid wrth ymyl data'r tocynnau.

## Anogwyr AI

**Cymharwch gymedr a chanraddau hyd ein digwyddiadau.**

```text
Byddaf yn gludo cofnodion digwyddiadau ar gyfer [gwasanaeth neu dîm] yn cwmpasu
[cyfnod]. Meysydd: [rhestr meysydd megis amser a logiwyd, dechrau effaith, amser
adfer, amser cau, blaenoriaeth, hanes statws]. Cyfrifwch y canolrif, yr 85fed
canradd, y 95fed canradd a'r cymedr o [enw'r cam, er enghraifft amser i adfer]
yn ôl [blaenoriaeth], a dangoswch faint o ddigwyddiadau sydd y tu ôl i bob ffigur.
Disgrifiwch pa mor bell y mae'r cymedr yn wahanol i'r canolrif a pha ddigwyddiadau
sy'n gyrru'r gwahaniaeth hwnnw. Peidiwch â dyfeisio data na gwerthoedd meincnod.
Rhestrwch eich rhagdybiaethau, unrhyw resi a eithriwyd gennych, ac unrhyw beth na
allai'r data ei ddweud wrthych.

[gludwch ddata digwyddiadau gyda data personol wedi'i dynnu]
```

**Drafftiwch ddalen cloc ar gyfer ein mesurau amser digwyddiadau.**

```text
Drafftiwch ddalen cloc ar gyfer [enw'r tîm] yn cwmpasu amser i ganfod, amser i
gydnabod, amser i'r ymateb cyntaf, amser i adfer, ac amser i ddatrys. Ein hoffeyn
ITSM yw [enw'r offeryn], ein monitro yw [offeryn monitro], a'n llif gwaith statws
yw [rhestr statysau]. Ar gyfer pob cam, rhowch y digwyddiad dechrau, y digwyddiad
stopio, cyflyrau oedi, y sail amser ([calendr neu oriau busnes]), eithriadau, a
ffordd o chwarae'r system gyda rheilen warchod. Marciwch bob eitem y bu'n rhaid i
chi ei rhagdybio a rhestrwch gwestiynau y dylwn eu hateb i gwblhau'r ddalen.
Peidiwch â dyfeisio targedau.
```

**Dewch o hyd i ble mae'r amser a aeth heibio yn mynd mewn ychydig o ddigwyddiadau hir.**

```text
Dyma'r hanes statws ar gyfer [nifer] o ddigwyddiadau hir o [gwasanaeth]. Ar gyfer
pob digwyddiad, rhestrwch yr amser a dreuliwyd ym mhob statws, marciwch y cyflyrau
gweithredol ac aros gan ddefnyddio'r rheol hon: [pa statysau sy'n cyfrif fel
gweithredol], a nodwch bob ailneilltuo rhwng [timau neu grwpiau]. Adroddwch
batrymau ar draws digwyddiadau, nid unigolion, ac awgrymwch pa gam sy'n haeddu
sylw yn gyntaf. Peidiwch â dyfalu achosion nad yw'r data yn eu dangos. Rhestrwch
eich rhagdybiaethau a pha feysydd ychwanegol fyddai'n helpu.

[gludwch hanesion statws gyda data personol wedi'i dynnu]
```

**Rhedwch adolygiad chwarae'r system ar ein targedau amser digwyddiadau.**

```text
Rydym yn adrodd [enw'r metrig] ar gyfer [blaenoriaeth neu wasanaeth], wedi'i
ddiffinio fel [diffiniad gyda digwyddiadau dechrau a stopio]. Y targed yw [targed]
a'r gynulleidfa yw [cynulleidfa]. Rhestrwch ffyrdd realistig y gallai'r rhif wella
heb helpu defnyddwyr, megis oedi'r cloc, cau'n gynnar, ail-labelu neu ail-godi
tocynnau. Ar gyfer pob ffordd, cynigiwch fesur neu arfer rheilen warchod a fyddai'n
ei ddatgelu, a nodwch sut y gellid chwarae'r rheilen warchod ei hun. Peidiwch â
dyfeisio meincnodau nac ystadegau. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau cysylltiedig a'r rheiliau gwarchod pâr ar gyfer mesur amser digwyddiad yr ydych ar fin ei adrodd.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod newid i'r pwnc hwn yn cadw'r templed, y tabl chwarae'r system a'r croesgyfeiriadau yn gyson.

## Pwyntiau allweddol

- Mae gan ddigwyddiad gamau, ac mae gan bob cam ei gloc, perchennog ac ateb ei hun. Enwch y cam yr ydych yn ei fesur.
- Mae hyd digwyddiadau yn wyrgam, felly mae'r cymedr yn camarwain. Adroddwch y canolrif, canradd uchel, ac oedran y digwyddiad agored hynaf.
- Ysgrifennwch ble mae pob cloc yn dechrau ac yn stopio, cofnodwch ddechrau effaith ac adfer ar wahân i gau tocyn, a chyfyngwch gyflyrau oedi.
- Paru pob mesur cyflymder â mesur gwydnwch megis ailadrodd a chyfradd ailagor.
- Disgrifiwch dimau a gwasanaethau, byth asiantau unigol, a darllenwch sampl o ddigwyddiadau caeedig i wirio bod y rhifau'n onest.

## Cyfeiriadau a darllen pellach

1. Davidovič, Š., *Incident Metrics in SRE: Critically Evaluating MTTR and Friends*, O'Reilly Media, 2021, https://sre.google/resources/practices-and-processes/incident-metrics-in-sre/.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018.
4. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
7. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Wikipedia, [Incident management](https://en.wikipedia.org/wiki/Incident_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
12. Wikipedia, [Mean time to repair](https://en.wikipedia.org/wiki/Mean_time_to_repair).
13. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
14. Wikipedia, [Log-normal distribution](https://en.wikipedia.org/wiki/Log-normal_distribution).
15. Wikipedia, [Median](https://en.wikipedia.org/wiki/Median).
16. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
