1. ¿Qué problema resuelven las herramientas virtualenv y RVM (o rbenv)? ¿Para qué lenguaje se utiliza cada una? si no utilizas python o ruby, ¿cuál sería la alternativa para tu lenguaje?

  **Virtualenv** para Python y **RVM** para Ruby generan un ambiente de trabajo para estos dos lenguajes aislados del ambiente de trabajo global de las versiones instaladas por el sistema operativo. Esto resulta ser útil pues se pueden instalar múltiples versiones de Python/Ruby cada uno con su conjunto de paquetes instalados completamente independiente una de las otras.
  
  Lo más cercano a esto para Javascript es [NVM (Node Version Manager)](https://github.com/creationix/nvm) que es parecido a RVM (filosofias similares).

2. ¿Qué framework piensas usar?

  The [MEAN](http://www.mean.io) (MongoDB ExpressJS AngularJS NodeJS) Stack.

3. ¿Qué patrón de diseño utiliza ese framework?

  MEAN no es exactamente un framework. Es más como un boilerplate para facilitar el uso de 4 tecnologías que tienen scopes diferentes.
  
  MVC (Model View Controller) en el Backend detras de ExpressJS+NodeJS utilizando MongoDB como base de datos (el lenguaje de templates es decisión del consumidor), MVW (Model View Whatever you want) en el frontend utilizando AngularJS.

4. En el framework seleccionado, ¿cómo se crea la relación entre las tablas de la base de datos y las clases definidas?

  Utilizando el modulo de Javascript [Mongoose](https://github.com/LearnBoost/mongoose). Ejemplo [aquí](https://github.com/linnovate/mean/blob/master/app/models/article.js).

5. ¿Para que se utilizan PIP y Bundler?, si no utilizas python o ruby, ¿cuál sería la alternativa para tu lenguaje?

  PIP y Bundler son manejadores de paquetes para Python y Ruby respectivamente. 

  [NPM (NodeJS Package Manager)](https://npmjs.org/) es la alternativa en el mundo de NodeJS (backend). De ser necesario, probablemente para manejar paquetes del lado del cliente utilizaría [Bower](http://bower.io/) (manejador de paquetes de Javascript diseñados para correr en un navegador).

6. ¿Qué es un Requirements file y un Gemfile? ¿Para qué los usarías en una aplicación?

  Un *requirements* file y un *gemfile* son utilizados para manejar las dependencias de un proyecto en Python y Ruby respectivamente. Utilizando los formatos especificados para cada uno se pueden especificar los paquetes y versiones requeridas por el proyecto e instalarlos utilizando PIP o Bundler.

7. Genera una una clave ssh y envía el archivo .pub a devlabs­usb@talpor.com

  [SSH key](https://api.github.com/users/scast/keys)
