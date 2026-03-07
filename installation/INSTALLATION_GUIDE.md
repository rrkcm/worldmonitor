# World Monitor - Installation Guide

Complete step-by-step installation guide for World Monitor dashboard.

## Prerequisites

- **Node.js**: v18+ (v20 recommended)
- **npm**: v9+ or compatible package manager
- **Git**: Latest version
- **Vercel CLI**: For local development with edge functions

## Quick Start (5 Minutes)

```bash
# 1. Clone the repository
git clone https://github.com/rrkcm/worldmonitor.git
cd worldmonitor

# 2. Install dependencies
npm install

# 3. Install Vercel CLI globally
npm install -g vercel

# 4. Copy environment template
cp .env.example .env.local

# 5. Start development server
vercel dev
```

Open http://localhost:3000 in your browser.

## Detailed Installation Steps

### Step 1: System Requirements

**Minimum Requirements:**
- 4GB RAM
- 2 CPU cores
- 1GB free disk space

**Recommended:**
- 8GB+ RAM
- 4+ CPU cores
- 5GB free disk space (for dependencies and cache)

**Operating Systems:**
- Linux (x86_64) - Full support
- macOS (Intel/Apple Silicon) - Full support
- Windows 10/11 - Full support via WSL2 recommended
- Raspberry Pi / ARM - Partial support (see notes)

### Step 2: Install Dependencies

```bash
# Install Node.js (if not already installed)
# Visit: https://nodejs.org/

# Verify installation
node --version  # Should be v18+
npm --version   # Should be v9+

# Clone repository
git clone https://github.com/rrkcm/worldmonitor.git
cd worldmonitor

# Install project dependencies
npm install
```

### Step 3: Configure Environment Variables

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit .env.local with your preferred editor
nano .env.local  # or vim, code, etc.
```

**Essential Variables** (start with these):

```bash
# AI Summarization (choose one)
GROQ_API_KEY=your_groq_key_here

# Caching (highly recommended)
UPSTASH_REDIS_REST_URL=your_redis_url
UPSTASH_REDIS_REST_TOKEN=your_redis_token

# Conflict Data
ACLED_ACCESS_TOKEN=your_acled_token
```

See `API_KEYS_GUIDE.md` for complete list and registration links.

### Step 4: Choose Development Mode

#### Option A: Full Local Development (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Start development server with edge functions
vercel dev
```

This runs:
- Frontend on http://localhost:3000
- All 60+ API edge functions
- Hot module reloading

#### Option B: Frontend Only (Limited Features)

```bash
# Start Vite dev server only
npm run dev
```

