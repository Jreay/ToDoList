import { Component} from '@angular/core';
import { ListComponent } from './Components/List/List.component';
import { SharedComponent } from './Components/Input/Input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ SharedComponent, ListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ToDoList';
}
