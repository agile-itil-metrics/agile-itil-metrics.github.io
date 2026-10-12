# Chwyddiant metrigau a gwanhau ansawdd

**Pan fo AI yn gwneud cyfaint a chyflymder yn rhad, mae pob metrig sy'n cyfrif cyfaint a chyflymder yn chwyddo, felly pârwch bob un â mesur o ddefnyddioldeb y mae person wedi'i wirio, a gwyliwch a yw'r signal yn eich data yn cael ei foddi.**

## Crynodeb a chymhelliant

Mae metrig yn gweithio oherwydd ei fod yn adlewyrchu rhywbeth sy'n anodd ei gynhyrchu. Mae tocynnau a ddatryswyd yn adlewyrchu ymdrech. Mae dogfennau a ysgrifennwyd yn adlewyrchu gwybodaeth. Mae profion a ychwanegwyd yn adlewyrchu gofal. Pan fo offeryn yn gwneud yr allbwn gweladwy bron yn rhad ac am ddim, mae'r cyswllt rhwng yr allbwn a'r ymdrech yn torri. Mae'r rhifau'n parhau i godi ac mae'r ystyr yn draenio allan. Dyma chwyddiant metrigau, a'i gydymaith yw gwanhau ansawdd: mae cyfran yr hyn a gynhyrchir sy'n ddefnyddiol yn disgyn, ac mae'r rhan ddefnyddiol yn dod yn anoddach i'w chanfod.

Nid yw hon yn broblem newydd. Mae [cyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) a'i pherthynas [cyfraith Campbell](https://en.wikipedia.org/wiki/Campbell%27s_law) yn disgrifio sut mae mesurau a ddefnyddir ar gyfer rheolaeth yn cael eu llygru. Mae [metrig gwagedd](https://en.wikipedia.org/wiki/Vanity_metric) yn edrych yn drawiadol ac yn dweud dim am iechyd y gwaith. Yr hyn y mae AI yn ei newid yw cyflymder a graddfa cynhyrchu allbwn, a gyda hynny cyflymder a graddfa y gall yr hen fethiannau hyn ddigwydd. Gall tîm a oedd unwaith yn chwyddo cyfrif â llaw bellach wneud hynny mewn munudau, yn aml heb fwriadu.

Mae sawl patrwm yn ailadrodd mewn gwaith gwasanaeth a chyflawni.

