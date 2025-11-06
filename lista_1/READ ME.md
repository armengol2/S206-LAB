# S206lab1

**Lista 1 de S206 - Qualidade de Software**.  
Testes implementados com Cypress e relatórios gerados com Mochawesome.

---

## Estrutura do repositório
- `cypress/` – contém os testes, fixtures e script.  
- `reports/` – diretório onde os relatórios de execução são gerados.  
- `cypress.config.js` – arquivo de configuração.  
- `package.json` – scripts e dependências do projeto.

---

## Pré requisitos

- **Node.js**
- **npm**
- **Cypress**
- **Chrome / Edge / Firefox**

> Observação: Os relatórios HTML podem ser abertos facilmente no Microsoft Edge.

---

## Instalação e execução

No diretório raiz do projeto, execute:

```bash
npm install
```
Já VSCODE, execute o seguinte para abrir a interface do cypress:

```bash
npx cypress open
```

e então execute para rodar os testes:

```bash
npx cypress run
```




