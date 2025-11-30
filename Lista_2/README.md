# Lista de exercícios 2 - de Testes com Postman

Este projeto contém a resolução dos **Exercícios 1 e 2** da disciplina, utilizando **Postman**, **Newman** e geração de relatório em **HTML**.

## Estrutura do Projeto

```
Lista_2/
├── Exercício_1.json        → coleção do Postman do exercício 1 em formato JSON
├── Exercício_1_report.html → relatório HTML gerado com Newman
├── Exercício_2.txt         → respostas teóricas do exercício 2
└── README.md               → documentação do projeto
```

---

## Exercício 1

Foi criada uma coleção no Postman contendo testes relacionados à API pública **[https://gorest.co.in/public/v2](https://gorest.co.in/public/v2)**.

Os testes realizados são:

* **1 - Verificando usuários válidos(PASSED)**.
* **2 - Verificar gênero de um usuário por ID(PASSED)**.
* **3 - garantir que usuários possuam ao menos um posts(PASSED)**.
* **4 - Validar informações completas por ID(PASSED)**.
* **5 - Encontrar usuários sem posts(FAILED)**.
* **6 - Testar URL inválida(FAILED)**

testes foram escritos usando **JavaScript**.

---

## Como gerar o relatório por meio HTML

Para executar os testes e gerar o relatório:

1. Instale o Newman:

```
npm install -g newman
```

2. Instale o reporter HTML Extra:

```
npm install -g newman-reporter-htmlextra
```

3. Execute a coleção com o reporter para verificar irregularidades:

```
newman run "Exercício_1.json" -r htmlextra
```

4. O relatório será gerado na pasta do projeto.

---

## Exercício 2

O arquivo **Exercício_2.txt** contém respostas sobre:

* conceitos de testes,
* qualidade de software,
* boas práticas,
* erros e validações.

---
