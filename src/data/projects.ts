// Proyectos destacados mostrados en Projects/ProjectCard
export interface ProjectSummary {
	objetivo: string;
	enfoque: string[];
	resultados: string[];
	acciones?: string[];
	herramientas: string[];
}

export interface Project {
	title: string;
	description: string;
	tags: string[];
	github: string;
	category: 'ml' | 'engineering' | 'analytics';
	icon: 'chart-line' | 'users' | 'sun' | 'cart' | 'building' | 'dashboard';
	featured: boolean;
	summary?: ProjectSummary;
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
		summary: {
			objetivo:
				'Predecir las ventas diarias por producto y tienda en una ventana de 8 días, gestionando demanda intermitente, efectos promocionales y patrones estacionales.',
			enfoque: [
				'Integración de 3 fuentes de datos (ventas, calendario de eventos y precios) vía SQLite para 20 combinaciones tienda-producto.',
				'Feature engineering intensivo: lags de 15 periodos, rolling windows (2-15 días), indicadores de stock-break para demanda intermitente. Reducción de 142 a 69 variables.',
				'Forecasting recursivo a 8 días: las predicciones del día N alimentan el día N+1, resolviendo la limitación de los modelos supervisados con lags.',
				'Modelo: HistGradientBoostingRegressor (scikit-learn). Validación temporal con TimeSeriesSplit (4 folds) y tuning con RandomizedSearchCV (200 iteraciones).',
			],
			resultados: [
				'MAE de 5,7 unidades en validación — predicción fiable a 8 días vista.',
				'Los lags recientes (1-7 días) y rolling windows (7-8 días) dominan el poder predictivo.',
				'Los indicadores de stock-break mejoran significativamente las predicciones en productos de demanda irregular.',
				'20 modelos específicos por producto-tienda superan a un modelo global único.',
			],
			herramientas: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'SQLAlchemy', 'XGBoost'],
		},
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
		summary: {
			objetivo:
				'Identificar los leads con mayor probabilidad de conversión para optimizar la asignación de recursos comerciales, combinando predicción supervisada con segmentación no supervisada.',
			enfoque: [
				'Preparación de datos: validación de tipos, imputación de nulos, agregación de categorías raras y winsorización de outliers.',
				'Selección de variables con Mutual Information, Recursive Feature Elimination (XGBoost) y Permutation Importance.',
				'Modelo supervisado: Logistic Regression con GridSearchCV optimizando AUC-ROC + interpretación de coeficientes.',
				'Segmentación no supervisada: KMeans evaluado con Silhouette, Calinski-Harabasz y Davies-Bouldin.',
				'Pipeline productivizado con cloudpickle, notebooks de reentrenamiento e inferencia.',
			],
			resultados: [
				'AUC de 0,8515 en validación — 85 % de precisión en el ranking de probabilidad de compra.',
				'Segmento 0 (22 % volumen, 55,5 % conversión): motor de compra actual con patrones replicables.',
				'Segmento 3 (29 % volumen, 33 % conversión): palanca de crecimiento principal.',
				'Segmento 1 (16 % volumen, 0 % conversión): ineficiencia crítica → revisión de calidad de fuente API.',
				'Canal SMS como diferenciador de rendimiento en segmentos de alta conversión.',
			],
			herramientas: ['Python', 'scikit-learn', 'XGBoost', 'KMeans', 'Pandas', 'Matplotlib'],
		},
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
		summary: {
			objetivo:
				'Identificar acciones concretas de optimización para aumentar tráfico cualificado, tasa de conversión y ticket medio en un e-commerce de cosmética con ingresos estancados.',
			enfoque: [
				'Integración de datos transaccionales (5 meses, +1 M registros) desde SQLite con SQLAlchemy.',
				'Análisis de funnel de conversión, retención por cohortes, segmentación RFM y cálculo de LTV por cohorte de adquisición.',
				'Motor de recomendación con filtrado colaborativo basado en distancia euclídea.',
				'Feature engineering temporal (hora, día, semana, mes) para detectar patrones de compra estacionales.',
			],
			resultados: [
				'Funnel: 60 % de conversión a carrito, 22 % a compra → oportunidad de A/B testing en checkout.',
				'Solo ~10 % de nuevos clientes repite compra → mayor palanca de mejora vía recomendaciones y programas de fidelización.',
				'50 % del catálogo sin ventas; SKUs de alto tráfico con brechas de conversión → optimización de catálogo y pricing.',
				'LTV mediano a 4 meses fija un CPA máximo de 42 € → 12 iniciativas propuestas en 5 palancas de crecimiento.',
				'Ventanas óptimas de inversión publicitaria: 9-13 h y 18-20 h, especialmente domingos previos a eventos.',
			],
			acciones: [
				'Desplegar sistema de recomendación en tiempo real integrado en campañas de email para elevar la tasa de recompra del 10 %.',
				'A/B testing en checkout para mejorar la conversión carrito→compra (actualmente 22 %).',
				'Depurar catálogo: eliminar el 50 % de SKUs sin ventas y ajustar pricing en categorías <5 €.',
				'Concentrar inversión publicitaria en franjas 9-13 h y 18-20 h, con refuerzo en domingos pre-evento.',
				'Implementar programa de fidelización basado en segmentación RFM con CPA máximo de 42 €.',
			],
			herramientas: ['Python', 'Pandas', 'SQLAlchemy', 'Plotly', 'Matplotlib', 'Seaborn'],
		},
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
		summary: {
			objetivo:
				'Determinar si las anomalías detectadas en dos plantas fotovoltaicas se deben a fallos reales de equipos o a errores de calibración, para decidir si desplegar mantenimiento urgente.',
			enfoque: [
				'Análisis de 136.472 registros de sensores IoT (irradiación, temperatura, potencia DC/AC) con granularidad de 15 minutos durante 34 días.',
				'Cálculo de eficiencia de inversores (AC/DC × 100) y correlación irradiación-generación DC.',
				'Detección de registros con generación nula en horas de luz solar y comparativa de rendimiento por inversor.',
				'Remuestreo temporal (15 min → diario) con agregaciones múltiples y análisis de patrones de ciclo de 24 horas.',
			],
			resultados: [
				'Planta 1: generación DC ~10× superior a Planta 2 → error de calibración en medidores, no fallo real. Eficiencia aparente del ~10 % vs. ~90 % esperado.',
				'Planta 2: varios inversores con suministro DC insuficiente en horas pico → módulos solares defectuosos o desconectados que requieren inspección física.',
				'Inversores de Planta 2 funcionan correctamente (~90 % eficiencia DC→AC): el problema es de entrada, no de conversión.',
				'Recomendación: auditar cadena de medición DC en Planta 1 antes de desplegar técnicos; inspección de módulos en Planta 2 en paralelo.',
			],
			acciones: [
				'Auditar la cadena de medición DC en Planta 1: verificar factores de escala y calibración de sensores antes de desplegar técnicos.',
				'Si se confirma la integridad de los datos, proceder con la revisión física de todos los inversores de Planta 1.',
				'En paralelo, inspeccionar los módulos que alimentan los inversores con generación nula en Planta 2.',
			],
			herramientas: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
		},
	},
	{
		title: 'People & HR analytics',
		description:
			'Pipeline analítico end-to-end desde MySQL hasta dashboard interactivo en Power BI. Análisis de turnover, tenure, compensación y evaluaciones de desempeño en 4 vistas interconectadas.',
		tags: ['SQL', 'Power BI', 'DAX', 'Power Query'],
		github: 'https://github.com/alejandroruizcastellano/People-HR-Analytics',
		category: 'analytics',
		icon: 'dashboard',
		featured: true,
		summary: {
			objetivo:
				'Construir un cuadro de mando interactivo para que dirección y RRHH tomen decisiones basadas en datos sobre rotación, antigüedad, salarios y evaluación de desempeño de la plantilla.',
			enfoque: [
				'Exploración y extracción de datos con MySQL sobre la Employee Sample Database (265 k empleados, 9 departamentos, 9 países).',
				'Transformación y limpieza con Power Query: tratamiento de fechas, tipos y columnas calculadas.',
				'Modelado de métricas en DAX: rotación, antigüedad, profesionalización, tabla calendario.',
				'Dashboard en Power BI con 4 vistas interconectadas: visión global, departamentos, salarios y evaluación.',
			],
			resultados: [
				'Rotación histórica del 45,8 % reducida progresivamente hasta ~20 % en años recientes.',
				'Antigüedad media de 23 años → necesidad de planificación de jubilaciones y renovación.',
				'Mayor rotación en niveles iniciales (Assistant Engineer y Staff > 76 %).',
				'Solo el 48,6 % de la plantilla tiene evaluación registrada → gap crítico para RRHH.',
				'Desempeño promedio de 3,33/5 con tendencia de mejora consistente.',
			],
			herramientas: ['MySQL', 'Power Query', 'DAX', 'Power BI'],
		},
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
		summary: {
			objetivo:
				'Evaluar el mercado de alquiler turístico en Madrid para identificar zonas con mejor ratio coste de adquisición vs. ingresos por alquiler y priorizar inversiones inmobiliarias.',
			enfoque: [
				'Análisis exploratorio de datasets públicos de alquileres turísticos (tipo Airbnb) y precios de venta de inmuebles.',
				'Correlación entre ingresos por alquiler, costes de compra y tasas de ocupación por barrio.',
				'Mapas interactivos con Folium para visualización geoespacial de oportunidades.',
				'Almacenamiento de datos procesados en SQLite para consultas posteriores.',
			],
			resultados: [
				'14 barrios identificados con alto potencial de inversión por equilibrio precio-rentabilidad.',
				'Apartamentos de 1 dormitorio con capacidad para 4 huéspedes: punto óptimo entre ingresos y demanda.',
				'Habitaciones privadas superan en ocupación a otros formatos, reduciendo riesgo de vacancia.',
				'La superficie tiene mínima correlación con ocupación o precio → la estrategia de pricing importa más que los metros.',
				'San Blas-Canillejas identificado como zona emergente para modelo de alquiler por eventos.',
			],
			acciones: [
				'Priorizar adquisiciones en los 14 barrios identificados, focalizando en apartamentos de 1 dormitorio con capacidad para 4 huéspedes.',
				'Posicionar propiedades como habitación privada para maximizar ocupación y reducir vacancia.',
				'Explotar el potencial de San Blas-Canillejas como zona emergente para alquiler orientado a eventos.',
				'Comprar en ubicaciones menos céntricas sin penalización: la tipología, calidad y estrategia de pricing importan más que los metros o la proximidad a atracciones.',
			],
			herramientas: ['Python', 'Pandas', 'Folium', 'Matplotlib', 'Seaborn', 'SQLite'],
		},
	},
];
