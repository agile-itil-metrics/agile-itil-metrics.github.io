# Metrigau cydweithio a throsglwyddo

**Mae gwaith yn arafu ac ansawdd yn gostwng ble bynnag y mae'n newid dwylo, felly mesurwch y trosglwyddiadau, yr aros rhyngddynt, a'r ddibyniaeth ar unigolion unigol, a defnyddiwch y rhifau i ddod â'r bobl iawn at ei gilydd yn lle cyfrif pwy sy'n siarad â phwy.**

## Crynodeb a chymhelliant

Mae egwyddorion y Maniffesto Ystwyth yn dweud bod rhaid i bobl fusnes a datblygwyr weithio gyda'i gilydd bob dydd drwy gydol prosiect. Mae'r arsylwad sylfaenol yn hen ac yn gadarn: nid yw'r rhan fwyaf o oedi mewn sefydliad gwasanaeth yn dod o bobl yn gweithio'n araf. Mae'n dod o waith yn aros rhwng pobl. Mae cais yn symud o'r ddesg gwasanaeth i dîm ail linell i dîm cymwysiadau i weinyddwr cronfa ddata, ac ar bob cam mae'n ymuno â chiw, yn colli cyd-destun, ac yn peryglu cael ei anfon yn ôl. Gall y bobl dan sylw fod yn gyflym bob un. Y system sy'n araf.

Mae rheoli gwasanaethau TG (ITSM), fel y'i codwyd gan ITIL, wedi trefnu cymorth ers tro mewn haenau a thimau, gydag uwchgyfeirio fel y mecanwaith ar gyfer symud problem at rywun sy'n gallu ei datrys. Mae gan y strwythur hwnnw fanteision: arbenigo, perchnogaeth glir, a mynediad rheoledig. Mae hefyd yn creu trosglwyddiadau, ac mae gan drosglwyddiadau gost. Mae arfer ystwyth a DevOps yn ymateb drwy adeiladu timau traws-swyddogaethol sy'n cario mwy o'r gwaith o'r dechrau i'r diwedd, a thrwy annog cydweithio mewn amser real. Mae'r ddau draddodiad yn dod i gasgliadau tebyg: llai o drosglwyddiadau, aros byrrach rhyngddynt, a phobl sy'n gallu datrys y broblem yn gweithio arni gyda'i gilydd.

Mae sawl syniad yn helpu gyda mesur.

