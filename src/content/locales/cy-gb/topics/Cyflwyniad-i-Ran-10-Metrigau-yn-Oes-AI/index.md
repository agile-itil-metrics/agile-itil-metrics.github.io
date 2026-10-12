# Cyflwyniad i Ran 10: Metrigau yn Oes AI

**Mae AI yn gwneud allbwn yn rhad ac yn rhugl, sy'n torri'r hen gyswllt rhwng yr hyn a gynhyrchir a'r hyn sy'n werth ei gael, felly mesurwch yr hyn sy'n goroesi, yr hyn sy'n helpu, a'r hyn sy'n aros dan reolaeth.**

Mae pob metrig yn y llyfr hwn yn gorwedd ar ragdybiaeth bod cynhyrchu'r peth sy'n cael ei gyfrif yn cymryd ymdrech go iawn. Roedd tocyn a ddatryswyd yn adlewyrchu gwaith. Roedd erthygl a ysgrifennwyd yn adlewyrchu gwybodaeth. Roedd newid a unwyd yn adlewyrchu gofal. Mae AI cynhyrchiol yn gwanhau'r ragdybiaeth honno. Gall ddrafftio ateb, erthygl, prawf, neu floc o god mewn eiliadau, ac mae'r hyn y mae'n ei ddrafftio yn aml yn gredadwy ac weithiau'n anghywir. Mae'r cyfrifon yn codi. Mae a yw'r bobl a wasanaethir yn well eu byd yn gwestiwn ar wahân na all y cyfrifon ei ateb.

Mae AI hefyd yn ychwanegu pethau newydd i'w mesur. Mae cynorthwywyr sgwrsio ac asiantau sy'n gweithredu ar ran defnyddiwr angen mesurau datrys, trosglwyddo, a niwed gweithredoedd anghywir. Mae llywodraethu modelau, anogwyr, a chyflenwyr angen mesurau cwmpas, rheolaeth, a thrin digwyddiadau. Ac mae angen amddiffyn sgiliau, dealltwriaeth, a chyflymder cynaliadwy pobl sy'n gweithio wrth ochr yr offer hyn. Mae'r mesurau yn y rhan hon yn tynnu ar weddill y llyfr, oherwydd mai'r un yw'r rheiliau gwarchod: pârwch bob metrig â gwiriad ar yr hyn y gallai ei guddio, cymharwch â llinell sylfaen, samplwch gyda phobl, a chadwch ddata am bobl allan o werthuso (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau).

Mae ffyrdd gweithio ystwyth ac ITIL yn cynnig safbwynt synhwyrol tuag at hyn i gyd. Trinwch bob defnydd o AI fel arbrawf bach. Nodwch y budd disgwyliedig, rhowch gynnig arno gyda phobl barod, cymharwch â gwaith tebyg a wneir hebddo, a phenderfynwch ar sail tystiolaeth. Cadwch randdeiliaid yn gysylltiedig yn barhaus, oherwydd mai hwy yw'r cyntaf i sylwi pan fo'r signal yn dirywio. Anelwch at gyflymder cynaliadwy, fel bod amser a arbedir yn ddewis ynghylch ansawdd a dysgu, nid cynnydd awtomatig yn y galw. A chofiwch y nod o adeiladu o amgylch unigolion cymhellol: dylai AI leddfu gwaith diflas a pharchu barn pobl, ac ni ddylai ddod yn ffordd o'u monitro.

Mae ffeithiau am offer, cynhyrchion, a rheolau AI yn newid yn gyflym. Mae datganiadau yn y rhan hon am reoliadau, safonau, ac offer penodol wedi'u dyddio ym mis Hydref 2026, a dylai'r darllenydd eu hailwirio. Mae'r egwyddorion mesur yn fwy parhaol nag unrhyw un o'r dechnoleg y maent yn ei disgrifio.

## Pynciau yn y rhan hon

