<script lang="ts">
	import { page as pageStore } from "$app/stores";
	import { ChevronDown } from "lucide-svelte";

	import { cn } from "$utils/css";
	import { pages } from "$utils/pages";

	import { FileName } from "$components";

	let isOpen = true;
</script>

<div class="hidden h-full min-h-[calc(100vh-60px)] min-w-[200px] flex-col bg-zinc-900 py-3 md:flex">
	<span class="mb-4 block cursor-default px-3 text-[13px] font-[300] tracking-widest">
		EXPLORER
	</span>
	<button on:click={() => (isOpen = !isOpen)} class="mb-2 flex items-center gap-2 px-3">
		<ChevronDown
			size={16}
			color="#aaa"
			class={cn("transition-transform", { "-rotate-90": !isOpen })}
		/>
		<span class="text-sm font-bold text-zinc-200">BI</span>
	</button>
	<div class={cn("flex flex-col", { hidden: !isOpen })}>
		{#each pages as page (page.route)}
			{@const isActive = $pageStore.route.id === page.route}
			<a
				href={page.route}
				class={cn("px-3 py-[3px]", {
					"bg-zinc-700/50": isActive,
					"hover:bg-zinc-700/40": !isActive,
				})}
			>
				<FileName {page} textClass="text-sm" />
			</a>
		{/each}
	</div>
</div>
