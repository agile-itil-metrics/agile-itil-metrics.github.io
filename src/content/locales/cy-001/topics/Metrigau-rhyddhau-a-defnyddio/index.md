# Metrigau rhyddhau a defnyddio

**Mae defnyddio cod a'i ryddhau i ddefnyddwyr yn ddigwyddiadau gwahanol â risgiau gwahanol, felly mesurwch hwy ar wahân, cyfrwch bob un yn ôl rheol ysgrifenedig, a darllenwch amlder, amser arweiniol, maint swp, a hylendid baneri gyda'i gilydd yn hytrach na dathlu unrhyw gyfrif unigol.**

## Crynodeb a chymhelliant

Mae llawer o dimau'n defnyddio'r geiriau "defnyddio" a "rhyddhau" fel pe baent yn golygu'r un peth. Nid ydynt, a'r gwahaniaeth yw'r syniad mwyaf defnyddiol yn y pwnc hwn. **Defnyddio** yw'r weithred o roi fersiwn o'r feddalwedd mewn amgylchedd, cynhyrchu fel arfer, fel y disgrifir yn yr erthygl ar [ddefnyddio meddalwedd](https://en.wikipedia.org/wiki/Software_deployment). **Rhyddhau** yw'r foment pan fo newid ar gael i'w ddefnyddwyr bwriadedig, penderfyniad y mae [rheoli rhyddhau](https://en.wikipedia.org/wiki/Release_management) yn bodoli i'w lywodraethu. Pan fo'r ddau yn digwydd gyda'i gilydd, mae defnyddio yn ryddhau ac mae un rhif yn disgrifio'r ddau. Pan fyddant wedi'u gwahanu, gall y tîm ddefnyddio'n aml ac yn dawel, a rhyddhau'n fwriadol.

Mae'r gwahanu yn bwysig oherwydd bod gan y ddau ddigwyddiad risgiau gwahanol. Mae defnyddio yn cario risg dechnegol: efallai na fydd yr adeiladwaith newydd yn cychwyn, efallai y bydd yn torri dibyniaeth, neu efallai y bydd angen dychweliad. Mae rhyddhau yn cario risg busnes a defnyddwyr: efallai y bydd y newid yn drysu cwsmeriaid, neu efallai y bydd yn rhaid iddo lanio ar ddyddiad y cytunwyd arno. Mae timau sy'n cyplu'r ddau ddigwyddiad yn derbyn y ddwy risg ar unwaith, sy'n eu gwthio tuag at sypiau mawr o newid a ryddheir yn anaml. Mae timau sy'n eu gwahanu yn cymryd y risg dechnegol mewn camau bach a'r risg defnyddwyr mewn camau rheoledig.

