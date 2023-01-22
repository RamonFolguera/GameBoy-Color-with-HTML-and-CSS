# Proyecto 1 - Videoconsola con CSS 

En esta entrega de proyecto de la primera semana en el bootcamp de GeeksHubs se nos pide crear una videoconsola de nuestra elección en HTML y CSS. Además como puntos extra incorporar algo de JavaScript.

Después pensar detenidamente me decido por crear una GameBoyColor. Un clásico pero algo más estiloso que el original.

##### Orden de trabajo y herramientas utilizadas

|Diseño GameBoy en HTML y CSS|Añadido en JS video de inicio|Añadido en JS juego básico del Snake|
|-|-|-|
|![image](https://user-images.githubusercontent.com/53578007/213937156-fd5b7b60-2c25-4f61-989a-ca89c751ae01.png)|![image](https://user-images.githubusercontent.com/53578007/213937401-093c6afa-c1e0-456c-a948-7fecde79817f.png)|![image](https://user-images.githubusercontent.com/53578007/213937457-7f027b67-d3b2-47f2-9cd5-6c5f3171f17a.png)|


##### ¿Cómo funciona?


Los botones se accionan al clickar con el ratón encima gracias a la pseudo-clase de CSS :active.

Para encender la videoconsola clickamos el botón START. Esto activará la parte de JS programada para que el video de inicio aparezca y desaparezca a los 6 segundos con el método setTimeout, justo cuando está programado que el juego empiece.

##### ¿Cómo jugar?

La serpiente es el cuadrado verde al empezar. La comida es el cuadrado rojo.

Para empezar a jugar mueve la serpiente con las flechas del teclado.

Continúa alimentando la serpiente con los cuadrados rojos que reaparecen aleatoriamente cada vez que comes uno. La serpiente crecerá un cuadrado cada vez.

Cuando falles tocando cualquiera de las cuatro paredes con la cabeza de la serpiente, o ésta se coma a sí misma saldrá un alert de GAME OVER.

Para volver a empezar hay que actualizar la página de momento.


##### Autor

    Ramón Folguera Carbonell


##### Licencia

Este proyecto está creado bajo una licencia *MIT License*. Véase el archivo  [LICENSE.md](LICENSE.md) para más detalles.
