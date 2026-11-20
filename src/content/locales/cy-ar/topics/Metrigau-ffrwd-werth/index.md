# Metrigau ffrwd werth

**Mesurwch ffrwd werth o'r dechrau i'r diwedd, hollwch bob cam yn yr amser y cyffyrddir â'r gwaith a'r amser y mae'n aros, a chyfrifwch faint sy'n cyrraedd yn ddefnyddiadwy, oherwydd bod yr oediadau mwyaf a'r ailwaith mwyaf mewn sefydliad gwasanaeth yn eistedd rhwng timau, nid y tu mewn iddynt.**

## Crynodeb a chymhelliant

Mae'r rhan fwyaf o dimau'n mesur eu cam eu hunain. Mae'r ddesg gwasanaeth yn adrodd tocynnau a gaewyd, mae tîm datblygu'n adrodd straeon a orffennwyd, mae bwrdd newid yn adrodd newidiadau a gymeradwywyd. Gall pob rhif edrych yn iach tra bo'r person a ofynnodd am rywbeth yn aros wythnosau. Mae'r rheswm yn strwythurol: mewn cais nodweddiadol, mae'r rhan fwyaf o'r amser a aeth heibio yn cael ei dreulio mewn ciwiau a throsglwyddiadau, ac nid oes unrhyw dîm unigol yn berchen ar yr amser hwnnw.

