# Mesurau llif

**Mae pedwar cyfrif a chloc plaen, gwaith ar y gweill, trwybwn, oedran eitem waith ac amser cylch, yn dweud wrth dîm ble mae ei waith yn sownd a beth y gall ei addo, ar yr amod bod pob un wedi'i ddiffinio yn yr un ffordd ar gyfer gwaith prosiect a gwaith gwasanaeth a'i ddarllen fel dosbarthiad yn hytrach na chyfartaledd.**

## Crynodeb a chymhelliant

Mae'r rhan fwyaf o ddangosfyrddau cyflawni a gwasanaeth yn adrodd yr hyn a orffennodd y mis diwethaf. Mae mesurau llif yn ychwanegu'r golwg sy'n bwysig tra bo'r gwaith yn dal i symud: faint sydd ar y gweill ar hyn o bryd, pa mor hen yw pob eitem, pa mor gyflym y mae eitemau'n gorffen, a pha mor hir y maent yn ei gymryd. Mae'r llenyddiaeth llif yn rhoi diffiniadau manwl i'r pedwar mesur hyn. Mae Canllaw Kanban (kanbanguides.org, y fersiwn gyfredol ym mis Hydref 2026) yn un ffynhonnell glir: mae'n eu henwi fel y mesurau y mae tîm yn eu defnyddio i archwilio ac addasu ei lif gwaith, ac mae'r pwnc hwn yn dilyn y diffiniadau hynny heb fynnu unrhyw ddull neu fwrdd penodol.

Mae'r pedwar diffiniad yn fyr. **Gwaith ar y gweill (WIP)** yw nifer yr eitemau gwaith sydd wedi dechrau ond heb orffen. **Trwybwn** yw nifer yr eitemau gwaith a orffennir fesul uned o amser. **Oedran eitem waith** yw'r amser a aeth heibio rhwng pan ddechreuodd eitem waith a'r amser presennol, felly mae'n berthnasol dim ond i eitemau sy'n dal ar y gweill. **Amser cylch** yw'r amser a aeth heibio rhwng pan ddechreuodd eitem waith a phan orffennodd, gan gyfrif y ddau ddiwrnod yn gynhwysol yn geiriad y Canllaw. **Eitem waith** yw uned o waith y mae'r tîm wedi dewis ei holrhain fel un peth, megis stori defnyddiwr, digwyddiad, cais gwasanaeth neu newid. **Llif gwaith** yw'r set o gyflyrau rhwng "dechrau" a "gorffen," ac mae **diffiniad llif gwaith** ysgrifenedig y tîm yn dweud pa gyflyrau yw'r rheini.

Mae dau o'r pedwar yn ymwneud â'r system gyfan (WIP a thrwybwn) a dau yn ymwneud ag eitemau unigol (oedran ac amser cylch). Y pâr ar gyfer eitemau gorffenedig yw trwybwn ac amser cylch. Y pâr ar gyfer eitemau heb eu gorffen yw WIP ac oedran. Mae'r hollt hon yn bwysig oherwydd bod mesurau eitemau gorffenedig ar eu hôl hi: maent yn dweud wrthych sut yr aeth pethau. Mae mesurau eitemau heb eu gorffen yn arweiniol: maent yn dweud wrthych beth sydd ar fin digwydd, tra bo amser o hyd i weithredu. Oedran eitem waith yw'r lleiaf a ddefnyddir o'r pedwar, ac fel arfer dyma'r un cyntaf sy'n werth ei ychwanegu at fwrdd.

Nid yw'r berthynas rhwng y tri cyntaf yn ddamweiniol. Mae [cyfraith Little](https://en.wikipedia.org/wiki/Little%27s_law), canlyniad o [ddamcaniaeth ciwio](https://en.wikipedia.org/wiki/Queueing_theory), yn dweud bod nifer cyfartalog yr eitemau yn y system, mewn system sefydlog, yn hafal i'r gyfradd cyrraedd gyfartalog wedi'i lluosi â'r amser cyfartalog y mae pob eitem yn ei dreulio yno. Yn nhermau llif, mae WIP cyfartalog wedi'i glymu wrth drwybwn cyfartalog ac amser cylch cyfartalog. Mae'r gyfraith yn dal dim ond o dan amodau y mae'r pwnc yn dychwelyd atynt yn yr Argymhellion (gweler pwnc 2.3, Gwaith ar y gweill a chiwio, am y driniaeth lawn). Mae'r canlyniad ymarferol yn syml: os yw trwybwn yn aros yn fras yn gyson, mae mwy o waith ar y gweill yn golygu amseroedd cylch hirach.

Mae'r golygon ystwyth ac ITIL yn cwrdd yma gyda geirfaoedd gwahanol. Mewn arfer ystwyth, mae mesurau llif yn perthyn i fwrdd y tîm ac fe'u defnyddir mewn adolygiad rheolaidd gyda rhanddeiliaid ac ym myfyrdod y tîm ei hun ar sut i wella. Yn ITIL 4, mae'r un rhifau'n disgrifio sut mae rheoli digwyddiadau, rheoli ceisiadau gwasanaeth a galluogi newid yn symud cofnodion drwy gyflyrau, ac maent yn bwydo'r arfer mesur ac adrodd a rheoli lefelau gwasanaeth. Mae digwyddiad yn eitem waith. Mae cais gwasanaeth yn eitem waith. Mae gan y ddau ddechrau, diwedd ac oedran rhyngddynt. Mae'r ddesg gwasanaeth ITIL a'r tîm cyflawni'n gwneud yr un math o waith o safbwynt mesur: mae eitemau'n cyrraedd, yn aros, yn cael eu gweithio, ac yn gadael.

Mae'r mesurau hefyd yn cysylltu â [datblygu meddalwedd main](https://en.wikipedia.org/wiki/Lean_software_development), sy'n trin aros fel prif ffynhonnell gwastraff, ac â'r [diagram llif cronnus](https://en.wikipedia.org/wiki/Cumulative_flow_diagram), siart o gyrraedd a gadael cronnus sy'n dangos WIP, trwybwn ac amser cylch ar un olwg. Mae'r siart yn ddewisol. Gellir cyfrifo'r pedwar mesur o dabl o eitemau â dau ddyddiad yr un.

