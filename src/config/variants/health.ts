// Health variant - health.worldmonitor.app
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Re-export feeds infrastructure
export {
  SOURCE_TIERS,
  getSourceTier,
  SOURCE_TYPES,
  getSourceType,
  getSourcePropagandaRisk,
  type SourceRiskProfile,
  type SourceType,
} from '../feeds';

// Health-specific FEEDS configuration
import type { Feed } from '@/types';
import { rssProxyUrl } from '@/utils';

const rss = rssProxyUrl;

export const FEEDS: Record<string, Feed[]> = {
  // Global Health News
  globalHealth: [
    { name: 'WHO News', url: rss('https://www.who.int/rss-feeds/news-english.xml') },
    { name: 'CDC Newsroom', url: rss('https://tools.cdc.gov/api/v2/resources/media/132608.rss') },
    { name: 'STAT News', url: rss('https://www.statnews.com/feed/') },
    { name: 'Health Affairs', url: rss('https://www.healthaffairs.org/do/10.1377/hp.rss/full/') },
    { name: 'Global Health Now', url: rss('https://news.google.com/rss/search?q=("global+health"+OR+"public+health"+OR+WHO+OR+pandemic)+when:2d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'The Lancet', url: rss('https://news.google.com/rss/search?q=site:thelancet.com+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'BMJ News', url: rss('https://news.google.com/rss/search?q=site:bmj.com+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Disease Outbreaks & Epidemiology
  outbreaks: [
    { name: 'ProMED', url: rss('https://promedmail.org/feed/') },
    { name: 'Outbreak News', url: rss('http://outbreaknewstoday.com/feed/') },
    { name: 'ECDC News', url: rss('https://www.ecdc.europa.eu/en/publications-data/rss') },
    { name: 'Disease Surveillance', url: rss('https://news.google.com/rss/search?q=("disease+outbreak"+OR+epidemic+OR+"infectious+disease"+OR+surveillance)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Emerging Infections', url: rss('https://news.google.com/rss/search?q=("emerging+infectious+disease"+OR+"novel+pathogen"+OR+"zoonotic+disease")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Pandemic Preparedness', url: rss('https://news.google.com/rss/search?q=("pandemic+preparedness"+OR+"disease+surveillance"+OR+"epidemic+response")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Medical Research & Breakthroughs
  research: [
    { name: 'Nature Medicine', url: rss('https://www.nature.com/nm.rss') },
    { name: 'Science Medicine', url: rss('https://www.science.org/rss/news_current.xml') },
    { name: 'NEJM', url: rss('https://www.nejm.org/action/showFeed?type=etoc&feed=rss&jc=nejm') },
    { name: 'Medical Breakthroughs', url: rss('https://news.google.com/rss/search?q=("medical+breakthrough"+OR+"clinical+trial"+OR+"drug+approval"+OR+"gene+therapy")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'NIH Research', url: rss('https://www.nih.gov/news-events/news-releases/rss') },
    { name: 'Medical Innovations', url: rss('https://news.google.com/rss/search?q=("medical+innovation"+OR+"healthcare+technology"+OR+"precision+medicine")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Vaccines & Immunization
  vaccines: [
    { name: 'Vaccine News', url: rss('https://news.google.com/rss/search?q=(vaccine+OR+vaccination+OR+immunization+OR+"vaccine+development")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'mRNA Technology', url: rss('https://news.google.com/rss/search?q=("mRNA+vaccine"+OR+"vaccine+platform"+OR+Moderna+OR+BioNTech)+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Vaccine Equity', url: rss('https://news.google.com/rss/search?q=("vaccine+equity"+OR+"vaccine+access"+OR+COVAX+OR+"vaccine+distribution")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Pharmaceuticals & Drug Development
  pharma: [
    { name: 'FDA Approvals', url: rss('https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/fda-newsroom/rss.xml') },
    { name: 'BioPharma Dive', url: rss('https://www.biopharmadive.com/feeds/news/') },
    { name: 'FiercePharma', url: rss('https://www.fiercepharma.com/rss/xml') },
    { name: 'Drug Development', url: rss('https://news.google.com/rss/search?q=("drug+development"+OR+"clinical+trial"+OR+"FDA+approval"+OR+"pharmaceutical")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Rare Diseases', url: rss('https://news.google.com/rss/search?q=("rare+disease"+OR+"orphan+drug"+OR+"gene+therapy"+OR+"precision+medicine")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Mental Health
  mentalHealth: [
    { name: 'Mental Health News', url: rss('https://news.google.com/rss/search?q=("mental+health"+OR+depression+OR+anxiety+OR+"mental+illness")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Psychiatry Research', url: rss('https://news.google.com/rss/search?q=(psychiatry+OR+psychotherapy+OR+"mental+health+treatment")+research+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Addiction Medicine', url: rss('https://news.google.com/rss/search?q=("addiction+treatment"+OR+"substance+abuse"+OR+"opioid+crisis")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Healthcare Systems & Policy
  healthPolicy: [
    { name: 'Health Policy News', url: rss('https://news.google.com/rss/search?q=("health+policy"+OR+"healthcare+reform"+OR+"health+insurance"+OR+Medicare)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Hospital Systems', url: rss('https://news.google.com/rss/search?q=("hospital+system"+OR+"healthcare+provider"+OR+"medical+center")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Healthcare Access', url: rss('https://news.google.com/rss/search?q=("healthcare+access"+OR+"health+equity"+OR+"medical+deserts")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Cancer Research & Treatment
  cancer: [
    { name: 'Cancer Research', url: rss('https://news.google.com/rss/search?q=(cancer+research+OR+oncology+OR+immunotherapy+OR+"cancer+treatment")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'NCI News', url: rss('https://www.cancer.gov/syndication/rss.xml') },
    { name: 'Cancer Breakthroughs', url: rss('https://news.google.com/rss/search?q=("cancer+breakthrough"+OR+"CAR-T+therapy"+OR+"targeted+therapy")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Chronic Diseases
  chronicDiseases: [
    { name: 'Diabetes News', url: rss('https://news.google.com/rss/search?q=(diabetes+OR+insulin+OR+"blood+sugar"+OR+"diabetes+treatment")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Cardiovascular', url: rss('https://news.google.com/rss/search?q=("heart+disease"+OR+cardiology+OR+"cardiovascular+health")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Respiratory Diseases', url: rss('https://news.google.com/rss/search?q=(asthma+OR+COPD+OR+"lung+disease"+OR+"respiratory+health")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Medical Technology & Digital Health
  healthTech: [
    { name: 'MedTech News', url: rss('https://news.google.com/rss/search?q=("medical+technology"+OR+medtech+OR+"medical+device"+OR+"diagnostic+tool")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Digital Health', url: rss('https://news.google.com/rss/search?q=("digital+health"+OR+telemedicine+OR+"health+app"+OR+"remote+monitoring")+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'AI in Healthcare', url: rss('https://news.google.com/rss/search?q=("AI+healthcare"+OR+"medical+AI"+OR+"AI+diagnosis"+OR+"machine+learning+medicine")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Genomics', url: rss('https://news.google.com/rss/search?q=(genomics+OR+"gene+sequencing"+OR+CRISPR+OR+"genetic+testing")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Nutrition & Public Health
  nutrition: [
    { name: 'Nutrition Science', url: rss('https://news.google.com/rss/search?q=("nutrition+research"+OR+diet+OR+"food+science"+OR+"nutritional+health")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Food Safety', url: rss('https://news.google.com/rss/search?q=("food+safety"+OR+"food+recall"+OR+foodborne+OR+contamination)+when:3d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Obesity & Metabolic', url: rss('https://news.google.com/rss/search?q=(obesity+OR+"metabolic+syndrome"+OR+"weight+loss"+drug)+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Maternal & Child Health
  maternalChild: [
    { name: 'Maternal Health', url: rss('https://news.google.com/rss/search?q=("maternal+health"+OR+pregnancy+OR+childbirth+OR+prenatal)+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Pediatrics', url: rss('https://news.google.com/rss/search?q=(pediatrics+OR+"child+health"+OR+"infant+health"+OR+vaccination)+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Aging & Longevity
  aging: [
    { name: 'Aging Research', url: rss('https://news.google.com/rss/search?q=("aging+research"+OR+longevity+OR+"anti-aging"+OR+gerontology)+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'Alzheimer\'s & Dementia', url: rss('https://news.google.com/rss/search?q=(Alzheimer+OR+dementia+OR+"cognitive+decline"+OR+neurodegeneration)+when:3d&hl=en-US&gl=US&ceid=US:en') },
  ],

  // Environmental Health
  environmental: [
    { name: 'Environmental Health', url: rss('https://news.google.com/rss/search?q=("environmental+health"+OR+"air+pollution"+OR+"water+quality"+OR+"climate+health")+when:7d&hl=en-US&gl=US&ceid=US:en') },
    { name: 'One Health', url: rss('https://news.google.com/rss/search?q=("One+Health"+OR+zoonotic+OR+"animal+health"+OR+"ecosystem+health")+when:7d&hl=en-US&gl=US&ceid=US:en') },
  ],
};

// Panel configuration for health variant
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Health Map', enabled: true, priority: 1 },
  'live-news': { name: 'Health Headlines', enabled: true, priority: 1 },
  globalHealth: { name: 'Global Health News', enabled: true, priority: 1 },
  outbreaks: { name: 'Disease Outbreaks', enabled: true, priority: 1 },
  research: { name: 'Medical Research', enabled: true, priority: 1 },
  vaccines: { name: 'Vaccines & Immunization', enabled: true, priority: 1 },
  pharma: { name: 'Pharmaceuticals', enabled: true, priority: 1 },
  mentalHealth: { name: 'Mental Health', enabled: true, priority: 1 },
  healthPolicy: { name: 'Healthcare Policy', enabled: true, priority: 2 },
  cancer: { name: 'Cancer Research', enabled: true, priority: 2 },
  chronicDiseases: { name: 'Chronic Diseases', enabled: true, priority: 2 },
  healthTech: { name: 'Health Technology', enabled: true, priority: 2 },
  nutrition: { name: 'Nutrition & Food Safety', enabled: true, priority: 2 },
  maternalChild: { name: 'Maternal & Child Health', enabled: true, priority: 2 },
  aging: { name: 'Aging & Longevity', enabled: true, priority: 2 },
  environmental: { name: 'Environmental Health', enabled: true, priority: 2 },
  monitors: { name: 'My Monitors', enabled: true, priority: 2 },
};

// Health-focused map layers
export const DEFAULT_MAP_LAYERS: MapLayers = {
  gpsJamming: false,

  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: true,
  economic: false,
  waterways: false,
  outages: true,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: true,
  climate: true,
  // Tech layers (disabled in health variant)
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  // Finance layers (disabled in health variant)
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  // Happy variant layers
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
  iranAttacks: false,
  ciiChoropleth: false,
  dayNight: false,
  // Commodity variant layers (disabled in health variant)
  miningSites: false,
  processingPlants: false,
  commodityPorts: false,
};

// Mobile defaults for health variant
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  gpsJamming: false,

  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: false,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: true,
  economic: false,
  waterways: false,
  outages: false,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: true,
  // Tech layers (disabled)
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  // Finance layers (disabled)
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  // Happy variant layers
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
  iranAttacks: false,
  ciiChoropleth: false,
  dayNight: false,
  // Commodity variant layers (disabled)
  miningSites: false,
  processingPlants: false,
  commodityPorts: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'health',
  description: 'Global health, medical research & disease tracking dashboard',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
