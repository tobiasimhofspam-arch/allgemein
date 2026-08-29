# allgemein

Code auf dem Tablet.

## 🎨 ColorGrade (PWA)

Ein Lern- und Nachschlagewerkzeug für Bildbearbeitung fürs Tablet – installierbar als App (PWA),
funktioniert offline, speichert deine Daten lokal auf dem Gerät. Die App startet mit einem
**geführten Lernbereich**: acht aufeinander aufbauende Grundlagen-Lektionen mit kleinen Grafiken,
die Einsteiger Schritt für Schritt durch ihre erste Bildbearbeitung führen – und die
Fortgeschrittene über ausklappbare Vertiefungen und das Nachschlagewerk weiterhin bedienen.

**Vier Bereiche:**
- 📷 **Bild-Berater** – Motiv antippen (Wald/Grün &amp; Braun, Meer, Regennacht,
  Sonnenuntergang, Porträt, Berge, Stadt, Blumen, Food, Schnee) mit drei
  Ebenen. **Aufnehmen:** wie du dieses Motiv am besten fotografierst (Licht,
  Perspektive, Bildaufbau, Technik). **Verstehen:** das Konzept aufgeschlüsselt – Kernidee,
  eine Grafik, die zeigt, wo auf der Tonachse es greift, ein „So spielt es
  zusammen“ Phase für Phase mit Sprung in die passende Lektion, und ein Fazit.
  **Anwenden:** der komplette Ablauf in vier Phasen (Basis → Kurven → lokal →
  Finish) plus Color Grading wahlweise auf Spannung oder Harmonie, mit
  konkreten Kurvengriffen.
- 🧪 **Rezepte** – zwei Reiter: **Bild** (17 Looks, jeder mit Kurvenarbeit, Begründung je Schritt und
  Merksatz (70er-Kurven-Methode, Madeira/Wald, Teal &amp; Orange, Regennacht,
  Golden Hour, Moody, Street, Noir, Faded u. a.) und **Video** (Story-Grundgerüst,
  B-Roll-Checkliste, Reel-Aufbau, Kamera-Einstellungen). Eigene Rezepte in beiden.
- 🎨 **Farbe** – zwei Ebenen wie im Wissen. **Farblehre:** ein geführter Pfad
  aus acht Lektionen zur Farbtheorie (Was ist Farbe? · Der Farbkreis · Die drei
  Eigenschaften · Warm &amp; Kühl · Farbharmonien · Kontrast &amp; Kontext · Was
  Farben ausdrücken · Farbe im Bild einsetzen), jede mit Grafik, „Merke",
  „Probier's" und Sprüngen ins Farbrad und in die passenden Wissens-Lektionen.
  **Farbrad:** das Rad mit zwei ziehbaren Punkten (Lichter/Schatten), Feinsteuerung,
  Beziehung der Töne, Bedeutung der Farben, Palette und sechs **Richtungen**
  (saftig, märchenhaft, mystisch, nostalgisch, Kino, modern) – die Farblehre am
  eigenen Bild angewandt.
- 📖 **Wissen** – der Einstieg der App, mit zwei Ebenen. **Lernen:** ein
  geführter Pfad aus zwölf Grundlagen-Lektionen (Was ist Bildbearbeitung? · Die
  drei Zonen · Licht steuern · Die Kurve verstehen · Weißabgleich · Farbe &amp;
  Sättigung · Stimmung machen · Details &amp; Finish · Ebenen &amp; Masken ·
  Auswählen &amp; Freistellen · Retuschieren · Bildaufbau), jede mit Hook, kleiner
  Grafik, einfacher Erklärung, „Merke", „Probier's" und einer ausklappbaren
  Vertiefung für Fortgeschrittene; gelesene Lektionen werden lokal abgehakt.
  **Nachschlagen:** der durchsuchbare Spickzettel in 19 Gruppen (inkl. zwei
  Video-Gruppen). Eigene Einträge und Gruppen lassen sich ergänzen.

**Alles ist löschbar.** Jedes mitgelieferte Rezept und jeder Wissens-Eintrag lässt
sich ausblenden, damit man die App komplett mit eigenem Wissen füllen kann.
Unter *Wissen → Vorlagen verwalten* geht das auch auf einen Schlag – und ist
jederzeit wiederherstellbar. Eigene Inhalte werden lokal auf dem Gerät gespeichert.

Die Werkzeugnamen orientieren sich an gängigen Foto-Apps; das Prinzip dahinter
gilt in jedem Bearbeitungsprogramm.

### Auf dem Tablet als App installieren

1. **Veröffentlichen** über GitHub Pages: Repo-Einstellungen → *Pages* → Source
   `Deploy from a branch`, Branch `main`, Ordner `/ (root)`. Nach ein bis zwei
   Minuten liegt die App unter `https://<benutzername>.github.io/allgemein/`.
   Hinweis: Bei einem **privaten** Repo braucht GitHub Pages einen Bezahlplan –
   bei einem kostenlosen Konto das Repo dafür auf öffentlich stellen oder einen
   anderen Static-Host (Netlify, Cloudflare Pages) verwenden.
2. Die Adresse am Tablet im Browser öffnen.
3. **Zum Startbildschirm hinzufügen** – fertig, eigenes App-Icon (Farbrad),
   Vollbild ohne Browserleiste, funktioniert offline.

Nach einer Änderung: `service-worker.js` die Cache-Version hochzählen, damit
installierte Geräte die neue Fassung laden.

### Dateien

| Datei | Zweck |
|-------|-------|
| `index.html` | die komplette App (HTML, CSS, JS in einer Datei) |
| `manifest.webmanifest` | App-Name, Icon, Standalone-Anzeige |
| `service-worker.js` | Offline-Cache |
| `icons/` | App-Icons (aus `scripts/make_icons.py` erzeugt) |
| `scripts/make_icons.py` | erzeugt die Icons neu (reines Python) |

> Werte in den Rezepten sind **Startpunkte** – je nach Bild anpassen.
