# GalleryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.12.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

# Angular con Capacitor

## Instalar globalmente:
```bash
 npm i -g @ionic/cli native-run cordova-res
 ```

## Dentro del proyecto angular:

```bash
ng add @ionic/angular`
```

ahora se pueden utilizar los componetes de ionicframework (https://ionicframework.com/docs/components)

en app.component.html:
```html
<ion-app>
  <ion-router-outlet></ion-router-outlet>
</ion-app>
```

# CAPACITOR

## Agregar capacitor para angular al proyecto
```bash
ng add @capacitor/angular
```

## Para ocupar los plugins(https://capacitorjs.com/docs/apis):
```bash
 npm install @capacitor/camera
 ```

## Para hacer funcionar la camara o el toast, por web tambien:
```bash
npm install @ionic/pwa-elements`
```

 y en main.ts: 
 ```typescript
 import { defineCustomElements } from '@ionic/pwa-elements/loader';

 // Call the element loader before the bootstrapModule/bootstrapApplication call
defineCustomElements(window);
 ```


## Para ANDROID (se necesita tener android studio instalado) (https://capacitorjs.com/docs/basics/workflow):
```bash
npm i @capacitor/android

npx cap add android

ng build
npx cap sync

npx cap open android
```