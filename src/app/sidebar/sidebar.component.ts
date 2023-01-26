import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor() { }

  links = [{
    title: 'Dashboard',
    links: [{

      name: 'dashboard',
      icon: `storefront`,
    },
    ]
  }, {
    title: 'Pages',
    links: [{
      'name': 'login',
      'icon': 'person',
    }, {
      'name': 'create',
      'icon': 'menu_book',
    }
      , {
      'name': 'list',
      'icon': 'restaurant_menu',
    }]
  }];
}
