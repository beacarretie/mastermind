## Título

Mastermind 

## Índice

*[Descripción del proyecto](#descripción-del-proyecto)

*[Estado del proyecto](#Estado-del-proyecto)

*[Características de la aplicación y demostración](#Características-de-la-aplicación-y-demostración)

*[Acceso al proyecto](#acceso-proyecto)

*[Tecnologías utilizadas](#tecnologías-utilizadas)

*[Personas-Desarrolladores del Proyecto](#personas-desarrolladores)



## Descripción:

Juego del Mastermind con el stack JS, CSS3 y HTML5.

El objetivo es implementar una aplicación que permita jugar al juego del
MasterMind. Se juega en un tablero con fichas blancas y negras pequeñas y otras
interactivas de otros colores. En el juego original, un jugador escoge un número de
fichas de colores, 4 en este caso, introduce un código secreto (combinación de
colores) oculto al otro jugador. Éste, tomando fichas de colores del mismo conjunto,
propone una combinación contestada con VERDES (ejemplo para fichas de color
bien colocadas) o BLANCAS (fichas de color con el color correcto, pero mal colocadas
en cuanto a orden de combinación).

El juego termina con una victoria al averiguar la combinación (es decir, se consigue
una combinación con cuatro bolas moradas), o bien se agota el tablero y somos
derrotados (depende del tamaño, aunque generalmente son 10 intentos de
combinaciones).


## Estado del proyecto:

Proyecto acabado.

## :hammer:Funcionalidades del proyecto

- `Home`: Como primera pantalla o panel observaremos la posibilidad de iniciar una partida o
de acceder a una sección de “about” (ayuda) en la cual se nos hará referencia a las
distintas normas y leyes del juego.

El diseño de cualquier logotipo, fuente o disposición de elementos correrá por
nuestra cuenta, pero desde la pantalla inicial tendremos que ser capaces de acceder
tanto a la modalidad de juego como al reglamento, estos serán totalmente
independientes.

- `About`: En lo referente a la ayuda o normas de juego, explicaremos el funcionamiento de
éste, en los distintos niveles de dificultad (si este dispone de ellos) pero sobre todo
pondremos el énfasis en cómo va a transcurrir la partida.

Cada nueva partida se inicia permitiéndonos acceder a una nueva pantalla en la cual
introduciremos nuestro nombre de usuario, además de la posibilidad de seleccionar
el modo de dificultad (opción deluxe o no requerida como mínimo en la aplicación).

Una vez hayamos escogido las opciones pertinentes, podremos navegar a la
pantalla de selección de colores, donde mediante varios color picker podremos
escoger los colores concretos para la partida, cuyo funcionamiento se especifica más
adelante en este documento.

- `Player`: Al pulsar un nuevo juego debemos pedir al usuario que nos indique el nivel al que
desea jugar, esta parte será optativa, a priori, contaremos tan sólo con un nivel de
tipo jugador novel o beginner.

- `Playboard`: En el código interno referido a la partida, esto generará una combinación
aleatoria ganadora y la almacenará en un array distinto al que guarda la serie
de colores con los que se va a poder jugar.

Cuando pulsamos el botón de comprobar debemos comprobar cuántos colores
están encontrados y en su sitio (lo marcaremos con bolas VERDES) y cuantos
colores están, pero no en su sitio (los marcaremos con bolas BLACAS).

− Comprobando las VERDES: debemos comprobar cuántos colores están
correctamente encontrados y crearemos a la derecha del botón tantos
elementos con color VERDE como los colores que hayamos encontrado y que
además estén en el lugar exacto en el orden.

− Comprobando las blancas: debemos comprobar cuántos colores están, pero
no se encuentran en su sitio. Debemos eliminar de esta comprobación los
colores encontrados en su sitio (VERDE) y si un color está, pero mal situado,
en más de una posición solo podemos marcarlo como una vez. Crearemos a
la derecha de las VERDES tantos controles, BLANCOS, como colores fuera de
su sitio encontremos.

## GAMEOVER

Tras mostrar las bolas VERDES y BLANCAS, debemos comprobar dos cosas:

− Hemos ganado, mostrando un mensaje al usuario tras cambiar de pantalla.

− Hemos gastado todos nuestros intentos, mostrando un mensaje al usuario y darle la opción de volver a jugar

Si no hemos ganado ni perdido, seguiremos jugando hasta finalizar los
turnos.

##  Acceso al proyecto

https://beacarretie.github.io/mastermind/html/index.html

##  Tecologías utilizadas

Juego del Mastermind con el stack JS, CSS3 y HTML5.

<img src="./imgs/js.png"> 
<img src="./imgs/css.png"> 
<img src="./imgs/html.png"> 

##  Personas desarrolladoras

Beatriz Carretie 


