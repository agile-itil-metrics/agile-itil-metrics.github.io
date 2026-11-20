# Metrigau ceisiadau tynnu ac adolygu cod

**Adolygu yw lle mae gwaith gorffenedig yn aros amlaf, felly mesurwch pa mor hir y mae newid yn eistedd cyn i neb edrych arno, pa mor fawr yw, a pha mor aml y mae'n dod yn ôl, a pharwch bob rhif cyflymder â signal ansawdd fel nad yw cyflymach byth yn golygu diofal.**

## Crynodeb a chymhelliant

Mae [cais tynnu](https://en.wikipedia.org/wiki/Pull_request) yn gynnig i uno set o newidiadau o un gangen o ystorfa [rheoli fersiynau](https://en.wikipedia.org/wiki/Version_control) i un arall, ynghyd â'r sgwrs ynghylch a ddylid ei uno. Mewn llawer o dimau dyma'r porth ffurfiol rhwng "mae'r awdur yn credu ei fod yn gweithio" a "mae'r tîm yn cytuno y gall gael ei gludo." Mae'r sgwrs yn fath o [adolygu cod](https://en.wikipedia.org/wiki/Code_review): mae person heblaw'r awdur yn darllen y newid, yn gofyn cwestiynau, ac yn ei gymeradwyo neu'n gofyn am ddiwygiadau. Mae rhai llwyfannau yn galw'r un peth yn gais uno; mae'r pwnc hwn yn defnyddio "cais tynnu" ar gyfer y ddau.

Mae adolygu'n werth ei fesur am reswm plaen. Yn yr olwg llif ar gyflawni, mae eitem waith yn treulio'r rhan fwyaf o'i hoes yn aros, ac mae adolygu'n un o'r aros sy'n eistedd yn gyfan gwbl o fewn rheolaeth y tîm. Mae angen i bobl eraill newid er mwyn tagfa llwyfan a rennir neu ddibyniaeth allanol. Dim ond arferion y tîm ei hun y mae angen eu newid ar gyfer cais tynnu sy'n aros deuddydd am olwg gyntaf. Mae'r mesurau llif yn y llyfr hwn (gweler pwnc 2.1, Mesurau llif, a phwnc 2.2, Amser arweiniol, amser cylch ac effeithlonrwydd llif) yn rhoi'r eirfa gyffredinol. Mae'r pwnc hwn yn chwyddo i mewn i un cam o'r cylch ac yn rhoi ei offerynnau ei hun iddo.

Mae'r golygon ystwyth ac ITIL yn cwrdd yma mewn ffordd ddefnyddiol. O safbwynt ystwyth, dolen adborth a mecanwaith dysgu yw adolygu. Mae'n lledaenu gwybodaeth o'r sylfaen cod, yn dal diffygion yn gynnar, ac yn gorfodi cytundebau gweithio'r tîm a'r Diffiniad o Orffen. O safbwynt ITIL, mae'r un gweithgarwch yn cefnogi sawl arfer. Yn ITIL 4, mae'r arfer datblygu a rheoli meddalwedd yn ymdrin â sut mae meddalwedd yn cael ei adeiladu a'i wirio, mae galluogi newid yn ymdrin â sut mae newidiadau'n cael eu hasesu a'u hawdurdodi, ac mae rheoli defnyddio yn ymdrin â sut mae newidiadau'n cyrraedd yr amgylchedd byw. Cais tynnu a adolygwyd gan gymheiriaid yw, i lawer o sefydliadau, y dystiolaeth y cafodd newid safonol ei asesu cyn ei ryddhau. Mae trin adolygu fel gweithgarwch a fesurir y gellir ei wella'n gwasanaethu'r ddwy olwg: mae'r tîm ystwyth eisiau adborth cyflymach, ac mae'r arfer ITIL eisiau sicrwydd dibynadwy bod newidiadau wedi'u gwirio.

Y risg i'w chadw mewn golwg drwyddi draw yw bod cyflymder adolygu ac ansawdd adolygu yn hawdd eu gwahanu. Gall tîm haneru ei amser i'r adolygiad cyntaf drwy gymeradwyo popeth ar yr olwg gyntaf, a bydd y dangosfwrdd yn dangos buddugoliaeth tra bod y sylfaen cod yn gwaethygu. Mae [cyfraith Goodhart](https://en.wikipedia.org/wiki/Goodhart%27s_law) yn berthnasol gyda grym anarferol i'r teulu metrigau hwn (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau), oherwydd bod y rhifau'n rhad i'w casglu, yn weladwy i bawb, ac yn hynod hawdd eu symud heb newid y peth yr oeddent i fod i'w gynrychioli. Mae pob argymhelliad isod wedi'i ysgrifennu gyda hynny mewn golwg.

Agorodd yr **awdur** y cais tynnu ac mae **adolygydd** yn ei asesu. Mae **rownd adolygu** yn un ddolen o "mae'r awdur yn gwthio, mae'r adolygydd yn ymateb." **Ailwaith** yw newid a wneir ar ôl sylw adolygu, neu ar ôl yr uno, i drwsio rhywbeth y cafodd y fersiwn gyntaf yn anghywir. **Integreiddio parhaus (CI)** yw'r arfer o uno gwaith i linell a rennir yn aml a gwirio pob uniad yn awtomatig; gweler [integreiddio parhaus](https://en.wikipedia.org/wiki/Continuous_integration).

Mae pob metrig yn y pwnc hwn yn disgrifio timau ac ystorfeydd. Nid ydynt byth yn graddio adolygwyr nac awduron. Mae cyfrifon adolygu lefel unigol yn hawdd eu hechdynnu ac yn demtasiwn eu defnyddio, ac mae gwneud hynny yn troi arfer cydweithio yn gystadleuaeth (gweler pwnc 9.1, Iechyd tîm a phrofiad datblygwyr).

## Egwyddorion allweddol

- **Aros sy'n dominyddu adolygu.** Yn y rhan fwyaf o dimau, y rhan fwyaf o amser adolygu yw'r cais tynnu yn eistedd heb ei ddarllen, nid y drafodaeth unwaith y bydd adolygydd yn dechrau. Mesurwch yr aros cyn mesur y sgwrs.
- **Mae newidiadau bach yn cael eu hadolygu'n gyflymach ac yn well.** Maint yw un o'r ychydig liferi sy'n gwella cyflymder a thrylwyredd ar yr un pryd, oherwydd gall adolygydd ddal newid bach yn ei ben.
- **Nid yw cyflymder heb graffu yn welliant.** Mae angen cymar ansawdd ar bob metrig cyflymder yn y pwnc hwn, a darllenir y pâr gyda'i gilydd.
- **Capasiti tîm yw adolygu, nid un personol.** Dylai'r llwyth ledaenu ar draws y tîm. Mae metrig sy'n dangos canolbwyntio yn pwyntio at broblem ddylunio yn y tîm, byth at berson i'w ganmol neu ei feio.
- **Mae dosbarthiadau'n curo cyfartaleddau.** Mae gan amseroedd adolygu gynffon hir o geisiadau tynnu sownd, felly adroddwch y canolrif a chanradd uchel (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth).
- **Diffiniwch y cloc, yna gadewch lonydd iddo.** Nodwch pryd mae'r cloc yn dechrau ac yn stopio, pa ddigwyddiadau sy'n ei oedi, a pha weithgarwch awtomataidd a eithrir, ac ysgrifennwch hynny lle mae'r data'n byw (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth).
- **Mae metrigau adolygu yn gwasanaethu'r tîm sy'n berchen ar y gwaith.** Maent yn fewnbwn i ôl-sylliad y tîm ei hun, nid cerdyn sgorio i rywun arall.

## Diffiniadau metrigau

Mae'r clociau isod yn tybio bod y llwyfan rheoli fersiynau yn cofnodi amseroedd digwyddiadau ar gyfer agor, ceisiadau adolygu, sylwadau, cymeradwyaethau, gwthio ac uno. Eithrir drafftiau, ceisiadau tynnu a agorwyd gan bots, a cheisiadau tynnu a gaewyd heb eu huno oni bai fod rhes yn dweud yn wahanol. Mae "oriau gwaith" yn golygu oriau gwaith datganedig y tîm, fel nad yw cais tynnu a agorwyd nos Wener yn cronni penwythnos o aros.

| Metrig | Diffiniad | Fformiwla | Uned | Ffynhonnell data | Arfer ITIL | Cyfatebydd ystwyth | Amledd |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Amser i'r adolygiad cyntaf | Yr aros rhwng cais tynnu yn dod yn barod i'w adolygu a'r ymateb dynol sylweddol cyntaf | Mae'r cloc yn dechrau pan fo'r cais tynnu yn gadael statws drafft neu'n cael ei agor yn barod, yn stopio ar y sylw adolygu, cais am newid neu gymeradwyaeth gyntaf gan rywun heblaw'r awdur; eithrir sylwadau bot ac awdur a newidiadau label pur. Adroddwch y canolrif a'r 85fed canradd mewn oriau gwaith | oriau gwaith | Hanes digwyddiadau llwyfan rheoli fersiynau | Datblygu a rheoli meddalwedd; galluogi newid | Cytundeb gweithio ar ymatebolrwydd adolygu; llif gwaith ar y gweill | Wythnosol |
| Amser cylch adolygu | Cyfanswm yr amser o barod i'w adolygu i uno | Mae'r cloc yn dechrau pan fo'r cais tynnu yn barod i'w adolygu, yn stopio wrth uno; eithrir ceisiadau tynnu a gaewyd heb eu huno a'u cyfrif ar wahân. Adroddwch y canolrif a'r 85fed canradd mewn oriau gwaith | oriau gwaith | Hanes digwyddiadau llwyfan rheoli fersiynau | Rheoli defnyddio; galluogi newid | Amser cylch y cam adolygu ar fwrdd y tîm | Wythnosol |
| Maint cais tynnu | Faint o newid sydd mewn cais tynnu | Llinellau a ychwanegwyd ynghyd â llinellau a ddilëwyd, gan eithrio ffeiliau a gynhyrchwyd, ffeiliau clo, cod a werthwyd a hailenwi pur, fel y rhestrir yn rheolau anwybyddu'r ystorfa. Adroddwch y canolrif a'r 85fed canradd fesul cais tynnu a unwyd | llinellau a newidiwyd | Ystadegau gwahaniaeth llwyfan rheoli fersiynau | Datblygu a rheoli meddalwedd | Maint swp bach; hollti straeon | Wythnosol |
| Rowndiau adolygu | Nifer y dolenni o wthio gan yr awdur ac ymateb adolygydd cyn uno | Cyfrif cylchoedd "newidiadau y gofynnwyd amdanynt" neu sylw-yna-gwthio gwahanol fesul cais tynnu a unwyd; y cyflwyniad cyntaf yw rownd sero ac eithrir methiannau gwiriadau awtomataidd. Adroddwch y canolrif a'r 85fed canradd | cyfrif | Digwyddiadau adolygu a gwthio llwyfan rheoli fersiynau | Gwelliant parhaus; datblygu a rheoli meddalwedd | Signal ailwaith yn y cam adolygu; Diffiniad o Orffen | Wythnosol |
| Canolbwyntio llwyth adolygu | Pa mor anwastad y caiff gwaith adolygu ei ledaenu ar draws tîm | Cyfran adolygiadau cwblhawyd y tîm a drinnir gan y ddau adolygydd prysuraf dros 4 wythnos dreigl; eithrir adolygiadau o gais tynnu rhywun ei hun ac adolygiadau bot. Adroddir ar gyfer y tîm, byth yn ôl enw | canran | Digwyddiadau adolygu llwyfan rheoli fersiynau, wedi'u cyfanrhedeg i dîm | Gwelliant parhaus; rheoli gwybodaeth | Perchnogaeth cod a rennir; perchnogaeth gyfunol | Misol |
| Cyfrif ceisiadau tynnu hen | Ceisiadau tynnu sydd ar agor yn hirach na therfyn y cytunwyd arno gan y tîm | Ceisiadau tynnu sy'n dal ar agor ac nid mewn drafft y mae eu hoedran ers parod i'w adolygu yn fwy na therfyn y tîm, wedi'i gyfrif ar adeg y ciplun; eithrir drafftiau | cyfrif | Rhestr ceisiadau tynnu agored llwyfan rheoli fersiynau | Galluogi newid; gwelliant parhaus | Oedran eitem waith; terfyn WIP | Wythnosol |
| Cyfradd atgyweirio ar ôl uno | Cyfran y ceisiadau tynnu a unwyd a ddilynir gan newid cywiro yn fuan wedyn | Ceisiadau tynnu a unwyd a ddilynir o fewn 14 diwrnod gan atgyweiriad, dychweliad neu atgyweiriad poeth wedi'i gysylltu â'r un newid / ceisiadau tynnu a unwyd yn y cyfnod; eithrir gwaith dilynol wedi'i gynllunio a labelwyd felly | canran | Hanes rheoli fersiynau, materion cysylltiedig, a chofnodion digwyddiadau neu newid | Galluogi newid; rheoli digwyddiadau | Ansawdd wedi'i adeiladu i mewn; Diffiniad o Orffen | Misol |

Amser i'r adolygiad cyntaf yw'r lifer fwyaf a'r metrig y dylai'r rhan fwyaf o dimau ddechrau ag ef. Amser cylch adolygu yw ei fesur canlyniad ac mae'n gydran o'r amseroedd arweiniol hirach a drafodir ym mhwnc 2.2. Enghreifftiau yw'r ffenestr 14 diwrnod a'r terfyn hen; mae pob tîm yn dewis gwerthoedd sy'n gweddu i'w rythm rhyddhau ac yn eu hysgrifennu. Lle mae'r rhifau'n bwydo'r darlun cyflawni ehangach, mae'r teulu DORA (gweler pwnc 2.8, Metrigau DORA) a mesurau methiant newid (gweler pwnc 4.4, Methiant newid ac ailwaith) yn cymryd drosodd.

## Argymhellion

### Mesurwch yr aros cyn y gwaith

**1. Dechreuwch ag amser i'r adolygiad cyntaf.** Dyma fel arfer y cyfrannwr mwyaf at amser adolygu a'r rhataf i'w wella. Offerynnwch ef o hanes digwyddiadau'r llwyfan fel nad oes angen i neb fewnbynnu dim. Adroddwch y canolrif a chanradd uchel, oherwydd bod canolrif o dair awr gyda 95fed canradd o bedwar diwrnod yn golygu bod rhai newidiadau'n cael eu hanghofio.

**2. Eithriwch bots a drafftiau o'r cloc, a dywedwch hynny.** Mae gwiriadau awtomataidd, bots diweddaru dibyniaethau ac offer fformatio yn creu sylwadau o fewn eiliadau, ac mae eu cyfrif yn gwneud i'r aros edrych yn ardderchog. Dechreuwch y cloc pan fo'r awdur yn marcio'r newid yn barod, nid pan wthir y gangen gyntaf. Cyhoeddwch y rheolau hyn wrth ymyl y siart.

**3. Defnyddiwch oriau gwaith, ac ysgrifennwch galendr y tîm.** Ni ddylai cais tynnu a agorwyd yn hwyr ddydd Gwener gario penwythnos o aros. Mae angen rheol ar dîm sydd wedi'i wasgaru ar draws parthau amser ynglŷn â pha oriau sy'n cyfrif, ac yn aml yr ateb gonest yw mai cost trosglwyddo ar draws parthau yw'r peth sy'n werth ei weld. Datganwch y dewis a'i gadw'n sefydlog.

### Siapiwch y gwaith i fod yn adolygadwy

**4. Cadwch geisiadau tynnu yn fach, a thrinwch faint fel arferiad tîm.** Olrheiniwch ganolrif a 85fed canradd maint, ac edrychwch ar y rhai mawr fel set yn hytrach nag fel methiannau unigol. Mae timau fel arfer yn canfod bod newidiadau mawr yn dod o ychydig o achosion: gwaith heb ei hollti'n ddigon mân, cymysgu ad-drefnu gydag ymddygiad newydd, neu aros yn rhy hir i uno. Holltwch waith fel bod pob cais tynnu yn gwneud un peth, sydd hefyd yn cyd-fynd ag egwyddor swp bach y tu ôl i [ddatblygu ar sail cefnffordd](https://en.wikipedia.org/wiki/Trunk-based_development) a defnyddio'n aml.

**5. Peidiwch â gosod cap maint caled fel targed.** Mae terfyn megis "dim mwy na 400 llinell" yn gwahodd hollti newid yn ddarnau artiffisial sy'n annarllenadwy ar eu pen eu hunain neu sy'n torri'r adeiladu pan unir hwy ar eu pen eu hunain. Defnyddiwch faint fel cychwynnwr sgwrs yn yr ôl-sylliad, a rhowch dechnegau hollti i'r tîm, megis toglau nodwedd, ad-drefnu paratoadol yn ei gais tynnu ei hun, ac uno y tu ôl i faner.

**6. Gwnewch y cais adolygu yn eglur.** Mae cais tynnu nad yw'n enwi adolygydd yn aros am wirfoddolwr, ac mae gwirfoddolwyr yn brin. Cytunwch pwy a ofynnir, sut y hysbysir y tîm, a beth yw'r disgwyliad ymateb, yn y cytundeb gweithio. Mae rota adolygu a rennir, neu slot adolygu dyddiol, fel arfer yn lleihau'r aros yn fwy nag unrhyw osodiad offeryn.

### Lledaenwch y llwyth a'r wybodaeth

**7. Gwyliwch ganolbwyntio llwyth fel risg lefel tîm.** Os yw dau berson yn trin y rhan fwyaf o adolygiadau, mae eu hargaeledd yn cyfyngu ar lif y tîm, ac mae eu habsenoldeb yn ei stopio. Adolygwch y mesur canolbwyntio'n fisol, a gweithredwch drwy ddyluniad y tîm: cylchdroi'r adolygydd diofyn, paru aelodau newydd â rhai profiadol, ac ysgrifennu'r meysydd cod na all ond un person eu hadolygu. Peidiwch â chyhoeddi bwrdd arweinwyr fesul person.

**8. Defnyddiwch adolygu i rannu gwybodaeth, ac amddiffynnwch y diben hwnnw.** Mae gwerth hirdymor adolygu'n cynnwys dysgu, perchnogaeth a rennir ac arddull gyson, yn ogystal â chanfod diffygion. Mae [rhaglennu pâr](https://en.wikipedia.org/wiki/Pair_programming) a rhaglennu torf yn symud rhywfaint o'r cyfnewid hwnnw yn gynharach yn y broses; lle mae pâr eisoes wedi gweithio ar newid, mae adolygiad ysgafnach yn rhesymol. Gwnewch y dewis yn benderfyniad tîm, wedi'i ysgrifennu yn y cytundeb gweithio, fel bod "wedi paru, felly wedi'i adolygu'n ysgafn" yn rheol weladwy ac nid yn esgus.

### Rheolwch yr adolygu ei hun

**9. Gadewch i awtomeiddio drin yr hyn y mae awtomeiddio'n ei wneud yn dda.** Mae fformatio, linting a gwiriadau sylfaenol yn perthyn yn y biblinell, fel bod sylw dynol yn mynd i ddylunio, cywirdeb a risg. Mae [dadansoddi rhaglenni statig](https://en.wikipedia.org/wiki/Static_program_analysis) a phrofion awtomataidd yn lleihau nifer y rowndiau adolygu dibwys. Mae'r rowndiau sy'n weddill wedyn yn dweud mwy am y sgwrs ddylunio a llai am anghytundebau arddull.

**10. Darllenwch rowndiau adolygu fel signal am eglurder, nid cyfrif diffygion.** Gall llawer o rowndiau olygu bod y gofyniad yn aneglur, bod yr awdur yn brin o gyd-destun, bod yr adolygydd wedi gofyn am newidiadau chwaeth, neu fod y newid yn fawr. Gall sero rownd ar bob cais tynnu olygu gwaith ardderchog neu olygu nad oedd neb wedi edrych. Samplwch lond llaw o geisiadau tynnu gyda nifer anarferol o lawer neu o ychydig o rowndiau a darllenwch hwy gyda'ch gilydd fel tîm.

### Paru cyflymder ag ansawdd, a chadw amser yn weladwy

**11. Dangoswch gymar ansawdd bob amser wrth ymyl cyflymder adolygu.** Y cyfradd atgyweirio ar ôl uno, y digwyddiadau sy'n gysylltiedig â newidiadau diweddar, a chyfran y diffygion a ganfyddir ar ôl rhyddhau yw'r partneriaid naturiol (gweler pwnc 4.4, Methiant newid ac ailwaith). Os yw amser adolygu'n gwella tra bo'r gyfradd atgyweirio'n gwaethygu, mae'r tîm wedi masnachu sicrwydd am gyflymder, a'r atgyweiriad yw sgwrs yn hytrach na tharged. Dangoswch y ddau ar yr un siart.

**12. Cysylltwch adolygu â'r darlun llif ac â gwaith heb ei gynllunio.** Dim ond os nad yw'r cam nesaf yn ciwio'r gwaith y mae adolygu cyflymach yn helpu (gweler pwnc 2.3, Gwaith ar y gweill a chiwio). Mae gan geisiadau adolygu brys sy'n torri ar draws gwaith wedi'i gynllunio gost eu hunain (gweler pwnc 2.9, Gwaith gweithredol a gwaith heb ei gynllunio).

## Ffyrdd o chwarae'r system a rheiliau gwarchod

| Metrig | Sut mae'n cael ei chwarae | Rheilen warchod (metrig neu arfer) pâr |
| --- | --- | --- |
| Amser i'r adolygiad cyntaf | Postio "yn edrych yn dda" cyflym neu emoji fel yr ymateb cyntaf; neilltuo bot neu adolygydd cyfeillgar; marcio cais tynnu yn barod dim ond ar ôl i rywun gytuno ymlaen llaw i edrych | Cyfradd atgyweirio ar ôl uno; sampl o gymeradwyaethau heb sylwadau; mynnu bod ymatebion cyntaf yn sylweddol yn y cytundeb gweithio |
| Amser cylch adolygu | Uno heb aros am adolygiad; hollti newid yn ddarnau bach i basio'n gyflymach; cau ac ailagor cais tynnu i ailosod y cloc | Cyfrif ceisiadau tynnu a gaewyd ac a ailagorwyd; rowndiau adolygu; cyfradd atgyweirio ar ôl uno; rheolau cangen warchodedig sy'n gofyn am gymeradwyaeth |
| Maint cais tynnu | Eithrio ffeiliau o'r cyfrif; hollti un newid yn ddarnau na ellir eu deall ar wahân; padio maint gyda chod a gynhyrchwyd | Adolygu'r rheolau anwybyddu bob chwarter; gwirio bod darnau wedi'u hollti yn adeiladu ac yn pasio profion ar eu pen eu hunain; darllen sampl o'r lleiaf a'r mwyaf |
| Rowndiau adolygu | Cymeradwyo ar y pas cyntaf i gadw'r cyfrif yn isel; symud trafodaeth i sgwrs fel nad yw'n gadael unrhyw ôl; awduron yn gwthio llawer o atgyweiriadau mewn un comisiwn i guddio rowndiau | Cyfradd atgyweirio ar ôl uno; sampl o geisiadau tynnu sero rownd; cadw'r drafodaeth yn y cais tynnu |
| Canolbwyntio llwyth adolygu | Hollti adolygiadau yn llawer o gymeradwyaethau bach i ledaenu'r cyfrif; neilltuo adolygiadau i'r rhai ag amser sbâr ond dim gwybodaeth | Adolygu gwybodaeth yr adolygydd ar gyfer meysydd peryglus; gwylio cyfradd atgyweirio ar ôl uno yn ôl maes; cadw'r metrig ar lefel tîm |
| Cyfrif ceisiadau tynnu hen | Cau ceisiadau tynnu hen heb eu huno; eu trosi'n ddrafftiau i'w cuddio; codi'r terfyn hen | Cyfrif ceisiadau tynnu a gaewyd heb eu huno; cyfrif drafftiau hirdymor; adolygu'r terfyn gyda'r tîm bob chwarter |
| Cyfradd atgyweirio ar ôl uno | Cofnodi atgyweiriadau o dan eitem waith newydd heb gyswllt; labelu gwaith cywirol fel dilyniant wedi'i gynllunio; osgoi'r metrig drwy oedi'r atgyweiriad heibio'r ffenestr | Cymharu â data digwyddiadau a methiant newid; sampl o eitemau dilynol; archwilio'r labeli a ddefnyddir |

Mae darlleniad iach yn un tawel. Mae amser i'r adolygiad cyntaf yn fyr ac mae'r gynffon yn fyr hefyd, felly nid oes unrhyw gais tynnu yn aros am ddyddiau. Mae maint yn eistedd mewn ystod y mae'r tîm yn ei chael yn hawdd i'w darllen, gydag ychydig o newidiadau mawr y gall y tîm eu hesbonio. Mae rowndiau adolygu'n isel ond nid yn sero, mae canolbwyntio llwyth yn gymedrol, mae'r cyfrif hen yn fach, ac mae'r gyfradd atgyweirio ar ôl uno yn sefydlog. Pan fydd un rhif yn gwella'n sydyn, dylai rhywun wirio na symudodd ei reilen warchod pâr y ffordd anghywir.

## Cyfaddawdau: manteision ac anfanteision

| Dull | Cryfder | Gwendid |
| --- | --- | --- |
| Adolygu cyflym gyda disgwyliadau ymateb llym | Dolenni adborth byr; llai o golli cyd-destun i'r awdur; gwaith ar y gweill is | Pwysau i gymeradwyo'n gyflym; yn torri ar draws gwaith â ffocws |
| Adolygu araf, trylwyr | Darllen gofalus o ddyluniad a risg; trosglwyddo gwybodaeth cryfach | Amser cylch hirach; mae sypiau mwy yn cronni; mae awduron yn symud ymlaen ac yn colli cyd-destun |
| Ceisiadau tynnu bach | Haws eu darllen a'u dychwelyd; llif llyfnach | Mwy o orbenion fesul newid; gall dorri nodwedd yn gamau dryslyd |
| Ceisiadau tynnu mawr | Llai o drosglwyddiadau; nodwedd gyfan yn weladwy ar unwaith | Mae adolygiadau'n dod yn arwynebol; anoddach eu dychwelyd; aros hir |
| Cymeradwyaeth ofynnol gan berchennog a enwir | Atebolrwydd clir ar gyfer meysydd peryglus; cefnogi awdurdodi newid | Creu tagfa a phwynt unigol o fethiant |
| Gwiriadau awtomataidd cyn adolygu dynol | Rhyddhau pobl ar gyfer dylunio a risg; cyson | Gall greu hyder ffug; angen cynnal a chadw |

Nid oes unrhyw bolisi unigol yn ennill. Y nod yw byrhau'r aros tra'n cadw'r graffu, a'r llwybr arferol yw newidiadau llai, disgwyliadau adolygu clir, awtomeiddio cryf ar gyfer gwiriadau arferol, a chytundeb tîm ynghylch sut olwg sydd ar adolygiad da. Mae metrigau adolygu o'r mwyaf defnyddiol fel cwestiynau ar gyfer ôl-sylliad ac o'r lleiaf defnyddiol fel targedau.

## Cwestiynau i'w trafod gyda'ch tîm

**1. Ble mae cais tynnu yn treulio'r rhan fwyaf o'i oes, yn aros neu'n cael ei adolygu?**
Gofynnwch i'r tîm ddyfalu cyn edrych ar y data, yna dangoswch yr hollt rhwng amser i'r adolygiad cyntaf a'r amser sy'n weddill i uno. Mae'r rhan fwyaf o grwpiau'n synnu faint sy'n aros. Dylai'r hwylusydd nodi pa ddyfaliadau oedd yn anghywir a gofyn beth mae pob dyfaliad anghywir yn ei ddweud am sut mae'r tîm yn profi adolygu. Gorffennwch gydag un newid sy'n ymosod ar yr aros mwyaf.

**2. Sut olwg sydd ar adolygiad da yn y tîm hwn, a sut y byddai person o'r tu allan yn gwybod?**
Rhestrwch yr ymddygiadau y mae'r tîm yn eu gwerthfawrogi, megis gofyn am ddyluniad, gwirio profion, ac esbonio'r rheswm dros gais. Yna gofynnwch pa rai sy'n gadael olion gweladwy yn y cais tynnu. Trafodwch sut i wahaniaethu ymateb cyntaf sylweddol oddi wrth un tocyn heb blismona unigolion. Cytunwch ar ddisgrifiad ysgrifenedig byr i'w roi yn y cytundeb gweithio.

**3. Pa mor fawr sy'n rhy fawr i ni, a beth ydym ni'n ei wneud pan fo'r gwaith yn wirioneddol fawr?**
Edrychwch ar y dosbarthiad maint a dewiswch ychydig o'r ceisiadau tynnu mwyaf. Gofynnwch pam roedd pob un yn fawr ac a ellid fod wedi'i hollti. Trafodwch dechnegau megis toglau nodwedd, ad-drefnu paratoadol, ac uno y tu ôl i faner. Dylai'r hwylusydd wrthsefyll gosod terfyn rhifol a chytuno yn lle hynny ar arferiad y bydd y tîm yn rhoi cynnig arno am fis.

**4. Pwy sy'n adolygu ein cod mwyaf peryglus, a beth sy'n digwydd pan fyddant i ffwrdd?**
Mapiwch feysydd y cod i'r bobl a all eu hadolygu'n dda. Edrychwch ar ganolbwyntio llwyth ac ar y meysydd sydd ag un adolygydd cymwys yn unig. Trafodwch sut i dyfu ail adolygydd ym mhob un, drwy baru neu gylchdroi neilltuo. Cadwch y sgwrs am gadernid y tîm, nid am safle llwyth gwaith unrhyw berson.

**5. Pe bai ein cyflymder adolygu yn dyblu yfory, beth fyddem eisiau iddo fod yn wir am ansawdd?**
Gofynnwch i'r grŵp enwi'r signalau ansawdd y byddent yn eu gwylio, megis atgyweiriadau ar ôl uno, digwyddiadau sy'n gysylltiedig â newidiadau diweddar, neu nifer y dychweliadau. Gwiriwch a yw'r signalau hynny'n weladwy ar hyn o bryd wrth ymyl y siart cyflymder. Trafodwch beth fyddai'n arwydd cynnar bod cyflymder wedi'i brynu ar draul graffu. Cytunwch pa gymar i'w ddangos ar y dangosfwrdd.

**6. Pa rifau adolygu fyddem ni'n cael ein temtio i'w gwella mewn ffordd nad yw'n helpu?**
Cerddwch drwy bob metrig a gofynnwch sut y gallai person dan bwysau ei wneud i edrych yn well heb wneud dim yn well. Cymharwch yr atebion â'r tabl chwarae'r system uchod ac ychwanegwch syniadau'r tîm ei hun. Y nod yw enwi'r risg cyn iddi ddigwydd. Cytunwch pa reilen warchod a adolygir ochr yn ochr â phob metrig.

## Pedwar persbectif

### Timau cynnyrch a chyflawni

Mae timau cyflawni'n berchen ar y broses adolygu a dylent fod yn berchen ar ei metrigau. Maent yn elwa fwyaf o fyrhau'r aros â chytundebau syml: slot adolygu dyddiol, proses cais glir, a newidiadau bach. Dylent ddefnyddio'r rhifau mewn ôl-sylliadau, cadw'r gwaith ar y gweill yn isel, a gwrthsefyll y demtasiwn i optimeiddio un siart. Adolygu hefyd yw lle mae aelodau newydd yn dysgu'r sylfaen cod, felly amddiffynnwch y diben hwnnw.

### Timau gwasanaeth a gweithrediadau

Mae timau gweithrediadau'n cwrdd ag adolygu lle mae cod seilwaith, cyfluniad ac awtomeiddio llawlyfrau gweithredu yn cael eu newid drwy geisiadau tynnu. I hwy, mae adolygu'n aml yn rhan o sut y caiff newid safonol ei gymeradwyo a'i dystiolaethu (gweler pwnc 4.3, Metrigau galluogi newid). Dylent gytuno pa newidiadau sydd angen adolygiad gan ail berson, pa mor gyflym y caiff atgyweiriadau brys eu hadolygu, a sut y caiff newidiadau brys eu hadolygu wedyn, fel bod atgyweiriad brysiog yn dal i gael ei archwilio. Mae adolygiad tenau ar newid peryglus yn dangos yn ddiweddarach fel digwyddiad.

### Arweinyddiaeth a llywodraethu

Dylai arweinwyr drin metrigau adolygu fel signalau am iechyd tîm a llif, nid sgorau cynhyrchiant. Dylent ofyn am y mesur ansawdd pâr pryd bynnag yr adroddir rhif cyflymder, cefnogi'r amser y mae adolygu gofalus yn ei gymryd, ac osgoi cymharu timau ar amser adolygu crai, gan fod ystorfeydd a risgiau'n wahanol. Gall cyrff llywodraethu ddefnyddio tystiolaeth adolygu fel rhan o sicrwydd newid, ar yr amod eu bod yn derbyn bod proses adolygu ddogfenedig, wedi'i samplo yn gryfach na chyfrif o gymeradwyaethau.

### Cwsmeriaid a defnyddwyr

Nid yw cwsmeriaid yn gweld ceisiadau tynnu, ac eto maent yn teimlo'r canlyniadau: pa mor fuan y mae atgyweiriad yn cyrraedd a pha mor aml y mae rhyddhad yn dod â diffyg newydd. Mae aros adolygu byr yn helpu atgyweiriadau brys i'w cyrraedd yn gynt, ac mae adolygu meddylgar yn helpu i gadw namau oddi wrthynt. Lle mae gan wasanaeth hanes rhyddhau neu ddiffygion cyhoeddedig, mae cwsmeriaid yn elwa pan fo'r tîm yn dangos llai o ddychweliadau a llai o atgyweiriadau dro ar ôl tro dros amser.

## Yn ymarferol: enghraifft ITIL ystwyth

Mae adran TG ysbyty rhanbarthol yn rhedeg gwasanaeth gwe apwyntiadau cleifion, a adeiladwyd gan un tîm cynnyrch o saith ac a weithredir gyda grŵp peirianneg dibynadwyedd safleoedd bach. Mae'r holl rifau yn yr enghraifft hon yn enghreifftiol.

Mewn adolygiad chwarterol, mae'r tîm yn canfod bod gan ei amser cylch adolygu ganolrif o 26 awr waith ac 85fed canradd o 71 awr waith (enghreifftiol). Mae hollti'r cylch yn dangos mai canolrif yr amser i'r adolygiad cyntaf yw 19 awr waith, felly mae'r rhan fwyaf o'r oedi'n aros. Mae gan faint cais tynnu ganolrif o 180 llinell ac 85fed canradd o 900 llinell (enghreifftiol), ac mae'r ddau adolygydd prysuraf yn trin 68 y cant o adolygiadau (enghreifftiol). Mae'r gyfradd atgyweirio ar ôl uno yn eistedd ar 9 y cant (enghreifftiol).

Mae'r tîm yn gwneud tri chytundeb. Maent yn gosod slot adolygu dyddiol 30 munud, yn ysgrifennu'r disgwyliad o ymateb cyntaf o fewn un diwrnod gwaith i'w cytundeb gweithio, ac yn cylchdroi dyletswydd "adolygu yn gyntaf" bob wythnos. Maent hefyd yn mabwysiadu arferiad hollti ar gyfer gwaith mawr, gan ddefnyddio toglau nodwedd fel y gall nodweddion rhannol uno'n ddiogel. Nid ydynt yn gosod terfyn maint na tharged ar gyfer amser i'r adolygiad cyntaf.

Ar ôl dau fis mae canolrif yr amser i'r adolygiad cyntaf yn disgyn i 6 awr waith ac mae'r 85fed canradd amser cylch adolygu yn disgyn i 34 awr waith (enghreifftiol). Mae canolbwyntio llwyth yn disgyn i 52 y cant (enghreifftiol), ac mae'r gyfradd atgyweirio ar ôl uno yn dal ar 9 y cant.

Yna mae'r tîm yn dal risg chwarae'r system. Mae sampl o gymeradwyaethau yn dangos bod tua thraean o ymatebion cyntaf yn cyrraedd o fewn munudau ac yn darllen "LGTM" yn unig ar newidiadau sy'n cyffwrdd â rhesymeg nodyn atgoffa apwyntiadau. Roedd y budd cyflymder yn rhannol real ac yn rhannol yn stamp rwber. Nid oedd y gyfradd atgyweirio ar ôl uno wedi symud eto oherwydd bod y cod yr effeithiwyd arno yn rhedeg ar gylch misol. Mae'r tîm yn newid y cytundeb gweithio fel bod yn rhaid i ymateb cyntaf gynnwys naill ai cwestiwn, sylw am ran benodol o'r newid, neu nodyn penodol o'r hyn a wiriwyd, ac yn ychwanegu'r gyfran samplo o gymeradwyaethau heb sylwadau at ei siart adolygu. Maent hefyd yn cytuno bod newidiadau i resymeg nodyn atgoffa sy'n wynebu cleifion angen dau adolygydd, un ohonynt o'r grŵp gweithrediadau. Mae'r penderfyniad, gyda'r rhesymau, yn mynd i log penderfyniadau'r tîm.

## Y golwg fesul sector

**Busnes newydd.** Gall tîm bach adolygu mewn munudau oherwydd bod pawb yn gwybod y cod, a'r brif risg yw hepgor adolygu pan fo amser yn brin. Cadwch y metrigau yn ychydig: mae amser i'r adolygiad cyntaf a maint yn ddigon. Sefydlwch yr arferiad o newidiadau bach yn gynnar, oherwydd bod llawer anoddach ei gyflwyno unwaith y bydd y sylfaen cod a'r tîm yn tyfu.

**Busnes bach.** Un neu ddau ddatblygwr, neu gyflenwr allanol, sy'n cynnal y feddalwedd yn aml. Gall adolygu fod gan un cydweithiwr neu gan staff y cyflenwr ei hun. Gofynnwch i gyflenwyr sut maent yn adolygu ac a ellir rhannu data ceisiadau tynnu, a chadwch gofnod syml o ba newidiadau a adolygwyd gan bwy, oherwydd adolygu yw'r prif wiriad yn erbyn camgymeriadau mewn tîm bach.

**Menter fawr.** Mae llawer o dimau, ystorfeydd a rheolau cymeradwyo yn creu amrywiad eang. Safonwch ddiffiniadau'r clociau a'r eithriadau fel bod data llwyfan yn gymaradwy, ond peidiwch â graddio timau yn ôl amser adolygu crai, gan fod risg a sylfaen cod yn wahanol. Gwyliwch am ofynion adolygu a osodir ar gyfer archwilio sy'n ychwanegu aros heb ychwanegu graffu, a chwiliwch am gyfleoedd i ddisodli cymeradwyaethau â llaw â gwiriadau awtomataidd ac adolygu wedi'i samplo.

**Llywodraeth a'r sector cyhoeddus.** Mae gwahanu dyletswyddau, llwybrau archwilio a rheolau caffael yn aml yn gofyn am gymeradwyaeth annibynnol ar gyfer newidiadau. Triniwch y rheolau hynny fel mewnbynnau dylunio: cofnodwch pwy a gymeradwyodd beth a phryd, a mesurwch yr aros y maent yn ei greu. Lle mae cyflenwyr yn ysgrifennu'r cod, nodwch dystiolaeth adolygu a mynediad data yn y contract (gweler pwnc 8.5, Adrodd rheoleiddiedig a llywodraethol).

## Yr achos busnes: cymhellion, ROI a TCO

Y cymhelliad yw byrhau'r rhan o gyflawni sy'n araf ac yn rheoladwy, tra'n cadw manteision adolygu gan gymheiriaid: llai o ddiffygion, gwybodaeth a rennir a llwybr archwilio. Mae ceisiadau tynnu sy'n aros yn dal gwaith gorffenedig yn ôl rhag defnyddwyr, yn codi cost newid cyd-destun i awduron, ac yn gwneud gwrthdaro uno yn fwy tebygol wrth i ganghennau heneiddio. Mae lleihau'r aros felly yn talu ei hun yn ôl drwy gyflawni cyflymach, llai o ailwaith a llai o rwystredigaeth.

Mae cost casglu'r metrigau hyn yn isel pan fo'r llwyfan rheoli fersiynau yn darparu hanes digwyddiadau ac API. Y prif gostau yw'r amser i ddiffinio'r clociau a'r eithriadau, i adeiladu neu gyfluniad yr adroddiad, ac i adolygu'r rhifau'n rheolaidd. Cost fwy yw un ymddygiadol: yr amser y mae pobl yn ei roi i adolygu'n brydlon, sy'n cystadlu â gwaith arall. Yr amser hwnnw yw'r gwir fuddsoddiad, a dylid ei gyllidebu yn hytrach na'i drin fel un rhad ac am ddim.

Mae'r elw yn ymddangos fel amser cylch adolygu byrrach, llai o geisiadau tynnu hen, a chyfradd atgyweirio ar ôl uno sefydlog neu'n disgyn. Osgowch hawlio gwelliant canrannol penodol ymlaen llaw, gan fod canlyniadau'n dibynnu ar y man cychwyn a'r tîm. Mae achos credadwy yn cymharu dosbarthiadau cyn ac ar ôl y tîm ei hun, ynghyd â'i gymar ansawdd, yn hytrach na dyfynnu ffigurau o sefydliadau eraill. Mae llyfr 2018 *Accelerate* yn adrodd ymchwil sy'n cysylltu arferion technegol a diwylliannol â pherfformiad cyflawni ac mae'n ffynhonnell resymol ar gyfer y ddadl gyffredinol, ond daw'r rhifau ar gyfer eich tîm o'ch data eich hun.

## Gwrthbatrymau a maglau

- **Graddio adolygwyr neu awduron.** Mae byrddau arweinwyr unigol o adolygiadau a gwblhawyd neu linellau a newidiwyd yn llygru cydweithio. Adroddwch ar lefel tîm a defnyddiwch y rhifau i addasu arferion y tîm.
- **Targedu amser i'r adolygiad cyntaf heb gymar ansawdd.** Y canlyniad yw'r stamp rwber. Dangoswch y gyfradd atgyweirio ar ôl uno a sampl o gymeradwyaethau heb sylwadau wrth ymyl pob siart cyflymder.
- **Gosod terfyn maint caled.** Mae timau'n hollti gwaith yn artiffisial i gydymffurfio. Defnyddiwch faint fel sgwrs a dysgwch dechnegau hollti yn lle hynny.
- **Trin sero sylw fel llwyddiant.** Gall cymeradwyaeth heb ei harchwilio adlewyrchu ymddiriedaeth neu ddiffyg sylw. Samplwch geisiadau tynnu o'r fath a'u darllen gyda'ch gilydd.
- **Cyfrif gweithgarwch bot fel adolygu.** Mae sylwadau awtomataidd yn gwneud i'r aros edrych yn fyr. Eithriwch bots o'r cloc ac o fesurau llwyth.
- **Anwybyddu parthau amser a chalendrau.** Mae amser cloc crai yn gwneud i aros penwythnos ac ar draws rhanbarthau edrych fel adolygu araf. Defnyddiwch oriau gwaith ac enwch y calendr.
- **Gadael i'r rhestr hen dyfu.** Mae hen geisiadau tynnu yn cronni gwrthdaro uno ac yn colli cyd-destun. Adolygwch y rhestr yn wythnosol naill ai uno, ailweithio neu gau pob eitem gyda rheswm.

## Model aeddfedrwydd

| Dimensiwn | 1 Cychwyn | 2 Datblygu | 3 Safoni | 4 Rheoli | 5 Cydgysylltu |
| --- | --- | --- | --- | --- | --- |
| Diffiniad a chlociau | Amser adolygu wedi'i ddyfalu neu ei adrodd ar deimlad | Mae rhai timau'n allforio amseroedd o'r llwyfan gyda'u rheolau eu hunain | Un diffiniad ysgrifenedig o bob cloc, gydag eithriadau ar gyfer bots, drafftiau a chalendrau | Diffiniadau wedi'u hadolygu ar rythm; newidiadau wedi'u logio gyda rhesymau | Diffiniadau wedi'u halinio ar draws timau a chyflenwyr a'u diwygio pan fyddant yn peidio â hysbysu penderfyniadau |
| Arfer adolygu | Mae adolygiadau'n digwydd pan fydd rhywun yn sylwi | Normau anffurfiol mewn rhai timau | Cytundeb gweithio ysgrifenedig ar geisiadau, disgwyliadau ymateb, a'r hyn y mae adolygiad yn ei gwmpasu | Normau wedi'u haddasu o'r data; rhannu gwybodaeth a meysydd risg wedi'u holrhain | Arfer adolygu wedi'i gydlynu ar draws timau a chyflenwyr, gydag awtomeiddio yn trin gwiriadau arferol |
| Cymar ansawdd | Dim cyswllt rhwng adolygu a diffygion | Golwg achlysurol ar atgyweiriadau ar ôl uno | Cyfradd atgyweirio ar ôl uno wedi'i dangos wrth ymyl cyflymder adolygu | Rheiliau gwarchod wedi'u hadolygu'n rheolaidd; cymeradwyaethau wedi'u samplo wedi'u darllen | Tystiolaeth adolygu wedi'i chysylltu â sicrwydd newid a dysgu o ddigwyddiadau ar draws gwasanaethau |
| Defnydd mewn gwelliant | Rhifau heb eu defnyddio | Wedi'u dangos mewn rhai ôl-sylliadau | Wedi'u hadolygu gan y tîm sy'n berchen arnynt ar rythm sefydlog | Mae bylchau'n arwain at waith gwella wedi'i gynllunio, wedi'i adnoddu | Mae syniadau gwella'n llifo o dimau i arfer a rennir ac yn ôl |

## Rhestr wirio

- [ ] Mae'r clociau ar gyfer amser i'r adolygiad cyntaf ac amser cylch adolygu wedi'u hysgrifennu, gyda dechrau, stopio ac eithriadau.
- [ ] Eithrir bots, drafftiau a cheisiadau tynnu a gaewyd heb eu huno, neu eu cyfrif ar wahân, ac mae'r rheolau'n weladwy.
- [ ] Adroddir amseroedd fel y canolrif a chanradd uchel mewn oriau gwaith.
- [ ] Mesurir maint cais tynnu gyda rhestr anwybyddu y cytunwyd arni ar gyfer ffeiliau a gynhyrchwyd a werthwyd.
- [ ] Mae gan y tîm gytundeb ysgrifenedig ar sut y gofynnir am adolygiadau a pha mor fuan y disgwylir ymateb cyntaf.
- [ ] Adroddir canolbwyntio llwyth adolygu ar lefel tîm yn unig.
- [ ] Dangosir cyfradd atgyweirio ar ôl uno neu gymar ansawdd arall ar yr un siart â chyflymder adolygu.
- [ ] Darllenir sampl o gymeradwyaethau heb sylwadau a chyflym iawn bob mis.
- [ ] Adolygir y rhestr ceisiadau tynnu hen yn wythnosol.
- [ ] Defnyddir data adolygu mewn ôl-sylliadau ac nid mewn gwerthuso unigol.
- [ ] Rhestrir meysydd cod ag un adolygydd cymwys yn unig ac mae ganddynt gynllun.

## Anogwyr AI

**Drafftiwch ddiffiniadau cloc ar gyfer metrigau adolygu.**

```text
Rwyf eisiau diffinio metrigau adolygu ar gyfer [tîm neu ystorfa]. Ein llwyfan yw
[llwyfan rheoli fersiynau] a'n llif gwaith yw [disgrifiwch: ceisiadau tynnu drafft,
cymeradwyaethau gofynnol, rheolau uno, bots a ddefnyddir]. Drafftiwch ddiffiniadau
manwl gywir ar gyfer amser i'r adolygiad cyntaf ac amser cylch adolygu, gan nodi'r
digwyddiad sy'n dechrau ac yn stopio pob cloc, beth a eithrir (bots, drafftiau,
wedi'u cau heb eu huno), sut y caiff oriau gwaith eu trin ar gyfer [parthau amser
a chalendr gwaith], a pha ganraddau i'w hadrodd. Peidiwch â dyfeisio gwerthoedd
meincnod na nodweddion offer. Rhestrwch eich rhagdybiaethau a'r cwestiynau y
dylwn eu hateb i orffen y diffiniadau.
```

**Dadansoddwch allforio data adolygu.**

```text
Dyma allforio dienw o geisiadau tynnu a unwyd ar gyfer [tîm] dros [cyfnod], gyda
cholofnau [rhestr colofnau, er enghraifft amser parod, amser adolygu cyntaf, amser
uno, llinellau a newidiwyd, rowndiau adolygu, baner atgyweiriad cysylltiedig]:
[gludwch ddata neu grynodeb]. Cyfrifwch y canolrif a'r 85fed canradd ar gyfer pob
mesur amser ac ar gyfer maint, hollwch y cylch adolygu yn aros ac adolygu, a
nodwch batrymau sy'n haeddu sgwrs. Peidiwch â graddio unigolion, a pheidiwch
â chymharu â meincnodau allanol. Rhestrwch eich rhagdybiaethau ac unrhyw
broblemau ansawdd data a sylwch arnynt.
```

**Dewch o hyd i risgiau chwarae'r system yn ein metrigau adolygu.**

```text
Mae ein tîm yn adrodd y metrigau adolygu hyn: [rhestrwch fetrigau a sut y cyfrifir
pob un]. Y pwysau arnom yw [er enghraifft terfyn amser rhyddhau, targed
arweinyddiaeth, contract cyflenwr]. Ar gyfer pob metrig, disgrifiwch ffyrdd
credadwy y gellid ei wella heb wella adolygu, arwyddion cynnar o bob un, a
metrig neu arfer rheilen warchod pâr a fyddai'n ei ddal. Peidiwch â dyfeisio
ystadegau. Rhestrwch eich rhagdybiaethau a dywedwch wrthyf beth fyddai angen i
mi ei wybod i raddio'r risgiau.
```

**Paratowch ôl-sylliad ar lif adolygu.**

```text
Paratowch agenda ôl-sylliad 45 munud ar gyfer [tîm] ar lif adolygu. Mewnbynnau:
amser i'r adolygiad cyntaf [gwerth], amser cylch adolygu [gwerth], maint canolrif
[gwerth], canolbwyntio llwyth [gwerth], a chyfradd atgyweirio ar ôl uno [gwerth],
oll wedi'u labelu â'u diffiniadau. Awgrymwch gwestiynau sy'n codi achosion, un
arbrawf bach y gallai'r tîm ei redeg am [hyd], a'r signal ansawdd i'w wylio yn
ystod yr arbrawf. Peidiwch â dyfeisio achosion na thargedau. Rhestrwch eich
rhagdybiaethau a'r data y dylwn ddod ag ef.
```

## Sgiliau AI

- [Sgìl Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-skill/SKILL.md): defnyddiwch i ddod o hyd i'r pwnc sy'n diffinio metrig llif neu ansawdd cysylltiedig a'r rheilen warchod a ddylai eistedd wrth ymyl metrig adolygu.
- [Sgìl cynhaliwr Metrigau ITIL Ystwyth](../../../../skills/agile-itil-metrics-maintainer-skill/SKILL.md): defnyddiwch i wirio bod golygiadau i'r pwnc hwn yn cadw'r templed, y tabl chwarae'r system a'r croesgyfeiriadau yn gyson.

## Pwyntiau allweddol

- Aros yw'r rhan fwyaf o oedi adolygu, felly mesurwch amser i'r adolygiad cyntaf ac amser cylch adolygu fel dosbarthiadau mewn oriau gwaith.
- Mae ceisiadau tynnu llai yn cael eu hadolygu'n gyflymach ac yn fwy gofalus; dysgwch hollti yn hytrach na gosod cap maint.
- Paru pob mesur cyflymder â chymar ansawdd, megis y gyfradd atgyweirio ar ôl uno, a darllen y ddau gyda'i gilydd.
- Trinwch lwyth adolygu fel capasiti tîm ac adroddwch ganolbwyntio ar lefel tîm, byth fel safle pobl.
- Cwestiynau ar gyfer ôl-sylliad yw metrigau adolygu, ac maent yn gwasanaethu'r tîm sy'n berchen ar y gwaith.

## Cyfeiriadau a darllen pellach

1. Forsgren, N., Humble, J., and Kim, G., *Accelerate: The Science of Lean Software and DevOps*, IT Revolution, 2018.
2. Forsgren, N., Storey, M.-A., Maddila, C., Zimmermann, T., Houck, B., and Butler, J., "The SPACE of Developer Productivity," *ACM Queue*, 2021.
3. Google, *Code Review Developer Guide*, Google Engineering Practices documentation, https://google.github.io/eng-practices/review/
4. Bacchelli, A., and Bird, C., "Expectations, Outcomes, and Challenges of Modern Code Review," *Proceedings of the 35th International Conference on Software Engineering (ICSE)*, 2013.
5. Vacanti, D. S., *Actionable Agile Metrics for Predictability: An Introduction*, Daniel S. Vacanti, Inc., 2015.
6. Schwaber, K., and Sutherland, J., *The Scrum Guide*, Scrum.org and Scrum Inc., 2020.
7. Goodhart, C. A. E., "Problems of Monetary Management: The U.K. Experience," in *Papers in Monetary Economics*, Reserve Bank of Australia, 1975.
8. Wikipedia, [Pull request](https://en.wikipedia.org/wiki/Pull_request).
9. Wikipedia, [Version control](https://en.wikipedia.org/wiki/Version_control).
10. Wikipedia, [Code review](https://en.wikipedia.org/wiki/Code_review).
11. Wikipedia, [Goodhart's law](https://en.wikipedia.org/wiki/Goodhart%27s_law).
12. Wikipedia, [Continuous integration](https://en.wikipedia.org/wiki/Continuous_integration).
13. Wikipedia, [Trunk-based development](https://en.wikipedia.org/wiki/Trunk-based_development).
14. Wikipedia, [Pair programming](https://en.wikipedia.org/wiki/Pair_programming).
15. Wikipedia, [Static program analysis](https://en.wikipedia.org/wiki/Static_program_analysis).
