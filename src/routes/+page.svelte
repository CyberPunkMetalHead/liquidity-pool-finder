<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import {
		MultiSelect,
		Select,
		Pagination,
		PaginationItem,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell,
		Input,
		NumberInput
	} from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';

	import { page } from '$app/stores';
	import { tick } from 'svelte';

	import PriceTag from '$lib/Components/PriceTag.svelte';
	import { networks } from '$lib/Data/AvailableNetworks';
	import { trendingSorters } from '$lib/Data/PoolSortingOptions';
	import DataTable from '$lib/Components/DataTable.svelte';
	import FilterTabs from '$lib/Components/FilterTabs.svelte';

	let data = $props();
	let currentPage = $state(1);
	let openRow: number | null = $state(null);

	let selectedNetworks = $state([]);
	let checks = $state('');
	let trendingSorter = $state('');
	let poolCreatedHoursMax = $state(undefined);
	let minFDV = $state(undefined);
	let maxFDV = $state(undefined);
	let minVolume = $state(undefined);
	let maxVolume = $state(undefined);
	let minTxCount = $state(undefined);
	let maxTxCount = $state(undefined);
	let maxBuyTax = $state(undefined);
	let networkParams = $derived(() => selectedNetworks.join(','));

	const previous = () => {
		if (currentPage == 1) return;
		currentPage -= 1;
	};
	const next = () => {
		currentPage += 1;
	};

	$effect(() => {
		updateQueryParams();
	});

	const updateQueryParams = () => {
		const url = new URL(window.location.href);
		url.searchParams.set('page', currentPage.toString());
		if (networkParams().length > 0) {
			url.searchParams.set('networks', networkParams());
		} else {
			url.searchParams.delete('networks');
		}
		if (checks) {
			url.searchParams.set('checks', checks);
		} else {
			url.searchParams.delete('checks');
		}
		if (trendingSorter) {
			url.searchParams.set('sort', trendingSorter);
		} else {
			url.searchParams.delete('sort');
		}
		if (poolCreatedHoursMax) {
			url.searchParams.set('pool_created_hour_max', poolCreatedHoursMax);
		} else {
			url.searchParams.delete('pool_created_hour_max');
		}
		if (minFDV) {
			url.searchParams.set('fdv_usd_min', minFDV);
		} else {
			url.searchParams.delete('fdv_usd_min');
		}
		if (maxFDV) {
			url.searchParams.set('fdv_usd_max', maxFDV);
		} else {
			url.searchParams.delete('fdv_usd_max');
		}
		if (minVolume) {
			url.searchParams.set('h24_volume_usd_min', minVolume);
		} else {
			url.searchParams.delete('h24_volume_usd_min');
		}
		if (maxVolume) {
			url.searchParams.set('h24_volume_usd_max', maxVolume);
		} else {
			url.searchParams.delete('h24_volume_usd_max');
		}
		if (minTxCount) {
			url.searchParams.set('tx_count_min', minTxCount);
		} else {
			url.searchParams.delete('tx_count_min');
		}
		if (maxTxCount) {
			url.searchParams.set('tx_count_max', maxTxCount);
		} else {
			url.searchParams.delete('tx_count_max');
		}
		if (maxBuyTax) {
			url.searchParams.set('buy_tax_percentage_max', maxBuyTax);
		} else {
			url.searchParams.delete('buy_tax_percentage_max');
		}
		goto(url.toString(), { replaceState: true });
	};
</script>

<div class="flex w-full flex-col gap-8 p-20">
	<h2 class="text-xl font-semibold">Pool Finder</h2>
	<p>Welcome to Pool Finder. Use this tool identify new and promising liquidity pools.</p>
	<div>
		<FilterTabs
			bind:selectedNetworks
			bind:checks
			bind:trendingSorter
			bind:poolCreatedHoursMax
			bind:minFDV
			bind:maxFDV
			bind:minVolume
			bind:maxVolume
			bind:minTxCount
			bind:maxTxCount
			bind:maxBuyTax
		></FilterTabs>
	</div>
	<DataTable tableData={data} />
	<div class="flex w-full items-center justify-center">
		<Pagination
			pages={[]}
			large
			on:previous={previous}
			on:next={next}
			on:change={updateQueryParams}
		>
			<span slot="prev">Prev</span>
		</Pagination>
	</div>
</div>
