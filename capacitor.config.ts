import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.paucampos.app',
  appName: 'gallery-app',
  webDir: 'dist/gallery-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
