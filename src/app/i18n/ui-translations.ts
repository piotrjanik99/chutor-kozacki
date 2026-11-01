import { BilingualText } from '../models/bilingual.model';

export const UI_TRANSLATIONS: Record<string, BilingualText> = {
  // Navigation (shared across header desktop nav, header mobile nav, footer)
  'nav.hotel': { pl: '< Chutor Kozacki', en: '< Chutor Kozacki' },
  'nav.specialties': { pl: 'Nasze specjały', en: 'Specialties' },
  'nav.events': { pl: 'Wydarzenia', en: 'Events' },
  'nav.gallery': { pl: 'Galeria', en: 'Gallery' },
  'nav.order': { pl: 'Zorganizuj', en: 'Plan an Event' },
  'nav.contact': { pl: 'Kontakt', en: 'Contact' },

  // Header hero
  'header.slogan': { pl: 'Wymarzone przyjęcia w sercu Bieszczad!', en: 'Dream celebrations in the heart of the Bieszczady!' },
  'header.logoAlt': { pl: 'Chutor Kozacki - restauracja', en: 'Chutor Kozacki - Restaurant' },
  'header.bgAlt': { pl: 'Danie serwowane w restauracji Chutor Kozacki', en: 'A dish served at Chutor Kozacki restaurant' },
  'header.eventsBannerAlt': { pl: 'Baner wydarzeń w restauracji Chutor Kozacki', en: 'Events banner at Chutor Kozacki restaurant' },

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
  'section.eventsSubtitle': {pl: 'Wyjątkowe spotkania, regionalne smaki i bieszczadzka atmosfera. Sprawdź, co przygotowaliśmy na najbliższe tygodnie.', en: 'Unique gatherings, regional flavors, and a Bieszczady atmosphere. Check out what we have prepared for the coming weeks.'},
  'section.contact': { pl: 'Kontakt', en: 'Contact Us' },
  'section.gallery': { pl: 'Galeria', en: 'Gallery' },
  'section.specialties': { pl: 'Nasze specjały', en: 'Our Specialties' },
  'section.orderTitle': { pl: 'Zorganizujemy twoje przyjęcie', en: 'Let Us Organize Your Celebration' },
  'section.orderSubtitle': { pl: 'Wypełnij proszę poniższy formularz', en: 'Please fill out the form below' },
  'section.specialtiesSubtitle': { pl: 'Kuchnia kresowa, regionalne inspiracje i autorskie podejście do gotowania. Poznaj nasze specjały', en: 'Borderland cuisine, regional inspirations, and a unique approach to cooking. Discover our specialties.'},

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
  'home.welcomePromoAlt': { pl: 'Aktualna promocja restauracji Chutor Kozacki', en: 'Current promotion at Chutor Kozacki restaurant' },

  // Upcoming events tiles (home page)
  'events.detailsButton': { pl: 'Sprawdź szczegóły', en: 'See Details' },
  'events.viewAll': { pl: 'Zobacz wszystkie wydarzenia', en: 'See all events' },

  // Events subpage
  'section.upcomingEvents': { pl: 'Najbliższe wydarzenia', en: 'Upcoming Events' },
  'section.upcomingEventsSubtitle': {
    pl: 'Przed nami wieczory pełne muzyki, smaków i dobrej zabawy. Sprawdź nadchodzące wydarzenia i wybierz coś dla siebie.',
    en: 'Ahead of us are evenings full of music, flavors, and great fun. Check out the upcoming events and pick something for yourself.'
  },
  'events.offerButton': { pl: 'Sprawdź ofertę', en: 'See Offer' },
  'section.celebrations': { pl: 'Przyjęcia i uroczystości', en: 'Celebrations & Occasions' },
  'section.celebrationsSubtitle': {
    pl: 'Są chwile, które zasługują na wyjątkową oprawę. Zaplanuj rodzinne uroczystości w bieszczadzkim klimacie, przy doskonałej kuchni i wspólnym stole.',
    en: 'Some moments deserve a truly special setting. Plan your family celebrations in the Bieszczady atmosphere, with excellent cuisine and a shared table.'
  },
  'section.corporateEvents': { pl: 'Wydarzenia firmowe', en: 'Corporate Events' },
  'section.corporateEventsSubtitle': {
    pl: 'Zespół poza biurem? Spotkajcie się w Bieszczadach! Od kameralnych kolacji po większe wydarzenia firmowe – czas na rozmowy, integrację i wspólne chwile.',
    en: 'Team outside the office? Meet up in the Bieszczady Mountains! From intimate dinners to larger corporate events — time for conversation, team building, and shared moments.'
  },
  'events.corporateChristmasTitle': { pl: 'Wigilie firmowe', en: 'Corporate Christmas Eve Parties' },
  'events.corporateChristmasDescription': {
    pl: 'Świąteczne spotkanie zespołu przy dobrym jedzeniu. Oferta przygotowana indywidualnie.',
    en: 'A festive team gathering with great food. Offer prepared individually for your team.'
  },
  'section.whyChutor': { pl: 'Dlaczego warto świętować w Chutorze?', en: 'Why Celebrate at Chutor?' },
  'section.whyChutorSubtitle': {
    pl: 'Ty wybierasz okazję, my zajmujemy się przygotowaniami. Od ustalenia menu po aranżację sali i organizację przyjęcia.',
    en: 'You choose the occasion, we take care of the preparations — from planning the menu to arranging the hall and organizing the celebration.'
  },
  'events.whyMenu': { pl: 'Kuchnia i menu dopasowane do okazji', en: 'Cuisine and menu tailored to the occasion' },
  'events.whyPreparation': { pl: 'Przygotowanie i oprawa przyjęcia', en: 'Preparation and styling of the celebration' },
  'events.whyAtmosphere': { pl: 'Bieszczadzki klimat i gościnność', en: 'Bieszczady atmosphere and hospitality' },
  'events.planWithUs': { pl: 'Zaplanuj z nami swoje wydarzenie', en: 'Plan your event with us' },

  // Individual event subpages (shared layout strings)
  'eventDetail.detailsHeading': { pl: 'Szczegóły wydarzenia', en: 'Event Details' },
  'eventDetail.priceIncludesHeading': { pl: 'Co obejmuje cena?', en: "What's Included?" },
  'eventDetail.additionalInfoHeading': { pl: 'Informacje dodatkowe', en: 'Additional Information' },
  'eventDetail.reservationHeading': { pl: 'Rezerwacja', en: 'Reservation' },
  'eventDetail.limitedSeats': { pl: 'Liczba miejsc ograniczona.', en: 'Limited number of seats.' },
  'eventDetail.backToEvents': { pl: 'Wróć do wydarzeń', en: 'Back to Events' },
  'eventDetail.reserveTable': { pl: 'Zarezerwuj stolik', en: 'Reserve a Table' },
  'eventDetail.offerVariants': { pl: 'Warianty oferty', en: 'Offer Variants' },
  'eventDetail.offerDetailsHeading': { pl: 'Szczegóły oferty', en: 'Offer Details' }
};
