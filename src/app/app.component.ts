import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './modules/app.module';
import {FooterComponent} from "./footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title: string = 'chutor-kozacki';
  currentYear: number = 0;
  staffImage: string[] = [''];
  staffTitle: string[] = [''];
  staffImageDescription: string[] = [''];
  eventImage: string[] = [''];
  eventTitle: string[] = [''];
  eventImageDescription: string[] = [''];

  constructor() {

  }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.staffImage = ['staff1.png', 'staff2.png', 'staff3.png']
    this.staffTitle = ['Jacek Śliwiński', 'Kucharz 2', 'Kucharz 3']
    this.staffImageDescription = [
      'Jacek Śliwiński to wybitny kucharz, którego pasją jest odkrywanie i odtwarzanie smaków polskich kresów wschodnich. Specjalizuje się w kuchni, która łączy tradycyjne receptury z nowoczesnymi technikami kulinarnymi, tworząc unikalne i niezapomniane dania. W jego repertuarze znajdziemy takie specjały jak pieczeń z daniela, kozak burger, borszcz czy gołąbki z baraniną. Śliwiński czerpie inspirację z bogatej historii i kultury kresów, dbając o to, by jego potrawy były nie tylko smaczne, ale i wierne tradycjom. Jego pasja i talent zyskały uznanie wśród miłośników kulinariów, a także przyczyniły się do popularyzacji kuchni kresowej w naszym regionie.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
    this.eventImage = ['event1.png', 'event2.png', 'event3.png']
    this.eventTitle = ['Wesela', 'Komunie', 'Imprezy urodzinowe']
    this.eventImageDescription = [
      'Restauracja Chutor Kozacki to wyjątkowe miejsce, gdzie tradycja spotyka się z elegancją, tworząc idealne warunki do organizacji niezapomnianych wesel. Lokal zachwyca klimatycznym wystrojem inspirowanym kulturą kozacką oraz gościnną atmosferą, która sprawia, że każda uroczystość staje się wyjątkowa. Goście mogą liczyć na wyśmienite menu, w którym królują dania kuchni kresowej, przygotowywane z najwyższą starannością i pasją. Profesjonalna obsługa, przestronna sala balowa oraz malownicze otoczenie restauracji sprawiają, że Chutor Kozacki to doskonały wybór dla par poszukujących miejsca na swoje wymarzone wesele.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.']
  }
}
