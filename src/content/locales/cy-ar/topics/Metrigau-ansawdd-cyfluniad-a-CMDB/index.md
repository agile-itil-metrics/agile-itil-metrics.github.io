# Metrigau ansawdd cyfluniad a CMDB

**Mae cronfa ddata gyfluniad yn werth ei chadw dim ond pan fo pobl yn ymddiried digon ynddi i'w defnyddio mewn newid neu ddigwyddiad, felly mesurwch ei hansawdd yn ôl pa mor dda y mae'n ateb cwestiynau go iawn, a gadewch i'r timau sy'n berchen ar wasanaethau gadw eu cofnodion eu hunain yn gyfredol.**

## Crynodeb a chymhelliant

Pan fo gweinydd cronfa ddata yn methu am dri y bore, mae rhywun yn gofyn pa wasanaethau sy'n dibynnu arno. Pan fo tîm yn cynllunio newid, mae rhywun yn gofyn beth arall allai dorri. Dylai'r atebion ddod o gofnod o'r pethau sy'n gwneud eich gwasanaethau a sut maent yn cysylltu. Y cofnod hwnnw yw pwnc rheoli cyfluniad, a'r gronfa ddata y tu ôl iddo yw'r gronfa ddata rheoli cyfluniad, a dalfyrrir fel arfer yn CMDB.