- **Trosglwyddiadau a chiwiau.** Bob tro y mae gwaith yn pasio o un tîm i'r llall, mae fel arfer yn aros mewn ciw. Mae'r amser a dreulir yn aros yn aml yn llawer mwy na'r amser a dreulir yn gweithio. Dyma pam mae effeithlonrwydd llif, a gyflwynwyd yn gynharach, fel arfer yn isel (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif). Mae [tagfa](https://en.wikipedia.org/wiki/Bottleneck_(production)) yn bwynt o gapasiti cyfyngedig mewn proses, ac mae'n penderfynu trwybwn y cyfan.
- **Mae strwythur yn siapio cyfathrebu.** Mae [cyfraith Conway](https://en.wikipedia.org/wiki/Conway%27s_law) yn nodi bod sefydliadau'n dylunio systemau sy'n adlewyrchu eu strwythurau cyfathrebu eu hunain. Mae'r gwrthwyneb hefyd yn ymarferol: os ydych eisiau system gyda llai o ddibyniaethau, trefnwch dimau i leihau'r dibyniaethau rhyngddynt. Mae ffiniau tîm yn creu trosglwyddiadau, ac mae trosglwyddiadau yn siapio'r bensaernïaeth.
- **Dibyniaethau.** Mae [dibyniaeth](https://en.wikipedia.org/wiki/Dependency_(project_management)) yn berthynas lle na all un darn o waith fynd yn ei flaen nes bod un arall yn gorffen. Mae dibyniaethau rhwng timau yn ffynhonnell fawr o oedi, a gellir eu mapio, eu cyfrif, a'u lleihau.
- **Mae costau cydlynu yn tyfu gyda phobl.** Mae [cyfraith Brooks](https://en.wikipedia.org/wiki/Brooks%27s_law), o ysgrifau Frederick Brooks ar brosiectau meddalwedd, yn arsylwi y gall ychwanegu pobl at brosiect hwyr ei wneud yn hwyrach, yn rhannol oherwydd gorbenion cyfathrebu ychwanegol. Nid yw mwy o bobl mewn sgwrs yn well yn awtomatig.
- **Dibyniaeth ar unigolion.** Y [ffactor bws](https://en.wikipedia.org/wiki/Bus_factor) yw nifer y bobl y byddai angen iddynt fod ar gael i atal prosiect, a ddefnyddir fel arfer i dynnu sylw at risg pan fo gwybodaeth yn eistedd mewn un pen. Mae'n eiddo i ddosbarthiad gwybodaeth, nid graddfa unrhyw berson.

Mae gan fesurau cydweithio ochr dywyll. Mae cyfrif negeseuon, cyfarfodydd, neu gysylltiadau rhwydwaith fel mesur o gydweithio yn hawdd ac yn demtasiwn, ac mae'n llithro'n gyflym i fonitro cyfathrebu pobl. Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol i'r grŵp ac i breifatrwydd: pan fo "cydweithio" yn dod yn darged, mae pobl yn cynhyrchu gweithgarwch gweladwy, a phan fo'n dod yn wyliadwriaeth, maent yn rhoi'r gorau i siarad yn agored (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Mae'r mesurau yma felly yn edrych ar eitemau gwaith, trosglwyddiadau, a dibyniaethau, ac ar batrymau lefel tîm. Nid ydynt yn darllen negeseuon nac yn graddio unigolion.

Mae'r pwnc hwn yn cysylltu â mesurau llif Rhan 2, mesurau digwyddiadau a cheisiadau Rhan 3, a throsglwyddiadau cyflenwyr y rhan flaenorol (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau).

## Egwyddorion allweddol

- **Mesurwch y gwaith, nid y sgyrsiau.** Mae trosglwyddiadau, aros, a dibyniaethau yn eiddo i eitemau gwaith a thimau.
- **Mae llai o drosglwyddiadau yn well na throsglwyddiadau cyflymach.** Y trosglwyddiad gorau yw'r un nad yw'n digwydd.
- **Dewch â'r bobl at ei gilydd.** Mae cydweithio mewn amser real yn aml yn dileu cadwyn gyfan o aros.
- **Gwnewch ddibyniaethau yn weladwy, a'u lleihau.** Mapiwch hwy, cyfrwch hwy, a newidiwch ffiniau tîm neu bensaernïaeth lle maent yn brifo fwyaf.
- **Lledaenwch wybodaeth yn fwriadol.** Mae pwyntiau unigol o wybodaeth yn risgiau, ac mae rhannu yn weithgaredd dylunio.
- **Gwarchodwch ffocws.** Mae cydweithio sy'n llenwi pob awr â chyfarfodydd yn dinistrio'r amser i wneud y gwaith.
- **Cynhwyswch randdeiliaid yn barhaus.** Mae cwestiynau a atebir mewn oriau yn gwasanaethu'n well nag atebion a gesglir mewn cyfarfodydd wythnosol.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfrif trosglwyddiadau | Nifer y troeon y mae eitem waith yn newid tîm sy'n berchen cyn ei chwblhau | canolrif ac 85fed canradd trosglwyddiadau tîm-i-dîm fesul eitem a gwblhawyd, yn ôl math o eitem | trosglwyddiadau fesul eitem | Hanes neilltuo ITSM neu draciwr, wedi'i gyfanredu yn ôl tîm | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth; galluogi newid | Timau traws-swyddogaethol yn cario gwaith o'r dechrau i'r diwedd | Misol |
| Cyfran aros trosglwyddo | Cyfran amser treigl eitem a dreulir yn aros ar ôl trosglwyddiad cyn i'r gwaith ailddechrau | amser rhwng trosglwyddo a'r weithred gyntaf gan y tîm derbyn / cyfanswm amser treigl, canolrif ar draws eitemau | canran | Stampiau amser neilltuo a gweithgarwch | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth | Effeithlonrwydd llif; amser ciw | Misol |
| Cyfradd ailneilltuo | Cyfran yr eitemau a basiwyd rhwng timau fwy na dwywaith neu a ddychwelwyd i dîm blaenorol | eitemau a ailneilltuwyd fwy na dwywaith neu a ddychwelwyd / eitemau a gwblhawyd | canran | Hanes neilltuo | Rheoli digwyddiadau; rheoli problemau | Ail-wneud a gwaith yn bownsio | Misol |
| Oedi dibyniaeth | Yr amser y mae eitemau'n ei dreulio wedi'u rhwystro'n aros ar dîm arall | canolrif ac 85fed canradd diwrnodau mewn cyflwr rhwystredig-gan-dîm-arall, gyda'r ddibyniaeth wedi'i henwi | diwrnodau | Cyflwr rhwystredig y traciwr a maes dibyniaeth | Galluogi newid; rheoli rhyddhau a defnyddio | Oedran eitem gwaith rhwystredig | Misol |
| Cyfradd datrys cydweithredol | Cyfran y digwyddiadau a ddatryswyd gan bobl o sawl tîm yn gweithio gyda'i gilydd mewn amser real heb uwchgyfeirio dilyniannol | digwyddiadau gyda chydweithio amser real wedi'i gofnodi (er enghraifft sianel neu alwad a rennir) a ddatryswyd heb drosglwyddiad pellach / digwyddiadau o flaenoriaeth gymwys | canran | Cofnodion digwyddiadau gyda thag cydweithio | Rheoli digwyddiadau; rheoli digwyddiadau mawr | Heidio ar broblemau | Misol |
| Cwmpas gwybodaeth | Cyfran y cydrannau critigol gydag o leiaf nifer a nodwyd o aelodau tîm sy'n gallu eu gweithredu a'u newid | cydrannau critigol gydag o leiaf y nifer targed o bobl sy'n gallu gweithredu a newid / cydrannau critigol | canran | Map sgiliau a pherchnogaeth a gynhelir gan y tîm | Rheoli gwybodaeth; rheoli parhad gwasanaeth | Perchnogaeth a rennir a pherchnogaeth cod ar y cyd | Chwarterol |
| Amser ymateb rhanddeiliaid | Yr amser o gwestiwn tîm i randdeiliad nes bod ateb defnyddiadwy | canolrif ac 85fed canradd oriau o logio'r cwestiwn i gofnodi'r ateb | oriau | Log cwestiynau neu faes traciwr ar gyfer cwestiynau agored | Rheoli lefel gwasanaeth; rheoli perthynas busnes | Cynnwys rhanddeiliaid yn barhaus | Misol |

Cyfanredwch ar lefel tîm, ciw, neu wasanaeth, a pheidiwch byth ag adrodd yn ôl unigolyn. Mae cyfrif trosglwyddiadau yn eithrio neilltuadau awtomatig nad ydynt yn newid y tîm sy'n berchen. Mae cyfran aros yn dechrau pan neilltuir yr eitem i'r tîm derbyn ac yn gorffen ar eu gweithred gyntaf a gofnodwyd. Mae cwmpas gwybodaeth yn defnyddio barn y tîm ei hun ynghylch pwy all weithredu cydran, wedi'i hadolygu gyda'r tîm, ac nid yw byth yn graddio unigolion. Daw data cydweithio o dagiau a chofnodion eitemau, nid o ddarllen negeseuon.

## Argymhellion

### Mapiwch y trosglwyddiadau

**1. Lluniwch lwybr eitem nodweddiadol.** Dewiswch fath cyffredin o gais neu ddigwyddiad ac olrheiniwch ei lwybr o'r cyswllt cyntaf i'r datrysiad: pob tîm, pob ciw, pob aros. Defnyddiwch hanes y traciwr ar gyfer enghreifftiau go iawn, nid diagram y broses swyddogol. Mae'r map yn dangos lle mae gwaith yn aros a lle mae'n bownsio. Rhannwch ef gyda'r timau dan sylw, a gofynnwch iddynt nodi'r gwastraff y maent yn ei weld.

**2. Mesurwch drosglwyddiadau ac aros o hanes yr eitem waith.** Defnyddiwch stampiau amser neilltuo a gweithgarwch i gyfrifo cyfrif trosglwyddiadau, cyfran aros, a chyfradd ailneilltuo ar gyfer pob math o eitem. Edrychwch ar y dosbarthiad: gall y rhan fwyaf o eitemau basio unwaith, tra bo cynffon hir yn bownsio sawl gwaith. Y gynffon yw lle mae'r oediadau mwyaf a'r rhwystredigaeth fwyaf.

**3. Darllenwch y data gyda'r bobl sy'n gwneud y gwaith.** Gall cyfradd ailneilltuo uchel adlewyrchu perchnogaeth aneglur, gwybodaeth goll, neu brysbennu dilys. Gofynnwch i'r timau cyn dod i gasgliad. Maent yn gwybod pam mae eitemau'n bownsio, a beth fyddai'n ei atal.

### Lleihewch drosglwyddiadau ac aros

**4. Symudwch allu at y gwaith.** Lle mae llawer o eitemau yn mynd i ail dîm am weithred syml, gofynnwch a ellid rhoi'r wybodaeth, y mynediad, neu'r awtomeiddio i'r tîm cyntaf i'w wneud. Gall hunanwasanaeth a llyfrau rhedeg ddileu trosglwyddiadau cyfan (gweler pwnc 3.7, Metrigau hunanwasanaeth ac awtomeiddio). Byddwch yn ofalus nad yw symud gwaith yn gorlwytho'r tîm cyntaf yn unig.

**5. Defnyddiwch gydweithio yn lle uwchgyfeirio dilyniannol.** Ar gyfer digwyddiadau cymhleth neu frys, dewch â'r bobl berthnasol at ei gilydd mewn amser real, gydag un person yn cydlynu, yn lle pasio'r tocyn drwy haenau. Mae'r arfer hwn, a elwir yn aml yn heidio, yn dileu'r aros a'r colli cyd-destun y mae uwchgyfeirio haenog yn eu creu. Olrheiniwch y gyfradd datrys cydweithredol, ac edrychwch a yw canlyniadau a boddhad yn gwella (gweler pwnc 3.4, Metrigau digwyddiadau mawr).

**6. Eglurwch berchnogaeth ar ffiniau.** Ar gyfer pob gwasanaeth a chydran, nodwch pwy sy'n berchen arni, sut i'w cyrraedd, a beth sydd ei angen arnynt mewn trosglwyddiad. Mae templed byr o wybodaeth ofynnol, y cytunwyd arno gyda'r tîm derbyn, yn lleihau dychweliadau am fanylion coll. Adolygwch achosion ailneilltuo i ddod o hyd i fylchau perchnogaeth.

**7. Lleihewch ddibyniaethau lle maent yn brifo fwyaf.** Mapiwch y dibyniaethau rhwng timau, cyfrwch pa mor aml y mae pob un yn achosi oedi, a mynd i'r afael â'r gwaethaf. Mae dewisiadau yn cynnwys newid y bensaernïaeth, rhoi i dîm y gallu y mae'n parhau i aros amdano, neu ad-drefnu timau o amgylch gwasanaethau. Mae [timau traws-swyddogaethol](https://en.wikipedia.org/wiki/Cross-functional_team) sy'n cynnwys y sgiliau sydd eu hangen i gyflawni gwasanaeth o'r dechrau i'r diwedd yn lleihau dibyniaethau, ac maent yn dod â chydweithio parhaus i'r strwythur. Mae cyfraith Conway yn awgrymu y dylid newid strwythur a dyluniad gyda'i gilydd.

### Lledaenwch wybodaeth a chynnwys

**8. Gwnewch gwmpas gwybodaeth yn weladwy a'i wella.** Cadwch fap syml o gydrannau critigol a'r bobl sy'n gallu gweithredu a newid pob un. Chwiliwch am gydrannau sy'n hysbys i un person, a chynlluniwch barau, dogfennaeth, a chylchdroi i'w lledaenu. Trinwch y canlyniad fel risg i'r system. Y nod yw gwydnwch a chyflymder cynaliadwy i'r bobl sy'n gwybod fwyaf, gan na all person sy'n unig arbenigwr gymryd gwyliau.

**9. Cadwch randdeiliaid yn y ddolen yn barhaus.** Cytunwch sut y cyrhaeddir rhanddeiliaid gyda chwestiynau a pha mor gyflym y dylai atebion ddod. Mae tîm sy'n aros wythnos am benderfyniad ar fanylyn yn aros am y rhanddeiliad, ac mae'r gost yn real. Cofnodwch gwestiynau ac atebion, mesurwch yr amser ymateb, a'i ddefnyddio mewn sgyrsiau gyda rhanddeiliaid am eu cynnwys.

**10. Gwarchodwch amser ar gyfer gwaith ffocysedig.** Dylai cydweithio fod yn bwrpasol. Adolygwch y cyfarfodydd sy'n llenwi'r calendr, a gofynnwch ar gyfer pob un pa benderfyniad y mae'n ei gefnogi. Lleihewch nifer y bobl mewn sgyrsiau nad oes eu hangen arnynt, yn unol â chyfraith Brooks. Pârwch hyn â'r mesurau ffocws yn y pwnc cynharach ar iechyd tîm (gweler pwnc 9.1, Iechyd tîm a phrofiad datblygwyr).

### Cadwch hi'n onest

**11. Peidiwch â mesur cyfaint cyfathrebu.** Mae cyfrif negeseuon, cyfarfodydd, neu gysylltiadau rhwydwaith yn dweud ychydig am a yw pobl yn gweithio'n dda gyda'i gilydd, ac mae'n gwahodd monitro unigolion. Os yw eich tîm yn dewis defnyddio dadansoddi rhwydwaith cymdeithasol i ddeall sut mae gwybodaeth yn llifo, gwnewch hynny gyda chydsyniad, ar lefel grŵp, ac ar gyfer dysgu'r tîm ei hun, a byth i raddio unigolion.

**12. Adolygwch fesurau trosglwyddo gyda thimau a chyflenwyr.** Rhannwch y patrymau ar draws y timau a'r cyflenwyr dan sylw, a chytunwch ar un neu ddau o welliannau ar y cyd. Olrheiniwch a yw cyfrifon trosglwyddiadau ac aros yn disgyn. Ar gyfer ffiniau cyflenwyr, cynhwyswch y mesurau mewn adolygiadau ar y cyd (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfrif trosglwyddiadau | Cadw eitemau wedi'u neilltuo i un tîm tra bo eraill yn gwneud y gwaith; ailneilltuo i giw a rennir i osgoi cyfrif | Gwirio gweithgarwch gwirioneddol yn ôl tîm; cyfrif trosglwyddiadau yn ôl gweithgarwch, nid neilltuo yn unig |
| Cyfran aros trosglwyddo | Cofnodi gweithred gyntaf sy'n gydnabyddiaeth yn unig; neilltuo i'r tîm cywir yn hwyr | Diffinio "gweithred gyntaf" fel cam sylweddol; cymharu â boddhad ac amser datrys |
| Cyfradd ailneilltuo | Gwrthod ailneilltuo hyd yn oed pan fo'n anghywir; cau ac ailagor eitemau o dan dîm arall | Ansawdd datrys a chyfradd ailagor; samplu eitemau a fownsiodd |
| Oedi dibyniaeth | Peidio â chofnodi cyflwr rhwystredig; enwi'r ddibyniaeth anghywir | Cymharu ag amser beicio ac oedran eitem; adolygu'r maes dibyniaeth gyda thimau |
| Cyfradd datrys cydweithredol | Tagio pob digwyddiad fel cydweithredol; creu sianeli a rennir heb waith go iawn | Gwirio bod yr alwad neu'r sianel yn cynnwys y bobl a ddatrysodd; amser datrys a chanlyniadau |
| Cwmpas gwybodaeth | Rhestru pobl a allai mewn theori wneud y gwaith; chwyddo'r map | Tystiolaeth paru neu ddril; gofyn pwy a gyflawnodd y newid diwethaf mewn gwirionedd |
| Amser ymateb rhanddeiliaid | Logio cwestiynau'n hwyr; marcio ateb fel un a dderbyniwyd pan nad yw'n ddefnyddiadwy | Rhanddeiliad yn cadarnhau bod yr ateb yn ddefnyddiadwy; samplu cwestiynau |

Mae darlleniad iach yn llai o drosglwyddiadau ar gyfer eitemau cyffredin, aros byrrach ar y ffiniau sy'n weddill, llai o eitemau'n bownsio, dibyniaethau'n crebachu, mwy o ddigwyddiadau'n cael eu datrys gan bobl yn gweithio gyda'i gilydd, cydrannau critigol yn hysbys i sawl person, a rhanddeiliaid sy'n ateb mewn oriau.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Cymorth haenog gydag uwchgyfeirio | Arbenigo, rheoli mynediad | Trosglwyddiadau, aros, colli cyd-destun |
| Timau traws-swyddogaethol | Llai o drosglwyddiadau, perchnogaeth a rennir | Angen sgiliau eang; gall ddyblygu arbenigwyr |
| Datrys cydweithredol | Cyflymach, dysgu gwell | Tynnu sawl person ar unwaith; angen cydlynu |
| Uwchgyfeirio dilyniannol | Defnydd effeithlon o arbenigwyr | Arafach ar gyfer problemau cymhleth |
| Timau arbenigol canolog | Dyfnder arbenigedd, safonau cyson | Tagfeydd, ciwiau |
| Arbenigwyr wedi'u mewnosod | Mynediad cyflym | Ynysu; safonau anwastad |
| Diwylliant cyfarfodydd trwm | Ymwybyddiaeth a rennir | Bwyta ffocws; arafu gwaith |
| Cyfathrebu ysgrifenedig anghydamserol | Cadw ffocws; cofnodi penderfyniadau | Arafach ar gyfer materion brys neu amwys |

Yr ateb pragmatig yw cadw arbenigwyr lle mae dyfnder yn bwysig, dod â phobl at ei gilydd mewn amser real ar gyfer problemau cymhleth neu frys, lleihau trosglwyddiadau trwy allu a pherchnogaeth glir, a chydbwyso cyfarfodydd â ffocws gwarchodedig.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Olrheiniwch y digwyddiad neu gais diwethaf a fownsiodd rhwng timau. Ble wnaeth aros, a pham?**
Defnyddiwch hanes yr eitem. Marciwch bob trosglwyddiad ac aros. Dylai'r hwylusydd chwilio am wybodaeth goll, perchnogaeth aneglur, a chiwiau nad oes neb yn eu gwylio. Cytunwch ar un newid a fyddai wedi atal y bownsio.

**2. Pa dîm ydym ni'n aros amdano amlaf, a beth sydd ei angen arnynt gennym i fod yn gyflymach?**
Rhestrwch y dibyniaethau a'r oediadau y maent yn eu hachosi. Gwahoddwch y tîm arall i'r sgwrs, neu paratowch gwestiynau iddynt. Cytunwch ar newid i'r templed trosglwyddo neu'r cytundeb gweithio.

**3. Beth mae dim ond un neu ddau ohonom yn gwybod sut i'w wneud, a beth sy'n digwydd pan fyddant i ffwrdd?**
Enwch y cydrannau neu'r tasgau. Gofynnwch pa gynllun fyddai'n lledaenu'r wybodaeth: paru, dogfennaeth, cylchdroi. Dylai'r hwylusydd fod yn ofalus i drin hyn fel risg i'r system a mater o lwyth gwaith i'r arbenigwyr.

**4. Pryd weithiodd datrys problem gyda'n gilydd mewn amser real yn well na'i phasio ymlaen?**
Cofiwch enghraifft. Beth wnaeth iddo weithio: y bobl iawn, cydlynydd, golwg a rennir? Trafodwch pryd i ddefnyddio'r dull hwn a sut i'w alluogi, megis sianel sefydlog a rheolau ar bwy sy'n ymuno.

**5. Pa mor hir ydym ni'n aros am atebion gan ein rhanddeiliaid, a beth mae'n ei gostio?**
Edrychwch ar gwestiynau agored a'u hoedran. Trafodwch beth sy'n arafu atebion: argaeledd, cwestiynau aneglur, neu awdurdod aneglur. Cytunwch ar ddisgwyliad gyda rhanddeiliaid a ffordd o'i olrhain.

**6. Pa rai o'n cyfarfodydd y gellid eu disodli gan nodyn ysgrifenedig neu benderfyniad?**
Rhestrwch y cyfarfodydd rheolaidd ac ar gyfer pob un gofynnwch pa benderfyniad y mae'n ei gefnogi a phwy sydd angen bod yno. Canslwch neu fyrhewch un. Cytunwch i warchod bloc o amser heb gyfarfodydd.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn dal llawer o'r dibyniaethau ac yn teimlo'r aros. Dylent fapio eu dibyniaethau, gofyn am y galluoedd y maent yn parhau i aros amdanynt, rhannu gwybodaeth i osgoi pwyntiau unigol, a chadw rhanddeiliaid yn agos. Mae cyfansoddiad traws-swyddogaethol yn aml yn dileu'r oediadau mwyaf.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau a chymorth yn eistedd yng nghanol y trosglwyddiadau: maent yn derbyn, yn cyfeirio, ac yn datrys. Dylent gynnal gwybodaeth perchnogaeth glir, defnyddio cydweithio amser real ar gyfer problemau caled, a chofnodi trosglwyddiadau yn gywir. Maent yn gwybod pa ffiniau sy'n achosi'r boen fwyaf a gallant ddweud pa wybodaeth fyddai'n atal dychweliadau.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn siapio'r strwythur sy'n creu trosglwyddiadau. Dylent edrych ar ddata trosglwyddo a dibyniaeth wrth ddylunio timau ac ariannu, cefnogi timau traws-swyddogaethol lle maent yn helpu, ac osgoi mesurau cyfaint cyfathrebu. Dylai llywodraethu drin oediadau dro ar ôl tro ar un ffin fel mater strwythurol i'w drwsio.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn teimlo trosglwyddiadau fel cael eu pasio o gwmpas, ailadrodd eu hunain, ac aros. Dylid dweud wrthynt pwy sy'n berchen ar eu problem a'u cadw'n wybodus. Eu profiad o gael eu bownsio yw mesur uniongyrchol o ba mor dda y mae cydweithio'n gweithio, a dylid darllen eu hadborth ochr yn ochr â'r rhifau (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae grŵp TG manwerthwr cenedlaethol yn rhedeg desg gwasanaeth, tîm seilwaith, tîm platfform cymwysiadau, a sawl tîm cynnyrch. Mae defnyddwyr yn adrodd bod ceisiadau am y system pwynt gwerthu yn cymryd gormod o amser. Mae'r rhifau isod yn enghreifftiol.

Mae'r rheolwr gwasanaeth yn olrhain 60 o geisiadau diweddar. Mae'r cais canolrifol yn pasio drwy 3 thîm a'r 85fed canradd drwy 6. Yn yr achos canolrifol, mae 71 y cant o amser treigl yn cael ei dreulio'n aros ar ôl trosglwyddiad cyn i'r tîm derbyn weithredu. Ailneilltuir 22 y cant o geisiadau fwy na dwywaith, yn aml rhwng y timau seilwaith a phlatfform, sy'n credu bod y llall yn berchen ar y mater. Mae amser rhwystredig yn aros ar dîm arall yn ganolrif o 3 diwrnod ar gyfer ceisiadau sy'n cynnwys tystysgrifau, ac 8 diwrnod yn yr 85fed canradd. Mae gwybodaeth adnewyddu tystysgrifau'r platfform yn eistedd gydag un peiriannydd, a dim ond un person sy'n adnabod pob un o ddwy gydran hanfodol arall. Mae rhanddeiliaid mewn gweithrediadau siopau yn cymryd canolrif o 26 awr i ateb cwestiynau gan y tîm cyflawni.

Mae'r grŵp yn cytuno ar bedwar newid gyda'r timau. Mae tabl perchnogaeth byr yn nodi pa dîm sy'n berchen ar bob cydran o'r gwasanaeth pwynt gwerthu a pha wybodaeth y mae'n rhaid i drosglwyddiad ei chynnwys. Mae'r ddesg gwasanaeth yn cael mynediad at lyfr rhedeg ac awtomeiddio ar gyfer adnewyddu tystysgrifau, sy'n dileu trosglwyddiad cyffredin. Ar gyfer digwyddiadau blaenoriaeth, mae'r grŵp yn sefydlu sianel sefydlog a rheol bod y cydlynydd digwyddiad yn dod â'r bobl berthnasol i mewn ar unwaith, yn lle uwchgyfeirio yn ôl haenau. Mae'r tîm platfform yn paru ail a thrydydd person ar y broses dystysgrifau, ac yn cynllunio paru tebyg ar gyfer y ddwy gydran arall, gydag amser wedi'i warchod yn y cynllun. Mae'r tîm cyflawni a gweithrediadau siopau yn cytuno ar ateb o fewn y diwrnod ar gyfer cwestiynau rhwystro, wedi'i olrhain mewn log cwestiynau.

Dri mis yn ddiweddarach, mae'r cais canolrifol yn pasio drwy 2 dîm, mae'r gyfran aros yn disgyn i 38 y cant, a'r gyfradd ailneilltuo i 9 y cant. Mae gan ceisiadau sy'n gysylltiedig â thystysgrifau amser rhwystredig canolrifol o lai na diwrnod. Mae cwmpas gwybodaeth ar gydrannau critigol yn codi o 52 y cant i 81 y cant. Mae amser ymateb canolrifol gweithrediadau siopau yn disgyn i 7 awr. Gofynnir i bennaeth TG am fesur o faint mae timau'n cyfathrebu. Mae'r rheolwr gwasanaeth yn esbonio bod cyfaint negeseuon yn dweud ychydig am a yw gwaith yn llifo, ac y gallai ei olrhain danseilio ymddiriedaeth, ac mae'n cynnig y mesurau trosglwyddo ac aros yn lle hynny. Cofnodir y penderfyniad, ac ychwanegir y tabl perchnogaeth at ddisgrifiad y gwasanaeth.

## Y golwg fesul sector

**Busnes newydd.** Mae timau bach yn cydweithio'n naturiol, ac mae trosglwyddiadau'n ymddangos wrth i arbenigwyr ddod i'r amlwg. Cadwch dimau'n draws-swyddogaethol cyhyd â phosibl, dogfennwch berchnogaeth yn ysgafn, a gwyliwch am wybodaeth a ddelir gan un person. Peidiwch â mewnforio cymorth haenog yn rhy fuan.

**Busnes bach.** Gall un neu ddau o bobl gwmpasu popeth, a'r risg fwyaf yw dibyniaeth arnynt. Rhannwch wybodaeth trwy lyfrau rhedeg syml a gorchudd ar gyfer absenoldeb. Trosglwyddiadau i gyflenwyr yw'r brif ffin, felly cadwch gysylltiadau a llwybrau uwchgyfeirio clir.

**Menter fawr.** Mae graddfa yn creu llawer o dimau, haenau, a chyflenwyr, ac mae trosglwyddiadau'n lluosi. Mapiwch lwybrau eitemau mwyaf cyffredin, dyluniwch ffiniau tîm o amgylch gwasanaethau, a defnyddiwch rolau cydlynu ar gyfer digwyddiadau traws-dîm. Rhannwch ddata trosglwyddo ar draws timau fel bod ffiniau'n cael sylw ar y cyd.

**Llywodraeth a'r sector cyhoeddus.** Mae cyfrifoldeb yn aml wedi'i rannu ar draws asiantaethau, contractwyr, a ffiniau cyfreithiol, ac mae trosglwyddiadau'n cynnwys caffael a chymeradwyo ffurfiol. Gwnewch y tabl perchnogaeth yn benodol, defnyddiwch adolygiadau ar y cyd gyda chontractwyr, a defnyddiwch sianeli a rennir ar gyfer digwyddiadau sy'n croesi ffiniau (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau).

## Yr achos busnes: cymhellion, ROI a TCO

Y costau yw'r ymdrech i echdynnu a dadansoddi hanes neilltuo, amser i dimau olrhain llwybrau a chytuno ar berchnogaeth, cost traws-hyfforddi, ac unrhyw offer ar gyfer cydweithio amser real. Mae ad-drefnu timau yn benderfyniad mwy gyda'i gostau ei hun.

Yr enillion yw amserau byrrach i ddatrys a chyflawni, llai o ail-wneud o eitemau a fownsiodd, llai o risg o bwyntiau unigol o wybodaeth, ac amgylchedd gwaith tawelach. Adeiladwch yr achos o'ch data eich hun: cyfran yr amser treigl a dreulir yn aros, nifer yr eitemau sy'n bownsio, cost oediadau ar y ffin waethaf, ac effaith absenoldebau pobl allweddol ar ddigwyddiadau'r gorffennol. Osgowch ddyfynnu ffigurau cyhoeddedig am gost trosglwyddiadau oni allwch olrhain y ffynhonnell a'r cyd-destun. Cyfrwch gost y newidiadau, a'i gymharu â'r oedi a dynnwyd (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Cyfrif negeseuon neu gyfarfodydd.** Mae'n gwobrwyo sŵn ac yn gwahodd gwyliadwriaeth. Mesurwch lif gwaith.
- **Optimeiddio cyflymder pob trosglwyddiad.** Y nod yw llai o drosglwyddiadau. Tynnwch hwy lle gallwch.
- **Beio'r tîm derbyn am aros.** Yn aml y ciw a'r strwythur yw'r achos. Edrychwch ar y system.
- **Uwchgyfeirio yn ddiofyn.** Mae haenau dilyniannol yn ychwanegu aros. Dewch â phobl at ei gilydd ar gyfer problemau cymhleth.
- **Perchnogaeth aneglur.** Mae eitemau'n bownsio. Cyhoeddwch dabl perchnogaeth a'i gadw'n gyfredol.
- **Arbenigwyr arwrol.** Mae pwyntiau unigol o wybodaeth yn risg ac yn faich. Lledaenwch wybodaeth yn fwriadol.
- **Cyfarfodydd fel cydweithio.** Gallant wthio gwaith allan. Adolygwch hwy yn erbyn penderfyniadau.
- **Trin cwmpas gwybodaeth fel graddfa unigol.** Mae'n dod yn safle. Cadwch ef yn fesur system.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Gwelededd trosglwyddiadau | Hanesion | Llwybrau wedi'u lluniadu ar gyfer ychydig o wasanaethau | Cyfrif trosglwyddiadau, cyfran aros, ac ailneilltuo wedi'u mesur o hanes | Mesurau wedi'u hadolygu gyda thimau a'u cysylltu â chanlyniadau | Golwg a rennir ar draws timau a chyflenwyr; ffiniau wedi'u hailgynllunio o ddata |
| Lleihau trosglwyddiadau | Uwchgyfeirio yn ddiofyn | Rhai llyfrau rhedeg a thempledi | Tablau perchnogaeth; gallu wedi'i symud i'r tîm cyntaf; cydweithio ar gyfer problemau caled | Dibyniaethau wedi'u mapio a'u lleihau; datrys cydweithredol wedi'i olrhain | Timau wedi'u trefnu o amgylch gwasanaethau gydag ychydig iawn o ddibyniaethau ar draws y sefydliad |
| Gwybodaeth a rhanddeiliaid | Arbenigwyr yn cario popeth | Rhannu anffurfiol | Cwmpas gwybodaeth wedi'i fapio; cwestiynau rhanddeiliaid wedi'u logio | Cwmpas ac amserau ymateb wedi'u rheoli; paru wedi'i gynllunio | Gwybodaeth a phenderfyniadau'n llifo'n rhydd ar draws timau, cyflenwyr, a rhanddeiliaid |

## Rhestr wirio

- [ ] Mae llwybr eitem nodweddiadol wedi'i olrhain o hanes go iawn y traciwr.
- [ ] Mesurir cyfrif trosglwyddiadau, cyfran aros, a chyfradd ailneilltuo fesul math o eitem.
- [ ] Cyhoeddir perchnogaeth pob gwasanaeth a chydran a'i chadw'n gyfredol.
- [ ] Mae templed trosglwyddo yn nodi'r wybodaeth sydd ei hangen ar y tîm derbyn.
- [ ] Mae digwyddiadau cymhleth neu frys yn defnyddio cydweithio amser real gyda chydlynydd.
- [ ] Mapiwyd dibyniaethau traws-dîm, ac mae'r gwaethaf yn cael eu lleihau.
- [ ] Mapiwyd cwmpas gwybodaeth cydrannau critigol, gyda chynllun i'w ledaenu.
- [ ] Logir cwestiynau rhanddeiliaid ac adolygir amserau ymateb.
- [ ] Nid yw unrhyw fesur yn cyfrif negeseuon, cyfarfodydd, na chyfathrebu unigol.
- [ ] Rhennir canlyniadau gyda'r timau a'r cyflenwyr dan sylw.

## Anogwyr AI

**Dadansoddwch lwybr eitemau gwaith.**

```text
Dyma hanesion neilltuo dienw ar gyfer [nifer] o [math o eitem]: eitem, dilyniant
timau, stampiau amser neilltuo a gweithred gyntaf: [gludwch]. Cyfrifwch neu
disgrifiwch gyfrifon trosglwyddiadau ac aros, nodwch y llwybrau cyffredin a'r
gynffon hir, ac awgrymwch resymau tebygol dros aros a bownsio, gyda chwestiynau
i'w gofyn i'r timau. Peidiwch â dod i unrhyw gasgliad am unigolion. Rhestrwch eich
rhagdybiaethau.
```

**Drafftiwch dabl perchnogaeth.**

```text
Drafftiwch dabl perchnogaeth ar gyfer y gwasanaeth [enw] gyda'r cydrannau a'r
timau hyn: [rhestr]. Ar gyfer pob cydran cynhwyswch y tîm sy'n berchen, sut i'w
cyrraedd, beth y mae'n rhaid i drosglwyddiad ei gynnwys, a'r llwybr uwchgyfeirio.
Fflagiwch gydrannau lle mae perchnogaeth yn edrych yn aneglur neu wedi'i rhannu.
Cadwch ef i un dudalen. Rhestrwch eich rhagdybiaethau a chwestiynau i'r timau.
```

**Cynlluniwch ledaenu gwybodaeth.**

```text
Ein cydrannau critigol a nifer y bobl sy'n gallu gweithredu pob un yw:
[gludwch]. Cynigiwch gynllun i ledaenu gwybodaeth ar gyfer cydrannau a adwaenir
gan lai na [nifer] o bobl: paru, dogfennaeth, driliau, a chylchdroi. Awgrymwch
sut i warchod llwyth gwaith yr arbenigwyr yn ystod y cynllun a sut i olrhain
cynnydd heb raddio unigolion. Rhestrwch eich rhagdybiaethau a risgiau.
```

**Dyluniwch ddull digwyddiad cydweithredol.**

```text
Dyluniwch ddull ysgafn ar gyfer datrys cydweithredol mewn amser real o
ddigwyddiadau blaenoriaeth yn [math o sefydliad] gyda [timau]. Cynhwyswch sut i
agor gofod a rennir, pwy sy'n cydlynu, pwy a wahoddir, beth a gofnodir, a sut i
osgoi tynnu gormod o bobl i mewn. Cynhwyswch fesurau i ddweud a yw'n helpu.
Rhestrwch eich rhagdybiaethau a rhybuddion.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig trosglwyddo neu gydweithio.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig cydweithio yn mesur gwaith ac nid unigolion, gyda'i ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Mae'r rhan fwyaf o oedi yn eistedd yn yr aros rhwng trosglwyddiadau, felly mesurwch gyfrif trosglwyddiadau, cyfran aros, ac ailneilltuo o hanes eitemau gwaith.
- Lleihewch drosglwyddiadau drwy symud gallu at y gwaith, egluro perchnogaeth, a mapio a thorri dibyniaethau.
- Dewch â'r bobl iawn at ei gilydd mewn amser real ar gyfer problemau cymhleth neu frys.
- Lledaenwch wybodaeth am gydrannau critigol, a thrinwch bwyntiau unigol o wybodaeth fel risg system.
- Cadwch randdeiliaid yn gysylltiedig yn barhaus, gydag atebion cyflym i gwestiynau rhwystro.
- Peidiwch byth â mesur cyfaint cyfathrebu na graddio unigolion ar gydweithio.

## Cyfeiriadau a darllen pellach

1. Conway, M. E., "How Do Committees Invent?" *Datamation*, 14(4), 1968.
2. Skelton, M., and Pais, M., *Team Topologies: Organizing Business and Technology Teams for Fast Flow*, IT Revolution, 2019.
3. Brooks, F. P., *The Mythical Man-Month: Essays on Software Engineering*, Addison-Wesley, 1975 (anniversary edition 1995).
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Bottleneck (production)](https://en.wikipedia.org/wiki/Bottleneck_(production)).
8. Wikipedia, [Conway's law](https://en.wikipedia.org/wiki/Conway%27s_law).
9. Wikipedia, [Dependency (project management)](https://en.wikipedia.org/wiki/Dependency_(project_management)).
10. Wikipedia, [Brooks's law](https://en.wikipedia.org/wiki/Brooks%27s_law).
11. Wikipedia, [Bus factor](https://en.wikipedia.org/wiki/Bus_factor).
12. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
13. Wikipedia, [Cross-functional team](https://en.wikipedia.org/wiki/Cross-functional_team).
