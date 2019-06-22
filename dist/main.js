import { enableProdMode } from '@angular/core';
import { MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
if (environment.production) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule, {
    missingTranslation: MissingTranslationStrategy.Error
}).catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map