Mae [eitem gyfluniad](https://en.wikipedia.org/wiki/Configuration_item) (CI) yn unrhyw gydran y mae angen ei rheoli i gyflawni gwasanaeth TG: gweinydd, cymhwysiad, cronfa ddata, dyfais rhwydwaith, cyfrif cwmwl, contract. Mae [cronfa ddata rheoli cyfluniad](https://en.wikipedia.org/wiki/Configuration_management_database) yn storio gwybodaeth am CIs, eu priodoleddau, a'r berthynas rhyngddynt. Lle mae rheoli asedau yn gofyn beth sydd gennych, pwy sy'n berchen arno, a beth mae'n ei gostio (gweler pwnc 7.1, Metrigau rheoli asedau TG), mae rheoli cyfluniad yn gofyn sut mae'r rhannau'n ffitio at ei gilydd a beth sy'n dibynnu ar beth.

Mae gan CMDBs enw cymysg, ac enillwyd yr enw. Adeiladwyd llawer fel mapiau cynhwysfawr, wedi'u llenwi â data a bydrodd yn gyflymach nag y gallai neb ei drwsio, ac yna eu gadael. Mae'r traddodiadau ystwyth a DevOps yn cynnig man cychwyn gwell. Mae gan dimau sy'n disgrifio eu seilwaith fel cod ddiffiniad awdurdodol, wedi'i fersiynu o'r hyn y maent yn ei redeg, a gallant ei gyhoeddi i'r cofnod a rennir yn awtomatig. Mae [seilwaith fel cod](https://en.wikipedia.org/wiki/Infrastructure_as_code) yn troi'r cofnod yn sgil-gynnyrch cyflawni. Mae ITIL 4 yn disgrifio'r arfer fel rheoli cyfluniad gwasanaeth ac yn pwysleisio'r wybodaeth sydd ei hangen i gefnogi penderfyniadau, nid cyflawnrwydd er ei fwyn ei hun.

Mae gan ansawdd mewn cofnod cyfluniad sawl rhan, ac maent yn cyfateb i'r syniad ehangach o [gyfanrwydd data](https://en.wikipedia.org/wiki/Data_integrity):

- **Cyflawnrwydd:** mae'r CIs a'r priodoleddau sy'n bwysig yn bresennol.
- **Cywirdeb:** mae'r hyn y mae'r cofnod yn ei ddweud yn cyfateb i realiti.
- **Amseroldeb:** mae newidiadau'n ymddangos yn y cofnod yn ddigon buan i fod yn ddefnyddiol.
- **Cysondeb:** ni chofnodir yr un peth ddwywaith o dan enwau gwahanol. Paru cofnodion sy'n cyfeirio at yr un peth yw problem [datrys endidau](https://en.wikipedia.org/wiki/Entity_resolution).
- **Ansawdd perthnasoedd:** mae dibyniaethau rhwng CIs yn bresennol ac yn gywir. Dyma lle mae'r rhan fwyaf o'r gwerth, a'r rhan fwyaf o'r pydredd.

Y prawf dyfnaf o CMDB yw defnydd. Mae cofnod y mae pobl yn ei ymgynghori yn ystod digwyddiadau a newidiadau, ac yn ei gywiro pan fo'n anghywir, yn iach. Nid yw cofnod sy'n cael ei archwilio yn unig. Mae'r mesurau isod felly yn paru mesurau ansawdd â mesurau defnydd.

Mae'r rheilen warchod o [gyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol gyda thro: mae cyflawnrwydd yn hawdd i'w chwyddo gyda gwerthoedd rhagosodedig, ac mae cywirdeb yn hawdd i'w hawlio heb wirio. Mynnwch dystiolaeth annibynnol a mesurau defnydd (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Egwyddorion allweddol

- **Dechreuwch gyda'r cwestiynau.** Penderfynwch beth sydd angen i'r cofnod ei ateb, ac adeiladwch hynny'n unig.
- **Ffafriwch gofnod llai, y ceir ymddiriedaeth ynddo, na chofnod mwy, amheus.** Mae cwmpas yn tyfu pan enillir ymddiriedaeth.
- **Gadewch i ffynhonnell y gwirionedd fwydo'r cofnod.** Dylai piblinellau, APIs cwmwl, a darganfod ysgrifennu iddo, nid pobl â thaenlenni.
- **Gadewch i dimau gwasanaeth fod yn berchen ar gofnodion eu gwasanaethau.** Maent yn gwybod eu dibyniaethau, ac maent yn teimlo cost gwallau.
- **Mesurwch yn ôl defnydd yn ogystal ag ansawdd.** Mae cofnod da yn cael ei ymgynghori.
- **Gwiriwch yn erbyn realiti.** Profwch y cofnod drwy ofyn a yw'n rhagfynegi'r hyn sy'n digwydd.
- **Trwsiwch wrth y ffynhonnell.** Symptom yw cofnod anghywir. Darganfyddwch y broses a adawodd iddo ddrifftio.

## Diffiniadau metrigau

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyflawnrwydd CI | Cyfran y CIs o fewn cwmpas gyda'r holl briodoleddau gofynnol wedi'u llenwi â gwerthoedd dilys | CIs o fewn cwmpas gyda phob priodoledd gofynnol yn ddilys / CIs o fewn cwmpas | canran | CMDB, rheolau priodoleddau | Rheoli cyfluniad gwasanaeth; rheoli asedau TG | Mae'r diffiniad o orffen yn cynnwys disgrifiad gwasanaeth | Misol |
| Cywirdeb CI | Cyfran y CIs a samplwyd y mae eu cofnod yn cyfateb i dystiolaeth ar y priodoleddau gofynnol | CIs a samplwyd sy'n cyfateb ar bob priodoledd gofynnol / CIs a samplwyd | canran | Sampl archwilio wedi'i gymharu â'r system fyw | Rheoli cyfluniad gwasanaeth | Mae cyflwr seilwaith fel cod yn cyfateb i realiti | Chwarterol |
| Cwmpas dibyniaethau | Cyfran y gwasanaethau critigol y mae eu dibyniaethau i fyny ac i lawr yr afon wedi'u mapio a'u hadolygu | gwasanaethau critigol gyda map dibyniaethau wedi'i adolygu yn y 90 diwrnod diwethaf / gwasanaethau critigol | canran | Perthnasoedd CMDB a chofnodion adolygu | Rheoli cyfluniad gwasanaeth; rheoli argaeledd | Adolygu pensaernïaeth a pherchnogaeth gwasanaethau | Chwarterol |
| Cyfradd taro rhagfynegi effaith | Cyfran y digwyddiadau a'r newidiadau lle'r oedd y gwasanaethau a effeithiwyd mewn gwirionedd yn effaith ragfynegedig y CMDB | digwyddiadau neu newidiadau lle rhagfynegwyd yr holl wasanaethau yr effeithiwyd arnynt / digwyddiadau neu newidiadau a adolygwyd | canran | Adolygiadau ôl-ddigwyddiad a chofnodion newid wedi'u cymharu ag ymholiadau CMDB | Rheoli digwyddiadau; galluogi newid | Canfyddiad adolygu di-fai ar ddibyniaethau coll | Chwarterol |
| Cyfradd CI dyblyg | Cyfran y CIs sy'n dyblygu CI arall | CIs a fflagiwyd fel dyblygion gan reolau paru ac a gadarnhawyd mewn adolygiad / CIs o fewn cwmpas | canran | Adroddiad paru CMDB a sampl adolygu | Rheoli cyfluniad gwasanaeth | Un ffynhonnell gwirionedd | Misol |
| Oedi diweddaru | Yr oedi rhwng newid i CI yn y byd go iawn a'i ddiweddariad yn y CMDB | canolrif ac 85fed canradd oriau neu ddiwrnodau o'r digwyddiad newid i ddiweddariad CMDB | oriau neu ddiwrnodau | Digwyddiadau newid a phiblinell wedi'u cymharu â stampiau amser CMDB | Rheoli cyfluniad gwasanaeth; galluogi newid | Cofrestru awtomataidd yn y biblinell | Misol |
| Cyfradd defnyddio CMDB | Cyfran y digwyddiadau a'r newidiadau sy'n cyfeirio at CIs, ac o'r rheini, y gyfran lle mae defnyddwyr yn adrodd bod y cofnod wedi helpu | cofnodion sy'n cyfeirio at CI dilys / digwyddiadau a newidiadau yn y cyfnod; ynghyd â chyfran y cofnodion a adolygwyd lle'r oedd data'r CI yn help | canran | Offeryn ITSM, anogwr adborth byr | Rheoli digwyddiadau; galluogi newid | Timau'n defnyddio'r cofnod a rennir yn eu gwaith | Misol |

Diffiniwch gwmpas "CI o fewn cwmpas" yn ôl dosbarth ac yn ôl pwysigrwydd, a'i gofnodi. Mae CI yn gywir ar y priodoleddau a enwch fel rhai gofynnol yn unig. Mae oedi diweddaru yn dechrau ar y digwyddiad go iawn, megis defnyddio neu bryniant, ac yn stopio pan fo'r CMDB yn ei adlewyrchu. Mae cyfradd taro rhagfynegi effaith yn gofyn am gam adolygu sy'n cofnodi pa wasanaethau yr effeithiwyd arnynt mewn gwirionedd, ac nid yw'n fwy dibynadwy na'r adolygiad hwnnw.

## Argymhellion

### Penderfynwch beth yw pwrpas y cofnod

**1. Ysgrifennwch y cwestiynau y mae'n rhaid i'r CMDB eu hateb.** Mae rhai nodweddiadol yn cynnwys: beth sy'n dibynnu ar y gydran hon, pwy sy'n berchen ar y gwasanaeth hwn, beth sydd wedi newid yn ddiweddar, beth fyddai methiant yma yn effeithio arno, a beth sydd allan o gefnogaeth. Ar gyfer pob cwestiwn, enwch y dosbarthiadau CI, y priodoleddau, a'r perthnasoedd sydd eu hangen. Mae unrhyw beth nad oes ei angen i ateb cwestiwn yn ymgeisydd i'w adael allan.

**2. Dechreuwch gyda'r gwasanaethau sydd bwysicaf.** Dewiswch lond llaw o wasanaethau critigol, mapiwch hwy o'r dechrau i'r diwedd, a chael hynny'n iawn cyn ychwanegu mwy. Mae map dibynadwy o ddeg gwasanaeth yn helpu mwy na map amheus o fil. Ehangwch wrth i ymddiriedaeth a defnydd dyfu.

**3. Diffiniwch ddosbarthiadau, priodoleddau, a mathau o berthnasoedd yn syml.** Mae rhestr fer o ddosbarthiadau CI (gwasanaeth, cymhwysiad, cronfa ddata, gwesteiwr, rhwydwaith, adnodd cwmwl) a mathau o berthnasoedd (yn dibynnu ar, yn rhedeg ar, yn cysylltu â, yn eiddo i) yn cwmpasu'r rhan fwyaf o anghenion. Mae model sy'n ceisio cipio popeth yn anodd ei lenwi ac yn anoddach ei holi. Cadwch fodel ysgrifenedig a'i newid yn fwriadol.

### Bwydwch y cofnod o'r ffynhonnell

**4. Cyhoeddwch o biblinellau a chod.** Lle diffinnir seilwaith a chymwysiadau fel cod, gwnewch i'r biblinell gyflawni greu, diweddaru, ac ymddeol CIs ar bob newid, gan gynnwys gwybodaeth perchnogaeth a dibyniaeth a ddatgenir ochr yn ochr â'r cod. Trinwch y datganiad fel rhan o'r diffiniad o orffen ar gyfer gwasanaeth. Mae hyn yn gwneud oedi diweddaru yn agos at sero ac yn cadw'r cofnod yn gyson â'r hyn sy'n rhedeg.

**5. Defnyddiwch ddarganfod fel ail farn.** Mae [darganfod gwasanaethau](https://en.wikipedia.org/wiki/Service_discovery) rhwydwaith a chwmwl yn dod o hyd i'r hyn sy'n rhedeg mewn gwirionedd a sut mae'n cysylltu. Cymharwch ef â'r cofnod datganedig. Mae gwahaniaethau'n ganfyddiadau: naill ai mae'r datganiad yn colli rhywbeth neu mae rhywbeth yn rhedeg na ddylai. Mae darganfod ar ei ben ei hun yn cynhyrchu data swnllyd heb berchnogaeth, felly defnyddiwch ef i wirio, nid i awduro.

**6. Defnyddiwch ddynodwyr sefydlog a rheolau paru.** Mae dyblygion yn codi pan fo ffynonellau gwahanol yn enwi'r un peth yn wahanol. Cytunwch ar ddynodwr unigryw ar gyfer pob dosbarth CI, cofnodwch ddynodwyr ffynhonnell, a rhedwch reolau paru i ddod o hyd i ddyblygion a'u huno. Adolygwch baru â llaw mewn sampl, gan y gall uno awtomatig gyfuno pethau gwahanol.

**7. Rhowch berchnogaeth ar ei ddarn i bob tîm gwasanaeth.** Y tîm sy'n adeiladu ac yn rhedeg gwasanaeth sydd yn y sefyllfa orau i wybod ei ddibyniaethau ac i sylwi ar wallau. Gwnewch hi'n hawdd iddynt: templed, adolygiad byr wrth gynllunio, ac adborth pan ddefnyddir eu data. Mae timau canolog yn berchen ar y model, yr offer, a'r gwiriadau, nid ar bob cofnod.

### Mesurwch ansawdd a defnydd

**8. Archwiliwch gywirdeb drwy samplu.** Bob chwarter, tynnwch sampl ar hap o CIs a'u gwirio yn erbyn systemau byw, ac ail sampl o systemau byw i wirio eu bod yn ymddangos yn y cofnod. Adroddwch gywirdeb yn ôl dosbarth a dangoswch brif ffynonellau gwall. Cadwch y dull samplu yn sefydlog fel bod tueddiadau'n golygu rhywbeth.

**9. Profwch y map yn erbyn digwyddiadau.** Ar ôl digwyddiad neu newid sylweddol, cymharwch y gwasanaethau yr effeithiwyd arnynt mewn gwirionedd â'r hyn a ragfynegodd y CMDB. Cofnodwch fethiannau a thrwsiwch y dibyniaethau coll. Dyma'r prawf cywirdeb mwyaf ystyrlon, oherwydd ei fod yn gwirio'r cofnod yn erbyn digwyddiadau, ac mae'r gyfradd taro yn gwella wrth i'r map gael ei gywiro. Defnyddiwch adolygiadau di-fai fel bod pobl yn adrodd methiannau'n rhwydd (gweler pwnc 4.2, Metrigau adolygu ôl-ddigwyddiad a dysgu).

**10. Olrheiniwch ddefnydd a gofynnwch a helpodd.** Cyfrwch pa mor aml y mae digwyddiadau a newidiadau yn cyfeirio at CIs, a gofynnwch gwestiwn byr i ymatebwyr a chymeradwywyr ynghylch a helpodd y cofnod. Cyfradd defnyddio sy'n codi gydag atebion cadarnhaol yw'r arwydd clir o werth. Mae cyfradd defnyddio isel yn golygu nad yw pobl yn ymddiried yn y cofnod neu nad ydynt yn gwybod ei fod yn bodoli, ac mae'r ddau yn bosibl eu trwsio.

**11. Adolygwch fapiau dibyniaethau'n rheolaidd gyda pherchnogion.** Mae dibyniaethau'n newid wrth i feddalwedd esblygu. Gofynnwch i berchnogion gwasanaethau critigol gadarnhau eu mapiau bob chwarter, yn ddelfrydol fel rhan o sgwrs gynllunio neu bensaernïaeth. Defnyddiwch ddyddiad y cadarnhad fel priodoledd, a dangoswch fapiau sy'n hwyr.

### Cadwch hi'n onest ac yn gymesur

**12. Ymddeolwch yr hyn nad oes neb yn ei ddefnyddio.** Dilëwch ddosbarthiadau CI a phriodoleddau nad oes cwestiwn yn eu gofyn ac nad oes neb yn ymgynghori â hwy. Mae llai o feysydd, gwell, yn codi cywirdeb. Adolygwch y model yn flynyddol a chofnodwch yr hyn a dynnwyd a pham. Mae cofnod llai yn llai i'w gadw'n wir, ac mae'n gwneud y mesurau ansawdd yn haws i'w bodloni'n onest.

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyflawnrwydd CI | Llenwi priodoleddau gofynnol â rhagosodiadau neu dalfeydd; culhau'r rhestr ofynnol | Cyfrif gwerthoedd rhagosodedig a thalfeydd; rhestr ofynnol sefydlog; sampl cywirdeb |
| Cywirdeb CI | Samplu dosbarthiadau hawdd; archwilio ar ôl glanhau | Sampl ar hap a dynnwyd yn annibynnol o'r ddau gyfeiriad; dull sefydlog |
| Cwmpas dibyniaethau | Marcio mapiau fel rhai a adolygwyd heb eu darllen; mapio dibyniaethau dibwys yn unig | Cyfradd taro rhagfynegi effaith; gwirio map yn y fan yn erbyn traffig byw |
| Cyfradd taro rhagfynegi effaith | Dewis digwyddiadau a aeth yn dda; cofnodi gwasanaethau yr effeithiwyd arnynt yn gul | Adolygu pob digwyddiad sylweddol; adolygwyr y tu allan i'r tîm sy'n berchen |
| Cyfradd CI dyblyg | Uno CIs gwahanol i ostwng y gyfradd; llacio rheolau paru | Samplu uniadau am gywirdeb; logio rheolau uno |
| Oedi diweddaru | Ôl-ddyddio digwyddiadau newid; cyfrif diweddariadau awtomataidd yn unig | Cymharu stampiau amser digwyddiad a diweddariad o systemau ffynhonnell; llwybr archwilio |
| Cyfradd defnyddio CMDB | Ychwanegu cyfeiriadau CI fel ffurfioldeb; gwneud y maes yn orfodol gydag unrhyw werth | Gwirio bod CIs y cyfeirir atynt yn berthnasol; y cwestiwn adborth ar ddefnyddioldeb |

Mae darlleniad iach yn gofnod llai gyda chywirdeb mesuredig uchel, mapiau dibyniaethau sy'n rhagfynegi digwyddiadau go iawn, oedi diweddaru yn agos at sero ar gyfer dosbarthiadau awtomataidd, a phobl sy'n dweud eu bod yn defnyddio'r cofnod oherwydd ei fod yn helpu.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| CMDB cynhwysfawr | Golwg eang; cefnogi llawer o achosion defnydd | Drud i'w gadw'n wir; yn pydru |
| CMDB lleiaf, wedi'i yrru gan gwestiynau | Y ceir ymddiriedaeth ynddo ac yn rhad | Bylchau; angen disgyblaeth twf |
| Poblogi wedi'i yrru gan ddarganfod | Dod o hyd i'r anhysbys; ychydig o ymdrech â llaw | Swnllyd; heb berchnogaeth a phwrpas |
| Poblogi wedi'i yrru gan biblinell | Cywir; oedi isel | Cyfyngedig i'r hyn a adeiladir drwy biblinellau |
| Perchnogaeth ganolog ar gofnodion | Cysondeb | Araf; pell o'r wybodaeth |
| Perchnogaeth tîm ar gofnodion | Cywir a chyflym | Amrywiad; angen templedi a gwiriadau |
| Model arddull graff | Naturiol ar gyfer perthnasoedd ac ymholiadau effaith | Angen sgiliau ac offer |
| Model tabl perthynol | Cyfarwydd a syml | Lletchwith ar gyfer ymholiadau dibyniaeth dwfn |

Yr ateb pragmatig yw dechrau'n fach a gadael i gwestiynau ei yrru, poblogi o biblinellau gyda darganfod fel ail farn, a rhoi timau gwasanaeth yng ngofal eu cofnodion. Gall [cronfa ddata graff](https://en.wikipedia.org/wiki/Graph_database) wneud cwestiynau dibyniaeth yn naturiol i'w gofyn, er bod cronfa ddata gonfensiynol yn gweithio os cedwir y model yn syml.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pa gwestiwn y dymunem ddiwethaf y gallai'r CMDB ei ateb, ac a allai?**
Cofiwch ddigwyddiad neu newid diweddar lle chwiliodd rhywun am ddibyniaethau. Beth a ganfuwyd ganddynt, a beth a wnaethant yn lle hynny? Dylai'r hwylusydd gofnodi'r cwestiwn ac a ymgynghorwyd â'r cofnod. Y canlyniad yw'r ymgeisydd cyntaf ar gyfer pwrpas y cofnod.

**2. Pe bai ein gwasanaeth pwysicaf yn methu nawr, pa mor hyderus ydym yn yr effaith ragfynegedig?**
Gofynnwch am yr effaith ragfynegedig o'r CMDB a'i chymharu â'r hyn y mae pobl sy'n adnabod y gwasanaeth yn ei gredu. Nodwch y gwahaniaethau. Cytunwch pa ddibyniaeth i'w gwirio'n gyntaf a phwy fydd yn ei gwirio.

**3. Pwy sy'n berchen ar y cofnod ar gyfer pob gwasanaeth, ac a ydynt yn gwybod hynny?**
Rhestrwch wasanaethau critigol a pherchnogion eu cofnodion CMDB. Gofynnwch a yw perchnogion yn gwybod ac wedi eu hadolygu'n ddiweddar. Lle mae'r perchennog yn "y tîm CMDB," trafodwch sut i symud perchnogaeth i'r tîm gwasanaeth.

**4. Beth ydym ni'n ei lenwi dim ond i fodloni maes gofynnol?**
Chwiliwch am werthoedd rhagosodedig a thalfeydd. Mae'r rhain yn dangos lle mae'r model yn gofyn am fwy nag y mae neb yn ei wybod. Penderfynwch a ddylid dileu'r maes, ei awtomeiddio, neu ddod o hyd i'r ffynhonnell go iawn.

**5. Ble mae ein cofnod yn anghytuno â'r hyn sy'n rhedeg?**
Cymharwch allbwn darganfod â'r cofnod ar gyfer un gwasanaeth. Ar gyfer pob gwahaniaeth, gofynnwch a ddylai'r cofnod newid neu realiti. Mae'r sgwrs yn tueddu i ddod o hyd i ddata hen a chydrannau anawdurdodedig.

**6. Beth fyddem ni'n rhoi'r gorau i'w gofnodi?**
Rhestrwch ddosbarthiadau, priodoleddau, a pherthnasoedd nad oes neb wedi'u defnyddio mewn chwe mis. Gofynnwch beth fyddai'n digwydd pe bai pob un yn diflannu. Cytunwch i gael gwared â dau ac arsylwi a yw unrhyw un yn sylwi.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn dal y wybodaeth am yr hyn y mae eu gwasanaethau'n dibynnu arno ac maent yn y sefyllfa orau i gadw'r cofnod yn wir. Dylent ddatgan perchnogaeth a dibyniaethau ochr yn ochr â'u cod, eu hadolygu pan fo dyluniad yn newid, a defnyddio'r cofnod wrth gynllunio newidiadau. Mae diffiniad o orffen sy'n cynnwys diweddaru'r disgrifiad gwasanaeth yn cadw'r cofnod yn agos at y gwaith.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn ymgynghori â'r cofnod yn ystod digwyddiadau a newidiadau, felly maent yn teimlo ei wallau gyntaf. Dylent adrodd methiannau mewn adolygiadau, rhedeg gwiriadau darganfod, cynnal y rheolau paru, a darparu adborth i berchnogion. Maent hefyd yn gweithredu'r offer a'r samplau archwilio.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr eisiau gweld effaith a risg, ac maent yn aml yn noddi rhaglenni CMDB mawr sy'n siomi. Dylent ofyn am dystiolaeth defnydd a chywirdeb yn lle cyfrif cofnodion, ariannu integreiddio piblinellau, a derbyn cwmpas llai a wneir yn dda. Dylai llywodraethu ddisgwyl gweld cyfradd taro rhagfynegi effaith a'r rhestr bylchau.

### Cwsmeriaid a defnyddwyr

Mae defnyddwyr yn elwa pan wneir diagnosis o ddigwyddiadau'n gyflymach a phan fo newidiadau'n llai tebygol o dorri gwasanaethau dibynnol. Anaml y byddant yn gweld y CMDB, er eu bod yn gweld ei effeithiau mewn cyfathrebu sy'n enwi'r gwasanaethau yr effeithiwyd arnynt yn gywir ac mewn llai o syrpreisys ar ôl newidiadau. Mae eu hadborth ar ôl digwyddiadau yn dangos a oedd y darlun effaith yn gywir.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae grŵp technoleg cwmni hedfan cenedlaethol yn rhedeg tua 300 o gymwysiadau a llwyfan archebu cwsmeriaid. Mae'r rhifau isod yn enghreifftiol.

Mae'r CMDB yn dal 180,000 o CIs ac fe'i poblogwyd gan offeryn darganfod bum mlynedd yn ôl. Mae pennaeth rheoli gwasanaeth eisiau gwybod a yw'n werth ei gadw. Mae hi'n gofyn i dîm bach ei brofi. Ar gyfer ansawdd, maent yn archwilio 150 o CIs a samplwyd ac yn canfod eu bod 71 y cant yn gywir ar y pum priodoledd gofynnol. Ar gyfer y map, maent yn adolygu'r 20 digwyddiad sylweddol diwethaf ac yn cymharu'r gwasanaethau yr effeithiwyd arnynt mewn gwirionedd â'r hyn a ragfynegodd y CMDB: rhagfynegodd yr holl wasanaethau yr effeithiwyd arnynt mewn 6 o 20, cyfradd taro o 30 y cant. Ar gyfer defnydd, cyfeiriodd 12 y cant o ddigwyddiadau yn y chwarter diwethaf at CI, ac mewn arolwg byr o ymatebwyr, dywedodd y rhan fwyaf eu bod yn dibynnu ar dudalen wici ar wahân. Mae CIs dyblyg yn 9 y cant o'r cyfanswm.

Mae'r tîm yn gwneud pedwar penderfyniad gyda'r perchnogion gwasanaeth. Mae'n crebachu'r cwmpas i'r 40 gwasanaeth sy'n cario'r nifer fwyaf o gwsmeriaid, gyda phum dosbarth CI a phedwar math o berthynas. Mae'n gofyn i bob tîm gwasanaeth ddatgan y perchennog, dibyniaethau, a lleoliad rhedeg mewn ffeil fer a gedwir gyda'i god, y mae'r biblinell yn ei chyhoeddi i'r CMDB ar bob rhyddhad. Mae'n rhedeg darganfod yn wythnosol ac yn adrodd gwahaniaethau i berchnogion. Mae'n ychwanegu maes at yr adolygiad digwyddiad, "a oedd rhagfynegiad y CMDB yn gywir?" ac yn trwsio pob methiant o fewn pythefnos.

Ddau chwarter yn ddiweddarach, mae gan y CMDB â chwmpas 14,000 o CIs, cywirdeb ar y set a samplwyd yw 92 y cant, mae oedi diweddaru o ryddhad i gofnod o dan awr ar gyfer gwasanaethau yn y biblinell, a'r gyfradd taro ar y 12 digwyddiad diwethaf yw 75 y cant. Mae defnydd CMDB mewn digwyddiadau wedi codi i 58 y cant, ac mae ymatebwyr yn dweud nad oes angen y dudalen wici mwyach. Mae'r prif swyddog gweithredu yn gofyn am gynllun i ddod â'r 260 cymhwysiad arall i mewn ar unwaith. Mae pennaeth rheoli gwasanaeth yn cynnig ychwanegu deg gwasanaeth bob chwarter, ar ôl i bob un ennill cyfradd taro uwchlaw lefel y cytunwyd arni ar ddigwyddiad prawf, ac yn esbonio nad oedd y cofnod eang cynharach erioed wedi cael ei ymddiried ynddo. Cofnodir y penderfyniad, gydag adolygiad bob chwarter.

## Y golwg fesul sector

**Busnes newydd.** Nid oes llawer o angen CMDB y tu hwnt i gatalog gwasanaethau a chod seilwaith. Cadwch berchnogion gwasanaeth a dibyniaethau yn y storfa, a chynhyrchwch fap ohoni. Ychwanegwch gronfa ddata dim ond pan fo'r cwestiynau'n tyfu'n fwy na'r ffeiliau.

**Busnes bach.** Gall diagram syml a rhestr o systemau gyda pherchnogion a gwerthwyr fod yn ddigon. Diweddarwch ef ar ôl pob newid sylweddol. Gwrthwynebwch brynu platfform ar gyfer ystad fach, ond cadwch y diagram yn gyfredol, gan ei fod yn amhrisiadwy mewn toriad.

**Menter fawr.** Mae graddfa angen model, perchnogaeth ffederal, ac integreiddio â sawl ffynhonnell, gan gynnwys caffaeliadau. Safonwch ddynodwyr a'r model craidd, gadewch i dimau ei ymestyn o fewn rheolau, a mesurwch ddefnydd a chywirdeb yn ôl parth. Disgwyliwch redeg swyddogaeth paru a glanhau barhaus.

**Llywodraeth a'r sector cyhoeddus.** Mae gwasanaethau'n aml yn gorwedd ar systemau hirhoedlog, contractwyr, a seilwaith a rennir, a gall effaith digwyddiad effeithio ar y cyhoedd. Mapiwch ddibyniaethau ar gyflenwyr a llwyfannau a rennir yn benodol, cadwch gofnodion ar gyfer archwiliadau, ac alinio â chynllunio parhad (gweler pwnc 5.6, Metrigau parhad gwasanaeth).

## Yr achos busnes: cymhellion, ROI a TCO

Y costau yw ymdrech modelu a llywodraethu, integreiddio piblinellau a darganfod, rhywfaint o offer, ac ymdrech archwiliadau a thrwsio. Mae llawer o sefydliadau eisoes yn berchen ar y platfform. Mae poblogi drwy biblinell yn rhad unwaith y bo'r templed yn bodoli. Mae rhaglenni mawr i boblogi popeth ar unwaith wedi bod yn ddrud ac yn aml wedi methu.

Yr enillion yw digwyddiadau byrrach, newidiadau mwy diogel, a llai o amser yn chwilio am wybodaeth. Adeiladwch yr achos o'ch tystiolaeth eich hun: yr amser y mae ymatebwyr yn ei dreulio yn dod o hyd i ddibyniaethau mewn digwyddiad nodweddiadol, cyfran y digwyddiadau lle'r oedd gwybodaeth ddibyniaeth goll yn oedi diagnosis, a newidiadau a achosodd effaith annisgwyl. Mae cyfradd taro rhagfynegi effaith yn fesur uniongyrchol o a fyddai'r cofnod wedi helpu. Osgowch hawliadau cyhoeddedig am ganran y digwyddiadau a achosir gan newid neu gost toriadau oni allwch olrhain eu ffynhonnell. Cyfrwch gostau cadw cofnod mawr, amheus yn erbyn gwerth un bach, y ceir ymddiriedaeth ynddo.

## Gwrthbatrymau a maglau

- **Poblogi popeth yn gyntaf.** Mae cofnod enfawr, hen yn dinistrio ymddiriedaeth. Dechreuwch gyda gwasanaethau critigol.
- **Darganfod fel yr unig ffynhonnell.** Ni all ddweud wrthych pam fod rhywbeth yn bodoli na phwy sy'n berchen arno. Cyfunwch â datganiadau.
- **Archwilio cyflawnrwydd a'i alw'n ansawdd.** Mae cyflawn ac anghywir yn waeth nag anghyflawn a chywir. Samplwch am gywirdeb.
- **Timau canolog yn berchen ar yr holl ddata.** Nid ydynt yn ei adnabod. Rhowch berchnogaeth i dimau gwasanaeth.
- **Meysydd gorfodol gyda gwerthoedd rhagosodedig.** Maent yn edrych yn gyflawn ac nid ydynt yn cario gwybodaeth. Dilëwch hwy neu eu hawtomeiddio.
- **Mesur yn ôl nifer y CIs.** Nid yw mwy yn well. Mesurwch gywirdeb, cyfradd taro, a defnydd.
- **Anwybyddu perthnasoedd.** Heb ddibyniaethau, rhestr eiddo yw CMDB. Buddsoddwch yn y map ar gyfer gwasanaethau critigol.
- **Beio pobl am fethiannau.** Maent yn rhoi'r gorau i'w hadrodd. Trinwch ddibyniaeth a fethwyd fel canfyddiad.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Cwmpas a model | Beth bynnag a ganfu darganfod | Model wedi'i ddiffinio; cwmpas eang | Model wedi'i yrru gan gwestiynau; gwasanaethau critigol wedi'u mapio | Cwmpas yn tyfu pan fo cyfradd taro a defnydd yn cyfiawnhau | Model ffederal ar draws timau a chyflenwyr; dynodwyr a rennir |
| Poblogi ac ansawdd | Llwyth â llaw neu unwaith | Darganfod ac mewnforion wedi'u hamserlennu | Piblinellau yn cyhoeddi o god; darganfod fel gwiriad; archwiliadau samplu | Cywirdeb, oedi, a dyblygion wedi'u mesur a'u holrhain | Bwydydd amser real gyda chysoni awtomataidd a chadarnhad perchennog |
| Defnydd | Anaml yr ymgynghorir | Wedi'i ddefnyddio gan ychydig o dimau | Cyfeirir ato mewn digwyddiadau a newidiadau fel arfer safonol | Rhagfynegi effaith wedi'i brofi yn erbyn digwyddiadau; defnydd a defnyddioldeb wedi'u holrhain | Cofnod yn hysbysu penderfyniadau awtomataidd a mapiau cyflenwyr a rennir |

## Rhestr wirio

- [ ] Ysgrifennir y cwestiynau y mae'n rhaid i'r CMDB eu hateb.
- [ ] Cyfyngir cwmpas i wasanaethau critigol, gyda rheol twf wedi'i diffinio.
- [ ] Mae gan y model set fach o ddosbarthiadau, priodoleddau, a mathau o berthnasoedd.
- [ ] Mae gan bob gwasanaeth critigol berchennog sydd wedi cadarnhau ei gofnod yn y chwarter diwethaf.
- [ ] Mae piblinellau yn cyhoeddi newidiadau CI ar gyfer gwasanaethau a adeiladwyd fel cod.
- [ ] Cymherir canlyniadau darganfod â'r cofnod ac adolygir gwahaniaethau.
- [ ] Archwilir sampl cywirdeb ar hap bob chwarter i'r ddau gyfeiriad.
- [ ] Mae adolygiadau digwyddiadau yn cofnodi a oedd yr effaith ragfynegedig yn gywir.
- [ ] Olrheinir defnydd CMDB mewn digwyddiadau a newidiadau, gyda chwestiwn defnyddioldeb.
- [ ] Ymddeolir dosbarthiadau a phriodoleddau nas defnyddir yn ôl amserlen.

## Anogwyr AI

**Diffiniwch y cwestiynau a'r cwmpas.**

```text
Rydym yn rhedeg [math o sefydliad a gwasanaethau]. Sefyllfaoedd nodweddiadol lle
mae angen gwybodaeth gyfluniad arnom: [rhestr o ddigwyddiadau, newidiadau,
archwiliadau]. Drafftiwch restr o'r cwestiynau y dylai ein CMDB eu hateb, y
dosbarthiadau CI, priodoleddau, a pherthnasoedd sydd eu hangen ar gyfer pob un, a
chwmpas cychwynnol lleiaf o'r gwasanaethau mwyaf critigol. Peidiwch â dyfeisio
offer. Rhestrwch eich rhagdybiaethau a'r hyn i'w gadarnhau gyda pherchnogion
gwasanaeth.
```

**Dadansoddwch fethiant rhagfynegi effaith.**

```text
Ar ôl y digwyddiad [disgrifiad], rhagfynegodd y CMDB y gwasanaethau hyn yr
effeithiwyd arnynt: [rhestr], a'r gwasanaethau yr effeithiwyd arnynt mewn
gwirionedd oedd: [rhestr]. Esboniwch resymau posibl dros bob gwahaniaeth
(dibyniaeth goll, perthynas anghywir, data hen, dibyniaeth anuniongyrchol),
awgrymwch sut i wirio pob un, a chynigiwch ateb wrth y ffynhonnell. Peidiwch â
thybio achosion na all y wybodaeth eu cefnogi. Rhestrwch eich rhagdybiaethau.
```

**Dyluniwch ffeil ddatgan ar gyfer timau gwasanaeth.**

```text
Cynigiwch ddatganiad byr, darllenadwy gan bobl y mae tîm gwasanaeth yn ei gadw
gyda'i god i ddisgrifio'r gwasanaeth ar gyfer y CMDB: perchennog, cyswllt
cymorth, haen, dibyniaethau, lleoliad rhedeg, a dosbarthiad data. Cynhwyswch
reolau dilysu y gallai'r biblinell eu cymhwyso ac enghraifft leiaf ar gyfer
[math o wasanaeth]. Cadwch ef at yr hyn y mae'r cwestiynau yn [gludwch
gwestiynau] yn ei ofyn. Rhestrwch eich rhagdybiaethau a'r meysydd i'w hadolygu
gyda diogelwch.
```

**Cynlluniwch archwiliad cywirdeb chwarterol.**

```text
Mae ein CMDB yn dal [nifer] o CIs yn y dosbarthiadau hyn: [rhestr]. Dyluniwch
archwiliad chwarterol gyda samplau ar hap a dynnir i'r ddau gyfeiriad (o'r CMDB
i realiti, ac o realiti i'r CMDB), dywedwch beth i'w wirio ar gyfer pob dosbarth,
sut i adrodd cywirdeb a ffynonellau gwall yn onest, a sut i osgoi graddio ein
gwaith cartref ein hunain. Peidiwch â gorddatgan manylder ystadegol. Rhestrwch
eich rhagdybiaethau.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr ar gyfer metrig ansawdd cyfluniad.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod cofnod metrig CMDB yn cario ei ffordd o chwarae'r system, ei reilen warchod, a'i reol tystiolaeth annibynnol.

## Pwyntiau allweddol

- Adeiladwch y CMDB i ateb cwestiynau a enwir am y gwasanaethau sydd bwysicaf, a'i dyfu wrth i ymddiriedaeth dyfu.
- Poblogwch ef o biblinellau a chod, defnyddiwch ddarganfod fel ail farn, a gadewch i dimau gwasanaeth fod yn berchen ar eu cofnodion.
- Profwch ansawdd yn erbyn digwyddiadau: cymharwch yr effaith ragfynegedig â'r hyn a ddigwyddodd mewn gwirionedd mewn digwyddiadau.
- Mesurwch ddefnydd a defnyddioldeb, nid nifer y CIs.
- Samplwch am gywirdeb o dystiolaeth annibynnol i'r ddau gyfeiriad.
- Ymddeolwch yr hyn nad oes neb yn ei ddefnyddio, a thrwsiwch wallau wrth eu ffynhonnell.

## Cyfeiriadau a darllen pellach

1. AXELOS (now PeopleCert), *ITIL 4 Practice Guide: Service Configuration Management*, TSO, 2020.
2. Wang, R. Y., and Strong, D. M., "Beyond accuracy: what data quality means to data consumers," *Journal of Management Information Systems*, 12(4), 1996.
3. DAMA International, *DAMA-DMBOK: Data Management Body of Knowledge*, 2nd ed., Technics Publications, 2017.
4. Morris, K., *Infrastructure as Code*, 2nd ed., O'Reilly, 2020.
5. Beck, K., et al., *Principles behind the Agile Manifesto*, 2001, https://agilemanifesto.org/principles.html.
6. Wikipedia, [Configuration item](https://en.wikipedia.org/wiki/Configuration_item).
7. Wikipedia, [Configuration management database](https://en.wikipedia.org/wiki/Configuration_management_database).
8. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
9. Wikipedia, [Data integrity](https://en.wikipedia.org/wiki/Data_integrity).
10. Wikipedia, [Entity resolution](https://en.wikipedia.org/wiki/Entity_resolution).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Service discovery](https://en.wikipedia.org/wiki/Service_discovery).
13. Wikipedia, [Graph database](https://en.wikipedia.org/wiki/Graph_database).
