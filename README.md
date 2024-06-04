# Utlåns- og inventarsystem for 2INF

Dette prosjektet er et utlåns- og inventarsystem for 2INF ved Hamar katedralskole. Systemet hjelper med å holde oversikt over utstyr i klasserommet, inkludert informasjon om hva slags utstyr som finnes, status på utstyret, hvem som bruker det, hvor mye det kostet, og hvor gammelt det er.

## Funksjonalitet

- **Brukervennlighet**: Nettsiden er designet for å være enkel å bruke både på PC og mobil.
- **Søkefunksjon**: Filtrering av utstyr basert på navn, produsent, spesifikasjoner og kategori.
- **Låne utstyr**: Mulighet for å låne ut utstyr ved å fylle ut navn og telefonnummer.
- **Returnere utstyr**: Oversikt over lånte produkter og mulighet for å returnere dem.
- **Admin-funksjon**: Innlogging for admin som gir tilgang til ekstra informasjon som telefonnummer til de som har lånt utstyr.

## Teknologier og verktøy brukt

- **React**: Bibliotek for å bygge brukergrensesnitt.
- **Vite**: Byggverktøy for rask utvikling.
- **Tailwind CSS**: CSS-rammeverk for å raskt lage stilige brukergrensesnitt.
- **Context API**: For å håndtere global tilstand og utstyrsinformasjon.
- **LocalStorage**: For å lagre informasjon om utstyr lokalt i nettleseren.

## Installasjon og kjøring

Følg disse trinnene for å laste ned og kjøre prosjektet lokalt:

1. **Klon repoet**:

   ```bash
   git clone https://github.com/Konge5678/Eksamen-2024.git
   cd Eksamen-2024
   ```

2. **Installer avhengigheter**:

   ```bash
   npm install
   ```

3. **Start utviklingsserveren**:

   ```bash
   npm run dev
   ```

4. **Åpne nettleseren**:
   Åpne nettleseren og gå til `http://localhost:5173`.
