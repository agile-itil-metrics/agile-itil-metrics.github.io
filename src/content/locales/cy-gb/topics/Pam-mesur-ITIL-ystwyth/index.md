# Pam mesur ITIL ystwyth

**Mae angen set fach o rifau gonest ar dimau sy'n adeiladu ac yn rhedeg gwasanaethau i weld a yw eu gwaith yn helpu defnyddwyr ac yn gwella, ac mae ystwyth ac ITIL yn cyflenwi hanner gwahanol o'r darlun hwnnw.**

## Crynodeb a chymhelliant

Mae pob tîm sy'n adeiladu ac yn rhedeg gwasanaeth yn gwneud penderfyniadau drwy'r dydd: beth i weithio arno nesaf, a yw rhyddhad yn ddiogel, a oes angen person arall ar y ddesg gwasanaeth, ai un tro neu batrwm oedd toriad. Heb fesur, mae'r penderfyniadau hynny'n dibynnu ar gof, hanesion, a phwy bynnag a siaradodd ddiwethaf. Gyda'r mesur anghywir, gallant fod yn waeth na hynny, oherwydd mae gan rif awdurdod nad oes gan farn. Mae'r pwnc hwn yn esbonio pam mae mesur yn werth yr ymdrech, beth y mae pob traddodiad yn ei gyfrannu, a beth yw'r gost o'i gael yn anghywir.

