export type Field = {
  id: string;
  label: string;
  type: 'text' | 'select' | 'number' | 'textarea';
  required?: boolean;
  options?: string[];
  placeholder?: string;
  categorySelector?: boolean;
};

export type RadiatorCategory = {
  id: string;
  label: string;
  requiredFields: Field[];
  optionalFields?: Field[];
};

export const radiatorCategories: RadiatorCategory[] = [
  {
    id: 'flach',
    label: 'Flachheizkörper',
    requiredFields: [
      {
        id: 'typ',
        label: 'Heizkörper Art',
        type: 'select',
        required: true,
        categorySelector: true,
        options: ['Typ 11', 'Typ 22', 'Typ 33'],
      },
      {
        id: 'hoehe',
        label: 'Höhe (mm)',
        type: 'select',
        required: true,
        options: ['300', '500', '600', '900', '1200', '1800'],
      },
      {
        id: 'laenge',
        label: 'Länge (mm)',
        type: 'select',
        required: true,
        options: ['400', '600', '800', '1000', '1200', '1600'],
      },
    ],
    optionalFields: [
      {
        id: 'tiefe',
        label: 'Tiefe (mm)',
        type: 'text',
        placeholder: 'z. B. 100',
      },
      {
        id: 'anschlussart',
        label: 'Anschlussart',
        type: 'select',
        options: ['Seitlich', 'Unten', 'Mitte'],
      },
      {
        id: 'farbe',
        label: 'Farbe',
        type: 'select',
        options: ['Weiß', 'Anthrazit', 'Silber', 'Sonstige'],
      },
      {
        id: 'kommentar',
        label: 'Kommentar',
        type: 'textarea',
        placeholder: 'Optionaler Hinweis oder Bemerkung',
      },
    ],
  },
  {
    id: 'stahl',
    label: 'Stahl- / Gussradiator',
    requiredFields: [
      {
        id: 'typ',
        label: 'Heizkörper Art',
        type: 'select',
        required: true,
        categorySelector: true,
        options: ['2-säulig', '3-säulig', '4-säulig'],
      },
      {
        id: 'hoehe',
        label: 'Höhe (mm)',
        type: 'select',
        required: true,
        options: ['300', '500', '600', '900', '1200', '1800'],
      },
      {
        id: 'laenge',
        label: 'Länge (mm)',
        type: 'select',
        required: true,
        options: ['400', '600', '800', '1000', '1200', '1600'],
      },
    ],
    optionalFields: [
      {
        id: 'farbe',
        label: 'Farbe',
        type: 'select',
        options: ['Weiß', 'Anthrazit', 'Gussgrau'],
      },
      {
        id: 'kommentar',
        label: 'Kommentar',
        type: 'textarea',
        placeholder: 'Optionaler Hinweis oder Bemerkung',
      },
    ],
  },
  {
    id: 'handtuch',
    label: 'Handtuchheizkörper',
    requiredFields: [
      {
        id: 'typ',
        label: 'Heizkörper Art',
        type: 'select',
        required: true,
        categorySelector: true,
        options: ['Gerade', 'Gebogen'],
      },
      {
        id: 'hoehe',
        label: 'Höhe (mm)',
        type: 'select',
        required: true,
        options: ['800', '1200', '1800'],
      },
      {
        id: 'laenge',
        label: 'Breite (mm)',
        type: 'select',
        required: true,
        options: ['400', '500', '600', '700'],
      },
    ],
    optionalFields: [
      {
        id: 'anschlussart',
        label: 'Anschlussart',
        type: 'select',
        options: ['Seitlich', 'Unten', 'Mittelanschluss'],
      },
      {
        id: 'kommentar',
        label: 'Kommentar',
        type: 'textarea',
      },
    ],
  },
];