- **10.1 AI mewn mesur rheoli gwasanaethau**: ble mae AI yn dod i mewn i'r gwaith, llinellau sylfaen cyn mabwysiadu, cymariaethau, amser i ganlyniad wedi'i wirio, a chost lawn.
- **10.2 Mesur gwaith â chymorth AI**: cadw, ail-wneud, llwyth adolygu, diffygion a ddihangodd, dealltwriaeth, a sgiliau.
- **10.3 Metrigau asiantau AI a sgwrsfotiau**: datrys wedi'i wirio, cysylltiadau dychwelyd, trosglwyddiadau, amser at berson, cywirdeb atebion, a gwrthdroi gweithredoedd asiant.
- **10.4 Chwyddiant metrigau a gwanhau ansawdd**: sut mae cyfaint a chyflymder yn chwyddo, samplu defnyddioldeb, baich gwirio, a thorri dolenni adborth.
- **10.5 Metrigau llywodraethu a risg AI**: y gofrestr defnyddiau, dosbarthiadau risg, rheoli newid ar gyfer modelau ac anogwyr, gwerthuso, goruchwylio, a digwyddiadau.

## Sut mae'r pynciau hyn yn cydberthyn

Mae'r pwnc sylfeini (gweler pwnc 10.1, AI mewn mesur rheoli gwasanaethau) yn gosod y dull: llinell sylfaen, cymhariaeth, samplu, a chost lawn. Mae'n berthnasol i bob pwnc arall yn y rhan. Mae'r pwnc gwaith â chymorth (gweler pwnc 10.2, Mesur gwaith â chymorth AI) yn defnyddio'r dull hwnnw ar y gwaith y mae pobl yn ei wneud gydag AI wrth eu hochr, ac yn edrych ar yr hyn sy'n goroesi a'r hyn sy'n digwydd i ddealltwriaeth. Mae'r pwnc sgwrsfotiau ac asiantau (gweler pwnc 10.3, Metrigau asiantau AI a sgwrsfotiau) yn ei gymhwyso i systemau sy'n wynebu defnyddwyr yn uniongyrchol neu'n gweithredu ar eu rhan, lle mae cost ateb neu weithred anghywir yn disgyn ar rywun arall.

Chwyddiant a gwanhau (gweler pwnc 10.4, Chwyddiant metrigau a gwanhau ansawdd) yw'r cydymaith rhybuddiol i bob un o'r rhain. Mae'n esbonio pam mae'r rhifau hawdd yn codi a beth i'w baru â hwy, ac mae'n cysylltu â'r gwiriadau defnyddioldeb yn y pynciau eraill. Llywodraethu (gweler pwnc 10.5, Metrigau llywodraethu a risg AI) yw'r strwythur sy'n dal y gweddill yn ei le: mae'n darparu'r gofrestr sy'n dweud wrthych beth i'w fesur, y dosbarthiadau risg sy'n dweud pa mor ddwfn, y rheoli newid sy'n cadw ymddygiad rhag drifftio'n anweledig, a'r broses ddigwyddiadau am pan fo rhywbeth yn mynd o'i le.

Mae sawl pâr rheilen warchod yn dilyn. Dylid darllen mesur cyflymder gydag amser i ganlyniad wedi'i wirio a'r baich gwirio. Dylid darllen ffigur cyfyngu neu ddargyfeirio gyda datrys wedi'i wirio a chysylltiadau dychwelyd. Dylid darllen cyfrif defnyddiau cofrestredig yn erbyn darganfod annibynnol. Dylid trin ffigur mabwysiadu ar gyfer offeryn AI fel un disgrifiadol, a chanlyniadau yn erbyn cymhariaeth sy'n cario'r pwysau.

Mae'r rhan yn cysylltu â rhai cynharach: mesurau adolygu a llif Rhan 2, mesurau gwybodaeth a hunanwasanaeth Rhan 3, mesurau diogelwch a risg Rhan 8, a mesurau pobl Rhan 9. Mae'n arwain at y rhan gynnwys olaf, sy'n ymwneud ag adeiladu rhaglen metrigau ei hun, oherwydd bydd rhaglen sy'n cyflwyno mesur heb ofal yn dioddef yr un ystumiadau ag y mae'r rhan hon yn eu disgrifio.
