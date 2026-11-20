# Amser arweiniol, amser cylch ac effeithlonrwydd llif

**Dim ond pan fydd gan bob un ddechrau a stop ysgrifenedig, dosbarthiad yn lle cyfartaledd, a golwg ar yr aros sy'n llenwi'r rhan fwyaf o'r amser a aeth heibio y mae amser arweiniol, amser cylch ac effeithlonrwydd llif yn golygu rhywbeth.**

## Crynodeb a chymhelliant

Mae bron pob tîm eisiau gwybod pa mor hir y mae gwaith yn ei gymryd. Mae'r cwestiwn yn swnio'n syml ac yn cynhyrchu dadleuon, oherwydd bod "pa mor hir" yn dibynnu ar bwy sy'n gofyn a ble maent yn dechrau'r stopwats. Mae cwsmer yn cyfrif o'r funud y gofynnodd. Mae datblygwr yn cyfrif o'r funud y cododd y gwaith. Mae rheolwr gweithrediadau yn cyfrif o'r funud y neilltuwyd y tocyn i giw. Mae'r tri'n iawn am eu cloc eu hunain, ac mae'r tri'n rhoi rhifau gwahanol ar gyfer yr un darn o waith.

[Amser arweiniol](https://en.wikipedia.org/wiki/Lead_time) yw'r amser a aeth heibio rhwng cais yn cyrraedd a'r cais yn cael ei fodloni, o ochr y person a ofynnodd. [Amser cylch](https://en.wikipedia.org/wiki/Cycle_time) yw'r amser a aeth heibio rhwng y funud y mae'r tîm yn ymrwymo i ddarn o waith a'r funud y caiff ei orffen, o ochr y tîm sy'n ei wneud. Y gwahaniaeth rhwng y ddau yw'r amser yr arhosodd y cais cyn i'r tîm ddechrau. Effeithlonrwydd llif yw cyfran yr amser a aeth heibio y bu rhywun yn gweithio ar yr eitem mewn gwirionedd, o'i gymharu â'r eitem yn aros. Os cymerodd eitem 10 diwrnod o ddechrau i orffen ac y gweithiwyd arni am 1 diwrnod, ei heffeithlonrwydd llif yw 10 y cant. Amser cyffwrdd yw'r rhan waith. Amser aros yw popeth arall.

Cariodd [datblygu meddalwedd main](https://en.wikipedia.org/wiki/Lean_software_development) a Chanllaw Kanban y syniadau hyn o weithgynhyrchu i waith gwybodaeth. Mae arferion ITIL yn sôn am amser datrys, amser cyflawni a thargedau lefel gwasanaeth, ac mae timau ystwyth yn sôn am amser cylch ac eitemau gwaith. Mae'r pwnc hwn yn rhoi un set o ddiffiniadau sy'n dal pan fydd digwyddiad, cais, newid a stori yn rhannu cyfarfod.

Mae gan amser a aeth heibio briodwedd sy'n synnu pobl y tro cyntaf iddynt ei mesur. Yn y rhan fwyaf o waith gwybodaeth a gwaith gwasanaeth, mae'r eitem yn treulio mwyafrif ei hoes yn aros: am benderfyniad, adolygydd, amgylchedd, cyflenwr, ffenestr cynnal a chadw, neu'n syml am berson sy'n brysur gyda rhywbeth arall. Gwneud yr aros hwnnw'n weladwy yw'r peth mwyaf defnyddiol y mae'r metrigau hyn yn ei wneud. Mae tîm na all weld ei amser aros yn tueddu i geisio gwella drwy weithio'n gyflymach, sydd ag ychydig o effaith ar system lle mae 90 y cant o'r amser a aeth heibio yn cael ei dreulio mewn ciwiau. Trafodir ymddygiad ciwio'n fanwl ym mhwnc 2.3, Gwaith ar y gweill a chiwio, ac mae'r olwg ffrwd werth lawn ym mhwnc 2.4, Metrigau ffrwd werth.

Adroddir mesurau amser fel canraddau, megis y canolrif a'r 85fed neu'r 95fed [canradd](https://en.wikipedia.org/wiki/Percentile), am y rhesymau ym mhwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth. Daw'r stampiau amser crai o'r ffynonellau ym mhwnc 1.5, Ffynonellau data ac offeryniaeth. Mae'r mesurau llif o waith ar y gweill, trwybwn ac oedran eitem waith ym mhwnc 2.1, Mesurau llif, ac mae mesur DORA amser arweiniol newid ym mhwnc 2.8, Metrigau DORA. Mae'r pwnc hwn yn ymdrin â'r mesurau amser eu hunain: sut i'w diffinio fel eu bod yn gymaradwy, ble mae eu clociau'n dechrau ac yn stopio, a sut i ddatgelu'r aros y tu mewn iddynt.

## Egwyddorion allweddol

- **Enwch y cloc cyn darllen y rhif.** Mae gan bob mesur amser ddigwyddiad dechrau, digwyddiad stopio a rhestr o eithriadau. Barn yw ffigur hebddynt.
- **Mae amser arweiniol yn perthyn i'r cwsmer, mae amser cylch yn perthyn i'r tîm.** Cadwch y ddau, a labelwch bob amser pa un y mae siart yn ei ddangos, oherwydd bod y bwlch rhyngddynt yn signal ynddo'i hun.
- **Adroddwch ddosbarthiadau, byth cymedr yn unig.** Mae'r canolrif yn disgrifio'r eitem nodweddiadol. Mae canradd uchel yn disgrifio'r risg y mae'r cwsmer yn ei chario mewn gwirionedd.
- **Aros yw'r prif ganfyddiad.** Mae effeithlonrwydd llif fel arfer yn isel, a'r ymateb yw cael gwared â ciwiau a throsglwyddiadau, nid gofyn i bobl frysio.
- **Penderfyniadau dylunio yw cyflyrau oedi.** Os gellir stopio'r cloc drwy symud eitem i statws "aros," caiff y statws hwnnw ei ddefnyddio, felly cyfrifwch pa mor aml y caiff ei ddefnyddio a chan bwy.
- **Cymharwch eitem â'i math ei hun.** Mae gan ddigwyddiad, cais safonol, newid a nodwedd siapiau gwahanol. Segmentwch yn ôl math o waith cyn cymharu unrhyw beth.
- **Mesurwch systemau, nid pobl.** Mae mesurau amser yn disgrifio sut mae gwaith yn llifo drwy dîm neu wasanaeth. Nid ydynt byth yn graddio unigolion.

## Diffiniadau metrigau

Mae'r tabl isod yn defnyddio un eirfa ar gyfer eitemau gwaith ystwyth a chofnodion ITIL. Mae "eitem waith" yn golygu unrhyw gofnod sy'n symud drwy lif gwaith: stori, tasg, digwyddiad, cais gwasanaeth, newid neu gofnod problem. Amser calendr a aeth heibio yw pob hyd oni nodir yn wahanol, ac adroddir pob un fel y canolrif a chanradd uchel.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Amser arweiniol | Yr amser a aeth heibio o gyrraedd cais i'w gyflwyno i'r ceisydd | stamp amser cyflwyno llai stamp amser cyrraedd y cais, fesul eitem waith; mae'r cloc yn dechrau pan gofnodir y cais, yn stopio pan all y ceisydd ddefnyddio'r canlyniad; eithrir eitemau sy'n dal ar agor ac eitemau a ganslwyd cyn eu cyflwyno a'u cyfrif ar wahân | diwrnodau neu oriau | Hanes offeryn ITSM neu olrheinydd materion | Rheoli ceisiadau gwasanaeth; rheoli digwyddiadau; galluogi newid | Amser arweiniol ar fwrdd y tîm; amser cais-i-ryddhau | Wythnosol, wedi'i adolygu'n fisol |
| Amser cylch | Yr amser a aeth heibio o'r funud y mae'r tîm yn dechrau'r gwaith i'r funud y caiff ei orffen | stamp amser gorffen llai stamp amser dechrau, fesul eitem waith; mae'r cloc yn dechrau ar y symudiad cyntaf i gyflwr gweithio gweithredol, yn stopio ar y symudiad cyntaf i gyflwr wedi'i wneud; eithrir amser cyn y dechrau ac ar ôl y cyflwr wedi'i wneud | diwrnodau neu oriau | Hanes cyflwr tracker neu fwrdd | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth; galluogi newid | Amser cylch (gweler pwnc 2.1, Mesurau llif) | Wythnosol |
| Amser cyffwrdd | Yr amser pan fo person neu awtomeiddio yn gweithio'n weithredol ar yr eitem | swm yr egwyl y mae'r eitem yn ei threulio mewn cyflyrau a ddosbarthwyd fel gwaith gweithredol; eithrir cyflyrau aros, cyflyrau wedi'u rhwystro a chyflyrau ciw | oriau | Hanes cyflwr tracker, gyda phob cyflwr wedi'i ddosbarthu fel gweithredol neu aros | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth | Amser proses mewn map ffrwd werth | Sampl fisol |
| Amser aros | Yr amser pan fo'r eitem mewn ciw, wedi'i rhwystro neu wedi'i hoedi | amser cylch llai amser cyffwrdd, fesul eitem waith; amherthnasol ar gyfer eitemau heb ddechrau wedi'i gofnodi | diwrnodau neu oriau | Hanes cyflwr tracker | Rheoli digwyddiadau; rheoli lefelau gwasanaeth | Amser aros neu amser wedi'i rwystro ar fwrdd | Misol |
| Effeithlonrwydd llif | Cyfran amser cylch a dreulir mewn gwaith gweithredol | swm amser cyffwrdd / swm amser cylch, ar gyfer eitemau a orffennwyd yn y cyfnod; eithrir eitemau sydd â hanes cyflwr coll a'u cyfrif ar wahân | canran | Hanes cyflwr tracker | Gwelliant parhaus; rheoli ceisiadau gwasanaeth | Effeithlonrwydd llif o arfer main | Misol |
| Cyfran oedi'r cloc | Cyfran amser cylch pan oedodd y cloc gwasanaeth ffurfiol | swm hyd oediadau / swm amser cylch, ar gyfer eitemau a orffennwyd yn y cyfnod; oediadau yw'r statysau a ddiffinnir yn y rheolau cloc ysgrifenedig | canran | Hanes statws offeryn ITSM | Rheoli lefelau gwasanaeth; rheoli digwyddiadau | Amser colofn wedi'i rwystro neu ar ddal | Misol |

Mae dechrau'r cloc amser cylch yn benderfyniad tîm y mae'n rhaid ei ysgrifennu. Mae'r cloc ffurfiol mewn cytundeb lefel gwasanaeth (SLA) yn aml yn oedi tra bo eitem yn aros am y cwsmer, felly mae'r pwnc hwn yn adrodd cyfran yr oedi yn lle taflu'r amser hwnnw. Deillir amser cyffwrdd o gyflyrau, felly mae ei gywirdeb yn dibynnu ar ba mor dda y mae'r cyflyrau'n disgrifio'r gwaith.

## Argymhellion

### Diffiniwch y clociau

**1. Ysgrifennwch ddechrau a stop pob cloc.** Ar gyfer amser arweiniol y dechrau yw cyrraedd y cais, fel y'i cofnodwyd gan y system gyntaf y mae'r ceisydd yn cyffwrdd â hi, a'r stop yw'r funud y gall y ceisydd ddefnyddio'r canlyniad. Ar gyfer amser cylch y dechrau yw'r symudiad cyntaf i gyflwr gweithredol a'r stop yw'r symudiad cyntaf i gyflwr wedi'i wneud. Rhowch y ddau yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau) a dangoswch y diffiniad o dan bob siart.

**2. Cytunwch beth mae "wedi'i wneud" yn ei olygu ar gyfer pob math o waith.** Mae newid wedi'i wneud pan fo'n rhedeg mewn cynhyrchu ac wedi'i wirio, nid pan fo'r cod wedi'i uno. Mae digwyddiad wedi'i wneud pan adferir y gwasanaeth i'r defnyddiwr, nid pan gaeir y tocyn gan swydd swmp ddydd Gwener. Mae cais wedi'i wneud pan fo gan y ceisydd y peth. Os yw "wedi'i wneud" yn wahanol fesul tîm, ni ellir cymharu amseroedd cylch rhyngddynt.

**3. Cadwch amser arweiniol ac amser cylch, a gwyliwch y bwlch.** Y gwahaniaeth rhyngddynt yw'r aros ymrwymiad: yr amser y mae cais yn eistedd cyn i'r tîm ddechrau. Mae amser cylch byr wrth ymyl amser arweiniol hir yn dweud bod y tîm yn gweithio'n effeithlon ar yr hyn y mae'n ei ddechrau a bod derbyn yn dagfa. Mae amser cylch hir wrth ymyl amser arweiniol byr yn dweud bod ceisiadau'n cael eu derbyn yn gyflym ac yna'n sefyll yn llonydd y tu mewn i'r tîm.

### Adroddwch amser yn onest

**4. Defnyddiwch ganraddau a dywedwch pa rai.** Adroddwch y canolrif a'r 85fed neu'r 95fed ganradd, er enghraifft "gorffennodd hanner yr eitemau o fewn 4 diwrnod ac 85 y cant o fewn 11 diwrnod." Mae'r datganiad hwnnw hefyd yn rhagolwg: mae gan eitem newydd tua 85 y cant o siawns o orffen o fewn 11 diwrnod os yw'r system yn aros yr un fath. Ni all cymedr roi'r frawddeg honno i chi, ac mae'n symud yn bell pan fydd un allanolyn yn ymddangos (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

**5. Plotiwch bob eitem, ac nid y crynodeb yn unig.** Mae graff gwasgariad o amser cylch yn erbyn dyddiad gorffen yn dangos siâp y system ar un olwg: clystyrau, drifft araf i fyny, cam sydyn ar ôl newid proses. Mae rhifau crynodeb yn perthyn wrth ymyl y graff. Mae offeryn sy'n cynnig llinell gyfartaledd yn unig yn cael gwared â'r wybodaeth y mae'r tîm ei hangen fwyaf.

**6. Segmentwch yn ôl math o waith a dosbarth gwasanaeth.** Mae gan ddigwyddiad brys, cais safonol, newid wedi'i gynllunio a stori ymchwil amseroedd disgwyliedig gwahanol. Hollwch y data yn ôl math, ac yn ôl blaenoriaeth lle mae'r flaenoriaeth yn newid sut y caiff y gwaith ei drin, cyn chwilio am batrymau. Mae poblogaethau cymysg yn cynhyrchu dosbarthiad eang nad yw'n disgrifio profiad neb.

### Datgelwch yr aros

**7. Dosbarthwch bob statws fel gweithredol, aros neu wedi'i wneud.** Dyma'r gwaith sy'n gwneud effeithlonrwydd llif yn bosibl. Mae "mewn datblygiad" ac "mewn adolygiad gydag adolygydd yn gweithio" yn weithredol. Mae "aros am adolygiad," "aros am gymeradwyaeth," "wedi'i rwystro" ac "aros am gwsmer" yn aros. Adolygwch y dosbarthiad gyda'r tîm, oherwydd anaml y mae'r labeli mewn llif gwaith yn dweud y gwir i gyd, ac mae cyflwr o'r enw "ar y gweill" yn aml yn cuddio eitem nad oes neb wedi cyffwrdd â hi ers wythnos.

**8. Cyfrifwch effeithlonrwydd llif fel diagnosteg, nid targed.** Cyfrifwch ef ar sampl neu ar bob eitem orffenedig, a'i ddefnyddio i ganfod ble mae'r aros yn byw: pa gyflwr sy'n dal eitemau hiraf, a pha drosglwyddiad sy'n ei ragflaenu. Disgwyliwch rifau isel, a pheidiwch â gosod nod megis "cyrraedd 40 y cant." Mae codi'r rhif drwy ail-labelu cyflyrau aros fel rhai gweithredol yn hawdd ac yn ddiwerth, ac mae'r enillion go iawn yn dod o gael gwared â'r ciw ei hun (gweler pwnc 2.4, Metrigau ffrwd werth).

**9. Cyfrifwch amser wedi'i rwystro ac wedi'i oedi ar wahân.** Olrheiniwch pa mor aml y mae eitemau'n mynd i gyflwr wedi'i rwystro neu wedi'i oedi, pa mor hir y maent yn aros, a beth oedd y rheswm. Mae rhestr fer o resymau rhwystro sy'n codi dro ar ôl tro, megis aros am gymeradwyaeth, amgylchedd neu gyflenwr, yn dweud wrthych beth i'w drwsio a gyda phwy i siarad. Adroddwch gyfran yr oedi wrth ymyl unrhyw ganlyniad lefel gwasanaeth sy'n eithrio amser wedi'i oedi (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau).

### Defnyddiwch y rhifau'n dda

**10. Rheolwch y ciw i reoli'r amser.** Mae amser drwy system yn codi wrth i waith ar y gweill godi, perthynas a nodir yng [nghyfraith Little](https://en.wikipedia.org/wiki/Little%27s_law), sy'n cysylltu nifer cyfartalog yr eitemau yn y system, y gyfradd cyrraedd neu gwblhau, a'r amser cyfartalog y mae pob eitem yn ei dreulio yno. Cyfyngu gwaith ar y gweill felly yw'r lifer mwyaf uniongyrchol ar amser cylch (gweler pwnc 2.3, Gwaith ar y gweill a chiwio). Mae newid targed y metrig heb newid y ciw ond yn newid y cymhelliad i gamadrodd.

**11. Defnyddiwch ddosbarthiadau amser cylch ar gyfer rhagolygon ac ar gyfer targedau lefel gwasanaeth.** Os yw'r 85fed ganradd amser cylch ar gyfer ceisiadau safonol yn 6 diwrnod, bydd ymrwymiad i 5 diwrnod yn cael ei fethu'n aml, a bydd ymrwymiad i 8 diwrnod yn cael ei fodloni gydag ystafell i sbario. Seiliwch darged mewnol ar yr hyn y mae'r system wedi'i wneud, yna gweithiwch ar y system i symud y dosbarthiad (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth, a phwnc 4.3, Metrigau galluogi newid).

**12. Trinwch ddiffiniad newidiedig fel digwyddiad.** Os yw dechrau neu stop cloc yn newid, nodwch ef ar bob siart ac ailddatganwch hanes o'r digwyddiadau crai lle bo modd. Heb y ddisgyblaeth honno, mae llinell duedd yn dangos effaith newid diffiniad fel pe bai'n welliant neu'n ddirywiad (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Amser arweiniol | Oedi creu'r cofnod cais fel bod y cloc yn dechrau'n hwyr; cau ac ailagor eitemau i ailgychwyn y cloc; hollti un cais yn llawer o rai bach | Cymharu cofnodion ceisiadau â'r cyswllt cyntaf mewn e-bost neu sgwrs ar sampl; olrhain cyfradd ailagor; olrhain maint a nifer yr eitemau fesul cais |
| Amser cylch | Dechrau'r cloc yn hwyr drwy symud eitemau i "ar y gweill" ar y diwedd yn unig; gadael eitemau oddi ar y bwrdd nes eu bod bron â gorffen; hollti gwaith yn ddarnau nad ydynt yn cyflwyno gwerth ar eu pen eu hunain | Oedran eitem waith ar gyfer eitemau agored (gweler pwnc 2.1, Mesurau llif); gwirio bod eitemau wedi'u gwneud yn ddefnyddiadwy gan y ceisydd; cymharu amser arweiniol ag amser cylch |
| Amser cyffwrdd | Dosbarthu cyflyrau aros fel gweithredol, neu logio gweithgarwch i edrych yn brysur | Adolygu'r dosbarthiad cyflyrau gyda'r tîm bob chwarter; samplo eitemau a chymharu gweithgarwch a logiwyd â chomisiynau, sylwadau a chalendrau |
| Amser aros | Creu statysau newydd fel bod amser aros yn syrthio i fwlch na fesurir; symud eitemau sy'n aros i statws y tu allan i'r llif gwaith | Cyfrif statysau a thrawsnewidiadau annogfenedig (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth); cadarnhau bod amser cylch yn hafal i amser cyffwrdd ynghyd ag amser aros ar sampl |
| Effeithlonrwydd llif | Ail-ddosbarthu aros fel gweithredol; dewis eitemau cyflym yn unig ar gyfer y sampl; gorffen eitemau hawdd yn gyntaf i godi'r gymhareb | Dosbarthiad cyflyrau sefydlog gyda log newidiadau; ei gyfrifo ar bob eitem orffenedig; ei adrodd gyda'r 85fed ganradd amser cylch ac oedran eitemau agored |
| Cyfran oedi'r cloc | Oedi'r cloc gwasanaeth ffurfiol am resymau nad ydynt yn dibynnu ar y cwsmer, megis trosglwyddiadau mewnol, i fodloni'r SLA | Archwilio'r rhesymau oedi ar sampl; adrodd amser a aeth heibio ac amser SLA ochr yn ochr; adolygu golwg y cwsmer ei hun o amser datrys (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA) |

Mae darlleniad iach yn dangos amser arweiniol ac amser cylch sy'n symud gyda'i gilydd, bwlch rhyngddynt y gall y tîm ei esbonio, 85fed ganradd sy'n lluosrif sefydlog o'r canolrif, ac effeithlonrwydd llif sy'n isel ond yn codi wrth i giwiau penodol gael eu tynnu. Arwyddion rhybudd yw canolrif sy'n gwella tra bo'r ganradd uchel yn gwaethygu, cyfran oedi sy'n tyfu ar ddiwedd pob mis, ac effeithlonrwydd llif sy'n neidio heb unrhyw newid yn y ffordd y gwneir gwaith. Pan fydd rhif yn gwella, dylai rhywun allu pwyntio at y newid yn y gwaith sy'n ei esbonio. Bydd gwelliant a yrrir gan chwarae'r system fel arfer yn methu'r prawf hwnnw. Trafodir y seicoleg ehangach ym mhwnc 1.2, Cyfraith Goodhart a seicoleg metrigau.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Amser arweiniol o olwg y ceisydd | Cyfateb i'r hyn y mae'r cwsmer yn ei deimlo; anodd ei wella drwy newid labeli mewnol | Mae'r digwyddiad dechrau y tu allan i reolaeth y tîm a gall gael ei gofnodi'n wael |
| Amser cylch o ymrwymiad y tîm | O dan reolaeth y tîm; hawdd ei gyfrifo o hanes bwrdd | Anwybyddu oedi derbyn; gall tîm edrych yn gyflym tra bo ceisiadau'n aros |
| Amser a aeth heibio (cloc calendr) | Syml, cymaradwy, ac yn cyfateb i brofiad y cwsmer | Yn cynnwys nosweithiau a phenwythnosau, a all gamarwain timau ag oriau gwahanol |
| Cloc oriau busnes | Yn gweddu i lefelau gwasanaeth staffedig a phatrymau ar alwad | Angen calendr fesul tîm; cuddio'r aros gwirioneddol y mae'r cwsmer yn ei brofi |
| Effeithlonrwydd llif fel cymhareb | Dangos faint o'r amser sy'n aros mewn un rhif greddfol | Yn dibynnu ar ddosbarthiad cyflyrau; hawdd ei chwyddo; gellir ei gamddarllen fel targed |
| Adrodd canraddau | Dangos risg a chefnogi rhagolygon | Angen digon o eitemau fesul cyfnod; anoddach i rai cynulleidfaoedd ei ddarllen na chyfartaledd |

Y cyngor ymarferol yw dechrau gydag amser a aeth heibio, ychwanegu golwg oriau busnes dim ond lle mae lefel gwasanaeth yn gofyn amdani, ac adrodd amser arweiniol ac amser cylch ar ganradd uchel. Defnyddiwch effeithlonrwydd llif fel cychwynnwr sgwrs mewn adolygiad, gyda'r dosbarthiad cyflyrau ar y bwrdd, ac osgowch ei roi ar gerdyn sgorio.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Ble mae ein cloc amser arweiniol yn dechrau, a ble mae'r cwsmer yn meddwl ei fod yn dechrau?**
Cymerwch dri chais diweddar a'u holrhain o'r cyswllt cyntaf i'w cyflwyno. Marciwch y funud y cofnodwyd y cais yn y system gofnodi. Cymharwch y bwlch rhwng y cyswllt cyntaf a chreu'r cofnod. Dylai'r hwylusydd chwilio am giwiau cudd mewn e-bost, sgwrs neu flwch derbyn a rennir nad ydynt byth yn ymddangos mewn metrig.

**2. Beth mae "wedi'i wneud" yn ei olygu ar gyfer pob math o waith yr ydym yn ei drin?**
Rhestrwch y mathau o waith, megis digwyddiadau, ceisiadau, newidiadau a straeon, a gofynnwch am ddigwyddiad stopio pob un. Gofynnwch a fyddai'r ceisydd yn cytuno bod y gwaith wedi'i orffen ar y funud honno. Mae gwahaniaethau barn yn pwyntio at gloc sy'n stopio'n rhy gynnar. Cytunwch ar un digwyddiad stopio fesul math a'i ysgrifennu.

**3. Pa rai o'n statysau sy'n aros, a pha mor hir y mae eitemau'n eistedd ynddynt?**
Rhowch y llif gwaith ar wal a marciwch bob cyflwr fel gweithredol neu aros. Gofynnwch am yr amser nodweddiadol ym mhob cyflwr aros o'r mis diwethaf o ddata. Mae'r cyflwr aros mwyaf fel arfer yn syndod i rywun. Dewiswch un ciw i'w archwilio'n agosach y mis nesaf.

**4. Pa ganradd ydym ni'n ei haddo, a beth mae'r system wedi'i wneud mewn gwirionedd?**
Dangoswch ddosbarthiad amseroedd cylch y chwarter diwethaf gyda'r canolrif, yr 85fed ganradd a'r 95fed ganradd. Gofynnwch pa ymrwymiad y mae'r tîm yn ei wneud i gwsmeriaid ar hyn o bryd a ble mae'n syrthio ar y dosbarthiad. Trafodwch gost addo amser cyflymach nag y mae'r system wedi'i gyflawni. Penderfynwch ar ymrwymiad y gall y tîm ei fodloni am ei resymau ei hun.

**5. Pwy a gaiff oedi'r cloc, a pham?**
Rhestrwch y cyflyrau oedi ac ar ddal, y bobl a all eu defnyddio, a'r rhesymau a nodir. Darllenwch sampl o eitemau a oedwyd a gofynnwch a oedd y cwsmer yn wir yr achos. Trafodwch beth fyddai'n digwydd pe bai cyfran yr oedi yn cael ei dangos ar yr un siart â chanlyniad yr SLA. Dylai'r hwylusydd gadw'r naws yn chwilfrydig, gan fod cyflyrau oedi yn aml yn bodoli am resymau dilys na chawsant eu hysgrifennu erioed.

**6. Pe bai effeithlonrwydd llif yn dyblu'r chwarter nesaf, beth fyddem ni wedi'i newid yn y ffordd y mae gwaith yn symud?**
Gofynnwch i'r grŵp enwi ciwiau penodol, trosglwyddiadau, cymeradwyaethau neu feintiau sypiau y byddai'n rhaid iddynt newid. Os yw'r atebion yn gyffredinol, megis "gweithio'n galetach" neu "cyfathrebu'n well," nid yw'r rhif eto wedi'i gysylltu ag unrhyw weithred. Dewiswch un newid pendant, rhagfynegwch ei effaith ar amser aros cyflwr a enwir, a chytunwch pryd i wirio.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n berchen ar y cloc amser cylch ac yn gweld ei fanylion ar y bwrdd. Maent yn ennill fwyaf drwy ddosbarthu cyflyrau'n onest, cyfyngu gwaith ar y gweill, a darllen y graff gwasgariad yn eu hôl-sylliadau eu hunain. Dylent wrthsefyll y pwysau i hollti gwaith yn ddarnau artiffisial o fach sy'n gorffen yn gyflym ac yn cyflwyno dim, a dylent ddangos oedran eitemau agored wrth ymyl amseroedd cylch wedi'u cwblhau (gweler pwnc 2.1, Mesurau llif).

### Timau gwasanaeth a gweithrediadau

Mae timau gwasanaeth yn gweithio gyda chofnodion sy'n cario clociau lefel gwasanaeth ffurfiol, a'u cyflyrau oedi yw lle mae amser a aeth heibio ac amser SLA yn ymwahanu. Dylent adrodd y ddau gloc, segmentu yn ôl math a blaenoriaeth, a chofnodi'r rheswm am bob oedi. Timau gweithrediadau hefyd yw perchnogion naturiol ciwiau ar gyfer cymeradwyaethau, ffenestri cynnal a chadw ac ymatebion cyflenwyr, sy'n aml yn dominyddu'r amser aros y mae timau cynnyrch yn ei weld (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gofyn am amser arweiniol oherwydd mai dyma'r rhif agosaf at yr hyn y mae'r cwsmer yn ei brofi. Dylent ddisgwyl diffiniad, dosbarthiad a segmentiad gyda phob ffigur, a dylent ofyn ble mae'r aros cyn gofyn pam mae pobl yn araf. Mae targedau ar gyfer y mesurau hyn yn gweithio orau pan fyddant yn berthnasol i wasanaeth neu ffrwd werth â pherchennog a enwir, a phan gânt eu gosod o'r hyn y mae'r system wedi'i gyflawni. Mae targed a gymhwysir i gyfartaledd yn gwahodd ail-ddosbarthu a gemau cloc.

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn profi amser arweiniol, gan gynnwys yr holl aros cyn i'r gwaith ddechrau a'r holl aros ar ôl i'r tîm gredu ei fod wedi gorffen. Maent angen amcangyfrif gonest a fynegir fel ystod, megis "mae'r rhan fwyaf o geisiadau fel hyn yn cael eu gwneud o fewn wythnos, a bron pob un o fewn pythefnos," ac maent angen gwybod pryd y cymhwyswyd oedi am fod y tîm yn aros amdanynt hwy. Dylai adroddiadau i gwsmeriaid nodi pa gloc y maent yn ei ddefnyddio (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn rhedeg desg gwasanaeth, tîm seilwaith a thîm cymwysiadau sy'n cefnogi staff clinigol. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r ddesg gwasanaeth yn adrodd bod ceisiadau mynediad safonol yn bodloni eu targed 5 diwrnod gwaith 94 y cant o'r amser, ac eto mae rheolwyr wardiau'n parhau i gwyno bod mynediad yn cymryd "tua phythefnos." Mae pennaeth gweithrediadau gwasanaeth yn gofyn i'r tîm fesur amser arweiniol ac amser cylch ar gyfer y ceisiadau hyn dros chwarter, gan ddefnyddio diwrnodau calendr a aeth heibio o'r hanes statws crai yn lle amserydd yr SLA.

Y canlyniad ar gyfer 400 cais (enghreifftiol) yw canolrif amser cylch o 3 diwrnod ac 85fed ganradd o 9 diwrnod. Mae gan amser arweiniol, a fesurir o'r funud yr anfonodd y rheolwr e-bost gyntaf i'r blwch post a rennir, ganolrif o 8 diwrnod ac 85fed ganradd o 16 diwrnod. Mae dau ganfyddiad yn esbonio'r bwlch. Yn gyntaf, mae ceisiadau'n aros 3 diwrnod ar gyfartaledd yn y blwch post cyn i unrhyw un greu tocyn, sy'n anweledig i'r SLA. Yn ail, mae'r statws "aros am gymeradwyaeth" yn cyfrif am y rhan fwyaf o amser cylch: o'r 85fed ganradd o 9 diwrnod, mae tua 6 diwrnod yn cael ei dreulio yn aros i bennaeth adran gymeradwyo. Mae amser cyffwrdd ar sampl o 30 cais tua hanner diwrnod, felly mae effeithlonrwydd llif tua 8 y cant (enghreifftiol). Mae canlyniad yr SLA yn uchel oherwydd bod yr amserydd yn stopio yn ystod "aros am gymeradwyaeth" ac "aros am gwsmer," felly mae cyfran oedi'r cloc yn 52 y cant o amser cylch.

Mae'r tîm yn gwneud tri phenderfyniad. Mae'n ychwanegu ffurflen we sy'n creu'r tocyn ar y cyswllt cyntaf, fel bod y cloc amser arweiniol yn dechrau lle mae cloc y cwsmer yn dechrau. Mae'n cytuno gyda phenaethiaid adrannau bod cymeradwyaethau ar gyfer rhestr ddiffiniedig o rolau safonol wedi'u rhag-awdurdodi, gydag archwiliad chwarterol yn lle cymeradwyaeth fesul cais. Ac mae'n ychwanegu cyfran oedi ac amser arweiniol at yr adolygiad gwasanaeth misol wrth ymyl canlyniad yr SLA. Ar ôl chwarter, mae canolrif amser arweiniol yn disgyn i 4 diwrnod a'r 85fed ganradd i 8 diwrnod (enghreifftiol), tra nad yw canlyniad yr SLA prin yn symud.

Yn ystod yr adolygiad mae'r tîm yn dal risg chwarae'r system. Mae technegydd wedi dechrau symud tocynnau i "aros am gwsmer" cyn gynted ag yr anfonir e-bost cymeradwyo, nad yw'r hyn y bwriadwyd y statws ar ei gyfer. Mae cyfran yr oedi ar gyfer y grŵp hwnnw'n codi, mae archwiliad o sampl o docynnau a oedwyd yn dangos y patrwm, ac mae'r tîm yn ailysgrifennu'r rheolau cloc fel mai dim ond cais am wybodaeth gan y ceisydd all oedi'r cloc. Y rheilen warchod a ddaliodd y broblem oedd adrodd cyfran yr oedi wrth ymyl canlyniad yr SLA, sef y paru a argymhellir yn y pwnc hwn.

## Y golwg fesul sector

**Busnes newydd.** Gyda thîm bach ac ychydig o drosglwyddiadau, mae amser cylch yn hawdd ei fesur o'r bwrdd ac mae amser arweiniol yn agos at amser cylch. Olrheiniwch y ddau o'r diwrnod cyntaf gyda dosbarthiad cyflyrau syml, ac edrychwch ar y graff gwasgariad yn wythnosol. Fel arfer mae effeithlonrwydd llif eisoes yn uchel ar gyfer tasgau bach, felly'r prif berygl yw derbyn anffurfiol sy'n cuddio ceisiadau mewn sgwrs.

**Busnes bach.** Gall un person chwarae ceisydd, cymeradwywr a gwneuthurwr, ac efallai mai dim ond amserydd SLA y bydd y ddesg gwasanaeth a gynhelir yn ei gynnig. Allforiwch yr hanes statws crai, cyfrifwch amser a aeth heibio eich hun, a chadwch un diffiniad ar gyfer pob cloc. Fel arfer y canfyddiad mwyaf defnyddiol yw pa mor hir y mae ceisiadau'n aros am ymatebion cyflenwyr neu werthwyr.

**Menter fawr.** Mae llawer o drosglwyddiadau rhwng timau, cyflenwyr a byrddau cymeradwyo yn gwneud amser aros yn fawr ac yn wasgaredig ar draws sefydliadau. Cytunwch ar eirfa a rennir ar gyfer dechrau, stopio ac oedi, dosbarthwch gyflyrau'n gyson ar draws offer ITSM a pheirianneg, a segmentwch yn ôl math o waith a dosbarth gwasanaeth. Dim ond ar ôl i ddiffiniadau alinio y mae cymariaethau traws-dîm yn ystyrlon, a dylid adeiladu crynodeb o ddosbarthiadau, nid drwy gyfartaleddu cyfartaleddau tîm.

**Llywodraeth a'r sector cyhoeddus.** Mae amseroedd ymateb statudol, rheolau caffael a chadwyni cymeradwyo yn creu aros na all y tîm ei dynnu ar ei ben ei hun. Cofnodwch y clociau a osodir yn allanol ar wahân i rai mewnol, fel y gellir gweld a gwella'r rhan o'r oedi y mae'r sefydliad yn ei reoli. Mae adrodd cyhoeddus ar amser arweiniol, gyda diffiniadau plaen, yn magu ymddiriedaeth ac yn datgelu'r ciwiau y mae polisi yn eu creu (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y prif gymhelliad yw bod mesurau amser yn troi cwyn amwys ("mae'n cymryd oesoedd") yn broblem wedi'i lleoli ("mae ceisiadau'n aros chwe diwrnod am gymeradwyaeth"). Mae'r un data yn rhoi rhagolwg gwir i dimau, fel bod ymrwymiadau i gwsmeriaid yn seiliedig ar ddosbarthiad gwaith y gorffennol yn hytrach na gobaith. Mae hefyd yn datgelu ble byddai buddsoddi mewn awtomeiddio, cymeradwyaethau neu staffio yn byrhau'r amser a aeth heibio, sy'n aml yn lle gwahanol i'r hyn y mae pobl yn ei ddisgwyl.

Mae'r costau'n gymedrol pan fo'r offer eisoes yn cofnodi newidiadau cyflwr. Mae'r gosodiad yn cynnwys cytuno ar y diffiniadau, dosbarthu'r cyflyrau ac adeiladu golwg o'r dosbarthiad a'r graff gwasgariad. Costau rhedeg yw'r amser i gynnal y dosbarthiad cyflyrau, i archwilio rhesymau oedi ar sampl, ac i gynnal yr adolygiad misol. Lle mae hanes cyflwr ar goll neu'n annibynadwy, y buddsoddiad cyntaf yw yn yr offeryniaeth a ddisgrifir ym mhwnc 1.5, Ffynonellau data ac offeryniaeth.

Mae'r elw yn ymddangos mewn patrymau y gall tîm eu mesur drosto'i hun: amser cylch canradd uchel byrrach ar gyfer math o waith, llai o ddwysáu am eitemau hwyr, llai o ddadleuon ynghylch pa gloc sy'n gywir, a bwlch llai rhwng amser arweiniol ac amser cylch. Peidiwch â disgwyl budd penodol o feincnod. Mae awduron main a llif yn disgrifio effeithlonrwydd llif isel fel peth cyffredin, ond ni ddylid mabwysiadu unrhyw ffigur cyhoeddedig fel targed ar gyfer eich gwaith eich hun heb eich data eich hun. Pobl sy'n dominyddu cyfanswm cost perchnogaeth, felly cyfrifwch oriau perchennog y metrig a'r adolygwyr.

## Gwrthbatrymau a maglau

- **Adrodd y cymedr.** Mae un allanolyn hir yn llusgo'r cyfartaledd ac mae'r eitem nodweddiadol yn cael ei chamddisgrifio. Adroddwch y canolrif a chanradd uchel, a phlotiwch yr eitemau.
- **Un rhif ar gyfer pob gwaith.** Mae cymysgu digwyddiadau, ceisiadau a nodweddion yn cynhyrchu dosbarthiad nad yw'n disgrifio dim. Segmentwch yn ôl math o waith a dosbarth gwasanaeth yn gyntaf.
- **Mesur cloc yr SLA yn unig.** Mae amserydd sy'n stopio yn ystod cyflyrau aros yn adrodd canlyniad nad yw'r cwsmer byth yn ei brofi. Adroddwch amser arweiniol a aeth heibio a chyfran yr oedi wrth ei ymyl.
- **Gosod targed effeithlonrwydd llif.** Mae pobl yn codi'r gymhareb drwy ail-labelu cyflyrau. Defnyddiwch ef fel diagnosteg a barnwch lwyddiant yn ôl amser aros ciwiau a enwir.
- **Dechrau'r cloc yn y lle anghywir.** Mae cloc sy'n dechrau wrth neilltuo neu wrth y gwaith cyntaf yn cuddio'r ciw derbyn. Dechreuwch amser arweiniol wrth y cais ac amser cylch wrth yr ymrwymiad, a chyhoeddwch y ddau.
- **Cymharu timau yn ôl amser cylch.** Mae gwaith gwahanol, cyflyrau gwahanol a diffiniadau gwahanol yn gwneud safleoedd yn ddiystyr ac yn gwahodd chwarae'r system. Cymharwch dîm â'i hanes ei hun, a chymharwch wasanaethau dim ond ar ôl i'r diffiniadau alinio.
- **Anwybyddu eitemau agored.** Mae amser cylch yn cyfrif gwaith gorffenedig yn unig, felly mae eitem sownd yn anweledig nes ei bod yn dod i ben. Olrheiniwch oedran eitemau sy'n dal ar y gweill (gweler pwnc 2.1, Mesurau llif).
- **Newid diffiniadau'n dawel.** Mae'r duedd wedyn yn cofnodi newid yn yr offeryn. Logiwch bob newid a'i nodi ar y siart.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a chlociau | Mae pobl yn dyfynnu hyd o'r cof; mae pob person yn dechrau'r cloc yn wahanol | Mae rhai timau'n diffinio amser cylch ar eu bwrdd; mae timau ITSM yn dyfynnu amser SLA | Un diffiniad ysgrifenedig o amser arweiniol, amser cylch ac oedi a ddefnyddir gan bob tîm | Newidiadau diffiniad wedi'u logio a hanes wedi'i ailddatgan o ddigwyddiadau crai | Diffiniadau wedi'u halinio â chyflenwyr a chwsmeriaid a'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Adrodd a dadansoddi | Cyfartaleddau mewn sleid, wedi'u cydosod â llaw | Mae rhai timau'n dangos canolrifau neu siart o'r offeryn | Canolrif a chanradd uchel, gyda graff gwasgariad, wedi'u segmentu yn ôl math o waith | Dosbarthiadau wedi'u tueddu a'u hadolygu ar rythm; rhagolygon wedi'u tynnu ohonynt | Data llif ar draws timau a chyflenwyr wedi'i gyfuno i ragweld ymrwymiadau pen-i-ben |
| Aros ac effeithlonrwydd llif | Nid yw aros yn cael ei wahaniaethu oddi wrth weithio | Mae colofnau wedi'u rhwystro'n bodoli ar rai byrddau | Pob statws wedi'i ddosbarthu fel gweithredol neu aros; effeithlonrwydd llif wedi'i gyfrifo ar bob eitem orffenedig | Ciwiau mwyaf wedi'u harchwilio a'u hariannu ar gyfer gwelliant; rhesymau oedi wedi'u harchwilio | Ciwiau, cymeradwyaethau a throsglwyddiadau wedi'u hailgynllunio ar y cyd â'r timau a'r cyflenwyr sy'n eu creu |
| Defnydd mewn penderfyniadau | Rhifau wedi'u dangos mewn adolygiad chwarterol heb eu gweithredu arnynt | Mae timau'n trafod amser cylch mewn ôl-sylliadau | Targedau gwasanaeth wedi'u gosod o'r dosbarthiad a arsylwyd | Targedau wedi'u paru â rheiliau gwarchod a'u hadolygu am chwarae'r system | Mae cwsmeriaid yn gweld ystodau gonest, ac mae syniadau gwella'n dod gan bawb sy'n cyffwrdd â'r gwaith |

## Rhestr wirio

- [ ] Mae gan bob mesur amser ddigwyddiad dechrau, digwyddiad stopio a rhestr o eithriadau wedi'u hysgrifennu yn y gofrestr metrigau.
- [ ] Adroddir amser arweiniol ac amser cylch, a labelir pob siart gyda'r un y mae'n ei ddangos.
- [ ] Diffinnir "wedi'i wneud" ar gyfer pob math o waith a chytunir arno gyda'r ceisydd.
- [ ] Adroddir canlyniadau fel y canolrif a chanradd uchel, a phlotir yr eitemau.
- [ ] Segmentir data yn ôl math o waith a, lle bo'n berthnasol, dosbarth gwasanaeth.
- [ ] Dosberthir pob statws fel gweithredol, aros neu wedi'i wneud, ac adolygir y dosbarthiad bob chwarter.
- [ ] Mae statysau oedi, pwy a gaiff eu defnyddio, a'u rhesymau wedi'u hysgrifennu a'u harchwilio ar sampl.
- [ ] Dangosir amser a aeth heibio ac amser SLA ochr yn ochr, gyda chyfran yr oedi.
- [ ] Defnyddir effeithlonrwydd llif fel diagnosteg ac nid yw ar gerdyn sgorio.
- [ ] Logir newidiadau diffiniad a'u nodi ar y siartiau.
- [ ] Adolygir oedran eitemau agored gydag amseroedd cylch wedi'u cwblhau.

## Anogwyr AI

**Drafftiwch reolau cloc ar gyfer math o waith.**

```text
Rydym yn trin [math o waith, er enghraifft ceisiadau mynediad safonol] yn [offeryn
neu offer]. Statysau'r llif gwaith yw [rhestr o statysau]. Drafftiwch reolau cloc
ysgrifenedig ar gyfer amser arweiniol ac amser cylch: y digwyddiad sy'n dechrau
pob cloc, y digwyddiad sy'n ei stopio, pa statysau sy'n oedi neu'n eithrio
amser, a beth sy'n digwydd i eitemau a ganslwyd ac a ailagorwyd. Nodwch statysau
y mae eu hystyr yn amwys a chwestiynau y dylwn eu hateb cyn i'r rheolau fod yn
derfynol. Peidiwch â dyfeisio nodweddion ein hoffer na gwerthoedd meincnod.
Rhestrwch eich rhagdybiaethau.
```

**Dosbarthwch statysau fel gweithredol neu aros.**

```text
Dyma'r llif gwaith ar gyfer [tîm neu wasanaeth]: [statysau gydag ystyr un llinell
i bob un]. Ar gyfer pob statws, cynigiwch a yw'n waith gweithredol, aros neu
wedi'i wneud, ac esboniwch pam. Nodwch statysau sy'n cymysgu gweithio ac aros,
ac awgrymwch sut i'w hollti gyda'r newid lleiaf i'r llif gwaith. Dywedwch sut
y byddai'r dosbarthiad yn newid cyfrifo effeithlonrwydd llif. Peidiwch â
thybio pa mor hir y mae eitemau'n aros ym mhob statws. Rhestrwch eich rhagdybiaethau.
```

**Dadansoddwch set o amseroedd cylch.**

```text
Isod mae amseroedd cylch yn [uned] ar gyfer [nifer] o eitemau gorffenedig o fath
[math o waith], gyda dyddiadau gorffen: [data]. Disgrifiwch y dosbarthiad gan
ddefnyddio'r canolrif a'r [canradd, er enghraifft 85fed] canradd, nodwch
glystyrau neu ddrifft dros amser, ac awgrymwch gwestiynau i'w gofyn i'r tîm am
yr eitemau araf. Argymhellwch faint o eitemau sydd eu hangen arnaf cyn bod y
canraddau'n ddibynadwy, ac esboniwch y rhesymu. Peidiwch â dyfeisio gwerthoedd
meincnod na chymharu â sefydliadau eraill. Rhestrwch eich rhagdybiaethau.
```

**Adolygwch fetrig am chwarae'r system.**

```text
Rydym yn adrodd [metrig, er enghraifft effeithlonrwydd llif] ar gyfer [tîm neu
wasanaeth], wedi'i ddiffinio fel [diffiniad a chlociau]. Gall pobl ddylanwadu arno
trwy [ymddygiadau hysbys, os o gwbl]. Rhestrwch ffyrdd credadwy y gellid chwarae
neu gamddarllen y rhif, metrig neu arfer rheilen warchod pâr ar gyfer pob un,
a sampl o gofnodion y dylwn eu darllen â llaw i wirio. Peidiwch â dyfeisio
ystadegau am ba mor aml y mae chwarae'r system yn digwydd. Rhestrwch eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n diffinio mesur amser a'r rheilen warchod sy'n perthyn wrth ei ymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod mesur amser wedi'i olygu yn nodi ei glociau, ei eithriadau a'i ffordd o chwarae'r system.

## Pwyntiau allweddol

- Aros y cwsmer yw amser arweiniol ac aros y tîm yw amser cylch, felly cadwch y ddau ac archwiliwch y bwlch rhyngddynt.
- Ysgrifennwch y rheolau dechrau, stopio ac oedi ar gyfer pob cloc, a thrinwch newid diffiniad fel digwyddiad.
- Adroddwch y canolrif a chanradd uchel, plotiwch yr eitemau, a segmentwch yn ôl math o waith cyn cymharu unrhyw beth.
- Mae effeithlonrwydd llif fel arfer yn isel oherwydd bod y rhan fwyaf o'r amser a aeth heibio yn aros, felly defnyddiwch ef i leoli ciwiau ac osgowch ei wneud yn darged.
- Dangoswch gyfran yr oedi wrth ymyl unrhyw ganlyniad lefel gwasanaeth sy'n eithrio amser wedi'i oedi.
- Lleihewch waith ar y gweill a chael gwared â throsglwyddiadau i fyrhau'r amser, oherwydd nid yw dweud wrth bobl am frysio yn newid y ciwiau.

## Cyfeiriadau a darllen pellach

1. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
2. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
3. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. DeGrandis, D., *Making Work Visible: Exposing Time Theft to Optimize Work and Flow*, IT Revolution, 2017.
6. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
7. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
10. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
11. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
12. Wikipedia, [Cycle time](https://en.wikipedia.org/wiki/Cycle_time).
13. Wikipedia, [Lean software development](https://en.wikipedia.org/wiki/Lean_software_development).
14. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
15. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
