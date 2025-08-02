<script setup lang="ts">
import FilmCard from '@/components/FilmCard.vue'
import { getMoviesByFeature } from '@/lib/fetcher'
import type { SearchResultMovie } from '@/types'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const feature = route.params.feature as string
const films = ref<SearchResultMovie[]>([])
if (!feature) {
    throw new Error('Feature parameter is required')
}
watch(
    () => route.params.feature,
    async (newFeature) => {
        if (newFeature) {
            try {
                const data = await getMoviesByFeature(newFeature as string)
                films.value = data as SearchResultMovie[]
            } catch (error) {
                console.error('Error fetching films:', error)
            }
        }
    },
    { immediate: true },
)
</script>
<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pb-14">
        <FilmCard
            v-for="film in films"
            :key="film.id"
            :title="film.title"
            :synopsis="film.overview"
            :imageUrl="film.poster_path"
            :backdropUrl="film.backdrop_path"
            :rating="film.vote_average"
            :releaseDate="film.release_date"
        />
    </div>
</template>
