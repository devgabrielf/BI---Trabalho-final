<script lang="ts">
	import { page as pageStore } from "$app/stores";

	import { cn } from "$utils/css";
	import type { PageType } from "$utils/pages";

	import { FileName } from "$components";

	export let page: PageType;

	$: isActive = $pageStore.route.id === page.route;
</script>

<a
	href={page.route}
	class={cn("tab min-w-fit border-zinc-800 px-[20px] py-[8px] text-[15px] transition-colors", {
		"border-t border-t-amber-600 bg-zinc-800 pt-[7px]": isActive,
		"hover:bg-zinc-950/25": !isActive,
	})}
>
	<FileName {page} />
</a>

<style lang="postcss">
	.tab {
		@apply border-l;
	}

	.tab:last-child {
		@apply border-r;
	}
</style>
