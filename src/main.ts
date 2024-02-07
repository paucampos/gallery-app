import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { defineCustomElements } from '@ionic/pwa-elements/loader';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  // Call the element loader before the bootstrapModule/bootstrapApplication call
defineCustomElements(window);
