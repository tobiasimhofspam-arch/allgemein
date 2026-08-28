# allgemein

Code auf dem Tablet.

## 📷 Foto-Werkstatt (PWA)

Ein Lern- und Nachschlagewerkzeug für Bildbearbeitung fürs Tablet – installierbar als App (PWA),
funktioniert offline, speichert deine Daten lokal auf dem Gerät.

**Vier Bereiche:**
- 📷 **Bild-Berater** – Motiv antippen (Wald/Grün &amp; Braun, Meer, Regennacht,
  Sonnenuntergang, Porträt, Berge, Stadt, Blumen, Food, Schnee) → kompletter
  Ablauf in vier Phasen (Basis → Kurven → lokal → Finish) plus Color Grading
  wahlweise auf Spannung oder Harmonie, mit konkreten Kurvengriffen.
- 🧪 **Rezepte** – zwei Reiter: **Bild** (17 Looks, jeder mit Kurvenarbeit, Begründung je Schritt und
  Merksatz (70er-Kurven-Methode, Madeira/Wald, Teal &amp; Orange, Regennacht,
  Golden Hour, Moody, Street, Noir, Faded u. a.) und **Video** (Story-Grundgerüst,
  B-Roll-Checkliste, Reel-Aufbau, Kamera-Einstellungen). Eigene Rezepte in beiden.
- 🎨 **Farb-Helfer** – Farbrad mit zwei ziehbaren Punkten (Lichter/Schatten),
  darunter Feinsteuerung über Farbwähler und Sättigungs-/Helligkeitsregler.
  Zeigt die Beziehung der Töne, was jede Farbe ausdrückt, die Palette und die
  konkrete Umsetzung – dazu sechs **Richtungen** (saftig, märchenhaft,
  mystisch, nostalgisch, Kino, modern), die man aufs Rad übernehmen kann.
- 📖 **Wissen** – Spickzettel in 16 Gruppen, durchsuchbar; eigene Einträge und
  Gruppen lassen sich ergänzen.

**Alles ist löschbar.** Jedes mitgelieferte Rezept und jeder Wissens-Eintrag lässt
sich ausblenden, damit man die App komplett mit eigenem Wissen füllen kann.
Unter *Wissen → Vorlagen verwalten* geht das auch auf einen Schlag – und ist
jederzeit wiederherstellbar. Eigene Inhalte werden lokal auf dem Gerät gespeichert.

Die Werkzeugnamen orientieren sich an gängigen Foto-Apps; das Prinzip dahinter
gilt in jedem Bearbeitungsprogramm.

### Auf dem Tablet als App installieren

1. In den **Repo-Einstellungen → Pages** als Quelle den Branch mit diesen
   Dateien und den Ordner `/ (root)` wählen. GitHub gibt dann eine Adresse aus
   (z. B. `https://<dein-name>.github.io/allgemein/`).
2. Diese Adresse am Tablet im Browser öffnen.
3. **Zum Startbildschirm hinzufügen** – fertig, eigenes App-Icon (Farbrad).

### Dateien

| Datei | Zweck |
|-------|-------|
| `index.html` | die komplette App (HTML, CSS, JS in einer Datei) |
| `manifest.webmanifest` | App-Name, Icon, Standalone-Anzeige |
| `service-worker.js` | Offline-Cache |
| `icons/` | App-Icons (aus `scripts/make_icons.py` erzeugt) |
| `scripts/make_icons.py` | erzeugt die Icons neu (reines Python) |

> Werte in den Rezepten sind **Startpunkte** – je nach Bild anpassen.
