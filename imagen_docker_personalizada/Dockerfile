# Imagen base
FROM ubuntu:latest

# Instalar dependencias
RUN apt-get update && apt-get install -y 

# Copiar archivos de la aplicación
COPY ./app

# Puerto que expondrá el contenedor
EXPOSE 80

# Comando que se ejecutará al iniciar el contenedor
CMD ["nginx", "-g", "daemon off;"]