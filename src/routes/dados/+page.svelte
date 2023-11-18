<script lang="ts">
	import csvIcon from "$assets/csv.svg";

	import type { PageData } from "./$types";

	export let data: PageData;

	let { rows } = data;
</script>

<svelte:head>
	<title>dados.csv</title>
	<link rel="icon" type="image/svg" href={csvIcon} />
</svelte:head>

<table
	class="scrollbar block w-[calc(100vw-32px)] divide-y divide-gray-400 overflow-x-auto md:w-[calc(100vw-282px)]"
>
	<thead>
		<tr>
			{#each Object.keys(rows[0]) as key (key)}
				<th
					class="whitespace-nowrap px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-zinc-400 md:whitespace-normal"
				>
					{key}
				</th>
			{/each}
		</tr>
	</thead>
	<tbody class="divide-y divide-zinc-500">
		{#each rows as row}
			<tr>
				{#each Object.values(row) as value}
					<td class="whitespace-nowrap px-6 py-4">{value}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>
