# Metrigau parhad gwasanaeth

**Rhagdybiaeth yw cynllun adfer nes bod ymarfer wedi'i brofi, felly dylai metrigau parhad gyfrif yr hyn a adferwyd mewn gwirionedd, pa mor gyflym, a faint o ddata a ddaeth yn ôl, a byth nifer y cynlluniau ar silff.**

## Crynodeb a chymhelliant

Mae'r rhan fwyaf o fesurau digwyddiadau yn disgrifio'r diwrnod drwg cyffredin: defnydd a fethodd, cronfa ddata wedi'i dirlenwi, cymydog swnllyd. Mae parhad gwasanaeth yn disgrifio'r diwrnod prin, difrifol, pan fo rhanbarth yn methu, storfa ddata yn cael ei llygru, cyflenwr yn diflannu, neu ransomware yn amgryptio'r ystad. [Cynllunio parhad busnes](https://en.wikipedia.org/wiki/Business_continuity_planning) yw'r ddisgyblaeth o baratoi sefydliad i barhau i gyflenwi ar lefelau derbyniol drwy ddigwyddiadau o'r fath. Yn ITIL 4, gelwir yr arfer yn rheoli parhad gwasanaeth, a dyma olwg gwasanaeth TG y nod mwy hwnnw (gweler y pwnc cyfatebol yn y *Canllaw ITIL Ystwyth* cydymaith).

