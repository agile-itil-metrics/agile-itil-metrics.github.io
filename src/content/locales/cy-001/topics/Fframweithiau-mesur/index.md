# Fframweithiau mesur

**Ffordd o benderfynu pa rifau sy'n haeddu lle ar y dudalen yw fframwaith mesur, ac mae'r goreuon i gyd yn dechrau â nod a chwestiwn, felly dewiswch y fframwaith ysgafnaf sy'n cadw pob metrig yn gysylltiedig â phenderfyniad.**

## Crynodeb a chymhelliant

Mae tîm sydd eisiau mesur ei waith yn cwrdd â phroblem gynnar: mae miloedd o rifau posibl, a dim rheol i ddewis rhyngddynt. Mae fframwaith mesur yn cyflenwi'r rheol. Mae'n enwi man cychwyn (nod, strategaeth, llond llaw o amodau critigol), ac yn disgrifio sut i gyrraedd o'r man cychwyn hwnnw at set fach o fesurau y bydd pobl yn eu darllen ac yn gweithredu arnynt. Mae fframweithiau'n wahanol o ran geirfa, ond maent yn rhannu un nod: cadw pob rhif yn gysylltiedig â rheswm dros ei gael.

Mae'r pwnc hwn yn ymdrin â phum syniad sy'n ymddangos ym mron pob sefydliad sy'n rhedeg gwasanaethau. Y cyntaf yw'r dull Nod-Cwestiwn-Metrig (GQM, Goal-Question-Metric), a ddatblygwyd gan yr ymchwilydd peirianneg meddalwedd [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili) a chydweithwyr. Mae'n dechrau o nod, yn gofyn y cwestiynau a fyddai'n dangos a gyflawnir y nod, a dim ond wedyn yn dewis metrigau. Yr ail yw [amcanion a chanlyniadau allweddol](https://en.wikipedia.org/wiki/OKR) (OKRs), dull gosod nodau a boblogeiddiwyd yn Intel gan Andrew Grove ac yn ddiweddarach yn Google trwy John Doerr. Mae amcan yn dweud i ble y mae tîm eisiau mynd, ac mae llond llaw o ganlyniadau allweddol yn dweud sut y bydd yn gwybod ei fod wedi cyrraedd. Y trydydd yw'r [cerdyn sgorio cytbwys](https://en.wikipedia.org/wiki/Balanced_scorecard), a gyflwynwyd gan Robert Kaplan a David Norton ym 1992, sy'n gofyn i sefydliadau edrych ar ganlyniadau ariannol, cwsmeriaid, prosesau mewnol, a dysgu a thwf gyda'i gilydd, fel nad oes yr un golwg unigol yn dominyddu.

Mae'r pedwerydd a'r pumed syniad yn hŷn ac yn symlach. Mae [ffactor llwyddiant critigol](https://en.wikipedia.org/wiki/Critical_success_factor) (CSF) yn amod y mae'n rhaid iddo fod yn wir i gyrraedd nod, ac mae [dangosydd perfformiad allweddol](https://en.wikipedia.org/wiki/Key_performance_indicator) (KPI) yn fesur o ba mor dda y mae'r amod hwnnw'n dal. Mae ITIL, y fframwaith ar gyfer rheoli gwasanaethau TG (ITSM) a gyhoeddir gan Axelos ac yn ddiweddarach gan PeopleCert, yn defnyddio'r paru hwn yn union. Yn ITIL 4 (y fersiwn a ddefnyddir yn eang ym mis Hydref 2026), mae'r arweiniad ar fesur ac adrodd ac ar welliant parhaus yn dweud wrth ymarferwyr am ddiffinio CSFau ar gyfer gwasanaeth neu arfer, yna dewis KPIau sy'n dangos cynnydd yn eu herbyn. Crynhoir dull ehangach [ITIL](https://en.wikipedia.org/wiki/ITIL) yma, nid ei atgynhyrchu.

Mae'r golygon ystwyth ac ITIL yn cwrdd yn ddefnyddiol yn y maes hwn. Mae arfer ystwyth yn ffafrio cylchoedd byr o ddysgu: mae tîm yn datgan damcaniaeth, yn rhoi cynnig ar rywbeth, yn archwilio'r canlyniad ac yn addasu. Mae arfer ITIL yn ffafrio gwasanaethau diffiniedig, lefelau gwasanaeth y cytunwyd arnynt, a phroses reoledig o welliant. Mae fframwaith fel GQM yn gweddu i arferiad ystwyth gofyn beth y mae'r tîm eisiau ei ddysgu. Mae cerdyn sgorio cytbwys yn gweddu i angen ITIL i ddangos darlun crwn o iechyd gwasanaeth i arweinwyr. Mae OKRs yn eistedd rhwng y ddau, oherwydd cânt eu hadolygu mewn cylchoedd byr ond maent wedi'u hysgrifennu yn iaith canlyniadau y mae cyrff llywodraethu yn eu deall.

Mae tri thymor yn codi dro ar ôl tro yn y pwnc hwn. **Nod** (goal) yw datganiad o ganlyniad bwriadedig ar gyfer cynulleidfa a enwir. **Cwestiwn** yw rhywbeth y byddai angen i chi ei wybod i ddweud a gyflawnir y nod. **Metrig** yw ffordd ddiffiniedig o gyfrif neu amseru rhywbeth sy'n helpu i ateb cwestiwn. Mae'r fframweithiau'n wahanol yn y ffordd y maent yn trin y trydydd tymor, ond mae pob un yn mynnu ei fod yn dod yn olaf, ar ôl y nod a'r cwestiwn. Y drefn hon yw'r amddiffyniad cryfaf yn erbyn y methiant a ddisgrifir yng nghyfraith Goodhart (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau), lle mae rhif yn cymryd lle'r diben y'i dewiswyd i'w wasanaethu.

Nid yw unrhyw fframwaith yn trwsio dewis gwael o nod, ac nid yw'r un yn cael gwared ar yr angen am reiliau gwarchod. Trinwch fframwaith fel sgaffaldiau ar gyfer sgwrs, a disgwyliwch ei newid wrth i'r gwaith newid. Gall KPIau yn arbennig ddod yn [fetrigau gwagedd](https://en.wikipedia.org/wiki/Vanity_metric), cyfrifon sydd ond yn codi ac nad ydynt byth yn hysbysu penderfyniad, megis cyfanswm y tocynnau a drinnir. Nodir y rhesymau ehangach dros fesur o gwbl mewn mannau eraill (gweler pwnc 1.1, Pam mesur ITIL ystwyth).

### Sut mae'r fframweithiau'n wahanol

Mae'r fframweithiau'n ateb cwestiynau ychydig yn wahanol, ac mae eu cymysgu yn gyffredin. Defnyddiwch y tabl isod fel map.

| Fframwaith | Man cychwyn | Allbwn nodweddiadol | Gorau ar gyfer | Gorwel nodweddiadol |
| --- | --- | --- | --- | --- |
| Nod-Cwestiwn-Metrig | Nod penodol ar gyfer cynnyrch, proses neu wasanaeth | Coeden o nodau, cwestiynau a metrigau | Dylunio rhaglen fesur ar gyfer un tîm neu wasanaeth | Wythnosau i fisoedd |
| OKRs | Amcan uchelgeisiol ar gyfer y cyfnod nesaf | Ychydig o amcanion, pob un â chanlyniadau allweddol mesuradwy | Alinio timau ar ganlyniadau a chanolbwyntio ymdrech | Chwarter |
| Cerdyn sgorio cytbwys | Strategaeth sefydliad | Amcanion a mesurau mewn pedwar persbectif | Dangos golwg grwn i arweinwyr a chysylltu strategaeth â gweithrediadau | Blwyddyn |
| CSFau a KPIau | Gwasanaeth, arfer neu nod | Ychydig o amodau y mae'n rhaid iddynt ddal, pob un â dangosyddion | Gweithredu arfer ITIL diffiniedig ac adrodd ei iechyd | Parhaus, wedi'i adolygu'n rheolaidd |

## Egwyddorion allweddol

- **Dechreuwch o'r nod, yna'r cwestiwn, yna'r metrig.** Nid oes gan fetrig a ddewiswyd yn gyntaf unrhyw ffordd o gael ei farnu'n ddefnyddiol.
- **Gwnewch y gynulleidfa a'r penderfyniad yn eglur.** Mae pob nod yn enwi pwy sy'n elwa, ac mae pob metrig yn enwi pwy fydd yn gweithredu arno.
- **Cadwch y set yn fach.** Mae ychydig o fesurau a ddarllenir ac yr ymddiriedir ynddynt yn well na rhestr hir a edrychir drosti'n frysiog.
- **Cydbwyswch y golwg.** Paru cyflymder ag ansawdd, cost â phrofiad, ac allbwn tymor byr â dysgu tymor hir, fel nad yw unrhyw fframwaith yn gwobrwyo un ar draul un arall.
- **Trinwch dargedau fel damcaniaethau.** Mae nod a'i rifau yn bet y gall fod yn anghywir, felly adolygwch hwy ar amserlen a'u newid gyda rheswm wedi'i gofnodi.
- **Defnyddiwch fframweithiau i ddisgrifio timau a gwasanaethau, byth i raddio pobl.** Mae cardiau sgorio, canlyniadau allweddol a KPIau yn perthyn i dîm neu wasanaeth.
- **Cyfunwch fframweithiau'n fwriadol.** Dywedwch pa fframwaith sy'n berchen ar ba benderfyniad, fel na ddiffinnir yr un rhif mewn tair ffordd.

## Diffiniadau metrigau

Mae'r metrigau isod yn mesur iechyd fframwaith ar waith, nid iechyd gwasanaeth. Maent yn dangos a yw nodau a metrigau yn dal yn gysylltiedig, ac maent yn berthnasol pa bynnag fframwaith y mae tîm yn ei ddewis. Cyfrifir yn ôl tîm neu wasanaeth, byth yn ôl person.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Olrheiniadwyedd nodau | Cyfran y metrigau a adroddir sy'n olrhain i nod a chwestiwn ysgrifenedig | metrigau â nod a chwestiwn wedi'u cofnodi / metrigau a adroddwyd | canran | Cofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau) | Mesur ac adrodd; gwelliant parhaus | Nod cyflawni; nod cynnyrch | Chwarterol |
| Dosbarthiad sgôr canlyniadau allweddol | Ymlediad sgorau diwedd cyfnod ar gyfer canlyniadau allweddol, a ddangosir fel y gyfran ym mhob band | canlyniadau allweddol ym mhob band sgôr (er enghraifft 0.0 i 0.3, 0.4 i 0.6, 0.7 i 1.0) / canlyniadau allweddol a sgoriwyd yn y cyfnod; eithrir canlyniadau allweddol a ollyngwyd gyda rheswm wedi'i gofnodi | canran fesul band | Offeryn olrhain OKR neu ddogfen tîm | Gwelliant parhaus; rheoli lefelau gwasanaeth | Cynllunio chwarterol; adolygu | Chwarterol |
| Cwmpas persbectif | Cyfran pedwar persbectif y cerdyn sgorio cytbwys sydd ag o leiaf un mesur â gwerth cyfredol | persbectifau â mesur a adroddwyd yn y cyfnod diwethaf / pedwar | canran | Cerdyn sgorio neu ddangosfwrdd | Mesur ac adrodd; llywodraethu'r system gwerth gwasanaeth | Adolygiad rhanddeiliaid (golygon cwsmeriaid a dysgu) | Chwarterol |
| Oedran adolygu dangosydd | Yr amser ers adolygu diffiniad a tharged pob KPI ddiwethaf | dyddiad adolygu llai dyddiad yr adolygiad diwethaf; mae'r cloc yn dechrau ar yr adolygiad diwethaf a gofnodwyd ac yn stopio ar ddyddiad adrodd; adroddwch y canolrif a'r hynaf | diwrnodau | Log newidiadau'r gofrestr metrigau | Gwelliant parhaus; mesur ac adrodd | Camau gweithredu ôl-sylliad | Chwarterol |
| Cwmpas CSF-i-KPI | Cyfran y ffactorau llwyddiant critigol ag o leiaf un KPI a adroddir ar hyn o bryd | CSFau â KPI cyfredol / CSFau a ddiffiniwyd ar gyfer y gwasanaeth neu'r arfer | canran | Dogfennaeth arfer neu wasanaeth; cofrestr metrigau | Y dull CSF a KPI mewn canllawiau arfer ITIL | Diffiniad o orffen; cytundebau gweithio | Chwarterol |

Mae olrheiniadwyedd nodau yn cyfrif metrig fel un a olrheiniwyd dim ond os yw'r nod a'r cwestiwn wedi'u hysgrifennu a'r gynulleidfa wedi'i henwi; nid yw nod ar ei ben ei hun yn ddigon. Dylid darllen dosbarthiad sgôr canlyniadau allweddol fel ymlediad, nid cyfartaledd, oherwydd mae cyfartaledd yn cuddio tîm a sandbagiodd bopeth a thîm a fethodd bopeth. Mae oedran adolygu dangosydd yn eithrio metrigau a ymddeolwyd yn y cyfnod.

## Argymhellion

### Dewiswch a chyfunwch fframweithiau

**1. Dewiswch y fframwaith lleiaf sy'n gwneud y gwaith.** Anaml y mae angen cerdyn sgorio cytbwys llawn ar un tîm gwasanaeth â phroblem wella sengl. Mae GQM yn aml yn ddigon, oherwydd mae ganddo bwynt stopio clir: coeden o un nod, ychydig o gwestiynau ac ychydig o fetrigau. Ychwanegwch strwythur dim ond pan fydd penderfyniad ei angen.

**2. Ysgrifennwch nodau mewn tair rhan: diben, pwnc a safbwynt.** Caiff nodau GQM eu fframio'n draddodiadol fel gwella ansawdd penodol pwnc penodol o safbwynt penodol, er enghraifft gwella eglurder diweddariadau digwyddiadau i'r bobl sy'n dibynnu ar y ddesg gwasanaeth. Mae'r strwythur yn eich gorfodi i ddweud pwy sy'n elwa. Os nad oes gan nod safbwynt, mae'n debyg ei fod yn slogan.

**3. Gofynnwch gwestiynau y gallai person eu hateb â stori fer.** Mae "Pa mor gyflym y mae defnyddwyr yn clywed yn ôl ar ôl iddynt adrodd problem?" yn gwestiwn da, oherwydd gallwch ddychmygu ateb a'r dystiolaeth y tu ôl iddo. Nid yw "Beth yw ein perfformiad?" Anelwch at dri i bump cwestiwn fesul nod, a disgwyliwch i rai gael eu hateb gan gyfweliadau neu samplau, nid gan rif.

**4. Dewiswch fetrigau yn olaf, a dewiswch fwy nag un.** Ar gyfer pob cwestiwn, enwch y metrigau ymgeisiol, y ffynhonnell data, a'r ffordd o chwarae'r system (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth). Cynhwyswch o leiaf un metrig mewn tensiwn â'r lleill, megis amser ymateb wrth ymyl cyfradd ailagor. Os nad oes metrig ymarferol ar gyfer cwestiwn, dywedwch hynny a chynlluniwch wiriad ansoddol.

**5. Penderfynwch pa fframwaith sy'n berchen ar ba benderfyniad.** Trefniant cyffredin yw i'r cerdyn sgorio cytbwys neu gyfwerth ddal yr ychydig fesurau y mae arweinwyr yn eu hadolygu, i OKRs ddal y gwelliannau y mae tîm wedi'u dewis y chwarter hwn, ac i CSFau a KPIau ddisgrifio iechyd rhedeg arfer. Ysgrifennwch y trefniant hwn yn y gofrestr metrigau fel bod gan bob rhif un diffiniad ac un perchennog.

### Defnyddiwch OKRs yn dda

**6. Ysgrifennwch amcanion fel canlyniadau, a chanlyniadau allweddol fel tystiolaeth.** Mae amcan megis "Mae defnyddwyr yn cael eu problemau wedi'u datrys heb ein herlid" yn ganlyniad. Mae canlyniad allweddol megis "mae'r canolrif amser i ddiweddariad cyntaf defnyddiol yn disgyn o [gwerth cyfredol] i [gwerth targed]" yn dystiolaeth. Mae canlyniadau allweddol sy'n darllen fel tasgau ("lansio porth newydd") yn weithgareddau, nid canlyniadau. Os na allwch ddweud beth fyddai'n newid i ddefnyddiwr, nid yw'r canlyniad allweddol wedi'i orffen.

**7. Cadwch OKRs ar lefel tîm a gwasanaeth.** Mae eu gosod ar gyfer unigolion yn tueddu i'w troi'n rhestrau tasgau ac yn fewnbynnau adolygiad perfformiad, ac yn gwahodd y chwarae'r system y mae cyfraith Goodhart yn ei ragfynegi. Gadewch i dîm ysgrifennu ei ganlyniadau allweddol ei hun yn agored, a gadewch i dimau weld rhai ei gilydd. Osgowch raeadrau lle mae'n rhaid i bob lefel ailddatgan y lefel uwchben.

**8. Trinwch y sgôr fel sgwrs, nid gradd.** Mae timau sy'n trin sgôr perffaith fel y nod yn ysgrifennu canlyniadau allweddol swil. Mae dosbarthiad sgôr sy'n clystyru ar y brig yn awgrymu sandbagio, ac un sy'n clystyru ar y gwaelod yn awgrymu bod y targedau'n ffantasi. Adolygwch yr ymlediad bob chwarter, a gofynnwch beth ddysgodd y tîm o bob methiant.

### Defnyddiwch gardiau sgorio, CSFau a KPIau yn dda

**9. Diffiniwch CSFau cyn KPIau.** Datganiad o'r hyn y mae'n rhaid iddo fod yn wir yw ffactor llwyddiant critigol, megis "gall defnyddwyr ddod o hyd i'r erthygl hunanwasanaeth gywir a'i defnyddio." Yna mae KPI yn dangos a yw'n wir. Mae dechrau gyda'r KPI yn eich gwahodd i gyfrif yr hyn sy'n hawdd ei gyfrif. Gofynnwch ar gyfer pob CSF, "pe bai hyn yn peidio â bod yn wir, pa mor gyflym fyddem yn sylwi, ac o beth?" Yr ateb yw'r KPI.

**10. Defnyddiwch bersbectifau'r cerdyn sgorio i atal golwg unochrog.** Y pedwar persbectif clasurol yw ariannol, cwsmer, proses fewnol, a dysgu a thwf. Mae sefydliadau gwasanaeth yn aml yn eu hailenwi, er enghraifft cost, profiad defnyddwyr, iechyd gweithredol a galluogrwydd. Yr hyn sy'n bwysig yw bod gan bob persbectif o leiaf un mesur â gwerth cyfredol, a bod dirywiad mewn un yn cael ei ddarllen wrth ymyl y lleill (gweler pwnc 6.5, Sylweddoli gwerth a chanlyniadau busnes).

**11. Cysylltwch strategaeth â mesurau gyda map syml.** Mae [map strategaeth](https://en.wikipedia.org/wiki/Strategy_map) yn tynnu saethau o alluogrwydd i broses i gwsmer i ganlyniadau ariannol. Mae'n ddefnyddiol ar gyfer sgwrs ac yn wael fel cyfrifiannell. Tynnwch ef, dadleuwch ynghylch y saethau, ac yna dewiswch ychydig o fesurau. Peidiwch â cheisio gwneud y diagram yn fanwl gywir yn feintiol.

**12. Adolygwch fframweithiau ar galendr.** Gosodwch adolygiad chwarterol lle mae'r tîm yn gofyn am bob nod, canlyniad allweddol a KPI a yw'n dal i fod yn bwysig ac a yw'n dal i symud pobl i'r gweithredu cywir. Ymddeolwch yr hyn nad yw'n gwasanaethu mwyach, a chofnodwch y rheswm. Mae metrigau sy'n goroesi eu nodau yn dod yn fetrigau gwagedd.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Olrheiniadwyedd nodau | Ysgrifennu nod a chwestiwn ar ôl i'r metrig fodoli eisoes, i wneud i'r cofnod edrych yn gyflawn; nodau amwys sy'n cyfiawnhau unrhyw fetrig | Samplo pum cofnod bob chwarter a gofyn a allai'r cwestiwn fod wedi arwain at fetrig gwahanol; gwirio bod y gynulleidfa a'r penderfyniad wedi'u henwi |
| Dosbarthiad sgôr canlyniadau allweddol | Ysgrifennu canlyniadau allweddol hawdd fel bod sgorau'n clystyru ger 1.0; ailsgorio'n hael; gollwng canlyniadau allweddol sy'n mynd yn wael heb gofnodi pam | Cyfrif canlyniadau allweddol a ollyngwyd gyda'u rhesymau; cymharu canlyniadau allweddol â chanlyniadau'r cyfnod blaenorol; adolygu'r uchelgais canolrif gyda'r arweinyddiaeth |
| Cwmpas persbectif | Ychwanegu mesur tocyn at bersbectif fel ei fod yn cyfrif fel un dan sylw; dewis mesurau na allant symud | Gwirio bod pob mesur persbectif wedi newid gwerth yn y flwyddyn ddiwethaf a bod penderfyniad ysgrifenedig ynghlwm |
| Oedran adolygu dangosydd | Cofnodi adolygiad heb ddarllen y dangosydd; newid y dyddiad yn unig | Gofyn am ganlyniad ysgrifenedig (cadw, newid, ymddeol) gyda phob adolygiad, a samplo'r log |
| Cwmpas CSF-i-KPI | Neilltuo KPI nad yw'n gysylltiedig â'r CSF i gyrraedd cwmpas llawn; dewis KPI na all ddatgelu methiant | Gofyn am bob pâr pa ddarlleniad fyddai'n dangos bod y CSF yn methu; chwilio am KPIau sydd byth wedi bod yn goch |

Darlleniad iach yw un lle mae nodau'n newid pan fydd y byd yn newid, ychydig o ganlyniadau allweddol yn cael eu methu am resymau datganedig, a nifer y metrigau a adroddir yn disgyn neu'n gyson yn hytrach na thyfu. Os yw popeth yn wyrdd, sgorau'n clystyru ar y brig, ac na all neb enwi metrig a ymddeolwyd eleni, mae'r fframwaith wedi dod yn addurn.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Nod-Cwestiwn-Metrig | Yn clymu pob metrig wrth reswm; hawdd ei esbonio; yn gweithio ar raddfa tîm | Angen sesiwn wedi'i hwyluso; gall ddod yn ymarfer papur; yn dweud ychydig am flaenoriaeth ar draws nodau |
| OKRs | Canolbwyntio chwarter ar ychydig o ganlyniadau; gweladwy ar draws timau; yn gweddu i gylchoedd cynllunio byr | Hawdd ysgrifennu canlyniadau allweddol fel tasgau; gellir chwarae sgorau; mae OKRs unigol yn pylu i adolygiad perfformiad |
| Cerdyn sgorio cytbwys | Rhoi golwg grwn i arweinwyr; cysylltu strategaeth â gweithrediadau | Trwm i'w gynnal; gall persbectifau ddod yn flychau i'w llenwi; araf i adlewyrchu newid |
| CSFau a KPIau | Cyfarwydd mewn arfer ITIL; yn gweddu'n dda i adrodd ar wasanaeth sy'n rhedeg | Hawdd drifftio i KPIau gwagedd; mae dangosyddion yn mynd yn hen heb adolygu |
| Dim fframwaith | Ysgafn a chyflym ar gyfer tîm bach iawn | Mae metrigau'n cronni heb reswm; mae dadleuon am beth i'w fesur yn ailadrodd |
| Sawl fframwaith gyda'i gilydd | Mae pob penderfyniad yn cael yr offeryn sy'n gweddu | Diffiniadau dyblyg; dryswch ynghylch pa rif sy'n awdurdodol |

Dewiswch bwysau'r fframwaith i gyd-fynd â'r fantol. Mae gwasanaeth mewnol bach angen nod, tri chwestiwn ac ychydig o fetrigau a ddelir ar dudalen. Gall gwasanaeth a gyflenwir o dan gontract fod angen KPIau wedi'u diffinio i lefel cytundeb lefel gwasanaeth (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa nod y mae pob un o'n metrigau a adroddir yn ei wasanaethu, a phwy fyddai'n sylwi pe baem yn rhoi'r gorau i'w adrodd?**
Rhestrwch y metrigau ar fwrdd ac ysgrifennwch y nod wrth ymyl pob un. Lle mae'r nod ar goll, gofynnwch pwy ofynnodd am y metrig a pham. Bydd rhai yn troi allan i fod wedi'u hetifeddu o brosiect cynharach a gellir eu hymddeol. Dylai'r hwylusydd drin metrig heb nod fel darganfyddiad arferol, nid methiant.

**2. Pe baem ond yn gallu ateb tri chwestiwn am ein gwasanaeth, pa rai fyddent?**
Mae hyn yn gorfodi blaenoriaethu cwestiynau cyn metrigau. Gadewch i bob person ysgrifennu tri, yna eu clystyru. Cymharwch y clwstwr â'r dangosfwrdd sydd gan y tîm ar hyn o bryd. Y bylchau rhwng y ddau fel arfer yw allbwn mwyaf defnyddiol y sesiwn.

**3. Pa rai o'n canlyniadau allweddol sy'n disgrifio canlyniad i ddefnyddwyr, a pha rai sy'n disgrifio gwaith yr ydym yn bwriadu ei wneud?**
Darllenwch bob canlyniad allweddol yn uchel a gofynnwch a fyddai defnyddiwr yn sylwi pe bai'n cael ei gyflawni. Os yw'r ateb yn na, ailysgrifennwch ef fel canlyniad neu ei symud i'r cynllun. Gall yr hwylusydd sôn bod tasgau'n iawn, ond maent yn perthyn mewn ôl-groniad. Gorffennwch drwy gytuno ar un canlyniad allweddol i'w ailysgrifennu'r chwarter hwn.

**4. Ble mae ein pedwar persbectif cerdyn sgorio yn anghytuno, a beth mae hynny'n ei ddweud wrthym?**
Gofynnwch i'r grŵp chwilio am gyfnod diweddar pan wellodd un persbectif tra gwaethygodd un arall, megis cost yn disgyn tra bod profiad yn gostwng. Trafodwch yr achos ac a welodd unrhyw un hynny'n dod. Mae hyn yn adeiladu'r arferiad o ddarllen mesurau gyda'i gilydd. Cofnodwch unrhyw bersbectif heb fesur, a phenderfynwch a ddylid ychwanegu un neu ddweud yn blaen nad yw o fewn cwmpas.

**5. Ar gyfer pob ffactor llwyddiant critigol, pa ddarlleniad fyddai'n dweud wrthym ei fod yn methu?**
Dewiswch ddau CSF ac enwch y KPI, yna gofynnwch pa werth fyddai'n sbarduno sgwrs. Os na all y tîm ddweud, nid yw'r KPI yn gwneud ei waith. Chwiliwch am KPIau nad ydynt erioed wedi newid lliw, sydd fel arfer yn arwydd o drothwy a osodwyd yn rhy llac. Dylai'r hwylusydd ofyn beth fyddai ffordd chwarae'r system y KPI.

**6. Pa fframwaith ddylai fod yn berchen ar ba benderfyniad, a ble ydym ni ar hyn o bryd yn diffinio'r un rhif ddwywaith?**
Olrheiniwch un metrig, megis amser datrys digwyddiadau, drwy bob adroddiad lle mae'n ymddangos. Cymharwch y diffiniadau. Mae gwahaniaethau mewn clociau neu eithriadau yn gyffredin ac yn aml yn esbonio dadleuon rhwng timau. Cytunwch ar un perchennog ac un diffiniad, a'i gofnodi yn y gofrestr.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n cwrdd â fframweithiau yn bennaf fel OKRs ac, os ydynt yn lwcus, GQM. Mae tîm yn cael y gwerth mwyaf pan fydd yn ysgrifennu ei nodau a'i ganlyniadau allweddol ei hun, wedi'u cysylltu â'r hyn y mae ei ddefnyddwyr ei angen, a phan fydd yn cadw'r mesurau gweithio ar wahân i'r rhai y mae arweinwyr yn eu gweld. Dylai tîm fod yn wyliadwrus o ganlyniadau allweddol sy'n gwobrwyo allbwn, megis pwyntiau stori neu ryddhadau, oherwydd eu bod yn gwahodd yr ymddygiadau yr oedd y fframweithiau i fod i'w hatal (gweler pwnc 1.3, Canlyniadau yn hytrach nag allbwn: dewis beth i'w fesur).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau'n cwrdd â fframweithiau yn bennaf fel CSFau a KPIau o fewn arferion ITIL, ynghyd â thargedau lefel gwasanaeth y cytunwyd arnynt gyda chwsmeriaid. Maent yn elwa o ddiffinio'r CSF mewn iaith blaen cyn dewis y KPI, o adrodd canraddau ar gyfer mesurau amser, ac o gadw mesurau dibynadwyedd megis dangosyddion ac amcanion lefel gwasanaeth wrth ymyl profiad defnyddwyr (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau). Dylent hefyd wrthsefyll y demtasiwn i gadw KPIau a osodwyd flynyddoedd yn ôl ac nad ydynt bellach yn ymwneud â sut y defnyddir y gwasanaeth.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn dewis y fframweithiau, fel arfer drwy ofyn am gerdyn sgorio neu am OKRs, ac mae'r hyn a wnânt â'r rhifau yn penderfynu sut mae'r fframweithiau'n ymddwyn. Mae arweinydd sy'n cosbi canlyniad allweddol a fethwyd yn dysgu timau i ysgrifennu rhai hawdd. Mae arweinydd sy'n gofyn beth ddysgodd y tîm yn eu dysgu i ysgrifennu rhai gonest. Dylai cyrff llywodraethu ddisgwyl cofrestr metrigau, nifer fach o fesurau a adroddir, ac adolygiad rheolaidd o a yw'r fframwaith ei hun yn gweithio (gweler pwnc 11.4, Model aeddfedrwydd ar gyfer rhaglenni metrigau).

### Cwsmeriaid a defnyddwyr

Anaml y mae cwsmeriaid a defnyddwyr yn gweld y fframwaith, dim ond ei effeithiau. Mae un wedi'i ddylunio'n dda yn ymddangos fel gwasanaethau sy'n gwella yn y ffyrdd y gofynnwyd amdanynt ac fel adrodd gonest am yr hyn nad yw wedi gwella. Mae un gwael yn ymddangos fel adroddiadau gwyrdd nad ydynt yn cyd-fynd â phrofiad. Cynhwyswch safbwynt defnyddiwr ym mhob nod, a gadewch i adborth defnyddwyr eistedd ym mhersbectif cwsmer y cerdyn sgorio ochr yn ochr â'r rhifau gweithredol (gweler pwnc 6.2, Cytundebau lefel profiad).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg platfform cymorth cwsmeriaid a phorth hunanwasanaeth gyda sawl tîm cynnyrch a grŵp gweithrediadau gwasanaeth bach. Mae'r holl rifau yn enghreifftiol.

Mae'r arweinyddiaeth yn gofyn am gerdyn sgorio cytbwys ac, ar wahân, am OKRs chwarterol. O fewn chwarter mae gan y tîm 31 o fesurau a adroddir, ac ni all neb ddweud pam mae hanner ohonynt yn bodoli. Mae perchennog y gwasanaeth yn cynnal sesiwn hanner diwrnod gan ddefnyddio GQM ar un nod: "Gwella eglurder cymorth i gwsmeriaid na allant gwblhau taliad, o safbwynt y cwsmer."

Mae'r sesiwn yn cynhyrchu pedwar cwestiwn. A yw cwsmeriaid yn dod o hyd i'r erthygl gymorth gywir? A oes angen iddynt gysylltu â'r cymorth ar ôl ei darllen? Pa mor hir y mae problem taliad yn ei gymryd i'w datrys pan fyddant yn cysylltu â'r cymorth? A ydynt yn teimlo bod yr ateb yn glir? O'r 31 mesur, mae naw yn mapio i'r cwestiynau hyn. Mae angen tri newydd: llwyddiant chwilio erthyglau, cyfradd cysylltu ar ôl gweld erthygl, ac arolwg un cwestiwn ar ôl datrys. Mae'r 22 sy'n weddill wedi'u nodi i'w hymddeol, gyda chytundeb y perchennog.

Ysgrifennir yr OKR ar gyfer y chwarter fel canlyniad. Yr amcan yw "Mae cwsmeriaid yn datrys problemau taliad heb ein herlid." Y tri chanlyniad allweddol yw'r canolrif a'r 90fed ganradd amser i ddatrys, y gyfradd cysylltu ar ôl gweld erthyglau, a chanlyniad yr arolwg ar eglurder. Mae'r cerdyn sgorio yn cadw'r persbectif cwsmer yn pwyntio at yr un mesurau, felly mae un diffiniad, nid dau.

Hanner ffordd drwy'r chwarter, mae risg chwarae'r system yn ymddangos. Mae'r gyfradd cysylltu ar ôl gweld erthyglau yn gostwng yn sydyn, sy'n edrych fel llwyddiant. Mae adolygydd yn samplo 20 sesiwn ac yn canfod bod ailgynllunio wedi symud y ddolen "cysylltwch â ni" dair sgrin yn ddyfnach. Mae llai o bobl yn cyrraedd y cymorth, ac mae'r arolwg yn dangos sgorau eglurder is. Mae'r tîm yn ychwanegu gadael chwiliad a sylwadau'r arolwg fel rheiliau gwarchod ac yn adfer y ddolen.

Ar ddiwedd y chwarter mae sgorau'r canlyniadau allweddol yn 0.6, 0.8 a 0.5, y mae'r tîm yn eu cyflwyno fel y maent. Mae'r arweinyddiaeth yn gofyn beth ddysgodd y tîm, nid pam nad oedd y sgorau'n uwch. Y penderfyniad, a gofnodir yn y log penderfyniadau, yw cadw'r amcan am ail chwarter, disodli'r gyfradd cysylltu â chyfran y cwsmeriaid sy'n datrys y broblem ar yr ymweliad cyntaf, ac ymddeol chwe mesur cerdyn sgorio arall.

## Y golwg fesul sector

**Busnes newydd.** Fel arfer mae busnes newydd angen nod, tri chwestiwn ac ychydig o fetrigau, a ddelir ar un dudalen. Mae OKRs yn gyffredin ac yn gweithio'n dda pan gânt eu hysgrifennu gan y tîm a fydd yn gwneud y gwaith. Gwrthsefyllwch ychwanegu cerdyn sgorio nes bydd buddsoddwyr neu gwsmeriaid yn gofyn am un.

**Busnes bach.** Mae adnoddau'n denau, felly dewiswch un fframwaith a'i ddefnyddio'n ysgafn. Mae CSFau a KPIau a ysgrifennir ar gyfer y ddau neu dri pheth na all y busnes fforddio eu cael yn anghywir yn aml yn ddigon. Ffafriwch adborth uniongyrchol gan gwsmeriaid dros sgorio cymhleth.

**Menter fawr.** Fel arfer mae sawl fframwaith yn cyd-fodoli, sy'n gwneud perchnogaeth diffiniadau yn brif her. Cadwch gofrestr, dynodwch pa fframwaith sy'n dal pa rif, a chynhaliwch adolygiad blynyddol o'r trefniant cyfan. Gwyliwch rhag rhaeadrau sy'n gorfodi pob tîm i ailddatgan amcanion corfforaethol yn eu geiriau eu hunain.

**Llywodraeth a'r sector cyhoeddus.** Mae adrodd gorfodol a lefelau gwasanaeth cytundebol yn gweithredu fel KPIau sefydlog. Triniwch hwy fel rhai a roddwyd, a defnyddiwch GQM neu OKRs ar gyfer y gwaith gwella o'u cwmpas. Mae atebolrwydd cyhoeddus yn codi'r fantol ar rif camarweiniol, felly cyhoeddwch ddiffiniadau a byddwch yn agored am newidiadau (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Amser yw cost fframwaith yn bennaf: sesiwn wedi'i hwyluso i ddylunio mesurau, adolygiad chwarterol byr, a chynnal cofrestr. Mae meddalwedd ar gyfer OKRs neu gardiau sgorio ar gael, ond mae dogfen neu daenlen yn aml yn ddigon ar raddfa fach. Cost fwy yw sylw'r arweinyddiaeth, gan fod fframwaith nad yw arweinwyr yn ei ddefnyddio yn dod yn adrodd er ei fwyn ei hun.

Daw'r elw o lai o fesurau, gwell. Mae timau sy'n gallu dweud pam mae pob rhif yn bodoli yn treulio llai o amser yn cynhyrchu adroddiadau nad oes neb yn eu darllen, yn dadlau llai am ddiffiniadau, ac yn sylwi'n gynt pan fydd mesur wedi peidio â hysbysu penderfyniadau. Yn hytrach na dyfynnu ffigur, mesurwch eich llinellau sylfaen eich hun: nifer y metrigau a adroddir, y gyfran â nod wedi'i gofnodi, a'r amser a dreulir yn paratoi adroddiadau cylchol, cyn ac ar ôl mabwysiadu'r fframwaith. Mae triniaeth lawnach o elw ar fuddsoddiad mewn man arall (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Metrigau cyn nodau.** Mae dechrau o'r data sydd gennych yn cynhyrchu dangosfwrdd o'r hyn sy'n hawdd ei gyfrif. Ysgrifennwch y nod a'r cwestiwn yn gyntaf, yna gwelwch pa ddata sy'n gweddu.
- **OKRs fel rhestrau tasgau.** Mae canlyniadau allweddol sy'n enwi gweithgareddau yn gwneud i bob chwarter edrych yn brysur ac yn dweud dim wrthych am ganlyniadau. Ailysgrifennwch bob un fel tystiolaeth y byddai defnyddiwr yn sylwi arni.
- **OKRs a chardiau sgorio fel targedau unigol.** Maent yn gwahodd chwarae'r system ac yn digalonni cymorth rhwng pobl. Cadwch hwy ar lefel tîm a gwasanaeth.
- **Cerdyn sgorio â phersbectifau gwag neu docyn.** Nid yw llenwi pob blwch â rhywbeth yr un peth â gweld y cyfan. Gofynnwch am werth cyfredol a phenderfyniad ar gyfer pob un.
- **KPIau nad ydynt byth yn newid.** Os yw dangosydd wedi bod yn wyrdd ers blynyddoedd, mae ei drothwy yn debygol o fod yn anghywir neu nid yw'n mesur dim a all fethu. Gofynnwch pa ddarlleniad fyddai'n dangos problem, yna ailosodwch ef.
- **Fframweithiau wedi'u pentyrru heb berchnogaeth.** Mae tri fframwaith sy'n diffinio'r un mesur mewn tair ffordd yn creu dadleuon. Enwch berchennog ac un diffiniad.
- **Gwobrwyo'r sgôr.** Os yw sgôr OKR perffaith yn ennill canmoliaeth neu dâl, bydd timau'n ysgrifennu canlyniadau allweddol hawdd. Gwobrwywch ddysgu gonest a chwestiynau da.
- **Fframwaith fel seremoni.** Nid yw diwrnod o weithdai sy'n cynhyrchu poster wedi'i lamineiddio yn newid dim. Cadwch yr allbwn yn y gofrestr a'i adolygu ar galendr.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Nodau a chwestiynau | Metrigau a ddewiswyd am fod y data'n bodoli | Mae rhai timau'n ysgrifennu nodau cyn metrigau | Fformat nod a chwestiwn cyffredin; mae pob metrig a adroddir yn olrhain i un | Adolygir olrheiniadwyedd ac mae bylchau'n arwain at waith wedi'i ariannu | Cyd-ysgrifennir nodau gyda chwsmeriaid a chyflenwyr a'u diwygio wrth i amodau newid |
| Defnydd o fframweithiau | Ad hoc; dim fframwaith a nodir | Mae timau'n mabwysiadu fframweithiau gwahanol gyda geirfa wahanol | Mae trefniant ysgrifenedig yn dweud pa fframwaith sy'n berchen ar ba benderfyniad | Adolygir canlyniadau'r fframwaith, a gollyngir rhannau nas defnyddir | Alinir fframweithiau ar draws timau a chyflenwyr gydag un set o ddiffiniadau |
| Dangosyddion a sgorio | KPIau wedi'u gosod unwaith ac heb eu hadolygu byth | Mae gan rai KPIau berchnogion a throthwyon | Mae gan KPIau a chanlyniadau allweddol berchnogion, diffiniadau a rheiliau gwarchod | Tueddir sgorau a dangosyddion a'u hadolygu am chwarae'r system bob chwarter | Ymddeolir ac amnewidir dangosyddion yn rheolaidd, gyda newidiadau wedi'u cysylltu â chanlyniadau |
| Defnydd mewn penderfyniadau | Cynhyrchir adroddiadau a'u hanwybyddu | Mae arweinwyr yn gofyn am rifau pan fydd rhywbeth yn mynd o'i le | Mae adolygiadau'n cofnodi penderfyniadau y dylanwadodd rhifau arnynt | Cwestiynau dysgu yn safonol; trafodir targedau a fethwyd heb fai | Mae cynllunio gwelliant ar draws timau yn defnyddio'r un nodau a mesurau a rennir |

## Rhestr wirio

- [ ] Mae pob metrig a adroddir yn olrhain i nod ysgrifenedig, cwestiwn a chynulleidfa a enwir.
- [ ] Mae cofrestr metrigau yn cofnodi pa fframwaith sy'n berchen ar bob metrig a'i un diffiniad.
- [ ] Ysgrifennir nodau gyda diben, pwnc a safbwynt.
- [ ] Mae pob canlyniad allweddol yn disgrifio canlyniad y byddai rhywun yn sylwi arno, nid tasg.
- [ ] Mae OKRs, mesurau cerdyn sgorio a KPIau yn perthyn i dimau neu wasanaethau, nid unigolion.
- [ ] Mae gan bob ffactor llwyddiant critigol o leiaf un KPI cyfredol a darlleniad datganedig a fyddai'n dangos methiant.
- [ ] Mae gan bob persbectif cerdyn sgorio fesur â gwerth cyfredol.
- [ ] Mae gan bob metrig ffordd o chwarae'r system a rheilen warchod a enwir.
- [ ] Mae adolygiad chwarterol yn gofyn a yw pob nod, canlyniad allweddol a KPI yn dal i fod yn bwysig.
- [ ] Mae o leiaf un metrig neu ddangosydd wedi'i ymddeol neu ei ailgynllunio yn y flwyddyn ddiwethaf, gyda'r rheswm wedi'i gofnodi.

## Anogwyr AI

**Trowch nod yn gwestiynau a metrigau ymgeisiol.**

```text
Ein tîm yw [enw'r tîm], sy'n rhedeg [math o wasanaeth neu waith cyflawni] ar gyfer
[cynulleidfa]. Ein nod yw: [nod wedi'i ddatgan fel diben, pwnc a safbwynt]. Gan
ddefnyddio'r dull Nod-Cwestiwn-Metrig, cynigiwch dri i bump cwestiwn a fyddai'n
dangos a ydym yn cyflawni'r nod hwn. Ar gyfer pob cwestiwn, awgrymwch fetrigau
ymgeisiol y gallem eu diffinio, y math o ffynhonnell data y byddai ei angen
arnom, y ffordd debygol o chwarae'r system a rheilen warchod. Peidiwch â
dyfeisio gwerthoedd meincnod nac ystadegau. Rhestrwch eich rhagdybiaethau ac
unrhyw beth na allech ei benderfynu o'r hyn a roddais i chi.
```

**Adolygwch OKRs drafft.**

```text
Dyma ein hamcanion a'n canlyniadau allweddol drafft ar gyfer [cyfnod]: [gludwch
OKRs]. Ein tîm yw [enw'r tîm] a'n defnyddwyr yw [cynulleidfa]. Adolygwch bob
canlyniad allweddol a dywedwch wrthyf a yw'n disgrifio canlyniad neu weithgarwch,
a ellid ei fodloni heb helpu defnyddwyr, a pha reilen warchod fyddai'n dangos
hynny. Awgrymwch ailysgrifennu lle bo angen, gan ddefnyddio [dalfeydd] ar gyfer
unrhyw rifau y mae'n rhaid i ni eu cyflenwi ein hunain. Peidiwch â dyfeisio
targedau na gwerthoedd meincnod. Rhestrwch eich rhagdybiaethau a chwestiynau
y dylwn eu hateb.
```

**Mapiwch ffactorau llwyddiant critigol i KPIau.**

```text
Ar gyfer yr arfer ITIL [enw'r arfer] yn ein sefydliad, sy'n gwasanaethu
[cynulleidfa], dyma'r ffactorau llwyddiant critigol yr ydym wedi'u drafftio:
[rhestr CSFau]. Cynigiwch KPIau ar gyfer pob un y gellid eu casglu o [ffynonellau
data]. Ar gyfer pob KPI, nodwch ble mae'r cloc yn dechrau ac yn stopio os yw'n
fesur amser, pa ddarlleniad fyddai'n dangos bod y ffactor yn methu, a sut y
gellid ei chwarae. Peidiwch â nodi gwerthoedd meincnod na honiadau cydymffurfio.
Rhestrwch eich rhagdybiaethau.
```

**Archwiliwch gerdyn sgorio am gydbwysedd.**

```text
Mae gan ein cerdyn sgorio y mesurau hyn, wedi'u grwpio yn ôl persbectif: [gludwch
fesurau yn ôl persbectif]. Rydym yn [math o sefydliad]. Nodwch bersbectifau sy'n
denau, mesurau sy'n ymddangos yn dyblygu ei gilydd, a mesurau a allai symud mewn
ffordd sy'n cuddio problem mewn persbectif arall. Awgrymwch reiliau gwarchod a
mesurau i'w hymddeol. Peidiwch â dyfeisio ffigurau na ffynonellau. Rhestrwch eich
rhagdybiaethau a'r hyn na allech ei farnu o'r data a roddais i chi.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i ba bwnc sy'n berchen ar fetrig a'i reilen warchod pâr cyn ei osod mewn fframwaith.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig yn seiliedig ar fframwaith yn cario ei ddiffiniad, ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Mae fframwaith yn penderfynu pa fetrigau sy'n ennill lle, a'r rheol gyffredin yw dechrau o nod a chwestiwn, yna dewis y metrig.
- Mae Nod-Cwestiwn-Metrig yn gweddu i ddylunio mesurau ar gyfer un tîm, mae OKRs yn gweddu i ganolbwyntio chwarter, mae cardiau sgorio yn gweddu i olygon crwn i arweinwyr, ac mae CSFau gyda KPIau yn gweddu i weithredu arfer ITIL.
- Defnyddiwch y fframwaith ysgafnaf sy'n gweithio, a dywedwch pa un sy'n berchen ar ba rif.
- Gellir chwarae pob fframwaith, felly paru pob metrig â rheilen warchod ac adolygu'r set ar galendr.
- Cadwch fframweithiau ar lefel tîm a gwasanaeth, byth fel targedau unigol.
- Ymddeolwch nodau, canlyniadau allweddol a dangosyddion nad ydynt bellach yn hysbysu penderfyniadau.

## Cyfeiriadau a darllen pellach

1. Basili, V. R., Caldiera, G., and Rombach, H. D., "The Goal Question Metric Approach," in *Encyclopedia of Software Engineering*, Wiley, 1994.
2. Kaplan, R. S., and Norton, D. P., "The Balanced Scorecard: Measures That Drive Performance," *Harvard Business Review*, January-February 1992.
3. Kaplan, R. S., and Norton, D. P., *The Balanced Scorecard: Translating Strategy into Action*, Harvard Business School Press, 1996.
4. Doerr, J., *Measure What Matters: How Google, Bono, and the Gates Foundation Rock the World with OKRs*, Portfolio, 2018.
5. Grove, A. S., *High Output Management*, Random House, 1983.
6. Rockart, J. F., "Chief Executives Define Their Own Data Needs," *Harvard Business Review*, March-April 1979.
7. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly, 2016.
9. Axelos, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019. Summarized, not reproduced.
10. Wikipedia, [Victor Basili](https://en.wikipedia.org/wiki/Victor_Basili).
11. Wikipedia, [OKR](https://en.wikipedia.org/wiki/OKR).
12. Wikipedia, [Balanced scorecard](https://en.wikipedia.org/wiki/Balanced_scorecard).
13. Wikipedia, [Critical success factor](https://en.wikipedia.org/wiki/Critical_success_factor).
14. Wikipedia, [Key performance indicator](https://en.wikipedia.org/wiki/Key_performance_indicator).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
17. Wikipedia, [Strategy map](https://en.wikipedia.org/wiki/Strategy_map).
