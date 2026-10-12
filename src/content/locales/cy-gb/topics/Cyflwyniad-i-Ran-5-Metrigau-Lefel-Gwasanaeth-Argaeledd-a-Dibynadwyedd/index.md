# Cyflwyniad i Ran 5: Metrigau Lefel Gwasanaeth, Argaeledd a Dibynadwyedd

**Mae metrigau lefel gwasanaeth, argaeledd a dibynadwyedd yn disgrifio'r hyn y gall defnyddwyr ddibynnu arno gan wasanaeth, fel y gall timau addo dim ond yr hyn y gallant ei gyflawni, sylwi'n gynnar pan fyddant yn drifftio oddi wrth yr addewid, a gwario eu hymdrech lle byddai defnyddwyr yn ei theimlo.**

Edrychodd Rhannau 2 i 4 ar sut mae gwaith yn symud: pa mor gyflym y mae'n llifo, sut y trinnir digwyddiadau, a sut y gwneir newid yn ddiogel. Mae'r rhan hon yn troi at y canlyniad y mae defnyddwyr yn ei brofi mewn gwirionedd. Gall gwasanaeth sy'n cludo'n aml ac yn datrys digwyddiadau'n gyflym fod yn araf o hyd, yn anghyraeddadwy ar yr adegau anghywir, neu'n anrhagweladwy. Mae defnyddwyr yn barnu'r gwasanaeth yn ôl a yw'n gweithio pan fo'i angen arnynt, nid yn ôl sut mae'r tîm yn trefnu ei hun.

Mae dwy draddodiad yn cwrdd yma. Mae arfer ITIL wedi defnyddio cytundebau lefel gwasanaeth, targedau, ac adrodd ers tro i osod disgwyliadau rhwng darparwr a'i gwsmeriaid. Mae arfer peirianneg dibynadwyedd safleoedd, a nodir yn llyfrau *Site Reliability Engineering* Google, yn defnyddio dangosyddion lefel gwasanaeth, amcanion, a chyllidebau gwallau i droi dibynadwyedd yn gyfaddawd peirianyddol eglur yn erbyn cyflymder newid. Mae'r ddau yn gydnaws. Mae'r ddau yn dechrau o'r hyn y mae defnyddwyr yn poeni amdano, mae'r ddau yn ei fynegi fel targed mesuradwy, ac mae'r ddau angen cyfrif gonest o ba mor aml y cyflawnwyd y targed.

Mae risg sy'n codi dro ar ôl tro yn rhedeg drwy'r rhan gyfan. Mae rhif dibynadwyedd yn hawdd i'w wneud yn edrych yn dda: drwy ddewis dangosydd cyfleus, drwy eithrio cyfnodau lletchwith, neu drwy fesur y gydran yn hytrach na thaith y defnyddiwr. Am y rheswm hwnnw mae pob pwnc yma yn enwi clociau a ffiniau ei fesurau, yn darllen amser a latency fel dosbarthiadau gyda chanraddau (gweler pwnc 1.6, Llythrennedd ystadegol ar gyfer metrigau gwasanaeth), ac yn paru pob mesur â rheilen warchod (gweler pwnc 1.2, Cyfraith Goodhart a seicoleg metrigau). Mae pob metrig yn disgrifio gwasanaeth, tîm, neu system. Nid yw'r un ohonynt yn graddio unigolyn, ac mae'r mesurau ar alwad yn arbennig yn bodoli i warchod pobl, nid eu sgorio.

## Pynciau yn y rhan hon

- **5.1 Metrigau SLA, OLA ac XLA**: mesurau cytundeb lefel gwasanaeth, cytundeb lefel gweithredol, a chytundeb lefel profiad, a sut mae adrodd watermelon yn cuddio trafferth y tu ôl i ddangosfyrddau gwyrdd a sut i'w osgoi.
- **5.2 SLIau, SLOau a chyllidebau gwallau**: dangosyddion ac amcanion lefel gwasanaeth, polisi cyllideb gwallau, cyfradd llosgi, a dewis dangosyddion o'r hyn y mae defnyddwyr yn poeni amdano.
- **5.3 Metrigau argaeledd**: cyfrifo amser i fyny ac amser i lawr, argaeledd wedi'i bwysoli gan ddefnyddwyr, toriad cynlluniedig yn erbyn anghynlluniedig, a rhifyddeg y nawiau.
- **5.4 Metrigau capasiti a pherfformiad**: defnyddio, dirlawnder, canraddau latency, lle i dyfu, a rhagweld galw.
- **5.5 Metrigau ansawdd monitro a rhybuddion**: cyfaint rhybuddion, cyfradd rhybuddion gweithredadwy, positifau ffug, cwmpas canfod, a blinder rhybuddion.
- **5.6 Metrigau parhad gwasanaeth**: amcanion amser adfer a phwynt adfer a fodlonwyd mewn profion, amlder profion, canfyddiadau diwrnodau gêm, ac amseroldeb cynlluniau.
- **5.7 Metrigau llafur diwerth ac ar alwad**: galwadau fesul sifft, llwyth y tu allan i oriau, cyfran amser llafur diwerth, a mesurau cylchdro cynaliadwy.

