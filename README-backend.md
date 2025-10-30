## Emotional Internet Filter - Backend

This backend consists of two services and MongoDB, all containerized:

- Node.js Controller (API gateway): `project/backend-node`
- Python FastAPI AI service: `project/ai-python`
- MongoDB (via Docker image)

### Endpoints (Controller)

- `GET /health`
- `POST /api/analyze-text` { text }
- `POST /api/detect-emotion` { image: base64 }
- `POST /api/analyze-audio` { audio: base64 }

### Endpoints (AI Service)

- `GET /health`
- `POST /analyze-text`
- `POST /detect-emotion`
- `POST /analyze-audio`

### Quick start

1. Create an `.env` file in `project/` based on the variables below.
2. From `project/`, run: `docker compose up --build`
3. Controller available at `http://localhost:3000`. AI service at `http://localhost:5000`.

### Environment variables (project/.env)

```
CORS_ORIGIN=http://localhost:5173
TTL_SECONDS=2592000
REQUIRE_AUTH=false
JWT_SECRET=change_me
RATE_LIMIT_WINDOW_MS=60000
RATE_LIMIT_MAX=60
```

### Notes

- MongoDB is exposed on `27017` for local development.
- The Node service automatically creates a TTL index on `createdAt`.
- Provide `Authorization: Bearer <jwt>` if `REQUIRE_AUTH=true`.


