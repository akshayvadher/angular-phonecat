System.config({
    paths: {
        'npm:': '/node_modules/'
    },
    map: {
        'ng-loader': '../src/systemjs-angular-loader.js',
        app: '/app',
        '@angular/core': 'npm:@angular/core/fesm2022/core.mjs',
        '@angular/common': 'npm:@angular/common/fesm2022/common.mjs',
        '@angular/common/http': 'npm:@angular/common/fesm2022/http.mjs',
        '@angular/compiler': 'npm:@angular/compiler/fesm2022/compiler.mjs',
        '@angular/platform-browser': 'npm:@angular/platform-browser/fesm2022/platform-browser.mjs',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/fesm2022/platform-browser-dynamic.mjs',
        '@angular/router': 'npm:@angular/router/fesm2022/router.mjs',
        '@angular/router/upgrade': 'npm:@angular/router/fesm2022/upgrade.mjs',
        '@angular/forms': 'npm:@angular/forms/fesm2022/forms.mjs',
        '@angular/upgrade/static': 'npm:@angular/upgrade/fesm2022/static.mjs',
        'rxjs': 'npm:rxjs/dist/cjs',
        'rxjs/operators': 'npm:rxjs/dist/cjs/operators',
        'tslib': 'npm:tslib/tslib.js',
        'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js'
    },
    transpiler: 'plugin-babel',
    packages: {
        'rxjs': {
            defaultExtension: 'js',
            format: 'cjs',
            main: 'index.js'
        },
        'rxjs/operators': {
            defaultExtension: 'js',
            format: 'cjs',
            main: 'index.js'
        },
    }
});