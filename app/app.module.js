import { __decorate } from "tslib";
import { UpgradeModule } from '@angular/upgrade/static';
let AppModule = class AppModule {
    constructor(upgrade) {
        this.upgrade = upgrade;
    }
    ngDoBootstrap() {
        this.upgrade.bootstrap(document.documentElement, ['phonecatApp']);
    }
};
AppModule = __decorate([
    NgModule({
        imports: [
            BrowserModule,
            UpgradeModule,
        ],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map