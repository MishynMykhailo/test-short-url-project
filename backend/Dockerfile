# Используйте официальный образ Node.js в качестве базового образа
FROM node:18

# Установите рабочую директорию внутри контейнера
WORKDIR /app

# Копируйте файлы package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Установите зависимости
RUN npm install

# Копируйте остальные файлы проекта в рабочую директорию
COPY . .

# Настройте порт, который будет слушать контейнер
EXPOSE 3001

# Команда для запуска вашего бэкенда внутри контейнера
CMD ["npm", "start"]
