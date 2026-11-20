# Dyled dechnegol a gwallau hysbys

**Trinwch wallau hysbys a dyled dechnegol fel un cyfriflyfr gweladwy o atgyweiriadau gohiriedig, mesurwch beth mae pob eitem yn ei gostio i chi bob mis y mae'n aros ar agor, a gwariwch gyfran warchodedig o gapasiti ar yr eitemau sydd â'r llog uchaf.**

## Crynodeb a chymhelliant

Mae pob tîm yn gohirio rhywfaint o atgyweirio. Deellir diffyg ond ni chaiff ei drwsio, cymerir llwybr byr i fodloni dyddiad, gadewir cydran i heneiddio, ac ysgrifennir datrysiad dros dro i lawlyfr gweithredu. Mae pob gohiriad yn benderfyniad synhwyrol pan gaiff ei wneud. Mae'r drafferth yn dechrau pan fo gohiriadau'n cronni allan o'r golwg, oherwydd bod cost eu cario yn ymddangos yn ddiweddarach fel digwyddiadau, cyflawni araf, a phobl flinedig, heb unrhyw linell ar unrhyw adroddiad sy'n cysylltu'r gost â'r achos.

Mae dwy eirfa yn disgrifio'r un patrwm. Yn [ITIL](https://en.wikipedia.org/wiki/ITIL), mae **gwall hysbys** yn broblem y deellir ei gwraidd achos ac y mae datrysiad dros dro, neu atgyweiriad parhaol nas cymhwyswyd eto, yn bodoli ar ei chyfer. Cofnodir gwallau hysbys fel y gall staff y ddesg gwasanaeth a gweithrediadau ddatrys digwyddiadau sy'n ailadrodd yn gyflym, ac mae'r cofnod yn aros ar agor nes bod atgyweiriad yn cael ei ryddhau. Mewn gwaith meddalwedd ystwyth, **[dyled dechnegol](https://en.wikipedia.org/wiki/Technical_debt)** yw'r trosiad, a fathwyd gan [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham) yn 1992, ar gyfer dewisiadau dylunio a gweithredu sy'n gwneud newid yn y dyfodol yn anoddach. Mae'r trosiad yn cario dau syniad sy'n bwysig ar gyfer mesur: y **prif swm**, sef yr ymdrech sydd ei hangen i ddileu'r ddyled, a'r **llog**, sef yr ymdrech neu'r risg ychwanegol a delir bob cyfnod tra bo'r ddyled yn aros.

Mae'r ddwy olwg yn wahanol o ran ble y maent yn edrych. Darganfyddir gwallau hysbys trwy weithrediadau: mae digwyddiad neu ymchwiliad problem yn canfod achos. Fel arfer darganfyddir dyled dechnegol trwy gyflawni: mae datblygwr yn sylwi bod newid yn anoddach nag y dylai fod. Yn aml mae gwall hysbys yn ddyled dechnegol sydd eisoes wedi dechrau brifo cwsmeriaid. Yn aml mae dyled dechnegol yn wall hysbys yn aros i ddigwydd. Mae cadw rhestrau ar wahân, un yn yr offeryn ITSM ac un mewn ôl-groniad neu wici, yn cuddio'r cysylltiad ac yn cynhyrchu dwy ddadl gystadleuol am yr un capasiti prin.

Mae'r pwnc hwn yn rhoi set fach o fesurau i chi ar gyfer y cyfriflyfr cyfun. Mae'n osgoi un ffigur doler ar gyfer dyled sefydliad cyfan, nad yw unrhyw ddull yn ei gynhyrchu'n ddibynadwy, ac mae'n mesur yr hyn y gallwch ei arsylwi: eitemau agored, amser a aros, digwyddiadau a achoswyd, gwaith a ychwanegwyd, a chapasiti a wariwyd ar atgyweirio. Yna mae'r cyfriflyfr yn bwydo sgwrs flaenoriaethu rhwng cynnyrch a gweithrediadau (gweler pwnc 4.1, Metrigau rheoli problemau, ar gyfer cofnodion problem ac atgyweiriadau parhaol, a phwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio, ar gyfer y llwyth ymyrraeth y mae dyled yn ei greu).

Termau a ddefnyddir yn y pwnc hwn:

