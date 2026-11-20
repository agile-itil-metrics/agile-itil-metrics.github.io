# Metrigau desg gwasanaeth

**Mesurwch y ddesg gwasanaeth yn ôl pa mor dda y mae'n helpu pobl i fynd yn ôl i'r gwaith a faint y mae'n ei ddysgu i weddill y sefydliad, oherwydd bod cyfrifon galwadau a munudau ar y ffôn yn gwobrwyo cyflymder a chyfaint ar draul y ddau.**

## Crynodeb a chymhelliant

I'r rhan fwyaf o ddefnyddwyr y ddesg gwasanaeth yw'r gwasanaeth. Anaml y byddant yn cwrdd â'r peirianwyr nac yn gweld y biblinell; maent yn cwrdd â phwy bynnag sy'n ateb pan fydd rhywbeth yn mynd o'i le. [Desg gymorth](https://en.wikipedia.org/wiki/Help_desk) yw'r adran neu'r person sy'n rhoi cymorth a gwybodaeth, fel arfer am broblemau cyfrifiadurol. Yn nefnydd [rheoli gwasanaethau TG (ITSM)](https://en.wikipedia.org/wiki/IT_service_management), y ddesg gwasanaeth yw'r un pwynt cyswllt rhwng y darparwr a'i ddefnyddwyr, gan drin digwyddiadau (tarfu anghynlluniedig neu darfu posibl ar wasanaeth) a cheisiadau gwasanaeth (ceisiadau arferol am rywbeth y mae'r gwasanaeth fel arfer yn ei ddarparu). Yn [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, mae'r arfer desg gwasanaeth yn eistedd wrth ymyl rheoli digwyddiadau a rheoli ceisiadau gwasanaeth, ac fe'i disgrifir gan ei ddiben a'i ganlyniadau, nid gan restr sefydlog o fesurau. Mae'r pwnc hwn felly yn cynnig arweiniad ymarferol, nid gofyniad fframwaith.

Daw'r mesurau a dyfodd o amgylch y ddesg yn bennaf o draddodiad y [ganolfan alwadau](https://en.wikipedia.org/wiki/Call_centre): faint o gysylltiadau a gyrhaeddodd, am ba hyd yr arhosodd pobl, faint a roddodd y gorau iddi, pa mor hir y cymerodd pob cyswllt, a faint a ddatryswyd ar y cynnig cyntaf. Mae'r mesurau hynny'n ddefnyddiol ac yn rhad, a hwy hefyd yw'r hawsaf yn y llyfr i'w troi'n dargedau sy'n niweidio'r gwasanaeth. Mae galwadau byr yn edrych yn effeithlon nes bod yr un defnyddiwr yn galw'n ôl deirgwaith. Mae gadael isel yn edrych yn ofalgar nes bod asiantau'n ateb yn gyflym ac yn datrys dim. Swydd y pwnc yw disgrifio pob mesur, nodi ei glociau, a dweud beth y mae'n ei wobrwyo a beth y mae'n ei guddio.

Mae'r olwg ystwyth yn ychwanegu ail ddiben. Mae pob cyswllt yn dystiolaeth o'r hyn y mae defnyddwyr yn ei gael yn ddryslyd, beth sy'n torri, a beth y maent yn dymuno i'r gwasanaeth ei wneud. Mae tîm ystwyth sy'n rhyddhau'n aml angen y dystiolaeth honno'n gyflym ac ar lefel gwasanaeth, nid tocyn. Felly mesurir y ddesg ddwywaith: fel gweithrediad sy'n ateb pobl yn dda, ac fel synhwyrydd sy'n bwydo'r ôl-groniad. Cyfaint yw'r bont rhwng y ddau. Gall cyfrif cynyddol olygu twf, rhyddhad gwael, erthygl goll, neu sianel newydd, ac ni all y metrig ar ei ben ei hun ddweud pa un (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau, am sut i ddarllen cyfrifon yn ôl categori a blaenoriaeth).

Termau allweddol: [datrys yn yr alwad gyntaf](https://en.wikipedia.org/wiki/First_call_resolution) yw cyfran y cysylltiadau a ddatryswyd ar y cyswllt cyntaf; mae [dosbarthwr galwadau awtomatig](https://en.wikipedia.org/wiki/Automatic_call_distributor) yn llwybro galwadau sy'n dod i mewn at staff sydd ar gael; [cytundeb lefel gwasanaeth (SLA)](https://en.wikipedia.org/wiki/Service-level_agreement) yw ymrwymiad rhwng darparwr a chwsmer; [canradd](https://en.wikipedia.org/wiki/Percentile) yw'r gwerth y mae cyfran benodol o arsylwadau'n syrthio islaw iddo, felly 85fed canradd amser trin yw'r hyd y mae 85 y cant o gysylltiadau'n gorffen o'i fewn; ac mae [bodlonrwydd cwsmeriaid](https://en.wikipedia.org/wiki/Customer_satisfaction) (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid) yn ba mor dda y mae gwasanaeth yn bodloni disgwyliadau defnyddwyr.

Nid yw'r termau "cyswllt" a "thocyn" yr un peth. Cyswllt yw un ymgais gan berson i gyrraedd y ddesg drwy sianel megis ffôn, sgwrs, e-bost, porth, galw heibio, neu negeseua. Tocyn (a elwir hefyd yn gofnod) yw'r hyn y mae'r offeryn ITSM yn ei greu i olrhain y gwaith. Gall un tocyn gynnwys llawer o gysylltiadau, a gall rhai cysylltiadau, megis ailosod cyfrinair a atebwyd yn y fan a'r lle, greu tocyn at ddibenion y cofnod yn unig. Cymysgu'r ddau yw ffynhonnell fwyaf cyffredin dryswch mewn adrodd desg, felly mae'r diffiniadau isod yn eu cyfrif ar wahân.

## Egwyddorion allweddol

- **Cyfrifwch gysylltiadau a thocynnau ar wahân, a diffiniwch y ddau.** Ymgais i gyrraedd y ddesg yw cyswllt; cofnod o waith yw tocyn. Ni ellir cysoni adroddiadau sy'n eu cymysgu.
- **Adroddwch amseroedd fel dosbarthiadau.** Dangoswch y canolrif a chanradd uchel megis yr 85fed neu'r 95fed, byth cyfartaledd yn unig, oherwydd bod ychydig o gysylltiadau hir neu fyr iawn yn ystumio'r cymedr.
- **Paru pob mesur cyflymder â mesur canlyniad.** Mae cyflymder ateb, gadael ac amser trin yn disgrifio ymdrech. Mae datrys ac ail-gysylltu yn disgrifio a gafodd y defnyddiwr gymorth.
- **Normaleiddiwch gyfaint yn erbyn defnydd.** Mae cyfrif sy'n codi am fod y sylfaen defnyddwyr wedi tyfu yn stori wahanol i un sy'n codi fesul defnyddiwr.
- **Mesurwch sianeli a gwasanaethau, nid pobl.** Mae'r metrigau hyn yn disgrifio desg, ciw, gwasanaeth a sianel. Ni chânt eu defnyddio byth i raddio neu ddisgyblu asiantau unigol.
- **Trinwch y ddesg fel synhwyrydd.** Dylai pob metrig arwain at gwestiwn i dimau cyflawni am yr hyn i'w drwsio, ei ddogfennu neu ei awtomeiddio i fyny'r afon.

## Diffiniadau metrigau

Mae'r tabl yn rhestru saith mesur y gall y rhan fwyaf o ddesgiau gwasanaeth eu casglu o'u platfform teleffoni a'u hofferyn ITSM. Mater i bob desg yw gosod ac ysgrifennu trothwyon a thargedau; nid yw'r pwnc hwn yn rhoi unrhyw werthoedd meincnod.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfaint cysylltiadau | Nifer y cysylltiadau a dderbyniwyd gan y ddesg, yn ôl sianel a chyfnod | cyfrif cysylltiadau a grëwyd yn y cyfnod, yn ôl sianel; eithrir cysylltiadau prawf mewnol, ymatebion awtomatig e-bost dyblyg, a galwadau allan a wnaeth y ddesg | cyfrif | Log platfform teleffoni neu sgwrs; cofnodion cyswllt offeryn ITSM | Desg gwasanaeth | Signal galw wrth fireinio ôl-groniad | Wythnosol |
| Cyfradd cysylltiadau | Cysylltiadau o'u cymharu â maint y boblogaeth a wasanaethir, fel na chamgymerir twf am broblem | cysylltiadau yn y cyfnod / defnyddwyr gweithredol neu gyfrifon gweithredol yn y cyfnod, wedi'i raddio i 100 o ddefnyddwyr; cymerir cyfrif y defnyddwyr o'r un cyfnod ac ysgrifennir y diffiniad o "gweithredol" | cysylltiadau fesul 100 o ddefnyddwyr | Cofnodion cyswllt a'r system hunaniaeth neu drwyddedau | Desg gwasanaeth; rheoli lefelau gwasanaeth | Galw wedi'i addasu i ddefnydd mewn adolygiad cynnyrch | Misol |
| Amser i ateb | Yr aros o'r funud y mae cyswllt yn mynd i mewn i'r ciw nes bod person neu beiriant ateb awtomataidd yn ymgysylltu | mae'r cloc yn dechrau pan roddir y cyswllt mewn ciw ac yn stopio ar yr ymateb dynol cyntaf; eithrir cysylltiadau a adawyd o'r mesur hwn a'u cyfrif mewn gadael; adroddwch y canolrif a'r 85fed canradd | eiliadau (ffôn, sgwrs); munudau neu oriau (e-bost, porth) | Platfform teleffoni; platfform sgwrs; stampiau amser offeryn ITSM | Desg gwasanaeth | Cytundeb gweithio ymatebolrwydd | Dyddiol yn ystod ffenestri adolygu, wythnosol mewn tuedd |
| Cyfradd gadael | Cyfran y cysylltiadau sy'n dod i ben cyn i neb ymgysylltu, gan y defnyddiwr | cysylltiadau a ddaeth i ben gan y defnyddiwr cyn yr ymateb dynol cyntaf / cysylltiadau a roddwyd mewn ciw; eithrir cysylltiadau a ddaeth i ben o fewn cyfnod gras byr (a nodir yn y diffiniad, er enghraifft pum eiliad) fel rhai damweiniol | canran | Platfform teleffoni; platfform sgwrs | Desg gwasanaeth | Signal cost oedi mewn adolygiad gwasanaeth | Wythnosol |
| Amser trin | Yr amser y mae'r ddesg yn ei dreulio ar gyswllt | mae'r cloc yn dechrau pan fo person yn ymgysylltu ac yn stopio pan fydd yn gorffen y cyswllt, gan gynnwys gwaith dogfennu ar ôl y cyswllt; cynhwysir aros am y defnyddiwr dim ond os yw'r diffiniad yn dweud hynny; adroddwch y canolrif a'r 85fed canradd, wedi'u hollti yn ôl math cyswllt | munudau | Platfform teleffoni; platfform sgwrs; log gwaith offeryn ITSM | Desg gwasanaeth; rheoli digwyddiadau | Signal ymdrech wrth fireinio a chynllunio capasiti | Wythnosol |
| Cyfradd datrys y cyswllt cyntaf | Cyfran y cysylltiadau a ddatryswyd ar y cyswllt cyntaf heb gyswllt diweddarach ar yr un mater | cysylltiadau a ddatryswyd yn ystod y cyswllt ac na ddilynwyd gan ail-gyswllt ar yr un mater gan yr un defnyddiwr o fewn y ffenestr ail-gysylltu / cysylltiadau cymwys; eithrir galwadau lle mae angen cyfeirio yn unig a galwadau na ddisgwylir i'r ddesg eu datrys | canran | Meysydd datrys a chysylltu offeryn ITSM; cadarnhad defnyddiwr lle'i gesglir | Desg gwasanaeth; rheoli digwyddiadau | Gwiriad diffiniad o orffen, wedi'i ddatrys ar y cyffyrddiad cyntaf | Misol |
| Cyfradd ail-gysylltu | Cyfran y cysylltiadau a ddatryswyd a ddilynir gan gyswllt arall ar yr un mater | cysylltiadau a ddilynir o fewn y ffenestr ail-gysylltu (er enghraifft saith diwrnod, a osodir yn y diffiniad) gan gyswllt arall gan yr un defnyddiwr ar yr un gwasanaeth neu fater / cysylltiadau a ddatryswyd yn y cyfnod cynharach; eithrir cysylltiadau am fater newydd | canran | Hanes cysylltu ac ailagor offeryn ITSM; cofnodion cyswllt | Desg gwasanaeth; rheoli digwyddiadau | Cyfradd diffygion a ddihangodd | Misol |

Mae mwy nag un diffiniad amddiffynadwy o ddatrys y cyswllt cyntaf, felly mae'r diffiniad yn rhan o'r metrig. Mae rhai desgiau'n cyfrif cyswllt fel un a ddatryswyd pan fo'r asiant yn cau'r tocyn yn ystod yr alwad. Mae eraill yn cyfrif dim ond pan nad yw'r defnyddiwr yn dod yn ôl o fewn ffenestr. Mae'r ail yn anoddach ei gasglu ac yn anoddach ei chwarae, a dyma'r un a ddefnyddir yma. Nodwch y ffenestr, nodwch beth sy'n cyfrif fel "yr un mater," a chymhwyswch y ddau yn yr un ffordd bob cyfnod.

## Argymhellion

### Gwahanwch gysylltiadau oddi wrth docynnau o'r dechrau

**Rhowch eu diffiniadau, eu dynodwyr a'u cyfrifon eu hunain i gysylltiadau a thocynnau.** Cofnod o ymgais i gyrraedd y ddesg yw cyswllt, a chofnod o waith yw tocyn. Cysylltwch hwy yn yr offeryn fel bod ail-gyswllt ar yr un mater yn weladwy. Mae adroddiadau sy'n cymysgu'r ddau yn rhoi ffigur cyfaint na all neb ei gysoni â'r platfform teleffoni.

### Adroddwch gyfaint yn ôl sianel, categori a chyfradd normaleiddiedig

**Dangoswch gyfanswm cyfaint, cyfaint yn ôl sianel, cyfaint yn ôl categori, a chyfradd cysylltiadau fesul 100 o ddefnyddwyr.** Mae cyfansymiau yn unig yn drysu twf â thrafferth. Gall gostyngiad mewn cyfaint ffôn fod yn symudiad i sgwrs, a gall codiad mewn cysylltiadau porth fod yn llwyddiant bwriadol i hunanwasanaeth. Plotiwch y gyfres dros o leiaf flwyddyn fel bod tymhorolrwydd megis dechrau tymhorau a diwedd blwyddyn ariannol yn weladwy.

### Defnyddiwch ddosbarthiadau ar gyfer pob mesur amser

**Adroddwch y canolrif a chanradd uchel ar gyfer amser i ateb ac amser trin.** Nid yw cyfartaledd dosbarthiad gwyrgam yn disgrifio profiad bron neb. Mae'r canolrif yn dangos y cyswllt nodweddiadol, ac mae'r 85fed neu'r 95fed ganradd yn dangos pa mor ddrwg yw'r gynffon araf. Dywedwch ar faint o gysylltiadau y gorwedd y ffigur, a marciwch y darlleniad fel un annibynadwy pan fo ciw ond yn trin llond llaw o gysylltiadau yn y cyfnod (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

### Trinwch adael fel signal o alw a staffio

**Darllenwch adael wrth ymyl amser i ateb a phatrymau cyrraedd.** Mae pobl yn gadael pan fo'r aros yn hirach nag y maent yn ei ddisgwyl, felly mae'r gyfradd yn codi gyda'r aros, ac mae'r aros yn codi pan fo cyrraedd yn fwy na chapasiti. Mae [damcaniaeth ciwio](https://en.wikipedia.org/wiki/Queueing_theory) yn esbonio pam mae'r aros yn tyfu'n sydyn wrth i giw nesáu at ddefnydd llawn, a dyna pam mae desg a redir bron yn 100 y cant prysur bob amser â hirhoedledd aros a gadael uchel. Staffiwch i batrymau cyrraedd yn ôl awr a diwrnod yn hytrach nag i gyfartaledd misol, a dangoswch adael yn ôl amser y dydd (gweler pwnc 2.3, Gwaith ar y gweill a chiwio).

### Diffiniwch ddatrys y cyswllt cyntaf yn ofalus, yna mesurwch ef o ochr y defnyddiwr

**Defnyddiwch ddiffiniad ar sail ail-gysylltu a'i gadarnhau gyda chwestiwn byr i ddefnyddwyr.** Mae cyfrif dim ond cysylltiadau nad ydynt yn dychwelyd o fewn ffenestr a nodir yn anoddach ei chwyddo na baner asiant a osodir wrth gau. Ychwanegwch wiriad un cwestiwn, megis "a ddatryswyd eich mater?", a'i gymharu â'r ffigur ail-gysylltu. Pan fo'r ddau'n anghytuno, ateb y defnyddiwr yw'r canllaw gwell, ac mae'r bwlch yn pwyntio at ble mae cau'n gynamserol.

### Defnyddiwch amser trin ar gyfer cynllunio, nid targedau

**Trinwch amser trin fel mewnbwn capasiti a diagnosteg, a pheidiwch byth â gosod targed i asiantau ei guro.** Mae targed ar amser trin yn talu am ruthro, trosglwyddo cynnar, a dogfennu tenau. Defnyddiwch y dosbarthiad yn ôl math cyswllt i gynllunio staffio ac i ddod o hyd i gysylltiadau sy'n cymryd llawer hirach na rhai tebyg, sy'n aml yn pwyntio at erthygl goll, offeryn lletchwith, neu broses aneglur. Anelwch at achosion y system, nid yr asiantau.

### Clymwch fetrigau'r ddesg wrth waith cyflawni

**Adolygwch brif gategorïau cysylltiadau gyda'r timau sy'n berchen ar y gwasanaethau.** Bob mis, cymerwch y pum categori a gynhyrchodd y mwyaf o gysylltiadau fesul 100 o ddefnyddwyr a gofynnwch pa newid i fyny'r afon fyddai'n eu tynnu: atgyweiriad, erthygl, neges gwall well, neu lwybr hunanwasanaeth. Cofnodwch yr atebion yn ôl-groniad y tîm sy'n berchen arnynt. Mae hyn yn troi rhifau'r ddesg yn waith gwella a dyma'r defnydd ystwyth cliriaf o'r data (gweler pwnc 3.6, Metrigau rheoli gwybodaeth, a phwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio).

### Cynhwyswch bob sianel yn yr un diffiniadau

**Cymhwyswch yr un rheolau cloc a chyfrif i ffôn, sgwrs, e-bost, porth, galw heibio, a negeseua.** Nid oes ciw byw gan sianeli anghydamserol, felly mae amser i ateb yn golygu rhywbeth gwahanol ym mhob un. Diffiniwch y cloc fesul sianel, ac adroddwch bob un ar wahân cyn cyfuno. Mae desg sy'n cyhoeddi ei sianel orau yn unig yn cuddio profiad pawb arall.

### Cysylltwch y metrigau â phrofiad y defnyddiwr

**Paru mesurau gweithredol â chwestiwn bodlonrwydd ar ôl y cyswllt ac anogwr testun rhydd.** Canlyniad drwg yw ateb cyflym i gyswllt anghwrtais neu ddiymwad, ac ni all y clociau ei weld. Dangoswch y gyfradd ymateb a chymysgedd yr ymatebwyr wrth ymyl y sgôr, oherwydd dim ond rhan hunan-ddewisedig o ddefnyddwyr sy'n ymateb (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth). Darllenwch y sylwadau gyda'r bobl sy'n ateb y cysylltiadau, mewn lleoliad tîm.

### Cadwch fetrigau ar lefel tîm a chiw

**Adroddwch fesul ciw, sianel, gwasanaeth a thîm, a chadwch ddata lefel asiant ar gyfer sgyrsiau hyfforddi y mae'r asiant yn cymryd rhan ynddynt.** Mae graddio asiantau unigol ar amser trin neu gyfradd datrys yn gwthio dewis cysylltiadau hawdd ac osgoi rhai caled. Mae hefyd yn niweidio ymddiriedaeth yn y data, ac mae defnyddwyr yn teimlo'r canlyniad yn ansawdd y cymorth. Defnyddiwch rifau lefel tîm i ofyn beth sydd ei angen ar y system.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfaint cysylltiadau | Mae asiantau'n digalonni logio drwy ailgyfeirio defnyddwyr at sianeli nas cyfrifir, neu'n hollti un cyswllt yn sawl un i wneud i giw edrych yn brysur; mae rheolwyr yn targedu cyfaint is | Cyfradd cysylltiadau fesul 100 o ddefnyddwyr a chysoni cyfnodol cyfrifon teleffoni â chyfrifon tocynnau; rheol sefydlog bod pob sianel yn cael ei chyfrif |
| Cyfradd cysylltiadau | Dewisir yr enwadur ar ôl y ffaith (er enghraifft diffiniad eang o "gweithredol") fel bod y gyfradd yn edrych yn well | Diffiniad ysgrifenedig, wedi'i ddyddio o "defnyddwyr gweithredol" a'r cyfrifon crai wedi'u dangos wrth ymyl y gyfradd |
| Amser i ateb | Ateb cysylltiadau gan gyfarchiad awtomatig neu drosglwyddo i giw tawel, neu godi'r alwad a'i rhoi ar ddal; mae e-bost yn cael ateb awtomatig sy'n cyfrif fel ateb | Diffiniwch y cloc fel yr ymateb dynol cyntaf, ac olrheiniwch adael ac ail-gysylltu wrth ei ymyl |
| Cyfradd gadael | Gollwng galwyr cyn eu rhoi mewn ciw, ymestyn y cyfnod gras, neu gyfrif cynnig galw'n ôl fel cyswllt a atebwyd | Canraddau amser i ateb, cyfradd cwblhau galw'n ôl, a chyfnod gras cyhoeddedig |
| Amser trin | Rhuthro galwadau, eu trosglwyddo'n gynnar, neu eu gorffen cyn datrys y broblem; gadael nodiadau tenau; symud gwaith i amser ar ôl y cyswllt y mae'r cloc yn ei eithrio | Datrys y cyswllt cyntaf, cyfradd ail-gysylltu, ac adolygiad sampl o ansawdd dogfennu gan y tîm |
| Cyfradd datrys y cyswllt cyntaf | Cau tocynnau yn ystod yr alwad waeth beth fo'r canlyniad, darllen "yr un mater" yn gul, neu ddosbarthu cysylltiadau caled fel "ni ddisgwylir eu datrys" | Cyfradd ail-gysylltu, cadarnhad defnyddiwr un cwestiwn, ac archwiliadau cyfnodol o eithriadau gan y tîm |
| Cyfradd ail-gysylltu | Gofyn i ddefnyddwyr agor tocyn newydd ar gyfer dilyniant, neu logio dilyniannau o dan gategori gwahanol fel nad ydynt yn cysylltu | Rheolau cysylltu yn yr offeryn, archwiliad sampl o ail-gysylltiadau heb eu cysylltu, a datrysiad a adroddir gan ddefnyddwyr |

Darlleniad iach yw set o ffigurau sy'n cytuno â'i gilydd. Mae amser i ateb a gadael yn symud gyda'i gilydd, mae amser trin yn amrywio gyda'r math cyswllt ac nid gyda tharged y diwrnod, mae datrys y cyswllt cyntaf ac ail-gysylltu yn ddelweddau drych sy'n adio ger eu nenfwd, ac mae ateb y defnyddiwr i "a ddatryswyd eich mater?" yn cytuno â'r ffigur ail-gysylltu. Mae un ffigur sy'n gwella'n sydyn tra bo'r lleill yn aros yn wastad yn rheswm i edrych ar sut y caiff ei gasglu cyn dathlu. Fel arfer mae desg a chwaraeir yn dangos y symptomau mewn ail-gysylltu, categorïau sy'n ailadrodd mewn cyfaint, a chwynion cynyddol.

## Cyfaddawdau: manteision ac anfanteision

| Dewis | Mantais | Cost neu risg |
| --- | --- | --- |
| Amser trin cyfartalog fel pennawd | Syml, ar gael ym mhob platfform, hawdd ei esbonio | Gwobrwyo rhuthro, cuddio'r gynffon, a gwahodd targedau sy'n niweidio datrys |
| Canolrif ac 85fed canradd ar gyfer amseroedd | Disgrifio'r achos nodweddiadol a'r gynffon araf | Angen digon o gysylltiadau i fod yn sefydlog ac ychydig mwy o esboniad |
| Datrys y cyswllt cyntaf yn ôl baner cau asiant | Hawdd ei gasglu | Hawdd ei chwyddo ac yn anodd ei gymharu rhwng desgiau |
| Datrys y cyswllt cyntaf yn ôl ffenestr ail-gysylltu | Anodd ei chwarae ac yn nes at brofiad y defnyddiwr | Angen cysylltu da yn yr offeryn ac aros i'r ffenestr basio cyn y gellir ei adrodd |
| Gadael gyda chyfnod gras | Tynnu ffonio damweiniol | Gellir ymestyn y cyfnod gras i wenieithu'r ffigur |
| Cyfradd cysylltiadau fesul 100 o ddefnyddwyr | Gwahanu twf oddi wrth drafferth | Yn dibynnu ar gyfrif defnyddwyr dibynadwy a diffiniad clir o "gweithredol" |
| Arolwg ar ôl y cyswllt | Cipio'r hyn na all y clociau | Cyfraddau ymateb isel ac anwastad, a thuedd tuag at ddefnyddwyr â theimladau cryf |
| Adrodd yn ôl tîm a chiw yn unig | Amddiffyn ymddiriedaeth a chanolbwyntio ar y system | Rhoi llai o fanylion ar gyfer hyfforddi unigol, sydd angen proses wahanol, breifat |

Nid yw unrhyw set o fesurau yn dileu'r tensiwn rhwng cyflymder a gofal. Mae gan ddesg sy'n ateb pob cyswllt mewn eiliadau ac yn datrys ychydig giw da a gwasanaeth gwael, a bydd desg sy'n cymryd amser i ddatrys yn iawn yn dangos amseroedd trin a aros hirach. Y ffordd drwodd yw cytuno pa ganlyniad sy'n bwysicaf y chwarter hwn, gwneud y cyfaddawd yn eglur, ac adolygu'r pâr o fetrigau sy'n ei ddal mewn cydbwysedd. Mae cyflymach yn well dim ond tra bo datrys yn dal.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Beth mae "cyswllt" yn ei olygu yma, ac a yw ein cyfrif yn cyfateb i'r hyn y mae'r platfform teleffoni a'r offeryn ITSM yn ei adrodd yn eu tro?**
Gofynnwch i'r grŵp olrhain un diwrnod o gysylltiadau drwy bob sianel a chymharu'r cyfrifon o'r ddwy system. Nodwch gysylltiadau nad ydynt byth yn dod yn docynnau a thocynnau nad ydynt byth yn dechrau fel cysylltiadau. Dylai hwylusydd ddisgwyl bwlch ar y dechrau a'i drin fel canfyddiad am ddiffiniadau, nid nam yn y bobl. Cytunwch ar reol ar gyfer yr adroddiad nesaf a phwy sy'n berchen arni.

**2. Pan ddywedwn fod cyswllt wedi'i ddatrys ar y cyswllt cyntaf, sut ydym ni'n gwybod y byddai'r defnyddiwr yn cytuno?**
Adolygwch ddeg cyswllt diweddar a farciwyd fel datrysiadau cyswllt cyntaf a gwiriwch a ddaeth unrhyw un o'r defnyddwyr yn ôl ar yr un mater. Gofynnwch beth allai'r asiant fod wedi'i wneud yn wahanol ar y rhai a wnaeth. Mae'r drafodaeth fel arfer yn dangos ble mae cau'n digwydd cyn bod y defnyddiwr yn barod. Penderfynwch a ddylid ychwanegu cadarnhad un cwestiwn a beth ddylai'r ffenestr ail-gysylltu fod.

**3. Beth sy'n digwydd i'r person ar ddal, a phryd maent yn rhoi'r gorau iddi?**
Edrychwch ar y gromlin gadael yn ôl amser a aros. Mae'r rhan fwyaf o ddesgiau'n canfod pwynt y tu hwnt iddo y mae pobl yn gadael mewn niferoedd mawr, a'r pwynt hwnnw yw terfyn ymarferol y ciw. Gofynnwch pa atebion galw'n ôl, sgwrs neu awtomataidd sydd ar gael, ac a gyfrifir unrhyw un ohonynt fel rhai a atebwyd pan na ddatryswyd y mater. Gall yr hwylusydd ddefnyddio hyn i agor trafodaeth am staffio yn ôl awr, nid yn ôl mis.

**4. Pa rai o'n rhifau amser trin fyddai'n newid pe baem yn rhoi sylw i waith ar ôl y cyswllt ac aros?**
Rhestrwch yr hyn y mae'r cloc yn ei gynnwys a'r hyn y mae'n ei adael allan. Gofynnwch a yw unrhyw un wedi teimlo pwysau i fyrhau galwadau, a beth a wnaethant. Mae'r cwestiwn hwn yn haws ei ateb mewn tîm nag mewn adroddiad, felly rhowch gyfle i bobl siarad heb briodoli. Cytunwch ar ddiffiniad ac a ddefnyddir amser trin ar gyfer cynllunio yn unig.

**5. Pa bum categori a gynhyrchodd y mwyaf o gysylltiadau fesul 100 o ddefnyddwyr y chwarter diwethaf, a phwy sy'n berchen ar yr atgyweiriad ar gyfer pob un?**
Dewch â'r data categori a pherchnogion y gwasanaethau sylfaenol i'r un bwrdd. Ar gyfer pob categori, gofynnwch ai atgyweiriad, erthygl, neges well, neu lwybr hunanwasanaeth yw'r ymateb gorau. Y pwynt yw gadael gydag eitemau mewn ôl-groniad a pherchnogion a enwir. Ailedrychwch ar y rhestr y chwarter nesaf i weld pa rai a symudodd.

**6. A ydym yn adrodd hyn ar lefel tîm a chiw, ac a yw unrhyw un yn ei ddefnyddio i gymharu unigolion?**
Gofynnwch i'r grŵp yn uniongyrchol a yw unrhyw un o'r ffigurau hyn wedi'i ddefnyddio i farnu person, a pha effaith a gafodd. Trafodwch beth fyddai'r ddesg yn rhoi'r gorau i'w wneud pe bai cymharu unigol yn dod i ben, a beth fyddai'n dechrau ei wneud. Dylai'r hwylusydd gofnodi unrhyw enghreifftiau a'u dwyn at berchennog y metrigau i gael penderfyniad am y polisi. Y nod yw ymrwymiad ysgrifenedig bod y data'n disgrifio'r system.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n cael y golwg orau o'u gwasanaeth eu hunain o'r ddesg. Mae cysylltiadau fesul 100 o ddefnyddwyr ar ôl rhyddhad yn dangos yn gyflym a oedd newid wedi drysu pobl, ac mae'r categorïau'n dangos beth i'w drwsio nesaf. Dylai timau ddisgwyl adolygiad misol o brif gategorïau a'u trin fel mewnbwn i'r ôl-groniad, heb unrhyw fai ar y ddesg am adrodd yr hyn y mae defnyddwyr yn ei ddweud wrthi. Gofynnwch i'r ddesg am samplau cysylltiadau yn ogystal â chyfrifon, oherwydd bod y geiriau y mae defnyddwyr yn eu defnyddio yn aml yn datgelu problem labelu neu ddylunio.

### Timau gwasanaeth a gweithrediadau

Mae staff y ddesg a'u harweinwyr angen ffigurau sy'n eu helpu i gynllunio a gwella heb droi'n dargedau. Staffio yn ôl awr o batrymau cyrraedd, adolygiadau ail-gysylltu a cheisiadau erthyglau yw'r allbynnau mwyaf defnyddiol. Dylai staff gael llais yn y ffordd y diffinnir y metrigau, oherwydd eu bod yn gwybod ble mae'r clociau'n camarwain. Dylent weld ffigurau eu tîm eu hunain yn gyntaf a gallu eu herio.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr angen set fer o ffigurau sy'n cytuno â'i gilydd: cyfaint a chyfradd cysylltiadau, amser i ateb a gadael, datrys y cyswllt cyntaf ac ail-gysylltu, a sgôr bodlonrwydd defnyddwyr gyda'i gyfradd ymateb. Dylent ofyn am ddosbarthiadau ac am nodiadau ar newidiadau diffiniad, a dylent wrthsefyll gosod un targed ar amser trin neu ar gyfaint. Mae targedau ar gyflymder yn unig yn gwahodd y chwarae'r system a ddisgrifir uchod. Dylai llywodraethu gofnodi pwy sy'n berchen ar bob diffiniad (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn poeni a gyrhaeddasant, a gawsant eu trin yn dda, ac a arhosodd y broblem wedi'i thrwsio. Nid ydynt yn poeni am amser trin. Mae dweud wrthynt beth mae'r ddesg yn ei fesur a gweithredu ar eu hadborth yn magu ymddiriedaeth, felly hefyd sicrhau bod y sianeli y mae'n well ganddynt yn cael eu mesur a'u staffio. Gwasanaethir cwsmeriaid sy'n prynu'r gwasanaeth gan ymrwymiadau clir mewn SLA neu gytundeb profiad (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA, a phwnc 6.2, Cytundebau lefel profiad).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn rhedeg desg gwasanaeth o tua dwsin o staff ar gyfer tua 4,000 o ddefnyddwyr clinigol a gweinyddol. Mae'r rhifau isod yn enghreifftiol ac nid ydynt yn dod o unrhyw sefydliad go iawn.

Mae golwg wythnosol y tîm yn dangos 1,900 o gysylltiadau (enghreifftiol), sef cyfradd cysylltiadau o 47.5 cyswllt fesul 100 o ddefnyddwyr (enghreifftiol). Mae gan amser i ateb ar y ffôn ganolrif o 40 eiliad ac 85fed canradd o 6 munud (enghreifftiol). Mae gadael yn 14 y cant (enghreifftiol) ac yn codi'n sydyn ar fore dyddiau'r wythnos rhwng 08:00 a 09:30. Canolrif amser trin yw 7 munud, a'r 85fed canradd yw 22 munud (enghreifftiol). Mae datrys y cyswllt cyntaf yn ôl ffenestr ail-gysylltu yn 61 y cant (enghreifftiol), a'r gyfradd ail-gysylltu saith diwrnod yw 19 y cant (enghreifftiol).

Yn yr adolygiad misol mae arweinydd y ddesg a'r tîm cymwysiadau clinigol yn edrych ar y categorïau. Mae problemau mewngofnodi a bathodynnau yn cyfrif am gyfran fawr o gysylltiadau'r bore, a chynhyrchodd newid diweddar i fewngofnodi'r cymhwysiad clinigol gynnydd mewn cysylltiadau am yr un neges gwall. Mae'r ddesg a'r tîm cymwysiadau yn penderfynu gwneud tri pheth. Byddant yn newid y neges gwall ac yn ychwanegu dolen at yr erthygl, byddant yn ychwanegu opsiwn galw'n ôl ar gyfer brig y bore, a byddant yn symud dechrau un shifft awr yn gynharach i gwmpasu'r patrwm cyrraedd 08:00. Byddant yn adolygu gadael, ail-gysylltu a chyfradd cysylltiadau ar gyfer y categori hwnnw ar ôl pedair wythnos.

Hanner ffordd drwy'r chwarter mae rheolwr yn cynnig targed amser trin o 5 munud i leihau'r ciw. Mae'r tîm yn dangos mai'r cysylltiadau 85fed canradd yw'r rhai araf sy'n bwysig fwyaf ac y byddai targed yn gwthio asiantau i orffen galwadau'n gynnar. Maent hefyd yn sylwi bod y ffigur datrys y cyswllt cyntaf wedi codi i 78 y cant (enghreifftiol) mewn un wythnos tra bo'r gyfradd ail-gysylltu wedi codi i 27 y cant (enghreifftiol). Mae adolygiad yn canfod bod ychydig o shifftiau wedi dechrau cau tocynnau yn ystod yr alwad gyda nodyn i'r defnyddiwr alw'n ôl, a oedd yn cyfrif fel datrysiad cyswllt cyntaf. Mae'r tîm yn adfer y diffiniad ar sail ail-gysylltu, yn ychwanegu'r cwestiwn cadarnhau defnyddiwr, ac yn gollwng y targed amser trin. Adroddir gadael, amser i ateb ac ail-gysylltu gyda'i gilydd o hynny ymlaen.

## Y golwg fesul sector

**Busnes newydd.** Yn aml mae'r ddesg yn flwch derbyn a rennir neu'n sianel sgwrs a drinnir gan bwy bynnag sy'n rhydd. Cyfrifwch gysylltiadau yn ôl sianel, tagiwch y categori, ac edrychwch ar y pump uchaf bob mis gyda'r bobl sy'n adeiladu'r cynnyrch. Peidiwch â phrynu platfform canolfan alwadau cyn bod y cyfaint yn ei gyfiawnhau, a pheidiwch â gosod targedau ar gyfer cyflymder pan fo dau berson yn ateb pob cyswllt.

**Busnes bach.** Fel arfer mae un person neu ddarparwr allanol yn rhedeg desg gwasanaeth a gynhelir. Defnyddiwch adroddiadau safonol yr offeryn, gofynnwch i'r cyflenwr am ei ddiffiniadau o gyswllt, datrys a gadael yn ysgrifenedig, ac allforiwch ddata crai o bryd i'w gilydd. Mae cwestiwn cylchol byr i ddefnyddwyr, megis "a ddatryswyd eich mater?", yn rhoi mwy o ddirnadaeth na dangosfwrdd hir.

**Menter fawr.** Mae llawer o giwiau, ieithoedd, offer a chyflenwyr yn arwain at ddiffiniadau gwahanol o'r un gair. Cytunwch ar ddiffiniad a rennir o gyswllt, datrys y cyswllt cyntaf ac ail-gysylltu, a set gyffredin o sianeli. Adroddwch yn ôl ciw a gwasanaeth, gyda golwg safonol ar gyfer yr arweinyddiaeth, a defnyddiwch ddata rheoli gweithlu i staffio i batrymau cyrraedd. Cymharwch giwiau dim ond ar ôl gwirio eu bod yn defnyddio'r un diffiniadau.

**Llywodraeth a'r sector cyhoeddus.** Gall cofnodion fod â rhwymedigaethau cadw, mynediad, archwilio a phreifatrwydd, a gall contract osod y metrigau a'r targedau ar gyfer desg allanol. Darllenwch fetrigau'r contract yn feirniadol ac ychwanegwch y mesurau rheilen warchod at yr adrodd hyd yn oed pan na fo eu hangen. Cadwch lwybr archwilio newidiadau diffiniad, ac osgowch gasglu data personol nad oes ei angen. Mae gwasanaethau cyhoeddus yn aml yn gwasanaethu defnyddwyr â dewis cyfyngedig o sianel, felly mae hygyrchedd pob sianel yn rhan o'r darlun (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad dros well metrigau desg yw gwasanaeth rhatach a gwell, ac mae'r elw'n dod mewn tri lle. Yn gyntaf, llai o gysylltiadau dro ar ôl tro: mae pob ail-gyswllt yn waith nad oedd angen i'r ddesg ei wneud ac yn amser nad oedd y defnyddiwr eisiau ei dreulio. Yn ail, atgyweiriadau i fyny'r afon: gall data categori'r ddesg dynnu dosbarthiadau cyfan o gysylltiadau pan fo timau cyflawni'n gweithredu arno. Yn drydydd, gwell staffio: mae data patrwm cyrraedd yn gadael i reolwyr osod pobl pan fo defnyddwyr eu hangen, sy'n gostwng gadael ac amser segur ar yr un pryd.

Mae cost casglu'n gymedrol lle mae'r platfform teleffoni a'r offeryn ITSM eisoes yn cofnodi'r digwyddiadau. Y prif gostau yw amser i gytuno ar ddiffiniadau, trwsio cysylltu rhwng cysylltiadau a thocynnau, ychwanegu cwestiwn byr ar ôl y cyswllt, ac adolygu'r data gyda thimau cyflawni.

Ni chynigir unrhyw ffigur elw yma, oherwydd bod ffigurau cyhoeddedig yn amrywio gyda'r sefydliad a'i ddull, ac ni wiriwyd yr un ar gyfer y pwnc hwn. Amcangyfrifwch yr elw o'ch data eich hun. Cymerwch y cyfrif ail-gysylltiadau ac amser trin a fesurwyd, lluoswch â chost awr asiant, a chymharwch hynny â chost yr atgyweiriad. Disgrifiwch y canlyniad fel amcangyfrif gyda'i ragdybiaethau, ac ailedrychwch arno ar ôl y newid (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Targedu amser trin cyfartalog.** Mae'n gwobrwyo rhuthro a throsglwyddo cynnar. Defnyddiwch y dosbarthiad yn ôl math cyswllt ar gyfer cynllunio, a'i baru â datrys y cyswllt cyntaf ac ail-gysylltu.
- **Cyfrif baner cau a osodwyd gan asiant fel datrys y cyswllt cyntaf.** Gellir ei gosod waeth beth fo'r canlyniad. Defnyddiwch ffenestr ail-gysylltu a chadarnhad defnyddiwr.
- **Graddio asiantau unigol.** Mae'n gwthio dewis cysylltiadau a hunanamddiffyn. Adroddwch yn ôl tîm a chiw, a chadwch sgyrsiau unigol yn breifat ac yn gefnogol.
- **Adrodd cyfartaledd pob sianel sy'n cuddio'r sianel wannaf.** Mae ffôn, sgwrs ac e-bost yn ymddwyn yn wahanol. Adroddwch bob sianel ar wahân cyn cyfuno.
- **Darllen cyfaint heb enwadur.** Gallai codiad fod yn dwf. Dangoswch gysylltiadau fesul 100 o ddefnyddwyr a'r cymysgedd categori.
- **Gadael y ddesg allan o benderfyniadau cyflawni.** Mae cyfrifon a adroddir i ddangosfwrdd ac na chaiff eu trafod byth gyda'r tîm cynnyrch yn wastraff. Cynhaliwch adolygiad misol o brif gategorïau gyda'u perchnogion.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a chlociau | Mae pob person yn cyfrif cysylltiadau'n wahanol | Ysgrifennir ychydig o ddiffiniadau ar gyfer rhai ciwiau | Un diffiniad ysgrifenedig fesul metrig, gan gynnwys dechrau a stop y cloc ac eithriadau | Newidiadau diffiniad wedi'u logio a'u hadolygu ar amserlen | Diffiniadau wedi'u rhannu â chyflenwyr a chwsmeriaid a'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Cipio ac ansawdd data | Cyfrifon wedi'u cydosod â llaw o allforion | Data teleffoni ac ITSM wedi'u hadrodd ar wahân | Cysylltiadau a thocynnau wedi'u cysylltu, gyda chipio awtomataidd ar draws sianeli | Cysylltu, cyflawnrwydd a chysoni wedi'u mesur a'u tueddu | Data cysylltiadau wedi'i rannu ar draws timau a chyflenwyr drwy ryngwynebau y cytunwyd arnynt |
| Defnydd mewn gwelliant | Rhifau wedi'u hadrodd ond anaml y cânt eu trafod | Adolygiad achlysurol o gyfnodau prysur | Adolygiad misol o brif gategorïau gyda pherchnogion gwasanaeth | Gwelliannau wedi'u cynllunio, eu hariannu a'u gwirio yn erbyn ail-gysylltu a chyfaint | Data'r ddesg yn gyrru blaenoriaethau ôl-groniad ar draws timau cynnyrch a chyflenwyr |
| Rheiliau gwarchod ac ymddiriedaeth | Targedau cyflymder wedi'u cymhwyso i unigolion | Rhywfaint o ymwybyddiaeth o chwarae'r system | Mesurau pâr wedi'u hadrodd gyda'i gilydd a dim graddio unigol | Gwiriadau chwarae'r system wedi'u harchwilio gan y tîm a chadarnhad defnyddiwr ar waith | Defnyddwyr a staff yn helpu i osod y mesurau ac yn gweld y canlyniadau |

## Rhestr wirio

- [ ] Diffinnir a chyfrifir cysylltiadau a thocynnau ar wahân, ac mae'r cyfrifon yn cysoni.
- [ ] Mae gan bob sianel gloc ysgrifenedig ar gyfer amser i ateb a ffordd a nodir o drin atebion awtomataidd.
- [ ] Adroddir mesurau amser fel y canolrif a chanradd uchel gyda maint y sampl.
- [ ] Mae gan adael gyfnod gras ysgrifenedig ac fe'i dangosir gydag amser i ateb.
- [ ] Mae datrys y cyswllt cyntaf yn defnyddio ffenestr ail-gysylltu ac ystyr a nodir o "yr un mater".
- [ ] Cesglir cadarnhad defnyddiwr un cwestiwn, gyda'i gyfradd ymateb wedi'i dangos.
- [ ] Adroddir cyfradd cysylltiadau fesul 100 o ddefnyddwyr, gyda diffiniad ysgrifenedig o "defnyddiwr gweithredol".
- [ ] Ni osodir unrhyw darged ar amser trin i asiantau, ac nid oes unrhyw fetrig yn graddio unigolion.
- [ ] Adolygir y prif gategorïau cysylltiadau'n fisol gyda'r timau sy'n berchen arnynt, ac mae camau gweithredu'n mynd i ôl-groniad.
- [ ] Mae diffiniadau dan reolaeth fersiynau ac mae pob newid wedi'i ddyddio.

## Anogwyr AI

**Drafftiwch ddiffiniadau manwl gywir ar gyfer mesurau craidd y ddesg.**

```text
Rwy'n ysgrifennu diffiniadau ar gyfer y mesurau desg gwasanaeth hyn: [rhestr o
fesurau, er enghraifft cyfaint cysylltiadau, amser i ateb, gadael, amser trin,
datrys y cyswllt cyntaf, ail-gysylltu]. Ein sianeli yw [rhestr sianeli] a'n hoffer
yw [platfform teleffoni neu sgwrs ac offeryn ITSM]. Ar gyfer pob mesur, drafftiwch y
diffiniad, y fformiwla, dechrau a stop y cloc, cynhwysiadau ac eithriadau, uned, a
ffynhonnell data. Defnyddiwch yr un termau drwyddi draw a pheidiwch â dyfeisio
gwerthoedd meincnod na thargedau. Rhestrwch eich rhagdybiaethau a'r cwestiynau y
dylwn eu hateb i orffen.
```

**Adolygwch set o ffigurau desg am arwyddion o chwarae'r system.**

```text
Dyma ein ffigurau desg gwasanaeth ar gyfer [cyfnod]: [gludwch ffigurau fel cyfaint,
canraddau amser i ateb, gadael, canraddau amser trin, datrys y cyswllt cyntaf,
ail-gysylltu]. Ein diffiniadau yw [gludwch ddiffiniadau]. Chwiliwch am batrymau sy'n
awgrymu bod ffigur wedi gwella oherwydd sut y caiff ei gasglu ac nid am fod y
gwasanaeth wedi gwella, ac awgrymwch beth i'w wirio yn y data ar gyfer pob un.
Peidiwch â chyhuddo unigolion a pheidiwch â dyfeisio trothwyon. Rhestrwch eich
rhagdybiaethau a'r hyn na allech ei benderfynu o'r data a roddwyd.
```

**Paratowch adolygiad misol o brif gategorïau cysylltiadau.**

```text
Rwy'n paratoi adolygiad misol o gategorïau cysylltiadau'r ddesg gwasanaeth ar gyfer
[gwasanaeth neu dîm]. Mae gennyf [cyfrifon categori a chysylltiadau fesul 100 o
ddefnyddwyr am y tri mis diwethaf]. Drafftiwch agenda, templed tabl byr, a rhestr o
gwestiynau i'w gofyn i bob perchennog gwasanaeth am achosion, atgyweiriadau,
erthyglau ac opsiynau hunanwasanaeth. Awgrymwch sut i gofnodi camau gweithredu
mewn ôl-groniad. Peidiwch â dyfeisio rhifau nac achosion. Rhestrwch eich
rhagdybiaethau a'r data y dylwn ddod ag ef.
```

**Dyluniwch arolwg byr ar ôl y cyswllt.**

```text
Rwyf eisiau mesur a oedd defnyddwyr yn teimlo eu bod wedi cael cymorth ar ôl
cysylltu â [enw'r ddesg gwasanaeth] drwy [sianel]. Drafftiwch [nifer] o gwestiynau
niwtral, gan gynnwys un ar a ddatryswyd y mater, cynllun ar gyfer pryd i'w
hanfon, a sut i adrodd y gyfradd ymateb a chymysgedd yr ymatebwyr. Nodwch eiriad
a allai ogwyddo atebion a nodwch ystyriaethau preifatrwydd o gofio y bydd y data'n
cael ei gadw yn [offeryn]. Peidiwch â dyfeisio cyfraddau ymateb meincnod.
Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i ba bwnc sy'n diffinio metrig cysylltiedig a'r rheilen warchod a ddylai eistedd wrth ymyl mesur desg.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod golygiadau i'r pwnc hwn yn cadw pob metrig wedi'i baru â ffordd o chwarae'r system a rheilen warchod.

## Pwyntiau allweddol

- Cyfrifwch gysylltiadau a thocynnau ar wahân, diffiniwch y ddau, a normaleiddiwch gyfaint yn erbyn maint y sylfaen defnyddwyr.
- Adroddwch amseroedd fel y canolrif a chanradd uchel, a dywedwch ar faint o gysylltiadau y gorwedd pob ffigur.
- Darllenwch gyflymder ateb, gadael ac amser trin fel arwyddion o ymdrech, a'u paru â datrys y cyswllt cyntaf ac ail-gysylltu fel arwyddion o ganlyniad.
- Diffiniwch ddatrys y cyswllt cyntaf yn ôl a yw'r defnyddiwr yn dod yn ôl, a'i gadarnhau â gwiriad un cwestiwn.
- Defnyddiwch y ddesg fel synhwyrydd: adolygwch y prif gategorïau'n fisol gyda'r timau sy'n berchen ar y gwasanaethau.
- Mesurwch giwiau, sianeli a gwasanaethau, a pheidiwch byth â graddio asiantau unigol.

## Cyfeiriadau a darllen pellach

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO (The Stationery Office), 2019.
5. ISO/IEC 20000-1:2018, *Information technology: Service management: Part 1: Service management system requirements*, International Organization for Standardization.
6. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
7. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997, pp. 305-321.
8. Wikipedia, [Help desk](https://en.wikipedia.org/wiki/Help_desk).
9. Wikipedia, [IT service management](https://en.wikipedia.org/wiki/IT_service_management).
10. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
11. Wikipedia, [Call centre](https://en.wikipedia.org/wiki/Call_centre).
12. Wikipedia, [First call resolution](https://en.wikipedia.org/wiki/First_call_resolution).
13. Wikipedia, [Automatic call distributor](https://en.wikipedia.org/wiki/Automatic_call_distributor).
14. Wikipedia, [Service-level agreement](https://en.wikipedia.org/wiki/Service-level_agreement).
15. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
16. Wikipedia, [Customer satisfaction](https://en.wikipedia.org/wiki/Customer_satisfaction).
17. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