Mae dau draddodiad yn cwrdd yn y llyfr hwn. Mae [datblygu meddalwedd ystwyth](https://en.wikipedia.org/wiki/Agile_software_development) yn set o werthoedd ac arferion, a nodir ym Maniffesto Ystwyth 2001, sy'n ffafrio meddalwedd sy'n gweithio, cydweithio agos â chwsmeriaid, ac ymateb i newid. Mae ei arferion mesur yn empirig ac yn lleol: mae tîm yn archwilio ei lif ei hun, yn edrych ar yr hyn a gyflawnodd, ac yn addasu. Mae [ITIL](https://en.wikipedia.org/wiki/ITIL), sef Llyfrgell Seilwaith Technoleg Gwybodaeth yn wreiddiol, yn gorff o arweiniad ar gyfer [rheoli gwasanaethau TG](https://en.wikipedia.org/wiki/Information_technology_service_management) (ITSM), yr arfer o ddylunio, cyflawni a gwella gwasanaethau TG. Mae ei arferion mesur yn canolbwyntio ar wasanaethau ac yn cael eu rhannu: lefelau gwasanaeth y cytunwyd arnynt, catalog o wasanaethau (sillafiad ITIL ei hun yn Saesneg yw "service catalogue"), a disgyblaeth gwelliant parhaus. Yn ITIL 4, argraffiad 2019 o'r fframwaith, mae mesur ac adrodd yn un o'r arferion rheoli cyffredinol, ac mae gwelliant parhaus yn arfer ac yn egwyddor arweiniol. Gwiriwch gyhoeddiadau cyfredol perchennog y fframwaith cyn dibynnu ar fanylion fersiwn, oherwydd mae'r fframwaith yn parhau i esblygu.

Mae'r ddau olwg yn wahanol mewn ffyrdd defnyddiol. Mae ystwyth yn gofyn "a ydym yn adeiladu'r peth iawn, a pha mor esmwyth y mae gwaith yn llifo?" Mae ITIL yn gofyn "a yw'r gwasanaeth yn diwallu anghenion y bobl sy'n ei ddefnyddio, ac a yw'n ddibynadwy, yn gefnogadwy ac yn fforddiadwy?" Gall tîm sy'n mesur llif yn unig gludo'n gyflym i wasanaeth y mae defnyddwyr yn ei gael yn annibynadwy. Gall tîm sy'n mesur lefelau gwasanaeth yn unig daro pob nod wrth gyflwyno newid mor araf nes bod y gwasanaeth yn peidio â bod yn berthnasol. Tyfodd mudiad [DevOps](https://en.wikipedia.org/wiki/DevOps) o'r sylw bod adeiladu a rhedeg yn un system, ac felly y dylid darllen y rhifau sy'n ei disgrifio gyda'i gilydd. Mae [peirianneg dibynadwyedd safleoedd](https://en.wikipedia.org/wiki/Site_reliability_engineering) (SRE), y ddisgyblaeth a ddisgrifiodd Google yn ei lyfrau cyhoeddedig, yn ychwanegu cyswllt penodol rhwng targedau dibynadwyedd a chyflymder newid.

Mae tri thymor yn codi dro ar ôl tro drwy'r llyfr. Mae **mesur** (measure) yn disgrifio rhywbeth am y gwaith neu'r gwasanaeth. Mae **metrig** (metric) yn fesur â fformiwla, uned a ffynhonnell data wedi'u diffinio, fel bod dau berson sy'n ei gyfrifo yn cael yr un ateb. Mae **rheilen warchod** (guardrail) yn ail fesur neu arfer, wedi'i ddewis ymlaen llaw, sy'n symud os caiff y cyntaf ei chwarae. Y rhybudd y tu ôl i reiliau gwarchod yw [cyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law): pan fydd mesur yn dod yn nod, mae pobl yn dechrau llywio'r rhif yn hytrach na'r gwaith (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

### Pwrpas mesur

Mae mesur yn ennill ei le pan fydd yn gwneud un o bedair swydd.

- **Gweld.** Gwneud gwaith anweledig yn weladwy: y ciw nad oes neb yn edrych arno, y patrwm digwyddiadau ar draws tri thîm, y newid sy'n aros naw diwrnod am slot.
- **Penderfynu.** Hysbysu dewis rhwng dau opsiwn, megis awtomeiddio math o gais neu drwsio'r nam sy'n ei achosi.
- **Dysgu.** Profi cred. Os yw'r tîm yn credu y bydd arfer adolygu newydd yn lleihau ailwaith, gall rhif ddweud a wnaeth.
- **Cyfrif.** Rhoi cyfrif gonest i ddefnyddwyr, cwsmeriaid ac arweinwyr o'r hyn y mae'r gwasanaeth yn ei gyflawni, fel bod ymddiriedaeth yn seiliedig ar dystiolaeth.

Mae rhif nad yw'n gwneud yr un o'r pedair swydd hyn yn gost ychwanegol. Mae pynciau diweddarach yn ailadrodd y prawf hwn ar gyfer pob teulu o fetrigau.

### Cost mesur dim byd

Nid yw tîm sy'n mesur dim byd yn rhydd o rifau. Mae'n rhedeg ar rai ymhlyg: y gŵyn uchaf, y toriad diweddaraf, teimlad y rheolwr o ba mor brysur y mae pobl yn edrych. Daw dwy gost yn sgil hynny.

- **Adborth araf.** Mae problemau y byddai tuedd wedi'u dangos yn gynnar yn cyrraedd fel syrpreisys. Mae cynnydd graddol mewn cysylltiadau dro ar ôl tro yn edrych fel anlwc nes ei fod yn argyfwng.
- **Dim sail ar gyfer gwella.** Ni all tîm ddweud a helpodd newid, felly ni all ddysgu pa newidiadau i'w hailadrodd.

### Cost mesur y pethau anghywir

Mae mesur y pethau anghywir yn aml yn waeth na mesur dim byd, oherwydd mae'n cyfeirio ymdrech â hyder ffug. Mae cyfrif tocynnau wedi'u cau, llinellau cod, pwyntiau stori a gwblhawyd, ac oriau a logiwyd yn hawdd eu casglu ac yn hawdd eu siartio, ac mae pob un yn fesur o weithgarwch, nid o werth i ddefnyddiwr. Mae'r ymchwil y tu ôl i fframwaith SPACE (Forsgren a chydweithwyr, 2021) yn dadlau na ellir dal cynhyrchiant mewn un dimensiwn, a bod cyfrif gweithgarwch a ddefnyddir ar ei ben ei hun yn camarwain.

## Egwyddorion allweddol

- **Mesurwch ar gyfer penderfyniad.** Mae pob metrig yn ateb cwestiwn ysgrifenedig ac yn hysbysu dewis a enwir. Os na all neb ddweud pa un, ymddeolwch ef.
- **Cysylltwch y ddau olwg.** Darllenwch lif cyflawni ac iechyd gwasanaeth ar yr un dudalen, fel na phrynir cyflymder ar draul sefydlogrwydd nac i'r gwrthwyneb.
- **Mesurwch ganlyniadau yn gyntaf, gweithgarwch yn ail.** Defnyddwyr yn well eu byd yw'r prawf. Mae cyfrif gweithgarwch yn cefnogi'r stori ond nid yw'n ei hadrodd (gweler pwnc 1.3, Canlyniadau yn hytrach nag allbwn: dewis beth i'w fesur).
- **Disgrifiwch dimau a gwasanaethau, byth unigolion.** Mae graddio unigolion yn llygru'r data ac yn niweidio cydweithio.
- **Dechreuwch yn fach a thyfwch.** Mae llond llaw o fetrigau y gellir ymddiried ynddynt yn well na wal o rai a lywodraethir yn wan.
- **Dangoswch i'r tîm yn gyntaf.** Y bobl sy'n gwneud y gwaith yw'r gynulleidfa gyntaf, a'r gwiriad gorau ar a yw'r data'n gywir.
- **Disgwyliwch newid.** Caiff diffiniadau, metrigau a thargedau eu diwygio pan fyddant yn peidio â hysbysu penderfyniadau.

## Diffiniadau metrigau

Mae'r metrigau isod yn disgrifio iechyd yr arfer mesur ei hun, sef lle mae "pam mesur" yn dod yn brofadwy. Mae tîm sy'n gallu dangos y rhain yn mesur am resymau. Mae pob fformiwla sy'n seiliedig ar amser neu gyfrif yn nodi ei ffiniau.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfran metrigau sy'n gysylltiedig â phenderfyniad | Cyfran y metrigau a adroddir sydd â chwestiwn ysgrifenedig a phenderfyniad a enwir y maent yn ei hysbysu | metrigau â chwestiwn a phenderfyniad wedi'u cofnodi / metrigau a adroddwyd ar y dangosfwrdd ar ddiwedd y chwarter | canran | Cofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau) | Mesur ac adrodd; gwelliant parhaus | Camau gweithredu o ôl-sylliadau; cytundebau gweithio | Chwarterol |
| Cwmpas llinell sylfaen | Cyfran y gwasanaethau a'r timau o fewn cwmpas sydd â gwerth cychwynnol wedi'i gofnodi ar gyfer pob un o'r mesurau craidd y cytunwyd arnynt | parau gwasanaeth-a-mesur â llinell sylfaen wedi'i chofnodi yn y 12 mis diwethaf / holl barau gwasanaeth-a-mesur o fewn cwmpas; eithrir gwasanaethau y tu allan i'r catalog | canran | Catalog gwasanaethau a chofrestr metrigau | Rheoli lefelau gwasanaeth; mesur ac adrodd | Adolygiad rhanddeiliaid; dangosfyrddau tîm | Chwarterol |
| Ymdrech mesur | Amser staff a dreulir yn casglu, glanhau ac adrodd metrigau â llaw | oriau wedi'u logio i gasglu ac adrodd â llaw yn ystod y mis, heb gynnwys amser a dreuliwyd yn gweithredu ar ganfyddiadau | oriau fesul tîm y mis | Nodiadau amser neu arolwg tîm byr | Mesur ac adrodd | Cyllideb amser ôl-sylliad | Chwarterol |
| Oedran data adeg adolygu | Pa mor hen yw'r pwynt data diweddaraf pan fydd y grŵp yn cyfarfod i'w drafod | stamp amser y cyfarfod adolygu llai stamp amser y pwynt data diweddaraf ar y dangosfwrdd; cyfrifir fesul metrig, adroddir fel canolrif a'r 85fed canradd | diwrnodau | Log adnewyddu'r dangosfwrdd | Mesur ac adrodd | Adolygiad rhanddeiliaid | Fesul adolygiad |
| Dilyniant gwelliannau | Cyfran y camau gwella a godwyd o adolygiadau metrigau sy'n cael eu cwblhau neu eu cau'n fwriadol o fewn y ffenestr y cytunwyd arni | camau wedi'u cwblhau neu eu cau gyda rheswm o fewn 90 diwrnod i'w codi / camau a godwyd yn y cyfnod, wedi'u cyfrif o'r dyddiad a logiwyd yn y gofrestr gwelliannau | canran | Cofrestr gwelliant parhaus neu ôl-groniad | Gwelliant parhaus | Eitemau gweithredu ôl-sylliad | Chwarterol |

Mae ymdrech mesur yn cyfrif gwaith â llaw yn unig yn fwriadol. Mae amser a dreulir yn darllen y data ac yn penderfynu beth i'w wneud yn sail i'r ymarfer ac fe'i heithrir, fel bod awtomeiddio casglu yn ymddangos fel cynnydd.

## Argymhellion

### Dechreuwch gyda diben

**1. Ysgrifennwch y rheswm cyn y metrig.** Ar gyfer pob mesur arfaethedig, ysgrifennwch un frawddeg: "Rydym yn mesur X i benderfynu Y." Os na ellir ysgrifennu'r frawddeg, nid yw'r mesur yn barod. Mae'r un arfer hwn yn cael gwared ar y rhan fwyaf o fetrigau gwagedd cyn iddynt fynd ar ddangosfwrdd.

**2. Enwch y gynulleidfa a'r penderfyniad.** Mae'r un rhif yn golygu pethau gwahanol i dîm, perchennog gwasanaeth a swyddog gweithredol. Ysgrifennwch pwy fydd yn ei ddarllen a pha ddewis y mae'n ei gefnogi. Gall golwg gweithio tîm gario ugain mesur. Dylai'r hyn sy'n mynd i'r arweinyddiaeth fod yn set fach, sefydlog (gweler pwnc 11.1, Dylunio dangosfwrdd metrigau gwasanaeth).

### Defnyddiwch y ddau draddodiad

**3. Paru mesur llif â mesur gwasanaeth.** Dewiswch o leiaf un mesur o sut mae gwaith yn symud, megis amser arweiniol neu oedran eitem waith (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif), ac o leiaf un mesur o sut mae'r gwasanaeth yn ymddwyn, megis ailadrodd digwyddiadau neu ddangosydd lefel gwasanaeth (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau). Mae eu dangos gyda'i gilydd yn atal y methiant cyffredin lle mae grwpiau gwahanol yn rheoli cyflymder a sefydlogrwydd gan edrych ar siartiau gwahanol.

**4. Trinwch gyflawni a gweithrediadau fel un system.** Mae ymchwil a grynhoir yn *Accelerate* (Forsgren, Humble a Kim, 2018) yn adrodd y gellir disgrifio perfformiad cyflawni meddalwedd â phedwar mesur sy'n cydbwyso trwybwn a sefydlogrwydd. Pa bynnag set a fabwysiadir gan dîm, cadwch rifau sy'n gysylltiedig â newid a digwyddiadau yn ddigon agos fel bod cynnydd yn un yn ysgogi golwg ar y llall (gweler pwnc 2.8, Metrigau DORA).

### Mesurwch yn onest

**5. Ffafriwch ychydig o fesurau sy'n tynnu yn erbyn ei gilydd.** Mae un rhif yn gwahodd gor-optimeiddio, felly dewiswch barau fel cyflymder gydag ansawdd, cyfaint gyda chanlyniad, a chost gyda phrofiad. Nid oes angen i'r pâr fod yn fformiwla. Mae angen iddo ymddangos ar yr un dudalen.

**6. Cofnodwch linell sylfaen cyn newid unrhyw beth.** Heb werth cychwynnol, stori yw honiad o welliant. Casglwch ychydig wythnosau o ddata yn gyntaf, gan gynnwys ymlediad y gwerthoedd yn ogystal â'r cyfartaledd (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Mae llinellau sylfaen hefyd yn amddiffyn timau: maent yn dangos bod chwarter gwael wedi dilyn newid yn y ffordd y cyfrifwyd gwaith yn hytrach na gostyngiad mewn perfformiad.

### Adeiladwch yr arfer

**7. Adolygwch ar rythm sy'n cyd-fynd â'r penderfyniad.** Mae mesurau llif yn gweddu i sgwrs wythnosol, neu un a gynhelir ym mhob cam o gyflawni meddalwedd parhaus. Mae mesurau lefel gwasanaeth a chost yn gweddu i un fisol neu chwarterol. Mae metrig a adolygir ar y rhythm anghywir naill ai'n creu sŵn neu'n colli'r foment pan fyddai gweithredu wedi helpu.

**8. Caewch y ddolen gyda gwaith gwella.** Mae adolygiad sy'n gorffen gyda "diddorol" wedi gwastraffu ei ddata. Gorffennwch bob adolygiad gydag un neu ddau gam gweithredu a enwir, perchennog a dyddiad, ac olrheiniwch eu cwblhau. Dau enw ar yr un ddisgyblaeth yw arfer gwelliant parhaus ITIL a'r ôl-sylliad ystwyth (gweler pwnc 9.5, Metrigau gwelliant parhaus).

**9. Dywedwch beth na fyddwch yn defnyddio'r rhifau ar ei gyfer.** Dywedwch yn blaen na ddefnyddir metrigau tîm i raddio na gwobrwyo unigolion, ac y caiff diffiniadau eu newid yn agored. Mae pobl yn cydweithredu â mesur pan fyddant yn ymddiried yn y ffordd y caiff ei ddefnyddio (gweler pwnc 11.3, Cyflwyno metrigau heb fagu ofn).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

Gellir chwarae'r system hyd yn oed gyda metrigau am fesur. Mae pob rhes isod yn paru'r metrig â'r ffordd arferol y caiff ei blygu a'r gwiriad a fyddai'n ei ddatgelu.

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfran metrigau sy'n gysylltiedig â phenderfyniad | Ysgrifennu cwestiwn a phenderfyniad credadwy ar gyfer pob metrig ar ôl y ffaith i godi'r ganran | Samplo'r log penderfyniadau: gofyn beth a newidiodd oherwydd y metrig, a gwirio dyddiad ysgrifennu'r cofnod yn erbyn dyddiad ymddangosiad cyntaf y metrig |
| Cwmpas llinell sylfaen | Cofnodi llinell sylfaen unwaith a byth ei hadnewyddu, neu ddewis cyfnod tawel cyfleus | Gofyn am ystod dyddiadau a maint sampl wedi'u nodi gyda phob llinell sylfaen; adolygu llinellau sylfaen ar ôl newidiadau mawr i'r gwasanaeth |
| Ymdrech mesur | Symud gwaith casglu oddi ar y llyfrau drwy ei wneud heb ei logio, neu ei symud i gyflenwr | Cymharu ag arolwg byr o ba mor hir y mae pobl yn dweud y mae adrodd yn ei gymryd; cynnwys ymdrech cyflenwyr yn yr adolygiad |
| Oedran data adeg adolygu | Adnewyddu'r dangosfwrdd ychydig cyn y cyfarfod tra bod y cofnodion sylfaenol yn dal yn hen | Adrodd oedran y cofnod diweddaraf yn y system ffynhonnell yn ogystal â'r amser adnewyddu |
| Dilyniant gwelliannau | Cau camau gweithredu gyda'r rheswm "dim yn berthnasol mwyach" i daro'r ganran, neu hollti camau yn ddarnau dibwys | Adolygu'r rhesymau a roddir dros gau camau bob chwarter, ac olrhain a symudodd y mesur yr oedd y cam yn ei dargedu |

Darlleniad iach yw arfer sy'n amlwg yn fyw. Mae metrigau'n ymuno â'r gofrestr ac yn ei gadael am resymau ysgrifenedig, mae llinellau sylfaen yn ffres, mae camau gweithredu o adolygiadau wedi'u gorffen neu eu gollwng yn onest, ac mae'r tîm yn treulio mwy o amser yn gweithredu ar y data nag yn ei gasglu. Mae sgôr perffaith ar bob rhes yn gymhelliad i samplo'r cofnodion sylfaenol, nid yn rheswm i ddathlu.

## Cyfaddawdau: manteision ac anfanteision

| Dewis | Cryfder | Gwendid |
| --- | --- | --- |
| Mesur ychydig | Cost isel; risg isel o chwarae'r system; ymddiriedaeth uchel | Mannau dall; mae penderfyniadau'n dibynnu ar hanesion |
| Mesur llawer | Cwmpas eang; rhybudd cynnar ar sawl ffrynt | Mae sylw'n cael ei wanhau; llywodraethu tenau; mae cost casglu'n tyfu |
| Golwg gysylltiedig | Cydbwyso cyflymder a sefydlogrwydd; cefnogi perchnogaeth a rennir | Angen diffiniadau y cytunwyd arnynt ar draws timau a lle cyffredin i edrych |
| Targedau ar fetrigau | Rhoi cyfeiriad a brys | Gwahodd chwarae'r system; angen rheilen warchod pâr |
| Metrigau heb dargedau | Annog trafodaeth onest | Gall ddrifftio'n adroddiadau na weithredir arnynt |

Yr ateb ymarferol yw set fach gysylltiedig, gyda thargedau'n cael eu defnyddio'n gynnil ar gyfer amodau a ddeellir yn dda ac y mae defnyddwyr wedi gofyn amdanynt, megis amcan lefel gwasanaeth. Cwestiwn i'w drafod yw popeth arall. Nid y nod yw tynnu barn o benderfyniadau ond ei bwydo â thystiolaeth well.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa benderfyniad a wnaethom y chwarter diwethaf y newidiodd rhif ef mewn gwirionedd?**
Gofynnwch i'r grŵp gofio penderfyniadau penodol ac yna gweithio allan pa rai, os o gwbl, a ddibynnai ar ddata. Os yw'r rhestr yn fyr, mae hynny'n wybodaeth ddefnyddiol: mae'n golygu nad yw llawer o'r adrodd presennol yn ennill ei le. Dylai'r hwylusydd gofnodi'r metrigau a newidiodd benderfyniadau, oherwydd maent yn ymgeiswyr i'w diogelu. Yna gofynnwch pa benderfyniadau a wnaed ar reddf ac a allai rhif fod wedi helpu.

**2. Pa rai o'n rhifau presennol sy'n disgrifio gweithgarwch, a pha rai sy'n disgrifio gwerth i ddefnyddwyr?**
Rhowch y dangosfwrdd presennol ar sgrin a nodwch bob metrig fel gweithgarwch (tocynnau wedi'u cau, adeiladau a redwyd, pwyntiau a gwblhawyd) neu ganlyniad (defnyddwyr yn gallu gweithio, problemau ddim yn ailadrodd). Peidiwch â dadlau'n hir am achosion ar y ffin. Y pwynt yw gweld y cydbwysedd. Lle nad oes ond gweithgarwch, gofynnwch pa ganlyniad y mae'r gweithgarwch i fod i'w gynhyrchu a sut y byddai'r tîm yn gwybod.

**3. Ble mae rhifau cyflawni a gweithrediadau yn byw heddiw, ac a yw'r un bobl yn edrych ar y ddau?**
Olrheiniwch ble mae pob teulu o fesurau yn cael ei storio a phwy sy'n ei adolygu. Mae timau'n aml yn synnu o ganfod bod data newid yn cael ei adolygu gan un grŵp a data digwyddiadau gan un arall, heb gyfarfod a rennir. Gofynnwch pa batrwm y gellid ei golli am nad yw'r ddau byth yn cael eu gweld gyda'i gilydd. Cytunwch ar un lle neu un cyfarfod lle maent yn cwrdd.

**4. Beth nad ydym yn ei fesur y byddem yn difaru peidio â'i wybod?**
Gwahoddwch bryderon yn hytrach na metrigau: "Rwy'n ofni na fyddem yn sylwi pe bai..." Gweithiwch o'r atebion at fesurau ymgeisiol, ac yna at y data rhataf a fyddai'n eu dangos. Cadwch y rhestr yn fyr.

**5. Beth fyddai angen i ni ei gredu am ein rhifau cyn eu dangos i'r arweinyddiaeth?**
Trafodwch beth sy'n gwneud y data'n ddibynadwy: diffiniadau sefydlog, gwiriadau cywirdeb wedi'u samplo, a chytundeb ar eithriadau. Rhestrwch amheuon y tîm, hyd yn oed rhai bach, fel statws a ddefnyddir yn anghyson. Penderfynwch pa amheuon y mae'n rhaid eu trwsio cyn rhannu'n ehangach a pha rai y gellir eu datgelu gyda'r rhif.

**6. Pe gallem gadw dim ond tri metrig ar gyfer y chwarter nesaf, pa rai fyddent a pham?**
Mae'r cyfyngiad yn gorfodi blaenoriaethau. Gofynnwch i bob person ysgrifennu tri, ac yna cymharu. Chwiliwch am gytundeb ar ganlyniadau ac anghytundeb ar fesurau gweithgarwch. Gofynnwch pa reilen warchod y mae ei hangen ar bob un o'r tri.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n elwa fwyaf o adborth cyflym, lleol: pa mor hir y mae gwaith yn aros, ble mae'n ciwio, pa mor aml y mae newidiadau'n achosi problemau. Dylent gadw golwg gweithio cyfoethog iddynt eu hunain a chyhoeddi set fach tuag allan. Dylai timau wrthsefyll y demtasiwn i fesur cyfaint allbwn fel dirprwy ar gyfer gwerth, a dylent baru mesurau cyflymder â mesurau ansawdd o'r dechrau (gweler pwnc 2.1, Mesurau llif).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau eisoes yn byw gyda rhifau: cyfeintiau, amseroedd ymateb a datrys, argaeledd. Y cyfle yw symud o adrodd beth ddigwyddodd i esbonio pam, drwy ailadrodd, gwraidd achosion, a chyfran y gwaith nad yw wedi'i gynllunio (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio). Dylent hefyd ddod â'u data i sgyrsiau cynllunio gyda thimau cyflawni, fel bod gwaith dibynadwyedd yn cael ei ddadlau o dystiolaeth yn hytrach nag o gwyn.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod y cymhellion, yn aml ar ddamwain, drwy'r cwestiynau a ofynnant. Mae arweinydd sy'n gofyn "pam mae hwn yn goch?" yn dysgu timau i guddio coch. Mae arweinydd sy'n gofyn "beth ddysgoch chi, a beth sydd ei angen arnoch?" yn dysgu timau i adrodd yn onest. Dylai cyrff llywodraethu ofyn am y gofrestr, y rheiliau gwarchod a'r camau gwella ochr yn ochr â'r rhifau, a dylent ariannu'r gwaith y mae rhif gwael yn ei ddatgelu (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn barnu'r gwasanaeth yn ôl a yw'n gweithio ac a yw problemau'n cael eu cywiro, nid yn ôl mesurau mewnol. Mae eu geiriau eu hunain, mewn arolygon, cwynion a sylwadau, yn perthyn wrth ymyl y rhifau gweithredol fel gwiriad ar a yw'r tîm yn mesur yr hyn sy'n bwysig (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg desg gwasanaeth, tîm gweithrediadau a thri thîm cynnyrch sy'n adeiladu'r gwasanaethau siop, taliadau a chyflawni archebion. Mae'r rhifau isod yn enghreifftiol.

Mae'r arweinyddiaeth yn gofyn pam mae cwsmeriaid yn cwyno am y ddesg dalu araf pan fo'r timau cyflawni'n adrodd eu bod yn cludo bob dydd a'r tîm gweithrediadau'n adrodd bod argaeledd yn 99.9 y cant. Mae pob grŵp yn iawn yn ôl ei fesurau ei hun, ac nid oes neb wedi edrych arnynt gyda'i gilydd. Mae pennaeth rheoli gwasanaethau yn cynnig golwg gysylltiedig un dudalen ar gyfer y gwasanaeth desg dalu, wedi'i hadeiladu o ddata y mae'r timau eisoes yn ei gasglu.

Mae'r olwg yn dangos pedwar peth ar gyfer y deuddeg wythnos diwethaf. Mae gan amser arweiniol newid ganolrif o 2 ddiwrnod a'r 85fed canradd o 9 diwrnod. Cyfradd methu newid yw 8 y cant. Mae 14 digwyddiad ar y ddesg dalu, a 6 ohonynt yn rhannu un achos, sef ymholiad cronfa ddata araf a gyflwynwyd gan ryddhad diweddar. Canolrif yr amser i adfer yw 40 munud, ond mae amser llwytho tudalen ar y 95fed canradd wedi cripian i fyny dros chwe wythnos, patrwm nad yw'r ffigur argaeledd yn ei ddangos oherwydd bod y gwasanaeth yn dechnegol i fyny o hyd.

Mae'r grŵp yn gweld yr hyn a guddiwyd. Mesurwyd argaeledd fel "mae'r ddesg dalu yn ymateb," tra bod defnyddwyr yn profi "mae'r ddesg dalu yn ymateb yn ddigon cyflym." Mae'r tîm cynnyrch a'r tîm gweithrediadau yn cytuno i ychwanegu dangosydd hwyrni ar gyfer y ddesg dalu gydag amcan a osodir gan y perchennog cynnyrch ar ôl darllen sylwadau cwsmeriaid, i drin achos y digwyddiad ailadroddus fel cofnod problem â pherchennog, ac i adolygu'r olwg gysylltiedig bob pythefnos. Maent yn cofnodi un penderfyniad: oedi nodweddion desg dalu newydd am gyfnod o gyflawni meddalwedd parhaus i drwsio'r ymholiad ac ychwanegu gwiriad perfformiad at y biblinell ryddhau.

Mae risg o chwarae'r system yn ymddangos o fewn mis. Mae'r tîm gweithrediadau yn sylwi bod dau o'r 14 digwyddiad wedi'u hagor fel "ceisiadau gwasanaeth" am nad oes gan y categori ceisiadau darged datrys. Mae'r tîm yn sylweddoli bod targed ar ddigwyddiadau wedi gwthio pobl i gategoreiddio achosion ar y ffin fel ceisiadau. Maent yn ychwanegu cyfran yr ailgategoreiddio at yr olwg ac yn samplo deg tocyn bob mis. Ar ôl y newid, mae amser llwytho'r dudalen ar y 95fed canradd yn disgyn, mae digwyddiadau ailadroddus yn gostwng, ac mae'r tîm yn cadw'r olwg oherwydd ei bod wedi newid penderfyniad.

## Y golwg fesul sector

**Busnes newydd.** Ychydig o broses ac ymddiriedaeth gref sydd gan dimau bach, sy'n helpu. Y risg yw mewnforio dangosfwrdd menter mawr cyn bod angen. Dechreuwch â dau neu dri mesur y bydd y sylfaenwyr yn eu darllen yn wythnosol, megis amser arweiniol ar gyfer newid, dangosydd dibynadwyedd syml, ac adborth uniongyrchol gan ddefnyddwyr, ac ysgrifennwch eu diffiniadau.

**Busnes bach.** Mae'r person sy'n rhedeg TG yn aml yn adrodd i'r perchennog, a gall un gŵyn gan gwsmer fod yn drymach nag unrhyw siart. Cadwch y set yn fach, defnyddiwch y data y mae eich offer eisoes yn ei gynhyrchu, a ffafriwch sgyrsiau â defnyddwyr. Triniwch adroddiadau a gyflenwir gan werthwyr yn ofalus, gan fod gan werthwyr eu cymhellion eu hunain.

**Menter fawr.** Mae graddfa'n lluosi'r galw am rifau cymharol a'r pwysau i'w chwarae. Defnyddiwch set safonol fach â diffiniadau ysgrifenedig, cadwch olwg gweithio timau ar wahân i grynodebau, ac osgowch gymharu timau sy'n rhedeg mathau gwahanol iawn o wasanaethau. Daw cofrestr metrigau, diffiniadau a rennir a rhythm adolygu yn hanfodol.

**Llywodraeth a'r sector cyhoeddus.** Gall lefelau gwasanaeth contract, gofynion archwilio a rhwymedigaethau adrodd cyhoeddus wneud rhai mesurau yn anhrafodadwy. Triniwch hwy fel mewnbynnau dylunio: eu bodloni, dangos rheilen warchod wrth eu hymyl, a datgan y diffiniadau a ddefnyddiwyd. Mae atebolrwydd cyhoeddus yn codi cost cuddio newyddion drwg, felly adeiladwch sianeli mewnol diogel ar gyfer adrodd yn onest (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad dros fesur yw gwell penderfyniadau am gost is. Mae mesur yn cefnogi blaenoriaethu, yn dangos ble mae gwastraff, yn rhoi rhybudd cynnar o ddirywiad gwasanaeth, ac yn darparu tystiolaeth ar gyfer ceisiadau buddsoddi.

Mae gan y gost sawl rhan. Mae offer, sy'n aml eisoes yn eiddo: y system docynnau, yr olrheinydd materion, rheoli fersiynau a monitro. Mae amser staff i ddiffinio metrigau, adeiladu golygon a chynnal cofrestr. Mae cost gylchol cyfarfodydd adolygu, sef y fwyaf a'r mwyaf gwerth chweil. Mae cyfanswm cost perchnogaeth (TCO) arfer mesur hefyd yn cynnwys cost gweithredu ar ganfyddiadau, gan fod ychydig o elw i ddirnadaeth heb gyllideb i'w drwsio.

Mae'n anodd nodi'r elw â ffigur cyffredinol, ac nid yw'r llyfr hwn yn dyfeisio un. Ffordd ddefnyddiol o adeiladu'r achos yw mesur eich llinellau sylfaen eich hun cyn ac ar ôl newid: amser a dreulir ar adrodd â llaw, cysylltiadau dro ar ôl tro, penderfyniadau a wrthdroiwyd am fod y data'n anghywir, a syrpreisys a ganfuwyd yn hwyr. Y patrwm i'w ddisgwyl yw llai o syrpreisys, dadleuon byrrach, a gwell cytundeb rhwng rhifau gweithredol a phrofiad defnyddwyr. Mae cymhariaeth syml o [elw ar fuddsoddiad](https://en.wikipedia.org/wiki/Return_on_investment) (ROI) rhwng ymdrech a wariwyd ac ymdrech a arbedwyd yn fan cychwyn rhesymol, ac mae pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes, yn ymdrin â'r dull.

## Gwrthbatrymau a maglau

- **Y dangosfwrdd o bopeth.** Dwsinau o siartiau, dim perchnogion, dim penderfyniadau. Dewiswch ychydig, enwch y penderfyniad y mae pob un yn ei hysbysu, ac ymddeolwch y gweddill.
- **Mesur unochrog.** Cyflymder heb sefydlogrwydd, neu sefydlogrwydd heb berthnasedd. Paru mesur llif â mesur gwasanaeth.
- **Mesur pobl.** Mae graddio unigolion yn llygru data ac yn digalonni cymorth. Adroddwch ar lefel timau a gwasanaethau.
- **Targedau cyn llinellau sylfaen.** Dyfaliad yw targed heb werth cychwynnol. Cofnodwch linell sylfaen yn gyntaf, a gosodwch dargedau ar ôl o leiaf un cylch adolygu.
- **Adroddiadau heb gamau gweithredu.** Mae adolygiad nad yw'n cynhyrchu newidiadau yn dysgu pobl i'w anwybyddu. Gorffennwch bob adolygiad â cham gweithredu, perchennog a dyddiad a enwir.
- **Newidiadau diffiniad tawel.** Mae llinellau tuedd yn dod yn ddiystyr. Logiwch bob newid gyda'i reswm a'i nodi ar y siart.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diben a dewis | Metrigau a ddewiswyd am fod yr offeryn yn eu cynnig | Mae gan rai metrigau ddiben a nodir | Mae gan bob metrig a adroddir gwestiwn a phenderfyniad ysgrifenedig | Set o fetrigau wedi'i hadolygu yn erbyn penderfyniadau a'i hymddeol pan na chaiff ei defnyddio | Metrigau wedi'u cyd-ddylunio gyda defnyddwyr a chyflenwyr o amgylch canlyniadau a rennir |
| Golwg gysylltiedig ar ystwyth ac ITIL | Data cyflawni a gwasanaeth wedi'u cadw ar wahân | Ychydig o dimau'n gweld y ddau gyda'i gilydd | Golwg gyffredin ar lif ac iechyd gwasanaeth fesul gwasanaeth | Golwg gysylltiedig wedi'i thueddu a'i chysylltu â gwaith gwella | Golygon traws-dîm a chyflenwyr wedi'u clymu wrth ganlyniadau defnyddwyr |
| Llinellau sylfaen ac ymdrech | Dim llinellau sylfaen; casglu â llaw | Llinellau sylfaen ar gyfer rhai gwasanaethau; casglu cymysg | Llinellau sylfaen wedi'u cofnodi ar gyfer mesurau craidd; casglu yn bennaf yn awtomatig | Llinellau sylfaen wedi'u hadnewyddu ar ôl newidiadau; ymdrech wedi'i holrhain a'i lleihau | Llinellau sylfaen a diffiniadau wedi'u haddasu'n barhaus wrth i wasanaethau newid |
| Defnydd mewn gwelliant | Rhifau'n cael eu nodi a'u hanghofio | Camau gweithredu achlysurol ar ôl wythnosau gwael | Mae pob adolygiad yn gorffen â chamau gweithredu a enwir | Dilyniant camau gweithredu wedi'i fesur a'i ariannu | Mae gwelliant yn llifo gan bawb ac yn weladwy ar draws timau |

## Rhestr wirio

- [ ] Mae gan bob metrig a adroddir gwestiwn ysgrifenedig a phenderfyniad a enwir y mae'n ei hysbysu.
- [ ] Enwir y gynulleidfa ar gyfer pob golwg, ac mae golygon timau ar wahân i olygon yr arweinyddiaeth.
- [ ] Mae o leiaf un mesur llif ac un mesur gwasanaeth yn ymddangos ar yr un dudalen.
- [ ] Mae llinell sylfaen ag ystod dyddiadau a maint sampl yn bodoli ar gyfer pob mesur craidd.
- [ ] Mae pob mesur amser yn nodi ble mae'r cloc yn dechrau ac yn stopio.
- [ ] Mae gan bob metrig reilen warchod a ddangosir wrth ei ymyl.
- [ ] Mae ymdrech casglu â llaw yn hysbys, ac mae'r dasg â llaw fwyaf wedi'i hadolygu ar gyfer awtomeiddio.
- [ ] Mae timau'n gweld eu data eu hunain cyn yr arweinyddiaeth.
- [ ] Nid oes unrhyw raddio unigol, tâl na disgyblaeth wedi'i gysylltu â metrig.
- [ ] Mae pob adolygiad yn gorffen ag o leiaf un cam gwella a enwir, perchennog a dyddiad.
- [ ] Mae o leiaf un metrig wedi'i ymddeol neu ei ailddiffinio yn y flwyddyn ddiwethaf.

## Anogwyr AI

**Drafftiwch y datganiad diben ar gyfer pob metrig.**

```text
Ni yw [enw'r tîm], sy'n gyfrifol am [gwasanaeth neu gynnyrch]. Mae ein dangosfwrdd
presennol yn dangos y metrigau hyn: [rhestr o fetrigau a'u diffiniadau]. Ar gyfer
pob un, drafftiwch ddatganiad un frawddeg yn y ffurf "Rydym yn mesur X i benderfynu
Y", a nodwch unrhyw fetrig lle na allwch ddirnad penderfyniad o'r hyn a roddais
i chi. Awgrymwch gwestiynau y dylwn eu hateb i gwblhau pob datganiad. Peidiwch
â dyfeisio gwerthoedd meincnod na thargedau. Rhestrwch eich rhagdybiaethau.
```

**Cysylltwch olygon cyflawni a gwasanaeth.**

```text
Ein mesurau cyflawni yw [rhestr, gyda diffiniadau a ffynonellau data] a'n
mesurau gwasanaeth yw [rhestr, gyda diffiniadau a ffynonellau data] ar gyfer
[enw'r gwasanaeth]. Cynigiwch gynllun un dudalen sy'n dangos y ddau gyda'i gilydd,
yn paru pob mesur cyflymder â mesur sefydlogrwydd neu ansawdd, ac yn nodi'r data
y mae ei angen ar bob un. Nodwch unrhyw ddiffiniadau sy'n gwrthdaro rhwng y
ddwy set. Peidiwch â dyfeisio gwerthoedd na throthwyon. Rhestrwch eich
rhagdybiaethau ac unrhyw beth na allech ei benderfynu.
```

**Cynlluniwch linell sylfaen.**

```text
Rydym am gofnodi llinell sylfaen ar gyfer [enw'r metrig] ar gyfer [gwasanaeth
neu dîm] cyn newid [arfer neu offeryn]. Daw'r data o [ffynhonnell]. Cynigiwch
am ba mor hir i gasglu data, pa ystadegau crynodeb i'w cofnodi (gan gynnwys
canraddau), beth i'w eithrio a pham, a sut i nodi unrhyw newidiadau yn y ffordd
y cyfrifwyd gwaith yn ystod y cyfnod. Peidiwch â rhagdybio gwerthoedd. Rhestrwch
eich rhagdybiaethau a'r risgiau ansawdd data a welwch.
```

**Paratowch adolygiad sy'n arwain at weithredu.**

```text
Rydym yn cynnal adolygiad [wythnosol, misol neu chwarterol] o [set metrigau] gyda
[cynulleidfa]. Drafftiwch agenda a set fer o gwestiynau hwyluso sy'n symud o
ddarllen y rhifau i ddewis un neu ddau gam gwella, pob un â pherchennog a dyddiad.
Cynhwyswch anogwr i wirio am chwarae'r system yn erbyn rheilen warchod pob metrig.
Peidiwch â dyfeisio data. Rhestrwch eich rhagdybiaethau am y grŵp a'i ddiwylliant.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n ymdrin â metrig yr ydych yn ei ystyried a'i reilen warchod pâr.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod pwnc metrig newydd neu ddiwygiedig yn cadw'r datganiad diben, y ffordd o chwarae'r system a'r rheilen warchod.

## Pwyntiau allweddol

- Mesurwch i weld, penderfynu, dysgu a chyfrif; mae rhif nad yw'n gwneud yr un o'r rhain yn gost ychwanegol.
- Mae ystwyth yn cyflenwi adborth cyflym, lleol ar lif; mae ITIL yn cyflenwi golygon a rennir, ar lefel gwasanaeth, o ddibynadwyedd a gwerth. Darllenwch hwy gyda'i gilydd.
- Mae mesur dim byd yn gadael penderfyniadau i hanesion, ac mae mesur y pethau anghywir yn cyfeirio ymdrech â hyder ffug.
- Dechreuwch â ychydig o fetrigau, pob un â diben ysgrifenedig, llinell sylfaen a rheilen warchod.
- Disgrifiwch dimau a gwasanaethau, byth unigolion, a gadewch i'r tîm weld ei ddata yn gyntaf.
- Caewch y ddolen: mae adolygiad nad yw'n cynhyrchu gweithredu yn gwastraffu'r data.

## Cyfeiriadau a darllen pellach

1. Beck, K., et al., *Manifesto for Agile Software Development*, 2001, https://agilemanifesto.org/.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
4. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016.
5. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
9. Strathern, M., "'Improving ratings': audit in the British University system," *European Review*, 5(3), 1997.
10. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
11. Wikipedia, [Agile software development](https://en.wikipedia.org/wiki/Agile_software_development).
12. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
13. Wikipedia, [Information technology service management](https://en.wikipedia.org/wiki/Information_technology_service_management).
14. Wikipedia, [DevOps](https://en.wikipedia.org/wiki/DevOps).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
17. Wikipedia, [Return on investment](https://en.wikipedia.org/wiki/Return_on_investment).
