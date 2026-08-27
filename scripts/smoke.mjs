import { chromium } from 'playwright';
import path from 'path'; import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname,'..');
const url = 'file://' + path.join(root,'index.html');
const b = await chromium.launch({ executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
const p = await b.newPage({ viewport:{width:420,height:900}, deviceScaleFactor:2 });
const errs=[]; p.on('console',m=>{if(m.type()==='error')errs.push(m.text())}); p.on('pageerror',e=>errs.push('PAGEERROR: '+e.message));
await p.goto(url); await p.waitForTimeout(400);

// Berater: Wald-Motiv anklicken
await p.click('.motif[data-id="m-wald"]'); await p.waitForTimeout(300);
const adviceHasSteps = await p.$$eval('#adviceBox .steps li', e=>e.length);
await p.screenshot({ path: path.join(root,'scripts/shot-berater.png') });
// Look-Chip anklicken -> soll zu Rezept springen
await p.click('#adviceBox .look-chip'); await p.waitForTimeout(400);
const jumpedTab = await p.$eval('#tab-rezepte', e=>e.classList.contains('active'));
const openCard = await p.$$eval('#rezList .card.open', e=>e.length);

// Farb-Helfer
await p.click('nav button[data-tab="farbe"]'); await p.waitForTimeout(300);
const howText = await p.$eval('#howTip', e=>e.textContent.trim().length);
await p.screenshot({ path: path.join(root,'scripts/shot-farbe.png') });

// Wissen
await p.click('nav button[data-tab="spick"]'); await p.waitForTimeout(300);
const spickCount = await p.$$eval('#spickList .card', e=>e.length);
const hasWhen = await p.$$eval('#spickList .whenline', e=>e.length);
await p.screenshot({ path: path.join(root,'scripts/shot-spick.png') });

// Rezepte-Anzahl
await p.click('nav button[data-tab="rezepte"]'); await p.waitForTimeout(200);
const rez = await p.$$eval('#rezList .card', e=>e.length);

console.log('Berater-Schritte(Wald):', adviceHasSteps);
console.log('Look-Chip -> Rezepte-Tab aktiv:', jumpedTab, '| offene Karte:', openCard);
console.log('Farb-Helfer howTip Länge:', howText);
console.log('Wissen-Einträge:', spickCount, '| davon mit Wann-Zeile:', hasWhen);
console.log('Rezepte:', rez);
console.log('Fehler:', errs.length?errs:'keine');
await b.close();
process.exit(errs.length?1:0);
