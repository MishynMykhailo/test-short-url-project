# Используйте официальный образ Node.js в качестве базового образа
FROM node:18 as build

# Установите рабочую директорию внутри контейнера
WORKDIR /app

# Копируйте файлы package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Установите зависимости
RUN npm install

# Копируйте остальные файлы проекта в рабочую директорию
COPY . .

# Соберите проект
RUN npm run build

# Используйте более легкий образ nginx для раздачи статических файлов
FROM nginx:alpine

# Копируйте собранные файлы из предыдущего этапа в папку /usr/share/nginx/html
COPY --from=build /app/build /usr/share/nginx/html

# Настройте порт, который будет слушать контейнер
EXPOSE 80

# Команда для запуска nginx внутри контейнера
CMD ["nginx", "-g", "daemon off;"]
