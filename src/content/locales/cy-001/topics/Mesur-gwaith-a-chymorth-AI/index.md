# Mesur gwaith â chymorth AI

**Barnwch waith â chymorth AI yn ôl yr hyn sy'n goroesi adolygiad, cynhyrchu, a chyswllt nesaf y defnyddiwr, nid yn ôl pa mor gyflym yr ymddangosodd, a daliwch i wylio a yw'r bobl sy'n ei wneud yn dal i ddysgu.**

## Crynodeb a chymhelliant

Unwaith y bo tîm yn defnyddio offer AI bob dydd, mae'r cwestiwn canolog yn newid o "a ddylem ni?" i "beth ydym ni'n ei gael?" Gosododd y pwnc blaenorol y sylfeini: llinellau sylfaen, cymariaethau, a chost lawn (gweler pwnc 10.1, AI mewn mesur rheoli gwasanaethau). Mae'r pwnc hwn yn mynd i mewn i'r gwaith ei hun. Sut ydych chi'n dweud a yw cod, tocynnau, dogfennau, a phenderfyniadau â chymorth AI cystal â'r gwaith y maent yn ei ddisodli, yn well, neu'n waeth, a beth sy'n digwydd i'r bobl sy'n ei wneud?

Mae cymorth AI yn cyffwrdd â llawer o fathau o waith. Mewn cyflawni meddalwedd, mae offer yn awgrymu neu'n cynhyrchu cod, profion, negeseuon comisiynu, a sylwadau adolygu. Mewn gweithrediadau gwasanaeth maent yn crynhoi digwyddiadau, yn cynnig achosion, yn drafftio atebion, ac yn ysgrifennu erthyglau gwybodaeth. Mewn dadansoddi maent yn cynhyrchu adroddiadau ac ymholiadau. Y nodwedd gyffredin yw bod cynhyrchu fersiwn gyntaf gredadwy yn dod yn rhad. Mae'r costau'n symud i fannau eraill: darllen a barnu'r allbwn, trwsio'r hyn sy'n anghywir, cynnal yr hyn a gynhyrchwyd, a dysgu digon i wybod y gwahaniaeth.

Mae sawl effaith yn gwneud mesur yn anodd.

