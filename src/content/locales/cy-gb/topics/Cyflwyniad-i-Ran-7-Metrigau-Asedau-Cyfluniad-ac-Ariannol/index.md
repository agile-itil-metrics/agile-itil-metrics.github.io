# Cyflwyniad i Ran 7: Metrigau Asedau, Cyfluniad ac Ariannol

**Gwybod beth sydd gennych, sut mae'n ffitio at ei gilydd, a beth mae'n ei gostio yw'r sylfaen y mae pob penderfyniad gwasanaeth arall yn sefyll arni, ac mae'n well ei gadw'n gyfredol fel sgil-gynnyrch y gwaith, nid fel tasg ar wahân.**

Mae timau sy'n cyflawni ac yn rhedeg gwasanaethau yn gwneud cannoedd o benderfyniadau yr wythnos sy'n dibynnu ar ffeithiau am bethau: pa weinyddion y mae'r newid hwn yn eu cyffwrdd, pa drwyddedau sy'n dod i ben y mis nesaf, pwy sy'n berchen ar y cyfrif cwmwl hwn, beth mae'r gwasanaeth hwn yn ei gostio fesul cwsmer. Pan fo'r ffeithiau hynny'n anghywir neu ar goll, dyfaliadau yw'r penderfyniadau. Mae cofnodion asedau, cyfluniad, ac ariannol yn bodoli i droi dyfaliadau yn ddewisiadau gwybodus, ac mae'r metrigau yn y rhan hon yn gofyn pa mor dda yw'r cofnodion hynny a pha mor dda y cânt eu defnyddio.

Mae arfer ystwyth ac ITIL yn closio at y tir hwn o gyfeiriadau gwahanol, ac maent yn gryfach gyda'i gilydd. Mae ITIL yn cyfrannu disgyblaeth cofnodion, perchnogion, cylchoedd bywyd, a chostio gwasanaethau. Mae ystwyth a DevOps yn cyfrannu'r arferiad o gyflawni newid yn barhaus, gyda seilwaith wedi'i ddisgrifio fel cod a phiblinellau a all gofrestru'r hyn y maent yn ei greu. Daw'r canlyniadau gorau pan fo piblinellau cyflawni yn bwydo'r cofnodion yn awtomatig, a phan fo caffael, cyllid, diogelwch, gweithrediadau, a pheirianneg yn cydweithio'n barhaus o amgylch un darlun a rennir. Mae timau sy'n berchen ar eu gwasanaethau, ac sy'n cael eu hymddiried ac yn cael yr wybodaeth sydd ei hangen arnynt, yn cadw'r cofnodion yn wir oherwydd eu bod yn teimlo'r gost pan fo'r cofnodion yn anghywir.

Mae'r cofnodion hyn hefyd yn hawdd eu chwyddo. Gall rhestr eiddo edrych yn berffaith oherwydd ei bod yn rhestru'r hyn a oedd eisoes yn hysbys yn unig. Gall rhif cost edrych yn isel oherwydd bod costau a rennir wedi'u dyrannu mewn man arall. Gall achos busnes edrych yn gryf oherwydd bod y buddion yn hael. Felly daw pob metrig yn y rhan hon gyda'r ffordd y caiff ei chwarae a rheilen warchod sy'n ei wirio yn erbyn tystiolaeth annibynnol, byth yn erbyn ei hun (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Nid yw'r un o'r mesurau hyn yn graddio pobl na thimau. Maent yn disgrifio ystadau, gwasanaethau, a phenderfyniadau.

## Pynciau yn y rhan hon

