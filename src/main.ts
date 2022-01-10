/*
 * Angular libraries imports
 */
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*
 * Local imports.
 */
import { AppModule } from './app/app.module'; // Import Root module - AppModule Class
import { environment } from './environments/environment'; // Load environment variable

if (environment.production) {
  enableProdMode();
}

/*
 * Load modules
 *  - Start the application using the AppModule class.
 */
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
