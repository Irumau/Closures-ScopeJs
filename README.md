# closures-ScopeJs

[Mis Apuntes](https://1drv.ms/w/s!ArRVF7ZMdzjPl298qcQcXXTJ4oSL?e=H0ae86);

## SCope

<p>
El scope es cada uno de los entornos donde las variables tienen alcance dentro del código de JavaScript. En otras palabras, determina qué valor tendrá la variable dependiendo dónde se encuentre.
Si haces referencia a una variable, el motor de JavaScript buscará su declaración en el entorno más cercano, y seguirá buscando en entornos más lejanos hasta llegar a la línea de código que la variable esté declarada, pero no en viceversa. A este proceso se lo denomina cadena de scope (scope chaining).
</p>

### Tipos de Scope

<p>
Existen dos tipos de scope: global y local. El scope local puede ser de función o de bloque. Un bloque es toda porción de código que está encerrada entre llaves {}, estos pueden ser los bloques: función, if, else, while, y for. 
</p>

#### Que es el scope global?

<p>
Las variables globales son aquellas que se encuentran declaradas fuera de los bloques de código o funciones .El scope global es el entorno donde las variables globales pueden ser accedidas desde cualquier lugar de nuestro programa. 
En el siguiente ejemplo, mira el código y piensa qué mostrará en consola. Una vez tengas las respuestas, abre la consola. ¿Qué sucedió? 
</p>

# img

<p>
Con este ejemplo podemos concluir que la función saludar tiene acceso a la variable nombre. ¿Por qué? Porque la variable nombre está en un scope global. 
Volviendo al ejemplo de las llaves, JavaScript busca la variable en el contexto más cercano (scope local de función) ¿la encontró? No, entonces sigue buscando en el scope global ¿la encontró? Sí, entonces la utiliza. Ten en cuenta que JavaScript busca de un scope cercano a uno lejano, pero no en viceversa, esto es importante para el scope local. 
Entonces, una variable global puede ser accedida en cualquier parte, porque el scope global es el último entorno en el que JavaScript busca una variable. Recuerda esto cuándo se hable de scope local. 
</p>

#### Que es el scope local

<p>
Las variables locales son aquellas que se encuentran declaradas dentro de los bloques de código o funciones. El scope local es el entorno donde las variables locales solo se pueden acceder desde una función o bloque del programa. 
Observa el siguiente código y piensa cuál será el resultado. 
</p>

# img2

<p>
Primeramente, al invocarse la función saludo imprimirá "Andres" por consola, pero inmediatamente después, existirá un error de referencia. 
</p>

<p>
Esto sucede porque la variable nombre tiene un scope local, por lo que solo se puede acceder dentro de la misma. Volviendo al ejemplo de las llaves, JavaScript busca la variable en el contexto más cercano (scope global) ¿la encontró? No, entonces no lo encontrará en ningún lado y arroja un error de referencia. 
Esto sucede porque JavaScript no puede volver a buscar a una función que no sabe si encontrará la variable o no, teniendo en cuenta que puede haber una variedad ilimitada de funciones, ¿cuál buscar? Por eso, el alcance de una función local es el lugar donde fue declarada 
</p>

## Closures

<p>
Un closure es la combinación entre una función y el ámbito léxico en el que esta fue declarada. Con esto, la función recuerda el ámbito con el cual se creó. Puedes entender los closures como: función interna + scope. Mira estos pasos:  
</p>

- Genera una función que retorna una función interna.
- Esta función interna tiene un scope, el cual puede ser accedido únicamente por
  esta función, es decir, las variables, funciones, etc. definidas en el scope solo pueden ser accedidas por la función interna.
- Como resultado, esta función interna retornada con su scope será nuestro closure.
- Veamos la siguiente imagen para entenderlo mejor. En la imagen FUNCTION es la función interna de la cual hablamos.

#### Ámbito Léxico
<p>
El ámbito léxico se refiere al alcance de una variable siguiendo la cadena de scopes. Una variable se puede abordar desde un nivel inferior hasta uno superior, pero no al contrario. 
</p>

# img ambito lexico

<p>
Podemos asignar la función contador a una variable (_closure_ y _closure2_). Dependiendo del valor que tenga como parámetro, cada variable cambiará el valor inicial por el ámbito léxico, por la que fue originada la variable acumulador que está vinculada con la función aumentar. 
</p>

## Hoisting

<p>
Hoisting es un término para describir que las declaraciones de variables y funciones son desplazadas a la parte superior del scope más cercano, scope global o de función. Esto sucede solamente con las declaraciones y no con las asignaciones. 
</p>

[Video complementario acerca del hoisting](https://www.youtube.com/watch?v="https://www.youtube.com/watch?v=uI6o97A4IrI"uI6o97A4IrI)