<script lang="ts">
	import cssIcon from "$assets/css.svg";
	import { universities } from "$lib/data/universities";
</script>

<svelte:head>
	<title>referencias.css</title>
	<link rel="icon" type="image/svg" href={cssIcon} />
</svelte:head>

<ul class="flex list-disc flex-col gap-3 p-8">
	{#each universities as university (university.Universidade)}
		{@const universityName = university.Universidade}
		{@const city = university["Endereço"].split(" -").at(-2)?.split(", ").at(-1)}
		<li class="text-zinc-200">
			INEP. Enade 2021 - {universityName} - {city}. Brasília, 2021.
		</li>
	{/each}
</ul>
