# World Monitor - Installation Documentation

This directory contains comprehensive installation and setup documentation for World Monitor.

## 📁 Files in This Directory

### 🚀 [QUICK_START.md](./QUICK_START.md)
**5-minute setup guide** - Get the dashboard running locally with minimal configuration.

**Use this if:**
- You want to try World Monitor quickly
- You're familiar with Node.js development
- You want to see it working before configuring everything

### 📖 [INSTALLATION_GUIDE.md](./INSTALLATION_GUIDE.md)
**Complete installation reference** - Detailed step-by-step instructions for all deployment scenarios.

**Covers:**
- System requirements
- Development setup (local + Vercel)
- Production deployment
- Desktop app installation
- Railway relay setup
- Troubleshooting
- Performance optimization
- Security best practices

### 🔑 [API_KEYS_GUIDE.md](./API_KEYS_GUIDE.md)
**Comprehensive API reference** - Every service, API key, and token needed for World Monitor.

**Includes:**
- 26 services documented
- Registration links for each service
- Free tier information
- Priority ratings (essential/recommended/optional)
- Cost estimates
- Setup priority guide

### 📋 [.env.template](./.env.template)
**Environment configuration template** - Ready-to-use `.env` file with all variables organized and documented.

**Features:**
- Organized by priority (essential/recommended/optional)
- Inline comments with registration URLs
- Sensible defaults
- Quick reference for common configurations

## 🎯 Which File Should I Read?

### I want to get started NOW
→ **[QUICK_START.md](./QUICK_START.md)** - 5 minutes to running dashboard

### I want complete installation instructions
→ **[INSTALLATION_GUIDE.md](./INSTALLATION_GUIDE.md)** - Full setup guide

### I need to know what API keys to get
→ **[API_KEYS_GUIDE.md](./API_KEYS_GUIDE.md)** - All 26 services explained

### I want to configure my environment
→ **[.env.template](./.env.template)** - Copy and fill in your keys

## 📊 Quick Reference

### Essential Services (Start Here)
1. **Groq API** - AI summarization (free: 14,400 req/day)
2. **Upstash Redis** - Caching (free: 10K commands/day)
3. **ACLED** - Conflict data (free for researchers)

### Recommended Services
4. **OpenRouter** - AI fallback (free: 50 req/day)
5. **Finnhub** - Market data (free tier)
6. **EIA** - Energy data (free)
7. **FRED** - Economic data (free)
8. **NASA FIRMS** - Fire detection (free)

### Optional Services
- Aviation APIs (AviationStack, ICAO, Travelpayouts)
- Tracking (Wingbits, AISStream, OpenSky)
- Additional conflict data (UCDP)
- Telegram OSINT (requires Railway relay)

## 🚀 Quick Setup Commands

```bash
# Clone repository
git clone https://github.com/rrkcm/worldmonitor.git
cd worldmonitor

# Install dependencies
npm install

# Install Vercel CLI
npm install -g vercel

# Setup environment
cp installation/.env.template .env.local
# Edit .env.local with your API keys

# Start development server
vercel dev

# Open browser
# Navigate to: http://localhost:3000
```

## 📚 Additional Resources

### Project Documentation
- Main README: `../README.md`
- Architecture: `../docs/ARCHITECTURE.md`
- AI Intelligence: `../docs/AI_INTELLIGENCE.md`
- Data Sources: `../docs/DATA_SOURCES.md`
- Map Engine: `../docs/MAP_ENGINE.md`
- Finance Data: `../docs/FINANCE_DATA.md`

### External Links
- Live Demo: https://worldmonitor.app
- Original Repository: https://github.com/koala73/worldmonitor
- Your Fork: https://github.com/rrkcm/worldmonitor

## 🆘 Getting Help

1. **Check troubleshooting** - See `INSTALLATION_GUIDE.md` troubleshooting section
2. **Review API docs** - See `API_KEYS_GUIDE.md` for service-specific issues
3. **GitHub Issues** - https://github.com/koala73/worldmonitor/issues
4. **Project Documentation** - Check `../docs/` directory

## 📝 Notes

- **All API keys are optional** - Dashboard works without them, but features will be limited
- **Free tiers available** - Most services offer generous free tiers
- **Start small** - Begin with essential services, add more as needed
- **Security first** - Never commit `.env.local` to version control

## ✅ Installation Checklist

- [ ] Node.js v18+ installed
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Vercel CLI installed (`npm install -g vercel`)
- [ ] Environment configured (`.env.local` created)
- [ ] Essential API keys added (Groq, Upstash, ACLED)
- [ ] Development server running (`vercel dev`)
- [ ] Dashboard accessible at http://localhost:3000
- [ ] Map loads and displays correctly
- [ ] News feeds populate (if keys configured)
- [ ] AI brief generates summaries (if Groq key configured)

## 🎉 Next Steps After Installation

1. **Explore the dashboard** - Toggle map layers, check different panels
2. **Try AI features** - Generate World Brief, use AI Deduction
3. **Configure more services** - Add recommended APIs for full features
4. **Deploy to production** - Run `vercel --prod` when ready
5. **Set up Railway relay** - For live tracking features (optional)
6. **Install desktop app** - Download from https://worldmonitor.app/api/download

---

**Ready to start?** → [QUICK_START.md](./QUICK_START.md)
