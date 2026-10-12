# Gwaith gweithredol a gwaith heb ei gynllunio

**Mae gan dîm sy'n adeiladu ac yn rhedeg gwasanaeth un gronfa o gapasiti, felly gwnewch yr hollt rhwng newid wedi'i gynllunio a gwaith gweithredol yn weladwy, amddiffynnwch ef â rheolau penodol ar gyfer tarfu a chyflymu, a darllenwch gyfran y gwaith heb ei gynllunio fel signal am y system yn hytrach na dyfarniad ar y bobl.**

## Crynodeb a chymhelliant

Mae pob tîm sy'n adeiladu ac yn rhedeg gwasanaeth yn treulio ei amser ar ddau fath eang o waith. Mae **gwaith newid** yn symud y gwasanaeth ymlaen: nodweddion newydd, gwelliannau wedi'u cynllunio, ymfudiadau, a thynnu gwendidau hysbys. Mae **gwaith rhedeg**, a elwir hefyd yn waith gweithredol, yn cadw'r gwasanaeth i fynd: ateb digwyddiadau a cheisiadau, ymateb i rybuddion, cymhwyso clytiau arferol, adfer mynediad, a thrin y tasgau â llaw y mae'r gwasanaeth yn dal i'w mynnu. Mae'r ddau yn gyfreithlon, ac mae gwasanaeth sydd â defnyddwyr angen y ddau. Mae'r drafferth yn dechrau pan na all neb ddweud faint o bob un y mae'r tîm yn ei wneud, oherwydd bod y cynllun wedyn yn tybio'n dawel gapasiti y mae'r gwaith rhedeg eisoes wedi'i ddefnyddio.

Gellir didoli gwaith hefyd yn ôl a ragwelwyd ef. Dewiswyd **gwaith wedi'i gynllunio** cyn i'r cyfnod ddechrau, er enghraifft yn ystod gweithio wedi'i gynllunio neu ymrwymiad chwarterol. Mae **gwaith heb ei gynllunio** yn cyrraedd yn ystod y cyfnod ac yn mynnu sylw na chafodd ei gyllidebu: digwyddiad cynhyrchu, cais brys gan randdeiliad uchel ei statws, atgyweiriad diogelwch, neu nam sy'n rhwystro cwsmer. Mae'r ddwy echel yn gorgyffwrdd ond nid ydynt yr un peth. Mae'r rhan fwyaf o waith rhedeg heb ei gynllunio o ran ei amseru hyd yn oed pan fo ei gyfaint yn rhagweladwy, ac mae rhywfaint o waith rhedeg, megis adnewyddu tystysgrif wedi'i drefnu, wedi'i gynllunio'n llwyr. Gall gwaith newid fod heb ei gynllunio hefyd, fel pan fo rheoliad yn newid a bod yn rhaid i dîm ymateb o fewn wythnosau.

Mae'r golygon ystwyth ac ITIL yn disgrifio'r un pwysau mewn geiriau gwahanol. Mewn cynllunio ar sail cyfnodau amser, rhagolwg o gapasiti yw ymrwymiad, ac mae gwaith sy'n cyrraedd yng nghanol cyfnod naill ai'n dadleoli rhywbeth neu'n cael ei ohirio. Ar fwrdd llif, mae gan waith ar y gweill derfynau penodol ac yn aml mae lôn bwrpasol ar gyfer eitemau brys, a'r cwestiwn yw faint o eitemau brys y gall y system eu hamsugno cyn i lif ddymchwel (gweler pwnc 2.1, Mesurau llif). Yn ITIL 4 (y fersiwn a gyhoeddwyd yn 2019), mae rheoli digwyddiadau, rheoli ceisiadau gwasanaeth a rheoli problemau yn disgrifio sut y derbynnir, y blaenoriaethir ac y datrysir gwaith rhedeg, tra bod galluogi newid a'r arfer datblygu a rheoli meddalwedd yn llywodraethu newid wedi'i gynllunio. Mae'r arferion yn disgrifio llifoedd gwaith. Anaml y maent yn dweud sut y dylai un tîm rannu ei oriau rhyngddynt, a dyna'r bwlch y mae'r pwnc hwn yn gweithio ynddo.

Mae sawl tymor yn codi dro ar ôl tro yma. **Tarfu** (interrupt) yw unrhyw alw sy'n cyrraedd y tu allan i'r cylch cynllunio ac yn tynnu person oddi wrth yr eitem y mae'n gweithio arni. **Llwyth tarfu** yw cyfanswm effaith y gofynion hynny ar dîm dros gyfnod, wedi'i fesur yn ôl cyfrif, yn ôl oriau, neu yn ôl y gyfran o gapasiti y maent yn ei bwyta. Mae **cyflymu** (expedite) yn eitem waith a ganiateir i neidio'r ciw, fel arfer oherwydd bod ei [chost oedi](https://en.wikipedia.org/wiki/Cost_of_delay) yn uchel ac ar unwaith. Mae **lôn gyflymu** yn rheol, yn aml yn res bwrpasol ar fwrdd, sy'n cyfyngu ar faint o eitemau cyflymu a gaiff fod ar y gweill ar unwaith. **Dyrannu capasiti** yw rhannu capasiti tîm yn benodol ymhlith mathau o waith, er enghraifft cyfran a nodir ar gyfer newid wedi'i gynllunio, cyfran ar gyfer gwaith rhedeg, a chyfran ar gyfer gwelliant.