## Sut mae'r pynciau hyn yn cydberthyn

Mae'r tri phwnc cyntaf yn ffurfio craidd y rhan, oherwydd eu bod yn diffinio'r addewid a sut y'i mesurir. Mae pwnc 5.1 (gweler pwnc 5.1, Metrigau SLA, OLA ac XLA) yn ymdrin â'r cytundebau rhwng darparwyr, timau mewnol, a chwsmeriaid, a'r arferion adrodd sy'n gwneud y cytundebau hynny yn onest neu'n gamarweiniol. Mae pwnc 5.2 (gweler pwnc 5.2, SLIau, SLOau a chyllidebau gwallau) yn cyflenwi'r cyfatebydd peirianyddol: dangosyddion a dynnir o brofiad defnyddwyr, amcanion a osodir yn eu herbyn, a chyllideb gwallau sy'n gwneud y lle sy'n weddill i risg yn weladwy. Mae pwnc 5.3 (gweler pwnc 5.3, Metrigau argaeledd) yn gosod y rhifyddeg y mae'r ddau yn dibynnu arni, gan gynnwys beth sy'n cyfrif fel amser i lawr a pha ddefnyddwyr yr effeithir arnynt.

Mae capasiti a pherfformiad yn eistedd yn agos y tu ôl i argaeledd. Mae gwasanaeth sy'n dechnegol i fyny ond wedi'i ddirlawn neu'n araf yn methu ei ddefnyddwyr mewn ffordd y mae ffigur amser i fyny syml yn ei cholli. Mae pwnc 5.4 (gweler pwnc 5.4, Metrigau capasiti a pherfformiad) yn cyflenwi'r canraddau latency a mesurau lle i dyfu sy'n ategu argaeledd, ac mae ei ragolygon galw yn rhoi rhybudd cynnar cyn bod amcan yn cael ei fygwth.

Mae canfod ac adfer yn penderfynu faint o fethiant y mae defnyddwyr yn ei brofi. Mae pwnc 5.5 (gweler pwnc 5.5, Metrigau ansawdd monitro a rhybuddion) yn gofyn a yw'r tîm yn dysgu am broblemau'n gyflym ac o signalau sy'n werth gweithredu arnynt, sy'n cysylltu'n uniongyrchol ag amseroedd canfod ac adfer yn Rhan 3. Mae pwnc 5.6 (gweler pwnc 5.6, Metrigau parhad gwasanaeth) yn gofyn a all y tîm adfer o fewn terfynau a nodwyd pan fo rhywbeth mwy yn mynd o'i le, ac mae'n profi'r honiad hwnnw yn hytrach na'i dybio.

Mae pwnc 5.7 (gweler pwnc 5.7, Metrigau llafur diwerth ac ar alwad) yn gweithredu fel y rheilen warchod ddynol ar gyfer y gweddill. Mae amcanion tynn, rhybuddion swnllyd, a digwyddiadau mynych i gyd yn glanio ar y bobl sy'n cario'r galwr. Mae galwadau fesul sifft a chyfran llafur diwerth yn datgelu pan fo dibynadwyedd yn cael ei brynu ag ymdrech anghynaliadwy, ac maent yn cysylltu'n ôl â'r mesurau gwaith anghynlluniedig yn Rhan 2. Dylid darllen ansawdd rhybuddion ym mhwnc 5.5 a llwyth ar alwad ym mhwnc 5.7 fel pâr, gan fod rhybuddion gwael yn achos cyffredin o gylchdroeon trwm.

Yn olaf, mae'r gyllideb gwallau ym mhwnc 5.2 yn cysylltu'r rhan hon â newid yn Rhan 4. Pan fo'r gyllideb yn iach, gall tîm ryddhau'n fwy rhydd. Pan gaiff ei gwario, dylid ail-gydbwyso newid a gwaith dibynadwyedd. Yna mae Rhan 6 yn gwirio a yw cyrraedd y targedau yn y rhan hon wedi gadael defnyddwyr yn well eu byd, sef y cwestiwn na all adroddiad gwyrdd ei ateb ar ei ben ei hun.
