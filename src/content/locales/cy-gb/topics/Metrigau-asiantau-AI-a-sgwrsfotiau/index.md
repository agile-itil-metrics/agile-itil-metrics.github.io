# Metrigau asiantau AI a sgwrsfotiau

**Dim ond pan fo problem y defnyddiwr wedi'i datrys ac yn aros wedi'i datrys y mae cynorthwyydd sgwrsio wedi helpu, felly mesurwch ddatrys wedi'i wirio, dychweliadau, ansawdd y trosglwyddiad at berson, a niwed gweithredoedd anghywir, a pheidiwch byth â gwobrwyo bot am gadw pobl draw oddi wrth gymorth.**

## Crynodeb a chymhelliant

Mae llawer o sefydliadau bellach yn gosod cynorthwyydd sgwrsio rhwng defnyddwyr a'r ddesg gwasanaeth, ac mae rhai yn rhoi'r gallu i asiantau AI weithredu: ailosod cyfrinair, archebu offer, ailgychwyn gwasanaeth, newid cyfluniad. Mae [sgwrsfot](https://en.wikipedia.org/wiki/Chatbot) yn gymhwysiad meddalwedd sy'n cynnal sgwrs, ac mae [cynorthwyydd rhithwir](https://en.wikipedia.org/wiki/Virtual_assistant) yn ychwanegu'r gallu i gyflawni tasgau ar ran y defnyddiwr. Y syniad ehangach o [asiant deallus](https://en.wikipedia.org/wiki/Intelligent_agent) yw system sy'n canfod amgylchedd ac yn cymryd camau tuag at nodau. Mae modelau iaith modern yn gwneud y systemau hyn yn llawer mwy galluog o sgwrs agored na'u rhagflaenwyr ar sail rheolau, ac roedd y rhaglen sgwrsio gyntaf, ELIZA Joseph Weizenbaum o'r 1960au, eisoes yn dangos pa mor barod yw pobl i briodoli dealltwriaeth i beiriant sydd ond yn cynhyrchu atebion credadwy.

Mae'r apêl yn amlwg. Mae defnyddwyr yn cael cymorth ar unrhyw awr heb aros. Mae timau'n gwario llai o amser ar geisiadau arferol. Mae [hunanwasanaeth](https://en.wikipedia.org/wiki/Self-service) wedi bod yn nod ITSM ers tro, ac mae symud i'r chwith, symud datrys i bwyntiau cynharach a rhatach, yn syniad craidd y ddesg gwasanaeth (gweler pwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio). Y broblem fesur yw bod y rhifau amlwg yn gwobrwyo'r pethau anghywir. Mae bot sy'n gorffen sgwrs yn cyfrif fel un sydd wedi'i "gyfyngu," pa un a gafodd y defnyddiwr help neu a roddodd y gorau iddi. Mae bot nad yw byth yn cynnig person yn mwyafu cyfyngu. Mae bot sy'n rhoi ateb anghywir yn hyderus yn cynhyrchu methiant tawel sy'n dangos fel cyswllt blin ddyddiau'n ddiweddarach.

Mae dau fath o system angen mesurau gwahanol.

- **Mae cynorthwywyr sgwrsio** yn ateb cwestiynau, yn tywys defnyddwyr, ac yn casglu gwybodaeth. Eu risg yw atebion anghywir neu ddi-fudd a dal defnyddwyr mewn dolenni. Mae mesurau yn canolbwyntio ar ddatrys, cywirdeb, a'r llwybr at berson.
- **Mae asiantau sy'n gweithredu** yn newid pethau yn y byd: cyfrifon, systemau, tocynnau, arian. Eu risg yw gweithred anghywir gyda chanlyniadau go iawn. Mae mesurau yn canolbwyntio ar gywirdeb gweithredoedd, gwrthdroadwyedd, ffiniau caniatâd, a llwybrau archwilio. Mae'r defnyddiau hyn yn galw am lywodraethu cryfach ac, yn aml, cymeradwyaeth ddynol ar gyfer camau canlyniadol (gweler pwnc 10.5, Metrigau llywodraethu a risg AI).

Mae sawl mater dylunio yn siapio'r hyn rydych chi'n ei fesur.

- **Gonestrwydd ynghylch yr hyn y mae'r defnyddiwr yn siarad ag ef.** Mae gan lawer o awdurdodaethau, neu maent yn datblygu, ddyletswyddau i ddweud wrth bobl pan fyddant yn rhyngweithio â system AI, ac ym mis Hydref 2026 mae'r rheolau hyn yn esblygu, felly gwiriwch beth sy'n berthnasol i chi. Arfer da yw dweud hynny'n blaen beth bynnag.
- **Ffordd allan.** Rhaid i ddefnyddwyr allu cyrraedd person heb frwydr. Mae bot sy'n cuddio'r llwybr at fod dynol yn [batrwm tywyll](https://en.wikipedia.org/wiki/Dark_pattern), dyluniad sy'n twyllo neu'n dal defnyddwyr i ganlyniadau na fyddent yn eu dewis.
- **Hygyrchedd.** Rhaid i ryngwynebau sgwrsio weithio i bobl sy'n defnyddio technoleg gynorthwyol, y rhai â gallu iaith cyfyngedig, a'r rhai sydd angen iaith neu sianel arall.
- **Penderfyniadau awtomataidd.** Pan fo allbwn cynorthwyydd yn effeithio ar hawliau neu fynediad person, mae pwnc [gwneud penderfyniadau awtomataidd](https://en.wikipedia.org/wiki/Automated_decision-making) a'r dyletswyddau o'i gwmpas yn berthnasol. Cadwch benderfyniadau o'r fath gyda phobl, neu gyda gwarchodaeth gref.

Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn fyw yma: os yw cyfyngu neu ddargyfeirio yn darged, y ffordd rataf i'w fodloni yw gwneud y bod dynol yn anoddach i'w gyrraedd (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Mae'r mesurau isod yn rhoi datrys a chanlyniad y defnyddiwr yn gyntaf.

## Egwyddorion allweddol

- **Datrys yw'r mesur, nid cyfyngu.** Nid yw sgwrs a ddaeth i ben yn broblem a ddatryswyd.
- **Gwiriwch, a gwiriwch am ddychweliad.** Cyfrwch gyswllt fel un a ddatryswyd dim ond pan fo'r defnyddiwr yn cadarnhau neu'n peidio â dod yn ôl.
- **Darparwch ffordd at berson bob amser.** Gwnewch y llwybr yn hawdd, yn gyflym, ac yn weladwy, a chariwch y cyd-destun ar draws.
- **Byddwch yn onest am y system.** Dywedwch ei fod yn AI, beth y gall ei wneud, a beth na all.
- **Cyfyngwch ar yr hyn y caiff asiantau ei wneud.** Rhowch y fraint leiaf, mynnwch gymeradwyaeth ar gyfer gweithredoedd canlyniadol, a chadwch lwybr archwilio.
- **Mesurwch ansawdd atebion drwy samplu.** Gall atebion rhugl fod yn anghywir.
- **Gwrandewch ar ddefnyddwyr ac ar y staff sy'n codi'r darnau.** Maent yn gweld yr hyn y mae'r metrigau yn ei golli.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd datrys wedi'i wirio | Cyfran sgyrsiau'r bot lle cadarnhaodd y defnyddiwr fod y mater wedi'i ddatrys, neu na ddychwelodd o fewn cyfnod a nodwyd | sgyrsiau gyda datrys wedi'i gadarnhau neu ddim cyswllt dychwelyd o fewn 7 diwrnod / sgyrsiau a ddechreuodd gyda bwriad y gellir ei ddatrys | canran | Logiau sgyrsiau, cadarnhad defnyddwyr, data tocynnau a chysylltiadau | Desg gwasanaeth; rheoli gwybodaeth | Canlyniad gweithredol i'r defnyddiwr | Wythnosol |
| Cyfradd cyswllt dychwelyd | Cyfran y sgyrsiau a ddaeth i ben gan y bot a ddilynwyd gan gyswllt am yr un mater drwy unrhyw sianel | sgyrsiau a ddilynwyd gan gyswllt cysylltiedig o fewn 7 diwrnod / sgyrsiau a ddaeth i ben heb drosglwyddo | canran | Logiau sgyrsiau wedi'u huno â chofnodion tocynnau a chysylltiadau | Desg gwasanaeth; rheoli digwyddiadau | Diffygion a ddihangodd | Wythnosol |
| Cyflawnrwydd cyd-destun trosglwyddo | Cyfran y trosglwyddiadau at berson lle'r oedd gan y person y wybodaeth angenrheidiol heb ofyn i'r defnyddiwr ailadrodd | trosglwyddiadau a samplwyd a farnwyd yn gyflawn gan yr asiant derbyn / trosglwyddiadau a samplwyd | canran | Trosglwyddiadau a samplwyd, adborth asiantau | Desg gwasanaeth; rheoli gwybodaeth | Cydweithio llyfn ar draws y ffin | Misol |
| Amser at berson | Yr amser o'r defnyddiwr yn gofyn am berson, neu'r bot yn penderfynu trosglwyddo, i berson yn cymryd drosodd | canolrif ac 85fed canradd munudau | munudau | Logiau sgyrsiau, data ciw | Desg gwasanaeth; rheoli digwyddiadau | Ymatebolrwydd pan fo'r defnyddiwr angen help | Wythnosol |
| Cywirdeb atebion | Cyfran atebion bot a samplwyd a farnwyd yn gywir, yn gyflawn, ac yn ddiogel gan adolygydd cymwys | atebion a farnwyd yn gywir / atebion a samplwyd | canran | Adolygu wedi'i samplu | Rheoli gwybodaeth; sicrwydd ansawdd | Diffiniad o orffen ar gyfer ateb | Misol |
| Boddhad ac ymdrech bot | Graddfa defnyddiwr o foddhad a rhwyddineb ar ôl sgwrs, gyda sylwadau | graddfeydd ffafriol / graddfeydd; graddfa ymdrech gymedrig | canran; pwyntiau graddfa | Arolwg byr ar ôl sgwrs | Desg gwasanaeth; profiad cwsmeriaid | Adborth ar feddalwedd sy'n gweithio | Wythnosol |
| Cyfradd gwrthdroi gweithredoedd asiant | Cyfran y gweithredoedd a gymerwyd gan asiant AI y bu'n rhaid eu cywiro, eu dadwneud, neu eu huwchgyfeirio | gweithredoedd a wrthdroiwyd neu a gywirwyd / gweithredoedd a gymerwyd, yn ôl math o weithred a dosbarth risg | canran | Log archwilio gweithredoedd, cofnodion newid | Galluogi newid; rheoli digwyddiadau | Ail-wneud a gwrthdroi | Wythnosol |

Diffiniwch y bwriadau y mae'r bot yn eu trin, ac eithriwch o gyfyngu y rhai y dylai bob amser eu trosglwyddo. Mae datrys wedi'i wirio yn cyfrif sgwrs dim ond os oedd y mater o fewn cwmpas ac y cadarnhaodd y defnyddiwr neu na ddangosodd gyswllt dychwelyd. Mae amser at berson yn dechrau ar gais y defnyddiwr, nid ar ddiwedd bwydlen. Barnir cywirdeb atebion yn erbyn y sylfaen wybodaeth a pholisi gan berson na adeiladodd y bot. Rhennir gwrthdroi gweithredoedd asiant yn ôl math o weithred a dosbarth risg, ac adroddir unrhyw weithred niweidiol ar wahân fel digwyddiad.

## Argymhellion

### Diffiniwch lwyddiant fel datrys

**1. Diffiniwch y bwriadau a'r canlyniad rydych ei eisiau.** Rhestrwch y problemau y dylai'r cynorthwyydd eu trin, megis ailosod cyfrinair, statws mynediad, cwestiynau sut-i, a'r canlyniad ar gyfer pob un: wedi'i ateb, wedi'i wneud, neu wedi'i drosglwyddo. Penderfynwch pa fwriadau y mae'n rhaid iddynt bob amser fynd at berson: cwynion, unrhyw beth sy'n cynnwys trallod, diogelwch, hawliau cyfreithiol, neu arian. Mae bot sy'n ceisio trin popeth yn methu'n wael ar yr ymylon.

**2. Mesurwch ddatrys wedi'i wirio a dychweliadau.** Gofynnwch i ddefnyddwyr ar y diwedd a yw eu mater wedi'i ddatrys, ac edrychwch hefyd am gysylltiadau cysylltiedig wedyn. Nid yw'r naill na'r llall yn ddigon ar ei ben ei hun: nid yw defnyddwyr sy'n rhoi'r gorau iddi yn ateb, ac mae rhai a gafodd help yn dal i ffonio. Gyda'i gilydd maent yn brasamcanu gwir ddatrys. Trinwch gyfradd cyswllt dychwelyd fel y brif reilen warchod ar gyfer unrhyw ffigur cyfyngu (gweler pwnc 3.1, Metrigau desg gwasanaeth).

**3. Osgowch gyfyngu fel targed.** Adroddwch gyfyngu fel ffigur disgrifiadol yn unig a bob amser wrth ymyl datrys wedi'i wirio, dychweliadau, a boddhad. Mae cyfyngu sy'n codi gyda dychweliadau sy'n codi yn golygu bod y bot yn troi pobl i ffwrdd. Peidiwch â gosod targed cyfyngu na chlymu perfformiad neb wrtho.

### Gwnewch y llwybr at berson yn hawdd ac yn dda

**4. Gadewch i ddefnyddwyr gyrraedd person ar unrhyw bwynt.** Darparwch ffordd glir, blaen i ofyn am fod dynol, a'i hanrhydeddu. Mesurwch amser at berson a chyfran y sgyrsiau lle gofynnodd defnyddwyr fwy nag unwaith. Profwch y llwybr eich hun yn rheolaidd. Lle nad oes person ar gael, dywedwch pryd y bydd un, a chynigiwch alwad yn ôl.

**5. Trosglwyddwch gyda'r cyd-destun.** Pan fo'r bot yn pasio sgwrs at berson, cynhwyswch y crynodeb, yr hyn a geisiwyd, geiriau'r defnyddiwr, a manylion perthnasol y cyfrif fel nad yw'r defnyddiwr yn ailadrodd ei hun. Gofynnwch i asiantau derbyn raddio a oedd y trosglwyddiad yn gyflawn, a samplwch y canlyniadau. Mae trosglwyddiadau gwael yn gwneud i ddefnyddwyr ymddiried llai yn y bot a'r gwasanaeth (gweler pwnc 9.3, Metrigau cydweithio a throsglwyddo).

**6. Dyluniwch ar gyfer pob defnyddiwr.** Profwch y cynorthwyydd gyda defnyddwyr sy'n defnyddio technoleg gynorthwyol, sy'n ysgrifennu mewn ieithoedd eraill, sydd ar frys neu mewn trallod, ac nad ydynt yn gyfforddus gyda'r dechnoleg. Cynigiwch sianeli eraill. Mesurwch ddatrys wedi'i wirio a boddhad yn ôl grŵp defnyddwyr lle mae'n ddiogel ac yn gyfreithlon gwneud hynny. Mae'r cyfartaleddau yn cuddio'r rhai y mae'r bot yn eu methu fwyaf.

### Gwiriwch ansawdd yr hyn y mae'n ei ddweud ac yn ei wneud

**7. Samplwch atebion am gywirdeb a diogelwch.** Bob mis, tynnwch sampl ar hap o sgyrsiau a gofynnwch i berson cymwys farnu'r atebion: cywir, cyflawn, diogel, a gonest am ansicrwydd. Cofnodwch wallau yn ôl math: hen, wedi'i ddyfeisio, oddi ar bolisi, neu wedi'i gamddeall. Bwydwch wallau i'r sylfaen wybodaeth a'r cyfluniad. Ychwanegwch brofion targedig ar gyfer pynciau sensitif, ac ar gyfer ymdrechion i wthio'r cynorthwyydd y tu allan i'w gwmpas.

**8. Cadwch y wybodaeth yn gyfredol.** Dim ond cystal â'r cynnwys a'r offer y mae'n tynnu arnynt yw cynorthwyydd. Cysylltwch wallau atebion ag erthyglau gwybodaeth, a mesurwch ffresni'r wybodaeth y mae'n ei defnyddio (gweler pwnc 3.6, Metrigau rheoli gwybodaeth). Lle mae'r system yn defnyddio nôl o sylfaen wybodaeth, cynhwyswch wiriad ei fod yn dyfynnu ei ffynonellau a bod y ffynonellau yn gywir.

**9. Byddwch yn onest â defnyddwyr.** Nodwch ar y dechrau eu bod yn siarad ag AI, a beth y gall ac na all ei wneud. Peidiwch â rhoi enw neu ddull dynol iddo sy'n awgrymu fel arall. Lle mae'n ansicr, dylai ddweud hynny a chynnig person. Gwiriwch y gyfraith berthnasol ar ddatgelu.

### Llywodraethwch asiantau sy'n gweithredu

**10. Dosbarthwch weithredoedd yn ôl risg a gosodwch ganiatâd i gyfateb.** Ar gyfer pob gweithred y gall asiant ei chymryd, diffiniwch ei dosbarth risg: gwybodaethol, gwrthdroadwy ac effaith isel, neu ganlyniadol. Rhowch y fraint leiaf sydd ei hangen. Mynnwch gymeradwyaeth ddynol ar gyfer gweithredoedd canlyniadol. Cadwch lwybr archwilio o bob gweithred gyda'r rheswm, y defnyddiwr, a'r canlyniad. Mae'r rheolaethau hyn yn cysylltu â'r mesurau newid a diogelwch mewn rhannau cynharach (gweler pwnc 8.1, Metrigau digwyddiadau diogelwch a gwendidau, a phwnc 8.2, Metrigau risg a rheolaethau).

**11. Mesurwch gywirdeb gweithredoedd a gwrthdroadwyedd.** Olrheiniwch y gyfradd gwrthdroi yn ôl math o weithred, ac adolygwch bob gweithred niweidiol fel digwyddiad, yn ddi-fai. Profwch asiantau mewn amgylchedd diogel cyn rhoi mynediad, ac ail-brofwch pan fo'r model neu'r offer yn newid. Gall fersiwn model newydd newid ymddygiad, felly trinwch ef fel newid sydd angen rheolaeth (gweler pwnc 4.3, Metrigau galluogi newid).

**12. Gwrandewch ar y bobl sy'n codi'r darnau.** Mae staff y ddesg gwasanaeth yn gweld canlyniadau methiannau'r bot: defnyddwyr blin, cysylltiadau dro ar ôl tro, a llanast i'w glirio. Gofynnwch iddynt yn rheolaidd beth mae'r bot yn ei gael yn anghywir a beth sy'n ei wneud yn anoddach. Mae eu hadborth a sylwadau'r defnyddwyr yn dystiolaeth na all unrhyw fetrig ei chipio'n llawn, a dylai siapio'r rownd nesaf o newidiadau.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfradd datrys wedi'i wirio | Cyfrif unrhyw ddiwedd sgwrs fel un a ddatryswyd; gofyn cwestiynau cadarnhau arweiniol | Diffinio cadarnhad yn niwtral; cyfradd cyswllt dychwelyd; samplu sgyrsiau |
| Cyfradd cyswllt dychwelyd | Mesur drwy un sianel yn unig; ffenestri byr | Uno pob sianel; defnyddio ffenestr hirach fel gwiriad; samplu dychweliadau |
| Cyflawnrwydd cyd-destun trosglwyddo | Pasio trawsgrifiad hir yn lle crynodeb; samplu trosglwyddiadau hawdd | Graddfa'r asiant derbyn; sampl ar hap; amser i ddatrys ar ôl trosglwyddo |
| Amser at berson | Dechrau'r cloc ar ôl bwydlenni; cyfrif cydnabyddiaeth ciw fel cymryd drosodd | Mae'r cloc yn dechrau ar y cais; mae cymryd drosodd yn golygu bod person yn weithredol yn y sgwrs |
| Cywirdeb atebion | Samplu sgyrsiau hawdd; adolygwyr trugarog | Sampl ar hap gan adolygwyr annibynnol; achosion prawf gwrthwynebus |
| Boddhad ac ymdrech bot | Arolygu sgyrsiau a gwblhawyd yn unig; gosod yr arolwg lle mae defnyddwyr hapus yn unig yn ei gyrraedd | Arolygu sgyrsiau a adawyd hefyd; cyfradd ymateb a chymysgedd; darllen sylwadau |
| Cyfradd gwrthdroi gweithredoedd asiant | Peidio â logio gwrthdroi; ail-ddosbarthu cywiriadau fel gwaith newydd | Log archwilio sy'n gwrthsefyll ymyrryd; cysylltu gwrthdroi â gweithredoedd; adolygiad digwyddiad |

Mae darlleniad iach yn ddatrys wedi'i wirio uchel gyda dychweliadau isel, llwybrau hawdd a chyflym at berson gyda throsglwyddiadau cyflawn, atebion cywir ar adolygiad wedi'i samplu, defnyddwyr bodlon ar draws grwpiau, ac asiantau y mae anaml angen gwrthdroi eu gweithredoedd ac nad ydynt byth yn achosi niwed heb ei weld.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Bot ar sail rheolau | Rhagweladwy, hawdd ei brofi | Cul; bregus; rhwystredig y tu allan i sgriptiau |
| Cynorthwyydd model iaith | Hyblyg, rhugl | Gall fod yn anghywir gyda hyder; anoddach ei brofi |
| Nôl o wybodaeth gymeradwy | Atebion wedi'u seilio, haws eu cywiro | Yn dibynnu ar ansawdd cynnwys |
| Cynhyrchu agored | Cwmpas eang | Risg uwch o ddyfeisio |
| Cymeradwyaeth ddynol ar gyfer gweithredoedd | Diogelwch | Arafach; blinder adolygwyr |
| Gweithredoedd ymreolaethol | Cyflymder | Radiws niwed mwy pan fo'n anghywir |
| Cwmpas llym gyda throsglwyddo cynnar | Diogel | Cyfyngu is |
| Cwmpas eang | Cyfyngu uwch | Mwy o wallau ar yr ymylon |

Yr ateb pragmatig yw dechrau gyda bwriadau cul, wedi'u deall yn dda, seilio atebion ar wybodaeth gymeradwy, gwneud cymorth dynol yn hawdd, ac ymestyn cwmpas ac ymreolaeth dim ond wrth i'r mesurau gyfiawnhau hynny.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pe bai defnyddiwr eisiau person ar hyn o bryd, faint o gamau fyddai'n ei gymryd, ac a ydym ni wedi rhoi cynnig arni ein hunain?**
Profwch y llwybr gyda'ch gilydd. Cyfrwch y camau a'r aros. Dylai'r hwylusydd nodi pob rhwystr. Cytunwch ar newidiadau fel bod y llwybr yn fyr, a mesurwch amser at berson.

**2. Pa gyfran o'r sgyrsiau a ddaeth i ben gan ein bot a ddatrysodd y broblem mewn gwirionedd?**
Gwiriwch y dychweliadau a'r cadarnhadau ar gyfer sampl. Cymharwch â'r ffigur cyfyngu. Trafodwch y bwlch. Penderfynwch pa ffigur y dylai arweinwyr ei weld.

**3. Beth mae ein bot yn ei gael yn anghywir, a phwy sy'n darganfod?**
Gofynnwch i'r ddesg gwasanaeth. Adolygwch sgyrsiau a samplwyd. Chwiliwch am batrymau: erthyglau hen, cwestiynau amwys, pynciau sensitif. Cytunwch ar lwybr o wallau i atgyweiriadau, gyda pherchennog.

**4. Pa weithredoedd y caiff yr asiant eu cymryd ar ei ben ei hun, a pha rai sydd angen person?**
Rhestrwch weithredoedd gyda'u dosbarthiadau risg a'u caniatâd. Gofynnwch beth fyddai methiant gwaethaf realistig pob un. Cytunwch ar y rheolau cymeradwyo a'r llwybr archwilio, a phwy sy'n adolygu achosion niweidiol.

**5. Pwy mae'r bot yn ei fethu'n dawel?**
Meddyliwch am ddefnyddwyr sydd ar frys, mewn trallod, gydag anghenion hygyrchedd, neu gydag iaith gyfyngedig. Edrychwch ar ddatrys a boddhad yn ôl grŵp, lle mae'n ddiogel. Cytunwch ar un prawf gyda defnyddwyr o'r fath.

**6. Beth fyddai'n gwneud i ni ddiffodd y bot neu gulhau ei gwmpas?**
Diffiniwch y dystiolaeth: dychweliadau uwchlaw lefel, gweithredoedd niweidiol, cywirdeb islaw safon. Penderfynwch pwy gaiff benderfynu. Mae cael rheol stopio ymlaen llaw yn ei gwneud yn haws gweithredu.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau sy'n adeiladu'r cynorthwyydd yn berchen ar ei ansawdd. Dylent ddiffinio bwriadau, seilio atebion ar wybodaeth gymeradwy, profi gydag achosion gwrthwynebus, rhyddhau newidiadau o dan reolaeth, a darllen y methiannau. Dylent wthio'n ôl yn erbyn targedau cyfyngu sy'n gwobrwyo dal defnyddwyr.

### Timau gwasanaeth a gweithrediadau

Mae staff y ddesg gwasanaeth yn gweithio gyda'r cynorthwyydd ac yn etifeddu ei fethiannau. Dylent raddio trosglwyddiadau, fflagio atebion anghywir, cadw'r wybodaeth yn gyfredol, a chymryd drosodd yn gyflym pan ofynnir. Hwy yw'r beirniaid gorau o a yw'r cynorthwyydd yn helpu defnyddwyr, ac mae eu llwyth gwaith a'u straen yn rhan o'r darlun.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn noddi'r cynorthwyydd ac eisiau arbedion. Dylent ofyn am ddatrys wedi'i wirio, dychweliadau, a boddhad wrth ymyl cyfyngu, mynnu rheol stopio, ariannu'r llwybr dynol, ac adolygu dosbarthiadau risg ar gyfer asiantau. Dylai llywodraethu wirio datgelu, hygyrchedd, a dyletswyddau cyfreithiol.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr eisiau cymorth gydag ychydig o ymdrech a dim twyll. Dylent wybod eu bod yn siarad ag AI, gallu cyrraedd person yn hawdd, ac ymddiried na fydd y system yn gweithredu heb reswm da. Eu profiad, yn enwedig o fethiant, yw'r brif dystiolaeth o a yw'r cynorthwyydd yn werth ei gael.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae prifysgol genedlaethol yn rhedeg desg gwasanaeth myfyrwyr a staff sy'n trin tua 30,000 o gysylltiadau y mis. Mae'n lansio sgwrsfot ar gyfer ceisiadau cyffredin, ac mae dangosfwrdd y gwerthwr yn adrodd cyfradd cyfyngu o 74 y cant. Mae'r rhifau isod yn enghreifftiol.

Mae pennaeth gwasanaethau myfyrwyr yn gwirio. Ymhlith sgyrsiau a ddaeth i ben gan y bot yn y mis diwethaf, dilynwyd 29 y cant gan gyswllt cysylltiedig drwy e-bost neu ffôn o fewn saith diwrnod. Datrys wedi'i wirio, gan ddefnyddio cadarnhad y defnyddiwr a diffyg dychwelyd, yw 49 y cant ar gyfer bwriadau o fewn cwmpas. Yr amser canolrifol i gyrraedd person ar ôl gofyn yw 6 munud, gydag 85fed canradd o 22, yn rhannol oherwydd bod y llwybr yn gofyn am dri cham bwydlen. Mae sampl o 100 o sgyrsiau a adolygwyd gan ddau gynghorydd profiadol yn canfod 88 o atebion yn gywir a 12 yn ddiffygiol: 7 yn hen, 3 yn dyfeisio manylion am ddyddiad cau, a 2 yn camdrin achosion sensitif yn ymwneud â myfyriwr mewn anhawster. Mae asiantau derbyn yn graddio 54 y cant o drosglwyddiadau fel rhai cyflawn. Mae boddhad â'r bot yn is i fyfyrwyr sy'n defnyddio darllenwyr sgrin ac i'r rhai sy'n ysgrifennu mewn ieithoedd heblaw Saesneg. Mae tîm y ddesg gwasanaeth yn adrodd llawer o gysylltiadau sy'n dechrau gyda "doedd y sgwrsfot ddim yn gallu helpu."

Mae pennaeth gwasanaethau myfyrwyr yn gwneud newidiadau gyda'r tîm. Cyfeirir bwriadau sensitif, megis lles, cwynion, ac anghydfodau am ffioedd, yn syth at berson, ac mae'r bot yn dweud hynny. Mae opsiwn "siarad â pherson" yn ymddangos ar bob sgrin, ac olrheinir amser at berson, gyda tharged i ateb o fewn ychydig funudau yn ystod oriau staffio. Mae trosglwyddiadau yn cynnwys crynodeb awtomatig a geiriau'r defnyddiwr ei hun. Mae perchnogion y sylfaen wybodaeth yn trwsio erthyglau hen, ac mae adolygiad sampl misol yn eu bwydo. Cyfyngir y cynorthwyydd i ateb o gynnwys cymeradwy a gofynnir iddo ddweud pan nad yw'n gwybod. Mae ail beilot yn gadael i asiant ailosod cyfrineiriau ar ôl gwirio hunaniaeth, gyda phob gweithred wedi'i logio ac yn wrthdroadwy o fewn terfyn amser, a chyfradd gwrthdroi wedi'i holrhain. Mae'r dangosfwrdd yn amnewid cyfyngu gyda datrys wedi'i wirio, cyfradd cyswllt dychwelyd, cywirdeb, amser at berson, a boddhad yn ôl grŵp.

Dri mis yn ddiweddarach, mae datrys wedi'i wirio yn cyrraedd 66 y cant ar gyfer bwriadau o fewn cwmpas, mae'r gyfradd cyswllt dychwelyd yn disgyn i 14 y cant, mae amser canolrifol at berson yn disgyn i 2 funud, mae cyfran y trosglwyddiadau cyflawn yn codi i 86 y cant, ac mae cywirdeb ar atebion a samplwyd yn codi i 95 y cant, heb unrhyw achosion sensitif a gamdriniwyd yn y sampl. Cyfradd gwrthdroi gweithredoedd asiant yn y peilot cyfrineiriau yw 1.2 y cant. Mae swyddfa'r is-ganghellor yn gofyn am darged cyfyngu o 85 y cant. Mae pennaeth gwasanaethau myfyrwyr yn esbonio y byddai targed cyfyngu uwch yn gwobrwyo cuddio'r llwybr at berson, ac yn cynnig datrys wedi'i wirio a dychweliadau fel y mesurau, gydag adolygiad o'r hyn i'w ymestyn nesaf. Cofnodir y penderfyniad.

## Y golwg fesul sector

**Busnes newydd.** Gall cynorthwyydd gwmpasu cymorth am gost isel, a gall un ateb gwael gostio cwsmer. Cadwch y cwmpas yn gul, seiliwch atebion ar eich dogfennaeth, gwnewch yr opsiwn dynol yn amlwg, a darllenwch bob uwchgyfeiriad. Byddwch yn ofalus rhag gadael i asiant weithredu ar gyfrifon neu daliadau.

**Busnes bach.** Gall cynorthwyydd parod ar wefan drin cwestiynau cyffredin. Profwch ef fel cwsmer, gwnewch yn siŵr bod rhif ffôn neu e-bost yn hawdd i'w ganfod, ac adolygwch sgyrsiau'n wythnosol. Gwiriwch beth mae'r gwerthwr yn ei wneud â'r data.

**Menter fawr.** Mae graddfa yn cynnig arbedion a risg. Rhedwch broses lywodraethu ar gyfer dosbarthiadau risg, cymeradwyaethau, ac archwilio, mesurwch yn ôl bwriad a grŵp defnyddwyr, a sicrhewch fod person yn hygyrch ar bob sianel. Cydlynwch ar draws cymorth, diogelwch, cyfreithiol, a hygyrchedd.

**Llywodraeth a'r sector cyhoeddus.** Efallai nad oes gan ddinasyddion ddarparwr arall, ac mae dyletswyddau hygyrchedd, mynediad iaith, a thriniaeth deg yn berthnasol yn gryf. Cadwch berson yn hygyrch, osgowch benderfyniadau awtomataidd am hawliau heb warchodaeth, cyhoeddwch sut y defnyddir y cynorthwyydd, a gwiriwch ddyletswyddau datgelu a chyfraith weinyddol (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y costau yw trwyddedau neu daliadau defnydd, integreiddio, paratoi cynnwys, samplu ac adolygu parhaus, cynnal y sylfaen wybodaeth, profi, a llywodraethu. Mae llwybr dynol da hefyd yn costio arian, oherwydd bod yn rhaid ei staffio.

Yr enillion posibl yw aros byrrach am faterion syml, rhyddhad rhag cysylltiadau ailadroddus, a chwmpas y tu allan i oriau. Mae'r ochr risg yn cynnwys dychweliadau, ymddiriedaeth a gollwyd, niwed o atebion neu weithredoedd anghywir, ac amlygiad cyfreithiol. Adeiladwch yr achos o'ch rhifau eich hun: datrys wedi'i wirio a dychweliadau, y gost fesul cyswllt a ddatryswyd gan gynnwys trosglwyddiadau, yr amser y mae staff yn ei dreulio yn trwsio methiannau'r bot, a boddhad yn ôl grŵp. Osgowch ddefnyddio hawliadau cyfyngu neu ddargyfeirio gwerthwr fel eich amcangyfrif. Cyfrwch gost y llwybr dynol a llywodraethu (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Cyfyngu fel targed.** Mae'n gwobrwyo cadw pobl draw oddi wrth gymorth. Adroddwch ddatrys wedi'i wirio a dychweliadau.
- **Llwybr cudd neu araf at berson.** Patrwm tywyll ydyw, ac mae defnyddwyr yn sylwi. Gwnewch ef yn fyr a phrofwch ef.
- **Trosglwyddo heb gyd-destun.** Mae defnyddwyr yn ailadrodd eu hunain ac mae ymddiriedaeth yn disgyn. Pasiwch grynodeb.
- **Gadael i'r bot drin achosion sensitif.** Mae lles, cwynion, a hawliau angen pobl. Cyfeiriwch hwy'n uniongyrchol.
- **Gweithredoedd ymreolaethol heb archwilio na chymeradwyaeth.** Gall un gwall raddio. Dosbarthwch, cyfyngwch, a logiwch.
- **Mesur yr hyn y mae dangosfwrdd y gwerthwr yn ei ddangos yn unig.** Mae'n gwenieithu. Unwch eich data eich hun.
- **Anwybyddu grwpiau y mae'r bot yn eu methu.** Mae cyfartaleddau yn eu cuddio. Profwch a rhannwch lle mae'n ddiogel.
- **Dim rheol stopio.** Mae bot sy'n methu yn aros i fyny. Diffiniwch y dystiolaeth a fyddai'n ei gulhau neu'n ei ddiffodd.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Canlyniadau | Cyfyngu wedi'i adrodd | Boddhad wedi'i arolygu | Datrys wedi'i wirio a dychweliadau wedi'u holrhain fesul bwriad | Wedi'i rannu yn ôl grŵp defnyddwyr; rheolau stopio wedi'u diffinio; cywirdeb wedi'i samplu'n fisol | Cynorthwyydd, staff, a gwybodaeth wedi'u gwella gyda'i gilydd gan ddefnyddio tystiolaeth a rennir |
| Llwybr at bobl | Anodd dod o hyd iddo | Opsiwn ar gael | Llwybr byr; amser at berson wedi'i olrhain; trosglwyddiadau'n cario cyd-destun | Ansawdd trosglwyddo wedi'i raddio a'i wella; staffio wedi'i gydweddu â'r galw | Bot a staff yn cydweithio'n llyfn ar draws sianeli, gyda dewis y defnyddiwr yn cael ei barchu |
| Asiantau sy'n gweithredu | Awtomeiddio ad hoc | Gweithredoedd sgriptiedig | Gweithredoedd wedi'u dosbarthu yn ôl risg, braint leiaf, cymeradwyaeth ac archwilio | Cyfradd gwrthdroi a niwed wedi'u hadolygu; newidiadau wedi'u rheoli | Ymddygiad asiant wedi'i lywodraethu ar draws y sefydliad a chyflenwyr gyda sicrwydd annibynnol |

## Rhestr wirio

- [ ] Rhestrir bwriadau'r cynorthwyydd, gyda'r rhai y mae'n rhaid iddynt bob amser fynd at berson.
- [ ] Adroddir datrys wedi'i wirio a chyfradd cyswllt dychwelyd wrth ymyl cyfyngu.
- [ ] Mae llwybr gweladwy, byr at berson yn bodoli ar bob sgrin, a mesurir amser at berson.
- [ ] Mae trosglwyddiadau yn cynnwys crynodeb a geiriau'r defnyddiwr, ac fe'u graddir gan asiantau derbyn.
- [ ] Samplir atebion yn fisol gan adolygwyr cymwys, annibynnol.
- [ ] Dywedir wrth ddefnyddwyr eu bod yn siarad ag AI, a beth y gall ei wneud.
- [ ] Gwneir profi hygyrchedd ac ieithoedd eraill gyda defnyddwyr go iawn.
- [ ] Mae gweithredoedd asiant wedi'u dosbarthu yn ôl risg, â chaniatâd braint leiaf, ac wedi'u logio ar gyfer archwilio.
- [ ] Adolygir cyfraddau gwrthdroi a gweithredoedd niweidiol yn ddi-fai.
- [ ] Mae rheol stopio yn diffinio pryd i gulhau neu ddiffodd y cynorthwyydd.

## Anogwyr AI

**Diffiniwch fwriadau a rheolau trosglwyddo.**

```text
Rydym yn rhedeg desg gwasanaeth ar gyfer [math o sefydliad]. Y rhesymau cyswllt
mwyaf cyffredin yw: [rhestr gyda chyfeintiau]. Cynigiwch pa fwriadau y dylai
sgwrsfot eu trin yn llawn, pa rai y dylai helpu â hwy yn unig ac yna trosglwyddo,
a pha rai y mae'n rhaid iddynt bob amser fynd at berson, gyda rhesymau.
Cynhwyswch wybodaeth trosglwyddo i'w phasio ymlaen. Peidiwch â dyfeisio
ystadegau. Rhestrwch eich rhagdybiaethau a risgiau ar gyfer achosion sensitif.
```

**Gwiriwch hawliad cyfyngu.**

```text
Mae dangosfwrdd ein sgwrsfot yn dangos cyfyngu o [gwerth]. Mae gennym hefyd:
cysylltiadau dychwelyd o fewn saith diwrnod [gwerth], canlyniadau arolwg
[gwerthoedd], a sampl o sgyrsiau [disgrifiwch]. Esboniwch beth allai datrys wedi'i
wirio fod, sut i'w gyfrifo o'n data, beth mae'r bwlch rhwng cyfyngu a datrys yn ei
awgrymu, a beth i'w wirio nesaf. Peidiwch â honni achosion na all y data eu
cefnogi. Rhestrwch eich rhagdybiaethau.
```

**Dyluniwch ddosbarthiad risg ar gyfer gweithredoedd asiant.**

```text
Gallai asiant AI gymryd y gweithredoedd hyn: [rhestr]. Ar gyfer pob un, cynigiwch
ddosbarth risg (gwybodaethol, gwrthdroadwy effaith isel, canlyniadol), y caniatâd
y dylai fod ei angen, a oes rhaid i berson gymeradwyo, beth i'w logio, sut i'w
wrthdroi, a phrawf i'w redeg cyn ei alluogi. Peidiwch â thybio offer penodol.
Rhestrwch eich rhagdybiaethau a phenderfyniadau sydd angen mewnbwn diogelwch a
chyfreithiol.
```

**Cynlluniwch adolygiad o sgyrsiau'r bot.**

```text
Dyluniwch adolygiad misol o sgyrsiau'r bot: maint sampl a dewis (gan gynnwys rhai a
adawyd a rhai o grwpiau defnyddwyr sydd mewn perygl o wasanaeth gwael),
cymwysterau adolygwyr, rwbrig byr ar gyfer cywirdeb, diogelwch, a gonestrwydd am
ansicrwydd, sut i gofnodi gwallau a thrwsio eu ffynonellau, a sut i adrodd heb
adnabod defnyddwyr. Rhestrwch eich rhagdybiaethau a rhybuddion preifatrwydd.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig sgwrsfot neu asiant AI.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig sgwrsfot yn mesur datrys ac yn cario ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Mesurwch ddatrys wedi'i wirio a chysylltiadau dychwelyd, a thriniwch gyfyngu fel ffigur disgrifiadol yn unig.
- Gwnewch y llwybr at berson yn fyr ac yn weladwy, a throsglwyddwch gyda'r cyd-destun.
- Samplwch atebion am gywirdeb a diogelwch, a chadwch y wybodaeth y mae'r cynorthwyydd yn ei defnyddio yn gyfredol.
- Byddwch yn onest bod defnyddwyr yn siarad ag AI, a phrofwch gyda'r defnyddwyr sydd fwyaf tebygol o gael eu methu.
- Ar gyfer asiantau sy'n gweithredu, dosbarthwch risg, cyfyngwch ganiatâd, mynnwch gymeradwyaeth ar gyfer gweithredoedd canlyniadol, a chadwch lwybr archwilio.
- Diffiniwch reol stopio ymlaen llaw.

## Cyfeiriadau a darllen pellach

1. Weizenbaum, J., "ELIZA: A computer program for the study of natural language communication between man and machine," *Communications of the ACM*, 9(1), 1966.
2. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
3. European Parliament and Council, *Regulation (EU) 2024/1689 laying down harmonised rules on artificial intelligence (Artificial Intelligence Act)*, 2024.
4. Dixon, M., Toman, N., and DeLisi, R., *The Effortless Experience*, Portfolio/Penguin, 2013.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Chatbot](https://en.wikipedia.org/wiki/Chatbot).
8. Wikipedia, [Virtual assistant](https://en.wikipedia.org/wiki/Virtual_assistant).
9. Wikipedia, [Intelligent agent](https://en.wikipedia.org/wiki/Intelligent_agent).
10. Wikipedia, [Self-service](https://en.wikipedia.org/wiki/Self-service).
11. Wikipedia, [Dark pattern](https://en.wikipedia.org/wiki/Dark_pattern).
12. Wikipedia, [Automated decision-making](https://en.wikipedia.org/wiki/Automated_decision-making).
13. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
