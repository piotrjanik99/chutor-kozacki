import { BilingualText } from '../models/bilingual.model';

export const UI_TRANSLATIONS: Record<string, BilingualText> = {
  // Navigation (shared across header desktop nav, header mobile nav, footer)
  'nav.hotel': { pl: 'Hotel', en: 'Hotel' },
  'nav.team': { pl: 'Załoga', en: 'Team' },
  'nav.specialties': { pl: 'Nasze specjały', en: 'Specialties' },
  'nav.events': { pl: 'Wydarzenia', en: 'Events' },
  'nav.gallery': { pl: 'Galeria', en: 'Gallery' },
  'nav.order': { pl: 'Zorganizuj', en: 'Plan an Event' },
  'nav.contact': { pl: 'Kontakt', en: 'Contact' },

  // Header hero
  'header.slogan': { pl: 'Wymarzone przyjęcia w sercu Bieszczad!', en: 'Dream celebrations in the heart of the Bieszczady!' },
  'header.logoAlt': { pl: 'Chutor Kozacki - restauracja', en: 'Chutor Kozacki - Restaurant' },
  'header.bgAlt': { pl: 'Danie serwowane w restauracji Chutor Kozacki', en: 'A dish served at Chutor Kozacki restaurant' },

  // Promo banner
  'promo.text1': {
    pl: 'Otrzymujesz kod rabatowy 5% na wszystkie usługi oferowane przez Restaurację Chutor Kozacki (z wyłączeniem organizacji wesel).',
    en: 'You get a 5% discount code for all services offered by Chutor Kozacki Restaurant (excluding wedding planning).'
  },
  'promo.text2': {
    pl: 'W celu realizacji, przy zamówieniu powiadom obsługę o swoim kodzie:',
    en: 'To use it, simply let our staff know your code when ordering:'
  },
  'promo.backHome': { pl: 'Strona główna', en: 'Home Page' },

  // Section headers
  'section.events': { pl: 'Wydarzenia', en: 'Events' },
  'section.contact': { pl: 'Kontakt', en: 'Contact Us' },
  'section.gallery': { pl: 'Galeria', en: 'Gallery' },
  'section.specialties': { pl: 'Nasze specjały', en: 'Our Specialties' },
  'section.orderTitle': { pl: 'Zorganizujemy twoje przyjęcie', en: 'Let Us Organize Your Celebration' },
  'section.orderSubtitle': { pl: 'Wypełnij proszę poniższy formularz', en: 'Please fill out the form below' },

  // Gallery
  'gallery.tabDishes': { pl: 'Dania', en: 'Dishes' },
  'gallery.tabVenue': { pl: 'Obiekt', en: 'Venue' },
  'gallery.tabEvents': { pl: 'Imprezy okolicznościowe', en: 'Special Events' },
  'gallery.altDishes': { pl: 'Danie serwowane w restauracji Chutor Kozacki', en: 'A dish served at Chutor Kozacki restaurant' },
  'gallery.altVenue': { pl: 'Wnętrze restauracji Chutor Kozacki', en: 'Interior of Chutor Kozacki restaurant' },
  'gallery.altEvents': { pl: 'Impreza okolicznościowa zorganizowana w Chutor Kozacki', en: 'A special event organized at Chutor Kozacki' },
  'gallery.photoWord': { pl: 'zdjęcie', en: 'photo' },
  'gallery.altFallback': { pl: 'Zdjęcie z galerii Chutor Kozacki', en: 'Photo from the Chutor Kozacki gallery' },

  // Contact
  'contact.heading': { pl: 'Zapraszamy do kontaktu!', en: 'Get in Touch!' },
  'contact.sendMessage': { pl: 'Wyślij nam wiadomość', en: 'Send Us a Message' },
  'contact.modalTitle': { pl: 'Skontaktuj się z nami', en: 'Contact Us' },
  'contact.formName': { pl: 'Twoje Imię', en: 'Your Name' },
  'contact.formEmail': { pl: 'Twój e-mail', en: 'Your Email' },
  'contact.formSubject': { pl: 'Temat', en: 'Subject' },
  'contact.formMessage': { pl: 'Wiadomość', en: 'Message' },
  'contact.submit': { pl: 'Wyślij', en: 'Send' },
  'contact.thankYou': { pl: 'Dziękujemy za wiadomość', en: 'Thank you for your message' },
  'contact.mapAriaLabel': { pl: 'Otwórz lokalizację w Mapach Google', en: 'Open location in Google Maps' },
  'contact.mapAlt': { pl: 'Mapa lokalizacji Chutor Kozacki, Łukowe', en: 'Map of Chutor Kozacki location, Łukowe' },
  'contact.openInMaps': { pl: 'Otwórz w Mapach', en: 'Open in Maps' },

  // Order form
  'order.email': { pl: 'E-mail', en: 'Email' },
  'order.eventType': { pl: 'Typ przyjęcia', en: 'Event Type' },
  'order.eventTypeWedding': { pl: 'Wesele', en: 'Wedding' },
  'order.eventTypeCommunion': { pl: 'Chrzciny/Komunia', en: 'Christening/Communion' },
  'order.eventTypeBirthday': { pl: 'Urodziny', en: 'Birthday' },
  'order.eventTypeCatering': { pl: 'Catering', en: 'Catering' },
  'order.eventTypeOther': { pl: 'Inne przyjęcie', en: 'Other Event' },
  'order.otherEventType': { pl: 'Rodzaj przyjęcia', en: 'Type of Event' },
  'order.guestCount': { pl: 'Ilość gości', en: 'Number of Guests' },
  'order.description': { pl: 'Opis wydarzenia', en: 'Event Description' },
  'order.submit': { pl: 'Wyślij do wyceny', en: 'Request a Quote' },
  'order.thankYou': { pl: 'Dziękujemy za wiadomość', en: 'Thank you for your message' },

  // Menu categories
  'menu.appetizers': { pl: 'Przekąski zimne', en: 'Cold Appetizers' },
  'menu.hotSnacks': { pl: 'Przekąski gorące', en: 'Hot Appetizers' },
  'menu.soups': { pl: 'Zupy', en: 'Soups' },
  'menu.mainCourses': { pl: 'Dania główne', en: 'Main Courses' },
  'menu.desserts': { pl: 'Desery', en: 'Desserts' },
  'menu.kidsMenu': { pl: 'Dla dzieci', en: "Kids' Menu" },
  'menu.sides': { pl: 'Dodatki', en: 'Side Dishes' },
  'menu.hotDrinks': { pl: 'Napoje ciepłe', en: 'Hot Drinks' },
  'menu.coldDrinks': { pl: 'Napoje zimne', en: 'Cold Drinks' },
  'menu.alcohol': { pl: 'Alkohole', en: 'Alcohol' },
  'menu.beer': { pl: 'Piwo', en: 'Beer' },
  'menu.vodkaClear': { pl: 'Wódki czyste', en: 'Clear Vodkas' },
  'menu.vodkaCraft': { pl: 'Wódki gatunkowe', en: 'Craft Vodkas' },
  'menu.wermut': { pl: 'Wermut', en: 'Vermouth' },
  'menu.tequila': { pl: 'Tequila', en: 'Tequila' },
  'menu.liquors': { pl: 'Likiery', en: 'Liqueurs' },
  'menu.gin': { pl: 'Gin', en: 'Gin' },
  'menu.bourbon': { pl: 'Bourbon', en: 'Bourbon' },
  'menu.whisky': { pl: 'Whisky', en: 'Whisky' },
  'menu.cocktails': { pl: 'Koktajle', en: 'Cocktails' },

  // Carousel accessibility
  'carousel.prev': { pl: 'Poprzedni', en: 'Previous' },
  'carousel.next': { pl: 'Następny', en: 'Next' },
  'carousel.goToSlide': { pl: 'Przejdź do slajdu', en: 'Go to slide' },

  // Language switcher
  'lang.switchLabel': { pl: 'Zmień język na angielski', en: 'Switch language to Polish' },

  // Home page misc
  'home.welcomePromoAlt': { pl: 'Aktualna promocja restauracji Chutor Kozacki', en: 'Current promotion at Chutor Kozacki restaurant' }
};
