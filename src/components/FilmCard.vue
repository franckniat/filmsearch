<script setup lang="ts">
import { useImageLoader } from '@/hooks/use-image-loader'

type Film = {
    title: string
    synopsis: string
    imageUrl: string
    backdropUrl: string
    releaseDate: string
    rating: number
}

const props = defineProps<Film>()
const { isLoaded, hasError, imageSrc, handleLoad, handleError } = useImageLoader(
    props.imageUrl,
    props.backdropUrl,
)
const backdropPlaceholder = `https://image.tmdb.org/t/p/w300${props.backdropUrl}`
</script>
<template>
    <div class="space-y-4">
        <div class="relative overflow-hidden">
            <img
                v-if="!isLoaded && !hasError"
                :src="backdropPlaceholder"
                :alt="props.title"
                class="absolute inset-0 w-full h-full object-cover blur-md scale-110 transition-opacity duration-300"
            />

            <img
                :src="imageSrc"
                :alt="props.title"
                :class="[
                    'aspect-auto w-full h-auto object-cover transition-opacity duration-300',
                    isLoaded ? 'opacity-100' : 'opacity-0',
                ]"
                @load="handleLoad"
                @error="handleError"
            />

            <div
                v-if="hasError"
                class="aspect-auto w-full h-48 bg-gray-200 flex items-center justify-center"
            >
                <span class="text-gray-500">Image non disponible</span>
            </div>
        </div>
        <div class="space-y-3">
            <h1 class="text-lg font-semibold">{{ props.title }}</h1>
            <p class="text-sm text-muted-foreground line-clamp-3">{{ props.synopsis }}</p>
            <p class="text-sm text-muted-foreground">
                <span class="font-medium text-primary">{{ props.rating }}</span>
            </p>
        </div>
    </div>
</template>
