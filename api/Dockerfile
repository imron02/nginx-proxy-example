FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --link . .
RUN npm run build

FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
RUN npm install --global pm2
RUN \
  addgroup --system --gid 1001 nodejs; \
  adduser --system --uid 1001 nestjs

COPY --from=builder --link /app/dist ./dist
COPY --from=builder --link --chown=nestjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --link --chown=nestjs:nodejs /app/package.json ./package.json

USER nestjs

EXPOSE 3001

ENV PORT 3001
ENV HOSTNAME localhost

CMD ["pm2-runtime", "dist/main.js"]