# ARSW-LAB10

## Members 
- **Juan Alberto Mejía Schuster**
- **Johann Sebastian Páez Campos**

# Descripción del laboratorio

Se va a realizar memorización de los valores de Fibonacci con Redis, en Azure.
Comparando el rendimiento (tiempo), de forma local con memorización y sin memorización para posteriormente pasar a Azure


# LocalHost

## Prueba en local sin memorización

Calcular hasta la posición 125 

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/1.%20Localhost_125_Sin_Memorizacion.png)

Tiempo tomado para completar la solicitud: **1 minuto con 28.32 segundos**

Calcular hasta la posición 150 

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/3.%20Localhost_150_Sin_Memorizacion.png)

Tiempo tomado para completar la solicitud: **2 minutos con 9.66 segundos**

Calcular hasta la posición 250 

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/5.%20Localhost_250_Sin_Memorizacion.png)

Tiempo tomado para completar la solicitud: **4 minutos con 3.60 segundos**

Calcular hasta la posición 100 

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/7.%20Localhost_100_Sin_Memorizacion.png)

Tiempo tomado para completar la solicitud: **54.09 s**

## Prueba en local con memorización

Calcular hasta la posición 125 

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/2.%20Localhost_125_Con_Memorizacion.png)

Tiempo tomado para completar la solicitud: **944 ms**

Calcular hasta la posición 150 

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/4.%20Localhost_150_Con_Memorizacion.png)

Tiempo tomado para completar la solicitud: **636 ms**

Calcular hasta la posición 250 

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/6.%20Localhost_250_Con_Memorizacion.png)

Tiempo tomado para completar la solicitud: **305 ms**

# Permitir el vencimineto de los datos en redis

Código para permitir el vencimiento de los datos

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/8.%20Expiracion_10_S.png)

Calcular hasta la posición 100 

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/9.%20Localhost_100_Con_Expiracion_10.png)

Tiempo tomado para completar la solicitud: **1 minuto 28.51 sesgundos**

*Se puede apreciar que al vencer los datos es necesario más tiempo para recalcular y guardar esta información*

# Azure

## Prueba sin memorización

Calculado hasta la posición 100

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/10.%20Azure_100_Sin_Memorizacion.png)

Tiempo tomado para completar la solicitud: **13.61 s**

Calculado hasta la posición 250

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/12.%20Azure_250_Sin_Memorizacion.png)

Tiempo tomado para completar la solicitud: **30.65 s**

Calculado hasta la posición 500

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/13.%20Azure_500_Sin_Memorizacion.png)

Tiempo tomado para completar la solicitud: **59.56 s**

Calculado hasta la posición 1000

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/15.%20Azure_1000_Sin_Memorizacion.png)

Tiempo tomado para completar la solicitud: **1 minutos 59.70 segundos**

## Prueba con memorización

Calculado hasta la posición 100

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/11.%20Azure_100_Con_Memorizacion.png)

Tiempo tomado para completar la solicitud: **243 ms**

Calculado hasta la posición 250

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/12.%20Azure_250_Con_Memorizacion.png)

Tiempo tomado para completar la solicitud: **215 ms**

Calculado hasta la posición 500

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/14.%20Azure_500_Con_Memorizacion.png)

Tiempo tomado para completar la solicitud: **247 ms**

Calculado hasta la posición 1000

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/16.%20Azure_1000_Con_Memorizacion.png)

Tiempo tomado para completar la solicitud: **915 ms**

Calculado hasta la posición 1000 permitiendo el vencimiento de los valores almacenados

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/17.%20Azure_1000_Con_Expiracion_10.png)

Tiempo tomado para completar la solicitud: **2 minutos 10.62 segundos**

# Pruebas con Newman

Se realiza una prueba para calcular hasta 100, se puede ver la reducción de tiempo en cada llamado debido a la memorización

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/18.%20Azure_100_Postman_Con_Expiracion_1.png)

Se puede ver que los tiempos se reducen a medida que avanzan las solicitudes, hasta que el caché expiró y es necesario volver a calcular los valores, esto causa un aumento en el tiempo y posiblemente el error que se ve

Adicionalmente se hace una prueba con un número muy grande, en este caso 7500

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/19.%20Azure_7500_Primer_Intento.png)

Como se puede ver la solicitud falla, es demasiado trabajo para el servidor y el tiempo de respuesta, se recibe un error 502 que puede significar que el servidor esta sobrecargado.

Volvemos a intentar 

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/20.%20Azure_7500_Segundo_Intento(Ya_tenia_cache).png)

En esta ocasión si recibimos respuesta, debido a que los valores calculados en el anterior llamado han sido guardados en el caché y el procesamiento que debe hacer el servidor es menor, lo que evita la sobrecarga.

Al final comprobamos el caché del servidor y comprobamos que tiene guardado el valor.

![](https://github.com/JohannPaez/ARSW-LAB10/blob/master/Imagenes/21.%20Cache_Azure_7500.png)

## Análisis de resultados

Se puede comprobar que al memorizar los tiempos de respuesta se reducen drasticamente, tanto en las pruebas locales como en las de Azure.

## Conclusiones

Al memorizar información que no sea altamente volátil se pueden reducir la cantidad de consultas a la base de datos, permitiendo menos bloqueos de la base de datos y un mejor tiempo de respuesta.

Con este laboratorio hemos visto que para un programa sencillo como lo es Fibonacci los tiempos varían significativamente, si escalamos estos tiempos a una aplicación real con miles o millones de transacciones significa que el usuario final no va a esperar por su contenido y que la carga que se tiene en procesamiento del servidor se va a ver reducida, al evitar calcular repetidamente la misma información.

Esto puede ser de mucha relevancia cuando se quiere alcanzar tiempos específicos de respuesta, alcanzar algún atributo de calidad o para cumplir con especificaciones no funcionales de la aplicación.

Vale la apena aclarar que memorizar o realizar el caché de la información no es para todo tipo de aplicación, es necesario planear y desarrollar las estrategias necesarias que permitan esto y analizar si toda o que parte de la información que se usa en la aplicación puede ser memorizada.
