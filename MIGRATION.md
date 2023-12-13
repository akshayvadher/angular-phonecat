# Prepare

## Structure

- One component per file
- Folder by feature
- Switch to typescript

### Switch to typescript

```bash
npm i typescript --save-dev
```

Other dependencies

```bash
npm install @types/jasmine @types/angular @types/angular-animate @types/angular-aria @types/angular-cookies @types/angular-mocks @types/angular-resource @types/angular-route @types/angular-sanitize --save-dev
```

Angular material (only if you use it)

```bash
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

```bash
"scripts": {
"tsc": "tsc",
"tsc:w": "tsc -w",
```

and keep the compilor running

```bash
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