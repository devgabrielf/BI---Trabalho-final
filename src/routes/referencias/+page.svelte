<script lang="ts">
	import cssIcon from "$assets/css.svg";

	import type { PageData } from "./$types";

	export let data: PageData;

	let { rows } = data;
</script>

<svelte:head>
	<title>referencias.css</title>
	<link rel="icon" type="image/svg" href={cssIcon} />
</svelte:head>

<ul class="flex list-disc flex-col gap-3 p-8">
	{#each rows as row (row.Universidade)}
		{@const university = row.Universidade}
		{@const city = row["Endereço"].split("-").at(-2)?.split(", ").at(-1)}
		<li class="text-zinc-200">
			INEP. Enade 2021 - {university} - {city}. Brasília, 2021.
		</li>
	{/each}
</ul>
