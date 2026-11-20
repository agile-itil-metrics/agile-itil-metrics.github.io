# Metrigau ôl-groniad a mireinio

**Ciw o addewidion yw ôl-groniad, felly mesurwch faint o addewidion sy'n aros, pa mor hir y maent wedi aros, a faint o'r darn nesaf o waith sydd yn wirioneddol barod, a thrinwch bentwr cynyddol o hen eitemau fel penderfyniad nad ydych wedi'i wneud eto.**

## Crynodeb a chymhelliant

Mae pob tîm sy'n adeiladu neu'n rhedeg gwasanaeth yn cadw rhestr o waith y mae wedi cytuno i'w ystyried. Mewn arfer ystwyth, y rhestr hon yw'r [ôl-groniad cynnyrch](https://en.wikipedia.org/wiki/Product_backlog), set drefnedig o eitemau sy'n disgrifio'r hyn y gellid ei wneud i wella'r cynnyrch. Ar fwrdd llif y cyfatebydd yw'r set o eitemau sy'n aros i'r chwith o'r colofnau a ddechreuwyd. Mewn rheoli gwasanaethau TG (ITSM), fel y disgrifir gan [ITIL](https://en.wikipedia.org/wiki/ITIL), y cyfatebwyr yw'r digwyddiadau, ceisiadau gwasanaeth, problemau a newidiadau agored sy'n aros mewn ciw. Ôl-groniadau yw'r rhain i gyd. Maent yn wahanol o ran pwy sy'n eu llenwi, pa mor gyflym y mae'n rhaid i eitemau adael, a beth mae'n ei olygu i eitem aros.

Daw'r rhan fwyaf o'r data o [system olrhain materion](https://en.wikipedia.org/wiki/Issue_tracking_system) neu offeryn ITSM. Mae metrigau ôl-groniad yn ateb cwestiwn plaen: a yw faint o waith a addawyd yn gymesur â'r capasiti i'w wneud, ac a yw'r gwaith a addawyd yn dal i fod yn werth ei wneud? Nid yw ôl-groniad sy'n tyfu heb derfyn yn disgrifio cynllun. Mae'n disgrifio rhestr ddymuniadau, ac mae pob darllenydd ohoni, o'r perchennog cynnyrch i'r cwsmer a gododd eitem, yn ffurfio ei syniad ei hun o pryd y caiff ei gwneud. Yr ateb gonest yn aml yw "byth", a thelir cost peidio â'i ddweud mewn ymddiriedaeth, mewn amser a dreulir yn ailddarllen hen eitemau, ac mewn penderfyniadau a wneir ar wybodaeth hen.

Mireinio yw'r gweithgarwch sy'n cadw ôl-groniad yn ddefnyddiol. Mewn arfer ystwyth, mireinio ôl-groniad cynnyrch yw'r gwaith parhaus o ychwanegu manylion, amcangyfrifon a threfn at eitemau fel eu bod yn barod i'w dechrau. Mae timau sy'n tynnu gwaith wrth i gapasiti ryddhau yn aml yn galw'r un gweithgarwch yn ailgyflenwi neu'n trin ôl-groniad. Mewn ITSM mae'n ymddangos fel prysbennu, categoreiddio, a threfnu rhestr gwallau hysbys neu broblemau. Mae'r metrigau yn y pwnc hwn yn mesur maint ac oedran yr ôl-groniad, faint o waith sy'n barod, a pha mor dda y mae mireinio'n cadw ffenestr o waith parod o flaen y tîm.

Mae pedwar tymor yn codi dro ar ôl tro. **Eitem** yw cofnod unigol mewn ôl-groniad, megis [stori defnyddiwr](https://en.wikipedia.org/wiki/User_story), nam, cais gwasanaeth neu gofnod problem. **Oedran eitem** yw'r amser a aeth heibio ers i'r eitem fynd i mewn i'r ôl-groniad, sy'n wahanol i oedran eitem waith mewn mesur llif, lle mae'r cloc yn dechrau pan fo gwaith yn dechrau (gweler pwnc 2.1, Mesurau llif). Mae **parod** yn golygu bod eitem yn bodloni diffiniad ysgrifenedig tîm o barod, fel y gallai'r tîm ei dechrau a disgwyl ei gorffen o fewn ffenestr lefel gwasanaeth. **Mireinio** yw'r gwaith o wneud eitemau'n barod ac o dynnu eitemau na chânt eu gwneud byth.

Mae ôl-groniadau cynnyrch a gwasanaeth yn ymddwyn yn wahanol, a chymysgu'r ddau yw'r camgymeriad mwyaf cyffredin yn y maes hwn. Lle y cedwir eitemau'n fwriadol nes bod y perchennog cynnyrch yn penderfynu eu trefn yw ôl-groniad cynnyrch. Mae aros yn gyflwr arferol, ac mae hen eitem yn rheswm i ofyn a yw'n dal yn bwysig. Mae ôl-groniad gwasanaeth o ddigwyddiadau a cheisiadau yn giw ag addewid ynghlwm: mae'r cwsmer yn disgwyl ateb o fewn amser. Mae aros yno yn gost i'r cwsmer o'r funud gyntaf. Dylid tocio ôl-groniad cynnyrch; dylid draenio ôl-groniad gwasanaeth. Rhowch y ddau ar un siart a bydd y siart yn camarwain.

Mae'r olwg ystwyth yn trin yr ôl-groniad fel arteffact byw sy'n eiddo i berchennog cynnyrch, a gedwir yn ddigon byr i'w ddeall ac a drefnir yn ôl gwerth. Mae'r olwg ITIL yn trin cofnodion agored fel gwaith ar y gweill yn erbyn lefel gwasanaeth y cytunwyd arni, sy'n eiddo i arfer. Mae'r ddwy olwg yn rhannu un ffaith o ddamcaniaeth ciwio: bydd ciw sy'n derbyn eitemau'n gyflymach nag y mae'n eu rhyddhau yn tyfu, ac mae'r amser y mae eitem yn aros yn tyfu gyda'r ciw (gweler pwnc 2.3, Gwaith ar y gweill a chiwio). Mae [cyfraith Little](https://en.wikipedia.org/wiki/Little%27s_law) yn cysylltu maint y ciw, y gyfradd y mae eitemau'n gadael ynddi, a'r amser cyfartalog y mae eitem yn ei dreulio yn y system, a dyna'r rheswm pam fod maint ac oedran ôl-groniad yn ddau olwg o'r un peth.

Mae gwahaniaeth olaf yn cadw'r pwnc yn onest. Nid yw ôl-groniad yn fesur o gynhyrchiant nac o ba mor brysur yw tîm. Gall ôl-groniad mawr olygu cynnyrch poblogaidd, rhestr heb ei thocio'n dda, neu dîm heb adnoddau digonol, ac ni all y rhif yn unig ddweud pa un.

## Egwyddorion allweddol

- **Mesurwch oedran yn ogystal â maint.** Mae maint yn dweud faint sy'n aros; mae oedran yn dweud am ba hyd, ac mae'r hynaf o'r eitemau'n dangos lle mae penderfyniadau'n cael eu hosgoi.
- **Cadwch ôl-groniadau cynnyrch a gwasanaeth ar wahân.** Mae syniad a ddelir a chwsmer sy'n aros yn bethau gwahanol, ac mae angen darlleniad ei hun ar bob un.
- **Anelwch at waith parod, nid rhestr hir.** Mae ychydig wythnosau o waith parod, wedi'i drefnu'n dda yn werth mwy na mil o eitemau nad oes neb wedi edrych arnynt.
- **Mae tocio yn nodwedd.** Mae tynnu eitem na wnewch byth yn waith gonest, ac mae cyfradd daflu nad yw byth yn uwch na sero yn rhybudd.
- **Defnyddiwch ddosbarthiadau.** Adroddwch ganolrif a'r 85fed canradd o oedran eitemau a dangoswch yr eitem hynaf, gan fod cyfartaleddau'n cuddio'r gynffon.
- **Disgrifiwch y tîm a'r system.** Mae metrigau ôl-groniad yn dangos sut mae gwaith yn cyrraedd tîm a sut y caiff ei drin, byth sut y perfformiodd unigolyn.
- **Clymwch bob rhif wrth benderfyniad.** Os na fyddai siart ôl-groniad yn newid yr hyn a wnewch nesaf, ymddeolwch ef.

## Diffiniadau metrigau

Mae'r metrigau isod yn berthnasol i un ôl-groniad ar y tro. Dewiswch yr ôl-groniad yn gyntaf (ôl-groniad cynnyrch, ciw digwyddiadau, ciw ceisiadau gwasanaeth, rhestr problemau) ac adroddwch bob metrig fesul ôl-groniad. Mae canraddau'n defnyddio'r dull [canradd](https://en.wikipedia.org/wiki/Percentile) a nodir ym mhwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Maint ôl-groniad | Nifer yr eitemau agored mewn ôl-groniad a enwir ar bwynt mewn amser | Cyfrif eitemau â statws agored neu barod ar ddyddiad y ciplun; eithrir eitemau ar y gweill ac eitemau caeedig | eitemau | Ciplun olrheinydd materion neu offeryn ITSM | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth; rheoli problemau | Ôl-groniad cynnyrch; ciw mewnbwn | Wythnosol |
| Oedran ôl-groniad | Dosbarthiad pa mor hir y mae eitemau agored wedi aros | Ar gyfer pob eitem agored, dyddiad y ciplun llai'r dyddiad y daeth i mewn i'r ôl-groniad; adroddwch y canolrif, yr 85fed canradd a'r eitem hynaf | diwrnodau | Hanes creu a statws olrheinydd materion neu ITSM | Rheoli digwyddiadau; rheoli problemau; gwelliant parhaus | Iechyd ôl-groniad; adolygu eitemau hen | Wythnosol |
| Dyfnder gwaith parod | Pa mor bell ymlaen y mae gan y tîm waith parod | Eitemau sy'n bodloni'r diffiniad o barod / eitemau cyfartalog a orffennwyd yr wythnos dros y chwe chyfnod diwethaf | wythnosau | Baner parod olrheinydd materion a hanes trwybwn | Dadansoddi busnes; rheoli ceisiadau gwasanaeth | Diffiniad o barod; mireinio | Fesul cyfnod cynllunio |
| Cwmpas mireinio | Cyfran y ffenestr tymor agos sy'n barod | Eitemau yn y ddau bythefnos nesaf o waith disgwyliedig (neu'r N uchaf yn ôl trefn) sy'n bodloni'r diffiniad o barod / eitemau yn y ffenestr honno | canran | Trefn olrheinydd materion, baner parod, a gwaith wedi'i gynllunio | Dadansoddi busnes; galluogi newid (ar gyfer newid wedi'i gynllunio) | Mireinio ôl-groniad cynnyrch | Fesul cyfnod cynllunio |
| Cymhareb mewnlif-all-lif ôl-groniad | A yw eitemau'n cyrraedd yn gyflymach nag y maent yn gadael | Eitemau a ychwanegwyd yn y cyfnod / eitemau a dynnwyd o'r ôl-groniad drwy gwblhau neu daflu yn yr un cyfnod; mae cymhareb uwchlaw 1 yn golygu twf | cymhareb | Digwyddiadau creu a datrys olrheinydd materion neu ITSM | Rheoli digwyddiadau; rheoli ceisiadau gwasanaeth; rheoli capasiti a pherfformiad | Cyfraddau cyrraedd a gadael | Wythnosol |
| Cyfradd taflu ôl-groniad | Cyfran yr eitemau sy'n gadael a dynnir heb eu cyflwyno | Eitemau a gaewyd fel "ni wneir," dyblyg neu ddarfodedig / pob eitem sy'n gadael yr ôl-groniad yn y cyfnod; eithrir eitemau a gaewyd fel wedi'u gwneud | canran | Maes datrys olrheinydd materion | Gwelliant parhaus; rheoli problemau (adolygu gwallau hysbys) | Tocio ôl-groniad; trefnu perchennog cynnyrch | Misol |
| Ôl-groniad gwasanaeth tu hwnt i'r targed | Cyfran yr eitemau gwasanaeth agored sy'n hŷn na'u ffenestr ymateb neu ddatrys y cytunwyd arni | Eitemau agored y mae eu hamser a aeth heibio yn fwy na'r targed gwasanaeth / pob eitem agored yn y ciw; mae'r cloc yn rhedeg o logio ac yn oedi dim ond mewn cyflyrau y mae'r diffiniad ysgrifenedig yn eu caniatáu | canran | Offeryn ITSM gyda chloc lefel gwasanaeth | Rheoli lefelau gwasanaeth; rheoli digwyddiadau; rheoli ceisiadau gwasanaeth | Lôn gyflymu; disgwyliad lefel gwasanaeth | Dyddiol neu wythnosol |

Mae angen datgan tri chloc yn blaen. Mae oedran ôl-groniad yn dechrau pan greir yr eitem yn yr ôl-groniad ac yn stopio pan fydd yn gadael drwy gwblhau neu daflu, felly mae eitem a ailagorwyd yn dechrau oedran newydd. Mae dyfnder gwaith parod yn defnyddio trwybwn o eitemau a gwblhawyd yn unig, byth fuanedd wedi'i gynllunio, gan fod buanedd wedi'i gynllunio yn rhagolwg. Mae ôl-groniad gwasanaeth tu hwnt i'r targed yn defnyddio'r cloc lefel gwasanaeth, a all fod yn wahanol i oedran ôl-groniad oherwydd oediadau a ganiateir (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA).

## Argymhellion

### Sefydlwch yr ôl-groniad fel y gellir ei fesur

**1. Enwch bob ôl-groniad a'i berchennog.** Mae gan bob ôl-groniad dan sylw un perchennog, un diben ac un rhestr o fathau o eitemau. Mae ôl-groniad cynnyrch yn perthyn i berchennog cynnyrch; mae ciw digwyddiadau'n perthyn i'r ddesg gwasanaeth neu'r grŵp datrys. Heb berchennog a enwir ni fydd neb yn penderfynu pryd y dylai hen eitem fynd.

**2. Gwahanwch eitemau a ddelir oddi wrth addewidion mewn ciw.** Tagiwch bob eitem naill ai fel syniad y mae'r tîm yn ei ddal i'w drefnu neu ymrwymiad y mae rhywun yn aros arno. Adroddwch faint ac oedran yr ôl-groniad ar wahân ar gyfer pob un. Mae cais cymorth sy'n eistedd mewn ôl-groniad cynnyrch yn addewid mewn ciw yn y lle anghywir, ac mae'n haeddu cloc gwasanaeth.

**3. Ysgrifennwch y diffiniad o barod, a'i gadw'n fyr.** Mae diffiniad o barod yn rhestru'r ychydig bethau y mae tîm angen eu gwybod cyn dechrau: y canlyniad a geisir, maint bras, yr amodau derbyn ac unrhyw ddibyniaeth. Cadwch ef i lond llaw o linellau a'i ddiwygio pan fydd yn peidio â rhagfynegi gwaith esmwyth. Mae rhestr wirio hir yn troi mireinio'n waith papur ac yn gwahodd ticio blychau.

**4. Cofnodwch y dyddiad dod i mewn a'r rheswm gadael.** Mae oedran a chyfradd taflu ill dau yn dibynnu ar ddau faes: y dyddiad y daeth eitem i mewn a'r rheswm y gadawodd. Gwnewch y ddau yn orfodol yn yr offeryn, ac ychwanegwch restr reoledig o resymau gadael megis wedi'i wneud, dyblyg, darfodedig ac ni wneir. Dyddiadau coll yw achos mwyaf cyffredin oedran ôl-groniad na ellir ei ddefnyddio (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).

### Darllenwch maint ac oedran gyda'i gilydd

**5. Adroddwch oedran ôl-groniad fel dosbarthiad.** Dangoswch y canolrif, yr 85fed ganradd a'r eitem hynaf, a histogram yn ôl band oedran megis o dan 30 diwrnod, 30 i 90, 90 i 180, a thros 180. Gall oedran cyfartalog gwastad guddio pentwr cynyddol o eitemau hynafol oherwydd bod eitemau newydd yn tynnu'r cyfartaledd i lawr. Y golwg eitem hynaf yw'r anoddaf i'w guddio.

**6. Defnyddiwch y gymhareb mewnlif-all-lif i weld twf yn gynnar.** Mae cymhareb sy'n gyson uwchlaw 1 yn golygu y bydd yr ôl-groniad yn tyfu, beth bynnag fo'r maint presennol. Plotiwch hi fel ffigur treigl pedair wythnos i lyfnhau gwyliau ac wythnosau rhyddhau. Paru hi â thrwybwn fel y gall y tîm weld a yw twf yn dod o alw cynyddol neu allbwn sy'n gostwng (gweler pwnc 2.1, Mesurau llif).

**7. Trosi maint yn amser gyda thrwybwn.** Rhannwch faint yr ôl-groniad ag eitemau cyfartalog a orffennwyd fesul cyfnod i gael nifer bras o gyfnodau o waith sy'n aros, defnydd uniongyrchol o gyfraith Little. Dywedwch yn glir mai cyfartaledd ydyw, nid addewid, a dangoswch yr ystod gan ddefnyddio trwybwn is ac uwch o gyfnodau diweddar. Mae ôl-groniad cynnyrch o gant o eitemau sy'n hafal i flwyddyn o waith yn sgwrs am gwmpas, nid amserlen.

### Cadwch fireinio'n llifo

**8. Anelwch at ffenestr o waith parod, nid ôl-groniad llawn ohono.** Mireiniwch ddigon ar gyfer yr un i dair wythnos nesaf o waith a dim mwy. Mae manylion a ychwanegir at eitem na ddechreuir am chwe mis fel arfer yn mynd yn hen, felly mesurwch ddyfnder gwaith parod a'i adael i arnofio y tu mewn i fand targed, megis un i dair wythnos o waith, y mae'r tîm yn ei ddewis ac yn ailedrych arno. Mae dyfnder ymhell uwchlaw'r band yn wastraff; mae dyfnder islaw wythnos o waith yn risg o gynllunio segur neu ruthrog.

**9. Mesurwch gwmpas mireinio ar yr eitemau ar fin dechrau.** Mae cwmpas mireinio yn edrych dim ond ar frig y drefn. Mae'n ateb y cwestiwn y bydd y cyfarfod cynllunio yn ei ofyn: pe baem yn dechrau nawr, a fyddai'r eitemau nesaf yn barod? Adroddwch ef ychydig cyn cynllunio, pan ellir trwsio methiant o hyd, yn hytrach nag wedyn.

**10. Gwnewch fireinio'n weithgarwch rheolaidd, byr.** Mae arweiniad ystwyth, gan gynnwys Canllaw Scrum, yn disgrifio mireinio fel gweithgarwch parhaus ac yn gadael ei ffurf i'r tîm. Mae llawer o dimau'n canfod bod sesiwn fer, aml yn gweithio'n well nag un cyfarfod hir.

### Tociwch ac adolygwch

**11. Tociwch ar amserlen ac adroddwch y gyfradd taflu.** Adolygwch yr eitemau hynaf bob mis a gofynnwch am bob un: a fyddwn yn gwneud hyn yn y chwe mis nesaf, ac os na, pam ei gadw? Nid methiant yw cau eitem gyda rheswm a nodir. Mae tîm nad yw byth yn taflu mae'n debyg yn celcio, ac mae un sy'n taflu'r rhan fwyaf o'r hyn y mae'n ei dderbyn mae'n debyg yn derbyn gwaith y dylai fod wedi'i wrthod wrth y drws.

**12. Trinwch ôl-groniadau gwasanaeth drwy ddraenio, nid tocio.** Ar gyfer ciwiau digwyddiadau a cheisiadau, y cwestiwn cyntaf yw a yw eitemau o fewn eu ffenestr gwasanaeth. Olrheiniwch y gyfran tu hwnt i'r targed a'r eitem agored hynaf, a chadwch y lôn gyflymu ar gyfer eitemau na allant aros. Mae rhestrau problemau a gwallau hysbys yn eistedd rhwng y ddau fyd: fe'u delir nes bod atgyweiriad yn cael ei ariannu, felly adolygwch hwy fel ôl-groniad cynnyrch, gyda dyddiad adolygu a nodir ar gyfer pob cofnod (gweler pwnc 4.6, Dyled dechnegol a gwallau hysbys).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Maint ôl-groniad | Cau eitemau mewn swmp fel darfodedig, hollti eitemau i edrych yn brysur, neu guddio gwaith mewn rhestrau ochr a thaenlenni | Cyfradd taflu ôl-groniad gyda rhesymau gadael; cymharu'r offeryn o bryd i'w gilydd â'r rhestr go iawn o geisiadau; adborth cwsmeriaid ar eitemau a ollyngwyd |
| Oedran ôl-groniad | Ailosod y dyddiad dod i mewn drwy glonio neu ail-greu hen eitemau; symud eitemau rhwng ôl-groniadau; ailagor yn lle ail-godi i newid y cloc | Archwilio eitemau wedi'u clonio a'u symud; adolygu'r eitem hynaf; oedran wedi'i fesur o'r creu cyntaf ar draws cofnodion cysylltiedig |
| Dyfnder gwaith parod | Marcio eitemau fel parod heb eu gwirio; chwyddo dyfnder drwy ysgrifennu eitemau manwl ar gyfer gwaith gwerth isel | Sampl o eitemau parod wedi'u darllen yn erbyn y diffiniad; ailwaith neu gyfradd dychwelyd i fireinio pan fo gwaith yn dechrau |
| Cwmpas mireinio | Ticio'r faner parod i fodloni'r rhif; culhau'r ffenestr fel bod llai o eitemau'n cyfrif | Cyfrif eitemau a anfonwyd yn ôl ar ôl cynllunio; llwyddiant nod cyflawni a newid cwmpas canol-cyfnod (gweler pwnc 2.5, Metrigau rhagweld a chynllunio cyflawni) |
| Cymhareb mewnlif-all-lif ôl-groniad | Cau eitemau hawdd yn gyflym i wthio all-lif, neu wrthod eitemau newydd wrth y drws i ddal mewnlif i lawr | Oedran yr eitemau hynaf; cyfradd taflu; cyfran y ceisiadau a wrthodwyd heb reswm; anghenion heb eu diwallu a adroddir gan gwsmeriaid |
| Cyfradd taflu ôl-groniad | Taflu eitemau y mae defnyddwyr yn dal eu heisiau, i grebachu maint; neu osgoi taflu fel bod y rhif yn edrych yn dyner | Adolygu sampl o eitemau a daflwyd gyda'r ceisydd; cyfradd ailagor ac ail-godi ar gyfer eitemau a daflwyd |
| Ôl-groniad gwasanaeth tu hwnt i'r targed | Oedi'r cloc gyda chyflwr aros-am-gwsmer, israddio blaenoriaeth, neu gau ac ailagor i ailosod y ffenestr | Cyfran yr amser mewn cyflyrau oedi; cyfradd ailagor (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau); bodlonrwydd defnyddwyr ar docynnau caeedig |

Mae darlleniad iach yn dangos ôl-groniad y mae ei faint yn gyson neu'n disgyn yn araf, y mae ei eitemau hynaf yn ychydig a phob un â pherchennog a rheswm a nodir, a'i ffenestr tymor agos yn bennaf yn barod. Mae'r gymhareb mewnlif-all-lif yn hofran ger 1, mae'r gyfradd taflu yn nac yn sero nac yn dominyddu, ac mae cwmpas mireinio yn codi heb i waith wedi'i gynllunio ddod yn fwy bregus. Pan fo'r rhifau'n edrych yn dda ond bod cwsmeriaid yn dal i adrodd na ddigwydd dim i'w ceisiadau, ymddiriedwch yn y cwsmeriaid ac archwiliwch y data.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Ôl-groniad cynnyrch bach, wedi'i docio'n egnïol | Hawdd ei ddeall a'i gadw'n drefnus; gonest am gapasiti | Risg o daflu syniadau a fyddai wedi bod yn bwysig yn ddiweddarach; gall ceiswyr deimlo eu bod yn cael eu hanwybyddu |
| Ôl-groniad mawr, wedi'i gadw | Cadw pob syniad a chais; hanes defnyddiol | Costus i'w ddarllen; mae eitemau hen yn camarwain cynllunio ac yn cuddio blaenoriaethau go iawn |
| Ffenestr barod ddwfn (llawer o wythnosau wedi'u mireinio) | Cynllunio esmwyth; llai o syrpreisys pan fo gwaith yn dechrau | Mae manylion wedi'u mireinio yn mynd yn hen; ymdrech wedi'i gwario ar waith na all ddechrau byth |
| Ffenestr barod fas (tua wythnos) | Ychydig o fanylion wedi'u gwastraffu; yn aros yn hyblyg | Gall cynllunio stopio pan nad yw ychydig o eitemau'n barod; llai o amser arweiniol i weld dibyniaethau |
| Diffiniad llym o barod | Llai o ddechrau amwys; gwaith rhagweladwy | Gall ddod yn borth sy'n arafu llif ac yn annog llenwi blychau |
| Diffiniad ysgafn o barod | Cyflym; yn ymddiried yn y tîm | Mwy o ddarganfod yn ystod y gwaith; mwy o newid canol-cyfnod |

Yr ateb ymarferol yw dal yr ôl-groniad yn ddigon bach i'w ddarllen mewn un eisteddiad, cadw ffenestr barod o tua un i dair wythnos o waith, a gadael i'r diffiniad o barod aros yn ddigon byr i bobl ei gofio. Mae ciwiau gwasanaeth angen y safbwynt gyferbyn: nid bach yw'r nod, gorffen o fewn y ffenestr y cytunwyd arni yw. Dewiswch y gell ym mhob rhes sy'n gweddu i'ch cyd-destun ac ysgrifennwch y rheswm.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Pe baem yn rhoi'r gorau i ychwanegu eitemau heddiw, pa mor hir y byddai'n ei gymryd i glirio'r ôl-groniad ar ein trwybwn diweddar, ac a yw'r rhif hwnnw'n teimlo'n gredadwy?**
Dechreuwch drwy rannu maint yr ôl-groniad â nifer nodweddiadol yr eitemau a orffennwyd fesul cyfnod a dangoswch yr ystod gan ddefnyddio'r cyfnodau diweddar gorau a gwaethaf. Gofynnwch a yw'r tîm yn credu'r canlyniad, a ble byddai'r amser yn mynd mewn gwirionedd. Os yw'r rhif yn hirach na blwyddyn ar gyfer ôl-groniad cynnyrch, gofynnwch pa eitemau y gellid eu tynnu heb i neb sylwi.

**2. Pa rai yw'r pum eitem hynaf, a phwy a benderfynodd y dylent fod yma o hyd?**
Darllenwch y pum eitem hynaf yn uchel gyda'u dyddiadau dod i mewn. Ar gyfer pob un, gofynnwch am berchennog a enwir a rheswm ei bod yn aros, megis aros am ddibyniaeth, gohirio bwriadol, neu esgeulustod. Cytunwch ar weithred ar gyfer pob un: ei threfnu, ei thaflu, neu ysgrifennu pam ei bod yn aros a phryd i edrych eto.

**3. Beth mae "parod" yn ei olygu yma, ac a ddaeth ein syrpreisys diweddar o eitemau nad oeddent?**
Gofynnwch i bob person ysgrifennu'r diffiniad o barod yn ei eiriau ei hun, yna cymharwch. Gwahaniaethau yw'r canfyddiad cyntaf. Edrychwch yn ôl ar eitemau a achosodd gwestiynau canol-cyfnod neu ailwaith a gofynnwch beth fyddai wedi eu gwneud yn barod. Dylai'r hwylusydd wrthsefyll ychwanegu eitemau rhestr wirio ar gyfer pob syrpreis a dewis yn lle hynny yr un neu ddwy a fyddai wedi atal y boen fwyaf.

**4. Pa rai o'n hôl-groniadau sy'n dal syniadau, a pha rai sy'n dal addewidion i rywun?**
Rhestrwch bob ôl-groniad a didolwch ei eitemau i'r ddau fath. Mae ceisiadau cymorth, digwyddiadau ac eitemau cwsmer ymrwymedig yn addewidion ac angen cloc gwasanaeth; mae syniadau a gwelliannau'n cael eu dal i'w trefnu. Trafodwch ble mae'r ddau yn cael eu cymysgu a beth mae hynny'n ei wneud i'r siart oedran. Gall y canlyniad fod mor syml â label a hidlydd sy'n gadael i bob un gael ei adrodd ar ei ben ei hun.

**5. Pryd y tynnom eitemau yn fwriadol ddiwethaf, a sut ymatebodd y ceiswyr?**
Mae tocio'n aml yn teimlo'n beryglus, felly edrychwch ar y dystiolaeth. Gwiriwch y gyfradd taflu a samplwch ychydig o eitemau a daflwyd. Gofynnwch a ddywedwyd wrth y ceisydd, ac a ofynnodd unrhyw un am eitem yn ôl. Dylai'r hwylusydd helpu'r grŵp i gytuno ar neges syml i geiswyr ("nid ydym yn bwriadu gwneud hyn; dyma pam; codwch hi eto os bydd amgylchiadau'n newid") fel bod tocio'n dod yn rheolaidd a pharchus.

**6. Pe baem eisiau i'n siartiau ôl-groniad edrych yn well heb helpu neb, beth fyddem yn ei wneud?**
Rhedwch yr adolygiad chwarae'r system o bwnc 1.2 ar bob metrig ôl-groniad. Atebion tebygol yw cau hen eitemau mewn swmp, clonio eitemau i ailosod oedran, marcio eitemau fel parod yn gynnar, a chulhau'r ffenestr y mae cwmpas yn ei chyfrif. Ar gyfer pob ateb, gwiriwch a fyddai'r rheilen warchod yn y tabl uchod yn ei ddal. Cofnodwch y rhai a fyddai'n llithro drwodd a dewiswch un gwiriad newydd i roi cynnig arno'r chwarter nesaf.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n defnyddio metrigau ôl-groniad i gadw cynllunio'n dawel. Mae dyfnder gwaith parod a chwmpas mireinio yn dweud wrth y tîm a fydd y sesiwn gynllunio nesaf yn esmwyth, ac mae oedran ôl-groniad yn dangos pa addewidion sy'n pydru'n dawel. Arferiad da yw adolygu oedran, mewnlif-all-lif a dyfnder parod am ychydig funudau ym mhob sesiwn fireinio, yna weithredu ar un peth. Dylai timau gyhoeddi set fach, sefydlog tuag allan a chadw bandiau oedran manwl at eu defnydd eu hunain (gweler pwnc 2.5, Metrigau rhagweld a chynllunio cyflawni).

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau'n rhedeg ciwiau â chlociau. Eu darlleniad canolog yw cyfran yr eitemau agored tu hwnt i'r targed ynghyd â'r eitem agored hynaf, wedi'u hollti yn ôl blaenoriaeth a chyflwr oedi. Mae rhestrau problemau a gwallau hysbys angen dyddiad adolygu ar bob cofnod fel nad yw eitemau a ddelir yn dod yn barhaol. Dylai timau hefyd wylio'r gymhareb mewnlif-all-lif ar gyfer y ciw digwyddiadau, gan fod cymhareb uwchlaw 1 dros sawl wythnos yn arwydd cynnar o dan-staffio neu achos sy'n codi dro ar ôl tro (gweler pwnc 3.2, Nifer a blaenoriaeth digwyddiadau).

### Arweinyddiaeth a llywodraethu

Mae arweinwyr yn gweld ôl-groniad fel datganiad o fwriad. Mae ôl-groniad mawr iawn yn dweud wrthynt fod y sefydliad yn addo mwy nag y gall ei gyflawni, a gall un sy'n crebachu'n gyflym olygu tocio neu alw is. Gofynnwch pa benderfyniad y mae'r rhif yn ei hysbysu. Ariennwch amser ar gyfer mireinio a thocio, osgowch dargedau ar faint ôl-groniad crai, a gofynnwch am y dosbarthiad oedran a'r rhesymau taflu pan gyflwynir ffigur maint (gweler pwnc 1.3, Canlyniadau yn hytrach nag allbwn: dewis beth i'w fesur).

### Cwsmeriaid a defnyddwyr

Mae cwsmeriaid yn profi'r ôl-groniad fel distawrwydd. Mae eitem a godwyd chwe mis yn ôl heb ateb yn dweud mwy nag unrhyw siart. Mae defnyddwyr yn gwerthfawrogi cael y gwir: mae wedi'i gynllunio, nid yw wedi'i gynllunio a dyma pam, neu mae'n aros ar ddibyniaeth. Rhowch ffordd i geiswyr weld statws eu heitemau, a thriniwch eitemau a daflwyd fel tasg gyfathrebu, nid glanhau data (gweler pwnc 3.5, Metrigau cyflawni ceisiadau gwasanaeth).

## Yn ymarferol: enghraifft ITIL ystwyth

Mae yswiriwr rhanbarthol o faint canolig yn rhedeg cymhwysiad hawliadau mewnol gyda thîm cynnyrch a desg gwasanaeth ar wahân. Mae'r rhifau yn yr enghraifft hon yn enghreifftiol.

Mae ôl-groniad y tîm cynnyrch yn dal 412 eitem. Y canolrif oedran yw 138 diwrnod, yr 85fed ganradd yw 410 diwrnod, a'r eitem hynaf yn 29 mis oed. Mae'r tîm yn gorffen tua 14 eitem y pythefnos, felly mae'r ôl-groniad tua 29 pythefnos o waith ar y trwybwn diweddar. Mae cwmpas mireinio ar y ddau bythefnos nesaf yn 55 y cant, ac mae cynllunio'n aml yn rhedeg yn hir wrth i'r tîm ddarganfod manylion coll. Mae'r ddesg gwasanaeth yn dangos darlun gwahanol: 63 cais agored, ac mae 9 y cant ohonynt tu hwnt i'r targed, a chymhareb mewnlif-all-lif yn agos at 1.

Mae perchennog cynnyrch yn gofyn am rif llai ac yn cynnig targed o lai na 200 eitem erbyn diwedd y chwarter. Nid yw'r tîm eisiau trin hynny fel nod ar ei ben ei hun. Yn lle hynny, maent yn cynnal adolygiad. Maent yn tagio eitemau fel syniadau a ddelir neu waith a addawyd ac yn canfod bod 38 o'r 412 yn geisiadau cymorth y dywedwyd wrth gwsmeriaid y byddent yn cael eu trin. Maent yn eu symud i'r ciw gwasanaeth gyda chloc gwasanaeth. Maent yn darllen y 40 eitem hynaf ac yn canfod bod 22 yn ddarfodedig neu'n ddyblygion. Maent yn eu cau gyda rhesymau gadael ac yn dweud wrth y ceiswyr. Maent yn gosod band parod o un i ddau bythefnos ac yn treulio sesiwn wythnosol fer yn mireinio dim ond brig y drefn.

Dros dri phythefnos mae maint yr ôl-groniad yn disgyn i 301 ac mae'r gyfradd taflu ar gyfer y mis yn 31 y cant, sy'n uchel yn fwriadol ac wedi'i nodi yn yr adolygiad. Mae cwmpas mireinio yn codi i 88 y cant. Mae cipolwg cyflym ar y data yn datgelu risg chwarae'r system: disgynnodd maint yr ôl-groniad yn gyflymach na'r disgwyl oherwydd bod dau aelod tîm wedi clonio llond llaw o hen eitemau yn rhai ffres i osgoi'r rhestr hen eitemau. Mae'r tîm yn dal hyn pan nad yw'r siart eitem hynaf yn cyfateb mwyach i'r sampl a daflwyd. Maent yn cytuno i fesur oedran o'r creu cyntaf ar draws cofnodion cysylltiedig ac i adolygu clonau ym mhob sesiwn docio. Y penderfyniad a gofnodir ar gyfer yr arweinyddiaeth yw gollwng y targed maint ac yn lle hynny adrodd y dosbarthiad oedran, y ffenestr barod a'r rhesymau taflu bob chwarter.

## Y golwg fesul sector

**Busnes newydd.** Mae'r ôl-groniad yn aml yn un rhestr ym mhen y sylfaenydd neu fwrdd syml. Olrheiniwch oedran yr eitemau hynaf a pha un a yw'r darn nesaf o waith yn barod yn unig. Tociwch yn galed ac yn aml, gan mai'r ateb cywir i syniad tri mis oed yn aml yw ei anghofio.

**Busnes bach.** Mae gwaith cynnyrch a gwasanaeth fel arfer yn rhannu tîm, felly mae'r ôl-groniad yn cymysgu syniadau a ddelir ac addewidion cwsmeriaid. Gwahanwch hwy gyda label yn gynnar. Mae un rhestr a ddarllenir yn wythnosol mewn cyfarfod byr yn curo metrigau cywrain. Gwyliwch oedran eitemau sy'n wynebu cwsmeriaid yn gyntaf, oherwydd gall un cais anghofiedig gostio perthynas.

**Menter fawr.** Mae llawer o dimau a llawer o giwiau yn lluosi'r ffyrdd o gamddarllen ôl-groniad. Diffiniwch y metrigau unwaith, gyda'r clociau a'r rhesymau gadael, ac osgowch gyfuno maint ôl-groniad cynnyrch yn un ffigur portffolio. Cymharwch dîm â'i hanes ei hun, byth â thîm arall â gwaith gwahanol (gweler pwnc 2.4, Metrigau ffrwd werth). Mae rhestrau problemau a gwallau hysbys yn haeddu eu rhythm adolygu eu hunain.

**Llywodraeth a'r sector cyhoeddus.** Mae ymrwymiadau i ddinasyddion, amseroedd ymateb statudol a llwybrau archwilio yn llunio'r ciwiau gwasanaeth. Trinwch y clociau statudol fel mewnbynnau sefydlog ac adroddwch y gyfran tu hwnt i'r targed gyda'r diffiniadau a ddefnyddiwyd. Gall rowndiau cyllido a chaffael gyfyngu ôl-groniadau cynnyrch, felly efallai y bydd angen i'r ffenestr barod fod yn hirach nag mewn tîm masnachol. Cadwch resymau taflu yn weladwy, gan fod atebolrwydd cyhoeddus yn gwneud gollwng tawel yn beryglus.

## Yr achos busnes: cymhellion, ROI a TCO

Mae cost y metrigau hyn yn gymedrol. Mae'r rhan fwyaf o'r data eisoes yn yr olrheinydd materion neu'r offeryn ITSM. Y costau yw dyddiad dod i mewn a rheswm gadael gorfodol, sesiwn docio fisol fer, ychydig funudau mewn mireinio i edrych ar y siartiau oedran a pharod, a rhywfaint o ymdrech i wahanu ôl-groniadau cynnyrch a gwasanaeth. Mae taenlen neu adroddiadau adeiledig yr offeryn yn ddigon i ddechrau, ac nid oes angen prynu cynnyrch newydd.

Daw'r elw o osgoi gwastraff ac addewidion cliriach. Mae timau sy'n cadw ffenestr barod yn treulio llai o amser cynllunio yn ailddarganfod beth mae eitem yn ei olygu, ac mae timau sy'n tocio yn rhoi'r gorau i ailddarllen eitemau na chânt eu gwneud byth. Mae cwsmeriaid yn cael atebion gonest yn gynt, sy'n lleihau cysylltiadau dro ar ôl tro a dwysáu. Disgrifiwch y budd o ran patrymau y gall y tîm eu gwirio drosto'i hun: sesiynau cynllunio byrrach, llai o eitemau'n dychwelyd i fireinio ar ôl i waith ddechrau, llai o erlidwyr am hen geisiadau, a llai o syrpreisys pan fo'r arweinyddiaeth yn gofyn beth sydd yn y bibell. Nid yw'r pwnc hwn yn cynnig canran, gan na ellir rhoi un heb ffynhonnell. Mesurwch eich llinell sylfaen eich hun am chwarter a chymharwch.

## Gwrthbatrymau a maglau

- **Trin maint ôl-groniad fel sgôr cynhyrchiant neu berfformiad.** Mae maint yn dibynnu ar alw, cwmpas ac arferion tocio. Adroddwch faint gydag oedran a rhesymau taflu, a pheidiwch byth â chymharu timau arno.
- **Cymysgu syniadau a ddelir ac addewidion cwsmeriaid mewn un rhestr.** Mae'r siart oedran wedyn yn darllen fel esgeulustod ac mae'r cloc gwasanaeth ar goll. Hollwch hwy gyda label ac adroddwch bob un ar wahân.
- **Mireinio popeth.** Mae eitemau manwl na ddechreuir am fisoedd yn mynd yn hen. Cadwch ffenestr barod a mireiniwch ychydig o flaen yr angen.
- **Peidio byth â thaflu.** Mae rhestr sy'n tyfu'n barhaus yn gwneud pob datganiad am gwmpas yn anwir. Tociwch ar amserlen a chofnodwch y rheswm bob tro.
- **Ailosod oedran drwy glonio neu symud eitemau.** Mae'n gwenieithu'r siart ac yn colli hanes. Mesurwch oedran o'r creu cyntaf ar draws cofnodion cysylltiedig ac archwiliwch glonau.
- **Diffiniad o barod a ddefnyddir fel porth.** Os yw'n rhwystro gwaith y gallai'r tîm ei ddechrau'n ddiogel, mae'n arafu llif. Cadwch ef yn fyr a gadewch i'r tîm ei ddiystyru gyda rheswm a nodir.
- **Targedau ar faint crai.** Mae targed o lai na N eitem yn gwahodd cau swmp. Targedwch oedran yr eitemau hynaf neu'r gyfran tu hwnt i'r targed gwasanaeth, gyda rheilen warchod.
- **Defnyddio oedran cyfartalog.** Mae eitemau newydd yn tynnu'r cyfartaledd i lawr tra bo hen rai'n pentyrru. Dangoswch y canolrif, yr 85fed ganradd a'r eitem hynaf.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniadau a data | Dyddiadau dod i mewn a rhesymau gadael ar goll neu'n anghyson | Mae rhai timau'n cofnodi dyddiadau; mae diffiniadau o barod yn wahanol | Un diffiniad ysgrifenedig o barod ac o oedran ôl-groniad; dyddiad dod i mewn a rheswm gadael gorfodol | Ansawdd data wedi'i samplo; oedran wedi'i fesur ar draws clonau a symudiadau | Diffiniadau wedi'u rhannu ar draws timau a chyflenwyr a'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Iechyd ôl-groniad | Ôl-groniad yn tyfu heb i neb sylwi; dim tocio | Glanhau achlysurol pan fo'r rhestr yn mynd yn anhydrin | Tocio wedi'i drefnu; ôl-groniadau cynnyrch a gwasanaeth wedi'u gwahanu | Maint, oedran, mewnlif-all-lif a chyfradd taflu wedi'u tueddu a'u hadolygu gyda rheilen warchod | Polisi ôl-groniad wedi'i diwnio ar draws timau i alw a chapasiti; cwsmeriaid yn gweld statws eu heitemau |
| Mireinio | Manylion ad hoc wedi'u hychwanegu wrth gynllunio | Sesiynau rheolaidd i rai timau | Mireinio byr, rheolaidd gyda ffenestr barod y cytunwyd arni | Cwmpas a dyfnder parod wedi'u hadolygu a'u cysylltu â chanlyniadau cyflawni | Mireinio wedi'i rannu ar draws timau a dibyniaethau; mae'r ffenestr yn addasu i amodau |
| Defnydd mewn penderfyniadau | Rhifau wedi'u dangos dim ond pan fydd rhywbeth yn mynd o'i le | Wedi'u hadrodd i'r arweinyddiaeth heb drafodaeth | Mae'r tîm yn adolygu oedran a dyfnder parod mewn mireinio | Mae gwaith gwella wedi'i ariannu yn dilyn yr adolygiad | Mae tystiolaeth ôl-groniad yn hysbysu penderfyniadau portffolio a chapasiti ar draws y sefydliad |

## Rhestr wirio

- [ ] Mae gan bob ôl-groniad berchennog a enwir a diben a nodir.
- [ ] Labelir syniadau a ddelir ac addewidion cwsmeriaid a'u hadrodd ar wahân.
- [ ] Mae gan bob eitem ddyddiad dod i mewn gorfodol a rheswm gadael o restr reoledig.
- [ ] Mae gan y tîm ddiffiniad ysgrifenedig byr o barod.
- [ ] Adroddir oedran ôl-groniad fel canolrif, 85fed canradd a'r eitem hynaf.
- [ ] Dangosir y gymhareb mewnlif-all-lif fel ffigur treigl wrth ymyl trwybwn.
- [ ] Cytunir ar ffenestr barod, ac adroddir dyfnder gwaith parod yn ei herbyn.
- [ ] Adroddir cwmpas mireinio cyn cynllunio, nid ar ôl.
- [ ] Mae sesiwn docio fisol yn y calendr ac adroddir y gyfradd taflu.
- [ ] Mae ciwiau gwasanaeth yn dangos y gyfran tu hwnt i'r targed a'r defnydd o gyflwr oedi.
- [ ] Rhedwyd yr adolygiad chwarae'r system ar gyfer metrigau ôl-groniad y chwarter hwn.

## Anogwyr AI

**Asesu iechyd ôl-groniad.**

```text
Rwy'n gweithio gyda [enw'r tîm], sy'n berchen ar [math o ôl-groniad, megis ôl-groniad
cynnyrch neu giw digwyddiadau]. Dyma grynodeb o'r ôl-groniad: [nifer yr eitemau],
dosbarthiad oedran [canolrif, 85fed canradd, eitem hynaf], eitemau a orffennwyd
fesul [wythnos] [rhifau], eitemau a ychwanegwyd fesul [wythnos] [rhifau], a
rhesymau taflu [cyfrifon]. Ein diffiniad o barod yw: [diffiniad].

Esboniwch beth allai'r cyfuniad hwn o ffigurau ei olygu, gan restru o leiaf tri
esboniad gwahanol, ac awgrymwch pa ddata ychwanegol fyddai'n eu gwahaniaethu.
Peidiwch â dyfeisio gwerthoedd meincnod na thargedau. Rhestrwch eich rhagdybiaethau
ac unrhyw beth na allech ei benderfynu o'r hyn a roddais i chi.
```

**Drafftiwch ddiffiniad o barod.**

```text
Helpwch fi i ddrafftio diffiniad byr o barod ar gyfer [enw'r tîm], sy'n gweithio
ar [math o waith]. Ein problemau presennol gydag eitemau anbarod yw: [rhestr o
broblemau]. Cynigiwch ddim mwy na chwe maen prawf, dywedwch pa broblem y mae pob
maen prawf yn mynd i'r afael â hi, a disgrifiwch sut y gallai'r tîm wirio pob un
mewn llai na munud. Awgrymwch hefyd pryd y dylid caniatáu i'r tîm ddechrau eitem
nad yw'n bodloni'r diffiniad. Peidiwch â chopïo unrhyw destun fframwaith.
Rhestrwch eich rhagdybiaethau.
```

**Cynlluniwch sesiwn docio ôl-groniad.**

```text
Cynlluniwch sesiwn docio [hyd amser] ar gyfer ôl-groniad [enw'r tîm]. Mae gan yr
ôl-groniad [nifer] o eitemau, a'r hynaf yw [oedran]. Y rhesymau gadael a
ddefnyddiwn yw [rhestr]. Cynigiwch agenda, y cwestiynau i'w gofyn am bob hen
eitem, neges syml i'w hanfon at geiswyr y tynnir eu heitemau, a'r data i'w
gofnodi wedyn. Nodwch ffyrdd y gellid chwarae'r sesiwn a sut i'w dal. Peidiwch
â dyfeisio ystadegau. Rhestrwch eich rhagdybiaethau.
```

**Gwahanwch waith cynnyrch a gwasanaeth mewn ôl-groniad cymysg.**

```text
Dyma sampl o [nifer] o eitemau o'n hôl-groniad cyfun yn [enw'r offeryn], gyda
meysydd [rhestr meysydd]. Dosbarthwch bob eitem fel syniad a ddelir, addewid
cwsmer â disgwyliad gwasanaeth, neu aneglur, ac esboniwch eich rhesymu. Yna
awgrymwch labeli a rheol syml ar gyfer llwybro eitemau yn y dyfodol. Adroddwch
batrymau, nid unigolion, a pheidiwch â dyfalu ffeithiau nad ydynt yn y data.
Rhestrwch eich rhagdybiaethau a'r eitemau na allech eu dosbarthu.

[gludwch eitemau, gyda data personol wedi'i dynnu]
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r rheilen warchod pâr a'r pynciau cyfagos ar gyfer metrig ôl-groniad yr ydych ar fin ei gyflwyno.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod pwnc ôl-groniad diwygiedig yn cadw ei ffyrdd o chwarae'r system, rheiliau gwarchod a chroesgyfeiriadau yn gyson.

## Pwyntiau allweddol

- Ciw o addewidion yw ôl-groniad, felly darllenwch faint ac oedran gyda'i gilydd a dangoswch yr eitemau hynaf.
- Cadwch syniadau a ddelir ac addewidion cwsmeriaid mewn golygon ar wahân, gan fod aros yn golygu pethau gwahanol ym mhob un.
- Anelwch at ffenestr fer o waith parod a mesurwch gwmpas mireinio ar yr eitemau ar fin dechrau.
- Tociwch ar amserlen, cofnodwch pam mae eitemau'n gadael, a thrinwch gyfradd taflu o sero fel rhybudd.
- Targedwch oedran a ffenestri gwasanaeth, nid maint crai, a pharu pob metrig ôl-groniad â rheilen warchod.
- Mae metrigau ôl-groniad yn disgrifio sut mae gwaith yn cyrraedd tîm a sut y caiff ei drin, ac nid ydynt byth yn graddio pobl.

## Cyfeiriadau a darllen pellach

1. Schwaber, K., and Sutherland, J., *The Scrum Guide*, 2020, https://scrumguides.org/scrum-guide.html.
2. Vacanti, D., Yeret, Y., et al., *The Kanban Guide*, 2020, https://kanbanguides.org/.
3. Vacanti, D., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
4. Reinertsen, D. G., *The Principles of Product Development Flow: Second Generation Lean Product Development*, Celeritas Publishing, 2009.
5. Cohn, M., *User Stories Applied: For Agile Software Development*, Addison-Wesley, 2004.
6. Anderson, D. J., *Kanban: Successful Evolutionary Change for Your Technology Business*, Blue Hole Press, 2010.
7. AXELOS, *ITIL Foundation: ITIL 4 Edition*, TSO, 2019.
8. Wikipedia, [Product backlog](https://en.wikipedia.org/wiki/Product_backlog).
9. Wikipedia, [ITIL](https://en.wikipedia.org/wiki/ITIL).
10. Wikipedia, [User story](https://en.wikipedia.org/wiki/User_story).
11. Wikipedia, [Little's law](https://en.wikipedia.org/wiki/Little%27s_law).
12. Wikipedia, [Percentile](https://en.wikipedia.org/wiki/Percentile).
13. Wikipedia, [Issue tracking system](https://en.wikipedia.org/wiki/Issue_tracking_system).