[Ffrwd werth](https://en.wikipedia.org/wiki/Value_stream) yw'r dilyniant o gamau y mae cais yn dod yn werth a gyflwynir drwyddynt. [Mapio ffrwd werth](https://en.wikipedia.org/wiki/Value-stream_mapping) yw'r dechneg, a ddatblygwyd o fewn [gweithgynhyrchu main](https://en.wikipedia.org/wiki/Lean_manufacturing) ac a gymhwyswyd yn ddiweddarach at swyddfeydd, ysbytai a meddalwedd, o dynnu pob cam o ddechrau proses i'r cwsmer a chofnodi amser a chyfaint ym mhob cam. Llun o'r cyflwr presennol yw'r map, wedi'i ddilyn gan lun o gyflwr gwell yn y dyfodol. Y rhifau ar y map yw testun y pwnc hwn.

Mae dwy eirfa yn cwrdd yma. Yn ITIL 4, pedwerydd argraffiad Llyfrgell Seilwaith Technoleg Gwybodaeth, ffrwd werth yw cyfuniad penodol o weithgareddau cadwyn gwerth gwasanaeth [ITIL](https://en.wikipedia.org/wiki/ITIL) (cynllunio, gwella, ymgysylltu, dylunio a throsglwyddo, caffael ac adeiladu, cyflawni a chefnogi) wedi'u trefnu i greu cynnyrch neu wasanaeth penodol. Enghreifftiau yw "adfer gwasanaeth ar ôl digwyddiad" a "chyflwyno newid o syniad i gynhyrchu." Mae ITIL yn dweud wrthych beth yw ffrwd a phwy sydd angen bod yn gysylltiedig. Mae main yn dweud wrthych sut i'w mesur. Y cyfatebydd ystwyth yw llif eitemau gwaith ar draws bwrdd, y mae timau sy'n rheoli llif eisoes yn ei olrhain gyda mesurau megis amser cylch (gweler pwnc 2.1, Mesurau llif).

Ychydig yw'r mesurau main. **Amser arweiniol** yw cyfanswm yr amser a aeth heibio o'r funud y gwneir cais i'r funud y'i cyflwynir. **Amser proses**, a elwir weithiau yn amser cyffwrdd, yw'r amser pan fo rhywun yn gweithio ar yr eitem mewn gwirionedd. **Amser aros** yw'r amser y mae'r eitem yn eistedd rhwng gwaith gweithredol, mewn ciw, mewn cymeradwyaeth neu mewn trosglwyddiad. **Canran cyflawn a chywir (%C/A)** yw cyfran yr eitemau y gall y cam nesaf eu defnyddio fel y'u derbyniwyd, heb orfod eu cywiro, eu cwblhau neu eu hanfon yn ôl. **Amser takt** yw'r cyflymder y mae'n rhaid i'r ffrwd gwblhau eitemau i gyd-fynd â galw cwsmeriaid, wedi'i gyfrifo fel amser gwaith sydd ar gael wedi'i rannu â nifer yr eitemau a ofynnwyd amdanynt yn yr amser hwnnw. Cymhareb amser proses i amser arweiniol yw **effeithlonrwydd proses**, y mae'r llyfr hwn yn ei drin fel ffurf ffrwd werth effeithlonrwydd llif (gweler pwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif).

Mae dwy berthynas yn gwneud y rhifau'n ddefnyddiol gyda'i gilydd. Yn gyntaf, [amser arweiniol](https://en.wikipedia.org/wiki/Lead_time) yw swm amser proses ac amser aros ar draws pob cam, felly mae ffrwd ag amser arweiniol o wythnosau ac amser proses o ddyddiau yn bennaf yn giw. Mae [cyfraith Little](https://en.wikipedia.org/wiki/Little%27s_law) yn cysylltu'r ciw hwnnw â'r gwaith ar y gweill a'r trwybwn, a dyna pam mai pwnc 2.3 (Gwaith ar y gweill a chiwio) yw'r cydymaith naturiol. Yn ail, mae %C/A yn cyfansoddi. Mae ffrwd o bum cam lle mae pob cam yn pasio 90 y cant o'i allbwn yn lân yn cyflwyno canlyniad glân dim ond tua 59 y cant o'r amser, cynnyrch a elwir mewn gweithgynhyrchu yn [gynnyrch trwybwn treigl](https://en.wikipedia.org/wiki/Rolled_throughput_yield). Mae adroddiadau un cam i gyd yn dweud 90 y cant. Mae'r ffrwd yn dweud rhywbeth llawer llai cysurus.

## Egwyddorion allweddol

- **Dechreuwch o gais y cwsmer a diweddwch wrth ddefnydd y cwsmer.** Mae ffrwd a fesurir o "gwaith wedi dechrau" i "gwaith wedi'i uno" yn cuddio'r aros ar y ddau ben, sy'n aml yw'r rhan hiraf.
- **Gwahanwch amser cyffwrdd oddi wrth amser aros ym mhob cam.** Mae hyd cam unigol yn cymysgu'r ddau ac yn anfon ymdrech gwella i'r lle anghywir. Fel arfer priodwedd dylunio'r ffrwd yw aros, nid methiant ymdrech.
- **Mesurwch ansawdd fel cyflawnrwydd a chywirdeb, yn ogystal â chyflymder.** Mae cam cyflym sy'n anfon gwaith yn ôl yn araf yn nhermau'r ffrwd, oherwydd bod yr ailwaith yn bwyta capasiti ac yn ychwanegu aros.
- **Mapiwch un ffrwd ac un dosbarth eitem ar y tro.** Mae map sy'n cymysgu newidiadau brys â cheisiadau arferol yn cynhyrchu cyfartaledd nad yw'n disgrifio'r naill na'r llall.
- **Adroddwch ddosbarthiadau a dangoswch y sampl.** Mae amser arweiniol ac amser aros yn wyrgam, felly dangoswch y canolrif a chanradd uchel, a dywedwch faint o eitemau a pha gyfnod (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).
- **Disgrifiwch ffrydiau, byth pobl.** Mae metrigau cam yn nodi ble mae gwaith yn aros. Nid ydynt byth yn safle o'r unigolion na'r timau ym mhob cam.

## Diffiniadau metrigau

Diffinnir y metrigau isod ar gyfer un ffrwd werth a enwir ac un dosbarth gwaith. Mae cyfrifon eitemau yn eithrio eitemau a ganslwyd oni nodir yn wahanol. Adroddir amser proses ac amser aros ar gyfer pob cam a'u crynhoi ar gyfer y ffrwd.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Amser arweiniol ffrwd werth | Yr amser a aeth heibio o gais y cwsmer i'r cwsmer allu defnyddio'r canlyniad | amser cadarnhau cyflwyno llai amser y logiwyd y cais; eithrir eitemau a ganslwyd neu a dynnwyd yn ôl; adroddwch y canolrif a'r 85fed a'r 95fed canradd | diwrnodau | Cofnodion offeryn ITSM wedi'u huno â digwyddiadau cyflwyno o'r biblinell neu'r system gyflawni | Rheoli ceisiadau gwasanaeth; galluogi newid | Amser arweiniol ar fwrdd y tîm | Misol |
| Amser proses | Yr amser y gweithir yn weithredol ar eitem, fesul cam ac ar gyfer y ffrwd | swm yr egwyl pan fo'r eitem mewn cyflwr gweithredol, fesul cam; eithrir cyflyrau ciw, aros cymeradwyo a rhwystro | oriau neu ddiwrnodau | Hanes statws tracker; cofnodion amser lle mae cyflyrau'n rhy fras | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth | Amser cylch mewn colofnau "ar y gweill" | Misol |
| Amser aros | Yr amser y mae eitem yn eistedd rhwng gwaith gweithredol, fesul cam ac ar gyfer y ffrwd | amser cam a aeth heibio llai amser proses y cam hwnnw; yn cynnwys ciwiau, cymeradwyaethau, trosglwyddiadau ac amser wedi'i rwystro | diwrnodau | Hanes statws tracker a newidiadau cyflwr offeryn ITSM | Galluogi newid; desg gwasanaeth | Amser mewn colofnau ciw; amser wedi'i rwystro | Misol |
| Effeithlonrwydd proses | Cyfran yr amser arweiniol sy'n amser proses | swm amser proses ar draws camau / amser arweiniol ffrwd werth ar gyfer yr un eitemau; eithrir eitemau sy'n dal ar agor | canran | Deillio o amser proses ac amser arweiniol | Gwelliant parhaus | Effeithlonrwydd llif | Chwarterol |
| Canran cyflawn a chywir (cam) | Cyfran yr eitemau y mae cam yn eu derbyn y gall eu defnyddio heb gywiro, cwblhau neu ddychwelyd | eitemau a dderbyniwyd fel y'u cyrhaeddwyd / eitemau a dderbyniwyd yn y cyfnod; mae eitemau a ddychwelwyd am unrhyw reswm yn cyfrif fel rhai heb eu derbyn | canran | Digwyddiadau dychwelyd ac ailagor yn y tracker neu'r offeryn ITSM; adolygiadau derbyn wedi'u samplo | Rheoli ceisiadau gwasanaeth; galluogi newid; rheoli problemau | Diffiniad o barod; cyfradd ailwaith | Misol |
| Canran cyflawn a chywir treigl | Cyfran yr eitemau sy'n pasio pob cam yn lân | cynnyrch gwerthoedd %C/A y camau ar gyfer un ffrwd a chyfnod (er enghraifft 0.90 x 0.85 x 0.95); eithrir camau y tu allan i'r ffrwd | canran | Deillio o werthoedd y camau | Gwelliant parhaus | Cyfradd diffygion a ddihangodd ac ailwaith ar draws piblinell | Chwarterol |
| Cyfrif trosglwyddo | Nifer y troeon y mae eitem yn pasio rhwng timau neu giwiau | cyfrif newidiadau tîm neu giw sy'n berchen o gais i gyflwyno, fesul eitem; adroddwch y canolrif a'r 85fed canradd | cyfrif | Hanes neilltuo yn yr offeryn ITSM neu'r tracker | Desg gwasanaeth; rheoli ceisiadau gwasanaeth | Dibyniaethau rhwng timau | Chwarterol |
| Cymhareb amser takt | A yw cyflymder y ffrwd yn cyfateb i alw | canolrif yr egwyl a arsylwyd rhwng cwblhau / amser takt, lle mae amser takt yn amser gwaith sydd ar gael wedi'i rannu ag eitemau a ofynnwyd amdanynt yn yr un cyfnod; mae cymhareb uwchlaw 1 yn golygu bod y ffrwd yn arafach na'r galw | cymhareb | Cyfrif galw o'r ciw derbyn a digwyddiadau cwblhau | Rheoli capasiti a pherfformiad; rheoli lefelau gwasanaeth | Trwybwn yn erbyn galw; rhagolwg | Chwarterol |

Swmau a chymarebau dros yr un set o eitemau yw amser proses, amser aros ac amseroedd arweiniol y camau, felly cânt eu cyfrifo o gofnodion lefel eitem ac nid drwy adio cyfartaleddau camau a fesurwyd ar samplau gwahanol. Mae amser takt yn gweddu orau i waith ailadroddadwy megis ceisiadau safonol a newidiadau arferol, ac mae'n ffit gwael ar gyfer gwaith lle mae pob eitem yn unigryw.

## Argymhellion

### Dewiswch y ffrwd

**1. Dewiswch un ffrwd werthfawr ac un dosbarth eitem, ac enwch ei ffiniau.** Ymgeiswyr cyntaf da yw math cais cyfaint uchel, megis darparu mynediad neu offer, neu lwybr newid arferol o gymeradwyaeth i fyw. Ysgrifennwch y sbardun sy'n dechrau'r cloc a'r digwyddiad sy'n cadarnhau cyflwyno i'r cwsmer. Os na allwch ddatgan y ddau mewn brawddeg yr un, nid yw'r ffrwd wedi'i diffinio eto (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth).

**2. Dechreuwch y cloc wrth gais y cwsmer a'i stopio wrth ddefnydd y cwsmer.** Mae ffrwd sy'n dechrau pan fo tîm yn derbyn y gwaith ac yn stopio pan fo'r tîm yn ei farcio fel wedi'i wneud yn eithrio'r ciw derbyn a'r oedi cadarnhau. Yn aml dyma'r aros hiraf. Os nad yw'r data ar gyfer y gwir ffiniau wedi'i gipio eto, adroddwch y mesur cul gyda label gonest a chynlluniwch yr offeryniaeth (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

### Mapiwch y cyflwr presennol

**3. Cerddwch y ffrwd gyda'r bobl sy'n gwneud y gwaith.** Cynhaliwch sesiwn fapio gyda chynrychiolydd o bob cam, gan gynnwys ochr y cwsmer. Tynnwch y camau fel y maent yn digwydd mewn gwirionedd, yna cymharwch â'r broses ddogfenedig. Mae'r bylchau rhwng y ddau yn ganfyddiadau ynddynt eu hunain. Disgrifir y dull yn *Learning to See* gan Rother a Shook ac yn *Value Stream Mapping* gan Martin ac Osterling.

**4. Cofnodwch amser proses ac amser aros ar gyfer pob cam o eitemau go iawn.** Cymerwch sampl o eitemau diweddar, 20 neu fwy os yw'r cyfaint yn caniatáu, a dilynwch bob un drwy'r ffrwd gan ddefnyddio hanes y tracker a, lle bo angen, sgwrs. Cofnodwch yr amser cyffwrdd a'r aros cyn pob cam. Trinwch y sampl fel amcangyfrif a dywedwch sut y'i tynnwyd. Ailadroddwch y mapio pan fydd y ffrwd yn newid digon i'w annilysu.

**5. Dangoswch aros fel bar ei hun.** Ar y map a'r dangosfwrdd, tynnwch amser proses ac amser aros fel segmentau ar wahân ar gyfer pob cam. Nid yw cam â 30 munud o amser proses a phedwar diwrnod o aros yn edrych dim byd tebyg i un â phedwar diwrnod o amser proses, er bod hyd y cam yn union yr un fath.

### Mesurwch ansawdd ar hyd y ffrwd

**6. Mesurwch %C/A wrth y trosglwyddiad, wedi'i ddiffinio gan y cam sy'n derbyn.** Mae'r tîm sy'n derbyn yn penderfynu beth mae "defnyddiadwy fel y'i derbyniwyd" yn ei olygu, yn ddelfrydol mewn amod derbyn ysgrifenedig byr. Cyfrifwch ddychwelyd, cais am wybodaeth goll, neu gywiriad tawel fel heb ei dderbyn. Cywiro tawel yw'r gollyngiad mwyaf cyffredin, oherwydd caiff y gwaith ei drwsio heb i neb gofnodi ei fod wedi torri.

**7. Cyfrifwch %C/A treigl a'i gymharu â gwerthoedd y camau.** Lluoswch werthoedd y camau. Mae bwlch rhwng y ffigur treigl a'r cam sy'n edrych orau yn effaith cyfansoddi ailwaith, ac yn aml mae'n gwneud yr achos dros drwsio trosglwyddiad yn well nag unrhyw fesur cyflymder. Cysylltwch ef â'r mesurau ailwaith a methiant newid ar gyfer yr un ffrwd (gweler pwnc 4.4, Methiant newid ac ailwaith).

### Defnyddiwch y rhifau i benderfynu

**8. Gwellwch yr aros mwyaf yn gyntaf, a chwiliwch am ei achos yn y rhyngwyneb.** Graddiwch gamau yn ôl amser aros, yna gofynnwch am beth mae'r eitem sy'n aros yn aros: penderfyniad, person, swp, slot wedi'i drefnu, neu fewnbwn coll. Yna gofynnwch a oes angen yr aros hwnnw. Mae'r [ddamcaniaeth cyfyngiadau](https://en.wikipedia.org/wiki/Theory_of_constraints) yn dal bod cyflymder y ffrwd yn cael ei osod gan ei cham tynnaf, felly ychydig a newid sy'n dod o wella cam nad yw'n gyfyngiad. Mae aros cymeradwyo mewn galluogi newid yn achos aml (gweler pwnc 4.3, Metrigau galluogi newid).

**9. Lleihewch drosglwyddiadau cyn optimeiddio camau.** Mae pob trosglwyddiad yn ychwanegu ciw, newid cyd-destun, a chyfle am wybodaeth anghyflawn. Cyfrifwch y trosglwyddiadau, yna profwch a ellir cyfuno cam, dirprwyo penderfyniad i'r tîm sy'n gwneud y gwaith, neu rag-awdurdodi cais safonol. Mae ITIL 4 yn disgrifio newidiadau safonol fel newidiadau risg isel wedi'u rhag-awdurdodi, sef yr union symudiad hwn wedi'i gymhwyso i'r ffrwd newid.

**10. Cymharwch alw a chyflymder ag amser takt, ar gyfer gwaith ailadroddadwy yn unig.** Cyfrifwch yr amser takt o ddata galw go iawn ar gyfer y cyfnod, yna cymharwch ef â'r egwyl y mae'r ffrwd yn cwblhau eitemau ynddo mewn gwirionedd. Mae ffrwd arafach na takt yn tyfu ciw, ac mae cyfraith Little yn dweud wrthych yn fras pa mor gyflym. Mae gan ffrwd lawer cyflymach na takt slac y gellid ei ailgyfeirio. Peidiwch â defnyddio amser takt i osod targedau ar gyfer unigolion.

### Cadwch y mesur yn onest

**11. Unwch ddata ar draws offer, a dywedwch beth sydd wedi'i amcangyfrif.** Fel arfer mae'r ffrwd yn croesi'r offeryn ITSM, yr olrheinydd materion a'r biblinell. Unwch ar ddynodydd eitem, dogfennwch y rheol uno, a nodwch pa gamau sy'n dod o ddigwyddiadau system a pha rai o samplo. Mae amcangyfrif sydd wedi'i labelu fel amcangyfrif yn llawer mwy defnyddiol na rhif sy'n edrych yn fanwl gywir o darddiad anhysbys.

**12. Adolygwch y map bob chwarter, a darllenwch eitemau crai bob tro.** Mae ffrydiau'n drifftio wrth i dimau ad-drefnu ac offer newid. Rhowch y map ac un penderfyniad ar agenda adolygiad sefydlog gyda phob cam wedi'i gynrychioli (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Amser arweiniol ffrwd werth | Dechrau'r cloc yn hwyrach, er enghraifft wrth brysbennu yn lle'r cais; cau eitemau cyn y gall y cwsmer eu defnyddio; hollti un cais yn sawl un bach | Rheolau cloc sefydlog wedi'u hysgrifennu yn y gofrestr metrigau; cadarnhad cwsmer o gyflwyno; cyfrif eitemau a ailagorwyd ac eitemau plentyn cysylltiedig |
| Amser proses | Cofnodi cyflyrau segur neu wedi'u rhwystro fel gweithredol fel bod amser proses yn codi ac y ffrwd yn edrych yn effeithlon; neu gofnodi aros fel gwaith i edrych yn brysur | Arsylwi sampl o eitemau; cymharu amser proses â chofnodion amser lle maent yn bodoli; adolygu'r diffiniadau cyflwr gyda'r tîm |
| Amser aros | Symud aros i gyflwr heb ei olrhain, megis sgwrs ochr, taenlen, neu statws "yn yr arfaeth" sy'n stopio'r cloc | Adrodd y defnydd o statysau oedi a rhwystro; cymharu oedran tocyn â stampiau amser camau; samplo eitemau am aros oddi ar y system |
| Effeithlonrwydd proses | Crebachu'r amser arweiniol gyda thrin cyflymedig ar gyfer yr eitemau a fesurir, neu chwyddo amser proses i godi'r gymhareb | Dangos amser arweiniol ac amser proses wrth ymyl y gymhareb; adrodd y gyfran gyflymedig; peidio byth â gosod targed ar gyfer y gymhareb ei hun |
| Canran cyflawn a chywir (cam) | Mae'r cam sy'n derbyn yn gostwng ei far derbyn fel bod llai o eitemau'n cael eu dychwelyd, neu mae'r cam sy'n anfon yn gwthio gwaith drwodd gyda ffyrdd osgoi anffurfiol | Amod derbyn ysgrifenedig; cyfrifon diffygion ac ailwaith i lawr y ffrwd; sampl o eitemau a dderbyniwyd wedi'i hadolygu gan drydydd parti |
| Canran cyflawn a chywir treigl | Uno camau fel bod dychweliadau'n digwydd y tu mewn i gam ac yn diflannu o'r cyfrif trosglwyddo; dewis rhestr gamau ffafriol | Gosod y rhestr gamau ymlaen llaw; adrodd newidiadau camau yn y log penderfyniadau; cymharu â'r gyfradd ailwaith ar gyfer y ffrwd gyfan |
| Cyfrif trosglwyddo | Ailneilltuo eitemau i giw a rennir neu berchennog dal-y-cyfan i osgoi newidiadau perchennog a gyfrifir; cuddio trosglwyddiadau mewn un "tîm" sy'n rhychwantu sawl un | Cyfrif yn ôl ciw ac yn ôl rôl; darllen hanes neilltuo eitemau wedi'u samplo; olrhain nifer yr ailneilltuo fesul eitem |
| Cymhareb amser takt | Cyfrif galw a ohiriwyd neu a wrthodwyd fel nad yw'n alw; cyfrif cwblhau rhannol fel cwblhau | Adrodd galw, galw a wrthodwyd, ac oedran ôl-groniad wrth ymyl y gymhareb; cyfrif cwblhau dim ond pan fo'r cwsmer yn cadarnhau |

Mae darlleniad iach yn dangos amser arweiniol ac amser proses sy'n gredadwy yn erbyn y sampl, amser aros sy'n amlwg yn y rhan fwyaf ac yn crebachu'n raddol, gwerthoedd %C/A ag amod derbyn ysgrifenedig y tu ôl iddynt, a throsglwyddiadau sy'n disgyn dim ond pan dynnwyd penderfyniad neu gam go iawn. Os yw amser arweiniol yn gwella tra bo %C/A treigl yn gostwng, mae'r ffrwd yn anfon gwaith drwodd yn gyflymach drwy symud y gost i lawr y ffrwd, sef y patrwm y mae'r rheiliau gwarchod yn bodoli i'w ddal (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Mapio ar sail gweithdy gyda sampl | Cyflym, yn dangos y ffrwd gyfan, yn adeiladu dealltwriaeth a rennir ar draws timau | Ciplun sy'n heneiddio'n gyflym; tuedd sampl; yn dibynnu ar gyfranogwyr gonest |
| Mesur awtomataidd o ddigwyddiadau offer | Parhaus, gwrthrychol, yn cefnogi canraddau a thueddiadau | Gweld yn unig yr hyn y mae offer yn ei gofnodi; mae aros oddi ar y system a chywiriadau tawel yn anweledig |
| Ffiniau cwsmer o'r dechrau i'r diwedd | Adlewyrchu'r profiad; datgelu oedi derbyn a chadarnhau | Angen data o sawl system a dynodydd eitem a rennir |
| Cymhariaeth amser takt a galw | Clymu cyflymder wrth alw go iawn; gwneud twf ciw yn rhagweladwy | Gwan ar gyfer gwaith unigryw, anailadroddadwy; angen cyfrifon galw dibynadwy |
| %C/A treigl | Dangos sut mae ailwaith yn cyfansoddi ar draws trosglwyddiadau | Angen cytundeb ar amodau derbyn; hawdd dadlau am ddiffiniadau |

Defnyddiwch y gweithdy mapio i ddysgu siâp y ffrwd a mesur awtomataidd i'w gwylio. Defnyddiwch fesurau ffin tîm fel mewnbynnau a mesurau ffin cwsmer fel y dyfarniad. Cost y dull yw'r sgwrs drawstîm y mae'n ei gorfodi, sef hefyd ei brif fudd.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Ble mae cloc y cwsmer yn dechrau ac yn stopio yn ein cais mwyaf cyffredin, ac a yw ein hadroddiad yn cytuno?**
Dewiswch un math o gais a'i olrhain ar fwrdd gwyn o'r funud y mae'r cwsmer yn gofyn i'r funud y gall ddefnyddio'r canlyniad. Marciwch ble mae ein hadroddiad presennol yn dechrau ac yn stopio cyfrif. Dylai'r hwylusydd chwilio am y bwlch ar bob pen, gan fod ciwiau derbyn ac oediadau cadarnhau yn cael eu gadael allan yn rheolaidd. Cytunwch a ddylid newid yr adroddiad neu ei labelu fel golwg rannol.

**2. Ar gyfer pob cam yn ein ffrwd, faint o'r amser a aeth heibio y mae rhywun yn gweithio ar yr eitem?**
Cymerwch bum eitem ddiweddar ac ailadeiladwch hanes pob un. Amcangyfrifwch yr amser cyffwrdd a'r aros ar gyfer pob cam, a chymharwch y cyfansymiau. Mae'r rhan fwyaf o grwpiau'n synnu pa mor ychydig o'r amser a aeth heibio sy'n waith. Gofynnwch am beth mae pob aros hir yn aros, a gwrthsefyllwch yr ateb cyntaf, sef "mae pobl yn brysur" fel arfer. Cofnodwch pa aros sy'n edrych fel dewisiadau dylunio yn hytrach na therfynau capasiti.

**3. Beth sydd ei angen ar y cam nesaf gennym, a sut fyddem yn gwybod ei fod ar goll?**
Gofynnwch i gynrychiolydd y cam sy'n derbyn ddatgan yr amod derbyn mewn geiriau plaen. Cymharwch ef â'r hyn y mae'r cam sy'n anfon yn credu ei fod yn ei ddarparu. Cyfrifwch y troeon yn y mis diwethaf y dychwelwyd gwaith, y cwblhawyd gan rywun arall, neu y trwsiwyd yn dawel. Mae'r drafodaeth yn aml yn cynhyrchu rhestr wirio fach sy'n cael gwared â dychweliad sy'n codi dro ar ôl tro.

**4. Pa drosglwyddiadau sy'n bodoli oherwydd hanes yn hytrach nag angen?**
Rhestrwch y trosglwyddiadau ar y map a gofynnwch pam mae pob un yn bodoli. Mae rhai'n real: sgil, rheolaeth, gwahanu dyletswyddau. Mae eraill yn parhau am fod ffin tîm wedi'i thynnu flynyddoedd yn ôl. Dewiswch un trosglwyddiad i'w dynnu, ei ddirprwyo neu ei rag-awdurdodi, ac enwch pwy sy'n gorfod cytuno.

**5. Pe baem yn gwella'r cam y mae pawb yn cwyno amdano, a fyddai'r cwsmer yn sylwi?**
Cymharwch y cam sy'n denu'r sylw mwyaf â'r cam sy'n dal yr aros hiraf. Mae damcaniaeth cyfyngiadau yn awgrymu bod gwella rhywbeth nad yw'n gyfyngiad yn newid ychydig i'r cwsmer. Gofynnwch beth fyddai'n rhaid bod yn wir i'r cam uchaf ei gloch fod hefyd yr arafaf. Dylai'r hwylusydd helpu'r grŵp i gytuno ar sut i brofi'r ateb gyda data.

**6. Sut fyddai rhywun yn gwneud i'r ffrwd hon edrych yn well heb ei gwneud yn well?**
Cerddwch drwy'r tabl o ffyrdd o chwarae'r system gyda'r grŵp. Ar gyfer pob metrig, gofynnwch beth y gallai person dan bwysau ei wneud a beth fyddai'r tîm yn ei weld pe bai'n gwneud hynny. Cytunwch pa ddarlleniad rheilen warchod a adolygir bob tro a phwy sy'n berchen arno. Y nod yw arferiad a rennir o wirio, nid chwilio am euogion.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Fel arfer mae timau cyflawni'n gweld eu camau eu hunain yn glir a'r ffrwd yn wael. Mae golwg ffrwd werth yn dangos iddynt pa mor hir y mae newid gorffenedig yn aros am adolygiad, cymeradwyaeth, slot rhyddhau neu ffenestr defnyddio, a faint o hynny sydd y tu allan i'w rheolaeth. Maent yn elwa o %C/A ar eu trosglwyddiadau, oherwydd ei fod yn troi cwynion amwys am "ofynion gwael" neu "adolygiadau hwyr" yn ddigwyddiadau wedi'u cyfrif. Dylent fod yn wyliadwrus rhag gwella eu hamser cylch eu hunain ar draul y cam sy'n derbyn (gweler pwnc 2.8, Metrigau DORA).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau'n berchen ar lawer o'r ciwiau: derbyn y ddesg gwasanaeth, cymeradwyo newid, yr amserlen ryddhau, y trosglwyddo ar alwad. Maent yn elwa o newidiadau safonol wedi'u rhag-awdurdodi, amodau derbyn clir ar gyfer gwaith sy'n dod i mewn, a golwg o ba drosglwyddiadau sy'n ychwanegu'r aros mwyaf. Dylent hefyd ddisgwyl bod y cam sy'n derbyn mewn mesur %C/A, a diffinio sut olwg sydd ar drosglwyddiad cyflawn. Mae eu heitemau'n aml yn cario clociau llym eu hunain, felly mae'r mesur ffrwd yn eistedd wrth ymyl, ac nid yn disodli, y mesurau lefel gwasanaeth.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn noddi newid trawstîm ac yn penderfynu a oes gan ffrwd berchennog a enwir. Dylent ofyn am amser arweiniol y ffrwd o safbwynt y cwsmer a'r aros mwyaf, yn hytrach na cherdyn sgorio cam wrth gam. Mae cyrff llywodraethu sy'n cymeradwyo gwaith yn gamau eu hunain, ac mae eu hamser aros yn perthyn ar y map. Mae gosod targedau ar gymhareb amser proses i amser arweiniol yn gwahodd y ffyrdd o chwarae'r system a ddisgrifir uchod, felly defnyddiwch hi i gyfeirio ymholiad (gweler pwnc 6.5, Sylweddoli gwerth a chanlyniadau busnes).

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn profi'r amser arweiniol a'r ailwaith, ac anaml y gwelant y camau. Eu cyfraniad mwyaf defnyddiol yw cadarnhau pryd roedd y canlyniad yn ddefnyddiadwy a dweud beth oedd rhaid iddynt ei wneud i'w gael, megis ailgyflwyno ffurflen. Dylai adroddiadau i gwsmeriaid nodi dechrau a stop y cloc mewn geiriau plaen. Mae cwsmeriaid hefyd yn elwa pan fo'r ffrwd yn cyhoeddi canolrif gonest a chanradd uchel, oherwydd bod addewid a seilir ar y canolrif yn unig yn siomi un cais mewn sawl un.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG cwmni yswiriant o faint canolig yn cyflwyno newidiadau normal i'w blatfform gweinyddu polisïau. Mae cwsmeriaid yn y busnes yn cwyno bod "newidiadau bach yn cymryd dros fis." Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mae'r adran yn mapio'r ffrwd o'r funud y mae perchennog busnes yn cyflwyno cais am newid i'r funud y mae'r perchennog yn cadarnhau bod y newid yn fyw. Mae sampl o 20 newid normal diweddar yn rhoi'r tabl camau isod, gan ddefnyddio gwerthoedd canolrif enghreifftiol fesul cam.

| Cam | Amser proses (diwrnodau) | Amser aros (diwrnodau) | %C/A (enghreifftiol) |
| --- | --- | --- | --- |
| Derbyn a phrysbennu | 0.5 | 6 | 85 |
| Adeiladu | 1.5 | 5 | 90 |
| Profi | 0.5 | 8 | 80 |
| Cymeradwyo newid | 0.25 | 9 | 70 |
| Defnyddio a chadarnhau | 0.25 | 4 | 95 |
| Cyfanswm y ffrwd | 3.0 | 32 | 41 (treigl) |

Amser arweiniol y ffrwd yn y sampl yw tua 35 diwrnod, felly mae effeithlonrwydd proses tua 9 y cant. Mae'r %C/A treigl tua 41 y cant, sef cynnyrch gwerthoedd y pum cam, felly mae llai na hanner y newidiadau yn pasio pob cam heb ddychwelyd. Mae'r cam cymeradwyo newid yn edrych yn gymedrol yn ôl %C/A yn unig, ond ei 9 diwrnod o aros yw'r ciw unigol hiraf, ac mae 30 y cant o newidiadau yn cyrraedd yno gyda gwybodaeth risg ar goll, y mae'r bwrdd yn ei hanfon yn ôl.

Mae'r tîm yn gwneud dau benderfyniad. Yn gyntaf, mae'n dosbarthu'r deg math o newid risg isel mwyaf aml fel newidiadau safonol gyda gweithdrefnau wedi'u rhag-awdurdodi, fel eu bod yn hepgor y bwrdd. Yn ail, mae'r ffurflen dderbyn yn ennill y meysydd risg y mae'r bwrdd bob amser yn gofyn amdanynt, a chytunir ar restr wirio dderbyn fer gyda'r bwrdd. Mae'r dewisiadau hyn yn mynd i'r afael â'r aros mwyaf a'r dychweliad cyfansoddi mwyaf, yn hytrach na'r cam adeiladu, lle gofynnwyd i'r tîm "fynd yn gyflymach."

Dri mis yn ddiweddarach mae canolrif yr amser arweiniol ar gyfer y dosbarth sampl yn disgyn ac mae'r aros cymeradwyo yn crebachu, tra bo'r %C/A treigl yn codi. Mae risg chwarae'r system yn ymddangos yn y trydydd mis. Mae tîm cynnyrch yn hollti sawl cais yn ddau neu dri llai, oherwydd bod eitemau bach yn gymwys fel newidiadau safonol, ac mae amser arweiniol yr eitem yn gostwng yn sydyn. Mae'r adolygydd yn sylwi bod cyfrif yr eitemau plentyn cysylltiedig wedi codi ac nad yw cadarnhad cwsmer fesul cais gwreiddiol wedi gwella. Mae'r adran yn cadw amser arweiniol, ond yn ailddiffinio'r eitem fel cais gwreiddiol y cwsmer, fel nad yw hollti yn helpu mwyach. Mae'r log penderfyniadau yn cofnodi'r newid diffiniad ac yn ailddatgan y chwarter blaenorol gyda'r un rheol.

## Y golwg fesul sector

**Busnes newydd.** Nid oes llawer i'w fapio mewn ffrwd fer ag ychydig o drosglwyddiadau, a'r mesur mwyaf defnyddiol yn syml yw'r amser a aeth heibio o gais y cwsmer i ddefnydd y cwsmer. Tynnwch y ffrwd ar wal, darllenwch yr eitemau crai, a gwyliwch am y trosglwyddiad cyntaf sy'n ymddangos wrth i'r tîm dyfu. Gwrthsefyllwch adeiladu offer cyn i'r ffrwd sefydlogi.

**Busnes bach.** Mae un neu ddau o bobl yn aml yn cwmpasu sawl cam, felly mae trosglwyddiadau rhwng rolau neu offer yn hytrach na thimau. Mae adroddiadau'r tracker neu'r ddesg gwasanaeth yn rhoi amser arweiniol yn rhad, ac mae sampl o ddeg eitem yn datgelu'r aros. Gofynnwch i gyflenwyr, megis darparwr gwasanaeth a reolir, am eu hamseroedd cam, gan fod ciw'r cyflenwr yn aml yw'r aros hiraf.

**Menter fawr.** Ffrydiau hir â llawer o dimau a phyrth cymeradwyo yw lle mae %C/A treigl a chyfrif trosglwyddo yn talu fwyaf. Neilltuwch berchennog i bob prif ffrwd, mapiwch hi ar y cyd â phob cam wedi'i gynrychioli, a defnyddiwch ddynodydd eitem a rennir fel y gellir uno offer. Bydd gwahanol adrannau'n defnyddio'r un geiriau ar gyfer clociau gwahanol, felly cyhoeddwch un diffiniad fesul mesur a chadwch log newidiadau.

**Llywodraeth a'r sector cyhoeddus.** Mae cymeradwyaethau statudol, camau caffael a rheolaethau archwilio yn gamau cyfreithlon na ellir eu tynnu, ac maent yn aml yn dal yr aros hiraf. Mapiwch hwy'n onest, gwahanwch yr aros gorfodol oddi wrth yr aros osgoadwy, a dangoswch y rhan orfodol i'r rhai sy'n gosod y rheolau. Cadwch lwybr archwilio o'r data ac o unrhyw newid diffiniad (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw bod aros fel arfer yn rhan fwyaf amser arweiniol ac yn rhataf i'w leihau, oherwydd bod yr atgyweiriad yn aml yn benderfyniad, rheol neu drosglwyddiad yn hytrach na chapasiti ychwanegol. Mae cwsmeriaid yn teimlo'r amser arweiniol yn uniongyrchol, ac mae'r sefydliad yn talu am yr ailwaith mewn capasiti nad yw byth yn ymddangos ar adroddiad cam. Mae lleihau trosglwyddiadau a dychweliadau hefyd yn lleihau'r dulliau methu sy'n dod yn ddigwyddiadau yn ddiweddarach.

Mae'r costau'n gymedrol ac yn bennaf yn ddynol: ychydig oriau o amser sawl person ar gyfer y gweithdy mapio a'r sampl, dynodydd eitem a rennir ar draws offer (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth), ac ychydig o amser dadansoddwr bob mis. Cost fwy yw'r sgwrs drawstîm a'r parodrwydd i newid rheol y mae rhywun yn berchen arni.

Mae'r elw yn ymddangos fel amseroedd arweiniol byrrach a mwy rhagweladwy, %C/A treigl cynyddol, llai o eitemau a ddychwelir, a chapasiti a ryddhawyd o ailwaith. Peidiwch â rhagweld gwelliant canrannol o astudiaethau achos cyhoeddedig. Amcangyfrifwch yr elw o'ch ffrwd eich hun: cyfaint yr eitemau, yr aros presennol, cost oedi i'r cwsmer cystal ag y gallwch ei ddatgan, a'r oriau ailwaith y gallwch eu cyfrif. Mae'r Fframwaith Llif a'r llenyddiaeth main yn disgrifio'r patrwm, ac nid yw'r naill na'r llall yn cyflenwi meincnod sy'n trosglwyddo i'ch ffrwd chi (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes).

## Gwrthbatrymau a maglau

- **Mapio cam yn lle ffrwd.** Mae map hyfryd o fanwl o waith un tîm yn gadael yr aros hiraf oddi ar y dudalen. Mapiwch o gais y cwsmer i ddefnydd y cwsmer, ac ychwanegwch fanylion dim ond lle mae'r aros.
- **Cyfartaleddu amseroedd cam o samplau gwahanol.** Nid swm cyfartaleddau camau yw cyfartaledd y ffrwd. Cyfrifwch fesurau ffrwd o gofnodion lefel eitem ac adroddwch ganolrifau a chanraddau.
- **Trin amser aros fel problem ymdrech.** Anaml y mae dweud wrth bobl am weithio'n gyflymach yn byrhau ciw. Gofynnwch am beth mae'r eitem yn aros ac a yw'r aros yn angenrheidiol.
- **Optimeiddio effeithlonrwydd proses fel targed.** Unwaith y daw'r gymhareb yn nod, caiff amser proses ei badio neu caiff amser arweiniol ei docio gan driciau. Defnyddiwch hi fel anogwr ar gyfer ymholiad a'i pharu ag amser arweiniol cadarnhaol y cwsmer.
- **Mesur %C/A heb amod derbyn ysgrifenedig.** Hebddo, mae pob dychweliad yn ddadl. Gofynnwch i'r cam sy'n derbyn ysgrifennu'r amod a'i gadw'n fyr.
- **Gadael i ailwaith tawel fynd heb ei gofnodi.** Os yw cam yn trwsio gwaith sy'n dod i mewn heb ei logio, mae %C/A yn cael ei or-ddatgan ac nid yw'r cam sy'n anfon byth yn dysgu. Cofnodwch bob cywiriad fel dychweliad.
- **Defnyddio metrigau ffrwd i raddio timau neu bobl.** Maent yn disgrifio'r system, ac anaml mai bai un tîm yw'r aros mwyaf. Adroddwch yn ôl cam a ffrwd, ac adolygwch y canlyniadau gyda phob cam yn bresennol.
- **Mapio unwaith a byth eto.** Mae ffrydiau'n drifftio. Adolygwch y map ar amserlen ac ar ôl unrhyw ad-drefnu neu newid offer.

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniad ffrwd a chlociau | Ffrwd heb ei diffinio; mae pob tîm yn mesur ei gam ei hun | Un ffrwd wedi'i mapio gan un tîm; mae clociau'n wahanol i dimau eraill | Dechrau a stop ysgrifenedig ar gyfer pob prif ffrwd, o gais y cwsmer i ddefnydd y cwsmer | Rheolau cloc wedi'u hadolygu, newidiadau wedi'u logio, hanes wedi'i ailddatgan pan fydd diffiniadau'n newid | Diffiniadau wedi'u diwygio ar draws timau a chyflenwyr wrth i'r ffrwd a'r galw newid |
| Amser proses ac amser aros | Dim ond amser a aeth heibio sy'n hysbys | Wedi'i samplo ar gyfer un ffrwd â llaw | Wedi'i gasglu o ddigwyddiadau offer gyda model cyflwr dogfenedig ac amcangyfrifon wedi'u labelu | Wedi'i dueddu gyda chanraddau, gostyngiadau aros wedi'u hariannu a'u holrhain | Aros ar draws cyflenwyr a thimau wedi'i reoli ar y cyd, gyda chiwiau a rennir yn weladwy |
| Ansawdd ar hyd y ffrwd | Ailwaith wedi'i sylwi ond heb ei gyfrif | Dychweliadau wedi'u cyfrif gan rai camau | Amodau derbyn ysgrifenedig a %C/A cam wedi'u dangos i'r timau sy'n berchen arnynt | %C/A treigl wedi'i dueddu a'i baru â mesurau ailwaith a methiant | Amodau derbyn wedi'u cyd-berchnogi gan anfonwr a derbynnydd ac wedi'u cysylltu â chanlyniadau cwsmer |
| Defnydd mewn gwelliant | Mapio wedi'i wneud unwaith, yna ei roi o'r neilltu | Mae gweithdy achlysurol yn arwain at atgyweiriad lleol | Adolygiad chwarterol gyda phob cam yn bresennol | Aros neu ddychweliad mwyaf wedi'i drin bob chwarter gyda pherchennog | Mae syniadau gwella'n dod o bob cam, gyda phenderfyniadau wedi'u logio a chanlyniadau wedi'u gwirio |

## Rhestr wirio

- [ ] Enwir un ffrwd werth ac un dosbarth eitem, gyda pherchennog ffrwd.
- [ ] Mae dechrau a stop y cloc wedi'u hysgrifennu o ran cais y cwsmer a defnydd y cwsmer.
- [ ] Adeiladwyd y map cyflwr presennol gyda chynrychiolydd o bob cam, gan gynnwys ochr y cwsmer.
- [ ] Cofnodir amser proses ac amser aros ar wahân ar gyfer pob cam o sampl o eitemau go iawn.
- [ ] Adroddir amseroedd cam a ffrwd fel canolrifau a chanradd uchel, gyda maint y sampl wedi'i ddangos.
- [ ] Mae gan bob cam sy'n derbyn amod derbyn ysgrifenedig, a chofnodir dychweliadau.
- [ ] Cyfrifir canran cyflawn a chywir treigl o werthoedd y camau.
- [ ] Cyfrifir trosglwyddiadau ac mae gan yr aros mwyaf berchennog a enwir ac arbrawf wedi'i gynllunio.
- [ ] Adolygir ffordd chwarae'r system a rheilen warchod pob metrig gyda'r tîm.
- [ ] Adolygir y map a'r sampl ar amserlen, a logir newidiadau diffiniad.

## Anogwyr AI

**Drafftiwch ganllaw cyfweld ar gyfer map ffrwd werth.**

```text
Rwy'n mapio'r ffrwd werth ar gyfer [enw'r ffrwd], o [digwyddiad cychwyn] i
[digwyddiad diwedd], ar gyfer y dosbarth eitem [dosbarth eitem]. Y timau sy'n
gysylltiedig yw [rhestr o dimau]. Drafftiwch ganllaw cyfweld ar gyfer gweithdy
mapio: cwestiynau ar gyfer pob cam am amser proses, amser aros, trosglwyddiadau,
dychweliadau ac amodau derbyn, ynghyd â chwestiynau ar gyfer ochr y cwsmer.
Peidiwch â dyfeisio amseriadau na gwerthoedd meincnod. Rhestrwch eich
rhagdybiaethau a'r data y dylwn ei gasglu i wirio'r atebion.
```

**Cyfrifwch fesurau ffrwd o sampl.**

```text
Dyma sampl o [nifer] o eitemau gydag amseroedd mynd i mewn a gadael cam, cyflyrau
gweithredol ac aros, a dychweliadau: [gludwch ddata neu disgrifiwch y colofnau].
Cyfrifwch amser arweiniol, amser proses, amser aros, effeithlonrwydd proses, canran
cyflawn a chywir cam, a chanran cyflawn a chywir treigl, a dangoswch y fformiwlâu
a ddefnyddiwyd. Adroddwch ganolrifau a'r [canradd] canradd. Nodwch eitemau gyda
stampiau amser coll a dywedwch sut y gwnaethoch eu trin. Peidiwch â llenwi bylchau
gyda gwerthoedd a ddyfeisiwyd. Rhestrwch eich rhagdybiaethau.
```

**Dewch o hyd i risgiau chwarae'r system mewn dangosfwrdd ffrwd.**

```text
Mae ein dangosfwrdd ffrwd yn dangos [rhestr metrigau] ar gyfer [enw'r ffrwd], ac
mae timau'n cael eu hadolygu yn erbyn [targedau neu ddim]. Ar gyfer pob metrig,
rhestrwch ffyrdd credadwy y gallai'r rhif wella heb i'r ffrwd wella, y signalau
a fyddai'n datgelu pob un, a metrig neu arfer rheilen warchod a fyddai'n ei ddal.
Canolbwyntiwch ar [cam neu drosglwyddiad o bryder]. Peidiwch ag awgrymu graddio
unigolion a pheidiwch â dyfeisio trothwyon. Rhestrwch eich rhagdybiaethau.
```

**Ysgrifennwch amod derbyn ar gyfer trosglwyddiad.**

```text
Y cam sy'n anfon yw [tîm anfon] a'r cam sy'n derbyn yw [tîm derbyn]. Yr eitemau
yw [math o eitem], a'r rhesymau mwyaf cyffredin dros eu dychwelyd yw [rhesymau].
Drafftiwch amod derbyn byr o ddim mwy na [nifer] o wiriadau y gall y derbynnydd
eu cymhwyso, a ffordd o gofnodi dychweliadau fel y gellir cyfrifo canran cyflawn
a chywir. Cadwch y geiriad yn niwtral a pheidiwch â phriodoli bai. Rhestrwch
eich rhagdybiaethau a'r cwestiynau y dylwn eu gofyn i'r ddau dîm.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n diffinio metrig ar fap eich ffrwd a'r rheilen warchod a ddylai eistedd wrth ei ymyl.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod pwnc metrig wedi'i olygu yn nodi ei glociau, ei ffyrdd o chwarae'r system a'i groesgyfeiriadau.

## Pwyntiau allweddol

- Mesurwch y ffrwd o gais y cwsmer i ddefnydd y cwsmer, oherwydd bod mesurau ffin tîm yn cuddio'r aros hiraf.
- Hollwch bob cam yn amser proses ac amser aros, a chwiliwch am achos yr aros mwyaf yn y rhyngwyneb rhwng timau.
- Mae canran cyflawn a chywir yn cyfansoddi ar draws camau, felly mae'r gwerth treigl fel arfer yn is nag y mae unrhyw adroddiad cam yn ei awgrymu.
- Lleihewch drosglwyddiadau a rhag-awdurdodwch waith arferol cyn gwthio camau i fynd yn gyflymach.
- Arsylwch sampl o eitemau go iawn ochr yn ochr â data offer, adroddwch ganraddau, a labelwch amcangyfrifon.
- Paru pob metrig ffrwd â'i reilen warchod, a defnyddiwch y mesurau i ddisgrifio'r system, byth i raddio pobl.

## Cyfeiriadau a darllen pellach

1. Rother, M., and Shook, J., *Learning to See: Value Stream Mapping to Add Value and Eliminate Muda*, Lean Enterprise Institute, 1999.
2. Martin, K., and Osterling, M., *Value Stream Mapping: How to Visualize Work and Align Leadership for Organizational Transformation*, McGraw-Hill, 2014.
3. Womack, J. P., and Jones, D. T., *Lean Thinking: Banish Waste and Create Wealth in Your Corporation*, Simon and Schuster, 1996.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Little, J. D. C., "A Proof for the Queuing Formula: L = λW," *Operations Research*, 9(3), 1961.
6. Goldratt, E. M., and Cox, J., *The Goal: A Process of Ongoing Improvement*, North River Press, 1984.
7. Kersten, M., *Project to Product: How to Survive and Thrive in the Age of Digital Disruption with the Flow Framework*, IT Revolution, 2018.
8. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
9. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
10. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
11. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
12. Wikipedia, [Value stream](https://en.wikipedia.org/wiki/Value_stream).
13. Wikipedia, [Value-stream mapping](https://en.wikipedia.org/wiki/Value-stream_mapping).
14. Wikipedia, [Lean manufacturing](https://en.wikipedia.org/wiki/Lean_manufacturing).
15. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
16. Wikipedia, [Lead time](https://en.wikipedia.org/wiki/Lead_time).
17. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
18. Wikipedia, [Rolled throughput yield](https://en.wikipedia.org/wiki/Rolled_throughput_yield).
19. Wikipedia, [Theory of constraints](https://en.wikipedia.org/wiki/Theory_of_constraints).
