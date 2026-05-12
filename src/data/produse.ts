export interface Produs {
  slug: string;
  titlu: string;
  descriereScurta: string;
  descriere: string;
  imagineHero: string;
  galerie: string[];
  specificatii: { label: string; valoare: string }[];
}

export const produse: Produs[] = [
  {
    slug: 'scari-drepte-beton',
    titlu: 'Scări drepte pe suport beton',
    descriereScurta: 'Trepte din stejar masiv montate pe structuri de beton turnat. Precizie și durabilitate garantate.',
    descriere: `La Pinro, ne-am dedicat pasiunii de a crea trepte din lemn masiv de cea mai înaltă calitate, perfecte pentru scările drepte fixate pe un suport de beton.

Fiecare treaptă este realizată cu dragoste și pricepere de către meșterii noștri experimentați. Oferim o combinație perfectă între estetică și rezistență, transformând fiecare scară într-un punct central de atracție în locuința dumneavoastră.

**Materialul:** Lemn masiv de stejar, selectat din surse sustenabile. Lemnul masiv de stejar este cunoscut pentru duritatea sa, perfect pentru zonele cu trafic intens.

**Procesul de fabricație:** Ne concentrăm pe precizie și atenție la detalii. Indiferent dacă alegeți un design clasic sau modern, putem adapta treptele pentru a se potrivi cu preferințele dumneavoastră.

**Siguranța și funcționalitatea** sunt de o importanță primordială. Utilizăm adezivi poliuretanici de înaltă calitate pentru o lipire solidă a treptelor pe suportul de beton.`,
    imagineHero: '/images/uploads/scari-drepte-beton-(1).JPEG',
    galerie: ['/images/uploads/scari-drepte-beton-(2).JPEG'],
    specificatii: [
      { label: 'Material', valoare: 'Stejar masiv' },
      { label: 'Grosime trepte', valoare: '40mm – 80mm' },
      { label: 'Suport', valoare: 'Beton turnat' },
      { label: 'Finisaj', valoare: 'Ulei natural, lac mat sau lucios' },
      { label: 'Contratreaptă', valoare: 'MDF vopsit sau lemn masiv' },
      { label: 'Montaj inclus', valoare: 'Da' },
    ],
  },
  {
    slug: 'scari-drepte-metal',
    titlu: 'Scări drepte pe suport metal',
    descriereScurta: 'Trepte din stejar masiv adaptate pentru structuri metalice. Design modern și elegant.',
    descriere: `La Pinro, suntem dedicați cu pasiune creației treptelor din lemn masiv de cea mai înaltă calitate, perfect adaptate pentru scările drepte pe suport de metal.

Fiecare treaptă este o operă de artă și pricepere, realizată cu meticulozitate de către meșterii noștri. Îmbinăm cu măiestrie estetica și rezistența, transformând fiecare scară dreaptă într-un punct central de atracție în interiorul locuinței dumneavoastră.

**Materialul:** Lemn masiv de stejar autentic, ales cu grijă din surse sustenabile. Duritatea stejarului îl face alegerea ideală pentru scările pe suport metalic.

**Adaptare perfectă:** Fiecare treaptă este croită individual după dimensiunile exacte ale structurii metalice existente. Gaura de fixare și toleranțele sunt calculate cu precizie pentru un montaj stabil și silențios.

Oferim opțiuni pentru balustrade și mâini curente din lemn, adăugând un plus de eleganță scării drepte pe suport de metal.`,
    imagineHero: '/images/uploads/cat-scari-drepte-metal-(4).JPEG',
    galerie: [],
    specificatii: [
      { label: 'Material', valoare: 'Stejar masiv' },
      { label: 'Grosime trepte', valoare: '40mm – 80mm' },
      { label: 'Suport', valoare: 'Structură metalică' },
      { label: 'Finisaj', valoare: 'Ulei natural, lac mat sau lucios' },
      { label: 'Fixare', valoare: 'Adeziv poliuretanic + șuruburi inox' },
      { label: 'Montaj inclus', valoare: 'Da' },
    ],
  },
  {
    slug: 'scari-unghi-beton',
    titlu: 'Scări în unghi pe suport beton',
    descriereScurta: 'Scări cu podest sau întoarcere, montate pe suport de beton. Soluții pentru orice configurație.',
    descriere: `Scările în unghi adaugă un element arhitectural elegant oricărui interior. La Pinro, proiectăm și montăm trepte din stejar masiv pentru scări în unghi pe structuri de beton.

Fiecare proiect începe cu o măsurătoare detaliată la fața locului. Croim fiecare treaptă individual, ținând cont de unghiurile și dimensiunile exacte ale podestului și ale structurii de beton.

**Design flexibil:** Scara ta poate include un podest intermediar dreptunghiular, o întoarcere la 90° sau la 180°. Adaptăm soluția la spațiul și la nevoile tale.

**Balustrade și mână curentă:** Completăm scara cu balustradă și mână curentă din lemn masiv sau combinat cu metal, după preferință.`,
    imagineHero: '/images/uploads/scari-unghi-beton-(4).JPEG',
    galerie: [
      '/images/uploads/scari-unghi-beton-(5).JPEG',
      '/images/uploads/scari-unghi-beton-(6).JPEG',
      '/images/uploads/scari-unghi-beton-(7).JPEG',
      '/images/uploads/scari-unghi-beton-(8).JPEG',
    ],
    specificatii: [
      { label: 'Material', valoare: 'Stejar masiv' },
      { label: 'Grosime trepte', valoare: '40mm – 80mm' },
      { label: 'Suport', valoare: 'Beton turnat' },
      { label: 'Configurație', valoare: 'Cu podest sau întoarcere' },
      { label: 'Finisaj', valoare: 'Ulei natural, lac mat sau lucios' },
      { label: 'Montaj inclus', valoare: 'Da' },
    ],
  },
  {
    slug: 'scari-unghi-metal',
    titlu: 'Scări în unghi pe suport metal',
    descriereScurta: 'Scări cu întoarcere pe structuri metalice. Combinație perfectă între rezistență și estetică.',
    descriere: `Scările în unghi pe structuri metalice reprezintă o soluție modernă și rezistentă pentru spațiile în care se dorește un design contemporan.

La Pinro, realizăm trepte din stejar masiv perfect adaptate structurilor metalice cu unghi — fie că e vorba de o întoarcere la 90°, 180° sau un podest intermediar.

**Precizie maximă:** Structura metalică este mai puțin tolerantă la abateri decât betonul. De aceea, fiecare treaptă este măsurată și croită cu precizie milimetrică, asigurând un montaj ferm și fără scârțâituri.

**Aspect modern:** Combinația dintre lemnul cald de stejar și structura metalică creează un contrast estetic apreciat în interioarele contemporane.`,
    imagineHero: '/images/uploads/cat-scari-unghi-metal-(5).JPEG',
    galerie: [],
    specificatii: [
      { label: 'Material', valoare: 'Stejar masiv' },
      { label: 'Grosime trepte', valoare: '40mm – 80mm' },
      { label: 'Suport', valoare: 'Structură metalică' },
      { label: 'Configurație', valoare: 'Cu podest sau întoarcere' },
      { label: 'Fixare', valoare: 'Adeziv poliuretanic + șuruburi inox' },
      { label: 'Montaj inclus', valoare: 'Da' },
    ],
  },
];