Gwaith heb ei gynllunio yw'r dreth gudd fwyaf ar gyflawni wedi'i gynllunio: mae pob tarfu yn costio ei amser ei hun ynghyd â'r amser adfer a gollir i [newid tasgau](https://en.wikipedia.org/wiki/Task_switching_(psychology)), a chanfu ymchwil ar waith a dorrwyd ar ei draws (Mark, Gudith a Klocke, 2008) fod pobl yn gwneud iawn drwy weithio'n gyflymach ar gost mwy o straen. Nodyn ar gyfeiriad. Nid diffyg ynddo'i hun yw cyfran uchel o waith heb ei gynllunio. Gall gwasanaeth newydd ei lansio, toriad parhaus, neu ddigwyddiad rheoledig fwyta'r rhan fwyaf o gapasiti tîm yn gyfreithlon am gyfnod. Y nod yw nid gyrru gwaith heb ei gynllunio i sero na'i guddio, ond ei weld, ei brisio, a phenderfynu'n fwriadol faint ohono y bydd y tîm yn ei amsugno a faint y mae'n rhaid i'r sefydliad ei drwsio i fyny'r afon. Gwaith heb ei gynllunio sy'n ailadrodd am yr un achos yw'r math mwyaf defnyddiol i'w ganfod, oherwydd ei fod yn pwyntio at gofnod problem, bwlch monitro, neu eitem [dyled dechnegol](https://en.wikipedia.org/wiki/Technical_debt) sy'n rhatach i'w thynnu nag i barhau i dalu amdani.

## Egwyddorion allweddol

- **Mae capasiti yn gyfyngedig ac a rennir.** Mae pob awr a roddir i waith rhedeg neu gyflymu yn awr na roddir i newid wedi'i gynllunio, felly gwnewch yr hollt yn eglur ac yn weladwy yn hytrach na gadael iddo ddod i'r amlwg gan bwy bynnag sy'n gweiddi uchaf.
- **Dosbarthwch waith pan fydd yn cyrraedd, nid wedyn.** Tagiwch bob eitem fel wedi'i chynllunio neu heb ei chynllunio ac fel newid neu redeg ar yr eiliad y mae'n mynd i mewn i'r system, oherwydd bod ail-ddosbarthu ar ddiwedd y cyfnod yn atgof ac nid yn arsylwad.
- **Mae gan darfu bris y tu hwnt i'w hyd.** Cyfrifwch gost adfer newid yn ogystal â'r munudau a dreuliwyd, a ffafriwch ddyluniadau sy'n swpio neu'n llwybro tarfu at berson a enwir.
- **Cyflymwch yn ôl rheol, nid yn ôl rheng.** Mae lôn gyflymu â therfyn a phrawf mynediad yn amddiffyn llif; mae cyflymu diderfyn yn ôl hynafedd yn ei ddileu.
- **Neilltuwch gapasiti'n fwriadol.** Mae byffer wedi'i gynllunio yn fwy gonest na chynllun sy'n tybio dim.
- **Trinwch waith heb ei gynllunio dro ar ôl tro fel diffyg yn y system.** Mae ailadrodd wythnosol yn ymgeisydd ar gyfer cofnod problem neu awtomeiddio.
- **Mesurwch dimau a gwasanaethau, byth unigolion.** Fel arfer y person sy'n ateb y mwyaf o darfu yw'r person sy'n gwybod y mwyaf; mae eu graddio yn cosbi'r peth anghywir (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Diffiniadau metrigau

Mae saith metrig yn disgrifio sut y rhennir ac yr amharir ar gapasiti. Mae angen rheol ddosbarthu ysgrifenedig ar bob un, oherwydd bod pob un yn dibynnu ar sut y tagir eitemau. Y cyfnod ym mhob fformiwla yw'r un ffenestr sefydlog ar gyfer y tîm, megis wythnos, mis neu chwarter.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cymhareb gwaith heb ei gynllunio | Cyfran yr eitemau gwaith a gwblhawyd, yn ôl cyfrif, nad oeddent yn y cynllun ar ddechrau'r cyfnod | eitemau a gwblhawyd yn y cyfnod a aeth i'r bwrdd neu'r ôl-groniad ar ôl i'r cyfnod ddechrau / pob eitem a gwblhawyd yn y cyfnod; mae'r cloc yn dechrau ar y digwyddiad cynllunio, yn stopio ar ddiwedd y cyfnod; eithrir eitemau a ganslwyd ac eitemau sy'n dal ar agor | canran | Olrheinydd materion gydag amser creu eitemau a'r ciplun cynllunio | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth | Newid cwmpas; mathau o eitemau gwaith | Misol |
| Cadw at ddyraniad capasiti | Pa mor agos y mae ymdrech wirioneddol yn cyfateb i'r hollt a nodir rhwng gwaith newid, gwaith rhedeg a gwaith gwella | ar gyfer pob categori, y gwahaniaeth absoliwt rhwng cyfran wirioneddol a chyfran y cytunwyd arni, wedi'i adio a'i haneru; cyfran wirioneddol yw eitemau a gwblhawyd (neu ymdrech wedi'i logio lle mae'r tîm yn ei chofnodi) yn y categori hwnnw / pob eitem a gwblhawyd; adroddir eitemau heb gategori ar wahân ac ni chânt eu gollwng | pwyntiau canran | Maes math gwaith yr olrheinydd materion, a chofnodion amser lle maent yn bodoli | Gwelliant parhaus; rheoli capasiti a pherfformiad | Dyrannu capasiti neu gynllunio capasiti | Misol |
| Cyfradd tarfu | Pa mor aml y mae gofynion y tu allan i'r cynllun yn cyrraedd y tîm ac yn cyrraedd y bobl sy'n gwneud gwaith wedi'i gynllunio | tarfu a dderbyniwyd gan y tîm yn y cyfnod / diwrnodau gwaith yn y cyfnod, lle mae tarfu yn unrhyw docyn, galwad, cais neges neu ofyniad a logiwyd i sianel dderbyn y tîm ac nad yw eisoes ar y cynllun; cyfrifir dyblygion o'r un galw sylfaenol unwaith | tarfu y diwrnod gwaith | Log sianel derbyn, ciw ITSM, system rybuddio a log tarfu y tîm | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth; monitro a rheoli hysbysiadau | Log tarfu neu gytundeb gweithio tîm | Wythnosol |
| Cyfradd cyflymu | Cyfran yr eitemau a gwblhawyd a ddefnyddiodd y lôn gyflymu | eitemau a gwblhawyd yn y cyfnod a aeth i'r lôn gyflymu / pob eitem a gwblhawyd yn y cyfnod; mae'r cloc yn dechrau pan farcir yr eitem yn gyflymu ac yn stopio wrth gwblhau; cyfrifir eitemau a israddiwyd allan o'r lôn cyn i waith ddechrau ar wahân | canran | Hanes lôn bwrdd neu hanes maes blaenoriaeth | Rheoli digwyddiadau; galluogi newid (newid brys) | Dosbarth gwasanaeth cyflymu | Misol |
| Dadleoli gwaith wedi'i gynllunio | Nifer yr eitemau wedi'u cynllunio a wthiwyd allan neu a adawyd i wneud lle i waith heb ei gynllunio | eitemau wedi'u cynllunio a dynnwyd o'r cyfnod, a ohiriwyd, neu a adawyd heb eu gorffen gyda rheswm a gofnodwyd o "wedi'i ddadleoli gan waith heb ei gynllunio" yn y cyfnod (cyfrif); eithrir eitemau a dynnwyd am fod y nod wedi newid | cyfrif eitemau | Hanes newidiadau bwrdd, gyda'r maes rheswm | Galluogi newid; gwelliant parhaus | Amddiffyn nod cyflawni; negodi cwmpas | Misol |
| Cyfran gwaith heb ei gynllunio dro ar ôl tro | Cyfran yr eitemau heb eu cynllunio y mae eu hachos yn cyfateb i eitem gynharach heb ei chynllunio yn y ffenestr edrych yn ôl | eitemau heb eu cynllunio a gwblhawyd yn y cyfnod sy'n cysylltu â'r un cofnod problem, rheol rhybudd neu dag achos ag eitem gynharach o fewn y ffenestr edrych yn ôl (er enghraifft 90 diwrnod) / pob eitem heb ei chynllunio a gwblhawyd yn y cyfnod; adroddir eitemau heb dag achos fel cyfrif heb ei ddosbarthu ar wahân | canran | Cofnodion digwyddiadau a phroblemau ITSM, tagiau achos tracker | Rheoli problemau; rheoli gwallau hysbys | Eitemau gweithredu ôl-sylliad; tagiau diffygion sy'n codi dro ar ôl tro | Misol |
| Dibynadwyedd ymrwymiad wedi'i gynllunio | Cyfran yr eitemau y bwriadodd y tîm eu gwneud ar gyfer y cyfnod a orffennodd yn y cyfnod | eitemau wedi'u cynllunio a orffennwyd yn y cyfnod / eitemau wedi'u cynllunio ar ddechrau'r cyfnod; eithrir eitemau a ychwanegwyd ar ôl y dechrau o'r ddau gyfrif | canran | Ciplun cynllunio a hanes cwblhau tracker | Rheoli lefelau gwasanaeth; galluogi newid | Dibynadwyedd rhagolwg | Misol |

Dylid dangos mesurau amser yn y pwnc hwn, megis oedran eitem gyflymu, fel canraddau (er enghraifft y canolrif a'r 85fed canradd) ac nid fel cyfartaledd, gan fod un digwyddiad hir yn ystumio cymedr (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

## Argymhellion

### Gwnewch yr hollt yn weladwy

**1. Tagiwch bob eitem â dau faes wrth dderbyn.** Ychwanegwch fath gwaith (newid, rhedeg, gwelliant) a baner wedi'i chynllunio (wedi'i chynllunio, heb ei chynllunio) at ffurflen dderbyn yr olrheinydd neu'r offeryn ITSM, a gwnewch y ddau yn orfodol. Mae'r tagiau'n rhad pan fyddant wedi'u gosod wrth greu ac yn annibynadwy pan gânt eu hail-lunio'n ddiweddarach. Ysgrifennwch ddiffiniad pob gwerth mewn un frawddeg yng nghytundeb gweithio'r tîm, a'i adolygu pan fydd y tagiau'n peidio â disgrifio'r gwaith (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

**2. Rhewi ciplun cynllunio.** Dim ond o'i gymharu â chynllun y mae gan "heb ei gynllunio" ystyr, felly cipiwch restr yr eitemau ar ddechrau'r cyfnod a'i storio. Cymharwch waith a gwblhawyd yn erbyn y ciplun, nid yn erbyn sut mae'r bwrdd yn edrych ar y diwedd.

### Dyrannwch gapasiti'n fwriadol

**3. Cytunwch ar ddyraniad capasiti a'i drin fel damcaniaeth.** Penderfynwch, fel tîm a gyda'r perchennog cynnyrch neu'r perchennog gwasanaeth, yn fras pa gyfran sy'n mynd i newid wedi'i gynllunio, i waith rhedeg, ac i welliant. Dechreuwch o'r hyn y mae'r data'n ei ddangos y mae'r tîm wedi bod yn ei wneud yn y cyfnodau diwethaf, yna dewiswch darged sy'n symud i'r cyfeiriad yr ydych ei eisiau. Ailedrychwch ar yr hollt ym mhob cylch cynllunio; dyfaliad yw canran sefydlog a gopïwyd o sleid tîm arall, nid penderfyniad.

**4. Neilltuwch fyffer wedi'i faint o'ch hanes eich hun.** Defnyddiwch gofnod tarfu'r tîm ei hun i faint byffer ar gyfer gwaith heb ei gynllunio, er enghraifft drwy edrych ar yr ystod ganol ac uchaf o'r gyfran heb ei chynllunio wythnosol dros gyfnodau diweddar, a chynlluniwch y capasiti sy'n weddill yn unig. Gall byffer nas defnyddir yn rheolaidd grebachu; mae un sy'n cael ei ddihysbyddu'n rheolaidd angen dyraniad mwy neu achos wedi'i dynnu. Mae'r berthynas rhwng llwyth ac oedi mewn ciw (gweler [cyfraith Little](https://en.wikipedia.org/wiki/Little%27s_law), a phwnc 2.3, Gwaith ar y gweill a chiwio) yn esbonio pam nad oes gan system a redir ar ddefnyddio llawn le i amsugno syrpreis.

### Dyluniwch lwybr y tarfu

**5. Llwybrwch dorri ar draws at rôl a enwir.** Cylchdroi un person, a elwir yn aml yn drinwr tarfu, peiriannydd dyletswydd neu darian, i gymryd gofynion sy'n dod i mewn am ddiwrnod neu wythnos, tra bo'r lleill yn amddiffyn eu ffocws. Mae gan y rôl gwmpas ysgrifenedig, nodyn trosglwyddo, a therfyn ar ba mor hir y mae'n para fel bod y llwyth yn cael ei rannu'n deg. Dylai timau ar rota gysylltu hi ag arfer ar alwad (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad).

**6. Prysbennwch wrth y drws.** Mae tarfu yn amrywio'n aruthrol o ran brys. Cymhwyswch reol [prysbennu](https://en.wikipedia.org/wiki/Triage) fer wrth dderbyn sy'n gofyn tri chwestiwn: a yw gwasanaeth i lawr neu ddefnyddiwr wedi'i rwystro, a oes dyddiad na all symud, ac a all y galw aros tan y digwyddiad cynllunio nesaf? Mae eitemau sy'n methu'r tri yn mynd i'r ôl-groniad ac yn cael eu cynllunio fel unrhyw waith arall. Yn nhermau ITIL 4 dyma'r cam blaenoriaethu o reoli digwyddiadau a rheoli ceisiadau gwasanaeth wedi'i gymhwyso at dderbyn y tîm ei hun.

### Llywodraethwch y lôn gyflymu

**7. Rhowch derfyn a phrawf mynediad i'r lôn gyflymu.** Mae'r lôn yn dal dim mwy nag un neu ddwy eitem ar y tro, a dim ond os yw ei chost oedi yn uchel ac ar unwaith ac y gall y ceisydd ei datgan y mae eitem yn mynd i mewn. Mae prawf a nodir yn gadael i'r tîm ddweud na wrth y cais sy'n uchel yn unig. Os yw'r lôn bob amser yn llawn, mae wedi peidio â bod yn eithriad, a dylai'r tîm adolygu'r prawf mynediad a'r achosion i fyny'r afon. Mae'r lôn yn [ddosbarth gwasanaeth](https://en.wikipedia.org/wiki/Class_of_service) â'i rheolau ei hun; gweler y llenyddiaeth Kanban am y syniad sylfaenol (Anderson, 2010).

### Tynnwch y ffynonellau

**8. Cysylltwch eitemau heb eu cynllunio ag achos ac adolygwch yr ailadroddiadau.** Ychwanegwch dag achos neu gyswllt â chofnod problem at bob eitem heb ei chynllunio. Unwaith y mis, rhestrwch yr achosion sy'n ailadrodd ac anfonwch yr ychydig uchaf at reoli problemau, i'r ôl-groniad fel eitemau dyled dechnegol, neu i welliannau monitro (gweler pwnc 4.1, Metrigau rheoli problemau, a phwnc 4.6, Dyled dechnegol a gwallau hysbys). Mae cyfran gwaith heb ei gynllunio dro ar ôl tro yn dweud wrthych a yw'r atgyweiriadau hynny'n glanio. Mae'r patrwm yn debyg i ddileu llafur diwerth a ddisgrifir yn llyfr Google SRE, lle caiff gwaith gweithredol ailadroddus â llaw ei drin fel rhywbeth i'w beiriannu i ffwrdd; mae'r llyfr yn awgrymu ei gadw islaw cyfran o amser peiriannydd (Beyer et al., 2016), canllaw y dylai pob tîm ei brofi yn erbyn ei ddata ei hun yn lle ei fabwysiadu fel targed.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cymhareb gwaith heb ei gynllunio | Ychwanegu eitemau at y ciplun cynllunio yn hwyr fel eu bod yn cyfrif fel rhai wedi'u cynllunio; gadael gwaith brys heb ei olrhain fel nad yw byth yn cyfrif; tagio eitemau wedi'u cynllunio fel rhai heb eu cynllunio i esgusodi cynllun a fethwyd | Ciplun cynllunio wedi'i rewi gyda stamp amser; cyfrif heb ei ddosbarthu; sampl o eitemau caeedig wedi'i darllen bob chwarter i gymharu'r tag â'r hyn a ddigwyddodd |
| Cadw at ddyraniad capasiti | Symud eitemau rhwng categorïau i gyd-fynd â'r hollt y cytunwyd arni; hollti un eitem yn sawl un i symud y cyfrannau; dewis hollt y mae'r tîm eisoes yn ei tharo | Diffiniadau categori sefydlog wedi'u hysgrifennu yn y cytundeb gweithio; sampl o ddisgrifiadau eitemau yn erbyn eu categori; dibynadwyedd ymrwymiad wedi'i gynllunio |
| Cyfradd tarfu | Troi tarfu yn ffafrau tawel nad ydynt byth yn cyrraedd y log; cyfuno sawl galw yn un cofnod; digalonni pobl rhag gofyn | Cymharu'r log â thraffig y sianel dderbyn a hanes rhybuddion; gofyn i'r tîm mewn ôl-sylliad a yw'r log yn cyfateb i'w profiad |
| Cyfradd cyflymu | Cadw gwaith brys allan o'r lôn i edrych yn ddisgybledig, neu roi popeth ynddi i gael cyflymder; ailddiffinio cyflymu i olygu "pwysig" | Terfyn lôn gyda phrawf mynediad; cyfran yr eitemau cyflymu a fodlonodd y prawf wrth adolygu; dadleoli gwaith wedi'i gynllunio |
| Dadleoli gwaith wedi'i gynllunio | Cofnodi dadleoli fel newid cwmpas drwy ddewis; gadael i eitemau wedi'u cynllunio fethu'n dawel heb reswm; osgoi eitemau wedi'u cynllunio sy'n debygol o gael eu dadleoli | Maes rheswm gorfodol ar bob eitem a dynnwyd neu heb ei gorffen; dibynadwyedd ymrwymiad wedi'i gynllunio; adolygu rhesymau yn yr ôl-sylliad |
| Cyfran gwaith heb ei gynllunio dro ar ôl tro | Defnyddio tag achos bras fel bod ailadroddiadau'n cael eu cuddio, neu un mân fel nad oes dim yn ailadrodd; cau'r cofnod problem i dynnu'r cyswllt | Tacsonomi tag achos wedi'i adolygu bob chwarter; cyfrif heb ei ddosbarthu; gwiriad ailddigwydd ar ôl i gofnod problem gau |
| Dibynadwyedd ymrwymiad wedi'i gynllunio | Cynllunio'n fach i orffen popeth; padio amcangyfrifon; cyfrif eitem rannol fel wedi'i gwneud; gollwng eitemau caled cyn i'r cyfnod ddechrau | Cymharu maint a gwerth eitemau wedi'u cynllunio dros amser; gwiriad canlyniad ar y nod cyflawni; cymhareb gwaith heb ei gynllunio, fel na ddarllenir gwerth uchel fel iechyd pan oedd y cynllun yn ofnus |

Darlleniad iach yw cymhareb gwaith heb ei gynllunio y gall y tîm ei hesbonio, lôn gyflymu sy'n anaml yn llawn, a chyfran ailadroddiadau sy'n disgyn ar ôl atgyweiriadau. Darlleniad perffaith amheus yw'r peth i ymchwilio iddo. Mae tîm sy'n adrodd dim gwaith heb ei gynllunio naill ai â gwasanaeth tawel iawn neu un heb ei olrhain, a'r ffordd i ddweud yw cymharu'r log â hanes rhybuddion a thocynnau.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Dyraniad capasiti sefydlog (canrannau a nodir) | Hawdd ei esbonio; yn amddiffyn gwaith gwella rhag cael ei newynu | Anwybyddu amrywiad go iawn; gellir ei chwarae drwy ail-labelu |
| Byffer wedi'i neilltuo wedi'i faint o hanes | Cyd-fynd y cynllun â'r llwyth tarfu go iawn | Angen sawl cyfnod o ddata dibynadwy; gall guddio achos cronig |
| Trinwr tarfu cylchdroi | Amddiffyn ffocws y rhan fwyaf o'r tîm; lledaenu'r llwyth yn deg | Mae gwaith wedi'i gynllunio'r trinwr ei hun yn aros; angen trosglwyddo a chefnogaeth i'r rôl |
| Terfyn cyflymu llym | Cadw llif yn rhagweladwy; gorfodi cost oedi a nodir | Gall ceiswyr lwybro o'i gwmpas; gall argyfwng go iawn deimlo ei fod wedi'i rwystro |
| Cyfrif eitemau yn hytrach nag ymdrech | Syml ac anodd ei chwyddo | Trin meintiau gwahanol iawn yr un fath |

Y safbwynt ymarferol i'r rhan fwyaf o dimau yw cyfrif eitemau yn gyntaf, ychwanegu ymdrech dim ond lle mae cyfrifon eitemau yn camarwain, amddiffyn byffer bach a lôn gyflymu fach, a defnyddio'r tag achos i ymosod ar yr ailadrodd mwyaf.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa gyfran o waith gorffenedig ein cyfnod diwethaf oedd heb ei chynllunio, a sut ydym ni'n gwybod?**
Agorwch y ciplun cynllunio wrth ymyl rhestr yr eitemau a gwblhawyd a chyfrifwch yr eitemau nad oeddent yn y cynllun. Cymharwch y canlyniad â synnwyr pob person o'r cyfnod; mae'r ddau yn aml yn wahanol. Dylai'r hwylusydd ofyn faint o eitemau na chafodd eu logio erioed, oherwydd bod yr ateb gonest yn llunio pob rhif arall.

**2. Pa dair ffynhonnell tarfu sy'n costio fwyaf i ni, a phwy allai eu tynnu?**
Rhestrwch y ffynonellau yn ôl cyfrif ac yn ôl yr ymdrech a amsugnwyd ganddynt, megis rhybuddion, ceisiadau ailadroddus, dwysáu, a gofynion ad hoc gan randdeiliaid. Marciwch bob un fel y gellir ei dynnu, ei lwybro, neu'n anochel. Dylai'r hwylusydd wthio am berchennog a enwir y tu allan i'r tîm ar gyfer unrhyw ffynhonnell na all y tîm ei thrwsio ei hun.

**3. Pa hollt rhwng gwaith newid, rhedeg a gwelliant ydym ni eisiau mewn gwirionedd?**
Cymharwch yr hollt y mae'r data yn ei dangos â'r hollt y mae pobl yn credu sydd ganddynt ac â'r hollt y mae'r arweinyddiaeth yn ei disgwyl. Trafodwch pa fathau o waith y byddai'r tîm yn eu gollwng yn gyntaf dan bwysau, gan fod hynny'n datgelu'r blaenoriaethau go iawn. Dewiswch darged ar gyfer y cyfnod nesaf a ffordd o'i wirio.

**4. Beth yw ein rheol ar gyfer y lôn gyflymu, a phwy sy'n penderfynu?**
Darllenwch y rheol gyfredol yn uchel, neu nodwch nad oes un yn bodoli. Gofynnwch am y tair eitem gyflymu ddiwethaf a phrofwch bob un yn erbyn cost oedi a nodir. Trafodwch beth mae'r tîm yn ei wneud pan fo person uchel ei statws yn gofyn am naid sy'n methu'r prawf, a phwy sy'n cefnogi'r penderfyniad.

**5. Pan fyddwn yn cael ein torri ar ein traws, beth mae'n ei gostio i ni ar ôl i'r tarfu ddod i ben?**
Gofynnwch i bobl ddisgrifio pa mor hir y mae'n ei gymryd i adennill eu lle mewn tasg ar ôl tarfu nodweddiadol.

**6. Pa eitem heb ei chynllunio sydd wedi dod yn ôl fwy nag unwaith, a beth fyddai'n ei hatal?**
Cymerwch chwarter diwethaf eitemau heb eu cynllunio ac edrychwch am ailadroddiadau yn ôl achos. Dewiswch yr un â'r cyfanswm ymdrech uchaf a thraciwch pam mae'n ailadrodd: rhybudd coll, nam heb ei drwsio, cam â llaw, neu fater cyflenwr. Penderfynwch a yw'n mynd i gofnod problem, i'r ôl-groniad, neu i sgwrs gyda chyflenwr.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n teimlo gwaith heb ei gynllunio fel cynlluniau toredig a rhagolygon sy'n llithro. Maent yn elwa o dagio wrth dderbyn, ciplun cynllunio wedi'i rewi, a rhagolwg wedi'i adeiladu o fyffer sy'n seiliedig ar hanes (gweler pwnc 2.5, Metrigau rhagweld a chynllunio cyflawni). Mae'r cofnod dadleoli yn dangos i berchnogion cynnyrch beth gostiodd pob cais hwyr.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau'n cario'r rhan fwyaf o'r gwaith rhedeg. Maent angen trinwr tarfu a enwir, rheol prysbennu, a llwybr o geisiadau a rhybuddion sy'n ailadrodd i atgyweiriadau (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion). Y gyfran ailadroddiadau yw eu dadl gryfaf dros fuddsoddi mewn rheoli problemau.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod y dyraniad go iawn drwy'r ceisiadau a wnânt a'r terfynau amser y maent yn eu derbyn. Dylent ofyn am y gymhareb a'i hachosion, ariannu gwaith gwella sy'n tynnu tarfu ailadroddus, ac osgoi defnyddio cyflymu fel y ffordd arferol o gael pethau wedi'u gwneud.

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn gweld gwaith heb ei gynllunio fel toriadau, atebion araf a nodweddion wedi'u gohirio. Maent yn ennill pan fo gan y tîm le i drwsio achosion, ac mae angen llwybr teg arnynt ar gyfer codi brys. Dylai cytundebau lefel gwasanaeth (gweler [cytundeb lefel gwasanaeth](https://en.wikipedia.org/wiki/Service-level_agreement)) adlewyrchu'r llwyth tarfu y mae'r tîm yn ei gario (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG yswiriwr iechyd rhanbarthol yn rhedeg platfform hawliadau gydag un tîm cynnyrch o saith o bobl a desg gwasanaeth a rennir. Mae'r tîm yn adeiladu nodweddion newydd ac yn cefnogi'r platfform mewn cynhyrchu hefyd. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Am chwe wythnos, disgynnodd dibynadwyedd ymrwymiad wedi'i gynllunio'r tîm o tua 85 y cant i 55 y cant, a dechreuodd y perchennog cynnyrch gwestiynu amcangyfrifon y tîm. Mae arweinydd y tîm yn tynnu hanes y tracker. Gan ddefnyddio'r cipluniau cynllunio wedi'u rhewi, cymhareb gwaith heb ei gynllunio yw 41 y cant yn ôl cyfrif yn y cyfnod diweddaraf, o'i chymharu ag atgof y tîm o "efallai un rhan o bump." Y cyfrif heb ei ddosbarthu yw 9 y cant, felly mae'r gymhareb yn rhesymol ddibynadwy.

Mae hollti'r eitemau heb eu cynllunio yn ôl achos yn dangos bod 14 o 24 yn waith rhedeg, ac o'r rheini, mae 9 yn olrhain i un swydd swp cyflwyno hawliadau sy'n methu ar ôl newid fformat data gan bartner ac a ailgychwynnir â llaw bob tro. Cyfran gwaith heb ei gynllunio dro ar ôl tro yw 58 y cant. Cyfradd tarfu yw 6 y diwrnod gwaith, ac mae 4 o'r rheini yn cyrraedd y peirianwyr sy'n gwneud y gwaith wedi'i gynllunio, oherwydd bod y ddesg gwasanaeth yn dwysáu'n uniongyrchol at bwy bynnag sy'n ateb gyntaf. Mae'r lôn gyflymu yn dal dwy eitem ar unwaith y rhan fwyaf o ddyddiau, a'r gyfradd cyflymu yw 23 y cant. Dadleoli gwaith wedi'i gynllunio yw 7 eitem yn y cyfnod, ac mae gan 5 ohonynt y rheswm "wedi'i ddadleoli gan waith heb ei gynllunio."

Mae'r tîm yn gwneud pedwar penderfyniad gyda'r perchennog cynnyrch a'r perchennog gwasanaeth. Yn gyntaf, mae un peiriannydd ar y tro yn dod yn drinwr tarfu gyda chwmpas ysgrifenedig a nodyn trosglwyddo, ac mae dwysáu yn mynd at y person hwnnw yn unig. Yn ail, cyfyngir y lôn gyflymu i un eitem, gyda phrawf mynediad sy'n gofyn am gost oedi a nodir, ac mae pob cyflymu yn cofnodi'r eitem a ddadleolodd. Yn drydydd, codir methiant y swydd swp fel cofnod problem, gydag atgyweiriad a sgwrs gyda'r partner wedi'u gosod yn yr ôl-groniad fel gwaith gwella, gan ddefnyddio 15 y cant o gapasiti, sef y gyfran y mae'r tîm yn ei dewis fel ei ddyraniad cyntaf i welliant. Yn bedwerydd, mae'r tîm yn cynllunio cyfnod nesaf y gwaith gyda byffer wedi'i faint o ystod uchaf ei gyfran ddiweddar heb ei chynllunio, nid â llwyth llawn.

Chwe wythnos yn ddiweddarach, cymhareb gwaith heb ei gynllunio yw 27 y cant, mae'r gyfran ailadroddiadau yn 22 y cant, mae'r gyfradd tarfu sy'n cyrraedd gweithwyr wedi'u cynllunio yn 1.5 y diwrnod, ac mae dibynadwyedd ymrwymiad wedi'i gynllunio tua 78 y cant (oll yn enghreifftiol). Nid yw'r tîm wedi cyrraedd ei 85 y cant cynharach, ac mae'n dweud hynny.

Y risg chwarae'r system y mae'r tîm yn ei dal: yn yr ail gyfnod o dan y trefniant newydd mae'r gyfradd tarfu yn disgyn yn sydyn, ac mae arweinydd y tîm yn sylwi bod pobl yn anfon negeseuon yn uniongyrchol at y trinwr, felly nid yw ffafrau byth yn cyrraedd y log. Mae cymharu'r log â'r sianel dderbyn a hanes rhybuddion yn dangos bod y cyfaint go iawn heb newid. Mae'r tîm yn cytuno bod y trinwr yn ailgyfeirio negeseuon uniongyrchol i'r sianel dderbyn. Roedd y bai yn nyluniad y llwybr, nid mewn unrhyw berson.

## Y golwg fesul sector

**Busnes newydd.** Mae bron pob gwaith yn teimlo'n frys a'r un ychydig o bobl sy'n gwneud gwaith newid a gwaith rhedeg. Cadwch y dosbarthu i ddau dag a gosodwch derfyn penodol ar gyflymu. Y gymhareb heb ei chynllunio yw'r dystiolaeth ar gyfer dweud "gallwn wneud y map ffordd neu'r llwyth cymorth, nid y ddau."

**Busnes bach.** Mae un gweinyddwr neu dîm bach yn aml yn trin pob cais. Defnyddiwch fathau tocynnau'r offeryn fel y dosbarthiad, logiwch dorri ar draws am fis i ddysgu'r patrwm, a neilltuwch floc dyddiol sefydlog ar gyfer gwaith wedi'i gynllunio. Gofynnwch i gyflenwyr am eu hadroddiadau cyfaint ac achosion ailadroddus.

**Menter fawr.** Mae gwaith heb ei gynllunio i un tîm yn aml yn waith wedi'i gynllunio i un arall. Cytunwch ar ddiffiniadau a rennir, adroddwch fesul tîm a fesul gwasanaeth, ac ariennwch atgyweiriadau ar y lefel lle mae'r achos yn byw (gweler pwnc 9.3, Metrigau cydweithio a throsglwyddo).

**Llywodraeth a'r sector cyhoeddus.** Gall capasiti gael ei osod gan nenfydau nifer staff, a gall gwaith rhedeg gael ei osod gan statud neu ganfyddiadau archwilio. Gwnewch y rhain yn rhan o'r dyraniad, dogfennwch y rheolau dosbarthu, a chadwch lwybr archwilio (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw cyflawni rhagweladwy: mae cynllun sy'n anwybyddu llwyth tarfu yn cael ei fethu dro ar ôl tro, ac mae gwaith heb ei gynllunio gweladwy yn rhoi llais cryfach i'r tîm pan ofynnwch am amser i dynnu achosion.

Mae cost casglu'r mesurau hyn yn gymedrol pan fo'r tagiau a'r ciplun cynllunio yn rhan o'r llif gwaith arferol. Y prif gostau yw'r amser i gytuno ar ddiffiniadau, y ddisgyblaeth i dagio wrth dderbyn, ychydig o offer i uno data tracker ac ITSM (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth), ac oriau'r trinwr tarfu, y mae ei waith wedi'i gynllunio ei hun yn arafu. Mae ychwanegu cofnodion amser lefel awr yn costio'n sylweddol fwy ac yn aml yn cael ei gasáu, felly ychwanegwch hwy dim ond os yw cyfrifon eitemau yn profi'n gamarweiniol. Pobl sy'n dominyddu cyfanswm cost perchnogaeth, felly cyfrifwch ef.

Mae'r elw yn ymddangos mewn patrymau y gall y tîm eu mesur drosto'i hun yn hytrach nag mewn ffigur tybiedig. Chwiliwch am gyfran gwaith heb ei gynllunio dro ar ôl tro yn disgyn ar ôl atgyweiriadau problemau, codiad mewn dibynadwyedd ymrwymiad wedi'i gynllunio, llai o eitemau wedi'u cynllunio wedi'u dadleoli, a llai o dorri ar draws yn cyrraedd pobl ar waith wedi'i gynllunio. Lle mae oriau'n hysbys, gellir prisio'r ymdrech a adferwyd o achos ailadroddus a dynnwyd yn ôl cost yr awr y tîm ei hun a'i gosod yn erbyn ymdrech yr atgyweiriad (gweler pwnc 7.5, Cost gwasanaeth ac economeg uned, a phwnc 7.7, Elw ar fuddsoddiad a'r achos busnes). Peidiwch â benthyg canrannau diwydiant ar gyfer gwaith heb ei gynllunio; nid yw unrhyw ffigur o sefydliad arall yn lle eich hanes eich hun.

## Gwrthbatrymau a maglau

- **Trin pob gwaith heb ei gynllunio fel methiant.** Mae rhywfaint ohono yn y gwasanaeth yn gwneud ei waith, ac mae targed o sero yn gwthio gwaith allan o'r log. Yn lle hynny, gofynnwch pa ran sy'n ddisgwyliedig, pa ran sy'n osgoadwy, a gosodwch fyffer ar gyfer y gyntaf.
- **Diwylliant arwyr.** Mae'r person sy'n achub pob argyfwng yn dod yn anhepgor, yn flinedig, ac yn bwynt unigol o fethiant. Yn lle hynny, rhannwch y rôl tarfu drwy gylchdroi a gwobrwywch dynnu achosion.
- **Mae popeth yn gyflymu.** Mae lôn sydd bob amser yn llawn yn ail giw yn unig. Yn lle hynny, gosodwch derfyn, mynnwch gost oedi a nodir, ac adolygwch y prawf mynediad yn fisol.
- **Cynllunio ar ddefnyddio llawn.** Mae cynllun heb slac yn gwarantu bod pob syrpreis yn dadleoli rhywbeth. Yn lle hynny, maint byffer o'ch hanes tarfu eich hun a chynllunio'r capasiti sy'n weddill.
- **Dosbarthu ar ôl y ffaith.** Mae tagiau a ychwanegir ar ddiwedd y cyfnod yn adlewyrchu cof a hwyliau. Yn lle hynny, mynnwch y tagiau wrth dderbyn a rhewi'r ciplun cynllunio.
- **Amsugno galw'n dawel.** Mae ffafrau nad ydynt byth yn cyrraedd y log yn gwneud y llwyth yn anweledig a'r cynllunio'n anghywir. Yn lle hynny, gwnewch un llwybr derbyn yn rheol ac ailgyfeiriwch ofynion sianel ochr ato.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Dosbarthu a gwelededd | Nid yw gwaith wedi'i dagio; teimlir gwaith heb ei gynllunio, nid ei gyfrif | Mae rhai timau'n tagio gwaith wedi'i gynllunio a heb ei gynllunio â'u geiriau eu hunain | Un diffiniad ysgrifenedig o fathau o waith a'r faner wedi'i chynllunio, wedi'i gymhwyso wrth dderbyn gyda chiplun cynllunio | Cymhareb heb ei chynllunio a chyfrif heb ei ddosbarthu wedi'u tueddu a'u hadolygu bob cyfnod | Diffiniadau wedi'u rhannu ar draws timau a chyflenwyr, a'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Dyrannu capasiti | Tybir bod capasiti ar gael yn llawn ar gyfer gwaith wedi'i gynllunio | Cymhwysir byffer bras gan rai timau | Hollt y cytunwyd arni rhwng newid, rhedeg a gwelliant, gyda byffer wedi'i faint o hanes | Cadw at y ddyraniad wedi'i adolygu a'r hollt wedi'i haddasu gyda pherchnogion cynnyrch a gwasanaeth | Dyraniad wedi'i negodi ar draws timau sy'n rhannu platfformau, gwasanaethau a phobl |
| Trin tarfu a chyflymu | Mae unrhyw un yn torri ar draws unrhyw un; gosodir brys gan hynafedd | Arferiad o berson dyletswydd neu res frys yn bodoli mewn rhai timau | Rôl tarfu a enwir, rheol prysbennu, a lôn gyflymu gyda therfyn a phrawf mynediad | Cyfradd cyflymu, dadleoli a chyfradd tarfu wedi'u hadolygu yn erbyn rheilen warchod | Llwybro tarfu a rheolau cyflymu wedi'u cydlynu ar draws timau, gyda llwybrau ar alwad a dwysáu a rennir |
| Tynnu achosion | Mae'r un problemau yn ailadrodd ac yn cael eu trwsio gan arwriaeth | Sylwir ar rai ailadroddiadau a'u trafod mewn ôl-sylliadau | Mae gan eitemau heb eu cynllunio dag achos ac mae'r ailadroddiadau uchaf yn mynd i reoli problemau | Cyfran ailadroddiadau wedi'i holrhain ac atgyweiriadau wedi'u hariannu fel gwaith gwella wedi'i gynllunio | Achosion wedi'u holrhain ar draws timau, cyflenwyr a chwsmeriaid, a gwelliant yn rheolaidd |

## Rhestr wirio

- [ ] Mae pob eitem waith yn cario math gwaith (newid, rhedeg, gwelliant) a baner wedi'i chynllunio, wedi'u gosod wrth dderbyn.
- [ ] Mae diffiniadau o wedi'i gynllunio, heb ei gynllunio, newid a rhedeg wedi'u hysgrifennu yng nghytundeb gweithio'r tîm.
- [ ] Mae ciplun cynllunio wedi'i rewi ar ddechrau pob cyfnod ac wedi'i storio.
- [ ] Adroddir y gymhareb gwaith heb ei gynllunio fel tuedd, wrth ymyl y cyfrif heb ei ddosbarthu.
- [ ] Mae'r tîm a'i berchnogion wedi cytuno ar ddyraniad capasiti a'i adolygu yn y chwarter diwethaf.
- [ ] Mae un llwybr derbyn yn bodoli, ac ailgyfeirir ceisiadau sianel ochr ato.
- [ ] Mae rôl tarfu â chwmpas ysgrifenedig yn cylchdroi ymhlith y tîm.
- [ ] Mae gan y lôn gyflymu derfyn, prawf mynediad, a chofnod o'r hyn y dadleolodd pob cyflymu.
- [ ] Mae gan eitemau heb eu cynllunio dag achos neu gyswllt cofnod problem, ac adolygir ailadroddiadau'n fisol.
- [ ] Adroddir mesurau ar lefel tîm a gwasanaeth, a pheidiwch byth â'u defnyddio i raddio unigolion.

## Anogwyr AI

**Dyluniwch ddosbarthiad gwaith ar gyfer derbyn.**

```text
Ein tîm yw [disgrifiad o'r tîm, er enghraifft tîm platfform o chwech sy'n adeiladu
ac yn cefnogi gwasanaeth mewnol]. Rydym yn defnyddio [tracker neu offeryn ITSM].
Rydym eisiau tagio pob eitem wrth dderbyn fel newid, rhedeg neu welliant, ac fel
wedi'i chynllunio neu heb ei chynllunio. Drafftiwch ddiffiniadau un frawddeg clir
ar gyfer pob gwerth, tri achos ar y ffin y bydd pobl yn dadlau amdanynt gyda
dyfarniad awgrymedig ar gyfer pob un, a ffurflen dderbyn fer. Peidiwch â dyfeisio
nodweddion ein hoffer na gwerthoedd meincnod. Rhestrwch eich rhagdybiaethau a'r
cwestiynau y dylwn eu hateb i fireinio'r diffiniadau.
```

**Dadansoddwch log tarfu am batrymau.**

```text
Dyma grynodeb o'n tarfu dros [cyfnod]: [gludwch gyfrifon dienw yn ôl ffynhonnell,
diwrnod a math, heb enwau unigolion]. Grwpiwch hwy yn ffynonellau y gellid eu
tynnu, eu llwybro at un person, eu swpio, neu eu derbyn. Ar gyfer pob grŵp,
awgrymwch un arbrawf ac un mesur o a weithiodd. Peidiwch â dyfeisio gwerthoedd
meincnod na'n cymharu â sefydliadau eraill. Rhestrwch eich rhagdybiaethau a'r
data y byddai ei angen arnoch i fod yn fwy hyderus.
```

**Drafftiwch bolisi lôn gyflymu.**

```text
Rydym yn rhedeg [bwrdd llif, cynllunio ar sail cyfnodau amser, llif parhaus, neu
hybrid] gyda thîm o [maint y tîm] a lefel gwasanaeth o [lefelau gwasanaeth, os o
gwbl]. Drafftiwch bolisi cyflymu un dudalen gyda phrawf mynediad yn seiliedig ar
gost oedi a nodir, terfyn ar eitemau yn y lôn, rheol ar gyfer yr hyn sy'n digwydd
i'r eitem a ddadleolwyd, a rhestr cwestiynau adolygu misol. Cadwch yr iaith yn
niwtral ac osgowch enwi unigolion. Peidiwch â dyfeisio trothwyon; nodwch y rhai y
mae'n rhaid i mi eu dewis. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i ba bwnc sy'n berchen ar fetrig cysylltiedig, megis nifer digwyddiadau neu lafur diwerth, a'r rheilen warchod sy'n perthyn wrth ei ymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod fersiwn wedi'i golygu o'r pwnc hwn yn cadw ei glociau, ei reolau dosbarthu a'i dabl chwarae'r system mewn cydgord.

## Pwyntiau allweddol

- Mae gwaith wedi'i gynllunio a heb ei gynllunio, a gwaith newid a rhedeg, yn rhannu un gronfa o gapasiti, felly gwnewch yr hollt yn weladwy a chytunwch arni'n fwriadol.
- Tagiwch waith wrth dderbyn a rhewi ciplun cynllunio, gan mai dim ond yn erbyn cynllun wedi'i gofnodi y mae gan "heb ei gynllunio" ystyr.
- Mae tarfu yn costio amser adfer yn ogystal â munudau, felly llwybrwch hwy at rôl a enwir a'u prysbennu wrth y drws.
- Mae angen terfyn, prawf mynediad a chofnod o'r hyn a ddadleolodd pob cyflymu ar lôn gyflymu.
- Gwaith heb ei gynllunio dro ar ôl tro yw'r signal cryfaf ar gyfer rheoli problemau a gwaith gwella, ac mae cyfran yr ailadroddiadau yn dangos a yw atgyweiriadau'n glanio.
- Adroddwch ar lefel tîm a gwasanaeth, cymharwch dîm â'i hanes ei hun, a pheidiwch byth â graddio unigolion.

## Cyfeiriadau a darllen pellach

1. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
5. Rau, V., "Eliminating Toil," chapter 5 in *Site Reliability Engineering*, O'Reilly Media, 2016, https://sre.google/sre-book/eliminating-toil/
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Kim, G., Behr, K., and Spafford, G., *The Phoenix Project: A Novel about IT, DevOps, and Helping Your Business Win*, IT Revolution Press, 2013.
8. DeMarco, T., *Slack: Getting Past Burnout, Busywork, and the Myth of Total Efficiency*, Broadway Books, 2001.
9. Mark, G., Gudith, D., and Klocke, U., "The cost of interrupted work: more speed and stress," in *Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI 2008)*, ACM, 2008.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Kanban (development)](https://en.wikipedia.org/wiki/Kanban_(development)).
12. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
13. Wikipedia, [Task switching (psychology)](https://en.wikipedia.org/wiki/Task_switching_(psychology)).
14. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
16. Wikipedia, [Triage](https://en.wikipedia.org/wiki/Triage).
17. Wikipedia, [Class of service](https://en.wikipedia.org/wiki/Class_of_service).
18. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
