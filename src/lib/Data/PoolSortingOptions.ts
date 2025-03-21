export const trendingSorters = [
	{ name: '5m', value: 'm5_trending' },
	{ name: '1h', value: 'h1_trending' },
	{ name: '6h', value: 'h6_trending' },
	{ name: '24h', value: 'h24_trending' }
];
export const performanceSorters = [
	{ name: 'Transaction Count (Descending)', value: 'h24_tx_count_desc' },
	{ name: '24h Volume (Descending)', value: 'h24_volume_usd_desc' },
	{ name: 'Price Change (Descending)', value: 'h24_price_change_percentage_desc' },
	{ name: 'Created At (Descending)', value: 'pool_created_at_desc' }
];

export const volumeOptions = [
	{ name: '$10k', value: 10000 },
	{ name: '$100k', value: 100000 },
	{ name: '$1m', value: 1000000 },
	{ name: '$10m', value: 10000000 },
	{ name: '$1b', value: 1000000000 },
	{ name: '$10b', value: 10000000000 }
];

export const txCountOptions = [
	{ name: '10', value: 10 },
	{ name: '100', value: 100 },
	{ name: '1000', value: 1000 },
	{ name: '10k', value: 10000 },
	{ name: '100k', value: 100000 },
	{ name: '1m', value: 1000000 }
];

export const taxOptions = [
	{ name: '0%', value: 0 },
	{ name: '0.1%', value: 0.1 },
	{ name: '0.5%', value: 0.5 },
	{ name: '1%', value: 1 },
	{ name: '10%', value: 10 }
];
