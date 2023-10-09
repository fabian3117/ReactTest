# Establecer la imagen base
FROM node:18

# Crear y establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo package.json y package-lock.json para instalar dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente de la aplicación al contenedor
COPY . .

# Compilar la aplicación React (ajusta el comando según tus necesidades)
RUN npm run build

# Exponer el puerto en el que se ejecutará la aplicación React (generalmente el puerto 3000)
EXPOSE 3000

# Comando para iniciar la aplicación React
CMD ["npm", "start"]