- **Mae cyfrifon allbwn yn camarwain.** Roedd [llinellau cod](https://en.wikipedia.org/wiki/Lines_of_code) bob amser yn fesur gwael o gynhyrchiant, ac mae cod a gynhyrchir yn ei wneud yn waeth. Mae mwy o god yn fwy i'w ddarllen, ei brofi, a'i gynnal. Mae cyfrifon o linellau a gynhyrchwyd, awgrymiadau a dderbyniwyd, neu ddrafftiau yn dweud ychydig am werth.
- **Daw adolygu yn y dagfa.** Mae [adolygu cod](https://en.wikipedia.org/wiki/Code_review) ac adolygu gwaith a gynhyrchir arall yn cymryd amser, a gall llif o newidiadau mwy, amlach orlwytho adolygwyr. Mae [ceisiadau tynnu](https://en.wikipedia.org/wiki/Pull_request) mawr yn anoddach eu hadolygu'n dda, ac mae adolygydd gorlwythog yn fwy tebygol o gymeradwyo'r hyn nad ydynt wedi'i ddeall. Mae'r mesurau adolygu a llif o'r blaen yn parhau'n hanfodol (gweler pwnc 2.7, Metrigau ceisiadau tynnu ac adolygu cod).
- **Daw problemau ansawdd yn hwyr.** Gall cod a gynhyrchir basio profion heddiw a chario [cod dyblyg](https://en.wikipedia.org/wiki/Duplicate_code), strwythur aneglur, neu ddiffygion cudd sy'n dod i'r wyneb fel cost cynnal, ffurf ar [ddyled dechnegol](https://en.wikipedia.org/wiki/Technical_debt). Mae mesurau a gymerir ar adeg creu yn ei golli. Edrychwch ar yr hyn sy'n digwydd i'r gwaith wedyn.
- **Gall sgiliau newid.** Mae dibynnu ar offeryn am dasgau yr oedd rhywun yn arfer eu gwneud ei hun yn ffurf ar [ddadlwytho gwybyddol](https://en.wikipedia.org/wiki/Cognitive_offloading), a all ryddhau sylw ar gyfer problemau anoddach neu arwain at [ddadsgilio](https://en.wikipedia.org/wiki/Deskilling) os yw'r ddealltwriaeth sylfaenol yn pylu. Mae'r ddau yn bosibl, ac mae'r canlyniad yn dibynnu ar sut y defnyddir yr offer. Mae hyn yn bwysig i'r bobl dan sylw ac i allu'r tîm i drin y sefyllfaoedd na all yr offeryn eu trin.

Mae tystiolaeth am effaith cymorth AI ar gynhyrchiant yn dal i ddatblygu, ac mae'n amrywio gyda'r dasg, profiad y defnyddiwr, yr offeryn, a'r lleoliad. Mae rhai astudiaethau rheoledig o dasgau codio wedi canfod cwblhau cyflymach ar dasgau wedi'u diffinio'n dda, ac mae astudiaethau ac adroddiadau eraill wedi canfod enillion llai neu ddim, neu gostau ychwanegol, i bobl brofiadol sy'n gweithio ar systemau cymhleth y maent yn eu hadnabod yn dda. Nid yw'r llyfr hwn yn cynnig rhif. Y safbwynt cyfrifol i dîm yw mesur ei waith ei hun, gyda llinellau sylfaen a chymhariaeth, a thrin unrhyw ffigur cyhoeddedig fel un astudiaeth mewn cyd-destun penodol.

Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn arbennig o bwysig yma, oherwydd bod y pwysau i ddangos enillion yn gryf a'r rhifau hawdd yw'r rhai sy'n camarwain. Mae'r mesurau isod yn dilyn yr hyn sy'n goroesi, nid yr hyn a gynhyrchir (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Egwyddorion allweddol

- **Mesurwch yr hyn sy'n goroesi.** Mae cadw, ail-wneud, a diffygion a ddihangodd yn dweud mwy nag allbwn.
- **Gwyliwch yr adolygu.** Mae llif gwaith â chymorth AI yn cael ei gyfyngu gan pa mor dda y gall pobl ei ddarllen.
- **Cymharwch debyg â thebyg.** Rhaid i waith â chymorth a heb gymorth fod yn debyg o ran math ac anhawster.
- **Edrychwch yn ddiweddarach yn ogystal ag yn awr.** Mae problemau ansawdd a chostau cynnal yn ymddangos wythnosau neu fisoedd ar ôl creu.
- **Cadwch ddealltwriaeth yn y ddolen.** Rhaid i'r person sy'n cludo'r gwaith allu ei esbonio.
- **Gwarchodwch sgiliau a dysgu.** Sylwch ar yr hyn y gall pobl ei wneud o hyd heb yr offeryn.
- **Cyfanredwch; peidiwch â monitro unigolion.** Mae data ar bwy sy'n defnyddio AI a sut ar gyfer gwella'r broses, nid graddio pobl.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfradd cadw | Cyfran y newidiadau â chymorth AI sy'n parhau'n sylweddol ddigyfnewid ar ôl cyfnod a nodwyd | newidiadau â chymorth AI gyda llai na chyfran benodol wedi'i haddasu neu ei gwrthdroi ar ôl 30 diwrnod / newidiadau â chymorth AI a unwyd 30 diwrnod yn ôl | canran | Hanes rheoli fersiwn wedi'i uno â thagiau cymorth, ar lefel tîm | Rheoli rhyddhau a defnyddio; galluogi newid | Gwaith sy'n glynu; ychydig o ail-wneud | Misol |
| Ail-wneud ar ôl uno | Cyfran y newidiadau sy'n gofyn am atgyweiriad dilynol o fewn cyfnod byr, ar gyfer newidiadau â chymorth a newidiadau cymharu | newidiadau gydag atgyweiriad dilynol cysylltiedig o fewn 14 diwrnod / newidiadau a unwyd, fesul grŵp | canran | Rheoli fersiwn, traciwr materion, cofnodion newid | Galluogi newid; rheoli problemau | Diffygion a ddihangodd; ail-wneud | Misol |
| Llwyth adolygu | Ymdrech adolygydd fesul newid, ar gyfer newidiadau â chymorth a newidiadau cymharu | canolrif ac 85fed canradd amser adolygu a rowndiau adolygu fesul newid, fesul grŵp | oriau; rowndiau | Stampiau amser offer adolygu, wedi'u cyfanredu yn ôl tîm | Rheoli rhyddhau a defnyddio | Adolygu fel adborth a dysgu | Misol |
| Cyfradd diffygion a ddihangodd | Diffygion a ganfuwyd mewn cynhyrchu fesul newid, ar gyfer newidiadau â chymorth a newidiadau cymharu | diffygion a ganfuwyd ar ôl rhyddhau a briodolir i newid / newidiadau a ryddhawyd, fesul grŵp | diffygion fesul newid | Traciwr diffygion wedi'i gysylltu â newidiadau | Rheoli digwyddiadau; rheoli problemau | Ansawdd yr hyn a ryddheir | Chwarterol |
| Cyfradd pasio gwiriad esboniad | Cyfran y newidiadau â chymorth AI a samplwyd y gall eu hawdur esbonio'r dull a'i gyfaddawdau mewn adolygiad | newidiadau a samplwyd lle esboniodd yr awdur i foddhad yr adolygydd / newidiadau a samplwyd | canran | Nodiadau adolygu a samplwyd | Rheoli gwybodaeth; galluogi newid | Dealltwriaeth a rennir o'r cod | Chwarterol |
| Ansawdd cymorth â chymorth | Cyfradd ailagor a boddhad defnyddwyr ar gyfer ymatebion cymorth â chymorth AI o'u cymharu â rhai heb gymorth | tocynnau â chymorth a ailagorwyd / tocynnau â chymorth, a graddfeydd ffafriol / graddfeydd, fesul grŵp | canran | Offeryn ITSM, arolwg | Desg gwasanaeth; rheoli digwyddiadau | Ansawdd canlyniadau gwasanaeth | Misol |
| Graddfa hyder heb gymorth | Graddfa'r tîm o hyder i wneud tasgau allweddol heb yr offeryn | graddfa gymedrig a gwasgariad ar raddfa y cytunwyd arni, fesul tîm | pwyntiau graddfa | Pwls tîm dienw | Rheoli gweithlu a thalent; rheoli gwybodaeth | Gallu a dysgu tîm | Chwarterol |

Tagiwch gymorth AI yn ddibynadwy ar lefel tîm, gan logiau offer neu gonfensiwn ysgafn, a nodwch sut y dewisir newidiadau cymharu: tebyg o ran maint, maes, a risg. Mae cadw yn mesur newid sylweddol, gyda throthwy wedi'i osod yn y gofrestr. Mae ail-wneud ar ôl uno yn cysylltu atgyweiriad dilynol â'r newid gwreiddiol drwy reol a nodwyd. Ymdrech yr adolygydd yw llwyth adolygu, nid yr awdur, ac mae'n cynnwys amser adolygu gweithredol yn unig lle mae'n fesuradwy. Ni adroddir byth ddata lefel unigol. Dewisir samplau ar gyfer y gwiriad esboniad ar hap, ac mae'r gwiriad yn sgwrs i gefnogi dysgu, nid prawf o berson.

## Argymhellion

### Dilynwch y gwaith ar ôl iddo gael ei greu

**1. Olrheiniwch yr hyn sy'n digwydd i waith â chymorth dros amser.** Ar gyfer cod, dilynwch newidiadau am wythnosau ar ôl uno: a ydynt yn aros, yn cael eu trwsio, neu eu gwrthdroi? Ar gyfer cymorth, dilynwch docynnau ar ôl yr ateb: a gânt eu hailagor neu eu dilyn gan gysylltiadau dro ar ôl tro? Ar gyfer dogfennau, gwiriwch a ydynt yn cael eu defnyddio, eu cywiro, neu eu hanwybyddu. Mae cadw ac ail-wneud yn signalau syml, anodd eu ffugio o ansawdd.

**2. Cymharwch â gwaith tebyg heb gymorth.** Dewiswch waith cymharu o faint, risg, a maes tebyg, o'r un cyfnod. Mae anhawster yn bwysig: gall pobl ddefnyddio AI ar gyfer tasgau hawdd, a fyddai'n gwenieithu'r offeryn, neu ar gyfer rhai caled, a fyddai'n ei gosbi. Nodwch sut mae tasgau'n dod i gael cymorth, ac addaswch neu rhybuddiwch yn unol â hynny. Mae cymhariaeth fach, onest yn well na rhywbeth mawr, wedi'i ddrysu (gweler pwnc 6.5, Sylweddoli gwerth a chanlyniadau busnes).

**3. Cynhwyswch y mesurau i lawr yr afon yn y set safonol.** Pârwch unrhyw fesur cyflymder â chyfradd methiant newid, diffygion a ddihangodd, a'r mesurau sefydlogrwydd sydd eisoes mewn defnydd (gweler pwnc 2.8, Metrigau DORA). Mae enillion cyflymder gyda sefydlogrwydd sy'n disgyn yn drosglwyddiad cost i weithrediadau a defnyddwyr. Adroddwch y pâr gyda'i gilydd.

### Cadwch adolygu'n ystyrlon

**4. Gwyliwch lwyth adolygu a maint.** Mesurwch amser adolygu, rowndiau adolygu, a maint newid ar gyfer gwaith â chymorth a heb gymorth. Os yw newidiadau â chymorth yn fwy neu'n fwy niferus, gall adolygwyr fod wedi'u gorlwytho. Gosodwch normau ar gyfer maint newid, a chyfyngwch faint o ddeunydd a gynhyrchir a all fynd i mewn i un adolygiad. Mae capasiti adolygu yn rhan o gapasiti'r system (gweler pwnc 2.3, Gwaith ar y gweill a chiwio).

**5. Gofynnwch i awduron esbonio.** Gwnewch yn arferiad y gall awdur newid esbonio beth mae'n ei wneud, pam y dull hwn, a beth yw'r cyfaddawdau. Mae sgwrs fer, gefnogol mewn adolygiad yn ddigon. Samplwch wiriadau esboniad bob chwarter i weld a yw dealltwriaeth yn cadw i fyny ag allbwn. Lle na all awduron esbonio, trinwch ef fel signal i arafu a dysgu, nid fel methiant y person.

**6. Gwarchodwch rhag tuedd awtomeiddio.** Anogwch adolygwyr i ddarllen gwaith â chymorth mor feirniadol ag unrhyw un arall. Cylchdroi adolygwyr, hadwch faterion hysbys yn achlysurol mewn newid prawf i wirio canfod, a chadwch samplu allbynnau gan adolygwyr annibynnol i fynd. Mae cyfradd derbyn uchel iawn gydag ail-wneud sy'n codi yn rhybudd (gweler pwnc 10.1, AI mewn mesur rheoli gwasanaethau).

### Gofalwch am ansawdd a chynnal

**7. Monitrwch strwythur y cod a'r system.** Olrheiniwch ddyblygu, cymhlethdod, cwmpas profion, a chyfradd newid yn yr ardaloedd lle mae cymorth yn drwm. Defnyddiwch y mesurau sydd gennych eisoes ar gyfer [profi meddalwedd](https://en.wikipedia.org/wiki/Software_testing) ac iechyd cod, ac edrychwch ar dueddiadau. Gall dyblygu cynyddol neu effeithiolrwydd profion sy'n disgyn arwyddo bod cod a gynhyrchir yn cael ei dderbyn heb ei integreiddio i'r dyluniad. Mae cwmpas [profi atchweliad](https://en.wikipedia.org/wiki/Regression_testing) yn rhwyd ddiogelwch, ac mae ei gryfder yn bwysicach pan fo cyfaint newid yn codi.

**8. Trinwch brofion a gynhyrchir yn ofalus.** Gall AI ysgrifennu llawer o brofion yn gyflym, a gall profion basio heb wirio dim ystyrlon. Samplwch brofion a gynhyrchwyd am werth, a mesurwch effeithiolrwydd profion drwy ddulliau megis a yw profion yn methu pan dorrir ymddygiad yn fwriadol. Peidiwch â chyfrif profion a ysgrifennwyd fel mesur ansawdd.

**9. Gwyliwch ansawdd cymorth â chymorth.** Ar gyfer y ddesg gwasanaeth a gweithrediadau, mesurwch gyfradd ailagor, cysylltiadau dro ar ôl tro, boddhad, a chywirdeb atebion a samplwyd ar gyfer ymatebion â chymorth o'u cymharu â rhai heb gymorth. Mae ateb cyflymach sy'n anfon y defnyddiwr yn ôl yn arafach yn gyffredinol. Darllenwch sylwadau defnyddwyr am atebion â chymorth, ac edrychwch a yw defnyddwyr yn gwybod eu bod yn delio ag AI lle mae hynny'n bwysig (gweler pwnc 6.1, Metrigau bodlonrwydd cwsmeriaid).

### Diogelwch bobl a sgiliau

**10. Sylwch ar yr hyn y gall pobl ei wneud o hyd.** Gofynnwch i dimau pa mor hyderus ydynt i wneud tasgau allweddol heb yr offeryn ac olrheiniwch y duedd. Defnyddiwch ymarfer achlysurol heb gymorth, paru, ac adolygiadau o'r dyluniad sylfaenol i gadw sgiliau'n fyw. Gwarchodwch yn arbennig ddysgu aelodau newydd y tîm, a all ddefnyddio'r offeryn cyn iddynt adeiladu'r modelau meddyliol y mae cydweithwyr profiadol yn dibynnu arnynt i'w farnu (gweler pwnc 9.4, Metrigau sgiliau a dysgu).

**11. Cadwch ddata ar bobl allan o werthuso.** Cyfanredwch i lefel tîm. Peidiwch ag adrodd pa unigolion sy'n defnyddio AI fwyaf, a pheidiwch â defnyddio defnydd, cyfradd derbyn, na chyfaint a gynhyrchwyd mewn adolygiadau perfformiad. Gwnewch y rheolau yn hysbys. Mae angen ymddiriedaeth ar gyfer adroddiadau gonest o'r hyn sy'n gweithio a'r hyn nad yw.

**12. Ailedrychwch yn rheolaidd.** Mae offer, modelau, ac arferion yn newid mewn misoedd. Ail-redwch y gymhariaeth pan fo'r offeryn neu'r ffordd o weithio yn newid. Rhannwch ganfyddiadau, gan gynnwys na helpodd offeryn yma, ac ymddeolwch ddefnyddiau nad ydynt yn ennill eu lle mwyach.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfradd cadw | Osgoi newidiadau angenrheidiol i gadw'r rhif i fyny; tagio dim ond newidiadau llwyddiannus fel rhai â chymorth | Tagio yn ôl logiau offer, nid dewis awdur; pâr â diffygion a ddihangodd ac ail-wneud |
| Ail-wneud ar ôl uno | Trwsio mewn tocyn gwahanol neu newid newydd nas cysylltir; gohirio atgyweiriadau y tu hwnt i'r ffenestr | Rheol gysylltu yn y gofrestr; edrych ar ffenestr hirach; diffygion cynhyrchu |
| Llwyth adolygu | Adolygiadau brysiog sy'n gostwng amser mesuredig; cymeradwyaethau heb sylwadau | Sampl dyfnder adolygu; diffygion a ddihangodd; arolwg adolygwyr |
| Cyfradd diffygion a ddihangodd | Peidio â phriodoli diffygion i newidiadau; ail-ddosbarthu diffygion fel gwelliannau | Rheol briodoli; sampl annibynnol o ddosbarthiad diffygion |
| Cyfradd pasio gwiriad esboniad | Awduron yn ymarfer ar gyfer y gwiriad; adolygwyr trugarog | Samplau ar hap, di-rybudd; cylchdroi adolygwyr; canolbwyntio ar resymau dylunio |
| Ansawdd cymorth â chymorth | Cynorthwyo tocynnau hawdd yn unig; hyfforddi defnyddwyr i raddio'n uchel | Paru tocynnau yn ôl math ac anhawster; cyfradd ymateb a chymysgedd; darllen sylwadau |
| Graddfa hyder heb gymorth | Graddfeydd chwyddedig i osgoi craffu; graddfeydd isel i ddadlau dros fwy o offer | Anhysbysrwydd; cymharu ag arfer a arsylwyd mewn driliau; darllen sylwadau |

Mae darlleniad iach yn waith â chymorth sy'n aros yn ei le mor aml â gwaith heb gymorth, ail-wneud a diffygion a ddihangodd sy'n cyfateb neu'n curo'r gymhariaeth, adolygu sy'n parhau'n ddwfn, awduron sy'n gallu esbonio'r hyn y maent yn ei gludo, cymorth â chymorth nad yw'n dod yn ôl, a thimau sy'n aros yn hyderus yn eu sgiliau eu hunain.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Mesur cyfaint allbwn | Hawdd | Gwobrwyo cyfaint; yn dweud dim am werth |
| Mesur cadw ac ail-wneud | Adlewyrchu ansawdd dros amser | Wedi'i ohirio; angen cysylltu cofnodion |
| Cymhariaeth reoledig | Credadwy | Angen ymdrech; efallai nad yw'n ymarferol |
| Cymhariaeth arsylwadol | Rhad | Wedi'i ddrysu gan ddewis tasgau |
| Gwiriadau esboniad gorfodol | Cynnal dealltwriaeth | Gall deimlo fel profi; ychwanegu ymdrech |
| Gwiriadau ysgafn wedi'u samplu | Baich isel | Gall golli patrymau |
| Cyfyngiadau trwm ar ddefnyddio AI | Rheoli risg | Budd a gollwyd; defnydd cysgodol |
| Defnydd agored gyda mesur | Dysgu a budd | Angen ymddiriedaeth a disgyblaeth |

Yr ateb pragmatig yw caniatáu defnydd o fewn rheolau clir, mesur yr hyn sy'n goroesi, samplu am ddealltwriaeth, gwarchod capasiti adolygu a sgiliau, a chadw'r data ar bobl allan o werthuso.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Faint o'r hyn y helpodd AI ni i'w gynhyrchu y chwarter diwethaf sydd yn ei le o hyd, heb newid, a sut ydym ni'n gwybod?**
Edrychwch ar gadw ac ail-wneud ar gyfer newidiadau â chymorth yn erbyn set gymaradwy. Dylai'r hwylusydd gofnodi pa mor anodd oedd ateb. Cytunwch sut i dagio a chysylltu'r cofnodion fel bod yr ateb yn hawdd y chwarter nesaf.

**2. A yw adolygu yn cadw i fyny, a beth sy'n digwydd pan nad yw?**
Edrychwch ar amserau adolygu, rowndiau, a meintiau. Gofynnwch i adolygwyr sut maent yn teimlo am newidiadau â chymorth. Trafodwch gyfyngiadau ar faint a ffyrdd o rannu'r llwyth. Cytunwch ar un norm i roi cynnig arno.

**3. A allai pob un ohonom esbonio'r newid diwethaf a gludwyd gennym gyda chymorth AI, a'i gyfaddawdau?**
Rhowch gynnig arni mewn parau. Sylwch lle'r oedd esbonio'n hawdd a lle'r oedd yn anodd. Trafodwch beth mae hynny'n ei ddweud wrthym am ein defnydd o'r offeryn, a sut i gadw dealltwriaeth i fyny.

**4. Beth allwn ni ei wneud yn dda o hyd heb yr offeryn, a beth ydym ni'n colli'r ddawn ar ei gyfer?**
Rhestrwch dasgau allweddol, graddiwch hyder yn onest, a chynlluniwch beth ymarfer neu baru heb gymorth. Mae'r sgwrs hefyd yn dod â'r hyn y mae pobl yn ei werthfawrogi yn eu gwaith ac eisiau ei gadw i'r wyneb.

**5. Ble helpodd AI ni fwyaf a lleiaf, a beth sydd gan y mannau hynny yn gyffredin?**
Cymharwch enghreifftiau. Chwiliwch am nodweddion megis tasgau wedi'u diffinio'n dda, profion da, neu feysydd cyfarwydd. Defnyddiwch y canfyddiadau i arwain ble i ddefnyddio'r offeryn.

**6. Beth fyddem ni'n ei fesur pe na baem yn ymddiried yn ein hargraffiadau cyntaf?**
Gofynnwch i'r grŵp enwi'r dystiolaeth a fyddai'n newid eu meddwl am yr offeryn i'r naill gyfeiriad neu'r llall. Defnyddiwch yr atebion i ddiffinio'r gymhariaeth nesaf.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn dal y profiad o ddydd i ddydd a'r canlyniadau ansawdd. Dylent dagio gwaith â chymorth, gwylio cadw ac ail-wneud, cadw adolygu'n ystyrlon, a chynnal eu dealltwriaeth eu hunain. Dylent godi llais pan fo cyfaint y newid a gynhyrchir yn rhagori ar eu gallu i'w adolygu.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn defnyddio AI ar gyfer crynodebau, diagnosis, ac atebion, ac maent yn etifeddu'r problemau ansawdd sy'n dianc. Dylent samplu allbynnau, cymharu cyfraddau ailagor a chysylltiadau dro ar ôl tro, a chadw cyfrifoldeb dynol clir am weithredoedd mewn cynhyrchu. Dylent helpu i ddiffinio ble na ddylai AI weithredu heb berson.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn wynebu pwysau i ddangos enillion a gallant gael eu temtio gan fetrigau defnydd ac allbwn. Dylent fynnu mesurau cadw, ail-wneud, a sefydlogrwydd wrth ymyl cyflymder, ariannu capasiti adolygu, gwarchod datblygu sgiliau, a gwrthsefyll graddio pobl. Dylai llywodraethu ddisgwyl cymariaethau a rhybuddion mewn adroddiadau budd AI.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn derbyn y canlyniadau: cod sy'n rhedeg eu gwasanaethau, atebion i'w ceisiadau, dogfennau y maent yn dibynnu arnynt. Maent yn elwa pan fo ansawdd yn dal ac yn dioddef pan nad yw. Dylent allu cyrraedd person, ac mae eu hadborth ar ryngweithiadau â chymorth yn dystiolaeth allweddol o ansawdd.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae gan grŵp digidol cwmni hedfan Ewropeaidd chwe thîm cynnyrch sy'n adeiladu ac yn rhedeg meddalwedd archebu a gweithrediadau. Dechreuodd timau ddefnyddio cynorthwyydd codio AI flwyddyn yn ôl, ac mae dangosfwrdd y grŵp yn adrodd bod 38 y cant o'r llinellau a unwyd wedi'u cynhyrchu gan AI. Mae'r rhifau isod yn enghreifftiol.

Mae pennaeth rhagoriaeth peirianneg yn anesmwyth am y dangosfwrdd hwnnw. Mae hi'n gofyn i dri thîm dagio newidiadau â chymorth drwy logiau'r offeryn, ar lefel tîm yn unig, a dewis newidiadau cymharu o faint a maes tebyg. Dros chwarter, mae'r amser canolrifol o'r comisiwn cyntaf i uno yn fyrrach ar gyfer newidiadau â chymorth, 1.4 diwrnod yn erbyn 2.0. Cyfradd cadw newidiadau â chymorth ar ôl 30 diwrnod yw 81 y cant yn erbyn 90 y cant ar gyfer newidiadau cymharu, ac roedd angen atgyweiriad dilynol o fewn 14 diwrnod ar 12 y cant o newidiadau â chymorth yn erbyn 7 y cant. Mae llwyth adolygu yn dweud yr un stori: mae'r amser adolygu canolrifol fesul newid 35 y cant yn uwch ar gyfer newidiadau â chymorth, ac mae'r 85fed canradd maint newid wedi tyfu. Mae diffygion a ddihangodd fesul 100 o newidiadau ychydig yn uwch ar gyfer newidiadau â chymorth, er bod y sampl yn fach a'r gwahaniaeth o fewn amrywiad arferol. Mae sampl o 40 o newidiadau â chymorth yn dangos y gallai'r awdur esbonio'r dull a'i gyfaddawdau'n dda mewn 31, yn rhannol mewn 6, a ddim o gwbl mewn 3, yn bennaf mewn ardaloedd cod newydd i'r awdur. Yn y ddesg gwasanaeth, roedd gan atebion â chymorth gyfradd ailagor o 7 y cant yn erbyn 6 ar gyfer rhai heb gymorth, gyda boddhad tebyg. Mewn pwls tîm, mae peirianwyr newydd yn graddio eu hyder i weithredu nodweddion craidd heb yr offeryn yn 2.6 allan o 5, yn erbyn 4.1 ar gyfer peirianwyr gyda mwy na thair blynedd yn y grŵp.

Mae pennaeth rhagoriaeth peirianneg yn mynd â'r canlyniadau at y timau ac nid yw'n eu graddio. Mae'r timau'n cytuno ar bedwar newid. Mae cyfyngiadau maint newid a rota adolygu yn gwarchod adolygwyr. Mae awduron yn esbonio newidiadau â chymorth yn fyr mewn adolygiad. Mae peirianwyr newydd yn paru â rhai profiadol ar gyfer nodweddion craidd, ac mae ymarfer misol heb gymorth yn cadw sgiliau mewn ymarfer. Mae'r dangosfwrdd yn gollwng cyfran y llinellau a gynhyrchwyd ac yn dangos cadw, ail-wneud, llwyth adolygu, a diffygion a ddihangodd, â chymorth yn erbyn cymhariaeth. Dri mis yn ddiweddarach, mae'r bwlch cadw yn culhau i 4 pwynt, mae atgyweiriadau dilynol yn disgyn i 8 y cant, ac mae'r gwiriad esboniad yn gwella. Mae is-lywydd yn gofyn i gyfran y llinellau a gynhyrchwyd fod yn darged i bob tîm. Mae pennaeth rhagoriaeth peirianneg yn esbonio'r canfyddiadau ac yn cynnig parhau i olrhain canlyniadau, gan ychwanegu bod yr enillion yn real mewn rhai tasgau ac nid mewn eraill, ac y bydd y tîm yn penderfynu ble i ddefnyddio'r offeryn. Cofnodir y penderfyniad.

## Y golwg fesul sector

**Busnes newydd.** Gall timau bach elwa llawer o gymorth a hefyd gronni dyled gudd yn gyflym. Olrheiniwch gadw ac ail-wneud o'r dechrau, cadwch brofion yn ystyrlon, a sicrhewch fod y bobl a fydd yn cynnal y system yn ei deall. Gochelwch rhag cludo cod na all neb ei esbonio.

**Busnes bach.** Gall cymorth ymestyn tîm bach iawn. Mesurwch ar sampl fach: pa mor aml y mae angen trwsio gwaith â chymorth yn ddiweddarach. Cadwch gopïau wrth gefn, profion, ac adolygiad dynol o unrhyw beth sy'n wynebu cwsmeriaid, a gwarchodwch ddealltwriaeth y perchennog o'r systemau y maent yn dibynnu arnynt.

**Menter fawr.** Mae graddfa yn chwyddo'r enillion a'r problemau. Darparwch arweiniad a rennir ar dagio, cyfyngiadau adolygu, a mesurau, cymharwch ar draws timau'n ofalus heb raddio, a buddsoddwch mewn capasiti adolygu a phrofi. Cynhwyswch adolygiad diogelwch a thrwydded o god a gynhyrchir yn y biblinell (gweler pwnc 7.2, Metrigau asedau meddalwedd a thrwyddedau).

**Llywodraeth a'r sector cyhoeddus.** Mae gan systemau cyhoeddus oesoedd hir, atebolrwydd llym, a chanlyniadau uchel i wall. Mynnwch gyfrifoldeb dynol y gellir ei olrhain, profi gofalus, a dogfennaeth o sut y defnyddiwyd AI. Cofnodwch waith â chymorth mewn cofnodion newid, ac aseswch risgiau i degwch a diogelwch (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y costau yw offer a thaliadau defnydd, yr ymdrech i dagio a chysylltu cofnodion, yr amser adolygu a thrwsio, profi ychwanegol, a hyfforddiant. Mae astudiaeth gymharu yn cymryd amser, ond mae'n rhad o'i chymharu â phenderfyniad anghywir i raddio neu wahardd.

Mae'r enillion yn real lle mae cymorth yn lleihau ymdrech heb leihau ansawdd, ac yn cael eu colli lle mae'n symud ymdrech i adolygu, ail-wneud, a chynnal. Adeiladwch yr achos o'ch mesurau eich hun: amser i newid a unwyd ac a gadwyd, ail-wneud a diffygion a ddihangodd yn erbyn cymhariaeth, llwyth adolygu, a boddhad defnyddwyr a staff. Osgowch ddefnyddio ffigurau cynhyrchiant cyhoeddedig fel eich amcangyfrif. Cofiwch gostau cudd: dealltwriaeth lai, colli sgiliau, a dyled dechnegol. Byddwch yn onest am ansicrwydd (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Cyfrif llinellau a gynhyrchwyd neu awgrymiadau a dderbyniwyd.** Maent yn gwobrwyo cyfaint. Mesurwch yr hyn sy'n goroesi.
- **Cymharu gwaith â chymorth ar dasgau hawdd â gwaith heb gymorth ar rai caled.** Mae'r canlyniad yn gwenieithu neu'n cosbi'r offeryn. Paru tasgau.
- **Gadael i gapasiti adolygu ddisgyn ar ôl.** Mae ansawdd yn gostwng yn dawel. Cyfyngwch faint newid a gwarchodwch adolygwyr.
- **Hepgor y mesurau i lawr yr afon.** Mae'r gost yn ymddangos yn ddiweddarach. Olrheiniwch ail-wneud, diffygion, a sefydlogrwydd.
- **Trin profion a gynhyrchwyd fel ansawdd.** Gallant basio heb wirio dim. Profwch y profion.
- **Anwybyddu sgiliau.** Mae dealltwriaeth yn pylu'n ddisylw. Olrheiniwch hyder heb gymorth ac ymarfer.
- **Monitro unigolion.** Mae'n magu ofn ac yn cuddio problemau. Cadwch ddata ar lefel tîm.
- **Datgan buddugoliaeth ar astudiaeth fer, fach.** Ail-redwch wrth i offer ac arferion newid.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Mesur yr hyn sy'n goroesi | Cyfrifon allbwn | Argraffiadau anffurfiol o ansawdd | Gwaith â chymorth wedi'i dagio; cadw ac ail-wneud wedi'u holrhain yn erbyn cymhariaeth | Diffygion i lawr yr afon, sefydlogrwydd, a llwyth adolygu wedi'u rheoli gyda'i gilydd | Tystiolaeth traws-dîm yn arwain ble defnyddir cymorth; canlyniadau wedi'u rhannu'n eang |
| Adolygu a dealltwriaeth | Adolygu fel o'r blaen | Pryder am orlwyth | Normau maint newid; gwiriadau esboniad wedi'u samplu | Capasiti adolygu wedi'i gynllunio; tuedd awtomeiddio wedi'i wrthweithio | Adolygu a dealltwriaeth wedi'u hadeiladu i sut mae pob tîm yn gweithio gydag AI |
| Pobl a sgiliau | Heb ei ystyried | Hanesion | Hyder heb gymorth wedi'i bylsio; rhywfaint o ymarfer | Datblygu sgiliau wedi'i gynllunio; tueddiadau wedi'u rheoli | Dysgu a chrefft wedi'u gwarchod ar draws y sefydliad; defnydd AI wedi'i gyd-ddylunio gyda staff |

## Rhestr wirio

- [ ] Tagir gwaith â chymorth AI ar lefel tîm drwy logiau offer neu gonfensiwn ysgafn.
- [ ] Diffinnir gwaith cymharu o faint, maes, a risg tebyg.
- [ ] Olrheinir cadw ac ail-wneud ar ôl uno ar gyfer gwaith â chymorth a gwaith cymharu.
- [ ] Adroddir diffygion a ddihangodd a chyfradd methiant newid wrth ymyl unrhyw fesur cyflymder.
- [ ] Monitrir amser adolygu, rowndiau, a maint newid, gyda normau ar gyfer maint.
- [ ] Gall awduron esbonio newidiadau â chymorth, a gwirir sampl bob chwarter.
- [ ] Samplir profion a gynhyrchwyd am werth.
- [ ] Cymherir cymorth â chymorth ar gyfer cyfradd ailagor, cysylltiadau dro ar ôl tro, a boddhad.
- [ ] Pylsir hyder heb gymorth, a chynllunnir ymarfer heb gymorth.
- [ ] Ni ddefnyddir data defnydd a derbyn unigol mewn gwerthuso.

## Anogwyr AI

**Cynlluniwch gymhariaeth o newidiadau â chymorth a heb gymorth.**

```text
Rydym eisiau cymharu newidiadau â chymorth AI a newidiadau heb gymorth ar gyfer
[tîm a system]. Mae ein data yn cynnwys: [rhestr meysydd]. Cynigiwch sut i dagio
newidiadau â chymorth heb ddibynnu ar gof awduron, sut i ddewis newidiadau
cymharu o faint a risg tebyg, pa fesurau i'w cymharu (cadw, ail-wneud, llwyth
adolygu, diffygion), y cyfnod, a sut i roi rhybuddion ar y canfyddiadau.
Peidiwch â nodi canlyniadau disgwyliedig. Rhestrwch eich rhagdybiaethau a
bygythiadau i ddilysrwydd.
```

**Dyluniwch wiriad esboniad.**

```text
Dyluniwch wiriad esboniad byr, cefnogol ar gyfer newidiadau â chymorth AI a
samplwyd yn [iaith a maes]. Cynhwyswch sut i samplu, y cwestiynau y mae
adolygydd yn eu gofyn, beth mae esboniad da yn ei gwmpasu, sut i gofnodi
canlyniadau ar lefel tîm, a sut i ddefnyddio'r canfyddiadau ar gyfer dysgu heb
raddio pobl. Rhestrwch eich rhagdybiaethau a risgiau'r gwiriad.
```

**Adolygwch y mesurau i lawr yr afon.**

```text
Dyma ein mesurau ar gyfer [cyfnod]: cyflymder [gwerthoedd], cadw [gwerthoedd],
ail-wneud [gwerthoedd], llwyth adolygu [gwerthoedd], diffygion a ddihangodd
[gwerthoedd], ar gyfer gwaith â chymorth a gwaith cymharu. Disgrifiwch beth mae'r
patrwm yn ei awgrymu a beth nad yw, pa wahaniaethau sydd o fewn amrywiad
arferol, a beth i'w wirio nesaf. Peidiwch â honni achosiaeth. Rhestrwch eich
rhagdybiaethau a'r data y dylwn ei ychwanegu.
```

**Cynlluniwch ymarfer heb gymorth.**

```text
Cynigiwch raglen ysgafn i gadw sgiliau craidd yn fyw ar gyfer tîm sy'n defnyddio
offer AI bob dydd: ymarferion misol heb gymorth, paru rhwng aelodau newydd a
phrofiadol, a thrafodaethau dylunio. Awgrymwch sut i'w ffitio i'r wythnos waith
heb ychwanegu pwysau a sut i olrhain ei effaith gyda'r pwls hyder heb gymorth.
Rhestrwch eich rhagdybiaethau a chyfaddawdau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer mesur gwaith â chymorth AI.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod metrig gwaith â chymorth AI yn mesur yr hyn sy'n goroesi ac yn cario ei ffordd o chwarae'r system a'i reilen warchod.

## Pwyntiau allweddol

- Mesurwch yr hyn sy'n goroesi: cadw, ail-wneud, diffygion a ddihangodd, a sefydlogrwydd, yn erbyn gwaith cymaradwy heb gymorth.
- Gwarchodwch gapasiti adolygu a chadwch adolygu'n ddwfn, oherwydd mae'n cyfyngu pa mor gyflym y gall gwaith â chymorth lifo'n ddiogel.
- Gwiriwch y gall awduron esbonio'r hyn y maent yn ei gludo, a sylwch a yw sgiliau'n tyfu neu'n pylu.
- Samplwch brofion ac allbynnau a gynhyrchwyd am werth go iawn.
- Darllenwch hawliadau cynhyrchiant cyhoeddedig fel astudiaethau unigol, a mesurwch eich gwaith eich hun.
- Cadwch ddata defnydd unigol allan o werthuso.

## Cyfeiriadau a darllen pellach

1. Peng, S., Kalliamvakou, E., Cihon, P., and Demirer, M., "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot," arXiv preprint, 2023.
2. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
3. DORA, Google Cloud, *Accelerate State of DevOps Report* (latest edition addressing AI), https://dora.dev/.
4. Parasuraman, R., and Manzey, D. H., "Complacency and bias in human use of automation: An attentional integration," *Human Factors*, 52(3), 2010.
5. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 19(1), 2021.
6. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
7. Wikipedia, [Lines of code](https://en.wikipedia.org/wiki/Lines_of_code).
8. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
9. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
10. Wikipedia, [Duplicate code](https://en.wikipedia.org/wiki/Duplicate_code).
11. Wikipedia, [Technical debt](https://en.wikipedia.org/wiki/Technical_debt).
12. Wikipedia, [Cognitive offloading](https://en.wikipedia.org/wiki/Cognitive_offloading).
13. Wikipedia, [Deskilling](https://en.wikipedia.org/wiki/Deskilling).
14. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
15. Wikipedia, [Software testing](https://en.wikipedia.org/wiki/Software_testing).
16. Wikipedia, [Regression testing](https://en.wikipedia.org/wiki/Regression_testing).
