<script lang="ts">
	import { X } from "lucide-svelte";

	import gabrielPicture from "$assets/gabriel.jpg";
	import htmlIcon from "$assets/html.svg";
	import pedroPicture from "$assets/pedro.jpeg";
	import pucLogo from "$assets/puc.png";
</script>

<svelte:head>
	<title>inicio.html</title>
	<link rel="icon" type="image/svg" href={htmlIcon} />
</svelte:head>

<div class="flex h-full flex-col">
	<div class="mb-8 mt-4 flex flex-col items-center justify-center md:flex-row">
		<div
			class="mb-8 flex flex-col items-center justify-center gap-2 border-zinc-500 md:mr-6 md:border-r md:pr-6"
		>
			<img src={pucLogo} alt="Logo da PUC Minas" class="w-28" />
			<span class="block max-w-[330px] text-center text-lg font-bold"
				>Pontíficia Universidade Católica de Minas Gerais</span
			>
		</div>
		<div class="flex flex-col gap-2 md:gap-4">
			<span><b>Curso:</b> Bacharelado em Sistemas de Informação</span>
			<span><b>Disciplina:</b> Business Intelligence</span>
			<span><b>Professor:</b> Clóvis Lemos Tavares</span>
		</div>
	</div>

	<h1
		class="my-4 flex flex-col items-center justify-center gap-1 text-center text-2xl font-bold md:text-4xl lg:flex-row"
	>
		Desempenho acadêmico <X /> Situação socioeconômica
	</h1>
	<h2 class="mb-10 text-center text-zinc-300 md:text-xl">
		Universidades Federais do Estado de Minas gerais
	</h2>
	<div class="flex flex-1 flex-col px-2 md:px-8">
		<p class="mb-16 text-justify leading-relaxed lg:mb-40 lg:text-xl">
			Neste estudo, exploramos a relação entre a performance acadêmica dos cursos, mensurada pela
			média no ENADE 2021, e a composição socioeconômica dos alunos, especificamente aqueles com
			renda familiar de até 3 salários mínimos. Ao analisar as diferentes universidades federais no
			estado de Minas Gerais, buscamos compreender como a diversidade socioeconômica impacta o
			desempenho acadêmico. A coleta de dados das médias de notas dos cursos e das porcentagens de
			alunos com renda familiar mais restrita permite uma visão abrangente das dinâmicas
			educacionais, fornecendo insights para o aprimoramento da qualidade do ensino superior na
			região.
		</p>
		<div class="flex-1" />
		<div class="flex flex-col gap-6">
			<span class="font-bold uppercase text-zinc-400">Alunos:</span>
			<div class="mb-8 flex flex-col gap-8 md:flex-row">
				<div class="flex items-center gap-4">
					<img
						src={gabrielPicture}
						alt="Gabriel Ferreira"
						class="h-12 w-12 rounded-full object-cover"
					/>
					<span class="text-lg">Gabriel Ferreira</span>
				</div>
				<div class="flex items-center gap-4">
					<img
						src={pedroPicture}
						alt="Pedro Henrique"
						class="h-12 w-12 rounded-full object-cover"
					/>
					<span class="text-lg">Pedro Henrique</span>
				</div>
			</div>
		</div>
	</div>
</div>
