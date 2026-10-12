# Cyflwyniad i Ran 1: Sylfeini Mesur

**Dim ond pan fydd wedi'i ddewis at ddiben, ei fod yn eiddo i rywun, ei dynnu o ddata dibynadwy, ei ddarllen yn ofalus, a'i atal rhag plygu'r gwaith y mae'n ei ddisgrifio y mae mesur yn helpu tîm sy'n adeiladu ac yn rhedeg gwasanaethau.**

Mae timau ystwyth a thimau rheoli gwasanaethau TG (ITSM) ill dau yn cynhyrchu llif cyson o rifau: tocynnau wedi'u cau, straeon wedi'u cwblhau, defnyddiadau a wnaed, digwyddiadau wedi'u datrys. Mae cael rhifau yn hawdd. Mae cael rhifau sy'n helpu pobl i benderfynu rhywbeth yn anoddach, a dyna lle mae'r rhan fwyaf o raglenni metrigau yn cael trafferth. Mae'r rhan hon yn rhoi'r sylfaen gyffredin y mae pob rhan ddiweddarach yn dibynnu arni, cyn diffinio unrhyw fetrig unigol.

Mae'r sylfaen yn ymdrin â chwe chwestiwn yn eu tro. Pam mesur o gwbl, a beth yw'r gost o fesur dim byd neu'r pethau anghywir? Sut mae mesur yn troi'n nod ac yna'n peidio â dweud y gwir? Beth sy'n werth ei fesur yn y lle cyntaf? Pwy sy'n diffinio, yn berchen ar ac yn ymddeol pob metrig? O ble mae'r data'n dod, a faint y gellir ymddiried ynddo? Sut y dylid darllen y rhifau, o gofio bod data tocynnau a llif yn gam ac yn aml yn denau? Mae pwnc olaf yn dangos sut mae fframweithiau sefydledig yn helpu i drefnu'r atebion.

Darllenwch y rhan hon yn gyntaf os ydych yn newydd i'r llyfr, a dychwelwch ati pryd bynnag y bydd metrig diweddarach yn ymddwyn yn ddrwg. Mae'r rhan fwyaf o fethiannau metrigau yn y rhannau diweddarach yn olrhain yn ôl at un o'r syniadau a gyflwynir yma. Mae metrigau yn y llyfr hwn yn disgrifio timau, gwasanaethau a systemau. Ni chânt byth eu defnyddio i raddio unigolion.

## Pynciau yn y rhan hon

- **1.1 Pam mesur ITIL ystwyth**: pam fod angen rhifau ar dimau sy'n adeiladu ac yn rhedeg gwasanaethau, beth y mae ystwyth ac ITIL yn ei gyfrannu at fesur, a chost mesur dim byd neu'r pethau anghywir.
- **1.2 Cyfraith Goodhart a seicoleg metrigau**: y rheilen warchod y tu ôl i bob pwnc arall, yn ymdrin â sut mae mesur yn troi'n nod, sut mae chwarae'r system yn digwydd mewn data tocynnau a chyflawni, a'r arferion sy'n ei atal.
- **1.3 Canlyniadau yn hytrach nag allbwn: dewis beth i'w fesur**: gwerth, canlyniadau, allbynnau a gweithgarwch, dangosyddion arweiniol a dangosyddion ar ei hôl hi, a chydgreu gwerth ITIL fel prawf metrig da.
- **1.4 Llywodraethu a pherchnogaeth metrigau**: perchnogion metrigau, diffiniadau, rhythm adolygu, ymddeol, a phwy a gaiff weld beth.
- **1.5 Ffynonellau data ac offeryniaeth**: offer ITSM, olrheinwyr materion, rheoli fersiynau, piblinellau integreiddio a chyflawni parhaus, monitro, y gronfa ddata rheoli cyfluniad (CMDB), ac arolygon fel ffynonellau, gan roi sylw i ansawdd data, stampiau amser a modelau statws.
- **1.6 Llythrennedd ystadegol ar gyfer metrigau gwasanaeth**: canraddau yn hytrach na chyfartaleddau, dosbarthiadau gwyrgam, samplau bach, siartiau rheoli, ac ansicrwydd gonest ar gyfer data tocynnau a llif.
- **1.7 Fframweithiau mesur**: Nod-Cwestiwn-Metrig (Goal-Question-Metric), amcanion a chanlyniadau allweddol (OKRs), y cerdyn sgorio cytbwys, ffactorau llwyddiant critigol a dangosyddion perfformiad allweddol, a sut maent yn cyfuno ag arferion ITIL.

## Sut mae'r pynciau hyn yn cydberthyn

Mae'r pynciau'n ffurfio dolen yn hytrach na ysgol. Mae pwnc 1.1 (gweler pwnc 1.1, Pam mesur ITIL ystwyth) yn rhoi'r diben, ac mae pwnc 1.3 (gweler pwnc 1.3, Canlyniadau yn hytrach nag allbwn: dewis beth i'w fesur) yn troi'r diben hwnnw'n ddewis o'r hyn i'w fesur. Mae metrig a ddewiswyd am ei ffocws ar ganlyniadau yn dal i fod angen diffiniad, perchennog a dyddiad adolygu, sef gwaith pwnc 1.4 (gweler pwnc 1.4, Llywodraethu a pherchnogaeth metrigau). Mae fframweithiau fel Nod-Cwestiwn-Metrig, a drafodir ym mhwnc 1.7 (gweler pwnc 1.7, Fframweithiau mesur), yn rhoi ffordd ailadroddadwy o symud o nod i set fach o fesurau, felly maent yn paru'n naturiol â phynciau 1.3 ac 1.4.

Mae data ac ystadegau yn ffurfio ail bâr. Dim ond cystal â'r cofnodion y tu ôl iddo yw metrig a ddewiswyd yn dda, ac mae pwnc 1.5 (gweler pwnc 1.5, Ffynonellau data ac offeryniaeth) yn esbonio sut mae stampiau amser, modelau statws a chyfluniad offer yn llunio'r hyn y gall rhif ei olygu. Yna mae pwnc 1.6 (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth) yn ymdrin â sut i ddarllen y rhif hwnnw'n onest, gan ddefnyddio canraddau, siartiau rheoli a datganiadau plaen o ansicrwydd. Mae data gwan yn trechu ystadegau da, ac mae ystadegau gwan yn gwastraffu data da, felly mae'n well darllen y ddau gyda'i gilydd.

Mae pwnc 1.2 (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau) yn eistedd ar draws yr holl rai eraill fel y rheilen warchod. Gellir chwarae'r system o hyd gydag unrhyw fetrig a ddewiswyd o dan bwnc 1.3, a lywodraethir o dan bwnc 1.4, ac a dynnwyd o'r ffynonellau ym mhwnc 1.5, unwaith y bydd pobl yn cael eu barnu ganddo. Mae llywodraethu yn cyfyngu ar bwy sy'n gweld beth a sut y defnyddir metrig. Mae dewisiadau sy'n canolbwyntio ar ganlyniadau yn gwneud chwarae'r system yn llai gwerthfawr. Mae mesurau pâr, a gyflwynir yma ac a ddatblygir drwy'r llyfr, yn gadael i un rhif wirio un arall. Felly mae pob metrig yn y rhannau diweddarach yn cario ffordd o chwarae'r system a rheilen warchod, ac mae'r rhan hon yn esbonio pam.
