FROM node:22-alpine AS builder

WORKDIR /build

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

FROM node:22-alpine AS consumer

WORKDIR /app

COPY --from=builder /build/dist ./dist
COPY --from=builder /build/package-lock.json ./package-lock.json
COPY --from=builder /build/package.json ./package.json

CMD ["npm", "start"]
