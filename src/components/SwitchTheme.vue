<script setup lang="ts">
import { Switch } from '@/components/ui/switch'
import { useDark, useToggle } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const isDark = useDark()
const toggleTheme = useToggle(isDark)
</script>

<template>
    <Switch :model-value="isDark" @update:model-value="toggleTheme" class="cursor-pointer">
        <template #thumb>
            <div class="flex items-center justify-center h-full w-full">
                <Icon v-if="isDark" icon="lucide:moon" class="size-3 dark:text-black/80" />
                <Icon v-else icon="lucide:sun" class="size-3" />
            </div>
        </template>
    </Switch>
</template>