Prif offeryn y gwahanu yw'r [toglen nodwedd](https://en.wikipedia.org/wiki/Feature_toggle), a elwir hefyd yn faner nodwedd: switsh mewn cyfluniad sy'n troi ymddygiad ymlaen neu i ffwrdd heb ddefnydd newydd. Mae technegau cysylltiedig yn cynnwys y [rhyddhad canari](https://en.wikipedia.org/wiki/Canary_release), sy'n datgelu newid i gyfran fach o draffig yn gyntaf, a [defnyddio glas-gwyrdd](https://en.wikipedia.org/wiki/Blue-green_deployment), sy'n cadw dau amgylchedd cynhyrchu ac yn newid traffig rhyngddynt. Maent i gyd yn gadael i chi ateb dau gwestiwn ar wahân: a yw'r fersiwn newydd yn rhedeg yn ddiogel, a phwy ddylai weld yr ymddygiad newydd a phryd.

Mae'r termau isod yn codi dro ar ôl tro yn y pwnc hwn.

- Mae **rhyddhad** yn fersiwn neu'n set o newidiadau a wneir ar gael i ddefnyddwyr.
- Mae **defnydd** yn symudiad fersiwn i amgylchedd. Mae ITIL 4 yn enwi arfer ar gyfer hyn, rheoli defnyddio.
- Mae **lansiad tywyll** yn ddefnydd y mae ei ymddygiad newydd wedi'i ddiffodd i ddefnyddwyr.
- Mae **cyflwyno cynyddol** yn ryddhad sy'n ehangu amlygiad fesul cam, er enghraifft 1 y cant, 10 y cant, ac yna pawb.
- Mae **swp** yn set o newidiadau sy'n cludo gyda'i gilydd mewn un defnydd neu ryddhad. Maint swp yw nifer y newidiadau, neu faint o newid, ynddo.
- **Amser arweiniol rhyddhau** yw'r amser a aeth heibio o bwynt dechrau a nodwyd nes bod y newid ar gael i'w ddefnyddwyr. Mae eich tîm yn ysgrifennu'r pwynt dechrau i lawr, oherwydd bod sawl un yn cael eu defnyddio'n gyffredin.
- **Canradd** yw gwerth y mae cyfran benodol o arsylwadau'n syrthio islaw iddo. Yr 85fed ganradd o amser arweiniol rhyddhau yw'r rhif y mae 85 y cant o ryddhadau yn ei guro.

Mae'r golygon ystwyth ac ITIL yn cwrdd yma. Mae tîm ystwyth sy'n dilyn [cyflawni parhaus](https://en.wikipedia.org/wiki/Continuous_delivery) eisiau i bob newid fod yn rhyddhadwy ar unrhyw adeg, ac mae'n trin y rhyddhau fel penderfyniad busnes a wneir ar wahân i'r weithred dechnegol. Mae ymarferydd ITIL yn gweld rheoli rhyddhau, rheoli defnyddio, a galluogi newid fel arferion sy'n cynllunio, amserlennu, a rheoli symudiad newid i ddefnydd byw. Mae'r ddwy olwg yn gwrthdaro pan ddeellir rheoli rhyddhau fel calendr o ddigwyddiadau mawr. Maent yn cyd-fynd pan ddeellir yr arfer fel y gallu i ryddhau'n ddiogel ar alw, gyda'r rheolaethau wedi'u hadeiladu i'r biblinell a'r baneri.

Nid yw'r pwnc hwn yn ailadrodd diffiniadau'r pum mesur perfformiad cyflawni o raglen ymchwil DORA (gweler pwnc 2.8, Metrigau DORA), na'r mesurau methiant ac ailwaith ar ôl rhyddhad (gweler pwnc 4.4, Methiant newid ac ailwaith), na chyfaint a chymeradwyo newidiadau (gweler pwnc 4.3, Metrigau galluogi newid). Mae'n ychwanegu'r hyn y mae'r pynciau hynny'n ei adael ar agor: sut i gyfrif rhyddhadau fel rhai gwahanol i ddefnyddiadau, pa mor hir y mae newid gorffenedig yn aros cyn i ddefnyddwyr ei gael, pa mor fawr yw'r sypiau, ac a yw'r baneri sy'n gwneud gwahanu'n bosibl yn cael eu cadw'n daclus.

Yn olaf, mae cyfrifon rhyddhau a defnyddio yn rhifau temtiol ar gyfer dangosfwrdd arweinyddiaeth, ac mae [cyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol ar unwaith (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Mae cyfrif defnyddiadau yn codi pan hollir newidiadau yn ddarnau dibwys. Mae cyfrif rhyddhadau yn codi pan newidir label. Felly daw pob metrig isod gyda'r ffordd y mae'n plygu a'r rheilen warchod sy'n dal y plygiad.

## Egwyddorion allweddol

- **Mae defnyddio a rhyddhau yn ddau ddigwyddiad.** Mesurwch hwy ar wahân lle bynnag y mae'r bensaernïaeth yn caniatáu, a dywedwch yn blaen lle maent yn dal yn un digwyddiad.
- **Cyfrwch yn ôl rheol ysgrifenedig.** Mae defnydd yn cyfrif pan dderbyniodd amgylchedd a enwir fersiwn a enwir gyda chanlyniad llwyddiannus. Mae rhyddhad yn cyfrif pan all y defnyddwyr bwriadedig gyrraedd y newid. Ysgrifennwch y rheol unwaith a'i chymhwyso yr un ffordd bob tro.
- **Disgrifiwch wasanaeth, nid person.** Mae cyfrifon yn perthyn i wasanaeth a'i dîm, byth i unigolyn.
- **Mesurwch yr aros, nid dim ond y gwaith.** Yn aml mae amser arweiniol rhyddhau yn cynnwys diwrnodau o aros am ffenestr, cymeradwyaeth, neu benderfyniad. Yr aros yw lle mae gwelliant fel arfer yn byw.
- **Sypiau bach yw'r lifer.** Dau olwg ar un peth yw amlder a maint. Parwch bob cyfrif â mesur o faint o newid a gariodd pob rhyddhad.
- **Rhestr eiddo gyda chost cario yw baneri.** Mae baner sy'n byw'n rhy hir yn dod yn god marw a ffynhonnell methiant, felly olrheiniwch oedran baneri mor ofalus â'u cwmpas.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Amlder defnyddio | Pa mor aml y mae gwasanaeth yn derbyn defnydd llwyddiannus i gynhyrchu | Cyfrif defnyddiadau cynhyrchu llwyddiannus y gwasanaeth yn y cyfnod / diwrnodau yn y cyfnod; eithrir defnyddiadau i amgylcheddau prawf neu lwyfannu, defnyddiadau a fethodd neu a ddychwelwyd, ac ailddefnyddiadau o adeiladwaith heb ei newid; cyfrifir defnyddiadau cyfluniad yn unig mewn cyfres ar wahân | Defnyddiadau y dydd neu yr wythnos | Log digwyddiadau'r biblinell defnyddio | Rheoli defnyddio | Cyflawni parhaus; cludo cynyddiad gweithio | Wythnosol |
| Amlder rhyddhau | Pa mor aml y mae defnyddwyr yn derbyn newid y gallant ei gyrraedd | Cyfrif digwyddiadau rhyddhau yn y cyfnod / diwrnodau yn y cyfnod; digwyddiad rhyddhau yw'r foment pan fo newid, neu grŵp o newidiadau, yn dod yn gyraeddadwy gan ei ddefnyddwyr bwriadedig (baner wedi'i throi ymlaen i bob defnyddiwr, cam olaf cyflwyno cynyddol, neu ddefnydd o newid heb faner); eithrir lansiad tywyll, cyflwyniad a stopiwyd ar gam rhannol, a newid baner sy'n effeithio ar ddefnyddwyr mewnol yn unig | Rhyddhadau yr wythnos neu y mis | Log archwilio'r gwasanaeth baneri wedi'i uno â log y biblinell a'r calendr rhyddhau | Rheoli rhyddhau | Rhyddhau ar ddiwedd pob cynyddiad; cynyddiad y gellir ei gludo yn bosibl wedi'i wneud ar gael | Wythnosol, wedi'i adolygu'n fisol |
| Amser arweiniol rhyddhau | Pa mor hir y mae newid gorffenedig yn aros cyn y gall defnyddwyr ei gyrraedd | Mae'r cloc yn dechrau pan uno'r newid â'r brif linell ac mae wedi pasio ei wiriadau awtomataidd (neu, os yw eich tîm yn ei ysgrifennu felly, ar yr ymrwymiad cyntaf) ac yn stopio pan ryddheir y newid fel y'i diffinnir uchod; adroddwch ganolrif a 85fed canradd newidiadau a ryddhawyd yn y cyfnod; eithrir newidiadau nas rhyddhawyd eto a'u hadrodd fel oedran gwaith yn aros | Oriau neu ddiwrnodau | Rheoli fersiynau wedi'i uno â'r biblinell a'r log archwilio baneri | Rheoli rhyddhau; rheoli defnyddio | Amser arweiniol o orffen i gyflawni; amser arweiniol i'r cwsmer | Wythnosol, wedi'i adolygu'n fisol |
| Bwlch defnyddio-i-ryddhau | Pa mor hir y mae cod a ddefnyddiwyd yn aros yn dywyll cyn y gall defnyddwyr ei gyrraedd | Mae'r cloc yn dechrau pan ddefnyddir y newid i gynhyrchu ac yn stopio pan ryddheir ef; adroddwch ganolrif a 85fed canradd; mae gan newidiadau a ryddheir ar adeg eu defnyddio fwlch o sero ac fe'u cynhwysir; eithrir newidiadau a ddefnyddiwyd ac a dynnwyd yn ddiweddarach heb eu rhyddhau a'u cyfrif ar wahân | Oriau neu ddiwrnodau | Log y biblinell wedi'i uno â'r log archwilio baneri | Rheoli rhyddhau; rheoli defnyddio | Lansiad tywyll; datgysylltu defnyddio oddi wrth ryddhau | Misol |
| Maint swp rhyddhau | Faint o newid sy'n cludo gyda'i gilydd mewn un rhyddhad | Canolrif ac 85fed canradd nifer y newidiadau wedi'u huno (ceisiadau tynnu neu eitemau gwaith) fesul rhyddhad yn y cyfnod; ysgrifennir uned y newid i lawr; cyfrifir pob newid unwaith, yn y rhyddhad a'i gwnaeth yn gyraeddadwy | Newidiadau fesul rhyddhad | Rheoli fersiynau a'r traciwr materion wedi'u huno â'r digwyddiad rhyddhau | Rheoli rhyddhau; galluogi newid | Sypiau bach; sleisys fertigol o waith | Fesul rhyddhad, wedi'i adolygu'n fisol |
| Cwmpas baneri nodweddion | Cyfran y newidiadau sy'n weladwy i ddefnyddwyr a ryddhawyd y tu ôl i faner | Newidiadau sy'n weladwy i ddefnyddwyr a ryddhawyd yn y cyfnod a oedd â baner ar adeg y rhyddhad / pob newid sy'n weladwy i ddefnyddwyr a ryddhawyd yn y cyfnod; eithrir newidiadau seilwaith ac atgyweiriadau diffygion na ellir eu baneru, ac ysgrifennir y rheol ar gyfer "gweladwy i ddefnyddwyr" i lawr | Canran | Gwasanaeth baneri wedi'i uno â'r traciwr materion a'r log rhyddhau | Rheoli rhyddhau; galluogi newid | Cyflawni cynyddol; datblygu a yrrir gan arbrofion | Misol |
| Cyfrif baneri hen | Faint o faneri sydd wedi goroesi eu pwrpas | Nifer y baneri rhyddhau sy'n dal yn bresennol mewn cod neu gyfluniad fwy na nifer o ddiwrnodau a nodwyd ar ôl i'r newid y maent yn ei warchod gyrraedd pob defnyddiwr; tagir baneri gweithredol parhaol (switshis lladd, baneri hawl) a'u heithrio; ysgrifennir y terfyn oedran i lawr fesul math o faner | Baneri, a chanolrif oedran baneri rhyddhau mewn diwrnodau | Rhestr eiddo'r gwasanaeth baneri wedi'i huno â chwiliad cod | Rheoli rhyddhau; rheoli gwybodaeth | Glanhau dyled dechnegol; maen prawf gorffen o ddileu baner | Misol |

## Argymhellion

### Ysgrifennwch beth sy'n cyfrif fel defnydd ac fel rhyddhad

**Diffiniwch y ddau ddigwyddiad cyn i chi gyfrif y naill na'r llall.** Mae defnydd yn cyfrif pan gyrhaeddodd fersiwn a enwir amgylchedd a enwir ac adroddodd y biblinell lwyddiant. Mae rhyddhad yn cyfrif pan all y defnyddwyr bwriadedig gyrraedd y newid, sef, ar gyfer newid â baner, y foment y troir y faner ymlaen iddynt ac nid y foment y cyrhaeddodd y cod. Nodwch yr eithriadau yn yr un frawddeg: amgylcheddau prawf, dychweliadau, ailddefnyddiadau o adeiladwaith heb ei newid, ac amlygiad mewnol yn unig.

### Adroddwch y ddwy gyfres ochr yn ochr

**Dangoswch amlder defnyddio ac amlder rhyddhau ar un siart.** Lle mae'r llinellau'n cyd-daro, mae'r gwasanaeth yn dal i gyplu'r ddau ddigwyddiad. Lle mae defnyddiadau'n rhedeg ymhell o flaen rhyddhadau, mae'r tîm wedi dechrau eu datgysylltu, ac mae'r pellter rhwng y llinellau yn arwydd o'r gallu. Mae un rhif cyfun yn cuddio hyn, ac mae'n gadael i dîm hawlio amlder uchel na welir byth gan ddefnyddwyr.

### Mesurwch amser arweiniol rhyddhau o ddechrau a nodwyd i'r defnyddiwr

**Dewiswch ddechrau'r cloc unwaith a'i gadw.** Mae dechrau ar yr ymrwymiad cyntaf yn dangos y daith lawn, ac mae dechrau ar uno â'r brif linell yn ynysu'r biblinell ryddhau a'i chymeradwyaethau. Mae'r naill neu'r llall yn dderbyniol os caiff ei nodi ar y siart a'i fod byth yn cael ei newid yn dawel. Gorffennwch y cloc ar y rhyddhad, nid y defnydd, fel arall mae'r metrig yn rhoi'r gorau i fesur yr hyn yr arhosodd y defnyddiwr amdano.

### Olrheiniwch faint swp wrth ymyl amlder

**Parwch bob amlder â maint.** Gall tîm godi ei gyfrif defnyddio drwy dorri un newid yn sleisys nad ydynt yn ddefnyddiol yn annibynnol, ac mae'r cyfrif yn codi tra bo'r llif go iawn yn aros yr un fath. Mae maint swp canolrifol ac 85fed canradd yn dangos a yw'r sleisys yn real. Mae sypiau bach yn haws i'w hadolygu, eu profi, a'u gwrthdroi, a dyna'r budd y mae'r amlder yn ddirprwy ar ei gyfer.

### Trinwch gamau cyflwyno cynyddol fel digwyddiadau

**Cofnodwch bob cam o gyflwyniad gyda stamp amser.** Mae cyflwyniad sy'n mynd o 1 y cant i 10 y cant i bawb yn rhoi tri stamp amser, ac mae pob un yn gyfle i stopio. Cipiwch y cam, cyfran yr amlygiad, a chanlyniad y gwiriad iechyd a ganiataodd y cam nesaf. Mae hyn yn gadael i chi wahanu cyflwyniad a oedd wedi'i oedi am signal go iawn oddi wrth un a arhosodd yn ei unfan.

### Cadwch restr eiddo baneri gyda pherchennog a dyddiad dod i ben

**Rhowch berchennog, pwrpas, a dyddiad dileu arfaethedig i bob baner rhyddhau wrth ei chreu.** Gall y gwasanaeth baneri neu gofrestr blaen ddal y rhain. Adolygwch y gofrestr yn fisol a chyfrifwch y cyfrif baneri hen. Mae baner a adewir ymlaen ar ôl cyflwyniad llawn yn god marw sy'n dal i gangenu. Trinwch y dileu fel rhan o orffen ar gyfer y newid.

### Tagiwch faneri yn ôl math

**Gwahanwch faneri rhyddhau dros dro oddi wrth faneri gweithredol parhaol.** Mae switshis lladd a baneri hawl yn barhaol yn ôl dyluniad, tra dylid dileu baneri rhyddhau ar ôl cyflwyniad llawn. Mae cymysgu'r mathau yn gwneud y cyfrif hen yn swnllyd ac yn gwahodd timau i ddileu switsh y mae ei angen ar rywun yn ystod digwyddiad. Mynnwch y math pan grëir y faner.

### Cysylltwch ryddhadau â'r cofnodion digwyddiad a newid

**Cofnodwch ddynodydd y rhyddhad ar y digwyddiad a'r newid.** Dylid gallu olrhain digwyddiad rhyddhau o'r offeryn digwyddiadau, fel y gellir cysylltu achos digwyddiad â'r newid a ryddhawyd, pa un a ddefnyddiwyd yr wythnos diwethaf neu a droswyd ymlaen y bore yma. Heb y cyswllt, mae mesurau ansefydlogrwydd yn priodoli methiannau i ddyddiad y defnydd ac yn methu methiannau a achosir gan newid baner. Mae newidiadau baner mewn cynhyrchu yn newidiadau yn yr ystyr ITIL a dylent fod yn weladwy i alluogi newid, hyd yn oed pan fyddant wedi'u rhagawdurdodi fel newidiadau safonol (gweler pwnc 4.3, Metrigau galluogi newid).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Amlder defnyddio | Hollti un newid yn ddefnyddiadau dibwys; ailddefnyddio adeiladwaith heb ei newid; cyfrif defnyddiadau i lwyfannu; cyfrif defnyddiadau cyfluniad yn unig gyda'r brif gyfres | Maint swp rhyddhau a chyfran y defnyddiadau gyda newid sy'n weladwy i ddefnyddwyr; y gyfres gyfluniad ar wahân; cyfradd methiant newid wrth ei hymyl |
| Amlder rhyddhau | Ail-labelu defnyddiadau fel rhyddhadau; cyfrif baner a droswyd ymlaen i staff mewnol fel rhyddhad; rhyddhau newidiadau gwag neu gosmetig i fodloni targed; cyfrif pob cam o gyflwyniad fel rhyddhad ar wahân | Diffiniad ysgrifenedig o ryddhad; sampl o ryddhadau bob chwarter wedi'i gwirio yn erbyn newidiadau sy'n weladwy i ddefnyddwyr; maint swp a chyfrifon newid sy'n wynebu cwsmeriaid |
| Amser arweiniol rhyddhau | Dechrau'r cloc yn hwyrach, er enghraifft wrth gymeradwyo yn lle uno; eithrio newidiadau a arhosodd yn hir fel rhai "wedi'u rhwystro"; rhyddhau newid dibwys yn gyntaf i dynnu'r canolrif i lawr; gorffen y cloc wrth ddefnyddio | Yr 85fed canradd ac oedran y newid hynaf sy'n aros; dechrau ysgrifenedig sefydlog; adolygiad chwarterol o'r 10 y cant arafaf o newidiadau |
| Bwlch defnyddio-i-ryddhau | Troi baner ymlaen ar gyfer defnyddiwr tocyn i gofnodi'r rhyddhad yn gynnar; gadael cod tywyll hir allan o'r sampl drwy ei alw'n "nid rhyddhad"; dileu cod tywyll i osgoi bwlch hir | Cyfran yr amlygiad wrth ryddhau (trothwy ar gyfer yr hyn sy'n cyfrif fel wedi'i ryddhau); cyfrif newidiadau a ddefnyddiwyd ac a dynnwyd heb eu rhyddhau; cyfrif baneri hen |
| Maint swp rhyddhau | Hollti gwaith yn geisiadau tynnu artiffisial; uno newidiadau digyswllt yn un i leihau nifer y rhyddhadau; cyfrif dim ond y newid mawr mewn bwndel | Maint newid canolrifol mewn llinellau neu ffeiliau fel mesur cyd-destun; adolygiad o sampl o ryddhadau am fwndelu digyswllt; amlder wrth ymyl maint |
| Cwmpas baneri nodweddion | Ychwanegu baneri at newidiadau dibwys i godi'r gyfradd; baneru dim ond y newidiadau diogel a chludo rhai peryglus heb faneri; creu baner heb ffordd i'w throi i ffwrdd yn ymarferol | Canlyniadau prawf baner-i-ffwrdd ar gyfer sampl o faneri; y cyfrif baneri hen; achosion digwyddiadau nad oedd ganddynt faner |
| Cyfrif baneri hen | Ail-dagio baneri rhyddhau fel rhai parhaol i adael y cyfrif hen; dileu cofnod y faner gan ei gadael yn y cod; ymestyn dyddiadau dod i ben heb adolygu | Chwiliad cod cyfnodol yn erbyn y gofrestr; adolygiad o bob newid o fath baner; oedran y faner rhyddhau hynaf |

Mae darlleniad iach yn dangos defnyddiadau'n rhedeg o flaen rhyddhadau ar gyfer gwasanaethau sy'n defnyddio baneri, gyda bwlch cymedrol, maint swp bach a chyson, ac 85fed canradd amser arweiniol heb fod ymhell uwchlaw'r canolrif. Mae cwmpas baneri yn uchel ar gyfer newidiadau peryglus, ac mae'r cyfrif baneri hen yn isel neu'n disgyn. Mae darlleniad sy'n edrych yn rhy dda, megis amlder uchel ochr yn ochr â meintiau swp sy'n tyfu neu gyfrif hen o sero gyda chyfrif chwyddedig o faneri parhaol, yn haeddu archwiliad sampl cyn unrhyw ddathlu.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Defnyddio'n barhaus a rhyddhau drwy faner | Risg dechnegol fach fesul defnydd; mae amseriad rhyddhau yn dod yn ddewis busnes; diffodd cyflym | Angen disgyblaeth baneri ac offer; ychwanegu llwybrau cod y mae'n rhaid eu profi a'u dileu |
| Cyplu defnyddio a rhyddhau | Syml i'w esbonio; un digwyddiad i'w gyfrif; dim dyled baneri | Mae pob rhyddhad yn cario risg dechnegol a risg defnyddwyr, sy'n annog sypiau mawr a ryddheir yn anaml |
| Trên rhyddhau wedi'i amserlennu | Rhagweladwy i gymorth a rheoleiddwyr | Mae newidiadau'n aros am y trên nesaf; mae'r cyfrif yn adlewyrchu'r calendr, nid y gallu |
| Cyflwyno cynyddol yn ôl canran | Cyfyngu effaith rhyddhad gwael; cynhyrchu tystiolaeth ar bob cam | Angen telemetreg dda a gwiriad iechyd; gall fersiynau cymysg redeg ochr yn ochr am gyfnod |
| Cyfrif defnyddiadau a rhyddhadau | Dangos datgysylltu ac aros | Angen i log archwilio baneri neu gofnodion rhyddhau gael eu huno â'r biblinell |

Dylai gwasanaeth na all ddatgysylltu defnyddio oddi wrth ryddhau eto, er enghraifft cymhwysiad symudol a ddosberthir drwy adolygiad siop apiau, fesur yr hyn y gall: amlder rhyddhau, amser arweiniol rhyddhau, a maint swp, gydag amser adolygu'r siop yn cael ei adrodd fel aros ar wahân.

## Cwestiynau i'w trafod gyda'ch tîm

**1. A ydym yn defnyddio'r geiriau "defnyddio" a "rhyddhau" ar gyfer yr un digwyddiad, ac a yw hynny'n cyfateb i'r hyn sy'n digwydd?**
Gofynnwch i dri pherson ddisgrifio'r newid diwethaf a aeth yn fyw a nodwch pryd y cyrhaeddodd y cod a phryd y gallai defnyddwyr ei ddefnyddio gyntaf. Dylai'r hwylusydd helpu'r grŵp i gytuno ar un frawddeg ar gyfer pob term a phenderfynu pa un o'r ddau ddigwyddiad y mae pob rhif dangosfwrdd presennol yn ei fesur.

**2. Beth yw'r amser hiraf y mae newid gorffenedig wedi aros am ryddhad, a pham?**
Tynnwch y newid hynaf sydd wedi'i uno nad yw defnyddwyr yn gallu ei gyrraedd o hyd. Olrheiniwch ei lwybr o uno hyd yn awr, ac ysgrifennwch bob aros ar hyd y ffordd.

**3. Pe bai ein cyfrif defnyddio yn dyblu, beth fyddem yn ei wirio cyn ei alw'n newyddion da?**
Gwahoddwch y grŵp i enwi ffyrdd y gallai'r cyfrif godi heb i fwy o werth gyrraedd defnyddwyr. Edrychwch ar faint swp, cyfran y defnyddiadau gyda newid sy'n weladwy i ddefnyddwyr, a'r ffigurau methiant ac ailwaith. Dylai'r hwylusydd nodi pa rai o'r gwiriadau hyn sydd eisoes ar y dangosfwrdd a pha rai sydd angen eu hychwanegu cyn i unrhyw un osod targed.

**4. Pa un o'n baneri y byddem yn ofni eu dileu, a beth mae hynny'n ei ddweud wrthym?**
Cerddwch drwy'r gofrestr baneri a dewiswch y tair hynaf. Gofynnwch pwy sy'n berchen ar bob un, beth mae'n ei warchod, a beth fyddai'n digwydd pe bai'n cael ei ddileu. Mae ofn dileu fel arfer yn golygu prawf ar goll, perchennog ar goll, neu gofnod pwrpas ar goll. Cytunwch ar ddyddiad dileu ar gyfer o leiaf un ac ar y gwiriad a fyddai'n gwneud dileu yn ddiogel.

**5. Pwy sy'n penderfynu pryd y rhyddheir newid, ac a oes ganddynt y wybodaeth sydd ei hangen arnynt?**
Lle mae rhyddhau yn ddewis busnes, mae angen i'r person sy'n ei wneud weld cyflwr y cyflwyniad, y signalau iechyd, a pharodrwydd cymorth. Gofynnwch ble mae'r ffeithiau hynny'n byw heddiw a pha mor gyflym y gall y penderfynwr wrthdroi rhyddhad.

**6. Pa ryddhad yn y chwarter diwethaf a aeth waethaf, a pha fesur fyddai wedi ein rhybuddio?**
Dewiswch un rhyddhad a achosodd drafferth a darllenwch yr amserlen gyda'ch gilydd. Gofynnwch a oedd y swp yn fawr, a oedd y bwlch yn hir, a oedd gan y cyflwyniad gamau, ac a allai baner fod wedi cyfyngu'r niwed. Dewiswch un mesur i'w ychwanegu neu un trothwy i'w dynhau o ganlyniad.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn defnyddio'r mesurau hyn i weld a yw eu piblinell a'u baneri yn rhoi rheolaeth iddynt dros amlygiad mewn gwirionedd. Y golygon mwyaf defnyddiol yw'r bwlch, maint y swp, ac oedran y newid hynaf sy'n aros, oherwydd bod pob un yn pwyntio at rywbeth y gall y tîm ei newid.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau a chymorth yn poeni beth sy'n newid mewn cynhyrchu a phryd. Mae angen i ddigwyddiadau rhyddhau a newidiadau baner fod yn weladwy iddynt, yn ddelfrydol gyda dynodydd rhyddhad ar bob digwyddiad. Mae cyflwyniadau fesul cam a diffodd cyflym yn lleihau nifer y digwyddiadau sydd angen adferiad llawn, ac mae'r mesurau'n helpu timau gweithrediadau i ofyn am y rheolaethau sy'n gwneud eu gwaith yn dawelach.

### Arweinyddiaeth a llywodraethu

Dylai arweinwyr ofyn am dueddiadau a lledaeniad ar gyfer pob gwasanaeth, ac am yr ateb i gwestiwn syml: pa mor hir y mae newid gorffenedig yn ei gymryd i gyrraedd defnyddwyr, ac mor ddiogel. Mae targed ar gyfer amlder defnyddio ar draws timau yn gwahodd hollti ac ail-labelu, felly ffafriwch dargedau ar gyfer canlyniadau megis dosbarthiadau amser arweiniol ac ar gyfer dileu aros hysbys. Gall llywodraethu leihau llwyth cymeradwyaethau rhyddhau drwy ragawdurdodi newidiadau baneredig risg isel, cyn belled â bod y llwybr archwilio baneri yn gyflawn (gweler pwnc 4.3, Metrigau galluogi newid).

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn gweld rhyddhadau, nid defnyddiadau. Maent yn poeni bod atgyweiriadau'n cyrraedd yn fuan, nad yw ymddygiad newydd yn eu synnu, a bod modd gwrthdroi newid gwael yn gyflym. Gall tîm sy'n gwahanu'r ddau ddigwyddiad roi mynediad cynnar i gwsmeriaid at nodwedd, gall gyhoeddi dyddiad y gall ei gadw, a gall ddychwelyd un nodwedd heb golli'r gweddill. Parwch y mesurau hyn â rhai sy'n wynebu cwsmeriaid (gweler pwnc 5.3, Metrigau argaeledd, a phwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein rhanbarthol yn rhedeg gwasanaeth chwilio cynnyrch sy'n eiddo i un tîm cynnyrch, a gefnogir gan dîm platfform a'r ddesg gwasanaeth. Mae'r gwasanaeth yn defnyddio i gynhyrchu drwy biblinell ac mae ganddo wasanaeth baneri a gyflwynwyd chwe mis yn ôl. Mae'r holl rifau isod yn enghreifftiol.

Dros y chwarter diwethaf gwnaeth y tîm 52 o ddefnyddiadau cynhyrchu, tua phedwar yr wythnos. Roedd amlder rhyddhau, wedi'i gyfrif fel y eiliadau pan ddaeth newid yn gyraeddadwy gan bob defnyddiwr bwriadedig, yn 11 ar gyfer yr un chwarter, tua un yr wythnos. Canolrif amser arweiniol rhyddhau, o uno i ryddhau, oedd 9 diwrnod, gydag 85fed canradd o 21 diwrnod. Canolrif y bwlch defnyddio-i-ryddhau oedd 6 diwrnod. Canolrif maint swp rhyddhau oedd 3 newid a'r 85fed canradd oedd 14. Roedd cwmpas baneri ar gyfer newidiadau sy'n weladwy i ddefnyddwyr yn 58 y cant, ac roedd 17 baner rhyddhau fwy na 30 diwrnod ar ôl cyflwyniad llawn.

Mae'r risg chwarae'r system eisoes yn weladwy. Roedd rhai defnyddiadau'n gyfluniad yn unig, ac roedd y biblinell yn cyfrif pob un fel defnydd, felly mae'r dangosfwrdd bellach yn dangos cyfres gyfluniad ar wahân ac mae'r adolygiad misol yn samplu 10 defnydd am newid sy'n weladwy i ddefnyddwyr. Mae rheolwr rhanbarthol yn gweld y cyfrif defnyddio ac yn gofyn i'r tîm ei godi i gyd-fynd â ffigur tîm arall. Mae arweinydd y tîm yn gwrthsefyll y targed ac yn dod â'r set lawn o rifau i'r adolygiad misol yn lle hynny. Mae'r adolygiad yn canfod bod y bwlch yn hir oherwydd bod rhyddhadau'n aros am sesiwn friffio wythnosol marchnata a chymorth, bod pedair o'r 17 baner hen yn gwarchod llwybrau cod nad oes neb wedi'u profi, ac bod yr 85fed canradd o faint swp yn dod o ychydig o ryddhadau a fwndelodd newidiadau digyswllt cyn rhewi gwyliau.

Mae gan y penderfyniad, a gofnodwyd yn y log penderfyniadau, bedair rhan. Bydd cymorth a marchnata yn cymryd rhan mewn sesiwn friffio fyrrach, ddwywaith yr wythnos, fel nad yw'r penderfyniad rhyddhau yn aros am y slot wythnosol mwyach. Mae pob baner rhyddhau yn cael perchennog a dyddiad dileu, ac mae'r pedair baner hen heb eu profi yn cael eu dileu yn y pythefnos nesaf. Mae angen rheswm a nodwyd yn y cofnod rhyddhau ar ryddhadau sy'n bwndelu newidiadau digyswllt. Ac mae'r tîm yn gwrthod y targed defnyddio cyffredin, gan gynnig golwg a rennir o ddosbarthiad amser arweiniol rhyddhau a hylendid baneri pob gwasanaeth yn lle hynny. Mae'r rheolwr newid yn cytuno i drin newidiadau baneredig sy'n pasio gwiriadau'r biblinell fel newidiadau safonol, gydag adolygiad y chwarter nesaf. Yn y chwarter nesaf (enghreifftiol), mae canolrif amser arweiniol rhyddhau yn disgyn i 5 diwrnod, mae'r cyfrif baneri hen yn disgyn i 6, ac mae'r gyfradd methiant newid yn aros yn gyson, felly mae'r arbrawf yn parhau.

## Y golwg fesul sector

**Busnes newydd.** Yn aml mae gan fusnes newydd un gwasanaeth a llyfrgell baneri yn y cod, felly gellir gwahanu defnyddio a rhyddhau yn rhad. Cadwch gofrestr syml o faneri gyda dyddiadau dod i ben, ac arhoswch am ddigon o gyfaint cyn ymddiried mewn canraddau.

**Busnes bach.** Efallai y bydd busnes bach yn rhedeg meddalwedd wedi'i phecynnu neu wedi'i phrynu lle mae'r cyflenwr yn rheoli'r rhyddhad. Y mesurau defnyddiol yw'r amser rhwng rhyddhad y cyflenwr a'r busnes yn ei fabwysiadu, a'r swp o newidiadau sy'n cyrraedd gyda'i gilydd mewn fersiwn fawr. Cofnodwch ddyddiadau rhyddhau'r cyflenwr a'ch dyddiadau defnyddio eich hun fel bod yr aros rhyngddynt yn weladwy.

**Menter fawr.** Mae menter yn wynebu llawer o wasanaethau ar wahanol arddulliau rhyddhau, proses newid ganolog, ac amgylcheddau a rennir. Y prif waith yw cytuno ar ddiffiniadau defnyddio a rhyddhau ar draws timau a chyflenwyr, a chadw crynodeb sy'n parchu'r gwahaniaethau. Defnyddiwch lediad a thueddiadau ar gyfer llywodraethu a thrinwch y platfform baneri fel gwasanaeth a rennir gyda pherchennog.

**Llywodraeth a'r sector cyhoeddus.** Yn aml mae rhyddhadau wedi'u clymu i ddyddiadau sefydlog, deddfwriaeth, cylchoedd caffael, neu byrth sicrwydd, felly gall amlder rhyddhau fod yn isel am resymau da. Gall amlder defnyddio a'r bwlch defnyddio-i-ryddhau ddangos o hyd faint o'r risg a gymerwyd yn gynnar a faint sy'n aros am y dyddiad. Adroddwch yr aros am byrth allanol ar wahân i amser piblinell y tîm ei hun.

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad dros y mesurau hyn yw lleihau'r risg a'r oedi rhwng gorffen newid a chyflwyno ei werth. Mae sypiau mawr a ryddheir yn anaml yn cario mwy o newid fesul digwyddiad, felly mae methiant yn anoddach ei ddiagnosio ac yn anoddach ei wrthdroi. Mae gwahanu defnyddio oddi wrth ryddhau yn rhoi ffordd i'r tîm gymryd risg dechnegol yn gynnar ac mewn symiau bach, a chymryd risg defnyddwyr yn fwriadol. Mae'r mesurau'n dangos a yw'r gwahanu yn real, a ble mae newid yn aros.

Mae'r costau'n gymedrol. Mae casglu digwyddiadau defnyddio a rhyddhau angen y log piblinell a'r log archwilio baneri wedi'u huno â rheoli fersiynau a'r traciwr materion, sy'n integreiddiad un-waith wedi'i ddilyn gan gynnal achlysurol (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth). Mae gan yr arfer baneri ei hun gostau rhedeg: y platfform neu'r llyfrgell, y gofrestr, profi dau lwybr newid baneredig, a glanhau baneri sydd wedi dod i ben. Y prif gost gudd yw dyled baneri, y mae'r cyfrif baneri hen yn ei chadw'n weladwy.

Mae'r elw'n dilyn patrwm y gall y rhan fwyaf o dimau ei arsylwi yn eu data eu hunain. Mae amser arweiniol rhyddhau byrrach yn golygu dolen adborth gyflymach ar a yw newid yn helpu defnyddwyr. Mae sypiau llai yn golygu diagnosis haws a gwrthdroi haws. Mae bwlch defnyddio-i-ryddhau byrrach yn golygu llai o amser y mae gwaith gorffenedig yn eistedd heb ei wireddu. Peidiwch â dyfeisio ffigur ar gyfer y gwerth. Defnyddiwch enghreifftiau'r tîm ei hun o newidiadau a eisteddodd yn dywyll am wythnosau a thuedd ei fesurau ei hun.

## Gwrthbatrymau a maglau

- **Gosod targed amlder defnyddio ar gyfer pob tîm.** Mae'n gwahodd hollti ac ail-labelu. Gosodwch dargedau canlyniad, megis dosbarthiad amser arweiniol culach, a gadewch i amlder ddilyn.
- **Trin trên rhyddhau fel prawf o allu.** Mae calendr sefydlog yn rhoi cyfrif cyson ac yn cuddio oedran gwaith sy'n aros. Olrheiniwch oedran y newid hynaf sydd wedi'i uno na all defnyddwyr ei gyrraedd.
- **Cyfrif newidiadau cyfluniad fel defnyddiadau yn y brif gyfres.** Mae'n chwyddo'r rhif. Cadwch gyfres ar wahân a'i dangos wrth ymyl y brif un.
- **Peidio byth â dileu baneri.** Mae'r cod yn cronni canghennau marw a chyfuniadau heb eu profi. Rhowch berchennog a dyddiad dileu i bob baner rhyddhau, a thrinwch ddileu fel rhan o orffen.
- **Newid baneri mewn cynhyrchu heb gofnod.** Mae newid baner yn newid i ymddygiad cynhyrchu. Anfonwch ef i'r log archwilio a'i wneud yn weladwy i alluogi newid.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a chlociau | Defnyddir "defnyddio" a "rhyddhau" yn gyfnewidiol; mae pob person yn cyfrif yn wahanol | Mae ychydig o dimau yn ysgrifennu eu diffiniadau eu hunain | Un diffiniad ysgrifenedig o ddefnyddio a rhyddhau, gyda chlociau ac eithriadau, yn y gofrestr metrigau | Logir newidiadau diffiniad a'u marcio ar siartiau; samplau wedi'u gwirio bob chwarter | Diffiniadau wedi'u diwygio ar y cyd â chyflenwyr a llywodraethu pan fyddant yn peidio â hysbysu penderfyniadau |
| Gwahanu defnyddio a rhyddhau | Mae pob defnydd yn ryddhad | Mae rhai timau yn defnyddio baneri neu gyflwyniadau fesul cam ar gyfer newidiadau peryglus | Mae baneri a chyflwyniadau fesul cam yn opsiwn safonol, gyda digwyddiadau rhyddhau wedi'u cofnodi | Bwlch, maint swp, a chamau cyflwyno wedi'u tueddu a'u hadolygu | Amseru rhyddhau wedi'i gydlynu ar draws timau a chyflenwyr ar gyfer gwasanaethau cysylltiedig |
| Cipio data | Cyfrifon wedi'u cydosod â llaw o docynnau a sgwrs | Data piblinell ar gyfer rhai gwasanaethau; rhyddhadau wedi'u cofnodi â llaw | Defnyddiadau, rhyddhadau, a newidiadau baneri wedi'u cipio'n awtomatig ar gyfer y rhan fwyaf o wasanaethau | Ansawdd data (cyfradd cysylltu, archwiliad samplau) wedi'i fesur a'i dueddu | Digwyddiadau wedi'u rhannu ar draws timau a chyflenwyr drwy ryngwynebau y cytunwyd arnynt |
| Hylendid baneri | Dim rhestr eiddo | Rhestr anffurfiol mewn rhai timau | Cofrestr gyda pherchennog, math, a dyddiad dod i ben ar gyfer pob baner rhyddhau | Cyfrif baneri hen wedi'i dueddu; mae dileu yn rhan o orffen ac yn cael ei wirio | Platfform baneri wedi'i reoli fel gwasanaeth a rennir gyda nodiadau atgoffa dod i ben awtomataidd |
| Defnyddio'r rhifau | Wedi'u hadrodd i fyny fel un cyfrif | Mae timau'n edrych ar eu siartiau eu hunain o bryd i'w gilydd | Wedi'u hadolygu'n fisol gan y tîm sy'n berchen arnynt wrth ymyl ffigurau methiant ac ailwaith | Mae tueddiadau'n bwydo gwelliant wedi'i ariannu gyda rheilen warchod | Mae lledaeniad a thueddiadau yn hysbysu buddsoddiad platfform a pholisi newid ar draws y sefydliad |

## Rhestr wirio

- [ ] Diffinnir "defnyddio" a "rhyddhau" yn ysgrifenedig, gyda digwyddiadau'r cloc ac eithriadau ar gyfer pob un.
- [ ] Cipir defnyddiadau i gynhyrchu yn awtomatig o'r biblinell, gydag amgylcheddau prawf wedi'u heithrio.
- [ ] Cipir digwyddiadau rhyddhau o'r log archwilio baneri, camau cyflwyno, neu gofnodion rhyddhau.
- [ ] Mae amser arweiniol rhyddhau yn defnyddio dechrau cloc a nodwyd ac yn adrodd y canolrif a'r 85fed canradd.
- [ ] Adroddir y bwlch defnyddio-i-ryddhau a maint swp rhyddhau wrth ymyl amlder.
- [ ] Mae defnyddiadau cyfluniad yn unig yn ymddangos mewn cyfres ar wahân.
- [ ] Mae gan bob baner rhyddhau berchennog, math, a dyddiad dod i ben mewn cofrestr.
- [ ] Adolygir baneri hen yn fisol ac mae eu dileu yn rhan o orffen.
- [ ] Mae dynodwyr rhyddhau yn ymddangos ar gofnodion digwyddiadau a newidiadau.
- [ ] Archwilir sampl o ddefnyddiadau a rhyddhadau bob chwarter yn erbyn y diffiniadau.
- [ ] Mae un arbrawf gwella, wedi'i glymu â'r aros hiraf, yn rhedeg gyda dyddiad adolygu.

## Anogwyr AI

**Drafftiwch ddiffiniadau o ddefnyddio a rhyddhau ar gyfer gwasanaeth.**

```text
Rwy'n diffinio metrigau rhyddhau a defnyddio ar gyfer [enw'r gwasanaeth]. Ein
hoffer yw [gwesteiwr rheoli fersiynau, system CI/CD, gwasanaeth baneri,
traciwr materion, offeryn ITSM]. Ein harddull rhyddhau yw [parhaus, trên
wythnosol, misol, adolygiad siop, neu arall]. Ar gyfer amlder defnyddio, amlder
rhyddhau, amser arweiniol rhyddhau, bwlch defnyddio-i-ryddhau, maint swp
rhyddhau, cwmpas baneri nodweddion, a chyfrif baneri hen, drafftiwch ddiffiniad
sy'n nodi ble mae'r cloc yn dechrau ac yn stopio, beth a gyfrifir a'i eithrio, y
ffynhonnell data, ac un amwysedd i'w ddatrys. Peidiwch â dyfeisio gwerthoedd
meincnod na honni bod ein harfer yn cyfateb i unrhyw fand perfformiad
cyhoeddedig. Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb i
orffen y diffiniadau.
```

**Gwiriwch set metrigau rhyddhau am risgiau chwarae'r system.**

```text
Dyma sut yr ydym yn cyfrifo ac yn adrodd ein metrigau rhyddhau a defnyddio:
[disgrifiad o bob metrig, ei ffynhonnell data, a sut y caiff ei adrodd]. Y
gynulleidfa yw [tîm, arweinyddiaeth, neu gorff llywodraethu] a'r targedau, os
oes rhai, yw [targedau neu ddim]. Ar gyfer pob metrig, rhestrwch ffyrdd
credadwy y gellid chwyddo'r rhif, ei guddio, neu ei ystumio heb welliant go
iawn, ac awgrymwch fetrig neu arfer rheilen warchod pâr a fyddai'n ei ddal.
Peidiwch â dyfeisio ystadegau. Rhestrwch eich rhagdybiaethau ac unrhyw wybodaeth
y byddai ei hangen arnoch i fod yn fwy manwl.
```

**Dadansoddwch allforiad o ddefnyddiadau, rhyddhadau, a baneri.**

```text
Byddaf yn gludo allforiad bach gyda'r meysydd hyn: [rhestr meysydd, er enghraifft
id defnydd, amser defnyddio, canlyniad, ids newid, enw baner, amser baner
ymlaen, cyfran amlygiad, amser rhyddhau]. Mae'n cwmpasu [nifer] o ddefnyddiadau
a [nifer] o faneri ar gyfer [enw'r gwasanaeth] rhwng [dyddiad dechrau] a
[dyddiad gorffen]. Cyfrifwch ganolrif ac 85fed canradd amser arweiniol rhyddhau
a'r bwlch defnyddio-i-ryddhau, y dosbarthiad maint swp, a'r rhestr o faneri
sydd y tu hwnt i [terfyn oedran] diwrnod ers cyflwyniad llawn, gan ddangos y
cyfrifon y tu ôl i bob un. Nodwch gofnodion gyda chysylltiadau ar goll neu
stampiau amser amheus. Peidiwch ag allosod y tu hwnt i'r data na chymharu'r
canlyniad â meincnodau allanol. Rhestrwch eich rhagdybiaethau a'r materion
ansawdd data sy'n cyfyngu'r casgliadau.
```

**Cynlluniwch arbrawf glanhau baneri ac aros rhyddhau.**

```text
Ein haros rhyddhau hiraf yw [disgrifiad o'r aros, gydag ystod dyddiadau a
chyfrifon], ac mae ein cofrestr baneri yn dal [nifer] o faneri rhyddhau, a
mae [nifer] ohonynt wedi mynd heibio eu dyddiad dod i ben. Y cyfyngiadau yw
[cyfyngiadau, er enghraifft rhyddhadau rheoledig, adolygiad siop, amgylchedd
prawf a rennir]. Cynigiwch dri arbrawf bach o bedair i chwe wythnos, pob un â
rhagdybiaeth, ffordd o arsylwi'r effaith, metrig rheilen warchod, a risg.
Peidiwch â dyfeisio ffigurau gwelliant disgwyliedig. Rhestrwch eich
rhagdybiaethau a'r hyn y dylem ei wirio cyn dechrau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau newid, rhyddhau a digwyddiadau cysylltiedig a'r rheilen warchod a ddylai eistedd wrth ymyl pob metrig rhyddhau.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod fersiwn ddiwygiedig o'r pwnc hwn yn cadw ei glociau, ei ffyrdd o chwarae'r system, a'i groesgyfeiriadau yn gyson.

## Pwyntiau allweddol

- Mae defnydd yn rhoi fersiwn mewn amgylchedd ac mae rhyddhad yn gwneud newid yn gyraeddadwy gan ddefnyddwyr. Mesurwch y ddau ar wahân lle gallwch.
- Dylai amser arweiniol rhyddhau ddod i ben ar y rhyddhad, gyda dechrau a nodwyd, a chael ei adrodd fel canolrif ac 85fed canradd.
- Mae'r bwlch defnyddio-i-ryddhau a maint swp yn dangos a yw datgysylltu yn real, ac maent yn gwarchod amlder rhag hollti ac ail-labelu.
- Mae baneri nodweddion yn gwneud gwahanu'n bosibl ac yn cario cost, felly olrheiniwch gwmpas a baneri hen gyda pherchnogion a dyddiadau dod i ben.
- Cyfrwch yn ôl rheolau ysgrifenedig, cysylltwch ryddhadau â digwyddiadau a newidiadau, a chymharwch wasanaeth â'i hanes ei hun yn lle â thimau eraill.

## Cyfeiriadau a darllen pellach

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Humble, J., and Farley, D., *Continuous Delivery: Reliable Software Releases through Build, Test, and Deployment Automation*, Addison-Wesley, 2010.
3. DORA, *DORA's software delivery performance metrics*, Google Cloud, https://dora.dev/guides/dora-metrics/
4. Hodgson, P., "Feature Toggles (aka Feature Flags)," martinfowler.com, 2017, https://martinfowler.com/articles/feature-toggles.html
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Wikipedia, [Software deployment](https://en.wikipedia.org/wiki/Software_deployment).
7. Wikipedia, [Release management](https://en.wikipedia.org/wiki/Release_management).
8. Wikipedia, [Feature toggle](https://en.wikipedia.org/wiki/Feature_toggle).
9. Wikipedia, [Canary release](https://en.wikipedia.org/wiki/Canary_release).
10. Wikipedia, [Blue-green deployment](https://en.wikipedia.org/wiki/Blue-green_deployment).
11. Wikipedia, [Continuous delivery](https://en.wikipedia.org/wiki/Continuous_delivery).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
