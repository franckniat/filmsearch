<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import MainSearchbar from '@/components/MainSearchbar.vue'
import { ArrowUpRight } from 'lucide-vue-next'
import { useRoute, RouterLink, RouterView } from 'vue-router'
import Badge from '@/components/ui/badge/Badge.vue'

const featuresLinks = [
  {
    name: 'Popular',
    link: '/popular',
  },
  {
    name: 'Upcoming',
    link: '/upcoming',
  },
  {
    name: 'Top rated',
    link: '/top-rated',
  },
  {
    name: 'Now playing',
    link: '/now-playing',
  },
]
const route = useRoute()
</script>

<template>
  <div>
    <Navbar />
    <div class="max-w-[1000px] mx-auto px-4">
      <main class="pt-[8rem] pb-10">
        <div class="flex flex-col items-center justify-center">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
            class="group mb-4"
          >
            <Badge variant="outline" class="gap-3">
              <span class="bg-primary w-2 h-2 inline-block rounded-full"></span>
              Powered by TMDB
              <ArrowUpRight
                class="inline-block ml-1 group-hover:translate-x-0.5 -group-hover:translate-y-0.5 transition-transform"
              />
            </Badge>
          </a>
          <h1
            class="text-4xl font-bold max-w-3xl text-center leading-normal font-mono tracking-tight"
          >
            Discover all about your favorite movies
          </h1>
          <p class="text-lg text-muted-foreground mt-4 max-w-2xl text-center">
            Search for movies, series and documentaries, read reviews, and find out more about the
            films you love.
          </p>
        </div>
        <div class="py-5 mt-8">
          <MainSearchbar />
        </div>
        <div class="my-10">
          <div class="flex flex-col gap-5 items-center font-medium">
            <span class="text-foreground/70 font-bold">Explore by : </span>
            <div class="flex gap-5">
              <RouterLink
                v-for="feature in featuresLinks"
                :key="feature.name"
                :to="feature.link"
                :class="
                  'text-foreground/70 hover:text-primary px-3 py-1 rounded-md transition-all' +
                  (route.path === feature.link ? ' text-primary bg-foreground/5' : '')
                "
              >
                {{ feature.name }}
              </RouterLink>
            </div>
          </div>
        </div>
      </main>
      <RouterView />
    </div>
  </div>
</template>
