# Prepare

## Structure

- One component per file
- Folder by feature
- Switch to typescript

### Switch to typescript

```shell
npm i typescript --save-dev
```

Other dependencies

```shell
npm install @types/jasmine @types/angular @types/angular-animate @types/angular-aria @types/angular-cookies @types/angular-mocks @types/angular-resource @types/angular-route @types/angular-sanitize --save-dev
```

Angular material (only if you use it)

```shell
npm install @types/angular-material --save-dev
```

Add typescript configuration

```json
/* To learn more about this file see: https://angular.io/guide/typescript-configuration. */
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "disableTypeScriptVersionCheck": true,
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}
```

Change scripts in `package.json`

```shell
"scripts": {
"tsc": "tsc",
"tsc:w": "tsc -w",
```

and keep the compilor running

```shell
npm run tsc:w
```

Start adding types to existing AngularJS files. Even convert the component to classes for better conversion ease.

For example
`app/phone-list/phone-list.component.ts`

```typescript
class PhoneListController {
  phones: any[];
  orderProp: string;
  query: string;

  static $inject = ['Phone'];

  constructor(Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }

}

angular.module('phoneList').component('phoneList', {
  templateUrl: 'phone-list/phone-list.template.html',
  controller: PhoneListController
});
```

## Bootstrap Angular

Install

```shell
npm install --save @angular/common@latest @angular/compiler@latest @angular/core@latest @angular/forms@latest @angular/platform-browser@latest @angular/platform-browser-dynamic@latest @angular/router@latest
```

Install dependencies

```shell
npm install --save rxjs@latest zone.js@latest
npm install --save-dev typescript@latest
```

Install systemjs
```shell
npm install --save systemjs-plugin-babel@latest
```
Create [systemjs.config.js](systemjs.config.js)


Move index.html from app to root but add `<base href="/app">` to the head for static files

Create [app.module.ts](app/app.module.ts) and bootstrap hybrid app

Create [main.ts](app/main.ts) and bootstrap angular app

