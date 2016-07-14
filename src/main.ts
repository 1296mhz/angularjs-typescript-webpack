/**
 * Created by voland on 4/2/16.
 */
import 'angular';
import 'angular-ui-router';
import 'angular-sanitize';
import 'ng-tags-input';
import services from './services/services.module';
import components from './components/components.module';
import pipes from './pipes/pipes.module';
import {appConfig, appName} from "./app.config";
import {AppComponent} from "./components/app.component";
import {bootstrap} from "./decorators";

// configure
angular
    .module(appName, [
        'ui.router',
        'ngTagsInput',
        'ngSanitize',
        services.name,
        components.name,
        pipes.name
    ])
    .config(appConfig);

// bootstrap
@bootstrap(appName, AppComponent)
class App {}
