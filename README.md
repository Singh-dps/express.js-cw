# express.js-cw

Minimal Express.js API with GET and POST routes. Deployed on Vercel.

## Local run

```bash
git clone https://github.com/Singh-dps/express.js-cw.git
cd express.js-cw
npm install
npm start
```

Server starts at `http://localhost:3000`.

## Endpoints

- `GET /` — welcome + list of routes
- `GET /health` — health check
- `GET /hello?name=Dev` — greeting
- `POST /echo` — echoes JSON body

### Example POST

```bash
curl -X POST http://localhost:3000/echo \
  -H "Content-Type: application/json" \
  -d '{"hello":"world"}'
```
