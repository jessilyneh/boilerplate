## Rodar o projeto:
npm run dev
http://localhost:3000

### Rodar testes:
npm test
npm run test:watch

#### Rodar o eslint
eslint src

#### Corrigir arquivos
eslint src --fix

## CONFIGURAÇÕES

### Criar o next-app:
npx create-next-app nextjs-blog --use-npm --example "https://github.com/vercel/next-learn/tree/master/basics/learn-starter"

### Instalar o Typescript
- criar o tsconfig.json
- rodar o comando npm install --save-dev typescript @types/react @types/node
- rodar o npm run dev novamente, para popular o tsconfig

### Instalar o Eslint
npm install eslint --save-dev
npm init @eslint/config

### Instalar o Prettier
npm install --save-dev --save-exact prettier
npm install --save-dev eslint-config-prettier

### Instalar o Husky
npx husky-init
npm install

### Instalar o Styled Components

npm install --save-dev @types/styled-components babel-plugin-styled-components
npm install --save styled-components

## TESTES

### Instalar o Jest
npm i jest @babel/preset-typescript @types/jest

### Instalar React Test Library e Jest Dom
npm install --save-dev @testing-library/react @testing-library/jest-dom

#### CheatSheet
https://github.com/testing-library/react-testing-library/blob/main/other/cheat-sheet.pdf
