# Metrigau rheoli gwybodaeth

**Mesurwch wybodaeth yn ôl a gaiff ei defnyddio a'i hymddiried ynddi ar adeg yr angen, nid yn ôl faint ohoni sy'n bodoli: gwyliwch y gyfradd cysylltu, ailddefnyddio, ffresni a dod o hyd iddi gyda'i gilydd, a thrinwch bob cyfrif erthyglau fel cwestiwn am y gwaith yn hytrach na sgôr.**

## Crynodeb a chymhelliant

Mae tîm gwasanaeth yn cronni gwybodaeth bob dydd: sut i adfer gwasanaeth, beth mae neges gwall ddryslyd yn ei olygu mewn gwirionedd, pa ddatrysiad dros dro a ddaliodd y tro diwethaf. [Rheoli gwybodaeth](https://en.wikipedia.org/wiki/Knowledge_management) yw'r ddisgyblaeth o wneud y wybodaeth honno ar gael i'r person nesaf sydd ei hangen. Yn ITIL 4 (argraffiad 2019 y fframwaith a gyhoeddwyd gan AXELOS, a'r sylfaen a ddogfennir yn eang ar gyfer y llyfr hwn), mae rheoli gwybodaeth yn arfer ynddo'i hun, ac mae [ITIL](https://en.wikipedia.org/wiki/ITIL) hefyd yn disgwyl iddo gefnogi trin digwyddiadau, trin problemau, a'r ddesg gwasanaeth. Mae'r pwnc hwn yn ymdrin â sut i ddweud a yw'r gefnogaeth honno'n real.

Mae'r rhan fwyaf o allbwn defnyddiadwy rheoli gwybodaeth yn cyrraedd [cronfa wybodaeth](https://en.wikipedia.org/wiki/Knowledge_base): storfa o erthyglau, llawlyfrau gweithredu, cofnodion gwallau hysbys, ac atebion byr sut-i. Set ysgrifenedig o gamau ar gyfer gweithrediad arferol neu adferiad yw [llawlyfr gweithredu](https://en.wikipedia.org/wiki/Runbook). Erthyglau yw'r rhan eglur o'r hyn y mae tîm yn ei wybod. Ni ellir ysgrifennu [gwybodaeth ymhlyg](https://en.wikipedia.org/wiki/Tacit_knowledge) pobl brofiadol, megis synnwyr bod larwm yn sŵn, yn llawn, ac nid oes unrhyw fetrig yn y pwnc hwn yn ei mesur yn uniongyrchol.

Yn yr olwg ITIL, mae gwybodaeth yn ased a reolir â chylch bywyd: ei chreu, ei hadolygu, ei chyhoeddi, ei defnyddio, a'i hymddeol. Yn yr olwg ystwyth, rhaid i ddogfennaeth ennill ei lle, mae sgwrs a phario yn cario llawer iawn, ac mae gwybodaeth ysgrifenedig yn sgil-gynnyrch gorffen gwaith. Mae'r ddwy olwg yn cytuno ar y prawf: a helpodd y wybodaeth rywun i ddatrys problem go iawn yn gyflymach neu'n well nag y byddent hebddi?

Y dull sy'n cysylltu'r ddwy olwg yn fwyaf uniongyrchol yw [Gwasanaeth Wedi'i Ganoli ar Wybodaeth (KCS)](https://en.wikipedia.org/wiki/Knowledge-centered_support), methodoleg gan y Consortium for Service Innovation. Yn KCS, caiff gwybodaeth ei chipio a'i gwella fel rhan o ddatrys y broblem, nid wedyn. Mae pobl yn gweithio mewn dwy ddolen. Y ddolen datrys yw eiliad y datrysiad: chwilio am erthygl bresennol, ei hailddefnyddio a'i gwella os dewch o hyd iddi, creu un os na ddewch. Y ddolen esblygu yw'r cylch hirach sy'n astudio sut mae gwybodaeth yn perfformio ac yn gwella'r system o'i chwmpas. Mae KCS hefyd yn cynnig ei ddangosyddion ei hun, megis y gyfradd y cysylltir achosion a ddatryswyd ag erthyglau. Mae'r pwnc hwn yn crynhoi'r syniadau hynny mewn ffordd niwtral o ran gwerthwyr; dylai timau sy'n mabwysiadu KCS yn ffurfiol ddarllen canllaw arferion y Consortium ei hun.

Rhestr eiddo yw nifer yr erthyglau mewn cronfa wybodaeth, nid canlyniad, ac mae'n codi gydag esgeulustod mor hawdd â gyda gofal. Mae'r metrigau isod wedi'u clymu i eiliad o ddefnydd yn lle hynny: achos wedi'i gau, chwiliad a wnaed, ymateb darllenydd. Gellir plygu hyd yn oed y rheini (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae mesurau cyswllt a thrin yn byw gyda'r [ddesg gwasanaeth](https://en.wikipedia.org/wiki/Service_desk) (gweler pwnc 3.1, Metrigau desg gwasanaeth). Daw cyfaint a phatrymau ailadrodd o ddata digwyddiadau (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau). Ymdrinnir â llwyddiant hunanwasanaeth, lle mae defnyddwyr yn defnyddio erthyglau heb asiant, ar wahân (gweler pwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio). Mae'r pwnc hwn yn aros gydag iechyd y wybodaeth ei hun a'i defnydd gan y bobl sy'n datrys problemau.

## Egwyddorion allweddol

- **Mesurwch ddefnydd ar bwynt y gwaith.** Mae erthygl sydd wedi'i chysylltu ag achos a ddatryswyd neu a ganfuwyd gan chwiliad yn dystiolaeth o werth. Nid yw erthygl sy'n bodoli'n unig.
- **Cipiwch yn llif y gwaith.** Mae gwybodaeth a ysgrifennir yn ystod datrys yn ffresach ac yn rhatach na gwybodaeth a ysgrifennir mewn ymgyrch ddogfennu ar wahân, felly dylai metrigau wobrwyo cipio fel rhan o orffen gwaith.
- **Darllenwch ffresni yn erbyn defnydd.** Nid yw hen yr un peth â chamgymeriad. Mae ymdrech adolygu yn perthyn ar erthyglau a ddefnyddir yn aml, nid wedi'i lledaenu'n gyfartal dros gatalog o dudalennau heb eu darllen gan mwyaf.
- **Samplwch am berthnasedd.** Dim ond yn profi bod rhywun wedi creu'r cyswllt y mae cyswllt rhwng achos ac erthygl. Mae sampl ddynol fach o ba un a oedd yr erthygl yn ffitio mewn gwirionedd yn dweud wrthych a yw'r cyswllt yn golygu unrhyw beth.
- **Disgrifiwch dimau ac ardaloedd gwybodaeth, byth unigolion.** Mae cyfrifon cyfraniad fesul person yn troi ased a rennir yn gystadleuaeth ac yn dysgu pobl i ysgrifennu sbwriel (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).
- **Parwch bob metrig cyfaint â signal ansawdd.** Cyfradd cysylltu â pherthnasedd, creu erthyglau â dyblygion, ailddefnyddio ag adborth darllenwyr.

## Diffiniadau metrigau

Mae'r tabl yn rhestru saith metrig. Dewisiadau y mae tîm yn eu gwneud ac yn eu hysgrifennu yw ffenestri amser (megis y cyfnod adolygu ar gyfer ffresni); nid yw'r un gwerth yma yn feincnod. Drwyddi draw, mae "achos" yn golygu cofnod digwyddiad neu gais gwasanaeth yn yr offeryn ITSM (rheoli gwasanaethau TG), ac adroddir digwyddiadau mawr ar wahân fel nad ydynt yn ystumio'r cymarebau (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd cysylltu gwybodaeth | Cyfran yr achosion a ddatryswyd sydd ag o leiaf un erthygl wybodaeth ynghlwm ar adeg y datrysiad | achosion a ddatryswyd yn y cyfnod ag o leiaf un erthygl gysylltiedig / achosion a ddatryswyd yn y cyfnod. Mae'n cyfrif dyddiad datrys; eithrir digwyddiadau mawr, achosion a gaewyd fel dyblygion, ac achosion a gaewyd yn awtomatig heb waith dynol | canran | Offeryn ITSM: tablau cysylltiadau achosion ac erthyglau | Rheoli gwybodaeth; rheoli digwyddiadau | Mae'r diffiniad o orffen yn cynnwys cipio'r hyn a ddysgwyd | Wythnosol ar gyfer y tîm; misol i'w adolygu |
| Cymhareb ailddefnyddio | Cyfran y cysylltiadau erthyglau sy'n pwyntio at erthygl sy'n bodoli yn hytrach nag at un a grëwyd yn ystod yr achos hwnnw | cysylltiadau ag erthyglau a fodolai cyn i'r achos agor / pob cyswllt erthygl a wnaed ar achosion a ddatryswyd yn y cyfnod. Eithrir cysylltiadau a ychwanegwyd ar ôl i'r achos gau | canran | Offeryn ITSM: dyddiad creu erthygl yn erbyn dyddiad agor achos | Rheoli gwybodaeth; gwelliant parhaus | Ailddefnyddio dros ailwaith; perchnogaeth a rennir o'r cod a'i ddogfennau | Misol |
| Ffresni erthyglau | Cyfran yr erthyglau a ddefnyddir sydd wedi'u hadolygu, neu eu defnyddio a'u cadarnhau'n gywir, o fewn ffenestr adolygu a nodwyd | erthyglau a ddefnyddir â dyddiad adolygu neu ddefnydd wedi'i gadarnhau y tu mewn i'r ffenestr / erthyglau a ddefnyddir. Defnyddir erthygl os cysylltwyd hi ag achos neu os gwelodd darllenydd hi yn y 12 mis diwethaf (dewis tîm); eithrir drafftiau ac erthyglau a ymddeolwyd | canran | Metadata'r gronfa wybodaeth a'r log golygon | Rheoli gwybodaeth; desg gwasanaeth | Mireinio ôl-groniad dogfennaeth; camau gweithredu ôl-sylliad | Misol |
| Cyfradd chwiliadau di-ganlyniad | Cyfran y chwiliadau gwybodaeth nad ydynt yn dychwelyd unrhyw erthygl | chwiliadau heb ganlyniadau / pob chwiliad. Eithrir chwiliadau gan robotiaid a gwiriadau awtomataidd; cyfrifir pob chwiliad unwaith hyd yn oed os caiff ei ailadrodd o fewn munud | canran | Log chwilio'r gronfa wybodaeth neu'r porth | Rheoli gwybodaeth; desg gwasanaeth; rheoli ceisiadau gwasanaeth | Darganfod angen defnyddiwr heb ei ddiwallu; mewnbwn i'r ôl-groniad | Wythnosol |
| Cyfradd defnyddioldeb | Cyfran yr adborth darllenwyr sy'n dweud bod yr erthygl wedi helpu, wedi'i dangos gyda'r gyfradd ymateb | pleidleisiau defnyddiol / (pleidleisiau defnyddiol + pleidleisiau annefnyddiol) ar gyfer erthyglau yn y cyfnod; cyfradd ymateb = pleidleisiau adborth / golygon erthyglau | canran, gyda chyfradd ymateb | Teclyn adborth y gronfa wybodaeth a'r log golygon | Rheoli gwybodaeth; profiad cwsmeriaid | Adborth adolygiad rhanddeiliaid ar ddogfennaeth | Misol |
| Amser i gyhoeddi | Yr amser a aeth heibio o pryd y crëir drafft erthygl i pryd y caiff ei adolygu a'i wneud yn weladwy i'w gynulleidfa | mae'r cloc yn dechrau wrth greu'r drafft, yn stopio wrth gyhoeddi (neu ar y cyflwr gweladwy cymeradwy cyntaf). Eithrir amser mewn cyflwr "ar ddal, aros am ryddhad cynnyrch"; adroddir fel canolrif a 85fed canradd | diwrnodau (canolrif a 85fed canradd) | Hanes llif gwaith y gronfa wybodaeth | Rheoli gwybodaeth | Amser arweiniol eitem waith o'r dechrau i orffen (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif) | Misol |
| Ehangder cyfraniad | Lledaeniad creu a gwella erthyglau ar draws y tîm, wedi'i fesur heb enwi pobl | cyfranwyr gwahanol a greodd neu a wellodd erthygl yn y cyfnod / aelodau'r tîm a ddatrysodd achosion yn y cyfnod. Adroddir ar gyfer tîm yn unig, byth fel rhestr o enwau | canran | Hanes golygu'r gronfa wybodaeth wedi'i gysylltu ag aelodaeth tîm | Rheoli gwybodaeth; gwelliant parhaus | Perchnogaeth ar y cyd; pario a heidio | Chwarterol |

Mae gan gyfradd cysylltu gwybodaeth gloc sy'n hawdd ei fethu. Rhaid i'r cyswllt fodoli pan ddatrysir yr achos, nid pan fo rhywun yn tacluso wythnos yn ddiweddarach, oherwydd bod cysylltu hwyr yn mesur glanhau ac yn dweud dim wrthych am ddefnydd yn ystod datrys. Mae cymhareb ailddefnyddio yn dibynnu ar ddyddiad creu erthygl dibynadwy. Os caiff erthyglau eu mudo neu eu mewnforio'n swmp, mae eu dyddiadau creu yn ailosod a bydd y gymhareb yn camarwain nes marcio'r mudo.

## Argymhellion

### Penderfynwch beth yw pwrpas y wybodaeth

**1. Cysylltwch bob metrig gwybodaeth â defnydd.** Enwch y bobl y mae'r wybodaeth yn eu gwasanaethu: dadansoddwyr desg gwasanaeth yn datrys ar y cyswllt cyntaf, peirianwyr ar alwad yn trin rhybudd, neu ddefnyddwyr yn eu helpu eu hunain. Mae angen mesurau gwahanol ar bob cynulleidfa. Caiff llawlyfr gweithredu ar gyfer peiriannydd ar alwad ei farnu yn ôl a adferodd y camau y gwasanaeth, tra caiff erthygl ailosod cyfrinair ei barnu yn ôl a roddodd y defnyddiwr y gorau i gysylltu â'r ddesg. Cofnodwch ef yn eich cofrestr (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

**2. Dechreuwch gyda chyfradd cysylltu a pherthnasedd, nid cyfrifon erthyglau.** Mae cyfradd cysylltu yn dangos a yw gwybodaeth yn mynd i eiliad y datrysiad o gwbl. Parwch hi o'r dechrau â sampl fisol fach lle mae person yn darllen 20 neu 30 o achosion cysylltiedig ac yn barnu a oedd yr erthygl yn ffitio. Mae cyfradd cysylltu o 70 y cant gyda hanner y cysylltiadau'n amherthnasol yn waeth na chyfradd cysylltu o 40 y cant gyda chysylltiadau gonest, oherwydd bod y cyntaf yn cuddio'r bwlch gwybodaeth y mae'r ail yn ei ddatgelu.

**3. Gwahanwch "nid oes erthygl yn bodoli" oddi wrth "mae erthygl yn bodoli ond ni ddaethpwyd o hyd iddi".** Pan fo achos yn cau heb gyswllt, mae'r rhesymau'n wahanol ac felly hefyd yr atebion. Ychwanegwch ddewis cau byr, megis "nid oedd erthygl yn bodoli" a "ni ddaethpwyd o hyd i'r erthygl", ac adroddwch hwy fel cyfrannau o achosion heb eu cysylltu. Mae'r cyntaf yn pwyntio at gynnwys i'w ysgrifennu; mae'r ail yn pwyntio at chwilio, enwi a strwythur. Cadwch y dewis yn ddewisol lle byddai'n arafu'r ddesg, a samplwch yn lle hynny.

### Cipiwch wybodaeth wrth i waith orffen

**4. Gwnewch gipio yn rhan o'r diffiniad o orffen.** Mewn tîm ystwyth, nid yw eitem waith sy'n newid sut mae gwasanaeth yn ymddwyn wedi'i gorffen nes bod y llawlyfr gweithredu, y cofnod gwall hysbys, neu'r erthygl gymorth wedi'i diweddaru. Yn y ddesg gwasanaeth, nid yw achos a oedd angen darganfod wedi'i ddatrys nes bod y darganfyddiad wedi'i gipio neu erthygl bresennol wedi'i gwella. Dyma syniad KCS o weithio yn y ddolen datrys, ac mae'n cadw cost ysgrifennu'n isel oherwydd bod y cyd-destun yn ffres gan y person sy'n ysgrifennu.

**5. Caniatewch gyflwr drafft ysgafn.** Mae llawer o dimau'n colli gwybodaeth am fod yn rhaid i bob erthygl basio adolygiad trwm cyn y gall unrhyw un ei gweld. Mae arfer yn null KCS yn gwahaniaethu erthygl waith ar y gweill, sy'n weladwy i'r tîm, oddi wrth un wedi'i dilysu, sy'n weladwy i gynulleidfa ehangach. Mesurwch amser i gyhoeddi ar gyfer y ddau gam ar wahân, fel canolrifau a'r 85fed canradd, fel bod adolygiadau araf yn ymddangos fel ciw ac nid fel cwyn amwys (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

**6. Ffafriwch wella i greu.** Mae pentwr cynyddol o erthyglau bron yn ddyblyg yn gwneud chwilio'n waeth a ffresni'n anoddach ei gynnal. Gwyliwch y gymhareb ailddefnyddio ochr yn ochr â'r cyfrif creu, a phan fo creu yn codi tra bo ailddefnyddio'n disgyn, chwiliwch am ddyblygion. Gwnewch uno ac ymddeol yn hawdd ac yn weladwy, a chyfrifwch uno fel cyfraniad cadarnhaol.

### Cadwch wybodaeth yn gyfredol a hawdd dod o hyd iddi

**7. Adolygwch yr erthyglau a ddefnyddir.** Crynhowch ymdrech adolygu lle mae defnydd yn uchel. Trefnwch erthyglau a ddefnyddir yn ôl pa mor aml y cysylltwyd neu y gwelwyd hwy, a gosodwch ffenestr adolygu ar gyfer y grŵp uchaf sy'n fyrrach nag ar gyfer y gynffon hir. Mae erthygl hen nad oes neb yn ei darllen yn costio ychydig; gall erthygl hen sy'n ymddangos mewn traean o ddatrysiadau gamarwain cannoedd o achosion. Adroddwch ffresni ar gyfer y grŵp a ddefnyddir yn drwm fel ei linell ei hun fel nad yw cyfartaledd y gronfa gyfan yn ei guddio.

**8. Trinwch fethiannau chwilio fel eitemau ôl-groniad.** Darllenwch y chwiliadau di-ganlyniad amlaf bob mis a phenderfynwch ar gyfer pob un a ddylid ysgrifennu erthygl, ychwanegu cyfystyr, ailenwi erthygl, neu dderbyn bod y cwestiwn yn perthyn mewn man arall. Mae hyn yn troi metrig yn rhestr fer, bendant y gall y tîm weithio arni. Mae hefyd yn dangos geirfa go iawn, gan nad yw defnyddwyr a dadansoddwyr yn aml yn defnyddio'r geiriau y mae'r catalog gwasanaethau yn eu defnyddio.

**9. Darllenwch y geiriau y tu ôl i'r pleidleisiau.** Mae cyfradd defnyddioldeb yn rhad ac yn swnllyd. Mae cyfraddau ymateb fel arfer yn isel ac yn gwyro tuag at farn gref. Dangoswch y gyfradd ymateb wrth ymyl y gyfradd defnyddioldeb, a darllenwch y sylwadau ysgrifenedig ar yr erthyglau a welir fwyaf mewn adolygiad sefydlog. Mae un sylw megis "nid yw cam 4 yn bodoli mwyach yn y fersiwn newydd" yn werth mwy na mil o bleidleisiau di-label.

**10. Cysylltwch wybodaeth â phroblemau ac ôl-farwolaethau.** Mae digwyddiad sy'n ailadrodd ac a ddatrysir dro ar ôl tro gyda'r un erthygl yn signal ar gyfer rheoli problemau, sy'n chwilio am yr achos sylfaenol a gall ddileu'r angen am yr erthygl (gweler pwnc 4.1, Metrigau rheoli problemau). Mae cofnodion gwallau hysbys a gwersi ôl-farwolaeth yn asedau gwybodaeth â'u cylch bywyd eu hunain (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu, a phwnc 4.6, Dyled dechnegol a gwallau hysbys). Edrychwch ar y deg erthygl sydd wedi'u cysylltu fwyaf bob chwarter a gofynnwch pa rai y dylid eu hymddeol drwy drwsio'r achos.

### Llywodraethwch heb raddio

**11. Adroddwch gyfraniad ar lefel tîm.** Mae ehangder cyfraniad yn dweud wrthych a yw gwaith gwybodaeth yn cael ei rannu neu'n canolbwyntio mewn dau berson. Mae hynny'n risg sy'n werth ei gweld, oherwydd mai dyma'r un patrwm â [ffactor bws](https://en.wikipedia.org/wiki/Bus_factor) o ddau. Rhaid iddo byth droi'n fwrdd arweinwyr awduron, a fyddai'n gwobrwyo nifer y golygiadau ac yn dysgu pobl i hollti erthyglau neu wneud newidiadau dibwys. Os yw crynodiad yn ymddangos, trinwch ef fel sgwrs tîm am amser, cefnogaeth, a chaniatâd i ysgrifennu (gweler pwnc 9.4, Metrigau sgiliau a dysgu).

**12. Ymddeolwch fesurau sy'n peidio â helpu.** Os nad oes neb yn gweithredu ar gyfradd cysylltu, symudwch sylw at berthnasedd neu ffresni'r grŵp a ddefnyddir yn drwm. Logiwch unrhyw newidiadau diffiniad gyda'r rheswm, oherwydd bod fformiwla wedi'i newid yn torri'r llinell duedd (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

Mae pob metrig yn y tabl diffiniadau yn ymddangos yma. Mae metrigau gwybodaeth yn arbennig o agored oherwydd bod y weithred o gysylltu neu adolygu yn glic cyflym, tra bod y gwir werth yn gorwedd yn y cynnwys.

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfradd cysylltu gwybodaeth | Atodi unrhyw erthygl, yn aml un generig neu boblogaidd iawn, i bob achos cyn cau; cysylltu ar ôl y ffaith mewn swmp | Sampl perthnasedd misol o achosion cysylltiedig; cyfran y cysylltiadau sy'n mynd i'r un ychydig o erthyglau; stamp amser y cyswllt yn erbyn stamp amser y datrysiad |
| Cymhareb ailddefnyddio | Creu erthygl newydd ar gyfer pob achos ac yna ei chysylltu ar unwaith fel ei bod yn cyfrif fel ailddefnyddio y tro nesaf; neu byth greu o gwbl fel bod y gymhareb yn edrych yn berffaith | Cyfradd erthyglau dyblyg a geir drwy chwiliad cyfnodol; cyfran yr achosion a gaewyd gyda'r rheswm "nid oedd erthygl yn bodoli" |
| Ffresni erthyglau | Marcio erthyglau fel rhai a adolygwyd heb eu gwirio; ailosod y dyddiad adolygu drwy olygiadau dibwys; cyfrif dim ond yr erthyglau sy'n hawdd eu hadolygu | Sampl o erthyglau a adolygwyd yn ddiweddar wedi'i phrofi yn erbyn y gwasanaeth go iawn; cyfradd defnyddioldeb a sylwadau ysgrifenedig ar yr un erthyglau |
| Cyfradd chwiliadau di-ganlyniad | Ychwanegu erthyglau amwys neu ddal-y-cyfan sy'n cyfateb i unrhyw ymholiad; stwffio geiriau allweddol; eithrio termau chwilio lletchwith o'r log | Clicio drwodd wedi'i ddilyn gan gyswllt ar yr un pwnc o fewn ffenestr fer; cyfradd defnyddioldeb; darllen termau chwilio uchaf â llaw |
| Cyfradd defnyddioldeb | Annog darllenwyr bodlon yn unig i bleidleisio; cuddio'r opsiwn annefnyddiol; pleidleisio o'r tu mewn i'r tîm | Cyfradd ymateb a chymysgedd ymatebwyr wedi'u dangos gyda'r gyfradd; sylwadau ysgrifenedig; cyfradd cysylltu ar ôl darllen yr erthygl |
| Amser i gyhoeddi | Cyhoeddi bonyn tenau i stopio'r cloc; hollti erthygl yn ddarnau; symud drafftiau i gyflwr y mae'r cloc yn ei eithrio | Perthnasedd a defnyddioldeb erthyglau a gyhoeddwyd yn ddiweddar; cyfrif ac oedran drafftiau mewn cyflyrau a eithriwyd |
| Ehangder cyfraniad | Gwneud golygiadau dibwys fel bod pawb yn ymddangos fel cyfrannwr; gofyn i bobl ychwanegu brawddeg i fodloni cwota | Maint a sylwedd golygiadau wedi'u samplu; ailddefnyddio a defnyddioldeb yr erthyglau a gyfrannwyd; dim enwau yn yr adroddiad |

Mae darlleniad iach yn dangos erthyglau cysylltiedig y mae sampl ddynol yn cadarnhau eu bod yn berthnasol, cymhareb ailddefnyddio sy'n codi wrth i'r gronfa aeddfedu, set a ddefnyddir yn drwm o erthyglau gydag adolygiadau gwiriedig diweddar, rhestr fer o fethiannau chwilio y mae'r tîm yn gweithio drwyddi, a chyfraniad wedi'i ledaenu ar draws y tîm. Mae rhai achosion heb erthygl, am eu bod yn wirioneddol newydd, yn arwyddion o gronfa onest, nid un sy'n methu.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Targedu cyfradd cysylltu uchel | Gwthio cipio ac ailddefnyddio i'r drefn ddyddiol; syml i'w ddeall | Gwahodd cysylltiadau diystyr; cuddio bylchau lle nad oes erthygl yn bodoli |
| Samplu am berthnasedd â llaw | Datgelu a yw cysylltiadau'n golygu rhywbeth; adeiladu safonau a rennir | Cymryd amser dadansoddwyr; mae samplau bach yn swnllyd; dibynnu ar farn y samplwr |
| Adolygu popeth ar amserlen sefydlog | Hawdd ei gynllunio a'i archwilio; wedi'i gymhwyso'n gyfartal | Gwario ymdrech ar erthyglau nad oes neb yn eu darllen; esgeuluso'r rhai a ddefnyddir yn drwm |
| Adolygu yn ôl defnydd | Cyfeirio ymdrech at lle mae gwybodaeth anghywir yn brifo fwyaf | Angen data golygon a chysylltiadau dibynadwy; gall erthyglau cynffon hir bydru heb eu gweld |
| Mabwysiadu KCS yn ffurfiol | Rhoi set gydlynol, wedi'i phrofi o arferion a dangosyddion | Angen buddsoddiad parhaus, hyfforddi, a chefnogaeth offer; trwm i dîm bach iawn |
| Sgwrs a phario yn lle erthyglau | Trosglwyddo barn a chyd-destun; gorbenion isel | Ddim yn graddio i sifftiau, gwyliau, a throsiant; mae gwybodaeth yn gadael gyda phobl |

Mesurwch ddigon i weld a yw gwybodaeth yn cael ei defnyddio a'i hymddiried ynddi, a gwariwch yr ymdrech a arbedir ar gynnwys. I dîm bach, mae cyfradd cysylltu gyda sampl perthnasedd fisol a rhestr fer o fethiannau chwilio yn rhaglen gyflawn. I ddesg fawr, dim ond os oes rhywun yn berchen ar yr adolygiad ac yn gweithredu arno y mae'r set lawn yn talu amdani'i hun.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pan wnaethom ddatrys achos anodd ddiwethaf, o ble y daeth y wybodaeth, ac i ble yr aeth wedyn?**
Dewiswch achos diweddar a gymerodd ymdrech go iawn a thraciwch lwybr yr hyn a ddysgwyd. A ddaethpwyd o hyd i erthygl, a ofynnwyd i gydweithiwr, neu a weithiwyd ateb allan o'r dechrau? Gofynnwch a fyddai'r person nesaf â'r un broblem yn dod o hyd i'r ateb mewn llai na phum munud. Dylai'r hwylusydd chwilio am y bwlch rhwng yr hyn y mae'r tîm yn ei wybod a'r hyn y mae'r gronfa wybodaeth yn ei ddal.

**2. Pe baem yn codi ein cyfradd cysylltu i darged a nodwyd fis nesaf, sut y gallem wneud hynny heb helpu neb?**
Gwnewch y rhestr chwarae'r system yn eglur a'i thrin fel mewnbwn dylunio yn hytrach na chyhuddiad. Atebion cyffredin yw cysylltu erthygl generig, cysylltu mewn swmp wrth gau, a dewis yr erthygl fwyaf poblogaidd. Ar gyfer pob ateb, gofynnwch pa reilen warchod yn y tabl fyddai'n ei ddal a pha mor gyflym. Dylai'r hwylusydd adael gydag o leiaf un gwiriad newydd, megis sampl perthnasedd fisol, a pherchennog ar ei gyfer.

**3. Pa bum erthygl yr ydym yn dibynnu fwyaf arnynt, a phryd y gwiriwyd hwy ddiwethaf yn erbyn y gwasanaeth go iawn?**
Edrychwch ar yr erthyglau a gysylltir fwyaf a'r rhai a welir fwyaf a darllenwch ddwy ohonynt yn uchel gyda'i gilydd. Mae'r sgwrs yn aml yn dangos mai'r erthyglau sydd â'r effaith fwyaf yw'r rhai sydd â'r lleiaf o ofal, sef y ddadl dros adolygu yn ôl defnydd.

**4. Beth mae pobl yn chwilio amdano nad oes gennym ni?**
Dewch â'r chwiliadau di-ganlyniad uchaf a'r rhesymau dros achosion heb eu cysylltu. Grwpiwch hwy yn erthyglau i'w hysgrifennu, geiriau i'w hychwanegu, a chwestiynau sy'n perthyn i dîm arall. Dylai'r hwylusydd gipio rhestr fer o'r tair eitem nesaf a chynllunio sut y byddant yn cael eu hysgrifennu yn ystod gwaith arferol, nid mewn prosiect arbennig.

**5. Pwy sy'n ysgrifennu ein gwybodaeth, a beth mae'n ei gostio iddynt wneud hynny?**
Trafodwch gipio'n onest. A welir ysgrifennu fel rhan o'r swydd, neu fel gwaith ychwanegol ar ôl y gwaith? Gofynnwch beth sy'n ei arafu: templed trwm, adolygiad araf, ofn bod yn anghywir, neu ddim amser ar ddiwedd sifft galed. Dylai'r hwylusydd lywio i ffwrdd o fynd ar ôl unigolion a thuag at newidiadau mewn offer, amser a chaniatâd.

**6. Pa un o'n herthyglau y dylem roi'r gorau i fod eu hangen?**
Cymerwch yr erthyglau a ailddefnyddir fwyaf a gofynnwch pa achos sy'n ailadrodd y maent yn gweithio o'i gwmpas. Gallai gweithdrefn ailosod a ddefnyddir 200 gwaith y mis fod yn symptom o ddiffyg yn y cynnyrch, sgrin ddryslyd, neu awtomeiddio coll. Penderfynwch pa eitemau i'w trosglwyddo i reoli problemau neu'r tîm cynnyrch, a pha rai i'w hawtomeiddio (gweler pwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio). Dylai'r hwylusydd nodi mai canlyniad gorau gwaith gwybodaeth da weithiau yw llai o erthyglau.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn creu llawer o'r wybodaeth y bydd ei hangen ar wasanaeth: sut mae nodwedd yn ymddwyn, beth mae gwall newydd yn ei olygu, sut i ddychwelyd. Os na chaiff y wybodaeth honno ei chipio cyn rhyddhau, mae'r ddesg gwasanaeth a'r timau ar alwad yn ei dysgu'r ffordd galed. Cynhwyswch y llawlyfr gweithredu a'r erthygl gymorth yn y diffiniad o orffen, a gwyliwch gyfradd cysylltu a methiannau chwilio ar gyfer y gwasanaethau yr ydych yn berchen arnynt fel adborth. Pan gysylltir yr un erthygl sawl gwaith, trinwch hi fel adroddiad diffyg ar y cynnyrch, nid fel llwyddiant dogfennaeth.

### Timau gwasanaeth a gweithrediadau

Timau'r ddesg gwasanaeth a gweithrediadau yw prif gynhyrchwyr a defnyddwyr y gronfa wybodaeth, felly eu metrigau nhw yw'r rhain i'w defnyddio'n bennaf. Gweithiwch y ddolen datrys yn onest: chwiliwch yn gyntaf, ailddefnyddiwch a gwellwch, crëwch pan na fydd dim yn ffitio. Defnyddiwch gyfradd cysylltu gyda sampl perthnasedd, a darllenwch chwiliadau di-ganlyniad fel ôl-groniad. Osgowch unrhyw dabl cynghrair o awduron neu olygyddion, gan fod y gronfa wybodaeth yn offeryn a rennir ac mae cyfrifon personol yn ei niweidio (gweler pwnc 3.1, Metrigau desg gwasanaeth).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn penderfynu a yw gwaith gwybodaeth yn cael amser, felly maent yn penderfynu ansawdd y wybodaeth. Gofynnwch am y sampl perthnasedd a ffresni'r erthyglau a ddefnyddir yn drwm cyn gofyn am gyfrif erthyglau. Gwrthsefwch dargedau ar gyfradd cysylltu neu greu erthyglau heb reilen warchod, a disgwyliwch glywed pan fo'r rhifau'n disgyn am resymau da, megis set o ddyblygion wedi'i huno. Ariennir yr adolygiad o erthyglau defnydd uchel a'r atgyweiriadau sy'n gwneud erthyglau'n ddiangen.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn cwrdd â gwybodaeth drwy chwilio, porth, chatbot, neu'r ateb y mae dadansoddwr yn ei roi iddynt. Yr hyn y maent yn sylwi arno yw a yw'r ateb cyntaf yn gywir ac a oes rhaid iddynt ailadrodd eu hunain. Eu hadborth eu hunain ar erthyglau, eu chwiliadau sy'n dod i fyny'n wag, a'u cysylltiadau dro ar ôl tro yw'r rheiliau gwarchod gorau ar gyfer popeth yn y pwnc hwn. Os gofynnir i ddefnyddwyr raddio erthyglau, dywedwch wrthynt beth sy'n digwydd i'r adborth, a gweithredwch arno'n weladwy (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae cwmni yswiriant o faint canolig yn rhedeg desg gwasanaeth TG fewnol o tua dwsin o ddadansoddwyr, yn cefnogi staff ar draws sawl swyddfa. Mae'r ddesg yn rhannu cronfa wybodaeth â dau dîm cynnyrch sy'n berchen ar y rhaglen hawliadau a'r porth dogfennau. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r arweinyddiaeth wedi gofyn am well datrysiad ar y cyswllt cyntaf (gweler pwnc 3.1, Metrigau desg gwasanaeth) ac yn gosod targed ar gyfer cyfradd cysylltu gwybodaeth o 60 y cant, i fyny o 38 y cant enghreifftiol. O fewn chwe wythnos mae'r dangosfwrdd yn dangos 64 y cant. Nid yw arweinydd y ddesg gwasanaeth wedi'i argyhoeddi, oherwydd bod dadansoddwyr yn dal i gwyno na allant ddod o hyd i atebion, ac mae arweinydd tîm cynnyrch yn sôn bod tair o'r erthyglau y mae hi'n berchen arnynt yn ymddangos ar y rhan fwyaf o achosion caeedig.

Mae'r tîm yn rhedeg adolygiad chwarae'r system a sampl perthnasedd. Maent yn darllen 30 o achosion cysylltiedig, a ddewiswyd ar hap o'r mis blaenorol, ac yn barnu a oedd yr erthygl yn ffitio'r achos. Mewn cyfrif enghreifftiol, mae 11 o'r 30 cyswllt i erthygl generig "Sut i logio tocyn" neu i drosolwg rhwydwaith cyffredinol nad oedd yn mynd i'r afael â'r broblem. Maent hefyd yn canfod bod y cysylltiadau wedi'u gwneud o fewn ychydig eiliadau i gau'r achos, patrwm sy'n awgrymu arfer ac nid defnydd. Mae arweinydd y ddesg yn edrych ar y gymhareb ailddefnyddio, sydd wedi codi, ac ar gyfran yr achosion heb eu cysylltu gyda'r rheswm "nid oedd erthygl yn bodoli", sydd wedi gostwng i bron ddim, oherwydd bod dadansoddwyr bellach yn dewis yr erthygl agosaf. Mae'r bwlch yn y wybodaeth wedi dod yn anweledig.

Mae'r tîm yn gwneud tri phenderfyniad. Yn gyntaf, tynnir y targed cyfradd cysylltu yn ôl a'i ddisodli gan olwg wedi'i haddasu ar gyfer perthnasedd: adroddir cyfradd cysylltu wrth ymyl cyfran y cysylltiadau perthnasol a samplwyd, a gwneir y rheswm cau "nid oedd erthygl yn bodoli" yn hawdd i'w ddewis ac ni chaiff ei drin fel methiant. Yn ail, darllenir y chwiliadau di-ganlyniad bob mis, a'r pump uchaf yw'r tasgau ysgrifennu nesaf, wedi'u rhannu ar draws y ddesg. Yn drydydd, adolygir yr 20 erthygl sydd wedi'u cysylltu fwyaf am ffresni o fewn mis, dan berchnogaeth y tîm cynnyrch perthnasol, a throsglwyddir unrhyw erthygl sydd wedi'i chysylltu â mwy na chwarter o achosion un gwasanaeth i reoli problemau fel ymgeisydd ar gyfer atgyweiriad parhaol (gweler pwnc 4.1, Metrigau rheoli problemau).

Ddau fis yn ddiweddarach mae'r gyfradd cysylltu pennawd wedi disgyn yn ôl i 51 y cant enghreifftiol, sy'n teimlo fel newyddion drwg. Mae'r perthnasedd a samplwyd wedi codi o 63 y cant i 85 y cant mewn termau enghreifftiol, mae'r gyfradd chwiliadau di-ganlyniad wedi disgyn, ac mae problem mewngofnodi sy'n ailadrodd gyda'r porth dogfennau wedi'i thrwsio wrth ei hachos, a ymddeolodd dair erthygl. Mae'r arweinydd yn gofyn i'r arweinyddiaeth farnu'r rhaglen yn ôl perthnasedd a datrysiadau dros dro a ymddeolwyd, nid yn ôl y gyfradd cysylltu crai.

## Y golwg fesul sector

**Busnes newydd.** Mae gwybodaeth yn byw mewn ychydig o bennau ac yn hanes sgwrs. Ysgrifennwch restr fer o lawlyfrau gweithredu ar gyfer yr hyn sy'n torri yn y nos, a chofnodwch y datrysiad ar ôl pob digwyddiad. Mae gwiriad misol bod y llawlyfrau uchaf yn dal i weithio yn ddigon o fesur.

**Busnes bach.** Mae un person yn aml yn ddesg gwasanaeth, yn weinyddwr, ac yn berchennog y wybodaeth. Y risg yw'r ffactor bws, gan fod y wybodaeth yn diflannu os bydd y person yn diflannu. Defnyddiwch ystorfa a rennir syml, cadwch erthyglau'n fyr, a gadewch i gontractwr neu gydweithiwr brofi'r gweithdrefnau allweddol. Mae darlleniad rheolaidd o'r tudalennau a ddefnyddir fwyaf yn well nag unrhyw ddangosfwrdd.

**Menter fawr.** Mae graddfa yn dod ag erthyglau dyblyg ac ansawdd anwastad. Defnyddiwch ddiffiniadau cyffredin ar gyfer cyfradd cysylltu, ffresni ac ailddefnyddio, adroddwch yn ôl gwasanaeth ac yn ôl tîm, a phenodwch berchnogion ar gyfer yr erthyglau defnydd uchel. Osgowch gymharu timau, oherwydd bod cymysgedd gwasanaethau ac oedran y gronfa yn wahanol.

**Llywodraeth a'r sector cyhoeddus.** Gall rheolau cofnodion, gofynion hygyrchedd, a disgwyliadau archwilio lywodraethu sut y caiff gwybodaeth ei storio, ei hadolygu, a'i hymddeol. Trinwch y rhain fel mewnbynnau dylunio: cadwch lwybr cymeradwyo ar gyfer erthyglau sy'n effeithio ar ddinasyddion, a chyhoeddwch gynnwys hygyrch. Mae adborth a methiannau chwilio gan ddinasyddion yn arbennig o werthfawr (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae costau metrigau gwybodaeth yn gymedrol. Fel arfer mae data'r offeryn eisoes yn bodoli ym mhlatfform ITSM a'r gronfa wybodaeth. Y prif gostau yw'r amser i ddiffinio'r mesurau, y sampl fisol fach sy'n gwirio perthnasedd, yr amser adolygu ar gyfer erthyglau defnydd uchel, a'r ddisgyblaeth i gipio gwybodaeth wrth ddatrys problemau. Os nad oes gan y platfform gwybodaeth ddata cysylltiadau neu chwilio defnyddiadwy, dylid cynnwys cost ei offeryniaethu (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

Patrwm yw'r elw, ac nid yw'r llyfr yn dyfynnu ffigur ar ei gyfer. Pan fo dadansoddwyr yn dod o hyd i erthygl gywir yn gyflym, mae datrysiad yn gyflymach ac yn fwy cyson, mae staff newydd yn dod yn ddefnyddiol yn gynt, ac mae peirianwyr ar alwad yn dibynnu llai ar ychydig o arbenigwyr. Pan fo defnyddwyr yn dod o hyd i atebion eu hunain, mae'r ddesg yn cael llai o gysylltiadau dro ar ôl tro am gwestiynau hysbys. Mae'r metrigau'n helpu drwy ddangos ble mae gwybodaeth ar goll, yn hen, neu heb ei defnyddio, fel bod amser ysgrifennu prin yn mynd i'r erthyglau sy'n bwysig.

Mae cyfanswm cost perchnogaeth yn cynnwys cynnal a chadw. Mae erthyglau'n dadfeilio wrth i wasanaethau newid, felly mae amser adolygu yn gost barhaus, a bydd rhaglen sy'n ei hanwybyddu yn gorbwysleisio'r budd. I amcangyfrif yr elw ar gyfer eich tîm eich hun, cymharwch sampl o'ch achosion eich hun cyn ac ar ôl, a labelwch eich rhagdybiaethau.

## Gwrthbatrymau a maglau

- **Cyfrif erthyglau neu olygon fel llwyddiant.** Mae cyfaint yn codi gydag anhrefn a gall golygon ddynodi dryswch. Mesurwch ddefnydd wrth ddatrys, perthnasedd ac adborth yn lle hynny.
- **Targed cyfradd cysylltu heb wiriad perthnasedd.** Bydd pobl yn atodi unrhyw erthygl. Samplwch achosion cysylltiedig yn fisol ac adroddwch y gyfran berthnasol wrth ymyl y gyfradd.
- **Graddio awduron neu olygyddion.** Mae cyfrifon personol yn cynhyrchu golygiadau tenau a hollti erthyglau. Adroddwch ehangder cyfraniad ar gyfer y tîm a'i drafod fel cwestiwn capasiti.
- **Adolygu pob erthygl ar un amserlen sefydlog.** Mae ymdrech yn mynd i dudalennau nad oes neb yn eu darllen. Adolygwch yn ôl defnydd ac ymddeolwch yr hyn na ddefnyddir.
- **Cyhoeddi bonion i stopio'r cloc.** Mae erthygl gyflym, denau yn trechu amser i gyhoeddi. Parwch hi â defnyddioldeb a'r gyfradd cysylltu dilynol.
- **Anwybyddu chwiliadau sy'n methu.** Chwiliadau a fethodd yw'r signal cliriaf o angen heb ei ddiwallu. Darllenwch hwy bob mis a throwch yr eitemau uchaf yn waith.
- **Gwahanu gwybodaeth oddi wrth y gwaith.** Mae prosiect dogfennu ar ddiwedd y chwarter yn cynhyrchu tudalennau hen. Cipiwch yn ystod datrys ac yn y diffiniad o orffen.
- **Trin y gronfa wybodaeth fel un barhaol.** Mae cynnwys yn dadfeilio. Gwnewch ymddeol ac uno yn arferol ac yn cael ei gredydu.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Cipio a chysylltu | Mae gwybodaeth yn byw mewn pennau a sgwrs; cysylltiadau'n brin | Mae rhai timau'n cysylltu erthyglau ag achosion, mae arfer yn amrywio | Un rheol ysgrifenedig ar gyfer cysylltu a chipio; rhesymau cau wedi'u cofnodi | Cyfradd cysylltu a sampl perthnasedd wedi'u hadolygu'n fisol ac wedi'u clymu â gwelliant | Mae cipio'n rhan o'r llif gwaith ar draws y ddesg, gweithrediadau a thimau cynnyrch; diffiniadau wedi'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Ffresni a pherchnogaeth | Dim perchnogion; mae erthyglau'n heneiddio heb eu gweld | Perchnogion wedi'u henwi ar gyfer gwasanaethau allweddol | Ffenestri adolygu wedi'u gosod, gyda ffenestri byrrach ar gyfer erthyglau a ddefnyddir yn drwm | Ffresni erthyglau defnydd uchel wedi'i dueddu a'i ariannu | Cyfrifoldeb adolygu wedi'i rannu â chyflenwyr a thimau cynnyrch; mae ymddeol yn arferol |
| Dod o hyd iddi ac adborth | Chwilio ad hoc; dim data chwilio | Mae log chwilio'n bodoli ond nid yw'n cael ei ddarllen | Chwiliadau di-ganlyniad ac adborth darllenwyr wedi'u hadolygu ar amserlen sefydlog | Mae methiannau chwilio yn gyrru ôl-groniad ac wedi'u paru â data cysylltiadau | Mae defnyddwyr, dadansoddwyr a chatbots yn tynnu ar un ffynhonnell wybodaeth; mae adborth yn newid cynnwys yn weladwy |
| Defnydd mewn gwelliant | Cyfrifon yw'r metrigau, os oes rhai | Cyfrifon wedi'u dangos i'r tîm | Metrigau wedi'u paru â rheiliau gwarchod ac wedi'u dangos i'r tîm yn gyntaf | Mae erthyglau a gysylltir yn drwm yn bwydo penderfyniadau rheoli problemau ac awtomeiddio | Rheolir ôl-groniadau gwybodaeth, problemau a chynnyrch gyda'i gilydd ar draws timau |

## Rhestr wirio

- [ ] Mae pob metrig gwybodaeth yn enwi'r gynulleidfa y mae'n ei gwasanaethu a'r penderfyniad y mae'n ei hysbysu.
- [ ] Mae gan gyfradd cysylltu ddiffiniad ysgrifenedig, gan gynnwys y cloc, yr eithriadau, a thriniaeth digwyddiadau mawr.
- [ ] Mae sampl fisol yn gwirio bod erthyglau cysylltiedig yn berthnasol i'r achosion.
- [ ] Mae cau achos yn cofnodi "nid oedd erthygl yn bodoli" a "ni ddaethpwyd o hyd i'r erthygl" fel rhesymau gwahanol.
- [ ] Adroddir amser i gyhoeddi fel canolrif a chanradd uchel, gyda'r camau drafft a chyhoeddedig wedi'u gwahanu.
- [ ] Gosodir ffenestr adolygu ar gyfer erthyglau a ddefnyddir, yn fyrrach ar gyfer y rhai a ddefnyddir fwyaf.
- [ ] Darllenir y chwiliadau di-ganlyniad uchaf bob mis a'u troi'n eitemau ôl-groniad.
- [ ] Dangosir adborth darllenwyr gyda'i gyfradd ymateb, a darllenir sylwadau ar y prif erthyglau.
- [ ] Adroddir cyfraniad ar gyfer y tîm yn unig, heb restrau a enwir.
- [ ] Adolygir yr erthyglau a gysylltir fwyaf bob chwarter fel ymgeiswyr ar gyfer atgyweiriadau parhaol.
- [ ] Logir newidiadau diffiniad gyda rhesymau.

## Anogwyr AI

**Gwiriwch a yw erthyglau cysylltiedig yn ffitio eu hachosion.**

```text
Rwy'n cynnal adolygiadau gwybodaeth ar gyfer [enw'r tîm], sy'n cefnogi [math o
wasanaeth]. Isod mae [nifer] o achosion a ddatryswyd, pob un gyda'i grynodeb,
nodiadau datrys, a theitl a thestun yr erthygl gysylltiedig. Ar gyfer pob pâr,
barnwch a yw'r erthygl yn ffitio'r achos fel ateb perthnasol, ateb rhannol, neu
gyswllt amherthnasol, a rhowch reswm un llinell. Adroddwch batrymau yn ôl
erthygl ac yn ôl gwasanaeth. Peidiwch ag enwi na graddio dadansoddwyr unigol.
Peidiwch â dyfeisio ffeithiau am y gwasanaeth. Rhestrwch eich rhagdybiaethau ac
unrhyw beth na allech ei farnu o'r testun.

[gludwch achosion ac erthyglau gyda data personol wedi'i dynnu]
```

**Trowch chwiliadau a fethodd yn ôl-groniad ysgrifennu.**

```text
Dyma'r chwiliadau amlaf yn [enw'r gronfa wybodaeth neu'r porth] a ddychwelodd
ddim canlyniadau yn [cyfnod]: [rhestr o dermau chwilio gyda chyfrifon]. Grwpiwch
hwy yn themâu. Ar gyfer pob thema, awgrymwch a oes angen erthygl newydd, cyfystyr
neu ailenwi erthygl bresennol ([rhestr o deitlau erthyglau cysylltiedig]), cyswllt
â thîm arall, neu ddim gweithredu. Peidiwch â dyfeisio erthyglau na ffeithiau am
ein systemau. Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb cyn
ysgrifennu unrhyw beth.
```

**Dyluniwch set ysgafn o fesurau gwybodaeth.**

```text
Dyluniwch set fach o fesurau rheoli gwybodaeth ar gyfer [enw'r tîm], tîm o
[maint tîm] sy'n defnyddio [offeryn ITSM] a [offeryn gwybodaeth]. Ein prif nod
yw [nod, megis datrysiad cyswllt cyntaf cyflymach neu lai o ddibyniaeth ar
arbenigwyr]. Ar gyfer pob mesur rhowch y diffiniad, y cloc neu'r ffin, y
ffynhonnell data, y ffordd debygol o chwarae'r system, a rheilen warchod.
Peidiwch â chynnig graddio unigolion, dyfeisio gwerthoedd meincnod, na dyfynnu
ffynonellau. Rhestrwch eich rhagdybiaethau a'r meysydd data y byddai eu hangen
arnoch na soniais amdanynt.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau cysylltiedig a'r rheilen warchod pâr pan ychwanegwch fetrig gwybodaeth at eich dangosfwrdd.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod metrig gwybodaeth yn cario ei ffordd o chwarae'r system, ei reilen warchod, a'i groesgyfeiriadau yn y ffurf gywir.

## Pwyntiau allweddol

- Mesurwch wybodaeth ar eiliad y defnydd: wedi'i chysylltu wrth ddatrys, wedi'i chanfod gan chwiliad, wedi'i chadarnhau gan ddarllenwyr.
- Parwch gyfradd cysylltu â sampl perthnasedd dynol, oherwydd bod cyswllt ond yn profi bod rhywun wedi clicio.
- Adolygwch ffresni yn ôl defnydd, gan roi'r ymdrech lle byddai erthygl anghywir yn camarwain y nifer fwyaf o achosion.
- Trinwch chwiliadau a fethodd ac erthyglau a gysylltir yn drwm fel signalau ar gyfer cynnwys newydd, enwi gwell, neu atgyweiriad parhaol.
- Adroddwch gyfraniad ar gyfer y tîm a pheidiwch byth â graddio awduron.
- Mae llai o erthyglau, o ansawdd gwell, yn aml yn dynodi cronfa iachach nag un fwy.

## Cyfeiriadau a darllen pellach

1. Consortium for Service Innovation, *KCS v6 Practices Guide*, first released 2016 and updated since, https://library.serviceinnovation.org/KCS/KCS_v6/KCS_v6_Practices_Guide (check the page for the current version).
2. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
3. Nonaka, I., and Takeuchi, H., *The Knowledge-Creating Company*, Oxford University Press, 1995.
4. Hansen, M. T., Nohria, N., and Tierney, T., "What's your strategy for managing knowledge?", *Harvard Business Review*, March-April 1999.
5. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
6. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
7. Wikipedia, [Knowledge management](https://en.wikipedia.org/wiki/Knowledge_management).
8. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
9. Wikipedia, [Knowledge base](https://en.wikipedia.org/wiki/Knowledge_base).
10. Wikipedia, [Runbook](https://en.wikipedia.org/wiki/Runbook).
11. Wikipedia, [Tacit knowledge](https://en.wikipedia.org/wiki/Tacit_knowledge).
12. Wikipedia, [Knowledge-centered support](https://en.wikipedia.org/wiki/Knowledge-centered_support).
13. Wikipedia, [Service desk](https://en.wikipedia.org/wiki/Service_desk).
14. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
