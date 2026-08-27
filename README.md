# allgemein

Code auf dem Tablet.

## 📷 Foto-Werkstatt (PWA)

Ein kleiner Snapseed-Begleiter fürs Tablet – installierbar als App (PWA),
funktioniert offline, speichert deine Daten lokal auf dem Gerät.

**Fünf Bereiche:**
- 📷 **Bild-Berater** – Motiv antippen (Wald/Grün &amp; Braun, Meer, Regennacht,
  Sonnenuntergang, Porträt, Berge, Stadt, Blumen, Food, Schnee) → kompletter
  Ablauf in vier Phasen (Basis → Kurven → lokal → Finish) plus Color Grading
  wahlweise auf Spannung oder Harmonie, mit konkreten Kurvengriffen.
- 🧪 **Rezepte** – 17 Looks, jeder mit Kurvenarbeit, Begründung je Schritt und
  Merksatz (70er-Kurven-Methode, Madeira/Wald, Teal &amp; Orange, Regennacht,
  Golden Hour, Moody, Street, Noir, Faded u. a.). Eigene Rezepte möglich.
- 🎨 **Farb-Helfer** – Farbrad mit zwei ziehbaren Punkten (Lichter/Schatten),
  darunter Feinsteuerung über Farbwähler und Sättigungs-/Helligkeitsregler.
  Zeigt die Beziehung der Töne, was jede Farbe ausdrückt, die Palette und die
  konkrete Snapseed-Umsetzung.
- 📖 **Wissen** – der komplette Spickzettel in 16 Gruppen, durchsuchbar.
- 📌 **Eigenes** – eigene Rezepte (Überschrift, Schritte, Merksatz, Stichworte)
  und schnelle Notizen. Wird lokal auf dem Gerät gespeichert.

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
