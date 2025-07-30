<script setup lang="ts">
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { ChevronDown } from 'lucide-vue-next'
import SwitchTheme from './SwitchTheme.vue'
import Separator from '@/components/ui/separator/Separator.vue'

const navItems = [
  {
    title: 'Movies',
    subItems: [
      { title: 'Popular', to: '/movies/popular' },
      { title: 'Top Rated', to: '/movies/top-rated' },
      { title: 'Upcoming', to: '/movies/upcoming' },
      { title: 'Now Playing', to: '/movies/now-playing' },
    ],
  },
  {
    title: 'TV Shows',
    subItems: [
      { title: 'Popular', to: '/tv/popular' },
      { title: 'Top Rated', to: '/tv/top-rated' },
      { title: 'Airing Today', to: '/tv/airing-today' },
      { title: 'On The Air', to: '/tv/on-the-air' },
    ],
  },
  {
    title: 'Series',
    subItems: [
      { title: 'Popular', to: '/series/popular' },
      { title: 'Top Rated', to: '/series/top-rated' },
      { title: 'Airing Today', to: '/series/airing-today' },
      { title: 'On The Air', to: '/series/on-the-air' },
    ],
  },
]
</script>
<template>
  <header class="sticky top-0 z-50 bg-background/90 backdrop-blur-sm">
    <div class="max-w-[1000px] mx-auto px-4">
      <nav class="flex justify-between items-center h-[65px] text-sm">
        <RouterLink to="/" class="text-foreground font-bold text-lg">
          F.<span class="text-primary">S</span>
        </RouterLink>
        <div class="flex items-center gap-4 font-medium">
          <RouterLink to="/" class="hover:text-primary">Home</RouterLink>
          <HoverCard :open-delay="100" :close-delay="100">
            <HoverCardTrigger
              class="cursor-pointer flex items-center gap-2 data-[state=open]:text-primary group"
            >
              Movies
              <ChevronDown
                class="w-4 h-4 transition-transform duration-100 group-data-[state=open]:rotate-180"
              />
            </HoverCardTrigger>
            <HoverCardContent class="w-48">
              <ul class="space-y-2 text-sm">
                <li v-for="item in navItems[0].subItems" :key="item.title">
                  <RouterLink :to="item.to" class="block hover:text-primary">
                    {{ item.title }}
                  </RouterLink>
                </li>
              </ul>
            </HoverCardContent>
          </HoverCard>
          <HoverCard :open-delay="100" :close-delay="100">
            <HoverCardTrigger
              class="cursor-pointer flex items-center gap-2 data-[state=open]:text-primary group"
            >
              Series
              <ChevronDown
                class="w-4 h-4 transition-transform duration-100 group-data-[state=open]:rotate-180"
              />
            </HoverCardTrigger>
            <HoverCardContent class="w-48 text-sm">
              <ul class="space-y-2">
                <li v-for="item in navItems[2].subItems" :key="item.title">
                  <RouterLink :to="item.to" class="block hover:text-primary">
                    {{ item.title }}
                  </RouterLink>
                </li>
              </ul>
            </HoverCardContent>
          </HoverCard>
          <HoverCard :open-delay="100" :close-delay="100">
            <HoverCardTrigger
              class="cursor-pointer flex items-center gap-2 data-[state=open]:text-primary group"
            >
              TV Shows
              <ChevronDown
                class="w-4 h-4 transition-transform duration-100 group-data-[state=open]:rotate-180"
              />
            </HoverCardTrigger>
            <HoverCardContent class="w-48 text-sm">
              <ul class="space-y-2">
                <li v-for="item in navItems[1].subItems" :key="item.title">
                  <RouterLink :to="item.to" class="block hover:text-primary">
                    {{ item.title }}
                  </RouterLink>
                </li>
              </ul>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div class="flex items-center gap-4 h-5">
          <SwitchTheme />
          <Separator orientation="vertical" />
          <RouterLink to="/auth/login" class="hover:text-primary">Login</RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>