- **7.1 Metrigau rheoli asedau TG**: cywirdeb rhestr eiddo, cwmpas darganfod, cysoni, perchnogaeth, a chyflawnrwydd cylch bywyd, gyda chofnodion wedi'u cipio wrth i waith ddigwydd.
- **7.2 Metrigau asedau meddalwedd a thrwyddedau**: sefyllfa trwydded, defnydd, meddalwedd silff, gwasgaru, parodrwydd adnewyddu, a biliau deunyddiau meddalwedd.
- **7.3 Metrigau cylch oes asedau caledwedd**: proffil oedran, cyfradd methu, amser amnewid, defnydd, gwaredu diogel, ac ailddefnyddio.
- **7.4 Metrigau ansawdd cyfluniad a CMDB**: cyflawnrwydd, cywirdeb, cwmpas dibyniaethau, rhagfynegi effaith, a defnyddio'r cofnod cyfluniad.
- **7.5 Cost gwasanaeth ac economeg uned**: cost fesul gwasanaeth, cost uned, dyrannu, dangos cost, ac ariannu timau parhaol.
- **7.6 Metrigau FinOps a chostau cwmwl**: dyrannu yn ôl tag, gwastraff, ymrwymiadau, anomaleddau, amrywiad rhagolwg, ac allyriadau.
- **7.7 Elw ar fuddsoddiad a'r achos busnes**: cyfanswm cost perchnogaeth, elw, ad-dalu, gwerth presennol net, a chywirdeb rhagolygon y gorffennol.

## Sut mae'r pynciau hyn yn cydberthyn

Mae'r pedwar pwnc cyntaf yn disgrifio'r pethau eu hunain. Mae cofnodion asedau (gweler pwnc 7.1, Metrigau rheoli asedau TG) yn dweud beth sy'n bodoli a phwy sy'n berchen arno. Mae'r pynciau meddalwedd a chaledwedd (gweler pwnc 7.2, Metrigau asedau meddalwedd a thrwyddedau, a phwnc 7.3, Metrigau cylch oes asedau caledwedd) yn ychwanegu cylchoedd bywyd a rhwymedigaethau penodol pob dosbarth. Mae'r pwnc cyfluniad (gweler pwnc 7.4, Metrigau ansawdd cyfluniad a CMDB) yn ychwanegu perthnasoedd, fel y gallwch ddweud beth sy'n dibynnu ar beth. Maent yn rhannu dull: cipio ar foment y newid, gwirio yn erbyn tystiolaeth annibynnol i'r ddau gyfeiriad, a chadw'r cofnod yn ddigon bach i'w gadw'n wir.

Mae'r tri phwnc olaf yn disgrifio'r hyn y mae'r pethau'n ei gostio ac a yw'r gost yn werth chweil. Mae costio gwasanaethau (gweler pwnc 7.5, Cost gwasanaeth ac economeg uned) yn troi gwariant yn gost fesul gwasanaeth a fesul uned, sy'n dibynnu ar y cofnodion asedau a chyfluniad i briodoli cost yn deg. Mae arfer costau cwmwl (gweler pwnc 7.6, Metrigau FinOps a chostau cwmwl) yn cymhwyso'r un syniadau lle mae gwariant yn newid bob awr a thagiau yw'r cyswllt rhwng tâl a pherchennog. Mae'r pwnc achos busnes (gweler pwnc 7.7, Elw ar fuddsoddiad a'r achos busnes) yn defnyddio hyn i gyd i wneud dewisiadau buddsoddi, ac mae'n gofyn i chi wirio'r dewisiadau hynny yn erbyn yr hyn a ddigwyddodd.

Mae sawl pâr rheilen warchod yn dilyn. Dylid darllen ffigur cywirdeb rhestr eiddo gyda'r rhestr bylchau a'r gyfran heb berchennog. Dylid darllen cyfradd defnyddio trwydded gyda phrofiad mynediad defnyddwyr, fel nad yw adfer seddi yn rhwystro pobl. Dylai mesur cost eistedd bob amser wrth ymyl mesur dibynadwyedd neu fodlonrwydd (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau), fel nad yw arbedion yn cael eu prynu â gwasanaeth gwaeth. Dylid darllen achos busnes gyda hanes rhagolygon cynharach.

Mae'r rhan hon yn cysylltu ymlaen ac yn ôl. Mae'r dystiolaeth buddion yn Rhan 6 (gweler pwnc 6.5, Sylweddoli gwerth a chanlyniadau busnes) yn bwydo'r achos busnes. Mae'r mesurau risg, archwilio, a chyflenwyr yn Rhan 8 yn dibynnu ar y cofnodion asedau a chontractau a ddisgrifir yma. Mae Rhan 9 yn troi at y bobl sy'n cadw hyn i gyd i redeg, ac at arferion gwelliant parhaus sy'n gwella'r cofnodion dros amser.
