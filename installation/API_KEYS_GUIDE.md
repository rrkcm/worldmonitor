# World Monitor - Complete API Keys & Services Guide

This document provides a comprehensive list of all API keys, tokens, and services required for World Monitor installation.

## Table of Contents
- [Quick Summary](#quick-summary)
- [AI & Summarization Services](#ai--summarization-services)
- [Caching & Database Services](#caching--database-services)
- [Market & Financial Data](#market--financial-data)
- [Energy & Economic Data](#energy--economic-data)
- [Aviation Intelligence](#aviation-intelligence)
- [Aircraft & Vessel Tracking](#aircraft--vessel-tracking)
- [Conflict & Geopolitical Data](#conflict--geopolitical-data)
- [Internet & Infrastructure Monitoring](#internet--infrastructure-monitoring)
- [Satellite & Environmental Data](#satellite--environmental-data)
- [Railway Relay Services](#railway-relay-services)
- [Telegram OSINT](#telegram-osint)
- [Site Configuration](#site-configuration)
- [Desktop App Configuration](#desktop-app-configuration)
- [Registration Database](#registration-database)

---

## Quick Summary

**Total Services**: 25+ external APIs and services
**Free Tier Available**: 20+ services
**Paid/Premium**: 5 services (optional)
**All Keys Optional**: Dashboard works without any keys, but features will be limited

---

## AI & Summarization Services

### 1. Groq API (Primary AI - Recommended)
- **Purpose**: AI-powered news summarization, threat analysis, geopolitical forecasting
- **Free Tier**: 14,400 requests/day
- **Registration**: https://console.groq.com/
- **Environment Variable**: `GROQ_API_KEY`
- **Priority**: HIGH
- **Notes**: Primary AI provider, falls back to OpenRouter if unavailable

### 2. OpenRouter API (Fallback AI)
- **Purpose**: Backup AI summarization when Groq is unavailable
- **Free Tier**: 50 requests/day
- **Registration**: https://openrouter.ai/
- **Environment Variable**: `OPENROUTER_API_KEY`
- **Priority**: MEDIUM
- **Notes**: Acts as fallback after Groq, before browser-based T5

### 3. Ollama / LM Studio (Local AI - Optional)
- **Purpose**: Run AI models locally without API keys
- **Free Tier**: Completely free (runs on your hardware)
- **Registration**: Not required
- **Environment Variables**: `OLLAMA_API_URL`, `OLLAMA_MODEL`
- **Priority**: OPTIONAL
- **Notes**: Best for privacy, no data leaves your machine

---

## Caching & Database Services

### 4. Upstash Redis
- **Purpose**: Cross-user cache, AI call deduplication, risk score caching
- **Free Tier**: 10,000 commands/day
- **Registration**: https://upstash.com/
- **Environment Variables**: 
  - `UPSTASH_REDIS_REST_URL`
  - `UPSTASH_REDIS_REST_TOKEN`
- **Priority**: HIGH
- **Notes**: Significantly improves performance and reduces API costs

---

## Market & Financial Data

### 5. Finnhub API
- **Purpose**: Stock quotes, market data, real-time prices
- **Free Tier**: Available
- **Registration**: https://finnhub.io/
- **Environment Variable**: `FINNHUB_API_KEY`
- **Priority**: MEDIUM
- **Notes**: Required for market watchlist and financial panels

---

## Energy & Economic Data

### 6. U.S. Energy Information Administration (EIA)
- **Purpose**: Oil prices (WTI/Brent), production data, inventory levels
- **Free Tier**: Available
- **Registration**: https://www.eia.gov/opendata/
- **Environment Variable**: `EIA_API_KEY`
- **Priority**: MEDIUM
- **Notes**: Essential for energy commodity tracking

### 7. FRED (Federal Reserve Economic Data)
- **Purpose**: Economic indicators, interest rates, macro data
- **Free Tier**: Available
- **Registration**: https://fred.stlouisfed.org/docs/api/api_key.html
- **Environment Variable**: `FRED_API_KEY`
- **Priority**: MEDIUM
- **Notes**: Powers economic analysis panels

---

## Aviation Intelligence

### 8. AviationStack
- **Purpose**: Live flight data, airport operations, carrier tracking
- **Free Tier**: Limited
- **Registration**: https://aviationstack.com/
- **Environment Variable**: `AVIATIONSTACK_API`
- **Priority**: LOW
- **Notes**: Required for aviation intelligence panels

### 9. ICAO API
- **Purpose**: NOTAM airport closures (MENA region focus)
- **Free Tier**: Unknown
- **Registration**: https://applications.icao.int/
- **Environment Variable**: `ICAO_API_KEY`
- **Priority**: LOW
- **Notes**: Optional, specialized for Middle East/North Africa

### 10. Travelpayouts
- **Purpose**: Flight price search (demo purposes)
- **Free Tier**: Available
- **Registration**: https://www.travelpayouts.com/
- **Environment Variable**: `TRAVELPAYOUTS_API_TOKEN`
- **Priority**: LOW
- **Notes**: Optional demo feature

---

## Aircraft & Vessel Tracking

### 11. Wingbits API
- **Purpose**: Aircraft enrichment (owner, operator, type information)
- **Free Tier**: Contact required
- **Registration**: https://wingbits.com/
- **Environment Variable**: `WINGBITS_API_KEY`
- **Priority**: LOW
- **Notes**: Enhances aircraft tracking with ownership data

### 12. AISStream
- **Purpose**: Live vessel positions via AIS (Automatic Identification System)
- **Free Tier**: Available
- **Registration**: https://aisstream.io/
- **Environment Variable**: `AISSTREAM_API_KEY`
- **Priority**: MEDIUM
- **Notes**: Required for Railway relay, maritime tracking

### 13. OpenSky Network
- **Purpose**: Aircraft tracking with higher rate limits for cloud IPs
- **Free Tier**: Available (higher limits with OAuth)
- **Registration**: https://opensky-network.org/
- **Environment Variables**:
  - `OPENSKY_CLIENT_ID`
  - `OPENSKY_CLIENT_SECRET`
- **Priority**: MEDIUM
- **Notes**: Used by Railway relay for military flight tracking

---

## Conflict & Geopolitical Data

### 14. ACLED (Armed Conflict Location & Event Data)
- **Purpose**: Conflict events, protests, violence tracking
- **Free Tier**: Free for researchers
- **Registration**: https://acleddata.com/
- **Environment Variable**: `ACLED_ACCESS_TOKEN`
- **Priority**: HIGH
- **Notes**: Critical for geopolitical monitoring

### 15. UCDP (Uppsala Conflict Data Program)
- **Purpose**: Conflict data and analysis
- **Free Tier**: Access token required since 2025
- **Registration**: https://ucdp.uu.se/apidocs/
- **Environment Variable**: `UCDP_ACCESS_TOKEN`
- **Priority**: MEDIUM
- **Notes**: Complements ACLED data

---

## Internet & Infrastructure Monitoring

### 16. Cloudflare Radar API
- **Purpose**: Internet outage detection, traffic analysis
- **Free Tier**: Requires free Cloudflare account with Radar access
- **Registration**: Cloudflare account + Radar access
- **Environment Variable**: `CLOUDFLARE_API_TOKEN`
- **Priority**: MEDIUM
- **Notes**: Tracks global internet disruptions

---

## Satellite & Environmental Data

### 17. NASA FIRMS
- **Purpose**: Fire detection via satellite (Fire Information for Resource Management)
- **Free Tier**: Available
- **Registration**: https://firms.modaps.eosdis.nasa.gov/
- **Environment Variable**: `NASA_FIRMS_API_KEY`
- **Priority**: MEDIUM
- **Notes**: Real-time wildfire and fire event tracking

---

## Railway Relay Services

The Railway relay is a separate Node.js server that handles persistent connections and specialized protocols. Deploy with: `node scripts/ais-relay.cjs`

### 18. Railway Relay Connection
- **Purpose**: Server-side relay for AIS, OpenSky, Telegram, OREF
- **Environment Variables**:
  - `WS_RELAY_URL` - Server-side HTTPS URL (used by Vercel)
  - `VITE_WS_RELAY_URL` - Client-side WSS URL (browser connection)
  - `RELAY_SHARED_SECRET` - Shared authentication secret
  - `RELAY_AUTH_HEADER` - Header name (default: `x-relay-key`)
  - `ALLOW_UNAUTHENTICATED_RELAY` - Emergency override (set to `false` in production)
  - `RELAY_METRICS_WINDOW_SECONDS` - Metrics window size (default: 60)
- **Priority**: MEDIUM
- **Notes**: Required for live vessel/aircraft tracking and Telegram OSINT

---

## Telegram OSINT

### 19. Telegram MTProto
- **Purpose**: OSINT channel monitoring (26 curated channels)
- **Free Tier**: Free
- **Registration**: https://my.telegram.org/apps
- **Environment Variables**:
  - `TELEGRAM_API_ID`
  - `TELEGRAM_API_HASH`
  - `TELEGRAM_SESSION` - GramJS StringSession (generate with `scripts/telegram/session-auth.mjs`)
  - `TELEGRAM_CHANNEL_SET` - Channel list: `full`, `tech`, or `finance`
- **Priority**: LOW
- **Notes**: Requires Railway relay, stateful MTProto connection

---

## Site Configuration

### 20. Site Variant
- **Environment Variable**: `VITE_VARIANT`
- **Options**: `full`, `tech`, `finance`, `commodity`, `happy`
- **Default**: `full`
- **Notes**: Determines which variant of the dashboard to display

### 21. API Base URL
- **Environment Variable**: `VITE_WS_API_URL`
- **Purpose**: Redirect browser API calls to external URL
- **Default**: Empty (same-domain API)
- **Production**: `https://api.worldmonitor.app`

### 22. Sentry Error Reporting
- **Environment Variable**: `VITE_SENTRY_DSN`
- **Purpose**: Client-side error tracking
- **Optional**: Leave empty to disable
- **Priority**: LOW

### 23. Map Interaction Mode
- **Environment Variable**: `VITE_MAP_INTERACTION_MODE`
- **Options**: `flat` (2D) or `3d` (default)
- **Notes**: Controls pitch/rotation interactions

### 24. Self-Hosted Map Tiles
- **Environment Variables**:
  - `VITE_PMTILES_URL` - PMTiles file URL for web app
  - `VITE_PMTILES_URL_PUBLIC` - CORS-enabled URL for desktop app
- **Purpose**: Use self-hosted map tiles instead of OpenFreeMap
- **Optional**: Leave empty to use free tiles
- **Notes**: See https://protomaps.com/docs/pmtiles

---

## Desktop App Configuration

### 25. Desktop Cloud Fallback
- **Environment Variable**: `WORLDMONITOR_VALID_KEYS`
- **Purpose**: Comma-separated list of valid API keys for desktop cloud fallback
- **Generation**: `openssl rand -hex 24 | sed 's/^/wm_/'`
- **Priority**: LOW
- **Notes**: Only needed for desktop app cloud fallback feature

---

## Registration Database

### 26. Convex
- **Purpose**: Email registration storage
- **Free Tier**: Available
- **Registration**: https://dashboard.convex.dev/
- **Environment Variable**: `CONVEX_URL`
- **Priority**: LOW
- **Notes**: Optional, for email registration feature

---

## Public Data Sources (No Keys Required)

The following services are used but **do not require API keys**:

- **UNHCR** (UN Refugee Agency) - Public API, CC BY 4.0 license
- **Open-Meteo** - Public weather API (processes Copernicus ERA5)
- **WorldPop** - Public population data
- **GDELT** - Global event database
- **USGS** - Earthquake data
- **GDACS** - Disaster alerts
- **NASA EONET** - Natural events
- **Yahoo Finance** - Market data (some endpoints)
- **CoinGecko** - Cryptocurrency data
- **mempool.space** - Bitcoin data
- **abuse.ch** - Threat intelligence
- **AlienVault OTX** - Threat intelligence
- **Polymarket** - Prediction markets

---

## Setup Priority Guide

### Essential (Core Functionality)
1. **Groq API** - AI summarization
2. **Upstash Redis** - Caching
3. **ACLED** - Conflict data

### Recommended (Enhanced Features)
4. **OpenRouter** - AI fallback
5. **Finnhub** - Market data
6. **EIA** - Energy data
7. **FRED** - Economic data
8. **NASA FIRMS** - Fire detection
9. **Cloudflare Radar** - Internet outages

### Optional (Specialized Features)
10. **AISStream + OpenSky** - Live tracking (requires Railway relay)
11. **Telegram MTProto** - OSINT channels (requires Railway relay)
12. **Aviation APIs** - Flight intelligence
13. **Wingbits** - Aircraft enrichment
14. **UCDP** - Additional conflict data

### Advanced (Custom Deployments)
15. **Railway Relay** - For persistent connections
16. **Self-hosted tiles** - Custom map tiles
17. **Convex** - Registration database
18. **Sentry** - Error tracking

---

## Cost Estimate

### Free Tier (Recommended Start)
- **Monthly Cost**: $0
- **Includes**: Groq (14,400 req/day), Upstash (10K commands/day), all public APIs
- **Limitations**: Rate limits on AI calls, reduced cache capacity

### Light Production Use
- **Monthly Cost**: ~$10-25
- **Includes**: Upstash Pro, increased Groq limits
- **Suitable for**: Personal use, small teams

### Full Production
- **Monthly Cost**: ~$50-100+
- **Includes**: Premium tiers for all services, Railway hosting
- **Suitable for**: Public deployments, high traffic

---

## Next Steps

1. Copy `.env.example` to `.env.local`
2. Start with essential services (Groq, Upstash, ACLED)
3. Add recommended services based on your needs
4. Test with `vercel dev`
5. Deploy to Vercel when ready

For detailed installation instructions, see `INSTALLATION_GUIDE.md`.
