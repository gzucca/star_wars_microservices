  FROM node:16

  WORKDIR /app

  COPY package.json ./
  # ./ es para que lo copie en la carpeta app (el root)

  RUN npm install
  # Tiene que hacer install de lo de package.json

  COPY . .
  # Necesitamos que copie todo de fuente (el primer ".") y lo pegue en la carpeta destino (el segundo "."). Siempre se usa esa estructura, primero lo que se copia, después dónde se pega, separado por un espacio.

  EXPOSE 8002
  #En qué puerto voy a exponer al contenedor.

  CMD ["npm", "start"]
