import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../footer/footer.component";
import { TopNavigationComponent } from "../top-navigation/top-navigation.component";
import { SidebarNavigationComponent } from "../sidebar-navigation/sidebar-navigation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, TopNavigationComponent, SidebarNavigationComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'trackmyclients-angular';
}