- Mae **datrysiad dros dro** yn ffordd o adfer gwasanaeth neu osgoi methiant heb ddileu'r achos.
- Mae **atgyweiriad parhaol** yn dileu'r achos. [Dadansoddi gwraidd achos](https://en.wikipedia.org/wiki/Root_cause_analysis) yw'r gwaith sy'n dod o hyd iddo.
- Mae **[ailffactorio cod](https://en.wikipedia.org/wiki/Code_refactoring)** yn ailstrwythuro cod heb newid ei ymddygiad allanol. Dyma'r ffordd arferol o ad-dalu dyled dylunio.
- Mae **[arogl cod](https://en.wikipedia.org/wiki/Code_smell)** yn arwydd arwynebol mewn cod sy'n aml yn dynodi problem ddyfnach. Mae'n anogwr i edrych, nid dyfarniad.
- **[Cost cyfle](https://en.wikipedia.org/wiki/Opportunity_cost)** yw gwerth y dewis amgen gorau a roddwch i fyny drwy ddewis un defnydd o amser dros un arall. Mae pob atgyweiriad yn cystadlu â nodwedd, a'r gymhariaeth yw'r penderfyniad go iawn.
- **[Cost oedi](https://en.wikipedia.org/wiki/Cost_of_delay)** yw'r golled economaidd o ohirio darn o waith. Dyma'r syniad y tu ôl i brisio'r llog ar eitem ddyled.
- Mae **[nam meddalwedd](https://en.wikipedia.org/wiki/Software_bug)** yn ddiffyg mewn meddalwedd. Gall gwall hysbys fod yn nam, yn wendid cyfluniad, yn derfyn dylunio, neu'n ddiffyg cyflenwr.
- Mae **[dadansoddi rhaglenni statig](https://en.wikipedia.org/wiki/Static_program_analysis)** yn archwilio cod heb ei redeg. Mae ei rybuddion a'i sgoriau cymhlethdod yn ddangosyddion o ddyled bosibl, ac maent yn dystiolaeth wannach na hanes digwyddiadau.

Nid yw pob dyled yn gamgymeriad. Mae cwadrant Martin Fowler yn gwahanu dyled fwriadol oddi wrth ddyled anfwriadol a dyled ddi-hid oddi wrth ddyled ddoeth (gweler y rhestr gyfeiriadau). Benthyciad cadarn yw llwybr byr doeth gyda chynllun ad-dalu, a dyled ddi-hid yw'r math i'w atal. Nid yw'r metrigau yma yn barnu'r tarddiad. Maent yn dangos y fantolen.

## Egwyddorion allweddol

- **Un cyfriflyfr, dau ddrws.** Mae gwallau hysbys o weithrediadau ac eitemau dyled o gyflawni yn mynd i'r un rhestr weladwy, gyda chyswllt rhwng cofnodion sy'n disgrifio'r un achos.
- **Mesurwch y llog, a'r prif swm hefyd.** Mae maint atgyweiriad yn bwysig yn llai na'r hyn y mae'r eitem agored yn ei gostio i chi bob mis mewn digwyddiadau, datrysiadau dros dro, a newid wedi'i arafu. Graddiwch yn ôl llog fesul uned o ymdrech atgyweirio.
- **Gwnewch ohirio yn benderfyniad gyda pherchennog.** Mae gan bob eitem berchennog, rheswm a nodwyd dros aros, a dyddiad adolygu. Esgeulustod yw eitem na ddewisodd neb ei gohirio, ac fe'i cyfrifir felly.
- **Gwarchodwch gapasiti cyn bod ei angen arnoch.** Mae cyfran a nodwyd o gapasiti pob tîm ar gyfer gwaith atgyweirio, y cytunwyd arni ymlaen llaw, yn well na glanhau arwrol ar ôl chwarter gwael.
- **Cadwch y datrysiad dros dro yn onest.** Mae datrysiad dros dro yn wasanaeth, gyda'i gost, perchennog, a moddau methu ei hun. Mesurwch pa mor aml y caiff ei ddefnyddio a pha mor aml y mae'n methu.
- **Disgrifiwch systemau, byth bobl.** Mae dyled yn perthyn i wasanaeth neu gydran. Peidiwch byth â'i phriodoli i awdur, a pheidiwch byth â graddio peirianwyr yn ôl y ddyled y gwnaethant ei chyffwrdd.
- **Amcangyfrifwch yn fras.** Mae meintiau o "oriau", "diwrnodau", ac "wythnosau" yn ddigon. Dyfeisiwyd manylder y tu hwnt i hynny.

## Diffiniadau metrigau

Mae'r metrigau isod yn disgrifio'r cyfriflyfr o atgyweiriadau gohiriedig. Nodir clociau a ffiniau ym mhob fformiwla. Adroddir mesurau amser fel dosbarthiadau (y canolrif a'r 85fed neu'r 95fed canradd), nid fel un cyfartaledd.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Oedran ôl-groniad gwallau hysbys | Pa mor hir y mae gwallau hysbys agored wedi aros am atgyweiriad parhaol | Mae'r cloc yn dechrau pan farciwyd y cofnod problem yn "wall hysbys"; yn stopio pan ryddheir yr atgyweiriad parhaol i gynhyrchu; adroddir eitemau a gaewyd fel "risg a dderbyniwyd" ar wahân a'u heithrio. Adroddwch gyfrif, oedran canolrifol, ac oedran 85fed canradd, yn ôl gwasanaeth | diwrnodau (dosbarthiad) | Cofnodion problemau a gwallau hysbys offeryn ITSM, cofnodion rhyddhau | Rheoli problemau | Siart eitemau gwaith sy'n heneiddio; oedran ôl-groniad namau | Misol |
| Cwmpas datrysiadau dros dro | Cyfran y gwallau hysbys agored sydd â datrysiad dros dro dogfenedig, wedi'i brofi y gall asiant ei ddilyn | gwallau hysbys agored gyda datrysiad dros dro wedi'i adolygu yn y 6 mis diwethaf / gwallau hysbys agored; eithrir eitemau caeedig a risg a dderbyniwyd | canran | Cronfa wybodaeth wedi'i chysylltu â chofnodion gwallau hysbys | Rheoli problemau; rheoli gwybodaeth | Llawlyfr gweithredu neu ddiffiniad o orffen ar gyfer gweithredadwyedd | Misol |
| Digwyddiadau sy'n gysylltiedig â gwallau hysbys agored | Digwyddiadau y mae eu hachos yn wall hysbys agored, mesur uniongyrchol o'r llog a delir mewn tarfu ar wasanaeth | digwyddiadau yn y cyfnod sy'n gysylltiedig â gwall hysbys a oedd ar agor pan ddechreuodd y digwyddiad / pob digwyddiad yn y cyfnod; adroddir digwyddiadau heb gyswllt achos fel rhai heb eu cysylltu, ac ni chânt eu cyfrif | canran, ynghyd â chyfrif | Cysylltiadau digwyddiad-i-broblem offeryn ITSM | Rheoli digwyddiadau; rheoli problemau | Diffygion a ddihangodd; mewnlif namau cynhyrchu | Misol |
| Stoc dyled | Nifer a maint amcangyfrifedig yr eitemau dyled dechnegol cofrestredig sy'n aros ar agor | eitemau agored yn y gofrestr ddyled ar ddiwedd y cyfnod; maint yw swm bandiau ymdrech bras (oriau, diwrnodau, wythnosau) a neilltuwyd wrth gofrestru; eithrir dyled heb ei chofrestru neu a amheuir | cyfrif, a bandiau ymdrech | Cofrestr dyled yn y traciwr, wedi'i thagio yn ôl gwasanaeth | Gwelliant parhaus; dylunio gwasanaeth | Eitemau ôl-groniad cynnyrch wedi'u labelu fel dyled | Misol |
| Llog dyled | Gwaith ychwanegol a achosir gan ddyled agored a gwallau hysbys, mewn amser tîm | oriau a logiwyd yn y cyfnod yn erbyn eitemau gwaith wedi'u tagio â chyfeirnod dyled neu wall hysbys (datrysiadau dros dro, camau â llaw, ailwaith, ac ymdrech ychwanegol ar newidiadau yr effeithiwyd arnynt) / cyfanswm oriau gwaith y tîm yn y cyfnod; eithrir y gwaith atgyweirio ei hun a'i gyfrif o dan gyfran capasiti | canran o amser gwaith | Tagiau amser neu ymdrech ar eitemau gwaith, wedi'u cadw ar lefel tîm | Gwelliant parhaus; rheoli problemau | Cyfran gwaith anghynlluniedig ac ailwaith | Misol |
| Cyfran capasiti dyled | Cyfran y capasiti cyflawni a wariwyd ar ymddeol dyled a gwallau hysbys | capasiti (cyfrif eitemau neu ymdrech) eitemau gwaith a gwblhawyd wedi'u tagio fel atgyweirio dyled neu atgyweiriad gwall hysbys / pob eitem waith a gwblhawyd yn y cyfnod; eithrir eitemau heb dag | canran | Traciwr, eitemau a gwblhawyd yn ôl tag | Gwelliant parhaus; galluogi newid | Dyrannu capasiti | Fesul cyfnod cynllunio, wedi'i adolygu'n fisol |
| Newid net dyled | A yw'r cyfriflyfr yn tyfu neu'n crebachu | eitemau dyled a gwallau hysbys a gofrestrwyd yn y cyfnod llai eitemau a ddatryswyd yn y cyfnod; mae wedi'i ddatrys yn golygu atgyweiriad wedi'i ryddhau, nid ei uno; cyfrifir eitemau a gaewyd fel "ni thrwsir" mewn llinell ar wahân | cyfrif (gydag arwydd) | Cofrestr dyled a chofnodion gwallau hysbys | Gwelliant parhaus | Newid ôl-groniad yn ôl categori | Misol |

Mae risg a dderbyniwyd yn ffordd gyfreithlon o gau gwall hysbys, oherwydd nad yw rhai problemau'n werth eu trwsio. Fe'i rhestrir ar wahân fel nad yw cau eitemau'n gwella'r ffigur oedran yn dawel. Mae'r ffenestr adolygu 6 mis mewn cwmpas datrysiadau dros dro yn enghraifft. Mae tîm yn gosod y ffenestr i gyd-fynd â pha mor gyflym y mae ei systemau'n newid ac yn ei hysgrifennu yn y gofrestr metrigau.

## Argymhellion

### Adeiladwch y cyfriflyfr

**1. Unwch y rhestr gwallau hysbys a'r rhestr dyled yn un cyfriflyfr.** Cadwch un gofrestr gyda maes ar gyfer tarddiad (gweithrediadau neu gyflawni), gwasanaeth, perchennog, band maint, a chyswllt â chofnodion cysylltiedig. Gall yr offeryn ITSM ei dal, neu'r traciwr, ar yr amod bod pob system yn cysylltu â'r llall. Heb un olwg, mae gwall hysbys mewn gweithrediadau yn cystadlu ag eitem ddyled anweledig mewn cyflawni am yr un peirianwyr.

**2. Cofrestrwch ddyled ar yr eiliad y caiff ei chreu neu ei darganfod.** Mae llwybr byr a gymerir yn fwriadol yn mynd i'r gofrestr yn yr un cais tynnu neu gofnod newid, gyda rheswm a nodwyd a dyddiad adolygu. Cofrestrir dyled a ganfyddir yn ddiweddarach gan bwy bynnag sy'n ei chanfod. Mae rheol dal un llinell, rhad yn gweithio'n well nag archwiliad cyfnodol, oherwydd bod pobl yn anghofio'r hyn a wyddent y chwarter diwethaf.

### Mesurwch y llog

**3. Cysylltwch ddigwyddiadau â gwallau hysbys bob tro.** Y cyswllt rhwng digwyddiad a'i wall hysbys yw'r data cryfaf sydd gennych ar log, ac mae'n costio ychydig eiliadau wrth ddatrys. Gwnewch y cyswllt yn faes gofynnol pan fo'r achos yn hysbys, ac adroddwch y gyfran heb ei chysylltu fel nad yw bwlch yn edrych fel newyddion da (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau). Pan fo'r un achos yn ymddangos mewn sawl digwyddiad, mae'r cofnod problem yn cario'r dystiolaeth ar gyfer yr atgyweiriad.

**4. Tagiwch y gwaith y mae dyled yn ei greu.** Gadewch i beirianwyr farcio eitem waith pan fo angen datrysiad dros dro, cam â llaw, neu ailwaith ychwanegol oherwydd gwendid hysbys, a'i gysylltu ag eitem y cyfriflyfr. Mae'r tag yn costio ychydig ac yn rhoi'r ffigur llog dyled ar lefel tîm i chi. Trinwch y canlyniad fel amcangyfrif â gwall eang, defnyddiol ar gyfer graddio eitemau ac ar gyfer gwylio tuedd, nid ar gyfer cyfrifeg.

**5. Prisiwch bob eitem mewn dau rif: ymdrech atgyweirio a llog misol.** Defnyddiwch fandiau bras, megis oriau, diwrnodau, wythnosau, ar gyfer ymdrech, a chost fisol fras a dynnir o ddigwyddiadau cysylltiedig, gwaith wedi'i dagio, ac unrhyw gost amser segur y mae eich sefydliad eisoes yn ei hamcangyfrif. Mae rhannu llog ag ymdrech yn rhoi amser ad-dalu syml. Peidiwch â dyfeisio manylder: mae band a rhagdybiaeth a nodwyd yn ddigon i wahanu'r buddugoliaethau amlwg oddi wrth yr eitemau a all aros.

### Gwarchodwch gapasiti a phenderfynwch

**6. Neilltuwch gyfran sefydlog o gapasiti, ac adroddwch hi.** Cytunwch gyda'r perchennog cynnyrch ar gyfran o bob cylch ar gyfer gwaith atgyweirio, wedi'i gosod gan y duedd yn y cyfriflyfr ac wedi'i hailedrych bob chwarter. Adroddwch gyfran capasiti dyled wrth ymyl y ffigurau gwaith cynlluniedig, fel bod arweinwyr yn gweld gwaith atgyweirio fel buddsoddiad bwriadol. Mae cyfran wedi'i neilltuo hefyd yn gwarchod y tîm rhag dadl cyfaddawd ym mhob sgwrs gynllunio, y mae'r ôl-groniad nodweddion fel arfer yn ei hennill.

**7. Graddiwch atgyweirio yn erbyn nodweddion ag un arian cyfred cyffredin.** Rhowch wallau hysbys ac eitemau dyled yn yr un sgwrs flaenoriaethu â nodweddion, wedi'u mynegi fel cost oedi ac amser ad-dalu. Mae atgyweiriad sy'n dileu digwyddiad wythnosol, ac sy'n dychwelyd ei ymdrech mewn chwarter, yn cystadlu ar ei haeddiant. Mae graddio yn ôl swnder, uwchderiaeth, neu ddyddiad cofrestru yn rhoi canlyniadau gwael (gweler pwnc 4.4, Methiant newid ac ailwaith).

**8. Caewch y ddolen ar benderfyniadau gohirio.** Ar gyfer pob eitem a adewir ar agor yn ymwybodol, cofnodwch pwy a dderbyniodd y risg, y dyddiad adolygu, a'r sbardun a fyddai'n ei symud i fyny, megis ail ddigwyddiad neu newid cynlluniedig yn y maes. Adolygwch y rhestr a dderbyniwyd ar ei hamserlen ei hun. Mae eitem a ohiriwyd deirgwaith heb unrhyw sbardun yn benderfyniad i'w hanwybyddu, a dylai'r cyfriflyfr ddweud hynny.

### Cadwch y rhifau'n onest

**9. Rhyddhewch yr atgyweiriad cyn i chi gau'r cofnod.** Mae gwall hysbys yn aros ar agor nes bod yr atgyweiriad parhaol mewn cynhyrchu a bod ailadrodd wedi'i wirio dros ffenestr a nodwyd. Mae cau ar "wedi'i uno" neu "tocyn wedi'i wneud" yn gwenieithu'r ffigurau oedran a newid net ac yn ailagor y digwyddiad yn ddiweddarach (gweler pwnc 4.5, Metrigau rhyddhau a defnyddio). Olrheiniwch gyfradd ailagor gwallau hysbys fel gwiriad ansawdd ar y rheol gau.

**10. Edrychwch ar siâp y cyfriflyfr, y tu hwnt i'r cyfansymiau.** Gall cyfrif gwastad guddio cynffon hir o eitemau hen iawn, cyfran gynyddol o eitemau mewn un gwasanaeth, neu gyfriflyfr a gedwir yn fach drwy gau popeth fel "ni thrwsir". Dangoswch y dosbarthiad oedran, y rhaniad yn ôl gwasanaeth, a'r rhestr risg a dderbyniwyd ar un dudalen. Adolygwch ef gyda'r bobl sy'n berchen ar y gwasanaethau, yn yr un cyfarfod sy'n cynllunio gwaith y chwarter nesaf.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Oedran ôl-groniad gwallau hysbys | Cau hen gofnodion fel "risg a dderbyniwyd" neu "ni thrwsir"; hollti un hen gofnod yn rhai newydd, ifanc; ailosod y cloc drwy ail-gofrestru | Cyfrif ac oedran risg a dderbyniwyd wedi'u hadrodd ar yr un dudalen; adolygiad o gau gan rywun y tu allan i'r tîm perchnogol; llinach cofnodion wedi'i chadw |
| Cwmpas datrysiadau dros dro | Ysgrifennu datrysiad dros dro amwys i fodloni'r maes; cyfrif datrysiad dros dro nad oes unrhyw asiant erioed wedi'i drio | Cyfradd defnyddio a methu datrysiadau dros dro mewn digwyddiadau cysylltiedig; prawf cyfnodol o sampl o ddatrysiadau dros dro |
| Digwyddiadau sy'n gysylltiedig â gwallau hysbys agored | Gadael digwyddiadau heb eu cysylltu, neu eu cysylltu ag achos gwahanol, fel bod y gyfran yn disgyn | Cyfran digwyddiadau heb eu cysylltu wedi'i hadrodd wrth ei hymyl; adolygiad sampl o ddigwyddiadau caeedig am gysylltiadau a fethwyd |
| Stoc dyled | Peidio â chofrestru dyled, fel bod y stoc yn edrych yn fach; uno llawer o eitemau yn un eitem fawr; cofrestru mân bethau i edrych yn ddiwyd | Adolygiad cofrestr yn erbyn sampl o adolygiadau cod ac ôl-farwolaethau digwyddiadau; gwiriadau maint a phenodoldeb eitemau |
| Llog dyled | Tanddagio'r gwaith i osgoi craffu, neu or-dagio i ennill cyllideb atgyweirio; darllen y ffigur fel sgôr o dîm | Archwiliad sampl o eitemau wedi'u tagio a heb eu tagio; golwg ar lefel tîm yn unig, heb gymhariaeth rhwng timau; llog wedi'i ddarllen gyda chysylltiadau digwyddiadau |
| Cyfran capasiti dyled | Tagio gwaith nodweddion cyffredin fel atgyweirio; dewis eitemau cosmetig hawdd i lenwi'r gyfran | Gwiriad canlyniad: oedran yr eitemau llog uchel hynaf a chysylltiadau digwyddiadau yn disgyn; adolygiad o'r hyn a drwsiwyd yn erbyn y graddio |
| Newid net dyled | Datrys llawer o eitemau bach iawn i wrthbwyso ychydig o rai mawr; cau eitemau fel "ni thrwsir" i wneud i'r cyfrif ddisgyn | Newid net wedi'i ddangos yn ôl band maint ac yn ôl llog; llinell "ni thrwsir" wedi'i hadrodd; gwiriad ailadrodd ar eitemau a ddatryswyd |

Mae darlleniad iach yn dangos cyfriflyfr sy'n weladwy, yn benodol, ac yn symud i gyfeiriad a ddewisodd y tîm. Mae nifer yr eitemau llog uchel hynaf yn disgyn. Mae digwyddiadau sy'n gysylltiedig â gwallau hysbys agored ar duedd i lawr, ac mae'r gyfran heb ei chysylltu yn fach. Mae cyfran capasiti dyled yn sefydlog ar y lefel y cytunwyd arni yn lle neidio ar ôl argyfwng a diflannu wedyn. Mae'r rhestr risg a dderbyniwyd yn fyr ac wedi'i hadolygu. Pan fo unrhyw un rhif yn edrych yn ardderchog ac nad yw'r lleill yn symud, amheuwch y diffiniad cyn dathlu.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Un cyfriflyfr unedig o wallau hysbys a dyled | Blaenoriaethu sengl; mae gweithrediadau a chyflawni yn gweld yr un costau | Angen offer neu gysylltiadau a rennir; rhaid setlo perchnogaeth ar draws dwy swyddogaeth |
| Cyfran capasiti sefydlog ar gyfer atgyweirio | Rhagweladwy; gwarchod gwaith atgyweirio rhag pwysau nodweddion | Gellir ei gwario ar eitemau gwerth isel os yw'r graddio'n wan |
| Gwaith atgyweirio wedi'i drefnu dim ond pan fydd yn ennill y ddadl flaenoriaeth | Hyblyg; ymateb i'r flaenoriaeth gyfredol | Mae nodweddion bron bob amser yn ennill; mae'r cyfriflyfr yn tyfu nes bod argyfwng |
| Llog wedi'i amcangyfrif o ddigwyddiadau a gwaith wedi'i dagio | Clymu dyled wrth gost arsylladwy; cefnogi graddio | Rhifau bras; yn dibynnu ar dagio onest a chysylltiadau digwyddiadau |
| Gwthiad atgyweirio pwrpasol neu "wythnos ddyled" | Ffocws a chynnydd gweladwy | Episodig; mae'r cyfriflyfr yn ail-lenwi rhwng digwyddiadau; yn ymyrryd ag ymrwymiadau cynlluniedig |

Dewiswch y trefniant ysgafnaf sy'n cadw'r eitemau llog uchel hynaf yn symud. Gall tîm bach redeg y cyfriflyfr ar un bwrdd gyda label ac adolygiad misol. Mae sefydliadau mwy angen cysylltiadau rhwng offer a dull graddio y cytunwyd arno. Y nod yw penderfyniad bwriadol am bob eitem, nid rhestr wag.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa dair eitem agored sy'n costio fwyaf i ni bob mis, a sut ydym ni'n gwybod?**
Gofynnwch i bobl enwi ymgeiswyr o'r cof, yna eu gwirio yn erbyn cysylltiadau digwyddiadau a gwaith wedi'i dagio. Cymharwch y rhestr a gofir â'r un a fesurwyd, a nodwch y bylchau. Cytunwch sut y caiff y dystiolaeth graddio ei chasglu o hyn ymlaen.

**2. Pan fyddwn yn gohirio atgyweiriad, pwy sy'n penderfynu, a phryd ydym ni'n edrych eto?**
Cerddwch drwy'r pum gohiriad diwethaf a gofynnwch pwy a dderbyniodd y risg a pha ddyddiad adolygu a osodwyd. Lle na phenderfynodd neb, esgeuluswyd yr eitem, ni chafodd ei gohirio. Cytunwch ar reol bod gan bob gohiriad berchennog, rheswm, a sbardun. Trafodwch sut y caiff y rhestr risg a dderbyniwyd ei hadolygu a chan bwy.

**3. Faint o gapasiti y dylem ei neilltuo ar gyfer atgyweirio, a beth fyddai'n newid y gyfran?**
Dangoswch duedd y cyfriflyfr a'r gyfran capasiti dyled gyfredol. Gofynnwch beth fyddai'r tîm yn fodlon ei ildio i'w chodi, a pha dystiolaeth fyddai'n gadael iddi ddisgyn. Cofnodwch y rhif, y rheswm, a'r dyddiad i ailedrych arno.

**4. A yw ein datrysiadau dros dro yn real, ac a fyddai asiant newydd yn gallu eu dilyn?**
Dewiswch ddatrysiad dros dro ar hap a gofynnwch i rywun na'i hysgrifennodd ei ddilyn. Cytunwch ar drefn brofi ar gyfer y datrysiadau dros dro sy'n cwmpasu'r gwallau effaith uchaf.

**5. Beth sy'n cyfrif fel wedi'i drwsio, a pha mor hir ydym ni'n gwylio cyn i ni gau'r cofnod?**
Cymharwch y rheolau cau a ddefnyddir gan weithrediadau, cyflawni, a'r perchennog cynnyrch. Trafodwch ffenestr ailadrodd sy'n addas i'r gwasanaeth, a'r hyn y bydd y tîm yn ei wneud pan fo eitem gaeedig yn ailagor. Cytunwch ar un diffiniad ac ysgrifennwch ef yn y gofrestr metrigau.

**6. Ble gallai ein rhifau dyled fod yn dweud stori gyfforddus wrthym?**
Gofynnwch am y ffyrdd y gellid gwenieithu pob rhif: dyled heb ei chofrestru, eitemau hawdd wedi'u trwsio'n gyntaf, eitemau a gaewyd fel ni thrwsir. Edrychwch ar y gyfran digwyddiadau heb eu cysylltu a'r rhestr risg a dderbyniwyd. Dewiswch un rheilen warchod i'w hychwanegu'r chwarter hwn ac enwch pwy fydd yn ei gwirio.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn gweld dyled gyntaf, fel arfer wrth newid cod. Maent yn elwa o gofrestr sy'n hawdd ychwanegu ati ac o gyfran warchodedig o gapasiti, fel nad yw gwaith atgyweirio yn dibynnu ar ennill dadl ym mhob sgwrs gynllunio. Dylent gofrestru llwybrau byr pan fyddant yn eu cymryd, tagio gwaith a achosir gan fannau gwan, ac osgoi defnyddio dyled fel label ar gyfer unrhyw waith y byddai'n well ganddynt beidio â'i wneud (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif, ar gyfer effeithiau dyled ar amser arweiniol).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn gweld y llog: digwyddiadau sy'n ailadrodd, camau â llaw, datrysiadau dros dro bregus, a'r llwyth ar alwad sy'n dilyn. Maent yn berchen ar y cofnodion gwallau hysbys a'r dogfennau datrysiad dros dro, ac mae ganddynt y data digwyddiadau sy'n prisio'r llog. Dylent gysylltu pob digwyddiad â'i wall hysbys, profi datrysiadau dros dro, a dod â thystiolaeth wedi'i graddio i'r sgwrs gynllunio yn lle rhestr o gwynion (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn penderfynu faint o gapasiti y mae gwaith atgyweirio yn ei dderbyn, ac mae'r cymhellion y maent yn eu gosod yn penderfynu a yw'r cyfriflyfr yn aros yn onest. Dylent ofyn am y dosbarthiad oedran, y ffigurau llog, a'r rhestr risg a dderbyniwyd, nid un sgôr dyled. Mae darllen y cyfriflyfr fel graddio tîm yn cosbi cofrestru ac yn gyrru dyled o dan y ddaear. Dylai fforwm llywodraethu drin derbyn risg fel penderfyniad gyda pherchennog a dyddiad adolygu.

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn teimlo dyled fel methiannau dro ar ôl tro a datrysiadau dros dro y mae'n rhaid iddynt eu dilyn. Lle mae datrysiad dros dro yn effeithio ar ddefnyddwyr, cyhoeddwch ef gyda nodyn plaen ar pryd y disgwylir atgyweiriad, ac anrhydeddwch y dyddiad neu eglurwch y newid. Mae llai o ddigwyddiadau sy'n ailadrodd a statws gonest ar broblemau hysbys yn adeiladu mwy o ymddiriedaeth nag addewid o ddim diffygion (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn rhedeg gwasanaeth amserlennu cleifion, a gefnogir gan un tîm cynnyrch a grŵp gweithrediadau. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r grŵp gweithrediadau yn cadw 23 gwall hysbys yn yr offeryn ITSM. Mae'r tîm cynnyrch yn cadw rhestr ar wahân o 41 eitem ddyled ar ei fwrdd. Mae adolygiad chwarterol yn canfod bod 9 o'r gwallau hysbys a 7 o'r eitemau dyled yn disgrifio'r un pum achos. Y gwall hysbys hynaf yw 14 mis oed, oedran canolrifol gwallau hysbys yw 5 mis, a'r 85fed canradd yw 11 mis. Mae cwmpas datrysiadau dros dro yn 61 y cant. Mae digwyddiadau sy'n gysylltiedig â gwallau hysbys agored yn 18 y cant o ddigwyddiadau'r chwarter, ac nid yw 22 y cant o ddigwyddiadau wedi'u cysylltu, felly gallai'r gyfran go iawn fod yn uwch.

Mae'r tîm yn uno'r ddwy restr yn un cyfriflyfr o 55 eitem wahanol. Ar gyfer y deg eitem sydd â'r digwyddiadau mwyaf cysylltiedig, mae'n amcangyfrif ymdrech atgyweirio mewn bandiau a llog misol mewn oriau. Mae un eitem yn sefyll allan: mae swydd cysoni apwyntiadau nosol yn methu'n dawel tua unwaith bob pythefnos ac mae angen ailgychwyn â llaw gan staff ar alwad. Amcangyfrifir ei hatgyweiriad ar ddwy wythnos. Ei llog, o ddigwyddiadau cysylltiedig a gwaith wedi'i dagio, yw tua 10 awr y mis, ac mae pob methiant yn oedi rhestrau clinig y bore. Mae amser ad-dalu tua phedwar mis, sy'n gynt nag unrhyw nodwedd yn y cynllun ar y pryd.

Y penderfyniad, a gofnodwyd yn y log penderfyniadau, yw neilltuo 15 y cant o gapasiti'r tîm cynnyrch ar gyfer gwaith atgyweirio, wedi'i raddio yn ôl llog fesul uned o ymdrech, a thrwsio'r swydd cysoni yn gyntaf. Mae pennaeth gweithrediadau hefyd yn cytuno i gysylltu pob digwyddiad â gwall hysbys lle mae un yn bodoli ac i brofi'r pum datrysiad dros dro a ddefnyddir fwyaf.

Ddau chwarter yn ddiweddarach, canolrif oedran gwallau hysbys yw 4 mis a'r 85fed canradd yw 9 mis. Mae digwyddiadau sy'n gysylltiedig â gwallau hysbys agored yn disgyn i 11 y cant. Mae'r gyfran heb ei chysylltu yn disgyn i 8 y cant, sy'n rhoi mwy o hyder i'r tîm yn y ffigur. Yna mae'r tîm yn dal risg chwarae'r system. Mae'r llinell newid net dyled yn dangos 12 eitem wedi'u datrys mewn chwarter, ond roedd 6 ohonynt wedi'u cau fel ni thrwsir, a dwy o'r rheini oedd yr eitemau llog uchel hynaf. Mae adolygydd y tu allan i'r tîm yn darllen y cofnodion ac yn canfod bod y cau wedi'i wneud i wella'r ffigur oedran. Ailagorir yr eitemau, daw'r rheswm cau yn faes gofynnol gyda chymeradwywr a enwir, ac mae eitemau risg a dderbyniwyd bellach yn ymddangos ar yr un dudalen â'r dosbarthiad oedran.

## Y golwg fesul sector

**Busnes newydd.** Fel arfer mae dyled yn fwriadol ac yn aml yn gywir, oherwydd mai cyflymder i'r cwsmer cyntaf sydd bwysicaf. Cadwch un rhestr ar y bwrdd gyda label, cofrestrwch lwybrau byr wrth i chi eu cymryd, a gosodwch ddyddiad adolygu fel bod gan "yn ddiweddarach" ystyr. Codwch y gyfran atgyweirio pan fo llog yn dechrau ymddangos mewn digwyddiadau.

**Busnes bach.** Yn aml mae gweinyddwr unigol neu dîm bach yn cario gweithrediadau a chyflawni, felly mae'r ddwy restr yn naturiol yn un. Cofnodwch wallau hysbys a'u datrysiadau dros dro mewn dogfen a rennir, a nodwch pa gyflenwr neu gontract y mae pob eitem yn dibynnu arno. Gwall hysbys na allwch ei drwsio eich hun yw diffyg sy'n eiddo i gyflenwr, felly olrheiniwch ddyddiad ymrwymedig y cyflenwr a'ch datrysiad dros dro.

**Menter fawr.** Mae llawer o dimau, llawer o wasanaethau, a llawer o gyflenwyr yn creu sawl rhestr gystadleuol a sawl diffiniad o "wedi'i wneud". Setlwch un strwythur cyfriflyfr, un rheol gau, ac un dull graddio, a gadewch i dimau ychwanegu meysydd lleol gyda mapio a nodwyd.

**Llywodraeth a'r sector cyhoeddus.** Mae systemau etifeddol, cylchoedd caffael hir, a chyllidebau sefydlog yn gwneud rhywfaint o ddyled yn gostus i'w had-dalu a rhai penderfyniadau amnewid yn araf. Cofnodwch y cyfyngiadau cyfreithiol, cadw, ac archwilio sy'n rhwystro atgyweiriad, gan eu bod yn esbonio gohirio. Dangoswch y cyfriflyfr fel rhan o adrodd risg, a chynlluniwch atgyweirio yn y cylch cyllideb yn lle ei drin fel cost anghynlluniedig (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw rhoi'r gorau i dalu llog na allwch ei weld. Digwyddiadau sy'n ailadrodd, datrysiadau dros dro â llaw, a newidiadau araf, peryglus yw'r costau gweladwy, ac fel arfer cânt eu cofnodi fel problemau ar wahân mewn cyllidebau ar wahân. Mae cyfriflyfr unedig yn eu troi'n un gymhariaeth rhwng cost atgyweirio a chost cario'r ddyled.

Mae gan gost yr arfer dair rhan. Y gyntaf yw gosod: cofrestr, cysylltiadau rhwng yr offeryn ITSM a'r traciwr, a chonfensiwn tagio. Yr ail yw ymdrech redeg: ychydig eiliadau fesul digwyddiad i'w gysylltu, ychydig eiliadau fesul eitem waith i'w dagio, ac adolygiad misol o awr neu ddwy fesul gwasanaeth. Y drydedd yw'r capasiti atgyweirio ei hun, sef yr eitem fwyaf ac mae'n fuddsoddiad bwriadol, nid gorbenion.

Daw'r elw o batrymau y gallwch eu mesur eich hun. Cymharwch y digwyddiadau sy'n gysylltiedig â gwall hysbys cyn ac ar ôl ei atgyweiriad, oriau gwaith wedi'i dagio ar newidiadau yr effeithiwyd arnynt cyn ac ar ôl, a'r ymyriadau ar alwad a osgowyd. Ychwanegwch gost amser segur os yw eich sefydliad eisoes yn ei hamcangyfrif. Peidiwch â benthyg ffigur diwydiant ar gyfer cost dyled: mae'r llenyddiaeth ymchwil ar y pwnc yn real, ond mae'r ffigurau'n dibynnu ar gyd-destun, ac mae eich data digwyddiadau ac amser eich hun yn well tystiolaeth. Mae ymchwil *Accelerate* yn cysylltu perfformiad cyflawni â pherfformiad sefydliadol (gweler pwnc 2.8, Metrigau DORA), er nad yw'n rhoi pris ar gyfer eich cyfriflyfr. Am driniaeth ehangach o gost ac elw, gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes.

## Gwrthbatrymau a maglau

- **Dwy restr nad ydynt byth yn cwrdd.** Mae gweithrediadau a chyflawni yn dadlau dros yr un capasiti â thystiolaeth wahanol. Unwch y rhestrau neu gysylltwch bob achos a rennir.
- **Un sgôr dyled ar gyfer y sefydliad.** Mae'n cuddio ble mae'r gost ac yn gwahodd graddio timau. Adroddwch y cyfriflyfr yn ôl gwasanaeth, gydag oedran, llog, a pherchnogaeth.
- **Yr ailysgrifennu mawr fel yr unig atgyweiriad.** Mae glanhau mawr yn aros yn eu hunfan, ac mae'r cyfriflyfr yn ail-lenwi tra byddant yn rhedeg. Ymddeolwch eitemau mewn camau bach, wedi'u graddio yn ôl amser ad-dalu.
- **Dyled sero fel nod.** Mae ei dilyn yn gwobrwyo cau dibwys ac yn atal cofrestru gonest. Anelwch at gyfriflyfr y mae ei eitemau llog uchel hynaf yn symud.
- **Cau gwallau hysbys ar "wedi'i uno".** Nid yw'r atgyweiriad wedi cyrraedd defnyddwyr, ac mae'r digwyddiad yn dychwelyd. Caewch ar ryddhad, yna gwyliwch am ailadrodd dros ffenestr a nodwyd.
- **Cuddio gohirio yn "ni thrwsir".** Mae'r ffigur oedran yn gwella ac mae'r risg yn aros. Cyfrwch risg a dderbyniwyd ar wahân, gyda pherchennog a dyddiad adolygu.
- **Trin dadansoddi statig fel y gwir.** Mae sgoriau'n adlewyrchu siâp cod, nid cost. Defnyddiwch hwy i ddod o hyd i ymgeiswyr, yna cadarnhewch gyda chysylltiadau digwyddiadau a hanes newid.
- **Priodoli dyled i awduron.** Mae'n dysgu pobl i guddio llwybrau byr ac i osgoi cydrannau caled. Cadwch bob mesur ar lefel gwasanaeth a thîm (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Cyfriflyfr a diffiniadau | Mae gwallau hysbys a dyled yn byw ym mhennau pobl neu mewn nodiadau gwasgaredig | Mae gweithrediadau a chyflawni bob un yn cadw rhestr, gyda gwahanol reolau | Un cyfriflyfr gyda diffiniad ysgrifenedig, perchennog, a rheol gau ar gyfer pob eitem | Oedran, risg a dderbyniwyd, a newid net wedi'u hadolygu yn erbyn y diffiniadau ysgrifenedig | Diffiniadau wedi'u diwygio gyda chyflenwyr a chwsmeriaid pan fyddant yn peidio â hysbysu penderfyniadau |
| Mesur llog | Dim cyswllt rhwng digwyddiadau ac achosion | Rhai digwyddiadau wedi'u cysylltu â gwallau hysbys â llaw | Cysylltiadau digwyddiadau yn ofynnol lle mae'r achos yn hysbys; gwaith wedi'i dagio ar lefel tîm | Llog ac amser ad-dalu wedi'u hamcangyfrif ar gyfer yr eitemau uchaf ac wedi'u tueddu | Llog wedi'i gysylltu â chanlyniadau gwasanaeth a'i rannu ar draws timau a chyflenwyr |
| Capasiti a blaenoriaethu | Mae atgyweirio yn digwydd mewn argyfwng | Amser anffurfiol wedi'i neilltuo gan rai timau | Cyfran y cytunwyd arni o gapasiti a dull graddio cyffredin | Cyfran wedi'i haddasu gan duedd y cyfriflyfr ac wedi'i hariannu fel gwaith cynlluniedig | Capasiti atgyweirio wedi'i gydlynu ar draws llwyfannau a rennir a chyflenwyr |
| Datrysiadau dros dro a chau | Datrysiadau dros dro heb eu dogfennu neu wedi'u dal gan un person | Wedi'u dogfennu ar gyfer rhai gwallau, heb eu profi | Datrysiadau dros dro yn y gronfa wybodaeth, gyda rheol gau ar ryddhad | Defnydd datrysiadau dros dro, methu, ac ailadrodd ar ôl cau wedi'u mesur | Datrysiadau dros dro yn cael eu hymddeol yn awtomatig wrth i atgyweiriadau ryddhau, gydag adborth gan ddefnyddwyr |

## Rhestr wirio

- [ ] Mae gwallau hysbys ac eitemau dyled mewn un cyfriflyfr, neu wedi'u cysylltu eitem wrth eitem.
- [ ] Mae gan bob eitem berchennog, band maint, gwasanaeth, a dyddiad adolygu.
- [ ] Cofrestrir llwybrau byr bwriadol pan gânt eu cymryd, gyda rheswm.
- [ ] Cysylltir digwyddiadau â gwallau hysbys lle mae'r achos yn hysbys, ac adroddir y gyfran heb ei chysylltu.
- [ ] Tagir gwaith a achosir gan fannau gwan ar lefel tîm, ac archwilir y tagio drwy sampl.
- [ ] Mae gan bob un o'r eitemau uchaf fand ymdrech atgyweirio ac amcangyfrif llog misol.
- [ ] Cytunir ar gyfran o gapasiti ar gyfer gwaith atgyweirio, ei hadrodd, a'i hadolygu bob chwarter.
- [ ] Mae gwallau hysbys yn cau ar ryddhad yr atgyweiriad, gyda ffenestr ailadrodd a nodwyd.
- [ ] Rhestrir cau risg a dderbyniwyd ar wahân, gyda chymeradwywr a dyddiad adolygu.
- [ ] Profir datrysiadau dros dro ar gyfer y gwallau effaith uchaf yn ôl amserlen.
- [ ] Dangosir y dosbarthiad oedran a'r rhaniad yn ôl gwasanaeth, gyda'r cyfansymiau.
- [ ] Ni ddefnyddir unrhyw fesur dyled i gymharu na graddio unigolion.

## Anogwyr AI

**Unwch ddwy restr yn un cyfriflyfr.**

```text
Mae gennyf ddwy restr o atgyweiriadau gohiriedig. Daw Rhestr A o [offeryn
gweithrediadau neu ffynhonnell] ac mae'n dal [nifer] o wallau hysbys. Daw
Rhestr B o [traciwr cyflawni neu ffynhonnell] ac mae'n dal [nifer] o eitemau
dyled dechnegol. Dyma'r cofnodion: [gludwch gofnodion gyda theitl, gwasanaeth,
dyddiad cofrestru, a disgrifiad un llinell]. Grwpiwch gofnodion sy'n ymddangos
fel pe baent yn disgrifio'r un achos, cynigiwch gofnod cyfriflyfr sengl ar gyfer
pob grŵp, a nodwch gofnodion sydd angen i berson gadarnhau'r paru. Peidiwch â
dyfeisio achosion, gwasanaethau, na dyddiadau. Rhestrwch eich rhagdybiaethau
a'r cwestiynau y dylwn eu hateb cyn uno.
```

**Amcangyfrifwch fandiau ymdrech a llog misol ar gyfer yr eitemau uchaf.**

```text
Ar gyfer eitem y cyfriflyfr [teitl yr eitem] ar [gwasanaeth], mae gennyf y
dystiolaeth hon: digwyddiadau cysylltiedig [rhestr gyda dyddiadau a hydoedd],
gwaith wedi'i dagio [oriau neu gyfrifon eitemau], ac amcangyfrif atgyweirio gan
y tîm o [amcangyfrif]. Helpwch fi i ysgrifennu bandiau ymdrech a llog misol
bras, amser ad-dalu syml, a lefel hyder ar gyfer pob ffigur. Dangoswch eich
rhifyddeg. Peidiwch â dyfeisio costau, gwerthoedd meincnod, na ffigurau
diwydiant. Os yw ffigur ar goll, gofynnwch i mi amdano. Rhestrwch eich
rhagdybiaethau.
```

**Adolygwch risgiau cau a chwarae'r system.**

```text
Dyma'r diffiniadau a data'r chwarter diwethaf ar gyfer ein cyfriflyfr gwallau
hysbys a dyled: [diffiniadau oedran, cwmpas datrysiadau dros dro, newid net
dyled, a'r rheol gau] a [crynodeb o eitemau a gaewyd, gyda rhesymau cau].
Nodwch y ffyrdd y gellid gwenieithu'r mesurau hyn, y dystiolaeth yn y data sy'n
awgrymu ei fod wedi digwydd, a rheilen warchod ar gyfer pob un. Trinwch hyn fel
adolygiad o'r offeryn, nid adolygiad o bobl. Peidiwch â chyhuddo neb, a
pheidiwch â dyfeisio data. Rhestrwch eich rhagdybiaethau.
```

**Paratowch sgwrs flaenoriaethu gyda'r perchennog cynnyrch.**

```text
Mae angen i mi gynnig sut i rannu capasiti rhwng nodweddion a gwaith atgyweirio
ar gyfer [tîm] y chwarter nesaf. Mae'r cyfriflyfr yn dangos [crynodeb o'r
cyfriflyfr: cyfrifon, dosbarthiad oedran, eitemau uchaf gyda bandiau ymdrech a
llog]. Mae'r cynllun nodweddion yn cynnwys [crynodeb o nodweddion cynlluniedig
a'u gwerth disgwyliedig, fel y'i cyflenwyd gan y perchennog cynnyrch].
Drafftiwch gynnig un dudalen sy'n cymharu opsiynau ar gyfer y gyfran atgyweirio,
yn nodi cost oedi'r prif eitemau atgyweirio, ac yn enwi'r cyfaddawdau. Peidiwch
â dyfeisio amcangyfrifon gwerth na chyfrannau meincnod. Rhestrwch eich
rhagdybiaethau a'r penderfyniadau y mae'n rhaid i'r perchennog cynnyrch eu
gwneud.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n diffinio metrig cysylltiedig, megis ailadrodd neu fethiant newid, a'r rheilen warchod sy'n perthyn wrth ei ymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod metrig wedi'i olygu yn enwi ei glociau, ei ffordd o chwarae'r system, a'i reilen warchod.

## Pwyntiau allweddol

- Dau olwg ar un cyfriflyfr o atgyweiriadau gohiriedig yw gwallau hysbys a dyled dechnegol, felly cadwch hwy gyda'i gilydd neu wedi'u cysylltu.
- Mesurwch y llog y mae pob eitem yn ei gostio bob mis, mewn digwyddiadau, datrysiadau dros dro, a newid wedi'i arafu, a graddiwch atgyweirio yn ôl amser ad-dalu.
- Gwnewch bob gohiriad yn benderfyniad gyda pherchennog, rheswm, a dyddiad adolygu, ac adroddwch risg a dderbyniwyd ar wahân.
- Neilltuwch gyfran y cytunwyd arni o gapasiti ar gyfer gwaith atgyweirio, ac adroddwch hi wrth ymyl gwaith cynlluniedig.
- Caewch wall hysbys ar ryddhad yr atgyweiriad, yna gwyliwch am ailadrodd cyn i chi ymddiried yn y canlyniad.
- Cadwch bob mesur ar lefel gwasanaeth a thîm, a defnyddiwch reiliau gwarchod fel bod rhif gwell yn golygu system well.

## Cyfeiriadau a darllen pellach

1. Cunningham, W., "The WyCash Portfolio Management System," OOPSLA '92 Experience Report, ACM, 1992.
2. Fowler, M., "Technical Debt Quadrant," 2009, https://martinfowler.com/bliki/TechnicalDebtQuadrant.html
3. Fowler, M., *Refactoring: Improving the Design of Existing Code*, 2nd edition, Addison-Wesley, 2018.
4. Kruchten, P., Nord, R., and Ozkaya, I., *Managing Technical Debt: Reducing Friction in Software Development*, Addison-Wesley, 2019.
5. Sculley, D., and others, "Hidden Technical Debt in Machine Learning Systems," Advances in Neural Information Processing Systems 28, 2015, https://papers.nips.cc/paper_files/paper/2015/hash/86df7dcfd896fcaf2674f757a2463eba-Abstract.html
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
8. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
9. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Ward Cunningham](https://en.wikipedia.org/wiki/Ward_Cunningham).
13. Wikipedia, [Root cause analysis](https://en.wikipedia.org/wiki/Root_cause_analysis).
14. Wikipedia, [Code refactoring](https://en.wikipedia.org/wiki/Code_refactoring).
15. Wikipedia, [Code smell](https://en.wikipedia.org/wiki/Code_smell).
16. Wikipedia, [Opportunity cost](https://en.wikipedia.org/wiki/Opportunity_cost).
17. Wikipedia, [Cost of delay](https://en.wikipedia.org/wiki/Cost_of_delay).
18. Wikipedia, [Software bug](https://en.wikipedia.org/wiki/Software_bug).
19. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
