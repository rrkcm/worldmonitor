# Health Variant - World Monitor

## Overview

The **Health variant** is a specialized version of World Monitor focused on global health intelligence, medical research, disease tracking, and healthcare systems monitoring.

**Access**: `health.worldmonitor.app` or set `VITE_VARIANT=health`

## Features

### 📰 News Feeds (16 Categories)

#### Core Health Intelligence
- **Global Health News** - WHO, CDC, STAT News, Health Affairs, The Lancet, BMJ
- **Disease Outbreaks & Epidemiology** - ProMED, Outbreak News, ECDC, disease surveillance
- **Medical Research & Breakthroughs** - Nature Medicine, Science, NEJM, NIH research
- **Vaccines & Immunization** - Vaccine development, mRNA technology, vaccine equity

#### Specialized Coverage
- **Pharmaceuticals & Drug Development** - FDA approvals, BioPharma, clinical trials, rare diseases
- **Mental Health** - Mental health news, psychiatry research, addiction medicine
- **Healthcare Systems & Policy** - Health policy, hospital systems, healthcare access
- **Cancer Research & Treatment** - Cancer research, NCI news, immunotherapy breakthroughs

#### Disease-Specific Tracking
- **Chronic Diseases** - Diabetes, cardiovascular health, respiratory diseases
- **Medical Technology & Digital Health** - MedTech, telemedicine, AI in healthcare, genomics
- **Nutrition & Public Health** - Nutrition science, food safety, obesity research
- **Maternal & Child Health** - Maternal health, pediatrics, prenatal care

#### Research & Innovation
- **Aging & Longevity** - Aging research, Alzheimer's & dementia, longevity science
- **Environmental Health** - Environmental health impacts, One Health approach, climate health

### 🗺️ Map Features

The health variant includes specialized map layers:

**Enabled by Default:**
- ✅ **Weather** - Climate and weather patterns affecting health
- ✅ **Natural disasters** - Earthquakes, fires, and natural events
- ✅ **Displacement** - Refugee and IDP tracking (health implications)
- ✅ **Climate** - Climate change impacts on health
- ✅ **Outages** - Infrastructure outages affecting healthcare

**Disabled (Geopolitical):**
- ❌ Military tracking, conflicts, bases
- ❌ Financial centers, stock exchanges
- ❌ Tech hubs, data centers

### 📊 Dashboard Panels

1. **Global Health Map** - Interactive map with health-related data layers
2. **Health Headlines** - Real-time aggregated health news
3. **Global Health News** - WHO, CDC, major health organizations
4. **Disease Outbreaks** - Live outbreak tracking and surveillance
5. **Medical Research** - Latest breakthroughs and clinical trials
6. **Vaccines & Immunization** - Vaccine development and distribution
7. **Pharmaceuticals** - Drug approvals and development
8. **Mental Health** - Mental health news and research
9. **Healthcare Policy** - Policy changes and healthcare systems
10. **Cancer Research** - Oncology breakthroughs and treatments
11. **Chronic Diseases** - Diabetes, cardiovascular, respiratory tracking
12. **Health Technology** - MedTech, digital health, AI in medicine
13. **Nutrition & Food Safety** - Nutrition research and food safety alerts
14. **Maternal & Child Health** - Pregnancy, pediatrics, child health
15. **Aging & Longevity** - Aging research and dementia tracking
16. **Environmental Health** - Environmental impacts on health

## News Sources

### Tier 1 (Authoritative)
- **WHO** (World Health Organization)
- **CDC** (Centers for Disease Control)
- **NIH** (National Institutes of Health)
- **FDA** (Food and Drug Administration)
- **NCI** (National Cancer Institute)
- **ECDC** (European Centre for Disease Prevention)

### Tier 2 (Major Medical Journals)
- **The Lancet**
- **New England Journal of Medicine (NEJM)**
- **Nature Medicine**
- **Science Medicine**
- **BMJ** (British Medical Journal)
- **Health Affairs**

### Tier 3 (Specialized Sources)
- **STAT News** - Healthcare and biotech journalism
- **ProMED** - Disease outbreak alerts
- **BioPharma Dive** - Pharmaceutical industry
- **FiercePharma** - Drug development news
- **Outbreak News Today** - Infectious disease tracking

### Google News Aggregation
Curated searches for:
- Disease outbreaks and epidemics
- Medical breakthroughs and innovations
- Vaccine development and distribution
- Clinical trials and drug approvals
- Mental health research
- Cancer treatments
- Chronic disease management
- Health technology and AI
- Nutrition and food safety
- Environmental health impacts

