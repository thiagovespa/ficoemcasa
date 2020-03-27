# Ficoemcasa

Aplicativo para ligar pequenos comerciantes a compradores próximos para auxiliar o comércio durante a pandemia.

## Arquitetura

### ficoemcasa-api

Backend

#### Procedimentos para montagem do ambiente

- Instalar o node 8.0 ou superior
- Instalar o npm 3.0 ou superior
- Instalar o cli tool de maneira global ```sudo npm i -g @adonisjs/cli```
- Verificar se o adonis está funcionando: ```adonis --help```

#### Rodar migrações

```
adonis migration:run
```

#### Semear base de dados

```
adonis seed
```

#### Iniciar servidor em mode de desenvolvimento

```
adonis serve --dev
```

#### Executando testes

```
adonis test
```

### ficoemcasa-app

Frontend