Gan fod amser cylch ac oedran yn hydoedd â chynffon hir ar y dde, mae un cyfartaledd yn camarwain. Mae [canradd](https://en.wikipedia.org/wiki/Percentile) megis yr 85fed yn dweud wrth dîm "mae 85 y cant o eitemau yn gorffen o fewn y nifer hwn o ddiwrnodau," sy'n rhagolwg defnyddiadwy ac yn addewid defnyddiadwy (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Mae'r llenyddiaeth llif yn galw addewid o'r fath yn **ddisgwyliad lefel gwasanaeth (SLE)**: pa mor hir y dylai eitem nodweddiadol ei gymryd, wedi'i ddatgan fel amser a thebygolrwydd. Rhagolwg y tîm ei hun yw SLE. Nid yw'n [gytundeb lefel gwasanaeth](https://en.wikipedia.org/wiki/Service-level_agreement), sy'n ymrwymiad a negodwyd gyda chwsmer (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

## Egwyddorion allweddol

- **Cyfrifwch eitemau cyfan sy'n cyd-fynd ag un diffiniad o ddechrau a gorffen.** Mae hollti neu uno eitemau i wella rhif yn dinistrio cymaroldeb. Cytunwch beth yw eitem waith, a chadwch y diffiniad yn sefydlog.
- **Diffiniwch y clociau cyn casglu'r data.** Mae amser cylch ac oedran yn dibynnu ar ba gyflwr sy'n golygu "dechrau" a pha un sy'n golygu "gorffen." Ysgrifennwch y ddau, a chofnodwch bob newid iddynt (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).
- **Edrychwch ar waith heb ei orffen yn gyntaf.** Oedran a WIP yw'r unig fesurau a all newid canlyniad o hyd. Mae trwybwn ac amser cylch yn cadarnhau'r hyn a ddigwyddodd eisoes.
- **Adroddwch ddosbarthiadau, nid cyfartaleddau.** Dangoswch ganraddau ar gyfer amser cylch ac oedran, a rhediad o gyfrifon wythnosol ar gyfer trwybwn, fel bod siâp yr amrywiad yn weladwy.
- **Defnyddiwch y mesurau i reoli'r llif gwaith, nid pobl.** Llif gwaith y tîm yw'r uned ddadansoddi. Peidiwch byth â graddio unigolion yn ôl eitemau a orffennwyd neu amser cylch.
- **Cyfyngwch WIP i wneud llif yn rhagweladwy.** Polisi yw terfyn WIP, nid nod. Mae'r terfyn yn bodoli i ddatgelu ciwiau a byrhau amser cylch.
- **Gwahanwch amser llif oddi wrth gywirdeb cynllunio.** Mae mesurau llif yn disgrifio sut mae gwaith yn symud. Maent yn dweud dim ar eu pen eu hunain ynghylch a ddewiswyd y gwaith iawn (gweler pwnc 1.3, Canlyniadau yn hytrach nag allbwn: dewis beth i'w fesur).

## Diffiniadau metrigau

Mae pob rhes yn cyfrif eitemau ar lif gwaith un tîm. Eithrir eitemau sy'n dal ar y gweill o amser cylch a thrwybwn, ac eithrir eitemau gorffenedig o oedran a WIP.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Gwaith ar y gweill (WIP) | Eitemau gwaith a ddechreuwyd ond na orffennwyd | Cyfrif eitemau y mae eu stamp amser dechrau wedi'i osod a'u stamp amser gorffen yn wag, ar adeg a nodir (er enghraifft diwedd pob diwrnod); eithrir eitemau ôl-groniad nas dechreuwyd ac eitemau gorffenedig | eitemau | Hanes cyflwr olrheinydd materion neu offeryn ITSM | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth; galluogi newid | Terfyn WIP; ôl-groniad tîm ar y gweill | Ciplun dyddiol, wedi'i adolygu'n wythnosol |
| Trwybwn | Eitemau gwaith a orffennir fesul uned o amser | Cyfrif eitemau y mae eu stamp amser gorffen yn syrthio yn y cyfnod (er enghraifft wythnos galendr, dydd Llun i ddydd Sul); mae eitemau a orffennwyd ac yna a ailagorwyd yn cyfrif eto dim ond os ydynt yn eitemau newydd | eitemau yr wythnos | Hanes cyflwr olrheinydd materion neu offeryn ITSM | Rheoli digwyddiadau; cyflawni ceisiadau gwasanaeth | Trwybwn; eitemau wedi'u cwblhau | Wythnosol |
| Oedran eitem waith | Yr amser a aeth heibio y mae eitem heb ei gorffen wedi bod ar y gweill | Yr amser presennol llai y stamp amser dechrau, ar gyfer eitemau sy'n dal ar y gweill; mae'r cloc yn rhedeg drwy amser wedi'i rwystro; eithrir eitemau nas dechreuwyd eto | diwrnodau | Hanes cyflwr olrheinydd materion neu offeryn ITSM | Rheoli digwyddiadau; rheoli problemau | Oedran eitem waith; cofrestru dyddiol y tîm | Dyddiol, wedi'i adolygu ym mhob cofrestru tîm |
| Amser cylch | Yr amser a aeth heibio o ddechrau i orffen eitem orffenedig | Stamp amser gorffen llai stamp amser dechrau, mewn diwrnodau calendr, yn gynhwysol; mae'r cloc yn dechrau ar y symudiad cyntaf i gyflwr dechrau ac yn stopio ar y symudiad i gyflwr gorffen; adroddwch y canolrif a'r 85fed a'r 95fed canradd | diwrnodau | Hanes cyflwr olrheinydd materion neu offeryn ITSM | Rheoli digwyddiadau; cyflawni ceisiadau gwasanaeth; galluogi newid | Amser cylch; hyd eitem | Wythnosol, gyda ffenestr dreigl o 8 i 12 wythnos |
| Cyrhaeddiad SLE | Cyfran yr eitemau gorffenedig a fodlonodd ddisgwyliad lefel gwasanaeth y tîm | Eitemau gorffenedig ag amser cylch ar neu o dan yr SLE / pob eitem a orffennwyd yn y ffenestr; eithrir eitemau sy'n dal ar agor | canran | Deillio o amser cylch | Rheoli lefelau gwasanaeth | Disgwyliad lefel gwasanaeth | Misol |
| Cyfran amser wedi'i rwystro | Cyfran y diwrnodau ar y gweill a dreuliodd eitemau wedi'u nodi fel rhai wedi'u rhwystro | Diwrnodau-eitem mewn cyflwr wedi'i rwystro / diwrnodau-eitem ar y gweill, dros y ffenestr; mae'r cloc ar gyfer y ddau yn dechrau wrth y stamp amser dechrau | canran | Baneri olrheinydd materion neu statws wedi'i rwystro yn yr offeryn ITSM | Rheoli digwyddiadau; rheoli problemau; rheoli cyflenwyr | Rhwystrau; rhwystrau a godir mewn cofrestru dyddiol y tîm | Wythnosol |

Mae amser cylch yma yn dilyn diffiniad y llenyddiaeth llif. Mae'n wahanol i syniad ITIL o amser datrys, a fesurir yn aml o'r funud yr agorir tocyn a gall eithrio amser ar ddal. Rhaid i dîm sydd eisiau cymharu'r ddau eu labelu, ac mae pwnc 2.2 yn trin y clociau'n fanwl (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif). Deillir cyrhaeddiad SLE a chyfran amser wedi'i rwystro o'r pedwar mesur craidd ac fe'u cynhwysir oherwydd dyna sut mae tîm yn defnyddio'r mesurau hynny o ddydd i ddydd.

## Argymhellion

### Diffiniwch y llif gwaith a'r eitemau

**1. Ysgrifennwch y diffiniad llif gwaith cyn i chi siartio unrhyw beth.** Rhestrwch y cyflyrau, dywedwch pa un sy'n golygu "dechrau" a pha un sy'n golygu "gorffen," a nodwch pwy a gaiff symud eitem rhyngddynt. Mae'r llenyddiaeth llif yn galw hyn yn ddiffiniad llif gwaith, ac mae pob mesur yn y pwnc hwn yn dibynnu arno. Os yw dau dîm yn diffinio "dechrau" yn wahanol, ni ellir cymharu eu hamseroedd cylch.

**2. Dewiswch faint eitem waith y gall y tîm ei orffen mewn dyddiau, nid misoedd.** Eitem waith yw beth bynnag y mae'r tîm yn ei olrhain fel un uned: stori, digwyddiad, cais. Mae eitemau mawr iawn yn cuddio eu hoedran eu hunain ac yn gwneud trwybwn yn sypiog. Defnyddiwch reol sefydlog megis "mae un eitem yn un peth y gallai cwsmer neu ddefnyddiwr sylwi arno," ac osgowch hollti eitemau dim ond i wella cyfrif.

**3. Trinwch waith prosiect a gwaith gwasanaeth fel yr un math o lif, gyda phatrymau cyrraedd gwahanol.** Mae gwaith prosiect yn cyrraedd fel ôl-groniad wedi'i gynllunio y mae'r tîm yn tynnu ohono. Mae gwaith gwasanaeth, megis digwyddiadau a cheisiadau, yn cyrraedd yn anrhagweladwy a gall achub y blaen ar waith wedi'i gynllunio. Mesurwch y ddau ar yr un bwrdd neu yn yr un tablau, wedi'u tagio yn ôl math, fel y gallwch weld sut mae tarfu yn effeithio ar waith wedi'i gynllunio (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).

### Mesurwch waith heb ei orffen

**4. Dechreuwch ag oedran eitem waith ar y bwrdd.** Marciwch bob cerdyn â'i oedran mewn diwrnodau a didolwch neu amlygwch yn ôl bandiau canradd a gymerwyd o hanes amser cylch y tîm ei hun. Mae eitem sy'n hŷn na'r 85fed ganradd o amseroedd cylch y gorffennol yn arwydd i ofyn beth sy'n ei rwystro heddiw. Mae hyn yn troi mesur ar ei hôl hi yn anogwr dyddiol.

**5. Cyfrifwch WIP yn onest a gosodwch derfyn y gallwch ei amddiffyn.** Cyfrifwch bob eitem a ddechreuwyd nad yw wedi'i gorffen, gan gynnwys gwaith sy'n aros am adolygiad neu gyflenwr. Dewiswch derfyn cychwynnol o WIP cyfartalog presennol y tîm a'i ostwng gam wrth gam, gan nodi beth sy'n newid mewn amser cylch ac oedran. Trinwch y terfyn fel polisi y mae'r tîm yn ei archwilio, a defnyddiwch gyfraith Little yn unig fel gwiriad call ar gyfartaleddau (gweler pwnc 2.3, Gwaith ar y gweill a chiwio).

**6. Dangoswch waith wedi'i rwystro fel amser, nid fel baner.** Mae baner wedi'i rhwystro nad oes neb yn ei chyfrif yn dod yn esgus. Cofnodwch pryd y rhwystrwyd eitem a phryd y'i rhyddhawyd, ac adroddwch gyfran yr amser wedi'i rwystro. Cadwch gloc yr eitem yn rhedeg drwy'r rhwystr, oherwydd nid yw aros y cwsmer yn oedi (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau, lle mae cyflyrau ar ddal ITIL yn codi'r un cwestiwn).

### Mesurwch waith gorffenedig

**7. Adroddwch amser cylch fel dosbarthiad gyda chanraddau.** Dangoswch y canolrif, yr 85fed ganradd a'r 95fed ganradd, a phlotiwch bob eitem orffenedig fel dot dros amser (graff gwasgariad) fel y gall y tîm weld clystyrau ac allanolion. Nodwch y ffenestr, er enghraifft y 10 wythnos diwethaf. Mae cyfartaledd yn cuddio'r gynffon hir y mae cwsmeriaid yn ei theimlo.

**8. Adroddwch drwybwn fel rhediad wythnosol, nid un cyfanswm.** Plotiwch gyfrif yr eitemau a orffennwyd bob wythnos fel [siart rhedeg](https://en.wikipedia.org/wiki/Run_chart) neu [siart rheoli](https://en.wikipedia.org/wiki/Control_chart). Mae cyfrifon wythnosol yn amrywio'n naturiol, felly darllenwch newidiadau yn erbyn yr amrywiad hwnnw cyn ymateb, a pheidiwch byth â chymharu trwybwn dau dîm fel safle perfformiad, oherwydd bod meintiau a diffiniadau eitemau'n wahanol (gweler pwnc 2.5, Metrigau rhagweld a chynllunio cyflawni).

**9. Gosodwch ddisgwyliad lefel gwasanaeth o'ch data eich hun a'i adolygu.** Cymerwch amseroedd cylch y tîm am yr wythnosau diwethaf, dewiswch debygolrwydd y gall y tîm fyw ag ef, a darllenwch nifer y diwrnodau o'r ganradd. Cyhoeddwch ef fel "mae 85 y cant o eitemau yn gorffen mewn 9 diwrnod neu lai," gan ddefnyddio gwerthoedd go iawn o'ch data. Ailedrychwch arno pan fydd y llif gwaith yn newid. Rhagolwg y mae'r tîm yn ei wneud amdano'i hun yw SLE, felly cadwch ef ar wahân i dargedau cytundebol.

### Defnyddiwch y mesurau

**10. Defnyddiwch y pedwar gyda'i gilydd, a gofynnwch yr un pedwar cwestiwn ym mhob cofrestru tîm.** Beth sydd ar y gweill, ac a yw o fewn y terfyn? Pa eitemau yw'r hynaf, a beth fyddai'n eu dadflocio? Faint a orffennwyd gennym, ac a yw hynny yn yr ystod arferol? Pa mor hir y cymerodd y rhai diweddar o'i gymharu â'n disgwyliad? Mae'r pedwar cwestiwn yn disodli adroddiad statws ac yn cymryd ychydig funudau.

**11. Cymhwyswch yr un mesurau i giwiau gwasanaeth, gyda ffin glir ar gyfer y cloc.** Ar gyfer digwyddiadau a cheisiadau, gallai "dechrau" fod y neilltuo cyntaf i berson neu dîm, tra bod cloc datrys ITIL yn dechrau wrth logio. Mae'r ddau'n ddilys ac yn ateb cwestiynau gwahanol: pa mor ymatebol yw derbyn, a pha mor hir y mae'r gwaith ei hun yn ei gymryd. Enwch bob cloc, a pheidiwch â'u cymysgu mewn un siart (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth).

**12. Newidiwch y llif gwaith, yna mesurwch eto, a chadwch yr hanes.** Pan fydd y tîm yn newid terfyn WIP, cyflwr neu bolisi, logiwch y dyddiad a'r rheswm, a nodwch y newid ar y siartiau. Mae symudiad mewn amser cylch ar ôl newid yn dystiolaeth o'i effaith. Mae symudiad heb newid wedi'i logio yn rheswm i amau'r offeryn (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Gwaith ar y gweill (WIP) | Cadw eitemau yn yr ôl-groniad neu mewn colofn "parod" tan y funud olaf, fel na chânt eu cyfrif fel rhai a ddechreuwyd; cau ac ailagor eitemau; cuddio gwaith oddi ar y bwrdd | Cysoni eitemau'r bwrdd â cheisiadau a dderbyniwyd; samplo'r bwrdd yn erbyn gwaith gwirioneddol y tîm; olrhain oedran eitemau yn y golofn gyntaf |
| Trwybwn | Hollti eitemau yn ddarnau bach iawn; cau eitemau cyn eu bod wedi'u gwneud; dewis eitemau hawdd yn gyntaf | Edrych ar ddosbarthiad maint eitemau a chyfradd ailagor; cyfrif diffygion a ddihangodd a digwyddiadau sydd wedi'u clymu wrth eitemau diweddar; adolygu'r cymysgedd o fathau o waith a orffennwyd |
| Oedran eitem waith | Symud eitem hen i "wedi'i wneud" neu gyflwr newydd i ailosod y cloc; canslo hen eitemau'n dawel; creu copi ffres o hen eitem | Archwilio symudiadau cyflwr yn ôl ac eitemau wedi'u canslo; adrodd eitemau wedi'u canslo a'u hoedran; gwirio am ddyblygion a grëir ger y terfyn oedran |
| Amser cylch | Dechrau'r cloc yn hwyr drwy symud eitemau i "ar y gweill" dim ond pan fo'r gwaith bron â gorffen; ei ddiweddu'n gynnar drwy farcio eitemau fel rhai wedi'u gwneud cyn adolygu neu ryddhau | Cymharu amser dechrau â'r comisiwn cyntaf neu'r gweithgarwch cyntaf; adrodd yr amser rhwng "wedi'i wneud" a rhyddhau; samplo eitemau gorffenedig am gwblhau gwirioneddol |
| Cyrhaeddiad SLE | Gosod SLE hael; eithrio eitemau caled fel rhai "arbennig"; cau eitemau i aros dan y terfyn | Cadw'r SLE ar ganradd o ddata'r gorffennol a'i adolygu bob chwarter; adrodd eitemau a eithrir a'r rheswm; darllen y 95fed ganradd a'r eitemau agored hynaf |
| Cyfran amser wedi'i rwystro | Peidio byth â nodi rhwystrau, fel bod y gyfran yn edrych yn isel; nodi popeth fel un wedi'i rwystro i esbonio oedi | Cymharu cyfran wedi'i rwystro ag oedran eitemau ar y gweill; adolygu rhesymau rhwystro yn ôl categori; samplo eitemau wedi'u rhwystro i wirio pob rheswm |

Mae darlleniad iach yn dangos WIP ar neu o dan y terfyn y rhan fwyaf o ddyddiau, oedran yn bennaf o dan yr 85fed ganradd o amseroedd cylch y gorffennol, a thrwybwn yn amrywio o fewn ystod sefydlog o wythnos i wythnos. Mae canraddau amser cylch yn gyson neu'n disgyn, mae cyrhaeddiad SLE yn eistedd ger y tebygolrwydd a ddewisodd y tîm, ac mae gan amser wedi'i rwystro achosion a enwir y mae rhywun yn gweithio arnynt. Pan fydd rhif yn edrych yn rhy dda, gofynnwch a symudodd y cloc neu a newidiodd y diffiniad cyn dathlu.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Mesurau llif (WIP, trwybwn, oedran, amser cylch) | Syml, yn annibynnol ar offer, ac yn seiliedig ar gyfrifon a dyddiadau; cefnogi rhagweld tebygolrwyddol | Angen diffiniadau cyson a stampiau amser glân; dweud dim am werth nac ansawdd |
| Mesurau ar sail amcangyfrifon megis pwyntiau stori | Cynnwys golwg ar ymdrech a chymhlethdod; yn gweddu i waith wedi'i gynllunio | Goddrychol ac yn benodol i dîm; ni ellir eu cymharu ar draws timau |
| Metrigau gwasanaeth ar sail cyfartaledd megis amser cymedrig i ddatrys | Hawdd eu cyfrifo a'u hesbonio | Wedi'u hystumio gan allanolion a gwyredd; cuddio'r gynffon hir |
| Amser cylch ar sail canradd ac SLE | Adlewyrchu'r hyn y mae cwsmeriaid yn ei brofi; cefnogi addewid clir | Angen digon o hanes; anoddach eu hesbonio i bobl sy'n gyfarwydd â chyfartaleddau |
| Un diffiniad ledled y sefydliad o "dechrau" a "gorffen" | Caniatáu crynhoi a chymharu | Yn gweddu'n wael i rai timau; gall wthio timau tuag at gyflyrau artiffisial |

Dewiswch y mesur symlaf sy'n gwasanaethu'r penderfyniad wrth law. Mae mesurau llif yn gweithio'n dda i dîm sy'n tynnu gwaith ac yn gallu gorffen eitemau mewn dyddiau. Maent yn gweddu'n llai da pan fydd eitemau'n cymryd misoedd, pan fo un eitem yn amrywio'n aruthrol o ran maint, neu pan fo'r rhan fwyaf o'r gwerth yn gorwedd mewn darganfod ac nid mewn cyflawni.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa gyflwr sy'n golygu "dechrau" i ni, a pha un sy'n golygu "gorffen," ac a yw pawb yn cytuno?**
Rhowch y bwrdd ar sgrin a gofynnwch i bob person bwyntio at gyflwr cyntaf ac olaf y cloc. Nodwch anghytundebau, oherwydd nhw yw'r ffynhonnell fwyaf o amseroedd cylch annibynadwy. Edrychwch yn arbennig ar eitemau sy'n aros mewn adolygiad, mewn ciw rhyddhau, neu yn nwylo cyflenwr. Cytunwch ar ddiffiniad llif gwaith ysgrifenedig a dyddiad pan ddaw i rym.

**2. Faint o waith sydd gennym ar y gweill ar hyn o bryd, a beth fyddai'n digwydd pe baem yn rhoi'r gorau i ddechrau eitemau newydd am wythnos?**
Cyfrifwch y cardiau, gan gynnwys gwaith sydd wedi aros. Gofynnwch beth fyddai'r tîm yn ei orffen a beth fyddai'n dal yn sownd. Dylai'r hwylusydd lywio'r sgwrs tuag at y rhesymau dros ddechrau'n gynnar, megis ofn amser segur neu bwysau gan randdeiliaid, ac oddi wrth fai. Cynigiwch derfyn WIP cyntaf a dyddiad i'w adolygu.

**3. Pa eitemau yw'r hynaf ar y bwrdd, a beth sy'n atal pob un?**
Didolwch yn ôl oedran a thrafodwch y tair eitem hynaf. Ar gyfer pob un, enwch y rhwystr, y person a all ei dynnu, a'r cam nesaf. Cymharwch yr oedrannau hynaf â'r 85fed ganradd o amseroedd cylch y gorffennol. Gwnewch arferiad o ofyn y cwestiwn hwn ym mhob cofrestru, oherwydd oedran yw'r un mesur a all newid canlyniad o hyd.

**4. Sut mae ein dosbarthiad amser cylch yn edrych, a pha addewid y gallwn ei wneud ohono?**
Dangoswch y graff gwasgariad o eitemau gorffenedig dros yr 8 i 12 wythnos ddiwethaf. Darllenwch y canolrif, yr 85fed a'r 95fed ganradd. Trafodwch a yw'r tîm yn gyfforddus yn datgan SLE ar yr 85fed ganradd, a beth oedd gan yr allanolion yn gyffredin. Dylai'r hwylusydd wirio bod y grŵp yn deall y gwahaniaeth rhwng y canolrif a'r gynffon.

**5. Sut mae digwyddiadau a cheisiadau yn effeithio ar y gwaith wedi'i gynllunio yr ydym yn ei dynnu o'r ôl-groniad?**
Tagiwch eitemau gorffenedig yn ôl math a chymharwch amseroedd cylch a thrwybwn yn ôl math. Gofynnwch pa mor aml yr arhosodd eitem wedi'i chynllunio am fod digwyddiad wedi cyrraedd. Penderfynwch a fyddai polisi cyflymu neu gapasiti wedi'i neilltuo yn helpu, a sut i gadw ei ddefnydd yn weladwy (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio). Trafodwch beth fyddai'r tîm yn rhoi'r gorau i'w wneud pe bai'r tarfu yn dyblu.

**6. Pa rai o'r mesurau hyn y gallem eu chwarae, a sut fyddem ni'n sylwi?**
Cerddwch drwy bob mesur a gofynnwch sut y gallai rhywun dan bwysau ei wneud i edrych yn well heb wella llif. Cydweddwch bob ateb â rheilen warchod o'r tabl. Dylai'r hwylusydd drin hyn fel ymarfer dylunio ar yr offeryn ac nid fel cyhuddiad. Dewiswch un rheilen warchod i'w hychwanegu'r chwarter hwn, ac enwch berchennog.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n defnyddio mesurau llif i weld eu system eu hunain. Maent yn cael y mwyaf o oedran eitemau ar y gweill a'r dosbarthiad amser cylch, sy'n dweud wrthynt beth i ymosod arno ac i'w addo. Dylent osgoi troi trwybwn yn nod ac osgoi cymharu eu rhifau â rhifau timau eraill (gweler pwnc 2.8, Metrigau DORA, am y mesurau lefel cyflawni sy'n eistedd uwchlaw llif tîm).

### Timau gwasanaeth a gweithrediadau

Mae timau gwasanaeth yn trin cyrraedd nad ydynt yn ei reoli. Mae mesurau llif yn dangos sut mae torri ar draws, trosglwyddo ac aros ar eraill yn ymestyn yr amser i orffen. Maent yn elwa o olygon ar wahân ar gyfer digwyddiadau, ceisiadau a newid wedi'i gynllunio, ac o amser wedi'i rwystro a adroddir yn ôl rheswm. Dylent gadw'r clociau ITIL y mae contractau'n eu gofyn tra'n defnyddio'r clociau llif i redeg y tîm.

### Arweinyddiaeth a llywodraethu

Dylai arweinwyr ofyn am y dosbarthiad a'r duedd, nid un ffigur, a dylent ddarllen newidiadau gyda'r newidiadau llif gwaith wedi'u logio wrth eu hymyl. Gallant ddefnyddio cyrhaeddiad SLE a phroffiliau oedran i weld risg yn gynnar. Dylent wrthsefyll crynhoi trwybwn ar draws timau, oherwydd bod diffiniadau eitemau'n wahanol, a dylent ariannu glanhau modelau statws a stampiau amser y mae data llif dibynadwy eu hangen.

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn teimlo amser cylch ac yn arbennig ei gynffon. Mae datganiad megis "mae'r rhan fwyaf o geisiadau o'r math hwn yn cael eu gwneud o fewn nifer penodol o ddiwrnodau" yn rhoi rhywbeth iddynt gynllunio o'i amgylch, ac mae nodyn gonest pan fo'r tîm y tu allan i'w ddisgwyliad yn magu ymddiriedaeth. Nid oes angen cyfrifon WIP na thrwybwn arnynt, ond maent yn elwa pan fydd y mesurau hynny'n lleihau'r aros.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn rhedeg tîm cyfun sy'n trin ceisiadau gwasanaeth defnyddwyr terfynol a ffrwd fach o welliannau wedi'u cynllunio i'r systemau clinigol. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae gan y tîm fwrdd gyda'r cyflyrau Parod, Ar y gweill, Aros ar eraill, Adolygu a Wedi'i wneud. Mae'r rheolwr yn sylwi bod yr adroddiad misol yn dangos 46 eitem wedi'u gorffen, yn unol â'r mis blaenorol, ac eto mae staff clinigol yn cwyno bod ceisiadau'n cymryd "oesoedd." Mae adolygiad o hanes yr olrheinydd yn dangos bod "dechrau" wedi'i osod pan driniwyd cerdyn gyntaf, felly roedd amser cylch yn cynnwys dyddiau mewn ciw.

Mae'r tîm yn ailysgrifennu'r diffiniad llif gwaith: "dechrau" yw'r symudiad cyntaf i Ar y gweill, "gorffen" yw'r symudiad i Wedi'i wneud, ac mae Aros ar eraill yn cyfrif fel ar y gweill, gyda'i amser wedi'i rwystro ei hun. Gyda'r clociau newydd, canolrif amser cylch y 10 wythnos diwethaf yw 4 diwrnod, yr 85fed ganradd yw 11 diwrnod, a'r 95fed ganradd yw 24 diwrnod. WIP cyfartalog yw 19 eitem ar gyfer tîm o 6. Mae oedran eitem waith yn dangos saith cerdyn hŷn nag 11 diwrnod, a phump ohonynt yn aros am gyflenwr allanol.

Mae'r tîm yn penderfynu ar dri pheth. Mae'n gosod SLE o "mae 85 y cant o eitemau yn gorffen mewn 11 diwrnod neu lai." Mae'n gosod terfyn WIP o 12 ac yn cytuno i roi'r gorau i ddechrau eitemau newydd wedi'u cynllunio pan gyrhaeddir y terfyn. Mae hefyd yn ychwanegu adolygiad deng munud wythnosol o'r pum eitem hynaf. Codir yr eitemau cyflenwr drwy reoli cyflenwyr gyda'r dyddiadau y maent wedi bod yn aros.

Chwe wythnos yn ddiweddarach, mae 85fed canradd amser cylch yn 8 diwrnod ac mae WIP yn cyfartaledd 12. Mae trwybwn yn 44 eitem yr wythnos am sawl wythnos, yn agos at y lefel gynharach. Yna mae'r tîm yn gweld risg chwarae'r system bosibl: mae canolrif amser cylch yn disgyn i 2 ddiwrnod mewn un wythnos, ond mae cyfrif yr eitemau a orffennwyd yr wythnos yn codi'n sydyn ac mae cyfran yr eitemau a ailagorwyd o fewn wythnos yn dringo. Mae sampl o gardiau yn dangos bod ceisiadau mawr yn cael eu hollti'n sawl cerdyn un llinell i hybu trwybwn a byrhau amser cylch. Daliodd y rheiliau gwarchod ef: cymysgedd maint eitemau a'r gyfradd ailagor. Mae'r tîm yn cytuno ar reol ar yr hyn sy'n cyfrif fel un eitem, yn uno'r cardiau a hollwyd yn yr adroddiadau, ac yn parhau i gyhoeddi'r SLE a'r rhestr oedran.

## Y golwg fesul sector

**Busnes newydd.** Gall tîm bach ddechrau gyda bwrdd ffisegol neu ddigidol a thaenlen o ddyddiadau dechrau a gorffen. Dechreuwch ag oedran a WIP, oherwydd nid oes angen hanes arnynt, ac ychwanegwch ganraddau amser cylch ar ôl tua deg wythnos o ddata. Cadwch un bwrdd ar gyfer gwaith wedi'i gynllunio ac atgyweiriadau brys, wedi'u tagio yn ôl math, fel bod tarfu yn weladwy.

**Busnes bach.** Mae gwaith yn aml yn cyrraedd drwy e-bost neu ddesg gymorth a gynhelir. Defnyddiwch ddyddiadau creu, dechrau a datrys yr offeryn ei hun, gwiriwch fod "dechrau" yn golygu bod rhywun wedi dechrau gweithio, ac allforiwch y data'n rheolaidd. Mae golwg wythnosol syml ar yr eitemau agored hynaf yn gwneud mwy o les na dangosfwrdd cywrain.

**Menter fawr.** Mae llawer o dimau, offer a llifoedd gwaith yn gwneud diffiniadau cyson yn brif her. Cytunwch ar eirfa gyffredin fach ar gyfer dechrau a gorffen, gadewch i dimau fapio eu cyflyrau lleol iddi, a chadwch ddata llif lefel tîm ar lefel tîm. Defnyddiwch y mesurau i weld ciwiau systemig, megis camau cymeradwyo a rennir neu amgylcheddau a rennir, ac nid i gymharu timau.

**Llywodraeth a'r sector cyhoeddus.** Mae amserlenni statudol, gofynion archwilio a rheolau caffael yn llunio'r clociau. Cadwch y cloc statudol ar wahân i gloc llif y tîm, a dogfennwch y ddau. Mae camau a reolir gan gyflenwyr yn aml yn dominyddu amser cylch, felly cofnodwch hwy fel amser wedi'i rwystro a defnyddiwch y data mewn trafodaethau contract (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau).

## Yr achos busnes: cymhellion, ROI a TCO

Mae cost mesurau llif yn isel o ran offer ac yn gymedrol o ran disgyblaeth. Mae tîm angen bwrdd â newidiadau cyflwr dibynadwy, ychydig oriau i ysgrifennu'r diffiniad llif gwaith, adolygiad cylchol byr, a rhywun i gynnal y siartiau. Os daw stampiau amser o'r olrheinydd neu'r offeryn ITSM, mae casglu bron yn rhad ac am ddim. Cost fwy yw'r amser a dreulir yn alinio diffiniadau a newid arferion, megis rhoi'r gorau i ddechrau gwaith newydd pan gyrhaeddir y terfyn.

Mae'r elw yn ymddangos mewn rhagweladwyedd ac mewn llai o syrpreisys. Gall tîm sy'n gallu datgan SLE o'i ddata ei hun ateb "pryd fydd e wedi'i wneud?" heb badio amcangyfrifon, a gall weld gwaith sydd wedi aros yn gynnar. Disgrifiwch y budd drwy fesurau y gallwch eu harsylwi eich hun: cyfran yr eitemau hŷn na'r 85fed ganradd, lled y bwlch rhwng y canolrif a'r 95fed ganradd, a'r amser a dreulir mewn cyfarfodydd statws cyn ac ar ôl. Ni chynigir unrhyw werth meincnod yma, oherwydd bod rhifau cyhoeddedig yn dibynnu ar ddiffiniadau llif gwaith ac eitemau. Pobl yw'r rhan fwyaf o gyfanswm cost perchnogaeth, felly cyfrifwch ef, a'i gymharu â chost gwaith sy'n aros heb ei weld.

## Gwrthbatrymau a maglau

- **Cyfrif eitemau na ddechreuodd erioed.** Mae cardiau ôl-groniad yn chwyddo WIP ac oedran ac yn gwneud y bwrdd yn annarllenadwy. Cyfrifwch eitemau a ddechreuwyd yn unig, a chadwch yr ôl-groniad yn ei le ei hun (gweler pwnc 2.6, Metrigau ôl-groniad a mireinio).
- **Trin terfyn WIP fel nod i'w daro.** Nenfwd sy'n datgelu ciwiau yw terfyn. Adolygwch a yw'r terfyn yn gwneud ei waith, a'i ostwng pan all y tîm ymdopi.
- **Adrodd cyfartaleddau yn unig.** Mae amser cylch cyfartalog yn cuddio'r gynffon hir y mae cwsmeriaid yn ei theimlo. Adroddwch y canolrif a'r 85fed a'r 95fed ganradd.
- **Oedi'r cloc ar gyfer aros.** Mae stopio'r cloc pan fydd eitem wedi'i rhwystro yn gwneud i amser cylch edrych yn well ac yn cuddio'r oedi. Cadwch y cloc yn rhedeg ac adroddwch amser wedi'i rwystro ar wahân.
- **Cymharu trwybwn ar draws timau.** Mae diffiniadau a meintiau eitemau'n wahanol. Cymharwch bob tîm â'i hanes ei hun.
- **Defnyddio mesurau llif i farnu unigolion.** Mae eitemau a orffennwyd fesul person yn gwahodd chwarae'r system ac yn anwybyddu gwaith a rennir. Cadwch bob mesur ar lefel tîm.
- **Newid y llif gwaith heb ei logio.** Mae newid mewn enw cyflwr neu bolisi yn torri'r duedd yn dawel. Logiwch y dyddiad a'r rheswm, a'i nodi ar bob siart.
- **Cymysgu digwyddiadau, ceisiadau a gwaith wedi'i gynllunio mewn un dosbarthiad.** Mae eu hamseroedd cylch yn wahanol eu natur. Tagiwch yn ôl math a darllenwch bob dosbarthiad ar ei ben ei hun.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a chlociau | Mae "dechrau" a "gorffen" yn golygu pethau gwahanol i wahanol bobl | Mae rhai timau'n ysgrifennu eu cyflyrau llif gwaith | Un diffiniad llif gwaith ysgrifenedig fesul tîm, gyda rheolau cloc ar gyfer amser wedi'i rwystro | Newidiadau diffiniad wedi'u logio a'u nodi ar siartiau; clociau wedi'u hadolygu am ddrifft | Diffiniadau wedi'u halinio ar draws timau a chyflenwyr lle mae gwaith yn croesi ffiniau, a'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Mesur gwaith heb ei orffen | Statws a adroddir mewn cyfarfodydd | Mae cardiau'n dangos oedran neu WIP i rai timau | WIP wedi'i gyfrif yn ddyddiol ac oedran wedi'i ddangos ar bob cerdyn, gyda therfyn ysgrifenedig | Bandiau oedran a gymerwyd o ganraddau hanesyddol yn gyrru gweithredu dyddiol | Ciwiau a throsglwyddiadau traws-dîm wedi'u holrhain gyda'i gilydd, gydag oedran wedi'i rannu â chyflenwyr |
| Mesur gwaith gorffenedig | Cyfrifon tocynnau caeedig y mis | Cyfartaleddau amser cylch a adroddir gan rai timau | Canraddau amser cylch a thrwybwn wythnosol o un ffynhonnell data | Tueddiadau wedi'u hadolygu yn erbyn newidiadau wedi'u logio; cyrhaeddiad SLE wedi'i olrhain | Rhagolygon o ddata llif yn hysbysu cynllunio ac ymrwymiadau gwasanaeth ar draws timau |
| Defnydd a rheiliau gwarchod | Rhifau'n cael eu defnyddio i erlid pobl | Ymwybyddiaeth anffurfiol o chwarae'r system | Pob mesur wedi'i baru â rheilen warchod a'i adolygu gyda'r tîm | Rhybuddion rheilen warchod yn arwain at waith gwella wedi'i ariannu | Mesurau a rheiliau gwarchod wedi'u diwygio ar y cyd â chwsmeriaid a chyflenwyr |

## Rhestr wirio

- [ ] Mae'r diffiniad llif gwaith wedi'i ysgrifennu, gyda'r cyflyrau "dechrau" a "gorffen" wedi'u henwi.
- [ ] Mae eitem waith wedi'i diffinio, gyda rheol ar gyfer hollti ac uno eitemau.
- [ ] Cyfrifir WIP yn ddyddiol o ddata offeryn, ac mae terfyn WIP wedi'i ysgrifennu.
- [ ] Mae pob cerdyn ar y gweill yn dangos ei oedran mewn diwrnodau.
- [ ] Adroddir amser cylch fel y canolrif, yr 85fed ganradd a'r 95fed ganradd dros ffenestr a nodir.
- [ ] Adroddir trwybwn fel siart rhedeg wythnosol gyda'i ffenestr.
- [ ] Mae disgwyliad lefel gwasanaeth wedi'i ddatgan o ddata'r tîm ei hun ac yn cael ei adolygu bob chwarter.
- [ ] Cofnodir amser wedi'i rwystro gyda dechrau, diwedd a rheswm, ac mae cloc yr eitem yn parhau i redeg.
- [ ] Mae digwyddiadau, ceisiadau a gwaith wedi'i gynllunio wedi'u tagio fel y gellir darllen pob un ar ei ben ei hun.
- [ ] Logir pob newid i gyflwr neu bolisi gyda'i ddyddiad a'i reswm.
- [ ] Mae pob mesur wedi'i baru â rheilen warchod o'r tabl chwarae'r system.
- [ ] Ni ddefnyddir unrhyw fesur i raddio unigolion nac i gymharu timau.

## Anogwyr AI

**Gwiriwch ddiffiniad llif gwaith am broblemau cloc.**

```text
Dyma'r llif gwaith ar gyfer [tîm neu wasanaeth]: [rhestr o gyflyrau a
thrawsnewidiadau, gydag ystyr un llinell i bob un os yw'n hysbys]. Rydym eisiau
cyfrifo gwaith ar y gweill, trwybwn, oedran eitem waith ac amser cylch gan
ddefnyddio diffiniadau'r llenyddiaeth llif. Nodwch pa gyflwr ddylai ddechrau'r
cloc a pha un ddylai ei stopio, unrhyw gyflwr lle gellid oedi neu gamddarllen y
cloc, ac unrhyw gyflwr y gallai dau dîm ei ddehongli'n wahanol. Peidiwch â dyfalu
sut mae ein hoffer wedi'i gyfluniad. Rhestrwch eich rhagdybiaethau a'r cwestiynau
y dylwn eu hateb i setlo'r diffiniad.
```

**Dadansoddwch allforio eitemau gwaith.**

```text
Mae gennyf allforio o [nifer] o eitemau gwaith gorffenedig o [offeryn] gyda'r
meysydd hyn: [enwau meysydd, er enghraifft id, math, dyddiad dechrau, dyddiad
gorffen, cyfnodau wedi'u rhwystro]. Esboniwch sut i gyfrifo canraddau amser cylch,
trwybwn wythnosol a gwaith dyddiol ar y gweill o'r meysydd hyn, a sut i drin
dyddiadau coll, eitemau a ailagorwyd ac eitemau o fath [mathau]. Rhowch y camau a
chynllun sgript byr yn [iaith], a pheidiwch â rhagdybio unrhyw werthoedd.
Rhestrwch eich rhagdybiaethau a'r gwiriadau ansawdd data y dylwn eu rhedeg yn gyntaf.
```

**Drafftiwch ddatganiad disgwyliad lefel gwasanaeth.**

```text
Mae ein tîm yn trin [math o waith] ac mae gennym ddata amser cylch am y [nifer]
wythnos diwethaf, gyda chanolrif o [gwerth], 85fed canradd o [gwerth], a 95fed
canradd o [gwerth]. Drafftiwch ddisgwyliad lefel gwasanaeth un frawddeg a nodyn
byr yn ei esbonio i [cynulleidfa, er enghraifft cwsmeriaid neu berchennog y
gwasanaeth], gan gynnwys yr hyn nad yw'n ei addo. Peidiwch â dyfeisio gwerthoedd
targed na meincnodau. Rhestrwch eich rhagdybiaethau a'r rhybuddion am faint y sampl.
```

**Adolygwch risgiau chwarae'r system ar gyfer ein mesurau llif.**

```text
Rydym yn olrhain [rhestr o fesurau llif] ar gyfer [tîm neu wasanaeth]. Mae'r tîm
dan bwysau i [pwysau, er enghraifft lleihau oedran tocynnau]. Ar gyfer pob mesur,
rhestrwch ffyrdd realistig y gellid ei wneud i edrych yn well heb wella llif, y
signal yn ein data a fyddai'n datgelu pob un, a rheilen warchod pâr. Peidiwch â
dyfeisio ystadegau na dyfynnu astudiaethau. Rhestrwch eich rhagdybiaethau a'r
data y byddai ei angen arnaf i brofi pob risg.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n diffinio mesur llif a'r rheilen warchod a ddylai eistedd wrth ei ymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod golygiadau i'r pwnc hwn yn cadw'r templed, y tabl diffiniadau a'r tabl chwarae'r system mewn cydgord.

## Pwyntiau allweddol

- Mae pedwar mesur yn disgrifio llif: gwaith ar y gweill, trwybwn, oedran eitem waith ac amser cylch, pob un â diffiniad byr a chloc y mae'n rhaid ei ysgrifennu.
- Oedran eitem waith a WIP yw'r mesurau arweiniol; mae trwybwn ac amser cylch yn cadarnhau'r hyn a ddigwyddodd eisoes.
- Adroddwch amser cylch ac oedran fel canraddau, a datganwch ddisgwyliad lefel gwasanaeth o'ch data eich hun.
- Mae'r un mesurau'n gweddu i waith prosiect a gwaith gwasanaeth, ar yr amod eich bod yn tagio mathau o waith ac yn enwi pob cloc.
- Gellir chwarae pob mesur drwy symud y cloc, hollti eitemau neu guddio gwaith, felly paru pob un â rheilen warchod.
- Cadwch y mesurau ar lefel tîm a'u defnyddio i wella'r llif gwaith, byth i raddio pobl.

## Cyfeiriadau a darllen pellach

1. Kanban Guide, kanbanguides.org, current version as of October 2026, https://kanbanguides.org/english/
2. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
7. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
8. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
9. Wikipedia, [Cumulative flow diagram](https://en.wikipedia.org/wiki/Cumulative_flow_diagram).
10. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
11. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
12. Wikipedia, [Run chart](https://en.wikipedia.org/wiki/Run_chart).
13. Wikipedia, [Control chart](https://en.wikipedia.org/wiki/Control_chart).
