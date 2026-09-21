# express.js-cw

Minimal Express.js API with GET and POST routes. Deploy on [Render](https://render.com).

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

## Deploy on Render

1. Open [https://dashboard.render.com](https://dashboard.render.com)
2. Click **New > Web Service**
3. Connect GitHub and select `Singh-dps/express.js-cw`
4. Use these settings:
   - **Language:** Node
   - **Branch:** `main`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance type:** Free (or any paid plan)
5. Click **Deploy Web Service**

The app listens on `process.env.PORT`, which Render sets automatically.
After the first deploy, every push to `main` redeploys the service.
