# World Monitor - Quick Start Guide

Get World Monitor running in 5 minutes.

## Prerequisites

- Node.js v18+ installed
- Git installed
- Internet connection

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/rrkcm/worldmonitor.git
cd worldmonitor
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Vercel CLI

```bash
npm install -g vercel
```

### 4. Setup Environment (Optional)

```bash
# Copy template
cp installation/.env.template .env.local

# Edit and add your API keys
nano .env.local
```

**Minimum recommended keys:**
- `GROQ_API_KEY` - For AI features (free: https://console.groq.com/)
- `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` - For caching (free: https://upstash.com/)

### 5. Start Development Server

```bash
vercel dev
```

### 6. Open in Browser

Navigate to: http://localhost:3000

## What You Should See

✅ **Interactive map** - Globe or flat map with data layers  
✅ **News sidebar** - Headlines from various sources (if API keys configured)  
✅ **Control panels** - Market data, conflicts, tracking (based on configured keys)  
✅ **AI Brief button** - Generate summaries (requires Groq/OpenRouter key)

## Without API Keys

The dashboard works without any API keys, but with limited features:

- ✅ Interactive map and static layers (bases, cables, pipelines)
- ✅ Public data sources (earthquakes, fires, weather)
- ✅ Browser-based ML features
- ❌ News feeds (requires edge functions)
- ❌ AI summarization (requires Groq/OpenRouter)
- ❌ Market data (requires Finnhub)
- ❌ Live tracking (requires AIS/OpenSky + Railway relay)

## Next Steps

1. **Add API keys** - See `API_KEYS_GUIDE.md` for complete list
2. **Deploy to production** - Run `vercel --prod`
3. **Explore features** - Toggle map layers, try AI brief, check panels
4. **Customize variant** - Set `VITE_VARIANT` to `tech`, `finance`, etc.

## Common Issues

### Port 3000 already in use
```bash
vercel dev --listen 3001
```

### Edge functions not working
Make sure you're using `vercel dev`, not `npm run dev`

### Map not loading
Check internet connection and browser console for errors

## Full Documentation

- **Complete installation**: `INSTALLATION_GUIDE.md`
- **API keys reference**: `API_KEYS_GUIDE.md`
- **Project docs**: `../docs/` directory

## Support

- GitHub Issues: https://github.com/koala73/worldmonitor/issues
- Original repo: https://github.com/koala73/worldmonitor
