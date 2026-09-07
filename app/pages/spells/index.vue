<script setup>
const {data: spells, pending, error} = await useSheetData('spells')
</script>

<template>
	<main>
		<h1>Spells</h1>

		<ClientOnly>
			<div v-if="pending">
				Загрузка...
			</div>

			<div v-else-if="error">
				Ошибка: {{ error }}
			</div>

			<div v-else>
				<article
					v-for="spell in spells"
					:key="spell.id"
				>
					<NuxtLink :to="`/spells/${spell.slug}`">
						{{ spell.name }}
					</NuxtLink>

					<div>
						Level: {{ spell.lvl }}
					</div>
				</article>
			</div>

			<template #fallback>
				<div>Загрузка...</div>
			</template>
		</ClientOnly>
	</main>
</template>

<style scoped lang="scss">
</style>