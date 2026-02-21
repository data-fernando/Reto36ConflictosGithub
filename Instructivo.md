# Configuracion

## error despues de `npm i`

```bash
PS C:\Users\pc\Documents\Github - Local\AplicativoKrakedev> npx expo star
Invalid project root: C:\Users\pc\Documents\Github - Local\AplicativoKrakedev\star
PS C:\Users\pc\Documents\Github - Local\AplicativoKrakedev> npx expo start
Starting project at C:\Users\pc\Documents\Github - Local\AplicativoKrakedev
(node:33608) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
Some dependencies are incompatible with the installed expo version:
  react-native@0.71.8 - expected version: 0.71.14
  react-native-safe-area-context@4.5.3 - expected version: 4.5.0
Your project may not work correctly until you install the correct versions of the packages.
Install individual packages by running npx expo install react-native@0.71.14 react-native-safe-area-context@4.5.0
```

### solucion
Ajustar dependencias incompatibles
```bash
npx expo install react-native@0.71.14 react-native-safe-area-context@4.5.0
```
Usar versión de Node compatible con Expo
```
nvm install 20
nvm use 20
```
Actualizar SDK de Expo
El comando expo upgrade solo está disponible en la CLI global.

```
npm install -g expo-cli
expo upgrade
npm uninstall -g expo-cli   # opcional, para removerlo después

```
Instalar Babel preset faltante
```
npx expo install babel-preset-expo
```
Verifica que tu archivo babel.config.js tenga:
```javasecript
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
  };
};

```
Limpiar caché y reiniciar bundler
```
 npx expo start -c
```