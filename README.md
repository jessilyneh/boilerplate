## rodar o projeto:
npm run dev
http://localhost:3000

### rodar testes:
npm test

## Configs

### criar o next app:
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"

### instalar o typescript
- criar o tsconfig.json
- rodar o comando npm install --save-dev typescript @types/react @types/node
- rodar o npm run dev novamente, para popular o tsconfig

### instalar o eslint
npm install eslint --save-dev
npm init @eslint/config

#### rodar o eslint
eslint src

#### corrigir arquivos
eslint src --fix

### instalar o prettier
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier

### instalar o husky
npx husky-init
npm install

### instalar o jest
npm i jest @babel/preset-typescript @types/jest
