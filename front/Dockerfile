FROM node:latest
WORKDIR /react-app
EXPOSE 3000
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
ENTRYPOINT npm start