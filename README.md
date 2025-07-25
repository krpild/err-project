# err-project

## Projekti käivitamine



## Taust

Tere! Olen Kristjan Pilden! Mulle meeldib alati midagi uut õppida ja olen suur kunsti sõber. Tegelen rohkelt maalimisega. Värskelt ülikooli lõpetanud, olen ma enamasti tegelenud *backend* arendusega, aga elu ei saa toimuda kaadrite taga kui jutt käib klientidest või mugavast rakenduse kasutusest, seega otsustasin proovida kätt *frontend* arenduses. Ma olen juba tuttav Vue ja React raamistikuga. Mõlemad õppisin ülikooli raames ja React raamistiku õppisin eksami ajal ;). Sain Andres Käveri (loodan see nimi ütleb midagi) eksami viie tunniga tehtud koos kõikide lisaülesannetega, seega pean ennast üsna kiireks õppijaks. Enamus ajast tegelikult kulus vanemate talus sisseelamisele koos kõikide aiatöödega ja loomadega. Loodan see liiga halvasti ei peegeldu ajaplaneerimise poolest. Igatahes sain rahulikult tehes selle ülesande valmis ja olen üsna rahul tulemusega kuigi on mõningaid piiranguid ja küsimusi. Piisab minust, aeg lahata projekti. 

## Lahenduskäik

Esimese sammuna oli otseloomulikut tutvuda Angular raamistikuga. Ei saa kasutada tööriista mida ei oska kasutada. Töötasin läbi mõned Angular dokumentatsiooni materjalid ja vaatasin toreda Angular sissejuhatuse [video](https://www.youtube.com/watch?v=oUmVFHlwZsI&ab_channel=CodewithAhsan) ning tegin kaasa seal tööd.

Kui Angular ei olnud enam müstika, suundusin kirjutama [prototüüpi](https://github.com/krpild/err-prototype) (millel on liigagi piinlik Git ajalugu). Seal maadlesin karusselli UI elemendi ehitamisega, kuna pidasin seda alguses täielikuks müstikaks.

### Karusselli ehitus

Kuna see oli müsteerium minu jaoks, otsustasin koheselt suunduda Jupiter lehele ja uurida sealt *inspect* nupu abil, kuidas need on üles ehitatud. Nägin, et kõik pildid on pandud timeline sees konteinerisse. Ega need ei saa pilla-palla olla. Vajutades nooltele sai selgeks ühel hetkel, et kõik pildid on korraga laetud ja see on kõik tegelikult CSS. Eelnev *frontend* kogemus tasus ära ja hammasrattad peas hakkasid pöörlema. Selgus, et see kõik oli tänu transform atribuudile - timeline lihtsalt libiseb vasakule-paremale koos transition atribuudiga, et see näeks välja ilusasti. Uurisin veel ERR lehte, kuna mul nüüd veebileht oli liialt lai ja avastasin overflow atribuudi. Panin selle false ja nüüd läksid ekraanilt väljaspool olevad pildid peitu ja ei tekkinud horisontaalset scroll riba alt.

Nüüd oluline küsimus - kuidas liigutada seda riba?

Vaadates ERR lehte, nupu vajutusel vahetuvad välja kõik klikitavad elemendid. Seega muutus peab olema 100%. Määrasin mitu elementi peaks olema 100% ja panin selle info constants.ts faili, mida saab muuta programmi jooksutamise ajal kui väga tekib soovi (paras oksümoron). Uus küsimus - kuidas piirata nupudega liikumist? Vasakule poole liikumist võib lihtsalt piirata sellega, et transformX ei tohi olla alla 0%. Paremale poole liikumist tuli piirata hoopiski sellega, et tuli arvestada välja mitu elementi on ribal kokku ja mitu elementi hetkel tahaks näidata. Ütleme mul on 11 elementi ja ma näitan 4 elementi korraga - maksimum on siis 275% aga see siis liigub lihtsalt viimase liikme ette ja ei näegi pilte, seega tuleb võtta maha 100% ja nüüd on näha vaid 4 viimast elementi. Üsna lihtne ja elegantne lahendus. Vastavalt siis kas on riba vasakus või paremas ääres peidan nupud ja voilà - töötav ja lihtne lahendus.

### Andmete vastuvõtt API poolt

Siin tuli veidi maadelda Angulariga, et aru saada mida konkreetselt see subscribe ja pipe tähendavad ja kuidas service poolt pipe tagastamine on erinev komponendi sees subscribe kasutamisest. Võttis veidi aega, aga ainult ühe GET meetodi tegemine polegi nii hull - lihtsalt võtan andmed JSONist välja ja surun need mudelite sisse. Kus mina tulistasin endale jalga oli see, et ma ei kontrollinud mis pildi liiki ma kasutasin. Alguses kasutasin photoUrlOriginal ja mõtlesin miks mu leht on aeglane. Mõtlesin kui kallis on tekstuuride töötlemine mängudes ja viskasin pilku uuesti antud API sisse. Ma kasutasin ühe kõrgemast kvaliteediga varianti. Panin 17 peale ja enam-vähem töötas ilusasti.

Ja tegelikult polnudki nii palju tööd. Üks õhtu prototüübi kirjutamiseks ja teine õhtu päris asja kokku panemiseks.

## Piirangud

Mul ei adapteeru nii ilusasti see leht oma ribal elementide kuvamise arvuga kui ERR lehel. Ma oletan, et see töötab mingil breakpoint süsteemil, aga pole lõpuni kindel. Teine asi mis mind huvitab on see kuidas ERR leht laeb progressiivselt ja säästab nii palju ressursse. MA TAHAN KA TEADA!!!

## Kokkuvõteks

Mulle väga meeldis töö Angulariga. Tundus intuitiivsem kui Vue või React ja nüüdsest see on minu lemmit raamistik. Sellega on kõik lihtsalt loogiline ja arusaadav. Kui teil on vaba aega, palun öelge kuidas ERR lehel on tehtud nii, et veebileht laeb vaid scrollimise ajal. Mind tapab minu uudishimu.

Aitäh, et lugesite lõpuni!
