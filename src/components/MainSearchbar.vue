<script lang="ts" setup>
import { Search } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Input from '@/components/ui/input/Input.vue'
import Button from '@/components/ui/button/Button.vue'
const search = ref('')
const router = useRouter()
const handleSearch = () => {
  if (search.value.trim() === '') return
  router.push(`/search/${search.value}`)
}
</script>

<template>
  <form class="relative max-w-[500px] mx-auto w-full" @submit.prevent="handleSearch">
    <Input
      v-model="search"
      placeholder="Search for movies, series or documentaries"
      autofocus
      class="h-14 focus:drop-shadow-lg transition-all"
    />
    <Button
      type="submit"
      variant="default"
      size="icon"
      class="absolute top-1/2 -translate-y-1/2 h-12 w-full right-1 sm:w-24 duration-75 transition-all cursor-pointer"
    >
      <Search :size="25" class="" />
      <span class="hidden sm:block"> Search </span>
    </Button>
  </form>
</template>
