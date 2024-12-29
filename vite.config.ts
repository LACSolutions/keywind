import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        'src/index.ts',
        'src/data/recoveryCodes.ts',
        'src/data/webAuthnAuthenticate.ts',
        'src/data/webAuthnRegister.ts',
        'src/img/amora.svg'
      ],
      output: {
        assetFileNames: '[name][extname]',
        dir: 'theme/amora/login/resources/dist',
        entryFileNames: '[name].js',
      },
    },
  },
});
