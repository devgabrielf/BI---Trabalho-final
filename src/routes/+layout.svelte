<script lang="ts">
	import "../app.css";

	import { onNavigate } from "$app/navigation";

	import { Explorer, Footer, Header, Sidebar, Tabs } from "$components";

	onNavigate(navigation => {
		if (!document.startViewTransition) return;

		return new Promise(resolve => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<Header />
<main class="flex md:h-[calc(100vh-60px)]">
	<Sidebar />
	<Explorer />
	<div class="flex flex-1 flex-col">
		<Tabs />
		<div class="scrollbar h-[calc(100%-1rem)] overflow-auto p-4 font-arial">
			<slot />
		</div>
	</div>
</main>
<Footer />
