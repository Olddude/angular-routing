import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppActions } from './store/actions';
import { select } from '@angular-redux/store';
import { getHypermedia } from './store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @select(getHypermedia)
  appHypermedia$: Observable<any>;

  constructor(private actions: AppActions) {
    this.actions.fetchRootStarted();
  }
}