## Use Cases

### 🏥 Healthcare Professionals
- Track disease outbreaks in real-time
- Monitor latest medical research and breakthroughs
- Stay updated on drug approvals and clinical trials
- Follow healthcare policy changes

### 🔬 Medical Researchers
- Discover latest research publications
- Track clinical trial developments
- Monitor funding and research trends
- Follow peer institution breakthroughs

### 📊 Public Health Officials
- Disease surveillance and outbreak tracking
- Vaccine distribution monitoring
- Healthcare system capacity tracking
- Environmental health monitoring

### 💊 Pharmaceutical Industry
- FDA approval tracking
- Competitor drug development
- Clinical trial results
- Rare disease research

### 📰 Health Journalists
- Breaking health news aggregation
- Medical research discoveries
- Healthcare policy developments
- Global health crisis tracking

### 🌍 Global Health Organizations
- Pandemic preparedness monitoring
- Vaccine equity tracking
- Healthcare access in developing regions
- One Health approach coordination

## Technical Details

### Configuration Files
- **Variant Config**: `src/config/variants/health.ts`
- **Feeds**: 16 feed categories, 100+ sources
- **Panels**: 16 specialized health panels
- **Map Layers**: Health-focused layer selection

### Environment Variable
```bash
VITE_VARIANT=health
```

### Hostname Detection
Automatically activates when accessed via:
- `health.worldmonitor.app`
- `health.localhost`

### Local Development
```bash
# Set variant in localStorage
localStorage.setItem('worldmonitor-variant', 'health');

# Or use environment variable
VITE_VARIANT=health npm run dev
```

## Comparison with Other Variants

| Feature | Full (Geopolitical) | Tech | Finance | Health |
|---------|---------------------|------|---------|--------|
| **Focus** | Global conflicts | Startups & AI | Markets & trading | Medical & health |
| **News Sources** | 435+ | 150+ | 200+ | 100+ |
| **Map Layers** | Military, conflicts | Tech hubs, data centers | Financial centers | Climate, disasters |
| **Primary Users** | Analysts, journalists | VCs, founders | Traders, investors | Doctors, researchers |
| **Update Frequency** | Real-time | Real-time | Real-time | Real-time |

## Data Sources

### Official Organizations
- World Health Organization (WHO)
- Centers for Disease Control (CDC)
- National Institutes of Health (NIH)
- Food and Drug Administration (FDA)
- European Centre for Disease Prevention (ECDC)

### Medical Journals
- The Lancet
- New England Journal of Medicine
- Nature Medicine
- Science
- BMJ

### News Aggregation
- Google News (health-focused queries)
- STAT News
- BioPharma Dive
- FiercePharma

### Outbreak Tracking
- ProMED (Program for Monitoring Emerging Diseases)
- Outbreak News Today
- Disease surveillance networks

## Future Enhancements

### Planned Features
- [ ] Hospital capacity tracking
- [ ] Clinical trial database integration
- [ ] Drug shortage alerts
- [ ] Medical device recalls
- [ ] Healthcare worker safety tracking
- [ ] Antimicrobial resistance monitoring
- [ ] Global health funding tracker
- [ ] Medical AI model releases

### Potential Data Integrations
- [ ] GISAID (viral genome database)
- [ ] ClinicalTrials.gov API
- [ ] PubMed API for research papers
- [ ] OpenFDA API for drug/device data
- [ ] UNHCR health data
- [ ] World Bank health indicators

## Contributing

To add new health-related feeds or features:

1. Edit `src/config/variants/health.ts`
2. Add feed to appropriate category
3. Test with `VITE_VARIANT=health npm run dev`
4. Submit pull request

### Feed Categories Available
- `globalHealth`, `outbreaks`, `research`, `vaccines`
- `pharma`, `mentalHealth`, `healthPolicy`, `cancer`
- `chronicDiseases`, `healthTech`, `nutrition`, `maternalChild`
- `aging`, `environmental`

## License

Same as World Monitor main project.

## Support

- GitHub Issues: https://github.com/koala73/worldmonitor/issues
- Main Documentation: https://github.com/koala73/worldmonitor
- Health Variant Discussions: Tag with `variant:health`

---

**Created**: March 2026  
**Variant Version**: 1.0  
**Compatible with**: World Monitor v2.5.25+
