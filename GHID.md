# Ghid de utilizare — Pinro Trepte

> **Citește asta înainte de orice altceva.** Dacă ai o problemă și nu găsești răspunsul aici, scrie-mi și rezolvăm împreună.

---

## Cuprins

1. [Conturi create și ce face fiecare](#1-conturi-create-și-ce-face-fiecare)
2. [Confirmare: nu există costuri lunare](#2-confirmare-nu-există-costuri-lunare)
3. [Cum mă loghez la /admin](#3-cum-mă-loghez-la-admin)
4. [Cum adaug o lucrare în portofoliu](#4-cum-adaug-o-lucrare-în-portofoliu)
5. [Cum adaug un articol de blog](#5-cum-adaug-un-articol-de-blog)
6. [Cum schimb telefonul, adresa sau programul](#6-cum-schimb-telefonul-adresa-sau-programul)
7. [Cum încarc poze noi](#7-cum-încarc-poze-noi)
8. [Ce se întâmplă după ce apăs „Publish"](#8-ce-se-întâmplă-după-ce-apăs-publish)
9. [Ce să fac dacă ceva nu merge](#9-ce-să-fac-dacă-ceva-nu-merge)
10. [Configurarea formularului de contact](#10-configurarea-formularului-de-contact)

---

## 1. Conturi create și ce face fiecare

Ai nevoie de **3 conturi**, toate gratuite, fără card bancar.

| Cont | Site | La ce folosește |
|------|------|-----------------|
| **GitHub** | github.com | Stochează tot codul și conținutul site-ului (articole, poze, texte). E ca un sertar unde se păstrează toate fișierele. |
| **Cloudflare** | cloudflare.com | Publică site-ul pe internet și îi dă un nume de domeniu. De fiecare dată când adaugi ceva nou, Cloudflare îl preia automat din GitHub și îl publică în câteva minute. |
| **Formspree** | formspree.io | Primește mesajele trimise prin formularul de contact și le redirecționează pe email-ul tău. |

**Important:** Toate cele 3 conturi comunică între ele automat. Tu nu trebuie să faci nimic tehnic — scrii un articol, apeși „Publish", și în 2–3 minute apare pe site.

---

## 2. Confirmare: nu există costuri lunare

| Serviciu | Plan folosit | Cost |
|----------|-------------|------|
| GitHub | Free | 0 lei/lună |
| Cloudflare Pages | Free | 0 lei/lună — include 500 publicări/lună și trafic nelimitat |
| Formspree | Free | 0 lei/lună — include 50 mesaje/lună |
| Sveltia CMS (panoul admin) | Open source | 0 lei/lună |

**Trafic rezonabil** înseamnă sute de mii de vizitatori pe lună — site-ul unui atelier de trepte nu va depăși niciodată limitele planului gratuit Cloudflare.

**Dacă vrei un domeniu propriu** (ex: `pinrotrepte.ro`), acela costă ~50–70 lei/an. Nu este obligatoriu — site-ul funcționează și fără, la o adresă de forma `pinro-site.pages.dev`.

---

## 3. Cum mă loghez la /admin

Panoul de administrare este accesibil la adresa:

```
https://pinro-site.pages.dev/admin
```

*(adresa exactă o vei ști după ce site-ul este publicat pe Cloudflare)*

**Pași de logare:**

1. Deschide adresa de mai sus în browser
2. Apasă butonul **„Login with GitHub"**
3. Se deschide o fereastră GitHub — introdu email și parola contului GitHub
4. Apasă **„Authorize"** (dai voie aplicației să scrie pe site)
5. Ești acum în panoul de administrare

> **Notă:** Prima dată va trebui să autorizezi aplicația. Data viitoare ești logat automat dacă ești deja logat în GitHub.

---

## 4. Cum adaug o lucrare în portofoliu

1. Loghează-te la `/admin` (vezi pasul 3)
2. În meniul din stânga, apasă **„Portofoliu"**
3. Apasă butonul **„+ New Lucrare"** (în dreapta sus)
4. Completează câmpurile:
   - **Titlu lucrare** — ex: `Scară dreaptă, stejar, Cluj-Napoca`
   - **Tip suport** — alege din listă: Beton / Metal / Ambele
   - **Imagine principală** — apasă „Choose an image" → „Upload" → selectează poza de pe calculator
   - **Galerie foto** (opțional) — poți adăuga mai multe poze
   - **Anul realizării** (opțional)
   - **Descriere scurtă** — 1–2 propoziții care apar pe card
   - **Detalii complete** (opțional) — text mai lung cu detalii tehnice
5. Apasă **„Save"** (salvează schița)
6. Apasă **„Publish"** pentru a publica pe site

---

## 5. Cum adaug un articol de blog

1. Loghează-te la `/admin`
2. În meniul din stânga, apasă **„Articole Blog"**
3. Apasă **„+ New Articol"**
4. Completează:
   - **Titlu articol** — titlul care apare pe pagină
   - **Data publicării** — selectează din calendar
   - **Imagine principală** (opțional) — poza de copertă
   - **Descriere scurtă** — rezumat în 1–2 propoziții
   - **Conținut articol** — scrie textul folosind editorul vizual
     - Poți face text **bold** (îngroșat), *italic*, titluri, liste
     - Funcționează similar cu Word sau Google Docs
5. Apasă **„Save"** apoi **„Publish"**

---

## 6. Cum schimb telefonul, adresa sau programul

1. Loghează-te la `/admin`
2. În meniul din stânga, apasă **„Setări site"**
3. Apasă **„Informații contact"**
4. Modifică ce ai nevoie:
   - **Telefon** — ex: `0721 234 567`
   - **Email** — adresa de email de contact
   - **Adresă** — strada, numărul, orașul
   - **Program** — scrie fiecare zi pe linie separată, ex:
     ```
     Luni–Vineri: 08:00 – 18:00
     Sâmbătă: 09:00 – 14:00
     Duminică: Închis
     ```
   - **Link Facebook / Instagram** (opțional) — linkul complet al paginii
5. Apasă **„Save"** apoi **„Publish"**

Modificările apar automat în **header**, **footer** și **pagina Contact**.

---

## 7. Cum încarc poze noi

Pozele se pot încărca direct când adaugi o lucrare sau un articol (vezi pașii 4 și 5). Există și o secțiune dedicată:

1. Loghează-te la `/admin`
2. În meniul din stânga, apasă **„Media"** (sau iconița cu imagini)
3. Apasă **„Upload"** și selectează pozele de pe calculator
4. Pozele sunt salvate automat în folderul `/images/uploads/` și pot fi folosite în orice lucrare sau articol

**Sfaturi pentru poze:**
- Folosește poze cu lățimea de cel puțin **1200 pixeli** — arată bine pe orice ecran
- Formatele acceptate: **JPG, PNG, WebP**
- Nu folosi poze mai mari de **5 MB** — se încarcă mai lent

---

## 8. Ce se întâmplă după ce apăs „Publish"

Procesul este complet automat:

```
Tu apeși "Publish"
      ↓
Conținutul se salvează în GitHub (2-3 secunde)
      ↓
Cloudflare detectează schimbarea (automat)
      ↓
Cloudflare reconstruiește site-ul (1-2 minute)
      ↓
Site-ul actualizat este live pe internet
```

**Total timp de așteptare:** 1–3 minute după ce apeși „Publish".

Poți verifica progresul accesând contul Cloudflare → Pages → pinro-site → Deployments. Dacă scrie **„Success"** în verde, site-ul este actualizat.

---

## 9. Ce să fac dacă ceva nu merge

### Site-ul nu se încarcă deloc

1. Verifică statusul Cloudflare la: **https://www.cloudflarestatus.com**
   - Dacă scrie **„All Systems Operational"** (verde) — problema e în altă parte
   - Dacă scrie ceva în roșu sau galben — e o problemă la Cloudflare, aștepți să se rezolve singur (de obicei sub 1 oră)

### Am apăsat „Publish" dar site-ul nu s-a actualizat

1. Intră în Cloudflare → Pages → pinro-site → Deployments
2. Uită-te la ultimul deployment:
   - **„In Progress"** (albastru) — mai ai de așteptat 1–2 minute
   - **„Success"** (verde) — site-ul a fost actualizat; dacă nu vezi schimbările, apasă **Ctrl+F5** în browser
   - **„Failed"** (roșu) — a apărut o eroare tehnică; **fă un screenshot și trimite-mi**

### Nu mă pot loga la /admin

- Verifică că ești logat în contul GitHub în browser (mergi la github.com și confirmă)
- Încearcă să ștergi cookie-urile pentru site și reloghează-te
- Dacă tot nu merge, scrie-mi

### Formularul de contact nu trimite emailuri

- Verifică că ai urmat pașii din [secțiunea 10](#10-configurarea-formularului-de-contact)
- Verifică folderul **Spam** din emailul tău — uneori mesajele Formspree ajung acolo prima dată

### Alt tip de problemă

**Fă un screenshot** cu ce vezi (apasă `Print Screen` sau `Windows + Shift + S`) și trimite-mi pe email/WhatsApp cu o descriere scurtă a ce ai încercat să faci. Nu încerca să repari singur lucruri tehnice — e mai simplu dacă rezolvăm împreună.

---

## 10. Configurarea formularului de contact

Formularul de contact trimite mesajele pe emailul tău prin serviciul **Formspree** (gratuit, 50 mesaje/lună).

### Pasul 1 — Creează cont Formspree

1. Mergi la **https://formspree.io**
2. Apasă **„Sign Up"** → creează cont cu emailul tău
3. Confirmă emailul (vei primi un link de confirmare)

### Pasul 2 — Creează un formular

1. Loghează-te pe formspree.io
2. Apasă **„+ New Form"**
3. Dă un nume (ex: `Contact Pinro`) și apasă **„Create Form"**
4. Copiază codul care arată astfel: `https://formspree.io/f/xyzabcde` — **rețineți ultima parte**: `xyzabcde` (8 caractere)

### Pasul 3 — Leagă formularul de site

Deschide fișierul `src/pages/contact.astro` și găsește linia:

```
action="https://formspree.io/f/INLOCUIESTE_CU_CODUL_TAU"
```

Înlocuiește `INLOCUIESTE_CU_CODUL_TAU` cu codul tău (ex: `xyzabcde`).

Salvează fișierul → publică pe GitHub → Cloudflare va actualiza automat.

---

*Ultima actualizare: Mai 2026*
