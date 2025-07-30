<script setup lang="ts">
import { Film } from 'lucide-vue-next'
import { RouterView } from 'vue-router'
</script>
<template>
    <div class="grid min-h-svh lg:grid-cols-2">
        <div class="flex flex-col gap-4 p-6 md:p-10">
            <div className="flex justify-center gap-2 md:justify-start">
                <RouterLink to="/" className="flex items-center gap-2 font-medium">
                    <div
                        className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground p-0.5"
                    >
                        <Film className="size-4" />
                    </div>
                    film search.
                </RouterLink>
            </div>
            <RouterView />
        </div>
        <div class="relative hidden bg-muted lg:block">
            <img
                src="/auth-placeholder.jpg"
                alt="Image"
                width="1920"
                height="1080"
                class="absolute inset-0 h-full w-full object-cover brightness-[0.8] dark:brightness-[0.2] dark:grayscale"
            />
        </div>
    </div>
</template>
