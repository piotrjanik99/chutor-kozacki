import { BilingualText } from '../models/bilingual.model';

export const DISH_DESCRIPTIONS: Record<string, BilingualText> = {
  BURGER: {
    pl: 'Do wyboru: wołowina, jeleń, dzik, jagnięcina \n sałata, pomidor, ogórek, cebula marynowana, cebulka prażona, papryka jalapeno, frytki wiejskie, 3 sosy',
    en: 'Choice of beef, venison, wild boar, or lamb \n lettuce, tomato, cucumber, marinated onion, crispy fried onion, jalapeño pepper, country-style fries, 3 sauces'
  },
  DANIEL: {
    pl: 'Tradycyjna pieczeń z daniela własnej hodowli z dodatkiem boczku i aromatycznych przypraw podawana z szaszłykiem warzywny, frytkami z batatów \n czosnek pieczony, sos myśliwski',
    en: "Traditional roast fallow deer from our own farm with bacon and aromatic spices, served with a vegetable skewer and sweet potato fries \n roasted garlic, hunter's sauce"
  },
  GOLABKI: {
    pl: 'Zapiekane w sosie soubise, ziemniaki puree, sos miętowy',
    en: 'Baked in soubise sauce, mashed potatoes, mint sauce'
  },
  BORSZCZ: {
    pl: 'Na wywarze z wędzonych żeberek, i grzybów z kapustą, ziemniakami, marchewką, fasolą. Tradycyjna receptura z regionu Huculszczyzny w Polsce podobny spotykany pod nazwą barszcz ukraiński podawany z dodatkami : sało, cebula, chleb razowy, kwaśna śmietana',
    en: 'Made from a broth of smoked ribs and mushrooms with cabbage, potatoes, carrot, and beans. A traditional recipe from the Hutsul region of Poland, similar to what is known as Ukrainian borscht, served with cured pork fat, onion, rye bread, and sour cream'
  },
  PSTRAG: {
    pl: 'Filet z pstrąga łososiowego smażony na masełku z dodatkiem por palony, sos cytrynowy, kasza jęczmienna z borowikami, kiełki',
    en: 'Salmon trout fillet pan-fried in butter, with charred leek, lemon sauce, barley groats with porcini mushrooms, sprouts'
  },
  BOCZEK: {
    pl: 'Roladka z boczku z dzika, parzybroda, (ziemniaki+kapusta)sos musztardowy, jarmuż, cebulka marynowana',
    en: 'Wild boar belly roulade, parzybroda (potato and cabbage mash), mustard sauce, kale, marinated onion'
  }
};
