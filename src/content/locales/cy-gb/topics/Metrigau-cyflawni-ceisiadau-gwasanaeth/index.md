# Metrigau cyflawni ceisiadau gwasanaeth

**Mesurwch pa mor hir y mae ceisiadau rheolaidd yn ei gymryd o safbwynt y defnyddiwr, faint o'r amser hwnnw yw aros, pa eitemau catalog sy'n gyrru galw, a faint o'r gwaith sydd wedi'i awtomeiddio, yna defnyddiwch y darlun i ailddylunio'r ceisiadau cyffredin yn lle gwthio'r bobl sy'n eu trin.**

## Crynodeb a chymhelliant

Mae **cais gwasanaeth** yn gais rheolaidd gan ddefnyddiwr am rywbeth y cynlluniwyd gwasanaeth i'w ddarparu: cyfrif, mynediad i ffolder, gliniadur, trwydded meddalwedd, darn o wybodaeth. Mae'n wahanol i **ddigwyddiad**, sef tarfu anghynlluniedig ar wasanaeth (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau), ac i **newid**, sy'n addasu gwasanaeth ac sydd angen barn newydd am risg (gweler pwnc 4.3, Metrigau galluogi newid). Yn [ITIL](https://en.wikipedia.org/wiki/ITIL) 4 mae'r gwaith wedi'i gwmpasu gan yr arfer rheoli ceisiadau gwasanaeth, ac fel arfer disgrifir y gwaith fel **model cais** ailadroddadwy: y wybodaeth sydd ei hangen, y cymeradwyaethau, y camau, a'r amser disgwyliedig. Mae ITIL yn sillafu'r gair "fulfilment" yn Saesneg Prydeinig; mae corff y pwnc hwn yn cadw at ymadroddion Cymraeg, gan ddefnyddio "cyflawni" a "cyflawniad".

