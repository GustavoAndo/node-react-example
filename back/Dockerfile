FROM node:latest
WORKDIR /node-app
EXPOSE 3001
COPY ["package.json", "package-lock.json*", "tsconfig.json", "./"]
RUN npm install
COPY . .
ENTRYPOINT npm run dev