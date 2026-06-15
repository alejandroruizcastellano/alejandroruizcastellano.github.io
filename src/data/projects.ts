// Proyectos destacados mostrados en Projects/ProjectCard
export interface Project {
	title: string;
	description: string;
	tags: string[];
	github: string;
	category: 'ml' | 'engineering' | 'analytics';
	icon: 'chart-line' | 'users' | 'sun' | 'cart' | 'building';
	featured: boolean;
}

export const projects: Project[] = [
	{
		title: 'Retail sales forecasting',
		description:
			'Modelo de predicción recursiva a 8 días con HistGradientBoostingRegressor. Feature engineering temporal con lags, rolling averages y variables de stock-out.',
		tags: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib/Seaborn'],
		github: 'https://github.com/alejandroruizcastellano/Forecasting-Retail---ML',
		category: 'ml',
		icon: 'chart-line',
		featured: true,
	},
	{
		title: 'Lead scoring model',
		description:
			'Sistema de scoring de leads combinando segmentación no supervisada (KMeans) con clasificación (Logistic Regression). AUC de 0.8515.',
		tags: ['Python', 'KMeans', 'Logistic Regression', 'scikit-learn'],
		github: 'https://github.com/alejandroruizcastellano/Lead-Scoring-ML',
		category: 'ml',
		icon: 'users',
		featured: true,
	},
	{
		title: 'CRO e-commerce analysis',
		description:
			'Análisis de optimización de conversión (CRO) para e-commerce. Estudio del funnel de conversión, identificación de puntos de fuga y recomendaciones data-driven.',
		tags: ['Python', 'Pandas', 'Analytics', 'Matplotlib/Seaborn'],
		github: 'https://github.com/alejandroruizcastellano/Optimizacion-ecommerce',
		category: 'analytics',
		icon: 'cart',
		featured: true,
	},
	{
		title: 'Análisis de plantas fotovoltaicas',
		description:
			'Análisis de datos de sensores IoT de dos plantas fotovoltaicas para diagnosticar si las anomalías detectadas se deben a fallos reales de equipos (módulos, inversores) o a errores de calibración en las mediciones.',
		tags: ['Python', 'Pandas', 'Matplotlib/Seaborn'],
		github: 'https://github.com/alejandroruizcastellano/Analisis-planta-generacion-fotovoltaica',
		category: 'engineering',
		icon: 'sun',
		featured: true,
	},
	{
		title: 'Real estate market analysis',
		description:
			'Análisis del mercado inmobiliario con exploración de datos, visualizaciones y modelado.',
		tags: ['Python', 'Pandas', 'Matplotlib/Seaborn'],
		github: 'https://github.com/alejandroruizcastellano/Analisis-mercado-inmobiliario',
		category: 'analytics',
		icon: 'building',
		featured: true,
	},
];
