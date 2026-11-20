# Metrigau galluogi newid

**Mae metrigau galluogi newid yn dangos a yw eich sefydliad yn gadael i newidiadau buddiol lifo'n ddiogel ac yn gyflym, felly mesurwch sut y dosbarthir newidiadau, pa mor hir y maent yn aros am benderfyniad, a faint o'r penderfyniad hwnnw y mae'r biblinell yn ei wneud yn awtomatig, a pharwch bob mesur cyflymder ag olwg ar risg.**

## Crynodeb a chymhelliant

Mae pob gwasanaeth yn newid. Mae timau'n ychwanegu nodweddion, yn clytio llyfrgelloedd, yn cylchdroi tystysgrifau, yn newid maint cronfeydd data, ac yn ymddeol hen gydrannau. Yn fframwaith [ITIL](https://en.wikipedia.org/wiki/ITIL) 4, galluogi newid yw enw'r arfer sy'n llywodraethu hyn, a'i bwrpas datganedig yw cynyddu nifer y newidiadau gwasanaeth a chynnyrch llwyddiannus drwy sicrhau bod risgiau'n cael eu hasesu'n briodol, bod newidiadau'n cael eu hawdurdodi, a bod yr amserlen newid yn cael ei rheoli. Roedd argraffiadau ITIL cynharach yn galw'r arfer yn [rheoli newid](https://en.wikipedia.org/wiki/Change_management_(ITSM)), ac mae llawer o sefydliadau'n dal i ddefnyddio'r enw hwnnw. Mae'r enw newydd yn arwydd o newid pwyslais: mae'r arfer yn bodoli i alluogi newid da, nid i'w ddal yn ôl.

**Newid** yn ITIL 4 yw ychwanegu, addasu, neu ddileu unrhyw beth a allai gael effaith uniongyrchol neu anuniongyrchol ar wasanaethau. Mae hynny'n gwmpas ehangach na defnyddio cod. Mae'n cwmpasu golygiadau cyfluniad, diweddariadau seilwaith, newidiadau mynediad, gweithredoedd cyflenwyr, a dogfennaeth y mae gweithredwyr yn dibynnu arni. Fel arfer mae tîm ystwyth yn gweld newid fel cais tynnu sy'n cael ei gludo. Mae tîm gweithrediadau gwasanaeth yn ei weld fel cofnod ar amserlen. Mae'r ddwy olwg yn ddilys, ac mae'r metrigau yn y pwnc hwn yn gweithio orau pan fyddant yn disgrifio'r un digwyddiad o'r ddwy ochr.

Mae ITIL 4 yn disgrifio tri math o newid, ac mae'r metrigau yn y pwnc hwn yn dibynnu arnynt. Gwiriwch y geiriad union yng nghyhoeddiadau cyfredol perchennog y fframwaith; mae'r pwnc hwn yn crynhoi'r patrwm a ddogfennir yn eang ym mis Hydref 2026.

- Mae **newid safonol** yn risg isel ac wedi'i ddeall yn dda. Mae'n dilyn gweithdrefn ddogfenedig ac wedi'i ragawdurdodi, felly nid oes angen cymeradwyaeth fesul achos.
- Mae **newid arferol** angen asesiad ac awdurdodiad cyn symud ymlaen. Mae dyfnder yr asesiad yn graddio gyda risg ac effaith.
- Rhaid i **newid brys** ddigwydd ar frys, yn aml i adfer gwasanaeth neu gau gwendid difrifol. Mae'n dilyn llwybr cyflym gydag adolygiad llawnach wedyn.

Mae termau eraill yn codi dro ar ôl tro isod. **Awdurdod newid** yw'r person neu'r grŵp sydd â'r hawl i gymeradwyo newid o fath penodol. **Bwrdd ymgynghorol newid (CAB)** yw grŵp sy'n adolygu newidiadau arfaethedig ac yn cynghori neu'n penderfynu. **Amser arweiniol cymeradwyo** yw'r amser y mae newid yn aros am benderfyniad awdurdodi. **Canradd** yw gwerth y mae cyfran benodol o arsylwadau'n syrthio islaw iddo, felly'r 85fed ganradd yw'r rhif y mae 85 y cant o newidiadau yn ei guro.

Pam mesur hyn i gyd? Daw'r dystiolaeth gyhoeddedig gryfaf ar reoli newid o raglen ymchwil DevOps Research and Assessment (DORA). Mae ei harweiniad yn adrodd bod cymeradwyo allanol trwm, megis CAB neu lofnod uwch reolwr, yn gysylltiedig â pherfformiad cyflawni meddalwedd gwaeth, ac na chanfuwyd tystiolaeth bod adolygiad allanol mwy ffurfiol yn lleihau cyfran y newidiadau sy'n methu. Mae'n argymell adolygiad cymheiriaid, profion awtomataidd, a newidiadau bach yn lle hynny, gyda rôl strategol i unrhyw fwrdd canolog. Mae'r rhain yn ddatganiadau am gysylltiad mewn data arolwg, nid cyfreithiau, ac nid yw tudalennau DORA yn rhoi meintiau effaith ar gyfer yr honiad, felly trinwch hwy fel rheswm cryf i edrych ar eich data eich hun ac nid fel dyfarniad ar unrhyw un rheolaeth. Mae'r deunydd galluogi newid yn y *Canllaw ITIL Ystwyth* yn crynhoi'r un ymchwil.

Mae'r golygon ystwyth ac ITIL yn cwrdd ar y cwestiwn o ble mae rheolaeth yn byw. Mewn piblinell gyflawni, gall llawer o'r asesu ddigwydd yn barhaus: mae adolygydd yn cymeradwyo'r cod, mae profion awtomataidd yn gwirio ymddygiad, ac mae'r offeryn defnyddio yn ysgrifennu'r cofnod. Mae hyn yn bodloni bwriad [gwahanu dyletswyddau](https://en.wikipedia.org/wiki/Separation_of_duties) pan fo'r adolygiad wedi'i gofnodi ac na all yr awdur gymeradwyo ei waith ei hun. Mae metrigau yn dweud wrthych a yw hyn yn digwydd mewn gwirionedd, neu a yw'r biblinell yn ffordd gyflym y mae'r rhan fwyaf o newidiadau yn dal i'w gadael i aros mewn ciw.

Mae'r pwnc hwn yn ymdrin ag ochr llif a rheolaeth newid: cyfaint, cymysgedd mathau, amser aros, ac awtomeiddio. Nid yw'n ymdrin â pha un a yw newidiadau'n llwyddo. Mae'r gyfradd methiant newid, cyfran brys, a'r mesurau dychwelyd a chlytiau brys yn perthyn i bwnc 4.4, Methiant newid ac ailwaith, ac mae mesurau trwybwn ac ansefydlogrwydd DORA ym mhwnc 2.8, Metrigau DORA. Mae amlder defnyddio a rhyddhau ym mhwnc 4.5, Metrigau rhyddhau a defnyddio. Mae ochr digwyddiadau newid gwael ym mhwnc 3.3, Amser ymateb a datrys digwyddiadau, a phwnc 3.4, Metrigau digwyddiadau mawr.

Mae metrigau newid yn denu [cyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn gyflym: mae targed ar gyfer amser cymeradwyo yn gwahodd cymeradwyaethau cyflym, gwag, ac mae targed ar gyfer cyfran newid safonol yn gwahodd ail-ddosbarthu gwaith peryglus fel gwaith rheolaidd (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

## Egwyddorion allweddol

- **Cydweddwch reolaeth â risg.** Y nod yw rheolaeth gymesur: mae newidiadau risg isel yn cymryd llwybr cyflym, wedi'i ragawdurdodi, ac mae newidiadau risg uchel yn cael craffu gwirioneddol. Mae un broses ar gyfer popeth yn araf i'r rhan fwyaf o newidiadau ac yn arwynebol ar gyfer y rhai peryglus.
- **Mesurwch yr aros, nid dim ond y gwaith.** Yn aml mae amser arweiniol cymeradwyo yn dominyddu'r amser y mae newid gorffenedig yn ei dreulio cyn cyrraedd cynhyrchu. Mae'n anweledig oni bai bod rhywun yn cofnodi pryd y gofynnwyd am gymeradwyaeth a phryd y'i rhoddwyd.
- **Cyfrwch fathau cyn i chi gyfrif unrhyw beth arall.** Mae cyfaint, cyflymder a risg yn wahanol iawn rhwng newidiadau safonol, arferol a brys. Mae un cyfartaledd ar draws y tri yn cuddio pob signal defnyddiol.
- **Ffafriwch dystiolaeth awtomataidd, wedi'i chofnodi i gyfarfodydd.** Mae adolygiad cymheiriaid, profion sy'n pasio, a gwiriadau piblinell yn cynhyrchu cofnod heb slot calendr. Mesurwch faint o'r penderfyniad cymeradwyo y mae'r biblinell yn ei gipio.
- **Disgrifiwch wasanaeth neu dîm, byth berson.** Mae cymeradwywyr a cheiswyr yn gweithio y tu mewn i system. Mae graddio unigolion yn ôl cymeradwyaethau a roddwyd neu a wrthodwyd yn dysgu pobl i gymeradwyo popeth neu ddim.
- **Parwch gyflymder â diogelwch.** Dim ond newyddion da yw cymeradwyo cyflymach os yw'r darlun methiant yn gyson. Darllenwch y metrigau hyn wrth ymyl pwnc 4.4, Methiant newid ac ailwaith.
- **Ysgrifennwch y rheolau dosbarthu.** Mae a yw newid yn safonol, yn arferol, neu'n frys yn farn y mae'n rhaid ei hatgynhyrchu. Cofnodwch y meini prawf ac adolygwch sampl bob chwarter.

## Diffiniadau metrigau

Mae'r tabl yn nodi'r clociau a'r eithriadau y dylai eich tîm eu hysgrifennu. Daw'r data o'r offeryn newid neu docynnau, digwyddiadau rheoli fersiynau a phiblinell, a'r cofnodion cymeradwyo (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cyfaint newid yn ôl math | Nifer y newidiadau a gwblhawyd, wedi'u rhannu'n safonol, arferol a brys | Cyfrif cofnodion newid a gyrhaeddodd statws wedi'i weithredu yn y cyfnod, wedi'u grwpio yn ôl math adeg cymeradwyo; eithrir newidiadau a ganslwyd a thynnwyd yn ôl a'u hadrodd ar wahân; adroddwch fesul gwasanaeth, nid fesul person | Newidiadau yr wythnos neu'r mis, yn ôl math | Cofnodion newid yn yr offeryn ITSM, wedi'u huno â digwyddiadau defnyddio piblinell | Galluogi newid | Trwybwn eitemau gwaith gorffenedig; cynnwys rhyddhad fesul cynyddiad | Wythnosol, wedi'i adolygu'n fisol |
| Cyfran newid safonol | Cyfran y newidiadau a gwblhawyd a gymerodd y llwybr rhagawdurdodedig | Newidiadau safonol a gwblhawyd yn y cyfnod / pob newid a gwblhawyd yn y cyfnod; mae newid a ail-ddosbarthwyd ar ôl y ffaith yn cyfrif o dan ei fath terfynol ac mae'r ail-ddosbarthu yn cael ei logio | Canran | Cofnodion newid gyda math a hanes ail-ddosbarthu | Galluogi newid | Gwaith rheolaidd a gwmpesir gan gytundeb gweithio'r tîm a'r diffiniad o orffen | Misol |
| Amser arweiniol cymeradwyo | Yr amser y mae newid yn aros am benderfyniad awdurdodi | Mae'r cloc yn dechrau pan gyflwynir y cais fel un parod i'w asesu ac yn stopio pan gofnodir y penderfyniad awdurdodi; eithrir amser yn aros i'r ceisydd ddarparu gwybodaeth a'i ddangos ar wahân; adroddwch y canolrif a'r 85fed canradd ar gyfer newidiadau arferol yn y cyfnod; eithrir newidiadau safonol heb gam cymeradwyo | Oriau neu ddiwrnodau gwaith | Stampiau amser ar gofnodion newid neu ddigwyddiadau cymeradwyo yn y biblinell | Galluogi newid | Amser aros mewn llif gwaith; amser mewn colofn adolygu | Wythnosol, wedi'i adolygu'n fisol |
| Cyfran cymeradwyo awtomataidd | Cyfran y penderfyniadau awdurdodi a wneir ac a gofnodir gan reolaethau piblinell neu bolisi rhagawdurdodedig | Newidiadau y rhoddwyd eu cymeradwyaeth gan wiriad awtomataidd wedi'i gofnodi neu adolygiad cymheiriaid wedi'i gofnodi o dan bolisi ysgrifenedig / pob newid a gwblhawyd yn y cyfnod; mae llofnod â llaw gan fwrdd neu reolwr yn cyfrif fel un nad yw'n awtomataidd | Canran | Logiau piblinell, cofnodion adolygu cod, a chofnodion newid | Galluogi newid; rheoli defnyddio | Pyrth ansawdd awtomataidd; adolygiad cymheiriaid fel rhan o'r diffiniad o orffen | Misol |
| Oedran y ciw cymeradwyo | Pa mor hir y mae ceisiadau sydd ar y gweill wedi bod yn aros ar hyn o bryd | Oedran pob newid sy'n aros am benderfyniad ar hyn o bryd, wedi'i fesur o'i gyflwyno hyd at foment y cipolwg; adroddwch yr eitem hynaf a'r 85fed canradd o'r ciw agored; eithrir cymeradwyaethau a gwblhawyd | Oriau neu ddiwrnodau gwaith | Cofnodion newid gyda statws cymeradwyo agored | Galluogi newid | Oedran eitem waith; gwaith ar y gweill sy'n heneiddio | Cipolwg dyddiol, wedi'i adolygu'n wythnosol |
| Cyflawnder cofnod newid | Cyfran y newidiadau a gwblhawyd y gall eu cofnod ateb pwy, beth, pam, pryd, a pha wasanaeth | Newidiadau gyda'r holl feysydd gofynnol wedi'u llenwi ac wedi'u cysylltu â'r gwasanaeth neu'r eitem gyfluniad yr effeithiwyd arni / pob newid a gwblhawyd yn y cyfnod; rhestrir y meysydd gofynnol yn y diffiniad; nodir cofnodion a grëwyd ar ôl i'r newid gael ei weithredu | Canran | Cofnodion newid, dolenni rheoli fersiynau, data cyfluniad | Galluogi newid; rheoli cyfluniad gwasanaeth | Olrheinedd o ymrwymiad i docyn i ddefnyddio | Misol |

Mae amser arweiniol cymeradwyo yn edrych yn ôl ar newidiadau a orffennodd aros a gall guddio pentwr o geisiadau sownd. Mae oedran y ciw yn edrych ar yr hyn sy'n aros heddiw, sef y rhybudd cynharach. Nid sgôr i'w mwyhau yw cyfran newid safonol: bydd tîm sy'n newid cyfluniad drwy biblinell aeddfed yn cael cyfran uchel, ac efallai y bydd gan dîm ar system graidd etifeddol gyfran isel yn rhesymol.

## Argymhellion

### Sefydlwch y pethau sylfaenol

**1. Cyfrwch newidiadau yn ôl math cyn mesur unrhyw beth arall.** Adeiladwch un olwg ar newidiadau a gwblhawyd, wedi'u rhannu'n safonol, arferol a brys, fesul gwasanaeth a fesul mis. Mae llawer o sefydliadau'n darganfod ar y pwynt hwn na all neb gytuno ar y cyfanswm, oherwydd bod tocynnau, defnyddiadau piblinell ac atgyweiriadau anffurfiol yn cael eu cyfrif ar wahân. Cysoni'r ffynonellau hyn yw canlyniad cyntaf y rhaglen (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

**2. Ysgrifennwch y rheolau dosbarthu a'u samplu.** Nodwch beth sy'n gwneud newid yn safonol: gweithdrefn ddogfenedig, risg hysbys, a hanes. Nodwch beth sy'n gwthio newid i fod yn arferol neu'n frys. Adolygwch sampl ar hap o tua ugain newid bob chwarter a gofynnwch a ddosbarthwyd pob un fel y dywed y rheolau. Camddosbarthu yw'r prif fygythiad i bob rhif arall yn y pwnc hwn.

**3. Diffiniwch y cloc cymeradwyo yn ysgrifenedig.** Dywedwch fod y cloc yn dechrau pan gyflwynir y cais fel un parod, ac yn stopio pan gofnodir y penderfyniad, ac enwch yr eithriadau, megis aros i'r ceisydd ateb cwestiwn. Hebddo, mae un tîm yn mesur o greu'r tocyn a'r llall o gyfarfod y bwrdd, ac ni ellir cymharu'r rhifau hyd yn oed dros amser.

### Byrhewch yr aros

**4. Adroddwch amser arweiniol cymeradwyo fel dosbarthiad.** Mae cymedr yn cuddio'r patrwm sy'n bwysig, sef ychydig o newidiadau yn aros am amser hir iawn. Dangoswch y canolrif a'r 85fed canradd, a'r ychydig achosion arafaf yn ôl enw'r newid, nid enw'r person (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth). Os yw'r 85fed canradd sawl gwaith y canolrif, fel arfer cylch cyfarfodydd neu un cymeradwywr wedi'i orlwytho yw'r achos, ac mae'r atgyweiriad yn strwythurol.

**5. Gwyliwch y ciw, nid dim ond yr hanes.** Adolygwch oedran y ciw cymeradwyo bob wythnos yn yr un fforwm sy'n adolygu mesurau llif. Yr eitem hynaf sy'n aros yw'r rhybudd cynnar gorau bod bwrdd wedi'i orlwytho, bod gwyliau wedi atal llofnod, neu fod ceisydd wedi rhoi'r gorau i ddilyn i fyny yn dawel. Mae golwg ciw hefyd yn cyd-fynd â'r arfer o edrych ar waith sy'n heneiddio (gweler pwnc 2.1, Mesurau llif).

**6. Gwahanwch aros am wybodaeth oddi wrth aros am benderfyniad.** Pan fo cais yn mynd yn ôl at y ceisydd am fwy o fanylion, stopiwch y cloc cymeradwyo a dechreuwch un gwahanol. Mae cymeradwywyr yn cael eu beio am oedi a achosir gan y ceisydd, ac mae ceiswyr yn cael eu beio am oedi yn y ciw. Mae dau gloc yn rhoi darlun cywir i bob ochr a gwelliant pendant, megis templed cais gwell.

### Symudwch reolaeth i'r biblinell

**7. Trowch fathau o newid ailadroddadwy, risg isel yn newidiadau safonol.** Dewiswch y newid arferol mwyaf cyffredin yn eich golwg cyfaint, megis diweddariad llyfrgell rheolaidd neu weithred raddio. Ysgrifennwch ei weithdrefn a'i wiriadau, cytunwch ar y risg gyda'r awdurdod newid, a'i ragawdurdodi. Yna gwyliwch gyfran newid safonol ac amser arweiniol cymeradwyo ar gyfer newidiadau arferol gyda'i gilydd: dylai'r gyfran godi a dylai'r ciw fyrhau, heb gynnydd cyfatebol mewn methiannau (gweler pwnc 4.4, Methiant newid ac ailwaith).

**8. Cofnodwch gymeradwyaeth lle mae'r gwaith yn digwydd.** Cipiwch adolygiad cymheiriaid yn yr offeryn [adolygu cod](https://en.wikipedia.org/wiki/Code_review) a gadewch i'r biblinell gysylltu'r adolygiad, canlyniad y prawf, a'r defnydd â'r cofnod newid yn awtomatig. Mae'r cofnod wedyn yn sgil-gynnyrch gwaith yn lle tasg ar wahân. Mesurwch y gyfran cymeradwyo awtomataidd, ac archwiliwch sampl i gadarnhau bod yr adolygiad a gofnodwyd yn sylweddol, nid stamp rwber (gweler pwnc 2.7, Metrigau ceisiadau tynnu ac adolygu cod).

**9. Trinwch y biblinell fel y lle i amgodio polisi.** Gall offer orfodi rheolau megis "dim mynediad uniongyrchol i gynhyrchu heb docyn," "rhaid i brofion basio," a "ni all yr awdur gymeradwyo ei newid ei hun," gyda'r cyfluniad wedi'i gadw fel cod o dan arferion [seilwaith fel cod](https://en.wikipedia.org/wiki/Infrastructure_as_code). Pan fo'r polisi'n god, gallwch ddangos y rheol a'i hanes i archwiliwr yn lle cofnodion cyfarfod. Mesurwch faint o newidiadau sy'n osgoi'r biblinell, oherwydd bod pob osgoi yn dwll yn y rheolaeth.

### Cadwch y rheolaeth yn onest

**10. Cadwch lwybr cyflym ar gyfer newidiadau brys, ac adolygwch sut y'i defnyddir.** Mae angen cyflymder ar newidiadau brys, felly peidiwch â'u harafu gyda'r ciw arferol. Adolygwch bob un wedyn a gwyliwch am ddrifft i fyny mewn cyfaint, oherwydd bod llwybr brys sy'n haws na'r llwybr arferol yn dod yn rhagosodiad (mae'r mesurau ar gyfer hyn ym mhwnc 4.4, Methiant newid ac ailwaith). Adroddwch gyfaint brys wrth ymyl cyfaint arferol yn yr un olwg.

**11. Archwiliwch gyflawnder cofnodion yn ôl amserlen.** Mae cofnod cyflawn yn helpu yn ystod digwyddiad, pan fo ymatebwyr yn gofyn beth sydd wedi newid yn ddiweddar (gweler pwnc 3.3, Amser ymateb a datrys digwyddiadau). Mesurwch gyflawnder, adolygwch sampl, a thrinwch fylchau fel diffyg yn y ffurflen neu'r integreiddio, nid methiant y ceisydd. Mae [llwybr archwilio](https://en.wikipedia.org/wiki/Audit_trail) a gydosodir wedyn o'r cof yn dystiolaeth wan.

**12. Adolygwch y model awdurdod newid o leiaf yn flynyddol.** Penderfynwch pwy sy'n dal hawliau cymeradwyo ar gyfer pob math a lefel risg, ac ymddeolwch fyrddau sy'n cymeradwyo popeth a welant. Symudwch fwrdd canolog tuag at rôl strategol: cydlynu ar draws timau, datrys gwrthdaro amserlen, a phenderfynu ar gyfaddawdau rhwng amser i'r farchnad a risg. Cofnodwch y penderfyniad a'r dystiolaeth yn y gofrestr metrigau (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Cyfaint newid yn ôl math | Hollti un newid yn llawer o gofnodion bach i edrych yn brysur, uno llawer yn un i edrych yn dawel, neu adael newidiadau anffurfiol oddi ar y llyfrau | Cysoni cyfrifon yn erbyn digwyddiadau defnyddio piblinell bob mis; olrhain cyfran y defnyddiadau heb gofnod newid cyfatebol |
| Cyfran newid safonol | Ail-ddosbarthu gwaith peryglus fel safonol i gyrraedd targed, neu ysgrifennu gweithdrefnau safonol eang sy'n cwmpasu unrhyw beth | Adolygiad sampl chwarterol o ddosbarthu; cyfradd methiant newid yn ôl math (gweler pwnc 4.4, Methiant newid ac ailwaith); log o ail-ddosbarthu |
| Amser arweiniol cymeradwyo | Dechrau'r cloc yn hwyr, ei stopio'n gynnar, ei oedi ar gyfer cwestiynau nad oedd angen eu gofyn, neu gymeradwyo heb ddarllen | Y 85fed canradd wrth ymyl y canolrif; adolygiad sampl o gymeradwyaethau am sylwedd; cyfradd methiant newid yn ôl grŵp cymeradwywyr, byth yn ôl unigolyn |
| Cyfran cymeradwyo awtomataidd | Ychwanegu gwiriadau awtomataidd sydd bob amser yn pasio, neu gyfrif adolygiad cymheiriaid heb sylwadau fel sicrwydd | Adolygiad sampl o gymeradwyaethau awtomataidd a chymheiriaid; diffygion a ddihangodd a chyfradd methiant ar gyfer newidiadau a gymeradwywyd yn awtomatig; cyfrif osgoi |
| Oedran y ciw cymeradwyo | Cau neu dynnu hen geisiadau yn ôl fel bod y ciw yn edrych yn fyr, neu eu symud i gais newydd gyda stamp amser ffres | Cyfrif ceisiadau a dynnwyd yn ôl ac a ail-gyflwynwyd; oedran cais wedi'i fesur o'r cyflwyniad cyntaf |
| Cyflawnder cofnod newid | Llenwi meysydd gofynnol â thestun dalfan, neu greu cofnodion ar ôl y newid i fodloni adroddiad | Nodi cofnodion a grëwyd ar ôl gweithredu; adolygiad ansawdd sampl o destun rhydd; cyfradd dolen-i-ymrwymiad |

Mae darlleniad iach yn dangos y cymysgedd mathau yn symud yn araf tuag at newidiadau safonol gyda darlun methiant sefydlog, amser cymeradwyo canolrifol agos at yr 85fed canradd, ciw heb unrhyw eitem yn llawer hŷn na'r gweddill, a chyfrif osgoi sy'n aros yn agos at sero. Byddwch yn amheus o naid sydyn mewn unrhyw un rhif. Mae haneru amser arweiniol cymeradwyo mewn mis heb newid proses fel arfer yn golygu bod y cloc wedi symud, nid y gwaith.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Manteision | Anfanteision |
| --- | --- | --- |
| Newidiadau safonol wedi'u rhagawdurdodi | Cyflym, cyson, rhad i'w harchwilio; rhyddhau'r awdurdod newid ar gyfer gwaith peryglus | Angen dylunio ymlaen llaw; gall dosbarthu ddrifftio; mae gweithdrefnau eang yn cuddio risg |
| Adolygiad cymheiriaid wedi'i gofnodi yn y biblinell | Adolygiad gan bobl sy'n adnabod y cod; cynhyrchu cofnod yn awtomatig; graddio gyda chyfaint | Mae ansawdd yn dibynnu ar ddiwylliant adolygu; gall timau bach fod heb adolygydd annibynnol; mae rhai rheoleiddwyr yn disgwyl cymeradwywr ar wahân |
| Bwrdd ymgynghorol newid canolog | Gwelededd traws-dîm; dal gwrthdrawiadau amserlen a risg dibyniaeth a rennir | Araf pan gaiff ei ddefnyddio fel giât ar bob newid; annog sypiau mwy o newid a gyflwynir yn llai aml; creu ciw |
| Amser arweiniol cymeradwyo fel metrig pennawd | Hawdd ei esbonio; datgelu ffynhonnell go iawn o oedi | Hawdd ei chwarae; gall wthio cymeradwywyr i ruthro; dweud dim am ansawdd y penderfyniad |
| Cyfran cymeradwyo awtomataidd fel targed | Gwobrwyo buddsoddiad mewn offer a thystiolaeth wedi'i chofnodi | Gall wobrwyo gwiriadau awtomataidd gwan; gall eithrio newidiadau sydd angen barn ddynol mewn gwirionedd |

Anaml mai'r cwestiwn gwell yw "bwrdd neu ddim bwrdd" ac fel arfer "pa newidiadau sydd angen pa fath o graffu, a sut ydym ni'n gwybod?"

## Cwestiynau i'w trafod gyda'ch tîm

**1. Faint o newidiadau a wnaethom fis diwethaf, ac a yw ein holl ffynonellau'n cytuno?**
Gofynnwch i bob grŵp gynhyrchu ei gyfrif ei hun o docynnau, defnyddiadau piblinell, a sianeli anffurfiol. Cymharwch y cyfansymiau. Mae'r bwlch ei hun yn ganfyddiad am newid heb ei gofnodi. Dylai'r hwylusydd gytuno pa ffynhonnell yw'r system cofnodion a phwy sy'n cysoni'r lleill.

**2. Pa rai o'n newidiadau arferol sy'n wirioneddol reolaidd, a beth fyddai ei angen i'w gwneud yn safonol?**
Rhestrwch y pum newid arferol amlaf. Ar gyfer pob un, gofynnwch a yw'r weithdrefn wedi'i dogfennu, a yw'r risg wedi'i deall, ac a oes gan y tîm hanes glân. Mae'r drafodaeth yn aml yn dod o hyd i un neu ddau o ymgeiswyr clir. Cipiwch y gwiriadau a fyddai'n gwneud rhagawdurdodi yn ddiogel, ac enwch pwy fyddai'n cymeradwyo'r weithdrefn safonol.

**3. Ble mae ein cloc cymeradwyo yn dechrau ac yn stopio, a beth sy'n aros y tu mewn iddo?**
Cymerwch y tri newid arferol diwethaf a'u holrhain o'u cyflwyno i'r penderfyniad. Nodwch bob trosglwyddiad, cyfarfod, a chais am wybodaeth. Mae pobl yn aml yn synnu faint o'r aros yw amser calendr rhwng rowndiau o gwestiynau. Cytunwch ar ddiffiniad ysgrifenedig o'r cloc a'r hyn a eithrir.

**4. A ydym yn ymddiried yn ein cymeradwyaethau, neu a ydym yn eu casglu yn unig?**
Tynnwch sampl o gymeradwyaethau diweddar a darllenwch yr adolygiadau. Chwiliwch am gymeradwyaethau a roddwyd o fewn eiliadau neu heb sylwadau. Y nod yw dysgu faint o sicrwydd y mae'r broses yn ei ddarparu mewn gwirionedd, nid dod o hyd i droseddwr. Trafodwch beth fyddai'n gwneud adolygiad yn fwy sylweddol heb ei wneud yn arafach.

**5. Beth yw pwrpas ein bwrdd newid, a beth fyddem yn ei golli pe bai'n rhoi'r gorau i gyfarfod?**
Gofynnwch beth mae'r bwrdd yn ei benderfynu na allai neb arall, a beth mae'n ei gadarnhau yn unig. Mae rhai byrddau'n gwneud gwaith gwerthfawr yn cydlynu ar draws timau ac yn gweld gwrthdrawiadau amserlen. Mae eraill yn ailddatgan penderfyniadau a wnaed eisoes mewn adolygiad cod. Cytunwch pa swyddogaethau sy'n werth eu cadw a pha rai y gellid eu symud i'r biblinell neu fforwm ysgafnach.

**6. Pe baem yn haneru amser cymeradwyo, beth fyddai angen i ni ei weld i wybod ei fod yn ddiogel?**
Enwch y signalau diogelwch cyn y newid, megis y gyfradd methiant ar gyfer newidiadau yn ôl math, y gyfran brys, a digwyddiadau sy'n gysylltiedig â newidiadau diweddar. Cytunwch ar y trothwyon a fyddai'n sbarduno saib. Mae'r sgwrs hon yn troi targed cyflymder yn arbrawf gyda rheol stopio, sef yr amddiffyniad gorau yn erbyn optimeiddio'r peth anghywir.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni yn teimlo amser arweiniol cymeradwyo fel amser segur rhwng newid gorffenedig ac un sy'n rhedeg. Maent eisiau gweld eu rhifau eu hunain yn ôl math, gydag olwg ar y ciw, fel y gallant benderfynu pryd i swpio, pryd i hollti, a phryd i ofyn am newid safonol newydd. Eu cyfraniadau gorau yw templedi cais da, newidiadau bach, a dolenni glân o ymrwymiad i gofnod newid.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau yn defnyddio'r cofnod newid i ateb cwestiwn cyntaf digwyddiad: beth sydd wedi newid yn ddiweddar? Maent yn gwerthfawrogi cyflawnder, dolenni gwasanaeth cywir, ac amserlen y gellir ymddiried ynddi. Maent hefyd yn cario cost newid sy'n mynd o'i le, felly mae ganddynt ddiddordeb dilys mewn rheolau dosbarthu ac mewn adolygu newidiadau brys. Y symudiad gorau yw cyd-berchnogi'r catalog newid safonol gyda thimau cyflawni, fel bod rhagawdurdodi yn adlewyrchu gwybodaeth weithredol.

### Arweinyddiaeth a llywodraethu

Mae arweinwyr a chyrff llywodraethu angen sicrwydd bod newidiadau'n cael eu rheoli, ac mae angen iddynt wybod a yw rheolaeth yn arafu'r sefydliad. Mae'r metrigau hyn yn rhoi'r ddau: cymysgedd mathau, amser aros, a chyfran y cymeradwyaethau a gefnogir gan dystiolaeth wedi'i chofnodi. Gofynnwch am dueddiadau a lledaeniad ar draws gwasanaethau, byth am dabl cynghrair, a'u darllen wrth ymyl mesurau methiant (gweler pwnc 4.4, Methiant newid ac ailwaith). Fel arfer mae ariannu'r awtomeiddio sy'n symud cymeradwyo i'r biblinell yn well buddsoddiad nag ychwanegu adolygydd at y bwrdd.

### Cwsmeriaid a defnyddwyr

Anaml y mae cwsmeriaid yn gweld y broses newid. Maent yn gweld nodweddion newydd yn cyrraedd, atgyweiriadau'n cael eu cludo'n brydlon, a llai o doriadau ar ôl rhyddhad. Mae cymeradwyo araf yn oedi'r atgyweiriadau y gofynasant amdanynt, ac mae cymeradwyo gwan yn peryglu'r toriad y maent yn ei ofni. Lle mae gan wasanaeth ffenestri cynnal a chadw wedi'u hamserlennu, cyhoeddwch y calendr newid mewn iaith blaen.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae cwmni yswiriant rhanbarthol ffuglennol yn rhedeg porth cwsmeriaid gydag wyth tîm cyflawni a CAB sy'n cyfarfod ddwywaith yr wythnos. Mae'r holl rifau isod yn enghreifftiol.

Mae arweinydd gweithrediadau gwasanaeth yn adeiladu'r olwg gyflawn gyntaf o newid. Am y mis, mae'r porth yn dangos tua 420 o newidiadau a gwblhawyd yn ôl tocynnau, 610 o ddefnyddiadau cynhyrchu yn ôl y biblinell, a bwlch sy'n troi allan i fod yn newidiadau a wnaed heb docyn. O'r 420 o newidiadau â thocyn, mae 18 y cant yn safonol, 76 y cant yn arferol, a 6 y cant yn frys (enghreifftiol). Canolrif amser arweiniol cymeradwyo ar gyfer newidiadau arferol yw 2 ddiwrnod gwaith, a'r 85fed canradd yw 7 diwrnod gwaith (enghreifftiol). Mae'r cais hynaf yn y ciw wedi aros 12 diwrnod gwaith.

Pan fo'r timau'n edrych ar yr aros hir, maent yn canfod dau achos. Mae llawer o geisiadau'n eistedd tan gyfarfod nesaf y bwrdd hyd yn oed pan fyddant yn rheolaidd, ac mae eraill yn bownsio'n ôl at y ceisydd sawl gwaith am wybodaeth ar goll. Mae'r tîm yn gwahanu'r ddau gloc ac yn darganfod bod tua hanner yr aros 85fed canradd yn amser yn aros am y ceisydd. Maent yn trwsio'r templed cais yn gyntaf. Yna maent yn dewis y tri newid arferol mwyaf cyffredin: diweddariadau dibyniaeth gyda phrofion sy'n pasio, switshis cyfluniad mewn offeryn baneri nodweddion, a graddio'r gweinyddion cymhwysiad. Maent yn ysgrifennu gweithdrefnau, yn cytuno ar y risg gyda'r awdurdod newid, ac yn eu trosi'n newidiadau safonol gyda chymeradwyaeth wedi'i chofnodi yn y biblinell.

Ddau fis yn ddiweddarach, mae'r gyfran safonol yn codi i 41 y cant (enghreifftiol), mae'r 85fed canradd o amser arweiniol cymeradwyo ar gyfer newidiadau arferol yn disgyn i 4 diwrnod gwaith (enghreifftiol), ac mae'r gyfradd methiant newid yn ôl math yn aros yn wastad, fel yr adroddir yn y mesurau cydymaith (gweler pwnc 4.4, Methiant newid ac ailwaith). Mae'r bwrdd yn symud o adolygu pob newid arferol i adolygu newidiadau risg uchel a'r amserlen fisol.

Mae risg chwarae'r system yn ymddangos yn y sampl chwarterol. Mae un tîm wedi dosbarthu mudo sgema cronfa ddata fel newid safonol oherwydd bod y weithdrefn gynharach ar gyfer "newidiadau cyfluniad" wedi'i geirio'n llac. Mae'r adolygydd sampl yn sylwi nad oedd gan y mudo gynllun dychwelyd. Mae'r tîm yn tynhau'r diffiniadau newid safonol, yn ychwanegu rheol bod newidiadau sgema bob amser yn arferol, ac mae'r log ail-ddosbarthu yn dod yn eitem agenda sefydlog. Y penderfyniad a gofnodwyd yn y gofrestr metrigau yw cadw cyfran newid safonol fel mesur cyd-destun ac nid fel targed.

## Y golwg fesul sector

**Busnes newydd.** Fel arfer ychydig o broses ffurfiol a digon o awtomeiddio piblinell sydd gan fusnes newydd. Mae newidiadau'n digwydd yn gyflym heb gofnod, felly cyflawnder a'r cyswllt o ymrwymiad i ddefnyddio sy'n bwysicaf. Yn aml mae diffiniad un dudalen o'r tri math, ynghyd ag adolygiad wedi'i gofnodi gan y biblinell, yn ddigon.

**Busnes bach.** Yn aml mae gan fusnes bach un neu ddau o bobl sy'n ysgrifennu ac yn rhyddhau newidiadau, felly mae adolygiad annibynnol yn anodd. Defnyddiwch restr newid safonol syml ar gyfer gwaith rheolaidd, mynnwch ail bâr o lygaid ar gyfer unrhyw beth sy'n cyffwrdd â data cwsmeriaid neu arian, a chadwch log plaen o newidiadau. Y mesurau sy'n werth eu holrhain yw cyfaint yn ôl math a chyflawnder cofnodion, oherwydd eu bod yn rhad ac yn helpu yn ystod digwyddiad.

**Menter fawr.** Mae gan fentrau lawer o dimau, llwyfannau a rennir, a systemau etifeddol â risg wahanol. Maent yn tueddu i gael CAB, ac mae'r metrigau'n helpu i benderfynu pa un o'i dasgau a ddylai aros. Y prif waith yw dosbarthu cyson, catalog newid safonol a rennir, a phiblinell sy'n cofnodi tystiolaeth archwilio. Crynhowch yn ôl gwasanaeth a dosbarth risg, nid yn ôl graddio timau.

**Llywodraeth a'r sector cyhoeddus.** Yn aml mae cyrff cyhoeddus yn wynebu gofynion cyfreithiol ar gyfer cymeradwyo, gwahanu dyletswyddau, a chadw cofnodion, ac efallai bod ganddynt ffenestri rhyddhau a yrrir gan gaffael. Dylai'r metrigau nodi pa reolaethau sy'n orfodol a pha rai sy'n arfer lleol, gan na ellir dileu'r cyntaf a gellir dileu'r olaf. Yn aml gall adolygiad cymheiriaid wedi'i gofnodi a thystiolaeth piblinell fodloni'r bwriad, ond cadarnhewch hyn gyda'r archwiliwr perthnasol cyn dibynnu arno (gweler pwnc 8.3, Metrigau cydymffurfio ac archwilio).

## Yr achos busnes: cymhellion, ROI a TCO

Fel arfer y cymhelliad yw'r amser y mae newidiadau'n ei dreulio yn aros. Pan fo gwaith gorffenedig yn ciwio am benderfyniad, mae gwerth yn cael ei oedi, mae sypiau'n tyfu, ac mae pob swp yn cario mwy o risg. Yr ail gymhelliad yw sicrwydd: mae arweinwyr ac archwilwyr eisiau gwybod bod newidiadau'n cael eu rheoli, ac mae tystiolaeth wedi'i chofnodi yn y biblinell yn rhatach i'w chynhyrchu ac yn fwy dibynadwy nag ail-greu. Y trydydd yw ymateb i ddigwyddiadau, oherwydd bod cofnod newid cyflawn a chywir yn byrhau'r chwilio am achos.

Mae casglu'n rhad os yw'r offeryn newid a'r biblinell eisoes yn storio stampiau amser a mathau, ac yn gymedrol os oes rhaid i chi eu hintegreiddio. Mae gweithredu ar y data yn costio mwy: ysgrifennu gweithdrefnau newid safonol, adeiladu gwiriadau piblinell, a hyfforddi cymeradwywyr a cheiswyr. Disgwyliwch y rhan fwyaf o'r gwaith yn y chwarter cyntaf a chost is, gyson ar gyfer samplu ac adolygu wedyn.

Mae'r elw'n ymddangos fel llai o amser aros fesul newid, llai o gyfarfodydd, llai o ymdrech yn paratoi tystiolaeth archwilio, a diagnosis cyflymach yn ystod digwyddiadau. Amcangyfrifwch ef gyda'ch data eich hun: lluoswch y gostyngiad mewn oriau aros cymeradwyo â nifer y newidiadau yr effeithiwyd arnynt ac â chost fesul awr oedi y mae eich partner cyllid yn ei derbyn. Peidiwch â mewnforio ffigurau o sefydliadau eraill. Mae ymchwil DORA yn cefnogi cyfeiriad y ddadl, ond nid yw ei thudalennau'n rhoi cost nac elw, a rhaid i unrhyw ffigur doler ddod o'ch mesuriadau eich hun.

## Gwrthbatrymau a maglau

- **Trin cyfran newid safonol fel targed.** Mae timau'n ail-ddosbarthu gwaith peryglus i daro'r rhif. Defnyddiwch ef fel cyd-destun, adolygwch ddosbarthu drwy sampl, a gwyliwch gyfraddau methiant yn ôl math.
- **Mesur cyflymder cymeradwyo yn unig.** Mae stamp rwber cyflym yn edrych yn ardderchog ac yn cyflawni dim. Parwch amser arweiniol ag adolygiad sampl o sylwedd cymeradwyo a gyda'r darlun methiant.
- **Ychwanegu cymeradwyaethau ar ôl pob digwyddiad.** Mae pob giât newydd yn arafu'r system ac yn aml yn annog sypiau mwy. Edrychwch yn gyntaf ar pam y digwyddodd y methiant, a thrwsiwch yr achos mewn profi, adolygu, neu'r biblinell.
- **Graddio cymeradwywyr neu geiswyr.** Mae cyfrifon fesul person o gymeradwyaethau neu wrthodiadau yn dysgu pobl i gymeradwyo popeth neu ddim. Adroddwch yn ôl gwasanaeth ac yn ôl math o newid.
- **Cyfartaleddu ar draws mathau o newid.** Mae un cymedr yn cymysgu gwaith rheolaidd a pheryglus ac yn cuddio'r ddau. Rhannwch bob amser yn ôl math a dangoswch yr 85fed canradd.
- **Anwybyddu newidiadau a wneir y tu allan i'r broses.** Mae osgoi yn cuddio cyfaint a risg go iawn. Cysonwch ddefnyddiadau piblinell â chofnodion newid a thrinwch fylchau fel diffyg system.
- **Cadw'r bwrdd allan o arfer.** Mae bwrdd sy'n cymeradwyo popeth a wêl yn ychwanegu oedi heb ychwanegu sicrwydd. Adolygwch bob blwyddyn beth mae'n ei benderfynu na allai neb arall, ac ail-ffocwsiwch ef.
- **Casglu'r data a byth benderfynu.** Cysylltwch bob metrig â pherchennog a enwir a fforwm adolygu (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau).

## Model aeddfedrwydd

| Dimensiwn | Cychwyn | Datblygu | Safoni | Rheoli | Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Dosbarthu a chyfaint | Mae mathau'n anffurfiol; nid oes neb yn gwybod y cyfanswm | Mae rhai timau'n cyfrif yn ôl math gyda gwahanol reolau | Un dosbarthiad ysgrifenedig, un system cofnodion | Cymysgedd mathau wedi'i dueddu a'i samplu am gywirdeb | Catalog newid safonol wedi'i rannu â chyflenwyr ac wedi'i ddiwygio wrth i dystiolaeth risg newid |
| Cloc a chiw cymeradwyo | Teimlir aros cymeradwyo ond ni chaiff ei amseru | Mae rhai timau'n rhoi stamp amser ar geisiadau | Un diffiniad o'r cloc, canolrif a chanradd wedi'u dangos | Oedran y ciw wedi'i adolygu'n wythnosol; mae oedi yn gyrru atgyweiriadau wedi'u hariannu | Llif cymeradwyo wedi'i diwnio ar draws timau a chyflenwyr yn erbyn methiant a chanlyniadau cwsmeriaid |
| Awtomeiddio cymeradwyo | Cyfarfod neu e-bost yw cymeradwyo | Mae ychydig o biblinellau'n cofnodi adolygiad cymheiriaid | Adolygiad a gwiriadau wedi'u cofnodi yw'r rhagosodiad ar gyfer newidiadau risg isel | Cyfran awtomataidd wedi'i holrhain gyda chyfrif osgoi a gwiriadau ansawdd sampl | Polisi wedi'i amgodio mewn rheolaethau llwyfan a rennir sy'n addasu wrth i'r darlun risg newid |
| Cofnodion a defnydd | Mae cofnodion yn denau neu wedi'u hysgrifennu wedyn | Mae cofnodion yn bodoli ond yn wahanol o ran ansawdd | Meysydd gofynnol wedi'u cytuno a'u cysylltu â gwasanaethau | Cyflawnder wedi'i archwilio a'i ddefnyddio mewn adolygiadau digwyddiadau | Data newid yn bwydo arferion digwyddiadau, problemau ac archwilio ar draws y sefydliad |

## Rhestr wirio

- [ ] Mae'r tri math o newid a'u meini prawf wedi'u hysgrifennu a'u cytuno.
- [ ] Mae un olwg ar newidiadau a gwblhawyd yn ôl math yn bodoli, wedi'i chysoni â defnyddiadau piblinell.
- [ ] Mae gan y cloc cymeradwyo ddechrau, stop, a rhestr o eithriadau ysgrifenedig.
- [ ] Adroddir amser arweiniol cymeradwyo fel canolrif ac 85fed canradd.
- [ ] Mae oedran y ciw cymeradwyo yn weladwy ac yn cael ei adolygu'n wythnosol.
- [ ] Mae o leiaf un newid arferol mynych wedi'i drosi'n newid safonol gyda gweithdrefn ddogfenedig.
- [ ] Mae adolygiad cymheiriaid a chanlyniadau profion wedi'u cysylltu â chofnodion newid yn awtomatig.
- [ ] Mae sampl chwarterol yn gwirio dosbarthu ac ansawdd cymeradwyo.
- [ ] Mesurir ac adolygir osgoi'r biblinell.
- [ ] Mae gan bob metrig berchennog a enwir, ffordd o chwarae'r system, a rheilen warchod yn y gofrestr metrigau.
- [ ] Nid oes unrhyw adroddiad yn graddio cymeradwywyr neu geiswyr unigol.

## Anogwyr AI

**Drafftiwch ganllaw dosbarthu ar gyfer y tri math o newid.**

```text
Rwy'n gweithio mewn [math o sefydliad] ac rydym yn rhedeg [rhestr o
wasanaethau]. Ein hoffeyn newid yw [offeryn], ein piblinell yw [offeryn
piblinell], a'n cyd-destun rheoleiddiol yw [rheoliadau neu ddim]. Dyma ein
deg newid amlaf: [rhestr]. Drafftiwch ganllaw iaith blaen ar gyfer penderfynu
a yw pob un yn newid safonol, arferol, neu frys, gyda'r meini prawf a
ddefnyddiwyd gennych ac un enghraifft o achos ar y ffin. Peidiwch â dyfeisio
gwerthoedd meincnod na honni bod unrhyw arfer yn bodloni gofyniad archwilio.
Rhestrwch eich rhagdybiaethau a'r cwestiynau y dylwn eu hateb cyn mabwysiadu'r
canllaw.
```

**Dewch o hyd i ble mae amser cymeradwyo yn cael ei dreulio.**

```text
Dyma ddyfyniad o gofnodion newid gyda stampiau amser cyflwyno, cais am
wybodaeth, a phenderfyniad: [data neu ddisgrifiad wedi'i ludo]. Ein proses
gymeradwyo yw [disgrifiad]. Cyfrifwch ganolrif ac 85fed canradd amser arweiniol
cymeradwyo yn ôl math o newid, gan wahanu amser yn aros am y ceisydd oddi wrth
amser yn aros am benderfyniad, ac awgrymwch dri chwestiwn i'w gofyn am yr
achosion hiraf. Peidiwch â dyfeisio ffigurau nad ydynt yn y data, a pheidiwch â
graddio unigolion. Rhestrwch eich rhagdybiaethau ac unrhyw broblemau ansawdd
data y sylwch arnynt.
```

**Gwiriwch y metrigau am risgiau chwarae'r system.**

```text
Rydym yn adrodd y metrigau galluogi newid hyn: [rhestr o fetrigau gyda
diffiniadau]. Y gynulleidfa yw [tîm, arweinyddiaeth, neu gorff llywodraethu]
ac mae'r metrigau'n cael eu defnyddio ar gyfer [pwrpas]. Ar gyfer pob metrig,
rhestrwch ffyrdd credadwy y gellid ei chwyddo, ei guddio, neu ei ystumio heb
welliant go iawn, ac awgrymwch fesur neu arfer rheilen warchod pâr. Peidiwch â
chynnig targedau na gwerthoedd meincnod. Rhestrwch eich rhagdybiaethau a pha
risgiau chwarae'r system yr ydych yn credu sy'n bwysicaf ar gyfer [enw'r
gwasanaeth].
```

**Cynlluniwch symud o gymeradwyo gan fwrdd i gymeradwyo gan biblinell.**

```text
Ein llwybr cymeradwyo presennol ar gyfer [math o newid] yw [disgrifiad], gyda
[nifer] o gymeradwywyr ac aros nodweddiadol wedi'i ddisgrifio fel [disgrifiad].
Mae ein piblinell yn darparu [gwiriadau, profion, offer adolygu]. Cynigiwch gynllun
cam wrth gam i symud newidiadau risg isel i gymeradwyo wedi'i gofnodi, ar sail
piblinell, gan gynnwys y dystiolaeth y byddai angen i ni ei chadw, y signalau
diogelwch i'w gwylio, a rheol stopio. Peidiwch â honni bod y cynllun yn bodloni
unrhyw reoliad na safon. Rhestrwch eich rhagdybiaethau a'r bobl y dylwn
ymgynghori â hwy, megis [archwiliwr, arweinydd diogelwch, awdurdod newid].
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pynciau newid, rhyddhau a digwyddiadau cysylltiedig a'r rheilen warchod a ddylai eistedd wrth ymyl pob metrig galluogi newid.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod fersiwn ddiwygiedig o'r pwnc hwn yn cadw ei glociau, ei ffyrdd o chwarae'r system, a'i groesgyfeiriadau yn gyson.

## Pwyntiau allweddol

- Mae metrigau galluogi newid yn mesur llif a rheolaeth newid: cyfaint yn ôl math, yr aros am gymeradwyaeth, a faint o gymeradwyo y mae'r biblinell yn ei gofnodi'n awtomatig.
- Rhannwch bopeth yn ôl math o newid, adroddwch amseroedd aros fel canolrif ac 85fed canradd, a gwyliwch y ciw byw yn ogystal â'r hanes.
- Symud gwaith rheolaidd i newidiadau safonol a chofnodi adolygiad yn y biblinell yw'r ffordd fwyaf uniongyrchol o fyrhau'r aros, a rhaid ei ddarllen wrth ymyl mesurau methiant.
- Mae cyfran newid safonol a chyflymder cymeradwyo yn hawdd eu chwarae, felly samplwch ddosbarthu ac ansawdd cymeradwyo a chadwch y rhifau oddi ar gardiau sgorio unigol.
- Defnyddiwch y metrigau i benderfynu beth yw pwrpas bwrdd newid, ac ariannwch yr awtomeiddio sy'n gwneud rheolaeth ysgafnach yn ddiogel.

## Cyfeiriadau a darllen pellach

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. DORA (Google Cloud), "Streamlining change approval" and "Software delivery performance metrics," DORA capabilities and guides, https://dora.dev/ (read the pages directly and note the date you consulted them).
3. AXELOS (now PeopleCert), *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
4. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
5. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
6. Wikipedia, [Change management (ITSM)](https://en.wikipedia.org/wiki/Change_management_(ITSM)).
7. Wikipedia, [Separation of duties](https://en.wikipedia.org/wiki/Separation_of_duties).
8. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
9. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
10. Wikipedia, [Infrastructure as code](https://en.wikipedia.org/wiki/Infrastructure_as_code).
11. Wikipedia, [Audit trail](https://en.wikipedia.org/wiki/Audit_trail).
