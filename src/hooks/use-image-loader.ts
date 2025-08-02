import { ref, computed } from 'vue'

export function useImageLoader(imageUrl: string, backdropUrl?: string) {
    const isLoaded = ref(false)
    const hasError = ref(false)

    const imageSrc = computed(() => `https://image.tmdb.org/t/p/original${imageUrl}`)

    // Utiliser le backdrop si disponible, sinon une version petite de l'image principale
    const placeholderSrc = computed(() => {
        if (backdropUrl) {
            return `https://image.tmdb.org/t/p/w300${backdropUrl}`
        }
        return `https://image.tmdb.org/t/p/w92${imageUrl}`
    })

    const handleLoad = () => {
        isLoaded.value = true
    }

    const handleError = () => {
        hasError.value = true
    }

    return {
        isLoaded,
        hasError,
        imageSrc,
        placeholderSrc,
        handleLoad,
        handleError
    }
}