- **Chwyddiant cyfaint.** Mae AI yn drafftio mwy o docynnau, mwy o atebion, mwy o sylwadau, mwy o achosion prawf, mwy o ddogfennau, a mwy o god. Mae cyfrifon y rhain yn codi. Mae llwythi gwaith y rhai sy'n gorfod eu darllen, eu hadolygu, a'u cynnal yn codi hefyd.
- **Chwyddiant cyflymder.** Mae amser i ddrafft cyntaf yn disgyn yn sydyn, ac mae amser i ganlyniad gorffenedig, wedi'i wirio yn disgyn llai, neu ddim o gwbl. Mae dangosfwrdd sy'n adrodd y cyntaf o'r rhain yn dweud stori wenieithus.
- **Sŵn.** Mae mwy o gynnwys yn cystadlu am sylw. [Gorlwyth gwybodaeth](https://en.wikipedia.org/wiki/Information_overload) yw'r cyflwr lle na all person brosesu'r cyfaint o wybodaeth a gyflwynir, ac mae'r [gymhareb signal-i-sŵn](https://en.wikipedia.org/wiki/Signal-to-noise_ratio) yn y sylfaen wybodaeth, y ciw tocynnau, neu'r ffrwd rhybuddion yn disgyn. [Blinder rhybuddion](https://en.wikipedia.org/wiki/Alert_fatigue) yw ei ffurf weithredol (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion).
- **Cynnwys a gynhyrchir o ansawdd isel.** Mae cynnwys a gynhyrchir mewn swmp gydag ychydig o adolygu, a elwir weithiau yn [llaid AI](https://en.wikipedia.org/wiki/AI_slop), yn gredadwy ac yn denau. Mae sylfaen wybodaeth a hadwyd ag erthyglau o'r fath yn dod yn llai dibynadwy, ac mae defnyddwyr yn dysgu ei hamau.
- **Cost gwirio.** Mae'r ymdrech i wirio honiad yn aml yn llawer mwy na'r ymdrech i'w wneud, patrwm a elwir weithiau yn [gyfraith Brandolini](https://en.wikipedia.org/wiki/Brandolini%27s_law). Pan fo cynhyrchu'n rhad, gwirio yw'r dagfa.
- **Effeithlonrwydd sy'n cynyddu defnydd.** Mae'r [paradocs Jevons](https://en.wikipedia.org/wiki/Jevons_paradox) yn disgrifio achosion lle mae enillion effeithlonrwydd yn arwain at fwy o ddefnydd o adnodd, nid llai. Os daw drafftio adroddiad yn rhad, mynnir mwy o adroddiadau. Gall amser a arbedir gan offeryn gael ei ddefnyddio gan fwy o waith o werth is.
- **Dolenni adborth.** Os yw cynnwys a gynhyrchir yn bwydo'r rownd nesaf o gynhyrchu, mae gwallau'n cyfansoddi. Mae'r llenyddiaeth ymchwil yn disgrifio [cwymp model](https://en.wikipedia.org/wiki/Model_collapse) mewn modelau a hyfforddir ar eu hallbynnau eu hunain. Gall dolen debyg ddigwydd y tu mewn i sefydliad pan fo cynorthwyydd yn crynhoi tocynnau a ysgrifennwyd gan gynorthwyydd o erthyglau a grynhowyd gan gynorthwyydd.
- **Llinellau sylfaen yn drifftio.** Os yw dosbarthiad data yn newid oherwydd AI, nid yw tueddiadau a throthwyon yn golygu'r hyn a wnaethant mwyach. Mae hyn yn debyg i [ddrifft cysyniad](https://en.wikipedia.org/wiki/Concept_drift) mewn dysgu peirianyddol, lle mae'r berthynas rhwng mewnbynnau a chanlyniadau yn newid dros amser. Gall cynnydd mewn cyfaint tocynnau adlewyrchu creu tocynnau haws, nid mwy o broblemau.

Mae'r nodau ystwyth yn bwysig yma. Mae cyflawni parhaus, gwelliant parhaus, a chyflymder cynaliadwy i gyd yn dibynnu ar y signal fod yn glir. Ni ddylid gofyn i bobl gymhellol drochi drwy sŵn a gynhyrchir gan beiriant neu wirio pentyrrau o allbwn ar gyflymder anghynaliadwy. Rhanddeiliaid sy'n cymryd rhan yn barhaus hefyd yw'r amddiffyniad gorau: byddant yn dweud wrthych pan na fydd yr adroddiadau'n helpu mwyach.

Mae'r pwnc hwn yn rhoi'r mesurau ar gyfer sylwi ar chwyddiant a gwanhau, a'r parau sy'n eu datgelu. Mae'n adeiladu ar y sylfeini a'r mesurau gwaith â chymorth (gweler pwnc 10.1, AI mewn mesur rheoli gwasanaethau, a phwnc 10.2, Mesur gwaith â chymorth AI).

## Egwyddorion allweddol

- **Pârwch bob metrig cyfaint neu gyflymder â gwiriad defnyddioldeb.** Mae person yn barnu a yw'r allbwn yn ddefnyddiol.
- **Mesurwch i ganlyniad gorffenedig, wedi'i wirio.** Mae cyflymder drafft cyntaf yn fagl.
- **Gwyliwch y baich gwirio.** Mae'n tyfu'n dawel ac yn bwyta'r amser a arbedwyd.
- **Gwarchodwch y signal.** Cadwch y sylfaen wybodaeth, ciwiau, a rhybuddion yn ddigon glân i ymddiried ynddynt.
- **Torrwch ddolenni adborth.** Peidiwch â gadael i gynnwys a gynhyrchir fwydo cynhyrchu heb adolygu.
- **Ail-sefydlwch linell sylfaen pan fo'r data'n newid.** Mae tueddiadau ar draws newid technoleg angen gofal.
- **Ffafriwch lai o allbynnau, gwell.** Gall llai fod yn fwy pan mai sylw yw'r adnodd cyfyngedig.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cymhareb allbwn-i-ganlyniad | Cyfaint allbwn o'i gymharu â'r canlyniad y bwriadwyd iddo ei gynhyrchu | cyfrif allbwn (tocynnau, erthyglau, newidiadau) / mesur canlyniad (problemau a ddatryswyd, erthyglau a ddefnyddiwyd, newidiadau a gadwyd), dros yr un cyfnod, wedi'i olrhain fel tuedd | cymhareb | Traciwr gwaith, sylfaen wybodaeth, mesurau canlyniad | Gwelliant parhaus; mesur ac adrodd | Meddalwedd sy'n gweithio dros gyfaint dogfennaeth | Misol |
| Cyfran eitemau defnyddiol | Cyfran yr eitemau a samplwyd a farnwyd yn ddefnyddiol gan adolygydd cymwys | eitemau a samplwyd a farnwyd yn ddefnyddiol (cywir, perthnasol, nad ydynt yn ddyblyg) / eitemau a samplwyd | canran | Adolygu sampl ar hap | Rheoli gwybodaeth; sicrwydd ansawdd | Diffiniad o orffen ar gyfer cynnwys | Misol |
| Baich gwirio | Amser dynol a dreulir yn gwirio ac yn cywiro gwaith a gynhyrchir fesul uned allbwn | oriau adolygu a chywiro / unedau allbwn, wedi'u holrhain fel tuedd | oriau fesul uned | Amcangyfrifon amser, data offer adolygu | Rheoli ariannol gwasanaeth; gwelliant parhaus | Capasiti adolygu fel cyfyngiad | Misol |
| Cyfradd diswyddo cynnwys | Cyfran eitemau gwybodaeth sy'n dyblygu neu'n gorgyffwrdd yn sylweddol ag un arall | eitemau a fflagiwyd fel dyblyg neu'n gorgyffwrdd mewn adolygiad neu drwy baru / eitemau yn y sylfaen wybodaeth | canran | Adolygu'r sylfaen wybodaeth, adroddiadau paru | Rheoli gwybodaeth | Un ffynhonnell gwirionedd | Chwarterol |
| Cyfran wedi'i hadolygu o wybodaeth a gynhyrchwyd | Cyfran yr eitemau gwybodaeth a gynhyrchwyd gan AI y mae person cymwys wedi'u hadolygu a'u cymeradwyo cyn eu cyhoeddi | eitemau a gynhyrchwyd ac a gyhoeddwyd gydag adolygiad cymeradwy / eitemau a gynhyrchwyd ac a gyhoeddwyd | canran | Metadata'r sylfaen wybodaeth | Rheoli gwybodaeth; galluogi newid | Adolygu cyn rhyddhau | Misol |
| Mewnlif ôl-groniad yn erbyn datrys | Twf gwaith sy'n cyrraedd o'i gymharu â thwf gwaith a ddatryswyd, ar gyfer ciwiau yr effeithir arnynt gan AI | (newid mewn eitemau a grëwyd) / (newid mewn eitemau a ddatryswyd), o'i gymharu â'r llinell sylfaen cyn-AI | cymhareb | Hanes tocynnau a thraciwr | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth | Cydbwysedd llif | Misol |
| Fflagiau drifft metrig | Nifer y metrigau y newidiodd eu diffiniad neu ddosbarthiad yn amlwg ar ôl cyflwyno AI, wedi'u hadolygu a'u hanodi | metrigau a fflagiwyd mewn adolygiad / metrigau yn y gofrestr | cyfrif; canran | Adolygu'r gofrestr metrigau, gwiriadau dosbarthiad | Mesur ac adrodd | Ôl-sylliad ar fesur | Chwarterol |

Diffiniwch "defnyddiol" mewn rwbrig ysgrifenedig: cywir, perthnasol i angen go iawn, nad yw'n ddyblyg, a chyfredol. Mae baich gwirio yn cyfrif amser a dreulir gan bobl, gan gynnwys yr amser i annog eto, ac yn eithrio amser sy'n aros yn unig. Rheolaeth yw cyfran wedi'i hadolygu: mae gwybodaeth a gynhyrchwyd heb ei hadolygu yn cael ei holrhain ar wahân a'i chadw wedi'i labelu'n weladwy. Trafodaethau yw fflagiau drifft metrig, nid cosbau: mae fflag yn golygu bod person wedi penderfynu a ddylid addasu'r diffiniad, anodi'r duedd, neu ail-sefydlu llinell sylfaen. Mae pob mesur yn disgrifio prosesau a chynnwys, nid unigolion.

## Argymhellion

### Pârwch gyfaint â defnyddioldeb

**1. Adeiladwch wiriad defnyddioldeb i mewn i bob metrig cyfaint.** Ar gyfer pob mesur cyfaint neu gyflymder ar eich dangosfwrdd, enwch fesur defnyddioldeb y mae person wedi'i farnu. Mae tocynnau a grëwyd yn paru ag ansawdd datrys, erthyglau a ysgrifennwyd â defnydd erthyglau a chywirdeb, newidiadau a unwyd â chadw ac ail-wneud (gweler pwnc 10.2, Mesur gwaith â chymorth AI). Dangoswch hwy gyda'i gilydd, a thrafodwch pan fyddant yn dargyfeirio.

**2. Samplwch a barnwch, yn rheolaidd.** Bob mis, tynnwch sampl ar hap o eitemau o'r ffrydiau y mae AI yn eu cyffwrdd a gofynnwch i berson cymwys eu barnu yn erbyn rwbrig ysgrifenedig. Cofnodwch y gyfran ddefnyddiol a'r rhesymau pam mae eitemau'n methu. Cylchdroi adolygwyr a'u cadw'n annibynnol ar y cynhyrchwyr. Samplu yw'r prif amddiffyniad rhag gwanhau araf.

**3. Adroddwch ganlyniadau cyn allbynnau.** Mewn adroddiadau arweinyddiaeth, arweiniwch gyda chanlyniadau: problemau a ddatryswyd, defnyddwyr bodlon, diffygion a osgowyd. Rhowch gyfrifon allbwn wedyn, fel cyd-destun. Os byddai'r adroddiad yn dal yn werthfawr gyda'r cyfrifon allbwn wedi'u tynnu, mae wedi'i gyfeirio'n dda.

### Rheolwch wirio a sŵn

**4. Mesurwch y baich gwirio.** Amcangyfrifwch yr amser a dreulir yn gwirio ac yn cywiro gwaith a gynhyrchwyd, a'i olrhain fel tuedd fesul uned allbwn. Os yw'n codi wrth i allbwn godi, mae'r budd net yn llai nag y mae'r rhifau cynhyrchu yn ei awgrymu, ac efallai fod adolygwyr ar eu ffordd i orlwyth. Cynhwyswch y baich yn y gost fesul tasg (gweler pwnc 10.1, AI mewn mesur rheoli gwasanaethau).

**5. Cyfyngwch ar yr hyn sy'n mynd i mewn i'r system.** Penderfynwch pa gynnwys a gynhyrchir y caniateir ei greu a'i gyhoeddi'n awtomatig, a beth sydd angen ei adolygu. Gosodwch derfynau ar faint a nifer y newidiadau a gynhyrchir mewn un adolygiad. Gwnewch hi'n hawdd dweud na i gyfaint. Mae ciw llai gydag eitemau cliriach yn gwasanaethu defnyddwyr yn well.

**6. Rheolwch y sylfaen wybodaeth fel cynnyrch.** Labelwch gynnwys a gynhyrchwyd, mynnwch adolygiad cyn cyhoeddi, ymddeolwch ddyblygion ac eitemau hen, ac olrheiniwch ddiswyddo a defnydd. Mae sylfaen wybodaeth yn ddefnyddiol yn gymesur â faint y mae defnyddwyr yn ymddiried ynddi. Tynnwch erthyglau nad oes neb yn eu defnyddio ac na all neb eu cefnogi (gweler pwnc 3.6, Metrigau rheoli gwybodaeth).

**7. Cadwch ffrydiau rhybuddion a thocynnau yn lân.** Os yw AI yn creu tocynnau o rybuddion neu grynodebau, mesurwch y gyfran ddefnyddiol a'r dyblygion. Tiwniwch yn ymosodol. Trinwch gymhareb signal-i-sŵn sy'n disgyn fel digwyddiad yn ei hawl ei hun, gan ei fod yn niweidio ymateb pan ddaw trafferth go iawn.

### Torrwch ddolenni a gwyliwch y llinell sylfaen

**8. Stopiwch gynnwys a gynhyrchwyd rhag bwydo ei hun heb ei wirio.** Lle mae cynorthwyydd yn tynnu ar sylfaen wybodaeth, hanes tocynnau, neu adroddiadau'r gorffennol, sicrhewch fod deunydd a gynhyrchwyd yn y ffynonellau hynny wedi'i adolygu, neu ei fod wedi'i labelu a'i bwysoli yn unol â hynny. Samplwch y gadwyn: dewiswch ateb a'i olrhain yn ôl drwy ei ffynonellau i weld o ble y daeth. Mae dolenni heb eu gwirio yn chwyddo gwallau.

**9. Ail-sefydlwch linell sylfaen pan fo'r data'n symud.** Ar ôl cyflwyno AI, anodwch siartiau tuedd a, lle mae natur y data wedi newid, dechreuwch linell sylfaen newydd. Gwiriwch ddosbarthiadau, nid cyfansymiau yn unig: gall hyd tocynnau, cymysgedd categorïau, ac amser i greu i gyd symud. Mae fflagiau drifft metrig yn ysgogi'r sgyrsiau hyn (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).

**10. Chwiliwch am adlam.** Pan fo tasg yn dod yn rhatach, gofynnwch a fydd y galw amdani yn tyfu. Penderfynwch ymlaen llaw sut i ddefnyddio amser a arbedir, fel na chaiff ei amsugno gan fwy o allbwn o werth isel. Gall tîm sy'n cynhyrchu dwywaith cymaint o adroddiadau gyda'r un ymdrech fod yn gwneud llai o waith defnyddiol.

### Cadwch sylw dynol yn y ddolen

**11. Gwarchodwch sylw adolygwyr a defnyddwyr.** Mae capasiti adolygu a sylw yn brin. Lleihewch gyfaint y deunydd y mae'n rhaid i bobl ei ddarllen, rhowch lwythi realistig i adolygwyr, a gofynnwch iddynt beth sy'n dod yn anoddach. Mae cyflymder cynaliadwy yn cynnwys cyflymder darllen a barnu (gweler pwnc 9.2, Metrigau boddhad a lles).

**12. Gofynnwch i ddefnyddwyr a rhanddeiliaid a yw'r signal yn glir.** Cynnwys parhaus y bobl sy'n defnyddio'r allbynnau yw'r prawf gorau. Gofynnwch a yw'r sylfaen wybodaeth yn haws neu'n anoddach i'w defnyddio, a yw adroddiadau'n dweud wrthynt yr hyn sydd ei angen arnynt, a yw'r ciw yn teimlo'n gliriach. Dylid darllen eu hatebion, a'u sylwadau, wrth ymyl y rhifau.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cymhareb allbwn-i-ganlyniad | Dewis mesur canlyniad sy'n codi gyda chyfaint; newid y cyfnod | Canlyniad wedi'i osod yn y gofrestr; cymharu â boddhad a chyfradd ailagor |
| Cyfran eitemau defnyddiol | Samplu eitemau hawdd; rwbrig trugarog; adolygwyr wedi'u dylanwadu gan y cynhyrchydd | Sampl ar hap; rwbrig ysgrifenedig; adolygwyr annibynnol, sy'n cylchdroi |
| Baich gwirio | Peidio â logio amser adolygu; symud gwirio i dimau i lawr yr afon | Cynnwys ail-wneud i lawr yr afon; gofyn i adolygwyr am lwyth |
| Cyfradd diswyddo cynnwys | Rheolau paru cul sy'n colli dyblygion; uno eitemau gwahanol | Samplu dyblygion â llaw; logio rheolau uno |
| Cyfran wedi'i hadolygu o wybodaeth a gynhyrchwyd | Marcio adolygu fel un cyflawn heb ddarllen; adolygu mewn swmp | Samplu adolygiadau am sylwedd; amser fesul adolygiad; cyfradd gwallau mewn eitemau a gyhoeddwyd |
| Mewnlif ôl-groniad yn erbyn datrys | Cau eitemau'n awtomatig; hollti eitemau | Gwirio ansawdd datrys; cyfradd ailagor; samplu eitemau a gaewyd |
| Fflagiau drifft metrig | Peidio â fflagio i osgoi gwaith; fflagio popeth | Adolygu pob metrig bob chwarter; mynnu penderfyniad ar gyfer pob fflag |

Mae darlleniad iach yn gyfran eitemau defnyddiol sefydlog neu'n codi wrth i gyfaint dyfu, baich gwirio sy'n hysbys ac yn fforddiadwy, sylfaen wybodaeth gyda diswyddo isel a chynnwys a gynhyrchwyd wedi'i adolygu, ciwiau gyda signal clir, ac olwg arweinyddiaeth sy'n arwain gyda chanlyniadau.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Cyfrif allbynnau | Hawdd, cyfarwydd | Chwyddo; gwobrwyo cyfaint |
| Mesur canlyniadau | Adlewyrchu gwerth | Arafach; anoddach ei briodoli |
| Samplu a barnu | Canfod gwanhau | Angen adolygwyr medrus; ymdrech |
| Sgorio ansawdd awtomatig | Yn graddio | Barn model arall; gall rannu'r un smotiau dall |
| Adolygu popeth a gynhyrchir | Diogel | Yn tynnu'r budd; adolygwyr wedi'u gorlwytho |
| Adolygu sampl | Ymarferol | Mae rhai eitemau gwael yn pasio |
| Caniatáu cynhyrchu agored | Cyflym, eang | Sŵn; ymddiriedaeth yn erydu |
| Cyfyngu cynhyrchu i ddefnyddiau cymeradwy | Signal glanach | Mabwysiadu arafach; buddion a gollwyd |

Yr ateb pragmatig yw mesur canlyniadau, samplu a barnu defnyddioldeb gyda phobl, cyfyngu ar yr hyn sy'n mynd i storfeydd a rennir heb adolygu, ac ailedrych ar linellau sylfaen. Defnyddiwch sgorio awtomatig fel cymorth ac nid fel y barnwr.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa rai o'n rhifau sydd wedi codi ers i ni ddechrau defnyddio AI, a beth mae wedi'i wneud i'r bobl yr ydym yn eu gwasanaethu?**
Rhestrwch y rhifau. Ar gyfer pob un, edrychwch ar y canlyniad y bwriadwyd iddo ei adlewyrchu. Dylai'r hwylusydd nodi lle na symudodd y canlyniad. Pârwch y rhifau hynny â gwiriad defnyddioldeb.

**2. Faint o'r hyn a gyhoeddwyd neu a grëwyd gennym y mis diwethaf fyddem ni'n hapus i'w amddiffyn fesul llinell?**
Cymerwch sampl ar hap a'i ddarllen gyda'ch gilydd. Marciwch yr hyn sy'n ddefnyddiol, yn denau, yn anghywir, neu'n ddyblyg. Trafodwch y gyfradd a'r achosion. Cytunwch ar safon ar gyfer yr hyn sy'n mynd i storfeydd a rennir.

**3. Ble mae gwirio yn dod yn ein tagfa?**
Gofynnwch i'r adolygwyr. Edrychwch ar giwiau adolygiadau, dyfnder adolygu, a'r ymdrech y maent bellach yn ei chario. Cytunwch ar derfyn ar faint neu nifer yr eitemau a gynhyrchir fesul adolygiad, a ffordd o fesur y baich.

**4. Pa gynnwys a gynhyrchwyd sy'n bwydo cynnwys arall a gynhyrchwyd yma?**
Olrheiniwch ateb nodweddiadol yn ôl i'w ffynonellau. Ble ddechreuodd y gadwyn? Trafodwch ble y dylai person wirio'r gadwyn, neu labelu'r cynnwys.

**5. Beth fyddai defnyddiwr yn ei ddweud am ein sylfaen wybodaeth nawr, o'i chymharu â blwyddyn yn ôl?**
Darllenwch sylwadau diweddar ac edrychwch ar ddata defnydd. Gofynnwch a yw'n haws neu'n anoddach dod o hyd i ateb dibynadwy. Cytunwch ar un glanhau ac un rheol ar gyfer cynnwys newydd.

**6. Pa rai o'n tueddiadau y dylem eu hailddechrau gyda llinell sylfaen newydd?**
Rhestrwch y metrigau sy'n dibynnu ar gyfaint neu ar sut y crëir eitemau. Chwiliwch am newidiadau yn y siâp ers i AI gyrraedd. Anodwch y tueddiadau, a phenderfynwch pa rai sydd angen llinell sylfaen newydd.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn cynhyrchu llawer o'r cyfaint ac yn cario'r cynnal. Dylent ffafrio newidiadau llai, cliriach, cadw deunydd a gynhyrchwyd wedi'i adolygu a'i labelu, a gwylio cadw ac ail-wneud. Dylent wrthod metrigau yn seiliedig ar gyfaint a gynhyrchwyd, a gofyn am fesurau canlyniad.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn byw yn y ciwiau, rhybuddion, a'r sylfaen wybodaeth y mae gwanhau yn eu niweidio. Dylent diwnio tocynnau a rhybuddion a grëwyd gan AI i gadw'r signal yn gryf, adolygu gwybodaeth a gynhyrchwyd cyn ei chyhoeddi, ac adrodd pan fo'r ffrwd yn dod yn sŵn. Maent yn y sefyllfa orau i farnu defnyddioldeb.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn derbyn y dangosfyrddau y mae chwyddiant yn eu hystumio. Dylent ofyn am ganlyniadau yn gyntaf, mynnu gwiriadau defnyddioldeb wrth ymyl cyfaint, ariannu capasiti adolygu, a derbyn bod angen ail-sefydlu llinell sylfaen ar rai mesurau. Dylai llywodraethu wirio bod cynnwys a gynhyrchwyd mewn storfeydd a rennir yn cael ei adolygu a'i labelu.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn dwyn cost gwanhau pan fo atebion yn anghywir, erthyglau'n gwrth-ddweud ei gilydd, ac atebion yn hir a gwag. Maent eisiau cymorth byr, cywir, perthnasol. Eu hymateb i ansawdd yr hyn a dderbyniant yw prawf uniongyrchol o a oroesodd y signal.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae grŵp TG cwmni fferyllol byd-eang yn galluogi cynorthwyydd AI ar gyfer drafftio erthyglau gwybodaeth, crynhoi tocynnau, a pharatoi adroddiadau statws wythnosol. O fewn chwarter, mae'r dangosfwrdd yn edrych yn ardderchog. Mae'r rhifau isod yn enghreifftiol.

Mae erthyglau gwybodaeth a grëwyd yn codi o 140 i 610 y mis. Mae tocynnau'n cario crynodebau manwl a ysgrifennwyd gan AI. Mae adroddiadau wythnosol yn rhedeg i ddeuddeg tudalen. Mae'r rheolwr ansawdd gwasanaeth yn sylwi bod boddhad â hunanwasanaeth wedi disgyn a bod y ddesg gwasanaeth yn adrodd mwy o gysylltiadau "ni helpodd yr erthygl." Mae hi'n samplu 100 o'r erthyglau newydd gyda dau asiant profiadol. Dim ond 54 a farnir yn ddefnyddiol: mae 23 yn dyblygu erthyglau presennol, mae 15 yn cynnwys camau hen neu anghywir, ac mae 8 yn rhy amwys i weithredu arnynt. O'r erthyglau newydd, cyhoeddwyd 71 y cant heb adolygiad dynol. Mae'r sylfaen wybodaeth bellach yn dal tua 3,200 o erthyglau, gyda chyfradd diswyddo cynnwys y mae hi'n ei hamcangyfrif yn 28 y cant yn erbyn 9 y cant flwyddyn yn ôl. Mae asiantau'n adrodd bod dod o hyd i ateb dibynadwy yn cymryd mwy o amser. Mae'r baich gwirio ar gyfer golygyddion erthyglau'r ddesg gwasanaeth wedi tyfu i tua 40 awr yr wythnos, i fyny o 12. Mae crynodebau tocynnau a ysgrifennwyd gan AI yn golygu bod atebion a gynhyrchir gan AI yn ddiweddarach yn dibynnu ar destun na ysgrifennodd neb, ac mewn olrhain pum ateb yn ôl drwy eu ffynonellau, dibynnodd dau ar grynodeb a ddatganodd y broblem yn anghywir. Mae'r adroddiadau statws wythnosol, o'u darllen, yn dweud ychydig nad oedd yn yr un blaenorol, ac mae rhanddeiliaid wedi rhoi'r gorau i ddarllen y tu hwnt i dudalen dau.

Mae hi'n cynnig pedwar newid, y mae'r tîm arweinyddiaeth gwasanaeth a pherchnogion gwybodaeth yn eu mabwysiadu. Mae angen i olygydd a enwyd adolygu erthyglau a gynhyrchwyd cyn eu cyhoeddi, ac maent wedi'u labelu nes iddynt gael eu cymeradwyo. Mae terfyn o un erthygl a gynhyrchwyd fesul clwstwr pwnc yn atal dyblygion, ac mae ysgubiad yn uno neu'n ymddeol eitemau diangen. Torrir templedi adroddiadau i ddwy dudalen sy'n arwain gyda chanlyniadau, a defnyddir yr AI i ddrafftio'r adrannau yn unig y mae person wedyn yn eu golygu. Marcir crynodebau tocynnau fel rhai a gynhyrchwyd, a gwirir sampl bob mis. Mae'r dangosfwrdd yn adrodd cyfran eitemau defnyddiol, cyfradd diswyddo, cyfran wedi'i hadolygu, a baich gwirio wrth ymyl cyfrifon erthyglau.

Ar ôl dau chwarter, mae erthyglau a grëwyd y mis yn disgyn i 190, mae cyfran yr eitemau defnyddiol yn codi i 91 y cant, mae'r gyfradd diswyddo yn disgyn i 11 y cant, mae'r gyfran wedi'i hadolygu yn 100 y cant, ac mae'r baich gwirio yn sefydlogi ar tua 16 awr yr wythnos. Mae boddhad hunanwasanaeth yn gwella ac mae cysylltiadau "ni helpodd yr erthygl" yn disgyn. Mae rhanddeiliaid yn darllen yr adroddiad dwy dudalen. Mae cyfarwyddwr yn gofyn am nod o 1,000 o erthyglau y mis i ddangos gwerth y rhaglen AI. Mae'r rheolwr ansawdd gwasanaeth yn esbonio mai'r cyfrif oedd y broblem, ac yn cynnig olrhain defnyddioldeb a defnydd. Cofnodir y penderfyniad.

## Y golwg fesul sector

**Busnes newydd.** Mae cynhyrchu yn rhad ac mae amser adolygu yn brin. Cadwch ddogfennaeth a thocynnau yn fyr, adolygwch yr hyn y bydd cwsmeriaid yn ei ddarllen, a dilëwch yn rhydd. Mae set fach, gywir o erthyglau yn well na set fawr o rai amheus.

**Busnes bach.** Prin yw'r capasiti i adolygu, felly cyfyngwch ar yr hyn y mae'r offeryn yn ei gynhyrchu. Ffafriwch lond llaw o ganllawiau a thempledi wedi'u gwirio. Gochelwch rhag cyhoeddi deunydd a gynhyrchwyd ar dudalennau cyhoeddus heb ei wirio.

**Menter fawr.** Mae graddfa yn chwyddo sŵn. Sefydlwch lywodraethu cynnwys gyda pherchnogion, labeli, a rheolau adolygu, mesurwch ddefnyddioldeb ar draws y sylfaen wybodaeth, a rhedwch lanhau cyfnodol. Rhannwch rwbrigau ar draws timau a chymharwch dueddiadau, nid timau.

**Llywodraeth a'r sector cyhoeddus.** Rhaid i gynnwys cyhoeddus fod yn gywir ac yn hygyrch, a gall gwallau niweidio. Mynnwch adolygu gwybodaeth gyhoeddus a gynhyrchwyd, cadwch gofnodion o sut y'i cynhyrchwyd, a chymhwyswch safonau iaith blaen a hygyrchedd. Gall rheolau cadw a chofnodion fod yn berthnasol i ddeunydd a gynhyrchwyd (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Mae costau gwarchod rhag chwyddiant yn gymedrol: amser adolygu ar gyfer samplu, ymdrech olygyddol ar gyfer cynnwys a gynhyrchwyd, offer ar gyfer canfod dyblygion, a'r ymdrech i ail-sefydlu tueddiadau. Mae costau peidio â gwneud hynny yn fwy ond yn wasgaredig: defnyddwyr sy'n rhoi'r gorau i ymddiried mewn hunanwasanaeth, adolygwyr sy'n llosgi allan, penderfyniadau a wneir ar rifau chwyddedig, a phrosiectau glanhau.

Adeiladwch yr achos o'ch data eich hun: cyfran eitemau defnyddiol a'r baich gwirio dros amser, cyfaint cysylltiadau a achosir gan gynnwys di-fudd, a chost glanhau sylfaen wybodaeth. Osgowch ddefnyddio ffigurau cyhoeddedig ar ansawdd cynnwys a gynhyrchwyd, sy'n amrywio'n eang yn ôl offeryn, tasg, a dull. Cynhwyswch gost osgoedig niwed i enw da o gyhoeddi gwybodaeth anghywir (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Dathlu cyfaint.** Mae'n gwobrwyo sŵn. Dathlwch ganlyniadau a defnyddioldeb.
- **Cyflymder drafft cyntaf fel y stori gynhyrchiant.** Gall yr arbediad ddiflannu mewn gwirio. Amser i ganlyniad wedi'i wirio.
- **Cyhoeddi cynnwys a gynhyrchwyd heb adolygu.** Mae ymddiriedaeth yn erydu'n dawel. Adolygwch a labelwch.
- **Gadael i gynnwys a gynhyrchwyd fwydo cynhyrchu.** Mae gwallau'n cyfansoddi. Gwiriwch y gadwyn.
- **Llinellau sylfaen heb eu newid.** Mae tueddiadau'n camarwain ar ôl newid technoleg. Anodwch ac ail-sefydlwch.
- **Gorlwytho adolygwyr.** Daw adolygu yn stamp rwber. Cyfyngwch y cyfaint a mesurwch y baich.
- **Defnyddio barnwr AI ar gyfer popeth.** Gall rannu smotiau dall y cynhyrchydd. Cadwch bobl yn y ddolen.
- **Anwybyddu'r adlam.** Mae gwaith rhatach yn denu mwy o waith. Penderfynwch beth yw pwrpas amser a arbedir.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Paru a samplu | Cyfaint wedi'i adrodd ar ei ben ei hun | Argraffiadau anffurfiol o ansawdd | Pob metrig cyfaint wedi'i baru â gwiriad defnyddioldeb wedi'i samplu | Defnyddioldeb, baich, a diswyddo wedi'u rheoli gyda thargedau ar gyfer adolygu nid cyfaint | Golwg ledled y sefydliad o ansawdd signal; rwbrigau wedi'u rhannu gyda phartneriaid |
| Cynnwys a dolenni | Cynnwys a gynhyrchwyd wedi'i gymysgu i mewn | Rhywfaint o labelu | Cynnwys a gynhyrchwyd wedi'i labelu a'i adolygu cyn cyhoeddi; cadwyni wedi'u samplu | Dolenni wedi'u monitro; storfeydd wedi'u curadu; dyblygion wedi'u hymddeol ar amserlen | Tarddiad wedi'i olrhain o'r dechrau i'r diwedd ar draws offer a chyflenwyr |
| Llinellau sylfaen a sylw | Tueddiadau wedi'u darllen ar draws y newid | Anodiadau ar rai siartiau | Llinellau sylfaen wedi'u hailosod lle newidiodd data; adlam wedi'i ystyried | Fflagiau drifft wedi'u hadolygu'n chwarterol; llwyth adolygwyr wedi'i reoli | Dyluniad metrigau yn addasu'n barhaus i newid technoleg gyda rhanddeiliaid |

## Rhestr wirio

- [ ] Mae gan bob metrig cyfaint neu gyflymder gydymaith defnyddioldeb a farnwyd gan berson.
- [ ] Adolygir sampl ar hap o eitemau y mae AI wedi'u cyffwrdd yn fisol yn erbyn rwbrig ysgrifenedig.
- [ ] Amcangyfrifir y baich gwirio a'i olrhain fel tuedd.
- [ ] Labelir ac adolygir gwybodaeth a gynhyrchwyd cyn ei chyhoeddi.
- [ ] Mesurir a lleihir diswyddo yn y sylfaen wybodaeth.
- [ ] Monitrir ffrydiau rhybuddion a thocynnau am gyfran ddefnyddiol a dyblygion.
- [ ] Samplir cadwyni o allbynnau a gynhyrchwyd yn ôl i'w ffynonellau.
- [ ] Anodir neu ail-sefydlir llinell sylfaen tueddiadau ar draws cyflwyno AI.
- [ ] Mae adroddiadau arweinyddiaeth yn arwain gyda chanlyniadau.
- [ ] Gofynnir i ddefnyddwyr a rhanddeiliaid a yw'r signal yn gliriach neu'n swnllyd.

## Anogwyr AI

**Crëwch rwbrig defnyddioldeb.**

```text
Drafftiwch rwbrig byr (dim mwy na chwe maen prawf) ar gyfer barnu a yw [erthygl
wybodaeth, crynodeb tocyn, adroddiad statws] yn ddefnyddiol mewn [math o
sefydliad]. Cynhwyswch gywirdeb, perthnasedd i angen go iawn, dyblygu, cyfredoldeb,
ac eglurder, gyda graddfa tair lefel ac enghreifftiau o bob lefel. Peidiwch â
dyfeisio ystadegau. Rhestrwch eich rhagdybiaethau a sut i gadw adolygwyr yn gyson.
```

**Dadansoddwch ostyngiad mewn signal.**

```text
Ers cyflwyno AI ar gyfer [tasg], newidiodd y ffigurau hyn: [gludwch gyfeintiau,
datrys, boddhad, cyfradd ailagor, oriau adolygwyr]. Disgrifiwch beth mae'r patrwm
yn ei awgrymu am chwyddiant neu wanhau, pa newidiadau all fod oherwydd creu haws,
beth i'w samplu nesaf, a pha fetrigau allai fod angen llinell sylfaen newydd.
Peidiwch â thybio achosion na all y data eu cefnogi. Rhestrwch eich rhagdybiaethau.
```

**Cynlluniwch lanhau'r sylfaen wybodaeth.**

```text
Mae gan ein sylfaen wybodaeth [nifer] o erthyglau, a chynhyrchwyd [nifer]
ohonynt yn y [cyfnod] diwethaf. Cynigiwch gynllun glanhau: sut i ganfod dyblygion
ac eitemau hen, sut i flaenoriaethu yn ôl defnydd, sut i adolygu erthyglau a
gynhyrchwyd, rheolau i atal ailddigwydd, a mesurau i'w holrhain. Peidiwch â thybio
offer penodol. Rhestrwch eich rhagdybiaethau a risgiau.
```

**Olrheiniwch gadwyn o gynnwys a gynhyrchwyd.**

```text
Dyma ateb a gynhyrchwyd gan AI a'r ffynonellau y tynnodd arnynt: [gludwch].
Olrheiniwch bob honiad i'w ffynhonnell a marciwch a oedd y ffynhonnell wedi'i
hysgrifennu gan bobl, yn gynnwys a gynhyrchwyd wedi'i adolygu, neu'n gynnwys a
gynhyrchwyd heb ei adolygu. Nodwch ble gallai gwall fod wedi mynd i mewn ac
awgrymwch wiriad. Peidiwch â thybio ffeithiau y tu hwnt i'r testun. Rhestrwch eich
rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r cydymaith defnyddioldeb ar gyfer metrig cyfaint neu gyflymder.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod metrig yr effeithir arno gan AI yn paru cyfaint â defnyddioldeb wedi'i samplu ac yn cario ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Pan fo AI yn gwneud allbwn yn rhad, mae metrigau cyfaint a chyflymder yn chwyddo a gall y gyfran sy'n ddefnyddiol ddisgyn.
- Pârwch bob mesur cyfaint neu gyflymder â gwiriad defnyddioldeb wedi'i samplu, a farnwyd gan berson.
- Mesurwch amser i ganlyniad wedi'i wirio a'r baich gwirio, oherwydd mae gwirio yn dod yn dagfa.
- Labelwch ac adolygwch gynnwys a gynhyrchwyd cyn iddo fynd i storfeydd a rennir, a chadwch ddolenni rhag bwydo eu hunain heb eu gwirio.
- Ail-sefydlwch dueddiadau ar ôl newid technoleg, ac arweiniwch adroddiadau gyda chanlyniadau.
- Penderfynwch ymlaen llaw beth yw pwrpas amser a arbedir, a gwarchodwch sylw adolygwyr a defnyddwyr.

## Cyfeiriadau a darllen pellach

1. Shumailov, I., Shumaylov, Z., Zhao, Y., Papernot, N., Anderson, R., and Gal, Y., "AI models collapse when trained on recursively generated data," *Nature*, 631, 2024.
2. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
3. Campbell, D. T., "Assessing the impact of planned social change," *Evaluation and Program Planning*, 2(1), 1979.
4. Muller, J. Z., *The Tyranny of Metrics*, Princeton University Press, 2018.
5. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
6. National Institute of Standards and Technology, *Artificial Intelligence Risk Management Framework (AI RMF 1.0)*, NIST AI 100-1, 2023.
7. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Campbell's law](https://en.wikipedia.org/wiki/Campbell%27s_law).
10. Wikipedia, [Vanity metric](https://en.wikipedia.org/wiki/Vanity_metric).
11. Wikipedia, [Information overload](https://en.wikipedia.org/wiki/Information_overload).
12. Wikipedia, [Signal-to-noise ratio](https://en.wikipedia.org/wiki/Signal-to-noise_ratio).
13. Wikipedia, [Alert fatigue](https://en.wikipedia.org/wiki/Alert_fatigue).
14. Wikipedia, [AI slop](https://en.wikipedia.org/wiki/AI_slop).
15. Wikipedia, [Brandolini's law](https://en.wikipedia.org/wiki/Brandolini%27s_law).
16. Wikipedia, [Jevons paradox](https://en.wikipedia.org/wiki/Jevons_paradox).
17. Wikipedia, [Model collapse](https://en.wikipedia.org/wiki/Model_collapse).
18. Wikipedia, [Concept drift](https://en.wikipedia.org/wiki/Concept_drift).
