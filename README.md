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


## Análisis de resultados

Se puede comprobar que al memorizar los tiempos de respuesta se reducen drasticamente, tanto en las pruebas locales como en las de Azure.

