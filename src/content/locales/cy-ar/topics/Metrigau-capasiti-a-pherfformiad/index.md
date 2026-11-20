# Metrigau capasiti a pherfformiad

**Mesurwch pa mor llawn yw gwasanaeth, pa mor araf yw ei geisiadau arafaf, a faint o le sydd ar ôl cyn i ddefnyddwyr sylwi, yna rhagwelwch alw gydag amrediadau fel bod capasiti'n cyrraedd cyn yr angen, nid ar ôl y gŵyn.**

## Crynodeb a chymhelliant

Mae argaeledd yn dweud wrthych a yw gwasanaeth yn ateb. Mae capasiti a pherfformiad yn dweud wrthych pa mor dda y mae'n ateb, a pha mor hir y bydd yn parhau i wneud hynny wrth i alw dyfu. Mae tudalen til sy'n ymateb mewn wyth eiliad "i fyny" yn ôl y rhan fwyaf o ddiffiniadau argaeledd ac yn "doredig" yn ôl diffiniad pob cwsmer. Mae cronfa ddata ar 95 y cant o'i storfa yn iach heddiw ac yn doriad y mis nesaf. Mae'r pwnc hwn yn ymdrin â'r mesurau sy'n cau'r bylchau hynny.

[Cynllunio capasiti](https://en.wikipedia.org/wiki/Capacity_planning) yw'r arfer o benderfynu ar yr adnoddau sydd eu hangen ar wasanaeth i fodloni galw sy'n newid. Yn ITIL 4 mae hyn yn eistedd yn yr arfer rheoli capasiti a pherfformiad, sy'n anelu at sicrhau bod gwasanaethau'n cyflawni perfformiad y cytunwyd arno ac a ddisgwylir ac yn bodloni galw cyfredol a dyfodol yn gost-effeithiol. Mae'r arfer yn disgrifio hyn ar dair lefel: y busnes (yr hyn y bydd y sefydliad yn ei ofyn gan ei wasanaethau), y gwasanaeth (sut mae gwasanaeth yn ymddwyn dan lwyth), a'r gydran (sut mae pob gweinydd, cronfa ddata, cyswllt rhwydwaith, neu giw yn ymddwyn). Mae'r mesurau yn y pwnc hwn yn gweithio'n bennaf ar lefelau'r gwasanaeth a'r gydran, ac maent angen mewnbwn o lefel y busnes i ragweld unrhyw beth.

Mae [peirianneg dibynadwyedd safleoedd (SRE)](https://en.wikipedia.org/wiki/Site_reliability_engineering) yn trin latency, traffig, gwallau, a dirlawnder fel y pedwar signal sy'n werth eu gwylio ar unrhyw system sy'n wynebu defnyddwyr, ac mae'n clymu targedau perfformiad ag amcanion lefel gwasanaeth (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau). Mae timau ystwyth yn cwrdd â chapasiti fel cwestiwn cyflawni: a all y rhyddhad nesaf gario'r llwyth disgwyliedig, a phwy sy'n berchen ar yr ateb? Mae trin perfformiad fel maen prawf derbyn, wedi'i wirio yn y biblinell, yn symud y sgwrs yn gynharach.

Mae sawl term yn codi dro ar ôl tro yn y pwnc hwn. **Defnyddio adnoddau** yw cyfran capasiti adnodd sydd yn cael ei ddefnyddio dros gyfwng, er enghraifft cyfran yr amser prosesydd sy'n brysur. **Dirlawnder** yw faint o waith sy'n aros oherwydd bod adnodd yn cael ei ddefnyddio'n llawn, er enghraifft hyd ciw rhedeg neu ôl-groniad ceisiadau. Mae defnyddio adnoddau yn dweud pa mor brysur yw adnodd. Mae dirlawnder yn dweud a yw gwaith yn ciwio amdano, a chiwiau yw'r hyn y mae defnyddwyr yn ei deimlo. **[Latency](https://en.wikipedia.org/wiki/Latency_(engineering))** yw'r amser rhwng cais a'i ymateb. **[Trwybwn](https://en.wikipedia.org/wiki/Throughput)** yw'r gyfradd y mae gwasanaeth yn cwblhau gwaith, er enghraifft ceisiadau yr eiliad. **Lle i dyfu** yw'r bwlch rhwng y llwyth anterth cyfredol a'r llwyth y mae'r gwasanaeth yn rhoi'r gorau i fodloni ei amcanion ynddo. **Galw** yw'r gwaith y mae defnyddwyr a'r busnes yn ei ofyn gan y gwasanaeth, nad yw'r un peth â'r gwaith y mae'n ei gwblhau: mae gwasanaeth sydd wedi'i orlwytho yn cwblhau llai nag a ofynnwyd.

Mae un priodwedd o linellau aros yn esbonio pam mae'r mesurau hyn yn ymddwyn fel y maent. Mae [damcaniaeth ciwio](https://en.wikipedia.org/wiki/Queueing_theory) yn dangos, ar gyfer gwasanaeth â chyrraeddiadau ar hap, bod amser aros yn tyfu'n araf tra bo defnyddio adnoddau'n gymedrol ac yna'n codi'n serth wrth i ddefnyddio adnoddau nesáu at ddefnydd llawn. Mae [cyfraith Little](https://en.wikipedia.org/wiki/Little%27s_law) yn cysylltu nifer cyfartalog y ceisiadau mewn system â'r gyfradd gyrraedd a'r amser cyfartalog y mae pob un yn ei dreulio yno. Mae adnodd ar ddefnydd cyfartalog uchel yn agos at glogwyn. Mae union siâp y gromlin yn dibynnu ar y gwasanaeth, felly dewch o hyd iddi drwy brofi eich system eich hun gyda [phrofi llwyth](https://en.wikipedia.org/wiki/Load_testing) yn lle benthyg trothwy o erthygl gyffredinol.

Mae latency angen gofal arbennig oherwydd bod y cyfartaledd yn cuddio'r profiad sy'n bwysig. Mae [canradd](https://en.wikipedia.org/wiki/Percentile) yn nodi'r gwerth y mae cyfran benodol o arsylwadau'n syrthio islaw iddo: y 95fed ganradd (p95) yw'r latency y mae 95 y cant o geisiadau yn ei guro. Mae [latency cynffon](https://en.wikipedia.org/wiki/Tail_latency) yn tueddu i ddominyddu mewn systemau lle mae un weithred defnyddiwr yn ymestyn i lawer o alwadau mewnol. Adroddwch ganraddau yn lle'r cymedr yn unig (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth, a phwnc 3.3, Amser ymateb a datrys digwyddiadau, sy'n gwneud yr un ddadl ar gyfer amser datrys).

Yn olaf, mae capasiti'n dibynnu ar [ragweld](https://en.wikipedia.org/wiki/Forecasting) galw, ac mae gan alw batrymau: cylchoedd dyddiol, cylchoedd wythnosol, a [thymhorolrwydd](https://en.wikipedia.org/wiki/Seasonality) wedi'i glymu â'r calendr, ymgyrchoedd, a lansiadau cynnyrch. Mae [awto-raddio](https://en.wikipedia.org/wiki/Autoscaling) yn newid sut mae hyn yn teimlo, gan y gall llwyfannau cwmwl ychwanegu adnoddau mewn munudau, ond nid yw'n dileu'r pwnc. Mae gan awto-raddio derfynau, oedi, cost, a dibyniaethau nad ydynt yn graddio, megis cronfa ddata neu ryngwyneb trydydd parti. Mae ochr y gost yn perthyn gyda FinOps (gweler pwnc 7.6, Metrigau FinOps a chostau cwmwl).

Mae pynciau cyfagos yn ymdrin â rhifyddeg argaeledd (gweler pwnc 5.3, Metrigau argaeledd), dylunio rhybuddion (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion), a llwyth cylchdro (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad). Yma'r pwnc yw adnoddau ac amseroedd ymateb y gwasanaeth ei hun.

## Egwyddorion allweddol

- **Mesurwch ddirlawnder yn ogystal â defnyddio adnoddau.** Mae defnyddio adnoddau yn dangos pa mor brysur yw adnodd, ac mae dirlawnder yn dangos a yw gwaith yn aros. Mae defnyddwyr yn profi'r aros.
- **Adroddwch latency fel dosbarthiad.** Defnyddiwch ganraddau fesul gweithred sy'n wynebu defnyddwyr, a chadwch y gynffon araf yn weladwy. Mae cyfartaledd dosbarthiad gwyrgam yn disgrifio bron neb.
- **Clymwch dargedau wrth brofiad defnyddwyr.** Mae trothwy yn ystyrlon pan fo'n olrhain i rywbeth y mae defnyddiwr neu'r busnes yn poeni amdano, nid i'r hyn y mae offeryn yn digwydd ei siartio.
- **Cynlluniwch gydag amrediadau a'u hadolygu.** Amrediad gyda rhagdybiaethau a nodwyd yw rhagolwg. Cymharwch ef â'r hyn a ddigwyddodd a dysgwch o'r gwall.
- **Gwybyddwch eich terfynau drwy brofi.** Rhagdybiaeth yw capasiti nes bod prawf llwyth realistig yn ei gadarnhau. Ailadroddwch y prawf ar ôl newidiadau sy'n bwysig.
- **Disgrifiwch systemau, byth bobl.** Mae'r mesurau hyn yn perthyn i wasanaethau, cydrannau, a thimau. Nid ydynt byth yn gerdyn sgorio i unigolion.
- **Pwyswch gost yn erbyn risg.** Mae capasiti sbâr yn costio arian, ac mae capasiti coll yn costio cwsmeriaid. Gwnewch y cyfaddawd yn weladwy fel ei fod yn cael ei ddewis, nid ei ddrifftio iddo.

## Diffiniadau metrigau

Mae'r tabl yn rhestru saith mesur. Nodir y clociau a'r ffiniau ym mhob fformiwla. Mae mesurau ar sail canradd yn defnyddio ffenestr sefydlog, a nodir yn y gofrestr, ac fe'u cyfrifir o arsylwadau crai neu o histogramau, byth fel cyfartaledd cyfartaleddau.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Defnyddio adnoddau | Cyfran capasiti adnodd sydd yn cael ei ddefnyddio dros gyfwng, wedi'i adrodd fel canradd uchel o'r gyfres cyfnodau | capasiti prysur / cyfanswm capasiti, fesul cyfwng o 1 i 5 munud; adroddwch y canolrif a'r 95fed canradd dros y ffenestr adolygu; eithrir ffenestri cynnal a chadw gyda'r adnodd wedi'i ddraenio | canran | Monitro seilwaith a metrigau llwyfan cwmwl | Rheoli capasiti a pherfformiad; monitro a rheoli hysbysiadau | Meini prawf derbyn gweithredol yn y diffiniad o orffen; signalau adnoddau SRE | Wythnosol |
| Dirlawnder | Faint o waith sy'n aros am adnodd sy'n cael ei ddefnyddio'n llawn | hyd ciw, ciw rhedeg, ceisiadau ar y gweill, neu geisiadau a sbardunwyd, fesul cyfwng; adroddwch y 95fed canradd a chyfran y cyfnodau gydag unrhyw aros; eithrir cyfnodau heb alw | cyfrif, neu ganran o gyfnodau | Telemetreg cymhwysiad a seilwaith | Rheoli capasiti a pherfformiad; monitro a rheoli hysbysiadau | Signal dirlawnder SRE; terfyn gwaith ar y gweill ar giw gwasanaeth | Wythnosol |
| Canradd latency | Yr amser a gymerir i ateb cais am un weithred sy'n wynebu defnyddwyr, wedi'i adrodd ar y canolrif, p95, a p99 | amser ymateb o dderbyn cais wrth yr ymyl i anfon y beit olaf, fesul cais llwyddiannus; adroddir ceisiadau a fethodd fel gwallau, nid fel ymatebion cyflym; mesurwch dros ffenestr dreigl | milieiliadau | Logiau cydbwysydd llwyth neu borth, olrhain, monitro defnyddwyr go iawn | Rheoli lefel gwasanaeth; rheoli capasiti a pherfformiad | Dangosydd latency ac amcan lefel gwasanaeth SRE | Parhaus, wedi'i adolygu'n wythnosol |
| Lle i dyfu | Y llwyth sy'n weddill y gall gwasanaeth ei gario cyn torri ei amcanion | (llwyth torri a brofwyd neu a fodelwyd - llwyth anterth cyfredol) / llwyth anterth cyfredol; yr anterth yw'r awr brysuraf yn y ffenestr; y llwyth torri yw'r llwyth lle torrir yr amcan latency am y tro cyntaf mewn prawf, nid uchafswm y caledwedd | canran, neu ddiwrnodau ar y twf cyfredol | Canlyniadau profion llwyth a thelemetreg traffig | Rheoli capasiti a pherfformiad; rheoli lefel gwasanaeth | Gofynion anweithredol a phrofion perfformiad yn y biblinell | Misol, a chyn lansiadau mawr |
| Gwall rhagolwg | Y gwahaniaeth rhwng galw a ragwelwyd a galw gwirioneddol am gyfnod | absoliwt (anterth a ragwelwyd - anterth gwirioneddol) / anterth gwirioneddol, ar gyfer gorwel a nodwyd; rhewir y rhagolwg ar ddechrau'r gorwel ac ni chaiff ei ddiwygio wedyn; rhestrir digwyddiadau un-waith heb eu rhagweld, ni chânt eu tynnu | canran | Cofrestr rhagolygon a thelemetreg traffig | Rheoli capasiti a pherfformiad; cynllunio sy'n gysylltiedig â galw mewn rheoli ariannol gwasanaeth | Rhagweld rhyddhad a map ffordd; rhagweld galw SRE | Chwarterol |
| Amser arweiniol capasiti | Yr amser sydd ei angen i ddod â chapasiti newydd i wasanaeth unwaith y derbynnir yr angen | mae'r cloc yn dechrau pan gymeradwyir y cais capasiti, ac yn stopio pan fo'r capasiti yn cario traffig cynhyrchu; adroddwch y canolrif a'r 85fed canradd; eithrir ceisiadau a ganslwyd | diwrnodau | Cofnodion ceisiadau yn yr offeryn ITSM, cofnodion newid, logiau darparu | Rheoli capasiti a pherfformiad; rheoli ceisiadau gwasanaeth; galluogi newid | Amser arweiniol ar gyfer eitem ôl-groniad platfform (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif) | Chwarterol |
| Cwmpas profion perfformiad | Cyfran y gwasanaethau hanfodol sydd â phrawf llwyth diweddar, realistig | gwasanaethau hanfodol gyda phrawf llwyth sy'n pasio sy'n iau nag oedran a nodwyd, ar amgylchedd a llwyth gwaith cynrychioliadol / gwasanaethau hanfodol yn y gofrestr; ysgrifennir y terfyn oedran i lawr | canran | Storfa canlyniadau profion a chofrestr gwasanaethau | Rheoli capasiti a pherfformiad; rheoli rhyddhau | Profion anweithredol yn y biblinell cyflawni parhaus | Chwarterol |

Gyda'i gilydd mae'r rhain yn ateb pedwar cwestiwn: pa mor llawn yw hi, pa mor araf yw hi, faint o le sydd ar ôl, a pha mor gyflym y gallwn ymateb pan fo'r ateb yn newid.

## Argymhellion

### Dechreuwch gyda'r defnyddiwr, yna'r adnodd

**1. Dewiswch yr ychydig weithredoedd y mae defnyddwyr yn poeni amdanynt, a mesurwch y rheini.** Mae gan wasanaeth gannoedd o bwyntiau terfyn a llond llaw o deithiau sy'n bwysig, megis mewngofnodi, chwilio, talu, a lawrlwytho datganiad. Cytunwch ar y rhain gyda pherchnogion cynnyrch a chwsmeriaid, a gosodwch ddisgwyliad latency ar gyfer pob un. Mae'r rhain yn cysylltu'n naturiol â dangosyddion lefel gwasanaeth (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau).

**2. Parwch bob siart adnoddau â siart dirlawnder.** Mae dangos defnydd prosesydd yn unig yn gwahodd cysur ffug "dim ond 70 y cant y cyrhaeddodd." Ychwanegwch y ciw, y ceisiadau sy'n aros, neu'r cyfrif sbarduno wrth ei ymyl. Pan ymddengys dirlawnder cyn bod defnyddio adnoddau yn edrych yn frawychus, rydych wedi dod o hyd i'r gwir gyfyngiad, ac yn aml nid yr adnodd yr oeddech yn ei wylio yw'r cyfyngiad hwnnw, megis cronfa gysylltiadau, terfyn edafedd, neu derfyn cyfradd ar ryngwyneb partner.

**3. Ffafriwch y gynffon brysur i'r cyfartaledd tawel.** Mae cyfartaleddau dros ddiwrnod yn cymysgu dyfnder y nos â'r anterth amser cinio. Edrychwch ar y cyfnod prysuraf a chofnodwch ddyddiad ac achos y cyfnodau gwaethaf. Y cwestiwn cynllunio yw sut mae'r gwasanaeth yn ymddwyn yn ei awr waethaf ddisgwyliedig.

### Adroddwch latency yn onest

**4. Cyhoeddwch ganraddau fesul gweithred, ac enwch y ffenestr.** Nodwch y canolrif, p95, a p99 ar gyfer pob gweithred bwysig dros ffenestr dreigl, a dywedwch pa geisiadau a gynhwysir. Peidiwch byth â chyfartaleddu canraddau ar draws gweinyddion neu weithredoedd, oherwydd nid yw'r canlyniad yn cyfateb i brofiad unrhyw ddefnyddiwr go iawn; cyfunwch histogramau neu'r arsylwadau crai yn lle hynny. Os yw'r sampl yn fach, dywedwch hynny, gan fod p99 o ychydig gannoedd o geisiadau yn rhif swnllyd (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

**5. Mesurwch lle mae'r defnyddiwr, yn ogystal â lle mae'r gweinydd.** Mae amseriadau ochr gweinydd yn gadael y rhwydwaith, y porwr, a'r ddyfais allan. Ychwanegwch fonitro defnyddwyr go iawn neu wiriadau synthetig fel y gallwch ddweud pen ôl araf oddi wrth filltir olaf araf.

**6. Cyfrwch wallau a therfynau amser gyda latency, nid yn ei le.** Mae gwasanaeth sy'n methu'n gyflym yn edrych yn gyflym mewn siart latency, ac mae gwasanaeth sy'n cyrraedd terfyn amser yn edrych yn araf am y rheswm anghywir. Adroddwch y gyfradd gwallau gyda'r ganradd latency fel na all methiant cyflym wenieithu'r canlyniad.

### Dewch o hyd i'r terfynau, yna gadewch le

**7. Profwch y pwynt torri yn fwriadol.** Rhedwch brofion llwyth sy'n ailchwarae cymysgedd realistig o weithredoedd, codwch y llwyth yn raddol, a nodwch ble mae'r amcan latency yn cael ei dorri gyntaf a pha adnodd sy'n dirlenwi gyntaf. Profwch ar amgylchedd sy'n debyg i gynhyrchu yn y ffyrdd sy'n bwysig, ac ysgrifennwch y ffyrdd nad yw. Prawf a fethodd mewn lle diogel yw'r digwyddiad rhataf y byddwch yn ei gael (gweler pwnc 4.5, Metrigau rhyddhau a defnyddio, ar gyfer rhoi gwiriadau yn y biblinell).

**8. Gosodwch le i dyfu fel polisi a'i adolygu fel cyfaddawd.** Penderfynwch faint o ymyl y mae gwasanaeth yn ei gadw dros ei anterth disgwyliedig, a pham. Mae gwasanaethau hanfodol sy'n wynebu cwsmeriaid yn cyfiawnhau mwy, gwasanaethau swp mewnol yn llai. Dewis busnes am gost a risg yw'r ffigur, felly cofnodwch y rhesymu ac ailedrychwch arno pan fo cost toriad neu bris capasiti yn newid. Peidiwch â chopïo rhif o sefydliad arall.

### Rhagwelwch alw gyda'r bobl sy'n ei adnabod

**9. Gofynnwch i'r busnes beth sy'n dod, ac ysgrifennwch y rhagolwg i lawr.** Mae ymgyrchoedd marchnata, cwsmeriaid newydd, terfynau amser rheoleiddiol, a digwyddiadau tymhorol yn newid galw ymhell cyn i draffig ei ddangos. Cadwch gofrestr rhagolygon fer gyda'r dyddiad, y rhagdybiaethau, yr amrediad, y perchennog, a ffynhonnell pob mewnbwn. Mae rhagolwg a roddir fel amrediad, megis achos isel, disgwyliedig, ac uchel, yn fwy gonest nag un rhif ac yn fwy defnyddiol ar gyfer penderfynu faint i'w brynu.

**10. Sgoriwch y rhagolwg a defnyddiwch y gwall i'w wella.** Ar ôl pob cyfnod, cymharwch y rhagolwg wedi'i rewi â'r hyn a ddigwyddodd, gan ddefnyddio gwall rhagolwg, a rhestrwch achosion methiannau mawr. Achosion cyffredin yw ymgyrch heb ei chyhoeddi, newid mewn ymddygiad defnyddwyr, a dibyniaeth a symudodd. Y nod yw nid gwall sero, nad yw'n gyraeddadwy, ond dysgu pa fewnbynnau sy'n ddibynadwy, ac ehangu'r amrediad lle nad ydynt.

### Gwnewch gapasiti yn hawdd i'w ychwanegu

**11. Byrhewch amser arweiniol capasiti cyn mynd ar ôl cywirdeb.** Os yw capasiti newydd yn cymryd wythnosau i gyrraedd, rhaid i chi ragweld ymhell ymlaen a chario mwy o sbâr. Os yw'n cymryd munudau, gallwch redeg yn agosach at yr angen. Edrychwch ar y camau rhwng "cymeradwywyd" a "cario traffig," megis caffael, cymeradwyo, darparu, cyfluniad, a phrofi, a dileu'r aros hiraf yn gyntaf (gweler pwnc 4.3, Metrigau galluogi newid). Yn nhermau ITIL mae hyn yn ddewis strategaeth capasiti, arwain galw, ei gydweddu, neu ei ddilyn; dewiswch yn ymwybodol, fesul gwasanaeth.

**12. Trinwch awto-raddio fel system i'w mesur.** Cofnodwch pa mor aml y mae graddio'n sbarduno, pa mor hir y mae capasiti newydd yn ei gymryd i fod yn ddefnyddiol, pa mor aml y mae'n taro ei uchafswm cyfluniedig, a beth mae'n ei gostio. Mae awto-raddiwr sy'n sownd ar ei derfyn yn gynllun capasiti sydd eisoes wedi methu. Adolygwch y rhain gyda'r olwg cost fel bod perfformiad a gwariant yn cael eu trafod gyda'i gilydd (gweler pwnc 7.5, Cost gwasanaeth ac economeg uned).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Defnyddio adnoddau | Cyfartaleddu dros gyfnodau hir i guddio brigau; cyfrif capasiti neilltuedig segur fel "wedi'i ddefnyddio"; adrodd yr adnoddau tawelaf yn unig | 95fed canradd awr anterth wrth ymyl y cyfartaledd; mesur dirlawnder; rhestr adnoddau dan sylw wedi'i hadolygu yn erbyn map y gwasanaeth |
| Dirlawnder | Codi terfynau ciw fel nad oes dim yn cael ei adrodd fel un a wrthodwyd neu a sbardunwyd; symud yr aros i giw arall nas mesurir | Canradd latency a chyfradd gwallau ar gyfer yr un weithred; amser ciw o'r dechrau i'r diwedd, nid un cam; adolygiad o bob ciw yn y llwybr |
| Canradd latency | Adrodd y cymedr neu'r canolrif yn unig; gollwng ceisiadau araf neu rai a fethodd o'r sampl; mesur o leoliad mewnol cyflym; eithrio "allanolion" | p95 a p99 bob amser wedi'u dangos; cyfradd gwallau a therfynau amser wedi'i dangos wrth ymyl latency; monitro defnyddwyr go iawn wedi'i gymharu ag amseriad ochr gweinydd; maint sampl crai wedi'i ddangos |
| Lle i dyfu | Dewis llwyth gwaith prawf ysgafn; profi amgylchedd mwy na chynhyrchu; diffinio'r pwynt torri fel uchafswm y caledwedd | Llwyth gwaith prawf wedi'i adolygu yn erbyn siâp traffig cynhyrchu; rhestr ysgrifenedig o wahaniaethau rhwng prawf a chynhyrchu; lle i dyfu wedi'i ailbrofi ar ôl newidiadau perthnasol |
| Gwall rhagolwg | Diwygio'r rhagolwg ar ôl y ffaith; gosod amrediadau llydan iawn fel bod pob canlyniad "o fewn yr amrediad"; tynnu misoedd gyda syrpreisys fel "digwyddiadau heb eu rhagweld" | Rhagolwg wedi'i rewi a'i ddyddio yn y gofrestr; lled yr amrediad wedi'i adrodd gyda'r gwall; pob digwyddiad a eithriwyd wedi'i restru a'i adolygu |
| Amser arweiniol capasiti | Dechrau'r cloc yn hwyrach drwy oedi cofnodion cymeradwyo; cau ceisiadau pan osodir yr archeb yn lle pan fo capasiti yn cario traffig; hollti ceisiadau | Cloc wedi'i ddiffinio o gymeradwyo i gario traffig; sampl o geisiadau caeedig wedi'i chymharu â logiau darparu; cyfrif ceisiadau a ailagorwyd |
| Cwmpas profion perfformiad | Rhedeg prawf dibwys i hawlio cwmpas; crebachu'r rhestr gwasanaethau hanfodol; cadw hen brawf sy'n pasio ar y llyfrau | Oedran prawf a realaeth llwyth gwaith wedi'u cofnodi; rhestr gwasanaethau hanfodol wedi'i hadolygu yn erbyn y catalog gwasanaethau a hanes digwyddiadau; profion a fethodd wedi'u hadrodd yn ogystal â'r rhai a basiodd |

Mae darlleniad iach yn dangos defnyddio adnoddau gyda chylchoedd dyddiol gweladwy a lle i dyfu, dirlawnder sy'n ymddangos yn anaml ac yn fyr, canraddau latency sy'n sefydlog neu'n gwella yn yr oriau prysuraf, a gwall rhagolwg sy'n hysbys ac yn crebachu'n araf. Yr arwydd iach yw bod syrpreisys yn cael eu trafod gyda'u hachosion. Dylai rhifau perffaith godi amheuaeth, oherwydd eu bod fel arfer yn golygu bod y mesuriad yn dyner.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Rhedeg gyda lle i dyfu hael | Amsugno syrpreisys; gwarchod latency ac argaeledd | Cost uwch; cuddio aneffeithlonrwydd a rhagweld gwan |
| Rhedeg yn dynn gydag awto-raddio cyflym | Cost is; capasiti'n dilyn galw | Yn dibynnu ar gyflymder a therfynau graddio; efallai na fydd dibyniaethau'n graddio; anoddach rhesymu yn ystod digwyddiad |
| Targedau latency canradd | Adlewyrchu sut mae ceisiadau araf yn teimlo; gwrthsefyll triciau cyfartaleddu | Angen mwy o ddata a samplau mwy; swnllyd ar ganraddau uchel ar gyfer gwasanaethau traffig isel |
| Cymedr neu ganolrif latency yn unig | Syml a sefydlog | Cuddio'r gynffon sy'n gyrru cwynion a cholli cwsmeriaid |
| Profion llwyth synthetig | Rheoledig, ailadroddadwy, diogel | Dim ond mor realistig â'r model llwyth gwaith a'r amgylchedd |
| Telemetreg cynhyrchu fel y sail | Adlewyrchu ymddygiad go iawn a chymysgedd go iawn | Datgelu terfynau dim ond ar ôl eu taro; methu stilio y tu hwnt i alw cyfredol |
| Modelau rhagweld manwl | Cipio tymhorolrwydd a thwf | Angen data a sgil; ymdeimlad ffug o fanylder pan fo mewnbynnau'n wan |
| Amrediadau syml y cytunwyd arnynt gyda'r busnes | Hawdd i'w esbonio a'u diweddaru; canolbwyntio ar ragdybiaethau | Mwy bras; yn dibynnu ar fewnbwn gonest gan y busnes |

Dewiswch y dull ysgafnaf sy'n cefnogi'r penderfyniad. Ar gyfer y rhan fwyaf o wasanaethau mae golwg wythnosol ar ddefnyddio adnoddau awr anterth, dirlawnder, a chanraddau latency, prawf llwyth cyn newidiadau mawr, ac adolygiad rhagolwg chwarterol yn ddigon. Ychwanegwch fodelu lle mae cost bod yn anghywir yn fawr.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa dair taith defnyddiwr sydd bwysicaf, a pha amser ymateb y mae defnyddwyr yn ei ddisgwyl ar gyfer pob un?**
Gofynnwch i'r grŵp enwi'r teithiau, yna cymharwch â'r hyn y mae'r dangosfyrddau yn ei siartio. Dylai'r hwylusydd bwyso am ddisgwyliad y gellir ei olrhain i ddefnyddiwr neu gwsmer, nid dewis peirianyddol.

**2. Ble mae ein gwasanaeth yn agos at glogwyn, a sut ydym ni'n gwybod?**
Chwiliwch am adnoddau megis cronfeydd cysylltiadau, terfynau edafedd, neu derfyn cyfradd partner. Gofynnwch pryd y profwyd pob un hyd at ei bwynt torri ddiwethaf. Os nad oes neb yn gwybod, dyna'r gwaith cyntaf.

**3. Sut ydym ni'n adrodd latency heddiw, a beth fyddai'r un y cant arafaf o ddefnyddwyr yn ei ddweud?**
Dangoswch y cymedr, y canolrif, p95, a p99 ar gyfer un weithred ochr yn ochr a thrafodwch y bwlch. Gofynnwch pa geisiadau a eithrir a pham, ac a gyfrifir ceisiadau a fethodd.

**4. Faint o le i dyfu ydym ni'n ei gadw, pwy a'i dewisodd, a phryd ailedrychasom ar y dewis ddiwethaf?**
Trafodwch gost yr ymyl a chost toriad ar y diwrnod prysuraf. Cytunwch ar ddyddiad adolygu a'r dystiolaeth a fyddai'n newid yr ymyl.

**5. Pa mor dda oedd ein tri rhagolwg galw diwethaf, a beth ddysgasom?**
Cymharwch y rhagolygon dyddiedig â'r gwirioneddol ac achosion methiannau mawr. Gofynnwch beth oedd y busnes yn ei wybod na dderbyniodd gweithrediadau. Penderfynwch ar un mewnbwn i'w ychwanegu at y gofrestr rhagolygon, megis y calendr marchnata neu amserlen lansio.

**6. Pe bai angen dwbl y capasiti arnom y mis nesaf, beth fyddai'n ein rhwystro?**
Rhestrwch bob cam o gais i draffig cynhyrchu a marciwch ble mae'n aros. Cynhwyswch gaffael, cymeradwyaethau, trwyddedu, a dibyniaethau nad ydynt yn graddio. Dylai'r hwylusydd chwilio am yr aros hiraf nad yw'n dechnegol, gan ei fod yn aml yn gymeradwyaeth neu'n gontract. Cytunwch ar un cam i'w fyrhau a mesurwch yr effaith drwy amser arweiniol capasiti.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Cynhwyswch ddisgwyliad perfformiad ym meini prawf derbyn nodweddion sy'n cyffwrdd â llwybrau prysur, rhedwch brawf llwyth yn y biblinell lle mae'n ymarferol, a dywedwch wrth weithrediadau am lansiadau yn gynnar. Gwyliwch am yr arferiad o drin perfformiad fel tasg "caledu" ddiweddarach, sy'n troi'n waith anghynlluniedig (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn berchen ar y telemetreg, y cynllun capasiti, a'r ymateb pan gyrhaeddir terfyn. Maent angen dirlawnder a latency cynffon ar y dangosfyrddau y maent yn eu defnyddio mewn gwirionedd, cofrestr rhagolygon a rennir gyda'r busnes, a chanlyniadau profion y gellir ymddiried ynddynt. Dylent gofnodi pob digwyddiad sy'n gysylltiedig â chapasiti gyda'i achos (gweler pwnc 4.1, Metrigau rheoli problemau, a phwnc 3.4, Metrigau digwyddiadau mawr).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn penderfynu faint o risg a chost y mae'r sefydliad yn eu derbyn, a'r polisi lle i dyfu yw lle mae'r penderfyniad hwnnw'n ymddangos. Gofynnwch am ganraddau latency a lle i dyfu fesul gwasanaeth hanfodol, gyda'r gwall rhagolwg wrth eu hymyl, a thrinwch geisiadau am gapasiti fel penderfyniadau buddsoddi sy'n cario tystiolaeth. Dylai cyrff llywodraethu wrthsefyll un targed defnyddio adnoddau ledled y sefydliad, sy'n gwthio pob gwasanaeth i'r un pwynt ar y clogwyn.

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn teimlo arafwch fel annibynadwyedd, ymhell cyn i unrhyw rif argaeledd newid. Datganwch berfformiad mewn termau canraddau ar lwyth a nodwyd, a rhannwch sut mae'r gwasanaeth yn trin cyfnodau anterth (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA, a phwnc 6.2, Cytundebau lefel profiad).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae manwerthwr ar-lein o faint canolig yn rhedeg blaen siop, gwasanaeth taliadau, a gwasanaeth archebion, pob un yn eiddo i dîm cynnyrch, gyda thîm platfform yn darparu seilwaith a rennir. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae adolygiad wythnosol y tîm platfform yn dangos chwiliad y blaen siop gyda latency canolrifol o 180 milieiliad a p95 o 420 milieiliad, y ddau o fewn yr amcan, a defnydd prosesydd ar 95fed canradd awr anterth o 58 y cant. Dair wythnos cyn gwerthiant arfaethedig, mae arweinydd cymorth yn adrodd bod cwsmeriaid yn dweud bod y safle yn "ymlusgo" yn ystod ymgyrchoedd min nos. Mae'r dangosfwrdd yn wyrdd.

Mae'r tîm yn edrych ar y p99 ar gyfer chwilio yn yr awr brysuraf o'r gwerthiant blaenorol ac yn canfod 3.1 eiliad, yn erbyn amcan p99 o 1.5 eiliad. Mae dirlawnder yn dweud y gweddill: mae'r gronfa gysylltiadau i gronfa ddata'r cynnyrch yn dangos ceisiadau'n aros mewn 14 y cant o gyfnodau un munud yn ystod yr anterth, tra na ragorodd defnydd prosesydd ar 60 y cant erioed. Nid y prosesydd oedd y cyfyngiad erioed. Terfyn cronfa ydoedd a osodwyd pan oedd traffig yn draean o heddiw.

Mae'r perchennog cynnyrch a'r arweinydd platfform yn rhedeg prawf llwyth ar 1.5 gwaith anterth y llynedd, gan ddefnyddio cymysgedd cynhyrchu o weithredoedd. Mae'r prawf yn dangos bod yr amcan p99 yn cael ei dorri ar 1.15 gwaith anterth y llynedd, felly mae lle i dyfu yn 15 y cant yn erbyn polisi o 40 y cant ar gyfer gwasanaethau sy'n wynebu cwsmeriaid. Mae'r calendr marchnata yn awgrymu galw 1.6 gwaith anterth y llynedd ar y diwrnod agoriadol. Roedd yr hen ragolwg, wedi'i rewi yn y gofrestr, wedi gosod yr amrediad ar 1.2 i 1.4, a'r gwall yn erbyn gwerthiant y llynedd oedd 22 y cant, yn bennaf o ymgyrch e-bost heb ei chyhoeddi.

Mae gan y penderfyniad, a gofnodwyd yn y log penderfyniadau, bedair rhan. Yn gyntaf, codi terfyn y gronfa ac ychwanegu replicas darllen, ac ailbrofi. Yn ail, ychwanegu rhestr wirio parodrwydd gwerthiant at y broses ryddhau fel bod ymgyrchoedd yn cyrraedd y gofrestr rhagolygon o leiaf chwe wythnos ymlaen llaw. Yn drydydd, ychwanegu p99 a dirlawnder y gronfa at yr adolygiad wythnosol. Yn bedwerydd, cytuno gyda chyllid ar gost y capasiti ychwanegol ar gyfer ffenestr y gwerthiant, gan ddefnyddio graddio wedi'i drefnu yn lle sbâr drwy gydol y flwyddyn.

Ar ôl y newidiadau, mae ail brawf yn dangos yr amcan p99 yn dal hyd at 1.8 gwaith anterth y llynedd. Daeth y risg chwarae'r system i'r wyneb yn ystod yr adolygiad. Roedd contractwr wedi cynnig "buddugoliaeth gyflym" o eithrio ceisiadau arafach na 5 eiliad o'r adroddiad latency, ar y sail eu bod yn allanolion. Gwrthododd y tîm: y ceisiadau a eithriwyd oedd yn union y cwsmeriaid a gwynodd. Y rheilen warchod oedd cadw cyfraddau gwallau a therfynau amser wrth ymyl pob canradd latency a chofnodi maint y sampl. Yn ystod y gwerthiant mae'r p99 yn cyrraedd 1.2 eiliad, mae dirlawnder y gronfa yn aros islaw 1 y cant o gyfnodau, a'r gwall rhagolwg yw 9 y cant, wedi'i gofnodi yn y gofrestr gyda'r rheswm dros y methiant sy'n weddill.

## Y golwg fesul sector

**Busnes newydd.** Mae traffig yn fach ac mae twf yn ansicr, felly mae mesurau rhad yn well nag rhai cywrain. Olrheiniwch ganraddau latency ar gyfer y ddwy neu dair taith sy'n ennill arian, gwyliwch ddirlawnder ar y gronfa ddata, a rhedwch brawf llwyth syml cyn lansiadau. Gosodwch rybudd gwario fel nad yw nam neu bigyn traffig yn dod yn fil.

**Busnes bach.** Yn aml mae gwasanaethau'n cael eu cynnal neu eu prynu, felly mae capasiti yn fater i'r cyflenwr. Gofynnwch i'r cyflenwr am adroddiadau perfformiad a chapasiti yn ysgrifenedig, dysgwch beth mae'r contract yn ei ddweud am gyfnodau anterth, a gwyliwch olwg y cwsmer gydag ychydig o wiriadau synthetig. Olrheiniwch le i dyfu ar yr un system na all y busnes wneud hebddi.

**Menter fawr.** Mae llawer o wasanaethau'n rhannu seilwaith, felly mae problemau capasiti yn ymddangos yn y lle anghywir. Buddsoddwch mewn map gwasanaeth sy'n cysylltu gwasanaethau â'r cydrannau y maent yn eu defnyddio, proses ragweld a rennir gyda'r unedau busnes, a diffiniadau cyffredin o ganraddau latency ar draws timau. Gosodwch bolisi lle i dyfu yn ôl pwysigrwydd gwasanaeth.

**Llywodraeth a'r sector cyhoeddus.** Siapir galw gan derfynau amser a osodir mewn cyfraith, megis dyddiadau ffeilio treth, hawliadau budd-daliadau, ac etholiadau, ac mae methiant ar y dyddiadau hynny yn gyhoeddus. Dylai rhagolygon ddefnyddio'r calendr statudol, ac efallai y bydd angen contractio capasiti ar gyfer yr anterth fisoedd ymlaen llaw. Mae amseroedd arweiniol caffael yn ymestyn amser arweiniol capasiti, felly mesurwch hwy a chynlluniwch o'u cwmpas. Dylai adroddiadau cyhoeddus o berfformiad gwasanaeth nodi'r ganradd a'r amodau llwyth (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae gan y gost bedair rhan. Y gyntaf yw offeryniaeth: telemetreg a'i storfa. Yr ail yw profi: amgylchedd cynrychioliadol a modelau llwyth gwaith sydd angen eu cynnal. Y drydedd yw'r drefn gynllunio: cadw'r gofrestr rhagolygon ac adolygu gwall bob chwarter. Y bedwaredd yw'r capasiti sbâr ei hun, sydd yn aml y gost fwyaf a'r un sydd fwyaf gwerth ei gwneud yn eglur.

Daw'r elw o lai o ddigwyddiadau sy'n gysylltiedig â chapasiti, penderfyniadau gwell am pryd i brynu a phryd i beidio, a gwariant a osgowyd ar gapasiti y mae data'n dangos nad yw'n angenrheidiol. Peidiwch ag addo arbediad canrannol ymlaen llaw. Yn lle hynny, mesurwch eich patrwm eich hun: nifer y digwyddiadau ag achos capasiti y chwarter, cyfran y brigau a oedd angen gweithredu brys, y gwariant ar gapasiti segur o'i gymharu â'r polisi lle i dyfu y cytunwyd arno, a'r duedd yng ngwall y rhagolwg. Mae llyfr Google SRE yn trin dibynadwyedd fel penderfyniad economaidd.

Pobl a'r amgylchedd prawf sy'n dominyddu cyfanswm cost perchnogaeth. Gall tîm bach ddechrau gyda'r monitro presennol, adolygiad wythnosol, ac un prawf llwyth ar gyfer y daith bwysicaf.

## Gwrthbatrymau a maglau

- **Adrodd defnyddio adnoddau cyfartalog fel stori'r capasiti.** Mae'r cyfartaledd yn cuddio'r anterth a'r clogwyn. Adroddwch ganradd uchel yr awr anterth a'r mesur dirlawnder.
- **Latency cymedrig ar y dangosfwrdd gweithredol.** Y gynffon sy'n gyrru'r cwynion. Dangoswch p95 a p99, gyda chyfraddau gwallau a maint y sampl.
- **Eithrio "allanolion" o latency.** Defnyddwyr go iawn yw'r ceisiadau arafaf. Cadwch hwy, ac ymchwiliwch i'r achos yn lle trimio'r data.
- **Cyfartaleddu canraddau ar draws gweinyddion.** Mae'r canlyniad yn disgrifio neb. Cyfunwch histogramau neu arsylwadau crai cyn cyfrifo'r ganradd.
- **Cynlluniau capasiti a adeiladwyd o draffig y llynedd yn unig.** Mae galw yn dibynnu ar ddigwyddiadau busnes. Cynhwyswch y calendr busnes ac adolygwch wall rhagolwg.
- **Profi mewn amgylchedd sy'n annhebyg i gynhyrchu.** Mae canlyniad sy'n pasio yn rhoi hyder ffug. Cofnodwch y gwahaniaethau a'u cywiro, neu profwch mewn cynhyrchu yn ddiogel.
- **Defnyddio metrigau capasiti i raddio peirianwyr neu dimau.** Mae defnyddio adnoddau a latency yn disgrifio systemau. Adolygwch hwy o ran dylunio gwasanaeth a galw, a chadwch unigolion allan o'r darlun.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Mesur defnyddio adnoddau, dirlawnder, a latency | Cyfartaleddau o ychydig o weinyddion; rhybuddion ar ddefnydd prosesydd uchel | Mae rhai timau'n siartio canraddau latency a chiwiau | Diffiniadau a rennir: canraddau fesul gweithred allweddol, dirlawnder wrth ymyl defnyddio adnoddau, ffenestri wedi'u hysgrifennu | Wedi'u tueddu yn erbyn amcanion, wedi'u paru â chyfraddau gwallau, wedi'u hadolygu'n wythnosol | Diffiniadau wedi'u diwygio ar y cyd â chyflenwyr a chwsmeriaid; golygon ochr defnyddiwr ac ochr gweinydd wedi'u cysoni |
| Terfynau a lle i dyfu | Terfynau anhysbys nes bod methiant | Profion llwyth achlysurol cyn lansiadau mawr | Profion llwyth ar wasanaethau hanfodol yn erbyn polisi lle i dyfu ysgrifenedig | Lle i dyfu wedi'i olrhain fesul gwasanaeth ac wedi'i ailbrofi ar ôl newidiadau perthnasol | Polisi lle i dyfu wedi'i addasu o ddata cost, risg, a digwyddiadau ar draws timau a chyflenwyr |
| Rhagweld | Dyfalu ad hoc ar adeg cais | Mae timau unigol yn cadw rhagolygon yn eu pennau neu mewn taenlenni | Cofrestr rhagolygon a rennir gydag amrediadau a pherchnogion, wedi'i bwydo gan y calendr busnes | Gwall rhagolwg wedi'i sgorio a'i adolygu, gydag achosion methiannau | Rhagolygon wedi'u hadeiladu gyda'r busnes a chyflenwyr; mewnbynnau wedi'u gwella'n rheolaidd |
| Cyflawni capasiti | Capasiti wedi'i ychwanegu ar ôl digwyddiad | Ceisiadau safonol ar gyfer achosion cyffredin | Llwybr dogfenedig o gymeradwyo i draffig cynhyrchu, gydag amser arweiniol capasiti wedi'i fesur | Aros hiraf wedi'i dargedu gyda gwelliant wedi'i ariannu | Capasiti wedi'i ychwanegu'n awtomatig o fewn polisi; ymddygiad graddio a chost wedi'u hadolygu gyda'i gilydd |

## Rhestr wirio

- [ ] Enwir y teithiau defnyddwyr hanfodol, pob un â disgwyliad latency y cytunwyd arno gyda'i berchennog.
- [ ] Adroddir latency fel y canolrif, p95, a p99 fesul gweithred, gyda'r ffenestr a maint y sampl wedi'u nodi.
- [ ] Cyfrifir canraddau o histogramau neu arsylwadau crai, byth wedi'u cyfartaleddu ar draws gweinyddion.
- [ ] Mae gan bob siart defnyddio adnoddau siart dirlawnder wrth ei hymyl.
- [ ] Dangosir cyfraddau gwallau a therfynau amser wrth ymyl pob canradd latency.
- [ ] Mae gan bob gwasanaeth hanfodol brawf llwyth, gyda gwahaniaethau llwyth gwaith ac amgylchedd wedi'u hysgrifennu i lawr.
- [ ] Mae polisi lle i dyfu yn bodoli fesul pwysigrwydd gwasanaeth, gyda'r rhesymu wedi'i gofnodi.
- [ ] Mae cofrestr rhagolygon wedi'i dyddio yn dal amrediadau, rhagdybiaethau, a pherchnogion, ac yn cael ei bwydo gan y calendr busnes.
- [ ] Adolygir gwall rhagolwg bob chwarter, gydag achosion methiannau mawr wedi'u cofnodi.
- [ ] Mesurir amser arweiniol capasiti o gymeradwyo i gario traffig.
- [ ] Adolygir terfynau, oedi, a chost awto-raddio gyda pherchennog y gwasanaeth.
- [ ] Ni adroddir unrhyw fesur capasiti neu berfformiad yn ôl unigolyn.

## Anogwyr AI

**Adolygwch adroddiad latency am ystumio cudd.**

```text
Dyma sut yr ydym yn adrodd latency ar gyfer [gweithred neu wasanaeth]: [disgrifiad
o'r pwynt mesur, y ffenestr, yr ystadegau a ddangosir, a pha geisiadau a
gynhwysir neu a eithrir]. Mae ein defnyddwyr yn poeni am [taith defnyddiwr neu
ddisgwyliad]. Nodwch ffyrdd y gallai'r adroddiad hwn danddatgan profiad y
defnyddwyr arafaf, megis cyfartaleddu, rheolau eithrio, samplu, neu leoliad
mesur. Awgrymwch beth i'w ddangos yn lle hynny a pha ddata ychwanegol y byddai ei
angen arnaf. Peidiwch â dyfeisio gwerthoedd meincnod na throthwyon; gofynnwch i
mi am y rhai sydd eu hangen arnoch. Rhestrwch eich rhagdybiaethau.
```

**Drafftiwch gynllun prawf llwyth ar gyfer gwasanaeth.**

```text
Mae angen cynllun prawf llwyth arnaf ar gyfer [enw'r gwasanaeth]. Ei brif
deithiau defnyddwyr yw [teithiau], ei ddibyniaethau yw [dibyniaethau], ac mae ei
gymysgedd traffig cynhyrchu tua [disgrifiad o'r cymysgedd]. Mae'r amgylchedd
prawf yn wahanol i gynhyrchu yn y ffyrdd hyn: [gwahaniaethau]. Cynigiwch fodel
llwyth gwaith, patrwm codi, y mesurau i'w cofnodi (canraddau latency, cyfradd
gwallau, defnyddio adnoddau, dirlawnder), yr amodau stopio, a'r cwestiynau y
dylai'r canlyniadau eu hateb. Peidiwch â thybio nodweddion offer na dyfeisio
gwerthoedd targed. Rhestrwch eich rhagdybiaethau a risgiau'r prawf.
```

**Strwythurwch ragolwg galw gyda'r busnes.**

```text
Rwy'n paratoi rhagolwg capasiti ar gyfer [gwasanaeth] sy'n cwmpasu [gorwel].
Mewnbynnau hysbys: [disgrifiad traffig hanesyddol], [digwyddiadau busnes a
dyddiadau], a [newidiadau cynlluniedig]. Drafftiwch gynllun cofrestr rhagolygon
gydag achosion isel, disgwyliedig, ac uchel, y rhagdybiaethau y tu ôl i bob un,
perchennog pob mewnbwn, a threfn adolygu sy'n sgorio gwall rhagolwg. Awgrymwch
gwestiynau i'w gofyn i [rhanddeiliaid busnes]. Peidiwch â dyfeisio cyfraddau
twf na ffactorau tymhorol. Rhestrwch eich rhagdybiaethau.
```

**Dewch o hyd i'r gwir gyfyngiad o symptomau.**

```text
Mae gwasanaeth yn dangos y symptomau hyn yn ystod llwyth anterth: [symptomau,
er enghraifft p99 araf, twf ciw, mathau o wallau]. Data defnyddio adnoddau:
[crynodeb o ddefnyddio adnoddau]. Data dirlawnder: [crynodeb o giwiau,
cronfeydd, sbarduno]. Nodiadau pensaernïaeth: [disgrifiad byr]. Rhestrwch yr
adnoddau a'r terfynau a allai fod y cyfyngiad, y dystiolaeth a fyddai'n
gwahaniaethu rhyngddynt, a'r prawf nesaf rhataf ar gyfer pob un. Peidiwch â
hawlio achos nad yw'r data yn ei gefnogi. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n diffinio mesur capasiti neu berfformiad, ei glociau, a'r rheilen warchod sy'n perthyn wrth ei ymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod pwnc capasiti neu berfformiad wedi'i olygu yn cadw pob metrig wedi'i baru â ffordd o chwarae'r system a rheilen warchod.

## Pwyntiau allweddol

- Mesurwch ddirlawnder gyda defnyddio adnoddau, oherwydd bod defnyddwyr yn teimlo'r ciw, nid y ganran.
- Adroddwch latency fel canraddau fesul gweithred, gyda chyfraddau gwallau a maint y sampl, a pheidiwch byth â chyfartaleddu canraddau.
- Dewch o hyd i derfynau drwy brofi a gosodwch le i dyfu fel polisi wedi'i gofnodi sy'n pwyso cost yn erbyn risg.
- Rhagwelwch alw fel amrediadau gyda'r busnes, rhewch y rhagolwg, a dysgwch o'r gwall.
- Byrhewch amser arweiniol capasiti a mesurwch awto-raddio, fel bod capasiti yn dilyn yr angen.
- Disgrifiwch wasanaethau a systemau, byth bobl, a thrinwch rifau sy'n edrych yn berffaith fel anogwr i wirio'r mesuriad.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Google, "Monitoring Distributed Systems," chapter in *Site Reliability Engineering*, 2016, https://sre.google/sre-book/monitoring-distributed-systems/
3. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
4. Dean, J., and Barroso, L. A., "The Tail at Scale," *Communications of the ACM*, 56(2), 2013.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Gregg, B., *Systems Performance: Enterprise and the Cloud*, 2nd edition, Addison-Wesley, 2020.
7. Allspaw, J., *The Art of Capacity Planning*, O'Reilly Media, 2008.
8. Gunther, N. J., *Guerrilla Capacity Planning*, Springer, 2007.
9. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
10. AXELOS (now PeopleCert), *ITIL 4 Foundation* and the ITIL 4 practice guide for capacity and performance management, 2019 onwards.
11. Wikipedia, [Capacity planning](https://en.wikipedia.org/wiki/Capacity_planning).
12. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
13. Wikipedia, [Latency (engineering)](https://en.wikipedia.org/wiki/Latency_(engineering)).
14. Wikipedia, [Throughput](https://en.wikipedia.org/wiki/Throughput).
15. Wikipedia, [Queueing theory](https://en.wikipedia.org/wiki/Queueing_theory).
16. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
17. Wikipedia, [Load testing](https://en.wikipedia.org/wiki/Load_testing).
18. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
19. Wikipedia, [Tail latency](https://en.wikipedia.org/wiki/Tail_latency).
20. Wikipedia, [Forecasting](https://en.wikipedia.org/wiki/Forecasting).
21. Wikipedia, [Seasonality](https://en.wikipedia.org/wiki/Seasonality).
22. Wikipedia, [Autoscaling](https://en.wikipedia.org/wiki/Autoscaling).
