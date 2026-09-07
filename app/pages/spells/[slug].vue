<script setup>
const route = useRoute()

const {data: spells, pending, error} = await useSheetData('spells')

const spell = computed(() => {
	return spells.value.find(item => {
		return item.slug === route.params.slug
	})
})
</script>

<template>
	<main>
		<ClientOnly>
			<div v-if="pending">
				Загрузка...
			</div>

			<div v-else-if="error">
				Ошибка: {{ error }}
			</div>

			<article v-else-if="spell">
				<NuxtLink to="/spells">
					← Все заклинания
				</NuxtLink>

				<h1>{{ spell.name }}</h1>

				<div>
					Level: {{ spell.lvl }}
				</div>

				<div>
					Status: {{ spell.status }}
				</div>

				<p>
					{{ spell.description }}
				</p>
			</article>

			<div v-else>
				Заклинание не найдено
			</div>

			<template #fallback>
				<div>Загрузка...</div>
			</template>
		</ClientOnly>
	</main>
</template>

<style scoped lang="scss">
</style>