This runs:
- Frontend on http://localhost:5173
- No API endpoints (news feeds, AI, markets won't work)
- Useful for UI development only

### Step 5: Verify Installation

Open http://localhost:3000 and check:

1. **Map loads** - Interactive globe or flat map appears
2. **News feeds** - Headlines populate in sidebar (requires API keys)
3. **Data layers** - Toggle military bases, cables, etc.
4. **AI Brief** - "World Brief" button generates summary (requires Groq/OpenRouter)

## Production Deployment

### Deploy to Vercel (Recommended)

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Follow prompts to:
# 1. Link to existing project or create new
# 2. Confirm project settings
# 3. Deploy
```

**Add Environment Variables:**
1. Go to Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add all keys from your `.env.local`
4. Redeploy if needed

### Deploy Railway Relay (Optional)

Required for: AIS vessel tracking, OpenSky aircraft, Telegram OSINT, OREF alerts

```bash
# 1. Create Railway account: https://railway.app/
# 2. Create new project
# 3. Add environment variables (see API_KEYS_GUIDE.md)
# 4. Deploy with:
railway up
# Or use: node scripts/ais-relay.cjs

# 5. Set relay URL in Vercel environment:
WS_RELAY_URL=https://your-railway-app.railway.app
RELAY_SHARED_SECRET=your_secret_here
```

## Desktop App Installation

### Download Pre-built Binaries

Visit: https://worldmonitor.app/api/download

**Available Platforms:**
- Windows: `.exe` installer
- macOS Apple Silicon: `.dmg`
- macOS Intel: `.dmg`
- Linux: `.AppImage`

### Build from Source

```bash
# Install Rust (required for Tauri)
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

# Install system dependencies (Linux only)
sudo apt-get install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev

# Build desktop app
npm run tauri build

# Binaries will be in: src-tauri/target/release/bundle/
```

## Troubleshooting

### Edge Functions Not Working

**Problem**: News feeds empty, API calls fail

**Solution**:
```bash
# Make sure you're using vercel dev, not npm run dev
vercel dev

# If still failing, check Vercel CLI version
vercel --version  # Should be latest

# Reinstall if needed
npm uninstall -g vercel
npm install -g vercel
```

### Redis Connection Errors

**Problem**: Cache errors in console

**Solution**:
1. Verify `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` are correct
2. Check Upstash dashboard for connection status
3. App works without Redis but performance will be degraded

### AI Summarization Not Working

**Problem**: "World Brief" button does nothing

**Solution**:
1. Check `GROQ_API_KEY` is set correctly
2. Verify API key at https://console.groq.com/
3. Check browser console for error messages
4. Try OpenRouter as fallback: set `OPENROUTER_API_KEY`

### Map Not Loading

**Problem**: Blank screen or map tiles missing

**Solution**:
1. Check browser console for errors
2. Verify internet connection (uses OpenFreeMap by default)
3. Try clearing browser cache
4. Check if WebGL is enabled in browser

### Port Already in Use

**Problem**: `Error: Port 3000 is already in use`

**Solution**:
```bash
# Find process using port 3000
lsof -i :3000  # macOS/Linux
netstat -ano | findstr :3000  # Windows

# Kill the process or use different port
vercel dev --listen 3001
```

## Advanced Configuration

### Self-Hosted Map Tiles

```bash
# 1. Download PMTiles file (large!)
# See: https://protomaps.com/downloads

# 2. Upload to Cloudflare R2, S3, or HTTP server

# 3. Set in .env.local:
VITE_PMTILES_URL=https://your-server.com/tiles.pmtiles
VITE_PMTILES_URL_PUBLIC=https://your-server.com/tiles.pmtiles
```

### Local AI with Ollama

```bash
# 1. Install Ollama: https://ollama.ai/

# 2. Pull a model
ollama pull llama3.1:8b

# 3. Start Ollama server
ollama serve

# 4. Configure in .env.local:
OLLAMA_API_URL=http://localhost:11434
OLLAMA_MODEL=llama3.1:8b

# AI will now run locally, no API keys needed!
```

### Custom Variant

```bash
# Create custom variant in .env.local:
VITE_VARIANT=tech  # Options: full, tech, finance, commodity, happy

# Rebuild:
npm run build
```

## Performance Optimization

### Enable Redis Caching

```bash
# Set up Upstash Redis (free tier: 10K commands/day)
# Add to .env.local:
UPSTASH_REDIS_REST_URL=your_url
UPSTASH_REDIS_REST_TOKEN=your_token
```

**Impact**: 
- 80% reduction in API calls
- 3x faster page loads
- Cross-user cache sharing

### Service Worker Caching

Automatically enabled in production. Caches:
- Map tiles (500 tile limit)
- Static assets
- API responses (configurable TTL)

### Reduce Bundle Size

```bash
# Build with specific variant only
VITE_VARIANT=tech npm run build

# Analyze bundle
npm run build -- --mode analyze
```

## Security Best Practices

1. **Never commit `.env.local`** - Already in `.gitignore`
2. **Rotate API keys regularly** - Especially for production
3. **Use environment-specific keys** - Different keys for dev/prod
4. **Enable rate limiting** - Configure in Vercel settings
5. **Monitor API usage** - Check provider dashboards regularly

## Updating

```bash
# Pull latest changes
git pull origin main

# Update dependencies
npm install

# Rebuild if needed
npm run build

# Redeploy
vercel --prod
```

## Getting Help

- **Documentation**: `./docs/` directory
- **GitHub Issues**: https://github.com/koala73/worldmonitor/issues
- **API Reference**: See `API_KEYS_GUIDE.md`

## Next Steps

1. ✅ Complete installation
2. 📝 Configure essential API keys
3. 🚀 Deploy to Vercel
4. 🔧 Add optional services as needed
5. 📊 Monitor usage and performance

For API key details, see `API_KEYS_GUIDE.md`.
