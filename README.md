# Preparacion del entorno 

1. despues de crear la carpeta del proyecto debemos escribir el comando npm init -y para iniciar creando el archivo package. json

2. comenzamos acrear los archivos .gitignore, .editorconfig, eslintrc.json y el archivo inicial index.js
 
 - para el archivo .gitignore  vamos a la pagina ![gitignore](https://www.toptal.com/developers/gitignore) escogemos el entorno que es node y los sistemas operativos windows, linux y mac finalizamos con create, copiamos esa configuracion en el archivo gitignore

 -  se instala el plugin editorConfig for vs code desde la tienda de visual code y copiamos la siguiente configuracion
    # Editor configuration, see https://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.js]
quote_type = single

[*.md]
max_line_length = off
trim_trailing_whitespace = false

- lo mismo hacemos con el archivo de eslintrc
 {
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "extends": [
    "eslint:recommended",
    "prettier"
  ],
  "env": {
    "es6": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "no-console": "warn"
  }
}

3. modificamos el archivo packege.json
  "scripts": {
    "dev": "nodemon index.js",
    "start": "node index.js",
    "lint": "eslint"
  },

4. instalamos algunas dependencias de desarrollo y algunos plugin
    - npm i nodemon eslint eslint-config-prettier eslint-plugin-prettier prettier -D
5. ponemos a corre nuestros entornos con el comando npm run dev y en modo producion seria npm run start

# Crear primer servidor con express