Mae dau derm yn cario'r rhan fwyaf o'r pwysau. Yr [amcan amser adfer](https://en.wikipedia.org/wiki/Recovery_time_objective) (RTO) yw'r amser derbyniol i adfer gwasanaeth ar ôl tarfu. Yr [amcan pwynt adfer](https://en.wikipedia.org/wiki/Recovery_point_objective) (RPO) yw'r swm derbyniol o ddata a gollir, wedi'i fynegi fel rhychwant amser: mae RPO o awr yn golygu bod colli awr olaf yr ysgrifennu yn oddefadwy ac nad yw colli mwy. Daw'r ddau o [ddadansoddiad effaith busnes](https://en.wikipedia.org/wiki/Business_impact_analysis) (BIA), y dull o adnabod pa weithgareddau sydd bwysicaf, beth sy'n dibynnu ar beth, a beth mae tarfu yn ei gostio. Penderfyniadau busnes â phris yw'r amcanion, oherwydd bod amcanion tynnach angen mwy o ormodedd, mwy o awtomeiddio, a mwy o amser ymarfer.

Yr anhawster yw bod amcan yn addewid am ddigwyddiad yn y dyfodol nad yw wedi digwydd. Prawf yw'r dystiolaeth onest. A adferodd y tîm y gwasanaeth o fewn yr RTO yn yr ymarfer diwethaf? A oedd y data a adferwyd yn bodloni'r RPO? A oedd y camau yn y cynllun yr un camau ag y cymerodd y tîm mewn gwirionedd? Mae metrig parhad felly yn bennaf yn fesuriad o ymarferion, ac mae ansawdd y mesuriad yn dibynnu ar pa mor realistig oedd yr ymarfer.

Mae timau ystwyth a pheirianneg dibynadwyedd safleoedd (SRE) yn dod ag arferion defnyddiol at hyn. Mae eu systemau'n newid yn wythnosol, felly mae cynllun a ysgrifennir unwaith ac a ffeilir yn mynd yn hen o fewn misoedd. Yr ymateb ystwyth yw cadw adferiad fel cod (er enghraifft gyda [seilwaith fel cod](https://en.wikipedia.org/wiki/Infrastructure_as_code)), ei ymarfer yn aml, a thrin pob ymarfer fel ffynhonnell eitemau ôl-groniad. Mae [peirianneg anhrefn](https://en.wikipedia.org/wiki/Chaos_engineering) a diwrnodau gêm yn cymhwyso'r un syniad ar raddfa lai: ysgogi methiant yn fwriadol, mewn ffordd reoledig, a gwylio beth sy'n digwydd. Disgrifir yr olwg SRE yn llyfr *Site Reliability Engineering* Google, ac mae'r maes ehangach wedi'i grynhoi yn yr erthygl [peirianneg dibynadwyedd safleoedd](https://en.wikipedia.org/wiki/Site_reliability_engineering).

### Sut mae'r golygon yn wahanol

- **Golwg ITIL.** Mae rheoli parhad gwasanaeth yn arfer sy'n gosod amcanion adfer o'r BIA, yn dylunio cynlluniau, ac yn eu profi â phrofion. Ei allbynnau yw cynlluniau, adroddiadau ymarfer, a chanfyddiadau a gofnodwyd. Mae safon [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301) yn disgrifio system rheoli parhad busnes. Fel ym mis Hydref 2026, gwiriwch yr argraffiad cyfredol yn uniongyrchol os yw cwsmer neu reoleiddiwr yn mynnu cydymffurfiaeth.
- **Golwg ystwyth.** Mae gallu adfer yn briodwedd cynnyrch yn y diffiniad o orffen. Nid yw stori sy'n ychwanegu storfa ddata wedi'i gorffen nes bod ei llwybr adfer wedi'i drio.
- **Golwg SRE.** Mae gwaith dibynadwyedd wedi'i gyllidebu a'i fesur. Mae methu drosodd, driliau adfer, a diwrnodau gêm yn waith wedi'i drefnu gyda pherchnogion a chanfyddiadau sy'n mynd i'r ôl-groniad.

Mae'r pwnc hwn yn ymdrin â saith mesur: adferiad yn erbyn amcanion amser a data mewn profion, cwmpas ac amseroldeb ymarferion, adfer o gopïau wrth gefn, cau canfyddiadau, ac amseroldeb cynlluniau. Mae toriadau go iawn yn y metrigau digwyddiadau mawr (gweler pwnc 3.4, Metrigau digwyddiadau mawr) a'r metrigau argaeledd (gweler pwnc 5.3, Metrigau argaeledd). Mae amcanion a fynegir fel targedau sy'n wynebu defnyddwyr yn y pwnc ar ddangosyddion a chyllidebau (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau). Mae "amser adfer defnydd a fethodd" rhaglen ymchwil DORA yn gloc llawer llai (gweler pwnc 2.8, Metrigau DORA). Mae gwraidd achosion a ddatgelir gan brofion yn perthyn i'r pynciau problemau a dysgu (gweler pwnc 4.1, Metrigau rheoli problemau, a phwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu).

Mae **haen** yn ddosbarth o wasanaeth wedi'i grwpio yn ôl pa mor gyflym y mae'n rhaid iddo ddod yn ôl. Mae **ymarfer bwrdd** yn ymarfer ar sail trafodaeth heb unrhyw newidiadau system. Mae **diwrnod gêm** yn ymarfer ymarferol lle mae tîm yn ysgogi neu'n efelychu methiant ac yn arsylwi'r ymateb. Mae **canfyddiad** yn fwlch a gofnodwyd rhwng y cynllun a'r hyn a ddigwyddodd. **Amseroldeb cynllun** yw pa mor dda y mae cynllun yn adlewyrchu'r gwasanaeth fel y mae heddiw.

## Egwyddorion allweddol

- **Profwch, yna hawliwch.** Dim ond adferiad a gyflawnwyd ac a amserwyd mewn gwirionedd sy'n dilysu RTO neu RPO. Adroddwch yr amcan a'r canlyniad a ddangoswyd ddiwethaf ochr yn ochr.
- **Mesurwch realaeth, nid dim ond llwyddiant.** Dywed adferiad cronfa ddata brawf wag a basiodd mewn munudau ychydig am adferiad maint cynhyrchu. Cofnodwch gwmpas ac amodau pob ymarfer wrth ymyl y canlyniad.
- **Haenwch yr ystad a gwariwch ymdrech yn ôl haen.** Mae gwasanaethau hanfodol yn cael profion mynych, realistig. Mae gwasanaethau haen isel yn cael gwiriadau ysgafnach. Mae un targed amlder ar gyfer popeth yn gwastraffu ymdrech neu'n colli risg.
- **Trinwch ganfyddiadau fel cynnyrch ymarfer.** Rhestr gaeedig o fylchau yw allbwn gwerthfawr diwrnod gêm. Mae prawf heb ganfyddiadau naill ai'n rhagorol neu'n rhy dyner, a dylech ganfod pa un.
- **Disgrifiwch wasanaethau a chylchdroeon, byth unigolion.** Mae canlyniadau ymarferion yn disgrifio'r system a'r cynllun. Ni raddir neb yn ôl pa mor gyflym yr adferodd ddril.
- **Dangoswch bob ymarfer fel ei res ei hun.** Ychydig o brofion sydd fesul gwasanaeth y flwyddyn, felly mae cyfartaleddau'n camarwain (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

## Diffiniadau metrigau

Mae pob metrig yn rhestru'r cloc neu'r cyfrif, yr hyn a eithrir, a'r ffynhonnell data. Mae angen rheol ysgrifenedig ar bob rhes cyn ymddiried ynddi. Mae "gwasanaeth haen-1" isod yn golygu gwasanaeth yn yr haen adfer uchaf a ddiffinnir gan eich BIA eich hun.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd bodloni RTO | Cyfran yr ymarferion adfer lle adferwyd y gwasanaeth o fewn ei RTO a nodwyd | ymarferion gydag amser adfer <= RTO / ymarferion a gynhaliwyd. Mae'r cloc yn dechrau ar ddechrau datganedig methiant yr ymarfer (amser chwistrellu neu ddatganiad senario) ac yn stopio pan fo'r gwasanaeth yn pasio ei wiriad iechyd y cytunwyd arno ar gyfer defnyddwyr go iawn neu synthetig. Eithrir ymarferion bwrdd ac ymarferion heb adfer wedi'i amseru a'u cyfrif ar wahân | canran, gyda nifer yr ymarferion wedi'i ddangos | Adroddiad ymarfer, amserlen o fonitro, cofrestr gwasanaethau gydag RTO | Rheoli parhad gwasanaeth; rheoli argaeledd | Canlyniad diwrnod gêm; amser i adfer mewn metrigau cyflawni | Fesul ymarfer; wedi'i grynhoi'n chwarterol |
| Cyfradd bodloni RPO | Cyfran yr ymarferion adfer lle arhosodd colli data o fewn yr RPO a nodwyd | ymarferion gyda rhychwant colli data a fesurwyd <= RPO / ymarferion sy'n adfer data. Rhychwant colli data yw'r amser rhwng yr ysgrifen olaf sy'n bresennol ar ôl adfer a moment y methiant. Eithrir ymarferion nad ydynt yn adfer unrhyw gyflwr | canran, gyda nifer yr ymarferion wedi'i ddangos | Adroddiad ymarfer, cymhariaeth o'r data a adferwyd â'r ffynhonnell neu'r log ysgrifennu | Rheoli parhad gwasanaeth; rheoli diogelwch gwybodaeth | Dril adfer fel rhan o'r diffiniad o orffen | Fesul ymarfer; wedi'i grynhoi'n chwarterol |
| Cwmpas adfer wedi'i brofi | Cyfran y gwasanaethau haen-1 a haen-2 a gafodd brawf adfer ymarferol o fewn eu cyfwng prawf y cytunwyd arno | gwasanaethau gyda phrawf cymwys y tu mewn i'r cyfwng / gwasanaethau dan sylw. Mae prawf cymwys yn ymarferol (nid bwrdd yn unig) ac yn adfer y gwasanaeth yn yr amgylchedd prawf neu gynhyrchu. Gosodir y cyfwng fesul haen | canran, yn ôl haen | Cofrestr gwasanaethau, calendr ac adroddiadau ymarferion | Rheoli parhad gwasanaeth; rheoli catalog gwasanaethau | Amserlen diwrnodau gêm | Misol |
| Diwrnodau ers y prawf adfer llwyddiannus diwethaf | Oedran y prawf adfer sy'n pasio diweddaraf ar gyfer pob gwasanaeth hanfodol | dyddiad yr adroddiad llai dyddiad y prawf diweddaraf a fodlonodd yr RTO a'r RPO. Nid yw prawf a fethodd yn ailosod y cloc. Dangosir gwasanaethau na phrofwyd erioed fel "byth" ac nid fel sero | diwrnodau, fesul gwasanaeth, gyda'r hynaf wedi'i amlygu | Adroddiadau ymarferion, cofrestr gwasanaethau | Rheoli parhad gwasanaeth | Amserlen diwrnodau gêm; oedran eitem waith | Misol |
| Cyfradd llwyddiant adfer o gopi wrth gefn | Cyfran yr adferiadau a geisiwyd o gopi wrth gefn a gwblhaodd gyda data wedi'i wirio, defnyddiadwy | adferiadau a gwblhaodd ac a basiodd wiriad gwirio data / adferiadau a geisiwyd, dros brofion adfer awtomataidd a llaw. Eithrir llwyddiant swydd copi wrth gefn yn unig, oherwydd nad yw swydd a redodd yn adfer a weithiodd | canran, yn ôl haen data | Logiau system copi wrth gefn, canlyniadau gwirio adfer awtomataidd | Rheoli parhad gwasanaeth; rheoli seilwaith a phlatfform | Dril adfer; meini prawf gweithredadwyedd yn y diffiniad o orffen | Wythnosol ar gyfer profion awtomataidd; misol mewn adolygiad |
| Cyfradd cau canfyddiadau ymarfer | Cyfran y canfyddiadau o ymarferion adfer a gaewyd o fewn eu hamser y cytunwyd arno, wedi'i rhannu yn ôl difrifoldeb | canfyddiadau a gaewyd o fewn y targed / canfyddiadau a ddaeth yn ddyledus yn y cyfnod. Mae'r cloc yn dechrau pan gofnodir y canfyddiad yn adroddiad yr ymarfer ac yn stopio ar atgyweiriad wedi'i wirio, sy'n golygu ailbrawf neu adolygiad sy'n ei gadarnhau. Cyfrifir canfyddiadau a dderbyniwyd fel risgiau gan berchennog a enwir ar wahân | canran, gyda chyfrif y rhai hwyr | Adroddiad ymarfer, traciwr materion | Rheoli parhad gwasanaeth; gwelliant parhaus | Eitemau gweithredu ôl-sylliad; oedran eitem ôl-groniad | Misol |
| Amseroldeb cynllun | Cyfran y cynlluniau parhad a'r llawlyfrau gweithredu a adolygwyd ar ôl newid sylweddol diwethaf eu gwasanaeth, neu o fewn eu cyfwng adolygu | cynlluniau gyda dyddiad adolygu yn ddiweddarach na'r newid sylweddol diwethaf ac y tu mewn i'r cyfwng / cynlluniau dan sylw. Mae newid sylweddol yn golygu cofnod newid wedi'i fflagio fel un sy'n newid pensaernïaeth, storfeydd data, dibyniaethau, neu gyflenwyr | canran, gydag oedran y cynllun hynaf heb ei adolygu | Ystorfa cynlluniau (rheoli fersiynau), cofnodion newid, cofrestr gwasanaethau | Rheoli parhad gwasanaeth; galluogi newid | Mae'r diffiniad o orffen yn cynnwys diweddaru llawlyfr gweithredu | Chwarterol |

Mae'r cloc RTO mewn ymarfer yn wahanol i'r cloc mewn toriad go iawn, sy'n dechrau ar effaith (gweler pwnc 3.4, Metrigau digwyddiadau mawr), felly cymharwch ymarferion ag ymarferion. Mae ymarfer sydd wedi'i sgriptio'n agos yn mesur cyflymder ymarfer, felly cofnodwch faint o syndod yr oedd yn ei gynnwys.

## Argymhellion

### Gosodwch amcanion y gellir eu profi

**1. Deilliwch RTO a RPO o ddadansoddiad effaith busnes, ac ysgrifennwch hwy wrth ymyl y gwasanaeth.** Mae'r BIA yn gofyn i'r busnes beth mae awr, diwrnod, ac wythnos o doriad yn ei gostio a pha ddata y gall fforddio ei golli. Cofnodwch yr atebion yn y gofrestr gwasanaethau fel y gellir cymharu pob prawf ag amcan a nodwyd. Mae amcanion a ddewisir gan beirianwyr yn unig yn tueddu i fod naill ai'n anfforddiadwy neu'n anghysylltiedig â'r hyn sydd ei angen ar gwsmeriaid.

**2. Haenwch y gwasanaethau a gosodwch gyfnodau prawf yn ôl haen.** Mae nifer fach o haenau, tair neu bedair efallai, yn haws i'w rhedeg na rheol wahanol ar gyfer pob gwasanaeth. Rhowch y profion mwyaf mynych a mwyaf realistig i'r haen uchaf, a rhowch wiriad ysgafn i'r haen isaf megis adfer sampl o bryd i'w gilydd. Ysgrifennwch y cyfnodau i lawr ac adolygwch hwy pan fo'r BIA yn newid.

**3. Gwiriwch fod yr amcan yn ffitio'r bensaernïaeth.** Mae RPO o bum munud gyda chopi wrth gefn nosol yn wrthddywediad y bydd prawf yn ei ddatgelu ar y foment waethaf. Cymharwch bob amcan â'r dyluniad copi wrth gefn, atgynhyrchu, a methu drosodd cyn yr ymarfer cyntaf, a chofnodwch unrhyw fwlch fel canfyddiad.

### Profwch mewn ffyrdd sy'n datgelu rhywbeth

**4. Cymysgwch ymarferion bwrdd, driliau adfer, a diwrnodau gêm.** Mae ymarfer bwrdd yn rhad ac yn canfod bylchau mewn rolau, cysylltiadau, a phenderfyniadau. Mae dril adfer ymarferol yn canfod bylchau mewn gweithdrefnau, caniatadau, a data. Mae diwrnod gêm, sy'n ysgogi methiant ac yn gwylio'r ymateb, yn canfod bylchau mewn monitro, llawlyfrau gweithredu, a chydlynu. Adroddwch bob math ar wahân fel nad yw rhediad o ymarferion bwrdd hawdd yn edrych fel prawf o adfer.

**5. Amserwch yr adferiad ar ddata maint cynhyrchu.** Gall adferiad sy'n gweithio ar gopi bach fethu ar y cyfaint go iawn oherwydd terfynau trwybwn neu storfa. Lle mae profion graddfa lawn yn rhy gostus i'w rhedeg yn aml, rhedwch un o bryd i'w gilydd a nodwch unrhyw allosod. Cofnodwch faint y data gyda'r canlyniad.

**6. Gwiriwch fod data a adferwyd yn ddefnyddiadwy.** Ychwanegwch wiriad awtomataidd ar ôl adferiad, megis cyfrif rhesi, swm gwirio, neu drafodiad synthetig. Cyfrifwch adferiad fel un llwyddiannus dim ond pan fo'r gwiriad hwnnw'n pasio.

**7. Ychwanegwch syndod yn raddol.** Gellir cyhoeddi a sgriptio ymarferion cynnar. Dylai rhai diweddarach ddal manylion y methiant yn ôl a chynnwys dibyniaethau megis tystlythyrau sydd wedi dod i ben neu gyflenwr anghyraeddadwy. Cofnodwch lefel y syndod fel y gellir darllen canlyniadau yn eu cyd-destun.

### Trowch ganfyddiadau yn newid

**8. Logiwch bob canfyddiad gyda pherchennog, difrifoldeb, a dyddiad dyledus.** Mae diwrnod gêm yn cynhyrchu rhestr: caniatâd coll, cam llawlyfr gweithredu nad yw'n cyfateb i'r offeryn mwyach, monitor na thaniodd erioed. Rhowch bob un yn ôl-groniad y tîm gyda'r un gwelededd â gwaith nodweddion. Olrheiniwch oedran canfyddiadau agored a'r gyfran a gaewyd mewn pryd, a chadarnhewch gau drwy ailbrawf lle bo'n ymarferol.

**9. Cysylltwch ganfyddiadau â rheoli problemau a dysgu.** Mae canfyddiad sy'n ailadrodd ar draws ymarferion yn broblem yn yr ystyr ITIL (gweler pwnc 4.1, Metrigau rheoli problemau). Adolygwch bob ymarfer yn ddi-fai, fel y byddech ôl-farwolaeth, ac olrheiniwch gamau hyd at eu cau (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu).

### Cadwch gynlluniau'n fyw

**10. Cadwch gynlluniau a llawlyfrau gweithredu mewn rheoli fersiynau, a'u cysylltu â newid.** Pan fo cofnod newid yn newid pensaernïaeth, storfa ddata, neu gyflenwr, mynnwch fod y cynllun perchnogol yn cael ei adolygu yn yr un darn o waith (gweler pwnc 4.3, Metrigau galluogi newid). Mesurwch amseroldeb cynllun yn erbyn y newid sylweddol diwethaf ac nid dim ond yn erbyn y calendr. Dim ond yn enw y mae cynllun a adolygir bob chwarter sy'n anwybyddu mudo y mis diwethaf yn gyfredol.

**11. Cadwch y map dibyniaethau yn onest.** Mae trefn adfer yn dibynnu ar wasanaethau a rennir megis hunaniaeth, datrys enwau, a storfa cyfrinachau. Cysonwch y map yn erbyn cofnodion cyfluniad a thrwsiwch y bylchau y mae ymarferion yn eu datgelu (gweler pwnc 7.4, Metrigau ansawdd cyfluniad a CMDB).

**12. Cynhwyswch gyflenwyr, a chylchdrowch ddyletswydd ymarfer.** Gofynnwch i bob cyflenwr hanfodol am ei dystiolaeth brofi ei hun a chytunwch sut i ymarfer y camau ar y cyd (gweler pwnc 8.4, Metrigau cyflenwyr a chontractau). Mae ymarferion yn defnyddio amser, felly rhannwch y ddyletswydd ar draws cylchdro a'i chyfrif fel llwyth gweithredol (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

Mae rhifau parhad yn hawdd eu gwenieithu oherwydd ychydig o bobl sy'n edrych yn agos ar ymarfer, ac mae'r gwir brawf yn digwydd yn anaml. Mae'r tabl yn parau pob metrig â ffordd y caiff ei chwarae a'r gwiriad sy'n ei ddal. Mae'r parau yn dilyn y ffurf a nodir ym mhwnc 1.2 (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfradd bodloni RTO | Dewis set ddata brawf fach, senario hawdd, neu sgript wedi'i hymarfer; dechrau'r cloc yn hwyr, ar ôl i'r tîm ddechrau; llacio'r gwiriad iechyd fel bod "wedi'i adfer" yn cyrraedd yn gynt; gosod RTO hael fel bod pob prawf yn pasio | Cofnodi maint data, syndod senario, a diffiniad y gwiriad iechyd gyda phob canlyniad; cymharu'r RTO â'r BIA; dangos pob ymarfer fel ei res ei hun, gan gynnwys methiannau |
| Cyfradd bodloni RPO | Mesur colled ar gyfer y prif dabl yn unig ac nid pob cyflwr; profi replica sy'n cydamseru am nad oes llwyth yn rhedeg; ail-ddiffinio'r RPO ar ôl canlyniad a fethwyd | Gwirio colli data yn erbyn y log ysgrifennu ar draws yr holl storfeydd data dan sylw; profi dan lwyth ysgrifennu realistig; cadw log newid o amcanion gyda rhesymau |
| Cwmpas adfer wedi'i brofi | Cyfrif trafodaethau bwrdd fel profion; profi gwasanaeth dibwys o fach i godi'r ganran; crebachu'r rhestr dan sylw drwy ail-ddosbarthu gwasanaethau i haen is | Mynnu profion ymarferol ar gyfer y cyfrif haen-1; adrodd cwmpas wedi'i bwysoli yn ôl pwysigrwydd gwasanaeth; archwilio newidiadau haen yn erbyn y BIA |
| Diwrnodau ers y prawf adfer llwyddiannus diwethaf | Ail-redeg prawf hawdd i ailosod yr oedran; labelu prawf rhannol fel un a basiodd; ailosod y dyddiad ar ôl adolygiad papur | Dangos cwmpas y prawf pasio diwethaf; dangos yr oedran hynaf a'r gwasanaethau na phrofwyd erioed; mynnu bod yr RTO a'r RPO ill dau wedi'u bodloni |
| Cyfradd llwyddiant adfer o gopi wrth gefn | Adrodd llwyddiant swydd copi wrth gefn fel llwyddiant adfer; profi'r copïau wrth gefn y gwyddys eu bod yn dda yn unig; gwirio gyda gwiriad na all fethu | Olrhain adferiadau o gopïau wrth gefn a samplwyd ar hap; mynnu canlyniad gwirio data; adolygu'r gwiriad ei hun ym mhob archwiliad |
| Cyfradd cau canfyddiadau ymarfer | Cau canfyddiadau heb atgyweiriad; israddio difrifoldeb i lacio'r dyddiad dyledus; hollti un canfyddiad yn llawer o rai hawdd; cofnodi ychydig o ganfyddiadau yn y lle cyntaf | Gwirio cau drwy ailbrawf; adrodd canfyddiadau fesul ymarfer wrth ymyl y gyfradd cau, gan y gall cyfrif sy'n disgyn olygu ymarferion mwy tyner; adolygu newidiadau difrifoldeb |
| Amseroldeb cynllun | Diweddaru dyddiad adolygu heb ddarllen y cynllun; marcio newidiadau fel rhai nad ydynt yn sylweddol; stwffio'r cynllun â thestun generig na fydd byth yn mynd yn hen | Samplu cynlluniau a cherdded drwyddynt gyda rhywun na'u hysgrifennodd; cymharu cyfradd y fflag newid sylweddol â hanes newid pensaernïaeth; cysylltu amseroldeb â chanlyniadau profion |

Mae darlleniad iach yn dangos llond llaw o brofion bob chwarter gydag amrywiad gonest: rhai a basiodd ar y cynnig cyntaf, rhai a fethodd ac a ailadroddwyd, a chanfyddiadau o bob un yn ymddangos yn yr ôl-groniad ac yn cau o fewn yr amser a nodwyd. Mae sgoriau perffaith flwyddyn ar ôl blwyddyn yn rheswm i ofyn pa mor galed yw'r ymarferion.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Profion adfer awtomataidd bach, mynych | Rhad, tystiolaeth barhaus; dal methiant copi wrth gefn tawel yn gynnar | Ddim yn profi cydlynu, pobl, nac adfer graddfa lawn |
| Ymarfer methu drosodd graddfa lawn blynyddol | Realistig; ymarfer pobl, cyflenwyr, a dibyniaethau gyda'i gilydd | Drud ac anaml; anodd ei ailadrodd ar ôl atgyweiriad; yn cario risg os caiff ei redeg mewn cynhyrchu |
| Ymarferion bwrdd | Cost isel; canfod bylchau mewn rolau a phenderfyniadau; da ar gyfer hyfforddi | Ddim yn profi bod y dechnoleg yn gweithio; hawdd eu rhedeg heb ddysgu dim |
| Diwrnodau gêm cynhyrchu gyda methiant wedi'i ysgogi | Y realaeth uchaf; profi monitro a llawlyfrau gweithredu fel y maent | Angen diogelwch aeddfed a chefnogaeth arweinyddiaeth; gall achosi niwed i gwsmeriaid os caiff ei redeg yn ddiofal |
| Amcanion haenog | Gwario ymdrech lle mae'r risg | Gall aseiniadau haen ddrifftio ac angen perchennog |

Yr ateb ymarferol yw rhaglen haenog: gwiriadau adfer awtomataidd rhad drwy'r amser, driliau ymarferol ar gyfer pob gwasanaeth haen-1 ar gyfwng sefydlog, ymarfer mwy ar gylch hirach, ac ymarferion bwrdd ar gyfer penderfyniadau a chyfathrebu. Datganwch y cyfnodau fel y gall y darllenydd farnu pa mor ddiweddar yw'r dystiolaeth.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pryd adferasom ein gwasanaeth pwysicaf ddiwethaf, a beth yn union a brofasom?**
Gofynnwch am y dyddiad, maint y data, y senario, a'r canlyniad, ac ysgrifennwch hwy ar fwrdd. Dylai'r hwylusydd wrthsefyll barnu a chanolbwyntio ar y bwlch rhwng yr hawliad a'r dystiolaeth. Gorffennwch drwy gytuno ar un prawf a fyddai'n cau'r bwlch mwyaf.

**2. Pwy a ddewisodd ein RTO a'n RPO, ac a fyddai'r busnes yn eu dewis o hyd heddiw?**
Olrheiniwch bob amcan yn ôl i ddadansoddiad effaith busnes neu benderfyniad. Gofynnwch a allai'r bensaernïaeth fodloni'r amcan ar bapur, ac a nodwyd cost ei fodloni erioed. Cytunwch pwy fydd yn cadarnhau amcanion y prif wasanaethau gyda'r busnes a phryd.

**3. Beth fyddai ymarfer a fethodd yn ei gostio i ni mewn enw da, ac a yw hynny'n siapio pa mor galed yw ein hymarferion?**
Mae'r cwestiwn hwn yn dod â'r pwysau sy'n gwneud ymarferion yn dyner i'r wyneb. Gofynnwch a yw prawf a fethodd yn cael ei drin fel methiant y tîm neu lwyddiant yr ymarfer.

**4. Pa ganfyddiadau o'n hymarfer diwethaf sydd dal ar agor, a pham?**
Darllenwch y rhestr yn uchel gydag oedrannau a pherchnogion. Ar gyfer pob eitem hwyr, gofynnwch beth sy'n ei rhwystro: gwaith cystadleuol, perchnogaeth aneglur, cost, neu gred bod y risg yn dderbyniol. Y nod yw na fo unrhyw ganfyddiad yn eistedd mewn cyflwr heb berchennog.

**5. Beth mae ein cynllun yn ei dybio nad yw'n wir mwyach?**
Dewiswch un cynllun a'i ddarllen gyda pherson na'i hysgrifennodd. Chwiliwch am offer wedi'u hymddeol, cyfrifon wedi'u hailenwi, a chyflenwyr sydd wedi gadael. Gofynnwch sut y byddai'r cynllun yn cael ei ddiweddaru pan fo'r gwasanaeth yn newid, a phwy sy'n sylwi pan nad yw. Cysylltwch yr ateb â'r broses newid.

**6. Pa ddibyniaeth fyddai'n stopio popeth, ac a ydym erioed wedi profi hebddi?**
Mae gwasanaethau a rennir megis hunaniaeth, datrys enwau, cyfrinachau, a'r system galw ei hun yn bwyntiau methiant unigol cyffredin. Gofynnwch i'r tîm eu henwi ac i ddisgrifio'r tro diwethaf yr oedd pob un ddim ar gael yn fwriadol.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cynnyrch yn berchen ar y dyluniad sy'n gwneud adfer yn bosibl, felly maent yn cwrdd â pharhad fel rhan o'r diffiniad o orffen ar gyfer gwasanaethau hanfodol: llwybr copi wrth gefn, gweithdrefn adfer, a llawlyfr gweithredu sy'n gweithio. Dylent redeg driliau adfer fel rhan o'u rhythm eu hunain, storio cod adfer gyda'r gwasanaeth, a thrin dril a fethodd fel eitem ôl-groniad.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn rhedeg y rhan fwyaf o ymarferion ac yn cario'r llwyth o'u paratoi. Dylent gadw calendr yr ymarferion, cofnodi amserlenni wrth i'r ymarfer redeg, ac ysgrifennu canfyddiadau'r un diwrnod. Mae canlyniadau'n disgrifio'r gwasanaeth a'r cynllun, ac ni raddir neb yn ôl pa mor gyflym yr adferodd unigolyn ddril.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gosod yr amcanion gyda'r busnes ac yn penderfynu faint o adferiad sy'n werth ei brynu. Dylent ofyn i weld y canlyniad a ddangoswyd ddiwethaf wrth ymyl pob amcan, oedran y dystiolaeth, a'r canfyddiadau agored, a dylent osgoi gwobrwyo dalen lân. Dylai cyrff llywodraethu ddisgwyl set fach, sefydlog o fesurau parhad, wedi'u cysylltu â'r gofrestr risg ac ag adrodd rheoleiddiedig lle mae'n berthnasol (gweler pwnc 8.2, Metrigau risg a rheolaethau, a phwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

### Cwsmeriaid a defnyddwyr

Anaml y mae cwsmeriaid yn gweld parhad nes ei fod yn bwysig, ac yna maent yn ei farnu'n llwyr yn ôl y canlyniad: pa mor hir yr oeddent heb y gwasanaeth ac a oroesodd eu data. Maent yn elwa o ddatganiadau clir o'r hyn a addawir, mewn termau y gallant eu deall, ac o gyfathrebu gonest pan fo digwyddiad yn galw'r cynllun. Lle mae contractau'n cynnwys ymrwymiadau adfer, rhannwch dystiolaeth ymarfer ar gais (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn rhedeg system amserlennu cleifion, archif delweddu meddygol, a gwasanaeth negeseuon staff. Mae tîm cynnyrch o wyth yn cynnal amserlennu, ac mae tîm gweithrediadau yn rhedeg y platfform. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae cofrestr yr adran yn rhestru amserlennu fel haen 1 gydag RTO o 2 awr ac RPO o 15 munud. Mae ei hadroddiad chwarterol yn dangos "cyfradd bodloni RTO: 100 y cant dros 4 ymarfer" a "cwmpas adfer wedi'i brofi: 100 y cant." Mae pennaeth gweithrediadau newydd yn darllen yr adroddiadau ymarfer y tu ôl i'r rhifau. Roedd tri o'r pedwar ymarfer yn ymarferion bwrdd, ac roedd yr unig adferiad ymarferol yn defnyddio copi o'r gronfa ddata yn dal tua degfed o ddata cynhyrchu. Nid oedd neb wedi adfer copi wrth gefn i amgylchedd glân ers 14 mis.

Mae'r tîm yn penderfynu newid yr hyn a fesurir ac a brofir. Mae'n ailddiffinio cwmpas adfer wedi'i brofi i gyfrif profion ymarferol yn unig, sy'n gostwng y ffigur i 33 y cant ar draws y tri gwasanaeth haen-1. Mae'n trefnu adferiad maint cynhyrchu ar gyfer amserlennu, gyda gwirio awtomataidd o gyfrifon rhesi a thrafodiad archebu synthetig. Mae'r rhediad yn cymryd 3 awr 40 munud yn erbyn RTO o 2 awr, ac mae'r data a adferwyd 40 munud y tu ôl i'r pwynt methiant yn erbyn RPO o 15 munud, oherwydd bod llongio logiau wedi'i oedi yn ystod mudo ac na ailddechreuwyd erioed. Mae'r diwrnod gêm yn cynhyrchu 9 canfyddiad: 2 uchel, 5 canolig, a 2 isel o ran difrifoldeb.

Y penderfyniad a gofnodwyd yn y log yw trin y methiant fel canlyniad mwyaf gwerthfawr y flwyddyn. Mae'r tîm yn agor gwaith i ailddechrau llongio logiau gyda rhybudd ar ei oedi, i gyfochri'r adferiad, ac i symud un gyfrol data i storfa gyflymach. Mae'r RTO yn aros ar 2 awr, ac mae'r tîm yn ychwanegu dewis amgen llaw dogfenedig ar gyfer amserlennu. Cyfradd cau canfyddiadau ar gyfer y 60 diwrnod cyntaf yw 7 o 9 mewn pryd, gyda'r ddau arall wedi'u derbyn fel risgiau gan berchnogion a enwir.

Roedd y risg chwarae'r system a ddaliwyd yma yn gynnil. Ni ffugiodd neb rif: gwnaeth cyfrif hael o ymarferion bwrdd a set ddata brawf fach yr adroddiad yn wyrdd. Y rheiliau gwarchod a weithiodd oedd cofnodi maint data a math ymarfer gyda phob canlyniad, a'r arfer o ddarllen yr adroddiadau ymarfer sylfaenol. Ar yr adroddiad nesaf, mae'r tîm yn dangos pob ymarfer fel ei res ei hun, gyda'r rhediad a fethodd wedi'i gynnwys.

## Y golwg fesul sector

**Busnes newydd.** Fel arfer mae un amgylchedd cynhyrchu, tîm bach, a darparwr cwmwl a reolir. Y mesur mwyaf gwerthfawr yw'r symlaf: adferwch y gronfa ddata gynhyrchu o gopi wrth gefn i amgylchedd glân bob mis, amserwch ef, a gwiriwch y canlyniad. Ysgrifennwch yr RTO a'r RPO ar un dudalen.

**Busnes bach.** Yn aml mae TG wedi'i hallanoli neu'n cael ei rhedeg gan un neu ddau o bobl ar wasanaethau a gynhelir. Gofynnwch i'r cyflenwr yn ysgrifenedig pa adferiad y mae'n ymrwymo iddo a pha dystiolaeth y gall ei dangos, a phrofwch un adferiad o'ch data eich hun bob chwarter. Cadwch gynllun un dudalen lle gellir ei ddarllen pan fo'r prif systemau i lawr.

**Menter fawr.** Mae llawer o wasanaethau, llawer o gyflenwyr, a llwyfannau a rennir yn gwneud haenu a map dibyniaethau yn hanfodol. Buddsoddwch mewn cofrestr gwasanaethau ganolog gydag amcanion, calendr ymarferion, gwirio adfer awtomataidd, ac adrodd cyson fel y gellir cymharu canlyniadau ar draws timau.

**Llywodraeth a'r sector cyhoeddus.** Gall dyletswyddau parhad godi o gyfraith, archwilio, neu bolisi, ac efallai y bydd yn rhaid i wasanaeth cyhoeddus barhau i weithio yn ystod argyfyngau. Yn aml adolygir tystiolaeth o brofi yn allanol, felly cadwch yr adroddiadau ymarfer, canfyddiadau, a chofnodion cau mewn ffurf y gall archwiliwr ei darllen. Gall caffael gloi trefniadau adfer i mewn, felly cynhwyswch hawliau ymarfer a thystiolaeth mewn contractau (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y rhesymau dros fuddsoddi yw cost toriad difrifol sy'n para'n hirach nag y gall y busnes ei ddwyn, colli data na ellir ei ail-greu, a'r rhwymedigaethau i gwsmeriaid, rheoleiddwyr, ac yswirwyr sy'n gofyn am dystiolaeth o barodrwydd. Yswiriant yw gwaith parhad, felly'r elw yw'r golled a osgowyd a hyder y penderfynwyr, ac mae'n anodd ei fynegi fel ffigur heb ddyfeisio un. Disgrifiwch ef trwy batrymau y gallwch eu harsylwi: y bwlch rhwng amser adfer a nodwyd a'r un a ddangoswyd, nifer y canfyddiadau difrifoldeb uchel a ganfuwyd mewn ymarferion yn lle digwyddiadau go iawn, a'r amser i ateb cais cwsmer neu archwiliwr am dystiolaeth.

Daw costau mewn tri grŵp: y gormodedd a'r offer y mae'r amcanion yn eu mynnu, amser pobl i gynllunio, rhedeg, ac adolygu ymarferion, a'r ymdrech i gadw cynlluniau a mapiau dibyniaethau yn gyfredol.

Pobl a'r haenau tynnaf sy'n dominyddu cyfanswm cost perchnogaeth. Mae symud o RTO 24 awr i RTO 2 awr yn newid y dyluniad a'r bil, felly gwnewch y cyfaddawd hwnnw'n eglur gyda'r busnes. Mae profion bach, mynych, awtomataidd yn tueddu i gostio llai nag un digwyddiad blynyddol mawr oherwydd bod diffygion yn dod i'r wyneb tra bo'n rhad eu trwsio.

## Gwrthbatrymau a maglau

- **Y cynllun ar y silff.** Mae dogfen yn cyfrif fel paratoi, ac nid oes neb wedi'i thrio. Yn lle hynny, adroddwch ddyddiad a chanlyniad y prawf ymarferol diwethaf wrth ymyl pob amcan.
- **Llwyddiant copi wrth gefn fel llwyddiant adfer.** Mae swyddi'n adrodd gwyrdd tra na ellir adfer y data. Yn lle hynny, profwch adferiadau'n rheolaidd a gwiriwch y data cyn cyfrif llwyddiant.
- **Theatr wedi'i hymarfer.** Mae'r ymarfer wedi'i sgriptio ac yn cael ei redeg gan awduron y cynllun. Yn lle hynny, ychwanegwch syndod yn raddol.
- **Un targed ar gyfer popeth.** Mae gan bob gwasanaeth RTO pedair awr oherwydd bod y templed yn dweud felly. Yn lle hynny, haenwch y gwasanaethau o ddadansoddiad effaith busnes a gosodwch amcanion sy'n ffitio.
- **Canfyddiadau nad ydynt byth yn cau.** Mae adroddiad yr ymarfer yn rhestru bylchau ac nid yw'r ôl-groniad byth yn eu gweld. Yn lle hynny, rhowch berchennog a dyddiad dyledus i bob canfyddiad, a gwiriwch gau drwy ailbrawf.
- **Cosbi'r prawf a fethodd.** Bydd tîm a feir am RTO a fethwyd yn rhoi'r gorau i redeg profion caled. Yn lle hynny, cytunwch ymlaen llaw bod ymarfer a fethodd gyda chanfyddiadau da yn ganlyniad da, ac adolygwch ef heb fai.
- **Cynlluniau hen ar ôl newid cyflym.** Mae'r calendr yn gyrru adolygiad, ac mae newidiadau pensaernïaeth yn llithro drwodd. Yn lle hynny, cysylltwch adolygiad cynllun â chofnodion newid sylweddol a mesurwch amseroldeb cynllun yn eu herbyn.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Amcanion a haenau | RTO ac RPO heb eu hysgrifennu neu wedi'u copïo o dempled | Amcanion wedi'u hysgrifennu ar gyfer rhai gwasanaethau allweddol | Mae haenau ac amcanion yn dod o ddadansoddiad effaith busnes ac yn eistedd yn y gofrestr gwasanaethau | Amcanion wedi'u hadolygu yn erbyn canlyniadau a ddangoswyd a phensaernïaeth | Amcanion wedi'u cytuno ar y cyd â'r busnes a chyflenwyr, ac wedi'u haddasu wrth i'r gwasanaethau newid |
| Profi a thystiolaeth | Adfer byth wedi'i brofi, neu wedi'i brofi unwaith ar ôl digwyddiad | Profion adfer ad hoc gan rai timau; canlyniadau wedi'u cadw mewn nodiadau personol | Cyfnodau prawf haenog gyda chwmpas, amserlen, a chanlyniad wedi'u cofnodi | Canlyniadau wedi'u tueddu, gydag ymarferion bwrdd, driliau, a diwrnodau gêm wedi'u hadrodd ar wahân | Ymarferion traws-dîm a chyflenwyr gyda syndod, wedi'u trefnu o risg |
| Canfyddiadau a dysgu | Bylchau wedi'u sylwi'n anffurfiol | Canfyddiadau wedi'u rhestru ar ôl rhai ymarferion | Mae gan bob canfyddiad berchennog, difrifoldeb, a dyddiad dyledus | Cyfradd cau ac oedran wedi'u hadolygu, gydag ailbrawf yn cadarnhau cau | Mae canfyddiadau'n bwydo llwyfannau a rennir, contractau cyflenwyr, a safonau dylunio |
| Amseroldeb cynllun | Cynlluniau wedi'u hysgrifennu unwaith | Cynlluniau wedi'u diweddaru ar ôl digwyddiadau | Cynlluniau mewn rheoli fersiynau gyda chyfwng adolygu | Adolygiad wedi'i gysylltu â newidiadau sylweddol ac wedi'i fesur | Cynlluniau a llawlyfrau gweithredu wedi'u profi fel cod ac wedi'u cynhyrchu o ddiffiniad y gwasanaeth lle bo modd |

## Rhestr wirio

- [ ] Mae gan bob gwasanaeth haen-1 RTO ac RPO ysgrifenedig a ddaeth o ddadansoddiad effaith busnes.
- [ ] Mae'r gofrestr gwasanaethau yn dangos haen, amcanion, a chyfwng prawf pob gwasanaeth.
- [ ] Ysgrifennir clociau RTO ac RPO, y gwiriad iechyd, a'r eithriadau i lawr (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).
- [ ] Adroddir profion adfer ymarferol, ymarferion bwrdd, a diwrnodau gêm fel mathau ar wahân.
- [ ] Mae pob prawf adfer yn cofnodi maint data, senario, lefel y syndod, a'r amser adfer a'r data a gollwyd a fesurwyd.
- [ ] Profir adferiadau o gopi wrth gefn yn awtomatig, ac mae gwiriad gwirio data yn penderfynu llwyddiant.
- [ ] Mae gan bob canfyddiad ymarfer berchennog, difrifoldeb, dyddiad dyledus, a lle yn yr ôl-groniad.
- [ ] Mae adolygu cynllun wedi'i gysylltu â chofnodion newid sylweddol, ac mae'r cynllun hynaf heb ei adolygu yn weladwy.
- [ ] Mae'r map dibyniaethau yn cynnwys gwasanaethau a rennir, ac mae o leiaf un senario yn dileu un ohonynt.
- [ ] Mae gan bob metrig yn y pwnc hwn reilen warchod a enwir a pherchennog yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).
- [ ] Mae dyletswydd ymarfer yn cylchdroi, ac mae'r amser y mae'n ei gymryd yn cael ei gyfrif fel llwyth gweithredol.

## Anogwyr AI

**Dyluniwch brawf adfer a'r mesurau sy'n mynd gydag ef.**

```text
Rwyf eisiau profi adfer [enw'r gwasanaeth], gwasanaeth [haen] gydag RTO a
nodwyd o [RTO] ac RPO o [RPO]. Ei brif gydrannau yw [rhestr: storfeydd data,
ciwiau, cyfrifiadura, gwasanaethau a rennir] a'i gyflenwyr yw [rhestr].
Drafftiwch gynllun prawf gyda senario realistig, y digwyddiad sy'n cychwyn y
cloc, y gwiriad iechyd sy'n ei stopio, sut i fesur colli data yn erbyn yr RPO,
y maint data i'w ddefnyddio, beth i'w gofnodi, a'r mesurau diogelu i atal
niwed i gynhyrchu. Peidiwch â dyfeisio amseroedd meincnod na honni bod unrhyw
amcan yn gyraeddadwy. Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu
hateb i orffen y cynllun.
```

**Adolygwch adroddiadau ymarfer am dystiolaeth wenieithus.**

```text
Dyma grynodebau o'n [nifer] ymarfer adfer diwethaf: [gludwch ar gyfer pob un:
math, dyddiad, cwmpas, maint data, amser adfer, colli data, cyfrif canfyddiadau].
Ein hamcanion yw [RTO ac RPO fesul haen]. Nodwch ble y gallai'r canlyniadau a
adroddwyd orbwysleisio gallu adfer go iawn, megis setiau data bach, senarios
sgriptiedig, cwmpas bwrdd yn unig, neu wiriadau iechyd llac. Awgrymwch pa
wybodaeth ychwanegol i'w chofnodi a pha fetrigau rheilen warchod i'w parau â
phob canlyniad. Peidiwch â dyfeisio gwerthoedd meincnod na thybio ffeithiau
nas rhoddais. Rhestrwch eich rhagdybiaethau.
```

**Trowch nodiadau diwrnod gêm yn ganfyddiadau ac eitemau ôl-groniad.**

```text
Dyma'r nodiadau crai o ddiwrnod gêm ar [gwasanaeth]: [gludwch nodiadau ac
amserlen]. Tynnwch bob bwlch rhwng y cynllun a'r hyn a ddigwyddodd allan fel
canfyddiad ar wahân gyda theitl byr, disgrifiad, difrifoldeb awgrymedig gan
ddefnyddio'r raddfa hon [graddfa difrifoldeb], rôl perchennog ymgeisiol (nid
person a enwir), a sut y gallem wirio'r atgyweiriad. Grwpiwch ganfyddiadau a
allai rannu gwraidd achos. Peidiwch â dyfeisio digwyddiadau nad ydynt yn y
nodiadau. Rhestrwch eich rhagdybiaethau ac unrhyw beth sydd angen ei egluro.
```

**Gwiriwch gynllun am amseroldeb yn erbyn newid diweddar.**

```text
Dyma'r cynllun parhad ar gyfer [gwasanaeth] a adolygwyd ddiwethaf ar [dyddiad]:
[gludwch gynllun neu amlinelliad]. Dyma'r newidiadau sylweddol ers hynny:
[rhestr newidiadau i bensaernïaeth, storfeydd data, dibyniaethau, cyflenwyr, ac
offer]. Nodwch gamau, cysylltiadau, offer, a dibyniaethau yn y cynllun y gallai'r
newidiadau fod wedi'u gwneud yn anghywir, a rhestrwch gwestiynau y dylai adolygydd
eu gofyn. Peidiwch â dyfeisio manylion am ein systemau. Rhestrwch eich
rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n diffinio metrig parhad, adfer, neu ymarfer, a'r rheilen warchod i'w pharu ag ef.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod metrig parhad wedi'i olygu yn datgan ei glociau, ei eithriadau, a'i ffordd o chwarae'r system.

## Pwyntiau allweddol

- Addewid yw amcan adfer, a dim ond ymarfer wedi'i amseru, realistig sy'n dangos a ellir ei gadw.
- Adroddwch y canlyniad a ddangoswyd ddiwethaf a'i oedran wrth ymyl pob RTO ac RPO, a dangoswch bob ymarfer fel ei res ei hun.
- Profwch adferiadau, nid copïau wrth gefn: dim ond pan fo'r data wedi'i wirio fel un defnyddiadwy y mae adferiad yn cyfrif.
- Cynnyrch ymarfer yw rhestr gaeedig o ganfyddiadau, felly olrheiniwch eu hoedran a chadarnhewch gau drwy ailbrawf.
- Cadwch gynlluniau mewn rheoli fersiynau a chlymwch eu hadolygiad wrth newid sylweddol, ac nid dim ond wrth y calendr.
- Mesurwch wasanaethau a chynlluniau, byth bobl, a gwnewch ymarfer a fethodd gyda chanfyddiadau da yn ganlyniad diogel a pharchus.

## Cyfeiriadau a darllen pellach

1. Beyer, B., Jones, C., Petoff, J., and Murphy, N. R. (eds.), *Site Reliability Engineering: How Google Runs Production Systems*, O'Reilly Media, 2016, https://sre.google/sre-book/table-of-contents/
2. Beyer, B., Murphy, N. R., Rensin, D. K., Kawahara, K., and Thorne, S. (eds.), *The Site Reliability Workbook: Practical Ways to Implement SRE*, O'Reilly Media, 2018, https://sre.google/workbook/table-of-contents/
3. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
4. ISO 22301:2019, *Security and resilience: Business continuity management systems: Requirements*, International Organization for Standardization.
5. ISO 22313:2020, *Security and resilience: Business continuity management systems: Guidance on the use of ISO 22301*, International Organization for Standardization.
6. Rosenthal, C., and Jones, N., *Chaos Engineering: System Resiliency in Practice*, O'Reilly Media, 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Business continuity planning](https://en.wikipedia.org/wiki/Business_continuity_planning).
9. Wikipedia, [Recovery time objective](https://en.wikipedia.org/wiki/Recovery_time_objective).
10. Wikipedia, [Recovery point objective](https://en.wikipedia.org/wiki/Recovery_point_objective).
11. Wikipedia, [Business impact analysis](https://en.wikipedia.org/wiki/Business_impact_analysis).
12. Wikipedia, [ISO 22301](https://en.wikipedia.org/wiki/ISO_22301).
13. Wikipedia, [Backup](https://en.wikipedia.org/wiki/Backup).
14. Wikipedia, [Chaos engineering](https://en.wikipedia.org/wiki/Chaos_engineering).
15. Wikipedia, [Site reliability engineering](https://en.wikipedia.org/wiki/Site_reliability_engineering).
16. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
