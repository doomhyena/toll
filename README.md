# Toll

Asztali elektronikus ellenőrző alkalmazás középiskolásoknak, a magyar [e-Kréta](https://www.e-kreta.hu/) rendszerhez csatlakozva. Wails v2 keretrendszerrel készült - a felhasználói felület React/TypeScript, a háttér Go.

## Funkciók

- **Bejelentkezés** - intézménykereső + Kréta-azonosítóval, tokenes munkamenet
- **Többfiókos kezelés** - több Kréta-fiók mentése, váltás köztük
- **Főoldal** - köszöntő, aktuális/következő óra widget, legutóbbi jegyek, közelgő házi feladatok
- **Órarend** - heti nézet (csak munkanapok / munkanapok + szombat / teljes hét), hétközi navigáció, óra részletek modal
- **Osztályzatok** - tantárgyankénti csoportosítás, súlyozott átlag, félévi és év végi jegyek kiemelése
- **Házi feladatok** - határidő szerint szűrve, státusz (esedékes / sürgős / teljesített), tantárgyszűrő
- **Füzet** - offline jegyzetek és feladatlisták, lokálisan tárolva
- **Profil** - becenév és profilkép beállítása (lokálisan, nem a Kréta-fiókhoz kötve)
- **DKT** - gyors megnyitó gomb a Digitális Tankönyvtárhoz

## Előfeltételek

| Eszköz | Verzió |
|---|---|
| [Go](https://go.dev/dl/) | 1.23+ |
| [Node.js](https://nodejs.org/) | 18+ |
| [Wails CLI](https://wails.io/docs/gettingstarted/installation) | v2 |

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

## Fejlesztés

```bash
# Frontend függőségek telepítése (első alkalommal)
cd frontend && npm install && cd ..

# Fejlesztői mód (hot-reload)
wails dev
```

## Build

```bash
wails build
```

A lefordított bináris a `build/bin/toll.exe` helyen jön létre.

## Technológiai stack

- **[Wails v2](https://wails.io/)** - Go + React asztali keretrendszer
- **Go 1.23** - háttér logika, Kréta API integráció
- **React 18 + TypeScript** - felhasználói felület
- **Vite 3** - frontend build eszköz
- **e-Kréta MOBILE API** - `authorization_code + PKCE` hitelesítési folyamat

## Megjegyzés

Ez az alkalmazás **nem hivatalos** fejlesztés, és nincs kapcsolatban az e-Kréta Zrt.-vel. A Kréta API használata kizárólag személyes, nem kereskedelmi célú.

## Licenc

[GNU Affero General Public License v3.0](LICENSE) © 2026 Anasztázia
