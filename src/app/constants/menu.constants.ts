import { BilingualText } from '../models/bilingual.model';

export interface MenuItem {
  title: BilingualText;
  description: BilingualText;
  price: string;
}

const t = (pl: string, en: string): BilingualText => ({ pl, en });

export const appetizers: MenuItem[] = [
  {
    title: t('Sałatka myśliwego (180 g)', "Hunter's salad (180g)"),
    description: t(
      'burak marynowany, bryndza, młode listki, pestki dyni, carpaccio z polędwicy daniela, dressing z syropem klonowym',
      'marinated beetroot, bryndza cheese, young greens, pumpkin seeds, fallow deer tenderloin carpaccio, maple syrup dressing'
    ),
    price: '48'
  },
  {
    title: t('Sałatka kozacka (200g)', 'Cossack Salad (200g)'),
    description: t(
      'Mix sałat, pomidor, ogórek, ser bundz, orzech laskowy, polędwiczka wieprzowa, sos winegret',
      'Mixed greens, tomato, cucumber, bundz cheese, hazelnuts, pork tenderloin, vinaigrette dressing'
    ),
    price: '38'
  },
  {
    title: t('Deska serów karpackich (170g)', 'Carpathian cheese board (170g)'),
    description: t('z czarnuszką, kozieradką, czosnkiem niedźwiedzim', 'with black cumin, fenugreek, wild garlic'),
    price: '48'
  },
  {
    title: t('Kolacja zimna (400 g)', 'Cold platter (400g)'),
    description: t('', ''),
    price: '48'
  },
  {
    title: t('Śniadanie', 'Breakfast'),
    description: t('bufet/serwowane', 'buffet/served'),
    price: '48'
  }
];
export const hotSnacks: MenuItem[] = [
  {
    title: t('Kozak Burger (400g)', 'Kozak Burger (400g)'),
    description: t(
      'Do wyboru: wołowina, jeleń, dzik, jagnięcina. Sałata, pomidor, ogórek, cebula marynowana, cebulka prażona, papryka jalapeno, frytki wiejskie, 3 sosy',
      'Choice of beef, venison, wild boar, or lamb. Lettuce, tomato, cucumber, marinated onion, crispy fried onion, jalapeño pepper, country-style fries, 3 sauces'
    ),
    price: '49'
  },
  {
    title: t('Burger kresowy (300g)', 'Kresy-style Burger (300g)'),
    description: t('Szarpana wołowina, kapusta zasmażana', 'Pulled beef, braised cabbage'),
    price: '38'
  },
  {
    title: t('Burger vege (300g)', 'Veggie Burger (300g)'),
    description: t(
      'Burak karmelizowany, tofu wędzone, karmelizowana cebula, bundz, sałata, pesto czosnek niedźwiedzi',
      'Caramelized beetroot, smoked tofu, caramelized onion, bundz cheese, lettuce, wild garlic pesto'
    ),
    price: '42'
  },
  {
    title: t('Fuczki (250g)', 'Fuczki potato pancakes (250g)'),
    description: t('Placki ziemniaczane z kapustą kiszoną i wędzonym pstrągiem', 'Potato pancakes with sauerkraut and smoked trout'),
    price: '38'
  },
  {
    title: t('Knysze (450g)', 'Knysze dumplings (450g)'),
    description: t('Smażone “pierogi” z bryndza, sos borowikowy, kiszonki', 'Fried "pierogi" filled with bryndza cheese, porcini mushroom sauce, pickles'),
    price: '38'
  },
  {
    title: t('Wątróbka po łemkowsku (300 g)', 'Lemko-style liver (300g)'),
    description: t('wątróbka indycza, borowik, cebula, jabłko, majeranek podana na gorącym talerzu', 'turkey liver, porcini mushrooms, onion, apple, marjoram, served on a hot plate'),
    price: '45'
  },
  {
    title: t('Pierogi ukraińskie (400 g)', 'Ukrainian pierogi (400g)'),
    description: t('ziemniaki, twaróg, cebula, śmietana', 'potatoes, curd cheese, onion, sour cream'),
    price: '30'
  },
  {
    title: t('Pierogi huculskie (400 g)', 'Hutsul pierogi (400g)'),
    description: t('ziemniaki, twaróg, boczek, cebula, tymianek, kapusta czerwona, sos czosnkowy', 'potatoes, curd cheese, bacon, onion, thyme, red cabbage, garlic sauce'),
    price: '35'
  }
];
export const soups: MenuItem[] = [
  {
    title: t('Cebulowa (250ml)', 'Onion soup (250ml)'),
    description: t('z tartym serem wędzonym, grzanki w chlebku', 'with grated smoked cheese, bread croutons'),
    price: '23'
  },
  {
    title: t('Rosół (250ml)', 'Chicken broth (250ml)'),
    description: t('z domowym makaronem', 'with homemade noodles'),
    price: '18'
  },
  {
    title: t('Żurek huculski (250ml)', 'Hutsul-style żurek, sour rye soup (250ml)'),
    description: t('z kiełbasą, grzybami i puree ziemniaczanym ze skwarkami', 'with sausage, mushrooms and mashed potatoes with pork cracklings'),
    price: '25'
  },
  {
    title: t('Borszcz (250ml)', 'Borscht (250ml)'),
    description: t('z dodatkami: sało, cebula, chleb razowy', 'served with cured pork fat, onion, rye bread'),
    price: '28'
  },
  {
    title: t('Hrybna juszka (250ml)', 'Hrybna juszka, mushroom soup (250ml)'),
    description: t('grzyby, kasza gryczana, ziemniak, marchewka', 'mushrooms, buckwheat groats, potato, carrot'),
    price: '28'
  }
];
export const mainCourses: MenuItem[] = [
  {
    title: t('Pstrąg smażony (450g)', 'Fried trout (450g)'),
    description: t('wiejskie frytki, kapusta węgierska', 'country-style fries, Hungarian-style cabbage'),
    price: '55'
  },
  {
    title: t('Filet z pstrąga (350g)', 'Trout fillet (350g)'),
    description: t('por palony, sos cytrynowy, kasza z grzybami, kiełki', 'charred leek, lemon sauce, groats with mushrooms, sprouts'),
    price: '62'
  },
  {
    title: t('Polędwiczka wieprzowa (350g)', 'Pork tenderloin (350g)'),
    description: t('gnocchi, sos z borowików, buraczki', 'gnocchi, porcini mushroom sauce, beetroot'),
    price: '38'
  },
  {
    title: t('Filet z kurczaka (400 g)', 'Chicken fillet (400g)'),
    description: t(
      'marynowany w ziołach i czosnku, rosti ziemniaczane, sos żurawinowy , bukiet sałat',
      'marinated in herbs and garlic, potato rösti, cranberry sauce, salad bouquet'
    ),
    price: '54'
  },
  {
    title: t('Żeberko (450 g)', 'Pork rib (450g)'),
    description: t('żebro wieprzowe, ziemniaki pieczone, biała i czerwona kapusta, szczypiorek, sos BBQ', 'pork rib, roasted potatoes, white and red cabbage, chives, BBQ sauce'),
    price: '55'
  },
  {
    title: t('CK schabowy po wiedeńsku (420g)', 'CK Viennese-style pork cutlet (420g)'),
    description: t('z jajkiem sadzonym, puree ziemniaczanym i zasmażaną kapustą', 'with a fried egg, mashed potatoes and braised cabbage'),
    price: '48'
  },
  {
    title: t('Golonka wieprzowa (950g)', 'Pork knuckle (950g)'),
    description: t('kapusta zasmażana, chrzan, musztarda, pieczywo , pikle', 'braised cabbage, horseradish, mustard, bread, pickles'),
    price: '55'
  },
  {
    title: t('Pieczeń z daniela (450g)', 'Roast fallow deer (450g)'),
    description: t('szaszłyk warzywny, frytki z batatów, czosnek pieczony, sos myśliwski', "vegetable skewer, sweet potato fries, roasted garlic, hunter's sauce"),
    price: '98'
  },
  {
    title: t('Zapiekanka Bojków (400 g)', 'Boyko casserole (400g)'),
    description: t('jagnięcina, ziemniaki, brokuł, groszek, ser wędzony', 'lamb, potatoes, broccoli, green peas, smoked cheese'),
    price: '65'
  },
  {
    title: t('Boczek z dzika (350g)', 'Wild boar belly (350g)'),
    description: t('parzybroda, sos musztardowy, jarmuż, cebulka marynowana', 'parzybroda (potato and cabbage mash), mustard sauce, kale, marinated onion'),
    price: '59'
  },
  {
    title: t('Rumsztyk jagnięcy (450g)', 'Lamb rump steak (450g)'),
    description: t('z cebulką, ziemniak pieczony z serem, pelustka', 'with onion, baked potato with cheese, pickled beetroot relish'),
    price: '75'
  },
  {
    title: t('Zestaw dnia (200 ml + 350g)', 'Daily set (200ml + 350g)'),
    description: t('Zupa, danie główne – informacja u obsługi', "Soup and main course – ask our staff for today's selection"),
    price: '55'
  }
];
export const desserts: MenuItem[] = [
  {
    title: t('Torcik czekoladowy z kremem ganache (100g)', 'Chocolate cake with ganache cream (100g)'),
    description: t('', ''),
    price: '25'
  },
  {
    title: t('Sernik (100g)', 'Cheesecake (100g)'),
    description: t('', ''),
    price: '22'
  },
  {
    title: t('Lody (100g)', 'Ice cream (100g)'),
    description: t('', ''),
    price: '22'
  },
  {
    title: t('Ciasteczko zapiekane na ciepło (120g)', 'Warm baked cookie (120g)'),
    description: t('', ''),
    price: '25'
  }
];
export const kidsMenu: MenuItem[] = [
  {
    title: t('Rosół z makaronem (200ml)', 'Chicken broth with noodles (200ml)'),
    description: t('', ''),
    price: '12'
  },
  {
    title: t('Zupa pomidorowa (200ml)', 'Tomato soup (200ml)'),
    description: t('', ''),
    price: '12'
  },
  {
    title: t('Gnocchi z masełkiem (200g)', 'Gnocchi with butter (200g)'),
    description: t('', ''),
    price: '18'
  },
  {
    title: t('Pulpeciki w sosie śmietanowym (300 g)', 'Meatballs in cream sauce (300g)'),
    description: t('puree ziemniaczane, mizeria', 'mashed potatoes, cucumber salad'),
    price: '30'
  },
  {
    title: t('Fileciki z kurczaka (300g)', 'Chicken fillet strips (300g)'),
    description: t('panierowane z frytkami i surówką z marchewki', 'breaded, served with fries and carrot salad'),
    price: '34'
  },
  {
    title: t('Paluszki rybne (300g)', 'Fish fingers (300g)'),
    description: t('z frytkami i surówką z marchewki', 'with fries and carrot salad'),
    price: '34'
  },
  {
    title: t('Pierogi ukraińskie (200 g)', 'Ukrainian pierogi (200g)'),
    description: t('ziemniaki, twaróg, cebula, śmietana', 'potatoes, curd cheese, onion, sour cream'),
    price: '18'
  },
  {
    title: t('Frytki z ketchupem (150g)', 'Fries with ketchup (150g)'),
    description: t('', ''),
    price: '15'
  }
];
export const sides: MenuItem[] = [
  {
    title: t('Frytki z batatów (150g)', 'Sweet potato fries (150g)'),
    description: t('', ''),
    price: '28'
  },
  {
    title: t('Zestaw surówek (400g)', 'Salad selection (400g)'),
    description: t('', ''),
    price: '15'
  },
  {
    title: t('Pieczywo (100g)', 'Bread (100g)'),
    description: t('', ''),
    price: '5'
  },
  {
    title: t('Sosy: czosnkowy, burgerowy, ketchup, musztarda (50g)', 'Sauces: garlic, burger, ketchup, mustard (50g)'),
    description: t('', ''),
    price: '5'
  }
];
export const hotDrinks: MenuItem[] = [
  {
    title: t('Herbata (Tea Sir William’s)', "Tea (Sir William's)"),
    description: t('', ''),
    price: '10'
  },
  {
    title: t('Herbata z syropem imbirowym/malinowym', 'Tea with ginger/raspberry syrup'),
    description: t('', ''),
    price: '15'
  },
  {
    title: t('Herbata Owocowa', 'Fruit tea'),
    description: t('', ''),
    price: '15'
  },
  {
    title: t('Kawa czarna', 'Black coffee'),
    description: t('', ''),
    price: '12'
  },
  {
    title: t('Kawa biała', 'White coffee'),
    description: t('', ''),
    price: '15'
  },
  {
    title: t('Kawa latte/mrożona', 'Latte/iced coffee'),
    description: t('', ''),
    price: '18'
  },
  {
    title: t('Espresso', 'Espresso'),
    description: t('', ''),
    price: '14'
  },
  {
    title: t('Cappuccino', 'Cappuccino'),
    description: t('', ''),
    price: '18'
  }
];
export const coldDrinks: MenuItem[] = [
  {
    title: t('Pepsi, Mirinda, 7Up, Schweppes (200ml)', 'Pepsi, Mirinda, 7Up, Schweppes (200ml)'),
    description: t('', ''),
    price: '8'
  },
  {
    title: t('Pepsi, Mirinda, 7Up (500ml)', 'Pepsi, Mirinda, 7Up (500ml)'),
    description: t('', ''),
    price: '15'
  },
  {
    title: t('Sok pomarańczowy/jabłkowy (200ml)', 'Orange/apple juice (200ml)'),
    description: t('', ''),
    price: '8'
  },
  {
    title: t('Sok owocowy (1 litr)', 'Fruit juice (1 liter)'),
    description: t('', ''),
    price: '18'
  },
  {
    title: t('Lemoniada (250ml)', 'Lemonade (250ml)'),
    description: t('', ''),
    price: '6'
  },
  {
    title: t('Lemoniada dzbanek (1 litr)', 'Lemonade pitcher (1 liter)'),
    description: t('', ''),
    price: '18'
  },
  {
    title: t('Woda (300ml)', 'Water (300ml)'),
    description: t('gazowana, niegazowana', 'sparkling, still'),
    price: '6'
  },
  {
    title: t('Kwas chlebowy (300ml/1 litr)', 'Kvass, fermented rye bread drink (300ml/1 liter)'),
    description: t('', ''),
    price: '7/16'
  },
  {
    title: t('Podpiwek (300ml/1 litr)', 'Podpiwek, malt soft drink (300ml/1 liter)'),
    description: t('', ''),
    price: '7/16'
  },
  {
    title: t('Napój energetyzujący', 'Energy drink'),
    description: t('', ''),
    price: '9'
  }
];
export const beer: MenuItem[] = [
  {
    title: t('Piwo lane (300ml/500ml)', 'Draft beer (300ml/500ml)'),
    description: t('', ''),
    price: '12/15'
  },
  {
    title: t('Piwo butelkowe (500ml)', 'Bottled beer (500ml)'),
    description: t('', ''),
    price: '10'
  },
  {
    title: t('Piwo BiesCzadowe (500ml)', 'BiesCzadowe beer (500ml)'),
    description: t('', ''),
    price: '15'
  },
  {
    title: t('Piwo BiesCzadowe Zawijka (500ml)', 'BiesCzadowe Zawijka beer (500ml)'),
    description: t('', ''),
    price: '20'
  },
  {
    title: t('Piwo BiesCzadowe bezalkoholowe (500ml)', 'BiesCzadowe non-alcoholic beer (500ml)'),
    description: t('', ''),
    price: '15'
  },
  {
    title: t('Grzaniec bieszczadzki (200ml)', 'Bieszczady-style mulled beer (200ml)'),
    description: t('', ''),
    price: '15'
  },
  {
    title: t('Piwo Lvivskie 1715 (500ml)', 'Lvivske 1715 beer (500ml)'),
    description: t('', ''),
    price: '20'
  },
  {
    title: t('Piwo Lvivskie Porter (500ml)', 'Lvivske Porter beer (500ml)'),
    description: t('', ''),
    price: '22'
  },
];
export const vodkaClear: MenuItem[] = [
  {
    title: t('Wataha (50ml/500ml)', 'Wataha (50ml/500ml)'),
    description: t('', ''),
    price: '10/100'
  },
  {
    title: t('Wyborowa (50ml/500ml)', 'Wyborowa (50ml/500ml)'),
    description: t('', ''),
    price: '8/60'
  },
  {
    title: t('Żubrówka z trawą (50ml/500ml)', 'Żubrówka with bison grass (50ml/500ml)'),
    description: t('', ''),
    price: '8/60'
  },
];
export const vodkaCraft: MenuItem[] = [
  {
    title: t('Soplica (50ml/500ml)', 'Soplica (50ml/500ml)'),
    description: t('Wiśniowa, Pigwowa, Malinowa', 'Cherry, Quince, Raspberry'),
    price: '10/70'
  },
];
export const wermut: MenuItem[] = [
  {
    title: t('Martini Bianco (100ml)', 'Martini Bianco (100ml)'),
    description: t('', ''),
    price: '15'
  },
];
export const tequila: MenuItem[] = [
  {
    title: t('Tequila Silver (50ml)', 'Tequila Silver (50ml)'),
    description: t('', ''),
    price: '15'
  },
];
export const liquors: MenuItem[] = [
  {
    title: t('Jagermeister (50ml/500ml)', 'Jägermeister (50ml/500ml)'),
    description: t('', ''),
    price: '15/160'
  },
  {
    title: t('Malibu (50ml)', 'Malibu (50ml)'),
    description: t('', ''),
    price: '18'
  },
];
export const gin: MenuItem[] = [
  {
    title: t('Seagram’s (50ml)', "Seagram's (50ml)"),
    description: t('', ''),
    price: '18'
  },
];
export const bourbon: MenuItem[] = [
  {
    title: t('Jack Daniels (50ml/700ml)', "Jack Daniel's (50ml/700ml)"),
    description: t('', ''),
    price: '15/180'
  },
  {
    title: t('Jim Beam (50ml/700ml)', 'Jim Beam (50ml/700ml)'),
    description: t('', ''),
    price: '15/150'
  },
];
export const whisky: MenuItem[] = [
  {
    title: t('Ballantine`s Finest(50ml/700ml)', "Ballantine's Finest (50ml/700ml)"),
    description: t('', ''),
    price: '15/150'
  },
  {
    title: t('Jameson (50ml/700ml)', 'Jameson (50ml/700ml)'),
    description: t('', ''),
    price: '17/180'
  },
  {
    title: t('Chivas 12YO (50ml/700ml)', 'Chivas 12YO (50ml/700ml)'),
    description: t('', ''),
    price: '22/240'
  },
  {
    title: t('Grant’s (50ml/700ml)', "Grant's (50ml/700ml)"),
    description: t('', ''),
    price: '15/150'
  },
];
export const cocktails: MenuItem[] = [
  {
    title: t('Mojito', 'Mojito'),
    description: t('rum, cząstki limonki, mięta, cukier trzcionowy, woda gazowana', 'rum, lime wedges, mint, cane sugar, soda water'),
    price: '25'
  },
  {
    title: t('Gin & Tonic', 'Gin & Tonic'),
    description: t('gin, tonic, sok z cytryny', 'gin, tonic, lemon juice'),
    price: '22'
  },
  {
    title: t('Campari Orange', 'Campari Orange'),
    description: t('campari, sok pomarańczowy', 'Campari, orange juice'),
    price: '26'
  },
  {
    title: t('Tequila Sunrise', 'Tequila Sunrise'),
    description: t('tequila, sok pomarańczowy, grenadyna', 'tequila, orange juice, grenadine'),
    price: '27'
  },
  {
    title: t('Kamikaze', 'Kamikaze'),
    description: t('wódka, blue curacao, sok z cytyny i limonki', 'vodka, blue curaçao, lemon and lime juice'),
    price: '28'
  },
  {
    title: t('Passoa Passion', 'Passoa Passion'),
    description: t('passoa, wódka, grenadyna', 'passoa, vodka, grenadine'),
    price: '25'
  },
  {
    title: t('Malibu Apple', 'Malibu Apple'),
    description: t('malibu, żubrówka z trawą, sok jabłkowy', 'Malibu, Żubrówka with bison grass, apple juice'),
    price: '25'
  },
  {
    title: t('Aperol', 'Aperol'),
    description: t('prosecco, aperol, woda gazowana', 'prosecco, Aperol, soda water'),
    price: '28'
  }
];
