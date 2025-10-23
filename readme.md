# Vefforritun 1, 2025: Verkefni 8, JavaScript #2

- [Fyrirlestur 9.2: Verkefni 8](https://youtu.be/jtPxnGjNzmo)
- [Fyrirlestur 10.1: Meira um verkefni 8](https://youtu.be/1P6xlHeoJxU)
- [Fyrirlestur 10.2: Enn meira um verkefni 8](https://youtu.be/KKR0oiE4qTE)

## Markmið

- Skipta JavaScript forriti upp í einingar.
- Forrita á móti DOM, _Document Object Model_ og nota viðburði (events).
- Setja upp `eslint`.

## Virkni

- Hægt er að slá texta inn í textareit og bæta við atriði með því að ýta á takka („Bæta við“) eða ýta á Enter. Ekki ætti að bæta við atriði sem er tómt eða inniheldur aðeins bil eða whitespace.
- Hægt er að merkja atriði sem kláruð með því að haka í reit (checkbox) við hliðina á atriðinu.
- Hægt er að eyða einstöku atriði með því að ýta á takka (með t.d. ruslatunnu tákni eða „Eyða“ texta) við hliðina á atriðinu.
- Fjöldi kláraðra og ókláraðra atriða í lista uppfærist þegar atriði eru bætt við, þau kláruð eða þeim eytt.
- Takki fyrir neða lista með textanum „Fela kláruð atriði“ eða „Sýna kláruð atriði“ (breytist þegar ýtt er á takkann) ef fela á atriði eru öll kláruð atriði falin. Annars eru þau sýnd.
- Takki fyrir neða lista með textanum „Hreinsa allan lista“ sem eyðir öllum atriðum í listanum.
- Ef listinn er tómur eða verið er að fela öll kláruð atriði má sýna að engin atriði séu í listanum, t.d. með textanum „Engin atriði til að sýna.“, ekki er krafa um þetta atriði en hægt er að fá auka +5% fyrir það.

### Fyrirmynd

[Myndband af virkni eins og hún er útfærð í sýnilausn](v8.mp4).

<details>
  <summary>Lýsing á því sem kemur fram í myndbandi</summary>

Í myndbandinu má sjá:

- Vefur sem hefur fyrirsögnina „Todolisti“. Fyrir neðan er textinn „Bættu við atriðum, kláraðu þau eða eyddu.“
- Þar fyrir neðan er form með textareit með label „Verkefni“, í reitnum er placeholder texti „Heiti verkefnis“. Við hlið reitins er takki með textanum „Bæta við“.
- Fyrir neðan er skáletraður texti „Engin atriði til að sýna.“.
- Fyrir neðan er textinn „Kláruð: 0, ókláruð: 0“.
- Fyrir neðan er takki með textanum „Fela kláruð atriði“ og við hliðina á honum er takki með textanum „Hreinsa allan lista“.

Þegar myndbandið byrjar er mús notuð til að setja fókus á textareitinn og textinn „Verkefni 1“ er sleginn inn. Ýtt er á Enter og atriðið bætist við listann. Textareitur tæmist og þar sem áður stóð skáletraður texti „Engin atriði til að sýna.“ er nú ein færsla sem inniheldur:

- Checkbox sem er ekki hakað í.
- Textinn „Verkefni 1“.
- Emojitákn ruslafötu: 🗑

Þar fyrir neðan er textinn „Kláruð: 0, ókláruð: 1“.

Næst er skrifað „Verkefni 2“ í textareitinn og ýtt á takkann „Bæta við“ með músinni. Annað atriði bætist við listann með sama útliti og hið fyrra. Textareitur tæmist og þar fyrir neðan er textinn „Kláruð: 0, ókláruð: 2“.

Aftur er atriði bætt við með textann „Asdf...“. Textareitur tæmist og þar fyrir neðan er textinn „Kláruð: 0, ókláruð: 3“.

Skrifað er í reitinn „ “ (bara bil) og ýtt á Enter. Ekkert gerist en textareitur tæmist.

Mús er notuð til að haka í checkbox við hliðina á „Asdf...“. Atriðið fær ljósari texta og strik (strikethrough) í gegnum sig. Þar fyrir neðan er textinn „Kláruð: 1, ókláruð: 2“.

Mús er notuð til að haka í checkbox við hliðina á „Verkefni 2“. Atriðið fær ljósari texta og strik (strikethrough) í gegnum sig. Þar fyrir neðan er textinn „Kláruð: 2, ókláruð: 1“.

Ýtt er á takkann „Fela kláruð atriði“. Atriðin „Asdf...“ og „Verkefni 2“ hverfa úr listanum. Þar fyrir neðan er textinn „Kláruð: 2, ókláruð: 1“. Takkinn fyrir neðan listann breytist og stendur nú „Sýna kláruð atriði“. Aðeins „Verkefni 1“ er sýnt í listanum.

„Verkefni 1“ er klárað með því að haka í reitinn við hliðina á því. Atriðið hverfur úr listanum. Þar fyrir neðan er textinn „Kláruð: 3, ókláruð: 0“. Ekkert atriði er sýnt í listanum og skáletraði textinn „Engin atriði til að sýna.“ birtist aftur. Mús er notuð til að blokka textann til að draga hann sérstaklega fram.

Ýtt er með mús á „Sýna kláruð atriði“. Atriðin „Verkefni 1“, „Verkefni 2“ og „Asdf...“ birtast aftur í listanum, öll með strik í gegnum sig. Þar fyrir neðan er textinn „Kláruð: 3, ókláruð: 0“.

Ýtt er á ruslafötutáknið við hliðina á „Asdf...“. Upp kemur staðfestingargluggi sem spyr „Ertu viss um að þú viljir eyða?“. Ýtt er á „OK“ í glugganum og atriðið hverfur úr listanum. Þar fyrir neðan er textinn „Kláruð: 2, ókláruð: 0“.

Aftur er ýtt á „Fela kláruð atriði“. Öll atriðin hverfa úr listanum og skáletraði textinn „Engin atriði til að sýna.“ birtist aftur. Þar fyrir neðan er textinn „Kláruð: 2, ókláruð: 0“. Takkinn fyrir neðan listann breytist og stendur nú „Sýna kláruð atriði“. Strax aftur er ýtt á takkann „Sýna kláruð atriði“. Öll atriðin birtast aftur í listanum, öll með strik í gegnum sig. Þar fyrir neðan er textinn „Kláruð: 2, ókláruð: 0“.

Bæði „Verkefni 1“ og „Verkefni 2“ eru merkt ókláruð með því að taka hakið úr reitnum við hliðina á þeim. Þau fá aftur venjulegan texta. Þar fyrir neðan er textinn „Kláruð: 0, ókláruð: 2“.

Ýtt er á takkann „Hreinsa allan lista“. Upp kemur staðfestingargluggi sem spyr „Ertu viss um að þú hreinsa lista?“. Ýtt er á „OK“ í glugganum og öll atriðin hverfa úr listanum. Þar fyrir neðan er textinn „Kláruð: 0, ókláruð: 0“ og skáletraði textinn „Engin atriði til að sýna.“ birtist aftur.

</details>

## Skipta upp í einingar

Skipta skal forritinu upp í einingar—ES modules—með því að nota `export` og `import`.

Í gefnum grunn eru notaðar einingar.

## Grunnur

Gefinn er grunnur með lausn:

- Inni í `src` möppu eru:
  - `index.html` skrá
  - `styles.css` með útliti sem sjá má í fyrirmynd
  - `scripts.js` með grunn og skjölun.
  - `lib/todo.js` með grunn og skjölun.
  - `lib/elements.js` með hjálparföllum sem má nota.
- `.gitignore` skrá sem hunsar viðeigandi skrár og möppur.
- `package.json` skrá með NPM scripts og dependency á Parcel.
- `package-lock.json` skrá.

Ekki þarf að breyta neinu í `index.html` skrá eða `styles.css`.

Skjölun notar [`jsdoc`](https://jsdoc.app/).

### Uppsetning á grunn

Til að byrja að vinna verkefnið er hægt að sækja það frá GitHub:

```bash
# Inni í möppu sem á að geyma verkefnið
git clone https://github.com/vefforritun/vef1-2025-v8.git
# eða ef ssh uppsett
git clone git@github.com:vefforritun/vef1-2025-v8.git

# Förum inn í möppu
cd vef1-2025-v8

# Sækjum öll dependency með NPM
npm install

# Keyrum NPM script fyrir development
npm run dev
```

Áður en skilað er þarf að breyta remote í þitt eigið repo:

```bash
git remote remove origin
git remote add origin <slóð á þitt GitHub repo>
```

## eslint

Setja skal upp `eslint` með því að keyra:

```bash
npm init @eslint/config@latest
```

Fylgið ferlinu og veljið viðeigandi, þið ættuð að enda með `eslint.config.mjs` skrá sem inniheldur:

```javascript
import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
  },
]);
```

Nú þegar er uppsett `lint` script í `package.json` sem keyrir `eslint` á allar `.js` skrár í `src` möppu. Þegar það er keyrt ættu engar villur að koma upp.

## GitHub & Netlify

Setja skal upp verkefnið á GitHub og skila með slóð á repo. Tengja skal Netlify við GitHub repo.

## Mat

- 10% — Verkefni er skipt upp í einingar (modules).
- 15% — Hægt að bæta við atriði í lista.
- 10% — Hægt að merkja atriði klárað og óklárað í lista.
- 10% — Hægt að eyða stöku atriði úr lista.
- 10% — Fjöldi kláraðra og ókláraðra atriða í lista uppfærist.
- 15% — Hægt að fela kláruð atriði.
- 10% — Hægt að eyða öllum atriðum.
- 10% — eslint uppsett og engar villur
- 10% — Verkefni sett upp GitHub og á Netlify

Bónust 5% (hámark 10 í verkefni) — Ef listinn er tómur eða verið er að fela öll kláruð atriði, eru sýnd skilaboð um það.

## Sett fyrir

Verkefni sett fyrir í fyrirlestri mánudaginn 13. október 2025.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 23. október 2025.

Skilaboð skulu innihalda:

- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `klingsterina`
  - `kristinfrida`
  - `osk`
  - `reynirjr`

> Útgáfa 0.3

## Útgáfusaga

| Útgáfa | Lýsing                     |
| ------ | -------------------------- |
| 0.1    | Fyrsta útgáfa verkefnisins |
| 0.2    | Final v1 |
| 0.3    | Final v3 |