Mae ceisiadau'n bwysig ar gyfer metrigau am eu bod yn alw rhagweladwy. Mae digwyddiad yn syndod; mae cais am liniadur ar gyfer dechreuwr newydd yn cyrraedd bob mis ac yn dilyn yr un camau. Y rhagweladwyedd hwnnw sy'n gwneud ceisiadau yr ymgeisydd gorau ar gyfer dylunio, safoni, ac [awtomeiddio prosesau](https://en.wikipedia.org/wiki/Process_automation). Mae hefyd yn golygu bod oedi anaml yn cael ei achosi gan anhawster. Fe'i hachosir gan giwiau, cymeradwyaethau a throsglwyddiadau, felly'r cwestiwn defnyddiol yw ble mae'r cais yn aros, nid pa mor gyflym y mae unrhyw un yn teipio.

Yr uned ddadansoddi yw'r **eitem catalog**: un peth a enwir y gall defnyddiwr ofyn amdano yn y [catalog gwasanaethau](https://en.wikipedia.org/wiki/Service_catalog). Mae mesurau fesul eitem yn llawer mwy defnyddiol nag un rhif cymysg, oherwydd bod gan gais i ailosod cyfrinair a chais i adeiladu gweinydd wahanol glociau, gwahanol berchnogion, a gwahanol dargedau rhesymol. Mae cyfartaledd cymysg yn cuddio'r ddau.

Mae'r golygon ystwyth ac ITIL yn cwrdd yma gydag ychydig o ffrithiant. Mae ITIL yn gofyn a yw'r gwasanaeth yn cyflwyno'r canlyniad y cytunwyd arno o fewn yr amser y cytunwyd arno. Mae arfer llif ystwyth yn gofyn pa mor hir y mae gwaith yn ei gymryd i lifo o gais i orffen, faint sy'n eistedd mewn ciwiau, a faint o waith sydd ar y gweill ar unwaith. Eitem waith yn symud drwy lif gwaith yw cais, felly mae offer mesur llif, megis amser cylch ac oedran eitem waith, yn berthnasol yn uniongyrchol (gweler pwnc 2.1, Mesurau llif). Mae'r geirfa'n wahanol. Mae'r rhifyddeg yr un peth.

Mae tri thymor yn codi dro ar ôl tro. **Amser cyflawni** yw'r amser a aeth heibio o'r foment y mae'r defnyddiwr yn cyflwyno'r cais i'r foment y mae'r defnyddiwr yn cadarnhau, neu y mae'r system yn cofnodi, bod y peth wedi'i ddarparu. **Amser ymarferol** yw'r amser y mae rhywun yn gweithio ar y cais yn weithredol, a **amser aros** yw popeth arall, gan gynnwys cymeradwyaethau ac aros am y defnyddiwr. Y gwahaniaeth rhyngddynt yw'r hyn y dylai model cais ei grebachu. **Cyfran awtomeiddio** yw'r gyfran o geisiadau a gyflawnir heb i berson eu cyffwrdd ar ôl eu cyflwyno.

Mae mesurau amser angen gofal. Mae amseroedd cyflawni yn wyrgam: mae'r rhan fwyaf o geisiadau'n gorffen yn gyflym ac mae ychydig yn cymryd amser hir iawn. Mae'r ychydig yn tynnu cymedr o gwmpas, felly adroddwch y canolrif a [chanradd](https://en.wikipedia.org/wiki/Percentile) uchel megis yr 85fed neu'r 95fed (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Dylid datgan targedau y cytunwyd arnynt gyda chwsmeriaid, megis y rhai mewn [cytundeb lefel gwasanaeth (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement), yn yr un ffordd: mae "85 y cant o geisiadau gliniadur wedi'u cyflawni o fewn 5 diwrnod gwaith" yn dweud mwy na "cyfartaledd 3 diwrnod".

Yn olaf, rhybudd o seicoleg mesur. Pan fo tîm yn cael ei farnu ar gau ceisiadau'n gyflym, y ffordd rataf o wella'r rhif yw newid yr hyn sy'n cyfrif fel wedi'i gau, neu oedi'r cloc. Mae [cyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol yn llawn (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Felly mae pob metrig isod wedi'i baru â rheilen warchod, ac nid yw'r un ohonynt yn disgrifio asiant unigol.

## Egwyddorion allweddol

- **Mesurwch fesul eitem catalog.** Mae gan bob eitem ei model cais, perchennog a tharged rhesymol ei hun, felly mae rhifau cymysg yn camarwain.
- **Dechreuwch y cloc pan fo'r defnyddiwr yn gofyn a'i stopio pan fo gan y defnyddiwr y peth.** Mae cerrig milltir mewnol yn ddiagnosteg ddefnyddiol, ond nid ydynt yn brofiad y cwsmer.
- **Gwahanwch amser aros oddi wrth amser ymarferol.** Mae'r bwlch rhyngddynt yn dangos ble mae ailddylunio'n talu ffordd, ac anaml y mae yn y gwaith ei hun.
- **Adroddwch ddosbarthiadau, nid cyfartaleddau.** Mae canolrif a 95fed canradd yn disgrifio'r hyn y mae defnyddwyr yn byw drwyddo.
- **Trinwch alw fel signal.** Mae cyfaint fesul eitem yn dangos beth sydd ei angen ar ddefnyddwyr, beth sy'n ddryslyd, a beth sy'n haeddu awtomeiddio neu hunanwasanaeth.
- **Awtomeiddiwch yr hyn sy'n sefydlog ac yn aml yn gyntaf.** Canlyniad dylunio ceisiadau da yw cyfran awtomeiddio, nid nod i'w erlid er ei fwyn ei hun.
- **Mesurwch y tîm a'r gwasanaeth, byth y person.** Mae ceisiadau'n llifo drwy systemau, ac mae amrywiad rhwng asiantau yn adlewyrchu'n bennaf y cymysgedd o waith.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Amser cyflawni cais | Yr amser a aeth heibio i ddarparu cais, wedi'i ddangos fel canolrif a 95fed canradd fesul eitem catalog | mae'r cloc yn dechrau pan fo'r defnyddiwr yn cyflwyno'r cais, yn stopio pan fo'r defnyddiwr yn cadarnhau darpariaeth neu pan gofnodir y ddarpariaeth; eithrir ceisiadau a ganslwyd gan y defnyddiwr; adroddir amser yn aros am y defnyddiwr ar wahân, heb ei dynnu | diwrnodau gwaith neu oriau | Hanes ceisiadau offeryn ITSM | Rheoli ceisiadau gwasanaeth | Amser cylch ar fwrdd y tîm (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif) | Wythnosol, wedi'i dueddu'n fisol |
| Cyflawni o fewn y targed | Cyfran y ceisiadau a ddarparwyd o fewn y targed y cytunwyd arno ar gyfer eu heitem catalog | ceisiadau a gyflawnwyd o fewn y targed / ceisiadau a gyflawnwyd yn y cyfnod; cloc fel uchod, eithrir eitemau sy'n dal ar agor a'u cyfrif yn lle hynny yn oedran yr ôl-groniad | canran | Hanes ceisiadau offeryn ITSM; tabl targedau eitemau catalog | Rheoli lefelau gwasanaeth | Disgwyliad lefel gwasanaeth | Misol |
| Ôl-groniad ac oedran ceisiadau | Nifer y ceisiadau agored a pha mor hen yw'r hynaf, fesul eitem catalog | ceisiadau agored ar ddiwedd y cyfnod (cyfrif); oedran pob cais agored = dyddiad yr adroddiad llai dyddiad cyflwyno; adroddwch y cyfrif, yr oedran canolrifol, a'r oedran hynaf | cyfrif a diwrnodau | Ciw ceisiadau agored offeryn ITSM | Rheoli ceisiadau gwasanaeth | Gwaith ar y gweill ac eitemau gwaith sy'n heneiddio (gweler pwnc 2.3, Gwaith ar y gweill a chiwio) | Wythnosol |
| Amser aros am gymeradwyaeth | Yr amser y mae cais yn ei dreulio yn aros am gymeradwyaeth | mae'r cloc yn dechrau pan ofynnir am gymeradwyaeth, yn stopio pan gaiff ei rhoi neu ei gwrthod; eithrir ceisiadau heb gam cymeradwyo | oriau | Log cymeradwyo offeryn ITSM | Rheoli ceisiadau gwasanaeth; galluogi newid | Amser wedi'i rwystro neu golofn "aros" ar y bwrdd | Misol |
| Cyfaint ceisiadau fesul eitem catalog | Nifer y ceisiadau a gyflwynwyd ar gyfer pob eitem, gyda'i chyfran o'r holl geisiadau | ceisiadau a gyflwynwyd fesul eitem yn y cyfnod; eithrir ceisiadau a ail-gyflwynwyd fel dyblygion, os caiff eu nodi; adroddwch y cyfrif a'r gyfran o'r cyfanswm | cyfrif a chanran | Cofnodion ceisiadau offeryn ITSM | Rheoli catalog gwasanaethau | Dadansoddi galw ar gyfer siapio'r ôl-groniad | Misol |
| Cyfran awtomeiddio | Y gyfran o geisiadau a gyflawnir heb gam â llaw ar ôl eu cyflwyno | ceisiadau a gyflawnwyd o'r dechrau i'r diwedd gan awtomeiddio / ceisiadau a gyflawnwyd yn y cyfnod; cyfrifir cais y mae person wedi'i gyffwrdd ar gyfer unrhyw gam cyflawni fel un â llaw; nid yw cymeradwyaethau gan berson yn cyfrif fel camau cyflawni â llaw os yw'r polisi yn eu gofyn | canran | Cofnodion cyflawni offeryn ITSM a logiau'r platfform awtomeiddio | Rheoli ceisiadau gwasanaeth; awtomeiddio o fewn y gadwyn gwerth gwasanaeth | Awtomeiddio yn y diffiniad o orffen | Misol |
| Cyfradd ailagor ceisiadau | Cyfran y ceisiadau a gyflawnwyd y mae'r defnyddiwr yn eu hailagor neu'n eu hail-godi am fod y canlyniad yn anghywir neu'n anghyflawn | ceisiadau a ailagorwyd neu a ail-godwyd ar gyfer yr un eitem gan yr un defnyddiwr o fewn 7 diwrnod i'w cyflawni / ceisiadau a gyflawnwyd yn y cyfnod; mae'r ffenestr 7 diwrnod yn enghraifft y mae'r tîm yn ei hysgrifennu | canran | Hanes ceisiadau offeryn ITSM | Rheoli ceisiadau gwasanaeth | Cyfradd ailwaith; dianc diffygion | Misol |

Mae amser cyflawni yn cyfrif amser gwaith yn unig os yw'r tîm wedi cytuno ar galendr a'i gofnodi; fel arall defnyddiwch oriau a aeth heibio a dywedwch hynny. Mae'r metrig ôl-groniad yn cario tri rhif yn fwriadol, oherwydd nad yw cyfrif ar ei ben ei hun yn dweud dim am aros. Mae diffiniad cyfran awtomeiddio yn gadael cymeradwyaethau dynol allan o'r cyfrif "â llaw" am fod llawer o gymeradwyaethau yn benderfyniad polisi, nid cost cyflawni; mesurir amser aros am gymeradwyaeth ar wahân fel bod yr oedi'n parhau'n weladwy.

## Argymhellion

### Diffiniwch y clociau a'r uned

**1. Mesurwch fesul eitem catalog, a chyhoeddwch restr yr eitemau.** Dechreuwch gyda'r deg eitem uchaf yn ôl cyfaint, sydd fel arfer yn cwmpasu cyfran fawr o geisiadau, ac ychwanegwch eitemau wrth i'r data ganiatáu. Rhowch berchennog, targed a nodwyd, a diffiniad un llinell o "wedi'i ddarparu" i bob eitem. Y rhestr eitemau yw'r enwadur ar gyfer popeth arall, felly cadwch hi yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

**2. Ysgrifennwch ddechrau a stop y cloc ar gyfer pob eitem.** Ar gyfer y rhan fwyaf o eitemau mae'r cloc yn dechrau wrth gyflwyno ac yn stopio pan all y defnyddiwr ddefnyddio'r hyn y gofynnodd amdano, nid pan gaeir tocyn. Mae gliniadur wedi'i ddarparu pan fo yn nwylo'r defnyddiwr, nid pan archebir y negesydd.

**3. Penderfynwch unwaith sut y caiff aros am y defnyddiwr ei drin.** Mae rhai ceisiadau'n sefyll yn eu hunfan am nad yw'r defnyddiwr wedi ateb cwestiwn. Mae oedi'r cloc ar gyfer hynny yn rhesymol, ond hefyd y lifer hawsaf i'w cham-drin. Cofnodwch yr oedi fel cyflwr ar wahân gyda rheswm, adroddwch amser wedi'i oedi fel ei rif ei hun, ac adolygwch y gyfradd oedi fesul eitem (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

### Adroddwch yr hyn y mae defnyddwyr yn ei brofi

**4. Dangoswch y canolrif a'r 95fed canradd, gyda chyfrif.** Rhowch y ddau ar un siart fesul eitem, gyda nifer y ceisiadau y tu ôl i bob pwynt. Mae canolrif o ddau ddiwrnod gyda 95fed canradd o ugain yn dweud wrthych fod y rhan fwyaf o ddefnyddwyr yn cael gwasanaeth da a bod cynffon angen ymchwiliad, rhywbeth y mae cyfartaledd o bedwar diwrnod yn ei guddio. Pan fo'r cyfrif yn fach, dywedwch hynny a dangoswch y ceisiadau unigol yn lle canradd.

**5. Gwnewch oedran yn weladwy ar gyfer ceisiadau agored.** Dim ond ar ôl i gais orffen y gwyddys amser cyflawni, felly mae'n llusgo. Mae rhestr o'r ceisiadau agored hynaf fesul eitem, wedi'i threfnu yn ôl oedran, yn dweud wrth dîm ble i edrych heddiw. Yn nhermau llif, dyma oedran eitem waith yn erbyn amser cylch arferol yr eitem, a dyma'r olwg fwyaf gweithredadwy y gall ciw ceisiadau ei chael.

**6. Rhannwch yr amser a aeth heibio yn amser ymarferol, cymeradwyo, ac aros am y defnyddiwr.** Cymerwch sampl o geisiadau a gyflawnwyd ar gyfer un eitem a thorrwch bob un i lawr yn yr amser a dreuliwyd ym mhob cyflwr. Mae'r rhan fwyaf o dimau'n canfod bod gwaith gweithredol yn gyfran fach o'r amser a aeth heibio. Mae'r canfyddiad yn symud y sgwrs wella o "gweithio'n gyflymach" i "dileu'r ciw rhwng camau", sef y syniad craidd yn yr astudiaeth o giwiau a llif (gweler pwnc 2.3, Gwaith ar y gweill a chiwio).

### Defnyddiwch alw i siapio'r gwasanaeth

**7. Darllenwch gyfaint fesul eitem fel neges gan ddefnyddwyr.** Gall cyfaint cynyddol ar gyfer un eitem olygu angen cynyddol, cynnyrch dryslyd, neu fethiant mewn man arall, megis proses doredig sy'n anfon pobl yn ôl i ofyn eto. Gall eitem â chyfaint isel iawn fod yn ymgeisydd i'w hymddeol o'r catalog. Cymharwch gyfaint â data mabwysiadu (gweler pwnc 6.3, Metrigau mabwysiadu gwasanaeth a chatalog).

**8. Graddiwch ymgeiswyr awtomeiddio yn ôl cyfaint, sefydlogrwydd ac amser ymarferol.** Yr ymgeiswyr cyntaf gorau yw'r rhai cyfaint uchel, anaml yn amrywio, ac sy'n cario amser ymarferol amlwg. Dechreuwch gyda'r eitem y mae ei chamau eisoes yn union yr un fath bob tro, megis mynediad i grŵp safonol, ac awtomeiddiwch y camau cyn cyffwrdd â'r eithriadau. Olrheiniwch y gyfran awtomeiddio fesul eitem fel bod cynnydd yn weladwy, ac anfonwch gwestiynau hunanwasanaeth ac ailgyfeirio i'w pwnc eu hunain (gweler pwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio).

**9. Ailddylunio cymeradwyaethau cyn ychwanegu pobl.** Mae aros am gymeradwyaeth yn aml yn dominyddu'r amser a aeth heibio. Gofynnwch ar gyfer pob cymeradwyaeth a yw'r polisi yn ei gofyn, a fyddai cais safonol wedi'i gymeradwyo ymlaen llaw yn ddigon, ac a all y cymeradwywr fod yn rôl gyda dirprwy yn hytrach nag un person. Mae cymeradwyo ymlaen llaw geisiadau risg isel, a ddeellir yn dda, yn adlewyrchu'r syniad o newidiadau safonol wrth alluogi newid, ac mae'n dileu ciwiau heb ddileu rheolaeth.

### Cadwch y rhifau'n onest

**10. Parwch gyflymder ag ansawdd bob tro.** Adroddwch amser cyflawni wrth ymyl y gyfradd ailagor a signal bodlonrwydd defnyddwyr ar gyfer yr un eitem (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid). Mae cais cyflymach sy'n dod yn ôl wedi'i ailagor yn arafach nag y mae'n edrych. Os yw cyflymder yn gwella a bod y gyfradd ailagor yn codi gydag ef, trinwch y cynnydd cyflymder fel un heb ei brofi.

**11. Cadwch geisiadau, digwyddiadau a newidiadau ar wahân yn y data.** Mae eu cymysgu yn ystumio'r tri. Digwyddiad yw ailosod cyfrinair sydd mewn gwirionedd yn symptom o wasanaeth mewngofnodi diffygiol, a newid yw cais i newid sut mae gwasanaeth yn gweithio. Dosbarthwch wrth dderbyn gyda rheol fer, samplwch eitemau a gamddosbarthwyd bob chwarter, a chymharwch gyfeintiau ceisiadau a digwyddiadau ochr yn ochr (gweler pwnc 3.1, Metrigau desg gwasanaeth).

**12. Adolygwch dabl yr eitemau gyda'r tîm sy'n gwneud y gwaith.** Cyfarfod yn fisol am dri deg munud o amgylch y tabl fesul eitem: cyfaint, canolrif a 95fed canradd, y cais agored hynaf, cyfran awtomeiddio, cyfradd ailagor. Dewiswch un eitem ac un newid i'w drio, ac edrychwch ar yr un tabl fis nesaf i weld beth ddigwyddodd.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Amser cyflawni cais | Oedi'r cloc am "aros am y defnyddiwr" pa un a yw'r defnyddiwr yn achos ai peidio; cau ceisiadau cyn eu darparu a'u hailagor fel rhai newydd; hollti un cais yn sawl un bach | Cyfran amser wedi'i oedi fesul eitem, gydag archwiliad sampl o resymau oedi; cyfradd ailagor; cadarnhad defnyddiwr o ddarpariaeth cyn cau |
| Cyflawni o fewn y targed | Ailddiffinio'r targed i fod yn haws; cyfrif dim ond ceisiadau sy'n gorffen ac anwybyddu'r rhai agored hen; dewis eitemau cyflym yn ddetholus ar gyfer y set darged | Oedran ôl-groniad ar gyfer ceisiadau agored; newidiadau i dargedau wedi'u logio yn y gofrestr metrigau gyda rheswm; mae'r set darged yn cwmpasu pob eitem yn ôl cyfaint |
| Ôl-groniad ac oedran ceisiadau | Cau hen geisiadau fel "dim ymateb" neu "hen"; symud ceisiadau i giw neu gategori gwahanol fel eu bod yn gadael y ciw a gyfrifir | Cyfrif ceisiadau a gaewyd heb eu darparu, yn ôl rheswm; trosglwyddiadau categori a chiw wedi'u hadolygu yn y cyfarfod misol |
| Amser aros am gymeradwyaeth | Cymeradwywyr yn cymeradwyo heb ddarllen i gadw eu hamser yn isel; ceisiwyr yn mynd ar ôl cymeradwywyr y tu allan i'r system fel bod yr aros a logiwyd yn fyr | Adolygiad sampl o geisiadau a gymeradwywyd yn erbyn polisi; cyfradd ailagor ac eithriadau diogelwch ar gyfer eitemau a gymeradwywyd; nifer y camau cymeradwyo fesul eitem |
| Cyfaint ceisiadau fesul eitem catalog | Lleihau cyfaint drwy wneud y catalog yn anoddach dod o hyd iddo neu drwy ddigalonni ceisiadau; ail-ddosbarthu ceisiadau fel digwyddiadau neu fel "ymholiadau cyffredinol" | Bodlonrwydd defnyddwyr ar gyfer y catalog; cyfran y cysylltiadau a ddosbarthwyd fel "arall"; data mabwysiadu ar gyfer y gwasanaeth (gweler pwnc 6.3, Metrigau mabwysiadu gwasanaeth a chatalog) |
| Cyfran awtomeiddio | Awtomeiddio'r eitemau dibwys i godi'r ganran; cyfrif cais sgriptiedig y mae person yn dal i'w wirio â llaw fel un wedi'i awtomeiddio; cuddio camau â llaw mewn tocyn ar wahân | Cyfran wedi'i phwysoli yn ôl cyfaint a chan amser ymarferol a ddilëwyd; awtomeiddio a fethodd a chyfradd dychwelyd i â llaw; sampl o geisiadau "awtomataidd" wedi'u holrhain o'r dechrau i'r diwedd |
| Cyfradd ailagor ceisiadau | Digalonni ailagor drwy ei wneud yn anodd; dweud wrth ddefnyddwyr am agor cais newydd, sy'n ailosod y cownter | Ceisiadau dro ar ôl tro gan yr un defnyddiwr am yr un eitem o fewn y ffenestr; bodlonrwydd defnyddwyr fesul eitem; ailagor wedi'i ganiatáu o'r hysbysiad |

Dyma sut mae darlleniad iach yn edrych. Mae'r canolrif a'r 95fed canradd yn disgyn gyda'i gilydd, neu mae'r 95fed canradd yn disgyn tra bo'r canolrif yn dal. Nid yw'r cais agored hynaf lawer hŷn na 95fed canradd y rhai a gyflawnwyd. Mae'r gyfradd ailagor a bodlonrwydd yn aros yn wastad neu'n gwella tra bo cyflymder yn gwella. Mae cyfran awtomeiddio yn codi ar yr eitemau sy'n bwysig yn ôl cyfaint, ac mae cyfaint ei hun yn newid am resymau y gall y tîm eu hesbonio. Os yw un rhif yn gwella'n sydyn tra bo ei reilen warchod yn drifftio'r ffordd arall, ewch i edrych ar y ceisiadau sydd y tu ôl iddo.

## Cyfaddawdau: manteision ac anfanteision

| Dewis | Manteision | Anfanteision |
| --- | --- | --- |
| Mesur fesul eitem | Mae targedau'n ffitio'r gwaith; yn dangos ble mae ailddylunio'n talu ffordd | Mwy o ddata i'w gynnal; ychydig o bwyntiau data sydd gan eitemau bach |
| Canolrif a 95fed canradd yn lle'r cymedr | Disgrifio'r hyn y mae defnyddwyr yn byw drwyddo; gwrthsefyll allanolion | Anoddach ei esbonio i weithredwyr sy'n gyfarwydd ag un rhif; ansefydlog ar gyfer eitemau cyfaint isel |
| Oedi'r cloc wrth aros am y defnyddiwr | Teg i'r tîm pan fo'r defnyddiwr yn achosi'r oedi | Hawdd ei gam-drin; cuddio effaith ffurflenni aneglur a chyfathrebu gwael |
| Cyfrif cyfran awtomeiddio | Gwneud cynnydd awtomeiddio yn weladwy a'i glymu â chost | Gwobrwyo awtomeiddio hawdd; dweud dim am ansawdd oni bai ei fod wedi'i baru â chyfradd methu |
| Mesur o gyflwyno'r defnyddiwr i gadarnhad y defnyddiwr | Cyfateb profiad y cwsmer | Dibynnu ar gadarnhad defnyddiwr, sydd yn aml ar goll; angen rheol ddiofyn |
| Gwahanu ceisiadau oddi wrth ddigwyddiadau yn llym | Data glanach a thargedau gwell | Gofyn disgyblaeth wrth dderbyn a dadleuon am achosion ar y ffin |

Y cyfaddawd canolog yw rhwng rhif glân a rhif teg. Mae cloc llym nad yw byth yn oedi yn syml ac yn anodd ei chwarae, ond mae'n cosbi'r tîm pan fo'r defnyddiwr yn araf. Mae cloc hyblyg yn decach ond yn gofyn archwiliad. Mae'r rhan fwyaf o dimau'n gwneud yn dda i ddechrau'n llym, ychwanegu un cyflwr oedi penodol gyda rheswm, ac adrodd y gyfran sydd wedi'i oedi yn agored.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa dair eitem catalog sy'n achosi'r mwyaf o aros i'n defnyddwyr, a sut ydym ni'n gwybod?**
Dewch â'r tabl fesul eitem o gyfaint, canolrif, ac amser cyflawni 95fed canradd. Gofynnwch i'r grŵp ddewis eitemau yn ôl cyfanswm yr aros (cyfaint wedi'i luosi ag aros nodweddiadol), nid yn ôl pa mor annifyr y maent yn teimlo. Cymharwch yr ateb ag ymateb cyntaf pobl. Dylai'r hwylusydd nodi ble mae data ac ymateb cyntaf yn wahanol.

**2. Pryd mae ein cloc yn dechrau ac yn stopio, ac a fyddai defnyddiwr yn cytuno?**
Dewiswch un eitem gyffredin a cherddwch ei thaith fel y mae'r defnyddiwr yn ei gweld, o'r clic cyntaf i'r foment y gallant ddefnyddio'r canlyniad. Marciwch ble mae statws ein tocyn yn dweud "wedi'i wneud" a ble y byddai'r defnyddiwr yn dweud "wedi'i wneud". Mae unrhyw fwlch rhwng y ddau yn aros anweledig. Cytunwch ar un newid i'r digwyddiad stopio, ac ysgrifennwch ef yn y gofrestr metrigau.

**3. Faint o'n hamser a aeth heibio sy'n bobl yn gweithio, a faint sy'n aros?**
Samplwch ddeg cais a gyflawnwyd ar gyfer un eitem a rhannwch bob un yn amser ymarferol, cymeradwyo, ac aros am y defnyddiwr. Dangoswch y canlyniad fel bar wedi'i bentyrru. Gofynnwch beth fyddai'n rhaid bod yn wir i'r aros haneru. Mae'r cwestiwn hwn fel arfer yn symud yr ystafell o "mae angen mwy o staff arnom" i "mae angen llai o drosglwyddiadau arnom".

**4. Pa gymeradwyaethau y gellid eu disodli gan reol a gytunwyd ymlaen llaw?**
Rhestrwch y cymeradwyaethau ar gyfer yr eitemau uchaf a'r rheswm polisi dros bob un. Lle nad oes neb yn cofio'r gwrthodiad diwethaf, gall y gymeradwyaeth fod yn ddefod.

**5. Pe baem yn awtomeiddio'r eitem catalog nesaf, a fyddai'r rhif yn codi am y rheswm cywir?**
Trafodwch sut y gall cyfran awtomeiddio godi drwy eitemau hawdd neu gyfaint isel tra bo defnyddwyr yn gweld dim gwahaniaeth. Gofynnwch beth fyddai'r tîm yn ei fesur i gadarnhau bod awtomeiddio wedi helpu: amser ymarferol a ddilëwyd, cyfradd methu, cyfradd ailagor, a bodlonrwydd. Penderfynwch pa eitem i'w hawtomeiddio nesaf gan ddefnyddio cyfaint ac amser ymarferol, nid hawsrwydd yn unig.

**6. Beth fyddem ni'n ei wneud pe bai rhif ar y dudalen hon yn gwaethygu, a phwy fyddai'n cael y bai?**
Rhedwch yr arbrawf meddwl yn agored. Gofynnwch beth fyddai'r tîm yn cael ei demtio i'w newid yn y data cyn newid y gwasanaeth. Cytunwch mai ymateb cyntaf i rif sy'n gwaethygu yw edrych ar y ceisiadau sydd y tu ôl iddo.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cynnyrch yn cynhyrchu ceisiadau am eu gwasanaethau eu hunain: mynediad i amgylcheddau, piblinellau newydd, data prawf, allweddi trwydded. Mae amseroedd cyflawni hir ar gyfer y rhain yn ymddangos fel gwaith segur yn llif eu tîm eu hunain, felly mae'r mesur yn perthyn ar eu bwrdd fel cyflwr wedi'i rwystro. Dylai timau sy'n berchen ar wasanaeth gyhoeddi eu heitemau a'u targedau cais eu hunain, a thrin ceisiadau dro ar ôl tro fel ymgeiswyr ôl-groniad (gweler pwnc 2.6, Metrigau ôl-groniad a mireinio). Lle mae cais mewn gwirionedd yn gallu platfform coll, y galw dro ar ôl tro yw'r achos dros ei adeiladu.

### Timau gwasanaeth a gweithrediadau

I'r bobl sy'n cyflawni ceisiadau, mae'r tabl fesul eitem yn fap o ble mae ymdrech yn mynd. Maent yn gwybod pa gamau sy'n cael eu gwneud â llaw, pa gymeradwyaethau sy'n atal, a pha ffurflenni sy'n cynhyrchu mewnbwn amwys. Dylent fod yn berchen ar y modelau cais, yr ôl-groniad awtomeiddio, a'r adolygiad misol, a dylent fod y gynulleidfa gyntaf ar gyfer y data. Mae'r rhifau'n disgrifio'r ciw a'r broses, felly gwnewch yn eglur nad oes neb yn cael ei raddio a bod amrywiad rhwng pobl yn adlewyrchu'n bennaf y cymysgedd o geisiadau y maent yn eu codi.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr angen golwg fer: canolrif a 95fed canradd ar gyfer y prif eitemau, y gyfran a gyflawnwyd o fewn y targed, y ceisiadau agored hynaf, a'r duedd mewn cyfran awtomeiddio a chost fesul cais (gweler pwnc 7.5, Cost gwasanaeth ac economeg uned). Tasg llywodraethu yw gofyn beth newidiodd, nid pwy sy'n araf. Mae arweinwyr hefyd yn cymeradwyo ochr polisi cymeradwyaethau, felly mae ganddynt y lifer sy'n lleihau aros fwyaf.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn poeni am dri pheth: pa mor hir, pa mor rhagweladwy, a faint o ymdrech. Anaml y maent yn poeni am gyflyrau mewnol. Dangoswch darged plaen iddynt fesul eitem ("gliniaduron mewn pum diwrnod gwaith"), dywedwch wrthynt ble mae eu cais, a gofynnwch iddynt gadarnhau darpariaeth. Casglwch signal bodlonrwydd un cwestiwn wrth gau a darllenwch y sylwadau.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG prifysgol ranbarthol (sefydliad ffuglennol) yn rhedeg desg gwasanaeth a thîm platfform bach. Mae'r rhifau isod yn enghreifftiol, nid o unrhyw sefydliad go iawn.

Yn yr adolygiad misol mae'r tîm yn edrych ar y tabl fesul eitem. Ar draws pob cais, yr amser cyflawni cyfartalog yw 3.1 diwrnod gwaith, sy'n edrych yn dderbyniol ac prin y mae wedi symud mewn blwyddyn. Fesul eitem, mae'r darlun yn wahanol. Mae gan "Mynediad i yriant a rennir" ganolrif o 0.4 diwrnod a 95fed canradd o 2 ddiwrnod. Mae gan "Trwydded meddalwedd adrannol" ganolrif o 2 ddiwrnod a 95fed canradd o 11 diwrnod. Mae gan "Gliniadur dechreuwr newydd" ganolrif o 6 diwrnod a 95fed canradd o 15 diwrnod. Y tair eitem uchaf yn ôl cyfaint yw mynediad i yriant a rennir, ceisiadau trwydded, a gliniaduron dechreuwyr newydd, ar gyfrannau enghreifftiol o 32, 21 a 9 y cant o'r holl geisiadau.

Mae'r tîm yn samplu deg cais gliniadur ac yn rhannu'r amser. Canlyniad enghreifftiol: tua 0.5 diwrnod o waith ymarferol, 2.5 diwrnod yn aros am gymeradwyaeth rheolwr llinell, 1.5 diwrnod yn aros am gadarnhad stoc, a'r gweddill mewn ciw negesydd. Yr aros am gymeradwyaeth yw'r darn mwyaf.

Mae'r penderfyniad yn dilyn o'r data. Mae'r tîm yn cynnig, gyda pherchennog cyllid a pherchennog diogelwch, y dylid cymeradwyo gliniaduron yn y catalog safonol ymlaen llaw pan fo adnoddau dynol yn cadarnhau rôl y dechreuwr newydd, gyda'r rheolwr yn cael ei hysbysu yn lle gofynnir iddo. Maent hefyd yn cysylltu'r gwiriad stoc â'r system stocrestr. Maent yn gosod yr arbrawf am un chwarter ac yn cytuno ar yr hyn a fyddai'n cyfrif fel llwyddiant: mae'r 95fed canradd ar gyfer gliniaduron yn disgyn, ac mae'r gyfradd ailagor a'r sgôr bodlonrwydd yn aros yn wastad.

Mae risg chwarae'r system yn ymddangos yn yr ail fis. Mae'r canolrif ar gyfer trwyddedau yn gostwng yn sydyn, o 2 ddiwrnod i lai nag 1. Mae'r adolygiad yn sylwi bod cyfran amser wedi'i oedi "aros am y defnyddiwr" ar gyfer yr eitem wedi neidio o 5 y cant enghreifftiol i 40 y cant, ac mae'r gyfradd ailagor wedi codi. Mae sampl yn dangos bod asiantau wedi bod yn oedi ceisiadau gyda neges generig y foment yr oedd trwydded angen unrhyw wiriad, a stopiodd y cloc. Nid yw'r tîm yn beio'r asiantau. Maent yn gweld bod y targed wedi gwneud oedi yn ddeniadol a bod y maes rheswm oedi yn destun rhydd. Maent yn newid y rheswm oedi i restr fer, yn mynnu cwestiwn penodol i'r defnyddiwr, ac yn ychwanegu cyfran amser wedi'i oedi fel colofn sefydlog wrth ymyl y canolrif. Mae canolrif y drwydded yn dychwelyd yn agos at ei lefel gynharach, mae'r gyfradd ailagor yn disgyn, ac mae'r tîm yn defnyddio'r amser trafod a arbedwyd i ailddylunio'r ffurflen drwydded, a oedd yn cynhyrchu'r ceisiadau aneglur.

Ar ôl y chwarter (enghreifftiol), mae'r 95fed canradd ar gyfer gliniaduron yn disgyn o 15 i 9 diwrnod ac mae cyfran awtomeiddio ar gyfer mynediad i yriant a rennir yn cyrraedd 70 y cant. Mae'r tîm yn logio'r ddau newid ac yn dewis y ffurflen drwydded fel yr arbrawf nesaf.

## Y golwg fesul sector

**Busnes newydd.** Ychydig o fathau o gais sydd gan fusnes newydd a dim catalog ffurfiol, ac mae'r un bobl yn trin ceisiadau ac yn adeiladu'r cynnyrch. Mesurwch y tri neu bedwar cais sy'n rhwystro ymunwyr newydd, megis cyfrifon ac offer, ac olrheiniwch y cais agored hynaf. Awtomeiddiwch gyflwyno'n gynnar, oherwydd bod pob cyflogai yn ei ailadrodd.

**Busnes bach.** Mae busnes bach yn aml yn dibynnu ar un person TG neu ddarparwr allanol. Defnyddiwch fwrdd a rennir syml gyda cholofn ar gyfer pob cyflwr ac olrheiniwch oedran a chyfaint ceisiadau yn ôl math. Gofynnwch i'r darparwr am y cyfaint misol fesul eitem a'r cais agored hynaf.

**Menter fawr.** Mae gan fenter gannoedd o eitemau catalog, llawer o grwpiau cyflawni, a chymeradwyaethau haenog. Canolbwyntiwch ar yr eitemau uchaf yn ôl cyfaint ac ar yr eitemau sy'n aros hiraf yn ôl cyfanswm aros. Safonwch ddiffiniad y cloc ar draws grwpiau cyflawni cyn eu cymharu, ac adroddwch drosglwyddiadau traws-grŵp ar wahân (gweler pwnc 9.3, Metrigau cydweithio a throsglwyddo). Mae amseroedd cyflawni cyflenwyr yn perthyn yn yr un olwg, wedi'u mesur o gais y cwsmer, nid o dderbyniad y cyflenwr.

**Llywodraeth a'r sector cyhoeddus.** Mae cyrff cyhoeddus yn ychwanegu cymeradwyaethau gorfodol, rheolau caffael, a rhwymedigaethau cofnodion, felly mae rhywfaint o amser aros yn bolisi a dylid ei labelu felly yn hytrach na'i gyfrif fel oedi i'w ddileu. Cyhoeddwch dargedau fesul eitem mewn iaith blaen lle mae ymrwymiadau gwasanaeth yn gyhoeddus. Adroddwch mewn ffordd y gall rheoleiddiwr neu gorff goruchwylio ei hatgynhyrchu, gyda'r diffiniadau wedi'u hysgrifennu.

## Yr achos busnes: cymhellion, ROI a TCO

Mae ceisiadau'n gyfran fawr ac ailadroddus o'r gwaith sy'n cyrraedd desg gwasanaeth, felly mae hyd yn oed ailddylunio cymedrol yn cael effaith eang. Y prif gymhellion yw arosiadau byrrach a mwy rhagweladwy i ddefnyddwyr, llai o ymdrech drin fesul cais, llai o gysylltiadau dro ar ôl tro, a chapasiti wedi'i ryddhau ar gyfer gwaith problemau a gwella.

Mae ochr y gost yn bennaf yn un-waith a chymedrol. Mae diffinio'r eitemau catalog, cytuno ar y clociau, a sicrhau bod yr offeryn yn cofnodi'r cyflyrau angenrheidiol yn ychydig ddyddiau o waith fesul grŵp, ynghyd ag ychydig o ymdrech barhaus i gadw'r biblinell yn gywir (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth). Mae gan awtomeiddio ei gost adeiladu a chynnal ei hun, sy'n cynnwys monitro'r awtomeiddiadau, trin methiannau, a'u diweddaru pan fo'r systemau targed yn newid. Cyfrifwch hynny yng nghyfanswm cost perchnogaeth y tu hwnt i'r drwydded neu amser adeiladu.

Dylid amcangyfrif yr elw o'ch data eich hun ac nid o feincnod cyffredinol. Ar gyfer un eitem, lluoswch gyfaint misol â'r amser ymarferol a arbedwyd ac â chost lwythog yr amser, yna tynnwch gost adeiladu a rhedeg y newid. Ychwanegwch werth yr amser aros a ddilëwyd i ddefnyddwyr, gan ddefnyddio dull y gallwch ei amddiffyn, a'i ddangos ar wahân oherwydd ei fod yn amcangyfrif o fath gwahanol. Nid yw unrhyw ffigur yn y pwnc hwn yn feincnod, ac mae'r rhifau enghreifftiol yn enghreifftiol. Cysylltwch yr achos busnes â chost uned fesul cais lle mae'r data cyllid yn bodoli (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Un cyfartaledd cymysg ar gyfer pob cais.** Mae'n cuddio'r buddugoliaethau cyflym a'r gynffon hir. Adroddwch fesul eitem, gyda chanolrif a 95fed canradd.
- **Cau'r tocyn a'i alw'n wedi'i ddarparu.** Efallai nad oes gan y defnyddiwr ddim o hyd. Diffiniwch ddarpariaeth o ochr y defnyddiwr a gofynnwch am gadarnhad.
- **Cyflyrau oedi testun rhydd.** Mae statws "aros" heb reswm yn gadael i'r cloc gael ei stopio am unrhyw achos. Defnyddiwch restr fer o resymau ac adroddwch y gyfran sydd wedi'i oedi.
- **Cyfrif awtomeiddio yn ôl nifer eitemau.** Gall deg eitem brin awtomataidd godi'r ganran heb helpu neb. Pwyswch yn ôl cyfaint ac amser ymarferol.
- **Graddio asiantau yn ôl ceisiadau a gaewyd.** Mae'n gwobrwyo dewis tocynnau hawdd yn ddetholus ac yn cosbi pobl sy'n cymryd rhai caled. Adroddwch ar lefel tîm ac eitem yn unig.
- **Cuddio galw i edrych yn effeithlon.** Mae gwneud y catalog yn anodd ei ddefnyddio yn gostwng cyfaint ac yn codi rhwystredigaeth. Parwch gyfaint â data bodlonrwydd a mabwysiadu.
- **Trin cymeradwyaethau fel rhai na ellir cyffwrdd â hwy.** Yn aml cymeradwyaethau yw'r oedi mwyaf a anaml y cânt eu hadolygu. Gofynnwch beth mae pob un yn ei warchod ac a all rheol wneud y gwaith.
- **Cymysgu ceisiadau â digwyddiadau.** Mae'n ystumio'r ddwy set o rifau. Dosbarthwch wrth dderbyn a samplwch y dosbarthiad.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a chlociau | Cyfrifir ceisiadau fel tocynnau; diwedd y cloc yw beth bynnag y mae "wedi'i gau" yn ei olygu | Mae rhai timau'n diffinio dechrau a stop fesul eitem; mae diffiniadau'n wahanol | Un diffiniad cloc ysgrifenedig fesul eitem catalog, wedi'i rannu ar draws timau | Diffiniadau wedi'u hadolygu yn ôl amserlen a newidiadau wedi'u logio gyda rhesymau | Mae diffiniadau'n dilyn golwg y cwsmer ar draws cyflenwyr ac yn cael eu diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Data ac adrodd | Cyfrifon wedi'u tynnu â llaw o'r offeryn | Adroddiadau ar gyfer rhai eitemau o'r offeryn ITSM; amseroedd cymedrig | Canolrif a 95fed canradd fesul eitem o un ffynhonnell data | Tueddiadau, oedran ôl-groniad, a chyfran amser wedi'i oedi wedi'u hadolygu gyda'u rheiliau gwarchod | Data cyflawni o dimau mewnol a chyflenwyr wedi'i gyfuno a'i gysylltu â chanlyniadau defnyddwyr |
| Galw ac awtomeiddio | Ceisiadau'n cael eu trin fesul un; dim golwg ar alw dro ar ôl tro | Eitemau uchaf wedi'u nodi'n anffurfiol; ychydig o sgriptiau | Modelau cais wedi'u dogfennu ar gyfer yr eitemau uchaf; ôl-groniad awtomeiddio wedi'i raddio yn ôl cyfaint ac amser ymarferol | Cyfran awtomeiddio a chyfradd methu wedi'u holrhain; cymeradwyaethau wedi'u hailddylunio ar sail tystiolaeth | Galw, hunanwasanaeth ac awtomeiddio wedi'u cynllunio gyda'i gilydd ar draws y sefydliad ac wedi'u haddasu'n barhaus |
| Defnydd mewn gwelliant | Rhifau'n cael eu hadrodd i fyny, heb eu defnyddio | Atgyweiriadau achlysurol ar ôl cwynion | Adolygiad misol gan y tîm sy'n gwneud y gwaith | Gwelliannau wedi'u hariannu ynghlwm â chanlyniadau fesul eitem | Mae syniadau gwella'n cyrraedd o dimau, defnyddwyr a chyflenwyr, ac mae canlyniadau'n bwydo'n ôl i ddylunio'r catalog |

## Rhestr wirio

- [ ] Mae gan bob eitem catalog dan sylw berchennog, diffiniad un llinell o "wedi'i ddarparu", a tharged a nodwyd.
- [ ] Mae digwyddiadau dechrau a stop y cloc cyflawni wedi'u hysgrifennu ar gyfer pob eitem.
- [ ] Mae aros am y defnyddiwr yn gyflwr ar wahân gyda rhestr fer o resymau, ac adroddir amser wedi'i oedi.
- [ ] Mae adroddiadau'n dangos y canolrif a'r 95fed canradd fesul eitem, gyda nifer y ceisiadau y tu ôl i bob un.
- [ ] Mae'r ceisiadau agored hynaf yn weladwy i'r tîm bob wythnos.
- [ ] Samplwyd amser ymarferol, cymeradwyo ac aros ar gyfer yr eitemau uchaf.
- [ ] Adolygir cyfaint fesul eitem yn fisol a'i gymharu â data mabwysiadu neu fodlonrwydd.
- [ ] Mae cyfran awtomeiddio wedi'i phwysoli yn ôl cyfaint ac wedi'i pharu â chyfraddau methu a dychwelyd.
- [ ] Mae pob metrig cyflymder wedi'i baru â'r gyfradd ailagor a signal bodlonrwydd defnyddwyr.
- [ ] Dosberthir ceisiadau, digwyddiadau a newidiadau wrth dderbyn, a samplir y dosbarthiad.
- [ ] Nid oes unrhyw adroddiad yn graddio asiantau unigol.

## Anogwyr AI

**Drafftiwch fodel cais a diffiniad cloc ar gyfer un eitem catalog.**

```text
Rwy'n diffinio'r mesuriad ar gyfer yr eitem catalog hon: [enw'r eitem catalog].
Y camau heddiw yw [rhestrwch gamau a phwy sy'n gwneud pob un], y cymeradwyaethau
yw [rhestr cymeradwyaethau], a'n hoffeyn yw [offeryn ITSM]. Drafftiwch fodel
cais gyda'r wybodaeth sydd ei hangen, digwyddiadau dechrau a stop y cloc
cyflawni, y cyflyrau lle gall y cloc oedi a'r rhesymau a ganiateir, a rhestr o
stampiau amser y mae angen i'r offeryn eu cofnodi. Peidiwch â dyfeisio gwerthoedd
meincnod na nodweddion offeryn. Rhestrwch eich rhagdybiaethau a'r cwestiynau y
dylwn eu hateb i orffen y diffiniad.
```

**Rhannwch yr amser a aeth heibio yn amser ymarferol ac aros.**

```text
Dyma sampl o [nifer] o geisiadau a gyflawnwyd ar gyfer [eitem catalog] gydag
amseroedd newid cyflwr: [gludwch hanes cyflwr dienw, dim enwau]. Cyfrifwch, ar
gyfer pob cais ac ar gyfer y sampl, yr amser ymarferol, aros am gymeradwyaeth,
ac amser yn aros am y defnyddiwr, a dangoswch y canolrif a'r amrediad. Nodwch
pa gyflwr sy'n dal yr amser mwyaf a pha gwestiynau y dylwn eu gofyn i'r tîm
amdano. Peidiwch â dod i gasgliadau am achosion heb dystiolaeth, a pheidiwch â
chymharu unigolion. Rhestrwch eich rhagdybiaethau.
```

**Graddiwch ymgeiswyr awtomeiddio.**

```text
Dyma dabl o eitemau catalog gyda chyfaint misol, amser ymarferol canolrifol,
amrywiad mewn camau, a'r systemau y mae pob un yn eu cyffwrdd: [gludwch dabl].
Awgrymwch ffordd i raddio ymgeiswyr awtomeiddio gan ddefnyddio cyfaint,
sefydlogrwydd ac amser ymarferol, ac esboniwch y graddio ar gyfer yr [nifer]
eitem uchaf. Nodwch eitemau lle gallai awtomeiddio greu risg diogelwch neu
ansawdd, a rhestrwch yr hyn y dylwn ei wirio gyda [rôl perchennog rheolaeth] yn
gyntaf. Peidiwch â dyfeisio ffigurau arbedion na gwerthoedd meincnod.
Rhestrwch eich rhagdybiaethau.
```

**Adolygwch ddangosfwrdd cyflawni am risg chwarae'r system.**

```text
Dyma ein dangosfwrdd cyflawni ceisiadau: [disgrifiwch fetrigau, diffiniadau,
a thargedau]. Ar gyfer pob metrig, rhestrwch sut y gellid ei chwarae neu ei
gamddarllen, yr arwydd gweladwy yn y data, a metrig neu arfer rheilen warchod
pâr. Gwiriwch nad oes dim yn graddio unigolion, ac awgrymwch newidiadau geiriad
sy'n lleihau pwysau ar y tîm. Peidiwch â dyfeisio trothwyon; gofynnwch i mi am
unrhyw rai y mae eu hangen arnoch. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r diffiniad, y ffordd o chwarae'r system, a'r rheilen warchod ar gyfer metrig cais, a'r pynciau cyfagos sy'n paru ag ef.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod golygiadau i'r pwnc hwn yn cadw'r templed, y clociau, a'r parau rheilen warchod yn gyfan.

## Pwyntiau allweddol

- Mesurwch gyflawni fesul eitem catalog, o gyflwyniad y defnyddiwr i gadarnhad y defnyddiwr, ac adroddwch y canolrif a chanradd uchel.
- Aros yw'r rhan fwyaf o'r amser a aeth heibio, felly rhannwch amser ymarferol, cymeradwyo, ac aros am y defnyddiwr cyn penderfynu beth i'w drwsio.
- Darllenwch gyfaint fesul eitem fel neges gan ddefnyddwyr, ac awtomeiddiwch yr eitemau mynych a sefydlog yn gyntaf.
- Parwch bob rhif cyflymder â'r gyfradd ailagor a signal bodlonrwydd, ac adroddwch amser wedi'i oedi yn agored.
- Disgrifiwch y ciw a'r broses, byth y person.

## Cyfeiriadau a darllen pellach

1. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
2. AXELOS, *ITIL 4 Practice Guide: Service Request Management*, TSO (The Stationery Office), 2020.
3. ISO/IEC 20000-1, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
4. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Process automation](https://en.wikipedia.org/wiki/Process_automation).
12. Wikipedia, [Service catalog](https://en.wikipedia.org/wiki/Service_catalog).
13. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
